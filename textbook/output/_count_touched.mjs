import fs from "fs";
import { execSync } from "child_process";

const cur = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const head = execSync("git show HEAD:src/data/math-ch11-financial.ts", {
  encoding: "utf8",
  maxBuffer: 20_000_000,
});

function extractMap(s) {
  const re = /id: `math-11-(\d+)`/g;
  const ids = [];
  let m;
  while ((m = re.exec(s))) ids.push({ id: +m[1], idx: m.index });
  const map = {};
  for (let i = 0; i < ids.length; i++) {
    const { id, idx } = ids[i];
    const end = i + 1 < ids.length ? ids[i + 1].idx : s.length;
    const block = s.slice(idx, end);
    const p = block.indexOf("**Part 3: Solve.**");
    const a = block.indexOf("**Answer.**");
    if (p >= 0 && a >= 0) map[id] = block.slice(p, a);
  }
  return map;
}

const a = extractMap(head);
const b = extractMap(cur);
const changed = [];
for (let id = 1; id <= 40; id++) {
  if (a[id] !== b[id]) changed.push(id);
}
console.log("Changed Part 3 vs HEAD:", changed.length, changed.join(","));
console.log("52 changed?", a[52] !== b[52]);
