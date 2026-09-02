import fs from "fs";
import { words } from "./_expand_apply.mjs";

const files = ["01_10.json", "11_20.json", "21_30.json", "31_40.json", "41_50.json"];
const letters = "ABCDE";
let patched = 0;
let skipped = 0;
const issues = [];
const rows = [];

for (const f of files) {
  const txt = fs.readFileSync(new URL("./" + f, import.meta.url), "utf8");
  if (!txt.endsWith("\n")) issues.push(f + " missing newline");
  const arr = JSON.parse(txt);
  JSON.parse(JSON.stringify(arr));
  for (const t of arr) {
    const ov = t.solution_overview || "";
    if (!/Part 1/.test(ov) || !/Part 2/.test(ov) || !/Part 3/.test(ov)) {
      issues.push(t.id + " overview missing Part");
    }
    if (t.id === "math-8-1") {
      skipped += 1;
      if (!/cube resin block/.test(ov)) issues.push("math-8-1 overview changed");
      rows.push({ id: t.id, wc: t.tactical_explanations.map(words), skip: true });
      continue;
    }
    patched += 1;
    const ex = t.tactical_explanations || [];
    const wc = ex.map(words);
    const blob = ex.join("\n");
    if (ex.length !== 5) issues.push(t.id + " letters=" + ex.length);
    if (/[—–]/.test(blob)) issues.push(t.id + " dash");
    if (/\$\{/.test(blob)) issues.push(t.id + " interpol");
    if (/\$\{/.test(ov)) issues.push(t.id + " ov interpol");
    for (let i = 0; i < 5; i++) {
      const e = ex[i] || "";
      const want = t.answer_key[i] ? "True" : "False";
      const hdr = "**" + letters[i] + ".** → " + want;
      if (!e.startsWith(hdr)) issues.push(t.id + " " + letters[i] + " header");
      if (!e.trim().endsWith("so the statement is " + want + ".")) {
        issues.push(t.id + " " + letters[i] + " closer");
      }
    }
    const min = Math.min(...wc);
    const max = Math.max(...wc);
    rows.push({ id: t.id, wc, spread: max - min, min, max });
  }
}

console.log("patched", patched, "skipped", skipped, "issues", issues.length);
for (const x of issues) console.log("ISSUE", x);
console.log("--- counts ---");
for (const r of rows) {
  console.log(r.id, r.wc.join("/"), r.skip ? "GOLD" : "spread " + r.spread);
}
const all = rows.filter((r) => !r.skip).flatMap((r) => r.wc);
console.log("letter min/median/max", Math.min(...all), all.sort((a, b) => a - b)[Math.floor(all.length / 2)], Math.max(...all));
console.log("tasks with spread<80", rows.filter((r) => !r.skip && r.spread < 80).map((r) => r.id).join(" "));
