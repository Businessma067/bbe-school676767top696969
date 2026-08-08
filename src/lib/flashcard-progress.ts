/** Persist known/unknown flashcard ratings and weighted deck selection. */

export type CardKnowledge = "known" | "unknown";

export type FlashcardProgressMap = Record<string, CardKnowledge>;

const STORAGE_PREFIX = "bbe-flashcard-progress:";

export function cardKey(subjectId: string, sectionId: string, term: string): string {
  return `${subjectId}::${sectionId}::${term}`;
}

export function loadProgress(subjectId: string): FlashcardProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + subjectId);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as FlashcardProgressMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveProgress(subjectId: string, map: FlashcardProgressMap): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_PREFIX + subjectId, JSON.stringify(map));
  } catch {
    /* ignore quota / private mode */
  }
}

export function clearProgress(subjectId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_PREFIX + subjectId);
  } catch {
    /* ignore */
  }
}

/** Known cards appear rarely; unknown cards appear more often. */
export function cardWeight(status: CardKnowledge | undefined): number {
  if (status === "known") return 0.22;
  if (status === "unknown") return 4.5;
  return 2;
}

export function pickWeightedIndex<T extends { key: string }>(
  cards: T[],
  progress: FlashcardProgressMap,
  excludeKey?: string,
): number {
  if (cards.length === 0) return 0;
  const weights = cards.map((c) => {
    if (excludeKey && c.key === excludeKey) return 0;
    return cardWeight(progress[c.key]);
  });
  const total = weights.reduce((a, b) => a + b, 0);
  if (total <= 0) {
    // All excluded — fall back to any other card, else 0
    const alt = cards.findIndex((c) => c.key !== excludeKey);
    return alt >= 0 ? alt : 0;
  }
  let r = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return cards.length - 1;
}

export function summarizeProgress(
  keys: string[],
  progress: FlashcardProgressMap,
): { known: number; unknown: number; unset: number } {
  let known = 0;
  let unknown = 0;
  let unset = 0;
  for (const k of keys) {
    const s = progress[k];
    if (s === "known") known++;
    else if (s === "unknown") unknown++;
    else unset++;
  }
  return { known, unknown, unset };
}
