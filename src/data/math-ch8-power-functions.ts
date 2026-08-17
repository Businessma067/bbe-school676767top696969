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
3^{3}=27 \\qquad M(3)=5\\cdot 27=135
$$

The claimed $125$ is $5^{3}$, cubing the coefficient instead of the side. The two figures disagree, so the statement is False.`,
      `**C.** → True

The scale factor of a power function depends only on the exponent, because the coefficient cancels:

$$
\\frac{M(2s)}{M(s)}=\\frac{5(2s)^{3}}{5s^{3}}=2^{3}=8
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
8^{\\frac{2}{3}}=\\left(8^{\\frac{1}{3}}\\right)^{2}=2^{2}=4 \\qquad V(8)=3\\cdot 4=12
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
25^{\\frac{1}{2}}=5 \\qquad 5A=40 \\qquad A=8
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
\\frac{Q(4s)}{Q(s)}=\\frac{A(4s)^{\\frac{1}{2}}}{As^{\\frac{1}{2}}}=4^{\\frac{1}{2}}=2
$$

Quadrupling the staffing doubles the output, so the statement is True.`,
      `**D.** → False

A doubled coefficient appears once above and once below in the ratio, so it cancels:

$$
\\frac{(2A)(4s)^{\\frac{1}{2}}}{(2A)s^{\\frac{1}{2}}}=4^{\\frac{1}{2}}=2
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

$$
F(2)=2\\cdot 2^{2}=2\\cdot 4=8 \\qquad G(2)=2^{3}=8
$$

The claim wants $8$ and $6$. The first figure matches, but $G(2)=8$, not $6$, so the statement is False.`,
      `**B.** → True

The cubic index leads when the difference is positive. Subtract and factor:

$$
G(n)-F(n)=n^{3}-2n^{2}=n^{2}(n-2)
$$

For every $n>0$ the square $n^{2}$ is positive, so the sign of the difference is the sign of $n-2$. Whenever $n>2$ that factor is positive, hence $G(n)>F(n)$.

The cubic index exceeds the quadratic one for every $n>2$, so the statement is True.`,
      `**C.** → True

On the open interval $0<n<2$ the quadratic index is the larger of the two. The factored difference is

$$G(n)-F(n)=n^{2}(n-2)$$

Here $n^{2}>0$ while $n-2<0$, so the product is negative and $F(n)>G(n)$. A single interior check: $F(1)=2$ against $G(1)=1$.

The quadratic index leads throughout $0<n<2$, so the statement is True.`,
      `**D.** → False

Dividing the two indices cancels the common square:

$$
\\frac{G(n)}{F(n)}=\\frac{n^{3}}{2n^{2}}=\\frac{n}{2}
$$

As $n$ grows without bound, so does $\\frac{n}{2}$. A limit of $1$ would mean the indices become comparable, but already at $n=20$

$$\\frac{G(20)}{F(20)}=\\frac{20}{2}=10$$

and the ratio keeps climbing. The ratio tends to infinity, not to $1$, so the statement is False.`,
      `**E.** → False

Substitute $n=3$ into each index:

$$
F(3)=2\\cdot 3^{2}=2\\cdot 9=18 \\qquad G(3)=3^{3}=27
$$

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

$$
P(x)=\\frac{12}{\\sqrt{x}} \\qquad P(4)=\\frac{12}{\\sqrt{4}}=\\frac{12}{2}=6
$$

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

$$
P(0.01)=\\frac{12}{\\sqrt{0.01}}=\\frac{12}{0.1}=120
$$

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

$$
A\\cdot 3^{2}=45 \\qquad 9A=45 \\qquad A=5
$$

The claimed $15$ is $\\frac{45}{3}$, which divides by the radius instead of by its square. The coefficient is $5$, not $15$, so the statement is False.`,
      `**B.** → True

From the recorded job, $9A=45$, so $A=5$ and the rule is $y(r)=5r^{2}$. At radius $6$ metres:

$$y(6)=5\\cdot 6^{2}=5\\cdot 36=180$$

The panel needs $180$ litres, so the statement is True.`,
      `**C.** → True

A fifty percent increase in radius is the width multiplier $k=1.5$. For a square power the coefficient cancels:

$$
\\frac{y(1.5r)}{y(r)}=\\frac{A(1.5r)^{2}}{Ar^{2}}=1.5^{2}=2.25
$$

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

$$
\\frac{E(20)}{E(10)}=\\frac{0.5\\cdot 20^{2}}{0.5\\cdot 10^{2}}=\\frac{400}{100}=4
$$

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
    title: `Marina's Vegetable Plot`,
    context: `Marina's harvest in kilograms follows $Y(h)=A h^{r}$ after $h>0$ hours of watering, with both constants unknown. Eight hours give four kilograms, and twenty-seven hours give six. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Sixty-four hours of watering give eight kilograms.`,
      `The exponent is smaller than one, so harvest grows more slowly than watering time.`,
      `If she doubles the watering time, she doubles the harvest.`,
      `After one hour the plot already yields four kilograms.`,
      `The watering time needed for a given harvest is itself a power function of that harvest.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The two harvests give $r=\\frac{1}{3}$ and $A=2$. Sixty-four hours is four cubed, so the cube root is $4$:

$$
Y(64)=2\\cdot 64^{\\frac{1}{3}}
$$

$$
64^{\\frac{1}{3}}=4
$$

$$
Y(64)=2\\cdot 4
$$

$$
Y(64)=8
$$

The claimed harvest is $8$ kilograms, so the statement is True.`,
      `**B.** → True

The harvest ratio already gave $r=\\frac{1}{3}$. An exponent smaller than one means harvest grows more slowly than watering time: each extra hour adds less than the hour before it. One third is below one, so the statement is True.`,
      `**C.** → False

Doubling hours would double harvest only if $r=1$. With $r=\\frac{1}{3}$ the scale factor is

$$
\\frac{Y(2h)}{Y(h)}=2^{r}
$$

$$
2^{r}=2^{\\frac{1}{3}}
$$

The cube root of two is about $1.26$, not $2$. The harvest rises, but not in lockstep with the clock, so the statement is False.`,
      `**D.** → False

At one hour the power is $1$, so the yield is just the coefficient $A=2$:

$$
Y(1)=2\\cdot 1^{\\frac{1}{3}}
$$

$$
Y(1)=2
$$

The claimed four kilograms is the eight-hour record, not the one-hour level, so the statement is False.`,
      `**E.** → True

A power with a nonzero exponent inverts to another power. From $Y=2h^{\\frac{1}{3}}$ one gets

$$
\\frac{Y}{2}=h^{\\frac{1}{3}}
$$

$$
h=\\left(\\frac{Y}{2}\\right)^{3}
$$

Hours are a cube of the harvest, so the statement is True.`,
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

**1.** $Y(64)=8$ and $Y(1)=2$, not $4$.

**2.** Because $r<1$, doubling the hours multiplies harvest by $2^{\\frac{1}{3}}$, not by $2$.

**3.** The inverse $h=(Y/2)^{3}$ is a power function.

**Answer.** $A=2$ | $r=\\frac{1}{3}$ | $Y(64)=8$ | $Y(1)=2$`,
  },
  {
    id: `math-8-12`,
    case_id: `MATH 8.12`,
    title: `A Helpdesk Wait That Falls With the Team`,
    context: `Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. Four agents on the shift produce a twenty-four minute wait. Staffing cannot exceed fifty agents. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `With nine agents on duty, callers wait sixteen minutes.`,
      `Quadrupling the recorded team halves the wait.`,
      `Doubling the recorded team halves the wait.`,
      `A six-minute wait would need more than fifty agents.`,
      `If the team keeps growing, the wait eventually becomes negative.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The four-agent record gives $W(n)=48 n^{-\\frac{1}{2}}$. Nine agents put a $3$ in the denominator:

$$
W(9)=48\\cdot 9^{-\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{-\\frac{1}{2}}=\\frac{1}{3}
$$

$$
W(9)=48\\cdot\\frac{1}{3}
$$

$$
W(9)=16
$$

The claimed wait is $16$ minutes, so the statement is True.`,
      `**B.** → True

The exponent is $-\\frac{1}{2}$, so quadrupling the team multiplies wait by

$$
\\frac{W(4n)}{W(n)}=4^{-\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

Four times the staff cuts the wait in half, matching the claim, so the statement is True.`,
      `**C.** → False

Doubling the team would halve the wait only if the exponent were $-1$. With exponent $-\\frac{1}{2}$ the scale factor is

$$
\\frac{W(2n)}{W(n)}=2^{-\\frac{1}{2}}
$$

which is about $0.71$, not $\\frac{1}{2}$. The wait falls, but not by half, so the statement is False.`,
      `**D.** → True

The wait is $W(n)=48 n^{-\\frac{1}{2}}$. A six-minute wait means

$$
48 n^{-\\frac{1}{2}}=6
$$

$$
\\frac{48}{\\sqrt{n}}=6
$$

$$
\\sqrt{n}=\\frac{48}{6}
$$

$$
\\sqrt{n}=8
$$

$$
n=64
$$

Sixty-four agents sit past the fifty-agent cap, so the statement is True.`,
      `**E.** → False

The wait is $W(n)=\\frac{48}{\\sqrt{n}}$. For every $n>0$ the square root is positive, so the wait stays positive. A negative exponent sends the wait towards zero from above, never through zero, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $W(9)=16$. Quadrupling halves the wait; doubling only multiplies it by $1/\\sqrt{2}$.

**2.** A six-minute wait needs $n=64$, which violates (2).

**3.** The wait approaches $0$ but never turns negative.

**Answer.** $A=48$ | $W(9)=16$ | $n=64$ for six minutes`,
  },
  {
    id: `math-8-13`,
    case_id: `MATH 8.13`,
    title: `Leah's Well and Omar's Well`,
    context: `Leah and Omar pump at the same depth $d>0$ metres. Leah's well follows $Q_{L}(d)=a d^{\\frac{1}{2}}$, and at nine metres she gets twelve litres a minute. Omar's well follows $Q_{O}(d)=k d^{\\frac{3}{2}}$, and at four metres he gets four litres a minute. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At four metres Leah pumps eight litres a minute.`,
      `Omar overtakes Leah before they reach ten metres.`,
      `At sixteen metres Omar pumps more than forty litres a minute.`,
      `Once Omar is ahead, he stays ahead at every greater depth.`,
      `The two wells together still follow a single power of depth.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Leah's well is $Q_{L}(d)=4d^{\\frac{1}{2}}$. At four metres the square root is $2$:

$$
Q_{L}(4)=4\\cdot 4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
Q_{L}(4)=4\\cdot 2
$$

$$
Q_{L}(4)=8
$$

The claimed flow is $8$ litres a minute, so the statement is True.`,
      `**B.** → True

The two wells are $Q_{L}(d)=4d^{\\frac{1}{2}}$ and $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$. They meet when

$$
4 d^{\\frac{1}{2}}=\\frac{1}{2} d^{\\frac{3}{2}}
$$

$$
8 d^{\\frac{1}{2}}=d^{\\frac{3}{2}}
$$

For $d>0$, divide by $d^{\\frac{1}{2}}$:

$$
8=d^{\\frac{3}{2}-\\frac{1}{2}}
$$

$$
8=d
$$

Eight metres is shallower than ten, so the statement is True.`,
      `**C.** → False

Omar's well is $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$. At sixteen metres:

$$
Q_{O}(16)=\\frac{1}{2}\\cdot 16^{\\frac{3}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
16^{\\frac{3}{2}}=4^{3}
$$

$$
4^{3}=64
$$

$$
Q_{O}(16)=\\frac{1}{2}\\cdot 64
$$

$$
Q_{O}(16)=32
$$

Thirty-two is not more than forty, so the statement is False.`,
      `**D.** → True

The two wells give the ratio

$$
\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{\\frac{1}{2} d^{\\frac{3}{2}}}{4 d^{\\frac{1}{2}}}
$$

$$
\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{1}{8} d^{\\frac{3}{2}-\\frac{1}{2}}
$$

$$
\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}
$$

That ratio exceeds $1$ precisely when $d>8$. Omar's extra exponent is one full power of depth, so once he is ahead he stays ahead, so the statement is True.`,
      `**E.** → False

The two wells give $4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$. The exponents $\\frac{1}{2}$ and $\\frac{3}{2}$ are different, and both coefficients are nonzero. A sum of distinct powers is not itself a power of depth, so the statement is False.`,
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

**1.** $Q_{L}(4)=8$. They meet at $d=8$, before ten metres.

**2.** $Q_{O}(16)=32$, not more than $40$. Ratio (2) crosses $1$ only once, and the sum is not a single power.

**Answer.** $a=4$ | $k=\\frac{1}{2}$ | $Q_{L}(4)=8$ | crossing at $d=8$ | $Q_{O}(16)=32$`,
  },
  {
    id: `math-8-14`,
    case_id: `MATH 8.14`,
    title: `Nora's Print Shop`,
    context: `Nora bills a run of $n>0$ copies as a fixed setup plus a square-root charge, $C(n)=F+A n^{\\frac{1}{2}}$. A sixteen-copy run costs two hundred and fifty euros, and a sixty-four-copy run costs four hundred and fifty. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because of the setup, the bill is not a power function of the run.`,
      `Twenty-five copies cost three hundred euros.`,
      `If she prints enough copies, the total bill starts to fall.`,
      `Thirty-six copies cost more than four hundred euros.`,
      `A longer run is cheaper per copy.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The two invoices give $C(n)=50+50 n^{\\frac{1}{2}}$. A power of the run cannot carry a leftover constant. The setup is $50$ euros, not zero, so the statement is True.`,
      `**B.** → True

The bill is $C(n)=50+50 n^{\\frac{1}{2}}$. At twenty-five copies the square root is $5$:

$$
C(25)=50+50\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
C(25)=50+50\\cdot 5
$$

$$
C(25)=50+250
$$

$$
C(25)=300
$$

The claimed bill is $300$ euros, so the statement is True.`,
      `**C.** → False

The bill is $C(n)=50+50 n^{\\frac{1}{2}}$. Both the setup and the coefficient are positive, so every extra copy raises the square-root term and the bill cannot fall, so the statement is False.`,
      `**D.** → False

The bill is $C(n)=50+50 n^{\\frac{1}{2}}$. At thirty-six copies the square root is $6$:

$$
C(36)=50+50\\cdot 36^{\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
C(36)=50+50\\cdot 6
$$

$$
C(36)=50+300
$$

$$
C(36)=350
$$

Three hundred and fifty is not more than four hundred, so the statement is False.`,
      `**E.** → True

The bill is $C(n)=50+50 n^{\\frac{1}{2}}$. Cost per copy is

$$
\\frac{C(n)}{n}=\\frac{50+50 n^{\\frac{1}{2}}}{n}
$$

$$
\\frac{C(n)}{n}=\\frac{50}{n}+50 n^{-\\frac{1}{2}}
$$

The setup is spread over more copies, and the square-root charge per copy also falls, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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

**2.** $C(25)=300$ and $C(36)=350$, which is not more than $400$.

**Answer.** $F=50$ | $A=50$ | $C(25)=300$ | $C(36)=350$`,
  },
  {
    id: `math-8-15`,
    case_id: `MATH 8.15`,
    title: `A Refinery Against a Linear Quote`,
    context: `A refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. Raising purity from nine to sixteen increased metal output by two hundred and ninety-six tonnes. That metal is then converted to alloy strength $S=\\frac{1}{2}M^{\\frac{2}{3}}$. A rival mill quotes strength directly as $1.8u+5$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After both stages, the refinery's strength is proportional to purity.`,
      `On ore of purity nine, the refinery's strength is twenty-seven.`,
      `The two quotes never meet.`,
      `On ore of purity thirty-six, the refinery's strength is more than seventy.`,
      `The rival's quote is a power function of purity.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The audit gives $M(u)=8 u^{\\frac{3}{2}}$. Strength composes with that metal law. The $\\frac{3}{2}$ and $\\frac{2}{3}$ cancel, leaving a multiple of purity:

$$
S(u)=\\frac{1}{2}\\bigl(8 u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}
$$

$$
S(u)=\\frac{1}{2}\\cdot 8^{\\frac{2}{3}} u^{\\frac{3}{2}\\cdot\\frac{2}{3}}
$$

$$
S(u)=\\frac{1}{2}\\cdot 8^{\\frac{2}{3}} u
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
S(u)=\\frac{1}{2}\\cdot 4\\cdot u
$$

$$
S(u)=2u
$$

Strength is twice purity, so the statement is True.`,
      `**B.** → False

The two stages give $S(u)=2u$. At purity nine:

$$
S(9)=2\\cdot 9
$$

$$
S(9)=18
$$

The claimed twenty-seven is the metal output $9^{\\frac{3}{2}}$, not the strength. Eighteen is not twenty-seven, so the statement is False.`,
      `**C.** → False

The refinery's strength is $S(u)=2u$. Agreement with the rival line is

$$
2u=1.8u+5
$$

$$
2u-1.8u=5
$$

$$
0.2u=5
$$

$$
u=\\frac{5}{0.2}
$$

$$
u=25
$$

They meet at purity twenty-five, so the statement is False.`,
      `**D.** → True

The two stages give $S(u)=2u$. At purity thirty-six:

$$
S(36)=2\\cdot 36
$$

$$
S(36)=72
$$

Seventy-two is more than seventy, so the statement is True.`,
      `**E.** → False

A power of purity has the form $c u^{p}$, so it cannot carry a leftover constant. The rival quote is $1.8u+5$, and at purity zero that quote still equals $5$. The intercept kills the power, so the statement is False.`,
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

**1.** The chain is proportional to purity. $S(9)=18$, not $27$. Equation (2) meets at $u=25$.

**2.** $S(36)=72>70$. The rival's intercept keeps it from being a power of $u$.

**Answer.** $A=8$ | $S(u)=2u$ | $S(9)=18$ | $S(36)=72$ | crossing at $u=25$`,
  },
  {
    id: `math-8-16`,
    case_id: `MATH 8.16`,
    title: `Server Peak Load Between a Doubling Rule and an Alarm`,
    context: `A monitoring team models a server's peak load as $L(x)=A x^{r}$, where $x>0$ is the number of simultaneous jobs. Stress tests show that doubling the job count multiplies peak load by $4$, and a run with $8$ simultaneous jobs recorded a peak load of $32$. The hardware alarm trips at a peak load of $200$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Tripling the job count multiplies peak load by $6$.`,
      `Four simultaneous jobs produce a peak load of eight.`,
      `Because the exponent exceeds one, peak load grows faster than the job count.`,
      `The hardware alarm already trips at sixteen simultaneous jobs.`,
      `Halving the job count halves peak load.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

The doubling test gives $r=2$. Tripling the job count multiplies peak load by

$$
\\frac{L(3x)}{L(x)}=3^{r}
$$

$$
3^{r}=3^{2}
$$

$$
3^{2}=9
$$

The claimed factor is $6$. A linear trap would give $3\\cdot 2=6$, but the exponent is $2$, so the statement is False.`,
      `**B.** → True

The stress tests give $L(x)=\\frac{1}{2}x^{2}$. At four jobs:

$$
L(4)=\\frac{1}{2}\\cdot 4^{2}
$$

$$
4^{2}=16
$$

$$
L(4)=\\frac{1}{2}\\cdot 16
$$

$$
L(4)=8
$$

The claimed peak load is $8$, so the statement is True.`,
      `**C.** → True

The doubling test gives $r=2$. An exponent larger than one means peak load grows faster than the job count: each extra job adds more load than the job before it. Two exceeds one, so the statement is True.`,
      `**D.** → False

The stress tests give $L(x)=\\frac{1}{2}x^{2}$. At sixteen jobs:

$$
L(16)=\\frac{1}{2}\\cdot 16^{2}
$$

$$
16^{2}=256
$$

$$
L(16)=\\frac{1}{2}\\cdot 256
$$

$$
L(16)=128
$$

One hundred and twenty-eight is still below the alarm of $200$, so the statement is False.`,
      `**E.** → False

The doubling test gives $r=2$. Halving the job count multiplies peak load by

$$
\\frac{L(\\frac{x}{2})}{L(x)}=2^{-r}
$$

$$
2^{-r}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The load falls to a quarter, not to a half, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** Tripling multiplies load by $9$, not $6$. $L(4)=8$ and $L(16)=128<200$.

**2.** Because $r>1$, load outruns the job count. Halving jobs quarters the load.

**Answer.** $r=2$ | $A=\\frac{1}{2}$ | $L(4)=8$ | $L(16)=128$ | alarm at $x=20$`,
  },
  {
    id: `math-8-17`,
    case_id: `MATH 8.17`,
    title: `Survey Reach Against a Fieldwork Budget Cap`,
    context: `Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$, where $x>0$ measures outreach intensity. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The fieldwork budget caps outreach intensity at $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An extra unit of intensity adds more usable responses at $25$ than at $100$.`,
      `At intensity $81$ the survey yields one hundred and eight usable responses.`,
      `Doubling outreach intensity doubles usable responses.`,
      `The budget cap allows at most $200$ usable responses.`,
      `The intensity needed for a target response count is itself a power function of that count.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The recorded gain gives $Q(x)=12 x^{\\frac{1}{2}}$. An extra unit of intensity adds the derivative. The square-root flattens, so later units buy less:

$$
Q'(x)=12\\cdot\\frac{1}{2} x^{-\\frac{1}{2}}
$$

$$
Q'(x)=6 x^{-\\frac{1}{2}}
$$

$$
Q'(25)=6\\cdot 25^{-\\frac{1}{2}}
$$

$$
Q'(25)=\\frac{6}{5}
$$

$$
Q'(100)=6\\cdot 100^{-\\frac{1}{2}}
$$

$$
Q'(100)=\\frac{6}{10}
$$

$$
Q'(100)=\\frac{3}{5}
$$

$$
\\frac{6}{5}>\\frac{3}{5}
$$

An extra unit adds more usable responses at $25$ than at $100$, so the statement is True.`,
      `**B.** → True

The recorded gain gives $A=12$. At intensity $81$ the square root is $9$:

$$
Q(81)=12\\cdot 81^{\\frac{1}{2}}
$$

$$
81^{\\frac{1}{2}}=9
$$

$$
Q(81)=12\\cdot 9
$$

$$
Q(81)=108
$$

The claimed yield is $108$, so the statement is True.`,
      `**C.** → False

Doubling intensity would double responses only if the exponent were $1$. With exponent $\\frac{1}{2}$ the scale factor is

$$
\\frac{Q(2x)}{Q(x)}=2^{\\frac{1}{2}}
$$

The square root of two is about $1.41$, not $2$. Responses rise, but not in lockstep with outreach, so the statement is False.`,
      `**D.** → False

The recorded gain gives $A=12$. At the intensity cap of $400$:

$$
Q(400)=12\\cdot 400^{\\frac{1}{2}}
$$

$$
400^{\\frac{1}{2}}=20
$$

$$
Q(400)=12\\cdot 20
$$

$$
Q(400)=240
$$

Two hundred and forty exceeds the claimed ceiling of $200$, so the statement is False.`,
      `**E.** → True

The recorded gain gives $Q=12 x^{\\frac{1}{2}}$. A square root inverts to a square:

$$
\\frac{Q}{12}=x^{\\frac{1}{2}}
$$

$$
x=\\left(\\frac{Q}{12}\\right)^{2}
$$

Intensity is a power of the response count, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $Q'(25)>Q'(100)$ and $Q(81)=108$. Doubling intensity multiplies $Q$ by $\\sqrt{2}$, not by $2$.

**2.** $Q(400)=240$, so the cap allows more than $200$. The inverse $x=(Q/12)^{2}$ is a power function.

**Answer.** $A=12$ | $Q(81)=108$ | $Q(400)=240$`,
  },
  {
    id: `math-8-18`,
    case_id: `MATH 8.18`,
    title: `Quadratic and Linear Inspection Costs That Meet Once`,
    context: `Two inspection procedures are costed for a batch of $n>0$ documents. The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. Records show that on a batch of $16$ documents the two procedures cost the same, $256$ each. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `On a batch of nine documents the automated procedure costs eighty-one.`,
      `The automated procedure is cheaper than the manual one at every batch above sixteen documents.`,
      `For $n>0$ the two procedures cost the same only at $n=16$.`,
      `At twenty-five documents the two procedures differ by less than one hundred.`,
      `The automated procedure's cost per document is constant.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The automated law is $C(n)=n^{2}$. At nine documents:

$$
C(9)=9^{2}
$$

$$
C(9)=81
$$

The claimed automated cost is $81$, so the statement is True.`,
      `**B.** → False

The two procedures are $C(n)=n^{2}$ and $D(n)=16n$. Their difference is

$$
C(n)-D(n)=n^{2}-16n
$$

$$
C(n)-D(n)=n(n-16)
$$

For $n>16$ both factors are positive, so automated costs more than manual, not less. The quadratic outruns the line past the meeting point, so the statement is False.`,
      `**C.** → True

The two procedures are $C(n)=n^{2}$ and $D(n)=16n$. They meet when

$$
n^{2}=16n
$$

$$
n^{2}-16n=0
$$

$$
n(n-16)=0
$$

The roots are $n=0$ and $n=16$. On $n>0$ they meet only at sixteen, so the statement is True.`,
      `**D.** → False

The two procedures are $C(n)=n^{2}$ and $D(n)=16n$. At twenty-five documents:

$$
C(25)=25^{2}
$$

$$
C(25)=625
$$

$$
D(25)=16\\cdot 25
$$

$$
D(25)=400
$$

$$
C(25)-D(25)=625-400
$$

$$
C(25)-D(25)=225
$$

Two hundred and twenty-five is not less than one hundred, so the statement is False.`,
      `**E.** → False

The automated law is $C(n)=n^{2}$. Cost per document is

$$
\\frac{C(n)}{n}=\\frac{n^{2}}{n}
$$

$$
\\frac{C(n)}{n}=n
$$

which rises with the batch. The unit cost is not constant, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $C(9)=81$. Gap (2) is positive for $n>16$, so automated is more expensive past the meeting point.

**2.** On $n>0$ they meet only at $n=16$. At $n=25$ the gap is $225$, not less than $100$. Automated unit cost equals $n$, so it is not constant.

**Answer.** $a=1$ | $b=16$ | $C(9)=81$ | unique meeting $n=16$ | gap $225$ at $n=25$`,
  },
  {
    id: `math-8-19`,
    case_id: `MATH 8.19`,
    title: `Warehouse Throughput With a Contractual Ceiling`,
    context: `Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour, where $s>0$ is the number of staff on shift. A shift with $16$ staff moved $32$ pallets per hour. The service contract caps billed throughput at $80$ pallets per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A shift of $64$ staff moves sixty-four pallets per hour.`,
      `Doubling the headcount doubles throughput.`,
      `The contract ceiling is already reached with $64$ staff.`,
      `Throughput per staff member falls as headcount rises.`,
      `Once the ceiling binds, billed throughput is no longer a power function of staff.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The sixteen-staff record gives $H(s)=8s^{\\frac{1}{2}}$. At sixty-four staff the square root is $8$:

$$
H(64)=8\\cdot 64^{\\frac{1}{2}}
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
H(64)=8\\cdot 8
$$

$$
H(64)=64
$$

The claimed throughput is $64$ pallets per hour, so the statement is True.`,
      `**B.** → False

Doubling staff would double throughput only if the exponent were $1$. With exponent $\\frac{1}{2}$ the scale factor is

$$
\\frac{H(2s)}{H(s)}=2^{\\frac{1}{2}}
$$

The square root of two is about $1.41$, not $2$. Throughput rises, but not in lockstep with headcount, so the statement is False.`,
      `**C.** → False

Sixty-four staff move $64$ pallets an hour.

$$
64<80
$$

Sixty-four is still below the contract ceiling of eighty, so the statement is False.`,
      `**D.** → True

Throughput is $H(s)=8s^{\\frac{1}{2}}$. Throughput per staff member is

$$
\\frac{H(s)}{s}=\\frac{8 s^{\\frac{1}{2}}}{s}
$$

$$
\\frac{H(s)}{s}=8 s^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so each extra worker adds less throughput than the one before, so the statement is True.`,
      `**E.** → True

Throughput is $H(s)=8s^{\\frac{1}{2}}$. The ceiling binds when

$$
8 s^{\\frac{1}{2}}=80
$$

$$
s^{\\frac{1}{2}}=10
$$

$$
s=100
$$

Billed throughput is then the power cut off at the cap:

$$
B(s)=\\min\\bigl(8 s^{\\frac{1}{2}},\\,80\\bigr)
$$

Past one hundred staff that rule is a constant, not a power of $s$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $H(64)=64$, still below the cap of $80$. Doubling staff multiplies $H$ by $\\sqrt{2}$, not by $2$.

**2.** Unit throughput $8s^{-\\frac{1}{2}}$ falls with $s$. The two-piece billed rule (2) is not a single power of $s$.

**Answer.** $A=8$ | $H(64)=64$ | cap binds at $s=100$`,
  },
  {
    id: `math-8-20`,
    case_id: `MATH 8.20`,
    title: `Response Time Recovered from a Server Upgrade`,
    context: `A service's median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds, where $k>0$ is the number of servers. The upgrade log does not state $A$: it records only that moving from $4$ servers to $9$ servers cut the median response time by exactly $19$ ms. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `With four servers the median response time is $27$ ms.`,
      `With nine servers the median response time is more than ten milliseconds.`,
      `Doubling the server count halves the median response time.`,
      `The server count needed for a target wait is itself a power function of that wait.`,
      `If the server count keeps growing, the median wait eventually becomes negative.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The recorded cut gives $W(k)=216 k^{-\\frac{3}{2}}$. At four servers:

$$
W(4)=216\\cdot 4^{-\\frac{3}{2}}
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
W(4)=\\frac{216}{8}
$$

$$
W(4)=27
$$

The claimed wait is $27$ ms, so the statement is True.`,
      `**B.** → False

The recorded cut gives $A=216$. At nine servers:

$$
W(9)=216\\cdot 9^{-\\frac{3}{2}}
$$

$$
9^{-\\frac{3}{2}}=\\frac{1}{27}
$$

$$
W(9)=\\frac{216}{27}
$$

$$
W(9)=8
$$

Eight milliseconds is not more than ten, so the statement is False.`,
      `**C.** → False

Doubling the servers would halve the wait only if the exponent were $-1$. With exponent $-\\frac{3}{2}$ the scale factor is

$$
\\frac{W(2k)}{W(k)}=2^{-\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\cdot\\sqrt{2}
$$

$$
2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}
$$

That factor is about $0.35$, not $\\frac{1}{2}$. The wait falls faster than a simple half, so the statement is False.`,
      `**D.** → True

The wait is $W=216 k^{-\\frac{3}{2}}$. A power with a nonzero exponent inverts to another power:

$$
\\frac{W}{216}=k^{-\\frac{3}{2}}
$$

$$
k=\\left(\\frac{W}{216}\\right)^{-\\frac{2}{3}}
$$

$$
k=\\left(\\frac{216}{W}\\right)^{\\frac{2}{3}}
$$

The server count is a power of the wait, so the statement is True.`,
      `**E.** → False

The wait is $W(k)=\\frac{216}{k^{\\frac{3}{2}}}$. For every $k>0$ the power in the denominator is positive, so the wait stays positive. A negative exponent sends the wait towards zero from above, never through zero, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 20,
    solution_overview: `Wait follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. Moving from $4$ servers to $9$ servers cut the wait by $19$ ms.

**Part 1: Building the model.**

Let $k$ = servers and $W$ = milliseconds. The exponent is given, so the recorded cut, a difference of two levels, recovers $A$.

**1. Translate: the recorded cut.**

$$A\\bigl(4^{-\\frac{3}{2}}-9^{-\\frac{3}{2}}\\bigr)=19$$

**Part 2: The model.**

$$A=216, \\qquad W(k)=216k^{-\\frac{3}{2}} \\tag{1}$$

**Part 3: Solve.**

**1.** $W(4)=27$ and $W(9)=8$, which is not more than $10$. Doubling servers multiplies wait by $1/(2\\sqrt{2})$, not by $1/2$.

**2.** The inverse $k=(216/W)^{\\frac{2}{3}}$ is a power function. The wait approaches $0$ but never turns negative.

**Answer.** $A=216$ | $W(4)=27$ | $W(9)=8$`,
  },
  {
    id: `math-8-21`,
    case_id: `MATH 8.21`,
    title: `Isoelastic Subscription Demand and Its Revenue`,
    context: `Monthly subscriptions follow $q(p)=A p^{-2}$, where $p>0$ is the price in euros. At five euros the service sells four hundred subscriptions. Revenue is $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At ten euros the curve sells $100$ subscriptions.`,
      `Revenue is the same at every price.`,
      `The price needed for a given number of subscriptions is itself a power function of that number.`,
      `Quadrupling the price cuts demand to one quarter.`,
      `At twenty euros the curve sells $50$ subscriptions.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The five-euro sale pins the coefficient. Substituting $q(5)=400$:

$$
A\\cdot 5^{-2}=400
$$

$$
5^{-2}=\\frac{1}{25}
$$

$$
A\\cdot\\frac{1}{25}=400
$$

$$
A=10000
$$

Demand is then $q(p)=10000 p^{-2}$. At ten euros:

$$
q(10)=10000\\cdot 10^{-2}
$$

$$
10^{-2}=\\frac{1}{100}
$$

$$
q(10)=\\frac{10000}{100}
$$

$$
q(10)=100
$$

The claimed demand is $100$ subscriptions, so the statement is True.`,
      `**B.** → False

Demand is $q(p)=10000 p^{-2}$. Revenue multiplies price by quantity:

$$
R(p)=p\\cdot 10000 p^{-2}
$$

$$
R(p)=10000 p^{-1}
$$

$$
R(p)=\\frac{10000}{p}
$$

A schedule that is the same at every price would need exponent $0$. Here the leftover exponent is $-1$, so doubling the price halves revenue. Revenue falls as the price rises. It is not constant, so the statement is False.`,
      `**C.** → True

Demand is $q=10000 p^{-2}$. Solving for price:

$$
q=\\frac{10000}{p^{2}}
$$

$$
p^{2}=\\frac{10000}{q}
$$

$$
p=\\left(\\frac{10000}{q}\\right)^{\\frac{1}{2}}
$$

$$
p=100 q^{-\\frac{1}{2}}
$$

That is a power of $q$ with exponent $-\\frac{1}{2}$, the reciprocal of the demand exponent $-2$. Price is a power of quantity, so the statement is True.`,
      `**D.** → False

Quadrupling the price multiplies demand by $4$ to the given exponent $-2$:

$$
\\frac{q(4p)}{q(p)}=4^{-2}
$$

$$
4^{-2}=\\frac{1}{16}
$$

Demand falls to one sixteenth, not to one quarter. A cut to one quarter would need exponent $-1$, because $4^{-1}=\\frac{1}{4}$. The claimed factor is wrong, so the statement is False.`,
      `**E.** → False

Demand is $q(p)=10000 p^{-2}$. Twenty euros is four times the recorded price, so demand scales by $\\frac{1}{16}$:

$$
q(20)=400\\cdot\\frac{1}{16}
$$

$$
q(20)=25
$$

The claimed $50$ is what exponent $-1$ would give. The curve sells $25$ subscriptions, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $q(10)=100$ and $q(20)=25$, not $50$.

**2.** The inverse $p=100 q^{-\\frac{1}{2}}$ is a power of $q$. Revenue $(2)$ falls with price. Quadrupling price multiplies demand by $\\frac{1}{16}$.

**Answer.** $A=10000$ | $q(10)=100$ | $q(20)=25$ | $R=\\frac{10000}{p}$`,
  },
  {
    id: `math-8-22`,
    case_id: `MATH 8.22`,
    title: `Audit Fees With a Fixed Charge on Top of a Power Term`,
    context: `An audit firm bills $C(n)=F+a n^{\\frac{1}{2}}$ for a client with $n>0$ accounts. One hundred accounts were billed at $500$, and four hundred accounts at $800$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The fixed engagement charge is $200$.`,
      `Total cost is a power function of the number of accounts.`,
      `An engagement covering $900$ accounts is billed at $1100$.`,
      `Cost per account falls as the book of accounts grows.`,
      `Doubling the accounts from $100$ to $200$ raises the bill by more than $50\\%$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The two invoices are the only way to unstick both unknowns. Because $100^{\\frac{1}{2}}=10$ and $400^{\\frac{1}{2}}=20$, they read:

$$
F+10a=500
$$

$$
F+20a=800
$$

Subtracting cancels the setup charge:

$$
(F+20a)-(F+10a)=800-500
$$

$$
10a=300
$$

$$
a=30
$$

The hundred-account invoice then pins $F$:

$$
F+10\\cdot 30=500
$$

$$
F+300=500
$$

$$
F=200
$$

The claimed fixed charge is $200$, so the statement is True.`,
      `**B.** → False

The two invoices give $C(n)=200+30 n^{\\frac{1}{2}}$. A pure power of $n$ would have the form $A n^{r}$ with no added constant. The intercept is $200\\neq 0$: even with no accounts the firm still bills the engagement fee. That extra constant kills the power shape, so the statement is False.`,
      `**C.** → True

The bill is $C(n)=200+30 n^{\\frac{1}{2}}$. At nine hundred accounts:

$$
900^{\\frac{1}{2}}=30
$$

$$
C(900)=200+30\\cdot 30
$$

$$
C(900)=200+900
$$

$$
C(900)=1100
$$

The claimed bill is $1100$, so the statement is True.`,
      `**D.** → True

The bill is $C(n)=200+30 n^{\\frac{1}{2}}$. Cost per account splits into two pieces:

$$
\\frac{C(n)}{n}=\\frac{200}{n}+30 n^{-\\frac{1}{2}}
$$

Both leftover exponents are negative, so each extra account dilutes the setup fee and also sits on a flatter square-root slope. Both terms fall as the book grows, so cost per account falls, so the statement is True.`,
      `**E.** → False

The bill is $C(n)=200+30 n^{\\frac{1}{2}}$. At two hundred accounts:

$$
C(200)=200+30\\cdot 200^{\\frac{1}{2}}
$$

$$
200^{\\frac{1}{2}}=10\\sqrt{2}
$$

$$
C(200)=200+300\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
300\\sqrt{2}\\approx 424
$$

$$
C(200)\\approx 624
$$

A rise of more than $50\\%$ from the hundred-account bill would require $1.5\\cdot 500=750$. The new bill is about $624$, a rise of about $25\\%$, well below $750$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 22,
    solution_overview: `The bill is $C(n)=F+a n^{\\frac{1}{2}}$ with $C(100)=500$ and $C(400)=800$.

**Part 1: Building the model.**

Let $n$ = accounts. Two unknowns need both invoices. Subtracting isolates $a$; either invoice then pins $F$.

**1. Translate: the two invoices.**

$$F+10a=500, \\qquad F+20a=800$$

**Part 2: The model.**

$$C(n)=200+30\\sqrt{n} \\tag{1}$$

**Part 3: Solve.**

**1.** $C(900)=1100$. The setup $F=200$ keeps $(1)$ from being a power of $n$. Unit cost falls.

**2.** $C(200)\\approx 624$, a rise of about $25\\%$ from $500$, not more than $50\\%$.

**Answer.** $F=200$ | $a=30$ | $C(900)=1100$ | $C(200)\\approx 624$`,
  },
  {
    id: `math-8-23`,
    case_id: `MATH 8.23`,
    title: `Fleet Growth Combined With Falling Emission Intensity`,
    context: `An electric-vehicle programme is tracked by two linked power laws. The fleet after $t>0$ years is $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles, and average emission intensity follows $e(a)=k a^{-\\frac{1}{2}}$ kilograms per thousand vehicles. When the fleet has sixteen thousand vehicles, intensity is $30$ kilograms. Total fleet emissions are $E=a\\,e(a)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After sixteen years, total fleet emissions are $480$.`,
      `Total fleet emissions are a power of time with exponent $\\frac{1}{2}$.`,
      `After one year, total fleet emissions are $240$.`,
      `Doubling elapsed time doubles total fleet emissions.`,
      `Emission intensity rises as the fleet grows.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

After sixteen years the fleet itself is

$$
a(16)=4\\cdot 16^{\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
a(16)=4\\cdot 4
$$

$$
a(16)=16
$$

That is the same fleet size as the intensity reading of $30$ kilograms. Total emissions are the product $E=a\\,e(a)$:

$$
E(16)=16\\cdot 30
$$

$$
E(16)=480
$$

The claimed total is $480$, so the statement is True.`,
      `**B.** → False

The intensity reading at sixteen thousand vehicles pins $k$:

$$
k\\cdot 16^{-\\frac{1}{2}}=30
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
\\frac{k}{4}=30
$$

$$
k=120
$$

Intensity is $e(a)=120 a^{-\\frac{1}{2}}$. Substituting the fleet $a(t)=4t^{\\frac{1}{2}}$:

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}
$$

$$
\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}=4^{-\\frac{1}{2}}\\cdot t^{-\\frac{1}{4}}
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\cdot\\frac{1}{2}\\,t^{-\\frac{1}{4}}
$$

$$
E(t)=240 t^{\\frac{1}{2}-\\frac{1}{4}}
$$

$$
E(t)=240 t^{\\frac{1}{4}}
$$

The composed exponent is $\\frac{1}{4}$, not $\\frac{1}{2}$. The $\\frac{1}{2}$ belongs to the fleet stage alone, so the statement is False.`,
      `**C.** → True

Composed emissions are $E(t)=240 t^{\\frac{1}{4}}$. After one year, $1^{\\frac{1}{4}}=1$:

$$
E(1)=240\\cdot 1
$$

$$
E(1)=240
$$

The claimed total is $240$, so the statement is True.`,
      `**D.** → False

Composed emissions are $E(t)=240 t^{\\frac{1}{4}}$. Doubling elapsed time multiplies the total by

$$
\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}
$$

$$
2^{\\frac{1}{4}}\\approx 1.189
$$

The composed exponent $\\frac{1}{4}$ is far below one, so the clock cannot double emissions when it doubles. Emissions rise by about $19\\%$, not by $100\\%$, so the statement is False.`,
      `**E.** → False

Intensity is $e(a)=120 a^{-\\frac{1}{2}}$. The exponent $-\\frac{1}{2}$ is negative: a larger fleet spreads the same technology thinner, so kilograms per thousand vehicles fall. A rising intensity would need a positive exponent, so the statement is False.`,
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

**1.** $E(16)=480$ and $E(1)=240$. The composed exponent is $\\frac{1}{4}$, not $\\frac{1}{2}$.

**2.** Doubling time multiplies $E$ by $2^{\\frac{1}{4}}$. Intensity falls as $a$ grows.

**Answer.** $k=120$ | $E(t)=240 t^{\\frac{1}{4}}$ | $E(16)=480$`,
  },
  {
    id: `math-8-24`,
    case_id: `MATH 8.24`,
    title: `Pipeline Capacity, Inversion, and a Change of Units`,
    context: `Flow capacity through a pipe follows $Q(d)=A d^{\\frac{5}{2}}$ litres per second, where $d>0$ is the internal diameter in centimetres. A bench test on a $4$ cm pipe measured $64$ litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the capacity law is $A=2$.`,
      `A capacity of $250$ litres per second requires a diameter above $10$ cm.`,
      `Doubling the diameter multiplies capacity by more than $5$.`,
      `Measuring the diameter in millimetres instead of centimetres leaves the coefficient unchanged.`,
      `Capacity per centimetre of diameter is the same at every diameter.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The bench test pins the coefficient. Substituting $Q(4)=64$:

$$
A\\cdot 4^{\\frac{5}{2}}=64
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{5}{2}}=\\bigl(4^{\\frac{1}{2}}\\bigr)^{5}
$$

