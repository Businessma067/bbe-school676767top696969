import fs from "fs";

const files = ["81_90.json", "91_100.json", "101_110.json", "111_120.json", "121_123.json"];
const frozen = JSON.parse(fs.readFileSync(new URL("../ch11_frozen.json", import.meta.url), "utf8"));
const byId = new Map(frozen.map((t) => [t.id, t]));
const keys = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];
const forbidden = [
  "Part 1:",
  "Part 2:",
  "Part 3:",
  "Building the model",
  "**Answer.**",
  "so the statement is True.",
  "so the statement is False.",
  "The recovered law is",
  "—",
  "–",
  "${",
];

let bad = 0;
let count = 0;
const openings = [];
const letterStarts = new Map();
const noFrac = [];
const sameLen = [];
const samples = [];

function wordsOutsideMath(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]+\$/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(new URL(f, import.meta.url), "utf8"));
  for (const t of data) {
    count++;
    const old = byId.get(t.id);
    if (!old) {
      console.log("MISSING FROZEN", t.id);
      bad++;
      continue;
    }
    for (const k of keys) {
      if (JSON.stringify(old[k] ?? null) !== JSON.stringify(t[k] ?? null)) {
        console.log("CHANGED", t.id, k);
        bad++;
      }
    }
    const ov = t.solution_overview;
    openings.push([t.id, ov.split("\n")[0].slice(0, 80)]);
    for (const n of forbidden) {
      if (ov.includes(n)) {
        console.log("OV FORBID", t.id, JSON.stringify(n));
        bad++;
      }
    }
    if (!ov.includes("\\frac")) noFrac.push(t.id);
    const lens = [];
    for (let i = 0; i < 5; i++) {
      const tex = t.tactical_explanations[i];
      const want = `**${"ABCDE"[i]}.** → ${t.answer_key[i] ? "True" : "False"}`;
      if (!tex.startsWith(want)) {
        console.log("HEADER", t.id, i, tex.slice(0, 40));
        bad++;
      }
      for (const n of forbidden) {
        if (tex.includes(n)) {
          console.log("T FORBID", t.id, "ABCDE"[i], JSON.stringify(n));
          bad++;
        }
      }
      const start = tex.split("\n").filter(Boolean)[1] || "";
      const key = start.slice(0, 55);
      if (!letterStarts.has(key)) letterStarts.set(key, []);
      letterStarts.get(key).push(`${t.id} ${"ABCDE"[i]}`);
      lens.push(wordsOutsideMath(tex));
    }
    if (new Set(lens).size === 1) sameLen.push([t.id, lens]);
    samples.push({
      id: t.id,
      ovWords: wordsOutsideMath(ov),
      letterWords: lens,
      letterHasDisplay: t.tactical_explanations.map((x) => x.includes("$$")),
    });
  }
}

console.log("tasks", count, "frozen_bad", bad);
console.log("no \\frac in overview:", noFrac.join(", ") || "none");
console.log("same letter lengths:", sameLen.length ? sameLen : "none");
console.log("--- openings ---");
for (const [id, o] of openings) console.log(id, o);
console.log("--- dup letter starts (2+) ---");
for (const [k, v] of letterStarts) {
  if (v.length > 1) console.log(v.join(", "), "::", k);
}
console.log("--- short vs long ---");
for (const s of samples.filter((x) => ["math-11-81", "math-11-108", "math-11-115"].includes(x.id))) {
  console.log(s);
}
