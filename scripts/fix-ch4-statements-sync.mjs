#!/usr/bin/env node
/**
 * Fix bad ch4 statements: sync equation from tactical_explanations.
 * Only rewrites statements that lack a valid student equation.
 */
import fs from "node:fs";
import { isValidStudentEquation, rewriteFromExp, normalizeLatexEq, tsFileEscape } from "./rewrite-ch4-root-claims.mjs";

const FILES = ["src/data/math-ch4-equations.ts", "src/data/math-ch4-4-exponential.ts"];

function parseBacktickArray(chunk, field) {
  const marker = `${field}: [`;
  const start = chunk.indexOf(marker);
  if (start === -1) return [];
  let i = start + marker.length;
  const items = [];
  while (i < chunk.length) {
    while (i < chunk.length && /[\s,]/.test(chunk[i])) i++;
    if (chunk[i] === "]") break;
    if (chunk[i] !== "`") break;
    i++;
    let val = "";
    while (i < chunk.length) {
      if (chunk[i] === "\\") {
        val += chunk[i++];
        if (i < chunk.length) val += chunk[i++];
        continue;
      }
      if (chunk[i] === "`") break;
      val += chunk[i++];
    }
    i++;
    items.push(val);
  }
  return items;
}

function parseTasks(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const tasks = [];
  const re = /id: `(math-4-\d+)`,[\s\S]*?(?=\n  \},\n  \{|\n  \},\n\]|$)/g;
  let m;
  while ((m = re.exec(src))) {
    const chunk = m[0];
    const ov = chunk.match(/solution_overview: `([^`]+)`/);
    tasks.push({
      id: chunk.match(/id: `(math-4-\d+)`/)[1],
      subsection: chunk.match(/subsection: `([^`]+)`/)[1],
      title: chunk.match(/title: `([^`]+)`/)?.[1] ?? "",
      chunkStart: m.index,
      chunk,
      overview: ov ? ov[1] : "",
      answer_key: [...chunk.match(/answer_key: \[(.*?)\]/s)[1].matchAll(/\b(true|false)\b/g)].map((x) => x[1]),
      statements: parseBacktickArray(chunk, "statements"),
      tactical_explanations: parseBacktickArray(chunk, "tactical_explanations"),
    });
  }
  return { src, tasks };
}

function isBadStatement(s) {
  s = normalizeLatexEq(s);
  if (/^The equation has (exactly one|no) real solution\.?$/.test(s)) return true;
  if (/^For \$u =/.test(s)) return true;
  if (/^For \$f'\(/.test(s)) return true;
  if (/precisely one real value of the exponent/.test(s)) return true;
  if (/more than one real exponent satisfies/.test(s)) return true;
  if (/^For \$x = x,/.test(s)) return true;
  const eqm = s.match(/^For \$([^$]+)\$/);
  if (eqm && !isValidStudentEquation(eqm[1])) {
    if (/customer pays|salary after|rise followed|leaves \$|m\$\\^\{2\}|square with side|If \$x\^\{2\} = a\$/i.test(s)) return false;
    if (/admissible root|real solution|discriminant|distinct.*solution|infinitely many|every real number/i.test(s)) return true;
    return false;
  }
  return false;
}

function fixEscaping(stmt) {
  return normalizeLatexEq(stmt);
}

function formatStatements(arr) {
  return arr.map((s) => `      \`${tsFileEscape(normalizeLatexEq(s))}\`,`).join("\n");
}

let fixed = 0;
let kept = 0;
const stillBad = [];

for (const path of FILES) {
  const { src, tasks } = parseTasks(path);
  let newSrc = src;
  for (let ti = tasks.length - 1; ti >= 0; ti--) {
    const t = tasks[ti];
    const newStmts = t.statements.map((s, i) => {
      if (!isBadStatement(s)) {
        kept++;
        return fixEscaping(s);
      }
      const ns = rewriteFromExp(
        t.tactical_explanations[i],
        t.answer_key[i] === "true",
        t.subsection,
        i,
        t.overview,
        t.title
      );
      if (!ns || isBadStatement(ns)) {
        stillBad.push({ id: t.id, i, s, ns });
        return s;
      }
      fixed++;
      return ns;
    });
    const ss = t.chunk.indexOf("statements: [");
    const closeIdx = t.chunk.indexOf("\n    ],", ss);
    const end = closeIdx + "\n    ],".length;
    const nc = t.chunk.slice(0, ss) + `statements: [\n${formatStatements(newStmts)}\n    ],` + t.chunk.slice(end);
    newSrc = newSrc.slice(0, t.chunkStart) + nc + newSrc.slice(t.chunkStart + t.chunk.length);
  }
  fs.writeFileSync(path, newSrc);
}

console.log(`Fixed ${fixed}, kept ${kept}, still bad ${stillBad.length}`);
for (const x of stillBad.slice(0, 20)) {
  console.log(`  ${x.id}[${x.i}]: ${(x.ns || x.s).slice(0, 90)}`);
}
if (stillBad.length > 0) process.exit(1);
