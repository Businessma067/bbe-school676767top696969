/**
 * Validate mock-exam-demo-sourced.json tactical_explanations headers
 * match answer_key (True/False) for economics + math.
 *
 * Usage: node scripts/validate-demo-tactical-headers.cjs
 */
const fs = require("fs");
const path = require("path");

const PATH = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "mock-exam-demo-sourced.json",
);

const data = JSON.parse(fs.readFileSync(PATH, "utf8"));
const LETTERS = ["A", "B", "C", "D", "E"];
const errors = [];
let checked = 0;

for (const subject of ["economics", "math"]) {
  for (const task of data[subject] || []) {
    const cid = task.case_id;
    const keys = task.answer_key || [];
    const expls = task.tactical_explanations || [];
    if (keys.length !== 5 || expls.length !== 5) {
      errors.push(`${cid}: expected 5 keys/expls, got ${keys.length}/${expls.length}`);
      continue;
    }
    for (let i = 0; i < 5; i++) {
      checked++;
      const want = keys[i] ? "True" : "False";
      const header = `**${LETTERS[i]}.** → ${want}`;
      const expl = expls[i] || "";
      if (!expl.startsWith(header)) {
        errors.push(
          `${cid} ${LETTERS[i]}: expected header ${JSON.stringify(header)}, got ${JSON.stringify(expl.slice(0, 40))}`,
        );
      }
      if ((expl.match(/\$\$/g) || []).length % 2 !== 0) {
        errors.push(`${cid} ${LETTERS[i]}: unbalanced $$`);
      }
    }
  }
}

if (errors.length) {
  console.error(`FAIL: ${errors.length} issue(s) across ${checked} letters`);
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}

console.log(`OK: ${checked} headers match answer_key (economics + math)`);
