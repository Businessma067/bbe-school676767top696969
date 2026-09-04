/**
 * Chapter 9 — Polynomial functions (subsections 9 and 9.5).
 * Core bank: ~25% symbolic + formula / applied / table / graph / parametric.
 * 9.5 mixed exam tasks from math-ch9-mixed-exam.json.
 */

import type { MathTask } from "@/data/math-chapters";
import ch9 from "@/data/math-ch9-polynomials.json";
import ch9Exam from "@/data/math-ch9-mixed-exam.json";

export const MATH_CH9_SUBSECTIONS = [
  { id: "9", title: "Polynomial functions" },
  { id: "9.5", title: "Mixed exam" },
] as const;

const MATH_CH9_CORE: MathTask[] = (ch9.tasks as MathTask[]).map((task, i) => ({
  ...task,
  subsection: task.subsection ?? "9",
  sort_order: task.sort_order ?? i + 1,
  placeholder: false,
}));

export const MATH_CH9_POLYNOMIALS: MathTask[] = [
  ...MATH_CH9_CORE,
  ...(ch9Exam.tasks as MathTask[]),
];
