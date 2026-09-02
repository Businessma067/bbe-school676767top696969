import fs from "fs";

const FROZEN = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];

const letters = ["A", "B", "C", "D", "E"];

function apply(rel, patches) {
  const fp = new URL(rel, import.meta.url);
  const data = JSON.parse(fs.readFileSync(fp, "utf8"));
  const orig = JSON.parse(JSON.stringify(data));
  for (const t of data) {
    const p = patches[t.id];
    if (!p) throw new Error("missing patch " + t.id);
    if (p.tacticals.length !== 5) throw new Error("need 5 letters " + t.id);
    t.solution_overview = p.overview;
    t.tactical_explanations = p.tacticals;
  }
  for (let i = 0; i < data.length; i++) {
    for (const k of FROZEN) {
      if (JSON.stringify(data[i][k]) !== JSON.stringify(orig[i][k])) {
        throw new Error("frozen " + orig[i].id + " " + k);
      }
    }
    const keys = orig[i].answer_key;
    for (let j = 0; j < 5; j++) {
      const head = data[i].tactical_explanations[j].split("\n")[0];
      const want = `**${letters[j]}.** → ${keys[j] ? "True" : "False"}`;
      if (head !== want) throw new Error("header " + orig[i].id + " " + head);
      const body = data[i].tactical_explanations[j];
      const close = keys[j] ? "so the statement is True." : "so the statement is False.";
      if (!body.includes(close)) throw new Error("closer " + orig[i].id + " " + letters[j]);
    }
    const blob =
      data[i].solution_overview + "\n" + data[i].tactical_explanations.join("\n");
    for (const ban of [
      "the overview already",
      "Part 1",
      "Part 2",
      "Part 3",
      "\u2014",
      "\u2013",
      "${",
    ]) {
      if (blob.includes(ban)) throw new Error("banned `" + ban + "` in " + orig[i].id);
    }
  }
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + "\n");
  console.log("wrote", rel, data.length);
}

