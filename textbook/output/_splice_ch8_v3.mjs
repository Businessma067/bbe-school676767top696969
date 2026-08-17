import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const MAIN = "src/data/math-ch8-power-functions.ts";
const DIR = "textbook/output/_ch8_v3";
const files = [
  "11_20.json",
  "21_30.json",
  "31_40.json",
  "41_50.json",
  "51_60.json",
  "61_70.json",
  "71_80.json",
  "81_90.json",
  "91_97.json",
];

const tasks = files.flatMap((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")));
const byId = new Map(tasks.map((t) => [t.id, t]));
if (byId.size !== 87) throw new Error(`expected 87, got ${byId.size}`);

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

const targets = arr.elements.filter((el) => {
  const idProp = el.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "id");
  const n = Number(idProp.initializer.text.replace("math-8-", ""));
  return n >= 11 && n <= 97;
});
if (targets.length !== 87) throw new Error(`expected 87 targets, got ${targets.length}`);

const ordered = [];
for (let n = 11; n <= 97; n++) {
  const t = byId.get(`math-8-${n}`);
  if (!t) throw new Error(`missing math-8-${n}`);
  ordered.push(t);
}

const start = targets[0].getStart(sf);
const end = targets[targets.length - 1].end;
const block = ordered.map(renderTask).join(",\n  ");
const next = src.slice(0, start) + block + src.slice(end);
fs.writeFileSync(MAIN, next);
console.log("spliced", ordered.length, "tasks");
