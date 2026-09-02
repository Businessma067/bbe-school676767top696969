import fs from "fs";
import path from "path";

function extractDisplays(s) {
  const out = [];
  const re = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = re.exec(s))) out.push(m[1].replace(/\s+/g, " ").trim());
  return out;
}

const hits = [];
for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      const ovD = extractDisplays(t.solution_overview || "");
      t.tactical_explanations.forEach((e, i) => {
        for (const x of extractDisplays(e)) {
          if (ovD.includes(x) && x.length > 8) {
            hits.push({
              file: path.join(dir, f).replace(/\\/g, "/"),
              id: t.id,
              letter: "ABCDE"[i],
              display: x,
              letterText: e,
            });
          }
        }
      });
    }
  }
}

fs.writeFileSync("textbook/output/_rev/_dup_hits.json", JSON.stringify(hits, null, 2) + "\n");
console.log("wrote", hits.length);
hits.forEach((h) => console.log(h.id, h.letter, h.file));
