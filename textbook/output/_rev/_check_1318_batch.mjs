import fs from "fs";
import path from "path";

const files = [
  "ch1/01_10.json",
  "ch1/03_12.json",
  "ch1/08_17.json",
  "ch1/09_18.json",
  "ch1/11_20.json",
];

const letters = "ABCDE";
const banned = [
  /the overview already/i,
  /from Part [A-E]/i,
  /as shown above/i,
  /the solution gives/i,
  /from Part 1/i,
  /\*\*Watch/i,
  /\$\{/,
  /\u2014|\u2013/,
  /Part 1|Part 2|Part 3/,
];
const closerRe = /so the statement is (True|False)\.\s*$/;

let bad = 0;
let rewritten = 0;
const issues = [];

for (const rel of files) {
  const fp = path.join("textbook/output/_rev", rel);
  const raw = fs.readFileSync(fp, "utf8");
  if (!raw.endsWith("\n")) issues.push(rel + " missing trailing newline");
  const arr = JSON.parse(raw);
  for (const t of arr) {
    if (t.id === "math-1-1") {
      if (!t.solution_overview.startsWith("Let $A=\\{1,2,3,4,5\\}$")) {
        issues.push("math-1-1 overview changed");
        bad++;
      }
      continue;
    }
    rewritten++;
    const ov = t.solution_overview || "";
    if (/Part 1|Part 2|Part 3/.test(ov)) {
      issues.push(t.id + " overview has Part N");
      bad++;
    }
    if (/\u2014|\u2013/.test(ov) || /\$\{/.test(ov)) {
      issues.push(t.id + " overview dash or ${");
      bad++;
    }
    if (t.tactical_explanations.length !== 5) {
      issues.push(t.id + " letter count " + t.tactical_explanations.length);
      bad++;
    }
    t.tactical_explanations.forEach((e, i) => {
      const want = t.answer_key[i] ? "True" : "False";
      const header = `**${letters[i]}.** → ${want}`;
      if (!e.startsWith(header + "\n\n")) {
        issues.push(`${t.id} ${letters[i]} header got: ${JSON.stringify(e.slice(0, 40))}`);
        bad++;
      }
      if (!closerRe.test(e)) {
        issues.push(`${t.id} ${letters[i]} missing closer`);
        bad++;
      }
      const gotCloser = (e.match(closerRe) || [])[1];
      if (gotCloser && gotCloser !== want) {
        issues.push(`${t.id} ${letters[i]} closer ${gotCloser} vs key ${want}`);
        bad++;
      }
      for (const re of banned) {
        if (re.test(e)) issues.push(`${t.id} ${letters[i]} banned ${re}`);
      }
    });
  }
}

console.log("rewritten", rewritten);
console.log("issues", issues.length);
for (const x of issues) console.log(" ", x);
