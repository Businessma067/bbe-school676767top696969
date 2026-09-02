import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const out = [];

for (const ch of ["ch11"]) {
  const dir = path.join(root, "textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const rel = path.join("textbook/output/_rev", ch, f).replaceAll("\\", "/");
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      t.tactical_explanations.forEach((e, i) => {
        const header = e.split("\n")[0];
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        const words = body.split(/\s+/).filter(Boolean).length;
        if (words >= 30) return;
        out.push({
          file: rel,
          id: t.id,
          letter: "ABCDE"[i],
          idx: i,
          words,
          header,
          body,
          key: t.answer_key[i],
          statement: t.statements[i],
          overview: t.solution_overview,
          other_headers: t.tactical_explanations.map((s, j) => ({
            L: "ABCDE"[j],
            header: s.split("\n")[0],
            words: s.replace(/^\*\*[^\n]+\n+/, "").trim().split(/\s+/).filter(Boolean).length,
            body: s.replace(/^\*\*[^\n]+\n+/, "").trim(),
          })),
        });
      });
    }
  }
}

fs.writeFileSync(
  "textbook/output/_rev/_current_thin.json",
  JSON.stringify(out, null, 2) + "\n",
);
console.log("dumped", out.length);
console.log(out.map((x) => `${x.id} ${x.letter} w=${x.words} key=${x.key}`).join("\n"));
