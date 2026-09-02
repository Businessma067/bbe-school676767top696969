import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const files = ["41_50", "51_60", "61_70", "71_80"];
let tasks = 0;
const issues = [];

for (const f of files) {
  const p = new URL(`./${f}.json`, import.meta.url);
  const raw = fs.readFileSync(p, "utf8");
  if (!raw.endsWith("}\n]\n") && !raw.endsWith("}\n]")) {
    // ok if pretty printed
  }
  const arr = JSON.parse(raw);
  const round = JSON.stringify(arr, null, 2) + "\n";
  if (raw !== round) {
    fs.writeFileSync(p, round);
    console.log("restringified", f);
  } else {
    console.log("already stringify form", f);
  }
  tasks += arr.length;
  for (const t of arr) {
    for (let i = 0; i < 5; i++) {
      const e = t.tactical_explanations[i];
      if (e.includes("\\,")) issues.push(`${t.id} ${"ABCDE"[i]} COMMA`);
      if (e.includes("\\n\\nso the") || e.includes("\\nso the")) {
        issues.push(`${t.id} ${"ABCDE"[i]} LITERAL_N`);
      }
      if (e.includes("${")) issues.push(`${t.id} ${"ABCDE"[i]} DOL`);
      if (e.includes("\u2014") || e.includes("\u2013")) {
        issues.push(`${t.id} ${"ABCDE"[i]} DASH`);
      }
    }
  }
}

const a41 = JSON.parse(
  fs.readFileSync(new URL("./41_50.json", import.meta.url), "utf8")
);
const a71 = JSON.parse(
  fs.readFileSync(new URL("./71_80.json", import.meta.url), "utf8")
);
const t41 = a41.find((t) => t.id === "math-11-41");
const t73 = a71.find((t) => t.id === "math-11-73");

console.log("\nTASKS", tasks);
console.log("math-11-41", t41.tactical_explanations.map(wc).join(", "));
console.log("math-11-73", t73.tactical_explanations.map(wc).join(", "));
console.log("ISSUES", issues.length);
for (const x of issues) console.log(x);
