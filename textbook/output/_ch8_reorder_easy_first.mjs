import fs from "node:fs";
import ts from "typescript";

const MAIN = "src/data/math-ch8-power-functions.ts";

function readArrayElements(file) {
  const src = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  let arr = null;
  const visit = (node) => {
    if (!arr && ts.isVariableDeclaration(node) && node.initializer) {
      let init = node.initializer;
      if (ts.isAsExpression(init) || ts.isSatisfiesExpression?.(init)) init = init.expression;
      if (ts.isArrayLiteralExpression(init)) arr = init;
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  if (!arr) throw new Error(`no array literal found in ${file}`);
  const elements = arr.elements.map((el) => {
    const text = src.slice(el.getStart(sf), el.end);
    const num = Number(text.match(/id:\s*`math-8-(\d+)`/)?.[1]);
    if (!Number.isFinite(num)) throw new Error(`element without id in ${file}`);
    return { num, text };
  });
  return { src, sf, arr, elements };
}

const main = readArrayElements(MAIN);
const easyA = readArrayElements("textbook/output/_ch8_easy_a.ts");
const easyB = readArrayElements("textbook/output/_ch8_easy_b.ts");

const easy = [...easyA.elements, ...easyB.elements].sort((a, b) => a.num - b.num);
if (easy.length !== 10) throw new Error(`expected 10 easy tasks, got ${easy.length}`);
const easyNums = easy.map((e) => e.num).join(",");
if (easyNums !== "88,89,90,91,92,93,94,95,96,97") throw new Error(`unexpected easy ids: ${easyNums}`);

const old = main.elements.filter((e) => e.num <= 87).sort((a, b) => a.num - b.num);
if (old.length !== 87) throw new Error(`expected 87 existing tasks, got ${old.length}`);

const ordered = [...easy, ...old];

const pad = (n) => String(n).padStart(2, "0");
const rendered = ordered.map((el, i) => {
  const k = i + 1;
  let text = el.text;
  const before = text;
  text = text.replace(/id:\s*`math-8-\d+`/, `id: \`math-8-${k}\``);
  text = text.replace(/case_id:\s*`MATH 8\.\d+`/, `case_id: \`MATH 8.${pad(k)}\``);
  text = text.replace(/sort_order:\s*\d+/, `sort_order: ${k}`);
  if (before === text) throw new Error(`renumber failed for task ${el.num}`);
  for (const field of ["id", "case_id", "sort_order"]) {
    const hits = text.match(new RegExp(`\\b${field}:`, "g")) ?? [];
    if (hits.length !== 1) throw new Error(`task ${el.num}: ${field} appears ${hits.length} times`);
  }
  return `  ${text}`;
});

const openBracket = main.arr.getStart(main.sf);
const prefix = main.src.slice(0, openBracket + 1);
const suffix = main.src.slice(main.arr.end - 1);
const next = `${prefix}\n${rendered.join(",\n")},\n${suffix}`;
fs.writeFileSync(MAIN, next, "utf8");

console.log(`wrote ${ordered.length} tasks; easy tasks now 1..10, previous 1..87 shifted to 11..97`);
