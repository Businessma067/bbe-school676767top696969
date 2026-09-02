import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

for (const f of ["61_70", "71_80"]) {
  const arr = JSON.parse(
    fs.readFileSync(new URL(`./${f}.json`, import.meta.url), "utf8")
  );
  console.log("\n====", f, "====");
  for (const t of arr) {
    console.log("\n", t.id, t.title);
    t.statements.forEach((s, i) => {
      const n = wc(t.tactical_explanations[i]);
      console.log(`  ${"ABCDE"[i]} (${n}w) ${t.answer_key[i] ? "T" : "F"} ${s.slice(0, 110)}`);
    });
  }
}
