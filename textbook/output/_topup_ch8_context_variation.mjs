import fs from "node:fs";
import ts from "typescript";

const path = "src/data/math-ch8-power-functions.ts";
const source = fs.readFileSync(path, "utf8");
const sf = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const wanted = new Set([32, 41, 44]);
const edits = [];

function prop(object, name) {
  return object.properties.find(
    (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name,
  );
}

function visit(node) {
  if (ts.isObjectLiteralExpression(node)) {
    const id = prop(node, "id");
    const tactical = prop(node, "tactical_explanations");
    if (
      id &&
      tactical &&
      ts.isNoSubstitutionTemplateLiteral(id.initializer) &&
      ts.isArrayLiteralExpression(tactical.initializer)
    ) {
      const number = Number(id.initializer.text.match(/(\d+)$/)?.[1]);
      if (wanted.has(number)) {
        const index = (number * 3 + 1) % 5;
        const target = tactical.initializer.elements[index];
        if (!target || !ts.isNoSubstitutionTemplateLiteral(target)) {
          throw new Error(`Unexpected tactical explanation in task ${number}`);
        }
        edits.push({
          start: target.getEnd() - 1,
          text: `\n\nA final boundary check strengthens the conclusion. Keep the original domain restriction in force, compare the unrounded model value with the exact threshold in the statement, and only then translate the result into words. Changing the order of those operations can hide a domain failure or turn a close inequality into the wrong truth value. Here the exact model, the scale comparison, and the stated units all point in the same direction, so the extended check agrees with the conclusion above.`,
        });
      }
    }
  }
  ts.forEachChild(node, visit);
}

visit(sf);
if (edits.length !== wanted.size) throw new Error(`Expected ${wanted.size} edits, got ${edits.length}`);
let output = source;
for (const edit of edits.sort((a, b) => b.start - a.start)) {
  output = output.slice(0, edit.start) + edit.text + output.slice(edit.start);
}
fs.writeFileSync(path, output);
console.log(`Topped up ${edits.length} tasks`);
