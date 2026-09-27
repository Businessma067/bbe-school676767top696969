import econCh3 from "@/data/economics-cases-ch3-subtopics.json";
import mathCh12 from "@/data/math-cases-ch12-probability.json";
import englishTexts from "@/data/english/texts.json";

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

const econRaw = (econCh3 as RawTask[]).find((task) => task.case_id === "CASE 3.1.01");
const mathRaw = (mathCh12 as { tasks: RawTask[] }).tasks.find((task) => task.case_id === "MATH 12.01");
const engRaw = (englishTexts as { tasks: RawTask[] }).tasks.find((task) => task.case_id === "ENG T.1.01");

if (!econRaw || !mathRaw || !engRaw) {
  throw new Error("Course demo task missing from the bank");
}

/** First task of chapter 3 on the economics practice page. */
export const COURSE_ECON = asTask(econRaw, "Chapter 3 · Focus on different types of businesses");

/** First task of math chapter 12 on the math practice page. */
export const COURSE_MATH = asTask(mathRaw, "Chapter 12 · Elementary probability");

/** First Texts task. The paper is paragraphs 1–3 of the four-day workweek passage. */
export const COURSE_ENGLISH = asTask(engRaw, "Texts · The Rise of the Four-Day Workweek");

const passage = (
  englishTexts as { subsections: { id: string; passage?: string }[] }
).subsections.find((section) => section.id === "t.1")?.passage;

if (!passage) throw new Error("English passage t.1 missing");

/** Paragraphs 1–3, the slice ENG T.1.01 is written against. */
export const COURSE_ENGLISH_PASSAGE = passage.split(/\n\n/).slice(0, 3).join("\n\n");

export const COURSE_ENGLISH_HIGHLIGHTS = (
  englishTexts as { tasks: { case_id: string; highlights?: string[] }[] }
).tasks.find((task) => task.case_id === "ENG T.1.01")?.highlights ?? [];
