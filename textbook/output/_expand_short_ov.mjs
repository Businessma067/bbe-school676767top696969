import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let src = fs.readFileSync(path, "utf8");

function span(caseId) {
  const caseIdx = src.indexOf("case_id: `" + caseId + "`");
  const nextCase = src.indexOf("\n  {\n    id:", caseIdx + 1);
  const blockEnd = nextCase < 0 ? src.length : nextCase;
  const key = "solution_overview: `";
  const soIdx = src.indexOf(key, caseIdx);
  const contentStart = soIdx + key.length;
  const closeMatch = /`\s*,\s*\n\s*\}/.exec(src.slice(contentStart, blockEnd));
  const contentEnd = contentStart + closeMatch.index;
  return { contentStart, contentEnd, old: src.slice(contentStart, contentEnd) };
}

function set(caseId, ov) {
  const { contentStart, contentEnd, old } = span(caseId);
  const nl = old.includes("\r\n") ? "\r\n" : "\n";
  ov = ov.replace(/\r?\n/g, nl);
  if (!ov.endsWith(nl)) ov += nl;
  src = src.slice(0, contentStart) + ov + src.slice(contentEnd);
}

// Fix 108 step 3 math delimiters using tokens from current text
{
  let ov = span("MATH 11.108").old.replace(/\r?\n$/, "");
  const d = ov.match(/\\+\$/)[0];
  const p = ov.match(/\\+%/)[0];
  const approx = ov.match(/\\+approx/)[0];
  const nl = ov.includes("\r\n") ? "\r\n" : "\n";

  // Replace broken step 3
  const step3Start = ov.indexOf("**3.**");
  const step3 =
    `**3.** Principal repaid: $${d}30,200.80$ ($${approx} 15.10${p}$ of original — not more than $25${p}$). Interest in first $5$ years $${approx} ${d}55,770.92$; full-term interest $${approx} ${d}143,886.91$ (not $${d}120,000.00$).`
      .replace(`($${approx} `, `($${approx} `) // ($\\approx
      .replace(`years $${approx} ${d}`, `years $${approx} ${d}`)
      .replace(`interest $${approx} ${d}`, `interest $${approx} ${d}`);

  // Desired exact step 3 matching Ch13 style like original:
  const step3Good = `**3.** Principal repaid: $${d}30,200.80$ ($${approx} 15.10${p}$ of original — not more than $25${p}$). Interest in first $5$ years $${approx} ${d}55,770.92$; full-term interest $${approx} ${d}143,886.91$ (not $${d}120,000.00$).`;

  // Manual correct version:
  const step3Final = `**3.** Principal repaid: $${d}30,200.80$ ($${approx} 15.10${p}$ of original — not more than $25${p}$). Interest in first $5$ years $${approx} ${d}55,770.92$; full-term interest $${approx} ${d}143,886.91$ (not $${d}120,000.00$).`;

  // Looking at original HEAD style from earlier peek:
  // Principal repaid in $5$ years: $\\$30,200.80$ ($\\approx 15.10\\%$ of original — not more than $25\\%$).
  // Interest in the first $5$ years $\\approx \\$55,770.92$; full-term interest $\\approx \\$143,886.91$ (not $\\$120,000.00$).
  const step3Correct =
    `**3.** Principal repaid: $${d}30,200.80$ ($${approx} 15.10${p}$ of original — not more than $25${p}$). ` +
    `Interest in first $5$ years $${approx} ${d}55,770.92$; full-term interest $${approx} ${d}143,886.91$ (not $${d}120,000.00$).`;

  // Build with explicit concatenation to avoid template $$ confusion:
  const s3 =
    "**3.** Principal repaid: $" +
    d +
    "30,200.80$ ($" +
    approx +
    " 15.10" +
    p +
    "$ of original — not more than $25" +
    p +
    "$). Interest in first $5$ years $" +
    approx +
    " " +
    d +
    "55,770.92$; full-term interest $" +
    approx +
    " " +
    d +
    "143,886.91$ (not $" +
    d +
    "120,000.00$).";

  ov = ov.slice(0, step3Start) + s3;
  set("MATH 11.108", ov);
  console.log("108 len", span("MATH 11.108").old.length);
  console.log(span("MATH 11.108").old.slice(span("MATH 11.108").old.indexOf("**3.**")));
}

{
  const cur = span("MATH 11.109").old;
  const d = cur.match(/\\+\$/)[0];
  const approx = cur.match(/\\+approx/)[0];
  const nl = cur.includes("\r\n") ? "\r\n" : "\n";
  // Use same ln escape as other tasks in file - from 11.34 style
  const sample = span("MATH 11.34").old;
  const ln = sample.match(/\\+ln/)[0];

  const body = [
    "A manufacturing company borrows " + d + "120,000 at 14% annual interest and chooses to repay a fixed " + d + "25,000 at the end of each year, continuing until the loan is retired, with a final smaller payment to clear whatever balance remains.",
    "",
    "**Part 1: Setup.**",
    "",
    "$K = " + d + "120,000$; $r = 0.14$; fixed annual payment $a = " + d + "25,000$",
    "",
    "**Part 2: Formula.**",
    "",
    "Smallest integer $n \\ge [" + ln + " a - " + ln + "(a-rK)]/" + ln + "(1+r)$",
    "",
    "After $m = n-1$ full payments, compare loan FV $K(1+r)^{m}$ to payments FV $(a/r)[(1+r)^{m}-1]$ and roll the residual forward one year for the final payment",
    "",
    "**Part 3: Solve.**",
    "",
    "**1.** Threshold " + approx + " 8.508, so $n = 9$ ($8$ full payments plus a smaller $9$th).",
    "",
    "**2.** After $8$ years: loan FV " + approx + " " + d + "342,310.37$; payments FV " + approx + " " + d + "330,819.00$; remaining " + approx + " " + d + "11,491.37$; final payment " + approx + " " + d + "13,100.16$.",
    "",
    "**3.** Total paid " + approx + " " + d + "213,100.16$; true interest " + approx + " " + d + "93,100.16$ (not $" + d + "105,000$). Treating all nine as full $" + d + "25,000$ payments overstates the total by about $" + d + "11,900$ (more than $" + d + "10,000$).",
  ];

  // Fix ge escape - use double backslash like file
  body[8] = "Smallest integer $n \\\\ge [" + ln + " a - " + ln + "(a-rK)]/" + ln + "(1+r)$";
  // Wait - in JS string "\\\\ge" is two backslashes + ge. File needs two backslashes. Good.
  // But ln from file already has correct number of backslashes.

  // Fix math wrapping for approx lines - put $ around approx expressions like original
  body[14] = "**1.** Threshold $" + approx + " 8.508$, so $n = 9$ ($8$ full payments plus a smaller $9$th).";
  body[16] =
    "**2.** After $8$ years: loan FV $" +
    approx +
    " " +
    d +
    "342,310.37$; payments FV $" +
    approx +
    " " +
    d +
    "330,819.00$; remaining $" +
    approx +
    " " +
    d +
    "11,491.37$; final payment $" +
    approx +
    " " +
    d +
    "13,100.16$.";
  body[18] =
    "**3.** Total paid $" +
    approx +
    " " +
    d +
    "213,100.16$; true interest $" +
    approx +
    " " +
    d +
    "93,100.16$ (not $" +
    d +
    "105,000$). Treating all nine as full $" +
    d +
    "25,000$ payments overstates the total by about $" +
    d +
    "11,900$ (more than $" +
    d +
    "10,000$).";

  set("MATH 11.109", body.join(nl));
  console.log("109 len", span("MATH 11.109").old.length);
  console.log(span("MATH 11.109").old);
}

fs.writeFileSync(path, src);

// Audit + tactical dup check for edited hard tasks
const edited = [
  "MATH 11.34","MATH 11.40","MATH 11.77","MATH 11.78","MATH 11.80","MATH 11.96","MATH 11.97","MATH 11.98","MATH 11.99","MATH 11.100",
  "MATH 11.107","MATH 11.108","MATH 11.109","MATH 11.110","MATH 11.111","MATH 11.112","MATH 11.113","MATH 11.122",
];

function blockFor(id) {
  const i = src.indexOf("case_id: `" + id + "`");
  const j = src.indexOf("\n  {\n    id:", i + 1);
  return src.slice(i, j < 0 ? src.length : j);
}

console.log("\nTactical near-dup check (overview sentence reused in a tactical):");
for (const id of edited) {
  const block = blockFor(id);
  const ov = block.match(/solution_overview: `([\s\S]*?)`/)[1];
  const tacMatch = block.match(/tactical_explanations: \[([\s\S]*?)\],\s*\n\s*difficulty_level/);
  if (!tacMatch) continue;
  const tacs = tacMatch[1];
  // take a distinctive mid sentence from overview Part 3
  const sentences = ov.split(/\.\s+/).map((s) => s.trim()).filter((s) => s.length > 80);
  let hits = 0;
  for (const s of sentences.slice(0, 5)) {
    const needle = s.slice(0, 60);
    if (needle && tacs.includes(needle)) hits++;
  }
  if (hits >= 2) console.log(id, "possible overlap hits", hits);
}
console.log("(none listed means no strong overlap)");

const tasks = [];
const idRe = /case_id: `([^`]+)`/g;
let mm;
const starts = [];
while ((mm = idRe.exec(src)) !== null) starts.push({ id: mm[1], index: mm.index });
for (let i = 0; i < starts.length; i++) {
  const end = i + 1 < starts.length ? starts[i + 1].index : src.length;
  const block = src.slice(starts[i].index, end);
  const diff = block.match(/difficulty_level: `([^`]+)`/);
  if (!diff || (diff[1] !== "4/5" && diff[1] !== "5/5")) continue;
  const ov = block.match(/solution_overview: `([\s\S]*?)`/)[1];
  tasks.push({ id: starts[i].id, diff: diff[1], len: ov.length, answer: /\*\*Answer\.\*\*/.test(ov) });
}
const fives = tasks.filter((t) => t.diff === "5/5");
console.log("\nStill over:", tasks.filter((t) => (t.diff === "4/5" && t.len > 1450) || (t.diff === "5/5" && t.len > 1600)).length);
console.log("Max 5/5:", Math.max(...fives.map((t) => t.len)));
console.log("Answers left:", tasks.filter((t) => t.answer).length);
console.log(
  "All hard:",
  tasks
    .sort((a, b) => b.len - a.len)
    .map((t) => t.id.replace("MATH ", "") + ":" + t.len)
    .join(", ")
);
