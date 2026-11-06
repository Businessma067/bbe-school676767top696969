import { describe, expect, test } from "bun:test";
import { buildAdminMockExamStats, scoreBucket } from "../src/lib/admin-mock-stats";
import type { ExamQuestion } from "../src/lib/mock-exams";

const q: ExamQuestion = {
  id: "q1", index: 1, subject: "economics", stem: "S", maxPoints: 2,
  statements: [true, false, false, false, false].map((t, i) => ({ id: `s${i}`, text: `t${i}`, isTrue: t, explanation: "" })),
};

describe("admin mock stats", () => {
  test("buckets 100% into last bucket", () => {
    expect(scoreBucket(100)).toBe(9);
    expect(scoreBucket(45)).toBe(4);
  });
  test("per-question stats and answers from saved marks", () => {
    const s = buildAdminMockExamStats("m", "M", [q], [
      { id: "a", userId: "u", email: "e", completedAt: null, pointsEarned: 2, pointsTotal: 2, secondsTaken: 1, marks: { q1: [true, false, false, false, false] } },
      { id: "b", userId: "u2", email: "f", completedAt: null, pointsEarned: 0, pointsTotal: 2, secondsTaken: 1, marks: null },
    ]);
    expect(s.distribution[9]).toBe(1);
    expect(s.distribution[0]).toBe(1);
    expect(s.detailedCount).toBe(1);
    expect(s.questions[0].fullScoreCount).toBe(1);
    expect(s.questions[0].statements[0].markedCount).toBe(1);
    expect(s.attempts[0].answers?.[0].marked).toBe("A");
    expect(s.attempts[0].marks?.q1?.[0]).toBe(true);
    expect(s.attempts[1].answers).toBeNull();
    expect(s.attempts[1].marks).toBeNull();
  });
});
