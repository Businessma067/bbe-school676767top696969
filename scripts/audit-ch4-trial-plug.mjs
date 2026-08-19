#!/usr/bin/env node
/** Flag statements solvable by trial plug-in without algebra */
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

const TRIAL_PATS = [
  { id: "parity", re: /(?:unique real solution|solution) is an? (?:odd|even) integer/i },
  { id: "sign-single", re: /unique real solution is (?:positive|negative)/i },
  { id: "exceeds", re: /(?:solution|root) exceeds \$\\d+/i },
  { id: "less-than", re: /(?:solution|root) (?:is )?less than \$\\d+/i },
  { id: "some-real", re: /some real exponent satisfies/i },
  { id: "exactly-one-root", re: /exactly one (?:positive )?(?:admissible )?root/i },
  { id: "exactly-one-exponent", re: /exactly one real exponent/i },
  { id: "eq-then-claim", re: /^The equation \$[^$]+\$\. A (?:candidate|student|clerk|examiner) claims/i },
];

const findings = [];
for (const t of tasks) {
  t.statements.forEach((s, idx) => {
    for (const p of TRIAL_PATS) {
      if (p.re.test(s)) {
        findings.push({ id: t.id, sub: t.subsection, letter: String.fromCharCode(65 + idx), pat: p.id, s: s.slice(0, 100) });
      }
    }
  });
}

console.log(`Trial-plug findings: ${findings.length}`);
for (const sub of ["4.1", "4.2", "4.3", "4.4"]) {
  const f = findings.filter((x) => x.sub === sub);
  console.log(`\n${sub}: ${f.length}`);
  f.slice(0, 8).forEach((x) => console.log(`  ${x.id} ${x.letter} [${x.pat}]: ${x.s}…`));
  if (f.length > 8) console.log(`  ... +${f.length - 8} more`);
}
