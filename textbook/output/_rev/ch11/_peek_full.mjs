import fs from "node:fs";

function snippet(id, i, file) {
  const arr = JSON.parse(
    fs.readFileSync(new URL(`./${file}.json`, import.meta.url), "utf8")
  );
  const t = arr.find((x) => x.id === id);
  console.log("====", id, "ABCDE"[i], "====");
  console.log(t.tactical_explanations[i]);
  console.log("\n-- overview tail --");
  console.log(t.solution_overview.slice(-1200));
}

snippet("math-11-63", 4, "61_70");
console.log("\n\n");
snippet("math-11-70", 3, "61_70");
console.log("\n\n");
snippet("math-11-73", 1, "71_80");
