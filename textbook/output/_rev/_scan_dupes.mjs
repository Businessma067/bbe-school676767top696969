import fs from "fs";
import path from "path";

function extractDisplays(s) {
  const out = [];
  const re = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = re.exec(s))) out.push(m[1].replace(/\s+/g, " ").trim());
  return out;
}

const thinList = [];
const dupList = [];
let n = 0;

for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      n++;
      const ov = t.solution_overview || "";
      const ovD = extractDisplays(ov);
      t.tactical_explanations.forEach((e, i) => {
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        const words = body.split(/\s+/).filter(Boolean).length;
        if (words < 40) thinList.push(`${t.id} ${"ABCDE"[i]} w=${words}`);
        for (const x of extractDisplays(e)) {
          if (ovD.includes(x) && x.length > 8) {
            dupList.push(`${t.id} ${"ABCDE"[i]} :: ${x.slice(0, 90)}`);
          }
        }
      });
    }
  }
}

console.log("tasks", n);
console.log("thin letters <40 words:", thinList.length);
console.log(thinList.slice(0, 50).join("\n"));
if (thinList.length > 50) console.log("... +" + (thinList.length - 50) + " more");
console.log("\nexact $$ dupes vs overview:", dupList.length);
console.log(dupList.slice(0, 40).join("\n"));
if (dupList.length > 40) console.log("... +" + (dupList.length - 40) + " more");
