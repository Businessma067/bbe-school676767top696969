import fs from "node:fs";
import ts from "typescript";
import { CH8_TRIALS_11_15 } from "./_ch8_trials_11_15.ts";

const MAIN = "src/data/math-ch8-power-functions.ts";
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

const ids = new Set(CH8_TRIALS_11_15.map((t) => t.id));
const targets = arr.elements.filter((el) => {
  const idProp = el.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "id");
  return idProp && ids.has(idProp.initializer.text);
});
if (targets.length !== 5) throw new Error(`expected 5 targets, got ${targets.length}`);

const start = targets[0].getStart(sf);
const end = targets[targets.length - 1].end;

function esc(s) {
  if (s.includes("${")) throw new Error("forbidden ${");
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

function renderTask(t) {
  const stmts = t.statements.map((s) => `      \`${esc(s)}\``).join(",\n");
  const expls = t.tactical_explanations.map((s) => `      \`${esc(s)}\``).join(",\n");
  const keys = t.answer_key.map((b) => (b ? "true" : "false")).join(", ");
  return `{
    id: \`${esc(t.id)}\`,
    case_id: \`${esc(t.case_id)}\`,
    title: \`${esc(t.title)}\`,
    context: \`${esc(t.context)}\`,
    statements: [
${stmts},
    ],
    answer_key: [${keys}],
    tactical_explanations: [
${expls},
    ],
    difficulty_level: \`${esc(t.difficulty_level)}\`,
    sort_order: ${t.sort_order},
    solution_overview: \`${esc(t.solution_overview)}\`,
  }`;
}

const block = CH8_TRIALS_11_15.map(renderTask).join(",\n  ");
const next = src.slice(0, start) + block + src.slice(end);
fs.writeFileSync(MAIN, next);
console.log("spliced", CH8_TRIALS_11_15.map((t) => t.id).join(", "));
