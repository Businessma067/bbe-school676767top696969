/**
 * Real Full Course bank tasks for the marketing try-it box.
 * Slim seeds only — never import full chapter JSON into landing SSR.
 */

import seeds from "@/data/marketing-demo-seeds.json";
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

const BBE_TASKS: Record<"economics" | "math" | "english", TryItTask> = {
  economics: asTask(
    seeds.courseEcon,
    "economics",
    "Chapter 3 · Focus on different types of businesses",
  ),
  math: asTask(seeds.courseMath, "math", "Chapter 12 · Elementary probability", { math: true }),
  english: asTask(seeds.bbeGrammar, "english", "Grammar · Sentence correctness"),
};

const WISO_TASKS: Record<"economics" | "math" | "german", TryItTask> = {
  economics: asTask(
    seeds.wisoEcon,
    "economics",
    "Kapitel 1.1 · Jeder Mensch ist Teil der Wirtschaft",
  ),
  math: {
    subject: "math",
    caseId: "MATH 12.01",
    title: seeds.wisoMathDe.title,
    context: seeds.wisoMathDe.context,
    statements: seeds.wisoMathDe.statements,
    answerKey: BBE_TASKS.math.answerKey,
    explanations: seeds.wisoMathDe.tactical_explanations,
    chapter: "Kapitel 12 · Elementare Wahrscheinlichkeitsrechnung",
    overview: seeds.wisoMathDe.solution_overview?.trim() || BBE_TASKS.math.overview,
    math: true,
  },
  german: asTask(seeds.german, "german", "Texte · Deutsch lesen", {
    passage: seeds.germanPassage,
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
  if (track === "hybrid") {
    if (subject === "german") return WISO_TASKS.german;
    if (subject === "economics") return BBE_TASKS.economics;
    if (subject === "math") return BBE_TASKS.math;
    return BBE_TASKS.english;
  }
  if (subject === "german") return BBE_TASKS.english;
  return BBE_TASKS[subject];
}