$$
\\bigl(4^{\\frac{1}{2}}\\bigr)^{5}=2^{5}
$$

$$
2^{5}=32
$$

$$
A\\cdot 32=64
$$

$$
A=2
$$

The claimed coefficient is $2$, so the statement is True.`,
      `**B.** → False

Capacity is $Q(d)=2d^{\\frac{5}{2}}$. Setting capacity equal to $250$:

$$
2d^{\\frac{5}{2}}=250
$$

$$
d^{\\frac{5}{2}}=125
$$

$$
d=125^{\\frac{2}{5}}
$$

$$
125=5^{3}
$$

$$
d=\\bigl(5^{3}\\bigr)^{\\frac{2}{5}}
$$

$$
d=5^{\\frac{6}{5}}
$$

$$
5^{\\frac{6}{5}}=5\\cdot 5^{\\frac{1}{5}}
$$

$$
5^{\\frac{1}{5}}\\approx 1.38
$$

$$
d\\approx 6.90
$$

The required diameter is about $6.90$ cm, which is below $10$ cm, so the statement is False.`,
      `**C.** → True

Doubling the diameter multiplies capacity by $2$ to the given exponent:

$$
\\frac{Q(2d)}{Q(d)}=2^{\\frac{5}{2}}
$$

$$
2^{\\frac{5}{2}}=4\\sqrt{2}
$$

$$
4\\sqrt{2}\\approx 5.66
$$

The factor is about $5.66$, which is more than $5$. The exponent $\\frac{5}{2}$ is well above one, so capacity outruns the diameter, so the statement is True.`,
      `**D.** → False

Capacity is $Q=2d^{\\frac{5}{2}}$ with $d$ in centimetres. A millimetre is one tenth of a centimetre, so $d=\\frac{d_{\\mathrm{mm}}}{10}$:

$$
Q=2\\left(\\frac{d_{\\mathrm{mm}}}{10}\\right)^{\\frac{5}{2}}
$$

$$
Q=2\\cdot 10^{-\\frac{5}{2}}d_{\\mathrm{mm}}^{\\frac{5}{2}}
$$

$$
10^{\\frac{5}{2}}=10^{2}\\cdot\\sqrt{10}\\approx 316.2
$$

$$
2\\cdot 10^{-\\frac{5}{2}}\\approx 0.0063
$$

The millimetre-unit coefficient is about $0.0063$, not $2$. Changing the unit of $d$ changes the coefficient, so the statement is False.`,
      `**E.** → False

Capacity is $Q(d)=2d^{\\frac{5}{2}}$. Capacity per centimetre of diameter lowers the exponent by one:

$$
\\frac{Q(d)}{d}=2d^{\\frac{3}{2}}
$$

