import fs from "fs";

const fp = "21_30.json";
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
const t = arr.find((x) => x.id === "math-8-24");
t.tactical_explanations[1] = `**B.** → False

The exponent $\\frac{5}{2}$ sits above one, so a doubling of capacity needs a diameter multiplier $k=2^{\\frac{2}{5}}<2$.

The diameter must less than double, so the statement is False.`;
t.tactical_explanations[3] = `**D.** → False

A capacity of $250$ inverts $Q(d)=2d^{\\frac{5}{2}}$:

$$2d^{\\frac{5}{2}}=250$$

$$d^{\\frac{5}{2}}=125$$

$$d=125^{\\frac{2}{5}}=5^{\\frac{6}{5}}$$

Since $5^{\\frac{6}{5}}<10$, the required diameter sits below $10$ cm, so the statement is False.`;
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
console.log(t.tactical_explanations.map((e) => e.length));
