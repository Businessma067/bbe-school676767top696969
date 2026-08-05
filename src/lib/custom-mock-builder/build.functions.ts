import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import {
  CUSTOM_MOCK_QUESTION_COUNTS,
  durationMinutesForQuestionCount,
  pointsTotalForEconomicsQuestions,
} from "@/config/custom-mock-builder";
import { SCORING_CONFIG } from "@/config/scoring-config";
import type { ExamQuestion } from "@/lib/mock-exams";
import {
  chaptersFromSubtopicIds,
  findSubtopic,
  getEnabledBookChapters,
} from "@/data/economics-subtopics";

const Input = z.object({
  subtopics: z.array(z.string().min(1)).min(1).max(40),
  questionCount: z.union([z.literal(5), z.literal(10), z.literal(20)]),
});

type CaseRow = {
  id: string;
  case_id: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  subsection: string;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Random-order pick for a mock:
 * - each selected subtopic’s own pool is shuffled (never CASE …01, …02 order);
 * - picks are interleaved across selected subtopics when possible;
 * - final mock set is shuffled again so display order is random.
 * Falls back to a plain shuffle of the whole pool when rows are legacy chapter-level.
 */
function pickRandomFromSubtopics(
  pool: CaseRow[],
  subtopics: string[],
  questionCount: number,
): CaseRow[] {
  const bySub = new Map<string, CaseRow[]>();
  for (const row of pool) {
    const key = subtopics.includes(row.subsection) ? row.subsection : "__mixed__";
    const list = bySub.get(key) ?? [];
    list.push(row);
    bySub.set(key, list);
  }

  for (const [k, list] of bySub) {
    bySub.set(k, shuffle(list));
  }

  const keys = shuffle([...bySub.keys()]);
  const queues = keys.map((k) => [...(bySub.get(k) ?? [])]);
  const picked: CaseRow[] = [];
  const seen = new Set<string>();

  while (picked.length < questionCount) {
    let progressed = false;
    for (const q of queues) {
      while (q.length > 0) {
        const next = q.shift()!;
        if (seen.has(next.id)) continue;
        seen.add(next.id);
        picked.push(next);
        progressed = true;
        break;
      }
      if (picked.length >= questionCount) break;
    }
    if (!progressed) break;
  }

  return shuffle(picked);
}

function caseToExamQuestion(c: CaseRow, index: number, mockId: string): ExamQuestion {
  const statements = (c.statements ?? []).slice(0, 5);
  const keys = (c.answer_key ?? []).slice(0, 5);
  const expl = (c.tactical_explanations ?? []).slice(0, 5);
  while (statements.length < 5) statements.push("—");
  while (keys.length < 5) keys.push(false);
  while (expl.length < 5) expl.push("");

  return {
    id: `${mockId}-q${index}`,
    index,
    subject: "economics",
    stem: c.context?.trim() || c.case_id,
    maxPoints: SCORING_CONFIG.economics.defaultMaxPerTask,
    statements: statements.map((text, j) => ({
      id: `${mockId}-q${index}-s${j + 1}`,
      text,
      isTrue: Boolean(keys[j]),
      explanation: expl[j] || (keys[j] ? "This statement is true." : "This statement is false."),
    })),
  };
}

/**
 * Build a Custom Mock from existing Full Course Economics cases (no AI).
 * Selected book subtopics (2.1, 2.2, …) determine which chapters to sample from.
 */
export const buildCustomMock = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data, context }) => {
    if (!CUSTOM_MOCK_QUESTION_COUNTS.includes(data.questionCount)) {
      throw new Error("Invalid question count");
    }

    const enabled = getEnabledBookChapters();
    const enabledSubIds = new Set(enabled.flatMap((c) => c.subtopics.map((s) => s.id)));
    const subtopics = [...new Set(data.subtopics)].filter((id) => enabledSubIds.has(id)).sort();
    if (subtopics.length === 0) {
      throw new Error("Select at least one book subtopic (e.g. 2.1, 2.2).");
    }

    const chapters = chaptersFromSubtopicIds(subtopics);
    if (chapters.length === 0) {
      throw new Error("Selected subtopics do not map to an enabled chapter.");
    }

    // Prefer cases tagged with book section ids (e.g. '2.1'). Also include
    // legacy chapter-level rows ('2') so older Full Course banks remain usable.
    const subsectionKeys = [...new Set([...subtopics, ...chapters.map(String)])];

    const { data: caseRows, error: caseError } = await context.supabase
      .from("economics_cases")
      .select("id, case_id, context, statements, answer_key, tactical_explanations, subsection")
      .eq("tier", "full")
      .in("subsection", subsectionKeys)
      .order("sort_order", { ascending: true });

    if (caseError) throw new Error(`Failed to load Full Course cases: ${caseError.message}`);
    const allRows = (caseRows ?? []) as CaseRow[];

    // Prefer subtopic-tagged cases when available for the selection.
    const tagged = allRows.filter((c) => subtopics.includes(c.subsection));
    const pool = tagged.length >= data.questionCount ? tagged : allRows;
    if (pool.length === 0) {
      throw new Error("No Full Course questions found for the selected subtopics yet.");
    }

    // Shuffle within each selected subsection so mocks never follow sort_order /
    // CASE …01, …02 order; then interleave subtopics and shuffle the final set.
    const picked = pickRandomFromSubtopics(pool, subtopics, data.questionCount);
    if (picked.length < data.questionCount) {
      throw new Error(
        `Only ${picked.length} Full Course questions available for the selected chapters (need ${data.questionCount}). Pick more chapters/subtopics or fewer questions.`,
      );
    }

    const durationMinutes = durationMinutesForQuestionCount(data.questionCount);
    const pointsTotal = pointsTotalForEconomicsQuestions(data.questionCount);
    const label = subtopics.join(", ");
    const title = `Custom Economics Mock · ${label} · ${data.questionCount}Q`;

    const { data: inserted, error: insertError } = await context.supabase
      .from("custom_mocks")
      .insert({
        user_id: context.userId,
        subject: "economics",
        title,
        chapters: subtopics,
        question_count: data.questionCount,
        duration_minutes: durationMinutes,
        points_total: pointsTotal,
        questions: [],
      })
      .select("id")
      .single();

    if (insertError || !inserted) {
      throw new Error(insertError?.message ?? "Failed to save custom mock");
    }

    const questions = picked.map((c, i) => caseToExamQuestion(c, i + 1, inserted.id));

    const { data: saved, error: updateError } = await context.supabase
      .from("custom_mocks")
      .update({ questions: questions as never })
      .eq("id", inserted.id)
      .eq("user_id", context.userId)
      .select(
        "id, user_id, subject, title, chapters, question_count, duration_minutes, points_total, questions, created_at",
      )
      .single();

    if (updateError || !saved) {
      throw new Error(updateError?.message ?? "Failed to save mock questions");
    }

    return {
      id: saved.id as string,
      examId: `custom-${saved.id}`,
      title: saved.title as string,
      chapters: (saved.chapters as string[]) ?? subtopics,
      questionCount: saved.question_count as number,
      durationMinutes: saved.duration_minutes as number,
      pointsTotal: Number(saved.points_total),
      questions,
      createdAt: saved.created_at as string,
      subtopicTitles: subtopics.map((id) => {
        const s = findSubtopic(id);
        return s ? `${s.id} ${s.title}` : id;
      }),
    };
  });