The remaining exponent $\\frac{3}{2}$ is positive, so the intensity rises with diameter. A constant intensity would need leftover exponent $0$. It is not the same at every size, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 24,
    solution_overview: `Capacity is $Q(d)=A d^{\\frac{5}{2}}$ litres per second with $Q(4)=64$.

**Part 1: Building the model.**

Let $d$ = diameter in centimetres. The exponent is given, so the bench test fixes $A$.

**1. Translate: the bench test.**

$$A\\cdot 4^{\\frac{5}{2}}=64$$

**Part 2: The model.**

$$Q(d)=2d^{\\frac{5}{2}} \\tag{1}$$

**Part 3: Solve.**

**1.** $A=2$. Doubling $d$ multiplies $Q$ by $4\\sqrt{2}\\approx 5.66$.

**2.** $Q=250$ inverts to $d\\approx 6.90$ cm, below $10$. Writing $d$ in millimetres changes the coefficient. $Q/d=2d^{\\frac{3}{2}}$ is not constant.

**Answer.** $A=2$ | doubling factor $4\\sqrt{2}$ | $d\\approx 6.90$ for $Q=250$`,
  },
  {
    id: `math-8-25`,
    case_id: `MATH 8.25`,
    title: `From Radius Growth to the Area a Service Covers`,
    context: `A delivery hub's service radius follows $r(t)=A t^{\\frac{1}{2}}$ kilometres after $t>0$ hours. After four hours the radius is six kilometres. The area covered is the disc $S=\\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After four hours the covered area is $36\\pi$ square kilometres.`,
      `The area covered is proportional to elapsed time.`,
      `Doubling elapsed time doubles the area covered.`,
      `After nine hours the covered area has already reached $100\\pi$ square kilometres.`,
      `The time needed for a given area is itself a power function of that area.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

After four hours the radius is the recorded six kilometres. The covered area is the disc $S=\\pi r^{2}$:

$$
S(4)=\\pi\\cdot 6^{2}
$$

$$
6^{2}=36
$$

$$
S(4)=36\\pi
$$

The claimed area is $36\\pi$ square kilometres, so the statement is True.`,
      `**B.** → True

The four-hour radius pins $A$:

$$
A\\cdot 4^{\\frac{1}{2}}=6
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
A\\cdot 2=6
$$

$$
A=3
$$

The radius is $r(t)=3t^{\\frac{1}{2}}$. Area squares that radius:

$$
S(t)=\\pi\\bigl(3t^{\\frac{1}{2}}\\bigr)^{2}
$$

$$
S(t)=9\\pi t
$$

That is a constant times elapsed time. The square undoes the square root, so area grows in lockstep with the clock. Area is proportional to elapsed time, so the statement is True.`,
      `**C.** → True

Covered area is $S(t)=9\\pi t$. Doubling elapsed time multiplies area by

$$
\\frac{S(2t)}{S(t)}=2
$$

The radius itself only grows by $\\sqrt{2}$, but the disc squares that factor into $2$. Doubling time doubles area, so the statement is True.`,
      `**D.** → False

Covered area is $S(t)=9\\pi t$. After nine hours:

$$
S(9)=9\\pi\\cdot 9
$$

$$
S(9)=81\\pi
$$

The area $100\\pi$ would need $t=\\frac{100}{9}\\approx 11.1$ hours. Nine hours is too soon. The covered area is $81\\pi$, so the statement is False.`,
      `**E.** → True

Covered area is $S(t)=9\\pi t$. Solving for time:

$$
t=\\frac{S}{9\\pi}
$$

That is a constant times $S^{1}$, a power of area with exponent $1$. A linear law inverts to another linear law. Time is a power function of area, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $S(4)=36\\pi$ and $S(9)=81\\pi$, not $100\\pi$.

**2.** $(2)$ is proportional to $t$, so doubling time doubles area. The inverse $t=S/(9\\pi)$ is a power of $S$.

**Answer.** $A=3$ | $S(t)=9\\pi t$ | $S(4)=36\\pi$ | $S(9)=81\\pi$`,
  },
  {
    id: `math-8-26`,
    case_id: `MATH 8.26`,
    title: `Two Support Contracts, One Crossing and One Cap`,
    context: `A helpdesk compares two support contracts for $u>0$ tickets a month. Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ and never charges more than $400$. A filed invoice shows $36$ tickets billed at $240$. Plan B bills a flat $5$ per ticket with no cap. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two plans bill the same amount at $64$ tickets.`,
      `Below that crossing, Plan B is the cheaper contract.`,
      `At $144$ tickets Plan A bills $480$.`,
      `Plan A's cap eventually binds as ticket volume grows.`,
      `Plan A's cost per ticket is the same at every ticket volume.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The filed invoice pins the square-root coefficient. Because $36^{\\frac{1}{2}}=6$:

$$
a\\cdot 6=240
$$

$$
a=40
$$

Uncapped Plan A is then $40 u^{\\frac{1}{2}}$, and Plan B is $5u$. Setting the two schedules equal:

$$
40 u^{\\frac{1}{2}}=5u
$$

For $u>0$, divide both sides by $5 u^{\\frac{1}{2}}$:

$$
8=u^{\\frac{1}{2}}
$$

$$
u=64
$$

Both bills at that volume are $40\\cdot 8=320$ and $5\\cdot 64=320$. The cap is $400$, and $320<400$, so the cap is still slack. They match at $64$ tickets, so the statement is True.`,
      `**B.** → True

The two uncapped bills meet at $64$ tickets. Plan B is cheaper while $5u<40 u^{\\frac{1}{2}}$. For $u>0$:

$$
u^{\\frac{1}{2}}<8
$$

$$
u<64
$$

Below the crossing the linear bill starts at zero and has not yet caught the square root, so Plan B is the cheaper contract, so the statement is True.`,
      `**C.** → False

Uncapped Plan A is $40 u^{\\frac{1}{2}}$, never charging more than $400$. At $144$ tickets:

$$
144^{\\frac{1}{2}}=12
$$

$$
40\\cdot 12=480
$$

The billed amount is $\\min\\{480,400\\}$. Because $480>400$, the cap binds and Plan A bills $400$, not $480$. The claimed $480$ is the uncapped square-root reading, so the statement is False.`,
      `**D.** → True

Uncapped Plan A is $40 u^{\\frac{1}{2}}$. The cap binds from the volume where that schedule first reaches $400$:

$$
40 u^{\\frac{1}{2}}=400
$$

$$
u^{\\frac{1}{2}}=10
$$

$$
u=100
$$

The square-root bill is strictly increasing, so every volume above $100$ tickets is trimmed to $400$. The cap does bind as ticket volume grows, so the statement is True.`,
      `**E.** → False

While the cap is slack, Plan A bills $40 u^{\\frac{1}{2}}$. Cost per ticket is

$$
\\frac{C_A(u)}{u}=40 u^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so unit cost falls as volume rises. A constant unit cost would need exponent $1$ on the bill. Plan A's cost per ticket is not the same at every volume, so the statement is False.`,
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

**1.** Uncapped crossing at $u=64$ costing $320$. Plan B is cheaper for $u<64$. The cap binds from $u=100$.

**2.** At $u=144$ the uncapped value $480$ is trimmed to $400$. Unit cost on the square-root piece falls.

**Answer.** $a=40$ | crossing $u=64$ | cap from $u=100$ | $C_A(144)=400$`,
  },
  {
    id: `math-8-27`,
    case_id: `MATH 8.27`,
    title: `An Eighty Percent Learning Curve Meeting a Materials Floor`,
    context: `Unit cost on a new assembly line follows $c(N)=c_1 N^{-b}$ for cumulative output $N>0$. Every doubling of cumulative output multiplies unit cost by $0.8$, and the first unit cost $1000$. Materials alone cost $400$ per unit, so the curve cannot describe costs below that floor. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After three successive doublings the modelled unit cost is $512$.`,
      `The exponent of the learning curve is $-0.8$.`,
      `After $8$ units the modelled unit cost is $500$.`,
      `Quadrupling cumulative output halves the unit cost.`,
      `The materials floor is already binding after $8$ units.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Three successive doublings take the first unit to $N=8$, so the modelled cost is three factors of $0.8$.

$$
c(1)=1000
$$

After the first doubling, $N=2$:

$$
c(2)=1000\\cdot 0.8
$$

$$
c(2)=800
$$

After the second doubling, $N=4$:

$$
c(4)=800\\cdot 0.8
$$

$$
c(4)=640
$$

After the third doubling, $N=8$:

$$
c(8)=640\\cdot 0.8
$$

$$
c(8)=512
$$

The modelled unit cost is $512$, so the statement is True.`,
      `**B.** → False

Every doubling multiplies unit cost by $0.8$, so the exponent is the log-ratio of that rule, not the factor $0.8$ itself:

$$
2^{-b}=0.8
$$

$$
b=-\\frac{\\ln 0.8}{\\ln 2}
$$

$$
b\\approx 0.3219
$$

The learning-curve exponent on $N$ is therefore about $-0.322$, not $-0.8$. An exponent of $-0.8$ would require $2^{-0.8}\\approx 0.574$, a much steeper doubling cut than $0.8$. The claimed exponent is wrong, so the statement is False.`,
      `**C.** → False

Three doublings already put the modelled unit cost at $512$. The claimed figure is $500$, which is not on the doubling sequence $1000$, $800$, $640$, $512$. The modelled unit cost is $512$, not $500$, so the statement is False.`,
      `**D.** → False

Quadrupling cumulative output is two doublings, hence two factors of $0.8$:

$$
\\frac{c(4N)}{c(N)}=0.8^{2}
$$

$$
0.8^{2}=0.64
$$

Unit cost falls to $64\\%$ of its previous value, not to one half. A halving would need two factors whose product is $0.5$, so the statement is False.`,
      `**E.** → False

After eight units the modelled cost is $512$. The materials floor is $400$, and $512>400$. The modelled cost still sits above the floor, so the floor has not yet bound, so the statement is False.`,
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

**1.** $c(8)=512$, not $500$. The exponent is $-0.322$, not $-0.8$. Two doublings multiply cost by $0.64$, not by $0.5$.

**2.** $512>400$, so the floor is not yet binding at $N=8$. It binds near $N\\approx 17$.

**Answer.** $b\\approx 0.322$ | $c(8)=512$ | floor not binding at $N=8$`,
  },
  {
    id: `math-8-28`,
    case_id: `MATH 8.28`,
    title: `Advertising Revenue Against a Proportional Platform Fee`,
    context: `A merchant's sales revenue from an advertising spend $x>0$ follows $R(x)=A x^{\\frac{1}{2}}$. At a spend of $100$ the campaign brings in $900$. The platform charges a fee $F(x)=6x$ on the same spend. Net gain is $R(x)-F(x)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The net gain is zero at a spend of $225$.`,
      `The net gain is positive at every spend above $225$.`,
      `At a spend of $100$ the net gain is $300$.`,
      `Doubling the spend doubles revenue.`,
      `Revenue per euro of spend rises as the campaign grows.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded campaign pins the coefficient. Because $100^{\\frac{1}{2}}=10$:

$$
A\\cdot 10=900
$$

$$
A=90
$$

Revenue is then $R(x)=90 x^{\\frac{1}{2}}$ and the fee is $F(x)=6x$. Net gain is zero when revenue equals the fee:

$$
90 x^{\\frac{1}{2}}=6x
$$

For $x>0$, divide both sides by $6 x^{\\frac{1}{2}}$:

$$
15=x^{\\frac{1}{2}}
$$

$$
x=225
$$

At that spend both schedules read $90\\cdot 15=1350$. Net gain is zero at a spend of $225$, so the statement is True.`,
      `**B.** → False

Net gain is $N(x)=90 x^{\\frac{1}{2}}-6x$. Factor out $6 x^{\\frac{1}{2}}$:

$$
N(x)=6 x^{\\frac{1}{2}}\\bigl(15-x^{\\frac{1}{2}}\\bigr)
$$

For $x>0$ the prefactor is positive, so the sign of $N$ is the sign of $15-x^{\\frac{1}{2}}$. That factor is positive on $(0,225)$ and negative for $x>225$. Past the crossing the linear fee is the steeper schedule, so the net is negative, so the statement is False.`,
      `**C.** → True

At a spend of $100$ the campaign brings in the recorded $900$. The platform fee at the same spend is

$$
F(100)=6\\cdot 100
$$

$$
F(100)=600
$$

Net gain is the difference:

$$
N(100)=900-600
$$

$$
N(100)=300
$$

The claimed net is $300$, so the statement is True.`,
      `**D.** → False

Doubling the spend multiplies revenue by $2$ to the given exponent $\\frac{1}{2}$:

$$
\\frac{R(2x)}{R(x)}=2^{\\frac{1}{2}}
$$

$$
\\sqrt{2}\\approx 1.414
$$

The exponent $\\frac{1}{2}$ is below one, so revenue cannot keep pace with the spend. The factor is about $1.414$, not $2$, so the statement is False.`,
      `**E.** → False

Revenue is $R(x)=90 x^{\\frac{1}{2}}$. Revenue per euro of spend lowers the exponent by one:

$$
\\frac{R(x)}{x}=90 x^{-\\frac{1}{2}}
$$

The leftover exponent is negative: each extra euro of spend still adds sales, but less than the euro before it. The return per euro falls as the campaign grows. It does not rise, so the statement is False.`,
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

**1.** $N(100)=300$. The unique positive root of $(1)$ is $x=225$, and $N<0$ for $x>225$.

**2.** Doubling $x$ multiplies $R$ by $\\sqrt{2}$. Revenue per euro falls.

**Answer.** $A=90$ | $N(100)=300$ | break-even at $x=225$`,
  },
  {
    id: `math-8-29`,
    case_id: `MATH 8.29`,
    title: `Calibrating a Two-Stage Production Chain`,
    context: `A plant runs two stages. Labour $L>0$ hours yields material $m(L)=A L^{\\frac{1}{2}}$ tonnes, and material is converted by $g(m)=B m^{\\frac{3}{2}}$ finished units. One hundred labour hours yielded forty tonnes of material, and a run on nine tonnes of material produced fifty-four finished units. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The material stage is $m(L)=4L^{\\frac{1}{2}}$.`,
      `Finished output as a function of labour is $g=16L^{\\frac{3}{4}}$.`,
      `Doubling labour hours doubles finished output.`,
      `Finished output per labour hour falls as labour rises.`,
      `The labour needed for a given finished count is itself a power of that count.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

One hundred labour hours yielded forty tonnes, so that record pins the material coefficient:

$$
A\\cdot 100^{\\frac{1}{2}}=40
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
A\\cdot 10=40
$$

$$
A=4
$$

The recovered material stage is $m(L)=4L^{\\frac{1}{2}}$. The claimed law matches, so the statement is True.`,
      `**B.** → True

The labour record gives $A=4$, so material is $m=4L^{\\frac{1}{2}}$. Nine tonnes of material produced fifty-four finished units, which pins $B$:

$$
B\\cdot 9^{\\frac{3}{2}}=54
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=3^{3}
$$

$$
3^{3}=27
$$

$$
B\\cdot 27=54
$$

$$
B=2
$$

Compose $g=2 m^{\\frac{3}{2}}$ with $m=4L^{\\frac{1}{2}}$:

$$
g=2\\bigl(4L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}
$$

$$
\\bigl(4L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}=4^{\\frac{3}{2}}\\cdot L^{\\frac{3}{4}}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
g=2\\cdot 8\\cdot L^{\\frac{3}{4}}
$$

$$
g=16L^{\\frac{3}{4}}
$$

Finished output is $16L^{\\frac{3}{4}}$, so the statement is True.`,
      `**C.** → False

Finished output is $g=16L^{\\frac{3}{4}}$. Doubling labour multiplies output by

$$
\\frac{g(2L)}{g(L)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.68
$$

The composed exponent $\\frac{3}{4}$ is below one, so doubling labour cannot double output. The factor is about $1.68$, not $2$, so the statement is False.`,
      `**D.** → True

Finished output is $g=16L^{\\frac{3}{4}}$. Output per labour hour is

$$
\\frac{g}{L}=16 L^{-\\frac{1}{4}}
$$

The leftover exponent is negative: each extra hour still adds finished units, but fewer than the hour before it, so average product falls as the crew grows. Output per hour falls as labour rises, so the statement is True.`,
      `**E.** → True

Finished output is $g=16L^{\\frac{3}{4}}$. Solving for labour:

$$
L=\\left(\\frac{g}{16}\\right)^{\\frac{4}{3}}
$$

A power with a nonzero exponent inverts to another power. Labour is a power of the finished count, so the statement is True.`,
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

**1.** Doubling $L$ multiplies $g$ by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. Output per hour falls. The inverse of $(2)$ is a power of $g$.

**Answer.** $A=4$ | $B=2$ | $g=16L^{\\frac{3}{4}}$`,
  },
  {
    id: `math-8-30`,
    case_id: `MATH 8.30`,
    title: `Calibrated Demand, Derived Revenue, and a Fixed Charge`,
    context: `A niche publisher faces demand $q(p)=A p^{-\\frac{3}{2}}$ copies a month at a price $p>0$. A price of four euros sells two hundred and fifty copies. Revenue is $R=pq$, and the operation carries a fixed monthly charge of $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At a price of $25$, monthly revenue is $400$.`,
      `Revenue is a power function of price with exponent $-\\frac{1}{2}$.`,
      `The fixed charge is covered only at prices below $16$.`,
      `Doubling the price halves revenue.`,
      `Revenue falls as the price rises.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The four-euro sale pins the coefficient. Substituting $q(4)=250$:

$$
A\\cdot 4^{-\\frac{3}{2}}=250
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
A\\cdot\\frac{1}{8}=250
$$

$$
A=2000
$$

Demand is $q(p)=2000 p^{-\\frac{3}{2}}$. Revenue multiplies price by quantity:

$$
R(p)=p\\cdot 2000 p^{-\\frac{3}{2}}
$$

$$
R(p)=2000 p^{-\\frac{1}{2}}
$$

At a price of $25$, $25^{\\frac{1}{2}}=5$:

$$
R(25)=2000\\cdot\\frac{1}{5}
$$

$$
R(25)=400
$$

Monthly revenue is $400$, so the statement is True.`,
      `**B.** → True

Revenue is $R(p)=2000 p^{-\\frac{1}{2}}$. That is a power of price with exponent $-\\frac{1}{2}$, one more than the demand exponent $-\\frac{3}{2}$:

$$
1-\\frac{3}{2}=-\\frac{1}{2}
$$

The claimed exponent is the revenue exponent, so the statement is True.`,
      `**C.** → False

Revenue is $R(p)=2000 p^{-\\frac{1}{2}}$. The charge is covered while

$$
2000 p^{-\\frac{1}{2}}\\ge 400
$$

$$
5\\ge\\sqrt{p}
$$

$$
p\\le 25
$$

The threshold is $25$, not $16$. At the claimed cutoff, $16^{\\frac{1}{2}}=4$:

$$
R(16)=\\frac{2000}{4}
$$

$$
R(16)=500
$$

and $500>400$, so the charge is still covered at $p=16$. The figure $16$ is what appears if the demand exponent is inverted instead of the revenue exponent. The charge is covered at prices up to $25$, so the statement is False.`,
      `**D.** → False

Revenue is $R(p)=2000 p^{-\\frac{1}{2}}$. Doubling the price multiplies revenue by

$$
\\frac{R(2p)}{R(p)}=2^{-\\frac{1}{2}}
$$

$$
2^{-\\frac{1}{2}}\\approx 0.707
$$

Revenue falls to about $71\\%$ of its previous value, not to one half. A halving would need exponent $-1$, so the statement is False.`,
      `**E.** → True

Revenue is $R(p)=2000 p^{-\\frac{1}{2}}$. The exponent $-\\frac{1}{2}$ is negative and the coefficient is positive, so each extra euro of price cuts quantity by more than enough to shrink the product $pq$. Revenue falls as the price rises, so the statement is True.`,
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

**1.** $R(25)=400$. Covering the charge requires $p\\le 25$, not $p\\le 16$.

**2.** $(2)$ is a power with exponent $-\\frac{1}{2}$, so revenue falls in price. Doubling $p$ multiplies $R$ by $1/\\sqrt{2}$.

**Answer.** $A=2000$ | $R(p)=2000 p^{-\\frac{1}{2}}$ | $R(25)=400$ | cover for $p\\le 25$`,
  },
  {
    id: `math-8-31`,
    case_id: `MATH 8.31`,
    title: `Packing Output Recovered From a Shift Extension`,
    context: `A packing station's output follows $N(h)=A h^{\\frac{2}{3}}$ items after $h>0$ hours of shift, and the coefficient is never logged. Extending a shift from $8$ to $27$ hours added exactly $90$ items. A rush order of $250$ items has to be packed in a single shift. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An extra hour of packing adds fewer items after a long shift than after a short one.`,
      `A $27$-hour shift packs more than $150$ items.`,
      `Doubling any shift doubles the number of items packed.`,
      `The $250$-item order can be filled inside a $27$-hour shift.`,
      `Items packed per hour of shift is itself a power function of the shift length.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The shift extension gives $A=18$, so $N(h)=18h^{\\frac{2}{3}}$. An extra hour is the slope. Differentiating brings the exponent down by one:

$$
N'(h)=18\\cdot\\frac{2}{3}h^{\\frac{2}{3}-1}
$$

$$
N'(h)=12h^{-\\frac{1}{3}}
$$

The leftover exponent is negative, so the slope falls as the shift lengthens. After eight hours:

$$
N'(8)=12\\cdot 8^{-\\frac{1}{3}}
$$

$$
8^{-\\frac{1}{3}}=\\frac{1}{2}
$$

$$
N'(8)=12\\cdot\\frac{1}{2}
$$

$$
12\\cdot\\frac{1}{2}=6
$$

After twenty-seven hours:

$$
N'(27)=12\\cdot 27^{-\\frac{1}{3}}
$$

$$
27^{-\\frac{1}{3}}=\\frac{1}{3}
$$

$$
N'(27)=12\\cdot\\frac{1}{3}
$$

$$
12\\cdot\\frac{1}{3}=4
$$

An extra hour adds $6$ items after a short shift and only $4$ after a long one, so the statement is True.`,
      `**B.** → True

The packing law is $N(h)=18h^{\\frac{2}{3}}$. A twenty-seven hour count is

$$
N(27)=18\\cdot 27^{\\frac{2}{3}}
$$

$$
27^{\\frac{2}{3}}=9
$$

$$
N(27)=18\\cdot 9
$$

$$
18\\cdot 9=162
$$

$$
162>150
$$

The claimed threshold is $150$ items, and $162$ clears it, so the statement is True.`,
      `**C.** → False

Doubling a shift would double packed items only if the exponent were $1$. With exponent $\\frac{2}{3}$ the scale factor is

$$
\\frac{N(2h)}{N(h)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

Two thirds is below one, so the factor is about $1.59$, not $2$. The count rises, but not in lockstep with the clock, so the statement is False.`,
      `**D.** → False

Twenty-seven hours pack $162$ items, which is already short of $250$. Inverting the law at the order size names the hours that would suffice:

$$
18h^{\\frac{2}{3}}=250
$$

$$
h^{\\frac{2}{3}}=\\frac{250}{18}
$$

$$
\\frac{250}{18}=\\frac{125}{9}
$$

$$
h=\\left(\\frac{125}{9}\\right)^{\\frac{3}{2}}
$$

$$
h\\approx 51.8
$$

The order needs about $52$ hours, not $27$, so the statement is False.`,
      `**E.** → True

The packing law is $N(h)=18h^{\\frac{2}{3}}$. Items packed per hour divide by shift length, which subtracts $1$ from the exponent:

$$
\\frac{N(h)}{h}=18h^{\\frac{2}{3}-1}
$$

$$
\\frac{N(h)}{h}=18h^{-\\frac{1}{3}}
$$

That is still $A h^{r}$, now with exponent $-\\frac{1}{3}$. The hourly rate is a power of shift length, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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
      `The mounting's $250$ N rating is first reached at a speed above $30$ m/s.`,
      `Doubling the airspeed more than triples the drag.`,
      `At $16$ m/s the rig absorbs more than $2$ kW.`,
      `The airspeed that produces a given drag is itself a power function of that drag.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The two runs give $F(v)=2v^{\\frac{3}{2}}$. Absorbed power multiplies drag by speed, which adds one to the exponent:

$$
P(v)=2v^{\\frac{3}{2}}\\cdot v
$$

$$
P(v)=2v^{\\frac{5}{2}}
$$

That is $A v^{r}$ with coefficient $2$ and exponent $\\frac{5}{2}$. Power grows even faster than drag, but it is still a monomial in airspeed, so the statement is True.`,
      `**B.** → False

The recovered drag is $F(v)=2v^{\\frac{3}{2}}$. The rating is a drag of $250$ N, so invert:

$$
2v^{\\frac{3}{2}}=250
$$

$$
v^{\\frac{3}{2}}=125
$$

$$
v=125^{\\frac{2}{3}}
$$

$$
125=5^{3}
$$

$$
v=(5^{3})^{\\frac{2}{3}}
$$

$$
(5^{3})^{\\frac{2}{3}}=5^{2}
$$

$$
5^{2}=25
$$

The claimed threshold is a speed above $30$ m/s, and $25$ is not above $30$. The rating is reached at $25$ m/s, so the statement is False.`,
      `**C.** → False

The force ratio already gave $r=\\frac{3}{2}$. Doubling airspeed multiplies drag by $2$ to that power:

$$
\\frac{F(2v)}{F(v)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=\\sqrt{2^{3}}
$$

$$
\\sqrt{2^{3}}=\\sqrt{8}
$$

$$
\\sqrt{8}=2\\sqrt{2}
$$

$$
2\\sqrt{2}\\approx 2.828
$$

$$
2.828<3
$$

The factor is more than a doubling but less than a tripling. Doubling airspeed multiplies drag by about $2.83$, so the statement is False.`,
      `**D.** → True

Absorbed power is force times speed. At the faster logged run the force is already $128$ N:

$$
P(16)=128\\cdot 16
$$

$$
128\\cdot 16=2048
$$

That is $2048$ watts, or $2.048$ kilowatts, which is more than $2$ kW, so the statement is True.`,
      `**E.** → True

The recovered law is $F=2v^{\\frac{3}{2}}$. A power with a nonzero exponent inverts to another power. Solving for airspeed:

$$
\\frac{F}{2}=v^{\\frac{3}{2}}
$$

$$
v=\\left(\\frac{F}{2}\\right)^{\\frac{2}{3}}
$$

$$
v=2^{-\\frac{2}{3}}F^{\\frac{2}{3}}
$$

That is $A F^{r}$ with exponent $\\frac{2}{3}$. The airspeed that produces a given drag is a power of that drag, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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
      `Raising price by $44\\%$ cuts quantity by exactly $20\\%$.`,
      `To reduce monthly quantity to $200$ units, the price must rise to $40$.`,
      `Revenue does not depend on the price.`,
      `At a price of $25$ the utility sells fewer than $250$ units.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

The recorded pair gives $A=1200$, so demand is $q(p)=1200p^{-\\frac{1}{2}}$. Revenue multiplies by price, which raises the exponent by one:

$$
R(p)=p\\cdot 1200p^{-\\frac{1}{2}}
$$

$$
R(p)=1200p^{\\frac{1}{2}}
$$

The leftover exponent $\\frac{1}{2}$ is positive, so $R$ rises with $p$. Quantity falls when price rises, but not fast enough to offset the higher price. At the recorded price:

$$
R(16)=1200\\cdot 4
$$

$$
1200\\cdot 4=4800
$$

At a higher price:

$$
R(25)=1200\\cdot 5
$$

$$
1200\\cdot 5=6000
$$

$$
6000>4800
$$

Revenue rises as the price rises, so the statement is True.`,
      `**B.** → False

A finite $44\\%$ rise acts through the exact power of the multiplier $1.44$, and $A$ cancels:

$$
\\frac{q(1.44p)}{q(p)}=1.44^{-\\frac{1}{2}}
$$

$$
1.44=\\left(\\frac{6}{5}\\right)^{2}
$$

$$
1.44^{-\\frac{1}{2}}=\\frac{5}{6}
$$

The remaining fraction of quantity is $\\frac{5}{6}$, so the cut is

$$
1-\\frac{5}{6}=\\frac{1}{6}
$$

$$
\\frac{1}{6}\\approx 16.7\\%
$$

Multiplying $44\\%$ by the elasticity $-\\frac{1}{2}$ would give $22\\%$, and rounding that toward $20\\%$ is no better. Quantity falls by about $16.7\\%$, not by $20\\%$, so the statement is False.`,
      `**C.** → False

The calibrated demand is $q(p)=1200p^{-\\frac{1}{2}}$. A target of $200$ units inverts the curve:

$$
200=1200\\cdot p^{-\\frac{1}{2}}
$$

$$
200=\\frac{1200}{\\sqrt{p}}
$$

$$
\\sqrt{p}=\\frac{1200}{200}
$$

$$
\\frac{1200}{200}=6
$$

$$
p=36
$$

Quantity has to fall by a third from the observed $300$, and squaring the inversion makes the price move larger than that proportion, though it still lands short of $40$. The target arrives at a price of $36$, so the statement is False.`,
      `**D.** → False

Demand's exponent is $-\\frac{1}{2}$, so revenue is $R(p)=1200p^{\\frac{1}{2}}$. Price-independent revenue would need a zero revenue exponent, which arises only when demand's exponent is exactly $-1$.

$$
\\frac{1}{2}\\neq 0
$$

Two prices confirm the dependence: $R(16)=4800$ and $R(64)=9600$. Revenue not only depends on price but moves in the same direction as it, so the statement is False.`,
      `**E.** → True

The calibrated demand is $q(p)=1200p^{-\\frac{1}{2}}$. At price $25$:

$$
q(25)=1200\\cdot 25^{-\\frac{1}{2}}
$$

$$
25^{-\\frac{1}{2}}=\\frac{1}{5}
$$

$$
q(25)=\\frac{1200}{5}
$$

$$
\\frac{1200}{5}=240
$$

$$
240<250
$$

The utility sells $240$ units, which is fewer than $250$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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

**2.** The elasticity is the exponent of (1):

$$\\text{El}_{p}q=-\\frac{1}{2}$$

**3.** Quantities along the curve:

$$q(16)=300 \\qquad q(25)=240 \\qquad q(36)=200 \\qquad q(64)=150$$

**4.** A $44\\%$ price rise uses the exact multiplier $1.44$:

$$1.44^{-\\frac{1}{2}}=\\frac{5}{6} \\qquad \\text{quantity falls by }\\frac{1}{6}$$

**5.** Because $-\\frac{1}{2}+1=\\frac{1}{2}>0$, revenue rises with price; it would be flat only at elasticity $-1$:

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
      `The licensed ceiling of $1024$ tonnes is reached at a feed of $64$.`,
      `Once the licence binds, daily shipped output is no longer a power function of the feed.`,
      `A feed of $8$ produces $32$ tonnes.`,
      `Output per cubic metre of fuel rises as the feed increases.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Doubling output is an inverse-scale question: the feed multiplier is $2$ raised to the reciprocal of the given exponent $\\frac{4}{3}$.

$$
\\left(\\frac{x}{27}\\right)^{\\frac{4}{3}}=2
$$

$$
\\frac{x}{27}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

A doubled feed would be the factor $2$. Because the exponent $\\frac{4}{3}$ exceeds $1$, output grows faster than feed, so doubling output takes less than a doubling of feed. The required factor is about $1.68$, not more than $2$, so the statement is False.`,
      `**B.** → True

The test firing gives $A=4$, so $y(x)=4x^{\\frac{4}{3}}$. Set output equal to the ceiling:

$$
4x^{\\frac{4}{3}}=1024
$$

$$
x^{\\frac{4}{3}}=256
$$

$$
x=256^{\\frac{3}{4}}
$$

$$
256=4^{4}
$$

$$
x=(4^{4})^{\\frac{3}{4}}
$$

$$
(4^{4})^{\\frac{3}{4}}=4^{3}
$$

$$
4^{3}=64
$$

The licensed ceiling is reached at a feed of $64$, so the statement is True.`,
      `**C.** → True

The licence binds at feed $64$. Shipped output is $\\min(4x^{\\frac{4}{3}},1024)$. For $x\\le 64$ that coincides with the power $4x^{\\frac{4}{3}}$. For $x>64$ shipped output is the constant $1024$, and a constant on an interval of feeds is not a power of $x$ with a single exponent. Past the licence the graph is a horizontal cap rather than $A x^{r}$, so the statement is True.`,
      `**D.** → False

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. At a feed of $8$:

$$
8^{\\frac{4}{3}}=(8^{\\frac{1}{3}})^{4}
$$

$$
(8^{\\frac{1}{3}})^{4}=2^{4}
$$

$$
2^{4}=16
$$

$$
y(8)=4\\cdot 16
$$

$$
4\\cdot 16=64
$$

The claimed $32$ is what reading the exponent as $1$ would give. The kiln produces $64$ tonnes, so the statement is False.`,
      `**E.** → True

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. Output per cubic metre divides by the feed, which subtracts $1$ from the exponent:

$$
\\frac{y(x)}{x}=4x^{\\frac{4}{3}-1}
$$

$$
\\frac{y(x)}{x}=4x^{\\frac{1}{3}}
$$

The leftover exponent is positive, so the average product rises with feed. Fuel efficiency improves with scale, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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
      `The composition of the two stages is a power function with exponent $1$.`,
      `Starting with a raw reading of $125$, the two stages produce index $225$ and then return raw reading $125$.`,
      `Applying the stages in the other order gives something other than the original input.`,
      `A raw reading of $64$ is sent out with index $108$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded pair gives $A=9$, so calibration is $f(x)=9x^{\\frac{2}{3}}$. Reporting after it is the composition $g(f(x))$:

$$
g(f(x))=\\frac{1}{27}\\bigl(9x^{\\frac{2}{3}}\\bigr)^{\\frac{3}{2}}
$$

$$
g(f(x))=\\frac{1}{27}\\cdot 9^{\\frac{3}{2}}\\cdot\\bigl(x^{\\frac{2}{3}}\\bigr)^{\\frac{3}{2}}
$$

$$
\\bigl(x^{\\frac{2}{3}}\\bigr)^{\\frac{3}{2}}=x^{\\frac{2}{3}\\cdot\\frac{3}{2}}
$$

$$
x^{\\frac{2}{3}\\cdot\\frac{3}{2}}=x^{1}
$$

The exponents multiply to $1$, so the powers cancel to the identity in $x$. The coefficients cancel the same way:

$$
9^{\\frac{3}{2}}=(9^{\\frac{1}{2}})^{3}
$$

$$
(9^{\\frac{1}{2}})^{3}=3^{3}
$$

$$
3^{3}=27
$$

$$
g(f(x))=\\frac{1}{27}\\cdot 27\\cdot x
$$

$$
\\frac{1}{27}\\cdot 27\\cdot x=x
$$

The two stages cancel. Reporting after calibration returns the original reading, so the statement is True.`,
      `**B.** → True

The composition $g\\circ f$ is already $x^{1}$. The product of the two exponents is

$$
\\frac{2}{3}\\cdot\\frac{3}{2}=1
$$

and the coefficients cancel to $1$. That is a power function with exponent $1$, so the statement is True.`,
      `**C.** → True

Calibration is $f(x)=9x^{\\frac{2}{3}}$. At raw reading $125$:

$$
f(125)=9\\cdot 125^{\\frac{2}{3}}
$$

$$
125^{\\frac{2}{3}}=(5^{3})^{\\frac{2}{3}}
$$

$$
(5^{3})^{\\frac{2}{3}}=5^{2}
$$

$$
5^{2}=25
$$

$$
f(125)=9\\cdot 25
$$

$$
9\\cdot 25=225
$$

Reporting then sends that index back:

$$
g(225)=\\frac{225^{\\frac{3}{2}}}{27}
$$

$$
225^{\\frac{3}{2}}=(15^{2})^{\\frac{3}{2}}
$$

$$
(15^{2})^{\\frac{3}{2}}=15^{3}
$$

$$
15^{3}=3375
$$

$$
g(225)=\\frac{3375}{27}
$$

$$
\\frac{3375}{27}=125
$$

The two stages produce index $225$ and then return raw reading $125$, so the statement is True.`,
      `**D.** → False

The same maps give $f(g(y))$ as well. Compose calibration after reporting:

$$
f(g(y))=9\\left(\\frac{y^{\\frac{3}{2}}}{27}\\right)^{\\frac{2}{3}}
$$

$$
f(g(y))=9\\cdot\\frac{\\bigl(y^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}}{27^{\\frac{2}{3}}}
$$

$$
\\bigl(y^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}=y^{\\frac{3}{2}\\cdot\\frac{2}{3}}
$$

$$
y^{\\frac{3}{2}\\cdot\\frac{2}{3}}=y^{1}
$$

$$
27^{\\frac{2}{3}}=(3^{3})^{\\frac{2}{3}}
$$

$$
(3^{3})^{\\frac{2}{3}}=3^{2}
$$

$$
3^{2}=9
$$

$$
f(g(y))=9\\cdot\\frac{y}{9}
$$

$$
9\\cdot\\frac{y}{9}=y
$$

Each map is the two-sided inverse of the other on $y>0$. Applying reporting first and calibration second returns the original index, so the statement is False.`,
      `**E.** → False

The recovered calibration is $f(x)=9x^{\\frac{2}{3}}$. At raw reading $64$:

$$
f(64)=9\\cdot 64^{\\frac{2}{3}}
$$

$$
64^{\\frac{2}{3}}=(4^{3})^{\\frac{2}{3}}
$$

$$
(4^{3})^{\\frac{2}{3}}=4^{2}
$$

$$
4^{2}=16
$$

$$
f(64)=9\\cdot 16
$$

$$
9\\cdot 16=144
$$

The claimed $108$ is $9\\cdot 12$, as though $64^{\\frac{2}{3}}$ were $12$ rather than $16$. The index sent out is $144$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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
      `The two algorithms score equally at a load of $8$.`,
      `The two algorithms score equally at two different positive loads.`,
      `Once algorithm T is ahead, raising the load further cannot put S back in front.`,
      `At a load of $16$, algorithm T is ahead by more than $30$.`,
      `The ratio of the two scores is the same at every load.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The shared benchmark gives $S(x)=8x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$. At load $8$:

$$
S(8)=8\\cdot 8^{\\frac{1}{2}}
$$

$$
8\\cdot 8^{\\frac{1}{2}}=8^{\\frac{3}{2}}
$$

$$
T(8)=8^{\\frac{3}{2}}
$$

The two scores agree at load $8$, so the statement is True.`,
      `**B.** → False

The recovered laws are $S(x)=8x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$. Set them equal on $x>0$:

$$
8x^{\\frac{1}{2}}=x^{\\frac{3}{2}}
$$

$$
8=x^{\\frac{3}{2}-\\frac{1}{2}}
$$

$$
8=x^{1}
$$

$$
x=8
$$

Dividing by $x^{\\frac{1}{2}}$ is legal and loses no solution, since $x=0$ is outside the domain. On $x>0$ that is a single root. Two different positive loads would require two roots, so the statement is False.`,
      `**C.** → True

Those laws give the ratio

$$
\\frac{T(x)}{S(x)}=\\frac{x^{\\frac{3}{2}}}{8x^{\\frac{1}{2}}}
$$

$$
\\frac{T(x)}{S(x)}=\\frac{x}{8}
$$

That ratio exceeds $1$ precisely when $x>8$, and it keeps growing, so $T$ stays ahead on the whole ray $x>8$. Once T is ahead, S cannot catch it, so the statement is True.`,
      `**D.** → True

The recovered laws are $S(x)=8x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$. At load $16$:

$$
S(16)=8\\cdot 16^{\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
S(16)=32
$$

$$
T(16)=16^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=(4^{2})^{\\frac{3}{2}}
$$

$$
(4^{2})^{\\frac{3}{2}}=4^{3}
$$

$$
4^{3}=64
$$

$$
T(16)-S(16)=64-32
$$

$$
64-32=32
$$

$$
32>30
$$

Algorithm T is ahead by $32$, so the statement is True.`,
      `**E.** → False

The score ratio is $\\frac{T(x)}{S(x)}=\\frac{x}{8}$. That quantity is not the same at every load:

$$
\\frac{T(4)}{S(4)}=\\frac{1}{2}
$$

$$
\\frac{T(8)}{S(8)}=1
$$

$$
\\frac{T(16)}{S(16)}=2
$$

The exponents $\\frac{1}{2}$ and $\\frac{3}{2}$ differ, so the ratio grows with load. The ratio is not constant, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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
      `The contracted ceiling of $500$ binds from about $250$ machines.`,
      `Because the exponent is below $1$, the contracted ceiling is never reached.`,
      `A fleet of $243$ machines sustains more than $400$ requests per second.`,
      `On log-log paper the uncapped capacity law is a straight line.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Whether $C(m)$ rises is the sign of its exponent. The exponent $\\frac{4}{5}$ is positive, so $C$ is strictly increasing on $m>0$ even though it grows more slowly than the fleet. The contract may refuse to certify values above $500$, but the sustained-capacity law itself keeps rising. Sustained capacity increases with the fleet, so the statement is True.`,
      `**B.** → False

The $32$-machine run gives $A=5$, so $C(m)=5m^{\\frac{4}{5}}$. Set capacity equal to the contract:

$$
5m^{\\frac{4}{5}}=500
$$

$$
m^{\\frac{4}{5}}=100
$$

$$
m=100^{\\frac{5}{4}}
$$

$$
100=10^{2}
$$

$$
m=(10^{2})^{\\frac{5}{4}}
$$

$$
(10^{2})^{\\frac{5}{4}}=10^{\\frac{5}{2}}
$$

$$
10^{\\frac{5}{2}}=100\\sqrt{10}
$$

$$
100\\sqrt{10}\\approx 316.2
$$

At the claimed $250$ machines the law is still below the ceiling:

$$
C(250)=5\\cdot 250^{\\frac{4}{5}}\\approx 414
$$

$$
414<500
$$

The ceiling binds near $316$ machines, not $250$, so the statement is False.`,
      `**C.** → False

An exponent below $1$ slows growth, it does not stop it. The ceiling is already reached near $316$ machines. A larger exact fleet sits past that crossing:

$$
C(1024)=5\\cdot 1024^{\\frac{4}{5}}
$$

$$
1024=2^{10}
$$

$$
1024^{\\frac{4}{5}}=(2^{10})^{\\frac{4}{5}}
$$

$$
(2^{10})^{\\frac{4}{5}}=2^{8}
$$

$$
2^{8}=256
$$

$$
C(1024)=5\\cdot 256
$$

$$
5\\cdot 256=1280
$$

$1280$ is already over the contract. The ceiling is crossed at a finite fleet, so the statement is False.`,
      `**D.** → True

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. A fleet of $243$ is $3^{5}$, so the exponent $\\frac{4}{5}$ resolves exactly:

$$
243^{\\frac{4}{5}}=(3^{5})^{\\frac{4}{5}}
$$

$$
(3^{5})^{\\frac{4}{5}}=3^{4}
$$

$$
3^{4}=81
$$

$$
C(243)=5\\cdot 81
$$

$$
5\\cdot 81=405
$$

$$
405>400
$$

Capacity is $405$ requests per second, so the statement is True.`,
      `**E.** → True

A power law is linear after taking logs of both sides. The uncapped law is $C=5m^{\\frac{4}{5}}$:

$$
\\ln C=\\ln\\bigl(5m^{\\frac{4}{5}}\\bigr)
$$

$$
\\ln C=\\ln 5+\\frac{4}{5}\\ln m
$$

That is a straight line in $(\\ln m,\\ln C)$ with slope $\\frac{4}{5}$ and intercept $\\ln 5$. The contract's cap would flatten certified capacity, but the statement is about the uncapped law. The log-log plot of $C(m)$ is a straight line, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
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
      `Net gain is zero at $400$ hours.`,
      `The hours that maximise net gain are the same hours at which net gain is zero.`,
      `At $900$ hours the net gain is below $-1000$.`,
      `The wage bill is a power function of hours hired.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

The revenue gain gives $A=120$, so $R(L)=120L^{\\frac{1}{2}}$. Net gain subtracts the wage bill:

$$
\\Pi(L)=120L^{\\frac{1}{2}}-6L
$$

A power function is a single term $A L^{r}$. This is a difference of two powers with exponents $\\frac{1}{2}$ and $1$. Those exponents are not equal, so the two terms cannot be combined into one monomial. Net gain is not a power function of hours hired, so the statement is False.`,
      `**B.** → True

Net gain is $\\Pi(L)=120L^{\\frac{1}{2}}-6L$. Break-even is where recovered revenue equals the wage bill, on $L>0$:

$$
120L^{\\frac{1}{2}}-6L=0
$$

$$
120L^{\\frac{1}{2}}=6L
$$

$$
120=6L^{\\frac{1}{2}}
$$

$$
L^{\\frac{1}{2}}=20
$$

$$
L=400
$$

At $400$ hours both sides equal $2400$, so net gain is zero, so the statement is True.`,
      `**C.** → False

Net gain is $\\Pi(L)=120L^{\\frac{1}{2}}-6L$. The maximiser is where the derivative is zero, which is not the same equation as $\\Pi(L)=0$. Differentiating:

$$
\\Pi'(L)=120\\cdot\\frac{1}{2}L^{-\\frac{1}{2}}-6
$$

$$
\\Pi'(L)=60L^{-\\frac{1}{2}}-6
$$

$$
60L^{-\\frac{1}{2}}=6
$$

$$
L^{-\\frac{1}{2}}=\\frac{1}{10}
$$

$$
L^{\\frac{1}{2}}=10
$$

$$
L=100
$$

At that staffing, net gain is still positive:

$$
\\Pi(100)=120\\cdot 10-6\\cdot 100
$$

$$
1200-600=600
$$

Net gain peaks at $100$ hours and only later crosses zero at $400$ hours. The two staffing levels are not the same, so the statement is False.`,
      `**D.** → True

The recovered revenue is $R(L)=120L^{\\frac{1}{2}}$. At $900$ hours:

$$
900^{\\frac{1}{2}}=30
$$

$$
R(900)=120\\cdot 30
$$

$$
120\\cdot 30=3600
$$

$$
6\\cdot 900=5400
$$

$$
\\Pi(900)=3600-5400
$$

$$
3600-5400=-1800
$$

$$
-1800<-1000
$$

Square-root revenue cannot keep pace with a linear wage once hours are large. The net gain is $-1800$, so the statement is True.`,
      `**E.** → True

The wage bill is $6$ times hours hired:

$$
W(L)=6L
$$

$$
W(L)=6L^{1}
$$

That is $A L^{r}$ with coefficient $A=6$ and exponent $r=1$. A linear law is the power-function case of exponent $1$. The wage bill is a power function of hours hired, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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
      `Concentrating all $60$ units in the cheaper plant costs $900$.`,
      `The cheapest way to fill the order is to send every unit to one plant.`,
      `Whatever split is chosen, the two plants together still follow a single power of the $60$-unit order.`,
      `The $20$-$40$ split costs $600$.`,
      `Plant 2's cost per unit does not depend on how much it produces.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The recorded runs give $C_1(q)=\\frac{1}{2}q^{2}$ and $C_2(q)=\\frac{1}{4}q^{2}$. Plant 2 is cheaper for any given output. Concentrating the $60$-unit order there:

$$
C_2(60)=\\frac{1}{4}\\cdot 60^{2}
$$

$$
60^{2}=3600
$$

$$
C_2(60)=\\frac{1}{4}\\cdot 3600
$$

$$
\\frac{1}{4}\\cdot 3600=900
$$

Concentrating in the cheaper plant costs $900$, so the statement is True.`,
      `**B.** → False

Concentrating in the cheaper plant costs $900$. An even split already undercuts that corner:

$$
C_1(30)=\\frac{1}{2}\\cdot 900
$$

$$
\\frac{1}{2}\\cdot 900=450
$$

$$
C_2(30)=\\frac{1}{4}\\cdot 900
$$

$$
\\frac{1}{4}\\cdot 900=225
$$

$$
C_1(30)+C_2(30)=675
$$

$$
675<900
$$

Equalising marginal costs is cheaper still. The derivatives are $C_1'(q)=q$ and $C_2'(q_2)=\\frac{1}{2}q_2$. Setting $q=\\frac{1}{2}q_2$ with $q+q_2=60$ sends $20$ to plant 1 and $40$ to plant 2, which costs $600$. Sending everything to one plant is not cheapest, so the statement is False.`,
      `**C.** → False

Total cost is $C_1(q)+C_2(60-q)$:

$$
\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}
$$

That quadratic in the split $q$ takes different values at different splits: $900$ at a corner, $675$ at an even split, $600$ at the $20$-$40$ split. A function of $60$ alone cannot depend on $q$. The two plants together are not a single power of the order, so the statement is False.`,
      `**D.** → True

A run of $20$ units at plant 1 cost $200$ and a run of $40$ units at plant 2 cost $400$:

$$
200+400=600
$$

Those are exactly the two recorded runs, added. The split costs $600$, so the statement is True.`,
      `**E.** → False

Plant 2 costs $C_2(q)=\\frac{1}{4}q^{2}$. Unit cost divides by output, which lowers the exponent from $2$ to $1$:

$$
\\frac{C_2(q)}{q}=\\frac{1}{4}q
$$

That still depends on how much plant 2 produces. At the recorded run it is $10$; at $20$ units it is $5$; at $60$ units it is $15$. A constant unit cost would be a linear total, exponent $1$. Unit cost triples across that range, so the statement is False.`,
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
      `The fitted coefficient is $3$.`,
      `The measurement at $x=9$ contradicts the fitted law.`,
      `The fitted law predicts $y=300$ at $x=25$.`,
      `The same two measurements would fit an exponent of $2$ equally well.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Two positive points determine a unique exponent because their ratio cancels $A$:

$$
\\frac{y(16)}{y(4)}=\\frac{192}{24}
$$

$$
\\frac{192}{24}=8
$$

$$
\\frac{y(16)}{y(4)}=\\left(\\frac{16}{4}\\right)^{r}
$$

$$
8=4^{r}
$$

$$
4=2^{2}
$$

$$
8=2^{3}
$$

$$
(2^{2})^{r}=2^{3}
$$

$$
2^{2r}=2^{3}
$$

$$
2r=3
$$

$$
r=\\frac{3}{2}
$$

The same $4^{r}=8$ fits both logged points, so they lie on one power law, so the statement is True.`,
      `**B.** → True

The ratio already gave $r=\\frac{3}{2}$. The first point then pins the coefficient:

$$
A\\cdot 4^{\\frac{3}{2}}=24
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
8A=24
$$

$$
A=3
$$

The fitted law is $y=3x^{\\frac{3}{2}}$, so the statement is True.`,
      `**C.** → False

The fitted law is $y=3x^{\\frac{3}{2}}$. The measurement at $x=9$ was held out of the fit, so it is a test rather than an input:

$$
9^{\\frac{3}{2}}=(3^{2})^{\\frac{3}{2}}
$$

$$
(3^{2})^{\\frac{3}{2}}=3^{3}
$$

$$
3^{3}=27
$$

$$
3\\cdot 27=81
$$

The recorded response at $x=9$ is also $81$. The held-out point sits on the curve, so the statement is False.`,
      `**D.** → False

The fitted law is $y=3x^{\\frac{3}{2}}$. At $x=25$:

$$
25^{\\frac{3}{2}}=(5^{2})^{\\frac{3}{2}}
$$

$$
(5^{2})^{\\frac{3}{2}}=5^{3}
$$

$$
5^{3}=125
$$

$$
y=3\\cdot 125
$$

$$
3\\cdot 125=375
$$

The claimed $300$ is $3\\cdot 100$, as though $25^{\\frac{3}{2}}$ were $100$ rather than $125$. The fitted law predicts $375$, so the statement is False.`,
      `**E.** → False

Uniqueness of the exponent is settled by the ratio equation, because $4^{r}$ is strictly increasing in $r$ and can equal $8$ only once.

$$
4^{r}=8
$$

Forcing the exponent to $2$ misses that ratio:

$$
4^{2}=16
$$

$$
16\\neq 8
$$

The two measurements do not fit exponent $2$, so the statement is False.`,
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
    context: `A component supplier faces demand $q(p)=A p^{-2}$ units at a price $p>0$ euros. A catalogue price of four euros clears four hundred units. Procurement wants the curve written the other way round, with price a function of quantity. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The price that clears a given quantity is itself a power function of that quantity.`,
      `Twenty-five units clear at sixteen euros.`,
      `Raising the catalogue price raises revenue along this curve.`,
      `At one hundred units the supplier's revenue is eight hundred euros.`,
      `Because quantity falls when price rises, revenue must fall when quantity rises.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The catalogue pair gives $A=6400$, so demand is $q=6400 p^{-2}$. A nonzero exponent inverts to another power. Solving for price:

$$
q=\\frac{6400}{p^{2}}
$$

$$
p^{2}=\\frac{6400}{q}
$$

$$
p=\\sqrt{\\frac{6400}{q}}
$$

$$
\\sqrt{6400}=80
$$

$$
p=\\frac{80}{\\sqrt{q}}
$$

$$
p=80 q^{-\\frac{1}{2}}
$$

That is a power of quantity with exponent $-\\frac{1}{2}$, so the statement is True.`,
      `**B.** → True

The inverse is $p=80 q^{-\\frac{1}{2}}$. Twenty-five units is a named quantity on that inverse:

$$
p(25)=80\\cdot 25^{-\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
p(25)=\\frac{80}{5}
$$

$$
p(25)=16
$$

The clearing price is sixteen euros, so the statement is True.`,
      `**C.** → False

Demand is $q=6400 p^{-2}$. Revenue along the curve is price times quantity:

$$
R(p)=p\\cdot 6400 p^{-2}
$$

$$
R(p)=6400 p^{1-2}
$$

$$
R(p)=6400 p^{-1}
$$

$$
R(p)=\\frac{6400}{p}
$$

The leftover exponent is $-1$, so a higher catalogue price cuts revenue rather than raising it. At four euros the take is $1600$ euros; at eight euros it is only $800$. Raising the price does not raise revenue, so the statement is False.`,
      `**D.** → True

Revenue through quantity is $R(q)=80 q^{\\frac{1}{2}}$. At one hundred units:

$$
R(100)=80\\cdot 100^{\\frac{1}{2}}
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
R(100)=80\\cdot 10
$$

$$
R(100)=800
$$

The claimed revenue is eight hundred euros, so the statement is True.`,
      `**E.** → False

Revenue through quantity is $R(q)=80 q^{\\frac{1}{2}}$. Quantity does fall when price rises, because the demand exponent $-2$ is negative. That does not decide how revenue moves with quantity: the leftover exponent on $R(q)$ is $\\frac{1}{2}$, which is positive. A larger quantity therefore brings in more revenue, not less, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
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
    context: `A workshop's output follows $Y(L)=A L^{\\frac{1}{2}}$ units for $L>0$ labour hours. Extending a shift from nine hours to thirty-six hours added exactly sixty units. Management tracks average product $\\frac{Y}{L}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Average product falls as the shift lengthens.`,
      `A thirty-six hour shift produces one hundred and twenty units.`,
      `An extra hour adds more output after thirty-six hours than it does after nine.`,
      `To double the nine-hour output, labour hours must more than double.`,
      `At twenty-five hours, average product is five units per hour.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The shift extension gives $A=20$, so output is $Y=20 L^{\\frac{1}{2}}$. Average product divides by labour, which lowers the exponent by one:

$$
\\frac{Y}{L}=\\frac{20 L^{\\frac{1}{2}}}{L}
$$

$$
\\frac{Y}{L}=20 L^{\\frac{1}{2}-1}
$$

$$
\\frac{Y}{L}=20 L^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so each extra hour of shift dilutes output per hour. Average product falls as the shift lengthens, so the statement is True.`,
      `**B.** → True

Output is $Y=20 L^{\\frac{1}{2}}$. At thirty-six hours:

$$
Y(36)=20\\cdot 36^{\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
Y(36)=20\\cdot 6
$$

$$
Y(36)=120
$$

The logged sixty units are the gain from nine hours, not the thirty-six-hour level. Nine hours already yield $20\\cdot 3=60$, and $60+60=120$. Output is one hundred and twenty units, so the statement is True.`,
      `**C.** → False

Output is $Y=20 L^{\\frac{1}{2}}$. An extra hour is the derivative, which brings the exponent down by one and multiplies by $\\frac{1}{2}$:

$$
Y'(L)=20\\cdot\\frac{1}{2} L^{-\\frac{1}{2}}
$$

$$
Y'(L)=10 L^{-\\frac{1}{2}}
$$

After nine hours:

$$
Y'(9)=10\\cdot 9^{-\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
Y'(9)=\\frac{10}{3}
$$

After thirty-six hours:

$$
Y'(36)=10\\cdot 36^{-\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
Y'(36)=\\frac{10}{6}
$$

$$
Y'(36)=\\frac{5}{3}
$$

Because $\\frac{10}{3}>\\frac{5}{3}$, an extra hour adds more after nine hours than after thirty-six. The slope is falling, so the statement is False.`,
      `**D.** → True

The exponent is $\\frac{1}{2}$, so a labour factor $k$ multiplies output by $k^{\\frac{1}{2}}$. Doubling output therefore needs

$$
k^{\\frac{1}{2}}=2
$$

$$
k=2^{2}
$$

$$
k=4
$$

Four times the hours is more than a doubling. The logged extension itself is that factor: nine hours to thirty-six is a fourfold rise, and

$$
\\left(\\frac{36}{9}\\right)^{\\frac{1}{2}}=2
$$

so that extension exactly doubles output. Labour must more than double, so the statement is True.`,
      `**E.** → False

Average product is $20 L^{-\\frac{1}{2}}$. The trap is to read $25^{\\frac{1}{2}}=5$ as if it were already output per hour, forgetting the coefficient. At twenty-five hours:

$$
\\frac{Y(25)}{25}=20\\cdot 25^{-\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
\\frac{Y(25)}{25}=\\frac{20}{5}
$$

$$
\\frac{Y(25)}{25}=4
$$

Average product is four units per hour, not five, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
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
    context: `A contract manufacturer earns $R(q)=A q^{\\frac{1}{2}}$ euros from an output of $q>0$ units, pays two euros per unit, and carries a fixed charge of four hundred euros a period. A run of one hundred units brought in six hundred euros of revenue. Profit is revenue minus both charges. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The operation breaks even at two different positive outputs.`,
      `At twenty-five units the firm is more than one hundred euros below break-even.`,
      `Once profit turns positive, it stays positive at every larger output.`,
      `Revenue is a power function of output, but profit is not.`,
      `At two hundred and twenty-five units, profit exceeds eighty euros.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The hundred-unit invoice gives $A=60$, so profit is

$$
\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400
$$

Break-even is $\\Pi(q)=0$. The substitution $t=q^{\\frac{1}{2}}$ turns this into a quadratic, because $q=t^{2}$:

$$
60t-2t^{2}-400=0
$$

$$
2t^{2}-60t+400=0
$$

$$
t^{2}-30t+200=0
$$

$$
t^{2}-10t-20t+200=0
$$

$$
t(t-10)-20(t-10)=0
$$

$$
(t-10)(t-20)=0
$$

The positive roots are $t=10$ and $t=20$. Squaring back:

$$
q=10^{2}
$$

$$
q=100
$$

$$
q=20^{2}
$$

$$
q=400
$$

Two distinct positive outputs give zero profit, so the statement is True.`,
      `**B.** → True

Profit is $\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400$. At twenty-five units:

$$
25^{\\frac{1}{2}}=5
$$

$$
R(25)=60\\cdot 5
$$

$$
R(25)=300
$$

$$
2\\cdot 25=50
$$

$$
\\Pi(25)=300-50-400
$$

$$
\\Pi(25)=-150
$$

The firm is one hundred and fifty euros below break-even, which is more than one hundred, so the statement is True.`,
      `**C.** → False

Break-even is at $q=100$ and $q=400$. The $-2q$ term is a downward square in $t=q^{\\frac{1}{2}}$, so profit is positive only between those roots, not past the second one. Check a run beyond four hundred units, say $q=625$:

$$
625^{\\frac{1}{2}}=25
$$

$$
\\Pi(625)=60\\cdot 25-2\\cdot 625-400
$$

$$
\\Pi(625)=1500-1250-400
$$

$$
\\Pi(625)=-150
$$

Once profit has turned positive it turns negative again past four hundred units, so the statement is False.`,
      `**D.** → True

Revenue is $R=60 q^{\\frac{1}{2}}$, a power of output with coefficient $60$ and exponent $\\frac{1}{2}$. Profit subtracts a linear term and a constant:

$$
\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400
$$

A power function of $q$ has the form $A q^{r}$ with no extra terms. The intercept $-400$ and the distinct power $-2q$ both stop $\\Pi$ from being a power of output, so the statement is True.`,
      `**E.** → False

Profit is $\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400$. Two hundred and twenty-five units sits between the two break-evens, so profit is positive there, but the claimed eighty euros is too high:

$$
225^{\\frac{1}{2}}=15
$$

$$
R(225)=60\\cdot 15
$$

$$
R(225)=900
$$

$$
2\\cdot 225=450
$$

$$
\\Pi(225)=900-450-400
$$

$$
\\Pi(225)=50
$$

Profit is fifty euros, which does not exceed eighty, so the statement is False.`,
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
    context: `A city values a flood-defence programme of scale $x>0$ by the benefit $B(x)=A x^{\\frac{1}{2}}$ and the cost $C(x)=K x^{\\frac{3}{2}}$, both in millions. A trial at scale sixteen delivered seventy-two million of benefit. A trial at scale four cost four million. Net benefit is $B-C$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Benefit and cost meet at exactly one positive scale.`,
      `At scale sixteen, cost is thirty-two million.`,
      `The cost exponent is smaller than the benefit exponent, so cost can never overtake benefit.`,
      `At scale nine, net benefit exceeds forty-two million.`,
      `Benefit per million of cost is the same at every scale.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The two trials give $B=18 x^{\\frac{1}{2}}$ and $C=\\frac{1}{2} x^{\\frac{3}{2}}$. They meet where $B=C$:

$$
18 x^{\\frac{1}{2}}=\\frac{1}{2} x^{\\frac{3}{2}}
$$

For $x>0$ divide by $x^{\\frac{1}{2}}$:

$$
18=\\frac{1}{2} x
$$

$$
x=18\\cdot 2
$$

$$
x=36
$$

The ratio of the two powers is $C/B=x/36$, which equals $1$ at exactly one positive scale, so the statement is True.`,
      `**B.** → True

Cost is $C=\\frac{1}{2} x^{\\frac{3}{2}}$. At scale sixteen:

$$
C(16)=\\frac{1}{2}\\cdot 16^{\\frac{3}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
C(16)=\\frac{1}{2}\\cdot 64
$$

$$
C(16)=32
$$

Cost is thirty-two million, so the statement is True.`,
      `**C.** → False

The cost exponent is $\\frac{3}{2}$, which is larger than the benefit exponent $\\frac{1}{2}$, not smaller. Their ratio is $C/B=x/36$, which passes through $1$ at the meeting $x=36$ and keeps rising, so cost overtakes benefit and stays ahead. The exponent comparison is backwards, and overtaking does occur, so the statement is False.`,
      `**D.** → False

Benefit is $B=18 x^{\\frac{1}{2}}$ and cost is $C=\\frac{1}{2} x^{\\frac{3}{2}}$. At scale nine:

$$
B(9)=18\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
B(9)=18\\cdot 3
$$

$$
B(9)=54
$$

$$
C(9)=\\frac{1}{2}\\cdot 9^{\\frac{3}{2}}
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
C(9)=\\frac{27}{2}
$$

$$
B(9)-C(9)=54-\\frac{27}{2}
$$

$$
B(9)-C(9)=\\frac{81}{2}
$$

Net benefit is $40.5$ million, which does not exceed forty-two, so the statement is False.`,
      `**E.** → False

Benefit per million of cost is the reciprocal of the meeting ratio:

$$
\\frac{B(x)}{C(x)}=\\frac{36}{x}
$$

That ratio falls as scale grows: at $x=9$ it is $4$, and at $x=36$ it is $1$. Benefit per million of cost is not the same at every scale, so the statement is False.`,
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
    context: `A furnace's throughput follows $T(g)=A g^{r}$ tonnes per hour, where $g>0$ is the gas feed in cubic metres per hour. A feed of eight gave sixteen tonnes per hour, and a feed of twenty-seven gave thirty-six. The site licence caps throughput at thirty-two tonnes per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is smaller than one, so throughput grows more slowly than the gas feed.`,
      `The licensed ceiling is reached at a feed below twenty-four cubic metres per hour.`,
      `Doubling the gas feed doubles throughput.`,
      `Throughput per cubic metre of gas rises as the feed rises.`,
      `A feed of sixty-four cubic metres per hour produces sixty-four tonnes per hour.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The two furnace runs give $r=\\frac{2}{3}$. Compare that exponent with one:

$$
\\frac{2}{3}<1
$$

The recorded feeds already show the lag. Gas rose by a factor $\\frac{27}{8}$, while throughput only rose by $\\frac{9}{4}$:

$$
\\frac{36}{16}=\\frac{9}{4}
$$

$$
\\frac{9}{4}<\\frac{27}{8}
$$

Each extra cubic metre of gas adds less throughput than the cubic metre before it. Throughput grows more slowly than the gas feed, so the statement is True.`,
      `**B.** → True

Throughput is $T=4 g^{\\frac{2}{3}}$. The licensed ceiling of thirty-two tonnes per hour inverts that law:

$$
4 g^{\\frac{2}{3}}=32
$$

$$
g^{\\frac{2}{3}}=8
$$

$$
g=8^{\\frac{3}{2}}
$$

$$
8^{\\frac{3}{2}}=8\\cdot 8^{\\frac{1}{2}}
$$

$$
8^{\\frac{1}{2}}=2\\sqrt{2}
$$

$$
g=8\\cdot 2\\sqrt{2}
$$

$$
g=16\\sqrt{2}
$$

$$
16\\sqrt{2}\\approx 22.63
$$

That feed is below twenty-four, so the statement is True.`,
      `**C.** → False

The two runs give $r=\\frac{2}{3}$. Doubling the gas feed would double throughput only if $r=1$. With $r=\\frac{2}{3}$ the scale factor is

$$
\\frac{T(2g)}{T(g)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

$$
1.587\\neq 2
$$

Throughput rises, but not in lockstep with the feed, so the statement is False.`,
      `**D.** → False

Throughput is $T=4 g^{\\frac{2}{3}}$. Throughput per cubic metre of gas lowers the exponent by one:

$$
\\frac{T(g)}{g}=4 g^{\\frac{2}{3}-1}
$$

$$
\\frac{T(g)}{g}=4 g^{-\\frac{1}{3}}
$$

The leftover exponent is negative, so the intensity falls as the feed rises, not rises. Extra gas still adds tonnes, but each cubic metre buys less throughput than the one before it, so the statement is False.`,
      `**E.** → True

Throughput is $T=4 g^{\\frac{2}{3}}$. At a feed of sixty-four:

$$
T(64)=4\\cdot 64^{\\frac{2}{3}}
$$

$$
64^{\\frac{1}{3}}=4
$$

$$
64^{\\frac{2}{3}}=16
$$

$$
T(64)=4\\cdot 16
$$

$$
T(64)=64
$$

Throughput is sixty-four tonnes per hour, so the statement is True.`,
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
    context: `A tapered rainwater basin stores $V(d)=A d^{2}$ cubic metres when filled to a depth of $d>0$ metres. A survey found that raising the water from three metres to five metres added exactly sixty-four cubic metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Stored volume grows faster than depth.`,
      `At six metres the basin holds one hundred and forty-four cubic metres.`,
      `Measuring depth in centimetres instead of metres leaves the coefficient $A$ unchanged.`,
      `Because the basin tapers, stored volume approaches a finite cap as depth grows.`,
      `Filling from four metres to eight metres adds more than two hundred cubic metres.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Stored volume is already a square of depth, so the exponent is $2$. Compare that exponent with one:

$$
2>1
$$

Doubling depth therefore multiplies stored volume by four, not by two:

$$
\\frac{V(2d)}{V(d)}=2^{2}
$$

$$
2^{2}=4
$$

$$
4>2
$$

Each extra metre of water adds more storage than the metre before it, because a square steepens as depth grows. Volume grows faster than depth, so the statement is True.`,
      `**B.** → True

The survey gives $A=4$, so storage is $V=4d^{2}$. At six metres:

$$
V(6)=4\\cdot 6^{2}
$$

$$
6^{2}=36
$$

$$
V(6)=4\\cdot 36
$$

$$
V(6)=144
$$

The basin holds one hundred and forty-four cubic metres, so the statement is True.`,
      `**C.** → False

Storage is $V=4d^{2}$ when depth is in metres. A centimetre reading $d_{\\mathrm{cm}}$ counts one hundred centimetres to the metre:

$$
d=\\frac{d_{\\mathrm{cm}}}{100}
$$

$$
V=4\\left(\\frac{d_{\\mathrm{cm}}}{100}\\right)^{2}
$$

$$
V=4\\cdot\\frac{d_{\\mathrm{cm}}^{2}}{100^{2}}
$$

$$
100^{2}=10000
$$

$$
V=\\frac{4}{10000}\\,d_{\\mathrm{cm}}^{2}
$$

$$
\\frac{4}{10000}=\\frac{1}{2500}
$$

$$
V=\\frac{1}{2500}\\,d_{\\mathrm{cm}}^{2}
$$

The centimetre-form coefficient is $\\frac{1}{2500}$, not $4$. Changing the input unit rescales $A$, so the statement is False.`,
      `**D.** → False

Storage is $V=4d^{2}$. A power with a positive exponent is unbounded on $d>0$: as depth grows, $4d^{2}$ grows without a cap. The taper steepens storage rather than limiting it. A finite cap would need a leftover that goes to zero, not a square that keeps rising, so the statement is False.`,
      `**E.** → False

Storage is $V=4d^{2}$. The added volume from four metres to eight metres is a difference of two levels:

$$
V(8)=4\\cdot 8^{2}
$$

$$
8^{2}=64
$$

$$
V(8)=4\\cdot 64
$$

$$
V(8)=256
$$

$$
V(4)=4\\cdot 4^{2}
$$

$$
4^{2}=16
$$

$$
V(4)=4\\cdot 16
$$

$$
V(4)=64
$$

$$
V(8)-V(4)=256-64
$$

$$
V(8)-V(4)=192
$$

The add-on is one hundred and ninety-two cubic metres, which is not more than two hundred, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**3.** Switching depth to centimetres changes the coefficient.

**Answer.** $A=4$ | $V=4d^{2}$ | $V(6)=144$`,
  },
  {
    id: `math-8-47`,
    case_id: `MATH 8.47`,
    title: `A Braking-Energy Index Recovered From a Speed Change`,
    context: `A fleet safety report scores braking energy by the index $E(v)=A v^{2}$, where $v>0$ is speed in kilometres per hour. The report does not give $A$: it states only that raising the test speed from thirty to fifty kilometres per hour raised the index by exactly eighty points. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Equal speed increments raise the index by more at higher speeds than at lower ones.`,
      `At forty kilometres per hour the index reads eighty.`,
      `The index per kilometre per hour of speed is the same at every speed.`,
      `The speed that produces a given index grows more slowly than the index itself.`,
      `The index reaches two hundred at eighty kilometres per hour.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The speed change gives $A=\\frac{1}{20}$, so the index is $E=\\frac{1}{20} v^{2}$. Equal speed increments of a square widen as the band moves up, because

$$
E(v+h)-E(v)=\\frac{1}{20}\\bigl((v+h)^{2}-v^{2}\\bigr)
$$

$$
E(v+h)-E(v)=\\frac{1}{20}(2vh+h^{2})
$$

which grows with $v$. The logged twenty-kilometre-per-hour rise is $80$ points. The same increment starting at fifty is

$$
E(70)-E(50)=\\frac{1}{20}(70^{2}-50^{2})
$$

$$
70^{2}=4900
$$

$$
4900-2500=2400
$$

$$
\\frac{2400}{20}=120
$$

One hundred and twenty is larger than eighty, so equal speed increments raise the index by more at higher speeds, so the statement is True.`,
      `**B.** → True

The index is $E=\\frac{1}{20} v^{2}$. At forty kilometres per hour:

$$
E(40)=\\frac{1}{20}\\cdot 40^{2}
$$

$$
40^{2}=1600
$$

$$
E(40)=\\frac{1600}{20}
$$

$$
E(40)=80
$$

The index reads eighty, so the statement is True.`,
      `**C.** → False

The index is $E=\\frac{1}{20} v^{2}$. Index per kilometre per hour of speed lowers the exponent by one:

$$
\\frac{E(v)}{v}=\\frac{\\frac{1}{20} v^{2}}{v}
$$

$$
\\frac{E(v)}{v}=\\frac{1}{20} v
$$

The intensity rises in proportion to speed. At $v=30$ it equals $\\frac{30}{20}=1.5$, and at $v=50$ it equals $\\frac{50}{20}=2.5$. It is not the same at every speed, so the statement is False.`,
      `**D.** → True

The index is $E=\\frac{1}{20} v^{2}$. The speed that produces a given index is the inverse of that square:

$$
20E=v^{2}
$$

$$
v=(20E)^{\\frac{1}{2}}
$$

$$
v=\\sqrt{20}\\, E^{\\frac{1}{2}}
$$

The inverse exponent $\\frac{1}{2}$ is smaller than one, so speed grows more slowly than the index: doubling the index multiplies the required speed by only $\\sqrt{2}$, about $1.41$, so the statement is True.`,
      `**E.** → False

The index is $E=\\frac{1}{20} v^{2}$. Eighty kilometres per hour is twice forty, and a square law multiplies the index by four, not by a linear guess such as two hundred. At eighty:

$$
E(80)=\\frac{1}{20}\\cdot 80^{2}
$$

$$
80^{2}=6400
$$

$$
E(80)=\\frac{6400}{20}
$$

$$
E(80)=320
$$

The index is three hundred and twenty, not two hundred, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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
    context: `A supplier builds geometrically similar storage silos. The steel skin scales with the square of the height, $S(h)=a h^{2}$ square metres, while capacity scales with the cube, $V(h)=k h^{3}$ cubic metres. A two-metre silo uses twelve square metres of steel and holds eight cubic metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Steel use grows more slowly than capacity as height rises.`,
      `A four-metre silo holds sixty-four cubic metres.`,
      `Steel as a function of capacity is itself a power function.`,
      `Two separate two-metre silos use the same steel as one four-metre silo.`,
      `An eight-metre silo needs more than two hundred square metres of steel.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Steel scales with the square of height and capacity with the cube, so the exponents are already $2$ and $3$. Compare them:

$$
2<3
$$

A height factor $k$ therefore multiplies steel by $k^{2}$ and capacity by $k^{3}$. Doubling height, for instance:

$$
\\frac{S(2h)}{S(h)}=2^{2}
$$

$$
2^{2}=4
$$

$$
\\frac{V(2h)}{V(h)}=2^{3}
$$

$$
2^{3}=8
$$

$$
4<8
$$

Steel use grows more slowly than capacity as height rises, so the statement is True.`,
      `**B.** → True

Capacity scales with the cube of height. Four metres is twice two metres, so capacity multiplies by $2^{3}$:

$$
\\frac{V(4)}{V(2)}=2^{3}
$$

$$
2^{3}=8
$$

The two-metre silo holds eight cubic metres:

$$
V(4)=8\\cdot 8
$$

$$
V(4)=64
$$

The silo holds sixty-four cubic metres, so the statement is True.`,
      `**C.** → True

Steel is $S=3h^{2}$ and capacity is $V=h^{3}$. Invert the cube and substitute:

$$
h=V^{\\frac{1}{3}}
$$

$$
S=3\\bigl(V^{\\frac{1}{3}}\\bigr)^{2}
$$

$$
S=3 V^{\\frac{2}{3}}
$$

That is a power of capacity with exponent $\\frac{2}{3}$. Steel as a function of capacity is itself a power, so the statement is True.`,
      `**D.** → False

Steel is $S=3h^{2}$. Two separate two-metre silos add skins; one four-metre silo scales the skin by $2^{2}=4$:

$$
S(2)=3\\cdot 2^{2}
$$

$$
S(2)=3\\cdot 4
$$

$$
S(2)=12
$$

$$
2\\cdot S(2)=24
$$

$$
S(4)=3\\cdot 4^{2}
$$

$$
4^{2}=16
$$

$$
S(4)=3\\cdot 16
$$

$$
S(4)=48
$$

The single four-metre silo uses forty-eight square metres, twice as much as the pair, so the statement is False.`,
      `**E.** → False

Steel is $S=3h^{2}$. At eight metres:

$$
S(8)=3\\cdot 8^{2}
$$

$$
8^{2}=64
$$

$$
S(8)=3\\cdot 64
$$

$$
S(8)=192
$$

$$
192<200
$$

Steel use is one hundred and ninety-two square metres, which is not more than two hundred, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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
    context: `Customs inspection time follows $T(n)=A n^{\\frac{1}{2}}$ hours for a consignment of $n>0$ shipments. Moving from a four-shipment consignment to a thirty-six-shipment consignment added exactly sixteen inspection hours. A staffing plan can supply at most forty inspection hours. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Total inspection time is proportional to the number of shipments.`,
      `The forty-hour ceiling can cover at most one hundred shipments.`,
      `Staffing that just meets the ceiling would still cover a modestly larger consignment, because extra shipments add almost nothing.`,
      `Quadrupling a consignment multiplies inspection time by two.`,
      `A forty-nine-shipment consignment takes more than thirty hours.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

Inspection time is already a square root of the consignment, so the exponent is $\\frac{1}{2}$. Proportionality would require exponent $1$:

$$
\\frac{1}{2}\\neq 1
$$

The recorded move from four shipments to thirty-six multiplies the consignment by nine, but inspection time only by three:

$$
\\frac{T(36)}{T(4)}=\\left(\\frac{36}{4}\\right)^{\\frac{1}{2}}
$$

$$
\\frac{36}{4}=9
$$

$$
9^{\\frac{1}{2}}=3
$$

Nine times the shipments produce only three times the hours. Extra shipments add less time than the ones before them, so the statement is False.`,
      `**B.** → True

Inspection is $T=4 n^{\\frac{1}{2}}$. The forty-hour ceiling inverts that law:

$$
4 n^{\\frac{1}{2}}=40
$$

$$
n^{\\frac{1}{2}}=\\frac{40}{4}
$$

$$
n^{\\frac{1}{2}}=10
$$

$$
n=10^{2}
$$

$$
n=100
$$

Time still increases with $n$, so every larger consignment overshoots forty hours. The ceiling covers at most one hundred shipments, so the statement is True.`,
      `**C.** → False

Inspection is $T=4 n^{\\frac{1}{2}}$, and the forty-hour ceiling binds at $n=100$. A modestly larger consignment is $n=121$:

$$
121^{\\frac{1}{2}}=11
$$

$$
T(121)=4\\cdot 11
$$

$$
T(121)=44
$$

$$
44>40
$$

The extra twenty-one shipments still add four hours, which the forty-hour plan cannot supply. Extra shipments add less than they used to, but they do not add almost nothing, so the statement is False.`,
      `**D.** → True

The exponent is $\\frac{1}{2}$, so an input factor of $4$ multiplies inspection time by $4$ to that power:

$$
\\frac{T(4n)}{T(n)}=4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

Quadrupling the consignment doubles inspection time, so the statement is True.`,
      `**E.** → False

Inspection is $T=4 n^{\\frac{1}{2}}$. At forty-nine shipments:

$$
T(49)=4\\cdot 49^{\\frac{1}{2}}
$$

$$
49^{\\frac{1}{2}}=7
$$

$$
T(49)=4\\cdot 7
$$

$$
T(49)=28
$$

Inspection takes twenty-eight hours, which is not more than thirty, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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
    context: `Illuminance from a gallery spotlight follows $I(d)=A d^{-2}$ lux, where $d>0$ is the distance in metres. A conservation log never states $A$: it records only that moving the meter from two metres to four metres cut the reading by one hundred and fifty lux. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the distance from the lamp cuts illuminance to one quarter.`,
      `At five metres the illuminance is thirty-two lux.`,
      `If the hall is long enough, illuminance eventually becomes negative.`,
      `Distance as a function of illuminance is not a power function, because illuminance falls.`,
      `At three metres the reading is still above ninety lux.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Doubling distance is an input factor of $2$ on the inverse-square law, and the unknown coefficient cancels:

$$
\\frac{I(2d)}{I(d)}=\\frac{A(2d)^{-2}}{A d^{-2}}
$$

$$
\\frac{I(2d)}{I(d)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The logged move from two metres to four metres is that same doubling. Illuminance falls to one quarter, so the statement is True.`,
      `**B.** → True

Illuminance is $I=800 d^{-2}$. Five metres is not one of the logged stations, so the reading has to be taken from the law rather than from the hundred-and-fifty lux drop:

$$
I(5)=800\\cdot 5^{-2}
$$

$$
5^{2}=25
$$

$$
I(5)=\\frac{800}{25}
$$

$$
I(5)=32
$$

Illuminance is thirty-two lux, so the statement is True.`,
      `**C.** → False

Illuminance is $I=\\frac{800}{d^{2}}$. For every $d>0$ the square is positive and the coefficient is positive, so $I(d)>0$. A negative exponent sends the reading towards zero from above as the hall lengthens, never through zero. Illuminance stays positive, so the statement is False.`,
      `**D.** → False

Illuminance is $I=800 d^{-2}$. A power with a nonzero exponent inverts to another power, whether that exponent is negative or not:

$$
I=\\frac{800}{d^{2}}
$$

$$
d^{2}=\\frac{800}{I}
$$

$$
d=\\left(\\frac{800}{I}\\right)^{\\frac{1}{2}}
$$

$$
d=\\sqrt{800}\\, I^{-\\frac{1}{2}}
$$

Distance is a power of illuminance with exponent $-\\frac{1}{2}$. Falling along the curve does not stop the inverse from being a power, so the statement is False.`,
      `**E.** → False

Illuminance is $I=800 d^{-2}$. At three metres:

$$
I(3)=\\frac{800}{3^{2}}
$$

$$
I(3)=\\frac{800}{9}
$$

$$
\\frac{800}{9}\\approx 88.89
$$

$$
88.89<90
$$

The reading is below ninety lux, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $A=800$. Doubling $d$ quarters $I$. Illuminance stays positive.

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
      `An extra account adds more to the bill after eighty-one accounts than after sixteen.`,
      `Sixteen accounts cost $800$ under the practice schedule.`,
      `The practice is cheaper than the rival at every engagement larger than sixteen accounts.`,
      `A bill of $12500$ corresponds to an engagement of $625$ accounts.`,
      `Doubling the number of accounts doubles the practice bill.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

The recovered schedule is $C(n)=100 n^{\\frac{3}{4}}$. An extra account is the derivative, and the leftover exponent $-\\frac{1}{4}$ is negative, so each extra account adds less than the one before it:

$$
C'(n)=100\\cdot\\frac{3}{4}n^{-\\frac{1}{4}}
$$

$$
C'(n)=75 n^{-\\frac{1}{4}}
$$

After sixteen accounts:

$$
C'(16)=75\\cdot 16^{-\\frac{1}{4}}
$$

$$
16^{-\\frac{1}{4}}=\\frac{1}{2}
$$

$$
C'(16)=\\frac{75}{2}
$$

After eighty-one:

$$
C'(81)=75\\cdot 81^{-\\frac{1}{4}}
$$

$$
81^{-\\frac{1}{4}}=\\frac{1}{3}
$$

$$
C'(81)=25
$$

Because $25<\\frac{75}{2}$, an extra account adds less after eighty-one than after sixteen, so the statement is False.`,
      `**B.** → True

At sixteen accounts the power is $8$, so the bill is

$$
C(16)=100\\cdot 8=800
$$

Sixteen accounts cost $800$ under the practice schedule, so the statement is True.`,
      `**C.** → True

The rival quotes $R(n)=50n$. A tie with $C(n)=100 n^{\\frac{3}{4}}$ is

$$
100 n^{\\frac{3}{4}}=50n
$$

$$
2=n^{\\frac{1}{4}}
$$

$$
n=16
$$

For $n>16$ one has $n^{\\frac{1}{4}}>2$, so the ratio $\\frac{C(n)}{R(n)}=2 n^{-\\frac{1}{4}}$ is strictly less than $1$. The practice is cheaper than the rival past the sixteen-account tie, so the statement is True.`,
      `**D.** → True

A bill of $12500$ on $C(n)=100 n^{\\frac{3}{4}}$ means

$$
100 n^{\\frac{3}{4}}=12500
$$

$$
n^{\\frac{3}{4}}=125
$$

$$
125=5^{3}
$$

$$
n=(5^{3})^{\\frac{4}{3}}
$$

$$
n=5^{4}=625
$$

Forward: $625^{\\frac{3}{4}}=125$ and $100\\cdot 125=12500$, so the statement is True.`,
      `**E.** → False

Doubling accounts would double the bill only if the exponent were $1$. With exponent $\\frac{3}{4}$ the scale factor is

$$
\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}\\approx 1.68
$$

not $2$. The bill rises, but not in lockstep with the account count, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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
      `At $100$ metres the concentration is $0.4$ microgram per cubic metre.`,
      `Halving the distance more than doubles the concentration.`,
      `The monitor at $4$ metres reads $50$ micrograms per cubic metre.`,
      `Doubling the distance cuts concentration by exactly $50\\%$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Inverse-linear decay would carry exponent $-1$. The given exponent is $-\\frac{3}{2}$, which is strictly less than $-1$, so concentration falls faster than $1/x$: each extra metre of distance removes a larger share than inverse-linear decay would, so the statement is True.`,
      `**B.** → True

The recovered law is $c(x)=400 x^{-\\frac{3}{2}}$. At one hundred metres:

$$
100^{\\frac{3}{2}}=10^{3}=1000
$$

$$
c(100)=\\frac{400}{1000}=0.4
$$

That is the claimed reading, so the statement is True.`,
      `**C.** → True

Halving distance scales concentration by $2$ to the power of $\\frac{3}{2}$, and the coefficient cancels:

$$
\\frac{c\\bigl(\\frac{x}{2}\\bigr)}{c(x)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83
$$

That factor is larger than $2$, so halving more than doubles the reading, so the statement is True.`,
      `**D.** → True

At four metres the power is $\\frac{1}{8}$, so the nearer reading is $400\\cdot\\frac{1}{8}=50$, so the statement is True.`,
      `**E.** → False

Doubling distance would cut concentration in half only if the exponent were $-1$. With exponent $-\\frac{3}{2}$ the surviving fraction is

$$
\\frac{c(2x)}{c(x)}=2^{-\\frac{3}{2}}
$$

$$
2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}\\approx 0.35
$$

a cut of about $65\\%$, not $50\\%$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**3.** Scale factors:

$$\\frac{c\\bigl(\\frac{x}{2}\\bigr)}{c(x)}=2\\sqrt{2} \\qquad \\frac{c(2x)}{c(x)}=\\frac{1}{2\\sqrt{2}}$$

**Answer.** $A=400$ | $c(4)=50$ | $c(16)=6.25$ | $c(100)=0.4$ | halving factor $2\\sqrt{2}$`,
  },
  {
    id: `math-8-53`,
    case_id: `MATH 8.53`,
    title: `Storm Surge Feeding a Cubic Loss Index`,
    context: `A reinsurer models coastal losses in two stages. Storm surge height is $s(w)=0.5 w^{0.5}$ metres for a wind speed of $w>0$, and the loss index rises with the cube of surge height, $L(s)=32 s^{3}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The composed exponent exceeds one, so losses accelerate as the wind strengthens.`,
      `At a wind speed of $64$ the surge height is $8$ metres.`,
      `An extra unit of wind adds more to the loss index at high wind than at low wind.`,
      `The loss index reaches $1000$ at a wind speed of about $39.7$.`,
      `The composed loss index is proportional to wind speed.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The composed law is $L(w)=4 w^{\\frac{3}{2}}$. The exponent $\\frac{3}{2}$ exceeds $1$, so doubling the wind multiplies loss by

$$
\\frac{L(2w)}{L(w)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}>2
$$

Losses accelerate as the wind strengthens, so the statement is True.`,
      `**B.** → False

Surge is the inner stage $s(w)=0.5 w^{0.5}$, not the composed loss. At wind speed $64$:

$$
s(64)=0.5\\cdot 64^{0.5}
$$

$$
64^{0.5}=8
$$

$$
s(64)=0.5\\cdot 8=4
$$

The figure $8$ is $\\sqrt{64}$ before the factor $0.5$ is applied. Surge is $4$ metres, not $8$, so the statement is False.`,
      `**C.** → True

An extra unit of wind is the derivative of $L(w)=4 w^{\\frac{3}{2}}$:

$$
L'(w)=4\\cdot\\frac{3}{2} w^{\\frac{1}{2}}
$$

$$
L'(w)=6 w^{\\frac{1}{2}}
$$

The leftover exponent $\\frac{1}{2}$ is positive, so $L'(w)$ rises with $w$. At $w=1$ the increment is $6$; at $w=16$ it is $6\\cdot 4=24$. An extra unit of wind adds more at high wind than at low wind, so the statement is True.`,
      `**D.** → True

A loss of $1000$ on $L(w)=4 w^{\\frac{3}{2}}$ means

$$
4 w^{\\frac{3}{2}}=1000
$$

$$
w^{\\frac{3}{2}}=250
$$

$$
w=250^{\\frac{2}{3}}
$$

Because $6.3^{3}=250.047$, one has $250^{\\frac{1}{3}}\\approx 6.30$ and $w\\approx 6.30^{2}=39.69$, about $39.7$, so the statement is True.`,
      `**E.** → False

Proportionality to wind speed would need composed exponent $1$. The composed law is $L(w)=4 w^{\\frac{3}{2}}$, so doubling the wind multiplies loss by $2^{\\frac{3}{2}}=2\\sqrt{2}$, not by $2$, so the statement is False.`,
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
      `At $0.16$ ADV, impact is $24$ basis points.`,
      `The scaled impact charge grows faster than linearly in order size.`,
      `The notional fee and the scaled impact charge meet at $0.25$ ADV.`,
      `The scaled impact charge is proportional to order size.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

An exponent smaller than one means impact grows more slowly than order size: each extra fraction of ADV adds less impact than the last. One half is below one, so doubling $v$ multiplies impact by $\\sqrt{2}\\approx 1.41$, not by $2$, so the statement is True.`,
      `**B.** → True

The recovered impact is $I(v)=60 v^{\\frac{1}{2}}$. At $0.16$ ADV:

$$
\\sqrt{0.16}=0.4
$$

$$
I(0.16)=60\\cdot 0.4
$$

$$
I(0.16)=24
$$

That is the claimed impact, so the statement is True.`,
      `**C.** → True

Impact is a square root, so multiplying by $v$ raises the exponent by one: the scaled charge $v I(v)$ is a three-halves power. Doubling order size then multiplies the charge by

$$
2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83
$$

which exceeds $2$. The scaled charge grows faster than linearly, so the statement is True.`,
      `**D.** → True

The scaled charge is $60 v^{\\frac{3}{2}}$. Equating to the fee $30v$:

$$
60 v^{\\frac{3}{2}}=30v
$$

$$
2 v^{\\frac{1}{2}}=1
$$

$$
\\sqrt{v}=\\frac{1}{2}
$$

$$
v=\\frac{1}{4}=0.25
$$

Both sides equal $7.5$ there: $I(0.25)=30$ and $0.25\\cdot 30=7.5=F(0.25)$, so the statement is True.`,
      `**E.** → False

A charge proportional to order size would carry exponent $1$. Multiplying square-root impact by $v$ produces exponent $\\frac{3}{2}$, so doubling $v$ multiplies the charge by $2\\sqrt{2}$, not by $2$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
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
      `A $64$ kg animal uses $160$ energy units a day.`,
      `Energy use per kilogram is the same at every body mass.`,
      `Eight $27$ kg animals use twice as much total energy as one $216$ kg animal.`,
      `Combining two equal animals into one animal of twice the mass leaves total energy use unchanged.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

A power with a nonzero exponent inverts to another power. From $E=10 m^{\\frac{2}{3}}$ one gets

$$
\\frac{E}{10}=m^{\\frac{2}{3}}
$$

$$
m=\\left(\\frac{E}{10}\\right)^{\\frac{3}{2}}
$$

a three-halves power of the energy, so the statement is True.`,
      `**B.** → True

At $64$ kilograms the power is $16$, so daily use is $10\\cdot 16=160$, so the statement is True.`,
      `**C.** → False

Energy per kilogram is the allometric law divided by mass:

$$
\\frac{E(m)}{m}=10 m^{\\frac{2}{3}-1}=10 m^{-\\frac{1}{3}}
$$

The leftover exponent is negative, so the average falls as mass rises. The two calibrated animals already disagree: $\\frac{160}{64}=2.5$ versus $\\frac{90}{27}=\\frac{10}{3}$. Energy per kilogram is not constant, so the statement is False.`,
      `**D.** → True

Eight small animals use

$$
E(27)=10\\cdot 9=90
$$

$$
8E(27)=720
$$

One $216$ kg animal:

$$
216=6^{3}
$$

$$
216^{\\frac{2}{3}}=6^{2}=36
$$

$$
E(216)=10\\cdot 36=360
$$

and $\\frac{720}{360}=2$. The eight small animals use twice the large one, so the statement is True.`,
      `**E.** → False

Two equal animals use $2E(m)$, while one animal of doubled mass uses $E(2m)$. The scale factor is $2^{\\frac{2}{3}}\\approx 1.59$, which is less than $2$, so merging them lowers total energy use, so the statement is False.`,
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
      `The zone four kilometres away supplies $400$ visitors a week.`,
      `Footfall follows an inverse-square law of driving distance.`,
      `A zone nine kilometres away still supplies more than $100$ visitors a week.`,
      `An extra kilometre of drive cuts more visitors far from the park than near it.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

A negative exponent means footfall falls as driving distance rises. The given exponent $-\\frac{3}{2}$ is negative, so a farther zone always supplies fewer visitors than a nearer one, so the statement is True.`,
      `**B.** → True

The recovered law is $f(d)=3200 d^{-\\frac{3}{2}}$. At four kilometres the power is $8$, so

$$
f(4)=\\frac{3200}{8}=400
$$

The farther check $f(16)=\\frac{3200}{64}=50$ returns the file gap $350$, so the statement is True.`,
      `**C.** → False

An inverse-square law would carry exponent $-2$. The given decay is $d^{-\\frac{3}{2}}$. Quadrupling distance then cuts footfall by $4^{-\\frac{3}{2}}=\\frac{1}{8}$, whereas inverse-square decay would cut it by $\\frac{1}{16}$, so the statement is False.`,
      `**D.** → True

At nine kilometres:

$$
9^{\\frac{3}{2}}=3^{3}=27
$$

$$
f(9)=\\frac{3200}{27}\\approx 118.5
$$

That reading clears the $100$-visitor core threshold, so the statement is True.`,
      `**E.** → False

The extra-kilometre cut is the magnitude of the derivative of $f(d)=3200 d^{-\\frac{3}{2}}$:

$$
f'(d)=3200\\cdot\\left(-\\frac{3}{2}\\right)d^{-\\frac{5}{2}}
$$

$$
f'(d)=-4800 d^{-\\frac{5}{2}}
$$

So $\\lvert f'(d)\\rvert$ falls as $d$ rises. At four kilometres:

$$
4^{\\frac{5}{2}}=2^{5}=32
$$

$$
\\lvert f'(4)\\rvert=\\frac{4800}{32}=150
$$

At sixteen:

$$
16^{\\frac{5}{2}}=2^{10}=1024
$$

$$
\\lvert f'(16)\\rvert=\\frac{4800}{1024}\\approx 4.69
$$

An extra kilometre cuts more visitors near the park than far from it, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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
      `Output is proportional to the installed area.`,
      `Expanding the $225$ m² array to $450$ m² would push output above $520$ kWh.`,
      `Output per square metre is itself a power function of area.`,
      `The $100$ m² array delivers $2.4$ kWh per square metre.`,
      `To double the $240$ kWh output, the $100$ m² array must more than double in area.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A.** → False

The two arrays give $r=\\frac{1}{2}$, not $1$. A proportional forecast would have given

$$
240\\cdot\\frac{225}{100}=540
$$

but the second array delivers $360$. Output is not proportional to area, so the statement is False.`,
      `**B.** → False

Doubling $225$ square metres to $450$ multiplies output by $\\sqrt{2}$:

$$
y(450)=360\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.4142
$$

$$
y(450)\\approx 509.1
$$

That is under $520$ kWh, so the statement is False.`,
      `**C.** → True

Output per square metre is the recovered law divided by area:

$$
\\frac{y(a)}{a}=\\frac{24 a^{\\frac{1}{2}}}{a}
$$

$$
\\frac{y(a)}{a}=24 a^{-\\frac{1}{2}}
$$

which is a power of $a$ with exponent $-\\frac{1}{2}$, so the statement is True.`,
      `**D.** → True

The $100$ square-metre array delivers $240$ kWh, so output per square metre is $\\frac{240}{100}=2.4$, so the statement is True.`,
      `**E.** → True

Doubling the recorded $240$ kWh on $y(a)=24 a^{\\frac{1}{2}}$ means

$$
24 a^{\\frac{1}{2}}=480
$$

$$
a^{\\frac{1}{2}}=20
$$

$$
a=400
$$

The original array is $100$ square metres, so area must quadruple. Because $r=\\frac{1}{2}<1$, any doubling of output requires more than a doubling of area, so the statement is True.`,
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
      `Quadrupling cumulative volume halves the unit cost.`,
      `Unit cost is $20$ euros at $1600$ thousand cells.`,
      `Unit cost falls as volume grows, but cumulative spend still rises.`,
      `At $100$ thousand cells, cumulative spend is $8000$ euros.`,
      `If production continues, unit cost eventually becomes negative.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The milestones give $b=-\\frac{1}{2}$. Quadrupling volume is then the scale

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

at every starting volume, not only between $100$ and $400$. Quadrupling cumulative volume halves the unit cost, so the statement is True.`,
      `**B.** → True

The recovered law is $c(N)=800 N^{-\\frac{1}{2}}$. At $1600$ thousand cells:

$$
\\sqrt{1600}=40
$$

$$
c(1600)=\\frac{800}{40}=20
$$

The same figure is another quadrupling from $400$, which halves $40$ to $20$, so the statement is True.`,
      `**C.** → True

Cumulative spend multiplies unit cost by volume:

$$
S(N)=N\\cdot 800 N^{-\\frac{1}{2}}
$$

$$
S(N)=800 N^{\\frac{1}{2}}
$$

The square-root law is strictly increasing for $N>0$, even while unit cost falls. Spend at the milestones:

$$
S(100)=800\\cdot 10=8000
$$

$$
S(400)=800\\cdot 20=16000
$$

Unit cost falls as volume grows, but cumulative spend still rises, so the statement is True.`,
      `**D.** → True

Cumulative spend at a milestone is unit cost times volume. The first recorded pair is already $100\\cdot 80=8000$, so the statement is True.`,
      `**E.** → False

A negative-exponent power stays positive for every $N>0$. With $c(N)=\\frac{800}{\\sqrt{N}}$ the cost approaches $0$ from above but never crosses it. Unit cost does not become negative, so the statement is False.`,
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

**4.** Sign:

$c(N)>0$ for every $N>0$.

**Answer.** $b=-\\frac{1}{2}$ | $A=800$ | $c(1600)=20$ | $S(100)=8000$ | $S(N)=800\\sqrt{N}$`,
  },
  {
    id: `math-8-59`,
    case_id: `MATH 8.59`,
    title: `Sediment Transport Driven by Channel Discharge`,
    context: `Sediment transport in a channel follows $S(v)=A v^{3}$ tonnes per day, where $v>0$ is flow velocity, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity itself depends on discharge through $v(q)=\\frac{q^{0.5}}{2}$. The channel's stability limit is $5000$ tonnes per day. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the discharge more than doubles sediment transport.`,
      `The stability limit of $5000$ tonnes per day is reached at a discharge of $400$.`,
      `Doubling the flow velocity doubles sediment transport.`,
      `At discharge $36$, transport is $135$ tonnes per day.`,
      `The two-stage chain is not a power function of discharge.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The composed law is $S(q)=\\frac{5}{8} q^{\\frac{3}{2}}$. Doubling discharge multiplies transport by

$$
\\frac{S(2q)}{S(q)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83
$$

which exceeds $2$, so the statement is True.`,
      `**B.** → True

The stability limit on $S(q)=\\frac{5}{8} q^{\\frac{3}{2}}$ means

$$
\\frac{5}{8} q^{\\frac{3}{2}}=5000
$$

$$
q^{\\frac{3}{2}}=8000
$$

$$
8000=20^{3}
$$

$$
q=20^{2}=400
$$

Stage check: $v(400)=\\frac{20}{2}=10$ and $S(10)=5\\cdot 1000=5000$, so the statement is True.`,
      `**C.** → False

Doubling velocity acts on the transport stage alone. The exponent is $3$, so the scale factor is $2^{3}=8$, not $2$. Doubling velocity multiplies sediment transport by eight, so the statement is False.`,
      `**D.** → True

Velocity at discharge $36$ is $\\frac{\\sqrt{36}}{2}=\\frac{6}{2}=3$, the gauged run. That run carried $135$ tonnes per day, so the statement is True.`,
      `**E.** → False

A composition of power laws is again a power law. The composed transport $S(q)=\\frac{5}{8} q^{\\frac{3}{2}}$ is a power of discharge with exponent $\\frac{3}{2}$, so the statement is False.`,
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
      `At a price of $2.50$, revenue is $640$.`,
      `Raising the price always cuts revenue.`,
      `A price rise of $10\\%$ cuts quantity by about $25\\%$.`,
      `Because demand is highly elastic, a price rise raises revenue.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Demand is $q(p)=4000 p^{-3}$. Revenue multiplies by price, which raises the exponent by one:

$$
R(p)=p\\cdot 4000 p^{-3}
$$

$$
R(p)=4000 p^{-2}
$$

That is a power of $p$ with exponent $-2$, so the statement is True.`,
      `**B.** → True

Revenue is $R(p)=4000 p^{-2}$. At a price of $2.50=\\frac{5}{2}$:

$$
\\left(\\frac{5}{2}\\right)^{2}=\\frac{25}{4}=6.25
$$

$$
R(2.50)=\\frac{4000}{\\frac{25}{4}}
$$

$$
R(2.50)=4000\\cdot\\frac{4}{25}=640
$$

Revenue is $640$, so the statement is True.`,
      `**C.** → True

The exponent $-2$ on $R(p)=4000 p^{-2}$ is negative, so $R$ is strictly decreasing for $p>0$:

$$
R(2)=\\frac{4000}{4}=1000
$$

$$
R(4)=\\frac{4000}{16}=250
$$

Raising the price always cuts revenue, so the statement is True.`,
      `**D.** → True

The indexation is the multiplier $1.1$ acting through the demand exponent $-3$. The coefficient cancels:

$$
\\frac{q(1.1p)}{q(p)}=1.1^{-3}
$$

$$
1.1^{2}=1.21
$$

$$
1.1^{3}=1.331
$$

$$
1.1^{-3}=\\frac{1}{1.331}\\approx 0.7513
$$

The relative cut is about $24.9\\%$, which is about $25\\%$, so the statement is True.`,
      `**E.** → False

Highly elastic demand means $\\lvert r\\rvert=3>1$, so revenue falls when price rises. A $10\\%$ rise multiplies revenue by $1.1^{-2}=\\frac{1}{1.21}\\approx 0.826$, a cut of about $17\\%$. Elastic demand is why a price rise cuts revenue here, not why it would raise it, so the statement is False.`,
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
      `At $16$ A the weld strength is $320$ N.`,
      `If the current keeps growing, strength grows without bound.`,
      `An extra ampere adds more strength at $4$ A than it does at $9$ A.`,
      `The smallest current that clears the $400$ N reject line is below $18$ A.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The two welds give $k=\\frac{3}{2}$. An exponent larger than one means each extra ampere adds more strength than the ampere before it. Three halves is above one, so the statement is True.`,
      `**B.** → True

The recovered law is $S(p)=5p^{\\frac{3}{2}}$. At sixteen amperes:

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}
$$

$$
(2^{4})^{\\frac{3}{2}}=2^{6}=64
$$

$$
S(16)=5\\cdot 64=320
$$

The claimed strength is $320$ N, so the statement is True.`,
      `**C.** → True

The law is $5p^{\\frac{3}{2}}$: a positive multiple of a positive power of current. As current grows, that product has no ceiling, so the statement is True.`,
      `**D.** → False

An extra ampere is the derivative of $S(p)=5p^{\\frac{3}{2}}$:

$$
S'(p)=5\\cdot\\frac{3}{2}p^{\\frac{1}{2}}
$$

$$
S'(p)=\\frac{15}{2}p^{\\frac{1}{2}}
$$

$$
S'(4)=\\frac{15}{2}\\cdot 2=15
$$

$$
S'(9)=\\frac{15}{2}\\cdot 3=\\frac{45}{2}
$$

The leftover exponent $\\frac{1}{2}$ is positive, so the slope itself rises with current. Because $15<\\frac{45}{2}$, an extra ampere adds less at $4$ A than at $9$ A, so the statement is False.`,
      `**E.** → False

The reject line is $5p^{\\frac{3}{2}}=400$, so $p=80^{\\frac{2}{3}}$. Four cubed is $64$, so the cube root of $80$ is a little over $4.3$ and the threshold is a little over $18$ A. Directly at $18$ A:

$$
S(18)=5\\cdot 18^{\\frac{3}{2}}
$$

$$
18^{\\frac{3}{2}}=18\\cdot\\sqrt{18}=54\\sqrt{2}
$$

$$
S(18)=270\\sqrt{2}\\approx 381.8
$$

which is still below $400$ N. The smallest clearing current is about $18.57$ A, not below $18$ A, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** Because $k>1$, strength outruns current, an extra ampere adds more at $9$ A than at $4$ A, and $S(p)\\to\\infty$ as $p$ grows.

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
      `Switching the mass unit from kilograms to tonnes leaves the exponent unchanged.`,
      `A buoy of $125$ kg holds exactly $150$ kN.`,
      `Reaching $150$ kN requires a mass of $125$ tonnes.`,
      `The tonne-form coefficient is $1000$ times the kilogram coefficient.`,
      `Doubling buoy mass doubles holding power.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

A change of mass unit is the substitution $m=1000t$:

$$
H=A(1000t)^{\\frac{2}{3}}
$$

$$
(1000t)^{\\frac{2}{3}}=1000^{\\frac{2}{3}}t^{\\frac{2}{3}}
$$

$$
H=A\\cdot 1000^{\\frac{2}{3}}t^{\\frac{2}{3}}
$$

The conversion is absorbed into the new coefficient $B=A\\cdot 1000^{\\frac{2}{3}}$. The power of mass is still $\\frac{2}{3}$, so the statement is True.`,
      `**B.** → True

The kilogram law is $H(m)=6m^{\\frac{2}{3}}$. At $125$ kg:

$$
125^{\\frac{2}{3}}=(5^{3})^{\\frac{2}{3}}=5^{2}=25
$$

$$
H(125)=6\\cdot 25=150
$$

A $125$ kg buoy holds $150$ kN, so the statement is True.`,
      `**C.** → False

That $125$ kg is $0.125$ tonnes, not $125$ tonnes. A $125$ tonne buoy would hold $600\\cdot 25=15000$ kN, a hundred times the protocol. The storm mass is $125$ kg, so the statement is False.`,
      `**D.** → False

Substituting $m=1000t$ puts $1000$ under the exponent $\\frac{2}{3}$:

$$
B=6\\cdot 1000^{\\frac{2}{3}}
$$

$$
1000^{\\frac{2}{3}}=(10^{3})^{\\frac{2}{3}}=10^{2}=100
$$

$$
B=600
$$

The ratio $\\frac{B}{A}$ is $100$, not $1000$. A factor of $1000$ would need exponent $1$, so the statement is False.`,
      `**E.** → False

Doubling mass multiplies holding power by $2^{\\frac{2}{3}}$:

$$
\\frac{H(2m)}{H(m)}=2^{\\frac{2}{3}}\\approx 1.587
$$

An exact doubling would need exponent $1$, which would give the factor $2$. Holding power rises, but not in lockstep with mass, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
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

**2.** The conversion factor is $1000^{\\frac{2}{3}}=100$, not $1000$, and doubling mass multiplies holding power by $2^{\\frac{2}{3}}\\approx 1.587$.

**Answer.** $A=6$ | $B=600$ | storm mass $125$ kg | doubling factor $2^{\\frac{2}{3}}$`,
  },
  {
    id: `math-8-63`,
    case_id: `MATH 8.63`,
    title: `Mesh Throughput Against an Inverse-Square Floor`,
    context: `A wireless mesh's sustained throughput follows $T(d)=A d^{-2}$ megabits per second, where $d>0$ is the hop distance in metres. A bench test at $d=4$ m recorded $T=50$ Mbps. The link is rated reliable only while throughput stays at or above $8$ Mbps. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The hop distance needed for a given throughput is itself a power function of that throughput.`,
      `The farthest reliable hop distance is exactly $10$ m.`,
      `Doubling the hop distance halves the throughput.`,
      `A hop of $11$ m still clears the $8$ Mbps reliability floor.`,
      `If the hops keep growing, throughput eventually becomes negative.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

A power with a nonzero exponent inverts to another power. From $T=\\frac{800}{d^{2}}$ one gets

$$
d^{2}=\\frac{800}{T}
$$

$$
d=\\sqrt{800}\\, T^{-\\frac{1}{2}}
$$

Distance is a power of throughput with exponent $-\\frac{1}{2}$, so the statement is True.`,
      `**B.** → True

The $8$ Mbps floor is

$$
\\frac{800}{d^{2}}=8
$$

$$
d^{2}=100
$$

$$
d=10
$$

Because the exponent is negative, every longer hop falls below $8$ Mbps. The farthest reliable hop is exactly $10$ m, so the statement is True.`,
      `**C.** → False

Doubling the hop multiplies throughput by $2^{-2}$:

$$
\\frac{T(2d)}{T(d)}=2^{-2}=\\frac{1}{4}
$$

A cut to one half would need exponent $-1$, which would give $2^{-1}=\\frac{1}{2}$. An inverse-square law quarters the reading when distance doubles, so the statement is False.`,
      `**D.** → False

At $11$ m:

$$
T(11)=\\frac{800}{121}\\approx 6.61
$$

which is already below $8$ Mbps. The $10$ m floor sits at exactly $8$ Mbps, and a longer hop can only be slower, so the statement is False.`,
      `**E.** → False

The numerator $800$ is positive, so every hop $d>0$ keeps $T>0$. As hops grow, throughput falls toward $0$ from above and never crosses it, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**2.** Doubling a hop quarters throughput, the inverse $(2)$ is a power, and $T(d)$ stays positive for every $d>0$.

**Answer.** $A=800$ | reliable radius $10$ m | doubling factor $\\frac{1}{4}$ | $T$ never negative`,
  },
  {
    id: `math-8-64`,
    case_id: `MATH 8.64`,
    title: `Allometric Gill Area Across Body Masses`,
    context: `A fish physiologist models gill surface area as $G(m)=A m^{\\frac{3}{4}}$ square centimetres for body mass $m>0$ grams. A $256$ g specimen has gill area $512$ cm$^{2}$. Area per gram is the derived intensity $\\frac{G(m)}{m}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two $16$ g fish together have the same total gill area as one $32$ g fish.`,
      `At $16$ g the gill area is $64$ cm$^{2}$.`,
      `Gill area per gram is constant across body masses.`,
      `The exponent is smaller than one, so gill area grows more slowly than body mass.`,
      `The mass that produces $216$ cm$^{2}$ of gill area is $64$ g.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

The recovered law is $G(m)=8m^{\\frac{3}{4}}$. Two $16$ g fish:

$$
16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}=2^{3}=8
$$

$$
G(16)=8\\cdot 8=64
$$

$$
2G(16)=128
$$

One $32$ g fish:

$$
32^{\\frac{3}{4}}=(2^{5})^{\\frac{3}{4}}=2^{\\frac{15}{4}}=8\\cdot 2^{\\frac{3}{4}}
$$

$$
G(32)=64\\cdot 2^{\\frac{3}{4}}\\approx 107.63
$$

The pair carries more total gill than one $32$ g fish, so the statement is False.`,
      `**B.** → True

The $16$ g fish already came out at $64$ cm$^{2}$ of gill. That is the claimed area, so the statement is True.`,
      `**C.** → False

Area per gram subtracts $1$ from the exponent:

$$
\\frac{G(m)}{m}=8m^{\\frac{3}{4}-1}
$$

$$
\\frac{G(m)}{m}=8m^{-\\frac{1}{4}}
$$

The leftover exponent is negative, so intensity falls as mass grows. A constant intensity would need exponent $0$, so the statement is False.`,
      `**D.** → True

The allometric exponent is already $\\frac{3}{4}$. If mass scales by $c>1$, area scales by $c^{\\frac{3}{4}}$, and $\\frac{3}{4}<1$ forces $c^{\\frac{3}{4}}<c$. Each extra gram of body adds less gill than the gram before it, so the statement is True.`,
      `**E.** → False

A target of $216$ cm$^{2}$ inverts as

$$
8m^{\\frac{3}{4}}=216
$$

$$
m^{\\frac{3}{4}}=27
$$

$$
m=27^{\\frac{4}{3}}=81
$$

The claimed $64$ g produces $128\\sqrt{2}\\approx 181$ cm$^{2}$, short of $216$. The mass that produces $216$ cm$^{2}$ is $81$ g, so the statement is False.`,
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
      `Strength on day $4$ is $10$ MPa.`,
      `An extra day adds more strength after nine days of curing than it does after four.`,
      `Reaching $30$ MPa requires exactly $36$ days of curing.`,
      `The recorded $5$ MPa is the strength on day $9$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Quadrupling time multiplies strength by $\\sqrt{4}$, and the coefficient cancels:

$$
\\frac{S(4t)}{S(t)}=\\sqrt{4}=2
$$

The multiplier is exactly $2$ at every starting day. Quadrupling curing time doubles strength, so the statement is True.`,
      `**B.** → True

The law is $S(t)=5\\sqrt{t}$. Day $4$ is $5\\cdot 2=10$ MPa. The companion $15-10=5$ recovers the logged gap. Strength on day $4$ is $10$ MPa, so the statement is True.`,
      `**C.** → False

An extra day is the derivative of $S(t)=5\\sqrt{t}$:

$$
S'(t)=\\frac{5}{2}t^{-\\frac{1}{2}}
$$

$$
S'(4)=\\frac{5}{2}\\cdot\\frac{1}{2}=\\frac{5}{4}
$$

$$
S'(9)=\\frac{5}{2}\\cdot\\frac{1}{3}=\\frac{5}{6}
$$

Because $\\frac{5}{4}>\\frac{5}{6}$, the extra day adds more after four days than after nine, so the statement is False.`,
      `**D.** → True

Reaching $30$ MPa:

$$
5\\sqrt{t}=30
$$

$$
\\sqrt{t}=6
$$

$$
t=36
$$

Forward check: $5\\cdot 6=30$. Reaching $30$ MPa takes exactly $36$ days, so the statement is True.`,
      `**E.** → False

Day $9$ carries $5\\cdot 3=15$ MPa. The logged figure is the difference $15-10=5$, a gap, not the day-$9$ level, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
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
      `The two trusted spans are consistent with a square law.`,
      `The quadratic model predicts $y(9)=162$, so the recorded $150$ undershoots by $12$ mm.`,
      `Rescaling the coefficient to force $y(9)=150$ leaves $y(3)=18$ unchanged.`,
      `The two-point exponent fitted to $(3,18)$ and $(9,150)$ is still exactly $2$.`,
      `The third run sits on the same power law as the trusted pair.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The trusted spans double from $3$ m to $6$ m. Their ratio cancels $A$:

$$
\\frac{y(6)}{y(3)}=\\frac{72}{18}
$$

$$
\\frac{72}{18}=2^{k}
$$

$$
4=2^{k}
$$

$$
k=2
$$

An exponent of $2$ is a square law. The shorter span then pins $A\\cdot 9=18$, hence $A=2$. The longer run $2\\cdot 36=72$ sits on the same parabola, so the statement is True.`,
      `**B.** → True

The trusted law is $y(L)=2L^{2}$. At nine metres:

$$
y(9)=2\\cdot 9^{2}
$$

$$
9^{2}=81
$$

$$
y(9)=2\\cdot 81=162
$$

The recorded third run is $150$ mm, which lies $12$ mm below the quadratic, so the statement is True.`,
      `**C.** → False

Forcing $y(9)=150$ with exponent $2$ replaces the coefficient:

$$
A'\\cdot 81=150
$$

$$
A'=\\frac{50}{27}
$$

At three metres the rescaled law reads $\\frac{50}{27}\\cdot 9=\\frac{50}{3}\\approx 16.67$, not $18$. A coefficient change rescales every level, so the statement is False.`,
      `**D.** → False

Fitting the suspect pair $(3,18)$ and $(9,150)$ uses that pair's ratio:

$$
\\frac{150}{18}=3^{k}
$$

$$
\\frac{25}{3}=3^{k}
$$

An exact square would need $3^{2}=9$, but $\\frac{25}{3}\\approx 8.333$. The fitted exponent is $\\frac{\\ln(25/3)}{\\ln 3}\\approx 1.930$, not $2$, so the statement is False.`,
      `**E.** → False

The trusted law predicts $y(9)=162$, not the recorded $150$. The pair that uses the third run gives exponent about $1.930$ rather than $2$. The third run does not sit on the same power law, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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
      `Steel mass scales with the cube of height.`,
      `A $12$ m mast uses $864$ kg of steel.`,
      `The percentage rule alone forces the coefficient $A$ without using the $10$ m reference.`,
      `A $10\\%$ height increase raises mass by exactly $33.1\\%$.`,
      `A $20\\%$ height increase raises mass by $20\\%$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

A $20\\%$ stretch is a height factor of $1.2$, and a $72.8\\%$ rise is a mass factor of $1.728$. The ratio cancels $A$:

$$
\\frac{M(1.2h)}{M(h)}=1.2^{k}
$$

$$
1.2^{k}=1.728
$$

$$
1.2^{2}=1.44
$$

$$
1.44\\cdot 1.2=1.728
$$

so $1.2^{3}=1.728$ and $k=3$. Mass scales with the cube of height, so the statement is True.`,
      `**B.** → True

A $12$ m mast is the $10$ m reference lengthened by $20\\%$, so the design note supplies the multiplier $1.728$:

$$
\\frac{12}{10}=1.2
$$

$$
M(12)=500\\cdot 1.728=864
$$

A $12$ m mast uses $864$ kg of steel, so the statement is True.`,
      `**C.** → False

The $20\\%$ rule is a quotient of two masses, so $A$ cancels and every positive coefficient satisfies the note equally well. Scale information cannot substitute for a level, so the statement is False.`,
      `**D.** → True

The percentage rule gives $k=3$. A $10\\%$ stretch is the factor $1.1^{3}$:

$$
1.1^{2}=1.21
$$

$$
1.21\\cdot 1.1=1.331
$$

The mass rise is $0.331$, exactly $33.1\\%$, so the statement is True.`,
      `**E.** → False

A $20\\%$ stretch would raise mass by $20\\%$ only if the exponent were $1$, which would give the factor $1.2$. The design note records the factor $1.728$, a $72.8\\%$ rise, because $k=3$. Height and mass do not move in lockstep, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
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
      `The intensity law is $I(d)=1.44 d^{-2}$.`,
      `An extra metre cuts more intensity at $2$ m than it does at $6$ m.`,
      `At $6$ metres the intensity is still above the $0.08$ W/m$^{2}$ night cap.`,
      `The night cap is never met at any finite distance.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Doubling distance multiplies intensity by $2^{-2}$:

$$
\\frac{I(2d)}{I(d)}=2^{-2}=\\frac{1}{4}
$$

The factor is one quarter at every starting distance. Doubling the distance cuts intensity to one quarter, so the statement is True.`,
      `**B.** → False

The meter at $2$ m pins the coefficient:

$$
A\\cdot 2^{-2}=0.72
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
\\frac{A}{4}=0.72
$$

$$
A=2.88
$$

The law is $I(d)=\\frac{2.88}{d^{2}}$, which replays the meter as $\\frac{2.88}{4}=0.72$. The claimed $1.44$ multiplies the reading by the distance $2$ rather than by its square $4$:

$$
\\frac{1.44}{4}=0.36
$$

which is half the meter. The recovered coefficient is $2.88$, so the statement is False.`,
      `**C.** → True

An extra metre is the derivative of $I(d)=\\frac{2.88}{d^{2}}$:

$$
I'(d)=-5.76\\, d^{-3}
$$

The drop per metre is $\\frac{5.76}{d^{3}}$. At $2$ m that is $\\frac{5.76}{8}=0.72$; at $6$ m it is $\\frac{5.76}{216}\\approx 0.0267$. The drop is steeper near the hub, so the statement is True.`,
      `**D.** → False

At six metres:

$$
I(6)=\\frac{2.88}{36}=0.08
$$

Six metres is the night-cap boundary. The word above excludes a boundary value, so the statement is False.`,
      `**E.** → False

Setting $I=0.08$ gives $d^{2}=36$, so $d=6$. Intensity falls from $0.72$ toward $0$ and therefore crosses $0.08$ at a finite distance. The cap is met at $6$ m, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
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
      `At $q=5$ the jet speed is $20\\sqrt{2}$ m/s.`,
      `Doubling the flow doubles the head.`,
      `A jet speed of $40\\sqrt{2}$ m/s requires flow $20$ m$^{3}$/h.`,
      `Head is proportional to jet speed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Head is a square of flow and jet speed is a square root of that head. Composing multiplies the exponents:

$$
v(q)=4\\sqrt{2q^{2}}
$$

$$
v(q)=4\\sqrt{2}\\, q
$$

for $q>0$. The inner $2$ and the outer $\\frac{1}{2}$ multiply to $1$, a line through the origin. Jet speed is proportional to flow, so the statement is True.`,
      `**B.** → True

At the commissioning flow the head is already $50$ m. Pass that head through the nozzle:

$$
v=4\\sqrt{50}
$$

$$
\\sqrt{50}=5\\sqrt{2}
$$

$$
v=4\\cdot 5\\sqrt{2}=20\\sqrt{2}
$$

Jet speed at $q=5$ is $20\\sqrt{2}$ m/s, so the statement is True.`,
      `**C.** → False

Doubling flow multiplies head by $2^{2}$:

$$
\\frac{H(2q)}{H(q)}=2^{2}=4
$$

Head quadruples rather than doubles. An exact doubling of head would need exponent $1$. The claim is about head, so the statement is False.`,
      `**D.** → False

The composition is $v(q)=4\\sqrt{2}\\, q$. A target of $40\\sqrt{2}$ m/s is

$$
4\\sqrt{2}\\, q=40\\sqrt{2}
$$

$$
q=10
$$

A flow of $20$ would deliver $80\\sqrt{2}$ m/s, twice the target. The claimed $20$ treats speed as if it scaled with $q^{2}$. The target needs $10$ m$^{3}$/h, so the statement is False.`,
      `**E.** → False

Eliminating flow from $H=2q^{2}$ and $v=4\\sqrt{2}\\, q$ gives

$$
q=\\frac{v}{4\\sqrt{2}}
$$

$$
H=2\\left(\\frac{v}{4\\sqrt{2}}\\right)^{2}=\\frac{v^{2}}{16}
$$

Twice the speed therefore gives four times the head, not twice the head. Head is a square of jet speed, not a constant multiple of it, so the statement is False.`,
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
      `With $36$ drivers the model predicts $120$ pallets per hour.`,
      `Throughput per driver rises as the crew grows.`,
      `Reaching $150$ pallets per hour stays inside the safety cap.`,
      `Because throughput rises with crew, the safety cap on drivers is also a cap on pallets moved per hour.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Doubling throughput is a crew factor $k$ with $k^{\\frac{1}{2}}=2$:

$$
\\frac{T(ks)}{T(s)}=k^{\\frac{1}{2}}
$$

$$
k^{\\frac{1}{2}}=2
$$

$$
k=4
$$

An exact doubling of the crew would only multiply throughput by $\\sqrt{2}\\approx 1.41$. The yard needs four times the crew, not twice. That is more than a doubling, so the statement is True.`,
      `**B.** → True

The law is $T(s)=20\\sqrt{s}$. At the capped crew:

$$
T(36)=20\\cdot 36^{\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
T(36)=20\\cdot 6=120
$$

With $36$ drivers the model predicts $120$ pallets per hour, so the statement is True.`,
      `**C.** → False

Throughput per driver subtracts $1$ from the exponent:

$$
\\frac{T(s)}{s}=20s^{\\frac{1}{2}-1}
$$

$$
\\frac{T(s)}{s}=20s^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so intensity falls as the crew grows. A rising intensity would need a positive leftover exponent, so the statement is False.`,
      `**D.** → False

A target of $150$ inverts as

$$
20\\sqrt{s}=150
$$

$$
\\sqrt{s}=\\frac{150}{20}=7.5
$$

$$
s=7.5^{2}=56.25
$$

which exceeds the cap of $36$. Even the capped shift delivers only $120$ pallets per hour. Reaching $150$ lies outside the safety cap, so the statement is False.`,
      `**E.** → True

Throughput $T=20\\sqrt{s}$ rises with crew, so the largest legal crew of $36$ drivers produces the largest legal output, $120$ pallets per hour. No legal crew can exceed that. The driver cap is therefore also a cap on pallets moved per hour, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
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
    context: `A streaming service prices one subscription tier at $p$ euros a month. Paid subscribers, in thousands, follow $q(p)=A p^{r}$ with both constants unknown. Quadrupling any price multiplies the subscriber count by one eighth, and at four euros the tier holds two hundred and fifty thousand subscribers. Monthly revenue is $R=pq$, also in thousands of euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent on price in the demand model is smaller than minus one, so subscribers fall faster than the price rises.`,
      `At a price of $16$ euros, monthly revenue for the tier is $500$ thousand euros.`,
      `Revenue is a power function of price.`,
      `To double monthly revenue from the recorded four-euro price, the service must cut that price in half.`,
      `At a price of $9$ euros, monthly revenue is under $600$ thousand euros.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The scale rule gives $r=-\\frac{3}{2}$. Minus three halves sits below minus one:

$$
-\\frac{3}{2}<-1
$$

A given price factor therefore cuts subscribers by more than that factor. Subscribers fall faster than the price rises, so the statement is True.`,
      `**B.** → True

Revenue is $R(p)=2000p^{-\\frac{1}{2}}$. At sixteen euros the square root is $4$:

$$
R(16)=2000\\cdot 16^{-\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
R(16)=\\frac{2000}{4}=500
$$

The claimed monthly revenue is $500$ thousand euros, so the statement is True.`,
      `**C.** → True

Demand is $q(p)=2000p^{-\\frac{3}{2}}$. Multiplying by price adds one to the exponent:

$$
R(p)=2000p^{-\\frac{1}{2}}
$$

That is a monomial in $p$, so revenue is a power function of price, so the statement is True.`,
      `**D.** → False

Revenue is $R(p)=2000p^{-\\frac{1}{2}}$, so $R(4)=1000$. Doubling that revenue asks for a price factor $k$ with

$$
k^{-\\frac{1}{2}}=2
$$

$$
k^{\\frac{1}{2}}=\\frac{1}{2}
$$

$$
k=\\frac{1}{4}
$$

The price must be quartered, not halved. Halving would multiply revenue only by $\\sqrt{2}$, about $1.41$, not by $2$, so the statement is False.`,
      `**E.** → False

Revenue is $R(p)=2000p^{-\\frac{1}{2}}$. At nine euros:

$$
R(9)=2000\\cdot 9^{-\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
R(9)=\\frac{2000}{3}\\approx 666.67
$$

That sits above six hundred, not under, so the statement is False.`,
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

**2.** $R(16)=500$ and $R(9)=\\frac{2000}{3}\\approx 666.67$, which is not under $600$. Doubling $R(4)=1000$ needs the price factor $\\frac{1}{4}$, not $\\frac{1}{2}$.

**Answer.** $r=-\\frac{3}{2}$ | $A=2000$ | $R(16)=500$ | price factor $\\frac{1}{4}$ to double revenue`,
  },
  {
    id: `math-8-72`,
    case_id: `MATH 8.72`,
    title: `Fixed Retainer Plus a Square-Root Monitoring Fee`,
    context: `A compliance-monitoring platform bills $C(n)=F+A n^{\\frac{1}{2}}$ euros a month for $n\\ge 1$ branches, with both constants unknown. One hundred branches cost seven hundred euros, and four hundred branches cost one thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because of the retainer, the monthly bill is not a power function of the branch count.`,
      `Monitoring $900$ branches costs $1300$ euros a month.`,
      `A larger network is cheaper per branch.`,
      `Quadrupling the branch count doubles the whole bill.`,
      `Thirty-six branches cost more than the hundred-branch invoice.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The two invoices give $C(n)=400+30n^{\\frac{1}{2}}$. A power $A n^{r}$ cannot carry a nonzero intercept, and the retainer is $400$, so the statement is True.`,
      `**B.** → True

The bill is $C(n)=400+30n^{\\frac{1}{2}}$. Nine hundred branches is a clean square:

$$
900^{\\frac{1}{2}}=30
$$

$$
C(900)=400+30\\cdot 30
$$

$$
C(900)=400+900=1300
$$

The monthly bill is $1300$ euros, so the statement is True.`,
      `**C.** → True

The bill is $C(n)=400+30n^{\\frac{1}{2}}$. Average cost per branch is

$$
\\frac{C(n)}{n}=\\frac{400}{n}+30n^{-\\frac{1}{2}}
$$

Both terms fall as $n$ grows: the retainer is spread thinner, and the leftover exponent on the monitoring term is negative, so the statement is True.`,
      `**D.** → False

The recorded invoices already are a quadrupling: $100$ branches at $700$ euros and $400$ at $1000$. Doubling the whole bill would have made the second invoice $1400$, not $1000$. Only the square-root term doubles when $n$ quadruples; the $400$-euro retainer stays put, so the statement is False.`,
      `**E.** → False

The bill is $C(n)=400+30n^{\\frac{1}{2}}$. Thirty-six is a clean square:

$$
36^{\\frac{1}{2}}=6
$$

$$
C(36)=400+30\\cdot 6
$$

$$
C(36)=400+180=580
$$

Five hundred and eighty is less than the hundred-branch invoice of $700$, so the statement is False.`,
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

**2.** $C(900)=1300$ and $C(36)=580$, which is below $C(100)=700$. Quadrupling raises the bill from $700$ to $1000$, not to $1400$.

**Answer.** $F=400$ | $A=30$ | $C(900)=1300$ | $C(36)=580$`,
  },
  {
    id: `math-8-73`,
    case_id: `MATH 8.73`,
    title: `Ordering Cost Against Holding Cost at a Spare-Parts Depot`,
    context: `A spare-parts depot reorders one component in batches of $q>0$ units. Annual ordering cost is $O(q)=A q^{-1}$ euros and annual holding cost is $H(q)=B q$ euros, with both coefficients unknown. At a batch of forty units the two components are equal, and each is one hundred and twenty euros. The annual total is $T=O+H$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Annual total cost is smallest where the two components meet.`,
      `A batch of $60$ units costs more than $250$ euros a year in total.`,
      `Doubling any batch size leaves the annual total unchanged.`,
      `Cutting the batch from forty units to twenty raises the annual total by as much as raising it from forty to eighty.`,
      `At $80$ units, ordering cost is more than $200$ euros.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Total cost is $T(q)=\\frac{4800}{q}+3q$. Differentiate term by term:

$$
T'(q)=-4800q^{-2}+3
$$

A critical point solves $T'(q)=0$:

$$
3=4800q^{-2}
$$

$$
q^{2}=\\frac{4800}{3}
$$

$$
q^{2}=1600
$$

$$
q=40
$$

because $q>0$. The second derivative is

$$
T''(q)=9600q^{-3}
$$

For every $q>0$ this is positive, so the crossing is a minimum, so the statement is True.`,
      `**B.** → True

Total cost is $T(q)=\\frac{4800}{q}+3q$. At sixty units:

$$
O(60)=\\frac{4800}{60}=80
$$

$$
H(60)=3\\cdot 60=180
$$

$$
T(60)=80+180=260
$$

Two hundred and sixty exceeds two hundred and fifty, so the statement is True.`,
      `**C.** → False

Total cost is $T(q)=\\frac{4800}{q}+3q$. Doubling any batch gives

$$
T(2q)=\\frac{4800}{2q}+3\\cdot(2q)
$$

$$
T(2q)=\\frac{2400}{q}+6q
$$

which is not $T(q)$. At the recorded batch the total is $240$; at eighty it is $300$. Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing, so the statement is False.`,
      `**D.** → True

Total cost is $T(q)=\\frac{4800}{q}+3q$, and $T(40)=240$. Twenty and eighty multiply to $1600$, so they are a reciprocal pair:

$$
T(20)=\\frac{4800}{20}+3\\cdot 20
$$

$$
T(20)=300
$$

$$
T(80)=\\frac{4800}{80}+3\\cdot 80
$$

$$
T(80)=300
$$

Each move raises the annual total by $60$ euros, so the two moves cost the same, so the statement is True.`,
      `**E.** → False

Ordering cost is $O(q)=\\frac{4800}{q}$. At eighty units:

$$
O(80)=\\frac{4800}{80}=60
$$

Sixty sits well below two hundred. Holding is the large term on this side of the crossing, so the statement is False.`,
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
    context: `Output on a bottling line follows $Q(L)=A L^{r}$ units a shift, where $L>0$ is labour hours, with both constants unknown. Sixteen hours produce ninety-six units, and eighty-one hours produce three hundred and twenty-four. Average product is output per labour hour, $Q(L)/L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Average product is a power function of labour hours, but its exponent is not the exponent of output.`,
      `At $16$ hours, average product is under $7$ units an hour.`,
      `To double output she must double the labour hours.`,
      `Average product falls as labour hours rise.`,
      `At $81$ hours, average product is $6$ units an hour.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The two shifts give $r=\\frac{3}{4}$. Dividing output by labour subtracts one:

$$
\\frac{Q(L)}{L}=A L^{-\\frac{1}{4}}
$$

The exponents $\\frac{3}{4}$ and $-\\frac{1}{4}$ differ, so the statement is True.`,
      `**B.** → True

Sixteen hours produce $96$ units, so average product is just that quotient:

$$
\\frac{Q(16)}{16}=\\frac{96}{16}=6
$$

Six is under seven, so the statement is True.`,
      `**C.** → False

The shift ratio already gave $r=\\frac{3}{4}$. Doubling output would need a labour factor $k$ with

$$
k^{\\frac{3}{4}}=2
$$

$$
k=2^{\\frac{4}{3}}\\approx 2.52
$$

She must more than double the hours. Doubling labour would multiply output only by $2^{\\frac{3}{4}}\\approx 1.68$, short of $2$, so the statement is False.`,
      `**D.** → True

Average product is $A L^{-\\frac{1}{4}}$. The leftover exponent is negative: each extra hour adds less output than the hour before it, and spreading that output over more hours pulls the average down. At the recorded shifts the averages are $6$ and $4$, so the statement is True.`,
      `**E.** → False

Eighty-one hours produce $324$ units, so

$$
\\frac{Q(81)}{81}=\\frac{324}{81}=4
$$

The figure $6$ is the sixteen-hour average, not the eighty-one-hour one, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**2.** Doubling output needs the hour-factor $2^{\\frac{4}{3}}\\approx 2.52$, not $2$. The figure $6$ at eighty-one hours is the sixteen-hour average, not the eighty-one-hour one.

**Answer.** $r=\\frac{3}{4}$ | $A=12$ | average $6$ at $L=16$ and $4$ at $L=81$`,
  },
  {
    id: `math-8-75`,
    case_id: `MATH 8.75`,
    title: `Learning Curve With an Irreducible Assembly Floor`,
    context: `A drone-assembly cell models the labour time of the unit built after $n$ cumulative units by $t(n)=F+A n^{-\\frac{1}{2}}$ minutes, $n\\ge 1$, with both constants unknown. After twenty-five units the next unit takes eighteen minutes, and after one hundred units it takes thirteen. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `As cumulative output grows without bound, unit time approaches the handling floor without ever reaching it.`,
      `Modelled unit time first falls below $10$ minutes once cumulative output passes $625$ units.`,
      `Quadrupling cumulative output halves the learning component.`,
      `Quadrupling cumulative output halves the modelled unit time.`,
      `The unit built after $4$ cumulative units takes under $30$ minutes.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Unit time is $t(n)=8+50n^{-\\frac{1}{2}}$. As $n$ grows the learning term dies, so $t$ approaches $8$. No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the floor is approached and never attained, so the statement is True.`,
      `**B.** → True

Unit time is $t(n)=8+50n^{-\\frac{1}{2}}$. The time falls below ten minutes when

$$
8+\\frac{50}{\\sqrt{n}}<10
$$

$$
\\frac{50}{\\sqrt{n}}<2
$$

$$
\\sqrt{n}>25
$$

$$
n>625
$$

At $n=625$ the time is exactly $10$ minutes, and it drops below only afterwards, so the statement is True.`,
      `**C.** → True

The learning component is $A n^{-\\frac{1}{2}}$. Quadrupling $n$ multiplies that power by $4$ to the exponent $-\\frac{1}{2}$:

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

The learning component halves, so the statement is True.`,
      `**D.** → False

The recorded pair is already a quadrupling: $18$ minutes down to $13$. Halving the whole unit time would have made the second timing $9$, not $13$. The learning term halves, but the eight-minute floor stays put and dilutes the gain in the total, so the statement is False.`,
      `**E.** → False

Unit time is $t(n)=8+50n^{-\\frac{1}{2}}$. At four units:

$$
4^{\\frac{1}{2}}=2
$$

$$
t(4)=8+\\frac{50}{2}
$$

$$
t(4)=8+25=33
$$

Thirty-three minutes is above thirty, so the statement is False.`,
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

**1.** The floor $8$ is a horizontal asymptote, never attained. $t(n)<10$ if and only if $n>625$.

**2.** Quadrupling halves the learning term, $10$ to $5$, but cuts the total only from $18$ to $13$. After four units, $t(4)=33$, which is not under $30$.

**Answer.** $F=8$ | $A=50$ | $t(25)=18$ | $t(100)=13$ | below $10$ min once $n>625$`,
  },
  {
    id: `math-8-76`,
    case_id: `MATH 8.76`,
    title: `Break-Even for a Fish Farm With Diminishing Harvest Returns`,
    context: `A fish farm turns feed into harvest revenue $R(x)=A x^{\\frac{2}{3}}$ thousand euros in a season, where $x>0$ is tonnes of feed, while feed and handling cost $C(x)=30x$ thousand euros. At eight tonnes of feed, harvest revenue was three hundred and sixty thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue is proportional to the tonnes of feed used.`,
      `Revenue equals cost at $27$ tonnes.`,
      `An extra tonne of feed adds more revenue after twenty-seven tonnes than after eight.`,
      `Once cost overtakes revenue, feeding still more cannot restore a surplus.`,
      `At $8$ tonnes the season clears more than $100$ thousand euros.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

Proportionality would mean revenue is a constant times feed, so exponent $1$. Harvest follows $R(x)=A x^{\\frac{2}{3}}$, and two thirds is not one. Doubling feed therefore multiplies revenue by

$$
2^{\\frac{2}{3}}\\approx 1.59
$$

not by $2$, so the statement is False.`,
      `**B.** → True

Revenue is $R(x)=90x^{\\frac{2}{3}}$ and cost is $C(x)=30x$. Set them equal:

$$
90x^{\\frac{2}{3}}=30x
$$

$$
3=x^{\\frac{1}{3}}
$$

$$
x=27
$$

Both sides at twenty-seven tonnes are

$$
27^{\\frac{2}{3}}=9
$$

$$
R(27)=90\\cdot 9=810
$$

$$
C(27)=30\\cdot 27=810
$$

Revenue equals cost at $27$ tonnes, so the statement is True.`,
      `**C.** → False

Revenue is $R(x)=90x^{\\frac{2}{3}}$. An extra tonne adds the derivative:

$$
R'(x)=60x^{-\\frac{1}{3}}
$$

At eight tonnes, $8^{\\frac{1}{3}}=2$, so $R'(8)=30$. At twenty-seven tonnes, $27^{\\frac{1}{3}}=3$, so $R'(27)=20$. The extra tonne adds less after twenty-seven tonnes than after eight, because the leftover exponent is negative, so the statement is False.`,
      `**D.** → True

Revenue is $R(x)=90x^{\\frac{2}{3}}$ and cost is $C(x)=30x$. Their ratio is

$$
\\frac{R(x)}{C(x)}=\\frac{3}{x^{\\frac{1}{3}}}
$$

The ratio equals $1$ at $x=27$ and is strictly less than $1$ for every larger $x$, because the cube root keeps growing. Extra feed widens the gap; it cannot restore a surplus, so the statement is True.`,
      `**E.** → True

Revenue at eight tonnes is already recorded as $360$ thousand euros, and cost is $C(x)=30x$:

$$
C(8)=30\\cdot 8=240
$$

$$
P(8)=360-240=120
$$

One hundred and twenty exceeds one hundred, so the statement is True.`,
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

**1.** Revenue is not proportional to feed. Break-even is $x=27$, where both equal $810$. Profit at $x=8$ is $120$.

**2.** $R'(8)=30>R'(27)=20$. For $x>27$ ratio (2) stays below $1$, so extra feed cannot restore a surplus.

**Answer.** $A=90$ | break-even at $x=27$ | $P(8)=120$ | cost leads for every $x>27$`,
  },
  {
    id: `math-8-77`,
    case_id: `MATH 8.77`,
    title: `Calibrating a Handling-Cost Law From a Cost Difference`,
    context: `A distribution centre models daily handling cost by $f(x)=A x^{\\frac{3}{2}}$ euros, where $x>0$ is a pallet-volume index. The individual daily figures were lost, and the only surviving record states that the cost at index sixteen exceeds the cost at index four by three hundred and thirty-six euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Multiplying the pallet-volume index by $4$ multiplies handling cost by $4$.`,
      `At index $9$ the modelled handling cost is $162$ euros.`,
      `Handling cost grows faster than the pallet-volume index.`,
      `Because the exponent exceeds one, equal gaps in the index produce equal gaps in cost.`,
      `The difference $f(25)-f(9)$ is under $500$ euros.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

The multiplier of $A x^{\\frac{3}{2}}$ is the input factor to the power $\\frac{3}{2}$, and $A$ cancels:

$$
\\frac{f(4x)}{f(x)}=4^{\\frac{3}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

Cost is multiplied by eight, not by four. The four-fold factor would belong to exponent $1$, so the statement is False.`,
      `**B.** → True

Handling is $f(x)=6x^{\\frac{3}{2}}$. At index nine:

$$
9^{\\frac{3}{2}}=27
$$

$$
f(9)=6\\cdot 27=162
$$

The claimed cost is $162$ euros, so the statement is True.`,
      `**C.** → True

The exponent $\\frac{3}{2}$ is larger than one, so cost outruns the pallet-volume index. A four-fold rise in the index multiplies cost by eight, not by four, so the statement is True.`,
      `**D.** → False

Handling is $f(x)=6x^{\\frac{3}{2}}$. Equal cost gaps would need a linear rule, exponent $1$. Differentiate:

$$
f'(x)=9x^{\\frac{1}{2}}
$$

The slope itself rises with $x$, so later index steps add more euros than earlier ones of the same width, so the statement is False.`,
      `**E.** → False

Handling is $f(x)=6x^{\\frac{3}{2}}$, and $f(9)=162$. At index twenty-five:

$$
25^{\\frac{3}{2}}=125
$$

$$
f(25)=6\\cdot 125=750
$$

$$
f(25)-f(9)=750-162=588
$$

Five hundred and eighty-eight is not under five hundred, so the statement is False.`,
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

**2.** $f(9)=162$ and $f(25)-f(9)=588$, which is not under $500$.

**Answer.** $A=6$ | $f(9)=162$ | $f(25)=750$ | factor of $4$ on volume multiplies cost by $8$`,
  },
  {
    id: `math-8-78`,
    case_id: `MATH 8.78`,
    title: `Inverting a Wastewater Load Model Against a Permit Ceiling`,
    context: `A dye-house discharges a wastewater load of $W(s)=A s^{\\frac{3}{2}}$ kilograms a day, where $s>0$ is a production scale index. At scale nine the daily load is one hundred and thirty-five kilograms. The site permit caps the daily load at three hundred and twenty kilograms, and the plant wants the largest scale it may run. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The scale needed for a given load is itself a power function of that load.`,
      `The largest admissible scale index is $16$.`,
      `Doubling the permit ceiling doubles the admissible scale index.`,
      `If the coefficient doubled, the admissible scale under the same ceiling would be halved.`,
      `At scale index $4$ the daily load is under $50$ kilograms.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

A power with a nonzero exponent inverts to another power. Load is $W=A s^{\\frac{3}{2}}$, so

$$
s=\\left(\\frac{W}{A}\\right)^{\\frac{2}{3}}
$$

That is a constant times $W^{\\frac{2}{3}}$, a power of load, so the statement is True.`,
      `**B.** → True

Load is $W(s)=5s^{\\frac{3}{2}}$. At the $320$ kilogram ceiling:

$$
5s^{\\frac{3}{2}}=320
$$

$$
s^{\\frac{3}{2}}=64
$$

$$
s=64^{\\frac{2}{3}}
$$

$$
64^{\\frac{1}{3}}=4
$$

$$
s=16
$$

The exponent $\\frac{3}{2}$ is positive, so every larger index breaches the permit. The largest admissible scale is sixteen, so the statement is True.`,
      `**C.** → False

The inverse is $s=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}}$. Doubling the ceiling multiplies permitted scale by

$$
2^{\\frac{2}{3}}\\approx 1.59
$$

not by $2$. The inverse exponent $\\frac{2}{3}$ is smaller than one, so permitted scale grows more slowly than the permitted load, so the statement is False.`,
      `**D.** → False

Load is $W=5s^{\\frac{3}{2}}$, and the ceiling gives $s=16$. Doubling the coefficient to $10$ gives

$$
10s^{\\frac{3}{2}}=320
$$

$$
s^{\\frac{3}{2}}=32
$$

$$
s=32^{\\frac{2}{3}}\\approx 10.08
$$

Halving would require $s=8$. The scale factor is $2^{-\\frac{2}{3}}\\approx 0.63$, not $\\frac{1}{2}$, so the statement is False.`,
      `**E.** → True

Load is $W(s)=5s^{\\frac{3}{2}}$. At scale four:

$$
4^{\\frac{3}{2}}=8
$$

$$
W(4)=5\\cdot 8=40
$$

Forty kilograms is under fifty, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
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

**1.** The inverse (2) is a power of load. The binding permit gives $s=16$, and $W(4)=40<50$.

**2.** Doubling the cap raises the index by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. Doubling $A$ cuts the index by $2^{-\\frac{2}{3}}\\approx 0.63$, not by $\\frac{1}{2}$.

**Answer.** $A=5$ | largest $s=16$ | $W(4)=40$ | cap factor $2$ raises $s$ by $2^{\\frac{2}{3}}$`,
  },
  {
    id: `math-8-79`,
    case_id: `MATH 8.79`,
    title: `Elasticity Shortcut Against the Exact Change in Parking Demand`,
    context: `A city parking authority models hourly demand by $q(p)=A p^{-2}$ occupied spaces, where $p>0$ is the hourly tariff in euros. It records four thousand occupied spaces at a tariff of three euros. Demand of this form has constant elasticity minus two, so the usual shortcut predicts a percentage change in demand equal to minus two times the percentage change in tariff. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `For a twenty-five percent tariff rise, the elasticity shortcut and the exact power both cut demand by one half.`,
      `Raising the tariff by $25\\%$ leaves more than $2500$ occupied spaces.`,
      `The elasticity shortcut overstates the true loss from a twenty-five percent tariff rise.`,
      `Cutting the tariff by twenty-five percent raises demand by the same percentage that a twenty-five percent rise cuts it.`,
      `At a tariff of $2$ euros, hourly demand exceeds $8000$ occupied spaces.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

A twenty-five percent tariff rise is the factor $\\frac{5}{4}$. The elasticity shortcut predicts

$$
-2\\times 25\\%=-50\\%
$$

The exact multiplier raises that factor to the exponent $-2$:

$$
\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}=0.64
$$

Demand keeps $64\\%$ of its level, a cut of $36\\%$, not one half. The shortcut cuts by one half and the exact power does not, so the statement is False.`,
      `**B.** → True

Demand at three euros is $4000$. The exact factor for a twenty-five percent rise is $\\frac{16}{25}$:

$$
4000\\cdot\\frac{16}{25}=2560
$$

Two thousand five hundred and sixty exceeds two thousand five hundred, so the statement is True.`,
      `**C.** → True

The shortcut predicts a $50\\%$ loss. The exact factor is $\\frac{16}{25}=0.64$, a $36\\%$ loss. A predicted $50\\%$ against a true $36\\%$ overstates the loss, so the statement is True.`,
      `**D.** → False

A twenty-five percent rise multiplies demand by $\\frac{16}{25}$, a $36\\%$ loss. A twenty-five percent cut is the factor $\\frac{3}{4}$:

$$
\\left(\\frac{3}{4}\\right)^{-2}=\\frac{16}{9}
$$

$$
\\frac{16}{9}-1=\\frac{7}{9}\\approx 0.778
$$

a rise of about $77.8\\%$, not $36\\%$. The two percentages are not the same, so the statement is False.`,
      `**E.** → True

Demand is $q(p)=36000p^{-2}$. At two euros:

$$
q(2)=36000\\cdot 2^{-2}
$$

$$
2^{2}=4
$$

$$
q(2)=\\frac{36000}{4}=9000
$$

Nine thousand exceeds eight thousand, so the statement is True.`,
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

**1.** A $25\\%$ rise has exact multiplier $0.64$, a $36\\%$ cut, so $q(3.75)=2560>2500$. The shortcut's $50\\%$ overstates that loss. The two routes do not both cut demand by one half.

**2.** A $25\\%$ cut raises demand by about $77.8\\%$, not by $36\\%$. At $p=2$, demand is $9000>8000$.

**Answer.** $A=36000$ | exact cut $36\\%$ for a $25\\%$ rise | $q(3.75)=2560$ | $q(2)=9000$`,
  },
  {
    id: `math-8-80`,
    case_id: `MATH 8.80`,
    title: `Geometrically Similar Bells Cast From One Pattern`,
    context: `A foundry casts geometrically similar bronze bells from a single pattern, so mass follows $M(h)=A h^{3}$ kilograms, where $h>0$ is height in metres. The pattern book omits the coefficient; it records only that a finished bell of height one half metre was weighed at thirty kilograms. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling a bell's height multiplies its mass by eight.`,
      `A bell of height $1.5$ m has a mass of $810$ kg.`,
      `A bell three times as tall as another has three times its mass.`,
      `Mass per metre of height is the same at every height.`,
      `A one-metre bell weighs $30$ kg.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Mass follows $M(h)=A h^{3}$. Doubling height feeds a factor of $2$ through the exponent $3$, and $A$ cancels:

$$
\\frac{M(2h)}{M(h)}=2^{3}
$$

$$
2^{3}=8
$$

Geometric similarity fixes that cube, so every doubling of height multiplies mass by eight, so the statement is True.`,
      `**B.** → True

The weighing pins $A=240$, so $M(h)=240h^{3}$. At one and a half metres, write $1.5=\\frac{3}{2}$:

$$
\\left(\\frac{3}{2}\\right)^{3}=\\frac{27}{8}
$$

$$
M\\left(\\frac{3}{2}\\right)=240\\cdot\\frac{27}{8}=810
$$

The mass is $810$ kg, so the statement is True.`,
      `**C.** → False

Mass is a cube of height, so a factor of $3$ on height multiplies mass by

$$
3^{3}=27
$$

not by $3$. The half-metre bell at $30$ kg would become $810$ kg at $1.5$ m, not $90$ kg, so the statement is False.`,
      `**D.** → False

Mass is $M(h)=240h^{3}$, so mass per metre of height is

$$
\\frac{M(h)}{h}=240h^{2}
$$

which still grows with $h$. At half a metre the quotient is $60$ kg per metre; at one metre it is $240$. The two figures differ, so the statement is False.`,
      `**E.** → False

Mass is $M(h)=240h^{3}$. At one metre the cube is $1$, so the mass is just the coefficient $240$. The figure $30$ is the half-metre weighing. Doubling height from $\\frac{1}{2}$ to $1$ multiplies mass by $8$, and $8\\times 30=240$, not $30$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** Doubling multiplies mass by $8$. Tripling multiplies it by $27$, not by $3$. Mass per metre is $240h^{2}$, not constant.

**2.** $M(1.5)=810$ and $M(1)=240$, not $30$.

**Answer.** $A=240$ | $M(1.5)=810$ | doubling $\\times 8$ | tripling $\\times 27$ | $M(1)=240$`,
  },
  {
    id: `math-8-81`,
    case_id: `MATH 8.81`,
    title: `Drag and Sustained Power on a Velodrome`,
    context: `Aerodynamic drag on a track cyclist follows $F(v)=A v^{r}$ newtons for speed $v>0$ metres per second, with both constants unknown. Doubling any speed multiplies drag by four, and raising speed from $8$ to $12$ m/s increased drag by exactly $40$ N. The power needed to overcome that drag is $P=Fv$ watts, and the rider can hold $500$ W for a full pursuit. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Riding $25\\%$ faster raises the absorbed power by $75\\%$.`,
      `The $500$ W ceiling is reached at exactly $10$ m/s.`,
      `An extra metre per second of speed adds more watts at $12$ m/s than it does at $8$ m/s.`,
      `The rider stays under $500$ W at every speed below $10$ m/s.`,
      `At $12$ m/s the rider absorbs $600$ W.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

Power is $P(v)=\\frac{1}{2}v^{3}$. Riding $25\\%$ faster is the speed multiplier $1.25$, and the coefficient cancels:

$$
\\frac{P(1.25v)}{P(v)}=1.25^{3}
$$

Square first:

$$
1.25^{2}=1.5625
$$

Then one more factor of $1.25$:

$$
1.25^{3}=1.5625\\cdot 1.25
$$

$$
1.25^{3}=1.953125
$$

As a fraction that cube is $\\left(\\frac{5}{4}\\right)^{3}=\\frac{125}{64}$. The relative rise is

$$
1.953125-1=0.953125
$$

or $95.3125\\%$. The claimed $75\\%$ is three times $25\\%$, as if power scaled linearly with speed. Power rises by $95.3125\\%$, so the statement is False.`,
      `**B.** → True

The $500$ W ceiling inverts $P(v)=\\frac{1}{2}v^{3}$:

$$
\\frac{1}{2}v^{3}=500
$$

$$
v^{3}=1000
$$

$$
v=10
$$

because $10^{3}=1000$ and speed is positive. Forward check:

$$
P(10)=\\frac{1}{2}\\cdot 1000=500
$$

The ceiling sits at exactly $10$ m/s, so the statement is True.`,
      `**C.** → True

An extra metre per second is the derivative of $P(v)=\\frac{1}{2}v^{3}$:

$$
P'(v)=\\frac{3}{2}v^{2}
$$

The leftover exponent is still positive, so the extra metre itself costs more as the rider goes faster. At $8$ m/s:

$$
P'(8)=\\frac{3}{2}\\cdot 8^{2}
$$

$$
8^{2}=64
$$

$$
P'(8)=\\frac{3}{2}\\cdot 64=96
$$

At $12$ m/s:

$$
P'(12)=\\frac{3}{2}\\cdot 12^{2}
$$

$$
12^{2}=144
$$

$$
P'(12)=\\frac{3}{2}\\cdot 144=216
$$

Because $216>96$, the extra metre costs more watts at $12$ m/s than it does at $8$ m/s, so the statement is True.`,
      `**D.** → True

$P(v)=\\frac{1}{2}v^{3}$ is strictly increasing on $v>0$, and $P(10)=500$, so $P(v)<500$ if and only if $v<10$. At the logged speed $v=8$:

$$
8^{3}=512
$$

$$
P(8)=\\frac{1}{2}\\cdot 512=256
$$

and $256<500$. The rider stays under $500$ W at every speed below $10$ m/s, so the statement is True.`,
      `**E.** → False

At $12$ m/s the cubic is

$$
P(12)=\\frac{1}{2}\\cdot 12^{3}
$$

$$
12^{2}=144
$$

$$
12^{3}=144\\cdot 12
$$

$$
12^{3}=1728
$$

$$
P(12)=\\frac{1}{2}\\cdot 1728=864
$$

The claimed $600$ W is $500\\times 1.2$, as if a $20\\%$ speed rise above $10$ m/s raised power by $20\\%$. Power is cubic in speed, so that shortcut understates the cost. The rider absorbs $864$ W, so the statement is False.`,
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

**2.** Invert (3) at the rider's ceiling:

$$\\frac{1}{2}v^{3}=500 \\quad \\Rightarrow \\quad v=10$$

**3.** Exact scale factors, which the linear shortcut only approximates:

$$1.25^{3}=1.953125\\;(+95.3125\\%), \\qquad 1.2^{3}=1.728$$

**4.** Levels and the marginal:

$$P(8)=256, \\qquad P(10)=500, \\qquad P(12)=864, \\qquad P'(v)=\\frac{3}{2}v^{2}$$

**5.** Carrying a speed multiplier straight across understates the cost of going faster: a quarter more speed asks for almost twice the power, and the last $2$ m/s above the ceiling would add $364$ W to a $500$ W budget.

**Answer.** $r=2$, $A=\\frac{1}{2}$ | $F(v)=\\frac{1}{2}v^{2}$, $P(v)=\\frac{1}{2}v^{3}$ | ceiling at $v=10$ m/s | $P(12)=864$ W`,
  },
  {
    id: `math-8-82`,
    case_id: `MATH 8.82`,
    title: `Signal Attenuation From a Buried Cable Locator`,
    context: `The signal a locator receives from a buried conductor follows $S(x)=A x^{r}$ millivolts, where $x>0$ is the burial depth in metres. Neither constant is posted. Doubling any burial depth cuts the received signal to one eighth, and a calibration run over a conductor buried at $2$ metres read $50$ millivolts. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The received signal is inversely proportional to burial depth.`,
      `A conductor buried at $4$ metres returns $6.25$ millivolts.`,
      `The burial depth needed for a given reading is itself a power function of that reading.`,
      `The product of the cube of the depth and the received signal is the same at every depth.`,
      `A reading of $3.2$ millivolts corresponds to a burial depth of $10$ metres.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

The doubling record gives $r=-3$. Inverse proportionality would mean exponent $-1$, which would cut the signal in half when depth doubles:

$$
2^{-1}=\\frac{1}{2}
$$

The recorded factor is one eighth:

$$
2^{-3}=\\frac{1}{8}
$$

The product $x\\,S(x)=Ax^{-2}$ still falls as depth grows. The exponent is $-3$, not $-1$, so the statement is False.`,
      `**B.** → True

Four metres is one doubling of the calibration depth of $2$ metres, where the locator read $50$ millivolts. Each doubling multiplies the signal by $2^{-3}$:

$$
S(4)=50\\cdot\\frac{1}{8}
$$

$$
S(4)=\\frac{50}{8}=6.25
$$

The locator reads $6.25$ millivolts, so the statement is True.`,
      `**C.** → True

The law is $S=\\frac{400}{x^{3}}$. Solving for depth:

$$
x^{3}=\\frac{400}{S}
$$

$$
x=\\left(\\frac{400}{S}\\right)^{\\frac{1}{3}}
$$

$$
x=400^{\\frac{1}{3}}S^{-\\frac{1}{3}}
$$

A power with a nonzero exponent inverts to another power. Depth is a power of the reading with exponent $-\\frac{1}{3}$, so the statement is True.`,
      `**D.** → True

The exponent is $-3$, so the invariant of the power law is the product of the cube of the depth and the signal:

$$
x^{3}S(x)=400
$$

At the calibration, $2^{3}\\cdot 50=400$. At four metres, $4^{3}\\cdot 6.25=400$. The product is the same at every depth, so the statement is True.`,
      `**E.** → False

At a reading of $3.2$ millivolts:

$$
\\frac{400}{x^{3}}=3.2
$$

$$
x^{3}=\\frac{400}{3.2}
$$

$$
\\frac{400}{3.2}=125
$$

$$
x=5
$$

because $5^{3}=125$ and depth is positive. At the claimed $10$ metres the locator would show

$$
S(10)=\\frac{400}{10^{3}}=\\frac{400}{1000}=0.4
$$

The reading corresponds to $5$ metres, not $10$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**2.** Levels down the depth range:

$$S(2)=50, \\qquad S(4)=6.25, \\qquad S(5)=3.2, \\qquad S(10)=0.4$$

**3.** Inverting (2) recovers a depth from a reading:

$$x=\\left(\\frac{400}{S}\\right)^{\\frac{1}{3}}$$

**4.** The invariant of the exponent $-3$:

$$x^{3}S(x)=400$$

**5.** The quantity that stays fixed is $x^{3}S(x)$, not $x\\,S(x)$, and that single fact rules out inverse proportionality, places a $3.2$ millivolt trace at five metres rather than ten, and keeps the product of depth cubed and signal constant.

**Answer.** $r=-3$, $A=400$ | $S(x)=400x^{-3}$ | $S(4)=6.25$ mV | $3.2$ mV at $x=5$ m`,
  },
  {
    id: `math-8-83`,
    case_id: `MATH 8.83`,
    title: `Oxygen Demand and Gill Area in a Hatchery`,
    context: `A hatchery models a fish's oxygen demand as $D(m)=A m^{\\frac{3}{4}}$ millilitres per hour and its gill surface area as $G(m)=B m^{\\frac{2}{3}}$ square centimetres, where $m>0$ is body mass in grams. Neither coefficient is published. An $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish, and a $64$ g fish carries $48$ square centimetres of gill. A tank's total demand is the sum of its fish's individual demands. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $256$ g fish demands $320$ millilitres per hour.`,
      `Doubling body mass multiplies oxygen demand by less than two.`,
      `Oxygen demand per square centimetre of gill falls as the fish grows.`,
      `Sixteen $16$ g fish demand twice as much oxygen as one $256$ g fish of the same total mass.`,
      `Two $16$ g fish together have the same total gill area as one $32$ g fish.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Demand is $D(m)=5m^{\\frac{3}{4}}$. At $256$ g the mass is a fourth power:

$$
256=4^{4}
$$

$$
256^{\\frac{3}{4}}=(4^{4})^{\\frac{3}{4}}
$$

$$
(4^{4})^{\\frac{3}{4}}=4^{3}
$$

$$
4^{3}=64
$$

$$
D(256)=5\\cdot 64=320
$$

The $256$ g fish demands $320$ millilitres per hour, so the statement is True.`,
      `**B.** → True

The exponent on demand is $\\frac{3}{4}$. Doubling body mass multiplies demand by $2^{\\frac{3}{4}}$, and the coefficient cancels:

$$
\\frac{D(2m)}{D(m)}=2^{\\frac{3}{4}}
$$

Split the exponent as $\\frac{3}{4}=\\frac{1}{2}+\\frac{1}{4}$:

$$
2^{\\frac{3}{4}}=2^{\\frac{1}{2}}\\cdot 2^{\\frac{1}{4}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.414
$$

$$
2^{\\frac{1}{4}}\\approx 1.189
$$

$$
2^{\\frac{3}{4}}\\approx 1.414\\cdot 1.189\\approx 1.682
$$

The factor $1.682$ is less than $2$. Demand grows more slowly than mass because the exponent sits below one, so the statement is True.`,
      `**C.** → False

Demand per square centimetre of gill is the quotient of $D(m)=5m^{\\frac{3}{4}}$ and $G(m)=3m^{\\frac{2}{3}}$:

$$
\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{3}{4}-\\frac{2}{3}}
$$

$$
\\frac{3}{4}-\\frac{2}{3}=\\frac{9}{12}-\\frac{8}{12}
$$

$$
\\frac{9}{12}-\\frac{8}{12}=\\frac{1}{12}
$$

so

$$
\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{1}{12}}
$$

The leftover exponent $\\frac{1}{12}$ is positive, so the intensity rises with body mass. It does not fall, so the statement is False.`,
      `**D.** → True

A tank total is a sum of individual demands, never one application of $D$ to the pooled mass. One $16$ g fish demands

$$
D(16)=5\\cdot 8=40
$$

Sixteen of them:

$$
16\\cdot 40=640
$$

One $256$ g fish of the same total mass demands $320$. The ratio is

$$
\\frac{640}{320}=2
$$

Because $\\frac{3}{4}<1$, many small fish out-consume one large fish of equal total mass. Sixteen small fish demand twice as much oxygen, so the statement is True.`,
      `**E.** → False

Gill area is $G(m)=3m^{\\frac{2}{3}}$. The exponent $\\frac{2}{3}<1$, so two small fish out-area one fish of twice the mass.

$$
G(16)=12\\cdot 2^{\\frac{2}{3}}
$$

$$
2G(16)=24\\cdot 2^{\\frac{2}{3}}
$$

$$
G(32)=24\\cdot 2^{\\frac{1}{3}}
$$

Because $2^{\\frac{2}{3}}>2^{\\frac{1}{3}}$, the two $16$ g fish carry more gill area than the one $32$ g fish, so the statement is False.`,
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

**2.** The doubling factor on demand, and levels along the demand curve:

$$2^{\\frac{3}{4}}\\approx 1.682, \\qquad D(16)=40, \\qquad D(256)=320$$

**3.** A tank total is formed one fish at a time:

$$16\\,D(16)=640=2\\,D(256)$$

**4.** Two small fish versus one of twice the mass, on gill area:

$$2\\,G(16)=24\\cdot 2^{\\frac{2}{3}} > G(32)=24\\cdot 2^{\\frac{1}{3}}$$

**5.** Because $\\frac{3}{4}<1$, many small fish consume more oxygen than one large fish of equal total mass, and because $\\frac{2}{3}<1$ they also carry more gill. Intensity still creeps up, since $\\frac{1}{12}>0$.

**Answer.** $A=5$, $B=3$ | $D(256)=320$ | $16\\,D(16)=640$ | $\\frac{D}{G}=\\frac{5}{3}m^{\\frac{1}{12}}$`,
  },
  {
    id: `math-8-84`,
    case_id: `MATH 8.84`,
    title: `Micro-Irrigation Flow Under a Fourth-Power Law`,
    context: `Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{k}$ litres per hour, where $r>0$ is the internal tube radius in millimetres. Neither constant is posted. Doubling any tube radius multiplies flow by $16$, and a bench test on a tube of radius $2$ mm delivered $48$ litres per hour. The designers also track the mean velocity index $\\frac{Q}{\\pi r^{2}}$, which spreads the flow across the tube's cross-section. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Widening the tube radius by $50\\%$ raises the flow by $125\\%$.`,
      `A tube of radius $3$ mm delivers $243$ litres per hour.`,
      `Halving the tube radius leaves one sixteenth of the flow.`,
      `The mean velocity index is the same in every tube.`,
      `A tube of radius $1$ mm delivers $3$ litres per hour.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

Flow is a fourth power of radius. Widening the radius by $50\\%$ is the multiplier $1.5=\\frac{3}{2}$:

$$
\\frac{Q(1.5r)}{Q(r)}=1.5^{4}
$$

$$
\\left(\\frac{3}{2}\\right)^{4}=\\frac{81}{16}
$$

Square first in decimals:

$$
1.5^{2}=2.25
$$

Then square again:

$$
1.5^{4}=(1.5^{2})^{2}
$$

$$
2.25^{2}=5.0625
$$

The relative rise is

$$
5.0625-1=4.0625
$$

or $406.25\\%$. The claimed $125\\%$ is the rise for exponent $2$, where $1.5^{2}=2.25$ and $2.25-1=1.25$. Flow rises by $406.25\\%$, so the statement is False.`,
      `**B.** → True

Flow is $Q(r)=3r^{4}$. At radius $3$ mm:

$$
Q(3)=3\\cdot 3^{4}
$$

$$
3^{2}=9
$$

$$
3^{4}=81
$$

$$
Q(3)=3\\cdot 81=243
$$

The tube delivers $243$ litres per hour, so the statement is True.`,
      `**C.** → True

Halving is the reciprocal of doubling. A fourth power sends the factor $\\frac{1}{2}$ to

$$
\\left(\\frac{1}{2}\\right)^{4}=\\frac{1}{16}
$$

Doubling multiplies flow by $16$, so the inverse move must divide by $16$. One sixteenth of the flow remains, so the statement is True.`,
      `**D.** → False

The mean velocity index divides $Q(r)=3r^{4}$ by the tube's cross-section $\\pi r^{2}$, so the exponents subtract rather than cancel:

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{3r^{4}}{\\pi r^{2}}
$$

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}
$$

The leftover exponent $2$ is not zero, so the index grows with the radius. From the bench tube $r=2$ to a $3$ mm tube the index scales by $\\left(\\frac{3}{2}\\right)^{2}=\\frac{9}{4}$. It is not the same in every tube, so the statement is False.`,
      `**E.** → True

At radius $1$ mm every power of $1$ is $1$, so the delivery equals the coefficient of $Q(r)=3r^{4}$:

$$
Q(1)=3\\cdot 1^{4}=3
$$

The tube delivers $3$ litres per hour, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
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

**2.** Levels across the tube sizes:

$$Q(1)=3, \\qquad Q(2)=48, \\qquad Q(3)=243$$

**3.** Exact scale factors, all fourth powers of the radius ratio:

$$1.5^{4}=5.0625\\;(+406.25\\%), \\qquad \\left(\\frac{1}{2}\\right)^{4}=\\frac{1}{16}$$

**4.** The velocity index still carries exponent $2$, so it rises with the radius.

**5.** A fourth power is unforgiving in both directions: half a millimetre of extra bore multiplies delivery by more than five, and a bore halved keeps only a sixteenth of it.

**Answer.** $k=4$, $A=3$ | $Q(r)=3r^{4}$ | $Q(3)=243$ L/h | velocity index $=\\frac{3}{\\pi}r^{2}$`,
  },
  {
    id: `math-8-85`,
    case_id: `MATH 8.85`,
    title: `Barrier Distance for a Radiography Source`,
    context: `Dose rate near an industrial radiography source follows $H(d)=A d^{r}$ microsieverts per hour, where $d>0$ is the distance from the source in metres. Neither constant is posted. Quadrupling any distance cuts the dose rate to one sixteenth, and a survey meter three metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the distance from the source quarters the dose rate.`,
      `At six metres the dose rate is $40$ microsieverts per hour.`,
      `The dose rate stays positive at every finite distance from the source.`,
      `Moving from three metres to nine metres cuts the dose rate to one third.`,
      `The barrier belongs twelve metres from the source.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The quadrupling record gives $r=-2$. Doubling the distance is then the factor $2^{-2}$:

$$
\\frac{H(2d)}{H(d)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

Doubling the distance leaves one quarter of the dose rate, so the statement is True.`,
      `**B.** → False

Six metres is one doubling of the three-metre survey, where the meter read $80$ microsieverts per hour. Doubling quarters the dose rate, so

$$
H(6)=80\\cdot\\frac{1}{4}=20
$$

The claimed $40$ is half the survey reading, the inverse-proportional trap. The meter reads $20$ microsieverts per hour, so the statement is False.`,
      `**C.** → True

Dose rate is $H(d)=\\frac{720}{d^{2}}$. The numerator is positive and the denominator is a square, hence positive for every finite $d>0$. A negative-power law never crosses zero. The dose rate stays positive, so the statement is True.`,
      `**D.** → False

Three metres to nine metres is a tripling. With exponent $-2$ the factor is $3^{-2}$, not $\\frac{1}{3}$:

$$
\\frac{H(9)}{H(3)}=3^{-2}
$$

$$
3^{-2}=\\frac{1}{9}
$$

One third would match exponent $-1$. One ninth of the dose rate remains, so the statement is False.`,
      `**E.** → True

The barrier is the distance where the dose rate has fallen from $80$ to $5$ microsieverts per hour:

$$
\\frac{5}{80}=\\frac{1}{16}
$$

With exponent $-2$ that dose ratio is a squared distance ratio:

$$
\\left(\\frac{d}{3}\\right)^{-2}=\\frac{1}{16}
$$

$$
\\left(\\frac{3}{d}\\right)^{2}=\\frac{1}{16}
$$

$$
\\frac{3}{d}=\\frac{1}{4}
$$

$$
d=3\\cdot 4=12
$$

The dose ratio $16$ is a square, and $\\sqrt{16}=4$, so the barrier sits at four times the survey distance. The barrier belongs $12$ metres from the source, so the statement is True.`,
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

**2.** Levels along the walk-back from the source:

$$H(3)=80, \\qquad H(6)=20, \\qquad H(9)=\\frac{720}{81}\\approx 8.89, \\qquad H(12)=5$$

**3.** Scale factors read off the exponent $-2$:

$$2^{-2}=\\frac{1}{4}, \\qquad 3^{-2}=\\frac{1}{9}, \\qquad 4^{-2}=\\frac{1}{16}$$

**4.** Invert (2) at the permitted dose rate:

$$d^{2}=\\frac{720}{5}=144 \\quad \\Rightarrow \\quad d=12$$

**5.** Distance buys safety quickly but not linearly: doubling the standoff removes three quarters of the dose rate, tripling it removes eight ninths, and the barrier sits at four times the survey distance because $\\frac{80}{5}=16$ and $\\sqrt{16}=4$.

**Answer.** $r=-2$, $A=720$ | $H(d)=720d^{-2}$ | $H(6)=20$ | barrier at $d=12$ m`,
  },
  {
    id: `math-8-86`,
    case_id: `MATH 8.86`,
    title: `A Dye Plume Spreading Across a Shallow Lake`,
    context: `A tracer dye released into a shallow lake spreads as a disc whose radius follows $r(t)=A t^{\\frac{2}{3}}$ metres, with $t>0$ measured in hours since release. The survey note omits the coefficient: it records only that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The stained area grows faster than proportionally with elapsed time.`,
      `At hour $8$ the plume radius is $60$ metres.`,
      `Doubling the elapsed time doubles the stained area.`,
      `The radius reaches $240$ metres $32$ hours after release.`,
      `Because the stained patch is a disc, the area law carries twice the exponent of the radius law.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The stained area is $S(t)=\\pi A^{2} t^{\\frac{4}{3}}$. Proportional growth with elapsed time would mean composed exponent $1$. Because $\\frac{4}{3}>1$, area outruns a proportional clock, so the statement is True.`,
      `**B.** → True

The radius law is $r(t)=15t^{\\frac{2}{3}}$. At hour $8$:

$$
8^{\\frac{2}{3}}=4
$$

$$
r(8)=15\\cdot 4=60
$$

Forward check: $r(1)=15$, and $60-15=45$, which matches the survey gap. The radius is $60$ metres, so the statement is True.`,
      `**C.** → False

Doubling elapsed time reaches the stained area through the composed exponent $\\frac{4}{3}$, not through the time multiplier itself:

$$
\\frac{S(2t)}{S(t)}=2^{\\frac{4}{3}}
$$

$$
2^{\\frac{4}{3}}=2\\cdot 2^{\\frac{1}{3}}
$$

$$
2^{\\frac{1}{3}}\\approx 1.260
$$

$$
2^{\\frac{4}{3}}\\approx 2.52
$$

A doubling of area would require composed exponent $1$, which would have returned the factor $2$. The factor is about $2.52$, not $2$, so the statement is False.`,
      `**D.** → False

At radius $240$ metres the law $r(t)=15t^{\\frac{2}{3}}$ inverts as

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
16^{\\frac{1}{2}}=4
$$

$$
16^{\\frac{3}{2}}=4^{3}=64
$$

At the claimed hour $32$:

$$
r(32)=15\\cdot 32^{\\frac{2}{3}}\\approx 151
$$

The claimed hour $32$ gives about $151$ metres, not $240$. The radius reaches $240$ metres at hour $64$, so the statement is False.`,
      `**E.** → True

Squaring a power multiplies its exponent by $2$. The radius exponent is $\\frac{2}{3}$, so the area exponent is

$$
2\\cdot\\frac{2}{3}=\\frac{4}{3}
$$

The area law carries twice the exponent of the radius law, so the statement is True.`,
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

**2.** Scale factors for the area, read off the exponent in (2):

$$2^{\\frac{4}{3}}\\approx 2.52, \\qquad 8^{\\frac{4}{3}}=16$$

**3.** Levels at the two surveyed hours:

$$r(1)=15, \\quad r(8)=60, \\qquad S(1)=225\\pi, \\quad S(8)=3600\\pi$$

**4.** Invert (1) to find when the radius reaches $240$ metres:

$$t^{\\frac{2}{3}}=16 \\quad \\Rightarrow \\quad t=16^{\\frac{3}{2}}=64$$

**5.** The two exponents straddle one: area outruns proportional growth, since $\\frac{4}{3}>1$, while the radius lags it, since $\\frac{2}{3}<1$, so a target radius arrives far later than a linear reading would predict.

**Answer.** $A=15$ | $r(t)=15t^{\\frac{2}{3}}$, $S(t)=225\\pi t^{\\frac{4}{3}}$ | $r(8)=60$ m | $r=240$ m at $t=64$ h`,
  },
  {
    id: `math-8-87`,
    case_id: `MATH 8.87`,
    title: `A Weir Rating Curve Rewritten in New Units`,
    context: `Discharge over a measuring weir follows $Q(h)=A h^{\\frac{3}{2}}$ cubic metres per second, where $h>0$ is the head in metres. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second. A field team wants the same rating curve rewritten with the head in centimetres, sometimes keeping discharge in cubic metres per second and sometimes reporting it in litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Switching the head from metres to centimetres leaves the exponent unchanged.`,
      `With the head in centimetres and discharge still in cubic metres per second, the coefficient is $0.016$.`,
      `Measuring the head in centimetres instead of metres multiplies the coefficient by $100$.`,
      `Discharge is proportional to head.`,
      `A head of one metre discharges $32$ cubic metres per second.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Switching the head from metres to centimetres replaces $h$ by a constant multiple of itself. One metre is $100$ centimetres, so

$$
h=\\frac{h_{\\mathrm{cm}}}{100}
$$

A power function pushes that constant through the existing exponent:

$$
Q=A\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{\\frac{3}{2}}
$$

$$
Q=\\frac{A}{100^{\\frac{3}{2}}}\\,h_{\\mathrm{cm}}^{\\frac{3}{2}}
$$

The conversion rescales only the coefficient. The new exponent on $h_{\\mathrm{cm}}$ is still $\\frac{3}{2}$. Only the coefficient moves, so the statement is True.`,
      `**B.** → True

The metre-form coefficient is $A=16$. With the head in centimetres that coefficient is divided by $100^{\\frac{3}{2}}$:

$$
100^{\\frac{1}{2}}=10
$$

$$
100^{\\frac{3}{2}}=10^{3}=1000
$$

$$
\\frac{16}{1000}=0.016
$$

At the gauged point the head is $25$ cm, and $0.016\\cdot 25^{\\frac{3}{2}}=0.016\\cdot 125=2$, which matches the original discharge. The coefficient is $0.016$, so the statement is True.`,
      `**C.** → False

The centimetre-form coefficient is $0.016$, which is $\\frac{16}{1000}$, not $16\\times 100$. A smaller length unit makes every numerical head larger, so the coefficient must shrink. The factor is $\\frac{1}{1000}$, not $100$, so the statement is False.`,
      `**D.** → False

Proportionality would require exponent $1$. The weir exponent is $\\frac{3}{2}$, and a change of units cannot move it. Doubling the head therefore multiplies discharge by $2^{\\frac{3}{2}}$, not by $2$:

$$
2^{\\frac{3}{2}}=2\\cdot 2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.414
$$

$$
2\\cdot 1.414\\approx 2.828
$$

Doubling the head multiplies discharge by about $2.83$, not by $2$. Discharge is not proportional to head, so the statement is False.`,
      `**E.** → False

At a head of one metre every power of $1$ is $1$, so the discharge equals the coefficient $A=16$:

$$
Q(1)=16\\cdot 1^{\\frac{3}{2}}=16
$$

The claimed $32$ is what a squared law would give from the gauged head, since $4^{2}=16$ and $16\\cdot 2=32$. The discharge is $16$ cubic metres per second, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**2.** The head conversion carries the exponent:

$$100^{\\frac{3}{2}}=1000 \\;\\Rightarrow\\; 16\\longrightarrow\\frac{16}{1000}=0.016$$

**3.** The litre conversion multiplies by $1000$ and cancels that division:

$$1000\\times 0.016=16$$

**4.** One check at the gauged point in each set of units:

$$16(0.25)^{\\frac{3}{2}}=2, \\qquad 0.016(25)^{\\frac{3}{2}}=2, \\qquad 16(25)^{\\frac{3}{2}}=2000$$

**Answer.** $A=16$ | $Q=16h^{\\frac{3}{2}}$ (m, m$^{3}$/s) | $Q=0.016h_{\\mathrm{cm}}^{\\frac{3}{2}}$ (cm, m$^{3}$/s) | $Q=16h_{\\mathrm{cm}}^{\\frac{3}{2}}$ (cm, L/s)`,
  },
  {
    id: `math-8-88`,
    case_id: `MATH 8.88`,
    title: `A Grain Dryer Calibrated From Two Recorded Ratios`,
    context: `Fuel use in a grain dryer follows $F(x)=A x^{r}$ litres per batch, where $x>0$ is the batch mass in tonnes. Neither constant is published. Doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the batch mass triples fuel use.`,
      `A $10$-tonne batch uses $300$ litres.`,
      `Tripling the batch mass multiplies fuel use by $9$.`,
      `Fuel use per tonne is the same at every batch size.`,
      `A $6$-tonne batch uses $96$ litres.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

A $300\\%$ rise means the new value is the old value plus three times the old value:

$$
1+\\frac{300}{100}=4
$$

Doubling therefore multiplies fuel by $4$, not by $3$. Reading $300\\%$ as a factor of $3$ drops the baseline $100\\%$. Fuel use is quadrupled, not tripled, so the statement is False.`,
      `**B.** → True

Fuel use is $F(x)=3x^{2}$. At $10$ tonnes:

$$
F(10)=3\\cdot 10^{2}
$$

$$
10^{2}=100
$$

$$
F(10)=3\\cdot 100=300
$$

The batch uses $300$ litres, so the statement is True.`,
      `**C.** → True

Fuel use is a square of batch mass, so a mass triple contributes $3^{2}$:

$$
\\frac{F(3x)}{F(x)}=3^{2}=9
$$

A law of exponent $1$ would have returned $3$. Fuel use is multiplied by $9$, so the statement is True.`,
      `**D.** → False

Fuel per tonne divides $F(x)=3x^{2}$ by the mass, which lowers the exponent by $1$:

$$
\\frac{F(x)}{x}=3x
$$

The leftover exponent $1$ is not zero: litres per tonne climb in proportion to batch mass. At the logged batches the figures are $6$ and $18$. The per-tonne figure is not constant, so the statement is False.`,
      `**E.** → False

The $96$ litres is a gap between two batches, not the level at $6$ tonnes.

$$
F(6)=3\\cdot 6^{2}
$$

$$
6^{2}=36
$$

$$
F(6)=3\\cdot 36=108
$$

The companion level is $F(2)=12$, and $108-12=96$ recovers the log entry. The $6$-tonne batch uses $108$ litres, so the statement is False.`,
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

**3.** Levels along the curve:

$$F(2)=12, \\qquad F(6)=108, \\qquad F(10)=300$$

**4.** Scale factors and the per-tonne figure:

$$\\frac{F(3x)}{F(x)}=9, \\qquad \\frac{F(x)}{x}=3x$$

**5.** Every claim here follows from the single exponent $2$: mass multipliers arrive squared, so doubling costs four times the fuel and tripling nine times, while the $96$ litres is a gap, not a level.

**Answer.** $r=2$, $A=3$ | $F(x)=3x^{2}$ | $F(10)=300$ litres | $F(6)=108$ litres`,
  },
  {
    id: `math-8-89`,
    case_id: `MATH 8.89`,
    title: `Kiln Flue Mass Flow into a Particulate Index`,
    context: `A kiln's flue-gas mass flow follows $m(t)=A t^{\\frac{1}{2}}$ tonnes per hour for throttle setting $t>0$, and the particulate load index is then $P(m)=\\frac{m^{4}}{16}$. A calibration at $t=9$ recorded $m=6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The composed particulate index is a power of throttle with exponent $2$.`,
      `At throttle $25$ the mass flow is $10$ tonnes per hour.`,
      `The composed particulate index grows in proportion to the throttle setting.`,
      `Mass flow per unit of throttle falls as the throttle rises.`,
      `An index of $81$ requires throttle setting $27$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The inner law is $m(t)=2t^{\\frac{1}{2}}$. Feed it into $P(m)=\\frac{m^{4}}{16}$:

$$
P\\bigl(m(t)\\bigr)=\\frac{\\bigl(2t^{\\frac{1}{2}}\\bigr)^{4}}{16}
$$

$$
\\bigl(2t^{\\frac{1}{2}}\\bigr)^{4}=2^{4}t^{2}
$$

$$
2^{4}=16
$$

$$
P\\bigl(m(t)\\bigr)=\\frac{16t^{2}}{16}=t^{2}
$$

Raising a power to a power multiplies the exponents: $\\frac{1}{2}\\cdot 4=2$. The composed exponent is $2$, so the statement is True.`,
      `**B.** → True

The inner law is $m(t)=2t^{\\frac{1}{2}}$. At throttle $25$:

$$
m(25)=2\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
m(25)=2\\cdot 5=10
$$

The mass flow is $10$ tonnes per hour, so the statement is True.`,
      `**C.** → False

The composed index is $t^{2}$. Proportional growth would mean exponent $1$. Doubling the throttle therefore multiplies the index by

$$
2^{2}=4
$$

A proportional law would have returned the factor $2$. The composed exponent is $2$, so the statement is False.`,
      `**D.** → True

Mass flow per unit of throttle is the quotient of $m(t)=2t^{\\frac{1}{2}}$ by $t$:

$$
\\frac{m(t)}{t}=2t^{\\frac{1}{2}-1}
$$

$$
\\frac{m(t)}{t}=2t^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so the quotient falls as $t$ rises. At the calibration it is $\\frac{6}{9}=\\frac{2}{3}$, and at throttle $25$ it is $\\frac{10}{25}=\\frac{2}{5}$. Mass flow per unit of throttle falls, so the statement is True.`,
      `**E.** → False

The composed index is $t^{2}$. At index $81$:

$$
t^{2}=81
$$

$$
t=9
$$

because throttle is positive. The quoted $27$ treats $81$ as if an exponent were a number to divide by. Running the chain forward from $t=9$ returns $m=6$ and $P=\\frac{6^{4}}{16}=81$. The required throttle setting is $9$, not $27$, so the statement is False.`,
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

**2.** The composed coefficient collapses, since $\\frac{2^{4}}{16}=1$, leaving the pure square in (2).

**3.** Scale factors run through the composed exponent, never through the inner one:

$$\\frac{P\\bigl(m(2t)\\bigr)}{P\\bigl(m(t)\\bigr)}=4$$

**4.** Intermediate levels at the settings the statements use:

$$m(9)=6, \\qquad m(25)=10$$

**5.** Inverting (2) turns a target index into a throttle setting by a square root:

$$t^{2}=81 \\quad \\Rightarrow \\quad t=9$$

The chain compresses a half and a fourth power into a clean square, so the index reacts far more sharply to the throttle than the mass flow does.

**Answer.** $A=2$ | $m(t)=2t^{\\frac{1}{2}}$ | $P\\circ m=t^{2}$ | index $81$ at $t=9$`,
  },
  {
    id: `math-8-90`,
    case_id: `MATH 8.90`,
    title: `Two Shuttle Fare Timers Under a Wait Cap`,
    context: `Two municipal shuttle apps quote wait time for a trip of distance $d>0$ kilometres. App L follows $L(d)=a d^{\\frac{1}{2}}$ minutes and App Q follows $Q(d)=k d$ minutes, with both coefficients unpublished. A logged $25$ km trip on App L quoted $20$ minutes, and a logged $100$ km trip on App Q quoted $20$ minutes. A service-level agreement caps wait at $20$ minutes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two apps quote the same wait at two different positive distances.`,
      `Under the $20$-minute cap, App L can serve at most $25$ kilometres.`,
      `Once App L quotes a shorter wait than App Q, App Q never catches up.`,
      `App L's wait per kilometre is the same at every distance.`,
      `At $400$ kilometres both apps quote $80$ minutes.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

The quotes are $L(d)=4d^{\\frac{1}{2}}$ and $Q(d)=\\frac{1}{5}d$. Set them equal for $d>0$:

$$
4d^{\\frac{1}{2}}=\\frac{1}{5}d
$$

$$
4=\\frac{1}{5}d^{\\frac{1}{2}}
$$

$$
d^{\\frac{1}{2}}=20
$$

$$
d=20^{2}=400
$$

On $d>0$ there is a single root. A square-root versus a line cannot meet twice. They meet only at $d=400$, so the statement is False.`,
      `**B.** → True

App L's quote $L(d)=4d^{\\frac{1}{2}}$ increases with distance, so a $20$-minute cap becomes a cap on $d$:

$$
4d^{\\frac{1}{2}}\\le 20
$$

$$
d^{\\frac{1}{2}}\\le 5
$$

$$
d\\le 25
$$

The endpoint is attained: $L(25)=20$. Every longer trip on App L breaches the agreement. App L can serve at most $25$ kilometres under the cap, so the statement is True.`,
      `**C.** → True

The ratio of the two quotes is

$$
\\frac{Q(d)}{L(d)}=\\frac{1}{20}d^{\\frac{1}{2}}
$$

App L is strictly faster when that ratio exceeds $1$, which is $d>400$. The map $d\\mapsto d^{\\frac{1}{2}}$ is strictly increasing on $d>0$, so the ratio itself is strictly increasing. Once it crosses $1$ it stays above $1$. App Q never catches up, so the statement is True.`,
      `**D.** → False

Wait per kilometre is the quotient of $L(d)=4d^{\\frac{1}{2}}$ by $d$:

$$
\\frac{L(d)}{d}=4d^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so the quotient falls as $d$ grows. At the logged trip it is $\\frac{20}{25}=0.8$, and at $d=100$ it is $0.4$. The per-kilometre wait is not constant, so the statement is False.`,
      `**E.** → True

At the meeting distance $d=400$:

$$
L(400)=4\\cdot 20=80
$$

$$
Q(400)=\\frac{1}{5}\\cdot 400=80
$$

Both apps quote $80$ minutes at $400$ kilometres, so the statement is True.`,
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

**2.** The laws meet once on $d>0$:

$$4d^{\\frac{1}{2}}=\\frac{1}{5}d \\quad \\Rightarrow \\quad d=400, \\qquad L(400)=Q(400)=80$$

**3.** App L's cap:

$$4d^{\\frac{1}{2}}\\le 20 \\quad \\Rightarrow \\quad d\\le 25$$

**4.** App Q's cap, for comparison: $d\\le 100$. The ratio $\\frac{Q}{L}=\\frac{1}{20}d^{\\frac{1}{2}}$ crosses $1$ at $d=400$ and then keeps rising, so App L stays ahead on every longer trip.

**5.** Square-root wait grows more slowly than linear wait, which is why App Q is quicker on short hops and App L is quicker once the trip stretches past $400$ km, well beyond either app's $20$-minute cap.

**Answer.** $a=4$, $k=\\frac{1}{5}$ | meet at $d=400$, wait $80$ min | App L cap $d=25$ | App Q cap $d=100$`,
  },
  {
    id: `math-8-91`,
    case_id: `MATH 8.91`,
    title: `Wetland Evaporation Across Three Humidity Readings`,
    context: `A field team models wetland evaporation in millimetres per day by $E(h)=A h^{r}$ against humidity deficit $h>0$, with both constants unknown. Deficits of one and four recorded twenty and forty millimetres per day, and a third reading at deficit nine recorded sixty. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is smaller than one, so evaporation grows more slowly than the humidity deficit.`,
      `Doubling the humidity deficit doubles evaporation.`,
      `At a humidity deficit of $16$, evaporation is $80$ millimetres per day.`,
      `A straight line through the first two readings also hits the third.`,
      `With the exponent forced to $1$, the coefficient recovered from the third reading alone is $20$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The two readings give $r=\\frac{1}{2}$. An exponent smaller than one means evaporation grows more slowly than the humidity deficit: each extra unit of deficit adds less than the unit before it.

$$
\\frac{1}{2}<1
$$

One half is below one, so the statement is True.`,
      `**B.** → False

Doubling the deficit would double evaporation only if $r=1$. With $r=\\frac{1}{2}$ the scale factor is

$$
\\frac{E(2h)}{E(h)}=2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.41
$$

which is not $2$. Evaporation rises, but not in lockstep with humidity, so the statement is False.`,
      `**C.** → True

The law is $E(h)=20h^{\\frac{1}{2}}$. At deficit $16$:

$$
E(16)=20\\cdot 16^{\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
E(16)=20\\cdot 4
$$

$$
20\\cdot 4=80
$$

Sixteen is four squared, so a square-root law multiplies the unit-deficit reading by four. The claimed evaporation is $80$ millimetres per day, so the statement is True.`,
      `**D.** → False

A straight line through $(1,20)$ and $(4,40)$ has slope

$$
\\frac{40-20}{4-1}
$$

$$
\\frac{20}{3}
$$

The line through $(1,20)$ is

$$
L(h)=20+\\frac{20}{3}(h-1)
$$

At deficit $9$:

$$
L(9)=20+\\frac{20}{3}\\cdot 8
$$

$$
\\frac{20}{3}\\cdot 8=\\frac{160}{3}
$$

$$
L(9)=20+\\frac{160}{3}
$$

$$
20=\\frac{60}{3}
$$

$$
L(9)=\\frac{60}{3}+\\frac{160}{3}
$$

$$
L(9)=\\frac{220}{3}
$$

$$
\\frac{220}{3}\\approx 73.33
$$

The recorded third reading is $60$, not $\\frac{220}{3}$. A line cannot carry a square-root curve through that third point, so the statement is False.`,
      `**E.** → False

Forcing the exponent to $1$ makes $E(h)=Ah$. The third reading alone then gives

$$
A\\cdot 9=60
$$

$$
A=\\frac{60}{9}
$$

$$
\\frac{60}{9}=\\frac{20}{3}
$$

The claimed $20$ is the unit-deficit evaporation, not this linear coefficient. The recovered value is $\\frac{20}{3}$, so the statement is False.`,
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

**1.** Because $r<1$, doubling the deficit does not double evaporation.

**2.** $(1)$ gives $E(16)=80$. A line through the first two readings yields $L(9)=\\frac{220}{3}$, missing the recorded $60$.

**3.** Forcing $r=1$ at the third reading alone recovers $A=\\frac{20}{3}$, not $20$.

**Answer.** $A=20$ | $r=\\frac{1}{2}$ | $E(16)=80$ | line misses the third reading`,
  },
  {
    id: `math-8-92`,
    case_id: `MATH 8.92`,
    title: `Shade-Tree Cooling Benefit Against Upkeep Cost`,
    context: `A city parks office models annual cooling benefit by $B(n)=A n^{\\frac{1}{2}}$ thousand euros and annual upkeep by $C(n)=k n$ thousand euros, where $n>0$ is the number of thousand trees planted. Raising the planting from four thousand trees to nine thousand increased cooling benefit by twelve thousand euros. At nine thousand trees, upkeep was eighteen thousand euros. Net benefit is $N(n)=B(n)-C(n)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At nine thousand trees, net benefit is $18$ thousand euros.`,
      `Because upkeep is linear, net benefit is not a power function of the planting.`,
      `Once upkeep overtakes cooling benefit, planting still more trees restores a positive net.`,
      `An extra thousand trees add more to the net at four thousand trees than at nine thousand.`,
      `At four thousand trees, net benefit is $24$ thousand euros.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Cooling is $B(n)=12n^{\\frac{1}{2}}$ and upkeep is $C(n)=2n$. At nine thousand trees:

$$
B(9)=12\\cdot 3
$$

$$
B(9)=36
$$

$$
C(9)=2\\cdot 9
$$

$$
C(9)=18
$$

$$
N(9)=36-18
$$

$$
36-18=18
$$

Net benefit is $18$ thousand euros, so the statement is True.`,
      `**B.** → True

Net benefit is

$$
N(n)=12n^{\\frac{1}{2}}-2n
$$

That is a sum of two distinct powers of $n$, not a single power. Linear upkeep is a different exponent from square-root cooling, so the net is not a power function of the planting, so the statement is True.`,
      `**C.** → False

The schedules meet when

$$
12n^{\\frac{1}{2}}=2n
$$

For $n>0$, divide by $2n^{\\frac{1}{2}}$:

$$
6=n^{\\frac{1}{2}}
$$

$$
n=36
$$

At that planting the net is already zero. The derivative

$$
N'(n)=6n^{-\\frac{1}{2}}-2
$$

is negative for every $n>9$, so past the crossing the net stays negative. Planting more trees after upkeep overtakes cooling only deepens the loss, so the statement is False.`,
      `**D.** → True

The marginal net is $N'(n)=6n^{-\\frac{1}{2}}-2$. At four thousand trees:

$$
N'(4)=6\\cdot 4^{-\\frac{1}{2}}-2
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
N'(4)=\\frac{6}{2}-2
$$

$$
3-2=1
$$

At nine thousand trees:

$$
N'(9)=6\\cdot 9^{-\\frac{1}{2}}-2
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
N'(9)=\\frac{6}{3}-2
$$

$$
2-2=0
$$

An extra thousand trees still adds at four thousand and adds nothing at nine thousand, so the statement is True.`,
      `**E.** → False

At four thousand trees, cooling is $24$ and upkeep is $8$:

$$
N(4)=24-8
$$

$$
N(4)=16
$$

The claimed $24$ is the cooling benefit, before upkeep is subtracted. Net benefit is $16$ thousand euros, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $N(9)=18$ and $N(4)=16$. The figure $24$ is $B(4)$, not the net.

**2.** $(1)$ is not a single power of $n$. The schedules meet at $n=36$, and $(2)$ is negative for $n>9$, so the net cannot turn positive again.

**3.** $N'(4)=1>N'(9)=0$, so an extra thousand trees add more at four thousand than at nine.

**Answer.** $A=12$ | $k=2$ | $N(9)=18$ | $N(4)=16$ | break-even at $n=36$`,
  },
  {
    id: `math-8-93`,
    case_id: `MATH 8.93`,
    title: `Trail-Map Kiosk Demand Inverted from Price`,
    context: `Weekly pamphlet demand at a trail-map kiosk follows $q(p)=A p^{-2}$ packs per week, where $p>0$ is the price in euros. At a price of five euros the kiosk sold eighty packs. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The price needed for a given weekly demand is itself a power function of that demand.`,
      `At ten euros the kiosk sells $20$ packs a week.`,
      `Weekly revenue is the same at every price.`,
      `A target of $125$ packs a week requires a price of $4$ euros.`,
      `Quadrupling the price cuts demand to one quarter.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Demand is $q=\\frac{2000}{p^{2}}$. Solving for price:

$$
p^{2}=\\frac{2000}{q}
$$

$$
p=\\left(\\frac{2000}{q}\\right)^{\\frac{1}{2}}
$$

$$
p=2000^{\\frac{1}{2}}q^{-\\frac{1}{2}}
$$

A nonzero power inverts to another power. Price is a power of demand with exponent $-\\frac{1}{2}$, so the statement is True.`,
      `**B.** → True

Ten euros is twice five, so demand scales by $2^{-2}$:

$$
\\frac{q(10)}{q(5)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
q(10)=80\\cdot\\frac{1}{4}
$$

$$
80\\cdot\\frac{1}{4}=20
$$

The kiosk sells $20$ packs a week, so the statement is True.`,
      `**C.** → False

Weekly revenue is price times demand:

$$
R(p)=p\\cdot 2000p^{-2}
$$

$$
R(p)=\\frac{2000}{p}
$$

A flat schedule would need exponent $0$. Here revenue falls as the price rises: $R(5)=400$ and $R(10)=200$. The till is not the same at every price, so the statement is False.`,
      `**D.** → True

A target of $125$ packs inverts $q=2000p^{-2}$:

$$
\\frac{2000}{p^{2}}=125
$$

$$
p^{2}=\\frac{2000}{125}
$$

$$
\\frac{2000}{125}=16
$$

$$
p^{2}=16
$$

$$
p=4
$$

Only the positive root is a price. Four euros is the unique price that moves $125$ packs, so the statement is True.`,
      `**E.** → False

Demand carries exponent $-2$, so quadrupling the price multiplies packs by $4^{-2}$:

$$
\\frac{q(4p)}{q(p)}=4^{-2}
$$

$$
4^{-2}=\\frac{1}{16}
$$

A cut to one quarter would be $4^{-1}$. From the recorded pair, quadrupling five euros to twenty euros would leave

$$
q(20)=80\\cdot\\frac{1}{16}
$$

$$
80\\cdot\\frac{1}{16}=5
$$

not $80\\cdot\\frac{1}{4}=20$. Demand falls to one sixteenth, not to one quarter, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**2.** $q(10)=20$. A target of $125$ packs requires $p=4$.

**3.** $(2)$ falls with price, so revenue is not flat. Quadrupling price multiplies demand by $4^{-2}=\\frac{1}{16}$, not by $\\frac{1}{4}$.

**Answer.** $A=2000$ | $q(10)=20$ | $p=4$ for $125$ packs | $R(p)=\\frac{2000}{p}$`,
  },
  {
    id: `math-8-94`,
    case_id: `MATH 8.94`,
    title: `Bike-Share Passes Under a Subsidy Price Index`,
    context: `Weekly bike-share day-pass sales follow $q(p)=A p^{\\frac{-3}{2}}$ when the pass price is $p>0$ euros. A pilot at sixteen euros sold fifty passes. Policy indexes the pass by $p(s)=B s^{\\frac{2}{3}}$ for a positive subsidy index $s$, and at subsidy index eight the posted price is sixteen euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Composed demand is inversely proportional to the subsidy index.`,
      `Tripling the subsidy index triples composed demand.`,
      `At subsidy index $8$, composed demand is $50$ passes.`,
      `Raising the subsidy index raises composed demand.`,
      `At subsidy index $27$, composed demand is $15$ passes.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Composed demand is $\\frac{400}{s}$. The product of the given exponents is

$$
\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)=-1
$$

Inverse proportionality means exponent $-1$ in $s$. Composed demand is inversely proportional to the subsidy index, so the statement is True.`,
      `**B.** → False

The subsidy exponent is $-1$, so tripling the index multiplies demand by $3^{-1}$:

$$
\\frac{q(p(3s))}{q(p(s))}=3^{-1}
$$

$$
3^{-1}=\\frac{1}{3}
$$

At $s=8$ sales are $50$. Tripling to $24$ would leave $\\frac{50}{3}$ packs, not $150$. Demand falls to a third rather than tripling, so the statement is False.`,
      `**C.** → True

At subsidy index $8$ the policy posts the pilot price of $16$ euros, and the pilot sold fifty passes at that price.

$$
q(p(8))=q(16)
$$

$$
q(p(8))=50
$$

Composed demand is the pilot sale of $50$ passes, so the statement is True.`,
      `**D.** → False

The subsidy exponent is already $-1$, so a larger index cuts weekly pass sales rather than lifting them.

$$
\\frac{q(p(ks))}{q(p(s))}=k^{-1}
$$

For every $k>1$ that factor is smaller than $1$. Raising the subsidy index lowers composed demand, so the statement is False.`,
      `**E.** → False

At subsidy index $27$:

$$
q(p(27))=\\frac{400}{27}
$$

$$
\\frac{400}{27}\\approx 14.81
$$

Fifteen passes would require

$$
\\frac{400}{s}=15
$$

$$
s=\\frac{400}{15}
$$

$$
\\frac{400}{15}=\\frac{80}{3}
$$

$$
\\frac{80}{3}\\approx 26.67
$$

and $\\frac{80}{3}$ is not $27$. Composed demand is $\\frac{400}{27}$ passes, not $15$, so the statement is False.`,
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

**1.** $(2)$ is inversely proportional to $s$, so tripling $s$ divides demand by $3$ and raising $s$ lowers demand.

**2.** $q(p(8))=50$. At $s=27$, composed demand is $\\frac{400}{27}\\approx 14.81$, not $15$.

**Answer.** $A=3200$ | $B=4$ | $q\\circ p=\\frac{400}{s}$ | $q(p(8))=50$`,
  },
  {
    id: `math-8-95`,
    case_id: `MATH 8.95`,
    title: `Overnight Loaves Split Across Two Oven Lines`,
    context: `A regional bakery must bake thirty thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index follows $C_{1}(q)=a q^{2}$ and line 2's follows $C_{2}(q)=b q^{2}$, where $q$ is that line's own output in thousands of loaves. A ten-thousand-loaf run on line 1 scored one hundred, and an eight-thousand-loaf run on line 2 scored sixteen. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Sending all $30$ thousand loaves to line 2 scores $225$.`,
      `Concentrating the whole order on the cheaper line is the cheapest plan.`,
      `An even split costs more than putting six thousand loaves on line 1 and the rest on line 2.`,
      `The six-and-twenty-four split scores $180$.`,
      `Line 1's average cost index falls as its own output rises.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Line 2 is $C_{2}(q)=\\frac{1}{4}q^{2}$. Sending the whole overnight order there is

$$
C_{2}(30)=\\frac{1}{4}\\cdot 30^{2}
$$

$$
30^{2}=900
$$

$$
C_{2}(30)=\\frac{900}{4}
$$

$$
\\frac{900}{4}=225
$$

A square law turns thirty thousand loaves into a $900$ that the coefficient $\\frac{1}{4}$ then cuts to $225$. The corner scores $225$, so the statement is True.`,
      `**B.** → False

The cheapest plan equalizes the marginal indices $2q_{1}$ and $\\frac{1}{2}q_{2}$, which forces $q_{2}=4q_{1}$. With $q_{1}+q_{2}=30$:

$$
q_{1}+4q_{1}=30
$$

$$
5q_{1}=30
$$

$$
q_{1}=6
$$

$$
q_{2}=24
$$

That split costs $180$. The cheaper-line corner costs $225$. Quadratic costs rise so fast that spreading the load still beats concentrating, so the statement is False.`,
      `**C.** → True

An even split of $15$ thousand on each line costs

$$
C_{1}(15)=15^{2}
$$

$$
15^{2}=225
$$

$$
C_{2}(15)=\\frac{1}{4}\\cdot 225
$$

$$
C_{2}(15)=\\frac{225}{4}
$$

$$
225+\\frac{225}{4}=\\frac{1125}{4}
$$

$$
\\frac{1125}{4}=281.25
$$

The six-and-twenty-four split costs $180$. Because $281.25>180$, the even split is dearer, so the statement is True.`,
      `**D.** → True

Six thousand on line 1 and twenty-four thousand on line 2 cost

$$
C_{1}(6)=6^{2}
$$

$$
6^{2}=36
$$

$$
C_{2}(24)=\\frac{1}{4}\\cdot 24^{2}
$$

$$
24^{2}=576
$$

$$
C_{2}(24)=\\frac{576}{4}
$$

$$
\\frac{576}{4}=144
$$

$$
36+144=180
$$

The split scores $180$, so the statement is True.`,
      `**E.** → False

Line 1 is $C_{1}(q)=q^{2}$. Average cost divides by own output:

$$
\\frac{C_{1}(q)}{q}=\\frac{q^{2}}{q}
$$

$$
\\frac{C_{1}(q)}{q}=q
$$

The leftover exponent is $+1$, so the average rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** All on line 2 costs $225$. The equal-marginal split is $6$ and $24$, costing $180$.

**2.** The even split costs $281.25$, so it is dearer than $6$ and $24$. The cheaper-line corner is not the cheapest plan.

**3.** Line 1's average cost is $q$, which rises with own output.

**Answer.** $a=1$ | $b=\\frac{1}{4}$ | all on line 2 costs $225$ | $6$ and $24$ costs $180$`,
  },
  {
    id: `math-8-96`,
    case_id: `MATH 8.96`,
    title: `Museum Tickets: Point Elasticity Versus a Finite Rise`,
    context: `Evening museum admissions follow $q(p)=A p^{-2}$ tickets when the price is $p>0$ euros. At ten euros the desk sold forty tickets. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The point price elasticity of demand is constantly $-2$.`,
      `Raising the price from $10$ to $12$ euros cuts demand by exactly $8$ tickets.`,
      `For a $10\\%$ price rise, the constant-elasticity shortcut matches the exact change in demand.`,
      `Weekly revenue is maximized by raising the price without bound.`,
      `At five euros the desk sells $160$ tickets.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

For any isoelastic rule $q=A p^{r}$ the coefficient cancels in the elasticity, leaving the exponent. Here $r=-2$.

$$
\\varepsilon(p)=\\frac{p}{q}\\cdot\\frac{dq}{dp}
$$

$$
\\frac{dq}{dp}=r A p^{r-1}
$$

$$
\\varepsilon(p)=\\frac{p}{A p^{r}}\\cdot r A p^{r-1}
$$

$$
\\varepsilon(p)=r
$$

$$
\\varepsilon(p)=-2
$$

Elasticity is $-2$ at every price $p>0$, so the statement is True.`,
      `**B.** → False

Demand is $q(p)=4000p^{-2}$. At twelve euros:

$$
q(12)=\\frac{4000}{12^{2}}
$$

$$
12^{2}=144
$$

$$
q(12)=\\frac{4000}{144}
$$

$$
\\frac{4000}{144}=\\frac{250}{9}
$$

$$
\\frac{250}{9}\\approx 27.78
$$

The cut from the recorded $40$ is

$$
40-\\frac{250}{9}
$$

$$
40=\\frac{360}{9}
$$

$$
\\frac{360}{9}-\\frac{250}{9}=\\frac{110}{9}
$$

$$
\\frac{110}{9}\\approx 12.22
$$

The cut is about $12.22$ tickets, not $8$. The figure $8$ is $20\\%$ of $40$, copying the $20\\%$ price rise as if demand were linear, so the statement is False.`,
      `**C.** → False

The shortcut multiplies the exponent $-2$ by a $10\\%$ price rise, giving $-20\\%$. The exact rule raises the price factor $1.1$ to that exponent:

$$
\\frac{q(1.1p)}{q(p)}=1.1^{-2}
$$

$$
1.1^{2}=1.21
$$

$$
1.1^{-2}=\\frac{1}{1.21}
$$

$$
\\frac{1}{1.21}-1=\\frac{-0.21}{1.21}
$$

$$
\\frac{-0.21}{1.21}\\approx -0.1736
$$

The exact cut is about $17.36\\%$, not $20\\%$. A finite rise is not the same as the point elasticity times the percentage, so the statement is False.`,
      `**D.** → False

Revenue is price times demand:

$$
R(p)=p\\cdot 4000p^{-2}
$$

$$
R(p)=\\frac{4000}{p}
$$

The exponent $-1$ is negative, so $R$ falls at every price. As $p$ grows without bound, $R(p)\\to 0$. Raising the price without bound drives the till toward zero, so the statement is False.`,
      `**E.** → True

Five euros is half of ten, so demand scales by $\\left(\\frac{1}{2}\\right)^{-2}$:

$$
\\frac{q(5)}{q(10)}=\\left(\\frac{1}{2}\\right)^{-2}
$$

$$
\\left(\\frac{1}{2}\\right)^{-2}=2^{2}
$$

$$
2^{2}=4
$$

$$
q(5)=40\\cdot 4
$$

$$
40\\cdot 4=160
$$

Halving the price quadruples demand. The desk sells $160$ tickets, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
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

**2.** $q(12)=\\frac{250}{9}$, a cut of about $12.22$ tickets, not $8$. A $10\\%$ rise cuts demand by about $17.4\\%$, not by the shortcut's $20\\%$.

**3.** $(2)$ falls with price. Halving the price quadruples demand, so $q(5)=160$.

**Answer.** $\\varepsilon=-2$ | $A=4000$ | exact cut about $12.22$ tickets | $q(5)=160$`,
  },
  {
    id: `math-8-97`,
    case_id: `MATH 8.97`,
    title: `Annealing Lehr Throughput Under a Mis-Scaled Coefficient`,
    context: `A glass-annealing lehr's throughput follows $T(e)=A e^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at belt setting four delivered sixty-four trays an hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At belt setting $9$, throughput is $216$ trays per hour.`,
      `If the coefficient were $25\\%$ larger, every throughput reading would rise by exactly $25\\%$.`,
      `The scale factor for doubling the belt setting does not depend on $A$.`,
      `If the coefficient were $25\\%$ larger, the scale factor $\\frac{T(2e)}{T(e)}$ would itself become $25\\%$ larger.`,
      `If the coefficient were $25\\%$ larger, throughput at belt setting $9$ would be $250$ trays per hour.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Throughput is $T(e)=8e^{\\frac{3}{2}}$. At belt setting $9$:

$$
T(9)=8\\cdot 9^{\\frac{3}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=3^{3}
$$

$$
3^{3}=27
$$

$$
T(9)=8\\cdot 27
$$

$$
8\\cdot 27=216
$$

Throughput is $216$ trays per hour, so the statement is True.`,
      `**B.** → True

A $25\\%$ larger coefficient is a plain multiplier in front of the same shape $e^{\\frac{3}{2}}$. At a fixed setting the shape cancels:

$$
\\frac{T_{c}(e)}{T(e)}=\\frac{1.25 A e^{\\frac{3}{2}}}{A e^{\\frac{3}{2}}}
$$

$$
\\frac{T_{c}(e)}{T(e)}=1.25
$$

Every reading rises by exactly $25\\%$, so the statement is True.`,
      `**C.** → True

A doubling ratio puts $A$ in both the numerator and the denominator, so the coefficient cancels:

$$
\\frac{T(2e)}{T(e)}=\\frac{A(2e)^{\\frac{3}{2}}}{A e^{\\frac{3}{2}}}
$$

$$
\\frac{T(2e)}{T(e)}=2^{\\frac{3}{2}}
$$

The factor is pinned by the exponent alone. It does not depend on $A$, so the statement is True.`,
      `**D.** → False

Under the enlarged coefficient the same cancellation occurs:

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=\\frac{1.25 A (2e)^{\\frac{3}{2}}}{1.25 A e^{\\frac{3}{2}}}
$$

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=2^{\\frac{3}{2}}
$$

The factor $1.25$ never survives the ratio. Levels move by $25\\%$ and doubling ratios do not, so the statement is False.`,
      `**E.** → False

Throughput at belt setting $9$ is $216$ trays per hour. A $25\\%$ larger coefficient multiplies that reading by $1.25$:

$$
T_{c}(9)=1.25\\cdot 216
$$

$$
1.25\\cdot 216=270
$$

The claimed $250$ is not that product. Throughput would be $270$ trays per hour, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
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

**1.** $T(9)=216$. Replacing $A$ by $1.25A$ multiplies every level by $1.25$, so $T_{c}(9)=270$, not $250$.

**2.** $(2)$ is independent of $A$. A $25\\%$ larger coefficient leaves the doubling factor $2^{\\frac{3}{2}}$ unchanged.

**Answer.** $A=8$ | $T(9)=216$ | levels scale with $A$ | doubling factor $2^{\\frac{3}{2}}$`,
  },
];
