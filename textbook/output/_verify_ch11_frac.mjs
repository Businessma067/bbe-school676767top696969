import fs from "fs";
const s = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
console.log({
  diffs: (s.match(/difficulty_level:\s*`\d+\/5`/g) || []).length,
  badComma: (s.match(/\d,\\+frac\{/g) || []).length,
  bareLn: [...s.matchAll(/\\ln\b/g)].filter((m) => s[m.index - 1] !== "\\").length,
  triple: (s.match(/\\{3,}frac/g) || []).length,
  sample072: (s.match(/\\\\frac\{0\.072\}\{12\}/g) || []).length,
  sample8000: (s.match(/\\\\frac\{8,000\}\{1\.10\}/g) || []).length,
  leftoverSlashMath: (s.match(/\$[^$]*\/[^$]*\$/g) || [])
    .filter((x) => !/\\frac|\\text\{[^}]*\/|km\/h|difficulty/.test(x))
    .slice(0, 15),
});
