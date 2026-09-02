import fs from "node:fs";
import ts from "typescript";
import katex from "katex";

const MAIN = "src/data/math-ch8-power-functions.ts";
const src = fs.readFileSync(MAIN, "utf8");
const sf = ts.createSourceFile(MAIN, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
let arr = null;
const visit = (n) => {
  if (!arr && ts.isVariableDeclaration(n) && n.initializer && ts.isArrayLiteralExpression(n.initializer)) arr = n.initializer;
  ts.forEachChild(n, visit);
};
visit(sf);
const get = (obj, name) => obj.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === name)?.initializer;

const problems = [];
let katexFails = 0;
let mathSpans = 0;
let empty = 0;

function extractDisplays(text) {
  const out = [];
  let i = 0;
  while (i < text.length) {
    const start = text.indexOf("$$", i);
    if (start < 0) break;
    const end = text.indexOf("$$", start + 2);
    if (end < 0) {
      problems.push("unclosed $$");
      break;
    }
    out.push(text.slice(start + 2, end));
    i = end + 2;
  }
  return out;
}

for (const el of arr.elements) {
  const id = get(el, "id").text;
  const keys = get(el, "answer_key").elements.map((e) => e.kind === ts.SyntaxKind.TrueKeyword);
  const expls = get(el, "tactical_explanations").elements.map((e) => e.text);
  const ov = get(el, "solution_overview").text;
  expls.forEach((e, i) => {
    const letter = "ABCDE"[i];
    const want = keys[i] ? "True" : "False";
    if (!e.startsWith(`**${letter}.** → ${want}`)) problems.push(`${id}${letter}: opener`);
    if (!e.trimEnd().endsWith(`so the statement is ${want}.`)) problems.push(`${id}${letter}: closer`);
    for (const body of extractDisplays(e)) {
      if (!body.trim()) {
        empty++;
        problems.push(`${id}${letter}: empty display`);
        continue;
      }
      mathSpans++;
      try { katex.renderToString(body, { throwOnError: true, displayMode: true }); }
      catch (err) {
        katexFails++;
        if (katexFails <= 10) problems.push(`${id}${letter}: ${body.trim().slice(0, 55)} :: ${String(err.message).slice(0, 70)}`);
      }
    }
  });
  for (const body of extractDisplays(ov)) {
    if (!body.trim()) continue;
    mathSpans++;
    try { katex.renderToString(body, { throwOnError: true, displayMode: true }); }
    catch (err) {
      katexFails++;
      if (katexFails <= 10) problems.push(`${id} ov: ${body.trim().slice(0, 40)}`);
    }
  }
}
console.log(`displays ${mathSpans} katexFails ${katexFails} empty ${empty} problems ${problems.length}`);
problems.slice(0, 15).forEach((p) => console.log(" ", p));
