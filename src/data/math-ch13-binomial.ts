/**
 * Chapter 13 — Binomial distribution (subsection 13.5 exam bank plus core cases).
 * Core tasks from math-cases-ch13-binomial.json; exam-style from math-ch13-exam.json.
 */

import type { MathTask } from "@/data/math-chapters";
import ch13 from "@/data/math-cases-ch13-binomial.json";
import ch13Exam from "@/data/math-ch13-exam.json";

export const MATH_CH13_SUBSECTIONS = [
  { id: "13", title: "Binomial distribution" },
  { id: "13.5", title: "Exam-style tasks" },
] as const;

export const MATH_CH13_BINOMIAL: MathTask[] = [
  ...(ch13.tasks as MathTask[]).map((t) => ({
    ...t,
    subsection: t.subsection ?? "13",
    placeholder: false,
  })),
  ...(ch13Exam.tasks as MathTask[]).map((t) => ({
    ...t,
    placeholder: false,
  })),
];
