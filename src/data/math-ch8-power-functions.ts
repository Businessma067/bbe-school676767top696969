/**
 * Chapter 8 — Power functions (subsections 8 and 8.5).
 * Core bank: Sydsæter §4.8 style recovery / scaling / composition.
 * 8.5 exam-style tasks from math-ch8-exam.json (textual mini-stems).
 */

import type { MathTask } from "@/data/math-chapters";
import ch8Exam from "@/data/math-ch8-exam.json";

export const MATH_CH8_SUBSECTIONS = [
  { id: "8", title: "Power functions" },
  { id: "8.5", title: "Exam-Style" },
] as const;

const MATH_CH8_CORE: MathTask[] = [
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

Name the recovered power rule, then substitute the claimed input.

The mass at a named side is the coefficient times the cube of that side:

$$M(2)=5\\cdot 2^{3}$$

$$2^{3}=8$$

$$M(2)=5\\cdot 8$$

$$M(2)=40$$

The claimed mass is $40$ grams.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Cube the side first, then apply the coefficient:

$$3^{3}=27$$

$$M(3)=5\\cdot 27$$

$$M(3)=135$$

The claimed $125$ is

$$5^{3}$$

, cubing the coefficient instead of the side. The two figures disagree.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The scale factor of a power function depends only on the exponent, because the coefficient cancels:

$$\\frac{M(2s)}{M(s)}=\\frac{5(2s)^{3}}{5s^{3}}$$

$$\\frac{M(2s)}{M(s)}=2^{3}$$

$$\\frac{M(2s)}{M(s)}=8$$

$$2^{3}=8$$

Doubling the side multiplies the mass by $8$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

At side $1$ the cube is $1$, so the coefficient is the mass itself:

$$M(1)=5\\cdot 1^{3}$$

$$1^{3}=1$$

$$M(1)=5\\cdot 1$$

$$M(1)=5$$

The mass is $5$ grams.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The rule at

$$s=4$$

 is a single evaluation:

$$M(4)=5\\cdot 4^{3}$$

$$4^{3}=64$$

$$M(4)=5\\cdot 64$$

$$M(4)=320$$

The claimed $240$ does not equal $320$

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `A cube resin block has mass $M(s)=5s^{3}$ grams for side length $s>0$ centimetres.

The rule is a power function with coefficient $5$ and exponent $3$. A level is the coefficient times the cube of the side. A scale factor is the cube of the width multiplier, because the coefficient cancels:

$$\\frac{M(ks)}{M(s)}=k^{3}$$`,
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

Name the recovered power rule, then substitute the claimed input.

An exponent of

$$\\frac{1}{2}$$

 is a square root, and the square root of zero is $0$:

$$D(0)=6\\cdot 0^{\\frac{1}{2}}$$

$$0^{\\frac{1}{2}}=\\bigl(0^{\\frac{1}{2}}\\bigr)^{1}$$

$$0^{\\frac{1}{2}}=0$$

$$0^{1}=0$$

$$D(0)=6\\cdot 0$$

$$D(0)=0$$

$$D(0)=0^{\\frac{1}{2}}$$

The load rule returns a real value at

$$t=0$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

A negative exponent places time in a denominator:

$$R(t)=\\frac{50}{t^{2}}$$

At

$$t=0$$

 that denominator is zero, and division by zero is undefined. The turbidity rule has no value at the reset.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The exponent

$$\\frac{1}{2}$$

 is an even root, and no real number squares to a negative:

$$D(-4)=6\\sqrt{-4}$$

There is no real load at

$$t=-4.$$

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Square the time in the denominator, then divide:

$$R(4)=\\frac{50}{4^{2}}$$

$$R(4)=\\frac{50}{16}$$

$$R(4)=3.125$$

The reading is $3.125$ units.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

The square root is taken before the coefficient:

$$D(9)=6\\cdot 9^{\\frac{1}{2}}$$

$$9^{\\frac{1}{2}}=\\bigl(9^{\\frac{1}{2}}\\bigr)^{1}$$

$$9^{\\frac{1}{2}}=3$$

$$3^{1}=3$$

$$D(9)=6\\cdot 3$$

$$D(9)=18$$

$$D(9)=54^{\\frac{1}{2}}$$

The load is $18$ kilograms.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `The gauge reports load $D(t)=6t^{\\frac{1}{2}}$ kilograms and turbidity $R(t)=50t^{-2}$ units for $t$ hours since the reset.

The two rules are power functions in the same variable with opposite signs on the exponent. A nonnegative exponent $\\frac{1}{2}$ is an even root, so load is defined for $t\\ge 0$. A negative exponent is a reciprocal, so turbidity is

$$R(t)=\\frac{50}{t^{2}}$$

and needs $t>0$.`,
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

Name the recovered power rule, then substitute the claimed input.

A negative exponent puts distance in a denominator:

$$S(x)=\\frac{80}{x^{3}}$$

As

$$x\\to\\infty$$

 that denominator grows without bound while the numerator stays $80$, so $S(x)\\to 0$.

Signal strength tends to $0$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

Near the mast a small positive $x$ makes the denominator $x^{3}$ arbitrarily small, so $\\frac{80}{x^{3}}$ becomes arbitrarily large.

Strength grows without bound as

$$x\\to 0^{+}$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The $2$ in $T(x)=2x^{\\frac{1}{2}}$ multiplies the power; it does not cap the output. After four minutes:

$$T(4)=2\\cdot 4^{\\frac{1}{2}}$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{1}=2$$

$$T(4)=2\\cdot 2$$

$$T(4)=4$$

$$T(4)=8^{\\frac{1}{2}}$$

Already $4>2$, and a positive exponent keeps climbing. There is no finite ceiling.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Cube the distance in the denominator, then divide:

$$S(2)=\\frac{80}{2^{3}}$$

$$S(2)=\\frac{80}{8}$$

$$S(2)=10$$

The strength is $10$ millivolts.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

A positive exponent keeps

$$T(x)=2x^{\\frac{1}{2}}$$

 in the numerator. The square root of a shrinking positive input shrinks as well, so

$$T(x)\\to 0$$

 as

$$x\\to 0^{+}$$

.

The count approaches $0$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 3,
    solution_overview: `The beacon obeys $S(x)=80x^{-3}$ millivolts and the reader obeys $T(x)=2x^{\\frac{1}{2}}$ thousand packets, both on $x>0$.

A negative exponent is a reciprocal power, so

$$S(x)=\\frac{80}{x^{3}}$$

A positive exponent keeps the variable in the numerator:

$$T(x)=2x^{\\frac{1}{2}}$$

The two extremes are governed by those exponents alone.`,
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

Name the recovered power rule, then substitute the claimed input.

An exponent of $-1$ writes order size in the denominator:

$$U(q)=\\frac{600}{q}$$

A larger positive $q$ makes a strictly smaller quotient. Overhead spread is strictly decreasing for $q>0$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

The numerator $600$ and the order size $q$ are both positive for every $q>0$, so $U(q)=\\frac{600}{q}$ stays positive. Falling towards zero is not the same as becoming negative.

The spread is never negative.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The exponent

$$\\frac{2}{3}$$

 is positive, so a larger order size raises a larger power, and the coefficient $3$ preserves that order.

Finishing hours are strictly increasing for $q>0$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Divide the fixed overhead by eight units:

$$U(8)=\\frac{600}{8}$$

$$U(8)=75$$

The claimed $80$ is not this value

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

Take the cube root of $8$, then square:

$$8^{\\frac{2}{3}}=\\bigl(8^{\\frac{1}{3}}\\bigr)^{2}$$

$$8^{\\frac{1}{3}}=2$$

$$2^{2}=4$$

$$8^{\\frac{1}{3}}=\\bigl(8^{\\frac{1}{3}}\\bigr)^{1}$$

$$2^{1}=2$$

$$8^{\\frac{2}{3}}$$

$$8^{\\frac{2}{3}}=2^{2}$$

$$8^{\\frac{2}{3}}=4$$

$$V(8)=3\\cdot 4$$

$$V(8)=12$$

The finishing labour is $12$ hours.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `The workshop spreads overhead $U(q)=600q^{-1}$ euros per unit and needs $V(q)=3q^{\\frac{2}{3}}$ finishing hours for order size $q>0$.

Both rules are power functions on $q>0$ with positive coefficients. The negative exponent writes order size in a denominator:

$$U(q)=\\frac{600}{q}$$

The positive exponent $\\frac{2}{3}$ keeps finishing hours in a numerator. The sign of the exponent decides the direction of each rule; the positivity of the coefficient decides the sign of each output.`,
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

Calibrate the scale factor against the audited shift named in the overview:

$$Q(25)=40$$

Solve that level for the unknown coefficient $A$:

$$25^{1/2}$$

$$Q(25)=5$$

$$A\\cdot 5=40$$

$$A=8$$

The claim asserts that same coefficient

.

So the statement is True.`,
    `**B.** → True

The overview recovered

$$A=8$$

 At $100$ staff the square root is $10$:

$$Q(100)=8\\cdot 100^{\\frac{1}{2}}$$

$$100^{\\frac{1}{2}}=\\bigl(100^{\\frac{1}{2}}\\bigr)^{1}$$

$$100^{\\frac{1}{2}}=10$$

$$10^{1}=10$$

$$Q(100)=8\\cdot 10$$

$$Q(100)=80$$

$$Q(100)=800^{\\frac{1}{2}}$$

The output is $80$ crates per hour.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

A staffing scale factor is fixed by the exponent alone, because $A$ cancels:

$$\\frac{Q(4s)}{Q(s)}=\\frac{A(4s)^{\\frac{1}{2}}}{A s^{\\frac{1}{2}}}$$

$$\\frac{Q(4s)}{Q(s)}=4^{\\frac{1}{2}}$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{1}=2$$

$$\\frac{Q(4s)}{Q(s)}=2$$

Quadrupling the staffing doubles the output.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

A doubled coefficient appears once above and once below in the ratio, so it cancels:

$$\\frac{(2A)(4s)^{\\frac{1}{2}}}{(2A)s^{\\frac{1}{2}}}=4^{\\frac{1}{2}}$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{1}=2$$

$$\\frac{(2A)(4s)^{\\frac{1}{2}}}{(2A)s^{\\frac{1}{2}}}=2$$

$$=2$$

The ratio stays $2$. Doubling $A$ would double every output, not this scale factor.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$A=8$$

 At four staff the square root is $2$:

$$Q(4)=8\\cdot 4^{\\frac{1}{2}}$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{1}=2$$

$$Q(4)=8\\cdot 2$$

$$Q(4)=16$$

$$Q(4)=32^{\\frac{1}{2}}$$

The claimed $20$ is not $16$.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `The bottling line follows $Q(s)=A s^{\\frac{1}{2}}$ crates per hour, and $25$ staff gave $40$ crates per hour.

The exponent is given, so the audited shift fixes the coefficient:

$$A\\cdot 25^{\\frac{1}{2}}=40$$

$$5A=40$$

$$A=8$$

The recovered output is $Q(s)=8s^{\\frac{1}{2}}$. A staffing multiplier $k$ multiplies output by $k^{\\frac{1}{2}}$, because $A$ cancels.`,
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

Name the recovered power rule, then substitute the claimed input.

Substitute

$$n=2$$

 into each index:

$$F(2)=2\\cdot 2^{2}$$

$$2^{2}=4$$

$$F(2)=2\\cdot 4$$

$$F(2)=8$$

$$G(2)=2^{3}$$

$$2^{3}=8$$

$$G(2)=8$$

The claim wants $8$ and $6$. The first figure matches, but $G(2)=8$, not $6$.

So the statement is False.`,
    `**B.** → True

The overview factored

$$G(n)-F(n)=n^{2}(n-2)$$

For every $n>0$ the square

$$n^{2}$$

 is positive, so the sign of the difference is the sign of $n-2$. Whenever $n>2$ that factor is positive, hence $G(n)>F(n)$.

The cubic index exceeds the quadratic one for every $n>2$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

On $0<n<2$ the overview's factor $n-2$ is negative, while

$$n^{2}$$

 is still positive, so $G-F<0$ and therefore $F(n)>G(n)$. A single interior check:

$$F(1)=2
$$

$$G(1)=1$$

The quadratic index leads throughout $0<n<2$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

The overview simplified the ratio to

$$\\frac{n}{2}$$

. As $n$ grows without bound, so does $\\frac{n}{2}$. Already at $n=20$:

$$\\frac{G(20)}{F(20)}=\\frac{20}{2}$$

$$\\frac{G(20)}{F(20)}=10$$

The ratio tends to infinity, not to $1$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Substitute

$$n=3$$

 into each index:

$$F(3)=2\\cdot 3^{2}$$

$$3^{2}=9$$

$$F(3)=2\\cdot 9$$

$$F(3)=18$$

$$G(3)=3^{3}$$

$$3^{3}=27$$

$$G(3)=27$$

The quadratic figure matches, but the cubic index is $27$, not the claimed $24$.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `Two maintenance indices for $n>0$ machines are $F(n)=2n^{2}$ and $G(n)=n^{3}$.

Subtracting and factoring turns the race into one sign question:

$$G(n)-F(n)=n^{2}(n-2)$$

Dividing instead of subtracting shows how the gap behaves as the line grows:

$$\\frac{G(n)}{F(n)}=\\frac{n}{2}$$

On $n>0$ the square $n^{2}$ is positive, so the sign of $G-F$ is the sign of $n-2$.`,
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

Name the recovered power rule, then substitute the claimed input.

The exponent

$$\\frac{1}{2}$$

 is a square root, and

$$0^{2}=0$$

:

$$L(0)=0^{\\frac{1}{2}}$$

$$0^{\\frac{1}{2}}=\\bigl(0^{\\frac{1}{2}}\\bigr)^{1}$$

$$0^{\\frac{1}{2}}=0$$

$$0^{1}=0$$

$$L(0)=0$$

$$L(0)=\\sqrt{0}$$

The transform returns $0$ at a raw reading of zero.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

An even root refuses a negative raw reading. No real number squares to a negative:

$$L(-4)=\\sqrt{-4}$$

There is no real value at

$$x=-4.$$

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The exponent

$$\\frac{1}{3}$$

 is an odd root, so a negative reading is allowed. Cubing gives the inverse:

$$(-2)^{3}=-8$$

$$M(-8)=(-8)^{\\frac{1}{3}}$$

$$M(-8)=-2$$

The cube root of $-8$ is $-2$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

A negative exponent is a reciprocal:

$$N(x)=\\frac{1}{\\sqrt{x}}$$

At

$$x=0$$

 the denominator is

$$\\sqrt{0}=0,$$ and division by zero is undefined. The transform has no value at

$$x=0.$$

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

A negative exponent puts the root in the denominator:

$$N(4)=4^{-\\frac{1}{2}}$$

$$N(4)=\\frac{1}{\\sqrt{4}}$$

$$N(4)=\\frac{1}{2}$$

The claimed $2$ is $\\sqrt{4}$, which drops the minus in the exponent. The transform returns $\\frac{1}{2}$, not $2$.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `A calibration sheet applies $L(x)=x^{\\frac{1}{2}}$, $M(x)=x^{\\frac{1}{3}}$ and $N(x)=x^{-\\frac{1}{2}}$ to a raw sensor reading $x$.

All three transforms are power functions with coefficient $1$. An even root needs a nonnegative reading, while an odd root accepts every real reading. A negative exponent moves the root into a denominator:

$$N(x)=\\frac{1}{\\sqrt{x}}$$

so $L$ is defined for $x\\ge 0$, $M$ is defined for all real $x$, and $N$ needs $x>0$.`,
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

Name the recovered power rule, then substitute the claimed input.

Rewrite the negative exponent as a root in the denominator, then substitute four cartridges:

$$P(4)=\\frac{12}{\\sqrt{4}}$$

$$P(4)=\\frac{12}{2}$$

$$P(4)=6$$

The drop is $6$ kilopascals.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

The drop is a positive constant over a strictly increasing root:

$$P(x)=\\frac{12}{\\sqrt{x}}$$

On $x>0$ the numerator stays at $12$ while $\\sqrt{x}$ grows with $x$, so the quotient falls at every larger cartridge count.

The drop is strictly decreasing on $x>0$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

As $x$ grows, the denominator $\\sqrt{x}$ grows without bound while the numerator stays at $12$, so $P(x)\\to 0$. Setting $\\frac{12}{\\sqrt{x}}=0$ would require $12=0$, which never happens, so no $x>0$ returns a drop of $0$.

The drop approaches $0$ without reaching it.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

A tiny positive cartridge count puts a tiny number in the denominator:

$$P(0.01)=\\frac{12}{\\sqrt{0.01}}$$

$$P(0.01)=\\frac{12}{0.1}$$

$$P(0.01)=120$$

The denominator $\\sqrt{x}$ can be made arbitrarily small as

$$x\\to 0^{+}$$

, so $P(x)$ has no finite limit.

The drop grows without bound rather than settling.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

Nine cartridges give a whole square root:

$$P(9)=\\frac{12}{\\sqrt{9}}$$

$$P(9)=\\frac{12}{3}$$

$$P(9)=4$$

The drop is $4$ kilopascals.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `A filter bank's pressure drop is $P(x)=12x^{-\\frac{1}{2}}$ kilopascals for $x>0$ cartridges in service.

A negative exponent puts the root in a denominator:

$$P(x)=\\frac{12}{\\sqrt{x}}$$

The negative sign makes the drop fall on $x>0$, and the even root closes the domain at zero from below. Multiplying the bank by $k$ multiplies the drop by $k^{-\\frac{1}{2}}$.`,
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

Keep the stated domain in force while you evaluate the model.

The overview recovered

$$A=5$$

 from

$$9A=45$$

The claimed $15$ is $\\frac{45}{3}$, which divides by the radius instead of by its square. The coefficient is $5$, not $15$.

So the statement is False.`,
    `**B.** → True

Compare the recovered figure with the value named in the claim.

The overview recovered

$$A=5$$

 At radius $6$ metres:

$$y(6)=5\\cdot 6^{2}$$

$$6^{2}=36$$

$$y(6)=5\\cdot 36$$

$$y(6)=180$$

The panel needs $180$ litres.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

A fifty percent increase in radius is the width multiplier

$$k=1.5$$

. For a square power the coefficient cancels:

$$\\frac{y(1.5r)}{y(r)}=\\frac{A(1.5r)^{2}}{A r^{2}}$$

$$\\frac{y(1.5r)}{y(r)}=1.5^{2}$$

$$5^{2}=25$$

$$\\frac{y(1.5r)}{y(r)}=1.25$$

$$\\frac{y(1.5r)}{y(r)}=2.25$$

The primer is multiplied by $2.25$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Use the recovered constants; do not rebuild the calibration.

The overview recovered

$$A=5$$

At a radius of one metre the square is $1$, so the requirement equals the coefficient:

$$y(1)=5\\cdot 1^{2}$$

$$1^{2}=1$$

$$y(1)=5\\cdot 1$$

$$y(1)=5$$

A one-metre panel needs $5$ litres.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Halving the radius is the width multiplier

$$k=0.5,$$ and the exponent $2$ acts on that whole factor:

$$\\frac{y(0.5r)}{y(r)}=0.5^{2}$$

$$5^{2}=25$$

$$\\frac{y(0.5r)}{y(r)}=0.25$$

The primer is multiplied by $0.25$, not by $0.5$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 9,
    solution_overview: `Primer for a circular panel is $y(r)=A r^{2}$ litres for radius $r>0$ metres, with $y(3)=45$ recorded.

The exponent is given, so the recorded job fixes the coefficient:

$$A\\cdot 3^{2}=45$$

$$9A=45$$

$$A=5$$

The recovered primer is $y(r)=5r^{2}$. Multiplying the radius by $k$ multiplies the requirement by $k^{2}$, because $A$ cancels.`,
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

Name the recovered power rule, then substitute the claimed input.

Square the speed, then apply the coefficient:

$$E(10)=0.5\\cdot 10^{2}$$

$$10^{2}=100$$

$$E(10)=0.5\\cdot 100$$

$$E(10)=0.500$$

$$E(10)=50$$

The index at

$$v=10$$

 is $50$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

Raising the speed from $10$ to $20$ is the multiplier $k=2$. The coefficient cancels in the ratio:

$$\\frac{E(20)}{E(10)}=\\frac{0.5\\cdot 20^{2}}{0.5\\cdot 10^{2}}$$

$$20^{2}=400$$

$$\\frac{E(20)}{E(10)}=\\frac{0.5\\cdot 400}{0.5\\cdot 100}$$

$$\\frac{E(20)}{E(10)}=\\frac{0.2000}{0.5\\cdot 100}$$

$$\\frac{E(20)}{E(10)}=\\frac{0.2000}{0.500}$$

$$\\frac{E(20)}{E(10)}=2^{2}$$

$$\\frac{E(20)}{E(10)}=4$$

Doubling the speed multiplies the index by $4$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

At the higher standard speed, square first:

$$E(20)=0.5\\cdot 20^{2}$$

$$20^{2}=400$$

$$E(20)=0.5\\cdot 400$$

$$E(20)=0.2000$$

$$E(20)=200$$

The index reads $200$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

A square of a nonzero real number is positive, and the coefficient $0.5$ is positive. Their product is therefore positive for every $v>0$.

The index is never negative.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

A ten percent overspeed is the speed multiplier

$$k=1.1,$$ and the exponent acts on the whole multiplier:

$$\\frac{E(1.1v)}{E(v)}=1.1^{2}$$

$$1^{2}=1$$

$$\\frac{E(1.1v)}{E(v)}=1.1$$

$$\\frac{E(1.1v)}{E(v)}=1.21$$

The index is multiplied by $1.21$, a twenty-one percent rise rather than ten.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `A braking energy index is $E(v)=0.5v^{2}$ points for an approach speed $v>0$ in kilometres per hour.

The rule is a power function with coefficient $0.5$ and exponent $2$. A level squares the speed, then halves it. A speed multiplier $k$ multiplies the index by $k^{2}$, because the coefficient cancels:

$$\\frac{E(kv)}{E(v)}=k^{2}$$`,
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

The overview recovered

$$r=\\frac{1}{3}$$

An exponent smaller than one means that multiplying hours by $k$ multiplies harvest only by $k^{r}$, a smaller factor.

Harvest grows more slowly than watering time.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered

$$r=\\frac{1}{3}$$

 Doubling hours multiplies harvest by

$$2^{r}$$

:

$$\\frac{Y(2h)}{Y(h)}=2^{\\frac{1}{3}}$$

$$2^{\\frac{1}{3}}\\approx 1.26$$

The factor is about $1.26$, not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered

$$Y(h)=2h^{\\frac{1}{3}}$$

 Doubling the logged $4$ kg harvest means $Y=8$:

$$2h^{\\frac{1}{3}}=8$$

$$h^{\\frac{1}{3}}=4$$

$$h=64$$

Sixty-four hours is eight times the logged $8$ hours, which is more than a doubling.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

The overview recovered

$$Y(h)=2h^{\\frac{1}{3}}$$

 The slope is

$$Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}}$$

The leftover exponent is negative, so later hours add less crop. At the two logged times:

$$Y'(8)=\\frac{2}{3}\\cdot 8^{-\\frac{2}{3}}$$

$$Y'(8)=\\frac{1}{6}$$

$$Y'(27)=\\frac{2}{3}\\cdot 27^{-\\frac{2}{3}}$$

$$Y'(27)=\\frac{2}{27}$$

Because

$$\\frac{1}{6}>\\frac{2}{27}$$

, an extra hour adds less after $27$ hours than after $8$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

A nonzero power inverts to another power. From

$$Y=2h^{\\frac{1}{3}}$$

,

$$h=\\left(\\frac{Y}{2}\\right)^{3}$$

$$h=\\frac{1}{8}Y^{3}$$

Watering time is a monomial in harvest.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 11,
    solution_overview: `Marina's harvest follows $Y(h)=A h^{r}$ after $h>0$ hours of watering. Eight hours give $4$ kilograms, and twenty-seven hours give $6$.

**Part 1.** Two unknowns need both observations. The ratio cancels $A$:

$$\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}$$

**Part 2: Solve.** Because $\\frac{27}{8}=\\bigl(\\frac{3}{2}\\bigr)^{3}$ and $\\frac{6}{4}=\\frac{3}{2}$,

$$\\left(\\frac{3}{2}\\right)^{3r}=\\frac{3}{2}$$

$$r=\\frac{1}{3}$$

The eight-hour level then pins $A$:

$$A\\cdot 8^{\\frac{1}{3}}=4$$

$$2A=4$$

$$A=2$$

The recovered harvest is $Y(h)=2h^{\\frac{1}{3}}$.`,
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

The overview recovered

$$A=48$$

 At nine agents the square root is $3$:

$$W(9)=\\frac{48}{\\sqrt{9}}$$

$$W(9)=\\frac{48}{3}$$

$$W(9)=16$$

Sixteen minutes is less than $20$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

A nonzero power inverts to another power. From

$$W=48 n^{-\\frac{1}{2}}$$

we recover

$$n=\\left(\\frac{48}{W}\\right)^{2}$$

The agent count is a monomial in the wait.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

The overview recovered

$$W(n)=48 n^{-\\frac{1}{2}}$$

 The slope is

$$W'(n)=-24 n^{-\\frac{3}{2}}$$

The size of the cut falls as $n$ rises. At the two named staffings:

$$|W'(4)|=24\\cdot 4^{-\\frac{3}{2}}$$

$$|W'(4)|=96^{-\\frac{3}{2}}$$

$$|W'(4)|=3$$

$$|W'(16)|=24\\cdot 16^{-\\frac{3}{2}}$$

$$|W'(16)|=384^{-\\frac{3}{2}}$$

$$|W'(16)|=0.375$$

An extra agent cuts less wait after $16$ agents than after $4$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

The overview recovered

$$W(n)=48 n^{-\\frac{1}{2}}$$

 A six-minute wait inverts that rule:

$$6=\\frac{48}{\\sqrt{n}}$$

$$\\sqrt{n}=8$$

$$n=64$$

Sixty-four agents exceed the cap of $50$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Doubling the team is the multiplier

$$k=2$$

, and the exponent

$$-\\frac{1}{2}$$

 acts on that whole factor:

$$\\frac{W(2n)}{W(n)}=2^{-\\frac{1}{2}}$$

$$\\frac{W(2n)}{W(n)}=\\frac{1}{\\sqrt{2}}\\approx 0.707$$

Wait falls to about $0.707$ of its former value, not to

$$\\frac{1}{2}$$

.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 12,
    solution_overview: `Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. Four agents produce a $24$ minute wait, and staffing cannot exceed $50$ agents.

The exponent is given, so the recorded wait fixes the coefficient:

$$A\\cdot 4^{-\\frac{1}{2}}=24$$

$$\\frac{A}{2}=24$$

$$A=48$$

The recovered wait is $W(n)=48 n^{-\\frac{1}{2}}$. The cap $n\\le 50$ constrains inversions.`,
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

The overview recovered

$$a=4$$

 At $4$ metres the square root is $2$:

$$Q_{L}(4)=4\\cdot 4^{\\frac{1}{2}}$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{1}=2$$

$$Q_{L}(4)=4\\cdot 2$$

$$Q_{L}(4)=8$$

$$Q_{L}(4)=16^{\\frac{1}{2}}$$

$$16^{\\frac{1}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{1}$$

$$16^{\\frac{1}{2}}=4$$

$$4^{1}=4$$

$$Q_{L}(4)=4$$

Eight litres a minute is more than $7$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

The overview recovered the ratio

$$\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}$$

. They meet when that ratio equals $1$:

$$\\frac{d}{8}=1$$

$$d=8$$

Eight metres is shallower than $10$. That matches the claim.

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is True.`,
    `**C.** → True

The overview recovered

$$\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}$$

Past

$$d=8$$

 that leftover factor exceeds $1$ and keeps climbing, because it is a positive power of $d$. A second crossing would need the ratio to return through $1$, which a strictly increasing leftover cannot do.

Omar stays ahead at every greater depth.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

The joint flow is the sum of two powers with distinct exponents:

$$Q_{L}(d)+Q_{O}(d)=4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$$

A sum of two powers is a power only when the exponents match. These exponents are

$$\\frac{1}{2}$$

 and

$$\\frac{3}{2}$$

.

So the statement is False.`,
    `**E.** → True

The overview recovered Omar's exponent

$$\\frac{3}{2}$$

. Flow outruns depth whenever the exponent exceeds one: multiplying depth by $k$ multiplies Omar's flow by $k^{\\frac{3}{2}}$, a larger factor than $k$.

Omar's flow grows faster than depth.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 13,
    solution_overview: `Leah's well follows $Q_{L}(d)=a d^{\\frac{1}{2}}$, with $12$ litres a minute at $9$ metres. Omar's well follows $Q_{O}(d)=k d^{\\frac{3}{2}}$, with $4$ litres a minute at $4$ metres.

Each well has a known exponent and one level, so each coefficient is recoverable:

$$a\\cdot 9^{\\frac{1}{2}}=12$$

$$3a=12$$

$$a=4$$

$$k\\cdot 4^{\\frac{3}{2}}=4$$

$$8k=4$$

$$k=\\frac{1}{2}$$

The recovered flows are $Q_{L}(d)=4d^{\\frac{1}{2}}$ and $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$. Their ratio simplifies to $\\frac{d}{8}$.`,
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

The overview recovered

$$F=50$$

 and

$$A=50,$$ so

$$C(n)=50+50\\sqrt{n}$$

A power of the run cannot carry a leftover constant. The setup of $50$ euros kills that shape.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered

$$C(n)=50+50\\sqrt{n}$$

The slope is

$$C'(n)=25 n^{-\\frac{1}{2}}$$

which stays positive for every $n>0$. Printing more copies never turns the total downward.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Cost per copy is the recovered bill divided by the run:

