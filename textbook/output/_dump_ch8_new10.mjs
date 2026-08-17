import fs from "node:fs";
import ts from "typescript";

const path = "src/data/math-ch8-power-functions.ts";
const source = fs.readFileSync(path, "utf8");
const sf = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

function prop(object, name) {
  return object.properties.find(
    (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name,
  );
}

const out = [];
function visit(node) {
  if (ts.isObjectLiteralExpression(node)) {
    const id = prop(node, "id");
    if (id && ts.isNoSubstitutionTemplateLiteral(id.initializer)) {
      const num = Number(id.initializer.text.match(/(\d+)$/)?.[1]);
      if (num >= 88) {
        const ctx = prop(node, "context");
        const stmts = prop(node, "statements");
        const title = prop(node, "title");
        const expl = prop(node, "tactical_explanations");
        out.push({
          num,
          title: title.initializer.text,
          context: ctx.initializer.text,
          statements: stmts.initializer.elements.map((e) => e.text),
          explanationHeads: expl.initializer.elements.map((e) => e.text.slice(0, 90).replace(/\n/g, " ")),
        });
      }
    }
  }
  ts.forEachChild(node, visit);
}
visit(sf);
out.sort((a, b) => a.num - b.num);
for (const t of out) {
  console.log(`\n=== ${t.num} :: ${t.title}`);
  console.log(`CONTEXT (${t.context.length}): ${t.context}`);
  t.statements.forEach((s, i) => console.log(`  ${"ABCDE"[i]} (${s.length}): ${s}`));
}
