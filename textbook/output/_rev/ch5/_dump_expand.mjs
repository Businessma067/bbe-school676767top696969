import { readFileSync, writeFileSync } from "fs";

const files = [
  "01_10.json",
  "11_20.json",
  "21_30.json",
  "31_40.json",
  "41_50.json",
  "51_60.json",
];

function words(s) {
  return (s || "").replace(/\*\*[A-E]\)[^*]*\*\*\s+\((true|false)\)/i, "").split(/\s+/).filter(Boolean).length;
}

const out = [];
for (const f of files) {
  const arr = JSON.parse(readFileSync(new URL("./" + f, import.meta.url), "utf8"));
  for (const t of arr) {
    const ans = (t.solution_overview || "").split("**Answer.**").pop()?.trim() || "";
    out.push({
      file: f,
      id: t.id,
      title: t.title,
      context: t.context,
      table: t.tables_markdown || "",
      statements: t.statements,
      keys: t.answer_key,
      answer: ans,
      wc: (t.tactical_explanations || []).map(words),
    });
  }
}
writeFileSync(new URL("./_expand_dump.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log("tasks", out.length);
for (const t of out) console.log(t.id, t.wc.join("/"), "|", t.answer.slice(0, 80));
