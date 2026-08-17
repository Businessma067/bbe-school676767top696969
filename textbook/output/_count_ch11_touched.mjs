import fs from "node:fs";
const bak = fs.readFileSync("textbook/output/_math-ch11-financial.bak.ts", "utf8");
const cur = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
function ids(src) {
  const re = /id: `math-11-(\d+)`/g;
  const idxs = [];
  let m;
  while ((m = re.exec(src))) idxs.push([m.index, Number(m[1])]);
  const map = new Map();
  for (let i = 0; i < idxs.length; i++) {
    const [a, id] = idxs[i];
    const b = i + 1 < idxs.length ? idxs[i + 1][0] : src.length;
    map.set(id, src.slice(a, b));
  }
  return map;
}
const A = ids(bak), B = ids(cur);
let touched = 0;
for (const [id, old] of A) if (B.get(id) !== old) touched++;
const t1 = B.get(1);
fs.writeFileSync(
  "textbook/output/_ch11_verify.json",
  JSON.stringify(
    {
      PARSE_LEN: (cur.match(/id: `math-11-/g) || []).length,
      touched,
      fileText: (cur.match(/\\text\{/g) || []).length,
      step2: (t1.match(/\*\*2\.\*\*[^\n]+/) || [])[0],
      step3: (t1.match(/\*\*3\.\*\*[^\n]+/) || [])[0],
      eTrap: (t1.match(/Trap: the actual gap[^\n]+/) || [])[0],
      cLede: (t1.match(/\$?FV =[^\n]+/) || [])[0],
      aLede: (t1.match(/Periodic rate[^\n]+/) || [])[0],
    },
    null,
    2,
  ),
);
