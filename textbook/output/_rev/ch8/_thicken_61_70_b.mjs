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
  "math-8-61": {
    4: `A second check uses $S(16)=320$ as a stepping stone. From $16$ A to the reject line is a further $80$ N. Because $S'$ is still rising, those last $80$ N take more than the naive $80/S'(16)=80/30\\approx 2.7$ A; adding $2.7$ to $16$ gives about $18.7$, which matches the inverted $18.57$. The $18$ A cutoff is a near miss on that inverse, and the miss is on the short side.`,
  },
  "math-8-62": {
    3: `A rushed solver who swapped the variables and kept exponent $\\frac{2}{3}$ would have written $m=6 H^{\\frac{2}{3}}$ and lost the reciprocal. At $H=24$ that wrong inverse would have claimed $m=6\\cdot 24^{\\frac{2}{3}}\\approx 50$ kg, not the trial $8$ kg. The exponent must take the reciprocal: $\\frac{2}{3}$ becomes $\\frac{3}{2}$.`,
    4: `Checking $H(1000)=600$ kN at one tonne makes the "more than $1$ tonne" claim look like a unit mix-up rather than a near miss. The storm floor is a quarter of a one-tonne hold. Changing the storm protocol to $700$ kN would have pushed the inverse past one tonne and flipped the letter; the stem's $150$ kN does not.`,
  },
  "math-8-63": {
    4: `Checking a one-metre step on the far side of the floor: from $10$ to $11$ m, $T$ falls from $8$ to about $6.61$, a drop of $1.39$ Mbps, smaller still than the $4$-to-$5$ drop of $18$ Mbps. Inverse-square decay keeps flattening. The claim's ranking is the wrong way around at every pair of hops in the stem.`,
  },
  "math-8-64": {
    4: `A second mix-up is cubing $4$ and reading $G(64)=8\\cdot 64$, as if the exponent were $1$, which gives $512$, the specimen's area at $256$ g, and would have sat above $200$ for the wrong fish. The $64$ g fish is $2^{6}$, so $64^{\\frac{3}{4}}=2^{\\frac{9}{2}}=16\\sqrt{2}$, times $8$ is $128\\sqrt{2}\\approx 181$.`,
  },
  "math-8-65": {
    2: `A rushed solver who saw $S(9)=15>S(4)=10$ and inferred that later days must add more would have mixed a higher level with a steeper slope. The level is higher on day $9$; the slope is flatter. That is the same confusion as mixing $C(81)$ with $C'(81)$ in an audit bill: taller stack, flatter extra unit.`,
    3: `From day $36$ to day $40$ the extra four days add only about $1.6$ MPa, which is why a $40$-day cutoff still clears $30$ once day $36$ has already arrived. A smaller recorded gap of $4$ MPa instead of $5$ would have lowered $A$ to $4$ and pushed the inverse to day $56$, past $40$, flipping the letter. The log's $5$ MPa locks day $36$.`,
  },
  "math-8-66": {
    4: `The trusted pair is a square law with $A=2$. Forcing the third run onto that square would require $y(9)=162$, not $150$. Forcing a new exponent through $3$ m and $9$ m gives about $1.930$, which then predicts $y(6)=18\\cdot 2^{1.930}\\approx 68.4$, not the trusted $72$. The third run cannot be absorbed without breaking a trusted point.`,
  },
  "math-8-67": {
    2: `Letter B then uses the $10$ m reference to pin $A=0.5$; this letter is why that reference cannot be skipped. A second named mast, even without the percentage rule, would have pinned $A$ as a level. The stem gives one ratio and one level, and they do different jobs.`,
    3: `A $10\\%$ stretch on a cube is not three times $10\\%$. The binomial $1+3(0.1)+3(0.1)^{2}+(0.1)^{3}=1.331$ shows the extra $3.1\\%$ sitting above a naive $30\\%$. That extra is why the claim's "more than $30\\%$" holds rather than tying at $30\\%$.`,
  },
  "math-8-68": {
    2: `A finite step from $2$ to $3$ m drops intensity by $0.40$; from $6$ to $7$ m the drop is about $0.021$. The near metre cuts more, which is the inverse-square front-load. Changing $A$ to $1.44$, a common half-coefficient mix-up from $A/2^{2}=0.72$ written as $A/2$, would scale both slopes by $\\frac{1}{2}$ and still preserve the ranking.`,
  },
  "math-8-69": {
    3: `Because leftover exponent $1$ after both stages, any speed target scales the commissioning flow in lockstep. The commissioning speed $20\\sqrt{2}$ at $q=5$ doubles to $40\\sqrt{2}$ at $q=10$. A square leftover would have needed $q=5\\sqrt{2}\\approx 7.07$ for a doubled speed, still under $12$, for a different composition. The stem's composition is linear, so the inverse is $q=10$ exactly.`,
    4: `If the nozzle had been linear in head, $v=4H$, then eliminating $q$ would have left $H=v/8$, a genuine proportion, and this letter would have flipped. The stem takes a square root of head, so $H$ remains a square of $v$. Letter A can be true while this letter is false: speed proportional to flow is not head proportional to speed.`,
  },
  "math-8-70": {
    3: `A fourfold crew doubled the logged $80$ to $160$ in letter A, already past $150$, but that fourfold crew is $64$ drivers, past the cap of $36$. The $150$ target sits between the capped $120$ and the uncapped doubling target $160$. Inside the cap the yard cannot reach either.

Changing the cap from $36$ to $64$ drivers would have brought $150$ inside the rules and flipped this letter. The stem's cap is $36$.`,
    4: `The driver cap and the pallet cap are the same binding constraint because $T$ is strictly increasing. If $T$ had a hump, a driver cap could sit past the hump and fail to cap pallets. Square-root throughput has no hump. Letter C's falling intensity never turns the total down.`,
  },
};

const fp = path.join(__dirname, "61_70.json");
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
for (const t of arr) {
  console.log(t.id, t.tactical_explanations.map(words).join(" "));
}
