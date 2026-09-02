import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function insertBeforeCloser(text, extra) {
  const t = text.trimEnd();
  const idx = t.lastIndexOf("\n");
  const closer = t.slice(idx + 1);
  const head = t.slice(0, idx).trimEnd();
  return head + "\n\n" + extra.trim() + "\n\n" + closer;
}

const extras = {
  "math-8-51": {
      3: `A second check uses a one-account finite step instead of the derivative. From $n=16$ to $n=17$, $C(17)=100\\cdot 17^{\\frac{3}{4}}\\approx 837$, a rise of about $37$ euros from $C(16)=800$. From $n=81$ to $n=82$, $C(82)=100\\cdot 82^{\\frac{3}{4}}\\approx 2725$, a rise of about $25$ euros from $2700$. The finite steps match the two slopes $\\frac{75}{2}$ and $25$. Later accounts are cheaper to add.

If the logged rise had come from an exponent larger than one, both the doubling factor in letter B and this slope ranking would have flipped together. The two letters are the same $r<1$ fact, read once as a scale and once as a derivative. Changing $A$ scales both slopes by the same factor and cannot reverse $25<\\frac{75}{2}$.`,
    4: `The client's $2700$ cap at $81$ accounts is a different inversion: that one returned $n=81$, not $625$. Mixing the cap with the $12500$ target is how a size near $81$ appears, well below $600$. The $12500$ invoice is a little more than four times $2700$; because $r=\\frac{3}{4}$, a fourfold bill is not a fourfold book. Fourfold bill would need $n$ multiplied by $4^{\\frac{4}{3}}\\approx 6.35$, and $81\\cdot 6.35\\approx 514$, already past $500$ and in the neighbourhood of $625$ once the exact $12500/2700$ ratio replaces a clean four.

A second mix-up is taking $C(n)=100n$ and reading $n=125$ against $600$. A third is taking the rival $R(n)=50n$ to $n=250$. None of those is the practice curve. The practice, with leftover exponent $\\frac{3}{4}$, is why a large invoice demands a book well past $600$ accounts.`,
  },
  "math-8-52": {
      3: `A third concentration makes the same inverse do new work. At $c=0.4$ the formula returns $x=100$, the far-field range in letter C. At $c=3.2$ it returns $x=25$, because $\\left(400/3.2\\right)^{\\frac{2}{3}}=125^{\\frac{2}{3}}=25$. Neither of those ranges was used to fit $A$; both fall out of the same monomial inverse.

A change of units from metres to kilometres would rescale the coefficient by $1000^{-\\frac{3}{2}}$ and leave the inverse still a power of concentration. The opposite verdict would have needed a law that was not a pure power: a decaying exponential in range would invert to a logarithm, not to a monomial. The stem is a single power.`,
  },
  "math-8-53": {
      0: `A numerical check at a second wind makes the monomial visible. At $w=16$, surge is $0.5\\cdot 4=2$ metres and loss is $32\\cdot 8=256$. The composed shortcut $4\\cdot 16^{\\frac{3}{2}}=4\\cdot 64=256$ matches. Two stages collapsed to one power of wind, with no leftover logarithm or additive constant.

If the loss stage had been $32 s^{3}+100$, an intercept, the composition would have ceased to be a power of $w$. The stem has no such intercept. Changing the inner $0.5$ rescales the coefficient $4$ and leaves the exponent $\\frac{3}{2}$ untouched. A reinsurer who reported loss as a table of surge heights, without substituting $s(w)$, would still be looking at a cubic in $s$ rather than a three-halves power of wind.`,
      4: `A second target shows the same inverse on the other side of $50$. A loss of $2048$ inverts to $w=64$, the named wind in letter C. A loss of $4000$ inverts as $4w^{\\frac{3}{2}}=4000$, so $w^{\\frac{3}{2}}=1000$ and $w=1000^{\\frac{2}{3}}\\approx 100$. That $100$ sits above $50$, but it is a different loss. For the named loss of $1000$, the inverse stays near $39.7$.

Changing the outer cube to a square would have left composed exponent $1$, and then $4w=1000$ would have forced $w=250$, above $50$, flipping the letter. The stem cubes surge, so the inverse sits below $50$.`,
  },
  "math-8-54": {
      1: `The logged move from $0.04$ ADV to $0.09$ ADV is not a doubling, but it still tests the charge exponent. Impact rose by $6$ basis points, from $12$ to $18$. The scaled charge rose from $0.04\\cdot 12=0.48$ to $0.09\\cdot 18=1.62$, a factor of $3.375$. A doubling of the charge would have been a factor of $2$ on a doubling of $v$; here even a $2.25$-fold order produced more than a threefold charge, which is $2.25^{\\frac{3}{2}}=3.375$. The charge outruns order size.

If impact had been constant, the charge would have been linear in $v$ and a doubling of order would have doubled the charge. The stem's square-root impact forbids that.`,
      3: `Below the crossing the ranking is the other way around, which is why "once it overtakes" matters. At $v=0.16$, the charge is $60\\cdot(0.16)^{\\frac{3}{2}}=3.84$ and the fee is $4.8$, so the fee is still larger. At $v=0.25$ they meet at $7.5$. At $v=0.36$ the charge has moved ahead to $12.96$ against a fee of $10.8$. One crossing, then the higher exponent stays ahead.

Changing the notional fee from $30v$ to $60v$ would move the crossing to $v=1$, but it would not create a second crossing. A quadratic fee could recross; a linear fee cannot.`,
  },
  "math-8-55": {
    0: `Checking a recovered pair: at $E=160$ the inverse returns $m=64$, the larger logged animal. At $E=90$ it returns $m=27$. The inverse is faithful to the two logged animals, which is what a power inverse must do.

A rushed solver who swapped the variables and kept exponent $\\frac{2}{3}$ would have written $m=10 E^{\\frac{2}{3}}$ and lost the reciprocal. The exponent must take the reciprocal: $\\frac{2}{3}$ becomes $\\frac{3}{2}$. At $E=160$ that wrong inverse would have claimed $m=10\\cdot 160^{\\frac{2}{3}}$, tens of kilograms off the logged $64$.

The opposite verdict would have needed a law that was not a pure power: an exponential metabolic rule, or a sum of two allometric terms, would invert to a logarithm or to a mess. The stem is a single monomial. A change of units from kilograms to grams would rescale the coefficient and leave the inverse still a power of energy.`,
    3: `Checking a concrete pair: two $27$ kg animals use $2\\cdot 90=180$. One $54$ kg animal uses $10\\cdot 54^{\\frac{2}{3}}\\approx 143$. The merge saves energy. At the logged $64$ kg against two $32$ kg animals the same ranking holds, because $2^{\\frac{2}{3}}<2$ at every mass.

A rushed solver who treated energy as proportional to mass would have claimed $E(2m)=2E(m)$ and called the total unchanged. That is exponent $1$, which the logged gap of $70$ units between $27$ kg and $64$ kg already forbade: a linear rule through $E(27)=90$ would have put $E(64)$ at $213$, not at $160$.

Herd totals add individual uses, which is why $2E(m)$ is the right left-hand side. Applying $E$ once to the pooled mass $2m$ is the merge, and that is strictly cheaper when $r<1$. The opposite verdict would have needed leftover exponent $1$, a linear energy law. Allometry with $\\frac{2}{3}$ is why combining two animals into one larger animal is cheaper in energy, not equal.`,
  },
  "math-8-56": {
    1: `The planning file's own two zones already refuse inverse-square: $f(16)/f(4)=50/400=\\frac{1}{8}$, not $\\frac{1}{16}$. A rushed solver who saw a negative exponent and a square in the two distances $4$ and $16$ would have guessed inverse-square. The distances being squares is a convenience for the three-halves power, not a hint at exponent $-2$.`,
    3: `Ten kilometres still sits inside, because $10^{1.5}\\approx 31.62<32$, so $f(10)\\approx 101.2>100$. Eleven kilometres is already out, because $11\\sqrt{11}\\approx 36.48>32$, so $f(11)\\approx 87.7<100$. Core catchment already ends before $11$ kilometres, just after $10$.

A rushed solver who inverted as if the exponent were $-1$ would have claimed $d=32$, well past $11$, and flipped the verdict. Inverse-linear thinking overstates the catchment when decay is steeper than $-1$. Another mix-up is treating the far logged zone of $16$ km as the boundary, because $f(16)=50$ is already under $100$. That zone is past the boundary; it is not the boundary.

The opposite verdict would have needed a larger core floor, or a smaller coefficient, so that the inverted distance fell through $11$ from the other side. At the recovered $A=3200$ and floor $100$, the boundary is locked near $10.08$ km. Changing the floor from $100$ to $50$ would push the boundary out to $16$ km, which is past $11$; that is a different planning rule.`,
    4: `Checking a one-kilometre finite step: from $4$ to $5$ km, $f(5)=3200/5^{1.5}\\approx 286$, a drop of about $114$. From $16$ to $17$ km, $f(17)\\approx 45.6$, a drop of about $4.4$. The finite steps agree with the derivatives. Distance-decay drops are steepest at the door, not out on the ring road.

A rushed solver who saw $f(4)=400$ much larger than $f(16)=50$ and inferred that far drops must be larger in count would have confused a smaller remaining footfall with a steeper cut. The remaining pool is smaller far away; the slope is also flatter.

The opposite verdict would have needed a positive leftover exponent on the slope size, which would have required the original exponent to sit in a range that made $|f'|$ grow with $d$. For $r=-\\frac{3}{2}$, $|f'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $150>4.69$.`,
  },
  "math-8-57": {
    1: `A rushed solver who doubled $360$ would have claimed $720$ and called the statement true. That is exponent $1$, which letter A already refused. Another mix-up is adding $240$ kWh from the small array onto $360$, as if the proposal installed a second $100$ m² roof rather than doubling the $225$ m² roof. That sum is $600$, also above $520$, and it is the wrong experiment.

The opposite verdict would have needed a larger exponent, or a larger coefficient, so that $y(450)$ rose through $520$. At the recovered square-root law, the proposal is locked near $509$. A coefficient of $25$ instead of $24$ would have given about $530$, just over $520$; the two logged arrays force $A=24$, not $25$.

The $520$ cutoff is a near miss on $\\sqrt{2}\\cdot 360\\approx 509$, not a rounding of it. Five hundred and nine sits under five hundred and twenty, and that is the whole letter.`,
    2: `Checking the two logged arrays makes the fall concrete. At $100$ m² the intensity is $2.4$ kWh per square metre. At $225$ m² it is $360/225=1.6$. Intensity has already fallen while the total rose from $240$ to $360$.`,
    3: `A doubling of area to $200$ m² would only multiply output by $\\sqrt{2}$, to about $339$ kWh, short of $480$. The $100$ m² array must quadruple, which is more than a doubling. Any $r<1$ doubling of output requires more than a doubling of area.

A rushed solver who doubled the area with the output would have claimed $200$ m² and called "more than a doubling" false. That is exponent $1$. The opposite verdict would have needed $r\\ge 1$, so that doubling output needed at most a doubling of area. The two logged arrays already force $r=\\frac{1}{2}$.

The same $a=400$ reappears in letter E as a level. This letter is the inversion that produces it: $24\\sqrt{a}=480$ forces $\\sqrt{a}=20$.`,
  },
  "math-8-58": {
    1: `Checking the milestones: $S(100)=8000$ and $S(400)=16000$. Unit cost halved; spend doubled. The two stories run in opposite directions. A rushed solver who saw unit cost falling and inferred that the total cheque must fall would have mixed a per-cell figure with a cumulative one. The title tracks both.

The opposite verdict would have needed leftover exponent on $S$ to be negative, hence $b<-1$. The recovered $b=-\\frac{1}{2}$ is not that steep. An inverse-square unit cost, $b=-2$, would have made spend fall as $N^{-1}$; the two milestones $80$ then $40$ over a quadrupling of volume already refuse any $b$ other than $-\\frac{1}{2}$.

Cumulative spend $S=N c(N)$ is the product of a rising volume and a falling unit cost. When the unit-cost exponent sits above $-1$, volume wins and the cheque still grows. That is this learning curve.`,
    3: `A rushed solver who multiplied the old spend $8000$ by the old unit-cost factor held fixed, treating spend as $N\\cdot 80$, would have claimed $32000$ at $400$ thousand cells, a quadrupling of spend, and called "more than a doubling" true. That ignores learning. Unit cost halves on that quadrupling, so spend only doubles.

The opposite verdict would have needed leftover exponent on $S$ larger than $\\frac{1}{2}$, so that a factor of $4$ on $N$ produced more than a factor of $2$ on $S$. The recovered $b=-\\frac{1}{2}$ locks $S$ to a square root. Changing the two milestone costs would change $A$ and scale both spends by the same factor; it would not turn a doubling into more than a doubling.

The claim's "more than doubles" would have been right for a shallower learning exponent, closer to $0$, where unit cost barely falls. The logged halving of unit cost on a quadrupling of volume is exactly square-root spend.`,
  },
  "math-8-59": {
    0: `Checking a concrete pair: at the gauged discharge $q=36$, transport is $135$. At $q=72$, the composed law gives $0.625\\cdot 72^{1.5}\\approx 382$, and $382/135\\approx 2.83$, not $2$. A rushed solver who doubled $S$ with $q$ because "more flow, more sediment" would have claimed a factor of $2$ and called "more than doubles" false. That is exponent $1$.

The first stage alone, $S(v)=5v^{3}$, would have scaled an eightfold on a doubled velocity. Discharge, however, only squares into velocity through $v(q)=\\frac{1}{2}q^{\\frac{1}{2}}$, so the composed leftover is three halves, not three. Mixing the velocity doubling with the discharge doubling is how an eightfold claim appears; this letter asks about discharge.

The opposite verdict would have needed the two stages to cancel to exponent $1$. A square-root transport on a square-root velocity would have done that. The stem cubes velocity, so the product sits above one.`,
    2: `A rushed solver who evaluated $S(v)$ at $v=400$ instead of $S(q)$ at $q=400$ would have claimed $5\\cdot 400^{3}$, an enormous figure, still above $4500$ but from mixing the two stages. Velocity at discharge $400$ is $10$, not $400$. Another mix-up is reading the stability limit $5000$ as if the claim named $5000$ rather than $4500$. Five thousand clears four thousand five hundred, and that is the comparison.

The opposite verdict would have needed a smaller composed coefficient, so that $S(400)$ fell through $4500$. At the recovered law, four hundred is locked at the $5000$ t/day limit. Changing the gauged $135$ t/day at $v=3$ would rescale $A$ and move the limit; it would not move $q=400$ off the recovered limit unless the $5000$ cap itself moved.

The $4500$ cutoff is a near miss on the limit, not a rival inversion. The channel is already at its stability ceiling at $q=400$, hence already above $4500$.`,
  },
  "math-8-60": {
    1: `Checking the recovered levels: at $p=2$, revenue is $1000$. At $p=2.50$, revenue is $640$. The till has already shrunk. There is no interior maximum on $p>0$; the slope $R'(p)=-8000 p^{-3}$ stays negative for every positive price.

A rushed solver who remembered "raise price, raise revenue" from inelastic demand would have flipped the verdict. Elasticity $-3$ is far into the elastic region, where a price rise cuts the till. The usual unit-elastic boundary is leftover exponent $0$ on $R$, which would have needed demand exponent $-1$. The stem is $p^{-3}$.

The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand exponent greater than $-1$. A $10\\%$ indexation would then have raised the till. Along this curve it cuts the till, which is the same fact letter E reads against a reversed slogan.`,
    3: `Starting from $q(2)=500$, a $10\\%$ rise to $p=2.20$ gives $q(2.2)=4000/2.2^{3}\\approx 376$, a loss of about $124$ units, which is $24.8\\%$ of $500$. A rushed solver who used the shortcut's $30\\%$ would still have sat above $20\\%$, for a slightly wrong size. Another mix-up is applying the revenue factor $1.1^{-2}\\approx 0.826$ to quantity and claiming only a $17\\%$ cut, which would flip the letter.

The opposite verdict would have needed a demand exponent closer to zero, so that $1.1^{r}$ cut quantity by $20\\%$ or less. Solving $1.1^{r}=0.80$ gives $r\\approx -2.34$, already shallower than $-3$. At $r=-3$, the exact cut is locked near $25\\%$.

The elasticity shortcut overstates the cut at $30\\%$. This letter does not need the shortcut: the exact power $1.1^{-3}$ is already more than a $20\\%$ loss. Letter E then reads the same $10\\%$ move against revenue rather than against quantity.`,
  },
};

const fp = path.join(__dirname, "51_60.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  for (const [j, extra] of Object.entries(ex)) {
    const i = Number(j);
    t.tactical_explanations[i] = insertBeforeCloser(t.tactical_explanations[i], extra);
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  console.log(t.id, t.tactical_explanations.map(words).join(" "));
}
