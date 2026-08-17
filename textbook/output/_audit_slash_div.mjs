import fs from "node:fs";

const files = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-ch11-financial.ts",
];

function stripFracs(tex) {
  let prev;
  let out = tex;
  do {
    prev = out;
    out = out.replace(/\\frac\{[^{}]*\}\{[^{}]*\}/g, "F");
  } while (out !== prev);
  return out;
}

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const re = /\$\$([\s\S]*?)\$\$|\$([^$\n]+?)\$/g;
  let match;
  let hits = 0;
  const samples = [];
  while ((match = re.exec(source))) {
    const tex = match[1] ?? match[2];
    if (!tex) continue;
    const stripped = stripFracs(tex)
      .replace(/https?:\/\//g, "")
      .replace(/\\\\/g, "");
    const hasSlash = /[0-9A-Za-z)}\]]\s*\/\s*[0-9A-Za-z({\\-\\]/.test(stripped);
    const hasDiv = /\\div/.test(tex) || /÷/.test(tex);
    if (hasSlash || hasDiv) {
      hits += 1;
      if (samples.length < 10) {
        samples.push(tex.replace(/\s+/g, " ").slice(0, 120));
      }
    }
  }
  // Also prose with $... / ...$ already counted. Count raw \\div and ÷ outside.
  const divCount = (source.match(/\\div/g) || []).length;
  const unicodeDiv = (source.match(/÷/g) || []).length;
  console.log(file, "math_hits", hits, "\\div", divCount, "÷", unicodeDiv);
  for (const sample of samples) console.log(" ", sample);
}
