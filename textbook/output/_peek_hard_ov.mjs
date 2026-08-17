import fs from "fs";
const src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
function get(id) {
  const marker = "case_id: `" + id + "`";
  const i = src.indexOf(marker);
  const blockEnd = src.indexOf("\n  {\n    id:", i + 1);
  const block = src.slice(i, blockEnd < 0 ? src.length : blockEnd);
  const ov = block.match(/solution_overview: `([\s\S]*?)`/)[1];
  return { ov, len: ov.length };
}
for (const id of ["MATH 11.96", "MATH 11.97", "MATH 11.108", "MATH 11.109", "MATH 11.122"]) {
  const { ov, len } = get(id);
  console.log("====", id, len, "====");
  console.log(ov);
  console.log("");
}
