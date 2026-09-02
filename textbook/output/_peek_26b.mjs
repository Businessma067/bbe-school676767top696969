import { execSync } from "node:child_process";
const src = execSync("git show HEAD:src/data/math-ch8-power-functions.ts", {
  maxBuffer: 20e6,
  encoding: "utf8",
});
const i = src.indexOf("id: `math-8-26`");
const j = src.indexOf("id: `math-8-27`");
const chunk = src.slice(i, j);
const idx = chunk.indexOf("tactical_explanations");
console.log(chunk.slice(idx, idx + 4500));
