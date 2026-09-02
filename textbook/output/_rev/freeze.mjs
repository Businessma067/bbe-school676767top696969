import fs from "node:fs";
import path from "node:path";

const dir = process.argv[2];
const out = process.argv[3];
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort();
const tasks = files.flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
const slim = tasks.map((t) => ({
  id: t.id,
  case_id: t.case_id,
  title: t.title,
  subsection: t.subsection ?? null,
  context: t.context,
  statements: t.statements,
  answer_key: t.answer_key,
  difficulty_level: t.difficulty_level,
  sort_order: t.sort_order,
  tables_markdown: t.tables_markdown ?? null,
  figure: t.figure ?? null,
}));
fs.writeFileSync(out, JSON.stringify(slim) + "\n");
console.log("froze", slim.length, "->", out);
