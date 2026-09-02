import fs from "node:fs";
const arr = JSON.parse(fs.readFileSync("textbook/output/_rev/ch11/21_30.json", "utf8"));
const t = arr.find((x) => x.id === "math-11-21");
console.log("--- A ---\n" + t.tactical_explanations[0].slice(-400));
console.log("\n--- C close ---\n" + t.tactical_explanations[2].slice(-200));
console.log("\nkeys", Object.keys(t).join(","));
console.log("nExpl", t.tactical_explanations.length);
