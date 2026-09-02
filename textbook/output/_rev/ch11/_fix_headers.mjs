import fs from "node:fs";

const files = [
  "61_70.json",
  "71_80.json",
  "81_90.json",
  "91_100.json",
  "101_110.json",
  "111_120.json",
  "121_123.json",
];

function header(letter, stmt, truth) {
  return "**" + letter + ") " + stmt + "**  (" + (truth ? "true" : "false") + ")";
}

let n = 0;
for (const f of files) {
  const p = new URL(f, import.meta.url);
  const arr = JSON.parse(fs.readFileSync(p, "utf8"));
  for (const t of arr) {
    t.tactical_explanations = t.tactical_explanations.map((x, i) => {
      const want = header("ABCDE"[i], t.statements[i], t.answer_key[i]);
      const nl = x.indexOf("\n");
      const rest = nl >= 0 ? x.slice(nl) : "";
      n++;
      return want + rest;
    });
  }
  fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
}
console.log("rewrote headers", n);
