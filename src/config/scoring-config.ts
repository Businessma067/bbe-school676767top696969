/**
 * BBE written-exam point allocation (most recent exam / BBE School practice scoring).
 * Economics is uniform; Mathematics uses published per-task maxima; English varies by question type.
 */

export const MATH_POINTS_PER_TASK = [4, 5, 4, 5, 7, 4, 3, 6, 4, 5, 5, 7, 5, 5] as const;

/** English maxima by question type (texts / grammar / vocabulary). */
export const ENGLISH_POINTS_BY_TYPE = {
  text: 4,
  grammar: 3,
  vocabulary: 2,
} as const;

/**
 * Practice mix for English mocks so section totals match the exam total.
 * 3 text + 3 grammar + 5 vocabulary = 11 tasks · 31 points.
 */
export const ENGLISH_POINTS_PER_TASK = [
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.text,
  ENGLISH_POINTS_BY_TYPE.grammar,
  ENGLISH_POINTS_BY_TYPE.grammar,
  ENGLISH_POINTS_BY_TYPE.grammar,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
  ENGLISH_POINTS_BY_TYPE.vocabulary,
] as const;

const mathTotal = MATH_POINTS_PER_TASK.reduce((a, b) => a + b, 0);
const englishTotal = ENGLISH_POINTS_PER_TASK.reduce((a, b) => a + b, 0);

export const SCORING_CONFIG = {
  economics: { taskCount: 10, totalPoints: 60, defaultMaxPerTask: 6 },
  math: {
    taskCount: MATH_POINTS_PER_TASK.length,
    totalPoints: mathTotal,
    /** Representative max used in worked scoring examples and custom mocks. */
    defaultMaxPerTask: 5,
    pointsPerTask: MATH_POINTS_PER_TASK,
  },
  english: {
    taskCount: ENGLISH_POINTS_PER_TASK.length,
    totalPoints: englishTotal,
    /** Approximate average; prefer pointsByType / pointsPerTask when known. */
    defaultMaxPerTask: 2.8,
    pointsByType: ENGLISH_POINTS_BY_TYPE,
    pointsPerTask: ENGLISH_POINTS_PER_TASK,
  },
  /** BBE written exam total (Economics 60 + Mathematics 69 + English 31). */
  examTotalPoints: 60 + mathTotal + englishTotal,
  /** WiSo written exam total from the same cycle (for comparison). */
  wisoExamTotalPoints: 165,
} as const;

export type SubjectKey = "economics" | "math" | "english";

export const SUBJECT_META: Record<
  SubjectKey,
  { label: string; color: string; badgeClass: string }
> = {
  economics: {
    label: "Economics",
    color: "#E85D3A",
    badgeClass: "bg-[#E85D3A]/10 text-[#E85D3A] border-[#E85D3A]/30",
  },
  english: {
    label: "English",
    color: "#2DD4A8",
    badgeClass: "bg-[#2DD4A8]/10 text-[#0F9B7C] border-[#2DD4A8]/40",
  },
  math: {
    label: "Math",
    color: "#3B82F6",
    badgeClass: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30",
  },
};

/** Per-task maxima for a subject (Economics is uniform; Math/English vary). */
export function pointsSequenceForSubject(subject: SubjectKey): readonly number[] {
  if (subject === "economics") {
    return Array.from({ length: SCORING_CONFIG.economics.taskCount }, () =>
      SCORING_CONFIG.economics.defaultMaxPerTask,
    );
  }
  if (subject === "math") return SCORING_CONFIG.math.pointsPerTask;
  return SCORING_CONFIG.english.pointsPerTask;
}
