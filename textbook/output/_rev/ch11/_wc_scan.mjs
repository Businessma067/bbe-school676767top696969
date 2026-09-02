import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const files = ["41_50", "51_60", "61_70", "71_80"];
const issues = [];

for (const f of files) {
  const arr = JSON.parse(
    fs.readFileSync(new URL(`./${f}.json`, import.meta.url), "utf8")
  );
  console.log("\n====", f, "====");
  for (const t of arr) {
    const counts = t.tactical_explanations.map(wc);
    console.log(t.id, counts.join(","));
    for (let i = 0; i < 5; i++) {
      const e = t.tactical_explanations[i];
      const L = "ABCDE"[i];
      if (e.includes("\\,")) issues.push(`${t.id} ${L} COMMA`);
      if (e.includes("\\n\\nso the statement") || e.includes("\\nso the statement")) {
        issues.push(`${t.id} ${L} LITERAL_N`);
      }
      if (e.includes("\u2014") || e.includes("\u2013")) issues.push(`${t.id} ${L} DASH`);
      if (e.includes("${")) issues.push(`${t.id} ${L} DOL`);
    }
  }
}
console.log("\nISSUES", issues.length);
for (const x of issues) console.log(x);
