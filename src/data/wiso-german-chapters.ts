/**
 * WiSo German (Sprachverständnis) syllabus for Full Course practice.
 * Single chapter: Texte — reading passages only (no grammar/vocab bank).
 *
 * Intentionally does not import English banks — hybrid/mocks must not pay for
 * the BBE English corpus when they only need German reading.
 * The texts bank is loaded asynchronously so practice shells paint first.
 */

import type {
  EnglishChapter,
  EnglishSubsection,
  EnglishTask,
} from "@/data/english-chapters";

export type WisoGermanTask = EnglishTask;
export type WisoGermanChapter = EnglishChapter;

type BankFile = {
  subsections: EnglishSubsection[];
  tasks: EnglishTask[];
};

function loadBank(raw: BankFile): { subsections: EnglishSubsection[]; tasks: EnglishTask[] } {
  const subsections = raw.subsections ?? [];
  const passageBySub = new Map(
    subsections.filter((s) => !!s.passage).map((s) => [s.id, s.passage as string]),
  );
  return {
    subsections,
    tasks: (raw.tasks ?? []).map((t) => ({
      ...t,
      tactical_explanations: t.tactical_explanations ?? [],
      highlights: t.highlights ?? [],
      passage: t.passage ?? passageBySub.get(t.subsection),
      kind: t.kind ?? "reading",
    })),
  };
}

let chaptersCache: EnglishChapter[] | null = null;
let chaptersPromise: Promise<EnglishChapter[]> | null = null;

/**
 * Async loader for the WiSo German Texte bank.
 * Prefer this over sync imports so routes can paint a shell first.
 * hybrid-mock-paper dynamic-imports this module and should call this loader.
 */
export async function loadWisoGermanChapters(): Promise<EnglishChapter[]> {
  if (chaptersCache) return chaptersCache;
  if (!chaptersPromise) {
    chaptersPromise = (async () => {
      const mod = await import("@/data/wiso/german/texts.json");
      const raw = (mod as { default?: BankFile }).default ?? (mod as BankFile);
      const texts = loadBank(raw);
      const chapters: EnglishChapter[] = [
        {
          key: "texts",
          num: 1,
          title: "Texte",
          subsections: texts.subsections,
          tasks: texts.tasks,
        },
      ];
      chaptersCache = chapters;
      return chapters;
    })();
  }
  return chaptersPromise;
}

/**
 * Load one German reading subsection (passage + its tasks) without callers
 * holding the full Texte chapter. Still uses the shared bank file/cache —
 * does not split or rewrite the JSON.
 */
export async function loadWisoGermanSubsection(id: string): Promise<{
  subsection: EnglishSubsection | undefined;
  tasks: EnglishTask[];
}> {
  const chapters = await loadWisoGermanChapters();
  const chapter = chapters[0];
  if (!chapter) return { subsection: undefined, tasks: [] };
  const subsection = chapter.subsections.find((s) => s.id === id);
  const tasks = chapter.tasks.filter((t) => t.subsection === id);
  return { subsection, tasks };
}

/**
 * WiSo demo unlocks by text (subsection). Unlisted texts stay locked.
 * First text: first 5 tasks; second text: first 3 tasks.
 */
export const DEMO_WISO_GERMAN_SUBSECTION_FREE: Readonly<Record<string, number>> = {
  "t.1": 5,
  "t.2": 3,
};

export function passageForTask(
  task: EnglishTask | undefined,
  chapters: EnglishChapter[],
): string {
  if (!task) return "";
  if (task.passage) return task.passage;
  for (const ch of chapters) {
    const sub = ch.subsections.find((s) => s.id === task.subsection);
    if (sub?.passage) return sub.passage;
  }
  return "";
}
