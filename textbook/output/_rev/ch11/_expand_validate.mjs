import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { wordCount } from "./_expand_apply.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const files = [
  "81_90.json",
  "91_100.json",
  "101_110.json",
  "111_120.json",
  "121_123.json",
];

const issues = [];
let tasks = 0;
let letters = 0;
const rows = [];

for (const file of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  if (!file.endsWith("\n") && !fs.readFileSync(path.join(dir, file), "utf8").endsWith("\n")) {
    issues.push(file + " missing trailing newline");
  }
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  if (!raw.endsWith("\n")) issues.push(file + " missing trailing newline");
  JSON.parse(raw); // already parsed
  for (const t of arr) {
    tasks++;
    if (!/Part 1:/.test(t.solution_overview) || !/Part 2:/.test(t.solution_overview) || !/Part 3:/.test(t.solution_overview)) {
      issues.push(t.id + " overview missing Part headings");
    }
    if (t.tactical_explanations.length !== 5) issues.push(t.id + " not 5 letters");
    const wcs = [];
    t.tactical_explanations.forEach((e, i) => {
      letters++;
      const L = "ABCDE"[i];
      const truth = !!t.answer_key[i];
      const stmt = t.statements[i];
      const header = `**${L}) ${stmt}**  (${truth ? "true" : "false"})`;
      if (!e.startsWith(header)) issues.push(`${t.id} ${L} bad header`);
      const closer = truth ? "so the statement is True." : "so the statement is False.";
      if (!e.includes(closer)) issues.push(`${t.id} ${L} missing closer`);
      const wrong = truth ? "so the statement is False." : "so the statement is True.";
      if (e.includes(wrong)) issues.push(`${t.id} ${L} has opposite closer`);
      if (/[—–]/.test(e)) issues.push(`${t.id} ${L} em/en dash`);
      if (e.includes("${")) issues.push(`${t.id} ${L} \${`);
      const paras = e.split("\n\n").filter(Boolean).length;
      if (paras < 2) issues.push(`${t.id} ${L} single block`);
      wcs.push(wordCount(e));
    });
    const min = Math.min(...wcs);
    const max = Math.max(...wcs);
    rows.push({ id: t.id, wcs, min, max, ratio: (max / min).toFixed(2) });
  }
}

console.log("tasks", tasks, "letters", letters);
console.log("issues", issues.length);
for (const x of issues) console.log("ISSUE", x);
console.log("--- word counts ---");
for (const r of rows) {
  console.log(r.id, r.wcs.join("/"), "min", r.min, "max", r.max, "ratio", r.ratio);
}
const long = rows.flatMap((r) => r.wcs.filter((w) => w >= 350));
const short = rows.flatMap((r) => r.wcs.filter((w) => w < 100));
console.log("letters >=350:", long.length, "letters <100:", short.length);
console.log("min letter", Math.min(...rows.flatMap((r) => r.wcs)));
console.log("max letter", Math.max(...rows.flatMap((r) => r.wcs)));
