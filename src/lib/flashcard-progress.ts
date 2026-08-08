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

function shuffleInPlace<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Build a full-cycle order: every card once before repeats.
 * Soft priority: unknowns early, then unset, then known (shuffled within band).
 */
export function buildStudyOrder<T extends { key: string }>(
  cards: T[],
  progress: FlashcardProgressMap,
  excludeKey?: string,
): number[] {
  if (cards.length === 0) return [];
  const bands: [number[], number[], number[]] = [[], [], []];
  for (let i = 0; i < cards.length; i++) {
    if (excludeKey && cards[i].key === excludeKey) continue;
    const s = progress[cards[i].key];
    if (s === "unknown") bands[0].push(i);
    else if (s === "known") bands[2].push(i);
    else bands[1].push(i);
  }
  for (const band of bands) shuffleInPlace(band);
  let order = [...bands[0], ...bands[1], ...bands[2]];
  // Tiny decks can exclude everything — fall back to shuffle of all others
  if (order.length === 0) {
    order = cards.map((_, i) => i).filter((i) => cards[i].key !== excludeKey);
    shuffleInPlace(order);
  }
  if (order.length === 0) order = [0];
  return order;
}

export function pickWeightedIndex<T extends { key: string }>(
  cards: T[],
  progress: FlashcardProgressMap,
  excludeKey?: string,
): number {
  const order = buildStudyOrder(cards, progress, excludeKey);
  return order[0] ?? 0;
}

/** Take next index from a depleting cycle queue; refill when exhausted. */
export function takeNextFromQueue<T extends { key: string }>(
  queue: number[],
  cards: T[],
  progress: FlashcardProgressMap,
  excludeKey?: string,
): { index: number; queue: number[] } {
  if (cards.length === 0) return { index: 0, queue: [] };
  let q = queue.filter((i) => i >= 0 && i < cards.length && cards[i].key !== excludeKey);
  if (q.length === 0) {
    q = buildStudyOrder(cards, progress, excludeKey);
  }
  const index = q[0] ?? 0;
  return { index, queue: q.slice(1) };
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
