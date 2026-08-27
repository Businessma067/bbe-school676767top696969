import { CHAPTER_TITLES } from "@/data/textbook-pages";
import { SCORING_CONFIG } from "@/config/scoring-config";

/** Minutes allotted per question for Custom Mock Builder timed mode. */
export const CUSTOM_MOCK_MINUTES_PER_QUESTION = 2;

/** Hard cap for an entire custom mock (UI + API). */
export const CUSTOM_MOCK_MAX_QUESTIONS = 50;

/** Per-chapter soft caps (never exceed CUSTOM_MOCK_MAX_QUESTIONS for a mock). */
export const CHAPTER_QUESTION_CAPS: Record<number, number> = {
  2: 50,
  3: 50,
  4: 50,
  5: 50,
  6: 50,
};

export const DEFAULT_QUESTION_CAP = CUSTOM_MOCK_MAX_QUESTIONS;

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
    enabled: true,
    accent: "#3B82F6",
    pointsPerQuestion: SCORING_CONFIG.math.defaultMaxPerTask,
    chapters: [],
  },
  english: {
    id: "english",
    label: "English",
    enabled: true,
    accent: "#2DD4A8",
    pointsPerQuestion: SCORING_CONFIG.english.defaultMaxPerTask,
    chapters: [],
  },
};

export function getEnabledCustomMockSubjects(): CustomMockSubjectConfig[] {
  return (Object.keys(CUSTOM_MOCK_SUBJECTS) as CustomMockSubjectId[])
    .map((id) => CUSTOM_MOCK_SUBJECTS[id])
    .filter((s) => s.enabled);
}

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
  return pointsTotalForSubject("economics", count);
}

export function pointsTotalForSubject(subject: CustomMockSubjectId, count: number): number {
  const per = CUSTOM_MOCK_SUBJECTS[subject]?.pointsPerQuestion ?? SCORING_CONFIG.economics.defaultMaxPerTask;
  return Number((count * per).toFixed(2));
}

/** Breadcrumb / list title: `Custom Mock 3.3 10q` or `Custom Mock 2.1+2.2 10q`. */
export function formatCustomMockTitle(
  subtopics: string[],
  questionCount: number,
  subjectLabel = "Economics",
): string {
  const label =
    [...subtopics]
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .join("+") || subjectLabel;
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

/** Cap for the whole mock — always ≤ CUSTOM_MOCK_MAX_QUESTIONS. */
export function maxQuestionsForChapters(chapterNums: number[]): number {
  if (chapterNums.length === 0) return CUSTOM_MOCK_MAX_QUESTIONS;
  const raw = Math.max(
    ...chapterNums.map((n) => CHAPTER_QUESTION_CAPS[n] ?? DEFAULT_QUESTION_CAP),
  );
  return Math.min(raw, CUSTOM_MOCK_MAX_QUESTIONS);
}

export function clampQuestionCount(count: number, max: number): number {
  if (!Number.isFinite(count)) return Math.min(10, max);
  return Math.max(1, Math.min(max, Math.floor(count)));
}

/** @deprecated Preset buttons removed from the builder UI. */
export function presetsForMax(_max: number): number[] {
  return [];
}