$$\\frac{C(n)}{n}=\\frac{50}{n}+50 n^{-\\frac{1}{2}}$$

Both pieces decline as $n$ grows: the setup is spread over more copies, and the leftover exponent on the variable term is negative.

A longer run is cheaper per copy.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$C(n)=50+50\\sqrt{n}$$

 Twenty-five is a perfect square:

$$C(25)=50+50\\cdot 5$$

$$C(25)=50+250$$

$$C(25)=300$$

Three hundred sits above $280$.

So the statement is True.`,
    `**E.** → False

The overview recovered

$$C(n)=50+50\\sqrt{n}$$

 Thirty-six is a perfect square:

$$C(36)=50+50\\cdot 6$$

$$C(36)=50+300$$

$$C(36)=350$$

Three hundred and fifty does not sit above $400$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 14,
    solution_overview: `Nora bills a run of $n>0$ copies as $C(n)=F+A n^{\\frac{1}{2}}$. A $16$-copy run costs $250$ euros, and a $64$-copy run costs $450$.

Two unknowns need both invoices:

$$F+4A=250$$

$$F+8A=450$$

Subtracting isolates $A$:

$$4A=200$$

$$A=50$$

Then $F+4\\cdot 50=250$, so $F=50$. The recovered bill is $C(n)=50+50\\sqrt{n}$.`,
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

The overview recovered

$$S(u)=2u$$

The inner exponent

$$\\frac{3}{2}$$

 and the outer exponent

$$\\frac{2}{3}$$

 multiply to $1$, so strength is a linear monomial in purity.

That is proportionality.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Compare the recovered figure with the value named in the claim.

The overview recovered

$$S(u)=2u$$

 Set that equal to the rival quote:

$$2u=1.8u+5$$

$$0.2u=5$$

$$u=25$$

The quotes meet at purity $25$.

So the statement is False.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The rival quote is $1.8u+5$. At purity zero the rival still equals $5$, so there is a leftover constant. A power of purity cannot carry an intercept.

The rival is affine, not a power.

So the statement is False.`,
    `**D.** → True

Use the recovered constants; do not rebuild the calibration.

The overview recovered

$$S(u)=2u$$

At purity $36$:

$$S(36)=2\\cdot 36$$

$$S(36)=72$$

Seventy-two sits above $70$.

So the statement is True.`,
    `**E.** → False

Form the comparison so only this claim’s extra arithmetic remains.

The overview recovered

$$S(u)=2u$$

At purity $9$:

$$S(9)=2\\cdot 9$$

$$S(9)=18$$

Eighteen does not sit above $20$.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 15,
    solution_overview: `Metal follows $M(u)=A u^{\\frac{3}{2}}$, and raising purity from $9$ to $16$ added $296$ tonnes. Strength is $S=\\frac{1}{2}M^{\\frac{2}{3}}$. The rival quotes $1.8u+5$.

The audited gain is a difference of two metal outputs:

$$A\\bigl(16^{\\frac{3}{2}}-9^{\\frac{3}{2}}\\bigr)=296$$

$$A(64-27)=296$$

$$37A=296$$

$$A=8$$

Composing the strength stage with $M(u)=8u^{\\frac{3}{2}}$ multiplies the exponents $\\frac{3}{2}$ and $\\frac{2}{3}$ to $1$:

$$S(u)=2u$$`,
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

The overview recovered

$$r=2$$

An exponent of $2$ sits above one, so multiplying jobs by $k$ multiplies load by $k^{2}$, a larger factor.

Peak load grows faster than the job count.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered

$$r=2$$

 Halving jobs is the multiplier

$$k=\\frac{1}{2}$$

:

$$\\frac{L(x/2)}{L(x)}=\\left(\\frac{1}{2}\\right)^{2}$$

$$\\frac{L(x/2)}{L(x)}=\\frac{1}{4}$$

Load drops to a quarter, not to a half.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered

$$L(x)=\\frac{1}{2}x^{2},$$ so load per job is

$$\\frac{L(x)}{x}=\\frac{1}{2}x$$

The leftover exponent is positive, so that average climbs with the job count.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

The overview recovered

$$L(x)=\\frac{1}{2}x^{2}$$

 At $16$ jobs:

$$L(16)=\\frac{1}{2}\\cdot 16^{2}$$

$$16^{2}=256$$

$$L(16)=\\frac{1}{2}\\cdot 256$$

$$L(16)=128$$

One hundred and twenty-eight sits below $200$, so the alarm has not yet tripped.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$L(x)=\\frac{1}{2}x^{2}$$

 At $10$ jobs:

$$L(10)=\\frac{1}{2}\\cdot 10^{2}$$

$$10^{2}=100$$

$$L(10)=\\frac{1}{2}\\cdot 100$$

$$L(10)=50$$

Fifty sits above $40$.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `Peak load follows $L(x)=A x^{r}$ for $x>0$ simultaneous jobs. Doubling the job count multiplies peak load by $4$, and eight jobs recorded a load of $32$. The alarm trips at $200$.

The doubling ratio cancels $A$ and isolates $r$:

$$2^{r}=4$$

$$r=2$$

The eight-job level then pins $A$:

$$A\\cdot 8^{2}=32$$

$$64A=32$$

$$A=\\frac{1}{2}$$

The recovered load is $L(x)=\\frac{1}{2}x^{2}$.`,
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

The overview recovered

$$Q(x)=12x^{\\frac{1}{2}}$$

 The slope is

$$Q'(x)=6 x^{-\\frac{1}{2}}$$

The leftover exponent is negative, so the slope falls as intensity rises. At the two named intensities:

$$Q'(25)=\\frac{6}{5}$$

$$Q'(25)=1.2$$

$$Q'(100)=\\frac{6}{10}$$

$$Q'(100)=0.6$$

An extra unit adds more at $25$ than at $100$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling intensity is the multiplier

$$k=2$$

, and the exponent

$$\\frac{1}{2}$$

 acts on that whole factor:

$$\\frac{Q(2x)}{Q(x)}=2^{\\frac{1}{2}}$$

$$\\neq 2$$

Responses multiply by $\\sqrt{2}$, not by $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered

$$Q(x)=12x^{\\frac{1}{2}},$$ so responses per unit of intensity are

$$\\frac{Q(x)}{x}=12 x^{-\\frac{1}{2}}$$

The leftover exponent is negative, so that average falls as outreach rises.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

The overview recovered

$$Q(x)=12x^{\\frac{1}{2}}$$

 At the intensity cap:

$$Q(400)=12\\cdot 400^{\\frac{1}{2}}$$

$$400^{\\frac{1}{2}}=\\bigl(400^{\\frac{1}{2}}\\bigr)^{1}$$

$$400^{\\frac{1}{2}}=20$$

$$20^{1}=20$$

$$Q(400)=12\\cdot 20$$

$$Q(400)=240$$

$$Q(400)=4800^{\\frac{1}{2}}$$

Two hundred and forty is not a ceiling of $200$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

The overview recovered

$$Q(x)=12x^{\\frac{1}{2}}$$

 Eighty-one is a perfect square:

$$Q(81)=12\\cdot 81^{\\frac{1}{2}}$$

$$81^{\\frac{1}{2}}=\\bigl(81^{\\frac{1}{2}}\\bigr)^{1}$$

$$81^{\\frac{1}{2}}=9$$

$$9^{1}=9$$

$$Q(81)=12\\cdot 9$$

$$Q(81)=108$$

$$Q(81)=972^{\\frac{1}{2}}$$

One hundred and eight sits above $100$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$ for $x>0$. Raising intensity from $25$ to $100$ added $60$ responses, and intensity cannot exceed $400$.

The recorded gain is a difference of two square-root levels:

$$A\\bigl(100^{\\frac{1}{2}}-25^{\\frac{1}{2}}\\bigr)=60$$

$$A(10-5)=60$$

$$5A=60$$

$$A=12$$

The recovered yield is $Q(x)=12x^{\\frac{1}{2}}$. The cap constrains $x\\le 400$.`,
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

Keep the stated domain in force while you evaluate the model.

The overview recovered

$$C(n)-D(n)=n(n-16)$$

On $n>0$ the roots are

$$n=0,$$ outside the domain, and

$$n=16$$

They meet only at sixteen documents.

So the statement is True.`,
    `**B.** → False

The overview recovered

$$C(n)-D(n)=n(n-16)$$

For $n>16$ that factor is positive, so $C>D$. The quadratic automated bill is the more expensive one past the meeting, not the cheaper one.

Automated is not cheaper above $16$ documents.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Start from the calibrated closed form, then evaluate at the claimed point.

The overview recovered

$$C(n)=n^{2},$$ so cost per document is

$$\\frac{C(n)}{n}=n$$

The leftover exponent is positive, so unit cost rises with the batch.

So the statement is True.`,
    `**D.** → False

The overview recovered

$$C(n)=n^{2}$$

 and

$$D(n)=16n$$

. At $25$ documents:

$$C(25)=625
$$

$$D(25)=400$$

$$625-400$$

$$C(25)=225$$

Two hundred and twenty-five is not less than $100$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Form the comparison so only this claim’s extra arithmetic remains.

The overview recovered

$$C(n)=n^{2}$$

At nine documents:

$$C(9)=9^{2}$$

$$9^{2}=81$$

$$C(9)=81$$

Eighty-one sits under $100$.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Automated inspection costs $C(n)=a n^{2}$ and manual inspection costs $D(n)=b n$ for $n>0$ documents. At $n=16$ both bills equal $256$.

Each law has a known exponent and one common level:

$$a\\cdot 16^{2}=256$$

$$256a=256$$

$$a=1$$

$$b\\cdot 16=256$$

$$b=16$$

The recovered costs are $C(n)=n^{2}$ and $D(n)=16n$. Their difference factors as $n(n-16)$.`,
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

The overview recovered exponent

$$\\frac{1}{2}$$

. An exponent smaller than one means that multiplying staff by $k$ multiplies throughput only by $k^{\\frac{1}{2}}$, a smaller factor.

Throughput grows more slowly than headcount.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling headcount is the multiplier

$$k=2$$

, and the exponent

$$\\frac{1}{2}$$

 acts on that whole factor:

$$\\frac{H(2s)}{H(s)}=2^{\\frac{1}{2}}$$

$$\\neq 2$$

Throughput multiplies by $\\sqrt{2}$, not by $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered billed throughput

$$B(s)=\\min\\bigl(H(s),\\,80\\bigr)$$

Once the cap binds, that rule is constant in $s$, not a monomial. A power of staff cannot switch from $8s^{\\frac{1}{2}}$ to a flat $80$.

Billed throughput is then no longer a power function of staff.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

The overview recovered

$$H(s)=8s^{\\frac{1}{2}}$$

 At $64$ staff:

$$H(64)=8\\cdot 64^{\\frac{1}{2}}$$

$$64^{\\frac{1}{2}}=\\bigl(64^{\\frac{1}{2}}\\bigr)^{1}$$

$$64^{\\frac{1}{2}}=8$$

$$8^{1}=8$$

$$H(64)=8\\cdot 8$$

$$H(64)=64$$

$$H(64)=512^{\\frac{1}{2}}$$

Sixty-four sits below the cap of $80$, so the ceiling is not yet reached.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$H(s)=8s^{\\frac{1}{2}}$$

 At $81$ staff:

$$H(81)=8\\cdot 81^{\\frac{1}{2}}$$

$$81^{\\frac{1}{2}}=\\bigl(81^{\\frac{1}{2}}\\bigr)^{1}$$

$$81^{\\frac{1}{2}}=9$$

$$9^{1}=9$$

$$H(81)=8\\cdot 9$$

$$H(81)=72$$

$$H(81)=648^{\\frac{1}{2}}$$

Seventy-two sits above $70$.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. Sixteen staff moved $32$ pallets per hour, and billed throughput cannot exceed $80$.

The exponent is given, so the recorded shift fixes the coefficient:

$$A\\cdot 16^{\\frac{1}{2}}=32$$

$$4A=32$$

$$A=8$$

The recovered throughput is $H(s)=8s^{\\frac{1}{2}}$. Billed throughput is the two-piece rule $B(s)=\\min\\bigl(H(s),\\,80\\bigr)$.`,
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

The overview recovered

$$W(k)=216 k^{-\\frac{3}{2}}$$

 The slope is

$$W'(k)=-324 k^{-\\frac{5}{2}}$$

The size of the cut falls as $k$ rises. At the two named staffings:

$$|W'(4)|=\\frac{324}{4^{\\frac{5}{2}}}$$

$$|W'(4)|=\\frac{324}{32}$$

$$|W'(4)|=10.125$$

$$|W'(9)|=\\frac{324}{9^{\\frac{5}{2}}}$$

$$|W'(9)|=\\frac{324}{243}$$

$$|W'(9)|=\\frac{4}{3}$$

An extra server cuts more wait at $4$ servers than at $9$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

A nonzero power inverts to another power. From

$$W=216 k^{-\\frac{3}{2}}$$

we recover

$$k=\\left(\\frac{216}{W}\\right)^{\\frac{2}{3}}$$

The server count is a monomial in the wait.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling the server count is the multiplier

$$k=2$$

, and the exponent

$$-\\frac{3}{2}$$

 acts on that whole factor:

$$\\frac{W(2k)}{W(k)}=2^{-\\frac{3}{2}}$$

$$\\frac{W(2k)}{W(k)}=\\frac{1}{2\\sqrt{2}}\\approx 0.354$$

Wait falls to about $0.354$ of its former value, not to

$$\\frac{1}{2}$$

.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

The overview recovered

$$W(k)=216 k^{-\\frac{3}{2}}$$

 At nine servers:

$$W(9)=\\frac{216}{9^{\\frac{3}{2}}}$$

$$W(9)=\\frac{216}{27}$$

$$W(9)=8$$

Eight milliseconds is not more than $10$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

The overview recovered

$$W(k)=216 k^{-\\frac{3}{2}}$$

 At four servers:

$$W(4)=\\frac{216}{4^{\\frac{3}{2}}}$$

$$W(4)=\\frac{216}{8}$$

$$W(4)=27$$

Twenty-seven sits above $25$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. Moving from $4$ servers to $9$ servers cut the wait by $19$ ms.

The exponent is given, so the recorded cut, a difference of two levels, recovers $A$:

$$A\\bigl(4^{-\\frac{3}{2}}-9^{-\\frac{3}{2}}\\bigr)=19$$

$$A\\left(\\frac{1}{8}-\\frac{1}{27}\\right)=19$$

$$A\\cdot\\frac{19}{216}=19$$

$$A=216$$

The recovered wait is $W(k)=216 k^{-\\frac{3}{2}}$.`,
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

Name the recovered power rule, then substitute the claimed input.

An extra euro cuts demand at the rate of the derivative of the recovered curve:

$$q'(p)=-20000 p^{-3}$$

The size of that cut is

$$|q'(p)|=20000 p^{-3}$$

. At the two named prices:

$$|q'(5)|=\\frac{20000}{125}$$

$$|q'(5)|=160$$

$$|q'(20)|=\\frac{20000}{8000}$$

$$|q'(20)|=2.5$$

The claim needs a larger cut at five euros than at twenty. We have $160>2.5$.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

A nonzero power inverts to another power. From the recovered demand,

$$p^{2}=\\frac{10000}{q}$$

$$p=100 q^{-\\frac{1}{2}}$$

That is a monomial in the subscription count.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling the price is the scale

$$k=2$$

 on exponent $-2$. The coefficient cancels:

$$\\frac{q(2p)}{q(p)}=2^{-2}$$

$$\\frac{q(2p)}{q(p)}=\\frac{1}{4}$$

At the recorded pair,

$$q(10)=\\frac{10000}{100}$$

$$q(10)=100
$$

$$q(5)=400$$

and $100$ is a quarter of $400$, not a half. The claim is that demand halves.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$R(p)=10000 p^{-1}$$

At $16$ euros:

$$R(16)=\\frac{10000}{16}$$

$$R(16)=625$$

The claim compares this with $700$. Compare with the claim:

$$625<700.$$

So the statement is True.`,
    `**E.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$q(p)=10000 p^{-2}$$

At twenty euros:

$$q(20)=\\frac{10000}{400}$$

$$q(20)=25$$

The claim compares this with $30$. Compare with the claim:

$$25<30.$$

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `Monthly subscriptions follow $q(p)=A p^{-2}$ for $p>0$ euros, and $q(5)=400$. Revenue is $R=pq$.

**Part 1: Translate.**

The exponent is given, so the priced observation fixes $A$:

$$A\\cdot 5^{-2}=400 \\tag{1}$$

**Part 2: Solve.**

$$A=400\\cdot 25$$

$$=10000$$

The recovered demand and revenue are

$$q(p)=10000 p^{-2}, \\qquad R(p)=10000 p^{-1}$$`,
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

Name the recovered power rule, then substitute the claimed input.

A power of $n$ cannot carry a leftover constant. The overview recovered

$$F=200\\neq 0$$

, so

$$C(n)=200+30\\sqrt{n}$$

is a translate of a power, not a power. The claim is that the bill is not a power of the account count.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

Cost per account is the recovered bill divided by $n$:

$$\\frac{C(n)}{n}=\\frac{200}{n}+30 n^{-\\frac{1}{2}}$$

Both leftover exponents are negative, so the average falls as the book grows. At the two invoices:

$$\\frac{C(100)}{100}=5
$$

$$\\frac{C(400)}{400}=2$$

and $2<5$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

An extra account adds $C'(n)$. Differentiating the recovered bill:

$$C'(n)=15 n^{-\\frac{1}{2}}$$

At the two named books:

$$C'(100)=\\frac{15}{10}$$

$$C'(100)=1.5$$

$$C'(400)=\\frac{15}{20}$$

$$C'(400)=0.75$$

The claim needs a larger add-on at one hundred accounts than at four hundred. We have $1.5>0.75$.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$C(n)=200+30\\sqrt{n}$$

At $900$ accounts:

$$C(900)=200+30\\cdot 30$$

$$C(900)=200+900$$

$$C(900)=1100$$

The claim compares this with $1000$. Compare with the claim:

$$1100>1000.$$

So the statement is True.`,
    `**E.** → False

The overview recovered

$$C(n)=200+30\\sqrt{n}$$

At $200$ accounts:

$$C(200)=200+30\\sqrt{200}$$

$$C(200)=200+300\\sqrt{2}$$

Since $\\sqrt{2}<1.5$, this sits below $650$. Directly,

$$300\\cdot 1.414\\approx 424$$

 plus the $200$ setup is about $624$, which is not more than $750$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 22,
    solution_overview: `The bill is $C(n)=F+a n^{\\frac{1}{2}}$ for $n>0$ accounts, with $C(100)=500$ and $C(400)=800$.

**Part 1: Translate.**

Two unknowns need both invoices:

$$F+10a=500 \\tag{1}$$

$$F+20a=800 \\tag{2}$$

**Part 2: Solve.**

Subtracting (1) from (2):

$$10a=300, \\qquad a=30$$

Then (1) gives $F=200$. The recovered bill is

$$C(n)=200+30\\sqrt{n}$$`,
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

Keep the stated domain in force while you evaluate the model.

The overview recovered

$$E(t)=240 t^{\\frac{1}{4}}$$

That is a monomial in elapsed time, so total fleet emissions are a power of $t$.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling elapsed time is the scale

$$k=2$$

 on the recovered

$$E(t)=240 t^{\\frac{1}{4}}$$

:

$$\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}$$

Now

$$2^{\\frac{1}{4}}<2$$

, so doubling time does not double emissions.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → False

The overview recovered

$$e(a)=120 a^{-\\frac{1}{2}}$$

The exponent is negative, so intensity falls as the fleet grows. For a concrete pair:

$$e(16)=30
$$

$$e(64)=\\frac{120}{8}$$

$$e(64)=15$$

and $15<30$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Use the recovered constants; do not rebuild the calibration.

The overview recovered

$$E(t)=240 t^{\\frac{1}{4}}$$

After $16$ years:

$$E(16)=240\\cdot 16^{\\frac{1}{4}}$$

$$16^{\\frac{1}{4}}=\\bigl(16^{\\frac{1}{4}}\\bigr)^{1}$$

$$16^{\\frac{1}{4}}=2$$

$$2^{1}=2$$

$$E(16)=240\\cdot 2$$

$$E(16)=480$$

$$E(16)=3840^{\\frac{1}{4}}$$

The claim compares this with $400$. Compare with the claim:

$$480>400.$$

So the statement is True.`,
    `**E.** → True

Form the comparison so only this claim’s extra arithmetic remains.

The overview recovered

$$E(t)=240 t^{\\frac{1}{4}}$$

After $1$ year:

$$E(1)=240$$

The claim compares this with $250$. Compare with the claim:

$$240<250.$$

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 23,
    solution_overview: `The fleet is $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles, and intensity is $e(a)=k a^{-\\frac{1}{2}}$ with $e(16)=30$. Total emissions are $E=a\\,e(a)$.

**Part 1: Translate.**

The intensity reading at $a=16$ fixes $k$:

$$k\\cdot 16^{-\\frac{1}{2}}=30 \\tag{1}$$

**Part 2: Solve.**

$$k=30\\cdot 4$$

$$=120$$

Then $E=k a^{\\frac{1}{2}}$ and $a^{\\frac{1}{2}}=2 t^{\\frac{1}{4}}$, so the recovered intensity and totals are

$$e(a)=120 a^{-\\frac{1}{2}}, \\qquad E(t)=240 t^{\\frac{1}{4}}$$`,
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

The overview recovered

$$Q(d)=2 d^{\\frac{5}{2}}$$

The exponent

$$\\frac{5}{2}>1$$

, so a proportional increase in diameter multiplies capacity by more than that same factor:

$$\\frac{Q(kd)}{Q(d)}=k^{\\frac{5}{2}}$$

For every $k>1$ this factor exceeds $k$. Capacity therefore grows faster than diameter.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

To double the bench capacity, the diameter factor $k$ must satisfy

$$k^{\\frac{5}{2}}=2$$

$$k=2^{\\frac{2}{5}}$$

Now

$$2^{\\frac{2}{5}}<2$$

, so the diameter need not more than double.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered

$$Q(d)=2 d^{\\frac{5}{2}}$$

Solving for the positive diameter,

$$d=\\left(\\frac{Q}{2}\\right)^{\\frac{2}{5}}$$

That is a monomial in capacity.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

The diameter for

$$Q=250$$

 is

$$d=125^{\\frac{2}{5}}$$

$$d=5^{\\frac{6}{5}}$$

$$d=5\\cdot 5^{\\frac{1}{5}}$$

$$d=25^{\\frac{1}{5}}$$

Since

$$5^{\\frac{1}{5}}\\approx 1.38$$

, we have $d\\approx 6.90$, which is not above $10$ cm.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

Doubling the diameter is the scale

$$k=2$$

 on exponent

$$\\frac{5}{2}$$

:

$$\\frac{Q(2d)}{Q(d)}=2^{\\frac{5}{2}}$$

$$\\frac{Q(2d)}{Q(d)}=4\\sqrt{2}$$

Now $4\\sqrt{2}\\approx 5.66>5$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 24,
    solution_overview: `Flow capacity is $Q(d)=A d^{\\frac{5}{2}}$ litres per second for $d>0$ centimetres, with $Q(4)=64$.

**Part 1: Translate.**

The exponent is given, so the bench test fixes $A$:

$$A\\cdot 4^{\\frac{5}{2}}=64 \\tag{1}$$

**Part 2: Solve.**

$$4^{\\frac{5}{2}}=32, \\qquad A=\\frac{64}{32}=2$$

The recovered capacity is

$$Q(d)=2 d^{\\frac{5}{2}}$$`,
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

Keep the stated domain in force while you evaluate the model.

The overview recovered

$$S(t)=9\\pi t$$

That is a constant times elapsed time, so the covered area is proportional to $t$.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

Doubling elapsed time on

$$S(t)=9\\pi t$$

 is the scale

$$k=2$$

 on exponent $1$:

$$\\frac{S(2t)}{S(t)}=2$$

Doubling time therefore doubles the area.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Start from the calibrated closed form, then evaluate at the claimed point.

The overview recovered

$$S(t)=9\\pi t$$

Solving for time,

$$t=\\frac{S}{9\\pi}$$

That is a monomial in the area.

So the statement is True.`,
    `**D.** → True

Use the recovered constants; do not rebuild the calibration.

The overview recovered

$$S(t)=9\\pi t$$

After $4$ hours:

$$S(4)=36\\pi$$

The claim compares this with $30\\pi$. Compare with the claim:

$$36\\pi>30\\pi.$$

So the statement is True.`,
    `**E.** → False

Form the comparison so only this claim’s extra arithmetic remains.

The overview recovered

$$S(t)=9\\pi t$$

After $9$ hours:

$$S(9)=81\\pi$$

The claim is $100\\pi$. Compare with the claim:

$$81\\pi\\neq 100\\pi.$$

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 25,
    solution_overview: `The service radius is $r(t)=A t^{\\frac{1}{2}}$ kilometres after $t>0$ hours, with $r(4)=6$. The covered area is $S=\\pi r^{2}$.

**Part 1: Translate.**

The four-hour radius fixes $A$:

$$A\\cdot 4^{\\frac{1}{2}}=6 \\tag{1}$$

**Part 2: Solve.**

$$A=3$$

Then $S=\\pi\\bigl(3 t^{\\frac{1}{2}}\\bigr)^{2}$. The recovered radius and area are

$$r(t)=3 t^{\\frac{1}{2}}, \\qquad S(t)=9\\pi t$$`,
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

Name the recovered power rule, then substitute the claimed input.

At $64$ tickets the uncapped Plan A reading is

$$40\\sqrt{64}=40\\cdot 8$$

$$40\\sqrt{64}=320$$

which sits under the cap, so Plan A bills $320$. Plan B bills

$$5\\cdot 64$$

Both sit under $400$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

The plans cross where the uncapped square-root bill equals the linear bill:

$$40\\sqrt{u}=5u$$

$$8=\\sqrt{u}
$$

$$u=64$$

Below that crossing, at the recorded $36$ tickets:

$$C_A(36)=240
$$

$$C_B(36)=180$$

and $180<240$, so Plan B is cheaper below the crossing.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Plan A's cap binds once

$$40\\sqrt{u}=400$$

:

$$\\sqrt{u}=10
$$

$$u=100$$

For every larger ticket volume the billed amount stays $400$ rather than $40\\sqrt{u}$, so the cap eventually binds.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

On the uncapped piece, cost per ticket is

$$\\frac{C_A(u)}{u}=40 u^{-\\frac{1}{2}}$$

The leftover exponent is negative, so the average falls as volume rises. Past the cap it is

$$\\frac{400}{u}$$

, which also falls. At the invoice and at $64$ tickets:

$$\\frac{240}{36}=\\frac{20}{3}, \\qquad \\frac{320}{64}$$

$$\\frac{240}{36}$$

$$\\frac{240}{36}=5$$

and

$$5<\\frac{20}{3}$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

At $144$ tickets the uncapped reading would be

$$40\\sqrt{144}=40\\cdot 12$$

$$40\\sqrt{144}=480$$

The cap clips this to $400$, which is not more than $450$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 26,
    solution_overview: `Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ with a cap of $400$, and $C_A(36)=240$. Plan B bills $5$ per ticket with no cap.

**Part 1: Translate.**

The invoice fixes $a$:

$$a\\cdot 36^{\\frac{1}{2}}=240 \\tag{1}$$

**Part 2: Solve.**

$$6a=240, \\qquad a=40$$

The recovered plans are

$$C_A(u)=\\min\\bigl(40\\sqrt{u},\\,400\\bigr), \\qquad C_B(u)=5u$$`,
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

Name the recovered power rule, then substitute the claimed input.

An extra unit cuts modelled cost at the rate $|c'(N)|$. Differentiating,

$$c'(N)=-b\\cdot 1000\\cdot N^{-b-1}$$

The leftover exponent $-b-1$ is negative, so $|c'|$ falls as $N$ rises. Comparing the two named outputs:

$$|c'(8)|=\\frac{|c'(1)|}{8^{b+1}}$$

and

$$8^{b+1}>1$$

, so the cut is larger after the first unit than after eight units.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Quadrupling cumulative output is two doublings:

$$\\frac{c(4N)}{c(N)}=(0.8)^{2}$$

$$\\frac{c(4N)}{c(N)}=0.64$$

The claim is that unit cost halves. A factor of $0.64$ is not

$$\\frac{1}{2}$$

.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

A simple reciprocal would double-and-halve:

$$2^{-1}=\\frac{1}{2}$$

The recovered doubling factor is $0.8$:

$$0.8>\\frac{1}{2}$$

so each doubling cuts cost by less than a reciprocal would, and unit cost falls more slowly than

$$\\frac{1}{N}$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Three successive doublings reach

$$N=8$$

:

$$c(8)=1000\\cdot(0.8)^{3}$$

$$c(8)=512$$

The claim compares this with $520$. Compare with the claim:

$$512<520.$$

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Four successive doublings reach

$$N=16$$

:

$$c(16)=1000\\cdot(0.8)^{4}$$

$$c(16)=409.6$$

The claim is that this already sits under the materials floor of $400$. We have $409.6>400$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 27,
    solution_overview: `Unit cost is $c(N)=c_1 N^{-b}$ for $N>0$, every doubling multiplies unit cost by $0.8$, and $c(1)=1000$. Materials floor at $400$.

**Part 1: Translate.**

The doubling rule isolates $b$, and the first unit is $c_1$:

$$2^{-b}=0.8 \\tag{1}$$

$$c_1=1000 \\tag{2}$$

**Part 2: Solve.**

The recovered curve is

$$c(N)=1000 N^{-b}, \\qquad 2^{-b}=0.8$$

so after $k$ doublings, $c(2^{k})=1000\\cdot(0.8)^{k}$.`,
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

Name the recovered power rule, then substitute the claimed input.

Doubling the spend is the scale

