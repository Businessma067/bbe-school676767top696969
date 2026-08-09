/**
 * English syllabus for Demo / Lite / Full practice pages.
 * Chapters: Texts · Grammar · Vocabulary (WU BBE English sections).
 */

import grammarBank from "@/data/english/grammar.json";
import textsBank from "@/data/english/texts.json";
import vocabularyBank from "@/data/english/vocabulary.json";

export type EnglishTaskKind = "reading" | "grammar" | "vocabulary";

export type EnglishTask = {
  id: string;
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
  highlights: string[];
  difficulty_level: string;
  sort_order: number;
  subsection: string;
  /** Reading passage for Texts chapter tasks (copied from subsection). */
  passage?: string;
  exam_title?: string;
  kind?: EnglishTaskKind;
};

export type EnglishSubsection = {
  id: string;
  title: string;
  passage?: string;
  paragraph_count?: number;
};

export type EnglishChapter = {
  key: "texts" | "grammar" | "vocabulary";
  num: number;
  title: string;
  subsections: EnglishSubsection[];
  tasks: EnglishTask[];
};

export type EnglishTasksTier = "demo" | "lite" | "full";

/** How many free (unlocked) tasks per chapter in the Demo tier. */
export const DEMO_ENGLISH_FREE_LIMIT = 2;

type BankFile = {
  subsections: EnglishSubsection[];
  tasks: Array<EnglishTask & { exam_title?: string; kind?: EnglishTaskKind }>;
};

function normalizeTask(t: EnglishTask, passageBySub: Map<string, string>): EnglishTask {
  const passage = t.passage ?? passageBySub.get(t.subsection);
  return {
    ...t,
    tactical_explanations: t.tactical_explanations ?? [],
    highlights: t.highlights ?? [],
    passage,
    kind: t.kind ?? (passage ? "reading" : undefined),
  };
}

function loadBank(raw: BankFile): { subsections: EnglishSubsection[]; tasks: EnglishTask[] } {
  const subsections = raw.subsections ?? [];
  const passageBySub = new Map(
    subsections.filter((s) => !!s.passage).map((s) => [s.id, s.passage as string]),
  );
  return {
    subsections,
    tasks: (raw.tasks ?? []).map((t) => normalizeTask(t, passageBySub)),
  };
}

const texts = loadBank(textsBank as BankFile);
const grammar = loadBank(grammarBank as BankFile);
const vocabulary = loadBank(vocabularyBank as BankFile);

/**
 * Lite: difficulties 1–3 → sort_order ≤ 18 for every chapter.
 */
export function filterEnglishTasksForTier(
  tasks: EnglishTask[],
  tier: EnglishTasksTier,
  _chapterKey?: EnglishChapter["key"],
): EnglishTask[] {
  if (tier !== "lite") return tasks;
  return tasks.filter((t) => t.sort_order <= 18);
}

export const ENGLISH_CHAPTERS: EnglishChapter[] = [
  {
    key: "texts",
    num: 1,
    title: "Texts",
    subsections: texts.subsections,
    tasks: texts.tasks,
  },
  {
    key: "grammar",
    num: 2,
    title: "Grammar",
    subsections: grammar.subsections,
    tasks: grammar.tasks,
  },
  {
    key: "vocabulary",
    num: 3,
    title: "Vocabulary",
    subsections: vocabulary.subsections,
    tasks: vocabulary.tasks,
  },
];

export function englishChaptersForTier(tier: EnglishTasksTier): EnglishChapter[] {
  return ENGLISH_CHAPTERS.map((ch) => ({
    ...ch,
    tasks: filterEnglishTasksForTier(ch.tasks, tier, ch.key),
  }));
}

export function allEnglishTasks(tier: EnglishTasksTier = "full"): EnglishTask[] {
  return englishChaptersForTier(tier).flatMap((ch) => ch.tasks);
}

export function passageForTask(task: EnglishTask | undefined, chapters: EnglishChapter[]): string {
  if (!task) return "";
  if (task.passage) return task.passage;
  for (const ch of chapters) {
    const sub = ch.subsections.find((s) => s.id === task.subsection);
    if (sub?.passage) return sub.passage;
  }
  return "";
}
