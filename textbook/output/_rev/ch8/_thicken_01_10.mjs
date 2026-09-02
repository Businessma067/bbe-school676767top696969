import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spliceBeforeCloser, words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(__dirname, "01_10.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const extra = {
  "math-8-2": {
    2: `**4.** Extra arithmetic that stays on the legal side of the gate: $D(4)=12$ is a real twelve kilograms, while $D(-4)$ is not real. The $4$ and the $-4$ are not interchangeable under an even root. A solver who cancelled the minus because a square will eat it is thinking of $t^{2}$, not of $t^{\\frac{1}{2}}$. Clock times before the reset are a domain refusal, not a signed load.`,
  },
  "math-8-3": {
    0: `**4.** A second mix-up is to read $S(x)\\to 0$ as $S(x)=0$ at some large but finite mast distance. The reciprocal cube is never exactly zero at a finite $x$. At $x=80$ metres, $S(80)=\\frac{80}{512000}=0.00015625$, already a fraction of a millivolt and still not a dead beacon. Fading at infinity is an approach, not an arrival. Letter D's finite $S(2)=10$ is compatible with that fade: two metres is not infinity.`,
    1: `**4.** Letter D will ask for $S(2)=10$, a finite reading at a legal distance. That finite reading is compatible with an unbounded approach as $x\\to 0^{+}$: two metres is not the mast. A rushed solver who treated "unbounded near the mast" as "undefined at two metres" has confused an extreme with a level. The blow-up is an approach from the positive side, and $x=2$ sits comfortably on that side.`,
    2: `**4.** Extra arithmetic at the other end of $T$ is letter E: $T\\to 0$ as $x\\to 0^{+}$. A coefficient-as-ceiling reader might also think $T$ cannot fall below $2$ at the start. After one minute, $T(1)=2$, and after a quarter of a minute $T(0.25)=1$, already under the claimed lid. The $2$ is a reading at $x=1$, not a bound, and it is not a long-run cap either.`,
    3: `**3.** A solver who used $S(2)=80\\cdot 2=160$ skipped the exponent entirely. The recovered object is the Part 3 level $10$, not a linear multiple of the coefficient. Another who computed $80-2^{3}=72$ mixed subtraction into a reciprocal power.`,
  },
  "math-8-4": {
    0: `**4.** The opposite of a strictly decreasing spread would be a U-shape or a later rise once the workshop was "too busy." Nothing in $\\frac{600}{q}$ turns upward. At $q=100$, $U(100)=6$, still below $U(30)=20$. Direction is settled by the negative exponent, and extra cartridges of order size keep cutting the spread without a later rebound.`,
    1: `**4.** Letter A used direction and this letter uses sign. A strictly decreasing positive function can do both at once: fall, and stay above zero. Those are different claims about the same curve. Finishing hours $V$ are also always positive, so a solver who wanted a negative number on this order book has no formula that supplies one. A negative coefficient on $U$ would have been a different stem.`,
    2: `**4.** Compared with overhead, finishing hours climb while the spread falls. A solver who reported "both fall because bigger jobs are more efficient" has mixed the two columns. Efficiency here is a per-unit overhead story. Labour hours still rise, $V(27)=27$ and $V(64)=48$, so the increasing claim is about $V$, not about $U$.`,
    3: `**3.** Extra arithmetic that shows how $80$ could have been manufactured: $U(7.5)=80$, but $7.5$ is not an eight-unit order. Or $8\\cdot 10=80$ as if a rate of $10$ euros per unit had been guessed from a round number. The recovered division is $600/8=75$, and the claim does not match that $75$.`,
  },
  "math-8-5": {
    0: `**4.** Letter D will claim that doubling this $A$ doubles a staffing ratio. That later confusion is why the recovery has to be named as a coefficient of a level, not as a scale factor. With $A=8$, $Q(s)=8s^{\\frac{1}{2}}$ is the rule the rest of the task reads. A different audited shift, say $Q(25)=20$, would have given $A=4$ and this claim would have been false.`,
    2: `**4.** The opposite verdict would need exponent $1$, where quadrupling staff would quadruple output, or exponent $2$, where it would multiply output by $16$. The stem's $\\frac{1}{2}$ is the square-root case, and $4^{\\frac{1}{2}}=2$ is forced. Staffing density never enters. Whether the line bottled resin or water, quadrupling staff would still double output.`,
    3: `**4.** What would have to change for the ratio to double with $A$ is a formula in which $A$ appeared only once, for example $Q(4s)-Q(s)$. That difference would indeed double if $A$ doubled, because a difference of two levels is still a level. A ratio of two levels is not. The claim named the ratio $\\frac{Q(4s)}{Q(s)}$, whose $A$ cancels.`,
  },
  "math-8-6": {
    0: `**4.** What would have to change for the pair to be $8$ and $6$ is a different cubic, for instance $G(n)=\\frac{3}{4}n^{3}$, which at $n=2$ really would read $6$. The stem's cubic is $n^{3}$. The crossing is a tie at $8$, and a tie is not an $8$-against-$6$ gap. Letter E's later $24$ is a different false cubic, at a different line size.`,
    1: `**4.** The opposite verdict would need a second positive root of $n^{2}(n-2)=0$. The only positive root is $n=2$. Past that root the cubic stays ahead at $n=2.1$, at $n=3$, and at every larger line. Checking one more point does not create a later catch-up by the quadratic. Equal exponents would have been needed for a second meeting.`,
    2: `**4.** What would flip this verdict is a smaller coefficient on $F$, or a larger one on $G$, moving the crossing left of $1$. With $F(n)=2n^{2}$ and $G(n)=n^{3}$, the crossing is at two machines, so the whole interval $0<n<2$ has the quadratic in front. A one-machine line is the cleanest witness, and the half-machine line is a second witness.`,
    3: `**4.** A ratio tending to $1$ is the language of equivalent leading terms. Here the leading term of $G$ is $n^{3}$ and the leading term of $F$ is $2n^{2}$. Those are not equivalent. The leftover $n/2$ is the exact discrepancy, and it is a power of $n$, not a constant. Constants tend to themselves; this leftover does not.`,
    4: `**3.** Extra arithmetic that manufactures $24$: $18+6$ as if the gap at $n=3$ were the coefficient $2$ times $3$, or $3^{3}-3=24$ subtracting the input from the cube. The recovered cube is $27$. The claim's $24$ is $3$ light, and that $3$ is the whole content of the false level.`,
  },
  "math-8-7": {
    1: `**4.** Extra arithmetic on a nearby legal reading does not repair the illegal one. $L(4)=2$ is real, and $L(0)=0$ is real, while $L(-4)$ is not. The calibration sheet can file a blank reading and a positive reading on $L$; it cannot file a negative reading on $L$. Odd-root licence lives on $M$, not on $L$.`,
    2: `**4.** What would flip the sign of this filing is an even root, which would refuse $-8$, or a "principal positive root" instruction that the stem does not give. The exponent $\\frac{1}{3}$ is odd, so the filed value is negative. Checking $(-2)^{3}=-8$ is the inverse test, and it passes. Filing $+2$ would fail that test, because $2^{3}=8\\neq -8$.`,
    3: `**4.** Letter A used the weaker gate $x\\ge 0$ on $L$. This letter uses the stronger gate $x>0$ on $N$. Those two facts are easy to swap, which is why a solver who filed $N(0)=0$ has copied the wrong transform. A negative exponent stacked on an even root excludes zero twice over, once for the root and once for the reciprocal.`,
    4: `**4.** What would have made the claim true is the input $x=\\frac{1}{4}$, where $N(0.25)=2$, or the transform $L$ at $x=4$. The stem pointed $N$ at $4$. Reciprocals swap $2$ and $\\frac{1}{2}$; they do not leave $2$ sitting on $x=4$. The recovered $N(4)=\\frac{1}{2}$ is the reciprocal of the even-root filing $L(4)=2$.`,
  },
  "math-8-8": {
    0: `**3.** A solver who computed $12-4=8$ invented a linear leftover, and a solver who computed $12/\\sqrt[3]{4}$ used the wrong root. The recovered object is the Part 3 entry $P(4)=6$, a reciprocal square root at a perfect square of cartridges.`,
    1: `**4.** Extra arithmetic on the quadrupling identity from $(2)$: every fourfold increase of the bank halves the drop, which is a strict decrease along a discrete subsequence and therefore along the whole ray. From $P(1)=12$ to $P(4)=6$ to $P(16)=3$ to $P(64)=1.5$, each step is smaller than the last. There is no later rise once "enough" cartridges are in.`,
    2: `**4.** What would let the drop actually reach zero is a formula that hit zero at a finite $x$, for example a factor $(x_{\\max}-x)$. The stem has no such factor. A negative coefficient would have sent the drop through zero into negative kilopascals, which the bank also does not do. Approaching zero from above, forever, is the whole reciprocal-square-root story at infinity.`,
    3: `**4.** Letter C used the far end, where the drop fades. This letter uses the near end, where the drop explodes. Same formula, opposite extreme, opposite verdict. A finite limit as $x\\to 0^{+}$ would have needed a nonnegative exponent, or a bounded rewrite such as $\\frac{12}{1+\\sqrt{x}}$. The stem's $12x^{-\\frac{1}{2}}$ has neither.`,
    4: `**3.** A solver who computed $12/9=\\frac{4}{3}$ skipped the root, and a solver who computed $12-9=3$ invented a linear leftover. Nine is a perfect square, so the reciprocal square root is the integer division $12/3=4$. The recovered Part 3 entry is $4$ kilopascals.`,
  },
  "math-8-9": {
    0: `**4.** Letter D will use the unit radius, where $y(1)$ equals the coefficient, so a false $A=15$ would have shown up there as $15$ litres. That is a second reason the recovery has to be $5$, not $15$. Primer is an area story: divide the recorded $45$ by $3^{2}=9$, not by $3$. Linear recovery is the trap that manufactures $15$.`,
    2: `**4.** Letter E is the matching scale question with $k=0.5$. This letter is the widening. The two factors $1.5^{2}=2.25$ and $0.5^{2}=0.25$ are not a plus-fifty / minus-fifty pair, because an exponent of $2$ is not linear. Density of primer never enters a scale question: whether $A$ were $5$ or $50$, a $50\\%$ wider panel would still multiply primer by $2.25$.`,
    4: `**4.** What would have made the claim true is exponent $1$, a length of trim rather than an area of primer. With exponent $2$, halving the radius quarters the disc. A volume story with exponent $3$ would have given the even smaller factor $0.125$. Circular primer is the square, and $0.5^{2}=0.25$ is forced.`,
  },
  "math-8-10": {
    0: `**3.** A solver who computed $0.5\\cdot 10^{3}=500$ used a cube, and a solver who reported $10$ as if the coefficient were $1$ skipped the $0.5$. Ten squared is $100$, half of $100$ is $50$. The recovered Part 3 entry at the lower standard speed is $50$ points.`,
    2: `**3.** A solver who doubled $E(10)=50$ would report $100$, using a linear scale. The right scale is letter B's factor $4$, and $50\\cdot 4=200$. Twenty squared is $400$, half of $400$ is $200$. The recovered Part 3 entry at the higher standard speed is $200$ points.`,
    3: `**4.** Letter B's ratio $E(20)/E(10)=4$ is a ratio of two positive numbers. This letter is the sign that makes that ratio legal without further checks. A negative index at some awkward speed would have required a negative coefficient. The stem's $0.5$ is positive, and a square does not change sign on $v>0$.`,
    4: `**4.** What would have made a $10\\%$ index rise true is exponent $1$. With exponent $2$, the binomial $(1+0.1)^{2}=1+0.2+0.01=1.21$ is forced. The leftover $0.01$ is small, which is why a rushed solver drops it and reports $20\\%$, still missing $21\\%$. Both standard speeds, $10$ and $20$, show the same $21\\%$ overspeed factor.`,
  },
};

for (const t of arr) {
  if (t.id === "math-8-1") continue;
  const map = extra[t.id];
  if (!map) continue;
  for (const [i, para] of Object.entries(map)) {
    const idx = Number(i);
    t.tactical_explanations[idx] = spliceBeforeCloser(t.tactical_explanations[idx], para);
  }
}

fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");

for (const t of arr) {
  if (t.id === "math-8-1") continue;
  if (!extra[t.id] && t.id > "math-8-10") continue;
  if (t.sort_order > 10) continue;
  console.log(t.id, t.tactical_explanations.map(words).join("/"));
}
