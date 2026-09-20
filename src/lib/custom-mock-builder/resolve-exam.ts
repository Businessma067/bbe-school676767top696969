import {
  isCustomExamId,
  parseCustomMockId,
} from "@/config/custom-mock-builder";
import { isWisoCustomMockDbSubject } from "@/config/wiso-custom-mock-builder";
import {
  cacheCustomMock,
  fetchCustomMockById,
  readCachedCustomMock,
} from "@/lib/custom-mock-builder/client";
import type { CustomMockRow } from "@/lib/custom-mock-builder/types";
import {
  buildExamQuestions,
  getExamById,
  summaryFromCustomMock,
  type ExamQuestion,
  type MockExamSummary,
} from "@/lib/mock-exams";
import { EXAM_SECONDS } from "@/lib/mock-exam-session";

export type ResolvedExam = {
  summary: MockExamSummary;
  questions: ExamQuestion[];
  durationSeconds: number;
  pointsTotal: number;
  isCustom: boolean;
  /** Which product unlocks this exam when tier is full. */
  track: "bbe" | "wiso";
};

async function loadCustomRow(examId: string): Promise<CustomMockRow | null> {
  const id = parseCustomMockId(examId);
  if (!id) return null;
  const cached = readCachedCustomMock(id);
  if (cached?.questions?.length) return cached;
  const row = await fetchCustomMockById(id);
  if (row) cacheCustomMock(row);
  return row;
}

/** Resolve catalog mock or Custom Mock Builder exam for take/review. */
export async function resolveExam(examId: string): Promise<ResolvedExam | null> {
  if (isCustomExamId(examId)) {
    const row = await loadCustomRow(examId);
    if (!row || !row.questions?.length) return null;
    const summary = summaryFromCustomMock(row);
    return {
      summary,
      questions: row.questions,
      durationSeconds: row.duration_minutes * 60,
      pointsTotal: row.points_total,
      isCustom: true,
      track: isWisoCustomMockDbSubject(row.subject) ? "wiso" : "bbe",
    };
  }

  const summary = getExamById(examId);
  if (!summary) return null;
  let questions: ExamQuestion[];
  try {
    questions = buildExamQuestions(examId);
  } catch (err) {
    console.error("[resolveExam] failed to build questions", examId, err);
    return null;
  }
  if (!questions.length) {
    console.error("[resolveExam] empty question set", examId);
    return null;
  }
  const pointsTotal =
    summary.pointsTotal ??
    questions.reduce((sum, q) => sum + q.maxPoints, 0);
  return {
    summary,
    questions,
    durationSeconds: EXAM_SECONDS,
    pointsTotal,
    isCustom: false,
    track: "bbe",
  };
}
