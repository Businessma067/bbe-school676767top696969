/**
 * Economics Full Course theory (chapters 2–6) for TheoryReader.
 * Markdown from `npm run textbook:theory`; figures are live React/SVG via [[FIGURE:id|caption]].
 * Chapter bodies load on demand.
 */

import { CHAPTER_TITLES } from "./textbook-pages";

export type EconomicsCourseTheoryChapter = {
  num: number;
  title: string;
  markdown: string;
};

const MD_LOADERS: Record<number, () => Promise<{ default: string }>> = {
  2: () => import("./economics-theory/ch2.md?raw"),
  3: () => import("./economics-theory/ch3.md?raw"),
  4: () => import("./economics-theory/ch4.md?raw"),
  5: () => import("./economics-theory/ch5.md?raw"),
  6: () => import("./economics-theory/ch6.md?raw"),
};

const chapterCache = new Map<number, EconomicsCourseTheoryChapter>();

export const ECONOMICS_COURSE_THEORY: Record<number, EconomicsCourseTheoryChapter> = {
  2: { num: 2, title: CHAPTER_TITLES[2]!, markdown: "" },
  3: { num: 3, title: CHAPTER_TITLES[3]!, markdown: "" },
  4: { num: 4, title: CHAPTER_TITLES[4]!, markdown: "" },
  5: { num: 5, title: CHAPTER_TITLES[5]!, markdown: "" },
  6: { num: 6, title: CHAPTER_TITLES[6]!, markdown: "" },
};

export async function loadEconomicsCourseTheory(
  chapter: number,
): Promise<EconomicsCourseTheoryChapter | undefined> {
  const hit = chapterCache.get(chapter);
  if (hit) return hit;
  const meta = ECONOMICS_COURSE_THEORY[chapter];
  const loader = MD_LOADERS[chapter];
  if (!meta || !loader) return undefined;
  const mod = await loader();
  const row = { ...meta, markdown: mod.default };
  chapterCache.set(chapter, row);
  return row;
}

export function getEconomicsCourseTheory(chapter: number): EconomicsCourseTheoryChapter | undefined {
  return chapterCache.get(chapter) ?? ECONOMICS_COURSE_THEORY[chapter];
}
