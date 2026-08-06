/**
 * Ch.6 slot plan: 125 cases × 5 subtopics.
 * Part 1 (text):  CASE 6.x.001–050 — 50 per subtopic
 * Part 2 (table): CASE 6.x.051–125 — 75 per subtopic
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
  const perTrue = count / 5;
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
  return trueCounts.map((tc, i) => {
    const n = startIdx + i;
    return {
      case_id: `CASE ${sub}.${String(n).padStart(3, "0")}`,
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
  const text = buildHalf(sub, "text", 1, 50, 11);
  const table = buildHalf(sub, "table", 51, 75, 77);
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
