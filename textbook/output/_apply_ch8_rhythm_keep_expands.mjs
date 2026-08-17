import fs from "node:fs";
import { execSync } from "node:child_process";
import katex from "katex";
import { PATCHES as P01 } from "./_ch8_rhythm_patch_01_30.mjs";
import { PATCHES as P31 } from "./_ch8_rhythm_patch_31_60.mjs";
import { PATCHES as P61 } from "./_ch8_rhythm_patch_61_87.mjs";

// Apply onto the pre-rhythm 87-task bank (not onto an already patched HEAD).
const baseRef = process.env.CH8_RHYTHM_BASE || "6e3548e";
fs.writeFileSync(
  new URL("./_head_ch8.ts", import.meta.url),
  execSync(`git show ${baseRef}:src/data/math-ch8-power-functions.ts`, {
    encoding: "utf8",
    maxBuffer: 20_000_000,
  }),
);
const { MATH_CH8_POWER_FUNCTIONS: head } = await import(`./_head_ch8.ts?restore=${Date.now()}`);

const allPatches = [...P01, ...P31, ...P61];
const kept = [];
const dropped = [];

for (const patch of allPatches) {
  const oldTask = head.find((t) => t.sort_order === patch.sort_order);
  const oldText = oldTask.tactical_explanations[patch.explanation_index];
  const ratio = (patch.text.length - oldText.length) / oldText.length;
  if (ratio < -0.1) {
    dropped.push(`${patch.sort_order}${"ABCDE"[patch.explanation_index]} ${Math.round(ratio * 100)}%`);
    continue;
  }
  kept.push(patch);
}

const tasks = head.map((task) => ({
  ...task,
  statements: [...task.statements],
  answer_key: [...task.answer_key],
  tactical_explanations: [...task.tactical_explanations],
}));

const letters = ["A", "B", "C", "D", "E"];
const displayHistogram = {};
const lengthChanges = [];
let mathSpans = 0;

for (const patch of kept) {
  const task = tasks.find((t) => t.sort_order === patch.sort_order);
  const oldText = task.tactical_explanations[patch.explanation_index];
  task.tactical_explanations[patch.explanation_index] = patch.text;

  const expectedTruth = task.answer_key[patch.explanation_index];
  const header = patch.text.split("\n")[0];
  const match = header.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
  if (
    !match ||
    match[1] !== letters[patch.explanation_index] ||
    (match[2] === "True") !== expectedTruth
  ) {
    throw new Error(`Header mismatch ${patch.sort_order}${letters[patch.explanation_index]}: ${header}`);
  }
  const verdict = expectedTruth ? "True" : "False";
  if (!patch.text.trim().endsWith(`so the statement is ${verdict}.`)) {
    throw new Error(`Bad closing ${patch.sort_order}${letters[patch.explanation_index]}`);
  }
  if (/This claim/i.test(patch.text) || patch.text.includes("—") || patch.text.includes("${")) {
    throw new Error(`Denylist hit ${patch.sort_order}${letters[patch.explanation_index]}`);
  }

  const displays = (patch.text.match(/\$\$/g) || []).length / 2;
  displayHistogram[displays] = (displayHistogram[displays] || 0) + 1;
  lengthChanges.push((patch.text.length - oldText.length) / oldText.length);

  const mathPattern = /\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g;
  let mathMatch;
  while ((mathMatch = mathPattern.exec(patch.text))) {
    const tex = mathMatch[1] ?? mathMatch[2];
    katex.renderToString(tex, {
      throwOnError: true,
      strict: "ignore",
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

const expanded = lengthChanges.filter((c) => c > 0.1).length;
const similar = lengthChanges.filter((c) => c >= -0.1 && c <= 0.1).length;
const shortened = lengthChanges.filter((c) => c < -0.1).length;

console.log("kept", kept.length, "dropped_overshort", dropped.length);
console.log("dropped", dropped.join(", "));
console.log("display", displayHistogram);
console.log("length classes", { expanded, similar, shortened });
console.log("KaTeX", mathSpans);
console.log("tasks", tasks.length);
