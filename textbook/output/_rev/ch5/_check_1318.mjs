import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const files = ["01_10.json", "11_20.json", "21_30.json", "31_40.json", "41_50.json", "51_60.json"];

const issues = [];
let patched = 0;
let gold = 0;

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  for (const t of arr) {
    if (t.id === "math-5-1") {
      gold++;
      const h = t.tactical_explanations[0];
      if (!h.startsWith("**A) The North depot currently holds 360 crates.**  (true)")) {
        issues.push("gold header drifted");
      }
      continue;
    }
    patched++;
    const ov = t.solution_overview || "";
    if (/Part [123]:/.test(ov) || ov.includes("**Answer.")) issues.push(`${t.id} old overview`);
    if (ov.includes("the overview already")) issues.push(`${t.id} ov pointer`);
    if (ov.includes("\u2014") || ov.includes("\u2013")) issues.push(`${t.id} ov dash`);
    if (ov.includes("${")) issues.push(`${t.id} ov \${`);
    if (t.tactical_explanations.length !== 5) issues.push(`${t.id} letter count`);
    for (let i = 0; i < 5; i++) {
      const L = "ABCDE"[i];
      const body = t.tactical_explanations[i];
      const want = t.answer_key[i] ? "true" : "false";
      const header = `**${L}) ${t.statements[i]}**  (${want})`;
      if (!body.startsWith(header)) {
        issues.push(`${t.id} ${L} header\n  want ${header.slice(0, 90)}\n  got  ${body.slice(0, 90)}`);
      }
      if (/\.\.\*\*/.test(body.slice(0, header.length + 5))) issues.push(`${t.id} ${L} double period`);
      const close = t.answer_key[i] ? "so the statement is True." : "so the statement is False.";
      if (!body.includes(close)) issues.push(`${t.id} ${L} closer`);
      const after = body.slice(header.length);
      if (after.includes("the overview already")) issues.push(`${t.id} ${L} pointer`);
      if (after.includes("\u2014") || after.includes("\u2013")) issues.push(`${t.id} ${L} dash`);
      if (after.includes("${")) issues.push(`${t.id} ${L} \${`);
    }
  }
}

console.log("patched", patched, "gold", gold, "issues", issues.length);
for (const x of issues.slice(0, 30)) console.log(" -", x);
