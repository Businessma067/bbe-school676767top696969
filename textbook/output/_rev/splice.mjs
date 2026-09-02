import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const CHAPTERS = {
  ch1: { file: "src/data/math-ch1-logic.ts", dir: "textbook/output/_rev/ch1", varName: "MATH_CH1_LOGIC" },
  ch5: { file: "src/data/math-ch5-linear-equations.ts", dir: "textbook/output/_rev/ch5", varName: "MATH_CH5_LINEAR_EQUATIONS" },
  ch8: { file: "src/data/math-ch8-power-functions.ts", dir: "textbook/output/_rev/ch8", varName: "MATH_CH8_POWER_FUNCTIONS" },
  ch11: { file: "src/data/math-ch11-financial.ts", dir: "textbook/output/_rev/ch11", varName: "MATH_CH11_FINANCIAL" },
};

function esc(s) {
  if (s.includes("${")) throw new Error("forbidden ${");
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`");
}

function renderTask(t) {
  const stmts = t.statements.map((s) => `      \`${esc(s)}\``).join(",\n");
  const expls = t.tactical_explanations.map((s) => `      \`${esc(s)}\``).join(",\n");
  const keys = t.answer_key.map((b) => (b ? "true" : "false")).join(", ");
  const sub = t.subsection ? `\n    subsection: \`${esc(t.subsection)}\`,` : "";
  const table = t.tables_markdown ? `\n    tables_markdown: \`${esc(t.tables_markdown)}\`,` : "";
  const fig = t.figure ? `\n    figure: \`${esc(t.figure)}\`,` : "";
  return `{
    id: \`${esc(t.id)}\`,
    case_id: \`${esc(t.case_id)}\`,
    title: \`${esc(t.title)}\`,${sub}
    context: \`${esc(t.context)}\`,${table}${fig}
    statements: [
${stmts},
    ],
    answer_key: [${keys}],
    tactical_explanations: [
${expls},
    ],
    difficulty_level: \`${esc(t.difficulty_level)}\`,
    sort_order: ${t.sort_order},
    solution_overview: \`${esc(t.solution_overview || "")}\`,
  }`;
}

function loadJsonDir(dir) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json") && !f.startsWith("_")).sort();
  const tasks = files.flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
  const byId = new Map(tasks.map((t) => [t.id, t]));
  if (byId.size !== tasks.length) throw new Error(`duplicate ids in ${dir}`);
  return byId;
}

const which = process.argv[2];
const specs = which ? { [which]: CHAPTERS[which] } : CHAPTERS;
if (which && !CHAPTERS[which]) throw new Error(`unknown ${which}`);

for (const [name, spec] of Object.entries(specs)) {
  const byId = loadJsonDir(spec.dir);
  const src = fs.readFileSync(spec.file, "utf8");
  const sf = ts.createSourceFile(spec.file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  let arr = null;
  const visit = (n) => {
    if (
      !arr &&
      ts.isVariableDeclaration(n) &&
      n.name.getText(sf) === spec.varName &&
      n.initializer &&
      ts.isArrayLiteralExpression(n.initializer)
    ) {
      arr = n.initializer;
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  if (!arr) throw new Error(`no array ${spec.varName} in ${spec.file}`);
  const ordered = arr.elements.map((el) => {
    const idProp = el.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === "id");
    const id = idProp.initializer.text;
    const t = byId.get(id);
    if (!t) throw new Error(`missing json for ${id}`);
    return t;
  });
  if (ordered.length !== byId.size) {
    throw new Error(`${name}: ts ${ordered.length} vs json ${byId.size}`);
  }
  const start = arr.elements[0].getStart(sf);
  const end = arr.elements[arr.elements.length - 1].end;
  const block = ordered.map(renderTask).join(",\n  ");
  fs.writeFileSync(spec.file, src.slice(0, start) + block + src.slice(end));
  console.log("spliced", name, ordered.length);
}
