import fs from "fs";

const files = [
  new URL("./41_50.json", import.meta.url),
  new URL("./51_60.json", import.meta.url),
];
const forbidden = [
  "Part 1:",
  "Part 2:",
  "Part 3:",
  "Building the model",
  "**Answer.**",
  "—",
  "–",
  "${",
  "so the statement is True",
  "so the statement is False",
  "The recovered law is",
];
const letters = ["A", "B", "C", "D", "E"];
let n = 0;
let issues = 0;

function wordCount(s) {
  const prose = s
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]+\$/g, " ")
    .replace(/\*\*[^*]+\*\*/g, " ")
    .replace(/→/g, " ");
  return prose.trim().split(/\s+/).filter(Boolean).length;
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(f, "utf8"));
  n += data.length;
  for (const t of data) {
    if (!t.solution_overview.includes("\\frac")) {
      console.log("NO FRAC", t.id);
      issues++;
    }
    const texts = [t.solution_overview, ...t.tactical_explanations];
    for (const [j, text] of texts.entries()) {
      for (const needle of forbidden) {
        if (text.includes(needle)) {
          console.log("FORBIDDEN", t.id, j, JSON.stringify(needle));
          issues++;
        }
      }
    }
    const lens = [];
    for (let i = 0; i < 5; i++) {
      const want = `**${letters[i]}.** → ${t.answer_key[i] ? "True" : "False"}`;
      if (!t.tactical_explanations[i].startsWith(want)) {
        console.log("HEADER", t.id, letters[i]);
        issues++;
      }
      lens.push(wordCount(t.tactical_explanations[i]));
    }
    console.log(
      t.id,
      "words",
      lens.join("/"),
      "spread",
      Math.max(...lens) - Math.min(...lens),
      "ov",
      t.solution_overview.length,
    );
  }
}
console.log("count", n, "issues", issues);
process.exit(issues ? 1 : 0);
