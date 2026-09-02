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
  "math-8-91": {
    0: `One half sits below one, so each extra unit of deficit adds less evaporation than the unit before it. The third reading $E(9)=60$ sits on the same square-root law, $20\\cdot 3=60$, a consistency check. Checking $E(1)=20$ and $E(4)=40$: deficit quadrupled while evaporation only doubled, the signature of $r=\\frac{1}{2}$. The opposite verdict would have needed an exponent of $1$ or more. The first two readings force $4^{r}=2$.`,
    1: `Doubling the deficit would double evaporation only if $r=1$. The scale factor is $\\sqrt{2}\\approx 1.41$, not $2$. Evaporation rises, but not in lockstep with humidity. Checking $E(2)=20\\sqrt{2}\\approx 28.3$, not $40$. The opposite verdict would have needed $r=1$. Letter A already used $r=\\frac{1}{2}$ as a lag; this letter is that half read as a doubling claim.`,
    2: `From $r=\\frac{1}{2}$ and $A=20$, doubling $E(4)=40$ means $20\\sqrt{h}=80$, so $\\sqrt{h}=4$ and $h=16$. Sixteen is four times four, not twice four. To double a square-root output you quadruple the input.

**1.** A doubling of deficit to $h=8$ would give $E(8)=20\\sqrt{8}\\approx 56.6$, short of $80$. More than a doubling is required.

**2.** A rushed solver who doubled $h=4$ to $h=8$ would have called "more than a doubling" false. That is exponent $1$.

**3.** The opposite verdict would have needed an exponent of $1$ or more. The first two readings lock $r=\\frac{1}{2}$. The third reading $E(9)=60$ sits on the same curve and does not change the inverse.

**4.** Checking the target itself: $E(16)=20\\cdot 4=80$, exactly double the forty-millimetre reading. The humidity move from $4$ to $16$ is a fourfold increase. A linear guess from $E(4)=40$ would have named $h=8$ and fallen short by about $23$ millimetres. The wetland law is slower than that guess, so the humidity target sits farther out.`,
    3: `The leftover slope of $E(h)=20\\sqrt{h}$ is $E'(h)=10 h^{-\\frac{1}{2}}$. After a deficit of one that is $10$. After a deficit of four it is $5$. An extra unit adds less after four, not more. A square-root evaporative law flattens.

**1.** A finite step agrees. From $1$ to $2$, $E$ rises from $20$ to about $28.3$, a gain of $8.3$. From $4$ to $5$, $E$ rises from $40$ to about $44.7$, a gain of $4.7$. Later units add less.

**2.** A rushed solver who saw $E(4)=40>E(1)=20$ and inferred a steeper extra unit at four would have mixed a higher level with a steeper slope.

**3.** The opposite verdict would have needed $r>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $10>5$.

**4.** Checking $E'(9)=10/3\\approx 3.33$, still smaller than $E'(4)=5$. The third logged deficit sits even farther down the flattening slope. A solver who used the secant from $h=1$ to $h=4$, namely $(40-20)/3\\approx 6.7$, and compared it with the later secant from $4$ to $9$, namely $(60-40)/5=4$, would have reached the same verdict without derivatives. Later humidity units add less evaporation, not more.`,
    4: `At deficit $25$, $\\sqrt{25}=5$ and $E(25)=100$, which sits above $90$. The third logged point at deficit $9$ is $60$; this letter is a further perfect square on the same curve. A rushed solver who scaled $E(4)=40$ by $25/4$ linearly would have claimed $250$, still above $90$ but for the wrong shape. The opposite verdict would have needed $A\\le 90/5=18$. The unit deficit locks $A=20$.`,
  },
  "math-8-92": {
    0: `The benefit gap is $A(3-2)=12$, so $A=12$. The upkeep level is $k=2$. Net benefit is then $N(n)=12\\sqrt{n}-2n$. A leftover second exponent keeps the net from being a power function of the planting. Upkeep being linear is exactly why those two powers cannot be absorbed into one monomial. Checking $N(4)=16$ and $N(9)=18$: the ratio $18/16$ is not $9^{r}/4^{r}$ for a single $r$. The opposite verdict would have needed $k=0$, upkeep free.`,
    1: `At nine thousand trees, benefit $36$ minus upkeep $18$ is net $18$, which sits above $15$. Using benefit in place of net would have claimed $36$ and overshot. A rushed solver who used $C(9)=18$ against $15$ would have mixed upkeep with net. The opposite verdict would have needed $N(9)\\le 15$, hence a larger $k$. The upkeep record locks $k=2$.`,
    2: `The schedules meet when $12\\sqrt{n}=2n$, so $\\sqrt{n}=6$ and $n=36$. Past that planting the ratio of benefit to upkeep keeps falling, because $\\sqrt{n}$ cannot keep pace with $n$. Planting more trees after upkeep overtakes cooling only deepens the loss. The net stays negative.

**1.** Checking $n=36$: $B=C=72$, net $0$. At $n=49$, $B=84$ and $C=98$, net $-14$. At $n=64$, $B=96$ and $C=128$, net $-32$. The gap widens.

**2.** A rushed solver who saw $N'(9)=0$ as a later recovery would have mixed the peak of the net with a second crossing of $B$ and $C$. The peak is at $n=9$, still in surplus; the crossing is at $n=36$, after which $N<0$ for good.

**3.** The opposite verdict would have needed benefit leftover exponent at least $1$, so that $B$ could recross linear upkeep. The stem is a square root.

**4.** Checking one more planting past the crossing: at $n=81$, benefit is $12\\cdot 9=108$ and upkeep is $162$, so the net is $-54$. The loss has already grown from $-32$ at $n=64$. A solver who treated the peak $N(9)=18$ as a later surplus after the crossing would have mixed the interior maximum with a second root. There is only one later root, $n=36$, and after it the net stays negative.`,
    3: `The leftover slope of the net is $N'(n)=6 n^{-\\frac{1}{2}}-2$. At four thousand trees that is $1$. At nine thousand trees it is $0$. An extra thousand trees still adds at four thousand and adds nothing at nine thousand. Nine thousand is the peak, not a point where later trees help more.

**1.** Checking $N(4)=16$ and $N(5)=12\\sqrt{5}-10\\approx 16.83$, a gain of about $0.83$ thousand euros. From $n=9$ to $n=10$, $N(10)=12\\sqrt{10}-20\\approx 17.94$, a drop of about $0.06$ from $N(9)=18$. Past the peak the extra thousand already subtracts.

**2.** A rushed solver who saw $N(9)=18>N(4)=16$ and inferred a steeper extra thousand at nine would have mixed a higher level with a steeper slope. The level is higher at nine; the slope is zero.

**3.** The opposite verdict would have needed $N'$ larger at nine than at four, hence a net that was still accelerating. Square-root benefit minus linear upkeep peaks at $n=9$ and then falls.

**4.** Checking the other side of the peak: $N'(4)=1>0$ while $N'(16)=6/4-2=-0.5<0$. Four thousand trees still add; sixteen thousand already subtract. Nine thousand is the turning point, not a later acceleration. A solver who compared only the levels $N(9)=18$ and $N(16)=12\\cdot 4-32=16$ would still see a fall after the peak, which is the same story as the slope comparison.`,
    4: `At four thousand trees, benefit $24$ minus upkeep $8$ is net $16$, which is not more than $20$. The claimed $20$ overshoots the net, and $24$ is cooling before upkeep. Mixing $B$ with $N$ is the mix-up. The opposite verdict would have needed $N(4)>20$, hence a smaller $k$ or a larger $A$. The two records lock $N(4)=16$.`,
  },

  "math-8-93": {
    0: `A nonzero power inverts to another power. From $q=2000 p^{-2}$, isolating price leaves $p=\\sqrt{2000}\\, q^{-\\frac{1}{2}}$. The new exponent is the reciprocal of $-2$. Price needed for a given weekly demand is still a monomial in $q$. Falling demand does not introduce a logarithm. Checking $q=80$ returns $p=5$, the logged pair. Checking $q=20$ returns $p=10$, letter C. The opposite verdict would have needed a decaying exponential in price.`,
    1: `Doubling the five-euro price would halve demand only if the exponent were $-1$. With $-2$ the factor is $2^{-2}=\\frac{1}{4}$, so $80\\cdot\\frac{1}{4}=20$ packs, not $40$. Demand falls to one quarter, not to one half. Inverse-linear thinking is the mismatch. The opposite verdict would have needed $r=-1$. Letter A already used $r=-2$ as an inverse; this letter is that $-2$ read as a doubling claim.

**1.** Checking the till as well: $R(5)=400$ and $R(10)=200$. Revenue halves when the price doubles, which is the leftover $p^{-1}$ on revenue, not a demand-halving story.

**2.** A rushed solver who used elasticity $-1$ would have named $40$ packs at $10$ euros and called the claim true. The stem's exponent is $-2$, so the cut is twice as steep in the log.

**3.** The opposite verdict would have needed $r=-1$ on demand. Changing $A$ scales both $q(5)$ and $q(10)$ by the same factor and cannot turn a quarter into a half.

**4.** Checking a neighbouring doubling: from $4$ euros at $125$ packs, doubling to $8$ euros leaves $2000/64=31.25$ packs, again a quarter, not a half. The scale factor is independent of the starting price.`,
    2: `From $A/25=80$, the coefficient is $A=2000$. Ten euros is a doubling of the logged $5$, so inverse-square demand is a quarter of $80$: $q(10)=20$. Twenty packs already sit under twenty-five. A rushed solver who halved $80$ to $40$ would have sat above $25$ and flipped the verdict. Inverse-linear thinking is too slow a drop. The opposite verdict would have needed $A>25\\cdot 100=2500$. The logged pair locks $A=2000$.`,
    3: `Revenue is $R(p)=\\frac{2000}{p}$, a negative leftover power, so the till shrinks as the price rises. At $5$ euros the take is $400$; at $10$ euros it is $200$. Inverse-square demand is elastic enough that a price rise cuts $pq$. Checking $R(4)=500>R(5)=400>R(10)=200$. The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand exponent greater than $-1$. The stem is $p^{-2}$.`,
    4: `A target of $125$ packs inverts $2000/p^{2}=125$ to $p^{2}=16$ and $p=4$, which sits below $5$, not above it. More packs require a lower price along this curve. The unique positive price that moves $125$ packs is four euros.

**1.** A rushed solver who raised the price to move more packs would have called the statement true. Along this curve a higher price cuts quantity.

**2.** Checking $q(5)=80<125$ already: five euros moves fewer than $125$ packs, so the $125$ target is a cheaper price, $4$ euros.

**3.** The opposite verdict would have needed a target below $80$ packs, which would have sat above $5$ euros. The named target is $125$, above the logged $80$.

**4.** Checking a neighbouring target: $100$ packs invert to $p=\\sqrt{20}\\approx 4.47$, still below $5$. Every target above the logged $80$ packs sits on a cheaper posted price. A solver who used inverse-linear demand $q=400/p$ would have inverted $125$ to $p=3.2$ and still sat below $5$, so the verdict would have survived a milder elasticity. Only a demand curve that rose with price could have put $125$ packs above $5$ euros.`
  },

  "math-8-94": {
    0: `Demand's exponent $-\\frac{3}{2}$ times the indexation exponent $\\frac{2}{3}$ is $-1$. The composition is a monomial $C s^{-1}$, a power of $s$. Stopping after $p(s)$ would have left exponent $\\frac{2}{3}$. The overview recovered $q(p(s))=400/s$. The opposite verdict would have needed a stage that was not a power. Both the demand curve and the policy map are monomials.`,
    1: `Tripling the subsidy index multiplies composed demand by $3^{-1}=\\frac{1}{3}$, not by $3$. Demand falls to a third rather than tripling. The indexation $p\\propto s^{\\frac{2}{3}}$ raises the pass price as $s$ grows, so the composed map is inverse, not increasing.

**1.** Checking $s=8$ at $50$ passes against $s=24$: composed demand is $400/24\\approx 16.7$, a third of $50$. Tripling $s$ divided passes by $3$.

**2.** A rushed solver who read "subsidy index" as "more subsidy, more rides" would have called the statement true. This indexation raises the posted price as $s$ grows.

**3.** The opposite verdict would have needed composed exponent positive. The two stages multiply to $-1$.

**4.** Checking the posted prices: $p(8)=16$ and $p(24)=4\\cdot 24^{\\frac{2}{3}}=4\\cdot 8^{\\frac{2}{3}}\\cdot 3^{\\frac{2}{3}}=16\\cdot 3^{\\frac{2}{3}}\\approx 33.3$. The pass is dearer at the larger index, so inverse-power demand must fall. A solver who treated $s$ as a discount rather than an indexation would have expected $p$ to drop and demand to rise. The stem's $p(s)$ climbs with $s$.`,
    2: `Subsidy index $8$ was calibrated to the $16$-euro, $50$-pass reading, so composed demand at $s=8$ is the pilot itself: $50$ passes, already above $40$. A rushed solver who computed $q(p(8))$ from scratch with a wrong $B$ would have missed that $s=8$ is the logged pair. The opposite verdict would have needed the pilot below $40$ passes. The stem is $50$.`,
    3: `From $A\\cdot 16^{-\\frac{3}{2}}=50$ and $B\\cdot 4=16$, the composition collapses to $q(p(s))=\\frac{400}{s}$. For every $k>1$ the factor $k^{-1}<1$. Raising the subsidy index lowers composed demand. "Subsidy up, sales up" ignores that indexation.

**1.** Checking $s=8$ at $50$ against $s=16$ at $25$: doubling $s$ halves passes. The map is inverse.

**2.** A rushed solver who inverted the demand stage only, holding $p$ fixed, would have claimed sales independent of $s$ and missed the policy map $p(s)$.

**3.** The opposite verdict would have needed composed exponent positive. The stem's two exponents multiply to $-1$.

**4.** Checking a third index: $s=32$ gives $400/32=12.5$ passes, below the $25$ at $s=16$ and below the $50$ at $s=8$. Each rise in the subsidy index cuts composed demand. A solver who plotted $q$ against $p$ only, holding the policy map out of view, would have missed that $p$ itself is rising with $s$. The claim is about the composed map, not about a fixed price.`,
    4: `At subsidy index $27$, composed demand is $400/27\\approx 14.81$, which sits under $16$. From the pilot, $\\frac{27}{8}$ times the index multiplies demand by $\\frac{8}{27}$: $50\\cdot\\frac{8}{27}=\\frac{400}{27}$. Fourteen and a bit stays under sixteen. A rushed solver who used $q(p(8))=50$ against $16$ would have named the pilot, not $s=27$. The opposite verdict would have needed $400/27\\ge 16$, hence a larger composed coefficient. The two calibrations lock $400/s$.`,
  },

  "math-8-95": {
    0: `The two logs give $a=1$ and $b=\\frac{1}{4}$. Equal marginal costs $2q_{1}=\\frac{1}{2}q_{2}$ force $q_{2}=4q_{1}$. With $q_{1}+q_{2}=30$ that split is $6$ and $24$, costing $180$. All on line 2, the cheaper line, costs $225$. Spreading the load still beats concentrating.

**1.** All on line 1 costs $900$, far worse. The cheaper-line corner is $225$, already $45$ above the equal-marginal split.

**2.** A rushed solver who saw $b<a$ and sent every loaf to line 2 would have called the claim true. Quadratic cost punishes concentration: thirty squared is $900$, and a quarter of that is still $225$.

**3.** Checking a nearby split, $5$ and $25$: cost is $25+\\frac{625}{4}=181.25$, already a little above $180$. Checking $8$ and $22$: cost is $64+121=185$. The $6$-and-$24$ split is cheaper than those neighbours and cheaper than either corner.

**4.** The opposite verdict would have needed linear costs, where the cheapest plan is a corner on the cheaper line. Both stem costs are squares, so the interior split wins. Concentrating the whole order on line 2 is not the cheapest plan.`,
    1: `All thirty thousand loaves on line 2 score $225$, which sits above $200$. Plant 2 is cheaper per squared unit, but thirty squared is still $900$. The corner already clears two hundred. A rushed solver who used $C_{2}(8)=16$ linearly to $C_{2}(30)$ would have claimed $60$ and missed the letter. The opposite verdict would have needed $b\\le 200/900$. The eight-thousand run locks $b=\\frac{1}{4}$.`,
    2: `Equal marginal costs force $q_{2}=4q_{1}$, so the cheaper line takes the larger share: $24$ against $6$. Twenty-four thousand loaves sit on line 2. A cheaper coefficient should carry more volume, not less, when both costs are squares.

**1.** Checking the marginals at that split: $C_{1}'(6)=12$ and $C_{2}'(24)=12$. They match. At an even split of $15$ and $15$, the marginals are $30$ and $7.5$, so line 1 is still too dear at the margin and more loaves should move to line 2.

**2.** A rushed solver who sent the larger share to line 1, because line 1 had the logged $100$ against line 2's $16$, would have mixed a higher logged run with a cheaper coefficient. The $100$ was a $10$-thousand run; the $16$ was an $8$-thousand run. After recovering $a=1$ and $b=\\frac{1}{4}$, line 2 is cheaper.

**3.** The opposite verdict would have needed $b>a$, so that equal marginals would have put more loaves on line 1. The stem has $b=\\frac{1}{4}<1=a$.`,
    3: `Line 1's average cost index is $C_{1}(q)/q=q$ itself, which rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$. Extra loaves on line 1 are dearer per loaf, not cheaper. Checking $C_{1}(5)/5=5$ against $C_{1}(10)/10=10$: the average doubled when output doubled. The opposite verdict would have needed leftover exponent below $1$.`,
    4: `The $6$-and-$24$ split scores $180$, which sits under $200$. Six squared is $36$; twenty-four squared over $4$ is $144$. Spreading at equal marginals beats the $225$ corner. A rushed solver who added $6+24=30$ as if the cost were the split itself would have sat under $200$ for the wrong reason. The opposite verdict would have needed a split cost of $200$ or more. Equal marginals lock $180$.`,
  },

  "math-8-96": {
    0: `For a power $q=A p^{r}$ the point elasticity is the exponent itself, $\\varepsilon=r=-2$, independent of $p$. Demand is equally elastic at every price $p>0$. The usual mix-up is treating elasticity as a local slope that would change along the curve; for a monomial it does not. Checking $\\varepsilon$ at $10$ euros and at $5$ euros: both equal $-2$. The opposite verdict would have needed a non-power demand, such as a linear schedule.`,
    1: `From $A/100=40$, the coefficient is $A=4000$. At $12$ euros, $q(12)=4000/144=250/9\\approx 27.78$. The exact cut from $40$ is about $12.22$ tickets, which sits above $10$. A $20\\%$ elasticity shortcut on $40$ tickets would have claimed $8$ and undershot. The opposite verdict would have needed a milder exponent or a smaller price step. The desk record locks $A=4000$.`,
    2: `The shortcut predicts $-2\\times 10\\%=-20\\%$. The exact factor is $1.1^{-2}=1/1.21\\approx 0.826$, a cut of about $17.36\\%$. The shortcut overstates the drop. Linearizing a power at a $10\\%$ step is still a little coarse.

**1.** In tickets, the shortcut on $40$ claims an $8$-ticket drop to $32$. The exact $q(11)=4000/121\\approx 33.06$, a drop of about $6.94$. The shortcut overstates the ticket loss as well as the percent loss.

**2.** A rushed solver who treated the shortcut as exact would have called the claim false. The finite factor $k^{r}$ is strictly larger than $1+r(k-1)$ when $r=-2$ and $k=1.1$, because the second-order term in the expansion is positive.

**3.** Checking a neighbouring $20\\%$ rise: the shortcut claims $-40\\%$. The exact factor is $1.2^{-2}=1/1.44\\approx 0.694$, a cut of about $30.6\\%$. The overstatement grows with the step, which is why letter B's $10$-to-$12$ move already beat a $20\\%$ linear guess.

**4.** The opposite verdict would have needed the exact percent drop to meet or exceed $20\\%$. For a negative exponent and $k>1$, the exact factor $k^{r}$ always sits above the linear tangent $1+r(k-1)$, so the shortcut overstates every finite rise on this curve.`,
    3: `Revenue is $R(p)=4000/p$, which falls toward $0$ as $p$ grows. Raising the price without bound drives the till toward zero rather than a maximum. Inverse-square demand is elastic: a price rise cuts $pq$. There is no interior maximum on $p>0$.

**1.** Checking the till at the desk and after a rise: $R(10)=400$ and $R(12)=4000/12\\approx 333$. The finite rise already cut revenue. At $20$ euros, $R(20)=200$. At $40$ euros, $R(40)=100$. The till keeps shrinking.

**2.** A rushed solver who remembered that unit-elastic demand holds revenue constant would have expected a flat till and called an unbounded rise harmless. The stem is $p^{-2}$, leftover $p^{-1}$ on revenue, strictly decreasing.

**3.** The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand exponent greater than $-1$. Then a price rise would have grown $pq$. The stem's $-2$ is the other side of that gate.

**4.** Checking a cheaper posted price: $R(5)=800>R(10)=400$. Cutting the price raises the till along this curve. An unbounded rise is the opposite move, and it cannot be a maximum.`,
    4: `Halving the price quadruples inverse-square demand: $q(5)=160$, which sits above $150$. Inverse-linear thinking would have claimed $80$ and missed the letter. The opposite verdict would have needed $A\\le 150\\cdot 25=3750$. The desk record locks $A=4000$. Checking $q(8)=4000/64=62.5$ is a neighbouring level, not this claim.`,
  },

  "math-8-97": {
    0: `The exponent $3/2$ is larger than one, so each extra unit of belt setting adds more trays than the unit before it. Three halves is above one, so throughput outruns the belt. A proportional lehr would have carried exponent $1$. Checking $T(4)=64$ against $T(9)=216$: the belt rose by $5/4$ while trays rose by $216/64=3.375$, faster than the belt. The opposite verdict would have needed leftover exponent at most $1$.`,
    1: `From $4^{3/2}=8$, the recorded run gives $A=8$, so $T(e)=8 e^{3/2}$. The leftover slope is $T'(e)=12\\sqrt{e}$. After setting four that is $24$. After setting nine it is $36$. Because $r>1$ the slope rises. An extra unit adds more trays after nine than after four. A rushed solver who compared only $T(9)=216>T(4)=64$ would have mixed a higher level with the slope question. The opposite verdict would have needed $r<1$.`,
    2: `At belt setting $9$, $T(9)=216$, which sits above $200$. Because the exponent exceeds one, the belt setting of $9$ has outrun a linear guess from $T(4)=64$. A linear rule through the origin would have named $T(9)=144$ and missed the letter. The opposite verdict would have needed $A\\le 200/27$. The recorded run locks $A=8$.`,
    3: `A $25\\%$ larger coefficient appears once above and once below in the ratio $T(2e)/T(e)$, so it cancels. The doubling factor stays $2^{3/2}$. Levels move by $25\\%$ and doubling ratios do not.

**1.** Checking the numbers: the stem's doubling factor is $2^{3/2}=2\\sqrt{2}\\approx 2.828$. After $A$ becomes $10$, the new rule is $T_{\\mathrm{new}}(e)=10 e^{3/2}$, and $T_{\\mathrm{new}}(2e)/T_{\\mathrm{new}}(e)$ is still $2^{3/2}$. The $25\\%$ never enters the scale identity.

**2.** A rushed solver who scaled the factor $2.828$ by $1.25$ to about $3.535$ would have called the claim true. That mixes a level scale with a ratio. Letter E is the letter where the $25\\%$ survives, because E asks a level at setting $9$.

**3.** The opposite verdict would have needed a scale factor that still carried $A$. Only a rule that was not homogeneous, such as $T(e)=A e^{3/2}+c$ with a leftover constant, would have left $A$ inside the doubling ratio.

**4.** Checking another factor: $T(9)/T(4)=216/64=3.375= (9/4)^{3/2}$. Raising $A$ by $25\\%$ raises both $216$ and $64$ by $25\\%$ and leaves the $3.375$ untouched. Every ratio of two throughputs is independent of $A$.`,
    4: `Levels do scale with $A$. The calibrated $T(9)=216$ becomes $1.25\\cdot 216=270$ under a $25\\%$ larger coefficient, which sits above $250$. The factor $1.25$ survives on levels even though it cancels in every ratio.

**1.** Checking the new rule at the recorded run as well: $T_{\\mathrm{new}}(4)=1.25\\cdot 64=80$. The $4$-setting log would have read $80$ trays, and $T_{\\mathrm{new}}(9)=10\\cdot 27=270$ still follows.

**2.** A rushed solver who reused letter D's cancelled ratio and left $T(9)$ at $216$ would have sat under $250$ and flipped the verdict. Letter D is a scale question; this letter is a level.

**3.** The opposite verdict would have needed $1.25\\cdot 216\\le 250$, hence a smaller calibrated $T(9)$. The recorded run locks $T(9)=216$, and $270$ already clears $250$ by $20$ trays.

**4.** Checking a neighbouring setting: $T_{\\mathrm{new}}(16)=10\\cdot 64=640$. The $25\\%$ lifts every level, including the $9$-setting claim in this letter. The ratio $T(16)/T(9)=(16/9)^{3/2}=(4/3)^{3}=64/27$ is unchanged. Levels move; ratios do not.`,
  },
};

const fp = path.join(__dirname, "91_97.json");
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
  console.log(t.id, t.tactical_explanations.map(words).join(" "), extras[t.id] ? "p" : "-");
}
