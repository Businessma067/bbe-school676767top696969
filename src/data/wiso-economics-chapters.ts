/**
 * WISO Wirtschaft Full Course banks (Wirtschaft verstehen 2026, chapters 1–4).
 * Same case shape as BBE economics: 5 true/false statements + teacher explanations.
 */

export type WisoEconomicsTask = {
  id: string;
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  difficulty_level: string;
  sort_order: number;
  subsection: string;
};

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
};

const CHAPTER_LOADERS: Record<number, () => Promise<{ default: RawWisoEconomicsCase[] }>> = {
  1: () => import("./wiso-economics-cases-ch1-subtopics.json"),
  2: () => import("./wiso-economics-cases-ch2-subtopics.json"),
  3: () => import("./wiso-economics-cases-ch3-subtopics.json"),
  4: () => import("./wiso-economics-cases-ch4-subtopics.json"),
};

export const WISO_ECONOMICS_CHAPTER_NUMS = [1, 2, 3, 4] as const;

function toTask(raw: RawWisoEconomicsCase): WisoEconomicsTask {
  const sort = Number(raw.case_id.split(".").pop()) || 0;
  return {
    id: raw.case_id,
    case_id: raw.case_id,
    title: raw.title,
    context: raw.context,
    statements: raw.statements ?? [],
    answer_key: raw.answer_key ?? [],
    tactical_explanations: raw.tactical_explanations ?? [],
    difficulty_level: raw.difficulty_level && raw.difficulty_level !== "—" ? raw.difficulty_level : "3/5",
    sort_order: sort,
    subsection: raw.subsection,
  };
}

function sortTasks(tasks: WisoEconomicsTask[]): WisoEconomicsTask[] {
  return [...tasks].sort((a, b) => {
    const sub = a.subsection.localeCompare(b.subsection, "de", { numeric: true });
    if (sub !== 0) return sub;
    return a.sort_order - b.sort_order || a.case_id.localeCompare(b.case_id, "de", { numeric: true });
  });
}

export async function loadWisoEconomicsChapterTasks(chapter: number): Promise<WisoEconomicsTask[]> {
  const load = CHAPTER_LOADERS[chapter];
  if (!load) return [];
  const mod = await load();
  const rows = Array.isArray(mod.default) ? mod.default : [];
  return sortTasks(rows.map(toTask));
}

export async function loadAllWisoEconomicsChapterTasks(): Promise<
  { num: number; tasks: WisoEconomicsTask[] }[]
> {
  return Promise.all(
    WISO_ECONOMICS_CHAPTER_NUMS.map(async (num) => ({
      num,
      tasks: await loadWisoEconomicsChapterTasks(num),
    })),
  );
}
