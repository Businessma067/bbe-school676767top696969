/**
 * WiSo Full Course economics banks (Wirtschaft verstehen chapters 1–4).
 * Cases remapped from BBE Fuhrmann banks; German text lives in the JSON banks.
 * Chapter 2 holds WiSo-native German cases (Wirtschaft verstehen); ch.4 empty until authored.
 */

import { economicsDifficultyFor } from "@/data/economics-difficulty-by-case-id";
import type { EconomicsTask } from "@/data/economics-chapters";

type RawWisoEconomicsCase = {
  subsection: string;
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  difficulty_level?: string;
  tier?: string;
  source_bbe_subsection?: string;
  source_bbe_case_id?: string;
};

const CHAPTER_LOADERS: Record<number, () => Promise<{ default: RawWisoEconomicsCase[] }>> = {
  1: () => import("./wiso/economics-cases-ch1.json"),
  2: () => import("./wiso/economics-cases-ch2.json"),
  3: () => import("./wiso/economics-cases-ch3.json"),
  4: () => import("./wiso/economics-cases-ch4.json"),
};

export const WISO_ECONOMICS_CHAPTER_NUMS = [1, 2, 3, 4] as const;

function toTask(raw: RawWisoEconomicsCase): EconomicsTask {
  const sort = Number(raw.case_id.split(".").pop()) || 0;
  return {
    id: raw.case_id,
    case_id: raw.case_id,
    title: raw.title,
    context: raw.context,
    statements: raw.statements ?? [],
    answer_key: raw.answer_key ?? [],
    tactical_explanations: raw.tactical_explanations ?? [],
    difficulty_level: economicsDifficultyFor(raw.case_id, raw.difficulty_level),
    sort_order: sort,
    subsection: raw.subsection,
  };
}

function sortTasks(tasks: EconomicsTask[]): EconomicsTask[] {
  return [...tasks].sort((a, b) => {
    const sub = a.subsection.localeCompare(b.subsection, "en", { numeric: true });
    if (sub !== 0) return sub;
    return a.sort_order - b.sort_order || a.case_id.localeCompare(b.case_id, "en", { numeric: true });
  });
}

export async function loadWisoEconomicsChapterTasks(chapter: number): Promise<EconomicsTask[]> {
  const load = CHAPTER_LOADERS[chapter];
  if (!load) return [];
  const mod = await load();
  const rows = Array.isArray(mod.default) ? mod.default : [];
  return sortTasks(rows.map(toTask));
}

export async function loadAllWisoEconomicsChapterTasks(): Promise<
  { num: number; tasks: EconomicsTask[] }[]
> {
  return Promise.all(
    WISO_ECONOMICS_CHAPTER_NUMS.map(async (num) => ({
      num,
      tasks: await loadWisoEconomicsChapterTasks(num),
    })),
  );
}
