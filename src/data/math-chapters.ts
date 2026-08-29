/**
 * Math syllabus chapters for Demo / Lite / Full practice pages.
 * Chapters 1 (Logic), 2 (Elementary algebra), 3 (Financial mathematics),
 * 4 (Equations), 5 (Linear equations), 6 (Inequalities), 8 (Power functions),
 * 11 (Elementary probability), and 12 (Binomial) are populated;
 * chapters 9–10 are marked coming soon; others use placeholders.
 */

import { MATH_CH1_LOGIC, MATH_CH1_SUBSECTIONS } from "@/data/math-ch1-logic";
import { MATH_CH2_ALGEBRA, MATH_CH2_SUBSECTIONS } from "@/data/math-ch2-elementary-algebra";
import { MATH_CH4_EQUATIONS, MATH_CH4_SUBSECTIONS } from "@/data/math-ch4-equations";
import { MATH_CH5_LINEAR_EQUATIONS } from "@/data/math-ch5-linear-equations";
import { MATH_CH8_POWER_FUNCTIONS } from "@/data/math-ch8-power-functions";
import { MATH_CH6_INEQUALITIES, MATH_CH6_SUBSECTIONS } from "@/data/math-ch6-inequalities";
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
  /** Book subsection id within a chapter, e.g. "3.3". */
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
  /** Chapter listed in the syllabus but not available for practice yet. */
  comingSoon?: boolean;
};

/** Fallback: how many free tasks per unspecified chapter in the Demo tier. */
export const DEMO_MATH_FREE_LIMIT = 2;

/**
 * Demo unlocks by subsection. Unlisted subsections in these chapters stay locked.
 * Counts are the first N tasks in that subsection.
 */
export const DEMO_MATH_SUBSECTION_FREE: Partial<
  Record<number, Readonly<Record<string, number>>>
> = {
  1: { "1.1": 10, "1.2": 5 },
  2: { "2.1": 10, "2.2": 5, "2.3": 5, "2.4": 5 },
  3: { "3.1": 10, "3.2": 5, "3.3": 5, "3.4": 5 },
  4: { "4.1": 10, "4.2": 5, "4.3": 5, "4.4": 5 },
  6: { "6.1": 10, "6.2": 5, "6.3": 5, "6.4": 5, "6.5": 4 },
};

/** Demo unlocks for chapters without a subsection map (overall first N tasks). */
export const DEMO_MATH_CHAPTER_FREE: Partial<Record<number, number>> = {
  5: 10,
};

function localIndexInSubsection(
  tasks: MathTask[],
  idx: number,
  subsection: string,
): number {
  let local = 0;
  for (let i = 0; i < idx; i++) {
    if (tasks[i]?.subsection === subsection) local += 1;
  }
  return local;
}

/** Whether a task is locked in the Demo tier. Lite / Full never lock. */
export function isDemoMathTaskLocked(
  chapter: number | "revision" | null,
  idx: number,
  tasks: MathTask[],
): boolean {
  if (chapter === "revision" || chapter === null) return false;
  const task = tasks[idx];
  if (!task) return true;
  const subLimits = DEMO_MATH_SUBSECTION_FREE[chapter];
  if (subLimits && task.subsection) {
    const limit = subLimits[task.subsection] ?? 0;
    return localIndexInSubsection(tasks, idx, task.subsection) >= limit;
  }
  const limit = DEMO_MATH_CHAPTER_FREE[chapter] ?? DEMO_MATH_FREE_LIMIT;
  return idx >= limit;
}

/** How far past the demo free window this task is (0 = first locked in its group). */
export function demoMathLockDistance(
  chapter: number,
  idx: number,
  tasks: MathTask[],
): number {
  const task = tasks[idx];
  if (!task) return 0;
  const subLimits = DEMO_MATH_SUBSECTION_FREE[chapter];
  if (subLimits && task.subsection) {
    const limit = subLimits[task.subsection] ?? 0;
    return localIndexInSubsection(tasks, idx, task.subsection) - limit;
  }
  const limit = DEMO_MATH_CHAPTER_FREE[chapter] ?? DEMO_MATH_FREE_LIMIT;
  return idx - limit;
}

export function lastUnlockedDemoMathIndex(
  chapter: number | "revision" | null,
  tasks: MathTask[],
): number {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (!isDemoMathTaskLocked(chapter, i, tasks)) return i;
  }
  return 0;
}

/** Placeholder task slots per chapter (structure for upcoming content). */
export const MATH_TASKS_PER_CHAPTER = 5;

const CHAPTER_TITLES = [
  "Logic",
  "Elementary algebra",
  "Financial mathematics",
  "Equations",
  "Linear equations in two unknowns",
  "Inequalities",
  "Linear and quadratic functions",
  "Power functions",
  "Polynomial functions",
  "Exponential and logarithmic functions",
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
  2: MATH_CH2_ALGEBRA,
  3: MATH_CH11_FINANCIAL,
  4: MATH_CH4_EQUATIONS,
  5: MATH_CH5_LINEAR_EQUATIONS,
  6: MATH_CH6_INEQUALITIES,
  8: MATH_CH8_POWER_FUNCTIONS,
  11: MATH_CH12_PROBABILITY,
  12: (ch13Binomial.tasks as MathTask[]).map((t) => ({
    ...t,
    placeholder: false,
  })),
};

const CHAPTER_SUBSECTIONS: Partial<Record<number, readonly MathSubsection[]>> = {
  1: MATH_CH1_SUBSECTIONS,
  2: MATH_CH2_SUBSECTIONS,
  3: MATH_CH11_SUBSECTIONS,
  4: MATH_CH4_SUBSECTIONS,
  6: MATH_CH6_SUBSECTIONS,
  11: MATH_CH12_SUBSECTIONS,
};

/** Syllabus chapters with structure ready but no practice content yet. */
const COMING_SOON_CHAPTERS = new Set([9, 10]);

export const MATH_CHAPTERS: MathChapter[] = CHAPTER_TITLES.map((title, i) => {
  const num = i + 1;
  const comingSoon = COMING_SOON_CHAPTERS.has(num);
  return {
    num,
    title,
    tasks: comingSoon
      ? []
      : (CHAPTER_OVERRIDES[num] ?? makePlaceholders(num, MATH_TASKS_PER_CHAPTER)),
    subsections: CHAPTER_SUBSECTIONS[num],
    comingSoon,
  };
});

export function allMathTasks(): MathTask[] {
  return MATH_CHAPTERS.flatMap((ch) => ch.tasks);
}
