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

for (const file of [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-cases-ch13-binomial.json",
  "src/data/math-ch11-financial.ts",
]) {
  const src = fs.readFileSync(file, "utf8");
  const lens = [...src.matchAll(/\$\$([\s\S]*?)\$\$/g)]
    .map((m) => visualLength(m[1]))
    .filter((n) => n > 0)
    .sort((a, b) => a - b);
  if (!lens.length) {
    console.log(`${file}: no displays`);
    continue;
  }
  const at = (p) => lens[Math.floor((lens.length - 1) * p)];
  console.log(
    `${file}: n=${lens.length} median=${at(0.5)} p75=${at(0.75)} p90=${at(0.9)} p99=${at(0.99)} max=${lens.at(-1)}`,
  );
}
