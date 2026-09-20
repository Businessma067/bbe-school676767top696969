/**
 * Prebuilt English overlays for WiSo economics (Wirtschaft verstehen).
 * Same pattern as WiSo math DE overlays — lang toggle swaps fields instantly,
 * no live LLM round-trip when an overlay exists for the case_id.
 */

export type WisoEconomicsEnOverlay = {
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  tactical_explanations: string[];
};

const EN_LOADERS: Record<number, () => Promise<{ default: WisoEconomicsEnOverlay[] }>> = {
  1: () => import("./wiso-economics-cases-ch1-en-subtopics.json"),
  2: () => import("./wiso-economics-cases-ch2-en-subtopics.json"),
  3: () => import("./wiso-economics-cases-ch3-en-subtopics.json"),
  4: () => import("./wiso-economics-cases-ch4-en-subtopics.json"),
};

const chapterCache = new Map<number, Map<string, WisoEconomicsEnOverlay>>();
let allCache: Map<string, WisoEconomicsEnOverlay> | null = null;

function rowsToMap(rows: WisoEconomicsEnOverlay[]): Map<string, WisoEconomicsEnOverlay> {
  const map = new Map<string, WisoEconomicsEnOverlay>();
  for (const row of rows) {
    if (row?.case_id) map.set(row.case_id, row);
  }
  return map;
}

export async function loadWisoEconomicsEnChapterOverlay(
  chapter: number,
): Promise<Map<string, WisoEconomicsEnOverlay>> {
  if (chapterCache.has(chapter)) return chapterCache.get(chapter)!;
  const load = EN_LOADERS[chapter];
  if (!load) {
    const empty = new Map<string, WisoEconomicsEnOverlay>();
    chapterCache.set(chapter, empty);
    return empty;
  }
  try {
    const mod = await load();
    const map = rowsToMap(Array.isArray(mod.default) ? mod.default : []);
    chapterCache.set(chapter, map);
    return map;
  } catch {
    const empty = new Map<string, WisoEconomicsEnOverlay>();
    chapterCache.set(chapter, empty);
    return empty;
  }
}

/** Load all chapter EN overlays once (Full Course / demo). */
export async function loadAllWisoEconomicsEnOverlays(): Promise<
  Map<string, WisoEconomicsEnOverlay>
> {
  if (allCache) return allCache;
  const maps = await Promise.all(
    Object.keys(EN_LOADERS).map((k) => loadWisoEconomicsEnChapterOverlay(Number(k))),
  );
  const merged = new Map<string, WisoEconomicsEnOverlay>();
  for (const m of maps) {
    for (const [id, row] of m) merged.set(id, row);
  }
  allCache = merged;
  return merged;
}

export function applyWisoEconomicsEnOverlay<
  T extends {
    case_id?: string;
    id?: string;
    title: string;
    context: string;
    statements: string[];
    tactical_explanations: string[];
  },
>(task: T, overlay: WisoEconomicsEnOverlay | undefined): T {
  if (!overlay) return task;
  return {
    ...task,
    title: overlay.title || task.title,
    context: overlay.context || task.context,
    statements: overlay.statements?.length ? overlay.statements : task.statements,
    tactical_explanations: overlay.tactical_explanations?.length
      ? overlay.tactical_explanations
      : task.tactical_explanations,
  };
}
