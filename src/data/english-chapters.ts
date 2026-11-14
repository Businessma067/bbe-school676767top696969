/**
 * English syllabus for Demo / Lite / Full practice pages.
 * Chapters: Texts · Grammar · Vocabulary (WU BBE English sections).
 *
 * Banks load on demand so opening German / hybrid / mocks does not parse
 * the full English corpus. Practice pages load one bank at a time.
 */

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
  /** Shared coaching overview shown with all statement explanations (Math-style). */
  solution_overview?: string;
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

const BANK_LOADERS = {
  texts: () => import("@/data/english/texts.json"),
  grammar: () => import("@/data/english/grammar.json"),
  vocabulary: () => import("@/data/english/vocabulary.json"),
} as const;

type ChapterKey = keyof typeof BANK_LOADERS;

/** Lightweight sidebar meta — no JSON banks. */
export const ENGLISH_CHAPTER_META: ReadonlyArray<{
  key: ChapterKey;
  num: number;
  title: string;
}> = [
  { key: "texts", num: 1, title: "Texts" },
  { key: "grammar", num: 2, title: "Grammar" },
  { key: "vocabulary", num: 3, title: "Vocabulary" },
];

const bankCache = new Map<ChapterKey, { subsections: EnglishSubsection[]; tasks: EnglishTask[] }>();

async function loadBankKey(key: ChapterKey) {
  const hit = bankCache.get(key);
  if (hit) return hit;
  const mod = await BANK_LOADERS[key]();
  const raw = (mod as { default?: BankFile }).default ?? (mod as BankFile);
  const bank = loadBank(raw);
  bankCache.set(key, bank);
  return bank;
}

/**
 * Lite: difficulties 1–3.
 * With 20 tasks/subtopic: sort_order ≤ 12.
 * With 30 tasks/subtopic: sort_order ≤ 18.
 */
export function filterEnglishTasksForTier(
  tasks: EnglishTask[],
  tier: EnglishTasksTier,
  _chapterKey?: EnglishChapter["key"],
): EnglishTask[] {
  if (tier !== "lite") return tasks;
  const maxSort = tasks.some((t) => t.sort_order > 20) ? 18 : 12;
  return tasks.filter((t) => t.sort_order <= maxSort);
}

function chapterFromBank(
  key: ChapterKey,
  bank: { subsections: EnglishSubsection[]; tasks: EnglishTask[] },
  tier: EnglishTasksTier = "full",
): EnglishChapter {
  const meta = ENGLISH_CHAPTER_META.find((m) => m.key === key)!;
  return {
    key: meta.key,
    num: meta.num,
    title: meta.title,
    subsections: bank.subsections,
    tasks: filterEnglishTasksForTier(bank.tasks, tier, key),
  };
}

/** Load a single English bank (texts | grammar | vocabulary). */
export async function loadEnglishChapter(
  key: ChapterKey,
  tier: EnglishTasksTier = "full",
): Promise<EnglishChapter> {
  const bank = await loadBankKey(key);
  return chapterFromBank(key, bank, tier);
}

/** Empty shells for the sidebar before any bank downloads. */
export function englishChapterShells(): EnglishChapter[] {
  return ENGLISH_CHAPTER_META.map((m) => ({
    key: m.key,
    num: m.num,
    title: m.title,
    subsections: [],
    tasks: [],
  }));
}

export async function loadEnglishChapters(): Promise<EnglishChapter[]> {
  const [texts, grammar, vocabulary] = await Promise.all([
    loadBankKey("texts"),
    loadBankKey("grammar"),
    loadBankKey("vocabulary"),
  ]);
  return [
    chapterFromBank("texts", texts),
    chapterFromBank("grammar", grammar),
    chapterFromBank("vocabulary", vocabulary),
  ];
}

export async function loadEnglishChaptersForTier(
  tier: EnglishTasksTier,
): Promise<EnglishChapter[]> {
  const chapters = await loadEnglishChapters();
  return chapters.map((ch) => ({
    ...ch,
    tasks: filterEnglishTasksForTier(ch.tasks, tier, ch.key),
  }));
}

export async function loadAllEnglishTasks(
  tier: EnglishTasksTier = "full",
): Promise<EnglishTask[]> {
  const chapters = await loadEnglishChaptersForTier(tier);
  return chapters.flatMap((ch) => ch.tasks);
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
