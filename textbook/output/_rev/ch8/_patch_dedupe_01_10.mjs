import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-1": {
    tacticals: [
      "**A.** → True\n\nThe overview already lists $M(2)=40$. That is five times the cube of the side, not five times the side itself. A rushed solver who computed $5\\cdot 2^{2}=20$, treating the block as an area, would miss the cubic packing. The mass table is already the evaluation; this letter is only reading the $2$ cm entry.",
      "**B.** → False\n\nThe same table lists $M(3)=135$, not $125$. The figure $125$ is $5^{3}$: someone cubed the density coefficient and ignored the side. The exponent acts on $s$, never on the $5$. Swapping those two would have needed a rule of the form $s\\cdot 5^{3}$, which is not the resin model.",
      "**C.** → True\n\nThe doubling factor is already $2^{3}=8$ from identity $(2)$. The coefficient $5$ cancels in the ratio, so density never enters a scale question. The trap is thinking \"twice the side, twice the mass\", which would be the exponent-$1$ story, or \"twice the side, four times the mass\", the area story. A cube of widths is eight copies of the original block.",
      "**D.** → True\n\nAt side $1$ the overview's table reads $M(1)=5$. Every power of $1$ is $1$, so the mass at a unit side is exactly the coefficient. That is why $M(1)$ is a quick check on the printed $5$, not a new cube. A solver who still cubed $5$ would land on $125$ and confuse this letter with B.",
      "**E.** → False\n\nFour centimetres sit in the table as $M(4)=320$, not $240$. Nothing in $5s^{3}$ produces $240$: that figure is closer to $5\\cdot 48$, as if a square and a cube had been mixed. A fourfold width is sixty-four copies of the unit cube, times density $5$. The table already carries that product.",
    ],
  },
  "math-8-2": {
    tacticals: [
      "**A.** → True\n\nThe overview already records $D(0)=0$. A square root accepts zero because $0^{2}=0$, so the even-root gate does not slam at the reset. The trap is treating every power the same as a reciprocal and refusing $t=0$ for $D$ as well as for $R$. Load at reset is a genuine real, namely the origin of the trace.",
      "**B.** → False\n\nTurbidity is already written as $\\frac{50}{t^{2}}$ on $t>0$, so the reset puts a zero in the denominator. Division by zero is undefined; there is no limiting value hiding behind the formula. A solver who plugged $t=0$ into $50t^{-2}$ as if the negative exponent were harmless would invent a reading the gauge cannot print.",
      "**C.** → False\n\nThe overview already flags $\\sqrt{-4}$ as not real. The exponent $\\frac{1}{2}$ is an even root, and no real number squares to a negative. Clock times before the reset are outside the load domain even though a negative $t$ would be fine for the even power in $R$. Sign of the exponent and parity of the root are different tests.",
      "**D.** → True\n\nThe overview already lists $R(4)=3.125$. Four hours is a legal positive time, so this is a level, not a domain question: square $4$ in the denominator and divide $50$ by $16$. Mixing this letter with the $t=0$ refusal would make a defined reading look undefined.",
      "**E.** → True\n\nThe overview already lists $D(9)=18$. Nine is a perfect square, so the square root is $3$ before the coefficient $6$ is applied. Taking $6\\cdot 9=54$ first, as if the exponent sat on the coefficient, is the usual arithmetic slip. The load rule is $6$ times a root, not a root of $6t$.",
    ],
  },
  "math-8-3": {
    tacticals: [
      "**A.** → True\n\nA negative exponent puts distance in a denominator, already written as $S(x)=\\frac{80}{x^{3}}$. As $x$ grows that denominator grows without bound while the numerator stays $80$, so the quotient is forced toward $0$. The overview's far reading $S(20)=0.01$ is that squeeze in numbers. A positive exponent would have climbed instead.",
      "**B.** → True\n\nNear the mast a small positive $x$ makes $x^{3}$ arbitrarily small, so $\\frac{80}{x^{3}}$ becomes arbitrarily large. The overview already computed $S(0.1)=80000$ as a sample of that blow-up. Falling toward zero far away and exploding nearby are the same reciprocal, read at opposite ends.",
      "**C.** → False\n\nThe $2$ in $T(x)=2x^{\\frac{1}{2}}$ multiplies the power; it is not a ceiling. The overview already lists $T(4)=4$, $T(100)=20$ and $T(10000)=200$, each larger than $2$. A positive exponent keeps climbing, even when the climb slows. Treating the coefficient as a cap is the trap that would make this letter true.",
      "**D.** → True\n\nThe overview already lists $S(2)=10$. Cube $2$ in the denominator and divide: $\\frac{80}{8}=10$. The usual miss is $80\\cdot 2^{-3}$ computed as $80-3$ or as $80/2=40$, dropping the cube. Two metres is a level on the reciprocal, not an end-of-scale question.",
      "**E.** → True\n\nA positive exponent keeps $T$ in the numerator. The square root of a shrinking positive input shrinks as well, and the overview already has $T(0.01)=0.2$ and $T(0.0001)=0.02$. Signal $S$ explodes as $x\\to 0^{+}$; the packet count does the opposite. Mixing the two ends of the two rules is how the false ceiling in C and this true limit get swapped.",
    ],
  },
  "math-8-4": {
    tacticals: [
      "**A.** → True\n\nOverhead is already $U(q)=\\frac{600}{q}$. On $q>0$ the numerator is fixed while the denominator grows, so every larger order strictly lowers the spread. The overview's table $U(2)=300$, $U(8)=75$, $U(30)=20$ is that fall in numbers. A positive exponent would have risen instead.",
      "**B.** → False\n\nThe numerator $600$ and the order size $q$ are both positive for every $q>0$, so the quotient stays positive. Falling toward zero is not the same as crossing it. The overview already records $U>0$ as a sign fact, not as a table lookup. A negative coefficient would have been needed to make this letter true.",
      "**C.** → True\n\nThe exponent $\\frac{2}{3}$ is positive, so a larger order raises a larger power, and the coefficient $3$ preserves that order. The overview already lists $V(8)=12$, $V(27)=27$, $V(64)=48$ climbing. Strictly increasing is the exponent's sign, not a comparison of two particular hours.",
      "**D.** → False\n\nThe overview already lists $U(8)=75$, not $80$. Eight units into $600$ is a straight division, $600/8=75$. The figure $80$ is what you would get from $600/7.5$, or from rounding $75$ up. Spread never hits $80$ at this batch size.",
      "**E.** → True\n\nThe overview already has $8^{\\frac{2}{3}}=4$ and $V(8)=12$. Cube root first, then square: $\\sqrt[3]{8}=2$, then $2^{2}=4$, then times $3$. Taking $8^{\\frac{2}{3}}$ as $8^{2}/3$ or as $8\\cdot\\frac{2}{3}$ is the fractional-power trap. Twelve hours is three times that $4$, already on the table.",
    ],
  },
  "math-8-5": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $A=8$ from $5A=40$. Staffing $25$ contributes a square root of $5$, so the coefficient is audited output divided by that root, not $40/25=1.6$. Treating $A$ as output per head would ignore the exponent $\\frac{1}{2}$. The $8$ is a calibration, not a second guess.",
      "**B.** → True\n\nOnce $A=8$ is in hand, the overview already lists $Q(100)=80$. A hundred staff contribute a square root of $10$, and $8\\cdot 10=80$. Linear scaling from the audited $25$ to $100$ would have multiplied by $4$ and claimed $160$, which is the exponent-$1$ story the square root forbids.",
      "**C.** → True\n\nIdentity $(2)$ already gives $4^{\\frac{1}{2}}=2$. The coefficient cancels, so quadrupling staff doubles output whether $A$ is $8$ or $800$. The trap is thinking extra staff add in proportion to headcount. A square-root technology turns a fourfold crew into a twofold crate count.",
      "**D.** → False\n\nA doubled coefficient appears once above and once below in the ratio, so it cancels. The overview already checked the counterfactual $Q_{c}$: every level doubles, while $\\frac{Q_{c}(4s)}{Q_{c}(s)}$ stays $2$. Doubling $A$ would double every output, not this scale factor. Levels and ratios answer a wrong coefficient in opposite ways.",
      "**E.** → False\n\nThe overview already lists $Q(4)=16$, not $20$. Four staff contribute a square root of $2$, and $8\\cdot 2=16$. The claimed $20$ is half the audited $40$, a linear halving from $25$ staff down to something near $12$, not to $4$. The exponent $\\frac{1}{2}$ does not scale with headcount.",
    ],
  },
  "math-8-6": {
    tacticals: [
      "**A.** → False\n\nThe overview already lists $F(2)=8$ and $G(2)=8$. They meet at two machines; the claim wants $8$ and $6$. The $6$ is what you would get from $2\\cdot 3$, or from cubing $2$ and then subtracting $2$. At the crossing both indices read the same $8$, so the second figure is simply wrong.",
      "**B.** → True\n\nThe factored difference is already $n^{2}(n-2)$ in the overview. For $n>0$ the square is positive, so the sign of $G-F$ is the sign of $n-2$. Whenever $n>2$ that factor is positive and the cubic leads. Checking a single point such as $n=3$ is consistent with this, but the factor is what makes it hold for every $n>2$, not just the next integer.",
      "**C.** → True\n\nOn $0<n<2$ the same factor $n-2$ is negative, so $F>G$. The overview already has the interior check $F(1)=2$ against $G(1)=1$. A larger coefficient can only lead on small inputs; past the crossing the larger exponent takes over. This letter is the other side of B, not a new factorisation.",
      "**D.** → False\n\nThe overview already simplified the ratio to $\\frac{n}{2}$, and listed $\\frac{G(20)}{F(20)}=10$ and $\\frac{G(200)}{F(200)}=100$. Those climb without bound. A limit of $1$ would mean the indices become comparable, which is what equal exponents would do. Here the leftover power of $n$ keeps growing.",
      "**E.** → False\n\nJust past the crossing the overview lists $F(3)=18$ and $G(3)=27$, not $18$ and $24$. The quadratic figure matches; the cubic is $3^{3}=27$. The $24$ is $8\\cdot 3$, as if someone multiplied the crossing value by $3$ instead of cubing $3$. The two indices read $18$ and $27$.",
    ],
  },
  "math-8-7": {
    tacticals: [
      "**A.** → True\n\nThe overview already lists $L(0)=0$. A square root accepts zero because $0^{2}=0$, so the even-root gate stays open at a blank reading. The trap is bundling $L$ with $N$ and refusing zero for every root. $L$ needs $x\\ge 0$; $N$ needs $x>0$. Those are different domains.",
      "**B.** → False\n\nThe overview already flags $\\sqrt{-4}$ as not real. No real $y$ satisfies $y^{2}=-4$, so $L$ refuses a negative raw reading. Odd roots would have accepted it, which is why $M(-8)$ in the next letter is legal. Parity of the root, not the size of $4$, decides this one.",
      "**C.** → True\n\nThe overview already lists $M(-8)=-2$. The exponent $\\frac{1}{3}$ is an odd root, so a negative reading is allowed, and $(-2)^{3}=-8$ confirms the inverse. Taking the cube root of $8$ and then attaching a minus by hand is unnecessary here, but it is a useful check. Even-root thinking from B would have wrongly refused this reading.",
      "**D.** → False\n\n$N$ is already $\\frac{1}{\\sqrt{x}}$ on $x>0$. At $x=0$ the denominator is zero, so the transform is undefined. The overview lists that refusal next to $\\sqrt{-4}$. Zero is legal for $L$ and illegal for $N$; the minus in the exponent is what adds the extra exclusion.",
      "**E.** → False\n\nThe overview already lists $N(4)=\\frac{1}{2}$, not $2$. The claimed $2$ is $\\sqrt{4}$, which is $L(4)$: the minus sign in the exponent was dropped. A negative exponent puts the root in the denominator, so four times the reading returns a half, not a double.",
    ],
  },
  "math-8-8": {
    tacticals: [
      "**A.** → True\n\nThe overview already lists $P(4)=6$. Four cartridges contribute a square root of $2$, and $12/2=6$. Treating $12\\cdot 4^{-1/2}$ as $12-0.5$ or as $12/4=3$ drops the root. This is a level on the reciprocal square-root rule, not a shape question.",
      "**B.** → True\n\nOn $x>0$ the numerator stays at $12$ while $\\sqrt{x}$ grows with $x$, so the quotient falls at every larger cartridge count. The overview's table $P(1)=12$, $P(4)=6$, $P(9)=4$, $P(16)=3$ is that monotone drop. A positive exponent would have risen.",
      "**C.** → True\n\nAs $x$ grows the denominator grows without bound while the numerator stays $12$, so $P(x)\\to 0$. Setting $\\frac{12}{\\sqrt{x}}=0$ would require $12=0$, which never happens, so no $x>0$ returns a drop of $0$. The overview's far readings $P(144)=1$ and $P(14400)=0.1$ approach zero without landing on it.",
      "**D.** → False\n\nThe overview already has $P(0.01)=120$ and $P(0.0001)=1200$. The denominator $\\sqrt{x}$ can be made arbitrarily small as $x\\to 0^{+}$, so $P$ has no finite limit there. A finite limit at the origin would need a nonnegative exponent. Pulling cartridges sends the drop past every bound.",
      "**E.** → True\n\nThe overview already lists $P(9)=4$. Nine cartridges contribute a square root of $3$, and $12/3=4$. Same arithmetic as A, different perfect square. Mixing $P(9)$ with $P(16)=3$ is the usual table slip; nine is the $3$ in the denominator, not the $4$.",
    ],
  },
  "math-8-9": {
    tacticals: [
      "**A.** → False\n\nThe overview already recovered $A=5$ from $9A=45$. The claimed $15$ is $\\frac{45}{3}$, which divides by the radius instead of by its square. Primer scales with area, so the recorded $45$ litres must be spread across $9$ square metres, not across $3$ metres of radius.",
      "**B.** → True\n\nThe overview already lists $y(6)=180$. Radius $6$ is a doubling of the recorded $3$, and a square law multiplies primer by $4$, so $45\\times 4=180$. Computing $5\\cdot 6=30$ would ignore the square; computing $45\\times 2=90$ would treat primer as linear in radius. Neither is the area scaling.",
      "**C.** → True\n\nIdentity $(2)$ already gives $1.5^{2}=2.25$. A fifty percent wider panel is the width multiplier $k=1.5$, and the coefficient cancels. The trap is adding $50\\%$ to the primer as well, or using $1.5\\times 1.5$ as $2$ by a sloppy round. The extra quarter is the square of the extra half-radius.",
      "**D.** → True\n\nThe overview already lists $y(1)=5$. At a unit radius the square is $1$, so the requirement equals the coefficient. That is the same unit-side trick as $M(1)$ on a cube: $A$ is the primer for a one-metre panel, which is why recovering $A=5$ and evaluating $y(1)$ are the same number.",
      "**E.** → False\n\nHalving the radius is $k=0.5$, and the overview already has $0.5^{2}=0.25$. Primer is multiplied by a quarter, not by a half. Linear thinking says \"half the width, half the paint\"; an exponent of $2$ magnifies every change in width, including a cut.",
    ],
  },
  "math-8-10": {
    tacticals: [
      "**A.** → True\n\nThe overview already lists $E(10)=50$. Square $10$ first, then halve: $0.5\\cdot 100=50$. Taking $0.5\\cdot 10=5$, or $10^{2}=100$ without the coefficient, are the two slips that miss this level. The $0.5$ is a calibration of units, not a suggestion to ignore the square.",
      "**B.** → True\n\nRaising speed from $10$ to $20$ is $k=2$, and identity $(2)$ already gives $2^{2}=4$. The coefficient cancels, so the same factor is $E(20)/E(10)=200/50=4$ from the table. Doubling speed quadruples a square index; thinking \"twice the speed, twice the energy\" is the linear trap.",
      "**C.** → True\n\nThe overview already lists $E(20)=200$. That is also $50\\times 4$ from the doubling in B, so C is the level that B's factor produces. Computing $0.5\\cdot 20=10$ would drop the square. Twenty is four times ten in the index, not twice.",
      "**D.** → True\n\nA square of a nonzero real is positive, and the coefficient $0.5$ is positive, so the product stays positive for every $v>0$. Zero itself is excluded by the domain. No evaluation is required: sign is read off the formula, which is why the overview treated this as a fact rather than a table entry.",
      "**E.** → False\n\nA ten percent overspeed is $k=1.1$, and the overview already has $1.1^{2}=1.21$ and $E(11)=60.5$ against $E(10)=50$. The index rises by twenty-one percent, not ten. Percent changes pass through the exponent: a relative change of $10\\%$ in $v$ becomes about $21\\%$ in $v^{2}$. Linear percentage thinking is the trap named in the title.",
    ],
  },
};

const r = applyFile(new URL("./01_10.json", import.meta.url), patches);
console.log(r);
