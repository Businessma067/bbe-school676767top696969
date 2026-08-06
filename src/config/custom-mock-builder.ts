import { CHAPTER_TITLES } from "@/data/textbook-pages";
import { SCORING_CONFIG } from "@/config/scoring-config";

/** Minutes allotted per question for Custom Mock Builder timed mode. */
export const CUSTOM_MOCK_MINUTES_PER_QUESTION = 2;

/** Max questions when chapter 2 or 3 subtopics are selected. */
export const CHAPTER_QUESTION_CAPS: Record<number, number> = {
  2: 50,
  3: 50,
  4: 50,
  5: 100,
  6: 10,
};

export const DEFAULT_QUESTION_CAP = 50;

/** @deprecated Presets removed — use free 1…cap input. */
export const CUSTOM_MOCK_QUESTION_PRESETS = [] as const;
export const CUSTOM_MOCK_QUESTION_COUNTS = [] as const;
export type CustomMockQuestionCount = number;

export type CustomMockSubjectId = "economics" | "math" | "english";

export type CustomMockChapter = {
  num: number;
  title: string;
  /** Whether this chapter has a complete Full Course question bank for generation. */
  enabled: boolean;
};

export type CustomMockSubjectConfig = {
  id: CustomMockSubjectId;
  label: string;
  enabled: boolean;
  accent: string;
  chapters: CustomMockChapter[];
  pointsPerQuestion: number;
};

/**
 * Extensible registry for Custom Mock Builder subjects/chapters.
 * Enable chapters as Full Course banks become complete.
 */
export const CUSTOM_MOCK_SUBJECTS: Record<CustomMockSubjectId, CustomMockSubjectConfig> = {
  economics: {
    id: "economics",
    label: "Economics",
    enabled: true,
    accent: "#E85D3A",
    pointsPerQuestion: SCORING_CONFIG.economics.defaultMaxPerTask,
    chapters: [
      { num: 2, title: CHAPTER_TITLES[2] ?? "Basic economic concepts", enabled: true },
      { num: 3, title: CHAPTER_TITLES[3] ?? "Focus on different types of businesses", enabled: true },
      { num: 4, title: CHAPTER_TITLES[4] ?? "Forms of business ownership and sources of finance", enabled: true },
      { num: 5, title: CHAPTER_TITLES[5] ?? "Marketing", enabled: true },
      { num: 6, title: CHAPTER_TITLES[6] ?? "Accounting", enabled: true },
    ],
  },
  math: {
    id: "math",
    label: "Math",
    enabled: false,
    accent: "#3B82F6",
    pointsPerQuestion: SCORING_CONFIG.math.defaultMaxPerTask,
    chapters: [],
  },
  english: {
    id: "english",
    label: "English",
    enabled: false,
    accent: "#2DD4A8",
    pointsPerQuestion: SCORING_CONFIG.english.defaultMaxPerTask,
    chapters: [],
  },
};

export function getEnabledEconomicsChapters(): CustomMockChapter[] {
  return CUSTOM_MOCK_SUBJECTS.economics.chapters.filter((c) => c.enabled);
}

export function customMockExamId(mockId: string): string {
  return `custom-${mockId}`;
}

export function parseCustomMockId(examId: string): string | null {
  if (!examId.startsWith("custom-")) return null;
  const id = examId.slice("custom-".length);
  return id.length > 0 ? id : null;
}

export function isCustomExamId(examId: string): boolean {
  return parseCustomMockId(examId) !== null;
}

export function durationMinutesForQuestionCount(count: number): number {
  return count * CUSTOM_MOCK_MINUTES_PER_QUESTION;
}

export function durationSecondsForQuestionCount(count: number): number {
  return durationMinutesForQuestionCount(count) * 60;
}

export function pointsTotalForEconomicsQuestions(count: number): number {
  return Number((count * CUSTOM_MOCK_SUBJECTS.economics.pointsPerQuestion).toFixed(2));
}

/** Breadcrumb / list title: `Custom Mock 3.3 10q` or `Custom Mock 2.1+2.2 10q`. */
export function formatCustomMockTitle(
  subtopics: string[],
  questionCount: number,
): string {
  const label =
    [...subtopics]
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .join("+") || "Economics";
  return `Custom Mock ${label} ${questionCount}q`;
}

/** Prefer structured chapters; fall back to parsing legacy DB titles. */
export function displayTitleForCustomMock(row: {
  title: string;
  chapters: string[];
  question_count?: number;
  questionCount?: number;
}): string {
  const count = row.question_count ?? row.questionCount ?? 0;
  if (row.chapters?.length && count > 0) {
    return formatCustomMockTitle(row.chapters, count);
  }
  const legacy = row.title.match(/·\s*([^·]+)\s*·\s*(\d+)\s*Q/i);
  if (legacy) {
    const subs = legacy[1]
      .split(/,\s*/)
      .map((s) => s.trim())
      .filter(Boolean);
    return formatCustomMockTitle(subs, Number(legacy[2]));
  }
  return row.title;
}

/** Highest cap among selected book chapters (e.g. ch2→30, ch3→50). */
export function maxQuestionsForChapters(chapterNums: number[]): number {
  if (chapterNums.length === 0) return DEFAULT_QUESTION_CAP;
  return Math.max(
    ...chapterNums.map((n) => CHAPTER_QUESTION_CAPS[n] ?? DEFAULT_QUESTION_CAP),
  );
}

export function clampQuestionCount(count: number, max: number): number {
  if (!Number.isFinite(count)) return Math.min(10, max);
  return Math.max(1, Math.min(max, Math.floor(count)));
}

/** @deprecated Preset buttons removed from the builder UI. */
export function presetsForMax(_max: number): number[] {
  return [];
}
