/** WiSo flashcard types, lightweight subject meta, and per-subject deck loaders. */

import type { FlashcardSection } from "@/data/flashcards";
import { countCards } from "@/data/flashcards";

export type WisoFlashcardSubjectId = "economics" | "math" | "german";

export type WisoFlashcardSubjectMeta = {
  id: WisoFlashcardSubjectId;
  title: string;
  tag: string;
  description: string;
  accent: string;
  downloadHref: string | null;
  downloadLabel: string | null;
  cardCount: number;
  sectionCount: number;
  comingSoon?: boolean;
};

export type WisoFlashcardSubject = WisoFlashcardSubjectMeta & {
  sections: FlashcardSection[];
};

/** Index / lock-screen subject cards — no deck payloads. */
export const WISO_FLASHCARD_SUBJECTS: WisoFlashcardSubjectMeta[] = [
  {
    id: "economics",
    title: "Wirtschaft",
    tag: "Begriffe & Konzepte",
    description:
      "Wirtschaftsbegriffe, Formeln und Abkürzungen auf Deutsch — sortiert nach Themen aus Wirtschaft verstehen.",
    accent: "#c8763a",
    downloadHref: null,
    downloadLabel: null,
    cardCount: 277,
    sectionCount: 20,
  },
  {
    id: "math",
    title: "Mathematik",
    tag: "Formeln",
    description:
      "Wesentliche WiSo-Mathematikformeln — dreizehn Themen mit klaren Symbolerklärungen auf Deutsch.",
    accent: "#10b981",
    downloadHref: null,
    downloadLabel: null,
    cardCount: 161,
    sectionCount: 13,
  },
  {
    id: "german",
    title: "Deutsch",
    tag: "Wortschatz",
    description:
      "Häufige deutsche Wörter mit Definitionen für das Sprachverständnis der WiSo-Aufnahmeprüfung.",
    accent: "#6366f1",
    downloadHref: null,
    downloadLabel: null,
    cardCount: 237,
    sectionCount: 4,
  },
];

export function getWisoFlashcardSubjectMeta(
  id: string,
): WisoFlashcardSubjectMeta | undefined {
  return WISO_FLASHCARD_SUBJECTS.find((s) => s.id === id);
}

const DECK_LOADERS: Record<
  WisoFlashcardSubjectId,
  () => Promise<{ sections: FlashcardSection[] }>
> = {
  economics: async () => {
    const m = await import("./wiso-economics-flashcards");
    return { sections: m.WISO_ECONOMICS_FLASHCARD_SECTIONS };
  },
  math: async () => {
    const m = await import("./wiso-math-flashcards");
    return { sections: m.WISO_MATH_FLASHCARD_SECTIONS };
  },
  german: async () => {
    const m = await import("./wiso-german-flashcards");
    return { sections: m.WISO_GERMAN_FLASHCARD_SECTIONS };
  },
};

/** Dynamic-import one WiSo subject deck (not the full barrel). */
export async function getWisoFlashcardSubject(
  id: string,
): Promise<WisoFlashcardSubject | undefined> {
  const meta = getWisoFlashcardSubjectMeta(id);
  if (!meta) return undefined;
  const { sections } = await DECK_LOADERS[meta.id]();
  return { ...meta, sections };
}

export { countCards };
