/**
 * Curated Mock Exam 5 content (specified bank + generated tasks):
 * - Economics → English (Alien Mind / Octopus) → Math, in that order
 * - Economics: unused hard bank cases + DCF/payback chart MOCK
 * - English: T.14 Octopus + G.14.19
 * - Math: deep customs + unused bank (fully different from Mocks 1–4)
 */

import sourced from "@/data/mock-exam-5-sourced.json";
import {
  ENGLISH_POINTS_BY_TYPE,
  MATH_POINTS_PER_TASK,
  SCORING_CONFIG,
} from "@/config/scoring-config";
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
  difficulty_level?: string;
  solution_overview?: string;
  figure?: string;
  tables_markdown?: string;
};

type SourcedBundle = {
  economics: SourcedTask[];
  english: {
    passage: string;
    passageTitle?: string;
    tasks: SourcedTask[];
  };
  math: SourcedTask[];
};

/** Vite/Nitro may expose JSON as the module itself or under `.default`. */
function unwrapSourced(mod: unknown): SourcedBundle {
  const root = mod as SourcedBundle & { default?: SourcedBundle };
  const candidate =
    root && Array.isArray(root.economics) ? root : root?.default;
  if (
    !candidate ||
    !Array.isArray(candidate.economics) ||
    !Array.isArray(candidate.math) ||
    !candidate.english ||
    !Array.isArray(candidate.english.tasks)
  ) {
    throw new Error("Mock Exam 5 sourced bank failed to load.");
  }
  return candidate;
}

const bundle = unwrapSourced(sourced);

/** Strip formula coaching left in claim text (student must know the ratios). */
function scrubEconClaim(text: string): string {
  return scrubStatementHints(text)
    .replace(
      /\s*,\s*(?:the|which is|i\.e\.|that is)[^,.]*?(?:divided by|relative to|taken as|taken relative|equals?|defined as|calculated as)[^.]*/gi,
      "",
    )
    .replace(
      /\s*\((?:operating result|revenue|cost of sales|equity|assets|liabilities)[^)]*\)/gi,
      "",
    )
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** English points: 5 reading + 2 in-passage vocab + 2 grammar + 1 paraphrase vocab + 1 grammar. */
export const MOCK_EXAM_5_ENGLISH_POINTS = [
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.grammar,
  ENGLISH_POINTS_BY_TYPE.grammar,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.grammar,
] as const;

/** Math: one hard task per chapter → first 13 published maxima. */
export const MOCK_EXAM_5_MATH_POINTS = MATH_POINTS_PER_TASK.slice(0, 13);

export const MOCK_EXAM_5_QUESTION_COUNT =
  bundle.economics.length + bundle.english.tasks.length + bundle.math.length;

export const MOCK_EXAM_5_POINTS_TOTAL =
  bundle.economics.length * SCORING_CONFIG.economics.defaultMaxPerTask +
  MOCK_EXAM_5_ENGLISH_POINTS.reduce((a, b) => a + b, 0) +
  MOCK_EXAM_5_MATH_POINTS.reduce((a, b) => a + b, 0);

/** Bump when Mock 4 bank content changes — shown in UI so Lovable preview sync can be verified. */
export const MOCK_EXAM_5_CONTENT_REV =
  "2026-09-17d · 34q · Octopus · Q32 one-deriv + scrub np · ff-push sync";

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
            (keys[j] ? "So the statement is True." : "So the statement is False."),
        ),
      };
    }),
  };
}

/** Build the full Mock Exam 5 question list (economics → english → math). */
export function buildMockExam5Questions(examId = "mock-5"): ExamQuestion[] {
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
        stem: normalizeCaseContext((task.context ?? "").trim() || task.title || `Task ${index}`),
        statements: task.statements ?? [],
        answerKey: task.answer_key ?? [],
        explanations: task.tactical_explanations ?? [],
        scrub: "econ",
        subtopicTag: tag,
      }),
    );
  }

  const passage = bundle.english.passage;
  for (let i = 0; i < bundle.english.tasks.length; i++) {
    const task = bundle.english.tasks[i]!;
    index += 1;
    const kind = task.kind ?? "text";
    const showPassage =
      task.with_passage === true || (task.with_passage !== false && kind === "text");
    questions.push(
      fromBankTask({
        examId,
        index,
        subject: "english",
        maxPoints: MOCK_EXAM_5_ENGLISH_POINTS[i] ?? ENGLISH_POINTS_BY_TYPE.vocabulary,
        stem: (task.context ?? "").trim() || task.title || `Task ${index}`,
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
        maxPoints: MOCK_EXAM_5_MATH_POINTS[i] ?? 5,
        stem: (task.context ?? "").trim() || task.title || `Task ${index}`,
        statements: task.statements ?? [],
        answerKey: task.answer_key ?? [],
        explanations: task.tactical_explanations ?? [],
        scrub: "none",
        subtopicTag: `#${task.subsection || task.chapter} - ${task.title || task.case_id}`,
        tablesMarkdown: task.tables_markdown,
        solutionOverview: task.solution_overview,
        figure: task.figure,
      }),
    );
  }

  return questions;
}
