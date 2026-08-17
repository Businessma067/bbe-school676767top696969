import { BATCH } from "./_ch8_add_51_60.mjs";

const letters = ["A", "B", "C", "D", "E"];
const expectedDiff = ["2/5", "4/5", "3/5", "5/5", "1/5", "3/5", "4/5", "2/5", "5/5", "1/5"];
const expectedTruth = [2, 4, 3, 1, 5, 2, 4, 1, 3, 5];
const issues = [];

const countDollars = (s) => (s.match(/\$/g) || []).length;
const displayMathCount = (s) => (s.match(/\$\$/g) || []).length / 2;

console.log(`BATCH length: ${BATCH.length}`);
if (BATCH.length !== 10) issues.push(`expected 10 tasks, got ${BATCH.length}`);

BATCH.forEach((t, i) => {
  const n = 51 + i;
  const prefix = `8.${n}`;
  if (t.id !== `math-8-${n}`) issues.push(`${prefix}: bad id ${t.id}`);
  if (t.case_id !== `MATH 8.${n}`) issues.push(`${prefix}: bad case_id ${t.case_id}`);
  if (t.sort_order !== n) issues.push(`${prefix}: bad sort_order ${t.sort_order}`);
  if (t.difficulty_level !== expectedDiff[i]) issues.push(`${prefix}: diff ${t.difficulty_level} != ${expectedDiff[i]}`);
  if ("subsection" in t) issues.push(`${prefix}: has subsection`);
  if (!t.context.endsWith(" Evaluate each statement. Mark it TRUE or FALSE.")) {
    issues.push(`${prefix}: context ending mismatch`);
  }
  for (const field of ["statements", "answer_key", "tactical_explanations"]) {
    if (!Array.isArray(t[field]) || t[field].length !== 5) {
      issues.push(`${prefix}: ${field} length ${t[field]?.length}`);
    }
  }
  const truths = t.answer_key.filter(Boolean).length;
  if (truths !== expectedTruth[i]) issues.push(`${prefix}: truth count ${truths} != ${expectedTruth[i]}`);

  if (typeof t.solution_overview !== "string" || t.solution_overview.length < 900) {
    issues.push(`${prefix}: solution_overview len ${t.solution_overview?.length}`);
  }
  for (const tag of ["**Part 1:**", "**Part 2:**", "**Part 3:**", "**Answer.**"]) {
    if (!t.solution_overview.includes(tag)) issues.push(`${prefix}: missing ${tag}`);
  }
  if (countDollars(t.solution_overview) % 2) issues.push(`${prefix}: odd $ in overview`);

  t.tactical_explanations.forEach((ex, j) => {
    const want = t.answer_key[j] ? "True" : "False";
    const header = `**${letters[j]}.** → ${want}`;
    if (!ex.startsWith(header)) issues.push(`${prefix}${letters[j]}: header want "${header}" got "${ex.slice(0, 40)}"`);
    if (/This claim/i.test(ex)) issues.push(`${prefix}${letters[j]}: contains This claim`);
    if (ex.includes("${")) issues.push(`${prefix}${letters[j]}: contains \${`);
    if (ex.length < 500) issues.push(`${prefix}${letters[j]}: len ${ex.length} < 500`);
    const dm = displayMathCount(ex);
    if (dm < 2) issues.push(`${prefix}${letters[j]}: display math blocks ${dm} < 2`);
    if (countDollars(ex) % 2) issues.push(`${prefix}${letters[j]}: odd $ count`);
    const endOk = /so the statement is (True|False)\.$/.test(ex.trim());
    if (!endOk) issues.push(`${prefix}${letters[j]}: missing closing so the statement is ...`);
    const endWord = ex.trim().match(/so the statement is (True|False)\.$/)?.[1];
    if (endWord && endWord !== want) issues.push(`${prefix}${letters[j]}: end verdict ${endWord} != ${want}`);
  });

  for (const s of t.statements) {
    if (countDollars(s) % 2) issues.push(`${prefix}: odd $ in statement: ${s.slice(0, 60)}`);
  }
  if (countDollars(t.context) % 2) issues.push(`${prefix}: odd $ in context`);
  if (countDollars(t.title) % 2) issues.push(`${prefix}: odd $ in title`);
});

console.log("\nSummary:");
BATCH.forEach((t, i) => {
  const truths = t.answer_key.map((b) => (b ? "T" : "F")).join("");
  const ov = t.solution_overview.length;
  const expl = t.tactical_explanations.map((e) => e.length).join(",");
  console.log(
    `  ${t.case_id} diff=${t.difficulty_level} key=${truths} overview=${ov} expl=[${expl}]`
  );
});

if (issues.length) {
  console.log("\nISSUES:");
  issues.forEach((x) => console.log(" -", x));
  process.exitCode = 1;
} else {
  console.log("\nALL CHECKS PASSED");
}
