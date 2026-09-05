/**
 * Math syllabus chapters for Demo / Lite / Full practice pages.
 * Chapter task banks are loaded on demand (dynamic import) so opening a page
 * does not parse every chapter's explanations into one giant JS chunk.
 * Chapters 1–9 and 11–13 are populated; chapter 10 remains coming soon.
 */

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
  5: { "5": 10 },
  6: { "6.1": 10, "6.2": 5, "6.3": 5, "6.4": 5, "6.5": 4 },
  7: { "7": 10 },
  8: { "8": 10 },
  9: { "9": 10 },
  11: { "11.1": 10, "11.2": 10, "11.3": 10, "11.4": 10, "11.5": 5 },
};

/** Demo unlocks for chapters without a subsection map (overall first N tasks). */
export const DEMO_MATH_CHAPTER_FREE: Partial<Record<number, number>> = {
  /** Chapters 7 and 9 use subsection maps above; this remains the fallback. */
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
  "Differentiation and single-variable optimization",
  "Elementary probability",
  "Binomial distribution",
] as const;

/** Lightweight subsection TOC — kept here so the practice shell does not import banks. */
const CHAPTER_SUBSECTIONS: Partial<Record<number, readonly MathSubsection[]>> = {
  1: [
    { id: "1.1", title: "Sets: Elements, Subsets & Power Sets" },
    { id: "1.2", title: "Set Operations, Complements & Counting" },
    { id: "1.3", title: "Propositional Logic & Implications" },
    { id: "1.4", title: "Quantifiers, Validity & Deduction" },
    { id: "1.5", title: "Exam-style tasks" },
  ],
  2: [
    { id: "2.1", title: "Expanding, factoring, and identities" },
    { id: "2.2", title: "Rational expressions and algebraic fractions" },
    { id: "2.3", title: "Powers, roots, and negative exponents" },
    { id: "2.4", title: "Absolute value and algebraic rewriting" },
    { id: "2.5", title: "Mixed exam sets" },
  ],
  3: [
    { id: "3.1", title: "Interest Periods and Effective Rates" },
    { id: "3.2", title: "Continuous Compounding" },
    { id: "3.3", title: "Present Value" },
    { id: "3.4", title: "Geometric Series" },
    { id: "3.5", title: "Annuities, Annuities Due & Perpetuities" },
    { id: "3.6", title: "Mortgage Repayments" },
    { id: "3.7", title: "Internal Rate of Return" },
    { id: "3.8", title: "Exam-style tasks" },
  ],
  4: [
    { id: "4.1", title: "Linear equations in one unknown" },
    { id: "4.2", title: "Quadratic equations" },
    { id: "4.3", title: "Rational, radical and absolute-value equations" },
    { id: "4.4", title: "Exponential and logarithmic equations" },
    { id: "4.5", title: "Mixed exam sets" },
  ],
  5: [
    { id: "5", title: "Linear equations in two unknowns" },
    { id: "5.5", title: "Exam-style tasks" },
  ],
  6: [
    { id: "6.1", title: "Rational Inequalities" },
    { id: "6.2", title: "Quadratic Sign Inequalities" },
    { id: "6.3", title: "Compound & Special Inequalities" },
    { id: "6.4", title: "Word Problems" },
    { id: "6.5", title: "Exam-style tasks" },
  ],
  7: [
    { id: "7", title: "Linear and quadratic functions" },
    { id: "7.5", title: "Mixed exam" },
  ],
  8: [
    { id: "8", title: "Power functions" },
    { id: "8.5", title: "Exam-style tasks" },
  ],
  9: [
    { id: "9", title: "Polynomial functions" },
    { id: "9.5", title: "Mixed exam" },
  ],
  11: [
    { id: "11.1", title: "Differentiation rules & mechanics" },
    { id: "11.2", title: "Economic interpretation of the derivative" },
    { id: "11.3", title: "Finding and classifying optima" },
    { id: "11.4", title: "Interpreting graphs without algebra" },
    { id: "11.5", title: "Exam-style tasks" },
  ],
  12: [
    { id: "12.1", title: "Combinatorial Probability" },
    { id: "12.2", title: "Inclusion–Exclusion" },
    { id: "12.3", title: "Conditional Probability" },
    { id: "12.4", title: "Expected Value, Variance & SD" },
    { id: "12.5", title: "Bayes' Theorem" },
    { id: "12.6", title: "Exam-style tasks" },
  ],
  13: [
    { id: "13", title: "Binomial distribution" },
    { id: "13.5", title: "Exam-style tasks" },
  ],
};

