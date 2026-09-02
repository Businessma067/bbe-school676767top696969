import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const thin = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_thin80.json"), "utf8"),
);

const files = [...new Set(thin.map((e) => e.file))];
const byFile = {};
for (const f of files) {
  byFile[f] = JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
}

const out = [];
for (const e of thin) {
  const arr = byFile[e.file];
  const t = arr.find((x) => x.id === e.id);
  if (!t) throw new Error("missing " + e.id);
  const ov = t.solution_overview || "";
  const ans = (ov.match(/\*\*Answer\.\*\*[^\n]*/i) || [""])[0];
  const last = ov.slice(-400);
  out.push({
    n: out.length + 1,
    file: e.file,
    id: e.id,
    letter: e.letter,
    idx: e.idx,
    key: e.key,
    header: e.header,
    statement: e.statement,
    words: e.words,
    title: t.title,
    context: (t.context || "").slice(0, 500),
    answer: ans,
    ov_tail: last,
    statements: t.statements,
    keys: t.answer_key,
  });
}

fs.writeFileSync(
  path.join(root, "textbook/output/_rev/_thin80_dump.json"),
  JSON.stringify(out, null, 2) + "\n",
);
console.log("entries", out.length, "files", files.length);
console.log("by file:");
const counts = {};
for (const e of thin) counts[e.file] = (counts[e.file] || 0) + 1;
for (const [k, v] of Object.entries(counts)) console.log(v, k);
