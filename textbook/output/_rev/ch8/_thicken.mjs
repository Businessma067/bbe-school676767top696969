import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

const thicken = {
  "math-8-15": {
    i: 1,
    text: "**B.** → False\n\nThe overview already solved $2u=1.8u+5$ at $u=25$. The two quotes are not parallel: one is through the origin and the other has intercept $5$, so they must meet once. Parallel lines would have needed equal slopes. A rival intercept of $5$ is exactly what forces a unique crossing.",
  },
  "math-8-32": {
    i: 1,
    text: "**B.** → False\n\nDoubling airspeed multiplies drag by $2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$, which is less than $3$. The exponent sits between $1$ and $2$, so a doubling more than doubles drag and does not yet triple it. Claiming a tripling would have needed a slightly larger exponent than $\\frac{3}{2}$. The recorded $\\frac{3}{2}$ undershoots that.",
  },
  "math-8-33": {
    i: 1,
    text: "**B.** → False\n\nQuantity falling is not enough to drag revenue down when demand is inelastic. The same $R(p)=1200\\sqrt{p}$ climbs: $R(16)=4800$ and $R(25)=6000$. The product $pq$ can rise while $q$ falls, because $p$ is the other factor. Elastic demand, exponent below $-1$, would have turned this letter true.",
  },
  "math-8-35": {
    i: 1,
    text: "**B.** → False\n\nThe leftover exponent is $\\frac{2}{3}\\cdot\\frac{3}{2}=1$, so the composition grows in lockstep with the reading, not more slowly. A product of exponents below one would have been needed for slower growth. These two stages were built as inverses, so the composition is the identity, the opposite of a lag.",
  },
  "math-8-41": {
    i: 4,
    text: "**E.** → False\n\nThe leftover exponent on $R(q)$ is $\\frac{1}{2}>0$, so a larger quantity brings in more revenue, not less. Along this curve the quantity rise outruns the price cut. Letter C asked about raising price, which cuts $R(p)$; this letter asks about raising quantity, which lifts $R(q)$. Those are opposite readings of the same inverse-square demand.",
  },
  "math-8-60": {
    i: 4,
    text: "**E.** → False\n\nElastic demand is why a price rise cuts revenue here, not why it would raise it. The overview already listed $1.1^{-2}\\approx 0.826$, about a $17\\%$ revenue drop. The usual slogan, raise price when demand is elastic, reverses the revenue direction. Along this curve a $10\\%$ price rise shrinks the till.",
  },
  "math-8-68": {
    i: 4,
    text: "**E.** → False\n\nAn inverse square falls from $0.72$ toward $0$ and therefore crosses $0.08$ at a finite distance, namely $d=6$. The cap is met at six metres. A floor above $0.08$ would have been needed for the cap never to be met, and this formula has no such floor. Walking away from the hub always eventually satisfies the night limit.",
  },
};

const files = [
  "11_20.json", "21_30.json", "31_40.json", "41_50.json",
  "51_60.json", "61_70.json",
];

for (const f of files) {
  const fp = path.join(dir, f);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  let n = 0;
  for (const t of arr) {
    const p = thicken[t.id];
    if (p) {
      t.tactical_explanations[p.i] = p.text;
      n++;
    }
  }
  if (n) fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  console.log(f, n);
}
