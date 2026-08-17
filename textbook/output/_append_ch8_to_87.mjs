/**
 * Append new Chapter 8 batches to the existing 50-task bank.
 * Keeps the original single-list order and mixed difficulty sequence.
 */
import fs from "node:fs";
import { MATH_CH8_POWER_FUNCTIONS as base } from "../../src/data/math-ch8-power-functions.ts";

const { BATCH: B51 } = await import("./_ch8_add_51_60.mjs");
const { BATCH: B61 } = await import("./_ch8_add_61_69.mjs");
const { BATCH: B70 } = await import("./_ch8_add_70_78.mjs");
const { BATCH: B79 } = await import("./_ch8_add_79_87.mjs");

// Idempotent: if src already has 51–87, keep only the original bank as base.
const original = base.slice(0, 50);
const all = [...original, ...B51, ...B61, ...B70, ...B79];
const letters = ["A", "B", "C", "D", "E"];
const problems = [];

if (original.length !== 50) problems.push(`base length ${original.length}, expected 50`);
if (all.length !== 87) problems.push(`total length ${all.length}, expected 87`);

const ids = new Set();
const cases = new Set();
const trueHist = {};
const diffHist = {};

for (let index = 0; index < all.length; index += 1) {
  const task = all[index];
  const expected = index + 1;
  if (task.sort_order !== expected) problems.push(`${task.id}: sort_order ${task.sort_order}, expected ${expected}`);
  if (task.id !== `math-8-${expected}`) problems.push(`${task.id}: wrong id at ${expected}`);
  if (task.case_id !== `MATH 8.${String(expected).padStart(2, "0")}`) {
    problems.push(`${task.id}: wrong case_id ${task.case_id}`);
  }
  if (ids.has(task.id)) problems.push(`duplicate id ${task.id}`);
  if (cases.has(task.case_id)) problems.push(`duplicate case_id ${task.case_id}`);
  ids.add(task.id);
  cases.add(task.case_id);

  if (
    task.statements?.length !== 5 ||
    task.answer_key?.length !== 5 ||
    task.tactical_explanations?.length !== 5
  ) {
    problems.push(`${task.id}: bad array lengths`);
    continue;
  }
  if (task.subsection != null) problems.push(`${task.id}: subsection must stay absent`);
  if (!/^[1-5]\/5$/.test(task.difficulty_level)) problems.push(`${task.id}: bad difficulty`);
  if (!task.solution_overview) problems.push(`${task.id}: missing overview`);
  for (const marker of ["**Part 1:", "**Part 2:", "**Part 3:", "**Answer.**"]) {
    if (!task.solution_overview?.includes(marker)) problems.push(`${task.id}: overview missing ${marker}`);
  }
  task.tactical_explanations.forEach((explanation, statementIndex) => {
    const header = explanation.split("\n")[0];
    const match = header.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (
      !match ||
      match[1] !== letters[statementIndex] ||
      (match[2] === "True") !== task.answer_key[statementIndex]
    ) {
      problems.push(`${task.id} ${letters[statementIndex]}: header/key mismatch`);
    }
    if (/This claim/i.test(explanation)) problems.push(`${task.id} ${letters[statementIndex]}: meta opener`);
    if ((explanation.match(/\$\$/g) || []).length % 2) {
      problems.push(`${task.id} ${letters[statementIndex]}: unbalanced display math`);
    }
  });

  const trueCount = task.answer_key.filter(Boolean).length;
  trueHist[trueCount] = (trueHist[trueCount] || 0) + 1;
  diffHist[task.difficulty_level] = (diffHist[task.difficulty_level] || 0) + 1;
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

function escapeTemplate(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

const body = all
  .map((task) => {
    const statements = task.statements
      .map((statement) => `      \`${escapeTemplate(statement)}\`,`)
      .join("\n");
    const explanations = task.tactical_explanations
      .map((explanation) => `      \`${escapeTemplate(explanation)}\`,`)
      .join("\n");
    return `  {
    id: \`${escapeTemplate(task.id)}\`,
    case_id: \`${escapeTemplate(task.case_id)}\`,
    title: \`${escapeTemplate(task.title)}\`,
    context: \`${escapeTemplate(task.context)}\`,
    statements: [
${statements}
    ],
    answer_key: [${task.answer_key.join(", ")}],
    tactical_explanations: [
${explanations}
    ],
    difficulty_level: \`${task.difficulty_level}\`,
    sort_order: ${task.sort_order},
    solution_overview: \`${escapeTemplate(task.solution_overview)}\`,
  }`;
  })
  .join(",\n");

const output = `/**
 * Chapter 8 — Power functions (Sydsæter §4.8 style exam tasks).
 * BBE True/False bank: dry claims, multi-step recovery / scaling / composition.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH8_POWER_FUNCTIONS: MathTask[] = [
${body},
];
`;

fs.writeFileSync(new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url), output);
console.log("tasks", all.length);
console.log("difficulty", diffHist);
console.log("true counts", trueHist);
console.log("bytes", output.length);