$$k=2$$

 on exponent

$$\\frac{1}{2}$$

:

$$\\frac{R(2x)}{R(x)}=2^{\\frac{1}{2}}$$

$$\\frac{R(2x)}{R(x)}=\\sqrt{2}$$

Now $\\sqrt{2}<2$, so doubling spend does not double revenue.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

Revenue per euro of spend is

$$\\frac{R(x)}{x}=90 x^{-\\frac{1}{2}}$$

The leftover exponent is negative, so the average falls as the campaign grows. At the recorded spend and at $400$:

$$\\frac{R(100)}{100}=9
$$

$$\\frac{R(400)}{400}=\\frac{90\\cdot 20}{400}$$

$$\\frac{R(400)}{400}=\\frac{90}{400}$$

$$\\frac{R(400)}{400}=4.5$$

and $4.5<9$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Factor the recovered net gain:

$$N(x)=\\sqrt{x}\\,(90-6\\sqrt{x})$$

This is negative precisely when $\\sqrt{x}>15$, that is $x>225$. For every larger spend the factor $(90-6\\sqrt{x})$ stays negative and grows in size, so once net gain turns negative it stays negative.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$N(x)=90\\sqrt{x}-6x$$

At a spend of $100$:

$$N(100)=90\\cdot 10-600$$

$$N(100)=900-600$$

$$N(100)=300$$

The claim compares this with $250$. Compare with the claim:

$$300>250.$$

So the statement is True.`,
    `**E.** → False

The overview recovered

$$N(x)=90\\sqrt{x}-6x$$

At a spend of $256$:

$$N(256)=90\\cdot 16-6\\cdot 256$$

$$N(256)=1440-6\\cdot 256$$

$$N(256)=1440-1536$$

$$N(256)=-96$$

The claim is that net gain is still positive. We have $-96<0$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `Revenue is $R(x)=A x^{\\frac{1}{2}}$ from spend $x>0$, with $R(100)=900$. The platform fee is $F(x)=6x$, and net gain is $R-F$.

**Part 1: Translate.**

The recorded campaign fixes $A$:

$$A\\cdot 100^{\\frac{1}{2}}=900 \\tag{1}$$

**Part 2: Solve.**

$$10A=900, \\qquad A=90$$

The recovered revenue and net gain are

$$R(x)=90\\sqrt{x}, \\qquad N(x)=90\\sqrt{x}-6x$$`,
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

The overview recovered

$$m(L)=4 L^{\\frac{1}{2}}$$

The exponent

$$\\frac{1}{2}<1$$

, so material grows more slowly than labour hours. Doubling labour multiplies material by

$$2^{\\frac{1}{2}}<2$$

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling labour on the recovered finished output

$$g=16 L^{\\frac{3}{4}}$$

 multiplies $g$ by

$$2^{\\frac{3}{4}}$$

Now

$$2^{\\frac{3}{4}}<2$$

, so doubling labour does not double finished output.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Finished output per labour hour is

$$\\frac{g}{L}=16 L^{-\\frac{1}{4}}$$

The leftover exponent is negative, so the average falls as labour rises. At

$$L=16$$

 and

$$L=81$$

:

$$16\\cdot 16^{-\\frac{1}{4}}$$

$$\\frac{g}{L}=8, \\qquad 16\\cdot 81^{-\\frac{1}{4}}$$

$$\\frac{g}{L}=8, \\qquad 1296^{-\\frac{1}{4}}$$

$$16\\cdot 16^{-\\frac{1}{4}}=\\frac{16}{3}$$

and

$$\\frac{16}{3}<8$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

The overview recovered

$$g=16 L^{\\frac{3}{4}}$$

Solving for labour,

$$L=\\left(\\frac{g}{16}\\right)^{\\frac{4}{3}}$$

That is a monomial in the finished count.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$g=16 L^{\\frac{3}{4}}$$

After $81$ labour hours:

$$g(81)=16\\cdot 81^{\\frac{3}{4}}$$

$$81^{\\frac{3}{4}}=\\bigl(81^{\\frac{1}{4}}\\bigr)^{3}$$

$$81^{\\frac{1}{4}}=3$$

$$3^{3}=27$$

$$g(81)=16\\cdot 27$$

$$g(81)=432$$

$$g(81)=1296^{\\frac{3}{4}}$$

$$1296^{\\frac{3}{4}}=\\bigl(1296^{\\frac{1}{4}}\\bigr)^{3}$$

$$1296^{\\frac{1}{4}}=6$$

$$6^{3}=216$$

$$g(81)=216$$

$$81^{\\frac{1}{4}}=\\bigl(81^{\\frac{1}{4}}\\bigr)^{1}$$

$$3^{1}=3$$

$$1296^{\\frac{1}{4}}=\\bigl(1296^{\\frac{1}{4}}\\bigr)^{1}$$

$$6^{1}=6$$

The claim compares this with $400$. Compare with the claim:

$$432>400.$$

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 29,
    solution_overview: `Material is $m(L)=A L^{\\frac{1}{2}}$ with $m(100)=40$. Finished output is $g(m)=B m^{\\frac{3}{2}}$ with $g(9)=54$.

**Part 1: Translate.**

Each stage has a known exponent and one level:

$$A\\cdot 100^{\\frac{1}{2}}=40 \\tag{1}$$

$$B\\cdot 9^{\\frac{3}{2}}=54 \\tag{2}$$

**Part 2: Solve.**

$$10A=40, \\qquad A=4$$

$$27B=54, \\qquad B=2$$

Composing $g(m(L))=2\\bigl(4 L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}$ gives the recovered chain

$$m(L)=4 L^{\\frac{1}{2}}, \\qquad g=16 L^{\\frac{3}{4}}$$`,
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

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$R(p)=2000 p^{-\\frac{1}{2}}$$

Solving for the positive price,

$$p=\\left(\\frac{2000}{R}\\right)^{2}$$

That is a monomial in revenue.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling the price on

$$R(p)=2000 p^{-\\frac{1}{2}}$$

 multiplies revenue by

$$2^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{2}}$$

Now

$$\\frac{1}{\\sqrt{2}}\\approx 0.707\\neq\\frac{1}{2}$$

, so doubling price does not halve revenue.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered

$$R(p)=2000 p^{-\\frac{1}{2}}$$

The leftover exponent is negative, so revenue falls as the price rises. At the recorded price and at $16$:

$$R(4)=1000
$$

$$R(16)=500$$

and $500<1000$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$R(p)=2000 p^{-\\frac{1}{2}}$$

At a price of $25$:

$$R(25)=\\frac{2000}{5}$$

$$R(25)=400$$

The claim compares this with $450$. Compare with the claim:

$$400<450.$$

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The charge is covered when $R(p)\\ge 400$:

$$2000 p^{-\\frac{1}{2}}\\ge 400$$

$$\\sqrt{p}\\le 5
$$

$$p\\le 25$$

The claim is that the charge is covered only at prices below $16$. The recovered cutoff is $p=25$, which is not $16$.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 30,
    solution_overview: `Demand is $q(p)=A p^{-\\frac{3}{2}}$ with $q(4)=250$. Revenue is $R=pq$, and a fixed monthly charge of $400$ must be covered.

**Part 1: Translate.**

The priced observation fixes $A$:

$$A\\cdot 4^{-\\frac{3}{2}}=250 \\tag{1}$$

**Part 2: Solve.**

$$4^{\\frac{3}{2}}=8, \\qquad A=250\\cdot 8=2000$$

The recovered demand and revenue are

$$q(p)=2000 p^{-\\frac{3}{2}}, \\qquad R(p)=2000 p^{-\\frac{1}{2}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

An extra hour adds $N'(h)$. Differentiating the recovered output:

$$N'(h)=12 h^{-\\frac{1}{3}}$$

At the two named shifts:

$$N'(8)=\\frac{12}{2}$$

$$N'(8)=6$$

$$N'(27)=\\frac{12}{3}$$

$$N'(27)=4$$

The claim needs a smaller add-on after twenty-seven hours than after eight. We have $4<6$.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling any shift is the scale

$$k=2$$

 on exponent

$$\\frac{2}{3}$$

:

$$\\frac{N(2h)}{N(h)}=2^{\\frac{2}{3}}$$

Now

$$2^{\\frac{2}{3}}<2$$

, so doubling a shift does not double the item count.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Items packed per hour is

$$\\frac{N(h)}{h}=18 h^{-\\frac{1}{3}}$$

The leftover exponent is negative, so the average falls as the shift lengthens. At $8$ and $27$ hours:

$$18\\cdot 8^{-\\frac{1}{3}}$$

$$\\frac{N(h)}{h}=9, \\qquad 18\\cdot 27^{-\\frac{1}{3}}$$

$$\\frac{N(h)}{h}=9, \\qquad 486^{-\\frac{1}{3}}$$

$$\\frac{N(h)}{h}=6$$

and $6<9$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$N(h)=18 h^{\\frac{2}{3}}$$

A $27$-hour shift packs

$$N(27)=18\\cdot 9$$

$$N(27)=162$$

The claim compares this with $150$. Compare with the claim:

$$162>150.$$

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The $250$-item order needs

$$18 h^{\\frac{2}{3}}=250$$

$$h^{\\frac{2}{3}}=\\frac{125}{9}$$

$$h=\\left(\\frac{125}{9}\\right)^{\\frac{3}{2}}$$

$$h=\\frac{625\\sqrt{5}}{27}$$

Now $\\sqrt{5}\\approx 2.236$, so $h\\approx 51.8$, which is not under $40$ hours.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 31,
    solution_overview: `Packing output is $N(h)=A h^{\\frac{2}{3}}$ items after $h>0$ hours. Extending a shift from $8$ to $27$ hours added $90$ items.

**Part 1: Translate.**

Both shift lengths are perfect cubes, so the recorded extension is

$$A\\cdot 27^{\\frac{2}{3}}-A\\cdot 8^{\\frac{2}{3}}=90 \\tag{1}$$

**Part 2: Solve.**

$$27^{\\frac{2}{3}}=9, \\qquad 8^{\\frac{2}{3}}=4$$

$$5A=90, \\qquad A=18$$

The recovered output is

$$N(h)=18 h^{\\frac{2}{3}}$$`,
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

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$P(v)=2 v^{\\frac{5}{2}}$$

That is a monomial in airspeed, so absorbed power is a power function of airspeed.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling the airspeed on

$$F(v)=2 v^{\\frac{3}{2}}$$

 multiplies drag by

$$2^{\\frac{3}{2}}=2\\sqrt{2}$$

Now $2\\sqrt{2}\\approx 2.83$, which is not more than $3$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered

$$F(v)=2 v^{\\frac{3}{2}}$$

Solving for the positive airspeed,

$$v=\\left(\\frac{F}{2}\\right)^{\\frac{2}{3}}$$

That is a monomial in drag.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

The mounting rating

$$F=250$$

 needs

$$2 v^{\\frac{3}{2}}=250$$

$$v^{\\frac{3}{2}}=125
$$

$$v=125^{\\frac{2}{3}}$$

$$125^{\\frac{2}{3}}=\\bigl(125^{\\frac{1}{3}}\\bigr)^{2}$$

$$125^{\\frac{1}{3}}=5$$

$$5^{2}=25$$

$$v=25$$

$$125^{\\frac{1}{3}}=\\bigl(125^{\\frac{1}{3}}\\bigr)^{1}$$

$$5^{1}=5$$

The claim is that the rating is first reached above $30$ m/s. We have $v=25$.

So the statement is False.`,
    `**E.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$P(v)=2 v^{\\frac{5}{2}}$$

At $16$ m/s:

$$P(16)=2\\cdot 16^{\\frac{5}{2}}$$

$$16^{\\frac{5}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{5}$$

$$16^{\\frac{1}{2}}=4$$

$$4^{5}=1024$$

$$P(16)=2\\cdot 1024$$

$$P(16)=2048$$

$$P(16)=32^{\\frac{5}{2}}$$

$$16^{\\frac{1}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{1}=4$$

Two kilowatts is $2000$ watts. Compare with the claim:

$$2048>2000.$$

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `Drag is $F(v)=A v^{r}$ newtons at airspeed $v>0$, with $F(4)=16$ and $F(16)=128$. Absorbed power is $P=F\\cdot v$.

**Part 1: Translate.**

The run ratio cancels $A$:

$$\\frac{F(16)}{F(4)}=4^{r}$$

$$=8 \\tag{1}$$

Either run then fixes $A$:

$$A\\cdot 4^{r}=16 \\tag{2}$$

**Part 2: Solve.**

$$r=\\frac{3}{2}, \\qquad A\\cdot 8=16, \\qquad A=2$$

The recovered drag and power are

$$F(v)=2 v^{\\frac{3}{2}}, \\qquad P(v)=2 v^{\\frac{5}{2}}$$`,
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

The overview recovered

$$R(p)=1200 p^{\\frac{1}{2}}$$

The leftover exponent is positive, so revenue rises as the price rises. At $16$ and $25$:

$$R(16)=4800
$$

$$R(25)=6000$$

and $6000>4800$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Quantity falling does not force revenue to fall. Along the recovered curve,

$$R(p)=1200 p^{\\frac{1}{2}}$$

still rises in $p$ because the exponent $-\\frac{1}{2}+1$ is positive. From $p=16$ to $p=25$, quantity falls $300\\to 240$ while revenue rises $4800\\to 6000$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered

$$q(p)=1200 p^{-\\frac{1}{2}}$$

Solving for the positive price,

$$p=\\left(\\frac{1200}{q}\\right)^{2}$$

That is a monomial in monthly quantity.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$q(p)=1200 p^{-\\frac{1}{2}}$$

At a price of $25$:

$$q(25)=\\frac{1200}{5}$$

$$q(25)=240$$

The claim compares this with $250$. Compare with the claim:

$$240<250.$$

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Cutting quantity to $200$ needs

$$1200 p^{-\\frac{1}{2}}=200$$

$$\\sqrt{p}=6
$$

$$p=36$$

The claim is a price above $40$. We have $p=36$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `Demand is $q(p)=A p^{-\\frac{1}{2}}$ with $q(16)=300$. Revenue is $R=pq$.

**Part 1: Translate.**

The observed pair fixes $A$:

$$A\\cdot 16^{-\\frac{1}{2}}=300 \\tag{1}$$

**Part 2: Solve.**

$$A\\cdot\\frac{1}{4}=300, \\qquad A=1200$$

The recovered demand and revenue are

$$q(p)=1200 p^{-\\frac{1}{2}}, \\qquad R(p)=1200 p^{\\frac{1}{2}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

To double the test-firing output, the feed factor $k$ must satisfy

$$k^{\\frac{4}{3}}=2$$

$$k=2^{\\frac{3}{4}}$$

Now

$$2^{\\frac{3}{4}}<2$$

, so the feed need not more than double.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

Output per cubic metre of fuel is

$$\\frac{y(x)}{x}=4 x^{\\frac{1}{3}}$$

The leftover exponent is positive, so the average rises as the feed increases. At $8$ and $27$:

$$4\\cdot 8^{\\frac{1}{3}}$$

$$8^{\\frac{1}{3}}=\\bigl(8^{\\frac{1}{3}}\\bigr)^{1}$$

$$8^{\\frac{1}{3}}=2$$

$$2^{1}=2$$

$$\\frac{y(x)}{x}=8, \\qquad 4\\cdot 27^{\\frac{1}{3}}$$

$$27^{\\frac{1}{3}}=\\bigl(27^{\\frac{1}{3}}\\bigr)^{1}$$

$$27^{\\frac{1}{3}}=3$$

$$3^{1}=3$$

$$\\frac{y(x)}{x}=8, \\qquad 4\\cdot 3$$

$$\\frac{y(x)}{x}=8, \\qquad 108^{\\frac{1}{3}}$$

$$\\frac{y(x)}{x}=8, \\qquad 12$$

$$\\frac{y(x)}{x}=12$$

and $12>8$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The licence binds once

$$4 x^{\\frac{4}{3}}=1024$$

:

$$x^{\\frac{4}{3}}=256
$$

$$x=64$$

Past that feed, daily shipped output is the constant $1024$, which is not a monomial in $x$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$y(x)=4 x^{\\frac{4}{3}}$$

A feed of $8$ produces

$$y(8)=4\\cdot 8^{\\frac{4}{3}}$$

$$8^{\\frac{4}{3}}=\\bigl(8^{\\frac{1}{3}}\\bigr)^{4}$$

$$8^{\\frac{1}{3}}=2$$

$$2^{4}=16$$

$$y(8)=4\\cdot 16$$

$$y(8)=64$$

$$y(8)=32^{\\frac{4}{3}}$$

$$8^{\\frac{1}{3}}=\\bigl(8^{\\frac{1}{3}}\\bigr)^{1}$$

$$2^{1}=2$$

The claim compares this with $50$. Compare with the claim:

$$64>50.$$

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

From the shared solve, the feed level where the licence binds:

$$4 x^{\\frac{4}{3}}=1024$$

$$x=64$$

The claim asserts that the licence binds before a feed of $50$. Compare:

$$64>50$$

The binding feed sits above $50$, not before it. The claim fails.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 34,
    solution_overview: `Kiln output is $y(x)=A x^{\\frac{4}{3}}$ tonnes for a fuel feed $x>0$, with $y(27)=324$. The licence forbids shipping more than $1024$ tonnes a day.

**Part 1: Translate.**

The test firing is a perfect cube:

$$A\\cdot 27^{\\frac{4}{3}}=324 \\tag{1}$$

**Part 2: Solve.**

$$27^{\\frac{4}{3}}=81, \\qquad A=4$$

The recovered firing, before the licence clips it, is

$$y(x)=4 x^{\\frac{4}{3}}$$

Shipped output is $\\min(y(x),1024)$.`,
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

Composition in the stated order cancels stage by stage. From the shared solve, the identity

$$g(f(x))=x$$

So applying the two stages in that order returns the original input. The claim matches this cancellation.

So the statement is True.`,
    `**B.** → False

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$g(f(x))=x,$$ the identity power

$$x^{1}$$

. That grows at the same rate as the raw reading, not more slowly.

So the statement is False.`,
    `**C.** → False

Composition in the stated order cancels stage by stage. From the shared solve, the identity

$$f(g(y))=y$$

Applying the stages recovers the original index. The claim that the composition fails therefore disagrees with the recovery.

So the statement is False.`,
    `**D.** → True

The overview recovered

$$f(x)=9 x^{\\frac{2}{3}}$$

A raw reading of $64$ is sent out with

$$f(64)=9\\cdot 64^{\\frac{2}{3}}$$

$$64^{\\frac{2}{3}}=\\bigl(64^{\\frac{1}{3}}\\bigr)^{2}$$

$$64^{\\frac{1}{3}}=4$$

$$4^{2}=16$$

$$f(64)=9\\cdot 16$$

$$f(64)=144$$

$$f(64)=576^{\\frac{2}{3}}$$

$$64^{\\frac{1}{3}}=\\bigl(64^{\\frac{1}{3}}\\bigr)^{1}$$

$$4^{1}=4$$

The claim compares this with $140$. We have $144>140$.

So the statement is True.`,
    `**E.** → False

The overview recovered

$$f(x)=9 x^{\\frac{2}{3}}$$

A raw reading of $125$ is sent out with

$$f(125)=9\\cdot 125^{\\frac{2}{3}}$$

$$125^{\\frac{2}{3}}=\\bigl(125^{\\frac{1}{3}}\\bigr)^{2}$$

$$125^{\\frac{1}{3}}=5$$

$$5^{2}=25$$

$$f(125)=9\\cdot 25$$

$$f(125)=225$$

$$f(125)=1125^{\\frac{2}{3}}$$

$$125^{\\frac{1}{3}}=\\bigl(125^{\\frac{1}{3}}\\bigr)^{1}$$

$$5^{1}=5$$

The claim is an index under $200$. We have $225>200$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 35,
    solution_overview: `Calibration is $f(x)=A x^{\\frac{2}{3}}$ with $f(8)=36$. Reporting is $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$.

**Part 1: Translate.**

The recorded pair fixes $A$:

$$A\\cdot 8^{\\frac{2}{3}}=36 \\tag{1}$$

**Part 2: Solve.**

$$8^{\\frac{2}{3}}=4, \\qquad A=9$$

The recovered stages are

$$f(x)=9 x^{\\frac{2}{3}}, \\qquad g(y)=\\frac{1}{27} y^{\\frac{3}{2}}$$

Composing in either order:

$$g(f(x))=\\frac{1}{27}\\bigl(9 x^{\\frac{2}{3}}\\bigr)^{\\frac{3}{2}}$$

$$=x$$

$$f(g(y))=9\\left(\\frac{y^{\\frac{3}{2}}}{27}\\right)^{\\frac{2}{3}}$$

$$=y$$`,
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

Setting the two recovered score laws equal yields a single positive crossing:

$$x=8$$

One equation of this type cannot have two distinct positive ties. So the statement is False.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

The score ratio on the recovered pair is

$$\\frac{T(x)}{S(x)}=\\frac{x}{8}$$

For every $x>8$ this ratio exceeds $1$ and keeps rising, so T's lead cannot reverse.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The same ratio

$$\\frac{T(x)}{S(x)}=\\frac{x}{8}$$

 depends on the load. At the benchmark and at the crossing:

$$\\frac{T(4)}{S(4)}=\\frac{8}{16}$$

$$\\frac{T(4)}{S(4)}=\\frac{1}{2}
$$

$$\\frac{T(8)}{S(8)}=1$$

Those are not the same.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

From the shared solve, the unique positive crossing of the two scores by setting them equal:

$$x=8$$

Compare that load with the threshold named in the claim:

$$8>6$$

The first meeting sits above $6$, matching the claim.

So the statement is True.`,
    `**E.** → True

The overview recovered

$$S(x)=8 x^{\\frac{1}{2}}$$

 and

$$T(x)=x^{\\frac{3}{2}}$$

. At load $16$:

$$S(16)=32$$

$$T(16)=64$$

$$T(16)-S(16)=32$$

The claim compares this lead with $30$. We have $32>30$, matching the claim.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 36,
    solution_overview: `Algorithm S is $S(x)=a x^{\\frac{1}{2}}$ with $S(4)=16$. Algorithm T is $T(x)=k x^{\\frac{3}{2}}$ with $T(4)=8$.

**Part 1: Translate.**

Each benchmark fixes one coefficient:

$$a\\cdot 4^{\\frac{1}{2}}=16 \\tag{1}$$

$$k\\cdot 4^{\\frac{3}{2}}=8 \\tag{2}$$

**Part 2: Solve.**

$$a=8, \\qquad k=1$$

The recovered scores are

$$S(x)=8 x^{\\frac{1}{2}}, \\qquad T(x)=x^{\\frac{3}{2}}$$

On $x>0$, setting $S=T$ gives the unique positive crossing $x=8$.`,
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

The overview recovered

$$C(m)=5 m^{\\frac{4}{5}}$$

The exponent

$$\\frac{4}{5}>0$$

, so $C$ is strictly increasing on $m>0$. Adding machines therefore raises sustained capacity.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

An exponent below $1$ still tends to infinity whenever it is positive. The recovered

$$C(m)=5 m^{\\frac{4}{5}}$$

 grows without bound as $m$ grows, because $\\frac{4}{5}>0$. A finite ceiling of $500$ is therefore reached at a finite fleet.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

On log-log paper the uncapped law is

$$\\ln C=\\ln 5+\\frac{4}{5}\\ln m$$

That is a straight line in the coordinates $(\\ln m,\\ln C)$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

The overview recovered

$$C(m)=5 m^{\\frac{4}{5}}$$

A fleet of

$$243=3^{5}$$

$$3^{5}=243$$

$$243=243$$

 machines sustains

$$C(243)=5\\cdot 243^{\\frac{4}{5}}$$

$$243^{\\frac{4}{5}}=\\bigl(243^{\\frac{1}{5}}\\bigr)^{4}$$

$$243^{\\frac{1}{5}}=3$$

$$3^{4}=81$$

$$C(243)=5\\cdot 81$$

$$C(243)=405$$

$$C(243)=1215^{\\frac{4}{5}}$$

$$243^{\\frac{1}{5}}=\\bigl(243^{\\frac{1}{5}}\\bigr)^{1}$$

$$3^{1}=3$$

The claim compares this with $400$. We have $405>400$.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The contracted ceiling binds when

$$5 m^{\\frac{4}{5}}=500$$

$$m=100^{\\frac{5}{4}}$$

$$m=100\\sqrt{10}\\approx 316$$

The claim is that it binds before $250$ machines. We have $316>250$.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 37,
    solution_overview: `Sustained capacity is $C(m)=A m^{\\frac{4}{5}}$ with $C(32)=80$. The contract will not certify more than $500$ requests per second.

**Part 1: Translate.**

The fleet of $32=2^{5}$ machines fixes $A$:

$$A\\cdot 32^{\\frac{4}{5}}=80 \\tag{1}$$

**Part 2: Solve.**

$$32^{\\frac{4}{5}}=16, \\qquad A=5$$

The recovered uncapped capacity is

$$C(m)=5 m^{\\frac{4}{5}}$$`,
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

The overview recovered

$$\\Pi(L)=120 L^{\\frac{1}{2}}-6L$$

That is a difference of two powers with different exponents, not a single monomial, so net gain is not a power function of hours hired.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Net gain is maximised where

$$\\Pi'(L)=0$$

:

$$60 L^{-\\frac{1}{2}}=6
$$

$$L=100$$

Net gain is zero where

$$\\Pi(L)=0$$

 on $L>0$:

$$120 L^{\\frac{1}{2}}=6L
$$

$$L=400$$

Those hours are not the same.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The wage bill is

$$6L=6 L^{1}$$

That is a monomial in hours hired.

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is True.`,
    `**D.** → True

The overview recovered

$$\\Pi(L)=120\\sqrt{L}-6L$$

At $900$ hours:

$$\\Pi(900)=120\\cdot 30-6\\cdot 900$$

$$\\Pi(900)=3600-6\\cdot 900$$

$$\\Pi(900)=3600-5400$$

$$\\Pi(900)=-1800$$

The claim compares this with $-1000$. We have $-1800<-1000$.

So the statement is True.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

Net gain crosses zero on $L>0$ where

$$120\\sqrt{L}=6L
$$

$$L=400$$

The claim is a crossing after more than $300$ hours. We have $400>300$.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 38,
    solution_overview: `Revenue is $R(L)=A L^{\\frac{1}{2}}$ for $L>0$ hours. Extending labour from $100$ to $400$ hours raised revenue by $1200$. Net gain is $R(L)-6L$.

**Part 1: Translate.**

Both hour counts are perfect squares, so the recorded gain is

$$A\\cdot 400^{\\frac{1}{2}}-A\\cdot 100^{\\frac{1}{2}}=1200 \\tag{1}$$

**Part 2: Solve.**

$$20A-10A=1200, \\qquad A=120$$

The recovered revenue and net gain are

$$R(L)=120 L^{\\frac{1}{2}}, \\qquad \\Pi(L)=120 L^{\\frac{1}{2}}-6L$$`,
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

Name the recovered power rule, then substitute the claimed input.

Concentrating all $60$ units in plant 2, the cheaper plant, costs

$$C_2(60)=\\frac{1}{4}\\cdot 3600$$

$$C_2(60)=900$$

Splitting $20$ to plant 1 and $40$ to plant 2 costs

$$C_1(20)+C_2(40)=200+400$$

$$C_1(20)+C_2(40)=600$$

and $600<900$, so sending every unit to one plant is not cheapest.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Total cost depends on the split $q$ versus $60-q$:

$$C(q)=\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}$$

The $20$-$40$ split costs $600$, while concentrating in plant 2 costs $900$. Those are two different totals for the same $60$-unit order, so the plants together do not follow a single power of $60$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Plant 2's cost per unit is

$$\\frac{C_2(q)}{q}=\\frac{1}{4} q$$

The leftover exponent is positive, so unit cost rises as plant 2 produces more. At $20$ and $40$ units:

$$\\frac{1}{4}\\cdot 20$$

$$\\frac{C_2(q)}{q}=5, \\qquad \\frac{1}{4}\\cdot 40$$

$$\\frac{C_2(q)}{q}=10$$

and $10>5$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

The cheaper plant is plant 2, since $k<A$. Concentrating all $60$ units there costs

$$C_2(60)=\\frac{1}{4}\\cdot 3600$$

$$C_2(60)=900$$

The claim compares this with $800$. We have $900>800$.

So the statement is True.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

Sending $30$ units to each plant costs

$$C_1(30)+C_2(30)=\\frac{1}{2}\\cdot 900+\\frac{1}{4}\\cdot 900$$

$$C_1(30)+C_2(30)=450+225$$

$$C_1(30)+C_2(30)=675$$

The claim compares this with $700$. We have $675<700$.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 39,
    solution_overview: `Plant 1 costs $C_1(q)=A q^{2}$ with $C_1(20)=200$. Plant 2 costs $C_2(q)=k q^{2}$ with $C_2(40)=400$. The firm must produce $60$ units.

**Part 1: Translate.**

Each recorded run fixes one coefficient:

$$A\\cdot 20^{2}=200 \\tag{1}$$

$$k\\cdot 40^{2}=400 \\tag{2}$$

**Part 2: Solve.**

$$A=\\frac{1}{2}, \\qquad k=\\frac{1}{4}$$

The recovered plant costs are

$$C_1(q)=\\frac{1}{2} q^{2}, \\qquad C_2(q)=\\frac{1}{4} q^{2}$$`,
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

Name the recovered power rule, then substitute the claimed input.

Both fitted points sit on the recovered law:

$$3\\cdot 4^{\\frac{3}{2}}=3\\cdot 8$$

