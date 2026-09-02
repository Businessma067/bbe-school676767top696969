import fs from "node:fs";
const fp = "textbook/output/_rev/ch1/01_10.json";
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
const t = arr.find((x) => x.id === "math-1-2");
t.tactical_explanations[2] = t.tactical_explanations[2].replace(
  "$A=\\{x\\in Z:x^2=9\\text{ and }x>0\\}$",
  "$A=\\{x\\in Z:x^2=9\\}$ with $x>0$"
);
console.log(t.tactical_explanations[2].includes("\\text{") ? "still text" : "cleared");
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
