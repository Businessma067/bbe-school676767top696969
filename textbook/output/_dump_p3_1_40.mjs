import fs from "fs";
const s = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const re = /id: `math-11-(\d+)`/g;
const ids = [];
let m;
while ((m = re.exec(s))) ids.push({ id: +m[1], idx: m.index });

function part3(id) {
  const i = ids.findIndex((x) => x.id === id);
  if (i < 0) return null;
  const start = ids[i].idx;
  const end = i + 1 < ids.length ? ids[i + 1].idx : s.length;
  const block = s.slice(start, end);
  const p = block.indexOf("**Part 3: Solve.**");
  const a = block.indexOf("**Answer.**");
  if (p < 0) return "NO PART3";
  return block.slice(p, a > 0 ? a : undefined);
}

const range = process.argv[2]
  ? process.argv[2].split("-").map(Number)
  : [1, 40];
const [lo, hi] = range.length === 1 ? [range[0], range[0]] : range;
for (let id = lo; id <= hi; id++) {
  console.log("===== math-11-" + id + " =====");
  console.log(part3(id));
}
console.log("===== math-11-52 =====");
console.log(part3(52));
