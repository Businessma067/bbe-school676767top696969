import fs from "fs";

const raw = fs.readFileSync("src/data/math-cases-ch13-binomial.json", "utf8");
// Fix accidental JSON \f escapes from writing \frac instead of \\frac
// In the file, a single-backslash \frac appears as the two chars \ f — but JSON
// parse turns \f into formfeed. Detect formfeed+rac in parsed content.

let fixed = raw.replace(/(?<!\\)\\frac\{/g, "\\\\frac{");
// also \frac that became already? 
fs.writeFileSync("src/data/math-cases-ch13-binomial.json", fixed);

const j = JSON.parse(fs.readFileSync("src/data/math-cases-ch13-binomial.json", "utf8"));
const cases = j.cases || j.tasks || j;
let formfeeds = 0;
let goodFrac = 0;
function walk(x) {
  if (typeof x === "string") {
    if (x.includes("\f")) formfeeds += 1;
    if (x.includes("\\frac")) goodFrac += 1;
  } else if (Array.isArray(x)) x.forEach(walk);
  else if (x && typeof x === "object") Object.values(x).forEach(walk);
}
walk(j);
console.log({
  formfeeds,
  goodFrac,
  singleInFile: (fs.readFileSync("src/data/math-cases-ch13-binomial.json", "utf8").match(/(?<!\\)\\frac\{/g) || []).length,
  doubleInFile: (fs.readFileSync("src/data/math-cases-ch13-binomial.json", "utf8").match(/\\\\frac\{/g) || []).length,
});