$$4^{\\frac{3}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{3}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{3}=8$$

$$3\\cdot 4^{\\frac{3}{2}}=24$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$2^{1}=2$$

$$3\\cdot 16^{\\frac{3}{2}}=3\\cdot 64$$

$$16^{\\frac{3}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{3}$$

$$16^{\\frac{1}{2}}=4$$

$$4^{3}=64$$

$$3\\cdot 16^{\\frac{3}{2}}=192$$

$$16^{\\frac{1}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{1}=4$$

so the first two measurements are consistent with a single power.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

An exponent of $2$ would require

$$4^{2}=16$$

The observed ratio from (1) is $8$, not $16$. The recovered

$$r=\\frac{3}{2}$$

 is therefore not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The fitted response at

$$x=9$$

 is

$$3\\cdot 9^{\\frac{3}{2}}=3\\cdot 27$$

$$9^{\\frac{3}{2}}=\\bigl(9^{\\frac{1}{2}}\\bigr)^{3}$$

$$9^{\\frac{1}{2}}=3$$

$$3^{3}=27$$

$$3\\cdot 9^{\\frac{3}{2}}=81$$

$$9^{\\frac{1}{2}}=\\bigl(9^{\\frac{1}{2}}\\bigr)^{1}$$

$$3^{1}=3$$

That matches the recorded $81$, so the measurement does not contradict the fitted law.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

The fitted law at

$$x=25$$

 predicts

$$3\\cdot 25^{\\frac{3}{2}}=3\\cdot 125$$

$$25^{\\frac{3}{2}}=\\bigl(25^{\\frac{1}{2}}\\bigr)^{3}$$

$$25^{\\frac{1}{2}}=5$$

$$5^{3}=125$$

$$3\\cdot 25^{\\frac{3}{2}}=375$$

$$25^{\\frac{1}{2}}=\\bigl(25^{\\frac{1}{2}}\\bigr)^{1}$$

$$5^{1}=5$$

The claim compares this with $350$. We have $375>350$.

So the statement is True.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

The fitted response at

$$x=9$$

 is

$$3\\cdot 9^{\\frac{3}{2}}=81$$

$$9^{\\frac{3}{2}}=\\bigl(9^{\\frac{1}{2}}\\bigr)^{3}$$

$$9^{\\frac{1}{2}}=3$$

$$3^{3}=27$$

$$9^{\\frac{1}{2}}=\\bigl(9^{\\frac{1}{2}}\\bigr)^{1}$$

$$3^{1}=3$$

The claim compares this with $70$. Compare with the claim:

$$81>70$$

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 40,
    solution_overview: `An analyst fits $y=A x^{r}$ to the measurements $(4,24)$ and $(16,192)$.

**Part 1: Translate.**

The ratio cancels $A$:

$$\\left(\\frac{16}{4}\\right)^{r}=\\frac{192}{24} \\tag{1}$$

Either point then fixes $A$:

$$A\\cdot 4^{r}=24 \\tag{2}$$

**Part 2: Solve.**

$$4^{r}=8, \\qquad r=\\frac{3}{2}$$

$$A\\cdot 8=24, \\qquad A=3$$

The recovered fit is

$$y=3 x^{\\frac{3}{2}}$$`,
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

The overview recovered

$$p=80 q^{-\\frac{1}{2}}$$

That is a monomial in $q$, coefficient $80$ and exponent $-\\frac{1}{2}$. There is no leftover constant and no logarithm.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of the inverse at $25$ units. The overview recovered

$$p=80 q^{-\\frac{1}{2}}$$

$$p(25)=80\\cdot 25^{-\\frac{1}{2}}$$

$$p(25)=2000^{-\\frac{1}{2}}$$

$$25^{-\\frac{1}{2}}=\\frac{1}{5}$$

$$p(25)=16$$

Sixteen sits under $20$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Revenue as a function of price is the leftover power after multiplying demand by $p$. The overview recovered

$$R(p)=6400 p^{-1}$$

 The leftover exponent is negative, so raising the catalogue price cuts revenue. At the catalogue price and at twice that price:

$$R(4)=1600$$

$$R(8)=800$$

Revenue falls.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Revenue as a function of quantity is the leftover power after multiplying price by $q$. The overview recovered

$$R(q)=80 q^{\\frac{1}{2}}$$

 At $100$ units:

$$R(100)=80\\cdot 100^{\\frac{1}{2}}$$

$$100^{\\frac{1}{2}}=\\bigl(100^{\\frac{1}{2}}\\bigr)^{1}$$

$$100^{\\frac{1}{2}}=10$$

$$10^{1}=10$$

$$R(100)=80\\cdot 10$$

$$R(100)=800$$

$$R(100)=8000^{\\frac{1}{2}}$$

$$100^{\\frac{1}{2}}$$

$$R(100)=10$$

Eight hundred sits above $750$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The claim treats a falling $q(p)$ as if revenue had to fall when quantity rises. The overview recovered

$$R(q)=80 q^{\\frac{1}{2}}$$

 The leftover exponent

$$\\frac{1}{2}$$

 is positive, so a larger quantity brings in more revenue. From

$$q=25$$

 to

$$q=100$$

:

$$R(25)=400$$

$$R(100)=800$$

Revenue rises with quantity.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 41,
    solution_overview: `Demand is $q(p)=A p^{-2}$ units at a price $p>0$ euros. A catalogue price of $4$ euros clears $400$ units. Revenue is $R=pq$.

**Part 1: Translate.**

The exponent is given, so the catalogue pair pins $A$:

$$A\\cdot 4^{-2}=400$$

$$A\\cdot \\frac{1}{16}=400$$

**Part 2: Solve.**

$$A=6400$$

The recovered demand is $q(p)=6400 p^{-2}$. Isolating price takes the reciprocal square root:

$$p=80 q^{-\\frac{1}{2}}$$

Revenue along the curve is then

$$R(q)=80 q^{\\frac{1}{2}}, \\qquad R(p)=6400 p^{-1}.$$`,
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

Name the recovered power rule, then substitute the claimed input.

Average product is output per labour hour. The overview recovered

$$\\frac{Y}{L}=20 L^{-\\frac{1}{2}}$$

 The leftover exponent is negative, so average product falls as the shift lengthens. At the two logged shifts:

$$\\frac{Y(9)}{9}=\\frac{20}{3}$$

$$\\frac{Y(36)}{36}=\\frac{10}{3}$$

The later average is smaller.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of output at $36$ hours. The overview recovered

$$Y(L)=20 L^{\\frac{1}{2}}$$

$$Y(36)=20\\cdot 36^{\\frac{1}{2}}$$

$$36^{\\frac{1}{2}}=\\bigl(36^{\\frac{1}{2}}\\bigr)^{1}$$

$$36^{\\frac{1}{2}}=6$$

$$6^{1}=6$$

$$Y(36)=20\\cdot 6$$

$$Y(36)=120$$

$$Y(36)=720^{\\frac{1}{2}}$$

$$36^{\\frac{1}{2}}$$

$$Y(36)=6$$

One hundred and twenty sits above $100$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

An extra hour is the derivative of output. The overview recovered

$$Y(L)=20 L^{\\frac{1}{2}}$$

, so

$$Y'(L)=10 L^{-\\frac{1}{2}}$$

The leftover exponent is negative. At nine hours:

$$Y'(9)=\\frac{10}{3}$$

At thirty-six hours:

$$Y'(36)=\\frac{10}{6}$$

An extra hour adds less after $36$ hours than after $9$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

The nine-hour output is

$$Y(9)=20\\cdot 3$$

$$Y(9)=60$$

Doubling that output means

$$Y(L)=120$$

. The overview recovered

$$Y(L)=20 L^{\\frac{1}{2}}$$

, so

$$20 L^{\\frac{1}{2}}=120$$

$$L^{\\frac{1}{2}}=6$$

$$L=36$$

Hours must go from $9$ to $36$, which is more than a doubling.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level of average product at $25$ hours. The overview recovered

$$\\frac{Y}{L}=20 L^{-\\frac{1}{2}}$$

$$\\frac{Y(25)}{25}=20\\cdot 25^{-\\frac{1}{2}}$$

$$\\frac{Y(25)}{25}=500^{-\\frac{1}{2}}$$

$$25^{-\\frac{1}{2}}=\\frac{1}{5}$$

$$\\frac{Y(25)}{25}=4$$

Four sits below $5$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 42,
    solution_overview: `Output follows $Y(L)=A L^{\\frac{1}{2}}$ units for $L>0$ labour hours. Extending a shift from $9$ hours to $36$ hours added $60$ units. Average product is $\\frac{Y}{L}$.

**Part 1: Translate.**

The exponent is given, so the recorded jump is a difference of square roots and pins $A$:

$$A\\bigl(36^{\\frac{1}{2}}-9^{\\frac{1}{2}}\\bigr)=60$$

$$A(6-3)=60$$

**Part 2: Solve.**

$$A=20$$

The recovered output is $Y(L)=20 L^{\\frac{1}{2}}$. Average product then lowers the exponent by one:

$$\\frac{Y}{L}=20 L^{-\\frac{1}{2}}.$$`,
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

Name the recovered power rule, then substitute the claimed input.

Break-even is

$$\\Pi(q)=0$$

The overview recovered the two positive roots

$$q=100$$

 and

$$q=400$$

Those are two different positive outputs.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of profit at $25$ units. The overview recovered

$$\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400$$

$$\\Pi(25)=60\\cdot 5-50-400$$

$$\\Pi(25)=300-50-400$$

$$\\Pi(25)=-150$$

Minus one hundred and fifty sits more than $100$ euros below zero.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

The overview recovered break-evens at

$$q=100$$

 and

$$q=400$$

. Past the larger root the linear charge dominates the square-root revenue. At

$$q=625$$

:

$$\\Pi(625)=60\\cdot 25-1250-400$$

$$\\Pi(625)=1500-1250-400$$

$$\\Pi(625)=-150$$

Profit turns negative again.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

The overview recovered

$$R(q)=60 q^{\\frac{1}{2}}$$

 and

$$\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400$$

Revenue is a monomial in $q$. Profit subtracts both a linear term and a constant, so it is not a monomial.

A leftover intercept or a second exponent kills the power-function shape.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level of profit at $225$ units. The overview recovered

$$\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400$$

$$\\Pi(225)=60\\cdot 15-450-400$$

$$\\Pi(225)=900-450-400$$

$$\\Pi(225)=50$$

Fifty does not sit above $80$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 43,
    solution_overview: `Revenue is $R(q)=A q^{\\frac{1}{2}}$ euros for $q>0$ units, with variable cost $2q$ and a fixed charge of $400$ euros. A run of $100$ units brought in $600$ euros of revenue. Profit is $\\Pi=R-2q-400$.

**Part 1: Translate.**

The hundred-unit invoice pins $A$:

$$A\\cdot 100^{\\frac{1}{2}}=600$$

$$10A=600$$

**Part 2: Solve.**

$$A=60$$

The recovered revenue is $R(q)=60 q^{\\frac{1}{2}}$, and profit is

$$\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400.$$

Break-even is $\\Pi=0$. Set $t=q^{\\frac{1}{2}}$:

$$60t-2t^{2}-400=0$$

$$t^{2}-30t+200=0$$

$$(t-10)(t-20)=0$$

The positive roots square to $q=100$ and $q=400$.`,
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

Name the recovered power rule, then substitute the claimed input.

Benefit and cost meet where

$$B(x)=C(x)$$

. The overview recovered

$$B(x)=18 x^{\\frac{1}{2}}$$

 and

$$C(x)=\\frac{1}{2} x^{\\frac{3}{2}}$$

.

$$18 x^{\\frac{1}{2}}=\\frac{1}{2} x^{\\frac{3}{2}}$$

$$36=x$$

The only positive solution is

$$x=36$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of cost at scale $16$. The overview recovered

$$C(x)=\\frac{1}{2} x^{\\frac{3}{2}}$$

$$C(16)=\\frac{1}{2}\\cdot 16^{\\frac{3}{2}}$$

$$16^{\\frac{3}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{3}$$

$$16^{\\frac{1}{2}}=4$$

$$4^{3}=64$$

$$C(16)=\\frac{1}{2}\\cdot 64$$

$$16^{\\frac{1}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{1}=4$$

$$16^{\\frac{3}{2}}$$

$$C(16)=64$$

$$C(16)=32$$

Thirty-two sits above $30$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The claim compares the two exponents the wrong way round. The overview recovered benefit exponent

$$\\frac{1}{2}$$

 and cost exponent

$$\\frac{3}{2}$$

.

$$\\frac{3}{2}>\\frac{1}{2}$$

Cost has the larger exponent, so it overtakes benefit past the unique meeting and stays ahead. At

$$x=64$$

:

$$B(64)=144$$

$$C(64)=256$$

Cost has overtaken.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

This is a level of net benefit at scale $9$. The overview recovered

$$B(x)=18 x^{\\frac{1}{2}}$$

 and

$$C(x)=\\frac{1}{2} x^{\\frac{3}{2}}$$

.

$$B(9)=18\\cdot 3$$

$$B(9)=54$$

$$C(9)=\\frac{1}{2}\\cdot 27$$

$$C(9)=13.5$$

$$B(9)-C(9)=40.5$$

Forty point five does not exceed $42$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Benefit per million of cost is the ratio of the two recovered curves:

$$\\frac{B(x)}{C(x)}=\\frac{18 x^{\\frac{1}{2}}}{\\frac{1}{2} x^{\\frac{3}{2}}}$$

$$\\frac{B(x)}{C(x)}=\\frac{36}{x}$$

That leftover power of $x$ is not constant. At the cost trial, the benefit trial, and the meeting:

$$\\frac{B(4)}{C(4)}=9
$$

$$\\frac{B(16)}{C(16)}=2.25
$$

$$\\frac{B(36)}{C(36)}=1$$

Three different ratios.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 44,
    solution_overview: `Benefit is $B(x)=A x^{\\frac{1}{2}}$ and cost is $C(x)=K x^{\\frac{3}{2}}$, both in millions, for scale $x>0$. A trial at scale $16$ delivered $72$ million of benefit. A trial at scale $4$ cost $4$ million. Net benefit is $B-C$.

**Part 1: Translate.**

Each curve has a known exponent and one trial:

$$A\\cdot 16^{\\frac{1}{2}}=72$$

$$4A=72$$

$$K\\cdot 4^{\\frac{3}{2}}=4$$

$$8K=4$$

**Part 2: Solve.**

$$A=18, \\qquad K=\\frac{1}{2}$$

The recovered curves are

$$B(x)=18 x^{\\frac{1}{2}}, \\qquad C(x)=\\frac{1}{2} x^{\\frac{3}{2}}.$$`,
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

The overview recovered

$$r=\\frac{2}{3}$$

An exponent smaller than one means multiplying the feed by $k$ multiplies throughput only by $k^{r}$.

$$\\frac{2}{3}<1$$

Throughput grows more slowly than the gas feed.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

The licensed ceiling is

$$T=32$$

. The overview recovered

$$T(g)=4 g^{\\frac{2}{3}}$$

, so

$$4 g^{\\frac{2}{3}}=32$$

$$g^{\\frac{2}{3}}=8$$

$$g=8^{\\frac{3}{2}}$$

$$g=16\\sqrt{2}$$

$$16\\sqrt{2}\\approx 22.63$$

That feed sits below $24$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling the gas feed is the multiplier

$$k=2$$

. The overview recovered

$$r=\\frac{2}{3}$$

, so the throughput factor is

$$\\frac{T(2g)}{T(g)}=2^{\\frac{2}{3}}$$

$$2^{\\frac{2}{3}}\\approx 1.587$$

That is not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Throughput per cubic metre is the average $T/g$. The overview recovered

$$T(g)=4 g^{\\frac{2}{3}},$$ so

$$\\frac{T(g)}{g}=4 g^{-\\frac{1}{3}}$$

The leftover exponent is negative, so the average falls as the feed rises.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

This is a level of throughput at a feed of $64$. The overview recovered

$$T(g)=4 g^{\\frac{2}{3}}$$

$$T(64)=4\\cdot 64^{\\frac{2}{3}}$$

$$64^{\\frac{2}{3}}=\\bigl(64^{\\frac{1}{3}}\\bigr)^{2}$$

$$64^{\\frac{1}{3}}=4$$

$$4^{2}=16$$

$$T(64)=4\\cdot 16$$

$$T(64)=64$$

$$T(64)=256^{\\frac{2}{3}}$$

$$64^{\\frac{1}{3}}=\\bigl(64^{\\frac{1}{3}}\\bigr)^{1}$$

$$4^{1}=4$$

$$64^{\\frac{2}{3}}$$

$$T(64)=16$$

Sixty-four sits above $60$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 45,
    solution_overview: `Throughput follows $T(g)=A g^{r}$ tonnes per hour for a gas feed $g>0$. A feed of $8$ gave $16$ tonnes per hour, and a feed of $27$ gave $36$. The site licence caps throughput at $32$ tonnes per hour.

**Part 1: Translate.**

Two unknowns need both runs. The ratio cancels $A$:

$$\\frac{T(27)}{T(8)}=\\left(\\frac{27}{8}\\right)^{r}$$

$$\\frac{36}{16}=\\left(\\frac{27}{8}\\right)^{r}$$

$$\\frac{9}{4}=\\left(\\frac{27}{8}\\right)^{r}$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$ and $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$,

$$\\left(\\frac{3}{2}\\right)^{2}=\\left(\\frac{3}{2}\\right)^{3r}$$

**Part 2: Solve.**

$$3r=2, \\qquad r=\\frac{2}{3}$$

The eight-feed level then pins $A$:

$$A\\cdot 8^{\\frac{2}{3}}=16$$

$$8^{\\frac{2}{3}}=4, \\qquad A=4$$

The recovered law is $T(g)=4 g^{\\frac{2}{3}}$.`,
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

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$V(d)=4 d^{2}$$

The exponent on depth is $2$.

$$2>1$$

Stored volume grows faster than depth.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of storage at $6$ metres. The overview recovered

$$V(d)=4 d^{2}$$

$$V(6)=4\\cdot 36$$

$$V(6)=144$$

One hundred and forty-four sits above $140$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling stored volume inverts the square law. The overview recovered

$$V(d)=4 d^{2}$$

, so

$$\\frac{V(kd)}{V(d)}=k^{2}$$

$$k^{2}=2 \\Rightarrow k$$

$$k^{2}=\\sqrt{2}$$

$$\\sqrt{2}<2$$

Depth scales by $\\sqrt{2}$, which is not more than a doubling.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

A pure power with a positive exponent has no horizontal asymptote. The overview recovered

$$V(d)=4 d^{2}$$

As

$$d\\to\\infty$$

,

$$V(d)\\to\\infty$$

Tapering changes the coefficient, not the fact that volume grows without a cap.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The added volume from $4$ metres to $8$ metres is a difference of two levels. The overview recovered

$$V(d)=4 d^{2}$$

$$V(8)=4\\cdot 64$$

$$V(8)=256$$

$$V(4)=4\\cdot 16$$

$$V(4)=64$$

$$V(8)-V(4)=192$$

One hundred and ninety-two is not more than $200$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 46,
    solution_overview: `Storage follows $V(d)=A d^{2}$ cubic metres at depth $d>0$ metres. Raising the water from $3$ metres to $5$ metres added $64$ cubic metres.

**Part 1: Translate.**

The exponent is given, so the survey is a difference of squares and pins $A$:

$$A\\bigl(5^{2}-3^{2}\\bigr)=64$$

$$A(25-9)=64$$

**Part 2: Solve.**

$$16A=64, \\qquad A=4$$

The recovered storage is $V(d)=4 d^{2}$.`,
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

Name the recovered power rule, then substitute the claimed input.

Equal speed increments are the derivative of the index. The overview recovered

$$E(v)=\\frac{1}{20} v^{2}$$

, so

$$E'(v)=\\frac{v}{10}$$

The leftover power is positive, so the slope itself rises with speed. At the two survey speeds:

$$E'(30)=3, \\qquad E'(50)$$

$$E'(30)=5$$

The later increment adds more.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of the index at $40$ kilometres per hour. The overview recovered

$$E(v)=\\frac{1}{20} v^{2}$$

$$E(40)=\\frac{1}{20}\\cdot 1600$$

$$E(40)=80$$

Eighty sits above $70$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The index per kilometre per hour is the average $E/v$. The overview recovered

$$E(v)=\\frac{1}{20} v^{2}$$

, so

$$\\frac{E(v)}{v}=\\frac{v}{20}$$

The leftover exponent is positive, so that average is not the same at every speed. At the two survey speeds:

$$\\frac{E(30)}{30}=1.5
$$

$$\\frac{E(50)}{50}=2.5$$

Two different averages.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

The speed that produces a given index is the inverse of

$$E(v)=\\frac{1}{20} v^{2}$$

The overview recovered that law, so

$$v=(20E)^{\\frac{1}{2}}$$

The inverse exponent

$$\\frac{1}{2}$$

 sits below one, so speed grows more slowly than the index.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level of the index at $80$ kilometres per hour. The overview recovered

$$E(v)=\\frac{1}{20} v^{2}$$

$$E(80)=\\frac{1}{20}\\cdot 6400$$

$$E(80)=320$$

Three hundred and twenty does not sit under $300$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 47,
    solution_overview: `The braking-energy index is $E(v)=A v^{2}$ for speed $v>0$ kilometres per hour. Raising the test speed from $30$ to $50$ kilometres per hour raised the index by $80$ points.

**Part 1: Translate.**

The exponent is given, so the logged gap is a difference of squares and pins $A$:

$$A\\bigl(50^{2}-30^{2}\\bigr)=80$$

$$A(2500-900)=80$$

**Part 2: Solve.**

$$1600A=80, \\qquad A=\\frac{1}{20}$$

The recovered index is $E(v)=\\frac{1}{20} v^{2}$.`,
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

Name the recovered power rule, then substitute the claimed input.

Steel and capacity are both powers of height. The overview recovered steel exponent $2$ and capacity exponent $3$.

$$2<3$$

The smaller exponent is on steel, so steel use grows more slowly than capacity as height rises.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of capacity at $4$ metres. The overview recovered

$$V(h)=h^{3}$$

$$V(4)=64$$

Sixty-four sits above $60$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Steel as a function of capacity eliminates the common height. The overview recovered

$$S(h)=3 h^{2}$$

 and

$$V(h)=h^{3}$$

, so

$$h=V^{\\frac{1}{3}}$$

 and

$$S=3\\bigl(V^{\\frac{1}{3}}\\bigr)^{2}$$

$$S=3 V^{\\frac{2}{3}}$$

That is a monomial in $V$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Two separate $2$-metre silos use twice the recovered

$$S(2)$$

 The overview recovered

$$S(h)=3 h^{2}$$

$$2\\cdot S(2)=2\\cdot 12$$

$$2\\cdot S(2)=24$$

$$S(4)=3\\cdot 16$$

$$S(4)=48$$

Twenty-four is not forty-eight.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level of steel at $8$ metres. The overview recovered

$$S(h)=3 h^{2}$$

$$S(8)=3\\cdot 64$$

$$S(8)=192$$

One hundred and ninety-two does not sit above $200$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 48,
    solution_overview: `Steel use is $S(h)=a h^{2}$ square metres and capacity is $V(h)=k h^{3}$ cubic metres. A $2$-metre silo uses $12$ square metres of steel and holds $8$ cubic metres.

**Part 1: Translate.**

Each law has a known exponent and one recorded pair:

$$a\\cdot 2^{2}=12$$

$$4a=12$$

$$k\\cdot 2^{3}=8$$

$$8k=8$$

**Part 2: Solve.**

$$a=3, \\qquad k=1$$

The recovered laws are $S(h)=3 h^{2}$ and $V(h)=h^{3}$.`,
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

Name the recovered power rule, then substitute the claimed input.

Proportionality would need exponent $1$. The overview recovered

$$T(n)=4 n^{\\frac{1}{2}}$$

, so the exponent is

$$\\frac{1}{2}$$

.

$$\\frac{1}{2}\\neq 1$$

Total inspection time is not proportional to the number of shipments.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

The $40$-hour ceiling inverts the recovered time $T(n)=4 n^{\\frac{1}{2}}$.

$$4 n^{\\frac{1}{2}}=40$$

$$n^{\\frac{1}{2}}=10$$

$$n=100$$

One hundred sits below $110$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Staffing that just meets the ceiling sits at

$$T=40$$

. The overview recovered

$$T(n)=4 n^{\\frac{1}{2}}$$

, which meets $40$ hours at $n=100$. The extra-shipment slope is

$$T'(n)=2 n^{-\\frac{1}{2}}$$

$$T'(100)=0.2$$

An extra shipment still adds $0.2$ hours and pushes the total past $40$. A modestly larger consignment is not covered.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Quadrupling a consignment is the multiplier

$$k=4$$

The overview recovered exponent

$$\\frac{1}{2}$$

, so

$$\\frac{T(4n)}{T(n)}=4^{\\frac{1}{2}}$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{1}=2$$

$$\\frac{T(4n)}{T(n)}=2$$

Inspection time is multiplied by two.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level of inspection time at $49$ shipments. The overview recovered

$$T(n)=4 n^{\\frac{1}{2}}$$

$$T(49)=4\\cdot 7$$

$$T(49)=28$$

Twenty-eight is not more than $30$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 49,
    solution_overview: `Inspection time follows $T(n)=A n^{\\frac{1}{2}}$ hours for $n>0$ shipments. Moving from a $4$-shipment consignment to a $36$-shipment consignment added $16$ hours. Staffing supplies at most $40$ inspection hours.

**Part 1: Translate.**

The exponent is given, so the sixteen-hour jump pins $A$:

$$A\\bigl(36^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=16$$

$$A(6-2)=16$$

**Part 2: Solve.**

$$4A=16, \\qquad A=4$$

The recovered time is $T(n)=4 n^{\\frac{1}{2}}$.`,
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

Name the recovered power rule, then substitute the claimed input.

Doubling the distance is the multiplier

$$k=2$$

The overview recovered exponent $-2$, so

$$\\frac{I(2d)}{I(d)}=2^{-2}$$

$$\\frac{I(2d)}{I(d)}=\\frac{1}{4}$$

Illuminance is cut to one quarter.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of illuminance at $5$ metres. The overview recovered

$$I(d)=800 d^{-2}$$

$$I(5)=\\frac{800}{25}$$

$$I(5)=32$$

Thirty-two sits under $40$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

An extra metre is the size of the derivative. The overview recovered

$$I(d)=800 d^{-2}$$

, so

$$I'(d)=-1600 d^{-3}$$

The cut is larger nearer the lamp. At the two named distances:

$$\\lvert I'(2)\\rvert=200, \\qquad \\lvert I'(4)\\rvert$$

$$\\lvert I'(2)\\rvert=25$$

An extra metre cuts less illuminance at $4$ metres than at $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

A nonzero power inverts to another power. The overview recovered

$$I(d)=800 d^{-2},$$ so isolating distance gives

$$d=\\sqrt{800}\\, I^{-\\frac{1}{2}}$$

Distance as a function of illuminance is still a monomial in $I$. Falling illuminance does not introduce a logarithm.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level of illuminance at $3$ metres. The overview recovered

$$I(d)=800 d^{-2}$$

$$I(3)=\\frac{800}{9}$$

$$\\frac{800}{9}\\approx 88.89$$

That reading does not sit above $90$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 50,
    solution_overview: `Illuminance follows $I(d)=A d^{-2}$ lux at distance $d>0$ metres. Moving the meter from $2$ metres to $4$ metres cut the reading by $150$ lux.

**Part 1: Translate.**

The exponent is given, so the logged drop pins $A$:

$$A\\bigl(2^{-2}-4^{-2}\\bigr)=150$$

$$A\\bigl(\\frac{1}{4}-\\frac{1}{16}\\bigr)=150$$

$$A\\cdot \\frac{3}{16}=150$$

**Part 2: Solve.**

$$A=800$$

The recovered illuminance is $I(d)=800 d^{-2}$.`,
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

The overview recovered exponent

$$\\frac{3}{4}$$

. An exponent smaller than one means the bill still rises with the book, yet it lags the account count.

$$\\frac{3}{4}<1$$

The bill grows more slowly than the number of accounts.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling the number of accounts would double the bill only if the exponent were $1$. The overview recovered

$$r=\\frac{3}{4}$$

, so

$$\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}$$

$$2^{\\frac{3}{4}}\\approx 1.682$$

That is not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of the bill at $81$ accounts. The overview recovered

$$C(n)=100 n^{\\frac{3}{4}}$$

$$C(81)=100\\cdot 81^{\\frac{3}{4}}$$

$$81^{\\frac{3}{4}}=\\bigl(81^{\\frac{1}{4}}\\bigr)^{3}$$

$$81^{\\frac{1}{4}}=3$$

$$3^{3}=27$$

$$C(81)=100\\cdot 27$$

$$C(81)=2700$$

$$C(81)=8100^{\\frac{3}{4}}$$

$$81^{\\frac{1}{4}}=\\bigl(81^{\\frac{1}{4}}\\bigr)^{1}$$

$$3^{1}=3$$

$$81^{\\frac{3}{4}}$$

$$C(81)=27$$

Two thousand seven hundred sits above $2500$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

An extra account is the derivative of the bill. The overview recovered

$$C(n)=100 n^{\\frac{3}{4}}$$

, so

$$C'(n)=75 n^{-\\frac{1}{4}}$$

At sixteen accounts:

$$C'(16)=\\frac{75}{2}$$

At eighty-one accounts:

$$C'(81)=25$$

Because

$$25<\\frac{75}{2}$$

, an extra account adds less after eighty-one than after sixteen.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

This letter inverts a bill of $12500$. The overview recovered

$$C(n)=100 n^{\\frac{3}{4}}$$

$$100 n^{\\frac{3}{4}}=12500$$

$$n^{\\frac{3}{4}}=125$$

$$125=5^{3}$$

$$5^{3}=125$$

$$125=125$$

$$n=5^{4}$$

$$5^{4}=625$$

$$n=625$$

Six hundred and twenty-five sits above $600$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 51,
    solution_overview: `Audit cost follows $C(n)=A n^{0.75}$ for $n>0$ accounts. The bill rises by $1900$ when engagement size rises from $16$ to $81$ accounts.

**Part 1: Translate.**

The exponent $\\frac{3}{4}$ is given, so the recorded rise pins $A$. Both sizes are fourth powers:

$$16^{\\frac{3}{4}}=8, \\qquad 81^{\\frac{3}{4}}=27$$

$$A(27-8)=1900$$

**Part 2: Solve.**

$$19A=1900$$

$$A=100$$

The recovered bill is $C(n)=100 n^{\\frac{3}{4}}$.`,
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

Name the recovered power rule, then substitute the claimed input.

Inverse-linear decay would carry exponent $-1$. The overview recovered exponent $-\\frac{3}{2}$.

$$-\\frac{3}{2}<-1$$

The doubling factor is then

$$2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}\\approx 0.354,$$ steeper than

$$\\frac{1}{2}$$

. Concentration falls faster than inverse-linear decay.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Concentration per metre is the intensity $c(x)/x$. The overview recovered

$$c(x)=400 x^{-\\frac{3}{2}},$$ so

$$\\frac{c(x)}{x}=400 x^{-\\frac{5}{2}}$$

The leftover exponent is not $0$, so the intensity still depends on range.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of concentration at $100$ metres. The overview recovered

$$c(x)=400 x^{-\\frac{3}{2}}$$

$$c(100)=400\\cdot 100^{-\\frac{3}{2}}$$

$$c(100)=40000^{-\\frac{3}{2}}$$

$$100^{-\\frac{3}{2}}=\\frac{1}{1000}$$

$$c(100)=0.4$$

Four tenths sits below one half.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

A nonzero power inverts to another power. The overview recovered

$$c=400 x^{-\\frac{3}{2}},$$ so isolating distance raises both sides to the reciprocal

$$-\\frac{2}{3}$$

:

$$x=\\left(\\frac{400}{c}\\right)^{\\frac{2}{3}}$$

Distance needed for a given concentration is still a monomial in $c$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level at the nearer monitor. The overview recovered

$$c(x)=400 x^{-\\frac{3}{2}}$$

$$c(4)=400\\cdot 4^{-\\frac{3}{2}}$$

$$c(4)=1600^{-\\frac{3}{2}}$$

$$4^{-\\frac{3}{2}}=\\frac{1}{8}$$

$$c(4)=50$$

Fifty is not under forty-five.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 52,
    solution_overview: `Concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre at distance $x>0$ metres. A monitor at $4$ metres reads $43.75$ more than a monitor at $16$ metres.

**Part 1: Translate.**

The exponent $-\\frac{3}{2}$ is given, so the recorded gap pins $A$:

$$4^{-\\frac{3}{2}}=\\frac{1}{8}, \\qquad 16^{-\\frac{3}{2}}=\\frac{1}{64}$$

$$A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=43.75$$

$$A\\cdot \\frac{7}{64}=43.75$$

**Part 2: Solve.**

$$A=400$$

The recovered concentration is $c(x)=400 x^{-\\frac{3}{2}}$.`,
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

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$L(w)=4 w^{\\frac{3}{2}}$$

A monomial in $w$ is a power of wind speed. There is no leftover constant and no logarithm.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Doubling the wind speed is the multiplier

$$k=2$$

. The overview recovered exponent

$$\\frac{3}{2}$$

, so

$$\\frac{L(2w)}{L(w)}=2^{\\frac{3}{2}}$$

$$2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.828$$

That is not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of the composed loss at wind speed $64$. The overview recovered

$$L(w)=4 w^{\\frac{3}{2}}$$

$$L(64)=4\\cdot 64^{\\frac{3}{2}}$$

$$64^{\\frac{3}{2}}=\\bigl(64^{\\frac{1}{2}}\\bigr)^{3}$$

$$64^{\\frac{1}{2}}=8$$

$$8^{3}=512$$

$$L(64)=4\\cdot 512$$

$$L(64)=2048$$

$$L(64)=256^{\\frac{3}{2}}$$

$$256^{\\frac{3}{2}}=\\bigl(256^{\\frac{1}{2}}\\bigr)^{3}$$

$$256^{\\frac{1}{2}}=16$$

$$16^{3}=4096$$

$$L(64)=4096$$

$$64^{\\frac{1}{2}}=\\bigl(64^{\\frac{1}{2}}\\bigr)^{1}$$

$$8^{1}=8$$

$$256^{\\frac{1}{2}}=\\bigl(256^{\\frac{1}{2}}\\bigr)^{1}$$

$$16^{1}=16$$

$$64^{\\frac{3}{2}}$$

$$L(64)=512$$

Two thousand and forty-eight sits above $2000$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

The overview recovered composed exponent

$$\\frac{3}{2}$$

.

$$\\frac{3}{2}>1$$

Losses accelerate as the wind strengthens.

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

A loss of $1000$ inverts the recovered composition

$$L(w)=4 w^{\\frac{3}{2}}$$

.

$$4 w^{\\frac{3}{2}}=1000$$

$$w^{\\frac{3}{2}}=250$$

$$w=250^{\\frac{2}{3}}\\approx 39.69$$

That wind speed does not sit above $50$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 53,
    solution_overview: `Storm surge is $s(w)=0.5 w^{0.5}$ metres for wind speed $w>0$, and the loss index is $L(s)=32 s^{3}$.

**Part 1: Translate.**

Composing the two stages substitutes the surge into the loss cube:

$$L(w)=32\\left(0.5 w^{0.5}\\right)^{3}$$

$$L(w)=32\\cdot 0.125\\cdot w^{1.5}$$

**Part 2: Solve.**

$$L(w)=4 w^{\\frac{3}{2}}$$

The recovered composition is a monomial in wind speed, coefficient $4$ and exponent $\\frac{3}{2}$.`,
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

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$I(v)=60 v^{\\frac{1}{2}}$$

The exponent on order size is

$$\\frac{1}{2}$$

.

$$\\frac{1}{2}<1$$

Impact grows more slowly than order size.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

The scaled impact charge is $vI(v)$. The overview recovered

$$vI(v)=60 v^{\\frac{3}{2}}$$

, so doubling order size multiplies the scaled charge by

$$\\frac{(2v)I(2v)}{vI(v)}=2^{\\frac{3}{2}}$$

$$2^{\\frac{3}{2}}\\approx 2.828$$

That is not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of impact at $0.16$ ADV. The overview recovered

$$I(v)=60 v^{\\frac{1}{2}}$$

$$I(0.16)=60\\cdot 0.16^{\\frac{1}{2}}$$

$$16^{\\frac{1}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{1}$$

$$16^{\\frac{1}{2}}=4$$

$$4^{1}=4$$

$$I(0.16)=60\\cdot 0.4$$

$$I(0.16)=0.16^{\\frac{1}{2}}$$

$$I(0.16)=0.4$$

$$0.16^{\\frac{1}{2}}$$

$$I(0.16)=24$$

Twenty-four sits above $20$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

The scaled charge overtakes the notional fee where

$$60 v^{\\frac{3}{2}}=30v$$

. The overview recovered those two curves, so for $v>0$

$$2 v^{\\frac{1}{2}}=1$$

$$v=\\frac{1}{4}$$

The leftover exponent on the scaled charge is

$$\\frac{3}{2}>1$$

, so past

 the scaled charge stays larger at every bigger order.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level of the scaled charge at $0.25$ ADV. The overview recovered

$$vI(v)=60 v^{\\frac{3}{2}}$$

$$0.25\\cdot I(0.25)=60\\cdot 0.25^{\\frac{3}{2}}$$

$$25^{\\frac{3}{2}}=\\bigl(25^{\\frac{1}{2}}\\bigr)^{3}$$

$$25^{\\frac{1}{2}}=5$$

$$5^{3}=125$$

$$0.25\\cdot I(0.25)=60\\cdot 0.125$$

$$0.25\\cdot I(0.25)=0.25^{\\frac{3}{2}}$$

$$25^{\\frac{1}{2}}=\\bigl(25^{\\frac{1}{2}}\\bigr)^{1}$$

$$5^{1}=5$$

$$0.25\\cdot I(0.25)=0.125$$

$$0.25^{\\frac{3}{2}}$$

$$60\\cdot 0.125$$

$$0.25\\cdot I(0.25)=7.5$$

Seven point five does not sit above $10$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 54,
    solution_overview: `Price impact is $I(v)=A v^{0.5}$ basis points for order size $v>0$. Increasing an order from $0.04$ ADV to $0.09$ ADV adds $6$ basis points. The scaled impact charge is $vI(v)$, and a notional fee is $F(v)=30v$.

**Part 1: Translate.**

The exponent is given, so the recorded rise pins $A$:

$$A\\bigl(0.09^{\\frac{1}{2}}-0.04^{\\frac{1}{2}}\\bigr)=6$$

$$A(0.3-0.2)=6$$

**Part 2: Solve.**

$$0.1A=6, \\qquad A=60$$

The recovered impact is $I(v)=60 v^{\\frac{1}{2}}$. The scaled charge is then

$$vI(v)=60 v^{\\frac{3}{2}}.$$`,
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

Name the recovered power rule, then substitute the claimed input.

A nonzero power inverts to another power. The overview recovered

$$E=10 m^{\\frac{2}{3}},$$ so isolating mass gives

$$m=\\left(\\frac{E}{10}\\right)^{\\frac{3}{2}}$$

Body mass as a function of daily energy is still a monomial in $E$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

Energy use per kilogram is the average $E/m$. The overview recovered

$$E(m)=10 m^{\\frac{2}{3}},$$ so

$$\\frac{E(m)}{m}=10 m^{-\\frac{1}{3}}$$

The leftover exponent is negative, so energy use per kilogram falls as body mass rises.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of energy at $64$ kg. The overview recovered

$$E(m)=10 m^{\\frac{2}{3}}$$

$$E(64)=10\\cdot 64^{\\frac{2}{3}}$$

$$64^{\\frac{2}{3}}=\\bigl(64^{\\frac{1}{3}}\\bigr)^{2}$$

$$64^{\\frac{1}{3}}=4$$

$$4^{2}=16$$

$$E(64)=10\\cdot 16$$

$$E(64)=160$$

$$E(64)=640^{\\frac{2}{3}}$$

$$64^{\\frac{1}{3}}=\\bigl(64^{\\frac{1}{3}}\\bigr)^{1}$$

$$4^{1}=4$$

$$64^{\\frac{2}{3}}$$

$$E(64)=16$$

One hundred and sixty sits above $150$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Two equal animals use $2E(m)$. One animal of twice the mass uses $E(2m)$. The overview recovered

$$E(m)=10 m^{\\frac{2}{3}}$$

, so

$$\\frac{E(2m)}{E(m)}=2^{\\frac{2}{3}}$$

$$2^{\\frac{2}{3}}<2$$

Combining the two animals cuts total energy use.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

This is a level of energy at $216$ kg. The overview recovered

$$E(m)=10 m^{\\frac{2}{3}}$$

$$E(216)=10\\cdot 216^{\\frac{2}{3}}$$

$$216^{\\frac{2}{3}}=\\bigl(216^{\\frac{1}{3}}\\bigr)^{2}$$

$$216^{\\frac{1}{3}}=6$$

$$6^{2}=36$$

$$E(216)=10\\cdot 36$$

$$E(216)=360$$

$$E(216)=2160^{\\frac{2}{3}}$$

$$216^{\\frac{1}{3}}=\\bigl(216^{\\frac{1}{3}}\\bigr)^{1}$$

$$6^{1}=6$$

$$216^{\\frac{2}{3}}$$

$$E(216)=36$$

Three hundred and sixty sits under $400$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 55,
    solution_overview: `Daily energy use follows $E(m)=A m^{\\frac{2}{3}}$ units for body mass $m>0$ kilograms. A $64$ kg animal uses $70$ more energy units per day than a $27$ kg animal. Herd totals add individual uses.

**Part 1: Translate.**

The exponent $\\frac{2}{3}$ is given, so the recorded gap pins $A$. Both masses are cubes:

$$27^{\\frac{2}{3}}=9, \\qquad 64^{\\frac{2}{3}}=16$$

$$A(16-9)=70$$

**Part 2: Solve.**

$$7A=70, \\qquad A=10$$

The recovered energy is $E(m)=10 m^{\\frac{2}{3}}$.`,
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

The overview recovered

$$f(d)=3200 d^{-1.5}$$

The exponent is negative, so $f$ is strictly decreasing for $d>0$. A farther zone always supplies fewer visitors than a nearer zone.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

An inverse-square law would carry exponent $-2$. The overview recovered exponent $-1.5$.

$$-1.5\\neq -2$$

Footfall is steeper than inverse-linear and shallower than inverse-square.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of footfall at $9$ kilometres. The overview recovered

$$f(d)=3200 d^{-1.5}$$

$$f(9)=\\frac{3200}{9^{1.5}}$$

$$9^{1.5}=27$$

$$f(9)=\\frac{3200}{27}\\approx 118.5$$

One hundred and eighteen sits above $100$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Core catchment ends where

$$f(d)=100$$

. The overview recovered

$$f(d)=3200 d^{-1.5}$$

, so

$$3200 d^{-1.5}=100$$

$$d^{1.5}=32$$

$$d=32^{\\frac{2}{3}}\\approx 10.08$$

That boundary sits before $11$ kilometres.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

An extra kilometre is the size of the derivative. The overview recovered

$$f(d)=3200 d^{-1.5},$$ so

$$f'(d)=-4800 d^{-2.5}$$

The leftover exponent on $\\lvert f'(d)\\rvert$ is negative, so the cut is larger near the park than far from it. An extra kilometre does not cut more visitors far from the park.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 56,
    solution_overview: `Weekly footfall follows $f(d)=A d^{-1.5}$ visitors from a zone $d>0$ kilometres away. A zone $4$ kilometres away supplies $350$ more visitors a week than a zone $16$ kilometres away. Core catchment means at least $100$ visitors a week.

**Part 1: Translate.**

The exponent $-1.5$ is given, so the recorded gap pins $A$:

$$4^{1.5}=8, \\qquad 16^{1.5}=64$$

$$\\frac{A}{8}-\\frac{A}{64}=350$$

$$\\frac{7A}{64}=350$$

**Part 2: Solve.**

$$A=3200$$

The recovered footfall is $f(d)=3200 d^{-1.5}$.`,
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

The overview recovered

$$r=\\frac{1}{2}$$

An exponent smaller than one means multiplying area by $k$ multiplies output only by $k^{r}$.

$$\\frac{1}{2}<1$$

Output grows more slowly than the installed area.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Expanding $225$ m² to $450$ m² is a level of the recovered output

$$y(a)=24 a^{\\frac{1}{2}}$$

.

$$y(450)=24\\cdot 450^{\\frac{1}{2}}$$

$$y(450)=10800^{\\frac{1}{2}}$$

$$450^{\\frac{1}{2}}=15\\sqrt{2}\\approx 21.21$$

$$y(450)\\approx 509.1$$

Five hundred and nine does not sit above $520$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Output per square metre is the average $y/a$. The overview recovered

$$y(a)=24 a^{\\frac{1}{2}},$$ so

$$\\frac{y(a)}{a}=24 a^{-\\frac{1}{2}}$$

The leftover exponent is negative, so output per square metre falls as the array grows.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Doubling the $240$ kWh output means

$$y(a)=480$$

. The overview recovered

$$y(a)=24 a^{\\frac{1}{2}}$$

, so

$$24 a^{\\frac{1}{2}}=480$$

$$a^{\\frac{1}{2}}=20$$

$$a=400$$

Area must go from $100$ to $400$, which is more than a doubling.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

This is a level of output at $400$ m². The overview recovered

$$y(a)=24 a^{\\frac{1}{2}}$$

$$y(400)=24\\cdot 20$$

$$y(400)=480$$

Four hundred and eighty sits above $470$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 57,
    solution_overview: `Daily output follows $y(a)=A a^{r}$ kilowatt-hours for panel area $a>0$ square metres. A $100$ m² array delivers $240$ kWh a day, and a $225$ m² array delivers $360$ kWh.

**Part 1: Translate.**

Two unknowns need both arrays. The ratio cancels $A$:

$$\\left(\\frac{225}{100}\\right)^{r}=\\frac{360}{240}$$

$$2.25^{r}=1.5$$

Because $1.5=2.25^{\\frac{1}{2}}$,

$$r=\\frac{1}{2}$$

The hundred-square-metre array then pins $A$:

$$A\\cdot 100^{\\frac{1}{2}}=240$$

**Part 2: Solve.**

$$A\\cdot 10=240, \\qquad A=24$$

The recovered output is $y(a)=24 a^{\\frac{1}{2}}$.`,
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

Name the recovered power rule, then substitute the claimed input.

Doubling cumulative volume is the multiplier

$$k=2$$

. The overview recovered

$$b=-\\frac{1}{2}$$

, so

$$\\frac{c(2N)}{c(N)}=2^{-\\frac{1}{2}}$$

$$2^{-\\frac{1}{2}}\\approx 0.707$$

That is not

$$\\frac{1}{2}$$

.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → True

The overview recovered

$$c(N)=800 N^{-\\frac{1}{2}}$$

 and

$$S(N)=800 N^{\\frac{1}{2}}$$

The leftover exponent on unit cost is negative, so unit cost falls. The leftover exponent on spend is positive, so cumulative spend still rises. At the two milestones:

$$S(100)=8000
$$

$$S(400)=16000$$

Spend rises while unit cost falls.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of unit cost at $1600$ thousand cells. The overview recovered

$$c(N)=800 N^{-\\frac{1}{2}}$$

$$c(1600)=800\\cdot 1600^{-\\frac{1}{2}}$$

$$c(1600)=1280000^{-\\frac{1}{2}}$$

$$1600^{-\\frac{1}{2}}=\\frac{1}{40}$$

$$c(1600)=20$$

Twenty sits below $25$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Cumulative spend is

$$S=N\\,c(N)$$

The overview recovered

$$S(N)=800 N^{\\frac{1}{2}},$$ so quadrupling volume multiplies spend by

$$\\frac{S(4N)}{S(N)}=4^{\\frac{1}{2}}$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{1}=2$$

$$\\frac{S(4N)}{S(N)}=2$$

Spend doubles, it does not more than double.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

This is a level of unit cost at $25$ thousand cells. The overview recovered

$$c(N)=800 N^{-\\frac{1}{2}}$$

$$c(25)=800\\cdot 25^{-\\frac{1}{2}}$$

$$c(25)=20000^{-\\frac{1}{2}}$$

$$25^{-\\frac{1}{2}}=\\frac{1}{5}$$

$$c(25)=160$$

One hundred and sixty sits above $150$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 58,
    solution_overview: `Unit cost follows $c(N)=A N^{b}$ euros at cumulative volume $N>0$ thousand cells. At $100$ thousand cells the unit cost was $80$, and at $400$ thousand it was $40$. Cumulative spend is $S=N\\,c(N)$.

**Part 1: Translate.**

Two unknowns need both milestones. The ratio cancels $A$:

$$\\left(\\frac{400}{100}\\right)^{b}=\\frac{40}{80}$$

$$4^{b}=\\frac{1}{2}$$

Because $4^{\\frac{1}{2}}=2$ and $4^{-\\frac{1}{2}}=\\frac{1}{2}$,

$$b=-\\frac{1}{2}$$

The first milestone then pins $A$:

$$A\\cdot 100^{-\\frac{1}{2}}=80$$

**Part 2: Solve.**

$$A\\cdot \\frac{1}{10}=80, \\qquad A=800$$

The recovered unit cost is $c(N)=800 N^{-\\frac{1}{2}}$. Cumulative spend is then

$$S(N)=800 N^{\\frac{1}{2}}.$$`,
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

Name the recovered power rule, then substitute the claimed input.

Doubling the discharge is the multiplier

$$k=2$$

. The overview recovered composed exponent $1.5$, so

$$\\frac{S(2q)}{S(q)}=2^{1.5}$$

$$2^{1.5}=2\\sqrt{2}\\approx 2.828$$

That factor sits above $2$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$S(q)=0.625 q^{1.5}$$

A monomial in $q$ is a power of discharge. There is no leftover constant and no logarithm.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of transport at discharge $400$. The overview recovered

$$S(q)=0.625 q^{1.5}$$

$$S(400)=0.625\\cdot 400^{1.5}$$

$$S(400)=0.250000^{1.5}$$

$$400^{1.5}=8000$$

$$S(400)=5000$$

Five thousand sits above $4500$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Doubling the flow velocity is the multiplier

$$k=2$$

 on the outer cube. The overview recovered

$$S(v)=5 v^{3},$$ so

$$\\frac{S(2v)}{S(v)}=2^{3}$$

$$\\frac{S(2v)}{S(v)}=8$$

$$2^{3}=8$$

That is not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level of transport at discharge $64$. The overview recovered

$$S(q)=0.625 q^{1.5}$$

$$S(64)=0.625\\cdot 64^{1.5}$$

$$S(64)=0.40000^{1.5}$$

$$64^{1.5}=512$$

$$S(64)=320$$

Three hundred and twenty does not sit under $300$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `Sediment transport is $S(v)=A v^{3}$ tonnes per day at flow velocity $v>0$, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity depends on discharge through $v(q)=\\frac{q^{0.5}}{2}$.

**Part 1: Translate.**

The gauged run pins $A$:

$$A\\cdot 3^{3}=135$$

$$27A=135$$

**Part 2: Solve.**

$$A=5$$

The recovered transport in velocity is $S(v)=5 v^{3}$. Composing with $v(q)=\\frac{q^{0.5}}{2}$ gives

$$S(q)=5\\left(\\frac{q^{0.5}}{2}\\right)^{3}$$

$$=0.625 q^{1.5}.$$`,
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

Name the recovered power rule, then substitute the claimed input.

Revenue is price times quantity. The overview recovered

$$R(p)=4000 p^{-2}$$

A monomial in $p$ is a power of price. There is no leftover constant and no logarithm.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

The overview recovered

$$R(p)=4000 p^{-2}$$

The leftover exponent is negative, so raising the price cuts revenue for every $p>0$. Differentiating:

$$R'(p)=-8000 p^{-3}$$

$$-8000 p^{-3}<0$$

Revenue always falls as the price rises.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

This is a level of revenue at a price of $2.50$. The overview recovered

$$R(p)=4000 p^{-2}$$

$$R(2.5)=4000\\cdot (2.5)^{-2}$$

$$(2.5)^{2}=6.25$$

$$R(2.5)=640$$

Six hundred and forty sits below $700$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

A $10\\%$ price rise is the multiplier

$$k=1.1$$

. The overview recovered demand exponent $-3$, so

$$\\frac{q(1.1p)}{q(p)}=1.1^{-3}$$

$$1.1^{-3}\\approx 0.7513$$

Quantity falls by about $24.9\\%$, which is more than $20\\%$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The claim treats high elasticity as a reason for revenue to rise. The overview recovered

$$R(p)=4000 p^{-2}$$

The leftover exponent is negative, so a price rise cuts $pq$. Elastic demand of exponent $-3$ is why revenue falls, not why it would rise.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 60,
    solution_overview: `Demand is $q(p)=A p^{-3}$ units at a price $p>0$, and a price of $2$ clears $500$ units. Revenue is $R=pq$. A proposed indexation raises the price by $10\\%$.

**Part 1: Translate.**

The exponent is given, so the observed pair pins $A$:

$$A\\cdot 2^{-3}=500$$

$$A\\cdot \\frac{1}{8}=500$$

**Part 2: Solve.**

$$A=4000$$

The recovered demand is $q(p)=4000 p^{-3}$. Revenue along the curve is then

$$R(p)=4000 p^{-2}.$$`,
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

The overview recovered

$$k=\\frac{3}{2}$$

Strength outruns current when that exponent is larger than one:

$$\\frac{3}{2}>1$$

A current factor $c>1$ then multiplies strength by

$$c^{\\frac{3}{2}}$$

, which exceeds $c$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at $16$ A. The overview recovered

$$S(p)=5p^{\\frac{3}{2}}$$

, so

$$16^{\\frac{3}{2}}=(\\sqrt{16})^{3}$$

$$16^{\\frac{3}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{3}$$

$$16^{\\frac{1}{2}}=4$$

$$4^{3}=64$$

$$16^{\\frac{1}{2}}=\\bigl(16^{\\frac{1}{2}}\\bigr)^{1}$$

$$4^{1}=4$$

$$16^{\\frac{3}{2}}$$

$$16^{\\frac{3}{2}}=64$$

$$S(16)=5\\cdot 64$$

$$S(16)=320$$

The claim needs more than $300$ N. We have $320>300$.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

A nonzero power inverts to another power. The overview recovered

$$S=5p^{\\frac{3}{2}}$$

Isolating current raises both sides to the reciprocal

$$\\frac{2}{3}$$

:

$$p=\\left(\\frac{S}{5}\\right)^{\\frac{2}{3}}$$

Current needed for a given strength is still a power of that strength.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

An extra ampere is the derivative of the recovered law

$$S(p)=5p^{\\frac{3}{2}}$$

:

$$S'(p)=\\frac{15}{2}p^{\\frac{1}{2}}$$

At $4$ A:

$$S'(4)=\\frac{15}{2}\\cdot 2$$

$$S'(4)=15$$

At $9$ A:

$$S'(9)=\\frac{15}{2}\\cdot 3$$

$$S'(9)=\\frac{45}{2}$$

The claim needs $S'(4)>S'(9)$. We have

$$15<\\frac{45}{2}$$

.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The $400$ N reject line is inverted from the recovered law:

$$5p^{\\frac{3}{2}}=400$$

$$p^{\\frac{3}{2}}=80$$

$$p=80^{\\frac{2}{3}}\\approx 18.57$$

The smallest clearing current is about $18.57$ A, which is not below $18$ A.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 61,
    solution_overview: `Weld strength follows $S(p)=Ap^{k}$ newtons for current $p>0$ amperes. The sheet records $S(4)=40$ and $S(9)=135$.

**Part 1: Building the model.**

Let $p$ = welding current in amperes and $S$ = tensile strength in newtons. Two unknowns need both observations. The ratio cancels $A$ and isolates $k$; the $4$ A level then pins $A$.

**1. Translate: the ratio of the spot checks.**

$$\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}$$

**2. Translate: the $4$ A level.**

$$A\\cdot 4^{k}=40$$

**Part 2: Solve.**

$$\\frac{135}{40}=\\frac{27}{8}$$

$$=\\left(\\frac{3}{2}\\right)^{3}$$

$$\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$$

$$\\left(\\frac{3}{2}\\right)^{3}=\\left(\\frac{3}{2}\\right)^{2k}$$

$$k=\\frac{3}{2}$$

$$4^{\\frac{3}{2}}=8$$

$$8A=40$$

$$A=5$$

The recovered law is

$$S(p)=5p^{\\frac{3}{2}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

Compare two $8$ kg buoys with one $64$ kg buoy. The overview recovered

$$H(m)=6m^{\\frac{2}{3}}$$

, and the trial already gives

$$H(8)=24$$

so

$$2H(8)=48$$

$$64^{\\frac{2}{3}}=(4^{3})^{\\frac{2}{3}}$$

$$64^{\\frac{2}{3}}=\\bigl(64^{\\frac{1}{3}}\\bigr)^{2}$$

$$64^{\\frac{1}{3}}=4$$

$$4^{2}=16$$

$$4^{3}=64$$

$$64^{\\frac{2}{3}}=(64)^{\\frac{2}{3}}$$

$$64^{\\frac{1}{3}}=\\bigl(64^{\\frac{1}{3}}\\bigr)^{1}$$

$$4^{1}=4$$

$$64^{\\frac{2}{3}}$$

$$64^{\\frac{2}{3}}=16$$

$$H(64)=6\\cdot 16$$

$$H(64)=96$$

The claim needs $48>96$. We have $48<96$.

So the statement is False.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at $125$ kg. The overview recovered

$$H(m)=6m^{\\frac{2}{3}}$$

, so

$$125^{\\frac{2}{3}}=(5^{3})^{\\frac{2}{3}}$$

$$125^{\\frac{2}{3}}=\\bigl(125^{\\frac{1}{3}}\\bigr)^{2}$$

$$125^{\\frac{1}{3}}=5$$

$$5^{2}=25$$

$$5^{3}=125$$

$$125^{\\frac{2}{3}}=(125)^{\\frac{2}{3}}$$

$$125^{\\frac{1}{3}}=\\bigl(125^{\\frac{1}{3}}\\bigr)^{1}$$

$$5^{1}=5$$

$$125^{\\frac{2}{3}}$$

$$125^{\\frac{2}{3}}=25$$

$$H(125)=6\\cdot 25$$

$$H(125)=150$$

The claim needs more than $140$ kN. We have $150>140$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling mass multiplies holding power by $2$ only if the exponent is $1$. The given exponent is $\\frac{2}{3}$, so

$$\\frac{H(2m)}{H(m)}=2^{\\frac{2}{3}}\\approx 1.587$$

The factor is about $1.587$, not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

A nonzero power inverts to another power. The overview recovered

$$H=6m^{\\frac{2}{3}}$$

Isolating mass raises both sides to the reciprocal

$$\\frac{3}{2}$$

:

$$m=\\left(\\frac{H}{6}\\right)^{\\frac{3}{2}}$$

Mass needed for a given holding power is still a power of that holding power.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The storm floor of $150$ kN is inverted from the recovered kilogram law:

$$6m^{\\frac{2}{3}}=150$$

$$m^{\\frac{2}{3}}=25$$

$$m=25^{\\frac{3}{2}}$$

$$25^{\\frac{3}{2}}=\\bigl(25^{\\frac{1}{2}}\\bigr)^{3}$$

$$25^{\\frac{1}{2}}=5$$

$$5^{3}=125$$

$$m=125$$

$$25^{\\frac{1}{2}}=\\bigl(25^{\\frac{1}{2}}\\bigr)^{1}$$

$$5^{1}=5$$

That is $125$ kg, which is $0.125$ tonnes, not more than $1$ tonne. In tonnes,

$$600t^{\\frac{2}{3}}=150$$

$$t^{\\frac{2}{3}}=\\frac{1}{4}$$

$$t=\\left(\\frac{1}{4}\\right)^{\\frac{3}{2}}$$

$$t=\\frac{1}{8}$$

$$t=0.125$$

Reaching $150$ kN takes $0.125$ tonnes.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 62,
    solution_overview: `Holding power follows $H(m)=Am^{\\frac{2}{3}}$ kilonewtons for mass $m>0$ kilograms. A trial buoy of $8$ kg held $24$ kN. The same law in tonnes is $H(t)=Bt^{\\frac{2}{3}}$, with $1$ tonne $=1000$ kg.

**Part 1: Building the model.**

Let $m$ = buoy mass in kilograms, $t$ = the same mass in tonnes, and $H$ = holding power in kilonewtons. The exponent is given, so the trial fixes $A$. Changing units is the substitution $m=1000t$.

**1. Translate: the trial buoy.**

$$A\\cdot 8^{\\frac{2}{3}}=24$$

**2. Translate: the unit change.**

$$B=A\\cdot 1000^{\\frac{2}{3}}$$

**Part 2: Solve.**

$$8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}$$

$$=4$$

$$4A=24$$

$$A=6$$

$$1000^{\\frac{2}{3}}=(10^{3})^{\\frac{2}{3}}$$

$$=100$$

$$B=6\\cdot 100$$

$$=600$$

The recovered laws are

$$H(m)=6m^{\\frac{2}{3}}$$

$$H(t)=600t^{\\frac{2}{3}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

A nonzero power inverts to another power. The overview recovered

$$T=\\frac{800}{d^{2}}$$

Isolating distance gives

$$d=\\sqrt{800}\\, T^{-\\frac{1}{2}}$$

Hop distance needed for a given throughput is still a power of that throughput.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

The reliability floor $T\\ge 8$ is inverted from the recovered law. Because the exponent is negative, that floor is a maximum hop:

$$\\frac{800}{d^{2}}=8$$

$$d^{2}=100$$

$$d=10$$

The farthest reliable hop is $10$ m, which is already under $12$ m.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling the hop multiplies throughput by

$$2^{-2}$$

, not by

$$\\frac{1}{2}$$

:

$$\\frac{T(2d)}{T(d)}=2^{-2}$$

$$\\frac{T(2d)}{T(d)}=\\frac{1}{4}$$

Doubling a hop quarters throughput.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Whether $11$ m still clears $8$ Mbps is a level of the recovered law:

$$T(11)=\\frac{800}{11^{2}}$$

$$1^{2}=1$$

$$T(11)=\\frac{800}{11}$$

$$T(11)=\\frac{800}{121}\\approx 6.61$$

The claim needs $T(11)\\ge 8$. We have $6.61<8$.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

An extra metre is the derivative of the recovered law

$$T(d)=800d^{-2}$$

:

$$T'(d)=-1600\\, d^{-3}$$

At $4$ m:

$$|T'(4)|=\\frac{1600}{64}$$

$$|T'(4)|=25$$

At $8$ m:

$$|T'(8)|=\\frac{1600}{512}$$

$$|T'(8)|=3.125$$

The claim needs a larger cut at $8$ m than at $4$ m. We have $3.125<25$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 63,
    solution_overview: `Mesh throughput follows $T(d)=Ad^{-2}$ megabits per second for hop distance $d>0$ metres. A bench test recorded $T(4)=50$.

**Part 1: Building the model.**

Let $d$ = hop distance in metres and $T$ = sustained throughput in megabits per second. The exponent $-2$ is given, so the bench reading fixes $A$.

**1. Translate: the bench reading.**

$$\\frac{A}{4^{2}}=50$$

**Part 2: Solve.**

$$\\frac{A}{16}=50$$

$$A=800$$

The recovered law is

$$T(d)=\\frac{800}{d^{2}}$$`,
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

The overview recovered exponent

$$\\frac{3}{4}$$

. Gill area grows more slowly than body mass when that exponent is smaller than one:

$$\\frac{3}{4}<1$$

A mass factor $c>1$ then multiplies area by

$$c^{\\frac{3}{4}}$$

, which is less than $c$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at $16$ g. The overview recovered

$$G(m)=8m^{\\frac{3}{4}}$$

, so

$$16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}$$

$$16^{\\frac{3}{4}}=\\bigl(16^{\\frac{1}{4}}\\bigr)^{3}$$

$$16^{\\frac{1}{4}}=2$$

$$2^{3}=8$$

$$2^{4}=16$$

$$16^{\\frac{3}{4}}=(16)^{\\frac{3}{4}}$$

$$16^{\\frac{1}{4}}=\\bigl(16^{\\frac{1}{4}}\\bigr)^{1}$$

$$2^{1}=2$$

$$16^{\\frac{3}{4}}$$

$$16^{\\frac{3}{4}}=8$$

$$G(16)=8\\cdot 8$$

$$G(16)=64$$

The claim needs more than $50$ cm$^{2}$. We have $64>50$.

So the statement is True.`,
    `**C.** → False

The overview recovered intensity

$$8m^{-\\frac{1}{4}}$$

. The leftover exponent is negative, so intensity falls as mass grows on $m>0$. It is not constant across body masses.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Doubling mass multiplies gill area by $2$ only if the exponent is $1$. The given exponent is $\\frac{3}{4}$, so

$$\\frac{G(2m)}{G(m)}=2^{\\frac{3}{4}}\\approx 1.682$$

The factor is about $1.682$, not $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level at $64$ g. The overview recovered

$$G(m)=8m^{\\frac{3}{4}}$$

, so

$$64^{\\frac{3}{4}}=(2^{6})^{\\frac{3}{4}}$$

$$2^{6}=64$$

$$64^{\\frac{3}{4}}=(64)^{\\frac{3}{4}}$$

$$64^{\\frac{3}{4}}$$

$$64^{\\frac{3}{4}}=2^{\\frac{9}{2}}$$

$$64^{\\frac{3}{4}}=16\\sqrt{2}$$

$$G(64)=8\\cdot 16\\sqrt{2}$$

$$G(64)=128\\sqrt{2}$$

$$G(64)=128\\sqrt{2}\\approx 181.02$$

The claim needs more than $200$ cm

$$^{2}$$

. We have $181.02<200$.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 64,
    solution_overview: `Gill area follows $G(m)=Am^{\\frac{3}{4}}$ square centimetres for body mass $m>0$ grams. A $256$ g specimen has $G(256)=512$. Intensity is $\\frac{G(m)}{m}$.

**Part 1: Building the model.**

Let $m$ = body mass in grams and $G$ = gill area in square centimetres. The exponent is given, so the specimen fixes $A$. Dividing by mass subtracts one from the exponent.

**1. Translate: the specimen.**

$$A\\cdot 256^{\\frac{3}{4}}=512$$

**Part 2: Solve.**

$$256^{\\frac{3}{4}}=(2^{8})^{\\frac{3}{4}}$$

$$=64$$

$$A=\\frac{512}{64}$$

$$=8$$

The recovered law is

$$G(m)=8m^{\\frac{3}{4}}$$

and intensity is

$$\\frac{G(m)}{m}=8m^{-\\frac{1}{4}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

Quadrupling time multiplies strength by $\\sqrt{4}$, because the coefficient cancels:

$$\\frac{S(4t)}{S(t)}=\\sqrt{4}$$

$$\\frac{S(4t)}{S(t)}=2$$

The multiplier is exactly $2$ at every starting day.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level on day $4$. The overview recovered

$$S(t)=5\\sqrt{t}$$

, so

$$S(4)=5\\sqrt{4}$$

$$S(4)=5\\cdot 2$$

$$S(4)=10$$

The claim needs more than $8$ MPa. We have $10>8$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

An extra day is the derivative of the recovered law

$$S(t)=5\\sqrt{t}$$

:

$$S'(t)=\\frac{5}{2}t^{-\\frac{1}{2}}$$

At day $4$:

$$S'(4)=\\frac{5}{2}\\cdot\\frac{1}{2}$$

$$S'(4)=\\frac{5}{4}$$

At day $9$:

$$S'(9)=\\frac{5}{2}\\cdot\\frac{1}{3}$$

$$S'(9)=\\frac{5}{6}$$

The claim needs $S'(9)>S'(4)$. We have

$$\\frac{5}{6}<\\frac{5}{4}$$

.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Reaching $30$ MPa is an inversion of the recovered law:

$$5\\sqrt{t}=30$$

$$\\sqrt{t}=6$$

$$t=36$$

Thirty-six days is still under $40$ days.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The recorded $5$ MPa is the gap $S(9)-S(4)$, not a level. The overview recovered

$$S(t)=5\\sqrt{t}$$

, so

$$S(9)=5\\sqrt{9}$$

$$S(9)=15$$

Day $9$ carries $15$ MPa, not the $5$ MPa rise.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 65,
    solution_overview: `Curing strength follows $S(t)=A\\sqrt{t}$ megapascals for time $t>0$ days. The log records only that strength rose by $5$ MPa between day $4$ and day $9$.

**Part 1: Building the model.**

Let $t$ = curing time in days and $S$ = strength in megapascals. No single level was logged, so the coefficient comes out of a difference. That works because $A$ is a common factor and the exponent $\\frac{1}{2}$ is given.

**1. Translate: the surviving record.**

$$A\\sqrt{9}-A\\sqrt{4}=5$$

**Part 2: Solve.**

$$A(3-2)=5$$

$$A=5$$

The recovered law is

$$S(t)=5\\sqrt{t}$$`,
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

The overview recovered

$$k=2$$

Deflection outruns span when that exponent is larger than one:

$$2>1$$

A span factor $c>1$ then multiplies deflection by

$$c^{2}$$

, which exceeds $c$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level of the trusted quadratic at $9$ m. The overview recovered

$$y(L)=2L^{2}$$

, so

$$y(9)=2\\cdot 81$$

$$y(9)=162$$

The claim needs more than $155$ mm. We have $162>155$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling the free span multiplies deflection by $2$ only if the exponent is $1$. The recovered exponent is $2$, so

$$\\frac{y(2L)}{y(L)}=2^{2}$$

$$\\frac{y(2L)}{y(L)}=4$$

$$2^{2}=4$$

Doubling the span quadruples the tip deflection.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

The trusted quadratic at $9$ m is

$$y(9)=2\\cdot 81$$

$$y(9)=162$$

The recorded third run is $150$ mm, so

$$162-150$$

$$y(9)=12$$

The shortfall is $12$ mm, which is more than $10$ mm.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

A point sits on the trusted power law only when it matches the recovered quadratic. At $9$ m that quadratic gives $162$ mm, while the third run recorded $150$ mm. Those two figures are not equal.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 66,
    solution_overview: `Tip deflection is modelled as $y(L)=AL^{k}$ millimetres for free span $L>0$ metres. The trusted runs are $y(3)=18$ and $y(6)=72$.

**Part 1: Building the model.**

Let $L$ = free span in metres and $y$ = tip deflection in millimetres. Two trusted runs fix both constants: the ratio delivers $k$, and either run then delivers $A$.

**1. Translate: the trusted ratio.**

$$\\frac{72}{18}=2^{k}$$

**2. Translate: the $3$ m run.**

$$A\\cdot 3^{k}=18$$

**Part 2: Solve.**

$$4=2^{k}$$

$$k=2$$

$$A\\cdot 9=18$$

$$A=2$$

The recovered law is

$$y(L)=2L^{2}$$`,
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

The overview recovered

$$k=3$$

Steel mass outruns height when that exponent is larger than one:

$$3>1$$

A height factor $c>1$ then multiplies mass by

$$c^{3}$$

, which exceeds $c$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at $12$ m. The overview recovered

$$M(h)=\\frac{1}{2}h^{3}$$

, so

$$M(12)=\\frac{1}{2}\\cdot 1728$$

$$M(12)=864$$

The claim needs more than $800$ kg. We have $864>800$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The percentage rule is the ratio

$$1.2^{k}=1.728$$

That equation fixes

$$k=3$$

 and contains no level, so it cannot select $A$. The coefficient still needs the $10$ m reference $A\\cdot 10^{3}=500$. The percentage rule alone does not force $A$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

A $10\\%$ height increase is the scale factor

$$1.1^{3}$$

:

$$\\left(\\frac{11}{10}\\right)^{3}=\\frac{1331}{1000}$$

$$\\left(\\frac{11}{10}\\right)^{3}$$

$$\\left(\\frac{11}{10}\\right)^{3}=1.331$$

Mass rises by $33.1\\%$, which is more than $30\\%$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

A $20\\%$ height increase is the scale factor already used to recover $k$:

$$1.2^{3}=1.728$$

Mass rises by $72.8\\%$, not by $20\\%$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 67,
    solution_overview: `Steel mass follows $M(h)=Ah^{k}$ kilograms for height $h>0$ metres. Lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$, and a $10$ m reference mast uses $500$ kg.

**Part 1: Building the model.**

Let $h$ = mast height in metres and $M$ = steel mass in kilograms. A percentage rule is a ratio and fixes only $k$; the reference mast is a level and fixes only $A$.

**1. Translate: the percentage rule.**

$$1.2^{k}=1.728$$

**2. Translate: the reference mast.**

$$A\\cdot 10^{k}=500$$

**Part 2: Solve.**

$$1.2=\\frac{6}{5}$$

$$1.728=\\frac{216}{125}$$

$$=\\left(\\frac{6}{5}\\right)^{3}$$

$$k=3$$

$$A\\cdot 10^{3}=500$$

$$A=\\frac{1}{2}$$

The recovered law is

$$M(h)=\\frac{1}{2}h^{3}$$`,
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

Name the recovered power rule, then substitute the claimed input.

Doubling distance multiplies intensity by

$$2^{-2}$$

:

$$\\frac{I(2d)}{I(d)}=2^{-2}$$

$$\\frac{I(2d)}{I(d)}=\\frac{1}{4}$$

Doubling the distance cuts intensity to one quarter.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at $4$ metres. The overview recovered

$$I(d)=\\frac{2.88}{d^{2}}$$

, so

$$I(4)=\\frac{2.88}{16}$$

$$I(4)=0.18$$

The claim needs under $0.2$ W/m

$$^{2}$$

. We have $0.18<0.2$.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

An extra metre is the derivative of the recovered law

$$I(d)=2.88d^{-2}$$

:

$$I'(d)=-5.76\\, d^{-3}$$

At $2$ m:

$$|I'(2)|=\\frac{5.76}{8}$$

$$|I'(2)|=0.72$$

At $6$ m:

$$|I'(6)|=\\frac{5.76}{216}\\approx 0.0267$$

The cut is larger at $2$ m than at $6$ m.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

This is a level at $6$ metres. The overview recovered

$$I(d)=\\frac{2.88}{d^{2}}$$

, so

$$I(6)=\\frac{2.88}{36}$$

$$I(6)=0.08$$

The night cap is $0.08$ W/m

$$^{2}$$

. Intensity at $6$ m equals the cap, which is not still above it.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The night cap $I\\le 0.08$ is inverted from the recovered law. Because the exponent is negative, that cap is a minimum standing distance:

$$\\frac{2.88}{d^{2}}=0.08$$

$$d^{2}=36$$

$$d=6$$

The cap is met at

 m, a finite distance.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 68,
    solution_overview: `Fan intensity follows $I(d)=Ad^{-2}$ watts per square metre for distance $d>0$ metres. A meter reading recorded $I(2)=0.72$.

**Part 1: Building the model.**

Let $d$ = distance from the hub in metres and $I$ = acoustic intensity in watts per square metre. The exponent $-2$ is given, so the meter reading fixes $A$.

**1. Translate: the meter reading.**

$$\\frac{A}{2^{2}}=0.72$$

**Part 2: Solve.**

$$\\frac{A}{4}=0.72$$

$$A=2.88$$

The recovered law is

$$I(d)=\\frac{2.88}{d^{2}}$$`,
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

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$v(q)=4\\sqrt{2}\\, q$$

After both stages the exponent on flow is $1$. Jet speed is proportional to flow.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at

$$q=5$$

The overview recovered

$$v(q)=4\\sqrt{2}\\, q,$$ so

$$v(5)=20\\sqrt{2}\\approx 28.28$$

The claim needs more than $28$ m/s. We have $28.28>28$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling flow multiplies head by $2$ only if the exponent is $1$. The recovered head law is $H(q)=2q^{2}$, so

$$\\frac{H(2q)}{H(q)}=2^{2}$$

$$\\frac{H(2q)}{H(q)}=4$$

$$2^{2}=4$$

Doubling the flow quadruples the head.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

A jet speed of $40\\sqrt{2}$ m/s is inverted from the recovered speed law:

$$4\\sqrt{2}\\, q=40\\sqrt{2}$$

$$q=10$$

Ten cubic metres per hour is still under $12$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Eliminating $q$ between the recovered stages uses $v=4\\sqrt{H}$:

$$H=\\frac{v^{2}}{16}$$

Head is proportional to the square of jet speed, not to jet speed itself.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 69,
    solution_overview: `Pump head follows $H(q)=Aq^{2}$ metres for flow $q>0$ cubic metres per hour, with $H(5)=50$. Jet speed is $v(H)=4\\sqrt{H}$ metres per second, and the composition is $v(q)=v(H(q))$.

**Part 1: Building the model.**

Let $q$ = flow, $H$ = differential head, and $v$ = jet speed. The commissioning run fixes $A$. Composing the two stages multiplies the exponents.

**1. Translate: the commissioning run.**

$$A\\cdot 5^{2}=50$$

**2. Translate: the composition.**

$$v(q)=4\\sqrt{A q^{2}}$$

**Part 2: Solve.**

$$25A=50$$

$$A=2$$

$$v(q)=4\\sqrt{2q^{2}}$$

$$=4\\sqrt{2}\\, q$$

The recovered laws are

$$H(q)=2q^{2}$$

$$v(q)=4\\sqrt{2}\\, q$$`,
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

Name the recovered power rule, then substitute the claimed input.

Doubling the logged $80$ pallets means $T=160$. Invert the recovered law:

$$20\\sqrt{s}=160$$

$$\\sqrt{s}=8$$

$$s=64$$

The logged crew is $16$ drivers, and $64=4\\cdot 16$, which is more than a doubling.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at the safety cap

$$s=36$$

The overview recovered

$$T(s)=20\\sqrt{s},$$ so

$$T(36)=20\\cdot 6$$

$$T(36)=120$$

The claim needs more than $110$ pallets per hour. We have $120>110$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Throughput per driver is the recovered law divided by $s$:

$$\\frac{T(s)}{s}=20s^{-\\frac{1}{2}}$$

The leftover exponent is negative, so intensity falls as the crew grows. It does not rise.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Reaching $150$ pallets per hour is an inversion of the recovered law:

$$20\\sqrt{s}=150$$

$$\\sqrt{s}=7.5$$

$$s=56.25$$

The safety cap is $36$ drivers, and $56.25>36$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

The recovered exponent $0.5$ is positive, so $T(s)$ rises with $s$. The largest legal crew is therefore the largest legal throughput. The driver cap is also a cap on pallets moved per hour.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 70,
    solution_overview: `Forklift throughput follows $T(s)=As^{0.5}$ pallets per hour for $s>0$ drivers. A logged shift recorded $T(16)=80$.

**Part 1: Building the model.**

Let $s$ = drivers on shift and $T$ = pallets moved per hour. The exponent $0.5$ is given, so the logged shift fixes $A$.

**1. Translate: the logged shift.**

$$A\\cdot 16^{0.5}=80$$

**Part 2: Solve.**

$$16^{0.5}=4$$

$$4A=80$$

$$A=20$$

The recovered law is

$$T(s)=20\\sqrt{s}$$`,
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

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$r=-\\frac{3}{2}$$

Subscribers fall faster than price rises when that exponent is smaller than minus one:

$$-\\frac{3}{2}<-1.$$

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a revenue level at

$$p=16$$

The overview recovered

$$R(p)=2000p^{-\\frac{1}{2}},$$ so

$$R(16)=\\frac{2000}{4}$$

$$R(16)=500$$

The claim needs under $600$ thousand euros. We have $500<600$.

So the statement is True.`,
    `**C.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$R(p)=2000p^{-\\frac{1}{2}}$$

That is a power of price, with exponent

$$-\\frac{1}{2}$$

.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

At the recorded price,

$$R(4)=\\frac{2000}{2}$$

$$R(4)=1000$$

Doubling revenue means

$$R=2000$$

:

$$2000p^{-\\frac{1}{2}}=2000$$

$$p=1$$

The price factor is

$$\\frac{1}{4}$$

, not

$$\\frac{1}{2}$$

.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a revenue level at

$$p=9$$

The overview recovered

$$R(p)=2000p^{-\\frac{1}{2}},$$ so

$$R(9)=\\frac{2000}{3}\\approx 666.67$$

The claim needs under $600$ thousand euros. We have $666.67>600$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `Demand follows $q(p)=Ap^{r}$ thousand subscribers. Quadrupling any price multiplies subscribers by $\\frac{1}{8}$, and $q(4)=250$. Revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros and $q$ = subscribers in thousands. The scale rule isolates $r$; the four-euro level then pins $A$. Revenue adds one to the exponent.

**1. Translate: the scale rule.**

$$4^{r}=\\frac{1}{8}$$

**2. Translate: the recorded level.**

$$A\\cdot 4^{r}=250$$

**Part 2: Solve.**

$$4^{\\frac{3}{2}}=8$$

$$r=-\\frac{3}{2}$$

$$A\\cdot\\frac{1}{8}=250$$

$$A=2000$$

The recovered laws are

$$q(p)=2000p^{-\\frac{3}{2}}$$

$$R(p)=2000p^{-\\frac{1}{2}}$$`,
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

The overview recovered a nonzero retainer

$$F=400$$

A power function of $n$ would be a single monomial $An^{r}$. Adding a positive constant means $C$ is not a power of the branch count.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at

$$n=900$$

The overview recovered

$$C(n)=400+30n^{\\frac{1}{2}},$$ so

$$C(900)=400+30\\cdot 30$$

$$C(900)=400+900$$

$$C(900)=1300$$

The claim needs more than $1200$ euros. We have $1300>1200$.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Cost per branch is the recovered bill divided by $n$:

$$\\frac{C(n)}{n}=\\frac{400}{n}+30n^{-\\frac{1}{2}}$$

Both terms fall as $n$ grows. A larger network is cheaper per branch.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Quadrupling the recorded $100$ branches lands on the second invoice, $400$ branches at $1000$ euros:

$$\\frac{1000}{700}=\\frac{10}{7}\\approx 1.429$$

The whole bill is multiplied by about $1.429$, not by $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level at

$$n=36$$

The overview recovered

$$C(n)=400+30n^{\\frac{1}{2}},$$ so

$$C(36)=400+30\\cdot 6$$

$$C(36)=400+180$$

$$C(36)=580$$

The $100$-branch invoice is $700$ euros, and $580<700$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 72,
    solution_overview: `The bill is $C(n)=F+An^{\\frac{1}{2}}$ euros a month for $n\\ge 1$ branches. One hundred branches cost $700$ euros and four hundred cost $1000$.

**Part 1: Building the model.**

Let $n$ = branches and $C$ = monthly euros. Two levels recover $F$ and $A$, because the square roots $10$ and $20$ are known.

**1. Translate: the two invoices.**

$$F+10A=700$$

$$F+20A=1000$$

**Part 2: Solve.**

$$10A=300$$

$$A=30$$

$$F+300=700$$

$$F=400$$

The recovered law is

$$C(n)=400+30n^{\\frac{1}{2}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

The two components meet where

$$O(q)=H(q)$$

. Differentiating the recovered total gives

$$T'(q)=-\\frac{4800}{q^{2}}+3$$

Set the derivative equal to zero:

$$-\\frac{4800}{q^{2}}+3=0$$

$$q^{2}=1600$$

$$q=40$$

The second derivative is

$$T''(q)=\\frac{9600}{q^{3}}$$

which is positive for $q>0$, so the critical point is a minimum. That point is the recorded crossing.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at

$$q=60$$

The overview recovered

$$T(q)=\\frac{4800}{q}+3q,$$ so

$$T(60)=80+180$$

$$T(60)=260$$

The claim needs more than $250$ euros. We have $260>250$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling the recorded batch of $40$ units gives

$$q=80$$

:

$$T(40)=120+120$$

$$T(40)=240$$

$$T(80)=60+240$$

$$T(80)=300$$

The annual total changes from $240$ to $300$. It is not unchanged.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

From the recovered total,

$$T(20)=240+60$$

$$T(20)=300$$

$$T(40)=240$$

$$T(80)=300$$

Cutting the batch from $40$ to $20$ raises $T$ by $60$ euros, and raising it from $40$ to $80$ raises $T$ by the same $60$ euros.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Ordering cost at

$$q=80$$

 is the recovered

$$O(q)=\\frac{4800}{q}$$

:

$$O(80)=\\frac{4800}{80}$$

$$O(80)=60$$

The claim needs more than $200$ euros. We have $60<200$.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 73,
    solution_overview: `Annual ordering cost is $O(q)=Aq^{-1}$ euros and annual holding cost is $H(q)=Bq$ euros. At a batch of $40$ units the two components each equal $120$ euros, and the annual total is $T=O+H$.

**Part 1: Building the model.**

Let $q$ = units per batch. The common level recovers both coefficients.

**1. Translate: the recorded crossing.**

$$\\frac{A}{40}=120$$

$$40B=120$$

**Part 2: Solve.**

$$A=4800$$

$$B=3$$

The recovered total is

$$T(q)=\\frac{4800}{q}+3q$$`,
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

The overview recovered average product

$$12L^{-\\frac{1}{4}}$$

. That is a power of labour hours, but its exponent is

$$-\\frac{1}{4}$$

, not the output exponent

$$\\frac{3}{4}$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

Average product at $16$ hours is a level of the recovered intensity:

$$\\frac{Q(16)}{16}=12\\cdot 16^{-\\frac{1}{4}}$$

$$\\frac{Q(16)}{16}=192^{-\\frac{1}{4}}$$

$$\\frac{Q(16)}{16}=12\\cdot\\frac{1}{2}$$

$$\\frac{Q(16)}{16}=6$$

The claim needs under $7$ units an hour. We have $6<7$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling output multiplies hours by $2$ only if the exponent is $1$. The recovered exponent is $\\frac{3}{4}$, so the hour factor is

$$2^{\\frac{4}{3}}\\approx 2.520$$

She must more than double the labour hours.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

The overview recovered average product

$$12L^{-\\frac{1}{4}}$$

. The leftover exponent is negative, so average product falls as labour hours rise. The claim is that ranking

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

Average product at $81$ hours is a level of the recovered intensity:

$$\\frac{Q(81)}{81}=12\\cdot 81^{-\\frac{1}{4}}$$

$$\\frac{Q(81)}{81}=972^{-\\frac{1}{4}}$$

$$\\frac{Q(81)}{81}=12\\cdot\\frac{1}{3}$$

$$\\frac{Q(81)}{81}=4$$

The claim needs more than $5$ units an hour. We have $4<5$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 74,
    solution_overview: `Output follows $Q(L)=AL^{r}$ units a shift. Sixteen hours produce $96$ units, and eighty-one hours produce $324$. Average product is $\\frac{Q(L)}{L}$.

**Part 1: Building the model.**

Let $L$ = labour hours and $Q$ = units. The ratio isolates $r$; the sixteen-hour level then pins $A$. Dividing by $L$ subtracts one from the exponent.

**1. Translate: the ratio.**

$$\\frac{324}{96}=\\left(\\frac{81}{16}\\right)^{r}$$

**2. Translate: the sixteen-hour level.**

$$A\\cdot 16^{r}=96$$

**Part 2: Solve.**

$$\\frac{324}{96}=\\frac{27}{8}$$

$$\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}$$

$$\\left(\\frac{3}{2}\\right)^{4r}=\\left(\\frac{3}{2}\\right)^{3}$$

$$r=\\frac{3}{4}$$

$$16^{\\frac{3}{4}}=8$$

$$8A=96$$

$$A=12$$

The recovered laws are

$$Q(L)=12L^{\\frac{3}{4}}$$

$$\\frac{Q(L)}{L}=12L^{-\\frac{1}{4}}$$`,
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

The overview recovered floor

$$F=8$$

As

$$n\\to\\infty$$

 the learning term

$$50n^{-\\frac{1}{2}}$$

 tends to $0$, so

$$\\lim_{n\\to\\infty}t(n)=8$$

For every finite $n\\ge 1$ that learning term is still positive. Unit time approaches the floor without reaching it.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level after $900$ cumulative units. The overview recovered

$$t(n)=8+50n^{-\\frac{1}{2}},$$ so

$$t(900)=8+\\frac{50}{30}$$

$$t(900)=\\frac{29}{3}\\approx 9.67$$

The claim needs under $10$ minutes. We have $9.67<10$.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The learning component is

$$50n^{-\\frac{1}{2}}$$

. Quadrupling cumulative output multiplies that term by

$$4^{-\\frac{1}{2}}$$

:

$$\\frac{50(4n)^{-\\frac{1}{2}}}{50n^{-\\frac{1}{2}}}=\\frac{1}{2}$$

Quadrupling halves the learning component.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Quadrupling the first recorded point sends

$$n=25$$

 to

$$n=100$$

, the second recorded point:

$$t(25)=18
$$

$$t(100)=13$$

$$\\frac{13}{18}\\approx 0.722$$

Modelled unit time is multiplied by about $0.722$, not by

$$\\frac{1}{2}$$

.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

This is a level after $4$ cumulative units. The overview recovered

$$t(n)=8+50n^{-\\frac{1}{2}}$$

, so

$$t(4)=8+\\frac{50}{2}$$

$$t(4)=33$$

The claim needs under $30$ minutes. We have $33>30$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 75,
    solution_overview: `Unit time follows $t(n)=F+An^{-\\frac{1}{2}}$ minutes for $n\\ge 1$ cumulative units. After $25$ units the next unit takes $18$ minutes, and after $100$ units it takes $13$.

**Part 1: Building the model.**

Let $n$ = cumulative units and $t$ = minutes for the next unit. Two levels recover $F$ and $A$.

**1. Translate: the two timings.**

$$F+\\frac{A}{5}=18$$

$$F+\\frac{A}{10}=13$$

**Part 2: Solve.**

$$\\frac{A}{10}=5$$

$$A=50$$

$$F+10=18$$

$$F=8$$

The recovered law is

$$t(n)=8+50n^{-\\frac{1}{2}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

Revenue is proportional to feed only if the exponent is $1$. The given exponent is $\\frac{2}{3}$, so

$$\\frac{R(2x)}{R(x)}=2^{\\frac{2}{3}}\\approx 1.587$$

not $2$. Revenue is not proportional to the tonnes of feed used.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a comparison of the two recovered laws at

$$x=64$$

:

$$R(64)=90\\cdot 16$$

$$R(64)=1440$$

$$C(64)=30\\cdot 64$$

$$C(64)=1920$$

Cost $1920$ already exceeds revenue $1440$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

An extra tonne of feed is the derivative of the recovered revenue:

$$R'(x)=60x^{-\\frac{1}{3}}$$

After $8$ tonnes:

$$R'(8)=60\\cdot\\frac{1}{2}$$

$$R'(8)=30$$

After $27$ tonnes:

$$R'(27)=60\\cdot\\frac{1}{3}$$

$$R'(27)=20$$

The claim needs $R'(27)>R'(8)$. We have $20<30$.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Cost overtakes revenue where

$$R(x)=C(x)$$

:

$$90x^{\\frac{2}{3}}=30x$$

$$x^{\\frac{1}{3}}=3$$

$$x=27$$

For $x>27$ the ratio

$$\\frac{R(x)}{C(x)}=\\frac{3}{x^{\\frac{1}{3}}}$$

 stays below $1$ and keeps falling. Extra feed cannot restore a surplus.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

Profit at $8$ tonnes is revenue minus cost:

$$R(8)-C(8)=360-240$$

$$R(8)-C(8)=120$$

The season clears $120$ thousand euros, which is more than $100$.

The computed figure agrees with the claim.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 76,
    solution_overview: `Harvest revenue follows $R(x)=Ax^{\\frac{2}{3}}$ thousand euros for $x>0$ tonnes of feed, and cost is $C(x)=30x$ thousand euros. At $8$ tonnes, revenue was $360$ thousand euros.

**Part 1: Building the model.**

Let $x$ = tonnes of feed. The exponent is given, so the eight-tonne level pins $A$. Cost is linear.

**1. Translate: the recorded revenue.**

$$A\\cdot 8^{\\frac{2}{3}}=360$$

**Part 2: Solve.**

$$8^{\\frac{2}{3}}=4$$

$$4A=360$$

$$A=90$$

The recovered laws are

$$R(x)=90x^{\\frac{2}{3}}$$

$$C(x)=30x$$`,
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

Name the recovered power rule, then substitute the claimed input.

Multiplying the index by $4$ multiplies cost by $4$ only if the exponent is $1$. The given exponent is $\\frac{3}{2}$, so

$$\\frac{f(4x)}{f(x)}=4^{\\frac{3}{2}}$$

$$4^{\\frac{3}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{3}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{3}=8$$

$$\\frac{f(4x)}{f(x)}=8$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$2^{1}=2$$

A factor of $4$ on the index multiplies handling cost by $8$, not by $4$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at index $9$. The overview recovered

$$f(x)=6x^{\\frac{3}{2}}$$

, so

$$f(9)=6\\cdot 27$$

$$f(9)=162$$

The claim needs more than $150$ euros. We have $162>150$.

So the statement is True.`,
    `**C.** → True

The overview recovered exponent

$$\\frac{3}{2}$$

. Handling cost grows faster than the index when that exponent is larger than one:

$$\\frac{3}{2}>1$$

That matches the claim.

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Equal cost gaps from equal index gaps would need a linear law. The recovered exponent

$$\\frac{3}{2}>1$$

 makes $f$ strictly convex, so equal index gaps produce larger cost gaps at larger $x$. For example

$$f(9)-f(4)=162-48$$

$$f(9)-f(4)=114$$

$$f(16)-f(9)=384-162$$

$$f(16)-f(9)=222$$

The gaps are not equal.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The cost added from index $9$ to index $25$ is a difference of two recovered levels:

$$f(25)=6\\cdot 125$$

$$f(25)=750$$

$$f(9)=162$$

$$750-162$$

$$f(9)=588$$

The added cost is $588$ euros, which is not under $500$.

The computed figure disagrees with the claim.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Handling cost follows $f(x)=Ax^{\\frac{3}{2}}$ euros for pallet-volume index $x>0$. The surviving record is $f(16)-f(4)=336$.

**Part 1: Building the model.**

Let $x$ = pallet-volume index and $f$ = daily euros. No single level is known, so $A$ comes out of a difference.

**1. Translate: the surviving record.**

$$A\\left(16^{\\frac{3}{2}}-4^{\\frac{3}{2}}\\right)=336$$

**Part 2: Solve.**

$$16^{\\frac{3}{2}}=64, \\qquad 4^{\\frac{3}{2}}=8$$

$$56A=336$$

$$A=6$$

The recovered law is

$$f(x)=6x^{\\frac{3}{2}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

A nonzero power inverts to another power. The overview recovered

$$W=5s^{\\frac{3}{2}}$$

Isolating scale raises both sides to the reciprocal

$$\\frac{2}{3}$$

:

$$s=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}}$$

Scale needed for a given load is still a power of that load.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

The permit cap

$$W=320$$

 is inverted from the recovered law:

$$5s^{\\frac{3}{2}}=320$$

$$s^{\\frac{3}{2}}=64$$

$$s=16$$

The largest admissible scale is $16$, which is already below $20$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling the permit ceiling multiplies admissible scale by $2$ only if the inverse exponent is $1$. From $s\\propto W^{\\frac{2}{3}}$,

$$\\frac{s(2W)}{s(W)}=2^{\\frac{2}{3}}\\approx 1.587$$

The scale index is multiplied by about $1.587$, not by $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

If the coefficient doubled, admissible scale under the same ceiling would change by the factor

$$2^{-\\frac{2}{3}}$$

, because

$$s=(W/A)^{\\frac{2}{3}}$$

:

$$2^{-\\frac{2}{3}}\\approx 0.630$$

The new scale is about $0.630$ times the old one, not half.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

This is a level at scale index $4$. The overview recovered

$$W(s)=5s^{\\frac{3}{2}}$$

, so

$$W(4)=5\\cdot 8$$

$$W(4)=40$$

The claim needs under $50$ kilograms. We have $40<50$.

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `Wastewater load follows $W(s)=As^{\\frac{3}{2}}$ kilograms a day for scale $s>0$. At scale $9$ the daily load is $135$ kilograms.

**Part 1: Building the model.**

Let $s$ = production scale index and $W$ = daily kilograms. The recorded level pins $A$.

**1. Translate: the recorded load.**

$$A\\cdot 9^{\\frac{3}{2}}=135$$

**Part 2: Solve.**

$$9^{\\frac{3}{2}}=27$$

$$27A=135$$

$$A=5$$

The recovered law is

$$W(s)=5s^{\\frac{3}{2}}$$`,
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

Name the recovered power rule, then substitute the claimed input.

A $25\\%$ tariff rise is the factor

$$k=\\frac{5}{4}$$

. The elasticity shortcut multiplies $-2$ by that percentage:

$$-2\\cdot 0.25=-0.50$$

The exact power uses the recovered scale identity:

$$\\frac{q(kp)}{q(p)}=k^{-2}$$

$$\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}$$

$$\\left(\\frac{5}{4}\\right)^{-2}$$

$$\\left(\\frac{5}{4}\\right)^{-2}=0.64$$

Exact demand falls by $36\\%$, not by $50\\%$. The two routes do not agree.

So the statement is False.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

A $25\\%$ rise takes the tariff from $3$ to $3.75$. The exact multiplier is

$$\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}$$

$$\\left(\\frac{5}{4}\\right)^{-2}$$

$$\\left(\\frac{5}{4}\\right)^{-2}=0.64$$

$$q(3.75)=4000\\cdot 0.64$$

$$q(3.75)=0.64$$

$$q(3.75)=2560$$

The claim needs more than $2500$ occupied spaces. We have $2560>2500$.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The elasticity shortcut for a $25\\%$ rise multiplies $-2$ by that percentage:

$$-2\\cdot 0.25=-0.50$$

The exact power uses the tariff factor

$$\\frac{5}{4}$$

:

$$\\left(\\frac{5}{4}\\right)^{-2}-1=\\frac{16}{25}-1$$

$$\\left(\\frac{5}{4}\\right)^{-2}-1$$

$$\\left(\\frac{5}{4}\\right)^{-2}-1=-0.36$$

The shortcut's $50\\%$ loss is larger than the exact $36\\%$ loss.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

A $25\\%$ tariff cut is the factor

$$k=\\frac{3}{4}$$

:

$$\\left(\\frac{3}{4}\\right)^{-2}=\\frac{16}{9}\\approx 1.778$$

Demand rises by about $77.8\\%$. A $25\\%$ rise cuts demand by $36\\%$, and $77.8\\neq 36$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

This is a level at a tariff of $2$ euros. The overview recovered

$$q(p)=36000p^{-2}$$

, so

$$q(2)=\\frac{36000}{4}$$

$$q(2)=9000$$

The claim needs more than $8000$ occupied spaces. We have $9000>8000$.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 79,
    solution_overview: `Hourly demand follows $q(p)=Ap^{-2}$ occupied spaces for tariff $p>0$ euros. The authority records $q(3)=4000$. Demand of this form has constant elasticity $-2$.

**Part 1: Building the model.**

Let $p$ = hourly tariff in euros and $q$ = occupied spaces. The exponent $-2$ is given, so the recorded pair fixes $A$.

**1. Translate: the observed pair.**

$$A\\cdot 3^{-2}=4000$$

**Part 2: Solve.**

$$\\frac{A}{9}=4000$$

$$A=36000$$

The recovered law is

$$q(p)=36000p^{-2}$$`,
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

Name the recovered power rule, then substitute the claimed input.

The given exponent is $3$. Mass grows faster than height when that exponent is larger than one:

$$3>1$$

Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.

So the statement is True.`,
    `**B.** → True

Form the ratio so the unknown positive coefficient cancels.

This is a level at height $1.5$ m. The overview recovered

$$M(h)=240h^{3}$$

, so

$$(1.5)^{3}=\\frac{27}{8}$$

$$(1.5)^{3}=3.375$$

$$M(1.5)=240\\cdot 3.375$$

$$M(1.5)=720.375$$

$$M(1.5)=810$$

The claim needs more than $700$ kg. We have $810>700$.

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Doubling height multiplies mass by $2$ only if the exponent is $1$. The given exponent is $3$, so

$$\\frac{M(2h)}{M(h)}=2^{3}$$

$$\\frac{M(2h)}{M(h)}=8$$

$$2^{3}=8$$

Doubling a bell's height multiplies its mass by $8$, not by $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Mass per metre of height is the recovered law divided by $h$:

$$\\frac{M(h)}{h}=240h^{2}$$

That quantity still depends on $h$. It is not the same at every height.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

This is a level at height $1$ m. The overview recovered

$$M(h)=240h^{3}$$

, so

$$M(1)=240$$

The claim needs more than $200$ kg. We have $240>200$.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 80,
    solution_overview: `Similar bells obey $M(h)=Ah^{3}$ kilograms for height $h>0$ metres. A finished bell of height $0.5$ metres weighed $30$ kilograms.

**Part 1: Building the model.**

Let $h$ = height in metres and $M$ = mass in kilograms. Geometric similarity fixes the exponent at $3$; the weighing pins $A$.

**1. Translate: the weighed bell.**

$$A(0.5)^{3}=30$$

**Part 2: Solve.**

$$(0.5)^{3}=\\frac{1}{8}$$

$$\\frac{A}{8}=30$$

$$A=240$$

The recovered law is

$$M(h)=240h^{3}$$`,
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

The overview recovered

$$P(v)=\\frac{1}{2}v^{3}$$

Power outruns speed when the leftover exponent exceeds $1$.

$$3>1$$

A proportional law would have carried exponent $1$. Drag itself only has exponent $2$; multiplying by speed raises that to $3$.

The leftover exponent is $3$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered power exponent $3$. Doubling speed multiplies absorbed power by

$$2^{3}=8$$

The claim is a factor of $2$. Drag itself only quadrupled, because its exponent was $2$; multiplying by the doubled speed turns that $4$ into $8$.

Power rises eightfold, not twofold.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

The overview recovered

$$P(v)=\\frac{1}{2}v^{3}$$

 Differentiating gives

$$P'(v)=\\frac{3}{2}v^{2}$$

At $8$ m/s:

$$P'(8)=\\frac{3}{2}\\cdot 64$$

$$P'(8)=96$$

At $12$ m/s:

$$P'(12)=\\frac{3}{2}\\cdot 144$$

$$P'(12)=216$$

The claim needs $P'(12)>P'(8)$. We have $216>96$.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$P(v)=\\frac{1}{2}v^{3}$$

At $8$ m/s:

$$P(8)=\\frac{1}{2}\\cdot 512$$

$$P(8)=256$$

The claim is that this sits under $300$. Compare with the claim:

$$256<300.$$

So the statement is True.`,
    `**E.** → False

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$P(v)=\\frac{1}{2}v^{3}$$

At $12$ m/s:

$$P(12)=\\frac{1}{2}\\cdot 1728$$

$$P(12)=864$$

The claim is that this sits under $800$. Compare with the claim:

$$864>800.$$

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 81,
    solution_overview: `Aerodynamic drag on a track cyclist follows $F(v)=Av^{r}$ newtons for speed $v>0$. Doubling any speed multiplies drag by four, and raising speed from $8$ to $12$ m/s increased drag by $40$ N. Absorbed power is $P=Fv$ watts.

**Part 1: Building the model.**

Let $v$ = speed in metres per second, $F$ = drag in newtons, and $P$ = absorbed power in watts. The doubling record is a ratio, so the coefficient cancels and isolates the exponent. The logged increase is a difference of two levels, which then pins the coefficient.

**1. Translate: the doubling rule.**

$$2^{r}=4 \\tag{1}$$

**2. Translate: the logged increase.**

$$A\\bigl(12^{r}-8^{r}\\bigr)=40 \\tag{2}$$

**3. Translate: power.**

$$P(v)=Av^{r+1}$$

**Part 2: Solve.**

From $(1)$,

$$4=2^{2}$$

$$r=2$$

Then $(2)$ becomes a difference of squares:

$$A(144-64)=40$$

$$80A=40$$

$$A=\\frac{1}{2}$$

The recovered laws are $F(v)=\\frac{1}{2}v^{2}$ and $P(v)=\\frac{1}{2}v^{3}$.

**Answer.** $r=2$ | $A=\\frac{1}{2}$ | $F(v)=\\frac{1}{2}v^{2}$ | $P(v)=\\frac{1}{2}v^{3}$`,
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

Name the recovered power rule, then substitute the claimed input.

Inverse proportionality would mean exponent $-1$. The overview recovered

$$r=-3$$

$$-3\\neq -1$$

The recovered law is

$$S(x)=400x^{-3},$$ a reciprocal cube, not a reciprocal.

The exponent is $-3$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → False

The overview recovered

$$r=-3$$

Doubling burial depth multiplies the signal by

$$2^{-3}=\\frac{1}{8}$$

The claim is a factor of

$$\\frac{1}{2}$$

, which would have needed

$$r=-1$$

Doubling depth leaves one eighth of the signal, not one half.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

A nonzero power inverts to another power. The overview recovered

$$S=400x^{-3},$$ so isolating depth raises both sides to the reciprocal

$$-\\frac{1}{3}$$

 and leaves

$$x=400^{\\frac{1}{3}}S^{-\\frac{1}{3}}$$

Burial depth needed for a given reading is still a monomial in $S$.

The inverse is a power function of the reading.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$S(x)=400x^{-3}$$

At $4$ metres:

$$S(4)=\\frac{400}{64}$$

$$S(4)=6.25$$

The claim is that this already sits under $7$. Compare with the claim:

$$6.25<7.$$

So the statement is True.`,
    `**E.** → False

The overview recovered

$$S=400x^{-3}$$

 A reading of $3.2$ millivolts inverts by

$$\\frac{400}{x^{3}}=3.2$$

$$x^{3}=\\frac{400}{3.2}$$

$$x^{3}=125$$

$$x=5$$

The claim is a depth of more than $8$ metres. We have $5<8$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 82,
    solution_overview: `The locator signal follows $S(x)=Ax^{r}$ millivolts for burial depth $x>0$. Doubling any burial depth cuts the received signal to $\\frac{1}{8}$, and a calibration at $2$ metres read $50$ millivolts.

**Part 1: Building the model.**

Let $x$ = burial depth in metres and $S$ = received signal in millivolts. The doubling record isolates the exponent. The calibration pair then pins the coefficient.

**1. Translate: the doubling rule.**

$$2^{r}=\\frac{1}{8} \\tag{1}$$

**2. Translate: the calibration run.**

$$A\\cdot 2^{r}=50 \\tag{2}$$

**Part 2: Solve.**

From $(1)$,

$$\\frac{1}{8}=2^{-3}$$

$$r=-3$$

Then $(2)$ is $A\\cdot 2^{-3}=50$:

$$\\frac{A}{8}=50$$

$$A=400$$

The recovered law is $S(x)=400x^{-3}$.

**Answer.** $r=-3$ | $A=400$ | $S(x)=400x^{-3}$`,
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

The overview recovered demand exponent

$$\\frac{3}{4}$$

. Demand lags mass when that exponent sits below $1$.

$$\\frac{3}{4}<1$$

A proportional law would have carried exponent $1$.

The leftover exponent is

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

Form the ratio so the unknown positive coefficient cancels.

Oxygen demand per square centimetre of gill is the ratio of the two recovered laws:

$$\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{1}{12}}$$

The leftover exponent

$$\\frac{1}{12}$$

 is positive, so intensity rises as the fish grows, rather than falling.

Demand per unit gill area climbs.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → False

The overview recovered

$$G(m)=3m^{\\frac{2}{3}}$$

 Two $16$ g fish have total gill area

$$2G(16)=6\\cdot 16^{\\frac{2}{3}}$$

$$2G(16)=96^{\\frac{2}{3}}$$

$$2G(16)=24\\cdot 2^{\\frac{2}{3}}$$

One $32$ g fish has

$$G(32)=3\\cdot 32^{\\frac{2}{3}}$$

$$G(32)=96^{\\frac{2}{3}}$$

$$G(32)=24\\cdot 2^{\\frac{1}{3}}$$

Because

$$2^{\\frac{2}{3}}\\neq 2^{\\frac{1}{3}}$$

, the two totals are not equal. The exponent

$$\\frac{2}{3}<1$$

 makes splitting mass raise total area.

Two $16$ g fish out-area one $32$ g fish.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

The overview recovered

$$D(m)=5m^{\\frac{3}{4}}$$

At $256$ g:

$$D(256)=5\\cdot 256^{\\frac{3}{4}}$$

$$256^{\\frac{3}{4}}=\\bigl(256^{\\frac{1}{4}}\\bigr)^{3}$$

$$256^{\\frac{1}{4}}=4$$

$$4^{3}=64$$

$$D(256)=5\\cdot 64$$

$$D(256)=320$$

$$D(256)=1280^{\\frac{3}{4}}$$

$$256^{\\frac{1}{4}}=\\bigl(256^{\\frac{1}{4}}\\bigr)^{1}$$

$$4^{1}=4$$

The claim is that this already sits above $300$. We have $320>300$.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

A tank total adds individual demands. Sixteen fish of $16$ g each demand

$$16\\cdot D(16)=16\\cdot 5\\cdot 16^{\\frac{3}{4}}$$

$$16^{\\frac{3}{4}}=\\bigl(16^{\\frac{1}{4}}\\bigr)^{3}$$

$$16^{\\frac{1}{4}}=2$$

$$2^{3}=8$$

$$16\\cdot D(16)=16\\cdot 5\\cdot 8$$

$$16\\cdot D(16)=80\\cdot 16^{\\frac{3}{4}}$$

$$16\\cdot D(16)=1280^{\\frac{3}{4}}$$

$$16^{\\frac{1}{4}}=\\bigl(16^{\\frac{1}{4}}\\bigr)^{1}$$

$$2^{1}=2$$

$$16\\cdot D(16)=80\\cdot 8$$

$$16\\cdot D(16)=640$$

$$16\\cdot D(16)=16\\cdot 40$$

The claim is that this still sits under $600$. We have $640>600$.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 83,
    solution_overview: `Oxygen demand follows $D(m)=Am^{\\frac{3}{4}}$ millilitres per hour and gill area follows $G(m)=Bm^{\\frac{2}{3}}$ square centimetres, for body mass $m>0$ grams. An $81$ g fish demands $95$ millilitres per hour more than a $16$ g fish, and a $64$ g fish carries $48$ square centimetres of gill. Tank totals add individual demands.

**Part 1: Building the model.**

Let $m$ = body mass in grams, $D$ = oxygen demand, and $G$ = gill area. Both exponents are given, so each law needs one record: a difference for demand and a level for gill area.

**1. Translate: the demand gap.**

$$A\\bigl(81^{\\frac{3}{4}}-16^{\\frac{3}{4}}\\bigr)=95 \\tag{1}$$

**2. Translate: the gill record.**

$$B\\cdot 64^{\\frac{2}{3}}=48 \\tag{2}$$

**Part 2: Solve.**

The shape factors are exact:

$$81^{\\frac{3}{4}}=27, \\qquad 16^{\\frac{3}{4}}=8$$

so $(1)$ is $19A=95$ and $A=5$. Likewise

$$64^{\\frac{2}{3}}=16$$

so $(2)$ is $16B=48$ and $B=3$.

The recovered laws are $D(m)=5m^{\\frac{3}{4}}$ and $G(m)=3m^{\\frac{2}{3}}$.

**Answer.** $A=5$ | $B=3$ | $D(m)=5m^{\\frac{3}{4}}$ | $G(m)=3m^{\\frac{2}{3}}$`,
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

The overview recovered flow exponent $4$. Flow outruns radius when that exponent exceeds $1$.

$$4>1$$

A proportional law would have carried exponent $1$.

The leftover exponent is $4$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered

$$k=4$$

Doubling the tube radius multiplies flow by

$$2^{4}=16$$

The claim is a factor of $2$, which would have needed $k=1$.

Doubling the radius multiplies flow by $16$, not by $2$.

So the statement is False.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

The mean velocity index spreads flow across the cross-section:

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{A}{\\pi}r^{k-2}$$

The overview recovered

$$A=3$$

 and

$$k=4,$$ so the index is

$$\\frac{3}{\\pi}r^{2}$$

. The leftover exponent $2$ is not zero, so the index still depends on the tube.

The velocity index is not the same in every tube.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$Q(r)=3r^{4}$$

At radius $3$ mm:

$$Q(3)=3\\cdot 81$$

$$Q(3)=243$$

The claim is that this already sits above $200$. Compare with the claim:

$$243>200.$$

So the statement is True.`,
    `**E.** → False

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$Q(r)=3r^{4}$$

At radius $1$ mm:

$$Q(1)=3\\cdot 1$$

$$Q(1)=3$$

The claim is that this still sits above $10$. Compare with the claim:

$$3<10.$$

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 84,
    solution_overview: `Volumetric flow follows $Q(r)=Ar^{k}$ litres per hour for internal radius $r>0$ millimetres. Doubling any tube radius multiplies flow by $16$, and a bench test at radius $2$ mm delivered $48$ litres per hour.

**Part 1: Building the model.**

Let $r$ = internal radius in millimetres and $Q$ = flow in litres per hour. The doubling record isolates the exponent. The bench test then pins the coefficient.

**1. Translate: the doubling rule.**

$$2^{k}=16 \\tag{1}$$

**2. Translate: the bench test.**

$$A\\cdot 2^{k}=48 \\tag{2}$$

**Part 2: Solve.**

From $(1)$,

$$16=2^{4}$$

$$k=4$$

Then $(2)$ is $A\\cdot 16=48$:

$$A=3$$

The recovered law is $Q(r)=3r^{4}$.

**Answer.** $k=4$ | $A=3$ | $Q(r)=3r^{4}$`,
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

The overview recovered

$$r=-2$$

Doubling the distance multiplies the dose rate by

$$2^{-2}=\\frac{1}{4}$$

The claim is a factor of

$$\\frac{1}{2}$$

, which would have needed

$$r=-1$$

Doubling the distance quarters the dose rate, not halves it.

So the statement is False.`,
    `**B.** → True

The overview recovered

$$H(d)=720d^{-2}$$

 Differentiating gives

$$H'(d)=-1440d^{-3}$$

At $3$ metres:

$$H'(3)=-\\frac{1440}{27}$$

$$H'(3)=-\\frac{160}{3}$$

At $6$ metres:

$$H'(6)=-\\frac{1440}{216}$$

$$H'(6)=-\\frac{20}{3}$$

An extra metre cuts more dose where the derivative is more negative. We have

$$-\\frac{160}{3}<-\\frac{20}{3}$$

.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

A nonzero power inverts to another power. The overview recovered

$$H=720d^{-2},$$ so isolating distance leaves

$$d=720^{\\frac{1}{2}}H^{-\\frac{1}{2}}$$

Distance needed for a given dose rate is still a monomial in $H$.

The inverse is a power of the dose rate.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$H(d)=720d^{-2}$$

At $6$ metres:

$$H(6)=\\frac{720}{36}$$

$$H(6)=20$$

The claim is that this already sits under $25$. Compare with the claim:

$$20<25.$$

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

The barrier is the inversion

$$H(d)=5$$

. The overview recovered

$$H=720d^{-2}$$

, so

$$\\frac{720}{d^{2}}=5$$

$$d^{2}=144$$

$$d=12$$

The claim is a barrier farther than $15$ metres. We have $12<15$.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 85,
    solution_overview: `Dose rate follows $H(d)=Ad^{r}$ microsieverts per hour for distance $d>0$ metres. Quadrupling any distance cuts the dose rate to $\\frac{1}{16}$, and a survey at $3$ metres reads $80$ microsieverts per hour. The barrier sits where the dose rate has fallen to $5$ microsieverts per hour.

**Part 1: Building the model.**

Let $d$ = distance from the source in metres and $H$ = dose rate. The quadrupling record isolates the exponent. The survey reading then pins the coefficient.

**1. Translate: the quadrupling rule.**

$$4^{r}=\\frac{1}{16} \\tag{1}$$

**2. Translate: the survey reading.**

$$A\\cdot 3^{r}=80 \\tag{2}$$

**Part 2: Solve.**

From $(1)$,

$$\\frac{1}{16}=4^{-2}$$

$$r=-2$$

Then $(2)$ is $A\\cdot 3^{-2}=80$:

$$\\frac{A}{9}=80$$

$$A=720$$

The recovered law is $H(d)=720d^{-2}$.

**Answer.** $r=-2$ | $A=720$ | $H(d)=720d^{-2}$`,
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

The overview recovered

$$S(t)=225\\pi t^{\\frac{4}{3}}$$

That is a monomial in elapsed time, coefficient $225\\pi$ and exponent

$$\\frac{4}{3}$$

.

The stained area is a power of elapsed time.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

The overview recovered area exponent

$$\\frac{4}{3}$$

. Area outruns elapsed time when that exponent exceeds $1$.

$$\\frac{4}{3}>1$$

A proportional law would have carried exponent $1$.

The leftover exponent is

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

The overview recovered area exponent

$$\\frac{4}{3}$$

. Doubling elapsed time multiplies stained area by

$$2^{\\frac{4}{3}}$$

which is not $2$. The claim would have needed leftover exponent $1$ on $S$.

Doubling time does not double the stained area.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$r(t)=15t^{\\frac{2}{3}}$$

At hour $8$:

$$r(8)=15\\cdot 4$$

$$r(8)=60$$

The claim is that this already sits above $50$. Compare with the claim:

$$60>50.$$

So the statement is True.`,
    `**E.** → False

The overview recovered

$$r(t)=15t^{\\frac{2}{3}}$$

 A radius of $240$ metres inverts by

$$15t^{\\frac{2}{3}}=240$$

$$t^{\\frac{2}{3}}=16$$

$$t=64$$

The claim is that this happens in under $50$ hours. We have $64>50$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 86,
    solution_overview: `The plume radius follows $r(t)=At^{\\frac{2}{3}}$ metres for elapsed time $t>0$ hours. The radius grew by $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours since release and $r$ = plume radius in metres. The exponent is given, so the recorded growth is a difference of two shape factors and recovers $A$.

**1. Translate: the recorded growth.**

$$A\\bigl(8^{\\frac{2}{3}}-1^{\\frac{2}{3}}\\bigr)=45 \\tag{1}$$

**Part 2: Solve.**

$$8^{\\frac{2}{3}}=4$$

so $(1)$ is $A(4-1)=45$ and $A=15$.

The recovered radius is $r(t)=15t^{\\frac{2}{3}}$. Squaring and multiplying by $\\pi$ raises the time exponent to $\\frac{4}{3}$:

$$S(t)=225\\pi t^{\\frac{4}{3}}$$

**Answer.** $A=15$ | $r(t)=15t^{\\frac{2}{3}}$ | $S(t)=225\\pi t^{\\frac{4}{3}}$`,
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

Name the recovered power rule, then substitute the claimed input.

A nonzero power inverts to another power. The overview recovered

$$Q=16h^{\\frac{3}{2}},$$ so isolating head raises both sides to the reciprocal

$$\\frac{2}{3}$$

 and leaves

$$h=\\left(\\frac{Q}{16}\\right)^{\\frac{2}{3}}$$

Head needed for a given discharge is still a monomial in $Q$.

The inverse is a power of discharge.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

The overview recovered discharge exponent

$$\\frac{3}{2}$$

. Discharge outruns head when that exponent exceeds $1$.

$$\\frac{3}{2}>1$$

A proportional law would have carried exponent $1$.

The leftover exponent is

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → False

The overview recovered exponent

$$\\frac{3}{2}$$

. Doubling the head multiplies discharge by

$$2^{\\frac{3}{2}}=2\\sqrt{2}$$

which is not $2$. The claim would have needed leftover exponent $1$.

Doubling the head does not double the discharge.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$Q(h)=16h^{\\frac{3}{2}}$$

At a head of $1$ metre:

$$Q(1)=16\\cdot 1$$

$$Q(1)=16$$

The claim is that this still sits under $20$. Compare with the claim:

$$16<20.$$

So the statement is True.`,
    `**E.** → False

The overview recovered

$$Q(h)=16h^{\\frac{3}{2}}$$

At a head of $4$ metres:

$$Q(4)=16\\cdot 4^{\\frac{3}{2}}$$

$$4^{\\frac{3}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{3}$$

$$4^{\\frac{1}{2}}=2$$

$$2^{3}=8$$

$$Q(4)=16\\cdot 8$$

$$Q(4)=128$$

$$Q(4)=64^{\\frac{3}{2}}$$

$$64^{\\frac{3}{2}}=\\bigl(64^{\\frac{1}{2}}\\bigr)^{3}$$

$$64^{\\frac{1}{2}}=8$$

$$8^{3}=512$$

$$Q(4)=512$$

$$4^{\\frac{1}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{1}$$

$$2^{1}=2$$

$$64^{\\frac{1}{2}}=\\bigl(64^{\\frac{1}{2}}\\bigr)^{1}$$

$$8^{1}=8$$

The claim is that this still sits under $100$. We have $128>100$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 87,
    solution_overview: `Discharge over the weir follows $Q(h)=Ah^{\\frac{3}{2}}$ cubic metres per second for head $h>0$ metres. A gauging at head $0.25$ metres recorded $2$ cubic metres per second.

**Part 1: Building the model.**

Let $h$ = head in metres and $Q$ = discharge. The exponent is given, so the gauging pair pins the coefficient.

**1. Translate: the gauging.**

$$A\\cdot(0.25)^{\\frac{3}{2}}=2 \\tag{1}$$

**Part 2: Solve.**

$$(0.25)^{\\frac{3}{2}}=\\left(\\frac{1}{4}\\right)^{\\frac{3}{2}}$$

$$=\\frac{1}{8}$$

so $(1)$ is $\\frac{A}{8}=2$ and $A=16$.

The recovered law is $Q(h)=16h^{\\frac{3}{2}}$.

**Answer.** $A=16$ | $Q(h)=16h^{\\frac{3}{2}}$`,
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

The overview recovered fuel exponent $2$. Fuel use outruns batch mass when that exponent exceeds $1$.

$$2>1$$

A proportional law would have carried exponent $1$.

The leftover exponent is $2$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered

$$r=2$$

Doubling the batch mass multiplies fuel use by

$$2^{2}=4$$

The claim is a factor of $2$, which would have needed $r=1$. A $300\\%$ rise is already a fourfold, not a twofold.

Doubling the batch multiplies fuel by $4$, not by $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Fuel use per tonne is the recovered law divided by mass:

$$\\frac{F(x)}{x}=3x$$

The leftover exponent $1$ is positive, so fuel per tonne rises as the batch grows, rather than falling.

Fuel use per tonne climbs.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$F(x)=3x^{2}$$

At $10$ tonnes:

$$F(10)=3\\cdot 100$$

$$F(10)=300$$

The claim is that this already sits above $250$. Compare with the claim:

$$300>250.$$

So the statement is True.`,
    `**E.** → False

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$F(x)=3x^{2}$$

At $6$ tonnes:

$$F(6)=3\\cdot 36$$

$$F(6)=108$$

The claim is that this still sits under $100$. Compare with the claim:

$$108>100.$$

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 88,
    solution_overview: `Fuel use follows $F(x)=Ax^{r}$ litres per batch for batch mass $x>0$ tonnes. Doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds $96$ litres.

**Part 1: Building the model.**

Let $x$ = batch mass in tonnes and $F$ = fuel use in litres. A $300\\%$ rise is a factor of $4$, so the doubling record isolates the exponent. The logged increase is then a difference of two levels, which pins the coefficient.

**1. Translate: the doubling rule.**

$$2^{r}=4 \\tag{1}$$

**2. Translate: the logged increase.**

$$A\\bigl(6^{r}-2^{r}\\bigr)=96 \\tag{2}$$

**Part 2: Solve.**

From $(1)$,

$$4=2^{2}$$

$$r=2$$

Then $(2)$ becomes

$$A(36-4)=96$$

$$32A=96$$

$$A=3$$

The recovered law is $F(x)=3x^{2}$.

**Answer.** $r=2$ | $A=3$ | $F(x)=3x^{2}$`,
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

The overview recovered the composition

$$P\\circ m=t^{2}$$

That is a monomial in the throttle setting, coefficient $1$ and exponent $2$.

The composed index is a power of the throttle.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered composed exponent $2$. Proportionality to the throttle would have needed leftover exponent $1$.

$$2\\neq 1$$

The composed index is

$$t^{2}$$

, a square, not a linear rule.

The leftover exponent is $2$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

Mass flow per unit of throttle is the recovered law divided by $t$:

$$\\frac{m(t)}{t}=2t^{-\\frac{1}{2}}$$

The leftover exponent is negative, so that ratio falls as the throttle rises.

Mass flow per unit throttle falls.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$m(t)=2t^{\\frac{1}{2}}$$

At throttle $25$:

$$m(25)=2\\cdot 5$$

$$m(25)=10$$

The claim is that this already sits above $8$. Compare with the claim:

$$10>8.$$

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

An index of $81$ inverts on the recovered composition $P=t^{2}$:

$$t^{2}=81$$

$$t=9$$

The claim is a throttle setting above $20$. We have $9<20$.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 89,
    solution_overview: `Flue-gas mass flow follows $m(t)=At^{\\frac{1}{2}}$ tonnes per hour for throttle $t>0$, and the particulate index is $P(m)=\\frac{m^{4}}{16}$. A calibration at $t=9$ recorded $m=6$.

**Part 1: Building the model.**

Let $t$ = throttle setting and $m$ = mass flow. The exponent is given, so the calibration pair pins $A$. Composition then multiplies the two exponents.

**1. Translate: the calibration.**

$$A\\cdot 9^{\\frac{1}{2}}=6 \\tag{1}$$

**Part 2: Solve.**

From $(1)$, $3A=6$ and $A=2$. The recovered mass flow is $m(t)=2t^{\\frac{1}{2}}$. Substituting into the index:

$$P\\bigl(m(t)\\bigr)=\\frac{\\bigl(2t^{\\frac{1}{2}}\\bigr)^{4}}{16}$$

$$=\\frac{16t^{2}}{16}$$

$$=t^{2}$$

**Answer.** $A=2$ | $m(t)=2t^{\\frac{1}{2}}$ | $P\\circ m=t^{2}$`,
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

Name the recovered power rule, then substitute the claimed input.

The two apps quote the same wait when

$$L(d)=Q(d)$$

. The overview recovered

$$L(d)=4d^{\\frac{1}{2}}$$

 and

$$Q(d)=\\frac{1}{5}d$$

, so

$$4d^{\\frac{1}{2}}=\\frac{1}{5}d$$

$$d-20d^{\\frac{1}{2}}=0$$

$$d^{\\frac{1}{2}}\\bigl(d^{\\frac{1}{2}}-20\\bigr)=0$$

The roots are

$$d=0$$

 and

$$d=400$$

. On $d>0$ they meet only once.

They do not quote the same wait at two different positive distances.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → True

The overview recovered

$$L(d)=4d^{\\frac{1}{2}}$$

 and

$$Q(d)=\\frac{1}{5}d$$

Their ratio is

$$\\frac{Q(d)}{L(d)}=\\frac{1}{20}d^{\\frac{1}{2}}$$

which is strictly increasing for $d>0$. Once the ratio passes $1$, it cannot return to $1$, so App Q cannot catch App L again.

After App L is shorter, App Q stays longer.

The computed figure agrees with the claim.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

App L's wait per kilometre is the recovered law divided by distance:

$$\\frac{L(d)}{d}=4d^{-\\frac{1}{2}}$$

The leftover exponent is negative, so that ratio falls as the trip gets longer.

Wait per kilometre on App L falls.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Under the $20$-minute cap, App L can serve distances with $L(d)\\le 20$. The overview recovered

$$L(d)=4d^{\\frac{1}{2}}$$

, so

$$4d^{\\frac{1}{2}}=20$$

$$d=25$$

The longest legal App L trip is $25$ km, which is not longer than $30$ km.

App L cannot serve trips longer than $30$ kilometres under the cap.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

The overview recovered

$$L(d)=4d^{\\frac{1}{2}}$$

 and

$$Q(d)=\\frac{1}{5}d$$

. At $400$ kilometres:

$$L(400)=4\\cdot 20$$

$$L(400)=80$$

$$Q(400)=\\frac{400}{5}$$

$$Q(400)=80$$

The claim is that both already sit above $70$. We have $80>70$ on each app.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 90,
    solution_overview: `App L quotes $L(d)=ad^{\\frac{1}{2}}$ minutes and App Q quotes $Q(d)=kd$ minutes, for trip distance $d>0$ kilometres. A $25$ km trip on App L quoted $20$ minutes, and a $100$ km trip on App Q quoted $20$ minutes. Wait is capped at $20$ minutes.

**Part 1: Building the model.**

Let $d$ = trip distance in kilometres. Each log pins one coefficient, because each exponent is given.

**1. Translate: App L.**

$$a\\cdot 25^{\\frac{1}{2}}=20 \\tag{1}$$

**2. Translate: App Q.**

$$k\\cdot 100=20 \\tag{2}$$

**Part 2: Solve.**

From $(1)$, $5a=20$ and $a=4$. From $(2)$, $k=\\frac{1}{5}$.

The recovered waits are $L(d)=4d^{\\frac{1}{2}}$ and $Q(d)=\\frac{1}{5}d$.

**Answer.** $a=4$ | $k=\\frac{1}{5}$ | $L(d)=4d^{\\frac{1}{2}}$ | $Q(d)=\\frac{1}{5}d$`,
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

The overview recovered

$$r=\\frac{1}{2}$$

Evaporation lags the humidity deficit when that exponent sits below $1$.

$$\\frac{1}{2}<1$$

A proportional law would have carried exponent $1$.

The leftover exponent is

$$\\frac{1}{2}$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered

$$r=\\frac{1}{2}$$

Doubling the humidity deficit multiplies evaporation by

$$2^{\\frac{1}{2}}=\\sqrt{2}$$

which is not $2$. The claim would have needed leftover exponent $1$.

Doubling the deficit does not double evaporation.

So the statement is False.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The forty-millimetre reading is

$$E(4)=40$$

. Doubling it means

$$E(h)=80$$

. The overview recovered

$$E(h)=20h^{\\frac{1}{2}}$$

, so

$$20h^{\\frac{1}{2}}=80$$

$$h=16$$

Twice the starting deficit $4$ would have been $8$. The required $16$ sits past $8$.

She must more than double the humidity deficit.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

The overview recovered

$$E(h)=20h^{\\frac{1}{2}}$$

 Differentiating gives

$$E'(h)=10h^{-\\frac{1}{2}}$$

After a deficit of $1$:

$$E'(1)=10$$

After a deficit of $4$:

$$E'(4)=5$$

The claim needs $E'(4)>E'(1)$. We have $5<10$.

So the statement is False.`,
    `**E.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$E(h)=20h^{\\frac{1}{2}}$$

After a deficit of $25$:

$$E(25)=20\\cdot 5$$

$$E(25)=100$$

The claim is that this already sits above $90$. Compare with the claim:

$$100>90.$$

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 91,
    solution_overview: `Wetland evaporation follows $E(h)=Ah^{r}$ millimetres per day against humidity deficit $h>0$. Deficits of $1$ and $4$ recorded $20$ and $40$ millimetres per day, and a third reading at deficit $9$ recorded $60$.

**Part 1: Building the model.**

Let $h$ = humidity deficit and $E$ = evaporation. Two unknowns need the first two readings. Their ratio cancels $A$ and isolates $r$; the unit deficit then pins $A$. The third reading is a check.

**1. Translate: the ratio.**

$$\\frac{40}{20}=4^{r} \\tag{1}$$

**2. Translate: the unit deficit.**

$$A\\cdot 1^{r}=20 \\tag{2}$$

**Part 2: Solve.**

From $(1)$, $2=4^{r}=\\bigl(2^{2}\\bigr)^{r}=2^{2r}$, so $2r=1$ and $r=\\frac{1}{2}$. From $(2)$, $A=20$.

The recovered law is $E(h)=20h^{\\frac{1}{2}}$. The third reading matches: $E(9)=20\\cdot 3=60$.

**Answer.** $A=20$ | $r=\\frac{1}{2}$ | $E(h)=20h^{\\frac{1}{2}}$`,
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

The overview recovered

$$N(n)=12n^{\\frac{1}{2}}-2n$$

That is a difference of two distinct powers of $n$, not a single monomial $cn^{p}$.

Upkeep is linear while benefit is a square root, so the net is not a power function of the planting.

The net is not a power of $n$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$N(n)=12n^{\\frac{1}{2}}-2n$$

At nine thousand trees:

$$N(9)=12\\cdot 3-18$$

$$N(9)=36-18$$

$$N(9)=18$$

The claim is that this already sits above $15$. Compare with the claim:

$$18>15.$$

So the statement is True.`,
    `**C.** → False

Read the exponent from the overview before comparing growth rates.

Upkeep overtakes benefit when

$$12n^{\\frac{1}{2}}=2n,$$ so

$$n=36$$

Differentiating the recovered net gives

$$N'(n)=6n^{-\\frac{1}{2}}-2$$

which is negative for every $n>9$. Past the crossing at

$$n=36,$$ the net is already negative and still falling, so planting more trees cannot restore a positive net.

The net stays negative after upkeep overtakes benefit.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**D.** → True

The overview recovered

$$N(n)=12n^{\\frac{1}{2}}-2n$$

 Differentiating gives

$$N'(n)=6n^{-\\frac{1}{2}}-2$$

At four thousand trees:

$$N'(4)=3-2$$

$$N'(4)=1$$

At nine thousand trees:

$$N'(9)=2-2$$

$$N'(9)=0$$

The claim needs $N'(4)>N'(9)$. We have $1>0$.

So the statement is True.`,
    `**E.** → False

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$N(n)=12n^{\\frac{1}{2}}-2n$$

At four thousand trees:

$$N(4)=12\\cdot 2-8$$

$$N(4)=24-8$$

$$N(4)=16$$

The claim is that this already sits above $20$. Compare with the claim:

$$16<20.$$

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 92,
    solution_overview: `Cooling benefit follows $B(n)=An^{\\frac{1}{2}}$ thousand euros and upkeep follows $C(n)=kn$ thousand euros, for $n>0$ thousand trees. Raising the planting from $4$ to $9$ thousand increased benefit by $12$ thousand euros, and at $9$ thousand trees upkeep was $18$ thousand euros. Net benefit is $N=B-C$.

**Part 1: Building the model.**

Let $n$ = thousands of trees. The benefit difference isolates $A$. The upkeep level isolates $k$.

**1. Translate: the benefit gap.**

$$A\\bigl(9^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=12 \\tag{1}$$

**2. Translate: the upkeep level.**

$$9k=18 \\tag{2}$$

**Part 2: Solve.**

From $(1)$, $A(3-2)=12$ and $A=12$. From $(2)$, $k=2$.

The recovered schedules are $B(n)=12n^{\\frac{1}{2}}$ and $C(n)=2n$, so

$$N(n)=12n^{\\frac{1}{2}}-2n$$

**Answer.** $A=12$ | $k=2$ | $N(n)=12n^{\\frac{1}{2}}-2n$`,
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

Name the recovered power rule, then substitute the claimed input.

A nonzero power inverts to another power. The overview recovered

$$q=2000p^{-2},$$ so isolating price leaves

$$p=2000^{\\frac{1}{2}}q^{-\\frac{1}{2}}$$

Price needed for a given weekly demand is still a monomial in $q$.

The inverse is a power function of demand.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered exponent $-2$. Doubling the five-euro price multiplies demand by

$$2^{-2}=\\frac{1}{4}$$

The claim is a factor of

$$\\frac{1}{2}$$

, which would have needed exponent $-1$.

Doubling the price quarters demand, not halves it.

So the statement is False.`,
    `**C.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$q(p)=2000p^{-2}$$

At $10$ euros:

$$q(10)=\\frac{2000}{100}$$

$$q(10)=20$$

The claim is that this already sits under $25$. Compare with the claim:

$$20<25.$$

So the statement is True.`,
    `**D.** → True

Start from the calibrated closed form in the overview.

Weekly revenue is

$$R=pq$$

Substituting the recovered demand gives

$$R(p)=2000p^{-1}$$

The leftover exponent is negative, so revenue falls as the price rises.

Revenue is

$$\\frac{2000}{p}$$

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**E.** → False

Keep the stated domain in force while you evaluate the model.

A target of $125$ packs inverts the recovered law:

$$2000p^{-2}=125$$

$$p^{2}=\\frac{2000}{125}$$

$$p^{2}=16$$

$$p=4$$

The claim is a price above $5$ euros. We have $4<5$.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 93,
    solution_overview: `Weekly pamphlet demand follows $q(p)=Ap^{-2}$ packs per week for price $p>0$ euros. At $5$ euros the kiosk sold $80$ packs.

**Part 1: Building the model.**

Let $p$ = price in euros and $q$ = packs per week. The exponent is given, so the recorded pair pins $A$.

**1. Translate: the recorded pair.**

$$A\\cdot 5^{-2}=80 \\tag{1}$$

**Part 2: Solve.**

From $(1)$, $\\frac{A}{25}=80$ and $A=2000$.

The recovered law is $q(p)=2000p^{-2}$.

**Answer.** $A=2000$ | $q(p)=2000p^{-2}$`,
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

The overview recovered the composition

$$q\\circ p=\\frac{400}{s}$$

That is a monomial in the subsidy index, coefficient $400$ and exponent $-1$.

Composed demand is a power function of the subsidy index.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → False

The overview recovered composed exponent $-1$. Tripling the subsidy index multiplies composed demand by

$$3^{-1}=\\frac{1}{3}$$

The claim is a factor of $3$, which would have needed leftover exponent $1$.

Tripling $s$ divides demand by $3$.

So the statement is False.`,
    `**C.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$q\\circ p=\\frac{400}{s}$$

At subsidy index $8$:

$$\\frac{400}{8}$$

$$q\\circ p=50$$

The claim is that this already sits above $40$. Compare with the claim:

$$50>40.$$

So the statement is True.`,
    `**D.** → False

The overview recovered

$$q\\circ p=\\frac{400}{s}$$

The leftover exponent $-1$ is negative, so raising the subsidy index lowers composed demand rather than raising it.

Composed demand falls in $s$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$q\\circ p=\\frac{400}{s}$$

At subsidy index $27$:

$$\\frac{400}{27}\\approx 14.81$$

The claim is that this stays under $16$. Compare with the claim:

$$14.81<16.$$

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 94,
    solution_overview: `Day-pass sales follow $q(p)=Ap^{-\\frac{3}{2}}$ for price $p>0$ euros, and a pilot at $16$ euros sold $50$ passes. Policy indexes the price by $p(s)=Bs^{\\frac{2}{3}}$, and at subsidy index $8$ the posted price is $16$ euros.

**Part 1: Building the model.**

Let $p$ = pass price, $q$ = weekly passes, and $s$ = subsidy index. The pilot pins $A$. The indexed price at $s=8$ pins $B$. Composition multiplies the exponents.

**1. Translate: the pilot.**

$$A\\cdot 16^{-\\frac{3}{2}}=50 \\tag{1}$$

**2. Translate: the policy map.**

$$B\\cdot 8^{\\frac{2}{3}}=16 \\tag{2}$$

**Part 2: Solve.**

$$16^{\\frac{3}{2}}=64$$

so $(1)$ is $\\frac{A}{64}=50$ and $A=3200$. Next,

$$8^{\\frac{2}{3}}=4$$

so $(2)$ is $4B=16$ and $B=4$.

The recovered maps are $q(p)=3200p^{-\\frac{3}{2}}$ and $p(s)=4s^{\\frac{2}{3}}$. Composing:

$$q\\bigl(p(s)\\bigr)=3200\\bigl(4s^{\\frac{2}{3}}\\bigr)^{-\\frac{3}{2}}$$

$$=\\frac{400}{s}$$

**Answer.** $A=3200$ | $B=4$ | $q\\circ p=\\frac{400}{s}$`,
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

Name the recovered power rule, then substitute the claimed input.

The cheaper line is line 2, because

$$b=\\frac{1}{4}$$

$$\\frac{1}{4}<a$$

$$b=1$$

The overview recovered the cheaper-line corner at $225$ and the equal-marginal split at $180$.

Because $180<225$, the interior split beats concentrating on the cheaper line.

Concentrating on the cheaper line is not the cheapest plan.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**B.** → True

The recovered score for the named plan is already in the overview. That plan sending all thirty thousand loaves to line 2 scores

$$225$$

Compare this score with the threshold $200$:

$$225>200$$

The score sits above $200$, matching the claim.

So the statement is True.`,
    `**C.** → True

The overview recovered

$$a=1$$

$$1>b$$

$$a=\\frac{1}{4}$$

 and the equal-marginal split

$$q_{2}=4q_{1},$$ hence

$$q_{2}=24$$

 and

$$q_{1}=6$$

Line 2 is the cheaper line and takes the larger share.

The cheaper line takes $24$ thousand loaves against $6$ on line 1.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Line 1's average cost index is the recovered

$$C_{1}(q)=q^{2}$$

 divided by output:

$$\\frac{C_{1}(q)}{q}=q$$

The leftover exponent $1$ is positive, so that average rises as line 1's own output rises, rather than falling.

Average cost on line 1 climbs.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

The recovered score for the six-and-twenty-four bread split is already in the overview. That named plan scores

$$180$$

Compare this score with the threshold $200$ named in the claim:

$$180 < 200$$

The score sits below $200$, matching the claim.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 95,
    solution_overview: `Thirty thousand loaves are split between $C_{1}(q)=aq^{2}$ and $C_{2}(q)=bq^{2}$. A run of $10$ thousand loaves on line 1 scored $100$, and a run of $8$ thousand on line 2 scored $16$.

**Part 1: Building the model.**

Let $q_{1}$ and $q_{2}$ be the two outputs in thousands of loaves, with $q_{1}+q_{2}=30$. Each logged run pins one coefficient. The cheapest interior split equalizes the two marginal costs.

**1. Translate: line 1.**

$$a\\cdot 10^{2}=100 \\tag{1}$$

**2. Translate: line 2.**

$$b\\cdot 8^{2}=16 \\tag{2}$$

**Part 2: Solve.**

From $(1)$, $100a=100$ and $a=1$. From $(2)$, $64b=16$ and $b=\\frac{1}{4}$.

The recovered costs are $C_{1}(q)=q^{2}$ and $C_{2}(q)=\\frac{q^{2}}{4}$. Setting the derivatives $2q_{1}$ and $\\frac{1}{2}q_{2}$ equal gives $q_{2}=4q_{1}$. With $q_{1}+q_{2}=30$,

$$q_{1}=6, \\qquad q_{2}=24$$

The cheaper-line corner and the interior split then cost

$$C_{2}(30)=225, \\qquad C_{1}(6)+C_{2}(24)=180$$

**Answer.** $a=1$ | $b=\\frac{1}{4}$ | split $(6,24)$ | corner $225$ | split cost $180$`,
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

Name the recovered power rule, then substitute the claimed input.

For a power

$$q=Ap^{r},$$ point elasticity equals the exponent at every price. The overview recovered

$$r=-2,$$ so

$$\\varepsilon=-2$$

at every $p>0$. Demand is equally elastic at every price.

Elasticity is constantly $-2$.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

The overview recovered

$$q(p)=4000p^{-2}$$

 Raising the price from $10$ to $12$ euros takes demand from $40$ to

$$q(12)=\\frac{4000}{144}$$

$$q(12)=\\frac{250}{9}$$

The drop is

$$40-\\frac{250}{9}=\\frac{110}{9}\\approx 12.22$$

The claim is a cut of more than $10$ tickets. We have $12.22>10$.

So the statement is True.`,
    `**C.** → True

Read the exponent from the overview before comparing growth rates.

The constant-elasticity shortcut for a $10\\%$ price rise is

$$\\varepsilon\\cdot 0.10=-0.20$$

The exact relative drop uses the recovered

$$q\\propto p^{-2}$$

 with price factor $1.1$:

$$1.1^{-2}-1=\\frac{100}{121}-1$$

$$1.1^{-2}-1=-\\frac{21}{121}\\approx -0.1736$$

The shortcut $20\\%$ exceeds the exact $17.36\\%$, so it overstates the drop.

The shortcut overstates the exact drop.

The computed figure agrees with the claim.

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

Weekly revenue is

$$R=pq$$

Substituting the recovered demand gives

$$R(p)=4000p^{-1}$$

The leftover exponent is negative, so raising the price lowers revenue rather than maximizing it.

Revenue is

$$\\frac{4000}{p}$$

, which falls as $p$ grows.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$q(p)=4000p^{-2}$$

At $5$ euros:

$$q(5)=\\frac{4000}{25}$$

$$q(5)=160$$

The claim is that this already sits above $150$. Compare with the claim:

$$160>150.$$

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 96,
    solution_overview: `Evening admissions follow $q(p)=Ap^{-2}$ tickets for price $p>0$ euros. At $10$ euros the desk sold $40$ tickets.

**Part 1: Building the model.**

Let $p$ = admission price and $q$ = tickets. The exponent is given, so the desk record pins $A$.

**1. Translate: the desk record.**

$$A\\cdot 10^{-2}=40 \\tag{1}$$

**Part 2: Solve.**

From $(1)$, $\\frac{A}{100}=40$ and $A=4000$.

The recovered law is $q(p)=4000p^{-2}$.

**Answer.** $A=4000$ | $q(p)=4000p^{-2}$`,
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

The overview recovered exponent

$$\\frac{3}{2}$$

. Throughput outruns the belt setting when that exponent exceeds $1$.

$$\\frac{3}{2}>1$$

A proportional law would have carried exponent $1$.

The leftover exponent is

.

The computed figure agrees with the claim.

So the statement is True.`,
    `**B.** → True

The overview recovered

$$T(e)=8e^{\\frac{3}{2}}$$

 Differentiating gives

$$T'(e)=12e^{\\frac{1}{2}}$$

After setting four:

$$T'(4)=12\\cdot 2$$

$$T'(4)=24$$

After setting nine:

$$T'(9)=12\\cdot 3$$

$$T'(9)=36$$

The claim needs $T'(9)>T'(4)$. We have $36>24$.

So the statement is True.`,
    `**C.** → True

Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.

The overview recovered

$$T(e)=8e^{\\frac{3}{2}}$$

At belt setting $9$:

$$T(9)=8\\cdot 27$$

$$T(9)=216$$

The claim is that this already sits above $200$. Compare with the claim:

$$216>200.$$

So the statement is True.`,
    `**D.** → False

Start from the calibrated closed form in the overview.

The scale factor of a power law cancels the coefficient:

$$\\frac{T(2e)}{T(e)}=2^{\\frac{3}{2}}$$

That factor does not depend on $A$. Raising the coefficient by $25\\%$ leaves $2^{\\frac{3}{2}}$ unchanged, so the scale factor itself does not become $25\\%$ larger.

The doubling factor is independent of $A$.

The computed figure disagrees with the claim.

So the statement is False.`,
    `**E.** → True

Keep the stated domain in force while you evaluate the model.

If the coefficient were $25\\%$ larger, the recovered

$$A=8$$

 would become $10$. At belt setting $9$:

$$T(9)=10\\cdot 27$$

$$T(9)=270$$

The claim is that this already exceeds $250$. We have $270>250$.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 97,
    solution_overview: `Lehr throughput follows $T(e)=Ae^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at belt setting $4$ delivered $64$ trays an hour.

**Part 1: Building the model.**

Let $e$ = belt setting and $T$ = trays per hour. The exponent is given, so the recorded run pins $A$. Levels depend on $A$; scale factors cancel it.

**1. Translate: the recorded run.**

$$A\\cdot 4^{\\frac{3}{2}}=64 \\tag{1}$$

**Part 2: Solve.**

$$4^{\\frac{3}{2}}=8$$

so $(1)$ is $8A=64$ and $A=8$.

The recovered law is $T(e)=8e^{\\frac{3}{2}}$.

**Answer.** $A=8$ | $T(e)=8e^{\\frac{3}{2}}$`,
  },
];

export const MATH_CH8_POWER_FUNCTIONS: MathTask[] = [
  ...MATH_CH8_CORE.map((task) => ({
    ...task,
    subsection: task.subsection ?? "8",
  })),
  ...(ch8Exam.tasks as MathTask[]),
];
