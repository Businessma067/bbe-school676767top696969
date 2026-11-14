/**
 * Mathematics Full Course theory for TheoryReader.
 * Chapter markdown loads on demand so opening practice does not parse every guide.
 * (sync marker for Lovable GitHub pull — Ch2 independent claims 2026-08-27)
 */

export type MathCourseTheoryChapter = {
  num: number;
  title: string;
  markdown: string;
  /** Optional downloadable materials PDF under /public. */
  materialsPdfUrl?: string;
  materialsPdfName?: string;
};

type TheoryMeta = Omit<MathCourseTheoryChapter, "markdown">;

const THEORY_META: Record<number, TheoryMeta> = {
  1: { num: 1, title: "Logic and set theory" },
  2: { num: 2, title: "Elementary algebra" },
  3: { num: 3, title: "Financial mathematics" },
  4: { num: 4, title: "Equations" },
  5: { num: 5, title: "Linear equations in two unknowns" },
  6: {
    num: 6,
    title: "Inequalities",
    materialsPdfUrl: "/bbe-math-inequalities-theory.pdf",
    materialsPdfName: "BBE-Math-Inequalities-Prep-Guide.pdf",
  },
  7: { num: 7, title: "Linear and quadratic functions" },
  8: { num: 8, title: "Power functions" },
  9: { num: 9, title: "Polynomial functions" },
  10: { num: 10, title: "Exponential and logarithmic functions" },
  11: { num: 11, title: "Differentiation and single-variable optimization" },
  12: {
    num: 12,
    title: "Standard probability",
    materialsPdfUrl: "/bbe-math-probability-theory.pdf",
    materialsPdfName: "BBE-Math-Standard-Probability-Reference-Guide.pdf",
  },
  13: {
    num: 13,
    title: "Binomial distribution",
    materialsPdfUrl: "/bbe-math-binomial-theory.pdf",
    materialsPdfName: "BBE-Math-Binomial-Distribution-Theory.pdf",
  },
};

const MD_LOADERS: Record<number, () => Promise<{ default: string }>> = {
  1: () => import("./math-theory/ch1.md?raw"),
  2: () => import("./math-theory/ch2.md?raw"),
  3: () => import("./math-theory/ch3.md?raw"),
  4: () => import("./math-theory/ch4.md?raw"),
  5: () => import("./math-theory/ch5.md?raw"),
  6: () => import("./math-theory/ch6.md?raw"),
  7: () => import("./math-theory/ch7.md?raw"),
  8: () => import("./math-theory/ch8.md?raw"),
  9: () => import("./math-theory/ch9.md?raw"),
  10: () => import("./math-theory/ch10.md?raw"),
  11: () => import("./math-theory/ch11.md?raw"),
  12: () => import("./math-theory/ch12.md?raw"),
  13: () => import("./math-theory/ch13.md?raw"),
};

const chapterCache = new Map<number, MathCourseTheoryChapter>();

/** Sidebar / has-theory checks — titles only, no markdown payload. */
export const MATH_COURSE_THEORY: Record<number, MathCourseTheoryChapter> = Object.fromEntries(
  Object.values(THEORY_META).map((meta) => [meta.num, { ...meta, markdown: "" }]),
) as Record<number, MathCourseTheoryChapter>;

export async function loadMathCourseTheory(
  chapter: number,
): Promise<MathCourseTheoryChapter | undefined> {
  const hit = chapterCache.get(chapter);
  if (hit) return hit;
  const meta = THEORY_META[chapter];
  const loader = MD_LOADERS[chapter];
  if (!meta || !loader) return undefined;
  const mod = await loader();
  const row: MathCourseTheoryChapter = { ...meta, markdown: mod.default };
  chapterCache.set(chapter, row);
  return row;
}

/**
 * Sync meta (empty markdown until `loadMathCourseTheory` fills the cache).
 * Practice shells use this for Theory button visibility.
 */
export function getMathCourseTheory(
  chapter: number,
): MathCourseTheoryChapter | undefined {
  return chapterCache.get(chapter) ?? MATH_COURSE_THEORY[chapter];
}

export function mathChapterHasTheory(chapter: number): boolean {
  return THEORY_META[chapter] != null;
}
