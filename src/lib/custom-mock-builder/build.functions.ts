import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import {
  clampQuestionCount,
  CUSTOM_MOCK_SUBJECTS,
  durationMinutesForQuestionCount,
  formatCustomMockTitle,
  maxQuestionsForChapters,
  pointsTotalForSubject,
  type CustomMockSubjectId,
} from "@/config/custom-mock-builder";
import { SCORING_CONFIG } from "@/config/scoring-config";
import type { ExamQuestion } from "@/lib/mock-exams";
import {
  chaptersFromSubtopicIds,
  findCustomMockSubtopic,
  getCustomMockChapters,
  sortSubtopicIds,
} from "@/data/custom-mock-catalog";
import { getLocalBuilderTasks, type CustomMockBankTask } from "@/data/custom-mock-banks";
import { pickRandomFromSubtopics } from "@/lib/custom-mock-builder/pick";
import { scrubStatementHints } from "@/lib/case-context";

const Input = z.object({
  subject: z.enum(["economics", "math", "english"]).default("economics"),
  subtopics: z.array(z.string().min(1)).min(1).max(80),
  questionCount: z.number().int().min(1).max(50),
  topicCounts: z.record(z.string(), z.number().int().min(0)).optional(),
});

type CaseRow = CustomMockBankTask & { case_id?: string };

function padFive<T>(arr: T[], fill: T): T[] {
  const next = arr.slice(0, 5);
  while (next.length < 5) next.push(fill);
  return next;
}

function taskToExamQuestion(
  subject: CustomMockSubjectId,
  c: CaseRow,
  index: number,
  mockId: string,
): ExamQuestion {
  const statements = padFive(c.statements ?? [], "—");
  const keys = padFive(c.answer_key ?? [], false);
  const expl = padFive(c.tactical_explanations ?? [], "");

  const meta = findCustomMockSubtopic(subject, c.subsection);
  const subtopicTag = meta
    ? `#${meta.id} - ${meta.title}`
    : c.subsection && c.subsection !== "__mixed__"
      ? `#${c.subsection}`
      : undefined;

  const maxPoints = SCORING_CONFIG[subject].defaultMaxPerTask;

  return {
    id: `${mockId}-q${index}`,
    index,
    subject,
    stem: c.context?.trim() || c.case_id || `Task ${index}`,
    maxPoints,
    subtopicTag,
    passage: c.passage,
    figure: c.figure,
    tablesMarkdown: c.tables_markdown,
    solutionOverview: c.solution_overview,
    statements: statements.map((text, j) => ({
      id: `${mockId}-q${index}-s${j + 1}`,
      text: subject === "math" ? text : scrubStatementHints(text),
      isTrue: Boolean(keys[j]),
      explanation: expl[j] || (keys[j] ? "This statement is true." : "This statement is false."),
    })),
  };
}

function cleanTopicCounts(
  topicCounts: Record<string, number> | undefined,
  subtopics: string[],
  questionCount: number,
): Record<string, number> | undefined {
  if (!topicCounts) return undefined;
  const cleaned: Record<string, number> = {};
  let sum = 0;
  for (const id of subtopics) {
    const n = Math.max(0, Math.floor(topicCounts[id] ?? 0));
    cleaned[id] = n;
    sum += n;
  }
  return sum === questionCount ? cleaned : undefined;
}

/**
 * Build a Custom Mock from Full Course material (no AI).
 * Economics: Full Course cases in the database, tagged by book subtopic.
 * Math / English: local Full Course banks (same tasks as the practice pages).
 */
export const buildCustomMock = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data, context }) => {
    const subject = data.subject;
    const enabled = getCustomMockChapters(subject);
    const enabledSubIds = new Set(enabled.flatMap((c) => c.subtopics.map((s) => s.id)));
    const subtopics = sortSubtopicIds(subject, data.subtopics).filter((id) => enabledSubIds.has(id));
    if (subtopics.length === 0) {
      throw new Error("Select at least one topic or subtopic from the Full Course.");
    }

    const chapters = chaptersFromSubtopicIds(subject, subtopics);
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

    const topicCounts = cleanTopicCounts(data.topicCounts, subtopics, questionCount);
    const subjectLabel = CUSTOM_MOCK_SUBJECTS[subject].label;

    let pool: CaseRow[] = [];

    if (subject === "economics") {
      const subsectionKeys = [...new Set([...subtopics, ...chapters.map(String)])];
      const { data: caseRows, error: caseError } = await context.supabase
        .from("economics_cases")
        .select("id, case_id, context, statements, answer_key, tactical_explanations, subsection")
        .eq("tier", "full")
        .in("subsection", subsectionKeys)
        .order("sort_order", { ascending: true });

      if (caseError) throw new Error(`Failed to load Full Course cases: ${caseError.message}`);
      const allRows = (caseRows ?? []) as CaseRow[];
      const tagged = allRows.filter((c) => subtopics.includes(c.subsection));
      pool = tagged.length >= questionCount ? tagged : allRows;
    } else {
      pool = (await getLocalBuilderTasks(subject)).filter((t) =>
        subtopics.includes(t.subsection),
      );
    }

    if (pool.length === 0) {
      throw new Error("No Full Course questions found for the selected subtopics yet.");
    }

    const picked = pickRandomFromSubtopics(pool, subtopics, questionCount, topicCounts);
    if (picked.length < questionCount) {
      throw new Error(
        `Only ${picked.length} Full Course questions available for the selected topics (need ${questionCount}). Pick more topics/subtopics or fewer questions.`,
      );
    }

    const durationMinutes = durationMinutesForQuestionCount(questionCount);
    const pointsTotal = pointsTotalForSubject(subject, questionCount);
    const title = formatCustomMockTitle(subtopics, questionCount, subjectLabel);

    const { data: inserted, error: insertError } = await context.supabase
      .from("custom_mocks")
      .insert({
        user_id: context.userId,
        subject,
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

    const questions = picked.map((c, i) => taskToExamQuestion(subject, c, i + 1, inserted.id));

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
      subject,
      chapters: (saved.chapters as string[]) ?? subtopics,
      questionCount: saved.question_count as number,
      durationMinutes: saved.duration_minutes as number,
      pointsTotal: Number(saved.points_total),
      questions,
      createdAt: saved.created_at as string,
      subtopicTitles: subtopics.map((id) => {
        const s = findCustomMockSubtopic(subject, id);
        return s ? `${s.id} ${s.title}` : id;
      }),
    };
  });
