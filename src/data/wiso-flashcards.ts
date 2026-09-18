/** WiSo flashcard decks for Economics, Math, and German. */

import type { FlashcardSection } from "@/data/flashcards";
import { countCards } from "@/data/flashcards";
import { WISO_ECONOMICS_FLASHCARD_SECTIONS } from "@/data/wiso-economics-flashcards";
import { WISO_MATH_FLASHCARD_SECTIONS } from "@/data/wiso-math-flashcards";
import { WISO_GERMAN_FLASHCARD_SECTIONS } from "@/data/wiso-german-flashcards";

export type WisoFlashcardSubjectId = "economics" | "math" | "german";

export type WisoFlashcardSubject = {
  id: WisoFlashcardSubjectId;
  title: string;
  tag: string;
  description: string;
  accent: string;
  downloadHref: string | null;
  downloadLabel: string | null;
  sections: FlashcardSection[];
  comingSoon?: boolean;
};

export const WISO_FLASHCARD_SUBJECTS: WisoFlashcardSubject[] = [
  {
    id: "economics",
    title: "Wirtschaft",
    tag: "Begriffe & Konzepte",
    description:
      "Wirtschaftsbegriffe, Formeln und Abkürzungen auf Deutsch — sortiert nach Themen aus Wirtschaft verstehen.",
    accent: "#c8763a",
    downloadHref: null,
    downloadLabel: null,
    sections: WISO_ECONOMICS_FLASHCARD_SECTIONS,
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
    sections: WISO_MATH_FLASHCARD_SECTIONS,
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
    sections: WISO_GERMAN_FLASHCARD_SECTIONS,
  },
];

export function getWisoFlashcardSubject(id: string): WisoFlashcardSubject | undefined {
  return WISO_FLASHCARD_SUBJECTS.find((s) => s.id === id);
}

export { countCards };
