/**
 * Economics Full Course banks (chapters 2–6 book subtopics).
 * Loaded on demand so opening practice does not parse every chapter at once.
 * Source of truth for explanations in the app (same pattern as math).
 */

import { economicsDifficultyFor } from "@/data/economics-difficulty-by-case-id";

export type EconomicsTask = {
  id: string;
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  difficulty_level: string;
  sort_order: number;
  /** Book subsection id within a chapter, e.g. "2.1". */
  subsection: string;
};

type RawEconomicsCase = {
  subsection: string;
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  difficulty_level?: string;
  tier?: string;
};

const CHAPTER_LOADERS: Record<number, () => Promise<{ default: RawEconomicsCase[] }>> = {
  2: () => import("./economics-cases-ch2-subtopics.json"),
  3: () => import("./economics-cases-ch3-subtopics.json"),
  4: () => import("./economics-cases-ch4-subtopics.json"),
  5: () => import("./economics-cases-ch5-subtopics.json"),
  6: () => import("./economics-cases-ch6-subtopics.json"),
};

export const ECONOMICS_CHAPTER_NUMS = [2, 3, 4, 5, 6] as const;

function toTask(raw: RawEconomicsCase): EconomicsTask {
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

export async function loadEconomicsChapterTasks(chapter: number): Promise<EconomicsTask[]> {
  const load = CHAPTER_LOADERS[chapter];
  if (!load) return [];
  const mod = await load();
  const rows = Array.isArray(mod.default) ? mod.default : [];
  return sortTasks(rows.map(toTask));
}

export async function loadAllEconomicsChapterTasks(): Promise<
  { num: number; tasks: EconomicsTask[] }[]
> {
  return Promise.all(
    ECONOMICS_CHAPTER_NUMS.map(async (num) => ({
      num,
      tasks: await loadEconomicsChapterTasks(num),
    })),
  );
}
