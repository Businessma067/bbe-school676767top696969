import {
  SCORING_CONFIG,
  pointsSequenceForSubject,
  type SubjectKey,
} from "@/config/scoring-config";
import {
  displayTitleForCustomMock,
  isCustomExamId,
  parseCustomMockId,
} from "@/config/custom-mock-builder";
import type { CustomMockRow } from "@/lib/custom-mock-builder/types";
import {
  MOCK_EXAM_1_CONTENT_REV,
  MOCK_EXAM_1_POINTS_TOTAL,
  MOCK_EXAM_1_QUESTION_COUNT,
  buildMockExam1Questions,
} from "@/lib/mock-exam-1-content";
import {
  MOCK_EXAM_2_CONTENT_REV,
  MOCK_EXAM_2_POINTS_TOTAL,
  MOCK_EXAM_2_QUESTION_COUNT,
  buildMockExam2Questions,
} from "@/lib/mock-exam-2-content";
import {
  MOCK_EXAM_3_CONTENT_REV,
  MOCK_EXAM_3_POINTS_TOTAL,
  MOCK_EXAM_3_QUESTION_COUNT,
  buildMockExam3Questions,
} from "@/lib/mock-exam-3-content";
import {
  MOCK_EXAM_4_CONTENT_REV,
  MOCK_EXAM_4_POINTS_TOTAL,
  MOCK_EXAM_4_QUESTION_COUNT,
  buildMockExam4Questions,
} from "@/lib/mock-exam-4-content";
import {
  MOCK_EXAM_5_CONTENT_REV,
  MOCK_EXAM_5_POINTS_TOTAL,
  MOCK_EXAM_5_QUESTION_COUNT,
  buildMockExam5Questions,
} from "@/lib/mock-exam-5-content";

export type ProductTier = "full" | "lite";

export interface MockExamSummary {
  id: string;
  title: string;
  questionCount: number;
  durationMinutes: number;
  tier: ProductTier;
  /** Present for Custom Mock Builder exams — used for progress sync only. */
  pointsTotal?: number;
  /** Optional content stamp (Mock 1) to verify Lovable/Git sync. */
  contentRev?: string;
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
  /** Custom mocks: light gray label like "#2.3 - Different economic systems". */
  subtopicTag?: string;
  /** English Texts: full reading passage shown above the stem. */
  passage?: string;
  /** Math: optional stem graphic. */
  figure?: string;
  /** Math: markdown pipe-tables shown under the stem. */
  tablesMarkdown?: string;
  /** Shared worked solution shown with statement explanations on review. */
  solutionOverview?: string;
}

/** Available exams. Mocks 1–5 use curated banks; Custom Mock Builder exams are separate. */
export const MOCK_EXAMS: MockExamSummary[] = [
  {
    id: "mock-1",
    title: "Mock Exam 1",
    questionCount: MOCK_EXAM_1_QUESTION_COUNT,
    durationMinutes: 120,
    tier: "lite",
    pointsTotal: MOCK_EXAM_1_POINTS_TOTAL,
    contentRev: MOCK_EXAM_1_CONTENT_REV,
  },
  {
    id: "mock-2",
    title: "Mock Exam 2",
    questionCount: MOCK_EXAM_2_QUESTION_COUNT,
    durationMinutes: 120,
    tier: "lite",
    pointsTotal: MOCK_EXAM_2_POINTS_TOTAL,
    contentRev: MOCK_EXAM_2_CONTENT_REV,
  },
  {
    id: "mock-3",
    title: "Mock Exam 3",
    questionCount: MOCK_EXAM_3_QUESTION_COUNT,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: MOCK_EXAM_3_POINTS_TOTAL,
    contentRev: MOCK_EXAM_3_CONTENT_REV,
  },
  {
    id: "mock-4",
    title: "Mock Exam 4",
    questionCount: MOCK_EXAM_4_QUESTION_COUNT,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: MOCK_EXAM_4_POINTS_TOTAL,
    contentRev: MOCK_EXAM_4_CONTENT_REV,
  },
  {
    id: "mock-5",
    title: "Mock Exam 5",
    questionCount: MOCK_EXAM_5_QUESTION_COUNT,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: MOCK_EXAM_5_POINTS_TOTAL,
    contentRev: MOCK_EXAM_5_CONTENT_REV,
  },
];

export function getExamsForTier(tier: ProductTier): MockExamSummary[] {
  // lite users see the first 2 exams, full users see all 5
  return tier === "full" ? MOCK_EXAMS : MOCK_EXAMS.filter((e) => e.tier === "lite");
}

export function getExamById(id: string): MockExamSummary | undefined {
  return MOCK_EXAMS.find((e) => e.id === id);
}

export function summaryFromCustomMock(row: CustomMockRow): MockExamSummary {
  return {
    id: `custom-${row.id}`,
    title: displayTitleForCustomMock(row),
    questionCount: row.question_count,
    durationMinutes: row.duration_minutes,
    tier: "full",
    pointsTotal: row.points_total,
  };
}

export { isCustomExamId, parseCustomMockId };

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

const SECTION_ORDER: SubjectKey[] = ["economics", "english", "math"];

/**
 * Exam question set. Mocks 1–5 are curated real content; unknown ids stay
 * placeholders until their banks are authored (same ExamQuestion shape either way).
 */
export function buildExamQuestions(examId: string): ExamQuestion[] {
  if (examId === "mock-1") {
    return buildMockExam1Questions(examId);
  }
  if (examId === "mock-2") {
    return buildMockExam2Questions(examId);
  }
  if (examId === "mock-3") {
    return buildMockExam3Questions(examId);
  }
  if (examId === "mock-4") {
    return buildMockExam4Questions(examId);
  }
  if (examId === "mock-5") {
    return buildMockExam5Questions(examId);
  }

  const rand = makeRandom(examId);
  const questions: ExamQuestion[] = [];
  let index = 0;

  for (const subject of SECTION_ORDER) {
    const points = pointsSequenceForSubject(subject);
    for (let i = 0; i < points.length; i++) {
      index += 1;
      const trueCount = 1 + Math.floor(rand() * 4); // 1..4 true statements
      const flags = Array.from({ length: 5 }, (_, s) => s < trueCount).sort(
        () => rand() - 0.5,
      );

      questions.push({
        id: `${examId}-q${index}`,
        index,
        subject,
        maxPoints: points[i]!,
        stem: `Task ${index} · ${subject === "economics" ? "Economics" : subject === "english" ? "English" : "Math"} — question text will be added here. Decide which of the following statements are true.`,
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
