/**
 * German WiSo math theory guides — same chapter map as BBE, German markdown.
 * Markdown loads per chapter so practice shells stay light.
 */

import type { MathCourseTheoryChapter } from "@/data/math-course-theory";
import { WISO_MATH_CHAPTER_TITLES } from "@/data/wiso-math-chapters";

const MD_LOADERS: Record<number, () => Promise<{ default: string }>> = {
  1: () => import("./wiso/math-theory/ch1.md?raw"),
  2: () => import("./wiso/math-theory/ch2.md?raw"),
  3: () => import("./wiso/math-theory/ch3.md?raw"),
  4: () => import("./wiso/math-theory/ch4.md?raw"),
  5: () => import("./wiso/math-theory/ch5.md?raw"),
  6: () => import("./wiso/math-theory/ch6.md?raw"),
  7: () => import("./wiso/math-theory/ch7.md?raw"),
  8: () => import("./wiso/math-theory/ch8.md?raw"),
  9: () => import("./wiso/math-theory/ch9.md?raw"),
  10: () => import("./wiso/math-theory/ch10.md?raw"),
  11: () => import("./wiso/math-theory/ch11.md?raw"),
  12: () => import("./wiso/math-theory/ch12.md?raw"),
  13: () => import("./wiso/math-theory/ch13.md?raw"),
};

const chapterCache = new Map<number, MathCourseTheoryChapter>();

/** Titles only until a chapter is loaded. */
export const WISO_MATH_COURSE_THEORY: Record<number, MathCourseTheoryChapter> = Object.fromEntries(
  WISO_MATH_CHAPTER_TITLES.map((title, i) => {
    const num = i + 1;
    return [num, { num, title, markdown: "" } satisfies MathCourseTheoryChapter];
  }),
) as Record<number, MathCourseTheoryChapter>;

export async function loadWisoMathCourseTheory(
  chapter: number,
): Promise<MathCourseTheoryChapter | undefined> {
  const hit = chapterCache.get(chapter);
  if (hit) return hit;
  const meta = WISO_MATH_COURSE_THEORY[chapter];
  const loader = MD_LOADERS[chapter];
  if (!meta || !loader) return undefined;
  const mod = await loader();
  const row: MathCourseTheoryChapter = { ...meta, markdown: mod.default };
  chapterCache.set(chapter, row);
  return row;
}

export function getWisoMathCourseTheory(
  chapter: number,
): MathCourseTheoryChapter | undefined {
  return chapterCache.get(chapter) ?? WISO_MATH_COURSE_THEORY[chapter];
}

export function wisoMathChapterHasTheory(chapter: number): boolean {
  return WISO_MATH_COURSE_THEORY[chapter] != null;
}
