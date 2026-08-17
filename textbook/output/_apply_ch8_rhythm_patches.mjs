import fs from "node:fs";
import katex from "katex";
import { MATH_CH8_POWER_FUNCTIONS as source } from "../../src/data/math-ch8-power-functions.ts";
import { PATCHES as P01 } from "./_ch8_rhythm_patch_01_30.mjs";
import { PATCHES as P31 } from "./_ch8_rhythm_patch_31_60.mjs";
import { PATCHES as P61 } from "./_ch8_rhythm_patch_61_87.mjs";

const patches = [...P01, ...P31, ...P61];
const tasks = source.map((task) => ({
  ...task,
  statements: [...task.statements],
  answer_key: [...task.answer_key],
  tactical_explanations: [...task.tactical_explanations],
}));
const seen = new Set();
const originalLengths = new Map();

for (const patch of patches) {
  const key = `${patch.sort_order}:${patch.explanation_index}`;
  if (seen.has(key)) throw new Error(`Duplicate patch ${key}`);
  seen.add(key);

  const task = tasks.find((candidate) => candidate.sort_order === patch.sort_order);
  if (!task) throw new Error(`Unknown sort_order ${patch.sort_order}`);
  if (!Number.isInteger(patch.explanation_index) || patch.explanation_index < 0 || patch.explanation_index > 4) {
    throw new Error(`Bad explanation index in ${key}`);
  }

  const oldText = task.tactical_explanations[patch.explanation_index];
  originalLengths.set(key, oldText.length);
  task.tactical_explanations[patch.explanation_index] = patch.text;
}

const letters = ["A", "B", "C", "D", "E"];
const displayHistogram = {};
const lengthChanges = [];
let mathSpans = 0;

for (const patch of patches) {
  const key = `${patch.sort_order}:${patch.explanation_index}`;
  const task = tasks.find((candidate) => candidate.sort_order === patch.sort_order);
  const text = task.tactical_explanations[patch.explanation_index];
  const expectedTruth = task.answer_key[patch.explanation_index];
  const header = text.split("\n")[0];
  const match = header.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
  if (
    !match ||
    match[1] !== letters[patch.explanation_index] ||
    (match[2] === "True") !== expectedTruth
  ) {
    throw new Error(`Header/key mismatch in ${key}: ${header}`);
  }
  const verdict = expectedTruth ? "True" : "False";
  if (!text.trim().endsWith(`so the statement is ${verdict}.`)) {
    throw new Error(`Bad closing in ${key}`);
  }
  if (/This claim/i.test(text)) throw new Error(`Meta opener in ${key}`);
  if (text.includes("—")) throw new Error(`Em dash in ${key}`);
  if (text.includes("${")) throw new Error(`Template interpolation in ${key}`);

  const displays = (text.match(/\$\$/g) || []).length / 2;
  displayHistogram[displays] = (displayHistogram[displays] || 0) + 1;
  const oldLength = originalLengths.get(key);
  lengthChanges.push((text.length - oldLength) / oldLength);

  const mathPattern = /\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g;
  let mathMatch;
  while ((mathMatch = mathPattern.exec(text))) {
    const tex = mathMatch[1] ?? mathMatch[2];
    katex.renderToString(tex, {
      throwOnError: true,
      strict: "error",
      displayMode: mathMatch[1] != null,
    });
    mathSpans += 1;
  }
}

function escapeTemplate(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

const body = tasks
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
const expanded = lengthChanges.filter((change) => change > 0.1).length;
const similar = lengthChanges.filter((change) => change >= -0.1 && change <= 0.1).length;
const shortened = lengthChanges.filter((change) => change < -0.1).length;
console.log("tasks", tasks.length);
console.log("patches", patches.length);
console.log("display blocks", displayHistogram);
console.log("length classes", { expanded, similar, shortened });
console.log("KaTeX spans", mathSpans);
