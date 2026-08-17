/**
 * Apply style patches to Chapter 8 explanations, then leave ready to commit.
 * Run: node textbook/output/_apply_ch8_style_patches.mjs
 */
import fs from "node:fs";

const { PATCHES: P1 } = await import("./_ch8_style_01_25.mjs");
const { PATCHES: P2 } = await import("./_ch8_style_26_50.mjs");
const patches = new Map([...P1, ...P2].map((p) => [p.sort_order, p.tactical_explanations]));

if (patches.size !== 50) {
  console.error("Expected 50 patches, got", patches.size);
  process.exit(1);
}

const path = new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url);
// Dynamic import of the TS via a small eval of the assembled structure is awkward;
// instead rewrite by re-assembling from current overrides then applying patches in memory
// through a generated temporary module.
const { BATCH: B01 } = await import("./_ch8_batch_01_05.mjs");
const { BATCH: B06 } = await import("./_ch8_batch_06_20.mjs");
const { BATCH: B21 } = await import("./_ch8_batch_21_35.mjs");
const { BATCH: B36 } = await import("./_ch8_batch_36_50.mjs");

const dir = new URL("./", import.meta.url);
const overrides = [];
for (const f of fs.readdirSync(dir).filter((f) => /^_ch8_ov_.*\.mjs$/.test(f)).sort()) {
  const { BATCH } = await import("./" + f);
  overrides.push(...BATCH);
}
const map = new Map();
for (const t of [...B01, ...B06, ...B21, ...B36, ...overrides]) map.set(t.sort_order, structuredClone(t));

// Prefer live file content for contexts/statements already styled; only replace explanations via patches.
// Load live tasks by parsing the export is heavy; apply patches onto assembled map then also
// force-read live answer_keys from a lightweight regex parse of the TS file.
const live = fs.readFileSync(path, "utf8");
const liveKeys = new Map();
for (const m of live.matchAll(/sort_order:\s*(\d+),\s*\n\s*solution_overview:/g)) {
  // fallback unused
}
// Parse answer keys from live file in order
const keyMatches = [...live.matchAll(/answer_key:\s*\[([^\]]+)\]/g)];
const sortMatches = [...live.matchAll(/sort_order:\s*(\d+)/g)];
if (keyMatches.length !== 50 || sortMatches.length !== 50) {
  console.error("parse fail", keyMatches.length, sortMatches.length);
  process.exit(1);
}
for (let i = 0; i < 50; i++) {
  const sort = Number(sortMatches[i][1]);
  const key = keyMatches[i][1].split(",").map((s) => s.trim() === "true");
  liveKeys.set(sort, key);
}

const letters = ["A", "B", "C", "D", "E"];
let claimLeft = 0;
for (const [sort, exs] of patches) {
  if (exs.length !== 5) {
    console.error("bad length", sort);
    process.exit(1);
  }
  const key = liveKeys.get(sort);
  exs.forEach((ex, i) => {
    const head = ex.split("\n")[0];
    const m = head.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (!m || m[1] !== letters[i] || (m[2] === "True") !== key[i]) {
      console.error("header mismatch", sort, letters[i], head, key[i]);
      process.exit(1);
    }
    if (/This claim/.test(ex)) claimLeft += 1;
  });
  const task = map.get(sort);
  task.tactical_explanations = exs;
  // keep live context instruction if present on assembled tasks later via assemble+manual replace
}

// Write patched tasks through assemble pattern
function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const all = [...map.values()].sort((a, b) => a.sort_order - b.sort_order);
for (const t of all) {
  const patched = patches.get(t.sort_order);
  if (patched) t.tactical_explanations = patched;
  if (!String(t.context).includes("Evaluate each statement. Mark it TRUE or FALSE.")) {
    t.context = t.context + " Evaluate each statement. Mark it TRUE or FALSE.";
  }
}

const body = all
  .map((t) => {
    const stmts = t.statements.map((s) => `      \`${esc(s)}\`,`).join("\n");
    const exs = t.tactical_explanations.map((s) => `      \`${esc(s)}\`,`).join("\n");
    const key = t.answer_key.map(Boolean).join(", ");
    return `  {
    id: \`math-8-${t.sort_order}\`,
    case_id: \`MATH 8.${String(t.sort_order).padStart(2, "0")}\`,
    title: \`${esc(t.title)}\`,
    context: \`${esc(t.context)}\`,
    statements: [
${stmts}
    ],
    answer_key: [${key}],
    tactical_explanations: [
${exs}
    ],
    difficulty_level: \`${esc(t.difficulty_level)}\`,
    sort_order: ${t.sort_order},
    solution_overview: \`${esc(t.solution_overview)}\`,
  }`;
  })
  .join(",\n");

const out = `/**
 * Chapter 8 — Power functions (Sydsæter §4.8 style exam tasks).
 * BBE True/False bank: dry claims, multi-step recovery / scaling / composition.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH8_POWER_FUNCTIONS: MathTask[] = [
${body},
];
`;

fs.writeFileSync(path, out);
console.log("wrote", path.pathname, "bytes", out.length, "this-claim-left-in-patches", claimLeft);
