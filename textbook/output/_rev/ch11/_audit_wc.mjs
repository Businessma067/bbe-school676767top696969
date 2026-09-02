import fs from "node:fs";

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const files = ["01_10", "11_20", "21_30", "31_40"];
let n = 0;
for (const f of files) {
  const arr = JSON.parse(fs.readFileSync("textbook/output/_rev/ch11/" + f + ".json", "utf8"));
  for (const t of arr) {
    if (t.id === "math-11-1") continue;
    n++;
    const wcs = t.tactical_explanations.map(wc);
    const em = t.tactical_explanations.some((e) => e.includes("\u2014") || e.includes("\u2013"));
    const dol = t.tactical_explanations.some((e) => e.includes("${"));
    const badClose = t.tactical_explanations
      .map((e, i) => (/\bthe statement is (?:True|False)\.\s*$/.test(e.trim()) ? null : i))
      .filter((x) => x !== null);
    const gold1 = t.id === "math-11-1";
    console.log(
      t.id,
      wcs.join(","),
      "spread",
      Math.max(...wcs) - Math.min(...wcs),
      em ? "EM" : "",
      dol ? "DBRACE" : "",
      badClose.length ? "close:" + badClose.join("-") : ""
    );
  }
}
console.log("tasks", n);

const g = JSON.parse(fs.readFileSync("textbook/output/_rev/ch11/01_10.json", "utf8"))[0];
console.log("gold id", g.id, "nExpl", g.tactical_explanations.length, "ov has Part 1", g.solution_overview.includes("Part 1"));
