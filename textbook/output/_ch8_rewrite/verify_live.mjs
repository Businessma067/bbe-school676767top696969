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

const problems = [];
let katexFails = 0;
let mathSpans = 0;
let extended = 0;
const letters = "ABCDE";

function spans(text) {
  const out = [];
  for (const m of text.matchAll(/\$\$([\s\S]*?)\$\$/g)) out.push({ body: m[1], display: true });
  const stripped = text.replace(/\$\$[\s\S]*?\$\$/g, "");
  for (const m of stripped.matchAll(/\$([^$\n]+)\$/g)) out.push({ body: m[1], display: false });
  return out;
}

const get = (obj, name) =>
  obj.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === name)?.initializer;

for (const el of arr.elements) {
  const id = get(el, "id").text;
  const keys = get(el, "answer_key").elements.map((e) => e.kind === ts.SyntaxKind.TrueKeyword);
  const expls = get(el, "tactical_explanations").elements.map((e) => e.text);
  expls.forEach((e, i) => {
    const letter = letters[i];
    const want = keys[i] ? "True" : "False";
    if (!e.startsWith(`**${letter}.** → ${want}`)) problems.push(`${id}${letter}: opener`);
    if (!e.trimEnd().endsWith(`so the statement is ${want}.`)) problems.push(`${id}${letter}: closer`);
    if (e.includes("Extended context check")) {
      extended += 1;
      problems.push(`${id}${letter}: extended`);
    }
    if (e.includes("**Part 1:")) problems.push(`${id}${letter}: overview dump`);
    if (e.includes("${")) problems.push(`${id}${letter}: interpolation`);
    for (const span of spans(e)) {
      mathSpans += 1;
      try {
        katex.renderToString(span.body, { throwOnError: true, displayMode: span.display });
      } catch (err) {
        katexFails += 1;
        if (katexFails <= 12) problems.push(`${id}${letter}: katex ${String(err.message).slice(0, 80)}`);
      }
    }
  });
}

const trans = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } });
if (trans.diagnostics?.length) problems.push(`ts diagnostics ${trans.diagnostics.length}`);

console.log(`tasks ${arr.elements.length}`);
console.log(`extended ${extended}; math ${mathSpans}; katex fails ${katexFails}; problems ${problems.length}`);
problems.slice(0, 25).forEach((p) => console.log(" ", p));
