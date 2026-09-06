/**
 * Build shuffled slot plan for Ch.4 banks: 50 cases × 6 subtopics.
 * TRUE counts: exactly 10 of each 1..5, order shuffled.
 * Difficulty placeholders are mixed; after case text exists, run
 * `python3 scripts/recalibrate-economics-difficulty.py` for content-based ratings.
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

const SUBS = ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6"];
const out = {};

for (const sub of SUBS) {
  const seed = Number(sub.replace(".", "")) * 9973;
  const rng = mulberry32(seed);
  const trueCounts = shuffle(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    rng,
  );
  const diffs = shuffle(
    [
      ...Array(25).fill("5/5"),
      ...Array(8).fill("2/5"),
      ...Array(9).fill("3/5"),
      ...Array(8).fill("4/5"),
    ],
    rng,
  );
  out[sub] = trueCounts.map((tc, i) => ({
    case_id: `CASE ${sub}.${String(i + 1).padStart(2, "0")}`,
    subsection: sub,
    trueCount: tc,
    answer_key: truePositions(tc, rng),
    difficulty_level: diffs[i],
  }));
}

fs.writeFileSync("scripts/ch4-slot-plan.json", JSON.stringify(out, null, 2) + "\n");

for (const sub of SUBS) {
  const slots = out[sub];
  const td = {};
  const dd = {};
  for (const s of slots) {
    td[s.trueCount] = (td[s.trueCount] || 0) + 1;
    dd[s.difficulty_level] = (dd[s.difficulty_level] || 0) + 1;
  }
  console.log(sub, "TRUE", td, "DIFF", dd);
}
