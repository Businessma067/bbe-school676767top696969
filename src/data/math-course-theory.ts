/**
 * Mathematics Full Course theory for TheoryReader.
 * Chapter 13 (Binomial distribution) is populated; other chapters can be added later.
 * (sync marker for Lovable GitHub pull)
 */

import ch13 from "./math-theory/ch13.md?raw";

export type MathCourseTheoryChapter = {
  num: number;
  title: string;
  markdown: string;
  /** Optional downloadable materials PDF under /public. */
  materialsPdfUrl?: string;
  materialsPdfName?: string;
};

export const MATH_COURSE_THEORY: Record<number, MathCourseTheoryChapter> = {
  13: {
    num: 13,
    title: "Binomial distribution",
    markdown: ch13,
    materialsPdfUrl: "/bbe-math-binomial-theory.pdf",
    materialsPdfName: "BBE-Math-Binomial-Distribution-Theory.pdf",
  },
};

export function getMathCourseTheory(
  chapter: number,
): MathCourseTheoryChapter | undefined {
  return MATH_COURSE_THEORY[chapter];
}

export function mathChapterHasTheory(chapter: number): boolean {
  return getMathCourseTheory(chapter) != null;
}
