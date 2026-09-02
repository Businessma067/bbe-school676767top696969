import fs from "node:fs";
import path from "node:path";

const thin = [];
for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      t.tactical_explanations.forEach((e, i) => {
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        const w = body.split(/\s+/).filter(Boolean).length;
        if (w < 80) {
          thin.push({
            file: path.join(dir, f).replace(/\\/g, "/"),
            id: t.id,
            letter: "ABCDE"[i],
            idx: i,
            words: w,
            header: e.split("\n")[0],
            body,
            key: t.answer_key[i],
            statement: t.statements[i],
          });
        }
      });
    }
  }
}
fs.writeFileSync("textbook/output/_rev/_thin80.json", JSON.stringify(thin, null, 2) + "\n");
console.log(thin.length);
