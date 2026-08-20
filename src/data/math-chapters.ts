/**
 * Math syllabus chapters for Demo / Lite / Full practice pages.
 * Chapters 1 (Logic), 4 (Equations), 5 (Linear equations), 8 (Power functions),
 * 11 (Financial mathematics), 12 (Elementary probability), and 13 (Binomial)
 * are populated; others use placeholders.
 */

import { MATH_CH1_LOGIC, MATH_CH1_SUBSECTIONS } from "@/data/math-ch1-logic";
import { MATH_CH4_EQUATIONS, MATH_CH4_SUBSECTIONS } from "@/data/math-ch4-equations";
import { MATH_CH4_EXP_LOG } from "@/data/math-ch4-exp-log";
import { MATH_CH5_LINEAR_EQUATIONS } from "@/data/math-ch5-linear-equations";
import { MATH_CH8_POWER_FUNCTIONS } from "@/data/math-ch8-power-functions";
import { MATH_CH11_FINANCIAL, MATH_CH11_SUBSECTIONS } from "@/data/math-ch11-financial";
import { MATH_CH12_PROBABILITY, MATH_CH12_SUBSECTIONS } from "@/data/math-ch12-probability";
import ch13Binomial from "@/data/math-cases-ch13-binomial.json";

export type MathTask = {
  id: string;
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  difficulty_level: string;
  sort_order: number;
  /** Book subsection id within a chapter, e.g. "11.3". */
  subsection?: string;
  /** Shared worked solution (KaTeX / markdown-ish) shown with all statement explanations. */
  solution_overview?: string;
  /** Optional stem graphic clipped from the source PDF (public URL). */
  figure?: string;
  /** Optional markdown pipe-tables reconstructed from the PDF. */
  tables_markdown?: string;
  /** True until real task content is authored. */
  placeholder?: boolean;
};

export type MathSubsection = {
  id: string;
  title: string;
};

export type MathChapter = {
  num: number;
  title: string;
  tasks: MathTask[];
  subsections?: readonly MathSubsection[];
};

/** How many free (unlocked) tasks per chapter in the Demo tier. */
export const DEMO_MATH_FREE_LIMIT = 2;

/** Placeholder task slots per chapter (structure for upcoming content). */
export const MATH_TASKS_PER_CHAPTER = 5;

const CHAPTER_TITLES = [
  "Logic",
  "Elementary algebra",
  "Elementary financial mathematics",
  "Equations",
  "Linear equations in two unknowns",
  "Inequalities",
  "Linear and quadratic functions",
  "Power functions",
  "Polynomial functions",
  "Exponential and logarithmic functions",
  "Financial mathematics",
  "Elementary probability",
  "Binomial distribution",
] as const;

function makePlaceholders(chapterNum: number, count: number): MathTask[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      id: `math-${chapterNum}-${n}`,
      case_id: `MATH ${chapterNum}.${String(n).padStart(2, "0")}`,
      title: `Task ${n}`,
      context: "",
      statements: [],
      answer_key: [],
      tactical_explanations: [],
      difficulty_level: "—",
      sort_order: n,
      placeholder: true,
    };
  });
}

const CHAPTER_OVERRIDES: Partial<Record<number, MathTask[]>> = {
  1: MATH_CH1_LOGIC,
  4: [...MATH_CH4_EQUATIONS, ...MATH_CH4_EXP_LOG].map((t) => ({
    ...t,
    placeholder: false,
  })),
  5: MATH_CH5_LINEAR_EQUATIONS,
  8: MATH_CH8_POWER_FUNCTIONS,
  11: MATH_CH11_FINANCIAL,
  12: MATH_CH12_PROBABILITY,
  13: (ch13Binomial.tasks as MathTask[]).map((t) => ({
    ...t,
    placeholder: false,
  })),
};

const CHAPTER_SUBSECTIONS: Partial<Record<number, readonly MathSubsection[]>> = {
  1: MATH_CH1_SUBSECTIONS,
  4: MATH_CH4_SUBSECTIONS,
  11: MATH_CH11_SUBSECTIONS,
  12: MATH_CH12_SUBSECTIONS,
};

export const MATH_CHAPTERS: MathChapter[] = CHAPTER_TITLES.map((title, i) => {
  const num = i + 1;
  return {
    num,
    title,
    tasks: CHAPTER_OVERRIDES[num] ?? makePlaceholders(num, MATH_TASKS_PER_CHAPTER),
    subsections: CHAPTER_SUBSECTIONS[num],
  };
});

export function allMathTasks(): MathTask[] {
  return MATH_CHAPTERS.flatMap((ch) => ch.tasks);
}
