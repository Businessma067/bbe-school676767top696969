import fs from "node:fs";
import ts from "typescript";

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

const get = (obj, name) =>
  obj.properties.find((p) => ts.isPropertyAssignment(p) && p.name.getText(sf) === name)?.initializer;

const tasks = arr.elements.map((el) => {
  const expls = get(el, "tactical_explanations").elements.map((e) => e.text);
  const lens = expls.map((e) => e.length);
  return {
    id: get(el, "id").text,
    case_id: get(el, "case_id").text,
    title: get(el, "title").text,
    difficulty: get(el, "difficulty_level").text,
    sort_order: Number(get(el, "sort_order").getText(sf)),
    context: get(el, "context").text,
    statements: get(el, "statements").elements.map((e) => e.text),
    answer_key: get(el, "answer_key").elements.map((e) => e.kind === ts.SyntaxKind.TrueKeyword),
    tactical_explanations: expls,
    solution_overview: get(el, "solution_overview").text,
    expl_lens: lens,
    has_extended: expls.some((e) => e.includes("Extended context check")),
  };
});

fs.mkdirSync("textbook/output/_ch8_rewrite", { recursive: true });
fs.writeFileSync("textbook/output/_ch8_rewrite/all.json", JSON.stringify(tasks, null, 2));

const batches = [];
for (let start = 1; start <= 97; start += 10) {
  const end = Math.min(start + 9, 97);
  const slice = tasks.filter((t) => t.sort_order >= start && t.sort_order <= end);
  const name = `${String(start).padStart(2, "0")}_${String(end).padStart(2, "0")}`;
  fs.writeFileSync(`textbook/output/_ch8_rewrite/${name}.json`, JSON.stringify(slice, null, 2));
  batches.push({ name, n: slice.length, ids: slice.map((t) => t.id).join(",") });
}

console.log("tasks", tasks.length);
console.log("extended in", tasks.filter((t) => t.has_extended).length, "tasks");
console.log("batches:");
for (const b of batches) console.log(" ", b.name, b.n, b.ids);
