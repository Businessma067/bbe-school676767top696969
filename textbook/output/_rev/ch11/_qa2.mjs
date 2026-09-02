import fs from "node:fs";

const arr = JSON.parse(fs.readFileSync("textbook/output/_rev/ch11/01_10.json", "utf8"));
const t = arr.find((x) => x.id === "math-11-2");
const e = t.tactical_explanations[0];
const first = e.split("\n")[0];
console.log("stmt", JSON.stringify(t.statements[0]));
console.log("head", JSON.stringify(first));
console.log("starts", first.startsWith("**A)"));
console.log("has stmt", first.includes(t.statements[0].slice(0, 20)));

let so = 0, and = 0, other = [];
for (const f of ["01_10", "11_20", "21_30", "31_40"]) {
  const a = JSON.parse(fs.readFileSync("textbook/output/_rev/ch11/" + f + ".json", "utf8"));
  for (const task of a) {
    if (task.id === "math-11-1") continue;
    task.tactical_explanations.forEach((letter, i) => {
      const last = letter.trim().split(/\n/).pop();
      if (/so the statement is (?:True|False)\.\s*$/.test(letter.trim())) so++;
      else if (/the statement is (?:True|False)\.\s*$/.test(letter.trim())) {
        and++;
        other.push(task.id + " " + "ABCDE"[i] + " :: " + last.slice(-80));
      }
    });
  }
}
console.log("so", so, "other-close", and);
other.slice(0, 15).forEach((x) => console.log(x));

const g = arr[0];
console.log("gold id", g.id);
console.log("gold A wc", g.tactical_explanations[0].trim().split(/\s+/).length);
console.log("gold ov Part1", g.solution_overview.includes("**Part 1: Setup.**"));
