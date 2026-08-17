import fs from "node:fs";
import { execFileSync } from "node:child_process";
import katex from "katex";

const FILES = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-ch11-financial.ts",
];

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

/**
 * Only `$$` delimiters, whitespace and the `, \qquad` glue inserted between
 * joined equations may differ from the committed version.
 */
const skeleton = (s) =>
  s
    .replace(/\$\$/g, "")
    .replace(/\s+/g, "")
    .replace(/,\\{1,2}qquad/g, "");

let failures = 0;
const widest = [];

for (const file of FILES) {
  const after = fs.readFileSync(file, "utf8");
  const before = execFileSync("git", ["show", `HEAD:${file}`], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });

  if (skeleton(before) !== skeleton(after)) {
    console.log(`FAIL ${file}: content changed beyond delimiters/whitespace`);
    failures += 1;
  }

  const displays = [...after.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => m[1].trim());
  const inlineDollars = displays.filter((body) => body.includes("$"));
  if (inlineDollars.length) {
    console.log(`FAIL ${file}: ${inlineDollars.length} display bodies contain a stray '$'`);
    failures += 1;
  }

  let parseErrors = 0;
  for (const body of displays) {
    try {
      katex.renderToString(unescape(body), { displayMode: true, throwOnError: true, strict: false });
    } catch (error) {
      parseErrors += 1;
      if (parseErrors <= 3) console.log(`  KaTeX ${file}: ${unescape(body).slice(0, 90)} -> ${error.message.slice(0, 90)}`);
    }
    widest.push({ file, body: unescape(body), width: visualLength(body) });
  }
  if (parseErrors) failures += 1;
  console.log(`${file}: ${displays.length} displays, ${parseErrors} KaTeX errors`);
}

widest.sort((a, b) => b.width - a.width);
console.log("\nwidest displays now:");
for (const d of widest.slice(0, 8)) console.log(`  ${d.width}  ${d.body.slice(0, 100)}`);

process.exit(failures ? 1 : 0);
