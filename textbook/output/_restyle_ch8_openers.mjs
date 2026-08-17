/**
 * Mechanically restyle remaining Chapter 8 explanations to MATH 13.18 openers.
 * - strips "This claim…" first paragraphs
 * - strips Priority-B boilerplate
 * - keeps display math and numbers
 * - ensures capitalized "statement is True/False" closers
 *
 * Also merges PATCHES from _ch8_style_01_25.mjs and _ch8_style_26_50.mjs when present.
 * Run: node textbook/output/_restyle_ch8_openers.mjs
 */
import fs from "node:fs";

const BOILER =
  /The claim must be tested with the finite scale factor from the model[\s\S]*?exact finite calculation\.\n\n/g;
const DIRECT = /A direct calculation gives\n\n/g;
const RELEVANT = /The relevant comparison can then be written as\n\n/g;
const THIS_CLAIM_PARA = /^This claim[^\n]*\n\n/;
const INSTINCT = /^The instinct is to[^\n]*\n\n/;
const COMMON = /^A common mistake is to /gm;

function restyleBody(body) {
  let b = body;
  b = b.replace(BOILER, "");
  b = b.replace(DIRECT, "");
  b = b.replace(RELEVANT, "");
  b = b.replace(THIS_CLAIM_PARA, "");
  // If a second "This claim" paragraph remains at the start
  b = b.replace(THIS_CLAIM_PARA, "");
  b = b.replace(INSTINCT, "Power need not inherit the drag exponent alone. ");
  b = b.replace(COMMON, "Dividing by a single input would answer a different question: ");
  // Soften leftover claim vocabulary in closers already handled below
  b = b.replace(/ — /g, ", ");
  b = b.replace(/(?<!\$)\*([^*\n]+)\*(?!\$)/g, "$1");
  // Drop pre-math spoilers that still start with "With $A=..." as first line after header removal if preceded by nothing useful - leave as is when math follows soon
  b = b.replace(/\n{3,}/g, "\n\n").trim();
  return b;
}

function ensureCloser(body, truth) {
  const want = `so the statement is ${truth ? "True" : "False"}.`;
  let b = body
    .replace(/so the (?:claim|statement) is (true|false)\./gi, want)
    .replace(/Therefore the statement is (true|false)\./gi, `Therefore the statement is ${truth ? "True" : "False"}.`)
    .replace(/the claim holds\./gi, want);
  if (!/statement is (True|False)\./.test(b)) {
    b = `${b}\n\n${want[0].toUpperCase()}${want.slice(1)}`;
  }
  // Prefer single final closer
  const parts = b.split(/\n\n/);
  const last = parts[parts.length - 1];
  if (!/statement is (True|False)\./.test(last)) {
    parts.push(want);
  }
  return parts.join("\n\n");
}

function restyleExplanation(ex, truth) {
  const lines = ex.split("\n");
  const header = lines[0];
  const m = header.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
  if (!m) throw new Error("bad header: " + header.slice(0, 80));
  let body = lines.slice(2).join("\n");
  body = restyleBody(body);
  // If body still opens with This claim (same paragraph)
  if (body.startsWith("This claim")) {
    const idx = body.indexOf("\n\n");
    body = idx >= 0 ? body.slice(idx + 2) : body.replace(/^This claim[^.]*\.\s*/, "");
  }
  // Concept-first nudge: if first paragraph still spoils with "gives $A=" before any $$, move that sentence after first $$
  const firstParaEnd = body.indexOf("\n\n");
  const firstPara = firstParaEnd >= 0 ? body.slice(0, firstParaEnd) : body;
  const rest = firstParaEnd >= 0 ? body.slice(firstParaEnd + 2) : "";
  if (!firstPara.includes("$$") && /\$A\s*=|gives \$|returns exactly \$|is \$[0-9]/.test(firstPara) && rest.includes("$$")) {
    // Keep a short concept without numbers when possible
    const concept = firstPara
      .replace(/, and that reconstruction returns exactly \$[^.]+\./, ".")
      .replace(/ The two facts give \$[^.]+\./, ".")
      .replace(/ With \$A=[^.]+\./, ".")
      .replace(/, so revenue rises with price\./, ".")
      .replace(/ and dividing the recorded output by that shape factor gives \$A=4\$\./, ".")
      .replace(/ and raising to the power \$3\/4\$ returns exactly \$64\$\./, ".")
      .replace(/, leaving \$g\(f\(x\)\)=x\$\./, ".");
    body = `${concept}\n\n${rest}`;
  }
  body = ensureCloser(body, truth);
  return `${header}\n\n${body}`;
}

// Load optional hand patches
let hand = [];
for (const f of ["_ch8_style_01_25.mjs", "_ch8_style_26_50.mjs"]) {
  try {
    const mod = await import("./" + f);
    hand.push(...mod.PATCHES);
  } catch {
    /* optional */
  }
}
const handMap = new Map(hand.map((p) => [p.sort_order, p.tactical_explanations]));

// Load live tasks via dynamic import
const { MATH_CH8_POWER_FUNCTIONS: tasks } = await import("../../src/data/math-ch8-power-functions.ts");
const letters = ["A", "B", "C", "D", "E"];

const patched = tasks.map((t) => {
  const fromHand = handMap.get(t.sort_order);
  let exs;
  if (fromHand && fromHand.length === 5 && !fromHand.some((e) => /This claim/.test(e))) {
    exs = fromHand;
  } else {
    exs = t.tactical_explanations.map((ex, i) => restyleExplanation(ex, t.answer_key[i]));
  }
  // Final pass: if hand patch missing some and still This claim
  exs = exs.map((ex, i) => (/This claim/.test(ex) ? restyleExplanation(ex, t.answer_key[i]) : ex));
  exs.forEach((ex, i) => {
    const h = ex.split("\n")[0];
    const m = h.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (!m || m[1] !== letters[i] || (m[2] === "True") !== t.answer_key[i]) {
      throw new Error(`header fail ${t.case_id} ${letters[i]}: ${h}`);
    }
  });
  return { ...t, tactical_explanations: exs };
});

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const body = patched
  .map((t) => {
    const stmts = t.statements.map((s) => `      \`${esc(s)}\`,`).join("\n");
    const exs = t.tactical_explanations.map((s) => `      \`${esc(s)}\`,`).join("\n");
    const key = t.answer_key.map(Boolean).join(", ");
    return `  {
    id: \`${esc(t.id)}\`,
    case_id: \`${esc(t.case_id)}\`,
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

const path = new URL("../../src/data/math-ch8-power-functions.ts", import.meta.url);
fs.writeFileSync(path, out);

let claim = 0;
for (const t of patched) for (const e of t.tactical_explanations) if (/This claim/.test(e)) claim++;
console.log(
  JSON.stringify(
    {
      tasks: patched.length,
      handPatches: handMap.size,
      thisClaimLeft: claim,
      bytes: out.length,
    },
    null,
    2,
  ),
);
