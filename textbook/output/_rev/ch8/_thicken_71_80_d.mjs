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
  "math-8-71": {
    3: `Revenue at one euro is $R(1)=2000$, exactly a doubling of $R(4)=1000$. That $1$-euro price is a quarter of the logged $4$ euros, which is the inverse of leftover exponent $-\\frac{1}{2}$: to double a square-root-in-the-denominator till you must cut price by four. A half-price policy stops at $R(2)\\approx 1414$ and never reaches the doubling.`,
  },
  "math-8-72": {
    0: `A third invoice at $n=9$ would read $C(9)=400+90=490$ on the recovered rule, not $90$ and not $700\\cdot 3/10=210$. Any of those wrong one-term formulae is a pure power. The two logged invoices already refuse every pure power through the origin.`,
    3: `If the retainer had been billed per branch, $F/n$ inside the square root, the whole bill could have been rewritten as a single power and a quadrupling would have doubled it. The stem's retainer is a lump sum, $400$ euros a month whether the network is $100$ branches or $400$. That lump sum is why the scale factor on the whole bill is $\\frac{10}{7}$, not $2$.`,
  },
  "math-8-73": {
    0: `Checking just either side of the valley: $T(39)\\approx 240.06$ and $T(41)\\approx 240.06$, both a hair above $T(40)=240$. The crossing is a floor, not a ceiling. A peak would have sat below its neighbours. Annual total cost is smallest where the two components meet.`,
    3: `The $60$-euro penalty is $T-240$ on each side. It is the same $60$ because $O$ and $H$ swap: $240+60$ at $q=20$ against $60+240$ at $q=80$. Cutting the batch in half and doubling it are equal-cost moves around this EOQ, which is the claim.`,
  },
  "math-8-74": {
    0: `Output $Q=12 L^{\\frac{3}{4}}$ and average product $12 L^{-\\frac{1}{4}}$ are two monomials in the same hours. They share the coefficient $12$ and they do not share the exponent. Letter D then reads the negative leftover as a falling average; this letter is only the claim that the average is still a power, just a different power.`,
    2: `From the $81$-hour shift, doubling $324$ units would need $Q=648$, hence $12 L^{\\frac{3}{4}}=648$ and $L=81\\cdot 2^{\\frac{4}{3}}\\approx 204$ hours, again more than a doubling of $81$. Every output-doubling on this technology is a $2^{\\frac{4}{3}}$-fold hour-doubling, never a mere doubling of the clock.`,
  },
  "math-8-75": {
    0: `As $n$ grows, $t(n)$ is squeezed into the interval $(8,13]$ after the second timing and into $(8,10]$ after $n=400$. Those nested intervals close on $8$ and never include $8$. Approached without being attained is the language of a horizontal asymptote, which is the claim.`,
  },
  "math-8-76": {
    2: `Marginal revenue at the break-even $x=27$ is $20$ thousand euros a tonne, while marginal cost is $30$. Past $27$, $R'<C'$ always. At $x=8$, coincidentally $R'=30$ equals the feed price, so the extra tonne there is a wash on the margin; at $x=27$ it already loses $10$ thousand euros. An extra tonne adds less revenue after $27$ than after $8$.`,
    3: `Once $R<C$, feeding still more cannot restore a surplus because $R'/C'=2 x^{-\\frac{1}{3}}$ stays below $1$ for $x>8$ already on the margin, and the levels themselves have crossed at $27$. Extra tonnes after $27$ add cost faster than revenue at every step. The gap widens; it does not close.`,
  },
  "math-8-77": {
    3: `Equal index gaps producing equal cost gaps is the hallmark of a linear handler, leftover slope constant. Here $f'=9\\sqrt{x}$ climbs, so a later gap of width $16$ at $9$ to $25$ costs $588$ euros while an earlier gap of width $16$ at $4$ to $20$ costs about $488$. The claim's equal-gaps story is the wrong shape.`,
    4: `Five hundred and eighty-eight is $88$ euros past five hundred, not a rounding that could flip. Changing the surviving gap from $336$ to $280$ would have lowered $A$ to $5$ and cut the $9$-to-$25$ rise to $490$, just under $500$, flipping the letter. The log's $336$ locks $A=6$ and the rise $588$.`,
  },
  "math-8-78": {
    2: `A doubled permit of $640$ kg would allow $s\\approx 25.4$, which is more scale, just not twice $16$. The plant's largest admissible index grows, but it lags the ceiling. Linear thinking on the inverse is the mismatch the claim makes.`,
    3: `The factor $2^{-\\frac{2}{3}}\\approx 0.63$ applied to $16$ is about $10.08$, which is the doubled-coefficient scale under the same $320$ kg ceiling. It is not $8$. Halving the index would have over-tightened the plant relative to a three-halves load law.`,
  },
  "math-8-79": {
    0: `The two methods agree on the derivative at $p=3$, elasticity $-2$, and disagree on the finite $25\\%$ step. Letter A asks whether they agree on that finite loss. They do not: $50\\%$ against $36\\%$. A first-order shortcut is not an exact power.`,
    3: `Percentage changes on a power are not odd-symmetric. The up-move of $25\\%$ in tariff is not the negative of the down-move of $25\\%$ in demand percentage. Exact factors $16/25$ and $16/9$ make that visible: $0.64$ versus $1.778$, whose deviations from $1$ are $0.36$ and $0.778$, not equal.`,
  },
  "math-8-80": {
    2: `Letter A already used $2^{3}=8$ as an outrunning factor. This letter is the same cube read as a doubling claim. Height $\\times 2$ is mass $\\times 8$, never mass $\\times 2$. The weighed $30$ kg bell is the concrete witness: its one-metre cousin is $240$ kg, not $60$ kg.`,
    3: `Mass per metre of height would be constant only for a rod-like $M\\propto h$. Similar bells fill out as cubes, so $M/h\\propto h^{2}$ climbs. The $0.5$ m, $1$ m, and $1.5$ m quotients $60$, $240$, $540$ are that climb in kilograms per metre.`,
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
