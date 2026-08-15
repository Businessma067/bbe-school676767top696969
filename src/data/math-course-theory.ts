/**
 * Mathematics Full Course theory for TheoryReader.
 * Full Course mathematics theory chapters rendered by TheoryReader.
 * (sync marker for Lovable GitHub pull)
 */

import ch5 from "./math-theory/ch5.md?raw";
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
  5: {
    num: 5,
    title: "Linear equations in two unknowns",
    markdown: ch5,
  },
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
