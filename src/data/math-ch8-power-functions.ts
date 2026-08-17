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

The mass at side $2$ is five times the cube of that side:

$$
M(2)=5\\cdot 2^{3}=5\\cdot 8=40
$$

The claimed mass is $40$ grams, so the statement is True.`,
      `**B.** → False

Cube the side first, then apply the coefficient:

$$
3^{3}=27
$$

$$
M(3)=5\\cdot 27=135
$$

The claimed $125$ is $5^{3}$, cubing the coefficient instead of the side. The two figures disagree, so the statement is False.`,
      `**C.** → True

The scale factor of a power function depends only on the exponent, because the coefficient cancels:

$$
\\frac{M(2s)}{M(s)}=\\frac{5(2s)^{3}}{5s^{3}}
$$

$$
=2^{3}=8
$$

Doubling the side multiplies the mass by $8$, so the statement is True.`,
      `**D.** → True

At side $1$ the cube is $1$, so the coefficient is the mass itself:

$$
M(1)=5\\cdot 1^{3}=5
$$

The mass is $5$ grams, so the statement is True.`,
      `**E.** → False

The rule at $s=4$ is a single evaluation:

$$
M(4)=5\\cdot 4^{3}=5\\cdot 64=320
$$

The claimed $240$ does not equal $320$, so the statement is False.`,
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

An exponent of $\\frac{1}{2}$ is a square root, and the square root of zero is $0$:

$$
D(0)=6\\cdot 0^{\\frac{1}{2}}=6\\cdot 0=0
$$

The load rule returns a real value at $t=0$, so the statement is True.`,
      `**B.** → False

A negative exponent places time in a denominator:

$$
R(t)=\\frac{50}{t^{2}}
$$

At $t=0$ that denominator is zero, and division by zero is undefined. The turbidity rule has no value at the reset, so the statement is False.`,
      `**C.** → False

The exponent $\\frac{1}{2}$ is an even root, and no real number squares to a negative:

$$
D(-4)=6\\sqrt{-4}
$$

There is no real load at $t=-4$, so the statement is False.`,
      `**D.** → True

Square the time in the denominator, then divide:

$$
R(4)=\\frac{50}{4^{2}}=\\frac{50}{16}=3.125
$$

The reading is $3.125$ units, so the statement is True.`,
      `**E.** → True

The square root is taken before the coefficient:

$$
D(9)=6\\cdot 9^{\\frac{1}{2}}=6\\cdot 3=18
$$

The load is $18$ kilograms, so the statement is True.`,
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

A negative exponent puts distance in a denominator, $S(x)=\\frac{80}{x^{3}}$. As $x\\to\\infty$ that denominator grows without bound while the numerator stays $80$, so the quotient tends to $0$.

Signal strength tends to $0$, so the statement is True.`,
      `**B.** → True

Near the mast a small positive $x$ makes the denominator $x^{3}$ arbitrarily small, so $\\frac{80}{x^{3}}$ becomes arbitrarily large.

Strength grows without bound as $x\\to 0^{+}$, so the statement is True.`,
      `**C.** → False

The $2$ in $T(x)=2x^{\\frac{1}{2}}$ multiplies the power; it does not cap the output. After four minutes:

$$
T(4)=2\\cdot 4^{\\frac{1}{2}}=2\\cdot 2=4
$$

Already $4>2$, and a positive exponent keeps climbing. There is no finite ceiling, so the statement is False.`,
      `**D.** → True

Cube the distance in the denominator, then divide:

$$
S(2)=\\frac{80}{2^{3}}=\\frac{80}{8}=10
$$

The strength is $10$ millivolts, so the statement is True.`,
      `**E.** → True

A positive exponent keeps $T(x)=2x^{\\frac{1}{2}}$ in the numerator. The square root of a shrinking positive input shrinks as well, so $T(x)\\to 0$ as $x\\to 0^{+}$.

The count approaches $0$, so the statement is True.`,
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

An exponent of $-1$ writes order size in the denominator:

$$
U(q)=\\frac{600}{q}
$$

A larger positive $q$ makes a strictly smaller quotient. Overhead spread is strictly decreasing for $q>0$, so the statement is True.`,
      `**B.** → False

The numerator $600$ and the order size $q$ are both positive for every $q>0$, so $U(q)=\\frac{600}{q}$ stays positive. Falling towards zero is not the same as becoming negative.

The spread is never negative, so the statement is False.`,
      `**C.** → True

The exponent $\\frac{2}{3}$ is positive, so a larger order size raises a larger power, and the coefficient $3$ preserves that order.

Finishing hours are strictly increasing for $q>0$, so the statement is True.`,
      `**D.** → False

Divide the fixed overhead by eight units:

$$
U(8)=\\frac{600}{8}=75
$$

The claimed $80$ is not this value, so the statement is False.`,
      `**E.** → True

Take the cube root of $8$, then square:

$$
8^{\\frac{2}{3}}=\\left(8^{\\frac{1}{3}}\\right)^{2}=2^{2}=4
$$

$$
V(8)=3\\cdot 4=12
$$

The finishing labour is $12$ hours, so the statement is True.`,
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

The audited shift is one equation for the unknown coefficient. Staffing $25$ has square root $5$:

$$
25^{\\frac{1}{2}}=5
$$

$$
5A=40
$$

$$
A=8
$$

The coefficient is $8$, so the statement is True.`,
      `**B.** → True

Divide the audited output by the square root of the audited staffing to recover the coefficient:

$$
A=\\frac{40}{25^{\\frac{1}{2}}}=\\frac{40}{5}=8
$$

Then at $100$ staff:

$$
Q(100)=8\\cdot 100^{\\frac{1}{2}}=8\\cdot 10=80
$$

The output is $80$ crates per hour, so the statement is True.`,
      `**C.** → True

A staffing scale factor is fixed by the exponent alone, because $A$ cancels:

$$
\\frac{Q(4s)}{Q(s)}=\\frac{A(4s)^{\\frac{1}{2}}}{As^{\\frac{1}{2}}}
$$

$$
=4^{\\frac{1}{2}}=2
$$

Quadrupling the staffing doubles the output, so the statement is True.`,
      `**D.** → False

A doubled coefficient appears once above and once below in the ratio, so it cancels:

$$
\\frac{(2A)(4s)^{\\frac{1}{2}}}{(2A)s^{\\frac{1}{2}}}
$$

$$
=4^{\\frac{1}{2}}=2
$$

The ratio stays $2$. Doubling $A$ would double every output, not this scale factor, so the statement is False.`,
      `**E.** → False

Staffing $25$ contributes a square root of $5$, so $A=\\frac{40}{5}=8$. At four staff the square root is $2$:

$$
Q(4)=8\\cdot 2=16
$$

The claimed $20$ is half the audited output, a linear scaling the exponent $\\frac{1}{2}$ does not allow. The output is $16$ crates per hour, so the statement is False.`,
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

Substitute $n=2$ into each index:

$$F(2)=2\\cdot 2^{2}=2\\cdot 4=8$$

$$G(2)=2^{3}=8$$

The claim wants $8$ and $6$. The first figure matches, but $G(2)=8$, not $6$, so the statement is False.`,
      `**B.** → True

The cubic index leads when the difference is positive. Subtract and factor:

$$G(n)-F(n)=n^{3}-2n^{2}$$

$$=n^{2}(n-2)$$

For every $n>0$ the square $n^{2}$ is positive, so the sign of the difference is the sign of $n-2$. Whenever $n>2$ that factor is positive, hence $G(n)>F(n)$.

The cubic index exceeds the quadratic one for every $n>2$, so the statement is True.`,
      `**C.** → True

On the open interval $0<n<2$ the quadratic index is the larger of the two. The factored difference is

$$G(n)-F(n)=n^{2}(n-2)$$

Here $n^{2}>0$ while $n-2<0$, so the product is negative and $F(n)>G(n)$. A single interior check: $F(1)=2$ against $G(1)=1$.

The quadratic index leads throughout $0<n<2$, so the statement is True.`,
      `**D.** → False

Dividing the two indices cancels the common square:

$$\\frac{G(n)}{F(n)}=\\frac{n^{3}}{2n^{2}}$$

$$=\\frac{n}{2}$$

As $n$ grows without bound, so does $\\frac{n}{2}$. A limit of $1$ would mean the indices become comparable, but already at $n=20$

$$\\frac{G(20)}{F(20)}=\\frac{20}{2}=10$$

and the ratio keeps climbing. The ratio tends to infinity, not to $1$, so the statement is False.`,
      `**E.** → False

Substitute $n=3$ into each index:

$$F(3)=2\\cdot 3^{2}=2\\cdot 9=18$$

$$G(3)=3^{3}=27$$

The quadratic figure matches, but the cubic index is $27$, not the claimed $24$. The indices read $18$ and $27$, so the statement is False.`,
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

The exponent $\\frac{1}{2}$ is a square root, and $0^{2}=0$:

$$L(0)=0^{\\frac{1}{2}}=\\sqrt{0}=0$$

The transform returns $0$ at a raw reading of zero, so the statement is True.`,
      `**B.** → False

An even root refuses a negative raw reading. No real number squares to a negative, so there is no real $y$ with $y^{2}=-4$.

$$L(-4)=\\sqrt{-4}$$

is not real. The domain of $L$ is $x\\ge 0$.

There is no real value at $x=-4$, so the statement is False.`,
      `**C.** → True

The exponent $\\frac{1}{3}$ is an odd root, so a negative reading is allowed. Cubing gives the inverse:

$$(-2)^{3}=-8$$

hence

$$M(-8)=(-8)^{\\frac{1}{3}}=-2$$

The cube root of $-8$ is $-2$, so the statement is True.`,
      `**D.** → False

A negative exponent is a reciprocal:

$$N(x)=x^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{x}}$$

At $x=0$ the denominator is $\\sqrt{0}=0$, and division by zero is undefined. The transform needs $x>0$.

The transform has no value at $x=0$, so the statement is False.`,
      `**E.** → False

A negative exponent puts the root in the denominator:

$$N(4)=4^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{4}}=\\frac{1}{2}$$

The claimed $2$ is $\\sqrt{4}$, which is $L(4)$, so the minus sign in the exponent was dropped. The transform returns $\\frac{1}{2}$, not $2$, so the statement is False.`,
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

Rewrite the negative exponent as a root in the denominator, then substitute four cartridges:

$$P(x)=\\frac{12}{\\sqrt{x}}$$

$$P(4)=\\frac{12}{\\sqrt{4}}=\\frac{12}{2}=6$$

The drop is $6$ kilopascals, so the statement is True.`,
      `**B.** → True

The drop is a positive constant over a strictly increasing root:

$$P(x)=\\frac{12}{\\sqrt{x}}$$

On $x>0$ the numerator stays at $12$ while $\\sqrt{x}$ grows with $x$, so the quotient falls at every larger cartridge count.

The drop is strictly decreasing on $x>0$, so the statement is True.`,
      `**C.** → True

Far out on the domain the drop is a fixed numerator over a growing root:

$$P(x)=\\frac{12}{\\sqrt{x}}$$

As $x$ grows, the denominator grows without bound while the numerator stays at $12$, so $P(x)\\to 0$. Setting $\\frac{12}{\\sqrt{x}}=0$ would require $12=0$, which never happens, so no $x>0$ returns a drop of $0$.

The drop approaches $0$ without reaching it, so the statement is True.`,
      `**D.** → False

A tiny positive cartridge count puts a tiny number in the denominator:

$$P(0.01)=\\frac{12}{\\sqrt{0.01}}$$

$$=\\frac{12}{0.1}=120$$

The denominator $\\sqrt{x}$ can be made arbitrarily small as $x\\to 0^{+}$, so $P(x)$ has no finite limit.

The drop grows without bound rather than settling, so the statement is False.`,
      `**E.** → True

Nine cartridges give a whole square root:

$$P(9)=\\frac{12}{\\sqrt{9}}=\\frac{12}{3}=4$$

The drop is $4$ kilopascals, so the statement is True.`,
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

The recorded job $y(3)=45$ is one equation for the unknown coefficient:

$$A\\cdot 3^{2}=45$$

$$9A=45$$

$$A=5$$

The claimed $15$ is $\\frac{45}{3}$, which divides by the radius instead of by its square. The coefficient is $5$, not $15$, so the statement is False.`,
      `**B.** → True

From the recorded job, $9A=45$, so $A=5$ and the rule is $y(r)=5r^{2}$. At radius $6$ metres:

$$y(6)=5\\cdot 6^{2}=5\\cdot 36=180$$

The panel needs $180$ litres, so the statement is True.`,
      `**C.** → True

A fifty percent increase in radius is the width multiplier $k=1.5$. For a square power the coefficient cancels:

$$\\frac{y(1.5r)}{y(r)}=\\frac{A(1.5r)^{2}}{Ar^{2}}$$

$$=1.5^{2}=2.25$$

The primer is multiplied by $2.25$, so the statement is True.`,
      `**D.** → True

The recorded panel gives $A=\\frac{45}{9}=5$. At a radius of one metre the square is $1$, so the requirement equals the coefficient:

$$y(1)=5\\cdot 1^{2}=5$$

A one-metre panel needs $5$ litres, so the statement is True.`,
      `**E.** → False

Halving the radius is the width multiplier $k=0.5$, and the exponent $2$ acts on that whole factor:

$$\\frac{y(0.5r)}{y(r)}=0.5^{2}=0.25$$

The primer is multiplied by $0.25$, not by $0.5$, so the statement is False.`,
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

Square the speed, then apply the coefficient:

$$E(10)=0.5\\cdot 10^{2}=0.5\\cdot 100=50$$

The index at $v=10$ is $50$, so the statement is True.`,
      `**B.** → True

Raising the speed from $10$ to $20$ is the multiplier $k=2$. The coefficient cancels in the ratio:

$$\\frac{E(20)}{E(10)}=\\frac{0.5\\cdot 20^{2}}{0.5\\cdot 10^{2}}$$

$$=\\frac{400}{100}=4$$

The same factor is $2^{2}=4$ from the exponent alone. Doubling the speed multiplies the index by $4$, so the statement is True.`,
      `**C.** → True

At the higher standard speed, square first:

$$E(20)=0.5\\cdot 20^{2}=0.5\\cdot 400=200$$

The index reads $200$, so the statement is True.`,
      `**D.** → True

A square of a nonzero real number is positive, and the coefficient $0.5$ is positive. Their product is therefore positive for every $v>0$. Zero itself is excluded by the domain.

The index is never negative, so the statement is True.`,
      `**E.** → False

A ten percent overspeed is the speed multiplier $k=1.1$, and the exponent acts on the whole multiplier:

$$\\frac{E(1.1v)}{E(v)}=1.1^{2}=1.21$$

The index is multiplied by $1.21$, a twenty-one percent rise rather than ten. At the lower standard speed that is

$$E(11)=0.5\\cdot 11^{2}=0.5\\cdot 121=60.5$$

against $E(10)=50$.

The index rises by twenty-one percent rather than ten, so the statement is False.`,
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
    title: `Recovering a Robot's Loading Law from a Recorded Jump`,
    context: `A warehouse robot's loading rate (units per minute) follows the power law $P(u)=A u^{0.75}$, where $u>0$ is the number of units already staged at the pick face. The commissioning log never records $A$ itself: it only notes that raising the staged count from $16$ to $81$ units lifted the loading rate by exactly $57$ units per minute. A separate service note certifies the drive for loading rates up to $100$ units per minute. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the loading law satisfies $A=3$.`,
      `At $u=16$ the loading rate is $27$ units per minute.`,
      `Doubling the staged count raises the loading rate by less than $70\\%$.`,
      `A staged count of $110$ units keeps the rate inside the certified ceiling.`,
      `The staged count that produces exactly $48$ units per minute is below $40$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The coefficient $A$ is recovered from the recorded lift of $57$ units per minute between the two logged staging levels.

$$
16^{0.75} = (2^{4})^{\\frac{3}{4}} = 2^{3} = 8
$$

$$
81^{0.75} = (3^{4})^{\\frac{3}{4}} = 3^{3} = 27
$$

The log reports a difference of rates, so $A$ multiplies the difference of those shape factors:

$$
A \\cdot 27 - A \\cdot 8 = 57
$$

$$
19A = 57
$$

$$
A = \\frac{57}{19} = 3
$$

The loading law is $P(u)=3u^{0.75}$, so the statement is True.`,
      `**B.** → False

The rate at $u=16$ is the recovered coefficient times $16^{0.75}$, not the shape factor of the other logged level.

The lift of $57$ between staging $16$ and $81$ is $A$ times the gap of the integer shape factors $8$ and $27$:

$$
A(27-8)=57
$$

$$
A=\\frac{57}{19}=3
$$

$$
P(16)=3\\cdot 8=24
$$

The companion rate at the other logged level confirms the jump:

$$
P(81)=3\\cdot 27=81
$$

$$
81-24=57
$$

The figure $27$ is $81^{0.75}$, a shape factor before $A$ is applied. The rate at $u=16$ is $24$ units per minute, not $27$, so the statement is False.`,
      `**C.** → True

Doubling the staged count multiplies the loading rate by $2^{0.75}$, and that factor does not depend on $A$.

$$
\\frac{P(2u)}{P(u)}=\\frac{A(2u)^{0.75}}{Au^{0.75}}=2^{0.75}
$$

$$
2^{0.75}=2^{\\frac{1}{2}}\\cdot 2^{\\frac{1}{4}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.4142
$$

$$
2^{\\frac{1}{4}}\\approx 1.1892
$$

$$
2^{0.75}\\approx 1.4142\\times 1.1892\\approx 1.6818
$$

The relative rise is about $68.18\\%$, which is below $70\\%$, so the statement is True.`,
      `**D.** → False

The certification caps the loading rate at $100$ units per minute, so $u=110$ has to be run through the recovered law before it can be compared with that ceiling.

The logged jump from $16$ to $81$ units of staging raised the rate by $57$:

$$
A(81^{0.75}-16^{0.75})=57
$$

$$
A(27-8)=57
$$

$$
A=3
$$

$$
110^{\\frac{1}{2}}\\approx 10.4881
$$

$$
110^{\\frac{1}{4}}\\approx 3.2385
$$

$$
110^{0.75}\\approx 10.4881\\times 3.2385\\approx 33.97
$$

$$
P(110)\\approx 3\\times 33.97\\approx 101.9
$$

The ceiling itself is crossed a little earlier:

$$
3u^{0.75}=100
$$

$$
u=\\left(\\frac{100}{3}\\right)^{\\frac{4}{3}}\\approx 107.3
$$

Staging $110$ units already sits above that limit, and $101.9>100$, so the statement is False.`,
      `**E.** → False

The staged count that produces a rate of $48$ is the inverse of $P(u)=Au^{0.75}$.

From the recorded lift of $57$ between the shape factors $27$ and $8$,

$$
A=\\frac{57}{27-8}=\\frac{57}{19}=3
$$

$$
3u^{0.75}=48
$$

$$
u^{0.75}=16
$$

$$
u=16^{\\frac{4}{3}}=(2^{4})^{\\frac{4}{3}}=2^{\\frac{16}{3}}
$$

$$
=2^{5}\\cdot 2^{\\frac{1}{3}}=32\\cdot 2^{\\frac{1}{3}}
$$

$$
\\approx 32\\times 1.2599\\approx 40.32
$$

Linear scaling from $P(16)=24$ would have pointed at $u=32$ for a doubled rate, but the exponent $0.75$ requires a larger stretch. The staged count is about $40.32$, which is not below $40$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 11,
    solution_overview: `A warehouse robot's loading rate follows $P(u)=Au^{0.75}$ for staged units $u>0$. Raising staging from $16$ to $81$ units lifted the rate by $57$ units per minute, and the drive is certified up to $100$ units per minute.

**Part 1: Building the model.**

Let $u$ = units staged at the pick face and $P(u)$ = loading rate in units per minute. The exponent $0.75$ is given, so only the coefficient $A$ is unknown, and the log gives one usable observation.

**1. Translate: the shape factors at the two logged levels.** Both staging levels are fourth powers, so they simplify exactly:

$$16^{0.75} = 2^{3} = 8, \\qquad 81^{0.75} = 3^{3} = 27$$

**2. Translate: the recorded lift.** The log reports a difference of rates, not a rate:

$$A(27) - A(8) = 57$$

**Part 2: The model.**

$$P(u) = A u^{0.75} \\tag{1}$$

$$19A = 57 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (2) gives the coefficient directly:

$$A = \\frac{57}{19} = 3 \\qquad \\Rightarrow \\qquad P(u) = 3u^{0.75}$$

**2.** Check both logged levels against the model:

$$P(16) = 3(8) = 24, \\qquad P(81) = 3(27) = 81, \\qquad 81 - 24 = 57$$

**3.** Scale factors need no anchor at all, because the coefficient cancels:

$$\\frac{P(ku)}{P(u)} = k^{0.75}, \\qquad 2^{0.75} \\approx 1.6818$$

**4.** Invert the law to move from a target rate back to staging:

$$u = \\left(\\frac{P}{3}\\right)^{\\frac{4}{3}}$$

$$P = 48 \\;\\Rightarrow\\; u \\approx 40.32, \\qquad P = 100 \\;\\Rightarrow\\; u \\approx 107.3$$

**5.** The certification therefore caps staging near $107$ units; $110$ units would run the drive at roughly $101.9$ units per minute.

**Answer.** $A = 3$ | $P(u) = 3u^{0.75}$ | certified staging limit $\\approx 107.3$ units`,
  },
  {
    id: `math-8-12`,
    case_id: `MATH 8.12`,
    title: `Telescope Resolving Power from a Percentage Rule`,
    context: `A telescope's resolving power follows $R(d)=A d^{r}$, where $d>0$ is the aperture diameter in metres. Neither constant was measured directly. Two facts are on file: widening any aperture by $50\\%$ raises resolving power by $125\\%$, and a bench test on the $5$ m mirror recorded a resolving power of $50$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent of the resolving-power law is $r=2$.`,
      `A $10$ m aperture delivers a resolving power of $200$.`,
      `Reaching a resolving power of $200$ requires an aperture above $12$ m.`,
      `Had a $50\\%$ widening lifted resolving power by only $60\\%$, the exponent would be below $1.2$.`,
      `Under that weaker rule, with the same bench reading at $5$ m, a $10$ m aperture would deliver more than $120$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The exponent is read from the percentage rule alone, because the coefficient cancels in any scale factor.

$$
\\frac{R(1.5d)}{R(d)}=1.5^{r}
$$

A rise of $125\\%$ means the new resolving power is $2.25$ times the old one, not $1.25$ times:

$$
1.5^{r}=2.25
$$

$$
2.25=1.5^{2}
$$

$$
r=2
$$

The exponent is exactly $2$, so the statement is True.`,
      `**B.** → True

A resolving power at $10$ m is a level of the recovered law, so the bench test is needed as well as the exponent.

The $50\\%$ widening rule gives $1.5^{r}=2.25$:

$$
2.25=1.5^{2}
$$

$$
r=2
$$

Then $R(5)=50$ pins the coefficient:

$$
A\\cdot 5^{2}=50
$$

$$
25A=50
$$

$$
A=2
$$

$$
R(10)=2\\cdot 10^{2}=2\\cdot 100=200
$$

The $10$ m aperture delivers a resolving power of $200$, so the statement is True.`,
      `**C.** → False

The aperture that produces resolving power $200$ is the inverse of the recovered law.

The percentage rule gives $1.5^{r}=2.25=1.5^{2}$, so $r=2$. The bench test $R(5)=50$ then gives

$$
A\\cdot 5^{2}=50
$$

$$
A=\\frac{50}{25}=2
$$

$$
2d^{2}=200
$$

$$
d^{2}=100
$$

$$
d=10
$$

That diameter is $2$ m below the claimed threshold. Checking $12$ m:

$$
R(12)=2\\cdot 12^{2}=2\\cdot 144=288>200
$$

The target is already met at $10$ m, so the statement is False.`,
      `**D.** → True

Under the weaker rule a $50\\%$ widening multiplies resolving power by $1.6$ rather than $2.25$, and $1.6$ is not a whole power of $1.5$.

$$
1.5^{r'}=1.6
$$

$$
r'\\ln 1.5=\\ln 1.6
$$

$$
r'=\\frac{\\ln 1.6}{\\ln 1.5}\\approx 1.1592
$$

A check against the claimed threshold:

$$
1.5^{1.2}\\approx 1.6267>1.6
$$

Because $1.5^{1.2}$ already exceeds $1.6$, the counterfactual exponent lies below $1.2$, so the statement is True.`,
      `**E.** → False

Under the weaker $60\\%$ rule the same $5$ m bench reading scales to $10$ m by the factor $2^{r'}$, not by the original $2^{2}=4$.

$$
1.5^{r'}=1.6
$$

$$
r'=\\frac{\\ln 1.6}{\\ln 1.5}\\approx 1.1592
$$

$$
2^{1.1592}=e^{1.1592\\cdot \\ln 2}
$$

$$
\\ln 2\\approx 0.6931
$$

$$
1.1592\\times 0.6931\\approx 0.8034
$$

$$
e^{0.8034}\\approx 2.2331
$$

$$
R(10)\\approx 50\\times 2.2331\\approx 111.7
$$

$$
111.7<120
$$

The original squared rule would have given $200$. The weaker exponent leaves the $10$ m aperture under $120$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `Resolving power follows $R(d)=Ad^{r}$ for aperture $d>0$. Widening any aperture by $50\\%$ raises resolving power by $125\\%$, and the $5$ m bench test recorded $R=50$.

**Part 1: Building the model.**

Let $d$ = aperture diameter in metres and $R(d)$ = resolving power. Two unknowns, $A$ and $r$, need two independent facts; the percentage rule carries the exponent and the bench test carries the level.

**1. Translate: the percentage rule.** A $50\\%$ wider aperture means $1.5d$, and a $125\\%$ higher output means $2.25$ times as much:

$$\\frac{R(1.5d)}{R(d)} = 1.5^{r} = 2.25$$

**2. Translate: the bench test.** One measured point pins the coefficient once $r$ is known:

$$A \\cdot 5^{r} = 50$$

**Part 2: The model.**

$$1.5^{r} = 2.25 \\tag{1}$$

$$25A = 50 \\tag{2}$$

**Part 3: Solve.**

**1.** Because $2.25 = 1.5^{2}$, equation (1) resolves without logarithms:

$$r = 2$$

**2.** Equation (2) then gives the coefficient and the full law:

$$A = \\frac{50}{25} = 2 \\qquad \\Rightarrow \\qquad R(d) = 2d^{2}$$

**3.** Levels and inversions follow directly:

$$R(10) = 200, \\qquad R(12) = 288, \\qquad R = 200 \\;\\Rightarrow\\; d = 10$$

**4.** The counterfactual rule replaces the multiplier $2.25$ by $1.6$, which needs logarithms:

$$r' = \\frac{\\ln 1.6}{\\ln 1.5} \\approx 1.1592$$

**5.** Holding the bench reading fixed, doubling the aperture under the weaker rule gives:

$$R(10) \\approx 50 \\times 2^{1.1592} \\approx 111.7$$

**Answer.** $r = 2$ | $A = 2$ | $R(d) = 2d^{2}$ | counterfactual exponent $r' \\approx 1.159$`,
  },
  {
    id: `math-8-13`,
    case_id: `MATH 8.13`,
    title: `Two Turbines with Different Wind Exponents`,
    context: `Two turbines report output as power functions of wind speed $w>0$ in metres per second. For turbine A, doubling the wind speed multiplies output by $2\\sqrt{2}$, and at $w=4$ the turbine delivers $32$ kW. Turbine B's output is proportional to the square of wind speed, and at $w=10$ it delivers $100$ kW. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $w=4$ the two turbines together deliver more than $45$ kW.`,
      `Turbine A's exponent is larger than turbine B's.`,
      `The two turbines deliver equal output at $w=16$.`,
      `At every wind speed above that crossover, turbine B out-produces turbine A.`,
      `Halving turbine A's coefficient would move the crossover below $5$ m/s.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The combined output at $w=4$ needs both recovered laws, because turbine B's anchor sits at $w=10$, not at the speed being asked about.

Turbine A's doubling factor fixes the exponent:

$$
2^{r_A}=2\\sqrt{2}=2^{1.5}
$$

$$
r_A=1.5
$$

Its $32$ kW reading at $w=4$ then fixes the coefficient:

$$
c\\cdot 4^{1.5}=32
$$

$$
4^{1.5}=(2^{2})^{\\frac{3}{2}}=2^{3}=8
$$

$$
8c=32
$$

$$
c=4
$$

Turbine B is proportional to $w^{2}$ and delivers $100$ kW at $w=10$:

$$
k\\cdot 10^{2}=100
$$

$$
k=1
$$

So $P_A(w)=4w^{1.5}$ and $P_B(w)=w^{2}$. At $w=4$:

$$
P_A(4)=4\\cdot 8=32
$$

$$
P_B(4)=4^{2}=16
$$

$$
32+16=48>45
$$

The pair delivers $48$ kW, so the statement is True.`,
      `**B.** → False

Exponents are read from how output scales with wind speed, not from which turbine looks stronger at one recorded point.

Turbine A's doubling rule is

$$
2^{r_A}=2\\sqrt{2}=2^{1.5}
$$

$$
r_A=1.5
$$

Turbine B is stated to be proportional to the square of wind speed, so $r_B=2$.

$$
1.5<2
$$

Turbine A carries the smaller exponent, so the statement is False.`,
      `**C.** → True

Equal output is the wind speed at which the two recovered laws agree.

A's doubling factor $2\\sqrt{2}$ is $2^{1.5}$, so the exponent is $1.5$. The $32$ kW point at $w=4$ then gives

$$
c\\cdot 4^{1.5}=32
$$

$$
4^{1.5}=8
$$

$$
c=\\frac{32}{8}=4
$$

B's $100$ kW point at $w=10$ with a square law gives $k=\\frac{100}{100}=1$, so $P_B(w)=w^{2}$. Setting the laws equal:

$$
4w^{1.5}=w^{2}
$$

$$
4=w^{0.5}
$$

$$
w=16
$$

The common level is

$$
P_A(16)=4\\cdot 16^{1.5}=4\\cdot 64=256
$$

$$
P_B(16)=16^{2}=256
$$

The outputs coincide at $w=16$, so the statement is True.`,
      `**D.** → True

Which turbine leads on a whole interval is settled by the ratio of the two laws, not by one extra wind speed.

A's exponent is $1.5$ from the doubling factor $2\\sqrt{2}$, and the $32$ kW point at $w=4$ pins the coefficient:

$$
c=\\frac{32}{4^{1.5}}=\\frac{32}{8}=4
$$

B's square law with $P_B(10)=100$ is $P_B(w)=w^{2}$. The ratio is

$$
\\frac{P_B(w)}{P_A(w)}=\\frac{w^{2}}{4w^{1.5}}=\\frac{w^{0.5}}{4}
$$

$$
\\frac{w^{0.5}}{4}>1
$$

$$
w^{0.5}>4
$$

$$
w>16
$$

A check at $w=25$:

$$
P_A(25)=4\\cdot 25^{1.5}=4\\cdot 125=500
$$

$$
P_B(25)=625
$$

Turbine B leads at every speed above $16$ metres per second, so the statement is True.`,
      `**E.** → True

Halving turbine A's coefficient leaves both exponents unchanged and moves the speed where the laws meet.

The doubling rule still gives exponent $1.5$, and the $32$ kW point still gives the original coefficient:

$$
c=\\frac{32}{4^{1.5}}=\\frac{32}{8}=4
$$

B remains $P_B(w)=w^{2}$. With coefficient $2$ in place of $4$:

$$
2w^{1.5}=w^{2}
$$

$$
w^{0.5}=2
$$

$$
w=4
$$

The crossover is the square of A's coefficient, so halving $c$ from $4$ to $2$ drops the switch from $16$ metres per second to $4$, which is already below $5$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Turbine A doubles-up by a factor $2\\sqrt{2}$ and delivers $32$ kW at $w=4$. Turbine B is proportional to $w^{2}$ and delivers $100$ kW at $w=10$.

**Part 1: Building the model.**

Let $w$ = wind speed in m/s, $P_A(w)=cw^{r_A}$ and $P_B(w)=kw^{2}$ = outputs in kW. Each turbine supplies one scaling fact and one measured point, which is exactly enough to pin both constants.

**1. Translate: turbine A's doubling rule.** The factor $2\\sqrt{2}$ is a power of $2$, so the exponent falls out:

$$2^{r_A} = 2\\sqrt{2} = 2^{1.5} \\quad \\Rightarrow \\quad r_A = 1.5$$

**2. Translate: the two anchors.** Each measured point fixes one coefficient:

$$c \\cdot 4^{1.5} = 32, \\qquad k \\cdot 10^{2} = 100$$

**Part 2: The model.**

$$P_A(w) = 4w^{1.5} \\tag{1}$$

$$P_B(w) = w^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** Evaluate both laws at the low-wind point:

$$P_A(4) = 32, \\qquad P_B(4) = 16, \\qquad \\text{total } 48 \\text{ kW}$$

**2.** Compare responsiveness through the exponents rather than the levels:

$$r_A = 1.5 < 2 = r_B$$

**3.** Locate the crossover by cancelling the shared power:

$$4w^{1.5} = w^{2} \\;\\Rightarrow\\; w^{0.5} = 4 \\;\\Rightarrow\\; w = 16, \\qquad P_A(16) = P_B(16) = 256$$

**4.** Decide the ordering on each side of the crossover with the ratio:

$$\\frac{P_B(w)}{P_A(w)} = \\frac{w^{0.5}}{4}$$

The ratio is below $1$ for $w<16$ and above $1$ for $w>16$, so A leads before the crossover and B leads after it.

**5.** The general crossover rule shows how the coefficient controls the switch point:

$$cw^{1.5} = w^{2} \\;\\Rightarrow\\; w = c^{2}$$

Halving $c$ from $4$ to $2$ therefore drops the crossover from $16$ m/s to $4$ m/s.

**Answer.** $P_A(w) = 4w^{1.5}$ | $P_B(w) = w^{2}$ | crossover $w = 16$ m/s at $256$ kW`,
  },
  {
    id: `math-8-14`,
    case_id: `MATH 8.14`,
    title: `Assembly Time, Derived Throughput, and a Manual Rival`,
    context: `Assembling $N$ units on a mechanized line takes $T(N)=A N^{r}$ minutes. Quadrupling the batch multiplies assembly time by $16$, and a batch of $5$ units takes $100$ minutes. Management tracks average throughput $R=\\frac{N}{T}$ in units per minute, expressed as a function of the elapsed time $T$. A manual rival sustains a constant $0.05$ units per minute whatever the batch size. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent of the assembly-time law is $r=2$.`,
      `Average throughput as a function of elapsed time is $R(T)=0.5\\,T^{-0.5}$.`,
      `Mechanized throughput matches the rival's rate at $T=100$ minutes.`,
      `Beyond that elapsed time the mechanized line keeps a higher average throughput than the rival.`,
      `Against a rival sustaining $0.2$ units per minute, the match would occur before $10$ minutes.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The exponent is carried by the quadrupling rule, because the coefficient cancels when two assembly times are divided.

$$
\\frac{T(4N)}{T(N)}=4^{r}
$$

$$
4^{r}=16=4^{2}
$$

$$
r=2
$$

The $100$-minute batch of $5$ units is not needed for the exponent. Assembly time grows with the square of the batch, so the statement is True.`,
      `**B.** → True

Average throughput as a function of elapsed time needs the batch size written through $T$, which starts from the recovered time law.

Quadrupling the batch multiplies time by $16$, so $4^{r}=16$ and $r=2$. The $5$-unit batch then pins the coefficient:

$$
A\\cdot 5^{2}=100
$$

$$
25A=100
$$

$$
A=4
$$

$$
T=4N^{2}
$$

$$
N^{2}=\\frac{T}{4}
$$

$$
N=\\frac{T^{0.5}}{2}=0.5\\,T^{0.5}
$$

$$
R(T)=\\frac{N}{T}=\\frac{0.5\\,T^{0.5}}{T}=0.5\\,T^{-0.5}
$$

At the recorded batch this derived law returns

$$
R(100)=0.5\\cdot 100^{-0.5}=\\frac{0.5}{10}=0.05=\\frac{5}{100}
$$

The derived law matches the claim, so the statement is True.`,
      `**C.** → True

Matching the rival means setting derived throughput equal to $0.05$ units per minute.

From $4^{r}=16$ the exponent is $2$, and $T(5)=100$ gives $A=\\frac{100}{25}=4$, so $T=4N^{2}$. Invert and divide by elapsed time:

$$
N=0.5\\,T^{0.5}
$$

$$
R(T)=\\frac{0.5\\,T^{0.5}}{T}=0.5\\,T^{-0.5}
$$

$$
0.5\\,T^{-0.5}=0.05
$$

$$
T^{-0.5}=0.1
$$

$$
T^{0.5}=10
$$

$$
T=100
$$

The two rates meet at $100$ minutes, so the statement is True.`,
      `**D.** → False

Past the match with the rival, the lead is decided by whether derived throughput rises or falls with elapsed time.

The time law is $T=4N^{2}$, from $r=2$ and $A=\\frac{100}{25}=4$. Average throughput is then

$$
N=\\frac{T^{0.5}}{2}
$$

$$
R(T)=\\frac{N}{T}=0.5\\,T^{-0.5}
$$

The exponent $-0.5$ is negative, so $R$ decreases as $T$ grows. At $T=400$:

$$
R(400)=0.5\\cdot 400^{-0.5}=\\frac{0.5}{20}=0.025
$$

$$
0.025<0.05
$$

The mechanized line averages half the rival's pace at $400$ minutes, so the statement is False.`,
      `**E.** → True

A faster rival raises the target rate and shortens the match time.

With $R(T)=0.5\\,T^{-0.5}$, from $T=4N^{2}$ with $r=2$ and $A=4$, the elapsed time at a target rate is

$$
T=\\left(\\frac{0.5}{R}\\right)^{2}
$$

For $R=0.2$:

$$
T=\\left(\\frac{0.5}{0.2}\\right)^{2}
$$

$$
=2.5^{2}=6.25
$$

$6.25$ minutes is before the $10$-minute mark, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 14,
    solution_overview: `Assembly time follows $T(N)=AN^{r}$. Quadrupling the batch multiplies time by $16$, and $T(5)=100$ minutes. Average throughput $R=\\frac{N}{T}$ is tracked against elapsed time, and a manual rival holds $0.05$ units per minute.

**Part 1: Building the model.**

Let $N$ = batch size in units, $T$ = assembly time in minutes, $R$ = average throughput in units per minute. The scaling fact carries the exponent, the anchor carries the coefficient, and throughput is a derived quantity built from both.

**1. Translate: the quadrupling rule.** Scale factors are independent of $A$:

$$\\frac{T(4N)}{T(N)} = 4^{r} = 16$$

**2. Translate: the anchor batch.** One measured pair fixes the coefficient:

$$A \\cdot 5^{r} = 100$$

**Part 2: The model.**

$$4^{r} = 16 \\tag{1}$$

$$25A = 100 \\tag{2}$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the time law:

$$r = 2, \\qquad A = 4, \\qquad T(N) = 4N^{2}$$

**2.** Invert the time law so batch size is expressed through elapsed time:

$$N = \\frac{T^{0.5}}{2}$$

**3.** Divide by elapsed time to obtain average throughput as a power function with a negative exponent:

$$R(T) = \\frac{N}{T} = 0.5\\,T^{-0.5}$$

**4.** Invert once more to turn any target rate into a crossover time:

$$T = \\left(\\frac{0.5}{R}\\right)^{2}$$

$$R = 0.05 \\;\\Rightarrow\\; T = 100, \\qquad R = 0.2 \\;\\Rightarrow\\; T = 6.25$$

**5.** The negative exponent fixes the ordering: $R$ decreases in $T$, so the mechanized line beats a constant-rate rival only *before* the crossover time and falls behind after it. At $T=400$ the average is $0.025$ units per minute, half the slow rival's pace.

**Answer.** $T(N) = 4N^{2}$ | $R(T) = 0.5\\,T^{-0.5}$ | crossovers at $T = 100$ min and $T = 6.25$ min`,
  },
  {
    id: `math-8-15`,
    case_id: `MATH 8.15`,
    title: `Ore-to-Alloy Chain Against a Linear Competitor`,
    context: `Ore of purity $u>0$ yields metal according to $M(u)=c\\,u^{1.5}$. An audit records that lifting purity from $9$ to $16$ raised metal output by $296$ units. Metal is then converted into alloy strength by $S(M)=\\frac{M^{\\frac{2}{3}}}{2}$. A competing supplier quotes strength directly as $S_{\\mathrm{comp}}(u)=1.8u+5$, which is linear rather than a power function. Purity is only meaningful up to $u=50$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the metal-yield law is $c=8$.`,
      `Strength as a function of purity is a power function with exponent exactly $1$.`,
      `At purity $u=10$ the chain delivers more strength than the competitor.`,
      `The two suppliers deliver equal strength at a purity below $30$.`,
      `From that purity up to $u=50$ the chain stays strictly ahead of the competitor.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The coefficient of the metal-yield law is recovered from the audited gain of $296$ units between purities $9$ and $16$, not from a single output.

$$
9^{1.5}=(3^{2})^{\\frac{3}{2}}=3^{3}=27
$$

$$
16^{1.5}=(4^{2})^{\\frac{3}{2}}=4^{3}=64
$$

$$
c\\cdot 64-c\\cdot 27=296
$$

$$
37c=296
$$

$$
c=\\frac{296}{37}=8
$$

The yield law is $M(u)=8u^{1.5}$, so the statement is True.`,
      `**B.** → True

Strength as a function of purity is the composition of the two power stages, so the metal coefficient has to be recovered before the exponents can be multiplied.

The audited jump of $296$ is $c$ times the gap of the exact shape factors $16^{1.5}=64$ and $9^{1.5}=27$:

$$
c=\\frac{296}{64-27}=\\frac{296}{37}=8
$$

$$
S(u)=\\frac{\\bigl(8u^{1.5}\\bigr)^{\\frac{2}{3}}}{2}
$$

$$
=\\frac{8^{\\frac{2}{3}}\\,u^{1.5\\times\\frac{2}{3}}}{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
1.5\\times\\frac{2}{3}=1
$$

$$
S(u)=\\frac{4u}{2}=2u
$$

A power function with exponent $1$ is linear through the origin. The composed exponent is exactly $1$, so the statement is True.`,
      `**C.** → False

At purity $10$ the comparison is between the composed chain and the competitor's line.

The audited gain $296$ between purities $9$ and $16$ gives $c=\\frac{296}{37}=8$. Substituting $M(u)=8u^{1.5}$ into the strength stage collapses the exponents:

$$
1.5\\times\\frac{2}{3}=1
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
S(u)=\\frac{4u}{2}=2u
$$

$$
S(10)=2\\cdot 10=20
$$

$$
S_{\\mathrm{comp}}(10)=1.8\\cdot 10+5=18+5=23
$$

$$
20<23
$$

The chain trails by three units at $u=10$, so the statement is False.`,
      `**D.** → True

Equal strength is a single linear equation between the composed chain and the quoted line.

Metal coefficient $c=\\frac{296}{37}=8$ makes the two stages collapse to $S(u)=2u$, because $8^{\\frac{2}{3}}=4$ and $1.5\\times\\frac{2}{3}=1$. Against $S_{\\mathrm{comp}}(u)=1.8u+5$:

$$
2u=1.8u+5
$$

$$
0.2u=5
$$

$$
u=25
$$

Two lines with different slopes meet exactly once, so this is the only crossover. It sits below $30$ and inside the domain cap $u=50$:

$$
S(25)=50
$$

$$
S_{\\mathrm{comp}}(25)=1.8\\cdot 25+5=50
$$

The offers meet at purity $25$, so the statement is True.`,
      `**E.** → True

The lead on a whole interval is the sign of the gap between the chain and the competitor.

With $S(u)=2u$ from the composed stages ($c=8$ from the audited gain of $296$),

$$
S(u)-S_{\\mathrm{comp}}(u)=2u-(1.8u+5)=0.2u-5
$$

$$
0.2u-5>0
$$

$$
u>25
$$

At the cap $u=50$:

$$
S(50)=100
$$

$$
S_{\\mathrm{comp}}(50)=1.8\\cdot 50+5=90+5=95
$$

The chain leads from purity $25$ up to $50$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 15,
    solution_overview: `Metal yield is $M(u)=cu^{1.5}$, with an audited gain of $296$ units when purity rises from $9$ to $16$. Alloy strength is $S(M)=\\frac{M^{\\frac{2}{3}}}{2}$, the competitor quotes $S_{\\mathrm{comp}}(u)=1.8u+5$, and purity is capped at $u=50$.

**Part 1: Building the model.**

Let $u$ = ore purity, $M(u)$ = metal output, $S$ = alloy strength. The chain has two stages, so the coefficient of the first stage must be recovered before the two stages can be composed and compared with the competitor's line.

**1. Translate: the audited gain.** The audit reports a difference between two outputs:

$$c\\left(16^{1.5}\\right) - c\\left(9^{1.5}\\right) = 296$$

**2. Translate: the composition.** Strength is the second stage applied to the first:

$$S(u) = \\frac{\\left(c\\,u^{1.5}\\right)^{\\frac{2}{3}}}{2}$$

**Part 2: The model.**

$$37c = 296 \\tag{1}$$

$$S(u) = \\frac{\\left(c\\,u^{1.5}\\right)^{\\frac{2}{3}}}{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The exact shape factors $9^{1.5}=27$ and $16^{1.5}=64$ turn (1) into a one-step solve:

$$c = \\frac{296}{37} = 8 \\qquad \\Rightarrow \\qquad M(u) = 8u^{1.5}$$

**2.** Composing multiplies the exponents and collapses the constants:

$$8^{\\frac{2}{3}} = 4, \\qquad 1.5 \\times \\frac{2}{3} = 1 \\qquad \\Rightarrow \\qquad S(u) = 2u$$

**3.** Compare the two offers at a low purity, where the competitor's intercept still rules:

$$S(10) = 20 < 23 = S_{\\mathrm{comp}}(10)$$

**4.** Locate the crossover:

$$2u = 1.8u + 5 \\;\\Rightarrow\\; 0.2u = 5 \\;\\Rightarrow\\; u = 25, \\qquad S(25) = S_{\\mathrm{comp}}(25) = 50$$

**5.** Settle the ordering on the whole range with the gap function:

$$S(u) - S_{\\mathrm{comp}}(u) = 0.2u - 5$$

The gap is negative below $u=25$ and positive above it, reaching $5$ units at the cap $u=50$, so the competitor leads on $(0,25)$ and the chain leads on $(25,50]$.

**Answer.** $c = 8$ | $M(u) = 8u^{1.5}$ | $S(u) = 2u$ | crossover at $u = 25$ with strength $50$`,
  },
  {
    id: `math-8-16`,
    case_id: `MATH 8.16`,
    title: `Server Peak Load Between a Doubling Rule and an Alarm`,
    context: `A monitoring team models a server's peak load as $L(x)=A x^{r}$, where $x>0$ is the number of simultaneous jobs. Stress tests show that doubling the job count multiplies peak load by $4$, and a run with $30$ simultaneous jobs recorded a peak load of $180$. The hardware alarm trips at a peak load of $500$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Tripling the job count multiplies peak load by $6$.`,
      `The alarm trips at a job count above $55$.`,
      `Increasing the job count from $30$ to $42$ raises peak load by less than $90\\%$.`,
      `Increasing the job count from $30$ to $33$ raises peak load by exactly $21\\%$.`,
      `Halving the job count halves peak load.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

Tripling the job count multiplies peak load by $3^{r}$, and the doubling test is what supplies $r$.

$$
2^{r} = 4
$$

$$
r = 2
$$

$$
3^{2} = 9
$$

The figure $6$ would fit a linear response, or a half-step beyond the doubling factor $4$. Tripling multiplies peak load by $9$, so the statement is False.`,
      `**B.** → False

The alarm trips when peak load hits $500$, so the matching job count comes from solving $L(x)=500$ after both constants are known.

The doubling test supplies the exponent, because the coefficient cancels in a ratio of loads:

$$
\\frac{L(2x)}{L(x)} = 2^{r}
$$

$$
2^{r} = 4
$$

$$
r = 2
$$

The recorded run of $30$ jobs at load $180$ then supplies the coefficient:

$$
A \\cdot 30^{2} = 180
$$

$$
900A = 180
$$

$$
A = 0.2
$$

The alarm condition is

$$
0.2 x^{2} = 500
$$

$$
x^{2} = 2500
$$

$$
x = 50
$$

because $x>0$. The claim places the trip above $55$ jobs, but $50$ is already below that figure:

$$
L(55) = 0.2 \\cdot 55^{2} = 0.2 \\cdot 3025 = 605 > 500
$$

The alarm trips at $50$ jobs, so the statement is False.`,
      `**C.** → False

Raising the job count from $30$ to $42$ multiplies load by that job ratio raised to the exponent, and the doubling test gives the exponent.

$$
2^{r} = 4
$$

$$
r = 2
$$

$$
\\frac{42}{30} = \\frac{7}{5}
$$

$$
\\frac{L(42)}{L(30)} = \\left(\\frac{7}{5}\\right)^{2} = \\frac{49}{25} = 1.96
$$

The relative increase is that scale factor minus one:

$$
1.96 - 1 = 0.96 = 96\\%
$$

A rise of $96\\%$ is not less than $90\\%$, so the statement is False.`,
      `**D.** → True

A move from $30$ to $33$ jobs is a $10\\%$ rise in the input, and the load ratio is that factor raised to the exponent from the doubling test.

$$
2^{r} = 4
$$

$$
r = 2
$$

$$
\\frac{33}{30} = \\frac{11}{10}
$$

$$
\\frac{L(33)}{L(30)} = \\left(\\frac{11}{10}\\right)^{2} = \\frac{121}{100} = 1.21
$$

$$
1.21 - 1 = 0.21 = 21\\%
$$

The rise is exactly $21\\%$, so the statement is True.`,
      `**E.** → False

Halving the job count would halve peak load only if the exponent were $1$. The doubling test gives a different exponent.

$$
2^{r} = 4
$$

$$
r = 2
$$

$$
\\frac{L\\!\\left(\\frac{x}{2}\\right)}{L(x)} = \\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}
$$

Load falls to a quarter, not to a half. On the recorded run that means $45$ rather than $90$:

$$
L(15) = \\frac{1}{4} \\cdot L(30) = \\frac{1}{4} \\cdot 180 = 45
$$

Halving the job count quarters peak load, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 16,
    solution_overview: `Peak load follows $L(x)=Ax^{r}$ for $x$ simultaneous jobs. Doubling the job count multiplies load by $4$, a $30$-job run peaked at $180$, and the alarm trips at $500$.

**Part 1: Building the model.**

Let $x$ = simultaneous jobs and $L(x)$ = peak load. Two unknowns need two facts: the stress test carries the exponent because scale factors are free of $A$, and the recorded run carries the level.

**1. Translate: the doubling test.** The observed factor is a power of the multiplier:

$$\\frac{L(2x)}{L(x)} = 2^{r} = 4$$

**2. Translate: the recorded run.** One measured point fixes the coefficient:

$$A(30)^{2} = 180$$

**Part 2: The model.**

$$2^{r} = 4 \\tag{1}$$

$$900A = 180 \\tag{2}$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the law:

$$r = 2, \\qquad A = 0.2, \\qquad L(x) = 0.2x^{2}$$

**2.** Scale factors follow from the exponent alone:

$$3^{2} = 9, \\qquad \\left(\\tfrac{1}{2}\\right)^{2} = \\tfrac{1}{4}$$

**3.** Invert the law at the alarm level:

$$0.2x^{2} = 500 \\;\\Rightarrow\\; x^{2} = 2500 \\;\\Rightarrow\\; x = 50$$

**4.** Place the recorded run against the alarm. The recorded load is a little over a third of the tripping level:

$$\\frac{180}{500} = 36\\%$$

In job counts the same run sits much closer to the limit, at three fifths of the tripping volume:

$$\\frac{30}{50} = 60\\%$$

The gap between those two percentages is the squaring at work: a run already past halfway in job count is still well below halfway in load.

**5.** The elasticity is the exponent, constant at every job count:

$$\\text{El}_{x}L = 2$$

**Answer.** $r = 2$ | $A = 0.2$ | $L(x) = 0.2x^{2}$ | alarm at $x = 50$ jobs`,
  },
  {
    id: `math-8-17`,
    case_id: `MATH 8.17`,
    title: `Survey Reach Against a Fieldwork Budget Cap`,
    context: `Usable survey responses follow $Q(x)=A x^{0.5}$, where $x>0$ measures outreach intensity. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The fieldwork budget caps outreach intensity at $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The response law is $Q(x)=12\\sqrt{x}$.`,
      `The budget cap allows at most $240$ usable responses.`,
      `A target of $180$ usable responses requires intensity $225$, so it is affordable.`,
      `Multiplying intensity by $2.25$ multiplies usable responses by $1.5$.`,
      `Raising intensity from $64$ to $81$ raises usable responses by $12.5\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The log records an increase of $60$ responses between intensities $25$ and $100$, not a level, so the coefficient comes out of a difference of square roots.

$$
25^{0.5} = 5
$$

$$
100^{0.5} = 10
$$

$$
Q(100) - Q(25) = A \\cdot 10 - A \\cdot 5 = 5A
$$

$$
5A = 60
$$

$$
A = 12
$$

$$
Q(x) = 12\\sqrt{x}
$$

The recovered law is $Q(x)=12\\sqrt{x}$, so the statement is True.`,
      `**B.** → True

The budget caps intensity at $400$, and the exponent $0.5$ is positive, so usable responses increase with intensity and the most affordable responses sit at that cap. Evaluating the cap needs the coefficient from the logged increase of $60$.

$$
A\\left(\\sqrt{100} - \\sqrt{25}\\right) = 60
$$

$$
A(10 - 5) = 60
$$

$$
5A = 60
$$

$$
A = 12
$$

$$
Q(400) = 12\\sqrt{400} = 12 \\cdot 20 = 240
$$

No intensity inside the cap can beat $240$ usable responses, so the statement is True.`,
      `**C.** → True

A target of $180$ usable responses inverts $Q(x)=A\\sqrt{x}$, and affordability then compares that intensity with the cap of $400$. The coefficient is the one that turns the rise from intensity $25$ to $100$ into $60$ extra responses.

$$
\\sqrt{25} = 5, \\qquad \\sqrt{100} = 10
$$

$$
A(10 - 5) = 60
$$

$$
A = 12
$$

$$
12\\sqrt{x} = 180
$$

$$
\\sqrt{x} = 15
$$

$$
x = 15^{2} = 225
$$

The intensity $225$ sits inside the cap:

$$
225 \\le 400
$$

The target requires intensity $225$ and that intensity is affordable, so the statement is True.`,
      `**D.** → True

Multiplying intensity by $2.25$ multiplies usable responses by $2.25$ to the power $0.5$, and the coefficient cancels in that ratio.

$$
\\frac{Q(2.25x)}{Q(x)} = (2.25)^{0.5}
$$

$$
2.25 = \\frac{9}{4}
$$

$$
\\sqrt{\\frac{9}{4}} = \\frac{3}{2} = 1.5
$$

A $2.25$-fold intensity change produces a $1.5$-fold response change, so the statement is True.`,
      `**E.** → True

The percentage rise from intensity $64$ to $81$ is the output ratio minus one, and that ratio is the square root of the input ratio.

$$
\\frac{Q(81)}{Q(64)} = \\left(\\frac{81}{64}\\right)^{0.5} = \\frac{9}{8}
$$

$$
\\frac{9}{8} - 1 = \\frac{1}{8} = 12.5\\%
$$

The response increase is exactly $12.5\\%$, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 17,
    solution_overview: `Responses follow $Q(x)=Ax^{0.5}$, calibrated by a $60$-response increase from intensity $25$ to $100$, with $x\\le400$.

**Part 1:** Translate the difference rather than treating it as a level:

$$A(\\sqrt{100}-\\sqrt{25})=60$$

**Part 2:** Recover the model and its inverse:

$$A=12, \\qquad Q(x)=12\\sqrt{x}, \\qquad x=\\left(\\frac{Q}{12}\\right)^2$$

**Part 3:** Apply the cap, scale factors, and finite changes:

$$Q(400)=240, \\quad Q=180\\Rightarrow x=225, \\quad (2.25)^{0.5}=1.5, \\quad \\frac{108-96}{96}=12.5\\%$$

**Answer.** $A=12$ | ceiling $240$ responses | $180$ responses require intensity $225$`,
  },
  {
    id: `math-8-18`,
    case_id: `MATH 8.18`,
    title: `Quadratic and Linear Inspection Costs That Meet Once`,
    context: `Two inspection procedures are costed for a batch of $n>0$ documents. The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. Records show that on a batch of $20$ documents the two procedures cost the same, $400$ each. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The automated procedure is cheaper than the manual one at every batch below $20$ documents.`,
      `At $n=25$ the two procedures differ by less than $100$.`,
      `For $n>0$ the two procedures cost the same only at $n=20$.`,
      `Doubling the batch doubles the gap between the two costs.`,
      `The automated procedure's cost per document is constant.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

A claim about every batch below $20$ documents is an inequality on the two calibrated costs, not a single spot check. Both coefficients come from the shared cost of $400$ at $n=20$.

$$
a \\cdot 20^{2} = 400
$$

$$
400a = 400
$$

$$
a = 1
$$

$$
b \\cdot 20 = 400
$$

$$
b = 20
$$

Automated is cheaper when $n^{2} < 20n$. Because $n>0$, dividing by $n$ leaves

$$
n < 20
$$

which is exactly the interval in the claim. One interior point agrees:

$$
C(10) = 10^{2} = 100 < 200 = 20 \\cdot 10 = D(10)
$$

The automated procedure is cheaper at every batch below $20$ documents, so the statement is True.`,
      `**B.** → False

The gap at $n=25$ is the difference of the two costs after each coefficient is read from the shared total of $400$ at $n=20$.

$$
a \\cdot 20^{2} = 400
$$

$$
a = 1
$$

$$
b \\cdot 20 = 400
$$

$$
b = 20
$$

$$
C(25) = 25^{2} = 625
$$

$$
D(25) = 20 \\cdot 25 = 500
$$

$$
625 - 500 = 125
$$

The difference $125$ is not less than $100$, so the statement is False.`,
      `**C.** → True

Equality of the two procedures on $n>0$ is a quadratic, and the shared observation at $n=20$ fixes both coefficients before that quadratic is solved.

$$
a \\cdot 20^{2} = 400
$$

$$
a = 1
$$

$$
b \\cdot 20 = 400
$$

$$
b = 20
$$

$$
n^{2} = 20n
$$

$$
n(n - 20) = 0
$$

The roots are $n=0$ and $n=20$. The domain $n>0$ drops the origin, so only $n=20$ remains. The two procedures cost the same only at $n=20$, so the statement is True.`,
      `**D.** → False

Doubling the batch would double the gap only if the gap itself were linear. Each procedure costs $400$ at $n=20$, which fixes the coefficients, and the gap is their difference.

$$
a \\cdot 20^{2} = 400
$$

$$
a = 1
$$

$$
b \\cdot 20 = 400
$$

$$
b = 20
$$

$$
C(n) - D(n) = n^{2} - 20n = n(n - 20)
$$

$$
25(25 - 20) = 125
$$

$$
50(50 - 20) = 1500
$$

$$
\\frac{1500}{125} = 12
$$

Doubling the batch from $25$ to $50$ multiplies the gap by $12$, not by $2$, so the statement is False.`,
      `**E.** → False

Constant cost per document means the total is proportional to $n$, which is the manual law $D(n)=bn$, not the automated law $C(n)=an^{2}$.

$$
\\frac{C(n)}{n} = an
$$

That unit cost still depends on $n$. At the recorded meeting point it is $\\frac{400}{20}=20$ per document. A half-size batch scales the automated total by $\\left(\\frac{1}{2}\\right)^{2}=\\frac{1}{4}$:

$$
C(10) = \\frac{1}{4} \\cdot 400 = 100
$$

$$
\\frac{C(10)}{10} = 10
$$

The automated cost per document falls from $20$ to $10$ between those batches, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 18,
    solution_overview: `Two procedures cost $C(n)=an^{2}$ and $D(n)=bn$ for a batch of $n>0$ documents, and both cost $400$ on a batch of $20$.

**Part 1: Building the model.**

Let $n$ = documents in the batch, $C$ = automated cost, $D$ = manual cost. The single shared observation gives one equation for each coefficient, because it applies to both procedures at once.

**1. Translate: the automated cost at $n=20$.**

$$a(20)^{2} = 400$$

**2. Translate: the manual cost at $n=20$.**

$$b(20) = 400$$

**Part 2: The model.**

$$C(n) = n^{2} \\tag{1}$$

$$D(n) = 20n \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficients come straight out of the shared observation:

$$a = 1, \\qquad b = 20$$

**2.** Find every crossing on the stated domain:

$$n^{2} = 20n \\;\\Rightarrow\\; n(n-20) = 0 \\;\\Rightarrow\\; n = 20 \\quad (n = 0 \\text{ excluded})$$

**3.** Order the two procedures on each side of that single crossing:

$$n < 20 \\;\\Rightarrow\\; C < D, \\qquad n > 20 \\;\\Rightarrow\\; C > D$$

**4.** The gap is not a power function, and it grows far faster than the batch:

$$C(n) - D(n) = n(n-20), \\qquad 125 \\text{ at } n=25, \\qquad 1500 \\text{ at } n=50$$

**5.** Unit costs separate the two shapes cleanly:

$$\\frac{C(n)}{n} = n \\text{ (rising)}, \\qquad \\frac{D(n)}{n} = 20 \\text{ (constant)}$$

**Answer.** $C(n) = n^{2}$ | $D(n) = 20n$ | single crossing at $n = 20$ costing $400$`,
  },
  {
    id: `math-8-19`,
    case_id: `MATH 8.19`,
    title: `Warehouse Throughput With a Contractual Ceiling`,
    context: `Warehouse throughput follows $H(s)=A s^{0.6}$ pallets per hour, where $s>0$ is the number of staff on shift. A shift with $32$ staff moved $96$ pallets per hour. The service contract caps billed throughput at $300$ pallets per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the throughput law is $A=8$.`,
      `The model reaches $300$ pallets per hour at about $214$ staff.`,
      `Doubling the headcount raises throughput by between $55\\%$ and $60\\%$.`,
      `The contract ceiling is reached at about $250$ staff.`,
      `Throughput per staff member rises as headcount rises.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

The recorded shift pins the coefficient once $32^{0.6}$ is evaluated, and that shape factor is $8$ rather than the coefficient itself.

$$
32^{0.6} = \\left(2^{5}\\right)^{\\frac{3}{5}} = 2^{3} = 8
$$

$$
8A = 96
$$

$$
A = 12
$$

The value $A=8$ would predict only $64$ pallets per hour on the recorded shift. The coefficient is $12$, so the statement is False.`,
      `**B.** → True

Reaching $300$ pallets per hour inverts $H(s)=A s^{0.6}$ rather than substituting a guessed headcount. The coefficient comes from the $32$-staff shift of $96$ pallets per hour.

$$
A \\cdot 32^{0.6} = 96
$$

$$
32^{0.6} = 8
$$

$$
A = 12
$$

$$
12 s^{0.6} = 300
$$

$$
s^{0.6} = 25
$$

$$
s = 25^{\\frac{5}{3}} = 5^{\\frac{10}{3}}
$$

$$
5^{\\frac{10}{3}} = 5^{3} \\cdot 5^{\\frac{1}{3}} = 125 \\cdot 5^{\\frac{1}{3}}
$$

$$
125 \\cdot 5^{\\frac{1}{3}} \\approx 125 \\cdot 1.710 = 213.75
$$

The continuous model reaches the ceiling at about $214$ staff, so the statement is True.`,
      `**C.** → False

Doubling headcount multiplies throughput by $2^{0.6}$, a scale factor that does not use the coefficient.

$$
\\frac{H(2s)}{H(s)} = 2^{0.6}
$$

$$
2^{0.6} \\approx 1.516
$$

$$
1.516 - 1 = 0.516 = 51.6\\%
$$

The increase is about $51.6\\%$, which is not between $55\\%$ and $60\\%$, so the statement is False.`,
      `**D.** → False

The claim names $250$ staff, so substitute that headcount into the calibrated law and compare the result with the ceiling of $300$. Calibrating from the $32$-staff shift of $96$ pallets per hour:

$$
H(32) = A \\cdot 32^{0.6} = 96
$$

$$
32^{0.6} = \\left(2^{5}\\right)^{\\frac{3}{5}} = 8
$$

$$
A = \\frac{96}{8} = 12
$$

$$
H(250) = 12 \\cdot 250^{0.6}
$$

$$
250^{0.6} \\approx 27.46
$$

$$
H(250) \\approx 12 \\cdot 27.46 = 329.5
$$

$$
329.5 > 300
$$

At $250$ staff the model is already past the ceiling, so the statement is False.`,
      `**E.** → False

Throughput per staff member is the original law divided by headcount, which lowers the exponent by one.

$$
\\frac{H(s)}{s} = A s^{0.6-1} = A s^{-0.4}
$$

The exponent $-0.4$ is negative, so the average falls as headcount rises. The recorded shift already shows $3$ pallets per person:

$$
\\frac{H(32)}{32} = \\frac{96}{32} = 3
$$

Doubling that shift multiplies total throughput by $2^{0.6}\\approx 1.516$, which does not keep up with the doubled headcount:

$$
\\frac{H(64)}{64} \\approx \\frac{1.516 \\cdot 96}{64} \\approx 2.27
$$

The average falls from $3$ to about $2.27$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 19,
    solution_overview: `Throughput follows $H(s)=As^{0.6}$ pallets per hour for $s$ staff. A $32$-staff shift moved $96$ pallets per hour, and the contract caps billed throughput at $300$.

**Part 1: Building the model.**

Let $s$ = staff on shift and $H(s)$ = pallets per hour. The exponent is given, so one measured shift is enough to pin the coefficient; the contract ceiling then has to be inverted back into a headcount.

**1. Translate: the recorded shift.** Both $32$ and the exponent are powers of small integers, so the shape factor is exact:

$$32^{0.6} = \\left(2^{5}\\right)^{\\frac{3}{5}} = 8, \\qquad 8A = 96$$

**2. Translate: the contract ceiling.** Billed throughput cannot exceed $300$:

$$12 s^{0.6} \\le 300$$

**Part 2: The model.**

$$H(s) = 12 s^{0.6} \\tag{1}$$

$$s^{0.6} \\le 25 \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the recorded shift:

$$A = 12$$

**2.** Levels at exact fifth powers stay clean:

$$H(243) = 12 \\times 3^{3} = 324$$

**3.** Scale factors show the diminishing returns:

$$2^{0.6} \\approx 1.516 \\quad (+52\\%), \\qquad \\left(\\tfrac{243}{32}\\right)^{0.6} = 3.375$$

**4.** Invert (2) by raising to the power $\\frac{5}{3}$:

$$s = 25^{\\frac{5}{3}} = 5^{\\frac{10}{3}} \\approx 213.8$$

**5.** The derived average turns the exponent negative, so bigger shifts are less productive per head:

$$\\frac{H(s)}{s} = 12 s^{-0.4}, \\qquad 3 \\text{ at } s=32, \\qquad 1.33 \\text{ at } s=243$$

**Answer.** $A = 12$ | $H(s) = 12s^{0.6}$ | ceiling binds at $s \\approx 214$ staff`,
  },
  {
    id: `math-8-20`,
    case_id: `MATH 8.20`,
    title: `Response Time Recovered from a Server Upgrade`,
    context: `A service's median response time follows $W(k)=A k^{-1.5}$ milliseconds, where $k>0$ is the number of servers. The upgrade log does not state $A$: it records only that moving from $4$ servers to $9$ servers cut the median response time by exactly $19$ ms. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `With four servers the median response time is $27$ ms.`,
      `With nine servers the median response time is $8$ ms.`,
      `Doubling the server count cuts the median response time by about $65\\%$.`,
      `A median response time of $1$ ms requires $36$ servers.`,
      `The model reaches a median response time of $2$ ms at about $22.7$ servers.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The four-server median is a level of $W(k)=A k^{-1.5}$, and the log records only a $19$ ms cut from $4$ servers to $9$, so the coefficient has to come from that difference.

$$
4^{-1.5} = \\frac{1}{8}
$$

$$
9^{-1.5} = \\frac{1}{27}
$$

$$
A\\left(\\frac{1}{8} - \\frac{1}{27}\\right) = 19
$$

$$
\\frac{1}{8} - \\frac{1}{27} = \\frac{19}{216}
$$

$$
A \\cdot \\frac{19}{216} = 19
$$

$$
A = 216
$$

$$
W(4) = 216 \\cdot 4^{-1.5} = \\frac{216}{8} = 27
$$

With four servers the median is $27$ ms, so the statement is True.`,
      `**B.** → True

The nine-server median is $W(9)=A \\cdot 9^{-1.5}$. The upgrade log does not state $A$; it states that moving from $4$ servers to $9$ servers cut the median by $19$ ms.

$$
W(4) - W(9) = A\\left(4^{-1.5} - 9^{-1.5}\\right) = 19
$$

$$
4^{-1.5} = \\frac{1}{8}, \\qquad 9^{-1.5} = \\frac{1}{27}
$$

$$
A \\cdot \\frac{19}{216} = 19
$$

$$
A = 216
$$

$$
W(9) = 216 \\cdot 9^{-1.5} = \\frac{216}{27} = 8
$$

The nine-server median is $8$ ms, so the statement is True.`,
      `**C.** → True

Doubling the server count multiplies median response time by $2^{-1.5}$, a surviving fraction because the exponent is negative.

$$
\\frac{W(2k)}{W(k)} = 2^{-1.5}
$$

$$
2^{-1.5} = \\frac{1}{2\\sqrt{2}} \\approx 0.3536
$$

The cut is one minus that surviving fraction:

$$
1 - 0.3536 = 0.6464 \\approx 65\\%
$$

Doubling the server count cuts the median by about $65\\%$, so the statement is True.`,
      `**D.** → True

A $1$ ms target inverts $W(k)=A k^{-1.5}$. The coefficient is recovered from the $19$ ms cut between $4$ servers and $9$ servers.

$$
4^{-1.5} = \\frac{1}{8}, \\qquad 9^{-1.5} = \\frac{1}{27}
$$

$$
A\\left(\\frac{1}{8} - \\frac{1}{27}\\right) = 19
$$

$$
A \\cdot \\frac{19}{216} = 19
$$

$$
A = 216
$$

$$
216 k^{-1.5} = 1
$$

$$
k^{1.5} = 216
$$

$$
k = 216^{\\frac{2}{3}} = \\left(6^{3}\\right)^{\\frac{2}{3}} = 6^{2} = 36
$$

A median of $1$ ms requires $36$ servers, so the statement is True.`,
      `**E.** → True

A $2$ ms target inverts the same power law. The log still supplies only the $19$ ms cut from $4$ servers to $9$, which is what recovers $A$.

$$
A\\left(4^{-1.5} - 9^{-1.5}\\right) = 19
$$

$$
4^{-1.5} - 9^{-1.5} = \\frac{1}{8} - \\frac{1}{27} = \\frac{19}{216}
$$

$$
A = 216
$$

$$
216 k^{-1.5} = 2
$$

$$
k^{1.5} = 108
$$

$$
k = 108^{\\frac{2}{3}} \\approx 22.68
$$

The continuous model reaches $2$ ms at about $22.7$ servers, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 20,
    solution_overview: `Median response time follows $W(k)=Ak^{-1.5}$ ms for $k$ servers. Moving from $4$ to $9$ servers cut the median by exactly $19$ ms.

**Part 1: Building the model.**

Let $k$ = servers and $W(k)$ = median response time in milliseconds. The exponent is given and negative, and the only observation is a *difference* between two response times, so the coefficient must be recovered from that difference.

**1. Translate: the two shape factors.** Both server counts are perfect squares, so the powers are exact fractions:

$$4^{-1.5} = \\frac{1}{8}, \\qquad 9^{-1.5} = \\frac{1}{27}$$

**2. Translate: the recorded cut.** The smaller fleet has the larger response time:

$$A\\left(\\frac{1}{8} - \\frac{1}{27}\\right) = 19$$

**Part 2: The model.**

$$W(k) = A k^{-1.5} \\tag{1}$$

$$A \\cdot \\frac{19}{216} = 19 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (2) gives the coefficient in one step:

$$A = 216, \\qquad W(k) = 216 k^{-1.5}$$

**2.** Check both logged configurations:

$$W(4) = 27, \\qquad W(9) = 8, \\qquad 27 - 8 = 19$$

**3.** Scale factors are below $1$ because the exponent is negative:

$$\\frac{W(2k)}{W(k)} = 2^{-1.5} \\approx 0.354 \\quad \\Rightarrow \\quad \\text{a cut of about } 65\\%$$

**4.** Invert the law to turn a latency target into a fleet size:

$$k = \\left(\\frac{216}{W}\\right)^{\\frac{2}{3}}, \\qquad W = 1 \\;\\Rightarrow\\; k = 216^{\\frac{2}{3}} = 36$$

**5.** The negative exponent also fixes the qualitative picture: response time falls throughout, but with ever smaller gains per added server.

**Answer.** $A = 216$ | $W(k) = 216k^{-1.5}$ | $W(4)=27$ ms, $W(9)=8$ ms | $1$ ms needs $36$ servers`,
  },
  {
    id: `math-8-21`,
    case_id: `MATH 8.21`,
    title: `Isoelastic Subscription Demand and Its Revenue`,
    context: `Monthly subscriptions follow the isoelastic demand curve $q(p)=A p^{-2}$, where $p>0$ is the price in euros. At a price of $5$ the service sells $400$ subscriptions. Management wants to know what the curve implies for quantity and for revenue $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising the price by $10\\%$ lowers subscriptions by about $17.4\\%$.`,
      `A price rise of $10\\%$ lowers quantity by exactly $20\\%$.`,
      `At a price of $10$, the curve gives $100$ subscriptions and revenue of $1000$.`,
      `Revenue does not depend on the price.`,
      `At a price of $20$ the curve gives $50$ subscriptions.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

A $10\\%$ price rise multiplies every price by $1.1$. On $q(p)=Ap^{-2}$ the coefficient cancels, so quantity is multiplied by that factor to the power $-2$:

$$\\frac{q(1.1p)}{q(p)}=1.1^{-2}$$

$$=\\frac{1}{1.21}$$

$$\\approx 0.8264$$

Subscriptions fall by one minus that factor:

$$1-0.8264=0.1736\\approx 17.4\\%$$

The fall is about $17.4\\%$, so the statement is True.`,
      `**B.** → False

The claim of an exact $20\\%$ drop is the linear elasticity shortcut: a $10\\%$ price rise times elasticity $-2$. That product holds only for an infinitesimal move. A finite $10\\%$ rise multiplies quantity by

$$1.1^{-2}=\\frac{1}{1.21}\\approx 0.8264$$

Quantity falls by about $17.4\\%$, not by $20\\%$, so the statement is False.`,
      `**C.** → True

Both claimed figures need the calibrated curve at $p=10$. The observed pair $q(5)=400$ pins the coefficient:

$$A\\cdot 5^{-2}=400$$

$$\\frac{A}{25}=400$$

$$A=10000$$

Quantity at price $10$:

$$q(10)=10000\\cdot 10^{-2}=\\frac{10000}{100}=100$$

Revenue is price times quantity:

$$R(10)=10\\cdot 100=1000$$

Both figures match the curve, so the statement is True.`,
      `**D.** → False

Revenue is the product $R=pq$, so it is independent of price only when quantity falls exactly as $p^{-1}$. Here the demand exponent is $-2$. At the observed price:

$$R(5)=5\\cdot 400=2000$$

Doubling the price multiplies quantity by $2^{-2}=\\frac{1}{4}$:

$$q(10)=\\frac{400}{4}=100$$

$$R(10)=10\\cdot 100=1000$$

Revenue halves when price doubles. That is a dependence on price, so the statement is False.`,
      `**E.** → False

A move from $p=5$ to $p=20$ is a fourfold price rise. Quantity then scales by $4$ to the power $-2$, not by $4^{-1}$:

$$\\frac{q(20)}{q(5)}=4^{-2}=\\frac{1}{16}$$

$$q(20)=\\frac{400}{16}=25$$

The claimed $50$ is what an exponent of $-1$ would give. The curve gives $25$ subscriptions, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 21,
    solution_overview: `Demand is isoelastic, $q(p)=Ap^{-2}$, with $q(5)=400$. Revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros, $q$ = subscriptions, $R$ = revenue. The exponent is given by the isoelastic form, so the single observed price-quantity pair pins the coefficient, and revenue is then a derived power function.

**1. Translate: the observed pair.**

$$A(5)^{-2} = 400 \\quad \\Rightarrow \\quad \\frac{A}{25} = 400$$

**2. Translate: revenue.** Multiplying by $p$ adds $1$ to the exponent:

$$R(p) = p \\cdot A p^{-2} = A p^{-1}$$

**Part 2: The model.**

$$q(p) = 10000\\,p^{-2} \\tag{1}$$

$$R(p) = 10000\\,p^{-1} \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the observed pair:

$$A = 400 \\times 25 = 10000$$

**2.** The elasticity is the exponent, the same at every price:

$$\\text{El}_{p}q = -2$$

**3.** Exact scale factors, which elasticity only approximates for small moves:

$$1.1^{-2} \\approx 0.8264 \\;(-17.4\\%), \\qquad \\left(\\tfrac{1}{2}\\right)^{-2} = 4, \\qquad 4^{-2} = \\tfrac{1}{16}$$

**4.** Levels along the curve:

$$q(5) = 400, \\qquad q(2.5) = 1600, \\qquad q(20) = 25$$

**5.** Revenue in (2) has exponent $-1$, so it falls as price rises; it would be price-independent only if demand elasticity were exactly $-1$:

$$R(5) = 2000, \\qquad R(10) = 1000$$

**Answer.** $A = 10000$ | $q(p) = 10000p^{-2}$ | $R(p) = 10000p^{-1}$ | elasticity $-2$`,
  },
  {
    id: `math-8-22`,
    case_id: `MATH 8.22`,
    title: `Audit Fees With a Fixed Charge on Top of a Power Term`,
    context: `An audit firm bills $C(n)=F + a n^{0.5}$ for a client with $n>0$ accounts, where $F$ is a fixed engagement charge. Two completed engagements are on file: $100$ accounts were billed at $500$, and $400$ accounts at $800$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The fixed engagement charge is $200$.`,
      `Total cost is a power function of the number of accounts.`,
      `Cost per account falls as the number of accounts rises.`,
      `An engagement covering $900$ accounts is billed at $1100$.`,
      `Doubling the accounts from $100$ to $200$ raises the bill by more than $50\\%$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The two filed bills share the same fixed charge $F$. With $\\sqrt{100}=10$ and $\\sqrt{400}=20$ they read:

$$F+10a=500$$

$$F+20a=800$$

Subtracting isolates $a$:

$$10a=300$$

$$a=30$$

Then

$$F=500-300=200$$

The fixed engagement charge is $200$, so the statement is True.`,
      `**B.** → False

A power function of $n$ would multiply the bill by the same factor $k^{r}$ every time $n$ is multiplied by $k$. Quadrupling from $100$ to $400$ accounts is already on file:

$$\\frac{C(400)}{C(100)}=\\frac{800}{500}=1.6$$

A second quadrupling needs the schedule. Differencing the two bills cancels $F$:

$$10a=300$$

$$a=30$$

$$F=500-300=200$$

Then $C(n)=200+30\\sqrt{n}$, so a $1600$-account engagement is

$$C(1600)=200+30\\sqrt{1600}=200+30\\cdot 40=1400$$

$$\\frac{C(1600)}{C(400)}=\\frac{1400}{800}=1.75$$

The factors $1.6$ and $1.75$ disagree. Total cost is not a power function of the number of accounts, so the statement is False.`,
      `**C.** → True

Cost per account is the bill divided by the number of accounts. The two filed engagements already show a drop:

$$\\frac{C(100)}{100}=\\frac{500}{100}=5$$

$$\\frac{C(400)}{400}=\\frac{800}{400}=2$$

To see that the fall continues for every $n>0$, recover the schedule. Differencing the bills gives $10a=300$, so $a=30$ and $F=200$. Then

$$\\frac{C(n)}{n}=\\frac{200}{n}+30n^{-0.5}$$

Both exponents are negative, so both pieces decline as $n$ rises. Cost per account falls, so the statement is True.`,
      `**D.** → True

A $900$-account bill is an extrapolation of the recovered schedule. Differencing the filed engagements cancels $F$:

$$800-500=20a-10a$$

$$300=10a$$

$$a=30$$

$$F=500-300=200$$

Then $900$ is a perfect square:

$$C(900)=200+30\\sqrt{900}=200+30\\cdot 30=1100$$

The $900$-account engagement is billed at $1100$, so the statement is True.`,
      `**E.** → False

Doubling the accounts from $100$ to $200$ scales only the variable term, and by $\\sqrt{2}$ rather than by $2$. Subtracting the two filed bills gives

$$10a=300$$

$$a=30$$

$$F=500-300=200$$

$$C(200)=200+30\\sqrt{200}$$

$$\\sqrt{200}\\approx 14.142$$

$$30\\cdot 14.142\\approx 424.26$$

$$C(200)\\approx 624.26$$

$$\\frac{624.26}{500}\\approx 1.249$$

The bill rises by about $25\\%$, not by more than $50\\%$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 22,
    solution_overview: `Audit fees are $C(n)=F+an^{0.5}$ for $n>0$ accounts, with $C(100)=500$ and $C(400)=800$.

**Part 1: Building the model.**

Let $n$ = accounts, $F$ = fixed engagement charge, $a$ = coefficient of the variable term. Two unknowns need the two filed engagements, and because $F$ enters both bills identically it can be removed by differencing.

**1. Translate: the $100$-account engagement.**

$$F + a\\sqrt{100} = 500$$

**2. Translate: the $400$-account engagement.**

$$F + a\\sqrt{400} = 800$$

**Part 2: The model.**

$$F + 10a = 500 \\tag{1}$$

$$F + 20a = 800 \\tag{2}$$

**Part 3: Solve.**

**1.** Subtracting (1) from (2) eliminates the fixed charge:

$$10a = 300 \\;\\Rightarrow\\; a = 30, \\qquad F = 500 - 300 = 200$$

$$C(n) = 200 + 30\\sqrt{n}$$

**2.** The schedule extrapolates cleanly at perfect squares:

$$C(900) = 200 + 900 = 1100, \\qquad C(1600) = 200 + 1200 = 1400$$

**3.** The fee is *not* a power function: equal quadruplings give different factors:

$$\\frac{C(400)}{C(100)} = 1.6, \\qquad \\frac{C(1600)}{C(400)} = 1.75$$

**4.** Average fee splits into two declining power terms:

$$\\frac{C(n)}{n} = 200n^{-1} + 30n^{-0.5}$$

Both exponents are negative, so the fee per account falls as the engagement grows. Read at account counts $100$, $400$ and $1600$, the average fee runs:

$$5 \\to 2 \\to 1.22$$

The drop is steep at first because the fixed charge is spread over more accounts, then it flattens as the square root term comes to dominate.

**5.** Doubling the accounts moves the variable term by $\\sqrt{2}$ only, and the fixed charge damps the total further:

$$C(200) \\approx 624.3 \\quad (+24.9\\%)$$

**Answer.** $F = 200$ | $a = 30$ | $C(n) = 200 + 30\\sqrt{n}$`,
  },
  {
    id: `math-8-23`,
    case_id: `MATH 8.23`,
    title: `Fleet Growth Combined With Falling Emission Intensity`,
    context: `An electric-vehicle programme is tracked by two linked power laws. The fleet after $t>0$ years is $a(t)=4t^{0.5}$ thousand vehicles, and average emission intensity falls with fleet size according to $e(a)=120a^{-0.5}$ kilograms per thousand vehicles. Total fleet emissions are $E(t)=a(t)\\,e\\big(a(t)\\big)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Total fleet emissions are a power function of time with exponent $0.5$.`,
      `After $16$ years total fleet emissions are $960$.`,
      `Total fleet emissions rise as the programme runs longer.`,
      `Doubling the elapsed time doubles total fleet emissions.`,
      `Emission intensity rises as the fleet grows.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

Total emissions are the product of fleet size and intensity. Multiplying two powers of $a$ adds the exponents:

$$E=a\\cdot 120a^{-0.5}$$

$$=120a^{0.5}$$

The fleet law is $a(t)=4t^{0.5}$. Substituting, a power of a power multiplies the exponents:

$$E(t)=120(4t^{0.5})^{0.5}$$

$$=120\\cdot 4^{0.5}\\cdot t^{0.25}$$

$$=120\\cdot 2\\cdot t^{0.25}$$

$$=240t^{0.25}$$

The composed exponent is $0.25$, not $0.5$. Emissions are a power function of time, but not with the claimed exponent, so the statement is False.`,
      `**B.** → False

The claimed level $960$ is a substitution into the two-stage chain at $t=16$. Run the stages separately. Fleet size:

$$a(16)=4\\cdot 16^{0.5}=4\\cdot 4=16$$

Intensity at that fleet:

$$e(16)=120\\cdot 16^{-0.5}=\\frac{120}{4}=30$$

Total emissions:

$$E(16)=16\\cdot 30=480$$

The figure $960$ is twice that product. Both stages give $480$, so the statement is False.`,
      `**C.** → True

Whether total emissions rise with $t$ is the sign of the composed exponent. Fleet size times intensity, then $a(t)=4t^{0.5}$ in place of $a$, gives

$$E(t)=120(4t^{0.5})^{0.5}$$

$$=120\\cdot 4^{0.5}\\cdot t^{0.25}$$

$$=240t^{0.25}$$

The coefficient $240$ is positive and the exponent $0.25$ is positive, so $E$ increases with $t$. Checking two convenient years:

$$E(1)=240$$

$$E(16)=240\\cdot 16^{0.25}=240\\cdot 2=480$$

Total fleet emissions rise as the programme runs longer, so the statement is True.`,
      `**D.** → False

Doubling elapsed time multiplies $E$ by $2$ raised to the composed exponent. Intensity contributes a square root of fleet, and fleet is a square root of time, so that exponent is $0.5\\times 0.5=0.25$:

$$\\frac{E(2t)}{E(t)}=2^{0.25}$$

$$\\approx 1.189$$

A doubling of emissions would be the factor $2$, which needs a time stretch $k$ with

$$k^{0.25}=2$$

$$k=2^{4}=16$$

Doubling time raises emissions by about $19\\%$, not by $100\\%$, so the statement is False.`,
      `**E.** → False

Emission intensity is the second given law, $e(a)=120a^{-0.5}$. The exponent $-0.5$ is negative, so intensity falls as the fleet grows:

$$e(4)=\\frac{120}{4^{0.5}}=\\frac{120}{2}=60$$

$$e(16)=\\frac{120}{16^{0.5}}=\\frac{120}{4}=30$$

Intensity halves when the fleet quadruples. It does not rise, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 23,
    solution_overview: `Fleet size is $a(t)=4t^{0.5}$ thousand vehicles, intensity is $e(a)=120a^{-0.5}$ kg per thousand vehicles, and total emissions are $E(t)=a(t)e(a(t))$.

**Part 1: Building the model.**

Let $t$ = years, $a$ = fleet in thousands, $e$ = emission intensity, $E$ = total emissions. This is a chain: the output of the fleet law becomes the input of the intensity law, and the total multiplies the two.

**1. Translate: total emissions in terms of fleet size.** Multiplying adds the exponents:

$$E = a \\cdot 120a^{-0.5} = 120a^{0.5}$$

**2. Translate: substitute the fleet law.** Composing multiplies the exponents:

$$E(t) = 120\\left(4t^{0.5}\\right)^{0.5}$$

**Part 2: The model.**

$$a(t) = 4t^{0.5}, \\qquad e(a) = 120a^{-0.5} \\tag{1}$$

$$E(t) = 240\\,t^{0.25} \\tag{2}$$

**Part 3: Solve.**

**1.** The composed constant and exponent come out cleanly:

$$120 \\times 4^{0.5} = 240, \\qquad 0.5 \\times 0.5 = 0.25$$

**2.** Levels can be checked either through (2) or stage by stage:

$$E(16) = 240 \\times 2 = 480, \\qquad a(16) = 16, \\quad e(16) = 30, \\quad 16 \\times 30 = 480$$

**3.** The composed exponent is positive but small, so growth is slow:

$$\\frac{E(2t)}{E(t)} = 2^{0.25} \\approx 1.189 \\quad (+19\\%)$$

**4.** Doubling total emissions needs a sixteenfold stretch of time:

$$k^{0.25} = 2 \\;\\Rightarrow\\; k = 16$$

**5.** The two stages pull opposite ways — intensity falls with fleet size while the total still rises:

$$e(4) = 60, \\qquad e(16) = 30$$

**Answer.** $E(t) = 240t^{0.25}$ | composed exponent $0.25$ | $E(16) = 480$`,
  },
  {
    id: `math-8-24`,
    case_id: `MATH 8.24`,
    title: `Pipeline Capacity, Inversion, and a Change of Units`,
    context: `Flow capacity through a pipe follows $Q(d)=A d^{2.5}$ litres per second, where $d>0$ is the internal diameter in centimetres. A bench test on a $4$ cm pipe measured a capacity of $64$ litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the capacity law is $A=2$.`,
      `Doubling the diameter multiplies capacity by about $5.7$.`,
      `A capacity of $250$ litres per second requires a diameter above $10$ cm.`,
      `Measuring the diameter in millimetres instead of centimetres leaves the coefficient unchanged.`,
      `Capacity per centimetre of diameter is the same at every diameter.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The coefficient is the bench capacity divided by the shape factor at $d=4$. Split the exponent $2.5=2+0.5$:

$$4^{2.5}=4^{2}\\cdot 4^{0.5}$$

$$=16\\cdot 2$$

$$=32$$

$$A\\cdot 32=64$$

$$A=2$$

The coefficient of the capacity law is $2$, so the statement is True.`,
      `**B.** → True

Doubling the diameter multiplies capacity by $2$ to the given exponent. The coefficient cancels:

$$\\frac{Q(2d)}{Q(d)}=2^{2.5}$$

$$2^{2.5}=2^{2}\\cdot 2^{0.5}=4\\sqrt{2}$$

$$\\approx 4\\cdot 1.4142=5.6568$$

The factor is about $5.7$, so the statement is True.`,
      `**C.** → False

A required diameter for $Q=250$ inverts the calibrated law. The bench test gives $A\\cdot 4^{2.5}=64$. With $4^{2.5}=32$, the coefficient is $A=2$, so

$$2d^{2.5}=250$$

$$d^{2.5}=125$$

$$d=125^{\\frac{1}{2.5}}=125^{0.4}$$

$$125^{0.4}=e^{0.4\\ln 125}$$

$$\\ln 125\\approx 4.8283$$

$$0.4\\cdot 4.8283=1.9313$$

$$e^{1.9313}\\approx 6.90$$

The required diameter is about $6.9$ centimetres, which is below $10$. Checking the $10$ cm pipe directly:

$$Q(10)=2\\cdot 10^{2.5}$$

$$10^{2.5}=10^{2}\\cdot 10^{0.5}=100\\sqrt{10}\\approx 316.23$$

$$Q(10)\\approx 2\\cdot 316.23=632.46$$

A $10$ cm pipe is far above $250$ litres per second, so the statement is False.`,
      `**D.** → False

Changing the unit of diameter rescales the input of the power law, and that rescaling is absorbed by the coefficient. The bench pipe has $d=4$ and $Q=64$. In centimetre units $4^{2.5}=32$, so the coefficient is $\\frac{64}{32}=2$. One centimetre is ten millimetres, so

$$Q=2\\left(\\frac{d_{\\mathrm{mm}}}{10}\\right)^{2.5}$$

$$=\\frac{2}{10^{2.5}}\\,d_{\\mathrm{mm}}^{2.5}$$

$$10^{2.5}=100\\sqrt{10}\\approx 316.23$$

$$\\frac{2}{316.23}\\approx 0.00632$$

The millimetre-unit coefficient is about $0.00632$, not $2$. The coefficient changes, so the statement is False.`,
      `**E.** → False

Capacity per centimetre of diameter is $\\frac{Q(d)}{d}$. That ratio is constant only if the exponent upstairs is $1$. Here it is $2.5$, so

$$\\frac{Q(d)}{d}=Ad^{1.5}$$

The leftover exponent $1.5$ is positive, so the ratio rises with $d$. At the bench pipe:

$$\\frac{Q(4)}{4}=\\frac{64}{4}=16$$

Doubling the diameter multiplies $Q$ by $2^{2.5}\\approx 5.657$:

$$Q(8)=64\\cdot 5.657\\approx 362.0$$

$$\\frac{Q(8)}{8}\\approx\\frac{362.0}{8}=45.25$$

The ratios $16$ and $45.25$ are not equal, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 24,
    solution_overview: `Flow capacity is $Q(d)=Ad^{2.5}$ litres per second for a diameter $d>0$ in centimetres, with a bench test giving $Q(4)=64$.

**Part 1: Building the model.**

Let $d$ = internal diameter in centimetres and $Q(d)$ = capacity in litres per second. The exponent is given, so the bench test alone pins the coefficient; the questions then push the model through inversion and a change of units.

**1. Translate: the bench test.** The bench diameter is a power of two, so the shape factor is exact:

$$4^{2.5} = 4^{2} \\times 4^{0.5} = 32, \\qquad 32A = 64$$

**2. Translate: the change of units.** One centimetre is ten millimetres:

$$d_{\\text{mm}} = 10\\,d_{\\text{cm}}$$

**Part 2: The model.**

$$Q(d) = 2d^{2.5} \\tag{1}$$

$$Q = \\frac{2}{10^{2.5}}\\,d_{\\text{mm}}^{2.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The bench test gives the coefficient:

$$A = 2$$

**2.** Scale factors follow from the exponent alone:

$$2^{2.5} = 4\\sqrt{2} \\approx 5.657$$

**3.** Inversion uses the reciprocal exponent $\\frac{1}{2.5} = 0.4$:

$$d = \\left(\\frac{Q}{2}\\right)^{0.4}, \\qquad Q = 250 \\;\\Rightarrow\\; d = 125^{0.4} \\approx 6.90 \\text{ cm}$$

**4.** Rescaling the unit leaves the exponent alone and rescales the coefficient by $10^{2.5}$:

$$A_{\\text{mm}} = \\frac{2}{316.23} \\approx 0.00632$$

**5.** Capacity per centimetre of bore keeps exponent $1.5$, so it rises with diameter:

$$\\frac{Q(d)}{d} = 2d^{1.5}, \\qquad 16 \\text{ at } d=4, \\qquad 45.3 \\text{ at } d=8$$

**Answer.** $A = 2$ | $Q(d) = 2d^{2.5}$ | $250$ l/s needs $d \\approx 6.9$ cm`,
  },
  {
    id: `math-8-25`,
    case_id: `MATH 8.25`,
    title: `From Radius Growth to the Area a Service Covers`,
    context: `A delivery hub's service radius expands with time according to $r(t)=3t^{0.5}$ kilometres, where $t>0$ is hours since opening. The area covered is the disc of that radius, $S=\\pi r^{2}$ square kilometres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The area covered is proportional to elapsed time.`,
      `After $4$ hours the covered area is $36\\pi$ square kilometres.`,
      `Doubling the elapsed time doubles the area covered.`,
      `Increasing elapsed time by $50\\%$ increases the service radius by about $22.5\\%$.`,
      `The covered area reaches $100\\pi$ square kilometres after about $11.1$ hours.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The covered area is the disc of the current radius. Substituting $r(t)=3t^{0.5}$ squares a square root, and a power of a power multiplies the exponents:

$$S(t)=\\pi(3t^{0.5})^{2}$$

$$=\\pi\\cdot 9\\cdot t^{0.5\\cdot 2}$$

$$=9\\pi t$$

A constant times $t$ means the area is proportional to elapsed time. Equal hour steps add equal area: $S(1)=9\\pi$ and $S(2)=18\\pi$. The area covered is proportional to elapsed time, so the statement is True.`,
      `**B.** → True

After $4$ hours the radius law is a direct substitution:

$$r(4)=3\\cdot 4^{0.5}=3\\cdot 2=6$$

The covered area is the disc of that radius:

$$S=\\pi r^{2}=\\pi\\cdot 6^{2}=36\\pi$$

The four-hour area is $36\\pi$ square kilometres, so the statement is True.`,
      `**C.** → True

Doubling elapsed time multiplies area by $2$ to the composed exponent. The disc squares the radius, and the radius grows as the square root of time, so that exponent is $0.5\\times 2=1$:

$$\\frac{S(2t)}{S(t)}=2^{1}=2$$

Substituting $r(t)$ into the disc gives $S(t)=9\\pi t$:

$$S(4)=9\\pi\\cdot 4=36\\pi$$

$$S(8)=9\\pi\\cdot 8=72\\pi$$

Area doubles when time doubles, so the statement is True.`,
      `**D.** → True

The radius law has exponent $0.5$, so raising elapsed time by $50\\%$ multiplies the radius by $\\sqrt{1.5}$:

$$\\frac{r(1.5t)}{r(t)}=1.5^{0.5}$$

$$\\sqrt{1.5}\\approx 1.2247$$

The percentage rise is that factor minus one:

$$(1.2247-1)\\times 100\\%\\approx 22.47\\%$$

The service radius rises by about $22.5\\%$, so the statement is True.`,
      `**E.** → True

The area target inverts the composed disc law, not the radius law alone. Substituting $r(t)=3t^{0.5}$ into $S=\\pi r^{2}$ gives

$$S(t)=9\\pi t$$

Set this equal to $100\\pi$:

$$9\\pi t=100\\pi$$

The factor $\\pi$ cancels:

$$9t=100$$

$$t=\\frac{100}{9}\\approx 11.11$$

The covered area reaches $100\\pi$ after about $11.1$ hours, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 25,
    solution_overview: `The service radius is $r(t)=3t^{0.5}$ km after $t>0$ hours, and the area covered is the disc $S=\\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours since opening, $r$ = service radius in kilometres, $S$ = area in square kilometres. This is a two-stage chain, and the second stage is a power function with exponent $2$, so composing multiplies the exponents.

**1. Translate: the radius law.**

$$r(t) = 3t^{0.5}$$

**2. Translate: the area of the disc.**

$$S = \\pi r^{2}$$

**Part 2: The model.**

$$S(t) = \\pi\\left(3t^{0.5}\\right)^{2} \\tag{1}$$

$$S(t) = 9\\pi t \\tag{2}$$

**Part 3: Solve.**

**1.** The composition squares the coefficient and multiplies the exponents:

$$3^{2} = 9, \\qquad 0.5 \\times 2 = 1$$

**2.** Levels at convenient hours, checked through both stages:

$$r(4) = 6 \\;\\Rightarrow\\; S = 36\\pi, \\qquad r(9) = 9 \\;\\Rightarrow\\; S = 81\\pi$$

**3.** The two stages carry different scale factors for the same doubling of time:

$$\\frac{r(2t)}{r(t)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{S(2t)}{S(t)} = 2^{1} = 2$$

**4.** The exponent $1$ in (2) means area accrues at a constant rate:

$$S(1) = 9\\pi, \\quad S(2) = 18\\pi, \\quad S(3) = 27\\pi$$

**5.** The apparent paradox — a slowing radius but a steadily growing area — resolves because $\\left(t^{0.5}\\right)^{2}=t$ exactly.

**Answer.** $r(t) = 3\\sqrt{t}$ | $S(t) = 9\\pi t$ | $S(9) = 81\\pi$ km²`,
  },
  {
    id: `math-8-26`,
    case_id: `MATH 8.26`,
    title: `Two Support Contracts, One Crossing and One Cap`,
    context: `A helpdesk compares two support contracts for $u>0$ tickets a month. Plan A bills $C_A(u)=a u^{0.5}$ and a filed invoice shows $36$ tickets billed at $240$; Plan A also carries a monthly cap, so it never charges more than $400$. Plan B bills a flat $5$ per ticket with no cap. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two plans bill the same amount at $64$ tickets.`,
      `Below $64$ tickets Plan B is the cheaper contract.`,
      `Plan A's cap binds from $100$ tickets onwards.`,
      `At $144$ tickets Plan A bills $480$.`,
      `Plan A's cost per ticket is the same at every ticket volume.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Equal bills at $64$ tickets means the two schedules meet at that volume. Plan A's coefficient has to come from the invoice before either side can be evaluated.

$$a\\sqrt{36} = 240$$

$$6a = 240$$

$$a = 40$$

Set the uncapped schedules equal:

$$40\\sqrt{u} = 5u$$

On $u>0$ divide by $\\sqrt{u}$:

$$40 = 5\\sqrt{u}$$

$$\\sqrt{u} = 8$$

$$u = 64$$

Both bills at that volume:

$$C_A(64) = 40 \\cdot 8 = 320$$

$$C_B(64) = 5 \\cdot 64 = 320$$

The shared bill is $320$, which sits under the cap of $400$, so the statement is True.`,
      `**B.** → True

Plan B is cheaper below $64$ tickets when the linear bill lies below the square-root bill. The invoice of $240$ at $36$ tickets, with $\\sqrt{36}=6$, supplies the missing coefficient:

$$6a = 240$$

$$a = 40$$

Plan B is cheaper where

$$5u < 40\\sqrt{u}$$

Dividing by $\\sqrt{u}$ (positive for $u>0$) leaves

$$5\\sqrt{u} < 40$$

$$\\sqrt{u} < 8$$

$$u < 64$$

Below the crossing the flat contract is cheaper, so the statement is True.`,
      `**C.** → True

The cap binds from the ticket volume where uncapped Plan A first reaches $400$. That conversion needs the coefficient. From the invoice,

$$a\\sqrt{36} = 240$$

$$a = \\frac{240}{6} = 40$$

Uncapped Plan A hits the cap when

$$40\\sqrt{u} = 400$$

$$\\sqrt{u} = 10$$

$$u = 100$$

The uncapped schedule is increasing, so every larger volume would bill more than $400$ and is trimmed to the cap. At $100$ tickets the two pieces meet, and from there the cap is the bill, so the statement is True.`,
      `**D.** → False

A bill of $480$ at $144$ tickets is the uncapped square-root value, so the claim is that the cap is still slack. The invoice recovers the coefficient needed to test that:

$$a\\sqrt{36} = 240$$

$$a = 40$$

Uncapped at $144$ tickets:

$$40\\sqrt{144} = 40 \\cdot 12 = 480$$

The cap is $400$, and $480>400$, so the two-piece rule charges the cap:

$$C_A(144) = \\min\\{480, 400\\} = 400$$

The figure $480$ is the right arithmetic on the wrong piece. Plan A bills $400$, so the statement is False.`,
      `**E.** → False

A constant cost per ticket is what exponent $1$ produces. Plan A's exponent is $0.5$, so dividing the bill by ticket volume leaves a negative exponent:

$$\\frac{C_A(u)}{u} = a u^{-0.5}$$

That unit cost falls as $u$ rises, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 26,
    solution_overview: `Plan A bills $C_A(u)=au^{0.5}$ with an invoice of $240$ at $36$ tickets and a monthly cap of $400$; Plan B bills $5$ per ticket.

**Part 1: Building the model.**

Let $u$ = tickets per month, $C_A$ and $C_B$ = monthly bills. Plan A needs its coefficient recovered from the filed invoice, and its cap turns the schedule into a two-piece rule that must be respected when evaluating large volumes.

**1. Translate: Plan A's invoice.**

$$a\\sqrt{36} = 240$$

**2. Translate: Plan A's cap.** The uncapped schedule is trimmed once it reaches $400$:

$$C_A(u) = \\min\\left\\{a\\sqrt{u},\\;400\\right\\}$$

**Part 2: The model.**

$$C_A(u) = \\min\\left\\{40\\sqrt{u},\\;400\\right\\} \\tag{1}$$

$$C_B(u) = 5u \\tag{2}$$

**Part 3: Solve.**

**1.** The invoice fixes Plan A's coefficient:

$$6a = 240 \\;\\Rightarrow\\; a = 40$$

**2.** Locate the crossing of the uncapped schedules by setting the two bills equal:

$$40\\sqrt{u} = 5u$$

Dividing both sides by $5\\sqrt{u}$ leaves a single square root:

$$\\sqrt{u} = 8$$

Squaring gives the crossing volume:

$$u = 64$$

At that volume both plans bill $320$.

**3.** Order the plans on each side of the crossing:

$$u < 64 \\;\\Rightarrow\\; C_B < C_A, \\qquad 64 < u \\;\\Rightarrow\\; C_A < C_B$$

**4.** Convert the cap into a ticket volume:

$$40\\sqrt{u} = 400 \\;\\Rightarrow\\; u = 100$$

Beyond $100$ tickets Plan A is flat at $400$ while Plan B keeps climbing, so Plan A's advantage widens without limit.

**5.** Unit costs separate the two shapes. Plan A's cost per ticket falls as the volume grows:

$$\\frac{C_A(u)}{u} = 40u^{-0.5}$$

Plan B's cost per ticket is the same at every volume:

$$\\frac{C_B(u)}{u} = 5$$

That is why the ranking flips once and never flips back.

**Answer.** $a = 40$ | crossing at $u = 64$ costing $320$ | cap binds from $u = 100$`,
  },
  {
    id: `math-8-27`,
    case_id: `MATH 8.27`,
    title: `An Eighty Percent Learning Curve Meeting a Materials Floor`,
    context: `Unit cost on a new assembly line follows the learning curve $c(N)=c_1 N^{-b}$, where $N>0$ is cumulative output. Every doubling of cumulative output multiplies unit cost by $0.8$, and the first unit cost $1000$. Materials alone cost $400$ per unit, so the curve cannot describe costs below that floor. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After three successive doublings, the modelled unit cost is $512$, a total cut of $48.8\\%$ from the first unit.`,
      `The exponent of the learning curve is $-0.8$.`,
      `After $8$ units the unit cost is $500$.`,
      `The materials floor binds from about $12$ units onwards.`,
      `Quadrupling cumulative output halves the unit cost.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Three successive doublings apply the survival factor $0.8$ three times, starting from the first-unit cost of $1000$:

$$c(8) = 1000 \\cdot 0.8^{3}$$

$$0.8^{3} = 0.512$$

$$c(8) = 1000 \\cdot 0.512 = 512$$

The cut from the first unit is

$$\\frac{1000 - 512}{1000} = 0.488 = 48.8\\%$$

Adding three $20\\%$ cuts into a $60\\%$ reduction would treat the factors as combining additively. The modelled cost is $512$, a cut of $48.8\\%$, so the statement is True.`,
      `**B.** → False

The recorded $0.8$ is the doubling multiplier, not the exponent. The exponent $b$ is recovered from that multiplier by logarithms:

$$2^{-b} = 0.8$$

$$-b \\ln 2 = \\ln 0.8$$

$$b = \\frac{-\\ln 0.8}{\\ln 2}$$

$$b = \\frac{0.2231}{0.6931} \\approx 0.3219$$

So the curve is $c(N) = 1000 N^{-0.3219}$. An exponent of $-0.8$ would mean a doubling multiplied cost by $2^{-0.8} \\approx 0.574$, a much steeper curve than the one recorded. The exponent is about $-0.322$, so the statement is False.`,
      `**C.** → False

Eight units is three doublings of cumulative output:

$$1 \\to 2 \\to 4 \\to 8$$

Each doubling multiplies unit cost by $0.8$, so

$$c(8) = 1000 \\cdot 0.8^{3} = 1000 \\cdot 0.512 = 512$$

The claimed $500$ is a rounded half of the first-unit cost, not a point on the learning curve. The unit cost after $8$ units is $512$, so the statement is False.`,
      `**D.** → False

The materials floor binds where the modelled unit cost first reaches $400$, which is an inversion of the calibrated curve. The doubling rule supplies the exponent:

$$2^{-b} = 0.8$$

$$b = \\log_{2}\\left(\\frac{1}{0.8}\\right) \\approx 0.3219$$

The first-unit cost is $1000$, so the floor equation is

$$1000 N^{-0.3219} = 400$$

$$N^{0.3219} = \\frac{1000}{400} = 2.5$$

$$N = 2.5^{\\frac{1}{0.3219}}$$

$$N = e^{\\frac{0.9163}{0.3219}} \\approx e^{2.846} \\approx 17.2$$

A direct check at the claimed volume:

$$c(12) = 1000 \\cdot 12^{-0.3219} \\approx 449$$

At $12$ units the curve is still well above $400$. Two doublings from the first unit give the same conclusion:

$$c(16) = 1000 \\cdot 0.8^{4} = 409.6$$

The floor binds from about $17$ units, so the statement is False.`,
      `**E.** → False

Quadrupling cumulative output is two doublings, so the survival factor applies twice:

$$\\frac{c(4N)}{c(N)} = 0.8^{2} = 0.64$$

Halving would require a factor of $0.5$. Two $20\\%$ cuts leave $64\\%$ of the cost, a reduction of $36\\%$, not $50\\%$. Quadrupling does not halve the unit cost, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 27,
    solution_overview: `Unit cost follows $c(N)=c_1N^{-b}$ with a doubling multiplier of $0.8$, a first-unit cost of $1000$, and a materials floor at $400$.

**Part 1: Building the model.**

Let $N$ = cumulative output and $c(N)$ = unit cost. The learning rule carries the exponent, the first unit carries the coefficient, and the floor is a level that the curve eventually crosses from above.

**1. Translate: the learning rule.** Scale factors are free of the coefficient:

$$\\frac{c(2N)}{c(N)} = 2^{-b} = 0.8$$

**2. Translate: the first unit.** At $N=1$ the shape factor is $1$:

$$c_1 = 1000$$

**Part 2: The model.**

$$2^{-b} = 0.8 \\tag{1}$$

$$c(N) = 1000\\,N^{-b} \\tag{2}$$

**Part 3: Solve.**

**1.** Logarithms turn (1) into the exponent:

$$b = \\frac{-\\ln 0.8}{\\ln 2} \\approx 0.3219, \\qquad c(N) = 1000N^{-0.3219}$$

**2.** At powers of two the curve can be walked doubling by doubling:

$$c(2) = 800, \\quad c(4) = 640, \\quad c(8) = 512, \\quad c(16) = 409.6$$

**3.** Scale factors compound multiplicatively, not additively:

$$0.8^{2} = 0.64 \\;(-36\\%), \\qquad 0.8^{3} = 0.512$$

**4.** Invert the curve at the materials floor:

$$N^{0.3219} = 2.5 \\;\\Rightarrow\\; N = 2.5^{\\frac{1}{0.3219}} \\approx 17.2$$

**5.** Beyond about $17$ units the curve would predict costs below materials, so the model has to be read as flat at $400$ from there on.

**Answer.** $b \\approx 0.322$ | $c(N) = 1000N^{-0.322}$ | floor reached at $N \\approx 17.2$ units`,
  },
  {
    id: `math-8-28`,
    case_id: `MATH 8.28`,
    title: `Advertising Revenue Against a Proportional Platform Fee`,
    context: `A merchant's sales revenue from an advertising spend $x>0$ follows $R(x)=90 x^{0.5}$, while the platform charges a fee of $F(x)=6x$ on the same spend. The merchant judges a campaign by the net gain $R(x)-F(x)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The net gain is zero at a spend of $225$.`,
      `The net gain is positive at every spend above $225$.`,
      `Doubling the spend doubles revenue.`,
      `At a spend of $100$ the net gain is $300$.`,
      `Revenue per unit of spend rises as the spend rises.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Net gain is zero where revenue equals the platform fee:

$$90\\sqrt{x} = 6x$$

On $x>0$ divide by $\\sqrt{x}$:

$$90 = 6\\sqrt{x}$$

$$\\sqrt{x} = 15$$

$$x = 225$$

Both sides at that spend:

$$R(225) = 90 \\cdot 15 = 1350$$

$$F(225) = 6 \\cdot 225 = 1350$$

The net gain is zero at a spend of $225$, so the statement is True.`,
      `**B.** → False

A positive net gain at every spend above $225$ would mean break-even opens a profitable tail. The factorisation shows the opposite:

$$R(x) - F(x) = 90\\sqrt{x} - 6x$$

$$= 6\\sqrt{x}\\,(15 - \\sqrt{x})$$

The factor $6\\sqrt{x}$ is positive on $x>0$, so the sign follows $15 - \\sqrt{x}$:

$$15 - \\sqrt{x} > 0 \\quad \\Longleftrightarrow \\quad x < 225$$

Above $225$ the net gain is therefore negative. A check past the root:

$$R(400) - F(400) = 90 \\cdot 20 - 6 \\cdot 400$$

$$= 1800 - 2400 = -600$$

The fee grows proportionally while revenue grows only as a square root, so break-even closes the profitable range rather than opening it. Above a spend of $225$ the net gain is negative, so the statement is False.`,
      `**C.** → False

Doubling the spend multiplies revenue by two raised to the revenue exponent, which is $0.5$:

$$\\frac{R(2x)}{R(x)} = 2^{0.5} \\approx 1.414$$

Doubling would require the factor $2$. Revenue grows by about $41\\%$, not $100\\%$, so the statement is False.`,
      `**D.** → True

Net gain at a spend of $100$ is the difference of the two given schedules at that point:

$$R(100) = 90\\sqrt{100} = 90 \\cdot 10 = 900$$

$$F(100) = 6 \\cdot 100 = 600$$

$$900 - 600 = 300$$

The net gain is $300$, so the statement is True.`,
      `**E.** → False

Revenue per unit of spend is revenue divided by spend, which lowers the exponent by one:

$$\\frac{R(x)}{x} = 90 x^{-0.5}$$

The exponent is negative, so the average return falls as the spend rises. Two points on the curve:

$$\\frac{R(100)}{100} = 9$$

$$\\frac{R(400)}{400} = 4.5$$

The return per unit of spend falls from $9$ to $4.5$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `Revenue is $R(x)=90x^{0.5}$ and the platform fee is $F(x)=6x$ on an advertising spend $x>0$.

**Part 1: Building the model.**

Let $x$ = advertising spend, $R$ = sales revenue, $F$ = platform fee. Both constants are given, so the work is comparison rather than calibration: one law has exponent $0.5$ and the other exponent $1$, and their difference decides the campaign.

**1. Translate: the net gain.**

$$\\Pi(x) = R(x) - F(x) = 90x^{0.5} - 6x$$

**2. Translate: break-even.** The two curves meet where the net gain vanishes:

$$90\\sqrt{x} = 6x$$

**Part 2: The model.**

$$\\Pi(x) = 90\\sqrt{x} - 6x \\tag{1}$$

$$\\Pi(x) = 6\\sqrt{x}\\left(15 - \\sqrt{x}\\right) \\tag{2}$$

**Part 3: Solve.**

**1.** Solve the break-even condition on $x>0$:

$$\\sqrt{x} = 15 \\;\\Rightarrow\\; x = 225, \\qquad R = F = 1350$$

**2.** The factored form (2) settles the sign everywhere:

$$0 < x < 225 \\;\\Rightarrow\\; \\Pi > 0, \\qquad x > 225 \\;\\Rightarrow\\; \\Pi < 0$$

**3.** Levels inside and outside the profitable window:

$$\\Pi(100) = 900 - 600 = 300, \\qquad \\Pi(400) = 1800 - 2400 = -600$$

**4.** The two laws scale differently, which is why the fee eventually wins:

$$\\frac{R(2x)}{R(x)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{F(2x)}{F(x)} = 2$$

**5.** The average return on spend falls to the fee rate exactly at break-even:

$$\\frac{R(x)}{x} = 90x^{-0.5}, \\qquad 9 \\text{ at } x=100, \\quad 6 \\text{ at } x=225, \\quad 4.5 \\text{ at } x=400$$

**Answer.** break-even spend $x = 225$ | $R = F = 1350$ | net gain positive only on $(0,225)$`,
  },
  {
    id: `math-8-29`,
    case_id: `MATH 8.29`,
    title: `Calibrating a Two-Stage Production Chain`,
    context: `A plant runs two stages. Labour $L>0$ hours yields processed material $m(L)=A L^{0.5}$ tonnes, and material is converted into finished goods by $g(m)=B m^{1.5}$ units. Two records are available: $100$ labour hours yielded $40$ tonnes of material, and a run on $9$ tonnes of material produced $54$ finished units. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The material stage is $m(L)=4L^{0.5}$.`,
      `Finished output as a function of labour is $g(L)=16L^{0.75}$.`,
      `Doubling labour hours raises finished output by about $68\\%$.`,
      `Producing $432$ finished units requires $81$ labour hours.`,
      `Finished output per labour hour falls as labour rises.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The labour record calibrates the material stage alone:

$$A\\sqrt{100} = 40$$

$$10A = 40$$

$$A = 4$$

So the first stage is

$$m(L) = 4L^{0.5}$$

The second record, $54$ finished units from $9$ tonnes, calibrates the other stage and is not needed here. The material stage is $4L^{0.5}$, so the statement is True.`,
      `**B.** → True

Finished output as a function of labour is the composition of the two calibrated stages. The labour record fixes the inner coefficient:

$$A\\sqrt{100} = 40$$

$$A = 4$$

The material record fixes the outer coefficient. Since $9^{1.5} = 9 \\cdot 3 = 27$,

$$27B = 54$$

$$B = 2$$

Substitute the inner stage into the outer:

$$g(L) = 2\\left(4L^{0.5}\\right)^{1.5}$$

$$= 2 \\cdot 4^{1.5} \\cdot L^{0.75}$$

$$4^{1.5} = 8$$

$$g(L) = 16L^{0.75}$$

Leaving the inner coefficient unraised would replace $4^{1.5}=8$ by $4$ and halve every later prediction. The composed law is $16L^{0.75}$, so the statement is True.`,
      `**C.** → True

Doubling labour scales finished output by $2$ raised to the composed exponent, the product of the two stage exponents:

$$0.5 \\times 1.5 = 0.75$$

$$\\frac{g(2L)}{g(L)} = 2^{0.75}$$

$$2^{0.75} = 2^{0.5} \\cdot 2^{0.25} \\approx 1.4142 \\cdot 1.1892 \\approx 1.6818$$

The coefficients cancel in the ratio, so they are not needed. Finished output rises by about $68\\%$, so the statement is True.`,
      `**D.** → True

The labour hours behind $432$ finished units come from inverting finished output as a function of labour. The two records build that law. Labour to material:

$$A\\sqrt{100} = 40$$

$$A = 4$$

Material to goods, using $9^{1.5}=27$:

$$27B = 54$$

$$B = 2$$

Composition:

$$g(L) = 2\\left(4L^{0.5}\\right)^{1.5} = 2 \\cdot 8 \\cdot L^{0.75} = 16L^{0.75}$$

Invert at the target:

$$16L^{0.75} = 432$$

$$L^{0.75} = 27$$

$$L = 27^{\\frac{4}{3}}$$

$$L = \\left(3^{3}\\right)^{\\frac{4}{3}} = 3^{4} = 81$$

A substitution check:

$$g(81) = 16 \\cdot 27 = 432$$

The requirement is exactly $81$ labour hours, so the statement is True.`,
      `**E.** → True

Finished output per labour hour falls when the composed exponent is below $1$:

$$0.5 \\times 1.5 = 0.75 < 1$$

Doubling labour multiplies total output by $2^{0.75}$ and multiplies hours by $2$, so the average product is multiplied by

$$\\frac{2^{0.75}}{2} = 2^{-0.25} < 1$$

Total output still rises, but not fast enough to keep pace with the hours added. Output per hour falls as labour rises, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 29,
    solution_overview: `Stage one gives $m(L)=AL^{0.5}$ tonnes from $L$ labour hours, stage two gives $g(m)=Bm^{1.5}$ finished units. Records: $m(100)=40$ and $g(9)=54$.

**Part 1: Building the model.**

Let $L$ = labour hours, $m$ = tonnes of material, $g$ = finished units. Each record calibrates one stage, and the two stages then have to be composed — an operation that multiplies exponents and raises the inner coefficient to the outer power.

**1. Translate: the labour record.**

$$A\\sqrt{100} = 40$$

**2. Translate: the material record.**

$$B(9)^{1.5} = 54$$

**Part 2: The model.**

$$m(L) = 4L^{0.5} \\tag{1}$$

$$g(m) = 2m^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The two records give the two coefficients:

$$A = 4, \\qquad B = 2$$

**2.** Compose, raising the inner coefficient to the outer power:

$$g(L) = 2\\left(4L^{0.5}\\right)^{1.5} = 2 \\times 8 \\times L^{0.75} = 16L^{0.75}$$

**3.** The composed exponent drives every scale factor:

$$\\frac{g(2L)}{g(L)} = 2^{0.75} \\approx 1.682 \\quad (+68\\%)$$

**4.** Invert with the reciprocal exponent $\\frac{4}{3}$:

$$L = \\left(\\frac{g}{16}\\right)^{\\frac{4}{3}}, \\qquad g = 432 \\;\\Rightarrow\\; L = 27^{\\frac{4}{3}} = 81$$

**5.** Because the composed exponent is below $1$, the average product falls:

$$\\frac{g(L)}{L} = 16L^{-0.25}, \\qquad 8 \\text{ at } L=16, \\qquad 5.33 \\text{ at } L=81$$

**Answer.** $A = 4$ | $B = 2$ | $g(L) = 16L^{0.75}$ | $432$ units need $81$ labour hours`,
  },
  {
    id: `math-8-30`,
    case_id: `MATH 8.30`,
    title: `Calibrated Demand, Derived Revenue, and a Fixed Charge`,
    context: `A niche publisher faces demand $q(p)=A p^{-1.5}$ copies per month at a price $p>0$, and a price of $4$ sells $250$ copies. Revenue is $R=pq$, and the operation carries a fixed monthly charge of $400$ with no other costs. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue falls as the price rises.`,
      `Revenue is a power function of price with exponent $-0.5$.`,
      `At a price of $25$, monthly revenue is $400$.`,
      `The fixed charge is covered only at prices below $16$.`,
      `Doubling the price halves revenue.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Revenue falls or rises with price according to the exponent of $R(p)=pq(p)$. Multiplying isoelastic demand by price raises the demand exponent by $1$:

$$R(p) = p \\cdot A p^{-1.5} = A p^{-0.5}$$

The coefficient $A$ is positive, and the exponent $-0.5$ is negative, so $R$ falls as $p$ rises. Revenue falls as the price rises, so the statement is True.`,
      `**B.** → True

Revenue $R=pq$ on an isoelastic demand curve is itself a power function of price: multiplying by $p$ adds $1$ to the demand exponent.

$$-1.5 + 1 = -0.5$$

$$R(p) = A p^{-0.5}$$

That is a power function with exponent $-0.5$, so the statement is True.`,
      `**C.** → True

A revenue figure at the new price $25$ needs the demand coefficient first. The observation at price $4$ supplies it:

$$A \\cdot 4^{-1.5} = 250$$

$$4^{-1.5} = \\frac{1}{8}$$

$$\\frac{A}{8} = 250$$

$$A = 2000$$

Revenue is price times quantity, which raises the exponent by $1$:

$$R(p) = 2000 p^{-0.5}$$

At $p=25$:

$$R(25) = 2000 \\cdot 25^{-0.5} = \\frac{2000}{5} = 400$$

Monthly revenue is $400$, so the statement is True.`,
      `**D.** → False

Covering the fixed charge of $400$ is the inequality $R(p) \\ge 400$, which needs the revenue curve. From $q(4)=250$,

$$A \\cdot 4^{-1.5} = 250$$

$$A = 250 \\cdot 8 = 2000$$

$$R(p) = 2000 p^{-0.5}$$

Set revenue equal to the charge:

$$2000 p^{-0.5} = 400$$

$$p^{0.5} = \\frac{2000}{400} = 5$$

$$p = 25$$

Because the revenue exponent is negative, revenue covers the charge at low prices and fails at high prices:

$$R(16) = \\frac{2000}{4} = 500 > 400$$

$$R(36) = \\frac{2000}{6} \\approx 333 < 400$$

The threshold is $p=25$, not $16$, and prices between $16$ and $25$ still cover the charge. The figure $16$ is what appears if the demand exponent $-1.5$ is inverted instead of the revenue exponent. The fixed charge is covered up to $p=25$, so the statement is False.`,
      `**E.** → False

Revenue carries exponent $-0.5$, so doubling the price multiplies revenue by

$$\\frac{R(2p)}{R(p)} = 2^{-0.5} \\approx 0.707$$

Halving revenue would need the factor $0.5$, which occurs only when the price is quadrupled:

$$k^{-0.5} = 0.5$$

$$k = 0.5^{-2} = 4$$

Doubling the price removes about $29\\%$ of revenue, not $50\\%$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 30,
    solution_overview: `Demand is $q(p)=Ap^{-1.5}$ with $q(4)=250$; revenue is $R=pq$; a fixed charge of $400$ must be covered.

**Part 1: Building the model.**

Let $p$ = price, $q$ = copies sold, $R$ = revenue. The exponent is given by the isoelastic form, one observation pins the coefficient, and revenue is a derived power function whose exponent is one higher than demand's.

**1. Translate: the observed price-quantity pair.**

$$A(4)^{-1.5} = 250, \\qquad 4^{-1.5} = \\frac{1}{8}$$

**2. Translate: revenue and the fixed charge.**

$$R(p) = p \\cdot Ap^{-1.5}, \\qquad R(p) \\ge 400$$

**Part 2: The model.**

$$q(p) = 2000\\,p^{-1.5} \\tag{1}$$

$$R(p) = 2000\\,p^{-0.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A = 250 \\times 8 = 2000$$

**2.** Multiplying by $p$ raises the exponent by one, so revenue is still isoelastic:

$$-1.5 + 1 = -0.5$$

**3.** Levels along the revenue curve:

$$R(4) = 1000, \\qquad R(16) = 500, \\qquad R(36) \\approx 333$$

**4.** Invert (2) at the fixed charge by squaring the ratio:

$$p^{0.5} = \\frac{2000}{400} = 5 \\;\\Rightarrow\\; p = 25$$

**5.** Scale factors on the revenue curve are gentler than on demand:

$$2^{-0.5} \\approx 0.707 \\;(-29\\%), \\qquad 4^{-0.5} = 0.5$$

**Answer.** $A = 2000$ | $q(p) = 2000p^{-1.5}$ | $R(p) = 2000p^{-0.5}$ | charge covered for $p < 25$`,
  },
  {
    id: `math-8-31`,
    case_id: `MATH 8.31`,
    title: `Packing Output Recovered From a Shift Extension`,
    context: `A packing station's output follows $N(h)=A h^{0.5}$ items, where $h>0$ is the length of the shift in hours. The shift log never records the coefficient: it notes only that extending a shift from $4$ to $9$ hours added exactly $30$ items to the count. A customer order of $150$ items has to be filled inside a single shift. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the packing law is $30$.`,
      `A nine-hour shift packs $135$ items.`,
      `Doubling the shift length doubles the number of items packed.`,
      `The $150$-item order can be filled inside a $20$-hour shift.`,
      `Items packed per hour rises as the shift lengthens.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The coefficient is recovered from the logged gain of $30$ items, which is a difference of two outputs rather than a single count.

$$N(9)-N(4)=A\\cdot 9^{0.5}-A\\cdot 4^{0.5}$$

$$9^{0.5}=3$$

$$4^{0.5}=2$$

$$A(3-2)=30$$

$$A=30$$

The packing law is $N(h)=30h^{0.5}$, so the statement is True.`,
      `**B.** → False

The nine-hour count follows from the square-root scale between the two logged shifts together with their recorded difference of $30$ items.

$$\\frac{N(9)}{N(4)}=\\left(\\frac{9}{4}\\right)^{0.5}=\\frac{3}{2}$$

$$N(9)-N(4)=30$$

Let $N(4)=x$. Then $\\frac{3}{2}x-x=30$:

$$\\frac{1}{2}x=30$$

$$x=60$$

$$N(9)=\\frac{3}{2}\\cdot 60=90$$

The claimed $135$ is the linear stretch $60\\cdot\\frac{9}{4}=135$. The nine-hour shift packs $90$ items, so the statement is False.`,
      `**C.** → False

Doubling the shift multiplies packed items by $2$ raised to the exponent $0.5$, and the coefficient cancels.

$$\\frac{N(2h)}{N(h)}=\\frac{A(2h)^{0.5}}{Ah^{0.5}}=2^{0.5}$$

$$2^{0.5}\\approx 1.414$$

That factor is not $2$. Doubling the shift multiplies packed items by about $1.414$, so the statement is False.`,
      `**D.** → False

Whether $150$ items fit in $20$ hours is a level check, so the coefficient has to be rebuilt from the logged gain before the law can be evaluated or inverted.

$$A\\cdot 9^{0.5}-A\\cdot 4^{0.5}=30$$

$$A(3-2)=30$$

$$A=30$$

$$N(20)=30\\cdot 20^{0.5}$$

$$20^{0.5}\\approx 4.472$$

$$N(20)\\approx 30\\cdot 4.472=134.16$$

$$134.16<150$$

Inverting the same law at the order size:

$$30h^{0.5}=150$$

$$h^{0.5}=5$$

$$h=25$$

The order needs $25$ hours, so the statement is False.`,
      `**E.** → False

Items per hour is the packing law divided by shift length, which subtracts $1$ from the exponent $0.5$.

$$\\frac{N(h)}{h}=\\frac{Ah^{0.5}}{h}=Ah^{-0.5}$$

The remaining exponent is negative, so the hourly average falls as $h$ grows. The ratio of the two logged hourly rates, with $A$ cancelling, is

$$\\frac{N(9)}{9}\\cdot\\frac{4}{N(4)}=\\left(\\frac{9}{4}\\right)^{-0.5}$$

$$\\left(\\frac{9}{4}\\right)^{-0.5}=\\frac{2}{3}$$

The hourly rate at $9$ hours is only two thirds of the rate at $4$ hours, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 31,
    solution_overview: `Packing output follows $N(h)=Ah^{0.5}$ items on a shift of $h>0$ hours. The log records only that extending a shift from $4$ to $9$ hours added $30$ items, and an order of $150$ items must fit in one shift.

**Part 1: Building the model.**

Let $h$ = shift length in hours and $N(h)$ = items packed. The exponent is given, so one fact is enough to fix the coefficient — but that fact is a difference of two outputs, not a single output.

**1. Translate: the recorded extension.** Write both shifts through the law and subtract:

$$A(9)^{0.5} - A(4)^{0.5} = 30$$

**2. Translate: the order.** The order sets a target output to invert:

$$N(h) = 150$$

**Part 2: The model.**

$$A(3 - 2) = 30 \\tag{1}$$

$$Ah^{0.5} = 150 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$A = 30, \\qquad N(h) = 30\\sqrt{h}$$

**2.** Check the law against the logged shifts:

$$N(4) = 60, \\qquad N(9) = 90, \\qquad 90 - 60 = 30 \\;\\checkmark$$

**3.** Scale factors depend on the exponent alone:

$$\\frac{N(2h)}{N(h)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{N(9)}{N(4)} = \\left(\\tfrac{9}{4}\\right)^{0.5} = 1.5$$

**4.** Equation (2) inverts at the order size, and the $20$-hour limit falls short:

$$\\sqrt{h} = 5 \\;\\Rightarrow\\; h = 25, \\qquad N(20) \\approx 134.2 < 150$$

**5.** The hourly rate is the law divided by $h$, so it decays:

$$\\frac{N(h)}{h} = 30h^{-0.5}: \\quad 15 \\text{ at } h=4, \\quad 10 \\text{ at } h=9, \\quad 6 \\text{ at } h=25$$

**Answer.** $A = 30$ | $N(h) = 30\\sqrt{h}$ | $N(9) = 90$ | the $150$-item order needs $h = 25$ hours`,
  },
  {
    id: `math-8-32`,
    case_id: `MATH 8.32`,
    title: `Drag and Absorbed Power on a Wind-Tunnel Rig`,
    context: `Aerodynamic drag on a test rig follows $F(v)=A v^{r}$ newtons, where $v>0$ is the airspeed in metres per second; neither constant is supplied by the manufacturer. Two wind-tunnel runs are on file: $160$ N at $20$ m/s and $640$ N at $40$ m/s. The rig also reports the power absorbed, $P=F\\cdot v$ watts, and its mounting is rated to $1000$ N. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The drag law is $F(v)=0.4v^{2}$.`,
      `The mounting's $1000$ N rating is first reached at a speed above $55$ m/s.`,
      `The absorbed power is a power function of speed with exponent $3$.`,
      `Doubling the airspeed doubles the absorbed power.`,
      `At $50$ m/s the rig absorbs $25$ kW.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Two wind-tunnel runs fix both unknowns of $F(v)=Av^{r}$: the force ratio isolates the exponent, and either run then fixes the coefficient.

$$\\frac{F(40)}{F(20)}=\\left(\\frac{40}{20}\\right)^{r}=2^{r}$$

$$\\frac{640}{160}=4$$

$$2^{r}=4$$

$$r=2$$

The slower run then fixes the coefficient:

$$A\\cdot 20^{2}=160$$

$$400A=160$$

$$A=0.4$$

The faster run sits on the same law:

$$F(40)=0.4\\cdot 40^{2}=0.4\\cdot 1600=640$$

Both runs match $F(v)=0.4v^{2}$, so the statement is True.`,
      `**B.** → False

The speed at which drag hits $1000$ N is a scale from the faster logged run, using the exponent recovered from the two runs.

$$\\frac{F(40)}{F(20)}=2^{r}$$

$$\\frac{640}{160}=4$$

$$2^{r}=4$$

$$r=2$$

Scaling from $F(40)=640$:

$$640\\left(\\frac{v}{40}\\right)^{2}=1000$$

$$\\left(\\frac{v}{40}\\right)^{2}=\\frac{1000}{640}=\\frac{25}{16}$$

$$\\frac{v}{40}=\\frac{5}{4}$$

$$v=50$$

$50$ is not above $55$. The rating is reached at $50$ metres per second, so the statement is False.`,
      `**C.** → True

Absorbed power is drag times speed, so its exponent is the drag exponent plus one.

$$\\frac{F(40)}{F(20)}=2^{r}$$

$$\\frac{640}{160}=4$$

$$r=2$$

$$P(v)=F(v)\\cdot v=Av^{2}\\cdot v=Av^{3}$$

That is a power function of speed with exponent $3$. The logged runs confirm the extra power of $2$ in the ratio, since $P=F\\cdot v$:

$$\\frac{P(40)}{P(20)}=\\frac{640\\cdot 40}{160\\cdot 20}=8=2^{3}$$

Absorbed power is $Av^{3}$, so the statement is True.`,
      `**D.** → False

Doubling airspeed multiplies absorbed power by $2$ to the power of the exponent of $P$, which is one more than the drag exponent.

$$\\frac{P(2v)}{P(v)}=\\frac{\\bigl(A(2v)^{r}\\bigr)(2v)}{(Av^{r})v}=2^{r+1}$$

From the force runs, $2^{r}=4$, so $r=2$ and $r+1=3$:

$$2^{r+1}=2^{3}=8$$

Eight is not two. Doubling the airspeed multiplies absorbed power by $8$, so the statement is False.`,
      `**E.** → False

Power at $50$ metres per second needs the recovered drag law, then multiplication by speed.

$$\\frac{640}{160}=4$$

$$2^{r}=4$$

$$r=2$$

$$A\\cdot 20^{2}=160$$

$$A=0.4$$

$$P(50)=0.4\\cdot 50^{3}$$

$$50^{3}=125000$$

$$P(50)=0.4\\cdot 125000=50000$$

That is $50$ kilowatts, not $25$. Routing through drag at the same speed gives the same figure:

$$F(50)=0.4\\cdot 50^{2}=1000$$

$$P(50)=1000\\cdot 50=50000$$

The rig absorbs $50$ kW, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 32,
    solution_overview: `Drag follows $F(v)=Av^{r}$ newtons at airspeed $v>0$, with runs of $160$ N at $20$ m/s and $640$ N at $40$ m/s. Absorbed power is $P=F\\cdot v$ and the mounting is rated to $1000$ N.

**Part 1: Building the model.**

Let $v$ = airspeed in m/s, $F(v)$ = drag in newtons, $P(v)$ = absorbed power in watts. Two unknown constants need two facts, and the two runs supply them: their ratio isolates the exponent, either run then fixes the coefficient.

**1. Translate: the two runs.** Ratios kill the coefficient, so read the exponent first:

$$\\frac{F(40)}{F(20)} = 2^{r} = 4$$

**2. Translate: the level.** One run fixes the scale:

$$A(20)^{2} = 160$$

**3. Translate: the rating.** The mounting sets a drag target to invert:

$$F(v) = 1000$$

**Part 2: The model.**

$$2^{r} = 4 \\tag{1}$$

$$400A = 160 \\tag{2}$$

$$Av^{r} = 1000 \\tag{3}$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the drag law:

$$r = 2, \\qquad A = 0.4, \\qquad F(v) = 0.4v^{2}$$

**2.** Multiplying by the speed adds one to the exponent:

$$P(v) = 0.4v^{2}\\cdot v = 0.4v^{3}$$

**3.** Equation (3) inverts at the rating:

$$0.4v^{2} = 1000 \\;\\Rightarrow\\; v^{2} = 2500 \\;\\Rightarrow\\; v = 50$$

**4.** Scale factors follow from the two exponents:

$$\\frac{F(2v)}{F(v)} = 4, \\qquad \\frac{P(2v)}{P(v)} = 8$$

**5.** Evaluate the power at the limiting speed:

$$P(50) = 0.4(125000) = 50000 \\text{ W} = 50 \\text{ kW}$$

**Answer.** $F(v) = 0.4v^{2}$ | $P(v) = 0.4v^{3}$ | rating reached at $v = 50$ m/s | $P(50) = 50$ kW`,
  },
  {
    id: `math-8-33`,
    case_id: `MATH 8.33`,
    title: `Inelastic Demand and Where Revenue Goes`,
    context: `A regional utility faces demand $q(p)=A p^{-0.5}$ units per month at a price $p>0$, and a price of $16$ sells $300$ units. The board wants to know how revenue $R=pq$ behaves along this curve. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue rises as the price rises.`,
      `Raising price by $44\\%$ cuts quantity by exactly $20\\%$.`,
      `To reduce monthly quantity to $200$ units, the price must rise to $40$.`,
      `Quadrupling the price cuts quantity to a quarter.`,
      `Revenue does not depend on the price.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Revenue is price times quantity, so its exponent is the demand exponent plus one.

$$R(p)=p\\cdot Ap^{-0.5}=Ap^{0.5}$$

The exponent $0.5$ is positive, so $R$ rises when $p$ rises. A concrete scale check, with the coefficient cancelling:

$$\\frac{R(4p)}{R(p)}=4^{0.5}=2$$

Revenue doubles when price quadruples, so the statement is True.`,
      `**B.** → False

A $44\\%$ price rise multiplies price by $1.44$, and quantity follows that multiplier raised to $-0.5$.

$$\\frac{q(1.44p)}{q(p)}=1.44^{-0.5}$$

$$1.44=1.2^{2}$$

$$1.44^{-0.5}=\\frac{1}{1.2}=\\frac{5}{6}$$

The quantity that remains is $\\frac{5}{6}$ of the old quantity, so the cut is

$$1-\\frac{5}{6}=\\frac{1}{6}\\approx 16.7\\%$$

The claim says exactly $20\\%$. Quantity falls by about $16.7\\%$, so the statement is False.`,
      `**C.** → False

A target of $200$ units inverts the demand curve, so the coefficient has to be read from the observed pair first.

$$A\\cdot 16^{-0.5}=300$$

$$16^{-0.5}=\\frac{1}{4}$$

$$\\frac{A}{4}=300$$

$$A=1200$$

$$200=1200\\cdot p^{-0.5}$$

$$p^{0.5}=\\frac{1200}{200}=6$$

$$p=36$$

The required price is $36$, not $40$, so the statement is False.`,
      `**D.** → False

Quadrupling the price multiplies quantity by $4$ raised to the demand exponent $-0.5$.

$$\\frac{q(4p)}{q(p)}=4^{-0.5}=\\frac{1}{2}$$

Half is not a quarter. Cutting quantity to a quarter would need exponent $-1$:

$$4^{-1}=\\frac{1}{4}$$

Quantity halves when price quadruples, so the statement is False.`,
      `**E.** → False

Revenue that did not depend on price would be a power of $p$ with exponent $0$.

$$R(p)=p\\cdot Ap^{-0.5}=Ap^{0.5}$$

$$0.5\\neq 0$$

Along any ray, revenue therefore moves with price:

$$\\frac{R(4p)}{R(p)}=4^{0.5}=2$$

Revenue doubles when price quadruples, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 33,
    solution_overview: `Demand is $q(p)=Ap^{-0.5}$ with $q(16)=300$, and revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units sold, $R$ = revenue. The exponent is given, one observation pins the coefficient, and revenue is derived by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A(16)^{-0.5} = 300, \\qquad 16^{-0.5} = \\tfrac{1}{4}$$

**2. Translate: revenue.**

$$R(p) = p \\cdot Ap^{-0.5} = Ap^{0.5}$$

**Part 2: The model.**

$$q(p) = 1200\\,p^{-0.5} \\tag{1}$$

$$R(p) = 1200\\,p^{0.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A = 300 \\times 4 = 1200$$

**2.** The elasticity is the exponent of (1):

$$\\text{El}_{p}q = -0.5 \\quad \\text{(inelastic)}$$

**3.** Quantities along the curve:

$$q(16) = 300, \\qquad q(25) = 240, \\qquad q(64) = 150$$

**4.** Scale factors use the exponent, not the price multiplier:

$$4^{-0.5} = \\tfrac{1}{2}, \\qquad \\left(\\tfrac{25}{16}\\right)^{-0.5} = 0.8$$

**5.** Because $-0.5 + 1 = 0.5 > 0$, revenue rises with price; it would be flat only at elasticity $-1$:

$$R(4) = 2400, \\qquad R(16) = 4800, \\qquad R(64) = 9600$$

**Answer.** $A = 1200$ | $q(p) = 1200p^{-0.5}$ | $R(p) = 1200p^{0.5}$ | elasticity $-0.5$`,
  },
  {
    id: `math-8-34`,
    case_id: `MATH 8.34`,
    title: `Kiln Output Under a Licensed Ceiling`,
    context: `A kiln's daily output follows $y(x)=A x^{\\frac{4}{3}}$ tonnes, where $x>0$ is the fuel feed in cubic metres. A test firing at a feed of $27$ produced $324$ tonnes. The site licence caps daily output at $1024$ tonnes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the output law is $4$.`,
      `The licensed ceiling of $1024$ tonnes is reached at a feed of $64$.`,
      `A fuel feed of $32$ produces half of the licensed output ceiling.`,
      `A feed of $8$ produces $32$ tonnes.`,
      `Increasing fuel feed from $27$ to $54$ raises output by about $125\\%$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The coefficient is the test output divided by the shape factor at feed $27$. The exponent $\\frac{4}{3}$ is a cube root followed by a fourth power.

$$27^{\\frac{4}{3}}=\\left(27^{\\frac{1}{3}}\\right)^{4}$$

$$27^{\\frac{1}{3}}=3$$

$$3^{4}=81$$

$$81A=324$$

$$A=4$$

The output law is $y(x)=4x^{\\frac{4}{3}}$, so the statement is True.`,
      `**B.** → True

The feed at the $1024$-tonne ceiling is a scale from the test firing, using the exponent $\\frac{4}{3}$.

$$\\frac{y(x)}{y(27)}=\\left(\\frac{x}{27}\\right)^{\\frac{4}{3}}$$

$$\\frac{1024}{324}=\\left(\\frac{x}{27}\\right)^{\\frac{4}{3}}$$

$$\\frac{1024}{324}=\\frac{256}{81}$$

$$\\frac{256}{81}=\\left(\\frac{4}{3}\\right)^{4}$$

Taking both sides to the power $\\frac{3}{4}$:

$$\\frac{x}{27}=\\left(\\frac{4}{3}\\right)^{3}=\\frac{64}{27}$$

$$x=64$$

The ceiling binds at a feed of $64$, so the statement is True.`,
      `**C.** → False

Half the licensed ceiling is $512$ tonnes, so the claim is a level at feed $32$ after the test firing has fixed the coefficient.

$$27^{\\frac{4}{3}}=3^{4}=81$$

$$A=\\frac{324}{81}=4$$

$$32=2^{5}$$

$$32^{\\frac{4}{3}}=2^{\\frac{20}{3}}$$

$$2^{\\frac{20}{3}}\\approx 101.59$$

$$y(32)=4\\cdot 101.59\\approx 406.4$$

$$406.4<512$$

The feed that does reach $512$ tonnes is larger:

$$4x^{\\frac{4}{3}}=512$$

$$x^{\\frac{4}{3}}=128$$

$$x=128^{\\frac{3}{4}}=2^{\\frac{21}{4}}\\approx 38.05$$

Feed $32$ produces about $406$ tonnes, not $512$, so the statement is False.`,
      `**D.** → False

A feed of $8$ is a perfect cube, so the output is exact once the coefficient is in hand.

$$27^{\\frac{4}{3}}=3^{4}=81$$

$$A=\\frac{324}{81}=4$$

$$8^{\\frac{4}{3}}=\\left(8^{\\frac{1}{3}}\\right)^{4}=2^{4}=16$$

$$y(8)=4\\cdot 16=64$$

The claimed $32$ would be a linear reading of the feed, or half of the true output. The kiln produces $64$ tonnes, so the statement is False.`,
      `**E.** → False

Doubling the fuel feed multiplies output by $2$ raised to the exponent $\\frac{4}{3}$, and the coefficient cancels.

$$\\frac{y(54)}{y(27)}=2^{\\frac{4}{3}}$$

$$2^{\\frac{4}{3}}\\approx 2.5198$$

A percentage rise is that factor minus one:

$$(2.5198-1)\\times 100\\%\\approx 152\\%$$

The claim is about $125\\%$. Output rises by about $152\\%$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 34,
    solution_overview: `Kiln output is $y(x)=Ax^{\\frac{4}{3}}$ tonnes for a fuel feed $x>0$, with a test firing $y(27)=324$ and a licensed ceiling of $1024$ tonnes.

**Part 1: Building the model.**

Let $x$ = fuel feed and $y(x)$ = daily output. The exponent is given and exceeds $1$, so the kiln shows increasing returns; the test firing pins the coefficient and the licence gives a level to invert.

**1. Translate: the test firing.** The feed is a perfect cube, so the shape factor is exact:

$$27^{\\frac{4}{3}} = 3^{4} = 81, \\qquad 81A = 324$$

**2. Translate: the licence.**

$$4x^{\\frac{4}{3}} \\le 1024$$

**Part 2: The model.**

$$y(x) = 4x^{\\frac{4}{3}} \\tag{1}$$

$$x^{\\frac{4}{3}} \\le 256 \\tag{2}$$

**Part 3: Solve.**

**1.** The test firing gives the coefficient:

$$A = 4$$

**2.** Levels at perfect cubes:

$$y(8) = 64, \\qquad y(27) = 324, \\qquad y(64) = 1024$$

**3.** The scale factor exceeds the multiplier because the exponent exceeds $1$:

$$2^{\\frac{4}{3}} \\approx 2.52 \\quad (+152\\%)$$

**4.** Invert (2) with the reciprocal exponent $\\frac{3}{4}$:

$$x = 256^{\\frac{3}{4}} = 64$$

**5.** Fuel efficiency improves with scale, since dividing by $x$ leaves a positive exponent:

$$\\frac{y(x)}{x} = 4x^{\\frac{1}{3}}, \\qquad 8 \\to 12 \\to 16 \\text{ at feeds } 8, 27, 64$$

**Answer.** $A = 4$ | $y(x) = 4x^{\\frac{4}{3}}$ | licence ceiling at feed $x = 64$`,
  },
  {
    id: `math-8-35`,
    case_id: `MATH 8.35`,
    title: `A Pair of Power Functions That Undo Each Other`,
    context: `A calibration stage converts a raw reading $x>0$ into an index by $f(x)=9x^{\\frac{2}{3}}$, and a reporting stage converts an index $y>0$ back into raw units by $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$. The lab wants to know what happens when the two stages are applied one after the other. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Applying the reporting stage to the calibration stage returns the original reading.`,
      `The composition of the two stages is a power function with exponent $1$.`,
      `Starting with a raw reading of $125$, the two stages produce index $225$ and then return raw reading $125$.`,
      `For a raw input of $50$, applying both stages returns a value $8\\%$ above the input.`,
      `Applying the stages in the other order gives something other than the original input.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The stated order substitutes the calibration output into the reporting rule.

$$g(f(x))=\\frac{\\left(9x^{\\frac{2}{3}}\\right)^{\\frac{3}{2}}}{27}$$

$$=\\frac{9^{\\frac{3}{2}}x^{(\\frac{2}{3})(\\frac{3}{2})}}{27}$$

$$9^{\\frac{3}{2}}=(3^{2})^{\\frac{3}{2}}=3^{3}=27$$

$$\\frac{2}{3}\\times\\frac{3}{2}=1$$

$$g(f(x))=\\frac{27x}{27}=x$$

The composition returns the original reading, so the statement is True.`,
      `**B.** → True

Composing two power functions yields a power function whose exponent is the product of the two exponents.

$$\\frac{2}{3}\\times\\frac{3}{2}=1$$

The constants cancel as well: $9^{\\frac{3}{2}}=27$, so the composition is $1\\cdot x^{1}$. That is a power function with exponent $1$, so the statement is True.`,
      `**C.** → True

A cube input keeps both stages exact, so the round trip can be taken one stage at a time.

$$125^{\\frac{2}{3}}=\\left(125^{\\frac{1}{3}}\\right)^{2}=5^{2}=25$$

$$f(125)=9\\cdot 25=225$$

$$225^{\\frac{1}{2}}=15$$

$$g(225)=\\frac{225^{\\frac{3}{2}}}{27}=\\frac{15^{3}}{27}$$

$$15^{3}=3375$$

$$\\frac{3375}{27}=125$$

The stages pass through index $225$ and return the original $125$, so the statement is True.`,
      `**D.** → False

The two stages compose to the identity, so every positive input comes back unchanged.

$$g(f(x))=\\frac{\\left(9x^{\\frac{2}{3}}\\right)^{\\frac{3}{2}}}{27}=\\frac{27x}{27}=x$$

$$g(f(50))=50$$

An $8\\%$ overshoot would be $54$. The composed value equals $50$ exactly, so the statement is False.`,
      `**E.** → False

The reverse order substitutes the reporting output into the calibration rule.

$$f(g(y))=9\\left(\\frac{y^{\\frac{3}{2}}}{27}\\right)^{\\frac{2}{3}}$$

$$=\\frac{9y^{(\\frac{3}{2})(\\frac{2}{3})}}{27^{\\frac{2}{3}}}$$

$$27^{\\frac{2}{3}}=(3^{3})^{\\frac{2}{3}}=3^{2}=9$$

$$\\frac{3}{2}\\times\\frac{2}{3}=1$$

$$f(g(y))=\\frac{9y}{9}=y$$

The reverse order also returns the original input, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 35,
    solution_overview: `The calibration stage is $f(x)=9x^{\\frac{2}{3}}$ and the reporting stage is $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$, both on positive inputs.

**Part 1: Building the model.**

Let $x$ = raw reading and $y$ = index. Composing power functions multiplies their exponents and raises the inner coefficient to the outer exponent, so both the exponents and the constants must be tracked separately.

**1. Translate: the exponents.** They are reciprocals:

$$\\frac{2}{3} \\times \\frac{3}{2} = 1$$

**2. Translate: the constants.** They are matched:

$$9^{\\frac{3}{2}} = 27, \\qquad 27^{\\frac{2}{3}} = 9$$

**Part 2: The model.**

$$g\\big(f(x)\\big) = \\frac{\\left(9x^{\\frac{2}{3}}\\right)^{\\frac{3}{2}}}{27} \\tag{1}$$

$$f\\big(g(y)\\big) = 9\\left(\\frac{y^{\\frac{3}{2}}}{27}\\right)^{\\frac{2}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** Simplify (1):

$$\\frac{27x}{27} = x$$

**2.** Simplify (2):

$$\\frac{9y}{9} = y$$

**3.** Both orders give the identity, so the two stages are inverse power functions on $x>0$.

**4.** Spot values confirm the pairing:

$$f(8) = 9 \\times 4 = 36, \\qquad g(36) = \\frac{216}{27} = 8$$

**5.** The general lesson: composing multiplies exponents, so an inverse requires reciprocal exponents *and* constants satisfying $A^{s}B=1$, which is exactly what $9$ and $\\frac{1}{27}$ do here.

**Answer.** $g(f(x)) = x$ | $f(g(y)) = y$ | composed exponent $1$ | $f(8)=36$, $g(36)=8$`,
  },
  {
    id: `math-8-36`,
    case_id: `MATH 8.36`,
    title: `Two Ranking Algorithms That Swap Places`,
    context: `Two ranking algorithms are scored against a query load $x>0$. Algorithm S obeys $S(x)=a x^{0.5}$, and a benchmark at load $4$ scored $16$. Algorithm T's score is proportional to $x^{1.5}$, and the same benchmark load scored $8$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two algorithms score equally at a load of $8$.`,
      `The two algorithms score equally at two different positive loads.`,
      `Algorithm S scores higher at every load above the crossing point.`,
      `At a load of $4$ the two algorithms score equally.`,
      `The ratio of the two scores is the same at every load.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

A tie at load $8$ means the two calibrated scores take the same value there, so both coefficients have to be read from the benchmark before that load can be tested.

For algorithm S:

$$a \\cdot 4^{0.5} = 16$$

$$4^{0.5} = 2$$

$$a = \\frac{16}{2} = 8$$

For algorithm T:

$$k \\cdot 4^{1.5} = 8$$

$$4^{1.5} = 8$$

$$k = \\frac{8}{8} = 1$$

The laws are $S(x)=8x^{0.5}$ and $T(x)=x^{1.5}$. Setting them equal:

$$8x^{0.5} = x^{1.5}$$

Because $x>0$, divide by $x^{0.5}$:

$$8 = x$$

At that load the two scores are the same expression:

$$S(8) = 8 \\cdot 8^{0.5} = 8^{1.5}$$

$$T(8) = 8^{1.5}$$

The algorithms score equally at load $8$, so the statement is True.`,
      `**B.** → False

The number of ties is the number of positive roots of $S(x)=T(x)$, not a count of recorded loads.

The benchmark scores recover the coefficients by division:

$$a = \\frac{16}{\\sqrt{4}} = \\frac{16}{2} = 8$$

$$k = \\frac{8}{4^{1.5}} = \\frac{8}{8} = 1$$

Equality then reads

$$8x^{0.5} = x^{1.5}$$

$$x^{1.5-0.5} = 8$$

$$x = 8$$

On $x>0$ that is a single root. Two different positive loads would require two roots, so the statement is False.`,
      `**C.** → False

Which algorithm leads past the crossing is the sign of $T-S$, which is easiest to read from the ratio of the two calibrated laws.

Algorithm S at load $4$ is a square-root evaluation:

$$a \\cdot \\sqrt{4} = 16$$

$$2a = 16$$

$$a = 8$$

Algorithm T at the same load is a $1.5$-power:

$$k \\cdot 4^{1.5} = 8$$

$$k \\cdot 8 = 8$$

$$k = 1$$

$$\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}$$

That ratio is greater than $1$ precisely when $x>8$, so $T$ leads once the crossing is passed. A load just above $8$:

$$S(9) = 8 \\cdot 9^{0.5} = 8 \\cdot 3 = 24$$

$$T(9) = 9^{1.5} = 27$$

Algorithm T is already ahead, so the statement is False.`,
      `**D.** → False

Load $4$ is the shared benchmark, and both scores are already recorded there.

$$S(4) = 16$$

$$T(4) = 8$$

Those values are not equal, so the statement is False.`,
      `**E.** → False

A constant score ratio is what two power laws produce only when they share an exponent.

Relative to the recorded load of $4$, the ratio at a general load is

$$\\frac{T(x)}{S(x)} = \\frac{T(4)}{S(4)}\\left(\\frac{x}{4}\\right)^{1.5-0.5}$$

$$\\frac{T(4)}{S(4)} = \\frac{8}{16} = \\frac{1}{2}$$

$$\\left(\\frac{x}{4}\\right)^{1.5-0.5} = \\frac{x}{4}$$

$$\\frac{T(x)}{S(x)} = \\frac{1}{2} \\cdot \\frac{x}{4} = \\frac{x}{8}$$

That quantity equals $\\frac{1}{2}$ at load $4$, equals $1$ at load $8$, and equals $2$ at load $16$. The ratio is not constant, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 36,
    solution_overview: `Algorithm S obeys $S(x)=ax^{0.5}$ with $S(4)=16$; algorithm T obeys $T(x)=kx^{1.5}$ with $T(4)=8$.

**Part 1: Building the model.**

Let $x$ = query load, $S$ and $T$ = the two scores. Each algorithm has a given exponent and one benchmark, so both coefficients follow immediately; the interesting work is comparing the two laws.

**1. Translate: algorithm S's benchmark.**

$$a\\sqrt{4} = 16$$

**2. Translate: algorithm T's benchmark.**

$$k(4)^{1.5} = 8$$

**Part 2: The model.**

$$S(x) = 8x^{0.5} \\tag{1}$$

$$T(x) = x^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The benchmarks give the coefficients:

$$a = 8, \\qquad k = 1$$

**2.** Locate every crossing by cancelling the shared power:

$$8x^{0.5} = x^{1.5} \\;\\Rightarrow\\; x = 8, \\qquad S(8) = T(8) \\approx 22.63$$

**3.** The ratio settles the ordering everywhere and shows the crossing is unique:

$$\\frac{T(x)}{S(x)} = \\frac{x}{8}$$

**4.** Read the ordering off that ratio:

$$x < 8 \\;\\Rightarrow\\; S > T, \\qquad x > 8 \\;\\Rightarrow\\; T > S$$

**5.** Because the exponents differ, no coefficient could keep S ahead indefinitely; the coefficient only moves the crossing, which sits at $x=a^{\\frac{1}{(1.5-0.5)}}=8$.

**Answer.** $S(x) = 8x^{0.5}$ | $T(x) = x^{1.5}$ | single crossing at $x = 8$`,
  },
  {
    id: `math-8-37`,
    case_id: `MATH 8.37`,
    title: `Server Fleet Capacity Beneath a Contracted Ceiling`,
    context: `A hosting platform's sustained capacity follows $C(m)=A m^{0.8}$ requests per second, where $m>0$ is the number of machines. A fleet of $32$ machines sustains $80$ requests per second. The support contract will not certify more than $500$ requests per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The capacity ratio $\\frac{C(64)}{C(32)}$ is less than $2$.`,
      `Doubling the fleet raises capacity by about $74\\%$.`,
      `The contracted ceiling of $500$ binds from about $250$ machines.`,
      `A fleet of $243$ machines sustains $486$ requests per second.`,
      `Doubling the fleet from $32$ to $64$ machines cuts capacity per machine by less than $10\\%$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

A ratio of capacities on the same power law cancels the unknown coefficient and leaves only the exponent on the fleet ratio.

$$\\frac{C(64)}{C(32)} = \\left(\\frac{64}{32}\\right)^{0.8} = 2^{0.8}$$

Because the exponent $0.8$ is less than $1$, this factor is already less than $2$:

$$2^{0.8} \\approx 1.741 < 2$$

Capacity rises by a factor below two, so the statement is True.`,
      `**B.** → True

The percentage effect of a doubling is the scale factor minus one, so the same power of two governs the claim.

$$\\frac{C(2m)}{C(m)} = 2^{0.8} \\approx 1.741$$

$$(1.741 - 1) \\times 100\\% = 74.1\\%$$

Capacity rises by about $74\\%$, so the statement is True.`,
      `**C.** → False

The fleet at which the ceiling binds is the inverse of the calibrated law, not a proportional scaling from $80$ up to $500$.

A fleet of $32$ is $2^{5}$, so the shape factor is exact:

$$32^{0.8} = \\left(2^{5}\\right)^{\\frac{4}{5}} = 2^{4} = 16$$

$$A = \\frac{80}{16} = 5$$

The ceiling equation is

$$5m^{0.8} = 500$$

$$m^{0.8} = 100$$

$$m = 100^{1.25}$$

$$100^{1.25} = (10^{2})^{\\frac{5}{4}} = 10^{2.5}$$

$$10^{2.5} = 100\\sqrt{10} \\approx 316.2$$

At the claimed $250$ machines:

$$250^{0.8} \\approx 82.86$$

$$C(250) = 5 \\cdot 82.86 \\approx 414$$

That is still below $500$. The ceiling binds near $316$ machines, so the statement is False.`,
      `**D.** → False

A fleet of $243$ is $3^{5}$, so the exponent $0.8=\\frac{4}{5}$ resolves with no rounding.

$$243^{0.8} = \\left(3^{5}\\right)^{\\frac{4}{5}} = 3^{4} = 81$$

The recorded $32$-machine fleet fixes the coefficient by the fifth-power identity $32^{0.8}=16$:

$$A = \\frac{80}{16} = 5$$

$$C(243) = 5 \\cdot 81 = 405$$

The claimed $486$ is $6 \\times 81$, the figure a coefficient of $6$ would give. Capacity is $405$ requests per second, so the statement is False.`,
      `**E.** → False

Capacity per machine is $\\frac{C(m)}{m}$, which lowers the exponent from $0.8$ to $-0.2$. Doubling the fleet therefore multiplies capacity per machine by $2^{-0.2}$, and the coefficient cancels.

$$\\frac{\\frac{C(64)}{64}}{\\frac{C(32)}{32}} = 2^{-0.2}$$

$$2^{-0.2} \\approx 0.8706$$

The surviving fraction is a cut of

$$(1 - 0.8706) \\times 100\\% \\approx 12.9\\%$$

That cut is larger than $10\\%$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 37,
    solution_overview: `Capacity follows $C(m)=Am^{0.8}$ requests per second for $m$ machines, with $C(32)=80$ and a contracted ceiling of $500$.

**Part 1: Building the model.**

Let $m$ = machines and $C(m)$ = sustained capacity. The exponent is given and lies below $1$, so the platform faces diminishing returns; the recorded fleet fixes the coefficient and the ceiling has to be inverted into a fleet size.

**1. Translate: the recorded fleet.** The fleet size is a fifth power, so the shape factor is exact:

$$32^{0.8} = \\left(2^{5}\\right)^{\\frac{4}{5}} = 16, \\qquad 16A = 80$$

**2. Translate: the contracted ceiling.**

$$5m^{0.8} \\le 500$$

**Part 2: The model.**

$$C(m) = 5m^{0.8} \\tag{1}$$

$$m^{0.8} \\le 100 \\tag{2}$$

**Part 3: Solve.**

**1.** The recorded fleet gives the coefficient:

$$A = 5$$

**2.** Levels at fifth powers stay exact:

$$C(243) = 5 \\times 3^{4} = 405$$

**3.** Scale factors show the sub-linear growth:

$$2^{0.8} \\approx 1.741 \\;(+74\\%), \\qquad 10^{0.8} \\approx 6.31$$

**4.** Invert (2) with the reciprocal exponent $1.25$:

$$m = 100^{1.25} = 10^{2.5} \\approx 316.2$$

**5.** Capacity per machine carries a negative exponent, so the marginal value of a machine keeps falling:

$$\\frac{C(m)}{m} = 5m^{-0.2}, \\qquad 2.5 \\text{ at } m=32, \\qquad 1.67 \\text{ at } m=243$$

**Answer.** $A = 5$ | $C(m) = 5m^{0.8}$ | ceiling binds at $m \\approx 316$ machines`,
  },
  {
    id: `math-8-38`,
    case_id: `MATH 8.38`,
    title: `Hiring Against a Square-Root Revenue Curve`,
    context: `A seasonal workshop earns revenue $R(L)=120 L^{0.5}$ from $L>0$ hours of hired labour and pays a wage of $6$ per hour. The owner judges a season by the net gain $R(L)-6L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The net gain is zero at $400$ hours.`,
      `At $100$ hours the net gain is $600$.`,
      `At $900$ hours the net gain is negative.`,
      `The net gain rises throughout the range from $0$ to $400$ hours.`,
      `Revenue per hour of labour is the same at every staffing level.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Break-even is the staffing level at which revenue equals the wage bill.

$$120 L^{0.5} = 6L$$

On $L>0$, divide by $L^{0.5}$:

$$120 = 6 L^{0.5}$$

$$L^{0.5} = 20$$

$$L = 400$$

Checking both sides:

$$R(400) = 120 \\cdot 20 = 2400$$

$$6 \\cdot 400 = 2400$$

The two sides agree, so the statement is True.`,
      `**B.** → True

The net gain at $100$ hours is revenue there minus the wage bill there.

$$R(100) = 120 \\cdot 100^{0.5} = 120 \\cdot 10 = 1200$$

$$6 \\cdot 100 = 600$$

$$1200 - 600 = 600$$

The net gain is $600$, so the statement is True.`,
      `**C.** → True

At $900$ hours the two given laws have to be evaluated separately, because revenue grows as a square root while the wage bill grows in proportion to hours.

$$R(900) = 120 \\cdot 900^{0.5} = 120 \\cdot 30 = 3600$$

$$6 \\cdot 900 = 5400$$

$$3600 - 5400 = -1800$$

The net gain is negative, so the statement is True.`,
      `**D.** → False

Whether the net gain rises across a range is a question about its shape, not its sign. Write $\\Pi(L)=R(L)-6L$ and sample it at several staffing levels inside $0$ to $400$ hours.

At $100$ hours:

$$R(100) = 120 \\cdot 10 = 1200$$

$$6 \\cdot 100 = 600$$

$$\\Pi(100) = 1200 - 600 = 600$$

At $225$ hours:

$$R(225) = 120 \\cdot 15 = 1800$$

$$6 \\cdot 225 = 1350$$

$$\\Pi(225) = 1800 - 1350 = 450$$

At $324$ hours:

$$R(324) = 120 \\cdot 18 = 2160$$

$$6 \\cdot 324 = 1944$$

$$\\Pi(324) = 2160 - 1944 = 216$$

Net gain falls from $600$ to $216$ while still inside the range, so the statement is False.`,
      `**E.** → False

Revenue per hour of labour is revenue divided by $L$, which lowers the exponent from $0.5$ to $-0.5$.

$$\\frac{R(L)}{L} = \\frac{120 L^{0.5}}{L} = 120 L^{-0.5}$$

At three staffing levels:

$$\\frac{R(100)}{100} = 120 \\cdot 100^{-0.5} = 12$$

$$\\frac{R(400)}{400} = 120 \\cdot 400^{-0.5} = 6$$

$$\\frac{R(900)}{900} = 120 \\cdot 900^{-0.5} = 4$$

The average falls from $12$ to $4$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 38,
    solution_overview: `Revenue is $R(L)=120L^{0.5}$ from $L>0$ labour hours, wages cost $6$ per hour, and the net gain is $R(L)-6L$.

**Part 1: Building the model.**

Let $L$ = labour hours, $R$ = revenue, $\\Pi$ = net gain. Both constants are given, so the task is a comparison between an exponent of $0.5$ and an exponent of $1$.

**1. Translate: the net gain.**

$$\\Pi(L) = 120L^{0.5} - 6L$$

**2. Translate: break-even.**

$$120\\sqrt{L} = 6L$$

**Part 2: The model.**

$$\\Pi(L) = 120\\sqrt{L} - 6L \\tag{1}$$

$$\\Pi(L) = 6\\sqrt{L}\\left(20 - \\sqrt{L}\\right) \\tag{2}$$

**Part 3: Solve.**

**1.** Solve break-even on $L>0$:

$$\\sqrt{L} = 20 \\;\\Rightarrow\\; L = 400, \\qquad R = \\text{wages} = 2400$$

**2.** The factored form (2) fixes the sign of the net gain:

$$0 < L < 400 \\;\\Rightarrow\\; \\Pi > 0, \\qquad L > 400 \\;\\Rightarrow\\; \\Pi < 0$$

**3.** Positive is not the same as rising — the net gain turns over inside the profitable range:

$$\\Pi(100) = 600, \\qquad \\Pi(225) = 450, \\qquad \\Pi(324) = 216, \\qquad \\Pi(400) = 0$$

**4.** Losses widen beyond break-even:

$$\\Pi(900) = 3600 - 5400 = -1800$$

**5.** The driver is the falling average revenue per hour, which crosses the wage exactly at break-even:

$$\\frac{R(L)}{L} = 120L^{-0.5}: \\quad 12 \\text{ at } 100, \\quad 6 \\text{ at } 400, \\quad 4 \\text{ at } 900$$

**Answer.** break-even at $L = 400$ hours | peak net gain $600$ at $L = 100$ | $\\Pi(900) = -1800$`,
  },
  {
    id: `math-8-39`,
    case_id: `MATH 8.39`,
    title: `Splitting an Order Between Two Quadratic-Cost Plants`,
    context: `A firm must produce $60$ units in total and can split them between two plants. Plant 1's cost is $C_1(q)=0.5q^{2}$ and plant 2's cost is $C_2(q)=0.25q^{2}$, where $q$ is that plant's own output. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Concentrating all $60$ units in the cheaper plant costs $900$.`,
      `An even split between the plants costs less than a $20$–$40$ split.`,
      `Doubling a plant's output doubles that plant's cost.`,
      `The $20$–$40$ split costs $650$.`,
      `Plant 2's cost per unit does not depend on how much it produces.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Concentrating the order means sending all $60$ units to a single plant. Plant 2 has the smaller coefficient, so it is the cheaper plant for a given output.

$$C_2(60) = 0.25 \\cdot 60^{2}$$

$$60^{2} = 3600$$

$$0.25 \\cdot 3600 = 900$$

The other corner is $C_1(60)=0.5 \\cdot 3600=1800$, which is larger. Concentrating in plant 2 costs $900$, so the statement is True.`,
      `**B.** → False

Ranking two splits means pricing each one through both quadratic laws and adding the plant costs.

An even split of $30$ units each:

$$C_1(30) = 0.5 \\cdot 30^{2} = 0.5 \\cdot 900 = 450$$

$$C_2(30) = 0.25 \\cdot 900 = 225$$

$$450 + 225 = 675$$

A split of $20$ at plant 1 and $40$ at plant 2:

$$C_1(20) = 0.5 \\cdot 20^{2} = 0.5 \\cdot 400 = 200$$

$$C_2(40) = 0.25 \\cdot 40^{2} = 0.25 \\cdot 1600 = 400$$

$$200 + 400 = 600$$

The even split costs $675$, which is not less than $600$, so the statement is False.`,
      `**C.** → False

Both cost laws carry exponent $2$, so doubling a plant's own output multiplies that plant's cost by $2^{2}$.

$$\\frac{C_i(2q)}{C_i(q)} = 2^{2} = 4$$

At plant 2, for a concrete pair of outputs:

$$C_2(20) = 0.25 \\cdot 400 = 100$$

$$C_2(40) = 0.25 \\cdot 1600 = 400$$

Cost quadruples rather than doubling, so the statement is False.`,
      `**D.** → False

The split that sends $20$ units to plant 1 and $40$ to plant 2 is priced plant by plant.

$$C_1(20) = 0.5 \\cdot 400 = 200$$

$$C_2(40) = 0.25 \\cdot 1600 = 400$$

$$200 + 400 = 600$$

The claimed total is $650$, not $600$, so the statement is False.`,
      `**E.** → False

Plant 2's cost per unit is its cost law divided by its own output, which lowers the exponent from $2$ to $1$.

$$\\frac{C_2(q)}{q} = \\frac{0.25 q^{2}}{q} = 0.25 q$$

At three output levels:

$$\\frac{C_2(20)}{20} = 0.25 \\cdot 20 = 5$$

$$\\frac{C_2(40)}{40} = 10$$

$$\\frac{C_2(60)}{60} = 15$$

Unit cost triples across that range, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 39,
    solution_overview: `Sixty units must be split between plants with costs $C_1(q)=0.5q^{2}$ and $C_2(q)=0.25q^{2}$.

**Part 1: Building the model.**

Let $q$ = units at plant 1, so $60-q$ go to plant 2. Both cost laws are power functions with exponent $2$, so costs are convex and the total depends on how the order is divided.

**1. Translate: the total cost of a split.**

$$K(q) = 0.5q^{2} + 0.25(60-q)^{2}$$

**2. Translate: the corner options.**

$$K(0) = 0.25(3600) = 900, \\qquad K(60) = 0.5(3600) = 1800$$

**Part 2: The model.**

$$K(q) = 0.5q^{2} + 0.25(60-q)^{2} \\tag{1}$$

$$\\frac{C_i(2q)}{C_i(q)} = 2^{2} = 4 \\tag{2}$$

**Part 3: Solve.**

**1.** Price the candidate splits:

$$K(30) = 450 + 225 = 675, \\qquad K(20) = 200 + 400 = 600$$

**2.** Rank them against the corner:

$$600 < 675 < 900 < 1800$$

**3.** The best division loads the cheaper plant twice as heavily, matching the ratio of the coefficients:

$$q : (60-q) = 20 : 40 = 1 : 2$$

**4.** Convexity is what rewards splitting — each plant's cost quadruples when its own load doubles, by (2).

**5.** Unit costs rise with each plant's own output, which is why neither corner is efficient:

$$\\frac{C_1(q)}{q} = 0.5q, \\qquad \\frac{C_2(q)}{q} = 0.25q$$

**Answer.** cheapest split $20$ at plant 1 and $40$ at plant 2, costing $600$ | even split $675$ | all at plant 2 $900$`,
  },
  {
    id: `math-8-40`,
    case_id: `MATH 8.40`,
    title: `Testing Whether Field Data Fit One Power Law`,
    context: `A laboratory records four measurements of a response $y$ against an input $x$: $(4,\\,24)$, $(16,\\,192)$, $(9,\\,81)$ and a planned run at $x=25$. An analyst fits a power law $y=Ax^{r}$ using the first two measurements only. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The first two measurements are consistent with a power law of exponent $1.5$.`,
      `The fitted coefficient is $3$.`,
      `The measurement at $x=9$ contradicts the fitted law.`,
      `The fitted law predicts $y=300$ at $x=25$.`,
      `The same two measurements would fit an exponent of $2$ equally well.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Two measurements determine an exponent because their ratio cancels the coefficient.

$$\\frac{A \\cdot 16^{r}}{A \\cdot 4^{r}} = \\frac{192}{24}$$

$$\\left(\\frac{16}{4}\\right)^{r} = 8$$

$$4^{r} = 8$$

Write both sides as powers of $2$:

$$(2^{2})^{r} = 2^{3}$$

$$2^{2r} = 2^{3}$$

$$2r = 3$$

$$r = 1.5$$

The first two measurements are consistent with exponent $1.5$, so the statement is True.`,
      `**B.** → True

With two points on a power law, the coefficient is the response divided by the shape factor, once the exponent is known.

The ratio condition is $4^{r}=8$. Direct inspection gives $4^{1.5}=8$, so $r=1.5$. The first point then reads

$$A \\cdot 4^{1.5} = 24$$

$$4^{1.5} = 8$$

$$A = \\frac{24}{8} = 3$$

The second point confirms the same coefficient:

$$\\frac{192}{16^{1.5}} = \\frac{192}{64} = 3$$

Both measurements give $A=3$, so the statement is True.`,
      `**C.** → False

The measurement at $x=9$ was held out of the fit, so it is a test of the two-point law rather than an input to it.

From the fitted pair, $4^{r}=8$ forces $r=1.5$, and $24=A\\cdot 8$ forces $A=3$. The fitted law is therefore $y=3x^{1.5}$.

$$9^{0.5} = 3$$

$$9^{1.5} = 3^{3} = 27$$

$$y = 3 \\cdot 27 = 81$$

The recorded response at $x=9$ is also $81$. The point sits on the curve, so the statement is False.`,
      `**D.** → False

A prediction at $x=25$ uses the law fitted from the first two measurements.

The input ratio $4$ with response ratio $8$ is $4^{1.5}=8$, so $r=1.5$. The second measurement then gives the coefficient:

$$A = \\frac{192}{16^{1.5}} = \\frac{192}{64} = 3$$

The forecast is

$$25^{0.5} = 5$$

$$25^{1.5} = 5^{3} = 125$$

$$y = 3 \\cdot 125 = 375$$

The claimed value is $300$, not $375$, so the statement is False.`,
      `**E.** → False

Uniqueness of the exponent is settled by the ratio equation, because $4^{r}$ is strictly increasing in $r$ and can equal $8$ only once.

An exponent of $2$ would require

$$\\left(\\frac{16}{4}\\right)^{2} = 4^{2} = 16$$

The observed response ratio is $8$, not $16$. Forcing the coefficient from the first point with $r=2$ then misses the second:

$$A = \\frac{24}{4^{2}} = \\frac{24}{16} = 1.5$$

$$1.5 \\cdot 16^{2} = 1.5 \\cdot 256 = 384$$

$$384 \\ne 192$$

The two measurements do not fit exponent $2$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 40,
    solution_overview: `Measurements $(4,24)$ and $(16,192)$ are used to fit $y=Ax^{r}$; the point $(9,81)$ and a planned run at $x=25$ test the fit.

**Part 1: Building the model.**

Let $x$ = input and $y$ = response. Two unknowns need two measurements, and the standard route is to take the ratio first — it eliminates the coefficient and isolates the exponent.

**1. Translate: the ratio of the two measurements.**

$$\\left(\\frac{16}{4}\\right)^{r} = \\frac{192}{24}$$

**2. Translate: the coefficient from either point.**

$$A(4)^{r} = 24$$

**Part 2: The model.**

$$4^{r} = 8 \\tag{1}$$

$$y = A x^{r} \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) has a unique solution:

$$2^{2r} = 2^{3} \\;\\Rightarrow\\; r = 1.5$$

**2.** Either measurement then gives the same coefficient:

$$A = \\frac{24}{8} = 3 = \\frac{192}{64}, \\qquad y = 3x^{1.5}$$

**3.** The held-out measurement tests the form:

$$3 \\times 9^{1.5} = 3 \\times 27 = 81 \\;\\checkmark$$

**4.** The planned run is a prediction, not a fit:

$$3 \\times 25^{1.5} = 3 \\times 125 = 375$$

**5.** No other exponent fits: $r=2$ would demand a response ratio of $16$ and would miss the second measurement by a factor of two.

**Answer.** $r = 1.5$ | $A = 3$ | $y = 3x^{1.5}$ | predicted $y(25) = 375$`,
  },
  {
    id: `math-8-41`,
    case_id: `MATH 8.41`,
    title: `Turning a Negative-Power Demand Curve Around`,
    context: `A component supplier faces demand $q(p)=A p^{-2}$ units, where $p>0$ is the price. At a price of $5$ the supplier sells $100$ units. Procurement wants the relationship written the other way round, with price and revenue expressed as functions of the quantity sold. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The inverse demand curve is $p=50q^{-0.5}$.`,
      `Revenue expressed through quantity is $R=50q^{0.5}$.`,
      `Doubling the quantity sold raises revenue by about $41.4\\%$.`,
      `When the curve sells $25$ units, revenue is $300$.`,
      `The price elasticity of demand is $-0.5$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The inverse demand curve is the same relation with price as the subject, so the observed pair $(p,q)=(5,100)$ is used to pin $A$ and then the equation is solved for $p$.

$$q(p)=A p^{-2}$$

$$A \\cdot 5^{-2}=100$$

$$A \\cdot \\frac{1}{25}=100$$

$$A=2500$$

$$q=\\frac{2500}{p^{2}}$$

$$p^{2}=\\frac{2500}{q}$$

$$p=\\frac{50}{\\sqrt{q}}$$

$$p=50 q^{-0.5}$$

The inverse reproduces the observed pair:

$$p(100)=\\frac{50}{\\sqrt{100}}=\\frac{50}{10}=5$$

The inverse curve is $50 q^{-0.5}$, so the statement is True.`,
      `**B.** → True

Revenue as a function of quantity is quantity times the inverse-demand price. The observed pair first recovers the coefficient of demand.

$$100=A \\cdot 5^{-2}$$

$$A=100 \\cdot 25=2500$$

$$q=\\frac{2500}{p^{2}}$$

$$p^{2}=\\frac{2500}{q}$$

$$p=\\frac{50}{\\sqrt{q}}=50 q^{-0.5}$$

$$R(q)=q \\cdot p(q)$$

$$R(q)=q \\cdot 50 q^{-0.5}$$

$$R(q)=50 q^{0.5}$$

The claimed revenue law matches, so the statement is True.`,
      `**C.** → True

Doubling quantity multiplies revenue by $2^{0.5}$, because $R(q)$ has exponent $0.5$. Inverting $q \\propto p^{-2}$ gives $p \\propto q^{-0.5}$, and $R=qp$ raises that exponent by $1$.

$$\\frac{R(2q)}{R(q)}=2^{0.5}=\\sqrt{2}\\approx 1.414$$

$$(1.414-1)\\times 100\\% \\approx 41.4\\%$$

Revenue rises by about $41.4\\%$, so the statement is True.`,
      `**D.** → False

Revenue at $q=25$ is $25$ times the price that sells exactly $25$ units. Demand is $q=A p^{-2}$, and the observed pair $(5,100)$ pins $A$:

$$100=\\frac{A}{25}$$

$$A=100 \\cdot 25=2500$$

At $q=25$:

$$25=\\frac{2500}{p^{2}}$$

$$p^{2}=\\frac{2500}{25}=100$$

$$p=10$$

$$R(25)=25 \\cdot 10=250$$

The claimed figure is $300$, which is not $250$, so the statement is False.`,
      `**E.** → False

Price elasticity of demand is the exponent of $q(p)$. The given demand is $q(p)=A p^{-2}$, so that elasticity is $-2$, not $-0.5$. The figure $-0.5$ is the reciprocal, belonging to $p(q)$ rather than to $q(p)$:

$$\\frac{1}{-2}=-0.5$$

The elasticity of demand is $-2$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 41,
    solution_overview: `Demand is $q(p)=Ap^{-2}$ with $q(5)=100$; procurement wants price and revenue as functions of quantity.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units, $R$ = revenue. One observation pins the coefficient, and the rest is a change of subject: inverting a power function takes the reciprocal of the exponent and the same reciprocal power of the coefficient.

**1. Translate: the observed pair.**

$$A(5)^{-2} = 100$$

**2. Translate: the inversion.**

$$q = \\frac{A}{p^{2}} \\quad \\Rightarrow \\quad p = A^{\\frac{1}{2}}q^{\\frac{-1}{2}}$$

**Part 2: The model.**

$$q(p) = 2500\\,p^{-2} \\tag{1}$$

$$p(q) = 50\\,q^{-0.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A = 100 \\times 25 = 2500, \\qquad A^{\\frac{1}{2}} = 50$$

**2.** Revenue from either side, with matching values:

$$R(p) = 2500p^{-1}, \\qquad R(q) = 50q^{0.5}, \\qquad R = 500 \\text{ at } (p,q) = (5,100)$$

**3.** Quantities along the curve:

$$q(5) = 100, \\qquad q(10) = 25, \\qquad q(2.5) = 400$$

**4.** Elasticities are reciprocal, one for each direction:

$$\\text{El}_{p}q = -2, \\qquad \\text{El}_{q}p = -0.5$$

**5.** Because demand is elastic, revenue falls in price and rises in quantity — two readings of the same curve.

**Answer.** $A = 2500$ | $p(q) = 50q^{-0.5}$ | $R(q) = 50q^{0.5}$ | elasticity $-2$`,
  },
  {
    id: `math-8-42`,
    case_id: `MATH 8.42`,
    title: `Average Product of a Square-Root Technology`,
    context: `A workshop's output follows $Y(L)=A L^{0.5}$ units, where $L>0$ is labour hours. Increasing labour from $25$ to $100$ hours increased output by exactly $60$ units. Management tracks average product $\\frac{Y}{L}$ and compares output with a linear wage benchmark $W(L)=0.75L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The output law is $Y(L)=12\\sqrt{L}$.`,
      `At $64$ hours, output exceeds the linear wage benchmark by $48$ units.`,
      `At $225$ hours, average product is $0.8$ unit per labour hour.`,
      `Producing $180$ units requires $225$ labour hours.`,
      `Multiplying labour hours by $2.25$ multiplies output by $1.5$ and average product by $\\frac{2}{3}$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The log records an output increase of $60$ when labour rises from $25$ to $100$ hours, not an output level, so both endpoints enter the same equation.

$$Y(L)=A L^{0.5}$$

$$\\sqrt{25}=5$$

$$\\sqrt{100}=10$$

$$Y(100)-Y(25)=A(10-5)$$

$$5A=60$$

$$A=12$$

$$Y(L)=12\\sqrt{L}$$

The recovered law gives $Y(25)=12\\cdot 5=60$ and $Y(100)=12\\cdot 10=120$, whose difference is the logged $60$ units. Reading $60$ as $Y(100)$ would have produced $A=6$ instead. Both the coefficient and the square-root form match, so the statement is True.`,
      `**B.** → True

The comparison is at a common labour input $L=64$. The coefficient of $Y$ comes from the recorded $60$-unit jump between $25$ and $100$ hours:

$$A(\\sqrt{100}-\\sqrt{25})=60$$

$$A(10-5)=60$$

$$A=12$$

$$Y(64)=12\\sqrt{64}$$

$$Y(64)=12\\cdot 8=96$$

$$W(64)=0.75\\cdot 64=48$$

$$Y(64)-W(64)=96-48=48$$

Output exceeds the wage benchmark by $48$ units at $64$ hours, so the statement is True.`,
      `**C.** → True

Average product is output per labour hour. Recover $A$ from the jump, then divide the output law by labour.

$$A=\\frac{60}{\\sqrt{100}-\\sqrt{25}}$$

$$A=\\frac{60}{5}=12$$

$$\\mathrm{AP}(L)=\\frac{Y(L)}{L}$$

$$\\mathrm{AP}(L)=\\frac{12 L^{0.5}}{L}=12 L^{-0.5}$$

$$\\sqrt{225}=15$$

$$\\mathrm{AP}(225)=\\frac{12}{15}=0.8$$

Total output at that labour level is $Y(225)=12\\cdot 15=180$, which still has to be divided by the hours:

$$\\frac{180}{225}=0.8$$

Average product is $0.8$ unit per labour hour, so the statement is True.`,
      `**D.** → True

Labour hours for a target output come from inverting $Y(L)=A L^{0.5}$. The coefficient is fixed by the $60$-unit rise from $25$ to $100$ hours:

$$Y(100)-Y(25)=60$$

$$A\\cdot 10-A\\cdot 5=60$$

$$A=12$$

$$12\\sqrt{L}=180$$

$$\\sqrt{L}=15$$

$$L=15^{2}=225$$

Only the positive root is admissible, because labour hours are positive. Forward check:

$$Y(225)=12\\sqrt{225}=12\\cdot 15=180$$

Producing $180$ units requires $225$ hours, so the statement is True.`,
      `**E.** → True

Output has exponent $0.5$ and average product has exponent $-0.5$, so a labour factor $2.25$ scales them in opposite directions.

$$\\frac{Y(2.25 L)}{Y(L)}=(2.25)^{0.5}=1.5$$

$$\\frac{\\mathrm{AP}(2.25 L)}{\\mathrm{AP}(L)}=(2.25)^{-0.5}=\\frac{2}{3}$$

Both claimed multipliers are exact, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 42,
    solution_overview: `Output is $Y(L)=AL^{0.5}$, with a $60$-unit output jump from $25$ to $100$ hours; average product is $\\frac{Y}{L}$.

**Part 1:** Translate the jump and the derived average:

$$A(10-5)=60, qquad \\operatorname{AP}(L)=AL^{-0.5}$$

**Part 2:** Recover the total, average, and inverse laws:

$$Y(L)=12\\sqrt L, qquad \\operatorname{AP}(L)=\\frac{12}{\\sqrt L}, qquad L=\\left(\\frac{Y}{12}\\right)^2$$

**Part 3:** Compare with wages and evaluate the planning targets:

$$Y(64)-0.75(64)=48, quad \\operatorname{AP}(225)=0.8, quad Y=180\\Rightarrow L=225$$

**Answer.** $A=12$ | $Y(L)=12\\sqrt L$ | $\\operatorname{AP}(225)=0.8$ | $180$ units need $225$ hours`,
  },
  {
    id: `math-8-43`,
    case_id: `MATH 8.43`,
    title: `Two Break-Even Points Around a Fixed Charge`,
    context: `A contract manufacturer earns $R(q)=60 q^{0.5}$ from an output of $q>0$ units, pays a variable cost of $2q$, and carries a fixed charge of $400$ per period. Profit is $\\Pi(q)=60q^{0.5}-2q-400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The operation breaks even at two output levels, $100$ and $400$ units.`,
      `Profit is positive at an output of $25$ units.`,
      `Profit is positive at an output of $500$ units.`,
      `Profit rises throughout the range where it is positive.`,
      `Revenue is proportional to output.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Break-even means $\\Pi(q)=0$. The substitution $s=\\sqrt{q}$ turns the mix of $\\sqrt{q}$, $q$, and a constant into a quadratic.

$$\\Pi(q)=60 q^{0.5}-2q-400$$

$$s=\\sqrt{q}$$

$$q=s^{2}$$

$$60s-2s^{2}-400=0$$

$$2s^{2}-60s+400=0$$

$$s^{2}-30s+200=0$$

$$(s-10)(s-20)=0$$

The roots are $s=10$ and $s=20$. Squaring back, because $q=s^{2}$:

$$q=10^{2}=100$$

$$q=20^{2}=400$$

Check both outputs:

$$\\Pi(100)=60\\cdot 10-2\\cdot 100-400=0$$

$$\\Pi(400)=60\\cdot 20-2\\cdot 400-400=0$$

Two roots rather than one is what a fixed charge produces: output must cover the charge, yet remain small enough that linear variable cost has not overtaken square-root revenue. Both break-even points are as claimed, so the statement is True.`,
      `**B.** → False

Profit at $q=25$ is revenue minus variable cost minus the fixed charge, each evaluated at that output.

$$R(25)=60\\sqrt{25}=60\\cdot 5=300$$

$$2\\cdot 25=50$$

$$\\Pi(25)=300-50-400=-150$$

Profit is negative at $25$ units, so the statement is False.`,
      `**C.** → False

An output of $500$ units has to be checked directly: revenue, variable cost, and the fixed charge are each evaluated there.

$$R(500)=60\\sqrt{500}$$

$$\\sqrt{500}=10\\sqrt{5}\\approx 22.3607$$

$$R(500)\\approx 60\\cdot 22.3607=1341.64$$

$$2\\cdot 500+400=1400$$

$$\\Pi(500)\\approx 1341.64-1400=-58.36$$

Profit is about $-58$, so the statement is False.`,
      `**D.** → False

Whether profit rises throughout the range where it is positive is a shape question. Sample three outputs that all give positive profit.

$$\\Pi(144)=60\\cdot 12-2\\cdot 144-400$$

$$\\Pi(144)=720-288-400=32$$

$$\\Pi(225)=60\\cdot 15-2\\cdot 225-400$$

$$\\Pi(225)=900-450-400=50$$

$$\\Pi(324)=60\\cdot 18-2\\cdot 324-400$$

$$\\Pi(324)=1080-648-400=32$$

Profit climbs from $32$ to $50$ and then falls back to $32$, all while remaining positive. The peak sits inside the profitable range, so the statement is False.`,
      `**E.** → False

Proportionality would mean doubling output doubles revenue. The given revenue is $R(q)=60 q^{0.5}$, so the scale factor is $2^{0.5}$, not $2$.

$$\\frac{R(2q)}{R(q)}=2^{0.5}\\approx 1.414$$

The scale factor is not $2$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 43,
    solution_overview: `Profit is $\\Pi(q)=60q^{0.5}-2q-400$ for output $q>0$.

**Part 1: Building the model.**

Let $q$ = units produced and $s=\\sqrt{q}$. Revenue has exponent $0.5$, variable cost exponent $1$, and the fixed charge is a constant — the substitution $s=\\sqrt{q}$ turns this mixture into a quadratic.

**1. Translate: the profit function.**

$$\\Pi = 60q^{0.5} - 2q - 400$$

**2. Translate: the substitution.** With $q=s^{2}$:

$$\\Pi = -2s^{2} + 60s - 400$$

**Part 2: The model.**

$$\\Pi(s) = -2\\left(s^{2} - 30s + 200\\right) \\tag{1}$$

$$\\Pi(s) = -2(s-10)(s-20) \\tag{2}$$

**Part 3: Solve.**

**1.** The roots of (2) give the break-even outputs:

$$s = 10 \\;\\Rightarrow\\; q = 100, \\qquad s = 20 \\;\\Rightarrow\\; q = 400$$

**2.** The sign of (2) fixes the profitable range:

$$100 < q < 400 \\;\\Rightarrow\\; \\Pi > 0, \\qquad \\text{otherwise } \\Pi \\le 0$$

**3.** Being an inverted parabola in $s$, profit peaks midway between the roots:

$$s = 15 \\;\\Rightarrow\\; q = 225, \\qquad \\Pi(225) = 50$$

**4.** Values on either side of the peak confirm the turn:

$$\\Pi(144) = 32, \\qquad \\Pi(324) = 32, \\qquad \\Pi(25) = -150, \\qquad \\Pi(500) \\approx -58.4$$

**5.** The whole shape comes from the exponent mismatch: revenue scales by $2^{0.5}$ per doubling, variable cost by $2$, so revenue leads at first and loses in the end.

**Answer.** break-even at $q = 100$ and $q = 400$ | peak profit $50$ at $q = 225$`,
  },
  {
    id: `math-8-44`,
    case_id: `MATH 8.44`,
    title: `A Benefit and a Cost With Different Exponents`,
    context: `A city values a flood-defence programme of scale $x>0$ by the benefit $B(x)=40 x^{0.5}$ and the cost $C(x)=0.5 x^{1.5}$, both in millions. The net benefit is $B(x)-C(x)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Benefit and cost are equal at scale $x=80$.`,
      `Beyond that scale the cost exceeds the benefit.`,
      `The net benefit is largest at scale $x=80$.`,
      `Doubling the scale doubles both the benefit and the cost.`,
      `At scale $x=16$ the cost already exceeds the benefit.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Benefit and cost meet where $B(x)=C(x)$. Both sides carry a factor $x^{0.5}$, which may be cancelled on $x>0$.

$$40 x^{0.5}=0.5 x^{1.5}$$

$$40=0.5 x$$

$$x=80$$

Confirm the shared value:

$$B(80)=40\\sqrt{80}$$

$$\\sqrt{80}=4\\sqrt{5}\\approx 8.9443$$

$$B(80)\\approx 40 \\cdot 8.9443=357.77$$

$$C(80)=0.5 \\cdot 80^{1.5}$$

$$80^{1.5}=80\\sqrt{80}\\approx 715.54$$

$$C(80)\\approx 0.5 \\cdot 715.54=357.77$$

Both sides equal about $357.8$ million at scale $80$, so the statement is True.`,
      `**B.** → True

The ordering of the two curves on a whole half-line is read from their ratio, which is itself a power function.

$$\\frac{C(x)}{B(x)}=\\frac{0.5 x^{1.5}}{40 x^{0.5}}$$

$$\\frac{C(x)}{B(x)}=\\frac{x}{80}$$

$$\\frac{x}{80}>1 \\quad \\Longleftrightarrow \\quad x>80$$

A test past the crossing:

$$B(100)=40\\sqrt{100}=400$$

$$C(100)=0.5 \\cdot 100^{1.5}$$

$$C(100)=0.5 \\cdot 1000=500$$

The ratio is strictly increasing and passes through $1$ only at $x=80$. Cost exceeds benefit for every larger scale, so the statement is True.`,
      `**C.** → False

The largest net benefit is a question about $N(x)=B(x)-C(x)$, not about where the two curves meet. At the claimed scale the surplus is already gone:

$$N(80)=0$$

Sample smaller scales. At $x=16$:

$$B(16)=40\\cdot 4=160$$

$$C(16)=0.5\\cdot 16^{1.5}=0.5\\cdot 64=32$$

$$N(16)=160-32=128$$

At $x=27$:

$$B(27)=40\\sqrt{27}=40\\cdot 3\\sqrt{3}\\approx 207.85$$

$$C(27)=0.5\\cdot 27^{1.5}$$

$$27^{1.5}=27\\sqrt{27}\\approx 140.30$$

$$C(27)\\approx 70.15$$

$$N(27)\\approx 137.70$$

At $x=40$:

$$B(40)=40\\sqrt{40}\\approx 252.98$$

$$C(40)=0.5\\cdot 40^{1.5}\\approx 126.49$$

$$N(40)\\approx 126.49$$

Net benefit is $128$ at $16$, about $138$ at $27$, about $126$ at $40$, and $0$ at $80$. The crossing is where the surplus has been eroded, not where it is largest, so the statement is False.`,
      `**D.** → False

Doubling acts through each curve's own exponent, not through a common factor of $2$.

$$\\frac{B(2x)}{B(x)}=2^{0.5}\\approx 1.414$$

$$\\frac{C(2x)}{C(x)}=2^{1.5}\\approx 2.828$$

Neither factor is $2$, so the statement is False.`,
      `**E.** → False

At $x=16$ the two curves have to be evaluated, because a square root rises steeply from the origin while $x^{1.5}$ starts flatter.

$$B(16)=40\\sqrt{16}=40\\cdot 4=160$$

$$C(16)=0.5\\cdot 16^{1.5}$$

$$16^{1.5}=16\\cdot 4=64$$

$$C(16)=0.5\\cdot 64=32$$

$$32<160$$

Cost is one fifth of benefit at that scale, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 44,
    solution_overview: `Benefit is $B(x)=40x^{0.5}$ and cost is $C(x)=0.5x^{1.5}$ for a programme of scale $x>0$.

**Part 1: Building the model.**

Let $x$ = programme scale, $B$ = benefit, $C$ = cost, $N=B-C$ = net benefit. Both constants are given; the analysis turns on the exponents $0.5$ and $1.5$, which differ by exactly $1$.

**1. Translate: the crossing condition.**

$$40x^{0.5} = 0.5x^{1.5}$$

**2. Translate: the ordering.** The ratio of the two curves is the cleanest tool:

$$\\frac{C(x)}{B(x)} = \\frac{0.5x^{1.5}}{40x^{0.5}} = \\frac{x}{80}$$

**Part 2: The model.**

$$N(x) = 40x^{0.5} - 0.5x^{1.5} \\tag{1}$$

$$\\frac{C(x)}{B(x)} = \\frac{x}{80} \\tag{2}$$

**Part 3: Solve.**

**1.** Cancel the shared power to find the unique crossing:

$$40 = 0.5x \\;\\Rightarrow\\; x = 80, \\qquad B = C \\approx 357.8$$

**2.** Ratio (2) fixes the ordering on both sides:

$$x < 80 \\;\\Rightarrow\\; B > C, \\qquad x > 80 \\;\\Rightarrow\\; C > B$$

**3.** The net benefit is positive but not monotone on $(0,80)$:

$$N(16) = 128, \\qquad N(27) \\approx 137.7, \\qquad N(40) \\approx 126.5, \\qquad N(80) = 0$$

**4.** Scale factors explain why the surplus must vanish. Doubling the scale multiplies the benefit by:

$$2^{0.5} \\approx 1.414$$

The same doubling multiplies the cost by:

$$2^{1.5} \\approx 2.828$$

Cost grows twice as fast as benefit under every doubling, so any surplus held at a small scale is eaten as the programme expands.

**5.** The best scale sits near $x\\approx27$, far below break-even. The crossing at $x = 80$ marks the end of the worthwhile range, not its optimum.

**Answer.** crossing at $x = 80$ with $B = C \\approx 357.8$ | net benefit peaks near $x \\approx 27$`,
  },
  {
    id: `math-8-45`,
    case_id: `MATH 8.45`,
    title: `Furnace Throughput Calibrated From Two Runs`,
    context: `A furnace's throughput follows $T(g)=A g^{r}$ tonnes per hour, where $g>0$ is the gas feed in cubic metres per hour. Two logged runs are available: a feed of $8$ gave $20$ tonnes per hour, and a feed of $27$ gave $45$. The site licence caps throughput at $80$ tonnes per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent of the throughput law is $\\frac{2}{3}$.`,
      `The coefficient of the throughput law is $5$.`,
      `The licensed ceiling of $80$ tonnes per hour is reached at a gas feed of $64$.`,
      `Doubling the gas feed doubles throughput.`,
      `Throughput per cubic metre of gas rises as the feed rises.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Two logged runs fix the exponent through their ratio, which cancels the coefficient.

$$T(g)=A g^{r}$$

$$\\frac{T(27)}{T(8)}=\\left(\\frac{27}{8}\\right)^{r}$$

$$\\frac{45}{20}=\\frac{9}{4}$$

$$\\left(\\frac{27}{8}\\right)^{r}=\\frac{9}{4}$$

$$\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$$

$$\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$$

$$\\left(\\left(\\frac{3}{2}\\right)^{3}\\right)^{r}=\\left(\\frac{3}{2}\\right)^{2}$$

$$\\left(\\frac{3}{2}\\right)^{3r}=\\left(\\frac{3}{2}\\right)^{2}$$

$$3r=2$$

$$r=\\frac{2}{3}$$

The exponent is $\\frac{2}{3}$, so the statement is True.`,
      `**B.** → True

The coefficient is a logged throughput divided by the corresponding power of the feed, so the exponent is recovered first from the ratio of the two runs.

$$\\left(\\frac{27}{8}\\right)^{r}=\\frac{45}{20}=\\frac{9}{4}$$

Writing both sides as powers of $\\frac{3}{2}$:

$$\\left(\\frac{3}{2}\\right)^{3r}=\\left(\\frac{3}{2}\\right)^{2}$$

$$r=\\frac{2}{3}$$

From the first run:

$$8^{\\frac{2}{3}}=(8^{\\frac{1}{3}})^{2}=2^{2}=4$$

$$A\\cdot 4=20$$

$$A=5$$

The second run confirms the same coefficient:

$$27^{\\frac{2}{3}}=3^{2}=9$$

$$\\frac{45}{9}=5$$

The coefficient is $5$, so the statement is True.`,
      `**C.** → True

The licensed ceiling $T=80$ is inverted into a gas feed once the law is calibrated. The two runs give the exponent from their ratio:

$$\\left(\\frac{27}{8}\\right)^{r}=\\frac{45}{20}$$

$$\\left(\\frac{3}{2}\\right)^{3r}=\\left(\\frac{3}{2}\\right)^{2}$$

$$r=\\frac{2}{3}$$

Then the first run gives the coefficient:

$$8^{\\frac{2}{3}}=(8^{\\frac{1}{3}})^{2}=2^{2}=4$$

$$A\\cdot 4=20$$

$$A=5$$

So $T(g)=5 g^{\\frac{2}{3}}$. At the ceiling:

$$5 g^{\\frac{2}{3}}=80$$

$$g^{\\frac{2}{3}}=16$$

$$g=16^{\\frac{3}{2}}$$

$$g=(16^{\\frac{1}{2}})^{3}=4^{3}=64$$

Forward check:

$$T(64)=5\\cdot 64^{\\frac{2}{3}}=5\\cdot 16=80$$

The ceiling binds at a feed of $64$, so the statement is True.`,
      `**D.** → False

Doubling the feed multiplies throughput by $2^{r}$, so the exponent has to be read from the two logged runs.

$$\\left(\\frac{27}{8}\\right)^{r}=\\frac{45}{20}=\\frac{9}{4}$$

$$\\left(\\frac{3}{2}\\right)^{3r}=\\left(\\frac{3}{2}\\right)^{2}$$

$$r=\\frac{2}{3}$$

$$\\frac{T(2g)}{T(g)}=2^{\\frac{2}{3}}\\approx 1.587$$

The feed factor that would double throughput is the reciprocal power:

$$k^{\\frac{2}{3}}=2$$

$$k=2^{\\frac{3}{2}}\\approx 2.828$$

The multiplier is about $1.59$, not $2$, so the statement is False.`,
      `**E.** → False

Throughput per cubic metre of gas is the logged throughput divided by the logged feed. Compare the two given runs.

$$\\frac{20}{8}=2.5$$

$$\\frac{45}{27}=\\frac{5}{3}\\approx 1.667$$

The larger feed already has the lower ratio, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 45,
    solution_overview: `Throughput is $T(g)=Ag^{r}$ tonnes per hour, with logged runs $T(8)=20$ and $T(27)=45$, under a licensed ceiling of $80$.

**Part 1: Building the model.**

Let $g$ = gas feed and $T(g)$ = throughput. Two unknowns need two runs: their ratio carries the exponent because the coefficient cancels, and either run then carries the coefficient.

**1. Translate: the ratio of the two runs.**

$$\\left(\\frac{27}{8}\\right)^{r} = \\frac{45}{20} = 2.25$$

**2. Translate: the coefficient from the first run.**

$$A \\cdot 8^{r} = 20$$

**Part 2: The model.**

$$\\left(\\tfrac{3}{2}\\right)^{3r} = \\left(\\tfrac{3}{2}\\right)^{2} \\tag{1}$$

$$T(g) = A g^{r} \\tag{2}$$

**Part 3: Solve.**

**1.** Matching exponents in (1) avoids logarithms altogether:

$$3r = 2 \\;\\Rightarrow\\; r = \\tfrac{2}{3}$$

**2.** Both runs give the same coefficient, confirming the fit:

$$\\frac{20}{8^{\\frac{2}{3}}} = \\frac{20}{4} = 5 = \\frac{45}{9}, \\qquad T(g) = 5g^{\\frac{2}{3}}$$

**3.** Invert at the licence ceiling using the reciprocal exponent $\\frac{3}{2}$:

$$g^{\\frac{2}{3}} = 16 \\;\\Rightarrow\\; g = 16^{\\frac{3}{2}} = 64$$

**4.** Scale factors show the sub-proportional response. Doubling the gas feed multiplies throughput by:

$$2^{\\frac{2}{3}} \\approx 1.587$$

That is a gain of about $59\\%$, well short of a doubling. Read the other way, doubling the throughput calls for a gas factor of:

$$2^{\\frac{3}{2}} \\approx 2.83$$

So extra output has to be bought with almost three times the feed.

**5.** Gas efficiency declines with the feed, so the licensed maximum is also the least efficient operating point. Throughput per unit of gas is:

$$\\frac{T(g)}{g} = 5g^{\\frac{-1}{3}}$$

At feeds of $8$, $27$ and $64$ that ratio reads:

$$2.5,\\; 1.67,\\; 1.25$$

**Answer.** $r = \\frac{2}{3}$ | $A = 5$ | $T(g) = 5g^{\\frac{2}{3}}$ | ceiling at $g = 64$`,
  },
  {
    id: `math-8-46`,
    case_id: `MATH 8.46`,
    title: `Rainwater Basin Storage Under a Square Law`,
    context: `A tapered rainwater basin stores $V(d)=A d^{2}$ cubic metres when filled to a depth of $d>0$ metres. A survey at a depth of $4$ metres measured $48$ cubic metres in store. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the storage law is $3$.`,
      `At a depth of $10$ metres the basin holds $300$ cubic metres.`,
      `The volume added from depth $7$ to $9$ metres is exactly $\\frac{4}{3}$ times the volume added from $5$ to $7$ metres.`,
      `A stored volume of $675$ cubic metres corresponds to a depth of $15$ metres.`,
      `Stored volume per metre of depth rises as the basin fills.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The coefficient of the storage law $V(d)=A d^{2}$ is the survey volume divided by the square of the surveyed depth.

$$
A \\cdot 4^{2} = 48
$$

$$
A \\cdot 16 = 48
$$

$$
A = \\frac{48}{16} = 3
$$

The coefficient is $3$, so the statement is True.`,
      `**B.** → True

Volume at $10$ metres follows by squaring the depth ratio against the survey at $4$ metres. The coefficient cancels in that ratio.

$$
\\frac{10}{4} = \\frac{5}{2}
$$

$$
\\left(\\frac{5}{2}\\right)^{2} = \\frac{25}{4}
$$

$$
V(10) = 48 \\cdot \\frac{25}{4} = 12 \\cdot 25 = 300
$$

The basin holds $300$ cubic metres, so the statement is True.`,
      `**C.** → True

The volume added over a depth interval is the difference of two squares, so two equal two-metre steps need not add equal volumes. The coefficient cancels in the ratio of those increments.

$$
9^{2} = 81
$$

$$
7^{2} = 49
$$

$$
V(9) - V(7) = A(81 - 49) = 32A
$$

$$
5^{2} = 25
$$

$$
V(7) - V(5) = A(49 - 25) = 24A
$$

$$
\\frac{32A}{24A} = \\frac{4}{3}
$$

The later two-metre rise adds exactly four thirds as much volume, so the statement is True.`,
      `**D.** → True

A stored volume of $675$ cubic metres inverts the square law through the volume ratio against the survey. Depth is positive, so the square root is the positive one.

$$
\\frac{675}{48} = \\frac{225}{16}
$$

$$
\\left(\\frac{d}{4}\\right)^{2} = \\frac{225}{16}
$$

$$
\\frac{d}{4} = \\frac{15}{4}
$$

$$
d = 15
$$

The corresponding depth is $15$ metres, so the statement is True.`,
      `**E.** → True

Stored volume per metre of depth is the storage law divided by $d$, which lowers the exponent from $2$ to $1$.

$$
\\frac{V(d)}{d} = \\frac{A d^{2}}{d} = A d
$$

The survey reading $48$ cubic metres is positive, so $A>0$. On $d>0$ the product $A d$ therefore rises as the basin fills, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 46,
    solution_overview: `Basin storage is $V(d)=Ad^{2}$ cubic metres at depth $d>0$, with a survey giving $V(4)=48$.

**Part 1: Building the model.**

Let $d$ = fill depth in metres and $V(d)$ = stored volume. The exponent is given by the tapered geometry, so the single survey reading pins the coefficient.

**1. Translate: the survey.**

$$A(4)^{2} = 48$$

**2. Translate: volume per metre of depth.** Dividing by $d$ lowers the exponent by one:

$$\\frac{V(d)}{d} = A d$$

**Part 2: The model.**

$$V(d) = 3d^{2} \\tag{1}$$

$$\\frac{V(d)}{d} = 3d \\tag{2}$$

**Part 3: Solve.**

**1.** The survey gives the coefficient:

$$A = \\frac{48}{16} = 3$$

**2.** Levels at deeper fills:

$$V(10) = 300, \\qquad V(15) = 675$$

**3.** The scale factor squares the depth multiplier:

$$\\frac{V(2d)}{V(d)} = 4, \\qquad \\left(\\tfrac{10}{4}\\right)^{2} = 6.25$$

**4.** Inversion takes the square root of the volume ratio:

$$d = \\sqrt{\\frac{V}{3}}, \\qquad V = 675 \\;\\Rightarrow\\; d = 15$$

**5.** Equation (2) has exponent $1$, so each extra metre of depth stores more than the last. Volume per metre of depth reads:

$$12,\\; 30,\\; 45$$

Those three figures are cubic metres per metre, taken at depths of $4$, $10$ and $15$ metres. They climb in direct proportion to the depth, which is what an exponent of $1$ means.

**Answer.** $A = 3$ | $V(d) = 3d^{2}$ | $675$ m³ at a depth of $15$ m`,
  },
  {
    id: `math-8-47`,
    case_id: `MATH 8.47`,
    title: `A Braking-Energy Index Recovered From a Speed Change`,
    context: `A fleet safety report scores braking energy by the index $E(v)=A v^{2}$, where $v>0$ is speed in kilometres per hour. The report does not give $A$ directly: it states only that raising the test speed from $40$ to $60$ km/h raised the index by exactly $100$ points. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the index is $0.05$.`,
      `At $60$ km/h the index reads $180$.`,
      `Raising speed from $72$ to $90$ km/h raises the index by exactly $56.25\\%$.`,
      `The index reaches $500$ at a speed of $100$ km/h.`,
      `An index reading of $320$ corresponds to a speed of $80$ km/h.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The recorded $100$-point rise is a difference of two index values, so the coefficient multiplies the gap in squared speeds rather than either speed squared on its own.

$$
60^{2} = 3600
$$

$$
40^{2} = 1600
$$

$$
A(3600 - 1600) = 100
$$

$$
2000A = 100
$$

$$
A = \\frac{100}{2000} = 0.05
$$

The coefficient is $0.05$, so the statement is True.`,
      `**B.** → True

The index at $60$ km/h is a level of $E(v)=A v^{2}$. The report gives only a $100$-point rise, so $A$ has to be recovered from that difference before substituting the upper test speed.

$$
A(60^{2} - 40^{2}) = 100
$$

$$
A(3600 - 1600) = 100
$$

$$
A = \\frac{100}{2000} = 0.05
$$

$$
E(60) = 0.05 \\cdot 3600 = 180
$$

The index reads $180$, so the statement is True.`,
      `**C.** → True

A percentage change under a square law is the squared speed ratio minus one, and the coefficient cancels.

$$
\\frac{90}{72} = \\frac{5}{4}
$$

$$
\\left(\\frac{5}{4}\\right)^{2} = \\frac{25}{16}
$$

$$
\\left(\\frac{25}{16} - 1\\right) \\times 100\\% = 56.25\\%
$$

The index rises by exactly $56.25\\%$, so the statement is True.`,
      `**D.** → True

Five hundred points is a level at $100$ km/h. The coefficient that converts speed into the index comes from the recorded rise between $40$ and $60$ km/h.

$$
60^{2} = 3600
$$

$$
40^{2} = 1600
$$

$$
A(3600 - 1600) = 100
$$

$$
A = \\frac{100}{2000} = 0.05
$$

$$
100^{2} = 10000
$$

$$
E(100) = 0.05 \\cdot 10000 = 500
$$

The index reaches $500$, so the statement is True.`,
      `**E.** → True

A reading of $320$ converts back into a speed by inverting $E(v)=A v^{2}$. The recorded rise fixes the coefficient first.

$$
A(3600 - 1600) = 100
$$

$$
A = 0.05
$$

$$
0.05 v^{2} = 320
$$

$$
v^{2} = \\frac{320}{0.05} = 6400
$$

$$
v = \\sqrt{6400} = 80
$$

Only the positive root is admissible, since speed is positive. The reading of $320$ corresponds to $80$ km/h, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 47,
    solution_overview: `The braking-energy index is $E(v)=Av^{2}$, and raising the test speed from $40$ to $60$ km/h raised the index by $100$ points.

**Part 1: Building the model.**

Let $v$ = speed in km/h and $E(v)$ = index. The exponent is given; the only observation is a difference of two index readings, so the coefficient must be recovered from that difference.

**1. Translate: the two shape factors.**

$$40^{2} = 1600, \\qquad 60^{2} = 3600$$

**2. Translate: the recorded rise.**

$$A(3600 - 1600) = 100$$

**Part 2: The model.**

$$2000A = 100 \\tag{1}$$

$$E(v) = A v^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient:

$$A = 0.05, \\qquad E(v) = 0.05v^{2}$$

**2.** Check both test speeds against the report:

$$E(40) = 80, \\qquad E(60) = 180, \\qquad 180 - 80 = 100 \\;\\checkmark$$

**3.** Scale factors square the speed multiplier:

$$1.5^{2} = 2.25 \\;(+125\\%), \\qquad \\left(\\tfrac{1}{2}\\right)^{2} = \\tfrac{1}{4}$$

**4.** Levels at higher speeds, and the inverse reading:

$$E(100) = 500, \\qquad E = 500 \\;\\Rightarrow\\; v = 100$$

**5.** The safety point is the squaring itself: $2.5$ times the speed of the lower test gives $6.25$ times its braking energy.

**Answer.** $A = 0.05$ | $E(v) = 0.05v^{2}$ | $E(100) = 500$`,
  },
  {
    id: `math-8-48`,
    case_id: `MATH 8.48`,
    title: `Geometrically Similar Silos: Steel Against Capacity`,
    context: `A supplier builds geometrically similar storage silos. The steel skin scales with the square of the height, $S(h)=a h^{2}$ square metres, while capacity scales with the cube, $V(h)=k h^{3}$ cubic metres. A six-metre silo uses $108$ square metres of steel and holds $72$ cubic metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A silo with capacity $192$ cubic metres needs about $208$ square metres of steel.`,
      `Steel use first exceeds $200$ square metres once height exceeds about $8.16$ metres.`,
      `Increasing silo height by $50\\%$ raises steel use by $125\\%$.`,
      `Steel per cubic metre of capacity falls as the silo gets taller.`,
      `Doubling the height doubles the steel requirement.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A capacity of $192$ cubic metres has to be turned into a height before the steel law can be applied, so both coefficients are needed.

$$
a \\cdot 6^{2} = 108
$$

$$
a \\cdot 36 = 108
$$

$$
a = 3
$$

$$
k \\cdot 6^{3} = 72
$$

$$
k \\cdot 216 = 72
$$

$$
k = \\frac{72}{216} = \\frac{1}{3}
$$

$$
\\frac{h^{3}}{3} = 192
$$

$$
h^{3} = 576
$$

$$
h = \\sqrt[3]{576} \\approx 8.32
$$

$$
(8.32)^{2} \\approx 69.22
$$

$$
S = 3 \\times 69.22 \\approx 207.7
$$

That steel use is about $208$ square metres, so the statement is True.`,
      `**B.** → True

Steel first exceeds $200$ square metres when the surface law crosses that threshold. The six-metre silo pins the steel coefficient.

$$
a \\cdot 36 = 108
$$

$$
a = 3
$$

$$
3h^{2} > 200
$$

$$
h^{2} > \\frac{200}{3}
$$

$$
h > \\sqrt{\\frac{200}{3}}
$$

$$
\\sqrt{\\frac{200}{3}} \\approx 8.16
$$

Height is positive, so the square root keeps the inequality direction. Steel use exceeds $200$ square metres once height exceeds about $8.16$ metres, so the statement is True.`,
      `**C.** → True

A $50\\%$ height increase is the multiplier $1.5$ acting through the steel exponent $2$, and the coefficient cancels.

$$
\\frac{S(1.5h)}{S(h)} = (1.5)^{2}
$$

$$
(1.5)^{2} = 2.25
$$

$$
(2.25 - 1) \\times 100\\% = 125\\%
$$

Steel use rises by exactly $125\\%$, so the statement is True.`,
      `**D.** → True

Steel per cubic metre of capacity is the ratio of a square law to a cube law, so the height exponent is $2-3=-1$.

$$
\\frac{S(h)}{V(h)} = \\frac{a h^{2}}{k h^{3}} = \\frac{a}{k} h^{-1}
$$

The six-metre silo uses a positive amount of steel and holds a positive volume, so $\\frac{a}{k}>0$. On $h>0$ that ratio therefore falls as the silo gets taller, so the statement is True.`,
      `**E.** → False

Doubling the height would double the steel only if the exponent were $1$. The steel law has exponent $2$.

$$
\\frac{S(2h)}{S(h)} = 2^{2} = 4
$$

The given six-metre silo uses $108$ square metres, so a twelve-metre silo uses $4 \\times 108 = 432$ square metres, not $216$. Steel quadruples, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 48,
    solution_overview: `Similar silos have steel $S(h)=ah^{2}$ and capacity $V(h)=kh^{3}$; a six-metre silo uses $108$ m² of steel and holds $72$ m³.

**Part 1: Building the model.**

Let $h$ = height in metres, $S$ = steel area, $V$ = capacity. Geometric similarity fixes both exponents, so each of the two observations calibrates one coefficient.

**1. Translate: the steel observation.**

$$a(6)^{2} = 108$$

**2. Translate: the capacity observation.**

$$k(6)^{3} = 72$$

**Part 2: The model.**

$$S(h) = 3h^{2} \\tag{1}$$

$$V(h) = \\frac{h^{3}}{3} \\tag{2}$$

**Part 3: Solve.**

**1.** The two observations give the two coefficients:

$$a = 3, \\qquad k = \\tfrac{1}{3}$$

**2.** Levels for a taller silo:

$$S(9) = 243, \\qquad V(9) = 243$$

**3.** The square-cube pair of scale factors for one doubling:

$$\\frac{S(2h)}{S(h)} = 4, \\qquad \\frac{V(2h)}{V(h)} = 8$$

**4.** Their ratio is the economically interesting quantity:

$$\\frac{S(h)}{V(h)} = \\frac{9}{h}, \\qquad 1.5,\\; 1,\\; 0.75 \\text{ at } h = 6,\\,9,\\,12$$

**5.** Because the exponents differ by exactly one, steel per cubic metre is inversely proportional to height — the general reason big tanks are cheap per unit stored.

**Answer.** $S(h) = 3h^{2}$ | $V(h) = \\frac{h^{3}}{3}$ | steel per m³ $= \\frac{9}{h}$`,
  },
  {
    id: `math-8-49`,
    case_id: `MATH 8.49`,
    title: `Inspection Hours Across Growing Shipment Volumes`,
    context: `Customs inspection time follows $T(n)=A n^{0.5}$ hours for a consignment of $n>0$ shipments. Moving from a $25$-shipment consignment to a $225$-shipment consignment added exactly $60$ inspection hours. A staffing plan can supply at most $90$ inspection hours. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The inspection law is $T(n)=6\\sqrt{n}$.`,
      `The $90$-hour staffing ceiling can cover at most $225$ shipments.`,
      `Multiplying a consignment size by $2.25$ multiplies total inspection time by $1.5$.`,
      `At $144$ shipments, time per shipment is $0.5$ hour.`,
      `Total inspection time is proportional to the number of shipments.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The added $60$ hours is the difference of two inspection times, so both square-root factors enter the calibration.

$$
\\sqrt{225} = 15
$$

$$
\\sqrt{25} = 5
$$

$$
A(15 - 5) = 60
$$

$$
10A = 60
$$

$$
A = 6
$$

$$
T(n) = 6\\sqrt{n}
$$

The inspection law is $T(n)=6\\sqrt{n}$, so the statement is True.`,
      `**B.** → True

A $90$-hour staffing ceiling becomes a shipment ceiling by inverting an increasing square-root law. The $60$-hour rise between $25$ and $225$ shipments recovers the coefficient first.

$$
\\sqrt{225} = 15
$$

$$
\\sqrt{25} = 5
$$

$$
A(15 - 5) = 60
$$

$$
A = 6
$$

$$
6\\sqrt{n} \\le 90
$$

$$
\\sqrt{n} \\le 15
$$

$$
n \\le 225
$$

$$
T(225) = 6 \\cdot 15 = 90
$$

The bound is attainable, and the ceiling covers at most $225$ shipments, so the statement is True.`,
      `**C.** → True

For a square-root law a consignment multiplier $k$ acts on total time as $\\sqrt{k}$, and the coefficient cancels.

$$
\\frac{T(2.25 n)}{T(n)} = (2.25)^{0.5}
$$

$$
2.25 = \\frac{9}{4}
$$

$$
\\sqrt{\\frac{9}{4}} = \\frac{3}{2}
$$

$$
\\frac{3}{2} = 1.5
$$

The inspection-time multiplier is exactly $1.5$, so the statement is True.`,
      `**D.** → True

Time per shipment at $144$ shipments is total inspection time divided by $144$. That average needs the coefficient recovered from the $60$-hour rise.

$$
\\sqrt{225} = 15
$$

$$
\\sqrt{25} = 5
$$

$$
A(15 - 5) = 60
$$

$$
A = 6
$$

$$
\\sqrt{144} = 12
$$

$$
T(144) = 6 \\cdot 12 = 72
$$

$$
\\frac{T(144)}{144} = \\frac{72}{144} = 0.5
$$

Time per shipment is $0.5$ hour, so the statement is True.`,
      `**E.** → False

Proportionality would require exponent $1$, so that multiplying shipments by $k$ multiplies time by $k$. The given exponent is $0.5$.

$$
\\frac{T(kn)}{T(n)} = k^{0.5}
$$

Between the two observed consignments the shipment count and the inspection time grow by different factors:

$$
\\frac{225}{25} = 9
$$

$$
\\frac{\\sqrt{225}}{\\sqrt{25}} = \\frac{15}{5}
$$

$$
\\frac{15}{5} = 3
$$

Time grows by $3$, not by $9$. Total inspection time is not proportional to the number of shipments, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 49,
    solution_overview: `Inspection time is $T(n)=An^{0.5}$, and increasing a consignment from $25$ to $225$ shipments adds $60$ hours.

**Part 1:** Translate the difference and the staffing ceiling:

$$A(15-5)=60, qquad T(n)\\le90$$

**Part 2:** Recover the total and average laws:

$$T(n)=6\\sqrt n, qquad \\frac{T(n)}n=6n^{-0.5}$$

**Part 3:** Invert the ceiling and evaluate the scale questions:

$$6\\sqrt n\\le90\\Rightarrow n\\le225, quad (2.25)^{0.5}=1.5, quad \\frac{T(144)}{144}=0.5$$

**Answer.** $A=6$ | ceiling $225$ shipments | time per shipment falls with consignment size`,
  },
  {
    id: `math-8-50`,
    case_id: `MATH 8.50`,
    title: `Illuminance Down the Length of a Gallery`,
    context: `Illuminance from a gallery spotlight follows the inverse-square law $I(d)=A d^{-2}$ lux, where $d>0$ is the distance in metres. A meter reading two metres from the lamp records $300$ lux. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At four metres the illuminance is $75$ lux.`,
      `Doubling the distance cuts the illuminance to a quarter.`,
      `Illuminance is one ninth of its two-metre reading at a distance of $6$ metres.`,
      `Halving the distance quadruples the illuminance.`,
      `Illuminance falls as the distance from the lamp grows.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Four metres is double the metered distance, and an inverse-square law cuts illuminance by $2^{-2}$ under a doubling.

$$
\\frac{I(4)}{I(2)} = 2^{-2}
$$

$$
2^{-2} = \\frac{1}{4}
$$

$$
I(4) = 300 \\cdot \\frac{1}{4} = 75
$$

The illuminance is $75$ lux, so the statement is True.`,
      `**B.** → True

The inverse-square exponent is $-2$, so any doubling of distance multiplies illuminance by $2^{-2}=\\frac{1}{4}$, independent of the coefficient and of where the doubling starts. Doubling cuts the illuminance to a quarter, so the statement is True.`,
      `**C.** → True

A reading of one ninth of the two-metre value is a ratio, so the coefficient cancels and the distance multiplier is all that remains. Distance is positive, so the root is the positive one.

$$
\\frac{I(d)}{I(2)} = \\left(\\frac{d}{2}\\right)^{-2}
$$

$$
\\left(\\frac{d}{2}\\right)^{-2} = \\frac{1}{9}
$$

$$
\\left(\\frac{d}{2}\\right)^{2} = 9
$$

$$
\\frac{d}{2} = 3
$$

$$
d = 6
$$

At $6$ metres the reading is one ninth of the two-metre value, so the statement is True.`,
      `**D.** → True

Halving the distance is the multiplier $\\frac{1}{2}$ through exponent $-2$, which inverts before it squares.

$$
\\frac{I(\\frac{d}{2})}{I(d)} = \\left(\\frac{1}{2}\\right)^{-2}
$$

$$
\\left(\\frac{1}{2}\\right)^{-2} = 2^{2}
$$

$$
2^{2} = 4
$$

On the metered pair, one metre is half of two metres, so the illuminance becomes $4 \\times 300 = 1200$ lux. Illuminance quadruples, so the statement is True.`,
      `**E.** → True

Illuminance falls with distance because the inverse-square exponent is negative and the coefficient is positive. The meter reading $300$ lux is positive, so $A>0$, and the exponent is $-2<0$. On $d>0$ that combination makes $I(d)$ strictly decreasing, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 50,
    solution_overview: `Illuminance follows $I(d)=Ad^{-2}$ lux at distance $d>0$ metres, with a meter reading of $300$ lux at two metres.

**Part 1: Building the model.**

Let $d$ = distance in metres and $I(d)$ = illuminance in lux. The inverse-square form fixes the exponent at $-2$, so the meter reading is the only fact needed to pin the coefficient.

**1. Translate: the meter reading.**

$$A(2)^{-2} = 300, \\qquad 2^{-2} = \\tfrac{1}{4}$$

**2. Translate: the scale rule.** Coefficients cancel in ratios:

$$\\frac{I(kd)}{I(d)} = k^{-2}$$

**Part 2: The model.**

$$I(d) = \\frac{1200}{d^{2}} \\tag{1}$$

$$\\frac{I(kd)}{I(d)} = k^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** The meter reading gives the coefficient:

$$A = 300 \\times 4 = 1200$$

**2.** Readings down the gallery:

$$I(1) = 1200, \\quad I(2) = 300, \\quad I(4) = 75, \\quad I(5) = 48, \\quad I(10) = 12$$

**3.** Scale factors from (2), in both directions:

$$2^{-2} = \\tfrac{1}{4}, \\qquad \\left(\\tfrac{1}{2}\\right)^{-2} = 4, \\qquad 5^{-2} = \\tfrac{1}{25}$$

**4.** Inverting (1) turns a lighting target into a distance:

$$d = \\sqrt{\\frac{1200}{I}}, \\qquad I = 48 \\;\\Rightarrow\\; d = 5$$

**5.** The negative exponent makes the law decreasing everywhere, with most of the light lost in the first few metres.

**Answer.** $A = 1200$ | $I(d) = 1200d^{-2}$ | $I(10) = 12$ lux`,
  },
  {
    id: `math-8-51`,
    case_id: `MATH 8.51`,
    title: `Audit Cost With Economies of Scale`,
    context: `An audit practice prices engagements by $C(n)=A n^{0.75}$, where $n>0$ is the number of accounts tested. The bill rises by exactly $1900$ when engagement size rises from $16$ to $81$ accounts. A client has a $2700$ cap, while a rival quotes $R(n)=50n$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The pricing law is $C(n)=100n^{0.75}$.`,
      `The $2700$ cap covers at most $81$ accounts under the practice's schedule.`,
      `The two firms tie at $16$ accounts, and the practice is cheaper than the rival for every $n>16$.`,
      `A bill of $12500$ corresponds to an engagement of $625$ accounts.`,
      `Doubling the number of accounts raises the practice's bill by exactly $75\\%$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The recorded $1900$ is the change $C(81)-C(16)$, not a single bill. The two sizes are fourth powers, so the shape factors are exact integers:

$$
16^{\\frac{3}{4}}=8,\\qquad 81^{\\frac{3}{4}}=27
$$

$$
C(81)-C(16)=A(27-8)=19A
$$

$$
19A=1900
$$

$$
A=100
$$

The pricing law is therefore $C(n)=100n^{\\frac{3}{4}}$, so the statement is True.`,
      `**B.** → True

The cap is the inequality $C(n)\\le 2700$. Recover $A$ from the $1900$ rise between $16$ and $81$ accounts:

$$
A\\left(81^{\\frac{3}{4}}-16^{\\frac{3}{4}}\\right)=1900
$$

$$
A(27-8)=1900
$$

$$
A=100
$$

With $C(n)=100n^{\\frac{3}{4}}$, which is increasing for $n>0$,

$$
100n^{\\frac{3}{4}}\\le 2700
$$

$$
n^{\\frac{3}{4}}\\le 27
$$

$$
n\\le 27^{\\frac{4}{3}}
$$

$$
=(3^{3})^{\\frac{4}{3}}=3^{4}=81
$$

Direct check: $C(81)=100\\cdot 27=2700$, and any larger $n$ exceeds the cap. The client covers at most $81$ accounts, so the statement is True.`,
      `**C.** → True

A tie means the practice quote equals the rival quote $R(n)=50n$. The practice coefficient comes from the $1900$ increment: the three-quarter powers of $16$ and $81$ are $8$ and $27$, so

$$
19A=1900
$$

$$
A=100
$$

Equate the two schedules:

$$
100n^{\\frac{3}{4}}=50n
$$

For $n>0$, divide by $50n^{\\frac{3}{4}}$:

$$
2=n^{\\frac{1}{4}}
$$

$$
n=16
$$

The common bill is

$$
C(16)=100\\cdot 8=800
$$

$$
R(16)=50\\cdot 16=800
$$

The ratio then ranks every larger engagement:

$$
\\frac{C(n)}{R(n)}=\\frac{100n^{\\frac{3}{4}}}{50n}
$$

$$
=2n^{-\\frac{1}{4}}
$$

For $n>16$, $n^{\\frac{1}{4}}>2$, so the ratio is strictly less than $1$. The firms tie at $16$ accounts and the practice is cheaper for every larger size, so the statement is True.`,
      `**D.** → True

A bill of $12500$ is inverted through $C(n)=An^{\\frac{3}{4}}$. The coefficient is the $1900$ gap divided by the difference of the two shape factors:

$$
A=\\frac{1900}{81^{\\frac{3}{4}}-16^{\\frac{3}{4}}}
$$

$$
=\\frac{1900}{27-8}=100
$$

Now invert the target bill:

$$
100n^{\\frac{3}{4}}=12500
$$

$$
n^{\\frac{3}{4}}=125=5^{3}
$$

$$
n=125^{\\frac{4}{3}}
$$

$$
=(5^{3})^{\\frac{4}{3}}=5^{4}=625
$$

Forward check: $625^{\\frac{3}{4}}=125$ and $100\\cdot 125=12500$. A bill of $12500$ is $625$ accounts, so the statement is True.`,
      `**E.** → False

Doubling the account count scales the bill by $2^{0.75}$, and the coefficient cancels:

$$
\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}
$$

$$
\\approx 1.6818
$$

The relative increase is

$$
2^{\\frac{3}{4}}-1\\approx 0.6818=68.18\\%
$$

The exponent $0.75$ is not a $75\\%$ response. Doubling raises the bill by about $68\\%$, not by exactly $75\\%$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 51,
    solution_overview: `Audit cost follows $C(n)=An^{\\frac{3}{4}}$; the bill rises by $1900$ from $16$ to $81$ accounts. The rival charges $R(n)=50n$.

**Part 1:** Use the two exact fourth-power inputs:

$$A(81^{\\frac{3}{4}}-16^{\\frac{3}{4}})=A(27-8)=1900$$

**Part 2:** Recover and compare the schedules:

$$C(n)=100n^{\\frac{3}{4}}, qquad R(n)=50n, qquad C=R\\Rightarrow n=16$$

**Part 3:** Invert the cap and target bill:

$$C(n)\\le2700\\Rightarrow n\\le81, qquad C(n)=12500\\Rightarrow n=625$$

**Answer.** $A=100$ | cap $81$ accounts | rival crossover $n=16$ | $12500$ bill at $n=625$`,
  },
  {
    id: `math-8-52`,
    case_id: `MATH 8.52`,
    title: `Airborne Particle Concentration Downwind`,
    context: `Downwind particle concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre, where $x>0$ is distance from the stack in metres. A monitor at $4$ metres reads exactly $43.75$ more than a monitor at $16$ metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The concentration law is $c(x)=400x^{-1.5}$.`,
      `Concentration is at most $6.25$ precisely when the monitor is at least $16$ metres from the stack.`,
      `Halving the distance multiplies concentration by exactly $2^{1.5}=2\\sqrt{2}$.`,
      `At $100$ metres, concentration is $0.4$ microgram per cubic metre.`,
      `Doubling the distance cuts concentration by exactly $50\\%$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The $43.75$ gap is a difference of two concentrations, not a reading at one monitor. Evaluate the inverse three-halves factors first:

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
16^{-\\frac{3}{2}}=\\frac{1}{64}
$$

$$
c(4)-c(16)=A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)
$$

$$
=\\frac{7A}{64}
$$

$$
\\frac{7A}{64}=43.75
$$

$$
7A=43.75\\cdot 64=2800
$$

$$
A=400
$$

The recovered law is $c(x)=400x^{-1.5}$, so the statement is True.`,
      `**B.** → True

Concentration at most $6.25$ is the inequality $c(x)\\le 6.25$. The monitors fix the coefficient through the reported gap $43.75$:

$$
\\frac{7A}{64}=43.75
$$

$$
A=400
$$

Solve the boundary:

$$
400x^{-\\frac{3}{2}}=6.25
$$

$$
x^{\\frac{3}{2}}=\\frac{400}{6.25}=64
$$

$$
x=64^{\\frac{2}{3}}=16
$$

The curve is decreasing for $x>0$, so $c(x)\\le 6.25$ if and only if $x\\ge 16$. The endpoint belongs to the region because $c(16)=\\frac{400}{64}=6.25$. Concentration is at most $6.25$ precisely when the monitor is at least $16$ metres away, so the statement is True.`,
      `**C.** → True

Halving distance is the scale factor $\\left(\\frac{1}{2}\\right)^{-1.5}$. The coefficient cancels:

$$
\\frac{c\\left(\\frac{x}{2}\\right)}{c(x)}=\\left(\\frac{1}{2}\\right)^{-\\frac{3}{2}}
$$

$$
=2^{\\frac{3}{2}}=2\\sqrt{2}
$$

The two displayed forms in the claim are the same number, so the statement is True.`,
      `**D.** → True

A reading at $100$ metres needs the coefficient in $c(x)=Ax^{-1.5}$. The monitors differ by $43.75$, which is $\\frac{7A}{64}$:

$$
\\frac{7A}{64}=\\frac{175}{4}
$$

$$
7A=2800
$$

$$
A=400
$$

The shape factor at $100$ metres is

$$
100^{\\frac{3}{2}}=(\\sqrt{100})^{3}=10^{3}=1000
$$

$$
c(100)=\\frac{400}{1000}=0.4
$$

Concentration at $100$ metres is $0.4$ microgram per cubic metre, so the statement is True.`,
      `**E.** → False

Doubling distance scales concentration by $2^{-1.5}$, with $A$ cancelling:

$$
\\frac{c(2x)}{c(x)}=2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}
$$

$$
\\approx 0.3536
$$

About $35.36\\%$ of the original concentration survives, so the cut is about $64.64\\%$, not $50\\%$. A $50\\%$ cut would require exponent $-1$. The actual reduction is larger, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 52,
    solution_overview: `Concentration is $c(x)=Ax^{\\frac{-3}{2}}$, calibrated by the difference between monitors at $4$ and $16$ metres.

**Part 1:** Translate the monitor difference:

$$A\\left(\\frac18-\\frac1{64}\\right)=43.75$$

**Part 2:** Recover the model and its scale law:

$$c(x)=400x^{\\frac{-3}{2}}, qquad \\frac{c(kx)}{c(x)}=k^{\\frac{-3}{2}}$$

**Part 3:** Solve the threshold and evaluate the exact factors:

$$c(x)\\le6.25\\Longleftrightarrow x\\ge16, quad (\\frac{1}{2})^{\\frac{-3}{2}}=2\\sqrt2, quad c(100)=0.4$$

**Answer.** $A=400$ | threshold $x=16$ m | halving factor $2\\sqrt2$ | $c(100)=0.4$`,
  },
  {
    id: `math-8-53`,
    case_id: `MATH 8.53`,
    title: `Storm Surge Feeding a Cubic Loss Index`,
    context: `A reinsurer models coastal losses in two stages. Storm surge height is $s(w)=0.5 w^{0.5}$ metres for a wind speed of $w>0$, and the loss index rises with the cube of surge height, $L(s)=32 s^{3}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The composed loss index is $L(w)=4w^{1.5}$.`,
      `Doubling the wind speed multiplies the loss index by about $2.83$.`,
      `The loss index reaches $1000$ at a wind speed of about $39.7$.`,
      `At a wind speed of $64$, the loss index is $2048$.`,
      `Increasing wind speed by $50\\%$ raises the loss index by about $83.7\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The loss index is a composition: substitute the surge law into $L(s)=32s^{3}$.

$$
L(w)=32\\left(0.5w^{0.5}\\right)^{3}
$$

$$
=32\\cdot 0.5^{3}\\cdot w^{0.5\\cdot 3}
$$

$$
0.5^{3}=0.125
$$

$$
32\\cdot 0.125=4
$$

$$
0.5\\cdot 3=1.5
$$

$$
L(w)=4w^{1.5}
$$

The composed law is $4w^{1.5}$, so the statement is True.`,
      `**B.** → True

Doubling wind speed scales the composed index by $2^{1.5}$, because the stage exponents multiply and the coefficient cancels:

$$
\\frac{L(2w)}{L(w)}=2^{0.5\\cdot 3}=2^{1.5}
$$

$$
2^{1.5}=2\\sqrt{2}\\approx 2.828
$$

That is about $2.83$, so the statement is True.`,
      `**C.** → True

Inverting a loss of $1000$ needs the composed law, including the coefficient $4$:

$$
L(w)=32\\left(0.5w^{0.5}\\right)^{3}
$$

$$
=4w^{1.5}
$$

$$
4w^{1.5}=1000
$$

$$
w^{1.5}=250
$$

$$
w=250^{\\frac{2}{3}}
$$

$$
6.3^{3}=250.047
$$

$$
250^{\\frac{2}{3}}\\approx 6.2996^{2}\\approx 39.69
$$

That is about $39.7$, so the statement is True.`,
      `**D.** → True

At wind speed $64$, compute surge height first, then the cubic loss index:

$$
s(64)=0.5\\cdot 64^{0.5}=0.5\\cdot 8=4
$$

$$
L=32\\cdot 4^{3}
$$

$$
=32\\cdot 64=2048
$$

The loss index at wind speed $64$ is $2048$, so the statement is True.`,
      `**E.** → True

A $50\\%$ increase in wind speed is the multiplier $1.5$ acting through the composed exponent $1.5$:

$$
\\frac{L(1.5w)}{L(w)}=1.5^{1.5}
$$

$$
1.5^{1.5}=1.5\\sqrt{1.5}\\approx 1.8371
$$

$$
1.8371-1=0.8371=83.71\\%
$$

That is about $83.7\\%$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 53,
    solution_overview: `Surge is $s(w)=0.5w^{0.5}$ metres and the loss index is $L(s)=32s^{3}$.

**Part 1: Building the model.**

Let $w$ = wind speed, $s$ = surge height, $L$ = loss index. This is a chain, so composing multiplies exponents and raises the inner coefficient to the outer power.

**1. Translate: the surge stage.**

$$s(w) = 0.5w^{0.5}$$

**2. Translate: the loss stage applied to it.**

$$L(w) = 32\\left(0.5w^{0.5}\\right)^{3}$$

**Part 2: The model.**

$$32 \\times 0.5^{3} = 4, \\qquad 0.5 \\times 3 = 1.5 \\tag{1}$$

$$L(w) = 4w^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** Levels from (2), checked stage by stage:

$$L(25) = 500 \\;\\; (s = 2.5), \\qquad L(100) = 4000 \\;\\; (s = 5)$$

**2.** The composed scale factor for a doubling of the wind speed:

$$2^{1.5} \\approx 2.83$$

Working stage by stage gives the same number. Surge rises by the square root factor, and the loss stage cubes it:

$$\\left(2^{0.5}\\right)^{3} \\approx 1.414^{3} \\approx 2.83$$

**3.** Inverting the composed law turns a loss budget into a wind speed:

$$w = \\left(\\frac{L}{4}\\right)^{\\frac{2}{3}}, \\qquad L = 4000 \\;\\Rightarrow\\; w = 100$$

**4.** The composed exponent exceeds $1$, so losses are convex in wind speed:

$$4^{1.5} = 8 > 4$$

**5.** The concave surge stage ($0.5$) is more than offset by the cubic loss stage, which is the modelling point of the chain.

**Answer.** $L(w) = 4w^{1.5}$ | composed exponent $1.5$ | $L(100) = 4000$`,
  },
  {
    id: `math-8-54`,
    case_id: `MATH 8.54`,
    title: `Market Impact of a Block Trade`,
    context: `A broker models price impact as $I(v)=A v^{0.5}$ basis points, where $v>0$ is order size as a fraction of average daily volume. Increasing an order from $0.04$ ADV to $0.09$ ADV adds exactly $6$ basis points of impact. The scaled impact charge is $vI(v)$, while a notional fee is $F(v)=30v$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The impact law is $I(v)=60\\sqrt{v}$.`,
      `Increasing order size from $0.04$ to $0.09$ ADV multiplies impact by $1.5$.`,
      `The notional fee and scaled impact charge break even at $v=0.25$ ADV, with impact charge lower below that size.`,
      `At $v=0.16$ ADV, impact is $24$ basis points and the scaled impact charge is $3.84$.`,
      `The scaled impact charge is proportional to order size.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The extra $6$ basis points is the increment $I(0.09)-I(0.04)$, not the impact of the larger order. The square roots are one-decimal:

$$
\\sqrt{0.09}=0.3
$$

$$
\\sqrt{0.04}=0.2
$$

$$
A(0.3-0.2)=6
$$

$$
0.1A=6
$$

$$
A=60
$$

The impact law is $I(v)=60\\sqrt{v}$, so the statement is True.`,
      `**B.** → True

The size ratio from $0.04$ to $0.09$ ADV is $2.25$. Square-root impact multiplies by the square root of that ratio, and $A$ cancels:

$$
\\frac{0.09}{0.04}=2.25
$$

$$
\\frac{I(0.09)}{I(0.04)}=2.25^{0.5}
$$

$$
=\\sqrt{2.25}=1.5
$$

Impact is multiplied by $1.5$, so the statement is True.`,
      `**C.** → True

Break-even compares the scaled charge $vI(v)$ with $F(v)=30v$. Recover $A$ from the $6$ basis-point increment:

$$
\\sqrt{0.09}-\\sqrt{0.04}=0.3-0.2=0.1
$$

$$
0.1A=6
$$

$$
A=60
$$

Then

$$
I(v)=60\\sqrt{v}
$$

$$
vI(v)=60v^{\\frac{3}{2}}
$$

Set the charge equal to the fee:

$$
60v^{\\frac{3}{2}}=30v
$$

For $v>0$, divide by $30v$:

$$
2\\sqrt{v}=1
$$

$$
v=\\left(\\frac{1}{2}\\right)^{2}=0.25
$$

At that size both sides equal $7.5$:

$$
I(0.25)=60\\cdot 0.5=30
$$

$$
0.25\\cdot 30=7.5,\\qquad F(0.25)=30\\cdot 0.25=7.5
$$

The ratio of charge to fee is $2\\sqrt{v}$, which is less than $1$ on $0<v<0.25$. Break-even is at $0.25$ ADV and the impact charge is lower below that size, so the statement is True.`,
      `**D.** → True

The claim reports both impact and the scaled charge at $v=0.16$. The $6$ point increment over a $0.1$ gap in $\\sqrt{v}$ gives $A=60$:

$$
A=\\frac{6}{0.3-0.2}=60
$$

$$
I(0.16)=60\\sqrt{0.16}=60\\cdot 0.4=24
$$

$$
vI(v)=0.16\\cdot 24=3.84
$$

Both figures match, so the statement is True.`,
      `**E.** → False

The scaled charge multiplies square-root impact by $v$, which raises the exponent from $\\frac{1}{2}$ to $\\frac{3}{2}$:

$$
vI(v)=v\\cdot Av^{\\frac{1}{2}}=Av^{\\frac{3}{2}}
$$

A charge proportional to order size would have exponent $1$ and would double when $v$ doubles. Here

$$
\\frac{(2v)I(2v)}{vI(v)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.828
$$

The charge is a three-halves power, not a proportional law, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 54,
    solution_overview: `Impact is $I(v)=Av^{\\frac{1}{2}}$, calibrated by the six-basis-point increase from $0.04$ to $0.09$ ADV. The scaled charge is $vI(v)$.

**Part 1:** Use the impact difference:

$$A(0.3-0.2)=6$$

**Part 2:** Recover impact and charge laws:

$$I(v)=60\\sqrt v, qquad vI(v)=60v^{\\frac{3}{2}}, qquad F(v)=30v$$

**Part 3:** Evaluate scaling and break-even:

$$\\sqrt{2.25}=1.5, quad 60v^{\\frac{3}{2}}=30v\\Rightarrow v=0.25, quad I(0.16)=24$$

**Answer.** $A=60$ bp | break-even $v=0.25$ ADV | scaled impact charge has exponent $\\frac{3}{2}$`,
  },
  {
    id: `math-8-55`,
    case_id: `MATH 8.55`,
    title: `Allometric Energy Use Across Livestock Weights`,
    context: `Daily energy use follows $E(m)=A m^{\\frac{2}{3}}$ units for body mass $m>0$ kilograms. A $64$ kg animal uses exactly $70$ more energy units per day than a $27$ kg animal. A herd's total use is the sum of its animals' individual uses. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The energy law is $E(m)=10m^{\\frac{2}{3}}$.`,
      `Doubling body mass multiplies energy use by exactly $2^{\\frac{2}{3}}=\\sqrt[3]{4}$.`,
      `Eight $27$ kg animals use twice as much total energy as one $216$ kg animal.`,
      `Combining two equal animals into one animal of twice the mass leaves total energy use unchanged.`,
      `Energy use per kilogram is constant across body masses.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The $70$ extra units is the difference $E(64)-E(27)$. Both masses are cubes, so the two-thirds powers are integers:

$$
27^{\\frac{2}{3}}=9
$$

$$
64^{\\frac{2}{3}}=16
$$

$$
E(64)-E(27)=A(16-9)=7A
$$

$$
7A=70
$$

$$
A=10
$$

The energy law is $E(m)=10m^{\\frac{2}{3}}$, so the statement is True.`,
      `**B.** → True

Doubling mass scales energy by $2^{\\frac{2}{3}}$. The coefficient and the starting mass cancel:

$$
\\frac{E(2m)}{E(m)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}=(2^{2})^{\\frac{1}{3}}=\\sqrt[3]{4}
$$

The two forms in the claim are identical, so the statement is True.`,
      `**C.** → True

Herd totals apply the law to each animal and then add. The coefficient cancels in the comparison, and both masses are cubes:

$$
27^{\\frac{2}{3}}=9,\\qquad 216^{\\frac{2}{3}}=36
$$

$$
\\frac{8E(27)}{E(216)}=\\frac{8A\\cdot 27^{\\frac{2}{3}}}{A\\cdot 216^{\\frac{2}{3}}}
$$

$$
=\\frac{8\\cdot 9}{36}=2
$$

The eight small animals use twice the energy of the one $216$ kg animal. They also carry the same total mass $8\\cdot 27=216$, so the doubling is the concave exponent at work, not a mass difference, so the statement is True.`,
      `**D.** → False

Two equal animals use $2E(m)$. One animal of twice the mass uses $E(2m)$:

$$
E(2m)=2^{\\frac{2}{3}}E(m)
$$

$$
2^{\\frac{2}{3}}\\approx 1.587<2
$$

The combined animal therefore uses less energy than the pair, not the same amount. Total use changes, so the statement is False.`,
      `**E.** → False

Energy per kilogram divides the allometric law by mass, which lowers the exponent:

$$
\\frac{E(m)}{m}=Am^{\\frac{2}{3}-1}=Am^{-\\frac{1}{3}}
$$

That still depends on $m$. Comparing the two given animals, the coefficient cancels:

$$
\\frac{\\frac{E(64)}{64}}{\\frac{E(27)}{27}}=\\left(\\frac{64}{27}\\right)^{-\\frac{1}{3}}
$$

$$
=\\frac{3}{4}
$$

Per-kilogram use at $64$ kg is only three-quarters of the value at $27$ kg, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 55,
    solution_overview: `Energy follows $E(m)=Am^{\\frac{2}{3}}$, calibrated by the $70$-unit difference between $64$ kg and $27$ kg animals.

**Part 1:** Translate the two-point calibration:

$$A(64^{\\frac{2}{3}}-27^{\\frac{2}{3}})=A(16-9)=70$$

**Part 2:** Recover the individual and per-kilogram laws:

$$E(m)=10m^{\\frac{2}{3}}, qquad \\frac{E(m)}m=10m^{\\frac{-1}{3}}$$

**Part 3:** Apply exact scaling and compose herd totals:

$$\\frac{E(2m)}{E(m)}=2^{\\frac{2}{3}}=\\sqrt[3]{4}, quad 8E(27)=720, quad E(216)=360$$

**Answer.** $A=10$ | doubling factor $2^{\\frac{2}{3}}$ | eight $27$ kg animals use twice one $216$ kg animal`,
  },
  {
    id: `math-8-56`,
    case_id: `MATH 8.56`,
    title: `Retail Catchment Under a Distance-Decay Law`,
    context: `Weekly footfall at a retail park from a residential zone follows $f(d)=A d^{-1.5}$ visitors, where $d>0$ is the driving distance in kilometres. The planning file omits the coefficient: it records only that a zone $4$ kilometres away supplies $350$ more visitors a week than a zone $16$ kilometres away. A zone counts as core catchment when it supplies at least $100$ visitors a week. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the footfall law is $3200$.`,
      `The zone four kilometres away supplies $400$ visitors a week.`,
      `Quadrupling the driving distance cuts footfall to one eighth.`,
      `The core-catchment boundary lies just beyond $10$ kilometres.`,
      `A zone nine kilometres away falls outside the core catchment.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The recorded gap is $f(4)-f(16)=350$, so the coefficient multiplies the difference of the two shape factors.

$$
4^{1.5}=8
$$

$$
16^{1.5}=64
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=350
$$

$$
A\\cdot\\frac{7}{64}=350
$$

$$
A=350\\cdot\\frac{64}{7}=3200
$$

The coefficient of the footfall law is $3200$, so the statement is True.`,
      `**B.** → True

The zone four kilometres away supplies $A\\cdot 4^{-1.5}$ visitors. The file records only a gap, so recover $A$ from that gap and then evaluate.

$$
4^{-1.5}=\\frac{1}{8}
$$

$$
16^{-1.5}=\\frac{1}{64}
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=350
$$

$$
A=3200
$$

$$
f(4)=\\frac{3200}{8}=400
$$

The nearer zone supplies $400$ visitors a week, so the statement is True.`,
      `**C.** → True

Quadrupling the driving distance multiplies footfall by $4^{-1.5}$, and the coefficient cancels.

$$
\\frac{f(4d)}{f(d)}=4^{-1.5}
$$

$$
4^{-1.5}=\\frac{1}{4^{\\frac{3}{2}}}=\\frac{1}{8}
$$

Footfall falls to one eighth, so the statement is True.`,
      `**D.** → True

The core-catchment boundary is the distance where footfall equals $100$. Recover $A$ from the recorded gap, then invert.

$$
A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=350
$$

$$
\\frac{7A}{64}=350
$$

$$
A=3200
$$

$$
\\frac{3200}{d^{1.5}}=100
$$

$$
d^{1.5}=32
$$

$$
d=32^{\\frac{2}{3}}
$$

$$
32=2^{5}
$$

$$
d=(2^{5})^{\\frac{2}{3}}=2^{\\frac{10}{3}}\\approx 10.08
$$

$$
f(10)=\\frac{3200}{10^{1.5}}\\approx 101.2>100
$$

A zone at $10$ kilometres still clears the threshold, and the boundary lies just beyond it, so the statement is True.`,
      `**E.** → False

A zone nine kilometres away is outside the core catchment only if it supplies fewer than $100$ visitors. Recover $A$ from the recorded gap, then evaluate at nine kilometres, where the fractional exponent is exact.

$$
A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=350
$$

$$
\\frac{7A}{64}=350
$$

$$
A=3200
$$

$$
9^{1.5}=(3^{2})^{\\frac{3}{2}}=3^{3}=27
$$

$$
f(9)=\\frac{3200}{27}\\approx 118.5
$$

Since $118.5>100$, the zone still counts as core catchment, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 56,
    solution_overview: `Footfall follows $f(d)=Ad^{-1.5}$ visitors a week from a zone $d>0$ kilometres away. A zone at $4$ kilometres supplies $350$ more visitors than one at $16$ kilometres, and core catchment means at least $100$ visitors a week.

**Part 1: Building the model.**

Let $d$ = driving distance in kilometres and $f(d)$ = weekly visitors. The exponent is given and negative, so footfall decays with distance; the recorded gap between two zones fixes the coefficient.

**1. Translate: the two zones.** Both distances are perfect squares, so the shape factors are exact:

$$4^{1.5} = 8, \\qquad 16^{1.5} = 64$$

**2. Translate: the recorded gap.** Write both zones through the law and subtract:

$$\\frac{A}{8} - \\frac{A}{64} = 350$$

**3. Translate: the catchment rule.** The threshold sets a level to invert:

$$f(d) = 100$$

**Part 2: The model.**

$$\\frac{7A}{64} = 350 \\tag{1}$$

$$\\frac{A}{d^{1.5}} = 100 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$A = 350 \\cdot \\frac{64}{7} = 3200, \\qquad f(d) = \\frac{3200}{d^{1.5}}$$

**2.** Check the two zones against the file:

$$f(4) = 400, \\qquad f(16) = 50, \\qquad 400 - 50 = 350 \\;\\checkmark$$

**3.** Equation (2) inverts at the threshold, using the reciprocal exponent:

$$d^{1.5} = 32 \\;\\Rightarrow\\; d = 32^{\\frac{2}{3}} = 2^{\\frac{10}{3}} \\approx 10.08 \\text{ km}$$

**4.** Scale factors need only the exponent:

$$\\frac{f(4d)}{f(d)} = 4^{-1.5} = \\tfrac{1}{8}$$

**5.** Test the zones in question against the threshold:

$$f(9) = \\frac{3200}{27} \\approx 118.5 > 100, \\qquad f(10) \\approx 101.2 > 100$$

**Answer.** $A = 3200$ | $f(d) = 3200d^{-1.5}$ | $f(4) = 400$ | core catchment out to $d \\approx 10.08$ km`,
  },
  {
    id: `math-8-57`,
    case_id: `MATH 8.57`,
    title: `Rooftop Solar Output Across Two Installed Arrays`,
    context: `Daily output from a rooftop solar installation follows $y(a)=A a^{r}$ kilowatt-hours, where $a>0$ is the installed panel area in square metres. Two arrays are in service: a $100$ m² array delivers $240$ kWh a day, and a $225$ m² array delivers $360$ kWh. A proposal would expand the second array to $450$ m². Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Output is proportional to the installed area.`,
      `The exponent is $0.5$ and the coefficient is $24$.`,
      `Doubling the installed area raises output by about $50\\%$.`,
      `Expanding the $225$ m² array to $450$ m² would push output above $520$ kWh.`,
      `Output per square metre rises as the array grows.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

Proportionality would mean output scales by the same factor as installed area.

$$
\\frac{225}{100}=\\frac{9}{4}
$$

$$
\\frac{360}{240}=\\frac{3}{2}
$$

Those ratios are not equal. A proportional forecast for the larger array would be

$$
240\\cdot\\frac{9}{4}=540
$$

which overshoots the recorded $360$ kWh. Output is not proportional to installed area, so the statement is False.`,
      `**B.** → True

Two installed arrays determine both constants. Their ratio isolates the exponent.

$$
\\left(\\frac{225}{100}\\right)^{r}=\\frac{360}{240}
$$

$$
\\left(\\frac{9}{4}\\right)^{r}=\\frac{3}{2}
$$

Because $\\left(\\frac{9}{4}\\right)^{\\frac{1}{2}}=\\frac{3}{2}$,

$$
r=0.5
$$

The smaller array then fixes the coefficient:

$$
A\\cdot 100^{0.5}=240
$$

$$
A\\cdot 10=240
$$

$$
A=24
$$

The larger array confirms the same value:

$$
\\frac{360}{225^{0.5}}=\\frac{360}{15}=24
$$

The fitted law is $y(a)=24 a^{0.5}$. Both constants match the claim, so the statement is True.`,
      `**C.** → False

A doubling is a multiplier of $2$, not the $2.25$ that separates the two installed arrays. The exponent comes from those arrays:

$$
\\left(\\frac{225}{100}\\right)^{r}=\\frac{360}{240}
$$

$$
\\left(\\frac{9}{4}\\right)^{r}=\\frac{3}{2}
$$

$$
r=0.5
$$

$$
\\frac{y(2a)}{y(a)}=2^{0.5}\\approx 1.414
$$

$$
2^{0.5}-1\\approx 0.414
$$

The recorded $50\\%$ rise sits between $100$ m² and $225$ m², a $2.25$-fold expansion rather than a doubling. A doubling raises output by about $41\\%$, not $50\\%$, so the statement is False.`,
      `**D.** → False

The proposal doubles the $225$ m² array, whose output is already recorded as $360$ kWh. The exponent is the one that fits the two installed arrays.

$$
\\left(\\frac{225}{100}\\right)^{r}=\\frac{360}{240}
$$

$$
\\left(\\frac{9}{4}\\right)^{r}=\\frac{3}{2}
$$

$$
r=0.5
$$

$$
y(450)=360\\cdot 2^{0.5}
$$

$$
360\\cdot 1.4142\\approx 509.1
$$

$$
509.1<520
$$

The expansion stays below $520$ kWh, so the statement is False.`,
      `**E.** → False

Output per square metre is total output divided by installed area.

$$
\\frac{240}{100}=2.4
$$

$$
\\frac{360}{225}=1.6
$$

The figure falls from $2.4$ to $1.6$ as the array grows, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 57,
    solution_overview: `Solar output is $y(a)=Aa^{r}$ kWh for an array of $a>0$ m², with $y(100)=240$ and $y(225)=360$; a proposal doubles the second array to $450$ m².

**Part 1: Building the model.**

Let $a$ = panel area in square metres and $y(a)$ = daily output. Two unknowns need the two installed arrays: their ratio carries the exponent, and either array then carries the coefficient.

**1. Translate: the ratio of the two arrays.**

$$\\left(\\frac{225}{100}\\right)^{r} = \\frac{360}{240}$$

**2. Translate: the coefficient.**

$$A(100)^{r} = 240$$

**Part 2: The model.**

$$2.25^{r} = 1.5 \\tag{1}$$

$$y(a) = A a^{r} \\tag{2}$$

**Part 3: Solve.**

**1.** Since $1.5=2.25^{\\frac{1}{2}}$, equation (1) resolves without logarithms:

$$r = 0.5$$

**2.** Both arrays give the same coefficient, confirming the fit:

$$A = \\frac{240}{10} = 24 = \\frac{360}{15}, \\qquad y(a) = 24\\sqrt{a}$$

**3.** Scale factors must match the multiplier being asked about:

$$2^{0.5} \\approx 1.414 \\;(+41\\%), \\qquad 2.25^{0.5} = 1.5 \\;(+50\\%)$$

**4.** The proposal is a doubling of the second array:

$$y(450) = 24\\sqrt{450} \\approx 509.1 \\text{ kWh} < 520$$

**5.** Output per square metre falls with size, so each expansion adds less than the last:

$$\\frac{y(a)}{a} = 24a^{-0.5}: \\quad 2.4,\\; 1.6,\\; 1.13 \\text{ at } a = 100,\\,225,\\,450$$

**Answer.** $r = 0.5$ | $A = 24$ | $y(a) = 24\\sqrt{a}$ | proposal delivers $\\approx 509$ kWh`,
  },
  {
    id: `math-8-58`,
    case_id: `MATH 8.58`,
    title: `Battery Cell Costs Down a Learning Curve`,
    context: `Unit cost for battery cells follows $c(N)=A N^{b}$ euros, where $N>0$ is cumulative output in thousands of cells. Two milestones are recorded: at $100$ thousand cells the unit cost was $80$, and at $400$ thousand it was $40$. Cumulative spend is unit cost multiplied by volume. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent of the learning curve is $-0.5$.`,
      `Quadrupling cumulative volume halves the unit cost.`,
      `Unit cost falls below $20$ only beyond $1600$ thousand cells.`,
      `Cumulative spend grows with the square root of volume.`,
      `Doubling cumulative volume halves the unit cost.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The two milestones fix the exponent through their ratio, which cancels the coefficient.

$$
\\left(\\frac{400}{100}\\right)^{b}=\\frac{40}{80}
$$

$$
4^{b}=\\frac{1}{2}
$$

$$
(2^{2})^{b}=2^{-1}
$$

$$
2^{2b}=2^{-1}
$$

$$
2b=-1
$$

$$
b=-0.5
$$

The exponent of the learning curve is $-0.5$, so the statement is True.`,
      `**B.** → True

Quadrupling volume is exactly the move from $100$ to $400$ thousand cells, and unit cost moves from $80$ to $40$.

$$
\\frac{c(400)}{c(100)}=\\frac{40}{80}=\\frac{1}{2}
$$

For $c(N)=A N^{b}$ the same multiplier applies at every starting volume:

$$
\\frac{c(4N)}{c(N)}=4^{b}=\\frac{1}{2}
$$

Each quadrupling halves the unit cost, so the statement is True.`,
      `**C.** → True

A unit cost of $20$ is inverted through $c(N)=A N^{b}$. The milestone ratio gives the exponent, then the first milestone gives the coefficient.

$$
\\left(\\frac{400}{100}\\right)^{b}=\\frac{40}{80}
$$

$$
4^{b}=\\frac{1}{2}
$$

$$
b=-0.5
$$

$$
A\\cdot 100^{-0.5}=80
$$

$$
\\frac{A}{10}=80
$$

$$
A=800
$$

$$
800 N^{-0.5}=20
$$

$$
\\sqrt{N}=\\frac{800}{20}=40
$$

$$
N=1600
$$

$$
c(1600)=\\frac{800}{\\sqrt{1600}}=\\frac{800}{40}=20
$$

At $N=1600$ the unit cost equals $20$, and it falls below $20$ only for larger volume, so the statement is True.`,
      `**D.** → True

Cumulative spend is unit cost multiplied by volume, which raises the exponent by one.

$$
S(N)=N\\cdot A N^{b}=A N^{b+1}
$$

The milestone ratio isolates $b$:

$$
\\left(\\frac{400}{100}\\right)^{b}=\\frac{40}{80}
$$

$$
4^{b}=\\frac{1}{2}
$$

$$
b=-0.5
$$

$$
S(N)=A N^{0.5}
$$

Spend grows with $\\sqrt{N}$, so the statement is True.`,
      `**E.** → False

A doubling is a multiplier of $2$, whereas the recorded pair is a quadrupling. From that pair,

$$
4^{b}=\\frac{1}{2}
$$

$$
b=-0.5
$$

$$
\\frac{c(2N)}{c(N)}=2^{-0.5}\\approx 0.707
$$

From the first milestone,

$$
c(200)=80\\cdot 2^{-0.5}\\approx 56.6
$$

Half of $80$ would be $40$. The unit cost falls by about $29\\%$, not by half, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 58,
    solution_overview: `Unit cost is $c(N)=AN^{b}$ euros at cumulative volume $N>0$ thousand cells, with $c(100)=80$ and $c(400)=40$. Cumulative spend is $S=Nc(N)$.

**Part 1: Building the model.**

Let $N$ = cumulative volume in thousands of cells, $c$ = unit cost, $S$ = cumulative spend. Two milestones give two equations; their ratio isolates the exponent, and either milestone then fixes the coefficient.

**1. Translate: the ratio of the milestones.**

$$\\left(\\frac{400}{100}\\right)^{b} = \\frac{40}{80}$$

**2. Translate: cumulative spend.** Multiplying by $N$ raises the exponent by one:

$$S(N) = N \\cdot A N^{b} = A N^{b+1}$$

**Part 2: The model.**

$$c(N) = 800\\,N^{-0.5} \\tag{1}$$

$$S(N) = 800\\,N^{0.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The ratio gives the exponent and either milestone the coefficient:

$$4^{b} = 0.5 \\;\\Rightarrow\\; b = -0.5, \\qquad A = 80 \\times 10 = 800$$

**2.** Unit costs down the curve:

$$c(100) = 80, \\quad c(400) = 40, \\quad c(1600) = 20, \\quad c(2500) = 16$$

**3.** Scale factors: a quadrupling halves, a doubling does not:

$$4^{-0.5} = \\tfrac{1}{2}, \\qquad 2^{-0.5} \\approx 0.707 \\;(-29\\%)$$

**4.** Invert (1) to turn a cost target into a volume:

$$N = \\left(\\frac{800}{c}\\right)^{2}, \\qquad c = 20 \\;\\Rightarrow\\; N = 1600$$

**5.** Equation (2) shows spend still rising while unit cost falls:

$$S(100) = 8000, \\qquad S(1600) = 32000$$

**Answer.** $b = -0.5$ | $A = 800$ | $c(N) = 800N^{-0.5}$ | $c = 20$ at $N = 1600$`,
  },
  {
    id: `math-8-59`,
    case_id: `MATH 8.59`,
    title: `Sediment Transport Driven by Channel Discharge`,
    context: `Sediment transport in a channel follows $S(v)=A v^{3}$ tonnes per day, where $v>0$ is flow velocity, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity itself depends on discharge through $v(q)=\\frac{q^{0.5}}{2}$. The channel's stability limit is $5000$ tonnes per day. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Sediment transport as a function of discharge is $0.625q^{1.5}$.`,
      `The stability limit of $5000$ tonnes per day is reached at a discharge of $400$.`,
      `Doubling the discharge multiplies transport by about $2.83$.`,
      `Doubling the flow velocity doubles sediment transport.`,
      `Transport per unit of discharge is the same at every discharge.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Sediment as a function of discharge is the composition $S(v(q))$. The gauged run first fixes the transport coefficient.

$$
A\\cdot 3^{3}=135
$$

$$
27A=135
$$

$$
A=5
$$

Substitute $v(q)=\\frac{q^{0.5}}{2}$:

$$
S(q)=5\\left(\\frac{q^{0.5}}{2}\\right)^{3}
$$

$$
S(q)=5\\cdot\\frac{q^{1.5}}{8}
$$

$$
S(q)=0.625 q^{1.5}
$$

The composed law is $0.625 q^{1.5}$, so the statement is True.`,
      `**B.** → True

The stability limit is the discharge where the composed law equals $5000$. Calibrate the transport stage, compose, then invert.

$$
A=\\frac{135}{27}=5
$$

$$
S(q)=5\\left(\\frac{q^{0.5}}{2}\\right)^{3}
$$

$$
S(q)=\\frac{5}{8}q^{1.5}=0.625 q^{1.5}
$$

$$
0.625 q^{1.5}=5000
$$

$$
q^{1.5}=8000
$$

$$
8000^{\\frac{1}{3}}=20
$$

$$
q=20^{2}=400
$$

The limit is reached at a discharge of $400$, so the statement is True.`,
      `**C.** → True

Doubling discharge multiplies transport by $2^{1.5}$, because velocity contributes exponent $0.5$ and transport cubes that.

$$
\\frac{S(2q)}{S(q)}=2^{1.5}
$$

$$
2^{1.5}=2\\cdot 2^{0.5}\\approx 2.828
$$

Through the stages, velocity scales by $2^{0.5}\\approx 1.414$ and $(2^{0.5})^{3}=2^{1.5}$. Transport multiplies by about $2.83$, so the statement is True.`,
      `**D.** → False

Doubling flow velocity acts through the transport exponent $3$, not through the discharge stage.

$$
\\frac{S(2v)}{S(v)}=2^{3}=8
$$

From the gauged run that is

$$
S(6)=135\\cdot 8=1080
$$

which is eight times $135$, not twice $135$. Transport multiplies by eight, so the statement is False.`,
      `**E.** → False

Transport per unit of discharge is $\\frac{S(q)}{q}$. The composed exponent is $0.5\\times 3=1.5$, so

$$
\\frac{S(q)}{q}=k q^{0.5}
$$

for a positive constant $k$. That quantity rises with $q$ rather than staying constant. Constancy would require composed exponent $1$. Transport per unit of discharge is not the same at every discharge, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `Transport is $S(v)=Av^{3}$ with $S(3)=135$, velocity is $v(q)=\\frac{q^{0.5}}{2}$, and the stability limit is $5000$ tonnes per day.

**Part 1: Building the model.**

Let $q$ = discharge, $v$ = flow velocity, $S$ = sediment transport. One gauged run calibrates the transport stage; composing then multiplies the exponents and cubes the inner coefficient.

**1. Translate: the gauged run.**

$$A(3)^{3} = 135$$

**2. Translate: the composition.**

$$S(q) = 5\\left(\\frac{q^{0.5}}{2}\\right)^{3}$$

**Part 2: The model.**

$$S(v) = 5v^{3} \\tag{1}$$

$$S(q) = 0.625\\,q^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The gauged run gives the coefficient, and cubing the divisor gives the composed constant:

$$A = 5, \\qquad \\frac{5}{8} = 0.625, \\qquad 0.5 \\times 3 = 1.5$$

**2.** Invert (2) at the stability limit:

$$q^{1.5} = 8000 \\;\\Rightarrow\\; q = 8000^{\\frac{2}{3}} = 400, \\qquad v(400) = 10$$

**3.** The two stages carry different scale factors:

$$\\frac{S(2q)}{S(q)} = 2^{1.5} \\approx 2.83, \\qquad \\frac{S(2v)}{S(v)} = 2^{3} = 8$$

**4.** Levels along the composed law:

$$S(36) = 135, \\qquad S(100) = 625, \\qquad S(400) = 5000$$

**5.** Transport per unit of discharge rises, since the composed exponent exceeds $1$:

$$\\frac{S(q)}{q} = 0.625q^{0.5}: \\quad 3.75,\\; 6.25,\\; 12.5 \\text{ at } q = 36,\\,100,\\,400$$

**Answer.** $A = 5$ | $S(q) = 0.625q^{1.5}$ | limit at $q = 400$ with $v = 10$`,
  },
  {
    id: `math-8-60`,
    case_id: `MATH 8.60`,
    title: `Highly Elastic Demand Under a Price Indexation`,
    context: `A commodity trader faces demand $q(p)=A p^{-3}$ units at a price $p>0$, and a price of $2$ clears $500$ units. A proposed indexation would raise the price by $10\\%$ across the board, and the trader wants the effect on both volume and revenue $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising price by $20\\%$ cuts quantity by about $42.1\\%$.`,
      `Revenue is a power function of price with exponent $-2$.`,
      `At a price of $2.50$, revenue is $640$.`,
      `A price rise of $10\\%$ cuts quantity by about $25\\%$.`,
      `A price rise of $10\\%$ cuts revenue by about $17\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

A $20\\%$ price rise is a multiplier of $1.2$ on $q(p)=A p^{-3}$.

$$
\\frac{q(1.2p)}{q(p)}=1.2^{-3}
$$

$$
1.2^{3}=1.728
$$

$$
1.2^{-3}=\\frac{1}{1.728}\\approx 0.5787
$$

$$
1-0.5787=0.4213\\approx 42.1\\%
$$

Quantity falls by about $42.1\\%$, so the statement is True.`,
      `**B.** → True

Revenue is price times quantity, and multiplying $A p^{-3}$ by $p$ raises the exponent by one.

$$
R(p)=p\\cdot A p^{-3}=A p^{-2}
$$

Revenue is a power function of price with exponent $-2$, so the statement is True.`,
      `**C.** → True

Revenue at price $2.50$ needs the coefficient. The observed pair $q(2)=500$ supplies it.

$$
500=A\\cdot 2^{-3}
$$

$$
500=\\frac{A}{8}
$$

$$
A=4000
$$

$$
R(p)=p\\cdot 4000 p^{-3}=4000 p^{-2}
$$

$$
R(2.5)=\\frac{4000}{(2.5)^{2}}
$$

$$
(2.5)^{2}=6.25
$$

$$
R(2.5)=\\frac{4000}{6.25}=640
$$

Revenue at price $2.50$ is $640$, so the statement is True.`,
      `**D.** → True

A $10\\%$ price rise is a multiplier of $1.1$ on quantity.

$$
\\frac{q(1.1p)}{q(p)}=1.1^{-3}
$$

$$
1.1^{3}=1.331
$$

$$
1.1^{-3}=\\frac{1}{1.331}\\approx 0.7513
$$

$$
1-0.7513=0.2487\\approx 24.9\\%
$$

The cut is about $25\\%$, so the statement is True.`,
      `**E.** → True

The same $10\\%$ rise acts on revenue $R(p)=A p^{-2}$, whose exponent is one higher than the demand exponent.

$$
\\frac{R(1.1p)}{R(p)}=1.1^{-2}
$$

$$
1.1^{2}=1.21
$$

$$
1.1^{-2}=\\frac{1}{1.21}\\approx 0.8264
$$

$$
1-0.8264=0.1736\\approx 17.4\\%
$$

Revenue falls by about $17\\%$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 60,
    solution_overview: `Demand is $q(p)=Ap^{-3}$ with $q(2)=500$; revenue is $R=pq$; a proposed indexation raises the price by $10\\%$.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units, $R$ = revenue. The isoelastic form fixes the exponent, the observed pair pins the coefficient, and revenue is derived by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A(2)^{-3} = 500, \\qquad 2^{-3} = \\tfrac{1}{8}$$

**2. Translate: the indexation.** A $10\\%$ rise means a multiplier of $1.1$:

$$\\frac{q(1.1p)}{q(p)} = 1.1^{-3}, \\qquad \\frac{R(1.1p)}{R(p)} = 1.1^{-2}$$

**Part 2: The model.**

$$q(p) = 4000\\,p^{-3} \\tag{1}$$

$$R(p) = 4000\\,p^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A = 500 \\times 8 = 4000$$

**2.** Levels at the current price:

$$q(2) = 500, \\qquad R(2) = 1000$$

**3.** The indexation, computed exactly rather than by elasticity:

$$1.1^{-3} \\approx 0.7513 \\;(-24.9\\%), \\qquad 1.1^{-2} \\approx 0.8264 \\;(-17.4\\%)$$

**4.** Levels after the indexation:

$$q(2.2) \\approx 375.7, \\qquad R(2.2) \\approx 826.4$$

**5.** The two factors are consistent: $0.7513 \\times 1.1 = 0.8264$, so the $10\\%$ price gain recovers only part of the volume loss, as elastic demand requires.

**Answer.** $A = 4000$ | $q(p) = 4000p^{-3}$ | $R(p) = 4000p^{-2}$ | indexation: $-25\\%$ volume, $-17\\%$ revenue`,
  },
  {
    id: `math-8-61`,
    case_id: `MATH 8.61`,
    title: `Weld Strength Recovered From Two Spot Checks`,
    context: `A production weld's tensile strength follows $S(p)=A p^{k}$ newtons, where $p>0$ is the welding current in amperes. Neither constant is on the calibration sheet: the sheet only records that a $4$ A setting produced $40$ N of strength and a $9$ A setting produced $135$ N. The line rejects any weld below $400$ N. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered strength law is $S(p)=5p^{\\frac{3}{2}}$.`,
      `At $16$ A the weld strength is $320$ N.`,
      `The smallest current that clears the $400$ N reject line is below $18$ A.`,
      `Doubling any current multiplies strength by less than $2.5$.`,
      `A $100$ A setting yields exactly $4000$ N of strength.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Two spot checks determine the unknown exponent first, because their ratio cancels the coefficient:

$$\\frac{S(9)}{S(4)}=\\frac{135}{40}=\\frac{27}{8}$$

That ratio is also the current ratio raised to $k$:

$$\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}$$

Both sides are powers of $\\frac{3}{2}$, since $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$ and $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$:

$$\\left(\\frac{3}{2}\\right)^{3}=\\left(\\frac{3}{2}\\right)^{2k}$$

$$2k=3$$

$$k=\\frac{3}{2}$$

The $4$ A reading now carries the coefficient. First $4^{\\frac{3}{2}}=(\\sqrt{4})^{3}=8$:

$$A\\cdot 8=40$$

$$A=5$$

The recovered law is $S(p)=5p^{\\frac{3}{2}}$, so the statement is True.`,
      `**B.** → True

Strength at $16$ A is a substitution into $S(p)=Ap^{k}$. Dividing the two logged strengths isolates the exponent:

$$\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}=\\left(\\frac{3}{2}\\right)^{2k}$$

Matching $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$ gives $k=\\frac{3}{2}$. Then $4^{\\frac{3}{2}}=8$ carries the coefficient:

$$40=A\\cdot 8$$

$$A=5$$

The power at $16$ A is exact:

$$16^{\\frac{3}{2}}=(\\sqrt{16})^{3}=4^{3}=64$$

$$S(16)=5\\cdot 64=320$$

The weld at $16$ A carries $320$ N, so the statement is True.`,
      `**C.** → False

The $400$ N reject line is inverted for current once the law is known. From $\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}$ we get $k=\\frac{3}{2}$, and from $40=A\\cdot 4^{\\frac{3}{2}}=8A$ we get $A=5$. Set strength equal to the floor:

$$5p^{\\frac{3}{2}}=400$$

$$p^{\\frac{3}{2}}=80$$

$$p=80^{\\frac{2}{3}}$$

The cube root of $80$ is about $4.309$, and squaring that value gives

$$80^{\\frac{2}{3}}\\approx 18.57$$

A setting of $18$ A is still short of this threshold:

$$S(18)=5\\cdot 18^{\\frac{3}{2}}\\approx 381.8$$

$$381.8<400$$

The smallest current that clears $400$ N is about $18.57$ A, which is not below $18$ A, so the statement is False.`,
      `**D.** → False

Doubling any current multiplies strength by $2^{k}$, and the coefficient cancels. The logged ratio isolates that exponent:

$$\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}$$

$$\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{2k}$$

$$k=\\frac{3}{2}$$

The doubling factor is then

$$\\frac{S(2p)}{S(p)}=2^{\\frac{3}{2}}=2\\sqrt{2}$$

$$2\\sqrt{2}\\approx 2.828$$

The multiplier is about $2.828$, which is larger than $2.5$ rather than smaller, so the statement is False.`,
      `**E.** → False

The $100$ A figure is a substitution into $S(p)=Ap^{k}$. From $\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}$ we get $k=\\frac{3}{2}$, and from $4^{\\frac{3}{2}}=8$:

$$A=\\frac{40}{8}=5$$

Write $100=10^{2}$:

$$100^{\\frac{3}{2}}=(10^{2})^{\\frac{3}{2}}=10^{3}=1000$$

$$S(100)=5\\cdot 1000=5000$$

The claim of $4000$ N is $1000$ N short of $5000$ N, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 61,
    solution_overview: `Weld strength is $S(p)=Ap^{k}$ newtons, with spot checks $S(4)=40$ and $S(9)=135$, and welds below $400$ N are rejected.

**Part 1: Building the model.**

Let $p$ = welding current in amperes and $S$ = tensile strength in newtons. Neither constant is recorded, so two observations are needed: their ratio carries the exponent, and either observation alone then carries the coefficient.

**1. Translate: the ratio of the spot checks.**

$$\\frac{135}{40}=\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}$$

**2. Translate: the reject line.** A floor on strength becomes a floor on current through the reciprocal exponent $\\frac{2}{3}$:

$$5p^{\\frac{3}{2}}\\ge400 \\quad\\Longleftrightarrow\\quad p\\ge80^{\\frac{2}{3}}$$

**Part 2: The model.**

$$S(p)=5\\,p^{\\frac{3}{2}} \\tag{1}$$

$$\\frac{S(cp)}{S(p)}=c^{\\frac{3}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Both sides of the ratio are powers of $\\frac{3}{2}$, which fixes the exponent and then the coefficient:

$$k=\\frac{3}{2}, \\qquad A\\cdot4^{\\frac{3}{2}}=40 \\quad\\Rightarrow\\quad A=5$$

**2.** Levels at the currents the statements use:

$$S(16)=5\\cdot64=320, \\qquad S(100)=5\\cdot1000=5000$$

**3.** The reject threshold, inverted from $(1)$:

$$p=80^{\\frac{2}{3}}\\approx18.57$$

**4.** The doubling multiplier from $(2)$:

$$2^{\\frac{3}{2}}=2\\sqrt{2}\\approx2.828$$

**5.** An exponent above $1$ makes strength outrun current, so a doubled setting gains far more than $2.5$ times the strength, while the reject line is cleared only above about $18.57$ A rather than below $18$ A.

**Answer.** $S(p)=5p^{\\frac{3}{2}}$ | $S(16)=320$ N | reject threshold $\\approx18.57$ A | doubling factor $2^{\\frac{3}{2}}\\approx2.828$`,
  },
  {
    id: `math-8-62`,
    case_id: `MATH 8.62`,
    title: `Mooring Holding Power Across Kilograms and Tonnes`,
    context: `A harbour buoy's holding power follows $H(m)=A m^{\\frac{2}{3}}$ kilonewtons when mass $m>0$ is measured in kilograms. A trial buoy of $8$ kg held exactly $24$ kN. The harbour authority prefers masses in tonnes ($1$ tonne $=1000$ kg) and writes the same physical law as $H(t)=B t^{\\frac{2}{3}}$ with $t$ in tonnes. A storm protocol demands at least $150$ kN of holding power. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `In kilogram units the holding-power law is $H(m)=6m^{\\frac{2}{3}}$.`,
      `In tonne units the coefficient is $B=600$, so $H(t)=600t^{\\frac{2}{3}}$.`,
      `Reaching $150$ kN requires a mass of exactly $125$ kg.`,
      `Doubling buoy mass multiplies holding power by $2^{\\frac{2}{3}}\\approx1.587$.`,
      `Writing the tonne-form coefficient as $B=6000$ still reproduces the $8$ kg trial.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The exponent $\\frac{2}{3}$ is already given, so the $8$ kg trial pins the kilogram coefficient. Write $8=2^{3}$:

$$8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=2^{2}=4$$

$$4A=24$$

$$A=\\frac{24}{4}=6$$

The kilogram-unit law is $H(m)=6m^{\\frac{2}{3}}$, so the statement is True.`,
      `**B.** → True

The tonne-form coefficient is the kilogram law after the substitution $m=1000t$. First recover $A$ from the trial, using $8=2^{3}$:

$$8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=2^{2}=4$$

$$A=\\frac{24}{4}=6$$

Now rewrite the mass unit:

$$H=6(1000t)^{\\frac{2}{3}}=6\\cdot 1000^{\\frac{2}{3}}\\, t^{\\frac{2}{3}}$$

And $1000=10^{3}$:

$$1000^{\\frac{2}{3}}=(10^{3})^{\\frac{2}{3}}=10^{2}=100$$

$$B=6\\cdot 100=600$$

The tonne form is $H(t)=600t^{\\frac{2}{3}}$, so the statement is True.`,
      `**C.** → True

A target of $150$ kN is inverted for mass after the kilogram coefficient is known. From $H(8)=24$ and the given exponent,

$$A\\cdot 8^{\\frac{2}{3}}=24$$

$$8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=4$$

$$A=\\frac{24}{4}=6$$

Set holding power equal to the storm floor:

$$6m^{\\frac{2}{3}}=150$$

$$m^{\\frac{2}{3}}=25$$

$$m=25^{\\frac{3}{2}}$$

Take the square root first and then cube it:

$$25^{\\frac{3}{2}}=(\\sqrt{25})^{3}=5^{3}=125$$

The storm protocol needs exactly $125$ kg, so the statement is True.`,
      `**D.** → True

Doubling buoy mass multiplies holding power by $2^{\\frac{2}{3}}$, because the coefficient and the starting mass both cancel:

$$\\frac{H(2m)}{H(m)}=\\frac{A(2m)^{\\frac{2}{3}}}{A m^{\\frac{2}{3}}}=2^{\\frac{2}{3}}$$

$$2^{\\frac{2}{3}}=\\sqrt[3]{4}\\approx 1.587$$

The scale factor is $2^{\\frac{2}{3}}\\approx 1.587$ in either unit system, so the statement is True.`,
      `**E.** → False

The proposed coefficient $B=6000$ has to reproduce the recorded $8$ kg trial. That buoy is $0.008$ tonnes:

$$(0.008)^{\\frac{2}{3}}=\\frac{8^{\\frac{2}{3}}}{1000^{\\frac{2}{3}}}=\\frac{4}{100}=0.04$$

$$6000\\cdot 0.04=240$$

The trial held $24$ kN, not $240$ kN. The extra factor of ten is $1000$ in place of $1000^{\\frac{2}{3}}=100$. The figure $B=6000$ does not reproduce the trial, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 62,
    solution_overview: `Holding power is $H(m)=Am^{\\frac{2}{3}}$ kilonewtons in kilograms with $H(8)=24$, the same law in tonnes is $H(t)=Bt^{\\frac{2}{3}}$, and the storm floor is $150$ kN.

**Part 1: Building the model.**

Let $m$ = buoy mass in kilograms, $t$ = the same mass in tonnes, $H$ = holding power in kilonewtons. The exponent is given, so one trial fixes the coefficient. A change of unit is a substitution $m=1000t$, and the conversion enters under the exponent rather than beside it.

**1. Translate: the trial buoy.**

$$A\\cdot8^{\\frac{2}{3}}=24, \\qquad 8^{\\frac{2}{3}}=4$$

**2. Translate: the storm floor.** A target on holding power inverts through the reciprocal exponent $\\frac{3}{2}$:

$$6m^{\\frac{2}{3}}\\ge150 \\quad\\Longleftrightarrow\\quad m\\ge25^{\\frac{3}{2}}$$

**Part 2: The model.**

$$H(m)=6\\,m^{\\frac{2}{3}} \\tag{1}$$

$$H(t)=600\\,t^{\\frac{2}{3}}, \\qquad B=6\\cdot1000^{\\frac{2}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** The trial gives the kilogram coefficient:

$$A=\\frac{24}{4}=6$$

**2.** The unit change gives the tonne coefficient, since $1000^{\\frac{2}{3}}=100$:

$$B=6\\cdot100=600$$

**3.** Both forms reproduce the trial, with $8$ kg written as $0.008$ t:

$$6\\cdot8^{\\frac{2}{3}}=24, \\qquad 600\\cdot0.008^{\\frac{2}{3}}=24$$

**4.** The storm mass and the doubling multiplier:

$$m=25^{\\frac{3}{2}}=125, \\qquad 2^{\\frac{2}{3}}\\approx1.5874$$

**5.** A coefficient of $6000$ would return $240$ kN for the trial buoy, ten times the record, because it converts the unit linearly instead of through the exponent $\\frac{2}{3}$.

**Answer.** $H(m)=6m^{\\frac{2}{3}}$ | $B=600$ | storm mass $125$ kg | doubling factor $2^{\\frac{2}{3}}\\approx1.587$`,
  },
  {
    id: `math-8-63`,
    case_id: `MATH 8.63`,
    title: `Mesh Throughput Against an Inverse-Square Floor`,
    context: `A wireless mesh's sustained throughput follows $T(d)=A d^{-2}$ megabits per second, where $d>0$ is the hop distance in metres. A bench test at $d=4$ m recorded $T=50$ Mbps. The link is rated reliable only while throughput stays at or above $8$ Mbps. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered throughput law is $T(d)=800d^{-2}$.`,
      `The farthest reliable hop distance is exactly $10$ m.`,
      `At $d=25$ m the throughput is $1.28$ Mbps.`,
      `A hop of $11$ m still clears the $8$ Mbps reliability floor.`,
      `Tripling the transmitter coefficient would extend the reliable radius to $30$ m.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The exponent $-2$ is given, so the bench reading at $4$ m pins the coefficient:

$$T(4)=\\frac{A}{4^{2}}=\\frac{A}{16}=50$$

$$A=50\\cdot 16=800$$

The recovered law is $T(d)=800d^{-2}$, so the statement is True.`,
      `**B.** → True

The $8$ Mbps floor is a maximum hop distance, because throughput falls as $d$ grows. From the bench test, $\\frac{A}{16}=50$ gives $A=800$. Set throughput equal to the floor:

$$\\frac{800}{d^{2}}=8$$

$$d^{2}=\\frac{800}{8}=100$$

$$d=10$$

Only the positive root is a hop distance. Every longer hop falls below $8$ Mbps, so the farthest reliable hop is exactly $10$ m, so the statement is True.`,
      `**C.** → True

Throughput at $25$ m is a substitution into the calibrated law. The bench reading $\\frac{A}{16}=50$ gives $A=800$. Square the hop first:

$$25^{2}=625$$

$$T(25)=\\frac{800}{625}=1.28$$

The link at $25$ m carries $1.28$ Mbps, so the statement is True.`,
      `**D.** → False

Whether an $11$ m hop complies is settled by evaluating throughput there and comparing with $8$ Mbps. The bench reading gives $A=800$, so

$$T(11)=\\frac{800}{11^{2}}=\\frac{800}{121}\\approx 6.612$$

$$6.612<8$$

The hop delivers about $6.61$ Mbps, which is below the reliability floor, so the statement is False.`,
      `**E.** → False

Tripling the coefficient multiplies every throughput by $3$, but the reliable radius grows only by $\\sqrt{3}$, because distance sits under an exponent of $2$. From the bench test $A=800$, the new floor equation is

$$\\frac{3\\cdot 800}{d^{2}}=8$$

$$d^{2}=300$$

$$d=10\\sqrt{3}\\approx 17.32$$

Reaching $30$ m would require a nine-fold coefficient, since

$$\\frac{9\\cdot 800}{30^{2}}=\\frac{7200}{900}=8$$

Tripling stretches the radius only to about $17.32$ m, not to $30$ m, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 63,
    solution_overview: `Mesh throughput is $T(d)=Ad^{-2}$ megabits per second, calibrated by $T(4)=50$, and the link is reliable only while $T\\ge8$.

**Part 1: Building the model.**

Let $d$ = hop distance in metres and $T$ = sustained throughput in megabits per second. The exponent $-2$ is given, so one bench reading fixes the coefficient. Because the exponent is negative, throughput falls as the hop grows, which turns the reliability floor into a maximum distance.

**1. Translate: the bench reading.**

$$\\frac{A}{4^{2}}=50$$

**2. Translate: the reliability floor.** A floor on throughput inverts into a ceiling on distance:

$$\\frac{A}{d^{2}}\\ge8 \\quad\\Longleftrightarrow\\quad d\\le\\sqrt{\\frac{A}{8}}$$

**Part 2: The model.**

$$T(d)=\\frac{800}{d^{2}} \\tag{1}$$

$$d_{\\max}=\\sqrt{\\frac{A}{8}} \\tag{2}$$

**Part 3: Solve.**

**1.** The bench reading gives the coefficient:

$$A=50\\cdot16=800$$

**2.** The reliable radius from $(2)$:

$$d^{2}=100 \\quad\\Rightarrow\\quad d=10$$

**3.** Throughput at the hops the statements name:

$$T(11)=\\frac{800}{121}\\approx6.61, \\qquad T(25)=\\frac{800}{625}=1.28$$

**4.** A tripled coefficient, again through $(2)$:

$$d=\\sqrt{300}=10\\sqrt{3}\\approx17.32$$

**5.** Distance is punished twice over here: an $11$ m hop already misses the floor, and tripling transmitter power buys only a factor of $\\sqrt{3}$ in radius, so a $30$ m link would need nine times the coefficient.

**Answer.** $T(d)=800d^{-2}$ | reliable radius $10$ m | $T(25)=1.28$ Mbps | tripled coefficient reaches $\\approx17.32$ m`,
  },
  {
    id: `math-8-64`,
    case_id: `MATH 8.64`,
    title: `Allometric Gill Area Across Body Masses`,
    context: `A fish physiologist models gill surface area as $G(m)=A m^{\\frac{3}{4}}$ square centimetres for body mass $m>0$ grams. A $256$ g specimen has gill area $512$ cm$^{2}$. Area per gram is the derived intensity $\\frac{G(m)}{m}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered gill-area law is $G(m)=8m^{\\frac{3}{4}}$.`,
      `Gill area per gram is constant across body masses.`,
      `Two $16$ g fish together have the same total gill area as one $32$ g fish.`,
      `The mass that produces $216$ cm$^{2}$ of gill area is $64$ g.`,
      `At $m=16$ g the intensity $\\frac{G(m)}{m}$ equals $8$ cm$^{2}$ per gram.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The allometric exponent is given, so the $256$ g specimen pins the coefficient. Write $256=2^{8}$:

$$256^{\\frac{3}{4}}=(2^{8})^{\\frac{3}{4}}=2^{6}=64$$

$$A=\\frac{512}{64}=8$$

The recovered law is $G(m)=8m^{\\frac{3}{4}}$, so the statement is True.`,
      `**B.** → False

Gill area per gram is the area law divided by body mass, which subtracts $1$ from the exponent:

$$\\frac{G(m)}{m}=A m^{\\frac{3}{4}-1}=A m^{-\\frac{1}{4}}$$

The leftover exponent is negative, so intensity falls as mass grows on $m>0$. It is not a constant, so the statement is False.`,
      `**C.** → False

The two small fish are two separate evaluations at $16$ g, while the single larger fish is one evaluation at $32$ g. The coefficient cancels in the comparison:

$$\\frac{2G(16)}{G(32)}=\\frac{2\\cdot 16^{\\frac{3}{4}}}{32^{\\frac{3}{4}}}$$

Now $16=2^{4}$ and $32=2^{5}$:

$$16^{\\frac{3}{4}}=2^{3}=8$$

$$32^{\\frac{3}{4}}=2^{\\frac{15}{4}}=8\\cdot 2^{\\frac{3}{4}}$$

$$\\frac{2\\cdot 8}{8\\cdot 2^{\\frac{3}{4}}}=2^{1-\\frac{3}{4}}=2^{\\frac{1}{4}}>1$$

The pair therefore carries more total gill area than one $32$ g fish, so the statement is False.`,
      `**D.** → False

A target of $216$ square centimetres is inverted for mass after the coefficient is known. From the specimen, $256^{\\frac{3}{4}}=64$ and $A=\\frac{512}{64}=8$. Set area equal to $216$:

$$8m^{\\frac{3}{4}}=216$$

$$m^{\\frac{3}{4}}=27$$

$$m=27^{\\frac{4}{3}}$$

Because $27=3^{3}$,

$$27^{\\frac{4}{3}}=(3^{3})^{\\frac{4}{3}}=3^{4}=81$$

The claimed mass $64$ g produces a different area:

$$64^{\\frac{3}{4}}=(2^{6})^{\\frac{3}{4}}=2^{\\frac{9}{2}}$$

$$G(64)=8\\cdot 2^{\\frac{9}{2}}=128\\sqrt{2}\\approx 181.02$$

A $64$ g fish falls well short of $216$ square centimetres. The mass that produces $216$ square centimetres is $81$ g, so the statement is False.`,
      `**E.** → False

Intensity at $16$ g is gill area at that mass divided by $16$ g, not the coefficient of $G$. The specimen gives $A=8$, and $16=2^{4}$ so $16^{\\frac{3}{4}}=2^{3}=8$:

$$G(16)=8\\cdot 8=64$$

$$\\frac{G(16)}{16}=\\frac{64}{16}=4$$

The figure $8$ is the intensity at $1$ g, where $\\frac{G(1)}{1}=8$. By $16$ g a fourth root of $16$ has already halved it. At $16$ g the intensity is $4$ square centimetres per gram, not $8$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 64,
    solution_overview: `Gill area is $G(m)=Am^{\\frac{3}{4}}$ square centimetres, calibrated by $G(256)=512$, and intensity is the derived law $\\frac{G(m)}{m}$.

**Part 1: Building the model.**

Let $m$ = body mass in grams, $G$ = gill area in square centimetres, and let intensity be area per gram. The exponent is given, so one specimen fixes the coefficient. Dividing the law by its own input subtracts one from the exponent, which drives every remaining statement.

**1. Translate: the specimen.**

$$A\\cdot256^{\\frac{3}{4}}=512, \\qquad 256^{\\frac{3}{4}}=64$$

**2. Translate: intensity.**

$$\\frac{G(m)}{m}=\\frac{8m^{\\frac{3}{4}}}{m^{1}}=8m^{\\frac{-1}{4}}$$

**Part 2: The model.**

$$G(m)=8\\,m^{\\frac{3}{4}} \\tag{1}$$

$$\\frac{G(m)}{m}=8\\,m^{\\frac{-1}{4}} \\tag{2}$$

**Part 3: Solve.**

**1.** The specimen gives the coefficient:

$$A=\\frac{512}{64}=8$$

**2.** Areas at the masses the statements use:

$$G(16)=64, \\qquad G(32)\\approx107.63, \\qquad G(64)\\approx181.02, \\qquad G(81)=216$$

**3.** Intensities from $(2)$ at two of those masses:

$$\\frac{64}{16}=4, \\qquad \\frac{216}{81}=\\frac{8}{3}\\approx2.667$$

**4.** The inverted target and the split-versus-merged comparison:

$$m=27^{\\frac{4}{3}}=81, \\qquad 2G(16)=128>G(32)\\approx107.63$$

**5.** Every result follows from the exponent sitting below $1$: intensity carries the negative exponent $\\frac{-1}{4}$ and falls with mass, and concavity means two small fish beat one merged fish of the same total mass.

**Answer.** $G(m)=8m^{\\frac{3}{4}}$ | intensity $8m^{\\frac{-1}{4}}$ | $G\\frac{(16)}{16}=4$ | $216$ cm$^{2}$ at $81$ g`,
  },
  {
    id: `math-8-65`,
    case_id: `MATH 8.65`,
    title: `Curing Strength From a Timed Gap Between Samples`,
    context: `A concrete lab models early curing strength as $S(t)=A\\sqrt{t}$ megapascals, where $t>0$ is curing time in days. The log never states $A$: it only notes that strength rose by exactly $5$ MPa between day $4$ and day $9$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered curing law is $S(t)=5\\sqrt{t}$.`,
      `Strength on day $4$ is $10$ MPa and on day $9$ is $15$ MPa.`,
      `Quadrupling curing time exactly doubles strength.`,
      `Reaching $30$ MPa requires exactly $36$ days of curing.`,
      `Moving from day $4$ to day $9$ raises strength by $50\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The surviving record is a difference of two model values, and $A$ factors out of that difference:

$$S(9)-S(4)=A\\sqrt{9}-A\\sqrt{4}$$

$$A(3-2)=5$$

$$A=5$$

The recovered law is $S(t)=5\\sqrt{t}$, so the statement is True.`,
      `**B.** → True

The two logged days become levels once the gap has produced the coefficient. Factor $A$ out of the recorded rise:

$$A\\sqrt{9}-A\\sqrt{4}=5$$

$$A(3-2)=5$$

$$A=5$$

Then

$$S(4)=5\\sqrt{4}=5\\cdot 2=10$$

$$S(9)=5\\sqrt{9}=5\\cdot 3=15$$

Day $4$ carries $10$ MPa and day $9$ carries $15$ MPa, so the statement is True.`,
      `**C.** → True

Quadrupling the curing time multiplies strength by the square root of $4$, because the coefficient cancels in the ratio:

$$\\frac{S(4t)}{S(t)}=\\frac{\\sqrt{4t}}{\\sqrt{t}}=\\sqrt{4}=2$$

The multiplier is exactly $2$ at every starting day. Quadrupling curing time doubles strength, so the statement is True.`,
      `**D.** → True

Reaching $30$ MPa is an inversion of $S(t)=A\\sqrt{t}$. The logged gap fixes $A$:

$$A\\sqrt{9}-A\\sqrt{4}=5$$

$$A=5$$

Then

$$5\\sqrt{t}=30$$

$$\\sqrt{t}=6$$

$$t=36$$

Reaching $30$ MPa takes exactly $36$ days, so the statement is True.`,
      `**E.** → True

A percentage rise compares the two strengths as a relative change, and the coefficient cancels:

$$\\frac{S(9)-S(4)}{S(4)}=\\frac{\\sqrt{9}-\\sqrt{4}}{\\sqrt{4}}=\\frac{3-2}{2}=\\frac{1}{2}$$

That is a $50\\%$ rise from day $4$ to day $9$, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 65,
    solution_overview: `Curing strength is $S(t)=A\\sqrt{t}$ megapascals, and the only surviving record is the $5$ MPa rise between day $4$ and day $9$.

**Part 1: Building the model.**

Let $t$ = curing time in days and $S$ = strength in megapascals. No single level was logged, so the coefficient has to come out of a difference. That works because $A$ is a common factor of every model value and the exponent $\\frac{1}{2}$ is given in advance.

**1. Translate: the surviving record.**

$$A\\sqrt{9}-A\\sqrt{4}=5$$

**2. Translate: factor the coefficient out.** The two square roots differ by exactly one:

$$A(3-2)=5$$

**Part 2: The model.**

$$S(t)=5\\,\\sqrt{t} \\tag{1}$$

$$\\frac{S(ct)}{S(t)}=\\sqrt{c} \\tag{2}$$

**Part 3: Solve.**

**1.** The record gives the coefficient:

$$A=5$$

**2.** Levels at the two logged days, which the record must reproduce:

$$S(4)=10, \\qquad S(9)=15, \\qquad 15-10=5$$

**3.** The quadrupling multiplier from $(2)$:

$$\\sqrt{4}=2, \\qquad S(16)=20=2\\cdot S(4)$$

**4.** The inverted target and the relative rise:

$$5\\sqrt{t}=30 \\Rightarrow t=36, \\qquad \\frac{15}{10}=1.5$$

**5.** Every scale result here is coefficient free: the $50\\%$ rise and the doubling both come from the day ratio raised to the exponent $\\frac{1}{2}$, so only the levels themselves needed the calibration. Reading the logged $5$ MPa as a level rather than as a gap would have given $A=\\frac{5}{3}$ and understated every strength by two thirds.

**Answer.** $S(t)=5\\sqrt{t}$ | $S(4)=10$ and $S(9)=15$ | $30$ MPa on day $36$ | rise of $50\\%$ from day $4$ to day $9$`,
  },
  {
    id: `math-8-66`,
    case_id: `MATH 8.66`,
    title: `Cantilever Deflection Checked Against a Third Span`,
    context: `A materials lab models tip deflection of a cantilever as $y(L)=A L^{k}$ millimetres, where $L>0$ is the free span in metres. Two spans are trusted: $y(3)=18$ and $y(6)=72$. A third run recorded $y(9)=150$, and the question is whether that third point still sits on the same power law. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two trusted spans recover the law $y(L)=2L^{2}$.`,
      `The quadratic model predicts $y(9)=162$, so the recorded $150$ undershoots by $12$ mm.`,
      `Rescaling the coefficient to force $y(9)=150$ leaves $y(3)=18$ unchanged.`,
      `The two-point exponent fitted to $(3,18)$ and $(9,150)$ is still exactly $2$.`,
      `Under $y(L)=2L^{2}$, doubling any span multiplies deflection by $3$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The two trusted spans form a calibration pair, so their ratio removes the unknown coefficient and yields the exponent first.

$$\\frac{y(6)}{y(3)}=\\frac{72}{18}$$

$$=4$$

The span itself doubled, so that ratio equals $2^{k}$:

$$2^{k}=4$$

$$k=2$$

The shorter trusted run then fixes the coefficient:

$$A\\cdot 3^{2}=18$$

$$9A=18$$

$$A=2$$

The recovered law is $y(L)=2L^{2}$, so the statement is True.`,
      `**B.** → True

The recorded $150$ mm is a test point, so the quadratic prediction at $9$ m has to come from the trusted pair before any comparison is made. The span doubles from $3$ m to $6$ m while deflection quadruples, which forces $k=2$; matching $y(3)=18$ then gives $A=2$. The model at the third span is therefore

$$y(9)=2\\cdot 9^{2}$$

$$=2\\cdot 81$$

$$=162$$

The recorded run sits below that prediction by

$$162-150=12$$

The quadratic model predicts $162$ mm and the recorded $150$ mm undershoots by $12$ mm, so the statement is True.`,
      `**C.** → False

Forcing the same quadratic through the third run replaces the coefficient. The trusted spans already fix the exponent at $2$:

$$\\frac{72}{18}=4=2^{2}$$

Matching $y(9)=150$ then gives a new coefficient:

$$A'\\cdot 9^{2}=150$$

$$81A'=150$$

$$A'=\\frac{150}{81}=\\frac{50}{27}$$

The rescaled curve at the first trusted span is

$$y'(3)=\\frac{50}{27}\\cdot 3^{2}$$

$$=\\frac{50}{27}\\cdot 9$$

$$=\\frac{50}{3}$$

and $\\frac{50}{3}\\neq 18$. Changing the coefficient rescales every prediction, so the $3$ m reading cannot stay at $18$ mm, so the statement is False.`,
      `**D.** → False

The exponent fitted to $(3,18)$ and $(9,150)$ is the log-ratio of that pair, and that pair includes the suspect run.

$$\\frac{y(9)}{y(3)}=\\frac{150}{18}$$

$$=\\frac{25}{3}$$

The span tripled, so that ratio equals $3^{k}$:

$$3^{k}=\\frac{25}{3}$$

An exact quadratic would have required $3^{2}=9$, and $\\frac{25}{3}\\neq 9$. Solving for the exponent:

$$k=\\frac{\\ln\\left(\\frac{25}{3}\\right)}{\\ln 3}$$

$$\\ln\\left(\\frac{25}{3}\\right)\\approx 2.1203$$

$$\\ln 3\\approx 1.0986$$

$$k\\approx\\frac{2.1203}{1.0986}\\approx 1.930$$

The fitted exponent is about $1.930$, not exactly $2$, so the statement is False.`,
      `**E.** → False

Under the named law $y(L)=2L^{2}$, a doubled span enters only through the exponent:

$$\\frac{y(2L)}{y(L)}=\\frac{2(2L)^{2}}{2L^{2}}$$

$$=\\frac{8L^{2}}{2L^{2}}$$

$$=4$$

The coefficient cancels, and the multiplier is $2^{2}=4$ rather than $3$. Doubling any span therefore multiplies deflection by $4$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 66,
    solution_overview: `Tip deflection is modelled as $y(L)=AL^{k}$ millimetres, with trusted runs $y(3)=18$ and $y(6)=72$ and a questionable third run $y(9)=150$.

**Part 1: Building the model.**

Let $L$ = free span in metres and $y$ = tip deflection in millimetres. Two trusted runs fix both constants: the ratio removes the coefficient and delivers the exponent, and either run then delivers the coefficient. The third run is a test of the fitted curve rather than an input to it.

**1. Translate: the trusted ratio.**

$$\\frac{72}{18}=2^{k}$$

**2. Translate: a two-point refit using the third run.**

$$\\frac{150}{18}=3^{k} \\quad\\Longleftrightarrow\\quad k=\\frac{\\ln(\\frac{25}{3})}{\\ln3}$$

**Part 2: The model.**

$$y(L)=2\\,L^{2} \\tag{1}$$

$$\\frac{y(cL)}{y(L)}=c^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The trusted pair fixes both constants:

$$k=2, \\qquad 9A=18 \\Rightarrow A=2$$

**2.** The prediction at the third span and its discrepancy:

$$y(9)=162, \\qquad 162-150=12$$

**3.** A coefficient rescaled to force the third run:

$$A'=\\frac{150}{81}\\approx1.852, \\qquad y'(3)\\approx16.67\\ne18$$

**4.** The refitted exponent and the doubling multiplier from $(2)$:

$$k\\approx1.930, \\qquad 2^{2}=4$$

**5.** The third run is inconsistent with the trusted pair, and no repair is free: rescaling the coefficient breaks both trusted levels, while refitting the exponent drags it below $2$.

**Answer.** $y(L)=2L^{2}$ | predicted $y(9)=162$ mm | shortfall $12$ mm | refitted exponent $\\approx1.930$ | doubling factor $4$`,
  },
  {
    id: `math-8-67`,
    case_id: `MATH 8.67`,
    title: `Mast Steel Mass Under a Finite Percentage Scale-Up`,
    context: `A self-similar mast's steel mass follows $M(h)=A h^{k}$ kilograms, where $h>0$ is mast height in metres. Design notes state that lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$, and a $10$ m reference mast uses exactly $500$ kg of steel. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered mass law is $M(h)=0.5\\,h^{3}$.`,
      `A $12$ m mast uses $864$ kg of steel.`,
      `Tripling height multiplies steel mass by $27$.`,
      `A $10\\%$ height increase raises mass by exactly $33.1\\%$.`,
      `The percentage rule alone forces the coefficient $A$ without using the $10$ m reference.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The percentage rule is a ratio, so it fixes the exponent and cancels the coefficient, while the reference mast is a level and fixes the coefficient. A $20\\%$ height increase is a factor of $1.2$, and a $72.8\\%$ mass increase is a factor of $1.728$:

$$1.2^{k}=1.728$$

$$1.2^{2}=1.44$$

$$1.44\\cdot 1.2=1.728$$

so $k=3$. The $10$ m mast then supplies the scale:

$$A\\cdot 10^{3}=500$$

$$1000A=500$$

$$A=0.5$$

The recovered law is $M(h)=0.5 h^{3}$, so the statement is True.`,
      `**B.** → True

A $12$ m mast is the $10$ m reference lengthened by exactly $20\\%$, so the design note supplies the mass multiplier directly:

$$M(12)=500\\cdot 1.728$$

$$=864$$

A $12$ m mast uses $864$ kg of steel, so the statement is True.`,
      `**C.** → True

Tripling height is a pure scale question, so only the exponent from the $20\\%$ rule survives. That rule reads $1.2^{k}=1.728$, and $1.2^{3}=1.728$, hence $k=3$. A threefold stretch then contributes

$$\\frac{M(3h)}{M(h)}=3^{3}$$

$$=27$$

The coefficient cancels in the ratio, so tripling height multiplies steel mass by $27$, so the statement is True.`,
      `**D.** → True

A $10\\%$ height increase is a factor of $1.1$, and the cubic exponent from the design note cubes that factor. The note $1.2^{k}=1.728$ forces $k=3$, so the mass multiplier is

$$1.1^{2}=1.21$$

$$1.21\\cdot 1.1=1.331$$

Subtracting $1$ converts the multiplier into a percentage rise of $0.331=33.1\\%$. The rise is exact, so the statement is True.`,
      `**E.** → False

The percentage rule is built from a quotient of two values of the same law, and a quotient loses the coefficient completely:

$$\\frac{M(1.2h)}{M(h)}=\\frac{A(1.2h)^{k}}{A h^{k}}$$

$$=1.2^{k}$$

Every positive coefficient therefore produces the same $72.8\\%$ rise. The family $M(h)=A h^{3}$ all satisfy the note equally well, and the $10$ m reading of $500$ kg is what selects one $A$. The percentage rule alone cannot force the coefficient, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 67,
    solution_overview: `Steel mass is $M(h)=Ah^{k}$ kilograms, a $20\\%$ taller mast needs $72.8\\%$ more steel, and the $10$ m reference mast uses $500$ kg.

**Part 1: Building the model.**

Let $h$ = mast height in metres and $M$ = steel mass in kilograms. The two given facts do different jobs: a percentage rule is a ratio and fixes only the exponent, while the reference mast is a level and fixes only the coefficient. Both are needed to write the model.

**1. Translate: the percentage rule.** A $20\\%$ stretch is a factor of $1.2$ and a $72.8\\%$ rise is a factor of $1.728$:

$$1.2^{k}=1.728$$

**2. Translate: the reference mast.**

$$A\\cdot10^{3}=500$$

**Part 2: The model.**

$$M(h)=0.5\\,h^{3} \\tag{1}$$

$$\\frac{M(ch)}{M(h)}=c^{3} \\tag{2}$$

**Part 3: Solve.**

**1.** The ratio gives the exponent, exactly rather than approximately:

$$1.2^{3}=1.728 \\quad\\Rightarrow\\quad k=3$$

**2.** The reference mast gives the coefficient:

$$1000A=500 \\quad\\Rightarrow\\quad A=0.5$$

**3.** Levels at the heights the statements use:

$$M(11)=665.5, \\qquad M(12)=864, \\qquad M(30)=13500$$

**4.** Multipliers from $(2)$ for the two stretches named:

$$1.1^{3}=1.331, \\qquad 3^{3}=27$$

**5.** The percentage rule holds for every coefficient, since $A$ cancels in $(2)$, so the family $M(h)=Ah^{3}$ stays one parameter free until the $500$ kg reference selects $A=0.5$.

**Answer.** $M(h)=0.5h^{3}$ kg | $M(12)=864$ kg | tripling multiplies mass by $27$ | a $10\\%$ stretch adds $33.1\\%$`,
  },
  {
    id: `math-8-68`,
    case_id: `MATH 8.68`,
    title: `Cooling Fan Noise Against a Night-Time Cap`,
    context: `Acoustic intensity from a cooling fan follows $I(d)=A d^{-2}$ watts per square metre, where $d>0$ is distance from the hub in metres. A meter reading at $2$ metres records $0.72$ W/m². Night operations are capped at $0.08$ W/m². Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The intensity law is $I(d)=1.44 d^{-2}$.`,
      `At $6$ metres the intensity is still above the $0.08$ W/m² night cap.`,
      `Doubling the distance cuts intensity to one quarter.`,
      `Moving from $2$ to $3$ metres cuts intensity by exactly $0.50$ W/m².`,
      `Intensity per metre of distance is the same at every distance.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

The exponent is already $-2$, so the meter reading recovers the coefficient by multiplying the observed intensity by the square of the distance:

$$A\\cdot 2^{-2}=0.72$$

$$\\frac{A}{4}=0.72$$

$$A=2.88$$

The stated coefficient fails the same reading:

$$\\frac{1.44}{4}=0.36\\neq 0.72$$

The recovered coefficient is $2.88$, not $1.44$, so the statement is False.`,
      `**B.** → False

A cap on intensity becomes a question about the reading at $6$ m once the inverse-square law is calibrated from the meter. From $I(2)=0.72$,

$$A=0.72\\cdot 2^{2}$$

$$=2.88$$

$$I(6)=\\frac{2.88}{6^{2}}$$

$$=\\frac{2.88}{36}$$

$$=0.08$$

The reading equals the night cap rather than sitting above it, so the statement is False.`,
      `**C.** → True

Doubling distance on an inverse-square law is a pure scale factor, because the coefficient and the starting distance both cancel:

$$\\frac{I(2d)}{I(d)}=\\frac{A(2d)^{-2}}{A d^{-2}}$$

$$=2^{-2}$$

$$=\\frac{1}{4}$$

Doubling the distance therefore cuts intensity to one quarter, so the statement is True.`,
      `**D.** → False

An absolute drop from $2$ m to $3$ m needs both endpoint levels, not a ratio shortcut. The reading at $2$ m is given as $0.72$, and an inverse-square law scales that reading by the square of the distance ratio:

$$I(3)=0.72\\cdot\\left(\\frac{2}{3}\\right)^{2}$$

$$=0.72\\cdot\\frac{4}{9}$$

$$=0.32$$

$$I(2)-I(3)=0.72-0.32$$

$$=0.40$$

The drop is $0.40$ W/m², not $0.50$, so the statement is False.`,
      `**E.** → False

Intensity per metre of distance is the ratio $\\frac{I(d)}{d}$, and dividing the inverse-square law by $d$ leaves a still-negative exponent:

$$\\frac{I(d)}{d}=A d^{-3}$$

The leftover exponent $-3$ is negative, so the ratio falls as $d$ grows and cannot be the same at every distance, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 68,
    solution_overview: `Fan intensity is $I(d)=Ad^{-2}$ watts per square metre, calibrated by $I(2)=0.72$, and night work is capped at $0.08$.

**Part 1: Building the model.**

Let $d$ = distance from the hub in metres and $I$ = acoustic intensity in watts per square metre. The exponent $-2$ is given, so one meter reading fixes the coefficient. Because the exponent is negative, intensity falls with distance and the night cap becomes a minimum standing distance.

**1. Translate: the meter reading.**

$$\\frac{A}{2^{2}}=0.72$$

**2. Translate: the night cap.** A ceiling on intensity inverts into a floor on distance:

$$\\frac{A}{d^{2}}\\le0.08 \\quad\\Longleftrightarrow\\quad d\\ge\\sqrt{\\frac{A}{0.08}}$$

**Part 2: The model.**

$$I(d)=\\frac{2.88}{d^{2}} \\tag{1}$$

$$\\frac{I(d)}{d}=2.88\\,d^{-3} \\tag{2}$$

**Part 3: Solve.**

**1.** The reading gives the coefficient:

$$A=0.72\\cdot4=2.88$$

**2.** The cap distance, inverted from $(1)$:

$$d^{2}=36 \\quad\\Rightarrow\\quad d=6, \\qquad I(6)=0.08$$

**3.** Levels at the distances the statements use:

$$I(3)=0.32, \\qquad I(4)=0.18$$

**4.** The doubling factor and the one-metre loss:

$$\\frac{I(2d)}{I(d)}=\\frac{1}{4}, \\qquad I(2)-I(3)=0.40$$

**5.** Ratios behave simply and differences do not: doubling always quarters the reading, while the loss per metre shrinks from $0.40$ to $0.14$ W/m² between successive metres, and the per-metre ratio in $(2)$ decays as $d^{-3}$.

**Answer.** $I(d)=2.88d^{-2}$ | cap met at $d=6$ m | doubling factor $\\frac{1}{4}$ | loss from $2$ to $3$ m is $0.40$ W/m²`,
  },
  {
    id: `math-8-69`,
    case_id: `MATH 8.69`,
    title: `Pump Head Composed Through a Square Flow Law`,
    context: `A booster pump's differential head follows $H(q)=A q^{2}$ metres when the delivered flow is $q>0$ cubic metres per hour. A commissioning run at $q=5$ recorded $H=50$ m. The plant then pipes that flow through a nozzle whose jet speed is $v(H)=4\\sqrt{H}$ metres per second, so jet speed as a function of flow is the composition $v(q)=v(H(q))$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The head law is $H(q)=2q^{2}$, and the composed jet-speed law is $v(q)=4\\sqrt{2}\\,q$.`,
      `At $q=5$ the jet speed is $20\\sqrt{2}$ m/s.`,
      `Doubling the flow doubles the jet speed.`,
      `A jet speed of $40\\sqrt{2}$ m/s requires flow $20$ m³/h.`,
      `Head is proportional to jet speed.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The commissioning run calibrates the pump stage on its own, because the exponent $2$ is already given:

$$A\\cdot 5^{2}=50$$

$$25A=50$$

$$A=2$$

so $H(q)=2q^{2}$. Jet speed as a function of flow is the composition $v(H(q))$:

$$v(q)=4\\sqrt{2q^{2}}$$

$$=4\\sqrt{2}\\,\\sqrt{q^{2}}$$

$$=4\\sqrt{2}\\,q$$

The positive branch applies because $q>0$. The inner exponent $2$ and the outer square root multiply to $1$, which is why the composed map is linear. Both named laws match, so the statement is True.`,
      `**B.** → True

At the commissioning flow the head is already recorded as $50$ m, so the nozzle law applies directly:

$$v=4\\sqrt{50}$$

$$=4\\sqrt{25\\cdot 2}$$

$$=4\\cdot 5\\sqrt{2}$$

$$=20\\sqrt{2}$$

Jet speed at $q=5$ is $20\\sqrt{2}$ m/s, so the statement is True.`,
      `**C.** → True

The inner head law is quadratic and the nozzle takes a square root, so a doubled flow becomes a doubled jet speed. Head first:

$$\\frac{H(2q)}{H(q)}=2^{2}$$

$$=4$$

The nozzle then takes the square root of that head factor:

$$\\frac{v(2q)}{v(q)}=\\sqrt{4}$$

$$=2$$

Doubling the flow therefore doubles the jet speed, so the statement is True.`,
      `**D.** → False

A target jet speed is inverted through the nozzle first, then through the pump. From $v=4\\sqrt{H}$,

$$\\sqrt{H}=\\frac{40\\sqrt{2}}{4}$$

$$=10\\sqrt{2}$$

$$H=(10\\sqrt{2})^{2}$$

$$=200$$

The pump coefficient comes from the commissioning run:

$$A\\cdot 5^{2}=50$$

$$25A=50$$

$$A=2$$

Then

$$2q^{2}=200$$

$$q^{2}=100$$

$$q=10$$

not $20$. A flow of $20$ would double the required $10$ and produce $80\\sqrt{2}$ m/s rather than $40\\sqrt{2}$ m/s. The target speed needs $10$ m³/h, so the statement is False.`,
      `**E.** → False

The nozzle law already relates head to jet speed with no reference to flow, so proportionality can be checked from that stage alone:

$$H=\\left(\\frac{v}{4}\\right)^{2}$$

$$=\\frac{v^{2}}{16}$$

Head therefore grows with the square of jet speed. Doubling speed would have to double head if the two were proportional, but it quadruples head instead: at the commissioning point $v=4\\sqrt{50}=20\\sqrt{2}$ with $H=50$, while

$$H=\\frac{(40\\sqrt{2})^{2}}{16}$$

$$=\\frac{3200}{16}$$

$$=200$$

which is four times $50$ for twice the speed. Head is not proportional to jet speed, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 69,
    solution_overview: `Head is $H(q)=Aq^{2}$ metres with $H(5)=50$, jet speed is $v(H)=4\\sqrt{H}$ metres per second, and the composition sends flow straight to speed.

**Part 1: Building the model.**

Let $q$ = flow in cubic metres per hour, $H$ = differential head in metres, $v$ = jet speed in metres per second. The pump stage is calibrated from the commissioning run, the nozzle stage is given outright, and composing them multiplies the exponents rather than adding the effects.

**1. Translate: the commissioning run.**

$$A\\cdot5^{2}=50$$

**2. Translate: the composition.** Substituting the head law inside the nozzle law pulls the flow out of the square root:

$$v(q)=4\\sqrt{2q^{2}}, \\qquad 2\\cdot\\tfrac{1}{2}=1$$

**Part 2: The model.**

$$H(q)=2\\,q^{2} \\tag{1}$$

$$v(q)=4\\sqrt{2}\\,q \\tag{2}$$

**Part 3: Solve.**

**1.** The commissioning run gives the head coefficient:

$$25A=50 \\quad\\Rightarrow\\quad A=2$$

**2.** Jet speed at the commissioning flow, by either route:

$$v(5)=4\\sqrt{50}=20\\sqrt{2}\\approx28.28$$

**3.** The doubling identity, from the composed exponent $1$ in $(2)$:

$$\\frac{v(2q)}{v(q)}=2, \\qquad \\frac{H(2q)}{H(q)}=4$$

**4.** The inverted speed target:

$$4\\sqrt{2}\\,q=40\\sqrt{2} \\quad\\Rightarrow\\quad q=10$$

**5.** Eliminating the flow between $(1)$ and $(2)$ gives $H=\\frac{v^{2}}{16}$, so head is quadratic in speed even though speed is linear in flow.

**Answer.** $H(q)=2q^{2}$ | $v(q)=4\\sqrt{2}\\,q$ | $v(5)=20\\sqrt{2}$ m/s | $40\\sqrt{2}$ m/s needs $q=10$ | $H=\\frac{v^{2}}{16}$`,
  },
  {
    id: `math-8-70`,
    case_id: `MATH 8.70`,
    title: `Warehouse Forklift Throughput Under a Staffing Cap`,
    context: `Forklift throughput follows $T(s)=A s^{0.5}$ pallets per hour, where $s>0$ is the number of drivers on shift. A logged shift with $16$ drivers moved $80$ pallets per hour. Safety rules cap the shift at $36$ drivers. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The throughput law is $T(s)=20\\sqrt{s}$.`,
      `With $36$ drivers the model predicts $120$ pallets per hour.`,
      `Quadrupling the crew doubles throughput.`,
      `Reaching $100$ pallets per hour requires $25$ drivers.`,
      `The safety cap therefore allows at most $120$ pallets per hour.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The exponent $0.5$ is given, so the logged shift fixes the coefficient. Since $16^{0.5}=4$,

$$A\\cdot 4=80$$

$$A=20$$

The recovered law is $T(s)=20\\sqrt{s}$, so the statement is True.`,
      `**B.** → True

Crew size rises from $16$ to $36$ by the factor

$$\\frac{36}{16}=\\frac{9}{4}$$

and throughput scales with the square root of that factor:

$$T(36)=80\\cdot\\sqrt{\\frac{9}{4}}$$

$$=80\\cdot\\frac{3}{2}$$

$$=120$$

With $36$ drivers the model predicts $120$ pallets per hour, so the statement is True.`,
      `**C.** → True

A crew multiplier reaches throughput through the exponent $0.5$, so the coefficient cancels:

$$\\frac{T(4s)}{T(s)}=\\frac{A\\sqrt{4s}}{A\\sqrt{s}}$$

$$=\\sqrt{4}$$

$$=2$$

Quadrupling the crew therefore doubles throughput, so the statement is True.`,
      `**D.** → True

A throughput target of $100$ inverts by squaring the required ratio against the logged shift. Throughput must rise from $80$ to $100$, a factor of $\\frac{5}{4}$, and crew size enters as a square:

$$s=16\\cdot\\left(\\frac{5}{4}\\right)^{2}$$

$$=16\\cdot\\frac{25}{16}$$

$$=25$$

Reaching $100$ pallets per hour requires $25$ drivers, so the statement is True.`,
      `**E.** → True

Throughput increases with crew size, so the staffing cap at $36$ drivers becomes an output cap at $T(36)$. The exponent $0.5$ is positive and the logged shift $T(16)=80$ recovers a positive coefficient:

$$A\\cdot\\sqrt{16}=80$$

$$A=20$$

$$T(36)=20\\sqrt{36}$$

$$=20\\cdot 6$$

$$=120$$

No higher output is reachable inside the safety rule, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 70,
    solution_overview: `Forklift throughput is $T(s)=As^{0.5}$ pallets per hour, calibrated by $T(16)=80$, and safety rules cap the shift at $36$ drivers.

**Part 1: Building the model.**

Let $s$ = drivers on shift and $T$ = pallets moved per hour. The exponent $0.5$ is given, so one logged shift fixes the coefficient. The exponent is positive but below $1$, so more drivers always help, yet each extra driver helps less than the one before.

**1. Translate: the logged shift.**

$$A\\cdot16^{0.5}=80, \\qquad 16^{0.5}=4$$

**2. Translate: a throughput target.** Inverting the law squares the required ratio:

$$20\\sqrt{s}=T \\quad\\Longleftrightarrow\\quad s=\\left(\\frac{T}{20}\\right)^{2}$$

**Part 2: The model.**

$$T(s)=20\\,\\sqrt{s} \\tag{1}$$

$$\\frac{T(cs)}{T(s)}=\\sqrt{c} \\tag{2}$$

**Part 3: Solve.**

**1.** The logged shift gives the coefficient:

$$A=\\frac{80}{4}=20$$

**2.** Throughput at the crew sizes the statements use:

$$T(25)=100, \\qquad T(36)=120, \\qquad T(64)=160$$

**3.** The quadrupling multiplier from $(2)$:

$$\\sqrt{4}=2, \\qquad T(64)=2\\cdot T(16)$$

**4.** The inverted target and the binding cap:

$$s=\\left(\\frac{100}{20}\\right)^{2}=25, \\qquad \\max_{0<s\\le36}T(s)=120$$

**5.** Because throughput rises with crew size, the staffing cap converts straight into an output ceiling, and the square root explains why more than doubling the logged crew adds only half again as many pallets.

**Answer.** $T(s)=20\\sqrt{s}$ | $T(36)=120$ | quadrupling doubles throughput | $100$ pallets need $25$ drivers | ceiling $120$ pallets per hour`,
  },
  {
    id: `math-8-71`,
    case_id: `MATH 8.71`,
    title: `Subscriber Demand and Revenue for a Streaming Tier`,
    context: `A streaming service prices one subscription tier at $p$ euros per month and models paid subscribers by $q(p)=Ap^{\\frac{-3}{2}}$, measured in thousands. At the current price of $4$ the tier holds $250$ thousand subscribers. Monthly revenue for the tier is $R=pq$, also measured in thousands of euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient in the demand model is $A=2000$.`,
      `Doubling the subscription price halves the number of subscribers.`,
      `At a price of $16$, monthly revenue for the tier is $500$.`,
      `Revenue is a power function of price with exponent $\\frac{-1}{2}$.`,
      `Raising the price by $21\\%$ reduces revenue by about $21\\%$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The demand exponent is already in the model, so the observed pair at price $4$ recovers the coefficient. Substitute into $q(p)=Ap^{\\frac{-3}{2}}$:

$$250=A\\cdot4^{\\frac{-3}{2}}$$

$$4^{\\frac{3}{2}}=\\left(4^{\\frac{1}{2}}\\right)^{3}=2^{3}=8$$

$$4^{\\frac{-3}{2}}=\\frac{1}{8}$$

$$A\\cdot\\frac{1}{8}=250$$

$$A=250\\cdot8=2000$$

The coefficient is $2000$, so the statement is True.`,
      `**B.** → False

Doubling the subscription price is an input factor of $2$, and subscribers scale by that factor raised to the demand exponent:

$$\\frac{q(2p)}{q(p)}=2^{\\frac{-3}{2}}$$

$$2^{\\frac{-3}{2}}=\\frac{1}{2^{\\frac{3}{2}}}=\\frac{1}{2\\sqrt{2}}\\approx0.3536$$

Halving the subscriber count would require a multiplier of $\\frac{1}{2}$. The model keeps only about $35\\%$ of the base, so the statement is False.`,
      `**C.** → True

The revenue figure at price $16$ needs the calibrated demand rule. Start from the observation $q(4)=250$:

$$250=A\\cdot4^{\\frac{-3}{2}}$$

$$4^{\\frac{-3}{2}}=\\frac{1}{\\left(4^{\\frac{1}{2}}\\right)^{3}}=\\frac{1}{8}$$

$$A=250\\cdot8=2000$$

Monthly revenue is price times subscribers, which adds one to the demand exponent:

$$R(p)=p\\cdot2000p^{\\frac{-3}{2}}=2000p^{\\frac{-1}{2}}$$

At the quoted price, $16^{\\frac{1}{2}}=4$:

$$R(16)=2000\\cdot16^{\\frac{-1}{2}}=\\frac{2000}{4}=500$$

Monthly revenue is $500$ thousand euros, so the statement is True.`,
      `**D.** → True

Revenue multiplies demand by an extra factor of $p$, which is itself a power of exponent $1$:

$$R(p)=p^{1}\\cdot Ap^{\\frac{-3}{2}}=Ap^{1-\\frac{3}{2}}$$

$$=Ap^{\\frac{-1}{2}}$$

That is a power function of price with exponent $\\frac{-1}{2}$, so the statement is True.`,
      `**E.** → False

A price rise of $21\\%$ is a multiplier of $1.21$, and it reaches revenue through the revenue exponent $\\frac{-1}{2}$, not through the demand exponent:

$$\\frac{R(1.21p)}{R(p)}=1.21^{\\frac{-1}{2}}$$

Since $1.21=1.1^{2}$, the square root is exact:

$$1.21^{\\frac{1}{2}}=1.1$$

$$1.21^{\\frac{-1}{2}}=\\frac{1}{1.1}\\approx0.9091$$

Revenue keeps about $90.9\\%$ of its former level, a fall of about $9.1\\%$ rather than $21\\%$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 71,
    solution_overview: `Demand is $q(p)=Ap^{\\frac{-3}{2}}$ with $q(4)=250$ thousand subscribers, and revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros per month, $q$ = subscribers in thousands, $R$ = revenue in thousands of euros. The isoelastic form fixes the exponent, the observed pair fixes the coefficient, and revenue follows by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A\\cdot4^{\\frac{-3}{2}}=250, \\qquad 4^{\\frac{-3}{2}}=\\frac{1}{8}$$

**2. Translate: a price multiplier.** A rise by a factor $k$ reaches quantity and revenue through different exponents:

$$\\frac{q(kp)}{q(p)}=k^{\\frac{-3}{2}}, \\qquad \\frac{R(kp)}{R(p)}=k^{\\frac{-1}{2}}$$

**Part 2: The model.**

$$q(p)=2000\\,p^{\\frac{-3}{2}} \\tag{1}$$

$$R(p)=2000\\,p^{\\frac{-1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=250\\times8=2000$$

**2.** Levels at the current price:

$$q(4)=250, \\qquad R(4)=1000$$

**3.** Levels at the quoted price of $16$:

$$q(16)=\\frac{2000}{64}=31.25, \\qquad R(16)=\\frac{2000}{4}=500$$

**4.** Multipliers for the two changes the statements ask about:

$$2^{\\frac{-3}{2}}\\approx0.35355, \\qquad 1.21^{\\frac{-1}{2}}=\\frac{1}{1.1}\\approx0.90909$$

**5.** Doubling the price removes about $64.6\\%$ of subscribers, well past a halving, while a rise of $21\\%$ costs only about $9.1\\%$ of revenue. Both effects point the same way, since the revenue exponent $\\frac{-1}{2}$ is negative.

**Answer.** $A=2000$ | $R(p)=2000p^{\\frac{-1}{2}}$ | $R(16)=500$`,
  },
  {
    id: `math-8-72`,
    case_id: `MATH 8.72`,
    title: `Fixed Retainer Plus a Square-Root Monitoring Fee`,
    context: `A compliance-monitoring platform bills a client $C(n)=400+30n^{\\frac{1}{2}}$ euros per month, where $n\\ge1$ is the number of branches under monitoring. The first term is a fixed retainer and the second term is the variable monitoring charge. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Monitoring $100$ branches costs $700$ euros per month.`,
      `At $n=400$ the variable monitoring charge is $600$ euros.`,
      `Raising the branch count from $100$ to $400$ doubles the variable monitoring charge.`,
      `At $n=100$ the average monthly cost per branch is $7$ euros.`,
      `Monitoring $900$ branches costs $1300$ euros per month.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Substitute $n=100$ into the monthly bill:

$$C(100)=400+30\\cdot100^{\\frac{1}{2}}$$

$$=400+30\\cdot10=700$$

The cost is $700$ euros per month, so the statement is True.`,
      `**B.** → True

The variable monitoring charge is the second term of the bill, not the retainer. At $n=400$:

$$400^{\\frac{1}{2}}=20$$

$$30\\cdot400^{\\frac{1}{2}}=30\\cdot20=600$$

The retainer of $400$ euros sits outside this calculation. The variable charge is $600$ euros, so the statement is True.`,
      `**C.** → True

The variable monitoring charge is $30n^{\\frac{1}{2}}$. Raising the branch count from $100$ to $400$ multiplies $n$ by $4$, so that charge is multiplied by

$$4^{\\frac{1}{2}}=2$$

The two levels agree:

$$30\\cdot100^{\\frac{1}{2}}=30\\cdot10=300$$

$$30\\cdot400^{\\frac{1}{2}}=30\\cdot20=600$$

The variable charge doubles, so the statement is True.`,
      `**D.** → True

Average cost per branch is the monthly bill divided by the branch count. At $n=100$:

$$C(100)=400+30\\cdot100^{\\frac{1}{2}}=400+300=700$$

$$\\frac{C(100)}{100}=\\frac{700}{100}=7$$

The average is $7$ euros per branch, so the statement is True.`,
      `**E.** → True

Nine hundred is a perfect square, $900=30^{2}$, so the square-root term is immediate:

$$C(900)=400+30\\cdot900^{\\frac{1}{2}}$$

$$=400+30\\cdot30=1300$$

Monitoring $900$ branches costs $1300$ euros per month, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 72,
    solution_overview: `The monthly bill is $C(n)=400+30n^{\\frac{1}{2}}$ euros for $n$ monitored branches.

**Part 1: Building the model.**

Let $n$ = branches under monitoring, $C$ = monthly bill in euros. The bill is a sum of two parts with very different behaviour: a constant retainer that ignores $n$ entirely, and a power term with coefficient $30$ and exponent $\\frac{1}{2}$.

**1. Translate: the fixed part.** The retainer contributes the same $400$ euros at every branch count.

**2. Translate: the variable part.** The monitoring charge scales as a square root, so multiplying the branch count by $k$ multiplies that charge by $k^{\\frac{1}{2}}$:

$$\\frac{30(kn)^{\\frac{1}{2}}}{30n^{\\frac{1}{2}}}=k^{\\frac{1}{2}}$$

**Part 2: The model.**

$$C(n)=400+30\\,n^{\\frac{1}{2}} \\tag{1}$$

$$\\frac{C(n)}{n}=\\frac{400}{n}+\\frac{30}{n^{\\frac{1}{2}}} \\tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the sizes the statements use:

$$100^{\\frac{1}{2}}=10, \\qquad 400^{\\frac{1}{2}}=20, \\qquad 900^{\\frac{1}{2}}=30$$

**2.** Variable charges at those sizes:

$$300, \\qquad 600, \\qquad 900$$

**3.** Full bills, adding the retainer to each:

$$C(100)=700, \\qquad C(400)=1000, \\qquad C(900)=1300$$

**4.** Average cost per branch at a hundred branches:

$$\\frac{700}{100}=7$$

**5.** Quadrupling the branch count from $100$ to $400$ multiplies the variable charge by $4^{\\frac{1}{2}}=2$, so the charge doubles while the retainer stays put. Because both terms of the average shrink as $n$ grows, larger networks always pay less per branch.

**Answer.** $C(100)=700$ | $C(400)=1000$ | $C(900)=1300$ | average per branch at $100$ is $7$`,
  },
  {
    id: `math-8-73`,
    case_id: `MATH 8.73`,
    title: `Ordering Cost Against Holding Cost at a Spare-Parts Depot`,
    context: `A spare-parts depot reorders one component in batches of $q>0$ units. Annual ordering cost is $O(q)=4800q^{-1}$ euros and annual holding cost is $H(q)=3q$ euros, so the annual total is $T(q)=4800q^{-1}+3q$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two cost components are equal at $q=40$, where each equals $120$ euros.`,
      `Annual total cost is minimized at $q=60$.`,
      `Doubling the batch size from $40$ to $80$ leaves the annual total unchanged.`,
      `Cutting the batch size from $40$ to $20$ raises the annual total by exactly as much as raising it from $40$ to $80$.`,
      `Ordering cost exceeds holding cost for every batch size above $40$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The two annual components meet where ordering cost equals holding cost:

$$\\frac{4800}{q}=3q$$

Batches are positive, so multiply through by $q$:

$$4800=3q^{2}$$

$$q^{2}=1600$$

$$q=40$$

The negative root $q=-40$ lies outside the domain $q>0$. Each component at this batch is

$$O(40)=\\frac{4800}{40}=120$$

$$H(40)=3\\cdot40=120$$

Both equal $120$ euros, so the statement is True.`,
      `**B.** → False

The annual total $T(q)=\\frac{4800}{q}+3q$ is stationary where its derivative vanishes:

$$T'(q)=-\\frac{4800}{q^{2}}+3$$

$$-\\frac{4800}{q^{2}}+3=0$$

$$\\frac{4800}{q^{2}}=3$$

$$q^{2}=1600$$

$$q=40$$

The second derivative $T''(q)=\\frac{9600}{q^{3}}$ is positive for every $q>0$, so $q=40$ is a minimum. Compare the named batch:

$$T(40)=\\frac{4800}{40}+3\\cdot40=120+120=240$$

$$T(60)=\\frac{4800}{60}+3\\cdot60=80+180=260$$

A batch of $60$ costs $20$ euros a year more than the minimum, so the statement is False.`,
      `**C.** → False

Evaluate the annual total at both named batches. At $q=40$:

$$T(40)=\\frac{4800}{40}+3\\cdot40=120+120=240$$

At $q=80$:

$$T(80)=\\frac{4800}{80}+3\\cdot80=60+240=300$$

The total rises from $240$ to $300$ euros rather than staying put, so the statement is False.`,
      `**D.** → True

The two cost components exchange values when the product of the two batches is $\\frac{4800}{3}=1600$, and that swap leaves the annual total unchanged. Replacing $q$ by $\\frac{1600}{q}$ gives

$$T\\left(\\frac{1600}{q}\\right)=\\frac{4800q}{1600}+\\frac{3\\cdot1600}{q}$$

$$=3q+\\frac{4800}{q}=T(q)$$

The product $20\\cdot80=1600$, so $20$ and $80$ form such a pair. In levels:

$$T(20)=\\frac{4800}{20}+3\\cdot20=240+60=300$$

$$T(80)=\\frac{4800}{80}+3\\cdot80=60+240=300$$

$$T(40)=\\frac{4800}{40}+3\\cdot40=240$$

Each move raises the total by $300-240=60$ euros, so the statement is True.`,
      `**E.** → False

The components cross at $q=40$, where $\\frac{4800}{q}=3q$. Above that batch the ordering term keeps falling while the holding term keeps rising. Check a larger batch:

$$O(80)=\\frac{4800}{80}=60$$

$$H(80)=3\\cdot80=240$$

Holding already exceeds ordering. For every $q>40$,

$$\\frac{O(q)}{H(q)}=\\frac{4800}{3q^{2}}=\\frac{1600}{q^{2}}<1$$

Ordering cost is the smaller component above $q=40$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 73,
    solution_overview: `Annual cost splits into $O(q)=4800q^{-1}$ for ordering and $H(q)=3q$ for holding, with total $T(q)=4800q^{-1}+3q$.

**Part 1: Building the model.**

Let $q$ = units per batch, $O$ = annual ordering cost, $H$ = annual holding cost, $T$ = annual total. One term is a power with exponent $-1$ and one is a power with exponent $1$, so the total falls at small batches and rises at large ones.

**1. Translate: equal components.**

$$\\frac{4800}{q}=3q$$

**2. Translate: the cheapest batch.**

$$T'(q)=-4800q^{-2}+3=0$$

**Part 2: The model.**

$$T(q)=\\frac{4800}{q}+3q \\tag{1}$$

$$T\\!\\left(\\frac{1600}{q}\\right)=T(q) \\tag{2}$$

**Part 3: Solve.**

**1.** Both conditions collapse to the same equation:

$$q^{2}=1600 \\quad \\Rightarrow \\quad q=40$$

**2.** Components and total at the crossing point:

$$O(40)=120, \\qquad H(40)=120, \\qquad T(40)=240$$

**3.** The second derivative confirms a minimum:

$$T''(q)=\\frac{9600}{q^{3}}>0$$

**4.** Totals at the batches the statements name:

$$T(20)=300, \\qquad T(60)=260, \\qquad T(80)=300$$

**5.** The identity in $(2)$ explains why $20$ and $80$ tie: their product is $1600$, so they exchange the two components. Below $q=40$ ordering dominates, above it holding dominates, and no batch beats the $240$ euro floor. Mid-range batches such as $q=36$ still prefer the balanced schedule, since the two cost components have not yet swapped places.

**Answer.** components equal at $q=40$ | $T(40)=240$ is the minimum | $T(20)=T(80)=300$`,
  },
  {
    id: `math-8-74`,
    case_id: `MATH 8.74`,
    title: `Average Product on a Bottling Line`,
    context: `Output on a bottling line is modelled by $Q(L)=12L^{\\frac{3}{4}}$ units per shift, where $L>0$ is the number of labour hours booked for that shift. Average product is output per labour hour, $\\frac{Q(L)}{L}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Average product is a power function of $L$ with exponent $\\frac{3}{4}$.`,
      `At $L=16$ output is $96$ units and average product is $8$ units per hour.`,
      `Doubling labour hours doubles average product.`,
      `Average product falls as labour hours rise.`,
      `At $L=81$ average product is $6$ units per hour.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

Average product divides output by labour hours, which subtracts one from the exponent of $Q$:

$$\\frac{Q(L)}{L}=\\frac{12L^{\\frac{3}{4}}}{L}=12L^{\\frac{3}{4}-1}$$

$$=12L^{\\frac{-1}{4}}$$

That is a power function of $L$ with exponent $\\frac{-1}{4}$, not $\\frac{3}{4}$. The claimed exponent belongs to total output, so the statement is False.`,
      `**B.** → False

The claim names both total output and average product at $L=16$. Output uses the exponent $\\frac{3}{4}$:

$$16^{\\frac{3}{4}}=\\left(16^{\\frac{1}{4}}\\right)^{3}=2^{3}=8$$

$$Q(16)=12\\cdot8=96$$

That half of the claim is correct. Average product then divides by hours:

$$\\frac{Q(16)}{16}=\\frac{96}{16}=6$$

Average product is $6$ units per hour, not $8$. The figure $8$ is the intermediate power $16^{\\frac{3}{4}}$, not a rate, so the statement is False.`,
      `**C.** → False

Average product is $12L^{\\frac{-1}{4}}$, so doubling labour multiplies average product by $2$ raised to that exponent:

$$\\frac{(2L)^{\\frac{-1}{4}}}{L^{\\frac{-1}{4}}}=2^{\\frac{-1}{4}}$$

$$2^{\\frac{-1}{4}}\\approx0.8409$$

The multiplier is about $0.84$, not $2$. Average product falls rather than doubles, so the statement is False.`,
      `**D.** → True

Dividing output by labour hours gives

$$\\frac{Q(L)}{L}=12L^{\\frac{-1}{4}}=\\frac{12}{L^{\\frac{1}{4}}}$$

On the domain $L>0$ the fourth root in the denominator grows with $L$, so the quotient shrinks. A negative exponent is the condition for a decreasing power function, so the statement is True.`,
      `**E.** → False

Average product at the named shift is

$$\\frac{Q(81)}{81}=12\\cdot81^{\\frac{-1}{4}}$$

The fourth root of $81$ is $3$, because $3^{4}=81$:

$$12\\cdot81^{\\frac{-1}{4}}=\\frac{12}{3}=4$$

Average product is $4$ units per hour, not $6$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 74,
    solution_overview: `Output is $Q(L)=12L^{\\frac{3}{4}}$ units per shift and average product is $\\frac{Q(L)}{L}$.

**Part 1: Building the model.**

Let $L$ = labour hours booked, $Q$ = units produced in the shift, and let average product be output per labour hour. Dividing a power function by its own input subtracts one from the exponent, which is the whole content of this task.

**1. Translate: total output.** The exponent $\\frac{3}{4}$ is below $1$, so output grows less than proportionally with hours.

**2. Translate: output per hour.**

$$\\frac{Q(L)}{L}=\\frac{12L^{\\frac{3}{4}}}{L^{1}}=12L^{\\frac{-1}{4}}$$

**Part 2: The model.**

$$Q(L)=12\\,L^{\\frac{3}{4}} \\tag{1}$$

$$\\frac{Q(L)}{L}=12\\,L^{\\frac{-1}{4}} \\tag{2}$$

**Part 3: Solve.**

**1.** Fourth roots at the shift lengths the statements use:

$$16^{\\frac{1}{4}}=2, \\qquad 81^{\\frac{1}{4}}=3$$

**2.** Total output at those shifts:

$$Q(16)=12\\cdot8=96, \\qquad Q(81)=12\\cdot27=324$$

**3.** Average product at the same shifts:

$$\\frac{96}{16}=6, \\qquad \\frac{324}{81}=4$$

**4.** The multiplier from doubling the shift:

$$2^{\\frac{-1}{4}}\\approx0.8409$$

**5.** Every claim in this task turns on the sign of the exponent in $(2)$. Because $\\frac{-1}{4}$ is negative, average product falls as hours rise, and it falls slowly, losing only about $16\\%$ when hours double. That slow decline is the signature of an exponent between $0$ and $1$: total product still rises, but each extra hour contributes less than the last.

**Answer.** average product $=12L^{\\frac{-1}{4}}$ | $6$ units per hour at $L=16$ | $4$ units per hour at $L=81$`,
  },
  {
    id: `math-8-75`,
    case_id: `MATH 8.75`,
    title: `Learning Curve With an Irreducible Assembly Floor`,
    context: `A drone-assembly cell models the labour time of the unit built after $n$ cumulative units by $t(n)=8+50n^{\\frac{-1}{2}}$ minutes, where $n\\ge1$. The constant $8$ is an irreducible handling floor and the second term is the learning component. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $n=25$ the modelled unit time is $18$ minutes.`,
      `As $n$ grows without bound the modelled unit time approaches $8$ minutes without ever reaching it.`,
      `Raising cumulative output from $25$ to $100$ halves the learning component.`,
      `Raising cumulative output from $25$ to $100$ halves the modelled unit time.`,
      `Modelled unit time first falls below $10$ minutes once cumulative output passes $625$ units.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The learning term at $n=25$ uses the square root of cumulative output:

$$50\\cdot25^{\\frac{-1}{2}}=\\frac{50}{5}=10$$

Add the handling floor:

$$t(25)=8+10=18$$

The modelled unit time is $18$ minutes, so the statement is True.`,
      `**B.** → True

The learning term is a power with negative exponent, so it tends to zero as cumulative output grows:

$$\\lim_{n\\to\\infty}50n^{\\frac{-1}{2}}=0$$

The floor is constant, so the whole model tends to it:

$$\\lim_{n\\to\\infty}t(n)=8+0=8$$

Reaching $8$ minutes exactly would require $\\frac{50}{\\sqrt{n}}=0$. The numerator is fixed at $50$ and $\\sqrt{n}$ is finite for every finite $n$, so the learning term stays strictly positive. The modelled time approaches $8$ minutes and never attains it, so the statement is True.`,
      `**C.** → True

The learning component is $50n^{\\frac{-1}{2}}$. Cumulative output is multiplied by

$$\\frac{100}{25}=4$$

so that component is multiplied by

$$4^{\\frac{-1}{2}}=\\frac{1}{2}$$

The two levels confirm the halving:

$$50\\cdot25^{\\frac{-1}{2}}=\\frac{50}{5}=10$$

$$50\\cdot100^{\\frac{-1}{2}}=\\frac{50}{10}=5$$

Quadrupling cumulative output halves the learning component, so the statement is True.`,
      `**D.** → False

The scale factor $4^{\\frac{-1}{2}}=\\frac{1}{2}$ applies only to the learning term. The floor of $8$ minutes does not scale. The two totals are

$$t(25)=8+\\frac{50}{5}=8+10=18$$

$$t(100)=8+\\frac{50}{10}=8+5=13$$

Half of $18$ minutes would be $9$ minutes. The model gives $13$ minutes instead:

$$\\frac{t(100)}{t(25)}=\\frac{13}{18}\\approx0.722$$

Unit time does not halve, so the statement is False.`,
      `**E.** → True

Unit time falls below $10$ minutes when

$$8+\\frac{50}{\\sqrt{n}}<10$$

$$\\frac{50}{\\sqrt{n}}<2$$

Both sides are positive, so multiply through by $\\sqrt{n}$ and divide by $2$:

$$\\sqrt{n}>\\frac{50}{2}=25$$

$$n>625$$

At the boundary itself:

$$t(625)=8+\\frac{50}{\\sqrt{625}}=8+\\frac{50}{25}=10$$

The time is still $10$ minutes at $n=625$ and drops below only for larger cumulative output, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 75,
    solution_overview: `Unit labour time is $t(n)=8+50n^{\\frac{-1}{2}}$ minutes, a constant floor plus a decaying learning term.

**Part 1: Building the model.**

Let $n$ = cumulative units built, $t$ = labour minutes for the next unit. The model is a sum, not a pure power, so scaling rules apply to the learning term alone and never to the total.

**1. Translate: the learning term.** Multiplying cumulative output by $k$ multiplies that term by $k^{\\frac{-1}{2}}$:

$$\\frac{50(kn)^{\\frac{-1}{2}}}{50n^{\\frac{-1}{2}}}=k^{\\frac{-1}{2}}$$

**2. Translate: a time target.** A ceiling on unit time becomes a lower bound on cumulative output:

$$8+\\frac{50}{\\sqrt{n}}<c \\quad \\Longleftrightarrow \\quad \\sqrt{n}>\\frac{50}{c-8}$$

**Part 2: The model.**

$$t(n)=8+50\\,n^{\\frac{-1}{2}} \\tag{1}$$

$$\\lim_{n\\to\\infty}t(n)=8 \\tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the counts the statements use:

$$25^{\\frac{1}{2}}=5, \\qquad 100^{\\frac{1}{2}}=10, \\qquad 625^{\\frac{1}{2}}=25$$

**2.** Learning components at those counts:

$$10, \\qquad 5, \\qquad 2$$

**3.** Totals, adding the floor to each:

$$t(25)=18, \\qquad t(100)=13, \\qquad t(625)=10$$

**4.** The target from $(2)$ applied to a ceiling of $10$ minutes:

$$\\sqrt{n}>25 \\quad \\Rightarrow \\quad n>625$$

**5.** Quadrupling output halves the learning term but cuts the total only from $18$ to $13$ minutes, roughly $28\\%$. The floor of $8$ minutes is approached and never attained, since $\\frac{50}{\\sqrt{n}}$ stays strictly positive.

**Answer.** $t(25)=18$ | $t(100)=13$ | floor $8$ approached but never reached | below $10$ minutes once $n>625$`,
  },
  {
    id: `math-8-76`,
    case_id: `MATH 8.76`,
    title: `Break-Even for a Fish Farm With Diminishing Harvest Returns`,
    context: `A fish farm turns feed into harvest revenue $R(x)=90x^{\\frac{2}{3}}$ thousand euros in a season, where $x>0$ is tonnes of feed used, while feed and handling cost $C(x)=30x$ thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue equals cost at $x=27$.`,
      `At $x=8$ the season runs at a loss.`,
      `Revenue is proportional to the tonnes of feed used.`,
      `For every $x>27$ the season's cost exceeds its revenue.`,
      `Raising feed from $8$ to $16$ tonnes doubles revenue.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Break-even means the given revenue and cost rules are equal, so set them equal:

$$90x^{\\frac{2}{3}}=30x$$

Divide both sides by $30$:

$$3x^{\\frac{2}{3}}=x$$

For $x>0$, divide by $x^{\\frac{2}{3}}$:

$$3=x^{\\frac{1}{3}}$$

Cube both sides:

$$x=27$$

Check each side at that feed level, using $27^{\\frac{2}{3}}=(\\sqrt[3]{27})^{2}=9$:

$$R(27)=90\\cdot 9=810$$

$$C(27)=30\\cdot 27=810$$

Both sides equal $810$ thousand euros, so the statement is True.`,
      `**B.** → False

A loss at eight tonnes would mean cost above revenue there. The cube root of $8$ is $2$, so $8^{\\frac{2}{3}}=2^{2}=4$:

$$R(8)=90\\cdot 4=360$$

$$C(8)=30\\cdot 8=240$$

Profit is the gap:

$$P(8)=360-240=120$$

The season is $120$ thousand euros ahead rather than behind, so the statement is False.`,
      `**C.** → False

Proportionality would make revenue a power of exponent $1$, so that doubling feed would double revenue. The given rule has exponent $\\frac{2}{3}$:

$$\\frac{R(kx)}{R(x)}=k^{\\frac{2}{3}}$$

For a doubling of feed:

$$\\frac{R(2x)}{R(x)}=2^{\\frac{2}{3}}\\approx 1.5874$$

The multiplier is not $2$, so revenue is not proportional to the tonnes of feed used, so the statement is False.`,
      `**D.** → True

Cost exceeds revenue precisely when the feed level sits above the crossing of the two curves. Revenue covers cost when

$$90x^{\\frac{2}{3}}\\ge 30x$$

Divide by $30$:

$$3x^{\\frac{2}{3}}\\ge x$$

For $x>0$, divide by $x^{\\frac{2}{3}}$:

$$3\\ge x^{\\frac{1}{3}}$$

Cubing (an increasing map) gives

$$x\\le 27$$

So the inequality flips for every $x>27$. A check at $x=64$, using $64^{\\frac{2}{3}}=4^{2}=16$:

$$R(64)=90\\cdot 16=1440$$

$$C(64)=30\\cdot 64=1920$$

Cost is ahead past the crossing, so the statement is True.`,
      `**E.** → False

Raising feed from $8$ to $16$ tonnes is a doubling of the input, and revenue then scales by $2$ raised to the model's exponent, not by $2$:

$$\\frac{R(16)}{R(8)}=2^{\\frac{2}{3}}\\approx 1.5874$$

The two levels make the shortfall concrete. From $8^{\\frac{2}{3}}=4$:

$$R(8)=90\\cdot 4=360$$

$$R(16)=360\\cdot 2^{\\frac{2}{3}}\\approx 571.5$$

Doubling $360$ would be $720$ thousand euros, and the model delivers about $571.5$ instead, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 76,
    solution_overview: `Revenue is $R(x)=90x^{\\frac{2}{3}}$ and cost is $C(x)=30x$, both in thousand euros for $x$ tonnes of feed.

**Part 1: Building the model.**

Let $x$ = tonnes of feed, $R$ = season revenue, $C$ = season cost, $P=R-C$ = profit. Revenue is a power with exponent $\\frac{2}{3}$, so it grows less than proportionally, while cost is a power with exponent $1$. A curve with the smaller exponent must eventually be overtaken.

**1. Translate: break-even.**

$$90x^{\\frac{2}{3}}=30x$$

**2. Translate: the comparison.** Dividing by the positive quantity $30x^{\\frac{2}{3}}$ reduces the whole comparison to one cube root, weighed against the number $3$:

$$\\frac{R(x)}{C(x)}=\\frac{3}{x^{\\frac{1}{3}}}$$

**Part 2: The model.**

$$P(x)=90x^{\\frac{2}{3}}-30x \\tag{1}$$

$$R(x)\\ge C(x) \\quad \\Longleftrightarrow \\quad x\\le27 \\tag{2}$$

**Part 3: Solve.**

**1.** The break-even feed level:

$$x^{\\frac{1}{3}}=3 \\quad \\Rightarrow \\quad x=27$$

**2.** Levels at the crossing:

$$R(27)=810, \\qquad C(27)=810, \\qquad P(27)=0$$

**3.** Levels below the crossing:

$$R(8)=360, \\qquad C(8)=240, \\qquad P(8)=120$$

**4.** Levels above the crossing:

$$R(64)=1440, \\qquad C(64)=1920, \\qquad P(64)=-480$$

**5.** The scaling test separates the two curves: doubling feed multiplies revenue by $2^{\\frac{2}{3}}\\approx1.5874$ but multiplies cost by $2$. Profit is positive on $0<x<27$, zero at $27$, and negative afterwards, peaking at $x=8$ where $P=120$.

**Answer.** break-even at $x=27$ | $P(8)=120$ | cost leads for every $x>27$`,
  },
  {
    id: `math-8-77`,
    case_id: `MATH 8.77`,
    title: `Calibrating a Handling-Cost Law From a Cost Difference`,
    context: `A distribution centre models daily handling cost by $f(x)=Ax^{\\frac{3}{2}}$ euros, where $x>0$ is a pallet-volume index. The individual daily figures were lost, and the only surviving record states that the cost at index $16$ exceeds the cost at index $4$ by $336$ euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient is $A=6$.`,
      `The recovered levels are $f(4)=48$ and $f(16)=384$.`,
      `At index $9$ the modelled handling cost is $162$ euros.`,
      `Multiplying the pallet-volume index by $4$ multiplies handling cost by $8$.`,
      `The difference $f(25)-f(9)$ equals $588$ euros.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The surviving difference still determines the coefficient, because $A$ factors out of both model values. Write the record as an equation:

$$f(16)-f(4)=A\\cdot 16^{\\frac{3}{2}}-A\\cdot 4^{\\frac{3}{2}}=336$$

Evaluate each power by taking the square root first and then cubing:

$$16^{\\frac{3}{2}}=(\\sqrt{16})^{3}=4^{3}=64$$

$$4^{\\frac{3}{2}}=(\\sqrt{4})^{3}=2^{3}=8$$

Factor $A$ and solve:

$$A(64-8)=56A=336$$

$$A=\\frac{336}{56}=6$$

The calibrated rule is $f(x)=6x^{\\frac{3}{2}}$, so the statement is True.`,
      `**B.** → True

The two quoted levels are the model evaluated at the recorded indices, so the coefficient must be recovered first. The record is a difference of two powers:

$$A\\cdot 16^{\\frac{3}{2}}-A\\cdot 4^{\\frac{3}{2}}=336$$

The powers are $16^{\\frac{3}{2}}=64$ and $4^{\\frac{3}{2}}=8$, which collapse the gap to

$$56A=336$$

$$A=6$$

Now evaluate the calibrated rule at each named index:

$$f(4)=6\\cdot 8=48$$

$$f(16)=6\\cdot 64=384$$

Those two levels reproduce the surviving record:

$$384-48=336$$

Both quoted figures match the calibration, so the statement is True.`,
      `**C.** → True

Index $9$ is a fresh evaluation, so the coefficient has to come from the recorded gap before the power at $9$ can be used. From $16^{\\frac{3}{2}}=64$ and $4^{\\frac{3}{2}}=8$, the record reads

$$A(64-8)=336$$

$$A=\\frac{336}{56}=6$$

Take the square root of $9$ first and then cube:

$$9^{\\frac{3}{2}}=(\\sqrt{9})^{3}=3^{3}=27$$

Apply the coefficient:

$$f(9)=6\\cdot 27=162$$

The modelled handling cost at index $9$ is $162$ euros, so the statement is True.`,
      `**D.** → True

The multiplier for a power function depends only on the input factor and the exponent, so the coefficient cancels:

$$\\frac{f(4x)}{f(x)}=4^{\\frac{3}{2}}$$

Evaluate that power by taking the square root first:

$$4^{\\frac{3}{2}}=(\\sqrt{4})^{3}=2^{3}=8$$

A fourfold rise in the pallet-volume index multiplies handling cost by $8$, so the statement is True.`,
      `**E.** → True

The claimed gap is a difference of two fresh evaluations, so both need the calibrated coefficient. The record $f(16)-f(4)=336$ with $16^{\\frac{3}{2}}=64$ and $4^{\\frac{3}{2}}=8$ gives

$$56A=336$$

$$A=6$$

The two new powers, again taking square roots first, are

$$25^{\\frac{3}{2}}=(\\sqrt{25})^{3}=5^{3}=125$$

$$9^{\\frac{3}{2}}=(\\sqrt{9})^{3}=3^{3}=27$$

Apply the coefficient to each:

$$f(25)=6\\cdot 125=750$$

$$f(9)=6\\cdot 27=162$$

Subtract:

$$750-162=588$$

The difference equals $588$ euros, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Handling cost is $f(x)=Ax^{\\frac{3}{2}}$ euros, and the only record is $f(16)-f(4)=336$.

**Part 1: Building the model.**

Let $x$ = pallet-volume index, $f$ = daily handling cost in euros. No single level is known, so the coefficient has to come out of a difference. That works because $A$ is a common factor of every model value, and the exponent is given.

**1. Translate: the surviving record.**

$$A\\cdot16^{\\frac{3}{2}}-A\\cdot4^{\\frac{3}{2}}=336$$

**2. Translate: factor the coefficient out.**

$$A\\left(16^{\\frac{3}{2}}-4^{\\frac{3}{2}}\\right)=336$$

**Part 2: The model.**

$$f(x)=6\\,x^{\\frac{3}{2}} \\tag{1}$$

$$\\frac{f(kx)}{f(x)}=k^{\\frac{3}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** The two powers in the record:

$$16^{\\frac{3}{2}}=64, \\qquad 4^{\\frac{3}{2}}=8$$

**2.** The calibration:

$$56A=336 \\quad \\Rightarrow \\quad A=6$$

**3.** Recovered levels at the recorded indices:

$$f(4)=48, \\qquad f(16)=384, \\qquad 384-48=336$$

**4.** Further levels the statements need:

$$f(9)=162, \\qquad f(25)=750, \\qquad 750-162=588$$

**5.** The scaling identity in $(2)$ gives the same information without any levels: a factor of $4$ on the index multiplies cost by $4^{\\frac{3}{2}}=8$, matching $\\frac{384}{48}=8$. An exponent above $1$ makes cost rise faster than volume, which is why equal index gaps produce widening cost gaps. Once both constants are known, every later index is a pure evaluation of $f(s)=6s^{\\frac{3}{2}}$.

**Answer.** $A=6$ | $f(4)=48$, $f(9)=162$, $f(16)=384$, $f(25)=750$ | factor of $4$ on volume multiplies cost by $8$`,
  },
  {
    id: `math-8-78`,
    case_id: `MATH 8.78`,
    title: `Inverting a Wastewater Load Model Against a Permit Ceiling`,
    context: `A dye-house discharges a wastewater load of $W(s)=5s^{\\frac{3}{2}}$ kilograms per day, where $s>0$ is a production scale index. The site permit caps the daily load at $320$ kilograms, and the plant wants the largest scale index it may run. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The largest admissible scale index is $s=16$.`,
      `The load model inverts to $s=(\\frac{W}{5})^{\\frac{2}{3}}$.`,
      `Doubling the permit ceiling to $640$ doubles the admissible scale index.`,
      `At scale index $9$ the daily load is $135$ kilograms.`,
      `If the coefficient rose from $5$ to $10$, the admissible scale index under the same ceiling would be halved.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The largest admissible scale index is the solution of the load rule at the permit ceiling:

$$5s^{\\frac{3}{2}}=320$$

Divide by the coefficient:

$$s^{\\frac{3}{2}}=64$$

Raise both sides to the reciprocal power $\\frac{2}{3}$, using $64^{\\frac{1}{3}}=4$:

$$s=64^{\\frac{2}{3}}=(\\sqrt[3]{64})^{2}=4^{2}=16$$

Check the load at that index, using $16^{\\frac{3}{2}}=64$:

$$W(16)=5\\cdot 64=320$$

The load sits exactly on the cap. The exponent $\\frac{3}{2}$ is positive, so $W$ increases with $s$: every larger index breaches the permit, and every smaller index complies. The largest admissible index is $16$, so the statement is True.`,
      `**B.** → True

Inverting the load rule means solving for the scale index. Start from the model and isolate the power:

$$W=5s^{\\frac{3}{2}}$$

$$s^{\\frac{3}{2}}=\\frac{W}{5}$$

Raise both sides to the reciprocal exponent $\\frac{2}{3}$. That cancels $\\frac{3}{2}$ because $\\frac{3}{2}\\cdot\\frac{2}{3}=1$:

$$s=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}}$$

The permit figure returns the admissible index:

$$\\left(\\frac{320}{5}\\right)^{\\frac{2}{3}}=64^{\\frac{2}{3}}=16$$

The stated inverse matches the algebra, so the statement is True.`,
      `**C.** → False

Doubling the ceiling multiplies the admissible index by $2$ raised to the inverse exponent $\\frac{2}{3}$, not by $2$:

$$\\frac{s(2W)}{s(W)}=2^{\\frac{2}{3}}\\approx 1.5874$$

The original ceiling gives $s=16$, because $\\left(\\frac{320}{5}\\right)^{\\frac{2}{3}}=64^{\\frac{2}{3}}=16$. The doubled ceiling of $640$ kilograms therefore allows

$$s=16\\cdot 2^{\\frac{2}{3}}\\approx 25.40$$

Doubling the index would require $s=32$. The model allows only about $25.4$, so the statement is False.`,
      `**D.** → True

The load at index $9$ is a direct substitution into the given rule. Take the square root first and then cube, since $9^{\\frac{3}{2}}=(\\sqrt{9})^{3}=3^{3}=27$:

$$W(9)=5\\cdot 27=135$$

The daily load is $135$ kilograms, so the statement is True.`,
      `**E.** → False

A larger coefficient tightens the admissible index, but the inverse carries exponent $\\frac{2}{3}$, so doubling the coefficient does not halve the index. With coefficient $10$ the ceiling equation is

$$10s^{\\frac{3}{2}}=320$$

$$s^{\\frac{3}{2}}=32$$

$$s=32^{\\frac{2}{3}}=(2^{5})^{\\frac{2}{3}}=2^{\\frac{10}{3}}\\approx 10.08$$

The original admissible index, from $5s^{\\frac{3}{2}}=320$, is $s=16$. The ratio is

$$\\frac{10.08}{16}\\approx 0.63=2^{-\\frac{2}{3}}$$

Halving would give $s=8$, and the model still permits about $10.1$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 78,
    solution_overview: `Load is $W(s)=5s^{\\frac{3}{2}}$ kilograms per day and the permit caps it at $320$.

**Part 1: Building the model.**

Let $s$ = production scale index, $W$ = daily load in kilograms. The exponent $\\frac{3}{2}$ is positive, so load increases with scale and a cap on load becomes a cap on scale. Converting one into the other is an inversion, and inverting a power means using the reciprocal exponent.

**1. Translate: the binding permit.**

$$5s^{\\frac{3}{2}}=320$$

**2. Translate: the inverse rule.** Raising both sides to the power $\\frac{2}{3}$ cancels the exponent, since $(\\frac{3}{2})\\cdot(\\frac{2}{3})=1$:

$$s=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}}$$

**Part 2: The model.**

$$W(s)=5\\,s^{\\frac{3}{2}} \\tag{1}$$

$$s(W)=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** The binding permit reduces to a clean power:

$$s^{\\frac{3}{2}}=64 \\quad \\Rightarrow \\quad s=64^{\\frac{2}{3}}=16$$

**2.** Loads at the indices the statements use:

$$W(9)=135, \\qquad W(16)=320$$

**3.** A doubled ceiling, using $(2)$:

$$s=128^{\\frac{2}{3}}\\approx25.40, \\qquad \\frac{25.40}{16}=2^{\\frac{2}{3}}\\approx1.5874$$

**4.** A doubled coefficient, again using $(2)$:

$$s=32^{\\frac{2}{3}}\\approx10.08, \\qquad \\frac{10.08}{16}=2^{\\frac{-2}{3}}\\approx0.63$$

**5.** Both counterfactuals move the admissible index by a factor of $2$ raised to $\\pm\\frac{2}{3}$, never by $2$ or by $\\frac{1}{2}$. That is the practical content of inverting an exponent above $1$: scale reacts to permits more slowly than load reacts to scale.

**Answer.** largest index $s=16$ | inverse $s=(\\frac{W}{5})^{\\frac{2}{3}}$ | $W(9)=135$ | doubling the cap raises the index by $2^{\\frac{2}{3}}\\approx1.59$`,
  },
  {
    id: `math-8-79`,
    case_id: `MATH 8.79`,
    title: `Elasticity Shortcut Against the Exact Change in Parking Demand`,
    context: `A city parking authority models hourly demand by $q(p)=Ap^{-2}$ occupied spaces, where $p$ is the hourly tariff in euros, and it records $4000$ occupied spaces at a tariff of $3$. Demand of this form has constant elasticity $-2$, so the usual shortcut predicts a percentage change in demand equal to $-2$ times the percentage change in tariff. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising the tariff by $25\\%$ cuts hourly demand by exactly $50\\%$.`,
      `The elasticity shortcut understates the true loss caused by a $25\\%$ tariff rise.`,
      `Raising the tariff by $25\\%$ cuts hourly demand by exactly $36\\%$.`,
      `Raising the tariff by $1\\%$ cuts hourly demand by exactly $2\\%$.`,
      `Cutting the tariff by $25\\%$ raises hourly demand by exactly $50\\%$.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

A $25\\%$ tariff rise is a factor of $1.25$, and demand then scales by that factor raised to the exponent $-2$, not by twice the percentage change:

$$\\frac{q(1.25p)}{q(p)}=1.25^{-2}$$

$$1.25^{2}=1.5625$$

$$1.25^{-2}=\\frac{1}{1.5625}=0.64$$

Demand keeps $64\\%$ of its level, so the true cut is $36\\%$, not $50\\%$. The elasticity shortcut $-2\\times 25\\%=-50\\%$ is the infinitesimal approximation, not the exact finite change, so the statement is False.`,
      `**B.** → False

The shortcut applies the elasticity $-2$ to the whole finite $25\\%$ rise:

$$-2\\times 25\\%=-50\\%$$

The exact demand multiplier is the same tariff factor raised to the exponent:

$$1.25^{-2}=\\frac{1}{1.5625}=0.64$$

That is a $36\\%$ cut, not a $50\\%$ cut. A predicted loss of $50\\%$ against a true loss of $36\\%$ means the shortcut overstates the damage, rather than understating it, so the statement is False.`,
      `**C.** → True

The exact cut from a $25\\%$ tariff rise is the surviving demand fraction $1.25^{-2}$, converted into a percentage loss. First the power:

$$1.25^{-2}=\\frac{1}{1.5625}=0.64$$

$$1-0.64=0.36=36\\%$$

Levels confirm that the $36\\%$ is exact. The observation $q(3)=4000$ pins the coefficient:

$$A\\cdot 3^{-2}=4000$$

$$3^{-2}=\\frac{1}{9}$$

$$A=4000\\cdot 9=36000$$

The new tariff is $3\\cdot 1.25=3.75$:

$$3.75^{2}=14.0625$$

$$q(3.75)=\\frac{36000}{14.0625}=2560$$

$$\\frac{2560}{4000}=0.64$$

Demand falls by exactly $36\\%$, so the statement is True.`,
      `**D.** → False

Even a $1\\%$ tariff rise is not matched exactly by a $2\\%$ demand cut. The true multiplier is

$$1.01^{-2}=\\frac{1}{1.01^{2}}=\\frac{1}{1.0201}\\approx 0.980296$$

The implied cut is

$$1-0.980296=0.019704\\approx 1.9704\\%$$

The shortcut predicts exactly $2\\%$, and the exact figure is about $1.9704\\%$. Elasticity is a derivative, so the two agree only in the limit of a vanishing change. The claim requires an exact match, so the statement is False.`,
      `**E.** → False

A $25\\%$ tariff cut is a factor of $0.75$, and demand then scales by that factor raised to $-2$:

$$\\frac{q(0.75p)}{q(p)}=0.75^{-2}$$

$$0.75^{2}=0.5625$$

$$0.75^{-2}=\\frac{1}{0.5625}\\approx 1.7778$$

Demand rises by about $77.8\\%$, not by $50\\%$. The shortcut $+50\\%$ would be the infinitesimal reading $-2\\times(-25\\%)$, and the exact power is larger because the exponent is negative. The claimed gain is too small, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 79,
    solution_overview: `Demand is $q(p)=Ap^{-2}$ with $q(3)=4000$, and the elasticity shortcut is compared with exact finite changes.

**Part 1: Building the model.**

Let $p$ = hourly tariff in euros, $q$ = occupied spaces. The exponent $-2$ is the constant elasticity. The shortcut multiplies that elasticity by a percentage change in tariff; the exact route raises the tariff multiplier to the exponent. The two agree only in the limit of vanishing changes.

**1. Translate: the observed pair.**

$$A\\cdot3^{-2}=4000$$

**2. Translate: the two methods.** For a tariff factor $k$, the shortcut predicts the first expression while the exact route gives the second:

$$-2(k-1), \\qquad k^{-2}-1$$

**Part 2: The model.**

$$q(p)=36000\\,p^{-2} \\tag{1}$$

$$\\frac{q(kp)}{q(p)}=k^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=4000\\times9=36000$$

**2.** Exact multipliers from $(2)$ at the three factors the statements use:

$$1.25^{-2}=0.64, \\qquad 1.01^{-2}\\approx0.980296, \\qquad 0.75^{-2}\\approx1.7778$$

**3.** The matching exact percentage changes:

$$-36\\%, \\qquad -1.9704\\%, \\qquad +77.78\\%$$

**4.** Levels at the corresponding tariffs:

$$q(3)=4000, \\qquad q(3.75)=2560, \\qquad q(2.25)\\approx7111.1$$

**5.** The shortcut predicts $-50\\%$, $-2\\%$ and $+50\\%$ for the same three moves. It overstates the loss from a rise and understates the gain from a cut, and its error shrinks as the change shrinks, from $14$ percentage points at $25\\%$ down to about $0.03$ at $1\\%$.

**Answer.** $A=36000$ | exact cut of $36\\%$ for a $25\\%$ rise | exact gain of about $77.8\\%$ for a $25\\%$ cut | shortcut exact only in the limit`,
  },
  {
    id: `math-8-80`,
    case_id: `MATH 8.80`,
    title: `Geometrically Similar Bells Cast From One Pattern`,
    context: `A foundry casts geometrically similar bronze bells from a single pattern, so mass follows $M(h)=A h^{3}$ kilograms, where $h>0$ is the bell height in metres. The pattern book omits the coefficient; it records only that a finished bell of height $0.5$ m was weighed at $30$ kg. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The mass law is $M(h)=240h^{3}$.`,
      `Doubling a bell's height multiplies its mass by $8$.`,
      `A bell of height $1.5$ m has a mass of $810$ kg.`,
      `A bell three times as tall as another has three times its mass.`,
      `Halving a bell's height leaves one eighth of the mass.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The claimed mass law is the cube with its coefficient pinned by the single weighing $M(0.5)=30$:

$$A\\cdot(0.5)^{3}=30$$

$$(0.5)^{3}=0.125$$

$$0.125A=30$$

$$A=\\frac{30}{0.125}=240$$

The calibrated rule is therefore $M(h)=240h^{3}$, so the statement is True.`,
      `**B.** → True

Doubling a bell's height multiplies mass by the cube of $2$, because mass is a power of height with exponent $3$:

$$\\frac{M(2h)}{M(h)}=2^{3}=8$$

The coefficient cancels, so the factor does not depend on the starting height, so the statement is True.`,
      `**C.** → True

Mass at height $1.5$ m is the cube law evaluated there, so the coefficient must come from the weighed bell first:

$$A\\cdot(0.5)^{3}=30$$

$$A=\\frac{30}{0.125}=240$$

Cube the new height, then apply the coefficient:

$$1.5^{3}=3.375$$

$$M(1.5)=240\\cdot 3.375=810$$

The mass is $810$ kg, so the statement is True.`,
      `**D.** → False

Tripling height multiplies mass by the cube of $3$, not by $3$:

$$\\frac{M(3h)}{M(h)}=3^{3}=27$$

A bell three times as tall has twenty-seven times the mass, so the statement is False.`,
      `**E.** → True

Halving height multiplies mass by the cube of $\\frac{1}{2}$:

$$\\frac{M(\\frac{h}{2})}{M(h)}=\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}$$

One eighth of the mass remains, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 80,
    solution_overview: `Similar bells obey $M(h)=Ah^{3}$, and the single weighing $M(0.5)=30$ fixes the coefficient.

**Part 1: Building the model.**

Let $h$ = bell height in metres and $M$ = mass in kilograms. Geometric similarity means every casting is the same shape at a different scale, so volume, and with it mass, carries the cube of a length. The exponent therefore arrives with the model rather than with the data, one observed pair pins the coefficient, and after that every question is either a substitution or a scale factor.

**1. Translate: the weighed bell.**

$$A(0.5)^{3}=30 \\quad \\Rightarrow \\quad 0.125A=30$$

**2. Translate: the scaling rule.** A height multiplier $k>0$ acts through the exponent, and the coefficient cancels:

$$\\frac{M(kh)}{M(h)}=\\frac{A(kh)^{3}}{Ah^{3}}=k^{3}$$

**Part 2: The model.**

$$M(h)=240h^{3} \\tag{1}$$

$$M(kh)=k^{3}M(h) \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the weighing:

$$A=\\frac{30}{0.125}=240$$

**2.** Doubling, halving and tripling are read straight off (2):

$$2^{3}=8, \\qquad \\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}, \\qquad 3^{3}=27$$

**3.** Direct substitutions across the pattern range:

$$M(0.25)=3.75, \\qquad M(1)=240, \\qquad M(1.5)=240(3.375)=810$$

**4.** The same figure seen as a scale factor from the calibration point:

$$\\frac{M(1.5)}{M(0.5)}=\\frac{810}{30}=27$$

**5.** Every scaling claim reduces to a cube of the height ratio, which is why a bell three times as tall is twenty-seven times as heavy and a bell half as tall keeps only an eighth of the mass. A length ratio passes through unchanged only when the exponent is one, and no solid body obeys that.

**Answer.** $A=240$ | $M(h)=240h^{3}$ | $M(1.5)=810$ kg | doubling $\\times 8$, tripling $\\times 27$`,
  },
  {
    id: `math-8-81`,
    case_id: `MATH 8.81`,
    title: `Drag and Sustained Power on a Velodrome`,
    context: `Aerodynamic drag on a track cyclist follows $F(v)=A v^{2}$ newtons, where $v>0$ is speed in metres per second. The team log never states $A$: it records only that raising the speed from $8$ to $12$ m/s increased drag by exactly $40$ N. The power needed to overcome that drag is $P=Fv$ watts, and the rider can hold $500$ W for a full pursuit. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The drag law is $F(v)=0.5v^{2}$.`,
      `Absorbed power obeys $P(v)=0.5v^{3}$, and the $500$ W ceiling is reached at exactly $10$ m/s.`,
      `At $12$ m/s the rider absorbs $600$ W.`,
      `Riding $25\\%$ faster raises the absorbed power by $75\\%$.`,
      `Power per metre per second of speed is the same at every speed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The $40$ N log entry is the change in drag between $8$ and $12$ metres per second, so the unknown coefficient multiplies a difference of squares.

$$
F(12)-F(8)=A\\left(12^{2}-8^{2}\\right)
$$

$$
12^{2}-8^{2}=144-64=80
$$

$$
80A=40
$$

$$
A=\\frac{40}{80}=0.5
$$

The drag law is $F(v)=0.5v^{2}$, so the statement is True.`,
      `**B.** → True

Absorbed power is drag times speed, which raises the exponent on speed by one after the drag coefficient is recovered from the log.

The logged rise of $40$ N from $8$ to $12$ metres per second gives

$$
A\\left(12^{2}-8^{2}\\right)=40
$$

$$
80A=40
$$

$$
A=0.5
$$

$$
P(v)=v\\cdot 0.5v^{2}=0.5v^{3}
$$

The $500$ W ceiling inverts that cube:

$$
0.5v^{3}=500
$$

$$
v^{3}=1000
$$

$$
v=10
$$

$$
P(10)=0.5\\cdot 10^{3}=0.5\\cdot 1000=500
$$

Both the cubic law and the ceiling at $10$ metres per second hold, so the statement is True.`,
      `**C.** → False

The claim is a watt reading at $12$ metres per second, so evaluate $P=Fv$ at that speed after the drag coefficient is recovered.

From the $40$ N gap between $8$ and $12$ metres per second,

$$
A(144-64)=40
$$

$$
80A=40
$$

$$
A=0.5
$$

$$
P(v)=0.5v^{3}
$$

$$
P(12)=0.5\\cdot 12^{3}=0.5\\cdot 1728=864
$$

The figure $600$ W is what scaling the $500$ W ceiling by $\\frac{12}{10}=1.2$ would give. The rider absorbs $864$ W, so the statement is False.`,
      `**D.** → False

Riding $25\\%$ faster is the speed multiplier $1.25$, and absorbed power scales as the cube of that multiplier.

$$
\\frac{P(1.25v)}{P(v)}=1.25^{3}
$$

$$
1.25^{2}=1.5625
$$

$$
1.25^{3}=1.5625\\cdot 1.25=1.953125
$$

The relative rise is

$$
(1.953125-1)\\times 100\\%=95.3125\\%
$$

The claimed $75\\%$ is $3\\times 25$, which treats the exponent as a linear rate. Power rises by $95.3125\\%$, so the statement is False.`,
      `**E.** → False

Power per metre per second of speed is the quotient $\\frac{P(v)}{v}$. Because $P=Fv$, that quotient is the drag force itself:

$$
\\frac{P(v)}{v}=F(v)=Av^{2}
$$

The two logged speeds already differ in drag by $40$ N, so the two quotients differ by $40$. They are not the same at every speed, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 81,
    solution_overview: `Drag is $F(v)=Av^{2}$, calibrated by the $40$ N gap between $8$ and $12$ m/s. Absorbed power is $P=Fv$, and the rider's ceiling is $500$ W.

**Part 1: Building the model.**

Let $v$ = speed in metres per second, $F$ = drag in newtons, $P$ = absorbed power in watts. The log supplies a difference rather than a level, so the coefficient comes from subtracting two squares. Power is then the same law with its exponent raised by one, and the ceiling question inverts that cubic.

**1. Translate: the logged increase.**

$$A\\left(12^{2}-8^{2}\\right)=80A=40$$

**2. Translate: power.** Multiplying drag by speed adds $1$ to the exponent:

$$P(v)=v\\cdot Av^{2}=Av^{3}$$

**3. Translate: a speed multiplier.** Drag and power respond through different exponents:

$$\\frac{F(kv)}{F(v)}=k^{2}, \\qquad \\frac{P(kv)}{P(v)}=k^{3}$$

**Part 2: The model.**

$$F(v)=0.5v^{2} \\tag{1}$$

$$P(v)=0.5v^{3} \\tag{2}$$

**Part 3: Solve.**

**1.** The difference of squares turns the log entry into a one-step solve:

$$80A=40 \\quad \\Rightarrow \\quad A=0.5$$

**2.** Invert (2) at the rider's ceiling:

$$0.5v^{3}=500 \\quad \\Rightarrow \\quad v^{3}=1000 \\quad \\Rightarrow \\quad v=10$$

**3.** Exact scale factors, which the linear shortcut only approximates:

$$1.2^{3}=1.728, \\qquad 1.25^{3}=1.953125\\;(+95.3\\%)$$

**4.** Levels on the two curves, and the per-unit-speed figure:

$$P(8)=256, \\qquad P(10)=500, \\qquad P(12)=864, \\qquad \\frac{P(v)}{v}=0.5v^{2}$$

**5.** Carrying a speed multiplier straight across understates the cost of going faster: a fifth more speed asks for nearly three quarters more power, and the last $2$ m/s above the ceiling would add $364$ W to a $500$ W budget.

**Answer.** $A=0.5$ | $F(v)=0.5v^{2}$, $P(v)=0.5v^{3}$ | ceiling at $v=10$ m/s | $P(12)=864$ W`,
  },
  {
    id: `math-8-82`,
    case_id: `MATH 8.82`,
    title: `Signal Attenuation From a Buried Cable Locator`,
    context: `The signal a locator receives from a buried conductor follows $S(x)=A x^{-3}$ millivolts, where $x>0$ is the burial depth in metres. A calibration run over a conductor buried at $2$ metres read $50$ millivolts. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The attenuation law is $S(x)=400x^{-3}$.`,
      `A conductor buried at $4$ metres returns $25$ millivolts.`,
      `Doubling the burial depth cuts the received signal to one third.`,
      `A reading of $3.2$ millivolts corresponds to a burial depth of $10$ metres.`,
      `The received signal is inversely proportional to burial depth.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The calibration $S(2)=50$ millivolts pins the single unknown coefficient in $S(x)=Ax^{-3}$.

$$
A\\cdot 2^{-3}=50
$$

$$
\\frac{A}{8}=50
$$

$$
A=50\\cdot 8=400
$$

The attenuation law is $S(x)=400x^{-3}$, so the statement is True.`,
      `**B.** → False

Four metres is twice the calibration depth, so the inverse-cube law multiplies the $50$ millivolt reading by $2^{-3}$.

$$
\\frac{S(4)}{S(2)}=2^{-3}=\\frac{1}{8}
$$

$$
S(4)=50\\cdot\\frac{1}{8}=6.25
$$

The claimed $25$ millivolts would be half the calibration reading. The locator reads $6.25$ millivolts, so the statement is False.`,
      `**C.** → False

A doubling of depth enters the exponent $-3$, so the surviving fraction is a reciprocal cube and the coefficient cancels.

$$
\\frac{S(2x)}{S(x)}=2^{-3}=\\frac{1}{8}
$$

One third would match exponent $-1$. One eighth of the signal survives, so the statement is False.`,
      `**D.** → False

Recovering a depth from a $3.2$ millivolt reading inverts the calibrated cube. From $S(2)=50$,

$$
A\\cdot 2^{-3}=50
$$

$$
A=50\\cdot 8=400
$$

$$
\\frac{400}{x^{3}}=3.2
$$

$$
x^{3}=\\frac{400}{3.2}=125
$$

$$
x=\\sqrt[3]{125}=5
$$

At the claimed $10$ metres the locator would show $\\frac{400}{1000}=0.4$ millivolts. The reading corresponds to $5$ metres, so the statement is False.`,
      `**E.** → False

Inverse proportionality would mean exponent $-1$, so that the product of depth and signal stayed constant. The model is $S(x)=Ax^{-3}$, with exponent $-3$.

The product $xS(x)=Ax^{-2}$ still falls as depth grows, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 82,
    solution_overview: `Attenuation is $S(x)=Ax^{-3}$ in millivolts, pinned by the calibration reading $S(2)=50$.

**Part 1: Building the model.**

Let $x$ = burial depth in metres and $S$ = received signal in millivolts. The exponent comes from the model, so one observed pair fixes the coefficient; because the exponent is negative, that recovery multiplies rather than divides. Every remaining question is then either a substitution, a scale factor read off the exponent, or an inversion that ends in a cube root.

**1. Translate: the calibration run.**

$$A(2)^{-3}=50 \\quad \\Rightarrow \\quad \\frac{A}{8}=50$$

**2. Translate: the depth scaling.** A depth multiplier $k>0$ acts through the exponent:

$$\\frac{S(kx)}{S(x)}=\\frac{A(kx)^{-3}}{Ax^{-3}}=k^{-3}$$

**Part 2: The model.**

$$S(x)=400x^{-3} \\tag{1}$$

$$S(kx)=k^{-3}S(x) \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the calibration reading:

$$A=50\\times 2^{3}=400$$

**2.** Levels down the depth range:

$$S(2)=50, \\qquad S(4)=6.25, \\qquad S(5)=3.2, \\qquad S(10)=0.4$$

**3.** Inverting (1) recovers a depth from a reading:

$$x^{3}=\\frac{400}{S} \\quad \\Rightarrow \\quad S=3.2 \\;\\Rightarrow\\; x=\\sqrt[3]{125}=5$$

**4.** The doubling factor, and the test that rules out inverse proportionality:

$$2^{-3}=\\frac{1}{8}, \\qquad x\\,S(x)=400x^{-2}$$

**5.** The quantity that stays fixed is $x^{3}S(x)=400$, not $x\\,S(x)$, and that single fact settles the last three claims: doubling the depth keeps an eighth rather than a third, a $3.2$ millivolt trace sits at five metres rather than ten, and the product of depth and signal keeps falling.

**Answer.** $A=400$ | $S(x)=400x^{-3}$ | $S(4)=6.25$ mV | $3.2$ mV at $x=5$ m`,
  },
  {
    id: `math-8-83`,
    case_id: `MATH 8.83`,
    title: `Oxygen Demand and Gill Area in a Hatchery`,
    context: `A hatchery models a fish's oxygen demand as $D(m)=A m^{\\frac{3}{4}}$ millilitres per hour and its gill surface area as $G(m)=B m^{\\frac{2}{3}}$ square centimetres, where $m>0$ is body mass in grams. Neither coefficient is published. The records show that an $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish, and that a $64$ g fish carries $48$ square centimetres of gill. A tank's total demand is the sum of its fish's individual demands. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two laws are $D(m)=5m^{\\frac{3}{4}}$ and $G(m)=3m^{\\frac{2}{3}}$.`,
      `Doubling body mass multiplies oxygen demand by $2^{\\frac{3}{4}}$ and gill area by $2^{\\frac{2}{3}}$, so demand per square centimetre of gill rises by the factor $2^{\\frac{1}{12}}$, about $1.059$.`,
      `A $256$ g fish demands $320$ millilitres per hour.`,
      `Oxygen demand per square centimetre of gill is $\\tfrac{5}{3}m^{\\frac{1}{12}}$, which increases with body mass.`,
      `Sixteen $16$ g fish demand exactly twice as much oxygen per hour as one $256$ g fish of the same total mass.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Both hatchery records are exact powers, so each coefficient is a direct calibration: a demand gap for $A$ and a gill level for $B$.

The $81$ g fish demands $95$ millilitres per hour more than the $16$ g fish:

$$
A\\left(81^{\\frac{3}{4}}-16^{\\frac{3}{4}}\\right)=95
$$

$$
81^{\\frac{3}{4}}=(3^{4})^{\\frac{3}{4}}=3^{3}=27
$$

$$
16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}=2^{3}=8
$$

$$
A(27-8)=95
$$

$$
19A=95
$$

$$
A=5
$$

The $64$ g fish carries $48$ square centimetres of gill:

$$
B\\cdot 64^{\\frac{2}{3}}=48
$$

$$
64^{\\frac{2}{3}}=(4^{3})^{\\frac{2}{3}}=4^{2}=16
$$

$$
16B=48
$$

$$
B=3
$$

The two laws are $D(m)=5m^{\\frac{3}{4}}$ and $G(m)=3m^{\\frac{2}{3}}$, so the statement is True.`,
      `**B.** → True

A doubling of body mass acts through each exponent separately, and demand per unit gill area is the ratio of those two scale factors.

$$
\\frac{D(2m)}{D(m)}=2^{\\frac{3}{4}}
$$

$$
\\frac{G(2m)}{G(m)}=2^{\\frac{2}{3}}
$$

$$
\\frac{2^{\\frac{3}{4}}}{2^{\\frac{2}{3}}}=2^{\\frac{3}{4}-\\frac{2}{3}}
$$

$$
\\frac{3}{4}-\\frac{2}{3}=\\frac{9}{12}-\\frac{8}{12}=\\frac{1}{12}
$$

$$
2^{\\frac{1}{12}}\\approx 1.059
$$

All three factors in the claim match, so the statement is True.`,
      `**C.** → True

A $256$ g demand uses the three-quarter power of an exact fourth power, after the demand coefficient is recovered from the $95$ millilitre gap.

Those two masses are $81=3^{4}$ and $16=2^{4}$, so the three-quarter powers are $27$ and $8$:

$$
A(27-8)=95
$$

$$
A=\\frac{95}{19}=5
$$

$$
256^{\\frac{3}{4}}=(4^{4})^{\\frac{3}{4}}=4^{3}=64
$$

$$
D(256)=5\\cdot 64=320
$$

The demand is $320$ millilitres per hour, so the statement is True.`,
      `**D.** → True

Demand per square centimetre of gill is the quotient of the two power laws, so the exponents subtract.

From $81^{\\frac{3}{4}}=27$ and $16^{\\frac{3}{4}}=8$, the demand gap of $95$ millilitres per hour gives

$$
19A=95
$$

$$
A=5
$$

From $64^{\\frac{2}{3}}=16$, the $48$ square centimetre gill record gives

$$
16B=48
$$

$$
B=3
$$

$$
\\frac{D(m)}{G(m)}=\\frac{5m^{\\frac{3}{4}}}{3m^{\\frac{2}{3}}}
$$

$$
=\\frac{5}{3}m^{\\frac{3}{4}-\\frac{2}{3}}
$$

$$
=\\frac{5}{3}m^{\\frac{1}{12}}
$$

The leftover exponent $\\frac{1}{12}$ is positive, so the quotient increases with body mass. The claimed formula matches and the ratio rises, so the statement is True.`,
      `**E.** → True

Sixteen separate $16$ g fish each contribute their own demand, so the tank total is sixteen copies of $D(16)$, not one evaluation at the pooled mass.

A $16$ g fish is an exact fourth power, and the $95$ millilitre gap between $81$ g and $16$ g recovers the coefficient:

$$
16^{\\frac{3}{4}}=8
$$

$$
A(27-8)=95
$$

$$
19A=95
$$

$$
A=5
$$

$$
D(16)=5\\cdot 8=40
$$

$$
16\\cdot D(16)=16\\cdot 40=640
$$

$$
256^{\\frac{3}{4}}=64
$$

$$
D(256)=5\\cdot 64=320
$$

$$
\\frac{640}{320}=2
$$

The small fish demand exactly twice the single large fish, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 83,
    solution_overview: `Oxygen demand is $D(m)=Am^{\\frac{3}{4}}$ and gill area is $G(m)=Bm^{\\frac{2}{3}}$. The demand coefficient comes from the $95$ mL/h gap between an $81$ g and a $16$ g fish; the gill coefficient comes from the $64$ g record.

**Part 1: Building the model.**

Let $m$ = body mass in grams, $D$ = oxygen demand in millilitres per hour, $G$ = gill area in square centimetres. Both exponents are supplied, so each law needs exactly one record: a difference for the first and a level for the second. Comparing the two laws is then a subtraction of exponents, and tank totals are sums of individual demands, never one application to a pooled mass.

**1. Translate: the demand gap.**

$$A\\left(81^{\\frac{3}{4}}-16^{\\frac{3}{4}}\\right)=95$$

**2. Translate: the gill record.**

$$B\\left(64^{\\frac{2}{3}}\\right)=48$$

**3. Translate: demand per unit gill area.** Dividing subtracts exponents:

$$\\frac{D(m)}{G(m)}=\\frac{A}{B}\\,m^{\\frac{3}{4}-\\frac{2}{3}}=\\frac{A}{B}\\,m^{\\frac{1}{12}}$$

**Part 2: The model.**

$$D(m)=5m^{\\frac{3}{4}} \\tag{1}$$

$$G(m)=3m^{\\frac{2}{3}} \\tag{2}$$

$$\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{1}{12}} \\tag{3}$$

**Part 3: Solve.**

**1.** Exact shape factors make both calibrations one-step solves:

$$81^{\\frac{3}{4}}=27, \\quad 16^{\\frac{3}{4}}=8 \\;\\Rightarrow\\; 19A=95 \\;\\Rightarrow\\; A=5$$

$$64^{\\frac{2}{3}}=16 \\;\\Rightarrow\\; 16B=48 \\;\\Rightarrow\\; B=3$$

**2.** Scale factors for a doubling of mass, and their ratio:

$$2^{\\frac{3}{4}}\\approx 1.6818, \\quad 2^{\\frac{2}{3}}\\approx 1.5874, \\quad \\frac{2^{\\frac{3}{4}}}{2^{\\frac{2}{3}}}=2^{\\frac{1}{12}}\\approx 1.0595$$

**3.** Levels along the demand curve:

$$D(16)=40, \\qquad D(81)=135, \\qquad D(256)=320$$

**4.** A tank total is formed one fish at a time:

$$16\\,D(16)=640=2\\,D(256)$$

**Answer.** $A=5$, $B=3$ | $D(m)=5m^{\\frac{3}{4}}$, $G(m)=3m^{\\frac{2}{3}}$ | demand per unit gill $=\\frac{5}{3}m^{\\frac{1}{12}}$, rising | $D(256)=320$ mL/h`,
  },
  {
    id: `math-8-84`,
    case_id: `MATH 8.84`,
    title: `Micro-Irrigation Flow Under a Fourth-Power Law`,
    context: `Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{4}$ litres per hour, where $r>0$ is the internal tube radius in millimetres. A bench test on a tube of radius $2$ mm delivered $48$ litres per hour. The designers also track the mean velocity index $\\frac{Q}{\\pi r^{2}}$, which spreads the flow across the tube's cross-section. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The flow law is $Q(r)=3r^{4}$.`,
      `A tube of radius $3$ mm delivers $243$ litres per hour.`,
      `Widening the tube radius by $50\\%$ raises the flow by $125\\%$.`,
      `Halving the tube radius leaves one sixteenth of the flow.`,
      `Because flow and cross-section both grow with the radius, the mean velocity index is the same in every tube.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The bench test $Q(2)=48$ litres per hour is a single level, so the coefficient is that reading divided by $2^{4}$.

$$
A\\cdot 2^{4}=48
$$

$$
16A=48
$$

$$
A=\\frac{48}{16}=3
$$

The flow law is $Q(r)=3r^{4}$, so the statement is True.`,
      `**B.** → True

A $3$ mm delivery is the calibrated fourth-power law evaluated at radius $3$. From the bench test $Q(2)=48$,

$$
A\\cdot 16=48
$$

$$
A=\\frac{48}{16}=3
$$

$$
3^{4}=81
$$

$$
Q(3)=3\\cdot 81=243
$$

The tube delivers $243$ litres per hour, so the statement is True.`,
      `**C.** → False

A $50\\%$ wider radius is the multiplier $1.5$, and flow responds through the fourth power of that multiplier.

$$
1+\\frac{50}{100}=1.5
$$

$$
\\frac{Q(1.5r)}{Q(r)}=1.5^{4}
$$

$$
1.5^{2}=2.25
$$

$$
1.5^{4}=2.25^{2}=5.0625
$$

$$
(5.0625-1)\\times 100\\%=406.25\\%
$$

The claimed $125\\%$ is the rise for exponent $2$, where $1.5^{2}=2.25$. Flow rises by $406.25\\%$, so the statement is False.`,
      `**D.** → True

Halving the radius is the multiplier $\\frac{1}{2}$, and an exponent of $4$ turns that into a reciprocal fourth power.

$$
\\frac{Q\\left(\\frac{r}{2}\\right)}{Q(r)}=\\left(\\frac{1}{2}\\right)^{4}=\\frac{1}{16}
$$

The coefficient cancels, so the fraction does not depend on the starting radius. One sixteenth of the flow remains, so the statement is True.`,
      `**E.** → False

The mean velocity index divides flow by cross-section, so the exponents subtract rather than cancel.

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{Ar^{4}}{\\pi r^{2}}
$$

$$
=\\frac{A}{\\pi}r^{2}
$$

The leftover exponent $2$ is not zero, so the index still grows with the radius. Comparing the bench tube with a $3$ mm tube,

$$
\\frac{3^{2}}{2^{2}}=\\frac{9}{4}=2.25
$$

the index is $2.25$ times larger in the wider tube. It is not the same in every tube, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 84,
    solution_overview: `Flow obeys $Q(r)=Ar^{4}$, pinned by the bench test $Q(2)=48$. The mean velocity index is $\\frac{Q}{\\pi r^{2}}$.

**Part 1: Building the model.**

Let $r$ = internal radius in millimetres and $Q$ = flow in litres per hour. The exponent is supplied by the transport model, so one bench test fixes the coefficient. Dividing flow by the cross-section then produces a second power function whose exponent is the difference of the two, and every scaling claim reduces to a fourth power of the radius ratio.

**1. Translate: the bench test.**

$$A(2)^{4}=48 \\quad \\Rightarrow \\quad 16A=48$$

**2. Translate: a radius multiplier.** The coefficient cancels in the ratio:

$$\\frac{Q(kr)}{Q(r)}=\\frac{A(kr)^{4}}{Ar^{4}}=k^{4}$$

**3. Translate: the velocity index.** Dividing subtracts exponents:

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{Ar^{4}}{\\pi r^{2}}=\\frac{A}{\\pi}r^{2}$$

**Part 2: The model.**

$$Q(r)=3r^{4} \\tag{1}$$

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{3r^{2}}{\\pi} \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the bench test:

$$A=\\frac{48}{16}=3$$

**2.** Levels across the tube sizes:

$$Q(1)=3, \\qquad Q(2)=48, \\qquad Q(3)=243$$

**3.** Exact scale factors, all powers of the radius ratio:

$$1.5^{4}=5.0625\\;(+406.25\\%), \\qquad \\left(\\frac{1}{2}\\right)^{4}=\\frac{1}{16}$$

**4.** The velocity index at two radii, showing exponent $2$ rather than $0$:

$$\\frac{12}{\\pi}\\approx 3.82, \\qquad \\frac{27}{\\pi}\\approx 8.59$$

**5.** A fourth power is unforgiving in both directions: half a millimetre of extra bore multiplies delivery by more than five, and a bore halved keeps only a sixteenth of it. The velocity index still rises because flow outpaces cross-section by two full exponents.

**Answer.** $A=3$ | $Q(r)=3r^{4}$ | $Q(3)=243$ L/h | velocity index $=\\frac{3}{\\pi}r^{2}$`,
  },
  {
    id: `math-8-85`,
    case_id: `MATH 8.85`,
    title: `Barrier Distance for a Radiography Source`,
    context: `Dose rate near an industrial radiography source follows the inverse-square law $H(d)=A d^{-2}$ microsieverts per hour, where $d>0$ is the distance from the source in metres. A survey meter three metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The dose-rate law is $H(d)=720d^{-2}$.`,
      `At six metres the dose rate is $20$ microsieverts per hour.`,
      `Doubling the distance from the source quarters the dose rate.`,
      `The barrier belongs twelve metres from the source.`,
      `Moving from three metres to nine metres cuts the dose rate to one third.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The survey $H(3)=80$ microsieverts per hour pins the coefficient in the inverse-square law.

$$
A\\cdot 3^{-2}=80
$$

$$
\\frac{A}{9}=80
$$

$$
A=80\\cdot 9=720
$$

The dose-rate law is $H(d)=720d^{-2}$, so the statement is True.`,
      `**B.** → True

Six metres is twice the survey distance, so the inverse-square law multiplies the $80$ microsievert reading by $2^{-2}$.

$$
\\frac{H(6)}{H(3)}=2^{-2}=\\frac{1}{4}
$$

$$
H(6)=80\\cdot\\frac{1}{4}=20
$$

The meter reads $20$ microsieverts per hour, so the statement is True.`,
      `**C.** → True

Doubling the distance feeds the multiplier $2$ through exponent $-2$.

$$
\\frac{H(2d)}{H(d)}=2^{-2}=\\frac{1}{4}
$$

The dose rate falls to a quarter, so the statement is True.`,
      `**D.** → True

The barrier is the distance where the dose rate has fallen from $80$ to $5$ microsieverts per hour. Inverse square converts that dose ratio into a squared distance ratio.

$$
\\frac{H(d)}{H(3)}=\\frac{5}{80}=\\frac{1}{16}
$$

$$
\\left(\\frac{3}{d}\\right)^{2}=\\frac{1}{16}
$$

$$
\\frac{3}{d}=\\frac{1}{4}
$$

$$
d=12
$$

Only the positive root is a distance. The barrier belongs $12$ metres from the source, so the statement is True.`,
      `**E.** → False

Three metres to nine metres is a tripling, and the inverse-square law turns a factor of $3$ into a reciprocal square.

$$
\\frac{H(9)}{H(3)}=3^{-2}=\\frac{1}{9}
$$

One third would be the inverse-proportional reading. One ninth of the dose rate remains, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 85,
    solution_overview: `Dose rate obeys the inverse-square law $H(d)=Ad^{-2}$, pinned by the survey reading $H(3)=80$. The barrier sits where $H=5$.

**Part 1: Building the model.**

Let $d$ = distance from the source in metres and $H$ = dose rate in microsieverts per hour. The physics fixes the exponent at $-2$, so one survey reading pins the coefficient, and because that exponent is negative the recovery multiplies by a square rather than dividing by one. The barrier question then inverts the same law, which turns it into a square root.

**1. Translate: the survey reading.**

$$A(3)^{-2}=80 \\quad \\Rightarrow \\quad \\frac{A}{9}=80$$

**2. Translate: a distance multiplier.** The coefficient cancels in the ratio:

$$\\frac{H(kd)}{H(d)}=\\frac{A(kd)^{-2}}{Ad^{-2}}=k^{-2}$$

**3. Translate: the barrier rule.**

$$\\frac{A}{d^{2}}=5$$

**Part 2: The model.**

$$H(d)=720d^{-2} \\tag{1}$$

$$H(kd)=k^{-2}H(d) \\tag{2}$$

**Part 3: Solve.**

**1.** A negative exponent recovers the coefficient by multiplying:

$$A=80\\times 3^{2}=720$$

**2.** Levels along the walk-back from the source:

$$H(3)=80, \\qquad H(6)=20, \\qquad H(9)=\\frac{720}{81}\\approx 8.89, \\qquad H(12)=5$$

**3.** Scale factors read straight off (2):

$$2^{-2}=\\frac{1}{4}, \\qquad 3^{-2}=\\frac{1}{9}, \\qquad 4^{-2}=\\frac{1}{16}$$

**4.** Invert (1) at the permitted dose rate:

$$d^{2}=\\frac{720}{5}=144 \\quad \\Rightarrow \\quad d=12$$

**5.** Distance buys safety quickly but not linearly: doubling the standoff removes three quarters of the dose rate, tripling it removes eight ninths, and the barrier sits at four times the survey distance because $\\frac{80}{5}=16$ and $\\sqrt{16}=4$.

**Answer.** $A=720$ | $H(d)=720d^{-2}$ | $H(6)=20$ | barrier at $d=12$ m`,
  },
  {
    id: `math-8-86`,
    case_id: `MATH 8.86`,
    title: `A Dye Plume Spreading Across a Shallow Lake`,
    context: `A tracer dye released into a shallow lake spreads as a disc whose radius follows $r(t)=A t^{\\frac{2}{3}}$ metres, with $t>0$ measured in hours since release. The survey note omits the coefficient: it records only that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The radius law is $r(t)=15t^{\\frac{2}{3}}$ and the stained area is $S(t)=225\\pi t^{\\frac{4}{3}}$.`,
      `Doubling the elapsed time multiplies the stained area by $2^{\\frac{4}{3}}$, about $2.52$.`,
      `The stained area at hour $8$ is eight times its value at hour $1$.`,
      `The radius reaches $240$ metres $32$ hours after release.`,
      `The stained area grows in proportion to the elapsed time.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded $45$ metres is the radius change from hour $1$ to hour $8$, so the unknown coefficient multiplies a difference of two shape factors.

$$
r(8)-r(1)=A\\left(8^{\\frac{2}{3}}-1^{\\frac{2}{3}}\\right)
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
1^{\\frac{2}{3}}=1
$$

$$
A(4-1)=3A
$$

$$
3A=45
$$

$$
A=15
$$

The radius law is therefore $r(t)=15t^{\\frac{2}{3}}$. The stained area squares that radius, which doubles the exponent and squares the coefficient:

$$
S(t)=\\pi\\left(15t^{\\frac{2}{3}}\\right)^{2}
$$

$$
=\\pi\\cdot 225\\cdot t^{\\frac{4}{3}}
$$

$$
=225\\pi\\, t^{\\frac{4}{3}}
$$

Forward check: $r(1)=15$ and $r(8)=60$, which differ by the recorded $45$ metres. Both named laws match, so the statement is True.`,
      `**B.** → True

Doubling the elapsed time reaches the stained area through the composed exponent $\\frac{4}{3}$, and the coefficient cancels in the ratio. The area of the disc is $S=\\pi r^{2}$ with $r(t)=A t^{\\frac{2}{3}}$, so $S(t)=\\pi A^{2} t^{\\frac{4}{3}}$.

$$
\\frac{S(2t)}{S(t)}=\\frac{(2t)^{\\frac{4}{3}}}{t^{\\frac{4}{3}}}
$$

$$
=2^{\\frac{4}{3}}
$$

$$
=2\\cdot 2^{\\frac{1}{3}}
$$

$$
\\approx 2.5198
$$

That is about $2.52$, the factor in the claim. The same multiplier applies from hour $1$ to hour $2$ as from hour $12$ to hour $24$. The stained area is multiplied by $2^{\\frac{4}{3}}$, so the statement is True.`,
      `**C.** → False

Between hour $1$ and hour $8$ the time multiplier is $8$, and area responds through the exponent $\\frac{4}{3}$ rather than through that multiplier itself.

$$
\\frac{S(8)}{S(1)}=8^{\\frac{4}{3}}
$$

$$
=\\left(8^{\\frac{1}{3}}\\right)^{4}
$$

$$
=2^{4}
$$

$$
=16
$$

The claim asserts a factor of $8$, which would hold only for exponent $1$. Sixteen is not eight, so the statement is False.`,
      `**D.** → False

A target radius of $240$ metres is inverted from the two-thirds law, so the coefficient must be recovered first. The $45$-metre rise between hours $1$ and $8$ gives

$$
A\\left(8^{\\frac{2}{3}}-1^{\\frac{2}{3}}\\right)=45
$$

$$
A(4-1)=45
$$

$$
A=15
$$

Set the radius equal to $240$:

$$
15t^{\\frac{2}{3}}=240
$$

$$
t^{\\frac{2}{3}}=16
$$

$$
t=16^{\\frac{3}{2}}
$$

$$
=\\left(\\sqrt{16}\\right)^{3}
$$

$$
=4^{3}
$$

$$
=64
$$

At the claimed hour $32$,

$$
32^{\\frac{2}{3}}\\approx 10.079
$$

$$
r(32)\\approx 15\\cdot 10.079=151.2
$$

which is well short of $240$ metres. The radius reaches $240$ metres at hour $64$, so the statement is False.`,
      `**E.** → False

Proportional growth would require exponent $1$, but the stained area is the square of a two-thirds power, which leaves exponent $\\frac{4}{3}$.

$$
\\frac{S(2t)}{S(t)}=2^{\\frac{4}{3}}
$$

$$
\\approx 2.52
$$

A proportional law would have returned the factor $2$. Dividing area by elapsed time isolates the leftover power

$$
\\frac{S(t)}{t}=\\pi A^{2}\\, t^{\\frac{1}{3}}
$$

which would be constant under proportionality and here still rises with $t$. The stained area is not proportional to elapsed time, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 86,
    solution_overview: `The plume radius is $r(t)=At^{\\frac{2}{3}}$, calibrated by the $45$-metre growth between hour $1$ and hour $8$. The stained area is $S=\\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours since release, $r$ = plume radius in metres, $S$ = stained area in square metres. The survey gives a difference rather than a level, so the coefficient comes from subtracting two shape factors. Composing with the disc formula then doubles the exponent and squares the coefficient, so the area law is steeper than the radius law.

**1. Translate: the recorded growth.**

$$A\\left(8^{\\frac{2}{3}}-1^{\\frac{2}{3}}\\right)=45$$

**2. Translate: the composition.** Squaring the radius law doubles its exponent:

$$S(t)=\\pi\\left(At^{\\frac{2}{3}}\\right)^{2}=\\pi A^{2}t^{\\frac{4}{3}}$$

**3. Translate: a time multiplier.** The two respond through different exponents:

$$\\frac{r(kt)}{r(t)}=k^{\\frac{2}{3}}, \\qquad \\frac{S(kt)}{S(t)}=k^{\\frac{4}{3}}$$

**Part 2: The model.**

$$r(t)=15t^{\\frac{2}{3}} \\tag{1}$$

$$S(t)=225\\pi\\,t^{\\frac{4}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** Exact shape factors make the calibration a one-step solve:

$$8^{\\frac{2}{3}}=4 \\;\\Rightarrow\\; 3A=45 \\;\\Rightarrow\\; A=15$$

**2.** Scale factors for the area, read off the exponent in (2):

$$2^{\\frac{4}{3}}\\approx 2.5198, \\qquad 8^{\\frac{4}{3}}=16$$

**3.** Levels at the two surveyed hours:

$$r(1)=15, \\quad r(8)=60, \\qquad S(1)=225\\pi, \\quad S(8)=3600\\pi$$

**4.** Invert (1) to find when the radius reaches $240$ metres:

$$t^{\\frac{2}{3}}=16 \\quad \\Rightarrow \\quad t=16^{\\frac{3}{2}}=64$$

**5.** The two exponents straddle one: area outruns proportional growth, since $\\frac{4}{3}>1$, while the radius lags it, since $\\frac{2}{3}<1$, so a target radius arrives far later than a linear reading would predict.

**Answer.** $A=15$ | $r(t)=15t^{\\frac{2}{3}}$, $S(t)=225\\pi t^{\\frac{4}{3}}$ | area factor $8^{\\frac{4}{3}}=16$ over the first eight hours | $r=240$ m at $t=64$ h`,
  },
  {
    id: `math-8-87`,
    case_id: `MATH 8.87`,
    title: `A Weir Rating Curve Rewritten in New Units`,
    context: `Discharge over a measuring weir follows $Q(h)=A h^{\\frac{3}{2}}$ cubic metres per second, where $h>0$ is the head in metres. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second. A field team wants the same rating curve rewritten with the head in centimetres, sometimes keeping discharge in cubic metres per second and sometimes reporting it in litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `In the original units the rating curve is $Q(h)=16h^{\\frac{3}{2}}$.`,
      `With the head in centimetres and discharge still in cubic metres per second, the curve becomes $Q=1.6\\,h_{\\mathrm{cm}}^{\\frac{3}{2}}$.`,
      `With the head in centimetres and discharge in litres per second, the coefficient is $16000$.`,
      `Switching the head from metres to centimetres leaves the exponent at $\\frac{3}{2}$ but multiplies the coefficient by $100$.`,
      `A head of one metre discharges $32$ cubic metres per second.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The weir supplies the exponent $\\frac{3}{2}$, so the single gauging at head $0.25$ metres fixes the coefficient.

$$
0.25^{\\frac{3}{2}}=\\left(\\sqrt{0.25}\\right)^{3}
$$

$$
=0.5^{3}
$$

$$
=0.125
$$

$$
A\\cdot 0.125=2
$$

$$
A=\\frac{2}{0.125}
$$

$$
=16
$$

The rating curve in the original units is $Q(h)=16h^{\\frac{3}{2}}$. Substituting the gauged head returns $16\\cdot 0.125=2$ cubic metres per second, so the statement is True.`,
      `**B.** → False

Rewriting the head in centimetres is the substitution $h=\\frac{h_{\\mathrm{cm}}}{100}$, and that factor travels through the exponent $\\frac{3}{2}$. Recover the original coefficient from the gauging $Q(0.25)=2$ first:

$$
0.25^{\\frac{3}{2}}=0.125
$$

$$
A=\\frac{2}{0.125}=16
$$

Then replace the head:

$$
Q=16\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{\\frac{3}{2}}
$$

$$
=\\frac{16}{100^{\\frac{3}{2}}}\\, h_{\\mathrm{cm}}^{\\frac{3}{2}}
$$

$$
100^{\\frac{3}{2}}=\\left(\\sqrt{100}\\right)^{3}
$$

$$
=10^{3}
$$

$$
=1000
$$

$$
Q=0.016\\, h_{\\mathrm{cm}}^{\\frac{3}{2}}
$$

The claimed coefficient $1.6$ is a hundred times too large: it is what appears if $100$ is raised only to the power $\\frac{1}{2}$. At $h_{\\mathrm{cm}}=25$ the true curve still returns $0.016\\cdot 125=2$ cubic metres per second. The coefficient is $0.016$, so the statement is False.`,
      `**C.** → False

Two unit changes act together, so convert the gauged pair into the new units and then fit the coefficient. Head $0.25$ metres is $25$ centimetres, and $2$ cubic metres per second is $2000$ litres per second.

$$
A_{\\mathrm{new}}\\cdot 25^{\\frac{3}{2}}=2000
$$

$$
25^{\\frac{3}{2}}=\\left(\\sqrt{25}\\right)^{3}
$$

$$
=5^{3}
$$

$$
=125
$$

$$
A_{\\mathrm{new}}=\\frac{2000}{125}
$$

$$
=16
$$

The coefficient is $16$, not $16000$. The figure $16000$ is the original $16$ multiplied by $1000$ with the head still measured in metres. The coefficient in centimetres and litres per second is $16$, so the statement is False.`,
      `**D.** → False

Changing the head from metres to centimetres substitutes $h=\\frac{h_{\\mathrm{cm}}}{100}$ and pushes $100$ through the exponent $\\frac{3}{2}$. The exponent itself cannot move.

$$
\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{\\frac{3}{2}}=\\frac{1}{100^{\\frac{3}{2}}}\\, h_{\\mathrm{cm}}^{\\frac{3}{2}}
$$

$$
100^{\\frac{3}{2}}=1000
$$

so the coefficient is divided by $1000$, not multiplied by $100$. A smaller length unit makes every numerical head larger, and the coefficient must shrink to keep the same physical discharge. The coefficient factor is $\\frac{1}{1000}$, so the statement is False.`,
      `**E.** → False

At a head of one metre every power of $1$ is $1$, so the discharge equals the coefficient. Recover that coefficient from the gauging:

$$
A\\cdot 0.25^{\\frac{3}{2}}=2
$$

$$
0.25^{\\frac{3}{2}}=0.125
$$

$$
A=16
$$

$$
Q(1)=16\\cdot 1^{\\frac{3}{2}}=16
$$

The scale-factor route from the gauged head agrees, because $\\frac{1}{0.25}=4$:

$$
4^{\\frac{3}{2}}=\\left(\\sqrt{4}\\right)^{3}
$$

$$
=2^{3}
$$

$$
=8
$$

$$
8\\cdot 2=16
$$

The claimed $32$ is what a squared law would give, since $4^{2}=16$ applied to the gauged $2$ produces $32$. The discharge is $16$ cubic metres per second, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 87,
    solution_overview: `The rating curve is $Q(h)=Ah^{\\frac{3}{2}}$ in metres and cubic metres per second, pinned by the gauging $Q(0.25)=2$. The team wants the same curve in centimetres, and in litres per second.

**Part 1: Building the model.**

Let $h$ = head in metres, $h_{\\mathrm{cm}}=100h$ = head in centimetres, $Q$ = discharge. The exponent belongs to the weir, so one gauging fixes the coefficient. A change of unit replaces the input by a constant multiple of itself, and a power function pushes that constant through its exponent, so the exponent never moves and only the coefficient does. A change of output unit, by contrast, scales the coefficient directly.

**1. Translate: the gauging.**

$$A(0.25)^{\\frac{3}{2}}=2$$

**2. Translate: the change of input unit.**

$$Q=A\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{\\frac{3}{2}}=\\frac{A}{100^{\\frac{3}{2}}}\\,h_{\\mathrm{cm}}^{\\frac{3}{2}}$$

**3. Translate: the change of output unit.** One cubic metre per second is $1000$ litres per second.

**Part 2: The model.**

$$Q=16h^{\\frac{3}{2}} \\quad \\text{(m, cubic \\frac{m}{s})} \\tag{1}$$

$$Q=0.016\\,h_{\\mathrm{cm}}^{\\frac{3}{2}} \\quad \\text{(cm, cubic \\frac{m}{s})} \\tag{2}$$

$$Q=16\\,h_{\\mathrm{cm}}^{\\frac{3}{2}} \\quad \\text{(cm, \\frac{L}{s})} \\tag{3}$$

**Part 3: Solve.**

**1.** The shape factor at the gauged head is exact:

$$0.25^{\\frac{3}{2}}=0.5^{3}=0.125 \\;\\Rightarrow\\; A=\\frac{2}{0.125}=16$$

**2.** The head conversion carries the exponent:

$$100^{\\frac{3}{2}}=1000 \\;\\Rightarrow\\; 16\\longrightarrow\\frac{16}{1000}=0.016$$

**3.** The litre conversion multiplies by $1000$ and cancels that division:

$$1000\\times 0.016=16$$

**4.** One check at the gauged point in each set of units:

$$16(0.25)^{\\frac{3}{2}}=2, \\qquad 0.016(25)^{\\frac{3}{2}}=2, \\qquad 16(25)^{\\frac{3}{2}}=2000$$

**Answer.** $A=16$ | $Q=16h^{\\frac{3}{2}}$ (m, cubic m/s) | $Q=0.016h_{\\mathrm{cm}}^{\\frac{3}{2}}$ (cm, cubic m/s) | $Q=16h_{\\mathrm{cm}}^{\\frac{3}{2}}$ (cm, L/s)`,
  },
  {
    id: `math-8-88`,
    case_id: `MATH 8.88`,
    title: `A Grain Dryer Calibrated From Two Recorded Ratios`,
    context: `Fuel use in a grain dryer follows $F(x)=A x^{r}$ litres per batch, where $x>0$ is the batch mass in tonnes. Neither constant is published. Two figures are on file: doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is $r=2$.`,
      `The fuel law is $F(x)=3x^{2}$.`,
      `A $10$-tonne batch uses $300$ litres.`,
      `Tripling the batch mass multiplies fuel use by $9$.`,
      `Fuel use per tonne is $3x$ litres, so it rises in proportion to batch mass.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

A $300\\%$ rise on doubling is a multiplier of $4$, not of $3$, and that ratio isolates the exponent because $A$ cancels.

$$
\\frac{F(2x)}{F(x)}=2^{r}
$$

$$
=1+\\frac{300}{100}
$$

$$
=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

Reading $300\\%$ as a multiplier of $3$ would leave a non-integer exponent. The exponent is $r=2$, so the statement is True.`,
      `**B.** → True

The fuel law needs both constants. The doubling record is a ratio, so it fixes the exponent first:

$$
2^{r}=1+\\frac{300}{100}
$$

$$
2^{r}=4
$$

$$
r=2
$$

The $96$-litre gap is then a difference of two squares:

$$
A\\left(6^{2}-2^{2}\\right)=96
$$

$$
A(36-4)=96
$$

$$
32A=96
$$

$$
A=3
$$

The law is $F(x)=3x^{2}$. It returns $F(2)=12$ and $F(6)=108$, which differ by $96$ litres, so the statement is True.`,
      `**C.** → True

A $10$-tonne batch is a new point on the curve, so both constants are needed and then the mass is squared. Doubling raises fuel by $300\\%$, hence $2^{r}=4$ and $r=2$. The $96$-litre rise from $2$ tonnes to $6$ tonnes is $A(36-4)=96$, so $A=3$.

$$
F(10)=3\\cdot 10^{2}
$$

$$
=3\\cdot 100
$$

$$
=300
$$

The batch uses $300$ litres, so the statement is True.`,
      `**D.** → True

Tripling the batch mass acts through the exponent, read from the doubling record. A $300\\%$ rise means multiplier $4$:

$$
2^{r}=4
$$

$$
r=2
$$

A mass triple then contributes only $3^{r}$:

$$
\\frac{F(3x)}{F(x)}=3^{2}
$$

$$
=9
$$

The coefficient cancels. A law of exponent $1$ would have returned $3$. Fuel use is multiplied by $9$, so the statement is True.`,
      `**E.** → True

Fuel per tonne divides the law by the mass, which lowers the exponent by $1$. From $2^{r}=4$ the exponent is $2$, and from $A(36-4)=96$ the coefficient is $3$, so

$$
\\frac{F(x)}{x}=\\frac{3x^{2}}{x}
$$

$$
=3x
$$

An exponent of $1$ on that per-tonne figure is exactly proportionality: tripling the mass triples litres per tonne as well. At the logged batches the values are $6$ and $18$, in the same ratio as $2$ and $6$ tonnes. The per-tonne figure is $3x$ and rises in proportion to batch mass, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 88,
    solution_overview: `Fuel use is $F(x)=Ax^{r}$. The doubling rule fixes the exponent, and the $96$-litre gap between $2$ and $6$ tonnes fixes the coefficient.

**Part 1: Building the model.**

Let $x$ = batch mass in tonnes and $F$ = fuel use in litres. Two unknowns need two records, and the order in which they are used matters. The first is a ratio, which is blind to the coefficient and therefore isolates the exponent; the second is a difference of levels, which pins the coefficient once the exponent is known.

**1. Translate: the doubling rule.** A $300\\%$ rise is a multiplier of $4$:

$$\\frac{F(2x)}{F(x)}=2^{r}=4$$

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

**3.** Levels along the curve:

$$F(2)=12, \\qquad F(6)=108, \\qquad F(10)=300$$

**4.** Scale factors and the per-tonne figure:

$$\\frac{F(3x)}{F(x)}=3^{2}=9, \\qquad \\frac{F(x)}{x}=3x$$

**5.** Every claim here follows from the single exponent $2$: mass multipliers arrive squared, so doubling costs four times the fuel and tripling nine times, while the per-tonne figure keeps one leftover power of the mass and therefore climbs proportionally.

**Answer.** $r=2$, $A=3$ | $F(x)=3x^{2}$ | $F(10)=300$ litres | fuel per tonne $=3x$`,
  },
  {
    id: `math-8-89`,
    case_id: `MATH 8.89`,
    title: `Kiln Flue Mass Flow into a Particulate Index`,
    context: `A kiln's flue-gas mass flow follows $m(t)=A t^{\\frac{1}{2}}$ tonnes per hour for throttle setting $t>0$, and the particulate load index is then $P(m)=\\frac{m^{4}}{16}$. A calibration at $t=9$ recorded $m=6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The intermediate law is $m(t)=2t^{\\frac{1}{2}}$.`,
      `The composed map is $P(m(t))=t^{2}$.`,
      `Doubling the throttle setting doubles the composed particulate index.`,
      `At $t=25$ the intermediate mass flow is $50$ tonnes per hour.`,
      `Inverting the composed law, an index of $81$ requires throttle setting $t=27$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The square-root shape is given, so the calibration pair $t=9$, $m=6$ pins the coefficient.

$$
m(9)=A\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
3A=6
$$

$$
A=2
$$

The intermediate law is $m(t)=2t^{\\frac{1}{2}}$. It reproduces the record: $2\\cdot 3=6$. Treating the recorded $6$ as the coefficient itself would ignore the factor $3$ and predict $m(9)=18$. The recovered law is the one named, so the statement is True.`,
      `**B.** → True

The composed map feeds the calibrated inner law into $P(m)=\\frac{m^{4}}{16}$. Recover the inner coefficient from $m(9)=6$:

$$
A\\cdot 9^{\\frac{1}{2}}=6
$$

$$
3A=6
$$

$$
A=2
$$

so $m(t)=2t^{\\frac{1}{2}}$. Raise that to the fourth power, which multiplies the exponents:

$$
\\left(2t^{\\frac{1}{2}}\\right)^{4}=2^{4}\\, t^{(\\frac{1}{2})\\cdot 4}
$$

$$
=16t^{2}
$$

Divide by the $16$ in the outer rule:

$$
P(m(t))=\\frac{16t^{2}}{16}
$$

$$
=t^{2}
$$

At the calibration setting, $m(9)=6$ and

$$
6^{4}=1296
$$

$$
P(6)=\\frac{1296}{16}=81
$$

$$
9^{2}=81
$$

matching the square. The composed map is $t^{2}$, so the statement is True.`,
      `**C.** → False

Doubling the throttle is an input multiplier of $2$, and it reaches the index through the composed exponent, not through the inner square root. Substituting $m(t)=A t^{\\frac{1}{2}}$ into the outer rule gives

$$
P(m(t))=\\frac{\\left(A t^{\\frac{1}{2}}\\right)^{4}}{16}
$$

$$
=\\frac{A^{4}}{16}\\, t^{2}
$$

The prefactor cancels in a ratio:

$$
\\frac{P(m(2t))}{P(m(t))}=\\frac{(2t)^{2}}{t^{2}}
$$

$$
=2^{2}
$$

$$
=4
$$

A doubling of the index would require composed exponent $1$. Doubling the throttle multiplies the index by $4$, so the statement is False.`,
      `**D.** → False

The intermediate reading at $t=25$ uses the calibrated square-root law, not a proportional scale of the recorded pair. From $m(9)=6$:

$$
A\\cdot 9^{\\frac{1}{2}}=6
$$

$$
A\\cdot 3=6
$$

$$
A=2
$$

$$
m(25)=2\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
m(25)=10
$$

The scaling rule agrees, because the setting ratio is $\\frac{25}{9}$ and the exponent is $\\frac{1}{2}$:

$$
\\left(\\frac{25}{9}\\right)^{\\frac{1}{2}}=\\frac{5}{3}
$$

$$
6\\cdot\\frac{5}{3}=10
$$

The claimed $50$ is what $A=2$ would give if the exponent were $1$. The mass flow is $10$ tonnes per hour, so the statement is False.`,
      `**E.** → False

An index of $81$ is inverted by undoing the two stages in reverse. The outer rule $P=\\frac{m^{4}}{16}$ gives

$$
\\frac{m^{4}}{16}=81
$$

$$
m^{4}=1296
$$

$$
m=6
$$

because mass flow is positive. The inner law still needs its coefficient, recovered from $m(9)=6$:

$$
A\\cdot 9^{\\frac{1}{2}}=6
$$

$$
A=2
$$

Now invert $2t^{\\frac{1}{2}}=6$:

$$
t^{\\frac{1}{2}}=3
$$

$$
t=9
$$

The quoted $27$ treats $81$ as if an exponent were a number to divide by. Running the chain forward from $t=9$ returns $m=6$ and $P=81$ again. The required throttle setting is $9$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 89,
    solution_overview: `Flue mass flow is $m(t)=At^{\\frac{1}{2}}$ tonnes per hour with the calibration $m(9)=6$, and the particulate index is $P(m)=\\frac{m^{4}}{16}$.

**Part 1: Building the model.**

Let $t$ = throttle setting, $m$ = mass flow in tonnes per hour, $P$ = particulate load index. The square-root shape is supplied, so one recorded pair fixes the coefficient. Composition then feeds the intermediate output into the second rule, and raising a power to a power multiplies the two exponents.

**1. Translate: the calibration.**

$$A\\cdot 9^{\\frac{1}{2}}=6, \\qquad 9^{\\frac{1}{2}}=3$$

**2. Translate: the chain.** Substituting the inner rule into the outer one carries the inner coefficient up to the outer exponent:

$$P(m(t))=\\frac{\\left(At^{\\frac{1}{2}}\\right)^{4}}{16}=\\frac{A^{4}}{16}\\,t^{2}$$

**Part 2: The model.**

$$m(t)=2\\,t^{\\frac{1}{2}} \\tag{1}$$

$$P(m(t))=t^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The calibration gives the coefficient:

$$3A=6 \\quad \\Rightarrow \\quad A=2$$

**2.** The composed coefficient collapses, since $\\frac{2^{4}}{16}=1$, leaving the pure square in $(2)$.

**3.** Scale factors run through the composed exponent, never through the inner one:

$$\\frac{P(m(2t))}{P(m(t))}=2^{2}=4$$

**4.** Intermediate levels at the settings the statements use:

$$m(9)=6, \\qquad m(25)=10$$

**5.** Inverting $(2)$ turns a target index into a throttle setting by a square root:

$$t^{2}=81 \\quad \\Rightarrow \\quad t=9$$

The chain compresses a half and a fourth power into a clean square, so the index reacts far more sharply to the throttle than the mass flow does.

**Answer.** $A=2$ | $m(t)=2\\sqrt{t}$ | $P\\circ m=t^{2}$ | index $81$ at $t=9$`,
  },
  {
    id: `math-8-90`,
    case_id: `MATH 8.90`,
    title: `Two Shuttle Fare Timers Under a Wait Cap`,
    context: `Two municipal shuttle apps quote wait time for a trip of distance $d>0$ kilometres. App L uses $L(d)=4d^{\\frac{1}{2}}$ minutes and App Q uses $Q(d)=0.2d$ minutes. A service-level agreement caps wait at $20$ minutes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two apps quote the same wait at $d=400$.`,
      `Under the $20$-minute cap, App L can serve at most $d=25$.`,
      `Under the same cap, App Q can serve at most $d=100$.`,
      `For every $d>400$, App L is strictly faster than App Q.`,
      `Doubling distance doubles App L's quoted wait.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The two apps quote the same wait where the rules are equal.

$$
4d^{\\frac{1}{2}}=0.2d
$$

On $d>0$ we may divide by $d^{\\frac{1}{2}}$:

$$
4=0.2\\, d^{\\frac{1}{2}}
$$

$$
d^{\\frac{1}{2}}=\\frac{4}{0.2}
$$

$$
=20
$$

$$
d=400
$$

Checking both quotes:

$$
L(400)=4\\cdot 20=80
$$

$$
Q(400)=0.2\\cdot 400=80
$$

Both apps promise $80$ minutes at $d=400$, so the statement is True.`,
      `**B.** → True

App L's quote increases with distance, so a $20$-minute cap becomes a cap on $d$.

$$
4d^{\\frac{1}{2}}\\le 20
$$

$$
d^{\\frac{1}{2}}\\le 5
$$

$$
d\\le 25
$$

The endpoint is attained:

$$
L(25)=4\\cdot 5=20
$$

A longer trip already breaks the promise, for instance $L(36)=24$. App L can serve at most $25$ kilometres, so the statement is True.`,
      `**C.** → True

App Q is linear, so the same $20$-minute cap inverts by a division.

$$
0.2d\\le 20
$$

$$
d\\le\\frac{20}{0.2}
$$

$$
=100
$$

The endpoint is attained: $Q(100)=20$ minutes. App Q can serve at most $100$ kilometres, so the statement is True.`,
      `**D.** → True

App L is strictly faster when its quote sits below App Q's. Their ratio is itself a power:

$$
\\frac{L(d)}{Q(d)}=\\frac{4d^{\\frac{1}{2}}}{0.2d}
$$

$$
=20\\, d^{-\\frac{1}{2}}
$$

$$
=\\frac{20}{\\sqrt{d}}
$$

The ratio is less than $1$ precisely when

$$
\\frac{20}{\\sqrt{d}}<1
$$

$$
\\sqrt{d}>20
$$

$$
d>400
$$

At $d=400$ the quotes tie at $80$ minutes. Past that point a check at $d=900$ gives $L(900)=120$ against $Q(900)=180$. The inequality holds for every $d>400$, so the statement is True.`,
      `**E.** → False

Doubling distance is an input multiplier of $2$, and App L responds through exponent $\\frac{1}{2}$.

$$
\\frac{L(2d)}{L(d)}=2^{\\frac{1}{2}}
$$

$$
\\approx 1.414
$$

The wait grows by about $41\\%$, not by $100\\%$. Exact doubling is the signature of exponent $1$, which belongs to App Q, not App L. From $d=400$ to $d=800$,

$$
L(400)=80
$$

$$
L(800)=4\\cdot 800^{\\frac{1}{2}}
$$

$$
\\approx 113.14
$$

A doubling would have required $160$ minutes. The claim attaches App Q's scaling to App L, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 90,
    solution_overview: `App L quotes $L(d)=4d^{\\frac{1}{2}}$ minutes, App Q quotes $Q(d)=0.2d$ minutes, and the agreement caps wait at $20$ minutes.

**Part 1: Building the model.**

Let $d$ = trip distance in kilometres, $L$ and $Q$ = quoted waits in minutes. Both quotes are power functions of distance, one with exponent $\\frac{1}{2}$ and one with exponent $1$. The larger exponent must win eventually, so the two quotes cross exactly once on $d>0$, and each quote inverts separately against the shared cap.

**1. Translate: the crossover.**

$$4d^{\\frac{1}{2}}=0.2d$$

**2. Translate: the cap.** Both timers increase, so a ceiling on wait becomes a ceiling on distance:

$$4d^{\\frac{1}{2}}\\le 20, \\qquad 0.2d\\le 20$$

**Part 2: The model.**

$$\\frac{L(d)}{Q(d)}=\\frac{4d^{\\frac{1}{2}}}{0.2d}=20\\,d^{\\frac{-1}{2}} \\tag{1}$$

$$\\frac{L(kd)}{L(d)}=k^{\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Setting $(1)$ equal to $1$ locates the tie:

$$d^{\\frac{1}{2}}=20 \\quad \\Rightarrow \\quad d=400$$

**2.** Quotes at the crossover:

$$L(400)=80, \\qquad Q(400)=80$$

**3.** Inverting each timer against the cap:

$$d\\le 25 \\text{ for App L}, \\qquad d\\le 100 \\text{ for App Q}$$

**4.** The ranking past the tie, again from $(1)$:

$$20\\,d^{\\frac{-1}{2}}<1 \\quad \\Longleftrightarrow \\quad d>400$$

**5.** Distance multipliers act through each exponent separately, so $(2)$ gives $2^{\\frac{1}{2}}\\approx 1.4142$ for App L while App Q's quote simply doubles. App L is the slower quote on short trips, which is why the cap binds it sooner, and the faster quote beyond $400$ kilometres.

**Answer.** crossover at $d=400$ | App L cap $d\\le 25$ | App Q cap $d\\le 100$ | App L faster for $d>400$`,
  },
  {
    id: `math-8-91`,
    case_id: `MATH 8.91`,
    title: `Wetland Evaporation Across Three Humidity Readings`,
    context: `A field team records wetland evaporation $E$ millimetres per day against humidity deficit $h>0$. Three readings are $(h,E)=(1,20)$, $(4,40)$ and $(9,60)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `All three observations fit the single power law $E(h)=20h^{\\frac{1}{2}}$.`,
      `The exponent recovered from the first two readings alone is $1$.`,
      `A linear model through the first two readings also hits the third.`,
      `Doubling the humidity deficit from any of the three readings doubles evaporation.`,
      `With exponent forced to $1$, the coefficient recovered from $(9,60)$ alone is $20$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Each recorded pair must match the named rule $E(h)=20h^{\\frac{1}{2}}$ under direct substitution.

$$E(1)=20\\cdot 1^{\\frac{1}{2}}=20\\cdot 1=20$$

$$E(4)=20\\cdot 4^{\\frac{1}{2}}=20\\cdot 2=40$$

$$E(9)=20\\cdot 9^{\\frac{1}{2}}=20\\cdot 3=60$$

All three field readings agree with the square-root law, so the statement is True.`,
      `**B.** → False

The first two readings isolate the exponent, because the unknown coefficient cancels in the ratio.

$$\\frac{E(4)}{E(1)}=\\left(\\frac{4}{1}\\right)^{r}$$

$$4^{r}=\\frac{40}{20}=2$$

$$r=\\frac{1}{2}$$

The claim says that exponent is $1$. An exponent of $1$ would require

$$4^{1}=4$$

but the evaporation ratio is $2$, not $4$. The recovered exponent is $\\frac{1}{2}$, so the statement is False.`,
      `**C.** → False

A straight line through the first two readings is unique. Its slope is the rise over the run.

$$\\frac{40-20}{4-1}=\\frac{20}{3}$$

Anchoring at $(1,20)$ gives

$$L(h)=20+\\frac{20}{3}(h-1)$$

At the third humidity deficit:

$$\\frac{20}{3}\\cdot 8=\\frac{160}{3}$$

$$L(9)=20+\\frac{160}{3}=\\frac{220}{3}$$

$$\\frac{220}{3}\\approx 73.33$$

The recorded evaporation is $60$, which is not $\\frac{220}{3}$. The line misses the third reading, so the statement is False.`,
      `**D.** → False

Under a power law, doubling the humidity deficit multiplies evaporation by $2^{r}$, not by $2$ unless $r=1$.

$$\\frac{E(2h)}{E(h)}=2^{r}$$

The first two readings fix that exponent:

$$\\frac{40}{20}=4^{r}$$

$$4^{r}=2$$

$$r=\\frac{1}{2}$$

The doubling multiplier is therefore

$$2^{\\frac{1}{2}}\\approx 1.414$$

The claim needs a multiplier of $2$. Because $1.414\\neq 2$, doubling the deficit does not double evaporation, so the statement is False.`,
      `**E.** → False

Forcing the exponent to $1$ makes the model $E(h)=Ah$. The third reading alone then fixes the coefficient.

$$A\\cdot 9=60$$

$$A=\\frac{60}{9}=\\frac{20}{3}$$

The claimed coefficient is $20$. That is not $\\frac{20}{3}$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 91,
    solution_overview: `Three wetland readings are $(h,E)=(1,20)$, $(4,40)$ and $(9,60)$, and the question is whether one power law $E(h)=Ah^{r}$ carries all three.

**Part 1: Building the model.**

Let $h$ = humidity deficit, $E$ = evaporation in millimetres per day. A power law has two unknowns, so two readings determine it and the third becomes a test. Ratios are the efficient route, because dividing one reading by another cancels the coefficient and leaves the exponent alone.

**1. Translate: the ratio of the first two readings.**

$$\\frac{A\\cdot 4^{r}}{A\\cdot 1^{r}}=\\frac{40}{20} \\quad \\Rightarrow \\quad 4^{r}=2$$

**2. Translate: the coefficient.** With the exponent known, the first reading fixes $A$:

$$A\\cdot 1^{\\frac{1}{2}}=20$$

**Part 2: The model.**

$$E(h)=20\\,h^{\\frac{1}{2}} \\tag{1}$$

$$\\frac{E(kh)}{E(h)}=k^{\\frac{1}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Exponent and coefficient from the first two readings:

$$r=\\tfrac12, \\qquad A=20$$

**2.** The third reading is the test, and $(1)$ passes it:

$$E(9)=20\\cdot 3=60$$

**3.** A line through the first two readings has slope $\\frac{20}{3}$ and misses the third:

$$20+\\frac{20}{3}\\cdot 8=\\frac{220}{3}\\approx 73.33$$

**4.** Doubling the deficit uses $(2)$ with $k=2$:

$$2^{\\frac{1}{2}}\\approx 1.4142$$

**5.** Forcing the exponent to $1$ at the last reading alone gives $A=\\frac{60}{9}=\\frac{20}{3}$, a rival law that misses both earlier points. The data themselves show why: the deficit rises ninefold from $1$ to $9$ while evaporation only triples, and a ninefold input against a threefold output is exactly what an exponent of $\\frac{1}{2}$ predicts.

**Answer.** $E(h)=20\\sqrt{h}$ fits all three | exponent $\\frac{1}{2}$ with coefficient $20$ | the line gives $\\frac{220}{3}$ at $h=9$`,
  },
  {
    id: `math-8-92`,
    case_id: `MATH 8.92`,
    title: `Shade-Tree Cooling Benefit Against Upkeep Cost`,
    context: `A city parks office models annual cooling benefit by $B(n)=12n^{\\frac{1}{2}}$ thousand euros and annual upkeep by $C(n)=2n$ thousand euros, where $n>0$ is the number of thousand trees planted. Net benefit is $N(n)=B(n)-C(n)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $n=9$, net benefit is $18$ thousand euros.`,
      `At $n=4$, net benefit is $16$ thousand euros.`,
      `At $n=1$, net benefit is $10$ thousand euros.`,
      `At $n=36$, net benefit is $0$.`,
      `Net benefit is positive at each of $n=1$, $n=4$ and $n=9$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Net benefit at $n=9$ is cooling benefit minus upkeep. First take $9^{\\frac{1}{2}}=3$.

$$B(9)=12\\cdot 3=36$$

$$C(9)=2\\cdot 9=18$$

$$N(9)=36-18=18$$

The net is $18$ thousand euros, so the statement is True.`,
      `**B.** → True

At $n=4$ the square root is $2$, so the two schedules are

$$B(4)=12\\cdot 2=24$$

$$C(4)=2\\cdot 4=8$$

$$N(4)=24-8=16$$

Net benefit is $16$ thousand euros, so the statement is True.`,
      `**C.** → True

At $n=1$ both powers equal $1$.

$$B(1)=12\\cdot 1=12$$

$$C(1)=2\\cdot 1=2$$

$$N(1)=12-2=10$$

Net benefit is $10$ thousand euros, so the statement is True.`,
      `**D.** → True

A net of zero at $n=36$ means the two schedules meet. Use $36^{\\frac{1}{2}}=6$.

$$B(36)=12\\cdot 6=72$$

$$C(36)=2\\cdot 36=72$$

$$N(36)=72-72=0$$

Net benefit is exactly $0$, so the statement is True.`,
      `**E.** → True

The claim asks whether each of the three listed plantings has a strictly positive net.

$$N(1)=12-2=10$$

$$N(4)=24-8=16$$

$$N(9)=36-18=18$$

$$10>0,\\qquad 16>0,\\qquad 18>0$$

All three nets are positive, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 92,
    solution_overview: `Cooling benefit is $B(n)=12n^{\\frac{1}{2}}$ thousand euros, upkeep is $C(n)=2n$ thousand euros, and net benefit is $N(n)=B(n)-C(n)$.

**Part 1: Building the model.**

Let $n$ = thousands of trees planted, $B$ = annual cooling benefit, $C$ = annual upkeep, $N=B-C$ = net benefit, each in thousand euros. Benefit is a power with exponent $\\frac{1}{2}$ and upkeep is a power with exponent $1$, so benefit leads at small plantings while upkeep must overtake it eventually.

**1. Translate: the net.**

$$N(n)=12n^{\\frac{1}{2}}-2n$$

**2. Translate: the crossing.** Dividing by the positive quantity $2n^{\\frac{1}{2}}$ reduces the comparison to one square root:

$$\\frac{B(n)}{C(n)}=\\frac{6}{n^{\\frac{1}{2}}}$$

**Part 2: The model.**

$$N(n)=12\\sqrt{n}-2n \\tag{1}$$

$$B(n)\\ge C(n) \\quad \\Longleftrightarrow \\quad n\\le 36 \\tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the plantings the statements use:

$$1^{\\frac{1}{2}}=1, \\qquad 4^{\\frac{1}{2}}=2, \\qquad 9^{\\frac{1}{2}}=3, \\qquad 36^{\\frac{1}{2}}=6$$

**2.** Benefits at those plantings:

$$12, \\qquad 24, \\qquad 36, \\qquad 72$$

**3.** Upkeep at the same plantings:

$$2, \\qquad 8, \\qquad 18, \\qquad 72$$

**4.** Netting the two schedules line by line:

$$N(1)=10, \\qquad N(4)=16, \\qquad N(9)=18, \\qquad N(36)=0$$

**5.** Every net in the trio is strictly positive, and the net first reaches zero at the break-even planting of thirty-six thousand trees given by $(2)$. Past that point upkeep runs ahead, because its exponent is the larger of the two.

**Answer.** $N(1)=10$ | $N(4)=16$ | $N(9)=18$ | break-even at $N(36)=0$`,
  },
  {
    id: `math-8-93`,
    case_id: `MATH 8.93`,
    title: `Trail-Map Kiosk Demand Inverted from Price`,
    context: `Weekly pamphlet demand at a trail-map kiosk follows $q(p)=A p^{-2}$ packs per week, where $p>0$ is price in euros. At $p=5$ euros the kiosk sold $80$ packs. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The demand law is $q(p)=2000p^{-2}$ packs per week.`,
      `At $p=10$ euros, demand is $20$ packs per week.`,
      `A target of $125$ packs per week requires price $p=4$ euros.`,
      `Doubling the price halves demand.`,
      `Weekly revenue $R(p)=p\\,q(p)$ is the same at every price.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The exponent $-2$ is already given, so the recorded pair $q(5)=80$ pins the coefficient.

$$5^{-2}=\\frac{1}{25}$$

$$A\\cdot\\frac{1}{25}=80$$

$$A=80\\cdot 25=2000$$

The calibrated law is $q(p)=2000p^{-2}$, which is the claimed rule, so the statement is True.`,
      `**B.** → True

The new price is twice the recorded price, so demand scales by $2^{-2}$.

$$\\frac{q(10)}{q(5)}=2^{-2}=\\frac{1}{4}$$

$$q(10)=80\\cdot\\frac{1}{4}=20$$

Demand is $20$ packs per week, so the statement is True.`,
      `**C.** → True

A quantity target is inverted by first recovering the coefficient, then solving for price.

$$A\\cdot 5^{-2}=80$$

$$A=80\\cdot 25=2000$$

The target $q=125$ then reads

$$\\frac{2000}{p^{2}}=125$$

$$p^{2}=\\frac{2000}{125}=16$$

$$p=4$$

Only the positive root is a price. Forward substitution returns the target:

$$q(4)=\\frac{2000}{4^{2}}=\\frac{2000}{16}=125$$

The required price is $4$ euros, so the statement is True.`,
      `**D.** → False

Demand carries exponent $-2$, so a price doubling multiplies quantity by $2^{-2}$ rather than by $\\frac{1}{2}$.

$$\\frac{q(2p)}{q(p)}=2^{-2}=\\frac{1}{4}$$

A halving would require exponent $-1$. The recorded pair makes the same point: $q(5)=80$ would become $40$ if demand halved, but

$$q(10)=80\\cdot\\frac{1}{4}=20$$

Demand falls to a quarter, not to a half, so the statement is False.`,
      `**E.** → False

Weekly revenue multiplies price by quantity, which raises the demand exponent by one.

$$R(p)=p\\cdot A p^{-2}=A p^{-1}$$

A schedule that is the same at every price would need exponent $0$. The actual multiplier for a price factor $k$ is $k^{-1}$:

$$\\frac{R(kp)}{R(p)}=k^{-1}$$

Doubling the price therefore halves revenue. Revenue varies with price, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 93,
    solution_overview: `Pamphlet demand is $q(p)=Ap^{-2}$ packs per week with the recorded pair $q(5)=80$, and weekly revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros, $q$ = packs sold per week, $R$ = weekly revenue in euros. The inverse-square exponent is supplied by the model, so one priced observation fixes the coefficient. Revenue then follows by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A\\cdot 5^{-2}=80, \\qquad 5^{-2}=\\frac{1}{25}$$

**2. Translate: inverting a target.** A demand target becomes a price through the reciprocal exponent:

$$Ap^{-2}=q \\quad \\Longleftrightarrow \\quad p=\\left(\\frac{A}{q}\\right)^{\\frac{1}{2}}$$

**Part 2: The model.**

$$q(p)=2000\\,p^{-2} \\tag{1}$$

$$R(p)=p\\cdot 2000p^{-2}=2000\\,p^{-1} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=80\\times 25=2000$$

**2.** Demand at the prices the statements use:

$$q(5)=80, \\qquad q(10)=20, \\qquad q(4)=125$$

**3.** The inversion of a target of $125$ packs, from $(1)$:

$$p^{2}=\\frac{2000}{125}=16 \\quad \\Rightarrow \\quad p=4$$

**4.** The multiplier from a doubling of price:

$$\\frac{q(2p)}{q(p)}=2^{-2}=\\frac14$$

**5.** Revenue in $(2)$ falls as price rises, since $R(5)=400$ and $R(10)=200$, so it is not the same at every price. The exponents tell the whole story: demand carries $-2$, revenue carries $-1$, and only an exponent of $0$ would give a flat schedule.

**Answer.** $A=2000$ | $q(10)=20$ | target of $125$ packs at $p=4$ | $R(p)=\\frac{2000}{p}$`,
  },
  {
    id: `math-8-94`,
    case_id: `MATH 8.94`,
    title: `Bike-Share Passes Under a Subsidy Price Index`,
    context: `Weekly bike-share day-pass sales follow $q(p)=A p^{\\frac{-3}{2}}$ when the pass price is $p>0$ euros. A pilot at $p=16$ sold $50$ passes. Policy indexes the pass by $p(s)=4s^{\\frac{2}{3}}$ for a positive subsidy index $s$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The demand law is $q(p)=3200p^{\\frac{-3}{2}}$.`,
      `Under the policy map, composed demand simplifies to $\\frac{400}{s}$.`,
      `Tripling the subsidy index triples composed demand.`,
      `At $s=8$, composed demand is $100$ passes.`,
      `Doubling the posted pass price halves demand.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The exponent is supplied, so the pilot sale $q(16)=50$ pins the coefficient. Evaluate the power by taking the square root first.

$$16^{\\frac{1}{2}}=4$$

$$16^{\\frac{3}{2}}=4^{3}=64$$

$$16^{\\frac{-3}{2}}=\\frac{1}{64}$$

$$A\\cdot\\frac{1}{64}=50$$

$$A=50\\cdot 64=3200$$

The demand law is $q(p)=3200p^{\\frac{-3}{2}}$, so the statement is True.`,
      `**B.** → True

Composed demand substitutes the policy price into the calibrated demand rule. The pilot record $q(16)=50$ recovers the coefficient after evaluating $16^{\\frac{3}{2}}$.

$$A=50\\cdot 16^{\\frac{3}{2}}$$

$$16^{\\frac{3}{2}}=\\left(\\sqrt{16}\\right)^{3}$$

$$=4^{3}=64$$

$$A=50\\cdot 64=3200$$

Now substitute $p(s)=4s^{\\frac{2}{3}}$:

$$q(p(s))=3200\\left(4s^{\\frac{2}{3}}\\right)^{\\frac{-3}{2}}$$

A power of a product splits, and a power of a power multiplies the exponents:

$$3200\\cdot 4^{\\frac{-3}{2}}\\cdot s^{\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)}$$

$$4^{\\frac{-3}{2}}=\\left(2^{2}\\right)^{\\frac{-3}{2}}$$

$$=2^{-3}=\\frac{1}{8}$$

$$\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)=-1$$

$$q(p(s))=3200\\cdot\\frac{1}{8}\\cdot s^{-1}$$

$$=\\frac{400}{s}$$

The composed demand is $\\frac{400}{s}$, so the statement is True.`,
      `**C.** → False

Tripling the subsidy index acts through the composed exponent, which is the product of the two given exponents.

$$\\left(\\frac{2}{3}\\right)\\cdot\\left(-\\frac{3}{2}\\right)=-1$$

Composed demand therefore behaves as $s^{-1}$. An input multiplier of $k=3$ produces

$$\\frac{q(p(3s))}{q(p(s))}=3^{-1}=\\frac{1}{3}$$

Tripling demand would require a composed exponent of $+1$. The output is divided by $3$, so the statement is False.`,
      `**D.** → False

The policy map first converts $s=8$ into a pass price. The cube root of $8$ is $2$, so

$$8^{\\frac{2}{3}}=\\left(8^{\\frac{1}{3}}\\right)^{2}$$

$$=2^{2}=4$$

$$p(8)=4\\cdot 4=16$$

That is exactly the pilot price, where $50$ passes were sold. The claim says $100$. Composed demand at $s=8$ is $50$, so the statement is False.`,
      `**E.** → False

Doubling the posted pass price acts through the demand exponent $\\frac{-3}{2}$, not through $-1$.

$$\\frac{q(kp)}{q(p)}=k^{\\frac{-3}{2}}$$

For $k=2$:

$$2^{\\frac{-3}{2}}=\\frac{1}{2^{\\frac{3}{2}}}$$

$$=\\frac{1}{2\\sqrt{2}}\\approx 0.3536$$

A halving would be a multiplier of $\\frac{1}{2}$. Because $0.3536\\neq 0.5$, doubling the posted price does not halve demand, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 94,
    solution_overview: `Day-pass demand is $q(p)=Ap^{\\frac{-3}{2}}$ with the pilot record $q(16)=50$, and policy indexes the price by $p(s)=4s^{\\frac{2}{3}}$.

**Part 1: Building the model.**

Let $p$ = pass price in euros, $q$ = passes sold per week, $s$ = subsidy index. The pilot fixes the coefficient. The policy map then sits inside the demand rule, and composing two powers multiplies their exponents while the inner coefficient is itself raised to the outer exponent.

**1. Translate: the pilot record.**

$$A\\cdot 16^{\\frac{-3}{2}}=50, \\qquad 16^{\\frac{3}{2}}=\\left(\\sqrt{16}\\right)^{3}=64$$

**2. Translate: the composition.**

$$q(p(s))=A\\left(4s^{\\frac{2}{3}}\\right)^{\\frac{-3}{2}}=A\\cdot 4^{\\frac{-3}{2}}\\cdot s^{(\\frac{2}{3})(\\frac{-3}{2})}$$

**Part 2: The model.**

$$q(p)=3200\\,p^{\\frac{-3}{2}} \\tag{1}$$

$$q(p(s))=\\frac{400}{s} \\tag{2}$$

**Part 3: Solve.**

**1.** The pilot gives the coefficient:

$$A=50\\times 64=3200$$

**2.** The two pieces of the composition:

$$4^{\\frac{-3}{2}}=\\frac18, \\qquad \\left(\\tfrac23\\right)\\left(-\\tfrac32\\right)=-1$$

**3.** Multiplying them through produces $(2)$:

$$3200\\cdot\\frac18\\cdot s^{-1}=\\frac{400}{s}$$

**4.** Composed demand at the index the statements use, where $p(8)=16$ returns the pilot price:

$$q(p(8))=\\frac{400}{8}=50$$

**5.** Multipliers act through whichever exponent applies. Tripling the subsidy index uses the composed exponent $-1$ and divides demand by $3$, while doubling the posted price uses the demand exponent $\\frac{-3}{2}$ and multiplies demand by $2^{\\frac{-3}{2}}\\approx 0.3536$. Neither move is proportional.

**Answer.** $A=3200$ | $q\\circ p=\\frac{400}{s}$ | $q(p(8))=50$ | doubling $p$ multiplies demand by $2^{\\frac{-3}{2}}$`,
  },
  {
    id: `math-8-95`,
    case_id: `MATH 8.95`,
    title: `Overnight Loaves Split Across Two Oven Lines`,
    context: `A regional bakery must bake $30$ thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index is $C_1(q)=q^{2}$ and line 2's is $C_2(q)=\\frac{q^{2}}{4}$, where $q$ is that line's own output in thousands of loaves. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Sending all $30$ thousand loaves to line 2 costs $225$.`,
      `Splitting the order as $6$ on line 1 and $24$ on line 2 costs $180$.`,
      `An even split of $15$ and $15$ costs more than the $6$ and $24$ split.`,
      `Doubling line 2's own output multiplies its cost index by $4$.`,
      `Line 1's average cost index falls as its own output rises.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Sending the whole overnight order to line 2 means evaluating that line at $q=30$.

$$C_2(30)=\\frac{30^{2}}{4}$$

$$=\\frac{900}{4}=225$$

The cost index is $225$, so the statement is True.`,
      `**B.** → True

The named split is priced by evaluating each line at its own load and adding.

$$C_1(6)=6^{2}=36$$

$$C_2(24)=\\frac{24^{2}}{4}$$

$$=\\frac{576}{4}=144$$

$$36+144=180$$

The split costs $180$, so the statement is True.`,
      `**C.** → True

An even split puts $15$ thousand loaves on each line, and that total is compared with the $6$ and $24$ split.

$$C_1(15)=15^{2}=225$$

$$C_2(15)=\\frac{225}{4}$$

$$225+\\frac{225}{4}=\\frac{1125}{4}$$

$$\\frac{1125}{4}=281.25$$

The other split costs

$$6^{2}+\\frac{24^{2}}{4}=36+144=180$$

Because $281.25>180$, the even split costs more, so the statement is True.`,
      `**D.** → True

Line 2's cost index has exponent $2$, so doubling its own output multiplies the index by $2^{2}$.

$$\\frac{C_2(2q)}{C_2(q)}=2^{2}=4$$

The coefficient $\\frac{1}{4}$ cancels in the ratio. Doubling line 2's load quadruples its cost index, so the statement is True.`,
      `**E.** → False

Average cost divides line 1's cost index by its own output, which subtracts $1$ from the exponent.

$$\\frac{C_1(q)}{q}=\\frac{q^{2}}{q}=q$$

The remaining exponent is $+1$, so the average rises with output. A falling average would need an original exponent below $1$. Line 1's average cost index does not fall, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 95,
    solution_overview: `Thirty thousand loaves are split between two oven lines with cost indices $C_1(q)=q^{2}$ and $C_2(q)=\\frac{q^{2}}{4}$.

**Part 1: Building the model.**

Let $q_1$ and $q_2$ = thousands of loaves baked on each line, with $q_1+q_2=30$. Both cost indices are powers with exponent $2$, so each line's cost rises faster than its own load, and line 2 is the cheaper line at every output because its coefficient is a quarter of line 1's.

**1. Translate: the cost of a split.**

$$T(q_1)=q_1^{2}+\\frac{(30-q_1)^{2}}{4}$$

**2. Translate: equal marginal indices.** The interior candidate equates the two marginal cost indices:

$$2q_1=\\frac{q_2}{2} \\quad \\Longleftrightarrow \\quad q_2=4q_1$$

**Part 2: The model.**

$$C_1(q)=q^{2}, \\qquad C_2(q)=\\frac{q^{2}}{4} \\tag{1}$$

$$\\frac{C_2(2q)}{C_2(q)}=2^{2}=4 \\tag{2}$$

**Part 3: Solve.**

**1.** The interior candidate, from $q_2=4q_1$ together with $q_1+q_2=30$:

$$q_1=6, \\qquad q_2=24$$

**2.** Costs of the plans the statements name:

$$C_2(30)=225, \\qquad C_1(6)+C_2(24)=36+144=180$$

**3.** The even split, for comparison:

$$C_1(15)+C_2(15)=225+56.25=281.25$$

**4.** Ranking the three plans:

$$180<225<281.25$$

**5.** Scaling and averages both follow from the exponent $2$. Doubling a line's own output quadruples its cost index by $(2)$, while line 1's average cost index is $\\frac{C_1(q)}{q}=q$, which rises with output because $2-1=1$ is still positive.

**Answer.** all on line 2 costs $225$ | the $6$ and $24$ split costs $180$ | the even split costs $281.25$`,
  },
  {
    id: `math-8-96`,
    case_id: `MATH 8.96`,
    title: `Museum Tickets: Point Elasticity Versus a Finite Rise`,
    context: `Evening museum admissions follow $q(p)=A p^{-2}$ tickets when price is $p>0$ euros. At $p=10$ euros the desk sold $40$ tickets. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The point price elasticity of demand is constantly $-2$.`,
      `Raising price from $10$ to $12$ euros cuts demand by exactly $20\\%$.`,
      `A $10\\%$ price rise cuts demand by exactly $20\\%$.`,
      `Weekly revenue $R(p)=p\\,q(p)$ is maximized by raising price without bound.`,
      `Halving the price doubles demand.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The claim is about point elasticity, not about the ticket count at $p=10$. For $q(p)=Ap^{r}$ that elasticity equals the exponent $r$ at every price.

$$
\\varepsilon(p)=\\frac{p}{q}\\cdot\\frac{dq}{dp}
$$

Here $r=-2$, so $\\frac{dq}{dp}=-2Ap^{-3}$ and

$$
\\varepsilon(p)=\\frac{p}{Ap^{-2}}\\cdot(-2Ap^{-3})
$$

$$
=-2
$$

The coefficient $A$ cancels, and so does every power of $p$. The elasticity is constantly $-2$, so the statement is True.`,
      `**B.** → False

A rise from $10$ to $12$ euros is a finite price factor of $\\frac{12}{10}$, not an infinitesimal move, so demand changes by that factor raised to the exponent.

$$
\\frac{12}{10}=1.2
$$

$$
1.2^{-2}=\\frac{1}{1.44}\\approx 0.6944
$$

The exact cut in demand is therefore

$$
1-0.6944=0.3056\\approx 30.6\\%
$$

The quoted $20\\%$ is the size of the price rise itself. The linear shortcut misses in the other direction:

$$
-2\\times 20\\%=-40\\%
$$

Neither figure is the $30.6\\%$ the desk would record. Demand does not fall by exactly $20\\%$, so the statement is False.`,
      `**C.** → False

The claim applies the point-elasticity shortcut to a $10\\%$ jump, as if a finite rise of factor $1.1$ cut demand by exactly $-2\\times 10\\%$.

$$
-2\\times 10\\%=-20\\%
$$

The exact change uses the power:

$$
1.1^{-2}=\\frac{1}{1.21}\\approx 0.8264
$$

$$
1-0.8264\\approx 0.1736\\approx 17.4\\%
$$

A $10\\%$ price rise cuts demand by about $17.4\\%$, not by exactly $20\\%$, so the statement is False.`,
      `**D.** → False

Raising price without bound would maximize revenue only if $R(p)$ grew with $p$. Weekly revenue is price times tickets, so first recover the coefficient from the desk record $q(10)=40$:

$$
A\\cdot 10^{-2}=40
$$

$$
A=40\\cdot 100=4000
$$

$$
R(p)=p\\cdot 4000p^{-2}=\\frac{4000}{p}
$$

The exponent $-1$ is negative, so revenue falls at every price.

$$
R(10)=400
$$

$$
R(20)=200
$$

$$
\\lim_{p\\to\\infty}R(p)=0
$$

Pushing the price up without bound drives revenue toward zero. Revenue is not maximized that way, so the statement is False.`,
      `**E.** → False

Halving the price is the input factor $k=\\frac{1}{2}$, and demand responds through the exponent $-2$.

$$
\\frac{q(\\frac{p}{2})}{q(p)}=\\left(\\frac{1}{2}\\right)^{-2}=2^{2}=4
$$

Demand quadruples rather than doubling. An exact doubling would need exponent $-1$, the revenue exponent here rather than the demand exponent. Halving the price multiplies demand by four, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 96,
    solution_overview: `Evening admissions follow $q(p)=Ap^{-2}$ with the desk record $q(10)=40$, and point elasticity is set against exact finite price moves.

**Part 1: Building the model.**

Let $p$ = admission price in euros, $q$ = tickets sold. For an isoelastic rule $q=Ap^{r}$ the point elasticity equals the exponent $r$ at every price, while a finite price move of factor $k$ multiplies demand by $k^{r}$. The two devices agree only in the limit of vanishing changes.

**1. Translate: the desk record.**

$$A\\cdot 10^{-2}=40 \\quad \\Rightarrow \\quad A=40\\times 100=4000$$

**2. Translate: the two methods.** For a price factor $k$ the shortcut and the exact rule return different numbers:

$$-2(k-1), \\qquad k^{-2}-1$$

**Part 2: The model.**

$$q(p)=4000\\,p^{-2} \\tag{1}$$

$$R(p)=p\\,q(p)=\\frac{4000}{p} \\tag{2}$$

**Part 3: Solve.**

**1.** Point elasticity is the exponent itself, at every price:

$$\\varepsilon(p)=-2$$

**2.** Exact multipliers at the three factors the statements use:

$$1.2^{-2}\\approx 0.6944, \\qquad 1.1^{-2}\\approx 0.82645, \\qquad 0.5^{-2}=4$$

**3.** The matching exact percentage changes:

$$-30.56\\%, \\qquad -17.36\\%, \\qquad +300\\%$$

**4.** Levels behind the first of those moves:

$$q(10)=40, \\qquad q(12)=\\frac{4000}{144}\\approx 27.78$$

**5.** Revenue in $(2)$ carries exponent $-1$, so it falls steadily and tends to zero as price grows without bound, with $R(10)=400$ against $R(20)=200$. Constant elasticity describes the limiting response, never the arithmetic of a finite jump.

**Answer.** $\\varepsilon=-2$ at every price | exact cuts of about $30.6\\%$ and $17.4\\%$ | $R(p)=\\frac{4000}{p}$`,
  },
  {
    id: `math-8-97`,
    case_id: `MATH 8.97`,
    title: `Annealing Lehr Throughput Under a Mis-Scaled Coefficient`,
    context: `A glass-annealing lehr's throughput follows $T(e)=A e^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at $e=4$ delivered $T=64$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Under the calibrated law, $T(9)=216$.`,
      `If the coefficient were $25\\%$ larger, every throughput reading would rise by exactly $25\\%$.`,
      `The scale factor for doubling the belt setting does not depend on $A$.`,
      `Doubling the belt setting doubles throughput.`,
      `If the coefficient were $25\\%$ larger, the scale factor $\\frac{T(2e)}{T(e)}$ would itself become $25\\%$ larger.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded run at $e=4$ calibrates the coefficient before the reading at belt setting $9$ can be taken. Take the square root of $4$ first, then cube:

$$
4^{\\frac{3}{2}}=\\left(\\sqrt{4}\\right)^{3}=2^{3}=8
$$

$$
8A=64
$$

$$
A=8
$$

The calibrated law is $T(e)=8e^{\\frac{3}{2}}$. At belt setting $9$,

$$
9^{\\frac{3}{2}}=\\left(\\sqrt{9}\\right)^{3}=3^{3}=27
$$

$$
T(9)=8\\cdot 27=216
$$

Throughput at setting $9$ is $216$ trays per hour, so the statement is True.`,
      `**B.** → True

A $25\\%$ larger coefficient rescales every reading by the same factor, because $A$ sits in front of the shape $e^{\\frac{3}{2}}$ as a plain multiplier.

$$
T(e)=A e^{\\frac{3}{2}}
$$

$$
T_{c}(e)=1.25A e^{\\frac{3}{2}}
$$

$$
\\frac{T_{c}(e)}{T(e)}=\\frac{1.25A e^{\\frac{3}{2}}}{A e^{\\frac{3}{2}}}
$$

$$
=1.25
$$

The shape factor cancels at every setting, so the $25\\%$ lift is an identity rather than a check at one convenient point. Every throughput reading rises by exactly $25\\%$, so the statement is True.`,
      `**C.** → True

The scale factor for doubling is a ratio of two throughputs, so $A$ appears once in the numerator and once in the denominator.

$$
\\frac{T(2e)}{T(e)}=\\frac{A(2e)^{\\frac{3}{2}}}{A e^{\\frac{3}{2}}}
$$

$$
=2^{\\frac{3}{2}}
$$

The coefficient cancels before the exponent is applied. The doubling factor is therefore pinned by the exponent alone, for every positive $A$. The scale factor does not depend on $A$, so the statement is True.`,
      `**D.** → False

Doubling the belt setting is the input factor $k=2$, and throughput responds through the exponent $\\frac{3}{2}$, not through exponent $1$.

$$
\\frac{T(2e)}{T(e)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.828
$$

That is nearly a tripling, not a doubling. The recorded run makes the gap concrete. From $T(4)=64$,

$$
4^{\\frac{3}{2}}=\\left(\\sqrt{4}\\right)^{3}=8
$$

$$
A=\\frac{64}{8}=8
$$

Then at $e=8$,

$$
8^{\\frac{3}{2}}=\\left(\\sqrt{8}\\right)^{3}=16\\sqrt{2}
$$

$$
T(8)=8\\cdot 16\\sqrt{2}=128\\sqrt{2}\\approx 181.02
$$

A doubling of the recorded $64$ would have been $128$ trays per hour. The model returns about $181$. Doubling the setting does not double throughput, so the statement is False.`,
      `**E.** → False

A $25\\%$ larger coefficient enters the numerator and the denominator of the doubling ratio in equal measure, so the quotient cannot register it.

$$
T_{c}(2e)=1.25A(2e)^{\\frac{3}{2}}
$$

$$
T_{c}(e)=1.25A e^{\\frac{3}{2}}
$$

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=\\frac{1.25A(2e)^{\\frac{3}{2}}}{1.25A e^{\\frac{3}{2}}}
$$

$$
=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.828
$$

The factor $1.25$ cancels. A $25\\%$ larger scale factor would have been $1.25\\cdot 2\\sqrt{2}\\approx 3.535$, which is not what the ratio returns. The doubling factor stays at $2\\sqrt{2}$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 97,
    solution_overview: `Lehr throughput is $T(e)=Ae^{\\frac{3}{2}}$ trays per hour with the recorded run $T(4)=64$.

**Part 1: Building the model.**

Let $e$ = belt setting, $T$ = throughput in trays per hour. The exponent is supplied, so the recorded run fixes the coefficient. Two very different questions then follow: levels, which depend on the coefficient, and scale factors, in which the coefficient cancels.

**1. Translate: the recorded run.**

$$A\\cdot 4^{\\frac{3}{2}}=64, \\qquad 4^{\\frac{3}{2}}=\\left(\\sqrt{4}\\right)^{3}=8$$

**2. Translate: a mis-scaled coefficient.** Replacing $A$ by $cA$ multiplies every level by $c$ and leaves every ratio untouched:

$$\\frac{cA(ke)^{\\frac{3}{2}}}{cA\\,e^{\\frac{3}{2}}}=k^{\\frac{3}{2}}$$

**Part 2: The model.**

$$T(e)=8\\,e^{\\frac{3}{2}} \\tag{1}$$

$$\\frac{T(ke)}{T(e)}=k^{\\frac{3}{2}} \\tag{2}$$

**Part 3: Solve.**

**1.** The calibration:

$$8A=64 \\quad \\Rightarrow \\quad A=8$$

**2.** Levels at the settings the statements use, with $9^{\\frac{3}{2}}=27$:

$$T(4)=64, \\qquad T(9)=8\\cdot 27=216$$

**3.** A coefficient enlarged by a quarter scales every level by that same quarter:

$$1.25\\cdot 64=80, \\qquad 1.25\\cdot 216=270$$

**4.** The doubling factor from $(2)$, which no coefficient can move:

$$2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.8284$$

**5.** Levels and ratios therefore answer a mis-scaled coefficient in opposite ways. Every reading moves by exactly the percentage the coefficient moves, while every scale factor stays fixed, because $A$ appears once in the numerator and once in the denominator.

**Answer.** $A=8$ | $T(9)=216$ | a $25\\%$ larger coefficient raises every level by $25\\%$ | doubling factor $2\\sqrt{2}$`,
  },
];
