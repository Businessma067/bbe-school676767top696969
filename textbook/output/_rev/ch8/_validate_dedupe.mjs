import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

const files = [
  "01_10.json", "11_20.json", "21_30.json", "31_40.json", "41_50.json",
  "51_60.json", "61_70.json", "71_80.json", "81_90.json", "91_97.json",
];

const FROZEN = [
  "id", "case_id", "title", "context", "statements", "answer_key",
  "difficulty_level", "sort_order", "tables_markdown", "figure", "subsection",
];

const bannedCloser = /so the statement is (True|False)|hence the statement (holds|fails)|matches the claim|as claimed|The claim names/i;
const em = /[\u2013\u2014]/;
const dollarBrace = /\$\{/;

let tasks = 0;
const issues = [];

for (const f of files) {
  const origPath = path.join(dir, f);
  const arr = JSON.parse(fs.readFileSync(origPath, "utf8"));
  for (const t of arr) {
    tasks++;
    const ov = t.solution_overview || "";
    const first = ov.split(/\n\n/)[0];
    if (!first.startsWith("**Part")) {
      issues.push(`${t.id}: overview does not start with Part after strip: ${first.slice(0, 80)}`);
    }
    if (!ov.includes("**Answer.**")) issues.push(`${t.id}: missing Answer line`);
    if (!ov.includes("**Part 1")) issues.push(`${t.id}: missing Part 1`);
    if (em.test(ov)) issues.push(`${t.id}: em/en dash in overview`);
    if (dollarBrace.test(ov)) issues.push(`${t.id}: \${ in overview`);
    if (bannedCloser.test(ov)) issues.push(`${t.id}: banned closer in overview`);

    const expl = t.tactical_explanations || [];
    if (expl.length !== 5) issues.push(`${t.id}: ${expl.length} letters`);
    expl.forEach((e, i) => {
      const want = t.answer_key[i] ? "True" : "False";
      const m = e.match(/^\*\*([A-E])\.\*\* → (True|False)/);
      if (!m) issues.push(`${t.id} ${"ABCDE"[i]}: bad header`);
      else if (m[2] !== want) issues.push(`${t.id} ${m[1]}: header ${m[2]} vs key ${want}`);
      if (bannedCloser.test(e)) issues.push(`${t.id} ${"ABCDE"[i]}: banned closer`);
      if (em.test(e)) issues.push(`${t.id} ${"ABCDE"[i]}: em/en dash`);
      if (dollarBrace.test(e)) issues.push(`${t.id} ${"ABCDE"[i]}: \${ `);
      const body = e.replace(/^\*\*[A-E]\.\*\* → (?:True|False)\n\n/, "");
      const sents = body.split(/(?<=[.!?])\s+(?=[A-Z$\\])/).filter(Boolean);
      if (sents.length < 3) issues.push(`${t.id} ${"ABCDE"[i]}: thin (${sents.length} sents)`);
    });
  }
}

console.log("tasks", tasks, "issues", issues.length);
issues.slice(0, 80).forEach((x) => console.log(x));
if (issues.length > 80) console.log("..." + (issues.length - 80) + " more");
