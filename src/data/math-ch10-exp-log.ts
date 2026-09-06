/**
 * Chapter 10 — Exponential and logarithmic functions.
 * 10.1 Exponential (50), 10.2 Logarithmic (55), 10.3 Mixed exam (32).
 * Tasks loaded from math-ch10-exp-log.json (generated bank).
 */
import type { MathTask } from "@/data/math-chapters";
import ch10 from "@/data/math-ch10-exp-log.json";

export const MATH_CH10_SUBSECTIONS = [
  { id: "10.1", title: "Exponential functions" },
  { id: "10.2", title: "Logarithmic functions" },
  { id: "10.3", title: "Exam-Style" },
] as const;

export const MATH_CH10_EXP_LOG: MathTask[] = (ch10.tasks as MathTask[]).map((t, i) => ({
  ...t,
  subsection: t.subsection ?? (i < 50 ? "10.1" : i < 105 ? "10.2" : "10.3"),
  sort_order: t.sort_order ?? i + 1,
  placeholder: false,
}));
