#!/usr/bin/env node
/**
 * Full Chapter 4 audit:
 * 1. Plug-in (TRUE answers with embedded target values)
 * 2. Off-topic / too elementary for subsection
 * 3. Shared equation or single context across 2+ statements
 */
import fs from "node:fs";

const FILES = [
  "src/data/math-ch4-equations.ts",
  "src/data/math-ch4-4-exponential.ts",
];

const lines = FILES.flatMap((f) =>
  fs.readFileSync(f, "utf8").split("\n").map((line) => ({ line, file: f }))
);

const tasks = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].line.match(/^\s*id: `(math-4-\d+)`/);
  if (!m) continue;
  const id = m[1];
  let subsection = "";
  let difficulty = "";
  let answer_key = [];
  let statements = [];
  let inS = false;
  for (let j = i; j < lines.length; j++) {
    if (j > i && /^\s*id: `math-4-\d+`/.test(lines[j].line)) break;
    const sm = lines[j].line.match(/subsection: `([^`]+)`/);
    if (sm) subsection = sm[1];
    const dm = lines[j].line.match(/difficulty_level: `([^`]+)`/);
    if (dm) difficulty = dm[1];
    if (/statements: \[/.test(lines[j].line)) {
      inS = true;
      continue;
    }
    if (inS && /^\s*\],/.test(lines[j].line)) inS = false;
    if (inS) {
      const st = lines[j].line.match(/^\s*`((?:\\.|[^`])*)`,/);
      if (st) statements.push(st[1]);
    }
    if (/answer_key: \[(.*)\]/.test(lines[j].line)) {
      const km = lines[j].line.match(/answer_key: \[(.*)\]/);
      if (km) {
        answer_key = [...km[1].matchAll(/\b(true|false)\b/g)].map((x) => x[1]);
      }
    }
  }
  tasks.push({ id, subsection, difficulty, statements, answer_key });
}

function extractLatex(text) {
  const out = [];
  const re = /\$([^$]+)\$/g;
  let m;
  while ((m = re.exec(text)) !== null) out.push(normalizeLatex(m[1]));
  return out;
}

function normalizeLatex(s) {
  return s
    .replace(/\\,/g, "")
    .replace(/\\dfrac/g, "\\frac")
    .replace(/\\left/g, "")
    .replace(/\\right/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isMainEquation(l) {
  return /=/.test(l) && l.length > 4;
}

const PLUG_PATS = [
  { id: "then-the", re: /Then the /i },
  { id: "reports-value", re: /reports that the (?:original|number|two|width|length|tank|can|batch|sample|wage|fee) (?:is|was)/i },
  { id: "claims-dimension", re: /claims (?:the|that) (?:width|length|original|number) (?:is|was)/i },
  { id: "is-therefore", re: /is therefore \$/i },
  { id: "then-distance-length", re: /Then the (?:distance|length) is \$/i },
  { id: "then-possible-sites", re: /Then the two possible/i },
  { id: "candidate-or", re: /is \$[^$]+ or \$[^$]+\.$/i },
];

// Per-subsection: statement lacks topic technique
const TOPIC_CHECKS = {
  "4.1": {
    needs: (s) => /[=]|linear|unknown|equation|times|plus|minus|per hour|per cent/i.test(s),
    elementary: (s) =>
      /^(The (?:sum|product|difference)|If .* then .* is \$[0-9]+\.$)/i.test(s) &&
      !/equation/i.test(s),
  },
  "4.2": {
    needs: (s) =>
      /x\^2|x\^{2}|quadratic|discriminant|parabola|area|product of two factors|times itself|\^2/i.test(s) ||
      isMainEquation(extractLatex(s).join(" ")),
    elementary: (s) => /x \+ [0-9]|2x|3x =/i.test(s) && !/x\^2|x\^{2}/i.test(s),
  },
  "4.3": {
    needs: (s) =>
      /\\sqrt|\\frac|\\ln|\\log|\\left\|/i.test(s) ||
      /square root|reciprocal|absolute|radicand|denominator/i.test(s),
    elementary: (s) => isMainEquation(extractLatex(s).join("")) && !/\\sqrt|\\frac|\\|/i.test(s),
  },
  "4.4": {
    needs: (s) =>
      /\\log|\\ln|e\^|e\^{|\\exp|2\^|3\^|5\^|10\^|\\left\(\\frac\{1\}/i.test(s) ||
      /exponential|logarithm/i.test(s),
    elementary: (s) =>
      /half-lives?|half-life|doubl(es|ing) every|After (one|two|three) (hours?|minutes?)|sample remains|population is (four|eight) times|grows faster than|For every \$x \\to/i.test(s) ||
      (/^The (identity|value|product|ratio|inequality|expression)/i.test(s) && !/equation/i.test(s)),
  },
};

const CROSS_REF = [
  /\bthat equation\b/i,
  /\bthe same equation\b/i,
  /\bEvery real solution of \$([^$]+)\$/i,
  /\bSquaring both sides of \$([^$]+)\$/i,
  /\bthose (two|three|four|five|roots|solutions|numbers)\b/i,
  /\bIf .* recovered .* then\b/i,
];

const findings = { plugin: [], offtopic: [], shared: [], easyHard: [] };

for (const t of tasks) {
  // 1. Plug-in TRUE
  t.statements.forEach((s, idx) => {
    for (const p of PLUG_PATS) {
      if (p.re.test(s) && t.answer_key[idx] === "true") {
        findings.plugin.push({ id: t.id, sub: t.subsection, letter: String.fromCharCode(65 + idx), pattern: p.id });
      }
    }
  });

  // 2. Off-topic / elementary
  const check = TOPIC_CHECKS[t.subsection];
  if (check) {
    let offCount = 0;
    t.statements.forEach((s, idx) => {
      if (check.elementary?.(s) || !check.needs(s)) {
        offCount++;
        findings.offtopic.push({
          id: t.id,
          sub: t.subsection,
          letter: String.fromCharCode(65 + idx),
          diff: t.difficulty,
        });
      }
    });
    if (offCount >= 3) {
      findings.offtopic.push({ id: t.id, sub: t.subsection, letter: "TASK", note: `${offCount}/5 off-topic` });
    }
  }

  // 3. Shared equation
  const eqMap = new Map();
  t.statements.forEach((s, idx) => {
    for (const eq of extractLatex(s).filter(isMainEquation)) {
      const arr = eqMap.get(eq) ?? [];
      if (!arr.includes(idx)) arr.push(idx);
      eqMap.set(eq, arr);
    }
  });
  for (const [eq, idxs] of eqMap) {
    if (idxs.length >= 2) {
      findings.shared.push({
        id: t.id,
        sub: t.subsection,
        eq: eq.slice(0, 50),
        letters: idxs.map((i) => String.fromCharCode(65 + i)).join(","),
        count: idxs.length,
      });
    }
  }

  // Cross-ref linking to one anchor equation
  const anchorEqs = t.statements
    .map((s, i) => ({ i, eqs: extractLatex(s).filter(isMainEquation) }))
    .filter((x) => x.eqs.length > 0);
  if (anchorEqs.length === 1 && anchorEqs[0].eqs.length === 1) {
    const refs = t.statements.filter((s) => CROSS_REF.some((p) => p.test(s))).length;
    if (refs >= 1 || t.statements.filter((s) => !extractLatex(s).some(isMainEquation)).length >= 3) {
      const noEq = t.statements.filter((s) => !extractLatex(s).some(isMainEquation)).length;
      if (noEq >= 3) {
        findings.shared.push({
          id: t.id,
          sub: t.subsection,
          eq: "single-anchor+" + noEq + " property claims",
          letters: "A-E",
          count: 5,
        });
      }
    }
  }

  // 4. Hard tasks (4/5, 5/5) that are too simple
  if (t.difficulty === "4/5" || t.difficulty === "5/5") {
    const simpleCount = t.statements.filter((s) => {
      const eqs = extractLatex(s).filter(isMainEquation);
      if (t.subsection === "4.4") {
        return (
          !eqs.length ||
          eqs.every((e) => /^2\^x =|^3\^x =|^\\log_2 x = [0-9]+$|^e\^\{x/.test(e) && e.length < 20)
        );
      }
      if (t.subsection === "4.1") return /^[0-9]x [+-=]/.test(eqs[0] || "") && (eqs[0]?.length || 0) < 15;
      if (t.subsection === "4.2") return eqs[0] && !/x\^2|x\^{2}/.test(eqs[0]);
      return false;
    }).length;
    if (simpleCount >= 3) {
      findings.easyHard.push({ id: t.id, sub: t.subsection, diff: t.difficulty, simpleCount });
    }
  }
}

function uniqIds(arr) {
  return [...new Set(arr.map((f) => f.id))].sort(
    (a, b) => parseInt(a.split("-")[2]) - parseInt(b.split("-")[2])
  );
}

console.log("=== FULL CH4 AUDIT ===\n");
console.log(`Tasks: ${tasks.length}\n`);

console.log("1. TRUE plug-in:", findings.plugin.length);
findings.plugin.forEach((f) => console.log(`  ${f.id} ${f.letter} [${f.pattern}]`));

for (const sub of ["4.1", "4.2", "4.3", "4.4"]) {
  const off = uniqIds(findings.offtopic.filter((f) => f.sub === sub));
  const sh = uniqIds(findings.shared.filter((f) => f.sub === sub));
  const eh = uniqIds(findings.easyHard.filter((f) => f.sub === sub));
  console.log(`\n--- ${sub} ---`);
  console.log(`  Off-topic/elementary: ${off.length ? off.join(", ") : "(none)"}`);
  console.log(`  Shared context: ${sh.length ? sh.join(", ") : "(none)"}`);
  console.log(`  Hard-rated but too easy: ${eh.length ? eh.join(", ") : "(none)"}`);
}

const allFix = uniqIds([
  ...findings.plugin,
  ...findings.offtopic.filter((f) => f.letter === "TASK" || f.sub !== "4.4"),
  ...findings.shared,
  ...findings.easyHard,
]);
// dedupe 4.4 off-topic into shared list
const allFixSet = new Set([
  ...uniqIds(findings.plugin),
  ...uniqIds(findings.offtopic),
  ...uniqIds(findings.shared),
  ...uniqIds(findings.easyHard),
]);
console.log(`\n=== TOTAL TASKS TO FIX: ${allFixSet.size} ===`);
console.log([...allFixSet].join(", "));
