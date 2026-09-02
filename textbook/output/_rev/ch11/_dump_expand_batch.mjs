import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const files = ["41_50", "51_60", "61_70", "71_80"];
const letters = "ABCDE";

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(new URL(`./${f}.json`, import.meta.url), "utf8"));
  console.log("\n\n========== FILE", f, "==========");
  for (const t of arr) {
    console.log("\n#####", t.id, t.title);
    console.log("CONTEXT:", t.context);
    t.statements.forEach((s, i) => {
      const w = wc(t.tactical_explanations[i]);
      const key = t.answer_key[i] ? "T" : "F";
      const p = t.tactical_explanations[i].split(/\n\n+/).length;
      console.log(`\n--- ${letters[i]} ${key} ${w}w ${p}p ---`);
      console.log("STMT:", s);
    });
    console.log("\nOVERVIEW:\n", t.solution_overview);
  }
}
