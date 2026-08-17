import fs from "node:fs";
import ts from "typescript";

const path = "src/data/math-ch8-power-functions.ts";
const source = fs.readFileSync(path, "utf8");
const sf = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const rows = [];

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
      ts.isArrayLiteralExpression(tactical.initializer) &&
      tactical.initializer.elements.length === 5
    ) {
      const lengths = tactical.initializer.elements.map(
        (e) => source.slice(e.getStart(sf) + 1, e.getEnd() - 1).length,
      );
      rows.push({
        id: id.initializer.text,
        lengths,
        ratio: Math.max(...lengths) / Math.min(...lengths),
      });
    }
  }
  ts.forEachChild(node, visit);
}

visit(sf);
const ratios = rows.map((r) => r.ratio).sort((a, b) => a - b);
console.log({
  tasks: rows.length,
  minRatio: ratios[0],
  medianRatio: ratios[Math.floor(ratios.length / 2)],
  maxRatio: ratios.at(-1),
  belowThree: rows.filter((r) => r.ratio < 3).map((r) => r.id),
  malformed: rows.filter((r) => r.lengths.some((n) => n < 250)).map((r) => r.id),
});
