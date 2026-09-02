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
    0: `Checking the recovered demand $q(p)=2000 p^{-\\frac{3}{2}}$: a price factor $2$ cuts subscribers by $2^{-\\frac{3}{2}}\\approx 0.354$, steeper than a half. Inverse-linear demand would have been exponent $-1$. The opposite verdict would have needed $r$ at or above $-1$. The scale rule $4^{r}=\\frac{1}{8}$ locks $r=-\\frac{3}{2}$.`,
    1: `A rushed solver who used $R(4)=1000$ against the $600$ cutoff would have called the statement false. Letter B names $16$ euros, a quadrupling of the logged price, which halves revenue because leftover exponent $-\\frac{1}{2}$ sends $4^{-\\frac{1}{2}}=\\frac{1}{2}$. The opposite verdict would have needed a larger coefficient, so that $R(16)$ rose through $600$.`,
    2: `Stopping at $q$ would have left exponent $-\\frac{3}{2}$. Multiplying by $p$ raises the exponent by one. Both are powers; they are different powers. The opposite verdict would have needed demand that was not a power, for instance a linear demand, whose revenue would be quadratic.`,
    3: `Halving the $4$-euro price would multiply revenue by $2^{\\frac{1}{2}}\\approx 1.41$, to about $1414$, short of a doubling to $2000$. The service must cut the price to $1$ euro, a quarter, not to $2$ euros. A rushed solver who treated leftover exponent $-1$ would have claimed a half-price doubling of revenue, which is this letter's false claim. Inverse-linear revenue would have doubled on a halving; leftover exponent $-\\frac{1}{2}$ needs a fourfold price cut.

Checking $R(1)=2000$ and $R(2)=2000/\\sqrt{2}\\approx 1414$. The half-price till is not a doubling. The opposite verdict would have needed leftover exponent $-1$ on $R$, hence demand exponent $-2$. The scale rule locked demand at $-\\frac{3}{2}$.`,
    4: `A rushed solver who compared $R(16)=500$ from letter B with the $9$-euro till would have expected $9$ to sit under $600$ as well, because $9>4$. Revenue has fallen from $R(4)=1000$, but only to about $667$, still above $600$. Nine contributes a square root of $3$. The opposite verdict would have needed a smaller coefficient, so that $R(9)$ fell through $600$.`,
  },
  "math-8-72": {
    0: `A pure power $A n^{r}$ cannot carry a nonzero intercept, and the retainer is $400$ euros. Subtracting the two invoices isolated $10A=300$, so $A=30$ and $F=400$. The opposite verdict would have needed $F=0$. A third invoice lying on $C=30\\sqrt{n}$ with no intercept would have been a different contract. The stem's two invoices force a floor of $400$ euros.`,
    1: `Dropping the retainer would have claimed $900$ and missed the floor. A rushed solver who used $C(400)=1000$ and scaled by $\\sqrt{900/400}=1.5$ without the intercept would have claimed $1500$, still above $1200$ but from treating the bill as a pure square root. The recovered bill is $400+900=1300$. The opposite verdict would have needed a smaller $A$, so that $C(900)$ fell through $1200$.`,
    2: `Checking the two invoices: cost per branch is $7$ euros at $100$ branches and $2.5$ euros at $400$. Intensity has already fallen while the total rose from $700$ to $1000$. A rushed solver who saw a larger total and inferred a larger per-branch figure would have flipped the verdict. The opposite verdict would have needed leftover intensity that rose with $n$. Both pieces of $C(n)/n$ fall.`,
    3: `Quadrupling $n$ doubles the square-root term, from $30\\sqrt{n}$ to $60\\sqrt{n}$, but the $400$-euro retainer stays put. From $C(100)=700$ the quadrupled bill is $C(400)=1000$, not $1400$. Only a pure power would scale that cleanly, and the retainer stops this bill from being one.

A rushed solver who doubled $700$ would have claimed $1400$ and called the statement true. That ignores the floor. The opposite verdict would have needed $F=0$. Letter A already used that nonzero retainer; this letter is the same intercept, now read as a failed scale identity.`,
    4: `A rushed solver who compared $36$ branches with $100$ and expected a larger bill because "more branches cost more" would still have the right ranking, $580<700$, but might have thought the claim was about per-branch cost. Letter E names the whole invoice. The opposite verdict would have needed $C(36)>C(100)$, which would have required a falling total, impossible while both $F$ and $A$ are positive.`,
  },

  "math-8-73": {
    0: `The slope of $T(q)=\\frac{4800}{q}+3q$ is $T'(q)=-4800 q^{-2}+3$, which is zero at $q=40$. The second derivative $T''>0$, so the crossing is a minimum. A rushed solver who treated "two costs equal" as an accounting coincidence rather than as the EOQ first-order condition would have missed why the meeting is the cheapest batch. The opposite verdict would have needed different leftover exponents, so that $T'=0$ sat away from $O=H$. For this pair $O\\propto q^{-1}$ and $H\\propto q$, the meeting is the minimum.`,
    1: `Sixty is past the minimum, so the total has already ticked up from $T(40)=240$ to $260$. A rushed solver who averaged $O$ and $H$ as $120$ each at every batch would have claimed $T=240$ still, under $250$, and flipped the verdict. The opposite verdict would have needed $T(60)\\le 250$, hence a flatter pair of coefficients.`,
    2: `Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing. $T(80)=300\\neq T(40)=240$. A rushed solver who remembered EOQ symmetry and doubled $40$ to $80$ would have expected a tie, mixing the pair $20$ with $80$ from letter D. This letter doubles an arbitrary batch, not the reciprocal pair. The opposite verdict would have needed leftover exponents that made $T$ homogeneous of degree $0$, a constant total.`,
    3: `The batches $20$ and $80$ are the reciprocal pair around $40$ with product $1600$: $T(20)=300$ and $T(80)=300$. Each move from $40$ raises the annual total by $60$ euros, so the two moves cost the same. That is the EOQ symmetry $T(1600/q)=T(q)$.

A rushed solver who computed only $T(20)=300$ and guessed $T(80)$ larger because "$80$ is farther from $40$ than $20$ is on a linear ruler" would have missed that the scale is reciprocal, not linear. On a log-batch axis the two moves are equal. The opposite verdict would have needed a holding exponent other than $1$, which would break the $q\\leftrightarrow 1600/q$ symmetry.`,
    4: `Holding is the large term on this side of the crossing: $H(80)=240$, while ordering is $60$. Mixing $O$ with $T(80)=300$ is how a "more than $200$" ordering claim appears. A rushed solver who swapped $O$ and $H$ at $q=80$ would have claimed holding $60$ and ordering $240$, and called the statement true. The crossing $O=H=120$ at $q=40$ already says ordering falls as the batch grows. The opposite verdict would have needed $A>16000$, so that $O(80)>200$. The crossing locks $A=4800$.`,
  },

  "math-8-74": {
    0: `Average product is then $12 L^{-\\frac{1}{4}}$. The leftover exponent $-\\frac{1}{4}$ is not the output exponent $\\frac{3}{4}$. Average product is still a power of hours, but a different power. Dividing by $L$ subtracts one from the exponent; it does not destroy the power shape. The opposite verdict would have needed output that was not a power, or a claim that the two exponents were equal. They differ by $1$.`,
    1: `That logged level does not need a second recovery of $A$. A rushed solver who used $Q(L)=12 L^{\\frac{3}{4}}$ at $L=16$ and forgot to divide by $16$ would have compared $96$ to $7$. The claim is average product, $6$, not output. The opposite verdict would have needed output above $112$ at $16$ hours. The log is $96$.`,
    2: `Doubling labour would multiply output only by $2^{\\frac{3}{4}}\\approx 1.68$, to about $161$ units, short of $192$. A three-quarters technology will not keep pace with the clock. A rushed solver who doubled $16$ hours with the output would have claimed this letter true. That is exponent $1$, which $r=\\frac{3}{4}$ already refused.

The opposite verdict would have needed $r=1$. The two shifts force $r=\\frac{3}{4}$, because $\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}$ and $\\frac{324}{96}=\\left(\\frac{3}{2}\\right)^{3}$.`,
    3: `Falling average and $r<1$ are the same story. Checking the two shifts: average product is $6$ at $L=16$ and $4$ at $L=81$. A rushed solver who saw output rise from $96$ to $324$ and inferred a rising average would have mixed a higher total with a higher per-hour figure. The opposite verdict would have needed leftover exponent $0$ on $Q/L$, hence $r=1$.`,
    4: `The sixteen-hour average of $6$ is the one still above $5$; by eighty-one hours it has already fallen to $4$. A rushed solver who used output $324$ against the $5$ cutoff would have mixed units. The claim is average product. The opposite verdict would have needed $324/81>5$, hence output above $405$ at $81$ hours. The log is $324$.`,
  },

  "math-8-75": {
    0: `No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the handling floor is approached and never attained. Checking $t(10000)=8+0.5=8.5$, still above $8$. A rushed solver who saw $t$ falling toward $8$ and called $8$ attained "in the long run as a practical matter" would have mixed an asymptote with a value. The opposite verdict would have needed a model $t(n)=8+A n^{r}$ with $r>0$ forbidden, or a floor of $0$. The two timings lock $F=8$ as a horizontal asymptote.`,
    1: `The floor is close, but the learning term is still a sliver of $\\frac{5}{3}$ minutes. A rushed solver who dropped the floor and claimed $50/30\\approx 1.67$, well under $10$, would still have the right verdict for the wrong model. Another mix-up is using $t(100)=13$ and scaling as if the whole time halved on a further ninefold volume. The opposite verdict would have needed a larger floor, so that $t(900)$ sat above $10$.`,
    2: `The floor is untouched by this scaling, but the claim is only about the learning term. Inverse-square-root learning halves on a fourfold volume. Checking the two timings: the learning term is $10$ minutes after $25$ units and $5$ minutes after $100$, a halving on a quadrupling of $n$. The opposite verdict would have needed leftover exponent other than $-\\frac{1}{2}$ on the learning term.`,
    3: `From $t(25)=18$ a halved learning term cuts the total only from $18$ to $13$, not to $9$. The intercept is why the learning term can halve while the whole unit time does not. A rushed solver who halved $18$ would have claimed $9$ and called the statement true. Letter C is about the learning term; this letter is about the modelled total. They are different objects.

The opposite verdict would have needed $F=0$. Letter A already used that nonzero floor as an asymptote; this letter is the same floor, now read as a failed scale identity on the whole $t(n)$.`,
    4: `The power term has fallen from the first unit, but not far enough to pull the unit under thirty minutes. A rushed solver who used $t(25)=18$ and scaled by $\\sqrt{25/4}$ without the floor would have claimed $18\\cdot\\frac{5}{2}=45$, still above $30$, or who dropped $F$ would have claimed $25$, under $30$, and flipped the verdict. The recovered $t(4)=8+25=33$. The opposite verdict would have needed a smaller $A$, so that $t(4)$ fell through $30$.`,
  },

  "math-8-76": {
    0: `Revenue rises more slowly than feed. Proportionality would have required lockstep, exponent $1$. Checking $R(8)=360$ and $R(16)=90\\cdot 16^{\\frac{2}{3}}\\approx 571$, a doubling of feed that is not a doubling of revenue. The opposite verdict would have needed $r=1$. The eight-tonne calibration with exponent $\\frac{2}{3}$ already refuses that.`,
    1: `Past the break-even $x=27$, the linear cost is ahead. At $x=64$, $R=1440$ and $C=1920$. A rushed solver who compared $R(64)$ with $2000$ as if the claim were a revenue cutoff would have missed that the letter is $C>R$. The opposite verdict would have needed break-even past $64$, hence a larger $A$. The eight-tonne record locks $A=90$ and break-even at $27$.`,
    2: `A two-thirds harvest flattens. After $8$ tonnes $R'=30$; after $27$ tonnes $R'=20$. A rushed solver who saw $R(27)=90\\cdot 9=810>R(8)=360$ and inferred a steeper extra tonne later would have mixed a higher level with a steeper slope. The opposite verdict would have needed $r>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $30>20$.`,
    3: `They meet at $x=27$. Past that feeding the cube root keeps growing, so the ratio $R/C=3/x^{\\frac{1}{3}}$ stays below $1$ and keeps falling. Extra feed widens the gap; it cannot restore a surplus.

Checking $x=64$ from letter B: the gap is already $1920-1440=480$ thousand euros against the farm. At $x=125$, $R=90\\cdot 25=2250$ and $C=3750$, a wider gap. The opposite verdict would have needed cost to have a smaller leftover exponent than revenue, so that revenue could recross. Cost is linear; revenue has exponent $\\frac{2}{3}$. After the meeting, the higher exponent on cost stays ahead.`,
    4: `Using revenue in place of profit would have claimed $360$ and overshot the letter. Profit is $360-240=120$. A rushed solver who used $C(8)=240$ against the $100$ cutoff would have mixed cost with profit. The opposite verdict would have needed $P(8)\\le 100$, hence a larger feed price than $30$ thousand euros a tonne. The stem's cost is $30x$.`,
  },

  "math-8-77": {
    0: `A four-fold factor would belong to exponent $1$. The three-halves exponent outruns the index: $4^{\\frac{3}{2}}=8$. Checking $f(4)=6\\cdot 8=48$ and $f(16)=6\\cdot 64=384$, and $384/48=8$, not $4$. The opposite verdict would have needed $r=1$. The surviving $336$ euro gap already forces $r=\\frac{3}{2}$.`,
    1: `A rushed solver who treated $336$ as $f(9)$ would have compared $336$ to $150$ and still sat above, for the wrong level. The $336$ is a difference of two indices, not a level at $9$. The opposite verdict would have needed a smaller $A$, so that $f(9)$ fell through $150$. The gap locks $A=6$ and $f(9)=162$.`,
    2: `A proportional handler would have carried exponent $1$. The same $4^{\\frac{3}{2}}=8$ from letter A is already larger than $4$. The opposite verdict would have needed an exponent of $1$ or less. The surviving record is a difference on a three-halves power, which outruns the index.`,
    3: `The leftover slope is $f'(x)=9\\sqrt{x}$, which is $18$ at index $4$ and $27$ at index $9$. Because $27>18$, later index steps of the same width add more euros than earlier ones. Equal gaps in the index do not produce equal gaps in cost when $r>1$.

A finite step agrees: $f(5)-f(4)=6\\cdot 5^{\\frac{3}{2}}-48\\approx 67.1-48=19.1$, while $f(10)-f(9)=6\\cdot 10^{\\frac{3}{2}}-162\\approx 189.7-162=27.7$. Later equal index gaps add more. The opposite verdict would have needed $r=1$, a linear handler. Changing $A$ scales both gaps by the same factor and cannot equalise them.`,
    4: `Twenty-five contributes $5^{3}=125$, times $6$ is $750$. Five hundred and eighty-eight euros is not under five hundred. A rushed solver who used $f(25)-f(16)=750-384=366$, under $500$, would have moved the lower index from $9$ to $16$ and flipped the letter. Letter E names the move from $9$ to $25$.

The opposite verdict would have needed $A<500/(125-27)\\approx 5.10$. The surviving gap locks $A=6$, and the rise is $588$.`,
  },

  "math-8-78": {
    0: `Falling or rising load does not introduce a logarithm. Checking a recovered pair: at $W=135$ the inverse returns $s=9$. At $W=320$ it returns $s=16$, the permit cap. The inverse is faithful to both named loads. The opposite verdict would have needed a law that was not a pure power.`,
    1: `Every larger index breaches the permit. A rushed solver who inverted as if $r=1$ would have claimed $s=64$, past $20$, and flipped the verdict. Linear inversion overstates the admissible scale when $r>1$. The opposite verdict would have needed a smaller $A$, so that the inverted $s$ rose through $20$. The recorded $135$ kg at $s=9$ locks $s=16$ at the cap.`,
    2: `The inverse exponent $\\frac{2}{3}<1$, so permitted scale grows more slowly than the permitted load. Linear thinking on the inverse is the mismatch. Doubling $320$ to $640$ would raise $s$ from $16$ to $16\\cdot 2^{\\frac{2}{3}}\\approx 25.4$, not to $32$. The opposite verdict would have needed inverse exponent $1$, hence original exponent $1$. The stem is $\\frac{3}{2}$.`,
    3: `If $A$ doubled, the admissible scale would satisfy $10 s^{\\frac{3}{2}}=320$, so $s=32^{\\frac{2}{3}}\\approx 10.08$, not $8$. The scale factor is $2^{-\\frac{2}{3}}\\approx 0.63$, not $\\frac{1}{2}$. Halving $s$ would have needed inverse exponent $-1$ on $A$.

A rushed solver who treated load as linear in $A$ and in $s$ would have halved $s$ with a doubled $A$. The three-halves power shares the blow: $A$ doubles, $s^{\\frac{3}{2}}$ must halve, so $s$ falls only by $2^{-\\frac{2}{3}}$. The opposite verdict would have needed $r=1$.`,
    4: `The load has grown with scale, but at this small index it is still below the named line. A rushed solver who scaled $W(9)=135$ by $4/9$ linearly would have claimed $60$, above $50$, and flipped the verdict. Linear thinking overstates a small scale when $r>1$; the true $W(4)=40$ sits under $50$. The opposite verdict would have needed a larger $A$, so that $W(4)$ rose through $50$.`,
  },

  "math-8-79": {
    0: `The shortcut predicts $-2\\times 25\\%=-50\\%$. The exact factor is $\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}=0.64$, a cut of $36\\%$, not $50\\%$. The two methods disagree. Linearizing a power at a $25\\%$ step is too coarse.

Checking the recovered demand: $q(3)=4000$ becomes $q(3.75)=2560$. A $50\\%$ shortcut would have claimed $2000$ occupied spaces. The exact till of spaces is $2560$. The opposite verdict would have needed a tiny percentage change, where the linear elasticity shortcut and the power agree to first order. A $25\\%$ step is not tiny.`,
    1: `The $2500$ cutoff is a near miss on that exact inverse-square step, not a rounding of $2560$. A rushed solver who used the shortcut's $2000$ against $2500$ would have called the statement false. Letter A already refused the shortcut; this letter uses the exact $2560$. The opposite verdict would have needed a smaller $A$, so that $q(3.75)$ fell through $2500$.`,
    2: `A predicted $50\\%$ against a true $36\\%$ overstates the loss. The two methods disagree on the size of the cut. A rushed solver who compared $50\\%$ with $36\\%$ and called $50\\%$ "close enough" would have missed that the letter asks whether the shortcut overstates, which it does. The opposite verdict would have needed the exact cut to meet or exceed $50\\%$, which would have required a steeper exponent than $-2$.`,
    3: `A $25\\%$ rise cuts demand by $36\\%$. A $25\\%$ cut raises it by $\\left(\\frac{3}{4}\\right)^{-2}-1=\\frac{16}{9}-1=\\frac{7}{9}\\approx 77.8\\%$. Inverse-square percentage changes are not symmetric. Checking $q(2.25)=4000\\cdot\\frac{16}{9}\\approx 7111$, a rise of about $3111$ spaces from $4000$, versus the rise-side loss of $1440$ spaces. The two percentages are not the same.

The opposite verdict would have needed leftover exponent $0$ on a log-log chart that was odd-symmetric, a property linear percentage changes have and powers do not. The stem is $p^{-2}$.`,
    4: `Cutting the tariff from $3$ to $2$ is not a $25\\%$ move; this letter is a separate level. Inverse square on a factor $\\frac{2}{3}$ multiplies demand by $\\left(\\frac{3}{2}\\right)^{2}=\\frac{9}{4}$, so $4000\\cdot\\frac{9}{4}=9000$. A rushed solver who applied a $25\\%$ cut from letter D would have claimed about $7111$, still above $8000$, or a linear $33\\%$ rise to about $5333$, under $8000$, and flipped the verdict. The opposite verdict would have needed a smaller $A$, so that $q(2)$ fell through $8000$.`,
  },

  "math-8-80": {
    0: `A proportional casting would have carried exponent $1$. Geometric similarity is a volume scaling, so the leftover exponent is $3$. Checking the weighed bell: doubling $0.5$ m to $1$ m multiplies mass by $8$, from $30$ kg to $240$ kg, which exceeds a doubling. The opposite verdict would have needed an exponent of $1$ or less. The pattern book is a cube.`,
    1: `Linear scaling would have claimed $90$ kg. Height $1.5$ is three times the $0.5$ m pattern, so mass multiplies by $27$: $30\\cdot 27=810$. A rushed solver who tripled $30$ kg would have claimed $90$, under $700$, and flipped the verdict. The opposite verdict would have needed a smaller $A$, so that $M(1.5)$ fell through $700$. The weighing locks $A=240$.`,
    2: `The half-metre bell at $30$ kg would become $240$ kg at one metre, not $60$ kg. The cube of a doubling is $8$, not $2$. A rushed solver who copied the doubling from height onto mass would have called the statement true. That is exponent $1$, which letter A already refused. The opposite verdict would have needed $r=1$.`,
    3: `Mass per metre is $M(h)/h=240 h^{2}$, which rises with height. At $0.5$ m the quotient is $60$; at $1$ m it is $240$. A constant intensity would have needed exponent $1$. A rushed solver who divided $30$ kg by $0.5$ m once and treated $60$ kg per metre as a law would have missed that $M(1)/1=240$. The opposite verdict would have needed leftover exponent $0$ on $M/h$.`,
    4: `At a unit height the cube is $1$, so the mass equals the coefficient: $M(1)=240$. That $A$ is the one-metre bell. A rushed solver who doubled the $0.5$ m weighing to $60$ kg would have sat under $200$ and flipped the verdict. Inverse of letter C's mix-up: doubling height is not doubling mass. The opposite verdict would have needed $A\\le 200$. The weighing locks $A=240$.`,
  },
};

const fp = path.join(__dirname, "71_80.json");
const orig = JSON.parse(fs.readFileSync(fp, "utf8"));
const arr = JSON.parse(JSON.stringify(orig));
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
  const wc = t.tactical_explanations.map(words);
  console.log(t.id, wc.join(" "), extras[t.id] ? "patched" : "skip");
}
