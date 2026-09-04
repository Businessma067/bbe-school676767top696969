/**
 * Chapter 7 — Linear and quadratic functions (subsections 7 and 7.5).
 * Core bank: ~25% symbolic + formula / parametric / hybrid stems.
 * 7.5 mixed exam tasks from math-ch7-mixed-exam.json.
 */

import type { MathTask } from "@/data/math-chapters";
import ch7 from "@/data/math-ch7-linear-quadratic.json";
import ch7Exam from "@/data/math-ch7-mixed-exam.json";

export const MATH_CH7_SUBSECTIONS = [
  { id: "7", title: "Linear and quadratic functions" },
  { id: "7.5", title: "Mixed exam" },
] as const;

const MATH_CH7_CORE: MathTask[] = (ch7.tasks as MathTask[]).map((task, i) => ({
  ...task,
  subsection: task.subsection ?? "7",
  sort_order: task.sort_order ?? i + 1,
  placeholder: false,
}));

export const MATH_CH7_LINEAR_QUADRATIC: MathTask[] = [
  ...MATH_CH7_CORE,
  ...(ch7Exam.tasks as MathTask[]),
];
