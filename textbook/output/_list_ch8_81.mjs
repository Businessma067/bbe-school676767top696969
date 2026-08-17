import fs from "node:fs";
const s = fs.readFileSync("src/data/math-ch8-power-functions.ts", "utf8");
const bt = String.fromCharCode(96);
const re = new RegExp(
  "case_id: " + bt + "([^" + bt + "]+)" + bt + ",\\s*\\n\\s*title: " + bt + "([^" + bt + "]+)" + bt +
  ",\\s*\\n\\s*subsection: " + bt + "([^" + bt + "]+)" + bt +
  ",\\s*\\n\\s*context: " + bt + "([^" + bt + "]+)" + bt,
  "g"
);
let m;
const diffRe = new RegExp("difficulty_level: " + bt + "([^" + bt + "]+)" + bt + ",\\s*\\n\\s*sort_order: (\\d+)", "g");
const diffs = [];
let d;
while ((d = diffRe.exec(s))) diffs.push([d[1], Number(d[2])]);
let i = 0;
while ((m = re.exec(s))) {
  if (m[3] === "8.1") {
    const dd = diffs.find((x) => x[1] === i + 1);
    console.log(`${m[1]} | ${dd ? dd[0] : "?"} | ${m[2]}`);
    console.log("   ctx: " + m[4].slice(0, 150).replace(/\n/g, " "));
  }
  i++;
}
const counts = {};
for (const [lvl] of diffs) counts[lvl] = (counts[lvl] || 0) + 1;
console.log("ALL DIFFS:", counts, "total tasks:", diffs.length);
