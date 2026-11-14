/**
 * WISO Wirtschaft theory (Wirtschaft verstehen 2026, chapters 1–4).
 * Markdown loads per chapter on demand.
 */

export type WisoEconomicsCourseTheoryChapter = {
  num: number;
  title: string;
  markdown: string;
  materialsPdfUrl: string;
  materialsPdfName: string;
};

const PDF_URL = "/wiso-wirtschaft-verstehen-2026.pdf";
const PDF_NAME = "Wirtschaft-verstehen-Aufnahmepruefung-2026.pdf";

const MD_LOADERS: Record<number, () => Promise<{ default: string }>> = {
  1: () => import("./wiso-economics-theory/ch1.md?raw"),
  2: () => import("./wiso-economics-theory/ch2.md?raw"),
  3: () => import("./wiso-economics-theory/ch3.md?raw"),
  4: () => import("./wiso-economics-theory/ch4.md?raw"),
};

const TITLES: Record<number, string> = {
  1: "Warum wir wirtschaften und was Wirtschaften bedeutet",
  2: "Wirtschaft als Teil der Gesellschaft und Umwelt",
  3: "Was Wirtschaften für Unternehmen bedeutet",
  4: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft",
};

const chapterCache = new Map<number, WisoEconomicsCourseTheoryChapter>();

export const WISO_ECONOMICS_COURSE_THEORY: Record<number, WisoEconomicsCourseTheoryChapter> =
  Object.fromEntries(
    Object.entries(TITLES).map(([k, title]) => {
      const num = Number(k);
      return [
        num,
        {
          num,
          title,
          markdown: "",
          materialsPdfUrl: PDF_URL,
          materialsPdfName: PDF_NAME,
        } satisfies WisoEconomicsCourseTheoryChapter,
      ];
    }),
  ) as Record<number, WisoEconomicsCourseTheoryChapter>;

export async function loadWisoEconomicsCourseTheory(
  chapter: number,
): Promise<WisoEconomicsCourseTheoryChapter | undefined> {
  const hit = chapterCache.get(chapter);
  if (hit) return hit;
  const meta = WISO_ECONOMICS_COURSE_THEORY[chapter];
  const loader = MD_LOADERS[chapter];
  if (!meta || !loader) return undefined;
  const mod = await loader();
  const row = { ...meta, markdown: mod.default };
  chapterCache.set(chapter, row);
  return row;
}

export function getWisoEconomicsCourseTheory(
  chapter: number,
): WisoEconomicsCourseTheoryChapter | undefined {
  return chapterCache.get(chapter) ?? WISO_ECONOMICS_COURSE_THEORY[chapter];
}
