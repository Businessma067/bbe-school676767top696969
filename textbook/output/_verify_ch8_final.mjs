import fs from "node:fs";
import ts from "typescript";
import katex from "katex";

const MAIN = "src/data/math-ch8-power-functions.ts";
const src = fs.readFileSync(MAIN, "utf8");
const sf = ts.createSourceFile(MAIN, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

let arr = null;
const findArr = (node) => {
  if (!arr && ts.isVariableDeclaration(node) && node.initializer && ts.isArrayLiteralExpression(node.initializer)) {
    arr = node.initializer;
  }
  ts.forEachChild(node, findArr);
};
findArr(sf);

const get = (obj, name) => {
  const p = obj.properties.find((x) => ts.isPropertyAssignment(x) && x.name.getText(sf) === name);
  return p?.initializer;
};
const str = (node) => (node && "text" in node ? node.text : undefined);

const problems = [];
const tasks = arr.elements.map((el, idx) => {
  const k = idx + 1;
  const id = str(get(el, "id"));
  const caseId = str(get(el, "case_id"));
  const sortOrder = Number(get(el, "sort_order").getText(sf));
  const context = str(get(el, "context"));
  const statements = get(el, "statements").elements.map((e) => e.text);
  const answers = get(el, "answer_key").elements.map((e) => e.kind === ts.SyntaxKind.TrueKeyword);
  const expls = get(el, "tactical_explanations").elements.map((e) => e.text);
  const overview = str(get(el, "solution_overview"));
  const difficulty = str(get(el, "difficulty_level"));

  if (id !== `math-8-${k}`) problems.push(`#${k}: id ${id}`);
  if (caseId !== `MATH 8.${String(k).padStart(2, "0")}`) problems.push(`#${k}: case_id ${caseId}`);
  if (sortOrder !== k) problems.push(`#${k}: sort_order ${sortOrder}`);
  if (statements.length !== 5 || answers.length !== 5 || expls.length !== 5) {
    problems.push(`#${k}: arity ${statements.length}/${answers.length}/${expls.length}`);
  }
  expls.forEach((e, i) => {
    const letter = "ABCDE"[i];
    const wantVerdict = answers[i] ? "True" : "False";
    if (!e.startsWith(`**${letter}.** → ${wantVerdict}`)) {
      problems.push(`#${k}${letter}: opener "${e.slice(0, 26).replace(/\n/g, " ")}"`);
    }
    const close = e.match(/so the statement is (True|False)\.\s*$/);
    if (!close) problems.push(`#${k}${letter}: closing`);
    else if (close[1] !== wantVerdict) problems.push(`#${k}${letter}: closing verdict`);
  });
  if (!/Mark it TRUE or FALSE\.\s*$/.test(context)) problems.push(`#${k}: context tail`);
  if (!overview || !overview.includes("**Part 1")) problems.push(`#${k}: overview shape`);

  const lens = expls.map((e) => e.length);
  const min = Math.min(...lens);
  const max = Math.max(...lens);
  return { k, difficulty, contextLen: context.length, stmtMax: Math.max(...statements.map((s) => s.length)), min, max, ratio: max / min, texts: [context, ...statements, ...expls, overview] };
});

// KaTeX smoke over every math span.
let mathSpans = 0;
const katexFails = [];
for (const t of tasks) {
  for (const text of t.texts) {
    const spans = [
      ...(text.match(/\$\$[\s\S]*?\$\$/g) ?? []).map((s) => ({ body: s.slice(2, -2), display: true })),
      ...(text.replace(/\$\$[\s\S]*?\$\$/g, "").match(/\$[^$\n]+\$/g) ?? []).map((s) => ({ body: s.slice(1, -1), display: false })),
    ];
    for (const span of spans) {
      mathSpans += 1;
      try {
        katex.renderToString(span.body, { throwOnError: true, displayMode: span.display });
      } catch (err) {
        katexFails.push(`#${t.k}: ${span.body.slice(0, 70)} :: ${String(err.message).slice(0, 90)}`);
      }
    }
  }
}

const bad = tasks.filter((t) => t.ratio < 2.5);
const easy = tasks.filter((t) => t.k <= 10);

console.log(`tasks: ${tasks.length}`);
console.log(`math spans rendered: ${mathSpans}, katex failures: ${katexFails.length}`);
katexFails.slice(0, 10).forEach((f) => console.log(`  KATEX ${f}`));
console.log(`structural problems: ${problems.length}`);
problems.slice(0, 20).forEach((p) => console.log(`  ${p}`));
console.log(`\nnew easy tasks 1..10:`);
for (const t of easy) {
  console.log(`  #${t.k} diff=${t.difficulty} ctx=${t.contextLen} stmtMax=${t.stmtMax} expl=${t.min}..${t.max} ratio=${t.ratio.toFixed(2)}`);
}
console.log(`\ntasks with explanation ratio < 2.5: ${bad.length}`);
bad.slice(0, 20).forEach((t) => console.log(`  #${t.k} ratio=${t.ratio.toFixed(2)} (${t.min}..${t.max})`));
const ratios = tasks.map((t) => t.ratio).sort((a, b) => a - b);
console.log(`ratio min=${ratios[0].toFixed(2)} median=${ratios[Math.floor(ratios.length / 2)].toFixed(2)} max=${ratios.at(-1).toFixed(2)}`);
const forbidden = ["Extended context check"];
for (const t of easy) {
  for (const word of forbidden) {
    if (t.texts.slice(6, 11).some((e) => e.includes(word))) console.log(`  FORBIDDEN "${word}" in #${t.k}`);
  }
}
