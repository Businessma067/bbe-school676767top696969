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
let extended = 0;
const letters = "ABCDE";

function spans(text) {
  const out = [];
  for (const m of text.matchAll(/\$\$([\s\S]*?)\$\$/g)) out.push({ body: m[1], display: true });
  const stripped = text.replace(/\$\$[\s\S]*?\$\$/g, "");
  for (const m of stripped.matchAll(/\$([^$\n]+)\$/g)) out.push({ body: m[1], display: false });
  return out;
}

const rows = [];
for (const el of arr.elements) {
  const id = get(el, "id").text;
  const keys = get(el, "answer_key").elements.map((e) => e.kind === ts.SyntaxKind.TrueKeyword);
  const expls = get(el, "tactical_explanations").elements.map((e) => e.text);
  const stmts = get(el, "statements").elements.map((e) => e.text);
  if (expls.length !== 5) problems.push(`${id}: ${expls.length} expl`);
  const lens = expls.map((e) => e.length);
  expls.forEach((e, i) => {
    const letter = letters[i];
    const want = keys[i] ? "True" : "False";
    if (!e.startsWith(`**${letter}.** → ${want}`)) problems.push(`${id}${letter}: opener`);
    if (!e.trimEnd().endsWith(`so the statement is ${want}.`)) problems.push(`${id}${letter}: closer`);
    if (e.includes("Extended context check")) { extended++; problems.push(`${id}${letter}: extended`); }
    if (e.includes("**Part 1:")) problems.push(`${id}${letter}: overview dump`);
    if (e.includes("${")) problems.push(`${id}${letter}: interpolation`);
    if (/From Part [A-E]/i.test(e)) problems.push(`${id}${letter}: cross-ref`);
    for (const span of spans(e)) {
      mathSpans++;
      try { katex.renderToString(span.body, { throwOnError: true, displayMode: span.display }); }
      catch (err) { katexFails++; if (katexFails <= 8) problems.push(`${id}${letter}: katex ${span.body.slice(0, 50)}`); }
    }
  });
  rows.push({ id, min: Math.min(...lens), max: Math.max(...lens), ratio: +(Math.max(...lens) / Math.min(...lens)).toFixed(2), stmts: stmts.map((s) => s.slice(0, 40)) });
}

const transpiled = ts.transpileModule(src, { compilerOptions: { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext }, reportDiagnostics: true, fileName: MAIN });
const tsErrs = (transpiled.diagnostics ?? []).filter((d) => d.category === ts.DiagnosticCategory.Error);

console.log(`tasks ${arr.elements.length}`);
console.log(`extended leftover ${extended}`);
console.log(`math ${mathSpans} katexFails ${katexFails}`);
console.log(`struct problems ${problems.length}`);
problems.slice(0, 20).forEach((p) => console.log(" ", p));
console.log(`ts diagnostics on file: ${tsErrs.length}`);
tsErrs.slice(0, 5).forEach((d) => console.log(" ", ts.flattenDiagnosticMessageText(d.messageText, "\n")));
const ratios = rows.map((r) => r.ratio).sort((a, b) => a - b);
console.log(`ratio min=${ratios[0]} med=${ratios[Math.floor(ratios.length/2)]} max=${ratios.at(-1)}`);
console.log(`shortest ${Math.min(...rows.map(r=>r.min))} longest ${Math.max(...rows.map(r=>r.max))}`);
console.log("sample lengths", rows.filter((_,i)=>[0,10,50,96].includes(i)).map(r=>`${r.id} ${r.min}..${r.max}`).join(" | "));
