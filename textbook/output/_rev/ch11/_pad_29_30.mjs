import fs from "node:fs";

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/\bthe statement is (?:True|False)\.\s*$/.test(last)) throw new Error(last.slice(-80));
  return [...parts, extra.trim(), last].join("\n\n");
}

const path = "textbook/output/_rev/ch11/21_30.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));
const extras = {
  "math-11-29": {
    4: `The extra grows from $\\$11.36$ at one year to $\\$111.98$ at eight years. Longer holding periods make the faster clock more advantageous, not less. The extra is not a one-year curiosity that fades.

Both clocks grow, and the faster clock's lead grows with them. The claim has that direction backwards. "Less advantageous" would describe a shrinking gap. The recovered gap grows.

What would have to change is a pair of clocks in which the slower one later overtakes, which does not happen when both run at a fixed rate and the faster one is continuous. At 3% the lender's continuous advantage widens with time.`,
  },
  "math-11-30": {
    0: `Fund A's ceiling is the continuous book $\\$439,863.54$. Monthly B sits about $\\$165$ below. Daily B sits about $\\$5$ below. Annual 9.5% would have left $\\$438,000$, about $\\$1,864$ light.

This letter names the ceiling. Later letters sit under it. The cents, $54$, match $400,000 e^{0.095}$. A book that printed $\\$440,000$ would be rounding past the recovered ceiling, not crossing it from a finite clock.`,
  },
};
for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((letter, i) =>
    ex[i] ? insertBeforeClose(letter, ex[i]) : letter
  );
}
fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
console.log("padded 29-30 spread");
