import fs from "node:fs";

const mathSpans = (value) => {
  const spans = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(value))) spans.push(m[1]);
  const rest = value.replace(/\$\$[\s\S]*?\$\$/g, " ");
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(rest))) spans.push(m[1]);
  return spans;
};

const report = (label, text) => {
  let braced = 0;
  let plain = 0;
  for (const span of mathSpans(text)) {
    braced += (span.match(/\d\{,\}\d{3}/g) ?? []).length;
    plain += (span.match(/\d,\d{3}/g) ?? []).length;
  }
  console.log(`${label}: braced {,} = ${braced}, plain comma = ${plain}`);
};

const ch13 = fs.readFileSync("src/data/math-cases-ch13-binomial.json", "utf8");
report("ch13 (13.18 house style)", JSON.parse(ch13).map?.((c) => JSON.stringify(c)).join("\n") ?? ch13);
for (const [label, path] of [
  ["ch5", "src/data/math-ch5-linear-equations.ts"],
  ["ch8", "src/data/math-ch8-power-functions.ts"],
  ["ch1", "src/data/math-ch1-logic.ts"],
  ["ch11 file", "src/data/math-ch11-financial.ts"],
]) {
  report(label, fs.readFileSync(path, "utf8").replace(/\\\\/g, "\\"));
}
