import fs from "node:fs";
import ts from "typescript";

const MAIN = "src/data/math-ch8-power-functions.ts";
const src = fs.readFileSync(MAIN, "utf8");
const sf = ts.createSourceFile(MAIN, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
let arr = null;
const visit = (n) => {
  if (!arr && ts.isVariableDeclaration(n) && n.initializer && ts.isArrayLiteralExpression(n.initializer)) arr = n.initializer;
  ts.forEachChild(n, visit);
};
visit(sf);
const get = (obj, name) => obj.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "id" || (ts.isPropertyAssignment(p) && p.name.getText(sf) === name))?.initializer;

function prop(obj, name) {
  return obj.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === name)?.initializer;
}

const out = [];
for (const el of arr.elements) {
  const id = prop(el, "id").text;
  const n = Number(id.replace("math-8-", ""));
  if (n < 11) continue;
  const keys = prop(el, "answer_key").elements.map((e) => e.kind === ts.SyntaxKind.TrueKeyword);
  out.push({
    id,
    case_id: prop(el, "case_id").text,
    title: prop(el, "title").text,
    context: prop(el, "context").text,
    statements: prop(el, "statements").elements.map((e) => e.text),
    answer_key: keys,
    difficulty_level: prop(el, "difficulty_level").text,
    sort_order: Number(prop(el, "sort_order").getText(sf)),
  });
}
fs.writeFileSync("textbook/output/_ch8_stems_11_97.json", JSON.stringify(out, null, 2));
console.log("dumped", out.length);
out.forEach((t) => console.log(`${t.id} ${t.difficulty_level} ${t.title}`));