/** Chapters with a real task bank module (loaded on demand). */
const LOADABLE_CHAPTERS = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]);

type ChapterBankModule = {
  tasks: MathTask[];
};

const chapterTaskCache = new Map<number, MathTask[]>();
const chapterTaskInflight = new Map<number, Promise<MathTask[]>>();

async function importChapterBank(num: number): Promise<ChapterBankModule> {
  switch (num) {
    case 1: {
      const m = await import("@/data/math-ch1-logic");
      return { tasks: m.MATH_CH1_LOGIC };
    }
    case 2: {
      const m = await import("@/data/math-ch2-elementary-algebra");
      return { tasks: m.MATH_CH2_ALGEBRA };
    }
    case 3: {
      const m = await import("@/data/math-ch11-financial");
      return { tasks: m.MATH_CH11_FINANCIAL };
    }
    case 4: {
      const m = await import("@/data/math-ch4-equations");
      return { tasks: m.MATH_CH4_EQUATIONS };
    }
    case 5: {
      const m = await import("@/data/math-ch5-linear-equations");
      return { tasks: m.MATH_CH5_LINEAR_EQUATIONS };
    }
    case 6: {
      const m = await import("@/data/math-ch6-inequalities");
      return { tasks: m.MATH_CH6_INEQUALITIES };
    }
    case 7: {
      const m = await import("@/data/math-ch7-linear-quadratic");
      return { tasks: m.MATH_CH7_LINEAR_QUADRATIC };
    }
    case 8: {
      const m = await import("@/data/math-ch8-power-functions");
      return { tasks: m.MATH_CH8_POWER_FUNCTIONS };
    }
    case 9: {
      const m = await import("@/data/math-ch9-polynomials");
      return { tasks: m.MATH_CH9_POLYNOMIALS };
    }
    case 11: {
      const m = await import("@/data/math-ch11-differentiation");
      return { tasks: m.MATH_CH11_DIFFERENTIATION };
    }
    case 12: {
      const m = await import("@/data/math-ch12-probability");
      return { tasks: m.MATH_CH12_PROBABILITY };
    }
    case 13: {
      const m = await import("@/data/math-ch13-binomial");
      return { tasks: m.MATH_CH13_BINOMIAL };
    }
    default:
      return { tasks: [] };
  }
}

/** Load one chapter's tasks (cached). Safe to call repeatedly. */
export async function loadMathChapterTasks(num: number): Promise<MathTask[]> {
  if (!LOADABLE_CHAPTERS.has(num)) return [];
  const cached = chapterTaskCache.get(num);
  if (cached) return cached;
  const inflight = chapterTaskInflight.get(num);
  if (inflight) return inflight;
  const promise = importChapterBank(num)
    .then((m) => {
      chapterTaskCache.set(num, m.tasks);
      chapterTaskInflight.delete(num);
      return m.tasks;
    })
    .catch((err) => {
      chapterTaskInflight.delete(num);
      throw err;
    });
  chapterTaskInflight.set(num, promise);
  return promise;
}

/** Load every populated chapter bank (Custom Mock / migration). */
export async function loadAllMathChapterTasks(): Promise<
  { num: number; tasks: MathTask[] }[]
> {
  const nums = [...LOADABLE_CHAPTERS].sort((a, b) => a - b);
  const loaded = await Promise.all(
    nums.map(async (num) => ({ num, tasks: await loadMathChapterTasks(num) })),
  );
  return loaded;
}

export function peekMathChapterTasks(num: number): MathTask[] | undefined {
  return chapterTaskCache.get(num);
}

/**
 * Syllabus shell for the practice sidebar.
 * `tasks` stays empty until `loadMathChapterTasks` fills the page state —
 * this keeps the initial Math route chunk small.
 */
export const MATH_CHAPTERS: MathChapter[] = CHAPTER_TITLES.map((title, i) => {
  const num = i + 1;
  const comingSoon = !LOADABLE_CHAPTERS.has(num);
  return {
    num,
    title,
    tasks: [],
    subsections: CHAPTER_SUBSECTIONS[num],
    comingSoon,
  };
});

/** @deprecated Prefer loadAllMathChapterTasks — sync flatMap is empty before lazy load. */
export function allMathTasks(): MathTask[] {
  return [...chapterTaskCache.values()].flat();
}
