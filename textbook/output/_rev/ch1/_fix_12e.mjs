import fs from "node:fs";
const fp = "textbook/output/_rev/ch1/01_10.json";
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
const t = arr.find((x) => x.id === "math-1-2");
t.tactical_explanations[4] = t.tactical_explanations[4].replace(
  "The recovered \\$ is the singleton that survives it, not the two-element roster the claim copied from \\$.",
  "The recovered $C$ is the singleton that survives it, not the two-element roster the claim copied from $B$."
);
if (!t.tactical_explanations[4].includes("recovered $C$ is the singleton")) {
  t.tactical_explanations[4] = t.tactical_explanations[4].replace(
    /The recovered .* is the singleton that survives it, not the two-element roster the claim copied from .*\./,
    "The recovered $C$ is the singleton that survives it, not the two-element roster the claim copied from $B$."
  );
}
console.log(t.tactical_explanations[4].slice(-250));
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
