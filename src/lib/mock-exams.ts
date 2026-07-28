import { SCORING_CONFIG, type SubjectKey } from "@/config/scoring-config";

export type ProductTier = "full" | "lite";

export interface MockExamSummary {
  id: string;
  title: string;
  questionCount: number;
  durationMinutes: number;
  tier: ProductTier;
}

export interface CompletedExam {
  id: string;
  examId: string;
  title: string;
  completedAt: string; // ISO
  pointsEarned: number;
  pointsTotal: number;
}

export interface ExamStatement {
  id: string;
  text: string;
  isTrue: boolean;
  explanation: string;
}

export interface ExamQuestion {
  id: string;
  index: number; // 1-based
  subject: SubjectKey;
  stem: string;
  maxPoints: number;
  statements: ExamStatement[];
}

/** Available exams. Placeholder content until real questions are added. */
export const MOCK_EXAMS: MockExamSummary[] = [
  { id: "mock-1", title: "Mock Exam 1", questionCount: 34, durationMinutes: 120, tier: "lite" },
  { id: "mock-2", title: "Mock Exam 2", questionCount: 34, durationMinutes: 120, tier: "lite" },
  { id: "mock-3", title: "Mock Exam 3", questionCount: 34, durationMinutes: 120, tier: "full" },
  { id: "mock-4", title: "Mock Exam 4", questionCount: 34, durationMinutes: 120, tier: "full" },
  { id: "mock-5", title: "Mock Exam 5", questionCount: 34, durationMinutes: 120, tier: "full" },
];

export function getExamsForTier(tier: ProductTier): MockExamSummary[] {
  // lite users see the first 2 exams, full users see all 5
  return tier === "full" ? MOCK_EXAMS : MOCK_EXAMS.filter((e) => e.tier === "lite");
}

export function getExamById(id: string): MockExamSummary | undefined {
  return MOCK_EXAMS.find((e) => e.id === id);
}

/** Deterministic pseudo-random generator so mock content is stable per exam. */
function makeRandom(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SECTION_ORDER: { subject: SubjectKey; count: number; points: number }[] = [
  { subject: "economics", count: SCORING_CONFIG.economics.taskCount, points: SCORING_CONFIG.economics.defaultMaxPerTask },
  { subject: "english", count: SCORING_CONFIG.english.taskCount, points: SCORING_CONFIG.english.defaultMaxPerTask },
  { subject: "math", count: SCORING_CONFIG.math.taskCount, points: SCORING_CONFIG.math.defaultMaxPerTask },
];

/**
 * Placeholder question set (34 tasks, 5 statements each).
 * Real content will replace this; the shape stays identical.
 */
export function buildExamQuestions(examId: string): ExamQuestion[] {
  const rand = makeRandom(examId);
  const questions: ExamQuestion[] = [];
  let index = 0;

  for (const section of SECTION_ORDER) {
    for (let i = 0; i < section.count; i++) {
      index += 1;
      const trueCount = 1 + Math.floor(rand() * 4); // 1..4 true statements
      const flags = Array.from({ length: 5 }, (_, s) => s < trueCount).sort(
        () => rand() - 0.5,
      );

      questions.push({
        id: `${examId}-q${index}`,
        index,
        subject: section.subject,
        maxPoints: section.points,
        stem: `Task ${index} · ${section.subject === "economics" ? "Economics" : section.subject === "english" ? "English" : "Math"} — question text will be added here. Decide which of the following statements are true.`,
        statements: Array.from({ length: 5 }, (_, s) => ({
          id: `${examId}-q${index}-s${s + 1}`,
          text: `Statement ${String.fromCharCode(65 + s)} — placeholder statement text for task ${index}.`,
          isTrue: flags[s],
          explanation: flags[s]
            ? "This statement is correct. The detailed explanation will be added with the real exam content."
            : "This statement is incorrect. The detailed explanation will be added with the real exam content.",
        })),
      });
    }
  }

  return questions;
}

export const SECTION_TOTALS: Record<SubjectKey, number> = {
  economics: SCORING_CONFIG.economics.totalPoints,
  math: SCORING_CONFIG.math.totalPoints,
  english: SCORING_CONFIG.english.totalPoints,
};
