import fs from "fs";

const data = JSON.parse(
  fs.readFileSync(new URL("./51_60.json", import.meta.url), "utf8"),
);
const forbidden = [
  "Part 1: Building the system",
  "Part 2: The model",
  "Part 3: Solve",
  "**Answer.**",
  "—",
  "${",
];

for (const t of data) {
  const hits = forbidden.filter((n) => t.solution_overview.includes(n));
  const hasFrac = t.solution_overview.includes("\\frac");
  console.log(
    t.id,
    "len=" + t.solution_overview.length,
    "frac=" + hasFrac,
    "hits=" + (hits.join("|") || "none"),
    "stmts=" + t.statements.length,
    "tact=" + t.tactical_explanations.length,
  );
  for (const [i, x] of t.tactical_explanations.entries()) {
    for (const n of forbidden.slice(0, 4)) {
      if (x.includes(n)) console.log("  tactical", i, n);
    }
  }
}
console.log("count", data.length);
