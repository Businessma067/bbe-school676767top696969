import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import {
  clampQuestionCount,
  durationMinutesForQuestionCount,
  formatCustomMockTitle,
  maxQuestionsForChapters,
  pointsTotalForEconomicsQuestions,
} from "@/config/custom-mock-builder";
import { SCORING_CONFIG } from "@/config/scoring-config";
import type { ExamQuestion } from "@/lib/mock-exams";
import {
  chaptersFromSubtopicIds,
  findSubtopic,
  getCustomMockBookChapters,
} from "@/data/economics-subtopics";
import { scrubStatementHints } from "@/lib/case-context";

const Input = z.object({
  subtopics: z.array(z.string().min(1)).min(1).max(40),
  questionCount: z.number().int().min(1).max(50),
  topicCounts: z.record(z.string(), z.number().int().min(0)).optional(),
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

/** Numeric book order: 2.3 → 4.5 → 6.2 (not lexicographic string sort). */
function compareSubtopicId(a: string, b: string): number {
  const pa = a.split(".").map((p) => Number(p) || 0);
  const pb = b.split(".").map((p) => Number(p) || 0);
  const n = Math.max(pa.length, pb.length);
  for (let i = 0; i < n; i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return d;
  }
  return a.localeCompare(b);
}

/**
 * Pick for a custom mock in book/subtopic order:
 * - selected subtopics appear as contiguous blocks;
 * - within each subtopic the pool is shuffled;
 * - if topicCounts is provided, those targets are used (then capped by pool + remainder redistributed);
 * - otherwise equal round-robin allotment.
 */
function pickRandomFromSubtopics(
  pool: CaseRow[],
  subtopics: string[],
  questionCount: number,
  topicCounts?: Record<string, number>,
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

  const orderedKeys = [
    ...[...new Set(subtopics)].filter((k) => (bySub.get(k)?.length ?? 0) > 0).sort(compareSubtopicId),
    ...(["__mixed__"] as const).filter((k) => (bySub.get(k)?.length ?? 0) > 0),
  ];

  const allot = new Map<string, number>(orderedKeys.map((k) => [k, 0]));

  if (topicCounts && Object.keys(topicCounts).length > 0) {
    // Seed with requested counts (only for selected subtopics that have pool)
    let remaining = questionCount;
    for (const k of orderedKeys) {
      if (k === "__mixed__") continue;
      const want = Math.max(0, Math.floor(topicCounts[k] ?? 0));
      const avail = bySub.get(k)?.length ?? 0;
      const take = Math.min(want, avail, remaining);
      allot.set(k, take);
      remaining -= take;
    }
    // Redistribute leftovers (undersupplied pools / rounding) fairly among keys with spare capacity
    while (remaining > 0) {
      let progressed = false;
      for (const k of orderedKeys) {
        const used = allot.get(k) ?? 0;
        const avail = bySub.get(k)?.length ?? 0;
        if (used < avail) {
          allot.set(k, used + 1);
          remaining--;
          progressed = true;
          if (remaining === 0) break;
        }
      }
      if (!progressed) break;
    }
  } else {
    let remaining = questionCount;
    while (remaining > 0) {
      let progressed = false;
      for (const k of orderedKeys) {
        const used = allot.get(k) ?? 0;
        const avail = bySub.get(k)?.length ?? 0;
        if (used < avail) {
          allot.set(k, used + 1);
          remaining--;
          progressed = true;
          if (remaining === 0) break;
        }
      }
      if (!progressed) break;
    }
  }

  const picked: CaseRow[] = [];
  const seen = new Set<string>();
  for (const k of orderedKeys) {
    const take = allot.get(k) ?? 0;
    let taken = 0;
    for (const row of bySub.get(k) ?? []) {
      if (taken >= take) break;
      if (seen.has(row.id)) continue;
      seen.add(row.id);
      picked.push(row);
      taken++;
    }
  }

  return picked.slice(0, questionCount);
}

function caseToExamQuestion(c: CaseRow, index: number, mockId: string): ExamQuestion {
  const statements = (c.statements ?? []).slice(0, 5);
  const keys = (c.answer_key ?? []).slice(0, 5);
  const expl = (c.tactical_explanations ?? []).slice(0, 5);
  while (statements.length < 5) statements.push("—");
  while (keys.length < 5) keys.push(false);
  while (expl.length < 5) expl.push("");

  const meta = findSubtopic(c.subsection);
  const subtopicTag = meta
    ? `#${meta.id} - ${meta.title}`
    : c.subsection && c.subsection !== "__mixed__"
      ? `#${c.subsection}`
      : undefined;

  return {
    id: `${mockId}-q${index}`,
    index,
    subject: "economics",
    stem: c.context?.trim() || c.case_id,
    maxPoints: SCORING_CONFIG.economics.defaultMaxPerTask,
    subtopicTag,
    statements: statements.map((text, j) => ({
      id: `${mockId}-q${index}-s${j + 1}`,
      text: scrubStatementHints(text),
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
    const enabled = getCustomMockBookChapters();
    const enabledSubIds = new Set(enabled.flatMap((c) => c.subtopics.map((s) => s.id)));
    const subtopics = [...new Set(data.subtopics)]
      .filter((id) => enabledSubIds.has(id))
      .sort(compareSubtopicId);
    if (subtopics.length === 0) {
      throw new Error("Select at least one book subtopic (e.g. 2.1, 2.2).");
    }

    const chapters = chaptersFromSubtopicIds(subtopics);
    if (chapters.length === 0) {
      throw new Error("Selected subtopics do not map to an enabled chapter.");
    }

    const maxQ = maxQuestionsForChapters(chapters);
    const questionCount = clampQuestionCount(data.questionCount, maxQ);
    if (questionCount !== data.questionCount) {
      throw new Error(
        `Question count must be between 1 and ${maxQ} for the selected chapter(s).`,
      );
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
    const pool = tagged.length >= questionCount ? tagged : allRows;
    if (pool.length === 0) {
      throw new Error("No Full Course questions found for the selected subtopics yet.");
    }

    let topicCounts = data.topicCounts;
    if (topicCounts) {
      // Keep only selected ids; if sum ≠ questionCount, drop and use equal (safe fallback)
      const cleaned: Record<string, number> = {};
      let sum = 0;
      for (const id of subtopics) {
        const n = Math.max(0, Math.floor(topicCounts[id] ?? 0));
        cleaned[id] = n;
        sum += n;
      }
      topicCounts = sum === questionCount ? cleaned : undefined;
    }

    // Weighted (or equal) pick per subtopic; display order is contiguous blocks by book order.
    const picked = pickRandomFromSubtopics(pool, subtopics, questionCount, topicCounts);
    if (picked.length < questionCount) {
      throw new Error(
        `Only ${picked.length} Full Course questions available for the selected chapters (need ${questionCount}). Pick more chapters/subtopics or fewer questions.`,
      );
    }

    const durationMinutes = durationMinutesForQuestionCount(questionCount);
    const pointsTotal = pointsTotalForEconomicsQuestions(questionCount);
    const title = formatCustomMockTitle(subtopics, questionCount);

    const { data: inserted, error: insertError } = await context.supabase
      .from("custom_mocks")
      .insert({
        user_id: context.userId,
        subject: "economics",
        title,
        chapters: subtopics,
        question_count: questionCount,
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
