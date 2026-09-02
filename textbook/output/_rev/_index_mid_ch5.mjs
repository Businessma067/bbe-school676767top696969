import fs from "fs";
import path from "path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
let raw = fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5.json"), "utf8");
raw = raw.slice(0, raw.lastIndexOf("]") + 1);
const mid = JSON.parse(raw);
console.log("count", mid.length);

const files = [...new Set(mid.map((e) => e.file.replace(/\\/g, "/")))];
const byFile = {};
for (const f of files) {
  byFile[f] = JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
}

const out = [];
for (const e of mid) {
  const file = e.file.replace(/\\/g, "/");
  const t = byFile[file].find((x) => x.id === e.id);
  const ov = t.solution_overview || "";
  const ans = (ov.match(/\*\*Answer\.\*\*[^\n]*/i) || [""])[0];
  out.push({
    n: out.length + 1,
    file,
    id: e.id,
    letter: e.letter,
    idx: e.idx,
    words: e.words,
    key: e.key,
    statement: e.statement,
    title: t.title,
    answer: ans,
    context: (t.context || "").slice(0, 400),
    tables: (t.tables_markdown || "").slice(0, 300),
    statements: t.statements,
    keys: t.answer_key,
  });
}

fs.writeFileSync(
  path.join(root, "textbook/output/_rev/_mid_ch5_index.json"),
  JSON.stringify(out, null, 2) + "\n",
);

const byId = {};
for (const e of out) {
  if (!byId[e.id]) byId[e.id] = { answer: e.answer, letters: [] };
  byId[e.id].letters.push(`${e.letter}(${e.words},${e.key ? "T" : "F"})`);
}
console.log("tasks", Object.keys(byId).length);
for (const [id, v] of Object.entries(byId)) {
  console.log(id, v.letters.join(" "), "|", v.answer.slice(0, 90));
}
