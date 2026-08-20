#!/usr/bin/env node
/** Find plug-in patterns in statement text only */
import fs from "node:fs";

const FILES = ["src/data/math-ch4-equations.ts", "src/data/math-ch4-4-exponential.ts"];
const lines = FILES.flatMap((f) => fs.readFileSync(f, "utf8").split("\n").map((line) => ({ line, file: f })));

const tasks = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].line.match(/^\s*id: `(math-4-\d+)`/);
  if (!m) continue;
  const id = m[1];
  let subsection = "";
  let answer_key = [];
  let statements = [];
  let inS = false;
  for (let j = i; j < lines.length; j++) {
    if (j > i && /^\s*id: `math-4-\d+`/.test(lines[j].line)) break;
    const sm = lines[j].line.match(/subsection: `([^`]+)`/);
    if (sm) subsection = sm[1];
    if (/statements: \[/.test(lines[j].line)) { inS = true; continue; }
    if (inS && /^\s*\],/.test(lines[j].line)) inS = false;
    if (inS) {
      const st = lines[j].line.match(/^\s*`((?:\\.|[^`])*)`,/);
      if (st) statements.push(st[1]);
    }
    if (/answer_key: \[(.*)\]/.test(lines[j].line)) {
      const km = lines[j].line.match(/answer_key: \[(.*)\]/);
      if (km) answer_key = [...km[1].matchAll(/\b(true|false)\b/g)].map((x) => x[1]);
    }
  }
  tasks.push({ id, subsection, statements, answer_key });
}

const PATS = [
  { id: "if-value-then", re: /If (?:the )?(?:true )?(?:reading|value|number|length|distance|root|solution) is \$/i },
  { id: "when-x-equals", re: /(?:when|if) \$x = \$/i },
  { id: "satisfied-when", re: /satisfied when \$x = \$/i },
  { id: "has-solution-x", re: /has solution \$x = \$/i },
  { id: "then-the", re: /Then the /i },
  { id: "is-therefore", re: /is therefore \$/i },
  { id: "can-only-equal", re: /can only equal/i },
  { id: "never-minus", re: /never \$-\\\$/i },
  { id: "substituting-in-stmt", re: /^Substituting /i },
  { id: "gives-u-equals", re: /gives \$u = \$/i },
  { id: "yields-u", re: /yields.*\$u = \$/i },
  { id: "reports-was-is", re: /reports that (?:the )?(?:original|number|wage|fee|price|change|root|width|length) (?:is|was) \$/i },
  { id: "claims-is", re: /claims that (?:the )?(?:unknown )?(?:number|wage|original) (?:is|was) \$/i },
  { id: "plug-reading", re: /Plug the claimed/i },
  { id: "at-x-equals", re: /at \$x = \$/i },
  { id: "solution-is-negative", re: /has solution \$x = .* and that solution/i },
];

const findings = [];
for (const t of tasks) {
  t.statements.forEach((s, idx) => {
    for (const p of PATS) {
      if (p.re.test(s)) {
        findings.push({
          id: t.id,
          sub: t.subsection,
          letter: String.fromCharCode(65 + idx),
          isTrue: t.answer_key[idx] === "true",
          pat: p.id,
          s: s.slice(0, 120),
        });
      }
    }
  });
}

console.log(`Total findings: ${findings.length}`);
console.log(`TRUE plug-in: ${findings.filter((f) => f.isTrue).length}`);
console.log(`FALSE (traps): ${findings.filter((f) => !f.isTrue).length}\n`);

for (const sub of ["4.1", "4.2", "4.3", "4.4"]) {
  const f = findings.filter((x) => x.sub === sub);
  console.log(`--- ${sub}: ${f.length} ---`);
  for (const x of f) {
    console.log(`${x.id} ${x.letter} ${x.isTrue ? "T" : "F"} [${x.pat}]: ${x.s}…`);
  }
  console.log();
}
