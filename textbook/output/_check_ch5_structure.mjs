import fs from "node:fs";

const src = fs.readFileSync("src/data/math-ch5-linear-equations.ts", "utf8");
const ids = [...src.matchAll(/id: "math-5-(\d+)"/g)].map((m) => Number(m[1]));
const missing = [...Array(60)].map((_, i) => i + 1).filter((n) => !ids.includes(n));
const explBlocks = [...src.matchAll(/tactical_explanations: \[/g)].length;
const diffs = [...src.matchAll(/difficulty_level: "/g)].length;
const scars = [
  /difficulty_level:[a-z]/,
  /to get id:/,
  /From Part/,
  /\*\*Watch\./,
  /145\.50 \+ \$1\.85d/,
].flatMap((re) => (re.test(src) ? [String(re)] : []));

console.log(
  JSON.stringify(
    {
      ids: ids.length,
      first: ids[0],
      last: ids.at(-1),
      missing,
      explBlocks,
      diffs,
      bytes: src.length,
      scars,
      hasDisplayMath: src.includes("$$\n"),
      task1Ok: /id: "math-5-1",[\s\S]*?difficulty_level: "1\/5"/.test(src),
      task60Ok: /id: "math-5-60",[\s\S]*?difficulty_level:/.test(src),
    },
    null,
    2,
  ),
);
