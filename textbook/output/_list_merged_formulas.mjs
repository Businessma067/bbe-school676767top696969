import fs from "node:fs";
import { execFileSync } from "node:child_process";

const FILES = [
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch11-financial.ts",
];

const unescape = (s) => s.replace(/\\\\/g, "\\");
const bodies = (src) => [...src.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => unescape(m[1].trim()));

const merged = [];
for (const file of FILES) {
  const before = new Set(
    bodies(execFileSync("git", ["show", `HEAD:${file}`], { encoding: "utf8", maxBuffer: 64e6 })),
  );
  for (const body of bodies(fs.readFileSync(file, "utf8"))) {
    if (!before.has(body)) merged.push(body);
  }
}

const unique = [...new Set(merged)].sort((a, b) => b.length - a.length);
fs.writeFileSync("textbook/output/_merged_formulas.json", JSON.stringify(unique, null, 2));
console.log(`${unique.length} distinct merged formulas; longest source length ${unique[0].length}`);
for (const f of unique.slice(0, 5)) console.log("  " + f);
