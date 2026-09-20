/**
 * WiSo demo math: same free-window sizes as BBE demo, but on the *next* block
 * of each chapter’s first subsection (so demo questions don’t overlap BBE).
 *
 * Chapters 1–6: swap first 10 ↔ next 10 of the first subtopic, unlock those 10.
 * Chapters 7–8: swap first 5 ↔ next 5 of the first subtopic, unlock those 5.
 * Chapters 9–13: unchanged / fully locked (same as BBE demo).
 */

import {
  DEMO_MATH_SUBSECTION_FREE,
  type MathTask,
} from "@/data/math-chapters";

function demoSwapCount(chapter: number): number {
  const subLimits = DEMO_MATH_SUBSECTION_FREE[chapter];
  if (!subLimits) return 0;
  const values = Object.values(subLimits);
  return values[0] ?? 0;
}

function demoSwapSubsection(chapter: number): string | null {
  const subLimits = DEMO_MATH_SUBSECTION_FREE[chapter];
  if (!subLimits) return null;
  const keys = Object.keys(subLimits);
  return keys[0] ?? null;
}

/**
 * Within the chapter’s first demo subsection, swap the free block with the
 * following block of equal size so BBE’s “first N” unlock covers the next N.
 */
export function swapWisoDemoMathBlocks(chapter: number, tasks: MathTask[]): MathTask[] {
  const count = demoSwapCount(chapter);
  const subsection = demoSwapSubsection(chapter);
  if (count <= 0 || !subsection) return tasks;

  const indices: number[] = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i]?.subsection === subsection) indices.push(i);
  }
  if (indices.length < count * 2) return tasks;

  const result = tasks.slice();
  for (let k = 0; k < count; k++) {
    const a = indices[k]!;
    const b = indices[count + k]!;
    const tmp = result[a]!;
    result[a] = result[b]!;
    result[b] = tmp;
  }
  return result;
}
