/** How many locked rows to keep under one topic or subtopic. */
export const VISIBLE_LOCKED_TASKS = 5;

export type VisibleTask<T> = {
  item: T;
  index: number;
  locked: boolean;
  /** 0-based position among locked rows in this group. -1 when open. */
  lockedPos: number;
};

/** Keep every open task, then only the first few locked ones, in list order. */
export function takeVisibleTasks<T>(
  items: readonly T[],
  isLocked: (item: T, index: number) => boolean,
): VisibleTask<T>[] {
  let seen = 0;
  const out: VisibleTask<T>[] = [];
  items.forEach((item, index) => {
    if (!isLocked(item, index)) {
      out.push({ item, index, locked: false, lockedPos: -1 });
      return;
    }
    if (seen >= VISIBLE_LOCKED_TASKS) return;
    out.push({ item, index, locked: true, lockedPos: seen });
    seen += 1;
  });
  return out;
}

/** Phantom lock rows must not push a group past the same cap. */
export function remainingPhantomLocks(lockedShown: number, phantomCount: number): number {
  return Math.max(0, Math.min(phantomCount, VISIBLE_LOCKED_TASKS - lockedShown));
}
