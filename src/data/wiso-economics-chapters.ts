/**
 * WISO Wirtschaft Full Course banks (Wirtschaft verstehen 2026, chapters 1–4).
 * German true/false cases with teacher explanations for all book subsections.
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
  1: () => import("./wiso-economics-cases-ch1-subtopics.json"),
  2: () => import("./wiso-economics-cases-ch2-subtopics.json"),
  3: () => import("./wiso-economics-cases-ch3-subtopics.json"),
  4: () => import("./wiso-economics-cases-ch4-subtopics.json"),
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
    const sub = a.subsection.localeCompare(b.subsection, "de", { numeric: true });
    if (sub !== 0) return sub;
    return a.sort_order - b.sort_order || a.case_id.localeCompare(b.case_id, "de", { numeric: true });
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
