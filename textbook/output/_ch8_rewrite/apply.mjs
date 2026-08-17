import fs from "node:fs";
import ts from "typescript";

const MAIN = "src/data/math-ch8-power-functions.ts";
const DIR = "textbook/output/_ch8_rewrite";
const files = fs
  .readdirSync(DIR)
  .filter((f) => f.startsWith("out_") && f.endsWith(".json"))
  .sort();
if (!files.length) throw new Error("no out_*.json patches");

const patch = {};
for (const f of files) {
  const obj = JSON.parse(fs.readFileSync(`${DIR}/${f}`, "utf8"));
  for (const [id, expls] of Object.entries(obj)) {
    if (!Array.isArray(expls) || expls.length !== 5) throw new Error(`${f} ${id}: need 5 explanations`);
    if (patch[id]) throw new Error(`duplicate ${id}`);
    patch[id] = expls;
  }
}

const src = fs.readFileSync(MAIN, "utf8");
const sf = ts.createSourceFile(MAIN, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
let arr = null;
const visit = (n) => {
  if (!arr && ts.isVariableDeclaration(n) && n.initializer && ts.isArrayLiteralExpression(n.initializer)) {
    arr = n.initializer;
  }
  ts.forEachChild(n, visit);
};
visit(sf);

function escapeTpl(s) {
  if (s.includes("${")) throw new Error("forbidden ${ in explanation");
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

const replacements = [];
for (const el of arr.elements) {
  const idProp = el.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "id");
  const id = idProp.initializer.text;
  const expls = patch[id];
  if (!expls) continue;
  const explProp = el.properties.find(
    (p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "tactical_explanations",
  );
  const start = explProp.initializer.getStart(sf);
  const end = explProp.initializer.end;
  const inner = expls.map((e) => `      \`${escapeTpl(e)}\``).join(",\n");
  replacements.push({ start, end, text: `[\n${inner},\n    ]` });
}

const missing = arr.elements
  .map((el) => el.properties.find((p) => p.name.getText(sf) === "id").initializer.text)
  .filter((id) => !patch[id]);
if (missing.length) {
  console.warn(`missing patches for ${missing.length} tasks: ${missing.join(",")}`);
}

replacements.sort((a, b) => b.start - a.start);
let next = src;
for (const r of replacements) next = next.slice(0, r.start) + r.text + next.slice(r.end);
fs.writeFileSync(MAIN, next);
console.log(`applied ${replacements.length} / ${arr.elements.length} tasks from ${files.length} patch files`);
