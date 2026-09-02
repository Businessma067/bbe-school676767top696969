import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-91": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $r=\\frac{1}{2}$ from $4^{r}=2$. One half sits below one, so each extra unit of deficit adds less evaporation than the unit before it. The third reading $E(9)=60$ sits on the same square-root law, $20\\cdot 3=60$, which is a consistency check, not a new exponent.",
      "**B.** → False\n\nDoubling the deficit would double evaporation only if $r=1$. The scale factor is $2^{\\frac{1}{2}}\\approx 1.41$, not $2$. Evaporation rises, but not in lockstep with humidity. Linear thinking is the trap.",
      "**C.** → True\n\nThe overview already inverted a doubling of $E(4)=40$ to $h=16$. Sixteen is four times four, not twice four. To double a square-root output you quadruple the input. A solver who doubled $4$ to $8$ would still be short of $80$ mm.",
      "**D.** → False\n\nThe slope $E'(h)=10h^{-\\frac{1}{2}}$ is $10$ after a deficit of one and $5$ after a deficit of four. An extra unit adds less after four, not more. The leftover exponent is negative, so the slope is already falling. A square-root evaporative law flattens.",
      "**E.** → True\n\nThe overview already lists $E(25)=100$, which sits above $90$. Twenty-five contributes a square root of $5$, times $20$. The third logged point at deficit $9$ is $60$; this letter is a further perfect square on the same curve.",
    ],
  },
  "math-8-92": {
    tacticals: [
      "**A.** → True\n\nNet benefit is $N(n)=12\\sqrt{n}-2n$, a square root minus a line. A leftover second exponent keeps the net from being a power function of the planting. Upkeep being linear is exactly why those two powers cannot be absorbed into one monomial.",
      "**B.** → True\n\nThe overview already lists $N(9)=18$, which sits above $15$. Benefit $36$ minus upkeep $18$ is $18$. Using benefit in place of net would have claimed $36$ and overshot. Nine thousand trees already clear fifteen thousand euros of net.",
      "**C.** → False\n\nThe overview already placed the break-even at $n=36$. Past that planting the ratio of benefit to upkeep keeps falling, because $\\sqrt{n}$ cannot keep pace with $n$. Planting more trees after upkeep overtakes cooling only deepens the loss. The net stays negative.",
      "**D.** → True\n\nThe slope $N'(n)=6n^{-\\frac{1}{2}}-2$ is $1$ at four thousand trees and $0$ at nine thousand. An extra thousand trees still adds at four thousand and adds nothing at nine thousand. Nine thousand is the peak, not a point where later trees help more.",
      "**E.** → False\n\nThe overview already lists $N(4)=16$, which is not more than $20$. Benefit $24$ minus upkeep $8$ is $16$. The claimed $20$ overshoots the net, and $24$ is cooling before upkeep. Mixing $B$ with $N$ is the trap.",
    ],
  },
  "math-8-93": {
    tacticals: [
      "**A.** → True\n\nThe overview already inverted to $p=\\sqrt{2000}\\,q^{-\\frac{1}{2}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $-2$. Price needed for a given weekly demand is still a monomial in $q$. Falling demand does not introduce a logarithm.",
      "**B.** → False\n\nDoubling the five-euro price would halve demand only if the exponent were $-1$. With $-2$ the factor is $\\frac{1}{4}$, so $80\\cdot\\frac{1}{4}=20$ packs, not $40$. Demand falls to one quarter, not to one half. Inverse-linear thinking is the trap.",
      "**C.** → True\n\nThe overview already lists $q(10)=20$, which sits under $25$. Ten euros is a doubling of the logged $5$, so inverse-square demand is a quarter of $80$. Twenty packs already sit under twenty-five. That is the same factor as B, read as a level.",
      "**D.** → True\n\nRevenue is $R(p)=\\frac{2000}{p}$, a negative leftover power, so the till shrinks as the price rises. At $5$ euros the take is $400$; at $10$ euros it is $200$. Inverse-square demand is elastic enough that a price rise cuts $pq$.",
      "**E.** → False\n\nA target of $125$ packs inverts to $p=4$, which sits below $5$, not above it. Sixteen is $2000/125$, and $p=4$. More packs require a lower price along this curve. The unique positive price that moves $125$ packs is four euros.",
    ],
  },
  "math-8-94": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $q\\circ p=\\frac{400}{s}$. Demand's exponent $-\\frac{3}{2}$ times the indexation exponent $\\frac{2}{3}$ is $-1$. A monomial $400s^{-1}$ is a power of $s$. Stopping after $p(s)$ would have left exponent $\\frac{2}{3}$.",
      "**B.** → False\n\nTripling the subsidy index multiplies composed demand by $3^{-1}=\\frac{1}{3}$, not by $3$. Demand falls to a third rather than tripling. The indexation $p\\propto s^{\\frac{2}{3}}$ raises the pass price as $s$ grows, so the composed map is inverse, not increasing.",
      "**C.** → True\n\nThe overview already lists $q(p(8))=50$, which sits above $40$. That is the pilot itself: subsidy index $8$ was calibrated to the $16$-euro, $50$-pass reading. Fifty passes already sit above forty.",
      "**D.** → False\n\nThe composed map is $\\frac{400}{s}$, so for every $k>1$ the factor $k^{-1}<1$. Raising the subsidy index lowers composed demand. The policy index raises the pass price with $s$, and higher prices cut sales. \"Subsidy up, sales up\" ignores that indexation.",
      "**E.** → True\n\nAt subsidy index $27$, composed demand is $\\frac{400}{27}\\approx 14.81$, which sits under $16$. From the pilot, $\\frac{27}{8}$ times the index multiplies demand by $\\frac{8}{27}$: $50\\cdot\\frac{8}{27}=\\frac{400}{27}$. Fourteen and a bit stays under sixteen.",
    ],
  },
  "math-8-95": {
    tacticals: [
      "**A.** → False\n\nThe overview already listed the equal-marginal split $q_{1}=6$, $q_{2}=24$ at cost $180$, cheaper than all on line 2 at $225$. Quadratic costs rise so fast that spreading the load still beats concentrating. Sending everything to the cheaper line is not cheapest.",
      "**B.** → True\n\nAll thirty thousand loaves on line 2 score $C_{2}(30)=\\frac{1}{4}\\cdot 900=225$, which sits above $200$. Plant 2 is cheaper per squared unit, but thirty squared is still $900$. The corner already clears two hundred.",
      "**C.** → True\n\nEqual marginal costs force $q_{2}=4q_{1}$, so the cheaper line takes the larger share: $24$ against $6$. Twenty-four thousand loaves sit on line 2. A cheaper coefficient should carry more volume, not less, when both costs are squares.",
      "**D.** → False\n\nLine 1's average cost index is $q$ itself, which rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$. Extra loaves on line 1 are dearer per loaf, not cheaper.",
      "**E.** → True\n\nThe overview already listed the $6$-and-$24$ split at $180$, which sits under $200$. Six squared is $36$; twenty-four squared over $4$ is $144$; together $180$. That is the equal-marginal plan from A and C, read against a cutoff.",
    ],
  },
  "math-8-96": {
    tacticals: [
      "**A.** → True\n\nFor a power $q=Ap^{r}$ the point elasticity is the exponent itself, $\\varepsilon=r=-2$, independent of $p$. Demand is equally elastic at every price $p>0$. The usual trap is treating elasticity as a local slope that would change along the curve; for a monomial it does not.",
      "**B.** → True\n\nThe overview already listed an exact cut of about $12.22$ tickets from $10$ to $12$ euros: $q(12)=\\frac{250}{9}\\approx 27.78$, and $40-27.78\\approx 12.22$. That sits above $10$. A $20\\%$ elasticity shortcut on $40$ tickets would have claimed $8$ and undershot.",
      "**C.** → True\n\nThe shortcut predicts $-2\\times 10\\%=-20\\%$. The exact factor is $1.1^{-2}=\\frac{1}{1.21}\\approx 0.826$, a cut of about $17.36\\%$. The shortcut overstates the drop. Linearizing a power at a $10\\%$ step is still a little coarse.",
      "**D.** → False\n\nRevenue is $R(p)=\\frac{4000}{p}$, which falls toward $0$ as $p$ grows. Raising the price without bound drives the till toward zero rather than a maximum. Inverse-square demand is elastic: a price rise cuts $pq$. There is no interior maximum on $p>0$.",
      "**E.** → True\n\nThe overview already lists $q(5)=160$, which sits above $150$. Halving the price quadruples inverse-square demand: $40\\cdot 4=160$. Linear thinking would have claimed $80$ and missed the letter.",
    ],
  },
  "math-8-97": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $A=8$ and exponent $\\frac{3}{2}>1$. Each extra unit of belt setting adds more trays than the unit before it. Three halves is above one, so throughput outruns the belt. A proportional lehr would have carried exponent $1$.",
      "**B.** → True\n\nThe slope $T'(e)=12\\sqrt{e}$ is $24$ after setting four and $36$ after setting nine. Because $r>1$ the slope rises. An extra unit adds more trays after nine than after four. Convex throughput is the $r>1$ story on the derivative.",
      "**C.** → True\n\nThe overview already lists $T(9)=216$, which sits above $200$. Nine contributes $3^{3}=27$, times $8$. Because the exponent exceeds one, the belt setting of $9$ has outrun a linear guess from $T(4)=64$.",
      "**D.** → False\n\nA $25\\%$ larger coefficient appears once above and once below in the ratio $\\frac{T(2e)}{T(e)}$, so it cancels. The doubling factor stays $2^{\\frac{3}{2}}$. Levels move by $25\\%$ and doubling ratios do not. That is the same coefficient-cancellation as the bottling-line letter on $A$.",
      "**E.** → True\n\nLevels do scale with $A$. The overview's $T(9)=216$ becomes $1.25\\cdot 216=270$ under a $25\\%$ larger coefficient, which sits above $250$. The factor $1.25$ survives on levels even though D showed it dies in ratios. Levels and ratios answer a wrong coefficient in opposite ways.",
    ],
  },
};

const r = applyFile(new URL("./91_97.json", import.meta.url), patches);
console.log(r);
