import fs from "node:fs";

const files = [
  "61_70.json",
  "71_80.json",
  "81_90.json",
  "91_100.json",
  "101_110.json",
  "111_120.json",
  "121_123.json",
];
const frozen = JSON.parse(fs.readFileSync(new URL("../ch11_frozen.json", import.meta.url), "utf8"));
const byId = new Map(frozen.map((t) => [t.id, t]));
const keys = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];
const banned =
  /claim names|matches the claim|as claimed|so the statement is True|so the statement is False|so the statement is true|so the statement is false|hence the statement holds|hence the statement fails/i;
const issues = [];
let tasks = 0;
for (const f of files) {
  const raw = fs.readFileSync(new URL(f, import.meta.url), "utf8");
  if (!raw.endsWith("\n")) issues.push(f + " missing trailing newline");
  if (raw.includes("\u2014") || raw.includes("\u2013")) issues.push(f + " em/en dash");
  const arr = JSON.parse(raw);
  const round = JSON.stringify(arr, null, 2) + "\n";
  if (round !== raw) issues.push(f + " not canonical stringify");
  for (const t of arr) {
    tasks++;
    const old = byId.get(t.id);
    if (!old) issues.push(t.id + " not in frozen");
    else {
      for (const k of keys) {
        if (JSON.stringify(old[k] ?? null) !== JSON.stringify(t[k] ?? null)) {
          issues.push(t.id + " CHANGED " + k);
        }
      }
    }
    if (!t.solution_overview.startsWith("**Part 1:")) issues.push(t.id + " overview not Part 1");
    if ((t.tactical_explanations || []).length !== 5) issues.push(t.id + " not 5 letters");
    if (t.solution_overview.includes("${")) issues.push(t.id + " interpolator in overview");
    t.tactical_explanations.forEach((x, i) => {
      const truth = t.answer_key[i] ? "true" : "false";
      const head = "**" + "ABCDE"[i] + ") " + t.statements[i] + "**  (" + truth + ")";
      if (!x.startsWith(head)) {
        issues.push(t.id + " " + "ABCDE"[i] + " bad header got: " + x.split("\n")[0]);
      }
      if (banned.test(x)) issues.push(t.id + " " + "ABCDE"[i] + " banned closer");
      if (x.includes("${")) issues.push(t.id + " " + "ABCDE"[i] + " interpolator");
      if (x.length < 180) issues.push(t.id + " " + "ABCDE"[i] + " thin " + x.length);
    });
  }
}
console.log("tasks", tasks);
console.log("issues", issues.length);
for (const x of issues.slice(0, 100)) console.log(x);
