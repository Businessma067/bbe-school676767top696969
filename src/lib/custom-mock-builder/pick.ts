export type PoolRow = {
  id: string;
  subsection: string;
};

/** Numeric / dotted book order: 2.3 → 4.5 → 6.2; also t.1, g.10, v.2. */
export function compareSubtopicId(a: string, b: string): number {
  const pa = a.split(".").map((p) => Number(p) || 0);
  const pb = b.split(".").map((p) => Number(p) || 0);
  const n = Math.max(pa.length, pb.length);
  for (let i = 0; i < n; i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return d;
  }
  return a.localeCompare(b);
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Pick for a custom mock in book/subtopic order:
 * - selected subtopics appear as contiguous blocks;
 * - within each subtopic the pool is shuffled;
 * - if topicCounts is provided, those targets are used (then capped by pool + remainder redistributed);
 * - otherwise equal round-robin allotment.
 */
export function pickRandomFromSubtopics<T extends PoolRow>(
  pool: T[],
  subtopics: string[],
  questionCount: number,
  topicCounts?: Record<string, number>,
): T[] {
  const bySub = new Map<string, T[]>();
  for (const row of pool) {
    const key = subtopics.includes(row.subsection) ? row.subsection : "__mixed__";
    const list = bySub.get(key) ?? [];
    list.push(row);
    bySub.set(key, list);
  }

  for (const [k, list] of bySub) {
    bySub.set(k, shuffle(list));
  }

  const orderedKeys = [
    ...[...new Set(subtopics)].filter((k) => (bySub.get(k)?.length ?? 0) > 0).sort(compareSubtopicId),
    ...(["__mixed__"] as const).filter((k) => (bySub.get(k)?.length ?? 0) > 0),
  ];

  const allot = new Map<string, number>(orderedKeys.map((k) => [k, 0]));

  if (topicCounts && Object.keys(topicCounts).length > 0) {
    let remaining = questionCount;
    for (const k of orderedKeys) {
      if (k === "__mixed__") continue;
      const want = Math.max(0, Math.floor(topicCounts[k] ?? 0));
      const avail = bySub.get(k)?.length ?? 0;
      const take = Math.min(want, avail, remaining);
      allot.set(k, take);
      remaining -= take;
    }
    while (remaining > 0) {
      let progressed = false;
      for (const k of orderedKeys) {
        const used = allot.get(k) ?? 0;
        const avail = bySub.get(k)?.length ?? 0;
        if (used < avail) {
          allot.set(k, used + 1);
          remaining--;
          progressed = true;
          if (remaining === 0) break;
        }
      }
      if (!progressed) break;
    }
  } else {
    let remaining = questionCount;
    while (remaining > 0) {
      let progressed = false;
      for (const k of orderedKeys) {
        const used = allot.get(k) ?? 0;
        const avail = bySub.get(k)?.length ?? 0;
        if (used < avail) {
          allot.set(k, used + 1);
          remaining--;
          progressed = true;
          if (remaining === 0) break;
        }
      }
      if (!progressed) break;
    }
  }

  const picked: T[] = [];
  const seen = new Set<string>();
  for (const k of orderedKeys) {
    const take = allot.get(k) ?? 0;
    let taken = 0;
    for (const row of bySub.get(k) ?? []) {
      if (taken >= take) break;
      if (seen.has(row.id)) continue;
      seen.add(row.id);
      picked.push(row);
      taken++;
    }
  }

  return picked.slice(0, questionCount);
}
