import fs from "node:fs";

const p = new URL("./51_60.json", import.meta.url);
let raw = fs.readFileSync(p, "utf8");
if (raw.endsWith("]\\n")) {
  raw = raw.slice(0, -2);
}
if (raw.endsWith("]\n\n")) {
  raw = raw.trimEnd() + "\n";
}
// strip accidental trailing \]n
raw = raw.replace(/\]\\n\s*$/, "]\n");

const arr = JSON.parse(raw);
const t60 = arr.find((t) => t.id === "math-11-60");
const d = t60.tactical_explanations[3];
const marker = "not $\\$26,000$, Fifty-five thousand";
const idx = d.indexOf(marker);
if (idx < 0) {
  console.log("marker missing, D tail:", JSON.stringify(d.slice(-400)));
} else {
  t60.tactical_explanations[3] =
    d.slice(0, idx) + "not $\\$26,000$, so the statement is False.";
  console.log("fixed 60 D");
}

for (const id of ["math-11-59"]) {
  const t = arr.find((x) => x.id === id);
  for (let i = 0; i < 5; i++) {
    const e = t.tactical_explanations[i];
    if (e.includes("\\\\,") || e.includes("\\n\\nso the")) {
      console.log("still dirty", id, "ABCDE"[i]);
    }
  }
}

fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
console.log("rewrote 51_60", arr.length);
