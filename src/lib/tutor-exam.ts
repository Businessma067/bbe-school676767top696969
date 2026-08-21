/** Build random theory-exam questions from flashcard decks. */

import type { FlashcardSection } from "@/data/flashcards";

export type TutorExamCard = {
  id: string;
  term: string;
  explanation: string;
  sectionId: string;
  sectionTitle: string;
};

export type TutorExamMode = "define" | "identify";

export type TutorExamChoice = {
  id: string;
  label: string;
};

export type TutorExamQuestion = {
  id: string;
  mode: TutorExamMode;
  /** Prompt shown by the tutor (without the stem content). */
  prompt: string;
  /** Term or definition depending on mode. */
  stem: string;
  choices: TutorExamChoice[];
  correctChoiceId: string;
  revealTerm: string;
  revealExplanation: string;
  sectionTitle: string;
};

export const TUTOR_EXAM_SIZE = 10;
const CHOICE_COUNT = 4;

export function shuffleCopy<T>(arr: T[]): T[] {
  const next = [...arr];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function poolFromSections(
  sections: FlashcardSection[],
  sectionId: string | "all",
): TutorExamCard[] {
  const filtered =
    sectionId === "all" ? sections : sections.filter((s) => s.id === sectionId);
  return filtered.flatMap((s) =>
    s.cards.map((c, i) => ({
      id: `${s.id}::${i}::${c.term}`,
      term: c.term,
      explanation: c.explanation,
      sectionId: s.id,
      sectionTitle: s.title,
    })),
  );
}

function uniqueByLabel(
  cards: TutorExamCard[],
  pick: (c: TutorExamCard) => string,
  excludeId: string,
): TutorExamCard[] {
  const seen = new Set<string>();
  const out: TutorExamCard[] = [];
  for (const c of cards) {
    if (c.id === excludeId) continue;
    const label = pick(c).trim().toLowerCase();
    if (!label || seen.has(label)) continue;
    seen.add(label);
    out.push(c);
  }
  return out;
}

function buildChoices(
  correct: TutorExamCard,
  distractors: TutorExamCard[],
  pickLabel: (c: TutorExamCard) => string,
): { choices: TutorExamChoice[]; correctChoiceId: string } {
  const pool = [
    correct,
    ...distractors.slice(0, Math.max(0, CHOICE_COUNT - 1)),
  ];
  const shuffled = shuffleCopy(pool);
  const choices = shuffled.map((c, i) => ({
    id: `opt-${i}-${c.id}`,
    label: pickLabel(c),
  }));
  const correctIdx = shuffled.findIndex((c) => c.id === correct.id);
  return {
    choices,
    correctChoiceId: choices[correctIdx]?.id ?? choices[0]!.id,
  };
}

function makeQuestion(card: TutorExamCard, pool: TutorExamCard[]): TutorExamQuestion {
  const mode: TutorExamMode = Math.random() < 0.5 ? "define" : "identify";

  if (mode === "define") {
    const distractors = shuffleCopy(
      uniqueByLabel(pool, (c) => c.explanation, card.id),
    );
    const { choices, correctChoiceId } = buildChoices(
      card,
      distractors,
      (c) => c.explanation,
    );
    return {
      id: `q-define-${card.id}-${Math.random().toString(36).slice(2, 8)}`,
      mode,
      prompt: "What does this concept mean?",
      stem: card.term,
      choices,
      correctChoiceId,
      revealTerm: card.term,
      revealExplanation: card.explanation,
      sectionTitle: card.sectionTitle,
    };
  }

  const distractors = shuffleCopy(uniqueByLabel(pool, (c) => c.term, card.id));
  const { choices, correctChoiceId } = buildChoices(
    card,
    distractors,
    (c) => c.term,
  );
  return {
    id: `q-identify-${card.id}-${Math.random().toString(36).slice(2, 8)}`,
    mode,
    prompt: "Which concept matches this meaning?",
    stem: card.explanation,
    choices,
    correctChoiceId,
    revealTerm: card.term,
    revealExplanation: card.explanation,
    sectionTitle: card.sectionTitle,
  };
}

/** Fresh random exam every call — order, cards, modes, and choices all reshuffled. */
export function buildTutorExam(
  sections: FlashcardSection[],
  sectionId: string | "all" = "all",
  size = TUTOR_EXAM_SIZE,
): TutorExamQuestion[] {
  const pool = poolFromSections(sections, sectionId);
  if (pool.length === 0) return [];

  const picked = shuffleCopy(pool).slice(0, Math.min(size, pool.length));
  return picked.map((card) => makeQuestion(card, pool));
}

export const TUTOR_GREETINGS = [
  "Booting theory mode… Ready when you are.",
  "Random question set loaded. Let's test what you know.",
  "New exam seed locked in. No repeats this round — promise.",
  "Circuits warmed up. I'll ask; you pick the best answer.",
];

export const TUTOR_CORRECT = [
  "Correct. Nice recall.",
  "That's right — logging a +1.",
  "Spot on. Next question incoming.",
  "Yes! Theory check passed.",
];

export const TUTOR_WRONG = [
  "Not quite. Here's the right pair.",
  "Missed that one — study the reveal below.",
  "Incorrect. Keep going; randomness is merciless.",
  "Wrong answer. File this term for later.",
];

export function pickLine(lines: string[]): string {
  return lines[Math.floor(Math.random() * lines.length)]!;
}
