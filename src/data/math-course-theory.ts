/**
 * Mathematics Full Course theory for TheoryReader.
 * Full Course mathematics theory chapters rendered by TheoryReader.
 * (sync marker for Lovable GitHub pull — Ch2 independent claims 2026-08-27)
 */

import ch1 from "./math-theory/ch1.md?raw";
import ch2 from "./math-theory/ch2.md?raw";
import ch3 from "./math-theory/ch3.md?raw";
import ch5 from "./math-theory/ch5.md?raw";
import ch6 from "./math-theory/ch6.md?raw";
import ch8 from "./math-theory/ch8.md?raw";
import ch11 from "./math-theory/ch11.md?raw";
import ch12 from "./math-theory/ch12.md?raw";
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
  1: {
    num: 1,
    title: "Logic and set theory",
    markdown: ch1,
  },
  2: {
    num: 2,
    title: "Elementary algebra",
    markdown: ch2,
  },
  3: {
    num: 3,
    title: "Financial mathematics",
    markdown: ch3,
  },
  5: {
    num: 5,
    title: "Linear equations in two unknowns",
    markdown: ch5,
  },
  6: {
    num: 6,
    title: "Inequalities",
    markdown: ch6,
    materialsPdfUrl: "/bbe-math-inequalities-theory.pdf",
    materialsPdfName: "BBE-Math-Inequalities-Prep-Guide.pdf",
  },
  8: {
    num: 8,
    title: "Power functions",
    markdown: ch8,
  },
  11: {
    num: 11,
    title: "Differentiation and single-variable optimization",
    markdown: ch11,
  },
  12: {
    num: 12,
    title: "Standard probability",
    markdown: ch12,
    materialsPdfUrl: "/bbe-math-probability-theory.pdf",
    materialsPdfName: "BBE-Math-Standard-Probability-Reference-Guide.pdf",
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
