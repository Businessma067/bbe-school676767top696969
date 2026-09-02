import fs from "node:fs";

const files = [
  "01_10.json",
  "03_12.json",
  "08_17.json",
  "09_18.json",
  "11_20.json",
  "13_22.json",
  "18_27.json",
  "19_07.json",
  "21_08.json",
  "23_30.json",
  "28_02.json",
];

const BANNED = [
  /The claim names/i,
  /matches the claim/i,
  /as claimed/i,
  /so the statement is True/i,
  /so the statement is False/i,
  /hence the statement holds/i,
  /hence the statement fails/i,
  /so the statement holds/i,
  /so the statement fails/i,
];

const dir = "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/";
let edited = 0;
const issues = [];
const samples = [];

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(dir + f, "utf8"));
  for (const t of arr) {
    if (t.id === "math-1-1") continue;
    edited++;
    if (t.tactical_explanations.length !== 5) issues.push(`${t.id}: not 5 tacticals`);
    for (let i = 0; i < 5; i++) {
      const e = t.tactical_explanations[i];
      const want = t.answer_key[i] ? "True" : "False";
      const head = `**${"ABCDE"[i]}.** → ${want}`;
      if (!e.startsWith(head)) issues.push(`${t.id} ${"ABCDE"[i]}: bad header`);
      for (const re of BANNED) if (re.test(e)) issues.push(`${t.id} ${"ABCDE"[i]}: ${re}`);
      if (e.includes("${")) issues.push(`${t.id} ${"ABCDE"[i]}: \${`);
      if (/[\u2013\u2014\u2018\u2019\u201C\u201D]/.test(e)) issues.push(`${t.id} ${"ABCDE"[i]}: fancy punct`);
    }
    if (/[\u2013\u2014]/.test(t.solution_overview)) issues.push(`${t.id} overview dash`);
    const shapes = t.tactical_explanations.map((e) => {
      const body = e.replace(/^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*/, "");
      return body.split(/\n\n+/).filter(Boolean).length;
    });
    if (new Set(shapes).size === 1) issues.push(`${t.id}: sameShape ${shapes[0]}`);
  }
}

console.log("edited", edited);
console.log("issues", issues.length);
for (const i of issues.slice(0, 80)) console.log(" ", i);

const gold = JSON.parse(fs.readFileSync(dir + "01_10.json", "utf8"));
const t2 = gold.find((x) => x.id === "math-1-2");
console.log("\n--- sample math-1-2 C ---\n");
console.log(t2.tactical_explanations[2]);
