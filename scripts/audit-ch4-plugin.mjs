#!/usr/bin/env node
import fs from "node:fs";

const FILES = ["src/data/math-ch4-equations.ts", "src/data/math-ch4-4-exponential.ts"];

const lines = FILES.flatMap((f) =>
  fs.readFileSync(f, "utf8").split("\n").map((line) => ({ line, file: f }))
);

const tasks = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].line.match(/^\s*id: `(math-4-\d+)`/);
  if (!m) continue;
  const id = m[1];
  let subsection = "";
  let answer_key = [];
  let statements = [];
  let inS = false;
  let inK = false;
  for (let j = i; j < lines.length; j++) {
    if (j > i && /^\s*id: `math-4-\d+`/.test(lines[j].line)) break;
    const sm = lines[j].line.match(/subsection: `([^`]+)`/);
    if (sm) subsection = sm[1];
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
      continue;
    }
  }
  tasks.push({ id, subsection, statements, answer_key });
}

const PLUG_PATS = [
  { id: "then-the", re: /Then the /i },
  { id: "reports-value", re: /reports that the (?:original|number|two|width|length|tank|can|batch|sample|wage|fee) (?:is|was)/i },
  { id: "claims-dimension", re: /claims (?:the|that) (?:width|length|original|number) (?:is|was)/i },
  { id: "is-therefore", re: /is therefore \$/i },
  { id: "then-distance-length", re: /Then the (?:distance|length) is \$/i },
  { id: "then-possible-sites", re: /Then the two possible/i },
  { id: "candidate-or", re: /is \$[^$]+ or \$[^$]+\.$/i },
  { id: "concludes-number", re: /concludes that the (?:number|width|original)/i },
  { id: "the-number-is", re: /, the number is \$/i },
];

const findings = [];
for (const t of tasks) {
  t.statements.forEach((s, idx) => {
    for (const p of PLUG_PATS) {
      if (p.re.test(s)) {
        findings.push({
          id: t.id,
          sub: t.subsection,
          letter: String.fromCharCode(65 + idx),
          isTrue: t.answer_key[idx] === "true",
          pattern: p.id,
          s,
        });
      }
    }
  });
}

const bySub = {};
for (const t of tasks) bySub[t.subsection] = (bySub[t.subsection] || 0) + 1;

console.log("=== Task counts ===", bySub);
console.log(`=== Findings: ${findings.length} (TRUE: ${findings.filter((f) => f.isTrue).length}, FALSE: ${findings.filter((f) => !f.isTrue).length}) ===\n`);

for (const sub of ["4.1", "4.2", "4.3", "4.4"]) {
  const subF = findings.filter((f) => f.sub === sub);
  console.log(`--- ${sub}: ${subF.length} (${subF.filter((f) => f.isTrue).length} TRUE) ---`);
  for (const f of subF) {
    console.log(`${f.id} ${f.letter} ${f.isTrue ? "T" : "F"} [${f.pattern}]: ${f.s.slice(0, 110)}${f.s.length > 110 ? "…" : ""}`);
  }
  console.log();
}
