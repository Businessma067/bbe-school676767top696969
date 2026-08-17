import fs from "fs";
import { MATH_CH11_FINANCIAL as T } from "../../src/data/math-ch11-financial.ts";

const t = T.find((x) => x.id === "math-11-95");
const a0 = t.tactical_explanations[0];
const b0 = t.tactical_explanations[1];

const a1 = `**A) The next dividend is \\$3.09.**  (true)

The Gordon setup uses the dividend just paid, $D_0 = 3.00$, and the constant growth rate $g = 0.03$. The next dividend is

$$
D_1 = D_0(1+g) = 3.00 \\cdot 1.03 = 3.09.
$$

That matches the claim exactly, so the statement is true.`;

const b1 = `**B) The fair value per share is approximately \\$54.50.**  (false)

With required return $r = 0.09$ and growth $g = 0.03$, the Gordon price uses the next dividend:

$$
P_0 = \\dfrac{D_1}{r-g} = \\dfrac{3.09}{0.09-0.03} = \\dfrac{3.09}{0.06} = 51.50.
$$

The claim says about \\$54.50, but the substitution gives \\$51.50, so the statement is false.`;

let src = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
if (!src.includes(a0) || !src.includes(b0)) {
  console.error("anchors not found");
  process.exit(1);
}
src = src.replace(a0, a1).replace(b0, b1);
fs.writeFileSync("src/data/math-ch11-financial.ts", src);
console.log("ok", a1.length, b1.length);
