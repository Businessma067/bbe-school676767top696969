import fs from "node:fs";

const unescape = (s) => s.replace(/\\\\/g, "\\");
const visualLength = (raw) =>
  unescape(raw)
    .replace(/\\(?:left|right|bigl|bigr|Bigl|Bigr)\b/g, "")
    .replace(/\\(?:qquad|quad|,|;|:|!)/g, " ")
    .replace(/\\frac/g, "/")
    .replace(/\\[a-zA-Z]+/g, "x")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim().length;

const CONTINUATION = /^(?:=|<|>|\\(?:approx|le|leq|ge|geq|ne|neq|Rightarrow|to|equiv)\b)/;

const file = process.argv[2] ?? "src/data/math-ch11-financial.ts";
const src = fs.readFileSync(file, "utf8");

// Collect displays with their source offsets, then group consecutive ones.
const displays = [...src.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => ({
  start: m.index,
  end: m.index + m[0].length,
  body: m[1].trim(),
}));

const runs = [];
let current = [displays[0]];
for (let i = 1; i < displays.length; i += 1) {
  const gap = src.slice(displays[i - 1].end, displays[i].start);
  if (/^(?:[ \t]*(?:\r?\n|\\n)[ \t]*)+$/.test(gap)) current.push(displays[i]);
  else {
    if (current.length > 1) runs.push(current);
    current = [displays[i]];
  }
}
if (current.length > 1) runs.push(current);

const reasons = new Map();
const examples = [];
for (const run of runs) {
  for (let i = 1; i < run.length; i += 1) {
    const a = run[i - 1].body;
    const b = run[i].body;
    let reason;
    if (/\\tag|\\begin|\\\\/.test(unescape(a) + unescape(b))) reason = "tag/env/linebreak";
    else if (!CONTINUATION.test(unescape(b))) reason = "not a continuation";
    else {
      const total = visualLength(a) + 1 + visualLength(b);
      reason = total <= 70 ? `fits<=70 (${total})` : `too long (${total})`;
    }
    reasons.set(reason.replace(/\s*\(\d+\)$/, ""), (reasons.get(reason.replace(/\s*\(\d+\)$/, "")) ?? 0) + 1);
    if (reason.startsWith("fits") && examples.length < 15) {
      examples.push(`${reason}: ${unescape(a)}  ||  ${unescape(b)}`);
    }
  }
}

console.log(`${file}: ${runs.length} consecutive-display runs`);
for (const [reason, n] of [...reasons].sort((x, y) => y[1] - x[1])) console.log(`  ${reason}: ${n}`);
console.log("\nstill-joinable pairs (limit 70):");
for (const e of examples) console.log("  " + e);
