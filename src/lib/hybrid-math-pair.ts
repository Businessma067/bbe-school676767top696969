/**
 * One mathematics task, two stems. English is the bank. German is the overlay
 * already used by the WiSo course. A task counts once either way.
 */

import { MATH_CHAPTERS, loadMathChapterTasks, type MathTask } from "@/data/math-chapters";
import { WISO_MATH_CHAPTERS, loadWisoMathChapterTasks } from "@/data/wiso-math-chapters";

export type MathTermPair = { id: string; en: string; de: string };

export type PairedMathTask = {
  id: string;
  caseId: string;
  chapter: number;
  subsection?: string;
  en: MathTask;
  de: MathTask;
  translated: boolean;
};

export function chapterTitlePair(chapter: number): { en: string; de: string } {
  const en = MATH_CHAPTERS.find((item) => item.num === chapter)?.title ?? `Chapter ${chapter}`;
  const de = WISO_MATH_CHAPTERS.find((item) => item.num === chapter)?.title ?? en;
  return { en, de };
}

export function chapterTermPairs(chapter: number): MathTermPair[] {
  const en = MATH_CHAPTERS.find((item) => item.num === chapter);
  const de = WISO_MATH_CHAPTERS.find((item) => item.num === chapter);
  const deById = new Map((de?.subsections ?? []).map((item) => [item.id, item.title]));
  return (en?.subsections ?? []).map((item) => ({
    id: item.id,
    en: item.title,
    de: deById.get(item.id) ?? item.title,
  }));
}

function sameText(a: string | undefined, b: string | undefined): boolean {
  return (a ?? "").trim() === (b ?? "").trim();
}

export function taskIsTranslated(en: MathTask, de: MathTask): boolean {
  if (!sameText(en.title, de.title) && (de.title ?? "").trim().length > 0) return true;
  if (!sameText(en.context, de.context) && (de.context ?? "").trim().length > 0) return true;
  const enStatements = en.statements.join("\n").trim();
  const deStatements = de.statements.join("\n").trim();
  return deStatements.length > 0 && deStatements !== enStatements;
}

export async function loadPairedChapter(chapter: number): Promise<PairedMathTask[]> {
  const [enTasks, deTasks] = await Promise.all([
    loadMathChapterTasks(chapter),
    loadWisoMathChapterTasks(chapter, "de"),
  ]);
  const deById = new Map(deTasks.map((task) => [task.id, task]));
  return enTasks.map((en) => {
    const de = deById.get(en.id) ?? en;
    return {
      id: en.id,
      caseId: en.case_id,
      chapter,
      subsection: en.subsection,
      en,
      de,
      translated: taskIsTranslated(en, de),
    };
  });
}
