import fs from "node:fs";
import path from "node:path";

const boiler = [
  "The sentence under test",
  "Unpack this claim as its own piece of work",
  "This letter compares that sentence",
];
let b = 0;
const mid = [];
const clones = [];
let em = 0;
let dollar = 0;

for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      const ws = t.tactical_explanations.map((e) => {
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        return body.split(/\s+/).filter(Boolean).length;
      });
      const min = Math.min(...ws);
      const max = Math.max(...ws);
      if (max / Math.max(min, 1) < 1.25 && max < 250) clones.push(t.id + " " + JSON.stringify(ws));
      t.tactical_explanations.forEach((e, i) => {
        if (boiler.some((x) => e.includes(x))) b++;
        if (/[\u2013\u2014]/.test(e) || /[\u2013\u2014]/.test(t.solution_overview || "")) em++;
        if (/\$\{/.test(e) || /\$\{/.test(t.solution_overview || "")) dollar++;
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        const w = body.split(/\s+/).filter(Boolean).length;
        if (w < 120) {
          mid.push({
            file: path.join(dir, f),
            id: t.id,
            letter: "ABCDE"[i],
            idx: i,
            words: w,
            statement: t.statements[i],
            key: t.answer_key[i],
          });
        }
      });
    }
  }
}

console.log("boiler", b, "emdash", em, "dollarbrace", dollar);
console.log("still-clone tasks", clones.length);
console.log(clones.slice(0, 20).join("\n"));
console.log("under 120", mid.length);
console.log(mid.map((x) => x.id + " " + x.letter + " " + x.words).join("\n"));
fs.writeFileSync("textbook/output/_rev/_still_short.json", JSON.stringify(mid, null, 2) + "\n");
