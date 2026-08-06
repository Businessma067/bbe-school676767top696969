/**
 * Build shuffled slot plan for Ch.6 banks: 150 cases × 5 subtopics.
 * TRUE counts: exactly 30 of each 1..5.
 * Difficulty: 75 × 5/5, and 75 among 2/5, 3/5, 4/5 (25 each).
 * Cases 01–75 = textual half; 76–150 = table/chart half (same schedule rules).
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

function buildHalf(sub, halfTag, startIdx, count, seedOffset) {
  const rng = mulberry32(Number(sub.replace(".", "")) * 7919 + seedOffset);
  const trueCounts = shuffle(
    [
      ...Array(15).fill(1),
      ...Array(15).fill(2),
      ...Array(15).fill(3),
      ...Array(15).fill(4),
      ...Array(15).fill(5),
    ],
    rng,
  );
  const diffs = shuffle(
    [
      ...Array(38).fill("5/5"),
      ...Array(13).fill("2/5"),
      ...Array(12).fill("3/5"),
      ...Array(12).fill("4/5"),
    ],
    rng,
  );
  return trueCounts.map((tc, i) => {
    const n = startIdx + i;
    return {
      case_id: `CASE ${sub}.${String(n).padStart(2, "0")}`,
      subsection: sub,
      half: halfTag,
      trueCount: tc,
      answer_key: truePositions(tc, rng),
      difficulty_level: diffs[i],
    };
  });
}

const SUBS = ["6.1", "6.2", "6.3", "6.4", "6.5"];
const out = {};

for (const sub of SUBS) {
  const text = buildHalf(sub, "text", 1, 75, 11);
  const table = buildHalf(sub, "table", 76, 75, 77);
  out[sub] = [...text, ...table];
}

fs.writeFileSync("scripts/ch6-slot-plan.json", JSON.stringify(out, null, 2) + "\n");

for (const sub of SUBS) {
  const slots = out[sub];
  const td = {};
  const dd = {};
  const halves = { text: 0, table: 0 };
  for (const s of slots) {
    td[s.trueCount] = (td[s.trueCount] || 0) + 1;
    dd[s.difficulty_level] = (dd[s.difficulty_level] || 0) + 1;
    halves[s.half]++;
  }
  console.log(sub, "n=" + slots.length, "halves", halves, "TRUE", td, "DIFF", dd);
}
