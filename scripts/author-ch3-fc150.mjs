/**
 * Build Ch3 Full Course JSON — quad format, coherent cases.
 * Run: node scripts/author-ch3-fc150.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { TRUE_ORDER, LIVED } from "./ch3-fc150-shared.mjs";
import {
  fixContext,
  fixTitle,
  validateContextStyle,
} from "./ch3-fc150-context-fix.mjs";
import { RAW_31 } from "./ch3-fc150-data-31.mjs";
import { RAW_32 } from "./ch3-fc150-data-32.mjs";
import { RAW_33 } from "./ch3-fc150-data-33.mjs";

const outJson = path.join(
  path.resolve(import.meta.dirname, ".."),
  "src",
  "data",
  "ch3-part-3.1-3.3.json",
);

const BANNED = [/\bthe book\b/i, /\baccording to the book\b/i, /\(\s*alt\s/i, /^At a /im];

function shuffleSlots(n) {
  const a = [0, 1, 2, 3, 4];
  for (let i = 4; i > 0; i--) {
    const j = (n * 17 + i * 11) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** quads: [[tStmt, tExpl, fStmt, fExpl], ×5] */
function materialize(quads, needTrue, n) {
  const order = shuffleSlots(n);
  const trueIdx = new Set(order.slice(0, needTrue));
  const pairs = quads.map((q, i) =>
    trueIdx.has(i) ? [q[0], true, q[1]] : [q[2], false, q[3]],
  );
  const display = order.map((i) => pairs[i]);
  return display;
}

function buildSection(sub, raw, order) {
  if (raw.length !== 50) throw new Error(`${sub}: expected 50 cases, got ${raw.length}`);
  return raw.map(([title, context, diff, quads], i) => {
    const n = i + 1;
    if (quads.length !== 5) throw new Error(`${sub}.${n}: need 5 quads`);
    const pairs = materialize(quads, order[i], n);
    return {
      subsection: sub,
      case_id: `CASE ${sub}.${String(n).padStart(2, "0")}`,
      title: fixTitle(title, sub, n),
      context: fixContext(context, sub, n),
      statements: pairs.map((p) => p[0]),
      answer_key: pairs.map((p) => p[1]),
      tactical_explanations: pairs.map((p) => (p[1] ? "TRUE — " : "FALSE — ") + p[2]),
      difficulty_level: diff,
      tier: "full",
    };
  });
}

function validate(cases) {
  const errors = [];
  const bySub = {};
  const stmts = new Map();

  if (cases.length !== 150) errors.push(`Total ${cases.length} ≠ 150`);

  for (const c of cases) {
    (bySub[c.subsection] ||= []).push(c);
    errors.push(...validateContextStyle(c.context, c.case_id));
    const blob = [c.context, c.title, ...c.statements, ...c.tactical_explanations].join(" ");
    for (const ban of BANNED) {
      if (ban.test(blob)) errors.push(`${c.case_id}: banned ${ban}`);
    }
    for (let i = 0; i < 5; i++) {
      for (let j = i + 1; j < 5; j++) {
        const a = c.statements[i].trim().toLowerCase();
        const b = c.statements[j].trim().toLowerCase();
        if (a === b) errors.push(`${c.case_id}: duplicate statements at ${i + 1} and ${j + 1}`);
        if (a.slice(0, 80) === b.slice(0, 80)) {
          errors.push(`${c.case_id}: near-duplicate statements at ${i + 1} and ${j + 1}`);
        }
      }
      const pref = c.answer_key[i] ? "TRUE —" : "FALSE —";
      if (!c.tactical_explanations[i].startsWith(pref)) errors.push(`${c.case_id}[${i}]: bad prefix`);
      if (/^At a /i.test(c.statements[i])) errors.push(`${c.case_id}[${i}]: location-prefix statement`);
      const key = c.statements[i].trim().toLowerCase();
      if (stmts.has(key)) errors.push(`Duplicate: ${c.case_id} vs ${stmts.get(key)}`);
      else stmts.set(key, c.case_id);
    }
  }

  for (const sub of ["3.1", "3.2", "3.3"]) {
    const list = bySub[sub] || [];
    if (list.length !== 50) errors.push(`${sub}: count ${list.length}`);
    const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const c of list) hist[c.answer_key.filter(Boolean).length]++;
    for (let k = 1; k <= 5; k++) {
      if (hist[k] !== 10) errors.push(`${sub}: ${k}-true = ${hist[k]} (want 10)`);
    }
  }

  const lived = cases.filter((c) => LIVED.has(Number(c.case_id.split(".").pop()))).length;
  return { errors, bySub, stmtCount: stmts.size, lived };
}

const cases = [
  ...buildSection("3.1", RAW_31, TRUE_ORDER["3.1"]),
  ...buildSection("3.2", RAW_32, TRUE_ORDER["3.2"]),
  ...buildSection("3.3", RAW_33, TRUE_ORDER["3.3"]),
];

const { errors, bySub, stmtCount, lived } = validate(cases);
if (errors.length) {
  console.error("Validation failed:\n" + errors.slice(0, 40).join("\n"));
  if (errors.length > 40) console.error(`… +${errors.length - 40} more`);
  process.exit(1);
}

fs.writeFileSync(outJson, JSON.stringify(cases, null, 2) + "\n");
console.log("OK:", outJson);
console.log("Cases:", cases.length, "| Unique statements:", stmtCount);
console.log("Lived contexts:", lived, "of 150");
console.log("TRUE-count histograms:");
for (const sub of ["3.1", "3.2", "3.3"]) {
  const hist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of bySub[sub]) hist[c.answer_key.filter(Boolean).length]++;
  console.log(sub, JSON.stringify(hist));
}
const sample = cases.find((c) => c.case_id === "CASE 3.1.05");
console.log("Sample:", JSON.stringify(sample, null, 2));
