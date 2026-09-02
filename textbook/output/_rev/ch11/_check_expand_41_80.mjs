import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const letters = "ABCDE";
const files = ["41_50", "51_60", "61_70", "71_80"];
let issues = [];

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(new URL(`./${f}.json`, import.meta.url), "utf8"));
  console.log("\n====", f, "tasks", arr.length, "====");
  for (const t of arr) {
    const counts = t.tactical_explanations.map(wc);
    const paras = t.tactical_explanations.map((e) => e.split(/\n\n+/).length);
    console.log(t.id, counts.join(","), "p", paras.join(","));
    for (let i = 0; i < 5; i++) {
      const e = t.tactical_explanations[i];
      const stmt = t.statements[i];
      const key = t.answer_key[i];
      const want = `**${letters[i]}) ${stmt}**  (${key ? "true" : "false"})`;
      if (!e.startsWith(want)) issues.push(`${t.id} ${letters[i]} HEADER`);
      const close = key ? "so the statement is True." : "so the statement is False.";
      if (!e.trim().endsWith(close)) issues.push(`${t.id} ${letters[i]} CLOSER`);
      if (e.includes("\u2014") || e.includes("\u2013")) issues.push(`${t.id} ${letters[i]} DASH`);
      if (e.includes("${")) issues.push(`${t.id} ${letters[i]} DOL`);
    }
  }
}
console.log("\nISSUES", issues.length);
for (const x of issues.slice(0, 40)) console.log(x);
