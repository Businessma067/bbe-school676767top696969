/**
 * WiSo German (Sprachverständnis) syllabus for Full Course practice.
 * Single chapter: Texte — reading passages only (no grammar/vocab bank).
 */

import textsBank from "@/data/wiso/german/texts.json";
import {
  passageForTask,
  type EnglishChapter,
  type EnglishTask,
  type EnglishSubsection,
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

const texts = loadBank(textsBank as BankFile);

export const WISO_GERMAN_CHAPTERS: EnglishChapter[] = [
  {
    key: "texts",
    num: 1,
    title: "Texte",
    subsections: texts.subsections,
    tasks: texts.tasks,
  },
];

/**
 * WiSo demo unlocks by text (subsection). Unlisted texts stay locked.
 * First text: first 5 tasks; second text: first 3 tasks.
 */
export const DEMO_WISO_GERMAN_SUBSECTION_FREE: Readonly<Record<string, number>> = {
  "t.1": 5,
  "t.2": 3,
};

export { passageForTask };
