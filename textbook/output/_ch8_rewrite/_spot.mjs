import fs from "node:fs";

const all = JSON.parse(fs.readFileSync("textbook/output/_ch8_rewrite/all.json", "utf8"));
const files = fs
  .readdirSync("textbook/output/_ch8_rewrite")
  .filter((f) => f.startsWith("out_") && f.endsWith(".json"));
const patch = {};
for (const f of files) {
  Object.assign(patch, JSON.parse(fs.readFileSync(`textbook/output/_ch8_rewrite/${f}`, "utf8")));
}

const ids = ["math-8-11", "math-8-25", "math-8-44", "math-8-70", "math-8-87"];
for (const id of ids) {
  const t = all.find((x) => x.id === id);
  console.log(`\n======== ${id} ${t.difficulty} ${t.title}`);
  t.statements.forEach((s, i) => {
    const e = patch[id][i];
    const first = (e.split("\n").filter((l) => l.trim() && !l.startsWith("**"))[0] || "(none)");
    console.log(` ${"ABCDE"[i]} [${t.answer_key[i] ? "T" : "F"}] ${s.slice(0, 95)}`);
    console.log(`    open: ${first.slice(0, 160)}`);
    console.log(`    len: ${e.length}`);
  });
}

const scaleStarts = {};
for (const [id, expls] of Object.entries(patch)) {
  for (const e of expls) {
    const first = (e.split("\n").filter((l) => l.trim() && !l.startsWith("**"))[0] || "").slice(0, 55);
    scaleStarts[first] = (scaleStarts[first] || 0) + 1;
  }
}
console.log("\nMost common first sentences:");
Object.entries(scaleStarts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 12)
  .forEach(([k, n]) => console.log(`  ${n}x  ${k}`));
