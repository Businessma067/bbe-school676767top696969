import fs from "node:fs";

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/\bthe statement is (?:True|False)\.\s*$/.test(last)) throw new Error(last.slice(-80));
  return [...parts, extra.trim(), last].join("\n\n");
}

const path = "textbook/output/_rev/ch11/31_40.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));
const t = arr.find((x) => x.id === "math-11-32");
t.tactical_explanations[4] = insertBeforeClose(
  t.tactical_explanations[4],
  `Matched 7.0% continuous X reaches about $\\$69,016$, about $\\$83$ above Z's $\\$68,933$. Once quotes match, continuous is the ceiling. Letter D failed because the quotes did not match. This letter equalizes them at 7.0% and the ranking flips.

A treasurer who believed "lowest quote always loses" would miss this counterfactual. Raise X's quote to 7.0% and keep the continuous clock, and X becomes the strongest of the three. The recovered matched-rate X exceeds Z.

What would have to change back is a hole in X's quote. At a shared 7.0%, the hole is gone. The stem's actual quotes are 6.8%, 6.9%, and 7.0%, which is why letter D put X last. This letter is the equal-quote companion.`
);
fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}
const letters = "ABCDE";
let n = 0;
let em = 0;
let dol = 0;
let closeBad = [];
let shortRich = [];
for (const f of ["01_10", "11_20", "21_30", "31_40"]) {
  const raw = fs.readFileSync("textbook/output/_rev/ch11/" + f + ".json", "utf8");
  if (raw.includes("\u2014") || raw.includes("\u2013")) em++;
  if (raw.includes("${")) dol++;
  if (!raw.endsWith("\n")) console.log("no nl", f);
  const a = JSON.parse(raw);
  for (const task of a) {
    if (task.id === "math-11-1") continue;
    n++;
    task.tactical_explanations.forEach((e, i) => {
      if (!/so the statement is (?:True|False)\.\s*$/.test(e.trim())) {
        closeBad.push(task.id + letters[i]);
      }
      const w = wc(e);
      const stmt = task.statements[i];
      const lookup = /periodic rate|number of .*periods|growth factor over the|daily periodic|nominal annual rate, quoted as 12/i.test(stmt);
      if (!lookup && w < 350) shortRich.push(task.id + letters[i] + " " + w);
    });
  }
}
console.log("tasks", n, "emFiles", em, "dollarBrace", dol, "badClose", closeBad.length, closeBad.join(","));
console.log("shortRich", shortRich.join(" | ") || "none");
const g = JSON.parse(fs.readFileSync("textbook/output/_rev/ch11/01_10.json", "utf8"))[0];
console.log("gold", g.id, "nExpl", g.tactical_explanations.length, "Part1", g.solution_overview.includes("**Part 1: Setup.**"));
