import fs from "fs";
const s = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const re = /id: `math-11-(\d+)`/g;
const ids = [];
let m;
while ((m = re.exec(s))) ids.push({ id: +m[1], idx: m.index });
function part3(id) {
  const i = ids.findIndex((x) => x.id === id);
  const start = ids[i].idx;
  const end = i + 1 < ids.length ? ids[i + 1].idx : s.length;
  const block = s.slice(start, end);
  const p = block.indexOf("**Part 3: Solve.**");
  const a = block.indexOf("**Answer.**");
  return block.slice(p, a);
}
for (const id of [10, 28, 29, 34]) {
  console.log("=====", id, "=====");
  console.log(part3(id));
  const idx = part3(id).indexOf("$, $");
  if (idx >= 0) console.log("CONTEXT:", JSON.stringify(part3(id).slice(idx - 20, idx + 30)));
}
