import fs from "fs";

const files = ["01_10.json", "11_20.json", "21_30.json", "31_40.json", "41_50.json"];
const issues = [];
let patched = 0;

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(f, "utf8"));
  for (const t of arr) {
    if (t.id === "math-8-1") continue;
    patched += 1;
    const ov = t.solution_overview || "";
    const ex = t.tactical_explanations || [];
    const blob = ov + "\n" + ex.join("\n");
    if (/\\text\{/.test(blob)) issues.push(t.id + " \\text");
    if (/the overview already/i.test(blob)) issues.push(t.id + " overview already");
    if (/[—–]/.test(blob)) issues.push(t.id + " dash");
    if (/\$\{/.test(blob)) issues.push(t.id + " interpol");
    const lens = ex.map((e) => e.length);
    const min = Math.min(...lens);
    const max = Math.max(...lens);
    if (max - min < 40) issues.push(t.id + " letter lengths too similar " + lens.join(","));
    if (!/power/.test(ov.toLowerCase()) && !/exponent/.test(ov.toLowerCase())) {
      issues.push(t.id + " overview missing power/exponent");
    }
  }
}

console.log("patched", patched, "issues", issues.length);
for (const x of issues) console.log(" -", x);
