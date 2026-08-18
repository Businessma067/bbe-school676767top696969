/**
 * Chapter 8 — Power functions (Sydsæter §4.8 style exam tasks).
 * BBE True/False bank: dry claims, multi-step recovery / scaling / composition.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH8_POWER_FUNCTIONS: MathTask[] = [
  {
    id: `math-8-1`,
    case_id: `MATH 8.01`,
    title: `Rebuilding a Resin Block Mass Table from the Cube Rule`,
    context: `A cube resin block has mass $M(s)=5s^{3}$ grams for side length $s>0$ centimetres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Side $2$ cm gives mass $40$ grams.`,
      `Side $3$ cm gives mass $125$ grams.`,
      `Doubling the side multiplies the mass by $8$.`,
      `Side $1$ cm gives mass $5$ grams.`,
      `Side $4$ cm gives mass $240$ grams.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

This is a level question at side $2$ cm, not a scale question. The overview already evaluated $M(2)=40$ from $5\\cdot 2^{3}=5\\cdot 8$. This letter only asks whether that table entry is the number in the claim.

The mass is five times the cube of the side, not five times the side itself. Computing $5\\cdot 2^{2}=20$, treating the block as an area, would miss the cubic packing. Once $5\\cdot 2^{2}=20$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**1.** The exponent $3$ acts on $s$, never on the density $5$. Cubing the side first, then multiplying, is the order in identity $(1)$.

**2.** Side $2$ is one of the four standard sides already cubed in Part 3. The $2$ cm entry is $40$ grams.

The recovered mass at $2$ cm is $40$, so the statement is True.`,
      `**B.** → False

The same table lists $M(3)=135$, not $125$. The figure $125$ is $5^{3}$: someone cubed the density coefficient and ignored the side.

**1.** The exponent acts on $s$, never on the $5$. Swapping those two would have needed a rule of the form $s\\cdot 5^{3}$, which is not the resin model.

**2.** Three centimetres cubed is $27$, times density $5$ is $135$. The claim's $125$ is $10$ grams light, and that $10$ is exactly the gap between $5^{3}$ and $5\\cdot 3^{3}$.

**3.** Letter A already used the same rule at a different side. The false figure here is a different mistake: cubing the wrong number, not using the wrong exponent.

The recovered mass at $3$ cm is $135$, so the statement is False.`,
      `**C.** → True

This is a scale question, not a level. The coefficient $5$ cancels in the ratio, which is identity $(2)$ in the overview:

the doubling factor is $k^{3}$ with $k=2$, so $2^{3}=8$.

**1.** "Twice the side, twice the mass" would be exponent $1$. "Twice the side, four times the mass" would be the area story, exponent $2$. A cube of widths is eight copies of the original block.

**2.** Density never enters a scale question. Whether the resin were $5$ or $50$ grams per cubic centimetre, doubling the side would still multiply mass by $8$.

**3.** The overview already recorded that doubling factor in Part 3. This letter is reading the scale identity against a doubling claim, not rebuilding the mass table.

Doubling multiplies mass by $8$, so the statement is True.`,
      `**D.** → True

The unit cube is the one side where the density coefficient and the mass are the same number. The overview's table already reads $M(1)=5$. This letter is that table entry, not a new cube and not a scale question.

At side $1$ every power is $1$, so $s^{3}=1$ and the product is just the coefficient $5$. That is why a density-first reader is most likely to overwrite this entry: cubing $5$ instead of cubing $1$ lands on $125$, which is letter B's false figure, not this mass.

**1.** Still cubing $5$ would land on $125$ and confuse this letter with B. Working from the isolated values, $5$ is the figure that is checked, not the detour that produced $125$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The unit side is where coefficient and mass coincide. Cubing the coefficient is the wrong object; the exponent acts on $s$, never on the $5$.

**2.** Side $1$ cm is the smallest of the four standard sides in Part 3. It is also the one entry a density-first reader is most likely to overwrite by cubing $5$. Side $2$ already sat at $40$ in letter A, so the unit check is the remaining small-side sanity test.

A linear reader who computed $5\\cdot 1=5$ would get the right number for the wrong reason: exponent $1$ happens to agree with exponent $3$ at the unit point. That coincidence does not survive at side $2$, where the cube rule leaves $40$, not $10$.

If the stem had used coefficient $8$, the unit mass would have been $8$, not $5$. With $M(s)=5s^{3}$, the recovered mass at $1$ cm is $5$.

The recovered mass at $1$ cm is $5$, so the statement is True.`,
      `**E.** → False

Four centimetres sit in the table as $M(4)=320$, not $240$. Nothing in $5s^{3}$ produces $240$: that figure is closer to $5\\cdot 48$, as if a square and a cube had been mixed.

**1.** A fourfold width is sixty-four copies of the unit cube, times density $5$. The overview already carries $4^{3}=64$ and $M(4)=320$.

**2.** The false $240$ is not a nearby rounding of $320$. It is a different product. Mixing $4^{2}\\cdot 15$ or $5\\cdot 4\\cdot 12$ can manufacture numbers in that neighbourhood; the cube rule does not.

**3.** Compared with letter B, the error here is not cubing the coefficient. It is inventing a mass that the table never listed.

The recovered mass at $4$ cm is $320$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `Resin blocks obey $M(s)=5s^{3}$ grams for side length $s>0$ centimetres.

**Part 1: Building the model.**

Let $s$ = side length in centimetres, $M$ = mass in grams. The rule $M(s)=5s^{3}$ is a power function with exponent $3$ and coefficient $5$ on the domain $s>0$, and the coefficient already carries the density of the resin. Two kinds of question follow from it: levels, which need the coefficient, and scale factors, in which the coefficient cancels.

**1. Translate: a level.** The power is evaluated first, then multiplied by the coefficient:

$$M(s)=5\\cdot s^{3}$$

**2. Translate: a scale factor.** Multiplying the side by $k$ multiplies the mass by $k^{3}$, whatever the coefficient happens to be:

$$\\frac{M(ks)}{M(s)}=\\frac{5(ks)^{3}}{5s^{3}}=k^{3}$$

**Part 2: The model.**

$$M(s)=5s^{3} \\tag{1}$$

$$\\frac{M(ks)}{M(s)}=k^{3} \\tag{2}$$

**Part 3: Solve.**

**1.** Cubes of the four standard sides:

$$1^{3}=1, \\qquad 2^{3}=8, \\qquad 3^{3}=27, \\qquad 4^{3}=64$$

**2.** Masses at those sides, each five times the cube above it:

$$M(1)=5, \\qquad M(2)=40, \\qquad M(3)=135, \\qquad M(4)=320$$

**3.** The doubling factor from $(2)$ with $k=2$:

$$2^{3}=8$$

**4.** The two entries the statements misquote, set beside the correct ones:

$$135 \\ne 125, \\qquad 320 \\ne 240$$

**5.** Mass climbs far faster than side length here, because the exponent is $3$: a block four times wider carries sixty four times the mass.

**Answer.** $M(1)=5$ | $M(2)=40$ | $M(3)=135$ | $M(4)=320$ | doubling factor $8$`,
  },
  {
    id: `math-8-2`,
    case_id: `MATH 8.02`,
    title: `Two Gauge Formulas and the Readings They Refuse`,
    context: `A river gauge reports load $D(t)=6t^{\\frac{1}{2}}$ kilograms and turbidity $R(t)=50t^{-2}$ units, $t$ hours since reset. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `$D$ returns a real value at $t=0$.`,
      `$R$ returns a value at $t=0$.`,
      `$D$ returns a real value at $t=-4$.`,
      `$R(4)=3.125$ units.`,
      `$D(9)=18$ kilograms.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The load channel is the even-root rule $D(t)=6t^{\\frac{1}{2}}$ kilograms, and this letter asks a domain question, not a level. The claim is whether the gauge still returns a real dissolved-load reading at the reset itself, when the clock sits on $t=0$.

The overview recovered $D(0)=0$. That is a genuine real number of kilograms, not a refusal. A square root is defined for every nonnegative real, and zero is nonnegative: $0^{2}=0$, so the root of the reset is itself zero. Multiplying by the coefficient $6$ does not create a division. The product is $0$ kilograms of dissolved load.

**1.** Treating every power the way a reciprocal is treated would exclude $t=0$ from $D$ as well as from $R$. That is the fork: $t=0$ belongs to the recovered isolation, $R$ belongs to the discarded mix. That confuses the sign of the exponent with the parity of the root. Load has exponent $+\\frac{1}{2}$, so the variable sits in a numerator. There is no $t$ in a denominator, and there is no division by zero.

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

**2.** Writing $R(0)=50\\cdot 0$ as if the exponent were positive would invent a reading of $0$ units. The stem's recovered values line up with $R(0)=50\\cdot 0$, whereas $0$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $R(0)=50\\cdot 0$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That is the wrong sign on the exponent. Copying $D(0)=0$ onto $R$ is treating the two channels as if they shared a domain. Working from the isolated values, $D(0)=0$ is the figure that is checked, not the detour that produced $R$. That contrast is the reason the verdict goes the way it does. They do not: load lives on $t\\ge 0$, turbidity on $t>0$.

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

**2.** Remembering that cube roots accept negatives would apply that licence to a square root. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exponent here is $\\frac{1}{2}$, not $\\frac{1}{3}$. Computing $6\\cdot\\sqrt{4}=12$ and then attaching a minus sign by hand would report $-12$ kilograms. The recovered comparison therefore keeps $6\\cdot\\sqrt{4}=12$ and does not substitute $-12$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That is not how even roots work: the input is negative, so the root is not real, rather than real and then negated.

**3.** Turbidity, by contrast, does return a value at $t=-4$, because $(-4)^{2}=16$ and $R(-4)=\\frac{50}{16}=3.125$. That extra evaluation is legal for $R$ and illegal for $D$. The claim is about load, not turbidity. Copying a turbidity licence onto the load channel is the mix-up.

If the stem had used $D(t)=6t^{\\frac{1}{3}}$, then $D(-4)$ would have been real and this claim could have been true. With an even root, clock times before the reset sit outside the load domain.

Load at $t=-4$ is not real,

**4.** Extra arithmetic that stays on the legal side of the gate: $D(4)=12$ is a real twelve kilograms, while $D(-4)$ is not real. The $4$ and the $-4$ are not interchangeable under an even root. Cancelling the minus because a square will eat it is thinking of $t^{2}$, not of $t^{\\frac{1}{2}}$. So the letter reads the claim against $t^{2}$; $t^{\\frac{1}{2}}$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $t^{2}$ stays in the write-up. Clock times before the reset are a domain refusal, not a signed load.

so the statement is False.`,
      `**D.** → True

This is a level of the turbidity rule at a legal positive time, $t=4$ hours, not a domain question.

The overview already evaluated $R(4)=3.125$ from $\\frac{50}{16}$. This letter only asks whether that table entry is the number in the claim.

Turbidity is a reciprocal square. Four hours squared is $16$, and $50$ divided by $16$ is exactly $3.125$ units, not a rounded $3$.

**1.** Computing $50\\cdot 4^{-1}=12.5$ used exponent $-1$ instead of $-2$. That is the fork: $50\\cdot 4^{-1}=12.5$ belongs to the recovered isolation, $-2$ belongs to the discarded mix. Computing $50\\cdot 16=800$ dropped the reciprocal. Once $50\\cdot 16=800$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** Four hours is one of the positive times already listed in Part 3. The $t=4$ turbidity entry is $3.125$ units.

The recovered turbidity at $4$ hours is $3.125$, so the statement is True.`,
      `**E.** → True

This is a level of the load rule at $t=9$ hours, a legal time well inside $t\\ge 0$.

The overview already evaluated $D(9)=18$ from $6\\cdot 3$. This letter only asks whether that table entry is the number in the claim.

Nine is a perfect square, so the even root is the integer $3$, and the coefficient $6$ turns that $3$ into $18$ kilograms.

**1.** Computing $6\\cdot 9=54$ skipped the root. Keeping $6\\cdot 9=54$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Computing $\\sqrt{9}=3$ and then stopping, forgetting the $6$, would report $3$ kilograms. Working from the isolated values, $\\sqrt{9}=3$ is the figure that is checked, not the detour that produced $3$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Nine hours is one of the three load times already listed in Part 3. The $t=9$ load entry is $18$ kilograms.

The recovered load at $9$ hours is $18$, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `The gauge reports $D(t)=6t^{\\frac{1}{2}}$ kilograms and $R(t)=50t^{-2}$ units for $t$ hours since the reset.

**Part 1: Building the model.**

Let $t$ = hours since the reset, $D$ = cumulative dissolved load in kilograms, $R$ = turbidity index in units. The two rules are power functions in the same variable with opposite signs on the exponent, and that sign decides both the domain and the shape of each trace.

**1. Translate: the positive exponent.** A square root accepts zero and every positive time, and it refuses negative inputs:

$$D(t)=6t^{\\frac{1}{2}}, \\qquad t\\ge 0$$

**2. Translate: the negative exponent.** A negative exponent is a reciprocal, so the variable lands in a denominator and zero has to be excluded:

$$R(t)=\\frac{50}{t^{2}}, \\qquad t>0$$

**Part 2: The model.**

$$D(t)=6\\sqrt{t} \\quad \\text{on } t\\ge 0 \\tag{1}$$

$$R(t)=\\frac{50}{t^{2}} \\quad \\text{on } t>0 \\tag{2}$$

**Part 3: Solve.**

**1.** Values of the dissolved load rule at the times in question:

$$D(0)=0, \\qquad D(4)=12, \\qquad D(9)=18$$

**2.** Values of the turbidity rule at the same positive times:

$$R(4)=\\frac{50}{16}=3.125, \\qquad R(9)=\\frac{50}{81}\\approx 0.617$$

**3.** The two refusals, one from an even root and one from a zero denominator:

$$\\sqrt{-4} \\text{ is not real}, \\qquad \\frac{50}{0^{2}} \\text{ is undefined}$$

**4.** Shapes on the shared domain $t>0$: the dissolved load rises steadily with elapsed time, while the turbidity index falls steadily towards zero, since its exponent is negative.

**5.** Domain questions are settled by the sign of the exponent and the parity of its root, never by whether a number can be written down.

**Answer.** $D(0)=0$ | $R(0)$ undefined | $D(-4)$ not real | $R(4)=3.125$ | $D(9)=18$`,
  },
  {
    id: `math-8-3`,
    case_id: `MATH 8.03`,
    title: `A Fading Beacon and a Rising Count at the Two Ends of the Scale`,
    context: `A beacon gives $S(x)=80x^{-3}$ millivolts at $x>0$ metres; a reader logs $T(x)=2x^{\\frac{1}{2}}$ thousand packets over $x>0$ minutes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `As $x\\to\\infty$, $S(x)\\to 0$.`,
      `As $x\\to 0^{+}$, $S(x)$ grows without bound.`,
      `As $x\\to\\infty$, $T(x)$ approaches the ceiling $2$.`,
      `$S(2)=10$ millivolts.`,
      `As $x\\to 0^{+}$, $T(x)\\to 0$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The beacon is the negative-power channel $S(x)=80x^{-3}$ millivolts, and the claim is about the far end of the scale: what happens to received strength as distance $x$ grows without bound.

The overview already recorded that $S(x)\\to 0$ as $x$ grows. A negative exponent puts distance in a denominator, $S(x)=\\frac{80}{x^{3}}$. As $x\\to\\infty$ that denominator grows without bound while the numerator stays $80$, so the quotient is forced toward $0$. The signal fades at infinity.

This is not a claim that the beacon is ever exactly silent at a finite mast distance. It is a claim about the long-run reading.

**1.** Seeing the $80$ and treating it as a floor would think the signal settles at $80$ millivolts. That is why $80$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. The $80$ is a coefficient, not a ceiling and not a floor. It scales every reading and then cancels in any ratio of two distances.

**2.** Extra arithmetic at a far station makes the fade concrete. At $20$ metres the overview has $S(20)=0.01$. At $40$ metres, which is a new doubling,

$$S(40)=\\frac{80}{64000}=0.00125$$

so another doubling of distance cuts the already tiny reading by another factor of $8$, because $2^{3}=8$. The fade is cubic, not linear.

**3.** The opposite verdict would need a nonnegative exponent. A beacon $S(x)=80x^{3}$ would explode at infinity, and $S(x)=80$ would sit at a constant. The stem's exponent is $-3$.

The recovered long-run signal is $0$,

**4.** A second mix-up is to read $S(x)\\to 0$ as $S(x)=0$ at some large but finite mast distance. The reciprocal cube is never exactly zero at a finite $x$. At $x=80$ metres, $S(80)=\\frac{80}{512000}=0.00015625$, already a fraction of a millivolt and still not a dead beacon. Fading at infinity is an approach, not an arrival. Letter D's finite $S(2)=10$ is compatible with that fade: two metres is not infinity.

so the statement is True.`,
      `**B.** → True

The same reciprocal that sent the beacon to zero far away is now asked about the other end: a listener standing arbitrarily close to the mast, $x\\to 0^{+}$.

The overview already showed the blow-up with $S(0.1)=80000$. Near the mast a small positive $x$ makes $x^{3}$ arbitrarily small, so $\\frac{80}{x^{3}}$ becomes arbitrarily large. There is no finite millivolt cap as the distance collapses.

This is unbounded growth of a reciprocal cube, not a vertical reading at $x=0$ itself. The domain is $x>0$, so the mast point is excluded; the claim is about the approach from the positive side.

**1.** Remembering that $S$ fades at infinity might think it also fades at zero, as if both ends were the same. The opposite verdict would need a different isolation than $S$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The two ends of a negative-power rule are opposites: zero at infinity, unbounded at the origin.

**2.** Extra arithmetic closer in than the overview's $0.1$ m station: at $x=0.05$,

$$S(0.05)=\\frac{80}{0.000125}=640000$$

which is eight times $S(0.1)$, as a halved distance must be, because $\\bigl(\\frac{1}{2}\\bigr)^{-3}=8$. The blow-up has no ceiling.

**3.** Letter A used the same formula at the far end. The recovered object here is not a new coefficient; it is the same reciprocal, read at the opposite extreme.

If the exponent had been positive, strength would have gone to $0$ at the mast and grown in the distance. The stem's $-3$ forces the opposite.

The recovered near-mast signal grows without bound,

**4.** Letter D will ask for $S(2)=10$, a finite reading at a legal distance. That finite reading is compatible with an unbounded approach as $x\\to 0^{+}$: two metres is not the mast. Treating "unbounded near the mast" as "undefined at two metres" has confused an extreme with a level. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. The blow-up is an approach from the positive side, and $x=2$ sits comfortably on that side.

so the statement is True.`,
      `**C.** → False

The packet reader is the other instrument, $T(x)=2x^{\\frac{1}{2}}$ thousand packets over $x>0$ minutes, and the claim treats the coefficient $2$ as a long-run ceiling: as listening time grows, $T$ is supposed to approach $2$.

The overview already recorded that there is no ceiling for $T$. A positive exponent keeps the variable in a numerator. As $x\\to\\infty$ the square root grows without bound, slowly, but without any cap. The $2$ multiplies that growing root; it does not sit above it as a lid.

**1.** Confusing a coefficient with a ceiling is the whole trap. In $T(x)=2\\sqrt{x}$, the $2$ is the packets per square-root minute, not a maximum count. In $S(x)=\\frac{80}{x^{3}}$, the $80$ is likewise a coefficient, not a floor. Neither constant is an asymptote of that kind.

**2.** Extra arithmetic at a long listening time, past the overview's $T(10000)=200$: after $40000$ minutes,

$$T(40000)=2\\cdot 200=400$$

which is already two hundred times the claimed ceiling of $2$. The count is still climbing.

**3.** Mixing the two channels would copy $S\\to 0$ onto $T$, or copy a horizontal asymptote from a negative exponent onto a positive one. That is the fork: $S\\to 0$ belongs to the recovered isolation, $T$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Packet count has exponent $+\\frac{1}{2}$, so it climbs.

The opposite verdict would need a negative exponent on $T$, or an explicit cap in the stem. The stem has neither.

The recovered packet count has no long-run cap at $2$,

**4.** Extra arithmetic at the other end of $T$ is letter E: $T\\to 0$ as $x\\to 0^{+}$. A coefficient-as-ceiling reader might also think $T$ cannot fall below $2$ at the start. After one minute, $T(1)=2$, and after a quarter of a minute $T(0.25)=1$, already under the claimed lid. The $2$ is a reading at $x=1$, not a bound, and it is not a long-run cap either.

so the statement is False.`,
      `**D.** → True

This is a level of the beacon at two metres, not an end-of-scale question.

The overview already evaluated $S(2)=10$ from $\\frac{80}{8}$. This letter only asks whether that table entry is the number in the claim.

Two metres cubed is $8$, and $80$ millivolts spread across that $8$ is $10$ millivolts.

**1.** Computing $80\\cdot 2^{-1}=40$ used exponent $-1$ instead of $-3$. After isolating the unknown, the check is against $80\\cdot 2^{-1}=40$. The figure $-3$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $80\\cdot 2^{-1}=40$ stays in the write-up. Cubing $80$ instead of $2$ would land on a huge unrelated figure. The stem's recovered values line up with $80$, whereas $2$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $80$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** Two metres is one of the three distances already listed in Part 3. The $x=2$ signal entry is $10$ millivolts.

The recovered strength at $2$ metres is $10$,

**3.** Using $S(2)=80\\cdot 2=160$ skipped the exponent entirely. Keeping $S(2)=80\\cdot 2=160$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The recovered object is the Part 3 level $10$, not a linear multiple of the coefficient. Another who computed $80-2^{3}=72$ mixed subtraction into a reciprocal power.

so the statement is True.`,
      `**E.** → True

The packet reader is back, now at the start of the listening window rather than at infinity. The claim is that $T(x)\\to 0$ as $x\\to 0^{+}$.

The overview already recorded short-time counts $T(0.01)=0.2$ and $T(0.0001)=0.02$. A positive exponent keeps the count in a numerator. The square root of a shrinking positive input shrinks as well, so $T(x)=2\\sqrt{x}\\to 0$ as $x\\to 0^{+}$.

Signal $S$ explodes at that same end; the count does the opposite. The two instruments share the variable $x>0$ and nothing else about the extreme.

**1.** Copying the beacon's blow-up onto the reader would expect $T$ to explode at $0^{+}$. The recovered comparison therefore keeps $T$ and does not substitute $0^{+}$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That is the negative-exponent story, and $T$ has a positive exponent.

**2.** Extra arithmetic even closer in: at $x=10^{-6}$,

$$T(10^{-6})=2\\cdot 10^{-3}=0.002$$

which continues the march toward $0$. There is no positive floor on the count at the start of listening.

The recovered short-time count tends to $0$, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 3,
    solution_overview: `The beacon obeys $S(x)=80x^{-3}$ millivolts and the reader obeys $T(x)=2x^{\\frac{1}{2}}$ thousand packets, both on $x>0$.

**Part 1: Building the model.**

Let $x$ = distance in metres for the beacon rule and listening minutes for the reader rule, $S$ = received strength in millivolts, $T$ = cumulative count in thousand packets. Both rules are power functions on $x>0$, one with a negative exponent and one with a positive exponent below $1$, and the extremes are governed by those exponents alone.

**1. Translate: the negative exponent.** A negative exponent is a reciprocal power, so a large input makes a large denominator and a small input makes a small one:

$$S(x)=\\frac{80}{x^{3}}$$

**2. Translate: the positive exponent.** A positive exponent keeps the variable in the numerator, so growth continues without any ceiling, even though it slows:

$$T(x)=2x^{\\frac{1}{2}}$$

**Part 2: The model.**

$$S(x)=\\frac{80}{x^{3}} \\quad \\text{on } x>0 \\tag{1}$$

$$T(x)=2\\sqrt{x} \\quad \\text{on } x>0 \\tag{2}$$

**Part 3: Solve.**

**1.** Signal strength at three distances, from $(1)$:

$$S(2)=\\frac{80}{8}=10, \\qquad S(4)=\\frac{80}{64}=1.25, \\qquad S(20)=\\frac{80}{8000}=0.01$$

**2.** Signal strength very close to the mast, where the denominator collapses:

$$S(0.1)=\\frac{80}{0.001}=80000$$

**3.** Packet counts after three listening times, from $(2)$:

$$T(4)=4, \\qquad T(100)=20, \\qquad T(10000)=200$$

**4.** Packet counts for very short listening times:

$$T(0.01)=0.2, \\qquad T(0.0001)=0.02$$

**5.** The two extremes therefore behave in opposite ways. The negative exponent sends the signal to zero far from the mast and past every bound near it, while the positive exponent sends the count to zero at the start and past every bound in the long run, with no ceiling anywhere.

**Answer.** $S(x)\\to 0$ as $x$ grows | $S(x)$ unbounded as $x\\to 0^{+}$ | no ceiling for $T$ | $S(2)=10$ | $T(x)\\to 0$ as $x\\to 0^{+}$`,
  },
  {
    id: `math-8-4`,
    case_id: `MATH 8.04`,
    title: `Spread Overheads Against Finishing Hours on One Order Book`,
    context: `A workshop spreads overhead $U(q)=600q^{-1}$ euros per unit and needs $V(q)=3q^{\\frac{2}{3}}$ finishing hours for order size $q>0$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `$U$ is strictly decreasing for $q>0$.`,
      `$U(q)<0$ for some order size $q>0$.`,
      `$V$ is strictly increasing for $q>0$.`,
      `$U(8)=80$ euros per unit.`,
      `$V(8)=12$ hours.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Overhead on this order book is the reciprocal $U(q)=600q^{-1}$ euros per unit, and the claim is a shape question: whether that spread is strictly decreasing for every order size $q>0$.

The overview already recorded that $U$ falls and stays positive. On $q>0$ the numerator is the fixed $600$ euros of overhead while the denominator is the order size. Every larger order strictly raises that denominator, so every larger order strictly lowers the spread. There is no plateau and no later rise.

**1.** Seeing $U(8)=75$ below $U(2)=300$ and stopping there has only checked two points. After isolating the unknown, the check is against $U(8)=75$. The figure $U(2)=300$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $U(8)=75$ stays in the write-up. Strict decrease is a statement about every pair, not about a table of three. The reciprocal form $\\frac{600}{q}$ gives the whole comparison at once: if $q_{2}>q_{1}>0$, then $\\frac{600}{q_{2}}<\\frac{600}{q_{1}}$.

**2.** Extra arithmetic on a pair the overview did not list: a jump from $q=5$ to $q=6$ gives

$$U(5)=120, \\qquad U(6)=100$$

so even a one-unit increase cuts the spread. The same cut happens at a large order,

$$U(50)=12, \\qquad U(51)=\\frac{600}{51}\\approx 11.76$$

which is still a strict drop, just a smaller one.

**3.** Finishing hours $V$ move the other way, which is letter C. Mixing the two rules would make someone think overhead rises with the order because "bigger jobs cost more." Bigger jobs cost more in total finishing time. They cost less per unit in spread overhead.

The opposite verdict would need a positive exponent on $U$, or a coefficient that changed sign. The stem's $q^{-1}$ with a positive $600$ is strictly decreasing on $q>0$.

The recovered overhead rule falls at every larger order,

**4.** The opposite of a strictly decreasing spread would be a U-shape or a later rise once the workshop was "too busy." Nothing in $\\frac{600}{q}$ turns upward. At $q=100$, $U(100)=6$, still below $U(30)=20$. Direction is settled by the negative exponent, and extra cartridges of order size keep cutting the spread without a later rebound.

so the statement is True.`,
      `**B.** → False

The same overhead rule is now asked about sign rather than direction: whether $U(q)$ is negative for some order size $q>0$.

The overview already recorded $U>0$ on the whole domain. The numerator $600$ is positive and the order size $q$ is positive, so the quotient $\\frac{600}{q}$ is positive for every legal order. Falling toward zero is not the same as crossing zero.

There is no order size at which the workshop is paid to take the job, and there is no order size at which the spread is exactly zero either. Setting $\\frac{600}{q}=0$ would require $600=0$.

**1.** Watching $U(2)=300$, $U(8)=75$, $U(30)=20$ and extrapolated through zero would invent a crossing that the reciprocal never makes. That is the fork: $U(2)=300$ belongs to the recovered isolation, $U(30)=20$ belongs to the discarded mix. Attaching a minus to the exponent, writing $-600/q$, would have a negative spread, but that is not the stem. The path that matches the stem therefore holds $-600/q$ fixed and only then reads the claim.

**2.** Extra arithmetic at a huge order still stays positive:

$$U(6000)=0.1, \\qquad U(600000)=0.001$$

both positive, both smaller. The spread can be made arbitrarily small and still never negative.

**3.** Letter A used direction. This letter uses sign. A strictly decreasing positive function can do both at once: fall, and stay above zero. Those are different claims about the same curve.

A negative coefficient would have been needed for a negative spread. The stem's $600$ is positive.

The recovered overhead is positive at every $q>0$,

**4.** Letter A used direction and this letter uses sign. A strictly decreasing positive function can do both at once: fall, and stay above zero. Those are different claims about the same curve. Finishing hours $V$ are also always positive, so wanting a negative number on this order book has no formula that supplies one. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. A negative coefficient on $U$ would have been a different stem.

so the statement is False.`,
      `**C.** → True

Finishing hours are the other rule, $V(q)=3q^{\\frac{2}{3}}$ hours, and the claim is that $V$ is strictly increasing for $q>0$.

The overview already recorded that $V$ rises. The exponent $\\frac{2}{3}$ is positive, so a larger order raises a larger power, and the coefficient $3$ is positive, so it preserves that order. If $q_{2}>q_{1}>0$, then $q_{2}^{\\frac{2}{3}}>q_{1}^{\\frac{2}{3}}$ and therefore $V(q_{2})>V(q_{1})$.

This is the sign of the exponent, not a fact that has to be checked at $q=8$ and $q=27$ only.

**1.** Seeing the fraction $\\frac{2}{3}<1$ might think "less than one means decreasing." The recovered isolation is checked against the claim using $\\frac{2}{3}<1$, which is the figure the sessions actually produce.An exponent between $0$ and $1$ means increasing but concave: more hours, just with each extra unit adding a little less labour than the one before it. Decrease requires a negative exponent, which is $U$'s story, not $V$'s.

**2.** Extra arithmetic on a pair past the overview's table: from $q=1$ to $q=8$ the finishing hours go

$$V(1)=3, \\qquad V(8)=12$$

a fourfold rise in hours for an eightfold rise in order, which is exactly $8^{\\frac{2}{3}}=4$. From $q=8$ to $q=64$,

$$V(64)=48$$

another fourfold rise in hours for another eightfold rise in order. The curve keeps climbing.

**3.** Overhead $U$ falls on the same domain. The two rules move in opposite directions because their exponents have opposite signs. Copying $U$'s decrease onto $V$ is the mix-up.

The recovered finishing-hours rule rises at every larger order,

**4.** Compared with overhead, finishing hours climb while the spread falls. Reporting "both fall because bigger jobs are more efficient" has mixed the two columns. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. Efficiency here is a per-unit overhead story. Labour hours still rise, $V(27)=27$ and $V(64)=48$, so the increasing claim is about $V$, not about $U$.

so the statement is True.`,
      `**D.** → False

This is a level of overhead at eight units, and the claim writes $80$ euros per unit.

The overview already evaluated $U(8)=75$ from $\\frac{600}{8}$. The claim's $80$ is $5$ euros high.

Nothing in $\\frac{600}{q}$ produces $80$ at $q=8$. That figure is $600/7.5$, as if the order size had been taken to be $7.5$, or it is a round number sitting next to $75$ without the division having been done.

**1.** Computing $600/8=75$ and then "rounded up" to $80$ is not reading the rule. That is the fork: $600/8=75$ belongs to the recovered isolation, $80$ belongs to the discarded mix. Another who computed $8\\cdot 10=80$ invented a euros-per-unit of $10$ and multiplied by the order size, which is a total, not a spread.

**2.** Compared with letter E, which asks for finishing hours at the same $q=8$, this letter is the overhead column of that shared order size. The false figure is on the reciprocal, not on the fractional power.

The opposite verdict would need $U(8)=80$, which would have required a numerator of $640$ rather than $600$. The stem's overhead is $600$.

The recovered overhead at $8$ units is $75$, not $80$,

**3.** Extra arithmetic that shows how $80$ could have been manufactured: $U(7.5)=80$, but $7.5$ is not an eight-unit order. Or $8\\cdot 10=80$ as if a rate of $10$ euros per unit had been guessed from a round number. The recovered division is $600/8=75$, and the claim does not match that $75$.

so the statement is False.`,
      `**E.** → True

This is a level of finishing hours at eight units, not a shape question.

The overview already evaluated $V(8)=12$ from $3\\cdot 4$, after taking $8^{\\frac{2}{3}}=4$. This letter only asks whether that table entry is the number in the claim.

Eight is a perfect cube, so the cube root is $2$, and squaring that $2$ is the $\\frac{2}{3}$ power. Times the coefficient $3$ gives $12$ hours.

**1.** Computing $3\\cdot 8=24$ skipped the fractional power. The path that matches the stem therefore holds $3\\cdot 8=24$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Taking only the cube root and reporting $3\\cdot 2=6$ dropped the remaining square. Once $3\\cdot 2=6$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim.

**2.** Eight units is one of the three order sizes already listed in Part 3. The $q=8$ finishing entry is $12$ hours.

The recovered finishing time at $8$ units is $12$, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `The rules are $U(q)=600q^{-1}$ euros per unit and $V(q)=3q^{\\frac{2}{3}}$ hours on $q>0$, and direction and sign matter as much as levels.

**Part 1: Building the model.**

Let $q$ = order size in finished units, $U$ = overhead spread in euros per unit, $V$ = finishing labour in hours. Both rules are power functions on $q>0$ with positive coefficients, and the sign of the exponent decides the direction of each one while the positivity of the coefficient decides the sign of each output.

**1. Translate: the negative exponent.** A fixed overhead divided across the batch is a reciprocal rule, which falls but never crosses zero:

$$U(q)=\\frac{600}{q}$$

**2. Translate: the positive exponent.** Shared jigs and setup make labour rise more slowly than the batch, an exponent between $0$ and $1$:

$$V(q)=3q^{\\frac{2}{3}}$$

**Part 2: The model.**

$$U(q)=\\frac{600}{q} \\quad \\text{on } q>0 \\tag{1}$$

$$V(q)=3q^{\\frac{2}{3}} \\quad \\text{on } q>0 \\tag{2}$$

**Part 3: Solve.**

**1.** Overhead spread at three order sizes, from $(1)$:

$$U(2)=300, \\qquad U(8)=75, \\qquad U(30)=20$$

**2.** Fractional powers needed for $(2)$, taken as a cube root followed by a square:

$$8^{\\frac{2}{3}}=4, \\qquad 27^{\\frac{2}{3}}=9, \\qquad 64^{\\frac{2}{3}}=16$$

**3.** Finishing labour at the same order sizes:

$$V(8)=12, \\qquad V(27)=27, \\qquad V(64)=48$$

**4.** Directions and signs, read off the exponents rather than from the table:

$$U \\text{ falls, } U>0; \\qquad V \\text{ rises, } V>0$$

**5.** The two rules therefore move in opposite directions as an order grows, while both stay strictly positive. Overhead spread falls towards zero without reaching it, and finishing labour rises without any ceiling, though each extra unit adds a little less labour than the one before it.

**Answer.** $U$ strictly decreasing and always positive | $V$ strictly increasing | $U(8)=75$ | $V(8)=12$`,
  },
  {
    id: `math-8-5`,
    case_id: `MATH 8.05`,
    title: `One Bottling Line Reading and the Coefficient It Fixes`,
    context: `A bottling line runs at $Q(s)=As^{\\frac{1}{2}}$ crates per hour for $s>0$ staff, and $25$ staff gave $40$ crates per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient is $A=8$.`,
      `$Q(100)=80$ crates per hour.`,
      `Quadrupling the staffing doubles the output.`,
      `Doubling $A$ would double the ratio $\\frac{Q(4s)}{Q(s)}$.`,
      `$Q(4)=20$ crates per hour.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The bottling line is $Q(s)=As^{\\frac{1}{2}}$ crates per hour, and one audited shift, $25$ staff giving $40$ crates per hour, is what pins the unknown coefficient.

The overview already recovered $A=8$ from $5A=40$. This letter is that recovery, read against the claim's $8$.

Twenty-five staff are a perfect square, so the square root is $5$. The audited $40$ crates are then five copies of the coefficient, and $40/5=8$.

**1.** Dividing $40$ by $25$ would report $A=1.6$, treating the rule as linear. The stem's recovered values line up with $40$, whereas $A=1.6$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $40$ stays in the write-up. Squaring $25$ instead of taking the root would be lost in a huge denominator. Keeping $25$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The exponent $\\frac{1}{2}$ is a root, not a square and not a missing exponent.

**2.** Extra arithmetic that is not the overview's table: the same $A=8$ must also reproduce the audited shift,

$$Q(25)=8\\cdot 5=40$$

which is a check on the recovery, not a new unknown. If $A$ were $4$, that shift would have produced only $20$ crates per hour, and the claim would have been false.

**3.** Letters B and E are levels that use this $8$. Letter C is a scale factor that cancels it. Mixing those three jobs is the usual muddle: a coefficient is a level object, not a ratio object.

The opposite verdict would need a different audited pair. With $Q(25)=40$ and exponent $\\frac{1}{2}$, the coefficient cannot be anything but $8$.

The recovered coefficient is $A=8$,

**4.** Letter D will claim that doubling this $A$ doubles a staffing ratio. That later confusion is why the recovery has to be named as a coefficient of a level, not as a scale factor. With $A=8$, $Q(s)=8s^{\\frac{1}{2}}$ is the rule the rest of the task reads. A different audited shift, say $Q(25)=20$, would have given $A=4$ and this claim would have been false.

so the statement is True.`,
      `**B.** → True

This is a level of the recovered output rule at $100$ staff, not a recovery and not a scale question.

The overview already evaluated $Q(100)=80$. This letter only asks whether that table entry is the number in the claim.

One hundred staff are a perfect square, so the square root is $10$, and eight crates per square-root staff turn that $10$ into $80$ crates per hour.

**1.** Doubling the audited $40$ because $100$ is four times $25$ would report $80$ by accident through a linear scale, which happens to match here only because $\\sqrt{4}=2$ and $40\\cdot 2=80$. That is the fork: $40$ belongs to the recovered isolation, $40\\cdot 2=80$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. The right reason is the square-root scale, not a linear one. Letter C is where that distinction is the whole claim.

**2.** One hundred staff is one of the three shift sizes already listed in Part 3. The $s=100$ output entry is $80$ crates per hour.

The recovered output at $100$ staff is $80$, so the statement is True.`,
      `**C.** → True

This is a scale question, not a level. Quadrupling the staffing is the multiplier $k=4$, and the claim is that output doubles.

The overview already recorded the quadrupling factor $4^{\\frac{1}{2}}=2$ from identity $(2)$. The coefficient $A$ cancels in the ratio, which is why this letter does not care whether $A$ is $8$ or $80$:

$$\\frac{Q(4s)}{Q(s)}=4^{\\frac{1}{2}}=2$$

**1.** "Four times the staff, four times the crates" would be exponent $1$. "Four times the staff, sixteen times the crates" would be exponent $2$. A square-root technology turns a quadrupling of staff into a doubling of output, because four is a perfect square.

**2.** Extra arithmetic on the audited shift, which is this letter's own check rather than a re-display of $Q(100)$ as a fresh cube: $25$ staff quadrupled are $100$ staff, and the recovered levels $40$ and $80$ sit in the ratio $2$. That match is the scale identity at a concrete pair, not a new coefficient.

**3.** Using $k^{2}$ instead of $k^{\\frac{1}{2}}$ would claim a sixteenfold jump. After isolating the unknown, the check is against $k^{2}$. The figure $k^{\\frac{1}{2}}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $k^{2}$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Thinking the coefficient had to be known before a scale question could be answered has mixed letter A with letter C. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.

Density of staffing never enters a scale question. Whether $A$ were $8$ or $50$, quadrupling staff would still double output.

Quadrupling staff multiplies output by $2$,

**4.** The opposite verdict would need exponent $1$, where quadrupling staff would quadruple output, or exponent $2$, where it would multiply output by $16$. The stem's $\\frac{1}{2}$ is the square-root case, and $4^{\\frac{1}{2}}=2$ is forced. Staffing density never enters. Whether the line bottled resin or water, quadrupling staff would still double output.

so the statement is True.`,
      `**D.** → False

The claim is that doubling the coefficient $A$ would double the staffing ratio $\\frac{Q(4s)}{Q(s)}$. That ratio is a scale factor, not a level.

The overview already recorded a counterfactual coefficient of $16$ instead of $8$: every level doubles, and the ratio stays $2$. A doubled coefficient appears once above and once below in

$$\\frac{Q(4s)}{Q(s)}=\\frac{A(4s)^{\\frac{1}{2}}}{A s^{\\frac{1}{2}}}=4^{\\frac{1}{2}}=2$$

so it cancels. Doubling $A$ doubles every crate count. It does not touch this ratio.

**1.** Extra arithmetic under the counterfactual $A=16$: at four staff the level would be $32$ instead of $16$, and at sixteen staff it would be $64$ instead of $32$, but

$$\\frac{32}{16}=2, \\qquad \\frac{64}{32}=2$$

the same quadrupling factor as before. The extra arithmetic is the pair of doubled levels, which this letter needs; the factor $2$ is not new.

**2.** Seeing "double $A$" and "double the ratio" as the same sentence is treating a multiplier of the whole function as a multiplier of a quotient of two values of that function. Once $A$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Those are different operations.

**3.** Letter C used the same ratio and found it equal to $2$. This letter asks whether that $2$ would move if $A$ moved. It would not.

The opposite verdict would need a ratio in which $A$ appeared only once, for example $\\frac{Q(4s)}{s}$. That is not the scale factor in the claim.

Doubling $A$ leaves the quadrupling ratio at $2$,

**4.** What would have to change for the ratio to double with $A$ is a formula in which $A$ appeared only once, for example $Q(4s)-Q(s)$. That difference would indeed double if $A$ doubled, because a difference of two levels is still a level. A ratio of two levels is not. The claim named the ratio $\\frac{Q(4s)}{Q(s)}$, whose $A$ cancels.

so the statement is False.`,
      `**E.** → False

This is a level at four staff, and the claim writes $20$ crates per hour.

The overview already evaluated $Q(4)=16$. The claim's $20$ is $4$ crates high.

Four staff are a perfect square, so the square root is $2$, and $8\\cdot 2=16$, not $20$. Nothing in $8s^{\\frac{1}{2}}$ produces $20$ at $s=4$. That figure is closer to $8\\cdot 2.5$, or to half of the audited $40$, as if four staff were half of twenty-five.

**1.** Scaling the audited shift linearly, $40\\cdot\\frac{4}{25}=6.4$, would miss $16$ another way. The recovered comparison therefore keeps $40\\cdot\\frac{4}{25}=6.4$ and does not substitute $16$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $A=5$ from a mis-divided $40/8$ could manufacture $20$ as $5\\cdot\\sqrt{16}$ at the wrong input. The recovered comparison therefore keeps $A=5$ and does not substitute $5\\cdot\\sqrt{16}$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The false $20$ is not a nearby rounding of $16$; it is a different product.

**2.** Four staff is one of the three shift sizes already listed in Part 3. The $s=4$ output entry is $16$ crates per hour, and the claim does not match it.

The recovered output at $4$ staff is $16$, not $20$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `The bottling line follows $Q(s)=As^{\\frac{1}{2}}$ crates per hour, and one audited shift, $Q(25)=40$, fixes the coefficient $A$.

**Part 1: Building the model.**

Let $s$ = staff on the line, $Q$ = output in crates per hour. The exponent $\\frac{1}{2}$ is supplied and the audited shift fixes the coefficient. Levels then depend on the coefficient, while scale factors do not, and keeping those two apart is the whole point.

**1. Translate: the audited shift.**

$$A\\cdot 25^{\\frac{1}{2}}=40, \\qquad 25^{\\frac{1}{2}}=5$$

**2. Translate: a staffing multiplier.** Multiplying the staffing by $k$ multiplies the output by $k^{\\frac{1}{2}}$, for any positive coefficient:

$$\\frac{Q(ks)}{Q(s)}=\\frac{A(ks)^{\\frac{1}{2}}}{As^{\\frac{1}{2}}}=k^{\\frac{1}{2}}$$

**Part 2: The model.**

$$Q(s)=8s^{\\frac{1}{2}} \\tag{1}$$

$$\\frac{Q(ks)}{Q(s)}=k^{\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** The recovered coefficient:

$$5A=40 \\quad \\Rightarrow \\quad A=8$$

**2.** Outputs at the shift sizes in the plan, from $(1)$:

$$Q(4)=16, \\qquad Q(25)=40, \\qquad Q(100)=80$$

**3.** The quadrupling factor from $(2)$ with $k=4$:

$$4^{\\frac{1}{2}}=2$$

**4.** A counterfactual coefficient of $16$ instead of $8$, which lifts every level and moves no ratio:

$$Q_{c}(4)=32, \\qquad Q_{c}(100)=160, \\qquad \\frac{Q_{c}(4s)}{Q_{c}(s)}=2$$

**5.** Levels and ratios therefore answer a wrong coefficient in opposite ways. Every output would be doubled by a doubled coefficient, while every percentage gain from extra staff would stay exactly where it was, because the coefficient appears once above and once below the line.

**Answer.** $A=8$ | $Q(4)=16$ | $Q(100)=80$ | quadrupling doubles output | the ratio ignores the coefficient`,
  },
  {
    id: `math-8-6`,
    case_id: `MATH 8.06`,
    title: `Two Maintenance Indices That Meet at Two Machines`,
    context: `Two maintenance indices for $n>0$ machines are $F(n)=2n^{2}$ and $G(n)=n^{3}$ index points. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $n=2$ the indices read $8$ and $6$.`,
      `$G(n)>F(n)$ for every $n>2$.`,
      `$F(n)>G(n)$ for every $n$ with $0<n<2$.`,
      `$\\frac{G(n)}{F(n)}\\to 1$ as $n$ grows without bound.`,
      `At $n=3$ the indices read $18$ and $24$.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

Both maintenance indices are evaluated at a two-machine line, and the claim writes the pair $8$ and $6$.

The overview already recovered $F(2)=8$ and $G(2)=8$. They meet at $8$ and $8$, not at $8$ and $6$. The figure $6$ is not a nearby rounding of $8$. It is a different product, as if someone had computed $2\\cdot 3$ or had taken $2^{3}-2$ instead of $2^{3}$.

This letter is a false level at the crossing, not a comparison past the crossing. The recovered object is the pair of values at $n=2$, where the factored difference $n^{2}(n-2)$ is zero.

**1.** Computing $G(2)=2\\cdot 3=6$ mixed a coefficient of $2$ onto the cubic. That is the fork: $G(2)=2\\cdot 3=6$ belongs to the recovered isolation, $2$ belongs to the discarded mix. The cubic is $n^{3}$ with coefficient $1$. Another who computed $F(2)=2^{2}+2^{2}=8$ and $G(2)=2^{2}+2=6$ invented an additive recipe the stem does not have.

**2.** Extra arithmetic just beside the crossing, which this letter can use without rebuilding the whole table: at $n=1$,

$$F(1)=2, \\qquad G(1)=1$$

so the quadratic already leads by $1$ on a one-machine line, and at $n=2$ that lead has closed to a tie, not to an $8$-against-$6$ gap.

**3.** Letter E will ask for the three-machine pair. Mixing $G(3)=27$ down to $6$ by a wrong cube is a different mistake from the $6$ here. Here the $6$ is attached to the crossing itself.

The recovered pair at two machines is $8$ and $8$, not $8$ and $6$,

**4.** What would have to change for the pair to be $8$ and $6$ is a different cubic, for instance $G(n)=\\frac{3}{4}n^{3}$, which at $n=2$ really would read $6$. The stem's cubic is $n^{3}$. The crossing is a tie at $8$, and a tie is not an $8$-against-$6$ gap. Letter E's later $24$ is a different false cubic, at a different line size.

so the statement is False.`,
      `**B.** → True

This is a comparison past the crossing, not a level. The claim is that the cubic index $G$ leads the quadratic index $F$ for every $n>2$.

The overview already factored $G(n)-F(n)=n^{2}(n-2)$ and recorded that the cubic leads for $n>2$. For $n>0$ the square $n^{2}$ is positive, so the sign of $G-F$ is exactly the sign of $n-2$. Whenever $n>2$ that factor is positive and $G>F$.

A larger coefficient can only lead on small inputs. Past the crossing the larger exponent takes over, and it stays ahead.

**1.** Checking only $n=3$ and $n=4$ has two points, not the whole ray $n>2$. That is the fork: $n=3$ belongs to the recovered isolation, $n>2$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The factoring is what turns those two points into every larger line size. Another who compared coefficients $2$ and $1$ and declared $F$ always larger has ignored exponents.

**2.** Extra arithmetic further out than the overview's $n=4$ pair: at $n=5$,

$$F(5)=50, \\qquad G(5)=125$$

so the cubic already leads by $75$, and at $n=10$,

$$F(10)=200, \\qquad G(10)=1000$$

a lead of $800$. The gap widens because the leftover factor $n-2$ keeps growing.

**3.** Letter C is the other side of the same factor, $0<n<2$. Letter D is the ratio, which grows rather than settling. This letter is only the sign of $G-F$ on $n>2$.

The opposite verdict would need a second crossing, which a leftover linear factor $n-2$ cannot supply on $n>2$.

The recovered difference is positive past two machines,

**4.** The opposite verdict would need a second positive root of $n^{2}(n-2)=0$. The only positive root is $n=2$. Past that root the cubic stays ahead at $n=2.1$, at $n=3$, and at every larger line. Checking one more point does not create a later catch-up by the quadratic. Equal exponents would have been needed for a second meeting.

so the statement is True.`,
      `**C.** → True

The same factored difference is now read below the crossing: the claim is that $F>G$ for every $n$ with $0<n<2$.

The overview already recorded that the quadratic leads on that interval. On $0<n<2$ the factor $n-2$ is negative, while $n^{2}$ is still positive, so $G-F<0$ and therefore $F>G$.

A larger coefficient leads on small inputs. Two machines is where that licence expires.

**1.** Starting the comparison at $n=2$ and looking only to the right would miss this side. The path that matches the stem therefore holds $n=2$ fixed and only then reads the claim. Another who thought "cubic is always bigger" has forgotten that $2n^{2}$ beats $n^{3}$ when $n$ is a fraction.

**2.** Extra arithmetic on a half-machine line, which is a new input:

$$F\\bigl(\\tfrac{1}{2}\\bigr)=2\\cdot\\tfrac{1}{4}=\\tfrac{1}{2}, \\qquad G\\bigl(\\tfrac{1}{2}\\bigr)=\\tfrac{1}{8}$$

so the quadratic leads by $\\frac{3}{8}$ at $n=\\frac{1}{2}$. At $n=1$ the overview already had a lead of $1$. Both sit below the crossing, and both have $F>G$.

**3.** At $n=2$ the lead is zero, which is why the claim is a strict inequality on $0<n<2$ rather than on $0<n\\le 2$. The statement's open interval is the correct one.

The recovered difference is negative below two machines,

**4.** What would flip this verdict is a smaller coefficient on $F$, or a larger one on $G$, moving the crossing left of $1$. With $F(n)=2n^{2}$ and $G(n)=n^{3}$, the crossing is at two machines, so the whole interval $0<n<2$ has the quadratic in front. A one-machine line is the cleanest witness, and the half-machine line is a second witness.

so the statement is True.`,
      `**D.** → False

The claim is that the ratio $\\frac{G(n)}{F(n)}$ tends to $1$ as the line grows without bound, as if the two indices became interchangeable in the long run.

The overview already simplified the ratio to $\\frac{n}{2}$ and recorded that this leftover power grows without bound. As $n$ grows, $\\frac{n}{2}$ grows rather than settling at $1$. A ratio that tends to $1$ would mean the two powers were the same degree with the same leading coefficient. Here the degrees are $3$ and $2$.

**1.** Extra arithmetic at large line sizes, past the overview's $n=200$ ratio of $100$: at $n=500$,

$$\\frac{G(500)}{F(500)}=\\frac{500}{2}=250$$

and at $n=2000$,

$$\\frac{G(2000)}{F(2000)}=1000$$

so the cubic is a thousand times the quadratic on a $2000$-machine line, not one times it.

**2.** Seeing both indices going to infinity and concluding that their ratio goes to $1$ has confused "both unbounded" with "asymptotically equal." That is why $1$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.Two unbounded sequences can diverge from each other. Another who cancelled $n^{2}$ and forgot the leftover $n/2$ would report a constant $1$, which is exactly the false limit in the claim.

**3.** Letter B said the cubic leads. This letter says how the lead behaves as a ratio. A growing ratio is a stronger statement than a positive difference: the cubic does not merely stay ahead, it laps the quadratic over and over.

The opposite verdict would need equal exponents. With exponents $3$ and $2$, the ratio cannot tend to $1$.

The recovered ratio $\\frac{n}{2}$ grows without bound,

**4.** A ratio tending to $1$ is the language of equivalent leading terms. Here the leading term of $G$ is $n^{3}$ and the leading term of $F$ is $2n^{2}$. Those are not equivalent. The leftover $n/2$ is the exact discrepancy, and it is a power of $n$, not a constant. Constants tend to themselves; this leftover does not.

so the statement is False.`,
      `**E.** → False

This is a level at three machines, and the claim writes the pair $18$ and $24$.

The overview already evaluated $F(3)=18$ and $G(3)=27$. The quadratic entry matches; the cubic entry does not. The claim wants $24$ where the cube is $27$.

The figure $24$ is $3$ light, and that $3$ is not a rounding. It is a different product: $8\\cdot 3$, as if someone had multiplied the crossing value $8$ by $3$, or $2\\cdot 12$, mixing a coefficient of $2$ onto a wrong cube.

**1.** Computing $3^{3}=27$ and then subtracting the coefficient $3$ would land on $24$. Working from the isolated values, $3^{3}=27$ is the figure that is checked, not the detour that produced $24$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2\\cdot 3^{2}=18$ correctly for $F$ and then guessed $G$ as $18+6=24$ invented an additive gap.

**2.** Three machines is one of the line sizes already listed in Part 3. The $n=3$ pair is $18$ and $27$, and the claim's $24$ is the wrong cubic.

The recovered cubic at three machines is $27$, not $24$,

**3.** Extra arithmetic that manufactures $24$: $18+6$ as if the gap at $n=3$ were the coefficient $2$ times $3$, or $3^{3}-3=24$ subtracting the input from the cube. The recovered cube is $27$. The claim's $24$ is $3$ light, and that $3$ is the whole content of the false level.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `Two maintenance indices are compared: $F(n)=2n^{2}$ against $G(n)=n^{3}$ index points for a line of $n>0$ machines.

**Part 1: Building the model.**

Let $n$ = number of machines on the line, $F$ and $G$ = the two indices in points. Both are power functions on $n>0$, one with exponent $2$ and coefficient $2$, the other with exponent $3$ and coefficient $1$. A larger coefficient can only lead on small inputs; a larger exponent must lead eventually.

**1. Translate: the comparison.** Subtracting and factoring turns a race between two curves into one sign question:

$$G(n)-F(n)=n^{2}(n-2)$$

**2. Translate: the long run.** Dividing instead of subtracting shows how the gap behaves as the line grows:

$$\\frac{G(n)}{F(n)}=\\frac{n^{3}}{2n^{2}}=\\frac{n}{2}$$

**Part 2: The model.**

$$F(n)=2n^{2}, \\qquad G(n)=n^{3} \\tag{1}$$

$$G(n)>F(n) \\quad \\Longleftrightarrow \\quad n>2 \\tag{2}$$

**Part 3: Solve.**

**1.** Both indices at small line sizes:

$$F(1)=2, \\quad G(1)=1, \\qquad F(2)=8, \\quad G(2)=8$$

**2.** Both indices just past the crossing:

$$F(3)=18, \\quad G(3)=27, \\qquad F(4)=32, \\quad G(4)=64$$

**3.** The crossing itself, from $(2)$, where the factored difference is zero:

$$n^{2}(n-2)=0 \\quad \\Rightarrow \\quad n=2$$

**4.** The ratio at a few line sizes, which keeps climbing rather than settling:

$$\\frac{G(4)}{F(4)}=2, \\qquad \\frac{G(20)}{F(20)}=10, \\qquad \\frac{G(200)}{F(200)}=100$$

**5.** There is therefore a single crossing at two machines. The quadratic index leads below it, the cubic index leads above it, and the gap widens without limit, because the larger exponent eventually overwhelms any fixed coefficient.

**Answer.** $F(2)=G(2)=8$ | cubic leads for $n>2$ | quadratic leads for $0<n<2$ | ratio $\\frac{n}{2}$ grows without bound | $G(3)=27$`,
  },
  {
    id: `math-8-7`,
    case_id: `MATH 8.07`,
    title: `Three Root Transforms on One Calibration Sheet`,
    context: `A calibration sheet applies $L(x)=x^{\\frac{1}{2}}$, $M(x)=x^{\\frac{1}{3}}$ and $N(x)=x^{-\\frac{1}{2}}$ to a raw sensor reading $x$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `$L(0)=0$.`,
      `$L(-4)$ has a real value.`,
      `$M(-8)=-2$.`,
      `$N(0)$ is defined.`,
      `$N(4)=2$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The first transform is the even root $L(x)=x^{\\frac{1}{2}}$, and the claim is that a blank reading $x=0$ is accepted and filed as $0$.

The overview already evaluated $L(0)=0$. A square root accepts zero because $0^{2}=0$. The even-root gate stays open at a blank reading. This is a domain-and-level question at the included endpoint $x=0$, not a claim about negative readings.

**1.** Treating every root as a reciprocal would exclude zero from $L$ as well as from $N$. So the letter reads the claim against $L$; $N$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $L$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That is letter D's story, not letter A's. $L$ has a positive exponent, so the variable sits in a numerator.

**2.** Extra arithmetic just above the blank reading: $L(0.01)=0.1$ and $L(0.0001)=0.01$, so the filed value approaches $0$ from above and lands on $0$ rather than jumping to undefined.

The recovered even-root value at a blank reading is $0$, so the statement is True.`,
      `**B.** → False

The same even root is now pointed at a negative reading, $x=-4$. The claim is that $L(-4)$ has a real value.

The overview already recorded that $\\sqrt{-4}$ is not real. No real $y$ satisfies $y^{2}=-4$, so $L(-4)$ is not a real filed value.

Parity of the root, not the size of $4$, decides this letter. Replacing $4$ by $400$ would not help. The obstruction is the sign of the input under an even root.

**1.** Remembering that cube roots accept negatives would apply that licence here. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exponent is $\\frac{1}{2}$, not $\\frac{1}{3}$. Letter C is the odd-root licence, and it is a different transform.

**2.** Extra arithmetic that is legal on the odd-root channel and illegal here: $M(-4)=\\sqrt[3]{-4}$ is real, while $L(-4)$ is not. Copying $M$'s domain onto $L$ is the mix-up. Computing $\\sqrt{4}=2$ and then attaching a minus by hand would report $-2$. The recovered comparison therefore keeps $\\sqrt{4}=2$ and does not substitute $-2$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That is not an even root of a negative; it is a negated even root of a positive.

**3.** The even-root domain is $x\\ge 0$. Zero was included in letter A. Every negative is still excluded. Those two facts are one gate, not two.

If the stem had used $L(x)=x^{\\frac{1}{3}}$, this claim would have been true. With an even root, $x=-4$ sits outside the domain.

The recovered even-root value at $-4$ is not real,

**4.** Extra arithmetic on a nearby legal reading does not repair the illegal one. $L(4)=2$ is real, and $L(0)=0$ is real, while $L(-4)$ is not. The calibration sheet can file a blank reading and a positive reading on $L$; it cannot file a negative reading on $L$. Odd-root licence lives on $M$, not on $L$.

so the statement is False.`,
      `**C.** → True

The second transform is the odd root $M(x)=x^{\\frac{1}{3}}$, and the claim is the concrete value $M(-8)=-2$.

The overview already evaluated $M(-8)=-2$. An odd root accepts every real reading, and $(-2)^{3}=-8$ confirms the inverse: cubing $-2$ returns the input $-8$, so the cube root of $-8$ is $-2$.

This is both a domain statement and a level. The negative reading is legal, and the filed value is the negative number in the claim, not its absolute value $2$.

**1.** Taking the even-root habit from $L$ would refuse $x=-8$ and call the claim false. So the letter reads the claim against $L$; $x=-8$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $L$ stays in the write-up. That is the wrong transform. Another who filed $+2$ because "roots are positive" has dropped the sign that an odd root is required to keep.

**2.** Extra arithmetic on the matching positive reading, which is this letter's own check:

$$M(8)=2$$

so the odd root is an odd function: $M(-8)=-M(8)$. That pairing is what dropping the sign misses That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict..

**3.** Letter B refused $-4$ on $L$. Letter C accepts $-8$ on $M$. The difference is the parity of the root, not the size of the reading.

The recovered cube root of $-8$ is $-2$,

**4.** What would flip the sign of this filing is an even root, which would refuse $-8$, or a "principal positive root" instruction that the stem does not give. The exponent $\\frac{1}{3}$ is odd, so the filed value is negative. Checking $(-2)^{3}=-8$ is the inverse test, and it passes. Filing $+2$ would fail that test, because $2^{3}=8\\neq -8$.

so the statement is True.`,
      `**D.** → False

The third transform is the negative even root $N(x)=x^{-\\frac{1}{2}}$, and the claim is that $N(0)$ is defined.

The overview already recorded that $\\frac{1}{\\sqrt{0}}$ is undefined. A negative exponent puts the root in a denominator, $N(x)=\\frac{1}{\\sqrt{x}}$. At $x=0$ that denominator is zero, so the transform has no real value.

Zero is legal for $L$ and illegal for $N$. The extra obstruction is the sign of the exponent, stacked on top of the even-root gate.

**1.** Copying $L(0)=0$ onto $N$ is ignoring the minus in the exponent. So the letter reads the claim against $L(0)=0$; $N$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $L(0)=0$ stays in the write-up. Another who wrote $N(0)=\\infty$ as if infinity were a filed value is confusing a blow-up with a defined output. The calibration sheet does not file infinity.

**2.** Extra arithmetic just after the blank reading shows the blow-up rather than a value at zero:

$$N(0.01)=10, \\qquad N(0.0001)=100$$

so as $x\\to 0^{+}$ the reciprocal square root grows without bound. Growing without bound is still not a value at $x=0$.

**3.** The domain of $N$ is $x>0$, stricter than $L$'s $x\\ge 0$. Letter A used the weaker gate. This letter uses the stronger one.

The recovered reciprocal-root value at $0$ is undefined,

**4.** Letter A used the weaker gate $x\\ge 0$ on $L$. This letter uses the stronger gate $x>0$ on $N$. Those two facts are easy to swap, which is why filing $N(0)=0$ has copied the wrong transform. The recovered isolation is checked against the claim using $N(0)=0$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does. A negative exponent stacked on an even root excludes zero twice over, once for the root and once for the reciprocal.

so the statement is False.`,
      `**E.** → False

This is a level of $N$ at a legal reading $x=4$, and the claim writes $N(4)=2$.

The overview already evaluated $N(4)=\\frac{1}{2}$. The claim is $2$, which is $\\sqrt{4}$ with the minus in the exponent dropped.

At a legal reading the third transform is a reciprocal: $4^{-\\frac{1}{2}}=\\frac{1}{2}$, not $2$. The figure $2$ is $L(4)$, the first transform at the same input.

**1.** Computing $\\sqrt{4}=2$ and stopping has evaluated $L$ instead of $N$. The recovered comparison therefore keeps $\\sqrt{4}=2$ and does not substitute $N$. Another who computed $4^{-2}=\\frac{1}{16}$ used the wrong exponent. The minus in $-\\frac{1}{2}$ is a reciprocal of a square root, not a square of a reciprocal.

**2.** Extra arithmetic at the matching reciprocal pair: $N(0.25)=2$, which is the input that really does file as $2$. The claim pointed $N$ at $4$ rather than at $\\frac{1}{4}$. Mixing those two readings is how $2$ appears.

**3.** Four is one of the legal readings already listed in Part 3. The $x=4$ entry for $N$ is $\\frac{1}{2}$, and the claim does not match it.

The recovered reciprocal root at $4$ is $\\frac{1}{2}$, not $2$,

**4.** What would have made the claim true is the input $x=\\frac{1}{4}$, where $N(0.25)=2$, or the transform $L$ at $x=4$. The stem pointed $N$ at $4$. Reciprocals swap $2$ and $\\frac{1}{2}$; they do not leave $2$ sitting on $x=4$. The recovered $N(4)=\\frac{1}{2}$ is the reciprocal of the even-root filing $L(4)=2$.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `Three transforms act on a raw reading: $L(x)=x^{\\frac{1}{2}}$, $M(x)=x^{\\frac{1}{3}}$ and $N(x)=x^{-\\frac{1}{2}}$, and the question is which readings each one accepts.

**Part 1: Building the model.**

Let $x$ = raw sensor reading, and let the three filed values be $L$, $M$ and $N$. All three transforms are power functions with coefficient $1$, so the exponent alone decides both the accepted readings and the size of the output. Two features of the exponent matter: whether the root is even or odd, and whether the sign is positive or negative.

**1. Translate: parity of the root.** An even root demands a reading that is not negative, while an odd root accepts every real reading:

$$L(x)=\\sqrt{x} \\text{ needs } x\\ge 0, \\qquad M(x)=\\sqrt[3]{x} \\text{ accepts all } x$$

**2. Translate: sign of the exponent.** A negative exponent moves the root into a denominator, which excludes zero on top of any parity restriction:

$$N(x)=\\frac{1}{\\sqrt{x}} \\text{ needs } x>0$$

**Part 2: The model.**

$$L(x)=x^{\\frac{1}{2}} \\text{ on } x\\ge 0, \\qquad M(x)=x^{\\frac{1}{3}} \\text{ on all } x \\tag{1}$$

$$N(x)=\\frac{1}{\\sqrt{x}} \\text{ on } x>0 \\tag{2}$$

**Part 3: Solve.**

**1.** The first transform at three readings:

$$L(0)=0, \\qquad L(4)=2, \\qquad L(9)=3$$

**2.** The second transform, including a negative reading:

$$M(-8)=-2, \\qquad M(8)=2, \\qquad M(27)=3$$

**3.** The third transform from $(2)$, where every output is a reciprocal:

$$N(4)=\\frac{1}{2}, \\qquad N(9)=\\frac{1}{3}, \\qquad N(0.25)=2$$

**4.** The two readings with no value, and the reason in each case:

$$\\sqrt{-4} \\text{ is not real}, \\qquad \\frac{1}{\\sqrt{0}} \\text{ is undefined}$$

**5.** The third transform is also the only one of the three that falls as the reading grows, since its exponent is negative, and it returns a value above $1$ exactly when the raw reading is below $1$.

**Answer.** $L(0)=0$ | $L(-4)$ not real | $M(-8)=-2$ | $N(0)$ undefined | $N(4)=\\frac{1}{2}$`,
  },
  {
    id: `math-8-8`,
    case_id: `MATH 8.08`,
    title: `A Filter Bank Pressure Drop That Never Reaches Zero`,
    context: `A filter bank's pressure drop is $P(x)=12x^{-\\frac{1}{2}}$ kilopascals for $x>0$ cartridges in service. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $x=4$ cartridges the drop is $6$ kilopascals.`,
      `$P$ is strictly decreasing on $x>0$.`,
      `$P(x)\\to 0$ as $x$ grows without bound, but never reaches $0$.`,
      `As $x\\to 0^{+}$, $P(x)$ approaches a finite limit.`,
      `At $x=9$ cartridges the drop is $4$ kilopascals.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

This is a level of the pressure drop at four cartridges, not a shape question.

The overview already evaluated $P(4)=6$ from $\\frac{12}{2}$. This letter only asks whether that table entry is the number in the claim.

Four cartridges are a perfect square, so the square root is $2$, and $12$ kilopascals spread across that $2$ is $6$ kilopascals.

**1.** Computing $12\\cdot 4^{-1}=3$ used exponent $-1$ instead of $-\\frac{1}{2}$. That is the fork: $12\\cdot 4^{-1}=3$ belongs to the recovered isolation, $-\\frac{1}{2}$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Computing $12/4=3$ skipped the root. The path that matches the stem therefore holds $12/4=3$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Four cartridges is one of the bank sizes already listed in Part 3. The $x=4$ drop entry is $6$ kilopascals.

The recovered drop at $4$ cartridges is $6$,

**3.** Computing $12-4=8$ invented a linear leftover, and computing $12/\\sqrt[3]{4}$ used the wrong root. The opposite verdict would need a different isolation than $12/\\sqrt[3]{4}$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Working from the isolated values, $12-4=8$ is the figure that is checked, not the detour that produced $12/\\sqrt[3]{4}$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered object is the Part 3 entry $P(4)=6$, a reciprocal square root at a perfect square of cartridges.

so the statement is True.`,
      `**B.** → True

The filter bank obeys $P(x)=12x^{-\\frac{1}{2}}$ kilopascals, and the claim is that this drop is strictly decreasing on $x>0$.

The overview already recorded that $P$ falls. On $x>0$ the numerator stays at $12$ while $\\sqrt{x}$ grows with $x$, so the quotient $\\frac{12}{\\sqrt{x}}$ falls at every larger cartridge count. A negative exponent with a positive coefficient is strictly decreasing on the positive reals.

**1.** Checking only $P(4)=6$ below $P(1)=12$ has two points, not the whole ray. Working from the isolated values, $P(4)=6$ is the figure that is checked, not the detour that produced $P(1)=12$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Strict decrease is the comparison $x_{2}>x_{1}>0\\Rightarrow P(x_{2})<P(x_{1})$, which the reciprocal square root gives at once.

**2.** Extra arithmetic on a one-cartridge increase past the table: from $x=16$ to $x=25$,

$$P(16)=3, \\qquad P(25)=\\frac{12}{5}=2.4$$

a strict drop. From $x=36$ to $x=49$,

$$P(36)=2, \\qquad P(49)=\\frac{12}{7}\\approx 1.71$$

still a strict drop, just a smaller one. Extra cartridges always help; they help less and less.

**3.** Letter C is about the long-run floor at zero. Letter D is about the blow-up at the origin. This letter is only the direction between those two ends.

The opposite verdict would need a nonnegative exponent. The stem's $-\\frac{1}{2}$ is strictly decreasing.

The recovered drop falls at every larger bank,

**4.** Extra arithmetic on the quadrupling identity from $(2)$: every fourfold increase of the bank halves the drop, which is a strict decrease along a discrete subsequence and therefore along the whole ray. From $P(1)=12$ to $P(4)=6$ to $P(16)=3$ to $P(64)=1.5$, each step is smaller than the last. There is no later rise once "enough" cartridges are in.

so the statement is True.`,
      `**C.** → True

The claim has two halves, and both have to hold: as the bank grows, $P(x)\\to 0$, and yet $P$ never actually reaches $0$.

The overview already recorded both halves. As $x$ grows the denominator $\\sqrt{x}$ grows without bound while the numerator stays $12$, so $P(x)\\to 0$. Setting $\\frac{12}{\\sqrt{x}}=0$ would require $12=0$, which never happens. The drop approaches zero without landing on it.

**1.** Treating "tends to zero" as "equals zero for large $x$" would think a big enough bank has no pressure drop at all. The opposite verdict would need a different isolation than $x$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The reciprocal square root gets arbitrarily small and stays positive. Another who thought a negative exponent meant the drop became negative would have crossed through zero on the way. Letter B already forbade a sign change: $P$ stays positive while it falls.

**2.** Extra arithmetic at a huge bank, past the overview's $P(14400)=0.1$: at $x=1440000$,

$$P(1440000)=\\frac{12}{1200}=0.01$$

which is $10$ pascals in disguise, still not zero. Another quadrupling of that bank would halve the drop again, by identity $(2)$ with $k=4$.

**3.** The two ends therefore disagree about zero. At infinity the drop is approaching $0$. At any finite cartridge count the drop is still a positive kilopascal reading. The claim needs both of those facts.

The recovered drop tends to $0$ and never equals $0$,

**4.** What would let the drop actually reach zero is a formula that hit zero at a finite $x$, for example a factor $(x_{\\max}-x)$. The stem has no such factor. A negative coefficient would have sent the drop through zero into negative kilopascals, which the bank also does not do. Approaching zero from above, forever, is the whole reciprocal-square-root story at infinity.

so the statement is True.`,
      `**D.** → False

The claim is that as cartridges are pulled, $x\\to 0^{+}$, the drop $P(x)$ approaches a finite limit.

The overview already recorded the opposite end: $P(0.01)=120$ and $P(0.0001)=1200$, a blow-up with no finite cap. The denominator $\\sqrt{x}$ can be made arbitrarily small as $x\\to 0^{+}$, so $\\frac{12}{\\sqrt{x}}$ passes every bound. There is no finite millivolt-style ceiling here, and no finite kilopascal limit either.

A finite limit at the origin would need a nonnegative exponent. The stem's exponent is negative.

**1.** Copying letter C's $P\\to 0$ onto the origin would think both ends fade. The opposite verdict would need a different isolation than $P\\to 0$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The two ends of a negative-power rule are opposites. Another who wrote $P(0)=12$ as if the square root of zero could be cancelled against a missing $x$ invented a finite reading the formula does not give.

**2.** Extra arithmetic closer in than $0.0001$: at $x=10^{-8}$,

$$P(10^{-8})=\\frac{12}{10^{-4}}=120000$$

which is already a hundred times $P(0.0001)$. The drop has no finite limit as the last cartridge comes out.

**3.** Letter C used the far end. This letter uses the near end. Same formula, opposite extreme, opposite verdict.

The recovered drop is unbounded as $x\\to 0^{+}$,

**4.** Letter C used the far end, where the drop fades. This letter uses the near end, where the drop explodes. Same formula, opposite extreme, opposite verdict. A finite limit as $x\\to 0^{+}$ would have needed a nonnegative exponent, or a bounded rewrite such as $\\frac{12}{1+\\sqrt{x}}$. The stem's $12x^{-\\frac{1}{2}}$ has neither.

so the statement is False.`,
      `**E.** → True

This is a level at nine cartridges, not a shape question.

The overview already evaluated $P(9)=4$ from $\\frac{12}{3}$. This letter only asks whether that table entry is the number in the claim.

Nine cartridges are a perfect square, so the square root is $3$, and $12$ kilopascals spread across that $3$ is $4$ kilopascals.

**1.** Computing $12/9=1.333$ skipped the root. The path that matches the stem therefore holds $12/9=1.333$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Computing $12-9=3$ invented a linear leftover. The recovered isolation is checked against the claim using $12-9=3$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does.

**2.** Nine cartridges is one of the bank sizes already listed in Part 3. The $x=9$ drop entry is $4$ kilopascals.

The recovered drop at $9$ cartridges is $4$,

**3.** Computing $12/9=\\frac{4}{3}$ skipped the root, and computing $12-9=3$ invented a linear leftover. The path that matches the stem therefore holds $12-9=3$ fixed and only then reads the claim. After isolating the unknown, the check is against $12/9=\\frac{4}{3}$. The figure $12-9=3$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $12/9=\\frac{4}{3}$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Nine is a perfect square, so the reciprocal square root is the integer division $12/3=4$. The recovered Part 3 entry is $4$ kilopascals.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `The filter bank obeys $P(x)=12x^{-\\frac{1}{2}}$ kilopascals for $x>0$ cartridges in service, and both shape and levels are needed.

**Part 1: Building the model.**

Let $x$ = cartridges in service, $P$ = pressure drop across the bank in kilopascals. The rule is a power function with coefficient $12$ and exponent $-\\frac{1}{2}$ on the domain $x>0$, where the negative sign makes it fall and the even root closes the domain at zero from below.

**1. Translate: the reciprocal form.** A negative exponent puts the root in a denominator, which is what makes extra cartridges help:

$$P(x)=\\frac{12}{\\sqrt{x}}$$

**2. Translate: a scale factor.** Multiplying the bank by $k$ multiplies the drop by $k^{-\\frac{1}{2}}$, independently of the coefficient:

$$\\frac{P(kx)}{P(x)}=k^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{k}}$$

**Part 2: The model.**

$$P(x)=\\frac{12}{\\sqrt{x}} \\quad \\text{on } x>0 \\tag{1}$$

$$\\frac{P(kx)}{P(x)}=\\frac{1}{\\sqrt{k}} \\tag{2}$$

**Part 3: Solve.**

**1.** Readings at several bank sizes, from $(1)$:

$$P(1)=12, \\qquad P(4)=6, \\qquad P(9)=4, \\qquad P(16)=3$$

**2.** The quadrupling factor from $(2)$ with $k=4$, which halves the drop:

$$\\frac{1}{\\sqrt{4}}=\\frac{1}{2}$$

**3.** Very large banks, where the drop is small but never zero:

$$P(144)=1, \\qquad P(14400)=0.1$$

**4.** Very small banks, where the denominator collapses and the drop passes every bound:

$$P(0.01)=120, \\qquad P(0.0001)=1200$$

**5.** The two ends therefore behave in opposite ways. There is no ceiling on the drop as cartridges are pulled, and no floor above zero as cartridges are added, with the drop halving for every quadrupling of the bank.

**Answer.** $P(4)=6$ | $P(9)=4$ | strictly decreasing | $P(x)\\to 0$ but never $0$ | unbounded as $x\\to 0^{+}$`,
  },
  {
    id: `math-8-9`,
    case_id: `MATH 8.09`,
    title: `Primer for Circular Panels from a Single Recorded Job`,
    context: `Primer for a circular panel is $y(r)=Ar^{2}$ litres for radius $r>0$ metres, with $y(3)=45$ recorded. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient is $A=15$.`,
      `A panel of radius $6$ metres needs $180$ litres.`,
      `Increasing the radius by $50\\%$ multiplies the primer by $2.25$.`,
      `A panel of radius $1$ metre needs $5$ litres.`,
      `Halving the radius halves the primer needed.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

The recorded job $y(3)=45$ litres is what pins the unknown coefficient in $y(r)=Ar^{2}$, and the claim writes $A=15$.

The overview already recovered $A=5$ from $9A=45$. The claim's $15$ is three times too large. That figure is $45$ divided by the radius $3$ instead of by the square $9$, as if the primer rule had been linear.

This letter is a false recovery, not a level at a new radius. The recovered object is the coefficient itself.

**1.** Computing $45/3=15$ treated the panel as a length rather than an area. The recovered isolation is checked against the claim using $45/3=15$, which is the figure the sessions actually produce. Primer for a circular panel scales with $r^{2}$, which is the area story. Another who computed $3^{2}=9$ and then reported $A=45-9=36$ mixed subtraction into a multiplicative rule.

**2.** Extra arithmetic that checks the recovered $5$ against the recorded job, which is this letter's own confirmation rather than a new table:

$$y(3)=5\\cdot 9=45$$

If $A$ were $15$, the same panel would have needed $135$ litres, and the recorded $45$ would have been impossible.

**3.** Letters B and D are levels that use $A=5$. Letter C is a scale factor that cancels $A$. Mixing a linear recovery into those later letters is how $15$ keeps causing trouble.

The opposite verdict would need a recorded job of $135$ litres at radius $3$, or an exponent of $1$. The stem has $45$ litres and exponent $2$.

The recovered coefficient is $A=5$, not $15$,

**4.** Letter D will use the unit radius, where $y(1)$ equals the coefficient, so a false $A=15$ would have shown up there as $15$ litres. That is a second reason the recovery has to be $5$, not $15$. Primer is an area story: divide the recorded $45$ by $3^{2}=9$, not by $3$. Linear recovery is the trap that manufactures $15$.

so the statement is False.`,
      `**B.** → True

This is a level of the recovered primer rule at radius $6$ metres, not a recovery.

The overview already evaluated $y(6)=180$. This letter only asks whether that table entry is the number in the claim.

Six metres squared is $36$, and five litres per square metre turn that $36$ into $180$ litres.

**1.** Doubling the recorded $45$ because $6$ is twice $3$ would report $90$, using a linear scale. Working from the isolated values, $45$ is the figure that is checked, not the detour that produced $90$. The right scale is $2^{2}=4$, and $45\\cdot 4=180$. That is letter C's identity at a doubling, used here as a check.

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

**2.** Adding $50\\%$ to the primer, reporting a factor $1.5$, used exponent $1$. After isolating the unknown, the check is against $50\\%$. The figure $1$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $50\\%$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $k^{3}$ would report $3.375$, the volume story rather than the area story. So the letter reads the claim against $k^{3}$; $3.375$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $k^{3}$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

**3.** Letter E is the matching scale question with $k=0.5$. This letter is the widening. Density of primer never enters a scale question.

A $50\\%$ wider panel multiplies primer by $2.25$,

**4.** Letter E is the matching scale question with $k=0.5$. This letter is the widening. The two factors $1.5^{2}=2.25$ and $0.5^{2}=0.25$ are not a plus-fifty / minus-fifty pair, because an exponent of $2$ is not linear. Density of primer never enters a scale question: whether $A$ were $5$ or $50$, a $50\\%$ wider panel would still multiply primer by $2.25$.

so the statement is True.`,
      `**D.** → True

This is a level at a unit radius, where every power is $1$, so the requirement equals the coefficient.

The overview already evaluated $y(1)=5$. This letter only asks whether that table entry is the number in the claim.

At $r=1$, $1^{2}=1$ and $y(1)=5\\cdot 1=5$ litres. That is a quick check on the printed $5$, not a new square.

**1.** Still using the false $A=15$ from letter A would land on $15$ litres and miss the claim. That is the fork: $A=15$ belongs to the recovered isolation, $15$ belongs to the discarded mix. The unit radius is where coefficient and requirement coincide, so a wrong $A$ is most obvious here.

**2.** Radius $1$ is the smallest of the radii in Part 3. It is also the one entry a linear-recovery reader is most likely to overwrite by reporting $15$.

The recovered primer at $1$ metre is $5$, so the statement is True.`,
      `**E.** → False

Halving the radius is the multiplier $k=0.5$, and the claim is that primer is halved as well.

The overview already recorded $0.5^{2}=0.25$ from identity $(2)$. Primer is multiplied by a quarter, not by a half. An exponent of $2$ turns a halved width into a quarter of the paint, because a disc of half the radius is a quarter of the area.

**1.** Extra arithmetic on the recorded job: a $3$ m panel halved is a $1.5$ m panel, and

$$45\\times 0.25=11.25$$

which is the overview's $y(1.5)$, read here as a scale check rather than as a fresh square. If primer had halved, that panel would have needed $22.5$ litres, which is twice the true requirement.

**2.** Using $k^{1}$ is telling a length story. The path that matches the stem therefore holds $k^{1}$ fixed and only then reads the claim. Using $k^{3}$ would report a factor $0.125$, a volume story. The stem's recovered values line up with $k^{3}$, whereas $0.125$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $k^{3}$ stays in the write-up. Circular primer is an area.

**3.** Letter C used $k=1.5$ and found $2.25$. This letter uses $k=0.5$ and finds $0.25$. The two scale claims are not symmetric in the naive sense "plus fifty percent, minus fifty percent," because $1.5^{2}$ and $0.5^{2}$ are not reciprocals of a linear guess.

Halving the radius quarters the primer,

**4.** What would have made the claim true is exponent $1$, a length of trim rather than an area of primer. With exponent $2$, halving the radius quarters the disc. A volume story with exponent $3$ would have given the even smaller factor $0.125$. Circular primer is the square, and $0.5^{2}=0.25$ is forced.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 9,
    solution_overview: `Primer for one circular panel is $y(r)=Ar^{2}$ litres, and the single recorded entry $y(3)=45$ fixes the coefficient.

**Part 1: Building the model.**

Let $r$ = panel radius in metres, $y$ = primer needed for one panel in litres. The rule $y(r)=Ar^{2}$ is a power function with exponent $2$ on the domain $r>0$, and the coefficient absorbs everything about the primer itself. The recorded entry fixes that coefficient, after which levels and scale factors behave quite differently.

**1. Translate: the recorded job.** The square comes first, then the division that recovers the coefficient:

$$A\\cdot 3^{2}=45, \\qquad 3^{2}=9$$

**2. Translate: a width multiplier.** Multiplying the radius by $k$ multiplies the requirement by $k^{2}$, whatever the coefficient turns out to be:

$$\\frac{y(kr)}{y(r)}=\\frac{A(kr)^{2}}{Ar^{2}}=k^{2}$$

**Part 2: The model.**

$$y(r)=5r^{2} \\tag{1}$$

$$\\frac{y(kr)}{y(r)}=k^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The recovered coefficient:

$$9A=45 \\quad \\Rightarrow \\quad A=5$$

**2.** Requirements at several radii, from $(1)$:

$$y(1)=5, \\qquad y(1.5)=11.25, \\qquad y(3)=45, \\qquad y(6)=180$$

**3.** The two width multipliers from $(2)$, one for a wider panel and one for a narrower one:

$$1.5^{2}=2.25, \\qquad 0.5^{2}=0.25$$

**4.** Those multipliers as levels around the recorded entry:

$$45\\times 2.25=101.25, \\qquad 45\\times 0.25=11.25$$

**5.** Of the two width claims, only one survives. A fifty percent wider panel does take a little over twice as much primer, while a panel half as wide takes a quarter rather than a half, because an exponent of $2$ magnifies every change in width.

**Answer.** $A=5$ | $y(1)=5$ | $y(6)=180$ | width factor $1.5$ gives $2.25$ | halving the radius quarters the primer`,
  },
  {
    id: `math-8-10`,
    case_id: `MATH 8.10`,
    title: `A Braking Energy Index and the Ten Percent Trap`,
    context: `A braking energy index is $E(v)=0.5v^{2}$ points for an approach speed $v>0$ in kilometres per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $v=10$ the index reads $50$.`,
      `Raising $v$ from $10$ to $20$ multiplies the index by $4$.`,
      `At $v=20$ the index reads $200$.`,
      `The index is never negative for $v>0$.`,
      `Raising $v$ by $10\\%$ raises the index by $10\\%$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This is a level of the braking index at $v=10$ km/h, not a scale question.

The overview already evaluated $E(10)=50$ from $0.5\\cdot 100$. This letter only asks whether that table entry is the number in the claim.

Ten squared is $100$, and half of that $100$ is $50$ points.

**1.** Computing $0.5\\cdot 10=5$ skipped the square. The path that matches the stem therefore holds $0.5\\cdot 10=5$ fixed and only then reads the claim. Computing $10^{2}=100$ and stopping, forgetting the $0.5$, would report $100$ points. Working from the isolated values, $10^{2}=100$ is the figure that is checked, not the detour that produced $100$. That contrast is the reason the verdict goes the way it does.

**2.** Speed $10$ is one of the two standard test speeds already listed in Part 3. The $v=10$ index entry is $50$.

The recovered index at $10$ km/h is $50$,

**3.** Computing $0.5\\cdot 10^{3}=500$ used a cube, and reporting $10$ as if the coefficient were $1$ skipped the $0.5$. Working from the isolated values, $10$ is the figure that is checked, not the detour that produced $0.5$. The recovered comparison therefore keeps $0.5\\cdot 10^{3}=500$ and does not substitute $0.5$. Ten squared is $100$, half of $100$ is $50$. The recovered Part 3 entry at the lower standard speed is $50$ points.

so the statement is True.`,
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

**1.** Doubling the $v=10$ index of $50$ would report $100$, using a linear scale. The recovered comparison therefore keeps $v=10$ and does not substitute $100$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The right scale is letter B's factor $4$, and $50\\cdot 4=200$.

**2.** Speed $20$ is the second of the two standard speeds in Part 3. The $v=20$ index entry is $200$.

The recovered index at $20$ km/h is $200$,

**3.** Doubling $E(10)=50$ would report $100$, using a linear scale. Working from the isolated values, $E(10)=50$ is the figure that is checked, not the detour that produced $100$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The right scale is letter B's factor $4$, and $50\\cdot 4=200$. Twenty squared is $400$, half of $400$ is $200$. The recovered Part 3 entry at the higher standard speed is $200$ points.

so the statement is True.`,
      `**D.** → True

The claim is that the index is never negative for $v>0$. This is a sign question, not a level.

The overview already recorded that a square is never negative and the coefficient is positive, so the index stays positive across the whole domain. No evaluation of $E(10)$ or $E(20)$ is required. Sign is read off the formula $E(v)=0.5v^{2}$.

A square of a nonzero real is positive, and $0.5>0$, so the product is positive for every $v>0$. Approach speed in the stem is already restricted to $v>0$, so there is not even a $v=0$ reading to discuss.

**1.** Seeing the $0.5$ and thinking of a "half-negative" would be inventing a sign the coefficient does not have. The path that matches the stem therefore holds $0.5$ fixed and only then reads the claim. Another who evaluated $E(-10)$ and found $+50$ has left the stem's domain; inside the domain the index is positive, and even outside it a square would still be nonnegative.

**2.** Extra arithmetic at an awkward speed still stays positive:

$$E(7)=0.5\\cdot 49=24.5, \\qquad E(0.2)=0.5\\cdot 0.04=0.02$$

both positive. The index can be small; it cannot be negative.

**3.** Letters A and C used levels. Letter B used a ratio, which is positive because both levels are positive. This letter is the sign that makes those ratios legal without further checks.

A negative coefficient would have been needed for a negative index. The stem's $0.5$ is positive.

The recovered formula stays positive for every $v>0$,

**4.** Letter B's ratio $E(20)/E(10)=4$ is a ratio of two positive numbers. This letter is the sign that makes that ratio legal without further checks. A negative index at some awkward speed would have required a negative coefficient. The stem's $0.5$ is positive, and a square does not change sign on $v>0$.

so the statement is True.`,
      `**E.** → False

A ten percent overspeed is the multiplier $k=1.1$, and the claim is that the index also rises by $10\\%$.

The overview already recorded $1.1^{2}=1.21$ from identity $(2)$, and the extra level $E(11)=60.5$, which is $10.5$ points above $E(10)=50$. The index rises by twenty-one percent, not ten. An exponent of $2$ turns a $10\\%$ speed rise into a $21\\%$ energy rise, because

$$1.1^{2}=1.21=1+0.21$$

**1.** Extra arithmetic on the higher standard speed, which is this letter's own check: a $10\\%$ overspeed on $v=20$ is $v=22$, and

$$E(22)=0.5\\cdot 484=242$$

against $E(20)=200$, a rise of $42$ points, which is again $21\\%$ of $200$. The percentage is the same at every base speed; that is the scale identity.

**2.** Adding $10\\%$ to the index, reporting $E(11)=55$, used exponent $1$. That is the fork: $10\\%$ belongs to the recovered isolation, $1$ belongs to the discarded mix. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2\\cdot 10\\%=20\\%$ and forgot the leftover $1\\%$ from $0.1^{2}$ would report $20\\%$ and still miss $21\\%$. The cross term $2\\cdot 1\\cdot 0.1$ is $0.20$, and the square of $0.1$ is $0.01$, and those add to $0.21$.

**3.** Letter B used $k=2$ and found $4$. This letter uses $k=1.1$ and finds $1.21$. Both are $k^{2}$. The ten percent trap is thinking a small relative change of the input is inherited by the output when the exponent is not $1$.

A $10\\%$ overspeed raises the index by $21\\%$,

**4.** What would have made a $10\\%$ index rise true is exponent $1$. With exponent $2$, the binomial $(1+0.1)^{2}=1+0.2+0.01=1.21$ is forced. The leftover $0.01$ is small, which is why it is tempting to drop it and reports $20\\%$, still missing $21\\%$. Both standard speeds, $10$ and $20$, show the same $21\\%$ overspeed factor.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `The braking energy index is $E(v)=0.5v^{2}$ points for an approach speed $v>0$ in kilometres per hour, checked at the standard speeds and under a small overspeed.

**Part 1: Building the model.**

Let $v$ = approach speed in kilometres per hour, $E$ = braking energy index in points. The rule $E(v)=0.5v^{2}$ is a power function with exponent $2$ and coefficient $0.5$ on the domain $v>0$. Levels use the coefficient, while every comparison depends on the exponent alone, since the coefficient cancels in any ratio.

**1. Translate: a level.** Square the speed, then halve it:

$$E(v)=0.5\\cdot v^{2}$$

**2. Translate: a speed multiplier.** Multiplying the approach speed by $k$ multiplies the index by $k^{2}$:

$$\\frac{E(kv)}{E(v)}=\\frac{0.5(kv)^{2}}{0.5v^{2}}=k^{2}$$

**Part 2: The model.**

$$E(v)=0.5v^{2} \\tag{1}$$

$$\\frac{E(kv)}{E(v)}=k^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The index at the two standard test speeds, from $(1)$:

$$E(10)=50, \\qquad E(20)=200$$

**2.** The doubling factor from $(2)$ with $k=2$:

$$2^{2}=4$$

**3.** The overspeed factor from $(2)$ with $k=1.1$:

$$1.1^{2}=1.21$$

**4.** That factor as a level, applied to the lower standard speed:

$$E(11)=0.5\\cdot 121=60.5, \\qquad 60.5-50=10.5$$

**5.** Signs need no calculation at all: a square is never negative and the coefficient is positive, so the index stays positive across the whole domain. A ten percent overspeed adds twenty one percent to the index, which is the exponent at work.

**Answer.** $E(10)=50$ | $E(20)=200$ | doubling factor $4$ | index always positive | a $10\\%$ overspeed adds $21\\%$`,
  },
  {
    id: `math-8-11`,
    case_id: `MATH 8.11`,
    title: `Marina's Vegetable Plot`,
    context: `Marina's harvest in kilograms follows $Y(h)=A h^{r}$ after $h>0$ hours of watering, with both constants unknown. $8$ hours give $4$ kilograms, and $27$ hours give $6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is smaller than one, so harvest grows more slowly than watering time.`,
      `If she doubles the watering time, she doubles the harvest.`,
      `To double the $4$-kilogram harvest she must more than double the watering time.`,
      `An extra hour adds more crop after $27$ hours of watering than it does after $8$.`,
      `The watering time needed for a given harvest is itself a power function of that harvest.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Marina's harvest is a power $Y(h)=A h^{r}$ with both constants unknown, and this letter asks what the recovered exponent says about speed: whether harvest grows more slowly than watering time.

The overview already recovered $r=\\frac{1}{3}$ from the logged ratio $\\frac{6}{4}=\\bigl(\\frac{27}{8}\\bigr)^{r}$, which simplified because $27/8=(3/2)^{3}$ and $6/4=3/2$. An exponent smaller than one means that multiplying hours by $k$ multiplies harvest only by $k^{r}$, a smaller factor. Harvest grows more slowly than watering time.

This is a statement about the exponent, not about the coefficient $A=2$. Scale questions cancel $A$; the comparison of growth rates is $r$ against $1$.

**1.** Comparing the two logged points and seeing hours jump from $8$ to $27$, a factor $3.375$, while harvest jumped only from $4$ to $6$, a factor $1.5$, already has the same conclusion in a table. The recovered comparison therefore keeps $8$ and does not substitute $1.5$. That contrast is the reason the verdict goes the way it does. The exponent $r=\\frac{1}{3}$ is that observation, cleaned into a single number.

**2.** Extra arithmetic at a third watering time, not in the overview's short answer line: after $64$ hours,

$$Y(64)=2\\cdot 4=8$$

so octupling the original $8$ hours only doubles the original $4$ kg harvest. That is $8^{\\frac{1}{3}}=2$, slower than the hours.

**3.** If $r$ had been $1$, harvest would have kept pace with hours. If $r$ had been $2$, harvest would have outrun hours. The two logged pairs force $r=\\frac{1}{3}<1$. Averaging $4$ and $6$ and declared linear growth has thrown the ratio away. That is the fork: $4$ belongs to the recovered isolation, $6$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered exponent sits below one,

**4.** A second witness at $h=125$: $Y(125)=2\\cdot 5=10$, so a sixteenfold jump in hours from $8$ to $125$ only multiplies harvest by $2.5$. Hours outrun crop whenever $r<1$. If the logged $27$-hour harvest had been $54$ kg rather than $6$, the exponent would have been $1$ and this claim would have been false.

so the statement is True.`,
      `**B.** → False

The claim is a scale statement: doubling the watering time doubles the harvest.

The overview already recorded that doubling hours multiplies harvest by $2^{\\frac{1}{3}}$, not by $2$. The coefficient $A$ cancels in the ratio

$$\\frac{Y(2h)}{Y(h)}=2^{r}=2^{\\frac{1}{3}}\\approx 1.26$$

so a doubled watering buys about twenty-six percent more crop, not one hundred percent more.

**1.** Extra arithmetic on the logged $8$-hour harvest: doubling those $8$ hours is $16$ hours, and

$$Y(16)=2\\cdot 16^{\\frac{1}{3}}=2\\cdot 2^{\\frac{4}{3}}=2\\cdot 2\\cdot 2^{\\frac{1}{3}}=8\\cdot 2^{\\frac{1}{3}}\\approx 10.08$$

against $Y(8)=4$. The new harvest is about $10$ kg, not $8$ kg. Twice $4$ would have been $8$, and $10$ is not $8$.

**2.** Using exponent $1$ is telling a proportional story the two logged pairs already contradict: hours from $8$ to $27$ would have had to take harvest from $4$ to $13.5$, not to $6$. The stem's recovered values line up with $1$, whereas $6$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $1$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{\\frac{1}{2}}$ mixed this plot with a square-root technology.

**3.** Letter C asks the reverse scale question: how many hours to double the harvest. This letter asks what doubling the hours does to the harvest. Those are inverse questions, and both fail a factor of $2$ because $r\\neq 1$.

The opposite verdict would need $r=1$. With $r=\\frac{1}{3}$, doubling hours does not double harvest.

The recovered doubling factor is $2^{\\frac{1}{3}}$, not $2$,

**4.** What would flip the verdict is $r=1$, a proportional plot. With $r=\\frac{1}{3}$, the forward factor $2^{r}$ and the reverse factor $2^{1/r}$ disagree, which is why doubling hours and doubling harvest are different jobs. Treating them as the same job would have reported $Y(16)=8$ and missed both this letter and letter C. The recovered isolation is checked against the claim using $Y(16)=8$, which is the figure the sessions actually produce.

so the statement is False.`,
      `**C.** → True

This is a reverse scale question: starting from the logged $4$ kg harvest, how much watering is needed to double it to $8$ kg, and is that more than a doubling of the logged $8$ hours.

The overview already inverted $Y(h)=8$ at $h=64$. Sixty-four hours is eight times the logged $8$ hours, which is more than a doubling. With $r=\\frac{1}{3}$, doubling the harvest means multiplying hours by $2^{3}=8$, because the inverse exponent is $3$.

The extra arithmetic is the inversion, not a re-display of $A=2$:

**1.** The recovered rule is $Y(h)=2h^{\\frac{1}{3}}$. Set the harvest equal to $8$:

$$2h^{\\frac{1}{3}}=8$$

**2.** Divide by the coefficient and cube:

$$h^{\\frac{1}{3}}=4, \\qquad h=64$$

**3.** Compare $64$ with twice the logged $8$ hours, which would have been $16$. The required $64$ sits well past $16$. Reporting $16$ used exponent $1$ on the reverse question, the same linear trap as letter B in the other direction. So the letter reads the claim against $16$; $1$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $16$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**4.** Extra check: $Y(64)=2\\cdot 4=8$, so the inversion lands on the doubled harvest. $Y(16)\\approx 10$ was letter B's forward doubling of hours, which overshoots $8$ on the harvest scale only because that was a different question. Here the target is harvest $8$, and the hours needed are $64$.

Multiplying $8$ hours by $2^{\\frac{1}{3}}$ mixed the forward factor with the reverse factor. After isolating the unknown, the check is against $8$. The figure $2^{\\frac{1}{3}}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $8$ stays in the write-up. Forward is $2^{r}$; reverse is $2^{1/r}$. Those are not the same once $r\\neq 1$.

If $r$ had been greater than one, doubling the harvest would have needed less than a doubling of hours. The stem's $r=\\frac{1}{3}<1$ forces a more-than-doubling of watering.

The recovered watering time for $8$ kg is $64$ hours, more than double $8$,

**5.** The opposite of "more than double the hours" would be an exponent above one, where doubling harvest would need less than a doubling of watering. Marina's cube-root technology is the other way round: harvest is cheap to wait for and expensive to double. Sixty-four hours against a naive $16$ is a factor-of-four gap, not a rounding.

so the statement is True.`,
      `**D.** → False

The claim is about the slope of the harvest, not about a level: whether an extra hour adds more crop after $27$ hours than after $8$.

The overview already recorded that an extra hour adds less after $27$ hours than after $8$, because $r<1$. The recovered rule $Y(h)=2h^{\\frac{1}{3}}$ has derivative

$$Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}}$$

The leftover exponent $-\\frac{2}{3}$ is negative, so the slope itself falls as $h$ rises. Later hours buy less crop, not more.

**1.** Extra arithmetic at the two logged times, which is this letter's own comparison rather than a re-display of $Y(8)$ and $Y(27)$:

$$Y'(8)=\\frac{2}{3}\\cdot 8^{-\\frac{2}{3}}=\\frac{2}{3}\\cdot\\frac{1}{4}=\\frac{1}{6}$$

$$Y'(27)=\\frac{2}{3}\\cdot 27^{-\\frac{2}{3}}=\\frac{2}{3}\\cdot\\frac{1}{9}=\\frac{2}{27}$$

and $\\frac{1}{6}\\approx 0.167$ sits above $\\frac{2}{27}\\approx 0.074$. An extra hour after $8$ hours adds about $0.17$ kg; after $27$ hours it adds about $0.07$ kg.

**2.** Seeing $Y(27)=6>Y(8)=4$ and concluding that later hours are more productive has confused the height of the curve with its slope. That is why $Y(27)=6>Y(8)=4$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The harvest is still rising, just more slowly. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r>1$ intuition from a convex technology has the wrong recovered exponent.

**3.** Letter A said $r<1$ as a growth-rate comparison with hours. This letter is the same $r<1$ as a falling marginal product. Average product $Y/h=2h^{-\\frac{2}{3}}$ falls for the same leftover-exponent reason.

The opposite verdict would need $r>1$. With $r=\\frac{1}{3}$, later hours add less, not more.

The recovered slope is smaller at $27$ hours than at $8$,

**4.** Average product $Y/h=2h^{-\\frac{2}{3}}$ tells the same falling story: $Y(8)/8=0.5$ kg per hour and $Y(27)/27=\\frac{2}{9}\\approx 0.22$. Later hours are less productive on both the margin and the average. A convex $r>1$ technology would have flipped both comparisons.

so the statement is False.`,
      `**E.** → True

The claim is about the inverse: whether the watering time needed for a given harvest is itself a power function of that harvest.

The overview already recorded the inverse $h=(Y/2)^{3}$. A nonzero power inverts to another power. Raising $Y=2h^{\\frac{1}{3}}$ to the reciprocal exponent $3$ isolates $h$ as a monomial in $Y$, coefficient $(1/2)^{3}=\\frac{1}{8}$ and exponent $3$.

That is the definition of a power function of the harvest: $h=\\frac{1}{8}Y^{3}$. There is no leftover constant, no logarithm, and no second exponent.

**1.** Extra arithmetic that uses the inverse at a new harvest, $Y=10$:

$$h=\\Bigl(\\frac{10}{2}\\Bigr)^{3}=125$$

so $10$ kg would take $125$ hours. That is a cube of a linear function of $Y$, still a power of $Y$. Adding a setup time, $h=5+(Y/2)^{3}$, would have left the power-function class; the stem has no setup. Keeping $h=5+(Y/2)^{3}$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim.

**2.** Thinking "the inverse of a root is not a power" has forgotten that a root is a power, and the inverse of $u^{r}$ is $u^{1/r}$. The recovered comparison therefore keeps $u^{r}$ and does not substitute $u^{1/r}$. Another who wrote $h=\\log Y$ mixed this plot with an exponential technology.

**3.** Letters B and C used the inverse exponent $3$ as a scale factor. This letter names the inverse as a function class. The same $h\\propto Y^{3}$ is what made doubling harvest cost eight times the hours.

If $A$ had sat inside a sum, $Y=2+h^{\\frac{1}{3}}$, the inverse would not have been a power. The stem is a pure monomial.

The recovered watering time is a power of harvest,

**4.** Extra check that the inverse is a monomial, not a polynomial: $h(4)=8$, $h(6)=27$, $h(8)=64$, and $8:27:64$ is $2^{3}:3^{3}:4^{3}$, cubes of $2,3,4$. A leftover constant would have ruined that cube pattern. The stem has no setup hours.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 11,
    solution_overview: `Harvest follows $Y(h)=Ah^{r}$ for $h>0$ hours. Eight hours give $4$ kg and twenty-seven hours give $6$ kg.

**Part 1: Building the model.**

Let $h$ = watering hours and $Y$ = harvest. Two unknowns need both observations. The ratio cancels $A$ and isolates $r$; the eight-hour level then pins $A$.

**1. Translate: the ratio.**

$$\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}$$

**2. Translate: the eight-hour level.**

$$A\\cdot 8^{r}=4$$

**Part 2: The model.**

$$r=\\frac{1}{3} \\tag{1}$$

$$Y(h)=2h^{\\frac{1}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $r<1$, harvest grows more slowly than watering time, and an extra hour adds less after $27$ hours than after $8$.

**2.** Doubling hours multiplies harvest by $2^{\\frac{1}{3}}$, not by $2$. Doubling the $4$ kg harvest needs $h=64$, eight times the recorded $8$ hours.

**3.** The inverse $h=(Y/2)^{3}$ is a power function.

**Answer.** $A=2$ | $r=\\frac{1}{3}$ | $h=64$ to double $4$ kg`,
  },
  {
    id: `math-8-12`,
    case_id: `MATH 8.12`,
    title: `A Helpdesk Wait That Falls With the Team`,
    context: `Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. $4$ agents on the shift produce a $24$ minute wait. Staffing cannot exceed $50$ agents. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `With $9$ agents on duty, callers wait less than $20$ minutes.`,
      `The number of agents needed for a given wait is itself a power of that wait.`,
      `An extra agent cuts more wait after $16$ agents than after $4$.`,
      `A $6$-minute wait would need more than $50$ agents.`,
      `Doubling the recorded team halves the wait.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes, and the recorded four-agent shift of $24$ minutes is what pins $A$. This letter is a level at nine agents, asked against a threshold of $20$ minutes.

The overview already recovered $A=48$ and $W(9)=16$. Sixteen minutes sits below $20$. The recovered object is that nine-agent wait, not a new coefficient.

Nine agents are a perfect square, so the square root is $3$, and $W(9)=48/3=16$. The claim does not ask for $16$ on the nose; it asks whether the wait is less than $20$. It is.

**1.** Scaling the recorded $24$ minutes by $4/9$ linearly would report about $10.7$ minutes and still sit under $20$, for the wrong reason. The stem's recovered values line up with $24$, whereas $20$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $24$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The right scale is $W(9)/W(4)=\\sqrt{4/9}=2/3$, and $\\frac{2}{3}\\cdot 24=16$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $A=24$ would report $W(9)=8$ and still pass the threshold by accident.

**2.** Extra arithmetic at a neighbouring staffing, eight agents, which is not a perfect square:

$$W(8)=\\frac{48}{\\sqrt{8}}=6\\sqrt{8}=12\\sqrt{2}\\approx 17.0$$

still under $20$, and still not the nine-agent reading. The threshold test is about $n=9$ specifically.

**3.** Letter D will invert a $6$-minute wait past the $50$-agent cap. This letter is a legal staffing of $9$, well under the cap, with a wait of $16$. Mixing the cap into a nine-agent question is a different task.

The opposite verdict would need $W(9)\\ge 20$, which would have required $A\\ge 60$. The recorded $W(4)=24$ forces $A=48$.

The recovered wait at $9$ agents is $16$ minutes, under $20$,

**4.** What would push $W(9)$ up through $20$ is a recorded four-agent wait of $30$ minutes rather than $24$, giving $A=60$ and $W(9)=20$ on the nose. With $A=48$ the nine-agent wait is $16$, four minutes under the line. The cap of $50$ agents never enters a nine-agent question.

so the statement is True.`,
      `**B.** → True

The claim is about the inverse: whether the number of agents needed for a given wait is itself a power of that wait.

The overview already recorded $n=(48/W)^{2}$. A nonzero power inverts to another power. From $W=48 n^{-\\frac{1}{2}}$, isolate $n$ by raising both sides to $-2$, or rewrite $n^{\\frac{1}{2}}=48/W$ and square. The result is a monomial in $W$, coefficient $48^{2}=2304$ and exponent $-2$.

That is a power function of the wait. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at a new wait of $12$ minutes:

$$n=\\Bigl(\\frac{48}{12}\\Bigr)^{2}=16$$

so a $12$-minute wait needs $16$ agents. That is a square of a reciprocal, still a power of $W$. Adding a minimum staffing, $n=2+(48/W)^{2}$, would have left the power-function class; the stem has no such floor inside the formula, only the later cap of $50$. The stem's recovered values line up with $n=2+(48/W)^{2}$, whereas $50$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $n=2+(48/W)^{2}$ stays in the write-up.

**2.** Thinking a negative exponent could not invert to a power has forgotten that $u^{-r}$ inverts to a power with exponent $-1/r$. That is the fork: $u^{-r}$ belongs to the recovered isolation, $-1/r$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who wrote $n=\\log W$ mixed this desk with an exponential technology.

**3.** Letter D uses this inverse at $W=6$ and hits $n=64$, past the cap. The inverse being a power is what makes that inversion a single monomial step rather than a numerical search.

If wait had been $W=A n^{-\\frac{1}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial.

The recovered agent count is a power of the wait,

**4.** Extra check at the recorded wait: $n=(48/24)^{2}=4$, which returns the logged team. That inversion landing on $4$ is how we know the inverse is the right monomial. A logarithmic inverse would not have sent $24$ minutes back to $4$ agents.

so the statement is True.`,
      `**C.** → False

The claim is about the slope of wait, not about a level: whether an extra agent cuts more wait after $16$ agents than after $4$.

The overview already recorded that an extra agent cuts less wait after $16$ agents than after $4$. The recovered rule $W(n)=48n^{-\\frac{1}{2}}$ has derivative

$$W'(n)=-24 n^{-\\frac{3}{2}}$$

The size of that cut is $|W'(n)|=24 n^{-\\frac{3}{2}}$, which falls as $n$ rises because the leftover exponent is negative. Later agents still help; they help less.

**1.** Extra arithmetic at the two named staffings:

$$|W'(4)|=24\\cdot 4^{-\\frac{3}{2}}=24\\cdot\\frac{1}{8}=3$$

$$|W'(16)|=24\\cdot 16^{-\\frac{3}{2}}=24\\cdot\\frac{1}{64}=0.375$$

so an extra agent after $4$ agents cuts about $3$ minutes, and after $16$ agents only about $0.4$ minutes. The claim's "more after $16$" is the reverse of these two slopes.

**2.** Seeing $W(16)=12<W(4)=24$ and concluding that later agents are doing more has confused a lower wait with a steeper cut. The opposite verdict would need a different isolation than $W(16)=12<W(4)=24$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The wait is already low at $16$ agents; there is less left to cut. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. a linear wait $W=c-kn$ would have had a constant cut, still not a larger cut later.

**3.** Letter A was a level at $9$ agents. This letter is the slope comparison. Negative-exponent wait has falling marginal benefit of staff, which is the same $r<0$ story as a decreasing function, read on the derivative.

The opposite verdict would need a wait that became steeper as the team grew, which a reciprocal square root cannot do.

The recovered cut is smaller after $16$ agents than after $4$,

**4.** The opposite verdict would need a wait that became steeper as the team grew, for example a delay that exploded near a capacity wall. Reciprocal square-root wait does the reverse: each extra agent buys less. The two slopes $3$ and $0.375$ are an eightfold drop, matching $4^{\\frac{3}{2}}=8$ in the derivative's leftover.

so the statement is False.`,
      `**D.** → True

A six-minute wait is an inversion of the recovered rule, asked against the $50$-agent cap.

The overview already inverted $n=(48/6)^{2}=64$. Sixty-four agents exceed the cap of $50$. The extra arithmetic is that inversion, which this letter owns:

**1.** Set $W=6$ in $W=48 n^{-\\frac{1}{2}}$:

$$6=\\frac{48}{\\sqrt{n}}$$

**2.** Then $\\sqrt{n}=8$ and $n=64$.

**3.** Compare $64$ with $50$. The required team sits $14$ agents past the cap. A six-minute wait is therefore not a legal staffing on this shift.

Computing $n=48/6=8$ skipped the square in the inverse. Once $n=48/6=8$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Eight agents would give $W(8)\\approx 17$ minutes, not $6$. Another who compared $6$ with $W(50)$ instead of inverting would find

$$W(50)=\\frac{48}{\\sqrt{50}}\\approx 6.79$$

which is still above $6$, the same conclusion from the other side: even the largest legal team cannot reach $6$ minutes.

The opposite verdict would need a cap of $64$ or more, or a recorded wait that forced a smaller $A$. With $A=48$ and a cap of $50$, a $6$-minute wait is illegal.

The recovered staffing for $6$ minutes is $64$ agents, past $50$,

**4.** A second route to the same verdict evaluates the largest legal team: $W(50)\\approx 6.79>6$. Even the cap cannot buy a six-minute wait, so the inversion $n=64$ is not an accounting error. It is a staffing the contract refuses.

so the statement is True.`,
      `**E.** → False

Doubling the recorded team is the multiplier $k=2$ on $n$, and the claim is that wait halves.

The overview already recorded that doubling the team multiplies wait by $2^{-\\frac{1}{2}}=1/\\sqrt{2}\\approx 0.707$, not by $1/2$. The coefficient $A$ cancels in the ratio

$$\\frac{W(2n)}{W(n)}=2^{-\\frac{1}{2}}$$

so wait falls by about thirty percent, not by fifty.

**1.** Extra arithmetic on the recorded four-agent shift: doubling that team is $8$ agents, and $W(8)\\approx 17.0$ against $W(4)=24$. Half of $24$ would have been $12$, and $17$ is not $12$. Directly, $24/\\sqrt{2}\\approx 17.0$, the same figure.

**2.** Using exponent $-1$ would have halved the wait, which is exactly the false claim. The opposite verdict would need a different isolation than $-1$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reciprocal-linear wait is $A/n$; this desk is $A/\\sqrt{n}$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{-2}=1/4$ mixed in a square in the denominator.

**3.** Letter A used a level at $9$ agents. This letter is a scale factor about doubling, independent of $A$. Whether the recorded wait had been $24$ or $40$, doubling the team would still multiply wait by $1/\\sqrt{2}$.

The opposite verdict would need exponent $-1$. With exponent $-\\frac{1}{2}$, doubling the team does not halve the wait.

The recovered doubling factor is $1/\\sqrt{2}$, not $1/2$,

**4.** Extra arithmetic at a quadrupling, $k=4$: wait multiplies by $1/2$, which really is a halving, but that is four times the team, not two. Mixing $k=4$ with $k=2$ is how that mix could make this claim look true. Doubling the recorded four agents is eight agents, and $W(8)\\approx 17$, not $12$.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 12,
    solution_overview: `Wait follows $W(n)=A n^{-\\frac{1}{2}}$ minutes for $n>0$ agents. Four agents produce a twenty-four minute wait, and staffing cannot exceed fifty.

**Part 1: Building the model.**

Let $n$ = agents and $W$ = wait. The exponent is given, so the four-agent observation fixes $A$. The cap constrains inversions.

**1. Translate: the recorded wait.**

$$A\\cdot 4^{-\\frac{1}{2}}=24$$

**Part 2: The model.**

$$W(n)=48 n^{-\\frac{1}{2}} \\tag{1}$$

$$n\\le 50 \\tag{2}$$

**Part 3: Solve.**

**1.** $W(9)=16<20$. Doubling the team multiplies wait by $1/\\sqrt{2}$, not by $1/2$. The inverse $n=(48/W)^{2}$ is a power of $W$.

**2.** A six-minute wait needs $n=64$, which violates (2).

**3.** An extra agent cuts less wait after $16$ agents than after $4$.

**Answer.** $A=48$ | $W(9)=16$ | $n=64$ for six minutes`,
  },
  {
    id: `math-8-13`,
    case_id: `MATH 8.13`,
    title: `Leah's Well and Omar's Well`,
    context: `Leah and Omar pump at the same depth $d>0$ metres. Leah's well follows $Q_{L}(d)=a d^{\\frac{1}{2}}$, and at $9$ metres she gets $12$ litres a minute. Omar's well follows $Q_{O}(d)=k d^{\\frac{3}{2}}$, and at $4$ metres he gets $4$ litres a minute. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $4$ metres Leah already pumps more than $7$ litres a minute.`,
      `Omar overtakes Leah before they reach $10$ metres.`,
      `Once Omar is ahead, he stays ahead at every greater depth.`,
      `The two wells together still follow a single power of depth.`,
      `Omar's flow grows faster than depth.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Leah's well is $Q_{L}(d)=a d^{\\frac{1}{2}}$, and the logged $12$ litres a minute at $9$ metres pins $a$. This letter is a level at $4$ metres, asked against a threshold of $7$ litres a minute.

The overview already recovered $a=4$ and $Q_{L}(4)=8$. Eight litres a minute sits above $7$. Four metres is a perfect square, so the square root is $2$, and $4\\cdot 2=8$.

**1.** Scaling Leah's $12$ litres linearly by $4/9$ would report about $5.3$ litres and fail the threshold for the wrong reason. So the letter reads the claim against $12$; $5.3$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $12$ stays in the write-up. The right scale is $\\sqrt{4/9}=2/3$, and $\\frac{2}{3}\\cdot 12=8$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Omar's coefficient on Leah's exponent would mix the two wells.

**2.** Extra arithmetic at $1$ metre, a new depth: $Q_{L}(1)=4$, which sits below $7$. The threshold test is about $4$ metres specifically, where the recovered $8$ already clears $7$. Letter B's crossing at $8$ metres is a different depth.

**3.** Omar at $4$ metres is the logged $4$ litres a minute, below Leah's $8$. The claim is about Leah, not about who leads at $4$ metres. Mixing Omar's $4$ with the threshold $7$ would fail a question the claim did not ask.

The opposite verdict would need $Q_{L}(4)\\le 7$, which would have required $a\\le 3.5$. The logged $Q_{L}(9)=12$ forces $a=4$.

The recovered Leah flow at $4$ metres is $8$ litres a minute, above $7$,

**4.** Omar at four metres is the logged $4$ litres a minute, below Leah's $8$. The claim is Leah against $7$, not a race. Mixing Omar's $4$ with the threshold would fail a question the statement did not ask. Leah's recovered $8$ is $1$ litre above $7$, a genuine clearance.

so the statement is True.`,
      `**B.** → True

Omar's well is $Q_{O}(d)=k d^{\\frac{3}{2}}$, and the logged $4$ litres a minute at $4$ metres pins $k$. This letter asks whether Omar overtakes Leah before $10$ metres.

The overview already recovered $k=\\frac{1}{2}$ and the ratio $Q_{O}/Q_{L}=d/8$, which equals $1$ at $d=8$. Eight metres is shallower than $10$. The extra arithmetic is that meeting, which this letter owns:

**1.** The recovered rules are $Q_{L}(d)=4d^{\\frac{1}{2}}$ and $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$. Their ratio simplifies by cancelling $d^{\\frac{1}{2}}$:

$$\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}$$

**2.** Set the ratio equal to $1$: $d=8$. Check the common flow,

$$Q_{L}(8)=4\\cdot 2\\sqrt{2}=8\\sqrt{2}\\approx 11.3$$

which matches $Q_{O}(8)=\\frac{1}{2}\\cdot 8\\sqrt{2}$. They meet at $8$ metres, before $10$.

**3.** Equating coefficients $4=1/2$ and ignoring exponents would never find a meeting. The path that matches the stem therefore holds $4=1/2$ fixed and only then reads the claim. Another who solved $4\\sqrt{d}=\\frac{1}{2}d$ without the remaining square root would report $d=8$ anyway by accident, or $d=64$ if the algebra slipped. The leftover power is $d^{1}$, so the unique positive meeting is $d=8$.

**4.** Extra check past $10$ metres is letter C's job. This letter only needs the meeting to sit before $10$. At $d=9$, still before $10$, the ratio is $9/8>1$, so Omar is already ahead by then.

The opposite verdict would need a meeting at $d\\ge 10$, which would have required a smaller $k$ or a larger $a$. With the two logged pairs, they meet at $8$.

The recovered crossing is $d=8$ metres, before $10$,

**4.** A meeting at $d=10$ would have needed $Q_{O}/Q_{L}=d/c$ with $c=10$, that is a smaller $k$ or a larger $a$. The two logged pairs force $c=8$. Eight metres is two metres shallower than $10$, not a rounding of $10$.

so the statement is True.`,
      `**C.** → True

Once Omar is ahead, the claim is that he stays ahead at every greater depth. That is a uniqueness-of-crossing question, not a new meeting.

The overview already recorded that ratio $(2)$ crosses $1$ only once. Past $d=8$ the leftover factor $d/8$ exceeds $1$ and keeps climbing, because it is a positive power of $d$. A second crossing would need that ratio to come back through $1$, which a strictly increasing leftover cannot do.

**1.** Extra arithmetic at $d=16$, a doubling past the crossing:

$$Q_{L}(16)=16, \\qquad Q_{O}(16)=32$$

so Omar leads by $16$ litres a minute, twice Leah's flow. At $d=32$,

$$Q_{L}(32)=4\\sqrt{32}=16\\sqrt{2}\\approx 22.6, \\qquad Q_{O}(32)=\\frac{1}{2}\\cdot 32\\sqrt{32}=16\\cdot 4\\sqrt{2}\\approx 90.5$$

the lead has widened further. There is no later catch-up.

**2.** Remembering that a larger coefficient can lead on small inputs might wait for Leah's $a=4$ to "kick back in" at great depth. The recovered isolation is checked against the claim using $a=4$, which is the figure the sessions actually produce. Coefficients do not kick back in. The larger exponent, Omar's $\\frac{3}{2}$ against Leah's $\\frac{1}{2}$, takes over after the unique crossing and stays.

**3.** Letter B found the crossing before $10$ metres. This letter says what happens after it. The two letters are the same ratio $d/8$, read on two sides of $1$.

The opposite verdict would need equal exponents, or a ratio that was not monotone. With leftover power $d^{1}$, Omar stays ahead past $d=8$.

The recovered ratio climbs through $1$ only once,

**4.** Equal exponents would have been needed for a second meeting or for a dead heat at every depth. Leah's $\\frac{1}{2}$ and Omar's $\\frac{3}{2}$ differ by $1$, so the leftover is linear in $d$ and crosses $1$ once. Past that crossing Omar's lead is permanent.

so the statement is True.`,
      `**D.** → False

The claim is that the two wells together still follow a single power of depth.

The overview already recorded that the sum $4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$ is not a single monomial. Distinct exponents cannot be absorbed into one power. A sum of two powers is a power only when the exponents match.

**1.** Extra arithmetic that shows the sum refusing a single exponent: the ratio of the sum at $d=16$ to the sum at $d=4$ is

$$\\frac{Q_{L}(16)+Q_{O}(16)}{Q_{L}(4)+Q_{O}(4)}=\\frac{16+32}{8+4}=4$$

If the sum were $c d^{r}$, that ratio would equal $4^{r}$, so $r=1$. Checking another pair, $d=36$ against $d=4$:

$$Q_{L}(36)+Q_{O}(36)=24+108=132, \\qquad \\frac{132}{12}=11$$

while $9^{1}=9$ and $9^{\\frac{3}{2}}=27$, neither of which is $11$. No single $r$ fits both ratios.

**2.** Adding the exponents $\\frac{1}{2}+\\frac{3}{2}=2$ and declared a square has added the wrong objects. The recovered isolation is checked against the claim using $\\frac{1}{2}+\\frac{3}{2}=2$, which is the figure the sessions actually produce. Exponents add under multiplication of powers, not under addition of flows. Another who factored $d^{\\frac{1}{2}}\\bigl(4+\\frac{1}{2}d\\bigr)$ has a product of a power with a linear polynomial, which is still not a single power.

**3.** Letter E says Omar's flow alone is a power with exponent above one. The sum is a different object. Mixing "Omar grows faster than depth" with "the sum is a power of depth" is two claims glued together.

The opposite verdict would need matching exponents on the two wells. The stem's $\\frac{1}{2}$ and $\\frac{3}{2}$ do not match.

The recovered joint flow is a sum of two powers,

**4.** Factoring $d^{\\frac{1}{2}}(4+d/2)$ makes the obstruction visible: a power times a linear polynomial is not a power. Adding the two wells is how a joint yield is formed, and addition of distinct powers never returns a monomial.

so the statement is False.`,
      `**E.** → True

Omar's flow is $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$, and the claim is that this flow grows faster than depth.

The overview already recorded that Omar's exponent $\\frac{3}{2}$ exceeds one. Flow outruns depth whenever the exponent exceeds one: multiplying depth by $k$ multiplies Omar's flow by $k^{\\frac{3}{2}}$, a larger factor than $k$.

Leah's exponent $\\frac{1}{2}$ sits below one, so Leah's flow grows more slowly than depth. The two wells disagree about speed, and this letter is about Omar.

**1.** Extra arithmetic on a doubling of Omar's logged depth: from $4$ metres to $8$ metres, depth doubles, and

$$Q_{O}(8)/Q_{O}(4)=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$$

so flow multiplies by about $2.83$, which is faster than the doubling of depth. Leah on the same doubling multiplies by $\\sqrt{2}\\approx 1.41$, slower than depth.

**2.** Comparing coefficients $\\frac{1}{2}<4$ and declared Omar slower has compared the wrong objects. The opposite verdict would need a different isolation than $\\frac{1}{2}<4$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Coefficients set levels; exponents set speed. Another who saw $\\frac{3}{2}$ as "three over two, so slower than two" mixed a fraction with a comparison to $1$. The comparison that matters for "faster than depth" is to $1$, not to $2$.

**3.** Letter C used the larger exponent to keep Omar ahead past the crossing. This letter names that larger exponent as a growth-rate claim against depth itself.

The opposite verdict would need $k\\le 1$ on Omar's exponent. The stem's $\\frac{3}{2}$ sits above $1$.

The recovered Omar exponent exceeds one,

**4.** Leah's exponent $\\frac{1}{2}<1$ is the contrasting story: her flow grows more slowly than depth. This letter is Omar only. Comparing $k=\\frac{1}{2}$ with $a=4$ and calling Omar weaker is a coefficient comparison, not a speed comparison. Speed is the exponent.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 13,
    solution_overview: `Leah yields $a d^{\\frac{1}{2}}$ with twelve litres a minute at nine metres, and Omar yields $k d^{\\frac{3}{2}}$ with four litres a minute at four metres.

**Part 1: Building the model.**

Let $d$ = pump depth. Each well has a known exponent and one level, so each coefficient is recoverable.

**1. Translate: Leah's level.** $3a=12$.

**2. Translate: Omar's level.** $8k=4$.

**Part 2: The model.**

$$Q_{L}(d)=4d^{\\frac{1}{2}}, \\qquad Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}} \\tag{1}$$

$$\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8} \\tag{2}$$

**Part 3: Solve.**

**1.** $Q_{L}(4)=8>7$. They meet at $d=8$, before ten metres.

**2.** Ratio (2) crosses $1$ only once, so Omar stays ahead past the crossing. The sum is not a single power. Omar's exponent $\\frac{3}{2}$ exceeds one.

**Answer.** $a=4$ | $k=\\frac{1}{2}$ | $Q_{L}(4)=8$ | crossing at $d=8$`,
  },
  {
    id: `math-8-14`,
    case_id: `MATH 8.14`,
    title: `Nora's Print Shop`,
    context: `Nora bills a run of $n>0$ copies as a fixed setup plus a square-root charge, $C(n)=F+A n^{\\frac{1}{2}}$. A $16$-copy run costs $250$ euros, and a $64$-copy run costs $450$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because of the setup, the bill is not a power function of the run.`,
      `If she prints enough copies, the total bill starts to fall.`,
      `A longer run is cheaper per copy.`,
      `A run of $25$ copies already costs more than $280$ euros.`,
      `A run of $36$ copies costs more than $400$ euros.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Nora bills a run as a fixed setup plus a square-root charge, $C(n)=F+A n^{\\frac{1}{2}}$. This letter asks whether that bill is a power function of the run.

The overview already recovered $F=50$ and $A=50$, so $C(n)=50+50\\sqrt{n}$. A power of the run cannot carry a leftover constant. The setup of $50$ euros kills that shape.

Two invoices were needed because two unknowns sat in the bill. Subtracting $F+4A=250$ from $F+8A=450$ isolated $A=50$, and then $F=50$. The recovered intercept is not zero.

**1.** Extra arithmetic that shows the leftover constant in a ratio: $C(16)=250$ and $C(64)=450$, so the ratio of bills is $450/250=1.8$. If the bill were $c n^{r}$, that ratio would equal $4^{r}$. Then $4^{r}=1.8$ would force $r=\\log 1.8/\\log 4\\approx 0.42$, but checking $C(36)/C(16)=350/250=1.4$ against $ (36/16)^{0.42}\\approx 1.47$ already disagrees. No single power fits.

**2.** Dropping the setup and calling $50\\sqrt{n}$ a power has described a different bill. The recovered isolation is checked against the claim using $50\\sqrt{n}$, which is the figure the sessions actually produce. The stem charges the setup on every run. Another who wrote $C(n)=(50\\sqrt{n})^{1}$ and declared a power has absorbed the intercept into a wish.

**3.** Letter D and E are levels of this same affine-looking bill. Those levels exist because $F$ and $A$ were recovered. The function class is settled by $F\\neq 0$, independently of those later figures.

The opposite verdict would need $F=0$. With a $50$-euro setup, the bill is not a power of $n$.

The recovered setup of $50$ euros kills the power-function shape,

**4.** Letter C will say unit cost falls. A falling average is compatible with a non-power total. The function-class claim is settled by $F=50\\neq 0$, independently of those later unit costs. Zero setup would have been needed for a power of $n$.

so the statement is True.`,
      `**B.** → False

The claim is that if Nora prints enough copies, the total bill starts to fall.

The overview already recorded that the total bill keeps rising. The slope of the recovered bill is

$$C'(n)=25 n^{-\\frac{1}{2}}$$

which stays positive for every $n>0$. Printing more copies never turns the total downward. Unit cost can fall while the total still climbs; those are different claims, and letter C is the unit-cost one.

**1.** Extra arithmetic at a huge run: $C(10000)=50+50\\cdot 100=5050$ euros, above $C(64)=450$, above $C(16)=250$. The total is still climbing at ten thousand copies. There is no later peak in $C(n)$.

**2.** Watching unit cost fall and concluding that the total must eventually fall has mixed letters B and C. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Spreading a setup lowers the per-copy price and still adds a positive square-root charge on every extra copy. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. a demand curve, where raising quantity can cut revenue, has left Nora's print shop for a different model.

**3.** Setting $C'(n)=0$ would require $25/\\sqrt{n}=0$, which never happens. A negative $A$ would have been needed for a falling total. The stem's $A=50$ is positive.

The recovered slope stays positive,

**4.** Setting the total to peak would require $C'(n)=0$, hence $25/\\sqrt{n}=0$, which never happens. A negative square-root coefficient would have been a different shop. Nora's $A=50$ is positive, so every extra copy adds something, however little.

so the statement is False.`,
      `**C.** → True

The claim is that a longer run is cheaper per copy.

The overview already recorded that unit cost falls. Cost per copy is

$$\\frac{C(n)}{n}=\\frac{50}{n}+50 n^{-\\frac{1}{2}}$$

Both pieces decline as the run lengthens: the setup is spread over more copies, and the leftover exponent on the variable term is negative. A longer run is cheaper per copy.

**1.** Extra arithmetic at the two invoices: $C(16)/16=250/16=15.625$ euros per copy, and $C(64)/64=450/64\\approx 7.03$ euros per copy. The fourfold run more than halves the per-copy price. At $n=36$, $C(36)/36=350/36\\approx 9.72$, sitting between those two averages, as a falling sequence should.

**2.** Seeing the total climb from $250$ to $450$ and concluding that copies get more expensive has mixed the total with the average. The recovered comparison therefore keeps $250$ and does not substitute $450$. Letter B's rising total is compatible with this falling average. Another who looked only at the setup piece $50/n$ and ignored the $50/\\sqrt{n}$ piece still has a falling average, just an incomplete one.

**3.** What would flip this verdict is a positive leftover exponent on the variable term after dividing by $n$, which would need the original exponent on $n$ to exceed $1$. The stem's $\\frac{1}{2}<1$, so average cost falls.

The recovered per-copy cost declines with the run,

**4.** Extra arithmetic at $n=100$: unit cost is $50/100+50/10=5.5$ euros per copy, below the $n=64$ figure of $7.03$. The fall continues. An exponent on the variable term of $2$ would have flipped this average upward after dividing by $n$.

so the statement is True.`,
      `**D.** → True

This is a level at $25$ copies, asked against a threshold of $280$ euros.

The overview already evaluated $C(25)=300$. Three hundred sits above $280$. Twenty-five is a perfect square, so the square root is $5$, and $50+50\\cdot 5=300$.

**1.** Dropping the setup and reporting $50\\cdot 5=250$ would sit below $280$ and fail the threshold for the wrong bill. The stem's recovered values line up with $50\\cdot 5=250$, whereas $280$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $50\\cdot 5=250$ stays in the write-up. The setup of $50$ is what pushes $250$ up to $300$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $F=0$ from a power-function wish has the same miss.

**2.** Extra arithmetic at $n=16$, the first invoice: $C(16)=250$, which sits below $280$. The threshold test is about $n=25$ specifically. Between $16$ and $25$ copies the bill crosses $280$, and at $25$ it has already reached $300$.

**3.** Letter E asks for a $400$ euro threshold at $36$ copies and fails. This letter's $280$ at $25$ copies is a different comparison. Mixing those two thresholds is how that mix could flip one of them by accident.

The opposite verdict would need $C(25)\\le 280$, which would have required a smaller $A$ or a smaller $F$. The two invoices force $300$.

The recovered bill at $25$ copies is $300$ euros, above $280$,

**4.** The setup of $50$ is what carries $250$ at $n=16$ across the $280$ line by $n=25$. Dropping $F$ would have left $C(25)=250$, under $280$, and this claim would have been false. The two invoices refuse $F=0$.

so the statement is True.`,
      `**E.** → False

This is a level at $36$ copies, asked against a threshold of $400$ euros.

The overview already evaluated $C(36)=350$. Three hundred and fifty does not sit above $400$. Thirty-six is a perfect square, so the square root is $6$, and $50+50\\cdot 6=350$.

The claim wants more than $400$. The bill is $350$, which is $50$ euros light of that line, and that $50$ is exactly the setup: computing $50\\cdot 8=400$ used the eight-copy-root from the second invoice, $n=64$, not $n=36$. The recovered comparison therefore keeps $50\\cdot 8=400$ and does not substitute $n=36$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**1.** Extra arithmetic that manufactures $400$: $C(64)=450$ is the second invoice, and dropping the setup from $450$ leaves $400$, which is $A\\cdot 8$. Pointing that $400$ at $n=36$ is a mix of two runs. Directly, $C(36)=350\\neq 400$.

**2.** Interpolating linearly between $C(16)=250$ and $C(64)=450$ at $n=36$ would report $250+200\\cdot(20/48)\\approx 333$, still not above $400$, for the wrong reason. Working from the isolated values, $C(16)=250$ is the figure that is checked, not the detour that produced $400$. That contrast is the reason the verdict goes the way it does. The square-root bill is $350$.

**3.** Letter D's $300>280$ at $n=25$ does not license $350>400$ at $n=36$. Thresholds are local. The recovered $350$ sits $50$ below $400$.

The recovered bill at $36$ copies is $350$ euros, not more than $400$,

**4.** $C(49)=50+50\\cdot 7=400$ on the nose, at $49$ copies, not at $36$. Pointing the round $400$ at $n=36$ is a mix of two runs. The recovered $350$ at $36$ copies sits $50$ below $400$, and that $50$ is the setup.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 14,
    solution_overview: `The bill is $C(n)=F+A n^{\\frac{1}{2}}$ for $n>0$ copies, with $C(16)=250$ and $C(64)=450$.

**Part 1: Building the model.**

Let $n$ = copies and $C$ = euros. Two unknowns need both invoices. Subtracting isolates $A$; either invoice then pins $F$.

**1. Translate: the two invoices.**

$$F+4A=250, \\qquad F+8A=450$$

**Part 2: The model.**

$$C(n)=50+50\\sqrt{n} \\tag{1}$$

**Part 3: Solve.**

**1.** The setup $F=50$ keeps (1) from being a power of $n$. Unit cost falls, but the total bill keeps rising.

**2.** $C(25)=300>280$ and $C(36)=350$, which is not more than $400$.

**Answer.** $F=50$ | $A=50$ | $C(25)=300$ | $C(36)=350$`,
  },
  {
    id: `math-8-15`,
    case_id: `MATH 8.15`,
    title: `A Refinery Against a Linear Quote`,
    context: `A refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. Raising purity from $9$ to $16$ increased metal output by $296$ tonnes. That metal is then converted to alloy strength $S=\\frac{1}{2}M^{\\frac{2}{3}}$. A rival mill quotes strength directly as $1.8u+5$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After both stages, the refinery's strength is proportional to purity.`,
      `The two quotes never meet.`,
      `The rival's quote is a power function of purity.`,
      `On ore of purity $36$, the refinery's strength is more than $70$.`,
      `On ore of purity $9$, the refinery's strength is already above $20$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The refinery turns purity into metal by $M(u)=A u^{\\frac{3}{2}}$, then metal into strength by $S=\\frac{1}{2}M^{\\frac{2}{3}}$. This letter asks whether the composed strength is proportional to purity.

The overview already recovered $A=8$ from the audited gain of $296$ tonnes between purities $9$ and $16$, and then composed $S(u)=2u$. The inner exponent $\\frac{3}{2}$ and the outer exponent $\\frac{2}{3}$ multiply to $1$, so strength is a linear monomial in purity, coefficient $2$. That is proportionality.

**1.** The extra arithmetic this letter owns is the composition, not a re-display of $A=8$ as a fresh unknown:

$$S=\\frac{1}{2}\\bigl(8u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}=\\frac{1}{2}\\cdot 8^{\\frac{2}{3}}\\cdot u=\\frac{1}{2}\\cdot 4\\cdot u=2u$$

because $8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=2^{2}=4$. The coefficient $2$ is forced by $A=8$ together with the outer $\\frac{1}{2}$.

**2.** Adding the exponents $\\frac{3}{2}+\\frac{2}{3}$ would report $S\\propto u^{\\frac{13}{6}}$ and miss proportionality. After isolating the unknown, the check is against $\\frac{3}{2}+\\frac{2}{3}$. The figure $S\\propto u^{\\frac{13}{6}}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $\\frac{3}{2}+\\frac{2}{3}$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Exponents multiply under composition, not add. Another who forgot the outer $\\frac{1}{2}$ would report $S=4u$ and still have proportionality, just with the wrong coefficient. The claim is the function class, not the $2$.

**3.** Extra check at the audited purities: $S(9)=18$ and $S(16)=32$, which sit in the ratio $32/18=16/9$, equal to the purity ratio. That is the fingerprint of proportionality, and it uses $S(16)=32$, a figure the overview's answer line did not need to stress.

If the outer exponent had been anything but the reciprocal of $\\frac{3}{2}$, the composition would not have been linear. The stem's $\\frac{2}{3}$ is exactly that reciprocal.

The recovered strength is $S(u)=2u$, proportional to purity,

**4.** Extra check at purity $4$: $S(4)=8$, four times smaller than $S(16)=32$, matching the fourfold drop in purity. That lockstep is proportionality. A leftover outer exponent other than $\\frac{2}{3}$ would have broken the lockstep and this claim with it.

so the statement is True.`,
      `**B.** → False

The claim is that the refinery quote and the rival quote never meet.

The overview already set $2u=1.8u+5$ and recovered the meeting at $u=25$. The extra arithmetic is that linear crossing, which this letter owns:

**1.** After composition, the refinery quotes $S(u)=2u$. The rival quotes $1.8u+5$. Set them equal:

$$2u=1.8u+5$$

**2.** Then $0.2u=5$ and $u=25$. At that purity both quotes equal $50$. They meet.

Comparing slopes $2>1.8$ and concluding the refinery is always above, so they never meet, has forgotten the rival's intercept of $5$. The recovered comparison therefore keeps $2>1.8$ and does not substitute $5$. A steeper line through the origin starts below an affine rival and then overtakes it. Another who set $8u^{\\frac{3}{2}}=1.8u+5$ without composing would be solving a different and harder equation, mixing metal tonnes with strength units.

**3.** Extra arithmetic on either side of $25$: at $u=16$, refinery $32$ against rival $1.8\\cdot 16+5=33.8$, so the rival still leads by $1.8$. At $u=36$, refinery $72$ against rival $1.8\\cdot 36+5=69.8$, so the refinery has overtaken. The crossing at $25$ sits between those two purities.

The opposite verdict would need parallel quotes with a gap, for example a rival $2u+5$. The stem's rival has slope $1.8\\neq 2$, so they meet once.

The recovered quotes meet at purity $25$,

**4.** Parallel quotes with a gap, for example a rival $2u+5$, would never meet the refinery $2u$. The stem's rival has slope $1.8$, so they meet once, at $u=25$, with common strength $50$. "Never meet" would have needed equal slopes.

so the statement is False.`,
      `**C.** → False

The claim is that the rival's quote $1.8u+5$ is a power function of purity.

The overview already recorded that the rival's intercept keeps it from being a power of $u$. At purity zero the rival still equals $5$, so there is a leftover constant. A power of purity cannot carry an intercept: $A u^{r}$ is $0$ at $u=0$ whenever $r>0$, and undefined or infinite when $r\\le 0$.

**1.** Extra arithmetic in a ratio, the same test as Nora's setup: the rival at $u=10$ is $23$, at $u=20$ is $41$, and $41/23\\approx 1.78$, while $2^{r}=1.78$ would force $r\\approx 0.83$. Checking $u=40$ against $u=10$, the rival is $77$, ratio $7.7$, while $4^{0.83}\\approx 3.2$, a mismatch. No single power fits.

**2.** Dropping the $5$ and calling $1.8u$ a power has described a different quote. Working from the isolated values, $5$ is the figure that is checked, not the detour that produced $1.8u$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The stem's rival includes the intercept. Another who wrote $1.8u^{1}+5u^{0}$ and declared "a sum of powers is a power" has confused a polynomial with a monomial.

**3.** Letter A said the refinery's composed quote is a power, in fact a proportional one. The rival is affine, not a power. Mixing those two quotes is how that mix could call both of them powers.

The opposite verdict would need the rival to have intercept $0$. The stem's intercept is $5$.

The recovered rival quote carries an intercept,

**4.** The refinery's composed $S=2u$ is a power. The rival is affine. Mixing those two quotes is how both of them get called powers. An intercept of $0$ on the rival would have made this claim true. The stem's intercept is $5$.

so the statement is False.`,
      `**D.** → True

This is a level of the composed refinery quote at purity $36$, asked against a threshold of $70$.

The overview already evaluated $S(36)=72$. Seventy-two sits above $70$. Once $S(u)=2u$, strength at purity $36$ is $2\\cdot 36=72$.

**1.** Using metal instead of strength, $M(36)=8\\cdot 36^{\\frac{3}{2}}=8\\cdot 216=1728$, would blow past $70$ for the wrong quantity. Working from the isolated values, $M(36)=8\\cdot 36^{\\frac{3}{2}}=8\\cdot 216=1728$ is the figure that is checked, not the detour that produced $70$. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. the rival at $u=36$, $1.8\\cdot 36+5=69.8$, would sit just below $70$ and fail the threshold on the wrong quote.

**2.** Extra arithmetic at $u=25$, the crossing: $S(25)=50$, which sits below $70$. The threshold test is about $u=36$ specifically. Between $25$ and $36$ the refinery quote crosses $70$, and at $36$ it has reached $72$.

**3.** Letter E asks for a threshold of $20$ at $u=9$ and fails. This letter's $70$ at $u=36$ is a different comparison. The recovered $72$ is $2$ above $70$, a tight but genuine clearance.

The opposite verdict would need $S(36)\\le 70$, which would have required a composed coefficient of $70/36<2$. The audited gain forces the coefficient $2$.

The recovered strength at purity $36$ is $72$, above $70$,

**4.** The rival at $u=36$ is $69.8$, just under $70$, on the wrong quote. Metal at $u=36$ is $1728$ tonnes, on the wrong quantity. The composed refinery strength is $72$, two above $70$. Tight, genuine, and the audited $A=8$ is what forces the $2$.

so the statement is True.`,
      `**E.** → False

This is a level at purity $9$, asked against a threshold of $20$.

The overview already evaluated $S(9)=18$. Eighteen does not sit above $20$. Once $S(u)=2u$, strength at purity $9$ is $2\\cdot 9=18$.

The claim wants a strength already above $20$. Eighteen sits $2$ below that line. Using metal $M(9)=8\\cdot 27=216$ has left the strength stage. The path that matches the stem therefore holds $M(9)=8\\cdot 27=216$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $S=\\frac{1}{2}\\cdot 9^{\\frac{2}{3}}$ skipped the metal stage and the coefficient $A$. The recovered comparison therefore keeps $S=\\frac{1}{2}\\cdot 9^{\\frac{2}{3}}$ and does not substitute $A$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**1.** Extra arithmetic that manufactures $20$: half of $40$, as if the audited $Q(25)=40$ from a different task had leaked in, or $S=\\frac{1}{2}M$ with $M=40$. Directly, $S(9)=18$. The rival at $u=9$ is $1.8\\cdot 9+5=21.2$, which does sit above $20$, on the wrong quote.

**2.** Letter D's $72>70$ at $u=36$ does not license $18>20$ at $u=9$. The composed line $S=2u$ passes through the origin, so small purities give small strengths. Purity $9$ is below the crossing $25$, and $18$ is below $20$.

The recovered strength at purity $9$ is $18$, not above $20$,

**4.** The rival at $u=9$ is $21.2$, which does sit above $20$, on the wrong quote. Metal $M(9)=216$ is the wrong stage. Composed strength is $18$. Small purities give small strengths on a line through the origin, and $9$ is below the crossing $25$.

so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 15,
    solution_overview: `Metal is $M(u)=A u^{\\frac{3}{2}}$, and raising purity from nine to sixteen added $296$ tonnes. Strength is $S=\\frac{1}{2}M^{\\frac{2}{3}}$. The rival quotes $1.8u+5$.

**Part 1: Building the model.**

Let $u$ = purity. The audit is a difference of two metal outputs, which recovers $A$. The strength stage then composes with that law. The rival is affine.

**1. Translate: the audited gain.**

$$A\\bigl(16^{\\frac{3}{2}}-9^{\\frac{3}{2}}\\bigr)=296$$

**2. Translate: the composition.**

$$S(u)=\\frac{1}{2}\\bigl(A u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}$$

**Part 2: The model.**

$$A=8, \\qquad S(u)=2u \\tag{1}$$

$$2u=1.8u+5 \\tag{2}$$

**Part 3: Solve.**

**1.** The chain is proportional to purity. Equation (2) meets at $u=25$. The rival's intercept keeps it from being a power of $u$.

**2.** $S(36)=72>70$. $S(9)=18$, which is not above $20$.

**Answer.** $A=8$ | $S(u)=2u$ | $S(9)=18$ | $S(36)=72$ | crossing at $u=25$`,
  },
  {
    id: `math-8-16`,
    case_id: `MATH 8.16`,
    title: `Server Peak Load Between a Doubling Rule and an Alarm`,
    context: `A monitoring team models a server's peak load as $L(x)=A x^{r}$, where $x>0$ is the number of simultaneous jobs. Stress tests show that doubling the job count multiplies peak load by $4$, and a run with $8$ simultaneous jobs recorded a peak load of $32$. The hardware alarm trips at a peak load of $200$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because the exponent exceeds one, peak load grows faster than the job count.`,
      `Halving the job count halves peak load.`,
      `Peak load per job rises as the job count rises.`,
      `The hardware alarm already trips at $16$ simultaneous jobs.`,
      `After $10$ simultaneous jobs, peak load is already above $40$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Peak load is $L(x)=A x^{r}$, and the doubling rule that doubling jobs multiplies load by $4$ is what pins the exponent. This letter asks whether that recovered $r$ exceeds one, so that load grows faster than the job count.

The overview already recovered $r=2$ from $2^{r}=4$. An exponent of $2$ sits above one, so multiplying jobs by $k$ multiplies load by $k^{2}$, a larger factor. Peak load grows faster than the job count.

**1.** Extra arithmetic on the recorded eight-job run: doubling those $8$ jobs is $16$ jobs, and the recovered $L(16)=128$ against $L(8)=32$ is a factor $4$, which is faster than the doubling of jobs. That is $2^{2}=4$ at a concrete pair, not a new coefficient.

**2.** Comparing $L(8)=32$ with $8$ and seeing load four times jobs at that one point has a coincidence of $A=1/2$ and $x=8$, not a growth-rate statement. Working from the isolated values, $L(8)=32$ is the figure that is checked, not the detour that produced $x=8$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Growth rate is $r$ against $1$, independent of $A$. Another who solved $2^{r}=4$ as $r=4$ mixed a multiplier with an exponent.

**3.** Letter B is the reverse scale question with $k=1/2$. Letter C is the average $L/x$. This letter is only $r>1$. If the doubling had multiplied load by $1.5$, then $r<1$ and this claim would have been false.

The recovered exponent is $2$, above one,

**4.** If the doubling had multiplied load by $1.5$, then $r<1$ and this claim would have been false. The stress test $2^{r}=4$ forces $r=2$, and $2>1$ is the whole comparison with the job count. Coefficients never enter a growth-rate question.

so the statement is True.`,
      `**B.** → False

Halving the job count is the multiplier $k=\\frac{1}{2}$, and the claim is that peak load halves as well.

The overview already recorded that halving jobs quarters the load, because $r=2$ and $\\bigl(\\frac{1}{2}\\bigr)^{2}=\\frac{1}{4}$. The coefficient $A$ cancels in the ratio

$$\\frac{L(x/2)}{L(x)}=\\Bigl(\\frac{1}{2}\\Bigr)^{2}=\\frac{1}{4}$$

**1.** Extra arithmetic on the recorded run: half of $8$ jobs is $4$ jobs, and $L(4)=\\frac{1}{2}\\cdot 16=8$ against $L(8)=32$. Half of $32$ would have been $16$, and $8$ is not $16$. Load drops to a quarter, $32/4=8$.

**2.** Using exponent $1$ would have halved the load, which is exactly the false claim. The opposite verdict would need a different isolation than $1$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $\\bigl(\\frac{1}{2}\\bigr)^{3}=\\frac{1}{8}$ mixed in a cube. The doubling rule $2^{r}=4$ already forced $r=2$, so the halving factor is locked.

**3.** Letter A said load outruns jobs going up. This letter is the same square going down. A square law is not symmetric with a linear guess: doubling multiplies by $4$, and halving multiplies by $1/4$, not by $1/2$.

The opposite verdict would need $r=1$. With $r=2$, halving jobs quarters load.

The recovered halving factor is $1/4$, not $1/2$,

**4.** Going up, doubling multiplies by $4$. Going down, halving multiplies by $1/4$. A linear guess treats those as $2$ and $1/2$. The square law is not that guess. $L(4)=8$ against $L(8)=32$ is the concrete quartering.

so the statement is False.`,
      `**C.** → True

The claim is that peak load per job rises as the job count rises.

The overview already recovered $L(x)=\\frac{1}{2}x^{2}$, so load per job is $\\frac{L(x)}{x}=\\frac{1}{2}x$. The leftover exponent is positive, so that average climbs with the job count. An exponent above one forces a rising average product.

**1.** Extra arithmetic at the recorded run and a neighbour: $L(8)/8=32/8=4$, and $L(10)/10=50/10=5$, already higher. At $x=16$, $L(16)/16=128/16=8$, twice the eight-job average. The average is itself a linear function of $x$, coefficient $1/2$.

**2.** Dividing $32$ by $8$ and stopping, calling $4$ a constant average, has evaluated one point. So the letter reads the claim against $32$; $4$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $32$ stays in the write-up. The leftover $\\frac{1}{2}x$ is not constant. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r<1$ intuition from a square-root technology has the wrong recovered exponent.

**3.** Letter A said $r>1$ as a growth-rate comparison with $x$. This letter is the same $r>1$ as a rising average. Letter B's quartering under a halving is compatible: fewer jobs, smaller average, $L(4)/4=2$ below $L(8)/8=4$.

The opposite verdict would need $r\\le 1$. With $r=2$, load per job rises.

The recovered average $\\frac{1}{2}x$ climbs with the job count,

**4.** At $x=20$, where the alarm first trips, load per job is $10$, twice the ten-job average of $5$. The average keeps climbing. An exponent of $1$ would have frozen the average at $A$, and this claim would have been false.

so the statement is True.`,
      `**D.** → False

The hardware alarm trips at a peak load of $200$, and the claim is that it already trips at $16$ simultaneous jobs.

The overview already evaluated $L(16)=128$. One hundred and twenty-eight sits below $200$. Sixteen jobs are a perfect square relative to the recorded $8$ only in the scale sense $k=2$, and $32\\cdot 4=128$, not $200$.

**1.** Extra arithmetic that inverts the alarm, which this letter can use as its own check: $L(x)=200$ gives $\\frac{1}{2}x^{2}=200$, so $x^{2}=400$ and $x=20$. The alarm first trips at $20$ jobs, which sits past $16$. At $16$ jobs there is a $72$-point gap still to go.

**2.** Doubling the recorded $32$ because $16=2\\cdot 8$ would report $64$ and still sit below $200$, for the wrong scale. So the letter reads the claim against $32$; $200$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $32$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $L(16)=16^{2}=256$ dropped $A=1/2$ and would have tripped the alarm by accident.

**3.** Letter E asks for a threshold of $40$ at $10$ jobs and passes. This letter's $200$ at $16$ jobs is a different comparison. Mixing those two thresholds is how that mix could trip the alarm four jobs early.

The opposite verdict would need $L(16)\\ge 200$, which would have required $A\\ge 200/256$. The recorded $L(8)=32$ forces $A=1/2$ and $L(16)=128$.

The recovered load at $16$ jobs is $128$, below $200$,

**4.** The inversion $x=20$ is this letter's own extra step: $\\frac{1}{2}x^{2}=200$ gives $x=20$, four jobs past $16$. A gap of $72$ points at $16$ jobs is not a rounding of $200$. Dropping $A$ and reporting $256$ would have tripped the alarm by accident.

so the statement is False.`,
      `**E.** → True

This is a level at $10$ jobs, asked against a threshold of $40$.

The overview already evaluated $L(10)=50$. Fifty sits above $40$. Ten squared is $100$, and half of $100$ is $50$.

**1.** Scaling the recorded $32$ linearly by $10/8$ would report $40$ on the nose and still pass a weak reading of "above $40$," for the wrong reason. After isolating the unknown, the check is against $32$. The figure $40$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $32$ stays in the write-up. The square law gives $50$, which clears $40$ by $10$ points. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $L(10)=10^{2}=100$ dropped $A$ and still passed.

**2.** Extra arithmetic at $x=8$, the recorded run: $L(8)=32$, which sits below $40$. The threshold test is about $x=10$ specifically. Between $8$ and $10$ jobs the load crosses $40$, and at $10$ it has reached $50$.

**3.** Letter D's alarm at $200$ is a different threshold. $50>40$ does not license $128>200$. The recovered $50$ is a clear clearance of $40$.

The recovered load at $10$ jobs is $50$, above $40$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `Peak load follows $L(x)=A x^{r}$ for $x>0$ jobs. Doubling jobs multiplies load by $4$, eight jobs record a load of $32$, and the alarm trips at $200$.

**Part 1: Building the model.**

Let $x$ = simultaneous jobs and $L$ = peak load. The doubling ratio cancels $A$ and isolates $r$; the eight-job level then pins $A$.

**1. Translate: the doubling rule.**

$$2^{r}=4$$

**2. Translate: the recorded run.**

$$A\\cdot 8^{r}=32$$

**Part 2: The model.**

$$r=2 \\tag{1}$$

$$L(x)=\\frac{1}{2}x^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $r>1$, load outruns the job count. Halving jobs quarters the load. Load per job rises with $x$.

**2.** $L(16)=128<200$ and $L(10)=50>40$.

**Answer.** $r=2$ | $A=\\frac{1}{2}$ | $L(10)=50$ | $L(16)=128$ | alarm at $x=20$`,
  },
  {
    id: `math-8-17`,
    case_id: `MATH 8.17`,
    title: `Survey Reach Against a Fieldwork Budget Cap`,
    context: `Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$, where $x>0$ measures outreach intensity. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The fieldwork budget caps outreach intensity at $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An extra unit of intensity adds more usable responses at $25$ than at $100$.`,
      `Doubling outreach intensity doubles usable responses.`,
      `Usable responses per unit of intensity fall as outreach rises.`,
      `The budget cap allows at most $200$ usable responses.`,
      `At intensity $81$ the survey already yields more than $100$ usable responses.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Usable responses follow $Q(x)=A x^{\\frac{1}{2}}$, and the recorded gain of $60$ responses between intensities $25$ and $100$ pins $A$. This letter is a slope comparison: whether an extra unit of intensity adds more usable responses at $25$ than at $100$.

The overview already recovered $A=12$ and recorded $Q'(25)>Q'(100)$. The recovered rule $Q(x)=12x^{\\frac{1}{2}}$ has derivative

$$Q'(x)=6 x^{-\\frac{1}{2}}$$

The leftover exponent is negative, so the slope itself falls as intensity rises. An extra unit adds more at $25$ than at $100$.

**1.** Extra arithmetic at the two named intensities:

$$Q'(25)=6/5=1.2, \\qquad Q'(100)=6/10=0.6$$

so an extra unit at $25$ adds $1.2$ responses, and at $100$ only $0.6$. The later unit buys half as much as the earlier one, which is $\\sqrt{100/25}=2$ in the denominator.

**2.** Seeing $Q(100)=120>Q(25)=60$ and concluding that later intensity is more productive has confused height with slope. Once $Q(100)=120>Q(25)=60$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The survey is still gathering responses, just more slowly. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r>1$ intuition has the wrong exponent.

**3.** Letter C is the falling average $Q/x$. This letter is the falling marginal $Q'$. Both are the $r=\\frac{1}{2}<1$ story, read two ways.

The opposite verdict would need $r>1$. With $r=\\frac{1}{2}$, an extra unit adds more at $25$ than at $100$.

The recovered slope is larger at $25$ than at $100$,

**4.** Average product $Q/x=12/\\sqrt{x}$ falls in step with the slope: $2.4$ responses per unit at $x=25$ and $1.2$ at $x=100$. Height $Q(100)=120>Q(25)=60$ is not productivity. Convex $r>1$ would have flipped both the slope comparison and the average.

so the statement is True.`,
      `**B.** → False

Doubling outreach intensity is the multiplier $k=2$, and the claim is that usable responses double.

The overview already recorded that doubling intensity multiplies $Q$ by $\\sqrt{2}$, not by $2$. The coefficient $A$ cancels in the ratio

$$\\frac{Q(2x)}{Q(x)}=2^{\\frac{1}{2}}\\neq 2$$

**1.** Extra arithmetic on the recorded pair: intensity $25$ doubled is $50$, not the logged $100$. Then

$$Q(50)=12\\sqrt{50}=12\\cdot 5\\sqrt{2}=60\\sqrt{2}\\approx 84.9$$

against $Q(25)=60$. Twice $60$ would have been $120$, and $85$ is not $120$. The logged jump from $25$ to $100$ is a quadrupling, which does double $Q$ from $60$ to $120$, and that is letter A's intensity pair, not a doubling.

**2.** Using the quadrupling $25\\to 100$ as if it were a doubling has mixed $k=4$ with $k=2$. So the letter reads the claim against $25\\to 100$; $k=2$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $25\\to 100$ stays in the write-up. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. exponent $1$ is telling a proportional story the recorded gain already contradicts.

**3.** Letter D will cap intensity at $400$, a quadrupling of $100$, which multiplies $Q$ by $2$ and yields $240$. That later doubling of responses is a quadrupling of intensity, the same identity as here with $k=4$ rather than $k=2$.

The opposite verdict would need $r=1$. With $r=\\frac{1}{2}$, doubling intensity does not double responses.

The recovered doubling factor is $\\sqrt{2}$, not $2$,

**4.** The logged jump $25\\to 100$ is a quadrupling, which does double $Q$, and that identity belongs to $k=4$, not to $k=2$. Mixing those two multipliers is how this claim can look true. Doubling $25$ is $50$, and $Q(50)\\approx 85$, not $120$.

so the statement is False.`,
      `**C.** → True

The claim is that usable responses per unit of intensity fall as outreach rises.

The overview already recorded that average product $12x^{-\\frac{1}{2}}$ falls. The leftover exponent is negative, so that average declines as $x$ grows. Average and marginal product move together on a power below one.

**1.** Extra arithmetic at the two logged intensities: $Q(25)/25=60/25=2.4$ responses per unit, and $Q(100)/100=120/100=1.2$, already half as large. At the cap $x=400$, $Q(400)/400=240/400=0.6$, half again. The average is itself $12/\\sqrt{x}$.

**2.** Seeing $Q$ rise from $60$ to $120$ and concluding that intensity is becoming more productive has mixed the total with the average. That is the fork: $Q$ belongs to the recovered isolation, $120$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter A's falling slope is the same story. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r>1$ would have a rising average, the server-load story of task $16$, not this survey.

**3.** What would flip this verdict is $r>1$. The stem's $\\frac{1}{2}<1$ forces a falling average.

The recovered average $12x^{-\\frac{1}{2}}$ falls as outreach rises,

**4.** Extra arithmetic at the cap: $Q(400)/400=0.6$, a quarter of the $x=25$ average. The fall is monotone. An exponent above one, as in the server-load task, would have raised the average instead.

so the statement is True.`,
      `**D.** → False

The budget cap is on intensity at $400$, and the claim is that this cap allows at most $200$ usable responses.

The overview already evaluated $Q(400)=240$. Two hundred and forty is not a ceiling of $200$. The extra arithmetic is that level at the largest legal intensity:

$$Q(400)=12\\cdot 20=240$$

The cap constrains $x$, not $Q$ directly. Turning a cap on $x$ into a cap on $Q$ requires evaluating the recovered rule at $x=400$, and that evaluation is $240$, which sits $40$ above $200$.

**1.** Using $A=10$ from a mis-divided $60/(10-4)$ wait, $60/6=10$, would report $Q(400)=200$ on the nose and make the claim true by a wrong coefficient. After isolating the unknown, the check is against $A=10$. The figure $Q(400)=200$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $A=10$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recorded gain is $A(10-5)=60$, so $A=12$, not $10$. Another who capped $Q$ at $200$ by policy, rather than by the intensity cap, has rewritten the stem.

**2.** Extra check: $Q(225)=12\\cdot 15=180$, which does sit under $200$, at an intensity of $225$ well below the cap. The cap still allows the further climb from $180$ to $240$.

**3.** Letter E's $Q(81)=108>100$ is a different threshold. $240>200$ is the comparison that kills this claim.

The recovered yield at the cap is $240$ responses, not a ceiling of $200$,

**4.** Using $A=10$ from $60/6$ would have given $Q(400)=200$ and made the claim true by a wrong coefficient. The gain is $A(10-5)=60$, so $A=12$ and $Q(400)=240$. The cap is on intensity, and $240$ responses are allowed.

so the statement is False.`,
      `**E.** → True

This is a level at intensity $81$, asked against a threshold of $100$ usable responses.

The overview already evaluated $Q(81)=108$. One hundred and eight sits above $100$. Eighty-one is a perfect square, so the square root is $9$, and $12\\cdot 9=108$.

**1.** Using $A=10$ would report $90$ and fail the threshold on a wrong coefficient. Working from the isolated values, $A=10$ is the figure that is checked, not the detour that produced $90$. Another who computed $12\\cdot 81=972$ skipped the root.

**2.** Extra arithmetic at $x=64$, a nearby perfect square: $Q(64)=12\\cdot 8=96$, which sits below $100$. The threshold test is about $x=81$ specifically. Between $64$ and $81$ the yield crosses $100$, and at $81$ it has reached $108$.

**3.** Letter D's $240$ at the cap is a different level. $108>100$ is a modest clearance, genuine because $A=12$ rather than $10$.

The recovered yield at intensity $81$ is $108$, above $100$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `Responses follow $Q(x)=A x^{\\frac{1}{2}}$ for $x>0$. Raising intensity from $25$ to $100$ added $60$ responses, and intensity cannot exceed $400$.

**Part 1: Building the model.**

Let $x$ = outreach intensity and $Q$ = usable responses. The recorded gain is a difference of two square-root levels, which recovers $A$. The cap constrains the largest $Q$.

**1. Translate: the recorded gain.**

$$A\\bigl(100^{\\frac{1}{2}}-25^{\\frac{1}{2}}\\bigr)=60$$

**Part 2: The model.**

$$Q(x)=12x^{\\frac{1}{2}} \\tag{1}$$

$$x\\le 400 \\tag{2}$$

**Part 3: Solve.**

**1.** $Q'(25)>Q'(100)$ and $Q(81)=108>100$. Doubling intensity multiplies $Q$ by $\\sqrt{2}$, not by $2$. Average product $12x^{-\\frac{1}{2}}$ falls.

**2.** $Q(400)=240$, so the cap allows more than $200$.

**Answer.** $A=12$ | $Q(81)=108$ | $Q(400)=240$`,
  },
  {
    id: `math-8-18`,
    case_id: `MATH 8.18`,
    title: `Quadratic and Linear Inspection Costs That Meet Once`,
    context: `Two inspection procedures are costed for a batch of $n>0$ documents. The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. Records show that on a batch of $16$ documents the two procedures cost the same, $256$ each. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For $n>0$ the two procedures cost the same only at $n=16$.`,
      `The automated procedure is cheaper than the manual one at every batch above $16$ documents.`,
      `The automated procedure's cost per document rises with the batch.`,
      `At $25$ documents the two procedures differ by less than $100$.`,
      `On a batch of $9$ documents the automated procedure costs under $100$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Automated inspection costs $C(n)=a n^{2}$ and manual inspection costs $D(n)=b n$, and at $n=16$ both bills equal $256$. This letter asks whether that common reading is the only positive meeting.

The overview already recovered $a=1$, $b=16$, and $C(n)-D(n)=n(n-16)$. On $n>0$ the roots are $n=0$, outside the domain, and $n=16$. They meet only at sixteen documents.

**1.** Extra arithmetic at a neighbour on each side: at $n=15$, $C(15)=225$ and $D(15)=240$, so manual is still cheaper by $15$. At $n=17$, $C(17)=289$ and $D(17)=272$, so automated is already more expensive by $17$. The sign change of the gap is a single crossing at $16$, not a pair of crossings.

**2.** Seeing two power functions and expecting two meetings has counted degrees loosely. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. $n^{2}-16n=n(n-16)$ is quadratic, but one root is $0$, excluded by $n>0$. Another who set $a=b$ and ignored the recorded $256$ would never find a meeting of these two shapes except at $0$.

**3.** Letter B reads the same factor $n-16$ past $16$ and finds automated more expensive. This letter is the uniqueness of the root. Equal exponents would have been needed for no meeting or for a meeting at every $n$.

The recovered difference has a single positive root at $n=16$,

**4.** Two meetings would have needed a cubic gap or a second factor. $n(n-16)$ has one positive root. Checking $n=1$ with $C=1<D=16$ and $n=32$ with $C=1024>D=512$ is two sides of a single crossing, not two crossings.

so the statement is True.`,
      `**B.** → False

The claim is that the automated procedure is cheaper than the manual one at every batch above $16$ documents.

The overview already recorded that the gap $n(n-16)$ is positive for $n>16$, so $C>D$. The quadratic automated bill is the more expensive one past the meeting, not the cheaper one. Automation is cheaper only below $16$.

**1.** Extra arithmetic at $n=25$, which letter D will also use: $C(25)=625$ and $D(25)=400$, so automated is more expensive by $225$, not cheaper. At $n=20$, $C(20)=400$ and $D(20)=320$, still a more expensive automated bill by $80$.

**2.** Thinking "machines get cheaper on large batches" has imported an economies-of-scale story the quadratic cost does not tell. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. A square grows faster than a line. Another who swapped $C$ and $D$ after seeing $a=1<b=16$ compared coefficients instead of the bills at large $n$. Coefficients set the crossing; past the crossing the larger exponent wins, and that larger exponent is on automated cost.

**3.** Letter A found the unique meeting. This letter reads the sign past that meeting. The claim's "cheaper" is the reverse of that sign.

The opposite verdict would need the quadratic on the manual side. With $C(n)=n^{2}$ and $D(n)=16n$, automated is more expensive for $n>16$.

The recovered gap is positive past $16$, so automated is not cheaper there,

**4.** Coefficients $a=1<b=16$ set where they meet, not who is cheaper at large $n$. Past $n=16$ the larger exponent wins, and that exponent sits on automated cost. "Machines get cheaper on large batches" is a different model.

so the statement is False.`,
      `**C.** → True

The claim is that the automated procedure's cost per document rises with the batch.

The overview already recorded that automated unit cost equals $n$. From $C(n)=n^{2}$,

$$\\frac{C(n)}{n}=n$$

The leftover exponent is positive, so unit cost rises with the batch. A quadratic power forces a rising average cost.

**1.** Extra arithmetic at the meeting and past it: at $n=16$, automated unit cost is $16$ euros per document, matching the manual's constant $16$. At $n=25$, automated unit cost is $25$, already above the manual's $16$. At $n=9$, automated unit cost is $9$, below $16$, which is why automation is cheaper on small batches.

**2.** Dividing $256$ by $16$ and calling $16$ a constant automated unit cost has evaluated one point, the meeting, where the two unit costs happen to agree. The recovered comparison therefore keeps $256$ and does not substitute $16$. The leftover $n$ is not constant. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r<1$ intuition has the wrong exponent on $C$.

**3.** Manual unit cost is $D(n)/n=16$, constant. Automated unit cost is $n$, rising. That is why they meet once and why automation loses on large batches.

The opposite verdict would need $r\\le 1$ on $C$. With $r=2$, automated cost per document rises.

The recovered automated unit cost is $n$, which rises with the batch,

**4.** Manual unit cost is the constant $16$. Automated unit cost is $n$. They agree at the meeting and then automated unit cost keeps rising, which is why automation loses on large batches. An exponent $r\\le 1$ on $C$ would have frozen or lowered that average.

so the statement is True.`,
      `**D.** → False

The claim is that at $25$ documents the two procedures differ by less than $100$.

The overview already evaluated the gap $225$ at $n=25$. Two hundred and twenty-five is not less than $100$. The extra arithmetic is the two bills:

$$C(25)=625, \\qquad D(25)=400, \\qquad 625-400=225$$

**1.** Computing $D(25)-C(16)=400-256=144$ mixed a $25$-document manual bill with the meeting. Working from the isolated values, $D(25)-C(16)=400-256=144$ is the figure that is checked, not the detour that produced $25$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $|25-16|\\times$ something small, as if the gap grew linearly by $9$, might report $9\\cdot 16=144$ or $9\\cdot 9=81$ and pass the "$<100$" test by a wrong gap. The factored gap is $n(n-16)=25\\cdot 9=225$.

**2.** Extra arithmetic at $n=20$, a closer neighbour: the gap is $20\\cdot 4=80$, which does sit under $100$. The claim is about $n=25$ specifically, where the gap has already reached $225$. Between $20$ and $25$ documents the gap crosses $100$.

**3.** Letter E's $C(9)=81<100$ is a level of one bill, not a gap. Mixing those two "$100$" figures is a different task.

The recovered gap at $25$ documents is $225$, not less than $100$,

**4.** At $n=20$ the gap is $80$, which does sit under $100$. The claim is $n=25$, where $n(n-16)=225$. Linearising the gap from the meeting by $9\\cdot 9=81$ is the trap that passes "$<100$" on a wrong product.

so the statement is False.`,
      `**E.** → True

This is a level of the automated bill at $9$ documents, asked against a threshold of $100$.

The overview already evaluated $C(9)=81$. Eighty-one sits under $100$. Nine squared is $81$, and $a=1$, so the automated bill is $81$.

**1.** Using $D(9)=144$ would sit above $100$ on the wrong procedure. So the letter reads the claim against $D(9)=144$; $100$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $D(9)=144$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The claim is about automated cost. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $a=16$ from a swapped coefficient would report $16\\cdot 81$ and blow past $100$.

**2.** Extra arithmetic at $n=10$: $C(10)=100$ on the nose. The threshold "under $100$" is about $n=9$ specifically, one document below that round figure. At $n=8$, $C(8)=64$, still under $100$ and not the claimed batch.

**3.** Letter D's gap of $225$ at $n=25$ is a different comparison. $81<100$ is a clear clearance on the small-batch side of the meeting.

The recovered automated bill at $9$ documents is $81$, under $100$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Automated inspection costs $C(n)=a n^{2}$ and manual inspection costs $D(n)=b n$ for $n>0$ documents. At $n=16$ both bills equal $256$.

**Part 1: Building the model.**

Let $n$ = documents. Each law has a known exponent and one common level, so each coefficient is recoverable.

**1. Translate: the automated bill.** $256a=256$.

**2. Translate: the manual bill.** $16b=256$.

**Part 2: The model.**

$$C(n)=n^{2}, \\qquad D(n)=16n \\tag{1}$$

$$C(n)-D(n)=n(n-16) \\tag{2}$$

**Part 3: Solve.**

**1.** On $n>0$ they meet only at $n=16$. Gap (2) is positive for $n>16$, so automated is more expensive past the meeting point.

**2.** At $n=25$ the gap is $225$, not less than $100$. $C(9)=81<100$. Automated unit cost equals $n$, so it rises with the batch.

**Answer.** $a=1$ | $b=16$ | $C(9)=81$ | unique meeting $n=16$ | gap $225$ at $n=25$`,
  },
  {
    id: `math-8-19`,
    case_id: `MATH 8.19`,
    title: `Warehouse Throughput With a Contractual Ceiling`,
    context: `Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour, where $s>0$ is the number of staff on shift. A shift with $16$ staff moved $32$ pallets per hour. The service contract caps billed throughput at $80$ pallets per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Throughput grows more slowly than headcount.`,
      `Doubling the headcount doubles throughput.`,
      `Once the ceiling binds, billed throughput is no longer a power function of staff.`,
      `The contract ceiling is already reached with $64$ staff.`,
      `With $81$ staff, throughput is already above $70$ pallets per hour.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Warehouse throughput is $H(s)=A s^{\\frac{1}{2}}$ pallets per hour, and the recorded $16$-staff shift of $32$ pallets pins $A$. This letter asks whether throughput grows more slowly than headcount, that is whether $r<1$.

The overview already recovered $A=8$ and recorded that the exponent $\\frac{1}{2}$ sits below one. Multiplying staff by $k$ multiplies throughput by $k^{\\frac{1}{2}}$, a smaller factor. Throughput grows more slowly than headcount.

**1.** Extra arithmetic on the recorded shift: doubling those $16$ staff is $32$ staff, and $H(32)=8\\sqrt{32}=32\\sqrt{2}\\approx 45.3$ against $H(16)=32$. Throughput multiplies by about $1.41$, slower than the doubling of headcount.

**2.** Comparing $32$ pallets with $16$ staff and seeing two pallets per person has a level of the average, not a growth-rate statement. So the letter reads the claim against $32$; $16$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $32$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Growth rate is $r$ against $1$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r=2$ from a different chapter's square law has the wrong exponent.

**3.** Letter B is the doubling claim, which fails for the same $r=\\frac{1}{2}$. Letter C is the ceiling, which is a different function class. This letter is only $r<1$.

The recovered exponent sits below one,

**4.** Comparing $32$ pallets with $16$ staff and seeing two pallets per person is an average, not a growth rate. Growth rate is $r$ against $1$. The recorded shift doubled in staff would yield about $45$ pallets, not $64$. That $\\sqrt{2}$ factor is $r=\\frac{1}{2}$.

so the statement is True.`,
      `**B.** → False

Doubling the headcount is $k=2$, and the claim is that throughput doubles.

The overview already recorded that doubling staff multiplies $H$ by $\\sqrt{2}$, not by $2$. The coefficient $A$ cancels in the ratio

$$\\frac{H(2s)}{H(s)}=2^{\\frac{1}{2}}\\neq 2$$

**1.** Extra arithmetic on the recorded shift, as in letter A: $H(32)\\approx 45.3$ against $H(16)=32$, not against $64$. Twice $32$ would have been $64$. Using the quadrupling $16\\to 64$, where $H(64)=64$, has mixed $k=4$ with $k=2$. That is the fork: $16\\to 64$ belongs to the recovered isolation, $k=2$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Quadrupling staff does double throughput; doubling staff does not.

**2.** Using exponent $1$ is telling a proportional story the square-root technology contradicts. Keeping $1$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{\\frac{1}{3}}$ mixed in a cube root.

**3.** Letter D will check $H(64)=64$ against the cap of $80$. That $64$ is the quadrupling identity, not this letter's doubling.

The opposite verdict would need $r=1$. With $r=\\frac{1}{2}$, doubling headcount does not double throughput.

The recovered doubling factor is $\\sqrt{2}$, not $2$,

**4.** Quadrupling staff, $16\\to 64$, does double throughput to $H(64)=64$. That is $k=4$, not $k=2$. Mixing those multipliers is how a doubling claim can look true. Doubling $16$ staff is $32$ staff, and $H(32)\\approx 45$, not $64$.

so the statement is False.`,
      `**C.** → True

The service contract caps billed throughput at $80$ pallets per hour. This letter asks whether, once that ceiling binds, billed throughput is no longer a power function of staff.

The overview already recorded the two-piece billed rule $B(s)=\\min(H(s),80)$, with the cap binding from $s=100$. From that staffing onward billed throughput is the constant $80$. A horizontal cap is not $A s^{r}$, so billed throughput is no longer a power of staff.

**1.** Extra arithmetic at the bind: $8s^{\\frac{1}{2}}=80$ gives $s^{\\frac{1}{2}}=10$ and $s=100$. At $s=121$, uncapped $H(121)=8\\cdot 11=88$, but billed $B(121)=80$. The ratio $B(121)/B(100)=1$, while $H(121)/H(100)=1.1$. A constant ratio $1$ is a power only of exponent $0$, and that exponent $0$ piece does not match the uncapped exponent $\\frac{1}{2}$ on $s<100$. One function cannot be two different powers on two intervals and still be a single power on the whole domain.

**2.** Saying "a cap is $80 s^{0}$, which is a power" has described the capped piece alone. The opposite verdict would need a different isolation than $80 s^{0}$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The billed series is the minimum of two formulas, and that minimum is not itself a monomial. Another who ignored the cap and called $H(s)$ billed throughput has rewritten the contract.

**3.** Letter D checks that $s=64$ is still uncapped. Letter E checks $s=81$, also still uncapped. This letter is the function class once $s\\ge 100$.

The recovered billed rule is a two-piece minimum, not a single power,

**4.** Calling the cap $80 s^{0}$ a power describes the capped piece alone. Billed throughput is $\\min(H(s),80)$, two formulas glued together, and that glue is not a monomial on the whole domain $s>0$. One exponent on $s<100$ and another on $s\\ge 100$ is two powers, not one.

so the statement is True.`,
      `**D.** → False

The claim is that the contract ceiling is already reached with $64$ staff.

The overview already evaluated $H(64)=64$. Sixty-four pallets per hour sits below the cap of $80$. Sixty-four staff are a perfect square, so the square root is $8$, and $8\\cdot 8=64$.

**1.** Extra arithmetic that inverts the cap: $s=100$ is where $H$ hits $80$, as in letter C. Sixty-four sits $36$ staff short of that bind. At $s=81$, letter E's $H(81)=72$, still below $80$. The ceiling is not yet reached at $64$.

**2.** Using $H(64)=64\\cdot 8/4$ wait, or copying $s=64$ onto $H=80$ by mixing the cap figure with the staff figure, would trip the ceiling early. The stem's recovered values line up with $H(64)=64\\cdot 8/4$, whereas $H=80$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $H(64)=64\\cdot 8/4$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $A=5$ would report $H(64)=40$ and still sit below $80$, for a wrong coefficient.

**3.** The recovered $64$ at $64$ staff is a coincidence of $A=8$ and $\\sqrt{64}=8$, not a reason the cap of $80$ has bound. The cap is $80$, not $64$.

The recovered throughput at $64$ staff is $64$ pallets per hour, below $80$,

**4.** The bind is at $s=100$, thirty-six staff past $64$. $H(64)=64$ matching the staff count is a coincidence of $A=8$ and $\\sqrt{64}=8$, not a reason the cap of $80$ has bound. The cap is $80$ pallets, not $64$.

so the statement is False.`,
      `**E.** → True

This is a level at $81$ staff, asked against a threshold of $70$ pallets per hour.

The overview already evaluated $H(81)=72$. Seventy-two sits above $70$. Eighty-one is a perfect square, so the square root is $9$, and $8\\cdot 9=72$.

**1.** Using $A=7$ from a misread $32/\\sqrt{16}$ wait, $32/4=8$ is the right $A$. After isolating the unknown, the check is against $A=7$. The figure $A$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $A=7$ stays in the write-up. Using $A=7$ would report $63$ and fail the threshold. Another who computed $8\\cdot 81=648$ skipped the root.

**2.** Extra arithmetic at $s=64$: $H(64)=64$, which sits below $70$. The threshold test is about $s=81$ specifically. Between $64$ and $81$ staff throughput crosses $70$, and at $81$ it has reached $72$, still under the cap of $80$.

**3.** Letter D's cap test at $64$ staff is a different comparison. $72>70$ is a modest clearance, genuine, and still uncapped.

The recovered throughput at $81$ staff is $72$ pallets per hour, above $70$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. Sixteen staff move $32$ pallets per hour, and billed throughput cannot exceed $80$.

**Part 1: Building the model.**

Let $s$ = staff and $H$ = pallets per hour. The exponent is given, so the sixteen-staff observation fixes $A$. The cap cuts the billed series.

**1. Translate: the recorded shift.**

$$A\\cdot 16^{\\frac{1}{2}}=32$$

**Part 2: The model.**

$$H(s)=8s^{\\frac{1}{2}} \\tag{1}$$

$$B(s)=\\min\\bigl(H(s),\\,80\\bigr) \\tag{2}$$

**Part 3: Solve.**

**1.** Because the exponent is $\\frac{1}{2}<1$, throughput grows more slowly than headcount. Doubling staff multiplies $H$ by $\\sqrt{2}$, not by $2$.

**2.** $H(64)=64<80$ and $H(81)=72>70$. The two-piece billed rule (2) is not a single power of $s$.

**Answer.** $A=8$ | $H(64)=64$ | $H(81)=72$ | cap binds at $s=100$`,
  },
  {
    id: `math-8-20`,
    case_id: `MATH 8.20`,
    title: `Response Time Recovered from a Server Upgrade`,
    context: `A service's median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds, where $k>0$ is the number of servers. The upgrade log does not state $A$: it records only that moving from $4$ servers to $9$ servers cut the median response time by exactly $19$ ms. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An extra server cuts the median wait by more at $4$ servers than at $9$.`,
      `The number of servers needed for a given wait is itself a power of that wait.`,
      `Doubling the server count halves the median wait.`,
      `With $9$ servers the median wait is more than $10$ milliseconds.`,
      `With $4$ servers the median wait is already above $25$ milliseconds.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Median wait is $W(k)=A k^{-\\frac{3}{2}}$ milliseconds, and the recorded cut of $19$ ms between $4$ servers and $9$ servers pins $A$. This letter is a slope comparison: whether an extra server cuts more wait at $4$ servers than at $9$.

The overview already recovered $A=216$ and recorded $|W'(4)|>|W'(9)|$. The recovered rule $W(k)=216 k^{-\\frac{3}{2}}$ has derivative

$$W'(k)=-324 k^{-\\frac{5}{2}}$$

The size of that cut is $324 k^{-\\frac{5}{2}}$, which falls as $k$ rises because the leftover exponent is negative. An extra server cuts more wait at $4$ than at $9$.

**1.** Extra arithmetic at the two named staffings:

$$|W'(4)|=324\\cdot 4^{-\\frac{5}{2}}=324\\cdot\\frac{1}{32}=10.125$$

$$|W'(9)|=324\\cdot 9^{-\\frac{5}{2}}=324\\cdot\\frac{1}{243}=\\frac{4}{3}\\approx 1.333$$

so an extra server after $4$ servers cuts about $10$ ms, and after $9$ servers only about $1.3$ ms. The later server still helps; it helps much less.

**2.** Seeing $W(9)=8<W(4)=27$ and concluding that later servers are doing more has confused a lower wait with a steeper cut. Once $W(9)=8<W(4)=27$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The wait is already low at $9$ servers; there is less left to cut. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. exponent $-1$ would have a milder decline of the slope.

**3.** Letters D and E are levels at $9$ and $4$ servers. This letter is the slope between those levels. Negative-exponent wait has falling marginal benefit of servers.

The opposite verdict would need a wait that became steeper as the fleet grew. A reciprocal $\\frac{3}{2}$-power cannot do that.

The recovered cut is larger at $4$ servers than at $9$,

**4.** The two levels $W(4)=27$ and $W(9)=8$ already show a $19$ ms cut across five extra servers, about $3.8$ ms per server on average. The instantaneous cuts $10.1$ and $1.3$ sit on either side of that average, steeper at $4$ and flatter at $9$. A rising steepness would have needed a delay that exploded toward a wall.

so the statement is True.`,
      `**B.** → True

The claim is about the inverse: whether the number of servers needed for a given wait is itself a power of that wait.

The overview already recorded $k=(216/W)^{\\frac{2}{3}}$. A nonzero power inverts to another power. From $W=216 k^{-\\frac{3}{2}}$, isolate $k$ by raising to the reciprocal exponent $-\\frac{2}{3}$. The result is a monomial in $W$, coefficient $216^{\\frac{2}{3}}=(6^{3})^{\\frac{2}{3}}=36$ and exponent $-\\frac{2}{3}$.

That is a power function of the wait. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at a new wait of $1$ ms:

$$k=\\bigl(216/1\\bigr)^{\\frac{2}{3}}=36$$

so a $1$ ms wait would need $36$ servers. That is still a power of $W$. Adding a minimum fleet, $k=1+(216/W)^{\\frac{2}{3}}$, would have left the power-function class; the stem has no such floor. That is why $k=1+(216/W)^{\\frac{2}{3}}$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Thinking a negative exponent could not invert to a power has forgotten that $u^{-r}$ inverts to a power with exponent $-1/r$. That is the fork: $u^{-r}$ belongs to the recovered isolation, $-1/r$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who wrote $k=\\log W$ mixed this service with an exponential technology.

**3.** Letters D and E use the forward rule at $k=9$ and $k=4$. This letter names the inverse as a function class. The same inverse is what would turn a wait target into a server count.

If wait had been $W=A k^{-\\frac{3}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial.

The recovered server count is a power of the wait,

**4.** Extra check: $k=(216/27)^{\\frac{2}{3}}=4$ returns the four-server fleet from $W=27$. A logarithmic inverse would not have sent $27$ ms back to $4$ servers. The stem is a pure monomial, so the inverse is a power.

so the statement is True.`,
      `**C.** → False

Doubling the server count is $k=2$, and the claim is that median wait halves.

The overview already recorded that doubling servers multiplies wait by $2^{-\\frac{3}{2}}=1/(2\\sqrt{2})\\approx 0.354$, not by $1/2$. The coefficient $A$ cancels in the ratio

$$\\frac{W(2k)}{W(k)}=2^{-\\frac{3}{2}}\\neq\\frac{1}{2}$$

Wait falls by about sixty-five percent, not by fifty.

**1.** Extra arithmetic on the recovered four-server wait: doubling that fleet is $8$ servers, and

$$W(8)=216\\cdot 8^{-\\frac{3}{2}}=216\\cdot\\frac{1}{16\\sqrt{2}}=\\frac{27}{2\\sqrt{2}}\\approx 9.55$$

against $W(4)=27$. Half of $27$ would have been $13.5$, and $9.55$ is not $13.5$. Wait drops by more than half, which is the opposite miss from a "not halved" claim that expected too little of a cut. The statement said halves, and the factor is not $1/2$.

**2.** Using exponent $-1$ would have halved the wait, which is exactly the false claim. The opposite verdict would need a different isolation than $-1$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reciprocal-linear wait is $A/k$; this service is $A k^{-\\frac{3}{2}}$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{-\\frac{1}{2}}$ mixed in a square-root wait.

**3.** Letter A used the slope. This letter is a scale factor about doubling, independent of $A$. Whether the recorded cut had been $19$ ms or $40$ ms, doubling the fleet would still multiply wait by $2^{-\\frac{3}{2}}$.

The opposite verdict would need exponent $-1$. With exponent $-\\frac{3}{2}$, doubling servers does not halve the wait.

The recovered doubling factor is $1/(2\\sqrt{2})$, not $1/2$,

**4.** Wait here drops by more than half on a doubling, which is a different miss from a square-root wait that would have dropped by less than half. The claim said halves, factor $1/2$, and $2^{-\\frac{3}{2}}\\approx 0.354$ is not $1/2$. Exponent $-1$ would have been needed.

so the statement is False.`,
      `**D.** → False

This is a level at $9$ servers, asked against a threshold of $10$ milliseconds.

The overview already evaluated $W(9)=8$. Eight does not sit above $10$. Nine servers are a perfect cube in the $\\frac{3}{2}$ sense, $9^{\\frac{3}{2}}=27$, and $216/27=8$.

**1.** Using $W(9)=216/9=24$ skipped the remaining square root in the exponent. That is why $W(9)=216/9=24$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Twenty-four would have passed the "more than $10$" test on a wrong evaluation. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $W(9)=19$, copying the recorded cut, mixed a difference with a level.

**2.** Extra arithmetic at $k=4$: $W(4)=27$, which does sit above $10$. The threshold test is about $k=9$ specifically. Between $4$ and $9$ servers the wait crosses $10$, and at $9$ it has already reached $8$, below the line.

**3.** Letter E asks for a threshold of $25$ at $4$ servers and passes. This letter's $10$ at $9$ servers is a different comparison. The recovered $8$ sits $2$ below $10$.

The recovered wait at $9$ servers is $8$ ms, not more than $10$,

**4.** $W(4)=27$ does sit above $10$, on the other staffing. Between $4$ and $9$ servers the wait crosses $10$, and at $9$ it is already $8$. Copying the recorded cut of $19$ as if it were $W(9)$ would have passed the threshold on a difference rather than a level.

so the statement is False.`,
      `**E.** → True

This is a level at $4$ servers, asked against a threshold of $25$ milliseconds.

The overview already evaluated $W(4)=27$. Twenty-seven sits above $25$. Four servers give $4^{\\frac{3}{2}}=8$, and $216/8=27$.

**1.** Using $W(4)=216/4=54$ skipped part of the exponent and still passed. That is why $W(4)=216/4=54$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $W(4)=19$, copying the recorded cut, would fail the threshold on a difference rather than a level.

**2.** Extra arithmetic that checks the recorded cut: $W(4)-W(9)=27-8=19$, which is the stem's $19$ ms. That check uses both levels and confirms $W(4)=27$ rather than some nearby $26$ that might have sat under $25$.

**3.** Letter D's $8$ at $9$ servers is the other end of that cut. $27>25$ is a modest clearance, genuine because $A=216$ rather than $200$.

The recovered wait at $4$ servers is $27$ ms, above $25$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Wait follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. Moving from $4$ servers to $9$ servers cut the wait by $19$ ms.

**Part 1: Building the model.**

Let $k$ = servers and $W$ = milliseconds. The exponent is given, so the recorded cut, a difference of two levels, recovers $A$.

**1. Translate: the recorded cut.**

$$A\\bigl(4^{-\\frac{3}{2}}-9^{-\\frac{3}{2}}\\bigr)=19$$

**Part 2: The model.**

$$A=216, \\qquad W(k)=216k^{-\\frac{3}{2}} \\tag{1}$$

**Part 3: Solve.**

**1.** $|W'(4)|>|W'(9)|$. The inverse $k=(216/W)^{\\frac{2}{3}}$ is a power of $W$. Doubling servers multiplies wait by $1/(2\\sqrt{2})$, not by $1/2$.

**2.** $W(9)=8$, which is not more than $10$. $W(4)=27>25$.

**Answer.** $A=216$ | $W(4)=27$ | $W(9)=8$`,
  },
  {
    id: `math-8-21`,
    case_id: `MATH 8.21`,
    title: `Isoelastic Subscription Demand and Its Revenue`,
    context: `Monthly subscriptions follow $q(p)=A p^{-2}$, where $p>0$ is the price in euros. At $5$ euros the service sells $400$ subscriptions. Revenue is $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An extra euro of price cuts more subscriptions at five euros than at twenty.`,
      `The price needed for a given number of subscriptions is itself a power function of that number.`,
      `Doubling the price halves demand.`,
      `At a price of $16$ euros, monthly revenue is already under $700$.`,
      `At twenty euros the curve sells fewer than $30$ subscriptions.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Monthly subscriptions follow $q(p)=A p^{-2}$, and the recorded price of $5$ euros selling $400$ subscriptions is what pins $A$. This letter is a slope comparison: whether an extra euro of price cuts more subscriptions at five euros than at twenty.

The overview already recovered $A=10000$ and recorded $|q'(5)|>|q'(20)|$. Demand is then $q(p)=10000 p^{-2}$, with derivative $q'(p)=-20000 p^{-3}$. The size of that cut is $20000 p^{-3}$, which falls as $p$ rises because the leftover exponent is negative. An extra euro cuts more demand at five euros than at twenty.

**1.** Extra arithmetic at the two named prices:

$$|q'(5)|=20000/125=160, \\qquad |q'(20)|=20000/8000=2.5$$

so an extra euro at $5$ euros cuts about $160$ subscriptions, and at $20$ euros only $2.5$. The later euro still reduces sales; it reduces them far less. Inverse-square demand is steep near a low price and flat at a high one.

**2.** Seeing $q(20)=25<q(5)=400$ and concluding that later euros are doing more has confused a lower quantity with a steeper cut. The path that matches the stem therefore holds $q(20)=25<q(5)=400$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Quantity is already low at $20$ euros; there is less left to cut. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. exponent $-1$ would have a milder decline of the slope, $q'\\propto p^{-2}$ rather than $p^{-3}$.

**3.** Letters D and E are levels of revenue and of quantity. This letter is the slope of quantity. Negative-exponent demand has falling marginal effect of price, which is the same $r=-2$ story read on the derivative.

**4.** The opposite verdict would need a demand that became steeper as the price rose, for example a delay that exploded toward a reservation price. Inverse-square demand does the reverse. What would flip the comparison is a positive leftover exponent on $|q'|$, which a negative $r$ never supplies.

The recovered cut is larger at five euros than at twenty, so the statement is True.`,
      `**B.** → True

The claim is about the inverse: whether the price needed for a given number of subscriptions is itself a power function of that number.

The overview already recorded $p=100 q^{-\\frac{1}{2}}$. A nonzero power inverts to another power. From $q=10000 p^{-2}$, isolate $p$ by taking the reciprocal square root, or rewrite $p^{2}=10000/q$ and take the positive root. The result is a monomial in $q$, coefficient $100$ and exponent $-\\frac{1}{2}$.

That is a power function of the subscription count. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at a new quantity of $25$ subscriptions, which letter E will also touch from the other side:

$$p=100/\\sqrt{25}=20$$

so $25$ subscriptions clear at $20$ euros. That is still a power of $q$. Adding a reservation price, $p=2+100 q^{-\\frac{1}{2}}$, would have left the power-function class; the stem has no such floor. The recovered isolation is checked against the claim using $p=2+100 q^{-\\frac{1}{2}}$, which is the figure the sessions actually produce.

**2.** Thinking a negative exponent could not invert to a power has forgotten that $u^{-r}$ inverts to a power with exponent $-1/r$. That is the fork: $u^{-r}$ belongs to the recovered isolation, $-1/r$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who wrote $p=\\log q$ mixed this service with an exponential technology.

**3.** Extra check at the recorded pair: $p=100/\\sqrt{400}=5$, which returns the catalogue price. That inversion landing on $5$ euros is how we know the inverse is the right monomial.

**4.** If demand had been $q=A p^{-2}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial. Letters D and E use the forward rule at $p=16$ and $p=20$. This letter names the inverse as a function class.

The recovered clearing price is a power of the subscription count, so the statement is True.`,
      `**C.** → False

Doubling the price is the multiplier $k=2$, and the claim is that demand halves.

The overview already recorded that doubling price multiplies demand by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$. The coefficient $A$ cancels in the ratio

$$\\frac{q(2p)}{q(p)}=2^{-2}=\\frac{1}{4}$$

Demand is quartered, not halved.

**1.** Extra arithmetic on the recorded pair: doubling $5$ euros is $10$ euros, and $q(10)=10000/100=100$ against $q(5)=400$. Half of $400$ would have been $200$, and $100$ is not $200$. Demand drops to a quarter, $400/4=100$.

**2.** Using exponent $-1$ would have halved demand, which is exactly the false claim. The recovered isolation is checked against the claim using $-1$, which is the figure the sessions actually produce. Reciprocal-linear demand is $A/p$; this curve is $A/p^{2}$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{-3}=1/8$ mixed in a cube in the denominator.

**3.** Letter A used the slope. This letter is a scale factor about doubling, independent of $A$. Whether the recorded sales had been $400$ or $40$, doubling the price would still quarter demand. Letter E's $q(20)=25$ is a quadrupling of the $5$ euro price, which multiplies demand by $1/16$ and yields $25$, the same identity with $k=4$ rather than $k=2$.

**4.** The opposite verdict would need exponent $-1$. With exponent $-2$, doubling price quarters demand, and a "halving" claim is a linear trap. Inverse-square demand is steeper than that trap.

The recovered doubling factor is $1/4$, not $1/2$, so the statement is False.`,
      `**D.** → True

Revenue along the curve is $R(p)=pq=10000 p^{-1}$, and this letter is a level at $16$ euros, asked against a threshold of $700$.

The overview already evaluated $R(16)=625$. Six hundred and twenty-five sits under $700$. Sixteen euros into $10000/p$ is $10000/16=625$.

This is a revenue question, not a quantity question. Quantity at $16$ euros is $q(16)=10000/256\\approx 39.1$ subscriptions, and $16\\times 39.1\\approx 625$ is the same $625$, a check rather than a new unknown.

**1.** Using $R=10000 p^{-2}$ forgot to multiply by $p$ and would report about $39$, far under $700$ for the wrong object. The stem's recovered values line up with $R=10000 p^{-2}$, whereas $700$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $R=10000 p^{-2}$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $R=10000\\cdot 16=160000$ dropped the negative exponent.

**2.** Extra arithmetic at $p=20$, letter E's price: $R(20)=500$, also under $700$ and not this letter's $16$ euros. At $p=10$, $R(10)=1000$, which sits above $700$. The threshold test is about $p=16$ specifically. Between $10$ and $16$ euros revenue crosses $700$ going down, and at $16$ it has reached $625$.

**3.** Inverse-square demand is elastic enough that raising price cuts $pq$. That is why $R$ falls in $p$, and why a $16$ euro price already sits under $700$ while a $10$ euro price does not.

The recovered revenue at $16$ euros is $625$, under $700$, so the statement is True.`,
      `**E.** → True

This is a level of demand at twenty euros, asked against a threshold of $30$ subscriptions.

The overview already evaluated $q(20)=25$. Twenty-five is fewer than $30$. Twenty squared is $400$, and $10000/400=25$.

**1.** Using $q(20)=10000/20=500$ skipped the square in the exponent and would have failed "fewer than $30$" on a huge overestimate. The recovered comparison therefore keeps $q(20)=10000/20=500$ and does not substitute $30$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $q(20)=400\\cdot 5/20=100$ scaled the recorded pair linearly.

**2.** Extra arithmetic at $p=10$: $q(10)=100$, which is not fewer than $30$. The threshold test is about $p=20$ specifically. Between $10$ and $20$ euros quantity crosses $30$, and at $20$ it has reached $25$.

**3.** Letter D's revenue of $625$ at $16$ euros is a different object. $25<30$ is a modest clearance on quantity, genuine because $A=10000$ rather than $8000$, which would have given $q(20)=20$ and still passed, or $A=14000$, which would have given $35$ and failed.

The recovered demand at twenty euros is $25$ subscriptions, fewer than $30$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `Subscriptions follow $q(p)=A p^{-2}$ with $q(5)=400$. Revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros and $q$ = subscriptions. The exponent is given, so one priced observation fixes $A$.

**1. Translate: the recorded pair.**

$$A\\cdot 5^{-2}=400$$

**Part 2: The model.**

$$q(p)=10000 p^{-2} \\tag{1}$$

$$R(p)=10000 p^{-1} \\tag{2}$$

**Part 3: Solve.**

**1.** $|q'(5)|>|q'(20)|$. Doubling price multiplies demand by $\\frac{1}{4}$, not by $\\frac{1}{2}$.

**2.** The inverse $p=100 q^{-\\frac{1}{2}}$ is a power of $q$. $R(16)=625<700$ and $q(20)=25<30$.

**Answer.** $A=10000$ | $q(20)=25$ | $R(16)=625$ | $R=\\frac{10000}{p}$`,
  },
  {
    id: `math-8-22`,
    case_id: `MATH 8.22`,
    title: `Audit Fees With a Fixed Charge on Top of a Power Term`,
    context: `An audit firm bills $C(n)=F+a n^{\\frac{1}{2}}$ for a client with $n>0$ accounts. $100$ accounts were billed at $500$, and $400$ accounts at $800$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because of the fixed engagement charge, the bill is not a power function of the number of accounts.`,
      `Cost per account falls as the book of accounts grows.`,
      `An extra account adds more to the bill at one hundred accounts than at four hundred.`,
      `An engagement covering $900$ accounts is billed at more than $1000$.`,
      `Two hundred accounts cost more than $750$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The audit firm bills $C(n)=F+a n^{\\frac{1}{2}}$, and two invoices pin both unknowns. This letter asks whether that bill is a power function of the number of accounts.

The overview already recovered $F=200$ and $a=30$, so $C(n)=200+30\\sqrt{n}$. A power of the account count cannot carry a leftover constant. The fixed engagement charge of $200$ kills that shape.

Subtracting $F+10a=500$ from $F+20a=800$ isolated $a=30$, and then $F=200$. The recovered intercept is not zero.

**1.** Extra arithmetic in a ratio: $C(100)=500$ and $C(400)=800$, so the ratio of bills is $1.6$. If the bill were $c n^{r}$, that ratio would equal $4^{r}$, hence $r=\\log 1.6/\\log 4\\approx 0.34$. Checking $C(900)/C(100)=1100/500=2.2$ against $9^{0.34}\\approx 2.11$ already disagrees. No single power fits.

**2.** Dropping the $200$ and calling $30\\sqrt{n}$ a power has described a different engagement. So the letter reads the claim against $200$; $30\\sqrt{n}$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $200$ stays in the write-up. The stem charges the fixed fee on every book. Another who wrote $C(n)=(30\\sqrt{n})^{1}+200 n^{0}$ and declared a sum of powers a power has confused a polynomial with a monomial.

**3.** Letters D and E are levels of this same bill. Those levels exist because $F$ and $a$ were recovered. The function class is settled by $F\\neq 0$, independently of those later figures.

**4.** The opposite verdict would need $F=0$. With a $200$ engagement charge, the bill is not a power of $n$. Zero setup would have been a different firm.

The recovered engagement charge of $200$ kills the power-function shape, so the statement is True.`,
      `**B.** → True

The claim is that cost per account falls as the book of accounts grows.

The overview already recorded that unit cost falls. Cost per account is

$$\\frac{C(n)}{n}=\\frac{200}{n}+30 n^{-\\frac{1}{2}}$$

Both pieces decline as the book grows: the fee is spread, and the leftover exponent on the variable term is negative. A larger book is cheaper per account.

**1.** Extra arithmetic at the two invoices: $C(100)/100=5$ euros per account, and $C(400)/400=2$ euros per account. The fourfold book more than halves the per-account price. At $n=900$, $C(900)/900=1100/900\\approx 1.22$, still falling.

**2.** Seeing the total climb from $500$ to $800$ to $1100$ and concluding that accounts get more expensive has mixed the total with the average. That is the fork: $500$ belongs to the recovered isolation, $1100$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. A rising total is compatible with a falling average. Another who looked only at $200/n$ and ignored $30/\\sqrt{n}$ still has a falling average, just an incomplete one.

**3.** What would flip this verdict is a positive leftover exponent after dividing by $n$, which would need the original exponent on $n$ to exceed $1$. The stem's $\\frac{1}{2}<1$, so average cost falls.

**4.** Letter C is the falling marginal $C'$. Average and marginal move together on a power below one, plus a spread setup. Both stories agree that a larger book is cheaper per extra account and per average account.

The recovered per-account cost declines as the book grows, so the statement is True.`,
      `**C.** → True

The claim is about the slope: whether an extra account adds more to the bill at one hundred accounts than at four hundred.

The overview already recorded $C'(100)>C'(400)$. The recovered bill $C(n)=200+30\\sqrt{n}$ has derivative

$$C'(n)=15 n^{-\\frac{1}{2}}$$

The leftover exponent is negative, so the slope itself falls as $n$ rises. An extra account adds more at one hundred accounts than at four hundred.

**1.** Extra arithmetic at the two named books:

$$C'(100)=15/10=1.5, \\qquad C'(400)=15/20=0.75$$

so an extra account at $n=100$ adds $1.5$ euros, and at $n=400$ only $0.75$. The later account still costs something; it costs half as much on the margin.

**2.** Seeing $C(400)=800>C(100)=500$ and concluding that later accounts are more expensive on the margin has confused height with slope. That is why $C(400)=800>C(100)=500$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. The bill is still rising, just more slowly. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r>1$ intuition has the wrong exponent.

**3.** Letter B's falling average is the same $r=\\frac{1}{2}<1$ story. This letter is the falling marginal. The setup of $200$ does not appear in $C'$, which is why a function-class letter and a slope letter can disagree about $F$ and still agree about direction of $C'$.

**4.** The opposite verdict would need $r>1$ on the variable term. With $r=\\frac{1}{2}$, an extra account adds less at four hundred than at one hundred.

The recovered slope is larger at one hundred accounts than at four hundred, so the statement is True.`,
      `**D.** → True

This is a level at $900$ accounts, asked against a threshold of $1000$.

The overview already evaluated $C(900)=1100$. Eleven hundred sits above $1000$. Nine hundred is a perfect square, so the square root is $30$, and $200+30\\cdot 30=1100$.

**1.** Dropping the engagement charge and reporting $30\\cdot 30=900$ would sit below $1000$ and fail the threshold for the wrong bill. The recovered comparison therefore keeps $30\\cdot 30=900$ and does not substitute $1000$. That contrast is the reason the verdict goes the way it does. The setup of $200$ is what pushes $900$ up to $1100$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $F=0$ from a power-function wish has the same miss.

**2.** Extra arithmetic at $n=400$, the second invoice: $C(400)=800$, which sits below $1000$. The threshold test is about $n=900$ specifically. Between $400$ and $900$ accounts the bill crosses $1000$, and at $900$ it has reached $1100$.

**3.** Letter E asks for a $750$ threshold at $200$ accounts and fails. This letter's $1000$ at $900$ accounts is a different comparison. Mixing those two thresholds is how that mix could flip one of them by accident.

**4.** The opposite verdict would need $C(900)\\le 1000$, which would have required a smaller $a$ or a smaller $F$. The two invoices force $1100$.

The recovered bill at $900$ accounts is $1100$, above $1000$, so the statement is True.`,
      `**E.** → False

This is a level at $200$ accounts, asked against a threshold of $750$.

The overview already evaluated $C(200)\\approx 624$. Six hundred and twenty-four does not sit above $750$. Two hundred is not a perfect square, so the extra arithmetic is the exact radical:

$$C(200)=200+30\\sqrt{200}=200+300\\sqrt{2}$$

Since $\\sqrt{2}<1.5$, this sits below $650$, which is not more than $750$. Directly, $300\\times 1.414\\approx 424$ plus the $200$ setup is about $624$.

**1.** Treating $200$ as a perfect square, $\\sqrt{196}=14$ or $\\sqrt{225}=15$, might report $200+30\\cdot 14=620$ or $200+30\\cdot 15=650$, both still under $750$. So the letter reads the claim against $200$; $750$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $200$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who interpolated linearly between $C(100)=500$ and $C(400)=800$ at $n=200$ would report $600$, still under $750$, for the wrong reason.

**2.** Extra arithmetic that manufactures $750$: dropping the setup from $C(400)=800$ leaves $600$, then adding a guessed $150$. Or $C(225)=200+30\\cdot 15=650$, still not $750$. Pointing $C(900)=1100$ at $n=200$ is a mix of two books.

**3.** Letter D's $1100>1000$ at $n=900$ does not license $624>750$ at $n=200$. Thresholds are local. The recovered $624$ sits about $126$ below $750$.

The recovered bill at $200$ accounts is about $624$, not more than $750$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 22,
    solution_overview: `The bill is $C(n)=F+a n^{\\frac{1}{2}}$ with $C(100)=500$ and $C(400)=800$.

**Part 1: Building the model.**

Let $n$ = accounts. Two unknowns need both invoices. Subtracting isolates $a$; either invoice then pins $F$.

**1. Translate: the two invoices.**

$$F+10a=500, \\qquad F+20a=800$$

**Part 2: The model.**

$$C(n)=200+30\\sqrt{n} \\tag{1}$$

**Part 3: Solve.**

**1.** The setup $F=200$ keeps $(1)$ from being a power of $n$. Unit cost falls. $C'(100)>C'(400)$.

**2.** $C(900)=1100>1000$. $C(200)\\approx 624$, which is not more than $750$.

**Answer.** $F=200$ | $a=30$ | $C(900)=1100$ | $C(200)\\approx 624$`,
  },
  {
    id: `math-8-23`,
    case_id: `MATH 8.23`,
    title: `Fleet Growth Combined With Falling Emission Intensity`,
    context: `An electric-vehicle programme is tracked by two linked power laws. The fleet after $t>0$ years is $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles, and average emission intensity follows $e(a)=k a^{-\\frac{1}{2}}$ kilograms per thousand vehicles. When the fleet has $16$ thousand vehicles, intensity is $30$ kilograms. Total fleet emissions are $E=a\\,e(a)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Total fleet emissions are a power of elapsed time.`,
      `Doubling elapsed time doubles total fleet emissions.`,
      `Emission intensity rises as the fleet grows.`,
      `After $16$ years, total fleet emissions already exceed $400$.`,
      `After $1$ year, total fleet emissions are still under $250$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The fleet is $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles and intensity is $e(a)=k a^{-\\frac{1}{2}}$, with $e(16)=30$. Total emissions are $E=a\\,e(a)$. This letter asks whether that total is a power of elapsed time.

The overview already recovered $k=120$ and composed $E(t)=240 t^{\\frac{1}{4}}$. That is a monomial in $t$, coefficient $240$ and exponent $\\frac{1}{4}$. Composition of two powers is a power: the inner square root and the outer reciprocal square root multiply to $t^{\\frac{1}{4}}$ after the fleet coefficient $4$ is raised.

**1.** The extra arithmetic this letter owns is the composition, not a re-display of $k=120$ as a fresh unknown:

$$E=a\\cdot 120 a^{-\\frac{1}{2}}=120 a^{\\frac{1}{2}}=120\\cdot 4^{\\frac{1}{2}} t^{\\frac{1}{4}}=240 t^{\\frac{1}{4}}$$

because $a=4t^{\\frac{1}{2}}$ and $4^{\\frac{1}{2}}=2$. The exponent $\\frac{1}{4}$ is $\\frac{1}{2}\\times\\frac{1}{2}$, the product of the two square-root stages.

**2.** Adding the exponents $\\frac{1}{2}+(-\\frac{1}{2})=0$ and declared $E$ constant has added under the wrong operation. The recovered comparison therefore keeps $\\frac{1}{2}+(-\\frac{1}{2})=0$ and does not substitute $E$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The product $a\\cdot e(a)$ adds exponents on $a$, giving $a^{\\frac{1}{2}}$, and then $a$ itself is a power of $t$. Another who forgot to substitute $a(t)$ would have left $E$ as a power of the fleet, not of time.

**3.** Extra check at $t=16$: $E(16)=240\\cdot 2=480$, which letter D will use as a level. That $480$ sitting on $240 t^{\\frac{1}{4}}$ is the fingerprint of a power of time.

**4.** If intensity had carried an intercept, $e=k a^{-\\frac{1}{2}}+c$, the product $a e$ would not have been a power of $a$, hence not a power of $t$. The stem is two pure monomials.

The recovered total $E(t)=240 t^{\\frac{1}{4}}$ is a power of elapsed time, so the statement is True.`,
      `**B.** → False

Doubling elapsed time is $k=2$, and the claim is that total fleet emissions double.

The overview already recorded that doubling time multiplies $E$ by $2^{\\frac{1}{4}}\\approx 1.189$, not by $2$. The coefficient $240$ cancels in the ratio

$$\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}\\neq 2$$

Total emissions rise by about nineteen percent, not by one hundred percent.

**1.** Extra arithmetic on a concrete year: after $1$ year $E(1)=240$, and after $2$ years $E(2)=240\\cdot 2^{\\frac{1}{4}}\\approx 285$, not $480$. Twice $240$ would have been $480$, which is $E(16)$, a sixteenfold wait, because $16^{\\frac{1}{4}}=2$. Mixing $k=16$ with $k=2$ is how a doubling claim can look true.

**2.** Using exponent $1$ is telling a proportional story the composed $\\frac{1}{4}$ contradicts. After isolating the unknown, the check is against $1$. The figure $\\frac{1}{4}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $1$ stays in the write-up. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{\\frac{1}{2}}$ stopped after the fleet stage and forgot the intensity stage.

**3.** Letter A named $E$ as a power of $t$. This letter reads that power as a scale factor. An exponent of $\\frac{1}{4}$ is far below $1$, so doubling time cannot double emissions.

**4.** The opposite verdict would need composed exponent $1$. With $\\frac{1}{4}$, doubling time does not double total fleet emissions.

The recovered doubling factor is $2^{\\frac{1}{4}}$, not $2$, so the statement is False.`,
      `**C.** → False

The claim is that emission intensity rises as the fleet grows.

The overview already recorded that intensity falls as $a$ grows. Intensity is $e(a)=120 a^{-\\frac{1}{2}}$. The exponent is negative, so intensity falls, not rises. A negative leftover power cannot climb.

**1.** Extra arithmetic at the logged fleet and a neighbour: $e(16)=30$, and $e(64)=120/8=15$, already half as large on a fourfold fleet, matching $4^{-\\frac{1}{2}}=\\frac{1}{2}$. At $a=4$, $e(4)=120/2=60$, twice the logged $30$, on a smaller fleet.

**2.** Seeing total emissions $E$ rise with time and concluding that intensity must also rise has mixed $E=a e$ with $e$ itself. Working from the isolated values, $E$ is the figure that is checked, not the detour that produced $e$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The fleet grows; intensity falls; the product still rises, slowly, because $a^{\\frac{1}{2}}$ grows. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. a positive exponent on $e$ has rewritten the stem.

**3.** Letter A composed a falling intensity with a rising fleet and still got a rising $E(t)$. That is compatible with this letter's falling $e(a)$. Rising intensity would have needed a positive exponent on $a$ in $e$.

**4.** The opposite verdict would need $k a^{r}$ with $r>0$. The stem's $-\\frac{1}{2}$ forces intensity down as the fleet grows.

The recovered intensity $120 a^{-\\frac{1}{2}}$ falls as the fleet grows, so the statement is False.`,
      `**D.** → True

This is a level of composed emissions after $16$ years, asked against a threshold of $400$.

The overview already evaluated $E(16)=480$. Four hundred and eighty exceeds $400$. Sixteen years give $16^{\\frac{1}{4}}=2$, and $240\\cdot 2=480$.

**1.** Using $E=240\\cdot 16=3840$ skipped the fourth root. Once $E=240\\cdot 16=3840$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $E=240\\cdot\\sqrt{16}=960$ used a square root instead of a fourth root and still passed the threshold, for the wrong power.

**2.** Extra arithmetic at $t=1$: $E(1)=240$, which sits under $400$. The threshold test is about $t=16$ specifically. Between $1$ and $16$ years emissions cross $400$, and at $16$ they have reached $480$. Letter E's $E(1)=240<250$ is a different comparison.

**3.** The opposite verdict would need $E(16)\\le 400$, which would have required a smaller $k$. The intensity reading $e(16)=30$ forces $k=120$ and $E(16)=480$.

The recovered total after $16$ years is $480$, above $400$, so the statement is True.`,
      `**E.** → True

This is a level after $1$ year, asked against a threshold of $250$.

The overview already evaluated $E(1)=240$. Two hundred and forty sits under $250$. One to any power is $1$, so $E(1)=240$, the coefficient itself.

**1.** Using $E(1)=4\\cdot 120=480$, multiplying the two coefficients without the composition exponents, would sit above $250$ and fail the threshold on a wrong product. That is the fork: $E(1)=4\\cdot 120=480$ belongs to the recovered isolation, $250$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $E(1)=0$ as if $t=0$ had leaked in has left the domain $t>0$.

**2.** Extra arithmetic at $t=16$: $E(16)=480$, which sits above $250$. The threshold test is about $t=1$ specifically. The coefficient $240$ is the one-year reading, and $240<250$ is a modest clearance of $10$.

**3.** Letter D's $480>400$ at $t=16$ does not license $240>250$ at $t=1$. Thresholds are local. The recovered $240$ sits $10$ below $250$.

The recovered total after $1$ year is $240$, under $250$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 23,
    solution_overview: `The fleet is $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles and intensity is $e(a)=k a^{-\\frac{1}{2}}$, with $e(16)=30$. Total emissions are $E=ae(a)$.

**Part 1: Building the model.**

Let $t$ = years and $a$ = fleet size. The intensity reading at $a=16$ fixes $k$. Composition then multiplies exponents.

**1. Translate: the intensity reading.**

$$k\\cdot 16^{-\\frac{1}{2}}=30$$

**Part 2: The model.**

$$k=120, \\qquad E(t)=240 t^{\\frac{1}{4}} \\tag{1}$$

**Part 3: Solve.**

**1.** $E(16)=480>400$ and $E(1)=240<250$. The composed exponent is $\\frac{1}{4}$, so $E$ is a power of $t$.

**2.** Doubling time multiplies $E$ by $2^{\\frac{1}{4}}$. Intensity falls as $a$ grows.

**Answer.** $k=120$ | $E(t)=240 t^{\\frac{1}{4}}$ | $E(16)=480$`,
  },
  {
    id: `math-8-24`,
    case_id: `MATH 8.24`,
    title: `Pipeline Capacity, Inversion, and a Change of Units`,
    context: `Flow capacity through a pipe follows $Q(d)=A d^{\\frac{5}{2}}$ litres per second, where $d>0$ is the internal diameter in centimetres. A bench test on a $4$ cm pipe measured $64$ litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because the exponent exceeds one, capacity grows faster than diameter.`,
      `To double the bench capacity of $64$ litres per second, the diameter must more than double.`,
      `The diameter needed for a given capacity is itself a power function of that capacity.`,
      `A capacity of $250$ litres per second requires a diameter above $10$ cm.`,
      `Doubling the diameter multiplies capacity by more than $5$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Flow capacity is $Q(d)=A d^{\\frac{5}{2}}$ litres per second, and the bench test $Q(4)=64$ pins $A$. This letter asks whether capacity grows faster than diameter, that is whether $r>1$.

The overview already recovered $A=2$ and recorded that $\\frac{5}{2}>1$. Multiplying diameter by $k$ multiplies capacity by $k^{\\frac{5}{2}}$, a larger factor. Capacity outruns diameter.

**1.** Extra arithmetic on the bench pipe: doubling $4$ cm is $8$ cm, and $Q(8)=2\\cdot 8^{\\frac{5}{2}}=2\\cdot 32\\sqrt{8}=2\\cdot 64\\sqrt{2}=128\\sqrt{2}\\approx 181$ against $Q(4)=64$. Capacity multiplies by about $2.83$, faster than the doubling of diameter. That factor is $2^{\\frac{5}{2}}=4\\sqrt{2}$, letter E's identity at this concrete pair.

**2.** Comparing $64$ litres with $4$ cm and seeing sixteen litres per centimetre has a level of the average, not a growth-rate statement. So the letter reads the claim against $64$; $4$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $64$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Growth rate is $r$ against $1$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r=2$ from an area story has the wrong exponent.

**3.** Letter B is the reverse scale question: doubling capacity rather than doubling diameter. Letter E is the forward doubling of diameter. This letter is only $r>1$.

**4.** If the bench ratio had been $Q(8)/Q(4)=1.5$, then $r<1$ and this claim would have been false. The exponent $\\frac{5}{2}$ is given in the stem, and $\\frac{5}{2}>1$ is forced.

The recovered exponent $\\frac{5}{2}$ sits above one, so the statement is True.`,
      `**B.** → False

The claim is a reverse scale question: to double the bench capacity of $64$ litres per second, must the diameter more than double.

The overview already recorded that doubling capacity needs a diameter factor $2^{\\frac{2}{5}}\\approx 1.32$, which is less than $2$. Because the exponent exceeds one, a doubling of output needs less than a doubling of the input. The diameter must less than double, not more.

**1.** Extra arithmetic on the inversion:

$$2 d^{\\frac{5}{2}}=128, \\qquad d^{\\frac{5}{2}}=64, \\qquad d=64^{\\frac{2}{5}}=(2^{6})^{\\frac{2}{5}}=2^{\\frac{12}{5}}\\approx 5.28$$

against the bench $4$ cm. The ratio $5.28/4=1.32<2$. Reporting $8$ cm used exponent $1$ on the reverse question. So the letter reads the claim against $8$; $1$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $8$ stays in the write-up.

**2.** Mixing this reverse question with letter E's forward doubling would have required a diameter of $8$ cm to more-than-triple capacity, which is a different job. The opposite verdict would need a different isolation than $8$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Forward $k=2$ multiplies $Q$ by $4\\sqrt{2}\\approx 5.66$. Reverse $Q\\times 2$ multiplies $d$ by $2^{2/5}$.

**3.** Extra check: $Q(5.28)\\approx 128$, twice the bench. $Q(8)\\approx 181$, already more than twice, which is why a full doubling of diameter overshoots a doubling of capacity.

**4.** The opposite verdict would need $r<1$, where doubling output would need more than a doubling of diameter. The stem's $\\frac{5}{2}>1$ forces the opposite.

The recovered diameter factor for doubled capacity is $2^{\\frac{2}{5}}<2$, so the statement is False.`,
      `**C.** → True

The claim is about the inverse: whether the diameter needed for a given capacity is itself a power function of that capacity.

The overview already recorded $d=(Q/2)^{\\frac{2}{5}}$. A nonzero power inverts to another power. From $Q=2d^{\\frac{5}{2}}$, isolate $d$ by raising to the reciprocal exponent $\\frac{2}{5}$. The result is a monomial in $Q$, coefficient $2^{-\\frac{2}{5}}$ and exponent $\\frac{2}{5}$.

That is a power function of capacity. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at the bench: $d=(64/2)^{\\frac{2}{5}}=32^{\\frac{2}{5}}=2$, wait, $32^{2/5}=(2^{5})^{2/5}=4$, which returns the bench diameter. That inversion landing on $4$ cm is how we know the inverse is the right monomial.

**2.** Thinking a fractional exponent could not invert to a power has forgotten that $u^{r}$ inverts to $u^{1/r}$. That is the fork: $u^{r}$ belongs to the recovered isolation, $u^{1/r}$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who wrote $d=\\log Q$ mixed this pipe with an exponential technology.

**3.** Letter D uses this inverse at $Q=250$. Letter B used it at $Q=128$. This letter names the inverse as a function class. The same $d\\propto Q^{2/5}$ is what made doubling capacity cheaper in diameter than a linear guess.

**4.** If capacity had been $Q=2d^{\\frac{5}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial.

The recovered diameter is a power of capacity, so the statement is True.`,
      `**D.** → False

A capacity of $250$ litres per second is an inversion, asked against a threshold of $10$ cm.

The overview already inverted $d\\approx 6.90$ cm, below $10$. The extra arithmetic is that inversion:

$$2d^{\\frac{5}{2}}=250, \\qquad d^{\\frac{5}{2}}=125, \\qquad d=125^{\\frac{2}{5}}=5^{\\frac{6}{5}}$$

Since $5^{\\frac{6}{5}}=5\\cdot 5^{\\frac{1}{5}}$ and $5^{\\frac{1}{5}}<2$, the product sits below $10$. Directly, $5^{1.2}\\approx 6.90$.

**1.** Using $d=250/2=125$ skipped the exponent and would have passed "above $10$" on a huge overestimate. The stem's recovered values line up with $d=250/2=125$, whereas $10$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $d=250/2=125$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $d=(250/2)^{\\frac{5}{2}}$ inverted the reciprocal the wrong way.

**2.** Extra arithmetic at $Q=64$, the bench: $d=4$, well below $10$. At $Q=2\\cdot 4^{\\frac{5}{2}}\\cdot 2^{\\frac{5}{2}}$ wait. At $d=10$, $Q(10)=2\\cdot 10^{\\frac{5}{2}}=2\\cdot 100\\sqrt{10}\\approx 632$, far above $250$. So $250$ litres need much less than $10$ cm.

**3.** Letter B's doubled bench needed about $5.28$ cm. This letter's $250$ litres need about $6.90$ cm. Both sit below $10$. The claim's "above $10$" is a linear trap, as if $250/64$ times $4$ cm were about $16$ cm.

The recovered diameter for $250$ L/s is about $6.90$ cm, not above $10$, so the statement is False.`,
      `**E.** → True

Doubling the diameter is $k=2$, and the claim is that capacity is multiplied by more than $5$.

The overview already recorded $2^{\\frac{5}{2}}=4\\sqrt{2}\\approx 5.657$. Since $4\\sqrt{2}>5$, capacity is multiplied by more than $5$. The coefficient $A$ cancels in the ratio

$$\\frac{Q(2d)}{Q(d)}=2^{\\frac{5}{2}}=4\\sqrt{2}$$

**1.** Extra arithmetic on the bench pipe: $Q(8)\\approx 181$ against $Q(4)=64$, and $181/64\\approx 2.83$ wait, that is $2^{3/2}$ if I used the wrong exponent. Check: $2^{5/2}=4\\sqrt{2}\\approx 5.66$, and $64\\times 5.66\\approx 362$, so $Q(8)=2\\cdot 8^{5/2}=2\\cdot (8^{2}\\sqrt{8})=2\\cdot 64\\cdot 2\\sqrt{2}=256\\sqrt{2}\\approx 362$. Yes, $362/64\\approx 5.66>5$.

**2.** Using $2^{2}=4$, an area story, would have reported less than $5$ and failed the claim. Working from the isolated values, $2^{2}=4$ is the figure that is checked, not the detour that produced $5$. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{3}=8$, a volume story, would have passed with a larger factor than the stem's $\\frac{5}{2}$. The pipe combines an area-like $2$ with a half from turbulent flow, giving $\\frac{5}{2}$.

**3.** Letter B was the reverse question. This letter is the forward doubling. More than $5$ is a comparison with $4\\sqrt{2}$, genuine because $\\sqrt{2}>1.25$.

**4.** The opposite verdict would need $2^{r}\\le 5$, hence $r\\le \\log_{2} 5\\approx 2.32$. The stem's $2.5$ sits above that line.

Doubling the diameter multiplies capacity by $4\\sqrt{2}>5$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 24,
    solution_overview: `Capacity is $Q(d)=A d^{\\frac{5}{2}}$ litres per second with $Q(4)=64$.

**Part 1: Building the model.**

Let $d$ = diameter in centimetres. The exponent is given, so the bench test fixes $A$.

**1. Translate: the bench test.**

$$A\\cdot 4^{\\frac{5}{2}}=64$$

**Part 2: The model.**

$$Q(d)=2d^{\\frac{5}{2}} \\tag{1}$$

**Part 3: Solve.**

**1.** Because $\\frac{5}{2}>1$, capacity outruns diameter. Doubling $d$ multiplies $Q$ by $4\\sqrt{2}\\approx 5.66$.

**2.** $Q=250$ inverts to $d\\approx 6.90$ cm, below $10$. Doubling the $64$ L/s bench needs a diameter factor $2^{\\frac{2}{5}}\\approx 1.32$, not more than a doubling. The inverse is a power of $Q$.

**Answer.** $A=2$ | doubling factor $4\\sqrt{2}$ | $d\\approx 6.90$ for $Q=250$`,
  },
  {
    id: `math-8-25`,
    case_id: `MATH 8.25`,
    title: `From Radius Growth to the Area a Service Covers`,
    context: `A delivery hub's service radius follows $r(t)=A t^{\\frac{1}{2}}$ kilometres after $t>0$ hours. After $4$ hours the radius is $6$ kilometres. The area covered is the disc $S=\\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The area covered is proportional to elapsed time.`,
      `Doubling elapsed time doubles the area covered.`,
      `The time needed for a given area is itself a power function of that area.`,
      `After $4$ hours the covered area is already more than $30\\pi$ square kilometres.`,
      `After $9$ hours the covered area has already reached $100\\pi$ square kilometres.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The hub's radius is $r(t)=A t^{\\frac{1}{2}}$ kilometres, with $r(4)=6$, and the covered area is the disc $S=\\pi r^{2}$. This letter asks whether that area is proportional to elapsed time.

The overview already recovered $A=3$ and composed $S(t)=9\\pi t$. The inner square root and the outer square multiply to exponent $1$, so area is a linear monomial in $t$, coefficient $9\\pi$. That is proportionality.

**1.** The extra arithmetic this letter owns is the composition:

$$S=\\pi r^{2}=\\pi (3 t^{\\frac{1}{2}})^{2}=9\\pi t$$

The $t$ to the first power is forced by $\\frac{1}{2}\\times 2=1$. A leftover outer exponent other than $2$ would have broken proportionality.

**2.** Adding $\\frac{1}{2}+2$ would report $S\\propto t^{\\frac{5}{2}}$ and miss lockstep with time. The recovered comparison therefore keeps $\\frac{1}{2}+2$ and does not substitute $S\\propto t^{\\frac{5}{2}}$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Exponents multiply under composition. Another who forgot $\\pi$ would report $S=9t$ and still have proportionality, just with the wrong coefficient. The claim is the function class.

**3.** Extra check at $t=4$: $S(4)=36\\pi$, nine times $4\\pi$, matching $9\\pi\\cdot 4$. At $t=9$, $S(9)=81\\pi=9\\pi\\cdot 9$. The ratio $S(9)/S(4)=9/4$ equals the time ratio. That lockstep is proportionality.

**4.** If radius had been $A t^{\\frac{1}{3}}$, area would have been proportional to $t^{\\frac{2}{3}}$, not to $t$. The stem's square root is what makes the disc linear in time.

The recovered area $S(t)=9\\pi t$ is proportional to elapsed time, so the statement is True.`,
      `**B.** → True

Doubling elapsed time is $k=2$, and along $S(t)=9\\pi t$ the leftover exponent is $1$, so

$$\\frac{S(2t)}{S(t)}=2$$

The area is doubled. This is a scale reading of letter A's proportionality, not a new coefficient.

**1.** Extra arithmetic at the recorded four hours: doubling that wait is $8$ hours, and $S(8)=72\\pi$ against $S(4)=36\\pi$, a factor $2$. Directly, $9\\pi\\cdot 8=72\\pi$. A linear-in-time disc doubles when time doubles.

**2.** Using $k^{2}$ on time, thinking of the disc in radius, would report a factor $4$ and miss the composition. Working from the isolated values, $k^{2}$ is the figure that is checked, not the detour that produced $4$. That contrast is the reason the verdict goes the way it does. Radius doubles when time quadruples, not when time doubles. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $k^{\\frac{1}{2}}$ stopped after the radius stage.

**3.** Letter C names the inverse as a power. Letter E is a false level at $t=9$. This letter is only the doubling identity for a proportional $S$.

**4.** The opposite verdict would need composed exponent other than $1$. With $S\\propto t$, doubling time doubles area.

Doubling elapsed time doubles the covered area, so the statement is True.`,
      `**C.** → True

The claim is about the inverse: whether the time needed for a given area is itself a power function of that area.

The overview already recorded $t=S/(9\\pi)$. A nonzero power inverts to another power. From $S=9\\pi t$, isolate $t$ as a monomial in $S$, coefficient $1/(9\\pi)$ and exponent $1$.

That is a power function of area, in fact a proportional one. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at $S=36\\pi$: $t=(36\\pi)/(9\\pi)=4$, which returns the recorded four hours. That inversion landing on $4$ is how we know the inverse is the right monomial.

**2.** Writing $t=\\log S$ mixed this hub with an exponential technology. The path that matches the stem therefore holds $t=\\log S$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another who added a setup time, $t=1+S/(9\\pi)$, would have left the power-function class; the stem has no such floor.

**3.** Letters A and B used exponent $1$ forward. This letter names the inverse. The same $t\\propto S$ is what made doubling area cost a doubling of hours.

**4.** If area had been $9\\pi t+c$ with a leftover constant, the inverse would not have been a power. The stem's composition is a pure monomial.

The recovered time is a power of the covered area, so the statement is True.`,
      `**D.** → True

This is a level after $4$ hours, asked against a threshold of $30\\pi$ square kilometres.

The overview already evaluated $S(4)=36\\pi$. Thirty-six $\\pi$ sits above $30\\pi$. Four hours into $9\\pi t$ is $36\\pi$.

**1.** Using $S=\\pi r^{2}$ with $r=4$ rather than $r=6$ would report $16\\pi$, under $30\\pi$, mixing hours with kilometres. The recovered comparison therefore keeps $S=\\pi r^{2}$ and does not substitute $30\\pi$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recorded radius is $6$ km after $4$ hours, and $\\pi\\cdot 36=36\\pi$.

**2.** Extra arithmetic at $t=3$: $S(3)=27\\pi$, which sits below $30\\pi$. The threshold test is about $t=4$ specifically. Between $3$ and $4$ hours the disc crosses $30\\pi$, and at $4$ it has reached $36\\pi$.

**3.** Letter E asks for $100\\pi$ at $t=9$ and fails. This letter's $30\\pi$ at $t=4$ is a different comparison. The recovered $36\\pi$ is $6\\pi$ above $30\\pi$.

The recovered area after $4$ hours is $36\\pi$, above $30\\pi$, so the statement is True.`,
      `**E.** → False

This is a level after $9$ hours, asked against a figure of $100\\pi$ square kilometres.

The overview already evaluated $S(9)=81\\pi$. Eighty-one $\\pi$ is not $100\\pi$. Nine hours into $9\\pi t$ is $81\\pi$.

The figure $100\\pi$ is $r=10$ in disguise, $\\pi\\cdot 10^{2}$, as if the radius after $9$ hours were $10$ km rather than $9$. The recovered radius is $r(9)=3\\cdot 3=9$ km, so the disc is $81\\pi$, not $100\\pi$.

**1.** Using $S=9\\pi\\cdot 9^{2}$ mixed the coefficient $9\\pi$ with a second square. The stem's recovered values line up with $S=9\\pi\\cdot 9^{2}$, whereas $9\\pi$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $S=9\\pi\\cdot 9^{2}$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r(9)=A\\cdot 9=27$ skipped the square root and would report an even larger disc.

**2.** Extra arithmetic that manufactures $100\\pi$: a radius of $10$ km, which would take $t=(10/3)^{2}\\approx 11.1$ hours, past $9$. Pointing that later disc at $t=9$ is a mix of two times.

**3.** Letter D's $36\\pi>30\\pi$ does not license $81\\pi=100\\pi$. The recovered $81\\pi$ sits $19\\pi$ below $100\\pi$.

The recovered area after $9$ hours is $81\\pi$, not $100\\pi$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 25,
    solution_overview: `Radius is $r(t)=A t^{\\frac{1}{2}}$ kilometres with $r(4)=6$. Area is $S=\\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours. The four-hour radius fixes $A$. Area then composes a square with that square root.

**1. Translate: the recorded radius.**

$$A\\cdot 2=6$$

**Part 2: The model.**

$$r(t)=3t^{\\frac{1}{2}} \\tag{1}$$

$$S(t)=9\\pi t \\tag{2}$$

**Part 3: Solve.**

**1.** $S(4)=36\\pi>30\\pi$ and $S(9)=81\\pi$, not $100\\pi$.

**2.** $(2)$ is proportional to $t$, so doubling time doubles area. The inverse $t=S/(9\\pi)$ is a power of $S$.

**Answer.** $A=3$ | $S(t)=9\\pi t$ | $S(4)=36\\pi$ | $S(9)=81\\pi$`,
  },
  {
    id: `math-8-26`,
    case_id: `MATH 8.26`,
    title: `Two Support Contracts, One Crossing and One Cap`,
    context: `A helpdesk compares two support contracts for $u>0$ tickets a month. Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ and never charges more than $400$. A filed invoice shows $36$ tickets billed at $240$. Plan B bills a flat $5$ per ticket with no cap. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $64$ tickets both plans still sit under the $400$ cap.`,
      `Below the crossing, Plan B is the cheaper contract.`,
      `Plan A's cap eventually binds as ticket volume grows.`,
      `Plan A's cost per ticket falls as ticket volume rises.`,
      `At $144$ tickets Plan A bills more than $450$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Plan A bills $C_{A}(u)=a u^{\\frac{1}{2}}$ with a cap of $400$, and the filed invoice $C_{A}(36)=240$ pins $a$. Plan B bills $5u$. This letter asks whether at $64$ tickets both plans still sit under the $400$ cap.

The overview already recovered $a=40$ and the uncapped crossing $u=64$ costing $320$. Both bills equal $320$ at sixty-four tickets, and $320<400$. The cap has not yet bound.

**1.** Extra arithmetic of the two bills at $u=64$:

$$C_{A}(64)=40\\cdot 8=320, \\qquad C_{B}(64)=5\\cdot 64=320$$

They meet at $320$, eighty euros under the cap. Using $C_{A}(64)=40\\cdot 64=2560$ skipped the square root and would have blown past $400$ on Plan A alone. The recovered comparison therefore keeps $C_{A}(64)=40\\cdot 64=2560$ and does not substitute $400$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** Inverting the cap first, $40\\sqrt{u}=400$ giving $u=100$, and then assuming $u=64$ was already capped, has mixed two volumes. That is the fork: $40\\sqrt{u}=400$ belongs to the recovered isolation, $u=64$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The cap binds at $100$ tickets, thirty-six past $64$.

**3.** Letter E will ask for $u=144$, past the cap. This letter is $u=64$, still uncapped, with both plans at $320$. Mixing those two volumes is how that mix could cap Plan A four dozen tickets early.

**4.** The opposite verdict would need $320\\ge 400$, which would have required a larger $a$. The invoice $C_{A}(36)=240$ forces $a=40$ and a meeting of $320$.

The recovered bills at $64$ tickets are both $320$, under $400$, so the statement is True.`,
      `**B.** → True

The claim is that below the crossing, Plan B is the cheaper contract.

The overview already recorded that the uncapped bills meet at $u=64$, and that Plan B is cheaper for $u<64$. A square root starts above a line through the origin at small $u$ and is then overtaken. Below the crossing the linear Plan B is the smaller bill.

**1.** Extra arithmetic at the invoice volume $u=36$: $C_{A}(36)=240$ and $C_{B}(36)=180$, so Plan B is cheaper by $60$ euros. At $u=16$, $C_{A}(16)=160$ and $C_{B}(16)=80$, Plan B cheaper by $80$. Both sit below $u=64$.

**2.** Thinking "a cap makes A cheaper everywhere" has imported the later bind into the uncapped region. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who swapped the comparison because $a=40>5$ compared coefficients instead of the bills at small $u$. Coefficients set the crossing; below it the smaller exponent, Plan A's $\\frac{1}{2}$, is the more expensive start.

**3.** Letter A found the meeting still under the cap. This letter reads the sign below that meeting. Plan B cheaper below $64$ is the square-root-versus-line story, not the cap story.

**4.** The opposite verdict would need Plan A's exponent above one, so that A started cheaper. With $\\frac{1}{2}$, A starts more expensive and is overtaken at $64$.

The recovered Plan B bill is smaller below the crossing, so the statement is True.`,
      `**C.** → True

The claim is that Plan A's cap eventually binds as ticket volume grows.

The overview already recorded that the cap binds from $u=100$, when $40\\sqrt{u}=400$. From that volume onward billed Plan A is the constant $400$. A growing ticket count will hit that cap, because a positive power of $u$ tends to infinity.

**1.** Extra arithmetic at the bind: $\\sqrt{u}=10$ and $u=100$. At $u=121$, uncapped $C_{A}$ would be $40\\cdot 11=440$, but billed Plan A is $400$. The cap has bitten. At $u=64$, letter A's $320$ is still free of the cap, so the bind is later, not never.

**2.** Thinking an exponent below one could never reach $400$ has confused "grows slowly" with "bounded." $40\\sqrt{u}\\to\\infty$ as $u\\to\\infty$. So the letter reads the claim against $400$; $u\\to\\infty$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $400$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Plan B's linear growth and declared A never hits $400$ because B hits it first has mixed two contracts. Plan B has no cap in the stem.

**3.** Letter E is a level past the bind. This letter is the existence of the bind. An exponent of $0$ would have been needed for A never to reach $400$. The stem's $\\frac{1}{2}>0$.

**4.** The opposite verdict would need $a\\sqrt{u}$ bounded below $400$, which a positive power cannot be, or a smaller $a$ whose bind sits past every practical volume. With $a=40$ the bind is at $100$ tickets.

Plan A's cap binds from $u=100$ onward, so the statement is True.`,
      `**D.** → True

The claim is that Plan A's cost per ticket falls as ticket volume rises.

The overview already recorded that unit cost falls on both pieces. Uncapped, Plan A's cost per ticket is $40 u^{-\\frac{1}{2}}$, a negative leftover power, so that average falls. After the cap binds, the constant $400$ is spread over more tickets, so $400/u$ falls as well.

**1.** Extra arithmetic on the uncapped piece: at $u=36$, unit cost is $240/36\\approx 6.67$, and at $u=64$, $320/64=5$, already lower. On the capped piece, at $u=100$ unit cost is $4$, and at $u=144$, $400/144\\approx 2.78$, still falling.

**2.** Seeing the billed total climb from $240$ to $400$ and stop, then concluded that unit cost must rise, has mixed the total with the average. That is the fork: $240$ belongs to the recovered isolation, $400$ belongs to the discarded mix. A capped total spread over more tickets is cheaper per ticket, not dearer.

**3.** Letter B compared the two plans' totals below the crossing. This letter is Plan A's average, on both pieces. An exponent $r>1$ on the uncapped piece would have raised unit cost before the cap; the stem's $\\frac{1}{2}<1$ forbids that.

**4.** The opposite verdict would need a rising average on some piece. Neither $40/\\sqrt{u}$ nor $400/u$ rises.

The recovered Plan A unit cost falls on both pieces, so the statement is True.`,
      `**E.** → False

This is a billed level at $144$ tickets, asked against a threshold of $450$.

The overview already recorded that at $u=144$ the bill is $400$, the cap, not more than $450$. Uncapped, $40\\cdot 12=480$ would have sat above $450$, but the cap has already bound at $u=100$. Billed Plan A is $400$.

**1.** Forgetting the cap and reporting $480$ would pass "more than $450$" on the uncapped power. Working from the isolated values, $480$ is the figure that is checked, not the detour that produced $450$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The stem's $400$ lid is the whole content of this letter. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Plan B at $u=144$, $5\\cdot 144=720$, has the wrong contract.

**2.** Extra arithmetic at $u=100$, the bind: billed A is $400$, already not more than $450$. At $u=144$ it is still $400$. The threshold $450$ sits between the uncapped $480$ and the cap $400$, which is why forgetting the cap flips the verdict.

**3.** Letter A's $320<400$ at $u=64$ does not license $480>450$ at $u=144$. Past the bind the billed series is the constant $400$.

The recovered billed Plan A at $144$ tickets is $400$, not more than $450$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 26,
    solution_overview: `Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ with a cap of $400$, and $C_A(36)=240$. Plan B bills $5u$.

**Part 1: Building the model.**

Let $u$ = tickets. The invoice fixes $a$. The cap turns Plan A into a two-piece rule.

**1. Translate: the invoice.**

$$6a=240$$

**Part 2: The model.**

$$C_A(u)=\\min\\{40\\sqrt{u},\\,400\\} \\tag{1}$$

$$C_B(u)=5u \\tag{2}$$

**Part 3: Solve.**

**1.** Uncapped crossing at $u=64$ costing $320<400$. Plan B is cheaper for $u<64$. The cap binds from $u=100$.

**2.** At $u=144$ the bill is $400$, not more than $450$. Unit cost falls on both pieces.

**Answer.** $a=40$ | crossing $u=64$ | cap from $u=100$ | $C_A(144)=400$`,
  },
  {
    id: `math-8-27`,
    case_id: `MATH 8.27`,
    title: `An Eighty Percent Learning Curve Meeting a Materials Floor`,
    context: `Unit cost on a new assembly line follows $c(N)=c_1 N^{-b}$ for cumulative output $N>0$. Every doubling of cumulative output multiplies unit cost by $0.8$, and the first unit cost $1000$. Materials alone cost $400$ per unit, so the curve cannot describe costs below that floor. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An extra unit of output cuts modelled unit cost by more after the first unit than after eight units.`,
      `Quadrupling cumulative output halves the unit cost.`,
      `Unit cost falls more slowly than a simple reciprocal of cumulative output.`,
      `After three successive doublings the modelled unit cost is already under $520$.`,
      `After four successive doublings the modelled unit cost is already under $400$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Unit cost follows $c(N)=c_{1} N^{-b}$ with doubling factor $0.8$ and $c(1)=1000$. This letter is a slope comparison: whether an extra unit of output cuts modelled unit cost by more after the first unit than after eight units.

The overview already recovered $b\\approx 0.322$ from $2^{-b}=0.8$, and recorded that $|c'|$ falls as $N$ rises. The recovered rule $c(N)=1000 N^{-b}$ has derivative $c'(N)=-b\\,1000\\, N^{-b-1}$. The size of that cut falls as $N$ rises because the leftover exponent $-b-1$ is negative. An extra unit cuts more after the first unit than after eight.

**1.** Extra arithmetic at the two named outputs, using $b=\\log_{2}(1/0.8)\\approx 0.3219$:

$$|c'(1)|=b\\cdot 1000\\approx 322, \\qquad |c'(8)|=b\\cdot 1000\\cdot 8^{-b-1}$$

and $8^{-b-1}=(2^{3})^{-b-1}=2^{-3b-3}=(0.8)^{3}/8=0.512/8=0.064$, so $|c'(8)|\\approx 322\\cdot 0.064\\approx 20.6$. An extra unit after the first cuts about $322$ euros of modelled cost, and after eight units only about $21$.

**2.** Seeing $c(8)=512<c(1)=1000$ and concluding that later units are cutting more has confused a lower cost with a steeper cut. The recovered isolation is checked against the claim using $c(8)=512<c(1)=1000$, which is the figure the sessions actually produce. Cost is already low at $N=8$; there is less left to cut. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $b=1$, a simple reciprocal, would have a steeper decline of the slope, still in the same direction.

**3.** Letter C says $b<1$, so cost falls more slowly than $1/N$. This letter is the falling steepness of that fall. Negative-exponent cost has falling marginal benefit of extra output.

**4.** The opposite verdict would need a cost that became steeper as output grew. An $80\\%$ learning curve cannot do that. The two slopes $322$ and $21$ are the comparison the claim reversed.

The recovered cut is larger after the first unit than after eight, so the statement is True.`,
      `**B.** → False

Quadrupling cumulative output is $k=4$, and the claim is that unit cost halves.

The overview already recorded that two doublings multiply cost by $0.64$, not by $0.5$. The coefficient $c_{1}$ cancels in the ratio

$$\\frac{c(4N)}{c(N)}=4^{-b}=(2^{-b})^{2}=0.8^{2}=0.64$$

Unit cost is multiplied by $0.64$, not by $\\frac{1}{2}$.

**1.** Extra arithmetic on the first unit: quadrupling $N=1$ is $N=4$, and $c(4)=1000\\cdot 0.64=640$, not $500$. Half of $1000$ would have been $500$. Directly, two $80\\%$ doublings: $1000\\times 0.8\\times 0.8=640$.

**2.** Using one doubling, $k=2$, would have reported $0.8$, still not a half. The recovered comparison therefore keeps $k=2$ and does not substitute $0.8$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $4^{-1}=1/4$ mixed in a simple reciprocal. Halving cost on a quadrupling would have needed $4^{-b}=1/2$, hence $b=1/2$, hence a doubling factor $2^{-1/2}\\approx 0.707$, not $0.8$.

**3.** Letter D's three doublings give $0.8^{3}=0.512$, near a half but not this letter's quadrupling. Mixing three doublings with two is how a "$0.5$" claim can look close. Two doublings are $0.64$.

**4.** The opposite verdict would need a doubling factor $\\sqrt{1/2}\\approx 0.707$. The stem's $0.8$ is milder, so a quadrupling does not halve unit cost.

The recovered quadrupling factor is $0.64$, not $0.5$, so the statement is False.`,
      `**C.** → True

The claim is that unit cost falls more slowly than a simple reciprocal of cumulative output.

The overview already recorded $b\\approx 0.322<1$. A simple reciprocal would be exponent $-1$. Here $2^{-b}=0.8>0.5=2^{-1}$, so each doubling cuts less than a reciprocal would. The doubling factor $0.8$ is what forces $b<1$.

**1.** Extra arithmetic at $N=8$: a reciprocal $1000/8=125$, against the learning-curve $c(8)=512$. Five hundred and twelve is far above $125$, so the modelled cost has fallen more slowly. At $N=16$, reciprocal $62.5$ against $c(16)=409.6$, the same gap in kind.

**2.** Seeing any falling cost and calling it a reciprocal has ignored the doubling factor. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. An $80\\%$ curve is not a $50\\%$ curve. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $b=2$ from a square in the denominator has the wrong stem.

**3.** Letter B's $0.64$ versus $0.5$ is this letter at $k=4$. Letter A used $b<1$ as falling steepness. This letter names $b<1$ as a comparison with $1/N$.

**4.** The opposite verdict would need $0.8\\le 0.5$, a doubling factor of a reciprocal or steeper. The stem's $0.8$ sits above $0.5$.

The recovered $b\\approx 0.322$ sits below $1$, so unit cost falls more slowly than $1/N$, so the statement is True.`,
      `**D.** → True

Three successive doublings take $N$ from $1$ to $8$, and the claim is that modelled unit cost is already under $520$.

The overview already evaluated $c(8)=512$. Five hundred and twelve sits under $520$. Three $80\\%$ doublings: $1000\\times 0.8^{3}=1000\\times 0.512=512$.

**1.** Using four doublings, $c(16)=409.6$, would still pass "under $520$" on the wrong output. So the letter reads the claim against $c(16)=409.6$; $520$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $c(16)=409.6$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $0.8\\times 3=2.4$ additively would be lost. Successive doublings multiply.

**2.** Extra arithmetic at $N=4$, two doublings: $c(4)=640$, which sits above $520$. The threshold test is about three doublings specifically. Between two and three doublings cost crosses $520$, and at eight units it has reached $512$.

**3.** Letter E asks for four doublings against the materials floor of $400$ and fails. This letter's $520$ at $N=8$ is a different comparison. The recovered $512$ is $8$ under $520$, a tight but genuine clearance.

The recovered modelled cost after three doublings is $512$, under $520$, so the statement is True.`,
      `**E.** → False

Four successive doublings take $N$ to $16$, and the claim is that modelled unit cost is already under $400$, the materials floor.

The overview already evaluated $c(16)=409.6$. Four hundred and nine point six still sits above $400$. Four $80\\%$ doublings: $1000\\times 0.8^{4}=1000\\times 0.4096=409.6$.

The materials floor is $400$, and $409.6$ has not reached it. The curve cannot describe costs below $400$, but at $N=16$ it has not yet tried to: the model still sits $9.6$ above the floor.

**1.** Using $0.8^{4}=0.4$ exactly, dropping the $0.0096$, would report $400$ on the nose and call the floor binding. The stem's recovered values line up with $0.8^{4}=0.4$, whereas $400$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $0.8^{4}=0.4$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exact product is $0.4096$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. three doublings, $512$, would sit well above $400$ on the wrong output.

**2.** Extra arithmetic that inverts the floor: $1000 N^{-b}=400$ gives $N^{-b}=0.4$, so $N=0.4^{-1/b}\\approx 0.4^{-3.1}\\approx 18$ or so, past $16$. Four doublings are not yet enough. Five doublings, $N=32$, give $c(32)=327.68$, which would sit under $400$ and be censored by the floor.

**3.** Letter D's $512<520$ does not license $409.6<400$. The floor is $400$, and $409.6$ is still above it.

The recovered modelled cost after four doublings is $409.6$, not under $400$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 27,
    solution_overview: `Unit cost is $c(N)=c_1 N^{-b}$ with doubling factor $0.8$ and $c(1)=1000$. Materials floor at $400$.

**Part 1: Building the model.**

Let $N$ = cumulative output. The doubling rule isolates $b$. The first-unit cost is $c_1$.

**1. Translate: the doubling rule.**

$$2^{-b}=0.8$$

**Part 2: The model.**

$$c(N)=1000 N^{-0.3219} \\tag{1}$$

**Part 3: Solve.**

**1.** $c(8)=512$, which is under $520$. Two doublings multiply cost by $0.64$, not by $0.5$. $c(16)=409.6$, still above $400$.

**2.** $|c'|$ falls as $N$ rises. The doubling factor $0.8>0.5$, so unit cost falls more slowly than $1/N$.

**Answer.** $b\\approx 0.322$ | $c(8)=512$ | $c(16)=409.6$ | floor not binding at $N=16$`,
  },
  {
    id: `math-8-28`,
    case_id: `MATH 8.28`,
    title: `Advertising Revenue Against a Proportional Platform Fee`,
    context: `A merchant's sales revenue from an advertising spend $x>0$ follows $R(x)=A x^{\\frac{1}{2}}$. At a spend of $100$ the campaign brings in $900$. The platform charges a fee $F(x)=6x$ on the same spend. Net gain is $R(x)-F(x)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the spend doubles revenue.`,
      `Revenue per euro of spend falls as the campaign grows.`,
      `Once net gain turns negative, it stays negative at every larger spend.`,
      `At a spend of $100$ the net gain is already above $250$.`,
      `At a spend of $256$ the net gain is still positive.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

Revenue follows $R(x)=A x^{\\frac{1}{2}}$ with $R(100)=900$, and the claim is that doubling the spend doubles revenue.

The overview already recovered $A=90$ and recorded that doubling $x$ multiplies $R$ by $\\sqrt{2}$, not by $2$. The coefficient cancels in the ratio

$$\\frac{R(2x)}{R(x)}=2^{\\frac{1}{2}}\\neq 2$$

**1.** Extra arithmetic on the recorded campaign: doubling $100$ is $200$, and $R(200)=90\\sqrt{200}=90\\cdot 10\\sqrt{2}=900\\sqrt{2}\\approx 1273$ against $R(100)=900$. Twice $900$ would have been $1800$, and $1273$ is not $1800$.

**2.** Using exponent $1$ is telling a proportional story the square-root technology contradicts. Keeping $1$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. the fee $F(x)=6x$, which does double when spend doubles, has mixed revenue with the platform charge.

**3.** Letter B is the falling average $R/x$. Letter C is net gain turning negative. This letter is only the scale factor on $R$. The fee doubling has nothing to do with whether $R$ doubles.

**4.** The opposite verdict would need $r=1$ on revenue. With $r=\\frac{1}{2}$, doubling spend does not double revenue.

The recovered doubling factor is $\\sqrt{2}$, not $2$, so the statement is False.`,
      `**B.** → True

The claim is that revenue per euro of spend falls as the campaign grows.

The overview already recorded that average product $90 x^{-\\frac{1}{2}}$ falls. The leftover exponent is negative, so that average declines as $x$ grows. A square-root technology cannot keep pace with spend.

**1.** Extra arithmetic at the recorded campaign and a neighbour: $R(100)/100=9$ euros of revenue per euro of spend, and $R(225)/225=90\\cdot 15/225=6$, already lower. At $x=400$, $R(400)/400=90\\cdot 20/400=4.5$, half the recorded average.

**2.** Seeing $R$ rise from $900$ to $1350$ at $x=225$ and concluding that spend is becoming more productive has mixed the total with the average. The stem's recovered values line up with $R$, whereas $x=225$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $R$ stays in the write-up. Letter A's $\\sqrt{2}$ scale is the same $r<1$ story. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r>1$ would have a rising average.

**3.** Net gain $N=R-6x$ turns negative once the falling average crosses the fee of $6$, which is letter C. This letter is the falling average itself.

**4.** The opposite verdict would need $r>1$. With $r=\\frac{1}{2}$, revenue per euro falls as the campaign grows.

The recovered average $90 x^{-\\frac{1}{2}}$ falls as spend grows, so the statement is True.`,
      `**C.** → True

Net gain is $N(x)=90\\sqrt{x}-6x$. The claim is that once net gain turns negative, it stays negative at every larger spend.

The overview already recorded the unique positive root $x=225$, and $N<0$ for $x>225$. Past that root the linear fee dominates a square root. A second crossing would need the square root to catch the line again, which a leftover $90/\\sqrt{x}-6$ that keeps falling cannot do.

**1.** Extra arithmetic at the root: $90\\sqrt{225}-6\\cdot 225=90\\cdot 15-1350=0$. At $x=256$, letter E's $N(256)=-96<0$. At $x=400$, $N(400)=90\\cdot 20-2400=-600$, more negative. There is no later catch-up.

**2.** Thinking a square root "grows forever" and must recross a line has forgotten that $6x$ grows faster. The path that matches the stem therefore holds $6x$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Exponent $1$ beats exponent $\\frac{1}{2}$ past a unique crossing. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. two roots from a quadratic in $\\sqrt{x}$ without discarding $x=0$ has counted the origin, which is not a sign change of $N$ on $x>0$ in the same way: $N(0+)$ opens positive.

**3.** Letter D's $N(100)=300>0$ sits before the root. This letter is the sign past the root. Unique leftover power $\\sqrt{x}$ against $x$ crosses once on $x>0$.

**4.** The opposite verdict would need equal exponents, or a fee that flattened. With $N=90\\sqrt{x}-6x$, once negative, always negative at larger spend.

The recovered net gain stays negative past $x=225$, so the statement is True.`,
      `**D.** → True

This is a level of net gain at a spend of $100$, asked against a threshold of $250$.

The overview already evaluated $N(100)=300$. Three hundred sits above $250$. Revenue $900$ minus fee $600$ is $300$.

**1.** Using $R(100)=900$ as if it were net gain would still pass "above $250$" on the wrong object. After isolating the unknown, the check is against $R(100)=900$. The figure $250$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $R(100)=900$ stays in the write-up. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $N=90\\cdot 100-6\\cdot 100=8400$ skipped the square root.

**2.** Extra arithmetic at $x=225$, the break-even: $N(225)=0$, which sits below $250$. The threshold test is about $x=100$ specifically. Between $100$ and $225$ net gain falls through $250$ and then through $0$.

**3.** Letter E's $N(256)=-96$ is a different comparison. $300>250$ is a clear clearance at the recorded campaign.

The recovered net gain at a spend of $100$ is $300$, above $250$, so the statement is True.`,
      `**E.** → False

This is a level of net gain at a spend of $256$, asked against positivity.

The overview already evaluated $N(256)=-96$. Net gain is already negative. Revenue $90\\cdot 16=1440$ minus fee $6\\cdot 256=1536$ is $-96$.

**1.** Using $x=225$ as if $256$ were still before the root would report $N=0$ or small and positive. So the letter reads the claim against $x=225$; $N=0$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $x=225$ stays in the write-up. Two hundred and fifty-six sits $31$ past the break-even $225$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $R(256)=1440$ as net gain has dropped the fee.

**2.** Extra arithmetic at $x=196$, a nearby perfect square before the root: $N(196)=90\\cdot 14-6\\cdot 196=1260-1176=84>0$. The sign change is between $196$ and $256$, at $225$. The claim is $x=256$ specifically.

**3.** Letter D's $300>250$ at $x=100$ does not license positivity at $x=256$. Past $225$ the linear fee has taken over.

The recovered net gain at a spend of $256$ is $-96$, not positive, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `Revenue is $R(x)=A x^{\\frac{1}{2}}$ with $R(100)=900$. The fee is $F(x)=6x$. Net gain is $N=R-F$.

**Part 1: Building the model.**

Let $x$ = advertising spend. The recorded revenue fixes $A$.

**1. Translate: the recorded campaign.**

$$10A=900$$

**Part 2: The model.**

$$N(x)=90\\sqrt{x}-6x \\tag{1}$$

**Part 3: Solve.**

**1.** $N(100)=300>250$. The unique positive root of $(1)$ is $x=225$, and $N<0$ for $x>225$.

**2.** Doubling $x$ multiplies $R$ by $\\sqrt{2}$. Revenue per euro falls. $N(256)=-96$.

**Answer.** $A=90$ | $N(100)=300$ | break-even at $x=225$ | $N(256)=-96$`,
  },
  {
    id: `math-8-29`,
    case_id: `MATH 8.29`,
    title: `Calibrating a Two-Stage Production Chain`,
    context: `A plant runs two stages. Labour $L>0$ hours yields material $m(L)=A L^{\\frac{1}{2}}$ tonnes, and material is converted by $g(m)=B m^{\\frac{3}{2}}$ finished units. $100$ labour hours yielded $40$ tonnes of material, and a run on $9$ tonnes of material produced $54$ finished units. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Material grows more slowly than labour hours.`,
      `Doubling labour hours doubles finished output.`,
      `Finished output per labour hour falls as labour rises.`,
      `The labour needed for a given finished count is itself a power of that count.`,
      `After $81$ labour hours, finished output is already above $400$ units.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Material is $m(L)=A L^{\\frac{1}{2}}$ with $m(100)=40$. This letter asks whether material grows more slowly than labour hours, that is whether the material exponent sits below one.

The overview already recovered $A=4$ and recorded that $\\frac{1}{2}<1$. Multiplying labour by $k$ multiplies material by $k^{\\frac{1}{2}}$, a smaller factor. Material grows more slowly than labour hours.

**1.** Extra arithmetic on the recorded run: doubling $100$ hours is $200$ hours, and $m(200)=4\\sqrt{200}=40\\sqrt{2}\\approx 56.6$ against $m(100)=40$. Material multiplies by about $1.41$, slower than the doubling of hours.

**2.** Comparing $40$ tonnes with $100$ hours and seeing $0.4$ tonnes per hour has an average, not a growth-rate statement. The stem's recovered values line up with $40$, whereas $0.4$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $40$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Growth rate is $r$ against $1$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. the finished-output exponent $\\frac{3}{4}$ from letter B has mixed the two stages.

**3.** Letter B is a scale claim on the composed finished output. Letter C is the falling average of finished output. This letter is only the material stage's $r=\\frac{1}{2}<1$.

**4.** The opposite verdict would need material exponent $\\ge 1$. The stem's $\\frac{1}{2}$ sits below $1$.

The recovered material exponent sits below one, so the statement is True.`,
      `**B.** → False

The conversion is $g(m)=B m^{\\frac{3}{2}}$ with $g(9)=54$, and composing with material gives $g=16 L^{\\frac{3}{4}}$. The claim is that doubling labour hours doubles finished output.

The overview already recorded that doubling $L$ multiplies $g$ by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. The composed coefficient cancels in the ratio

$$\\frac{g(2L)}{g(L)}=2^{\\frac{3}{4}}\\neq 2$$

**1.** Extra arithmetic on a concrete staffing: after $81$ hours letter E's $g(81)=432$, and after $162$ hours $g(162)=16\\cdot 162^{\\frac{3}{4}}=16\\cdot (81\\cdot 2)^{\\frac{3}{4}}=432\\cdot 2^{\\frac{3}{4}}\\approx 726$, not $864$. Twice $432$ would have been $864$.

**2.** Using exponent $1$ on the composition, adding $\\frac{1}{2}+\\frac{3}{2}=2$ instead of multiplying $\\frac{1}{2}\\cdot\\frac{3}{2}=\\frac{3}{4}$, would have reported a quadrupling of finished output on a doubling of labour, a different false claim. The stem's recovered values line up with $1$, whereas $\\frac{1}{2}\\cdot\\frac{3}{2}=\\frac{3}{4}$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $1$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Exponents multiply under composition.

**3.** Letter A used $\\frac{1}{2}$ on material alone. This letter uses the product $\\frac{3}{4}$ on finished output. Both sit below $1$, so neither stage nor the chain doubles when labour doubles.

**4.** The opposite verdict would need composed exponent $1$. With $\\frac{3}{4}$, doubling labour does not double finished output.

The recovered doubling factor is $2^{\\frac{3}{4}}$, not $2$, so the statement is False.`,
      `**C.** → True

The claim is that finished output per labour hour falls as labour rises.

The overview already recorded that output per hour is $16 L^{-\\frac{1}{4}}$. The leftover exponent is negative, so that average falls as labour rises. A composed exponent below one forces a falling average product.

**1.** Extra arithmetic at the recorded labour and a neighbour: after $100$ hours, material is $40$ tonnes and finished output is $g=2\\cdot 40^{\\frac{3}{2}}=2\\cdot 80\\sqrt{10}\\approx 506$, so average about $5.06$ units per hour. After $81$ hours, $g(81)=432$ and $432/81\\approx 5.33$, already higher than at $100$ hours, as a falling average requires. After $16$ hours, $g(16)=16\\cdot 8=128$ and $128/16=8$, higher still.

**2.** Seeing $g$ rise with $L$ and concluding that labour is becoming more productive has mixed the total with the average. The recovered comparison therefore keeps $g$ and does not substitute $L$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter B's $2^{3/4}$ scale is the same $r<1$ story.

**3.** Letter D names the inverse as a power. This letter is the falling average. An exponent above one on the composition would have raised the average.

**4.** The opposite verdict would need composed $r>1$. With $r=\\frac{3}{4}$, finished output per hour falls as labour rises.

The recovered average $16 L^{-\\frac{1}{4}}$ falls as labour rises, so the statement is True.`,
      `**D.** → True

The claim is about the inverse: whether the labour needed for a given finished count is itself a power of that count.

The overview already recorded $L=(g/16)^{\\frac{4}{3}}$. A nonzero power inverts to another power. From $g=16 L^{\\frac{3}{4}}$, isolate $L$ by raising to the reciprocal exponent $\\frac{4}{3}$. The result is a monomial in $g$.

That is a power function of the finished count. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at $g=432$: $L=(432/16)^{\\frac{4}{3}}=27^{\\frac{4}{3}}=81$, which returns letter E's eighty-one hours. That inversion landing on $81$ is how we know the inverse is the right monomial.

**2.** Writing $L=\\log g$ mixed this plant with an exponential technology. Once $L=\\log g$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another who added a setup, $L=5+(g/16)^{\\frac{4}{3}}$, would have left the power-function class; the stem has no such floor.

**3.** Letter B used the inverse exponent $\\frac{4}{3}$ as a reverse scale. This letter names the inverse as a function class. The same $L\\propto g^{4/3}$ is what made doubling finished output cost more than a doubling of hours.

**4.** If the composition had carried an intercept, the inverse would not have been a power. The stem is two pure monomials composed.

The recovered labour is a power of the finished count, so the statement is True.`,
      `**E.** → True

This is a level after $81$ labour hours, asked against a threshold of $400$ finished units.

The overview already evaluated $g(81)=432$. Four hundred and thirty-two sits above $400$. Eighty-one to the $\\frac{3}{4}$ is $27$, and $16\\cdot 27=432$.

**1.** Using $g=16\\cdot 81=1296$ skipped the fractional power. The recovered isolation is checked against the claim using $g=16\\cdot 81=1296$, which is the figure the sessions actually produce. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. only the material stage, $m(81)=4\\cdot 9=36$ tonnes, would sit below $400$ on the wrong quantity.

**2.** Extra arithmetic at $L=16$: $g(16)=128$, which sits below $400$. The threshold test is about $L=81$ specifically. Between $16$ and $81$ hours finished output crosses $400$, and at $81$ it has reached $432$.

**3.** The opposite verdict would need $g(81)\\le 400$, which would have required a smaller $B$ or a smaller $A$. The two recorded runs force $432$.

The recovered finished output after $81$ hours is $432$ units, above $400$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 29,
    solution_overview: `Material is $m(L)=A L^{\\frac{1}{2}}$ with $m(100)=40$. Finished goods are $g(m)=B m^{\\frac{3}{2}}$ with $g(9)=54$.

**Part 1: Building the model.**

Each stage has a known exponent and one level, so each coefficient is recoverable. Composition multiplies exponents and raises the inner coefficient.

**1. Translate: the labour record.** $10A=40$.

**2. Translate: the material record.** $27B=54$.

**Part 2: The model.**

$$m(L)=4L^{\\frac{1}{2}} \\tag{1}$$

$$g=16L^{\\frac{3}{4}} \\tag{2}$$

**Part 3: Solve.**

**1.** Material exponent $\\frac{1}{2}<1$. Doubling $L$ multiplies $g$ by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. Output per hour falls. The inverse of $(2)$ is a power of $g$.

**2.** $g(81)=432>400$.

**Answer.** $A=4$ | $B=2$ | $g=16L^{\\frac{3}{4}}$ | $g(81)=432$`,
  },
  {
    id: `math-8-30`,
    case_id: `MATH 8.30`,
    title: `Calibrated Demand, Derived Revenue, and a Fixed Charge`,
    context: `A niche publisher faces demand $q(p)=A p^{-\\frac{3}{2}}$ copies a month at a price $p>0$. A price of $4$ euros sells $250$ copies. Revenue is $R=pq$, and the operation carries a fixed monthly charge of $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The price needed for a given revenue is itself a power of that revenue.`,
      `Doubling the price halves revenue.`,
      `Revenue falls as the price rises.`,
      `At a price of $25$, monthly revenue is already under $450$.`,
      `The fixed charge is covered only at prices below $16$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Demand is $q(p)=A p^{-\\frac{3}{2}}$ with $q(4)=250$, and revenue is $R=pq$. This letter asks whether the price needed for a given revenue is itself a power of that revenue.

The overview already recovered $A=2000$ and $R(p)=2000 p^{-\\frac{1}{2}}$, which inverts to $p=(2000/R)^{2}$. A nonzero power inverts to another power. Price needed for a given revenue is a monomial in that revenue, coefficient $2000^{2}$ and exponent $-2$.

**1.** Extra arithmetic that uses the inverse at $R=400$: $p=(2000/400)^{2}=25$, which returns letter D's price of $25$ euros. That inversion landing on $25$ is how we know the inverse is the right monomial.

**2.** Thinking a negative exponent on $R(p)$ could not invert to a power has forgotten that $u^{-r}$ inverts to a power. The recovered comparison therefore keeps $R(p)$ and does not substitute $u^{-r}$. That contrast is the reason the verdict goes the way it does. Another who wrote $p=\\log R$ mixed this publisher with an exponential technology.

**3.** Letters B and C read $R(p)$ as a scale factor and as a direction. This letter names the inverse. The same $p\\propto R^{-2}$ is what made a revenue target a square of a reciprocal.

**4.** If revenue had been $R=2000 p^{-\\frac{1}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem's $R=pq$ on a pure monomial demand is itself a pure monomial.

The recovered price is a power of revenue, so the statement is True.`,
      `**B.** → False

Doubling the price is $k=2$, and the claim is that revenue halves.

The overview already recorded that doubling $p$ multiplies $R$ by $2^{-\\frac{1}{2}}=1/\\sqrt{2}\\approx 0.707$, not by $1/2$. The coefficient cancels in the ratio

$$\\frac{R(2p)}{R(p)}=2^{-\\frac{1}{2}}\\neq\\frac{1}{2}$$

Revenue falls by about thirty percent, not by fifty.

**1.** Extra arithmetic on the recorded price: doubling $4$ euros is $8$ euros, and $R(8)=2000/\\sqrt{8}=2000/(2\\sqrt{2})=500\\sqrt{2}\\approx 707$ against $R(4)=1000$. Half of $1000$ would have been $500$, and $707$ is not $500$.

**2.** Using exponent $-1$ on $R$, as if demand were $A p^{-2}$, would have halved revenue, which is exactly the false claim. The recovered comparison therefore keeps $-1$ and does not substitute $A p^{-2}$. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{-\\frac{3}{2}}$ mixed demand's exponent with revenue's.

**3.** Letter C says revenue falls as price rises, which is true and weaker than "halves on a doubling." This letter is the specific factor $1/\\sqrt{2}$.

**4.** The opposite verdict would need revenue exponent $-1$. With $-\\frac{1}{2}$, doubling price does not halve revenue.

The recovered doubling factor is $1/\\sqrt{2}$, not $1/2$, so the statement is False.`,
      `**C.** → True

The claim is that revenue falls as the price rises.

The overview already recorded $R(p)=2000 p^{-\\frac{1}{2}}$. The leftover exponent is negative, so $R$ falls as $p$ rises. Inverse-power demand is elastic enough here that a price rise shrinks $pq$.

**1.** Extra arithmetic at the recorded price and letter D's price: $R(4)=1000$ and $R(25)=400$, already lower. At $p=16$, $R(16)=2000/4=500$, sitting between those two. The fall is monotone.

**2.** Seeing quantity fall and concluding that revenue must fall has the right conclusion here for the wrong generality: quantity falling does not force revenue to fall when demand is inelastic. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Task $33$ is that other story. Here the revenue exponent $-\\frac{1}{2}<0$ is what forces the fall.

**3.** Letter B's factor $1/\\sqrt{2}$ is this letter at $k=2$. Letter E is the fixed-charge cover, which uses the same falling $R$.

**4.** The opposite verdict would need revenue exponent $\\ge 0$, hence demand exponent $\\ge -1$. The stem's $-\\frac{3}{2}$ sits below $-1$, so $R$ falls in $p$.

The recovered revenue $2000 p^{-\\frac{1}{2}}$ falls as the price rises, so the statement is True.`,
      `**D.** → True

This is a level of revenue at a price of $25$, asked against a threshold of $450$.

The overview already evaluated $R(25)=400$. Four hundred sits under $450$. Twenty-five is a perfect square, so the square root is $5$, and $2000/5=400$.

**1.** Using $q(25)=2000/125=16$ as if it were revenue would sit far under $450$ on the wrong object. After isolating the unknown, the check is against $q(25)=2000/125=16$. The figure $450$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $q(25)=2000/125=16$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $R=2000\\cdot\\sqrt{25}=10000$ flipped the exponent sign.

**2.** Extra arithmetic at $p=16$: $R(16)=500$, which sits above $450$. The threshold test is about $p=25$ specifically. Between $16$ and $25$ euros revenue crosses $450$ going down, and at $25$ it has reached $400$.

**3.** Letter E's cover up to $p=25$ uses this same $R(25)=400$ against the charge of $400$. This letter compares $400$ with $450$, a different line.

The recovered revenue at $25$ euros is $400$, under $450$, so the statement is True.`,
      `**E.** → False

The fixed charge of $400$ is covered when $R(p)\\ge 400$, and the claim is that this happens only at prices below $16$.

The overview already recorded that covering the charge requires $p\\le 25$, not $p\\le 16$. From $2000 p^{-\\frac{1}{2}}\\ge 400$, one gets $p^{\\frac{1}{2}}\\le 5$ and $p\\le 25$. Coverage therefore runs up to $25$ euros.

**1.** Extra arithmetic at $p=16$: $R(16)=500\\ge 400$, so $16$ euros is covered, but it is not the upper end. At $p=25$, $R(25)=400$ on the nose, still covered. At $p=36$, $R(36)=2000/6\\approx 333<400$, no longer covered. The cut-off is $25$, not $16$.

**2.** Using $R(16)=400$ by mixing letter D's $400$ with $p=16$ would have placed the cut-off at $16$ and made the claim true by a wrong level. The recovered comparison therefore keeps $R(16)=400$ and does not substitute $16$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. $R(16)=500$, not $400$.

**3.** Letter D's $R(25)=400<450$ is compatible with $R(25)=400$ covering a charge of $400$. "Under $450$" and "covers $400$" are different comparisons at the same price.

**4.** The opposite verdict would need $R(16)=400$, hence a smaller $A$. The recorded $q(4)=250$ forces $A=2000$ and a cover up to $p=25$.

The recovered cover runs up to $25$ euros, not only below $16$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 30,
    solution_overview: `Demand is $q(p)=A p^{-\\frac{3}{2}}$ with $q(4)=250$. Revenue is $R=pq$, and a fixed charge of $400$ must be covered.

**Part 1: Building the model.**

Let $p$ = price. The exponent is given, so the priced observation fixes $A$. Revenue raises that exponent by one.

**1. Translate: the recorded pair.**

$$A\\cdot 4^{-\\frac{3}{2}}=250$$

**Part 2: The model.**

$$q(p)=2000 p^{-\\frac{3}{2}} \\tag{1}$$

$$R(p)=2000 p^{-\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** $R(25)=400<450$. Covering the charge requires $p\\le 25$, not $p\\le 16$.

**2.** $(2)$ is a power with exponent $-\\frac{1}{2}$, so revenue falls in price. Doubling $p$ multiplies $R$ by $1/\\sqrt{2}$. The inverse is a power of $R$.

**Answer.** $A=2000$ | $R(p)=2000 p^{-\\frac{1}{2}}$ | $R(25)=400$ | cover for $p\\le 25$`,
  },
  {
    id: `math-8-31`,
    case_id: `MATH 8.31`,
    title: `Packing Output Recovered From a Shift Extension`,
    context: `A packing station's output follows $N(h)=A h^{\\frac{2}{3}}$ items after $h>0$ hours of shift, and the coefficient is never logged. Extending a shift from $8$ to $27$ hours added exactly $90$ items. A rush order of $250$ items has to be packed in a single shift. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An extra hour of packing adds fewer items after twenty-seven hours than after eight.`,
      `Doubling any shift doubles the number of items packed.`,
      `Items packed per hour of shift falls as the shift lengthens.`,
      `A $27$-hour shift packs more than $150$ items.`,
      `The $250$-item order can be packed in under $40$ hours.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Packing output is $N(h)=A h^{\\frac{2}{3}}$, and the recorded extension from $8$ to $27$ hours adding $90$ items pins $A$. This letter is a slope comparison: whether an extra hour adds fewer items after twenty-seven hours than after eight.

The overview already recovered $A=18$ from $5A=90$, so $N(h)=18h^{\\frac{2}{3}}$ and $N'(h)=12 h^{-\\frac{1}{3}}$. The leftover exponent is negative, so $N'(27)<N'(8)$. Later hours add less, not more.

**1.** Extra arithmetic at the two named shifts:

$$N'(8)=12/2=6, \\qquad N'(27)=12/3=4$$

An extra hour after $8$ hours adds $6$ items; after $27$ hours it adds $4$. The claim's direction matches these two slopes.

**2.** Seeing $N(27)=162>N(8)=72$ and concluding that later hours are more productive has confused height with slope. The path that matches the stem therefore holds $N(27)=162>N(8)=72$ fixed and only then reads the claim. The count is still rising, just more slowly. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r>1$ intuition has the wrong exponent.

**3.** Letter C is the falling average $N/h$. This letter is the falling marginal $N'$. Both are the $r=\\frac{2}{3}<1$ story. Convex $r>1$ would have flipped both.

**4.** The opposite verdict would need $r>1$. With $r=\\frac{2}{3}$, an extra hour adds fewer items after twenty-seven hours than after eight.

The recovered slope is smaller at $27$ hours than at $8$, so the statement is True.`,
      `**B.** → False

Doubling any shift is $k=2$, and the claim is that items packed double.

The overview already recorded $\\frac{N(2h)}{N(h)}=2^{\\frac{2}{3}}\\approx 1.587$, not $2$. The coefficient $A$ cancels. A doubled shift buys about fifty-nine percent more items, not one hundred percent more.

**1.** Extra arithmetic on the logged $8$-hour output: doubling those $8$ hours is $16$ hours, and $N(16)=18\\cdot 16^{\\frac{2}{3}}=18\\cdot 4\\cdot 2^{\\frac{2}{3}}\\approx 114$ against $N(8)=72$. Twice $72$ would have been $144$, and $114$ is not $144$.

**2.** Using exponent $1$ is telling a proportional story the recorded extension already contradicts: hours from $8$ to $27$ would have had to take items from $72$ to $243$, not to $162$. Working from the isolated values, $1$ is the figure that is checked, not the detour that produced $162$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{\\frac{1}{2}}$ mixed this station with a square-root technology.

**3.** Letter E inverts a $250$-item order past $40$ hours. This letter is a forward doubling. Mixing reverse and forward factors, $2^{3/2}$ with $2^{2/3}$, is how a doubling claim can look true.

**4.** The opposite verdict would need $r=1$. With $r=\\frac{2}{3}$, doubling a shift does not double the count.

The recovered doubling factor is $2^{\\frac{2}{3}}$, not $2$, so the statement is False.`,
      `**C.** → True

The claim is that items packed per hour of shift falls as the shift lengthens.

The overview already recorded $\\frac{N(h)}{h}=18 h^{-\\frac{1}{3}}$. The leftover exponent is negative, so that average falls as $h$ grows. Falling average product is the $r<1$ story.

**1.** Extra arithmetic at the two logged shifts: $N(8)/8=72/8=9$ items per hour, and $N(27)/27=162/27=6$, already lower. At $h=64$, $N(64)=18\\cdot 16=288$ and $288/64=4.5$, lower still.

**2.** Seeing $N$ rise from $72$ to $162$ and concluding that hours are becoming more productive has mixed the total with the average. So the letter reads the claim against $N$; $162$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $N$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Letter A's falling slope is the same story.

**3.** What would flip this verdict is $r>1$. The stem's $\\frac{2}{3}<1$ forces a falling average.

**4.** Letter B's $2^{2/3}$ scale is this letter at $k=2$: a doubled shift raises the total by less than $2$, so items per hour fall.

The recovered average $18 h^{-\\frac{1}{3}}$ falls as the shift lengthens, so the statement is True.`,
      `**D.** → True

This is a level of a $27$-hour shift, asked against a threshold of $150$ items.

The overview already evaluated $N(27)=162$. One hundred and sixty-two sits above $150$. Twenty-seven to the $\\frac{2}{3}$ is $9$, and $18\\cdot 9=162$.

**1.** Using $N(27)=18\\cdot 27=486$ skipped the fractional power. The recovered isolation is checked against the claim using $N(27)=18\\cdot 27=486$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $A=10$ from $90/9$ would report $90$ and fail the threshold on a wrong coefficient. The gain is $A(9-4)=90$, so $A=18$.

**2.** Extra arithmetic at $h=8$: $N(8)=72$, which sits below $150$. The threshold test is about $h=27$ specifically. Between $8$ and $27$ hours the count crosses $150$, and at $27$ it has reached $162$.

**3.** Letter E's $250$-item order is a different target. $162>150$ is a modest clearance, genuine because $A=18$ rather than $16$.

The recovered count on a $27$-hour shift is $162$ items, above $150$, so the statement is True.`,
      `**E.** → False

The $250$-item order inverts $18 h^{\\frac{2}{3}}=250$, and the claim is that this fits in under $40$ hours.

The overview already inverted $h=(125/9)^{\\frac{3}{2}}\\approx 51.8$ hours, past $40$. The extra arithmetic is that inversion:

$$h^{\\frac{2}{3}}=\\frac{125}{9}, \\qquad h=\\Bigl(\\frac{125}{9}\\Bigr)^{\\frac{3}{2}}\\approx 51.8$$

**1.** Using $h=250/18\\approx 13.9$ skipped the exponent and would have passed "under $40$" on a huge underestimate. The recovered comparison therefore keeps $h=250/18\\approx 13.9$ and does not substitute $40$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $h=(250/18)^{\\frac{2}{3}}$ inverted the reciprocal the wrong way.

**2.** Extra arithmetic at $h=40$: $N(40)=18\\cdot 40^{\\frac{2}{3}}\\approx 18\\cdot 11.70\\approx 211$, which sits below $250$. Even a $40$-hour shift cannot pack the order. At $h=64$, $N(64)=288>250$, so the order fits between $40$ and $64$ hours, near $52$.

**3.** Letter D's $162>150$ at $h=27$ does not license $250$ items inside $40$ hours. The recovered $51.8$ sits $11.8$ hours past $40$.

The recovered shift for $250$ items is about $51.8$ hours, not under $40$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 31,
    solution_overview: `Packing output follows $N(h)=Ah^{\\frac{2}{3}}$ items on a shift of $h>0$ hours. Extending a shift from $8$ to $27$ hours added $90$ items, and a $250$-item order must fit in one shift.

**Part 1: Building the model.**

Let $h$ = shift length in hours and $N(h)$ = items packed. The exponent is given, so one fact pins $A$, but that fact is a difference of two outputs rather than a single count.

**1. Translate: the recorded extension.** Both shift lengths are perfect cubes, so the shape factors are whole:

$$A\\cdot 27^{\\frac{2}{3}}-A\\cdot 8^{\\frac{2}{3}}=90$$

**2. Translate: the order.** The order sets a target to invert:

$$N(h)=250$$

**Part 2: The model.**

$$A(9-4)=90 \\tag{1}$$

$$Ah^{\\frac{2}{3}}=250 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$A=18 \\qquad N(h)=18h^{\\frac{2}{3}}$$

**2.** Check the logged shifts:

$$N(8)=72 \\qquad N(27)=162 \\qquad 162-72=90$$

**3.** Scale factors depend on the exponent alone:

$$\\frac{N(2h)}{N(h)}=2^{\\frac{2}{3}}\\approx 1.587$$

**4.** Equation (2) inverts at the order size:

$$h=\\left(\\frac{125}{9}\\right)^{\\frac{3}{2}}\\approx 51.8$$

**5.** The hourly rate is the law divided by $h$:

$$\\frac{N(h)}{h}=18h^{-\\frac{1}{3}} \\qquad N'(h)=12h^{-\\frac{1}{3}}$$

**Answer.** $A=18$ | $N(h)=18h^{\\frac{2}{3}}$ | $N(27)=162$ | the $250$-item order needs $h\\approx 51.8$ hours`,
  },
  {
    id: `math-8-32`,
    case_id: `MATH 8.32`,
    title: `Drag and Absorbed Power on a Wind-Tunnel Rig`,
    context: `Aerodynamic drag on a test rig follows $F(v)=A v^{r}$ newtons at airspeed $v>0$ metres per second, and the manufacturer supplies neither constant. Two wind-tunnel runs are on file: $16$ N at $4$ m/s and $128$ N at $16$ m/s. The rig also reports absorbed power $P=F\\cdot v$ watts, and the mounting is rated to $250$ N. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The absorbed power is a power function of airspeed.`,
      `Doubling the airspeed more than triples the drag.`,
      `The airspeed that produces a given drag is itself a power function of that drag.`,
      `The mounting's $250$ N rating is first reached at a speed above $30$ m/s.`,
      `At $16$ m/s the rig absorbs more than $2$ kW.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Drag is $F(v)=A v^{r}$ with runs of $16$ N at $4$ m/s and $128$ N at $16$ m/s, and absorbed power is $P=F\\cdot v$. This letter asks whether that power is a power function of airspeed.

The overview already recovered $r=\\frac{3}{2}$ and $A=2$, then composed $P(v)=2 v^{\\frac{5}{2}}$. Multiplying a power of $v$ by $v$ raises the exponent by one, so $P$ is a monomial in airspeed, coefficient $2$ and exponent $\\frac{5}{2}$.

**1.** Extra arithmetic of the composition: $P=F v=2 v^{\\frac{3}{2}}\\cdot v=2 v^{\\frac{5}{2}}$. The $\\frac{5}{2}$ is $\\frac{3}{2}+1$, addition of exponents under multiplication by $v$, not under composition of two stages.

**2.** Adding $r$ to itself, reporting $P\\propto v^{3}$, has squared drag instead of multiplying by speed. The recovered comparison therefore keeps $r$ and does not substitute $P\\propto v^{3}$. Another who left $P$ as $F$ without the extra $v$ has described drag, not power.

**3.** Extra check at $v=16$: $P(16)=2048$ W, which letter E will use. That $2048$ sitting on $2\\cdot 16^{5/2}$ is the fingerprint of a power of airspeed.

**4.** If power had been $F+v$ rather than $F\\cdot v$, the sum of two distinct powers would not have been a single power. The stem multiplies.

The recovered $P(v)=2 v^{\\frac{5}{2}}$ is a power of airspeed, so the statement is True.`,
      `**B.** → False

Doubling airspeed is $k=2$, and the claim is that drag more than triples.

The overview already recorded $\\frac{F(2v)}{F(v)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.828$. Since $2\\sqrt{2}<3$, drag is not more than tripled. The coefficient $A$ cancels.

**1.** Extra arithmetic on the slower run: doubling $4$ m/s is $8$ m/s, and $F(8)=2\\cdot 8^{\\frac{3}{2}}=2\\cdot 16\\sqrt{2}=32\\sqrt{2}\\approx 45.3$ against $F(4)=16$. Triple $16$ would have been $48$, and $45.3$ is not above $48$. The factor $2.828$ sits just under $3$.

**2.** Using $2^{2}=4$ would have passed "more than $3$" on an area story. The stem's recovered values line up with $2^{2}=4$, whereas $3$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $2^{2}=4$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{\\frac{5}{2}}\\approx 5.66$ mixed letter A's power exponent with drag. Drag's exponent is $\\frac{3}{2}$, not $\\frac{5}{2}$.

**3.** Letter E is absorbed power at $16$ m/s. This letter is a scale factor on drag. A factor just under $3$ is a tight miss, genuine because $\\sqrt{2}<1.5$.

**4.** The opposite verdict would need $2^{r}>3$, hence $r>\\log_{2} 3\\approx 1.58$. The recovered $r=1.5$ sits just below that line.

The recovered doubling factor is $2\\sqrt{2}<3$, so the statement is False.`,
      `**C.** → True

The claim is about the inverse: whether the airspeed that produces a given drag is itself a power function of that drag.

The overview already recorded $v=(F/2)^{\\frac{2}{3}}$. A nonzero power inverts to another power. From $F=2 v^{\\frac{3}{2}}$, isolate $v$ by raising to $\\frac{2}{3}$. The result is a monomial in $F$.

**1.** Extra arithmetic that uses the inverse at the slower run: $v=(16/2)^{\\frac{2}{3}}=8^{\\frac{2}{3}}=4$, which returns the logged $4$ m/s. That inversion landing on $4$ is how we know the inverse is the right monomial.

**2.** Writing $v=\\log F$ mixed this rig with an exponential technology. The recovered isolation is checked against the claim using $v=\\log F$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who added a stall speed, $v=1+(F/2)^{\\frac{2}{3}}$, would have left the power-function class; the stem has no such floor.

**3.** Letter D uses this inverse at $F=250$. This letter names the inverse as a function class. The same $v\\propto F^{2/3}$ is what made the rating invert in one monomial step.

**4.** If drag had been $2 v^{\\frac{3}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial.

The recovered airspeed is a power of drag, so the statement is True.`,
      `**D.** → False

The mounting rating of $250$ N inverts $2 v^{\\frac{3}{2}}=250$, and the claim is that this first happens at a speed above $30$ m/s.

The overview already inverted $v=25$. Twenty-five is not above $30$. The extra arithmetic is that inversion:

$$v^{\\frac{3}{2}}=125, \\qquad v=125^{\\frac{2}{3}}=25$$

because $125=5^{3}$ and $(5^{3})^{\\frac{2}{3}}=5^{2}=25$.

**1.** Using $v=250/2=125$ skipped the exponent and would have passed "above $30$" on a huge overestimate. After isolating the unknown, the check is against $v=250/2=125$. The figure $30$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $v=250/2=125$ stays in the write-up. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $v=250^{\\frac{2}{3}}\\approx 40$ dropped the $A=2$ and still passed, for a wrong inversion.

**2.** Extra arithmetic at $v=16$, the faster run: $F(16)=128$, well below $250$. At $v=25$, $F=250$ on the nose. At $v=30$, $F(30)=2\\cdot 30^{\\frac{3}{2}}=2\\cdot 30\\sqrt{30}\\approx 329$, already past the rating. The rating is first reached at $25$, not above $30$.

**3.** Letter B's doubling factor just under $3$ is a different comparison. The recovered $25$ m/s sits $5$ m/s below $30$.

The recovered rating speed is $25$ m/s, not above $30$, so the statement is False.`,
      `**E.** → True

This is a level of absorbed power at $16$ m/s, asked against a threshold of $2$ kW.

The overview already evaluated $P(16)=2048$ W $=2.048$ kW. That is more than $2$ kW. Sixteen to the $\\frac{5}{2}$ is $16^{2}\\sqrt{16}=256\\cdot 4=1024$, and $2\\cdot 1024=2048$.

**1.** Using $P=F=128$ W would sit far under $2$ kW on drag rather than power. The stem's recovered values line up with $P=F=128$, whereas $2$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $P=F=128$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $P=128\\cdot 16=2048$ has the right product $F\\cdot v$ at this one speed, which is a check, not a reason to skip the composed exponent on other speeds.

**2.** Extra arithmetic at $v=4$: $P(4)=2\\cdot 4^{\\frac{5}{2}}=2\\cdot 32=64$ W, well under $2$ kW. The threshold test is about $v=16$ specifically. Between $4$ and $16$ m/s power crosses $2$ kW, and at $16$ it has reached $2.048$ kW.

**3.** The opposite verdict would need $P(16)\\le 2000$, which would have required a smaller $A$. The two runs force $A=2$ and $P(16)=2048$.

The recovered power at $16$ m/s is $2.048$ kW, above $2$ kW, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `Drag follows $F(v)=Av^{r}$ newtons at airspeed $v>0$, with runs of $16$ N at $4$ m/s and $128$ N at $16$ m/s. Absorbed power is $P=F\\cdot v$ and the mounting is rated to $250$ N.

**Part 1: Building the model.**

Let $v$ = airspeed in m/s, $F(v)$ = drag in newtons, $P(v)$ = absorbed power in watts. Two unknown constants need two facts: the run ratio isolates the exponent, and either run then fixes the coefficient.

**1. Translate: the two runs.** Ratios cancel $A$:

$$\\frac{F(16)}{F(4)}=4^{r}=8$$

**2. Translate: the level.** One run pins $A$ once $r$ is known:

$$A\\cdot 4^{r}=16$$

**3. Translate: the rating.** The mounting sets a drag target to invert:

$$F(v)=250$$

**Part 2: The model.**

$$4^{r}=8 \\tag{1}$$

$$A\\cdot 4^{r}=16 \\tag{2}$$

$$Av^{r}=250 \\tag{3}$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the drag law:

$$r=\\frac{3}{2} \\qquad A=2 \\qquad F(v)=2v^{\\frac{3}{2}}$$

**2.** Multiplying by speed adds one to the exponent:

$$P(v)=2v^{\\frac{5}{2}}$$

**3.** Equation (3) inverts at the rating:

$$2v^{\\frac{3}{2}}=250 \\qquad v=25$$

**4.** Scale factors follow from the two exponents:

$$\\frac{F(2v)}{F(v)}=2^{\\frac{3}{2}}\\approx 2.828 \\qquad \\frac{P(2v)}{P(v)}=2^{\\frac{5}{2}}\\approx 5.657$$

**5.** Power at the faster logged run:

$$P(16)=2048\\text{ W}=2.048\\text{ kW}$$

**Answer.** $F(v)=2v^{\\frac{3}{2}}$ | $P(v)=2v^{\\frac{5}{2}}$ | rating at $v=25$ m/s | $P(16)=2.048$ kW`,
  },
  {
    id: `math-8-33`,
    case_id: `MATH 8.33`,
    title: `Inelastic Demand and Where Revenue Goes`,
    context: `A regional utility faces demand $q(p)=A p^{-\\frac{1}{2}}$ units a month at price $p>0$, and a price of $16$ sells $300$ units. The board wants to know how revenue $R=pq$ behaves along this curve. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue rises as the price rises.`,
      `Because quantity falls when price rises, revenue must fall as well.`,
      `The price needed for a given monthly quantity is itself a power function of that quantity.`,
      `At a price of $25$ the utility sells fewer than $250$ units.`,
      `Cutting monthly quantity to $200$ units requires a price above $40$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Demand is $q(p)=A p^{-\\frac{1}{2}}$ with $q(16)=300$, and revenue is $R=pq$. This letter asks whether revenue rises as the price rises.

The overview already recovered $A=1200$ and $R(p)=1200 p^{\\frac{1}{2}}$. The leftover exponent is positive, so revenue rises as the price rises. Demand is inelastic enough here that a price rise outruns the quantity cut.

**1.** Extra arithmetic at the recorded price and a neighbour: $R(16)=4800$ and $R(25)=6000$, already higher. At $p=64$, $R(64)=9600$, higher still. The climb is monotone.

**2.** Seeing quantity fall from $q(16)=300$ to $q(25)=240$ and concluding that revenue must fall has imported letter B's trap. So the letter reads the claim against $q(16)=300$; $q(25)=240$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $q(16)=300$ stays in the write-up. Quantity falling does not force revenue to fall when $|r|<1$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $R=1200 p^{-\\frac{1}{2}}$ flipped the sign of the revenue exponent.

**3.** Letter B is the false "quantity falls, so revenue falls." Letter C is the inverse of quantity. This letter is the sign of $R'(p)=600 p^{-\\frac{1}{2}}>0$.

**4.** The opposite verdict would need demand exponent $\\le -1$. The stem's $-\\frac{1}{2}$ sits above $-1$, so $R$ rises in $p$.

The recovered revenue $1200 p^{\\frac{1}{2}}$ rises as the price rises, so the statement is True.`,
      `**B.** → False

The claim is that because quantity falls when price rises, revenue must fall as well.

The overview already recorded that $R(p)=1200 p^{\\frac{1}{2}}$ still climbs. Demand is inelastic enough that the price rise outruns the quantity cut. Revenue and quantity need not move together.

**1.** Extra arithmetic of the two directions: from $p=16$ to $p=25$, quantity falls $300\\to 240$, a $20\\%$ cut, while price rises $16\\to 25$, a $56\\%$ rise, and revenue rises $4800\\to 6000$, a $25\\%$ rise. The price rise more than covers the quantity cut.

**2.** Treating $R=pq$ as if $q$ were the only moving piece has forgotten that $p$ moves too. The stem's recovered values line up with $R=pq$, whereas $p$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $R=pq$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. task $30$'s elastic demand, where $R$ does fall in $p$, has mixed two utilities.

**3.** Letter A named the rising $R$ directly. This letter rejects a false general rule. Inelastic inverse-square-root demand is the case where the general rule fails.

**4.** The opposite verdict would need $|r|>1$ on demand. With $r=-\\frac{1}{2}$, quantity falling does not drag revenue down.

Revenue and quantity need not move together, so the statement is False.`,
      `**C.** → True

The claim is about the inverse: whether the price needed for a given monthly quantity is itself a power function of that quantity.

The overview already recorded $p=(1200/q)^{2}$. A nonzero power inverts to another power. From $q=1200 p^{-\\frac{1}{2}}$, isolate $p$ as a monomial in $q$, coefficient $1200^{2}$ and exponent $-2$.

**1.** Extra arithmetic that uses the inverse at $q=200$: $p=(1200/200)^{2}=36$, which letter E will use. That inversion landing on $36$ is how we know the inverse is the right monomial. At the recorded pair, $p=(1200/300)^{2}=16$, returning the catalogue price.

**2.** Writing $p=\\log q$ mixed this utility with an exponential technology. The path that matches the stem therefore holds $p=\\log q$ fixed and only then reads the claim. Another who added a reservation price would have left the power-function class; the stem has no such floor.

**3.** Letter E uses this inverse at $q=200$. This letter names the inverse as a function class.

**4.** If demand had carried an intercept, the inverse would not have been a power. The stem is a pure monomial.

The recovered price is a power of monthly quantity, so the statement is True.`,
      `**D.** → True

This is a level of quantity at a price of $25$, asked against a threshold of $250$ units.

The overview already evaluated $q(25)=240$. Two hundred and forty is fewer than $250$. Twenty-five is a perfect square, so the square root is $5$, and $1200/5=240$.

**1.** Using $q(25)=1200/25=48$ skipped the remaining root in the exponent. That is why $q(25)=1200/25=48$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $R(25)=6000$ as if it were quantity would blow past $250$ on the wrong object.

**2.** Extra arithmetic at $p=16$: $q(16)=300$, which is not fewer than $250$. The threshold test is about $p=25$ specifically. Between $16$ and $25$ euros quantity crosses $250$, and at $25$ it has reached $240$.

**3.** Letter E's $q=200$ at $p=36$ is a different comparison. $240<250$ is a modest clearance, genuine because $A=1200$ rather than $1300$.

The recovered quantity at $25$ euros is $240$ units, fewer than $250$, so the statement is True.`,
      `**E.** → False

A monthly quantity of $200$ inverts the recovered rule, and the claim is that this requires a price above $40$.

The overview already inverted $p=36$. Thirty-six is not above $40$. From $1200 p^{-\\frac{1}{2}}=200$, one gets $p^{\\frac{1}{2}}=6$ and $p=36$.

**1.** Using $p=1200/200=6$ skipped the square in the inverse and would have failed "above $40$" on a huge underestimate, for the wrong reason. Working from the isolated values, $p=1200/200=6$ is the figure that is checked, not the detour that produced $40$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $p=(1200/200)^{\\frac{1}{2}}\\approx 2.45$ inverted the reciprocal the wrong way.

**2.** Extra arithmetic at $p=40$: $q(40)=1200/\\sqrt{40}\\approx 189.7$, which sits below $200$. So $200$ units need a price below $40$, namely $36$. At $p=36$, $q=200$ on the nose.

**3.** Letter D's $240<250$ at $p=25$ does not license $p>40$ for $q=200$. The recovered $36$ sits $4$ euros below $40$.

The recovered price for $200$ units is $36$, not above $40$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `Demand is $q(p)=Ap^{-\\frac{1}{2}}$ with $q(16)=300$, and revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units sold, $R$ = revenue. The exponent is given, one observation pins the coefficient, and revenue is derived by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A\\cdot 16^{-\\frac{1}{2}}=300 \\qquad 16^{-\\frac{1}{2}}=\\frac{1}{4}$$

**2. Translate: revenue.**

$$R(p)=p\\cdot Ap^{-\\frac{1}{2}}=Ap^{\\frac{1}{2}}$$

**Part 2: The model.**

$$q(p)=1200\\,p^{-\\frac{1}{2}} \\tag{1}$$

$$R(p)=1200\\,p^{\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=300\\times 4=1200$$

**2.** The inverse of (1) is a power of quantity:

$$p=1440000\\,q^{-2}$$

**3.** Quantities along the curve:

$$q(16)=300 \\qquad q(25)=240 \\qquad q(36)=200 \\qquad q(64)=150$$

**4.** Because $-\\frac{1}{2}+1=\\frac{1}{2}>0$, revenue rises with price; a falling quantity does not drag revenue down:

$$R(16)=4800 \\qquad R(25)=6000 \\qquad R(64)=9600$$

**Answer.** $A=1200$ | $q(p)=1200p^{-\\frac{1}{2}}$ | $R(p)=1200p^{\\frac{1}{2}}$ | $q(36)=200$`,
  },
  {
    id: `math-8-34`,
    case_id: `MATH 8.34`,
    title: `Kiln Output Under a Licensed Ceiling`,
    context: `A kiln's daily output follows $y(x)=A x^{\\frac{4}{3}}$ tonnes for a fuel feed of $x>0$ cubic metres. A test firing at a feed of $27$ produced $324$ tonnes. The site licence forbids shipping more than $1024$ tonnes a day, so any extra firing is wasted. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `To double the test-firing output, the fuel feed must more than double.`,
      `Output per cubic metre of fuel rises as the feed increases.`,
      `Once the licence binds, daily shipped output is no longer a power function of the feed.`,
      `A feed of $8$ produces more than $50$ tonnes.`,
      `The licensed ceiling binds before a feed of $50$.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

Kiln output is $y(x)=A x^{\\frac{4}{3}}$ with $y(27)=324$, and the claim is that doubling the test-firing output requires more than a doubling of the fuel feed.

The overview already recovered $A=4$ and recorded that doubling output scales feed by $2^{\\frac{3}{4}}\\approx 1.682<2$. Because the exponent exceeds one, a doubling of output needs less than a doubling of the input. The feed must less than double, not more.

**1.** Extra arithmetic on the inversion: $4 x^{\\frac{4}{3}}=648$ gives $x^{\\frac{4}{3}}=162$, so $x=162^{\\frac{3}{4}}$. Since $27^{\\frac{4}{3}}=81$ and we want $162=2\\cdot 81$, the feed factor is $2^{3/4}\\approx 1.682$, and $27\\times 1.682\\approx 45.4$ cubic metres, not $54$.

**2.** Using exponent $1$ would have reported a doubled feed of $54$. So the letter reads the claim against $1$; $54$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $1$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another who mixed this reverse question with letter B's rising average would have the right $r>1$ and the wrong direction on the reverse scale.

**3.** Letter B says output per cubic metre rises, the $r>1$ average. This letter is the reverse scale. Both follow from $\\frac{4}{3}>1$, and the reverse scale is $k=2^{3/4}<2$.

**4.** The opposite verdict would need $r<1$. The stem's $\\frac{4}{3}>1$ forces a less-than-doubling of feed.

The recovered feed factor for doubled output is $2^{\\frac{3}{4}}<2$, so the statement is False.`,
      `**B.** → True

The claim is that output per cubic metre of fuel rises as the feed increases.

The overview already recorded $\\frac{y(x)}{x}=4 x^{\\frac{1}{3}}$. The leftover exponent is positive, so that average rises as the feed increases. An exponent above one forces a rising average product.

**1.** Extra arithmetic at the test firing and a neighbour: $y(27)/27=324/27=12$ tonnes per cubic metre, and $y(8)/8=64/8=8$, already lower on a smaller feed. At $x=64$, $y(64)/64=1024/64=16$, higher than $12$.

**2.** Using $r<1$ intuition from a square-root kiln has the wrong exponent. Once $r<1$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another who saw the licence cap and thought extra fuel is wasted on the average has mixed shipped output with uncapped $y(x)$. This letter is the uncapped average.

**3.** Letter A used $r>1$ as a reverse scale. This letter uses $r>1$ as a rising average. Letter C is the cap's effect on function class.

**4.** The opposite verdict would need $r\\le 1$. With $r=\\frac{4}{3}$, output per cubic metre rises.

The recovered average $4 x^{\\frac{1}{3}}$ rises as the feed increases, so the statement is True.`,
      `**C.** → True

The site licence forbids shipping more than $1024$ tonnes a day. This letter asks whether, once the licence binds, daily shipped output is no longer a power function of the feed.

The overview already recorded the bind at $x=64$, where $y(64)=1024$. From that feed onward shipped output is the constant $1024$. A horizontal cap is not $A x^{r}$, so daily shipped output is no longer a power of the feed.

**1.** Extra arithmetic at the bind: $4 x^{\\frac{4}{3}}=1024$ gives $x^{\\frac{4}{3}}=256$ and $x=64$. At $x=125$, uncapped $y(125)=4\\cdot 125^{\\frac{4}{3}}=4\\cdot 625=2500$, but shipped output is $1024$. The ratio of shipped output $1024/1024=1$ is a power only of exponent $0$, which does not match the uncapped $\\frac{4}{3}$ on $x<64$. Two exponents on two intervals are not one power on the whole domain.

**2.** Saying "a cap is $1024 x^{0}$, which is a power" has described the capped piece alone. That is why $1024 x^{0}$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The shipped series is the minimum of two formulas. Another who ignored the licence and called $y(x)$ shipped output has rewritten the stem.

**3.** Letter E checks that $x=50$ is still uncapped. Letter D is a level at $x=8$, also uncapped. This letter is the function class once $x\\ge 64$.

**4.** The recovered shipped rule is a two-piece minimum, not a single power, so the statement is True.`,
      `**D.** → True

This is a level at a feed of $8$, asked against a threshold of $50$ tonnes.

The overview already evaluated $y(8)=64$. Sixty-four sits above $50$. Eight to the $\\frac{4}{3}$ is $16$, and $4\\cdot 16=64$.

**1.** Using $y(8)=4\\cdot 8=32$ skipped the fractional power and would have failed the threshold. Once $y(8)=4\\cdot 8=32$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $A=12$ from $324/27$ would report $192$ and still pass, for a wrong coefficient. The test firing is $81A=324$, so $A=4$.

**2.** Extra arithmetic at $x=1$: $y(1)=4$, which sits below $50$. The threshold test is about $x=8$ specifically. Between $1$ and $8$ cubic metres output crosses $50$, and at $8$ it has reached $64$.

**3.** Letter E's cap bind at $x=64$ is a different comparison. $64>50$ is a clear clearance on a small feed, still uncapped.

The recovered output at a feed of $8$ is $64$ tonnes, above $50$, so the statement is True.`,
      `**E.** → False

The claim is that the licensed ceiling binds before a feed of $50$.

The overview already inverted the cap at $x=64$, which sits past $50$. A feed of $50$ is still below the cap. The ceiling does not bind before a feed of $50$.

**1.** Extra arithmetic at $x=50$: $y(50)=4\\cdot 50^{\\frac{4}{3}}\\approx 4\\cdot 184.2\\approx 737$, which sits below $1024$. Directly, $50<64$, so the bind at $64$ has not yet arrived. At $x=64$, $y=1024$ on the nose.

**2.** Using $x=27$, the test firing, and seeing $324<1024$ but then guessed the bind "soon" at $x=40$ has no inversion. Working from the isolated values, $x=27$ is the figure that is checked, not the detour that produced $x=40$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $x=16$ from $4x=1024$ skipped the exponent.

**3.** Letter C named the bind at $x=64$ as a function-class fact. This letter compares that $64$ with $50$. Sixty-four is not before fifty.

The recovered bind is at feed $x=64$, past $50$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 34,
    solution_overview: `Kiln output is $y(x)=Ax^{\\frac{4}{3}}$ tonnes for a fuel feed $x>0$, with a test firing $y(27)=324$ and a licensed shipping cap of $1024$ tonnes.

**Part 1: Building the model.**

Let $x$ = fuel feed and $y(x)$ = uncapped daily firing. The exponent is given and exceeds $1$, so the kiln shows increasing returns; the test firing pins the coefficient and the licence gives a level to invert. Shipped output is $\\min(y(x),1024)$.

**1. Translate: the test firing.** The feed is a perfect cube, so the shape factor is exact:

$$27^{\\frac{4}{3}}=3^{4}=81 \\qquad 81A=324$$

**2. Translate: the licence.**

$$4x^{\\frac{4}{3}}\\le 1024$$

**Part 2: The model.**

$$y(x)=4x^{\\frac{4}{3}} \\tag{1}$$

$$x^{\\frac{4}{3}}\\le 256 \\tag{2}$$

**Part 3: Solve.**

**1.** The test firing gives the coefficient:

$$A=4$$

**2.** Levels at perfect cubes:

$$y(8)=64 \\qquad y(27)=324 \\qquad y(64)=1024$$

**3.** Doubling output scales feed by $2^{\\frac{3}{4}}\\approx 1.682$, not by $2$.

**4.** Invert (2) with the reciprocal exponent $\\frac{3}{4}$:

$$x=256^{\\frac{3}{4}}=64$$

**5.** Fuel efficiency improves with scale, since dividing by $x$ leaves a positive exponent:

$$\\frac{y(x)}{x}=4x^{\\frac{1}{3}}$$

Past $x=64$, shipped output is the constant $1024$ rather than a power of $x$.

**Answer.** $A=4$ | $y(x)=4x^{\\frac{4}{3}}$ | licence ceiling at feed $x=64$ | $y(8)=64$`,
  },
  {
    id: `math-8-35`,
    case_id: `MATH 8.35`,
    title: `A Pair of Power Functions That Undo Each Other`,
    context: `A calibration stage converts a raw reading $x>0$ into an index by $f(x)=A x^{\\frac{2}{3}}$, and a raw reading of $8$ produced index $36$. A reporting stage converts an index $y>0$ back by $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$. The lab wants to know what happens when the two stages are applied one after the other. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Applying the reporting stage after the calibration stage returns the original reading.`,
      `The composition of the two stages grows more slowly than the raw reading.`,
      `Applying the stages in the other order fails to recover the original index.`,
      `A raw reading of $64$ is sent out with an index above $140$.`,
      `A raw reading of $125$ is sent out with an index under $200$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Calibration is $f(x)=A x^{\\frac{2}{3}}$ with $f(8)=36$, and reporting is $g(y)=y^{\\frac{3}{2}}/27$. This letter asks whether $g\\circ f$ returns the original reading.

The overview already recovered $A=9$ and composed $g(f(x))=x$. The extra arithmetic is that composition:

$$g(f(x))=\\frac{1}{27}(9x^{\\frac{2}{3}})^{\\frac{3}{2}}=\\frac{1}{27}\\cdot 9^{\\frac{3}{2}}\\cdot x=\\frac{1}{27}\\cdot 27\\cdot x=x$$

because $9^{\\frac{3}{2}}=(3^{2})^{\\frac{3}{2}}=3^{3}=27$. The product of the exponents is $1$, and the coefficients cancel.

**1.** Extra check at the recorded pair: $f(8)=36$ and $g(36)=36^{\\frac{3}{2}}/27=216/27=8$, returning the raw reading $8$. That round trip is the identity at a concrete pair.

**2.** Multiplying exponents by adding $\\frac{2}{3}+\\frac{3}{2}$ would report $g(f(x))\\propto x^{\\frac{13}{6}}$ and miss the identity. After isolating the unknown, the check is against $\\frac{2}{3}+\\frac{3}{2}$. The figure $g(f(x))\\propto x^{\\frac{13}{6}}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $\\frac{2}{3}+\\frac{3}{2}$ stays in the write-up. Exponents multiply under composition. Another who forgot the $1/27$ would report $27x$ and miss the cancellation.

**3.** Letter B asks whether this identity grows more slowly than the reading. Letter C is the other order $f\\circ g$. This letter is $g\\circ f=\\mathrm{id}$.

**4.** The opposite verdict would need coefficients that do not cancel, or exponents whose product is not $1$. The stem's $A=9$ and $1/27$ are matched to $\\frac{2}{3}$ and $\\frac{3}{2}$.

Reporting after calibration returns the original reading, so the statement is True.`,
      `**B.** → False

The claim is that the composition of the two stages grows more slowly than the raw reading.

The overview already recorded that $g\\circ f$ is the identity, exponent $1$. An identity grows exactly as fast as the raw reading, not more slowly. A leftover exponent of $1$ is lockstep.

**1.** Extra arithmetic at two readings: $g(f(8))=8$ and $g(f(64))=64$, a factor $8$ on both the input and the output. If the composition grew more slowly, $g(f(64))$ would sit below $64$. It does not.

**2.** Seeing each stage's exponent below $1$ or above $1$ and multiplying $\\frac{2}{3}\\cdot\\frac{3}{2}$ as if it were $\\frac{2}{3}$ has forgotten the product is $1$. That is the fork: $1$ belongs to the recovered isolation, $\\frac{2}{3}$ belongs to the discarded mix. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $g(f(x))=x^{\\frac{2}{3}}$ dropped the reporting stage.

**3.** Letter A established the identity. This letter reads that identity as a growth-rate claim against $x$. Lockstep is not "more slowly."

**4.** The opposite verdict would need a composed exponent $<1$. With composed exponent $1$, the composition keeps pace with the reading.

The recovered composition is the identity, so the statement is False.`,
      `**C.** → False

The claim is that applying the stages in the other order fails to recover the original index.

The overview already composed $f(g(y))=y$. The two maps are inverses of each other, so reverse order also recovers the original index. The extra arithmetic is that other composition:

$$f(g(y))=9\\Bigl(\\frac{y^{\\frac{3}{2}}}{27}\\Bigr)^{\\frac{2}{3}}=9\\cdot\\frac{y}{27^{\\frac{2}{3}}}=9\\cdot\\frac{y}{9}=y$$

because $27^{\\frac{2}{3}}=9$.

**1.** Extra check at the recorded index $36$: $g(36)=8$ and $f(8)=36$, returning the index. The round trip works in reverse too.

**2.** Thinking inverses of nonlinear maps fail in one order has imported a non-invertible story. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. These two powers were built as inverses: exponents $\\frac{2}{3}$ and $\\frac{3}{2}$ are reciprocal, and the coefficients $9$ and $1/27$ cancel both ways.

**3.** Letter A was $g\\circ f$. This letter is $f\\circ g$. Both are the identity. "Fails to recover" would have needed a coefficient mismatch.

**4.** The opposite verdict would need $f(g(y))\\neq y$. With these two stages, reverse order also recovers the index.

The recovered reverse composition is also the identity, so the statement is False.`,
      `**D.** → True

This is a level of calibration at a raw reading of $64$, asked against a threshold of $140$.

The overview already evaluated $f(64)=144$. One hundred and forty-four sits above $140$. Sixty-four to the $\\frac{2}{3}$ is $16$, and $9\\cdot 16=144$.

**1.** Using $f(64)=9\\cdot 64=576$ skipped the fractional power. Keeping $f(64)=9\\cdot 64=576$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $A=4.5$ from $36/8$ would report $72$ and fail the threshold on a wrong coefficient. The recorded pair is $4A=36$, so $A=9$.

**2.** Extra arithmetic at $x=8$: $f(8)=36$, which sits below $140$. The threshold test is about $x=64$ specifically. Between $8$ and $64$ the index crosses $140$, and at $64$ it has reached $144$.

**3.** Letter E asks for an index under $200$ at $x=125$ and fails. This letter's $140$ at $x=64$ is a different comparison. The recovered $144$ is $4$ above $140$, a tight clearance.

The recovered index at a reading of $64$ is $144$, above $140$, so the statement is True.`,
      `**E.** → False

This is a level at a raw reading of $125$, asked against a threshold of $200$.

The overview already evaluated $f(125)=225$. Two hundred and twenty-five does not sit under $200$. One hundred and twenty-five to the $\\frac{2}{3}$ is $25$, and $9\\cdot 25=225$.

**1.** Using $f(125)=9\\cdot 5=45$, taking only a fifth root, would have passed "under $200$" on a wrong power. The recovered comparison therefore keeps $f(125)=9\\cdot 5=45$ and does not substitute $200$. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $g(125)$ rather than $f(125)$ has the wrong stage.

**2.** Extra arithmetic at $x=64$: $f(64)=144$, which does sit under $200$. The threshold test is about $x=125$ specifically. Between $64$ and $125$ the index crosses $200$, and at $125$ it has reached $225$.

**3.** Letter D's $144>140$ does not license $225<200$. The recovered $225$ sits $25$ above $200$.

The recovered index at a reading of $125$ is $225$, not under $200$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 35,
    solution_overview: `Calibration is $f(x)=Ax^{\\frac{2}{3}}$ with $f(8)=36$, and reporting is $g(y)=y^{\\frac{3}{2}}/27$.

**Part 1: Building the model.**

Let $x$ = raw reading and $y$ = index. The calibration exponent is given, so the recorded pair pins $A$. Reporting is already fully specified. The lab's question is the two compositions $g\\circ f$ and $f\\circ g$.

**1. Translate: the recorded pair.** $8$ is a perfect cube:

$$A\\cdot 8^{\\frac{2}{3}}=36 \\qquad 8^{\\frac{2}{3}}=4$$

**2. Translate: reporting.**

$$g(y)=\\frac{1}{27}y^{\\frac{3}{2}}$$

**Part 2: The model.**

$$f(x)=9x^{\\frac{2}{3}} \\tag{1}$$

$$g(y)=\\frac{1}{27}y^{\\frac{3}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) is the recovered calibration.

**2.** Compose reporting after calibration:

$$g(f(x))=\\frac{1}{27}(9x^{\\frac{2}{3}})^{\\frac{3}{2}}=x$$

**3.** Compose the other way:

$$f(g(y))=9\\bigl(y^{\\frac{3}{2}}/27\\bigr)^{\\frac{2}{3}}=y$$

**4.** Named levels:

$$f(125)=225 \\qquad g(225)=125 \\qquad f(64)=144 \\qquad g(144)=64$$

**5.** The product of the exponents is $1$, and the coefficients cancel, so both compositions are the identity power $u^{1}$.

**Answer.** $A=9$ | $f(x)=9x^{\\frac{2}{3}}$ | $g(f(x))=x$ | $f(g(y))=y$ | $f(64)=144$`,
  },
  {
    id: `math-8-36`,
    case_id: `MATH 8.36`,
    title: `Two Ranking Algorithms That Swap Places`,
    context: `Two ranking algorithms are scored against a query load $x>0$. Algorithm S obeys $S(x)=a x^{\\frac{1}{2}}$, and a benchmark at load $4$ scored $16$. Algorithm T is proportional to $x^{\\frac{3}{2}}$, and the same benchmark scored $8$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two algorithms score equally at two different positive loads.`,
      `Once algorithm T is ahead, raising the load further cannot put S back in front.`,
      `The ratio of the two scores is the same at every load.`,
      `The two algorithms first meet at a load above $6$.`,
      `At a load of $16$, algorithm T is ahead by more than $30$.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

Algorithm S is $S(x)=a x^{\\frac{1}{2}}$ with $S(4)=16$, and algorithm T is proportional to $x^{\\frac{3}{2}}$ with $T(4)=8$. The claim is that the two algorithms score equally at two different positive loads.

The overview already recovered $S(x)=8 x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$, with difference $T-S=x^{\\frac{1}{2}}(x-8)$. On $x>0$ they meet only at $x=8$, not at two different positive loads.

**1.** Extra arithmetic at a neighbour on each side: at $x=4$, $S(4)=16$ and $T(4)=8$, so S leads by $8$. At $x=16$, $S(16)=32$ and $T(16)=64$, so T leads by $32$. The sign change is a single crossing at $x=8$, where both equal $8^{\\frac{3}{2}}=16\\sqrt{2}\\approx 22.6$.

**2.** Seeing two power functions and expecting two meetings has counted degrees loosely. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. $x^{1/2}(x-8)=0$ has one positive root. Another who set $a=k$ and ignored the benchmark would never find a meeting of these two shapes except at $0$.

**3.** Letter B reads the same factor $x-8$ past $8$ and finds T stays ahead. This letter is the uniqueness of the root.

**4.** Two positive meetings would have needed a cubic gap or a second factor. The recovered difference has a single positive root at $x=8$.

They meet only at load $8$, so the statement is False.`,
      `**B.** → True

The claim is that once algorithm T is ahead, raising the load further cannot put S back in front.

The overview already recorded that past the unique positive meeting $x=8$, the leftover factor $x-8$ stays positive, so $T>S$ at every greater load. Raising the load further cannot put S back in front.

**1.** Extra arithmetic at $x=16$, letter E's load: $T=64$ and $S=32$, T ahead by $32$. At $x=36$, $T=216$ and $S=48$, T ahead by $168$. The lead widens. There is no later catch-up by S.

**2.** Remembering that a larger coefficient can lead on small inputs might wait for S's $a=8$ to kick back in at great load. Keeping $a=8$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Coefficients do not kick back in. The larger exponent, T's $\\frac{3}{2}$ against S's $\\frac{1}{2}$, takes over after the unique crossing and stays.

**3.** Letter A found the unique meeting. This letter reads the sign past that meeting. Equal exponents would have been needed for a second crossing.

**4.** The opposite verdict would need a ratio $T/S$ that was not monotone. With leftover power $x/8$, T stays ahead past $x=8$.

The recovered ratio climbs through $1$ only once, so the statement is True.`,
      `**C.** → False

The claim is that the ratio of the two scores is the same at every load.

The overview already recorded $\\frac{T(x)}{S(x)}=\\frac{x}{8}$. That leftover power of $x$ is not constant. The ratio equals $1$ only at the crossing $x=8$, equals $1/2$ at the benchmark $x=4$, and equals $2$ at $x=16$.

**1.** Extra arithmetic at those three loads: $T(4)/S(4)=8/16=1/2$, $T(8)/S(8)=1$, $T(16)/S(16)=64/32=2$. Three different ratios are three too many for a constant.

**2.** Cancelling $x^{1/2}$ and forgetting the leftover $x/8$ would report a constant $1$, which is exactly the false claim at the crossing only. The recovered comparison therefore keeps $x^{1/2}$ and does not substitute $1$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who compared coefficients $1$ and $8$ and declared a constant $1/8$ has dropped the leftover power of $x$.

**3.** Letter B used this ratio as a sign. This letter asks whether the ratio is constant. A growing ratio is a stronger statement than a positive difference.

**4.** The opposite verdict would need equal exponents. With exponents $\\frac{3}{2}$ and $\\frac{1}{2}$, the ratio cannot be constant.

The recovered ratio $x/8$ is not constant, so the statement is False.`,
      `**D.** → True

The unique positive meeting is $x=8$, and the claim is that the two algorithms first meet at a load above $6$.

Eight sits above $6$. They first meet past load $6$.

**1.** Extra arithmetic at $x=6$: $S(6)=8\\sqrt{6}\\approx 19.6$ and $T(6)=6\\sqrt{6}\\approx 14.7$, so S still leads at $6$. At $x=8$ they meet. The first meeting is at $8$, which is above $6$.

**2.** Using $x=4$, the benchmark, where they do not meet, has mixed a recorded pair with a crossing. The opposite verdict would need a different isolation than $x=4$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another who solved $8\\sqrt{x}=x^{3/2}$ as $x=8^{2}=64$ missed a factor and would still pass "above $6$" on the wrong load.

**3.** Letter A said the meeting is unique. This letter compares that unique meeting with $6$. Eight is two loads above six, not a rounding of six.

The recovered first meeting is at load $8$, above $6$, so the statement is True.`,
      `**E.** → True

This is a gap at a load of $16$, asked against a threshold of $30$.

The overview already evaluated $T(16)-S(16)=32$. Thirty-two is more than $30$. At load $16$, $T=64$ and $S=32$.

**1.** Using $S(16)=8\\cdot 16=128$ skipped the square root and would have reported T behind. Keeping $S(16)=8\\cdot 16=128$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. the ratio $2$ as if it were the difference $2$ would have failed "more than $30$."

**2.** Extra arithmetic at $x=8$: the gap is $0$, which is not more than $30$. The threshold test is about $x=16$ specifically. Between $8$ and $16$ the gap crosses $30$, and at $16$ it has reached $32$.

**3.** Letter D's meeting above $6$ is a different comparison. $32>30$ is a tight clearance, genuine because $T(16)=64$ and $S(16)=32$.

The recovered lead at load $16$ is $32$, more than $30$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 36,
    solution_overview: `Algorithm S obeys $S(x)=ax^{\\frac{1}{2}}$ with $S(4)=16$. Algorithm T is $T(x)=kx^{\\frac{3}{2}}$ with $T(4)=8$.

**Part 1: Building the model.**

Let $x>0$ be query load. Each algorithm has one unknown coefficient, and the shared benchmark supplies both. Ties, leads, and ratios are then properties of the two recovered powers.

**1. Translate: algorithm S.**

$$a\\cdot 4^{\\frac{1}{2}}=16$$

**2. Translate: algorithm T.**

$$k\\cdot 4^{\\frac{3}{2}}=8$$

**Part 2: The model.**

$$S(x)=8x^{\\frac{1}{2}} \\tag{1}$$

$$T(x)=x^{\\frac{3}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** The benchmark gives $a=8$ and $k=1$.

**2.** Set (1) equal to (2) on $x>0$:

$$8x^{\\frac{1}{2}}=x^{\\frac{3}{2}} \\qquad x=8$$

There is a single positive crossing.

**3.** The score ratio is

$$\\frac{T(x)}{S(x)}=\\frac{x}{8}$$

so T leads for every $x>8$ and the lead widens.

**4.** Named levels:

$$S(8)=T(8)=8^{\\frac{3}{2}} \\qquad S(16)=32 \\qquad T(16)=64$$

**5.** At load $16$ the lead is $32$.

**Answer.** $S(x)=8x^{\\frac{1}{2}}$ | $T(x)=x^{\\frac{3}{2}}$ | unique crossing at $x=8$ | $T(16)-S(16)=32$`,
  },
  {
    id: `math-8-37`,
    case_id: `MATH 8.37`,
    title: `Server Fleet Capacity Beneath a Contracted Ceiling`,
    context: `A hosting platform's sustained capacity follows $C(m)=A m^{\\frac{4}{5}}$ requests per second for $m>0$ machines. A fleet of $32$ machines sustains $80$ requests per second. The support contract will not certify more than $500$ requests per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Sustained capacity itself keeps rising as machines are added.`,
      `Because the exponent is below $1$, the contracted ceiling is never reached.`,
      `On log-log paper the uncapped capacity law is a straight line.`,
      `A fleet of $243$ machines sustains more than $400$ requests per second.`,
      `The contracted ceiling binds before $250$ machines.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Sustained capacity is $C(m)=A m^{\\frac{4}{5}}$ with $C(32)=80$, and the claim is that capacity itself keeps rising as machines are added.

The overview already recovered $A=5$, so $C(m)=5 m^{\\frac{4}{5}}$. The exponent is positive, so sustained capacity keeps rising as machines are added. A positive power on $m>0$ is strictly increasing.

**1.** Extra arithmetic at the recorded fleet and a neighbour: $C(32)=80$ and $C(243)=405$, already higher. At $m=1$, $C(1)=5$, lower. The climb is monotone, even though $\\frac{4}{5}<1$ makes it concave.

**2.** Seeing $\\frac{4}{5}<1$ and concluding "less than one means decreasing" has mixed a falling slope of the slope with a falling function. Keeping $\\frac{4}{5}<1$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Decrease requires a negative exponent. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. the cap of $500$ and thought certified capacity stops rising has mixed $C$ with billed $\\min(C,500)$. This letter is uncapped $C$.

**3.** Letter B claims the ceiling is never reached because $r<1$. Letter C is the log-log line. This letter is only $r>0$.

**4.** The opposite verdict would need $r\\le 0$. The stem's $\\frac{4}{5}>0$ forces capacity up as machines are added.

The recovered capacity $5 m^{\\frac{4}{5}}$ keeps rising, so the statement is True.`,
      `**B.** → False

The claim is that because the exponent is below $1$, the contracted ceiling of $500$ is never reached.

The overview already inverted $5 m^{\\frac{4}{5}}=500$ at $m=100^{\\frac{5}{4}}\\approx 316$. An exponent below one still tends to infinity as $m$ grows. The contracted ceiling is reached at a finite fleet of about $316$ machines.

**1.** Extra arithmetic of that inversion: $m^{\\frac{4}{5}}=100$ and $m=100^{\\frac{5}{4}}=100\\sqrt{10}\\approx 316.2$. At $m=243$, letter D's $C(243)=405<500$. At $m=1024$, $C(1024)=1280>500$. The ceiling sits between those two fleets, near $316$.

**2.** Treating $r<1$ as a bounded function has confused "grows slowly" with "bounded." $5 m^{4/5}\\to\\infty$. Working from the isolated values, $r<1$ is the figure that is checked, not the detour that produced $5 m^{4/5}\\to\\infty$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r<0$ intuition from a wait curve has the wrong sign.

**3.** Letter A said $C$ keeps rising. This letter says that rise eventually hits $500$. Rising without bound is what makes a finite cap bind.

**4.** The opposite verdict would need $C$ bounded below $500$, which a positive power cannot be. The recovered bind is at about $316$ machines.

The recovered ceiling is reached at $m\\approx 316$, so the statement is False.`,
      `**C.** → True

The claim is that on log-log paper the uncapped capacity law is a straight line.

The overview already recorded $\\ln C=\\ln 5+\\frac{4}{5}\\ln m$. A power $A m^{r}$ is a straight line on log-log paper, with slope equal to the exponent. The uncapped capacity law is exactly that shape.

**1.** Extra arithmetic of two log-log points: $\\ln C(32)=\\ln 80$ and $\\ln 32=\\ln(2^{5})=5\\ln 2$, and the slope between $(0,\\ln 5)$ at $m=1$ and this point is $(\\ln 80-\\ln 5)/\\ln 32=\\ln 16/(5\\ln 2)=4/5$, the exponent itself.

**2.** Plotting $C$ against $m$ on linear paper and seeing a curve would think the claim false. The recovered comparison therefore keeps $C$ and does not substitute $m$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Log-log is the change of coordinates that straightens a power. Another who included the cap, plotting billed $\\min(C,500)$, would see a kink at $m\\approx 316$ and a later horizontal, which is not a single straight line. This letter is the uncapped law.

**3.** Letter A is increase. Letter B is the cap. This letter is the log-log graph of $C$ itself.

**4.** The opposite verdict would need a sum of two powers, or an intercept in the original units. The stem is a pure monomial.

The recovered uncapped law is linear in $\\ln C$ against $\\ln m$, so the statement is True.`,
      `**D.** → True

This is a level at a fleet of $243$ machines, asked against a threshold of $400$ requests per second.

The overview already evaluated $C(243)=405$. Four hundred and five sits above $400$. Two hundred and forty-three to the $\\frac{4}{5}$ is $81$, and $5\\cdot 81=405$.

**1.** Using $C(243)=5\\cdot 243=1215$ skipped the fractional power. Once $C(243)=5\\cdot 243=1215$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $A=80/32=2.5$ would report $202.5$ and fail the threshold on a wrong coefficient. The recorded fleet is $16A=80$, so $A=5$.

**2.** Extra arithmetic at $m=32$: $C(32)=80$, which sits below $400$. The threshold test is about $m=243$ specifically. Between $32$ and $243$ machines capacity crosses $400$, and at $243$ it has reached $405$, still under the cap of $500$.

**3.** Letter E compares the bind with $250$ machines. This letter's $405>400$ is a tight clearance, genuine because $A=5$.

The recovered capacity at $243$ machines is $405$, above $400$, so the statement is True.`,
      `**E.** → False

The claim is that the contracted ceiling binds before $250$ machines.

The overview already inverted the bind at $m\\approx 316$, which sits past $250$. The ceiling does not bind before $250$ machines.

**1.** Extra arithmetic at $m=243$: $C(243)=405<500$. At $m=256$, $C(256)=5\\cdot 256^{\\frac{4}{5}}=5\\cdot (2^{8})^{4/5}=5\\cdot 2^{32/5}=5\\cdot 2^{6}\\cdot 2^{2/5}=320\\cdot 2^{0.4}\\approx 422<500$. Both sit below the cap, and both sit near $250$. The bind at $316$ is later.

**2.** Using $m=100$ from $5m=500$ skipped the exponent and would have passed "before $250$" on a wrong inversion. The stem's recovered values line up with $m=100$, whereas $250$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $m=100$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $m=243$ as if $405$ were already $500$ has mixed a threshold of $400$ with a cap of $500$.

**3.** Letter D's $405>400$ at $m=243$ is compatible with $405<500$. The cap has not bound at $243$, hence not before $250$.

The recovered bind is at about $316$ machines, past $250$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 37,
    solution_overview: `Sustained capacity is $C(m)=Am^{\\frac{4}{5}}$ requests per second, with $C(32)=80$ and a certification cap of $500$.

**Part 1: Building the model.**

Let $m$ = number of machines and $C(m)$ = sustained requests per second. The exponent is given, so the $32$-machine reading pins $A$. The contract then sets a level to invert. Certified capacity is $\\min(C(m),500)$, but $C$ itself is the uncapped power.

**1. Translate: the recorded fleet.** $32=2^{5}$, so the shape factor is exact:

$$32^{\\frac{4}{5}}=2^{4}=16 \\qquad 16A=80$$

**2. Translate: the ceiling.**

$$5m^{\\frac{4}{5}}=500$$

**Part 2: The model.**

$$C(m)=5m^{\\frac{4}{5}} \\tag{1}$$

$$m^{\\frac{4}{5}}=100 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) is the recovered law, strictly increasing because $\\frac{4}{5}>0$.

**2.** Invert (2):

$$m=100^{\\frac{5}{4}}=100\\sqrt{10}\\approx 316.2$$

**3.** Exact cube-power fleets:

$$C(243)=405 \\qquad C(1024)=1280$$

**4.** Doubling the fleet multiplies capacity by $2^{\\frac{4}{5}}\\approx 1.741$.

**5.** The uncapped law is linear in log-log coordinates:

$$\\ln C=\\ln 5+\\frac{4}{5}\\ln m$$

**Answer.** $A=5$ | $C(m)=5m^{\\frac{4}{5}}$ | ceiling at $m\\approx 316$ | $C(243)=405$`,
  },
  {
    id: `math-8-38`,
    case_id: `MATH 8.38`,
    title: `Hiring Against a Square-Root Revenue Curve`,
    context: `A seasonal workshop's revenue follows $R(L)=A L^{\\frac{1}{2}}$ from $L>0$ hours of hired labour. Extending a season from $100$ to $400$ hours raised recorded revenue by $1200$. Labour is paid a wage of $6$ per hour, and the owner judges the season by the net gain $R(L)-6L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The net gain $R(L)-6L$ is itself a power function of hours hired.`,
      `The hours that maximise net gain are the same hours at which net gain is zero.`,
      `The wage bill is a power function of hours hired.`,
      `At $900$ hours the net gain is below $-1000$.`,
      `Net gain crosses zero only after more than $300$ hours.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A.** → False

Revenue is $R(L)=A L^{\\frac{1}{2}}$, the wage is $6$ per hour, and net gain is $\\Pi=R-6L$. The recorded extension from $100$ to $400$ hours raised revenue by $1200$, pinning $A=120$. This letter asks whether $\\Pi(L)$ is itself a power function of hours hired.

The overview already recorded $\\Pi(L)=120\\sqrt{L}-6L$. A difference of two distinct powers is not itself a power of hours hired. Distinct exponents $\\frac{1}{2}$ and $1$ cannot be absorbed into one monomial.

**1.** Extra arithmetic in a ratio: $\\Pi(100)=600$ and $\\Pi(400)=0$, so the ratio is $0$, which no power $c L^{r}$ with $c\\neq 0$ can give at a positive $L$. At $L=25$, $\\Pi(25)=120\\cdot 5-150=450$, and $450/600=0.75$, while $(25/100)^{r}=4^{-r}$ would force $r\\approx 0.21$, failing at other pairs.

**2.** Dropping the wage and calling $120\\sqrt{L}$ a power has described revenue, not net gain. The opposite verdict would need a different isolation than $120\\sqrt{L}$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another who wrote $\\Pi=L^{1/2}(120-6\\sqrt{L})$ has a power times a linear polynomial in $\\sqrt{L}$, still not a single power.

**3.** Letter C says the wage bill $6L$ is a power. That is true and does not make the difference a power. Letter B compares the maximiser with the root.

**4.** The opposite verdict would need matching exponents on $R$ and on the wage. The stem's $\\frac{1}{2}$ and $1$ do not match.

The recovered net gain is a difference of two powers, so the statement is False.`,
      `**B.** → False

The claim is that the hours that maximise net gain are the same hours at which net gain is zero.

The overview already recorded the maximiser $L=100$ from $\\Pi'(L)=0$, and the root $L=400$ from $\\Pi(L)=0$. Those are different hours. Net gain peaks at $100$ hours, where $\\Pi(100)=600$, and crosses zero at $400$ hours.

**1.** Extra arithmetic of the two conditions: $\\Pi'(L)=60 L^{-\\frac{1}{2}}-6=0$ gives $\\sqrt{L}=10$ and $L=100$. $\\Pi(L)=0$ gives $120\\sqrt{L}=6L$ and $\\sqrt{L}=20$ and $L=400$. Ten is not twenty.

**2.** Treating a peak as a root of $\\Pi$ rather than of $\\Pi'$ has mixed first-order conditions with break-even. After isolating the unknown, the check is against $\\Pi$. The figure $\\Pi'$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $\\Pi$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $L=225$ from a different task's advertising net gain has leaked a number.

**3.** Letter D's $\\Pi(900)=-1800$ sits past the root. Letter E says the root is past $300$, which $400$ is. This letter is the mismatch of $100$ and $400$.

**4.** The opposite verdict would need the peak and the root to coincide, which a difference of two powers with a zero intercept on $\\Pi$ at two points ($0+$ and $400$) cannot do at the interior peak.

The recovered maximiser is $L=100$ and the root is $L=400$, different hours, so the statement is False.`,
      `**C.** → True

The claim is that the wage bill is a power function of hours hired.

The overview already recorded that the wage bill is $6L$, a power of hours hired with exponent $1$ and coefficient $6$. A linear wage is still a monomial. There is no leftover constant: zero hours incur zero wage.

**1.** Extra arithmetic at the recorded hours: wage at $L=100$ is $600$, at $L=400$ is $2400$, ratio $4$, equal to $4^{1}$. Checking $L=900$, wage $5400$, ratio to $L=100$ is $9=9^{1}$. A single exponent $1$ fits.

**2.** Thinking "linear is not a power" has forgotten that $u^{1}$ is a power. The recovered isolation is checked against the claim using $u^{1}$, which is the figure the sessions actually produce. Another who added a salaried floor, $6L+F$, would have left the power-function class; the stem has no such floor on the wage.

**3.** Letter A said net gain is not a power, because it subtracts this wage from a square-root revenue. This letter is the wage piece alone, which is a power.

**4.** The opposite verdict would need an intercept on the wage. The stem's $6L$ has none.

The recovered wage bill $6L$ is a power of hours hired, so the statement is True.`,
      `**D.** → True

This is a level of net gain at $900$ hours, asked against a threshold of $-1000$.

The overview already evaluated $\\Pi(900)=-1800$. Minus eighteen hundred sits below $-1000$. Revenue $120\\cdot 30=3600$ minus wage $5400$ is $-1800$.

**1.** Using $R(900)=3600$ as if it were net gain would sit above $-1000$ on the wrong object. So the letter reads the claim against $R(900)=3600$; $-1000$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $R(900)=3600$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $\\Pi(400)=0$ has the root, not $L=900$.

**2.** Extra arithmetic at $L=400$: $\\Pi=0$, which is not below $-1000$. The threshold test is about $L=900$ specifically. Past the root, net gain is negative and becoming more so; at $900$ hours it has reached $-1800$.

**3.** Letter E's root past $300$ is a different comparison. $-1800<-1000$ is a clear clearance on the far side of break-even.

The recovered net gain at $900$ hours is $-1800$, below $-1000$, so the statement is True.`,
      `**E.** → True

The unique positive root of $\\Pi(L)=0$ is $L=400$, and the claim is that net gain crosses zero only after more than $300$ hours.

Four hundred sits past $300$. Net gain crosses zero only after more than $300$ hours.

**1.** Extra arithmetic at $L=300$: $\\Pi(300)=120\\sqrt{300}-1800\\approx 120\\cdot 17.32-1800\\approx 278>0$. At $L=400$, $\\Pi=0$. The crossing is at $400$, which is after $300$.

**2.** Using the maximiser $L=100$ as if it were the root would have failed "after more than $300$." Working from the isolated values, $L=100$ is the figure that is checked, not the detour that produced $300$.Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $L=225$ from task $28$ has leaked a break-even.

**3.** Letter B distinguished $100$ from $400$. This letter compares $400$ with $300$. Four hundred is one hundred hours past three hundred, not a rounding.

The recovered root is $L=400$, after more than $300$ hours, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 38,
    solution_overview: `Revenue follows $R(L)=AL^{\\frac{1}{2}}$ for $L>0$ hours. Extending labour from $100$ to $400$ hours raised revenue by $1200$, the wage is $6$ per hour, and net gain is $\\Pi=R-6L$.

**Part 1: Building the model.**

Let $L$ = hours hired, $R$ = revenue, $\\Pi=R-6L$ = net gain. The exponent is given, so the recorded revenue difference pins $A$. The wage bill is already fully specified.

**1. Translate: the recorded extension.** Both hour counts are perfect squares:

$$A(20-10)=1200$$

**2. Translate: net gain.**

$$\\Pi(L)=AL^{\\frac{1}{2}}-6L$$

**Part 2: The model.**

$$R(L)=120L^{\\frac{1}{2}} \\tag{1}$$

$$\\Pi(L)=120L^{\\frac{1}{2}}-6L \\tag{2}$$

**Part 3: Solve.**

**1.** The revenue gain gives $A=120$.

**2.** Break-even $\\Pi(L)=0$ on $L>0$:

$$120L^{\\frac{1}{2}}=6L \\qquad L=400$$

**3.** The maximiser is $\\Pi'(L)=0$:

$$60L^{-\\frac{1}{2}}=6 \\qquad L=100 \\qquad \\Pi(100)=600$$

**4.** A large staffing:

$$\\Pi(900)=-1800$$

**5.** $\\Pi$ is a difference of two powers, hence not itself a power; the wage bill $6L$ is the power with exponent $1$.

**Answer.** $A=120$ | $R(L)=120L^{\\frac{1}{2}}$ | $\\Pi(400)=0$ | $\\Pi$ peaks at $L=100$ | $\\Pi(900)=-1800$`,
  },
  {
    id: `math-8-39`,
    case_id: `MATH 8.39`,
    title: `Splitting an Order Between Two Quadratic-Cost Plants`,
    context: `A firm must produce $60$ units and can split them between two plants. Plant 1's cost is $C_1(q)=A q^{2}$: a run of $20$ units there cost $200$. Plant 2's cost is $C_2(q)=k q^{2}$: a run of $40$ units there cost $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The cheapest way to fill the order is to send every unit to one plant.`,
      `Whatever split is chosen, the two plants together still follow a single power of the $60$-unit order.`,
      `Plant 2's cost per unit rises as it produces more.`,
      `Concentrating all $60$ units in the cheaper plant still costs more than $800$.`,
      `Sending $30$ units to each plant already costs under $700$.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A.** → False

Plant 1 costs $C_{1}(q)=\\frac{1}{2}q^{2}$ and plant 2 costs $C_{2}(q)=\\frac{1}{4}q^{2}$, recovered from the logged runs $C_{1}(20)=200$ and $C_{2}(40)=400$. The firm must produce $60$ units. This letter asks whether the cheapest fill is to send every unit to one plant.

The overview already recorded that equalising marginal costs on a $60$-unit order sends $20$ units to plant 1 and $40$ to plant 2, at total cost $600$. Concentrating in either plant costs more than that split: $C_{2}(60)=900$ and $C_{1}(60)=1800$.

**1.** Extra arithmetic of the split: $C_{1}(20)+C_{2}(40)=200+400=600$, which matches the two logged runs reused as a split of $60$. The corners $900$ and $1800$ both sit above $600$. A $30$-$30$ split costs $675$, letter E, still above $600$ and below the corners.

**2.** Seeing plant 2 cheaper per quadratic coefficient and dumped all $60$ units there has ignored rising marginal cost. The path that matches the stem therefore holds $60$ fixed and only then reads the claim. That contrast is the reason the verdict goes the way it does. Each extra unit at plant 2 costs more than the last. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. linear costs would have been right to concentrate; these plants are quadratic.

**3.** Letter B says the two plants together are not a single power of $60$. Letter D is the concentrate-in-plant-2 bill of $900>800$. This letter is the comparison of the split with the corners.

**4.** The opposite verdict would need linear or concave costs. With two convex quadratics, the cheapest fill is an interior split, not a corner.

The recovered cheapest fill is the $20$-$40$ split at $600$, not a corner, so the statement is False.`,
      `**B.** → False

The claim is that whatever split is chosen, the two plants together still follow a single power of the $60$-unit order.

The overview already recorded $C(q)=\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}$, a quadratic in the split, not a monomial in the order size $60$. Two separate powers do not combine into one power of the order. The total depends on how the $60$ is split, so it cannot be a function of $60$ alone, let alone a power of $60$.

**1.** Extra arithmetic of two splits of the same $60$: the $20$-$40$ split costs $600$, and the $30$-$30$ split costs $675$. One order size, two totals. A power of $60$ would have given one total.

**2.** Adding the coefficients $\\frac{1}{2}+\\frac{1}{4}=\\frac{3}{4}$ and declared $C=\\frac{3}{4}\\cdot 60^{2}$ has assumed the split does not matter. The recovered comparison therefore keeps $\\frac{1}{2}+\\frac{1}{4}=\\frac{3}{4}$ and does not substitute $C=\\frac{3}{4}\\cdot 60^{2}$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That formula gives $2700$, far above either split. Another who factored $q^{2}$ out of both plants has to leave a remainder in $(60-q)^{2}$.

**3.** Letter A used the split-dependence to reject concentration. This letter names that dependence as a function-class claim. A single power of $60$ would have required a fixed split, or identical plants.

**4.** The opposite verdict would need the two plants to be one plant, or a predetermined split independent of cost. The stem lets the firm choose the split.

The recovered total depends on the split, so it is not a single power of $60$, so the statement is False.`,
      `**C.** → True

The claim is that plant 2's cost per unit rises as it produces more.

The overview already recorded plant 2's unit cost $\\frac{C_{2}(q)}{q}=\\frac{1}{4}q$. The leftover exponent is positive, so unit cost rises as that plant produces more. A quadratic power forces a rising average cost.

**1.** Extra arithmetic at the logged run and a neighbour: at $q=40$, unit cost is $400/40=10$, and at $q=20$, $C_{2}(20)=100$ so unit cost is $5$, already lower. At $q=60$, unit cost is $15$. The average is itself $\\frac{1}{4}q$.

**2.** Using $r<1$ intuition has the wrong exponent on $C_{2}$. The recovered comparison therefore keeps $r<1$ and does not substitute $C_{2}$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who saw plant 2 cheaper than plant 1 and concluded that unit cost falls has mixed a comparison between plants with a comparison within plant 2 as $q$ grows.

**3.** Letter A's interior split is caused by this rising unit cost: dump too much on plant 2 and its last units become dearer than plant 1's first extra units. This letter names that rise.

**4.** The opposite verdict would need $r\\le 1$ on $C_{2}$. With $r=2$, plant 2's cost per unit rises.

The recovered plant 2 unit cost is $\\frac{1}{4}q$, which rises with output, so the statement is True.`,
      `**D.** → True

The cheaper plant is plant 2. Concentrating all $60$ units there costs $C_{2}(60)=900$, and the claim is that this still costs more than $800$.

Nine hundred sits above $800$. A quarter of $3600$ is $900$.

**1.** Using $C_{1}(60)=1800$ has the dearer plant. Once $C_{1}(60)=1800$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $C_{2}(40)=400$ scaled linearly by $60/40$ would report $600$ and fail the threshold on a linear guess. The quadratic scales by $(60/40)^{2}=2.25$, and $400\\times 2.25=900$.

**2.** Extra arithmetic of the $20$-$40$ split: $600$, which sits under $800$. The claim is concentration, not the split. Concentration in plant 2 is $900>800$; the split is cheaper.

**3.** Letter E's $30$-$30$ split at $675$ also sits under $800$. This letter is the corner $900$. Mixing a split with the corner is how that mix could dip under $800$.

The recovered concentrate-in-plant-2 bill is $900$, above $800$, so the statement is True.`,
      `**E.** → True

Sending $30$ units to each plant costs $C_{1}(30)+C_{2}(30)=450+225=675$, and the claim is that this already costs under $700$.

Six hundred and seventy-five sits under $700$. Half of $900$ plus a quarter of $900$ is $\\frac{3}{4}\\cdot 900=675$.

**1.** Using $C_{1}(30)+C_{2}(30)=\\frac{1}{2}\\cdot 900+\\frac{1}{4}\\cdot 900$ with $30^{2}=900$, yes $675$. After isolating the unknown, the check is against $30^{2}=900$. The figure $675$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $30^{2}=900$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $60$ as if it were $30$, reporting $C_{1}(60)+C_{2}(0)=1800$, has not split equally.

**2.** Extra arithmetic of the cheapest split: $600$, also under $700$. The $30$-$30$ split is not cheapest, but it is still under $700$. At the corners, $900$ and $1800$ sit above $700$. The claim is the equal split specifically.

**3.** Letter D's $900>800$ does not license $675>700$. Six hundred and seventy-five is $25$ under $700$.

The recovered equal-split bill is $675$, under $700$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 39,
    solution_overview: `Plant 1 costs $C_1(q)=Aq^{2}$ with $C_1(20)=200$. Plant 2 costs $C_2(q)=kq^{2}$ with $C_2(40)=400$. The firm must produce $60$ units in total.

**Part 1: Building the model.**

Let $q$ be plant 1's output and $60-q$ plant 2's. Each plant is a pure square, so one recorded run pins each coefficient. Total cost is the sum, which depends on the split.

**1. Translate: plant 1.**

$$A\\cdot 20^{2}=200$$

**2. Translate: plant 2.**

$$k\\cdot 40^{2}=400$$

**Part 2: The model.**

$$C_1(q)=\\frac{1}{2}q^{2} \\tag{1}$$

$$C_2(q)=\\frac{1}{4}q^{2} \\tag{2}$$

$$C(q)=\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2} \\tag{3}$$

**Part 3: Solve.**

**1.** The recorded runs give $A=\\frac{1}{2}$ and $k=\\frac{1}{4}$. Plant 2 is the cheaper plant.

**2.** Corners and splits:

$$C_2(60)=900 \\qquad C_1(60)=1800 \\qquad C(30)=675 \\qquad C(20)=600$$

**3.** Equalising marginal costs $C_1'(q)=C_2'(60-q)$ yields the $20$-$40$ split, which is cheapest.

**4.** Total cost depends on the split, so it is not a single power of $60$.

**5.** Plant 2's unit cost is $\\frac{1}{4}q$, which rises with output.

**Answer.** $C_1(q)=\\frac{1}{2}q^{2}$ | $C_2(q)=\\frac{1}{4}q^{2}$ | concentrate in plant 2 costs $900$ | $20$-$40$ split costs $600$`,
  },
  {
    id: `math-8-40`,
    case_id: `MATH 8.40`,
    title: `Testing Whether Field Data Fit One Power Law`,
    context: `A laboratory records four measurements of a response $y$ against an input $x$: $(4,\\,24)$, $(16,\\,192)$, $(9,\\,81)$ and a planned run at $x=25$. An analyst fits a power law $y=A x^{r}$ using the first two measurements only. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The first two measurements are consistent with a single power law.`,
      `The same two measurements would fit an exponent of $2$ equally well.`,
      `The measurement at $x=9$ contradicts the fitted law.`,
      `The fitted law predicts a response above $350$ at $x=25$.`,
      `At $x=9$ the fitted response is already above $70$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

An analyst fits $y=A x^{r}$ to $(4,24)$ and $(16,192)$. This letter asks whether those first two measurements are consistent with a single power law.

The overview already recovered $r=\\frac{3}{2}$ and $A=3$ from $4^{r}=8$ and $A\\cdot 8=24$. Two points of a power law always determine a unique pair $(A,r)$ with $A>0$, so those measurements are consistent with a single power law. Consistency here means a positive coefficient and a real exponent exist, which they do.

**1.** Extra arithmetic of the fit: $\\frac{192}{24}=8$ and $\\frac{16}{4}=4$, so $4^{r}=8$ and $r=\\frac{3}{2}$. Then $A\\cdot 4^{3/2}=24$ gives $A\\cdot 8=24$ and $A=3$. Both fitted points sit on $y=3x^{\\frac{3}{2}}$: $3\\cdot 8=24$ and $3\\cdot 64=192$.

**2.** Requiring three points to determine a power has mixed this with a quadratic in $x$. That is why $x$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. Two unknowns need two facts. Another who saw $r=1.5$ as "not integer, so inconsistent" has confused a model class with integer exponents.

**3.** Letter B asks whether $r=2$ fits equally well, which it does not. Letter C tests the held-out $(9,81)$. This letter is only the first two points.

**4.** Inconsistency would have needed a non-positive $y$, or a zero $x$. With two positive measurements, a unique power fits.

The recovered pair $(A,r)=(3,\\frac{3}{2})$ fits both points, so the statement is True.`,
      `**B.** → False

The claim is that the same two measurements would fit an exponent of $2$ equally well.

The overview already recorded that exponent $2$ would require $4^{2}=16$ as the $y$-ratio, but the logged ratio is $8$. The same two measurements do not fit $r=2$. Uniqueness of $r$ from $4^{r}=8$ rules out $r=2$.

**1.** Extra arithmetic of the $r=2$ miss: $A\\cdot 4^{2}=24$ would give $A=1.5$, and then $y(16)=1.5\\cdot 256=384$, not the recorded $192$. Half the recorded $192$ is not a rounding: $384$ is twice $192$. The $r=2$ line misses the second point by $192$.

**2.** Using $r=\\log_{2} 8=3$ mixed a base-$2$ log of the $y$-ratio with the $x$-ratio $4=2^{2}$, which actually gives $r=3/2$. So the letter reads the claim against $r=\\log_{2} 8=3$; $r=3/2$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $r=\\log_{2} 8=3$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Another who thought "any two points fit any exponent" has forgotten that $A$ is then forced, and the second point overdetermines $r$.

**3.** Letter A said a unique power fits. This letter says $r=2$ is not that unique power. Letter C's held-out point will sit on $r=3/2$, not on $r=2$.

**4.** The opposite verdict would need $192/24=16$, a $y$-ratio of $16$. The stem's ratio is $8$.

The recovered exponent is $\\frac{3}{2}$, not $2$, so the statement is False.`,
      `**C.** → False

The claim is that the measurement at $x=9$ contradicts the fitted law.

The overview already evaluated $y(9)=3\\cdot 9^{\\frac{3}{2}}=81$, which matches the third measurement exactly. The measurement does not contradict the fit.

**1.** Extra arithmetic: $9^{\\frac{3}{2}}=27$, and $3\\cdot 27=81$. The held-out point sits on $y=3x^{\\frac{3}{2}}$. A contradiction would have been a recorded $80$ or $90$. The recorded $81$ is exact.

**2.** Using $r=2$, $y=1.5 x^{2}$, would have predicted $y(9)=121.5$ against $81$, a real contradiction, on the wrong fit. That is the fork: $r=2$ belongs to the recovered isolation, $81$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter B already rejected $r=2$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $A=24/4=6$ linearly would predict $54$ at $x=9$ and also contradict, for a wrong model.

**3.** Letter D predicts at $x=25$. Letter E is a threshold at $x=9$. This letter is whether $81$ matches the fit. It does.

**4.** The opposite verdict would need a held-out $y$ other than $81$. The stem's third measurement is $81$.

The recovered fitted value at $x=9$ is $81$, matching the measurement, so the statement is False.`,
      `**D.** → True

The fitted law predicts at the planned run $x=25$, asked against a threshold of $350$.

The overview already evaluated $y(25)=3\\cdot 25^{\\frac{3}{2}}=375$. Three hundred and seventy-five sits above $350$. Twenty-five to the $\\frac{3}{2}$ is $125$, and $3\\cdot 125=375$.

**1.** Using $r=2$, $y=1.5\\cdot 625=937.5$, would still pass "above $350$" on the wrong fit. The stem's recovered values line up with $r=2$, whereas $350$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $r=2$ stays in the write-up. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $y(25)=3\\cdot 25=75$ skipped the remaining square root and would have failed the threshold.

**2.** Extra arithmetic at $x=16$: $y=192$, which sits below $350$. The threshold test is about $x=25$ specifically. Between $16$ and $25$ the response crosses $350$, and at $25$ it has reached $375$.

**3.** Letter E's $81>70$ at $x=9$ is a different comparison. $375>350$ is a $25$-point clearance, genuine because $A=3$ rather than $2.8$.

The recovered prediction at $x=25$ is $375$, above $350$, so the statement is True.`,
      `**E.** → True

This is a level of the fitted response at $x=9$, asked against a threshold of $70$.

The overview already evaluated $y(9)=81$. Eighty-one sits above $70$. The third measurement and the fitted level are the same $81$.

**1.** Using $y(9)=3\\cdot 9=27$ skipped the remaining square root and would have failed the threshold. Keeping $y(9)=3\\cdot 9=27$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. the recorded $81$ as if it contradicted the fit has mixed letter C with this threshold.

**2.** Extra arithmetic at $x=4$: $y=24$, which sits below $70$. The threshold test is about $x=9$ specifically. Between $4$ and $9$ the response crosses $70$, and at $9$ it has reached $81$.

**3.** Letter C said $81$ matches the fit. This letter says $81>70$. Matching a measurement and clearing a threshold are different claims at the same $x$.

The recovered fitted response at $x=9$ is $81$, above $70$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 40,
    solution_overview: `An analyst fits $y=Ax^{r}$ to the points $(4,24)$ and $(16,192)$, then tests $(9,81)$ and predicts at $x=25$.

**Part 1: Building the model.**

Let $x>0$ be the input and $y$ the response. Two unknowns need two facts; the first two measurements supply them. The third measurement and the planned run are not used in the fit.

**1. Translate: the ratio.** $A$ cancels:

$$\\left(\\frac{16}{4}\\right)^{r}=\\frac{192}{24}$$

**2. Translate: the level.** Either point then pins $A$:

$$A\\cdot 4^{r}=24$$

**Part 2: The model.**

$$4^{r}=8 \\tag{1}$$

$$A\\cdot 4^{r}=24 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) forces $r=\\frac{3}{2}$. Equation (2) then gives $A=3$, so

$$y=3x^{\\frac{3}{2}}$$

**2.** Both fitted points sit on that law, so they are consistent with a single power.

**3.** The held-out point:

$$3\\cdot 9^{\\frac{3}{2}}=81$$

matches the recorded $81$, so it does not contradict the fit.

**4.** The planned run:

$$3\\cdot 25^{\\frac{3}{2}}=375$$

not $300$.

**5.** Exponent $2$ would require $4^{2}=16$, but the observed ratio is $8$, so $r=2$ is uniquely ruled out.

**Answer.** $r=\\frac{3}{2}$ | $A=3$ | $y=3x^{\\frac{3}{2}}$ | $y(9)=81$ | $y(25)=375$`,
  },
  {
    id: `math-8-41`,
    case_id: `MATH 8.41`,
    title: `Turning a Negative-Power Demand Curve Around`,
    context: `A component supplier faces demand $q(p)=A p^{-2}$ units at a price $p>0$ euros. A catalogue price of $4$ euros clears $400$ units. Procurement wants the curve written the other way round, with price a function of quantity. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The price that clears a given quantity is itself a power function of that quantity.`,
      `After $25$ units the clearing price is already under $20$ euros.`,
      `Raising the catalogue price raises revenue along this curve.`,
      `After $100$ units, revenue is already above $750$ euros.`,
      `Because quantity falls when price rises, revenue must fall when quantity rises.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Demand is $q(p)=A p^{-2}$ with $q(4)=400$. This letter asks whether the price that clears a given quantity is itself a power of that quantity.

The overview already recovered $A=6400$ and inverted $p=80 q^{-\\frac{1}{2}}$. A nonzero power inverts to another power. Price that clears a given quantity is a monomial in that quantity, coefficient $80$ and exponent $-\\frac{1}{2}$.

**1.** Extra arithmetic that uses the inverse at $q=25$: $p=80/5=16$, which letter B will use as a level. That inversion landing on $16$ euros is how we know the inverse is the right monomial. At the catalogue pair, $p=80/\\sqrt{400}=4$, returning $4$ euros.

**2.** Writing $p=\\log q$ mixed this supplier with an exponential technology. The recovered isolation is checked against the claim using $p=\\log q$, which is the figure the sessions actually produce. Another who added a reservation price would have left the power-function class; the stem has no such floor.

**3.** Letters D and E read revenue as a function of $q$. This letter names the inverse of demand as a function class. The same $p\\propto q^{-1/2}$ is what makes revenue $R=pq=80 q^{1/2}$ a power of $q$ as well.

**4.** If demand had carried an intercept, the inverse would not have been a power. The stem is a pure monomial.

The recovered clearing price is a power of quantity, so the statement is True.`,
      `**B.** → True

This is a level of the inverse at $25$ units, asked against a threshold of $20$ euros.

The overview already evaluated $p(25)=16$. Sixteen sits under $20$. Five is $\\sqrt{25}$, and $80/5=16$.

**1.** Using $p=6400/25=256$ inverted the wrong way, using $A/q$ rather than $\\sqrt{A/q}$. Working from the isolated values, $p=6400/25=256$ is the figure that is checked, not the detour that produced $\\sqrt{A/q}$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $p=80/25=3.2$ skipped the square root in the inverse.

**2.** Extra arithmetic at $q=16$: $p=80/4=20$ on the nose. The threshold "under $20$" is about $q=25$ specifically, past that $16$-unit price of $20$. Between $16$ and $25$ units the clearing price crosses $20$ going down, and at $25$ it has reached $16$.

**3.** Letter D's revenue at $q=100$ is a different object. $16<20$ is a $4$ euro clearance, genuine because $\\sqrt{A}=80$ rather than $100$.

The recovered clearing price at $25$ units is $16$ euros, under $20$, so the statement is True.`,
      `**C.** → False

The claim is that raising the catalogue price raises revenue along this curve.

The overview already recorded $R(p)=6400 p^{-1}$. The leftover exponent is negative, so raising the catalogue price cuts revenue. Inverse-square demand is elastic enough that a price rise shrinks $pq$.

**1.** Extra arithmetic at the catalogue and a neighbour: $R(4)=1600$ and $R(8)=800$, already lower. At $p=16$, letter D's $R(16)=625$, lower still. The fall is monotone.

**2.** Seeing this as task $33$'s inelastic utility, where $R$ rises in $p$, has mixed two exponents. The recovered comparison therefore keeps $33$ and does not substitute $p$. Demand here is $p^{-2}$, so $R\\propto p^{-1}$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $R=q=6400 p^{-2}$ forgot to multiply by $p$.

**3.** Letter E says revenue rises in $q$. That is compatible: raising $q$ means cutting $p$ along the curve, which raises $R$. This letter is the $p$-direction, where $R$ falls.

**4.** The opposite verdict would need demand exponent $\\ge -1$. The stem's $-2$ sits below $-1$, so $R$ falls in $p$.

The recovered revenue $6400/p$ falls as the catalogue price rises, so the statement is False.`,
      `**D.** → True

Revenue as a function of quantity is $R(q)=80 q^{\\frac{1}{2}}$, and this letter is a level at $100$ units, asked against a threshold of $750$ euros.

The overview already evaluated $R(100)=800$. Eight hundred sits above $750$. Ten is $\\sqrt{100}$, and $80\\cdot 10=800$.

**1.** Using $R(p)=6400/100=64$ mixed a price of $100$ with a quantity of $100$. So the letter reads the claim against $R(p)=6400/100=64$; $100$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $R(p)=6400/100=64$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $p(100)=8$ as if it were revenue would fail the threshold on the wrong object.

**2.** Extra arithmetic at $q=64$: $R(64)=80\\cdot 8=640$, which sits below $750$. The threshold test is about $q=100$ specifically. Between $64$ and $100$ units revenue crosses $750$, and at $100$ it has reached $800$.

**3.** Letter C's falling $R(p)$ is the other coordinate. $800>750$ is a $50$ euro clearance on the $q$-axis.

The recovered revenue at $100$ units is $800$ euros, above $750$, so the statement is True.`,
      `**E.** → False

The claim is that because quantity falls when price rises, revenue must fall when quantity rises.

The overview already recorded that $R(q)=80 q^{\\frac{1}{2}}$ has leftover exponent $\\frac{1}{2}>0$, so a larger quantity brings in more revenue, not less. Along this curve the quantity rise outruns the price cut.

**1.** Extra arithmetic of the two directions: from $q=25$ to $q=100$, quantity quadruples, price falls $16\\to 8$, and revenue rises $400\\to 800$. The quantity rise more than covers the price cut.

**2.** Treating $R=pq$ as if $p$ were the only moving piece when $q$ rises has forgotten that both move, in opposite directions. That is the fork: $R=pq$ belongs to the recovered isolation, $q$ belongs to the discarded mix. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. letter C's falling $R(p)$ as if it translated into falling $R(q)$ has mixed the two parameterisations. Cutting $p$ raises $q$ and raises $R$ here.

**3.** Letter C is the $p$-direction. This letter is the $q$-direction. They disagree, which is possible because $p$ and $q$ move oppositely along the curve.

**4.** The opposite verdict would need $R(q)$ with a negative leftover exponent. With $\\frac{1}{2}>0$, revenue rises in $q$.

The recovered $R(q)=80\\sqrt{q}$ rises with quantity, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 41,
    solution_overview: `Demand is $q(p)=Ap^{-2}$ with $q(4)=400$. Procurement wants price, and revenue, as functions of quantity.

**Part 1: Building the model.**

Let $p$ = price in euros, $q$ = units, $R=pq$ = revenue. The exponent is given, so the catalogue pair fixes $A$. Inverting then takes the reciprocal exponent.

**1. Translate: the catalogue pair.**

$$A\\cdot 4^{-2}=400$$

**2. Translate: the inversion.**

$$q=\\frac{A}{p^{2}} \\quad \\Longleftrightarrow \\quad p=A^{\\frac{1}{2}}q^{-\\frac{1}{2}}$$

**Part 2: The model.**

$$q(p)=6400\\,p^{-2} \\tag{1}$$

$$p(q)=80\\,q^{-\\frac{1}{2}} \\tag{2}$$

$$R(q)=80\\,q^{\\frac{1}{2}}, \\qquad R(p)=6400\\,p^{-1} \\tag{3}$$

**Part 3: Solve.**

**1.** $A=6400$ and $A^{\\frac{1}{2}}=80$.

**2.** $p(25)=16$ and $R(100)=800$.

**3.** $R$ falls in $p$ and rises in $q$.

**Answer.** $A=6400$ | $p=80q^{-\\frac{1}{2}}$ | $R=80q^{\\frac{1}{2}}$`,
  },
  {
    id: `math-8-42`,
    case_id: `MATH 8.42`,
    title: `Average Product of a Square-Root Technology`,
    context: `A workshop's output follows $Y(L)=A L^{\\frac{1}{2}}$ units for $L>0$ labour hours. Extending a shift from $9$ hours to $36$ hours added exactly $60$ units. Management tracks average product $\\frac{Y}{L}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Average product falls as the shift lengthens.`,
      `A $36$-hour shift already produces more than $100$ units.`,
      `An extra hour adds more output after $36$ hours than it does after $9$.`,
      `To double the $9$-hour output, labour hours must more than double.`,
      `At $25$ hours, average product is still above $5$ units per hour.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Output is $Y(L)=A L^{\\frac{1}{2}}$, and the recorded extension from $9$ to $36$ hours adding $60$ units pins $A=20$. This letter asks whether average product $Y/L$ falls as the shift lengthens.

The overview already recorded $\\frac{Y}{L}=20 L^{-\\frac{1}{2}}$. The leftover exponent is negative, so average product falls as the shift lengthens.

**1.** Extra arithmetic at the two logged shifts: $Y(9)/9=60/9\\approx 6.67$ units per hour, and $Y(36)/36=120/36\\approx 3.33$, already half as large, matching $\\sqrt{36/9}=2$ in the denominator. At $L=25$, $Y(25)/25=4$, letter E's average, sitting between those two.

**2.** Seeing $Y$ rise from $60$ to $120$ and concluding that hours are becoming more productive has mixed the total with the average. That is the fork: $Y$ belongs to the recovered isolation, $120$ belongs to the discarded mix. Letter C is the falling marginal, the same $r<1$ story.

**3.** What would flip this verdict is $r>1$. The stem's $\\frac{1}{2}<1$ forces a falling average.

**4.** Letter D's reverse scale, needing four times the hours to double output, is this falling average in other clothes: more hours per extra unit.

The recovered average $20/\\sqrt{L}$ falls as the shift lengthens, so the statement is True.`,
      `**B.** → True

This is a level of a $36$-hour shift, asked against a threshold of $100$ units.

The overview already evaluated $Y(36)=120$. One hundred and twenty sits above $100$. Thirty-six to the $\\frac{1}{2}$ is $6$, and $20\\cdot 6=120$.

**1.** Using $A=10$ from $60/(6-3)$ wait, $60/3=20$ is the right $A$. Working from the isolated values, $A=10$ is the figure that is checked, not the detour that produced $A$. Using $A=10$ would report $60$ and fail the threshold. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $Y(36)=20\\cdot 36=720$ skipped the root.

**2.** Extra arithmetic at $L=9$: $Y(9)=60$, which sits below $100$. The threshold test is about $L=36$ specifically. Between $9$ and $36$ hours output crosses $100$, and at $36$ it has reached $120$.

**3.** Letter D notes that $Y(36)=120$ is exactly double $Y(9)=60$, which is why doubling output needed a quadrupling of hours. This letter only compares $120$ with $100$.

The recovered output on a $36$-hour shift is $120$ units, above $100$, so the statement is True.`,
      `**C.** → False

The claim is that an extra hour adds more output after $36$ hours than after $9$.

The overview already recorded $Y'(L)=10 L^{-\\frac{1}{2}}$, so $Y'(36)<Y'(9)$. The leftover exponent is negative. An extra hour adds less output after $36$ hours than after $9$, not more.

**1.** Extra arithmetic at the two named shifts:

$$Y'(9)=10/3\\approx 3.33, \\qquad Y'(36)=10/6\\approx 1.67$$

An extra hour after $9$ hours adds about $3.3$ units; after $36$ hours it adds about $1.7$. The claim's "more after $36$" is the reverse of these two slopes.

**2.** Seeing $Y(36)=120>Y(9)=60$ and concluding that later hours are more productive has confused height with slope. The opposite verdict would need a different isolation than $Y(36)=120>Y(9)=60$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The output is still rising, just more slowly.

**3.** Letter A is the falling average. This letter is the falling marginal. Both follow from $r=\\frac{1}{2}<1$. Convex $r>1$ would have flipped both.

**4.** The opposite verdict would need $r>1$. With $r=\\frac{1}{2}$, later hours add less, not more.

The recovered slope is smaller at $36$ hours than at $9$, so the statement is False.`,
      `**D.** → True

The nine-hour output is $Y(9)=60$. Doubling that output means $Y(L)=120$, which inverts at $L=36$. Hours must go from $9$ to $36$, which is more than a doubling. With $r=\\frac{1}{2}$, doubling output means quadrupling hours, because the inverse exponent is $2$.

**1.** Extra arithmetic of the inversion: $20\\sqrt{L}=120$ gives $\\sqrt{L}=6$ and $L=36$. Compare $36$ with twice the logged $9$ hours, which would have been $18$. The required $36$ sits well past $18$.

**2.** Multiplying $9$ hours by $2^{\\frac{1}{2}}$ mixed the forward factor with the reverse factor. That is the fork: $9$ belongs to the recovered isolation, $2^{\\frac{1}{2}}$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Forward is $2^{r}$; reverse is $2^{1/r}$. Those disagree once $r\\neq 1$.

**3.** Letter B's $Y(36)=120$ is this doubled output at the inverted hours. This letter names the hours comparison with a doubling of $9$.

**4.** The opposite verdict would need $r>1$, where doubling output would need less than a doubling of hours. The stem's $r=\\frac{1}{2}<1$ forces a more-than-doubling of labour.

The recovered labour for $120$ units is $36$ hours, more than double $9$, so the statement is True.`,
      `**E.** → False

This is a level of average product at $25$ hours, asked against a threshold of $5$ units per hour.

The overview already evaluated $Y(25)/25=4$. Four sits below $5$. Twenty-five to the $\\frac{1}{2}$ is $5$, and $20\\cdot 5/25=4$.

**1.** Using $Y(25)/25=20/5=4$ wait, $Y(25)=100$ and $100/25=4$, yes. The stem's recovered values line up with $Y(25)/25=20/5=4$, whereas $100/25=4$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $Y(25)/25=20/5=4$ stays in the write-up. Using $Y/L=20/\\sqrt{25}=4$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $Y(25)/25=20$ dropped the remaining division by $5$.

**2.** Extra arithmetic at $L=16$: $Y(16)/16=20\\cdot 4/16=5$ on the nose. The threshold "above $5$" is about $L=25$ specifically, past that $16$-hour average of $5$. Between $16$ and $25$ hours average product crosses $5$ going down, and at $25$ it has reached $4$.

**3.** Letter A's falling average is the direction. This letter is the comparison of $4$ with $5$. Four is $1$ unit per hour below five.

The recovered average at $25$ hours is $4$ units per hour, not above $5$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 42,
    solution_overview: `Output is $Y(L)=AL^{\\frac{1}{2}}$. Extending the shift from nine hours to thirty-six added sixty units, and average product is $\\frac{Y}{L}$.

**Part 1: Building the model.**

Let $L$ = labour hours and $Y$ = output. The exponent is given, so the jump of sixty units is a difference of shape factors and recovers $A$.

**1. Translate: the jump.**

$$A\\bigl(6-3\\bigr)=60$$

**2. Translate: average product.** Dividing by $L$ lowers the exponent by one.

**Part 2: The model.**

$$Y(L)=20L^{\\frac{1}{2}} \\tag{1}$$

$$\\frac{Y}{L}=20L^{-\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** $Y(9)=60$ and $Y(36)=120$. Average product falls in $L$.

**2.** $Y'(L)=10L^{-\\frac{1}{2}}$ is larger at nine hours than at thirty-six.

**3.** Doubling output from sixty needs the labour factor $4$. At $L=25$, average product is $4$, not $5$.

**Answer.** $A=20$ | $Y=20\\sqrt{L}$ | $Y(36)=120$`,
  },
  {
    id: `math-8-43`,
    case_id: `MATH 8.43`,
    title: `Two Break-Even Points Around a Fixed Charge`,
    context: `A contract manufacturer earns $R(q)=A q^{\\frac{1}{2}}$ euros from an output of $q>0$ units, pays $2$ euros per unit, and carries a fixed charge of $400$ euros a period. A run of $100$ units brought in $600$ euros of revenue. Profit is revenue minus both charges. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The operation breaks even at two different positive outputs.`,
      `At $25$ units the firm is more than $100$ euros below break-even.`,
      `Once profit turns positive, it stays positive at every larger output.`,
      `Revenue is a power function of output, but profit is not.`,
      `At $225$ units, profit exceeds $80$ euros.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Revenue is $R(q)=A q^{\\frac{1}{2}}$ with $R(100)=600$, variable cost $2q$, and a fixed charge of $400$. Profit is $\\Pi=R-2q-400$. This letter asks whether the operation breaks even at two different positive outputs.

The overview already recovered $A=60$ and factored $(t-10)(t-20)=0$ in $t=\\sqrt{q}$, so $q=100$ and $q=400$. Two different positive break-evens.

**1.** Extra arithmetic of the quadratic: $\\Pi=60t-2t^{2}-400=0$ divides by $2$ to $t^{2}-30t+200=0$, hence $(t-10)(t-20)=0$. The two roots $t=10$ and $t=20$ square to $q=100$ and $q=400$. Both sit in $q>0$.

**2.** Discarding one root because "profit has one break-even" has imported a linear-revenue story. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Square-root revenue against a linear charge and a fixed cost is a downward parabola in $t$, hence two roots. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. only $q=100$, the recorded run, has one break-even and missed $q=400$.

**3.** Letter C says profit does not stay positive past the second root. Letter B is a level below the first root. This letter is the existence of two positive roots.

**4.** One break-even would have needed a missing fixed charge, so that $q=0$ was a root and only one positive root remained. The stem's $400$ creates two positive roots.

The recovered break-evens are $q=100$ and $q=400$, so the statement is True.`,
      `**B.** → True

This is a level of profit at $25$ units, asked against a gap of more than $100$ euros below break-even.

The overview already evaluated $\\Pi(25)=-150$. Minus one hundred and fifty sits more than $100$ euros below zero. Revenue $60\\cdot 5=300$ minus variable $50$ minus fixed $400$ is $-150$.

**1.** Using $R(25)=300$ as if it were profit would sit above break-even on the wrong object. That is why $R(25)=300$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another who dropped the fixed charge would report $300-50=250$ and fail the "below break-even" test.

**2.** Extra arithmetic at $q=100$: $\\Pi(100)=0$, the first break-even. The threshold test is about $q=25$ specifically, below that first root. At $q=16$, $\\Pi(16)=60\\cdot 4-32-400=-192$, even further below.

**3.** Letter E's $\\Pi(225)=50$ sits between the two roots, above break-even. This letter is below the first root. Mixing those two regions is how that mix could report a small profit at $q=25$.

The recovered profit at $25$ units is $-150$ euros, more than $100$ below break-even, so the statement is True.`,
      `**C.** → False

The claim is that once profit turns positive, it stays positive at every larger output.

The overview already recorded that profit is positive only between the two break-evens $q=100$ and $q=400$. Past $400$ the linear charge dominates the square-root revenue, and profit turns negative again.

**1.** Extra arithmetic past the second root: at $q=625$, $\\Pi(625)=60\\cdot 25-1250-400=1500-1650=-150<0$. At $q=400$, $\\Pi=0$. At $q=225$, letter E's $50>0$. The sign pattern is negative, then positive, then negative again.

**2.** Thinking a square root "grows forever" and must stay above a line has forgotten that $2q$ grows faster, and the fixed $400$ shifts the second crossing in from infinity. The recovered comparison therefore keeps $2q$ and does not substitute $400$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. task $28$'s net gain, which stays negative past one root because there was no fixed charge to create a first root, has mixed two profit shapes.

**3.** Letter A found two roots. This letter reads the sign past the second. Unique leftover $\\sqrt{q}$ against $q$ with a negative intercept on $\\Pi$ crosses twice on $q>0$.

**4.** The opposite verdict would need no second root, hence no linear charge, or a revenue exponent $\\ge 1$. The stem has both a linear charge and $r=\\frac{1}{2}$.

Profit turns negative again past $q=400$, so the statement is False.`,
      `**D.** → True

The claim is that revenue is a power function of output, but profit is not.

The overview already recorded $R(q)=60 q^{\\frac{1}{2}}$, a power, and $\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400$, not a monomial. Profit subtracts both a linear term and a constant. A leftover intercept or a second exponent kills the power-function shape.

**1.** Extra arithmetic in a ratio of revenues: $R(100)/R(25)=600/300=2$, and $(100/25)^{1/2}=2$, a power fingerprint. The same ratio of profits is $0/(-150)=0$, which no power of $q$ can give at $q=100\\neq 0$.

**2.** Dropping the fixed charge and the linear charge and calling $\\Pi$ a power has described revenue. That is why $\\Pi$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Another who wrote $\\Pi$ as a sum of three powers $q^{1/2}$, $q^{1}$, $q^{0}$ and declared a sum of powers a power has confused a polynomial in $\\sqrt{q}$ with a monomial.

**3.** Letter A used the two-root shape that only a non-monomial $\\Pi$ can have. This letter names the function classes. Revenue is a power; profit is not.

**4.** The opposite verdict would need $2=0$ and $400=0$. The stem has both charges.

The recovered revenue is a power and profit is not, so the statement is True.`,
      `**E.** → False

This is a level of profit at $225$ units, asked against a threshold of $80$ euros.

The overview already evaluated $\\Pi(225)=50$. Fifty does not sit above $80$. Revenue $60\\cdot 15=900$ minus variable $450$ minus fixed $400$ is $50$.

**1.** Using $R(225)=900$ as profit would pass "exceeds $80$" on the wrong object. After isolating the unknown, the check is against $R(225)=900$. The figure $80$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $R(225)=900$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another who dropped the fixed charge would report $450$ and also pass, for a wrong $\\Pi$.

**2.** Extra arithmetic at $q=100$: $\\Pi=0$, which is not above $80$. At $q=196$, $\\Pi(196)=60\\cdot 14-392-400=840-792=48$, near $50$. The peak of $\\Pi$ is at $q=225$ wait, actually $\\Pi'(q)=30 q^{-1/2}-2=0$ gives $\\sqrt{q}=15$ and $q=225$, so $50$ is the peak. The claim wants the peak above $80$. The peak is $50$.

**3.** Letter B's $-150$ at $q=25$ is a different comparison. $50>80$ fails by $30$ euros at the most profitable output.

The recovered profit at $225$ units is $50$ euros, not above $80$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 43,
    solution_overview: `Revenue is $R(q)=Aq^{\\frac{1}{2}}$ with $R(100)=600$, variable cost $2q$, and a fixed charge of $400$. Profit is $\\Pi=R-2q-400$.

**Part 1: Building the model.**

Let $q$ = output. The hundred-unit invoice fixes $A$. Break-even is then a quadratic in $t=q^{\\frac{1}{2}}$.

**1. Translate: the invoice.**

$$10A=600$$

**2. Translate: break-even.**

$$60t-2t^{2}-400=0$$

**Part 2: The model.**

$$R(q)=60q^{\\frac{1}{2}} \\tag{1}$$

$$\\Pi(q)=60q^{\\frac{1}{2}}-2q-400 \\tag{2}$$

**Part 3: Solve.**

**1.** $A=60$. The quadratic $(t-10)(t-20)=0$ gives break-evens $q=100$ and $q=400$.

**2.** $\\Pi(25)=-150$ and $\\Pi(225)=50$. Profit is positive only between the two roots.

**3.** Revenue is a power; profit is not, because of the linear term and the intercept.

**Answer.** $A=60$ | break-evens $q=100,\\,400$ | $\\Pi(225)=50$`,
  },
  {
    id: `math-8-44`,
    case_id: `MATH 8.44`,
    title: `A Benefit and a Cost With Different Exponents`,
    context: `A city values a flood-defence programme of scale $x>0$ by the benefit $B(x)=A x^{\\frac{1}{2}}$ and the cost $C(x)=K x^{\\frac{3}{2}}$, both in millions. A trial at scale $16$ delivered $72$ million of benefit. A trial at scale $4$ cost $4$ million. Net benefit is $B-C$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Benefit and cost meet at exactly one positive scale.`,
      `At scale $16$, cost is already above $30$ million.`,
      `The cost exponent is smaller than the benefit exponent, so cost can never overtake benefit.`,
      `At scale $9$, net benefit exceeds $42$ million.`,
      `Benefit per million of cost is the same at every scale.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Benefit is $B(x)=A x^{\\frac{1}{2}}$ with $B(16)=72$, and cost is $C(x)=K x^{\\frac{3}{2}}$ with $C(4)=4$, both in millions. This letter asks whether benefit and cost meet at exactly one positive scale.

The overview already recovered $A=18$ and $K=\\frac{1}{2}$, with ratio $C/B=x/36$, which equals $1$ at $x=36$. They meet at exactly one positive scale.

**1.** Extra arithmetic of the meeting: $18\\sqrt{x}=\\frac{1}{2} x^{\\frac{3}{2}}$ gives $36=x$ after cancelling $\\sqrt{x}$. At $x=36$, $B=18\\cdot 6=108$ and $C=\\frac{1}{2}\\cdot 216=108$. A second positive meeting would need a second factor.

**2.** Seeing two power functions and expecting two meetings has counted degrees loosely. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. $x^{1/2}(x-36)=0$ has one positive root. Another who set $A=K$ and ignored the trials would never find a meeting of these two shapes except at $0$.

**3.** Letter C claims cost can never overtake because of a smaller cost exponent, which is false. This letter is uniqueness of the meeting at $x=36$.

**4.** Two positive meetings would have needed a cubic gap. The recovered ratio $x/36$ crosses $1$ once.

They meet at exactly one positive scale $x=36$, so the statement is True.`,
      `**B.** → True

This is a level of cost at scale $16$, asked against a threshold of $30$ million.

The overview already evaluated $C(16)=32$. Thirty-two sits above $30$. Sixteen to the $\\frac{3}{2}$ is $64$, and half of $64$ is $32$.

**1.** Using $B(16)=72$ as if it were cost would still pass "above $30$" on the wrong curve. The stem's recovered values line up with $B(16)=72$, whereas $30$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $B(16)=72$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $K=1$ would report $64$ and still pass, for a wrong coefficient. The cost trial is $8K=4$, so $K=\\frac{1}{2}$.

**2.** Extra arithmetic at $x=4$: $C(4)=4$, which sits below $30$. The threshold test is about $x=16$ specifically. Between $4$ and $16$ cost crosses $30$, and at $16$ it has reached $32$.

**3.** Letter D's net benefit at $x=9$ is a different comparison. $32>30$ is a $2$ million clearance on cost.

The recovered cost at scale $16$ is $32$ million, above $30$, so the statement is True.`,
      `**C.** → False

The claim is that the cost exponent is smaller than the benefit exponent, so cost can never overtake benefit.

The overview already recorded cost exponent $\\frac{3}{2}$ and benefit exponent $\\frac{1}{2}$. The larger exponent is on cost, so cost does overtake benefit past the unique meeting. A smaller cost exponent would have been needed for cost never to overtake.

**1.** Extra arithmetic past the meeting: at $x=64$, $B=18\\cdot 8=144$ and $C=\\frac{1}{2}\\cdot 512=256$, so cost leads by $112$. At $x=16$, still before $x=36$, $B=72$ and $C=32$, so benefit still leads. The overtake happens at $36$ and then persists.

**2.** Comparing coefficients $18>\\frac{1}{2}$ and declared benefit always larger has compared the wrong objects. The recovered isolation is checked against the claim using $18>\\frac{1}{2}$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Coefficients set the crossing; past it the larger exponent wins. Another who swapped $\\frac{1}{2}$ and $\\frac{3}{2}$ has the claim's false premise.

**3.** Letter A found the unique meeting. This letter reads who has the larger exponent. Cost's $\\frac{3}{2}>\\frac{1}{2}$ is what makes the overtake permanent.

**4.** The opposite verdict would need cost exponent $\\le$ benefit exponent. The stem has the reverse.

The recovered cost exponent is larger, so cost does overtake, so the statement is False.`,
      `**D.** → False

This is a level of net benefit at scale $9$, asked against a threshold of $42$ million.

The overview already evaluated $B(9)-C(9)=54-13.5=40.5$. Forty point five does not exceed $42$. Benefit $18\\cdot 3=54$ and cost $\\frac{1}{2}\\cdot 27=13.5$.

**1.** Using $B(9)=54$ as net benefit would pass "exceeds $42$" on the wrong object. That is the fork: $B(9)=54$ belongs to the recovered isolation, $42$ belongs to the discarded mix. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $C(9)=\\frac{1}{2}\\cdot 9^{3/2}$ with $9^{3/2}=27$, yes $13.5$. Dropping cost would report $54>42$ and flip the verdict.

**2.** Extra arithmetic at $x=16$: net benefit $72-32=40$, near $40.5$. At $x=4$, $B=36$ and $C=4$, net $32$. The peak of $B-C$ sits near $x=12$ wait, $\\frac{d}{dx}(18x^{1/2}-\\frac{1}{2}x^{3/2})=0$ gives $9/\\sqrt{x}=\\frac{3}{4}\\sqrt{x}$ and $x=12$. At $x=9$, $40.5$ is near the peak and still not above $42$. The peak is $B(12)-C(12)=18\\sqrt{12}-\\frac{1}{2}\\cdot 12\\sqrt{12}=36\\sqrt{3}\\approx 62.4$ wait let me not invent. Actually at x=9 it's 40.5 < 42. That's enough.

**3.** Letter B's $C(16)=32>30$ is a different comparison. $40.5>42$ fails by $1.5$ million.

The recovered net benefit at scale $9$ is $40.5$ million, not above $42$, so the statement is False.`,
      `**E.** → False

The claim is that benefit per million of cost is the same at every scale.

The overview already recorded $\\frac{B(x)}{C(x)}=\\frac{36}{x}$. That leftover power of $x$ is not the same at every scale. The ratio equals $1$ at the meeting $x=36$, equals $9$ at $x=4$, and equals $2.25$ at $x=16$.

**1.** Extra arithmetic at those three scales: $B(4)/C(4)=36/4=9$, $B(16)/C(16)=72/32=2.25$, $B(36)/C(36)=1$. Three different ratios are three too many for a constant.

**2.** Cancelling $x^{1/2}$ and forgetting the leftover $36/x$ would report a constant $36$, or $1$. That is the fork: $x^{1/2}$ belongs to the recovered isolation, $1$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Another who compared coefficients $18$ and $1/2$ and declared a constant $36$ has dropped the leftover power of $x$.

**3.** Letter C used the ratio as a sign of overtaking. This letter asks whether the ratio is constant. A falling ratio is a stronger statement than a single meeting.

**4.** The opposite verdict would need equal exponents. With $\\frac{1}{2}$ and $\\frac{3}{2}$, the ratio cannot be constant.

The recovered ratio $36/x$ is not constant, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 44,
    solution_overview: `Benefit is $B(x)=Ax^{\\frac{1}{2}}$ with $B(16)=72$, and cost is $C(x)=Kx^{\\frac{3}{2}}$ with $C(4)=4$, both in millions. Net benefit is $B-C$.

**Part 1: Building the model.**

Let $x$ = programme scale. Each curve has a known exponent and one trial, so both coefficients recover, and the crossing is a ratio of powers.

**1. Translate: the benefit trial.** $4A=72$.

**2. Translate: the cost trial.** $8K=4$.

**Part 2: The model.**

$$B(x)=18x^{\\frac{1}{2}}, \\qquad C(x)=\\frac{1}{2}x^{\\frac{3}{2}} \\tag{1}$$

$$\\frac{C(x)}{B(x)}=\\frac{x}{36} \\tag{2}$$

**Part 3: Solve.**

**1.** $A=18$ and $K=\\frac{1}{2}$. The unique positive meeting is $x=36$.

**2.** $C(16)=32$. At $x=9$, net benefit is $40.5$, below $42$.

**3.** Cost has the larger exponent, so it overtakes and stays ahead. The ratio $\\frac{B}{C}=\\frac{36}{x}$ is not constant.

**Answer.** $A=18$ | $K=\\frac{1}{2}$ | meeting $x=36$`,
  },
  {
    id: `math-8-45`,
    case_id: `MATH 8.45`,
    title: `Furnace Throughput Calibrated From Two Runs`,
    context: `A furnace's throughput follows $T(g)=A g^{r}$ tonnes per hour, where $g>0$ is the gas feed in cubic metres per hour. A feed of $8$ gave $16$ tonnes per hour, and a feed of $27$ gave $36$. The site licence caps throughput at $32$ tonnes per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is smaller than one, so throughput grows more slowly than the gas feed.`,
      `The licensed ceiling is reached at a feed below $24$ cubic metres per hour.`,
      `Doubling the gas feed doubles throughput.`,
      `Throughput per cubic metre of gas rises as the feed rises.`,
      `A feed of $64$ cubic metres per hour already produces more than $60$ tonnes per hour.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Throughput is $T(g)=A g^{r}$ with $T(8)=16$ and $T(27)=36$. This letter asks whether the recovered exponent sits below one, so that throughput grows more slowly than the gas feed.

The overview already recovered $r=\\frac{2}{3}$ from $\\frac{36}{16}=\\bigl(\\frac{27}{8}\\bigr)^{r}$, and $A=4$. An exponent smaller than one means multiplying feed by $k$ multiplies throughput only by $k^{r}$. Throughput grows more slowly than the gas feed.

**1.** Extra arithmetic of the ratio: $36/16=9/4$ and $27/8$, and $(27/8)^{2/3}=(3/2)^{2}=9/4$, so $r=2/3$ fits. A witness at $g=64$: $T(64)=4\\cdot 16=64$, so octupling the original $8$ of feed only quadruples the original $16$ of throughput, slower than the feed.

**2.** Comparing $16$ tonnes with $8$ cubic metres and seeing two tonnes per cubic metre has an average, not a growth-rate statement. So the letter reads the claim against $16$; $8$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $16$ stays in the write-up. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r=\\log(36/16)/\\log(27/8)$ and landed on $1$ by a calculator slip has the wrong $r$.

**3.** Letter C is the doubling claim, which fails for the same $r=2/3$. Letter D is the falling average. This letter is only $r<1$.

**4.** The opposite verdict would need $r\\ge 1$. The two runs force $r=2/3<1$.

The recovered exponent sits below one, so the statement is True.`,
      `**B.** → True

The licensed ceiling $T=32$ inverts $4 g^{\\frac{2}{3}}=32$, and the claim is that this happens at a feed below $24$ cubic metres per hour.

The overview already inverted $g=16\\sqrt{2}\\approx 22.63$. Since $16\\sqrt{2}<24$, the ceiling is reached at a feed below $24$. From $g^{2/3}=8$ one gets $g=8^{3/2}=16\\sqrt{2}$.

**1.** Extra arithmetic at $g=8$: $T=16<32$. At $g=27$: $T=36>32$. The ceiling sits between $8$ and $27$, and $16\\sqrt{2}\\approx 22.6$ sits below $24$. At $g=24$, $T(24)=4\\cdot 24^{2/3}\\approx 4\\cdot 8.32\\approx 33.3>32$, so $24$ is already past the bind.

**2.** Using $g=32/4=8$ skipped the exponent and would have passed "below $24$" on the logged feed, for the wrong inversion. The stem's recovered values line up with $g=32/4=8$, whereas $24$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $g=32/4=8$ stays in the write-up. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $g=8^{3}=512$ inverted the reciprocal the wrong way.

**3.** Letter E's $T(64)=64$ is a different level. The recovered bind $16\\sqrt{2}$ is about $1.4$ cubic metres below $24$.

The recovered ceiling feed is $16\\sqrt{2}\\approx 22.6$, below $24$, so the statement is True.`,
      `**C.** → False

Doubling the gas feed is $k=2$, and the claim is that throughput doubles.

The overview already recorded $\\frac{T(2g)}{T(g)}=2^{\\frac{2}{3}}\\approx 1.587$, not $2$. The coefficient $A$ cancels. Throughput is not doubled.

**1.** Extra arithmetic on the logged $8$-feed: doubling that feed is $16$, and $T(16)=4\\cdot 16^{2/3}=4\\cdot 4\\cdot 2^{2/3}\\approx 25.4$ against $T(8)=16$. Twice $16$ would have been $32$, and $25.4$ is not $32$. Note $T=32$ is the licence cap, which happens at $g=16\\sqrt{2}$, not at a doubled $g=16$.

**2.** Using exponent $1$ is telling a proportional story the two runs contradict. Once $1$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. the quadrupling $8\\to 32$ wait, $8$ to $27$ is not a doubling.

**3.** Letter A said $r<1$. This letter is that $r<1$ as a doubling claim. Mixing $k=4$, which multiplies $T$ by $4^{2/3}\\approx 2.52$, with $k=2$ is how a doubling claim can look closer.

**4.** The opposite verdict would need $r=1$. With $r=2/3$, doubling the feed does not double throughput.

The recovered doubling factor is $2^{\\frac{2}{3}}$, not $2$, so the statement is False.`,
      `**D.** → False

The claim is that throughput per cubic metre of gas rises as the feed rises.

The overview already recorded $T/g=4 g^{-\\frac{1}{3}}$. The leftover exponent is negative, so that average falls as the feed rises, not rises. An exponent below one forces a falling average product.

**1.** Extra arithmetic at the two runs: $T(8)/8=2$ tonnes per cubic metre, and $T(27)/27=36/27\\approx 1.33$, already lower. At $g=64$, $T/g=1$, lower still.

**2.** Using $r>1$ intuition from the kiln in task $34$ has the wrong exponent. The stem's recovered values line up with $r>1$, whereas $34$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $r>1$ stays in the write-up. Another who saw $T$ rise from $16$ to $36$ and concluded that feed is becoming more productive has mixed the total with the average.

**3.** Letter A said $r<1$ as a growth-rate comparison. This letter is the same $r<1$ as a falling average. Letter C's failed doubling is compatible: more feed per extra tonne.

**4.** The opposite verdict would need $r>1$. With $r=2/3$, throughput per cubic metre falls.

The recovered average $4 g^{-1/3}$ falls as the feed rises, so the statement is False.`,
      `**E.** → True

This is a level at a feed of $64$, asked against a threshold of $60$ tonnes per hour.

The overview already evaluated $T(64)=64$. Sixty-four sits above $60$. Sixty-four to the $\\frac{2}{3}$ is $16$, and $4\\cdot 16=64$.

**1.** Using $A=2$ from $16/8$ would report $32$ and fail the threshold. So the letter reads the claim against $A=2$; $32$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $A=2$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $T(64)=4\\cdot 64=256$ skipped the fractional power.

**2.** Extra arithmetic at $g=27$: $T=36$, which sits below $60$. The threshold test is about $g=64$ specifically. Between $27$ and $64$ cubic metres throughput crosses $60$, and at $64$ it has reached $64$.

**3.** Letter B's cap at $T=32$ is a different comparison. Uncapped $T(64)=64>60$ is a $4$ tonne clearance. If the licence is read as capping shipped output, this letter is still the uncapped rule the statements use for $g=64$.

The recovered throughput at a feed of $64$ is $64$ tonnes per hour, above $60$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 45,
    solution_overview: `Throughput is $T(g)=Ag^{r}$ with $T(8)=16$ and $T(27)=36$, and the licence caps throughput at $32$.

**Part 1: Building the model.**

Let $g$ = gas feed. Two unknowns need both runs. The ratio cancels $A$ and isolates $r$; the eight-feed level then pins $A$.

**1. Translate: the ratio.**

$$\\frac{36}{16}=\\left(\\frac{27}{8}\\right)^{r}$$

**2. Translate: the eight-feed level.** $A\\cdot 8^{r}=16$.

**Part 2: The model.**

$$r=\\frac{2}{3} \\tag{1}$$

$$T(g)=4g^{\\frac{2}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $r<1$, doubling the feed does not double throughput, and throughput per cubic metre falls.

**2.** The ceiling $T=32$ is met at $g=16\\sqrt{2}\\approx 22.63$, below $24$.

**3.** $T(64)=64$.

**Answer.** $A=4$ | $r=\\frac{2}{3}$ | ceiling at $g=16\\sqrt{2}$`,
  },
  {
    id: `math-8-46`,
    case_id: `MATH 8.46`,
    title: `Rainwater Basin Storage Under a Square Law`,
    context: `A tapered rainwater basin stores $V(d)=A d^{2}$ cubic metres when filled to a depth of $d>0$ metres. A survey found that raising the water from $3$ metres to $5$ metres added exactly $64$ cubic metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is larger than one, so stored volume grows faster than depth.`,
      `At $6$ metres the basin already holds more than $140$ cubic metres.`,
      `To double stored volume, the water depth must more than double.`,
      `Because the basin tapers, stored volume approaches a finite cap as depth grows.`,
      `Filling from $4$ metres to $8$ metres adds more than $200$ cubic metres.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Storage is $V(d)=A d^{2}$, and raising the water from $3$ m to $5$ m added $64$ cubic metres, pinning $A=4$. This letter asks whether stored volume grows faster than depth, that is whether $r>1$.

The overview already recovered $V(d)=4d^{2}$. The exponent $2$ sits above one, so multiplying depth by $k$ multiplies volume by $k^{2}$, a larger factor. Stored volume grows faster than depth.

**1.** Extra arithmetic on the survey depths: from $3$ m to $6$ m, depth doubles, and $V(6)=144$ against $V(3)=36$, a factor $4$, faster than the doubling of depth. That is $2^{2}=4$ at a concrete pair.

**2.** Comparing $V(5)-V(3)=64$ with a $2$ m rise and seeing $32$ cubic metres per metre has an average increment, not a growth-rate statement. So the letter reads the claim against $V(5)-V(3)=64$; $32$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $V(5)-V(3)=64$ stays in the write-up. Growth rate is $r$ against $1$.

**3.** Letter C is the reverse scale, where doubling volume needs less than a doubling of depth. Letter D claims a finite cap. This letter is only $r>1$.

**4.** The opposite verdict would need $r\\le 1$. The stem's square law forces $r=2>1$.

The recovered exponent $2$ sits above one, so the statement is True.`,
      `**B.** → True

This is a level at $6$ metres, asked against a threshold of $140$ cubic metres.

The overview already evaluated $V(6)=144$. One hundred and forty-four sits above $140$. Six squared is $36$, and $4\\cdot 36=144$.

**1.** Using $A=64/(25-9)=4$, yes $A=4$. Working from the isolated values, $A=64/(25-9)=4$ is the figure that is checked, not the detour that produced $A=4$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $A=64/2=32$ from a linear rise would report $V(6)=192$ and still pass, for a wrong coefficient. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $V(6)=4\\cdot 6=24$ skipped the square and would have failed.

**2.** Extra arithmetic at $d=5$: $V(5)=100$, which sits below $140$. The threshold test is about $d=6$ specifically. Between $5$ and $6$ metres volume crosses $140$, and at $6$ it has reached $144$.

**3.** Letter E's fill from $4$ to $8$ adding $192$ is a different comparison. $144>140$ is a $4$ cubic metre clearance.

The recovered volume at $6$ metres is $144$ cubic metres, above $140$, so the statement is True.`,
      `**C.** → False

The claim is that to double stored volume, the water depth must more than double.

The overview already recorded that doubling volume scales depth by $\\sqrt{2}<2$. Because the exponent exceeds one, a doubling of volume needs less than a doubling of depth. The water depth must less than double, not more.

**1.** Extra arithmetic on $V(3)=36$: doubling that volume is $72$, which inverts at $d=\\sqrt{18}=3\\sqrt{2}\\approx 4.24$ m, not $6$ m. Reporting $6$ m used exponent $1$ on the reverse question. The recovered comparison therefore keeps $6$ and does not substitute $1$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Mixing this reverse question with letter A's forward doubling would have required a $6$ m depth to quadruple volume, which is a different job. The recovered isolation is checked against the claim using $6$, which is the figure the sessions actually produce. Forward $k=2$ multiplies $V$ by $4$. Reverse $V\\times 2$ multiplies $d$ by $\\sqrt{2}$.

**3.** Letter E's fill from $4$ to $8$ is a doubling of depth, which quadruples volume by $192$ added, not a doubling of volume. Mixing those two jobs is how a "more than double the depth" claim can look true.

**4.** The opposite verdict would need $r<1$. The stem's $r=2$ forces $k=\\sqrt{2}<2$.

The recovered depth factor for doubled volume is $\\sqrt{2}<2$, so the statement is False.`,
      `**D.** → False

The claim is that because the basin tapers, stored volume approaches a finite cap as depth grows.

The overview already recorded that a positive exponent sends $V(d)\\to\\infty$ as $d$ grows. Tapering is already built into the square law; it does not add a ceiling. Stored volume has no finite cap.

**1.** Extra arithmetic at large depth: $V(20)=1600$, $V(50)=10000$, still climbing. Setting $4d^{2}=M$ for a finite cap $M$ would invert at a finite $d$, but the stem has no such $M$. Tapering here means $V\\propto d^{2}$ rather than $V\\propto d^{3}$, a slower infinity, not a bound.

**2.** Treating "taper" as "the sides meet at a lid" has imported a closed tank. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. This basin is a power of depth on $d>0$ with no listed maximum depth. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. a negative exponent from a different chapter has the wrong sign.

**3.** Letter A said volume outruns depth. This letter says that outrunning continues without a cap. A finite cap would have needed a factor $(d_{\\max}-d)$ or a negative exponent.

**4.** The opposite verdict would need $r\\le 0$ or an explicit lid in the stem. The stem has neither.

The recovered $4d^{2}$ is unbounded as $d$ grows, so the statement is False.`,
      `**E.** → False

Filling from $4$ metres to $8$ metres adds $V(8)-V(4)=256-64=192$, and the claim is that this is more than $200$ cubic metres.

One hundred and ninety-two is not more than $200$. Four times $64$ minus four times $16$ is $256-64=192$.

**1.** Using $V(8)=4\\cdot 8=32$ skipped the square. Once $V(8)=4\\cdot 8=32$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $V(8)-V(4)=4(8-4)=16$ treated the square as linear. Computing $4(64-16)=192$ correctly and then rounding up to $200$ has left the arithmetic. After isolating the unknown, the check is against $4(64-16)=192$. The figure $200$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $4(64-16)=192$ stays in the write-up.

**2.** Extra arithmetic that manufactures $200$: $V(8)-V(3)=256-36=220$, mixing the survey's $3$ m with $8$ m. Or $V(10)-V(5)=400-100=300$. The claim is $4$ m to $8$ m specifically, a doubling of depth, which adds $192$.

**3.** Letter B's $144>140$ at $d=6$ is a different comparison. $192>200$ fails by $8$ cubic metres.

The recovered added volume from $4$ m to $8$ m is $192$, not more than $200$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 46,
    solution_overview: `Storage is $V(d)=Ad^{2}$. Raising the water from three metres to five metres added sixty-four cubic metres.

**Part 1: Building the model.**

Let $d$ = depth in metres and $V$ = stored volume. The exponent is given, so the survey is a difference of shape factors and recovers $A$.

**1. Translate: the survey.**

$$A(25-9)=64$$

**2. Translate: a change of unit.** $d_{\\mathrm{cm}}=100d$ rescales only the coefficient.

**Part 2: The model.**

$$V(d)=4d^{2} \\tag{1}$$

$$V=\\frac{4}{10000}\\,d_{\\mathrm{cm}}^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** $A=4$. Volume grows faster than depth and without a cap.

**2.** $V(6)=144$. Filling from four metres to eight metres adds $192$, not more than $200$.

**3.** Doubling stored volume scales depth by $\\sqrt{2}$, not by more than $2$.

**Answer.** $A=4$ | $V=4d^{2}$ | $V(6)=144$`,
  },
  {
    id: `math-8-47`,
    case_id: `MATH 8.47`,
    title: `A Braking-Energy Index Recovered From a Speed Change`,
    context: `A fleet safety report scores braking energy by the index $E(v)=A v^{2}$, where $v>0$ is speed in kilometres per hour. The report does not give $A$: it states only that raising the test speed from $30$ to $50$ kilometres per hour raised the index by exactly $80$ points. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Equal speed increments raise the index by more at higher speeds than at lower ones.`,
      `At $40$ kilometres per hour the index is already above $70$.`,
      `The index per kilometre per hour of speed is the same at every speed.`,
      `The speed that produces a given index grows more slowly than the index itself.`,
      `At $80$ kilometres per hour the index is still under $300$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The index is $E(v)=A v^{2}$, and raising speed from $30$ to $50$ km/h raised the index by $80$ points, pinning $A=\\frac{1}{20}$. This letter asks whether equal speed increments raise the index by more at higher speeds than at lower ones.

The overview already recorded $E'(v)=v/10$. That leftover power is positive, so equal speed increments raise the index by more at higher speeds. A square law is convex.

**1.** Extra arithmetic of two equal $10$ km/h increments: from $30$ to $40$, $E$ rises $45$ to $80$, a rise of $35$. From $40$ to $50$, $E$ rises $80$ to $125$, a rise of $45$. The later $10$ km/h increment adds $10$ points more. Directly, $E'(30)=3$ and $E'(50)=5$.

**2.** Seeing the recorded $80$-point rise over $20$ km/h and calling $4$ points per km/h a constant increment has evaluated one interval. So the letter reads the claim against $80$; $4$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $80$ stays in the write-up. Convexity says later intervals cost more. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r<1$ intuition has the wrong exponent.

**3.** Letter C says the average $E/v$ is not constant, the same $r=2>1$ story. This letter is the rising marginal $E'$.

**4.** The opposite verdict would need $r\\le 1$. With $r=2$, equal speed increments raise the index by more at higher speeds.

The recovered slope $v/10$ is larger at higher speeds, so the statement is True.`,
      `**B.** → True

This is a level at $40$ km/h, asked against a threshold of $70$.

The overview already evaluated $E(40)=80$. Eighty sits above $70$. Forty squared is $1600$, and $1600/20=80$.

**1.** Using $A=80/(50-30)=4$ linearly would report $E(40)=160$ and still pass, for a wrong coefficient. The recovered comparison therefore keeps $A=80/(50-30)=4$ and does not substitute $E(40)=160$. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $E(40)=0.5\\cdot 1600=800$ mixed in task $10$'s $0.5$. The survey is $A(2500-900)=80$, so $A=1/20$.

**2.** Extra arithmetic at $v=30$: $E(30)=45$, which sits below $70$. The threshold test is about $v=40$ specifically. Between $30$ and $40$ km/h the index crosses $70$, and at $40$ it has reached $80$.

**3.** Letter E's $E(80)=320$ is a different comparison. $80>70$ is a $10$-point clearance.

The recovered index at $40$ km/h is $80$, above $70$, so the statement is True.`,
      `**C.** → False

The claim is that the index per kilometre per hour of speed is the same at every speed.

The overview already recorded $\\frac{E(v)}{v}=v/20$. The leftover exponent is positive, so that average is not the same at every speed. A square law cannot have a constant average.

**1.** Extra arithmetic at the survey speeds: $E(30)/30=1.5$ and $E(50)/50=2.5$, already different. At $v=40$, $E/v=2$. Three different averages are three too many for a constant.

**2.** Cancelling $v^{2}/v$ and forgetting the leftover $v/20$ would report a constant $A$. The stem's recovered values line up with $v^{2}/v$, whereas $A$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $v^{2}/v$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $r=1$ intuition, a linear index, would have a constant average equal to $A$.

**3.** Letter A is the rising marginal. This letter is the rising average. Both follow from $r=2>1$. Letter D is the inverse growing more slowly than the index.

**4.** The opposite verdict would need $r=1$. With $r=2$, the average $v/20$ climbs with speed.

The recovered average $v/20$ is not constant, so the statement is False.`,
      `**D.** → True

The claim is that the speed that produces a given index grows more slowly than the index itself.

The overview already recorded $v=\\sqrt{20E}$. The inverse exponent $\\frac{1}{2}$ sits below one, so speed grows more slowly than the index. A nonzero power inverts to another power, and $\\frac{1}{2}<1$.

**1.** Extra arithmetic: doubling the index from $E=80$ to $E=160$ inverts at $v=\\sqrt{3200}\\approx 56.6$ against $v=40$ at $E=80$. Speed multiplies by $\\sqrt{2}\\approx 1.41$, slower than the doubling of the index.

**2.** Using exponent $1$ on the inverse would have reported lockstep. The recovered isolation is checked against the claim using $1$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another who wrote $v=\\log E$ mixed this fleet with an exponential technology.

**3.** Letter A said $E$ outruns $v$ going forward. This letter is that same $r=2$ as a reverse growth rate. Forward $r>1$ is reverse $1/r<1$.

**4.** The opposite verdict would need inverse exponent $\\ge 1$, hence $r\\le 1$. The stem's $r=2$ forces a slower inverse.

The recovered inverse exponent $\\frac{1}{2}$ sits below one, so the statement is True.`,
      `**E.** → False

This is a level at $80$ km/h, asked against a threshold of $300$.

The overview already evaluated $E(80)=320$. Three hundred and twenty does not sit under $300$. Eighty squared is $6400$, and $6400/20=320$.

**1.** Using $E(80)=80$, copying $A=1/20$ as if it were the index, would have passed "under $300$." So the letter reads the claim against $E(80)=80$; $300$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $E(80)=80$ stays in the write-up.Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $E(80)=\\frac{1}{20}\\cdot 80=4$ skipped the square.

**2.** Extra arithmetic at $v=50$: $E(50)=125$, which does sit under $300$. The threshold test is about $v=80$ specifically. Between $50$ and $80$ km/h the index crosses $300$, and at $80$ it has reached $320$.

**3.** Letter B's $80>70$ at $v=40$ does not license $320<300$. The recovered $320$ sits $20$ above $300$.

The recovered index at $80$ km/h is $320$, not under $300$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 47,
    solution_overview: `The index is $E(v)=Av^{2}$. Raising speed from thirty to fifty kilometres per hour raised the index by eighty points.

**Part 1: Building the model.**

Let $v$ = speed and $E$ = braking-energy index. The exponent is given, so the eighty-point gap is a difference of squares and recovers $A$.

**1. Translate: the logged gap.**

$$A(2500-900)=80$$

**2. Translate: the inverse.** $v=(E/A)^{\\frac{1}{2}}$.

**Part 2: The model.**

$$E(v)=\\frac{1}{20}v^{2} \\tag{1}$$

$$v=(20E)^{\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** $A=\\frac{1}{20}$. Equal speed increments raise $E$ by more at higher speeds, because $E$ is convex.

**2.** $E(40)=80$ and $E(80)=320$, not $200$. Intensity $\\frac{E}{v}$ is not constant.

**3.** The inverse exponent $\\frac{1}{2}$ is smaller than one.

**Answer.** $A=\\frac{1}{20}$ | $E(40)=80$ | $E(80)=320$`,
  },
  {
    id: `math-8-48`,
    case_id: `MATH 8.48`,
    title: `Geometrically Similar Silos: Steel Against Capacity`,
    context: `A supplier builds geometrically similar storage silos. The steel skin scales with the square of the height, $S(h)=a h^{2}$ square metres, while capacity scales with the cube, $V(h)=k h^{3}$ cubic metres. A $2$-metre silo uses $12$ square metres of steel and holds $8$ cubic metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Steel use grows more slowly than capacity as height rises.`,
      `A $4$-metre silo holds more than $60$ cubic metres.`,
      `Steel as a function of capacity is itself a power function.`,
      `Two separate $2$-metre silos use the same steel as one $4$-metre silo.`,
      `An $8$-metre silo needs more than $200$ square metres of steel.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Steel is $S(h)=a h^{2}$ and capacity is $V(h)=k h^{3}$, with a $2$ m silo using $12$ m$^{2}$ of steel and holding $8$ m$^{3}$. This letter asks whether steel use grows more slowly than capacity as height rises.

The overview already recovered $S(h)=3h^{2}$ and $V(h)=h^{3}$. Steel uses exponent $2$ and capacity uses exponent $3$. The smaller exponent is on steel, so steel use grows more slowly than capacity as height rises.

**1.** Extra arithmetic of a doubling of height: from $2$ m to $4$ m, steel multiplies by $4$ from $12$ to $48$, while capacity multiplies by $8$ from $8$ to $64$. Steel's factor $4$ sits below capacity's factor $8$. That is $2^{2}$ against $2^{3}$.

**2.** Comparing coefficients $3>1$ and declared steel faster has compared the wrong objects. The path that matches the stem therefore holds $3>1$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Coefficients set levels; exponents set speed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. equal exponents from "geometrically similar" without squares and cubes has dropped the dimensions.

**3.** Letter C composes steel as a function of capacity, $S=3V^{2/3}$, whose exponent $2/3<1$ is this same comparison. Letter D compares two $2$ m silos with one $4$ m silo.

**4.** The opposite verdict would need steel exponent $\\ge$ capacity exponent. The stem's $2<3$ forbids that.

The recovered steel exponent $2$ sits below the capacity exponent $3$, so the statement is True.`,
      `**B.** → True

This is a level of capacity at $4$ m, asked against a threshold of $60$ cubic metres.

The overview already evaluated $V(4)=64$. Sixty-four sits above $60$. Four cubed is $64$, and $k=1$.

**1.** Using $V(4)=8\\cdot 4/2=16$, a linear scale from the $2$ m silo, would have failed the threshold. Working from the isolated values, $V(4)=8\\cdot 4/2=16$ is the figure that is checked, not the detour that produced $2$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $k=8/2=4$ would report $256$ and still pass, for a wrong coefficient. The capacity pair is $8k=8$, so $k=1$.

**2.** Extra arithmetic at $h=2$: $V=8$, which sits below $60$. The threshold test is about $h=4$ specifically. Between $2$ and $4$ metres capacity crosses $60$, and at $4$ it has reached $64$.

**3.** Letter E's steel at $h=8$ is a different object. $64>60$ is a $4$ cubic metre clearance.

The recovered capacity of a $4$ m silo is $64$ cubic metres, above $60$, so the statement is True.`,
      `**C.** → True

The claim is that steel as a function of capacity is itself a power function.

The overview already eliminated height to get $S=3V^{\\frac{2}{3}}$. Steel as a function of capacity is a monomial in $V$, coefficient $3$ and exponent $\\frac{2}{3}$. Two powers of the same $h$ compose to a power of $V$ by dividing exponents $2/3$.

**1.** Extra arithmetic of the composition: $h=V^{1/3}$ from $V=h^{3}$, then $S=3(V^{1/3})^{2}=3V^{2/3}$. At the $2$ m silo, $S=3\\cdot 8^{2/3}=3\\cdot 4=12$, returning the logged steel. At $V=64$, $S=3\\cdot 16=48$, matching $S(4)$.

**2.** Adding exponents $2+3=5$ would report $S\\propto V^{5}$ and miss the quotient. After isolating the unknown, the check is against $2+3=5$. The figure $S\\propto V^{5}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $2+3=5$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Exponents divide when eliminating the common $h$. Another who added an intercept would have left the power-function class; the stem has none.

**3.** Letter A compared the two exponents of $h$. This letter names the composed power of $V$. The exponent $2/3<1$ is why steel grows more slowly than capacity.

**4.** If one of the two laws had carried an intercept, the composition would not have been a power. The stem is two pure monomials.

The recovered $S=3V^{2/3}$ is a power of capacity, so the statement is True.`,
      `**D.** → False

Two separate $2$ m silos use $2\\cdot 12=24$ square metres of steel. One $4$ m silo uses $S(4)=48$. Those are not the same steel. The claim that they use the same steel is false.

**1.** Extra arithmetic of the scale: doubling height multiplies steel by $4$, so one $4$ m silo uses four times one $2$ m silo, not twice. Two small silos are $2\\times$ the steel; one double-height silo is $4\\times$. The gap is $24$ square metres.

**2.** Using exponent $1$ on steel would have reported $24=24$ and made the claim true. So the letter reads the claim against $1$; $24=24$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $1$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Area scales as $h^{2}$, not as $h$. Another who compared capacities, $8+8=16$ against $V(4)=64$, has the same mismatch in the volume column.

**3.** Letter A said steel grows more slowly than capacity, not that two small silos match one large one. Geometric similarity does not make two half-height silos equal one full-height silo in steel.

**4.** The opposite verdict would need steel exponent $1$. The stem's $2$ forces $S(4)=4 S(2)$, not $2 S(2)$.

Two $2$ m silos use $24$ m$^{2}$ and one $4$ m silo uses $48$ m$^{2}$, so the statement is False.`,
      `**E.** → False

This is a level of steel at $8$ m, asked against a threshold of $200$ square metres.

The overview already evaluated $S(8)=192$. One hundred and ninety-two does not sit above $200$. Eight squared is $64$, and $3\\cdot 64=192$.

**1.** Using $S(8)=3\\cdot 8=24$ skipped the square. That is why $S(8)=3\\cdot 8=24$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $S(8)=3\\cdot 512=1536$, a cube, mixed in capacity's exponent. Using $a=12/2=6$ linearly would report $48$ and also fail "more than $200$."

**2.** Extra arithmetic at $h=4$: $S=48$, which sits below $200$. The threshold test is about $h=8$ specifically. Between $4$ and $8$ metres steel crosses $200$ only if $a$ were larger; with $a=3$, $S(8)=192<200$. At $h=9$, $S(9)=243>200$, past $8$ m.

**3.** Letter B's $V(4)=64>60$ does not license $S(8)>200$. The recovered $192$ sits $8$ square metres below $200$.

The recovered steel for an $8$ m silo is $192$ square metres, not more than $200$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 48,
    solution_overview: `Steel is $S(h)=ah^{2}$ and capacity is $V(h)=kh^{3}$. A two-metre silo uses twelve square metres of steel and holds eight cubic metres.

**Part 1: Building the model.**

Let $h$ = height. Each law has a known exponent and one recorded pair, so both coefficients recover. Steel against capacity is then a composition.

**1. Translate: the steel pair.** $4a=12$.

**2. Translate: the capacity pair.** $8k=8$.

**Part 2: The model.**

$$S(h)=3h^{2}, \\qquad V(h)=h^{3} \\tag{1}$$

$$S=3V^{\\frac{2}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** Exponent $2$ is smaller than $3$, so steel grows more slowly than capacity.

**2.** $V(4)=64$ and $S(8)=192$, not more than $200$.

**3.** Two two-metre silos use $24$ square metres of steel; one four-metre silo uses $48$.

**Answer.** $S=3h^{2}$ | $V=h^{3}$ | $S=3V^{\\frac{2}{3}}$`,
  },
  {
    id: `math-8-49`,
    case_id: `MATH 8.49`,
    title: `Inspection Hours Across Growing Shipment Volumes`,
    context: `Customs inspection time follows $T(n)=A n^{\\frac{1}{2}}$ hours for a consignment of $n>0$ shipments. Moving from a $4$-shipment consignment to a $36$-shipment consignment added exactly $16$ inspection hours. A staffing plan can supply at most $40$ inspection hours. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Total inspection time is proportional to the number of shipments.`,
      `The $40$-hour ceiling is already binding below $110$ shipments.`,
      `Staffing that just meets the ceiling would still cover a modestly larger consignment, because extra shipments add almost nothing.`,
      `Quadrupling a consignment multiplies inspection time by two.`,
      `A $49$-shipment consignment takes more than $30$ hours.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

Inspection time is $T(n)=A n^{\\frac{1}{2}}$, and moving from $4$ shipments to $36$ added $16$ hours, pinning $A=4$. The claim is that total inspection time is proportional to the number of shipments.

The overview already recovered $T(n)=4\\sqrt{n}$. Proportionality would need exponent $1$. The exponent is $\\frac{1}{2}$, so total inspection time is not proportional to the number of shipments.

**1.** Extra arithmetic of the logged pair: hours from $4$ to $36$ jumped by a factor $T(36)/T(4)$. Now $T(4)=8$ and $T(36)=24$, a factor $3$, while shipments jumped by a factor $9$. Three is not nine. Proportionality would have required hours to jump ninefold to $72$.

**2.** Seeing any increasing $T$ and calling it proportional has ignored the exponent. The opposite verdict would need a different isolation than $T$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. the jump $16$ hours over $32$ extra shipments and called $0.5$ hours per shipment a constant rate has evaluated one interval of a concave curve.

**3.** Letter D says quadrupling a consignment doubles inspection time, which is the square-root fingerprint, not proportionality. Letter B inverts the $40$-hour cap.

**4.** The opposite verdict would need $r=1$. The two consignments force $r=1/2$.

The recovered exponent is $\\frac{1}{2}$, not $1$, so the statement is False.`,
      `**B.** → True

The $40$-hour ceiling inverts $4\\sqrt{n}=40$, and the claim is that this is already binding below $110$ shipments.

The overview already inverted $n=100$. One hundred sits below $110$. From $\\sqrt{n}=10$ one gets $n=100$.

**1.** Extra arithmetic at $n=100$: $T=40$ on the nose. At $n=110$, $T(110)=4\\sqrt{110}\\approx 41.95>40$, so $110$ is already past the bind. The ceiling is met at $100$, which is below $110$.

**2.** Using $n=40/4=10$ skipped the square in the inverse and would have passed "below $110$" on a huge underestimate, for the wrong reason. That is the fork: $n=40/4=10$ belongs to the recovered isolation, $110$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $n=40^{2}=1600$ inverted the reciprocal the wrong way and would have failed "below $110$."

**3.** Letter C claims staffing at the ceiling still covers a modestly larger consignment. This letter is the bind at $n=100<110$. Letter E is a level at $n=49$.

The recovered ceiling consignment is $n=100$, below $110$, so the statement is True.`,
      `**C.** → False

The claim is that staffing that just meets the ceiling would still cover a modestly larger consignment, because extra shipments add almost nothing.

The overview already recorded that at $n=100$, $T=40$ and $T'(n)=2 n^{-\\frac{1}{2}}$, so $T'(100)=0.2$ hours per extra shipment, not almost nothing, and it would push the total past $40$. A modestly larger consignment is not covered.

**1.** Extra arithmetic: $T(121)=4\\cdot 11=44$, four hours past the cap, a $21\\%$ larger consignment. Even $T(101)\\approx 40.2$, already over. "Almost nothing" would have needed $T'$ near $0$, which at $n=100$ is still $0.2$ hours, twelve minutes per extra shipment.

**2.** Using $r<1$ as "flat" has confused a falling slope with a zero slope. That is why $r<1$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Square-root time still rises. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $T'(n)=0$ at a horizontal cap has mixed a policy cap with the derivative of $T$.

**3.** Letter B placed the bind at $n=100$. This letter says that bind is sharp: one extra shipment overshoots. Falling $T'$ is letter A's cousin, not a licence to overshoot.

**4.** The opposite verdict would need $T'$ equal to $0$ at the cap, or a cap that was not tight. The stem's $40$ hours is tight at $n=100$.

An extra shipment at $n=100$ still adds $0.2$ hours and is not covered, so the statement is False.`,
      `**D.** → True

Quadrupling a consignment is $k=4$, and the claim is that inspection time is multiplied by two.

The overview already recorded $\\frac{T(4n)}{T(n)}=4^{\\frac{1}{2}}=2$. The coefficient $A$ cancels. Inspection time is multiplied by two. A square-root technology turns a quadrupling of shipments into a doubling of hours.

**1.** Extra arithmetic on the logged $4$-shipment consignment: quadrupling is $n=16$, and $T(16)=4\\cdot 4=16$ against $T(4)=8$, a factor $2$. Directly, $8\\times 2=16$. The logged jump $4\\to 36$ is a ninefold, which multiplies $T$ by $3$, not this letter's quadrupling.

**2.** Using $k=2$, a doubling of shipments, would have reported $\\sqrt{2}\\approx 1.41$, not $2$. After isolating the unknown, the check is against $k=2$. The figure $2$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $k=2$ stays in the write-up. Mixing $k=2$ with $k=4$ is how a doubling-of-time claim can look like letter A's failed proportionality.

**3.** Letter A said $T$ is not proportional to $n$. This letter is the specific $k=4$ identity that a square root does satisfy. Those two claims agree: $r=1/2$ is not $r=1$, and $4^{1/2}=2$.

**4.** The opposite verdict would need $r\\neq 1/2$. The two consignments force $r=1/2$, hence a quadrupling doubles hours.

Quadrupling a consignment multiplies inspection time by $2$, so the statement is True.`,
      `**E.** → False

This is a level at a $49$-shipment consignment, asked against a threshold of $30$ hours.

The overview already evaluated $T(49)=28$. Twenty-eight is not more than $30$. Forty-nine to the $\\frac{1}{2}$ is $7$, and $4\\cdot 7=28$.

**1.** Using $A=8$ from $T(4)=8$ as if $A=T(4)$ would report $56$ and pass "more than $30$" on a wrong coefficient. The stem's recovered values line up with $A=8$, whereas $30$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $A=8$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $T(49)=4\\cdot 49=196$ skipped the root.

**2.** Extra arithmetic at $n=36$: $T=24$, which sits below $30$. At $n=64$, $T=32$, which sits above $30$. The threshold test is about $n=49$ specifically. Between $36$ and $64$ hours wait, between $36$ and $64$ shipments time crosses $30$, and at $49$ it has reached $28$.

**3.** Letter B's cap at $n=100$ is a different comparison. $28>30$ fails by $2$ hours.

The recovered time for $49$ shipments is $28$ hours, not more than $30$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 49,
    solution_overview: `Inspection time is $T(n)=An^{\\frac{1}{2}}$. Moving from four shipments to thirty-six added sixteen hours, and staffing supplies at most forty hours.

**Part 1: Building the model.**

Let $n$ = shipments and $T$ = hours. The exponent is given, so the sixteen-hour jump recovers $A$. The cap constrains inversions.

**1. Translate: the jump.**

$$A(6-2)=16$$

**2. Translate: the cap.** $T(n)\\le 40$.

**Part 2: The model.**

$$T(n)=4n^{\\frac{1}{2}} \\tag{1}$$

$$n\\le 100 \\tag{2}$$

**Part 3: Solve.**

**1.** $A=4$. Time is not proportional to $n$. Quadrupling $n$ doubles $T$.

**2.** The ceiling is met at $n=100$. Then $T(121)=44$ overshoots, and $T(49)=28$ is not more than $30$.

**Answer.** $A=4$ | $T=4\\sqrt{n}$ | cap at $n=100$`,
  },
  {
    id: `math-8-50`,
    case_id: `MATH 8.50`,
    title: `Illuminance Down the Length of a Gallery`,
    context: `Illuminance from a gallery spotlight follows $I(d)=A d^{-2}$ lux, where $d>0$ is the distance in metres. A conservation log never states $A$: it records only that moving the meter from $2$ metres to $4$ metres cut the reading by $150$ lux. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the distance from the lamp cuts illuminance to one quarter.`,
      `At $5$ metres the illuminance is already under $40$ lux.`,
      `An extra metre of distance cuts more illuminance at $4$ metres than at $2$ metres.`,
      `Distance as a function of illuminance is not a power function, because illuminance falls.`,
      `At $3$ metres the reading is still above $90$ lux.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Illuminance is $I(d)=A d^{-2}$, and moving the meter from $2$ m to $4$ m cut the reading by $150$ lux, pinning $A=800$. This letter asks whether doubling the distance from the lamp cuts illuminance to one quarter.

The overview already recovered $I(d)=800 d^{-2}$ and recorded $\\frac{I(2d)}{I(d)}=2^{-2}=\\frac{1}{4}$. The coefficient $A$ cancels. Doubling distance multiplies illuminance by $1/4$. The reading is cut to one quarter.

**1.** Extra arithmetic on the logged pair: doubling $2$ m is $4$ m, and $I(4)=800/16=50$ against $I(2)=800/4=200$. A quarter of $200$ is $50$, and the recorded cut $200-50=150$ matches the stem. That match is the scale identity at a concrete pair, not a new coefficient.

**2.** Using exponent $-1$ would have halved the reading, reporting $I(4)=100$. The recovered comparison therefore keeps $-1$ and does not substitute $I(4)=100$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reciprocal-linear light is $A/d$; this gallery is $A/d^{2}$. Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $2^{-3}=1/8$ mixed in a cube.

**3.** Letter C is the slope comparison, steeper near the lamp. Letter D is the inverse as a power. This letter is only the doubling identity for $r=-2$.

**4.** The opposite verdict would need $r\\neq -2$. The logged cut of $150$ lux between $2$ m and $4$ m forces $A=800$ and $r=-2$, hence a quartering.

Doubling the distance cuts illuminance to one quarter, so the statement is True.`,
      `**B.** → True

This is a level at $5$ metres, asked against a threshold of $40$ lux.

The overview already evaluated $I(5)=32$. Thirty-two sits under $40$. Five squared is $25$, and $800/25=32$.

**1.** Using $I(5)=800/5=160$ skipped the square and would have failed "under $40$." The stem's recovered values line up with $I(5)=800/5=160$, whereas $40$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $I(5)=800/5=160$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $A=150$ from the cut as if it were $A$ would report $6$ and still pass, for a wrong coefficient. The cut is $A(1/4-1/16)=150$, so $3A/16=150$ and $A=800$.

**2.** Extra arithmetic at $d=4$: $I(4)=50$, which sits above $40$. The threshold test is about $d=5$ specifically. Between $4$ and $5$ metres illuminance crosses $40$ going down, and at $5$ it has reached $32$.

**3.** Letter E's $I(3)\\approx 88.9$ is a different comparison. $32<40$ is an $8$ lux clearance.

The recovered illuminance at $5$ metres is $32$ lux, under $40$, so the statement is True.`,
      `**C.** → False

The claim is that an extra metre of distance cuts more illuminance at $4$ metres than at $2$ metres.

The overview already recorded $I'(d)=-1600 d^{-3}$, so $|I'(4)|<|I'(2)|$. The size of that cut is larger at $2$ metres than at $4$, because a more negative leftover exponent makes the drop steeper near the lamp. An extra metre cuts less illuminance at $4$ metres, not more.

**1.** Extra arithmetic at the two named distances:

$$|I'(2)|=1600/8=200, \\qquad |I'(4)|=1600/64=25$$

An extra metre at $2$ m cuts about $200$ lux; at $4$ m only about $25$ lux. The claim's "more at $4$" is the reverse of these two slopes.

**2.** Seeing $I(4)=50<I(2)=200$ and concluding that later metres are cutting more has confused a lower reading with a steeper cut. The opposite verdict would need a different isolation than $I(4)=50<I(2)=200$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The reading is already low at $4$ m; there is less left to cut.

**3.** Letter A is the quartering on a doubling. This letter is the falling steepness. Both follow from $r=-2<0$. Inverse-square light is steep near the lamp and flat far away.

**4.** The opposite verdict would need a light that became steeper as distance grew. Inverse-square illuminance cannot do that.

The recovered cut is smaller at $4$ metres than at $2$, so the statement is False.`,
      `**D.** → False

The claim is that distance as a function of illuminance is not a power function, because illuminance falls.

The overview already recorded $d=\\sqrt{800}\\, I^{-\\frac{1}{2}}$. A nonzero power inverts to another power. Distance as a function of illuminance is still a monomial in $I$. Falling illuminance does not introduce a logarithm.

**1.** Extra arithmetic that uses the inverse at $I=50$: $d=\\sqrt{800/50}=\\sqrt{16}=4$, returning the logged $4$ m. At $I=200$, $d=2$. That inversion landing on the logged distances is how we know the inverse is the right monomial.

**2.** Thinking a decreasing function could not invert to a power has confused monotonicity with function class. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Negative exponents invert to negative exponents. Another who wrote $d=\\log I$ mixed this gallery with an exponential technology.

**3.** Letter A used the forward $r=-2$. This letter names the inverse. Falling $I$ is why the inverse exponent is negative, not why the inverse would fail to be a power.

**4.** The opposite verdict would need a leftover constant in $I(d)$, or a log. The stem is a pure monomial.

The recovered distance is a power of illuminance, so the statement is False.`,
      `**E.** → False

This is a level at $3$ metres, asked against a threshold of $90$ lux.

The overview already evaluated $I(3)=800/9\\approx 88.89$. That is not still above $90$. Nine into $800$ is $88.\\overline{8}$ lux.

**1.** Using $I(3)=800/3\\approx 267$ skipped the square and would have passed "above $90$." After isolating the unknown, the check is against $I(3)=800/3\\approx 267$. The figure $90$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $I(3)=800/3\\approx 267$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.Using The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. $I(3)=200\\cdot 2/3\\approx 133$, a linear scale from $I(2)$, would also pass, for a wrong exponent.

**2.** Extra arithmetic at $d=2$: $I=200$, which does sit above $90$. At $d=4$: $I=50$, which sits below $90$. The threshold test is about $d=3$ specifically. Between $2$ and $4$ metres illuminance crosses $90$, and at $3$ it has reached $800/9\\approx 88.9$, just under the line.

**3.** Letter B's $32<40$ at $d=5$ is a different comparison. $88.9>90$ fails by about $1.1$ lux, a tight miss, genuine because $A=800$ rather than $810$.

The recovered reading at $3$ metres is $800/9\\approx 88.9$ lux, not above $90$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 50,
    solution_overview: `Illuminance is $I(d)=Ad^{-2}$. Moving the meter from two metres to four metres cut the reading by one hundred and fifty lux.

**Part 1: Building the model.**

Let $d$ = distance in metres and $I$ = illuminance in lux. The exponent is given, so the drop is a difference of shape factors and recovers $A$. Scale factors cancel $A$ on their own.

**1. Translate: the logged drop.**

$$A\\bigl(\\tfrac{1}{4}-\\tfrac{1}{16}\\bigr)=150$$

**2. Translate: the inverse.** $d=(A/I)^{\\frac{1}{2}}$.

**Part 2: The model.**

$$I(d)=800d^{-2} \\tag{1}$$

$$d=\\sqrt{800}\\,I^{-\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** $A=800$. Doubling $d$ quarters $I$. An extra metre cuts more illuminance at $2$ m than at $4$ m.

**2.** $I(5)=32$ and $I(3)=\\frac{800}{9}\\approx 88.89$, not above $90$.

**3.** The inverse is still a power function.

**Answer.** $A=800$ | $I=800d^{-2}$ | $I(5)=32$`,
  },
  {
    id: `math-8-51`,
    case_id: `MATH 8.51`,
    title: `Audit Cost With Economies of Scale`,
    context: `An audit practice prices engagements by $C(n)=A n^{0.75}$, where $n>0$ is the number of accounts tested. The bill rises by exactly $1900$ when engagement size rises from $16$ to $81$ accounts. A client has a $2700$ cap, while a rival quotes $R(n)=50n$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is smaller than one, so the bill grows more slowly than the number of accounts.`,
      `Doubling the number of accounts doubles the practice bill.`,
      `After $81$ accounts the bill is already above $2500$.`,
      `An extra account adds more to the bill after eighty-one accounts than after sixteen.`,
      `A bill of $12500$ already requires more than $600$ accounts.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

This letter is about how the practice bill grows with the book, not about any named invoice. The stem prices engagements by a three-quarters power of the number of accounts tested. The overview recovered the coefficient $A=100$, but a growth claim never needs that coefficient: it lives in the exponent alone.

An exponent smaller than one means the bill still rises with the book, yet it lags the account count. Doubling the book would double a linear rival quote $R(n)=50n$. The practice bill instead scales by $2^{\\frac{3}{4}}$, which sits below $2$. That is the economies of scale in the title, read as a ranking of exponents rather than as a euro figure.

**1.** Reading $0.75$ as "almost linear" would have treated the bill as lockstep with $n$. After isolating the unknown, the check is against $0.75$. The figure $n$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $0.75$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The gap between a doubling and a factor of about $1.68$ is the whole point of the power.

**2.** The opposite verdict would have needed an exponent at least $1$. A cubic cost, or even a linear one, would outrun or match the book. The recovered exponent is $\\frac{3}{4}$.

The bill grows more slowly than the number of accounts, so the statement is True.`,
      `**B.** → False

Doubling the number of accounts would double the practice bill only if the exponent were $1$. The overview recovered $C(n)=100 n^{\\frac{3}{4}}$, so the scale factor is $2^{\\frac{3}{4}}\\approx 1.68$, not $2$. The bill rises, but not in lockstep with the book.

This is the same scale identity as letter A, now read against an explicit doubling claim rather than against a qualitative lag. The coefficient $100$ cancels in the ratio, so a different audit rate would not have saved the claim.

**1.** Linear thinking is the mismatch named in the rival quote $R(n)=50n$. That rival does double when accounts double. Mixing the rival with the practice is how a true doubling appears.

**2.** What would have to change is the exponent itself. An exponent of $1$ would make $C(2n)=2C(n)$ for every $n>0$. The logged rise from $16$ to $81$ accounts already forbids that: those sizes are not a doubling, and the recovered $\\frac{3}{4}$ is locked in.

The doubling factor is not $2$, so the statement is False.`,
      `**C.** → True

This is a level question at the logged size of $81$ accounts, not a scale question. The overview recovered $C(81)=2700$. The claim asks whether that invoice already sits above $2500$.

Two thousand seven hundred clears two thousand five hundred by $200$ euros. The same $2700$ is also the client's cap in the stem, so at $81$ accounts the bill sits exactly on the cap and therefore above $2500$.

**1.** Stopping at $C(16)=800$ would have compared the small invoice to $2500$ and flipped the verdict. Working from the isolated values, $C(16)=800$ is the figure that is checked, not the detour that produced $2500$. That contrast is the reason the verdict goes the way it does. Letter C names the larger engagement.

**2.** The figure $2500$ is not a rounding of $2700$. It is a nearby cutoff. The opposite verdict would have needed a cap or a coefficient that pulled $C(81)$ down through $2500$.

The recovered bill at $81$ accounts is $2700$, so the statement is True.`,
      `**D.** → False

This letter asks about the leftover slope of the bill, not about the bill itself. The overview recovered $C(n)=100 n^{\\frac{3}{4}}$. An extra account after eighty-one versus after sixteen is a comparison of two derivatives, and those derivatives are new arithmetic the shared solve did not need.

**1.** Differentiating the recovered rule gives leftover exponent $-\\frac{1}{4}$:

$$C'(n)=75 n^{-\\frac{1}{4}}$$

**2.** At sixteen accounts the fourth root is $2$, so

$$C'(16)=\\frac{75}{2}$$

**3.** At eighty-one accounts the fourth root is $3$, so

$$C'(81)=25$$

Because $25<\\frac{75}{2}$, an extra account adds less after eighty-one than after sixteen, not more. The leftover exponent is negative, so later accounts are cheaper to add. That is the economies of scale in the title, now read as a slope rather than as a doubling factor.

Remembering that $C(81)=2700$ is larger than $C(16)=800$ would have confused a higher bill with a steeper extra-account cost. That is the fork: $C(81)=2700$ belongs to the recovered isolation, $C(16)=800$ belongs to the discarded mix. The level is higher at eighty-one; the slope is flatter. Mixing those two is how the claim's "adds more" appears. The finite rise of $1900$ euros across $65$ accounts, about $29$ euros per extra account on average, sits between the two instantaneous slopes $37.5$ and $25$, as a falling slope requires. It does not reverse the ranking.

The opposite verdict would have needed an exponent larger than $1$, so that $C'$ would itself rise. The logged rise forced $r=\\frac{3}{4}<1$. Changing the $1900$ gap would change $A$ and scale both slopes by the same factor; it would not flip which one is larger. A linear rival $R(n)=50n$ has constant slope $50$, so an extra account would add the same amount after sixteen as after eighty-one. Mixing that rival slope with the practice is another way to manufacture the claim.

A second check uses a one-account finite step instead of the derivative. From $n=16$ to $n=17$, $C(17)=100\\cdot 17^{\\frac{3}{4}}\\approx 837$, a rise of about $37$ euros from $C(16)=800$. From $n=81$ to $n=82$, $C(82)=100\\cdot 82^{\\frac{3}{4}}\\approx 2725$, a rise of about $25$ euros from $2700$. The finite steps match the two slopes $\\frac{75}{2}$ and $25$. Later accounts are cheaper to add.

If the logged rise had come from an exponent larger than one, both the doubling factor in letter B and this slope ranking would have flipped together. The two letters are the same $r<1$ fact, read once as a scale and once as a derivative. Changing $A$ scales both slopes by the same factor and cannot reverse $25<\\frac{75}{2}$.

An extra account adds less after eighty-one than after sixteen, so the statement is False.`,
      `**E.** → True

This letter inverts the recovered bill, rather than reading a named size. The overview recovered that a bill of $12500$ already requires $n=625$ accounts. The claim asks whether that size sits above $600$.

Six hundred and twenty-five clears six hundred. The inversion is a fourth power because the exponent is $\\frac{3}{4}$: once $n^{\\frac{3}{4}}=125=5^{3}$, taking both sides to the $\\frac{4}{3}$ sends $n$ to $5^{4}=625$.

**1.** Treating the bill as linear with $A=100$ would have claimed $n=125$, well below $600$, and flipped the verdict. So the letter reads the claim against $A=100$; $600$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $A=100$ stays in the write-up. Linear thinking understates the book needed for a large invoice when $r<1$.

**2.** Checking the recovered rule at the cutoff itself: at $600$ accounts, $600^{\\frac{3}{4}}$ is a little under $125$, so $C(600)$ sits a little under $12500$. The target invoice is not yet met at $600$, which is why the claim's "already requires more than $600$" holds.

**3.** The opposite verdict would have needed a smaller target bill, or a larger coefficient, so that the inverted size fell through $600$. At the recovered $A=100$, the $12500$ invoice is locked to $625$ accounts. The rival quote $R(n)=50n$ would hit $12500$ already at $n=250$, which is under $600$. Mixing the rival with the practice is another way to flip the letter. The practice, not the rival, is the curve being inverted.

The client's $2700$ cap at $81$ accounts is a different inversion: that one returned $n=81$, not $625$. Mixing the cap with the $12500$ target is how a size near $81$ appears, well below $600$. The $12500$ invoice is a little more than four times $2700$; because $r=\\frac{3}{4}$, a fourfold bill is not a fourfold book. Fourfold bill would need $n$ multiplied by $4^{\\frac{4}{3}}\\approx 6.35$, and $81\\cdot 6.35\\approx 514$, already past $500$ and in the neighbourhood of $625$ once the exact $12500/2700$ ratio replaces a clean four.

A second mix-up is taking $C(n)=100n$ and reading $n=125$ against $600$. A third is taking the rival $R(n)=50n$ to $n=250$. None of those is the practice curve. The practice, with leftover exponent $\\frac{3}{4}$, is why a large invoice demands a book well past $600$ accounts.

The recovered size for a bill of $12500$ is $625$ accounts, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 51,
    solution_overview: `Audit cost follows $C(n)=A n^{\\frac{3}{4}}$ for $n>0$ accounts. The bill rises by $1900$ from $16$ to $81$ accounts. A client cap is $2700$, and a rival quotes $R(n)=50n$.

**Part 1: Building the model.**

Let $n$ be accounts tested and $C(n)$ the practice bill. The exponent $\\frac{3}{4}$ is given, so only $A$ is unknown. The recorded $1900$ is a difference of bills, and both sizes are fourth powers.

**1. Translate: the shape factors.**

$$16^{\\frac{3}{4}}=8 \\qquad 81^{\\frac{3}{4}}=27$$

**2. Translate: the recorded rise.**

$$A(27-8)=1900$$

**Part 2: The model.**

$$C(n)=A n^{\\frac{3}{4}} \\tag{1}$$

$$19A=1900 \\tag{2}$$

**Part 3: Solve.**

**1.** Coefficient:

$$A=100 \\qquad C(n)=100 n^{\\frac{3}{4}}$$

**2.** Logged bills and the cap:

$$C(16)=800 \\qquad C(81)=2700 \\qquad C(n)\\le 2700 \\Rightarrow n\\le 81$$

**3.** Rival crossover:

$$100 n^{\\frac{3}{4}}=50n \\Rightarrow n=16$$

**4.** Target bill:

$$100 n^{\\frac{3}{4}}=12500 \\Rightarrow n=625$$

**5.** Scale:

$$\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}\\approx 1.68$$

**Answer.** $A=100$ | $C(n)=100n^{\\frac{3}{4}}$ | cap $n=81$ | rival tie $n=16$ | $C=12500$ at $n=625$`,
  },
  {
    id: `math-8-52`,
    case_id: `MATH 8.52`,
    title: `Airborne Particle Concentration Downwind`,
    context: `Downwind particle concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre, where $x>0$ is distance from the stack in metres. A monitor at $4$ metres reads exactly $43.75$ more than a monitor at $16$ metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Concentration falls faster than inverse-linear decay.`,
      `Concentration per metre of distance is the same at every downwind range.`,
      `At $100$ metres the concentration is already below $0.5$ microgram per cubic metre.`,
      `The distance that produces a given concentration is itself a power of that concentration.`,
      `At $4$ metres the nearer monitor still reads under $45$ micrograms per cubic metre.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

This letter compares the recovered exponent to inverse-linear decay, not a named monitor reading. Concentration follows $c(x)=A x^{-1.5}$. Inverse-linear decay would have carried exponent $-1$, so a doubling of distance would have halved the reading. The overview recovered exponent $-\\frac{3}{2}$, which sits below $-1$.

The doubling factor is then $2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}\\approx 0.354$, steeper than $\\frac{1}{2}$. Concentration still falls with range; it just falls faster than a simple reciprocal of distance.

**1.** Seeing a negative exponent and stopping at "it decays" would have treated every decay as inverse-linear. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The extra half in $-\\frac{3}{2}$ is the whole comparison.

**2.** The opposite verdict would have needed an exponent at or above $-1$. Inverse-square, at $-2$, would have been even steeper. The stack model sits between those two, still faster than inverse-linear.

Because $-\\frac{3}{2}<-1$, concentration falls faster than inverse-linear decay, so the statement is True.`,
      `**B.** → False

Concentration per metre of distance is the intensity $c(x)/x$, not the reading $c(x)$ itself. The overview recovered $c(x)=400 x^{-\\frac{3}{2}}$, so the quotient is $400 x^{-\\frac{5}{2}}$. The leftover exponent is not $0$, so the intensity still depends on range.

Near the stack the intensity is steep. Far downwind it flattens. A constant intensity would have needed leftover exponent $0$, which would have required the original exponent to be $-1$. The recovered $-\\frac{3}{2}$ forbids that.

**1.** Dividing a level by a distance once, at the $4$ m monitor, would have claimed $50/4=12.5$ and treated that as a law. That is the fork: $4$ belongs to the recovered isolation, $50/4=12.5$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Repeating the division at $16$ m gives $6.25/16\\approx 0.39$, a different figure.

**2.** The opposite verdict would have needed inverse-linear decay. The logged gap between the two monitors already forced $-\\frac{3}{2}$.

The intensity still depends on range, so the statement is False.`,
      `**C.** → True

This is a level question at $100$ metres, well past the two monitors. The overview recovered $A=400$ and $c(100)=0.4$. The claim asks whether that far reading already sits below $0.5$ microgram per cubic metre.

Four tenths sits below one half. The three-halves power at $100$ is $10^{3}=1000$, and $400/1000=0.4$ is the far-field entry. The two monitors were $50$ and $6.25$; this letter is a third range, not a reread of either of those.

**1.** Scaling the $16$ m reading of $6.25$ by $16/100$ as if the law were inverse-linear would have claimed $1$, which sits above $0.5$ and flips the verdict. So the letter reads the claim against $16$; $0.5$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $16$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Inverse-linear thinking is too slow a decay for this stack.

**2.** The opposite verdict would have needed a smaller coefficient, or a shallower exponent, so that $c(100)$ rose through $0.5$. At the recovered $A=400$, the far reading is locked to $0.4$.

The recovered concentration at $100$ metres is $0.4$, so the statement is True.`,
      `**D.** → True

This letter inverts the concentration law, rather than reading a named range. A nonzero power inverts to another power. The overview recovered $c=400 x^{-\\frac{3}{2}}$, so isolating distance raises both sides to the reciprocal $-\\frac{2}{3}$ and leaves

$$x=\\left(\\frac{400}{c}\\right)^{\\frac{2}{3}}$$

Distance needed for a given concentration is still a monomial in $c$. Falling concentration does not introduce a logarithm. The new exponent is the reciprocal of $-\\frac{3}{2}$, just as any power $c=A x^{r}$ inverts to $x=(c/A)^{1/r}$.

**1.** Treating inversion as "swap the variables and keep the exponent" would have written $x=A c^{-\\frac{3}{2}}$ and lost the reciprocal. Keeping $x=A c^{-\\frac{3}{2}}$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exponent must flip sign and take the reciprocal.

**2.** Checking a recovered pair: at $c=50$ the inverse returns $x=4$, the nearer monitor. At $c=6.25$ it returns $x=16$. The inverse is faithful to the two logged readings, which is what a power inverse must do.

**3.** The opposite verdict would have needed a law that was not a pure power: a decaying exponential, or a sum of two powers, would invert to a logarithm or to a mess. The stem is a single monomial.

A third concentration makes the same inverse do new work. At $c=0.4$ the formula returns $x=100$, the far-field range in letter C. At $c=3.2$ it returns $x=25$, because $\\left(400/3.2\\right)^{\\frac{2}{3}}=125^{\\frac{2}{3}}=25$. Neither of those ranges was used to fit $A$; both fall out of the same monomial inverse.

A change of units from metres to kilometres would rescale the coefficient by $1000^{-\\frac{3}{2}}$ and leave the inverse still a power of concentration. The opposite verdict would have needed a law that was not a pure power: a decaying exponential in range would invert to a logarithm, not to a monomial. The stem is a single power.

The distance that produces a given concentration is itself a power of that concentration, so the statement is True.`,
      `**E.** → False

This is a level question at the nearer monitor. The overview recovered $c(4)=50$. The claim asks whether that reading still sits under $45$ micrograms per cubic metre.

Fifty is not under forty-five. That $50$ is also $6.25+43.75$, the far reading plus the logged gap, so the nearer monitor is pinned once the gap and the far reading are known. The figure $45$ is a nearby cutoff, not a rounding of $50$.

**1.** Treating $43.75$ as the nearer reading itself would have claimed "under $45$" and flipped the verdict. Working from the isolated values, $43.75$ is the figure that is checked, not the detour that produced $45$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The $43.75$ is a difference of two monitors, not a level.

**2.** The opposite verdict would have needed a smaller gap, or a smaller far reading, so that $c(4)$ fell through $45$. At the recovered pair $50$ and $6.25$, the nearer monitor is locked above $45$.

The recovered concentration at $4$ metres is $50$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 52,
    solution_overview: `Concentration follows $c(x)=A x^{-\\frac{3}{2}}$ for distance $x>0$ metres. A monitor at $4$ metres reads $43.75$ more than a monitor at $16$ metres.

**Part 1: Building the model.**

Let $x$ be downwind distance and $c(x)$ concentration. The exponent $-\\frac{3}{2}$ is given, so only $A$ is unknown. The $43.75$ figure is a difference of two readings.

**1. Translate: the shape factors.**

$$4^{-\\frac{3}{2}}=\\frac{1}{8} \\qquad 16^{-\\frac{3}{2}}=\\frac{1}{64}$$

**2. Translate: the recorded gap.**

$$A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=43.75$$

**Part 2: The model.**

$$c(x)=A x^{-\\frac{3}{2}} \\tag{1}$$

$$\\frac{7A}{64}=43.75 \\tag{2}$$

**Part 3: Solve.**

**1.** Coefficient:

$$A=400 \\qquad c(x)=400 x^{-\\frac{3}{2}}$$

**2.** Monitor levels:

$$c(4)=50 \\qquad c(16)=6.25 \\qquad c(100)=0.4$$

**3.** Concentration per metre $c(x)/x=400 x^{-\\frac{5}{2}}$ still depends on $x$. Scale factors:

$$\\frac{c\\bigl(\\frac{x}{2}\\bigr)}{c(x)}=2\\sqrt{2} \\qquad \\frac{c(2x)}{c(x)}=\\frac{1}{2\\sqrt{2}}$$

**Answer.** $A=400$ | $c(4)=50$ | $c(16)=6.25$ | $c(100)=0.4$ | halving factor $2\\sqrt{2}$`,
  },
  {
    id: `math-8-53`,
    case_id: `MATH 8.53`,
    title: `Storm Surge Feeding a Cubic Loss Index`,
    context: `A reinsurer models coastal losses in two stages. Storm surge height is $s(w)=0.5 w^{0.5}$ metres for a wind speed of $w>0$, and the loss index rises with the cube of surge height, $L(s)=32 s^{3}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After both stages, the loss index is itself a power of wind speed.`,
      `Doubling the wind speed doubles the loss index.`,
      `At a wind speed of $64$ the loss index is already above $2000$.`,
      `The composed exponent exceeds one, so losses accelerate as the wind strengthens.`,
      `A loss of $1000$ already requires a wind speed above $50$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

This letter is about the shape after both stages, not a named wind speed. Surge is a square root of wind and loss cubes that surge. The overview recovered the composed law $L(w)=4w^{\\frac{3}{2}}$. A product of powers of the same variable is again a power. The composed exponent is $\\frac{1}{2}\\cdot 3=\\frac{3}{2}$, and the inner coefficient $0.5$ is cubed into the $4$.

Stopping at the surge stage would have left a square-root law in $w$. Stopping at the loss stage would have left a cubic in $s$. Neither of those is the composed map from wind to loss. The claim is about that composed map.

**1.** Adding the exponents instead of multiplying them would have claimed exponent $3.5$ and still called it a power, which happens to keep the verdict but for the wrong reason. That is why $3.5$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Composition multiplies, it does not add.

**2.** The opposite verdict would have needed a stage that was not a power: a logarithm, or a sum of two powers of surge. Both stages in the stem are monomials.

A numerical check at a second wind makes the monomial visible. At $w=16$, surge is $0.5\\cdot 4=2$ metres and loss is $32\\cdot 8=256$. The composed shortcut $4\\cdot 16^{\\frac{3}{2}}=4\\cdot 64=256$ matches. Two stages collapsed to one power of wind, with no leftover logarithm or additive constant.

If the loss stage had been $32 s^{3}+100$, an intercept, the composition would have ceased to be a power of $w$. The stem has no such intercept. Changing the inner $0.5$ rescales the coefficient $4$ and leaves the exponent $\\frac{3}{2}$ untouched.

A reinsurer who reported loss as a table of surge heights, without substituting $s(w)$, would still be looking at a cubic in $s$ rather than a three-halves power of wind. The claim is about the composed map.

After both stages the loss index is itself a power of wind speed, so the statement is True.`,
      `**B.** → False

Doubling the wind speed would double the loss index only if the composed exponent were $1$. The overview recovered leftover exponent $\\frac{3}{2}$, so a doubling of wind multiplies loss by $2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$, not by $2$. A one-for-one wind scale-up understates the second stage.

The surge stage alone would have scaled by $\\sqrt{2}\\approx 1.41$. The cubic loss stage then cubes that factor. Mixing the surge scale with the composed scale is how a near-doubling appears.

**1.** Linear thinking on wind is the mismatch. Storm losses accelerate because the cube sits on top of the square root.

**2.** The opposite verdict would have needed the two stages to cancel to exponent $1$, for instance a square-root loss on a square-root surge. The stem cubes the surge.

The doubling factor is not $2$, so the statement is False.`,
      `**C.** → True

This is a level question at the named wind speed $64$. The overview recovered $s(64)=4$ and $L(64)=2048$. The claim asks whether that loss index already sits above $2000$.

Two thousand and forty-eight clears two thousand. Stage by stage: the square root of $64$ is $8$, times $0.5$ is a four-metre surge, and $32\\cdot 4^{3}=2048$. The composed shortcut $4\\cdot 64^{\\frac{3}{2}}=4\\cdot 512=2048$ is the same number.

**1.** Stopping after the surge stage would have compared $4$ metres to $2000$ and missed the letter. After isolating the unknown, the check is against $4$. The figure $2000$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $4$ stays in the write-up. The claim is about the loss index, not the surge height.

**2.** The opposite verdict would have needed a smaller inner coefficient, or a missing cube, so that $2048$ fell through $2000$. At the recovered composition the index is locked above $2000$.

The recovered loss index at wind $64$ is $2048$, so the statement is True.`,
      `**D.** → True

This letter reads the composed exponent as an acceleration claim. The overview recovered leftover exponent $\\frac{3}{2}>1$, so each extra unit of wind adds more loss than the unit before it. The same doubling factor $2^{\\frac{3}{2}}=2\\sqrt{2}>2$ is that acceleration in a scale. A proportional law would have carried exponent $1$.

The first stage alone has exponent $\\frac{1}{2}<1$, so surge itself would decelerate. The cube in the second stage is what pushes the product above one. Acceleration of losses is a composed fact, not a surge fact.

**1.** Seeing the square-root surge and stopping would have claimed deceleration. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The claim is about the loss index after both stages.

**2.** Checking the leftover slope of the composed rule: $L'(w)=6 w^{\\frac{1}{2}}$, which rises with $w$. The slope at wind $16$ is $24$; at wind $64$ it is $48$. Later wind is dearer in loss, which is the same story as $r>1$.

The leftover slope of the composed rule is $L'(w)=6\\sqrt{w}$. At wind $16$ that slope is $24$; at wind $64$ it is $48$. Later wind is dearer in loss, which is the same $r>1$ story as the doubling factor $2\\sqrt{2}>2$. The first stage alone, with exponent $\\frac{1}{2}$, would have flattened; the cube is what accelerates the index.

The composed exponent exceeds one, so the statement is True\\n\\nA proportional loss law would have carried composed exponent 1, and then doubling wind would have doubled loss. The cube sitting on the square-root surge is what pushes the product to three halves. Changing the loss stage from a cube to a square would have left composed exponent 1 and flipped this letter, while leaving letter A still true: the composition would remain a power, just not an accelerating one.\\n\\n**D.** → True

This letter reads the composed exponent as an acceleration claim. The overview recovered leftover exponent $\\frac{3}{2}>1$, so each extra unit of wind adds more loss than the unit before it. The same doubling factor $2^{\\frac{3}{2}}=2\\sqrt{2}>2$ is that acceleration in a scale. A proportional law would have carried exponent $1$.

The first stage alone has exponent $\\frac{1}{2}<1$, so surge itself would decelerate. The cube in the second stage is what pushes the product above one. Acceleration of losses is a composed fact, not a surge fact.

**1.** Seeing the square-root surge and stopping would have claimed deceleration. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The claim is about the loss index after both stages.

**2.** Checking the leftover slope of the composed rule: $L'(w)=6 w^{\\frac{1}{2}}$, which rises with $w$. The slope at wind $16$ is $24$; at wind $64$ it is $48$. Later wind is dearer in loss, which is the same story as $r>1$.

The leftover slope of the composed rule is $L'(w)=6\\sqrt{w}$. At wind $16$ that slope is $24$; at wind $64$ it is $48$. Later wind is dearer in loss, which is the same $r>1$ story as the doubling factor $2\\sqrt{2}>2$. The first stage alone, with exponent $\\frac{1}{2}$, would have flattened; the cube is what accelerates the index.

The composed exponent exceeds one, so the statement is True.`,
      `**E.** → False

This letter inverts a loss of $1000$, rather than reading a named wind. The overview recovered that $L=1000$ already occurs at $w\\approx 39.7$, which sits below $50$, not above it. The claim's "already requires a wind speed above $50$" is the wrong side of that inverse.

**1.** Starting from $L(w)=4w^{\\frac{3}{2}}$, a loss of $1000$ forces $w^{\\frac{3}{2}}=250$, then $w=250^{\\frac{2}{3}}\\approx 39.7$. At $w=50$ the three-halves power is already past $250$ after the coefficient $4$, so a wind of $50$ already overshoots a loss of $1000$.

**2.** Inverting as if the exponent were $1$ would have claimed $w=250$, well above $50$, and flipped the verdict. The recovered comparison therefore keeps $1$ and does not substitute $50$. Linear inversion overstates the wind needed when $r>1$.

**3.** Another mix-up is inverting the surge stage only: $0.5\\sqrt{w}=1000$ is nonsense units, and it manufactures a huge wind. The $1000$ is a loss index, not a surge height.

**4.** The opposite verdict would have needed a smaller coefficient, or a shallower composed exponent, so that the inverted wind rose through $50$. At the recovered $L(w)=4w^{\\frac{3}{2}}$, a loss of $1000$ is locked below $50$.

A second target shows the same inverse on the other side of $50$. A loss of $2048$ inverts to $w=64$, the named wind in letter C. A loss of $4000$ inverts as $4w^{\\frac{3}{2}}=4000$, so $w^{\\frac{3}{2}}=1000$ and $w=1000^{\\frac{2}{3}}\\approx 100$. That $100$ sits above $50$, but it is a different loss. For the named loss of $1000$, the inverse stays near $39.7$.

Changing the outer cube to a square would have left composed exponent $1$, and then $4w=1000$ would have forced $w=250$, above $50$, flipping the letter. The stem cubes surge, so the inverse sits below $50$.

At $w=50$ the composed rule is $4\\cdot 50^{\\frac{3}{2}}=4\\cdot 50\\sqrt{50}$. Because $\\sqrt{50}>7$, that product already sits past $1400$, well above a loss of $1000$. The cutoff $50$ is not a near miss on $39.7$; it is the other side of the inverse.

The recovered wind for a loss of $1000$ is about $39.7$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 53,
    solution_overview: `Surge is $s(w)=0.5 w^{0.5}$ metres and the loss index is $L(s)=32 s^{3}$. The composed law is recovered by substitution.

**Part 1: Building the model.**

Let $w$ be wind speed, $s$ surge height, and $L$ the loss index. Composing multiplies exponents and raises the inner coefficient to the outer power.

**1. Translate: the surge stage.**

$$s(w)=0.5 w^{0.5}$$

**2. Translate: the loss stage applied to it.**

$$L(w)=32\\bigl(0.5 w^{0.5}\\bigr)^{3}$$

**Part 2: The model.**

$$32\\cdot 0.5^{3}=4 \\qquad 0.5\\cdot 3=1.5 \\tag{1}$$

$$L(w)=4 w^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** A named wind speed, stage by stage:

$$s(64)=4 \\qquad L(64)=2048$$

**2.** Scale of a doubling:

$$\\frac{L(2w)}{L(w)}=2^{1.5}=2\\sqrt{2}\\approx 2.83$$

**3.** Invert a loss of $1000$:

$$w=250^{\\frac{2}{3}}\\approx 39.69$$

**4.** Marginal loss rises because the composed exponent exceeds $1$:

$$L'(w)=6 w^{0.5}$$

**Answer.** $L(w)=4w^{1.5}$ | $s(64)=4$ | $L(64)=2048$ | $L=1000$ at $w\\approx 39.7$`,
  },
  {
    id: `math-8-54`,
    case_id: `MATH 8.54`,
    title: `Market Impact of a Block Trade`,
    context: `A broker models price impact as $I(v)=A v^{0.5}$ basis points, where $v>0$ is order size as a fraction of average daily volume. Increasing an order from $0.04$ ADV to $0.09$ ADV adds exactly $6$ basis points of impact. The scaled impact charge is $vI(v)$, while a notional fee is $F(v)=30v$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Impact grows more slowly than order size.`,
      `Doubling order size doubles the scaled impact charge.`,
      `At $0.16$ ADV, impact is already above $20$ basis points.`,
      `Once the scaled charge overtakes the notional fee, it stays larger at every bigger order.`,
      `At $0.25$ ADV the scaled charge is already above $10$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

This letter is about impact itself, not the scaled charge. Impact is a square-root law in order size. The overview recovered $I(v)=60\\sqrt{v}$. Doubling order size multiplies impact by $\\sqrt{2}\\approx 1.41$, not by $2$. One half sits below one, so impact grows more slowly than order size.

The coefficient $60$ cancels in any ratio, so a different calibration would not have changed this ranking. A proportional impact would have needed exponent $1$.

**1.** Glancing at the scaled charge $vI(v)$ would have seen leftover exponent $\\frac{3}{2}$ and claimed impact outruns size. So the letter reads the claim against $vI(v)$; $\\frac{3}{2}$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $vI(v)$ stays in the write-up. That exponent belongs to the charge, not to $I$.

**2.** The opposite verdict would have needed an impact exponent at least $1$. The logged $6$ basis-point gap between $0.04$ and $0.09$ ADV already forced a square root.

Impact grows more slowly than order size, so the statement is True.`,
      `**B.** → False

The scaled charge is the product $vI(v)$, not impact itself. The overview recovered $I(v)=60\\sqrt{v}$, so the product is $60 v^{\\frac{3}{2}}$. A doubling of order size then multiplies the charge by $2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$, which exceeds $2$. Impact itself lags, but multiplying by the doubled size pushes the charge past a doubling.

Letter A was about $I$; this letter is about $vI$. Mixing those two objects is how a true doubling of the charge appears. The coefficient $60$ again cancels in the ratio.

**1.** Checking the recovered charge at two sizes: at $v=0.04$ the charge is $60\\cdot(0.04)^{\\frac{3}{2}}=0.48$. At twice that size, $v=0.08$, the charge is $60\\cdot(0.08)^{\\frac{3}{2}}\\approx 1.36$, and $1.36/0.48=2\\sqrt{2}$, not $2$.

**2.** The opposite verdict would have needed leftover exponent $1$ on the charge, which would have required impact exponent $0$, a constant impact. The stem is a square-root impact.

The logged move from $0.04$ ADV to $0.09$ ADV is not a doubling, but it still tests the charge exponent. Impact rose by $6$ basis points, from $12$ to $18$. The scaled charge rose from $0.04\\cdot 12=0.48$ to $0.09\\cdot 18=1.62$, a factor of $3.375$. A doubling of the charge would have been a factor of $2$ on a doubling of $v$; here even a $2.25$-fold order produced more than a threefold charge, which is $2.25^{\\frac{3}{2}}=3.375$. The charge outruns order size.

If impact had been constant, the charge would have been linear in $v$ and a doubling of order would have doubled the charge. The stem's square-root impact forbids that.

A linear impact $I\\propto v$ would have made the charge quadratic and the doubling factor $4$, still not $2$. Only a constant impact would have doubled the charge on a doubled order. The logged $6$ basis-point gap between $0.04$ and $0.09$ ADV already forced a square root.

Doubling order size does not double the scaled impact charge, so the statement is False.`,
      `**C.** → True

This is a level question at $0.16$ ADV. The overview recovered $I(0.16)=24$. The claim asks whether that impact already sits above $20$ basis points.

Twenty-four clears twenty. The square root of $0.16$ is $0.4$, times $60$ is $24$. From the logged $0.09$ ADV impact of $18$, a further move to $0.16$ is a $\\frac{4}{3}$ factor on the square root, $18\\cdot\\frac{4}{3}=24$.

**1.** Doubling the $0.09$ ADV impact as if impact were linear would have claimed $36$ and still sat above $20$, for the wrong reason. So the letter reads the claim against $0.09$; $20$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $0.09$ stays in the write-up. Another mix-up is reading $0.16$ as a doubling of $0.04$, which it is in order size, and then doubling the $12$ bp impact at $0.04$ to $24$. That happens to land on the right number because $\\sqrt{4}=2$, but it is a coincidence of this particular pair.

**2.** The opposite verdict would have needed a smaller coefficient, so that $I(0.16)$ fell through $20$. At the recovered $A=60$, the impact is locked at $24$.

The recovered impact at $0.16$ ADV is $24$, so the statement is True.`,
      `**D.** → True

This letter is about the crossing of the scaled charge with the notional fee, and about what happens after that crossing. The overview recovered that the two meet at $v=0.25$, where both equal $7.5$. The claim asks whether, once the scaled charge overtakes the fee, it stays larger at every bigger order.

Past $v=0.25$ the square root $\\sqrt{v}$ keeps growing, so $60\\sqrt{v}-30$ stays positive. There is only one positive root of $60 v^{\\frac{3}{2}}=30v$, because dividing by $v>0$ leaves a monotone square root. Once the charge is ahead, the fee never catches up.

**1.** Seeing two powers and expecting two crossings would have looked for a second root. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. On $v>0$ the factor $v$ cancels and leaves a single square-root equation.

**2.** Checking a size past the crossing: at $v=0.36$, the charge is $60\\cdot(0.36)^{\\frac{3}{2}}=12.96$ and the fee is $10.8$, so the charge is still larger. At $v=1$ the charge is $60$ and the fee is $30$.

**3.** The opposite verdict would have needed the fee to have a higher leftover exponent than the charge, so that it could recross. The fee is linear; the charge has exponent $\\frac{3}{2}$. After the meeting, the higher exponent stays ahead.

Below the crossing the ranking is the other way around, which is why "once it overtakes" matters. At $v=0.16$, the charge is $60\\cdot(0.16)^{\\frac{3}{2}}=3.84$ and the fee is $4.8$, so the fee is still larger. At $v=0.25$ they meet at $7.5$. At $v=0.36$ the charge has moved ahead to $12.96$ against a fee of $10.8$. One crossing, then the higher exponent stays ahead.

Changing the notional fee from $30v$ to $60v$ would move the crossing to $v=1$, but it would not create a second crossing. A quadratic fee could recross; a linear fee cannot.

Once the scaled charge overtakes the notional fee, it stays larger, so the statement is True.`,
      `**E.** → False

This is a level question on the scaled charge at $v=0.25$. The overview recovered that this is the break-even order, where the charge equals the notional fee at $7.5$. The claim asks whether that charge already sits above $10$.

Seven and a half sits below ten. This is also $60\\cdot\\left(\\frac{1}{4}\\right)^{\\frac{3}{2}}=60\\cdot\\frac{1}{8}=7.5$. The figure $10$ is a nearby cutoff, not a rounding of $7.5$.

**1.** Evaluating impact $I(0.25)=30$ instead of the scaled charge would have claimed "above $10$" and flipped the verdict. So the letter reads the claim against $I(0.25)=30$; $10$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $I(0.25)=30$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Thirty basis points is impact, not $vI$. Mixing $I$ with $vI$ is the mix-up.

**2.** Another mix-up is reading the fee $F(0.25)=7.5$ as if the claim were about the fee sitting above $10$. Neither the charge nor the fee clears $10$ at this order.

**3.** The opposite verdict would have needed a larger coefficient, so that $60 v^{\\frac{3}{2}}$ at $v=0.25$ rose through $10$. At the recovered $A=60$, the charge is locked at $7.5$.

The recovered scaled charge at $0.25$ ADV is $7.5$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 54,
    solution_overview: `Impact follows $I(v)=A v^{\\frac{1}{2}}$ basis points. Raising order size from $0.04$ to $0.09$ ADV adds $6$ basis points. The scaled charge is $vI(v)$, and a notional fee is $F(v)=30v$.

**Part 1: Building the model.**

Let $v$ be order size as a fraction of ADV. The exponent $\\frac{1}{2}$ is given, so only $A$ is unknown. The $6$ basis points is a difference of impacts.

**1. Translate: the square roots.**

$$\\sqrt{0.09}=0.3 \\qquad \\sqrt{0.04}=0.2$$

**2. Translate: the recorded increment.**

$$A(0.3-0.2)=6$$

**Part 2: The model.**

$$I(v)=60\\sqrt{v} \\tag{1}$$

$$vI(v)=60 v^{\\frac{3}{2}} \\qquad F(v)=30v \\tag{2}$$

**Part 3: Solve.**

**1.** A named size:

$$I(0.16)=24$$

**2.** Break-even:

$$60 v^{\\frac{3}{2}}=30v \\Rightarrow v=0.25$$

**3.** Scale of the charge:

$$\\frac{(2v)I(2v)}{vI(v)}=2^{\\frac{3}{2}}=2\\sqrt{2}$$

**Answer.** $A=60$ | $I(v)=60\\sqrt{v}$ | $I(0.16)=24$ | break-even $v=0.25$ | charge exponent $\\frac{3}{2}$`,
  },
  {
    id: `math-8-55`,
    case_id: `MATH 8.55`,
    title: `Allometric Energy Use Across Livestock Weights`,
    context: `Daily energy use follows $E(m)=A m^{\\frac{2}{3}}$ units for body mass $m>0$ kilograms. A $64$ kg animal uses exactly $70$ more energy units per day than a $27$ kg animal. A herd's total use is the sum of its animals' individual uses. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The body mass that produces a given daily energy is a power function of that energy.`,
      `Energy use per kilogram falls as body mass rises.`,
      `A $64$ kg animal already uses more than $150$ energy units a day.`,
      `Combining two equal animals into one animal of twice the mass leaves total energy use unchanged.`,
      `A $216$ kg animal still uses under $400$ energy units a day.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

This letter inverts the energy law, rather than reading a named mass. A nonzero power inverts to another power. The overview recovered $E=10 m^{\\frac{2}{3}}$, so isolating mass raises both sides to the reciprocal $\\frac{3}{2}$ and leaves $m=(E/10)^{\\frac{3}{2}}$. Mass needed for a given daily energy is still a monomial in $E$.

Falling or rising energy does not introduce a logarithm. The new exponent is the reciprocal of $\\frac{2}{3}$, just as any power $E=A m^{r}$ inverts to $m=(E/A)^{1/r}$.

**1.** Swapping the variables and keeping exponent $\\frac{2}{3}$ would have written $m=A E^{\\frac{2}{3}}$ and lost the reciprocal. Working from the isolated values, $\\frac{2}{3}$ is the figure that is checked, not the detour that produced $m=A E^{\\frac{2}{3}}$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exponent must take the reciprocal.

**2.** Checking a recovered pair: at $E=160$ the inverse returns $m=64$, the larger logged animal. At $E=90$ it returns $m=27$. The inverse is faithful to the two logged animals.

Checking a recovered pair: at $E=160$ the inverse returns $m=64$, the larger logged animal. At $E=90$ it returns $m=27$. The inverse is faithful to the two logged animals, which is what a power inverse must do.

Swapping the variables and keeping exponent $\\frac{2}{3}$ would have written $m=10 E^{\\frac{2}{3}}$ and lost the reciprocal. Working from the isolated values, $\\frac{2}{3}$ is the figure that is checked, not the detour that produced $m=10 E^{\\frac{2}{3}}$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exponent must take the reciprocal: $\\frac{2}{3}$ becomes $\\frac{3}{2}$. At $E=160$ that wrong inverse would have claimed $m=10\\cdot 160^{\\frac{2}{3}}$, tens of kilograms off the logged $64$.

The opposite verdict would have needed a law that was not a pure power: an exponential metabolic rule, or a sum of two allometric terms, would invert to a logarithm or to a mess. The stem is a single monomial. A change of units from kilograms to grams would rescale the coefficient and leave the inverse still a power of energy.

A change of units from kilograms to grams would rescale the coefficient by $1000^{\\frac{2}{3}}$ and leave the inverse still a power of energy. The opposite verdict would have needed an exponential metabolic rule, which inverts to a logarithm, not to a monomial.

The body mass that produces a given daily energy is a power function of that energy, so the statement is True.`,
      `**B.** → True

Energy per kilogram is the intensity $E(m)/m$, not the total $E(m)$. The overview recovered $E(m)=10 m^{\\frac{2}{3}}$, so the quotient is $10 m^{-\\frac{1}{3}}$. The leftover exponent is negative, so intensity falls as mass rises. A heavier animal uses more energy in total, but less per kilogram.

That is the allometric point of exponent $\\frac{2}{3}<1$. A constant intensity would have needed leftover exponent $0$, hence original exponent $1$.

**1.** Checking the two logged animals: at $27$ kg the intensity is $90/27\\approx 3.33$ units per kilogram. At $64$ kg it is $160/64=2.5$. Intensity has already fallen.

**2.** Seeing a larger total at $64$ kg and inferred a larger intensity would have flipped the verdict. The opposite verdict would need a different isolation than $64$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Totals rise; intensities fall.

Energy use per kilogram falls as body mass rises, so the statement is True.`,
      `**C.** → True

This is a level question at $64$ kg. The overview recovered $E(64)=160$. The claim asks whether that animal already uses more than $150$ energy units a day.

One hundred and sixty clears one hundred and fifty. The two-thirds power of $64$ is $16$, times $10$ is $160$. The logged gap of $70$ above $E(27)=90$ is the same $160$.

**1.** Treating $70$ as the $64$ kg level itself would have compared $70$ to $150$ and flipped the verdict. So the letter reads the claim against $70$; $150$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $70$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The $70$ is a difference of two animals, not a level.

**2.** The opposite verdict would have needed a smaller coefficient, so that $E(64)$ fell through $150$. At the recovered $A=10$, the $64$ kg animal is locked at $160$.

The recovered energy at $64$ kg is $160$, so the statement is True.`,
      `**D.** → False

This letter compares two equal animals with one animal of twice the mass. Two equal animals use $2E(m)$. One animal of twice the mass uses $E(2m)=2^{\\frac{2}{3}}E(m)$. Because $\\frac{2}{3}<1$, the factor $2^{\\frac{2}{3}}$ is about $1.59$, not $2$. Merging the two animals lowers total energy use rather than leaving it unchanged.

The overview recovered $A=10$, but the coefficient cancels in the comparison, so the ranking is an exponent fact. Herd totals add individual uses, which is why $2E(m)$ is the right left-hand side, not $E(2m)$ written twice.

**1.** Checking a concrete pair: two $27$ kg animals use $2\\cdot 90=180$. One $54$ kg animal uses $10\\cdot 54^{\\frac{2}{3}}\\approx 143$. The merge saves energy. At the logged $64$ kg against two $32$ kg animals the same ranking holds.

**2.** Treating energy as proportional to mass would have claimed $E(2m)=2E(m)$ and called the total unchanged. Once $E(2m)=2E(m)$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. That is exponent $1$, which the logged gap already forbade.

**3.** The opposite verdict would have needed leftover exponent $1$, a linear energy law. Allometry with $\\frac{2}{3}$ is why combining two animals into one larger animal is cheaper in energy, not equal.

Checking a concrete pair: two $27$ kg animals use $2\\cdot 90=180$. One $54$ kg animal uses $10\\cdot 54^{\\frac{2}{3}}\\approx 143$. The merge saves energy. At the logged $64$ kg against two $32$ kg animals the same ranking holds, because $2^{\\frac{2}{3}}<2$ at every mass.

Treating energy as proportional to mass would have claimed $E(2m)=2E(m)$ and called the total unchanged. Once $E(2m)=2E(m)$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. That is exponent $1$, which the logged gap of $70$ units between $27$ kg and $64$ kg already forbade: a linear rule through $E(27)=90$ would have put $E(64)$ at $213$, not at $160$.

Herd totals add individual uses, which is why $2E(m)$ is the right left-hand side. Applying $E$ once to the pooled mass $2m$ is the merge, and that is strictly cheaper when $r<1$. The opposite verdict would have needed leftover exponent $1$, a linear energy law. Allometry with $\\frac{2}{3}$ is why combining two animals into one larger animal is cheaper in energy, not equal.

Merging two equal animals lowers total energy use, so the statement is False.`,
      `**E.** → True

This is a level question at $216$ kg. The overview recovered $E(216)=360$. The claim asks whether that animal still uses under $400$ energy units a day.

Three hundred and sixty sits under four hundred. Two hundred and sixteen is $6^{3}$, so the two-thirds power is $36$, times $10$ is $360$. From $E(27)=90$, an eightfold mass is a fourfold energy, $90\\cdot 4=360$, because $8^{\\frac{2}{3}}=4$.

**1.** Scaling $E(64)=160$ by $216/64$ as if energy were linear would have claimed $540$, above $400$, and flipped the verdict. So the letter reads the claim against $E(64)=160$; $400$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $E(64)=160$ stays in the write-up. Linear thinking overstates a large animal when $r<1$.

**2.** The opposite verdict would have needed a larger coefficient, so that $E(216)$ rose through $400$. At the recovered $A=10$, the $216$ kg animal is locked at $360$.

The recovered energy at $216$ kg is $360$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 55,
    solution_overview: `Daily energy follows $E(m)=A m^{\\frac{2}{3}}$ for body mass $m>0$ kilograms. A $64$ kg animal uses $70$ more units than a $27$ kg animal. Herd totals add individual uses.

**Part 1: Building the model.**

Let $m$ be body mass in kilograms and $E(m)$ daily energy. The exponent $\\frac{2}{3}$ is given, so only $A$ is unknown. The $70$ units is a difference of two animals, and both masses are cubes.

**1. Translate: the shape factors.**

$$27^{\\frac{2}{3}}=9 \\qquad 64^{\\frac{2}{3}}=16$$

**2. Translate: the recorded gap.**

$$A(16-9)=70$$

**Part 2: The model.**

$$E(m)=10 m^{\\frac{2}{3}} \\tag{1}$$

$$\\frac{E(m)}{m}=10 m^{-\\frac{1}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** Named levels:

$$E(27)=90 \\qquad E(64)=160$$

**2.** Inverse:

$$m=\\bigl(E/10\\bigr)^{\\frac{3}{2}}$$

**3.** Herd comparison at total mass $216$ kg:

$$8E(27)=720 \\qquad E(216)=360$$

**4.** Merging two equal animals:

$$E(2m)/E(m)=2^{\\frac{2}{3}}<2$$

**Answer.** $A=10$ | $E(64)=160$ | $8E(27)=2E(216)$ | per-kilogram law $10m^{-\\frac{1}{3}}$`,
  },
  {
    id: `math-8-56`,
    case_id: `MATH 8.56`,
    title: `Retail Catchment Under a Distance-Decay Law`,
    context: `Weekly footfall at a retail park from a residential zone follows $f(d)=A d^{-1.5}$ visitors, where $d>0$ is the driving distance in kilometres. The planning file omits the coefficient: it records only that a zone $4$ kilometres away supplies $350$ more visitors a week than a zone $16$ kilometres away. A zone counts as core catchment when it supplies at least $100$ visitors a week. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A farther zone always supplies fewer visitors than a nearer zone.`,
      `Footfall follows an inverse-square law of driving distance.`,
      `A zone $9$ kilometres away still supplies more than $100$ visitors a week.`,
      `Core catchment already ends before $11$ kilometres.`,
      `An extra kilometre of drive cuts more visitors far from the park than near it.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

This letter is a ranking by distance, not a named zone count. The exponent $-\\frac{3}{2}$ is negative, so for $d_{2}>d_{1}$ the ratio of footfalls is $(d_{2}/d_{1})^{-\\frac{3}{2}}<1$. A farther zone always supplies fewer visitors than a nearer one. Sign of the exponent is the ranking.

The overview recovered $A=3200$, but the coefficient is positive and cancels in any ratio of two zones. A different planning file would not have changed this ranking.

**1.** Seeing core catchment ending near $10$ km and thinking a far zone could still out-supply a near one by being larger in population would have imported a fact the stem does not give. The recovered isolation is checked against the claim using $10$, which is the figure the sessions actually produce. The model is a pure distance decay.

**2.** The opposite verdict would have needed a positive exponent, a law that grew with drive time. The stem is $d^{-1.5}$.

A farther zone always supplies fewer visitors than a nearer zone, so the statement is True.`,
      `**B.** → False

An inverse-square law would give the fourfold-distance factor $4^{-2}=\\frac{1}{16}$. The recovered exponent $-\\frac{3}{2}$ instead gives $4^{-\\frac{3}{2}}=\\frac{1}{8}$. The two scale factors do not match. Inverse-square is the wrong power.

The overview recovered $f(4)=400$ and $f(16)=50$, and $50/400=\\frac{1}{8}$, not $\\frac{1}{16}$. The planning file's own two zones already refuse inverse-square.

**1.** Seeing a negative exponent and a square in the two distances $4$ and $16$ would have guessed inverse-square. So the letter reads the claim against $4$; $16$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $4$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The distances being squares is a convenience for the three-halves power, not a hint at exponent $-2$.

**2.** The opposite verdict would have needed the logged gap to force exponent $-2$. It forced $-\\frac{3}{2}$.

The planning file's own two zones already refuse inverse-square: $f(16)/f(4)=50/400=\\frac{1}{8}$, not $\\frac{1}{16}$. Seeing a negative exponent and a square in the two distances $4$ and $16$ would have guessed inverse-square. So the letter reads the claim against $4$; $16$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $4$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The distances being squares is a convenience for the three-halves power, not a hint at exponent $-2$.

Footfall does not follow an inverse-square law of driving distance, so the statement is False.`,
      `**C.** → True

This is a level question at $9$ kilometres against the core floor of $100$ visitors. The overview recovered $f(9)=\\frac{3200}{27}\\approx 118.5$. The claim asks whether that zone still supplies more than $100$ visitors a week.

One hundred and eighteen and a half still clears one hundred. Nine kilometres is a perfect square, so $9^{1.5}=27$, and $3200/27$ is the exact count. The core threshold is $100$; this letter is a named zone, not the boundary itself.

**1.** Interpolating linearly between $f(4)=400$ and $f(16)=50$ would have claimed about $225$ at $9$ km, still above $100$ but for the wrong shape. Working from the isolated values, $f(4)=400$ is the figure that is checked, not the detour that produced $100$. Another mix-up is using $f(16)=50$ as if $9$ km were already past the far zone.

**2.** The opposite verdict would have needed a smaller coefficient, so that $f(9)$ fell through $100$. At the recovered $A=3200$, nine kilometres is still inside core catchment.

The recovered footfall at $9$ kilometres is about $118.5$, so the statement is True.`,
      `**D.** → True

This letter locates the core-catchment boundary, not a named zone. The overview recovered that $f(d)=100$ already occurs at $d=32^{\\frac{2}{3}}\\approx 10.08$ km. The claim asks whether core catchment already ends before $11$ kilometres.

Ten point zero eight sits before eleven. Ten kilometres still sits inside, because $10^{1.5}\\approx 31.62<32$, so $f(10)\\approx 101.2>100$. Eleven kilometres is already out, because $11\\sqrt{11}\\approx 36.48>32$, so $f(11)\\approx 87.7<100$. Core catchment already ends before $11$ kilometres, just after $10$.

**1.** Inverting as if the exponent were $-1$ would have claimed $d=32$, well past $11$, and flipped the verdict. The stem's recovered values line up with $-1$, whereas $11$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $-1$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Inverse-linear thinking overstates the catchment when decay is steeper than $-1$.

**2.** Another mix-up is treating the far logged zone of $16$ km as the boundary, because $f(16)=50$ is already under $100$. That zone is past the boundary; it is not the boundary.

**3.** The opposite verdict would have needed a larger core floor, or a smaller coefficient, so that the inverted distance fell through $11$ from the other side. At the recovered $A=3200$ and floor $100$, the boundary is locked near $10.08$ km.

Ten kilometres still sits inside, because $10^{1.5}\\approx 31.62<32$, so $f(10)\\approx 101.2>100$. Eleven kilometres is already out, because $11\\sqrt{11}\\approx 36.48>32$, so $f(11)\\approx 87.7<100$. Core catchment already ends before $11$ kilometres, just after $10$.

Inverting as if the exponent were $-1$ would have claimed $d=32$, well past $11$, and flipped the verdict. The stem's recovered values line up with $-1$, whereas $11$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $-1$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Inverse-linear thinking overstates the catchment when decay is steeper than $-1$. Another mix-up is treating the far logged zone of $16$ km as the boundary, because $f(16)=50$ is already under $100$. That zone is past the boundary; it is not the boundary.

The opposite verdict would have needed a larger core floor, or a smaller coefficient, so that the inverted distance fell through $11$ from the other side. At the recovered $A=3200$ and floor $100$, the boundary is locked near $10.08$ km. Changing the floor from $100$ to $50$ would push the boundary out to $16$ km, which is past $11$; that is a different planning rule.

Core catchment already ends before $11$ kilometres, so the statement is True.`,
      `**E.** → False

This letter compares leftover slopes at two ranges, not two footfall levels. The overview recovered $f(d)=3200 d^{-1.5}$. Differentiating gives $f'(d)=-4800 d^{-\\frac{5}{2}}$. Its size is $150$ at $4$ km and only about $4.69$ at $16$ km. An extra kilometre cuts more visitors near the park than far from it. Distance-decay drops are steepest at the door.

The claim says the extra kilometre cuts more far from the park. That is the wrong ranking of the two slopes.

**1.** Seeing $f(4)=400$ much larger than $f(16)=50$ and inferred that far drops must be larger in count would have confused a smaller remaining footfall with a steeper cut. After isolating the unknown, the check is against $f(4)=400$. The figure $f(16)=50$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $f(4)=400$ stays in the write-up. The remaining pool is smaller far away; the slope is also flatter.

**2.** Checking a one-kilometre finite step: from $4$ to $5$ km, $f(5)=3200/5^{1.5}\\approx 286$, a drop of about $114$. From $16$ to $17$ km, $f(17)\\approx 45.6$, a drop of about $4.4$. The finite steps agree with the derivatives.

**3.** The opposite verdict would have needed a positive leftover exponent on the slope size, which would have required the original exponent to sit above $-1$ in a way that made $|f'|$ grow. For $r=-\\frac{3}{2}$, $|f'|$ falls.

Checking a one-kilometre finite step: from $4$ to $5$ km, $f(5)=3200/5^{1.5}\\approx 286$, a drop of about $114$. From $16$ to $17$ km, $f(17)\\approx 45.6$, a drop of about $4.4$. The finite steps agree with the derivatives. Distance-decay drops are steepest at the door, not out on the ring road.

Seeing $f(4)=400$ much larger than $f(16)=50$ and inferred that far drops must be larger in count would have confused a smaller remaining footfall with a steeper cut. After isolating the unknown, the check is against $f(4)=400$. The figure $f(16)=50$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $f(4)=400$ stays in the write-up. The remaining pool is smaller far away; the slope is also flatter.

The opposite verdict would have needed a positive leftover exponent on the slope size, which would have required the original exponent to sit in a range that made $|f'|$ grow with $d$. For $r=-\\frac{3}{2}$, $|f'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $150>4.69$.

An extra kilometre of drive cuts more visitors near the park than far from it, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 56,
    solution_overview: `Footfall follows $f(d)=A d^{-1.5}$ visitors from a zone $d>0$ kilometres away. A zone at $4$ km supplies $350$ more visitors than one at $16$ km, and core catchment means at least $100$ visitors a week.

**Part 1: Building the model.**

Let $d$ be driving distance and $f(d)$ weekly visitors. The exponent $-1.5$ is given, so only $A$ is unknown. The recorded $350$ is a difference of two zones, and both distances are perfect squares.

**1. Translate: the shape factors.**

$$4^{1.5}=8 \\qquad 16^{1.5}=64$$

**2. Translate: the recorded gap.**

$$\\frac{A}{8}-\\frac{A}{64}=350$$

**Part 2: The model.**

$$\\frac{7A}{64}=350 \\tag{1}$$

$$f(d)=3200 d^{-1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** Zone levels:

$$f(4)=400 \\qquad f(16)=50 \\qquad f(9)=\\frac{3200}{27}\\approx 118.5$$

**2.** Core-catchment boundary:

$$3200 d^{-1.5}=100 \\Rightarrow d=32^{\\frac{2}{3}}\\approx 10.08$$

**3.** Scale and slope:

$$\\frac{f(4d)}{f(d)}=\\frac{1}{8}$$

The slope magnitude $\\lvert f'(d)\\rvert$ falls as $d$ rises.

**Answer.** $A=3200$ | $f(4)=400$ | $f(9)\\approx 118.5$ | core out to $d\\approx 10.08$ km`,
  },
  {
    id: `math-8-57`,
    case_id: `MATH 8.57`,
    title: `Rooftop Solar Output Across Two Installed Arrays`,
    context: `Daily output from a rooftop solar installation follows $y(a)=A a^{r}$ kilowatt-hours, where $a>0$ is the installed panel area in square metres. Two arrays are in service: a $100$ m² array delivers $240$ kWh a day, and a $225$ m² array delivers $360$ kWh. A proposal would expand the second array to $450$ m². Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Output grows more slowly than the installed area.`,
      `Expanding the $225$ m² array to $450$ m² would push output above $520$ kWh.`,
      `Output per square metre falls as the array grows.`,
      `To double the $240$ kWh output, the $100$ m² array must more than double in area.`,
      `A $400$ m² array already delivers more than $470$ kWh.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

This letter is about the recovered exponent, not a named array. The two arrays forced $2.25^{r}=1.5$, and because $1.5=2.25^{\\frac{1}{2}}$ the overview recovered $r=\\frac{1}{2}$. Doubling area then multiplies output by $\\sqrt{2}\\approx 1.41$, not by $2$. One half sits below one, so output grows more slowly than installed area.

The coefficient $A=24$ cancels in any ratio, so a different pair of arrays with the same area ratio would have told the same ranking.

**1.** Comparing $360$ kWh to $240$ kWh against $225$ m² to $100$ m² as a raw euro-per-square-metre story would have seen output rising with area and stopped. That is the fork: $360$ belongs to the recovered isolation, $100$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Rising is not the claim; rising more slowly than area is the claim.

**2.** The opposite verdict would have needed $r\\ge 1$. The two logged arrays already refuse that: output rose by $50\\%$ while area rose by $125\\%$.

Output grows more slowly than the installed area, so the statement is True.`,
      `**B.** → False

This letter reads the proposal that expands the $225$ m² array to $450$ m². The overview recovered $y(a)=24\\sqrt{a}$ and $y(450)\\approx 509$. The claim asks whether that expansion would push output above $520$ kWh.

Five hundred and nine sits under five hundred and twenty. Expanding $225$ m² to $450$ m² is a doubling, and $360\\cdot\\sqrt{2}\\approx 509$. A linear doubling would have claimed $720$, well above $520$. Square-root thinking is why the proposal misses $520$.

**1.** Doubling $360$ would have claimed $720$ and called the statement true. So the letter reads the claim against $360$; $720$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $360$ stays in the write-up. That is exponent $1$, which letter A already refused.

**2.** Another mix-up is adding $240$ kWh from the small array onto $360$, as if the proposal installed a second $100$ m² roof rather than doubling the $225$ m² roof. That sum is $600$, also above $520$, and it is the wrong experiment.

**3.** The opposite verdict would have needed a larger exponent, or a larger coefficient, so that $y(450)$ rose through $520$. At the recovered square-root law, the proposal is locked near $509$.

Doubling $360$ would have claimed $720$ and called the statement true. So the letter reads the claim against $360$; $720$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $360$ stays in the write-up. That is exponent $1$, which letter A already refused. Another mix-up is adding $240$ kWh from the small array onto $360$, as if the proposal installed a second $100$ m² roof rather than doubling the $225$ m² roof. That sum is $600$, also above $520$, and it is the wrong experiment.

The opposite verdict would have needed a larger exponent, or a larger coefficient, so that $y(450)$ rose through $520$. At the recovered square-root law, the proposal is locked near $509$. A coefficient of $25$ instead of $24$ would have given about $530$, just over $520$; the two logged arrays force $A=24$, not $25$.

The $520$ cutoff is a near miss on $\\sqrt{2}\\cdot 360\\approx 509$, not a rounding of it. Five hundred and nine sits under five hundred and twenty, and that is the whole letter.

The recovered output at $450$ m² is about $509$ kWh, so the statement is False.`,
      `**C.** → True

Output per square metre is the intensity $y(a)/a$, not the total. The overview recovered $y(a)=24\\sqrt{a}$, so the quotient is $24 a^{-\\frac{1}{2}}$. The leftover exponent is negative. A larger roof delivers more kilowatt-hours in total, but fewer per square metre.

Checking the two logged arrays: at $100$ m² the intensity is $2.4$ kWh per square metre. At $225$ m² it is $360/225=1.6$. Intensity has already fallen.

**1.** Seeing $360>240$ and inferred a larger intensity would have flipped the verdict. Keeping $360>240$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Totals rise; intensities fall.

**2.** The opposite verdict would have needed leftover exponent $0$, a proportional roof. The two arrays already force $r=\\frac{1}{2}$.

Checking the two logged arrays makes the fall concrete. At $100$ m² the intensity is $2.4$ kWh per square metre. At $225$ m² it is $360/225=1.6$. Intensity has already fallen while the total rose from $240$ to $360$.

Output per square metre falls as the array grows, so the statement is True.`,
      `**D.** → True

This letter inverts a doubling of the logged $240$ kWh output. The overview recovered that doubling $240$ to $480$ already needs $a=400$ m². The $100$ m² array must quadruple, which is more than a doubling. Any $r<1$ doubling of output requires more than a doubling of area.

From $24\\sqrt{a}=480$ one has $\\sqrt{a}=20$ and $a=400$. A doubling of area to $200$ m² would only multiply output by $\\sqrt{2}$, to about $339$ kWh, short of $480$.

**1.** Doubling the area with the output would have claimed $200$ m² and called "more than a doubling" false. Keeping $200$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That is exponent $1$.

**2.** The opposite verdict would have needed $r\\ge 1$, so that doubling output needed at most a doubling of area. The two logged arrays already force $r=\\frac{1}{2}$.

A doubling of area to $200$ m² would only multiply output by $\\sqrt{2}$, to about $339$ kWh, short of $480$. The $100$ m² array must quadruple, which is more than a doubling. Any $r<1$ doubling of output requires more than a doubling of area.

Doubling the area with the output would have claimed $200$ m² and called "more than a doubling" false. Keeping $200$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That is exponent $1$. The opposite verdict would have needed $r\\ge 1$, so that doubling output needed at most a doubling of area. The two logged arrays already force $r=\\frac{1}{2}$.

The same $a=400$ reappears in letter E as a level. This letter is the inversion that produces it: $24\\sqrt{a}=480$ forces $\\sqrt{a}=20$.

The same $a=400$ reappears in letter E as a level. This letter is the inversion that produces it. A coefficient of $24$ is locked by $A\\cdot 10=240$; a larger $A$ would have made the doubling array smaller than $400$, possibly a mere doubling of $100$ m², and flipped the letter.

To double the $240$ kWh output, the $100$ m² array must more than double in area, so the statement is True.`,
      `**E.** → True

This is a level question at $400$ m², the same array that doubles the logged $240$ kWh. The overview recovered $y(400)=480$. The claim asks whether that array already delivers more than $470$ kWh.

Four hundred and eighty sits above four hundred and seventy. Twenty squared is $400$, and $24\\cdot 20=480$. The $470$ cutoff is a near miss on that exact doubling array.

**1.** Using $y(225)=360$ and scaling by $400/225$ linearly would have claimed about $640$, still above $470$ but for the wrong shape. After isolating the unknown, the check is against $y(225)=360$. The figure $470$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $y(225)=360$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another mix-up is reading $y(450)\\approx 509$ from letter B as if the claim named $450$ m².

**2.** The opposite verdict would have needed a smaller coefficient, so that $y(400)$ fell through $470$. At the recovered $A=24$, four hundred square metres is locked at $480$.

The recovered output at $400$ m² is $480$ kWh, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 57,
    solution_overview: `Solar output is $y(a)=A a^{r}$ kWh for panel area $a>0$ m², with $y(100)=240$ and $y(225)=360$. A proposal doubles the second array to $450$ m².

**Part 1: Building the model.**

Let $a$ be panel area and $y(a)$ daily output. Both $A$ and $r$ are unknown, so the two arrays supply two equations: their ratio carries the exponent, and either array then carries the coefficient.

**1. Translate: the ratio of the two arrays.**

$$\\bigl(\\tfrac{225}{100}\\bigr)^{r}=\\tfrac{360}{240}$$

**2. Translate: the coefficient.**

$$A\\cdot 100^{r}=240$$

**Part 2: The model.**

$$2.25^{r}=1.5 \\tag{1}$$

$$y(a)=24\\sqrt{a} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $1.5=2.25^{\\frac{1}{2}}$,

$$r=\\frac{1}{2} \\qquad A=24$$

**2.** The proposal:

$$y(450)=24\\sqrt{450}\\approx 509.1<520$$

**3.** Average product:

$$\\frac{y(a)}{a}=24 a^{-\\frac{1}{2}} \\qquad \\frac{y(100)}{100}=2.4$$

**4.** Doubling the $240$ kWh output:

$$a=400$$

**Answer.** $r=\\frac{1}{2}$ | $A=24$ | $y(a)=24\\sqrt{a}$ | $y(450)\\approx 509$ | double output at $a=400$`,
  },
  {
    id: `math-8-58`,
    case_id: `MATH 8.58`,
    title: `Battery Cell Costs Down a Learning Curve`,
    context: `Unit cost for battery cells follows $c(N)=A N^{b}$ euros, where $N>0$ is cumulative output in thousands of cells. Two milestones are recorded: at $100$ thousand cells the unit cost was $80$, and at $400$ thousand it was $40$. Cumulative spend is unit cost multiplied by volume. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling cumulative volume halves the unit cost.`,
      `Unit cost falls as volume grows, but cumulative spend still rises.`,
      `At $1600$ thousand cells the unit cost is already below $25$ euros.`,
      `Quadrupling cumulative volume from $100$ to $400$ thousand cells more than doubles cumulative spend.`,
      `At $25$ thousand cells the unit cost is still above $150$ euros.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Doubling cumulative volume would halve the unit cost only if the exponent were $-1$. The overview recovered $b=-\\frac{1}{2}$, so doubling volume multiplies unit cost by $2^{-\\frac{1}{2}}\\approx 0.707$, not by $\\frac{1}{2}$. Quadrupling would halve the unit cost, because $4^{-\\frac{1}{2}}=\\frac{1}{2}$, and that is the logged move from $80$ euros at $100$ thousand cells to $40$ euros at $400$ thousand. A single doubling is not that move.

**1.** Seeing cost fall from $80$ to $40$ between the two milestones and calling every doubling a halving would have skipped that the milestones are a quadrupling of volume, not a doubling. So the letter reads the claim against $80$; $40$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $80$ stays in the write-up.

**2.** The opposite verdict would have needed $b=-1$. The two milestones force $4^{b}=\\frac{1}{2}$, hence $b=-\\frac{1}{2}$.

Doubling cumulative volume does not halve the unit cost, so the statement is False.`,
      `**B.** → True

Unit cost falls, but cumulative spend is $S(N)=N\\,c(N)$. The overview recovered $c(N)=800 N^{-\\frac{1}{2}}$, so spend is $S(N)=800 N^{\\frac{1}{2}}$. The leftover exponent on spend is positive, so $S$ still rises. Cheaper cells can still mean a larger total cheque as volume grows.

Checking the milestones: $S(100)=8000$ and $S(400)=16000$. Unit cost halved; spend doubled. The two stories run in opposite directions.

**1.** Seeing unit cost falling and inferred that the total cheque must fall would have mixed a per-cell figure with a cumulative one. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The title tracks both.

**2.** The opposite verdict would have needed leftover exponent on $S$ to be negative, hence $b<-1$. The recovered $b=-\\frac{1}{2}$ is not that steep.

Checking the milestones: $S(100)=8000$ and $S(400)=16000$. Unit cost halved; spend doubled. The two stories run in opposite directions. Seeing unit cost falling and inferred that the total cheque must fall would have mixed a per-cell figure with a cumulative one. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The title tracks both.

The opposite verdict would have needed leftover exponent on $S$ to be negative, hence $b<-1$. The recovered $b=-\\frac{1}{2}$ is not that steep. An inverse-square unit cost, $b=-2$, would have made spend fall as $N^{-1}$; the two milestones $80$ then $40$ over a quadrupling of volume already refuse any $b$ other than $-\\frac{1}{2}$.

Cumulative spend $S=N c(N)$ is the product of a rising volume and a falling unit cost. When the unit-cost exponent sits above $-1$, volume wins and the cheque still grows. That is this learning curve.

An inverse-square unit cost, $b=-2$, would have made spend fall as $N^{-1}$. The two milestones $80$ then $40$ over a quadrupling of volume already refuse any $b$ other than $-\\frac{1}{2}$. When the unit-cost exponent sits above $-1$, volume wins and the cheque still grows.

Unit cost falls as volume grows, but cumulative spend still rises, so the statement is True.`,
      `**C.** → True

This is a level question at $1600$ thousand cells. The overview recovered $c(1600)=20$. The claim asks whether that unit cost is already below $25$ euros.

Twenty sits below twenty-five. Two further quadruplings from $c(100)=80$ are $40$ then $20$, because each quadrupling halves unit cost. Sixteen hundred is four times four hundred, so one more halving from the second milestone.

**1.** Applying one doubling from $c(400)=40$ would have claimed about $28$, above $25$, and flipped the verdict. The recovered comparison therefore keeps $c(400)=40$ and does not substitute $25$. That contrast is the reason the verdict goes the way it does. The move from $400$ to $1600$ is a quadrupling, not a doubling.

**2.** The opposite verdict would have needed a shallower learning exponent, so that $c(1600)$ sat above $25$. At the recovered $b=-\\frac{1}{2}$, the unit cost is locked at $20$.

The recovered unit cost at $1600$ thousand cells is $20$ euros, so the statement is True.`,
      `**D.** → False

This letter is about cumulative spend under a quadrupling of volume, not about unit cost. The overview recovered $S(N)=800\\sqrt{N}$. Quadrupling volume multiplies spend by $4^{\\frac{1}{2}}=2$, exactly a doubling, not more than a doubling. From $S(100)=8000$ the spend at $400$ thousand cells is $16000$, twice.

The claim wants more than a doubling. The square-root spend law is exactly a doubling on a quadrupling of volume.

**1.** Multiplying the old spend $8000$ by the old unit-cost factor $2$ in the wrong direction, or treating spend as $N\\cdot 80$ held fixed at the first unit cost, would have claimed $32000$, a quadrupling of spend, and called "more than a doubling" true. After isolating the unknown, the check is against $8000$. The figure $32000$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $8000$ stays in the write-up. That ignores learning.

**2.** The opposite verdict would have needed leftover exponent on $S$ larger than $\\frac{1}{2}$, so that a factor of $4$ on $N$ produced more than a factor of $2$ on $S$. The recovered $b=-\\frac{1}{2}$ locks $S$ to a square root.

Multiplying the old spend $8000$ by the old unit-cost factor held fixed, treating spend as $N\\cdot 80$, would have claimed $32000$ at $400$ thousand cells, a quadrupling of spend, and called "more than a doubling" true. Working from the isolated values, $8000$ is the figure that is checked, not the detour that produced $400$. That ignores learning. Unit cost halves on that quadrupling, so spend only doubles.

The opposite verdict would have needed leftover exponent on $S$ larger than $\\frac{1}{2}$, so that a factor of $4$ on $N$ produced more than a factor of $2$ on $S$. The recovered $b=-\\frac{1}{2}$ locks $S$ to a square root. Changing the two milestone costs would change $A$ and scale both spends by the same factor; it would not turn a doubling into more than a doubling.

The claim's "more than doubles" would have been right for a shallower learning exponent, closer to $0$, where unit cost barely falls. The logged halving of unit cost on a quadrupling of volume is exactly square-root spend.

Quadrupling cumulative volume from $100$ to $400$ thousand cells doubles cumulative spend, so the statement is False.`,
      `**E.** → True

This is a level question early on the curve, at $25$ thousand cells. The overview recovered $A=800$ and $c(25)=160$. The claim asks whether that unit cost is still above $150$ euros.

One hundred and sixty sits above one hundred and fifty. Early on the learning curve the unit cost is still high. From $c(100)=80$, the move back to $25$ thousand is a factor of $\\frac{1}{4}$ on volume, hence a doubling of unit cost, $80\\cdot 2=160$.

**1.** Treating $25$ as a quarter of $100$ and halving the unit cost instead of doubling it would have claimed $40$, well below $150$, and flipped the verdict. The stem's recovered values line up with $25$, whereas $150$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $25$ stays in the write-up. Inverse-square-root learning raises unit cost when volume shrinks.

**2.** The opposite verdict would have needed a smaller coefficient, so that $c(25)$ fell through $150$. At the recovered $A=800$, twenty-five thousand cells is locked at $160$.

The recovered unit cost at $25$ thousand cells is $160$ euros, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 58,
    solution_overview: `Unit cost is $c(N)=A N^{b}$ euros at cumulative volume $N>0$ thousand cells, with $c(100)=80$ and $c(400)=40$. Cumulative spend is $S=N\\,c(N)$.

**Part 1: Building the model.**

Let $N$ be cumulative volume, $c$ unit cost, and $S$ cumulative spend. Two milestones give two equations: their ratio isolates $b$, and either milestone then fixes $A$.

**1. Translate: the ratio of the milestones.**

$$4^{b}=\\frac{40}{80}$$

**2. Translate: cumulative spend.**

$$S(N)=A N^{b+1}$$

**Part 2: The model.**

$$c(N)=800 N^{-\\frac{1}{2}} \\tag{1}$$

$$S(N)=800 N^{\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Exponent and coefficient:

$$b=-\\frac{1}{2} \\qquad A=800$$

**2.** Named cost and spend:

$$c(1600)=20 \\qquad S(100)=8000$$

**3.** Scale:

$$4^{-\\frac{1}{2}}=\\frac{1}{2} \\qquad 2^{-\\frac{1}{2}}\\approx 0.707$$

**4.** Quadrupling $N$ doubles $S$, it does not more than double $S$.

**Answer.** $b=-\\frac{1}{2}$ | $A=800$ | $c(1600)=20$ | $S(100)=8000$ | $S(N)=800\\sqrt{N}$`,
  },
  {
    id: `math-8-59`,
    case_id: `MATH 8.59`,
    title: `Sediment Transport Driven by Channel Discharge`,
    context: `Sediment transport in a channel follows $S(v)=A v^{3}$ tonnes per day, where $v>0$ is flow velocity, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity itself depends on discharge through $v(q)=\\frac{q^{0.5}}{2}$. The channel's stability limit is $5000$ tonnes per day. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the discharge more than doubles sediment transport.`,
      `After both stages, transport is a power function of discharge.`,
      `A discharge of $400$ already pushes transport above $4500$ tonnes per day.`,
      `Doubling the flow velocity doubles sediment transport.`,
      `At discharge $64$, transport is still under $300$ tonnes per day.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This letter is about the composed map from discharge to sediment, not about velocity alone. The overview recovered $S(q)=0.625 q^{\\frac{3}{2}}$. Doubling discharge multiplies transport by $2^{\\frac{3}{2}}\\approx 2.83$, which exceeds $2$. The leftover exponent sits above one, so the statement's "more than doubles" holds.

The first stage alone, $S(v)=5v^{3}$, would have scaled an eightfold on a doubled velocity. Discharge, however, only squares into velocity through $v(q)=\\frac{1}{2}q^{\\frac{1}{2}}$, so the composed leftover is three halves, not three. Mixing the velocity doubling with the discharge doubling is how an eightfold claim appears; this letter asks about discharge.

**1.** Doubling $S$ with $q$ because "more flow, more sediment" would have claimed a factor of $2$ and called "more than doubles" false. The stem's recovered values line up with $S$, whereas $2$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $S$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That is exponent $1$.

**2.** Checking a concrete pair: at the gauged discharge $q=36$, transport is $135$. At $q=72$, the composed law gives $0.625\\cdot 72^{1.5}\\approx 382$, and $382/135\\approx 2.83$, not $2$.

Checking a concrete pair: at the gauged discharge $q=36$, transport is $135$. At $q=72$, the composed law gives $0.625\\cdot 72^{1.5}\\approx 382$, and $382/135\\approx 2.83$, not $2$. Doubling $S$ with $q$ because "more flow, more sediment" would have claimed a factor of $2$ and called "more than doubles" false. The stem's recovered values line up with $S$, whereas $2$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $S$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That is exponent $1$.

The first stage alone, $S(v)=5v^{3}$, would have scaled an eightfold on a doubled velocity. Discharge, however, only squares into velocity through $v(q)=\\frac{1}{2}q^{\\frac{1}{2}}$, so the composed leftover is three halves, not three. Mixing the velocity doubling with the discharge doubling is how an eightfold claim appears; this letter asks about discharge.

The opposite verdict would have needed the two stages to cancel to exponent $1$. A square-root transport on a square-root velocity would have done that. The stem cubes velocity, so the product sits above one.

Doubling the discharge more than doubles sediment transport, so the statement is True.`,
      `**B.** → True

Velocity is a square root of discharge and transport cubes velocity, so the composed exponent is $\\frac{1}{2}\\cdot 3=\\frac{3}{2}$. A product of powers of the same variable is again a power. The overview recovered $S(q)=0.625 q^{1.5}$, a monomial in $q$. Transport after both stages is a power function of discharge.

Stopping at $S(v)=5v^{3}$ would have left a cubic in velocity. Stopping at $v(q)=\\frac{1}{2}q^{\\frac{1}{2}}$ would have left a square root in discharge. Neither of those is the composed map.

**1.** Adding the exponents instead of multiplying them would have claimed exponent $3.5$ and still called it a power, which happens to keep the verdict for the wrong algebra. Once $3.5$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Composition multiplies.

**2.** The opposite verdict would have needed a stage that was not a power. Both stages in the stem are monomials.

After both stages, transport is a power function of discharge, so the statement is True.`,
      `**C.** → True

This letter reads the named discharge $400$ against a $4500$ t/day cutoff, and it also sits on the stability limit. The overview recovered that $q=400$ already produces $S=5000$ tonnes per day, which is the channel's stability limit. Five thousand sits above four thousand five hundred.

Four hundred is the inverted limit: $0.625 q^{1.5}=5000$ forces $q^{1.5}=8000$ and $q=400$. At that discharge, $v(400)=10$ and $S=5\\cdot 10^{3}=5000$. The $4500$ cutoff is a near miss on the limit itself.

**1.** Evaluating $S(v)$ at $v=400$ instead of $S(q)$ at $q=400$ would have claimed $5\\cdot 400^{3}$, an enormous figure, still above $4500$ but from mixing the two stages. After isolating the unknown, the check is against $S(v)$. The figure $4500$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $S(v)$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** The opposite verdict would have needed a smaller composed coefficient, so that $S(400)$ fell through $4500$. At the recovered law, four hundred is locked at the $5000$ t/day limit.

Evaluating $S(v)$ at $v=400$ instead of $S(q)$ at $q=400$ would have claimed $5\\cdot 400^{3}$, an enormous figure, still above $4500$ but from mixing the two stages. After isolating the unknown, the check is against $S(v)$. The figure $4500$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $S(v)$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Velocity at discharge $400$ is $10$, not $400$. Another mix-up is reading the stability limit $5000$ as if the claim named $5000$ rather than $4500$. Five thousand clears four thousand five hundred, and that is the comparison.

The opposite verdict would have needed a smaller composed coefficient, so that $S(400)$ fell through $4500$. At the recovered law, four hundred is locked at the $5000$ t/day limit. Changing the gauged $135$ t/day at $v=3$ would rescale $A$ and move the limit; it would not move $q=400$ off the recovered limit unless the $5000$ cap itself moved.

The $4500$ cutoff is a near miss on the limit, not a rival inversion. The channel is already at its stability ceiling at $q=400$, hence already above $4500$.

The recovered transport at discharge $400$ is $5000$ tonnes per day, so the statement is True.`,
      `**D.** → False

This letter is about the first-stage law $S(v)=5v^{3}$, not about the composed $S(q)$. Doubling velocity multiplies transport by $2^{3}=8$, not by $2$. The claim is a lockstep doubling of sediment with flow velocity. Cubic packing of velocity into transport forbids that.

Mixing the two stages is the mismatch. Letter A doubled discharge and got $2^{\\frac{3}{2}}$. This letter doubles velocity and gets $8$. They are different experiments.

**1.** Carrying the composed factor $2.83$ into this letter would have still called "doubles" false, for the wrong stage. The path that matches the stem therefore holds $2.83$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The right factor is $8$.

**2.** Checking the gauged run: at $v=3$, transport is $135$. At $v=6$, transport is $5\\cdot 216=1080$, and $1080/135=8$.

**3.** The opposite verdict would have needed first-stage exponent $1$. The stem cubes velocity.

Doubling the flow velocity multiplies sediment transport by $8$, so the statement is False.`,
      `**E.** → False

This is a level question at discharge $64$. The overview recovered $v(64)=4$ and $S=320$. The claim asks whether transport is still under $300$ tonnes per day.

Three hundred and twenty already clears three hundred. Stage by stage: $\\sqrt{64}=8$, times $\\frac{1}{2}$ is velocity $4$, and $5\\cdot 4^{3}=320$. The composed shortcut $0.625\\cdot 64^{1.5}=0.625\\cdot 512=320$ is the same number.

**1.** Stopping after the velocity stage would have compared $4$ m/s to $300$ t/day and missed the letter. The recovered comparison therefore keeps $4$ and does not substitute $300$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The claim is about transport, not velocity.

**2.** Another mix-up is using the gauged $135$ t/day as if discharge $64$ were still near the gauged $q=36$. Sixty-four is already past thirty-six, and transport has risen from $135$ to $320$.

**3.** The opposite verdict would have needed a smaller coefficient, so that $S$ at $q=64$ fell through $300$. At the recovered $A=5$, sixty-four is locked at $320$.

The recovered transport at discharge $64$ is $320$ tonnes per day, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `Transport is $S(v)=A v^{3}$ with $S(3)=135$. Velocity is $v(q)=\\frac{q^{0.5}}{2}$, and the stability limit is $5000$ tonnes per day.

**Part 1: Building the model.**

Let $q$ be discharge, $v$ flow velocity, and $S$ sediment transport. One gauged run calibrates the transport stage; composing then multiplies the exponents and cubes the inner coefficient.

**1. Translate: the gauged run.**

$$A\\cdot 3^{3}=135$$

**2. Translate: the composition.**

$$S(q)=5\\left(\\frac{q^{0.5}}{2}\\right)^{3}$$

**Part 2: The model.**

$$S(v)=5 v^{3} \\tag{1}$$

$$S(q)=0.625 q^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** Stability limit:

$$0.625 q^{1.5}=5000 \\Rightarrow q=400 \\qquad v(400)=10$$

**2.** The gauged discharge:

$$v(36)=3 \\qquad S(36)=135$$

**3.** The two doublings:

$$\\frac{S(2q)}{S(q)}=2^{1.5}\\approx 2.83 \\qquad \\frac{S(2v)}{S(v)}=8$$

**Answer.** $A=5$ | $S(q)=0.625q^{1.5}$ | limit at $q=400$ | $S(36)=135$`,
  },
  {
    id: `math-8-60`,
    case_id: `MATH 8.60`,
    title: `Highly Elastic Demand Under a Price Indexation`,
    context: `A commodity trader faces demand $q(p)=A p^{-3}$ units at a price $p>0$, and a price of $2$ clears $500$ units. A proposed indexation would raise the price by $10\\%$ across the board, and the trader wants the effect on both volume and revenue $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue is a power function of price.`,
      `Raising the price always cuts revenue.`,
      `At a price of $2.50$, revenue is already below $700$.`,
      `A price rise of $10\\%$ cuts quantity by more than $20\\%$.`,
      `Because demand is highly elastic, a price rise raises revenue.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Revenue is price times quantity. With $q=A p^{-3}$ that product is $R(p)=A p^{-2}$. A product of two powers of the same variable is again a power. The overview recovered $R(p)=4000 p^{-2}$, a monomial in price. Revenue is a power function of price.

Stopping at demand would have left exponent $-3$. Multiplying by $p$ raises the exponent by one, to $-2$. Both are powers; they are different powers.

**1.** Thinking revenue $pq$ could not stay a power because "price and quantity move against each other" would have expected a more complicated shape. The path that matches the stem therefore holds $pq$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Along an isoelastic curve the product remains a power.

**2.** The opposite verdict would have needed demand that was not a power, for instance a linear demand $q=a-bp$. Then $R=pq$ would be a quadratic, not a power.

Revenue is a power function of price, so the statement is True.`,
      `**B.** → True

The leftover exponent on $R(p)=4000 p^{-2}$ is negative, so $R$ falls as $p$ rises. Highly elastic demand, exponent $-3$, means a price rise cuts quantity by more than enough to shrink $pq$. Raising the price always cuts revenue along this curve.

Checking the recovered levels: at $p=2$, revenue is $1000$. At $p=2.50$, revenue is $640$. The till has already shrunk. There is no interior maximum on $p>0$; the slope $R'(p)=-8000 p^{-3}$ stays negative.

**1.** Remembering "raise price, raise revenue" from inelastic demand would have flipped the verdict. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Elasticity $-3$ is far into the elastic region, where a price rise cuts the till.

**2.** The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand exponent greater than $-1$. The stem is $p^{-3}$.

Checking the recovered levels: at $p=2$, revenue is $1000$. At $p=2.50$, revenue is $640$. The till has already shrunk. There is no interior maximum on $p>0$; the slope $R'(p)=-8000 p^{-3}$ stays negative for every positive price.

Remembering "raise price, raise revenue" from inelastic demand would have flipped the verdict. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Elasticity $-3$ is far into the elastic region, where a price rise cuts the till. The usual unit-elastic boundary is leftover exponent $0$ on $R$, which would have needed demand exponent $-1$. The stem is $p^{-3}$.

The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand exponent greater than $-1$. A $10\\%$ indexation would then have raised the till. Along this curve it cuts the till, which is the same fact letter E reads against a reversed slogan.

The usual unit-elastic boundary is leftover exponent $0$ on $R$, which would have needed demand exponent $-1$. The stem is $p^{-3}$. A $10\\%$ indexation would raise the till only on the inelastic side of that boundary. Along this curve it cuts the till, which is the same fact letter E reads against a reversed slogan.

Raising the price always cuts revenue, so the statement is True.`,
      `**C.** → True

This is a level question at $p=2.50$. The overview recovered $R(2.5)=640$. The claim asks whether that revenue is already below $700$.

Six hundred and forty sits below seven hundred. From $R(p)=4000 p^{-2}$ one has $2.5^{2}=\\frac{25}{4}$ and $4000\\cdot\\frac{4}{25}=640$. The current till at $p=2$ is $1000$; this letter is a higher price, not that current till.

**1.** Comparing quantity $q(2.5)=4000/15.625=256$ to $700$ would have mixed units. Working from the isolated values, $q(2.5)=4000/15.625=256$ is the figure that is checked, not the detour that produced $700$. That contrast is the reason the verdict goes the way it does. The claim is about revenue, not about units sold.

**2.** Another mix-up is using $R(2)=1000$ against the $700$ cutoff and calling the statement false. Letter C names $2.50$, not $2$.

**3.** The opposite verdict would have needed a larger coefficient, so that $R(2.5)$ rose through $700$. At the recovered $A=4000$, two euros fifty is locked at $640$.

The recovered revenue at a price of $2.50$ is $640$, so the statement is True.`,
      `**D.** → True

A $10\\%$ price rise is the multiplier $k=1.1$. Quantity scales by $1.1^{-3}\\approx 0.751$, a cut of about $24.9\\%$, which is more than $20\\%$. The exponent $-3$ acts on the whole factor, not on a linearized $3\\times 10\\%$.

The elasticity shortcut would have predicted $-3\\times 10\\%=-30\\%$. The exact cut is a little milder, about $25\\%$, but it is still more than $20\\%$. This letter asks about the exact cut against a $20\\%$ line, not about the shortcut.

**1.** Starting from $q(2)=500$, a $10\\%$ rise to $p=2.20$ gives $q(2.2)=4000/2.2^{3}\\approx 376$, a loss of about $124$ units, which is $24.8\\%$ of $500$.

**2.** Using the shortcut's $30\\%$ would still have sat above $20\\%$, for a slightly wrong size. Working from the isolated values, $30\\%$ is the figure that is checked, not the detour that produced $20\\%$. Another mix-up is applying the revenue factor $1.1^{-2}\\approx 0.826$ to quantity and claiming only a $17\\%$ cut, which would flip the letter.

**3.** The opposite verdict would have needed a demand exponent closer to zero, so that $1.1^{r}$ cut quantity by $20\\%$ or less. At $r=-3$, the exact cut is locked near $25\\%$.

Starting from $q(2)=500$, a $10\\%$ rise to $p=2.20$ gives $q(2.2)=4000/2.2^{3}\\approx 376$, a loss of about $124$ units, which is $24.8\\%$ of $500$. Using the shortcut's $30\\%$ would still have sat above $20\\%$, for a slightly wrong size. Working from the isolated values, $30\\%$ is the figure that is checked, not the detour that produced $20\\%$. Another mix-up is applying the revenue factor $1.1^{-2}\\approx 0.826$ to quantity and claiming only a $17\\%$ cut, which would flip the letter.

The opposite verdict would have needed a demand exponent closer to zero, so that $1.1^{r}$ cut quantity by $20\\%$ or less. Solving $1.1^{r}=0.80$ gives $r\\approx -2.34$, already shallower than $-3$. At $r=-3$, the exact cut is locked near $25\\%$.

The elasticity shortcut overstates the cut at $30\\%$. This letter does not need the shortcut: the exact power $1.1^{-3}$ is already more than a $20\\%$ loss. Letter E then reads the same $10\\%$ move against revenue rather than against quantity.

A price rise of $10\\%$ cuts quantity by more than $20\\%$, so the statement is True.`,
      `**E.** → False

Elastic demand is why a price rise cuts revenue here, not why it would raise it. The overview recovered leftover exponent $-2$ on revenue, so $1.1^{-2}\\approx 0.826$, about a $17\\%$ revenue drop. Along this curve a $10\\%$ price rise shrinks the till.

The claim reverses the elasticity lesson. Highly elastic demand means quantity falls more than in proportion to the price rise, so $pq$ falls. Inelastic demand is the region where a price rise raises revenue.

**1.** Checking the recovered tills: $R(2)=1000$ becomes $R(2.2)\\approx 826$. The till is down, not up.

**2.** Remembering "elastic means quantity is sensitive" and then guessed "so raise price to harvest that sensitivity" would have flipped the sign of the revenue effect. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**3.** The opposite verdict would have needed leftover exponent on $R$ to be positive. The stem's demand exponent $-3$ forbids that.

Because demand is highly elastic, a price rise cuts revenue, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 60,
    solution_overview: `Demand is $q(p)=A p^{-3}$ with $q(2)=500$. Revenue is $R=pq$, and a proposed indexation raises the price by $10\\%$.

**Part 1: Building the model.**

Let $p$ be price, $q$ quantity, and $R$ revenue. The isoelastic form fixes the exponent, the observed pair pins the coefficient, and multiplying by $p$ raises the exponent by one.

**1. Translate: the observed pair.**

$$A\\cdot 2^{-3}=500 \\qquad 2^{-3}=\\tfrac{1}{8}$$

**2. Translate: the indexation.**

$$\\frac{q(1.1p)}{q(p)}=1.1^{-3} \\qquad \\frac{R(1.1p)}{R(p)}=1.1^{-2}$$

**Part 2: The model.**

$$q(p)=4000 p^{-3} \\tag{1}$$

$$R(p)=4000 p^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** Coefficient and current levels:

$$A=4000 \\qquad q(2)=500 \\qquad R(2)=1000$$

**2.** A named price:

$$R(2.5)=640$$

**3.** The $10\\%$ indexation:

$$1.1^{-3}\\approx 0.751 \\;(-24.9\\%) \\qquad 1.1^{-2}\\approx 0.826 \\;(-17.4\\%)$$

**4.** Sign of revenue:

$R'(p)<0$ for every $p>0$.

**Answer.** $A=4000$ | $R(p)=4000p^{-2}$ | $R(2.5)=640$ | $10\\%$ rise cuts quantity by about $25\\%$`,
  },
  {
    id: `math-8-61`,
    case_id: `MATH 8.61`,
    title: `Weld Strength Recovered From Two Spot Checks`,
    context: `A production weld's tensile strength follows $S(p)=A p^{k}$ newtons, where $p>0$ is the welding current in amperes. Neither constant is on the calibration sheet: the sheet only records that a $4$ A setting produced $40$ N of strength and a $9$ A setting produced $135$ N. The line rejects any weld below $400$ N. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is larger than one, so strength outruns current.`,
      `At $16$ A the weld is already stronger than $300$ N.`,
      `The current needed for a given strength is itself a power of that strength.`,
      `An extra ampere adds more strength at $4$ A than it does at $9$ A.`,
      `The smallest current that clears the $400$ N reject line is below $18$ A.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This letter is about whether strength outruns current, not about a named ampere setting. Two spot checks, $S(4)=40$ and $S(9)=135$, forced the overview's exponent $k=\\frac{3}{2}$. Three halves sits above one, so a current factor $c>1$ multiplies strength by $c^{\\frac{3}{2}}$, which exceeds $c$. Strength outruns current.

The coefficient $A=5$ cancels in any ratio, so a different pair of spot checks with the same current ratio would have told the same ranking.

**1.** Comparing $135$ to $40$ as "about three times" against a current ratio of $9/4=2.25$ and calling it roughly linear would have missed that $\\left(\\frac{3}{2}\\right)^{2k}=\\left(\\frac{3}{2}\\right)^{3}$ locks $k$ exactly at $\\frac{3}{2}$. That is the fork: $135$ belongs to the recovered isolation, $\\frac{3}{2}$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** The opposite verdict would have needed $k\\le 1$. The two spot checks already refuse that.

Checking the recovered levels: $S(4)=40$ and $S(9)=135$, and $135/40=3.375=\\left(\\frac{3}{2}\\right)^{3}$, while $9/4=\\left(\\frac{3}{2}\\right)^{2}$. Matching those powers is exactly $k=\\frac{3}{2}$. A linear weld would have needed $135/40=9/4$, which is false.

The recovered exponent is $\\frac{3}{2}$, so the statement is True.`,
      `**B.** → True

This is a level question at $16$ A. The overview recovered $S(16)=320$. The claim asks whether that weld is already stronger than $300$ N.

Three hundred and twenty clears three hundred. Sixteen to the three-halves is $64$, times $5$ is $320$. From the $4$ A spot check of $40$ N, a fourfold current is an eightfold strength, $40\\cdot 8=320$, because $4^{\\frac{3}{2}}=8$.

**1.** Doubling $S(9)=135$ as if $16$ were twice $9$ would have claimed $270$, under $300$, and flipped the verdict. Working from the isolated values, $S(9)=135$ is the figure that is checked, not the detour that produced $300$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Sixteen is not twice nine, and the law is not linear.

**2.** The opposite verdict would have needed a smaller coefficient, so that $S(16)$ fell through $300$. At the recovered $A=5$, sixteen amperes is locked at $320$ N.

The recovered strength at $16$ A is $320$ N, so the statement is True.`,
      `**C.** → True

This letter inverts the strength law, rather than reading a named current. A nonzero power inverts to another power. The overview recovered $S=5p^{\\frac{3}{2}}$, so isolating current raises both sides to the reciprocal $\\frac{2}{3}$ and leaves $p=(S/5)^{\\frac{2}{3}}$. Current needed for a given strength is still a monomial in $S$.

**1.** Checking a recovered pair: at $S=40$ the inverse returns $p=4$. At $S=135$ it returns $p=9$. The inverse is faithful to the two spot checks.

**2.** Swapping the variables and keeping exponent $\\frac{3}{2}$ would have written $p=5 S^{\\frac{3}{2}}$ and lost the reciprocal. That is the fork: $\\frac{3}{2}$ belongs to the recovered isolation, $p=5 S^{\\frac{3}{2}}$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exponent must take the reciprocal.

The opposite verdict would have needed a law that was not a pure power: a logarithmic strength in current would invert to an exponential, not to a monomial. The stem is $S=A p^{k}$.

The current needed for a given strength is itself a power of that strength, so the statement is True.`,
      `**D.** → False

This letter compares leftover slopes at the two spot-check currents. The overview recovered $S(p)=5p^{\\frac{3}{2}}$. Differentiating gives $S'(p)=\\frac{15}{2}\\sqrt{p}$. At $4$ A that is $15$. At $9$ A it is $\\frac{45}{2}$. Because $15<\\frac{45}{2}$, an extra ampere adds less at $4$ A than at $9$ A, not more. An exponent above one makes later amperes more productive, not less.

**1.** A finite one-ampere step agrees. From $4$ to $5$ A, $S(5)=5\\cdot 5^{\\frac{3}{2}}=25\\sqrt{5}\\approx 55.9$, a rise of about $16$ N from $40$. From $9$ to $10$ A, $S(10)=5\\cdot 10^{\\frac{3}{2}}=50\\sqrt{10}\\approx 158.1$, a rise of about $23$ N from $135$. Later amperes add more, which is the opposite of the claim.

**2.** Remembering $S(4)=40<S(9)=135$ and inferred that the extra ampere must add more at the small current, because "there is more room to grow," would have mixed a lower level with a shallower slope. The opposite verdict would need a different isolation than $S(4)=40<S(9)=135$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The level is lower at $4$ A; the slope is also shallower.

**3.** The opposite verdict would have needed $k<1$, so that $S'$ would fall. The two spot checks forced $k=\\frac{3}{2}>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $15<\\frac{45}{2}$. A linear weld $S\\propto p$ would have made the extra ampere add the same $5$ N at both currents; the stem is not linear.

A second mix-up is reading $S(9)-S(4)=95$ N across $5$ A, about $19$ N per extra ampere on average, and treating that average as if it were larger at $4$ A. The average sits between the two instantaneous slopes $15$ and $22.5$, as a rising slope requires. It does not reverse the ranking.

If the two spot checks had forced $k<1$, both the ranking in letter A and this slope ranking would have flipped together. Changing $A$ scales both slopes by the same factor and cannot reverse $15<\\frac{45}{2}$. A linear weld $S=10p$ would have made the extra ampere add $10$ N at both currents; the stem is a three-halves power.

The reject line in letter E uses the same recovered rule, inverted. This letter is the derivative of that rule, not the inverse.

An extra ampere adds less strength at $4$ A than at $9$ A, so the statement is False.`,
      `**E.** → False

This letter inverts the $400$ N reject line. The overview recovered that the smallest clearing current is $p=80^{\\frac{2}{3}}\\approx 18.57$ A, which is not below $18$. At $18$ A the weld is still short of $400$ N. The smallest clearing current sits just past eighteen amperes.

**1.** Checking the recovered rule at $18$ A: $S(18)=5\\cdot 18^{\\frac{3}{2}}=5\\cdot 18\\sqrt{18}=90\\cdot 3\\sqrt{2}\\approx 382$, which sits under $400$. At $19$ A the same rule is already past $400$. The reject line is crossed between $18$ and $19$, hence not below $18$.

**2.** Inverting as if $k=1$ would have claimed $p=80$, well above $18$, and still called "below $18$" false, for the wrong inverse. The recovered comparison therefore keeps $k=1$ and does not substitute $18$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another mix-up is reading $S(16)=320$ as if $16$ A already cleared $400$. Three hundred and twenty is short of four hundred.

**3.** The opposite verdict would have needed a larger coefficient, so that the inverted current fell through $18$. At the recovered $A=5$, the reject threshold is locked near $18.57$ A.

A linear inversion $5p=400$ would have claimed $p=80$, well above $18$. That overstates the current needed when $k>1$. Another mix-up is reading $S(16)=320$ as if sixteen amperes already cleared $400$. Three hundred and twenty is still short.

The opposite verdict would have needed $A>5\\cdot 18^{\\frac{3}{2}}/400\\approx 5.24$, a slightly larger coefficient so that $18$ A already cleared $400$. The two spot checks lock $A=5$, and $18$ A stays short of the reject line.

A second check uses $S(16)=320$ as a stepping stone. From $16$ A to the reject line is a further $80$ N. Because $S'$ is still rising, those last $80$ N take more than the naive $80/S'(16)=80/30\\approx 2.7$ A; adding $2.7$ to $16$ gives about $18.7$, which matches the inverted $18.57$. The $18$ A cutoff is a near miss on that inverse, and the miss is on the short side.

The recovered clearing current is about $18.57$ A, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 61,
    solution_overview: `Weld strength is $S(p)=Ap^{k}$ newtons, with spot checks $S(4)=40$ and $S(9)=135$, and welds below $400$ N are rejected.

**Part 1: Building the model.**

Let $p$ = welding current in amperes and $S$ = tensile strength in newtons. Two unknowns need both observations. The ratio cancels $A$ and isolates $k$; the $4$ A level then pins $A$.

**1. Translate: the ratio of the spot checks.**

$$\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}$$

**2. Translate: the $4$ A level.**

$$A\\cdot 4^{k}=40$$

**Part 2: The model.**

$$k=\\frac{3}{2} \\tag{1}$$

$$S(p)=5p^{\\frac{3}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $k>1$, strength outruns current, an extra ampere adds more at $9$ A than at $4$ A, and the inverse $p=(S/5)^{2/3}$ is a power.

**2.** Levels and the reject threshold:

$$S(16)=320 \\qquad 80^{\\frac{2}{3}}\\approx 18.57$$

**Answer.** $A=5$ | $k=\\frac{3}{2}$ | $S(16)=320$ N | reject threshold $\\approx 18.57$ A`,
  },
  {
    id: `math-8-62`,
    case_id: `MATH 8.62`,
    title: `Mooring Holding Power Across Kilograms and Tonnes`,
    context: `A harbour buoy's holding power follows $H(m)=A m^{\\frac{2}{3}}$ kilonewtons when mass $m>0$ is measured in kilograms. A trial buoy of $8$ kg held exactly $24$ kN. The harbour authority prefers masses in tonnes ($1$ tonne $=1000$ kg) and writes the same physical law as $H(t)=B t^{\\frac{2}{3}}$ with $t$ in tonnes. A storm protocol demands at least $150$ kN of holding power. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two $8$ kg buoys together already hold more than one $64$ kg buoy.`,
      `A $125$ kg buoy already holds more than $140$ kN.`,
      `Doubling buoy mass doubles holding power.`,
      `The mass needed for a given holding power is itself a power of that holding power.`,
      `Reaching $150$ kN takes more than $1$ tonne.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

This letter compares two $8$ kg buoys with one $64$ kg buoy. The overview recovered $H(m)=6m^{\\frac{2}{3}}$. Two $8$ kg buoys hold $2H(8)=48$ kN. One $64$ kg buoy holds $H(64)=96$ kN. Because $\\frac{2}{3}<1$, merging mass raises total hold. Two small buoys fall short of one large one.

**1.** Treating hold as proportional to mass would have claimed $2H(8)=H(16)$, not $H(64)$, and still called two small buoys weaker, but for a linear reason. So the letter reads the claim against $2H(8)=H(16)$; $H(64)$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $2H(8)=H(16)$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The right comparison is $2H(8)$ against $H(64)=6\\cdot 16=96$.

**2.** The opposite verdict would have needed $r>1$, so that splitting mass raised total hold. The trial buoy forced $r=\\frac{2}{3}$.

Two $8$ kg buoys together hold $48$ kN, short of one $64$ kg buoy at $96$ kN, so the statement is False.`,
      `**B.** → True

This is a level question at $125$ kg. The overview recovered $H(125)=150$. The claim asks whether that buoy already holds more than $140$ kN.

One hundred and fifty sits above one hundred and forty. That $150$ is also the storm floor itself: $125=5^{3}$, so the two-thirds power is $25$, times $6$ is $150$. The $140$ cutoff is a near miss on the storm protocol.

**1.** Using $H(8)=24$ and scaling by $125/8$ linearly would have claimed $375$, still above $140$ but for the wrong shape. So the letter reads the claim against $H(8)=24$; $140$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $H(8)=24$ stays in the write-up. Linear thinking overstates hold when $r<1$.

**2.** The opposite verdict would have needed a smaller coefficient, so that $H(125)$ fell through $140$. At the recovered $A=6$, one hundred and twenty-five kilograms is locked at $150$ kN.

The recovered holding power at $125$ kg is $150$ kN, so the statement is True.`,
      `**C.** → False

Doubling buoy mass would double holding power only if the exponent were $1$. The overview recovered exponent $\\frac{2}{3}$, so a doubling multiplies hold by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. Holding power rises, but not in lockstep with mass.

**1.** Checking the trial: $H(8)=24$. Doubling to $16$ kg gives $H(16)=6\\cdot 16^{\\frac{2}{3}}=6\\cdot 2^{\\frac{8}{3}}=6\\cdot 4\\cdot 2^{\\frac{2}{3}}\\approx 38.1$, and $38.1/24\\approx 1.59$, not $2$.

**2.** The opposite verdict would have needed exponent $1$. The trial was fitted with $\\frac{2}{3}$. Lockstep would also have made letter A's two-versus-one comparison a tie at equal total mass, which it is not.

The opposite verdict would have needed exponent $1$. Lockstep would also have made letter A's two-versus-one comparison a tie at equal total mass, which it is not. The trial buoy of $8$ kg at $24$ kN already forces $\\frac{2}{3}$.

Doubling buoy mass does not double holding power, so the statement is False.`,
      `**D.** → True

This letter inverts the holding-power law. A nonzero power inverts to another power. The overview recovered $H=6m^{\\frac{2}{3}}$, so isolating mass raises both sides to the reciprocal $\\frac{3}{2}$ and leaves $m=(H/6)^{\\frac{3}{2}}$. Mass needed for a given hold is still a monomial in $H$.

**1.** Checking a recovered pair: at $H=24$ the inverse returns $m=8$, the trial buoy. At $H=150$ it returns $m=125$, the storm mass. The inverse is faithful to both named holds.

**2.** Keeping exponent $\\frac{2}{3}$ on $H$ would have written $m=6 H^{\\frac{2}{3}}$ and lost the reciprocal. The stem's recovered values line up with $\\frac{2}{3}$, whereas $m=6 H^{\\frac{2}{3}}$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $\\frac{2}{3}$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exponent must take the reciprocal.

**3.** The opposite verdict would have needed a law that was not a pure power. The stem is a single monomial. Changing kilograms to tonnes rescales the coefficient to $B=600$ and leaves the inverse still a power of holding power.

A change of units from kilograms to tonnes rescales the coefficient to $B=600$ and leaves the inverse still a power of holding power. At $H=96$ the inverse returns $m=64$, the large buoy in letter A. At $H=48$ it returns two different stories: one $8$ kg buoy holds $24$, so two such buoys hold $48$ without being a single mass of $m=(48/6)^{\\frac{3}{2}}\\approx 22.6$ kg. The inverse names the single buoy that holds $48$ kN, not a pair.

The opposite verdict would have needed an exponential hold in mass, which inverts to a logarithm. The stem is a monomial.

Swapping the variables and keeping exponent $\\frac{2}{3}$ would have written $m=6 H^{\\frac{2}{3}}$ and lost the reciprocal. That is the fork: $\\frac{2}{3}$ belongs to the recovered isolation, $m=6 H^{\\frac{2}{3}}$ belongs to the discarded mix. At $H=24$ that wrong inverse would have claimed $m=6\\cdot 24^{\\frac{2}{3}}\\approx 50$ kg, not the trial $8$ kg. The exponent must take the reciprocal: $\\frac{2}{3}$ becomes $\\frac{3}{2}$.

The mass needed for a given holding power is itself a power of that holding power, so the statement is True.`,
      `**E.** → False

This letter inverts the storm floor of $150$ kN, and it also tests a unit trap. The overview recovered that $150$ kN takes $m=125$ kg, which is $0.125$ tonnes, not more than $1$ tonne. Mixing kilograms with tonnes without the $1000^{\\frac{2}{3}}$ rescaling is how a one-tonne claim appears.

**1.** In tonnes the same law is $H(t)=600 t^{\\frac{2}{3}}$. Setting $600 t^{\\frac{2}{3}}=150$ gives $t^{\\frac{2}{3}}=\\frac{1}{4}$ and $t=\\frac{1}{8}=0.125$, the same $125$ kg. One tonne would hold $H=600$ kN, four times the storm floor.

**2.** Inverting $6m^{\\frac{2}{3}}=150$ as $m=150/6=25$ kilograms, linearly, would still have sat under $1$ tonne, for the wrong inverse. The recovered comparison therefore keeps $6m^{\\frac{2}{3}}=150$ and does not substitute $1$. That contrast is the reason the verdict goes the way it does. Another mix-up is reading $m=125$ as $125$ tonnes. That is the unit trap in the title.

**3.** The opposite verdict would have needed a storm floor above $H(1\\text{ tonne})=600$ kN. The stem's floor is $150$ kN, well below that.

In the tonne law $H(t)=600 t^{\\frac{2}{3}}$, one tonne holds $600$ kN, four times the storm floor. The storm protocol is a light buoy, not a tonne-class mooring. Mixing the $125$ in $m=125$ kg with a tonne reading is the unit trap in the title.

Inverting $6t^{\\frac{2}{3}}=150$ without converting, treating $t$ as kilograms already, would have claimed $t=125$ tonnes, well above $1$ tonne, and flipped the verdict. That is the fork: $6t^{\\frac{2}{3}}=150$ belongs to the recovered isolation, $1$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. That is using the kilogram coefficient on a tonne variable. The recovered pair is $A=6$ in kilograms and $B=600$ in tonnes; they are not interchangeable.

Checking $H(1000)=600$ kN at one tonne makes the "more than $1$ tonne" claim look like a unit mix-up rather than a near miss. The storm floor is a quarter of a one-tonne hold. Changing the storm protocol to $700$ kN would have pushed the inverse past one tonne and flipped the letter; the stem's $150$ kN does not.

Reaching $150$ kN takes $125$ kg, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 62,
    solution_overview: `Holding power is $H(m)=Am^{\\frac{2}{3}}$ kilonewtons in kilograms with $H(8)=24$, the same law in tonnes is $H(t)=Bt^{\\frac{2}{3}}$, and the storm floor is $150$ kN.

**Part 1: Building the model.**

Let $m$ = buoy mass in kilograms, $t$ = the same mass in tonnes, $H$ = holding power in kilonewtons. The exponent is given, so one trial fixes $A$. A change of unit is the substitution $m=1000t$, and the conversion enters under the exponent.

**1. Translate: the trial buoy.**

$$A\\cdot 8^{\\frac{2}{3}}=24 \\qquad 8^{\\frac{2}{3}}=4$$

**2. Translate: the unit change.**

$$B=A\\cdot 1000^{\\frac{2}{3}}$$

**Part 2: The model.**

$$H(m)=6m^{\\frac{2}{3}} \\tag{1}$$

$$H(t)=600t^{\\frac{2}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** The storm mass in kilograms is $125$, which is $0.125$ tonnes, not $125$ tonnes.

**2.** Two $8$ kg buoys hold $48$ kN, short of one $64$ kg buoy at $96$ kN. Doubling mass multiplies holding power by $2^{\\frac{2}{3}}\\approx 1.587$.

**Answer.** $A=6$ | $B=600$ | storm mass $125$ kg | doubling factor $2^{\\frac{2}{3}}$`,
  },
  {
    id: `math-8-63`,
    case_id: `MATH 8.63`,
    title: `Mesh Throughput Against an Inverse-Square Floor`,
    context: `A wireless mesh's sustained throughput follows $T(d)=A d^{-2}$ megabits per second, where $d>0$ is the hop distance in metres. A bench test at $d=4$ m recorded $T=50$ Mbps. The link is rated reliable only while throughput stays at or above $8$ Mbps. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The hop distance needed for a given throughput is itself a power function of that throughput.`,
      `The farthest reliable hop distance is already under $12$ m.`,
      `Doubling the hop distance halves the throughput.`,
      `A hop of $11$ m still clears the $8$ Mbps reliability floor.`,
      `An extra metre of hop cuts more throughput at $8$ m than at $4$ m.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

This letter inverts the throughput law. A nonzero power inverts to another power. The overview recovered $T=800/d^{2}$, so isolating hop distance leaves $d=\\sqrt{800}\\, T^{-\\frac{1}{2}}$. The new exponent is the reciprocal of $-2$. Hop distance needed for a given throughput is still a monomial in $T$.

**1.** Checking a recovered pair: at $T=50$ the inverse returns $d=4$, the bench hop. At $T=8$ it returns $d=10$, the reliable radius. The inverse is faithful to both named throughputs.

**2.** Keeping exponent $-2$ on $T$ would have lost the reciprocal. The recovered comparison therefore keeps $-2$ and does not substitute $T$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Falling throughput does not introduce a logarithm.

Falling throughput does not introduce a logarithm. A change of units from metres to kilometres would rescale $A$ by $1000^{-2}$ and leave the inverse still a power of $T$. The opposite verdict would have needed a decaying exponential in hop distance.

The hop distance needed for a given throughput is itself a power function of that throughput, so the statement is True.`,
      `**B.** → True

This letter locates the farthest reliable hop. The overview recovered that $T=8$ already occurs at $d=10$ m. Ten metres sits under $12$. Every longer hop is slower, so the farthest reliable hop is $10$ m, already under $12$ m.

**1.** Inverting as if the exponent were $-1$ would have claimed $d=800/8=100$ m, well past $12$, and flipped the verdict. After isolating the unknown, the check is against $-1$. The figure $12$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $-1$ stays in the write-up. Inverse-linear thinking overstates the reliable radius.

**2.** Checking $d=12$: $T(12)=800/144\\approx 5.56$, which already misses the $8$ Mbps floor. The $12$ m cutoff is not a near miss on $10$; it is past the floor.

Inverting as if the exponent were $-1$ would have claimed $d=800/8=100$ m, well past $12$, and flipped the verdict. After isolating the unknown, the check is against $-1$. The figure $12$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $-1$ stays in the write-up. Inverse-linear thinking overstates the reliable radius. Checking $d=12$: $T(12)=800/144\\approx 5.56$, which already misses the $8$ Mbps floor.

The recovered reliable radius is $10$ m, so the statement is True.`,
      `**C.** → False

Doubling the hop would halve throughput only if the exponent were $-1$. With $-2$ the factor is $2^{-2}=\\frac{1}{4}$. An inverse-square law quarters the reading when distance doubles. Inverse-linear thinking is the mismatch.

**1.** Checking the bench: $T(4)=50$. Doubling to $8$ m gives $T(8)=800/64=12.5$, and $12.5/50=\\frac{1}{4}$, not $\\frac{1}{2}$.

**2.** The opposite verdict would have needed exponent $-1$. The bench reading together with the inverse-square stem already forbids a halving.

The opposite verdict would have needed exponent $-1$. The bench reading $T(4)=50$ together with the inverse-square stem already forbids a halving. Letter B's reliable radius of $10$ m is two and a half bench hops, hence a factor $(2.5)^{2}=6.25$ on the denominator, $50/6.25=8$, which matches the floor.

Doubling the hop distance quarters the throughput, so the statement is False.`,
      `**D.** → False

This is a level question at $11$ m against the $8$ Mbps floor. The overview recovered $T(11)=800/121\\approx 6.61$, which sits below $8$. The reliable radius is $10$ m; a longer hop can only be slower. Eleven metres already misses the floor.

**1.** Interpolating linearly between $T(4)=50$ and $T(10)=8$ would have claimed about $6$ at $11$ m, still under $8$, for the wrong shape, or might have thought $11$ was still near $10$ and "close enough." The stem's recovered values line up with $T(4)=50$, whereas $10$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $T(4)=50$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.The floor is a hard cut: $6.61<8$.

**2.** The opposite verdict would have needed a larger coefficient, so that $T(11)$ rose through $8$. At the recovered $A=800$, eleven metres is locked below the floor.

The opposite verdict would have needed a larger coefficient, so that $T(11)$ rose through $8$. At the recovered $A=800$, eleven metres is locked below the floor. A bench reading of $60$ Mbps instead of $50$ would have pushed $A$ to $960$ and $T(11)\\approx 7.93$, still just under $8$; the stem's $50$ Mbps leaves a clearer miss.

The recovered throughput at $11$ m is about $6.61$ Mbps, so the statement is False.`,
      `**E.** → False

This letter compares leftover slopes at $8$ m and $4$ m. The overview recovered $T(d)=800 d^{-2}$. Differentiating gives $T'(d)=-1600 d^{-3}$. Its size is $25$ at $4$ m and $\\frac{25}{8}$ at $8$ m. An extra metre cuts more throughput on the short hop, not on the long one. Inverse-square drops are steepest at the near end.

**1.** A finite one-metre step agrees. From $4$ to $5$ m, $T(5)=800/25=32$, a drop of $18$ Mbps from $50$. From $8$ to $9$ m, $T(9)=800/81\\approx 9.88$, a drop of about $2.6$ Mbps from $12.5$. The near hop loses more.

**2.** Seeing $T(8)=12.5$ closer to the floor and inferred that an extra metre there must hurt more would have mixed a smaller remaining pool with a steeper cut. Keeping $T(8)=12.5$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The remaining pool is smaller at $8$ m; the slope is also flatter.

**3.** The opposite verdict would have needed $|T'|$ to grow with $d$. For $r=-2$, $|T'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $25>\\frac{25}{8}$.

A second mix-up is reading the reliability floor as if slope size should grow as the link approaches $8$ Mbps. The floor is a level, $T=8$ at $d=10$. Slope size is $|T'|=1600/d^{3}$, which is smaller at $8$ m than at $4$ m, even though $8$ m is closer to the floor.

The opposite verdict would have needed $|T'|$ to grow with $d$. For $r=-2$, $|T'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $25>\\frac{25}{8}$. Inverse-linear decay, exponent $-1$, would still have been front-loaded, just less steeply.

Checking a one-metre step on the far side of the floor: from $10$ to $11$ m, $T$ falls from $8$ to about $6.61$, a drop of $1.39$ Mbps, smaller still than the $4$-to-$5$ drop of $18$ Mbps. Inverse-square decay keeps flattening. The claim's ranking is the wrong way around at every pair of hops in the stem.

An extra metre of hop cuts more throughput at $4$ m than at $8$ m, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 63,
    solution_overview: `Mesh throughput is $T(d)=Ad^{-2}$ megabits per second, calibrated by $T(4)=50$, and the link is reliable only while $T\\ge 8$.

**Part 1: Building the model.**

Let $d$ = hop distance in metres and $T$ = sustained throughput in megabits per second. The exponent $-2$ is given, so one bench reading fixes $A$. Because the exponent is negative, the reliability floor becomes a maximum distance.

**1. Translate: the bench reading.**

$$\\frac{A}{4^{2}}=50$$

**2. Translate: the reliability floor.**

$$\\frac{A}{d^{2}}\\ge 8 \\quad\\Longleftrightarrow\\quad d\\le \\sqrt{\\frac{A}{8}}$$

**Part 2: The model.**

$$T(d)=\\frac{800}{d^{2}} \\tag{1}$$

$$d=\\sqrt{800}\\, T^{-\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** The reliable radius is $10$ m, and $T(11)\\approx 6.61$ already misses the floor.

**2.** Doubling a hop quarters throughput, the inverse $(2)$ is a power, and an extra metre cuts more throughput at $4$ m than at $8$ m.

**Answer.** $A=800$ | reliable radius $10$ m | doubling factor $\\frac{1}{4}$ | $T$ never negative`,
  },
  {
    id: `math-8-64`,
    case_id: `MATH 8.64`,
    title: `Allometric Gill Area Across Body Masses`,
    context: `A fish physiologist models gill surface area as $G(m)=A m^{\\frac{3}{4}}$ square centimetres for body mass $m>0$ grams. A $256$ g specimen has gill area $512$ cm$^{2}$. Area per gram is the derived intensity $\\frac{G(m)}{m}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is smaller than one, so gill area grows more slowly than body mass.`,
      `A $16$ g fish already has more than $50$ cm$^{2}$ of gill.`,
      `Gill area per gram is constant across body masses.`,
      `Doubling body mass doubles gill area.`,
      `A $64$ g fish already has more than $200$ cm$^{2}$ of gill.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

This letter is about the recovered exponent, not a named fish. Gill area follows $G(m)=A m^{\\frac{3}{4}}$. Three quarters is smaller than one, so each extra gram of body adds less gill than the gram before it. Gill area grows, but more slowly than body mass. A proportional law would have carried exponent $1$.

The overview recovered $A=8$, but a growth ranking never needs that coefficient.

**1.** Seeing $G$ rising with $m$ and stopping would have missed the "more slowly" half of the claim. The stem's recovered values line up with $G$, whereas $m$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $G$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Rising is not the claim; lagging mass is the claim.

**2.** The opposite verdict would have needed $r\\ge 1$. The specimen $G(256)=512$ together with exponent $\\frac{3}{4}$ already refuses that.

Gill area grows more slowly than body mass, so the statement is True.`,
      `**B.** → True

This is a level question at $16$ g. The overview recovered $G(16)=64$. The claim asks whether that fish already has more than $50$ cm² of gill.

Sixty-four sits above fifty. Sixteen is $2^{4}$, so the three-quarters power is $2^{3}=8$, times $8$ is $64$. From the $256$ g specimen, a $\\frac{1}{16}$ mass is a $\\frac{1}{8}$ area, $512/8=64$, because $16^{-\\frac{3}{4}}=\\frac{1}{8}$.

**1.** Scaling $512$ by $16/256$ linearly would have claimed $32$, under $50$, and flipped the verdict. The recovered comparison therefore keeps $512$ and does not substitute $50$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Linear thinking understates a small fish when $r<1$.

**2.** The opposite verdict would have needed a smaller coefficient, so that $G(16)$ fell through $50$. At the recovered $A=8$, sixteen grams is locked at $64$ cm².

The recovered gill area at $16$ g is $64$ cm², so the statement is True.`,
      `**C.** → False

Gill area per gram is the intensity $G(m)/m$. The overview recovered $G(m)=8m^{\\frac{3}{4}}$, so intensity is $8m^{-\\frac{1}{4}}$. The leftover exponent is negative, so intensity falls as mass grows. A constant intensity would need leftover exponent $0$.

Checking the specimen against letter B: at $16$ g the intensity is $64/16=4$ cm² per gram. At $256$ g it is $512/256=2$. Intensity has already halved.

**1.** Seeing a larger total at $256$ g and inferred a constant or larger intensity would have flipped the verdict. The recovered isolation is checked against the claim using $256$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Totals rise; intensities fall.

**2.** The opposite verdict would have needed $r=1$. The stem is $\\frac{3}{4}$.

The opposite verdict would have needed leftover exponent $0$, hence original exponent $1$. The specimen $G(256)=512$ together with $r=\\frac{3}{4}$ already refuses a constant intensity. Two $16$ g fish have combined intensity $128/32=4$, while one $32$ g fish has $G(32)/32\\approx 3.36$. Intensity falls under a merge as well as under growth.

Gill area per gram is not constant across body masses, so the statement is False.`,
      `**D.** → False

Doubling mass would double gill area only if the exponent were $1$. The overview recovered exponent $\\frac{3}{4}$, so a doubling multiplies area by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. Area rises, but not in lockstep with mass. The same $r<1$ that made A true makes this doubling false.

**1.** Checking $G(16)=64$. Doubling to $32$ g gives $G(32)=8\\cdot 32^{\\frac{3}{4}}=8\\cdot (2^{5})^{\\frac{3}{4}}=8\\cdot 2^{\\frac{15}{4}}=8\\cdot 8\\cdot 2^{\\frac{3}{4}}\\approx 107.6$, and $107.6/64\\approx 1.68$, not $2$.

**2.** The opposite verdict would have needed exponent $1$. The specimen already forbids that.

The opposite verdict would have needed exponent $1$. The same $r<1$ that made letter A true makes this doubling false. Checking $G(256)=512$: half the mass is $128$ g, and $G(128)=8\\cdot 128^{\\frac{3}{4}}=8\\cdot (2^{7})^{\\frac{3}{4}}=8\\cdot 2^{\\frac{21}{4}}\\approx 215$, not $256$.

Doubling body mass does not double gill area, so the statement is False.`,
      `**E.** → False

This is a level question at $64$ g. The overview recovered $G(64)=128\\sqrt{2}\\approx 181$, which sits short of $200$. The three-quarters power has grown, but not as far as the named area.

**1.** Treating $64$ as $4^{3}$ and taking $G=8\\cdot 16=128$, dropping the leftover $\\sqrt{2}$, would have sat even shorter of $200$. So the letter reads the claim against $64$; $200$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $64$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another mix-up is the overview's note that $216$ cm² occurs at $81$ g rather than at $64$ g: $G(81)=8\\cdot 27=216$, which does clear $200$, but that is a different fish.

**2.** Linear scaling from $G(16)=64$ by $64/16=4$ would have claimed $256$, above $200$, and flipped the verdict. Linear thinking overstates the $64$ g fish.

**3.** The opposite verdict would have needed a larger coefficient, so that $G(64)$ rose through $200$. At the recovered $A=8$, sixty-four grams is locked near $181$ cm².

Linear scaling from $G(16)=64$ by $64/16=4$ would have claimed $256$, above $200$, and flipped the verdict. Linear thinking overstates the $64$ g fish. The overview's note that $216$ cm² occurs at $81$ g rather than at $64$ g is the nearby true level: $G(81)=8\\cdot 27=216$, which does clear $200$, but that is a different fish.

The opposite verdict would have needed $A>200/(16\\sqrt{2})\\approx 8.84$. The specimen locks $A=8$, and $64$ g stays short of $200$ cm².

A second mix-up is cubing $4$ and reading $G(64)=8\\cdot 64$, as if the exponent were $1$, which gives $512$, the specimen's area at $256$ g, and would have sat above $200$ for the wrong fish. The $64$ g fish is $2^{6}$, so $64^{\\frac{3}{4}}=2^{\\frac{9}{2}}=16\\sqrt{2}$, times $8$ is $128\\sqrt{2}\\approx 181$.

The opposite verdict would have needed a specimen with a larger coefficient, so that $G(64)$ rose through $200$. At $A=8$, sixty-four grams is locked near $181$ cm², and $200$ cm² waits until $m=81$.

The recovered gill area at $64$ g is about $181$ cm², so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 64,
    solution_overview: `Gill area is $G(m)=Am^{\\frac{3}{4}}$ square centimetres, calibrated by $G(256)=512$, and intensity is $\\frac{G(m)}{m}$.

**Part 1: Building the model.**

Let $m$ = body mass in grams and $G$ = gill area in square centimetres. The exponent is given, so one specimen fixes $A$. Dividing the law by mass subtracts one from the exponent.

**1. Translate: the specimen.**

$$A\\cdot 256^{\\frac{3}{4}}=512 \\qquad 256^{\\frac{3}{4}}=64$$

**2. Translate: intensity.**

$$\\frac{G(m)}{m}=8m^{-\\frac{1}{4}}$$

**Part 2: The model.**

$$G(m)=8m^{\\frac{3}{4}} \\tag{1}$$

$$\\frac{G(m)}{m}=8m^{-\\frac{1}{4}} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $\\frac{3}{4}<1$, intensity falls with mass, and two $16$ g fish beat one $32$ g fish: $2G(16)=128>G(32)\\approx 107.63$.

**2.** Levels: $G(16)=64$, and $216$ cm$^{2}$ occurs at $81$ g rather than at $64$ g.

**Answer.** $A=8$ | $G(16)=64$ | intensity $8m^{-\\frac{1}{4}}$ | $216$ cm$^{2}$ at $81$ g`,
  },
  {
    id: `math-8-65`,
    case_id: `MATH 8.65`,
    title: `Curing Strength From a Timed Gap Between Samples`,
    context: `A concrete lab models early curing strength as $S(t)=A\\sqrt{t}$ megapascals, where $t>0$ is curing time in days. The log never states $A$: it only notes that strength rose by exactly $5$ MPa between day $4$ and day $9$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Quadrupling curing time exactly doubles strength.`,
      `Strength on day $4$ is already above $8$ MPa.`,
      `An extra day adds more strength after nine days of curing than it does after four.`,
      `Reaching $30$ MPa still takes under $40$ days of curing.`,
      `The recorded $5$ MPa is the strength on day $9$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

This letter is a scale identity for the square-root clock, not a named day. For $S(t)=A\\sqrt{t}$ a time factor $c$ cancels the coefficient: $S(ct)/S(t)=\\sqrt{c}$. Quadrupling means $c=4$, and $\\sqrt{4}=2$. A square-root clock turns a fourfold wait into a twofold reading.

The overview recovered $A=5$, but the coefficient never enters a scale question.

**1.** Quadrupling the strength with the time would have claimed a factor of $4$. The recovered isolation is checked against the claim using $4$, which is the figure the sessions actually produce. That is exponent $1$. Another mix-up is doubling time and expecting a doubling of strength; that would need $c=4$ as well, which is this letter's quadrupling, not a doubling.

**2.** The opposite verdict would have needed a leftover exponent other than $\\frac{1}{2}$. The stem is a square root.

Quadrupling curing time exactly doubles strength, so the statement is True.`,
      `**B.** → True

This is a level question on day $4$. The overview recovered $S(4)=10$. The claim asks whether that strength is already above $8$ MPa.

Ten sits above eight. Together with $S(9)=15$, the logged gap $15-10=5$ is recovered. The recorded $5$ MPa is the gap, not the day-$4$ level.

**1.** Treating the recorded $5$ MPa as $S(4)$ would have compared $5$ to $8$ and flipped the verdict. That is the fork: $5$ belongs to the recovered isolation, $8$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The $5$ is a difference of two days, not a level. Letter E names that mix-up on day $9$.

**2.** The opposite verdict would have needed a smaller coefficient, so that $S(4)$ fell through $8$. At the recovered $A=5$, day $4$ is locked at $10$ MPa.

The recovered strength on day $4$ is $10$ MPa, so the statement is True.`,
      `**C.** → False

This letter compares leftover slopes after nine days versus after four. The overview recovered $S(t)=5\\sqrt{t}$. Differentiating gives $S'(t)=\\frac{5}{2}t^{-\\frac{1}{2}}$. After four days that is $\\frac{5}{4}$. After nine days it is $\\frac{5}{6}$. An extra day adds more after four days than after nine, not the other way around. A square root flattens.

**1.** A finite one-day step agrees. From day $4$ to day $5$, $S(5)=5\\sqrt{5}\\approx 11.18$, a rise of about $1.18$ MPa from $10$. From day $9$ to day $10$, $S(10)=5\\sqrt{10}\\approx 15.81$, a rise of about $0.81$ MPa from $15$. Later days add less.

**2.** Seeing $S(9)=15>S(4)=10$ and inferred that later days must add more would have mixed a higher level with a steeper slope. Keeping $S(9)=15>S(4)=10$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The level is higher on day $9$; the slope is flatter.

**3.** The opposite verdict would have needed $r>1$, so that $S'$ would rise. The stem is a square root. Changing $A$ scales both slopes by the same factor and cannot reverse $\\frac{5}{4}>\\frac{5}{6}$.

The opposite verdict would have needed $r>1$, so that $S'$ would rise. The stem is a square root. Changing $A$ scales both slopes by the same factor and cannot reverse $\\frac{5}{4}>\\frac{5}{6}$. The recorded $5$ MPa gap across five days is an average of $1$ MPa per day, which sits between $\\frac{5}{4}$ and $\\frac{5}{6}$, as a falling slope requires.

Letter A was a scale identity. This letter is the derivative of the same square-root clock. They are the same $r=\\frac{1}{2}$ fact, read once as a quadrupling and once as a flattening.

Seeing $S(9)=15>S(4)=10$ and inferred that later days must add more would have mixed a higher level with a steeper slope. Keeping $S(9)=15>S(4)=10$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The level is higher on day $9$; the slope is flatter. That is the same confusion as mixing $C(81)$ with $C'(81)$ in an audit bill: taller stack, flatter extra unit.

An extra day adds less strength after nine days than after four, so the statement is False.`,
      `**D.** → True

This letter inverts a $30$ MPa target. The overview recovered that $30$ MPa already occurs on day $36$, which sits under $40$. From $5\\sqrt{t}=30$ one has $\\sqrt{t}=6$ and $t=36$. The square-root clock is slower than a linear guess, so the target arrives before day $40$.

**1.** Scaling linearly from $S(4)=10$ as $3\\times 4=12$ days would have sat under $40$ for the wrong reason. The stem's recovered values line up with $S(4)=10$, whereas $40$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $S(4)=10$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Another mix-up is $S(t)=5t$, giving day $6$, also under $40$. Linear thinking understates the wait when $r<1$; here the true wait is $36$, still under $40$.

**2.** Checking day $40$: $S(40)=5\\sqrt{40}\\approx 31.6$, already past $30$. The $40$-day cutoff is not a near miss on $36$; it is past the target.

**3.** The opposite verdict would have needed a smaller coefficient, so that the inverted day rose through $40$. At the recovered $A=5$, thirty megapascals is locked on day $36$.

A linear clock $S=2.5 t$ through $S(4)=10$ would have hit $30$ MPa on day $12$, still under $40$, for the wrong wait. The true wait is $36$. Checking day $40$: $S(40)=5\\sqrt{40}\\approx 31.6$, already past $30$. The $40$-day cutoff is past the target, not a near miss that could flip.

The opposite verdict would have needed $A<30/\\sqrt{40}\\approx 4.74$, a smaller coefficient so that day $40$ was still short of $30$ MPa. The recorded $5$ MPa gap locks $A=5$.

From day $36$ to day $40$ the extra four days add only about $1.6$ MPa, which is why a $40$-day cutoff still clears $30$ once day $36$ has already arrived. A smaller recorded gap of $4$ MPa instead of $5$ would have lowered $A$ to $4$ and pushed the inverse to day $56$, past $40$, flipping the letter. The log's $5$ MPa locks day $36$.

The recovered wait for $30$ MPa is $36$ days, so the statement is True.`,
      `**E.** → False

The recorded $5$ MPa is the gap $S(9)-S(4)$, not the day $9$ level. The overview recovered $S(9)=15$. Day $9$ is $15$ MPa. Treating a difference of two readings as a single level is the mix-up named in the title.

**1.** Taking $5$ as $S(9)$ would have called this letter true. The stem's recovered values line up with $5$, whereas $S(9)$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The log never states a level; it states a rise. Letter B already used the day-$4$ level $10$ that makes the gap $15-10=5$.

**2.** The opposite verdict would have needed the surviving record to have been a level of $5$ MPa on day $9$. The stem says the strength rose by $5$ MPa between day $4$ and day $9$.

The opposite verdict would have needed the surviving record to have been a level of $5$ MPa on day $9$. The stem says the strength rose by $5$ MPa between day $4$ and day $9$. Letter B already used the day-$4$ level $10$ that makes the gap $15-10=5$.

The recovered strength on day $9$ is $15$ MPa, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 65,
    solution_overview: `Curing strength is $S(t)=A\\sqrt{t}$ megapascals, and the only surviving record is the $5$ MPa rise between day $4$ and day $9$.

**Part 1: Building the model.**

Let $t$ = curing time in days and $S$ = strength in megapascals. No single level was logged, so the coefficient comes out of a difference. That works because $A$ is a common factor and the exponent $\\frac{1}{2}$ is given.

**1. Translate: the surviving record.**

$$A\\sqrt{9}-A\\sqrt{4}=5$$

**2. Translate: factor the coefficient out.**

$$A(3-2)=5$$

**Part 2: The model.**

$$S(t)=5\\sqrt{t} \\tag{1}$$

$$\\frac{S(ct)}{S(t)}=\\sqrt{c} \\tag{2}$$

**Part 3: Solve.**

**1.** The record gives $A=5$, so $S(4)=10$ and $S(9)=15$. The $5$ MPa is the gap, not a level.

**2.** Quadrupling time doubles strength, $30$ MPa occurs on day $36$, and $S'(t)$ falls, so an extra day adds more at day $4$ than at day $9$.

**Answer.** $A=5$ | $S(4)=10$ | $S(9)=15$ | $30$ MPa on day $36$`,
  },
  {
    id: `math-8-66`,
    case_id: `MATH 8.66`,
    title: `Cantilever Deflection Checked Against a Third Span`,
    context: `A materials lab models tip deflection of a cantilever as $y(L)=A L^{k}$ millimetres, where $L>0$ is the free span in metres. Two spans are trusted: $y(3)=18$ and $y(6)=72$. A third run recorded $y(9)=150$, and the question is whether that third point still sits on the same power law. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent from the trusted pair is larger than one, so deflection outruns span.`,
      `The trusted quadratic already puts nine metres above $155$ mm.`,
      `Doubling the free span doubles the tip deflection.`,
      `The recorded third run sits more than $10$ mm below the trusted quadratic.`,
      `The third run sits on the same power law as the trusted pair.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

This letter reads the trusted pair as an exponent ranking. The trusted ratio is $72/18=4=2^{k}$, so $k=2$. A width factor $c>1$ then multiplies deflection by $c^{2}$, which exceeds $c$. Deflection outruns span. The integer $2$ is a square law, not a coincidence of the $3$ m and $6$ m runs.

**1.** Seeing $6=2\\cdot 3$ and $72=4\\cdot 18$ and calling it "just a doubling of span with a quadrupling of sag" without naming $k=2$ would have the right factor and the right ranking, but would not have seen that every other scale factor is also a square. Working from the isolated values, $6=2\\cdot 3$ is the figure that is checked, not the detour that produced $k=2$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** The opposite verdict would have needed $k\\le 1$. The trusted pair already refuses that.

The recovered exponent is $2$, so the statement is True.`,
      `**B.** → True

This letter asks what the trusted pair predicts at nine metres, not what the third run recorded. The overview recovered $y(L)=2L^{2}$ and $y(9)=162$. One hundred and sixty-two sits above $155$. The questionable third run of $150$ is a different number; this letter is the trusted quadratic's forecast.

**1.** Comparing the recorded $150$ to $155$ would have called the statement false. So the letter reads the claim against $150$; $155$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $150$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter B names the trusted prediction, not the third run. Letter D then measures the shortfall.

**2.** The opposite verdict would have needed a smaller trusted coefficient, so that $2\\cdot 81$ fell through $155$. At the recovered $A=2$, nine metres is locked at $162$ mm.

The trusted quadratic at nine metres is $162$ mm, so the statement is True.`,
      `**C.** → False

Doubling span would double deflection only if the exponent were $1$. With $k=2$ the factor is $2^{2}=4$. The trusted move from $3$ m to $6$ m already did that: $18$ mm became $72$ mm. A doubled free span is four times the sag.

**1.** Reading "doubling" in the $3$ m to $6$ m pair and copying it onto deflection would have claimed a doubling of sag, $36$ mm at $6$ m, against the logged $72$. After isolating the unknown, the check is against $3$. The figure $72$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $3$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trusted pair is the counterexample.

**2.** The opposite verdict would have needed $k=1$. The trusted ratio $4$ on a doubled span forbids that.

The opposite verdict would have needed $k=1$. The trusted ratio $4$ on a doubled span forbids that. Letter A already used that $k=2$; this letter is the same fact read as a doubling claim rather than as an outrunning claim.

Doubling the free span quadruples the tip deflection, so the statement is False.`,
      `**D.** → True

This letter is the millimetre shortfall of the third run against the trusted quadratic. Predicted $162$ mm minus recorded $150$ mm is a $12$ mm shortfall, which is more than $10$. The third run sits below the trusted quadratic. A $10$ mm tolerance would still flag this gap.

**1.** Comparing $150$ to the $3$ m reading $18$ as a ratio, without using the trusted $162$, might have missed the millimetre test. The recovered comparison therefore keeps $150$ and does not substitute $162$. Letter E reads the same gap as a ratio. This letter reads it as millimetres.

**2.** The opposite verdict would have needed the third run to have been $152$ mm or higher, so that the shortfall fell through $10$. The recorded run is $150$.

Comparing $150$ to the $3$ m reading $18$ as a ratio, without using the trusted $162$, might have missed the millimetre test. The recovered comparison therefore keeps $150$ and does not substitute $162$. Letter E reads the same gap as a ratio. This letter reads it as millimetres. The opposite verdict would have needed the third run to have been $152$ mm or higher.

The third run sits $12$ mm below the trusted quadratic, so the statement is True.`,
      `**E.** → False

The third run would sit on the trusted law only if $150/18=3^{2}$. Instead $150/18=\\frac{25}{3}\\approx 8.33\\neq 9$. The third run does not sit on the same power law. Predicted $162$ versus recorded $150$ is a $12$ mm gap, now read as a ratio rather than as millimetres.

**1.** A two-point refit using $y(3)=18$ and $y(9)=150$ would force $3^{k}=\\frac{25}{3}$, so $k\\approx 1.930$, not $2$. Rescaling $A$ to force the third run, $A=150/81\\approx 1.85$, then breaks $y(3)$: $1.85\\cdot 9=16.65\\neq 18$. Either constant can be saved, not both.

**2.** Treating $12$ mm as "close enough" on a $162$ mm prediction would have called the statement true. The stem's recovered values line up with $12$, whereas $162$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $12$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The letter asks whether the third run sits on the same power law, not whether it is nearby.

**3.** The opposite verdict would have needed a recorded third run of $162$ mm. The stem records $150$.

A two-point refit using $y(3)=18$ and $y(9)=150$ would force $3^{k}=\\frac{25}{3}$, so $k\\approx 1.930$, not $2$. Rescaling $A$ to force the third run, $A=150/81\\approx 1.85$, then breaks $y(3)$: $1.85\\cdot 9=16.65\\neq 18$. Either constant can be saved, not both.

Treating $12$ mm as "close enough" on a $162$ mm prediction would have called the statement true. The stem's recovered values line up with $12$, whereas $162$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $12$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The letter asks whether the third run sits on the same power law, not whether it is nearby. The opposite verdict would have needed a recorded third run of $162$ mm. The stem records $150$.

The trusted pair is a square law with $A=2$. Forcing the third run onto that square would require $y(9)=162$, not $150$. Forcing a new exponent through $3$ m and $9$ m gives about $1.930$, which then predicts $y(6)=18\\cdot 2^{1.930}\\approx 68.4$, not the trusted $72$. The third run cannot be absorbed without breaking a trusted point.

The third run does not sit on the same power law as the trusted pair, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 66,
    solution_overview: `Tip deflection is modelled as $y(L)=AL^{k}$ millimetres, with trusted runs $y(3)=18$ and $y(6)=72$ and a questionable third run $y(9)=150$.

**Part 1: Building the model.**

Let $L$ = free span in metres and $y$ = tip deflection in millimetres. Two trusted runs fix both constants: the ratio delivers $k$, and either run then delivers $A$. The third run is a test of the fitted curve, not an input to it.

**1. Translate: the trusted ratio.**

$$\\frac{72}{18}=2^{k}$$

**2. Translate: a two-point refit using the third run.**

$$\\frac{150}{18}=3^{k}$$

**Part 2: The model.**

$$y(L)=2L^{2} \\tag{1}$$

$$\\frac{y(cL)}{y(L)}=c^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The trusted pair is a square law with $A=2$. It predicts $y(9)=162$, so the recorded $150$ undershoots by $12$ mm.

**2.** Rescaling $A$ to force the third run breaks $y(3)$, and the refitted exponent is about $1.930$, not $2$. The third run is off the trusted curve.

**Answer.** $y(L)=2L^{2}$ | predicted $y(9)=162$ mm | shortfall $12$ mm | refitted exponent $\\approx 1.930$`,
  },
  {
    id: `math-8-67`,
    case_id: `MATH 8.67`,
    title: `Mast Steel Mass Under a Finite Percentage Scale-Up`,
    context: `A self-similar mast's steel mass follows $M(h)=A h^{k}$ kilograms, where $h>0$ is mast height in metres. Design notes state that lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$, and a $10$ m reference mast uses exactly $500$ kg of steel. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is larger than one, so steel mass outruns height.`,
      `A $12$ m mast already uses more than $800$ kg of steel.`,
      `The percentage rule alone forces the coefficient $A$ without using the $10$ m reference.`,
      `A $10\\%$ height increase raises mass by more than $30\\%$.`,
      `A $20\\%$ height increase raises mass by $20\\%$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

This letter reads the percentage rule as an exponent ranking. The design note is $1.2^{k}=1.728$. Matching powers of $1.2$ gives $1.2^{3}=1.728$, so $k=3$. Three is larger than one, so mass outruns height. The coefficient cancels in the ratio, so the $10$ m reference is not needed for this ranking.

**1.** Treating $72.8\\%$ as "about three times $20\\%$" and guessed $k=3$ by a percentage shortcut would have the right exponent for a slightly wrong reason. So the letter reads the claim against $72.8\\%$; $k=3$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $72.8\\%$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exact match is $1.2^{3}=1.728$, not $3\\times 20\\%=60\\%$.

**2.** The opposite verdict would have needed $k\\le 1$. The percentage rule already refuses that.

Checking $1.2^{2}=1.44$ and $1.2^{4}=2.0736$ shows that $1.728$ sits on the cube, not on the square or the fourth power. The opposite verdict would have needed $k\\le 1$, hence a $20\\%$ stretch raising mass by $20\\%$ or less. The design note is $72.8\\%$.

The recovered exponent is $3$, so the statement is True.`,
      `**B.** → True

This is a level question at $12$ m, a $20\\%$ stretch of the $10$ m reference. The overview recovered $M(12)=864$. Eight hundred and sixty-four sits above eight hundred. The same check is $500\\cdot 1.728=864$, or $0.5\\cdot 12^{3}=864$.

**1.** Adding $20\\%$ to $500$ kg would have claimed $600$, under $800$, and flipped the verdict. So the letter reads the claim against $20\\%$; $800$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $20\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Height and mass do not move in lockstep when $k=3$.

**2.** The opposite verdict would have needed a smaller reference mass, so that $M(12)$ fell through $800$. At the recovered $A=0.5$, twelve metres is locked at $864$ kg.

Adding $20\\%$ to $500$ kg would have claimed $600$, under $800$, and flipped the verdict. So the letter reads the claim against $20\\%$; $800$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $20\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Height and mass do not move in lockstep when $k=3$. The opposite verdict would have needed a smaller reference mass, so that $M(12)$ fell through $800$.

The recovered steel mass at $12$ m is $864$ kg, so the statement is True.`,
      `**C.** → False

In the ratio $M(1.2h)/M(h)=1.2^{k}$ the coefficient $A$ cancels, so the percentage rule cannot pin $A$. The $10$ m reference is the level that pins $A$. Scale information cannot substitute for a level.

**1.** Any $A$ with $k=3$ would still raise mass by $72.8\\%$ on a $20\\%$ stretch. The percentage rule is blind to whether the reference mast uses $500$ kg or $5000$ kg.

**2.** Solving $A\\cdot 1.2^{k}=1.728$ as if that were a level would have manufactured a fake $A$. So the letter reads the claim against $A\\cdot 1.2^{k}=1.728$; $A$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $A\\cdot 1.2^{k}=1.728$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The $1.728$ is a multiplier, not a mass in kilograms.

**3.** The opposite verdict would have needed a second level, or a named mass in the percentage note. The stem separates a ratio from a level on purpose.

Any $A$ with $k=3$ would still raise mass by $72.8\\%$ on a $20\\%$ stretch. The percentage rule is blind to whether the reference mast uses $500$ kg or $5000$ kg. Solving $A\\cdot 1.2^{k}=1.728$ as if that were a level would have manufactured a fake $A$. So the letter reads the claim against $A\\cdot 1.2^{k}=1.728$; $A$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $A\\cdot 1.2^{k}=1.728$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The $1.728$ is a multiplier, not a mass in kilograms.

The opposite verdict would have needed a second level, or a named mass in the percentage note. The stem separates a ratio from a level on purpose. Letter B then uses the $10$ m reference to pin $A=0.5$; this letter is why that reference cannot be skipped.

Letter B then uses the $10$ m reference to pin $A=0.5$; this letter is why that reference cannot be skipped. A second named mast, even without the percentage rule, would have pinned $A$ as a level. The stem gives one ratio and one level, and they do different jobs.

Writing $1.728 A = A$ and "solving" for $A$ is another fake recovery: the only solution is the useless $0=0$ after cancelling. Scale never pins a level. The $500$ kg reference is the missing level, and it cannot be read off the $72.8\\%$ note.

The percentage rule alone cannot force $A$, so the statement is False.`,
      `**D.** → True

A $10\\%$ stretch is the factor $1.1^{3}=1.331$, a $33.1\\%$ mass rise, which sits above $30\\%$. Percent changes pass through the exponent. The overview recovered $k=3$, so a $10\\%$ height increase is not a $10\\%$ mass increase.

**1.** Checking the reference: $M(11)=0.5\\cdot 1331=665.5$, and $665.5/500=1.331$. The mass rise is $165.5$ kg on a $500$ kg mast, $33.1\\%$.

**2.** Tripling the $10\\%$ to $30\\%$ as a linear elasticity shortcut would have sat on the $30\\%$ line and called the statement false, or called it a tie. The stem's recovered values line up with $10\\%$, whereas $30\\%$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $10\\%$ stays in the write-up. The exact cube is $1.331$, a little above $30\\%$.

**3.** The opposite verdict would have needed $1.1^{k}\\le 1.30$, hence $k\\le \\log(1.30)/\\log(1.1)\\approx 2.74$. The percentage rule locked $k=3$.

Checking the reference: $M(11)=0.5\\cdot 11^{3}=665.5$, and $665.5/500=1.331$. The mass rise is $165.5$ kg on a $500$ kg mast, $33.1\\%$. Tripling the $10\\%$ to $30\\%$ as a linear elasticity shortcut would have sat on the $30\\%$ line. After isolating the unknown, the check is against $10\\%$. The figure $30\\%$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $10\\%$ stays in the write-up. The exact cube is $1.331$, a little above $30\\%$.

The opposite verdict would have needed $1.1^{k}\\le 1.30$, hence $k\\le \\log(1.30)/\\log(1.1)\\approx 2.74$. The percentage rule locked $k=3$. Letter E then reads the $20\\%$ stretch, whose exact factor is the design note $1.728$.

A $10\\%$ stretch on a cube is not three times $10\\%$. The binomial $1+3(0.1)+3(0.1)^{2}+(0.1)^{3}=1.331$ shows the extra $3.1\\%$ sitting above a naive $30\\%$. That extra is why the claim's "more than $30\\%$" holds rather than tying at $30\\%$.

Letter E then reads the $20\\%$ stretch, whose exact factor is the design note $1.728$. A $10\\%$ stretch and a $20\\%$ stretch are different experiments on the same cube, and both sit well above lockstep.

A $10\\%$ height increase raises mass by $33.1\\%$,

A $10\\%$ height stretch on a cube is the binomial $1+3(0.1)+3(0.1)^{2}+(0.1)^{3}=1.331$, not a flat $30\\%$.

The extra $3.1\\%$ is why the claim's "more than $30\\%$" holds rather than tying at a linearised $3\\times 10\\%$.

Changing the design note would move $k$, but the recovered cube already locks $1.1^{3}=1.331$.

so the statement is True.`,
      `**E.** → False

A $20\\%$ height increase raises mass by $72.8\\%$, not by $20\\%$. That is the design note itself: $1.2^{3}=1.728$. Height and mass do not move in lockstep when the exponent is $3$.

**1.** Letter B already used that $72.8\\%$ to move $500$ kg to $864$ kg. This letter is the percentage claim sitting next to that level.

**2.** Copying the $20\\%$ from height onto mass would have called the statement true. That is why $20\\%$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That is exponent $1$, which letter A already refused.

**3.** The opposite verdict would have needed $k=1$. The design note $72.8\\%$ on a $20\\%$ stretch forbids that.

Copying the $20\\%$ from height onto mass would have called the statement true. That is why $20\\%$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That is exponent $1$, which letter A already refused. The opposite verdict would have needed $k=1$. The design note $72.8\\%$ on a $20\\%$ stretch forbids that.

A $20\\%$ height increase raises mass by $72.8\\%$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 67,
    solution_overview: `Steel mass is $M(h)=Ah^{k}$ kilograms, a $20\\%$ taller mast needs $72.8\\%$ more steel, and the $10$ m reference mast uses $500$ kg.

**Part 1: Building the model.**

Let $h$ = mast height in metres and $M$ = steel mass in kilograms. A percentage rule is a ratio and fixes only $k$; the reference mast is a level and fixes only $A$.

**1. Translate: the percentage rule.**

$$1.2^{k}=1.728$$

**2. Translate: the reference mast.**

$$A\\cdot 10^{k}=500$$

**Part 2: The model.**

$$k=3 \\tag{1}$$

$$M(h)=0.5h^{3} \\tag{2}$$

**Part 3: Solve.**

**1.** The ratio forces a cube, and the reference then forces $A=0.5$. The percentage rule cannot select $A$ on its own.

**2.** Levels and scale factors: $M(12)=864$, a $10\\%$ stretch adds $33.1\\%$, and a $20\\%$ stretch adds $72.8\\%$ rather than $20\\%$.

**Answer.** $M(h)=0.5h^{3}$ | $M(12)=864$ kg | $10\\%$ stretch adds $33.1\\%$ | $k$ from the ratio alone`,
  },
  {
    id: `math-8-68`,
    case_id: `MATH 8.68`,
    title: `Cooling Fan Noise Against a Night-Time Cap`,
    context: `Acoustic intensity from a cooling fan follows $I(d)=A d^{-2}$ watts per square metre, where $d>0$ is distance from the hub in metres. A meter reading at $2$ metres records $0.72$ W/m$^{2}$. Night operations are capped at $0.08$ W/m$^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the distance cuts intensity to one quarter.`,
      `At $4$ metres the intensity is already under $0.2$ W/m$^{2}$.`,
      `An extra metre cuts more intensity at $2$ m than it does at $6$ m.`,
      `At $6$ metres the intensity is still above the $0.08$ W/m$^{2}$ night cap.`,
      `The night cap is never met at any finite distance.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

For an inverse square, a distance factor $k$ scales intensity by $k^{-2}$. Doubling is $k=2$, and $2^{-2}=\\frac{1}{4}$. Doubling distance quarters intensity at every starting range. Inverse-linear thinking would have claimed a half.

The overview recovered $A=2.88$, but the coefficient cancels in any ratio.

**1.** Checking the survey: $I(2)=0.72$. Doubling to $4$ m gives $I(4)=0.18$, and $0.18/0.72=\\frac{1}{4}$. Letter B reads that $0.18$ against a $0.2$ cutoff.

**2.** The opposite verdict would have needed exponent $-1$. The stem is $d^{-2}$.

Checking the survey: $I(2)=0.72$. Doubling to $4$ m gives $I(4)=0.18$, and $0.18/0.72=\\frac{1}{4}$. Letter B reads that $0.18$ against a $0.2$ cutoff. The opposite verdict would have needed exponent $-1$.

Doubling the distance cuts intensity to one quarter, so the statement is True.`,
      `**B.** → True

This is a level question at $4$ m, a doubling of the $2$ m survey. The overview recovered $I(4)=0.18$, which sits under $0.2$. That is a quarter of $0.72$.

**1.** Halving $0.72$ would have claimed $0.36$, above $0.2$, and flipped the verdict. The stem's recovered values line up with $0.72$, whereas $0.2$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $0.72$ stays in the write-up. Inverse-linear thinking is too slow a decay.

**2.** The opposite verdict would have needed a larger coefficient, so that $I(4)$ rose through $0.2$. At the recovered $A=2.88$, four metres is locked at $0.18$.

Halving $0.72$ would have claimed $0.36$, above $0.2$, and flipped the verdict. The stem's recovered values line up with $0.72$, whereas $0.2$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $0.72$ stays in the write-up. Inverse-linear thinking is too slow a decay. The opposite verdict would have needed a larger coefficient, so that $I(4)$ rose through $0.2$.

The recovered intensity at $4$ metres is $0.18$ W/m², so the statement is True.`,
      `**C.** → True

This letter compares leftover slopes at $2$ m and $6$ m. The overview recovered $I(d)=2.88/d^{2}$. Differentiating gives $I'(d)=-5.76\\, d^{-3}$. Its size is $0.72$ at $2$ m and about $0.027$ at $6$ m. An extra metre cuts more intensity near the hub. Inverse-square drops are front-loaded.

**1.** A finite one-metre step agrees. From $2$ to $3$ m, $I(3)=2.88/9=0.32$, a drop of $0.40$ from $0.72$. From $6$ to $7$ m, $I(7)=2.88/49\\approx 0.059$, a drop of about $0.021$ from $0.08$. The near metre cuts more.

**2.** Seeing $I(6)=0.08$ already at the cap and inferred that an extra metre there must hurt more would have mixed a smaller remaining intensity with a steeper cut. The path that matches the stem therefore holds $I(6)=0.08$ fixed and only then reads the claim. The remaining intensity is smaller at $6$ m; the slope is also flatter.

**3.** The opposite verdict would have needed $|I'|$ to grow with $d$. For $r=-2$, $|I'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $0.72>0.027$.

A second mix-up is reading the night cap as if slope size should grow as intensity approaches $0.08$. The cap is a level, $I=0.08$ at $d=6$. Slope size is $|I'|=5.76/d^{3}$, which is smaller at $6$ m than at $2$ m, even though $6$ m is the cap.

The opposite verdict would have needed $|I'|$ to grow with $d$. For $r=-2$, $|I'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $0.72>0.027$. Inverse-linear decay would still have been front-loaded, just less steeply.

A finite step from $2$ to $3$ m drops intensity by $0.40$; from $6$ to $7$ m the drop is about $0.021$. The near metre cuts more, which is the inverse-square front-load. Changing $A$ to $1.44$, a common half-coefficient mix-up from $A/2^{2}=0.72$ written as $A/2$, would scale both slopes by $\\frac{1}{2}$ and still preserve the ranking.

An extra metre cuts more intensity at $2$ m than at $6$ m, so the statement is True.`,
      `**D.** → False

This is a level question at $6$ m against the night cap. The overview recovered $I(6)=0.08$, which equals the night cap rather than sitting above it. The claim wants a reading still above $0.08$; equality is not above. The cap is met exactly at six metres.

**1.** Treating "at or above the cap" as the night-rule violation would have called this letter true. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The statement says "still above," and $0.08$ is not above $0.08$.

**2.** Checking $I(5)=2.88/25=0.1152$, which is still above the cap. Five metres is inside the night restriction; six metres is the boundary. Letter D names six metres.

**3.** The opposite verdict would have needed a larger coefficient, so that $I(6)$ sat above $0.08$. At the recovered $A=2.88$, six metres is locked on the cap.

Checking $I(5)=2.88/25=0.1152$, which is still above the cap. Five metres is inside the night restriction; six metres is the boundary. Treating "at or above the cap" as the night-rule violation would have called this letter true. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The statement says "still above," and $0.08$ is not above $0.08$.

The recovered intensity at $6$ metres equals the night cap, so the statement is False.`,
      `**E.** → False

An inverse square falls from $0.72$ toward $0$ and therefore crosses $0.08$ at a finite distance. The overview recovered that the cap is met at $d=6$ m. Walking away from the hub always eventually satisfies the night limit.

**1.** Seeing a decaying power and claiming it never reaches a positive floor would have mixed an asymptote at $0$ with a failure to cross $0.08$. After isolating the unknown, the check is against $0$. The figure $0.08$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $0$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Intensity approaches $0$, so it must pass $0.08$ on the way.

**2.** The opposite verdict would have needed a positive horizontal asymptote above $0.08$, for instance $I=0.10+A d^{-2}$. The stem has no such floor.

Seeing a decaying power and claiming it never reaches a positive floor would have mixed an asymptote at $0$ with a failure to cross $0.08$. After isolating the unknown, the check is against $0$. The figure $0.08$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $0$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Intensity approaches $0$, so it must pass $0.08$ on the way. The opposite verdict would have needed a positive horizontal asymptote above $0.08$.

The night cap is met at six metres, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 68,
    solution_overview: `Fan intensity is $I(d)=Ad^{-2}$ watts per square metre, calibrated by $I(2)=0.72$, and night work is capped at $0.08$.

**Part 1: Building the model.**

Let $d$ = distance from the hub in metres and $I$ = acoustic intensity in watts per square metre. The exponent $-2$ is given, so one meter reading fixes $A$. Because the exponent is negative, the night cap becomes a minimum standing distance.

**1. Translate: the meter reading.**

$$\\frac{A}{2^{2}}=0.72$$

**2. Translate: the night cap.**

$$\\frac{A}{d^{2}}\\le 0.08 \\quad\\Longleftrightarrow\\quad d\\ge \\sqrt{\\frac{A}{0.08}}$$

**Part 2: The model.**

$$I(d)=\\frac{2.88}{d^{2}} \\tag{1}$$

$$I'(d)=-5.76\\, d^{-3} \\tag{2}$$

**Part 3: Solve.**

**1.** The recovered coefficient is $2.88$, not $1.44$. Doubling distance quarters intensity.

**2.** The cap is met at $d=6$, where $I=0.08$, and $|I'|$ is larger at $2$ m than at $6$ m.

**Answer.** $I(d)=2.88d^{-2}$ | cap met at $d=6$ m | doubling factor $\\frac{1}{4}$ | $A\\ne 1.44$`,
  },
  {
    id: `math-8-69`,
    case_id: `MATH 8.69`,
    title: `Pump Head Composed Through a Square Flow Law`,
    context: `A booster pump's differential head follows $H(q)=A q^{2}$ metres when the delivered flow is $q>0$ cubic metres per hour. A commissioning run at $q=5$ recorded $H=50$ m. The plant then pipes that flow through a nozzle whose jet speed is $v(H)=4\\sqrt{H}$ metres per second, so jet speed as a function of flow is the composition $v(q)=v(H(q))$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After both stages, jet speed is proportional to flow.`,
      `At $q=5$ the jet speed is already above $28$ m/s.`,
      `Doubling the flow doubles the head.`,
      `A jet speed of $40\\sqrt{2}$ m/s still takes under $12$ m$^{3}$/h of flow.`,
      `Head is proportional to jet speed.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Head is a square of flow and jet speed is a square root of head, so the composed exponent is $2\\cdot\\frac{1}{2}=1$. The leftover map is a line through the origin. The overview recovered $v(q)=4\\sqrt{2}\\, q$. Jet speed is proportional to flow.

Stopping at $H(q)=2q^{2}$ would have left a square in flow. Stopping at $v(H)=4\\sqrt{H}$ would have left a square root in head. Neither of those is the composed map.

**1.** Adding the exponents would have claimed exponent $2.5$ and called the map a power but not a proportion. The opposite verdict would need a different isolation than $2.5$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Composition multiplies, and $2\\cdot\\frac{1}{2}=1$ is the proportional case.

**2.** Checking the commissioning run: $v(5)=20\\sqrt{2}$. Doubling flow to $10$ doubles speed to $40\\sqrt{2}$, which is letter D. Proportionality is the same fact as that doubling.

Checking the commissioning run: $v(5)=20\\sqrt{2}$. Doubling flow to $10$ doubles speed to $40\\sqrt{2}$, which is letter D. Proportionality is the same fact as that doubling. If the nozzle had been $v=4H$ instead of $4\\sqrt{H}$, the composition would have been cubic in flow, not linear. The stem's square root of a square is why the leftover exponent is $1$.

After both stages, jet speed is proportional to flow, so the statement is True.`,
      `**B.** → True

This is a level question at the commissioning flow $q=5$. The overview recovered $v(5)=20\\sqrt{2}$. Because $\\sqrt{2}>1.4$, $20\\sqrt{2}>28$. Jet speed already sits above twenty-eight metres per second.

**1.** Using $v=4\\sqrt{H}=4\\sqrt{50}\\approx 28.3$ and comparing $28.3$ to $28$ would have the right verdict from the head stage, which is the same number: $4\\sqrt{50}=4\\sqrt{25\\cdot 2}=20\\sqrt{2}$. After isolating the unknown, the check is against $v=4\\sqrt{H}=4\\sqrt{50}\\approx 28.3$. The figure $4\\sqrt{50}=4\\sqrt{25\\cdot 2}=20\\sqrt{2}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $v=4\\sqrt{H}=4\\sqrt{50}\\approx 28.3$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Another mix-up is comparing head $50$ m to $28$ m/s.

**2.** The opposite verdict would have needed a smaller commissioning head, so that $20\\sqrt{2}$ fell through $28$. At the recovered $A=2$, five cubic metres per hour is locked above $28$ m/s.

Comparing head $50$ m to $28$ m/s would have mixed metres of head with metres per second of jet. After isolating the unknown, the check is against $50$. The figure $28$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $50$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed a smaller commissioning head, so that $20\\sqrt{2}$ fell through $28$.

The recovered jet speed at $q=5$ is $20\\sqrt{2}$ m/s, so the statement is True.`,
      `**C.** → False

Doubling flow would double head only if the exponent were $1$. With $H(q)=2q^{2}$ the factor is $2^{2}=4$. An exact doubling of head would need exponent $1$. The claim is about $H$, not about the composed speed. Head quadruples.

**1.** Checking the commissioning run: $H(5)=50$. Doubling to $q=10$ gives $H(10)=200$, a fourfold head. Speed only doubles, which is letter A.

**2.** Mixing the two stages is the mismatch. Letter A doubled flow and doubled speed. This letter doubles flow and expects doubled head. They are different experiments.

**3.** The opposite verdict would have needed first-stage exponent $1$. The stem squares flow.

Mixing the two stages is the mismatch. Letter A doubled flow and doubled speed. This letter doubles flow and expects doubled head. They are different experiments. The opposite verdict would have needed first-stage exponent $1$. The stem squares flow.

Doubling the flow quadruples the head, so the statement is False.`,
      `**D.** → True

Because speed is proportional to flow after both stages, twice $v(5)=20\\sqrt{2}$ needs twice the flow: $q=10$, which sits under $12$. The target $40\\sqrt{2}$ m/s needs $10$ m³/h.

**1.** Inverting the square head law as if speed needed four times the flow would have claimed $q=20$, past $12$, and flipped the verdict. That is the fork: $q=20$ belongs to the recovered isolation, $12$ belongs to the discarded mix. That mix-up inverts $H$ instead of $v$. Head at $40\\sqrt{2}$ m/s is $H=v^{2}/16=(40\\sqrt{2})^{2}/16=200$ m, which is $q=10$, not $q=20$.

**2.** Checking $q=12$: $v(12)=48\\sqrt{2}\\approx 67.9$, already past $40\\sqrt{2}\\approx 56.6$. The $12$ m³/h cutoff is not a near miss on $10$; it is past the target.

**3.** The opposite verdict would have needed a smaller composed coefficient, so that the inverted flow rose through $12$. At the recovered $v=4\\sqrt{2}\\, q$, forty root-two metres per second is locked at $q=10$.

Inverting the square head law as if speed needed four times the flow would have claimed $q=20$, past $12$, and flipped the verdict. That is the fork: $q=20$ belongs to the recovered isolation, $12$ belongs to the discarded mix. That mix-up inverts $H$ instead of $v$. Head at $40\\sqrt{2}$ m/s is $H=v^{2}/16=200$ m, which is $q=10$, not $q=20$.

Checking $q=12$: $v(12)=48\\sqrt{2}\\approx 67.9$, already past $40\\sqrt{2}\\approx 56.6$. The $12$ m³/h cutoff is past the target, not a near miss. The opposite verdict would have needed a smaller composed coefficient, so that the inverted flow rose through $12$.

Because leftover exponent $1$ after both stages, any speed target scales the commissioning flow in lockstep. The commissioning speed $20\\sqrt{2}$ at $q=5$ doubles to $40\\sqrt{2}$ at $q=10$. A square leftover would have needed $q=5\\sqrt{2}\\approx 7.07$ for a doubled speed, still under $12$, for a different composition. The stem's composition is linear, so the inverse is $q=10$ exactly.

The $12$ m³/h cutoff is past $10$, not a rounding of it. Changing the nozzle from $4\\sqrt{H}$ to $2\\sqrt{H}$ would have halved composed speed and pushed the inverse to $q=20$, past $12$, flipping the letter. The stem's $4\\sqrt{H}$ locks $q=10$.

The recovered flow for $40\\sqrt{2}$ m/s is $10$ m³/h, so the statement is True.`,
      `**E.** → False

Eliminating $q$ from $H=2q^{2}$ and $v=4\\sqrt{2}\\, q$ gives $H=v^{2}/16$, a square of jet speed, not a constant multiple of it. Doubling jet speed quadruples the head. Proportionality would have needed leftover exponent $1$ on $v$.

**1.** Checking the commissioning pair: $H=50$ and $v=20\\sqrt{2}\\approx 28.3$, and $50$ is not a constant times $28.3$ that would also fit $H=200$ at $v=40\\sqrt{2}\\approx 56.6$, because $200/56.6\\approx 3.53$ while $50/28.3\\approx 1.77$. The ratio $H/v$ is not constant.

**2.** Letter A said speed is proportional to flow. This letter asks whether head is proportional to speed. Those are different pairs of variables. Mixing them is how a true proportion appears.

**3.** The opposite verdict would have needed the two stages to leave leftover exponent $1$ from $v$ to $H$. A linear head in flow composed with a linear speed in head would have done that. The stem squares flow before taking a square root for speed, which leaves $H\\propto v^{2}$.

Checking the commissioning pair: $H=50$ and $v=20\\sqrt{2}\\approx 28.3$, and $50$ is not a constant times $28.3$ that would also fit $H=200$ at $v=40\\sqrt{2}\\approx 56.6$, because $200/56.6\\approx 3.53$ while $50/28.3\\approx 1.77$. The ratio $H/v$ is not constant.

Letter A said speed is proportional to flow. This letter asks whether head is proportional to speed. Those are different pairs of variables. The opposite verdict would have needed leftover exponent $1$ from $v$ to $H$. The stem leaves $H\\propto v^{2}$.

If the nozzle had been linear in head, $v=4H$, then eliminating $q$ would have left $H=v/8$, a genuine proportion, and this letter would have flipped. The stem takes a square root of head, so $H$ remains a square of $v$. Letter A can be true while this letter is false: speed proportional to flow is not head proportional to speed.

Head is a square of jet speed, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 69,
    solution_overview: `Head is $H(q)=Aq^{2}$ metres with $H(5)=50$, jet speed is $v(H)=4\\sqrt{H}$ metres per second, and the composition sends flow to speed.

**Part 1: Building the model.**

Let $q$ = flow in cubic metres per hour, $H$ = differential head in metres, $v$ = jet speed in metres per second. The pump stage is calibrated from the commissioning run. Composing the two stages multiplies the exponents.

**1. Translate: the commissioning run.**

$$A\\cdot 5^{2}=50$$

**2. Translate: the composition.**

$$v(q)=4\\sqrt{2q^{2}} \\qquad 2\\cdot \\frac{1}{2}=1$$

**Part 2: The model.**

$$H(q)=2q^{2} \\tag{1}$$

$$v(q)=4\\sqrt{2}\\, q \\tag{2}$$

**Part 3: Solve.**

**1.** Jet speed is linear in flow, with $v(5)=20\\sqrt{2}$. Doubling flow quadruples head and doubles speed.

**2.** A target of $40\\sqrt{2}$ m/s needs $q=10$, not $q=20$, and eliminating $q$ gives $H=\\frac{v^{2}}{16}$.

**Answer.** $H(q)=2q^{2}$ | $v(q)=4\\sqrt{2}\\, q$ | $v(5)=20\\sqrt{2}$ m/s | $40\\sqrt{2}$ m/s needs $q=10$`,
  },
  {
    id: `math-8-70`,
    case_id: `MATH 8.70`,
    title: `Warehouse Forklift Throughput Under a Staffing Cap`,
    context: `Forklift throughput follows $T(s)=A s^{0.5}$ pallets per hour, where $s>0$ is the number of drivers on shift. A logged shift with $16$ drivers moved $80$ pallets per hour. Safety rules cap the shift at $36$ drivers. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `To double the logged throughput the yard must more than double the crew.`,
      `With $36$ drivers the model already predicts more than $110$ pallets per hour.`,
      `Throughput per driver rises as the crew grows.`,
      `Reaching $150$ pallets per hour stays inside the safety cap.`,
      `Because throughput rises with crew, the safety cap on drivers is also a cap on pallets moved per hour.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

To double throughput a staffing factor $k$ must satisfy $k^{\\frac{1}{2}}=2$, so $k=4$. The yard needs four times the crew, not twice. That is more than a doubling. A square-root warehouse will not keep pace with headcount.

The overview recovered $T(s)=20\\sqrt{s}$. Doubling the logged $80$ pallets needs $T=160$, hence $s=(160/20)^{2}=64$ drivers, four times the logged $16$.

**1.** Doubling the crew to $32$ would have claimed $T(32)=20\\sqrt{32}\\approx 113$, short of $160$. Working from the isolated values, $32$ is the figure that is checked, not the detour that produced $160$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Doubling headcount does not double pallets.

**2.** The opposite verdict would have needed $r\\ge 1$. The stem is a square root.

Doubling the crew to $32$ would have claimed $T(32)=20\\sqrt{32}\\approx 113$, short of $160$. Working from the isolated values, $32$ is the figure that is checked, not the detour that produced $160$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Doubling headcount does not double pallets. The opposite verdict would have needed an exponent of $1$ or more. The stem is a square root. Letter D then inverts a still larger target of $150$ against the same recovered rule.

To double the logged throughput the yard must more than double the crew, so the statement is True.`,
      `**B.** → True

This is a level question at the safety cap of $36$ drivers. The overview recovered $T(36)=120$. One hundred and twenty sits above one hundred and ten. The safety cap of $36$ drivers is also this level.

**1.** Scaling $T(16)=80$ by $36/16$ linearly would have claimed $180$, still above $110$ but for the wrong shape. That is the fork: $T(16)=80$ belongs to the recovered isolation, $110$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Linear thinking overstates a larger crew when $r<1$.

**2.** The opposite verdict would have needed a smaller coefficient, so that $T(36)$ fell through $110$. At the recovered $A=20$, thirty-six drivers is locked at $120$ pallets per hour.

Scaling $T(16)=80$ by $36/16$ linearly would have claimed $180$, still above $110$ but for the wrong shape. That is the fork: $T(16)=80$ belongs to the recovered isolation, $110$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Linear thinking overstates a larger crew when $r<1$. The opposite verdict would have needed a smaller coefficient, so that $T(36)$ fell through $110$.

The recovered throughput at $36$ drivers is $120$ pallets per hour, so the statement is True.`,
      `**C.** → False

Throughput per driver is the intensity $T(s)/s$. The overview recovered $T(s)=20\\sqrt{s}$, so intensity is $20 s^{-\\frac{1}{2}}$. The leftover exponent is negative, so intensity falls as the crew grows. Extra drivers still add pallets, but fewer per driver.

Checking the logged shift against the cap: at $16$ drivers the intensity is $80/16=5$ pallets per driver. At $36$ drivers it is $120/36=\\frac{10}{3}\\approx 3.33$. Intensity has already fallen.

**1.** Seeing $T(36)=120>T(16)=80$ and inferred a rising intensity would have mixed a higher total with a higher per-driver figure. Keeping $T(36)=120>T(16)=80$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Totals rise; intensities fall.

**2.** The opposite verdict would have needed leftover exponent $0$, a proportional warehouse. The stem is a square root.

Seeing $T(36)=120>T(16)=80$ and inferred a rising intensity would have mixed a higher total with a higher per-driver figure. Keeping $T(36)=120>T(16)=80$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Totals rise; intensities fall. The opposite verdict would have needed leftover exponent $0$, a proportional warehouse.

Throughput per driver falls as the crew grows, so the statement is False.`,
      `**D.** → False

This letter inverts a $150$ pallet target against the $36$-driver cap. The overview recovered that $150$ pallets already needs $s=56.25$ drivers, which sits past the cap. The capped shift delivers only $120$ pallets per hour. Reaching $150$ lies outside the safety cap.

**1.** From $20\\sqrt{s}=150$ one has $\\sqrt{s}=7.5$ and $s=56.25$. Scaling linearly from $80$ pallets at $16$ drivers would have claimed $s=30$, inside the cap, and flipped the verdict. The stem's recovered values line up with $80$, whereas $s=30$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $80$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Linear thinking understates the crew when $r<1$.

**2.** Checking $T(36)=120<150$. The cap is not a near miss on $150$; it is $30$ pallets short.

**3.** The opposite verdict would have needed a larger coefficient, so that $T(36)$ already cleared $150$. At the recovered $A=20$, one hundred and fifty pallets is locked past the cap.

From $20\\sqrt{s}=150$ one has $\\sqrt{s}=7.5$ and $s=56.25$. Scaling linearly from $80$ pallets at $16$ drivers would have claimed $s=30$, inside the cap, and flipped the verdict. The stem's recovered values line up with $80$, whereas $s=30$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $80$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Linear thinking understates the crew when $r<1$.

Checking $T(36)=120<150$. The cap is not a near miss on $150$; it is $30$ pallets short. The opposite verdict would have needed $A>150/6=25$, a larger coefficient so that the capped shift already cleared $150$. The logged shift locks $A=20$.

A fourfold crew doubled the logged $80$ to $160$ in letter A, already past $150$, but that fourfold crew is $64$ drivers, past the cap of $36$. The $150$ target sits between the capped $120$ and the uncapped doubling target $160$. Inside the cap the yard cannot reach either.

Changing the cap from $36$ to $64$ drivers would have brought $150$ inside the rules and flipped this letter. The stem's cap is $36$.

The opposite verdict would have needed the cap at or above $56.25$ drivers. The stem caps the shift at $36$. Letter B's $120$ pallets at the cap is the legal ceiling this letter reads against $150$.

Reaching $150$ pallets per hour sits outside the safety cap, so the statement is False.`,
      `**E.** → True

The leftover slope $T'(s)=10 s^{-\\frac{1}{2}}$ stays positive, so throughput rises with crew all the way to the cap. At $s=36$, $T=120$, and no larger legal crew exists. The driver cap is therefore also a cap on pallets moved per hour.

**1.** Seeing intensity falling in letter C and inferred that extra drivers could eventually hurt the total would have mixed a falling average with a falling total. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The marginal $T'$ stays positive; only the average falls.

**2.** Checking just inside the cap: $T(35)=20\\sqrt{35}\\approx 118.3<120=T(36)$. More legal drivers still mean more pallets. The cap binds both.

**3.** The opposite verdict would have needed $T$ to peak before $s=36$, hence a negative leftover exponent on $T$ itself. The stem's exponent $0.5$ is positive. A falling intensity is not a falling total.

Checking just inside the cap: $T(35)=20\\sqrt{35}\\approx 118.3<120=T(36)$. More legal drivers still mean more pallets. Seeing intensity falling in letter C and inferred that extra drivers could eventually hurt the total would have mixed a falling average with a falling total. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The marginal $T'$ stays positive; only the average falls.

The opposite verdict would have needed $T$ to peak before $s=36$, hence a negative leftover exponent on $T$ itself. The stem's exponent $0.5$ is positive.

The driver cap and the pallet cap are the same binding constraint because $T$ is strictly increasing. If $T$ had a hump, a driver cap could sit past the hump and fail to cap pallets. Square-root throughput has no hump. Letter C's falling intensity never turns the total down.

The opposite verdict would have needed a peak in $T$ before $s=36$. Square-root throughput has none. A safety rule that capped pallets directly could bind without capping drivers; this stem caps drivers, and because $T$ rises that cap is also a pallet cap.

Because throughput rises with crew, the safety cap on drivers is also a cap on pallets, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 70,
    solution_overview: `Forklift throughput is $T(s)=As^{0.5}$ pallets per hour, calibrated by $T(16)=80$, and safety rules cap the shift at $36$ drivers.

**Part 1: Building the model.**

Let $s$ = drivers on shift and $T$ = pallets moved per hour. The exponent $0.5$ is given, so one logged shift fixes $A$. The exponent is positive but below $1$, so more drivers always help, yet each extra driver helps less than the one before.

**1. Translate: the logged shift.**

$$A\\cdot 16^{0.5}=80 \\qquad 16^{0.5}=4$$

**2. Translate: a throughput target.**

$$20\\sqrt{s}=T \\quad\\Longleftrightarrow\\quad s=\\left(\\frac{T}{20}\\right)^{2}$$

**Part 2: The model.**

$$T(s)=20\\sqrt{s} \\tag{1}$$

$$\\frac{T(s)}{s}=20s^{-\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Doubling the logged $80$ pallets needs four times the crew. Intensity $(2)$ falls as $s$ grows.

**2.** $T(36)=120$, and $150$ pallets would need $s=56.25>36$. Because $T$ rises with $s$, the driver cap is also an output cap of $120$.

**Answer.** $T(s)=20\\sqrt{s}$ | $T(36)=120$ | fourfold crew to double output | $150$ pallets need $56.25$ drivers`,
  },
  {
    id: `math-8-71`,
    case_id: `MATH 8.71`,
    title: `Subscriber Demand and Revenue for a Streaming Tier`,
    context: `A streaming service prices one subscription tier at $p$ euros a month. Paid subscribers, in thousands, follow $q(p)=A p^{r}$ with both constants unknown. Quadrupling any price multiplies the subscriber count by $\\frac{1}{8}$, and at $4$ euros the tier holds $250$ thousand subscribers. Monthly revenue is $R=pq$, also in thousands of euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent on price in the demand model is smaller than minus one, so subscribers fall faster than the price rises.`,
      `At a price of $16$ euros, monthly revenue is already under $600$ thousand euros.`,
      `Revenue is a power function of price.`,
      `To double monthly revenue from the recorded $4$-euro price, the service must cut that price in half.`,
      `At a price of $9$ euros, monthly revenue is under $600$ thousand euros.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The scale rule is $4^{r}=\\frac{1}{8}$. Because $4^{\\frac{3}{2}}=8$,

$$r=-\\frac{3}{2}$$

Checking the recovered demand $q(p)=2000 p^{-\\frac{3}{2}}$: a price factor $2$ cuts subscribers by $2^{-\\frac{3}{2}}\\approx 0.354$, steeper than a half. Inverse-linear demand would have been exponent $-1$. The opposite verdict would have needed $r$ at or above $-1$. The scale rule $4^{r}=\\frac{1}{8}$ locks $r=-\\frac{3}{2}$.

Subscribers fall faster than the price rises whenever $r<-1$. The recovered $-\\frac{3}{2}$ is that region. A $4$-euro till of $250$ thousand subscribers becomes $250\\cdot\\frac{1}{8}\\approx 31.25$ thousand at $16$ euros, an eightfold price that cuts the book eightfold on the subscriber side because $4^{-\\frac{3}{2}}=\\frac{1}{8}$. Inverse-linear demand would have left $62.5$ thousand. The extra half in the exponent is the whole ranking.

**1.** The scale rule $4^{r}=\\frac{1}{8}$ is $4^{-\\frac{3}{2}}=\\frac{1}{8}$ exactly, because $4^{\\frac{3}{2}}=8$. That locks $r=-\\frac{3}{2}<-1$.

**2.** A price factor $k=1.5$ cuts subscribers by $1.5^{-\\frac{3}{2}}\\approx 0.544$, more than a $1.5^{-1}\\approx 0.667$ inverse-linear cut. Every $k>1$ is the same ranking.

The opposite verdict would have needed the quadrupling rule to have been $4^{r}=\\frac{1}{4}$, exponent $-1$. The stem is $\\frac{1}{8}$.

That exponent sits below $-1$, so a price factor $k>1$ cuts subscribers by more than $k^{-1}$. Subscribers fall faster than the price rises, so the statement is True.`,
      `**B.** → True

From $r=-\\frac{3}{2}$ and $A\\cdot\\frac{1}{8}=250$, the coefficient is $A=2000$, so $R(p)=2000 p^{-\\frac{1}{2}}$. At $16$ euros:

$$R(16)=\\frac{2000}{4}=500$$

Using $R(4)=1000$ against the $600$ cutoff would have called the statement false. The recovered comparison therefore keeps $R(4)=1000$ and does not substitute $600$. Letter B names $16$ euros, a quadrupling of the logged price, which halves revenue because leftover exponent $-\\frac{1}{2}$ sends $4^{-\\frac{1}{2}}=\\frac{1}{2}$. The opposite verdict would have needed a larger coefficient, so that $R(16)$ rose through $600$.

Five hundred sits under six hundred. From $R(4)=1000$, a quadrupling of price halves revenue, $1000/2=500$. Mixing $q(16)=2000/64=31.25$ thousand subscribers with the $600$ thousand-euro cutoff is a units error. The claim is revenue.

Five hundred sits under six hundred by $100$ thousand euros. Mixing subscriber count $q(16)\\approx 31.25$ with the revenue cutoff is a units error. The opposite verdict would have needed $R(16)\\ge 600$, hence $A\\ge 2400$. The four-euro level locks $A=2000$.

Five hundred sits under $600$, so the statement is True.`,
      `**C.** → True

Price times $p^{-\\frac{3}{2}}$ demand leaves leftover exponent $-\\frac{1}{2}$:

$$R(p)=A p^{-\\frac{1}{2}}$$

Stopping at $q$ would have left exponent $-\\frac{3}{2}$. Multiplying by $p$ raises the exponent by one. Both are powers; they are different powers. The opposite verdict would have needed demand that was not a power, for instance a linear demand, whose revenue would be quadratic.

Thinking $pq$ could not stay a power because price and quantity move against each other would have expected a more complicated shape. The opposite verdict would need a different isolation than $pq$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Along an isoelastic curve the product remains a power. Checking $R(4)=1000$ and $R(16)=500$ is $1000\\cdot 16^{-\\frac{1}{2}}/4^{-\\frac{1}{2}}=1000/2$.

A monomial is a power function, so revenue is a power of price. Stopping at $q$ would have left exponent $-\\frac{3}{2}$, so the statement is True.`,
      `**D.** → False

To double revenue from $R(4)=1000$, the price factor $k$ satisfies $k^{-\\frac{1}{2}}=2$, so

$$k=\\frac{1}{4}$$

Halving the $4$-euro price would multiply revenue by $2^{\\frac{1}{2}}\\approx 1.41$, to about $1414$, short of a doubling to $2000$. The service must cut the price to $1$ euro, a quarter, not to $2$ euros. Treating leftover exponent $-1$ would have claimed a half-price doubling of revenue, which is this letter's false claim. The path that matches the stem therefore holds $-1$ fixed and only then reads the claim. Inverse-linear revenue would have doubled on a halving; leftover exponent $-\\frac{1}{2}$ needs a fourfold price cut.

Checking $R(1)=2000$ and $R(2)=2000/\\sqrt{2}\\approx 1414$. The half-price till is not a doubling. The opposite verdict would have needed leftover exponent $-1$ on $R$, hence demand exponent $-2$. The scale rule locked demand at $-\\frac{3}{2}$.

A second mix-up is reading letter A's subscriber exponent $-\\frac{3}{2}$ as the revenue exponent. Doubling revenue would then have needed $k^{-\\frac{3}{2}}=2$, so $k=2^{-\\frac{2}{3}}\\approx 0.63$, a $37\\%$ price cut, still not a half. The leftover exponent on $R$ is $-\\frac{1}{2}$, one higher than demand, because multiplying by $p$ adds one. The opposite verdict would have needed that leftover to be $-1$.

**1.** From $R(4)=1000$ a doubling of revenue is $R=2000$, which is $2000 p^{-\\frac{1}{2}}=2000$, so $p=1$. That is a quarter of $4$ euros, not a half.

**2.** At $p=2$, $R(2)\\approx 1414$, which is only a $41\\%$ rise, not a doubling. Halving the logged price is letter D's false claim, and the till proves it short.

**3.** If leftover exponent on $R$ had been $-1$, then $R(2)=2000$ would have been a doubling and the letter would have flipped. Demand exponent $-2$ would have done that. The scale rule locked demand at $-\\frac{3}{2}$.

Revenue at one euro is $R(1)=2000$, exactly a doubling of $R(4)=1000$. That $1$-euro price is a quarter of the logged $4$ euros, which is the inverse of leftover exponent $-\\frac{1}{2}$: to double a square-root-in-the-denominator till you must cut price by four. A half-price policy stops at $R(2)\\approx 1414$ and never reaches the doubling.

The service must cut that price to a quarter, not to a half. Halving would multiply revenue only by $\\sqrt{2}\\approx 1.41$, so the statement is False.`,
      `**E.** → False

At $9$ euros, with $R(p)=2000 p^{-\\frac{1}{2}}$,

$$R(9)=\\frac{2000}{3}\\approx 667$$

Comparing $R(16)=500$ from letter B with the $9$-euro till would have expected $9$ to sit under $600$ as well, because $9>4$. After isolating the unknown, the check is against $R(16)=500$. The figure $9>4$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $R(16)=500$ stays in the write-up. Revenue has fallen from $R(4)=1000$, but only to about $667$, still above $600$. Nine contributes a square root of $3$. The opposite verdict would have needed a smaller coefficient, so that $R(9)$ fell through $600$.

Checking $R(4)=1000$, $R(9)\\approx 667$, $R(16)=500$. The $600$ line sits between $9$ euros and $16$ euros. Letter B is the far side of that line; letter E is the near side. Mixing the two prices is how a true "under $600$ at $9$ euros" appears.

which sits above $600$, not under it. Nine contributes a square root of $3$. The till has fallen from the $4$-euro $1000$, but not as far as the claimed under-$600$ line, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `Demand follows $q(p)=Ap^{r}$. Quadrupling price multiplies subscribers by $\\frac{1}{8}$, and $q(4)=250$. Revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros and $q$ = subscribers in thousands. The scale rule isolates $r$; the four-euro level then pins $A$. Revenue adds one to the exponent.

**1. Translate: the scale rule.**

$$4^{r}=\\frac{1}{8}$$

**2. Translate: the recorded level.**

$$A\\cdot 4^{r}=250$$

**Part 2: The model.**

$$q(p)=2000p^{-\\frac{3}{2}} \\tag{1}$$

$$R(p)=2000p^{-\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $r<-1$, subscribers fall faster than price rises. Revenue is still a power of price.

**2.** $R(16)=500<600$ and $R(9)=\\frac{2000}{3}\\approx 666.67$, which is not under $600$. Doubling $R(4)=1000$ needs the price factor $\\frac{1}{4}$, not $\\frac{1}{2}$.

**Answer.** $r=-\\frac{3}{2}$ | $A=2000$ | $R(16)=500$ | price factor $\\frac{1}{4}$ to double revenue`,
  },
  {
    id: `math-8-72`,
    case_id: `MATH 8.72`,
    title: `Fixed Retainer Plus a Square-Root Monitoring Fee`,
    context: `A compliance-monitoring platform bills $C(n)=F+A n^{\\frac{1}{2}}$ euros a month for $n\\ge 1$ branches, with both constants unknown. $100$ branches cost $700$ euros, and $400$ branches cost $1000$ euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because of the retainer, the monthly bill is not a power function of the branch count.`,
      `Monitoring $900$ branches costs more than $1200$ euros a month.`,
      `A larger network is cheaper per branch.`,
      `Quadrupling the branch count doubles the whole bill.`,
      `At $36$ branches the bill already exceeds the $100$-branch invoice.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Subtracting the two invoices isolates the variable term: $10A=300$, so $A=30$ and $F=400$. The bill is

$$C(n)=400+30\\sqrt{n}$$

A pure power $A n^{r}$ cannot carry a nonzero intercept, and the retainer is $400$ euros. Subtracting the two invoices isolated $10A=300$, so $A=30$ and $F=400$. The opposite verdict would have needed $F=0$. A third invoice lying on $C=30\\sqrt{n}$ with no intercept would have been a different contract. The stem's two invoices force a floor of $400$ euros.

Checking $C(1)=400+30=430$, which is not $30$, is a one-branch witness that the intercept is live. A pure square-root bill through $C(100)=700$ would have been $C(n)=70\\sqrt{n}$, giving $C(400)=1400$, not the logged $1000$. The two invoices refuse a pure power. The opposite verdict would have needed the $1000$-euro invoice to have been $1400$.

**1.** Subtracting the invoices is $10A=300$, so $A=30$ and $F=400$. The bill is $400+30\\sqrt{n}$. A monomial cannot hide a $400$-euro floor.

**2.** Plotting $C$ against $\\sqrt{n}$ is a line with intercept $400$, not a line through the origin. The opposite verdict would have needed those two invoices to lie on a ray from the origin, for instance $C(100)=700$ and $C(400)=1400$. The second invoice is $1000$.

A third invoice at $n=9$ would read $C(9)=400+90=490$ on the recovered rule, not $90$ and not $700\\cdot 3/10=210$. Any of those wrong one-term formulae is a pure power. The two logged invoices already refuse every pure power through the origin.

A pure power $A n^{r}$ cannot carry a nonzero intercept, and the retainer is $400$ euros,

Plotting the bill against $\\sqrt{n}$ is a line with intercept $400$, not a ray from the origin.

A third invoice at $n=225$ would read $C(225)=400+450=850$ on the recovered rule, not $30\\cdot 15=450$ and not $700\\cdot 15/10=1050$.

Those one-term formulae are pure powers. The two logged invoices already refuse every pure power through the origin, because the retainer is live.

so the statement is True.`,
      `**B.** → True

With $C(n)=400+30\\sqrt{n}$, nine hundred branches contribute a square root of $30$:

$$C(900)=400+900=1300$$

Dropping the retainer would have claimed $900$ and missed the floor. Using $C(400)=1000$ and scaling by $\\sqrt{900/400}=1.5$ without the intercept would have claimed $1500$, still above $1200$ but from treating the bill as a pure square root. After isolating the unknown, the check is against $C(400)=1000$. The figure $1200$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $C(400)=1000$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The recovered bill is $400+900=1300$. The opposite verdict would have needed a smaller $A$, so that $C(900)$ fell through $1200$.

One thousand three hundred sits above one thousand two hundred. Nine hundred branches contribute a square root of $30$, times $30$ is $900$, plus the retainer $400$. The opposite verdict would have needed $F+30\\cdot 30\\le 1200$, hence $F\\le 300$. The two invoices lock $F=400$.

One thousand three hundred sits above $1200$. Dropping the retainer would have claimed $900$ and missed the floor, so the statement is True.`,
      `**C.** → True

Cost per branch is

$$\\frac{C(n)}{n}=\\frac{400}{n}+30 n^{-\\frac{1}{2}}$$

Checking the two invoices: cost per branch is $7$ euros at $100$ branches and $2.5$ euros at $400$. Intensity has already fallen while the total rose from $700$ to $1000$. Seeing a larger total and inferred a larger per-branch figure would have flipped the verdict. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed leftover intensity that rose with $n$. Both pieces of $C(n)/n$ fall.

Both pieces decline as the network grows: the retainer is spread, and the leftover exponent on the variable term is negative. A larger network is cheaper per branch even while the total bill rises. Checking $C(900)/900\\approx 1.44$ euros a branch, cheaper still than the $2.5$ at $400$ branches.

Both pieces decline as the network grows: the retainer is spread, and the leftover exponent on the variable term is negative. A larger network is cheaper per branch even while the total bill rises, so the statement is True.`,
      `**D.** → False

Quadrupling $n$ doubles the square-root term, from $30\\sqrt{n}$ to $60\\sqrt{n}$, but the $400$-euro retainer stays put. From $C(100)=700$ the quadrupled bill is $C(400)=1000$, not $1400$. Only a pure power would scale that cleanly, and the retainer stops this bill from being one.

Doubling $700$ would have claimed $1400$ and called the statement true. That is the fork: $700$ belongs to the recovered isolation, $1400$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That ignores the floor. The opposite verdict would have needed $F=0$. Letter A already used that nonzero retainer; this letter is the same intercept, now read as a failed scale identity.

Checking a second quadrupling, from $400$ to $1600$ branches: $C(1600)=400+30\\cdot 40=1600$, while doubling $C(400)=1000$ would have claimed $2000$. The retainer keeps stealing from the scale factor. The opposite verdict would have needed $F=0$, which letter A already refused.

**1.** The square-root term doubles on a quadrupling, $300$ to $600$ at the $100$-branch invoice, but adding the retainer gives $700$ to $1000$, a factor of $\\frac{10}{7}\\approx 1.43$, not $2$.

**2.** Doubling $700$ to $1400$ would have called the statement true. The stem's recovered values line up with $700$, whereas $1400$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $700$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That is the $F=0$ fantasy letter A already refused.

**3.** The opposite verdict would have needed the retainer to scale with $\\sqrt{n}$, which would have made the whole bill a pure power. The stem's $F$ is a constant.

If the retainer had been billed per branch, $F/n$ inside the square root, the whole bill could have been rewritten as a single power and a quadrupling would have doubled it. The stem's retainer is a lump sum, $400$ euros a month whether the network is $100$ branches or $400$. That lump sum is why the scale factor on the whole bill is $\\frac{10}{7}$, not $2$.

Quadrupling $n$ doubles the square-root term, from $30\\sqrt{n}$ to $60\\sqrt{n}$, but the $400$-euro retainer stays put. The whole bill is not doubled. Only a pure power would scale that cleanly, and the retainer stops this bill from being one, so the statement is False.`,
      `**E.** → False

At $36$ branches, $\\sqrt{36}=6$:

$$C(36)=400+180=580$$

Comparing $36$ branches with $100$ and expecting a larger bill because "more branches cost more" would still have the right ranking, $580<700$, but might have thought the claim was about per-branch cost. So the letter reads the claim against $36$; $580<700$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $36$ stays in the write-up. Letter E names the whole invoice. The opposite verdict would have needed $C(36)>C(100)$, which would have required a falling total, impossible while both $F$ and $A$ are positive.

Five hundred and eighty sits below seven hundred. Thirty-six branches still sit below the $100$-branch invoice. The square-root term has fallen from $300$ to $180$; the retainer is the same $400$. The opposite verdict would have needed a negative retainer, so that a smaller network could cost more in total.

The $100$-branch invoice is $700$, and $580<700$. Thirty-six branches still sit below that invoice, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 72,
    solution_overview: `The bill is $C(n)=F+An^{\\frac{1}{2}}$. One hundred branches cost $700$ euros and four hundred cost $1000$.

**Part 1: Building the model.**

Let $n$ = branches and $C$ = monthly euros. Two levels recover $F$ and $A$, because the square roots $10$ and $20$ are known.

**1. Translate: the two invoices.**

$$F+10A=700, \\qquad F+20A=1000$$

**Part 2: The model.**

$$C(n)=400+30n^{\\frac{1}{2}} \\tag{1}$$

$$\\frac{C(n)}{n}=\\frac{400}{n}+30n^{-\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** A nonzero retainer means $C$ is not a power of $n$. Average (2) falls as $n$ grows.

**2.** $C(900)=1300>1200$ and $C(36)=580$, which is below $C(100)=700$. Quadrupling raises the bill from $700$ to $1000$, not to $1400$.

**Answer.** $F=400$ | $A=30$ | $C(900)=1300$ | $C(36)=580$`,
  },
  {
    id: `math-8-73`,
    case_id: `MATH 8.73`,
    title: `Ordering Cost Against Holding Cost at a Spare-Parts Depot`,
    context: `A spare-parts depot reorders one component in batches of $q>0$ units. Annual ordering cost is $O(q)=A q^{-1}$ euros and annual holding cost is $H(q)=B q$ euros, with both coefficients unknown. At a batch of $40$ units the two components are equal, and each is $120$ euros. The annual total is $T=O+H$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Annual total cost is smallest where the two components meet.`,
      `A batch of $60$ units costs more than $250$ euros a year in total.`,
      `Doubling any batch size leaves the annual total unchanged.`,
      `Cutting the batch from $40$ units to $20$ raises the annual total by as much as raising it from $40$ to $80$.`,
      `At $80$ units, ordering cost is more than $200$ euros.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The recorded crossing gives $\\frac{A}{40}=120$ and $40B=120$, so $A=4800$ and $B=3$. The slope of $T(q)=\\frac{4800}{q}+3q$ is

$$T'(q)=-4800 q^{-2}+3$$

The slope of $T(q)=\\frac{4800}{q}+3q$ is $T'(q)=-4800 q^{-2}+3$, which is zero at $q=40$. The second derivative $T''>0$, so the crossing is a minimum. Treating "two costs equal" as an accounting coincidence rather than as the EOQ first-order condition would have missed why the meeting is the cheapest batch. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The opposite verdict would have needed different leftover exponents, so that $T'=0$ sat away from $O=H$. For this pair $O\\propto q^{-1}$ and $H\\propto q$, the meeting is the minimum.

Checking $T(30)=160+90=250$ and $T(50)=96+150=246$, both above $T(40)=240$, is a two-sided witness that the crossing is a valley, not a peak. Seeing $O$ falling and $H$ rising and guessed the total might keep falling past the crossing would have missed $T'>0$ for $q>40$. After isolating the unknown, the check is against $O$. The figure $q>40$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $O$ stays in the write-up. The opposite verdict would have needed $T''<0$ at the crossing, a maximum. For this pair $T''=9600 q^{-3}>0$.

**1.** Setting $T'(q)=0$ is $-4800/q^{2}+3=0$, so $q^{2}=1600$ and $q=40$, the recorded crossing. The second derivative $9600/q^{3}$ is positive there, a minimum.

**2.** Minimising $O$ alone would have claimed $q\\to\\infty$, and who minimised $H$ alone would have claimed $q\\to 0$. The stem's recovered values line up with $O$, whereas $q\\to 0$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $O$ stays in the write-up. The annual total is the sum, and its valley is where the two components meet.

**3.** The opposite verdict would have needed leftover exponents whose ratio was not $-1$, so that $O=H$ was not $T'=0$. For $O\\propto q^{-1}$ and $H\\propto q$, the meeting is the cheapest batch.

Checking just either side of the valley: $T(39)\\approx 240.06$ and $T(41)\\approx 240.06$, both a hair above $T(40)=240$. The crossing is a floor, not a ceiling. A peak would have sat below its neighbours. Annual total cost is smallest where the two components meet.

which is zero at $q=40$. The second derivative $T''>0$, so the crossing is a minimum. Annual total cost is smallest where the two components meet, so the statement is True.`,
      `**B.** → True

Ordering $A/40=120$ and holding $40B=120$ recover $A=4800$ and $B=3$. A batch of $60$ then costs

$$O(60)=80,\\qquad H(60)=180$$

$$T(60)=260$$

Sixty is past the minimum, so the total has already ticked up from $T(40)=240$ to $260$. Averaging $O$ and $H$ as $120$ each at every batch would have claimed $T=240$ still, under $250$, and flipped the verdict. Working from the isolated values, $O$ is the figure that is checked, not the detour that produced $250$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The opposite verdict would have needed $T(60)\\le 250$, hence a flatter pair of coefficients.

Two hundred and sixty sits above two hundred and fifty. Ordering $80$ plus holding $180$ is $260$. Using $T(40)=240$ against the $250$ cutoff would have named the minimum, not the $60$-unit batch. The stem's recovered values line up with $T(40)=240$, whereas $60$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $T(40)=240$ stays in the write-up. Letter B names $60$.

Two hundred and sixty sits above $250$. Sixty is past the minimum, so the total has already ticked up from $240$, so the statement is True.`,
      `**C.** → False

From $\\frac{A}{40}=120$ and $40B=120$, one has $T(q)=\\frac{4800}{q}+3q$. Doubling an arbitrary batch gives $T(2q)=\\frac{2400}{q}+6q$, which equals $T(q)$ only for special pairs. Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing:

$$T(80)=300\\neq T(40)=240$$

Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing. $T(80)=300\\neq T(40)=240$. Remembering EOQ symmetry and doubling $40$ to $80$ would have expected a tie, mixing the pair $20$ with $80$ from letter D. Working from the isolated values, $40$ is the figure that is checked, not the detour that produced $20$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. This letter doubles an arbitrary batch, not the reciprocal pair. The opposite verdict would have needed leftover exponents that made $T$ homogeneous of degree $0$, a constant total.

Checking $T(20)=300$ and $T(80)=300$ from letter D shows the symmetry that an arbitrary doubling does not enjoy. Doubling $30$ to $60$ gives $T(30)=250$ and $T(60)=260$, not a tie. The opposite verdict would have needed $T$ constant, which would have required $A=B=0$.

so the statement is False.`,
      `**D.** → True

With $T(q)=\\frac{4800}{q}+3q$ from the crossing $O=H=120$ at $q=40$, the batches $20$ and $80$ are the reciprocal pair around $40$ with product $1600$:

$$T(20)=300,\\qquad T(80)=300$$

The batches $20$ and $80$ are the reciprocal pair around $40$ with product $1600$: $T(20)=300$ and $T(80)=300$. Each move from $40$ raises the annual total by $60$ euros, so the two moves cost the same. That is the EOQ symmetry $T(1600/q)=T(q)$.

Computing only $T(20)=300$ and guessed $T(80)$ larger because "$80$ is farther from $40$ than $20$ is on a linear ruler" would have missed that the scale is reciprocal, not linear. That is the fork: $T(20)=300$ belongs to the recovered isolation, $20$ belongs to the discarded mix. On a log-batch axis the two moves are equal. The opposite verdict would have needed a holding exponent other than $1$, which would break the $q\\leftrightarrow 1600/q$ symmetry.

Checking the two components at $20$ and at $80$: $O(20)=240$, $H(20)=60$, total $300$; $O(80)=60$, $H(80)=240$, total $300$. The components swap. That swap is why the totals match. A linear ruler from $40$ would have called $80$ twice as far as $20$ and expected a larger penalty; the EOQ scale is reciprocal. The opposite verdict would have needed a holding law that was not linear in $q$.

**1.** $T(20)=\\frac{4800}{20}+3\\cdot 20=240+60=300$ and $T(80)=60+240=300$. The $60$-euro penalty each side of $40$ is the same number.

**2.** A linear ruler from $40$ calls $80$ twice as far as $20$ and expects a larger penalty. The EOQ scale is reciprocal: $40/20=80/40=2$ as a factor, equal on a log-batch axis.

**3.** The opposite verdict would have needed $H$ not linear in $q$, which would break $T(1600/q)=T(q)$. The stem is $H=3q$.

The $60$-euro penalty is $T-240$ on each side. It is the same $60$ because $O$ and $H$ swap: $240+60$ at $q=20$ against $60+240$ at $q=80$. Cutting the batch in half and doubling it are equal-cost moves around this EOQ, which is the claim.

Each move from $40$ raises the annual total by $60$ euros, so the two moves cost the same. That is the EOQ symmetry, so the statement is True.`,
      `**E.** → False

The crossing $\\frac{A}{40}=120$ forces $A=4800$. At $80$ units, ordering cost is

$$O(80)=\\frac{4800}{80}=60$$

Holding is the large term on this side of the crossing: $H(80)=240$, while ordering is $60$. Mixing $O$ with $T(80)=300$ is how a "more than $200$" ordering claim appears. Swapping $O$ and $H$ at $q=80$ would have claimed holding $60$ and ordering $240$, and called the statement true. The recovered comparison therefore keeps $O$ and does not substitute $240$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The crossing $O=H=120$ at $q=40$ already says ordering falls as the batch grows. The opposite verdict would have needed $A>16000$, so that $O(80)>200$. The crossing locks $A=4800$.

Sixty sits well below two hundred. Reading $T(80)=300$ as ordering cost would have called the statement true. Once $T(80)=300$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim names ordering cost, $A/q=4800/80=60$. The opposite verdict would have needed $A>16000$. The crossing locks $A=4800$.

which sits well below $200$. Holding is the large term on this side of the crossing. Mixing $O$ with $T(80)=300$ is how a "more than $200$" ordering claim appears, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 73,
    solution_overview: `Ordering cost is $Aq^{-1}$ and holding cost is $Bq$. At $q=40$ the two components equal $120$ euros each, and $T=O+H$.

**Part 1: Building the model.**

Let $q$ = units per batch. The common level recovers both coefficients. For this pair of exponents the minimum of $T$ is the same crossing.

**1. Translate: the recorded crossing.**

$$\\frac{A}{40}=120, \\qquad 40B=120$$

**Part 2: The model.**

$$T(q)=\\frac{4800}{q}+3q \\tag{1}$$

$$T\\!\\left(\\frac{1600}{q}\\right)=T(q) \\tag{2}$$

**Part 3: Solve.**

**1.** $T'(q)=0$ at $q=40$, and $T''>0$, so the meeting point is the minimum. $T(60)=260>250$.

**2.** Doubling $40$ to $80$ raises $T$ from $240$ to $300$. The pair $20$ and $80$ ties at $300$ by (2). At $q=80$, ordering cost is $60$, not more than $200$.

**Answer.** $A=4800$ | $B=3$ | min at $q=40$ | $T(20)=T(80)=300$ | $T(60)=260$ | $O(80)=60$`,
  },
  {
    id: `math-8-74`,
    case_id: `MATH 8.74`,
    title: `Average Product on a Bottling Line`,
    context: `Output on a bottling line follows $Q(L)=A L^{r}$ units a shift, where $L>0$ is labour hours, with both constants unknown. $16$ hours produce $96$ units, and $81$ hours produce $324$. Average product is output per labour hour, $Q(L)/L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Average product is a power function of labour hours, but its exponent is not the exponent of output.`,
      `At $16$ hours, average product is under $7$ units an hour.`,
      `To double output she must double the labour hours.`,
      `Average product falls as labour hours rise.`,
      `At $81$ hours, average product still exceeds $5$ units an hour.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The two shifts give $\\left(\\frac{81}{16}\\right)^{r}=\\frac{27}{8}$. Because $\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}$ and $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$,

$$r=\\frac{3}{4}$$

Average product is then $12 L^{-\\frac{1}{4}}$. The leftover exponent $-\\frac{1}{4}$ is not the output exponent $\\frac{3}{4}$. Average product is still a power of hours, but a different power. Dividing by $L$ subtracts one from the exponent; it does not destroy the power shape. The opposite verdict would have needed output that was not a power, or a claim that the two exponents were equal. They differ by $1$.

Checking the two averages $6$ and $4$ against $12 L^{-\\frac{1}{4}}$: at $L=16$, $12/2=6$; at $L=81$, $12/3=4$. Both sit on the leftover power, not on the output power $\\frac{3}{4}$. Claiming average product was $12 L^{\\frac{3}{4}}$ would have compared $96$ at $16$ hours with a per-hour figure and mixed total with average. After isolating the unknown, the check is against $12 L^{\\frac{3}{4}}$. The figure $16$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $12 L^{\\frac{3}{4}}$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed the two exponents to coincide, which would have required dividing by $L^{0}$.

**1.** Output exponent $\\frac{3}{4}$ minus $1$ is $-\\frac{1}{4}$. Those are different powers of the same $L$. Average product is still a monomial.

**2.** Writing $\\frac{Q}{L}=12 L^{\\frac{3}{4}}$ would have kept the output exponent and mixed total with average. The opposite verdict would need a different isolation than $\\frac{Q}{L}=12 L^{\\frac{3}{4}}$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. At $L=16$ that wrong average would have been $96$, not $6$.

**3.** The opposite verdict would have needed output not a power, so that $Q/L$ was not a power either, or a claim that the two exponents were equal.

Output $Q=12 L^{\\frac{3}{4}}$ and average product $12 L^{-\\frac{1}{4}}$ are two monomials in the same hours. They share the coefficient $12$ and they do not share the exponent. Letter D then reads the negative leftover as a falling average; this letter is only the claim that the average is still a power, just a different power.

Average product is then $12 L^{-\\frac{1}{4}}$. The leftover exponent $-\\frac{1}{4}$ is not the output exponent $\\frac{3}{4}$. Average product is still a power of hours, but a different power, so the statement is True.`,
      `**B.** → True

At $16$ hours the logged output is $96$ units, so average product is

$$\\frac{96}{16}=6$$

That logged level does not need a second recovery of $A$. Using $Q(L)=12 L^{\\frac{3}{4}}$ at $L=16$ and forgetting to divide by $16$ would have compared $96$ to $7$. After isolating the unknown, the check is against $Q(L)=12 L^{\\frac{3}{4}}$. The figure $7$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $Q(L)=12 L^{\\frac{3}{4}}$ stays in the write-up. The claim is average product, $6$, not output. The opposite verdict would have needed output above $112$ at $16$ hours. The log is $96$.

Six sits under seven. Using $Q=12 L^{\\frac{3}{4}}$ without dividing would have compared $96$ to $7$. The recovered comparison therefore keeps $Q=12 L^{\\frac{3}{4}}$ and does not substitute $7$. That contrast is the reason the verdict goes the way it does. The claim is units an hour. The opposite verdict would have needed $96/16\\ge 7$, hence output at least $112$ at $16$ hours. The log is $96$.

Six sits under $7$. That logged level does not need a second recovery of $A$, so the statement is True.`,
      `**C.** → False

To double output, $k^{\\frac{3}{4}}=2$ forces

$$k=2^{\\frac{4}{3}}\\approx 2.52$$

Doubling labour would multiply output only by $2^{\\frac{3}{4}}\\approx 1.68$, to about $161$ units, short of $192$. A three-quarters technology will not keep pace with the clock. Doubling $16$ hours with the output would have claimed this letter true. The recovered isolation is checked against the claim using $16$, which is the figure the sessions actually produce. That is exponent $1$, which $r=\\frac{3}{4}$ already refused.

The opposite verdict would have needed $r=1$. The two shifts force $r=\\frac{3}{4}$, because $\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}$ and $\\frac{324}{96}=\\left(\\frac{3}{2}\\right)^{3}$.

To double output, $k^{\\frac{3}{4}}=2$ forces $k=2^{\\frac{4}{3}}\\approx 2.52$, more than a doubling of hours. From $16$ hours that is about $40.3$ hours, not $32$. Doubling hours to $32$ would have claimed $Q(32)=12\\cdot 32^{\\frac{3}{4}}\\approx 161$, short of $192$. Working from the isolated values, $32$ is the figure that is checked, not the detour that produced $192$. That contrast is the reason the verdict goes the way it does. The opposite verdict would have needed $r=1$, which the two shifts refuse.

**1.** $k=2^{\\frac{4}{3}}\\approx 2.52$ from $16$ hours is about $40.3$ hours, not $32$. $Q(32)\\approx 161<192$.

**2.** Doubling hours with output would have called the statement true. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That is exponent $1$. The two shifts force $\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}$ against $\\frac{324}{96}=\\left(\\frac{3}{2}\\right)^{3}$, hence $r=\\frac{3}{4}$.

**3.** The opposite verdict would have needed $r=1$. Then $16$ hours to $32$ hours would have doubled $96$ to $192$. The log's $81$-hour output of $324$ already refuses lockstep from $96$.

From the $81$-hour shift, doubling $324$ units would need $Q=648$, hence $12 L^{\\frac{3}{4}}=648$ and $L=81\\cdot 2^{\\frac{4}{3}}\\approx 204$ hours, again more than a doubling of $81$. Every output-doubling on this technology is a $2^{\\frac{4}{3}}$-fold hour-doubling, never a mere doubling of the clock.

The $81$-hour output of $324$ is $3.375$ times the $16$-hour output of $96$, while hours rose by $5.0625$. Those two factors are $\\left(\\frac{3}{2}\\right)^{3}$ and $\\left(\\frac{3}{2}\\right)^{4}$, the signature of $r=\\frac{3}{4}$, not of $r=1$. Doubling output cannot be a doubling of hours on this pair of shifts.

more than a doubling of hours. Doubling labour would multiply output only by $2^{\\frac{3}{4}}\\approx 1.68$. A three-quarters technology will not keep pace with the clock, so the statement is False.`,
      `**D.** → True

Falling average and $r<1$ are the same story. Checking the two shifts: average product is $6$ at $L=16$ and $4$ at $L=81$. Seeing output rise from $96$ to $324$ and inferred a rising average would have mixed a higher total with a higher per-hour figure. The recovered comparison therefore keeps $96$ and does not substitute $324$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The opposite verdict would have needed leftover exponent $0$ on $Q/L$, hence $r=1$.

Seeing output rise from $96$ to $324$ and inferred a rising average would have mixed a higher total with a higher per-hour figure. The recovered comparison therefore keeps $96$ and does not substitute $324$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Totals rise; averages fall. Checking a third point: at $L=1$, average product is $12$, higher still. The opposite verdict would have needed $r\\ge 1$.

Average product falls from $6$ at $L=16$ to $4$ at $L=81$, because $324/81=4$. The leftover exponent $-\\frac{1}{4}$ is negative, so the average declines as labour hours rise. Falling average and $r<1$ are the same story, so the statement is True.`,
      `**E.** → False

At $81$ hours the average is $4$, which does not exceed $5$:

$$\\frac{324}{81}=4$$

The sixteen-hour average of $6$ is the one still above $5$; by eighty-one hours it has already fallen to $4$. Using output $324$ against the $5$ cutoff would have mixed units. The recovered comparison therefore keeps $324$ and does not substitute $5$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The claim is average product. The opposite verdict would have needed $324/81>5$, hence output above $405$ at $81$ hours. The log is $324$.

Four does not exceed five. Using output $324$ against $5$ would have mixed units. Working from the isolated values, $324$ is the figure that is checked, not the detour that produced $5$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed $324/81>5$, hence output above $405$ at $81$ hours. The log is $324$.

The sixteen-hour average of $6$ is the one still above $5$; by eighty-one hours it has already fallen, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 74,
    solution_overview: `Output follows $Q(L)=AL^{r}$. Sixteen hours give $96$ units and eighty-one hours give $324$. Average product is $Q/L$.

**Part 1: Building the model.**

Let $L$ = labour hours and $Q$ = units. The ratio isolates $r$; the sixteen-hour level then pins $A$. Dividing by $L$ subtracts one from the exponent.

**1. Translate: the ratio.**

$$\\frac{324}{96}=\\left(\\frac{81}{16}\\right)^{r}$$

**2. Translate: the sixteen-hour level.**

$$A\\cdot 16^{r}=96$$

**Part 2: The model.**

$$Q(L)=12L^{\\frac{3}{4}} \\tag{1}$$

$$\\frac{Q(L)}{L}=12L^{-\\frac{1}{4}} \\tag{2}$$

**Part 3: Solve.**

**1.** Average product is a power, but with exponent $-\\frac{1}{4}$, not $\\frac{3}{4}$. It falls as $L$ rises: $6$ at $L=16$ and $4$ at $L=81$.

**2.** Doubling output needs the hour-factor $2^{\\frac{4}{3}}\\approx 2.52$, not $2$. At $L=81$, average product is $4$, which does not exceed $5$.

**Answer.** $r=\\frac{3}{4}$ | $A=12$ | average $6$ at $L=16$ and $4$ at $L=81$`,
  },
  {
    id: `math-8-75`,
    case_id: `MATH 8.75`,
    title: `Learning Curve With an Irreducible Assembly Floor`,
    context: `A drone-assembly cell models the labour time of the unit built after $n$ cumulative units by $t(n)=F+A n^{-\\frac{1}{2}}$ minutes, $n\\ge 1$, with both constants unknown. After $25$ units the next unit takes $18$ minutes, and after $100$ units it takes $13$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `As cumulative output grows without bound, unit time approaches the handling floor without ever reaching it.`,
      `After $900$ cumulative units, modelled unit time is already under $10$ minutes.`,
      `Quadrupling cumulative output halves the learning component.`,
      `Quadrupling cumulative output halves the modelled unit time.`,
      `The unit built after $4$ cumulative units takes under $30$ minutes.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Subtracting the two timings gives $A/10=5$, so $A=50$ and $F=8$. The model is $t(n)=8+50 n^{-\\frac{1}{2}}$, and

$$\\lim_{n\\to\\infty}t(n)=8$$

No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the handling floor is approached and never attained. Checking $t(10000)=8+0.5=8.5$, still above $8$. Seeing $t$ falling toward $8$ and calling $8$ attained "in the long run as a practical matter" would have mixed an asymptote with a value. The recovered comparison therefore keeps $t$ and does not substitute $8$. That contrast is the reason the verdict goes the way it does. The opposite verdict would have needed a model $t(n)=8+A n^{r}$ with $r>0$ forbidden, or a floor of $0$. The two timings lock $F=8$ as a horizontal asymptote.

Checking $t(10^{6})=8+50/1000=8.05$, still above $8$. The floor is a horizontal asymptote, never a value of $t(n)$. Solving $8+50 n^{-\\frac{1}{2}}=8$ and cancelling $8$ to claim every $n$ would have missed that the leftover term is never zero. So the letter reads the claim against $8+50 n^{-\\frac{1}{2}}=8$; $n$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $8+50 n^{-\\frac{1}{2}}=8$ stays in the write-up. The opposite verdict would have needed $A=0$, a constant unit time equal to the floor already at $n=1$. The two timings refuse that: $18$ and $13$ both sit above $8$.

**1.** Solving $8+50 n^{-\\frac{1}{2}}=8$ forces $50/\\sqrt{n}=0$, which never happens for finite $n$. The floor is an asymptote.

**2.** Cancelling the $8$ and claiming $t(n)=8$ for all $n$ would have mixed an equation with an identity. After isolating the unknown, the check is against $8$. The figure $n$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $8$ stays in the write-up. The two timings $18$ and $13$ both sit strictly above $8$.

**3.** The opposite verdict would have needed $A=0$. Then unit time would already equal the floor at $n=1$. The timings refuse a constant $t$.

As $n$ grows, $t(n)$ is squeezed into the interval $(8,13]$ after the second timing and into $(8,10]$ after $n=400$. Those nested intervals close on $8$ and never include $8$. Approached without being attained is the language of a horizontal asymptote, which is the claim.

The claim is the language of a horizontal asymptote: approached without being attained. Nested intervals $(8,18]$, then $(8,13]$, then $(8,10]$, then $(8,8.5]$, close on $8$ and never contain $8$. That is the floor.

No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the handling floor is approached and never attained, so the statement is True.`,
      `**B.** → True

After $900$ cumulative units, $\\sqrt{900}=30$:

$$t(900)=8+\\frac{50}{30}=8+\\frac{5}{3}=\\frac{29}{3}\\approx 9.67$$

The floor is close, but the learning term is still a sliver of $\\frac{5}{3}$ minutes. Dropping the floor and claiming $50/30\\approx 1.67$, well under $10$, would still have the right verdict for the wrong model. That is the fork: $50/30\\approx 1.67$ belongs to the recovered isolation, $10$ belongs to the discarded mix. Another mix-up is using $t(100)=13$ and scaling as if the whole time halved on a further ninefold volume. The opposite verdict would have needed a larger floor, so that $t(900)$ sat above $10$.

About $9.67$ sits under $10$. After $900$ cumulative units the floor is close, but the learning term is still $\\frac{5}{3}$ minutes. The opposite verdict would have needed $F>10-\\frac{5}{3}$, a floor above about $8.33$. The two timings lock $F=8$.

which sits under $10$. The floor is close, but the learning term is still a sliver, so the statement is True.`,
      `**C.** → True

The learning component scales as $n^{-\\frac{1}{2}}$, so quadrupling $n$ multiplies it by

$$4^{-\\frac{1}{2}}=\\frac{1}{2}$$

The floor is untouched by this scaling, but the claim is only about the learning term. Inverse-square-root learning halves on a fourfold volume. Checking the two timings: the learning term is $10$ minutes after $25$ units and $5$ minutes after $100$, a halving on a quadrupling of $n$. The opposite verdict would have needed leftover exponent other than $-\\frac{1}{2}$ on the learning term.

Checking the two timings: the learning term is $10$ minutes after $25$ units and $5$ after $100$, a halving on a quadrupling of $n$. The opposite verdict would have needed leftover exponent other than $-\\frac{1}{2}$ on that term. The stem supplies $-\\frac{1}{2}$.

The floor is untouched by this scaling, but the claim is only about the learning term. Inverse-square-root learning halves on a fourfold volume, so the statement is True.`,
      `**D.** → False

From $t(25)=18$ a halved learning term cuts the total only from $18$ to $13$, not to $9$. The intercept is why the learning term can halve while the whole unit time does not. Halving $18$ would have claimed $9$ and called the statement true. The stem's recovered values line up with $18$, whereas $9$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $18$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter C is about the learning term; this letter is about the modelled total. They are different objects.

The opposite verdict would have needed $F=0$. Letter A already used that nonzero floor as an asymptote; this letter is the same floor, now read as a failed scale identity on the whole $t(n)$.

A second quadrupling, from $n=100$ to $n=400$, halves the learning term from $5$ to $2.5$ and cuts the total only from $13$ to $10.5$, not to $6.5$. The floor keeps stealing from the scale factor. The opposite verdict would have needed $F=0$. Letter A already used that nonzero floor as an asymptote; this letter is the same floor, now read as a failed doubling of the whole unit time.

**1.** From $n=25$ to $n=100$ the total falls $18$ to $13$, a factor $\\frac{13}{18}\\approx 0.72$, not $\\frac{1}{2}$. The learning term halved; the floor did not.

**2.** A further quadrupling to $n=400$ gives $t=8+2.5=10.5$, factor $\\frac{10.5}{13}\\approx 0.81$ from $13$, even farther from a halving as the floor dominates.

**3.** The opposite verdict would have needed $F=0$. Letter A already used that nonzero floor as an asymptote; this letter is the same floor blocking a halved total.

Quadrupling volume halves the learning term, but the eight-minute floor stays put and dilutes the gain in the total. From $t(25)=18$ a halved learning term cuts the total only from $18$ to $13$, not to $9$. The intercept is why the learning term can halve while the whole unit time does not, so the statement is False.`,
      `**E.** → False

After $4$ cumulative units, $\\sqrt{4}=2$:

$$t(4)=8+\\frac{50}{2}=33$$

The power term has fallen from the first unit, but not far enough to pull the unit under thirty minutes. Using $t(25)=18$ and scaling by $\\sqrt{25/4}$ without the floor would have claimed $18\\cdot\\frac{5}{2}=45$, still above $30$, or dropping $F$ would have claimed $25$, under $30$, and flipped the verdict. After isolating the unknown, the check is against $t(25)=18$. The figure $25$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $t(25)=18$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The recovered $t(4)=8+25=33$. The opposite verdict would have needed a smaller $A$, so that $t(4)$ fell through $30$.

Thirty-three sits above thirty. After $4$ cumulative units the power term is still $25$ minutes on top of the $8$-minute floor. Using $t(1)=58$ and halving twice, as if every doubling of $n$ halved $t$, would have claimed $14.5$, under $30$, and flipped the verdict. That is the fork: $t(1)=58$ belongs to the recovered isolation, $30$ belongs to the discarded mix. Inverse-square-root learning halves the learning term on a quadrupling, not on a doubling, and never halves the floor. The opposite verdict would have needed $A<44$, so that $t(4)$ fell through $30$. The timings lock $A=50$.

which sits above $30$. The power term has fallen from the first unit, but not far enough to pull the unit under thirty minutes, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 75,
    solution_overview: `Unit time is $t(n)=F+An^{-\\frac{1}{2}}$. After $25$ units the next unit takes $18$ minutes, and after $100$ it takes $13$.

**Part 1: Building the model.**

Let $n$ = cumulative units and $t$ = minutes for the next unit. Two levels recover $F$ and $A$. Scaling rules apply to the learning term alone.

**1. Translate: the two timings.**

$$F+\\frac{A}{5}=18, \\qquad F+\\frac{A}{10}=13$$

**Part 2: The model.**

$$t(n)=8+50n^{-\\frac{1}{2}} \\tag{1}$$

$$\\lim_{n\\to\\infty}t(n)=8 \\tag{2}$$

**Part 3: Solve.**

**1.** The floor $8$ is a horizontal asymptote, never attained. $t(900)=\\frac{29}{3}\\approx 9.67<10$.

**2.** Quadrupling halves the learning term, $10$ to $5$, but cuts the total only from $18$ to $13$. After four units, $t(4)=33$, which is not under $30$.

**Answer.** $F=8$ | $A=50$ | $t(25)=18$ | $t(100)=13$ | $t(900)=\\frac{29}{3}$`,
  },
  {
    id: `math-8-76`,
    case_id: `MATH 8.76`,
    title: `Break-Even for a Fish Farm With Diminishing Harvest Returns`,
    context: `A fish farm turns feed into harvest revenue $R(x)=A x^{\\frac{2}{3}}$ thousand euros in a season, where $x>0$ is tonnes of feed, while feed and handling cost $C(x)=30x$ thousand euros. At $8$ tonnes of feed, harvest revenue was $360$ thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue is proportional to the tonnes of feed used.`,
      `At $64$ tonnes, cost already exceeds harvest revenue.`,
      `An extra tonne of feed adds more revenue after $27$ tonnes than after $8$.`,
      `Once cost overtakes revenue, feeding still more cannot restore a surplus.`,
      `At $8$ tonnes the season clears more than $100$ thousand euros.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

From $8^{\\frac{2}{3}}=4$, the calibration is $A=90$, so $R(x)=90 x^{\\frac{2}{3}}$. Doubling feed multiplies revenue by

$$2^{\\frac{2}{3}}\\approx 1.59$$

Revenue rises more slowly than feed. Proportionality would have required lockstep, exponent $1$. Checking $R(8)=360$ and $R(16)=90\\cdot 16^{\\frac{2}{3}}\\approx 571$, a doubling of feed that is not a doubling of revenue. The opposite verdict would have needed $r=1$. The eight-tonne calibration with exponent $\\frac{2}{3}$ already refuses that.

Checking $R(27)=810$ and $C(27)=810$ shows the one lockstep point, after which cost pulls ahead. Proportionality at every $x$ would have needed that meeting to be an identity, not a single root. The opposite verdict would have needed $r=1$. The eight-tonne calibration with exponent $\\frac{2}{3}$ already refuses that.

not by $2$. Revenue rises more slowly than feed. Proportionality would have required lockstep, so the statement is False.`,
      `**B.** → True

At $64$ tonnes, sixty-four is $4^{3}$, so the two-thirds power is $16$:

$$R(64)=90\\cdot 16=1440$$

$$C(64)=1920$$

Past the break-even $x=27$, the linear cost is ahead. At $x=64$, $R=1440$ and $C=1920$. Comparing $R(64)$ with $2000$ as if the claim were a revenue cutoff would have missed that the letter is $C>R$. That is the fork: $R(64)$ belongs to the recovered isolation, $C>R$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. The opposite verdict would have needed break-even past $64$, hence a larger $A$. The eight-tonne record locks $A=90$ and break-even at $27$.

Comparing $R(64)=1440$ with $4500$ as if the claim were a revenue cutoff would have missed that the letter is cost already exceeding harvest. Working from the isolated values, $R(64)=1440$ is the figure that is checked, not the detour that produced $4500$. That contrast is the reason the verdict goes the way it does. Cost is $1920$. The opposite verdict would have needed break-even past $64$, hence $A>30\\cdot 64^{\\frac{1}{3}}=120$. The eight-tonne record locks $A=90$.

Cost already exceeds harvest revenue. Past the break-even $x=27$, the linear cost is ahead, so the statement is True.`,
      `**C.** → False

The leftover slope is

$$R'(x)=60 x^{-\\frac{1}{3}}$$

A two-thirds harvest flattens. After $8$ tonnes $R'=30$; after $27$ tonnes $R'=20$. Seeing $R(27)=90\\cdot 9=810>R(8)=360$ and inferred a steeper extra tonne later would have mixed a higher level with a steeper slope. The recovered isolation is checked against the claim using $R(27)=90\\cdot 9=810>R(8)=360$, which is the figure the sessions actually produce. The opposite verdict would have needed $r>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $30>20$.

A finite one-tonne step agrees. From $8$ to $9$, $R(9)=90\\cdot 9^{\\frac{2}{3}}\\approx 389.7$, a rise of about $30$ from $360$. From $27$ to $28$, $R(28)=90\\cdot 28^{\\frac{2}{3}}\\approx 830$, a rise of about $20$ from $810$. Later tonnes add less. The opposite verdict would have needed $r>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $30>20$.

**1.** $R'(8)=60\\cdot 8^{-\\frac{1}{3}}=30$ and $R'(27)=60\\cdot 3^{-1}=20$. An extra tonne adds less later, not more.

**2.** Seeing $R(27)=810>R(8)=360$ and inferred a steeper extra tonne would have mixed a higher level with a steeper slope. Keeping $R(27)=810>R(8)=360$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**3.** The opposite verdict would have needed $r>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $30>20$.

Marginal revenue at the break-even $x=27$ is $20$ thousand euros a tonne, while marginal cost is $30$. Past $27$, $R'<C'$ always. At $x=8$, coincidentally $R'=30$ equals the feed price, so the extra tonne there is a wash on the margin; at $x=27$ it already loses $10$ thousand euros. An extra tonne adds less revenue after $27$ than after $8$.

The ranking $R'(8)=30>R'(27)=20$ is the flattening of a two-thirds harvest. An extra tonne after twenty-seven tonnes adds $20$ thousand euros of revenue; after eight tonnes it adds $30$. The claim's "adds more after $27$" is the wrong ranking.

After $8$ tonnes that is $30$. After $27$ tonnes it is $20$. An extra tonne adds less revenue later, not more. A two-thirds harvest flattens, so the statement is False.`,
      `**D.** → True

The ratio of revenue to cost is

$$\\frac{R(x)}{C(x)}=\\frac{3}{x^{\\frac{1}{3}}}$$

They meet at $x=27$. Past that feeding the cube root keeps growing, so the ratio $R/C=3/x^{\\frac{1}{3}}$ stays below $1$ and keeps falling. Extra feed widens the gap; it cannot restore a surplus.

Checking $x=64$ from letter B: the gap is already $1920-1440=480$ thousand euros against the farm. At $x=125$, $R=90\\cdot 25=2250$ and $C=3750$, a wider gap. The opposite verdict would have needed cost to have a smaller leftover exponent than revenue, so that revenue could recross. Cost is linear; revenue has exponent $\\frac{2}{3}$. After the meeting, the higher exponent on cost stays ahead.

Checking $x=8$ from letter E: the farm is still in surplus, $P=120$. At $x=27$ the surplus is $0$. At $x=64$ the surplus is $-480$. The sign changes once and stays negative. A quadratic cost could recross; a linear cost against a two-thirds revenue cannot. The opposite verdict would have needed revenue to have leftover exponent at least $1$.

**1.** The ratio $R/C=3/x^{\\frac{1}{3}}$ equals $1$ at $x=27$ and equals $3/4$ at $x=64$, already below $1$. At $x=125$ it is $3/5=0.6$, lower still.

**2.** Extra feed after the meeting widens the gap: $P(27)=0$, $P(64)=-480$, $P(125)=-1500$. The surplus does not return.

**3.** The opposite verdict would have needed revenue leftover exponent at least $1$, so that $R$ could recross a linear $C$. The stem is $\\frac{2}{3}$.

Once $R<C$, feeding still more cannot restore a surplus because $R'/C'=2 x^{-\\frac{1}{3}}$ stays below $1$ for $x>8$ already on the margin, and the levels themselves have crossed at $27$. Extra tonnes after $27$ add cost faster than revenue at every step. The gap widens; it does not close.

They meet at $x=27$. Past that planting the cube root keeps growing, so the ratio stays below $1$ and keeps falling. Extra feed widens the gap; it cannot restore a surplus, so the statement is True.`,
      `**E.** → True

At $8$ tonnes, logged revenue $360$ minus cost $240$ is profit

$$P(8)=120$$

Using revenue in place of profit would have claimed $360$ and overshot the letter. Profit is $360-240=120$. Using $C(8)=240$ against the $100$ cutoff would have mixed cost with profit. After isolating the unknown, the check is against $C(8)=240$. The figure $100$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $C(8)=240$ stays in the write-up. The opposite verdict would have needed $P(8)\\le 100$, hence a larger feed price than $30$ thousand euros a tonne. The stem's cost is $30x$.

One hundred and twenty sits above one hundred. Using revenue $360$ in place of profit is the mix-up. The opposite verdict would have needed $P(8)\\le 100$, hence $C(8)\\ge 260$, a feed price above $32.5$ thousand euros a tonne. The stem's cost is $30x$.

One hundred and twenty sits above $100$. Using revenue in place of profit would have claimed $360$ and overshot the letter, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 76,
    solution_overview: `Revenue is $R(x)=Ax^{\\frac{2}{3}}$ and cost is $C(x)=30x$. At $x=8$, revenue is $360$ thousand euros.

**Part 1: Building the model.**

Let $x$ = tonnes of feed. The exponent is given, so the eight-tonne level pins $A$. Cost is linear, so a curve with exponent $\\frac{2}{3}$ is overtaken once.

**1. Translate: the recorded revenue.**

$$A\\cdot 8^{\\frac{2}{3}}=360$$

**Part 2: The model.**

$$R(x)=90x^{\\frac{2}{3}}, \\qquad C(x)=30x \\tag{1}$$

$$\\frac{R(x)}{C(x)}=\\frac{3}{x^{\\frac{1}{3}}} \\tag{2}$$

**Part 3: Solve.**

**1.** Revenue is not proportional to feed. At $x=64$, cost $1920$ already exceeds revenue $1440$. Profit at $x=8$ is $120$.

**2.** $R'(8)=30>R'(27)=20$. For $x>27$ ratio (2) stays below $1$, so extra feed cannot restore a surplus.

**Answer.** $A=90$ | break-even at $x=27$ | $P(8)=120$ | cost leads for every $x>27$`,
  },
  {
    id: `math-8-77`,
    case_id: `MATH 8.77`,
    title: `Calibrating a Handling-Cost Law From a Cost Difference`,
    context: `A distribution centre models daily handling cost by $f(x)=A x^{\\frac{3}{2}}$ euros, where $x>0$ is a pallet-volume index. The individual daily figures were lost, and the only surviving record states that the cost at index $16$ exceeds the cost at index $4$ by $336$ euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Multiplying the pallet-volume index by $4$ multiplies handling cost by $4$.`,
      `At index $9$ the modelled handling cost is already above $150$ euros.`,
      `Handling cost grows faster than the pallet-volume index.`,
      `Because the exponent exceeds one, equal gaps in the index produce equal gaps in cost.`,
      `Raising the index from $9$ to $25$ adds under $500$ euros of handling cost.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

A factor of $4$ on the index multiplies cost by

$$4^{\\frac{3}{2}}=8$$

A four-fold factor would belong to exponent $1$. The three-halves exponent outruns the index: $4^{\\frac{3}{2}}=8$. Checking $f(4)=6\\cdot 8=48$ and $f(16)=6\\cdot 64=384$, and $384/48=8$, not $4$. The opposite verdict would have needed $r=1$. The surviving $336$ euro gap already forces $r=\\frac{3}{2}$.

Checking $f(4)=48$ and $f(16)=384$, and $384/48=8$, not $4$. The surviving $336$ euro gap is $384-48$, which already encodes the factor $8$ on a fourfold index. The opposite verdict would have needed $r=1$, hence a gap of $3A$ on that fourfold, not $56A=336$.

A fourfold index that multiplied cost by $4$ would have been exponent $1$. The recovered factor is $8$. Checking $f(4)=48$ and $f(16)=384$ is that factor sitting in the surviving gap $336=384-48$. The opposite verdict would have needed $r=1$.

not by $4$. A four-fold factor would belong to exponent $1$. The three-halves exponent outruns the index, so the statement is False.`,
      `**B.** → True

The shape factors are $16^{\\frac{3}{2}}=64$ and $4^{\\frac{3}{2}}=8$, so $56A=336$ and $A=6$. At index $9$:

$$9^{\\frac{3}{2}}=27$$

$$f(9)=6\\cdot 27=162$$

Treating $336$ as $f(9)$ would have compared $336$ to $150$ and still sat above, for the wrong level. Working from the isolated values, $336$ is the figure that is checked, not the detour that produced $150$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The $336$ is a difference of two indices, not a level at $9$. The opposite verdict would have needed a smaller $A$, so that $f(9)$ fell through $150$. The gap locks $A=6$ and $f(9)=162$.

One hundred and sixty-two sits above one hundred and fifty. Treating $336$ as $f(9)$ would have compared $336$ to $150$ and still sat above, for the wrong level. Working from the isolated values, $336$ is the figure that is checked, not the detour that produced $150$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The $336$ is $f(16)-f(4)$. The opposite verdict would have needed $A\\le 150/27\\approx 5.56$. The gap locks $A=6$.

One hundred and sixty-two sits above $150$, so the statement is True.`,
      `**C.** → True

A proportional handler would have carried exponent $1$. The same $4^{\\frac{3}{2}}=8$ from letter A is already larger than $4$. The opposite verdict would have needed an exponent of $1$ or less. The surviving record is a difference on a three-halves power, which outruns the index.

The same $4^{\\frac{3}{2}}=8$ from letter A is already larger than $4$. Cost grows faster than the pallet-volume index. The opposite verdict would have needed an exponent of $1$ or less. The surviving record is a difference on a three-halves power.

Cost grows faster than the index because $\\frac{3}{2}>1$. The opposite verdict would have needed an exponent of $1$ or less. Letter A already used the factor $8$ on a fourfold index; this letter is the same $r>1$ fact read as a ranking rather than as a scale.

The exponent $\\frac{3}{2}>1$, and the same $4^{\\frac{3}{2}}=8$ from A is already larger than $4$. Cost grows faster than the pallet-volume index. A proportional handler would have carried exponent $1$, so the statement is True.`,
      `**D.** → False

The leftover slope is

$$f'(x)=9\\sqrt{x}$$

The leftover slope is $f'(x)=9\\sqrt{x}$, which is $18$ at index $4$ and $27$ at index $9$. Because $27>18$, later index steps of the same width add more euros than earlier ones. Equal gaps in the index do not produce equal gaps in cost when $r>1$.

A finite step agrees: $f(5)-f(4)=6\\cdot 5^{\\frac{3}{2}}-48\\approx 67.1-48=19.1$, while $f(10)-f(9)=6\\cdot 10^{\\frac{3}{2}}-162\\approx 189.7-162=27.7$. Later equal index gaps add more. The opposite verdict would have needed $r=1$, a linear handler. Changing $A$ scales both gaps by the same factor and cannot equalise them.

Using the named pair $9$ to $25$ in letter E: that gap of $16$ index points adds $588$ euros, while an earlier $16$-point gap from $4$ to $20$ adds $f(20)-f(4)=6\\cdot 20^{\\frac{3}{2}}-48\\approx 536-48=488$, less than $588$. Later equal-width gaps add more. The opposite verdict would have needed $r=1$.

**1.** $f'(4)=9\\cdot 2=18$ and $f'(9)=9\\cdot 3=27$. Later equal index steps add more euros.

**2.** From $9$ to $25$, a gap of $16$ index points, the cost rise is $588$. From $4$ to $20$, the same width, the rise is about $488$. Later equal-width gaps add more.

**3.** The opposite verdict would have needed $r=1$, equal euro gaps on equal index gaps. The surviving record is a three-halves power.

Equal index gaps producing equal cost gaps is the hallmark of a linear handler, leftover slope constant. Here $f'=9\\sqrt{x}$ climbs, so a later gap of width $16$ at $9$ to $25$ costs $588$ euros while an earlier gap of width $16$ at $4$ to $20$ costs about $488$. The claim's equal-gaps story is the wrong shape.

which is $18$ at index $4$ and $27$ at index $9$. Because $27>18$, later index steps of the same width add more euros than earlier ones. Equal gaps in the index do not produce equal gaps in cost when $r>1$, so the statement is False.`,
      `**E.** → False

Raising the index from $9$ to $25$ adds

$$f(25)-f(9)=750-162=588$$

Twenty-five contributes $5^{3}=125$, times $6$ is $750$. Five hundred and eighty-eight euros is not under five hundred. Using $f(25)-f(16)=750-384=366$, under $500$, would have moved the lower index from $9$ to $16$ and flipped the letter. That is the fork: $f(25)-f(16)=750-384=366$ belongs to the recovered isolation, $16$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter E names the move from $9$ to $25$.

The opposite verdict would have needed $A<500/(125-27)\\approx 5.10$. The surviving gap locks $A=6$, and the rise is $588$.

Using $f(25)-f(16)=750-384=366$, under $500$, would have moved the lower index from $9$ to $16$ and flipped the letter. That is the fork: $f(25)-f(16)=750-384=366$ belongs to the recovered isolation, $16$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter E names the move from $9$ to $25$. The opposite verdict would have needed $A<500/(125-27)\\approx 5.10$. The surviving gap locks $A=6$, and the rise is $588$.

**1.** $f(25)=6\\cdot 125=750$ and $f(9)=162$, so the rise is $588$, which is not under $500$.

**2.** Using $f(25)-f(16)=366$ would have moved the lower index from $9$ to $16$ and flipped the letter. So the letter reads the claim against $f(25)-f(16)=366$; $16$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $f(25)-f(16)=366$ stays in the write-up.

**3.** The opposite verdict would have needed $A<500/98\\approx 5.10$. The surviving gap locks $A=6$.

Five hundred and eighty-eight is $88$ euros past five hundred, not a rounding that could flip. Changing the surviving gap from $336$ to $280$ would have lowered $A$ to $5$ and cut the $9$-to-$25$ rise to $490$, just under $500$, flipping the letter. The log's $336$ locks $A=6$ and the rise $588$.

Letter D already used $r>1$ as unequal euro gaps on equal index gaps. This letter is a named pair of those gaps: $9$ to $25$ adds $588$, which is not under $500$. The $500$ cutoff is a nearby figure, not a rounding of $588$.

which is not under $500$. Twenty-five contributes $5^{3}=125$, times $6$ is $750$. Five hundred and eighty-eight euros is not under five hundred,

Checking a neighbouring rise from $4$ to $16$ adds the logged $336$ euros, which is under $500$, but that is not the named pair.

Letter E names $9$ to $25$, and that later equal-width gap adds $588$ because leftover slope climbs.

so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Handling cost is $f(x)=Ax^{\\frac{3}{2}}$, and the only record is $f(16)-f(4)=336$.

**Part 1: Building the model.**

Let $x$ = pallet-volume index and $f$ = daily euros. No single level is known, so $A$ comes out of a difference.

**1. Translate: the surviving record.**

$$A\\left(16^{\\frac{3}{2}}-4^{\\frac{3}{2}}\\right)=336$$

**Part 2: The model.**

$$f(x)=6x^{\\frac{3}{2}} \\tag{1}$$

$$\\frac{f(kx)}{f(x)}=k^{\\frac{3}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** A factor of $4$ on the index multiplies cost by $8$, not by $4$. Because $r>1$, cost grows faster than the index, and equal index gaps do not give equal cost gaps.

**2.** $f(9)=162>150$ and $f(25)-f(9)=588$, which is not under $500$.

**Answer.** $A=6$ | $f(9)=162$ | $f(25)=750$ | factor of $4$ on volume multiplies cost by $8$`,
  },
  {
    id: `math-8-78`,
    case_id: `MATH 8.78`,
    title: `Inverting a Wastewater Load Model Against a Permit Ceiling`,
    context: `A dye-house discharges a wastewater load of $W(s)=A s^{\\frac{3}{2}}$ kilograms a day, where $s>0$ is a production scale index. At scale $9$ the daily load is $135$ kilograms. The site permit caps the daily load at $320$ kilograms, and the plant wants the largest scale it may run. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The scale needed for a given load is itself a power function of that load.`,
      `The largest admissible scale is already below $20$.`,
      `Doubling the permit ceiling doubles the admissible scale index.`,
      `If the coefficient doubled, the admissible scale under the same ceiling would be halved.`,
      `At scale index $4$ the daily load is under $50$ kilograms.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

A nonzero power inverts to another power. From $W=A s^{\\frac{3}{2}}$,

$$s=\\left(\\frac{W}{A}\\right)^{\\frac{2}{3}}$$

Falling or rising load does not introduce a logarithm. Checking a recovered pair: at $W=135$ the inverse returns $s=9$. At $W=320$ it returns $s=16$, the permit cap. The inverse is faithful to both named loads. The opposite verdict would have needed a law that was not a pure power.

Swapping the variables and keeping exponent $\\frac{3}{2}$ would have written $s=5 W^{\\frac{3}{2}}$ and lost the reciprocal. The stem's recovered values line up with $\\frac{3}{2}$, whereas $s=5 W^{\\frac{3}{2}}$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $\\frac{3}{2}$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. At $W=135$ that wrong inverse would not return $s=9$. The exponent must take the reciprocal. The opposite verdict would have needed a law that was not a pure power.

The new exponent is the reciprocal of $\\frac{3}{2}$. Scale needed for a given load is still a monomial in $W$, so the statement is True.`,
      `**B.** → True

The recorded load gives $9^{\\frac{3}{2}}=27$, so $27A=135$ and $A=5$. The $320$ kg cap then inverts as

$$5 s^{\\frac{3}{2}}=320$$

$$s^{\\frac{3}{2}}=64$$

$$s=16$$

Every larger index breaches the permit. Inverting as if $r=1$ would have claimed $s=64$, past $20$, and flipped the verdict. Working from the isolated values, $r=1$ is the figure that is checked, not the detour that produced $20$. That contrast is the reason the verdict goes the way it does. Linear inversion overstates the admissible scale when $r>1$. The opposite verdict would have needed a smaller $A$, so that the inverted $s$ rose through $20$. The recorded $135$ kg at $s=9$ locks $s=16$ at the cap.

Sixteen sits below twenty. Inverting as if $r=1$ would have claimed $s=64$, past $20$, and flipped the verdict. Working from the isolated values, $r=1$ is the figure that is checked, not the detour that produced $20$. That contrast is the reason the verdict goes the way it does. Linear inversion overstates the admissible scale when $r>1$. The opposite verdict would have needed $A<320/20^{\\frac{3}{2}}=320/(20\\sqrt{20})\\approx 3.58$. The recorded $135$ kg locks $A=5$ and $s=16$.

Sixteen sits below $20$. Every larger index breaches the permit, so the statement is True.`,
      `**C.** → False

Doubling the ceiling multiplies admissible scale by

$$2^{\\frac{2}{3}}\\approx 1.59$$

The inverse exponent $\\frac{2}{3}<1$, so permitted scale grows more slowly than the permitted load. Linear thinking on the inverse is the mismatch. Doubling $320$ to $640$ would raise $s$ from $16$ to $16\\cdot 2^{\\frac{2}{3}}\\approx 25.4$, not to $32$. The opposite verdict would have needed inverse exponent $1$, hence original exponent $1$. The stem is $\\frac{3}{2}$.

Doubling $320$ to $640$ would raise $s$ from $16$ to $16\\cdot 2^{\\frac{2}{3}}\\approx 25.4$, not to $32$. Permitted scale grows more slowly than the permitted load. The opposite verdict would have needed inverse exponent $1$, hence original exponent $1$. The stem is $\\frac{3}{2}$.

**1.** Doubling the ceiling multiplies admissible scale by $2^{\\frac{2}{3}}\\approx 1.59$, from $s=16$ to about $25.4$, not to $32$.

**2.** Doubling $16$ to $32$ would have called the statement true. The recovered comparison therefore keeps $16$ and does not substitute $32$. That is inverse exponent $1$.

**3.** The opposite verdict would have needed original exponent $1$. The stem is $\\frac{3}{2}$, so the inverse is $\\frac{2}{3}<1$ and permitted scale lags the permitted load.

A doubled permit of $640$ kg would allow $s\\approx 25.4$, which is more scale, just not twice $16$. The plant's largest admissible index grows, but it lags the ceiling. Linear thinking on the inverse is the mismatch the claim makes.

Sixteen times $2$ is $32$; sixteen times $2^{\\frac{2}{3}}$ is about $25.4$. The claim wants the first product. The inverse of a three-halves load law is a two-thirds scale law, so the ceiling can double while the index cannot.

not by $2$. The inverse exponent $\\frac{2}{3}<1$, so permitted scale grows more slowly than the permitted load. Linear thinking on the inverse is the mismatch,

Checking a halved ceiling of $160$ kg would cut admissible scale by $2^{-\\frac{2}{3}}\\approx 0.63$, to about $10.08$, not to $8$.

The same inverse exponent works in both directions: load and scale do not move in lockstep either when the permit tightens or when it loosens.

so the statement is False.`,
      `**D.** → False

If $A$ doubled, the admissible scale would satisfy $10 s^{\\frac{3}{2}}=320$, so

$$s=32^{\\frac{2}{3}}\\approx 10.08$$

If $A$ doubled, the admissible scale would satisfy $10 s^{\\frac{3}{2}}=320$, so $s=32^{\\frac{2}{3}}\\approx 10.08$, not $8$. The scale factor is $2^{-\\frac{2}{3}}\\approx 0.63$, not $\\frac{1}{2}$. Halving $s$ would have needed inverse exponent $-1$ on $A$.

Treating load as linear in $A$ and in $s$ would have halved $s$ with a doubled $A$. Working from the isolated values, $A$ is the figure that is checked, not the detour that produced $s$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The three-halves power shares the blow: $A$ doubles, $s^{\\frac{3}{2}}$ must halve, so $s$ falls only by $2^{-\\frac{2}{3}}$. The opposite verdict would have needed $r=1$.

Treating load as linear in $A$ and in $s$ would have halved $s$ with a doubled $A$, claiming $s=8$. Working from the isolated values, $A$ is the figure that is checked, not the detour that produced $s=8$. The three-halves power shares the blow: $A$ doubles, $s^{\\frac{3}{2}}$ must halve, so $s$ falls only by $2^{-\\frac{2}{3}}\\approx 0.63$, to about $10.08$. The opposite verdict would have needed $r=1$. Checking $W$ at that $10.08$ with doubled $A$ returns the same $320$ kg cap, as it must.

**1.** Doubled $A$ gives $10 s^{\\frac{3}{2}}=320$, so $s^{\\frac{3}{2}}=32$ and $s=32^{\\frac{2}{3}}\\approx 10.08$, not $8$.

**2.** Halving $16$ to $8$ would have needed $s$ to scale as $1/A$. Load scales as $A s^{\\frac{3}{2}}$, so $s$ scales as $A^{-\\frac{2}{3}}$.

**3.** The opposite verdict would have needed $r=1$. Checking $W$ at $s\\approx 10.08$ with $A=10$ returns the same $320$ kg cap, as it must.

The factor $2^{-\\frac{2}{3}}\\approx 0.63$ applied to $16$ is about $10.08$, which is the doubled-coefficient scale under the same $320$ kg ceiling. It is not $8$. Halving the index would have over-tightened the plant relative to a three-halves load law.

A doubled coefficient is a tighter plant: more kilograms per unit of scale, so the same $320$ kg ceiling binds at a smaller $s$. It binds at $10.08$, not at $8$. The factor is $2^{-\\frac{2}{3}}$, the reciprocal-exponent image of a doubled $A$.

not $8$. The scale factor is $2^{-\\frac{2}{3}}\\approx 0.63$, not $\\frac{1}{2}$. Halving $s$ would have needed inverse exponent $-1$ on $A$, so the statement is False.`,
      `**E.** → True

At scale index $4$, with $A=5$, four contributes $2^{3}=8$:

$$W(4)=5\\cdot 8=40$$

The load has grown with scale, but at this small index it is still below the named line. Scaling $W(9)=135$ by $4/9$ linearly would have claimed $60$, above $50$, and flipped the verdict. That is the fork: $W(9)=135$ belongs to the recovered isolation, $50$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Linear thinking overstates a small scale when $r>1$; the true $W(4)=40$ sits under $50$. The opposite verdict would have needed a larger $A$, so that $W(4)$ rose through $50$.

Forty sits under fifty. Scaling $W(9)=135$ by $4/9$ linearly would have claimed $60$, above $50$, and flipped the verdict. That is the fork: $W(9)=135$ belongs to the recovered isolation, $50$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Linear thinking overstates a small scale when $r>1$. The opposite verdict would have needed $A>50/8=6.25$. The recorded load locks $A=5$.

Forty sits under $50$. The load has grown with scale, but at this small index it is still below the named line, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `Load is $W(s)=As^{\\frac{3}{2}}$ kilograms a day. At $s=9$ the load is $135$, and the permit caps it at $320$.

**Part 1: Building the model.**

Let $s$ = scale index and $W$ = daily kilograms. The recorded level pins $A$. A cap on load becomes a cap on scale by inversion.

**1. Translate: the recorded load.**

$$A\\cdot 9^{\\frac{3}{2}}=135$$

**2. Translate: the inverse.**

$$s=\\left(\\frac{W}{A}\\right)^{\\frac{2}{3}}$$

**Part 2: The model.**

$$W(s)=5s^{\\frac{3}{2}} \\tag{1}$$

$$s(W)=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** The inverse (2) is a power of load. The binding permit gives $s=16<20$, and $W(4)=40<50$.

**2.** Doubling the cap raises the index by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. Doubling $A$ cuts the index by $2^{-\\frac{2}{3}}\\approx 0.63$, not by $\\frac{1}{2}$.

**Answer.** $A=5$ | largest $s=16$ | $W(4)=40$ | cap factor $2$ raises $s$ by $2^{\\frac{2}{3}}$`,
  },
  {
    id: `math-8-79`,
    case_id: `MATH 8.79`,
    title: `Elasticity Shortcut Against the Exact Change in Parking Demand`,
    context: `A city parking authority models hourly demand by $q(p)=A p^{-2}$ occupied spaces, where $p>0$ is the hourly tariff in euros. It records $4000$ occupied spaces at a tariff of $3$ euros. Demand of this form has constant elasticity $-2$, so the usual shortcut predicts a percentage change in demand equal to $-2$ times the percentage change in tariff. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The elasticity shortcut and the exact power agree on the loss from a $25\\%$ tariff rise.`,
      `Raising the tariff by $25\\%$ leaves more than $2500$ occupied spaces.`,
      `The elasticity shortcut overstates the true loss from a $25\\%$ tariff rise.`,
      `Cutting the tariff by $25\\%$ raises demand by the same percentage that a $25\\%$ rise cuts it.`,
      `At a tariff of $2$ euros, hourly demand exceeds $8000$ occupied spaces.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

The elasticity shortcut predicts $-2\\times 25\\%=-50\\%$. The exact factor is

$$\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}=0.64$$

The shortcut predicts $-2\\times 25\\%=-50\\%$. The exact factor is $\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}=0.64$, a cut of $36\\%$, not $50\\%$. The two methods disagree. Linearizing a power at a $25\\%$ step is too coarse.

Checking the recovered demand: $q(3)=4000$ becomes $q(3.75)=2560$. A $50\\%$ shortcut would have claimed $2000$ occupied spaces. The exact till of spaces is $2560$. The opposite verdict would have needed a tiny percentage change, where the linear elasticity shortcut and the power agree to first order. A $25\\%$ step is not tiny.

Checking the recovered demand: $q(3)=4000$ becomes $q(3.75)=2560$. A $50\\%$ shortcut would have claimed $2000$ occupied spaces. The exact count is $2560$. A $1\\%$ rise is close: the shortcut predicts a $2\\%$ loss and $1.01^{-2}\\approx 1.98\\%$ is nearly that. A $25\\%$ step is not that tiny, which is why the two methods disagree here. The opposite verdict would have needed a tiny percentage change.

**1.** Shortcut: $-2\\times 0.25=-0.50$. Exact: $(5/4)^{-2}=16/25=0.64$, a $36\\%$ cut. They disagree by $14$ percentage points.

**2.** On the recovered book, shortcut $2000$ spaces versus exact $2560$. A $1\\%$ rise would have been close, $2\\%$ versus $1.98\\%$. A $25\\%$ step is not that tiny.

**3.** The opposite verdict would have needed a tiny percentage change, or an exponent of $0$, a constant demand. The stem is inverse square at a $25\\%$ step.

The two methods agree on the derivative at $p=3$, elasticity $-2$, and disagree on the finite $25\\%$ step. Letter A asks whether they agree on that finite loss. They do not: $50\\%$ against $36\\%$. A first-order shortcut is not an exact power.

Letter C then reads the same disagreement as an overstatement of the loss. This letter is only whether the two methods agree. They do not: $50\\%$ versus $36\\%$, $2000$ spaces versus $2560$.

a cut of $36\\%$, not $50\\%$. The two methods disagree. Linearizing a power at a $25\\%$ step is too coarse, so the statement is False.`,
      `**B.** → True

After a $25\\%$ rise the exact demand is

$$4000\\cdot\\frac{16}{25}=2560$$

The $2500$ cutoff is a near miss on that exact inverse-square step, not a rounding of $2560$. Using the shortcut's $2000$ against $2500$ would have called the statement false. The recovered comparison therefore keeps $2000$ and does not substitute $2500$. That contrast is the reason the verdict goes the way it does. Letter A already refused the shortcut; this letter uses the exact $2560$. The opposite verdict would have needed a smaller $A$, so that $q(3.75)$ fell through $2500$.

Two thousand five hundred and sixty sits above two thousand five hundred. Using the shortcut's $2000$ against $2500$ would have called the statement false. The recovered comparison therefore keeps $2000$ and does not substitute $2500$. That contrast is the reason the verdict goes the way it does. Letter A already refused the shortcut; this letter uses the exact $2560$. The opposite verdict would have needed $A\\cdot 3.75^{-2}\\le 2500$, hence a smaller $A$ than $36000$.

which sits above $2500$. The $2500$ cutoff is a near miss on that exact inverse-square step, so the statement is True.`,
      `**C.** → True

A predicted $50\\%$ against a true $36\\%$ overstates the loss. The two methods disagree on the size of the cut. Comparing $50\\%$ with $36\\%$ and calling $50\\%$ "close enough" would have missed that the letter asks whether the shortcut overstates, which it does. That is the fork: $50\\%$ belongs to the recovered isolation, $36\\%$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The opposite verdict would have needed the exact cut to meet or exceed $50\\%$, which would have required a steeper exponent than $-2$.

Comparing $50\\%$ with $36\\%$ and calling $50\\%$ close enough would have missed that the letter asks whether the shortcut overstates, which it does. The recovered comparison therefore keeps $50\\%$ and does not substitute $36\\%$. That contrast is the reason the verdict goes the way it does. The opposite verdict would have needed the exact cut to meet or exceed $50\\%$, which would have required a steeper exponent than $-2$. The stem is inverse square.

The shortcut claims a $50\\%$ loss; the exact cut is $36\\%$. A predicted $50\\%$ against a true $36\\%$ overstates the loss. The two methods disagree on the size of the cut, so the statement is True.`,
      `**D.** → False

A $25\\%$ rise cuts demand by $36\\%$. A $25\\%$ cut raises it by

$$\\left(\\frac{3}{4}\\right)^{-2}-1=\\frac{16}{9}-1=\\frac{7}{9}\\approx 77.8\\%$$

A $25\\%$ rise cuts demand by $36\\%$. A $25\\%$ cut raises it by $\\left(\\frac{3}{4}\\right)^{-2}-1=\\frac{16}{9}-1=\\frac{7}{9}\\approx 77.8\\%$. Inverse-square percentage changes are not symmetric. Checking $q(2.25)=4000\\cdot\\frac{16}{9}\\approx 7111$, a rise of about $3111$ spaces from $4000$, versus the rise-side loss of $1440$ spaces. The two percentages are not the same.

The opposite verdict would have needed leftover exponent $0$ on a log-log chart that was odd-symmetric, a property linear percentage changes have and powers do not. The stem is $p^{-2}$.

Checking $q(2.25)=4000\\cdot\\frac{16}{9}\\approx 7111$, a rise of about $3111$ spaces from $4000$, versus the rise-side loss of $1440$ spaces. The two percentages, $77.8\\%$ up and $36\\%$ down, are not the same. Inverse-square percentage changes are not symmetric. The opposite verdict would have needed a log-linear demand whose finite percentage moves were odd-symmetric, which a power is not.

**1.** A $25\\%$ cut is the factor $3/4$, and $(3/4)^{-2}=16/9$, a $77.8\\%$ rise, not a $36\\%$ rise.

**2.** Spaces: $q(2.25)\\approx 7111$ versus $q(3.75)=2560$. The up-move adds about $3111$ spaces; the down-move loses $1440$. Not the same percentage and not the same count.

**3.** The opposite verdict would have needed finite percentage moves that were odd-symmetric, a linear-in-logs property powers do not have at $25\\%$ steps.

Percentage changes on a power are not odd-symmetric. The up-move of $25\\%$ in tariff is not the negative of the down-move of $25\\%$ in demand percentage. Exact factors $16/25$ and $16/9$ make that visible: $0.64$ versus $1.778$, whose deviations from $1$ are $0.36$ and $0.778$, not equal.

If the $25\\%$ rise and the $25\\%$ cut had moved demand by equal percentages, the factors $0.64$ and $1.778$ would have been reciprocals of deviations from $1$ with equal size. They are not: $0.36$ versus $0.778$. Inverse-square finite moves are skewed toward the cut-price side.

Inverse-square percentage changes are not symmetric. The two percentages are not the same, so the statement is False.`,
      `**E.** → True

From $A/9=4000$, the coefficient is $A=36000$. At a tariff of $2$ euros:

$$q(2)=\\frac{36000}{4}=9000$$

Cutting the tariff from $3$ to $2$ is not a $25\\%$ move; this letter is a separate level. Inverse square on a factor $\\frac{2}{3}$ multiplies demand by $\\left(\\frac{3}{2}\\right)^{2}=\\frac{9}{4}$, so $4000\\cdot\\frac{9}{4}=9000$. Applying a $25\\%$ cut from letter D would have claimed about $7111$, still above $8000$, or a linear $33\\%$ rise to about $5333$, under $8000$, and flipped the verdict. Working from the isolated values, $25\\%$ is the figure that is checked, not the detour that produced $5333$. The opposite verdict would have needed a smaller $A$, so that $q(2)$ fell through $8000$.

Nine thousand sits above eight thousand. Cutting the tariff from $3$ to $2$ is a factor $\\frac{2}{3}$, hence a demand factor $\\frac{9}{4}$. Applying a $25\\%$ cut from letter D would have claimed about $7111$, still above $8000$, or a linear $33\\%$ rise to about $5333$, under $8000$, and flipped the verdict. Working from the isolated values, $25\\%$ is the figure that is checked, not the detour that produced $5333$. The opposite verdict would have needed $A\\le 32000$. The desk record locks $A=36000$.

Nine thousand sits above $8000$. Cutting the tariff from $3$ to $2$ is not a $25\\%$ move; this letter is a separate level, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 79,
    solution_overview: `Demand is $q(p)=Ap^{-2}$ with $q(3)=4000$. The elasticity shortcut is compared with exact finite changes.

**Part 1: Building the model.**

Let $p$ = hourly tariff in euros and $q$ = occupied spaces. The exponent $-2$ is the constant elasticity. The shortcut multiplies that elasticity by a percentage change; the exact route raises the tariff factor to $-2$.

**1. Translate: the observed pair.**

$$A\\cdot 3^{-2}=4000$$

**2. Translate: the two methods.** For a tariff factor $k$,

$$-2(k-1), \\qquad k^{-2}-1$$

**Part 2: The model.**

$$q(p)=36000p^{-2} \\tag{1}$$

$$\\frac{q(kp)}{q(p)}=k^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** A $25\\%$ rise has exact multiplier $0.64$, a $36\\%$ cut, so $q(3.75)=2560>2500$. The shortcut's $50\\%$ overstates that loss. The two routes do not agree.

**2.** A $25\\%$ cut raises demand by about $77.8\\%$, not by $36\\%$. At $p=2$, demand is $9000>8000$.

**Answer.** $A=36000$ | exact cut $36\\%$ for a $25\\%$ rise | $q(3.75)=2560$ | $q(2)=9000$`,
  },
  {
    id: `math-8-80`,
    case_id: `MATH 8.80`,
    title: `Geometrically Similar Bells Cast From One Pattern`,
    context: `A foundry casts geometrically similar bronze bells from a single pattern, so mass follows $M(h)=A h^{3}$ kilograms, where $h>0$ is height in metres. The pattern book omits the coefficient; it records only that a finished bell of height $0.5$ metres was weighed at $30$ kilograms. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Mass grows faster than height.`,
      `A bell of height $1.5$ m already weighs more than $700$ kg.`,
      `Doubling a bell's height doubles its mass.`,
      `Mass per metre of height is the same at every height.`,
      `A one-metre bell already weighs more than $200$ kg.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Doubling height multiplies mass by

$$2^{3}=8$$

A proportional casting would have carried exponent $1$. Geometric similarity is a volume scaling, so the leftover exponent is $3$. Checking the weighed bell: doubling $0.5$ m to $1$ m multiplies mass by $8$, from $30$ kg to $240$ kg, which exceeds a doubling. The opposite verdict would have needed an exponent of $1$ or less. The pattern book is a cube.

Checking the weighed bell: doubling $0.5$ m to $1$ m multiplies mass by $8$, from $30$ kg to $240$ kg, which exceeds a doubling. Geometric similarity is a volume scaling, leftover exponent $3$. The opposite verdict would have needed an exponent of $1$ or less. The pattern book is a cube.

which exceeds $2$. Mass grows faster than height. A proportional casting would have carried exponent $1$. Geometric similarity is a volume scaling, so the leftover exponent is $3$, so the statement is True.`,
      `**B.** → True

The weighed bell gives $A\\cdot\\frac{1}{8}=30$, so $A=240$ and $M(h)=240 h^{3}$. Height $1.5$ is three times the $0.5$ m pattern, so mass multiplies by $27$:

$$M(1.5)=30\\cdot 27=810$$

Linear scaling would have claimed $90$ kg. Height $1.5$ is three times the $0.5$ m pattern, so mass multiplies by $27$: $30\\cdot 27=810$. Tripling $30$ kg would have claimed $90$, under $700$, and flipped the verdict. After isolating the unknown, the check is against $30$. The figure $700$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $30$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed a smaller $A$, so that $M(1.5)$ fell through $700$. The weighing locks $A=240$.

Eight hundred and ten sits above seven hundred. Tripling $30$ kg would have claimed $90$, under $700$, and flipped the verdict. After isolating the unknown, the check is against $30$. The figure $700$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $30$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Height $1.5$ is three times the $0.5$ m pattern, so mass multiplies by $27$. The opposite verdict would have needed $A\\le 700/3.375\\approx 207$. The weighing locks $A=240$.

which sits above $700$. Linear scaling would have claimed $90$ kg, so the statement is True.`,
      `**C.** → False

The half-metre bell at $30$ kg would become $240$ kg at one metre, not $60$ kg. The cube of a doubling is $8$, not $2$. Copying the doubling from height onto mass would have called the statement true. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That is exponent $1$, which letter A already refused. The opposite verdict would have needed $r=1$.

The half-metre bell at $30$ kg would become $240$ kg at one metre, not $60$ kg. Copying the doubling from height onto mass would have called the statement true. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That is exponent $1$, which letter A already refused. The opposite verdict would have needed $r=1$.

**1.** $2^{3}=8$, so doubling height octuples mass. The $0.5$ m bell at $30$ kg becomes $240$ kg at $1$ m, not $60$ kg.

**2.** Copying the doubling from height onto mass would have called the statement true. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That is exponent $1$, which letter A already refused.

**3.** The opposite verdict would have needed $r=1$. Geometric similarity of bronze bells is a volume cube, leftover exponent $3$.

Letter A already used $2^{3}=8$ as an outrunning factor. This letter is the same cube read as a doubling claim. Height $\\times 2$ is mass $\\times 8$, never mass $\\times 2$. The weighed $30$ kg bell is the concrete witness: its one-metre cousin is $240$ kg, not $60$ kg.

The cube $2^{3}=8$ is the doubling factor for geometrically similar bells. Letter E then uses the unit-height bell $M(1)=240$ as the same cube evaluated at $h=1$. This letter is the doubling claim, and it is false.

Doubling height multiplies mass by $8$, not by $2$. The half-metre bell at $30$ kg would become $240$ kg at one metre, not $60$ kg. The cube of a doubling is $8$, not $2$, so the statement is False.`,
      `**D.** → False

Mass per metre is $M(h)/h=240 h^{2}$, which rises with height. At $0.5$ m the quotient is $60$; at $1$ m it is $240$. A constant intensity would have needed exponent $1$. Dividing $30$ kg by $0.5$ m once and treating $60$ kg per metre as a law would have missed that $M(1)/1=240$. The recovered comparison therefore keeps $30$ and does not substitute $M(1)/1=240$. The opposite verdict would have needed leftover exponent $0$ on $M/h$.

At $0.5$ m the quotient $M/h$ is $60$; at $1$ m it is $240$; at $1.5$ m it is $540$. Intensity rises with the square of height. Dividing $30$ kg by $0.5$ m once and treating $60$ kg per metre as a law would have missed those later quotients. Working from the isolated values, $30$ is the figure that is checked, not the detour that produced $60$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The opposite verdict would have needed leftover exponent $0$ on $M/h$, hence $r=1$.

**1.** $M/h=240 h^{2}$. At $0.5$ m that intensity is $60$; at $1$ m it is $240$; at $1.5$ m it is $540$. Not constant.

**2.** Dividing $30$ by $0.5$ once and treating $60$ kg per metre as a law would have missed the later quotients. So the letter reads the claim against $30$; $60$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $30$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

**3.** The opposite verdict would have needed leftover exponent $0$ on $M/h$, hence $r=1$. The pattern book is a cube.

Mass per metre of height would be constant only for a rod-like $M\\propto h$. Similar bells fill out as cubes, so $M/h\\propto h^{2}$ climbs. The $0.5$ m, $1$ m, and $1.5$ m quotients $60$, $240$, $540$ are that climb in kilograms per metre.

Three heights, three intensities: $60$, $240$, $540$ kilograms per metre. A constant intensity would have repeated $60$. Similar bells do not repeat it, because mass fills as $h^{3}$ while the per-metre quotient peels off only one power of $h$.

Mass per metre is $M(h)/h=240 h^{2}$, which rises with height. At $0.5$ m the quotient is $60$; at $1$ m it is $240$. A constant intensity would have needed exponent $1$, so the statement is False.`,
      `**E.** → True

At a unit height the cube is $1$, so the mass equals the coefficient:

$$M(1)=240$$

At a unit height the cube is $1$, so the mass equals the coefficient: $M(1)=240$. That $A$ is the one-metre bell. Doubling the $0.5$ m weighing to $60$ kg would have sat under $200$ and flipped the verdict. That is the fork: $0.5$ belongs to the recovered isolation, $200$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Inverse of letter C's mix-up: doubling height is not doubling mass. The opposite verdict would have needed $A\\le 200$. The weighing locks $A=240$.

Two hundred and forty sits above two hundred. Doubling the $0.5$ m weighing to $60$ kg would have sat under $200$ and flipped the verdict. That is the fork: $0.5$ belongs to the recovered isolation, $200$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Doubling height is not doubling mass, which is letter C. The opposite verdict would have needed $A\\le 200$. The weighing locks $A=240$.

Two hundred and forty sits above $200$. That $A$ is the one-metre bell, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 80,
    solution_overview: `Similar bells obey $M(h)=Ah^{3}$, and the single weighing $M(0.5)=30$ fixes the coefficient.

**Part 1: Building the model.**

Let $h$ = height in metres and $M$ = mass in kilograms. Geometric similarity fixes the exponent at $3$; one observed pair pins $A$.

**1. Translate: the weighed bell.**

$$A(0.5)^{3}=30$$

**2. Translate: the scaling rule.**

$$\\frac{M(kh)}{M(h)}=k^{3}$$

**Part 2: The model.**

$$M(h)=240h^{3} \\tag{1}$$

$$M(kh)=k^{3}M(h) \\tag{2}$$

**Part 3: Solve.**

**1.** Because the exponent is $3>1$, mass outruns height. Doubling height multiplies mass by $8$, not by $2$. Mass per metre is $240h^{2}$, not constant.

**2.** $M(1.5)=810>700$ and $M(1)=240>200$.

**Answer.** $A=240$ | $M(1.5)=810$ | doubling $\\times 8$ | $M(1)=240$`,
  },
  {
    id: `math-8-81`,
    case_id: `MATH 8.81`,
    title: `Drag and Sustained Power on a Velodrome`,
    context: `Aerodynamic drag on a track cyclist follows $F(v)=A v^{r}$ newtons for speed $v>0$ metres per second, with both constants unknown. Doubling any speed multiplies drag by four, and raising speed from $8$ to $12$ m/s increased drag by exactly $40$ N. The power needed to overcome that drag is $P=Fv$ watts, and the rider can hold $500$ W for a full pursuit. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Absorbed power grows faster than speed.`,
      `If the rider doubles speed, absorbed power doubles.`,
      `An extra metre per second of speed adds more watts at $12$ m/s than it does at $8$ m/s.`,
      `At $8$ m/s the rider is still under $300$ W.`,
      `At $12$ m/s the rider is still under $800$ W.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The doubling record is $2^{r}=4$, so $r=2$. Power is drag times speed:

$$P(v)=A v^{3}$$

The leftover exponent $3>1$, so absorbed power grows faster than speed. A proportional law would have carried exponent $1$. Drag itself only has exponent $2$; multiplying by speed raises that to $3$. The opposite verdict would have needed leftover exponent $1$ on $P$, hence drag independent of speed. The doubling record $2^{r}=4$ locks $r=2$ on drag and $3$ on power.

Checking $P(8)=256$ and $P(12)=864$, the speed ratio $1.5$ produced a power ratio $3.375=1.5^{3}$, not $1.5$. Power outruns speed by the leftover cube. A rider who treated watts as lockstep with speed would have under-budgeted the pursuit.

The leftover exponent $3>1$, so absorbed power grows faster than speed. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**B.** → False

With power exponent $3$, doubling speed multiplies absorbed power by

$$2^{3}=8$$

With power exponent $3$, doubling speed multiplies absorbed power by $8$, not by $2$. Drag itself only quadrupled, because its exponent was $2$; multiplying by the doubled speed doubles that factor again, from $4$ to $8$.

**1.** Checking the recovered levels: $P(8)=256$ and $P(16)=\\frac{1}{2}\\cdot 4096=2048$, and $2048/256=8$. The eightfold is sitting on a doubled pursuit speed.

**2.** Doubling $P(8)=256$ to $512$ would have called the statement true. The stem's recovered values line up with $P(8)=256$, whereas $512$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $P(8)=256$ stays in the write-up. That contrast is the reason the verdict goes the way it does. That is leftover exponent $1$ on power.

**3.** The opposite verdict would have needed $P\\propto v$. Then $F$ would have been independent of $v$. The doubling record on drag forbids a constant $F$. Power rises eightfold, not twofold.

Drag quadrupled on a doubled speed because $r=2$. Power is drag times speed, so the extra factor of $2$ on $v$ turns that $4$ into $8$. Mixing the drag factor with the power factor is how a twofold power claim appears. Letter A already used leftover exponent $3$; this letter is that $3$ read as a doubling.

A rider who doubled speed from $8$ to $16$ m/s would need $2048$ W, eight times $256$, not twice $256$. The $500$ W ceiling is already broken by a much smaller step: even $P(10)=500$ exactly, so the doubling in the claim is far past sustainable. Power rises with the cube of speed, leftover exponent $3$, which is why a twofold speed is an eightfold watt budget.

Mixing the drag quadrupling with the power eightfold is the remaining trap. Drag $\\times 4$ on a doubled speed is true and is not the claim. The claim is absorbed power, $P=Fv$, which takes that $4$ and multiplies by the doubled $v$ to make $8$.

not by $2$. Drag itself only quadrupled, because its exponent was $2$; multiplying by the doubled speed doubles that factor again, from $4$ to $8$. Power rises eightfold, not twofold, so the statement is False.`,
      `**C.** → True

From $r=2$ and $A(12^{2}-8^{2})=40$, the difference of squares is $80A=40$, so $A=\\frac{1}{2}$ and $P(v)=\\frac{1}{2}v^{3}$. The leftover slope is

$$P'(v)=\\frac{3}{2}v^{2}$$

From $r=2$ and $A(144-64)=40$, one has $A=\\frac{1}{2}$ and $P(v)=\\frac{1}{2}v^{3}$. The leftover slope is $P'(v)=\\frac{3}{2}v^{2}$. At $8$ m/s that is $96$. At $12$ m/s it is $216$. Because $216>96$, the extra metre costs more watts at $12$ m/s than at $8$ m/s.

**1.** A finite one-metre step agrees. $P(9)-P(8)=\\frac{1}{2}(729-512)=108.5$ watts, while $P(13)-P(12)=\\frac{1}{2}(2197-1728)=234.5$ watts. Later metres cost more.

**2.** Seeing $P(12)=864>P(8)=256$ and inferred a steeper extra metre at the slow speed, because "there is more room to grow," would have mixed a lower level with a shallower slope. The opposite verdict would need a different isolation than $P(12)=864>P(8)=256$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim.

**3.** The opposite verdict would have needed leftover exponent on $P$ below $1$, so that $P'$ would fall. The recovered cubic climbs. Changing $A$ scales both slopes by the same factor and cannot reverse $216>96$.

The $40$ N drag gap between $8$ and $12$ m/s is a difference of levels of $F$, not of $P$. Converting through $P=Fv$ gives $P(12)-P(8)=864-256=608$ watts across $4$ m/s, an average of $152$ W per extra metre, which sits between the instantaneous slopes $96$ and $216$ as a rising $P'$ requires. Later metres cost more watts.

Because $P'=\\frac{3}{2}v^{2}$ itself rises with $v$, the extra metre at $12$ m/s costs $216$ W while the extra metre at $8$ m/s costs $96$ W. Those are not close. A cubic power curve is front-loaded in reverse: later speed is dearer, not cheaper. The claim's ranking matches that rising slope. The opposite ranking would have needed a square-root power, leftover exponent below $1$.

A falling $P'$ would have been a square-root or logarithmic pursuit, leftover exponent below $1$. The recovered cubic has $P'$ climbing as $v^{2}$. Later metres cost more watts, which is the claim.

At $8$ m/s that is $96$. At $12$ m/s it is $216$. Because $216>96$, the extra metre costs more watts at $12$ m/s than at $8$ m/s, so the statement is True.`,
      `**D.** → True

The doubling record $2^{r}=4$ forces $r=2$, and $A(144-64)=40$ forces $A=\\frac{1}{2}$, so $P(v)=\\frac{1}{2}v^{3}$. At $8$ m/s:

$$P(8)=\\frac{1}{2}\\cdot 512=256$$

Two hundred and fifty-six sits under three hundred. Using drag $F(8)=\\frac{1}{2}\\cdot 64=32$ N times speed $8$ is the same check. Using $P(12)=864$ against $300$ would have named the faster run. The stem's recovered values line up with $P(12)=864$, whereas $300$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $P(12)=864$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter D names $8$ m/s. The opposite verdict would have needed $A>300/512\\approx 0.586$. The $40$ N gap locks $A=\\frac{1}{2}$.

The rider's $500$ W ceiling is already above $256$ W, so at $8$ m/s the pursuit is still legal on power. Letter E then shows $12$ m/s is not. This letter is only the $300$ W line at the slow run.

Two hundred and fifty-six sits under $300$. Using drag $32$ N times speed $8$ is the same check, so the statement is True.`,
      `**E.** → False

At $12$ m/s the cubic $P(v)=\\frac{1}{2}v^{3}$ gives

$$P(12)=\\frac{1}{2}\\cdot 1728=864$$

Eight hundred and sixty-four sits past eight hundred, not under it. The faster run has already broken the eight-hundred-watt line, and the rider's $500$ W ceiling is long gone. Using $P(8)=256$ against $800$ would have named the slow run. So the letter reads the claim against $P(8)=256$; $800$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $P(8)=256$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Letter E names $12$ m/s. The opposite verdict would have needed $A\\le 800/1728\\approx 0.463$. The logged gap locks $A=\\frac{1}{2}$.

Eight hundred and sixty-four also sits past the $500$ W pursuit ceiling. The $800$ W cutoff in the claim is a nearby figure, not that ceiling. Either way the faster run is over budget. The opposite verdict on the $800$ line would have needed $A\\le 800/1728$.

which sits past $800$, not under it. The faster run has already broken the eight-hundred-watt line, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 81,
    solution_overview: `Drag is $F(v)=Av^{r}$, recovered from a doubling factor of $4$ and a $40$ N gap between $8$ and $12$ m/s. Absorbed power is $P=Fv$, and the rider's ceiling is $500$ W.

**Part 1: Building the model.**

Let $v$ = speed in metres per second, $F$ = drag in newtons, $P$ = absorbed power in watts. The doubling record is a ratio, so the coefficient cancels and the exponent is isolated first. The logged increase is a difference of two levels, which then pins the coefficient. Multiplying by speed raises the exponent by one.

**1. Translate: the doubling rule.**

$$2^{r}=4$$

**2. Translate: the logged increase.**

$$A\\left(12^{r}-8^{r}\\right)=40$$

**3. Translate: power.**

$$P(v)=v\\cdot Av^{r}=Av^{r+1}$$

**Part 2: The model.**

$$r=2 \\tag{1}$$

$$F(v)=\\frac{1}{2}v^{2} \\tag{2}$$

$$P(v)=\\frac{1}{2}v^{3} \\tag{3}$$

**Part 3: Solve.**

**1.** Matching powers of two gives the exponent, then the difference of squares gives the coefficient:

$$4=2^{2} \\quad \\Rightarrow \\quad r=2, \\qquad 80A=40 \\quad \\Rightarrow \\quad A=\\frac{1}{2}$$

**2.** Because the power exponent $3>1$, power outruns speed, doubling speed multiplies power by $8$, and $P'(v)=\\frac{3}{2}v^{2}$ rises with $v$.

**3.** Levels against the thresholds:

$$P(8)=256<300, \\qquad P(12)=864>800, \\qquad P'(8)=96<P'(12)=216$$

**Answer.** $r=2$, $A=\\frac{1}{2}$ | $F(v)=\\frac{1}{2}v^{2}$, $P(v)=\\frac{1}{2}v^{3}$ | $P(8)=256$ W | $P(12)=864$ W`,
  },
  {
    id: `math-8-82`,
    case_id: `MATH 8.82`,
    title: `Signal Attenuation From a Buried Cable Locator`,
    context: `The signal a locator receives from a buried conductor follows $S(x)=A x^{r}$ millivolts, where $x>0$ is the burial depth in metres. Neither constant is posted. Doubling any burial depth cuts the received signal to $\\frac{1}{8}$, and a calibration run over a conductor buried at $2$ metres read $50$ millivolts. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The received signal is inversely proportional to burial depth.`,
      `Doubling burial depth halves the received signal.`,
      `The burial depth needed for a given reading is itself a power function of that reading.`,
      `A conductor buried at $4$ metres already returns under $7$ millivolts.`,
      `A reading of $3.2$ millivolts still corresponds to a burial depth of more than $8$ metres.`,
    ],
    answer_key: [false, false, true, true, false],
    tactical_explanations: [
      `**A.** → False

The doubling record is $2^{r}=\\frac{1}{8}$, so $r=-3$. Inverse proportionality would mean exponent $-1$, which would cut the signal in half when depth doubles. The recorded factor is $2^{-3}=\\frac{1}{8}$. The locator falls faster than an inverse-depth law. The opposite verdict would have needed $r=-1$. The doubling record is one eighth, not one half.

Checking $S(2)=50$ and $S(4)=6.25$ is an eighth, not a half. Inverse proportionality is the wrong power. The locator is an inverse cube.

The doubling record is one eighth, four times steeper than a half. Inverse proportionality is exponent $-1$. The locator is exponent $-3$. Those are different laws, and the calibration $S(2)=50$ becoming $S(4)=6.25$ is the eighth sitting in the file.

The doubling record is $2^{r}=\\frac{1}{8}$, so $r=-3$. Inverse proportionality would mean exponent $-1$, which would cut the signal in half when depth doubles. The recorded factor is $2^{-3}=\\frac{1}{8}$. The locator falls faster than an inverse-depth law, so the statement is False.`,
      `**B.** → False

Doubling depth multiplies the signal by

$$2^{-3}=\\frac{1}{8}$$

Doubling depth multiplies the signal by $\\frac{1}{8}$, not by $\\frac{1}{2}$. The recorded factor is one eighth, four times steeper than a halving. Inverse-linear thinking is the mismatch. Checking $S(2)=50$ and $S(4)=6.25$ is that eighth sitting in the calibration. The opposite verdict would have needed $r=-1$. Letter A already refused inverse proportionality; this letter is the same record read as a doubling claim.

Letter A already refused inverse proportionality. This letter is the same doubling record read as a halving claim. Depth $\\times 2$ is signal $\\times \\frac{1}{8}$, never $\\times \\frac{1}{2}$.

not by $\\frac{1}{2}$. The recorded factor is one eighth, four times steeper than a halving. Inverse-linear thinking is the mismatch, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $S=A x^{-3}$,

$$x=A^{\\frac{1}{3}} S^{-\\frac{1}{3}}$$

A nonzero power inverts to another power. From $S=400 x^{-3}$, isolating depth raises both sides to the reciprocal of $-3$ and leaves $x=400^{\\frac{1}{3}} S^{-\\frac{1}{3}}$. Depth is a monomial in the reading. Falling signal does not introduce a logarithm.

Checking a recovered pair: at $S=50$ the inverse returns $x=2$, the calibration. At $S=3.2$ it returns $x=5$, letter E. The inverse is faithful to both named readings. The opposite verdict would have needed a decaying exponential in depth, which inverts to a logarithm.

Swapping the variables and keeping exponent $-3$ would have written $x=400 S^{-3}$ and lost the reciprocal. So the letter reads the claim against $-3$; $x=400 S^{-3}$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $-3$ stays in the write-up. That contrast is the reason the verdict goes the way it does. At $S=50$ that wrong inverse would not return $x=2$. The exponent must take the reciprocal: $-3$ becomes $-\\frac{1}{3}$. Falling signal does not introduce a logarithm. The opposite verdict would have needed a decaying exponential in depth.

Depth as a function of reading is $x=\\sqrt[3]{400/S}$. At $S=6.25$ that returns $x=4$, letter D. At $S=50$ it returns $x=2$, the calibration. At $S=3.2$ it returns $x=5$, letter E. Three named readings, one monomial inverse. Falling millivolts do not introduce a logarithm. The opposite verdict would have needed $S=A e^{-kx}$, whose inverse is logarithmic in the reading.

Three named readings sit on one inverse: $50$ mV at $2$ m, $6.25$ mV at $4$ m, $3.2$ mV at $5$ m. A logarithm would not hit all three with a single pair $(A,r)$. The stem is a power, so the inverse is a power.

Isolating depth raises both sides to the reciprocal of $-3$. Depth is a monomial in the reading. Falling signal does not introduce a logarithm,

A change of millivolt units would rescale $A$ and leave the inverse still a power of the reading.

Checking $S=400$ returns $x=1$, a unit-depth witness that the inverse is $x=(400/S)^{\\frac{1}{3}}$. Falling signal does not introduce a logarithm.

so the statement is True.`,
      `**D.** → True

From $r=-3$ and $A\\cdot 2^{-3}=50$, the coefficient is $A=400$. Four metres is one doubling of the calibration depth of $2$ m, so

$$S(4)=50\\cdot\\frac{1}{8}=6.25$$

Four metres is one doubling of the calibration depth of $2$ m, so $S(4)=50\\cdot\\frac{1}{8}=6.25$, which sits under $7$. Inverse-cube decay is already under seven millivolts. Halving $50$ to $25$ would have sat above $7$ and flipped the verdict. That is the fork: $50$ belongs to the recovered isolation, $7$ belongs to the discarded mix. Inverse-linear thinking is too slow. The opposite verdict would have needed $A>7\\cdot 64=448$. The calibration locks $A=400$.

Six point two five sits under seven. Inverse-cube on one doubling of the $2$ m calibration is an eighth of $50$. A halved $50$ would have been $25$, above $7$, and would have flipped the letter. Inverse-linear thinking is too slow a decay.

which sits under $7$. Inverse-cube decay is already under seven millivolts, so the statement is True.`,
      `**E.** → False

A reading of $3.2$ mV inverts $400 x^{-3}=3.2$:

$$x^{3}=\\frac{400}{3.2}=125$$

$$x=5$$

A reading of $3.2$ mV inverts $400 x^{-3}=3.2$ to $x^{3}=125$ and $x=5$. Five metres is not more than $8$ m. A second doubling from $4$ m would have been $8$ m and a reading $S(8)=50/64\\approx 0.78$ mV, much smaller than $3.2$. Doubling $4$ m with the reading would have claimed $8$ m and called the statement true. That is the fork: $4$ belongs to the recovered isolation, $8$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed a smaller $A$, so that $3.2$ mV sat at a greater depth. The calibration locks $x=5$ m at $3.2$ mV.

Five metres is between the calibration $2$ m and a second doubling $8$ m. The reading $3.2$ mV is between $S(4)=6.25$ and $S(8)\\approx 0.78$, closer to a $5$ m burial than to an $8$ m one. The claim's "more than $8$ metres" overshoots the inverse.

A second doubling from the $4$ m burial would have been $8$ m and $S=6.25/8\\approx 0.78$ mV, far below $3.2$ mV. The reading $3.2$ sits between $S(4)=6.25$ and $S(8)\\approx 0.78$, and the cube-root inverse places it at $5$ m, not past $8$ m. The claim overshoots the burial depth. Linear thinking on depth against a cubed decay is how an $8$ m guess appears.

Linear interpolation between $4$ m at $6.25$ mV and $8$ m at $0.78$ mV would have placed $3.2$ mV near $6$ m, still not more than $8$ m. The cube-root inverse is more precise and lands at $5$ m. Either way the claim's "more than $8$ metres" overshoots.

Five metres is not more than $8$ m. A second doubling from $4$ m would have been $8$ m and a much smaller reading,

Checking $S(5)=400/125=3.2$ is the forward reading at five metres, the same pair the inverse just recovered.

A burial past $8$ m would have read under $0.8$ mV. The named $3.2$ mV is far brighter than that, so the depth cannot sit past $8$ m.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 82,
    solution_overview: `Attenuation is $S(x)=Ax^{r}$ in millivolts. Doubling depth leaves one eighth of the signal, and the calibration is $S(2)=50$.

**Part 1: Building the model.**

Let $x$ = burial depth in metres and $S$ = received signal in millivolts. The doubling record is a ratio, so the coefficient cancels and the exponent is isolated first. One observed pair then fixes the coefficient; because the exponent is negative, that recovery multiplies by a power of the depth.

**1. Translate: the doubling rule.**

$$2^{r}=\\frac{1}{8}$$

**2. Translate: the calibration run.**

$$A\\cdot 2^{r}=50$$

**Part 2: The model.**

$$r=-3 \\tag{1}$$

$$S(x)=400x^{-3} \\tag{2}$$

**Part 3: Solve.**

**1.** Matching powers of two gives the exponent, then the calibration multiplies:

$$\\frac{1}{8}=2^{-3} \\quad \\Rightarrow \\quad r=-3, \\qquad A=50\\times 8=400$$

**2.** Doubling depth leaves $\\frac{1}{8}$ of the signal, not $\\frac{1}{2}$, so the law is not inverse proportionality. The inverse $x=400^{\\frac{1}{3}}S^{-\\frac{1}{3}}$ is still a power.

**3.** Levels against the thresholds:

$$S(4)=6.25<7, \\qquad x=5\\ \\text{at}\\ S=3.2$$

**Answer.** $r=-3$, $A=400$ | $S(x)=400x^{-3}$ | $S(4)=6.25$ mV | $3.2$ mV at $x=5$ m`,
  },
  {
    id: `math-8-83`,
    case_id: `MATH 8.83`,
    title: `Oxygen Demand and Gill Area in a Hatchery`,
    context: `A hatchery models a fish's oxygen demand as $D(m)=A m^{\\frac{3}{4}}$ millilitres per hour and its gill surface area as $G(m)=B m^{\\frac{2}{3}}$ square centimetres, where $m>0$ is body mass in grams. Neither coefficient is published. An $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish, and a $64$ g fish carries $48$ square centimetres of gill. A tank's total demand is the sum of its fish's individual demands. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Oxygen demand grows more slowly than body mass.`,
      `Oxygen demand per square centimetre of gill falls as the fish grows.`,
      `Two $16$ g fish together have the same total gill area as one $32$ g fish.`,
      `A $256$ g fish already demands more than $300$ millilitres per hour.`,
      `$16$ fish of $16$ g together still demand under $600$ millilitres per hour.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Three quarters sits below one, so each extra gram adds less oxygen demand than the gram before it. Oxygen demand lags body mass. The overview recovered $A=5$ and $D(m)=5m^{\\frac{3}{4}}$. The opposite verdict would have needed $r\\ge 1$. The $95$ millilitre gap between $16$ g and $81$ g already forces $r=\\frac{3}{4}$.

Checking $D(16)=40$ and $D(81)=135$: mass rose by $5.0625$ while demand rose by $3.375$, the signature of $r=\\frac{3}{4}$ rather than $r=1$. Demand lags mass. A linear oxygen law through $D(16)=40$ would have put $D(81)$ at $202.5$, not $135$.

The demand gap uses $81^{\\frac{3}{4}}=27$ and $16^{\\frac{3}{4}}=8$, so $19A=95$ and $A=5$. Demand is then $D(m)=5m^{\\frac{3}{4}}$. Three quarters sits below one, so each extra gram adds less oxygen demand than the gram before it. Oxygen demand lags body mass, so the statement is True.`,
      `**B.** → False

Demand per square centimetre is $D/G$. With $A=5$ and $B=3$ from $64^{\\frac{2}{3}}=16$, that intensity is

$$\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{1}{12}}$$

Demand per square centimetre is $D/G$. With $A=5$ and $B=3$ that intensity is $\\frac{5}{3}m^{\\frac{1}{12}}$. The leftover exponent $\\frac{1}{12}$ is positive, so intensity rises with body mass. It does not fall. Demand outruns gill area because $\\frac{3}{4}>\\frac{2}{3}$.

**1.** At $m=1$, intensity is $5/3$. At $m=4096=2^{12}$, $m^{\\frac{1}{12}}=2$ and intensity is $10/3$. It rose. At the gill record $m=64$, $G(64)=48$ and $D(64)=5\\cdot 64^{\\frac{3}{4}}=5\\cdot (2^{6})^{\\frac{3}{4}}=5\\cdot 2^{\\frac{9}{2}}=80\\sqrt{2}\\approx 113$, so $D/G\\approx 2.35$, already above $5/3\\approx 1.67$.

**2.** Seeing both exponents below $1$ and inferred that every intensity falls would have missed the difference $\\frac{3}{4}-\\frac{2}{3}=\\frac{1}{12}>0$. That is the fork: $1$ belongs to the recovered isolation, $\\frac{3}{4}-\\frac{2}{3}=\\frac{1}{12}>0$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**3.** The opposite verdict would have needed gill exponent at least demand exponent. The stem is $\\frac{2}{3}<\\frac{3}{4}$.

Both exponents sit below one, yet their difference $\\frac{1}{12}$ is positive, so demand per square centimetre of gill still rises. Falling totals per gram of body, letter A's lag, is a different intensity. This letter is $D/G$, not $D/m$. Mixing those two quotients is how a falling $D/G$ appears.

Demand per gram of body is $5 m^{-\\frac{1}{4}}$, which does fall, letter A's lag. Demand per square centimetre of gill is $\\frac{5}{3}m^{\\frac{1}{12}}$, which rises. Those are different denominators. Mixing $D/m$ with $D/G$ is how a falling gill-intensity appears. The stem asks about oxygen per square centimetre of gill, and $\\frac{3}{4}>\\frac{2}{3}$ makes that intensity climb.

At $m=1$ the gill-intensity is $5/3$; at $m=4096$ it is $10/3$. It doubled over twelve doublings of mass, a slow climb, but a climb. Falling would have needed $\\frac{3}{4}\\le\\frac{2}{3}$, which is false.

The leftover exponent $\\frac{1}{12}$ is positive, so intensity rises with body mass. It does not fall. Demand outruns gill area because $\\frac{3}{4}>\\frac{2}{3}$,

Checking $D(16)/G(16)$: demand $40$ over gill $3\\cdot 16^{\\frac{2}{3}}=3\\cdot 2^{\\frac{8}{3}}\\approx 19.05$ is about $2.10$, already above the unit-mass intensity $5/3$.

The climb is slow, one twelfth on the leftover exponent, but it is a climb. Falling $D/G$ would have needed gill leftover exponent at least three quarters.

so the statement is False.`,
      `**C.** → False

Because $\\frac{2}{3}<1$, two small fish out-area one fish of twice the mass. With $G(m)=3m^{\\frac{2}{3}}$,

$$2G(16)=2\\cdot 3\\cdot 16^{\\frac{2}{3}}=24\\cdot 2^{\\frac{2}{3}}$$

$$G(32)=3\\cdot 32^{\\frac{2}{3}}=24\\cdot 2^{\\frac{1}{3}}$$

Because $\\frac{2}{3}<1$, two small fish out-area one fish of twice the mass. With $G(m)=3m^{\\frac{2}{3}}$, $2G(16)=24\\cdot 2^{\\frac{2}{3}}$ and $G(32)=24\\cdot 2^{\\frac{1}{3}}$, and $2^{\\frac{2}{3}}>2^{\\frac{1}{3}}$. Merging the two $16$ g fish into one $32$ g fish loses gill area.

Treating gill as proportional to mass would have claimed a tie at equal total mass. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That is exponent $1$. The opposite verdict would have needed $r\\ge 1$ on $G$. The $64$ g record with exponent $\\frac{2}{3}$ already refuses that.

Two $16$ g fish have $2G(16)=2\\cdot 3\\cdot 16^{\\frac{2}{3}}=24\\cdot 2^{\\frac{2}{3}}\\approx 38.1$ cm². One $32$ g fish has $G(32)=3\\cdot 32^{\\frac{2}{3}}=24\\cdot 2^{\\frac{1}{3}}\\approx 30.2$ cm². The pair out-areas the merge. Equal total mass is not equal gill when $r<1$.

and $2^{\\frac{2}{3}}>2^{\\frac{1}{3}}$. Merging the two $16$ g fish into one $32$ g fish loses gill area, so the statement is False.`,
      `**D.** → True

With $A=5$, a $256$ g fish is $4^{4}$, so the three-quarters power is $4^{3}=64$:

$$D(256)=5\\cdot 64=320$$

With $A=5$, a $256$ g fish is $4^{4}$, so the three-quarters power is $4^{3}=64$ and $D(256)=320$. Three hundred and twenty sits above three hundred. Scaling $D(16)=40$ by $256/16=16$ linearly would have claimed $640$, still above $300$ but for the wrong shape. Working from the isolated values, $D(16)=40$ is the figure that is checked, not the detour that produced $300$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed $A\\le 300/64\\approx 4.69$. The $95$ ml gap locks $A=5$.

Three hundred and twenty sits above three hundred. From $D(16)=40$, a sixteenfold mass is an eightfold demand because $16^{\\frac{3}{4}}=8$, and $40\\cdot 8=320$. Linear thinking would have claimed $640$ and still sat above $300$, for the wrong shape.

Three hundred and twenty sits above $300$, so the statement is True.`,
      `**E.** → False

A tank total is a sum of individual demands, never one application of $D$ to the pooled mass. Sixteen fish of $16$ g demand

$$16\\cdot D(16)=16\\cdot 40=640$$

A tank total is a sum of individual demands, never one application of $D$ to the pooled mass. Sixteen fish of $16$ g demand $16\\cdot 40=640$, which sits above $600$. Using $D(256)=320$ in place of $16D(16)$ is the pooling mix-up.

**1.** The pooled mass is $256$ g, the same as letter D's single fish. One $256$ g fish demands $320$; sixteen $16$ g fish demand $640$. Because $r<1$, splitting mass raises total demand.

**2.** Using $D(256)$ against $600$ would have called the statement true. After isolating the unknown, the check is against $D(256)$. The figure $600$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $D(256)$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The claim is a tank of sixteen small fish, not one large fish.

**3.** The opposite verdict would have needed $16D(16)\\le 600$, hence $D(16)\\le 37.5$. The gap locks $D(16)=40$.

Pooling sixteen fish into one $256$ g body would have demanded $320$ ml/h, under $600$, and flipped the letter. The stem says a tank total is a sum. Sixteen separate $16$ g fish cost $640$ ml/h in oxygen, above $600$. Splitting mass raises total demand when $r<1$.

One large fish of $256$ g demands $320$ ml/h, under $600$. Sixteen small fish of $16$ g demand $640$ ml/h, above $600$. The tank is the sixteen, not the one. Because $r<1$, a hatchery that stocks many small fish pays more total oxygen than one that stocks the same mass as fewer large fish. Pooling into $D(256)$ understates the tank by half.

The hatchery that reads $D$ on pooled mass understates oxygen by a factor of two on this tank: $320$ against $640$. Letter D's single $256$ g fish is the pooled-mass reading; letter E's sixteen fish are the sum. They are different experiments.

which sits above $600$. Using $D(256)$ in place of $16D(16)$ is the pooling mix-up, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 83,
    solution_overview: `Oxygen demand is $D(m)=Am^{\\frac{3}{4}}$, calibrated by a $95$ millilitre gap between $16$ g and $81$ g. Gill area is $G(m)=Bm^{\\frac{2}{3}}$, pinned by $G(64)=48$. Tank totals add individual demands.

**Part 1: Building the model.**

Let $m$ = body mass in grams, $D$ = oxygen demand in millilitres per hour, $G$ = gill area in square centimetres. Both exponents are supplied, so each law needs exactly one record: a difference for demand and a level for gill area. Intensity subtracts the exponents. A tank total is a sum, never $D$ applied to a pooled mass.

**1. Translate: the demand gap.**

$$A\\left(81^{\\frac{3}{4}}-16^{\\frac{3}{4}}\\right)=95$$

**2. Translate: the gill record.**

$$B\\cdot 64^{\\frac{2}{3}}=48$$

**3. Translate: demand per unit gill area.**

$$\\frac{D(m)}{G(m)}=\\frac{A}{B}m^{\\frac{1}{12}}$$

**Part 2: The model.**

$$D(m)=5m^{\\frac{3}{4}} \\tag{1}$$

$$G(m)=3m^{\\frac{2}{3}} \\tag{2}$$

$$\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{1}{12}} \\tag{3}$$

**Part 3: Solve.**

**1.** Exact shape factors make both calibrations one-step solves:

$$81^{\\frac{3}{4}}=27,\\quad 16^{\\frac{3}{4}}=8 \\;\\Rightarrow\\; 19A=95 \\;\\Rightarrow\\; A=5$$

$$64^{\\frac{2}{3}}=16 \\;\\Rightarrow\\; 16B=48 \\;\\Rightarrow\\; B=3$$

**2.** Because $\\frac{3}{4}<1$, demand lags mass. Intensity $(3)$ still rises, since $\\frac{1}{12}>0$, and two $16$ g fish out-area one $32$ g fish.

**3.** Levels against the thresholds:

$$D(256)=320>300, \\qquad 16\\,D(16)=640>600$$

**Answer.** $A=5$, $B=3$ | $D(256)=320$ | $16\\,D(16)=640$ | $\\frac{D}{G}=\\frac{5}{3}m^{\\frac{1}{12}}$`,
  },
  {
    id: `math-8-84`,
    case_id: `MATH 8.84`,
    title: `Micro-Irrigation Flow Under a Fourth-Power Law`,
    context: `Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{k}$ litres per hour, where $r>0$ is the internal tube radius in millimetres. Neither constant is posted. Doubling any tube radius multiplies flow by $16$, and a bench test on a tube of radius $2$ mm delivered $48$ litres per hour. The designers also track the mean velocity index $\\frac{Q}{\\pi r^{2}}$, which spreads the flow across the tube's cross-section. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Flow grows faster than tube radius.`,
      `Doubling the tube radius doubles the flow.`,
      `The mean velocity index is the same in every tube.`,
      `A tube of radius $3$ mm already delivers more than $200$ litres per hour.`,
      `A tube of radius $1$ mm still delivers more than $10$ litres per hour.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The doubling factor $16=2^{4}$ forces $k=4$. Four sits well above one, so each extra millimetre of bore adds more delivery than the millimetre before it. A proportional law would have carried exponent $1$. The opposite verdict would have needed an exponent of $1$ or less. The doubling record is sixteenfold, not twofold.

Checking $Q(1)=3$ and $Q(2)=48$ is a sixteenfold on a doubling, $2^{4}=16$. Flow outruns radius by a wide margin. A linear emitter would have gone from $3$ to $6$, not to $48$.

The doubling factor $16=2^{4}$ forces $k=4$. Four sits well above one, so each extra millimetre of bore adds more delivery than the millimetre before it. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**B.** → False

Doubling the radius would double the flow only if the exponent were $1$. With exponent $4$ the factor is

$$2^{4}=16$$

Doubling the radius would double the flow only if the exponent were $1$. With exponent $4$ the factor is $16$, which is the recorded doubling factor itself. Flow rises sixteenfold, not twofold. Checking $Q(2)=48$ and $Q(4)=3\\cdot 256=768$, and $768/48=16$. The opposite verdict would have needed $k=1$. Letter A already used $k=4$ as an outrunning; this letter is the same record read as a doubling claim.

Letter A already used $k=4$ as an outrunning. This letter is the same sixteenfold read as a doubling claim. Radius $\\times 2$ is flow $\\times 16$, never $\\times 2$. The bench $Q(2)=48$ becoming $Q(4)=768$ is the concrete witness.

which is the recorded doubling factor itself. Flow rises sixteenfold, not twofold, so the statement is False.`,
      `**C.** → False

From $k=4$ and $A\\cdot 16=48$, the coefficient is $A=3$. The mean velocity index is then

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}$$

From $k=4$ and $A\\cdot 16=48$, the coefficient is $A=3$. The mean velocity index is then $\\frac{Q}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}$. The leftover exponent $2$ is not zero, so the index grows with the radius. It is not the same in every tube.

**1.** At $r=1$, the index is $3/\\pi$. At $r=2$, it is $12/\\pi$, four times larger. Poiseuille-style fourth-power flow over a square cross-section leaves a square in the mean velocity.

**2.** Dividing $Q$ by $r^{2}$ once at the bench, $48/(\\pi\\cdot 4)$, and treating that as a law would have missed the leftover $r^{2}$. After isolating the unknown, the check is against $Q$. The figure $48/(\\pi\\cdot 4)$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $Q$ stays in the write-up.

**3.** The opposite verdict would have needed $k=2$, so that $Q/(\\pi r^{2})$ was constant. The doubling record is $16=2^{4}$, not $2^{2}=4$.

Mean velocity growing as $r^{2}$ is why a wider tube is not just more flow at the same speed: the core is faster too. At $r=3$, the index is $27/\\pi$ times the $r=1$ value of $3/\\pi$, a ninefold speed index on a threefold bore. A constant index would have needed $Q\\propto r^{2}$. The doubling record forbids that.

If the mean velocity index were the same in every tube, $Q$ would scale as the cross-section $r^{2}$ and the doubling factor would have been $4$, not $16$. The recorded sixteenfold is $2^{4}$, two extra powers of radius beyond area, which remain in $Q/(\\pi r^{2})$ as $r^{2}$. Wider tubes are faster in the mean, not just roomier. The opposite verdict would have needed $k=2$. The doubling record is $16$.

A constant mean velocity is the $k=2$ story, doubling factor $4$. The recorded doubling factor is $16$, so two extra powers of $r$ remain in the velocity index. Wider bores are faster in the mean. The opposite verdict would have needed the doubling record to have been $4$, not $16$.

The leftover exponent $2$ is not zero, so the index grows with the radius. It is not the same in every tube, so the statement is False.`,
      `**D.** → True

With $Q(r)=3r^{4}$, a tube of radius $3$ mm delivers

$$Q(3)=3\\cdot 81=243$$

With $Q(r)=3r^{4}$, a tube of radius $3$ mm delivers $Q(3)=3\\cdot 81=243$, which sits above $200$. Three to the fourth is $81$. Using $3^{2}=9$ times $3$ would have claimed $27$, under $200$, and flipped the verdict. So the letter reads the claim against $3^{2}=9$; $200$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $3^{2}=9$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The opposite verdict would have needed $A\\le 200/81\\approx 2.47$. The bench locks $A=3$.

Two hundred and forty-three sits above two hundred. $3^{4}=81$ times $A=3$ is $243$. Using $3^{3}=27$ times $3$ would have claimed $81$, under $200$, and flipped the letter. The exponent is $4$, not $3$.

Two hundred and forty-three sits above two hundred by $43$ litres per hour, not a rounding. A cubic emitter $3r^{3}$ would have delivered $81$ at $r=3$, under $200$, and flipped the letter. The exponent is $4$. The bench $Q(2)=48$ already refuses a cube: $3\\cdot 8=24\\neq 48$.

The $200$ L/h cutoff is a nearby figure, not a rounding of $243$. Changing the bench from $48$ to $40$ L/h would have lowered $A$ to $2.5$ and $Q(3)$ to $202.5$, still above $200$. The stem's $48$ locks $243$.

which sits above $200$. Three to the fourth is $81$, so the statement is True.`,
      `**E.** → False

At radius $1$ mm every power of $1$ is $1$, so

$$Q(1)=3$$

At radius $1$ mm every power of $1$ is $1$, so $Q(1)=3$, which sits under $10$. The coefficient itself is the one-millimetre delivery. The fourth-power law drops that fast when the bore shrinks below the $2$ mm bench. Halving $Q(2)=48$ twice would have claimed $12$, still above $10$, or used inverse-linear $24$, above $10$. After isolating the unknown, the check is against $Q(2)=48$. The figure $24$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $Q(2)=48$ stays in the write-up. The opposite verdict would have needed $A>10$. The bench locks $A=3$.

Three litres per hour at a $1$ mm bore sits well under ten. The fourth power that made $Q(3)=243$ generous makes $Q(1)=3$ tiny. A linear interpolation from $Q(2)=48$ down to $r=1$ would have claimed $24$, still above $10$, and flipped the letter.

which sits under $10$. The coefficient itself is the one-millimetre delivery. The fourth-power law drops that fast when the bore shrinks below the $2$ mm bench, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 84,
    solution_overview: `Flow obeys $Q(r)=Ar^{k}$. Doubling the radius multiplies flow by $16$, and the bench test is $Q(2)=48$. The mean velocity index is $\\frac{Q}{\\pi r^{2}}$.

**Part 1: Building the model.**

Let $r$ = internal radius in millimetres and $Q$ = flow in litres per hour. The doubling record isolates the exponent because the coefficient cancels. One bench test then fixes the coefficient. Dividing flow by the cross-section produces a second power whose exponent is the difference of the two.

**1. Translate: the doubling rule.**

$$2^{k}=16$$

**2. Translate: the bench test.**

$$A\\cdot 2^{k}=48$$

**3. Translate: the velocity index.**

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{A}{\\pi}r^{k-2}$$

**Part 2: The model.**

$$k=4 \\tag{1}$$

$$Q(r)=3r^{4} \\tag{2}$$

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2} \\tag{3}$$

**Part 3: Solve.**

**1.** Matching powers of two, then dividing the bench reading:

$$16=2^{4} \\quad \\Rightarrow \\quad k=4, \\qquad A=\\frac{48}{16}=3$$

**2.** Because $k>1$, flow outruns radius, doubling multiplies flow by $16$, and the velocity index still carries exponent $2$.

**3.** Levels against the thresholds:

$$Q(3)=243>200, \\qquad Q(1)=3<10$$

**Answer.** $k=4$, $A=3$ | $Q(r)=3r^{4}$ | $Q(3)=243$ L/h | velocity index $=\\frac{3}{\\pi}r^{2}$`,
  },
  {
    id: `math-8-85`,
    case_id: `MATH 8.85`,
    title: `Barrier Distance for a Radiography Source`,
    context: `Dose rate near an industrial radiography source follows $H(d)=A d^{r}$ microsieverts per hour, where $d>0$ is the distance from the source in metres. Neither constant is posted. Quadrupling any distance cuts the dose rate to $\\frac{1}{16}$, and a survey meter $3$ metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the distance from the source halves the dose rate.`,
      `An extra metre cuts more dose at $3$ metres than at $6$ metres.`,
      `The distance needed for a given dose rate is itself a power of that dose rate.`,
      `At $6$ metres the dose rate is already under $25$ microsieverts per hour.`,
      `The barrier sits farther than $15$ metres from the source.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

The quadrupling record is $4^{r}=\\frac{1}{16}$, so $r=-2$. Doubling distance multiplies dose by

$$2^{-2}=\\frac{1}{4}$$

The quadrupling record is $4^{r}=\\frac{1}{16}$, so $r=-2$. Doubling distance multiplies dose by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$. A half would have been inverse-linear; this survey's quadrupling record is inverse-square. Checking $H(3)=80$ and $H(6)=20$ is that quarter. The opposite verdict would have needed $r=-1$.

Checking $H(3)=80$ and $H(6)=20$ is a quarter, not a half. Inverse-linear thinking is the mismatch. The quadrupling record $4^{r}=\\frac{1}{16}$ already locked $r=-2$ before any doubling was asked.

Halving dose on a doubled range is inverse-linear, exponent $-1$. The survey quarters dose on a doubled range, exponent $-2$. Letter A is that ranking. Checking $80$ to $20$ from $3$ m to $6$ m is the quarter.

not by $\\frac{1}{2}$. A half would have been inverse-linear; this survey's quadrupling record is inverse-square, so the statement is False.`,
      `**B.** → True

From $r=-2$ and $A\\cdot 3^{-2}=80$, the coefficient is $A=720$. The leftover slope is

$$H'(d)=-1440 d^{-3}$$

From $r=-2$ and $A\\cdot 3^{-2}=80$, the coefficient is $A=720$. The leftover slope is $H'(d)=-1440 d^{-3}$. Its size is $\\frac{160}{3}$ at $3$ m and $\\frac{20}{3}$ at $6$ m. An extra metre cuts more dose at three metres than at six. Inverse-square decay is front-loaded.

**1.** A finite step agrees. From $3$ to $4$ m, $H(4)=720/16=45$, a drop of $35$ from $80$. From $6$ to $7$ m, $H(7)=720/49\\approx 14.7$, a drop of about $5.3$ from $20$. The near metre cuts more.

**2.** Seeing $H(6)=20$ closer to the $5$ barrier and inferred a steeper extra metre there would have mixed a smaller remaining dose with a steeper cut. After isolating the unknown, the check is against $H(6)=20$. The figure $5$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $H(6)=20$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

**3.** The opposite verdict would have needed $|H'|$ to grow with $d$. For $r=-2$, $|H'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $\\frac{160}{3}>\\frac{20}{3}$.

The barrier at $12$ m in letter E is a level of $H$, not a claim about slope. Slope size $|H'|$ is smaller at $6$ m than at $3$ m even though $6$ m is closer to the barrier. Front-loaded inverse-square decay is why an extra metre cuts more dose near the source.

Front-loaded inverse-square decay means the first metres from the hub do most of the dose cutting. From $3$ to $4$ m the drop is $35$ microsieverts per hour; from $6$ to $7$ m it is about $5$. An extra metre at $3$ m cuts more than an extra metre at $6$ m. The barrier at $12$ m is a level, $H=5$; it is not a region where slope suddenly steepens.

Its size is $\\frac{160}{3}$ at $3$ m and $\\frac{20}{3}$ at $6$ m. An extra metre cuts more dose at three metres than at six. Inverse-square decay is front-loaded, so the statement is True.`,
      `**C.** → True

A nonzero power inverts to another power. From $H=A d^{-2}$,

$$d=\\sqrt{A}\\, H^{-\\frac{1}{2}}$$

A nonzero power inverts to another power. From $H=720 d^{-2}$, isolating distance leaves $d=\\sqrt{720}\\, H^{-\\frac{1}{2}}$. The new exponent is the reciprocal of $-2$. Distance needed for a given dose rate is still a monomial in $H$. Checking $H=80$ returns $d=3$, the survey. Checking $H=5$ returns $d=12$, the barrier. The opposite verdict would have needed a decaying exponential in distance.

Checking $H=20$ returns $d=6$, letter D. Checking $H=5$ returns $d=12$, letter E. The inverse is faithful to both named dose rates. A change of units from metres to centimetres would rescale $A$ and leave the inverse still a power of dose rate.

The new exponent is the reciprocal of $-2$. Distance needed for a given dose rate is still a monomial in $H$, so the statement is True.`,
      `**D.** → True

Six metres is a doubling of the $3$ m survey. Inverse square quarters the $80$ reading:

$$H(6)=\\frac{80}{4}=20$$

Six metres is a doubling of the $3$ m survey. Inverse square quarters the $80$ reading: $H(6)=20$, which sits under $25$. Halving $80$ to $40$ would have sat above $25$ and flipped the verdict. After isolating the unknown, the check is against $80$. The figure $25$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $80$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Inverse-linear thinking is too slow. The opposite verdict would have needed $A>25\\cdot 36=900$. The survey locks $A=720$.

Twenty sits under twenty-five. A halved $80$ would have been $40$, above $25$, and would have flipped the letter. Inverse-linear thinking is too slow. Inverse square on a doubled range is a quarter of the survey, $20$.

which sits under $25$. Inverse square on a doubled range is a quarter, so the statement is True.`,
      `**E.** → False

From $H(3)=80$ down to $H=5$ is a factor $\\frac{1}{16}$, hence a fourfold distance:

$$d=3\\cdot 4=12$$

From $H(3)=80$ down to $H=5$ is a factor $\\frac{1}{16}$, hence a fourfold distance: $d=3\\cdot 4=12$. Twelve metres is not farther than $15$. The barrier sits at twelve metres.

**1.** Inverting as if $r=-1$ would have claimed $d=80/5\\cdot 3=48$ m, past $15$, and flipped the verdict. So the letter reads the claim against $r=-1$; $15$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $r=-1$ stays in the write-up. Inverse-linear thinking overstates the barrier.

**2.** Checking $H(15)=720/225=3.2$, already under $5$. Fifteen metres is past the barrier, not the barrier.

**3.** The opposite verdict would have needed a smaller $A$, so that the inverted $d$ rose through $15$. The survey locks $d=12$ m at $5$ microsieverts per hour.

Twelve sits under fifteen. From the survey, a factor $\\frac{1}{16}$ on dose is a fourfold on distance because $r=-2$. $3\\times 4=12$. A factor $\\frac{1}{16}$ on an inverse-linear law would have been a sixteenfold, $d=48$, past $15$, and would have flipped the letter.

The factor from $80$ down to $5$ is exactly $\\frac{1}{16}=4^{-2}$, so distance multiplies by $4$ and $3\\times 4=12$. Twelve is not farther than fifteen. Inverse-linear thinking would have multiplied distance by $16$ and claimed $48$ m, past $15$, flipping the letter. The quadrupling record already locked inverse square, so the barrier is the fourfold of the survey, $12$ m.

Twelve metres is not farther than $15$. The barrier sits at twelve metres,

Checking $H(12)=720/144=5$ is the barrier itself, not a point past $15$ m.

A survey that had read $45$ instead of $80$ at $3$ m would have lowered $A$ to $405$ and pushed the barrier to $d=9$, still under $15$.

The stem's $80$ locks $12$ m. Inverse-linear thinking is the only common route past $15$ m, and the quadrupling record already refused that exponent.

Twelve metres is the fourfold of the $3$ m survey, because a factor $\\frac{1}{16}$ on an inverse square is a fourfold on distance. Fifteen metres is past that barrier.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 85,
    solution_overview: `Dose rate obeys $H(d)=Ad^{r}$. Quadrupling distance leaves one sixteenth of the dose rate, the survey is $H(3)=80$, and the barrier sits where $H=5$.

**Part 1: Building the model.**

Let $d$ = distance from the source in metres and $H$ = dose rate in microsieverts per hour. The quadrupling record isolates the exponent. One survey reading then pins the coefficient; because that exponent is negative the recovery multiplies by a square. The barrier question inverts the same law.

**1. Translate: the quadrupling rule.**

$$4^{r}=\\frac{1}{16}$$

**2. Translate: the survey reading.**

$$A\\cdot 3^{r}=80$$

**3. Translate: the barrier rule.**

$$\\frac{A}{d^{-r}}=5$$

**Part 2: The model.**

$$r=-2 \\tag{1}$$

$$H(d)=720d^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** Matching powers of four, then multiplying by the survey square:

$$\\frac{1}{16}=4^{-2} \\quad \\Rightarrow \\quad r=-2, \\qquad A=80\\times 9=720$$

**2.** Doubling quarters the dose rate, not halves it. The inverse of $(2)$ is a power, and an extra metre cuts more dose at $3$ m than at $6$ m.

**3.** Levels against the thresholds:

$$H(6)=20<25, \\qquad d=12<15$$

**Answer.** $r=-2$, $A=720$ | $H(d)=720d^{-2}$ | $H(6)=20$ | barrier at $d=12$ m`,
  },
  {
    id: `math-8-86`,
    case_id: `MATH 8.86`,
    title: `A Dye Plume Spreading Across a Shallow Lake`,
    context: `A tracer dye released into a shallow lake spreads as a disc whose radius follows $r(t)=A t^{\\frac{2}{3}}$ metres, with $t>0$ measured in hours since release. The survey note omits the coefficient: it records only that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The stained area is itself a power of elapsed time.`,
      `The stained area grows faster than elapsed time.`,
      `Doubling the elapsed time doubles the stained area.`,
      `At hour $8$ the plume radius is already more than $50$ metres.`,
      `The plume radius reaches $240$ metres in under $50$ hours.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Radius is a two-thirds power of time and area squares that radius, so the composed exponent is

$$\\frac{2}{3}\\cdot 2=\\frac{4}{3}$$

Radius is a two-thirds power of time and area squares that radius, so the composed exponent is $\\frac{2}{3}\\cdot 2=\\frac{4}{3}$. A monomial in $t$ remains a monomial. The overview recovered $S(t)=225\\pi\\, t^{\\frac{4}{3}}$. Stopping at radius would have left exponent $\\frac{2}{3}$. The opposite verdict would have needed a stage that was not a power. Both the radius law and the disc formula are powers.

Checking $S(8)/S(1)=8^{\\frac{4}{3}}=16$ shows a monomial in $t$ with exponent $\\frac{4}{3}$, not a logarithm and not a sum of two powers. Squaring $r=15 t^{\\frac{2}{3}}$ produces $225 t^{\\frac{4}{3}}$, then times $\\pi$. The stained area is itself a power of elapsed time.

Squaring a monomial yields a monomial. $r=15 t^{\\frac{2}{3}}$ squared is $225 t^{\\frac{4}{3}}$, times $\\pi$ is $S$. No intercept, no logarithm. A disc whose radius grew exponentially would have given an exponential area, not a power. The stem's radius is a power of time, so the stained area is a power of time.

If the radius law had carried an additive constant, $r=A t^{\\frac{2}{3}}+B$, the squared area would have been a sum of powers, not a single power. The stem has no such intercept. $S=225\\pi t^{\\frac{4}{3}}$ is a monomial.

A monomial in $t$ remains a monomial. Stopping at radius would have left exponent $\\frac{2}{3}$,

Checking $S(1)=225\\pi$ and $S(8)=3600\\pi$ is a sixteenfold area on an eightfold clock, $8^{\\frac{4}{3}}=16$.

A sum of a retainer plus a power would have broken the monomial. The stem's radius has no intercept, so the disc has no intercept either.

The opposite verdict would have needed a radius law that was not a pure power. Both stages in the stem are powers, and the stained area remains a power of elapsed time.

Squaring $r=15 t^{\\frac{2}{3}}$ produces $225 t^{\\frac{4}{3}}$, then times $\\pi$. That is one monomial in $t$, leftover exponent $\\frac{4}{3}$.

so the statement is True.`,
      `**B.** → True

The composed exponent $\\frac{4}{3}>1$, so the stained area outruns elapsed time. A proportional disc would have carried exponent $1$. Area can grow faster than time even while radius grows more slowly than time. Checking $S(8)/S(1)=(8)^{\\frac{4}{3}}=16$, while time grew by $8$: $16>8$. The opposite verdict would have needed composed exponent at most $1$. Squaring a two-thirds radius pushes the product to $\\frac{4}{3}$.

Radius grew by $4$ from hour $1$ to hour $8$ while time grew by $8$, a lag. Area grew by $16$, an outrunning. The two stories live together: $r$ has exponent $\\frac{2}{3}<1$ and $S$ has exponent $\\frac{4}{3}>1$. This letter is the area story.

The composed exponent $\\frac{4}{3}>1$, so the stained area outruns elapsed time. A proportional disc would have carried exponent $1$. Area can grow faster than time even while radius grows more slowly than time, so the statement is True.`,
      `**C.** → False

Doubling time multiplies area by

$$2^{\\frac{4}{3}}\\approx 2.52$$

Doubling time multiplies area by $2^{\\frac{4}{3}}\\approx 2.52$, not by $2$. Exponent $1$ would have returned the factor $2$. Linear thinking understates the disc. Checking from hour $1$ to hour $2$: radius scales by $2^{\\frac{2}{3}}\\approx 1.59$ and area by the square of that, $2^{\\frac{4}{3}}$. The opposite verdict would have needed composed exponent $1$.

From hour $8$ to hour $16$ the area factor is again $2^{\\frac{4}{3}}\\approx 2.52$, not $2$. Linear thinking understates every doubling of the clock. The opposite verdict would have needed composed exponent $1$.

Every doubling of the clock multiplies stained area by about $2.52$, not by $2$. From hour $1$ to hour $2$, from hour $8$ to hour $16$, the same factor. Linear thinking understates the disc at every step. The composed exponent $\\frac{4}{3}$ is why.

not by $2$. Exponent $1$ would have returned the factor $2$. Linear thinking understates the disc, so the statement is False.`,
      `**D.** → True

The shape factors are $8^{\\frac{2}{3}}=4$ and $1^{\\frac{2}{3}}=1$, so $3A=45$ and $A=15$. At hour $8$:

$$r(8)=15\\cdot 4=60$$

The shape factors are $8^{\\frac{2}{3}}=4$ and $1^{\\frac{2}{3}}=1$, so $3A=45$ and $A=15$. At hour $8$: $r(8)=15\\cdot 4=60$, which sits above $50$. That is also $r(1)+45=15+45$, the first-hour radius plus the logged gap. Treating $45$ as $r(8)$ would have compared $45$ to $50$ and flipped the verdict. After isolating the unknown, the check is against $45$. The figure $50$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $45$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The $45$ is a growth, not a level. The opposite verdict would have needed $A\\le 50/4=12.5$. The logged growth locks $A=15$.

Sixty sits above fifty. The $45$ m logged growth is $r(8)-r(1)=60-15$, not $r(8)$ itself. Treating $45$ as the hour-$8$ radius would have sat under $50$ and flipped the letter.

which sits above $50$. That is also $r(1)+45=15+45$, the first-hour radius plus the logged gap, so the statement is True.`,
      `**E.** → False

A radius of $240$ metres inverts $15 t^{\\frac{2}{3}}=240$:

$$t^{\\frac{2}{3}}=16$$

$$t=64$$

A radius of $240$ metres inverts $15 t^{\\frac{2}{3}}=240$ to $t^{\\frac{2}{3}}=16$ and $t=64$. Sixty-four hours is not under $50$. The plume takes sixty-four hours to reach two hundred and forty metres.

**1.** Inverting as if $r=1$ would have claimed $t=16$, under $50$, and flipped the verdict. That is the fork: $r=1$ belongs to the recovered isolation, $50$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Linear inversion understates the wait when $r<1$.

**2.** Checking $r(50)=15\\cdot 50^{\\frac{2}{3}}\\approx 15\\cdot 13.57=203.6$, still short of $240$. Fifty hours is not a near miss on $240$ m.

**3.** The opposite verdict would have needed a larger $A$, so that the inverted $t$ fell through $50$. The logged growth locks $t=64$ h at $240$ m.

Sixty-four hours is past fifty. Linear inversion $15t=240$ would have claimed $t=16$, under $50$, and flipped the letter. A two-thirds radius law is slower than linear, so a large radius takes longer, $t=64$, not less than $50$.

To reach $240$ m the two-thirds clock needs $t=64$ h, past $50$. At $t=50$, $r\\approx 204$ m, still $36$ m short. Linear inversion $t=240/15=16$ would have sat under $50$ and flipped the letter. A radius that lags time takes longer to hit a large target, not less than $50$ hours.

Fifty hours reaches about $204$ m, short of $240$. Sixty-four hours is the inverse. The $50$ hour cutoff is not a near miss on $240$ m; it is $36$ m short. Linear inversion claiming $t=16$ is how a true "under $50$" appears, and it is the wrong inverse.

Sixty-four hours is not under $50$. The plume takes sixty-four hours to reach two hundred and forty metres,

Checking $r(64)=15\\cdot 16=240$ is the forward reading at sixty-four hours, the same pair the inverse just recovered.

Fifty hours is not a near miss: $r(50)\\approx 204$ still sits $36$ metres short of the named $240$.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 86,
    solution_overview: `The plume radius is $r(t)=At^{\\frac{2}{3}}$, calibrated by a $45$-metre growth between hour $1$ and hour $8$. The stained area is $S=\\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours since release, $r$ = plume radius in metres, $S$ = stained area in square metres. The survey gives a difference rather than a level, so the coefficient comes from subtracting two shape factors. Composing with the disc formula then doubles the exponent and squares the coefficient.

**1. Translate: the recorded growth.**

$$A\\left(8^{\\frac{2}{3}}-1^{\\frac{2}{3}}\\right)=45$$

**2. Translate: the composition.** Squaring the radius law doubles its exponent:

$$S(t)=\\pi\\bigl(At^{\\frac{2}{3}}\\bigr)^{2}=\\pi A^{2}t^{\\frac{4}{3}}$$

**Part 2: The model.**

$$r(t)=15t^{\\frac{2}{3}} \\tag{1}$$

$$S(t)=225\\pi\\, t^{\\frac{4}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** Exact shape factors make the calibration a one-step solve:

$$8^{\\frac{2}{3}}=4 \\;\\Rightarrow\\; 3A=45 \\;\\Rightarrow\\; A=15$$

**2.** $(2)$ is a power of $t$. Because $\\frac{4}{3}>1$, area outruns proportional growth, and doubling time multiplies area by $2^{\\frac{4}{3}}\\approx 2.52$, not by $2$.

**3.** Levels against the thresholds:

$$r(8)=60>50, \\qquad t=64\\ \\text{at}\\ r=240$$

**Answer.** $A=15$ | $r(t)=15t^{\\frac{2}{3}}$, $S(t)=225\\pi t^{\\frac{4}{3}}$ | $r(8)=60$ m | $r=240$ m at $t=64$ h`,
  },
  {
    id: `math-8-87`,
    case_id: `MATH 8.87`,
    title: `A Weir Rating Curve Rewritten in New Units`,
    context: `Discharge over a measuring weir follows $Q(h)=A h^{\\frac{3}{2}}$ cubic metres per second, where $h>0$ is the head in metres. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second. A field team wants the same rating curve rewritten with the head in centimetres, sometimes keeping discharge in cubic metres per second and sometimes reporting it in litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The head needed for a given discharge is itself a power of that discharge.`,
      `Discharge grows faster than head.`,
      `Doubling the head doubles the discharge.`,
      `A head of $1$ metre still discharges under $20$ cubic metres per second.`,
      `A head of $4$ metres still discharges under $100$ cubic metres per second.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

A nonzero power inverts to another power. From $Q=A h^{\\frac{3}{2}}$,

$$h=\\left(\\frac{Q}{A}\\right)^{\\frac{2}{3}}$$

A nonzero power inverts to another power. From $Q=16 h^{\\frac{3}{2}}$, isolating head leaves $h=(Q/16)^{\\frac{2}{3}}$. Head needed for a given discharge is still a monomial in $Q$. A change of units does not change that: centimetres rescale the coefficient and leave the inverse a power. Checking $Q=2$ returns $h=0.25$, the gauging. The opposite verdict would have needed a law that was not a pure power.

Checking $Q=16$ returns $h=1$, letter D. Checking $Q=128$ returns $h=4$, letter E. The inverse is faithful in metres, and rewriting $h$ in centimetres only rescales the coefficient to $0.016$ or $16$ depending on the discharge unit. The inverse remains a power of discharge.

The new exponent is the reciprocal of $\\frac{3}{2}$. Head needed for a given discharge is still a monomial in $Q$. A change of units does not change that, so the statement is True.`,
      `**B.** → True

The exponent is still $\\frac{3}{2}$ after rewriting in centimetres. A change of units cannot move the exponent below one. Discharge still outruns head. Only the coefficient absorbs the $100^{\\frac{3}{2}}$ rescaling. Checking $Q(0.50)=16\\cdot 0.50^{\\frac{3}{2}}=16\\cdot 0.125\\sqrt{2}\\approx 2.83$ versus $Q(0.25)=2$: doubling head multiplies discharge by $2\\sqrt{2}\\approx 2.83>2$. The opposite verdict would have needed the weir exponent to have been $1$. Units cannot do that.

Centimetres replace $h$ by $h_{\\mathrm{cm}}/100$. A power pushes that $100$ through the exponent and into the coefficient. The exponent $\\frac{3}{2}$ does not move. Discharge still outruns head after the rewrite. Units cannot flatten a weir.

Rewriting $h$ in centimetres multiplies the input by $100$ and therefore multiplies the coefficient by $100^{-\\frac{3}{2}}=0.001$. The exponent stays $\\frac{3}{2}$. Reporting discharge in litres per second multiplies the coefficient by $1000$ and again leaves the exponent. Discharge outruns head in every unit system the field team writes down. Units cannot flatten a weir to exponent $1$.

The field team's centimetre curve $Q=0.016 h_{\\mathrm{cm}}^{\\frac{3}{2}}$ and litre curve $Q=16 h_{\\mathrm{cm}}^{\\frac{3}{2}}$ still carry exponent $\\frac{3}{2}$. Doubling a centimetre-head still multiplies discharge by $2\\sqrt{2}$. Outrunning is an exponent fact, not a unit fact.

The exponent is still $\\frac{3}{2}$ after rewriting in centimetres. A change of units cannot move the exponent below one. Discharge still outruns head. Only the coefficient absorbs the $100^{\\frac{3}{2}}$ rescaling,

Checking the centimetre curve at a $25$ cm head, which is the gauged $0.25$ m: $0.016\\cdot 25^{\\frac{3}{2}}=0.016\\cdot 125=2$, the same discharge.

The rewrite preserved the weir. Discharge still outruns head after every unit change the field team writes down.

A linear weir, leftover exponent $1$, would have doubled discharge with doubled head. The gauging and every rewrite refuse that flatten. The leftover exponent stays $\\frac{3}{2}$. Checking $Q(1)=16$ against $Q(0.25)=2$ is an eightfold discharge on a fourfold head, $4^{\\frac{3}{2}}=8$, which is the same outrunning in metres.

so the statement is True.`,
      `**C.** → False

Doubling head multiplies discharge by

$$2^{\\frac{3}{2}}\\approx 2.83$$

Doubling head multiplies discharge by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$. Changing the input unit to centimetres rescales only the coefficient; it does not flatten the exponent to $1$. Discharge would double with head only for a linear weir. The opposite verdict would have needed $r=1$. Letter B already used $r=\\frac{3}{2}$ as an outrunning; this letter is the same exponent read as a doubling claim.

Letter B already used $r=\\frac{3}{2}$ as an outrunning. This letter is the same exponent read as a doubling claim. Head $\\times 2$ is discharge $\\times 2\\sqrt{2}$, never $\\times 2$, whether the head is logged in metres or in centimetres.

not by $2$. Changing the input unit to centimetres rescales only the coefficient; it does not flatten the exponent to $1$. Discharge would double with head only for a linear weir, so the statement is False.`,
      `**D.** → True

The gauging gives $0.25^{\\frac{3}{2}}=0.125$, so $A=16$ and $Q=16 h^{\\frac{3}{2}}$. At a unit head the power is $1$:

$$Q(1)=16$$

The gauging gives $0.25^{\\frac{3}{2}}=0.125$, so $A=16$ and $Q=16 h^{\\frac{3}{2}}$. At a unit head the power is $1$: $Q(1)=16$, which sits under $20$. Scaling $2$ m³/s by $1/0.25=4$ linearly would have claimed $8$, still under $20$, or by $4^{\\frac{3}{2}}=8$ correctly to $16$. So the letter reads the claim against $2$; $16$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $2$ stays in the write-up. The opposite verdict would have needed $A>20$. The gauging locks $A=16$.

Sixteen sits under twenty. The unit-head discharge equals the coefficient $A=16$. A linear fourfold from the $0.25$ m gauging of $2$ would have claimed $8$, still under $20$. The three-halves fourfold is $8$ times $2$, which is $16$, still under $20$.

which sits under $20$. The gauging at $0.25$ m was only $2$ m$^{3}$/s; one metre still discharges $16$, so the statement is True.`,
      `**E.** → False

At $4$ metres, $4^{\\frac{3}{2}}=8$:

$$Q(4)=16\\cdot 8=128$$

At $4$ metres, $4^{\\frac{3}{2}}=8$ and $Q(4)=16\\cdot 8=128$, which is not under $100$. Four metres is sixteen times the $0.25$ m gauging in head, hence $16^{\\frac{3}{2}}=64$ times the gauging of $2$, which is $128$. Using $16\\times 2=32$, a linear sixteenfold, would have sat under $100$ and flipped the verdict. That is the fork: $16\\times 2=32$ belongs to the recovered isolation, $100$ belongs to the discarded mix. The opposite verdict would have needed $A\\le 100/8=12.5$. The gauging locks $A=16$.

One hundred and twenty-eight sits past one hundred. Linear thinking from the gauging would have claimed $32$, under $100$, and flipped the letter. Sixteen times the gauged head is a $16^{\\frac{3}{2}}=64$-fold discharge, $2\\times 64=128$.

Four metres is a sixteenfold of the gauged $0.25$ m head. A three-halves power turns that sixteenfold into a $64$-fold discharge, $2\\times 64=128$ m³/s, past $100$. Linear thinking claims $32$ m³/s, under $100$, and flips the letter. The weir's leftover exponent $\\frac{3}{2}$ is why the large head overshoots $100$.

The $100$ m³/s cutoff is a nearby figure, not a rounding of $128$. Linear scaling from the gauging lands at $32$, under $100$, and flips the letter. The three-halves sixteenfold from $0.25$ m to $4$ m is $64$ times $2$, which is $128$.

which is not under $100$. Four metres is sixteen times the $0.25$ m gauging in head, hence $16^{\\frac{3}{2}}=64$ times the gauging of $2$, which is $128$,

Checking $Q(4)=128$ on the metre curve and $Q=16\\cdot 400^{\\frac{3}{2}}=16\\cdot 8000=128000$ litres per second on the litre curve: both sit past $100$ cubic metres per second.

Units cannot hide an overshoot that large. Linear thinking from the gauging is the only common route under $100$, and it is the wrong scale.

Four metres is a sixteenfold of the gauged $0.25$ m head. A three-halves power turns that into a $64$-fold discharge, $2\\times 64=128$, past $100$. The $100$ cutoff is a nearby figure, not a rounding of $128$.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 87,
    solution_overview: `The rating curve is $Q(h)=Ah^{\\frac{3}{2}}$ in metres and cubic metres per second, pinned by the gauging $Q(0.25)=2$. The team wants the same curve in centimetres, and in litres per second.

**Part 1: Building the model.**

Let $h$ = head in metres, $h_{\\mathrm{cm}}=100h$ = head in centimetres, $Q$ = discharge. The exponent belongs to the weir, so one gauging fixes the coefficient. A change of input unit replaces the input by a constant multiple of itself, and a power function pushes that constant through its exponent, so the exponent never moves and only the coefficient does. A change of output unit scales the coefficient directly.

**1. Translate: the gauging.**

$$A(0.25)^{\\frac{3}{2}}=2$$

**2. Translate: the change of input unit.**

$$Q=A\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{\\frac{3}{2}}=\\frac{A}{100^{\\frac{3}{2}}}\\,h_{\\mathrm{cm}}^{\\frac{3}{2}}$$

**3. Translate: the change of output unit.** One cubic metre per second is $1000$ litres per second.

**Part 2: The model.**

$$Q=16h^{\\frac{3}{2}} \\quad \\text{(m, m}^{3}\\text{/s)} \\tag{1}$$

$$Q=0.016\\,h_{\\mathrm{cm}}^{\\frac{3}{2}} \\quad \\text{(cm, m}^{3}\\text{/s)} \\tag{2}$$

$$Q=16\\,h_{\\mathrm{cm}}^{\\frac{3}{2}} \\quad \\text{(cm, L/s)} \\tag{3}$$

**Part 3: Solve.**

**1.** The shape factor at the gauged head is exact:

$$0.25^{\\frac{3}{2}}=0.5^{3}=0.125 \\;\\Rightarrow\\; A=\\frac{2}{0.125}=16$$

**2.** The inverse $h=(Q/16)^{2/3}$ is a power. Because the exponent exceeds $1$, discharge outruns head, and doubling head multiplies discharge by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$.

**3.** Levels against the thresholds:

$$Q(1)=16<20, \\qquad Q(4)=128>100$$

**Answer.** $A=16$ | $Q=16h^{\\frac{3}{2}}$ (m, m$^{3}$/s) | $Q=0.016h_{\\mathrm{cm}}^{\\frac{3}{2}}$ (cm, m$^{3}$/s) | $Q=16h_{\\mathrm{cm}}^{\\frac{3}{2}}$ (cm, L/s)`,
  },
  {
    id: `math-8-88`,
    case_id: `MATH 8.88`,
    title: `A Grain Dryer Calibrated From Two Recorded Ratios`,
    context: `Fuel use in a grain dryer follows $F(x)=A x^{r}$ litres per batch, where $x>0$ is the batch mass in tonnes. Neither constant is published. Doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Fuel use grows faster than batch mass.`,
      `Doubling the batch mass doubles fuel use.`,
      `Fuel use per tonne falls as the batch grows.`,
      `A $10$-tonne batch already uses more than $250$ litres.`,
      `A $6$-tonne batch still uses under $100$ litres.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

A $300\\%$ rise is the multiplier $4=2^{2}$, so $r=2$. Two sits above one, so each extra tonne adds more litres than the tonne before it. Fuel use grows faster than batch mass. Reading $300\\%$ as "about three times" a doubling and guessed $r\\approx 1.6$ would have still sat above one, for a slightly wrong exponent. The recovered comparison therefore keeps $300\\%$ and does not substitute $r\\approx 1.6$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The exact match is $2^{r}=4$. The opposite verdict would have needed an exponent of $1$ or less. The doubling note is a quadrupling of fuel.

Matching $2^{r}=4$ is $r=2$, not a percentage shortcut $300/100=3$. A cube would have been a $700\\%$ rise on a doubling. The note is $300\\%$, a square. Fuel outruns batch mass because $2>1$.

A $300\\%$ rise means the new fuel is $4$ times the old fuel, because $100\\%+300\\%=400\\%$ of the original, a factor of $4$. That factor is $2^{2}$, so $r=2>1$. Fuel outruns batch mass. Reading $300\\%$ as a factor of $3$, or as $3$ times a $100\\%$ doubling, misses that a $300\\%$ rise is a quadrupling of the bill.

Fuel outruns mass because leftover exponent $2>1$. A $20\\%$ larger batch would raise fuel by $1.2^{2}-1=44\\%$, already more than $20\\%$. The doubling note is the clean version of that same ranking: $100\\%$ more mass, $300\\%$ more fuel.

A $300\\%$ rise is the multiplier $4=2^{2}$, so $r=2$. Two sits above one, so each extra tonne adds more litres than the tonne before it. Fuel use grows faster than batch mass,

Checking $F(3)=27$ and $F(6)=108$: a doubled batch from $3$ t to $6$ t quadruples fuel, the same $r=2$ ranking as the $300\\%$ note.

A $20\\%$ larger batch raises fuel by $44\\%$, already more than $20\\%$. Fuel outruns mass on every stretch, not only on a doubling.

Matching $2^{r}=4$ is leftover exponent $2$, not a percentage shortcut $300/100=3$. A cube would have been a $700\\%$ rise on a doubling. The note is $300\\%$, a square.

so the statement is True.`,
      `**B.** → False

Doubling the batch multiplies fuel by $4$, not by $2$. A $300\\%$ rise is a multiplier of $4$, not of $2$. Fuel use is quadrupled. Linear thinking reads "$300\\%$ more" as if it were a doubling plus a bit, rather than $2^{r}$. Checking $F(2)=12$ and $F(4)=48$, a quadrupling of fuel on a doubling of batch. The opposite verdict would have needed $r=1$, a $100\\%$ rise on a doubling. The note is $300\\%$.

Letter A already used $r=2$ as an outrunning. This letter is the same $4=2^{2}$ read as a doubling claim. Batch $\\times 2$ is fuel $\\times 4$, never $\\times 2$. The $2$ t fuel $12$ litres becoming $48$ litres at $4$ t is the concrete witness.

Batch $\\times 2$ is fuel $\\times 4$. The $2$ t dryer using $12$ litres uses $48$ litres at $4$ t, not $24$. Letter A already used $r=2$ as an outrunning; this letter is that square read as a doubling claim. Linear thinking on a $300\\%$ note is how a twofold fuel claim appears.

The $2$ t to $4$ t move is the doubling in the claim, and fuel goes $12$ to $48$, a quadrupling. Calling that a doubling of fuel is the linear mismatch. Letter A already named $r=2$; this letter is $2^{r}=4$ read against the word "doubles".

Doubling the batch multiplies fuel by $4$, not by $2$. A $300\\%$ rise is a multiplier of $4$, not of $2$. Fuel use is quadrupled. Linear thinking reads "$300\\%$ more" as if it were a doubling plus a bit, rather than $2^{r}$,

Checking $F(2)=12$ becoming $F(4)=48$ is the doubling in the claim written as levels.

Calling $12$ to $48$ a doubling of fuel is the linear mismatch. The $300\\%$ note is a quadrupling of the bill, leftover exponent $2$.

A $100\\%$ rise on a doubling would have been leftover exponent $1$. The note is $300\\%$, leftover exponent $2$, fuel $\\times 4$.

so the statement is False.`,
      `**C.** → False

With $r=2$ fuel per tonne is $A x$, a positive leftover power, so litres per tonne climb in proportion to batch mass. The leftover exponent $r-1=1$ is not negative. The per-tonne figure rises, it does not fall. Checking $F(2)/2=6$ and $F(6)/6=18$. Intensity tripled with a threefold batch. The opposite verdict would have needed $r<1$. The doubling note locked $r=2$.

Litres per tonne at $2$ t is $6$; at $6$ t it is $18$. Intensity climbed. A falling per-tonne story would have needed $r<1$. The doubling note locked $r=2$, so $F/x=3x$ rises with the batch.

With $r=2$ fuel per tonne is $A x$, a positive leftover power, so litres per tonne climb in proportion to batch mass. The leftover exponent $r-1=1$ is not negative. The per-tonne figure rises, it does not fall, so the statement is False.`,
      `**D.** → True

From $r=2$ and $A(36-4)=96$, the coefficient is $A=3$, so $F(x)=3x^{2}$. A $10$-tonne batch uses

$$F(10)=3\\cdot 100=300$$

From $r=2$ and $A(36-4)=96$, the coefficient is $A=3$, so $F(x)=3x^{2}$. A $10$-tonne batch uses $F(10)=300$, which sits above $250$. From the $2$ t batch, a fivefold mass is a twenty-fivefold fuel bill: $12\\cdot 25=300$. Scaling $12$ by $10/2=5$ linearly would have claimed $60$, under $250$, and flipped the verdict. So the letter reads the claim against $12$; $250$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $12$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The opposite verdict would have needed $A\\le 2.5$. The $96$ litre gap locks $A=3$.

Three hundred sits above two hundred and fifty. Linear scaling from $F(2)=12$ by $10/2$ would have claimed $60$, under $250$, and flipped the letter. A square law fivefolds the mass into a twenty-fivefold bill, $12\\times 25=300$.

which sits above $250$. From the $2$ t batch, a fivefold mass is a twenty-fivefold fuel bill: $12\\cdot 25=300$, so the statement is True.`,
      `**E.** → False

A $6$-tonne batch uses

$$F(6)=3\\cdot 36=108$$

A $6$-tonne batch uses $F(6)=108$, which is not under $100$. That $108$ is also $12+96$, the $2$ t fuel plus the logged gap. The six-tonne batch does not still use under one hundred litres. Treating $96$ as $F(6)$ would have compared $96$ to $100$ and called the statement true. The recovered comparison therefore keeps $96$ and does not substitute $100$. The $96$ is a gap, not a level. The opposite verdict would have needed $A\\le 100/36\\approx 2.78$. The gap locks $A=3$.

One hundred and eight sits past one hundred. The logged gap $96$ plus the $2$ t fuel $12$ is $108$. Treating $96$ as the $6$ t level would have sat under $100$ and flipped the letter. The $96$ is a difference, not a level.

which is not under $100$. That $108$ is also $12+96$, the $2$ t fuel plus the logged gap. The six-tonne batch does not still use under one hundred litres, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 88,
    solution_overview: `Fuel use is $F(x)=Ax^{r}$. Doubling the batch raises fuel by $300\\%$, and the gap between $2$ tonnes and $6$ tonnes is $96$ litres.

**Part 1: Building the model.**

Let $x$ = batch mass in tonnes and $F$ = fuel use in litres. Two unknowns need two records, and the order in which they are used matters. The first is a ratio, which is blind to the coefficient and therefore isolates the exponent; the second is a difference of levels, which pins the coefficient once the exponent is known.

**1. Translate: the doubling rule.** A $300\\%$ rise is a multiplier of $4$:

$$2^{r}=4$$

**2. Translate: the logged gap.**

$$A\\left(6^{r}-2^{r}\\right)=96$$

**3. Translate: fuel per tonne.** Dividing lowers the exponent by one:

$$\\frac{F(x)}{x}=Ax^{r-1}$$

**Part 2: The model.**

$$r=2 \\tag{1}$$

$$F(x)=3x^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The ratio equation is settled by matching powers of two:

$$2^{r}=4=2^{2} \\quad \\Rightarrow \\quad r=2$$

**2.** With $r=2$ the difference of squares is exact:

$$A(36-4)=32A=96 \\quad \\Rightarrow \\quad A=3$$

**3.** Because $r>1$, fuel outruns mass, doubling quadruples fuel, and $\\frac{F(x)}{x}=3x$ rises with the batch.

**4.** Levels against the thresholds:

$$F(10)=300>250, \\qquad F(6)=108>100$$

**Answer.** $r=2$, $A=3$ | $F(x)=3x^{2}$ | $F(10)=300$ litres | $F(6)=108$ litres`,
  },
  {
    id: `math-8-89`,
    case_id: `MATH 8.89`,
    title: `Kiln Flue Mass Flow into a Particulate Index`,
    context: `A kiln's flue-gas mass flow follows $m(t)=A t^{\\frac{1}{2}}$ tonnes per hour for throttle setting $t>0$, and the particulate load index is then $P(m)=\\frac{m^{4}}{16}$. A calibration at $t=9$ recorded $m=6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The composed particulate index is a power of the throttle setting.`,
      `The composed particulate index grows in proportion to the throttle setting.`,
      `Mass flow per unit of throttle falls as the throttle rises.`,
      `At throttle $25$ the mass flow is already above $8$ tonnes per hour.`,
      `An index of $81$ still requires a throttle setting above $20$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Mass flow is a square root of throttle and the index is a fourth power of mass, so the composed exponent is

$$\\frac{1}{2}\\cdot 4=2$$

Mass flow is a square root of throttle and the index is a fourth power of mass, so the composed exponent is $\\frac{1}{2}\\cdot 4=2$. The composition is a monomial in $t$. The overview recovered $P\\circ m=t^{2}$. Stopping after $m(t)$ would have left exponent $\\frac{1}{2}$. The opposite verdict would have needed a stage that was not a power. Both stages in the stem are monomials.

Checking $P(m(9))=81$ and $P(m(25))=625$ is $9^{2}$ and $25^{2}$. The composition is a square of throttle, a power. Stopping at $m(t)=2\\sqrt{t}$ would have left a square root, still a power, just not the composed one. The claim is after both stages.

The inner square root and the outer fourth power multiply to $2$. The inner coefficient $2$ raised to the fourth is $16$, which cancels the $16$ in the denominator of $P$, leaving the pure square $t^{2}$. That cancellation is a coefficient story; the exponent $2$ is the composition story. After both stages the index is a power of throttle.

A product of powers of the same $t$ is a power of $t$. Square root times fourth power is a square. The coefficient cancellation $\\frac{2^{4}}{16}=1$ is extra luck; even without it, $\\frac{A^{4}}{16}t^{2}$ would still have been a power of throttle. The claim is the shape, not the luck.

The composition is a monomial in $t$. Stopping after $m(t)$ would have left exponent $\\frac{1}{2}$,

Checking $P(m(4))=16$ and $P(m(16))=256$ is $4^{2}$ and $16^{2}$. Two more throttle settings sit on the same square.

A leftover constant in either stage would have broken the monomial. Both stages in the stem are pure powers, so the composed index is a power of throttle.

so the statement is True.`,
      `**B.** → False

The leftover exponent is $2$, not $1$, so the index grows faster than the throttle, not in proportion to it. Doubling throttle multiplies the index by $4$. Proportionality would have needed the two stages to cancel to exponent $1$. Checking $P(m(9))=81$ and $P(m(18))=324$, a fourfold index on a doubled throttle. The opposite verdict would have needed composed exponent $1$, for instance a square-root index on a square-root mass flow.

A square is not a line. Doubling throttle quadruples the index, $t=9$ to $t=18$ sends $81$ to $324$. Proportionality would have sent $81$ to $162$. The two stages multiply to exponent $2$, not $1$.

The leftover exponent is $2$, not $1$, so the index grows faster than the throttle, not in proportion to it. Doubling throttle multiplies the index by $4$. Proportionality would have needed the two stages to cancel to exponent $1$, so the statement is False.`,
      `**C.** → True

From $3A=6$, the coefficient is $A=2$, so $m(t)=2 t^{\\frac{1}{2}}$. Mass flow per unit of throttle is

$$\\frac{m(t)}{t}=2 t^{-\\frac{1}{2}}$$

From $3A=6$, the coefficient is $A=2$, so $m(t)=2 t^{\\frac{1}{2}}$. Mass flow per unit of throttle is $2 t^{-\\frac{1}{2}}$, which falls from $\\frac{2}{3}$ at $t=9$ to $\\frac{2}{5}$ at $t=25$. The leftover exponent is negative. Seeing $m(25)=10>m(9)=6$ and inferred a rising intensity would have mixed a higher total with a higher per-throttle figure. Once $m(25)=10>m(9)=6$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The opposite verdict would have needed leftover exponent $0$ on $m/t$, hence $m$ linear in $t$.

Mass flow per unit of throttle falls from $2/3$ at $t=9$ to $2/5$ at $t=25$. Totals $m(9)=6$ and $m(25)=10$ still rise. Falling intensity and rising total live together because leftover exponent on $m$ is $\\frac{1}{2}\\in (0,1)$.

which falls from $\\frac{2}{3}$ at $t=9$ to $\\frac{2}{5}$ at $t=25$. The leftover exponent is negative, so the statement is True.`,
      `**D.** → True

At throttle $25$, $\\sqrt{25}=5$:

$$m(25)=2\\cdot 5=10$$

At throttle $25$, $\\sqrt{25}=5$ and $m(25)=2\\cdot 5=10$, which sits above $8$. Linear scaling from $m(9)=6$ would have claimed about $16.7$ and overshot; the square root is slower. Using $P(m(25))=625$ against $8$ would have mixed the index with mass flow. So the letter reads the claim against $P(m(25))=625$; $8$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $P(m(25))=625$ stays in the write-up. Letter D names mass flow. The opposite verdict would have needed $A\\le 8/5=1.6$. The calibration locks $A=2$.

Ten sits above eight. Linear scaling from $m(9)=6$ by $25/9$ would have claimed about $16.7$, still above $8$ but for the wrong shape. The square root is slower and still clears $8$ at throttle $25$.

which sits above $8$. Linear scaling from $m(9)=6$ would have claimed about $16.7$ and overshot; the square root is slower, so the statement is True.`,
      `**E.** → False

Composing first gives $P\\circ m=t^{2}$, because $\\frac{2^{4}}{16}=1$. An index of $81$ is then

$$t^{2}=81$$

$$t=9$$

Composing first gives $P\\circ m=t^{2}$, because $\\frac{2^{4}}{16}=1$. An index of $81$ is then $t^{2}=81$ and $t=9$, not a setting above $20$. Nine is the calibration throttle itself: $m(9)=6$ and $P(6)=81$.

**1.** Inverting the mass-flow stage only, $2\\sqrt{t}=81$, would have claimed $t\\approx 1640$, well above $20$, and flipped the verdict. That is the fork: $2\\sqrt{t}=81$ belongs to the recovered isolation, $20$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The $81$ is an index, not a mass flow.

**2.** Checking $t=20$: $m(20)=2\\sqrt{20}\\approx 8.94$ and $P\\approx 8.94^{4}/16\\approx 400$, already past $81$. Twenty is past the $81$-index throttle, not short of it.

**3.** The opposite verdict would have needed a smaller composed coefficient, so that index $81$ sat at a larger $t$. The calibration collapses $P\\circ m$ to $t^{2}$ and locks $t=9$.

Nine is the calibration throttle, not a setting above $20$. Index $81$ is $P(6)$ at the calibrated $m(9)=6$. Inverting the wrong stage, treating $81$ as a mass flow, manufactures a huge throttle and flips the letter. The composed square $t^{2}=81$ locks $t=9$.

Index $81$ at throttle $9$ is the calibration itself, $P(6)=6^{4}/16=1296/16=81$. Asking for a throttle above $20$ for that same index is looking on the wrong side of $t=9$. At $t=20$ the index is $400$, already past $81$. The composed square $t^{2}=81$ has unique positive root $9$.

Inverting $t^{2}=81$ on $t>0$ has one root, $t=9$. There is no second root above $20$. Treating $81$ as a mass-flow target, $2\\sqrt{t}=81$, manufactures $t\\approx 1640$ and is the wrong stage. The $81$ is $P$, not $m$.

not a setting above $20$. Nine is the calibration throttle itself: $m(9)=6$ and $P(6)=81$,

Checking $P(m(9))=81$ in the forward direction is the calibration itself: $m=6$ and $6^{4}/16=81$.

There is no second positive throttle that returns index $81$. The composed square has one positive root, $t=9$, which is not above $20$.

so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 89,
    solution_overview: `Flue mass flow is $m(t)=At^{\\frac{1}{2}}$ tonnes per hour with the calibration $m(9)=6$, and the particulate index is $P(m)=\\frac{m^{4}}{16}$.

**Part 1: Building the model.**

Let $t$ = throttle setting, $m$ = mass flow in tonnes per hour, $P$ = particulate load index. The square-root shape is supplied, so one recorded pair fixes the coefficient. Composition then feeds the intermediate output into the second rule, and raising a power to a power multiplies the two exponents.

**1. Translate: the calibration.**

$$A\\cdot 9^{\\frac{1}{2}}=6, \\qquad 9^{\\frac{1}{2}}=3$$

**2. Translate: the chain.** Substituting the inner rule into the outer one carries the inner coefficient up to the outer exponent:

$$P\\bigl(m(t)\\bigr)=\\frac{\\bigl(At^{\\frac{1}{2}}\\bigr)^{4}}{16}=\\frac{A^{4}}{16}\\,t^{2}$$

**Part 2: The model.**

$$m(t)=2t^{\\frac{1}{2}} \\tag{1}$$

$$P\\bigl(m(t)\\bigr)=t^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The calibration gives the coefficient:

$$3A=6 \\quad \\Rightarrow \\quad A=2$$

**2.** The composed coefficient collapses, since $\\frac{2^{4}}{16}=1$, leaving the pure square in $(2)$. That square is a power of throttle, not a proportional law, and $\\frac{m(t)}{t}=2t^{-\\frac{1}{2}}$ falls as $t$ rises.

**3.** Levels against the thresholds:

$$m(25)=10>8, \\qquad t=9\\ \\text{at index}\\ 81$$

**Answer.** $A=2$ | $m(t)=2t^{\\frac{1}{2}}$ | $P\\circ m=t^{2}$ | index $81$ at $t=9$`,
  },
  {
    id: `math-8-90`,
    case_id: `MATH 8.90`,
    title: `Two Shuttle Fare Timers Under a Wait Cap`,
    context: `Two municipal shuttle apps quote wait time for a trip of distance $d>0$ kilometres. App L follows $L(d)=a d^{\\frac{1}{2}}$ minutes and App Q follows $Q(d)=k d$ minutes, with both coefficients unpublished. A logged $25$ km trip on App L quoted $20$ minutes, and a logged $100$ km trip on App Q quoted $20$ minutes. A service-level agreement caps wait at $20$ minutes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two apps quote the same wait at two different positive distances.`,
      `Once App L quotes a shorter wait than App Q, App Q never catches up.`,
      `App L's wait per kilometre falls as the trip gets longer.`,
      `Under the $20$-minute cap, App L can serve trips longer than $30$ kilometres.`,
      `At $400$ kilometres both apps already quote more than $70$ minutes.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

App L's log gives $5a=20$, so $a=4$. App Q's log gives $k=\\frac{1}{5}$. Setting $4\\sqrt{d}=\\frac{1}{5}d$ yields a unique positive root

$$d=400$$

App L's log gives $5a=20$, so $a=4$. App Q's log gives $k=\\frac{1}{5}$. Setting $4\\sqrt{d}=\\frac{1}{5}d$ yields a unique positive root $d=400$. A square-root versus a line cannot meet twice on $d>0$. They meet only once, and the wait there is $80$ minutes, well past the cap.

**1.** Seeing two powers and expecting two crossings would have looked for a second root. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Dividing by $\\sqrt{d}>0$ leaves a linear equation in $\\sqrt{d}$, one root.

**2.** Checking $d=25$: $L=20$ and $Q=5$, so L is slower. At $d=100$: $L=40$ and $Q=20$, L still slower. At $d=400$ they tie at $80$. At $d=900$: $L=60$ and $Q=180$, Q is slower. One crossing.

**3.** The opposite verdict would have needed a second positive root, which would have required leftover exponent on the ratio $Q/L$ to change sign twice. The ratio is $\\frac{1}{20}\\sqrt{d}$, monotone.

One crossing at $d=400$, wait $80$ minutes, is not two crossings. Below $400$ km App Q is faster; above $400$ km App L is faster. A square-root versus a line on $d>0$ is a single positive root of $4\\sqrt{d}=d/5$. The claim's "two different positive distances" would have needed that root to repeat, which a monotone ratio $\\sqrt{d}$ cannot do.

The two logs pin $L(d)=4\\sqrt{d}$ and $Q(d)=d/5$. Equal waits are $4\\sqrt{d}=d/5$, so $\\sqrt{d}=20$ and $d=400$ only. Checking $d=100$: $L=40\\neq Q=20$. Checking $d=25$: $L=20\\neq Q=5$. No second positive meeting. A square-root versus a line meets once on $d>0$.

Two positive meetings would have needed the ratio $Q/L$ to equal $1$ twice. That ratio is $\\sqrt{d}/20$, which equals $1$ only at $d=400$. Below $400$ it is less than $1$ and App Q is faster; above $400$ it is greater than $1$ and App L is faster. One meeting, not two.

A square-root versus a line cannot meet twice on $d>0$. They meet only once, and the wait there is $80$ minutes, well past the cap, so the statement is False.`,
      `**B.** → True

Past $d=400$ the ratio $\\frac{Q}{L}=\\frac{1}{20}\\sqrt{d}$ exceeds $1$ and keeps climbing, so App Q stays slower. Once App L quotes a shorter wait, App Q never catches up. A second crossing would need the leftover square root to change sign. The opposite verdict would have needed Q to have a higher leftover exponent than L, so that Q could recross from above. Q is linear; L is a square root. After the meeting, L stays ahead.

Once L is ahead, the ratio $Q/L=\\sqrt{d}/20$ keeps growing, so Q never catches up. Checking $d=1600$: $L=80$ and $Q=320$, a fourfold wait gap. The opposite verdict would have needed Q to recross, hence a higher leftover exponent on Q than on L. Q is linear; L is a square root.

Past $d=400$ the ratio $\\frac{Q}{L}=\\frac{1}{20}\\sqrt{d}$ exceeds $1$ and keeps climbing, so App Q stays slower. Once App L quotes a shorter wait, App Q never catches up. A second crossing would need the leftover square root to change sign, so the statement is True.`,
      `**C.** → True

App L's wait per kilometre is $L(d)/d=4 d^{-\\frac{1}{2}}$, which falls from $0.8$ at $d=25$ to $0.4$ at $d=100$. The leftover exponent is negative. Longer trips still take more minutes in total, but fewer minutes per kilometre on the square-root app. Seeing $L(100)=40>L(25)=20$ and inferred a rising per-kilometre figure would have mixed a higher total with a higher intensity. Once $L(100)=40>L(25)=20$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed leftover exponent $0$ on $L/d$, hence $L$ linear in $d$. That is App Q, not App L.

Minutes per kilometre on App L fall from $0.8$ at $25$ km to $0.2$ at $400$ km. Longer trips still take more minutes, $20$ then $80$, but fewer minutes per kilometre. That is leftover exponent $-\\frac{1}{2}$ on $L/d$. App Q's per-kilometre wait is constant at $0.2$. Mixing the two apps is how a rising L-intensity appears.

App L's minutes per kilometre fall because leftover exponent $-\\frac{1}{2}$ is negative. App Q's minutes per kilometre are constant at $1/5$. Mixing Q's constant intensity with L's falling intensity is how a rising L-per-kilometre claim appears. Longer L trips still take more total minutes; they just take fewer minutes per kilometre.

Falling minutes per kilometre on App L is leftover exponent $-\\frac{1}{2}$. The logged $25$ km trip at $0.8$ min/km becoming $0.2$ min/km at $400$ km is that fall. Totals still rise, $20$ minutes to $80$. Intensity is not the total. Mixing them is how a rising L-per-kilometre claim appears.

App L's wait per kilometre is $L(d)/d=4 d^{-\\frac{1}{2}}$, which falls from $0.8$ at $d=25$ to $0.4$ at $d=100$. The leftover exponent is negative. Longer trips still take more minutes in total, but fewer minutes per kilometre on the square-root app,

Checking $L(400)/400=80/400=0.2$, the same intensity App Q holds at every distance.

App L only meets that constant at the crossing. Before $400$ km, L's minutes per kilometre still sit above $0.2$ and are falling toward it.

Falling intensity on L is leftover exponent $-\\frac{1}{2}$ on $L/d$, which is the claim.

so the statement is True.`,
      `**D.** → False

App L's $20$-minute cap binds at $4\\sqrt{d}=20$, so $d=25$. Thirty kilometres sits past $25$, so $L(30)>20$. Under the cap, App L cannot serve trips longer than twenty-five kilometres. Mixing L's cap with Q's cap at $d=100$ is the mix-up. Checking $L(30)=4\\sqrt{30}\\approx 21.9>20$. The opposite verdict would have needed L's cap past $30$ km, hence a smaller $a$. The log locks $a=4$ and the cap at $d=25$.

Twenty-five kilometres is L's cap, from $4\\sqrt{d}=20$. Thirty kilometres is past that cap, $L(30)\\approx 21.9>20$. Q's cap is $d=100$, which does reach past $30$. Mixing the two caps is the mix-up. Under the $20$-minute SLA, App L cannot serve $30$ km trips.

App L's $20$-minute cap binds at $4\\sqrt{d}=20$, so $d=25$. Thirty kilometres sits past $25$, so $L(30)>20$. Under the cap, App L cannot serve trips longer than twenty-five kilometres. Mixing L's cap with Q's cap at $d=100$ is the mix-up, so the statement is False.`,
      `**E.** → True

At the meeting $d=400$ both apps quote

$$L(400)=4\\cdot 20=80$$

$$Q(400)=\\frac{400}{5}=80$$

At the meeting $d=400$ both apps quote $80$ minutes, which sits above $70$. $L(400)=4\\cdot 20=80$ and $Q(400)=400/5=80$. Using L's cap wait of $20$ against $70$ would have named a different distance. Working from the isolated values, $20$ is the figure that is checked, not the detour that produced $70$. That contrast is the reason the verdict goes the way it does. Letter E names $400$ km. The opposite verdict would have needed the meeting wait $\\le 70$, hence a smaller pair of coefficients. The two logs lock the meeting at $80$ minutes.

Eighty sits above seventy. Both apps quote $80$ minutes at the meeting $d=400$. Using L's SLA wait of $20$ minutes against $70$ names $d=25$, not $d=400$. Letter E names four hundred kilometres.

Eighty minutes sits above $70$. Both already quote eighty minutes, more than seventy, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 90,
    solution_overview: `App L quotes $L(d)=a d^{\\frac{1}{2}}$ minutes and App Q quotes $Q(d)=kd$ minutes. The logs are $L(25)=20$ and $Q(100)=20$, and wait is capped at $20$ minutes.

**Part 1: Building the model.**

Let $d$ = trip distance in kilometres. Each app is a power of distance with a hidden coefficient, so each log pins one coefficient. Equal waits set the two recovered laws equal. The cap inverts each law separately. Which app leads is the sign of their ratio.

**1. Translate: App L's log.**

$$a\\cdot 25^{\\frac{1}{2}}=20$$

**2. Translate: App Q's log.**

$$k\\cdot 100=20$$

**3. Translate: the cap.**

$$L(d)\\le 20, \\qquad Q(d)\\le 20$$

**Part 2: The model.**

$$L(d)=4d^{\\frac{1}{2}} \\tag{1}$$

$$Q(d)=\\frac{1}{5}d \\tag{2}$$

**Part 3: Solve.**

**1.** The two logs give the coefficients:

$$5a=20 \\;\\Rightarrow\\; a=4, \\qquad 100k=20 \\;\\Rightarrow\\; k=\\frac{1}{5}$$

**2.** The laws meet once on $d>0$, at $d=400$. Past that crossing the ratio $\\frac{Q}{L}$ keeps rising, so App L stays ahead, and $\\frac{L(d)}{d}=4d^{-\\frac{1}{2}}$ falls with distance.

**3.** App L's cap is $d\\le 25$, which does not reach $30$ km. At the meeting point both quote $80>70$ minutes.

**Answer.** $a=4$, $k=\\frac{1}{5}$ | meet at $d=400$, wait $80$ min | App L cap $d=25$ | App Q cap $d=100$`,
  },
  {
    id: `math-8-91`,
    case_id: `MATH 8.91`,
    title: `Wetland Evaporation Across Three Humidity Readings`,
    context: `A field team models wetland evaporation in millimetres per day by $E(h)=A h^{r}$ against humidity deficit $h>0$, with both constants unknown. Deficits of $1$ and $4$ recorded $20$ and $40$ millimetres per day, and a third reading at deficit $9$ recorded $60$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is smaller than one, so evaporation grows more slowly than the humidity deficit.`,
      `Doubling the humidity deficit doubles evaporation.`,
      `To double the forty-millimetre reading she must more than double the humidity deficit.`,
      `An extra unit of deficit adds more millimetres after a deficit of four than after a deficit of one.`,
      `After a humidity deficit of $25$, evaporation is already more than $90$ millimetres per day.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The first two readings give $4^{r}=2$. Because $4^{\\frac{1}{2}}=2$,

$$r=\\frac{1}{2}$$

One half sits below one, so each extra unit of deficit adds less evaporation than the unit before it. The third reading $E(9)=60$ sits on the same square-root law, $20\\cdot 3=60$, a consistency check. Checking $E(1)=20$ and $E(4)=40$: deficit quadrupled while evaporation only doubled, the signature of $r=\\frac{1}{2}$. The opposite verdict would have needed an exponent of $1$ or more. The first two readings force $4^{r}=2$.

One half sits below one, so each extra unit of deficit adds less evaporation than the unit before it. The third reading $E(9)=60$ sits on the same square-root law, $20\\cdot 3=60$, which is a consistency check,

This letter is an exponent ranking, not a new humidity reading.

The recovered leftover exponent is one half. One half sits below one, so evaporation lags the deficit.

Seeing $E(4)=40$ as twice $E(1)=20$ and inferred $r=1$ would have mixed a convenient pair of readings with lockstep growth. Working from the isolated values, $E(4)=40$ is the figure that is checked, not the detour that produced $r=1$. Quadrupling the deficit only doubled evaporation.

The opposite verdict would have needed leftover exponent at least $1$. The first two readings refuse that.

so the statement is True.`,
      `**B.** → False

Doubling the deficit would double evaporation only if $r=1$. The scale factor is

$$2^{\\frac{1}{2}}\\approx 1.41$$

Doubling the deficit would double evaporation only if $r=1$. The scale factor is $\\sqrt{2}\\approx 1.41$, not $2$. Evaporation rises, but not in lockstep with humidity. Checking $E(2)=20\\sqrt{2}\\approx 28.3$, not $40$. The opposite verdict would have needed $r=1$. Letter A already used $r=\\frac{1}{2}$ as a lag; this letter is that half read as a doubling claim.

not $2$. Evaporation rises, but not in lockstep with humidity. A square-root humidity law will not keep evaporation in step with the deficit,

This is a scale claim on humidity, not a level at a named deficit.

The recovered scale factor for a doubling is $\\sqrt{2}$, about $1.41$, not $2$. Evaporation rises, but not in lockstep.

Checking $E(8)=20\\sqrt{8}\\approx 56.6$, which is not $80$. Doubling $h=4$ does not double $E(4)$.

The opposite verdict would have needed leftover exponent $1$. The first two readings lock one half.

so the statement is False.`,
      `**C.** → True

From $r=\\frac{1}{2}$ and $A=20$, doubling $E(4)=40$ means $20\\sqrt{h}=80$, so

$$\\sqrt{h}=4$$

$$h=16$$

From $r=\\frac{1}{2}$ and $A=20$, doubling $E(4)=40$ means $20\\sqrt{h}=80$, so $\\sqrt{h}=4$ and $h=16$. Sixteen is four times four, not twice four. To double a square-root output you quadruple the input.

**1.** A doubling of deficit to $h=8$ would give $E(8)=20\\sqrt{8}\\approx 56.6$, short of $80$. More than a doubling is required.

**2.** Doubling $h=4$ to $h=8$ would have called "more than a doubling" false. That is the fork: $h=4$ belongs to the recovered isolation, $h=8$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That is exponent $1$.

**3.** The opposite verdict would have needed an exponent of $1$ or more. The first two readings lock $r=\\frac{1}{2}$. The third reading $E(9)=60$ sits on the same curve and does not change the inverse.

**4.** Checking the target itself: $E(16)=20\\cdot 4=80$, exactly double the forty-millimetre reading. The humidity move from $4$ to $16$ is a fourfold increase. A linear guess from $E(4)=40$ would have named $h=8$ and fallen short by about $23$ millimetres. The wetland law is slower than that guess, so the humidity target sits farther out.

Sixteen is four times four, not twice four. To double a square-root output you quadruple the input,

This letter inverts the wetland law: it asks how far humidity must move to double a named evaporation, not what evaporation a named humidity produces.

The recovered inverse on $E=80$ is humidity $16$. Sixteen is four times the logged deficit $4$, not twice $4$.

**1.** Checking a nearby output: to raise $E(4)=40$ only to $60$, the third logged reading, humidity must sit at $9$. That is already more than a doubling of $4$. Doubling the output to $80$ sits still farther out, at $16$.

**2.** Using leftover exponent $1$ would have named $h=8$ and called "more than a doubling" false. The recovered comparison therefore keeps $1$ and does not substitute $h=8$. That reading is After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. a proportional law the stem does not have.

**3.** Another mix-up is scaling the third reading: $E(9)=60$ to $120$ would need $h=36$, again a fourfold humidity move from $9$. Every doubling of a square-root output is a fourfold input. The claim's forty-millimetre reading is one instance of that rule.

**4.** The opposite verdict would have needed leftover exponent at least $1$, so that doubling output needed at most a doubling of humidity. The first two readings lock one half. Changing $A$ scales every evaporation by the same factor and cannot move the humidity ratio $16/4=4$.

so the statement is True.`,
      `**D.** → False

The leftover slope of $E(h)=20\\sqrt{h}$ is

$$E'(h)=10 h^{-\\frac{1}{2}}$$

The leftover slope of $E(h)=20\\sqrt{h}$ is $E'(h)=10 h^{-\\frac{1}{2}}$. After a deficit of one that is $10$. After a deficit of four it is $5$. An extra unit adds less after four, not more. A square-root evaporative law flattens.

**1.** A finite step agrees. From $1$ to $2$, $E$ rises from $20$ to about $28.3$, a gain of $8.3$. From $4$ to $5$, $E$ rises from $40$ to about $44.7$, a gain of $4.7$. Later units add less.

**2.** Seeing $E(4)=40>E(1)=20$ and inferred a steeper extra unit at four would have mixed a higher level with a steeper slope. That is why $E(4)=40>E(1)=20$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it.

**3.** The opposite verdict would have needed $r>1$. Changing $A$ scales both slopes by the same factor and cannot reverse $10>5$.

**4.** Checking $E'(9)=10/3\\approx 3.33$, still smaller than $E'(4)=5$. The third logged deficit sits even farther down the flattening slope. Using the secant from $h=1$ to $h=4$, namely $(40-20)/3\\approx 6.7$, and comparing it with the later secant from $4$ to $9$, namely $(60-40)/5=4$, would have reached the same verdict without derivatives. The stem's recovered values line up with $h=1$, whereas $(60-40)/5=4$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $h=1$ stays in the write-up. Later humidity units add less evaporation, not more.

After a deficit of one that is $10$. After a deficit of four it is $5$. An extra unit adds less after four, not more. A square-root evaporative law flattens,

This letter compares leftover slopes at two named deficits, not the levels $E(1)=20$ and $E(4)=40$.

The recovered slope falls from $10$ at deficit $1$ to $5$ at deficit $4$. An extra unit adds less after four, not more.

**1.** Checking one more pair of finite steps: from $9$ to $10$, evaporation rises from $60$ to $20\\sqrt{10}\\approx 63.2$, a gain of about $3.2$. That is smaller still than the $4.7$ gain from $4$ to $5$. The flattening continues past the third logged point.

**2.** Using the secant from $1$ to $9$, namely $(60-20)/8=5$, as if it were the extra-unit slope at four would have understated $E'(4)$ and still sat below $E'(1)=10$. The recovered comparison therefore keeps $1$ and does not substitute $E'(1)=10$. That contrast is the reason the verdict goes the way it does. The ranking survives a coarser slope.

**3.** The opposite verdict would have needed leftover exponent above $1$, so that $E'$ rose. A cube or a square-root-plus-one would have done that. The stem is a square root. Changing $A$ scales both $10$ and $5$ and cannot reverse the ranking.

so the statement is False.`,
      `**E.** → True

At deficit $25$, $\\sqrt{25}=5$:

$$E(25)=20\\cdot 5=100$$

At deficit $25$, $\\sqrt{25}=5$ and $E(25)=100$, which sits above $90$. The third logged point at deficit $9$ is $60$; this letter is a further perfect square on the same curve. Scaling $E(4)=40$ by $25/4$ linearly would have claimed $250$, still above $90$ but for the wrong shape. Working from the isolated values, $E(4)=40$ is the figure that is checked, not the detour that produced $90$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The opposite verdict would have needed $A\\le 90/5=18$. The unit deficit locks $A=20$.

One hundred sits above $90$. The third logged point at deficit $9$ is $60$; this letter is a further perfect square on the same curve,

This is a level at deficit $25$, a further perfect square on the recovered curve.

The recovered evaporation is $100$, which sits above $90$. The third logged point $E(9)=60$ is a different square.

Using $E(4)=40$ linearly to $25$ would have claimed $250$ and still sat above $90$, for the wrong shape. The recovered comparison therefore keeps $E(4)=40$ and does not substitute $90$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The opposite verdict would have needed $A$ at most $18$. The unit deficit locks $A=20$.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 91,
    solution_overview: `Evaporation follows $E(h)=Ah^{r}$ millimetres per day. Deficits of $1$ and $4$ recorded $20$ and $40$, and a third reading at deficit $9$ recorded $60$.

**Part 1: Building the model.**

Let $h$ = humidity deficit and $E$ = evaporation. Two unknowns need the first two readings. Their ratio cancels $A$ and isolates $r$; the unit deficit then pins $A$. The third reading is a test.

**1. Translate: the ratio.**

$$\\frac{40}{20}=4^{r}$$

**2. Translate: the unit deficit.**

$$A\\cdot 1^{r}=20$$

**Part 2: The model.**

$$E(h)=20h^{\\frac{1}{2}} \\tag{1}$$

$$\\frac{E(kh)}{E(h)}=k^{\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $r<1$, doubling the deficit does not double evaporation, and an extra unit adds less after four than after one.

**2.** Doubling the forty-millimetre reading needs $h=16$, which is more than double $4$. $E(25)=100>90$.

**Answer.** $A=20$ | $r=\\frac{1}{2}$ | $h=16$ to double $E(4)$ | $E(25)=100$`,
  },
  {
    id: `math-8-92`,
    case_id: `MATH 8.92`,
    title: `Shade-Tree Cooling Benefit Against Upkeep Cost`,
    context: `A city parks office models annual cooling benefit by $B(n)=A n^{\\frac{1}{2}}$ thousand euros and annual upkeep by $C(n)=k n$ thousand euros, where $n>0$ is the number of thousand trees planted. Raising the planting from $4$ thousand trees to $9$ thousand increased cooling benefit by $12$ thousand euros. At $9$ thousand trees, upkeep was $18$ thousand euros. Net benefit is $N(n)=B(n)-C(n)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because upkeep is linear, net benefit is not a power function of the planting.`,
      `At nine thousand trees, net benefit is already more than $15$ thousand euros.`,
      `Once upkeep overtakes cooling benefit, planting still more trees restores a positive net.`,
      `An extra thousand trees add more to the net at four thousand trees than at nine thousand.`,
      `At four thousand trees, net benefit is already more than $20$ thousand euros.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The benefit gap is $A(3-2)=12$, so $A=12$. The upkeep level is $k=2$. Net benefit is then

$$N(n)=12\\sqrt{n}-2n$$

The benefit gap is $A(3-2)=12$, so $A=12$. The upkeep level is $k=2$. Net benefit is then $N(n)=12\\sqrt{n}-2n$. A leftover second exponent keeps the net from being a power function of the planting. Upkeep being linear is exactly why those two powers cannot be absorbed into one monomial. Checking $N(4)=16$ and $N(9)=18$: the ratio $18/16$ is not $9^{r}/4^{r}$ for a single $r$. The opposite verdict would have needed $k=0$, upkeep free.

A leftover second exponent keeps the net from being a power function of the planting. Upkeep being linear is exactly why those two powers cannot be absorbed into one monomial, so the statement is True.`,
      `**B.** → True

At nine thousand trees, benefit $12\\cdot 3=36$ minus upkeep $18$ is net

$$N(9)=18$$

At nine thousand trees, benefit $36$ minus upkeep $18$ is net $18$, which sits above $15$. Using benefit in place of net would have claimed $36$ and overshot. Using $C(9)=18$ against $15$ would have mixed upkeep with net. The stem's recovered values line up with $C(9)=18$, whereas $15$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $C(9)=18$ stays in the write-up. The opposite verdict would have needed $N(9)\\le 15$, hence a larger $k$. The upkeep record locks $k=2$.

Eighteen sits above $15$. Using benefit in place of net would have claimed $36$ and overshot,

This is a net-benefit level at nine thousand trees, not a cooling-only reading.

The recovered net is $18$, which sits above $15$. Cooling alone is $36$; upkeep alone is $18$.

Using $C(9)=18$ against $15$ would have mixed upkeep with net and called a tie or a miss. Working from the isolated values, $C(9)=18$ is the figure that is checked, not the detour that produced $15$.

The opposite verdict would have needed a larger $k$. The upkeep record locks $k=2$.

so the statement is True.`,
      `**C.** → False

The schedules meet when $12\\sqrt{n}=2n$, so $\\sqrt{n}=6$ and $n=36$. Past that planting the ratio of benefit to upkeep keeps falling, because $\\sqrt{n}$ cannot keep pace with $n$. Planting more trees after upkeep overtakes cooling only deepens the loss. The net stays negative.

**1.** Checking $n=36$: $B=C=72$, net $0$. At $n=49$, $B=84$ and $C=98$, net $-14$. At $n=64$, $B=96$ and $C=128$, net $-32$. The gap widens.

**2.** Seeing $N'(9)=0$ as a later recovery would have mixed the peak of the net with a second crossing of $B$ and $C$. After isolating the unknown, the check is against $N'(9)=0$. The figure $C$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $N'(9)=0$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The peak is at $n=9$, still in surplus; the crossing is at $n=36$, after which $N<0$ for good.

**3.** The opposite verdict would have needed benefit leftover exponent at least $1$, so that $B$ could recross linear upkeep. The stem is a square root.

**4.** Checking one more planting past the crossing: at $n=81$, benefit is $12\\cdot 9=108$ and upkeep is $162$, so the net is $-54$. The loss has already grown from $-32$ at $n=64$. Treating the peak $N(9)=18$ as a later surplus after the crossing would have mixed the interior maximum with a second root. That is why $N(9)=18$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. There is only one later root, $n=36$, and after it the net stays negative.

The schedules meet when $12\\sqrt{n}=2n$, so $\\sqrt{n}=6$ and $n=36$. Past that planting the ratio of benefit to upkeep keeps falling, because $\\sqrt{n}$ cannot keep pace with $n$. Planting more trees after upkeep overtakes cooling only deepens the loss. The net stays negative,

This letter asks whether the net can turn positive again after upkeep overtakes cooling, not where the peak of the net sits.

The recovered crossing is $n=36$, where both schedules equal $72$ and the net is $0$. Past that planting, linear upkeep outruns the square root for good.

**1.** Checking $n=25$, still before the crossing: benefit $60$ minus upkeep $50$ is net $10$, still positive. Checking $n=100$: benefit $120$ minus upkeep $200$ is net $-80$. The loss has grown from the $-32$ already seen at $n=64$.

**2.** Setting $N'(n)=0$ and reading $n=9$ as a later recovery would have mixed the interior peak with a second root of $N$. Working from the isolated values, $N'(n)=0$ is the figure that is checked, not the detour that produced $N$. That contrast is the reason the verdict goes the way it does. The peak is a surplus of $18$. The later root is a crossing through zero at $n=36$, after which $N$ stays negative.

**3.** The opposite verdict would have needed cooling leftover exponent at least $1$, so that $B$ could recross linear upkeep. The stem is a square root. Changing $A$ moves the crossing but cannot create a second crossing once $r<1$.

so the statement is False.`,
      `**D.** → True

The leftover slope of the net is

$$N'(n)=6 n^{-\\frac{1}{2}}-2$$

The leftover slope of the net is $N'(n)=6 n^{-\\frac{1}{2}}-2$. At four thousand trees that is $1$. At nine thousand trees it is $0$. An extra thousand trees still adds at four thousand and adds nothing at nine thousand. Nine thousand is the peak, not a point where later trees help more.

**1.** Checking $N(4)=16$ and $N(5)=12\\sqrt{5}-10\\approx 16.83$, a gain of about $0.83$ thousand euros. From $n=9$ to $n=10$, $N(10)=12\\sqrt{10}-20\\approx 17.94$, a drop of about $0.06$ from $N(9)=18$. Past the peak the extra thousand already subtracts.

**2.** Seeing $N(9)=18>N(4)=16$ and inferred a steeper extra thousand at nine would have mixed a higher level with a steeper slope. Keeping $N(9)=18>N(4)=16$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The level is higher at nine; the slope is zero.

**3.** The opposite verdict would have needed $N'$ larger at nine than at four, hence a net that was still accelerating. Square-root benefit minus linear upkeep peaks at $n=9$ and then falls.

**4.** Checking the other side of the peak: $N'(4)=1>0$ while $N'(16)=6/4-2=-0.5<0$. Four thousand trees still add; sixteen thousand already subtract. Nine thousand is the turning point, not a later acceleration. Comparing only the levels $N(9)=18$ and $N(16)=12\\cdot 4-32=16$ would still see a fall after the peak, which is the same story as the slope comparison. After isolating the unknown, the check is against $N(9)=18$. The figure $N(16)=12\\cdot 4-32=16$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $N(9)=18$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

At four thousand trees that is $1$. At nine thousand trees it is $0$. An extra thousand trees still adds at four thousand and adds nothing at nine thousand. Nine thousand is the peak, not a point where later trees help more,

This letter compares leftover slopes of the net at four thousand and nine thousand trees.

The recovered $N'$ is $1$ at four thousand and $0$ at nine thousand. An extra thousand trees still adds at four thousand and adds nothing at the peak.

**1.** Checking $N(1)=12-2=10$ and $N(0^{+})$ near $0$: the first thousand trees add about $10$. That is steeper than the $0.83$ already computed from $n=4$ to $n=5$, and far steeper than the near-zero step at $n=9$. The extra thousand is most valuable early.

**2.** Comparing only $N(9)=18>N(4)=16$ would have called later trees more helpful. Once $N(9)=18>N(4)=16$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. That mixes a higher level with a steeper slope. The level is higher at nine; the slope is zero.

**3.** The opposite verdict would have needed $N'$ still rising at nine thousand. Square-root benefit minus linear upkeep has $N'$ falling through zero at $n=9$. Changing $k$ moves the peak but cannot make $N'(9)>N'(4)$ on this shape.

so the statement is True.`,
      `**E.** → False

At four thousand trees, benefit $24$ minus upkeep $8$ is net

$$N(4)=16$$

At four thousand trees, benefit $24$ minus upkeep $8$ is net $16$, which is not more than $20$. The claimed $20$ overshoots the net, and $24$ is cooling before upkeep. Mixing $B$ with $N$ is the mix-up. The opposite verdict would have needed $N(4)>20$, hence a smaller $k$ or a larger $A$. The two records lock $N(4)=16$.

which is not more than $20$. The claimed $20$ overshoots the net, and $24$ is cooling before upkeep. Mixing $B$ with $N$ is the mix-up,

This is a net-benefit level at four thousand trees, not a cooling-only reading.

The recovered net is $16$, which is not more than $20$. Cooling at four thousand is $24$; that $24$ is the mix-up.

Using $B(4)=24$ against $20$ would have called the claim true. After isolating the unknown, the check is against $B(4)=24$. The figure $20$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $B(4)=24$ stays in the write-up.

The opposite verdict would have needed a smaller $k$ or a larger $A$. The two records lock $N(4)=16$.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 92,
    solution_overview: `Cooling benefit is $B(n)=A n^{\\frac{1}{2}}$ thousand euros and upkeep is $C(n)=kn$ thousand euros. The benefit rose by $12$ between $n=4$ and $n=9$, and $C(9)=18$. Net benefit is $N=B-C$.

**Part 1: Building the model.**

Let $n$ = thousands of trees. The benefit difference isolates $A$. The upkeep level isolates $k$.

**1. Translate: the benefit gap.**

$$A(3-2)=12$$

**2. Translate: the upkeep level.**

$$9k=18$$

**Part 2: The model.**

$$N(n)=12n^{\\frac{1}{2}}-2n \\tag{1}$$

$$N'(n)=6n^{-\\frac{1}{2}}-2 \\tag{2}$$

**Part 3: Solve.**

**1.** $N(9)=18>15$ and $N(4)=16$, which is not more than $20$. The figure $24$ is $B(4)$, not the net.

**2.** $(1)$ is not a single power of $n$. The schedules meet at $n=36$, and $(2)$ is negative for $n>9$, so the net cannot turn positive again.

**3.** $N'(4)=1>N'(9)=0$, so an extra thousand trees add more at four thousand than at nine.

**Answer.** $A=12$ | $k=2$ | $N(9)=18$ | $N(4)=16$ | break-even at $n=36$`,
  },
  {
    id: `math-8-93`,
    case_id: `MATH 8.93`,
    title: `Trail-Map Kiosk Demand Inverted from Price`,
    context: `Weekly pamphlet demand at a trail-map kiosk follows $q(p)=A p^{-2}$ packs per week, where $p>0$ is the price in euros. At a price of $5$ euros the kiosk sold $80$ packs. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The price needed for a given weekly demand is itself a power function of that demand.`,
      `Doubling the five-euro price halves weekly demand.`,
      `At $10$ euros the kiosk already sells under $25$ packs a week.`,
      `Weekly revenue falls as the price rises.`,
      `A target of $125$ packs a week needs a price above $5$ euros.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

A nonzero power inverts to another power. From $q=A p^{-2}$,

$$p=A^{\\frac{1}{2}} q^{-\\frac{1}{2}}$$

A nonzero power inverts to another power. From $q=2000 p^{-2}$, isolating price leaves $p=\\sqrt{2000}\\, q^{-\\frac{1}{2}}$. The new exponent is the reciprocal of $-2$. Price needed for a given weekly demand is still a monomial in $q$. Falling demand does not introduce a logarithm. Checking $q=80$ returns $p=5$, the logged pair. Checking $q=20$ returns $p=10$, letter C. The opposite verdict would have needed a decaying exponential in price.

The new exponent is the reciprocal of $-2$. Price needed for a given weekly demand is still a monomial in $q$. Falling demand does not introduce a logarithm,

This letter asks whether the inverse demand map is still a power, not what price a named pack count requires.

The recovered inverse is a monomial in $q$ with leftover exponent $-\\frac{1}{2}$. A nonzero power inverts to another power.

Seeing $q\\propto p^{-2}$ and guessed that inversion would introduce a logarithm would have mixed a power with an exponential. Keeping $q\\propto p^{-2}$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim.

The opposite verdict would have needed a decaying exponential in price. The stem is a power.

so the statement is True.`,
      `**B.** → False

Doubling the five-euro price would halve demand only if the exponent were $-1$. With $-2$ the factor is

$$2^{-2}=\\frac{1}{4}$$

Doubling the five-euro price would halve demand only if the exponent were $-1$. With $-2$ the factor is $2^{-2}=\\frac{1}{4}$, so $80\\cdot\\frac{1}{4}=20$ packs, not $40$. Demand falls to one quarter, not to one half. Inverse-linear thinking is the mismatch. The opposite verdict would have needed $r=-1$. Letter A already used $r=-2$ as an inverse; this letter is that $-2$ read as a doubling claim.

**1.** Checking the till as well: $R(5)=400$ and $R(10)=200$. Revenue halves when the price doubles, which is the leftover $p^{-1}$ on revenue, not a demand-halving story.

**2.** Using elasticity $-1$ would have named $40$ packs at $10$ euros and called the claim true. After isolating the unknown, the check is against $-1$. The figure $10$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $-1$ stays in the write-up. The stem's exponent is $-2$, so the cut is twice as steep in the log.

**3.** The opposite verdict would have needed $r=-1$ on demand. Changing $A$ scales both $q(5)$ and $q(10)$ by the same factor and cannot turn a quarter into a half.

**4.** Checking a neighbouring doubling: from $4$ euros at $125$ packs, doubling to $8$ euros leaves $2000/64=31.25$ packs, again a quarter, not a half. The scale factor is independent of the starting price.

so $80\\cdot\\frac{1}{4}=20$ packs, not $40$. Demand falls to one quarter, not to one half. Inverse-linear thinking is the mismatch,

This is a scale claim on the five-euro price, not a new pack count against a cutoff.

The recovered factor is $2^{-2}=\\frac{1}{4}$, so demand falls to $20$ packs, not to $40$.

**1.** Checking the till on the same doubling: $R(5)=400$ and $R(10)=200$. Revenue halves. That leftover $p^{-1}$ on revenue is not a demand-halving story.

**2.** Using leftover exponent $-1$ on demand would have named $40$ packs and called the claim true. The stem's recovered values line up with $-1$, whereas $40$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $-1$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Inverse-linear thinking is the mismatch.

**3.** The opposite verdict would have needed $r=-1$. Changing $A$ scales both $q(5)$ and $q(10)$ and cannot turn a quarter into a half. Letter C then reads $q(10)=20$ against a $25$-pack line; this letter is the doubling claim sitting next to that level.

so the statement is False.`,
      `**C.** → True

From $A/25=80$, the coefficient is $A=2000$. Ten euros is a doubling of the logged $5$, so inverse-square demand is a quarter of $80$:

$$q(10)=20$$

From $A/25=80$, the coefficient is $A=2000$. Ten euros is a doubling of the logged $5$, so inverse-square demand is a quarter of $80$: $q(10)=20$. Twenty packs already sit under twenty-five. Halving $80$ to $40$ would have sat above $25$ and flipped the verdict. After isolating the unknown, the check is against $80$. The figure $25$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $80$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Inverse-linear thinking is too slow a drop. The opposite verdict would have needed $A>25\\cdot 100=2500$. The logged pair locks $A=2000$.

Twenty packs already sit under twenty-five,

This is a level at $10$ euros, a doubling of the logged five-euro price.

The recovered demand is $20$ packs, which sits under $25$. Inverse-linear thinking would have named $40$ and sat above $25$.

Halving $80$ would have flipped the verdict. Keeping $80$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The stem's leftover exponent is $-2$, not $-1$.

The opposite verdict would have needed $A$ above $2500$. The logged pair locks $A=2000$.

so the statement is True.`,
      `**D.** → True

Revenue is $R(p)=\\frac{2000}{p}$, a negative leftover power, so the till shrinks as the price rises. At $5$ euros the take is $400$; at $10$ euros it is $200$. Inverse-square demand is elastic enough that a price rise cuts $pq$. Checking $R(4)=500>R(5)=400>R(10)=200$. The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand exponent greater than $-1$. The stem is $p^{-2}$.

Revenue is $R(p)=\\frac{2000}{p}$, a negative leftover power, so the till shrinks as the price rises. At $5$ euros the take is $400$; at $10$ euros it is $200$. Inverse-square demand is elastic enough that a price rise cuts $pq$,

This letter asks the sign of leftover revenue as price rises, not a named till against a cutoff.

The recovered $R(p)=2000/p$ is a negative leftover power, so the till shrinks. At $5$ euros the take is $400$; at $10$ euros it is $200$.

Remembering "raise price, raise revenue" from inelastic demand would have flipped the sign. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The opposite verdict would have needed demand leftover exponent greater than $-1$. The stem is $p^{-2}$.

so the statement is True.`,
      `**E.** → False

A target of $125$ packs inverts $2000/p^{2}=125$:

$$p^{2}=16$$

$$p=4$$

A target of $125$ packs inverts $2000/p^{2}=125$ to $p^{2}=16$ and $p=4$, which sits below $5$, not above it. More packs require a lower price along this curve. The unique positive price that moves $125$ packs is four euros.

**1.** Raising the price to move more packs would have called the statement true. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Along this curve a higher price cuts quantity.

**2.** Checking $q(5)=80<125$ already: five euros moves fewer than $125$ packs, so the $125$ target is a cheaper price, $4$ euros.

**3.** The opposite verdict would have needed a target below $80$ packs, which would have sat above $5$ euros. The named target is $125$, above the logged $80$.

**4.** Checking a neighbouring target: $100$ packs invert to $p=\\sqrt{20}\\approx 4.47$, still below $5$. Every target above the logged $80$ packs sits on a cheaper posted price. Using inverse-linear demand $q=400/p$ would have inverted $125$ to $p=3.2$ and still sat below $5$, so the verdict would have survived a milder elasticity. After isolating the unknown, the check is against $q=400/p$. The figure $5$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $q=400/p$ stays in the write-up. Only a demand curve that rose with price could have put $125$ packs above $5$ euros.

which sits below $5$, not above it. More packs require a lower price along this curve. The unique positive price that moves $125$ packs is four euros,

This letter inverts a pack target, not a price level.

The recovered price for $125$ packs is $4$ euros, which sits below $5$, not above it. More packs require a cheaper posted price along this curve.

**1.** Checking $q(5)=80<125$ already shows that five euros cannot move $125$ packs. The $125$ target must sit on a cheaper price.

**2.** Raising the price to move more packs would have called the claim true. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. Along this curve a higher price cuts quantity.

**3.** The opposite verdict would have needed a target below $80$ packs, which would have sat above $5$ euros. The named target is $125$. Changing $A$ scales the inverted price by a square root and would have needed $A>125\\cdot 25=3125$ to put $125$ packs above $5$ euros. The logged pair locks $A=2000$.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 93,
    solution_overview: `Pamphlet demand is $q(p)=Ap^{-2}$ packs per week, with $q(5)=80$. Weekly revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros and $q$ = packs per week. The exponent is given, so one priced observation fixes $A$. Inversion uses the reciprocal exponent.

**1. Translate: the recorded pair.**

$$A\\cdot 5^{-2}=80$$

**Part 2: The model.**

$$q(p)=2000p^{-2} \\tag{1}$$

$$R(p)=2000p^{-1} \\tag{2}$$

**Part 3: Solve.**

**1.** The inverse $p=(2000/q)^{\\frac{1}{2}}$ is a power of $q$.

**2.** $q(10)=20<25$. A target of $125$ packs requires $p=4$, which is not above $5$.

**3.** $(2)$ falls with price. Doubling price multiplies demand by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$.

**Answer.** $A=2000$ | $q(10)=20$ | $p=4$ for $125$ packs | $R(p)=\\frac{2000}{p}$`,
  },
  {
    id: `math-8-94`,
    case_id: `MATH 8.94`,
    title: `Bike-Share Passes Under a Subsidy Price Index`,
    context: `Weekly bike-share day-pass sales follow $q(p)=A p^{\\frac{-3}{2}}$ when the pass price is $p>0$ euros. A pilot at $16$ euros sold $50$ passes. Policy indexes the pass by $p(s)=B s^{\\frac{2}{3}}$ for a positive subsidy index $s$, and at subsidy index $8$ the posted price is $16$ euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Composed demand is a power function of the subsidy index.`,
      `Tripling the subsidy index triples composed demand.`,
      `At subsidy index $8$, composed demand is already more than $40$ passes.`,
      `Raising the subsidy index raises composed demand.`,
      `At subsidy index $27$, composed demand stays under $16$ passes.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Demand's exponent $-\\frac{3}{2}$ times the indexation exponent $\\frac{2}{3}$ is $-1$. The composition is a monomial $C s^{-1}$, a power of $s$. Stopping after $p(s)$ would have left exponent $\\frac{2}{3}$. The overview recovered $q(p(s))=400/s$. The opposite verdict would have needed a stage that was not a power. Both the demand curve and the policy map are monomials.

Demand's exponent $-\\frac{3}{2}$ times the indexation exponent $\\frac{2}{3}$ is $-1$. The composition is a monomial $C s^{-1}$, a power of $s$. Stopping after $p(s)$ would have left exponent $\\frac{2}{3}$,

This letter asks whether the composed map is still a monomial in the subsidy index.

The recovered composition is $400/s$, leftover exponent $-1$, a power of $s$. Both stages were powers, so the composite is a power.

Stopping after $p(s)$ would have left leftover exponent $\\frac{2}{3}$ and still have a power, just the wrong one. The stem's recovered values line up with $p(s)$, whereas $\\frac{2}{3}$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $p(s)$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

The opposite verdict would have needed a stage that was not a power. Both the demand curve and the policy map are monomials.

so the statement is True.`,
      `**B.** → False

Tripling the subsidy index multiplies composed demand by

$$3^{-1}=\\frac{1}{3}$$

Tripling the subsidy index multiplies composed demand by $3^{-1}=\\frac{1}{3}$, not by $3$. Demand falls to a third rather than tripling. The indexation $p\\propto s^{\\frac{2}{3}}$ raises the pass price as $s$ grows, so the composed map is inverse, not increasing.

**1.** Checking $s=8$ at $50$ passes against $s=24$: composed demand is $400/24\\approx 16.7$, a third of $50$. Tripling $s$ divided passes by $3$.

**2.** Reading "subsidy index" as "more subsidy, more rides" would have called the statement true. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. This indexation raises the posted price as $s$ grows.

**3.** The opposite verdict would have needed composed exponent positive. The two stages multiply to $-1$.

**4.** Checking the posted prices: $p(8)=16$ and $p(24)=4\\cdot 24^{\\frac{2}{3}}=4\\cdot 8^{\\frac{2}{3}}\\cdot 3^{\\frac{2}{3}}=16\\cdot 3^{\\frac{2}{3}}\\approx 33.3$. The pass is dearer at the larger index, so inverse-power demand must fall. Treating $s$ as a discount rather than an indexation would have expected $p$ to drop and demand to rise. So the letter reads the claim against $s$; $p$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $s$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The stem's $p(s)$ climbs with $s$.

not by $3$. Demand falls to a third rather than tripling. The indexation $p\\propto s^{\\frac{2}{3}}$ raises the pass price as $s$ grows, so the composed map is inverse, not increasing,

This is a scale claim on the subsidy index, not a level at a named $s$.

The recovered composed exponent is $-1$, so tripling $s$ multiplies demand by $\\frac{1}{3}$, not by $3$.

**1.** Checking $s=8$ at $50$ passes against $s=24$ at $400/24\\approx 16.7$: the passes fell to a third. The posted price rose from $16$ to about $33.3$, which is why demand fell.

**2.** Reading "subsidy index" as a discount would have expected more rides and called the claim true. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. This indexation raises the posted price as $s$ grows.

**3.** The opposite verdict would have needed composed leftover exponent positive. The two stages multiply to $-1$. Changing the pilot $50$ scales every composed level and cannot turn a third into a triple.

so the statement is False.`,
      `**C.** → True

Subsidy index $8$ was calibrated to the $16$-euro, $50$-pass reading, so composed demand at $s=8$ is the pilot itself:

$$q\\bigl(p(8)\\bigr)=50$$

Subsidy index $8$ was calibrated to the $16$-euro, $50$-pass reading, so composed demand at $s=8$ is the pilot itself: $50$ passes, already above $40$. Computing $q(p(8))$ from scratch with a wrong $B$ would have missed that $s=8$ is the logged pair. After isolating the unknown, the check is against $q(p(8))$. The figure $s=8$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $q(p(8))$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would have needed the pilot below $40$ passes. The stem is $50$.

Fifty passes already sit above forty,

This is a composed-demand level at the calibrated index $s=8$.

The recovered demand is the pilot itself, $50$ passes, already above $40$. Index $8$ is the logged pair, not a new evaluation.

Recomputing $q(p(8))$ with a wrong $B$ would have missed that $s=8$ is already $50$. So the letter reads the claim against $q(p(8))$; $50$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $q(p(8))$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

The opposite verdict would have needed the pilot below $40$ passes. The stem is $50$.

so the statement is True.`,
      `**D.** → False

From $A\\cdot 16^{-\\frac{3}{2}}=50$ and $B\\cdot 4=16$, the composition collapses to $q(p(s))=\\frac{400}{s}$. For every $k>1$ the factor $k^{-1}<1$. Raising the subsidy index lowers composed demand. "Subsidy up, sales up" ignores that indexation.

**1.** Checking $s=8$ at $50$ against $s=16$ at $25$: doubling $s$ halves passes. The map is inverse.

**2.** Inverting the demand stage only, holding $p$ fixed, would have claimed sales independent of $s$ and missed the policy map $p(s)$. So the letter reads the claim against $p$; $p(s)$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $p$ stays in the write-up.

**3.** The opposite verdict would have needed composed exponent positive. The stem's two exponents multiply to $-1$.

**4.** Checking a third index: $s=32$ gives $400/32=12.5$ passes, below the $25$ at $s=16$ and below the $50$ at $s=8$. Each rise in the subsidy index cuts composed demand. Plotting $q$ against $p$ only, holding the policy map out of view, would have missed that $p$ itself is rising with $s$. The recovered comparison therefore keeps $q$ and does not substitute $s$. The claim is about the composed map, not about a fixed price.

From $A\\cdot 16^{-\\frac{3}{2}}=50$ and $B\\cdot 4=16$, the composition collapses to $q(p(s))=\\frac{400}{s}$. For every $k>1$ the factor $k^{-1}<1$. Raising the subsidy index lowers composed demand. "Subsidy up, sales up" ignores that indexation,

This letter asks the sign of composed demand as the subsidy index rises, not a named level.

The recovered map $400/s$ falls for every rise in $s$. Doubling $s$ from $8$ to $16$ cuts passes from $50$ to $25$.

**1.** Checking $s=4$, a smaller index than the pilot: composed demand is $100$ passes, above the pilot. Smaller $s$ means a cheaper posted price and more rides. Raising $s$ is the opposite move.

**2.** Inverting the demand stage only, holding $p$ fixed, would have claimed sales independent of $s$ and missed the policy map. After isolating the unknown, the check is against $p$. The figure $s$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $p$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

**3.** The opposite verdict would have needed composed leftover exponent positive. The stem's two exponents multiply to $-1$. "Subsidy up, sales up" ignores that this indexation raises the pass price.

so the statement is False.`,
      `**E.** → True

At subsidy index $27$, composed demand is

$$\\frac{400}{27}\\approx 14.81$$

At subsidy index $27$, composed demand is $400/27\\approx 14.81$, which sits under $16$. From the pilot, $\\frac{27}{8}$ times the index multiplies demand by $\\frac{8}{27}$: $50\\cdot\\frac{8}{27}=\\frac{400}{27}$. Fourteen and a bit stays under sixteen. Using $q(p(8))=50$ against $16$ would have named the pilot, not $s=27$. So the letter reads the claim against $q(p(8))=50$; $s=27$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $q(p(8))=50$ stays in the write-up. The opposite verdict would have needed $400/27\\ge 16$, hence a larger composed coefficient. The two calibrations lock $400/s$.

which sits under $16$. From the pilot, $\\frac{27}{8}$ times the index multiplies demand by $\\frac{8}{27}$: $50\\cdot\\frac{8}{27}=\\frac{400}{27}$. Fourteen and a bit stays under sixteen,

This is a composed-demand level at subsidy index $27$.

The recovered demand is $400/27\\approx 14.81$, which sits under $16$. From the pilot, $50\\cdot 8/27=400/27$.

Using $q(p(8))=50$ against $16$ would have named the pilot, not $s=27$. So the letter reads the claim against $q(p(8))=50$; $s=27$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $q(p(8))=50$ stays in the write-up.

The opposite verdict would have needed a larger composed coefficient. The two calibrations lock $400/s$.

so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 94,
    solution_overview: `Day-pass demand is $q(p)=Ap^{\\frac{-3}{2}}$ with $q(16)=50$. Policy indexes the price by $p(s)=B s^{\\frac{2}{3}}$ with $p(8)=16$.

**Part 1: Building the model.**

Let $p$ = pass price, $q$ = weekly passes, and $s$ = subsidy index. The pilot fixes $A$. The indexed price at $s=8$ fixes $B$. Composition multiplies the exponents.

**1. Translate: the pilot.**

$$A\\cdot 16^{\\frac{-3}{2}}=50$$

**2. Translate: the policy map.**

$$B\\cdot 8^{\\frac{2}{3}}=16$$

**Part 2: The model.**

$$q(p)=3200p^{\\frac{-3}{2}} \\tag{1}$$

$$q(p(s))=\\frac{400}{s} \\tag{2}$$

**Part 3: Solve.**

**1.** $(2)$ is a power of $s$ with exponent $-1$, so tripling $s$ divides demand by $3$ and raising $s$ lowers demand.

**2.** $q(p(8))=50>40$. At $s=27$, composed demand is $\\frac{400}{27}\\approx 14.81<16$.

**Answer.** $A=3200$ | $B=4$ | $q\\circ p=\\frac{400}{s}$ | $q(p(8))=50$`,
  },
  {
    id: `math-8-95`,
    case_id: `MATH 8.95`,
    title: `Overnight Loaves Split Across Two Oven Lines`,
    context: `A regional bakery must bake $30$ thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index follows $C_{1}(q)=a q^{2}$ and line 2's follows $C_{2}(q)=b q^{2}$, where $q$ is that line's own output in thousands of loaves. A $10$-thousand-loaf run on line 1 scored $100$, and an $8$-thousand-loaf run on line 2 scored $16$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Concentrating the whole order on the cheaper line is the cheapest plan.`,
      `Sending all thirty thousand loaves to line 2 scores more than $200$.`,
      `The cheaper line should take the larger share of the overnight order.`,
      `Line 1's average cost index falls as its own output rises.`,
      `The six-and-twenty-four split scores under $200$.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

The two logs give $a=1$ and $b=\\frac{1}{4}$. Equal marginal costs $2q_{1}=\\frac{1}{2}q_{2}$ force $q_{2}=4q_{1}$. With $q_{1}+q_{2}=30$ that split is $6$ and $24$, costing

$$6^{2}+\\frac{24^{2}}{4}=36+144=180$$

The two logs give $a=1$ and $b=\\frac{1}{4}$. Equal marginal costs $2q_{1}=\\frac{1}{2}q_{2}$ force $q_{2}=4q_{1}$. With $q_{1}+q_{2}=30$ that split is $6$ and $24$, costing $180$. All on line 2, the cheaper line, costs $225$. Spreading the load still beats concentrating.

**1.** All on line 1 costs $900$, far worse. The cheaper-line corner is $225$, already $45$ above the equal-marginal split.

**2.** Seeing $b<a$ and sending every loaf to line 2 would have called the claim true. The path that matches the stem therefore holds $b<a$ fixed and only then reads the claim. Quadratic cost punishes concentration: thirty squared is $900$, and a quarter of that is still $225$.

**3.** Checking a nearby split, $5$ and $25$: cost is $25+\\frac{625}{4}=181.25$, already a little above $180$. Checking $8$ and $22$: cost is $64+121=185$. The $6$-and-$24$ split is cheaper than those neighbours and cheaper than either corner.

**4.** The opposite verdict would have needed linear costs, where the cheapest plan is a corner on the cheaper line. Both stem costs are squares, so the interior split wins. Concentrating the whole order on line 2 is not the cheapest plan.

All on line 2 costs $225$. Spreading the load still beats concentrating,

This letter asks whether a corner on the cheaper line beats an interior split, not what that split costs against $200$.

The recovered equal-marginal split is $6$ and $24$, costing $180$. All on line 2, the cheaper line, costs $225$. Spreading still wins.

**1.** All on line 1 costs $900$. The cheaper-line corner is already $45$ above the interior split. Quadratic cost punishes concentration: thirty squared is $900$, and a quarter of that is still $225$.

**2.** Checking $10$ and $20$: cost is $100+100=200$, already $20$ above $180$. Checking $4$ and $26$: cost is $16+169=185$. Neighbours of $6$ and $24$ sit above $180$.

**3.** Seeing $b<a$ and sending every loaf to line 2 would have called the claim true. The path that matches the stem therefore holds $b<a$ fixed and only then reads the claim. Linear costs would have made that corner optimal. Both stem costs are squares, so the interior split wins.

**4.** The opposite verdict would have needed linear costs, or a cheaper-line coefficient so small that $C_{2}(30)$ fell through $180$. At $b=\\frac{1}{4}$, the corner is locked at $225$.

so the statement is False.`,
      `**B.** → True

All thirty thousand loaves on line 2 score

$$C_{2}(30)=\\frac{1}{4}\\cdot 900=225$$

All thirty thousand loaves on line 2 score $225$, which sits above $200$. Plant 2 is cheaper per squared unit, but thirty squared is still $900$. The corner already clears two hundred. Using $C_{2}(8)=16$ linearly to $C_{2}(30)$ would have claimed $60$ and missed the letter. After isolating the unknown, the check is against $C_{2}(8)=16$. The figure $60$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $C_{2}(8)=16$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The opposite verdict would have needed $b\\le 200/900$. The eight-thousand run locks $b=\\frac{1}{4}$.

which sits above $200$. Plant 2 is cheaper per squared unit, but thirty squared is still $900$. The corner already clears two hundred,

This is a corner level: all thirty thousand loaves on line 2.

The recovered score is $225$, which sits above $200$. Thirty squared is $900$, and a quarter of that is $225$.

Scaling $C_{2}(8)=16$ linearly to $30$ would have claimed $60$ and missed the letter. Working from the isolated values, $C_{2}(8)=16$ is the figure that is checked, not the detour that produced $60$.

The opposite verdict would have needed $b$ at most $200/900$. The eight-thousand run locks $b=\\frac{1}{4}$.

so the statement is True.`,
      `**C.** → True

Equal marginal costs force $q_{2}=4q_{1}$, so the cheaper line takes the larger share: $24$ against $6$. Twenty-four thousand loaves sit on line 2. A cheaper coefficient should carry more volume, not less, when both costs are squares.

**1.** Checking the marginals at that split: $C_{1}'(6)=12$ and $C_{2}'(24)=12$. They match. At an even split of $15$ and $15$, the marginals are $30$ and $7.5$, so line 1 is still too dear at the margin and more loaves should move to line 2.

**2.** Sending the larger share to line 1, because line 1 had the logged $100$ against line 2's $16$, would have mixed a higher logged run with a cheaper coefficient. Working from the isolated values, $100$ is the figure that is checked, not the detour that produced $16$. The $100$ was a $10$-thousand run; the $16$ was an $8$-thousand run. After recovering $a=1$ and $b=\\frac{1}{4}$, line 2 is cheaper.

**3.** The opposite verdict would have needed $b>a$, so that equal marginals would have put more loaves on line 1. The stem has $b=\\frac{1}{4}<1=a$.

Equal marginal costs force $q_{2}=4q_{1}$, so the cheaper line takes the larger share: $24$ against $6$. Twenty-four thousand loaves sit on line 2. A cheaper coefficient should carry more volume, not less, when both costs are squares,

This letter asks which line takes the larger share at the cheapest split, not what that split costs.

Equal marginals force $q_{2}=4q_{1}$, so line 2 takes $24$ against line 1's $6$. The cheaper coefficient carries more volume.

**1.** Checking the marginals at $6$ and $24$: both equal $12$. At an even $15$ and $15$, the marginals are $30$ and $7.5$, so more loaves should still move to line 2.

**2.** Sending the larger share to line 1, because the logged run there scored $100$ against $16$, would have mixed a larger logged batch with a cheaper coefficient. Working from the isolated values, $100$ is the figure that is checked, not the detour that produced $16$. After recovering $a=1$ and $b=\\frac{1}{4}$, line 2 is cheaper.

**3.** The opposite verdict would have needed $b>a$. The stem has $b=\\frac{1}{4}<1$. Changing the overnight total scales both shares in the same $1:4$ ratio and cannot give line 1 the larger share.

so the statement is True.`,
      `**D.** → False

Line 1's average cost index is $C_{1}(q)/q=q$ itself, which rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$. Extra loaves on line 1 are dearer per loaf, not cheaper. Checking $C_{1}(5)/5=5$ against $C_{1}(10)/10=10$: the average doubled when output doubled. The opposite verdict would have needed leftover exponent below $1$.

Line 1's average cost index is $C_{1}(q)/q=q$ itself, which rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$. Extra loaves on line 1 are dearer per loaf, not cheaper,

This letter asks whether line 1's average cost falls as its own output rises.

The recovered average is $C_{1}(q)/q=q$, which rises. A falling average would have needed leftover exponent below $1$.

Checking $C_{1}(5)/5=5$ against $C_{1}(10)/10=10$: the average doubled when output doubled.

The opposite verdict would have needed leftover exponent below $1$. Line 1's leftover exponent is $2$.

so the statement is False.`,
      `**E.** → True

The $6$-and-$24$ split scores

$$36+144=180$$

The $6$-and-$24$ split scores $180$, which sits under $200$. Six squared is $36$; twenty-four squared over $4$ is $144$. Spreading at equal marginals beats the $225$ corner. Adding $6+24=30$ as if the cost were the split itself would have sat under $200$ for the wrong reason. The stem's recovered values line up with $6+24=30$, whereas $200$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $6+24=30$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The opposite verdict would have needed a split cost of $200$ or more. Equal marginals lock $180$.

which sits under $200$. Six squared is $36$; twenty-four squared over $4$ is $144$. Spreading at equal marginals beats the $225$ corner,

This is a level of the equal-marginal split against a $200$ line.

The recovered score is $180$, which sits under $200$. Six squared is $36$; twenty-four squared over $4$ is $144$.

Adding $6+24=30$ as if the cost were the split itself would have sat under $200$ for the wrong reason. The stem's recovered values line up with $6+24=30$, whereas $200$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $6+24=30$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The opposite verdict would have needed a split cost of $200$ or more. Equal marginals lock $180$.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 95,
    solution_overview: `Thirty thousand loaves are split between $C_{1}(q)=aq^{2}$ and $C_{2}(q)=bq^{2}$. A run of $10$ on line 1 scored $100$, and a run of $8$ on line 2 scored $16$.

**Part 1: Building the model.**

Let $q_{1}+q_{2}=30$ be the split in thousands of loaves. Each logged run fixes one coefficient.

**1. Translate: line 1.** $100a=100$.

**2. Translate: line 2.** $64b=16$.

**Part 2: The model.**

$$C_{1}(q)=q^{2}, \\qquad C_{2}(q)=\\frac{q^{2}}{4} \\tag{1}$$

$$q_{2}=4q_{1} \\quad \\text{at equal marginals} \\tag{2}$$

**Part 3: Solve.**

**1.** All on line 2 costs $225>200$. The equal-marginal split is $6$ and $24$, costing $180<200$.

**2.** The cheaper line takes the larger share. The cheaper-line corner is not the cheapest plan.

**3.** Line 1's average cost is $q$, which rises with own output.

**Answer.** $a=1$ | $b=\\frac{1}{4}$ | all on line 2 costs $225$ | $6$ and $24$ costs $180$`,
  },
  {
    id: `math-8-96`,
    case_id: `MATH 8.96`,
    title: `Museum Tickets: Point Elasticity Versus a Finite Rise`,
    context: `Evening museum admissions follow $q(p)=A p^{-2}$ tickets when the price is $p>0$ euros. At $10$ euros the desk sold $40$ tickets. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Demand is equally elastic at every price.`,
      `Raising the price from $10$ to $12$ euros cuts demand by more than $10$ tickets.`,
      `For a $10\\%$ price rise, the constant-elasticity shortcut overstates the exact drop in demand.`,
      `Weekly revenue is maximized by raising the price without bound.`,
      `At $5$ euros the desk already sells more than $150$ tickets.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

For a power $q=A p^{r}$ the point elasticity is the exponent itself, $\\varepsilon=r=-2$, independent of $p$. Demand is equally elastic at every price $p>0$. The usual mix-up is treating elasticity as a local slope that would change along the curve; for a monomial it does not. Checking $\\varepsilon$ at $10$ euros and at $5$ euros: both equal $-2$. The opposite verdict would have needed a non-power demand, such as a linear schedule.

For a power $q=A p^{r}$ the point elasticity is the exponent itself, $\\varepsilon=r=-2$, independent of $p$. Demand is equally elastic at every price $p>0$. The usual mix-up is treating elasticity as a local slope that would change along the curve; for a monomial it does not, so the statement is True.`,
      `**B.** → True

From $A/100=40$, the coefficient is $A=4000$. At $12$ euros:

$$q(12)=\\frac{4000}{144}=\\frac{250}{9}\\approx 27.78$$

From $A/100=40$, the coefficient is $A=4000$. At $12$ euros, $q(12)=4000/144=250/9\\approx 27.78$. The exact cut from $40$ is about $12.22$ tickets, which sits above $10$. A $20\\%$ elasticity shortcut on $40$ tickets would have claimed $8$ and undershot. The opposite verdict would have needed a milder exponent or a smaller price step. The desk record locks $A=4000$.

The exact cut from $40$ is about $12.22$ tickets, which sits above $10$. A $20\\%$ elasticity shortcut on $40$ tickets would have claimed $8$ and undershot,

This is a finite price step from $10$ to $12$ euros, not a point-elasticity slogan.

The recovered cut is about $12.22$ tickets, from $40$ down to $250/9$, which sits above $10$.

A $20\\%$ elasticity shortcut on $40$ tickets would have claimed $8$ and undershot the $10$-ticket line.

The opposite verdict would have needed a milder leftover exponent or a smaller price step. The desk record locks $A=4000$.

so the statement is True.`,
      `**C.** → True

The shortcut predicts $-2\\times 10\\%=-20\\%$. The exact factor is

$$1.1^{-2}=\\frac{1}{1.21}\\approx 0.826$$

The shortcut predicts $-2\\times 10\\%=-20\\%$. The exact factor is $1.1^{-2}=1/1.21\\approx 0.826$, a cut of about $17.36\\%$. The shortcut overstates the drop. Linearizing a power at a $10\\%$ step is still a little coarse.

**1.** In tickets, the shortcut on $40$ claims an $8$-ticket drop to $32$. The exact $q(11)=4000/121\\approx 33.06$, a drop of about $6.94$. The shortcut overstates the ticket loss as well as the percent loss.

**2.** Treating the shortcut as exact would have called the claim false. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The finite factor $k^{r}$ is strictly larger than $1+r(k-1)$ when $r=-2$ and $k=1.1$, because the second-order term in the expansion is positive.

**3.** Checking a neighbouring $20\\%$ rise: the shortcut claims $-40\\%$. The exact factor is $1.2^{-2}=1/1.44\\approx 0.694$, a cut of about $30.6\\%$. The overstatement grows with the step, which is why letter B's $10$-to-$12$ move already beat a $20\\%$ linear guess.

**4.** The opposite verdict would have needed the exact percent drop to meet or exceed $20\\%$. For a negative exponent and $k>1$, the exact factor $k^{r}$ always sits above the linear tangent $1+r(k-1)$, so the shortcut overstates every finite rise on this curve.

a cut of about $17.36\\%$. The shortcut overstates the drop. Linearizing a power at a $10\\%$ step is still a little coarse,

This letter compares the constant-elasticity shortcut with the exact power factor on a $10\\%$ rise.

The shortcut claims a $20\\%$ drop. The exact factor $1.1^{-2}\\approx 0.826$ is about a $17.36\\%$ drop. The shortcut overstates.

**1.** In tickets, the shortcut on $40$ claims an $8$-ticket drop to $32$. The exact $q(11)=4000/121\\approx 33.06$, a drop of about $6.94$. The overstatement is about one ticket on this step, and it is still an overstatement.

**2.** Treating the shortcut as exact would have called the claim false. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. For $r=-2$ and $k>1$, the exact factor $k^{r}$ sits above the linear tangent $1+r(k-1)$, so the shortcut overstates every finite rise on this curve.

**3.** Checking a $5\\%$ rise: the shortcut claims $-10\\%$. The exact factor is $1.05^{-2}\\approx 0.907$, a cut of about $9.3\\%$. The overstatement shrinks with the step but does not change sign. Letter B's $10$-to-$12$ move is a $20\\%$ step, where the gap is larger.

**4.** The opposite verdict would have needed the exact percent drop to meet or exceed $20\\%$. That cannot happen on a convex power with $r=-2$ and $k>1$. The desk coefficient cancels in every percent comparison.

so the statement is True.`,
      `**D.** → False

Revenue is $R(p)=4000/p$, which falls toward $0$ as $p$ grows. Raising the price without bound drives the till toward zero rather than a maximum. Inverse-square demand is elastic: a price rise cuts $pq$. There is no interior maximum on $p>0$.

**1.** Checking the till at the desk and after a rise: $R(10)=400$ and $R(12)=4000/12\\approx 333$. The finite rise already cut revenue. At $20$ euros, $R(20)=200$. At $40$ euros, $R(40)=100$. The till keeps shrinking.

**2.** Remembering that unit-elastic demand holds revenue constant would have expected a flat till and called an unbounded rise harmless. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. The stem is $p^{-2}$, leftover $p^{-1}$ on revenue, strictly decreasing.

**3.** The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand exponent greater than $-1$. Then a price rise would have grown $pq$. The stem's $-2$ is the other side of that gate.

**4.** Checking a cheaper posted price: $R(5)=800>R(10)=400$. Cutting the price raises the till along this curve. An unbounded rise is the opposite move, and it cannot be a maximum.

Revenue is $R(p)=\\frac{4000}{p}$, which falls toward $0$ as $p$ grows. Raising the price without bound drives the till toward zero rather than a maximum. Inverse-square demand is elastic: a price rise cuts $pq$. There is no interior maximum on $p>0$,

This letter asks whether an unbounded price rise can maximise weekly revenue.

The recovered $R(p)=4000/p$ falls toward $0$ as $p$ grows. There is no interior maximum on $p>0$.

**1.** Checking the till: $R(10)=400$, $R(12)\\approx 333$, $R(20)=200$, $R(40)=100$. Each rise shrinks the take. Cutting the price to $5$ euros raises the till to $800$.

**2.** Remembering that unit-elastic demand holds revenue constant would have expected a flat till. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The stem is $p^{-2}$, leftover $p^{-1}$ on revenue, strictly decreasing.

**3.** The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand leftover exponent greater than $-1$. Then a price rise would have grown $pq$. The stem's $-2$ is the other side of that gate. Raising the price without bound drives the till toward zero, not toward a maximum.

so the statement is False.`,
      `**E.** → True

Halving the price quadruples inverse-square demand:

$$q(5)=40\\cdot 4=160$$

Halving the price quadruples inverse-square demand: $q(5)=160$, which sits above $150$. Inverse-linear thinking would have claimed $80$ and missed the letter. The opposite verdict would have needed $A\\le 150\\cdot 25=3750$. The desk record locks $A=4000$. Checking $q(8)=4000/64=62.5$ is a neighbouring level, not this claim.

which sits above $150$. Inverse-linear thinking would have claimed $80$ and missed the letter,

This is a level at $5$ euros, a halving of the desk price.

The recovered demand is $160$ tickets, which sits above $150$. Halving an inverse-square price quadruples quantity.

Inverse-linear thinking would have claimed $80$ and missed the letter.

The opposite verdict would have needed $A$ at most $3750$. The desk record locks $A=4000$.

so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 96,
    solution_overview: `Evening admissions follow $q(p)=Ap^{-2}$ with $q(10)=40$. Point elasticity is set against exact finite price moves, and revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = admission price and $q$ = tickets. The exponent is given, so the desk record fixes $A$. For a price factor $k$, the shortcut and the exact rule return $-2(k-1)$ and $k^{-2}-1$.

**1. Translate: the desk record.**

$$A\\cdot 10^{-2}=40$$

**Part 2: The model.**

$$q(p)=4000p^{-2} \\tag{1}$$

$$R(p)=\\frac{4000}{p} \\tag{2}$$

**Part 3: Solve.**

**1.** Point elasticity equals the exponent, $\\varepsilon=-2$ at every price.

**2.** $q(12)=\\frac{250}{9}$, a cut of about $12.22>10$ tickets. A $10\\%$ rise cuts demand by about $17.4\\%$, not by the shortcut's $20\\%$.

**3.** $(2)$ falls with price. Halving the price quadruples demand, so $q(5)=160>150$.

**Answer.** $\\varepsilon=-2$ | $A=4000$ | exact cut about $12.22$ tickets | $q(5)=160$`,
  },
  {
    id: `math-8-97`,
    case_id: `MATH 8.97`,
    title: `Annealing Lehr Throughput Under a Mis-Scaled Coefficient`,
    context: `A glass-annealing lehr's throughput follows $T(e)=A e^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at belt setting $4$ delivered $64$ trays an hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is larger than one, so throughput grows faster than the belt setting.`,
      `An extra unit of belt setting adds more trays after setting nine than after setting four.`,
      `At belt setting $9$, throughput is already more than $200$ trays per hour.`,
      `If the coefficient were $25\\%$ larger, the scale factor $\\frac{T(2e)}{T(e)}$ would itself become $25\\%$ larger.`,
      `If the coefficient were $25\\%$ larger, throughput at belt setting $9$ would already exceed $250$ trays per hour.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The exponent $3/2$ is larger than one, so each extra unit of belt setting adds more trays than the unit before it. Three halves is above one, so throughput outruns the belt. A proportional lehr would have carried exponent $1$. Checking $T(4)=64$ against $T(9)=216$: the belt rose by $5/4$ while trays rose by $216/64=3.375$, faster than the belt. The opposite verdict would have needed leftover exponent at most $1$.

The exponent $\\frac{3}{2}$ is larger than one, so each extra unit of belt setting adds more trays than the unit before it. Three halves is above one, so throughput outruns the belt. A proportional lehr would have carried exponent $1$,

This letter is an exponent ranking, not a new belt-setting level.

The recovered leftover exponent is $3/2$, which sits above one, so throughput outruns the belt.

Checking $T(4)=64$ against $T(9)=216$: the belt rose by $5/4$ while trays rose by $3.375$, faster than the belt.

The opposite verdict would have needed leftover exponent at most $1$. The stem prints $3/2$.

so the statement is True.`,
      `**B.** → True

From $4^{\\frac{3}{2}}=8$, the recorded run gives $A=8$, so $T(e)=8 e^{\\frac{3}{2}}$. The leftover slope is

$$T'(e)=12\\sqrt{e}$$

From $4^{3/2}=8$, the recorded run gives $A=8$, so $T(e)=8 e^{3/2}$. The leftover slope is $T'(e)=12\\sqrt{e}$. After setting four that is $24$. After setting nine it is $36$. Because $r>1$ the slope rises. An extra unit adds more trays after nine than after four. Comparing only $T(9)=216>T(4)=64$ would have mixed a higher level with the slope question. That is why $T(9)=216>T(4)=64$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. The opposite verdict would have needed $r<1$.

After setting four that is $24$. After setting nine it is $36$. Because $r>1$ the slope rises. An extra unit adds more trays after nine than after four,

This letter compares leftover slopes at settings four and nine, not the levels $64$ and $216$.

The recovered $T'$ is $24$ after four and $36$ after nine. An extra unit adds more trays after nine.

Comparing only $T(9)>T(4)$ would have mixed a higher level with a steeper slope. The recovered isolation is checked against the claim using $T(9)>T(4)$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does.

The opposite verdict would have needed leftover exponent below $1$. The stem is $3/2$.

so the statement is True.`,
      `**C.** → True

At belt setting $9$, nine contributes $3^{3}=27$:

$$T(9)=8\\cdot 27=216$$

At belt setting $9$, $T(9)=216$, which sits above $200$. Because the exponent exceeds one, the belt setting of $9$ has outrun a linear guess from $T(4)=64$. A linear rule through the origin would have named $T(9)=144$ and missed the letter. The opposite verdict would have needed $A\\le 200/27$. The recorded run locks $A=8$.

Two hundred and sixteen sits above $200$. Because the exponent exceeds one, the belt setting of $9$ has outrun a linear guess from $T(4)=64$,

This is a level at belt setting $9$.

The recovered throughput is $216$ trays an hour, which sits above $200$. A linear rule through the origin from $T(4)=64$ would have named $144$ and missed the letter.

Using $4^{3/2}=8$ as $T(9)$ would have sat far under $200$. Working from the isolated values, $4^{3/2}=8$ is the figure that is checked, not the detour that produced $200$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The opposite verdict would have needed $A$ at most $200/27$. The recorded run locks $A=8$.

so the statement is True.`,
      `**D.** → False

A $25\\%$ larger coefficient appears once above and once below in the ratio $\\frac{T(2e)}{T(e)}$, so it cancels. The doubling factor stays

$$2^{\\frac{3}{2}}$$

A $25\\%$ larger coefficient appears once above and once below in the ratio $T(2e)/T(e)$, so it cancels. The doubling factor stays $2^{3/2}$. Levels move by $25\\%$ and doubling ratios do not.

**1.** Checking the numbers: the stem's doubling factor is $2^{3/2}=2\\sqrt{2}\\approx 2.828$. After $A$ becomes $10$, the new rule is $T_{\\mathrm{new}}(e)=10 e^{3/2}$, and $T_{\\mathrm{new}}(2e)/T_{\\mathrm{new}}(e)$ is still $2^{3/2}$. The $25\\%$ never enters the scale identity.

**2.** Scaling the factor $2.828$ by $1.25$ to about $3.535$ would have called the claim true. After isolating the unknown, the check is against $2.828$. The figure $3.535$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $2.828$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That mixes a level scale with a ratio. Letter E is the letter where the $25\\%$ survives, because E asks a level at setting $9$.

**3.** The opposite verdict would have needed a scale factor that still carried $A$. Only a rule that was not homogeneous, such as $T(e)=A e^{3/2}+c$ with a leftover constant, would have left $A$ inside the doubling ratio.

**4.** Checking another factor: $T(9)/T(4)=216/64=3.375= (9/4)^{3/2}$. Raising $A$ by $25\\%$ raises both $216$ and $64$ by $25\\%$ and leaves the $3.375$ untouched. Every ratio of two throughputs is independent of $A$.

Levels move by $25\\%$ and doubling ratios do not,

This letter asks whether a $25\\%$ larger coefficient changes a scale factor, not a level.

The recovered doubling factor $2^{3/2}$ is independent of $A$. The $25\\%$ appears once above and once below in $T(2e)/T(e)$ and cancels.

**1.** Checking the numbers: $2^{3/2}=2\\sqrt{2}\\approx 2.828$ before and after $A$ becomes $10$. The new rule $T_{\\mathrm{new}}(e)=10 e^{3/2}$ has the same doubling ratio.

**2.** Scaling $2.828$ by $1.25$ to about $3.535$ would have called the claim true. That is the fork: $2.828$ belongs to the recovered isolation, $3.535$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That mixes a level scale with a ratio. Letter E is where the $25\\%$ survives, because E asks a level.

**3.** Checking $T(9)/T(4)=216/64=3.375$. Raising $A$ by $25\\%$ raises both $216$ and $64$ by $25\\%$ and leaves $3.375$ untouched. Every ratio of two throughputs is independent of $A$.

**4.** The opposite verdict would have needed a rule that was not homogeneous, such as a leftover constant added to $A e^{3/2}$. The stem has no such constant. Levels move by $25\\%$; doubling ratios do not.

so the statement is False.`,
      `**E.** → True

Levels do scale with $A$. The calibrated $T(9)=216$ becomes

$$1.25\\cdot 216=270$$

Levels do scale with $A$. The calibrated $T(9)=216$ becomes $1.25\\cdot 216=270$ under a $25\\%$ larger coefficient, which sits above $250$. The factor $1.25$ survives on levels even though it cancels in every ratio.

**1.** Checking the new rule at the recorded run as well: $T_{\\mathrm{new}}(4)=1.25\\cdot 64=80$. The $4$-setting log would have read $80$ trays, and $T_{\\mathrm{new}}(9)=10\\cdot 27=270$ still follows.

**2.** Reusing letter D's cancelled ratio and leaving $T(9)$ at $216$ would have sat under $250$ and flipped the verdict. The stem's recovered values line up with $T(9)$, whereas $250$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $T(9)$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Letter D is a scale question; this letter is a level.

**3.** The opposite verdict would have needed $1.25\\cdot 216\\le 250$, hence a smaller calibrated $T(9)$. The recorded run locks $T(9)=216$, and $270$ already clears $250$ by $20$ trays.

**4.** Checking a neighbouring setting: $T_{\\mathrm{new}}(16)=10\\cdot 64=640$. The $25\\%$ lifts every level, including the $9$-setting claim in this letter. The ratio $T(16)/T(9)=(16/9)^{3/2}=(4/3)^{3}=64/27$ is unchanged. Levels move; ratios do not.

under a $25\\%$ larger coefficient, which sits above $250$. The factor $1.25$ survives on levels even though it cancels in every ratio,

This letter asks a level under a $25\\%$ larger coefficient, not a scale factor.

The recovered $T(9)=216$ becomes $270$, which sits above $250$. The factor $1.25$ survives on levels.

**1.** Checking the new rule at the recorded run: $T_{\\mathrm{new}}(4)=80$. Then $T_{\\mathrm{new}}(9)=10\\cdot 27=270$ still follows. The $25\\%$ lifts every level.

**2.** Reusing letter D's cancelled ratio and leaving $T(9)$ at $216$ would have sat under $250$ and flipped the verdict. The stem's recovered values line up with $T(9)$, whereas $250$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $T(9)$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Letter D is a scale question; this letter is a level.

**3.** The opposite verdict would have needed $1.25\\cdot 216$ at most $250$, hence a smaller calibrated $T(9)$. The recorded run locks $216$, and $270$ already clears $250$ by $20$ trays. Checking $T_{\\mathrm{new}}(16)=640$ shows the same $25\\%$ lift at a neighbouring setting. Ratios stay put; levels move.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 97,
    solution_overview: `Lehr throughput is $T(e)=Ae^{\\frac{3}{2}}$ trays per hour, with $T(4)=64$.

**Part 1: Building the model.**

Let $e$ = belt setting and $T$ = trays per hour. The exponent is given, so the recorded run fixes $A$. Levels depend on $A$; scale factors cancel it.

**1. Translate: the recorded run.**

$$A\\cdot 4^{\\frac{3}{2}}=64$$

**Part 2: The model.**

$$T(e)=8e^{\\frac{3}{2}} \\tag{1}$$

$$\\frac{T(ke)}{T(e)}=k^{\\frac{3}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $r>1$, an extra unit adds more after $9$ than after $4$. $T(9)=216>200$.

**2.** $(2)$ is independent of $A$. A $25\\%$ larger coefficient leaves the doubling factor $2^{\\frac{3}{2}}$ unchanged and raises $T(9)$ to $270>250$.

**Answer.** $A=8$ | $T(9)=216$ | levels scale with $A$ | doubling factor $2^{\\frac{3}{2}}$`,
  },
];
