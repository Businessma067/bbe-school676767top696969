/**
 * WISO Wirtschaft theory (Wirtschaft verstehen 2026, chapters 1–4).
 */

import ch1 from "./wiso-economics-theory/ch1.md?raw";
import ch2 from "./wiso-economics-theory/ch2.md?raw";
import ch3 from "./wiso-economics-theory/ch3.md?raw";
import ch4 from "./wiso-economics-theory/ch4.md?raw";

export type WisoEconomicsCourseTheoryChapter = {
  num: number;
  title: string;
  markdown: string;
  materialsPdfUrl: string;
  materialsPdfName: string;
};

const PDF_URL = "/wiso-wirtschaft-verstehen-2026.pdf";
const PDF_NAME = "Wirtschaft-verstehen-Aufnahmepruefung-2026.pdf";

export const WISO_ECONOMICS_COURSE_THEORY: Record<number, WisoEconomicsCourseTheoryChapter> = {
  1: {
    num: 1,
    title: "Warum wir wirtschaften und was Wirtschaften bedeutet",
    markdown: ch1,
    materialsPdfUrl: PDF_URL,
    materialsPdfName: PDF_NAME,
  },
  2: {
    num: 2,
    title: "Wirtschaft als Teil der Gesellschaft und Umwelt",
    markdown: ch2,
    materialsPdfUrl: PDF_URL,
    materialsPdfName: PDF_NAME,
  },
  3: {
    num: 3,
    title: "Was Wirtschaften für Unternehmen bedeutet",
    markdown: ch3,
    materialsPdfUrl: PDF_URL,
    materialsPdfName: PDF_NAME,
  },
  4: {
    num: 4,
    title: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft",
    markdown: ch4,
    materialsPdfUrl: PDF_URL,
    materialsPdfName: PDF_NAME,
  },
};

export function getWisoEconomicsCourseTheory(
  chapter: number,
): WisoEconomicsCourseTheoryChapter | undefined {
  return WISO_ECONOMICS_COURSE_THEORY[chapter];
}
