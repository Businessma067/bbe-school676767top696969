import fs from "node:fs";

const files = [
  "textbook/output/_rev/ch11/01_10.json",
  "textbook/output/_rev/ch11/11_20.json",
  "textbook/output/_rev/ch11/21_30.json",
  "textbook/output/_rev/ch11/31_40.json",
  "textbook/output/_rev/ch11/41_50.json",
  "textbook/output/_rev/ch11/51_60.json",
];
const banned =
  /The claim names|matches the claim|as claimed|so the statement is True|so the statement is False|so the statement is true|so the statement is false|hence the statement/;
const em = /[\u2013\u2014\u2012\u2015]/;
const issues = [];
let edited = 0;
let skipped = 0;
for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  const arr = JSON.parse(raw);
  if (!raw.endsWith("\n")) issues.push(f + ": no trailing newline");
  if (raw.includes("${")) issues.push(f + ": has dollar-brace");
  for (const t of arr) {
    if (t.id === "math-11-1") {
      skipped++;
      continue;
    }
    edited++;
    const ov = t.solution_overview;
    if (!ov.includes("**Part 1:")) issues.push(t.id + " missing Part 1");
    if (!ov.includes("**Part 2:")) issues.push(t.id + " missing Part 2");
    if (!ov.includes("**Part 3:")) issues.push(t.id + " missing Part 3");
    const first = ov.split("\n\n")[0];
    if (!first.startsWith("**Part 1")) {
      issues.push(t.id + " overview does not start with Part 1: " + first.slice(0, 80));
    }
    if (t.tactical_explanations.length !== 5) issues.push(t.id + " not 5 letters");
    t.tactical_explanations.forEach((e, i) => {
      const want = t.answer_key[i] ? "(true)" : "(false)";
      if (!e.includes(want)) issues.push(t.id + " letter " + i + " missing " + want);
      const stmt = t.statements[i];
      const header = e.split("\n")[0];
      if (!header.includes(stmt.slice(0, 40))) {
        issues.push(t.id + " " + String.fromCharCode(65 + i) + " header mismatch: " + header.slice(0, 90));
      }
      if (banned.test(e)) issues.push(t.id + " " + String.fromCharCode(65 + i) + " banned phrase");
      if (em.test(e) || em.test(ov)) issues.push(t.id + " em/en dash");
      if (e.includes("${") || ov.includes("${")) issues.push(t.id + " dollar-brace");
      const body = e.split("\n").slice(2).join(" ");
      const sents = body
        .replace(/\$\$[\s\S]*?\$\$/g, " MATH ")
        .replace(/\$[^$]+\$/g, " M ")
        .split(/(?<=[.!?])\s+(?=[A-Z])/)
        .map((x) => x.trim())
        .filter(Boolean);
      if (sents.length < 3) {
        issues.push(t.id + " " + String.fromCharCode(65 + i) + " thin (" + sents.length + ") " + body.slice(0, 70));
      }
    });
  }
}
console.log("edited", edited, "skipped", skipped, "issues", issues.length);
issues.slice(0, 100).forEach((x) => console.log(x));
