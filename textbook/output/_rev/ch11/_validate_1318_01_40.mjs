import fs from "fs";
import path from "path";

const files = ["01_10.json", "11_20.json", "21_30.json", "31_40.json"];
const letters = "ABCDE";
const issues = [];
let n = 0;
let skipped = 0;

const gold11 = JSON.parse(
  fs.readFileSync("textbook/output/_rev/ch11/01_10.json", "utf8")
).find((t) => t.id === "math-11-1");
if (!gold11.solution_overview.startsWith("A print shop deposits")) {
  issues.push("math-11-1 overview changed");
}
if (!gold11.tactical_explanations[0].includes("A nominal quote with")) {
  issues.push("math-11-1 A changed");
}

for (const f of files) {
  const fp = path.join("textbook/output/_rev/ch11", f);
  const raw = fs.readFileSync(fp, "utf8");
  if (!raw.endsWith("\n")) issues.push(f + " missing trailing newline");
  const arr = JSON.parse(raw);
  const round = JSON.stringify(arr, null, 2) + "\n";
  if (round !== raw) issues.push(f + " not JSON.stringify exact");
  for (const t of arr) {
    if (t.id === "math-11-1") {
      skipped++;
      continue;
    }
    n++;
    const joined = t.solution_overview + "\n" + t.tactical_explanations.join("\n");
    if (/Part 1|Part 2|Part 3/.test(t.solution_overview)) issues.push(t.id + " overview has Part");
    if (/the overview already|from Part [A-E]|as shown above|the solution gives/i.test(joined)) {
      issues.push(t.id + " banned pointer");
    }
    if (/[\u2013\u2014]/.test(joined)) issues.push(t.id + " em/en dash in edited fields");
    if (joined.includes("${")) issues.push(t.id + " has ${");
    if (t.tactical_explanations.length !== 5) issues.push(t.id + " not 5 letters");
    t.tactical_explanations.forEach((e, i) => {
      const L = letters[i];
      const v = t.answer_key[i] ? "true" : "false";
      const stmt = t.statements[i];
      const headed = /[.!?]$/.test(stmt) ? stmt : stmt + ".";
      const header = `**${L}) ${headed}**  (${v})`;
      if (!e.startsWith(header)) {
        issues.push(`${t.id} ${L} header mismatch\n  want: ${header.slice(0, 100)}\n  got:  ${e.split("\n")[0].slice(0, 100)}`);
      }
      const closer = t.answer_key[i] ? "so the statement is True." : "so the statement is False.";
      if (!e.includes(closer)) issues.push(`${t.id} ${L} missing closer`);
    });
    const disp = (t.solution_overview.match(/\$\$/g) || []).length / 2;
    if (disp < 1) issues.push(t.id + " overview has no displays");
  }
}

console.log("rewritten", n, "skipped", skipped);
console.log("issues", issues.length);
for (const x of issues) console.log(" -", x);
