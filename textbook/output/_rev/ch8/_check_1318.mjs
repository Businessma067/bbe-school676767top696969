import fs from "fs";

const files = ["01_10.json", "11_20.json", "21_30.json", "31_40.json", "41_50.json"];
const letters = "ABCDE";
let tasks = 0;
let patched = 0;
const issues = [];

for (const f of files) {
  const txt = fs.readFileSync(f, "utf8");
  const arr = JSON.parse(txt);
  if (!txt.endsWith("\n")) issues.push(f + " missing trailing newline");
  for (const t of arr) {
    tasks += 1;
    if (t.id === "math-8-1") {
      if (!String(t.solution_overview).includes("cube resin block")) {
        issues.push("math-8-1 overview changed");
      }
      continue;
    }
    patched += 1;
    const ov = t.solution_overview || "";
    const ex = t.tactical_explanations || [];
    const blob = ov + "\n" + ex.join("\n");
    if (ex.length !== 5) issues.push(t.id + " letters=" + ex.length);
    if (/Part [123]/.test(ov)) issues.push(t.id + " overview has Part");
    if (/the overview already/i.test(blob)) issues.push(t.id + " overview already");
    if (/[—–]/.test(blob)) issues.push(t.id + " dash");
    if (/\$\{/.test(blob)) issues.push(t.id + " interpol");
    if (/\*\*Answer\.\*\*/.test(ov)) issues.push(t.id + " Answer line");
    for (let i = 0; i < 5; i += 1) {
      const e = ex[i] || "";
      const want = t.answer_key[i] ? "True" : "False";
      const hdr = "**" + letters[i] + ".** → " + want;
      if (!e.startsWith(hdr)) {
        issues.push(t.id + " " + letters[i] + " header: " + e.slice(0, 40));
      }
      if (!e.trim().endsWith("so the statement is " + want + ".")) {
        issues.push(t.id + " " + letters[i] + " closer: " + JSON.stringify(e.trim().slice(-70)));
      }
    }
  }
}

console.log("tasks", tasks, "patched", patched, "issues", issues.length);
for (const x of issues) console.log(" -", x);
