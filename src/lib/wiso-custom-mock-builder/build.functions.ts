import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import {
  clampQuestionCount,
  dbSubjectForWiso,
  durationMinutesForQuestionCount,
  formatCustomMockTitle,
  maxQuestionsForWisoChapters,
  pointsTotalForWisoSubject,
  WISO_CUSTOM_MOCK_SUBJECTS,
  type WisoCustomMockSubjectId,
} from "@/config/wiso-custom-mock-builder";
import {
  SCORING_CONFIG,
  type SubjectKey,
} from "@/config/scoring-config";
import type { ExamQuestion } from "@/lib/mock-exams";
import {
  findWisoCustomMockSubtopic,
  getWisoCustomMockChapters,
  sortWisoSubtopicIds,
  wisoChaptersFromSubtopicIds,
} from "@/data/wiso-custom-mock-catalog";
import {
  getWisoLocalBuilderTasks,
  type WisoCustomMockBankTask,
} from "@/data/wiso-custom-mock-banks";
import { pickRandomFromSubtopics } from "@/lib/custom-mock-builder/pick";
import { scrubStatementHints } from "@/lib/case-context";

const Input = z.object({
  subject: z.enum(["economics", "math"]),
  subtopics: z.array(z.string().min(1)).min(1).max(80),
  questionCount: z.number().int().min(1).max(50),
  topicCounts: z.record(z.string(), z.number().int().min(0)).optional(),
});

type CaseRow = WisoCustomMockBankTask & { case_id?: string };

function padFive<T>(arr: T[], fill: T): T[] {
  const next = arr.slice(0, 5);
  while (next.length < 5) next.push(fill);
  return next;
}

/** ExamQuestion.subject for take/review UI + scoring. */
function examSubjectFor(subject: WisoCustomMockSubjectId): SubjectKey {
  return subject;
}

function maxPointsFor(subject: WisoCustomMockSubjectId): number {
  if (subject === "math") return SCORING_CONFIG.math.defaultMaxPerTask;
  return SCORING_CONFIG.economics.defaultMaxPerTask;
}

function taskToExamQuestion(
  subject: WisoCustomMockSubjectId,
  c: CaseRow,
  index: number,
  mockId: string,
): ExamQuestion {
  const statements = padFive(c.statements ?? [], "—");
  const keys = padFive(c.answer_key ?? [], false);
  const expl = padFive(c.tactical_explanations ?? [], "");

  const meta = findWisoCustomMockSubtopic(subject, c.subsection);
  const subtopicTag = meta
    ? `#${meta.id} - ${meta.title}`
    : c.subsection && c.subsection !== "__mixed__"
      ? `#${c.subsection}`
      : undefined;

  return {
    id: `${mockId}-q${index}`,
    index,
    subject: examSubjectFor(subject),
    stem: c.context?.trim() || c.case_id || `Aufgabe ${index}`,
    maxPoints: maxPointsFor(subject),
    subtopicTag,
    passage: c.passage,
    figure: c.figure,
    tablesMarkdown: c.tables_markdown,
    solutionOverview: c.solution_overview,
    statements: statements.map((text, j) => ({
      id: `${mockId}-q${index}-s${j + 1}`,
      text: subject === "math" ? text : scrubStatementHints(text),
      isTrue: Boolean(keys[j]),
      explanation: expl[j] || (keys[j] ? "Diese Aussage ist richtig." : "Diese Aussage ist falsch."),
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
 * Build a WiSo Custom Mock from Full Course material (no AI).
 * Wirtschaft / Mathematik / Deutsch banks — same tasks as the practice pages.
 */
export const buildWisoCustomMock = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data, context }) => {
    const subject = data.subject as WisoCustomMockSubjectId;
    const enabled = getWisoCustomMockChapters(subject);
    const enabledSubIds = new Set(enabled.flatMap((c) => c.subtopics.map((s) => s.id)));
    const subtopics = sortWisoSubtopicIds(subject, data.subtopics).filter((id) =>
      enabledSubIds.has(id),
    );
    if (subtopics.length === 0) {
      throw new Error("Wähle mindestens ein Thema oder Unterkapitel aus dem Full Course.");
    }

    const chapters = wisoChaptersFromSubtopicIds(subject, subtopics);
    if (chapters.length === 0) {
      throw new Error("Die gewählten Unterkapitel gehören zu keinem aktiven Kapitel.");
    }

    const maxQ = maxQuestionsForWisoChapters(chapters);
    const questionCount = clampQuestionCount(data.questionCount, maxQ);
    if (questionCount !== data.questionCount) {
      throw new Error(
        `Die Fragenanzahl muss zwischen 1 und ${maxQ} für die gewählten Kapitel liegen.`,
      );
    }

    const topicCounts = cleanTopicCounts(data.topicCounts, subtopics, questionCount);
    const subjectLabel = WISO_CUSTOM_MOCK_SUBJECTS[subject].label;
    const dbSubject = dbSubjectForWiso(subject);

    const pool: CaseRow[] = (await getWisoLocalBuilderTasks(subject)).filter((t) =>
      subtopics.includes(t.subsection),
    );

    if (pool.length === 0) {
      throw new Error("Für die gewählten Unterkapitel gibt es noch keine Full-Course-Fragen.");
    }

    const picked = pickRandomFromSubtopics(pool, subtopics, questionCount, topicCounts);
    if (picked.length < questionCount) {
      throw new Error(
        `Nur ${picked.length} Full-Course-Fragen für die gewählten Themen verfügbar (benötigt ${questionCount}). Mehr Themen wählen oder weniger Fragen.`,
      );
    }

    const durationMinutes = durationMinutesForQuestionCount(questionCount);
    const pointsTotal = pointsTotalForWisoSubject(subject, questionCount);
    const title = formatCustomMockTitle(subtopics, questionCount, subjectLabel);

    const { data: inserted, error: insertError } = await context.supabase
      .from("custom_mocks")
      .insert({
        user_id: context.userId,
        subject: dbSubject,
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
      throw new Error(insertError?.message ?? "WiSo-Mock konnte nicht gespeichert werden");
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
      throw new Error(updateError?.message ?? "Fragen konnten nicht gespeichert werden");
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
        const s = findWisoCustomMockSubtopic(subject, id);
        return s ? `${s.id} ${s.title}` : id;
      }),
    };
  });
