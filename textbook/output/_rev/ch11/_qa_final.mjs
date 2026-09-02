import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

let nTasks = 0;
let nLetters = 0;
let lookups = 0;
let rich = 0;
let richUnder = [];
let over700 = [];
for (const f of ["01_10", "11_20", "21_30", "31_40"]) {
  const raw = fs.readFileSync("textbook/output/_rev/ch11/" + f + ".json", "utf8");
  JSON.parse(raw);
  if (!raw.endsWith("\n")) throw new Error("nl " + f);
  const arr = JSON.parse(raw);
  for (const t of arr) {
    if (t.answer_key.length !== 5) throw new Error("key " + t.id);
    if (t.tactical_explanations.length !== 5) throw new Error("expl " + t.id);
    if (!t.solution_overview.includes("**Part 1: Setup.**")) throw new Error("ov " + t.id);
    if (t.id === "math-11-1") continue;
    nTasks++;
    t.tactical_explanations.forEach((e, i) => {
      nLetters++;
      const w = wc(e);
      const stmt = t.statements[i];
      const lookup = /periodic rate|number of .*periods|growth factor over the|daily periodic|nominal annual rate, quoted as 12|Setting \$|Solving \$v_0/i.test(stmt);
      if (lookup) lookups++;
      else {
        rich++;
        if (w < 350) richUnder.push(t.id + "ABCDE"[i] + " " + w);
        if (w > 700) over700.push(t.id + "ABCDE"[i] + " " + w);
      }
    });
  }
}
const g = JSON.parse(fs.readFileSync("textbook/output/_rev/ch11/01_10.json", "utf8"))[0];
console.log({
  nTasks,
  nLetters,
  lookups,
  rich,
  richUnder,
  over700,
  gold: g.id,
  goldExpl: g.tactical_explanations.length,
  goldA: wc(g.tactical_explanations[0]),
});
