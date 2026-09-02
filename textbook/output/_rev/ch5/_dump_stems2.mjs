import { readFileSync, writeFileSync } from "fs";

const files = [
  "01_10.json",
  "11_20.json",
  "21_30.json",
  "31_40.json",
  "41_50.json",
  "51_60.json",
];

let md = "";
for (const f of files) {
  const arr = JSON.parse(readFileSync(new URL("./" + f, import.meta.url), "utf8"));
  for (const t of arr) {
    if (t.id === "math-5-1") continue;
    const ans = (t.solution_overview || "").split("**Answer.**").pop()?.trim() || "";
    md += `\n## ${t.id} | ${t.title}\n`;
    md += `CTX: ${t.context}\n`;
    if (t.tables_markdown) md += `TBL:\n${t.tables_markdown}\n`;
    md += `ANS: ${ans}\n`;
    t.statements.forEach((s, i) => {
      md += `${"ABCDE"[i]} (${t.answer_key[i] ? "T" : "F"}): ${s}\n`;
    });
    md += "\n";
  }
}
writeFileSync(new URL("./_expand_stems.txt", import.meta.url), md);
console.log("wrote stems", md.length);
