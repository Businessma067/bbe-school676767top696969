/**
 * Shared math library. One task bank, English or German stem, one progress store.
 * Chapter titles come from the syllabus shell so this file does not import banks.
 */

import { MATH_CHAPTERS } from "@/data/math-chapters";
import { loadHybridProgress, markSharedMathPassed } from "@/lib/hybrid-progress";

export const HYBRID_MATH_STORAGE_KEY = "hybrid.math.progress.v1";

/** Fully correct tasks that fill the shared-math ring. */
export const HYBRID_MATH_TARGET = 40;

export type HybridMathUnit = {
  id: string;
  title: string;
  blurb: string;
  chapters: readonly number[];
};

export const HYBRID_MATH_UNITS: readonly HybridMathUnit[] = [
  {
    id: "foundations",
    title: "Foundations",
    blurb: "Logic and algebraic rewriting that both papers assume before the first applied task.",
    chapters: [1, 2],
  },
  {
    id: "equations",
    title: "Equations and inequalities",
    blurb: "One unknown, two unknowns, and the inequality forms that show up in word problems.",
    chapters: [4, 5, 6],
  },
  {
    id: "finance",
    title: "Financial mathematics",
    blurb:
      "Interest, present value, annuities, and IRR. The formulas are shared; only the stem language flips.",
    chapters: [3],
  },
  {
    id: "functions",
    title: "Functions",
    blurb: "Linear, power, polynomial, exponential, and logarithmic behaviour.",
    chapters: [7, 8, 9, 10],
  },
  {
    id: "calculus",
    title: "Differentiation",
    blurb: "Rules, economic reading of a slope, and single-variable optima.",
    chapters: [11],
  },
  {
    id: "probability",
    title: "Probability",
    blurb: "Counting, conditional probability, expectation, and the binomial model.",
    chapters: [12, 13],
  },
];

export function hybridMathChapter(num: number) {
  return MATH_CHAPTERS.find((chapter) => chapter.num === num);
}

/** Task ids are `math-{chapter}-{n}`. The hyphen keeps chapter 1 off chapter 11. */
export function isSharedMathTaskId(id: string, chapter: number): boolean {
  return id.startsWith(`math-${chapter}-`);
}

export function countSharedMathPassed(passed: readonly string[], chapter: number): number {
  return passed.filter((id) => isSharedMathTaskId(id, chapter)).length;
}

/**
 * Count passed ids against the chapter's real task list. Some banks reuse
 * foreign id prefixes (chapter 3 tasks are `math-11-*`, chapter 10 are
 * `ch10-*`), so prefix matching miscounts — match by exact id instead.
 */
export function countSharedMathPassedIn(
  passed: readonly string[],
  tasks: readonly { id: string }[],
): number {
  const ids = new Set(tasks.map((t) => t.id));
  return passed.filter((id) => ids.has(id)).length;
}

export type HybridMathSnapshot = {
  passed: string[];
  revision: string[];
};

/** Copy newly cleared math tasks into twin readiness. One id counts once. */
export function syncSharedMathIntoHybrid(): void {
  const snap = readSharedMathSnapshot();
  const current = loadHybridProgress();
  for (const id of snap.passed) {
    if (!current.sharedMathPassed.includes(id)) markSharedMathPassed(id);
  }
}

export function readSharedMathSnapshot(): HybridMathSnapshot {
  if (typeof window === "undefined") return { passed: [], revision: [] };
  try {
    const raw = localStorage.getItem(HYBRID_MATH_STORAGE_KEY);
    if (!raw) return { passed: [], revision: [] };
    const parsed = JSON.parse(raw) as Partial<HybridMathSnapshot>;
    return {
      passed: Array.isArray(parsed.passed) ? parsed.passed : [],
      revision: Array.isArray(parsed.revision) ? parsed.revision : [],
    };
  } catch {
    return { passed: [], revision: [] };
  }
}
