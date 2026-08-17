import fs from "fs";
import { execSync } from "child_process";

const path = "src/data/math-ch11-financial.ts";
let src = fs.readFileSync(path, "utf8");
const head = execSync("git show HEAD:src/data/math-ch11-financial.ts", {
  encoding: "utf8",
  maxBuffer: 50e6,
});

function span(caseId, source = src) {
  const caseIdx = source.indexOf("case_id: `" + caseId + "`");
  const nextCase = source.indexOf("\n  {\n    id:", caseIdx + 1);
  const blockEnd = nextCase < 0 ? source.length : nextCase;
  const key = "solution_overview: `";
  const soIdx = source.indexOf(key, caseIdx);
  const contentStart = soIdx + key.length;
  const closeMatch = /`\s*,\s*\n\s*\}/.exec(source.slice(contentStart, blockEnd));
  const contentEnd = contentStart + closeMatch.index;
  return { contentStart, contentEnd, old: source.slice(contentStart, contentEnd), blockStart: caseIdx, blockEnd };
}

function set(caseId, ov) {
  const { contentStart, contentEnd, old } = span(caseId);
  const nl = old.includes("\r\n") ? "\r\n" : "\n";
  ov = ov.replace(/\r?\n/g, nl);
  if (!ov.endsWith(nl)) ov += nl;
  src = src.slice(0, contentStart) + ov + src.slice(contentEnd);
}

// Clean 108 rewrite
{
  const sample = span("MATH 11.108").old;
  const d = sample.match(/\\+\$/)[0];
  const p = sample.match(/\\+%/)[0];
  const approx = sample.match(/\\+approx/)[0];
  const nl = sample.includes("\r\n") ? "\r\n" : "\n";

  const ov = [
    "A family takes out a " + d + "200,000 home mortgage at a nominal annual interest rate of 6%, compounding monthly, to be repaid with equal payments at the end of each month over 20 years. After making exactly 5 years of payments, they want to know how much principal is still outstanding.",
    "",
    "**Part 1: Setup.**",
    "",
    "$K = " + d + "200,000$; nominal annual rate $6" + p + "$, compounding monthly",
    "",
    "Term = $20$ years ($n = 240$ monthly payments); $m = 60$ payments already made",
    "",
    "**Part 2: Formula.**",
    "",
    "Monthly rate $r = 0.06/12$; payment $a = rK/[1-(1+r)^{-n}]$",
    "",
    "Outstanding balance after $m$ payments: $(a/r)[1-(1+r)^{-(n-m)}]$",
    "",
    "**Part 3: Solve.**",
    "",
    "**1.** $r = 0.005$; $a = 1,000/[1-(1.005)^{-240}] " + approx + " " + d + "1,432.86$.",
    "",
    "**2.** Remaining balance after $60$ payments: $(1,432.86/0.005)[1-(1.005)^{-180}] " + approx + " " + d + "169,799.20$.",
    "",
    "**3.** Principal repaid: $" + d + "30,200.80$ ($" + approx + " 15.10" + p + "$ of original — not more than $25" + p + "$). Interest in first $5$ years $" + approx + " " + d + "55,770.92$; full-term interest $" + approx + " " + d + "143,886.91$ (not $" + d + "120,000.00$).",
  ].join(nl);

  set("MATH 11.108", ov);
  console.log("108 →", span("MATH 11.108").old.length);
  console.log(span("MATH 11.108").old);
}

// Verify statements/answer_key unchanged ignoring CRLF
let stmtDiff = 0;
let keyDiff = 0;
const idRe = /case_id: `([^`]+)`/g;
let m;
while ((m = idRe.exec(src)) !== null) {
  const id = m[1];
  const curB = span(id, src);
  const headB = span(id, head);
  const curBlock = src.slice(curB.blockStart, curB.blockEnd).replace(/\r\n/g, "\n");
  const headBlock = head.slice(headB.blockStart, headB.blockEnd).replace(/\r\n/g, "\n");
  const diff = curBlock.match(/difficulty_level: `([^`]+)`/);
  if (!diff || (diff[1] !== "4/5" && diff[1] !== "5/5")) continue;
  const curKey = curBlock.match(/answer_key: (\[[^\]]+\])/)[1];
  const headKey = headBlock.match(/answer_key: (\[[^\]]+\])/)[1];
  const curSt = curBlock.match(/statements: \[([\s\S]*?)\],\s*\n\s*answer_key/)[1];
  const headSt = headBlock.match(/statements: \[([\s\S]*?)\],\s*\n\s*answer_key/)[1];
  if (curKey !== headKey) keyDiff++;
  if (curSt !== headSt) stmtDiff++;
}
console.log("answer_key diffs (CRLF-normalized):", keyDiff);
console.log("statements diffs (CRLF-normalized):", stmtDiff);

fs.writeFileSync(path, src);

// Final summary vs HEAD for substantive trims only (>100 chars)
const hard = [];
const starts = [];
idRe.lastIndex = 0;
while ((m = idRe.exec(src)) !== null) starts.push(m[1]);
for (const id of starts) {
  const curB = span(id, src).old;
  const headB = span(id, head).old;
  const block = src.slice(src.indexOf("case_id: `" + id + "`"), src.indexOf("\n  {\n    id:", src.indexOf("case_id: `" + id + "`") + 1) || src.length);
  // simpler diff lookup
  const i = src.indexOf("case_id: `" + id + "`");
  const j = src.indexOf("\n  {\n    id:", i + 1);
  const bl = src.slice(i, j < 0 ? src.length : j);
  const dmatch = bl.match(/difficulty_level: `([^`]+)`/);
  if (!dmatch || (dmatch[1] !== "4/5" && dmatch[1] !== "5/5")) continue;
  hard.push({
    id,
    diff: dmatch[1],
    headLen: headB.length,
    curLen: curB.length,
    trimmed: headB.length - curB.length,
  });
}
const big = hard.filter((t) => t.trimmed > 100);
const fives = hard.filter((t) => t.diff === "5/5");
console.log("\nSubstantive trims (>100 chars):", big.length);
console.log("Total chars trimmed (all hard vs HEAD):", hard.reduce((s, t) => s + Math.max(0, t.trimmed), 0));
console.log("Max 5/5:", Math.max(...fives.map((t) => t.curLen)));
console.log("Over cap:", hard.filter((t) => (t.diff === "4/5" && t.curLen > 1450) || (t.diff === "5/5" && t.curLen > 1600)).length);
big.sort((a, b) => b.trimmed - a.trimmed).forEach((t) => console.log(t.diff, t.id, t.headLen, "→", t.curLen, "(−" + t.trimmed + ")"));
