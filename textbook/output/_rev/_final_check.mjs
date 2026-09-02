import fs from "node:fs";
import path from "node:path";

const letters = "ABCDE";
let bad = 0;
const thin = [];
const noPart = [];
let n = 0;
const hist = { "<80": 0, "80-119": 0, "120-249": 0, "250-399": 0, "400+": 0 };

for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const arr = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const t of arr) {
      n++;
      const ov = t.solution_overview || "";
      if (!/\*\*Part 1/.test(ov) && ch !== "ch1") noPart.push(t.id);
      if (ch === "ch1" && !/\*\*Part 1/.test(ov)) noPart.push(t.id);
      t.tactical_explanations.forEach((e, i) => {
        const m = e.match(/^\*\*([A-E])[.)]/);
        const tf = e.match(/→\s*(True|False)|\((true|false)\)/);
        if (!m || m[1] !== letters[i]) {
          console.log("LETTER", t.id, i);
          bad++;
        }
        if (tf) {
          const got = (tf[1] || tf[2]).toLowerCase() === "true";
          if (got !== t.answer_key[i]) {
            console.log("KEY", t.id, letters[i], got, t.answer_key[i]);
            bad++;
          }
        }
        if (/\$\{/.test(e)) {
          console.log("${", t.id, letters[i]);
          bad++;
        }
        const body = e.replace(/^\*\*[^\n]+\n+/, "").trim();
        const w = body.split(/\s+/).filter(Boolean).length;
        if (w < 80) hist["<80"]++;
        else if (w < 120) hist["80-119"]++;
        else if (w < 250) hist["120-249"]++;
        else if (w < 400) hist["250-399"]++;
        else hist["400+"]++;
        if (w < 80) thin.push(t.id + " " + letters[i] + " " + w);
      });
    }
  }
}
console.log("tasks", n, "header/key", bad);
console.log("hist", hist);
console.log("no Part 1", noPart.length, noPart.slice(0, 20).join(", "));
console.log("thin <80", thin.length, thin.slice(0, 25).join(" | "));
