/**
 * Curated WiSo Mock Exam 1:
 * - Economics (Wirtschaft verstehen) → German reading → Math
 * - Math mirrors BBE Mock 2 task types (not Mock 1 clones) with German teacher explanations
 * - German: 11 Sprachverständnis tasks (t.2×10 + one t.1 hardest with own passage)
 */

import sourced from "@/data/wiso-mock-exam-1-sourced.json";
import { MATH_POINTS_PER_TASK, SCORING_CONFIG } from "@/config/scoring-config";
import { normalizeCaseContext, scrubStatementHints } from "@/lib/case-context";
import { scrubKatexContent } from "@/lib/scrub-katex";
import type { ExamQuestion } from "@/lib/mock-exams";

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
  with_passage?: boolean;
  passage_override?: string;
  passage_title_override?: string;
  difficulty_level?: string;
  solution_overview?: string;
  figure?: string;
  tables_markdown?: string;
};

type SourcedBundle = {
  economics: SourcedTask[];
  german: {
    passage: string;
    passageTitle?: string;
    tasks: SourcedTask[];
  };
  math: SourcedTask[];
};

function unwrapSourced(mod: unknown): SourcedBundle {
  const root = mod as SourcedBundle & { default?: SourcedBundle };
  const candidate = root && Array.isArray(root.economics) ? root : root?.default;
  if (
    !candidate ||
    !Array.isArray(candidate.economics) ||
    !Array.isArray(candidate.math) ||
    !candidate.german ||
    !Array.isArray(candidate.german.tasks)
  ) {
    throw new Error("WiSo Mock Exam 1 sourced bank failed to load.");
  }
  return candidate;
}

const bundle = unwrapSourced(sourced);

/** Same published maxima as BBE mocks: first 13 of 14. */
export const WISO_MOCK_EXAM_1_MATH_POINTS = MATH_POINTS_PER_TASK.slice(0, 13);

export const WISO_MOCK_EXAM_1_SECTION_COUNTS = {
  economics: bundle.economics.length,
  german: bundle.german.tasks.length,
  math: bundle.math.length,
} as const;

export const WISO_MOCK_EXAM_1_QUESTION_COUNT =
  WISO_MOCK_EXAM_1_SECTION_COUNTS.economics +
  WISO_MOCK_EXAM_1_SECTION_COUNTS.german +
  WISO_MOCK_EXAM_1_SECTION_COUNTS.math;

export const WISO_MOCK_EXAM_1_POINTS_TOTAL =
  bundle.economics.length * SCORING_CONFIG.economics.defaultMaxPerTask +
  bundle.german.tasks.length * SCORING_CONFIG.german.defaultMaxPerTask +
  WISO_MOCK_EXAM_1_MATH_POINTS.reduce((a, b) => a + b, 0);

export const WISO_MOCK_EXAM_1_CONTENT_REV =
  "2026-09-21b · 34q · 10+11+13 · Mock2-type math DE · t.2+t.1 reading";

function padFive<T>(arr: T[] | undefined, fill: T): T[] {
  const next = (arr ?? []).slice(0, 5);
  while (next.length < 5) next.push(fill);
  return next;
}

function scrubEconClaim(text: string): string {
  return scrubStatementHints(text).replace(/\s{2,}/g, " ").trim();
}

function fromBankTask(opts: {
  examId: string;
  index: number;
  subject: "economics" | "german" | "math";
  maxPoints: number;
  stem: string;
  statements: string[];
  answerKey: boolean[];
  explanations: string[];
  scrub: "econ" | "soft" | "none";
  subtopicTag?: string;
  passage?: string;
  tablesMarkdown?: string;
  solutionOverview?: string;
  figure?: string;
}): ExamQuestion {
  const statements = padFive(opts.statements, "—");
  const keys = padFive(opts.answerKey, false);
  const expl = padFive(opts.explanations, "");
  return {
    id: `${opts.examId}-q${opts.index}`,
    index: opts.index,
    subject: opts.subject,
    stem: scrubKatexContent(opts.stem),
    maxPoints: opts.maxPoints,
    subtopicTag: opts.subtopicTag,
    passage: opts.passage,
    tablesMarkdown: opts.tablesMarkdown,
    solutionOverview: opts.solutionOverview
      ? scrubKatexContent(opts.solutionOverview)
      : opts.solutionOverview,
    figure: opts.figure,
    statements: statements.map((text, j) => {
      let cleaned = text;
      if (opts.scrub === "econ") cleaned = scrubEconClaim(text);
      else if (opts.scrub === "soft") cleaned = scrubStatementHints(text);
      return {
        id: `${opts.examId}-q${opts.index}-s${j + 1}`,
        text: scrubKatexContent(cleaned),
        isTrue: Boolean(keys[j]),
        explanation: scrubKatexContent(
          expl[j] ||
            (keys[j]
              ? "Die Aussage ist wahr."
              : "Die Aussage ist falsch."),
        ),
      };
    }),
  };
}

/** Build WiSo Mock Exam 1 (economics → german → math). */
export function buildWisoMockExam1Questions(examId = "wiso-mock-1"): ExamQuestion[] {
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
        stem: normalizeCaseContext((task.context ?? "").trim() || task.title || `Aufgabe ${index}`),
        statements: task.statements ?? [],
        answerKey: task.answer_key ?? [],
        explanations: task.tactical_explanations ?? [],
        scrub: "econ",
        subtopicTag: tag,
      }),
    );
  }

  const defaultPassage = bundle.german.passage;
  for (const task of bundle.german.tasks) {
    index += 1;
    const kind = task.kind ?? "text";
    const showPassage =
      task.with_passage === true || (task.with_passage !== false && kind === "text");
    const passage = task.passage_override?.trim() || defaultPassage;
    questions.push(
      fromBankTask({
        examId,
        index,
        subject: "german",
        maxPoints: SCORING_CONFIG.german.defaultMaxPerTask,
        stem: (task.context ?? "").trim() || task.title || `Aufgabe ${index}`,
        statements: task.statements ?? [],
        answerKey: task.answer_key ?? [],
        explanations: task.tactical_explanations ?? [],
        scrub: "soft",
        subtopicTag: task.case_id ?? task.subsection,
        passage: showPassage ? passage : undefined,
      }),
    );
  }

  for (let i = 0; i < bundle.math.length; i++) {
    const task = bundle.math[i]!;
    index += 1;
    questions.push(
      fromBankTask({
        examId,
        index,
        subject: "math",
        maxPoints: WISO_MOCK_EXAM_1_MATH_POINTS[i] ?? 5,
        stem: (task.context ?? "").trim() || task.title || `Aufgabe ${index}`,
        statements: task.statements ?? [],
        answerKey: task.answer_key ?? [],
        explanations: task.tactical_explanations ?? [],
        scrub: "none",
        subtopicTag: `#${task.chapter}${task.subsection ? `.${task.subsection}` : ""} - ${task.title || task.case_id}`,
        tablesMarkdown: task.tables_markdown,
        solutionOverview: task.solution_overview,
        figure: task.figure,
      }),
    );
  }

  return questions;
}
