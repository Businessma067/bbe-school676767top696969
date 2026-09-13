/**
 * Curated Mock Exam 1 content:
 * - Economics: 10 bank cases (ch 2–4 one each; marketing + accounting calc/theory)
 * - English: one passage × 5 text tasks + 3 grammar + 3 vocabulary
 * - Math: 13 original hard exam-format tasks (one per chapter) with bank-style solutions
 */

import sourced from "@/data/mock-exam-1-sourced.json";
import { MOCK_EXAM_1_MATH } from "@/data/mock-exam-1-math";
import {
  ENGLISH_POINTS_BY_TYPE,
  MATH_POINTS_PER_TASK,
  SCORING_CONFIG,
} from "@/config/scoring-config";
import { scrubStatementHints } from "@/lib/case-context";
import type { ExamQuestion } from "@/lib/mock-exams"; // type-only: avoid circular runtime import

type SourcedTask = {
  case_id?: string;
  id?: string;
  title?: string;
  subsection?: string;
  chapter?: number;
  context?: string;
  statements?: string[];
  answer_key?: boolean[];
  tactical_explanations?: string[];
  kind?: string;
};

type SourcedBundle = {
  economics: SourcedTask[];
  english: {
    passage: string;
    passageTitle?: string;
    tasks: SourcedTask[];
  };
};

const bundle = sourced as SourcedBundle;

/** English points for mock-1 mix: 5 texts + 3 grammar + 3 vocabulary. */
export const MOCK_EXAM_1_ENGLISH_POINTS = [
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.grammar,
  ENGLISH_POINTS_BY_TYPE.grammar,
  ENGLISH_POINTS_BY_TYPE.grammar,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
] as const;

/** Math: one task per chapter → first 13 published maxima. */
export const MOCK_EXAM_1_MATH_POINTS = MATH_POINTS_PER_TASK.slice(0, 13);

export const MOCK_EXAM_1_QUESTION_COUNT =
  bundle.economics.length + bundle.english.tasks.length + MOCK_EXAM_1_MATH.length;

export const MOCK_EXAM_1_POINTS_TOTAL =
  bundle.economics.length * SCORING_CONFIG.economics.defaultMaxPerTask +
  MOCK_EXAM_1_ENGLISH_POINTS.reduce((a, b) => a + b, 0) +
  MOCK_EXAM_1_MATH_POINTS.reduce((a, b) => a + b, 0);

function padFive<T>(arr: T[] | undefined, fill: T): T[] {
  const next = (arr ?? []).slice(0, 5);
  while (next.length < 5) next.push(fill);
  return next;
}

function fromBankTask(opts: {
  examId: string;
  index: number;
  subject: "economics" | "english" | "math";
  maxPoints: number;
  stem: string;
  statements: string[];
  answerKey: boolean[];
  explanations: string[];
  scrub: boolean;
  subtopicTag?: string;
  passage?: string;
  tablesMarkdown?: string;
  solutionOverview?: string;
}): ExamQuestion {
  const statements = padFive(opts.statements, "—");
  const keys = padFive(opts.answerKey, false);
  const expl = padFive(opts.explanations, "");
  return {
    id: `${opts.examId}-q${opts.index}`,
    index: opts.index,
    subject: opts.subject,
    stem: opts.stem,
    maxPoints: opts.maxPoints,
    subtopicTag: opts.subtopicTag,
    passage: opts.passage,
    tablesMarkdown: opts.tablesMarkdown,
    solutionOverview: opts.solutionOverview,
    statements: statements.map((text, j) => ({
      id: `${opts.examId}-q${opts.index}-s${j + 1}`,
      text: opts.scrub ? scrubStatementHints(text) : text,
      isTrue: Boolean(keys[j]),
      explanation:
        expl[j] ||
        (keys[j] ? "So the statement is True." : "So the statement is False."),
    })),
  };
}

/** Build the full Mock Exam 1 question list (economics → english → math). */
export function buildMockExam1Questions(examId = "mock-1"): ExamQuestion[] {
  const questions: ExamQuestion[] = [];
  let index = 0;

  for (const task of bundle.economics) {
    index += 1;
    const tag = task.subsection
      ? `#${task.subsection}${task.title ? ` - ${task.title}` : ""}`
      : task.case_id;
    questions.push(
      fromBankTask({
        examId,
        index,
        subject: "economics",
        maxPoints: SCORING_CONFIG.economics.defaultMaxPerTask,
        stem: (task.context ?? "").trim() || task.title || `Task ${index}`,
        statements: task.statements ?? [],
        answerKey: task.answer_key ?? [],
        explanations: task.tactical_explanations ?? [],
        scrub: true,
        subtopicTag: tag,
      }),
    );
  }

  const passage = bundle.english.passage;
  for (let i = 0; i < bundle.english.tasks.length; i++) {
    const task = bundle.english.tasks[i]!;
    index += 1;
    const kind = task.kind ?? "text";
    const isText = kind === "text";
    questions.push(
      fromBankTask({
        examId,
        index,
        subject: "english",
        maxPoints: MOCK_EXAM_1_ENGLISH_POINTS[i] ?? ENGLISH_POINTS_BY_TYPE.vocabulary,
        stem: (task.context ?? "").trim() || task.title || `Task ${index}`,
        statements: task.statements ?? [],
        answerKey: task.answer_key ?? [],
        explanations: task.tactical_explanations ?? [],
        scrub: true,
        subtopicTag: task.case_id ?? task.subsection,
        passage: isText ? passage : undefined,
      }),
    );
  }

  for (let i = 0; i < MOCK_EXAM_1_MATH.length; i++) {
    const task = MOCK_EXAM_1_MATH[i]!;
    index += 1;
    questions.push(
      fromBankTask({
        examId,
        index,
        subject: "math",
        maxPoints: MOCK_EXAM_1_MATH_POINTS[i] ?? 5,
        stem: task.stem,
        statements: task.statements.map((s) => s.text),
        answerKey: task.statements.map((s) => s.isTrue),
        explanations: task.statements.map((s) => s.explanation),
        scrub: false,
        subtopicTag: `#${task.chapter} - ${task.topic}`,
        tablesMarkdown: task.tablesMarkdown,
        solutionOverview: task.solutionOverview,
      }),
    );
  }

  return questions;
}
