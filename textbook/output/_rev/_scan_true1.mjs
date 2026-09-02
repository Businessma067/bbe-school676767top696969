import fs from "node:fs";
import path from "node:path";

const dir = "textbook/output/_rev/ch1";
const hits = [];
const re = /.{0,40}True(?:[0-9]+)?(?:\$|\\in|\\cdot|,|\s).{0,40}/g;

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
  const raw = fs.readFileSync(path.join(dir, f), "utf8");
  const arr = JSON.parse(raw);
  for (const t of arr) {
    t.tactical_explanations.forEach((e, i) => {
      const matches = e.match(re) || [];
      for (const m of matches) {
        if (/so the statement is True/.test(m) && !/True[0-9]/.test(m) && !/True\$/.test(m) && !/True\\in/.test(m)) continue;
        if (/→ True/.test(m) && !/True[0-9\$]/.test(m)) continue;
        hits.push({ file: f, id: t.id, letter: "ABCDE"[i], snippet: m.replace(/\n/g, " ") });
      }
    });
  }
}
console.log("hits", hits.length);
for (const h of hits) console.log(h.file, h.id, h.letter, "|", h.snippet);
