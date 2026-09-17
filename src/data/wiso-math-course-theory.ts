/**
 * German WiSo math theory guides — same chapter map as BBE, German markdown.
 */

import ch1 from "./wiso/math-theory/ch1.md?raw";
import ch2 from "./wiso/math-theory/ch2.md?raw";
import ch3 from "./wiso/math-theory/ch3.md?raw";
import ch4 from "./wiso/math-theory/ch4.md?raw";
import ch5 from "./wiso/math-theory/ch5.md?raw";
import ch6 from "./wiso/math-theory/ch6.md?raw";
import ch7 from "./wiso/math-theory/ch7.md?raw";
import ch8 from "./wiso/math-theory/ch8.md?raw";
import ch9 from "./wiso/math-theory/ch9.md?raw";
import ch10 from "./wiso/math-theory/ch10.md?raw";
import ch11 from "./wiso/math-theory/ch11.md?raw";
import ch12 from "./wiso/math-theory/ch12.md?raw";
import ch13 from "./wiso/math-theory/ch13.md?raw";

import type { MathCourseTheoryChapter } from "@/data/math-course-theory";
import { WISO_MATH_CHAPTER_TITLES } from "@/data/wiso-math-chapters";

const MARKDOWN: Record<number, string> = {
  1: ch1,
  2: ch2,
  3: ch3,
  4: ch4,
  5: ch5,
  6: ch6,
  7: ch7,
  8: ch8,
  9: ch9,
  10: ch10,
  11: ch11,
  12: ch12,
  13: ch13,
};

export const WISO_MATH_COURSE_THEORY: Record<number, MathCourseTheoryChapter> = Object.fromEntries(
  WISO_MATH_CHAPTER_TITLES.map((title, i) => {
    const num = i + 1;
    return [
      num,
      {
        num,
        title,
        markdown: MARKDOWN[num] ?? "",
      } satisfies MathCourseTheoryChapter,
    ];
  }),
) as Record<number, MathCourseTheoryChapter>;

export function getWisoMathCourseTheory(
  chapter: number,
): MathCourseTheoryChapter | undefined {
  return WISO_MATH_COURSE_THEORY[chapter];
}

export function wisoMathChapterHasTheory(chapter: number): boolean {
  return getWisoMathCourseTheory(chapter) != null;
}
