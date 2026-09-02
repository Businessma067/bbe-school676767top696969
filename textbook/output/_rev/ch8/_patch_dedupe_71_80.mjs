import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-71": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $r=-\\frac{3}{2}$ from $4^{r}=\\frac{1}{8}$. That exponent sits below $-1$, so a price factor $k>1$ cuts subscribers by more than $k^{-1}$. Subscribers fall faster than the price rises. Inverse-linear demand would have been $r=-1$.",
      "**B.** → True\n\nThe overview already lists $R(16)=500$, which sits under $600$. Sixteen euros contribute a square root of $4$, and $2000/4=500$. Using the $4$-euro revenue of $1000$ as if quantity were fixed would have claimed $4000$ and missed the collapse.",
      "**C.** → True\n\nThe overview already composed $R(p)=2000p^{-\\frac{1}{2}}$. Price times $p^{-\\frac{3}{2}}$ demand leaves leftover exponent $-\\frac{1}{2}$. A monomial is a power function, so revenue is a power of price. Stopping at $q$ would have left exponent $-\\frac{3}{2}$.",
      "**D.** → False\n\nTo double revenue from $R(4)=1000$, the price factor satisfies $k^{-\\frac{1}{2}}=2$, so $k=\\frac{1}{4}$. The service must cut that price to a quarter, not to a half. Halving would multiply revenue only by $\\sqrt{2}\\approx 1.41$.",
      "**E.** → False\n\nAt $9$ euros, $R(9)=\\frac{2000}{3}\\approx 667$, which sits above $600$, not under it. Nine contributes a square root of $3$. The till has fallen from the $4$-euro $1000$, but not as far as the claimed under-$600$ line.",
    ],
  },
  "math-8-72": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $F=400$ and $C(n)=400+30\\sqrt{n}$. A pure power $A n^{r}$ cannot carry a nonzero intercept, and the retainer is $400$ euros. The trap is ignoring the intercept and treating the bill as a square-root monomial through the origin.",
      "**B.** → True\n\nThe overview already lists $C(900)=1300$, which sits above $1200$. Nine hundred branches contribute a square root of $30$, so $400+900=1300$. Dropping the retainer would have claimed $900$ and missed the floor.",
      "**C.** → True\n\nCost per branch is $\\frac{400}{n}+30n^{-\\frac{1}{2}}$. Both pieces decline as the network grows: the retainer is spread, and the leftover exponent on the variable term is negative. A larger network is cheaper per branch even while the total bill rises.",
      "**D.** → False\n\nQuadrupling $n$ doubles the square-root term, from $30\\sqrt{n}$ to $60\\sqrt{n}$, but the $400$-euro retainer stays put. The whole bill is not doubled. Only a pure power would scale that cleanly, which is why A was true.",
      "**E.** → False\n\nThe overview already lists $C(36)=580$, while the $100$-branch invoice is $700$, and $580<700$. Thirty-six branches still sit below that invoice. Square root of $36$ is $6$, times $30$ is $180$, plus the retainer.",
    ],
  },
  "math-8-73": {
    tacticals: [
      "**A.** → True\n\nThe overview already placed the meeting at $q=40$, where $O=H=120$. The slope $T'(q)=-4800q^{-2}+3$ is zero there, and $T''>0$, so the crossing is a minimum. Annual total cost is smallest where the two components meet, not at an endpoint.",
      "**B.** → True\n\nThe overview already listed $T(60)=260$, which sits above $250$. Ordering $\\frac{4800}{60}=80$ plus holding $180$ is $260$. Sixty is past the minimum, so the total has already ticked up from $240$.",
      "**C.** → False\n\nDoubling an arbitrary batch gives $T(2q)=\\frac{2400}{q}+6q$, which equals $T(q)$ only for special pairs. Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing. $T(80)=300\\neq T(40)=240$.",
      "**D.** → True\n\nThe overview already listed $T(20)=T(80)=300$. Those two batches are the reciprocal pair around $40$ with product $1600$. Each move raises the annual total by $60$ euros, so the two moves cost the same. That is the EOQ symmetry, not a coincidence.",
      "**E.** → False\n\nAt $80$ units, ordering cost is $O(80)=60$, which sits well below $200$. Holding is the large term on this side of the crossing. Mixing $O$ with $T(80)=300$ is how a \"more than $200$\" ordering claim appears.",
    ],
  },
  "math-8-74": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $r=\\frac{3}{4}$ and average product $12L^{-\\frac{1}{4}}$. The leftover exponent $-\\frac{1}{4}$ is not the output exponent $\\frac{3}{4}$. Average product is still a power of hours, but a different power. Subtracting $1$ from $r$ is the whole move.",
      "**B.** → True\n\nAt $16$ hours the overview's average is $6$, which sits under $7$. Sixteen hours produce $96$ units, and $96/16=6$. That logged level does not need a second recovery of $A$.",
      "**C.** → False\n\nTo double output, $k^{\\frac{3}{4}}=2$ forces $k=2^{\\frac{4}{3}}\\approx 2.52$, more than a doubling of hours. Doubling labour would multiply output only by $2^{\\frac{3}{4}}\\approx 1.68$. A three-quarters technology will not keep pace with the clock.",
      "**D.** → True\n\nAverage product falls from $6$ at $L=16$ to $4$ at $L=81$. The leftover exponent $-\\frac{1}{4}$ is negative, so the average declines as labour hours rise. Falling average and $r<1$ are the same story.",
      "**E.** → False\n\nAt $81$ hours the average is $4$, which does not exceed $5$. Three hundred and twenty-four units over eighty-one hours is $4$. The sixteen-hour average of $6$ is the one still above $5$; by eighty-one hours it has already fallen.",
    ],
  },
  "math-8-75": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $t(n)=8+50n^{-\\frac{1}{2}}$ and the limit $8$. No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the handling floor is approached and never attained. A pure power through the origin would have gone to $0$; the intercept stops that.",
      "**B.** → True\n\nThe overview already lists $t(900)=\\frac{29}{3}\\approx 9.67$, which sits under $10$. Nine hundred contributes a square root of $30$, and $8+\\frac{50}{30}=8+\\frac{5}{3}$. The floor is close, but the learning term is still a sliver.",
      "**C.** → True\n\nThe learning component scales as $n^{-\\frac{1}{2}}$, so quadrupling $n$ multiplies it by $4^{-\\frac{1}{2}}=\\frac{1}{2}$. The floor is untouched by this scaling, but the claim is only about the learning term. Inverse-square-root learning halves on a fourfold volume.",
      "**D.** → False\n\nQuadrupling volume halves the learning term, but the eight-minute floor stays put and dilutes the gain in the total. From $t(25)=18$ a halved learning term would not cut the whole $18$ in half. The intercept is why C can be true while D is false.",
      "**E.** → False\n\nAfter $4$ cumulative units, $t(4)=8+\\frac{50}{2}=33$, which sits above $30$. Square root of $4$ is $2$. The power term has fallen from the first unit, but not far enough to pull the unit under thirty minutes.",
    ],
  },
  "math-8-76": {
    tacticals: [
      "**A.** → False\n\nRevenue is $90x^{\\frac{2}{3}}$, and $\\frac{2}{3}\\neq 1$. Doubling feed multiplies revenue by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. Revenue rises more slowly than feed. Proportionality would have required lockstep.",
      "**B.** → True\n\nAt $64$ tonnes, $R(64)=1440$ and $C(64)=1920$, so cost already exceeds harvest revenue. Sixty-four is $4^{3}$, so the two-thirds power is $16$, times $90$. Past the break-even $x=27$, the linear cost is ahead.",
      "**C.** → False\n\nThe slope $R'(x)=60x^{-\\frac{1}{3}}$ is smaller after $27$ tonnes than after $8$, because the leftover exponent is negative. An extra tonne adds less revenue later, not more. A two-thirds harvest flattens.",
      "**D.** → True\n\nThe overview already wrote $\\frac{R}{C}=\\frac{3}{x^{\\frac{1}{3}}}$. Past $x=27$ that ratio is less than $1$ and keeps falling, because the cube root keeps growing. Extra feed widens the gap; it cannot restore a surplus.",
      "**E.** → True\n\nThe overview already lists $P(8)=120$, which sits above $100$. Logged revenue $360$ minus cost $240$ is $120$. Using revenue in place of profit would have claimed $360$ and overshot the letter.",
    ],
  },
  "math-8-77": {
    tacticals: [
      "**A.** → False\n\nIdentity $(2)$ already gives $4^{\\frac{3}{2}}=8$. Multiplying the index by $4$ multiplies cost by $8$, not by $4$. A four-fold factor would belong to exponent $1$. The three-halves exponent outruns the index.",
      "**B.** → True\n\nThe overview already recovered $A=6$, and $f(9)=162$, which sits above $150$. Nine contributes $3^{3}=27$, times $6$. The difference record $f(16)-f(4)=336$ is what pinned $A$; this letter is a level on that calibrated curve.",
      "**C.** → True\n\nThe exponent $\\frac{3}{2}>1$, and the same $4^{\\frac{3}{2}}=8$ from A is already larger than $4$. Cost grows faster than the pallet-volume index. A proportional handler would have carried exponent $1$.",
      "**D.** → False\n\nThe slope $f'(x)=9\\sqrt{x}$ is $18$ at index $4$ and $27$ at index $9$. Because $27>18$, later index steps of the same width add more euros than earlier ones. Equal gaps in the index do not produce equal gaps in cost when $r>1$.",
      "**E.** → False\n\nRaising the index from $9$ to $25$ adds $f(25)-f(9)=750-162=588$, which is not under $500$. Twenty-five contributes $5^{3}=125$, times $6$ is $750$. Five hundred and eighty-eight euros is not under five hundred.",
    ],
  },
  "math-8-78": {
    tacticals: [
      "**A.** → True\n\nThe overview already inverted to $s=(W/5)^{\\frac{2}{3}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $\\frac{3}{2}$. Scale needed for a given load is still a monomial in $W$.",
      "**B.** → True\n\nThe overview already placed the largest admissible scale at $s=16$, which sits below $20$. Five times $16^{\\frac{3}{2}}=64$ is the $320$ kg cap. Every larger index breaches the permit. Sixteen sits below twenty.",
      "**C.** → False\n\nDoubling the ceiling multiplies admissible scale by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. The inverse exponent $\\frac{2}{3}<1$, so permitted scale grows more slowly than the permitted load. Linear thinking on the inverse is the trap.",
      "**D.** → False\n\nIf $A$ doubled, the admissible scale would satisfy $10s^{\\frac{3}{2}}=320$, so $s=32^{\\frac{2}{3}}\\approx 10.08$, not $8$. The scale factor is $2^{-\\frac{2}{3}}\\approx 0.63$, not $\\frac{1}{2}$. Halving $s$ would have needed inverse exponent $-1$ on $A$, not $-\\frac{2}{3}$.",
      "**E.** → True\n\nThe overview already listed $W(4)=40$, which sits under $50$. Four contributes $2^{3}=8$, times $5$. The load has grown with scale, but at this small index it is still below the named line.",
    ],
  },
  "math-8-79": {
    tacticals: [
      "**A.** → False\n\nThe elasticity shortcut predicts $-2\\times 25\\%=-50\\%$. The exact factor is $(\\frac{5}{4})^{-2}=\\frac{16}{25}=0.64$, a cut of $36\\%$, not $50\\%$. The two methods disagree. Linearizing a power at a $25\\%$ step is too coarse.",
      "**B.** → True\n\nAfter a $25\\%$ rise the exact demand is $4000\\cdot\\frac{16}{25}=2560$, which sits above $2500$. The overview already listed $q(3.75)=2560$. The $2500$ cutoff is a near miss on that exact inverse-square step.",
      "**C.** → True\n\nThe shortcut claims a $50\\%$ loss; the exact cut is $36\\%$. A predicted $50\\%$ against a true $36\\%$ overstates the loss. That is the same pair of numbers as A, read as a comparison of methods rather than as agreement.",
      "**D.** → False\n\nA $25\\%$ rise cuts demand by $36\\%$; a $25\\%$ cut raises it by $\\frac{16}{9}-1=\\frac{7}{9}\\approx 77.8\\%$. Inverse-square percentage changes are not symmetric. The two percentages are not the same.",
      "**E.** → True\n\nThe overview already lists $q(2)=9000$, which sits above $8000$. Two euros into $36000$ is $9000$ after dividing by $4$. Cutting the tariff from $3$ to $2$ is not a $25\\%$ move; this letter is a separate level.",
    ],
  },
  "math-8-80": {
    tacticals: [
      "**A.** → True\n\nIdentity $(2)$ already gives $2^{3}=8$. Doubling height multiplies mass by $8$, which exceeds $2$. Mass grows faster than height. A proportional casting would have carried exponent $1$.",
      "**B.** → True\n\nThe overview already lists $M(1.5)=810$, which sits above $700$. Height $1.5$ is three times the $0.5$ m pattern, so mass multiplies by $27$: $30\\cdot 27=810$. Linear scaling would have claimed $90$ kg and missed the cube.",
      "**C.** → False\n\nDoubling height multiplies mass by $8$, not by $2$. The half-metre bell at $30$ kg would become $240$ kg at one metre, not $60$ kg. Linear thinking is the trap. This is the same factor as A, read against a doubling claim.",
      "**D.** → False\n\nMass per metre is $240h^{2}$, which rises with height. At $0.5$ m the quotient is $60$; at $1$ m it is $240$. Sixty kilograms per metre is not $240$. A constant intensity would have needed exponent $1$.",
      "**E.** → True\n\nThe overview already lists $M(1)=240$, which sits above $200$. At a unit height the cube is $1$, so the mass equals the coefficient. That is the same unit-side trick as $M(1)$ on the resin block: $A$ is the one-metre bell.",
    ],
  },
};

const r = applyFile(new URL("./71_80.json", import.meta.url), patches);
console.log(r);
