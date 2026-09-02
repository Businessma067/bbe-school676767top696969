import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const letters = "ABCDE";
let issues = [];
let nTasks = 0;
let nLetters = 0;
const lookupIds = new Set();

for (const f of ["01_10", "11_20", "21_30", "31_40"]) {
  const arr = JSON.parse(fs.readFileSync("textbook/output/_rev/ch11/" + f + ".json", "utf8"));
  const raw = fs.readFileSync("textbook/output/_rev/ch11/" + f + ".json", "utf8");
  if (!raw.endsWith("\n")) issues.push(f + " missing trailing newline");
  if (raw.includes("\u2014") || raw.includes("\u2013")) issues.push(f + " em/en dash");
  if (raw.includes("${")) issues.push(f + " ${");

  for (const t of arr) {
    if (!t.solution_overview.includes("Part 1")) issues.push(t.id + " overview missing Part 1");
    if (!t.solution_overview.includes("Part 2")) issues.push(t.id + " overview missing Part 2");
    if (!t.solution_overview.includes("Part 3")) issues.push(t.id + " overview missing Part 3");
    if (t.id === "math-11-1") {
      console.log("gold nExpl", t.tactical_explanations.length, "A starts", t.tactical_explanations[0].slice(0, 70));
      continue;
    }
    nTasks++;
    const wcs = t.tactical_explanations.map(wc);
    t.tactical_explanations.forEach((e, i) => {
      nLetters++;
      const stmt = t.statements[i];
      const key = t.answer_key[i];
      const tag = key ? "(true)" : "(false)";
      const headerOk = e.startsWith(`**${letters[i]}) ${stmt}.**  ${tag}`);
      if (!headerOk) issues.push(`${t.id} ${letters[i]} bad header`);
      if (!/\bso the statement is (?:True|False)\.\s*$/.test(e.trim())) {
        if (!/\bthe statement is (?:True|False)\.\s*$/.test(e.trim())) {
          issues.push(`${t.id} ${letters[i]} bad closer`);
        } else if (!e.trim().endsWith(`so the statement is ${key ? "True" : "False"}.`)) {
          issues.push(`${t.id} ${letters[i]} closer not so/key`);
        }
      }
      const w = wcs[i];
      const isLookup =
        /periodic rate|number of .* periods|nt, is|growth factor over/i.test(stmt) &&
        !/effective|future value|balance after|would grow/i.test(stmt);
      if (isLookup) lookupIds.add(`${t.id}${letters[i]}:${w}`);
      if (!isLookup && w < 340 && w > 210) {
        issues.push(`${t.id} ${letters[i]} short-rich ${w}`);
      }
    });
  }
}

console.log("tasks", nTasks, "letters", nLetters);
console.log("lookups", [...lookupIds].join(" | "));
console.log("issues", issues.length);
issues.slice(0, 40).forEach((x) => console.log(" -", x));
