import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function insertBeforeCloser(text, extra) {
  const t = text.trimEnd();
  const idx = t.lastIndexOf("\n");
  return t.slice(0, idx).trimEnd() + "\n\n" + extra.trim() + "\n\n" + t.slice(idx + 1);
}

const extras = {
  "math-8-74": {
    2: `The $81$-hour output of $324$ is $3.375$ times the $16$-hour output of $96$, while hours rose by $5.0625$. Those two factors are $\\left(\\frac{3}{2}\\right)^{3}$ and $\\left(\\frac{3}{2}\\right)^{4}$, the signature of $r=\\frac{3}{4}$, not of $r=1$. Doubling output cannot be a doubling of hours on this pair of shifts.`,
  },
  "math-8-75": {
    0: `The claim is the language of a horizontal asymptote: approached without being attained. Nested intervals $(8,18]$, then $(8,13]$, then $(8,10]$, then $(8,8.5]$, close on $8$ and never contain $8$. That is the floor.`,
  },
  "math-8-76": {
    2: `The ranking $R'(8)=30>R'(27)=20$ is the flattening of a two-thirds harvest. An extra tonne after twenty-seven tonnes adds $20$ thousand euros of revenue; after eight tonnes it adds $30$. The claim's "adds more after $27$" is the wrong ranking.`,
  },
  "math-8-77": {
    4: `Letter D already used $r>1$ as unequal euro gaps on equal index gaps. This letter is a named pair of those gaps: $9$ to $25$ adds $588$, which is not under $500$. The $500$ cutoff is a nearby figure, not a rounding of $588$.`,
  },
  "math-8-78": {
    2: `Sixteen times $2$ is $32$; sixteen times $2^{\\frac{2}{3}}$ is about $25.4$. The claim wants the first product. The inverse of a three-halves load law is a two-thirds scale law, so the ceiling can double while the index cannot.`,
    3: `A doubled coefficient is a tighter plant: more kilograms per unit of scale, so the same $320$ kg ceiling binds at a smaller $s$. It binds at $10.08$, not at $8$. The factor is $2^{-\\frac{2}{3}}$, the reciprocal-exponent image of a doubled $A$.`,
  },
  "math-8-79": {
    0: `Letter C then reads the same disagreement as an overstatement of the loss. This letter is only whether the two methods agree. They do not: $50\\%$ versus $36\\%$, $2000$ spaces versus $2560$.`,
    3: `If the $25\\%$ rise and the $25\\%$ cut had moved demand by equal percentages, the factors $0.64$ and $1.778$ would have been reciprocals of deviations from $1$ with equal size. They are not: $0.36$ versus $0.778$. Inverse-square finite moves are skewed toward the cut-price side.`,
  },
  "math-8-80": {
    2: `The cube $2^{3}=8$ is the doubling factor for geometrically similar bells. Letter E then uses the unit-height bell $M(1)=240$ as the same cube evaluated at $h=1$. This letter is the doubling claim, and it is false.`,
    3: `Three heights, three intensities: $60$, $240$, $540$ kilograms per metre. A constant intensity would have repeated $60$. Similar bells do not repeat it, because mass fills as $h^{3}$ while the per-metre quotient peels off only one power of $h$.`,
  },
};

const fp = path.join(__dirname, "71_80.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  for (const [j, extra] of Object.entries(ex)) {
    t.tactical_explanations[Number(j)] = insertBeforeCloser(
      t.tactical_explanations[Number(j)],
      extra
    );
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) console.log(t.id, t.tactical_explanations.map(words).join(" "));
