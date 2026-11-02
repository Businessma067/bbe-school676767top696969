/**
 * Real Full Course bank tasks for the marketing try-it box.
 * Same seeds as How it works (econ/math), English uses a Grammar bank task.
 */

import econCh3 from "@/data/economics-cases-ch3-subtopics.json";
import mathCh12 from "@/data/math-cases-ch12-probability.json";
import englishGrammar from "@/data/english/grammar.json";
import wisoEconCh1 from "@/data/wiso-economics-cases-ch1-subtopics.json";
import mathDe12 from "@/data/wiso/math-de-ch12.json";
import germanTexts from "@/data/wiso/german/texts.json";
import type { CourseHighlightSubject, CourseHighlightTrack } from "@/config/course-highlights";

export type TryItTask = {
  subject: CourseHighlightSubject;
  caseId: string;
  title: string;
  context: string;
  statements: string[];
  answerKey: boolean[];
  explanations: string[];
  chapter: string;
  overview?: string;
  passage?: string;
  math?: boolean;
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

function asTask(
  raw: RawTask,
  subject: CourseHighlightSubject,
  chapter: string,
  extras?: Partial<TryItTask>,
): TryItTask {
  return {
    subject,
    caseId: raw.case_id,
    title: raw.title,
    context: raw.context,
    statements: raw.statements,
    answerKey: raw.answer_key,
    explanations: raw.tactical_explanations,
    chapter,
    overview: raw.solution_overview?.trim() || undefined,
    ...extras,
  };
}

const bbeEconRaw = (econCh3 as RawTask[]).find((task) => task.case_id === "CASE 3.1.01");
const bbeMathRaw = (mathCh12 as { tasks: RawTask[] }).tasks.find((task) => task.case_id === "MATH 12.01");
const bbeGrammarRaw = (englishGrammar as { tasks: RawTask[] }).tasks.find(
  (task) => task.case_id === "ENG G.1.01",
);

if (!bbeEconRaw || !bbeMathRaw || !bbeGrammarRaw) {
  throw new Error("BBE try-it task missing from the bank");
}

const BBE_TASKS: Record<"economics" | "math" | "english", TryItTask> = {
  economics: asTask(bbeEconRaw, "economics", "Chapter 3 · Focus on different types of businesses"),
  math: asTask(bbeMathRaw, "math", "Chapter 12 · Elementary probability", { math: true }),
  english: asTask(bbeGrammarRaw, "english", "Grammar · Sentence correctness"),
};

const wisoEconRaw = (wisoEconCh1 as RawTask[])[0];
const wisoMathEn = BBE_TASKS.math;
type MathDe = {
  title: string;
  context: string;
  statements: string[];
  tactical_explanations: string[];
  solution_overview?: string;
};
const wisoMathDe = (mathDe12 as Record<string, MathDe>)["MATH 12.01"];
const germanFile = germanTexts as {
  subsections: { id: string; passage?: string }[];
  tasks: RawTask[];
};
const germanRaw = germanFile.tasks.find((task) => task.case_id === "DE T.1.01");
const germanPassage = germanFile.subsections.find((section) => section.id === "t.1")?.passage;

if (!wisoEconRaw || !wisoMathDe || !germanRaw || !germanPassage) {
  throw new Error("WiSo try-it task missing from the bank");
}

const WISO_TASKS: Record<"economics" | "math" | "german", TryItTask> = {
  economics: asTask(wisoEconRaw, "economics", "Kapitel 1.1 · Jeder Mensch ist Teil der Wirtschaft"),
  math: {
    subject: "math",
    caseId: "MATH 12.01",
    title: wisoMathDe.title,
    context: wisoMathDe.context,
    statements: wisoMathDe.statements,
    answerKey: wisoMathEn.answerKey,
    explanations: wisoMathDe.tactical_explanations,
    chapter: "Kapitel 12 · Elementare Wahrscheinlichkeitsrechnung",
    overview: wisoMathDe.solution_overview?.trim() || wisoMathEn.overview,
    math: true,
  },
  german: asTask(germanRaw, "german", "Texte · Deutsch lesen", {
    passage: germanPassage.split(/\n\n/).slice(0, 3).join("\n\n"),
  }),
};

export function tryItTaskFor(
  track: CourseHighlightTrack,
  subject: CourseHighlightSubject,
): TryItTask {
  if (track === "wiso") {
    if (subject === "english") return WISO_TASKS.german;
    if (subject === "german") return WISO_TASKS.german;
    return WISO_TASKS[subject];
  }
  if (subject === "german") return BBE_TASKS.english;
  return BBE_TASKS[subject];
}
