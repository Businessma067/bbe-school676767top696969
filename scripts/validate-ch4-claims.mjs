#!/usr/bin/env node
/** Quick sanity: affine claims in 4.1 must match answer_key vs explanation root */
import fs from "node:fs";

const FILES = ["src/data/math-ch4-equations.ts", "src/data/math-ch4-4-exponential.ts"];

function parseTasks(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const tasks = [];
  const re = /id: `(math-4-\d+)`,[\s\S]*?(?=\n  \},\n  \{|\n  \},\n\]|$)/g;
  let m;
  while ((m = re.exec(src))) {
    const chunk = m[0];
    const stm = chunk.match(/statements: \[([\s\S]*?)\n    \],/)[1];
    const statements = [...stm.matchAll(/`((?:\\.|[^`])*)`/g)].map((x) => x[1]);
    const answer_key = [...chunk.match(/answer_key: \[(.*?)\]/s)[1].matchAll(/\b(true|false)\b/g)].map((x) => x[1]);
    const exp = chunk.match(/tactical_explanations: \[([\s\S]*?)\n    \],/)[1];
    const explanations = [...exp.matchAll(/`((?:\\.|[^`])*)`/g)].map((x) => x[1]);
    tasks.push({
      id: chunk.match(/id: `(math-4-\d+)`/)[1],
      subsection: chunk.match(/subsection: `([^`]+)`/)[1],
      statements,
      answer_key,
      explanations,
    });
  }
  return tasks;
}

function rootFromExp(exp) {
  for (const p of [
    /\$\$x = (-?\d+(?:\.\d+)?)\$\$/g,
    /That \$(-?\d+(?:\.\d+)?)\$ is the/gi,
    /The isolated solution is \$x = (-?\d+(?:\.\d+)?)/g,
  ]) {
    const ms = [...exp.matchAll(p)];
    if (ms.length) return parseFloat(ms[ms.length - 1][1] || ms[ms.length - 1][0]);
  }
  return null;
}

function parseAffineClaim(s) {
  const m = s.match(/(\d+) times the unknown, (increased|decreased) by \$(\d+)\$, equals \$(\d+)\$/);
  if (!m) return null;
  const a = parseInt(m[1], 10);
  const op = m[2];
  const b = parseInt(m[3], 10);
  const target = parseInt(m[4], 10);
  return { a, op, b, target };
}

const mismatches = [];
for (const f of FILES) {
  for (const t of parseTasks(f)) {
    t.statements.forEach((s, i) => {
      const aff = parseAffineClaim(s);
      if (!aff) return;
      const x = rootFromExp(t.explanations[i]);
      if (x == null) return;
      const val = aff.op === "increased" ? aff.a * x + aff.b : aff.a * x - aff.b;
      const claimTrue = val === aff.target;
      const keyTrue = t.answer_key[i] === "true";
      if (claimTrue !== keyTrue) {
        mismatches.push({ id: t.id, letter: String.fromCharCode(65 + i), x, val, target: aff.target, key: t.answer_key[i], s: s.slice(0, 100) });
      }
    });
  }
}

console.log(`Affine mismatches: ${mismatches.length}`);
mismatches.slice(0, 20).forEach((m) =>
  console.log(`${m.id} ${m.letter}: x=${m.x} gives ${m.val} vs target ${m.target}, key=${m.key}`)
);
