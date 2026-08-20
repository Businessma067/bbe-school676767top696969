#!/usr/bin/env node
/**
 * Chapter 4.1–4.4 — unique exam statements + MATH 13.18 explanations.
 * Each story skeleton is used at most once. Claims use small integers only.
 */
import fs from "node:fs";
import path from "node:path";
import { linearItems } from "./ch4-items-41.mjs";
import { quadItems } from "./ch4-items-42.mjs";
import { ratItems } from "./ch4-items-43.mjs";
import { padLinear, padQuad, padRat, padExp } from "./ch4-items-pad.mjs";
import { expandQuad, expandRat, expandExp } from "./ch4-items-expand.mjs";
import { normalizeStatement, validateStatement } from "./ch4-statement-rules.mjs";
import { uniquenessKey } from "./ch4-lib.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_MAIN = path.join(ROOT, "src/data/math-ch4-equations.ts");
const OUT_44 = path.join(ROOT, "src/data/math-ch4-4-exponential.ts");

function tsLit(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

const KEY_PATTERNS = [
  [true, false, true, false, true],
  [false, true, false, true, false],
  [true, true, false, false, true],
  [false, false, true, true, false],
  [true, false, false, true, true],
  [false, true, true, false, false],
  [true, false, true, true, false],
  [false, true, false, false, true],
  [true, true, true, false, false],
  [false, false, false, true, true],
  [true, false, false, false, true],
  [false, true, true, true, false],
  [true, true, false, true, false],
  [false, false, true, false, true],
  [true, false, true, false, false],
  [false, true, false, true, true],
  [true, false, false, true, false],
  [false, true, true, false, true],
  [true, true, false, false, false],
  [false, false, true, true, true],
];

const TITLES = {
  "4.1": ["Motion and mixtures", "Ages and coins", "Fences and bills", "Chase problems", "Exam linear stories", "Tickets and wages", "Boats and meetings", "Discounts and means"],
  "4.2": ["Areas and products", "Vieta pairs", "Discriminants", "Projectiles", "Consecutive integers", "Completing the square", "Quadratic models", "Factorable roots"],
  "4.3": ["Pipes and work", "Absolute values", "Radicals", "Passing vehicles", "Rational crossing", "Ladders", "Inlets and drains", "Partial jobs"],
  "4.4": ["Logarithms", "Matching bases", "Mixed exponentials", "Shifts of ln", "No real roots", "Substitutions", "Small integer powers", "Exponential counts"],
};

const OVERVIEWS = {
  "4.1": `Five independent exam sentences. Model each story as one linear equation, solve exactly, then compare with the closing claim.`,
  "4.2": `Five independent quadratic stories. Form $ax^2+bx+c=0$, factor when possible, and verify the stated numerical property.`,
  "4.3": `Five independent rational, radical, or absolute-value stories. State the domain, solve algebraically, then test the claim.`,
  "4.4": `Five independent exponential and logarithmic stories. Rewrite with log laws or a common base, respect the domain, then compare with the claim.`,
};

function allRaw() {
  return [
    ...linearItems(),
    ...quadItems(),
    ...ratItems(),
    ...padLinear(),
    ...padQuad(),
    ...padRat(),
    ...padExp(),
    ...expandQuad(),
    ...expandRat(),
    ...expandExp(),
  ];
}

function prepare(sub) {
  const usedSk = new Set();
  const usedId = new Set();
  const out = [];
  for (const spec of allRaw().filter((s) => s.sub === sub)) {
    if (usedId.has(spec.id)) continue;
    let sample;
    try {
      sample = spec.make(true);
    } catch {
      continue;
    }
    const sk = uniquenessKey(sample.statement);
    if (usedSk.has(sk)) continue;
    const err = validateStatement(sample.statement, true, sub);
    if (err) continue;
    usedSk.add(sk);
    usedId.add(spec.id);
    out.push(spec);
  }
  out.sort((a, b) => a.tier - b.tier || a.id.localeCompare(b.id));
  return out;
}

function difficultyTier(n, sub) {
  const span = sub === "4.1" || sub === "4.2" ? 33 : 27;
  const idx =
    sub === "4.1" ? n - 1 : sub === "4.2" ? n - 34 : sub === "4.3" ? n - 67 : n - 94;
  if (idx < span * 0.2) return 1;
  if (idx < span * 0.4) return 2;
  if (idx < span * 0.6) return 3;
  if (idx < span * 0.8) return 4;
  return 5;
}

function eqKey(stmt) {
  const eqs = [...stmt.matchAll(/\$([^$]+)\$/g)]
    .map((m) => m[1].replace(/\s+/g, ""))
    .filter((e) => /=/.test(e) || /\\log|x\^2/.test(e));
  return eqs[0] || stmt.replace(/\d+/g, "#").slice(0, 60);
}

function shuffle(arr, seed) {
  const a = arr.slice();
  let s = seed >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function takeForTask(pool, used, wantTier, count, taskSeed) {
  const picked = [];
  const usedEq = new Set();
  const order = shuffle(pool, taskSeed);
  const tryPick = (pred) => {
    for (const spec of order) {
      if (picked.length >= count) return;
      if (used.has(spec.id)) continue;
      if (!pred(spec)) continue;
      let stmt;
      try {
        stmt = spec.make(true).statement;
      } catch {
        continue;
      }
      const ek = eqKey(stmt);
      if (usedEq.has(ek)) continue;
      used.add(spec.id);
      usedEq.add(ek);
      picked.push(spec);
    }
  };
  tryPick((s) => s.tier === wantTier);
  tryPick((s) => Math.abs(s.tier - wantTier) === 1);
  tryPick(() => true);
  if (picked.length < count) {
    for (const spec of order) {
      if (picked.length >= count) break;
      if (used.has(spec.id)) continue;
      used.add(spec.id);
      picked.push(spec);
    }
  }
  if (picked.length < count) {
    throw new Error(`need ${count} more ${pool[0]?.sub} items (pool ${pool.length}, used ${used.size})`);
  }
  return picked;
}

function buildTask(n, sub, pool, used) {
  const tier = difficultyTier(n, sub);
  const answer_key = KEY_PATTERNS[n % KEY_PATTERNS.length].map(Boolean);
  const specs = takeForTask(pool, used, tier, 5, n * 9973 + sub.length * 13);
  const statements = [];
  const tactical_explanations = [];
  for (let i = 0; i < 5; i++) {
    const made = specs[i].make(answer_key[i]);
    const L = String.fromCharCode(65 + i);
    statements.push(made.statement);
    tactical_explanations.push(made.expl.replaceAll("{L}", L));
  }
  return {
    id: `math-4-${n}`,
    case_id: `MATH 4.${n < 10 ? "0" + n : n}`,
    title: TITLES[sub][n % TITLES[sub].length],
    subsection: sub,
    context: `Evaluate each statement. Mark it TRUE or FALSE.`,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: `${tier}/5`,
    sort_order: n,
    solution_overview: OVERVIEWS[sub],
  };
}

function renderTask(t) {
  return [
    "  {",
    `    id: \`${t.id}\`,`,
    `    case_id: \`${t.case_id}\`,`,
    `    title: \`${tsLit(t.title)}\`,`,
    `    subsection: \`${t.subsection}\`,`,
    `    context: \`${t.context}\`,`,
    "    statements: [",
    ...t.statements.map((s) => `      \`${tsLit(s)}\`,`),
    "    ],",
    `    answer_key: [${t.answer_key.join(", ")}],`,
    "    tactical_explanations: [",
    ...t.tactical_explanations.map((e) => `      \`${tsLit(e)}\`,`),
    "    ],",
    `    difficulty_level: \`${t.difficulty_level}\`,`,
    `    sort_order: ${t.sort_order},`,
    `    solution_overview: \`${tsLit(t.solution_overview)}\`,`,
    "  },",
  ].join("\n");
}

function crazyNumber(s) {
  if (/\d\.\d{5,}/.test(s)) return "long-decimal";
  const fr = [...s.matchAll(/\\frac\{(\d+)\}\{(\d+)\}/g)];
  for (const m of fr) {
    if (m[1].length >= 4 || Number(m[1]) > 120) return `huge-frac ${m[0]}`;
  }
  return null;
}

const p41 = prepare("4.1");
const p42 = prepare("4.2");
const p43 = prepare("4.3");
const p44 = prepare("4.4");
console.log(`usable unique: 4.1=${p41.length} 4.2=${p42.length} 4.3=${p43.length} 4.4=${p44.length}`);

const u41 = new Set();
const u42 = new Set();
const u43 = new Set();
const u44 = new Set();
const t41 = Array.from({ length: 33 }, (_, i) => buildTask(i + 1, "4.1", p41, u41));
const t42 = Array.from({ length: 33 }, (_, i) => buildTask(i + 34, "4.2", p42, u42));
const t43 = Array.from({ length: 27 }, (_, i) => buildTask(i + 67, "4.3", p43, u43));
const t44 = Array.from({ length: 27 }, (_, i) => buildTask(i + 94, "4.4", p44, u44));

const allTasks = [...t41, ...t42, ...t43, ...t44];
const sk = new Set();
let dups = 0;
let crazy = 0;
for (const t of allTasks) {
  for (const s of t.statements) {
    const k = uniquenessKey(s);
    if (sk.has(k)) dups++;
    sk.add(k);
    if (crazyNumber(s)) crazy++;
  }
}
if (dups) console.warn(`skeleton duplicates: ${dups}`);
if (crazy) console.warn(`crazy-number statements: ${crazy}`);
console.log(`Generated ${allTasks.length} tasks (${allTasks.length * 5} statements), unique skeletons ${sk.size}`);

fs.writeFileSync(
  OUT_MAIN,
  `/**
 * Chapter 4 — Equations (subsections 4.1–4.3).
 * Unique exam-style word problems. Generated by scripts/generate-math-ch4-exam.mjs
 */

import type { MathTask } from "@/data/math-chapters";
import { MATH_CH4_4_EXPONENTIAL } from "@/data/math-ch4-4-exponential";

export const MATH_CH4_SUBSECTIONS = [
  { id: "4.1", title: "Linear equations in one unknown" },
  { id: "4.2", title: "Quadratic equations" },
  { id: "4.3", title: "Rational, radical and absolute-value equations" },
  { id: "4.4", title: "Exponential and logarithmic equations" },
] as const;

export const MATH_CH4_EQUATIONS: MathTask[] = [
${[...t41, ...t42, ...t43].map(renderTask).join("\n")}
  ...MATH_CH4_4_EXPONENTIAL,
];
`,
  "utf8"
);

fs.writeFileSync(
  OUT_44,
  `/**
 * Chapter 4 — Subsection 4.4: Exponential and logarithmic equations.
 * Generated by scripts/generate-math-ch4-exam.mjs
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH4_4_EXPONENTIAL: MathTask[] = [
${t44.map(renderTask).join("\n")}
];
`,
  "utf8"
);
