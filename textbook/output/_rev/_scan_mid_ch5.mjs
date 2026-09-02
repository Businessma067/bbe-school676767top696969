import fs from "fs";
import path from "path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const raw = fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5.json"), "utf8");
const idx = JSON.parse(raw.slice(0, raw.lastIndexOf("]") + 1));

function words(s) {
  return s
    .replace(/^\*\*[A-E]\)[\s\S]*?\*\*\s+\((true|false)\)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

const cache = new Map();
const rows = [];
for (const e of idx) {
  const file = e.file.replace(/\\/g, "/");
  if (!cache.has(file)) {
    cache.set(file, JSON.parse(fs.readFileSync(path.join(root, file), "utf8")));
  }
  const t = cache.get(file).find((x) => x.id === e.id);
  const w = words(t.tactical_explanations[e.idx]);
  rows.push({ n: e.n, id: e.id, letter: e.letter, orig: e.words, now: w });
}

const under120 = rows.filter((r) => r.now < 120);
const under160 = rows.filter((r) => r.now < 160);
console.log("entries", rows.length);
console.log("now >= 120", rows.filter((r) => r.now >= 120).length);
console.log("remaining under 120", under120.length);
for (const r of under120) console.log("U120", r.id, r.letter, r.now, "orig", r.orig);
console.log("now under 160", under160.length);
for (const r of under160) console.log("U160", r.id, r.letter, r.now);
console.log("min", Math.min(...rows.map((r) => r.now)), "max", Math.max(...rows.map((r) => r.now)));
