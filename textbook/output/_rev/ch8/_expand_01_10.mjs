import { applyLetters, words } from "./_expand_apply.mjs";

const L = {
  "math-8-2": [
    `**A.** → True

The load channel is the even-root rule $D(t)=6t^{\\frac{1}{2}}$ kilograms, and this letter asks a domain question, not a level. The claim is whether the gauge still returns a real dissolved-load reading at the reset itself, when the clock sits on $t=0$.

The overview recovered $D(0)=0$. That is a genuine real number of kilograms, not a refusal. A square root is defined for every nonnegative real, and zero is nonnegative: $0^{2}=0$, so the root of the reset is itself zero. Multiplying by the coefficient $6$ does not create a division. The product is $0$ kilograms of dissolved load.

**1.** A rushed solver who treated every power the way a reciprocal is treated would exclude $t=0$ from $D$ as well as from $R$. That confuses the sign of the exponent with the parity of the root. Load has exponent $+\\frac{1}{2}$, so the variable sits in a numerator. There is no $t$ in a denominator, and there is no division by zero.

**2.** The same even-root gate is what later refuses $t=-4$ in letter C. Accepting zero and refusing negatives is one story, not two. The reset is the included endpoint of the load domain $t\\ge 0$.

**3.** A tiny positive time still gives a tiny positive load, which is extra arithmetic this letter can use as a sanity check. At a quarter of an hour,

$$D\\bigl(\\tfrac{1}{4}\\bigr)=6\\cdot\\tfrac{1}{2}=3$$

so the reading approaches $0$ from above as the clock approaches the reset, and it lands on $0$ rather than jumping to undefined.

If the stem had given $D(t)=6t^{-\\frac{1}{2}}$, the reset would have been undefined and this claim would have been false. The opposite verdict would also hold if the gauge had been specified only for $t>0$. Neither of those is the stem: load is an even root with a nonnegative exponent, and zero is legal.

The recovered load at the reset is $0$ kilograms, a real value, so the statement is True.`,

    `**B.** → False

Turbidity is the other channel, $R(t)=50t^{-2}$ units, and the claim asks whether that instrument still returns a value at the same reset $t=0$ that load accepted.

The overview already recorded the refusal: $R(0)$ is undefined. A negative exponent is a reciprocal, so turbidity is $\\frac{50}{t^{2}}$. At the reset the denominator is $0^{2}=0$, and division by zero is not a real reading.

This is not a small-number problem. It is not that the turbidity is huge, or that it is zero, or that it is hard to measure. There is no real number that the formula returns, because the formula asks for $50$ divided by zero.

**1.** The even-root story from letter A does not save this channel. Load put $t$ in a numerator. Turbidity puts $t$ in a denominator, twice. Parity of a root never licensed a zero denominator.

**2.** A rushed solver who wrote $R(0)=50\\cdot 0$ as if the exponent were positive would invent a reading of $0$ units. That is the wrong sign on the exponent. Another rushed solver who copied $D(0)=0$ onto $R$ is treating the two channels as if they shared a domain. They do not: load lives on $t\\ge 0$, turbidity on $t>0$.

**3.** Just after the reset the reading is large, which is extra arithmetic that shows the blow-up rather than a defined value at zero. At $t=\\frac{1}{2}$,

$$R\\bigl(\\tfrac{1}{2}\\bigr)=50\\cdot 4=200$$

and at $t=\\frac{1}{5}$,

$$R\\bigl(\\tfrac{1}{5}\\bigr)=50\\cdot 25=1250$$

so as $t\\to 0^{+}$ the turbidity grows without bound. Growing without bound is still not a value at $t=0$. The limit is infinite; the function value is missing.

**4.** The opposite verdict would need a nonnegative exponent on $R$, or a rule that replaced the zero denominator by some other reading. The stem's $t^{-2}$ does neither.

There is no turbidity reading at the reset, so the statement is False.`,

    `**C.** → False

The clock is now asked to run backwards. Load is still $D(t)=6t^{\\frac{1}{2}}$, and the claim is that this even-root rule returns a real number at $t=-4$ hours, four hours before the reset.

The overview recorded that $\\sqrt{-4}$ is not real. No real number squares to a negative, so $D(-4)$ is not a real kilogram reading.

This is a domain question about the parity of the root, not about the size of $4$ and not about the coefficient $6$. Replacing $4$ by $400$ would not help. Replacing $6$ by $600$ would not help. The obstruction is the sign of the input under an even root.

**1.** Letter A already used the same gate at zero and found it open. The gate that includes $0$ still excludes every negative. The load domain is $t\\ge 0$, not all real $t$.

**2.** A rushed solver who remembered that cube roots accept negatives would apply that licence to a square root. The exponent here is $\\frac{1}{2}$, not $\\frac{1}{3}$. Another rushed solver who computed $6\\cdot\\sqrt{4}=12$ and then attached a minus sign by hand would report $-12$ kilograms. That is not how even roots work: the input is negative, so the root is not real, rather than real and then negated.

**3.** Turbidity, by contrast, does return a value at $t=-4$, because $(-4)^{2}=16$ and $R(-4)=\\frac{50}{16}=3.125$. That extra evaluation is legal for $R$ and illegal for $D$. The claim is about load, not turbidity. Copying a turbidity licence onto the load channel is the mix-up.

If the stem had used $D(t)=6t^{\\frac{1}{3}}$, then $D(-4)$ would have been real and this claim could have been true. With an even root, clock times before the reset sit outside the load domain.

**4.** Extra arithmetic that stays on the legal side of the gate: $D(4)=12$ is a real twelve kilograms, while $D(-4)$ is not real. The $4$ and the $-4$ are not interchangeable under an even root. A solver who cancelled the minus "because a square will eat it" is thinking of $t^{2}$, not of $t^{\\frac{1}{2}}$.

Load at $t=-4$ is not real, so the statement is False.`,

    `**D.** → True

This is a level of the turbidity rule at a legal positive time, $t=4$ hours, not a domain question.

The overview already evaluated $R(4)=3.125$ from $\\frac{50}{16}$. This letter only asks whether that table entry is the number in the claim.

Turbidity is a reciprocal square. Four hours squared is $16$, and $50$ divided by $16$ is exactly $3.125$ units, not a rounded $3$.

**1.** A rushed solver who computed $50\\cdot 4^{-1}=12.5$ used exponent $-1$ instead of $-2$. A solver who computed $50\\cdot 16=800$ dropped the reciprocal.

**2.** Four hours is one of the positive times already listed in Part 3. The $t=4$ turbidity entry is $3.125$ units.

The recovered turbidity at $4$ hours is $3.125$, so the statement is True.`,

    `**E.** → True

This is a level of the load rule at $t=9$ hours, a legal time well inside $t\\ge 0$.

The overview already evaluated $D(9)=18$ from $6\\cdot 3$. This letter only asks whether that table entry is the number in the claim.

Nine is a perfect square, so the even root is the integer $3$, and the coefficient $6$ turns that $3$ into $18$ kilograms.

**1.** A rushed solver who computed $6\\cdot 9=54$ skipped the root. A solver who computed $\\sqrt{9}=3$ and then stopped, forgetting the $6$, would report $3$ kilograms.

**2.** Nine hours is one of the three load times already listed in Part 3. The $t=9$ load entry is $18$ kilograms.

The recovered load at $9$ hours is $18$, so the statement is True.`,
  ],

  "math-8-3": [
    `**A.** → True

The beacon is the negative-power channel $S(x)=80x^{-3}$ millivolts, and the claim is about the far end of the scale: what happens to received strength as distance $x$ grows without bound.

The overview already recorded that $S(x)\\to 0$ as $x$ grows. A negative exponent puts distance in a denominator, $S(x)=\\frac{80}{x^{3}}$. As $x\\to\\infty$ that denominator grows without bound while the numerator stays $80$, so the quotient is forced toward $0$. The signal fades at infinity.

This is not a claim that the beacon is ever exactly silent at a finite mast distance. It is a claim about the long-run reading.

**1.** A rushed solver who saw the $80$ and treated it as a floor would think the signal settles at $80$ millivolts. The $80$ is a coefficient, not a ceiling and not a floor. It scales every reading and then cancels in any ratio of two distances.

**2.** Extra arithmetic at a far station makes the fade concrete. At $20$ metres the overview has $S(20)=0.01$. At $40$ metres, which is a new doubling,

$$S(40)=\\frac{80}{64000}=0.00125$$

so another doubling of distance cuts the already tiny reading by another factor of $8$, because $2^{3}=8$. The fade is cubic, not linear.

**3.** The opposite verdict would need a nonnegative exponent. A beacon $S(x)=80x^{3}$ would explode at infinity, and $S(x)=80$ would sit at a constant. The stem's exponent is $-3$.

**4.** A second mix-up is to read $S(x)\\to 0$ as $S(x)=0$ at some large but finite mast distance. The reciprocal cube is never exactly zero at a finite $x$. At $x=80$ metres,

$$S(80)=\\frac{80}{512000}=0.00015625$$

which is already a fraction of a millivolt and still not a dead beacon. Fading at infinity is an approach, not an arrival.

The recovered long-run signal is $0$, so the statement is True.`,

    `**B.** → True

The same reciprocal that sent the beacon to zero far away is now asked about the other end: a listener standing arbitrarily close to the mast, $x\\to 0^{+}$.

The overview already showed the blow-up with $S(0.1)=80000$. Near the mast a small positive $x$ makes $x^{3}$ arbitrarily small, so $\\frac{80}{x^{3}}$ becomes arbitrarily large. There is no finite millivolt cap as the distance collapses.

This is unbounded growth of a reciprocal cube, not a vertical reading at $x=0$ itself. The domain is $x>0$, so the mast point is excluded; the claim is about the approach from the positive side.

**1.** A rushed solver who remembered that $S$ fades at infinity might think it also fades at zero, as if both ends were the same. The two ends of a negative-power rule are opposites: zero at infinity, unbounded at the origin.

**2.** Extra arithmetic closer in than the overview's $0.1$ m station: at $x=0.05$,

$$S(0.05)=\\frac{80}{0.000125}=640000$$

which is eight times $S(0.1)$, as a halved distance must be, because $\\bigl(\\frac{1}{2}\\bigr)^{-3}=8$. The blow-up has no ceiling.

**3.** Letter A used the same formula at the far end. The recovered object here is not a new coefficient; it is the same reciprocal, read at the opposite extreme.

If the exponent had been positive, strength would have gone to $0$ at the mast and grown in the distance. The stem's $-3$ forces the opposite.

**4.** Letter D will ask for $S(2)=10$, a finite reading at a legal distance. That finite reading is compatible with an unbounded approach as $x\\to 0^{+}$: two metres is not the mast. A rushed solver who treated "unbounded near the mast" as "undefined at two metres" has confused an extreme with a level.

The recovered near-mast signal grows without bound, so the statement is True.`,

    `**C.** → False

The packet reader is the other instrument, $T(x)=2x^{\\frac{1}{2}}$ thousand packets over $x>0$ minutes, and the claim treats the coefficient $2$ as a long-run ceiling: as listening time grows, $T$ is supposed to approach $2$.

The overview already recorded that there is no ceiling for $T$. A positive exponent keeps the variable in a numerator. As $x\\to\\infty$ the square root grows without bound, slowly, but without any cap. The $2$ multiplies that growing root; it does not sit above it as a lid.

**1.** Confusing a coefficient with a ceiling is the whole trap. In $T(x)=2\\sqrt{x}$, the $2$ is the packets per square-root minute, not a maximum count. In $S(x)=\\frac{80}{x^{3}}$, the $80$ is likewise a coefficient, not a floor. Neither constant is an asymptote of that kind.

**2.** Extra arithmetic at a long listening time, past the overview's $T(10000)=200$: after $40000$ minutes,

$$T(40000)=2\\cdot 200=400$$

which is already two hundred times the claimed ceiling of $2$. The count is still climbing.

**3.** A rushed solver who mixed the two channels would copy $S\\to 0$ onto $T$, or copy a horizontal asymptote from a negative exponent onto a positive one. Packet count has exponent $+\\frac{1}{2}$, so it climbs.

The opposite verdict would need a negative exponent on $T$, or an explicit cap in the stem. The stem has neither.

**4.** Extra arithmetic at the other end of $T$ is letter E: $T\\to 0$ as $x\\to 0^{+}$. A coefficient-as-ceiling reader might also think $T$ cannot fall below $2$ at the start. After one minute, $T(1)=2$, and after a quarter of a minute $T(0.25)=1$, already under the claimed lid. The $2$ is a reading at $x=1$, not a bound.

The recovered packet count has no long-run cap at $2$, so the statement is False.`,

    `**D.** → True

This is a level of the beacon at two metres, not an end-of-scale question.

The overview already evaluated $S(2)=10$ from $\\frac{80}{8}$. This letter only asks whether that table entry is the number in the claim.

Two metres cubed is $8$, and $80$ millivolts spread across that $8$ is $10$ millivolts.

**1.** A rushed solver who computed $80\\cdot 2^{-1}=40$ used exponent $-1$ instead of $-3$. A solver who cubed $80$ instead of $2$ would land on a huge unrelated figure.

**2.** Two metres is one of the three distances already listed in Part 3. The $x=2$ signal entry is $10$ millivolts.

**3.** A solver who used $S(2)=80\\cdot 2=160$ skipped the exponent entirely. The recovered object is the Part 3 level $10$, not a linear multiple of the coefficient.

The recovered strength at $2$ metres is $10$, so the statement is True.`,

    `**E.** → True

The packet reader is back, now at the start of the listening window rather than at infinity. The claim is that $T(x)\\to 0$ as $x\\to 0^{+}$.

The overview already recorded short-time counts $T(0.01)=0.2$ and $T(0.0001)=0.02$. A positive exponent keeps the count in a numerator. The square root of a shrinking positive input shrinks as well, so $T(x)=2\\sqrt{x}\\to 0$ as $x\\to 0^{+}$.

Signal $S$ explodes at that same end; the count does the opposite. The two instruments share the variable $x>0$ and nothing else about the extreme.

**1.** A rushed solver who copied the beacon's blow-up onto the reader would expect $T$ to explode at $0^{+}$. That is the negative-exponent story, and $T$ has a positive exponent.

**2.** Extra arithmetic even closer in: at $x=10^{-6}$,

$$T(10^{-6})=2\\cdot 10^{-3}=0.002$$

which continues the march toward $0$. There is no positive floor on the count at the start of listening.

The recovered short-time count tends to $0$, so the statement is True.`,
  ],

  "math-8-4": [
    `**A.** → True

Overhead on this order book is the reciprocal $U(q)=600q^{-1}$ euros per unit, and the claim is a shape question: whether that spread is strictly decreasing for every order size $q>0$.

The overview already recorded that $U$ falls and stays positive. On $q>0$ the numerator is the fixed $600$ euros of overhead while the denominator is the order size. Every larger order strictly raises that denominator, so every larger order strictly lowers the spread. There is no plateau and no later rise.

**1.** A rushed solver who saw $U(8)=75$ below $U(2)=300$ and stopped there has only checked two points. Strict decrease is a statement about every pair, not about a table of three. The reciprocal form $\\frac{600}{q}$ gives the whole comparison at once: if $q_{2}>q_{1}>0$, then $\\frac{600}{q_{2}}<\\frac{600}{q_{1}}$.

**2.** Extra arithmetic on a pair the overview did not list: a jump from $q=5$ to $q=6$ gives

$$U(5)=120, \\qquad U(6)=100$$

so even a one-unit increase cuts the spread. The same cut happens at a large order,

$$U(50)=12, \\qquad U(51)=\\frac{600}{51}\\approx 11.76$$

which is still a strict drop, just a smaller one.

**3.** Finishing hours $V$ move the other way, which is letter C. Mixing the two rules would make someone think overhead rises with the order because "bigger jobs cost more." Bigger jobs cost more in total finishing time. They cost less per unit in spread overhead.

The opposite verdict would need a positive exponent on $U$, or a coefficient that changed sign. The stem's $q^{-1}$ with a positive $600$ is strictly decreasing on $q>0$.

The recovered overhead rule falls at every larger order, so the statement is True.`,

    `**B.** → False

The same overhead rule is now asked about sign rather than direction: whether $U(q)$ is negative for some order size $q>0$.

The overview already recorded $U>0$ on the whole domain. The numerator $600$ is positive and the order size $q$ is positive, so the quotient $\\frac{600}{q}$ is positive for every legal order. Falling toward zero is not the same as crossing zero.

There is no order size at which the workshop is paid to take the job, and there is no order size at which the spread is exactly zero either. Setting $\\frac{600}{q}=0$ would require $600=0$.

**1.** A rushed solver who watched $U(2)=300$, $U(8)=75$, $U(30)=20$ and extrapolated through zero would invent a crossing that the reciprocal never makes. Another rushed solver who attached a minus to the exponent, writing $-600/q$, would have a negative spread, but that is not the stem.

**2.** Extra arithmetic at a huge order still stays positive:

$$U(6000)=0.1, \\qquad U(600000)=0.001$$

both positive, both smaller. The spread can be made arbitrarily small and still never negative.

**3.** Letter A used direction. This letter uses sign. A strictly decreasing positive function can do both at once: fall, and stay above zero. Those are different claims about the same curve.

A negative coefficient would have been needed for a negative spread. The stem's $600$ is positive.

The recovered overhead is positive at every $q>0$, so the statement is False.`,

    `**C.** → True

Finishing hours are the other rule, $V(q)=3q^{\\frac{2}{3}}$ hours, and the claim is that $V$ is strictly increasing for $q>0$.

The overview already recorded that $V$ rises. The exponent $\\frac{2}{3}$ is positive, so a larger order raises a larger power, and the coefficient $3$ is positive, so it preserves that order. If $q_{2}>q_{1}>0$, then $q_{2}^{\\frac{2}{3}}>q_{1}^{\\frac{2}{3}}$ and therefore $V(q_{2})>V(q_{1})$.

This is the sign of the exponent, not a fact that has to be checked at $q=8$ and $q=27$ only.

**1.** A rushed solver who saw the fraction $\\frac{2}{3}<1$ might think "less than one means decreasing." An exponent between $0$ and $1$ means increasing but concave: more hours, just with each extra unit adding a little less labour than the one before it. Decrease requires a negative exponent, which is $U$'s story, not $V$'s.

**2.** Extra arithmetic on a pair past the overview's table: from $q=1$ to $q=8$ the finishing hours go

$$V(1)=3, \\qquad V(8)=12$$

a fourfold rise in hours for an eightfold rise in order, which is exactly $8^{\\frac{2}{3}}=4$. From $q=8$ to $q=64$,

$$V(64)=48$$

another fourfold rise in hours for another eightfold rise in order. The curve keeps climbing.

**3.** Overhead $U$ falls on the same domain. The two rules move in opposite directions because their exponents have opposite signs. Copying $U$'s decrease onto $V$ is the mix-up.

The recovered finishing-hours rule rises at every larger order, so the statement is True.`,

    `**D.** → False

This is a level of overhead at eight units, and the claim writes $80$ euros per unit.

The overview already evaluated $U(8)=75$ from $\\frac{600}{8}$. The claim's $80$ is $5$ euros high.

Nothing in $\\frac{600}{q}$ produces $80$ at $q=8$. That figure is $600/7.5$, as if the order size had been taken to be $7.5$, or it is a round number sitting next to $75$ without the division having been done.

**1.** A rushed solver who computed $600/8=75$ and then "rounded up" to $80$ is not reading the rule. Another who computed $8\\cdot 10=80$ invented a euros-per-unit of $10$ and multiplied by the order size, which is a total, not a spread.

**2.** Compared with letter E, which asks for finishing hours at the same $q=8$, this letter is the overhead column of that shared order size. The false figure is on the reciprocal, not on the fractional power.

The opposite verdict would need $U(8)=80$, which would have required a numerator of $640$ rather than $600$. The stem's overhead is $600$.

The recovered overhead at $8$ units is $75$, not $80$, so the statement is False.`,

    `**E.** → True

This is a level of finishing hours at eight units, not a shape question.

The overview already evaluated $V(8)=12$ from $3\\cdot 4$, after taking $8^{\\frac{2}{3}}=4$. This letter only asks whether that table entry is the number in the claim.

Eight is a perfect cube, so the cube root is $2$, and squaring that $2$ is the $\\frac{2}{3}$ power. Times the coefficient $3$ gives $12$ hours.

**1.** A rushed solver who computed $3\\cdot 8=24$ skipped the fractional power. A solver who took only the cube root and reported $3\\cdot 2=6$ dropped the remaining square.

**2.** Eight units is one of the three order sizes already listed in Part 3. The $q=8$ finishing entry is $12$ hours.

The recovered finishing time at $8$ units is $12$, so the statement is True.`,
  ],

  "math-8-5": [
    `**A.** → True

The bottling line is $Q(s)=As^{\\frac{1}{2}}$ crates per hour, and one audited shift, $25$ staff giving $40$ crates per hour, is what pins the unknown coefficient.

The overview already recovered $A=8$ from $5A=40$. This letter is that recovery, read against the claim's $8$.

Twenty-five staff are a perfect square, so the square root is $5$. The audited $40$ crates are then five copies of the coefficient, and $40/5=8$.

**1.** A rushed solver who divided $40$ by $25$ would report $A=1.6$, treating the rule as linear. A solver who squared $25$ instead of taking the root would be lost in a huge denominator. The exponent $\\frac{1}{2}$ is a root, not a square and not a missing exponent.

**2.** Extra arithmetic that is not the overview's table: the same $A=8$ must also reproduce the audited shift,

$$Q(25)=8\\cdot 5=40$$

which is a check on the recovery, not a new unknown. If $A$ were $4$, that shift would have produced only $20$ crates per hour, and the claim would have been false.

**3.** Letters B and E are levels that use this $8$. Letter C is a scale factor that cancels it. Mixing those three jobs is the usual muddle: a coefficient is a level object, not a ratio object.

The opposite verdict would need a different audited pair. With $Q(25)=40$ and exponent $\\frac{1}{2}$, the coefficient cannot be anything but $8$.

The recovered coefficient is $A=8$, so the statement is True.`,

    `**B.** → True

This is a level of the recovered output rule at $100$ staff, not a recovery and not a scale question.

The overview already evaluated $Q(100)=80$. This letter only asks whether that table entry is the number in the claim.

One hundred staff are a perfect square, so the square root is $10$, and eight crates per square-root staff turn that $10$ into $80$ crates per hour.

**1.** A rushed solver who doubled the audited $40$ because $100$ is four times $25$ would report $80$ by accident through a linear scale, which happens to match here only because $\\sqrt{4}=2$ and $40\\cdot 2=80$. The right reason is the square-root scale, not a linear one. Letter C is where that distinction is the whole claim.

**2.** One hundred staff is one of the three shift sizes already listed in Part 3. The $s=100$ output entry is $80$ crates per hour.

The recovered output at $100$ staff is $80$, so the statement is True.`,

    `**C.** → True

This is a scale question, not a level. Quadrupling the staffing is the multiplier $k=4$, and the claim is that output doubles.

The overview already recorded the quadrupling factor $4^{\\frac{1}{2}}=2$ from identity $(2)$. The coefficient $A$ cancels in the ratio, which is why this letter does not care whether $A$ is $8$ or $80$:

$$\\frac{Q(4s)}{Q(s)}=4^{\\frac{1}{2}}=2$$

**1.** "Four times the staff, four times the crates" would be exponent $1$. "Four times the staff, sixteen times the crates" would be exponent $2$. A square-root technology turns a quadrupling of staff into a doubling of output, because four is a perfect square.

**2.** Extra arithmetic on the audited shift, which is this letter's own check rather than a re-display of $Q(100)$ as a fresh cube: $25$ staff quadrupled are $100$ staff, and the recovered levels $40$ and $80$ sit in the ratio $2$. That match is the scale identity at a concrete pair, not a new coefficient.

**3.** A rushed solver who used $k^{2}$ instead of $k^{\\frac{1}{2}}$ would claim a sixteenfold jump. A solver who thought the coefficient had to be known before a scale question could be answered has mixed letter A with letter C.

Density of staffing never enters a scale question. Whether $A$ were $8$ or $50$, quadrupling staff would still double output.

Quadrupling staff multiplies output by $2$, so the statement is True.`,

    `**D.** → False

The claim is that doubling the coefficient $A$ would double the staffing ratio $\\frac{Q(4s)}{Q(s)}$. That ratio is a scale factor, not a level.

The overview already recorded a counterfactual coefficient of $16$ instead of $8$: every level doubles, and the ratio stays $2$. A doubled coefficient appears once above and once below in

$$\\frac{Q(4s)}{Q(s)}=\\frac{A(4s)^{\\frac{1}{2}}}{A s^{\\frac{1}{2}}}=4^{\\frac{1}{2}}=2$$

so it cancels. Doubling $A$ doubles every crate count. It does not touch this ratio.

**1.** Extra arithmetic under the counterfactual $A=16$: at four staff the level would be $32$ instead of $16$, and at sixteen staff it would be $64$ instead of $32$, but

$$\\frac{32}{16}=2, \\qquad \\frac{64}{32}=2$$

the same quadrupling factor as before. The extra arithmetic is the pair of doubled levels, which this letter needs; the factor $2$ is not new.

**2.** A rushed solver who saw "double $A$" and "double the ratio" as the same sentence is treating a multiplier of the whole function as a multiplier of a quotient of two values of that function. Those are different operations.

**3.** Letter C used the same ratio and found it equal to $2$. This letter asks whether that $2$ would move if $A$ moved. It would not.

The opposite verdict would need a ratio in which $A$ appeared only once, for example $\\frac{Q(4s)}{s}$. That is not the scale factor in the claim.

Doubling $A$ leaves the quadrupling ratio at $2$, so the statement is False.`,

    `**E.** → False

This is a level at four staff, and the claim writes $20$ crates per hour.

The overview already evaluated $Q(4)=16$. The claim's $20$ is $4$ crates high.

Four staff are a perfect square, so the square root is $2$, and $8\\cdot 2=16$, not $20$. Nothing in $8s^{\\frac{1}{2}}$ produces $20$ at $s=4$. That figure is closer to $8\\cdot 2.5$, or to half of the audited $40$, as if four staff were half of twenty-five.

**1.** A rushed solver who scaled the audited shift linearly, $40\\cdot\\frac{4}{25}=6.4$, would miss $16$ another way. A solver who used $A=5$ from a mis-divided $40/8$ could manufacture $20$ as $5\\cdot\\sqrt{16}$ at the wrong input. The false $20$ is not a nearby rounding of $16$; it is a different product.

**2.** Four staff is one of the three shift sizes already listed in Part 3. The $s=4$ output entry is $16$ crates per hour, and the claim does not match it.

The recovered output at $4$ staff is $16$, not $20$, so the statement is False.`,
  ],

  "math-8-6": [
    `**A.** → False

Both maintenance indices are evaluated at a two-machine line, and the claim writes the pair $8$ and $6$.

The overview already recovered $F(2)=8$ and $G(2)=8$. They meet at $8$ and $8$, not at $8$ and $6$. The figure $6$ is not a nearby rounding of $8$. It is a different product, as if someone had computed $2\\cdot 3$ or had taken $2^{3}-2$ instead of $2^{3}$.

This letter is a false level at the crossing, not a comparison past the crossing. The recovered object is the pair of values at $n=2$, where the factored difference $n^{2}(n-2)$ is zero.

**1.** A rushed solver who computed $G(2)=2\\cdot 3=6$ mixed a coefficient of $2$ onto the cubic. The cubic is $n^{3}$ with coefficient $1$. Another who computed $F(2)=2^{2}+2^{2}=8$ and $G(2)=2^{2}+2=6$ invented an additive recipe the stem does not have.

**2.** Extra arithmetic just beside the crossing, which this letter can use without rebuilding the whole table: at $n=1$,

$$F(1)=2, \\qquad G(1)=1$$

so the quadratic already leads by $1$ on a one-machine line, and at $n=2$ that lead has closed to a tie, not to an $8$-against-$6$ gap.

**3.** Letter E will ask for the three-machine pair. Mixing $G(3)=27$ down to $6$ by a wrong cube is a different mistake from the $6$ here. Here the $6$ is attached to the crossing itself.

The recovered pair at two machines is $8$ and $8$, not $8$ and $6$, so the statement is False.`,

    `**B.** → True

This is a comparison past the crossing, not a level. The claim is that the cubic index $G$ leads the quadratic index $F$ for every $n>2$.

The overview already factored $G(n)-F(n)=n^{2}(n-2)$ and recorded that the cubic leads for $n>2$. For $n>0$ the square $n^{2}$ is positive, so the sign of $G-F$ is exactly the sign of $n-2$. Whenever $n>2$ that factor is positive and $G>F$.

A larger coefficient can only lead on small inputs. Past the crossing the larger exponent takes over, and it stays ahead.

**1.** A rushed solver who checked only $n=3$ and $n=4$ has two points, not the whole ray $n>2$. The factoring is what turns those two points into every larger line size. Another who compared coefficients $2$ and $1$ and declared $F$ always larger has ignored exponents.

**2.** Extra arithmetic further out than the overview's $n=4$ pair: at $n=5$,

$$F(5)=50, \\qquad G(5)=125$$

so the cubic already leads by $75$, and at $n=10$,

$$F(10)=200, \\qquad G(10)=1000$$

a lead of $800$. The gap widens because the leftover factor $n-2$ keeps growing.

**3.** Letter C is the other side of the same factor, $0<n<2$. Letter D is the ratio, which grows rather than settling. This letter is only the sign of $G-F$ on $n>2$.

The opposite verdict would need a second crossing, which a leftover linear factor $n-2$ cannot supply on $n>2$.

The recovered difference is positive past two machines, so the statement is True.`,

    `**C.** → True

The same factored difference is now read below the crossing: the claim is that $F>G$ for every $n$ with $0<n<2$.

The overview already recorded that the quadratic leads on that interval. On $0<n<2$ the factor $n-2$ is negative, while $n^{2}$ is still positive, so $G-F<0$ and therefore $F>G$.

A larger coefficient leads on small inputs. Two machines is where that licence expires.

**1.** A rushed solver who started the comparison at $n=2$ and looked only to the right would miss this side. Another who thought "cubic is always bigger" has forgotten that $2n^{2}$ beats $n^{3}$ when $n$ is a fraction.

**2.** Extra arithmetic on a half-machine line, which is a new input:

$$F\\bigl(\\tfrac{1}{2}\\bigr)=2\\cdot\\tfrac{1}{4}=\\tfrac{1}{2}, \\qquad G\\bigl(\\tfrac{1}{2}\\bigr)=\\tfrac{1}{8}$$

so the quadratic leads by $\\frac{3}{8}$ at $n=\\frac{1}{2}$. At $n=1$ the overview already had a lead of $1$. Both sit below the crossing, and both have $F>G$.

**3.** At $n=2$ the lead is zero, which is why the claim is a strict inequality on $0<n<2$ rather than on $0<n\\le 2$. The statement's open interval is the correct one.

The recovered difference is negative below two machines, so the statement is True.`,

    `**D.** → False

The claim is that the ratio $\\frac{G(n)}{F(n)}$ tends to $1$ as the line grows without bound, as if the two indices became interchangeable in the long run.

The overview already simplified the ratio to $\\frac{n}{2}$ and recorded that this leftover power grows without bound. As $n$ grows, $\\frac{n}{2}$ grows rather than settling at $1$. A ratio that tends to $1$ would mean the two powers were the same degree with the same leading coefficient. Here the degrees are $3$ and $2$.

**1.** Extra arithmetic at large line sizes, past the overview's $n=200$ ratio of $100$: at $n=500$,

$$\\frac{G(500)}{F(500)}=\\frac{500}{2}=250$$

and at $n=2000$,

$$\\frac{G(2000)}{F(2000)}=1000$$

so the cubic is a thousand times the quadratic on a $2000$-machine line, not one times it.

**2.** A rushed solver who saw both indices going to infinity and concluded that their ratio goes to $1$ has confused "both unbounded" with "asymptotically equal." Two unbounded sequences can diverge from each other. Another who cancelled $n^{2}$ and forgot the leftover $n/2$ would report a constant $1$, which is exactly the false limit in the claim.

**3.** Letter B said the cubic leads. This letter says how the lead behaves as a ratio. A growing ratio is a stronger statement than a positive difference: the cubic does not merely stay ahead, it laps the quadratic over and over.

The opposite verdict would need equal exponents. With exponents $3$ and $2$, the ratio cannot tend to $1$.

The recovered ratio $\\frac{n}{2}$ grows without bound, so the statement is False.`,

    `**E.** → False

This is a level at three machines, and the claim writes the pair $18$ and $24$.

The overview already evaluated $F(3)=18$ and $G(3)=27$. The quadratic entry matches; the cubic entry does not. The claim wants $24$ where the cube is $27$.

The figure $24$ is $3$ light, and that $3$ is not a rounding. It is a different product: $8\\cdot 3$, as if someone had multiplied the crossing value $8$ by $3$, or $2\\cdot 12$, mixing a coefficient of $2$ onto a wrong cube.

**1.** A rushed solver who computed $3^{3}=27$ and then subtracted the coefficient $3$ would land on $24$. Another who used $2\\cdot 3^{2}=18$ correctly for $F$ and then guessed $G$ as $18+6=24$ invented an additive gap.

**2.** Three machines is one of the line sizes already listed in Part 3. The $n=3$ pair is $18$ and $27$, and the claim's $24$ is the wrong cubic.

The recovered cubic at three machines is $27$, not $24$, so the statement is False.`,
  ],

  "math-8-7": [
    `**A.** → True

The first transform is the even root $L(x)=x^{\\frac{1}{2}}$, and the claim is that a blank reading $x=0$ is accepted and filed as $0$.

The overview already evaluated $L(0)=0$. A square root accepts zero because $0^{2}=0$. The even-root gate stays open at a blank reading. This is a domain-and-level question at the included endpoint $x=0$, not a claim about negative readings.

**1.** A rushed solver who treated every root as a reciprocal would exclude zero from $L$ as well as from $N$. That is letter D's story, not letter A's. $L$ has a positive exponent, so the variable sits in a numerator.

**2.** Extra arithmetic just above the blank reading: $L(0.01)=0.1$ and $L(0.0001)=0.01$, so the filed value approaches $0$ from above and lands on $0$ rather than jumping to undefined.

The recovered even-root value at a blank reading is $0$, so the statement is True.`,

    `**B.** → False

The same even root is now pointed at a negative reading, $x=-4$. The claim is that $L(-4)$ has a real value.

The overview already recorded that $\\sqrt{-4}$ is not real. No real $y$ satisfies $y^{2}=-4$, so $L(-4)$ is not a real filed value.

Parity of the root, not the size of $4$, decides this letter. Replacing $4$ by $400$ would not help. The obstruction is the sign of the input under an even root.

**1.** A rushed solver who remembered that cube roots accept negatives would apply that licence here. The exponent is $\\frac{1}{2}$, not $\\frac{1}{3}$. Letter C is the odd-root licence, and it is a different transform.

**2.** Extra arithmetic that is legal on the odd-root channel and illegal here: $M(-4)=\\sqrt[3]{-4}$ is real, while $L(-4)$ is not. Copying $M$'s domain onto $L$ is the mix-up. Another rushed solver who computed $\\sqrt{4}=2$ and then attached a minus by hand would report $-2$. That is not an even root of a negative; it is a negated even root of a positive.

**3.** The even-root domain is $x\\ge 0$. Zero was included in letter A. Every negative is still excluded. Those two facts are one gate, not two.

If the stem had used $L(x)=x^{\\frac{1}{3}}$, this claim would have been true. With an even root, $x=-4$ sits outside the domain.

The recovered even-root value at $-4$ is not real, so the statement is False.`,

    `**C.** → True

The second transform is the odd root $M(x)=x^{\\frac{1}{3}}$, and the claim is the concrete value $M(-8)=-2$.

The overview already evaluated $M(-8)=-2$. An odd root accepts every real reading, and $(-2)^{3}=-8$ confirms the inverse: cubing $-2$ returns the input $-8$, so the cube root of $-8$ is $-2$.

This is both a domain statement and a level. The negative reading is legal, and the filed value is the negative number in the claim, not its absolute value $2$.

**1.** A rushed solver who took the even-root habit from $L$ would refuse $x=-8$ and call the claim false. That is the wrong transform. Another who filed $+2$ because "roots are positive" has dropped the sign that an odd root is required to keep.

**2.** Extra arithmetic on the matching positive reading, which is this letter's own check:

$$M(8)=2$$

so the odd root is an odd function: $M(-8)=-M(8)$. That pairing is what a sign-dropping solver misses.

**3.** Letter B refused $-4$ on $L$. Letter C accepts $-8$ on $M$. The difference is the parity of the root, not the size of the reading.

The recovered cube root of $-8$ is $-2$, so the statement is True.`,

    `**D.** → False

The third transform is the negative even root $N(x)=x^{-\\frac{1}{2}}$, and the claim is that $N(0)$ is defined.

The overview already recorded that $\\frac{1}{\\sqrt{0}}$ is undefined. A negative exponent puts the root in a denominator, $N(x)=\\frac{1}{\\sqrt{x}}$. At $x=0$ that denominator is zero, so the transform has no real value.

Zero is legal for $L$ and illegal for $N$. The extra obstruction is the sign of the exponent, stacked on top of the even-root gate.

**1.** A rushed solver who copied $L(0)=0$ onto $N$ is ignoring the minus in the exponent. Another who wrote $N(0)=\\infty$ as if infinity were a filed value is confusing a blow-up with a defined output. The calibration sheet does not file infinity.

**2.** Extra arithmetic just after the blank reading shows the blow-up rather than a value at zero:

$$N(0.01)=10, \\qquad N(0.0001)=100$$

so as $x\\to 0^{+}$ the reciprocal square root grows without bound. Growing without bound is still not a value at $x=0$.

**3.** The domain of $N$ is $x>0$, stricter than $L$'s $x\\ge 0$. Letter A used the weaker gate. This letter uses the stronger one.

The recovered reciprocal-root value at $0$ is undefined, so the statement is False.`,

    `**E.** → False

This is a level of $N$ at a legal reading $x=4$, and the claim writes $N(4)=2$.

The overview already evaluated $N(4)=\\frac{1}{2}$. The claim is $2$, which is $\\sqrt{4}$ with the minus in the exponent dropped.

At a legal reading the third transform is a reciprocal: $4^{-\\frac{1}{2}}=\\frac{1}{2}$, not $2$. The figure $2$ is $L(4)$, the first transform at the same input.

**1.** A rushed solver who computed $\\sqrt{4}=2$ and stopped has evaluated $L$ instead of $N$. Another who computed $4^{-2}=\\frac{1}{16}$ used the wrong exponent. The minus in $-\\frac{1}{2}$ is a reciprocal of a square root, not a square of a reciprocal.

**2.** Extra arithmetic at the matching reciprocal pair: $N(0.25)=2$, which is the input that really does file as $2$. The claim pointed $N$ at $4$ rather than at $\\frac{1}{4}$. Mixing those two readings is how $2$ appears.

**3.** Four is one of the legal readings already listed in Part 3. The $x=4$ entry for $N$ is $\\frac{1}{2}$, and the claim does not match it.

The recovered reciprocal root at $4$ is $\\frac{1}{2}$, not $2$, so the statement is False.`,
  ],

  "math-8-8": [
    `**A.** → True

This is a level of the pressure drop at four cartridges, not a shape question.

The overview already evaluated $P(4)=6$ from $\\frac{12}{2}$. This letter only asks whether that table entry is the number in the claim.

Four cartridges are a perfect square, so the square root is $2$, and $12$ kilopascals spread across that $2$ is $6$ kilopascals.

**1.** A rushed solver who computed $12\\cdot 4^{-1}=3$ used exponent $-1$ instead of $-\\frac{1}{2}$. A solver who computed $12/4=3$ skipped the root.

**2.** Four cartridges is one of the bank sizes already listed in Part 3. The $x=4$ drop entry is $6$ kilopascals.

The recovered drop at $4$ cartridges is $6$, so the statement is True.`,

    `**B.** → True

The filter bank obeys $P(x)=12x^{-\\frac{1}{2}}$ kilopascals, and the claim is that this drop is strictly decreasing on $x>0$.

The overview already recorded that $P$ falls. On $x>0$ the numerator stays at $12$ while $\\sqrt{x}$ grows with $x$, so the quotient $\\frac{12}{\\sqrt{x}}$ falls at every larger cartridge count. A negative exponent with a positive coefficient is strictly decreasing on the positive reals.

**1.** A rushed solver who checked only $P(4)=6$ below $P(1)=12$ has two points, not the whole ray. Strict decrease is the comparison $x_{2}>x_{1}>0\\Rightarrow P(x_{2})<P(x_{1})$, which the reciprocal square root gives at once.

**2.** Extra arithmetic on a one-cartridge increase past the table: from $x=16$ to $x=25$,

$$P(16)=3, \\qquad P(25)=\\frac{12}{5}=2.4$$

a strict drop. From $x=36$ to $x=49$,

$$P(36)=2, \\qquad P(49)=\\frac{12}{7}\\approx 1.71$$

still a strict drop, just a smaller one. Extra cartridges always help; they help less and less.

**3.** Letter C is about the long-run floor at zero. Letter D is about the blow-up at the origin. This letter is only the direction between those two ends.

The opposite verdict would need a nonnegative exponent. The stem's $-\\frac{1}{2}$ is strictly decreasing.

The recovered drop falls at every larger bank, so the statement is True.`,

    `**C.** → True

The claim has two halves, and both have to hold: as the bank grows, $P(x)\\to 0$, and yet $P$ never actually reaches $0$.

The overview already recorded both halves. As $x$ grows the denominator $\\sqrt{x}$ grows without bound while the numerator stays $12$, so $P(x)\\to 0$. Setting $\\frac{12}{\\sqrt{x}}=0$ would require $12=0$, which never happens. The drop approaches zero without landing on it.

**1.** A rushed solver who treated "tends to zero" as "equals zero for large $x$" would think a big enough bank has no pressure drop at all. The reciprocal square root gets arbitrarily small and stays positive. Another who thought a negative exponent meant the drop became negative would have crossed through zero on the way. Letter B already forbade a sign change: $P$ stays positive while it falls.

**2.** Extra arithmetic at a huge bank, past the overview's $P(14400)=0.1$: at $x=1440000$,

$$P(1440000)=\\frac{12}{1200}=0.01$$

which is $10$ pascals in disguise, still not zero. Another quadrupling of that bank would halve the drop again, by identity $(2)$ with $k=4$.

**3.** The two ends therefore disagree about zero. At infinity the drop is approaching $0$. At any finite cartridge count the drop is still a positive kilopascal reading. The claim needs both of those facts.

The recovered drop tends to $0$ and never equals $0$, so the statement is True.`,

    `**D.** → False

The claim is that as cartridges are pulled, $x\\to 0^{+}$, the drop $P(x)$ approaches a finite limit.

The overview already recorded the opposite end: $P(0.01)=120$ and $P(0.0001)=1200$, a blow-up with no finite cap. The denominator $\\sqrt{x}$ can be made arbitrarily small as $x\\to 0^{+}$, so $\\frac{12}{\\sqrt{x}}$ passes every bound. There is no finite millivolt-style ceiling here, and no finite kilopascal limit either.

A finite limit at the origin would need a nonnegative exponent. The stem's exponent is negative.

**1.** A rushed solver who copied letter C's $P\\to 0$ onto the origin would think both ends fade. The two ends of a negative-power rule are opposites. Another who wrote $P(0)=12$ as if the square root of zero could be cancelled against a missing $x$ invented a finite reading the formula does not give.

**2.** Extra arithmetic closer in than $0.0001$: at $x=10^{-8}$,

$$P(10^{-8})=\\frac{12}{10^{-4}}=120000$$

which is already a hundred times $P(0.0001)$. The drop has no finite limit as the last cartridge comes out.

**3.** Letter C used the far end. This letter uses the near end. Same formula, opposite extreme, opposite verdict.

The recovered drop is unbounded as $x\\to 0^{+}$, so the statement is False.`,

    `**E.** → True

This is a level at nine cartridges, not a shape question.

The overview already evaluated $P(9)=4$ from $\\frac{12}{3}$. This letter only asks whether that table entry is the number in the claim.

Nine cartridges are a perfect square, so the square root is $3$, and $12$ kilopascals spread across that $3$ is $4$ kilopascals.

**1.** A rushed solver who computed $12/9=1.333$ skipped the root. A solver who computed $12-9=3$ invented a linear leftover.

**2.** Nine cartridges is one of the bank sizes already listed in Part 3. The $x=9$ drop entry is $4$ kilopascals.

The recovered drop at $9$ cartridges is $4$, so the statement is True.`,
  ],

  "math-8-9": [
    `**A.** → False

The recorded job $y(3)=45$ litres is what pins the unknown coefficient in $y(r)=Ar^{2}$, and the claim writes $A=15$.

The overview already recovered $A=5$ from $9A=45$. The claim's $15$ is three times too large. That figure is $45$ divided by the radius $3$ instead of by the square $9$, as if the primer rule had been linear.

This letter is a false recovery, not a level at a new radius. The recovered object is the coefficient itself.

**1.** A rushed solver who computed $45/3=15$ treated the panel as a length rather than an area. Primer for a circular panel scales with $r^{2}$, which is the area story. Another who computed $3^{2}=9$ and then reported $A=45-9=36$ mixed subtraction into a multiplicative rule.

**2.** Extra arithmetic that checks the recovered $5$ against the recorded job, which is this letter's own confirmation rather than a new table:

$$y(3)=5\\cdot 9=45$$

If $A$ were $15$, the same panel would have needed $135$ litres, and the recorded $45$ would have been impossible.

**3.** Letters B and D are levels that use $A=5$. Letter C is a scale factor that cancels $A$. Mixing a linear recovery into those later letters is how $15$ keeps causing trouble.

The opposite verdict would need a recorded job of $135$ litres at radius $3$, or an exponent of $1$. The stem has $45$ litres and exponent $2$.

The recovered coefficient is $A=5$, not $15$, so the statement is False.`,

    `**B.** → True

This is a level of the recovered primer rule at radius $6$ metres, not a recovery.

The overview already evaluated $y(6)=180$. This letter only asks whether that table entry is the number in the claim.

Six metres squared is $36$, and five litres per square metre turn that $36$ into $180$ litres.

**1.** A rushed solver who doubled the recorded $45$ because $6$ is twice $3$ would report $90$, using a linear scale. The right scale is $2^{2}=4$, and $45\\cdot 4=180$. That is letter C's identity at a doubling, used here as a check.

**2.** Radius $6$ is one of the radii already listed in Part 3. The $r=6$ primer entry is $180$ litres.

The recovered primer at $6$ metres is $180$, so the statement is True.`,

    `**C.** → True

This is a scale question, not a level. Increasing the radius by $50\\%$ is the multiplier $k=1.5$, and the claim is that primer is multiplied by $2.25$.

The overview already recorded $1.5^{2}=2.25$ from identity $(2)$. The coefficient $A$ cancels in the ratio:

$$\\frac{y(1.5r)}{y(r)}=1.5^{2}=2.25$$

A fifty percent wider panel does not take fifty percent more primer. An exponent of $2$ turns a factor $1.5$ on the radius into a factor $2.25$ on the paint.

**1.** Extra arithmetic around the recorded job, which is this letter's own check: a $3$ m panel widened by $50\\%$ is a $4.5$ m panel, and

$$45\\times 2.25=101.25$$

so that wider panel needs $101.25$ litres. Directly, $y(4.5)=5\\cdot 20.25=101.25$, the same figure. The overview listed $y(1.5)=11.25$ at a different radius; this $101.25$ is new.

**2.** A rushed solver who added $50\\%$ to the primer, reporting a factor $1.5$, used exponent $1$. A solver who used $k^{3}$ would report $3.375$, the volume story rather than the area story.

**3.** Letter E is the matching scale question with $k=0.5$. This letter is the widening. Density of primer never enters a scale question.

A $50\\%$ wider panel multiplies primer by $2.25$, so the statement is True.`,

    `**D.** → True

This is a level at a unit radius, where every power is $1$, so the requirement equals the coefficient.

The overview already evaluated $y(1)=5$. This letter only asks whether that table entry is the number in the claim.

At $r=1$, $1^{2}=1$ and $y(1)=5\\cdot 1=5$ litres. That is a quick check on the printed $5$, not a new square.

**1.** A solver who still used the false $A=15$ from letter A would land on $15$ litres and miss the claim. The unit radius is where coefficient and requirement coincide, so a wrong $A$ is most obvious here.

**2.** Radius $1$ is the smallest of the radii in Part 3. It is also the one entry a linear-recovery reader is most likely to overwrite by reporting $15$.

The recovered primer at $1$ metre is $5$, so the statement is True.`,

    `**E.** → False

Halving the radius is the multiplier $k=0.5$, and the claim is that primer is halved as well.

The overview already recorded $0.5^{2}=0.25$ from identity $(2)$. Primer is multiplied by a quarter, not by a half. An exponent of $2$ turns a halved width into a quarter of the paint, because a disc of half the radius is a quarter of the area.

**1.** Extra arithmetic on the recorded job: a $3$ m panel halved is a $1.5$ m panel, and

$$45\\times 0.25=11.25$$

which is the overview's $y(1.5)$, read here as a scale check rather than as a fresh square. If primer had halved, that panel would have needed $22.5$ litres, which is twice the true requirement.

**2.** A rushed solver who used $k^{1}$ is telling a length story. A solver who used $k^{3}$ would report a factor $0.125$, a volume story. Circular primer is an area.

**3.** Letter C used $k=1.5$ and found $2.25$. This letter uses $k=0.5$ and finds $0.25$. The two scale claims are not symmetric in the naive sense "plus fifty percent, minus fifty percent," because $1.5^{2}$ and $0.5^{2}$ are not reciprocals of a linear guess.

Halving the radius quarters the primer, so the statement is False.`,
  ],

  "math-8-10": [
    `**A.** → True

This is a level of the braking index at $v=10$ km/h, not a scale question.

The overview already evaluated $E(10)=50$ from $0.5\\cdot 100$. This letter only asks whether that table entry is the number in the claim.

Ten squared is $100$, and half of that $100$ is $50$ points.

**1.** A rushed solver who computed $0.5\\cdot 10=5$ skipped the square. A solver who computed $10^{2}=100$ and stopped, forgetting the $0.5$, would report $100$ points.

**2.** Speed $10$ is one of the two standard test speeds already listed in Part 3. The $v=10$ index entry is $50$.

The recovered index at $10$ km/h is $50$, so the statement is True.`,

    `**B.** → True

Raising speed from $10$ to $20$ is the multiplier $k=2$, and the claim is that the index is multiplied by $4$. This is a scale question, not a pair of independent levels.

The overview already recorded the doubling factor $2^{2}=4$ from identity $(2)$. The coefficient $0.5$ cancels in the ratio:

$$\\frac{E(2v)}{E(v)}=2^{2}=4$$

Twice the speed is four times the energy index, because the exponent is $2$. A square law turns every doubling of the input into a quadrupling of the output.

**1.** Extra arithmetic on the two standard speeds, used here as a scale check: the recovered levels $E(10)=50$ and $E(20)=200$ sit in the ratio $4$. That match is the identity at a concrete pair, not a new coefficient. A linear reader who doubled $50$ would report $100$ and miss the claim.

**2.** "Twice the speed, twice the index" would be exponent $1$. "Twice the speed, eight times the index" would be exponent $3$. Braking energy here is the square story.

**3.** Letter E is the matching scale question with a $10\\%$ overspeed. This letter is the doubling. The coefficient $0.5$ never enters a scale question.

Doubling speed multiplies the index by $4$, so the statement is True.`,

    `**C.** → True

This is a level at $v=20$ km/h, the other standard test speed.

The overview already evaluated $E(20)=200$ from $0.5\\cdot 400$. This letter only asks whether that table entry is the number in the claim.

Twenty squared is $400$, and half of that $400$ is $200$ points.

**1.** A rushed solver who doubled the $v=10$ index of $50$ would report $100$, using a linear scale. The right scale is letter B's factor $4$, and $50\\cdot 4=200$.

**2.** Speed $20$ is the second of the two standard speeds in Part 3. The $v=20$ index entry is $200$.

The recovered index at $20$ km/h is $200$, so the statement is True.`,

    `**D.** → True

The claim is that the index is never negative for $v>0$. This is a sign question, not a level.

The overview already recorded that a square is never negative and the coefficient is positive, so the index stays positive across the whole domain. No evaluation of $E(10)$ or $E(20)$ is required. Sign is read off the formula $E(v)=0.5v^{2}$.

A square of a nonzero real is positive, and $0.5>0$, so the product is positive for every $v>0$. Approach speed in the stem is already restricted to $v>0$, so there is not even a $v=0$ reading to discuss.

**1.** A rushed solver who saw the $0.5$ and thought of a "half-negative" would be inventing a sign the coefficient does not have. Another who evaluated $E(-10)$ and found $+50$ has left the stem's domain; inside the domain the index is positive, and even outside it a square would still be nonnegative.

**2.** Extra arithmetic at an awkward speed still stays positive:

$$E(7)=0.5\\cdot 49=24.5, \\qquad E(0.2)=0.5\\cdot 0.04=0.02$$

both positive. The index can be small; it cannot be negative.

**3.** Letters A and C used levels. Letter B used a ratio, which is positive because both levels are positive. This letter is the sign that makes those ratios legal without further checks.

A negative coefficient would have been needed for a negative index. The stem's $0.5$ is positive.

The recovered formula stays positive for every $v>0$, so the statement is True.`,

    `**E.** → False

A ten percent overspeed is the multiplier $k=1.1$, and the claim is that the index also rises by $10\\%$.

The overview already recorded $1.1^{2}=1.21$ from identity $(2)$, and the extra level $E(11)=60.5$, which is $10.5$ points above $E(10)=50$. The index rises by twenty-one percent, not ten. An exponent of $2$ turns a $10\\%$ speed rise into a $21\\%$ energy rise, because

$$1.1^{2}=1.21=1+0.21$$

**1.** Extra arithmetic on the higher standard speed, which is this letter's own check: a $10\\%$ overspeed on $v=20$ is $v=22$, and

$$E(22)=0.5\\cdot 484=242$$

against $E(20)=200$, a rise of $42$ points, which is again $21\\%$ of $200$. The percentage is the same at every base speed; that is the scale identity.

**2.** A rushed solver who added $10\\%$ to the index, reporting $E(11)=55$, used exponent $1$. Another who used $2\\cdot 10\\%=20\\%$ and forgot the leftover $1\\%$ from $0.1^{2}$ would report $20\\%$ and still miss $21\\%$. The cross term $2\\cdot 1\\cdot 0.1$ is $0.20$, and the square of $0.1$ is $0.01$, and those add to $0.21$.

**3.** Letter B used $k=2$ and found $4$. This letter uses $k=1.1$ and finds $1.21$. Both are $k^{2}$. The ten percent trap is thinking a small relative change of the input is inherited by the output when the exponent is not $1$.

A $10\\%$ overspeed raises the index by $21\\%$, so the statement is False.`,
  ],
};

const report = applyLetters("01_10.json", L);
for (const r of report) {
  console.log(r.id, r.wc.join("/"), "keys", r.keys.map((k) => (k ? "T" : "F")).join(""));
}
console.log("patched", report.length);
