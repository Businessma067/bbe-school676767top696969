import { execSync } from "node:child_process";
const src = execSync("git show HEAD:src/data/math-ch8-power-functions.ts", {
  maxBuffer: 20e6,
  encoding: "utf8",
});
function dump(id, n = 3500) {
  const i = src.indexOf(`id: \`${id}\``);
  const idx = src.indexOf("tactical_explanations", i);
  console.log("\n\n========", id, "========\n");
  console.log(src.slice(idx, idx + n));
}
dump("math-8-44");
dump("math-8-31", 2800);
dump("math-8-61", 2200);
