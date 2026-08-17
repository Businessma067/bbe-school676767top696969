/**
 * Pass 2: strip **Answer.** from all 4/5 and 5/5 overviews;
 * expand a few over-trimmed overviews toward soft floor.
 * Overviews are exact source strings (double-backslash escapes).
 */
import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let src = fs.readFileSync(path, "utf8");

function findOverviewSpan(caseId) {
  const caseMarker = "case_id: `" + caseId + "`";
  const caseIdx = src.indexOf(caseMarker);
  if (caseIdx < 0) throw new Error("case not found: " + caseId);
  const nextCase = src.indexOf("\n  {\n    id:", caseIdx + 1);
  const blockEnd = nextCase < 0 ? src.length : nextCase;
  const key = "solution_overview: `";
  const soIdx = src.indexOf(key, caseIdx);
  if (soIdx < 0 || soIdx > blockEnd) throw new Error("overview not in block: " + caseId);
  const contentStart = soIdx + key.length;
  const closeRe = /`\s*,\s*\n\s*\}/;
  const closeMatch = closeRe.exec(src.slice(contentStart, blockEnd));
  if (!closeMatch) throw new Error("close not found: " + caseId);
  return {
    contentStart,
    contentEnd: contentStart + closeMatch.index,
    old: src.slice(contentStart, contentStart + closeMatch.index),
  };
}

function setOverview(caseId, newOverview) {
  const { contentStart, contentEnd, old } = findOverviewSpan(caseId);
  const usesCRLF = old.includes("\r\n");
  let ov = newOverview;
  if (usesCRLF) ov = ov.replace(/\r?\n/g, "\r\n");
  else ov = ov.replace(/\r\n/g, "\n");
  if (usesCRLF && !ov.endsWith("\r\n")) ov += "\r\n";
  else if (!usesCRLF && !ov.endsWith("\n")) ov += "\n";
  src = src.slice(0, contentStart) + ov + src.slice(contentEnd);
  return { oldLen: old.length, newLen: ov.length };
}

// Collect hard tasks
const hardIds = [];
{
  const idRe = /case_id: `([^`]+)`/g;
  let m;
  const starts = [];
  while ((m = idRe.exec(src)) !== null) starts.push({ id: m[1], index: m.index });
  for (let i = 0; i < starts.length; i++) {
    const end = i + 1 < starts.length ? starts[i + 1].index : src.length;
    const block = src.slice(starts[i].index, end);
    const diff = block.match(/difficulty_level: `([^`]+)`/);
    if (diff && (diff[1] === "4/5" || diff[1] === "5/5")) hardIds.push(starts[i].id);
  }
}

let answerStripped = 0;
for (const id of hardIds) {
  const { old } = findOverviewSpan(id);
  if (!/\*\*Answer\.\*\*/.test(old)) continue;
  const cleaned = old.replace(/\r?\n\*\*Answer\.\*\*[^\r\n]*/g, "");
  if (cleaned !== old) {
    setOverview(id, cleaned.replace(/\r?\n$/, ""));
    answerStripped++;
    console.log("Stripped Answer from", id, old.length, "→", findOverviewSpan(id).old.length);
  }
}

// Expand over-trimmed ones: take current and add a bit of decisive detail
// Built from CURRENT file content (already correct escapes) via mutation helpers.

function expand(id, transform) {
  const { old } = findOverviewSpan(id);
  const next = transform(old.replace(/\r?\n$/, ""));
  setOverview(id, next);
  console.log("Expanded", id, old.length, "→", findOverviewSpan(id).old.length);
}

expand("MATH 11.108", (ov) =>
  ov.replace(
    "**Part 1: Setup.**\n\n$K = \\\\$200,000$; nominal $6\\\\%$ monthly; $n = 240$ months; $m = 60$ payments already made",
    "**Part 1: Setup.**\n\n$K = \\\\$200,000$; nominal annual rate $6\\\\%$, compounding monthly\n\nTerm = $20$ years ($n = 240$ monthly payments); $m = 60$ payments already made"
  ).replace(
    "**1.** $r = 0.005$; $a \\\\approx \\\\\$1,432.86$; remaining balance after $60$ payments $\\\\approx \\\\\$169,799.20$.\n\n**2.** Principal repaid in $5$ years: $\\\\\$30,200.80$ ($\\\\approx 15.10\\\\%$ of original — not more than $25\\\\%$).\n\n**3.** Interest in the first $5$ years $\\\\approx \\\\\$55,770.92$; full-term interest $\\\\approx \\\\\$143,886.91$ (not $\\\\\$120,000.00$).",
    "**1.** $r = 0.005$; $a = 1,000/[1-(1.005)^{-240}] \\\\approx \\\\\$1,432.86$.\n\n**2.** Remaining balance after $60$ payments: $(1,432.86/0.005)[1-(1.005)^{-180}] \\\\approx \\\\\$169,799.20$.\n\n**3.** Principal repaid: $\\\\\$30,200.80$ ($\\\\approx 15.10\\\\%$ of original — not more than $25\\\\%$). Interest in first $5$ years $\\\\approx \\\\\$55,770.92$; full-term interest $\\\\approx \\\\\$143,886.91$ (not $\\\\\$120,000.00$)."
  )
);

expand("MATH 11.109", (ov) =>
  ov.replace(
    "**Part 2: Formula.**\n\nSmallest integer $n \\\\ge [\\\\ln a - \\\\ln(a-rK)]/\\\\ln(1+r)$; compare loan FV to payment FV after $n-1$ years to isolate the final payment",
    "**Part 2: Formula.**\n\nSmallest integer $n \\\\ge [\\\\ln a - \\\\ln(a-rK)]/\\\\ln(1+r)$\n\nAfter $m = n-1$ full payments, compare $K(1+r)^{m}$ to $(a/r)[(1+r)^{m}-1]$ and roll the residual forward one year for the final payment"
  ).replace(
    "Treating all nine payments as full $\\\\\$25,000$ overstates the total by about $\\\\\$11,900$.",
    "Treating all nine as full $\\\\\$25,000$ payments overstates the total by about $\\\\\$11,900$ (more than $\\\\\$10,000$)."
  )
);

expand("MATH 11.122", (ov) =>
  ov.replace(
    "$a_0 = -\\\\\$50,000$ (both); Option 1: $a_i = \\\\$6,000$ forever; Option 2: $a_1 = a_2 = \\\\$6,000$",
    "$a_0 = -\\\\\$50,000$ (both options)\n\nOption 1: $a_i = \\\\$6,000$ each year forever; Option 2: $a_1 = a_2 = \\\\$6,000$ ($n = 2$)"
  ).replace(
    "Option $2$ reduces to $3s^{2} + 3s - 25 = 0$",
    "Option $2$: $6,000s^{2} + 6,000s - 50,000 = 0$ reduces to $3s^{2} + 3s - 25 = 0$"
  )
);

expand("MATH 11.34", (ov) =>
  ov.replace(
    "so a crossover is guaranteed.\n",
    "so a crossover is guaranteed; beyond that point A stays ahead.\n"
  )
);

expand("MATH 11.99", (ov) =>
  ov.replace(
    "**1.** $P_{\\\\mathrm{due}} = \\\\\$18,110.94$; $F_{\\\\mathrm{due}} = \\\\\$26,610.90$ (not $\\\\\$27,610.90$).",
    "**1.** Ordinary PV $\\\\\$16,769.39$ lifts to $P_{\\\\mathrm{due}} = \\\\\$18,110.94$; $F_{\\\\mathrm{due}} = \\\\\$26,610.90$ (not $\\\\\$27,610.90$)."
  ).replace(
    "Perpetuity $P = \\\\\$37,500.00$ — more than double the lease present value, and larger than the continuous result (not smaller).",
    "Perpetuity $P = 3,000/0.08 = \\\\\$37,500.00$ — more than double the lease PV, and larger than the continuous result (not smaller)."
  )
);

fs.writeFileSync(path, src);

// Final audit
const tasks = [];
{
  const idRe = /case_id: `([^`]+)`/g;
  let m;
  const starts = [];
  while ((m = idRe.exec(src)) !== null) starts.push({ id: m[1], index: m.index });
  for (let i = 0; i < starts.length; i++) {
    const end = i + 1 < starts.length ? starts[i + 1].index : src.length;
    const block = src.slice(starts[i].index, end);
    const diff = block.match(/difficulty_level: `([^`]+)`/);
    if (!diff || (diff[1] !== "4/5" && diff[1] !== "5/5")) continue;
    const ov = block.match(/solution_overview: `([\s\S]*?)`/);
    if (!ov) continue;
    tasks.push({
      id: starts[i].id,
      diff: diff[1],
      len: ov[1].length,
      answer: /\*\*Answer\.\*\*/.test(ov[1]),
    });
  }
}

const over = tasks.filter(
  (t) => (t.diff === "4/5" && t.len > 1450) || (t.diff === "5/5" && t.len > 1600)
);
const fives = tasks.filter((t) => t.diff === "5/5");
console.log("\nAnswer lines remaining in hard overviews:", tasks.filter((t) => t.answer).length);
console.log("Still over cap:", over.length);
over.forEach((t) => console.log(t.diff, t.len, t.id));
console.log("Max 5/5 overview length:", Math.max(...fives.map((t) => t.len)));
console.log("Answer strips this pass:", answerStripped);
console.log(
  "Hard overview lengths:",
  tasks
    .sort((a, b) => b.len - a.len)
    .map((t) => `${t.id}:${t.len}`)
    .join(", ")
);
