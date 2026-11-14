import { describe, expect, test } from "bun:test";
import { getExamById, getWisoExamsForTier } from "../src/lib/mock-exam-catalog";
import { loadExamQuestions } from "../src/lib/mock-exams";

describe("WiSo restored mock exams", () => {
  test("full course lists all seven exams in order", () => {
    expect(getWisoExamsForTier("full").map((exam) => exam.id)).toEqual([
      "wiso-mock-1", "wiso-mock-2", "wiso-mock-3", "wiso-mock-4",
      "wiso-mock-5", "wiso-mock-6", "wiso-mock-7",
    ]);
  });
  for (let n = 2; n <= 7; n += 1) {
    test(`mock ${n} loads its original complete paper`, async () => {
      const id = `wiso-mock-${n}`;
      const questions = await loadExamQuestions(id);
      expect(questions).toHaveLength(34);
      expect(questions.filter((q) => q.subject === "german")).toHaveLength(11);
      expect(questions.some((q) => q.stem.includes("question text will be added"))).toBe(false);
      expect(questions.reduce((sum, q) => sum + q.maxPoints, 0)).toBe(getExamById(id)?.pointsTotal);
    });
  }
});