/**
 * WiSo Custom Mock Builder — Wirtschaft / Mathematik.
 * Reuses shared caps and duration helpers from the BBE builder config.
 */

import {
  CHAPTER_QUESTION_CAPS,
  CUSTOM_MOCK_MAX_QUESTIONS,
  CUSTOM_MOCK_MINUTES_PER_QUESTION,
  DEFAULT_QUESTION_CAP,
  clampQuestionCount,
  customMockExamId,
  durationMinutesForQuestionCount,
  durationSecondsForQuestionCount,
  formatCustomMockTitle,
  isCustomExamId,
  maxQuestionsForChapters,
  parseCustomMockId,
} from "@/config/custom-mock-builder";
import { SCORING_CONFIG } from "@/config/scoring-config";

export type WisoCustomMockSubjectId = "economics" | "math";

/** DB `custom_mocks.subject` values — keep WiSo history separate from BBE. */
export type WisoCustomMockDbSubject = "wiso-economics" | "wiso-math" | "wiso-german";

export type WisoCustomMockChapter = {
  num: number;
  title: string;
  enabled: boolean;
};

export type WisoCustomMockSubjectConfig = {
  id: WisoCustomMockSubjectId;
  label: string;
  enabled: boolean;
  accent: string;
  chapters: WisoCustomMockChapter[];
  pointsPerQuestion: number;
  dbSubject: Exclude<WisoCustomMockDbSubject, "wiso-german">;
};

export const WISO_CUSTOM_MOCK_SUBJECTS: Record<
  WisoCustomMockSubjectId,
  WisoCustomMockSubjectConfig
> = {
  economics: {
    id: "economics",
    label: "Wirtschaft",
    enabled: true,
    accent: "#E85D3A",
    pointsPerQuestion: SCORING_CONFIG.economics.defaultMaxPerTask,
    dbSubject: "wiso-economics",
    chapters: [],
  },
  math: {
    id: "math",
    label: "Mathematik",
    enabled: true,
    accent: "#3B82F6",
    pointsPerQuestion: SCORING_CONFIG.math.defaultMaxPerTask,
    dbSubject: "wiso-math",
    chapters: [],
  },
};

/** Includes legacy `wiso-german` so old rows still resolve/filter correctly. */
export const WISO_CUSTOM_MOCK_DB_SUBJECTS: WisoCustomMockDbSubject[] = [
  "wiso-economics",
  "wiso-math",
  "wiso-german",
];

export function getEnabledWisoCustomMockSubjects(): WisoCustomMockSubjectConfig[] {
  return (Object.keys(WISO_CUSTOM_MOCK_SUBJECTS) as WisoCustomMockSubjectId[])
    .map((id) => WISO_CUSTOM_MOCK_SUBJECTS[id])
    .filter((s) => s.enabled);
}

export function isWisoCustomMockDbSubject(subject: string): subject is WisoCustomMockDbSubject {
  return (WISO_CUSTOM_MOCK_DB_SUBJECTS as string[]).includes(subject);
}

export function wisoSubjectFromDb(subject: string): WisoCustomMockSubjectId | null {
  if (subject === "wiso-economics") return "economics";
  if (subject === "wiso-math") return "math";
  return null;
}

export function dbSubjectForWiso(subject: WisoCustomMockSubjectId): WisoCustomMockDbSubject {
  return WISO_CUSTOM_MOCK_SUBJECTS[subject].dbSubject;
}

export function pointsTotalForWisoSubject(
  subject: WisoCustomMockSubjectId,
  count: number,
): number {
  const per = WISO_CUSTOM_MOCK_SUBJECTS[subject].pointsPerQuestion;
  return Number((count * per).toFixed(2));
}

export function maxQuestionsForWisoChapters(chapterNums: number[]): number {
  if (chapterNums.length === 0) return CUSTOM_MOCK_MAX_QUESTIONS;
  const raw = Math.max(
    ...chapterNums.map((n) => CHAPTER_QUESTION_CAPS[n] ?? DEFAULT_QUESTION_CAP),
  );
  return Math.min(raw, CUSTOM_MOCK_MAX_QUESTIONS);
}

export {
  CUSTOM_MOCK_MAX_QUESTIONS,
  CUSTOM_MOCK_MINUTES_PER_QUESTION,
  clampQuestionCount,
  customMockExamId,
  durationMinutesForQuestionCount,
  durationSecondsForQuestionCount,
  formatCustomMockTitle,
  isCustomExamId,
  maxQuestionsForChapters,
  parseCustomMockId,
};
