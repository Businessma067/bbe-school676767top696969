/**
 * Ch.6 slot plan — proportional by textbook volume + formula weight.
 * Total ~625. Halves interleaved (not text-then-table blocks).
 *
 * Counts:
 *   6.5 160  analysis/ratios (formula-heavy)
 *   6.2 150  P&L, cash flow, depreciation (formula medium-high)
 *   6.1 130  balance sheet basics (some equity ratio)
 *   6.3 125  reading statements (margins / interpretation)
 *   6.4  60  types of accounting (conceptual; half-page)
 *
 * Within each: ~40% text / ~60% table; TRUE 1..5 even; difficulty placeholders mixed
 * (run `python3 scripts/recalibrate-economics-difficulty.py` after case text exists).
 */
import fs from "node:fs";

function shuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function truePositions(trueCount, rng) {
  const idxs = shuffle([0, 1, 2, 3, 4], rng);
  const set = new Set(idxs.slice(0, trueCount));
  return [0, 1, 2, 3, 4].map((i) => set.has(i));
}

/** ~40% text, rest table — exact counts that sum to n */
function halfTags(n, rng) {
  const textN = Math.round(n * 0.4);
  const tags = [...Array(textN).fill("text"), ...Array(n - textN).fill("table")];
  return shuffle(tags, rng);
}

function buildSub(sub, count, seedOffset) {
  const rng = mulberry32(Number(sub.replace(".", "")) * 7919 + seedOffset);
  const perTrue = count / 5;
  if (perTrue !== Math.floor(perTrue)) {
    throw new Error(`${sub} count ${count} not divisible by 5`);
  }
  const trueCounts = shuffle(
    [
      ...Array(perTrue).fill(1),
      ...Array(perTrue).fill(2),
      ...Array(perTrue).fill(3),
      ...Array(perTrue).fill(4),
      ...Array(perTrue).fill(5),
    ],
    rng,
  );
  const hard = Math.floor(count / 2);
  const soft = count - hard;
  const diffs = shuffle(
    [
      ...Array(hard).fill("5/5"),
      ...Array(Math.floor(soft / 3)).fill("2/5"),
      ...Array(Math.floor(soft / 3)).fill("3/5"),
      ...Array(soft - 2 * Math.floor(soft / 3)).fill("4/5"),
    ],
    rng,
  );
  const halves = halfTags(count, rng);

  return trueCounts.map((tc, i) => ({
    case_id: `CASE ${sub}.${String(i + 1).padStart(3, "0")}`,
    subsection: sub,
    half: halves[i],
    trueCount: tc,
    answer_key: truePositions(tc, rng),
    difficulty_level: diffs[i],
  }));
}

/** Volume + formula weight (6.5/6.2 heaviest; 6.4 lightest). */
const COUNTS = {
  "6.5": 160,
  "6.2": 150,
  "6.1": 130,
  "6.3": 125,
  "6.4": 60,
};

const SUBS = ["6.1", "6.2", "6.3", "6.4", "6.5"];
const out = {};
let total = 0;

for (const sub of SUBS) {
  out[sub] = buildSub(sub, COUNTS[sub], 41);
  total += out[sub].length;
  const halves = { text: 0, table: 0 };
  const td = {};
  let maxRun = 1;
  let run = 1;
  for (let i = 1; i < out[sub].length; i++) {
    if (out[sub][i].half === out[sub][i - 1].half) {
      run++;
      maxRun = Math.max(maxRun, run);
    } else run = 1;
  }
  for (const s of out[sub]) {
    halves[s.half]++;
    td[s.trueCount] = (td[s.trueCount] || 0) + 1;
  }
  console.log(sub, "n=" + out[sub].length, halves, "TRUE", td, "maxSameHalfRun", maxRun);
}

console.log("TOTAL", total);
fs.writeFileSync("scripts/ch6-slot-plan.json", JSON.stringify(out, null, 2) + "\n");
fs.writeFileSync(
  "scripts/ch6-counts.json",
  JSON.stringify({ total, counts: COUNTS, mix: "40% text / 60% table interleaved" }, null, 2) + "\n",
);
