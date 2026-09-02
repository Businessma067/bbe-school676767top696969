import fs from "fs";

const files = ["01_10.json", "11_20.json", "21_30.json", "31_40.json", "41_50.json"];

function fixLetter(e) {
  let s = e.replace(/, and the statement is (True|False)\.$/, ", so the statement is $1.");
  s = s.replace(/ and the statement is (True|False)\.$/, " so the statement is $1.");
  s = s.replace(/\n\nThe statement is (True|False)\.$/, "\n\nso the statement is $1.");
  s = s.replace(/\. The statement is (True|False)\.$/, ". so the statement is $1.");
  return s;
}

let n = 0;
for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(f, "utf8"));
  for (const t of arr) {
    if (t.id === "math-8-1") continue;
    t.tactical_explanations = t.tactical_explanations.map((e) => {
      const next = fixLetter(e);
      if (next !== e) n += 1;
      return next;
    });
  }
  fs.writeFileSync(f, JSON.stringify(arr, null, 2) + "\n");
}
console.log("fixed letters", n);