const patches = {
  "math-8-71": {
    overview: `A streaming tier has paid subscribers $q(p)=A p^{r}$ thousand at price $p$ euros a month. Quadrupling any price multiplies the subscriber count by $\\frac{1}{8}$, and at $4$ euros the tier holds $250$ thousand subscribers. Monthly revenue is $R=pq$, also in thousands of euros.

The scale rule isolates $r$; the four-euro level then pins $A$:

$$4^{r}=\\frac{1}{8}$$

$$A\\cdot 4^{r}=250$$

Revenue adds one to the exponent.`,
    tacticals: [
      `**A.** → True

The scale rule is $4^{r}=\\frac{1}{8}$. Because $4^{\\frac{3}{2}}=8$,

$$r=-\\frac{3}{2}$$

That exponent sits below $-1$, so a price factor $k>1$ cuts subscribers by more than $k^{-1}$. Subscribers fall faster than the price rises, so the statement is True.`,
      `**B.** → True

From $r=-\\frac{3}{2}$ and $A\\cdot\\frac{1}{8}=250$, the coefficient is $A=2000$, so $R(p)=2000 p^{-\\frac{1}{2}}$. At $16$ euros:

$$R(16)=\\frac{2000}{4}=500$$

Five hundred sits under $600$, so the statement is True.`,
      `**C.** → True

Price times $p^{-\\frac{3}{2}}$ demand leaves leftover exponent $-\\frac{1}{2}$:

$$R(p)=A p^{-\\frac{1}{2}}$$

A monomial is a power function, so revenue is a power of price. Stopping at $q$ would have left exponent $-\\frac{3}{2}$, so the statement is True.`,
      `**D.** → False

To double revenue from $R(4)=1000$, the price factor $k$ satisfies $k^{-\\frac{1}{2}}=2$, so

$$k=\\frac{1}{4}$$

The service must cut that price to a quarter, not to a half. Halving would multiply revenue only by $\\sqrt{2}\\approx 1.41$, so the statement is False.`,
      `**E.** → False

At $9$ euros, with $R(p)=2000 p^{-\\frac{1}{2}}$,

$$R(9)=\\frac{2000}{3}\\approx 667$$

which sits above $600$, not under it. Nine contributes a square root of $3$. The till has fallen from the $4$-euro $1000$, but not as far as the claimed under-$600$ line, so the statement is False.`,
    ],
  },
  "math-8-72": {
    overview: `A compliance-monitoring platform bills $C(n)=F+A n^{\\frac{1}{2}}$ euros a month for $n\\ge 1$ branches, with both constants unknown. $100$ branches cost $700$ euros, and $400$ branches cost $1000$ euros.

Two levels recover $F$ and $A$, because the square roots $10$ and $20$ are known:

$$F+10A=700$$

$$F+20A=1000$$

A nonzero retainer means $C$ is not a pure power of $n$.`,
    tacticals: [
      `**A.** → True

Subtracting the two invoices isolates the variable term: $10A=300$, so $A=30$ and $F=400$. The bill is

$$C(n)=400+30\\sqrt{n}$$

A pure power $A n^{r}$ cannot carry a nonzero intercept, and the retainer is $400$ euros, so the statement is True.`,
      `**B.** → True

With $C(n)=400+30\\sqrt{n}$, nine hundred branches contribute a square root of $30$:

$$C(900)=400+900=1300$$

One thousand three hundred sits above $1200$. Dropping the retainer would have claimed $900$ and missed the floor, so the statement is True.`,
      `**C.** → True

Cost per branch is

$$\\frac{C(n)}{n}=\\frac{400}{n}+30 n^{-\\frac{1}{2}}$$

Both pieces decline as the network grows: the retainer is spread, and the leftover exponent on the variable term is negative. A larger network is cheaper per branch even while the total bill rises, so the statement is True.`,
      `**D.** → False

Quadrupling $n$ doubles the square-root term, from $30\\sqrt{n}$ to $60\\sqrt{n}$, but the $400$-euro retainer stays put. The whole bill is not doubled. Only a pure power would scale that cleanly, and the retainer stops this bill from being one, so the statement is False.`,
      `**E.** → False

At $36$ branches, $\\sqrt{36}=6$:

$$C(36)=400+180=580$$

The $100$-branch invoice is $700$, and $580<700$. Thirty-six branches still sit below that invoice, so the statement is False.`,
    ],
  },
  "math-8-73": {
    overview: `A spare-parts depot reorders in batches of $q>0$ units. Annual ordering cost is $O(q)=A q^{-1}$ euros and annual holding cost is $H(q)=B q$ euros. At a batch of $40$ units the two components are equal, and each is $120$ euros. The annual total is $T=O+H$.

The common level recovers both coefficients:

$$\\frac{A}{40}=120$$

$$40B=120$$

For this pair of exponents the minimum of $T$ is the same crossing. Reciprocal batches with product $A/B$ preserve $T$.`,
    tacticals: [
      `**A.** → True

The recorded crossing gives $\\frac{A}{40}=120$ and $40B=120$, so $A=4800$ and $B=3$. The slope of $T(q)=\\frac{4800}{q}+3q$ is

$$T'(q)=-4800 q^{-2}+3$$

which is zero at $q=40$. The second derivative $T''>0$, so the crossing is a minimum. Annual total cost is smallest where the two components meet, so the statement is True.`,
      `**B.** → True

Ordering $A/40=120$ and holding $40B=120$ recover $A=4800$ and $B=3$. A batch of $60$ then costs

$$O(60)=80,\\qquad H(60)=180$$

$$T(60)=260$$

Two hundred and sixty sits above $250$. Sixty is past the minimum, so the total has already ticked up from $240$, so the statement is True.`,
      `**C.** → False

From $\\frac{A}{40}=120$ and $40B=120$, one has $T(q)=\\frac{4800}{q}+3q$. Doubling an arbitrary batch gives $T(2q)=\\frac{2400}{q}+6q$, which equals $T(q)$ only for special pairs. Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing:

$$T(80)=300\\neq T(40)=240$$

so the statement is False.`,
      `**D.** → True

With $T(q)=\\frac{4800}{q}+3q$ from the crossing $O=H=120$ at $q=40$, the batches $20$ and $80$ are the reciprocal pair around $40$ with product $1600$:

$$T(20)=300,\\qquad T(80)=300$$

Each move from $40$ raises the annual total by $60$ euros, so the two moves cost the same. That is the EOQ symmetry, so the statement is True.`,
      `**E.** → False

The crossing $\\frac{A}{40}=120$ forces $A=4800$. At $80$ units, ordering cost is

$$O(80)=\\frac{4800}{80}=60$$

which sits well below $200$. Holding is the large term on this side of the crossing. Mixing $O$ with $T(80)=300$ is how a "more than $200$" ordering claim appears, so the statement is False.`,
    ],
  },
  "math-8-74": {
    overview: `Output on a bottling line follows $Q(L)=A L^{r}$ units a shift for labour hours $L>0$. $16$ hours produce $96$ units, and $81$ hours produce $324$. Average product is output per labour hour, $Q(L)/L$.

The ratio isolates $r$; the sixteen-hour level then pins $A$:

$$\\frac{324}{96}=\\left(\\frac{81}{16}\\right)^{r}$$

$$A\\cdot 16^{r}=96$$

Dividing by $L$ subtracts one from the exponent.`,
    tacticals: [
      `**A.** → True

The two shifts give $\\left(\\frac{81}{16}\\right)^{r}=\\frac{27}{8}$. Because $\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}$ and $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$,

$$r=\\frac{3}{4}$$

Average product is then $12 L^{-\\frac{1}{4}}$. The leftover exponent $-\\frac{1}{4}$ is not the output exponent $\\frac{3}{4}$. Average product is still a power of hours, but a different power, so the statement is True.`,
      `**B.** → True

At $16$ hours the logged output is $96$ units, so average product is

$$\\frac{96}{16}=6$$

Six sits under $7$. That logged level does not need a second recovery of $A$, so the statement is True.`,
      `**C.** → False

To double output, $k^{\\frac{3}{4}}=2$ forces

$$k=2^{\\frac{4}{3}}\\approx 2.52$$

more than a doubling of hours. Doubling labour would multiply output only by $2^{\\frac{3}{4}}\\approx 1.68$. A three-quarters technology will not keep pace with the clock, so the statement is False.`,
      `**D.** → True

Average product falls from $6$ at $L=16$ to $4$ at $L=81$, because $324/81=4$. The leftover exponent $-\\frac{1}{4}$ is negative, so the average declines as labour hours rise. Falling average and $r<1$ are the same story, so the statement is True.`,
      `**E.** → False

At $81$ hours the average is $4$, which does not exceed $5$:

$$\\frac{324}{81}=4$$

The sixteen-hour average of $6$ is the one still above $5$; by eighty-one hours it has already fallen, so the statement is False.`,
    ],
  },
  "math-8-75": {
    overview: `Labour time of the unit built after $n$ cumulative units follows $t(n)=F+A n^{-\\frac{1}{2}}$ minutes for $n\\ge 1$. After $25$ units the next unit takes $18$ minutes, and after $100$ units it takes $13$.

Two levels recover $F$ and $A$:

$$F+\\frac{A}{5}=18$$

$$F+\\frac{A}{10}=13$$

Scaling rules apply to the learning term alone. The floor $F$ is a horizontal asymptote.`,
    tacticals: [
      `**A.** → True

Subtracting the two timings gives $A/10=5$, so $A=50$ and $F=8$. The model is $t(n)=8+50 n^{-\\frac{1}{2}}$, and

$$\\lim_{n\\to\\infty}t(n)=8$$

No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the handling floor is approached and never attained, so the statement is True.`,
      `**B.** → True

After $900$ cumulative units, $\\sqrt{900}=30$:

$$t(900)=8+\\frac{50}{30}=8+\\frac{5}{3}=\\frac{29}{3}\\approx 9.67$$

which sits under $10$. The floor is close, but the learning term is still a sliver, so the statement is True.`,
      `**C.** → True

The learning component scales as $n^{-\\frac{1}{2}}$, so quadrupling $n$ multiplies it by

$$4^{-\\frac{1}{2}}=\\frac{1}{2}$$

The floor is untouched by this scaling, but the claim is only about the learning term. Inverse-square-root learning halves on a fourfold volume, so the statement is True.`,
      `**D.** → False

Quadrupling volume halves the learning term, but the eight-minute floor stays put and dilutes the gain in the total. From $t(25)=18$ a halved learning term cuts the total only from $18$ to $13$, not to $9$. The intercept is why the learning term can halve while the whole unit time does not, so the statement is False.`,
      `**E.** → False

After $4$ cumulative units, $\\sqrt{4}=2$:

$$t(4)=8+\\frac{50}{2}=33$$

which sits above $30$. The power term has fallen from the first unit, but not far enough to pull the unit under thirty minutes, so the statement is False.`,
    ],
  },
  "math-8-76": {
    overview: `A fish farm turns feed into harvest revenue $R(x)=A x^{\\frac{2}{3}}$ thousand euros for $x>0$ tonnes of feed, while feed and handling cost $C(x)=30x$ thousand euros. At $8$ tonnes of feed, harvest revenue was $360$ thousand euros.

The exponent is given, so the eight-tonne level pins $A$:

$$A\\cdot 8^{\\frac{2}{3}}=360$$

Cost is linear, so a curve with exponent $\\frac{2}{3}$ is overtaken once. Net is $R-C$, and the ratio $R/C$ falls as $x$ grows.`,
    tacticals: [
      `**A.** → False

From $8^{\\frac{2}{3}}=4$, the calibration is $A=90$, so $R(x)=90 x^{\\frac{2}{3}}$. Doubling feed multiplies revenue by

$$2^{\\frac{2}{3}}\\approx 1.59$$

not by $2$. Revenue rises more slowly than feed. Proportionality would have required lockstep, so the statement is False.`,
      `**B.** → True

At $64$ tonnes, sixty-four is $4^{3}$, so the two-thirds power is $16$:

$$R(64)=90\\cdot 16=1440$$

$$C(64)=1920$$

Cost already exceeds harvest revenue. Past the break-even $x=27$, the linear cost is ahead, so the statement is True.`,
      `**C.** → False

The leftover slope is

$$R'(x)=60 x^{-\\frac{1}{3}}$$

After $8$ tonnes that is $30$. After $27$ tonnes it is $20$. An extra tonne adds less revenue later, not more. A two-thirds harvest flattens, so the statement is False.`,
      `**D.** → True

The ratio of revenue to cost is

$$\\frac{R(x)}{C(x)}=\\frac{3}{x^{\\frac{1}{3}}}$$

They meet at $x=27$. Past that planting the cube root keeps growing, so the ratio stays below $1$ and keeps falling. Extra feed widens the gap; it cannot restore a surplus, so the statement is True.`,
      `**E.** → True

At $8$ tonnes, logged revenue $360$ minus cost $240$ is profit

$$P(8)=120$$

One hundred and twenty sits above $100$. Using revenue in place of profit would have claimed $360$ and overshot the letter, so the statement is True.`,
    ],
  },
  "math-8-77": {
    overview: `Daily handling cost follows $f(x)=A x^{\\frac{3}{2}}$ euros for pallet-volume index $x>0$. The individual daily figures were lost; the only surviving record states that the cost at index $16$ exceeds the cost at index $4$ by $336$ euros.

No single level is known, so $A$ comes out of a difference:

$$A\\left(16^{\\frac{3}{2}}-4^{\\frac{3}{2}}\\right)=336$$

A scale question uses $\\frac{f(kx)}{f(x)}=k^{\\frac{3}{2}}$.`,
    tacticals: [
      `**A.** → False

A factor of $4$ on the index multiplies cost by

$$4^{\\frac{3}{2}}=8$$

not by $4$. A four-fold factor would belong to exponent $1$. The three-halves exponent outruns the index, so the statement is False.`,
      `**B.** → True

The shape factors are $16^{\\frac{3}{2}}=64$ and $4^{\\frac{3}{2}}=8$, so $56A=336$ and $A=6$. At index $9$:

$$9^{\\frac{3}{2}}=27$$

$$f(9)=6\\cdot 27=162$$

One hundred and sixty-two sits above $150$, so the statement is True.`,
      `**C.** → True

The exponent $\\frac{3}{2}>1$, and the same $4^{\\frac{3}{2}}=8$ from A is already larger than $4$. Cost grows faster than the pallet-volume index. A proportional handler would have carried exponent $1$, so the statement is True.`,
      `**D.** → False

The leftover slope is

$$f'(x)=9\\sqrt{x}$$

which is $18$ at index $4$ and $27$ at index $9$. Because $27>18$, later index steps of the same width add more euros than earlier ones. Equal gaps in the index do not produce equal gaps in cost when $r>1$, so the statement is False.`,
      `**E.** → False

Raising the index from $9$ to $25$ adds

$$f(25)-f(9)=750-162=588$$

which is not under $500$. Twenty-five contributes $5^{3}=125$, times $6$ is $750$. Five hundred and eighty-eight euros is not under five hundred, so the statement is False.`,
    ],
  },
  "math-8-78": {
    overview: `A dye-house discharges wastewater load $W(s)=A s^{\\frac{3}{2}}$ kilograms a day for production scale $s>0$. At scale $9$ the daily load is $135$ kilograms. The site permit caps the daily load at $320$ kilograms.

The recorded level pins $A$:

$$A\\cdot 9^{\\frac{3}{2}}=135$$

A cap on load becomes a cap on scale by inversion, with reciprocal exponent $\\frac{2}{3}$.`,
    tacticals: [
      `**A.** → True

A nonzero power inverts to another power. From $W=A s^{\\frac{3}{2}}$,

$$s=\\left(\\frac{W}{A}\\right)^{\\frac{2}{3}}$$

The new exponent is the reciprocal of $\\frac{3}{2}$. Scale needed for a given load is still a monomial in $W$, so the statement is True.`,
      `**B.** → True

The recorded load gives $9^{\\frac{3}{2}}=27$, so $27A=135$ and $A=5$. The $320$ kg cap then inverts as

$$5 s^{\\frac{3}{2}}=320$$

$$s^{\\frac{3}{2}}=64$$

$$s=16$$

Sixteen sits below $20$. Every larger index breaches the permit, so the statement is True.`,
      `**C.** → False

Doubling the ceiling multiplies admissible scale by

$$2^{\\frac{2}{3}}\\approx 1.59$$

not by $2$. The inverse exponent $\\frac{2}{3}<1$, so permitted scale grows more slowly than the permitted load. Linear thinking on the inverse is the mismatch, so the statement is False.`,
      `**D.** → False

If $A$ doubled, the admissible scale would satisfy $10 s^{\\frac{3}{2}}=320$, so

$$s=32^{\\frac{2}{3}}\\approx 10.08$$

not $8$. The scale factor is $2^{-\\frac{2}{3}}\\approx 0.63$, not $\\frac{1}{2}$. Halving $s$ would have needed inverse exponent $-1$ on $A$, so the statement is False.`,
      `**E.** → True

At scale index $4$, with $A=5$, four contributes $2^{3}=8$:

$$W(4)=5\\cdot 8=40$$

Forty sits under $50$. The load has grown with scale, but at this small index it is still below the named line, so the statement is True.`,
    ],
  },
  "math-8-79": {
    overview: `Hourly parking demand follows $q(p)=A p^{-2}$ occupied spaces for tariff $p>0$ euros. The file records $4000$ occupied spaces at a tariff of $3$ euros. Demand of this form has constant elasticity $-2$, so the usual shortcut predicts a percentage change in demand equal to $-2$ times the percentage change in tariff.

The observed pair pins the coefficient:

$$A\\cdot 3^{-2}=4000$$

For a tariff factor $k$, the shortcut returns $-2(k-1)$ and the exact rule returns $k^{-2}-1$.`,
    tacticals: [
      `**A.** → False

The elasticity shortcut predicts $-2\\times 25\\%=-50\\%$. The exact factor is

$$\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}=0.64$$

a cut of $36\\%$, not $50\\%$. The two methods disagree. Linearizing a power at a $25\\%$ step is too coarse, so the statement is False.`,
      `**B.** → True

After a $25\\%$ rise the exact demand is

$$4000\\cdot\\frac{16}{25}=2560$$

which sits above $2500$. The $2500$ cutoff is a near miss on that exact inverse-square step, so the statement is True.`,
      `**C.** → True

The shortcut claims a $50\\%$ loss; the exact cut is $36\\%$. A predicted $50\\%$ against a true $36\\%$ overstates the loss. The two methods disagree on the size of the cut, so the statement is True.`,
      `**D.** → False

A $25\\%$ rise cuts demand by $36\\%$. A $25\\%$ cut raises it by

$$\\left(\\frac{3}{4}\\right)^{-2}-1=\\frac{16}{9}-1=\\frac{7}{9}\\approx 77.8\\%$$

Inverse-square percentage changes are not symmetric. The two percentages are not the same, so the statement is False.`,
      `**E.** → True

From $A/9=4000$, the coefficient is $A=36000$. At a tariff of $2$ euros:

$$q(2)=\\frac{36000}{4}=9000$$

Nine thousand sits above $8000$. Cutting the tariff from $3$ to $2$ is not a $25\\%$ move; this letter is a separate level, so the statement is True.`,
    ],
  },
  "math-8-80": {
    overview: `Geometrically similar bronze bells have mass $M(h)=A h^{3}$ kilograms for height $h>0$ metres. The pattern book omits the coefficient; it records only that a finished bell of height $0.5$ metres was weighed at $30$ kilograms.

Geometric similarity fixes the exponent at $3$; one observed pair pins $A$:

$$A(0.5)^{3}=30$$

A height multiplier $k$ scales mass by $k^{3}$.`,
    tacticals: [
      `**A.** → True

Doubling height multiplies mass by

$$2^{3}=8$$

which exceeds $2$. Mass grows faster than height. A proportional casting would have carried exponent $1$. Geometric similarity is a volume scaling, so the leftover exponent is $3$, so the statement is True.`,
      `**B.** → True

The weighed bell gives $A\\cdot\\frac{1}{8}=30$, so $A=240$ and $M(h)=240 h^{3}$. Height $1.5$ is three times the $0.5$ m pattern, so mass multiplies by $27$:

$$M(1.5)=30\\cdot 27=810$$

which sits above $700$. Linear scaling would have claimed $90$ kg, so the statement is True.`,
      `**C.** → False

Doubling height multiplies mass by $8$, not by $2$. The half-metre bell at $30$ kg would become $240$ kg at one metre, not $60$ kg. The cube of a doubling is $8$, not $2$, so the statement is False.`,
      `**D.** → False

Mass per metre is $M(h)/h=240 h^{2}$, which rises with height. At $0.5$ m the quotient is $60$; at $1$ m it is $240$. A constant intensity would have needed exponent $1$, so the statement is False.`,
      `**E.** → True

At a unit height the cube is $1$, so the mass equals the coefficient:

$$M(1)=240$$

Two hundred and forty sits above $200$. That $A$ is the one-metre bell, so the statement is True.`,
    ],
  },
};

apply("./71_80.json", patches);
