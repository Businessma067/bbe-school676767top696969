/** BBE flashcard types, lightweight subject meta, and per-subject deck loaders. */

export type Flashcard = {
  term: string;
  explanation: string;
};

export type FlashcardSection = {
  id: string;
  title: string;
  cards: Flashcard[];
};

export type FlashcardSubjectId = "economics" | "math" | "english";

export type FlashcardSubjectMeta = {
  id: FlashcardSubjectId;
  title: string;
  tag: string;
  description: string;
  accent: string;
  downloadHref: string | null;
  downloadLabel: string | null;
  /** Precomputed so index routes never import deck modules. */
  cardCount: number;
  sectionCount: number;
  comingSoon?: boolean;
};

export type FlashcardSubject = FlashcardSubjectMeta & {
  sections: FlashcardSection[];
};

/** Index / lock-screen subject cards — no deck payloads. */
export const FLASHCARD_SUBJECTS: FlashcardSubjectMeta[] = [
  {
    id: "economics",
    title: "Economics",
    tag: "Terms & concepts",
    description:
      "Core terminology, market concepts, business forms, marketing, and accounting from the BBE economics study material.",
    accent: "#c8763a",
    downloadHref: "/flashcards/BBE_Economics_Flashcards.docx",
    downloadLabel: "Download Economics .docx",
    cardCount: 147,
    sectionCount: 6,
  },
  {
    id: "math",
    title: "Math",
    tag: "Formulas",
    description:
      "Essential BBE math formulas — thirteen syllabus topics with clear symbol explanations (from Sydsaeter-style material).",
    accent: "#10b981",
    downloadHref: "/flashcards/BBE_Math_Flashcards.docx",
    downloadLabel: "Download Math .docx",
    cardCount: 161,
    sectionCount: 13,
  },
  {
    id: "english",
    title: "English",
    tag: "Vocabulary",
    description:
      "BBE English exam vocabulary — 200 unique cards each for synonyms, meanings, and antonyms (business-news register).",
    accent: "#0ea5e9",
    downloadHref: null,
    downloadLabel: null,
    cardCount: 840,
    sectionCount: 3,
  },
];

export function getFlashcardSubjectMeta(id: string): FlashcardSubjectMeta | undefined {
  return FLASHCARD_SUBJECTS.find((s) => s.id === id);
}

const DECK_LOADERS: Record<
  FlashcardSubjectId,
  () => Promise<{ sections: FlashcardSection[] }>
> = {
  economics: async () => {
    const m = await import("./economics-flashcards");
    return { sections: m.ECONOMICS_FLASHCARD_SECTIONS };
  },
  math: async () => {
    const m = await import("./math-flashcards");
    return { sections: m.MATH_FLASHCARD_SECTIONS };
  },
  english: async () => {
    const m = await import("./english-flashcards");
    return { sections: m.ENGLISH_FLASHCARD_SECTIONS };
  },
};

/** Dynamic-import one subject deck (not the full barrel). */
export async function getFlashcardSubject(
  id: string,
): Promise<FlashcardSubject | undefined> {
  const meta = getFlashcardSubjectMeta(id);
  if (!meta) return undefined;
  const { sections } = await DECK_LOADERS[meta.id]();
  return { ...meta, sections };
}

export function countCards(sections: FlashcardSection[]): number {
  return sections.reduce((n, s) => n + s.cards.length, 0);
}
