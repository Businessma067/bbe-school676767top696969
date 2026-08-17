/** Audit Chapter 8 after Priority A/B upgrades. Headers follow MATH 13.18. */
import fs from "fs";

const { BATCH: B01 } = await import("./_ch8_batch_01_05.mjs");
const { BATCH: B06 } = await import("./_ch8_batch_06_20.mjs");
const { BATCH: B21 } = await import("./_ch8_batch_21_35.mjs");
const { BATCH: B36 } = await import("./_ch8_batch_36_50.mjs");

const dir = new URL("./", import.meta.url);
const overrides = [];
for (const f of fs.readdirSync(dir).filter((f) => /^_ch8_ov_.*\.mjs$/.test(f)).sort()) {
  const { BATCH } = await import("./" + f);
  overrides.push(...BATCH);
}
const map = new Map();
for (const t of [...B01, ...B06, ...B21, ...B36, ...overrides]) map.set(t.sort_order, t);
const all = [...map.values()].sort((a, b) => a.sort_order - b.sort_order);

const problems = [];
const letters = ["A", "B", "C", "D", "E"];
const stats = { minExpl: Infinity, minOv: Infinity };

for (const t of all) {
  const where = (m) => problems.push(`${t.case_id}: ${m}`);
  if (t.statements.length !== 5 || t.answer_key.length !== 5 || t.tactical_explanations.length !== 5)
    where("wrong array lengths");
  if (!String(t.context || "").includes("Evaluate each statement. Mark it TRUE or FALSE."))
    where("context missing TRUE/FALSE instruction");

  t.tactical_explanations.forEach((ex, i) => {
    const head = ex.split("\n")[0];
    const m = head.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (!m) return where(`explanation ${letters[i]} header malformed: ${head.slice(0, 90)}`);
    if (m[1] !== letters[i]) where(`explanation ${i} labelled ${m[1]}`);
    if ((m[2] === "True") !== t.answer_key[i]) where(`verdict mismatch in ${letters[i]}`);
    if (ex.length < 400) where(`explanation ${letters[i]} too short (${ex.length})`);
    stats.minExpl = Math.min(stats.minExpl, ex.length);
    if (((ex.match(/\$\$/g) || []).length) % 2) where(`odd $$ in ${letters[i]}`);
    if (((ex.replace(/\$\$/g, "").match(/\$/g) || []).length) % 2) where(`odd $ in ${letters[i]}`);
  });

  const ov = t.solution_overview || "";
  for (const part of ["**Part 1:", "**Part 2:", "**Part 3:", "**Answer.**"])
    if (!ov.includes(part)) where(`overview missing ${part}`);
  if (ov.length < 900) where(`overview too short (${ov.length})`);
  stats.minOv = Math.min(stats.minOv, ov.length);
}

const trueHist = {}, diffHist = {};
for (const t of all) {
  const k = t.answer_key.filter(Boolean).length;
  trueHist[k] = (trueHist[k] || 0) + 1;
  diffHist[t.difficulty_level] = (diffHist[t.difficulty_level] || 0) + 1;
}

console.log("tasks:", all.length);
console.log("trueHist:", trueHist);
console.log("diffHist:", diffHist);
console.log("shortest explanation:", stats.minExpl, "| shortest overview:", stats.minOv);
console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "no problems found");
