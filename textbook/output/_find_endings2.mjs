import fs from "fs";
const src = fs.readFileSync("src/data/math-ch1-logic.ts", "utf8");
const needles = [
  "pinned as true",
  "settles the matter",
  "R$ is true",
  "true as well",
  "second link ties",
];
for (const n of needles) {
  let idx = 0;
  let c = 0;
  while ((idx = src.indexOf(n, idx)) !== -1) {
    c++;
    console.log("---", JSON.stringify(n), "#" + c);
    console.log(JSON.stringify(src.slice(idx - 20, idx + n.length + 80)));
    idx += n.length;
  }
  if (c === 0) console.log("MISSING", n);
}
