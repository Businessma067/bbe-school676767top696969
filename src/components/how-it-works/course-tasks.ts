/**
 * Marketing How-it-works demo tasks.
 * Sourced from full banks via `src/data/marketing-demo-seeds.json` so SSR never
 * loads multi-MB chapter JSON just to show one sample case.
 */
import seeds from "@/data/marketing-demo-seeds.json";

export type CourseTask = {
  caseId: string;
  title: string;
  context: string;
  statements: string[];
  answerKey: boolean[];
  explanations: string[];
  chapter: string;
  /** Full solution overview from the math practice sheet, when the bank has one. */
  overview?: string;
};

type RawTask = {
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  solution_overview?: string;
};

function asTask(raw: RawTask, chapter: string): CourseTask {
  return {
    caseId: raw.case_id,
    title: raw.title,
    context: raw.context,
    statements: raw.statements,
    answerKey: raw.answer_key,
    explanations: raw.tactical_explanations,
    chapter,
    overview: raw.solution_overview?.trim() || undefined,
  };
}

/** First bank task of economics 2.1, the first subtopic the Mock Builder demo selects. */
export const MOCK_BUILDER_FIRST = asTask(
  seeds.mockBuilderFirst,
  "Chapter 2 · Basic economic concepts",
);

/** First task of chapter 3 on the economics practice page. */
export const COURSE_ECON = asTask(
  seeds.courseEcon,
  "Chapter 3 · Focus on different types of businesses",
);

/** First task of math chapter 12 on the math practice page. */
export const COURSE_MATH = asTask(seeds.courseMath, "Chapter 12 · Elementary probability");

/** First Texts task. The paper is paragraphs 1–3 of the four-day workweek passage. */
export const COURSE_ENGLISH = asTask(seeds.courseEnglish, "Texts · The Rise of the Four-Day Workweek");

/** Paragraphs 1–3, the slice ENG T.1.01 is written against. */
export const COURSE_ENGLISH_PASSAGE = seeds.courseEnglishPassage;

export const COURSE_ENGLISH_HIGHLIGHTS = seeds.courseEnglishHighlights;
