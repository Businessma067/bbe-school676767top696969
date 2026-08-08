/**
 * Economics Full Course theory (chapters 2–6) for TheoryReader.
 * Markdown + embedded figure PNGs from `npm run textbook:theory`.
 */

import ch2 from "./economics-theory/ch2.md?raw";
import ch3 from "./economics-theory/ch3.md?raw";
import ch4 from "./economics-theory/ch4.md?raw";
import ch5 from "./economics-theory/ch5.md?raw";
import ch6 from "./economics-theory/ch6.md?raw";
import { CHAPTER_TITLES } from "./textbook-pages";

export type EconomicsCourseTheoryChapter = {
  num: number;
  title: string;
  markdown: string;
};

export const ECONOMICS_COURSE_THEORY: Record<number, EconomicsCourseTheoryChapter> = {
  2: { num: 2, title: CHAPTER_TITLES[2]!, markdown: ch2 },
  3: { num: 3, title: CHAPTER_TITLES[3]!, markdown: ch3 },
  4: { num: 4, title: CHAPTER_TITLES[4]!, markdown: ch4 },
  5: { num: 5, title: CHAPTER_TITLES[5]!, markdown: ch5 },
  6: { num: 6, title: CHAPTER_TITLES[6]!, markdown: ch6 },
};

export function getEconomicsCourseTheory(chapter: number): EconomicsCourseTheoryChapter | undefined {
  return ECONOMICS_COURSE_THEORY[chapter];
}
