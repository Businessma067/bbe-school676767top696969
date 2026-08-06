/**
 * Math syllabus chapters for Demo / Lite / Full practice pages.
 * Task content will be filled in later — placeholder slots keep the UI ready.
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
  /** True until real task content is authored. */
  placeholder?: boolean;
};

export type MathChapter = {
  num: number;
  title: string;
  tasks: MathTask[];
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
  "Differentiation and single variable optimization",
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

export const MATH_CHAPTERS: MathChapter[] = CHAPTER_TITLES.map((title, i) => {
  const num = i + 1;
  return {
    num,
    title,
    tasks: makePlaceholders(num, MATH_TASKS_PER_CHAPTER),
  };
});

export function allMathTasks(): MathTask[] {
  return MATH_CHAPTERS.flatMap((ch) => ch.tasks);
}
