import type { ExamQuestion } from "@/lib/mock-exams";
import { calculateTaskScore } from "@/lib/scoring";
import type { AdminJsonValue } from "@/lib/admin-types";

export type AdminMockAttemptInput = {
  id: string;
  userId: string;
  email: string;
  completedAt: string | null;
  pointsEarned: number;
  pointsTotal: number;
  secondsTaken: number | null;
  marks: Record<string, boolean[]> | null;
  timed?: boolean;
  storedAnswers?: AdminJsonValue | null;
};

export type AdminMockStatementStat = {
  letter: string;
  text: string;
  isTrue: boolean;
  markedCount: number;
  /** % of detailed attempts that judged this statement correctly (ticked true / left false). */
  correctPct: number;
};

export type AdminMockQuestionStat = {
  id: string;
  index: number;
  subject: string;
  stem: string;
  maxPoints: number;
  attempts: number;
  avgScore: number;
  avgPct: number;
  fullScoreCount: number;
  zeroScoreCount: number;
  statements: AdminMockStatementStat[];
};

export type AdminMockAttemptAnswer = {
  questionIndex: number;
  marked: string; // e.g. "AC"
  correct: string; // e.g. "ACD"
  score: number;
  maxPoints: number;
};

export type AdminMockAttemptRow = {
  id: string;
  userId: string;
  email: string;
  completedAt: string | null;
  pointsEarned: number;
  pointsTotal: number;
  pct: number;
  secondsTaken: number | null;
  answers: AdminMockAttemptAnswer[] | null;
  /** Raw statement marks when stored — used for full student-style review. */
  marks: Record<string, boolean[]> | null;
  timed: boolean;
  storedAnswers: AdminJsonValue | null;
};

export type AdminMockExamStats = {
  examId: string;
  title: string;
  attemptCount: number;
  detailedCount: number;
  avgPct: number;
  /** 10 buckets: 0–9%, 10–19% … 90–100%. */
  distribution: number[];
  questions: AdminMockQuestionStat[];
  attempts: AdminMockAttemptRow[];
  paperAvailable: boolean;
};

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const round1 = (n: number) => Math.round(n * 10) / 10;
const round2 = (n: number) => Math.round(n * 100) / 100;

export function scoreBucket(pct: number): number {
  return Math.min(9, Math.max(0, Math.floor(pct / 10)));
}

export function buildAdminMockExamStats(
  examId: string,
  title: string,
  questions: ExamQuestion[],
  attempts: AdminMockAttemptInput[],
): AdminMockExamStats {
  const distribution = new Array(10).fill(0) as number[];
  let pctSum = 0;
  const qAgg = questions.map((q) => ({
    q,
    attempts: 0,
    scoreSum: 0,
    full: 0,
    zero: 0,
    marked: q.statements.map(() => 0),
    judgedOk: q.statements.map(() => 0),
  }));

  const rows: AdminMockAttemptRow[] = attempts.map((a) => {
    const pct = a.pointsTotal > 0 ? (a.pointsEarned / a.pointsTotal) * 100 : 0;
    distribution[scoreBucket(pct)] += 1;
    pctSum += pct;
    let answers: AdminMockAttemptAnswer[] | null = null;
    if (a.marks && questions.length > 0) {
      answers = qAgg.map((agg) => {
        const ticks = a.marks?.[agg.q.id] ?? [];
        const results = agg.q.statements.map((s, i) => ({ isTrue: s.isTrue, userMarked: ticks[i] === true }));
        const score = calculateTaskScore(agg.q.maxPoints, results);
        agg.attempts += 1;
        agg.scoreSum += score;
        if (score >= agg.q.maxPoints - 1e-9) agg.full += 1;
        if (score <= 1e-9) agg.zero += 1;
        results.forEach((r, i) => {
          if (r.userMarked) agg.marked[i] += 1;
          if (r.userMarked === r.isTrue) agg.judgedOk[i] += 1;
        });
        return {
          questionIndex: agg.q.index,
          marked: results.map((r, i) => (r.userMarked ? LETTERS[i] : "")).join(""),
          correct: results.map((r, i) => (r.isTrue ? LETTERS[i] : "")).join(""),
          score: round2(score),
          maxPoints: agg.q.maxPoints,
        };
      });
    }
    return {
      id: a.id,
      userId: a.userId,
      email: a.email,
      completedAt: a.completedAt,
      pointsEarned: round2(a.pointsEarned),
      pointsTotal: a.pointsTotal,
      pct: round1(pct),
      secondsTaken: a.secondsTaken,
      answers,
      marks: a.marks,
      timed: a.timed ?? false,
      storedAnswers: a.storedAnswers ?? null,
    };
  });

  const detailedCount = rows.filter((r) => r.answers).length;
  return {
    examId,
    paperAvailable: questions.length > 0,
    title,
    attemptCount: attempts.length,
    detailedCount,
    avgPct: attempts.length ? round1(pctSum / attempts.length) : 0,
    distribution,
    questions: qAgg.map((agg) => ({
      id: agg.q.id,
      index: agg.q.index,
      subject: agg.q.subject,
      stem: agg.q.stem,
      maxPoints: agg.q.maxPoints,
      attempts: agg.attempts,
      avgScore: agg.attempts ? round2(agg.scoreSum / agg.attempts) : 0,
      avgPct: agg.attempts && agg.q.maxPoints ? round1((agg.scoreSum / agg.attempts / agg.q.maxPoints) * 100) : 0,
      fullScoreCount: agg.full,
      zeroScoreCount: agg.zero,
      statements: agg.q.statements.map((s, i) => ({
        letter: LETTERS[i] ?? String(i + 1),
        text: s.text,
        isTrue: s.isTrue,
        markedCount: agg.marked[i],
        correctPct: agg.attempts ? round1((agg.judgedOk[i] / agg.attempts) * 100) : 0,
      })),
    })),
    attempts: rows,
  };
}
