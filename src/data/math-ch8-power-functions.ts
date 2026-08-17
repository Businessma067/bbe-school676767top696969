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

Harvest follows $Y(h)=A h^{r}$ after $h>0$ hours, with both constants unknown. The recorded pairs are $Y(8)=4$ and $Y(27)=6$. The claim is a third level, $Y(64)=8$, so both constants must be recovered first.

The ratio of the two harvests cancels $A$:

$$
\\frac{Y(27)}{Y(8)}=\\frac{A\\cdot 27^{r}}{A\\cdot 8^{r}}
$$

$$
\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{3}{2}=\\left(\\frac{27}{8}\\right)^{r}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$,

$$
\\frac{3}{2}=\\left(\\left(\\frac{3}{2}\\right)^{3}\\right)^{r}=\\left(\\frac{3}{2}\\right)^{3r}
$$

The bases match, so the exponents match:

$$
3r=1
$$

$$
r=\\frac{1}{3}
$$

The eight-hour harvest then pins $A$:

$$
A\\cdot 8^{\\frac{1}{3}}=4
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
A\\cdot 2=4
$$

$$
A=2
$$

The recovered law is $Y(h)=2h^{\\frac{1}{3}}$. At sixty-four hours:

$$
Y(64)=2\\cdot 64^{\\frac{1}{3}}
$$

$$
64^{\\frac{1}{3}}=4
$$

$$
Y(64)=2\\cdot 4=8
$$

The claimed harvest is $8$ kilograms, so the statement is True.`,
      `**B.** → True

Harvest follows $Y(h)=A h^{r}$ after $h>0$ hours, with both constants unknown. The recorded pairs are $Y(8)=4$ and $Y(27)=6$. The claim is that the exponent is smaller than one, so $r$ must be recovered first.

The ratio of the two harvests cancels $A$:

$$
\\frac{Y(27)}{Y(8)}=\\frac{A\\cdot 27^{r}}{A\\cdot 8^{r}}
$$

$$
\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{3}{2}=\\left(\\frac{27}{8}\\right)^{r}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$,

$$
\\frac{3}{2}=\\left(\\left(\\frac{3}{2}\\right)^{3}\\right)^{r}=\\left(\\frac{3}{2}\\right)^{3r}
$$

The bases match, so the exponents match:

$$
3r=1
$$

$$
r=\\frac{1}{3}
$$

Compare the exponent with one:

$$
\\frac{1}{3}<1
$$

The exponent is smaller than one, so the statement is True.`,
      `**C.** → False

Harvest follows $Y(h)=A h^{r}$ after $h>0$ hours, with both constants unknown. The recorded pairs are $Y(8)=4$ and $Y(27)=6$. The claim is that doubling the watering time doubles the harvest, which is the scaling factor $2^{r}$.

The ratio of the two harvests cancels $A$:

$$
\\frac{Y(27)}{Y(8)}=\\frac{A\\cdot 27^{r}}{A\\cdot 8^{r}}
$$

$$
\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{3}{2}=\\left(\\frac{27}{8}\\right)^{r}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$,

$$
\\frac{3}{2}=\\left(\\left(\\frac{3}{2}\\right)^{3}\\right)^{r}=\\left(\\frac{3}{2}\\right)^{3r}
$$

The bases match, so the exponents match:

$$
3r=1
$$

$$
r=\\frac{1}{3}
$$

Doubling the hours multiplies the harvest by

$$
\\frac{Y(2h)}{Y(h)}=\\frac{A(2h)^{r}}{A h^{r}}
$$

$$
\\frac{Y(2h)}{Y(h)}=2^{r}
$$

$$
2^{r}=2^{\\frac{1}{3}}
$$

The claimed factor is $2$. Compare:

$$
2^{\\frac{1}{3}}<2
$$

The cube root of two is not two, so the statement is False.`,
      `**D.** → False

Harvest follows $Y(h)=A h^{r}$ after $h>0$ hours, with both constants unknown. The recorded pairs are $Y(8)=4$ and $Y(27)=6$. The claim is a one-hour level, $Y(1)=4$, so both constants must be recovered first.

The ratio of the two harvests cancels $A$:

$$
\\frac{Y(27)}{Y(8)}=\\frac{A\\cdot 27^{r}}{A\\cdot 8^{r}}
$$

$$
\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{3}{2}=\\left(\\frac{27}{8}\\right)^{r}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$,

$$
\\frac{3}{2}=\\left(\\left(\\frac{3}{2}\\right)^{3}\\right)^{r}=\\left(\\frac{3}{2}\\right)^{3r}
$$

The bases match, so the exponents match:

$$
3r=1
$$

$$
r=\\frac{1}{3}
$$

The eight-hour harvest then pins $A$:

$$
A\\cdot 8^{\\frac{1}{3}}=4
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
A\\cdot 2=4
$$

$$
A=2
$$

The recovered law is $Y(h)=2h^{\\frac{1}{3}}$. At one hour, $1^{r}=1$, so

$$
Y(1)=2\\cdot 1^{\\frac{1}{3}}
$$

$$
Y(1)=2
$$

The claimed harvest is $4$ kilograms, and $2\\neq 4$, so the statement is False.`,
      `**E.** → True

Harvest follows $Y(h)=A h^{r}$ after $h>0$ hours, with both constants unknown. The recorded pairs are $Y(8)=4$ and $Y(27)=6$. The claim is that watering time is a power function of harvest, so the law must be inverted after both constants are recovered.

The ratio of the two harvests cancels $A$:

$$
\\frac{Y(27)}{Y(8)}=\\frac{A\\cdot 27^{r}}{A\\cdot 8^{r}}
$$

$$
\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{3}{2}=\\left(\\frac{27}{8}\\right)^{r}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$,

$$
\\frac{3}{2}=\\left(\\left(\\frac{3}{2}\\right)^{3}\\right)^{r}=\\left(\\frac{3}{2}\\right)^{3r}
$$

The bases match, so the exponents match:

$$
3r=1
$$

$$
r=\\frac{1}{3}
$$

The eight-hour harvest then pins $A$:

$$
A\\cdot 8^{\\frac{1}{3}}=4
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
A\\cdot 2=4
$$

$$
A=2
$$

The recovered law is $Y(h)=2h^{\\frac{1}{3}}$. Solving for hours:

$$
Y=2h^{\\frac{1}{3}}
$$

$$
\\frac{Y}{2}=h^{\\frac{1}{3}}
$$

$$
h=\\left(\\frac{Y}{2}\\right)^{3}
$$

Hours are a cube of a constant times harvest, which is a power function of $Y$, so the statement is True.`,
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

Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. Four agents produce a twenty-four minute wait. The claim is a nine-agent level, $W(9)=16$, so the unknown coefficient must be recovered first.

The four-agent record pins $A$:

$$
A\\cdot 4^{-\\frac{1}{2}}=24
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
A\\cdot\\frac{1}{2}=24
$$

$$
A=48
$$

The recovered law is $W(n)=48 n^{-\\frac{1}{2}}$. At nine agents:

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

Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. Four agents produce a twenty-four minute wait. The claim is that quadrupling that recorded team halves the wait.

Quadrupling the team multiplies the wait by $4$ to the power of the exponent, and $A$ cancels:

$$
\\frac{W(4n)}{W(n)}=\\frac{A(4n)^{-\\frac{1}{2}}}{A n^{-\\frac{1}{2}}}
$$

$$
\\frac{W(4n)}{W(n)}=4^{-\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

The four-agent record also pins $A$, so the recorded team of four can be checked directly:

$$
A\\cdot 4^{-\\frac{1}{2}}=24
$$

$$
A\\cdot\\frac{1}{2}=24
$$

$$
A=48
$$

Sixteen agents is four times the recorded team:

$$
W(16)=48\\cdot 16^{-\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
W(16)=48\\cdot\\frac{1}{4}
$$

$$
W(16)=12
$$

Half of the recorded twenty-four minute wait is $12$, so the statement is True.`,
      `**C.** → False

Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. Four agents produce a twenty-four minute wait. The claim is that doubling that recorded team halves the wait, so the coefficient must be recovered and the eight-agent wait compared with twelve minutes.

The four-agent record pins $A$:

$$
A\\cdot 4^{-\\frac{1}{2}}=24
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
A\\cdot\\frac{1}{2}=24
$$

$$
A=48
$$

The recovered law is $W(n)=48 n^{-\\frac{1}{2}}$. Doubling the recorded team gives eight agents:

$$
W(8)=48\\cdot 8^{-\\frac{1}{2}}
$$

$$
W(8)=\\frac{48}{\\sqrt{8}}
$$

$$
\\sqrt{8}=2\\sqrt{2}
$$

$$
W(8)=\\frac{48}{2\\sqrt{2}}
$$

$$
W(8)=\\frac{48}{2\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}}
$$

$$
W(8)=\\frac{48\\sqrt{2}}{4}
$$

$$
W(8)=12\\sqrt{2}
$$

Half of the recorded wait is

$$
\\frac{1}{2}W(4)=\\frac{1}{2}\\cdot 24=12
$$

Compare:

$$
12\\sqrt{2}>12
$$

The wait falls to $12\\sqrt{2}$ minutes, not to twelve, so the statement is False.`,
      `**D.** → True

Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. Four agents produce a twenty-four minute wait, and staffing cannot exceed fifty agents. The claim is that a six-minute wait would need more than fifty agents, so the law must be inverted after $A$ is recovered.

The four-agent record pins $A$:

$$
A\\cdot 4^{-\\frac{1}{2}}=24
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
A\\cdot\\frac{1}{2}=24
$$

$$
A=48
$$

The recovered law is $W(n)=48 n^{-\\frac{1}{2}}$. A six-minute wait means

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
n=8^{2}
$$

$$
n=64
$$

The staffing cap is $50$. Compare:

$$
64>50
$$

Sixty-four is more than fifty, so the statement is True.`,
      `**E.** → False

Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. Four agents produce a twenty-four minute wait. The claim is that a growing team eventually makes the wait negative, so the sign of the recovered law must be checked.

The four-agent record pins $A$:

$$
A\\cdot 4^{-\\frac{1}{2}}=24
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
A\\cdot\\frac{1}{2}=24
$$

$$
A=48
$$

The recovered law is

$$
W(n)=\\frac{48}{\\sqrt{n}}
$$

For every $n>0$ the square root is positive and $A=48>0$, so

$$
W(n)>0
$$

A negative exponent sends the wait towards zero from above, never through zero, so the statement is False.`,
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

Leah pumps according to $Q_{L}(d)=a d^{\\frac{1}{2}}$ at depth $d>0$ metres, and at nine metres she gets twelve litres a minute. The claim is her flow at four metres, $Q_{L}(4)=8$, so the unknown coefficient must be recovered first.

The general law is

$$
Q_{L}(d)=a d^{\\frac{1}{2}}
$$

The nine-metre reading pins $a$:

$$
a\\cdot 9^{\\frac{1}{2}}=12
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
a\\cdot 3=12
$$

$$
a=\\frac{12}{3}
$$

$$
a=4
$$

The recovered law is $Q_{L}(d)=4 d^{\\frac{1}{2}}$. At four metres:

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

Leah pumps according to $Q_{L}(d)=a d^{\\frac{1}{2}}$, with twelve litres a minute at nine metres. Omar pumps according to $Q_{O}(d)=k d^{\\frac{3}{2}}$, with four litres a minute at four metres. The claim is that Omar overtakes Leah before ten metres, so both coefficients must be recovered and the positive crossing found.

Leah's nine-metre reading pins $a$:

$$
a\\cdot 9^{\\frac{1}{2}}=12
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
a\\cdot 3=12
$$

$$
a=4
$$

Omar's four-metre reading pins $k$:

$$
k\\cdot 4^{\\frac{3}{2}}=4
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
k\\cdot 8=4
$$

$$
k=\\frac{1}{2}
$$

The recovered laws are $Q_{L}(d)=4 d^{\\frac{1}{2}}$ and $Q_{O}(d)=\\frac{1}{2} d^{\\frac{3}{2}}$. They meet when

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

Compare with ten metres:

$$
8<10
$$

Eight metres is shallower than ten, so the statement is True.`,
      `**C.** → False

Omar pumps according to $Q_{O}(d)=k d^{\\frac{3}{2}}$ at depth $d>0$ metres, and at four metres he gets four litres a minute. The claim is a sixteen-metre level above forty litres a minute, so the unknown coefficient must be recovered first.

The four-metre reading pins $k$:

$$
k\\cdot 4^{\\frac{3}{2}}=4
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
k\\cdot 8=4
$$

$$
k=\\frac{1}{2}
$$

The recovered law is $Q_{O}(d)=\\frac{1}{2} d^{\\frac{3}{2}}$. At sixteen metres:

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

The claimed threshold is $40$. Compare:

$$
32<40
$$

Thirty-two is not more than forty, so the statement is False.`,
      `**D.** → True

Leah pumps according to $Q_{L}(d)=a d^{\\frac{1}{2}}$, with twelve litres a minute at nine metres. Omar pumps according to $Q_{O}(d)=k d^{\\frac{3}{2}}$, with four litres a minute at four metres. The claim is that once Omar is ahead he stays ahead, so both coefficients must be recovered and the ratio tracked.

Leah's nine-metre reading pins $a$:

$$
a\\cdot 9^{\\frac{1}{2}}=12
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
a\\cdot 3=12
$$

$$
a=4
$$

Omar's four-metre reading pins $k$:

$$
k\\cdot 4^{\\frac{3}{2}}=4
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
k\\cdot 8=4
$$

$$
k=\\frac{1}{2}
$$

The ratio of the recovered laws is

$$
\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{\\frac{1}{2} d^{\\frac{3}{2}}}{4 d^{\\frac{1}{2}}}
$$

$$
\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{1}{8} d^{\\frac{3}{2}-\\frac{1}{2}}
$$

$$
\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}
$$

That ratio exceeds $1$ precisely when

$$
\\frac{d}{8}>1
$$

$$
d>8
$$

Omar stays ahead at every greater depth, so the statement is True.`,
      `**E.** → False

Leah pumps according to $Q_{L}(d)=a d^{\\frac{1}{2}}$, with twelve litres a minute at nine metres. Omar pumps according to $Q_{O}(d)=k d^{\\frac{3}{2}}$, with four litres a minute at four metres. The claim is that the two wells together still follow a single power of depth, so both coefficients must be recovered and the sum inspected.

Leah's nine-metre reading pins $a$:

$$
a\\cdot 9^{\\frac{1}{2}}=12
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
a\\cdot 3=12
$$

$$
a=4
$$

Omar's four-metre reading pins $k$:

$$
k\\cdot 4^{\\frac{3}{2}}=4
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
k\\cdot 8=4
$$

$$
k=\\frac{1}{2}
$$

The combined flow is

$$
Q_{L}(d)+Q_{O}(d)=4 d^{\\frac{1}{2}}+\\frac{1}{2} d^{\\frac{3}{2}}
$$

The exponents $\\frac{1}{2}$ and $\\frac{3}{2}$ are different, and both coefficients are nonzero. A sum of distinct powers is not itself a power of depth, so the statement is False.`,
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

Nora bills a run of $n>0$ copies as $C(n)=F+A n^{\\frac{1}{2}}$. A sixteen-copy run costs two hundred and fifty euros, and a sixty-four-copy run costs four hundred and fifty. The claim is that the setup keeps the bill from being a power function of the run, so both constants must be recovered first.

The sixteen-copy invoice is

$$
F+A\\cdot 16^{\\frac{1}{2}}=250
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
F+4A=250
$$

The sixty-four-copy invoice is

$$
F+A\\cdot 64^{\\frac{1}{2}}=450
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
F+8A=450
$$

Subtracting cancels the setup:

$$
(F+8A)-(F+4A)=450-250
$$

$$
4A=200
$$

$$
A=50
$$

The sixteen-copy invoice then pins $F$:

$$
F+4\\cdot 50=250
$$

$$
F+200=250
$$

$$
F=50
$$

The recovered bill is $C(n)=50+50 n^{\\frac{1}{2}}$. A power function of $n$ cannot carry a nonzero intercept, so the statement is True.`,
      `**B.** → True

Nora bills a run of $n>0$ copies as $C(n)=F+A n^{\\frac{1}{2}}$. A sixteen-copy run costs two hundred and fifty euros, and a sixty-four-copy run costs four hundred and fifty. The claim is a twenty-five-copy level of three hundred euros, so both constants must be recovered first.

The sixteen-copy invoice is

$$
F+A\\cdot 16^{\\frac{1}{2}}=250
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
F+4A=250
$$

The sixty-four-copy invoice is

$$
F+A\\cdot 64^{\\frac{1}{2}}=450
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
F+8A=450
$$

Subtracting cancels the setup:

$$
(F+8A)-(F+4A)=450-250
$$

$$
4A=200
$$

$$
A=50
$$

The sixteen-copy invoice then pins $F$:

$$
F+4\\cdot 50=250
$$

$$
F+200=250
$$

$$
F=50
$$

The recovered bill is $C(n)=50+50 n^{\\frac{1}{2}}$. At twenty-five copies:

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

Nora bills a run of $n>0$ copies as $C(n)=F+A n^{\\frac{1}{2}}$. A sixteen-copy run costs two hundred and fifty euros, and a sixty-four-copy run costs four hundred and fifty. The claim is that a long enough run makes the total bill fall, so both constants must be recovered and the direction of $C$ checked.

The sixteen-copy invoice is

$$
F+A\\cdot 16^{\\frac{1}{2}}=250
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
F+4A=250
$$

The sixty-four-copy invoice is

$$
F+A\\cdot 64^{\\frac{1}{2}}=450
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
F+8A=450
$$

Subtracting cancels the setup:

$$
(F+8A)-(F+4A)=450-250
$$

$$
4A=200
$$

$$
A=50
$$

The sixteen-copy invoice then pins $F$:

$$
F+4\\cdot 50=250
$$

$$
F+200=250
$$

$$
F=50
$$

The recovered bill is

$$
C(n)=50+50 n^{\\frac{1}{2}}
$$

Both the setup $50$ and the coefficient $50$ are positive, so $C(n)$ is strictly increasing in $n$. Printing more copies always raises the bill, so the statement is False.`,
      `**D.** → False

Nora bills a run of $n>0$ copies as $C(n)=F+A n^{\\frac{1}{2}}$. A sixteen-copy run costs two hundred and fifty euros, and a sixty-four-copy run costs four hundred and fifty. The claim is that thirty-six copies cost more than four hundred euros, so both constants must be recovered first.

The sixteen-copy invoice is

$$
F+A\\cdot 16^{\\frac{1}{2}}=250
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
F+4A=250
$$

The sixty-four-copy invoice is

$$
F+A\\cdot 64^{\\frac{1}{2}}=450
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
F+8A=450
$$

Subtracting cancels the setup:

$$
(F+8A)-(F+4A)=450-250
$$

$$
4A=200
$$

$$
A=50
$$

The sixteen-copy invoice then pins $F$:

$$
F+4\\cdot 50=250
$$

$$
F+200=250
$$

$$
F=50
$$

The recovered bill is $C(n)=50+50 n^{\\frac{1}{2}}$. At thirty-six copies:

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

The claimed threshold is $400$. Compare:

$$
350<400
$$

Three hundred and fifty is not more than four hundred, so the statement is False.`,
      `**E.** → True

Nora bills a run of $n>0$ copies as $C(n)=F+A n^{\\frac{1}{2}}$. A sixteen-copy run costs two hundred and fifty euros, and a sixty-four-copy run costs four hundred and fifty. The claim is that a longer run is cheaper per copy, so both constants must be recovered and the unit cost inspected.

The sixteen-copy invoice is

$$
F+A\\cdot 16^{\\frac{1}{2}}=250
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
F+4A=250
$$

The sixty-four-copy invoice is

$$
F+A\\cdot 64^{\\frac{1}{2}}=450
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
F+8A=450
$$

Subtracting cancels the setup:

$$
(F+8A)-(F+4A)=450-250
$$

$$
4A=200
$$

$$
A=50
$$

The sixteen-copy invoice then pins $F$:

$$
F+4\\cdot 50=250
$$

$$
F+200=250
$$

$$
F=50
$$

Cost per copy is the recovered bill divided by the run:

$$
\\frac{C(n)}{n}=\\frac{50+50 n^{\\frac{1}{2}}}{n}
$$

$$
\\frac{C(n)}{n}=\\frac{50}{n}+50 n^{-\\frac{1}{2}}
$$

Both terms fall as $n$ rises, so the statement is True.`,
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

The refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. Raising purity from nine to sixteen increased metal output by two hundred and ninety-six tonnes. That metal is then converted to alloy strength $S=\\frac{1}{2}M^{\\frac{2}{3}}$. The claim is that after both stages the strength is proportional to purity, so $A$ must be recovered and the stages composed.

The audited gain is a difference of two metal outputs:

$$
M(16)-M(9)=296
$$

$$
A\\cdot 16^{\\frac{3}{2}}-A\\cdot 9^{\\frac{3}{2}}=296
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
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=3^{3}
$$

$$
3^{3}=27
$$

$$
A(64-27)=296
$$

$$
A\\cdot 37=296
$$

$$
A=8
$$

The recovered metal law is $M(u)=8 u^{\\frac{3}{2}}$. Strength then composes as

$$
S(u)=\\frac{1}{2}\\bigl(A u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}
$$

$$
S(u)=\\frac{1}{2} A^{\\frac{2}{3}} u^{\\frac{3}{2}\\cdot\\frac{2}{3}}
$$

$$
S(u)=\\frac{1}{2} A^{\\frac{2}{3}} u
$$

$$
A^{\\frac{2}{3}}=8^{\\frac{2}{3}}
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
2^{2}=4
$$

$$
S(u)=\\frac{1}{2}\\cdot 4\\cdot u
$$

$$
S(u)=2u
$$

Strength is twice purity, so the statement is True.`,
      `**B.** → False

The refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. Raising purity from nine to sixteen increased metal output by two hundred and ninety-six tonnes. That metal is then converted to alloy strength $S=\\frac{1}{2}M^{\\frac{2}{3}}$. The claim is a purity-nine strength of twenty-seven, so $A$ must be recovered and the chain evaluated at $u=9$.

The audited gain is a difference of two metal outputs:

$$
M(16)-M(9)=296
$$

$$
A\\cdot 16^{\\frac{3}{2}}-A\\cdot 9^{\\frac{3}{2}}=296
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
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=3^{3}
$$

$$
3^{3}=27
$$

$$
A(64-27)=296
$$

$$
A\\cdot 37=296
$$

$$
A=8
$$

The recovered metal law is $M(u)=8 u^{\\frac{3}{2}}$. Strength then composes as

$$
S(u)=\\frac{1}{2}\\bigl(8 u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}
$$

$$
S(u)=\\frac{1}{2}\\cdot 8^{\\frac{2}{3}} u
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

At purity nine:

$$
S(9)=2\\cdot 9
$$

$$
S(9)=18
$$

The claimed strength is $27$, and $18\\neq 27$, so the statement is False.`,
      `**C.** → False

The refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. Raising purity from nine to sixteen increased metal output by two hundred and ninety-six tonnes. That metal is then converted to alloy strength $S=\\frac{1}{2}M^{\\frac{2}{3}}$. A rival mill quotes strength directly as $1.8u+5$. The claim is that the two quotes never meet, so $A$ must be recovered, the chain composed, and the crossing solved.

The audited gain is a difference of two metal outputs:

$$
M(16)-M(9)=296
$$

$$
A\\cdot 16^{\\frac{3}{2}}-A\\cdot 9^{\\frac{3}{2}}=296
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
A(64-27)=296
$$

$$
A\\cdot 37=296
$$

$$
A=8
$$

The recovered metal law is $M(u)=8 u^{\\frac{3}{2}}$. Strength then composes as

$$
S(u)=\\frac{1}{2}\\bigl(8 u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}
$$

$$
S(u)=\\frac{1}{2}\\cdot 8^{\\frac{2}{3}} u
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
S(u)=2u
$$

Agreement with the rival line is

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

The refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. Raising purity from nine to sixteen increased metal output by two hundred and ninety-six tonnes. That metal is then converted to alloy strength $S=\\frac{1}{2}M^{\\frac{2}{3}}$. The claim is that at purity thirty-six the strength exceeds seventy, so $A$ must be recovered and the chain evaluated.

The audited gain is a difference of two metal outputs:

$$
M(16)-M(9)=296
$$

$$
A\\cdot 16^{\\frac{3}{2}}-A\\cdot 9^{\\frac{3}{2}}=296
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
A(64-27)=296
$$

$$
A\\cdot 37=296
$$

$$
A=8
$$

The recovered metal law is $M(u)=8 u^{\\frac{3}{2}}$. Strength then composes as

$$
S(u)=\\frac{1}{2}\\bigl(8 u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}
$$

$$
S(u)=\\frac{1}{2}\\cdot 8^{\\frac{2}{3}} u
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
S(u)=2u
$$

At purity thirty-six:

$$
S(36)=2\\cdot 36
$$

$$
S(36)=72
$$

The claimed threshold is $70$. Compare:

$$
72>70
$$

Seventy-two is more than seventy, so the statement is True.`,
      `**E.** → False

A rival mill quotes strength directly as $1.8u+5$. The claim is that this quote is a power function of purity.

A power function of purity has the form $c u^{p}$ for constants $c$ and $p$, so it cannot carry a nonzero intercept. The rival quote is

$$
1.8u+5
$$

At purity zero the quote still equals $5$. That extra constant term stops the quote from being a power of $u$, so the statement is False.`,
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

Peak load follows $L(x)=A x^{r}$ for $x>0$ simultaneous jobs, with both constants unknown. Stress tests show that doubling the job count multiplies peak load by $4$. The claim is that tripling the job count multiplies peak load by $6$, which is the scaling factor $3^{r}$.

The doubling test cancels $A$:

$$
\\frac{L(2x)}{L(x)}=\\frac{A(2x)^{r}}{A x^{r}}
$$

$$
\\frac{L(2x)}{L(x)}=2^{r}
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

Tripling the job count then multiplies peak load by

$$
\\frac{L(3x)}{L(x)}=3^{r}
$$

$$
3^{r}=3^{2}
$$

$$
3^{2}=9
$$

The claimed factor is $6$. Compare:

$$
9\\neq 6
$$

The factor is nine, not six, so the statement is False.`,
      `**B.** → True

Peak load follows $L(x)=A x^{r}$ for $x>0$ simultaneous jobs, with both constants unknown. Stress tests show that doubling the job count multiplies peak load by $4$, and a run with $8$ simultaneous jobs recorded a peak load of $32$. The claim is a four-job level of eight, so both constants must be recovered first.

The doubling test cancels $A$:

$$
\\frac{L(2x)}{L(x)}=\\frac{A(2x)^{r}}{A x^{r}}
$$

$$
\\frac{L(2x)}{L(x)}=2^{r}
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The eight-job run then pins $A$:

$$
A\\cdot 8^{r}=32
$$

$$
A\\cdot 8^{2}=32
$$

$$
8^{2}=64
$$

$$
A\\cdot 64=32
$$

$$
A=\\frac{32}{64}
$$

$$
A=\\frac{1}{2}
$$

The recovered law is $L(x)=\\frac{1}{2}x^{2}$. At four jobs:

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

Peak load follows $L(x)=A x^{r}$ for $x>0$ simultaneous jobs, with both constants unknown. Stress tests show that doubling the job count multiplies peak load by $4$. The claim is that the exponent exceeds one, so $r$ must be recovered first.

The doubling test cancels $A$:

$$
\\frac{L(2x)}{L(x)}=\\frac{A(2x)^{r}}{A x^{r}}
$$

$$
\\frac{L(2x)}{L(x)}=2^{r}
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

Compare the exponent with one:

$$
2>1
$$

The exponent exceeds one, so the statement is True.`,
      `**D.** → False

Peak load follows $L(x)=A x^{r}$ for $x>0$ simultaneous jobs, with both constants unknown. Stress tests show that doubling the job count multiplies peak load by $4$, and a run with $8$ simultaneous jobs recorded a peak load of $32$. The hardware alarm trips at a peak load of $200$. The claim is that the alarm already trips at sixteen jobs, so both constants must be recovered first.

The doubling test cancels $A$:

$$
\\frac{L(2x)}{L(x)}=\\frac{A(2x)^{r}}{A x^{r}}
$$

$$
\\frac{L(2x)}{L(x)}=2^{r}
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The eight-job run then pins $A$:

$$
A\\cdot 8^{2}=32
$$

$$
8^{2}=64
$$

$$
A\\cdot 64=32
$$

$$
A=\\frac{1}{2}
$$

The recovered law is $L(x)=\\frac{1}{2}x^{2}$. At sixteen jobs:

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

The alarm threshold is $200$. Compare:

$$
128<200
$$

One hundred and twenty-eight is still below two hundred, so the statement is False.`,
      `**E.** → False

Peak load follows $L(x)=A x^{r}$ for $x>0$ simultaneous jobs, with both constants unknown. Stress tests show that doubling the job count multiplies peak load by $4$. The claim is that halving the job count halves peak load, which is the scaling factor $2^{-r}$.

The doubling test cancels $A$:

$$
\\frac{L(2x)}{L(x)}=\\frac{A(2x)^{r}}{A x^{r}}
$$

$$
\\frac{L(2x)}{L(x)}=2^{r}
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

Halving the job count then multiplies peak load by

$$
\\frac{L(\\frac{x}{2})}{L(x)}=\\frac{A(\\frac{x}{2})^{r}}{A x^{r}}
$$

$$
\\frac{L(\\frac{x}{2})}{L(x)}=2^{-r}
$$

$$
2^{-r}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The claimed factor is $\\frac{1}{2}$. Compare:

$$
\\frac{1}{4}\\neq\\frac{1}{2}
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

Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$ for $x>0$. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The claim is that an extra unit of intensity adds more usable responses at $25$ than at $100$, so $A$ must be recovered and the two derivatives compared.

The recorded gain is a difference of two square-root levels:

$$
Q(100)-Q(25)=60
$$

$$
A\\cdot 100^{\\frac{1}{2}}-A\\cdot 25^{\\frac{1}{2}}=60
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
A(10-5)=60
$$

$$
5A=60
$$

$$
A=12
$$

The recovered law is $Q(x)=12 x^{\\frac{1}{2}}$. An extra unit of intensity adds the derivative:

$$
Q'(x)=12\\cdot\\frac{1}{2} x^{-\\frac{1}{2}}
$$

$$
Q'(x)=6 x^{-\\frac{1}{2}}
$$

At intensity $25$:

$$
Q'(25)=6\\cdot 25^{-\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
Q'(25)=\\frac{6}{5}
$$

At intensity $100$:

$$
Q'(100)=6\\cdot 100^{-\\frac{1}{2}}
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
Q'(100)=\\frac{6}{10}
$$

$$
Q'(100)=\\frac{3}{5}
$$

Compare:

$$
\\frac{6}{5}>\\frac{3}{5}
$$

An extra unit of intensity adds more usable responses at $25$ than at $100$, so the statement is True.`,
      `**B.** → True

Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$ for $x>0$. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The claim is an intensity-$81$ yield of one hundred and eight, so $A$ must be recovered first.

The recorded gain is a difference of two square-root levels:

$$
Q(100)-Q(25)=60
$$

$$
A\\cdot 100^{\\frac{1}{2}}-A\\cdot 25^{\\frac{1}{2}}=60
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
A(10-5)=60
$$

$$
5A=60
$$

$$
A=12
$$

The recovered law is $Q(x)=12 x^{\\frac{1}{2}}$. At intensity $81$:

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

Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$ for $x>0$. The claim is that doubling outreach intensity doubles usable responses.

Doubling intensity multiplies responses by $2$ to the power of the exponent, and $A$ cancels:

$$
\\frac{Q(2x)}{Q(x)}=\\frac{A(2x)^{\\frac{1}{2}}}{A x^{\\frac{1}{2}}}
$$

$$
\\frac{Q(2x)}{Q(x)}=2^{\\frac{1}{2}}
$$

The claimed factor is $2$. Compare:

$$
2^{\\frac{1}{2}}<2
$$

The square root of two is not two, so the statement is False.`,
      `**D.** → False

Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$ for $x>0$. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The fieldwork budget caps outreach intensity at $400$. The claim is that the cap allows at most $200$ usable responses, so $A$ must be recovered and the cap evaluated.

The recorded gain is a difference of two square-root levels:

$$
Q(100)-Q(25)=60
$$

$$
A\\cdot 100^{\\frac{1}{2}}-A\\cdot 25^{\\frac{1}{2}}=60
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
A(10-5)=60
$$

$$
5A=60
$$

$$
A=12
$$

The recovered law is $Q(x)=12 x^{\\frac{1}{2}}$. At the intensity cap:

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

The claimed ceiling is $200$. Compare:

$$
240>200
$$

Two hundred and forty exceeds two hundred, so the statement is False.`,
      `**E.** → True

Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$ for $x>0$. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The claim is that the intensity needed for a target response count is itself a power function of that count, so $A$ must be recovered and the law inverted.

The recorded gain is a difference of two square-root levels:

$$
Q(100)-Q(25)=60
$$

$$
A\\cdot 100^{\\frac{1}{2}}-A\\cdot 25^{\\frac{1}{2}}=60
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
A(10-5)=60
$$

$$
5A=60
$$

$$
A=12
$$

The recovered law is $Q(x)=12 x^{\\frac{1}{2}}$. Solving for intensity:

$$
Q=12 x^{\\frac{1}{2}}
$$

$$
\\frac{Q}{12}=x^{\\frac{1}{2}}
$$

$$
x=\\left(\\frac{Q}{12}\\right)^{2}
$$

Intensity is a square of a constant times the response count, which is a power function of $Q$, so the statement is True.`,
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

The automated procedure costs $C(n)=a n^{2}$ for a batch of $n>0$ documents. On a batch of $16$ documents that procedure costs $256$. The claim is a nine-document automated cost of eighty-one, $C(9)=81$, so the unknown coefficient must be recovered first.

The general law is

$$
C(n)=a n^{2}
$$

The sixteen-document bill pins $a$:

$$
a\\cdot 16^{2}=256
$$

$$
16^{2}=256
$$

$$
a\\cdot 256=256
$$

$$
a=\\frac{256}{256}
$$

$$
a=1
$$

The recovered law is $C(n)=n^{2}$. At nine documents:

$$
C(9)=a\\cdot 9^{2}
$$

$$
C(9)=1\\cdot 9^{2}
$$

$$
9^{2}=81
$$

$$
C(9)=81
$$

The claimed automated cost is $81$, so the statement is True.`,
      `**B.** → False

The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. On a batch of $16$ documents the two procedures cost the same, $256$ each. The claim is that automated is cheaper at every batch above sixteen, so both coefficients must be recovered and the sign of $C-D$ checked.

The sixteen-document automated bill pins $a$:

$$
a\\cdot 16^{2}=256
$$

$$
16^{2}=256
$$

$$
a\\cdot 256=256
$$

$$
a=1
$$

The sixteen-document manual bill pins $b$:

$$
b\\cdot 16=256
$$

$$
b=\\frac{256}{16}
$$

$$
b=16
$$

The recovered laws are $C(n)=n^{2}$ and $D(n)=16n$. Their difference is

$$
C(n)-D(n)=n^{2}-16n
$$

$$
C(n)-D(n)=n(n-16)
$$

For $n>16$ both factors are positive, so

$$
C(n)-D(n)>0
$$

$$
C(n)>D(n)
$$

Automated is then more expensive than manual, not cheaper, so the statement is False.`,
      `**C.** → True

The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. On a batch of $16$ documents the two procedures cost the same, $256$ each. The claim is that for $n>0$ they cost the same only at $n=16$, so both coefficients must be recovered and the roots of $C=D$ listed.

The sixteen-document automated bill pins $a$:

$$
a\\cdot 16^{2}=256
$$

$$
16^{2}=256
$$

$$
a\\cdot 256=256
$$

$$
a=1
$$

The sixteen-document manual bill pins $b$:

$$
b\\cdot 16=256
$$

$$
b=16
$$

The recovered laws are $C(n)=n^{2}$ and $D(n)=16n$. They meet when

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

The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. On a batch of $16$ documents the two procedures cost the same, $256$ each. The claim is that at twenty-five documents the two procedures differ by less than one hundred, so both coefficients must be recovered and the gap computed.

The sixteen-document automated bill pins $a$:

$$
a\\cdot 16^{2}=256
$$

$$
16^{2}=256
$$

$$
a\\cdot 256=256
$$

$$
a=1
$$

The sixteen-document manual bill pins $b$:

$$
b\\cdot 16=256
$$

$$
b=16
$$

The recovered laws are $C(n)=n^{2}$ and $D(n)=16n$. At twenty-five documents:

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

The claimed threshold is $100$. Compare:

$$
225>100
$$

Two hundred and twenty-five is not less than one hundred, so the statement is False.`,
      `**E.** → False

The automated procedure costs $C(n)=a n^{2}$ for a batch of $n>0$ documents. On a batch of $16$ documents that procedure costs $256$. The claim is that the automated cost per document is constant, so $a$ must be recovered and the unit cost inspected.

The sixteen-document bill pins $a$:

$$
a\\cdot 16^{2}=256
$$

$$
16^{2}=256
$$

$$
a\\cdot 256=256
$$

$$
a=1
$$

The recovered law is $C(n)=n^{2}$. Cost per document is

$$
\\frac{C(n)}{n}=\\frac{n^{2}}{n}
$$

$$
\\frac{C(n)}{n}=n
$$

which rises with $n$. The unit cost is not constant, so the statement is False.`,
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

Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. A shift with $16$ staff moved $32$ pallets per hour. The claim is a sixty-four-staff level, $H(64)=64$, so the unknown coefficient must be recovered first.

The general law is

$$
H(s)=A s^{\\frac{1}{2}}
$$

The sixteen-staff record pins $A$:

$$
A\\cdot 16^{\\frac{1}{2}}=32
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
A\\cdot 4=32
$$

$$
A=\\frac{32}{4}
$$

$$
A=8
$$

The recovered law is $H(s)=8 s^{\\frac{1}{2}}$. At sixty-four staff:

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

Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. The claim is that doubling the headcount doubles throughput.

Doubling staff multiplies throughput by $2$ to the power of the exponent, and $A$ cancels:

$$
\\frac{H(2s)}{H(s)}=\\frac{A(2s)^{\\frac{1}{2}}}{A s^{\\frac{1}{2}}}
$$

$$
\\frac{H(2s)}{H(s)}=2^{\\frac{1}{2}}
$$

The claimed factor is $2$. Compare:

$$
2^{\\frac{1}{2}}<2
$$

The square root of two is not two, so the statement is False.`,
      `**C.** → False

Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. A shift with $16$ staff moved $32$ pallets per hour. The service contract caps billed throughput at $80$ pallets per hour. The claim is that the ceiling is already reached with $64$ staff, so $A$ must be recovered and that level compared with the cap.

The sixteen-staff record pins $A$:

$$
A\\cdot 16^{\\frac{1}{2}}=32
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
A\\cdot 4=32
$$

$$
A=8
$$

The recovered law is $H(s)=8 s^{\\frac{1}{2}}$. At sixty-four staff:

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

The contract ceiling is $80$. Compare:

$$
64<80
$$

Sixty-four is still below eighty, so the statement is False.`,
      `**D.** → True

Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. A shift with $16$ staff moved $32$ pallets per hour. The claim is that throughput per staff member falls as headcount rises, so $A$ must be recovered and the unit throughput inspected.

The sixteen-staff record pins $A$:

$$
A\\cdot 16^{\\frac{1}{2}}=32
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
A\\cdot 4=32
$$

$$
A=8
$$

The recovered law is $H(s)=8 s^{\\frac{1}{2}}$. Throughput per staff member is

$$
\\frac{H(s)}{s}=\\frac{8 s^{\\frac{1}{2}}}{s}
$$

$$
\\frac{H(s)}{s}=8 s^{-\\frac{1}{2}}
$$

which falls as $s$ rises, so the statement is True.`,
      `**E.** → True

Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. A shift with $16$ staff moved $32$ pallets per hour. The service contract caps billed throughput at $80$ pallets per hour. The claim is that once the ceiling binds, billed throughput is no longer a power function of staff, so $A$ must be recovered and the capped rule written.

The sixteen-staff record pins $A$:

$$
A\\cdot 16^{\\frac{1}{2}}=32
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
A\\cdot 4=32
$$

$$
A=8
$$

The recovered law is $H(s)=8 s^{\\frac{1}{2}}$. The ceiling binds when

$$
8 s^{\\frac{1}{2}}=80
$$

$$
s^{\\frac{1}{2}}=10
$$

$$
s=100
$$

Billed throughput is then the recovered power cut off at the cap:

$$
B(s)=\\min\\bigl(8 s^{\\frac{1}{2}},\\,80\\bigr)
$$

That two-piece rule is not a single power of $s$, so the statement is True.`,
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

Median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. Moving from $4$ servers to $9$ servers cut the median by exactly $19$ ms. The claim is a four-server wait of $27$ ms, so $A$ must be recovered from that recorded cut first.

The recorded cut is a difference of two negative powers:

$$
W(4)-W(9)=19
$$

$$
A\\cdot 4^{-\\frac{3}{2}}-A\\cdot 9^{-\\frac{3}{2}}=19
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
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
9^{-\\frac{3}{2}}=\\frac{1}{27}
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{27}\\right)=19
$$

$$
\\frac{1}{8}=\\frac{27}{216}
$$

$$
\\frac{1}{27}=\\frac{8}{216}
$$

$$
\\frac{27}{216}-\\frac{8}{216}=\\frac{19}{216}
$$

$$
A\\cdot\\frac{19}{216}=19
$$

$$
A=19\\cdot\\frac{216}{19}
$$

$$
A=216
$$

The recovered law is $W(k)=216 k^{-\\frac{3}{2}}$. At four servers:

$$
W(4)=216\\cdot 4^{-\\frac{3}{2}}
$$

$$
W(4)=\\frac{216}{8}
$$

$$
W(4)=27
$$

The claimed wait is $27$ ms, so the statement is True.`,
      `**B.** → False

Median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. Moving from $4$ servers to $9$ servers cut the median by exactly $19$ ms. The claim is that nine servers still wait more than ten milliseconds, so $A$ must be recovered from that recorded cut first.

The recorded cut is a difference of two negative powers:

$$
W(4)-W(9)=19
$$

$$
A\\cdot 4^{-\\frac{3}{2}}-A\\cdot 9^{-\\frac{3}{2}}=19
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
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
9^{-\\frac{3}{2}}=\\frac{1}{27}
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{27}\\right)=19
$$

$$
\\frac{1}{8}=\\frac{27}{216}
$$

$$
\\frac{1}{27}=\\frac{8}{216}
$$

$$
\\frac{27}{216}-\\frac{8}{216}=\\frac{19}{216}
$$

$$
A\\cdot\\frac{19}{216}=19
$$

$$
A=216
$$

The recovered law is $W(k)=216 k^{-\\frac{3}{2}}$. At nine servers:

$$
W(9)=216\\cdot 9^{-\\frac{3}{2}}
$$

$$
W(9)=\\frac{216}{27}
$$

$$
W(9)=8
$$

The claimed threshold is $10$. Compare:

$$
8<10
$$

Eight milliseconds is not more than ten, so the statement is False.`,
      `**C.** → False

Median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. The claim is that doubling the server count halves the median response time.

Doubling the servers multiplies the wait by $2$ to the power of the exponent, and $A$ cancels:

$$
\\frac{W(2k)}{W(k)}=\\frac{A(2k)^{-\\frac{3}{2}}}{A k^{-\\frac{3}{2}}}
$$

$$
\\frac{W(2k)}{W(k)}=2^{-\\frac{3}{2}}
$$

$$
2^{-\\frac{3}{2}}=\\frac{1}{2^{\\frac{3}{2}}}
$$

$$
2^{\\frac{3}{2}}=2\\cdot 2^{\\frac{1}{2}}
$$

$$
2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}
$$

The claimed factor is $\\frac{1}{2}$. Compare:

$$
\\frac{1}{2\\sqrt{2}}\\neq\\frac{1}{2}
$$

That factor is not one half, so the statement is False.`,
      `**D.** → True

Median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. Moving from $4$ servers to $9$ servers cut the median by exactly $19$ ms. The claim is that the server count needed for a target wait is itself a power function of that wait, so $A$ must be recovered and the law inverted.

The recorded cut is a difference of two negative powers:

$$
W(4)-W(9)=19
$$

$$
A\\cdot 4^{-\\frac{3}{2}}-A\\cdot 9^{-\\frac{3}{2}}=19
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
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
9^{-\\frac{3}{2}}=\\frac{1}{27}
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{27}\\right)=19
$$

$$
\\frac{1}{8}=\\frac{27}{216}
$$

$$
\\frac{1}{27}=\\frac{8}{216}
$$

$$
\\frac{27}{216}-\\frac{8}{216}=\\frac{19}{216}
$$

$$
A\\cdot\\frac{19}{216}=19
$$

$$
A=216
$$

The recovered law is $W(k)=216 k^{-\\frac{3}{2}}$. Solving for the server count:

$$
W=216 k^{-\\frac{3}{2}}
$$

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

Median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. Moving from $4$ servers to $9$ servers cut the median by exactly $19$ ms. The claim is that a growing server count eventually makes the wait negative, so $A$ must be recovered and the sign of the law checked.

The recorded cut is a difference of two negative powers:

$$
W(4)-W(9)=19
$$

$$
A\\cdot 4^{-\\frac{3}{2}}-A\\cdot 9^{-\\frac{3}{2}}=19
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
9^{-\\frac{3}{2}}=\\frac{1}{27}
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{27}\\right)=19
$$

$$
A\\cdot\\frac{19}{216}=19
$$

$$
A=216
$$

The recovered law is

$$
W(k)=\\frac{216}{k^{\\frac{3}{2}}}
$$

For every $k>0$ the power in the denominator is positive and $A=216>0$, so

$$
W(k)>0
$$

A negative exponent sends the wait towards zero from above, never through zero, so the statement is False.`,
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

Subscriptions follow $q(p)=A p^{-2}$ after $p>0$ euros, with the exponent already given. The recorded pair is $q(5)=400$. The claim is a second level, $q(10)=100$, so the coefficient $A$ must be recovered first.

The general law is

$$
q(p)=A p^{-2}
$$

The five-euro observation pins $A$:

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

The recovered law is $q(p)=10000 p^{-2}$. At ten euros:

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

Ten euros is twice five, so the same figure is the scale $2^{-2}$ applied to $400$:

$$
\\frac{q(10)}{q(5)}=2^{-2}=\\frac{1}{4}
$$

$$
q(10)=400\\cdot\\frac{1}{4}=100
$$

The claimed demand is $100$ subscriptions, so the statement is True.`,
      `**B.** → False

Subscriptions follow $q(p)=A p^{-2}$, and revenue is the product $R=pq$. The recorded pair $q(5)=400$ recovers $A$ before that product can be simplified.

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

Demand is then $q(p)=10000 p^{-2}$. Revenue multiplies price by quantity:

$$
R(p)=p\\cdot q(p)
$$

$$
R(p)=p\\cdot 10000 p^{-2}
$$

$$
R(p)=10000 p^{1-2}
$$

$$
R(p)=10000 p^{-1}
$$

$$
R(p)=\\frac{10000}{p}
$$

A schedule that is the same at every price would need exponent $0$. Here the exponent is $-1$, so

$$
\\frac{R(2p)}{R(p)}=2^{-1}=\\frac{1}{2}
$$

At the recorded price and at twice that price:

$$
R(5)=\\frac{10000}{5}=2000
$$

$$
R(10)=\\frac{10000}{10}=1000
$$

Revenue falls as the price rises. It is not constant, so the statement is False.`,
      `**C.** → True

Subscriptions follow $q(p)=A p^{-2}$ with $q(5)=400$. The claim is that the inverse price $p(q)$ is itself a power of quantity, so $A$ must be recovered and the law inverted.

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

The recovered demand is $q=10000 p^{-2}$. Solving for $p$:

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
p=\\frac{100}{q^{\\frac{1}{2}}}
$$

$$
p=100\\,q^{-\\frac{1}{2}}
$$

That is a power function of $q$ with exponent $-\\frac{1}{2}$, the reciprocal of the demand exponent $-2$. Price is a power of quantity, so the statement is True.`,
      `**D.** → False

Subscriptions follow $q(p)=A p^{-2}$. Quadrupling the price is an input factor of $4$, and demand responds through the given exponent $-2$. The coefficient $A$ cancels in the ratio:

$$
\\frac{q(4p)}{q(p)}=\\frac{A(4p)^{-2}}{A p^{-2}}
$$

$$
\\frac{q(4p)}{q(p)}=4^{-2}
$$

$$
4^{-2}=(2^{2})^{-2}=2^{-4}
$$

$$
2^{-4}=\\frac{1}{16}
$$

Demand falls to one sixteenth of its previous value, not to one quarter. A cut to one quarter would need exponent $-1$, because $4^{-1}=\\frac{1}{4}$. The claimed factor is wrong, so the statement is False.`,
      `**E.** → False

Subscriptions follow $q(p)=A p^{-2}$ with $q(5)=400$. The claim is a third level, $q(20)=50$, so $A$ must be recovered first.

$$
q(p)=A p^{-2}
$$

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

The recovered law is $q(p)=10000 p^{-2}$. At twenty euros:

$$
q(20)=10000\\cdot 20^{-2}
$$

$$
20^{-2}=\\frac{1}{400}
$$

$$
q(20)=\\frac{10000}{400}
$$

$$
q(20)=25
$$

Twenty euros is four times the recorded price, so demand also scales by $4^{-2}$:

$$
4^{-2}=\\frac{1}{16}
$$

$$
q(20)=400\\cdot\\frac{1}{16}=25
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

The bill is $C(n)=F+a n^{\\frac{1}{2}}$ for $n>0$ accounts, with both constants unknown. The recorded invoices are $C(100)=500$ and $C(400)=800$. The claim is the intercept $F=200$, so both constants must be recovered.

The general law is

$$
C(n)=F+a n^{\\frac{1}{2}}
$$

Because $100^{\\frac{1}{2}}=10$ and $400^{\\frac{1}{2}}=20$, the two invoices become

$$
F+a\\cdot 100^{\\frac{1}{2}}=500
$$

$$
F+10a=500
$$

$$
F+a\\cdot 400^{\\frac{1}{2}}=800
$$

$$
F+20a=800
$$

Subtracting cancels the setup:

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

The bill is $C(n)=F+a n^{\\frac{1}{2}}$ with $C(100)=500$ and $C(400)=800$. A power function of $n$ cannot carry a nonzero intercept, so $F$ must be recovered.

$$
F+10a=500
$$

$$
F+20a=800
$$

$$
10a=300
$$

$$
a=30
$$

$$
F+300=500
$$

$$
F=200
$$

The recovered law is $C(n)=200+30 n^{\\frac{1}{2}}$. A pure power would have the form $A n^{r}$ with no added constant. Here $F=200\\neq 0$, so this is not a power of $n$, so the statement is False.`,
      `**C.** → True

The bill is $C(n)=F+a n^{\\frac{1}{2}}$ with $C(100)=500$ and $C(400)=800$. Nine hundred accounts is a third level, so both constants must be recovered first.

$$
C(n)=F+a n^{\\frac{1}{2}}
$$

$$
F+10a=500
$$

$$
F+20a=800
$$

$$
10a=300
$$

$$
a=30
$$

$$
F+300=500
$$

$$
F=200
$$

The recovered law is $C(n)=200+30 n^{\\frac{1}{2}}$. At nine hundred accounts:

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

The bill is $C(n)=F+a n^{\\frac{1}{2}}$ with $C(100)=500$ and $C(400)=800$. Cost per account is that bill divided by $n$, so both constants are needed.

$$
F+10a=500
$$

$$
F+20a=800
$$

$$
10a=300
$$

$$
a=30
$$

$$
F=200
$$

Cost per account is then

$$
\\frac{C(n)}{n}=\\frac{200+30 n^{\\frac{1}{2}}}{n}
$$

$$
\\frac{C(n)}{n}=\\frac{200}{n}+30 n^{-\\frac{1}{2}}
$$

Both terms fall as $n$ rises, so cost per account falls, so the statement is True.`,
      `**E.** → False

The bill is $C(n)=F+a n^{\\frac{1}{2}}$ with $C(100)=500$ and $C(400)=800$. Doubling from $100$ to $200$ accounts is a new level of that law, not a scale of a pure power, so both constants must be recovered.

$$
C(n)=F+a n^{\\frac{1}{2}}
$$

$$
F+10a=500
$$

$$
F+20a=800
$$

$$
10a=300
$$

$$
a=30
$$

$$
F=200
$$

The recovered law is $C(n)=200+30 n^{\\frac{1}{2}}$. At two hundred accounts:

$$
C(200)=200+30\\cdot 200^{\\frac{1}{2}}
$$

$$
200^{\\frac{1}{2}}=\\sqrt{100\\cdot 2}=10\\sqrt{2}
$$

$$
C(200)=200+30\\cdot 10\\sqrt{2}
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
C(200)\\approx 200+424=624
$$

A rise of more than $50\\%$ from the hundred-account bill would require

$$
1.5\\cdot 500=750
$$

The relative rise is

$$
\\frac{624-500}{500}=\\frac{124}{500}=0.248
$$

The new bill is about $624$, well below $750$. The rise is about $25\\%$, not more than $50\\%$, so the statement is False.`,
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

The fleet after $t>0$ years is $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles, and intensity follows $e(a)=k a^{-\\frac{1}{2}}$. When the fleet has sixteen thousand vehicles, intensity is $30$ kilograms. Total emissions are $E=a\\,e(a)$. The claim is the composed level $E(16)=480$, so $k$ must be recovered first.

At $a=16$,

$$
k\\cdot 16^{-\\frac{1}{2}}=30
$$

$$
16^{\\frac{1}{2}}=4
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

Intensity is then $e(a)=120 a^{-\\frac{1}{2}}$. Substituting the fleet law $a(t)=4t^{\\frac{1}{2}}$:

$$
E(t)=a(t)\\cdot e\\bigl(a(t)\\bigr)
$$

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}
$$

The inner power is

$$
\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}=4^{-\\frac{1}{2}}\\cdot t^{-\\frac{1}{4}}
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}=\\frac{1}{2}\\,t^{-\\frac{1}{4}}
$$

So

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\cdot\\frac{1}{2}\\,t^{-\\frac{1}{4}}
$$

$$
E(t)=240\\,t^{\\frac{1}{2}-\\frac{1}{4}}
$$

$$
E(t)=240 t^{\\frac{1}{4}}
$$

After sixteen years the fleet itself is

$$
a(16)=4\\cdot 16^{\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
a(16)=4\\cdot 4=16
$$

That is the same fleet size as the intensity reading, so total emissions can also be read as the product $E=a\\,e(a)$:

$$
E(16)=16\\cdot 30=480
$$

The composed law agrees:

$$
E(16)=240\\cdot 16^{\\frac{1}{4}}
$$

$$
16^{\\frac{1}{4}}=2
$$

$$
E(16)=240\\cdot 2=480
$$

The claimed total is $480$, so the statement is True.`,
      `**B.** → False

The fleet is $a(t)=4t^{\\frac{1}{2}}$ and intensity is $e(a)=k a^{-\\frac{1}{2}}$, with $e(16)=30$. Total emissions $E=a\\,e(a)$ inherit a time exponent from both stages, so $k$ must be recovered and the two stages composed.

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

Then

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}
$$

$$
\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}=4^{-\\frac{1}{2}}t^{-\\frac{1}{4}}=\\frac{1}{2}\\,t^{-\\frac{1}{4}}
$$

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\cdot\\frac{1}{2}\\,t^{-\\frac{1}{4}}
$$

$$
E(t)=240 t^{\\frac{1}{4}}
$$

The composed exponent is $\\frac{1}{4}$, not $\\frac{1}{2}$. The $\\frac{1}{2}$ belongs to the fleet stage alone, so the statement is False.`,
      `**C.** → True

The fleet is $a(t)=4t^{\\frac{1}{2}}$ and intensity is $e(a)=k a^{-\\frac{1}{2}}$, with $e(16)=30$. One year is a level of the composed emissions law $E=a\\,e(a)$, so $k$ must be recovered first.

$$
k\\cdot 16^{-\\frac{1}{2}}=30
$$

$$
\\frac{k}{4}=30
$$

$$
k=120
$$

Composing the stages:

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}
$$

$$
\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}=\\frac{1}{2}\\,t^{-\\frac{1}{4}}
$$

$$
E(t)=240 t^{\\frac{1}{4}}
$$

After one year, $1^{\\frac{1}{4}}=1$:

$$
E(1)=240\\cdot 1
$$

$$
E(1)=240
$$

The claimed total is $240$, so the statement is True.`,
      `**D.** → False

The fleet is $a(t)=4t^{\\frac{1}{2}}$ and intensity is $e(a)=k a^{-\\frac{1}{2}}$, with $e(16)=30$. Doubling elapsed time multiplies total emissions $E=a\\,e(a)$ by $2$ to the composed time exponent, so that exponent must be recovered.

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

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}
$$

$$
\\bigl(4t^{\\frac{1}{2}}\\bigr)^{-\\frac{1}{2}}=\\frac{1}{2}\\,t^{-\\frac{1}{4}}
$$

$$
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\cdot\\frac{1}{2}\\,t^{-\\frac{1}{4}}
$$

$$
E(t)=240 t^{\\frac{1}{4}}
$$

The scale factor is then

$$
\\frac{E(2t)}{E(t)}=\\frac{240(2t)^{\\frac{1}{4}}}{240 t^{\\frac{1}{4}}}
$$

$$
\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}
$$

$$
2^{\\frac{1}{4}}\\approx 1.189
$$

The fourth root of two is not two. Emissions rise by about $19\\%$, not by $100\\%$, so the statement is False.`,
      `**E.** → False

Intensity follows $e(a)=k a^{-\\frac{1}{2}}$, with the reading $e(16)=30$. The sign of the exponent decides whether intensity rises or falls as the fleet grows, once $k$ is known to be positive.

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

The recovered intensity is $e(a)=120 a^{-\\frac{1}{2}}$. The exponent $-\\frac{1}{2}$ is negative and the coefficient is positive, so intensity falls as $a$ grows. A rising intensity would need a positive exponent, so the statement is False.`,
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

Flow capacity follows $Q(d)=A d^{\\frac{5}{2}}$ litres per second for diameter $d>0$ centimetres. The bench test is $Q(4)=64$. The claim is the coefficient $A=2$, so that constant must be recovered from the test.

The general law is

$$
Q(d)=A d^{\\frac{5}{2}}
$$

The bench test substitutes as

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

Capacity follows $Q(d)=A d^{\\frac{5}{2}}$ with $Q(4)=64$. A capacity of $250$ litres per second is an inversion of that law, so $A$ must be recovered first.

$$
Q(d)=A d^{\\frac{5}{2}}
$$

$$
A\\cdot 4^{\\frac{5}{2}}=64
$$

$$
4^{\\frac{5}{2}}=32
$$

$$
A\\cdot 32=64
$$

$$
A=2
$$

The recovered law is $Q(d)=2d^{\\frac{5}{2}}$. Setting capacity equal to $250$:

$$
Q(d)=250
$$

$$
2d^{\\frac{5}{2}}=250
$$

$$
d^{\\frac{5}{2}}=\\frac{250}{2}
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
d\\approx 5\\cdot 1.38
$$

$$
d\\approx 6.90
$$

The claim asks whether this diameter is above $10$ cm. It is about $6.90$ cm, which is below $10$ cm, so the statement is False.`,
      `**C.** → True

Capacity follows $Q(d)=A d^{\\frac{5}{2}}$. Doubling the diameter multiplies capacity by $2$ to the given exponent, and the coefficient $A$ cancels:

$$
\\frac{Q(2d)}{Q(d)}=\\frac{A(2d)^{\\frac{5}{2}}}{A d^{\\frac{5}{2}}}
$$

$$
\\frac{Q(2d)}{Q(d)}=2^{\\frac{5}{2}}
$$

$$
2^{\\frac{5}{2}}=2^{2}\\cdot 2^{\\frac{1}{2}}=4\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
4\\sqrt{2}\\approx 5.66
$$

The factor is about $5.66$, which is more than $5$, so the statement is True.`,
      `**D.** → False

Capacity follows $Q(d)=A d^{\\frac{5}{2}}$ with $Q(4)=64$, where $d$ is in centimetres. The claim is that rewriting the same law in millimetres leaves the coefficient unchanged, so $A$ must be recovered and the unit substitution carried out.

$$
Q(d)=A d^{\\frac{5}{2}}
$$

$$
A\\cdot 4^{\\frac{5}{2}}=64
$$

$$
4^{\\frac{5}{2}}=32
$$

$$
A=2
$$

A millimetre is one tenth of a centimetre, so

$$
d=\\frac{d_{\\mathrm{mm}}}{10}
$$

Substitute into the recovered law $Q=2d^{\\frac{5}{2}}$:

$$
Q=2\\left(\\frac{d_{\\mathrm{mm}}}{10}\\right)^{\\frac{5}{2}}
$$

$$
Q=2\\cdot\\frac{d_{\\mathrm{mm}}^{\\frac{5}{2}}}{10^{\\frac{5}{2}}}
$$

$$
Q=2\\cdot 10^{-\\frac{5}{2}}d_{\\mathrm{mm}}^{\\frac{5}{2}}
$$

$$
10^{\\frac{5}{2}}=10^{2}\\cdot 10^{\\frac{1}{2}}
$$

$$
10^{2}=100
$$

$$
10^{\\frac{1}{2}}=\\sqrt{10}\\approx 3.162
$$

$$
10^{\\frac{5}{2}}\\approx 100\\cdot 3.162=316.2
$$

$$
2\\cdot 10^{-\\frac{5}{2}}\\approx\\frac{2}{316.2}\\approx 0.0063
$$

The millimetre-unit law is therefore about $0.0063\\,d_{\\mathrm{mm}}^{\\frac{5}{2}}$, whose coefficient is not $2$. Changing the unit changes the coefficient, so the statement is False.`,
      `**E.** → False

Capacity follows $Q(d)=A d^{\\frac{5}{2}}$ with $Q(4)=64$. Capacity per centimetre of diameter lowers the exponent by one, so $A$ is needed to write the intensity.

$$
A\\cdot 4^{\\frac{5}{2}}=64
$$

$$
4^{\\frac{5}{2}}=32
$$

$$
A=2
$$

Then

$$
\\frac{Q(d)}{d}=\\frac{2d^{\\frac{5}{2}}}{d}
$$

$$
\\frac{Q(d)}{d}=2d^{\\frac{3}{2}}
$$

The remaining exponent $\\frac{3}{2}$ is positive, so the intensity rises with diameter. It is not the same at every size, so the statement is False.`,
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

The service radius follows $r(t)=A t^{\\frac{1}{2}}$ kilometres after $t>0$ hours, with $r(4)=6$. The covered area is the disc $S=\\pi r^{2}$. The claim is the four-hour area $S(4)=36\\pi$, so $A$ must be recovered first.

The radius law is

$$
r(t)=A t^{\\frac{1}{2}}
$$

The four-hour record substitutes as

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

The recovered radius is $r(t)=3t^{\\frac{1}{2}}$, and after four hours the radius is the recorded $6$ kilometres. The disc formula is

$$
S=\\pi r^{2}
$$

$$
S(4)=\\pi\\cdot 6^{2}
$$

$$
6^{2}=36
$$

$$
S(4)=36\\pi
$$

The composed law $S(t)=9\\pi t$ gives the same four-hour area:

$$
S(4)=9\\pi\\cdot 4
$$

$$
S(4)=36\\pi
$$

The claimed area is $36\\pi$ square kilometres, so the statement is True.`,
      `**B.** → True

The radius follows $r(t)=A t^{\\frac{1}{2}}$ with $r(4)=6$, and area is $S=\\pi r^{2}$. Proportionality to elapsed time is a claim about the composed law, so $A$ must be recovered and the square applied.

$$
r(t)=A t^{\\frac{1}{2}}
$$

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

Area composes the square with that radius:

$$
S(t)=\\pi\\bigl(r(t)\\bigr)^{2}
$$

$$
S(t)=\\pi\\bigl(3t^{\\frac{1}{2}}\\bigr)^{2}
$$

$$
S(t)=\\pi\\cdot 9\\cdot\\bigl(t^{\\frac{1}{2}}\\bigr)^{2}
$$

$$
S(t)=9\\pi t
$$

That is a constant times $t$. The four-hour radius is given as $6$, so the disc is

$$
S(4)=\\pi\\cdot 6^{2}=36\\pi
$$

$$
\\frac{S(4)}{4}=\\frac{36\\pi}{4}=9\\pi
$$

Area is proportional to elapsed time, so the statement is True.`,
      `**C.** → True

The radius follows $r(t)=A t^{\\frac{1}{2}}$ with $r(4)=6$, and area is $S=\\pi r^{2}$. Doubling time multiplies area by $2$ to the composed time exponent, so that law must be recovered.

$$
A\\cdot 4^{\\frac{1}{2}}=6
$$

$$
A\\cdot 2=6
$$

$$
A=3
$$

$$
S(t)=\\pi\\bigl(3t^{\\frac{1}{2}}\\bigr)^{2}
$$

$$
S(t)=9\\pi t
$$

The scale factor is then

$$
\\frac{S(2t)}{S(t)}=\\frac{9\\pi(2t)}{9\\pi t}
$$

$$
\\frac{S(2t)}{S(t)}=2
$$

The radius itself only grows by $\\sqrt{2}$:

$$
\\frac{r(2t)}{r(t)}=2^{\\frac{1}{2}}
$$

but the square turns that into a factor of $2$. Doubling time doubles area, so the statement is True.`,
      `**D.** → False

The radius follows $r(t)=A t^{\\frac{1}{2}}$ with $r(4)=6$, and area is $S=\\pi r^{2}$. Nine hours is a level of the composed area, so $A$ must be recovered first.

$$
A\\cdot 4^{\\frac{1}{2}}=6
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
A=3
$$

$$
r(t)=3t^{\\frac{1}{2}}
$$

After nine hours the radius is

$$
r(9)=3\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
r(9)=9
$$

The disc is then

$$
S(9)=\\pi\\cdot 9^{2}=81\\pi
$$

The same figure comes from the composed law $S(t)=9\\pi t$:

$$
S(9)=9\\pi\\cdot 9=81\\pi
$$

The area $100\\pi$ would need

$$
9\\pi t=100\\pi
$$

$$
t=\\frac{100}{9}\\approx 11.1
$$

Nine hours is too soon. The covered area is $81\\pi$, so the statement is False.`,
      `**E.** → True

The radius follows $r(t)=A t^{\\frac{1}{2}}$ with $r(4)=6$, and area is $S=\\pi r^{2}$. The claim is that the inverse $t(S)$ is a power of area, so the composed law must be recovered and inverted.

$$
A\\cdot 4^{\\frac{1}{2}}=6
$$

$$
A\\cdot 2=6
$$

$$
A=3
$$

$$
S(t)=\\pi\\bigl(3t^{\\frac{1}{2}}\\bigr)^{2}
$$

$$
S(t)=9\\pi t
$$

Solving for time:

$$
9\\pi t=S
$$

$$
t=\\frac{S}{9\\pi}
$$

$$
t=\\frac{1}{9\\pi}\\,S^{1}
$$

That is a power function of $S$ with exponent $1$. Time is a power function of area, so the statement is True.`,
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

Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ with a cap of $400$, and a filed invoice shows $C_A(36)=240$. Plan B bills $5$ per ticket. The claim is that the two uncapped schedules meet at $64$ tickets, so $a$ must be recovered first.

Plan A's uncapped law is

$$
C_A(u)=a u^{\\frac{1}{2}}
$$

Because $36^{\\frac{1}{2}}=6$, the invoice is

$$
a\\cdot 36^{\\frac{1}{2}}=240
$$

$$
a\\cdot 6=240
$$

$$
a=40
$$

Uncapped Plan A is then $40 u^{\\frac{1}{2}}$, and Plan B is $C_B(u)=5u$. Setting the two schedules equal:

$$
40 u^{\\frac{1}{2}}=5u
$$

For $u>0$, divide both sides by $5 u^{\\frac{1}{2}}$:

$$
\\frac{40}{5}=u^{\\frac{1}{2}}
$$

$$
8=u^{\\frac{1}{2}}
$$

$$
u=64
$$

Both bills at that volume are

$$
C_A(64)=40\\cdot 8=320
$$

$$
C_B(64)=5\\cdot 64=320
$$

The cap is $400$, and

$$
320<400
$$

so the cap is still slack. They match at $64$ tickets, so the statement is True.`,
      `**B.** → True

Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ with $C_A(36)=240$, and Plan B bills $5u$. Which plan is cheaper below the crossing is a comparison of the two recovered schedules.

$$
a\\cdot 36^{\\frac{1}{2}}=240
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
a=40
$$

Plan B is cheaper while $5u<40 u^{\\frac{1}{2}}$. For $u>0$,

$$
5 u^{\\frac{1}{2}}<40
$$

$$
u^{\\frac{1}{2}}<8
$$

$$
u<64
$$

Below the crossing the linear bill is the smaller one, so Plan B is cheaper, so the statement is True.`,
      `**C.** → False

Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ and never charges more than $400$, with $C_A(36)=240$. One hundred and forty-four tickets is a two-piece evaluation, so $a$ must be recovered and the cap checked.

The uncapped law is

$$
C_A(u)=a u^{\\frac{1}{2}}
$$

$$
a\\cdot 36^{\\frac{1}{2}}=240
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
a\\cdot 6=240
$$

$$
a=40
$$

At $144$ tickets:

$$
144^{\\frac{1}{2}}=12
$$

The uncapped square-root bill is

$$
40\\cdot 12=480
$$

The billed amount is the minimum of that figure and the cap:

$$
C_A(u)=\\min\\{40 u^{\\frac{1}{2}},\\,400\\}
$$

$$
C_A(144)=\\min\\{480,400\\}
$$

Because $480>400$, the cap binds:

$$
C_A(144)=400
$$

The cap first binds where the uncapped bill hits $400$:

$$
40 u^{\\frac{1}{2}}=400
$$

$$
u=100
$$

and $144>100$. Plan A bills $400$, not $480$, so the statement is False.`,
      `**D.** → True

Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ with a cap of $400$, and $C_A(36)=240$. The cap binds from the volume where the uncapped schedule first reaches $400$, so $a$ must be recovered.

$$
C_A(u)=a u^{\\frac{1}{2}}
$$

$$
a\\cdot 6=240
$$

$$
a=40
$$

The recorded invoice sits below the cap, because $240<400$. Set the uncapped bill equal to the cap:

$$
40 u^{\\frac{1}{2}}=400
$$

$$
u^{\\frac{1}{2}}=\\frac{400}{40}
$$

$$
u^{\\frac{1}{2}}=10
$$

$$
u=100
$$

At that volume the uncapped bill is exactly $400$. The uncapped schedule $40 u^{\\frac{1}{2}}$ is strictly increasing: at $144$ tickets it would already read

$$
40\\cdot 12=480>400
$$

so every volume above $100$ tickets is trimmed to $400$. The cap does bind as ticket volume grows, so the statement is True.`,
      `**E.** → False

Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ while the cap is slack, with $C_A(36)=240$. Cost per ticket is that bill divided by $u$, so $a$ is needed.

$$
a\\cdot 6=240
$$

$$
a=40
$$

While the cap is slack,

$$
\\frac{C_A(u)}{u}=40 u^{-\\frac{1}{2}}
$$

The remaining exponent is negative, so unit cost falls as $u$ rises. A constant unit cost would need exponent $1$ on the bill. Plan A's cost per ticket is not the same at every volume, so the statement is False.`,
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

Unit cost follows $c(N)=c_1 N^{-b}$ for $N>0$. Every doubling of cumulative output multiplies unit cost by $0.8$, and the first unit costs $1000$. Three successive doublings take the first unit to $N=8$, so the modelled cost is three factors of $0.8$.

$$
c(1)=1000
$$

After the first doubling, $N=2$:

$$
c(2)=1000\\cdot 0.8=800
$$

After the second doubling, $N=4$:

$$
c(4)=800\\cdot 0.8=640
$$

After the third doubling, $N=8$:

$$
c(8)=640\\cdot 0.8=512
$$

The same figure is the compact product

$$
c(8)=1000\\cdot 0.8^{3}
$$

$$
0.8^{3}=0.512
$$

$$
c(8)=512
$$

The modelled unit cost is $512$, so the statement is True.`,
      `**B.** → False

Unit cost follows $c(N)=c_1 N^{-b}$, and every doubling multiplies unit cost by $0.8$. The exponent is the log-ratio of that doubling rule, not the factor $0.8$ itself.

The doubling identity is

$$
\\frac{c(2N)}{c(N)}=2^{-b}=0.8
$$

Take the natural log of both sides:

$$
-b\\ln 2=\\ln 0.8
$$

$$
b=-\\frac{\\ln 0.8}{\\ln 2}
$$

$$
\\ln 0.8\\approx -0.22314
$$

$$
\\ln 2\\approx 0.69315
$$

$$
b\\approx\\frac{0.22314}{0.69315}\\approx 0.3219
$$

The learning-curve exponent on $N$ is therefore

$$
-b\\approx -0.322
$$

not $-0.8$. An exponent of $-0.8$ would require $2^{-0.8}\\approx 0.574$, a much steeper doubling cut than $0.8$. With the first-unit cost $1000$,

$$
c(N)=1000 N^{-0.3219}
$$

The claimed exponent is wrong, so the statement is False.`,
      `**C.** → False

Unit cost follows $c(N)=c_1 N^{-b}$ with doubling factor $0.8$ and $c(1)=1000$. Eight units are exactly three doublings of the first unit, so the modelled cost is three factors of $0.8$.

$$
8=2^{3}
$$

$$
c(1)=1000
$$

$$
c(2)=1000\\cdot 0.8=800
$$

$$
c(4)=800\\cdot 0.8=640
$$

$$
c(8)=640\\cdot 0.8=512
$$

The compact form agrees:

$$
c(8)=1000\\cdot 0.8^{3}
$$

$$
0.8^{3}=0.512
$$

$$
c(8)=512
$$

The claimed figure is $500$. The doubling sequence is $1000$, $800$, $640$, $512$, and $500$ is not on that list. The modelled unit cost is $512$, not $500$, so the statement is False.`,
      `**D.** → False

Unit cost follows $c(N)=c_1 N^{-b}$, and every doubling multiplies unit cost by $0.8$. Quadrupling cumulative output is two doublings, hence two factors of $0.8$. The coefficient $c_1$ cancels:

$$
\\frac{c(4N)}{c(N)}=\\frac{c_1(4N)^{-b}}{c_1 N^{-b}}
$$

$$
\\frac{c(4N)}{c(N)}=4^{-b}=(2^{2})^{-b}=(2^{-b})^{2}
$$

$$
\\frac{c(4N)}{c(N)}=0.8^{2}
$$

$$
0.8^{2}=0.64
$$

Unit cost falls to $64\\%$ of its previous value, a cut of $36\\%$, not a halving. A halving would need two factors whose product is $0.5$, so the statement is False.`,
      `**E.** → False

Unit cost follows $c(N)=c_1 N^{-b}$ with doubling factor $0.8$ and $c(1)=1000$. Materials alone cost $400$ per unit. After eight units the model has had three doublings:

$$
8=2^{3}
$$

$$
c(8)=1000\\cdot 0.8^{3}
$$

$$
0.8^{3}=0.512
$$

$$
c(8)=512
$$

The materials floor is $400$, and $512>400$. The modelled cost still sits above the floor, so the floor has not yet bound, so the statement is False.`,
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

Sales revenue follows $R(x)=A x^{\\frac{1}{2}}$ with $R(100)=900$, and the platform charges $F(x)=6x$. Net gain is $N(x)=R(x)-F(x)$. The claim is a root of $N$, so $A$ must be recovered and the two schedules set equal.

The revenue law is

$$
R(x)=A x^{\\frac{1}{2}}
$$

Because $100^{\\frac{1}{2}}=10$, the recorded campaign is

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
\\frac{90}{6}=x^{\\frac{1}{2}}
$$

$$
15=x^{\\frac{1}{2}}
$$

$$
x=15^{2}
$$

$$
x=225
$$

At that spend,

$$
R(225)=90\\cdot 15=1350
$$

$$
F(225)=6\\cdot 225=1350
$$

$$
N(225)=1350-1350=0
$$

Net gain is zero at a spend of $225$, so the statement is True.`,
      `**B.** → False

Revenue follows $R(x)=A x^{\\frac{1}{2}}$ with $R(100)=900$, and the fee is $F(x)=6x$. Whether net gain stays positive past the crossing is a sign check on $N=R-F$, so $A$ must be recovered.

$$
A\\cdot 100^{\\frac{1}{2}}=900
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
A=90
$$

The gap is

$$
N(x)=90 x^{\\frac{1}{2}}-6x
$$

Factor out $6 x^{\\frac{1}{2}}$:

$$
N(x)=6 x^{\\frac{1}{2}}\\bigl(15-x^{\\frac{1}{2}}\\bigr)
$$

For $x>0$ the prefactor $6 x^{\\frac{1}{2}}$ is positive, so the sign of $N$ is the sign of $15-x^{\\frac{1}{2}}$. That factor is positive on $(0,225)$ and negative for $x>225$. Past the crossing the linear fee is the steeper schedule, so the net is negative, so the statement is False.`,
      `**C.** → True

Revenue follows $R(x)=A x^{\\frac{1}{2}}$ with $R(100)=900$, and the fee is $F(x)=6x$. A spend of $100$ is the recorded revenue point, so $A$ is recovered to confirm that recorded level, and the fee is then subtracted.

$$
R(x)=A x^{\\frac{1}{2}}
$$

$$
A\\cdot 100^{\\frac{1}{2}}=900
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
A\\cdot 10=900
$$

$$
A=90
$$

The recovered revenue at the recorded spend is the given $900$:

$$
R(100)=90\\cdot 10=900
$$

The fee at the same spend is

$$
F(100)=6\\cdot 100=600
$$

Net gain is the difference:

$$
N(100)=R(100)-F(100)
$$

$$
N(100)=900-600=300
$$

The claimed net is $300$, so the statement is True.`,
      `**D.** → False

Revenue follows $R(x)=A x^{\\frac{1}{2}}$. Doubling the spend multiplies revenue by $2$ to the given exponent, and $A$ cancels:

$$
\\frac{R(2x)}{R(x)}=\\frac{A(2x)^{\\frac{1}{2}}}{A x^{\\frac{1}{2}}}
$$

$$
\\frac{R(2x)}{R(x)}=2^{\\frac{1}{2}}=\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.414
$$

The factor is about $1.414$, not $2$. Doubling spend does not double revenue, so the statement is False.`,
      `**E.** → False

Revenue follows $R(x)=A x^{\\frac{1}{2}}$ with $R(100)=900$. Revenue per euro of spend is that law divided by $x$, so $A$ is needed to write the intensity.

$$
A\\cdot 100^{\\frac{1}{2}}=900
$$

$$
A\\cdot 10=900
$$

$$
A=90
$$

Then

$$
\\frac{R(x)}{x}=90 x^{-\\frac{1}{2}}
$$

The remaining exponent is negative, so the return per euro falls as the spend rises. It does not rise, so the statement is False.`,
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

Labour $L>0$ hours yields material $m(L)=A L^{\\frac{1}{2}}$ tonnes. One hundred labour hours yielded forty tonnes. The claim is the coefficient $A=4$, so that constant must be recovered from the labour record.

The material stage is

$$
m(L)=A L^{\\frac{1}{2}}
$$

The labour record substitutes as

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

Check against the labour record:

$$
m(100)=4\\cdot 10=40
$$

The recovered material stage is $m(L)=4L^{\\frac{1}{2}}$. The claimed law matches, so the statement is True.`,
      `**B.** → True

Labour yields $m(L)=A L^{\\frac{1}{2}}$ with $m(100)=40$, and material is converted by $g(m)=B m^{\\frac{3}{2}}$ with $g(9)=54$. Finished output as a function of labour is the composition of the two stages, so both coefficients must be recovered.

From the labour record:

$$
A\\cdot 100^{\\frac{1}{2}}=40
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
A=4
$$

From the material record:

$$
B\\cdot 9^{\\frac{3}{2}}=54
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=3^{3}=27
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
4^{\\frac{3}{2}}=\\bigl(2^{2}\\bigr)^{\\frac{3}{2}}=2^{3}=8
$$

$$
g=2\\cdot 8\\cdot L^{\\frac{3}{4}}
$$

$$
g=16L^{\\frac{3}{4}}
$$

Finished output is $16L^{\\frac{3}{4}}$, so the statement is True.`,
      `**C.** → False

Labour yields $m(L)=A L^{\\frac{1}{2}}$ with $m(100)=40$, and conversion is $g(m)=B m^{\\frac{3}{2}}$ with $g(9)=54$. Doubling labour multiplies finished output by $2$ to the composed exponent, so both stages must be recovered and composed.

$$
A\\cdot 100^{\\frac{1}{2}}=40
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
A=4
$$

$$
B\\cdot 9^{\\frac{3}{2}}=54
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
B=2
$$

$$
g=2\\bigl(4L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}
$$

$$
\\bigl(4L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}=4^{\\frac{3}{2}}L^{\\frac{3}{4}}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
g=16L^{\\frac{3}{4}}
$$

The scale factor is then

$$
\\frac{g(2L)}{g(L)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

The factor is about $1.68$, not $2$, so the statement is False.`,
      `**D.** → True

Labour yields $m(L)=A L^{\\frac{1}{2}}$ with $m(100)=40$, and conversion is $g(m)=B m^{\\frac{3}{2}}$ with $g(9)=54$. Output per labour hour lowers the composed exponent by one, so the composed law must be recovered first.

$$
A\\cdot 10=40
$$

$$
A=4
$$

$$
B\\cdot 27=54
$$

$$
B=2
$$

$$
g=2\\bigl(4L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}=16L^{\\frac{3}{4}}
$$

Then

$$
\\frac{g}{L}=16 L^{\\frac{3}{4}-1}
$$

$$
\\frac{g}{L}=16 L^{-\\frac{1}{4}}
$$

The remaining exponent is negative, so output per hour falls as labour rises, so the statement is True.`,
      `**E.** → True

Labour yields $m(L)=A L^{\\frac{1}{2}}$ with $m(100)=40$, and conversion is $g(m)=B m^{\\frac{3}{2}}$ with $g(9)=54$. The claim is that the inverse labour of a given finished count is a power of that count, so the composed law must be recovered and inverted.

$$
A\\cdot 10=40
$$

$$
A=4
$$

$$
B\\cdot 27=54
$$

$$
B=2
$$

$$
g=2\\bigl(4L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}
$$

$$
g=16L^{\\frac{3}{4}}
$$

Solving for labour:

$$
\\frac{g}{16}=L^{\\frac{3}{4}}
$$

$$
L=\\left(\\frac{g}{16}\\right)^{\\frac{4}{3}}
$$

Labour is a power of the finished count, so the statement is True.`,
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

Demand follows $q(p)=A p^{-\\frac{3}{2}}$ copies a month, with $q(4)=250$. Revenue is $R=pq$. The claim is the revenue level $R(25)=400$, so $A$ must be recovered and revenue formed.

The demand law is

$$
q(p)=A p^{-\\frac{3}{2}}
$$

The recorded pair substitutes as

$$
A\\cdot 4^{-\\frac{3}{2}}=250
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}=8
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
R(p)=p\\cdot q(p)
$$

$$
R(p)=p\\cdot 2000 p^{-\\frac{3}{2}}
$$

$$
R(p)=2000 p^{1-\\frac{3}{2}}
$$

$$
R(p)=2000 p^{-\\frac{1}{2}}
$$

At a price of $25$, $25^{\\frac{1}{2}}=5$:

$$
R(25)=2000\\cdot 25^{-\\frac{1}{2}}
$$

$$
R(25)=2000\\cdot\\frac{1}{5}
$$

$$
R(25)=400
$$

Monthly revenue is $400$, so the statement is True.`,
      `**B.** → True

Demand follows $q(p)=A p^{-\\frac{3}{2}}$ with $q(4)=250$. Revenue $R=pq$ raises the demand exponent by one, so $A$ must be recovered before the revenue law can be named.

$$
q(p)=A p^{-\\frac{3}{2}}
$$

$$
A\\cdot 4^{-\\frac{3}{2}}=250
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

Revenue multiplies price by quantity:

$$
R(p)=p\\cdot q(p)
$$

$$
R(p)=p\\cdot 2000 p^{-\\frac{3}{2}}
$$

$$
R(p)=2000 p^{1-\\frac{3}{2}}
$$

$$
1-\\frac{3}{2}=-\\frac{1}{2}
$$

$$
R(p)=2000 p^{-\\frac{1}{2}}
$$

That is a power of price with exponent $-\\frac{1}{2}$. At the recorded price the same law reads $R(4)=2000\\cdot 4^{-\\frac{1}{2}}=1000$, which matches $4\\cdot 250$. The claimed exponent is the revenue exponent, so the statement is True.`,
      `**C.** → False

Demand follows $q(p)=A p^{-\\frac{3}{2}}$ with $q(4)=250$. Revenue is $R=pq$, and a fixed charge of $400$ is covered while $R(p)\\ge 400$. Both $A$ and the revenue law are needed to invert that inequality.

$$
q(p)=A p^{-\\frac{3}{2}}
$$

$$
A\\cdot 4^{-\\frac{3}{2}}=250
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
A=2000
$$

$$
R(p)=p\\cdot 2000 p^{-\\frac{3}{2}}
$$

$$
R(p)=2000 p^{-\\frac{1}{2}}
$$

The charge is covered while

$$
2000 p^{-\\frac{1}{2}}\\ge 400
$$

$$
\\frac{2000}{\\sqrt{p}}\\ge 400
$$

$$
\\frac{2000}{400}\\ge\\sqrt{p}
$$

$$
5\\ge\\sqrt{p}
$$

$$
p\\le 25
$$

The threshold is $25$, not $16$. At the claimed cutoff of $16$:

$$
R(16)=2000\\cdot 16^{-\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
R(16)=\\frac{2000}{4}=500
$$

and $500>400$, so the charge is still covered at $p=16$. The figure $16$ is what appears if the demand exponent is inverted instead of the revenue exponent. The charge is covered at prices up to $25$, so the statement is False.`,
      `**D.** → False

Demand follows $q(p)=A p^{-\\frac{3}{2}}$, so revenue $R=pq$ has exponent $-\\frac{1}{2}$. Doubling the price multiplies revenue by $2$ to that revenue exponent, and $A$ cancels once revenue is formed.

$$
R(p)=A p^{1-\\frac{3}{2}}=A p^{-\\frac{1}{2}}
$$

$$
\\frac{R(2p)}{R(p)}=2^{-\\frac{1}{2}}
$$

$$
2^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{2}}
$$

$$
\\frac{1}{\\sqrt{2}}\\approx 0.707
$$

Revenue falls to about $71\\%$ of its previous value, a cut of about $29\\%$, not a halving. A halving would need exponent $-1$, so the statement is False.`,
      `**E.** → True

Demand follows $q(p)=A p^{-\\frac{3}{2}}$ with $q(4)=250$. Revenue $R=pq$ inherits the sign of its exponent from that demand law after $A$ is recovered.

$$
A\\cdot 4^{-\\frac{3}{2}}=250
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
A=2000
$$

$$
R(p)=p\\cdot 2000 p^{-\\frac{3}{2}}
$$

$$
R(p)=2000 p^{-\\frac{1}{2}}
$$

The exponent $-\\frac{1}{2}$ is negative and the coefficient is positive, so revenue falls as the price rises, so the statement is True.`,
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

Packing follows $N(h)=A h^{\\frac{2}{3}}$ items after $h>0$ hours, with the coefficient unlogged. Extending a shift from $8$ to $27$ hours added $90$ items. An extra hour is the derivative of that law, so $A$ must be recovered first.

The recorded gain is the difference of two outputs:

$$
N(27)-N(8)=90
$$

$$
A\\cdot 27^{\\frac{2}{3}}-A\\cdot 8^{\\frac{2}{3}}=90
$$

Both shift lengths are perfect cubes:

$$
8^{\\frac{2}{3}}=(8^{\\frac{1}{3}})^{2}
$$

$$
(8^{\\frac{1}{3}})^{2}=2^{2}
$$

$$
2^{2}=4
$$

$$
27^{\\frac{2}{3}}=(27^{\\frac{1}{3}})^{2}
$$

$$
(27^{\\frac{1}{3}})^{2}=3^{2}
$$

$$
3^{2}=9
$$

$$
A(9-4)=90
$$

$$
5A=90
$$

$$
A=18
$$

The recovered law is $N(h)=18h^{\\frac{2}{3}}$. Differentiating brings the exponent down by one:

$$
N'(h)=18\\cdot\\frac{2}{3}h^{\\frac{2}{3}-1}
$$

$$
N'(h)=12h^{-\\frac{1}{3}}
$$

The remaining exponent is negative, so the slope falls as $h$ grows. After an $8$-hour shift:

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

After a $27$-hour shift:

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

Checking those two shifts against the recovered law:

$$
N(8)=18\\cdot 8^{\\frac{2}{3}}
$$

$$
N(8)=18\\cdot 4
$$

$$
N(8)=72
$$

$$
N(27)=18\\cdot 9
$$

$$
N(27)=162
$$

$$
N(27)-N(8)=162-72
$$

$$
N(27)-N(8)=90
$$

The logged gain is recovered correctly.

An extra hour adds $6$ items after a short shift and only $4$ after a long one, so the statement is True.`,
      `**B.** → True

A $27$-hour count is a level of $N(h)=A h^{\\frac{2}{3}}$, and $A$ is still missing. Extending a shift from $8$ to $27$ hours added $90$ items, which is a difference of two outputs.

$$
A\\cdot 27^{\\frac{2}{3}}-A\\cdot 8^{\\frac{2}{3}}=90
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{2}{3}}=3^{2}
$$

$$
27^{\\frac{2}{3}}=9
$$

$$
A(9-4)=90
$$

$$
5A=90
$$

$$
A=18
$$

The recovered law is $N(h)=18h^{\\frac{2}{3}}$. At twenty-seven hours:

$$
N(27)=18\\cdot 27^{\\frac{2}{3}}
$$

$$
N(27)=18\\cdot 9
$$

$$
N(27)=162
$$

Checking those two shifts against the recovered law:

$$
N(8)=18\\cdot 8^{\\frac{2}{3}}
$$

$$
N(8)=18\\cdot 4
$$

$$
N(8)=72
$$

$$
N(27)=18\\cdot 9
$$

$$
N(27)=162
$$

$$
N(27)-N(8)=162-72
$$

$$
N(27)-N(8)=90
$$

The logged gain is recovered correctly.

The claimed threshold is $150$ items, and $162>150$, so the statement is True.`,
      `**C.** → False

Packing follows $N(h)=A h^{\\frac{2}{3}}$ after $h>0$ hours. Doubling a shift multiplies output by a power of $2$, and the unknown coefficient cancels.

$$
\\frac{N(2h)}{N(h)}=\\frac{A(2h)^{\\frac{2}{3}}}{A h^{\\frac{2}{3}}}
$$

$$
\\frac{N(2h)}{N(h)}=2^{\\frac{2}{3}}
$$

Twice the hours would twice the count only if that factor equalled $2$:

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

$$
1.587\\neq 2
$$

Because the exponent $\\frac{2}{3}$ is smaller than $1$, the factor is strictly less than $2$. Doubling multiplies packed items by about $1.59$, so the statement is False.`,
      `**D.** → False

Whether $250$ items fit in $27$ hours is a level of $N(h)=A h^{\\frac{2}{3}}$. Extending a shift from $8$ to $27$ hours added $90$ items, so $A$ is recovered from that gain.

$$
A\\cdot 27^{\\frac{2}{3}}-A\\cdot 8^{\\frac{2}{3}}=90
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{2}{3}}=3^{2}
$$

$$
27^{\\frac{2}{3}}=9
$$

$$
5A=90
$$

$$
A=18
$$

The recovered law is $N(h)=18h^{\\frac{2}{3}}$. At twenty-seven hours:

$$
N(27)=18\\cdot 9
$$

$$
18\\cdot 9=162
$$

$$
162<250
$$

Inverting at the order size names the hours that would suffice:

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
h=\\frac{125^{\\frac{3}{2}}}{9^{\\frac{3}{2}}}
$$

$$
125^{\\frac{3}{2}}=125\\cdot\\sqrt{125}
$$

$$
125\\cdot\\sqrt{125}=625\\sqrt{5}
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
h=\\frac{625\\sqrt{5}}{27}\\approx 51.8
$$

Checking those two shifts against the recovered law:

$$
N(8)=18\\cdot 8^{\\frac{2}{3}}
$$

$$
N(8)=18\\cdot 4
$$

$$
N(8)=72
$$

$$
N(27)=18\\cdot 9
$$

$$
N(27)=162
$$

$$
N(27)-N(8)=162-72
$$

$$
N(27)-N(8)=90
$$

The logged gain is recovered correctly.

The order needs about $52$ hours, not $27$, so the statement is False.`,
      `**E.** → True

Items packed per hour is the packing law divided by shift length. Packing follows $N(h)=A h^{\\frac{2}{3}}$, and extending a shift from $8$ to $27$ hours added $90$ items.

$$
A\\cdot 27^{\\frac{2}{3}}-A\\cdot 8^{\\frac{2}{3}}=90
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{2}{3}}=3^{2}
$$

$$
27^{\\frac{2}{3}}=9
$$

$$
5A=90
$$

$$
A=18
$$

The recovered law is $N(h)=18h^{\\frac{2}{3}}$. Dividing by $h$ subtracts $1$ from the exponent:

$$
\\frac{N(h)}{h}=18h^{\\frac{2}{3}-1}
$$

$$
\\frac{N(h)}{h}=18h^{-\\frac{1}{3}}
$$

That is $A h^{r}$ with coefficient $18$ and exponent $-\\frac{1}{3}$. The hourly rate is a power function of shift length, so the statement is True.`,
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

Drag follows $F(v)=A v^{r}$ newtons at airspeed $v>0$, with both constants unknown. The two runs are $F(4)=16$ and $F(16)=128$. Absorbed power is $P=F\\cdot v$, so its exponent is the drag exponent plus one once both constants of $F$ have been read.

The ratio of the two forces cancels $A$:

$$
\\frac{F(16)}{F(4)}=\\frac{A\\cdot 16^{r}}{A\\cdot 4^{r}}
$$

$$
\\frac{128}{16}=\\left(\\frac{16}{4}\\right)^{r}
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

The slower run then pins $A$:

$$
A\\cdot 4^{\\frac{3}{2}}=16
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
(2^{2})^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
A\\cdot 8=16
$$

$$
A=2
$$

The recovered drag law is $F(v)=2v^{\\frac{3}{2}}$. Multiplying by speed adds one to the exponent:

$$
P(v)=F(v)\\cdot v
$$

$$
F(v)\\cdot v=2v^{\\frac{3}{2}}\\cdot v
$$

$$
P(v)=2v^{\\frac{5}{2}}
$$

Checking both wind-tunnel runs against the recovered drag:

$$
F(4)=2\\cdot 4^{\\frac{3}{2}}
$$

$$
F(4)=2\\cdot 8
$$

$$
F(4)=16
$$

$$
F(16)=2\\cdot 16^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}
$$

$$
(2^{4})^{\\frac{3}{2}}=2^{6}
$$

$$
2^{6}=64
$$

$$
F(16)=2\\cdot 64
$$

$$
F(16)=128
$$

Both logged forces sit on $F(v)=2v^{\\frac{3}{2}}$.

That is $A v^{r}$ with coefficient $2$ and exponent $\\frac{5}{2}$. Absorbed power is a power function of airspeed, so the statement is True.`,
      `**B.** → False

The $250$ N rating is a force, so the speed behind it comes from inverting $F(v)=A v^{r}$. The runs $F(4)=16$ and $F(16)=128$ recover both constants.

$$
\\frac{F(16)}{F(4)}=4^{r}
$$

$$
4^{r}=8
$$

$$
(2^{2})^{r}=2^{3}
$$

$$
2r=3
$$

$$
r=\\frac{3}{2}
$$

$$
A\\cdot 4^{\\frac{3}{2}}=16
$$

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
A=2
$$

The recovered law is $F(v)=2v^{\\frac{3}{2}}$. Set drag equal to the rating:

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

Checking both wind-tunnel runs against the recovered drag:

$$
F(4)=2\\cdot 4^{\\frac{3}{2}}
$$

$$
F(4)=2\\cdot 8
$$

$$
F(4)=16
$$

$$
F(16)=2\\cdot 16^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}
$$

$$
(2^{4})^{\\frac{3}{2}}=2^{6}
$$

$$
2^{6}=64
$$

$$
F(16)=2\\cdot 64
$$

$$
F(16)=128
$$

Both logged forces sit on $F(v)=2v^{\\frac{3}{2}}$.

The claimed threshold is a speed above $30$ m/s, and $25$ is not above $30$. The rating is reached at $25$ m/s, so the statement is False.`,
      `**C.** → False

A doubling ratio of drag uses the exponent of $F(v)=A v^{r}$ and cancels $A$. The runs $F(4)=16$ and $F(16)=128$ recover that exponent.

$$
\\frac{F(16)}{F(4)}=4^{r}
$$

$$
4^{r}=8
$$

$$
(2^{2})^{r}=2^{3}
$$

$$
2r=3
$$

$$
r=\\frac{3}{2}
$$

Doubling airspeed then multiplies drag by $2$ to that power:

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

The factor is more than a doubling but less than a tripling. The logged runs agree: a fourfold speed rise multiplies drag by $8$, which is $(2^{\\frac{3}{2}})^{2}$ rather than $3^{2}=9$. Doubling airspeed multiplies drag by about $2.83$, so the statement is False.`,
      `**D.** → True

Absorbed power at a named speed is force times speed. Drag follows $F(v)=A v^{r}$, with runs $F(4)=16$ and $F(16)=128$, and $P=F\\cdot v$.

$$
\\frac{F(16)}{F(4)}=4^{r}
$$

$$
4^{r}=8
$$

$$
(2^{2})^{r}=2^{3}
$$

$$
r=\\frac{3}{2}
$$

$$
A\\cdot 4^{\\frac{3}{2}}=16
$$

$$
A=2
$$

The recovered drag is $F(v)=2v^{\\frac{3}{2}}$, so absorbed power is

$$
P(v)=2v^{\\frac{3}{2}}\\cdot v
$$

$$
2v^{\\frac{3}{2}}\\cdot v=2v^{\\frac{5}{2}}
$$

At the faster logged speed:

$$
P(16)=2\\cdot 16^{\\frac{5}{2}}
$$

$$
16=2^{4}
$$

$$
16^{\\frac{5}{2}}=(2^{4})^{\\frac{5}{2}}
$$

$$
(2^{4})^{\\frac{5}{2}}=2^{10}
$$

$$
2^{10}=1024
$$

$$
P(16)=2\\cdot 1024
$$

$$
2\\cdot 1024=2048
$$

That is $2048$ watts, or $2.048$ kilowatts. Routing through the logged drag gives the same figure:

$$
P(16)=128\\cdot 16
$$

$$
128\\cdot 16=2048
$$

Checking both wind-tunnel runs against the recovered drag:

$$
F(4)=2\\cdot 4^{\\frac{3}{2}}
$$

$$
F(4)=2\\cdot 8
$$

$$
F(4)=16
$$

$$
F(16)=2\\cdot 16^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}
$$

$$
(2^{4})^{\\frac{3}{2}}=2^{6}
$$

$$
2^{6}=64
$$

$$
F(16)=2\\cdot 64
$$

$$
F(16)=128
$$

Both logged forces sit on $F(v)=2v^{\\frac{3}{2}}$.

The rig absorbs more than $2$ kW, so the statement is True.`,
      `**E.** → True

Inverting a power law is raising to the reciprocal exponent, which is again a power. Drag follows $F(v)=A v^{r}$, with runs $F(4)=16$ and $F(16)=128$.

$$
\\frac{F(16)}{F(4)}=4^{r}
$$

$$
4^{r}=8
$$

$$
(2^{2})^{r}=2^{3}
$$

$$
2r=3
$$

$$
r=\\frac{3}{2}
$$

$$
A\\cdot 4^{\\frac{3}{2}}=16
$$

$$
A=2
$$

The recovered law is $F=2v^{\\frac{3}{2}}$. Solve for airspeed:

$$
\\frac{F}{2}=v^{\\frac{3}{2}}
$$

$$
v=\\left(\\frac{F}{2}\\right)^{\\frac{2}{3}}
$$

$$
v=2^{-\\frac{2}{3}}F^{\\frac{2}{3}}
$$

That is $A F^{r}$ with coefficient $2^{-\\frac{2}{3}}$ and exponent $\\frac{2}{3}$. The airspeed that produces a given drag is a power function of that drag, so the statement is True.`,
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

Demand follows $q(p)=A p^{-\\frac{1}{2}}$ at price $p>0$, and a price of $16$ sells $300$ units. Revenue is $R=pq$, so its exponent is demand's exponent plus one after that observation has calibrated $A$.

$$
A\\cdot 16^{-\\frac{1}{2}}=300
$$

$$
16=4^{2}
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
\\frac{A}{4}=300
$$

$$
A=1200
$$

The calibrated demand is $q(p)=1200p^{-\\frac{1}{2}}$. Revenue multiplies by price:

$$
R(p)=p\\cdot 1200p^{-\\frac{1}{2}}
$$

$$
R(p)=1200p^{\\frac{1}{2}}
$$

The revenue exponent $\\frac{1}{2}$ is positive, so $R$ rises with $p$. Quantity falls when price rises, but not fast enough to offset the higher price. At the recorded price:

$$
R(16)=1200\\cdot 16^{\\frac{1}{2}}
$$

$$
1200\\cdot 16^{\\frac{1}{2}}=1200\\cdot 4
$$

$$
1200\\cdot 4=4800
$$

At a higher price:

$$
R(25)=1200\\cdot 25^{\\frac{1}{2}}
$$

$$
1200\\cdot 25^{\\frac{1}{2}}=1200\\cdot 5
$$

$$
1200\\cdot 5=6000
$$

$$
6000>4800
$$

Checking the recorded price against the calibrated demand:

$$
q(16)=1200\\cdot 16^{-\\frac{1}{2}}
$$

$$
16=4^{2}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
q(16)=1200\\cdot\\frac{1}{4}
$$

$$
q(16)=300
$$

The observation is recovered correctly.

Revenue rises as the price rises, so the statement is True.`,
      `**B.** → False

A finite rise of $44\\%$ acts through the exact power of the multiplier $1.44$ on $q(p)=A p^{-\\frac{1}{2}}$. The coefficient cancels.

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

From the recorded $300$ units that would be a drop of $50$ units, to $250$, not a $20\\%$ drop of $60$ units. Multiplying $44\\%$ by the elasticity $-\\frac{1}{2}$ would give $22\\%$, and rounding that toward $20\\%$ is no better. Quantity falls by about $16.7\\%$, not by $20\\%$, so the statement is False.`,
      `**C.** → False

A target of $200$ units inverts the calibrated curve $q(p)=A p^{-\\frac{1}{2}}$. A price of $16$ sells $300$ units, which pins $A$.

$$
A\\cdot 16^{-\\frac{1}{2}}=300
$$

$$
16=4^{2}
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
A=1200
$$

The calibrated law is $q(p)=1200p^{-\\frac{1}{2}}$. Set quantity equal to $200$:

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

Checking the recorded price against the calibrated demand:

$$
q(16)=1200\\cdot 16^{-\\frac{1}{2}}
$$

$$
16=4^{2}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
q(16)=1200\\cdot\\frac{1}{4}
$$

$$
q(16)=300
$$

The observation is recovered correctly.

Quantity has to fall by a third from the observed $300$, and squaring the inversion makes the required price move larger than that proportion, though it still lands short of $40$. The target arrives at a price of $36$, so the statement is False.`,
      `**D.** → False

Price-independent revenue is the case of a zero revenue exponent, which arises only when demand's exponent is exactly $-1$. Demand is $q(p)=A p^{-\\frac{1}{2}}$, and a price of $16$ sells $300$ units.

$$
A\\cdot 16^{-\\frac{1}{2}}=300
$$

$$
A=1200
$$

Revenue is price times quantity:

$$
R(p)=p\\cdot 1200p^{-\\frac{1}{2}}
$$

$$
p\\cdot 1200p^{-\\frac{1}{2}}=1200p^{\\frac{1}{2}}
$$

$$
\\frac{1}{2}\\neq 0
$$

Two prices confirm the dependence:

$$
R(16)=1200\\cdot 4
$$

$$
1200\\cdot 4=4800
$$

$$
R(64)=1200\\cdot 8
$$

$$
1200\\cdot 8=9600
$$

Revenue not only depends on price but moves in the same direction as it, doubling with each quadrupling of price, so the statement is False.`,
      `**E.** → True

A named price of $25$ is a level of $q(p)=A p^{-\\frac{1}{2}}$. A price of $16$ sells $300$ units, which pins $A$.

$$
A\\cdot 16^{-\\frac{1}{2}}=300
$$

$$
16=4^{2}
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
A=1200
$$

The calibrated law is $q(p)=1200p^{-\\frac{1}{2}}$. At price $25$:

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

Checking the recorded price against the calibrated demand:

$$
q(16)=1200\\cdot 16^{-\\frac{1}{2}}
$$

$$
16=4^{2}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
q(16)=1200\\cdot\\frac{1}{4}
$$

$$
q(16)=300
$$

The observation is recovered correctly.

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

Doubling output is an inverse-scale question: the feed multiplier is $2$ raised to the reciprocal of the exponent. Kiln output follows $y(x)=A x^{\\frac{4}{3}}$, and a test firing at a feed of $27$ produced $324$ tonnes.

$$
A\\cdot 27^{\\frac{4}{3}}=324
$$

$$
27^{\\frac{4}{3}}=(27^{\\frac{1}{3}})^{4}
$$

$$
(27^{\\frac{1}{3}})^{4}=3^{4}
$$

$$
3^{4}=81
$$

$$
81A=324
$$

$$
A=4
$$

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. Doubling the test-firing output of $324$ means a target of $648$:

$$
\\frac{y(x)}{y(27)}=2
$$

$$
\\left(\\frac{x}{27}\\right)^{\\frac{4}{3}}=2
$$

$$
\\frac{x}{27}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

$$
x=27\\cdot 2^{\\frac{3}{4}}
$$

$$
x\\approx 27\\cdot 1.682
$$

$$
x\\approx 45.4
$$

Checking the test firing against the recovered law:

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{4}{3}}=3^{4}
$$

$$
3^{4}=81
$$

$$
y(27)=4\\cdot 27^{\\frac{4}{3}}
$$

$$
y(27)=4\\cdot 81
$$

$$
y(27)=324
$$

The recorded firing sits on $y(x)=4x^{\\frac{4}{3}}$.

A doubled feed would be $54$. Because the exponent $\\frac{4}{3}$ exceeds $1$, output grows faster than feed, so doubling output takes less than a doubling of feed. The required feed is about $45.4$, not more than $54$, so the statement is False.`,
      `**B.** → True

The licence caps output at $1024$ tonnes, so the feed behind it comes from inverting $y(x)=A x^{\\frac{4}{3}}$. A test firing at a feed of $27$ produced $324$ tonnes.

$$
A\\cdot 27^{\\frac{4}{3}}=324
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{4}{3}}=3^{4}
$$

$$
27^{\\frac{4}{3}}=81
$$

$$
A=4
$$

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. Set output equal to the ceiling:

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

Substitution confirms the ceiling:

$$
y(64)=4\\cdot 64^{\\frac{4}{3}}
$$

$$
64^{\\frac{4}{3}}=(4^{3})^{\\frac{4}{3}}
$$

$$
(4^{3})^{\\frac{4}{3}}=4^{4}
$$

$$
4^{4}=256
$$

$$
y(64)=4\\cdot 256
$$

$$
4\\cdot 256=1024
$$

Checking the test firing against the recovered law:

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{4}{3}}=3^{4}
$$

$$
3^{4}=81
$$

$$
y(27)=4\\cdot 27^{\\frac{4}{3}}
$$

$$
y(27)=4\\cdot 81
$$

$$
y(27)=324
$$

The recorded firing sits on $y(x)=4x^{\\frac{4}{3}}$.

The licensed ceiling is reached at a feed of $64$, so the statement is True.`,
      `**C.** → True

Shipped output is the uncapped firing cut off at the licence. Kiln output follows $y(x)=A x^{\\frac{4}{3}}$, a test firing at feed $27$ produced $324$ tonnes, and the licence forbids shipping more than $1024$ tonnes.

$$
A\\cdot 27^{\\frac{4}{3}}=324
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{4}{3}}=3^{4}
$$

$$
27^{\\frac{4}{3}}=81
$$

$$
A=4
$$

The uncapped law is $y(x)=4x^{\\frac{4}{3}}$. The feed at which the licence binds is

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
256^{\\frac{3}{4}}=64
$$

Shipped output is therefore $\\min(4x^{\\frac{4}{3}},1024)$. For $x\\le 64$ that coincides with the power $4x^{\\frac{4}{3}}$. For $x>64$ shipped output is the constant $1024$, and a constant on an interval of feeds is not a power of $x$ with a single exponent. Past the licence the graph is a horizontal cap rather than $A x^{r}$, so the statement is True.`,
      `**D.** → False

A feed of $8$ is a perfect cube, so $y(x)=A x^{\\frac{4}{3}}$ stays exact. A test firing at a feed of $27$ produced $324$ tonnes, which pins $A$.

$$
A\\cdot 27^{\\frac{4}{3}}=324
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{4}{3}}=3^{4}
$$

$$
27^{\\frac{4}{3}}=81
$$

$$
A=4
$$

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

Scaling from the test firing agrees, since $8$ and $27$ are both cubes:

$$
\\frac{8}{27}=\\left(\\frac{2}{3}\\right)^{3}
$$

$$
y(8)=324\\cdot\\left(\\frac{2}{3}\\right)^{4}
$$

$$
324\\cdot\\left(\\frac{2}{3}\\right)^{4}=324\\cdot\\frac{16}{81}
$$

$$
324\\cdot\\frac{16}{81}=64
$$

Checking the test firing against the recovered law:

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{4}{3}}=3^{4}
$$

$$
3^{4}=81
$$

$$
y(27)=4\\cdot 27^{\\frac{4}{3}}
$$

$$
y(27)=4\\cdot 81
$$

$$
y(27)=324
$$

The recorded firing sits on $y(x)=4x^{\\frac{4}{3}}$.

The claimed $32$ is what reading the exponent as $1$ would give. The kiln produces $64$ tonnes, so the statement is False.`,
      `**E.** → True

Output per cubic metre is the firing law divided by the feed, which subtracts $1$ from the exponent. Kiln output follows $y(x)=A x^{\\frac{4}{3}}$, and a test firing at feed $27$ produced $324$ tonnes.

$$
A\\cdot 27^{\\frac{4}{3}}=324
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{4}{3}}=3^{4}
$$

$$
27^{\\frac{4}{3}}=81
$$

$$
A=4
$$

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. Dividing by $x$:

$$
\\frac{y(x)}{x}=4x^{\\frac{4}{3}-1}
$$

$$
\\frac{y(x)}{x}=4x^{\\frac{1}{3}}
$$

The remaining exponent is positive, so the average product rises with feed. At the recorded cubes:

$$
\\frac{y(8)}{8}=4\\cdot 2
$$

$$
4\\cdot 2=8
$$

$$
\\frac{y(27)}{27}=4\\cdot 3
$$

$$
4\\cdot 3=12
$$

$$
\\frac{y(64)}{64}=4\\cdot 4
$$

$$
4\\cdot 4=16
$$

Fuel efficiency improves with scale, so the statement is True.`,
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

Reporting after calibration is the composition $g(f(x))$. Calibration is $f(x)=A x^{\\frac{2}{3}}$, a raw reading of $8$ produced index $36$, and reporting is $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$.

$$
A\\cdot 8^{\\frac{2}{3}}=36
$$

$$
8^{\\frac{2}{3}}=(8^{\\frac{1}{3}})^{2}
$$

$$
(8^{\\frac{1}{3}})^{2}=2^{2}
$$

$$
2^{2}=4
$$

$$
4A=36
$$

$$
A=9
$$

The recovered calibration is $f(x)=9x^{\\frac{2}{3}}$. Compose reporting after it:

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

Checking the recorded pair against the recovered calibration:

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
f(8)=9\\cdot 8^{\\frac{2}{3}}
$$

$$
f(8)=9\\cdot 4
$$

$$
f(8)=36
$$

The recorded index is recovered correctly.

The two stages cancel. Reporting after calibration returns the original reading, so the statement is True.`,
      `**B.** → True

A composition of two powers is a power whose exponent is the product of the two exponents. Calibration is $f(x)=A x^{\\frac{2}{3}}$, a raw reading of $8$ produced index $36$, and reporting is $g(y)=\\frac{1}{27}y^{\\frac{3}{2}}$.

$$
A\\cdot 8^{\\frac{2}{3}}=36
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
A=9
$$

The recovered maps are $f(x)=9x^{\\frac{2}{3}}$ and $g(y)=\\frac{1}{27}y^{\\frac{3}{2}}$. The product of the exponents is

$$
\\frac{2}{3}\\cdot\\frac{3}{2}=1
$$

The coefficients multiply after the outer exponent hits the inner coefficient:

$$
9^{\\frac{3}{2}}=27
$$

$$
\\frac{1}{27}\\cdot 27=1
$$

So the composition is

$$
g(f(x))=1\\cdot x^{1}
$$

$$
1\\cdot x^{1}=x
$$

Checking the recorded pair against the recovered calibration:

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
f(8)=9\\cdot 8^{\\frac{2}{3}}
$$

$$
f(8)=9\\cdot 4
$$

$$
f(8)=36
$$

The recorded index is recovered correctly.

That is a power function with exponent $1$, so the statement is True.`,
      `**C.** → True

A named raw reading of $125$ is a level of the recovered calibration, then a level of reporting. Calibration is $f(x)=A x^{\\frac{2}{3}}$, a raw reading of $8$ produced index $36$, and reporting is $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$.

$$
A\\cdot 8^{\\frac{2}{3}}=36
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
A=9
$$

The recovered calibration is $f(x)=9x^{\\frac{2}{3}}$. At raw reading $125$:

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

Checking the recorded pair against the recovered calibration:

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
f(8)=9\\cdot 8^{\\frac{2}{3}}
$$

$$
f(8)=9\\cdot 4
$$

$$
f(8)=36
$$

The recorded index is recovered correctly.

The two stages produce index $225$ and then return raw reading $125$, so the statement is True.`,
      `**D.** → False

The other order is $f(g(y))$, the same two powers composed the opposite way. Calibration is $f(x)=A x^{\\frac{2}{3}}$, a raw reading of $8$ produced index $36$, and reporting is $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$.

$$
A\\cdot 8^{\\frac{2}{3}}=36
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
A=9
$$

The recovered calibration is $f(x)=9x^{\\frac{2}{3}}$. Compose it after reporting:

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

Checking the recorded pair against the recovered calibration:

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
f(8)=9\\cdot 8^{\\frac{2}{3}}
$$

$$
f(8)=9\\cdot 4
$$

$$
f(8)=36
$$

The recorded index is recovered correctly.

Each map is the two-sided inverse of the other on $y>0$. Applying reporting first and calibration second returns the original index, so the statement is False.`,
      `**E.** → False

The index at a named raw reading of $64$ is a level of $f(x)=A x^{\\frac{2}{3}}$. A raw reading of $8$ produced index $36$, which pins $A$.

$$
A\\cdot 8^{\\frac{2}{3}}=36
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
A=9
$$

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

Checking the recorded pair against the recovered calibration:

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
f(8)=9\\cdot 8^{\\frac{2}{3}}
$$

$$
f(8)=9\\cdot 4
$$

$$
f(8)=36
$$

The recorded index is recovered correctly.

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

A tie at load $8$ is a level of both recovered laws. Algorithm S obeys $S(x)=a x^{\\frac{1}{2}}$, with $S(4)=16$. Algorithm T is proportional to $x^{\\frac{3}{2}}$, with $T(4)=8$.

For S, the benchmark pins $a$:

$$
a\\cdot 4^{\\frac{1}{2}}=16
$$

$$
4=2^{2}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
2a=16
$$

$$
a=8
$$

So $S(x)=8x^{\\frac{1}{2}}$. For T, write $T(x)=k x^{\\frac{3}{2}}$:

$$
k\\cdot 4^{\\frac{3}{2}}=8
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
(2^{2})^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
8k=8
$$

$$
k=1
$$

So $T(x)=x^{\\frac{3}{2}}$. At load $8$:

$$
S(8)=8\\cdot 8^{\\frac{1}{2}}
$$

$$
8\\cdot 8^{\\frac{1}{2}}=8^{\\frac{3}{2}}
$$

$$
T(8)=8^{\\frac{3}{2}}
$$

Checking the shared benchmark against both recovered laws:

$$
4^{\\frac{1}{2}}=2
$$

$$
S(4)=8\\cdot 4^{\\frac{1}{2}}
$$

$$
S(4)=8\\cdot 2
$$

$$
S(4)=16
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
T(4)=8
$$

Both scores match the logged benchmark.

The two scores agree at load $8$, so the statement is True.`,
      `**B.** → False

The number of ties is the number of positive roots of $S(x)=T(x)$. Algorithm S obeys $S(x)=a x^{\\frac{1}{2}}$ with $S(4)=16$, and T is $T(x)=k x^{\\frac{3}{2}}$ with $T(4)=8$.

$$
a\\cdot 4^{\\frac{1}{2}}=16
$$

$$
a=8
$$

$$
k\\cdot 4^{\\frac{3}{2}}=8
$$

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
k=1
$$

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

Checking the shared benchmark against both recovered laws:

$$
4^{\\frac{1}{2}}=2
$$

$$
S(4)=8\\cdot 4^{\\frac{1}{2}}
$$

$$
S(4)=8\\cdot 2
$$

$$
S(4)=16
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
T(4)=8
$$

Both scores match the logged benchmark.

Dividing by $x^{\\frac{1}{2}}$ is legal and loses no solution, since $x=0$ is outside the domain. On $x>0$ that is a single root. Two different positive loads would require two roots, so the statement is False.`,
      `**C.** → True

Which algorithm leads past the crossing is the sign of $T-S$, read most cleanly from the ratio of the two recovered laws. Algorithm S obeys $S(x)=a x^{\\frac{1}{2}}$ with $S(4)=16$, and T is $T(x)=k x^{\\frac{3}{2}}$ with $T(4)=8$.

$$
a\\cdot 4^{\\frac{1}{2}}=16
$$

$$
a=8
$$

$$
k\\cdot 4^{\\frac{3}{2}}=8
$$

$$
k=1
$$

The recovered laws are $S(x)=8x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$. Their ratio is

$$
\\frac{T(x)}{S(x)}=\\frac{x^{\\frac{3}{2}}}{8x^{\\frac{1}{2}}}
$$

$$
\\frac{T(x)}{S(x)}=\\frac{x}{8}
$$

That ratio exceeds $1$ precisely when $x>8$, and it keeps growing, so $T$ stays ahead on the whole ray $x>8$. A load just above the crossing confirms:

$$
S(9)=8\\cdot 9^{\\frac{1}{2}}
$$

$$
8\\cdot 9^{\\frac{1}{2}}=8\\cdot 3
$$

$$
8\\cdot 3=24
$$

$$
T(9)=9^{\\frac{3}{2}}
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
27>24
$$

Once T is ahead, S cannot catch it, so the statement is True.`,
      `**D.** → True

A named lead at load $16$ is the difference of the two recovered scores. Algorithm S obeys $S(x)=a x^{\\frac{1}{2}}$ with $S(4)=16$, and T is $T(x)=k x^{\\frac{3}{2}}$ with $T(4)=8$.

$$
a\\cdot 4^{\\frac{1}{2}}=16
$$

$$
a=8
$$

$$
k\\cdot 4^{\\frac{3}{2}}=8
$$

$$
k=1
$$

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

Checking the shared benchmark against both recovered laws:

$$
4^{\\frac{1}{2}}=2
$$

$$
S(4)=8\\cdot 4^{\\frac{1}{2}}
$$

$$
S(4)=8\\cdot 2
$$

$$
S(4)=16
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
T(4)=8
$$

Both scores match the logged benchmark.

The ratio route agrees: $T/S=16/8=2$, so T is double S and the gap is $S$ itself. Algorithm T is ahead by $32$, so the statement is True.`,
      `**E.** → False

A constant score ratio is what two power laws produce only when they share an exponent. Algorithm S obeys $S(x)=a x^{\\frac{1}{2}}$ with $S(4)=16$, and T is $T(x)=k x^{\\frac{3}{2}}$ with $T(4)=8$.

$$
a\\cdot 4^{\\frac{1}{2}}=16
$$

$$
a=8
$$

$$
k\\cdot 4^{\\frac{3}{2}}=8
$$

$$
k=1
$$

The recovered laws are $S(x)=8x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$. Their ratio is

$$
\\frac{T(x)}{S(x)}=\\frac{x^{\\frac{3}{2}}}{8x^{\\frac{1}{2}}}
$$

$$
\\frac{x^{\\frac{3}{2}}}{8x^{\\frac{1}{2}}}=\\frac{x}{8}
$$

That quantity is not the same at every load:

$$
\\frac{T(4)}{S(4)}=\\frac{4}{8}
$$

$$
\\frac{4}{8}=\\frac{1}{2}
$$

$$
\\frac{T(8)}{S(8)}=\\frac{8}{8}
$$

$$
\\frac{8}{8}=1
$$

$$
\\frac{T(16)}{S(16)}=\\frac{16}{8}
$$

$$
\\frac{16}{8}=2
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

Whether $C(m)$ rises is the sign of its exponent. Sustained capacity follows $C(m)=A m^{\\frac{4}{5}}$, and a fleet of $32$ machines sustains $80$ requests per second.

$$
A\\cdot 32^{\\frac{4}{5}}=80
$$

$$
32=2^{5}
$$

$$
32^{\\frac{4}{5}}=(2^{5})^{\\frac{4}{5}}
$$

$$
(2^{5})^{\\frac{4}{5}}=2^{4}
$$

$$
2^{4}=16
$$

$$
16A=80
$$

$$
A=5
$$

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. The exponent $\\frac{4}{5}$ is positive, so $C$ is strictly increasing on $m>0$ even though it grows more slowly than the fleet. Two exact fleets confirm the rise:

$$
C(32)=5\\cdot 16
$$

$$
5\\cdot 16=80
$$

$$
C(243)=5\\cdot 243^{\\frac{4}{5}}
$$

$$
243=3^{5}
$$

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
405>80
$$

The contract may refuse to certify values above $500$, but the sustained-capacity law itself keeps rising. Sustained capacity increases with the fleet, so the statement is True.`,
      `**B.** → False

The fleet at which the ceiling binds is the inverse of $C(m)=A m^{\\frac{4}{5}}$, not a proportional scaling from $80$ up to $500$. A fleet of $32$ machines sustains $80$ requests per second.

$$
A\\cdot 32^{\\frac{4}{5}}=80
$$

$$
32=2^{5}
$$

$$
32^{\\frac{4}{5}}=(2^{5})^{\\frac{4}{5}}
$$

$$
32^{\\frac{4}{5}}=2^{4}
$$

$$
32^{\\frac{4}{5}}=16
$$

$$
A=5
$$

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. Set capacity equal to the contract:

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
10^{\\frac{5}{2}}=100\\sqrt{10}\\approx 316.2
$$

At the claimed $250$ machines the law is still below the ceiling:

$$
C(250)=5\\cdot 250^{\\frac{4}{5}}\\approx 414
$$

$$
414<500
$$

Checking the recorded fleet against the recovered law:

$$
32=2^{5}
$$

$$
32^{\\frac{4}{5}}=(2^{5})^{\\frac{4}{5}}
$$

$$
32^{\\frac{4}{5}}=2^{4}
$$

$$
32^{\\frac{4}{5}}=16
$$

$$
C(32)=5\\cdot 16
$$

$$
C(32)=80
$$

The $32$-machine reading sits on $C(m)=5m^{\\frac{4}{5}}$.

Linear scaling $32\\cdot 500/80=200$ is worse still. The ceiling binds near $316$ machines, so the statement is False.`,
      `**C.** → False

An exponent below $1$ slows growth, it does not stop it. Sustained capacity follows $C(m)=A m^{\\frac{4}{5}}$, and a fleet of $32$ machines sustains $80$ requests per second.

$$
A\\cdot 32^{\\frac{4}{5}}=80
$$

$$
32=2^{5}
$$

$$
32^{\\frac{4}{5}}=(2^{5})^{\\frac{4}{5}}
$$

$$
32^{\\frac{4}{5}}=2^{4}
$$

$$
32^{\\frac{4}{5}}=16
$$

$$
A=5
$$

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. The ceiling equation has a positive solution:

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
100^{\\frac{5}{4}}=100\\sqrt{10}\\approx 316
$$

Two exact fleets sit on either side of that crossing:

$$
C(243)=5\\cdot 243^{\\frac{4}{5}}
$$

$$
243=3^{5}
$$

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
C(1024)=5\\cdot 1024^{\\frac{4}{5}}
$$

$$
1024=2^{10}
$$

$$
2^{10}=(2^{2})^{5}
$$

$$
(2^{2})^{5}=4^{5}
$$

$$
1024^{\\frac{4}{5}}=4^{4}
$$

$$
4^{4}=256
$$

$$
C(1024)=5\\cdot 256
$$

$$
5\\cdot 256=1280
$$

Checking the recorded fleet against the recovered law:

$$
32=2^{5}
$$

$$
32^{\\frac{4}{5}}=(2^{5})^{\\frac{4}{5}}
$$

$$
32^{\\frac{4}{5}}=2^{4}
$$

$$
32^{\\frac{4}{5}}=16
$$

$$
C(32)=5\\cdot 16
$$

$$
C(32)=80
$$

The $32$-machine reading sits on $C(m)=5m^{\\frac{4}{5}}$.

$405$ is still under the contract; $1280$ is already over it. The ceiling is crossed at a finite fleet, so the statement is False.`,
      `**D.** → True

A fleet of $243$ is $3^{5}$, so the exponent $\\frac{4}{5}$ resolves exactly once $A$ has been read from the $32$-machine run. Sustained capacity follows $C(m)=A m^{\\frac{4}{5}}$, with $C(32)=80$.

$$
A\\cdot 32^{\\frac{4}{5}}=80
$$

$$
32^{\\frac{4}{5}}=(2^{5})^{\\frac{4}{5}}
$$

$$
(2^{5})^{\\frac{4}{5}}=2^{4}
$$

$$
2^{4}=16
$$

$$
A=5
$$

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. At $243$ machines:

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

Checking the recorded fleet against the recovered law:

$$
32=2^{5}
$$

$$
32^{\\frac{4}{5}}=(2^{5})^{\\frac{4}{5}}
$$

$$
32^{\\frac{4}{5}}=2^{4}
$$

$$
32^{\\frac{4}{5}}=16
$$

$$
C(32)=5\\cdot 16
$$

$$
C(32)=80
$$

The $32$-machine reading sits on $C(m)=5m^{\\frac{4}{5}}$.

The claimed neighbour $486$ would be a coefficient of $6$ rather than $5$. Capacity is $405$ requests per second, so the statement is True.`,
      `**E.** → True

A power law is linear after taking logs of both sides. Sustained capacity follows $C(m)=A m^{\\frac{4}{5}}$, and a fleet of $32$ machines sustains $80$ requests per second.

$$
A\\cdot 32^{\\frac{4}{5}}=80
$$

$$
32=2^{5}
$$

$$
32^{\\frac{4}{5}}=(2^{5})^{\\frac{4}{5}}
$$

$$
32^{\\frac{4}{5}}=2^{4}
$$

$$
32^{\\frac{4}{5}}=16
$$

$$
A=5
$$

The uncapped law is $C=5m^{\\frac{4}{5}}$. Taking the natural log of both sides:

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

Net gain is revenue minus a linear wage bill. Revenue follows $R(L)=A L^{\\frac{1}{2}}$, and extending a season from $100$ to $400$ hours raised recorded revenue by $1200$. Labour is paid $6$ per hour.

The recorded gain is a difference of two outputs:

$$
A\\cdot 400^{\\frac{1}{2}}-A\\cdot 100^{\\frac{1}{2}}=1200
$$

$$
400=20^{2}
$$

$$
400^{\\frac{1}{2}}=20
$$

$$
100=10^{2}
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
A(20-10)=1200
$$

$$
10A=1200
$$

$$
A=120
$$

The recovered revenue is $R(L)=120L^{\\frac{1}{2}}$. Net gain subtracts the wage bill:

$$
\\Pi(L)=120L^{\\frac{1}{2}}-6L
$$

A power function is a single term $A L^{r}$. This is a difference of two powers with exponents $\\frac{1}{2}$ and $1$. Those exponents are not equal, so the two terms cannot be combined into one monomial. Net gain is not a power function of hours hired, so the statement is False.`,
      `**B.** → True

Break-even is the staffing at which recovered revenue equals the wage bill. Revenue follows $R(L)=A L^{\\frac{1}{2}}$, extending a season from $100$ to $400$ hours raised revenue by $1200$, and labour is paid $6$ per hour.

$$
A(400^{\\frac{1}{2}}-100^{\\frac{1}{2}})=1200
$$

$$
A(20-10)=1200
$$

$$
A=120
$$

The recovered revenue is $R(L)=120L^{\\frac{1}{2}}$. Set net gain to zero on $L>0$:

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

Checking both sides at $400$ hours:

$$
R(400)=120\\cdot 20
$$

$$
120\\cdot 20=2400
$$

$$
6\\cdot 400=2400
$$

Checking the recorded revenue gain against the recovered law:

$$
R(100)=120\\cdot 100^{\\frac{1}{2}}
$$

$$
R(100)=120\\cdot 10
$$

$$
R(100)=1200
$$

$$
R(400)=120\\cdot 20
$$

$$
R(400)=2400
$$

$$
R(400)-R(100)=2400-1200
$$

$$
R(400)-R(100)=1200
$$

The logged revenue gain is recovered correctly.

The two sides agree, so the statement is True.`,
      `**C.** → False

The maximiser of net gain is where the derivative is zero, which is not the same equation as $\\Pi(L)=0$. Revenue follows $R(L)=A L^{\\frac{1}{2}}$, extending a season from $100$ to $400$ hours raised revenue by $1200$, and the wage is $6$ per hour.

$$
A(20-10)=1200
$$

$$
A=120
$$

Net gain is $\\Pi(L)=120L^{\\frac{1}{2}}-6L$. Differentiating:

$$
\\Pi'(L)=120\\cdot\\frac{1}{2}L^{-\\frac{1}{2}}-6
$$

$$
\\Pi'(L)=60L^{-\\frac{1}{2}}-6
$$

Set the derivative to zero:

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
120\\cdot 10-6\\cdot 100=1200-600
$$

$$
1200-600=600
$$

At the later break-even:

$$
\\Pi(400)=120\\cdot 20-6\\cdot 400
$$

$$
120\\cdot 20-6\\cdot 400=0
$$

Checking the recorded revenue gain against the recovered law:

$$
R(100)=120\\cdot 100^{\\frac{1}{2}}
$$

$$
R(100)=120\\cdot 10
$$

$$
R(100)=1200
$$

$$
R(400)=120\\cdot 20
$$

$$
R(400)=2400
$$

$$
R(400)-R(100)=2400-1200
$$

$$
R(400)-R(100)=1200
$$

The logged revenue gain is recovered correctly.

Net gain peaks at $100$ hours and only later crosses zero at $400$ hours. The two staffing levels are not the same, so the statement is False.`,
      `**D.** → True

A named staffing of $900$ hours is a level of recovered revenue minus the wage bill there. Revenue follows $R(L)=A L^{\\frac{1}{2}}$, extending a season from $100$ to $400$ hours raised revenue by $1200$, and labour is paid $6$ per hour.

$$
A(400^{\\frac{1}{2}}-100^{\\frac{1}{2}})=1200
$$

$$
A(20-10)=1200
$$

$$
A=120
$$

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

Checking the recorded revenue gain against the recovered law:

$$
R(100)=120\\cdot 100^{\\frac{1}{2}}
$$

$$
R(100)=120\\cdot 10
$$

$$
R(100)=1200
$$

$$
R(400)=120\\cdot 20
$$

$$
R(400)=2400
$$

$$
R(400)-R(100)=2400-1200
$$

$$
R(400)-R(100)=1200
$$

The logged revenue gain is recovered correctly.

Square-root revenue cannot keep pace with a linear wage once hours are large. The net gain is $-1800$, so the statement is True.`,
      `**E.** → True

The wage bill is $6$ times hours hired, for $L>0$ hours of labour. Revenue's unknown coefficient is not needed: the wage is already fully specified.

$$
W(L)=6L
$$

Rewrite the same product as a monomial:

$$
W(L)=6L^{1}
$$

That is $A L^{r}$ with coefficient $A=6$ and exponent $r=1$. A linear law is the power-function case of exponent $1$, just as $L^{2}$ is the case of exponent $2$. The wage bill is a power function of hours hired, so the statement is True.`,
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

Concentrating the order means sending all $60$ units to the plant with the smaller recovered coefficient. Plant 1's cost is $C_1(q)=A q^{2}$ with $C_1(20)=200$. Plant 2's cost is $C_2(q)=k q^{2}$ with $C_2(40)=400$.

$$
A\\cdot 20^{2}=200
$$

$$
20^{2}=400
$$

$$
A=\\frac{200}{400}
$$

$$
\\frac{200}{400}=\\frac{1}{2}
$$

$$
k\\cdot 40^{2}=400
$$

$$
40^{2}=1600
$$

$$
k=\\frac{400}{1600}
$$

$$
\\frac{400}{1600}=\\frac{1}{4}
$$

The recovered laws are $C_1(q)=\\frac{1}{2}q^{2}$ and $C_2(q)=\\frac{1}{4}q^{2}$. Plant 2 is cheaper for any given output. Concentrating in plant 2:

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

Concentrating in plant 1 would cost

$$
C_1(60)=\\frac{1}{2}\\cdot 3600
$$

$$
\\frac{1}{2}\\cdot 3600=1800
$$

Checking both recorded runs against the recovered quadratics:

$$
C_1(20)=\\frac{1}{2}\\cdot 20^{2}
$$

$$
C_1(20)=\\frac{1}{2}\\cdot 400
$$

$$
C_1(20)=200
$$

$$
C_2(40)=\\frac{1}{4}\\cdot 40^{2}
$$

$$
C_2(40)=\\frac{1}{4}\\cdot 1600
$$

$$
C_2(40)=400
$$

Both plant records sit on the recovered laws.

Concentrating in the cheaper plant costs $900$, so the statement is True.`,
      `**B.** → False

With two strictly convex costs, a split can undercut either corner. Plant 1's cost is $C_1(q)=A q^{2}$ with $C_1(20)=200$. Plant 2's cost is $C_2(q)=k q^{2}$ with $C_2(40)=400$.

$$
A\\cdot 20^{2}=200
$$

$$
A=\\frac{1}{2}
$$

$$
k\\cdot 40^{2}=400
$$

$$
k=\\frac{1}{4}
$$

The recovered laws are $C_1(q)=\\frac{1}{2}q^{2}$ and $C_2(q)=\\frac{1}{4}q^{2}$. Concentrating in the cheaper plant costs

$$
C_2(60)=\\frac{1}{4}\\cdot 3600
$$

$$
\\frac{1}{4}\\cdot 3600=900
$$

An even split already undercuts that corner:

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

Equalising marginal costs is cheaper still. The derivatives are $C_1'(q)=q$ and $C_2'(q_2)=\\frac{1}{2}q_2$. Setting $q=\\frac{1}{2}q_2$ with $q+q_2=60$ sends $20$ to plant 1 and $40$ to plant 2:

$$
C_1(20)+C_2(40)=\\frac{1}{2}\\cdot 400+\\frac{1}{4}\\cdot 1600
$$

$$
\\frac{1}{2}\\cdot 400+\\frac{1}{4}\\cdot 1600=200+400
$$

$$
200+400=600
$$

Checking both recorded runs against the recovered quadratics:

$$
C_1(20)=\\frac{1}{2}\\cdot 20^{2}
$$

$$
C_1(20)=\\frac{1}{2}\\cdot 400
$$

$$
C_1(20)=200
$$

$$
C_2(40)=\\frac{1}{4}\\cdot 40^{2}
$$

$$
C_2(40)=\\frac{1}{4}\\cdot 1600
$$

$$
C_2(40)=400
$$

Both plant records sit on the recovered laws.

Sending everything to one plant is not cheapest, so the statement is False.`,
      `**C.** → False

A single power of the order size $Q=60$ would be $B\\cdot 60^{r}$ for constants $B,r$ independent of the split. Plant 1's cost is $C_1(q)=A q^{2}$ with $C_1(20)=200$. Plant 2's cost is $C_2(q)=k q^{2}$ with $C_2(40)=400$.

$$
A=\\frac{200}{20^{2}}
$$

$$
20^{2}=400
$$

$$
A=\\frac{200}{400}
$$

$$
\\frac{200}{400}=\\frac{1}{2}
$$

$$
k=\\frac{400}{40^{2}}
$$

$$
40^{2}=1600
$$

$$
k=\\frac{400}{1600}
$$

$$
\\frac{400}{1600}=\\frac{1}{4}
$$

Total cost is $C_1(q)+C_2(60-q)$:

$$
\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}
$$

That quadratic in the split $q$ takes different values at different splits. At a corner:

$$
C_2(60)=900
$$

At an even split:

$$
C_1(30)+C_2(30)=675
$$

At the $20$-$40$ split:

$$
C_1(20)+C_2(40)=600
$$

A function of $60$ alone cannot depend on $q$. The two plants together are not a single power of the order, so the statement is False.`,
      `**D.** → True

The $20$-$40$ split is priced plant by plant from the recovered quadratics. Plant 1's cost is $C_1(q)=A q^{2}$ with $C_1(20)=200$. Plant 2's cost is $C_2(q)=k q^{2}$ with $C_2(40)=400$.

$$
A\\cdot 20^{2}=200
$$

$$
20^{2}=400
$$

$$
A=\\frac{1}{2}
$$

$$
k\\cdot 40^{2}=400
$$

$$
40^{2}=1600
$$

$$
k=\\frac{1}{4}
$$

The recovered laws are $C_1(q)=\\frac{1}{2}q^{2}$ and $C_2(q)=\\frac{1}{4}q^{2}$. The named split then costs

$$
C_1(20)=\\frac{1}{2}\\cdot 400
$$

$$
\\frac{1}{2}\\cdot 400=200
$$

$$
C_2(40)=\\frac{1}{4}\\cdot 1600
$$

$$
\\frac{1}{4}\\cdot 1600=400
$$

$$
200+400=600
$$

Checking both recorded runs against the recovered quadratics:

$$
C_1(20)=\\frac{1}{2}\\cdot 20^{2}
$$

$$
C_1(20)=\\frac{1}{2}\\cdot 400
$$

$$
C_1(20)=200
$$

$$
C_2(40)=\\frac{1}{4}\\cdot 40^{2}
$$

$$
C_2(40)=\\frac{1}{4}\\cdot 1600
$$

$$
C_2(40)=400
$$

Both plant records sit on the recovered laws.

Those are exactly the two recorded runs, added. The split costs $600$, so the statement is True.`,
      `**E.** → False

Plant 2's cost per unit is its cost law divided by its own output, which lowers the exponent from $2$ to $1$. Plant 2's cost is $C_2(q)=k q^{2}$, and a run of $40$ units there cost $400$.

$$
k\\cdot 40^{2}=400
$$

$$
40^{2}=1600
$$

$$
k=\\frac{1}{4}
$$

The recovered law is $C_2(q)=\\frac{1}{4}q^{2}$. Unit cost is

$$
\\frac{C_2(q)}{q}=\\frac{\\frac{1}{4}q^{2}}{q}
$$

$$
\\frac{\\frac{1}{4}q^{2}}{q}=\\frac{1}{4}q
$$

That still depends on how much plant 2 produces. At three outputs:

$$
\\frac{C_2(20)}{20}=\\frac{1}{4}\\cdot 20
$$

$$
\\frac{1}{4}\\cdot 20=5
$$

$$
\\frac{C_2(40)}{40}=\\frac{1}{4}\\cdot 40
$$

$$
\\frac{1}{4}\\cdot 40=10
$$

$$
\\frac{C_2(60)}{60}=\\frac{1}{4}\\cdot 60
$$

$$
\\frac{1}{4}\\cdot 60=15
$$

A constant unit cost would be a linear total, exponent $1$. Unit cost triples across that range, so the statement is False.`,
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

Two positive points determine a unique power-law pair $(A,r)$ because their ratio cancels $A$ and leaves a strictly increasing equation for $r$. The first two measurements are $(4,24)$ and $(16,192)$.

$$
\\frac{y(16)}{y(4)}=\\frac{A\\cdot 16^{r}}{A\\cdot 4^{r}}
$$

$$
\\frac{192}{24}=\\left(\\frac{16}{4}\\right)^{r}
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

The first point then pins $A$:

$$
A\\cdot 4^{\\frac{3}{2}}=24
$$

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
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

The fitted law is $y=3x^{\\frac{3}{2}}$. The second point sits on the same curve:

$$
3\\cdot 16^{\\frac{3}{2}}=3\\cdot 64
$$

$$
3\\cdot 64=192
$$

Checking both fitted points against $y=3x^{\\frac{3}{2}}$:

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
3\\cdot 4^{\\frac{3}{2}}=3\\cdot 8
$$

$$
3\\cdot 8=24
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=2^{6}
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
3\\cdot 16^{\\frac{3}{2}}=3\\cdot 64
$$

$$
3\\cdot 64=192
$$

The first two measurements sit on the fitted law.

The first two measurements lie on one power law, so the statement is True.`,
      `**B.** → True

With two points on a power law, the coefficient is the response divided by the shape factor once the exponent is known. The first two measurements are $(4,24)$ and $(16,192)$, fitted to $y=A x^{r}$.

$$
\\frac{192}{24}=4^{r}
$$

$$
8=4^{r}
$$

$$
(2^{2})^{r}=2^{3}
$$

$$
2r=3
$$

$$
r=\\frac{3}{2}
$$

$$
A\\cdot 4^{\\frac{3}{2}}=24
$$

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
A=\\frac{24}{8}
$$

$$
\\frac{24}{8}=3
$$

The second point confirms the same coefficient:

$$
16^{\\frac{3}{2}}=64
$$

$$
A=\\frac{192}{64}
$$

$$
\\frac{192}{64}=3
$$

Checking both fitted points against $y=3x^{\\frac{3}{2}}$:

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
3\\cdot 4^{\\frac{3}{2}}=3\\cdot 8
$$

$$
3\\cdot 8=24
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=2^{6}
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
3\\cdot 16^{\\frac{3}{2}}=3\\cdot 64
$$

$$
3\\cdot 64=192
$$

The first two measurements sit on the fitted law.

Both measurements give $A=3$, so the statement is True.`,
      `**C.** → False

The measurement at $x=9$ was held out of the fit, so it is a test of the two-point law rather than an input to it. The first two measurements are $(4,24)$ and $(16,192)$.

$$
\\frac{192}{24}=4^{r}
$$

$$
8=4^{r}
$$

$$
(2^{2})^{r}=2^{3}
$$

$$
r=\\frac{3}{2}
$$

$$
A\\cdot 4^{\\frac{3}{2}}=24
$$

$$
A=3
$$

The fitted law is $y=3x^{\\frac{3}{2}}$. At the held-out input:

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

Checking both fitted points against $y=3x^{\\frac{3}{2}}$:

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
3\\cdot 4^{\\frac{3}{2}}=3\\cdot 8
$$

$$
3\\cdot 8=24
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=2^{6}
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
3\\cdot 16^{\\frac{3}{2}}=3\\cdot 64
$$

$$
3\\cdot 64=192
$$

The first two measurements sit on the fitted law.

The recorded response at $x=9$ is also $81$. The held-out point sits on the curve, so the statement is False.`,
      `**D.** → False

A prediction at $x=25$ uses the law fitted from the first two measurements only, $(4,24)$ and $(16,192)$.

$$
\\frac{192}{24}=4^{r}
$$

$$
8=4^{r}
$$

$$
(2^{2})^{r}=2^{3}
$$

$$
r=\\frac{3}{2}
$$

$$
A\\cdot 4^{\\frac{3}{2}}=24
$$

$$
A=3
$$

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

Checking both fitted points against $y=3x^{\\frac{3}{2}}$:

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
3\\cdot 4^{\\frac{3}{2}}=3\\cdot 8
$$

$$
3\\cdot 8=24
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=2^{6}
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
3\\cdot 16^{\\frac{3}{2}}=3\\cdot 64
$$

$$
3\\cdot 64=192
$$

The first two measurements sit on the fitted law.

The claimed $300$ is $3\\cdot 100$, as though $25^{\\frac{3}{2}}$ were $100$ rather than $125$. The fitted law predicts $375$, so the statement is False.`,
      `**E.** → False

Uniqueness of the exponent is settled by the ratio equation, because $4^{r}$ is strictly increasing in $r$ and can equal $8$ only once. The first two measurements are $(4,24)$ and $(16,192)$.

$$
\\frac{192}{24}=4^{r}
$$

$$
8=4^{r}
$$

Forcing the exponent to $2$ misses that ratio:

$$
4^{2}=16
$$

$$
16\\neq 8
$$

Forcing $r=2$ from the first point then misses the second:

$$
A=\\frac{24}{16}
$$

$$
\\frac{24}{16}=\\frac{3}{2}
$$

$$
\\frac{3}{2}\\cdot 16^{2}=\\frac{3}{2}\\cdot 256
$$

$$
\\frac{3}{2}\\cdot 256=384
$$

$$
384\\neq 192
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

Demand follows $q(p)=A p^{-2}$ units at a price $p>0$ euros, with the coefficient unknown. A catalogue price of four euros clears four hundred units, and the claim is that price as a function of quantity is itself a power.

The catalogue pair pins $A$:

$$
A\\cdot 4^{-2}=400
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
\\frac{A}{16}=400
$$

$$
A=400\\cdot 16
$$

$$
A=6400
$$

The demand law is $q=6400 p^{-2}$. Inverting a power $q=A p^{r}$ with $r\\neq 0$ raises to $\\frac{1}{r}$. Here $r=-2$, so the inverse exponent is $-\\frac{1}{2}$. Solving for price:

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

The same inverse can be written $p=A^{\\frac{1}{2}} q^{-\\frac{1}{2}}$ with $A^{\\frac{1}{2}}=80$. Either form is a power of $q$ with exponent $-\\frac{1}{2}$, so the statement is True.`,
      `**B.** → True

Twenty-five units is a named quantity on the inverse demand curve. Demand is $q(p)=A p^{-2}$ with the catalogue pair $q(4)=400$, so both $A$ and the inverse are needed.

$$
A\\cdot 4^{-2}=400
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
\\frac{A}{16}=400
$$

$$
A=400\\cdot 16
$$

$$
A=6400
$$

Inverting $q=6400 p^{-2}$:

$$
q=\\frac{6400}{p^{2}}
$$

$$
p^{2}=\\frac{6400}{q}
$$

$$
p=\\frac{80}{\\sqrt{q}}
$$

$$
p=80 q^{-\\frac{1}{2}}
$$

At twenty-five units:

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

Revenue through price is quantity times price. Demand is $q(p)=A p^{-2}$ with $q(4)=400$, so the coefficient must be recovered before the product can be simplified.

$$
A\\cdot 4^{-2}=400
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
\\frac{A}{16}=400
$$

$$
A=400\\cdot 16
$$

$$
A=6400
$$

$$
q(p)=6400 p^{-2}
$$

Revenue along this curve is quantity times price:

$$
R(p)=p\\cdot q(p)
$$

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

The remaining exponent is $-1$, so raising the catalogue price cuts revenue rather than raising it, so the statement is False.`,
      `**D.** → True

Revenue at one hundred units is that quantity times the clearing price. Demand is $q(p)=A p^{-2}$ with $q(4)=400$, so $A$ is recovered and the relation is inverted first.

$$
A\\cdot 4^{-2}=400
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
\\frac{A}{16}=400
$$

$$
A=400\\cdot 16
$$

$$
A=6400
$$

$$
q=6400 p^{-2}
$$

$$
p^{2}=\\frac{6400}{q}
$$

$$
p=80 q^{-\\frac{1}{2}}
$$

Revenue through quantity is then

$$
R(q)=q\\cdot p(q)
$$

$$
R(q)=q\\cdot 80 q^{-\\frac{1}{2}}
$$

$$
R(q)=80 q^{1-\\frac{1}{2}}
$$

$$
R(q)=80 q^{\\frac{1}{2}}
$$

At one hundred units:

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

The claim is that revenue must fall when quantity rises, because quantity falls when price rises. Demand is $q(p)=A p^{-2}$ with $q(4)=400$. After $A$ is recovered, revenue can be written in $q$ and the exponent read off.

$$
A\\cdot 4^{-2}=400
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
\\frac{A}{16}=400
$$

$$
A=400\\cdot 16
$$

$$
A=6400
$$

$$
q=6400 p^{-2}
$$

$$
p=80 q^{-\\frac{1}{2}}
$$

$$
R(q)=q\\cdot p(q)
$$

$$
R(q)=q\\cdot 80 q^{-\\frac{1}{2}}
$$

$$
R(q)=80 q^{\\frac{1}{2}}
$$

The exponent $\\frac{1}{2}$ is positive, so a larger quantity brings in more revenue, not less, so the statement is False.`,
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

Average product is output per labour hour. Output follows $Y(L)=A L^{\\frac{1}{2}}$, and extending the shift from nine hours to thirty-six added sixty units, which recovers $A$ before the derived exponent can be read.

$$
A\\bigl(36^{\\frac{1}{2}}-9^{\\frac{1}{2}}\\bigr)=60
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
A(6-3)=60
$$

$$
3A=60
$$

$$
A=20
$$

Dividing the recovered law $Y(L)=20 L^{\\frac{1}{2}}$ by labour lowers the exponent by one:

$$
\\frac{Y}{L}=\\frac{20 L^{\\frac{1}{2}}}{L}
$$

$$
\\frac{Y}{L}=20 L^{\\frac{1}{2}-1}
$$

$$
\\frac{Y}{L}=20 L^{-\\frac{1}{2}}
$$

The derived exponent $-\\frac{1}{2}$ is negative, so average product falls as the shift lengthens, so the statement is True.`,
      `**B.** → True

A thirty-six hour output is a level of the recovered law, not the sixty-unit jump on its own. Output follows $Y(L)=A L^{\\frac{1}{2}}$, and the logged extension from nine hours to thirty-six hours added sixty units.

$$
A\\bigl(36^{\\frac{1}{2}}-9^{\\frac{1}{2}}\\bigr)=60
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
A(6-3)=60
$$

$$
3A=60
$$

$$
A=20
$$

The recovered law is $Y(L)=20 L^{\\frac{1}{2}}$. At thirty-six hours:

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

The nine-hour level of the same law is

$$
Y(9)=20\\cdot 9^{\\frac{1}{2}}
$$

$$
Y(9)=20\\cdot 3
$$

$$
Y(9)=60
$$

and $120-60=60$ reproduces the logged add-on. Output is one hundred and twenty units, so the statement is True.`,
      `**C.** → False

An extra hour is the derivative of output. Output follows $Y(L)=A L^{\\frac{1}{2}}$, and the sixty-unit jump from nine hours to thirty-six recovers $A$ first.

$$
A\\bigl(36^{\\frac{1}{2}}-9^{\\frac{1}{2}}\\bigr)=60
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
A(6-3)=60
$$

$$
3A=60
$$

$$
A=20
$$

$$
Y(L)=20 L^{\\frac{1}{2}}
$$

Differentiating lowers the exponent by one and multiplies by $\\frac{1}{2}$:

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

Because $\\frac{10}{3}>\\frac{5}{3}$, an extra hour adds more after nine hours than after thirty-six, so the statement is False.`,
      `**D.** → True

Doubling the nine-hour output is a scale factor $k$ on labour. Output follows $Y(L)=A L^{\\frac{1}{2}}$, and the sixty-unit jump from nine hours to thirty-six hours recovers $A$.

$$
A\\bigl(36^{\\frac{1}{2}}-9^{\\frac{1}{2}}\\bigr)=60
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
A(6-3)=60
$$

$$
3A=60
$$

$$
A=20
$$

$$
Y(9)=20\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
Y(9)=20\\cdot 3
$$

$$
Y(9)=60
$$

Doubling that output means a target of $120$. The scale factor of a power is the input factor to the exponent:

$$
\\frac{Y(kL)}{Y(L)}=k^{\\frac{1}{2}}
$$

$$
k^{\\frac{1}{2}}=2
$$

$$
k=2^{2}
$$

$$
k=4
$$

Labour must go from nine hours to $4\\cdot 9=36$ hours, which is more than a doubling, so the statement is True.`,
      `**E.** → False

Average product at twenty-five hours is the recovered output divided by labour, not the shape factor $25^{\\frac{1}{2}}=5$ on its own. Output follows $Y(L)=A L^{\\frac{1}{2}}$, and extending the shift from nine hours to thirty-six added sixty units.

$$
A\\bigl(36^{\\frac{1}{2}}-9^{\\frac{1}{2}}\\bigr)=60
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
A(6-3)=60
$$

$$
3A=60
$$

$$
A=20
$$

$$
Y(L)=20 L^{\\frac{1}{2}}
$$

$$
\\frac{Y}{L}=20 L^{\\frac{1}{2}-1}
$$

$$
\\frac{Y}{L}=20 L^{-\\frac{1}{2}}
$$

At twenty-five hours:

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

Break-even is zero profit after both charges. Revenue follows $R(q)=A q^{\\frac{1}{2}}$, and a run of one hundred units brought in six hundred euros, which pins $A$. Profit then subtracts two euros per unit and the four-hundred euro fixed charge.

$$
A\\cdot 100^{\\frac{1}{2}}=600
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
10A=600
$$

$$
A=60
$$

Profit is

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
q=10^{2}=100
$$

$$
q=20^{2}=400
$$

Plug both roots back into profit:

$$
\\Pi(100)=60\\cdot 10-2\\cdot 100-400
$$

$$
\\Pi(100)=600-200-400=0
$$

$$
\\Pi(400)=60\\cdot 20-2\\cdot 400-400
$$

$$
\\Pi(400)=1200-800-400=0
$$

Two distinct positive outputs give zero profit, so the statement is True.`,
      `**B.** → True

Profit at twenty-five units is a named level of the recovered profit law. Revenue is $R(q)=A q^{\\frac{1}{2}}$ with $R(100)=600$, variable cost is two euros per unit, and the fixed charge is four hundred euros.

$$
A\\cdot 100^{\\frac{1}{2}}=600
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
10A=600
$$

$$
A=60
$$

$$
\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400
$$

At twenty-five units:

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

Whether profit stays positive once it has turned positive is a question about the recovered roots. Revenue is $R(q)=A q^{\\frac{1}{2}}$ with $R(100)=600$, and profit subtracts $2q$ and the four-hundred euro charge.

$$
A\\cdot 100^{\\frac{1}{2}}=600
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
10A=600
$$

$$
A=60
$$

$$
\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400
$$

Putting $t=q^{\\frac{1}{2}}$ and setting $\\Pi=0$, with $q=t^{2}$:

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
(t-10)(t-20)=0
$$

$$
q=10^{2}=100
$$

$$
q=20^{2}=400
$$

The square term $-2q$ is negative, so $\\Pi$ is positive only between the roots. Past four hundred units profit is negative again, so the statement is False.`,
      `**D.** → True

Revenue follows $R(q)=A q^{\\frac{1}{2}}$ with $R(100)=600$, so the coefficient is a single level.

$$
A\\cdot 100^{\\frac{1}{2}}=600
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
10A=600
$$

$$
A=60
$$

$$
R(q)=60 q^{\\frac{1}{2}}
$$

That is a power of output, with coefficient $60$ and exponent $\\frac{1}{2}$. Profit subtracts a linear term and a constant:

$$
\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400
$$

A power function of $q$ has the form $A q^{r}$ with no extra terms. The intercept $-400$ and the distinct power $-2q$ both stop $\\Pi$ from being a power of output, so the statement is True.`,
      `**E.** → False

Two hundred and twenty-five units is a named output. Revenue is $R(q)=A q^{\\frac{1}{2}}$ with $R(100)=600$, variable cost is $2q$, and the fixed charge is four hundred euros.

$$
A\\cdot 100^{\\frac{1}{2}}=600
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
10A=600
$$

$$
A=60
$$

$$
\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400
$$

$$
225^{\\frac{1}{2}}=15
$$

because $15^{2}=225$. Then

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

Benefit and cost meet where $B(x)=C(x)$. Benefit follows $B(x)=A x^{\\frac{1}{2}}$ with a trial $B(16)=72$, and cost follows $C(x)=K x^{\\frac{3}{2}}$ with a trial $C(4)=4$. Each coefficient is recovered from its own trial.

The benefit trial:

$$
A\\cdot 16^{\\frac{1}{2}}=72
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
4A=72
$$

$$
A=18
$$

The cost trial:

$$
K\\cdot 4^{\\frac{3}{2}}=4
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
8K=4
$$

$$
K=\\frac{1}{2}
$$

Setting the recovered laws equal:

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

The ratio of the two recovered powers is

$$
\\frac{C(x)}{B(x)}=\\frac{\\frac{1}{2} x^{\\frac{3}{2}}}{18 x^{\\frac{1}{2}}}
$$

$$
\\frac{C(x)}{B(x)}=\\frac{x}{36}
$$

That ratio equals $1$ at exactly one positive scale, so the statement is True.`,
      `**B.** → True

Cost at scale sixteen uses the recovered cost coefficient, not the benefit trial. Cost follows $C(x)=K x^{\\frac{3}{2}}$ with $C(4)=4$.

$$
K\\cdot 4^{\\frac{3}{2}}=4
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
8K=4
$$

$$
K=\\frac{1}{2}
$$

$$
C(x)=\\frac{1}{2} x^{\\frac{3}{2}}
$$

At scale sixteen:

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

The claim compares the two exponents and concludes that cost can never overtake benefit. Benefit is $B(x)=A x^{\\frac{1}{2}}$ with $B(16)=72$, and cost is $C(x)=K x^{\\frac{3}{2}}$ with $C(4)=4$.

$$
A\\cdot 16^{\\frac{1}{2}}=72
$$

$$
4A=72
$$

$$
A=18
$$

$$
K\\cdot 4^{\\frac{3}{2}}=4
$$

$$
8K=4
$$

$$
K=\\frac{1}{2}
$$

$$
\\frac{C(x)}{B(x)}=\\frac{\\frac{1}{2} x^{\\frac{3}{2}}}{18 x^{\\frac{1}{2}}}
$$

$$
\\frac{C(x)}{B(x)}=\\frac{x}{36}
$$

The cost exponent $\\frac{3}{2}$ is larger than $\\frac{1}{2}$, not smaller, and the ratio passes through $1$ at $x=36$. Cost overtakes benefit there, so the statement is False.`,
      `**D.** → False

Net benefit at scale nine is the difference of the two recovered laws. Benefit is $B(x)=A x^{\\frac{1}{2}}$ with $B(16)=72$, and cost is $C(x)=K x^{\\frac{3}{2}}$ with $C(4)=4$.

$$
A\\cdot 16^{\\frac{1}{2}}=72
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
4A=72
$$

$$
A=18
$$

$$
K\\cdot 4^{\\frac{3}{2}}=4
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
8K=4
$$

$$
K=\\frac{1}{2}
$$

At scale nine:

$$
B(9)=18\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
B(9)=18\\cdot 3=54
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
B(9)-C(9)=54-\\frac{27}{2}=\\frac{81}{2}
$$

Net benefit is $40.5$ million, which does not exceed forty-two, so the statement is False.`,
      `**E.** → False

Benefit per million of cost is the ratio of two different powers. Benefit is $B(x)=A x^{\\frac{1}{2}}$ with $B(16)=72$, and cost is $C(x)=K x^{\\frac{3}{2}}$ with $C(4)=4$.

$$
A\\cdot 16^{\\frac{1}{2}}=72
$$

$$
4A=72
$$

$$
A=18
$$

$$
K\\cdot 4^{\\frac{3}{2}}=4
$$

$$
8K=4
$$

$$
K=\\frac{1}{2}
$$

$$
\\frac{B(x)}{C(x)}=\\frac{18 x^{\\frac{1}{2}}}{\\frac{1}{2} x^{\\frac{3}{2}}}
$$

$$
\\frac{B(x)}{C(x)}=\\frac{36}{x}
$$

The ratio falls as scale grows, so it is not the same at every scale, so the statement is False.`,
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

The exponent is recovered from the two furnace runs, because $A$ cancels in the ratio. Throughput follows $T(g)=A g^{r}$ with $T(8)=16$ and $T(27)=36$.

$$
\\frac{T(27)}{T(8)}=\\frac{A\\cdot 27^{r}}{A\\cdot 8^{r}}
$$

$$
\\frac{36}{16}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{9}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$ and $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$,

$$
\\left(\\frac{3}{2}\\right)^{2}=\\left(\\left(\\frac{3}{2}\\right)^{3}\\right)^{r}
$$

$$
\\left(\\frac{3}{2}\\right)^{2}=\\left(\\frac{3}{2}\\right)^{3r}
$$

$$
3r=2
$$

$$
r=\\frac{2}{3}
$$

Two thirds is smaller than one, so throughput grows more slowly than the gas feed, so the statement is True.`,
      `**B.** → True

The licensed ceiling of thirty-two tonnes per hour is an inversion of the recovered law. Throughput follows $T(g)=A g^{r}$ with $T(8)=16$ and $T(27)=36$.

$$
\\frac{36}{16}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{9}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\left(\\frac{3}{2}\\right)^{2}=\\left(\\frac{3}{2}\\right)^{3r}
$$

$$
r=\\frac{2}{3}
$$

The eight-feed run then pins $A$:

$$
A\\cdot 8^{\\frac{2}{3}}=16
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
4A=16
$$

$$
A=4
$$

The twenty-seven feed confirms the same coefficient:

$$
27^{\\frac{2}{3}}=9
$$

$$
\\frac{36}{9}=4
$$

At the ceiling:

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
g=8\\cdot 2\\sqrt{2}=16\\sqrt{2}
$$

$$
16\\sqrt{2}\\approx 22.63
$$

That feed is below twenty-four, so the statement is True.`,
      `**C.** → False

Doubling the gas feed multiplies throughput by $2^{r}$, so the exponent is read from the two logged runs. Throughput follows $T(g)=A g^{r}$ with $T(8)=16$ and $T(27)=36$.

$$
\\frac{T(27)}{T(8)}=\\frac{A\\cdot 27^{r}}{A\\cdot 8^{r}}
$$

$$
\\frac{36}{16}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{9}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\left(\\frac{3}{2}\\right)^{2}=\\left(\\frac{3}{2}\\right)^{3r}
$$

$$
r=\\frac{2}{3}
$$

$$
\\frac{T(2g)}{T(g)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

The factor is not two, so the statement is False.`,
      `**D.** → False

Throughput per cubic metre of gas lowers the recovered exponent by one. Throughput follows $T(g)=A g^{r}$ with $T(8)=16$ and $T(27)=36$.

$$
\\frac{36}{16}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{9}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\left(\\frac{3}{2}\\right)^{2}=\\left(\\frac{3}{2}\\right)^{3r}
$$

$$
r=\\frac{2}{3}
$$

$$
A\\cdot 8^{\\frac{2}{3}}=16
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
A=4
$$

$$
\\frac{T(g)}{g}=4 g^{\\frac{2}{3}-1}
$$

$$
\\frac{T(g)}{g}=4 g^{-\\frac{1}{3}}
$$

The derived exponent is negative, so the intensity falls as the feed rises, so the statement is False.`,
      `**E.** → True

Sixty-four cubic metres per hour is a named feed. Throughput follows $T(g)=A g^{r}$ with $T(8)=16$ and $T(27)=36$.

$$
\\frac{36}{16}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{9}{4}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\left(\\frac{3}{2}\\right)^{2}=\\left(\\frac{3}{2}\\right)^{3r}
$$

$$
r=\\frac{2}{3}
$$

$$
A\\cdot 8^{\\frac{2}{3}}=16
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
4A=16
$$

$$
A=4
$$

$$
T(g)=4 g^{\\frac{2}{3}}
$$

At a feed of sixty-four:

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
T(64)=4\\cdot 16=64
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

Stored volume follows $V(d)=A d^{2}$, so the exponent is already $2$. The survey that raising the water from three metres to five metres added sixty-four cubic metres recovers $A$, but the comparison with depth uses the exponent.

$$
A(5^{2}-3^{2})=64
$$

$$
A(25-9)=64
$$

$$
16A=64
$$

$$
A=4
$$

$$
V(d)=4d^{2}
$$

Compare the given exponent with $1$:

$$
2>1
$$

Volume grows with the square of depth, faster than depth itself, so the statement is True.`,
      `**B.** → True

Six metres is a named depth of the recovered storage law. Storage follows $V(d)=A d^{2}$, and raising the water from three metres to five metres added sixty-four cubic metres.

$$
A(5^{2}-3^{2})=64
$$

$$
5^{2}=25
$$

$$
3^{2}=9
$$

$$
A(25-9)=64
$$

$$
16A=64
$$

$$
A=4
$$

$$
V(d)=4d^{2}
$$

At six metres:

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

A change of input unit replaces depth in metres by a constant multiple. Storage follows $V(d)=A d^{2}$, and the survey from three metres to five metres added sixty-four cubic metres, which recovers $A$ in metre units first.

$$
A(5^{2}-3^{2})=64
$$

$$
A(25-9)=64
$$

$$
16A=64
$$

$$
A=4
$$

$$
V=4d^{2}
$$

A centimetre reading $d_{\\mathrm{cm}}$ counts one hundred centimetres to the metre, so the input substitution is

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

The centimetre-form coefficient is $\\frac{1}{2500}$, not $4$, so the statement is False.`,
      `**D.** → False

A power with a positive exponent is unbounded on $d>0$. Storage follows $V(d)=A d^{2}$, and raising the water from three metres to five metres added sixty-four cubic metres.

$$
A(5^{2}-3^{2})=64
$$

$$
A(25-9)=64
$$

$$
16A=64
$$

$$
A=4
$$

$$
V(d)=4d^{2}
$$

As depth grows, $4d^{2}$ grows without bound. The taper steepens storage rather than capping it, so the statement is False.`,
      `**E.** → False

The added volume from four metres to eight metres is a difference of two recovered levels. Storage follows $V(d)=A d^{2}$, and raising the water from three metres to five metres added sixty-four cubic metres.

$$
A(5^{2}-3^{2})=64
$$

$$
A(25-9)=64
$$

$$
16A=64
$$

$$
A=4
$$

$$
V(d)=4d^{2}
$$

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

Equal speed increments of a square law are differences of squares, which widen as the band moves up. The index is $E(v)=A v^{2}$, and raising the test speed from thirty to fifty kilometres per hour raised the index by eighty points, which recovers $A$.

$$
A(50^{2}-30^{2})=80
$$

$$
50^{2}=2500
$$

$$
30^{2}=900
$$

$$
A(2500-900)=80
$$

$$
1600A=80
$$

$$
A=\\frac{80}{1600}
$$

$$
A=\\frac{1}{20}
$$

The logged twenty-kilometre-per-hour rise is $E(50)-E(30)=80$. The same increment starting at fifty is

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

Forty kilometres per hour is a named speed, not one of the logged test speeds. The index is $E(v)=A v^{2}$, and raising speed from thirty to fifty kilometres per hour raised the index by eighty points.

$$
A(50^{2}-30^{2})=80
$$

$$
50^{2}=2500
$$

$$
30^{2}=900
$$

$$
A(2500-900)=80
$$

$$
1600A=80
$$

$$
A=\\frac{1}{20}
$$

$$
E(v)=\\frac{1}{20} v^{2}
$$

At forty kilometres per hour:

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

Index per kilometre per hour of speed lowers the recovered exponent by one. The index is $E(v)=A v^{2}$, and the eighty-point rise from thirty to fifty kilometres per hour recovers $A$.

$$
A(50^{2}-30^{2})=80
$$

$$
A(2500-900)=80
$$

$$
1600A=80
$$

$$
A=\\frac{1}{20}
$$

$$
\\frac{E(v)}{v}=\\frac{\\frac{1}{20} v^{2}}{v}
$$

$$
\\frac{E(v)}{v}=\\frac{1}{20} v
$$

The intensity rises in proportion to speed. At $v=30$ it equals $\\frac{30}{20}=1.5$, and at $v=50$ it equals $\\frac{50}{20}=2.5$, so it is not the same at every speed, so the statement is False.`,
      `**D.** → True

The speed that produces a given index is the inverse of the recovered square law. The index is $E(v)=A v^{2}$, and raising speed from thirty to fifty kilometres per hour raised the index by eighty points.

$$
A(50^{2}-30^{2})=80
$$

$$
50^{2}=2500
$$

$$
30^{2}=900
$$

$$
A(2500-900)=80
$$

$$
1600A=80
$$

$$
A=\\frac{1}{20}
$$

$$
E=\\frac{1}{20} v^{2}
$$

$$
20E=v^{2}
$$

$$
v^{2}=20E
$$

$$
v=(20E)^{\\frac{1}{2}}
$$

$$
v=\\sqrt{20}\\, E^{\\frac{1}{2}}
$$

The inverse exponent $\\frac{1}{2}$ is smaller than one, so speed grows more slowly than the index, so the statement is True.`,
      `**E.** → False

Eighty kilometres per hour is a named speed of the recovered law, not a linear scaling of the logged eighty-point gap. The index is $E(v)=A v^{2}$, and raising speed from thirty to fifty kilometres per hour raised the index by eighty points.

$$
A(50^{2}-30^{2})=80
$$

$$
50^{2}=2500
$$

$$
30^{2}=900
$$

$$
A(2500-900)=80
$$

$$
1600A=80
$$

$$
A=\\frac{1}{20}
$$

$$
E(v)=\\frac{1}{20} v^{2}
$$

At eighty kilometres per hour:

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

Steel use grows with exponent $2$ and capacity with exponent $3$. A two-metre silo uses twelve square metres of steel and holds eight cubic metres, which recovers both coefficients.

Steel follows $S(h)=a h^{2}$ with $S(2)=12$, and capacity follows $V(h)=k h^{3}$ with $V(2)=8$.

$$
a\\cdot 2^{2}=12
$$

$$
4a=12
$$

$$
a=3
$$

$$
k\\cdot 2^{3}=8
$$

$$
8k=8
$$

$$
k=1
$$

$$
S(h)=3h^{2}
$$

$$
V(h)=h^{3}
$$

Steel carries exponent $2$ and capacity exponent $3$. Because $2<3$, a height factor $k$ multiplies steel by $k^{2}$ and capacity by $k^{3}$, so steel grows more slowly than capacity as height rises, so the statement is True.`,
      `**B.** → True

A four-metre capacity uses the recovered cube law. Capacity follows $V(h)=k h^{3}$, and a two-metre silo holds eight cubic metres.

$$
k\\cdot 2^{3}=8
$$

$$
2^{3}=8
$$

$$
8k=8
$$

$$
k=1
$$

$$
V(h)=h^{3}
$$

At four metres:

$$
V(4)=4^{3}
$$

$$
4^{3}=4\\cdot 4\\cdot 4
$$

$$
4^{3}=64
$$

The recovered cube law $V(h)=h^{3}$ therefore stores $64$ cubic metres at height $4$. The silo holds sixty-four cubic metres, so the statement is True.`,
      `**C.** → True

Steel as a function of capacity is a composition of the two recovered powers. Steel follows $S(h)=a h^{2}$ with $S(2)=12$, and capacity follows $V(h)=k h^{3}$ with $V(2)=8$.

$$
a\\cdot 2^{2}=12
$$

$$
4a=12
$$

$$
a=3
$$

$$
k\\cdot 2^{3}=8
$$

$$
8k=8
$$

$$
k=1
$$

$$
S(h)=3h^{2}
$$

$$
V(h)=h^{3}
$$

Invert the cube first:

$$
V=h^{3}
$$

$$
h=V^{\\frac{1}{3}}
$$

$$
S=3 h^{2}
$$

$$
S=3\\bigl(V^{\\frac{1}{3}}\\bigr)^{2}
$$

$$
S=3 V^{\\frac{2}{3}}
$$

The composition $S=3 V^{\\frac{2}{3}}$ is $A V^{r}$ with $A=3$ and $r=\\frac{2}{3}$. Steel as a function of capacity is itself a power, so the statement is True.`,
      `**D.** → False

Two separate two-metre silos add steel; one four-metre silo scales it. Steel follows $S(h)=a h^{2}$ with $S(2)=12$.

$$
a\\cdot 2^{2}=12
$$

$$
4a=12
$$

$$
a=3
$$

$$
S(h)=3h^{2}
$$

Two two-metre silos:

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
2\\cdot S(2)=2\\cdot 12
$$

$$
2\\cdot S(2)=24
$$

One four-metre silo:

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

Eight metres is a named height of the recovered steel law. Steel follows $S(h)=a h^{2}$ with $S(2)=12$.

$$
a\\cdot 2^{2}=12
$$

$$
4a=12
$$

$$
a=3
$$

$$
S(h)=3h^{2}
$$

At eight metres:

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

Proportionality would require exponent $1$. Inspection time follows $T(n)=A n^{\\frac{1}{2}}$, and moving from four shipments to thirty-six added sixteen hours, which recovers $A$ under the given square-root exponent.

$$
A\\bigl(36^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=16
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
A(6-2)=16
$$

$$
4A=16
$$

$$
A=4
$$

$$
T(n)=4 n^{\\frac{1}{2}}
$$

Proportionality would be $T(n)=A n^{1}$. The recovered exponent is $\\frac{1}{2}$, not $1$, so time is not proportional to the number of shipments, so the statement is False.`,
      `**B.** → True

The forty-hour ceiling is an inversion of the recovered law. Inspection time follows $T(n)=A n^{\\frac{1}{2}}$, and moving from four shipments to thirty-six added sixteen hours.

$$
A\\bigl(36^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=16
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
A(6-2)=16
$$

$$
4A=16
$$

$$
A=4
$$

$$
T(n)=4 n^{\\frac{1}{2}}
$$

At the ceiling $T=40$:

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

Time increases with $n$, so every larger consignment overshoots forty hours. The ceiling covers at most one hundred shipments, so the statement is True.`,
      `**C.** → False

The claim is that a modestly larger consignment still fits because extra shipments add almost nothing. Inspection time follows $T(n)=A n^{\\frac{1}{2}}$, and the sixteen-hour jump from four shipments to thirty-six recovers $A$. The forty-hour plan then has a named ceiling.

$$
A\\bigl(36^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=16
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
A(6-2)=16
$$

$$
4A=16
$$

$$
A=4
$$

$$
T(n)=4 n^{\\frac{1}{2}}
$$

$$
4 n^{\\frac{1}{2}}=40
$$

$$
n^{\\frac{1}{2}}=10
$$

$$
n=100
$$

One extra-large step past that cap is $n=121$:

$$
121^{\\frac{1}{2}}=11
$$

$$
T(121)=4\\cdot 11=44
$$

$$
44>40
$$

The extra twenty-one shipments add four hours, which the forty-hour plan cannot supply, so the statement is False.`,
      `**D.** → True

Quadrupling a consignment is an input factor of $4$ on the inspection law $T(n)=A n^{\\frac{1}{2}}$. The sixteen-hour jump from four shipments to thirty-six recovers $A$, but the scale factor cancels $A$.

$$
A\\bigl(36^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=16
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
A(6-2)=16
$$

$$
A=4
$$

$$
T(n)=4 n^{\\frac{1}{2}}
$$

$$
\\frac{T(4n)}{T(n)}=\\frac{4(4n)^{\\frac{1}{2}}}{4 n^{\\frac{1}{2}}}
$$

$$
\\frac{T(4n)}{T(n)}=4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

Quadrupling the consignment doubles inspection time, so the statement is True.`,
      `**E.** → False

Forty-nine shipments is a named consignment. Inspection time follows $T(n)=A n^{\\frac{1}{2}}$, and moving from four shipments to thirty-six added sixteen hours.

$$
A\\bigl(36^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=16
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
A(6-2)=16
$$

$$
4A=16
$$

$$
A=4
$$

$$
T(n)=4 n^{\\frac{1}{2}}
$$

At forty-nine shipments:

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

Doubling the distance is an input factor of $2$ on the inverse-square law $I(d)=A d^{-2}$. The logged drop from two metres to four metres is not needed, because $A$ cancels in the scale factor.

$$
\\frac{I(2d)}{I(d)}=\\frac{A(2d)^{-2}}{A d^{-2}}
$$

$$
\\frac{I(2d)}{I(d)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The same factor is $\\left(\\frac{1}{2}\\right)^{2}=\\frac{1}{4}$. Doubling the distance cuts illuminance to one quarter, so the statement is True.`,
      `**B.** → True

Five metres is a named distance of the recovered law. Illuminance follows $I(d)=A d^{-2}$, and moving the meter from two metres to four metres cut the reading by one hundred and fifty lux.

$$
A\\bigl(2^{-2}-4^{-2}\\bigr)=150
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
A\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=150
$$

$$
A\\cdot\\frac{3}{16}=150
$$

$$
A=150\\cdot\\frac{16}{3}
$$

$$
A=50\\cdot 16
$$

$$
A=800
$$

$$
I(d)=800 d^{-2}
$$

At five metres:

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

A negative exponent sends illuminance towards zero from above, never through zero. Illuminance follows $I(d)=A d^{-2}$, and the logged drop from two metres to four metres recovers $A$.

$$
A\\bigl(2^{-2}-4^{-2}\\bigr)=150
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
A\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=150
$$

$$
A\\cdot\\frac{3}{16}=150
$$

$$
A=800
$$

$$
I(d)=\\frac{800}{d^{2}}
$$

For every $d>0$ this is positive, and $I(d)\\to 0$ as the hall lengthens. Illuminance stays positive, so the statement is False.`,
      `**D.** → False

Inverting a power with a nonzero exponent produces another power, whether that exponent is negative or not. Illuminance follows $I(d)=A d^{-2}$, and moving the meter from two metres to four metres cut the reading by one hundred and fifty lux.

$$
A\\bigl(2^{-2}-4^{-2}\\bigr)=150
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
A\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=150
$$

$$
A\\cdot\\frac{3}{16}=150
$$

$$
A=800
$$

$$
I=800 d^{-2}
$$

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
d=800^{\\frac{1}{2}} I^{-\\frac{1}{2}}
$$

$$
d=\\sqrt{800}\\, I^{-\\frac{1}{2}}
$$

Distance is a power of illuminance with exponent $-\\frac{1}{2}$, so the statement is False.`,
      `**E.** → False

Three metres is a named distance of the recovered law. Illuminance follows $I(d)=A d^{-2}$, and moving the meter from two metres to four metres cut the reading by one hundred and fifty lux.

$$
A\\bigl(2^{-2}-4^{-2}\\bigr)=150
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
A\\left(\\frac{1}{4}-\\frac{1}{16}\\right)=150
$$

$$
A\\cdot\\frac{3}{16}=150
$$

$$
A=800
$$

$$
I(d)=800 d^{-2}
$$

At three metres:

$$
I(3)=\\frac{800}{3^{2}}
$$

$$
I(3)=\\frac{800}{9}
$$

$$
\\frac{800}{9}\\approx 88.89
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

Audit cost follows $C(n)=A n^{\\frac{3}{4}}$ after $n>0$ accounts, with the coefficient unknown. The logged $1900$ is the rise $C(81)-C(16)$, not a single extra-account increment. The claim compares those increments after eighty-one accounts and after sixteen, so the coefficient and the derivative are both needed.

The two sizes are fourth powers:

$$
16=2^{4}
$$

$$
16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}
$$

$$
16^{\\frac{3}{4}}=2^{3}=8
$$

$$
81=3^{4}
$$

$$
81^{\\frac{3}{4}}=(3^{4})^{\\frac{3}{4}}
$$

$$
81^{\\frac{3}{4}}=3^{3}=27
$$

The recorded rise is then:

$$
C(81)-C(16)=A\\cdot 27-A\\cdot 8
$$

$$
19A=1900
$$

$$
A=\\frac{1900}{19}=100
$$

The recovered schedule is $C(n)=100 n^{\\frac{3}{4}}$. An extra account is the derivative:

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

After eighty-one accounts:

$$
C'(81)=75\\cdot 81^{-\\frac{1}{4}}
$$

$$
81^{-\\frac{1}{4}}=\\frac{1}{3}
$$

$$
C'(81)=25
$$

Since $25<\\frac{75}{2}$, one has $C'(81)<C'(16)$. An extra account adds less after eighty-one accounts than after sixteen, so the statement is False.`,
      `**B.** → True

The sixteen-account bill is a level of $C(n)=A n^{\\frac{3}{4}}$, not the recorded $1900$ rise. That rise is $C(81)-C(16)$, so $A$ must be recovered before $C(16)$ can be read.

Both engagement sizes are fourth powers:

$$
16=2^{4}
$$

$$
16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}
$$

$$
16^{\\frac{3}{4}}=2^{3}=8
$$

$$
81=3^{4}
$$

$$
81^{\\frac{3}{4}}=(3^{4})^{\\frac{3}{4}}
$$

$$
81^{\\frac{3}{4}}=3^{3}=27
$$

The recorded rise is therefore

$$
C(81)-C(16)=A\\cdot 27-A\\cdot 8
$$

$$
19A=1900
$$

$$
A=\\frac{1900}{19}=100
$$

The recovered law is $C(n)=100 n^{\\frac{3}{4}}$. At sixteen accounts:

$$
C(16)=100\\cdot 16^{\\frac{3}{4}}
$$

$$
C(16)=100\\cdot 8
$$

$$
C(16)=800
$$

The companion check $C(81)=100\\cdot 27=2700$ returns the logged gap $1900$. Sixteen accounts cost $800$ under the practice schedule, so the statement is True.`,
      `**C.** → True

The practice quote is $C(n)=A n^{\\frac{3}{4}}$ and the rival quotes $R(n)=50n$. A tie is $C(n)=R(n)$, so $A$ is recovered from the $1900$ rise first.

$$
16=2^{4}
$$

$$
16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}=2^{3}=8
$$

$$
81=3^{4}
$$

$$
81^{\\frac{3}{4}}=(3^{4})^{\\frac{3}{4}}=3^{3}=27
$$

$$
A(27-8)=1900
$$

$$
A=\\frac{1900}{19}=100
$$

The two schedules are then $100 n^{\\frac{3}{4}}$ and $50n$. For $n>0$:

$$
100 n^{\\frac{3}{4}}=50n
$$

Divide by $50 n^{\\frac{3}{4}}$:

$$
2=n^{\\frac{1}{4}}
$$

$$
n=2^{4}=16
$$

The ratio ranks every larger engagement:

$$
\\frac{C(n)}{R(n)}=\\frac{100 n^{\\frac{3}{4}}}{50n}
$$

$$
\\frac{C(n)}{R(n)}=2 n^{-\\frac{1}{4}}
$$

For $n>16$ one has $n^{\\frac{1}{4}}>2$, so the ratio is strictly less than $1$. Direct check at the recorded sizes: $C(16)=800=R(16)$, while $C(81)=2700$ and $R(81)=4050$. The practice is cheaper than the rival at every engagement larger than sixteen accounts, so the statement is True.`,
      `**D.** → True

A bill of $12500$ is inverted through $C(n)=A n^{\\frac{3}{4}}$. The coefficient comes from the $1900$ rise between $16$ and $81$ accounts.

$$
16=2^{4}
$$

$$
16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}
$$

$$
16^{\\frac{3}{4}}=2^{3}=8
$$

$$
81=3^{4}
$$

$$
81^{\\frac{3}{4}}=(3^{4})^{\\frac{3}{4}}
$$

$$
81^{\\frac{3}{4}}=3^{3}=27
$$

$$
C(81)-C(16)=A\\cdot 27-A\\cdot 8
$$

$$
19A=1900
$$

$$
A=\\frac{1900}{19}=100
$$

Now invert the target bill:

$$
100 n^{\\frac{3}{4}}=12500
$$

$$
n^{\\frac{3}{4}}=\\frac{12500}{100}
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

Forward check:

$$
625=5^{4}
$$

$$
625^{\\frac{3}{4}}=(5^{4})^{\\frac{3}{4}}=5^{3}=125
$$

$$
100\\cdot 125=12500
$$

A bill of $12500$ corresponds to an engagement of $625$ accounts, so the statement is True.`,
      `**E.** → False

The practice bills $C(n)=A n^{\\frac{3}{4}}$ for $n>0$ accounts. Doubling the account count is a scale factor on $n$, and $A$ cancels:

$$
\\frac{C(2n)}{C(n)}=\\frac{A(2n)^{\\frac{3}{4}}}{A n^{\\frac{3}{4}}}
$$

$$
\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}=(2^{3})^{\\frac{1}{4}}=8^{\\frac{1}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.6818
$$

That is about a $68\\%$ rise, not a doubling. An exact doubling would need exponent $1$, which would give $\\frac{C(2n)}{C(n)}=2$. Doubling the number of accounts does not double the practice bill, so the statement is False.`,
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

Downwind concentration follows $c(x)=A x^{-\\frac{3}{2}}$ for $x>0$ metres. Inverse-linear decay would carry exponent $-1$. The $43.75$ gap recovers $A$ and leaves the given exponent to compare with $-1$.

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}=2^{3}=8
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
16=2^{4}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}=2^{6}=64
$$

$$
16^{-\\frac{3}{2}}=\\frac{1}{64}
$$

$$
c(4)-c(16)=A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=\\frac{7A}{64}
$$

$$
\\frac{7A}{64}=43.75
$$

$$
A=400
$$

The recovered law is $c(x)=400 x^{-\\frac{3}{2}}$. The exponent $-\\frac{3}{2}$ is strictly less than $-1$. Concentration falls faster than inverse-linear decay, so the statement is True.`,
      `**B.** → True

A reading at $100$ metres is a level of $c(x)=A x^{-\\frac{3}{2}}$, so the coefficient must be recovered from the two monitors. The nearer monitor reads $43.75$ more than the farther one.

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}=2^{3}=8
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
16=2^{4}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}=2^{6}=64
$$

$$
16^{-\\frac{3}{2}}=\\frac{1}{64}
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=43.75
$$

$$
\\frac{7A}{64}=43.75
$$

$$
7A=43.75\\cdot 64
$$

$$
43.75=\\frac{175}{4}
$$

$$
7A=\\frac{175}{4}\\cdot 64=175\\cdot 16=2800
$$

$$
A=400
$$

At one hundred metres:

$$
100^{\\frac{3}{2}}=(\\sqrt{100})^{3}=10^{3}=1000
$$

$$
c(100)=\\frac{400}{1000}=0.4
$$

Concentration at $100$ metres is $0.4$ microgram per cubic metre, so the statement is True.`,
      `**C.** → True

Halving distance is a scale factor on $x$ in $c(x)=A x^{-\\frac{3}{2}}$. The coefficient cancels:

$$
\\frac{c\\bigl(\\frac{x}{2}\\bigr)}{c(x)}=\\left(\\frac{1}{2}\\right)^{-\\frac{3}{2}}
$$

$$
\\left(\\frac{1}{2}\\right)^{-\\frac{3}{2}}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.4142
$$

$$
2\\sqrt{2}\\approx 2.828
$$

That factor is larger than $2$. Halving the distance more than doubles the concentration, so the statement is True.`,
      `**D.** → True

The four-metre reading is $c(4)$, not the recorded gap $43.75$. That gap is $c(4)-c(16)$, so $A$ must be recovered first.

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}=2^{3}=8
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
16=2^{4}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}=2^{6}=64
$$

$$
16^{-\\frac{3}{2}}=\\frac{1}{64}
$$

$$
c(4)-c(16)=A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=\\frac{7A}{64}
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

The nearer monitor is then:

$$
c(4)=400\\cdot\\frac{1}{8}=50
$$

The farther check:

$$
c(16)=400\\cdot\\frac{1}{64}=6.25
$$

$$
c(4)-c(16)=50-6.25=43.75
$$

The monitor at $4$ metres reads $50$ micrograms per cubic metre, so the statement is True.`,
      `**E.** → False

Doubling distance scales concentration by $2$ to the power of the given exponent, and $A$ cancels:

$$
\\frac{c(2x)}{c(x)}=2^{-\\frac{3}{2}}
$$

$$
2^{-\\frac{3}{2}}=\\frac{1}{2^{\\frac{3}{2}}}=\\frac{1}{2\\sqrt{2}}
$$

$$
\\frac{1}{2\\sqrt{2}}\\approx 0.3536
$$

About $35\\%$ of the original reading survives, so the cut is $1-0.3536\\approx 0.646$, about $65\\%$, not $50\\%$. A $50\\%$ cut would need exponent $-1$, which would give $\\frac{c(2x)}{c(x)}=\\frac{1}{2}$. Doubling the distance does not cut concentration by exactly $50\\%$, so the statement is False.`,
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

Losses are a two-stage chain: surge $s(w)=0.5 w^{0.5}$ metres, then $L(s)=32 s^{3}$. The claim is about the composed exponent, so the stages must be substituted.

$$
L(w)=32\\bigl(0.5 w^{0.5}\\bigr)^{3}
$$

$$
L(w)=32\\cdot 0.5^{3}\\cdot w^{0.5\\cdot 3}
$$

$$
0.5=\\frac{1}{2}
$$

$$
\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}
$$

$$
32\\cdot\\frac{1}{8}=4
$$

$$
0.5\\cdot 3=\\frac{3}{2}
$$

$$
L(w)=4 w^{\\frac{3}{2}}
$$

The composed exponent $\\frac{3}{2}$ exceeds $1$, so

$$
\\frac{L(2w)}{L(w)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}>2
$$

Losses accelerate as the wind strengthens, so the statement is True.`,
      `**B.** → False

Surge is the inner stage $s(w)=0.5 w^{0.5}$, not the composed loss index. At wind speed $64$:

$$
s(64)=0.5\\cdot 64^{0.5}
$$

$$
64=8^{2}
$$

$$
64^{0.5}=8
$$

$$
s(64)=0.5\\cdot 8=4
$$

The figure $8$ is $\\sqrt{64}$ before the factor $0.5$ is applied. Surge height is $4$ metres, not $8$, so the statement is False.`,
      `**C.** → True

An extra unit of wind is the derivative of the composed loss. Substitute the surge law into $L(s)=32 s^{3}$ first.

$$
L(w)=32\\bigl(0.5 w^{0.5}\\bigr)^{3}
$$

$$
L(w)=32\\cdot 0.5^{3}\\cdot w^{1.5}
$$

$$
0.5^{3}=0.125=\\frac{1}{8}
$$

$$
32\\cdot\\frac{1}{8}=4
$$

$$
L(w)=4 w^{\\frac{3}{2}}
$$

The extra-wind increment is then:

$$
L'(w)=4\\cdot\\frac{3}{2} w^{\\frac{1}{2}}
$$

$$
L'(w)=6 w^{\\frac{1}{2}}
$$

Because the remaining exponent $\\frac{1}{2}$ is positive, $L'(w)$ rises with $w$. At a low wind $w=1$:

$$
L'(1)=6\\cdot 1^{\\frac{1}{2}}=6
$$

At a high wind $w=16$:

$$
16^{\\frac{1}{2}}=4
$$

$$
L'(16)=6\\cdot 4=24
$$

Since $24>6$, an extra unit of wind adds more to the loss index at high wind than at low wind, so the statement is True.`,
      `**D.** → True

A loss of $1000$ is inverted through the composed law. Substitute the surge stage first.

$$
s(w)=0.5 w^{0.5}
$$

$$
L(s)=32 s^{3}
$$

$$
L(w)=32\\bigl(0.5 w^{0.5}\\bigr)^{3}
$$

$$
0.5=\\frac{1}{2}
$$

$$
\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}
$$

$$
32\\cdot\\frac{1}{8}=4
$$

$$
0.5\\cdot 3=\\frac{3}{2}
$$

$$
L(w)=4 w^{\\frac{3}{2}}
$$

$$
4 w^{\\frac{3}{2}}=1000
$$

$$
w^{\\frac{3}{2}}=250
$$

$$
w=250^{\\frac{2}{3}}
$$

Because $6.3^{3}=250.047$,

$$
250^{\\frac{1}{3}}\\approx 6.30
$$

$$
w\\approx 6.30^{2}=39.69
$$

That is about $39.7$, so the statement is True.`,
      `**E.** → False

Proportionality to wind speed would require composed exponent $1$. Substituting the surge law gives:

$$
L(w)=32\\bigl(0.5 w^{0.5}\\bigr)^{3}
$$

$$
L(w)=32\\cdot 0.5^{3}\\cdot w^{0.5\\cdot 3}
$$

$$
0.5^{3}=\\frac{1}{8}
$$

$$
32\\cdot\\frac{1}{8}=4
$$

$$
0.5\\cdot 3=\\frac{3}{2}
$$

$$
L(w)=4 w^{\\frac{3}{2}}
$$

The exponent $\\frac{3}{2}$ is not $1$. Doubling the wind then multiplies loss by

$$
\\frac{L(2w)}{L(w)}=2^{\\frac{3}{2}}=2\\sqrt{2}
$$

rather than by $2$. The composed loss index is not proportional to wind speed, so the statement is False.`,
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

Price impact follows $I(v)=A v^{\\frac{1}{2}}$ basis points for order size $v>0$. The extra $6$ basis points is $I(0.09)-I(0.04)$, which recovers $A$ and leaves the given exponent to compare with $1$.

$$
\\sqrt{0.09}=\\sqrt{\\frac{9}{100}}=\\frac{3}{10}=0.3
$$

$$
\\sqrt{0.04}=\\sqrt{\\frac{4}{100}}=\\frac{2}{10}=0.2
$$

$$
A(0.3-0.2)=6
$$

$$
0.1A=6
$$

$$
A=\\frac{6}{0.1}=60
$$

The recovered law is $I(v)=60 v^{\\frac{1}{2}}$. The exponent $\\frac{1}{2}$ is less than $1$, so

$$
\\frac{I(2v)}{I(v)}=2^{\\frac{1}{2}}=\\sqrt{2}<2
$$

Impact grows more slowly than order size, so the statement is True.`,
      `**B.** → True

Impact at $0.16$ ADV is a level of $I(v)=A v^{\\frac{1}{2}}$, so the coefficient must be recovered from the $6$ basis-point increment.

$$
0.09=\\frac{9}{100}
$$

$$
\\sqrt{0.09}=\\frac{3}{10}=0.3
$$

$$
0.04=\\frac{4}{100}
$$

$$
\\sqrt{0.04}=\\frac{2}{10}=0.2
$$

$$
I(0.09)-I(0.04)=A(0.3-0.2)
$$

$$
0.1A=6
$$

$$
A=\\frac{6}{0.1}=60
$$

At $0.16$ ADV:

$$
0.16=\\frac{16}{100}=\\frac{4}{25}
$$

$$
\\sqrt{0.16}=\\frac{4}{10}=0.4
$$

$$
I(0.16)=60\\cdot 0.4
$$

$$
I(0.16)=24
$$

Impact at $0.16$ ADV is $24$ basis points, so the statement is True.`,
      `**C.** → True

The scaled impact charge is $v I(v)$. Recover $A$ from the $6$ basis-point rise, then multiply by $v$, which raises the exponent by one.

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
A=60
$$

$$
I(v)=60 v^{\\frac{1}{2}}
$$

$$
v I(v)=v\\cdot 60 v^{\\frac{1}{2}}
$$

$$
v I(v)=60 v^{\\frac{3}{2}}
$$

The exponent $\\frac{3}{2}$ exceeds $1$, so doubling $v$ multiplies the charge by

$$
\\frac{(2v)I(2v)}{v I(v)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}>2
$$

The scaled impact charge grows faster than linearly in order size, so the statement is True.`,
      `**D.** → True

Break-even equates the scaled charge $v I(v)$ with the notional fee $F(v)=30v$. The coefficient of impact comes from the $6$ basis-point increment between $0.04$ and $0.09$ ADV.

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
A=\\frac{6}{0.1}=60
$$

The scaled charge is then

$$
I(v)=60 v^{\\frac{1}{2}}
$$

$$
v I(v)=60 v^{\\frac{3}{2}}
$$

For $v>0$:

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
v=\\left(\\frac{1}{2}\\right)^{2}=\\frac{1}{4}=0.25
$$

Both sides equal $7.5$ there:

$$
I(0.25)=60\\cdot\\frac{1}{2}=30
$$

$$
0.25\\cdot 30=7.5
$$

$$
F(0.25)=30\\cdot 0.25=7.5
$$

The notional fee and the scaled impact charge meet at $0.25$ ADV, so the statement is True.`,
      `**E.** → False

A charge proportional to order size would carry exponent $1$. Multiplying recovered square-root impact by $v$ produces a different power. From $I(0.09)-I(0.04)=6$:

$$
\\sqrt{0.09}-\\sqrt{0.04}=0.3-0.2=0.1
$$

$$
0.1A=6
$$

$$
A=60
$$

$$
v I(v)=60 v^{\\frac{3}{2}}
$$

Doubling $v$ then multiplies the charge by

$$
2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.828
$$

not by $2$. The scaled impact charge is a three-halves power, not a proportional law, so the statement is False.`,
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

Daily energy follows $E(m)=A m^{\\frac{2}{3}}$ for body mass $m>0$ kilograms. Inverting that law for mass as a function of energy needs the coefficient, which is recovered from the $70$ unit gap.

$$
27=3^{3}
$$

$$
27^{\\frac{2}{3}}=(3^{3})^{\\frac{2}{3}}=3^{2}=9
$$

$$
64=4^{3}
$$

$$
64^{\\frac{2}{3}}=(4^{3})^{\\frac{2}{3}}=4^{2}=16
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

The recovered law is $E=10 m^{\\frac{2}{3}}$. Solving for mass:

$$
\\frac{E}{10}=m^{\\frac{2}{3}}
$$

$$
m=\\left(\\frac{E}{10}\\right)^{\\frac{3}{2}}
$$

That is a power of $E$ with exponent $\\frac{3}{2}$. The body mass that produces a given daily energy is a power function of that energy, so the statement is True.`,
      `**B.** → True

A $64$ kg reading is a level of $E(m)=A m^{\\frac{2}{3}}$, not the recorded $70$ unit gap. That gap is $E(64)-E(27)$, so $A$ must be recovered first.

Both masses are cubes:

$$
27=3^{3}
$$

$$
27^{\\frac{2}{3}}=(3^{3})^{\\frac{2}{3}}
$$

$$
27^{\\frac{2}{3}}=3^{2}=9
$$

$$
64=4^{3}
$$

$$
64^{\\frac{2}{3}}=(4^{3})^{\\frac{2}{3}}
$$

$$
64^{\\frac{2}{3}}=4^{2}=16
$$

$$
E(64)-E(27)=A\\cdot 16-A\\cdot 9
$$

$$
7A=70
$$

$$
A=10
$$

The recovered law is $E(m)=10 m^{\\frac{2}{3}}$. At $64$ kilograms:

$$
E(64)=10\\cdot 64^{\\frac{2}{3}}
$$

$$
E(64)=10\\cdot 16
$$

$$
E(64)=160
$$

The companion check:

$$
E(27)=10\\cdot 9=90
$$

$$
160-90=70
$$

A $64$ kg animal uses $160$ energy units a day, so the statement is True.`,
      `**C.** → False

Energy per kilogram is the allometric law divided by mass. Recover $A$ from the $70$ unit gap first.

$$
27^{\\frac{2}{3}}=9
$$

$$
64^{\\frac{2}{3}}=16
$$

$$
A(16-9)=70
$$

$$
A=10
$$

$$
E(64)=160
$$

$$
E(27)=90
$$

Dividing by mass lowers the exponent by one:

$$
\\frac{E(m)}{m}=10 m^{\\frac{2}{3}-1}
$$

$$
\\frac{E(m)}{m}=10 m^{-\\frac{1}{3}}
$$

That average falls as $m$ rises. The two calibrated animals already disagree:

$$
\\frac{E(64)}{64}=\\frac{160}{64}=2.5
$$

$$
\\frac{E(27)}{27}=\\frac{90}{27}=\\frac{10}{3}
$$

Energy use per kilogram is not the same at every body mass, so the statement is False.`,
      `**D.** → True

Herd totals apply the law to each animal and add afterwards. The coefficient comes from the $70$ unit gap between the $64$ kg and $27$ kg animals.

$$
27=3^{3}
$$

$$
27^{\\frac{2}{3}}=9
$$

$$
64^{\\frac{2}{3}}=16
$$

$$
A(16-9)=70
$$

$$
A=10
$$

Eight small animals:

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
216^{\\frac{2}{3}}=(6^{3})^{\\frac{2}{3}}=6^{2}=36
$$

$$
E(216)=10\\cdot 36=360
$$

$$
\\frac{8E(27)}{E(216)}=\\frac{720}{360}=2
$$

The eight $27$ kg animals use twice as much total energy as one $216$ kg animal, so the statement is True.`,
      `**E.** → False

Two equal animals use $2E(m)$, while one animal of doubled mass uses $E(2m)$. The coefficient cancels in the scale factor.

$$
\\frac{E(2m)}{E(m)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}=\\sqrt[3]{4}
$$

$$
\\sqrt[3]{4}\\approx 1.587<2
$$

A named check recovers $A$ from the $70$ unit gap: $27^{\\frac{2}{3}}=9$, $64^{\\frac{2}{3}}=16$, so $7A=70$ and $A=10$. Then $E(27)=90$, hence $2E(27)=180$, while

$$
E(54)=10\\cdot 54^{\\frac{2}{3}}\\approx 142.9
$$

Combining two equal animals into one animal of twice the mass lowers total energy use, so the statement is False.`,
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

Weekly footfall follows $f(d)=A d^{-\\frac{3}{2}}$ visitors from a zone $d>0$ kilometres away. The planning file records a gap $f(4)-f(16)=350$, which recovers $A$ and leaves a negative exponent.

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}=2^{3}=8
$$

$$
16=2^{4}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}=2^{6}=64
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=\\frac{7A}{64}=350
$$

$$
A=3200
$$

The recovered law is $f(d)=3200 d^{-\\frac{3}{2}}$. The exponent $-\\frac{3}{2}$ is negative, so $f$ is strictly decreasing for $d>0$. A farther zone always supplies fewer visitors than a nearer zone, so the statement is True.`,
      `**B.** → True

The nearer zone's own footfall is $f(4)$, not the recorded $350$. That $350$ is the gap $f(4)-f(16)$.

$$
4=2^{2}
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}=2^{3}=8
$$

$$
16=2^{4}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}=2^{6}=64
$$

$$
A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=350
$$

$$
\\frac{7A}{64}=350
$$

$$
7A=350\\cdot 64=22400
$$

$$
A=\\frac{22400}{7}=3200
$$

Then

$$
f(4)=\\frac{3200}{8}=400
$$

The companion $f(16)=\\frac{3200}{64}=50$ returns the file gap $400-50=350$. The zone four kilometres away supplies $400$ visitors a week, so the statement is True.`,
      `**C.** → False

An inverse-square law would carry exponent $-2$. The given decay is $d^{-1.5}$, and the two-zone gap recovers only the coefficient, not a change of exponent.

$$
4^{\\frac{3}{2}}=8
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
\\frac{7A}{64}=350
$$

$$
A=3200
$$

Quadrupling distance then cuts footfall by

$$
\\frac{f(4d)}{f(d)}=4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

whereas inverse-square decay would cut it by $4^{-2}=\\frac{1}{16}$. The exponent is $-1.5$, not $-2$, so the statement is False.`,
      `**D.** → True

Nine kilometres is a perfect square, so the fractional exponent is exact once $A$ is recovered from the $350$ visitor gap.

$$
4^{\\frac{3}{2}}=8
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
\\frac{7A}{64}=350
$$

$$
7A=22400
$$

$$
A=3200
$$

At nine kilometres:

$$
9^{\\frac{3}{2}}=(9^{\\frac{1}{2}})^{3}=3^{3}=27
$$

$$
f(9)=\\frac{3200}{27}\\approx 118.5
$$

That reading clears the $100$-visitor core threshold because $118.5>100$. A zone nine kilometres away still supplies more than $100$ visitors a week, so the statement is True.`,
      `**E.** → False

The extra-kilometre cut is the magnitude of the derivative. Recover $A$ from the $350$ visitor gap, then differentiate.

$$
4^{\\frac{3}{2}}=8
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
\\frac{7A}{64}=350
$$

$$
A=3200
$$

$$
f(d)=3200 d^{-\\frac{3}{2}}
$$

$$
f'(d)=3200\\cdot\\left(-\\frac{3}{2}\\right)d^{-\\frac{5}{2}}
$$

$$
f'(d)=-4800 d^{-\\frac{5}{2}}
$$

So $\\lvert f'(d)\\rvert=4800 d^{-\\frac{5}{2}}$ is largest near the park. At four kilometres:

$$
4^{\\frac{5}{2}}=(2^{2})^{\\frac{5}{2}}=2^{5}=32
$$

$$
\\lvert f'(4)\\rvert=\\frac{4800}{32}=150
$$

At sixteen kilometres:

$$
16^{\\frac{5}{2}}=(2^{4})^{\\frac{5}{2}}=2^{10}=1024
$$

$$
\\lvert f'(16)\\rvert=\\frac{4800}{1024}\\approx 4.69
$$

Since $150>4.69$, an extra kilometre cuts more visitors near the park than far from it, so the statement is False.`,
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

Output follows $y(a)=A a^{r}$ with both constants unknown. Proportionality is the claim $r=1$, tested by the two installed arrays.

$$
\\frac{y(225)}{y(100)}=\\left(\\frac{225}{100}\\right)^{r}
$$

$$
\\frac{360}{240}=\\left(\\frac{9}{4}\\right)^{r}
$$

$$
\\frac{3}{2}=\\left(\\frac{3}{2}\\right)^{2r}
$$

The bases match, so the exponents match:

$$
2r=1
$$

$$
r=\\frac{1}{2}
$$

The fitted exponent is not $1$. A proportional forecast would have given $240\\cdot\\frac{225}{100}=540$, but the second array delivers $360$. Output is not proportional to the installed area, so the statement is False.`,
      `**B.** → False

The proposal doubles the $225$ square-metre array to $450$ square metres, so both constants must be recovered before that new level can be read. The two arrays cancel $A$:

$$
\\frac{360}{240}=\\left(\\frac{225}{100}\\right)^{r}
$$

$$
\\frac{3}{2}=\\left(\\frac{9}{4}\\right)^{r}
$$

$$
\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}
$$

$$
\\frac{3}{2}=\\left(\\frac{3}{2}\\right)^{2r}
$$

$$
r=\\frac{1}{2}
$$

The $100$ square-metre array then pins $A$:

$$
A\\cdot 100^{\\frac{1}{2}}=240
$$

$$
A\\cdot 10=240
$$

$$
A=24
$$

The recovered law is $y(a)=24 a^{\\frac{1}{2}}$. At $450$ square metres, using the recorded $360$ kWh at $225$ square metres:

$$
y(450)=y(225)\\cdot\\sqrt{2}=360\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.4142
$$

$$
y(450)\\approx 509.1
$$

That is under $520$ kWh. Expanding the $225$ square-metre array to $450$ square metres would not push output above $520$ kWh, so the statement is False.`,
      `**C.** → True

Output per square metre is the fitted law divided by area. The two arrays recover both constants.

$$
\\frac{y(225)}{y(100)}=\\left(\\frac{225}{100}\\right)^{r}
$$

$$
\\frac{360}{240}=\\left(\\frac{9}{4}\\right)^{r}
$$

$$
\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}
$$

$$
\\frac{3}{2}=\\left(\\frac{3}{2}\\right)^{2r}
$$

$$
2r=1
$$

$$
r=\\frac{1}{2}
$$

$$
A\\cdot 100^{\\frac{1}{2}}=240
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
10A=240
$$

$$
A=24
$$

Then

$$
\\frac{y(a)}{a}=\\frac{24 a^{\\frac{1}{2}}}{a}
$$

$$
\\frac{y(a)}{a}=24 a^{-\\frac{1}{2}}
$$

which is a power of $a$ with exponent $-\\frac{1}{2}$. Output per square metre is itself a power function of area, so the statement is True.`,
      `**D.** → True

Output per square metre at $100$ square metres is the recorded $240$ kWh divided by area.

$$
\\frac{240}{100}=2.4
$$

The same figure follows from the recovered law. The two arrays give $r=\\frac{1}{2}$ because $\\bigl(\\frac{9}{4}\\bigr)^{\\frac{1}{2}}=\\frac{3}{2}$, and $A\\cdot 10=240$ so $A=24$:

$$
\\frac{y(100)}{100}=24\\cdot 100^{-\\frac{1}{2}}
$$

$$
24\\cdot\\frac{1}{10}=2.4
$$

The $100$ square-metre array delivers $2.4$ kWh per square metre, so the statement is True.`,
      `**E.** → True

Doubling the recorded $240$ kWh output means solving $y(a)=480$. Both constants come from the two arrays.

$$
\\frac{360}{240}=\\left(\\frac{225}{100}\\right)^{r}
$$

$$
\\frac{3}{2}=\\left(\\frac{9}{4}\\right)^{r}
$$

$$
r=\\frac{1}{2}
$$

$$
A\\cdot 100^{\\frac{1}{2}}=240
$$

$$
A=24
$$

Then

$$
24 a^{\\frac{1}{2}}=480
$$

$$
a^{\\frac{1}{2}}=\\frac{480}{24}=20
$$

$$
a=20^{2}=400
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

Unit cost follows $c(N)=A N^{b}$ euros, with both constants unknown. The two milestones cancel $A$ and isolate the exponent.

$$
\\frac{c(400)}{c(100)}=\\left(\\frac{400}{100}\\right)^{b}
$$

$$
\\frac{40}{80}=4^{b}
$$

$$
\\frac{1}{2}=4^{b}
$$

$$
2^{-1}=(2^{2})^{b}=2^{2b}
$$

$$
2b=-1
$$

$$
b=-\\frac{1}{2}
$$

Quadrupling volume is then the scale factor $4^{-\\frac{1}{2}}=\\frac{1}{2}$ at every starting volume, not only between $100$ and $400$. Quadrupling cumulative volume halves the unit cost, so the statement is True.`,
      `**B.** → True

A unit cost of $20$ euros is a level of the recovered curve, so both constants are needed. The milestones cancel $A$:

$$
\\frac{c(400)}{c(100)}=\\left(\\frac{400}{100}\\right)^{b}
$$

$$
\\frac{40}{80}=4^{b}
$$

$$
4^{b}=\\frac{1}{2}
$$

$$
b=-\\frac{1}{2}
$$

The first milestone then pins $A$:

$$
A\\cdot 100^{-\\frac{1}{2}}=80
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
\\frac{A}{10}=80
$$

$$
A=800
$$

The recovered law is $c(N)=800 N^{-\\frac{1}{2}}$. At $1600$ thousand cells:

$$
\\sqrt{1600}=40
$$

$$
c(1600)=\\frac{800}{40}=20
$$

Unit cost is $20$ euros at $1600$ thousand cells, so the statement is True.`,
      `**C.** → True

Cumulative spend is unit cost multiplied by volume, $S(N)=N\\,c(N)$. Recover the cost curve from the two milestones first.

$$
4^{b}=\\frac{40}{80}=\\frac{1}{2}
$$

$$
b=-\\frac{1}{2}
$$

$$
A\\cdot 100^{-\\frac{1}{2}}=80
$$

$$
A=800
$$

Then

$$
c(N)=800 N^{-\\frac{1}{2}}
$$

$$
S(N)=N\\cdot 800 N^{-\\frac{1}{2}}
$$

$$
S(N)=800 N^{\\frac{1}{2}}
$$

The square-root law is strictly increasing for $N>0$, even while unit cost falls. Spend at the milestones:

$$
S(100)=800\\sqrt{100}=8000
$$

$$
S(400)=800\\sqrt{400}=16000
$$

Unit cost falls as volume grows, but cumulative spend still rises, so the statement is True.`,
      `**D.** → True

Cumulative spend at a milestone is unit cost times volume. The first recorded pair is already enough:

$$
S(100)=100\\cdot 80=8000
$$

The same figure follows from the recovered spend law. The milestones give $b=-\\frac{1}{2}$ because $4^{b}=\\frac{1}{2}$, and $A\\cdot\\frac{1}{10}=80$ so $A=800$. Then $S(N)=800 N^{\\frac{1}{2}}$ and

$$
S(100)=800\\sqrt{100}=800\\cdot 10=8000
$$

Spend at $100$ thousand cells is $8000$ euros, so the statement is True.`,
      `**E.** → False

A negative-exponent power stays positive for every $N>0$. The milestones recover $b=-\\frac{1}{2}$ and $A=800$:

$$
\\frac{40}{80}=4^{b}
$$

$$
b=-\\frac{1}{2}
$$

$$
c(N)=800 N^{-\\frac{1}{2}}=\\frac{800}{\\sqrt{N}}
$$

For $N>0$ the square root is positive, hence $c(N)>0$. Cost tends to $0$ as $N$ grows without bound but never crosses it. Unit cost does not become negative, so the statement is False.`,
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

Doubling discharge acts through the composed exponent. The gauged run calibrates the transport stage, then velocity is substituted.

$$
A\\cdot 3^{3}=135
$$

$$
3^{3}=27
$$

$$
27A=135
$$

$$
A=\\frac{135}{27}=5
$$

$$
S(v)=5 v^{3}
$$

$$
v(q)=\\frac{q^{\\frac{1}{2}}}{2}
$$

$$
S(q)=5\\left(\\frac{q^{\\frac{1}{2}}}{2}\\right)^{3}
$$

$$
\\left(\\frac{q^{\\frac{1}{2}}}{2}\\right)^{3}=\\frac{q^{\\frac{3}{2}}}{8}
$$

$$
S(q)=\\frac{5}{8} q^{\\frac{3}{2}}
$$

Then

$$
\\frac{S(2q)}{S(q)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83
$$

That factor exceeds $2$. Doubling the discharge more than doubles sediment transport, so the statement is True.`,
      `**B.** → True

The stability limit is inverted through the composed law. The gauged run $S(3)=135$ pins the transport coefficient.

$$
A\\cdot 3^{3}=135
$$

$$
A=\\frac{135}{27}=5
$$

$$
S(q)=5\\left(\\frac{q^{\\frac{1}{2}}}{2}\\right)^{3}
$$

$$
S(q)=\\frac{5}{8} q^{\\frac{3}{2}}
$$

$$
\\frac{5}{8} q^{\\frac{3}{2}}=5000
$$

$$
q^{\\frac{3}{2}}=5000\\cdot\\frac{8}{5}=8000
$$

$$
q=8000^{\\frac{2}{3}}
$$

$$
8000=20^{3}
$$

$$
q=20^{2}=400
$$

Stage check:

$$
v(400)=\\frac{400^{\\frac{1}{2}}}{2}=\\frac{20}{2}=10
$$

$$
S(10)=5\\cdot 10^{3}=5000
$$

The stability limit of $5000$ tonnes per day is reached at a discharge of $400$, so the statement is True.`,
      `**C.** → False

Doubling velocity acts on the transport stage alone, whose exponent is $3$. The scale factor does not need the coefficient, but the gauged run still recovers $A$ for a named check:

$$
\\frac{S(2v)}{S(v)}=2^{3}=8
$$

The gauged pair already shows it. From $S(3)=135$ one has $27A=135$, so $A=5$, and

$$
S(6)=5\\cdot 6^{3}
$$

$$
6^{3}=216
$$

$$
S(6)=5\\cdot 216=1080
$$

$$
\\frac{1080}{135}=8
$$

Doubling the flow velocity multiplies sediment transport by eight, not by two, so the statement is False.`,
      `**D.** → True

Discharge $36$ is the inner-stage inverse of the gauged velocity $3$. Velocity is $v(q)=\\frac{q^{\\frac{1}{2}}}{2}$:

$$
36^{\\frac{1}{2}}=6
$$

$$
v(36)=\\frac{6}{2}=3
$$

The gauged run at $v=3$ carried $135$ tonnes per day, so transport is $135$ at this discharge as well. The composed law agrees after $A$ is recovered:

$$
A\\cdot 27=135
$$

$$
A=5
$$

$$
S(q)=\\frac{5}{8} q^{\\frac{3}{2}}
$$

$$
36^{\\frac{3}{2}}=(36^{\\frac{1}{2}})^{3}=6^{3}=216
$$

$$
\\frac{5}{8}\\cdot 216=135
$$

Transport at discharge $36$ is $135$ tonnes per day, so the statement is True.`,
      `**E.** → False

A composition of power laws is again a power law. The gauged run gives $A\\cdot 3^{3}=135$, so $A=5$, and substituting $v(q)=\\frac{q^{\\frac{1}{2}}}{2}$ into $S(v)=5 v^{3}$ gives:

$$
3^{3}=27
$$

$$
27A=135
$$

$$
A=5
$$

$$
S(v)=5 v^{3}
$$

$$
S(q)=5\\left(\\frac{q^{\\frac{1}{2}}}{2}\\right)^{3}
$$

$$
\\left(\\frac{q^{\\frac{1}{2}}}{2}\\right)^{3}=\\frac{q^{\\frac{3}{2}}}{8}
$$

$$
S(q)=\\frac{5}{8} q^{\\frac{3}{2}}
$$

which is a power of $q$ with exponent $\\frac{3}{2}$. The two-stage chain is a power function of discharge, so the statement is False.`,
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

Revenue is price times quantity, $R=pq$. The observation $q(2)=500$ pins the demand coefficient, then multiplying by $p$ raises the exponent by one.

$$
q(p)=A p^{-3}
$$

$$
A\\cdot 2^{-3}=500
$$

$$
2^{3}=8
$$

$$
2^{-3}=\\frac{1}{8}
$$

$$
\\frac{A}{8}=500
$$

$$
A=8\\cdot 500=4000
$$

$$
q(p)=4000 p^{-3}
$$

$$
R(p)=p\\cdot q(p)
$$

$$
R(p)=p\\cdot 4000 p^{-3}
$$

$$
R(p)=4000 p^{-2}
$$

which is a power of $p$ with exponent $-2$. Revenue is a power function of price, so the statement is True.`,
      `**B.** → True

A revenue level needs the coefficient of $R(p)=p q(p)$. The catalogue pair $q(2)=500$ recovers $A$ first.

$$
A\\cdot 2^{-3}=500
$$

$$
2^{-3}=\\frac{1}{8}
$$

$$
\\frac{A}{8}=500
$$

$$
A=4000
$$

$$
R(p)=p\\cdot 4000 p^{-3}=4000 p^{-2}
$$

At a price of $2.50$:

$$
2.50=\\frac{5}{2}
$$

$$
\\left(\\frac{5}{2}\\right)^{2}=\\frac{25}{4}=6.25
$$

$$
R(2.50)=\\frac{4000}{6.25}=\\frac{4000}{\\frac{25}{4}}=4000\\cdot\\frac{4}{25}=640
$$

Revenue at a price of $2.50$ is $640$, so the statement is True.`,
      `**C.** → True

The revenue exponent is one more than the demand exponent. With $q(2)=500$:

$$
A\\cdot 2^{-3}=500
$$

$$
\\frac{A}{8}=500
$$

$$
A=4000
$$

$$
R(p)=4000 p^{-2}
$$

The exponent $-2$ is negative, so $R$ is strictly decreasing for $p>0$. At the catalogue price:

$$
R(2)=\\frac{4000}{4}=1000
$$

At twice that price:

$$
R(4)=\\frac{4000}{16}=250
$$

Since $250<1000$, raising the price cuts revenue. Raising the price always cuts revenue, so the statement is True.`,
      `**D.** → True

The indexation is the multiplier $1.1$ acting through the demand exponent $-3$. The coefficient cancels in the scale factor:

$$
\\frac{q(1.1p)}{q(p)}=1.1^{-3}
$$

$$
1.1^{2}=1.21
$$

$$
1.1^{3}=1.21\\cdot 1.1=1.331
$$

$$
1.1^{-3}=\\frac{1}{1.331}\\approx 0.7513
$$

The relative cut is

$$
1-0.7513=0.2487
$$

about $24.9\\%$. A concrete check from $q(2)=500$ gives $A=4000$ and

$$
2.2^{2}=4.84
$$

$$
2.2^{3}=4.84\\cdot 2.2=10.648
$$

$$
q(2.2)=\\frac{4000}{10.648}\\approx 375.7
$$

a fall of about $124.3$ units, which is about $24.9\\%$ of $500$. A price rise of $10\\%$ cuts quantity by about $25\\%$, so the statement is True.`,
      `**E.** → False

Highly elastic demand means $\\lvert r\\rvert=3>1$, so revenue falls when price rises. From $q(2)=500$ one has $A=4000$ and

$$
R(p)=4000 p^{-2}
$$

A $10\\%$ rise multiplies revenue by

$$
1.1^{2}=1.21
$$

$$
1.1^{-2}=\\frac{1}{1.21}\\approx 0.826
$$

Revenue falls by about $17\\%$. Elastic demand is exactly why a price rise cuts revenue here, not why it would raise it. Because demand is highly elastic, a price rise does not raise revenue, so the statement is False.`,
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

Weld strength follows $S(p)=A p^{k}$ newtons after $p>0$ amperes. The recorded pairs are $S(4)=40$ and $S(9)=135$. The claim is that the exponent exceeds one, so those two levels must recover $k$.

The ratio of the two strengths cancels $A$:

$$
\\frac{S(9)}{S(4)}=\\frac{A\\cdot 9^{k}}{A\\cdot 4^{k}}
$$

$$
\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}
$$

$$
\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}
$$

Rewrite both sides as powers of $\\frac{3}{2}$:

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\left(\\frac{3}{2}\\right)^{2}\\right)^{k}=\\left(\\frac{3}{2}\\right)^{2k}
$$

$$
3=2k
$$

$$
k=\\frac{3}{2}
$$

Because $\\frac{3}{2}>1$, strength outruns current, so the statement is True.`,
      `**B.** → True

The $16$ A reading is a third level of $S(p)=A p^{k}$. Both constants come from the spot checks $S(4)=40$ and $S(9)=135$.

The ratio of the two strengths cancels $A$:

$$
\\frac{S(9)}{S(4)}=\\frac{A\\cdot 9^{k}}{A\\cdot 4^{k}}
$$

$$
\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}
$$

$$
\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$ and $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$,

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\left(\\frac{3}{2}\\right)^{2}\\right)^{k}
$$

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\frac{3}{2}\\right)^{2k}
$$

The bases match, so the exponents match:

$$
3=2k
$$

$$
k=\\frac{3}{2}
$$

The $4$ A weld then pins $A$:

$$
A\\cdot 4^{\\frac{3}{2}}=40
$$

$$
4^{\\frac{3}{2}}=(2^{2})^{\\frac{3}{2}}=2^{3}=8
$$

$$
A\\cdot 8=40
$$

$$
A=5
$$

The recovered law is $S(p)=5p^{\\frac{3}{2}}$. At sixteen amperes:

$$
S(16)=5\\cdot 16^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=(2^{4})^{\\frac{3}{2}}=2^{6}=64
$$

$$
S(16)=5\\cdot 64=320
$$

The claimed strength is $320$ N, so the statement is True.`,
      `**C.** → True

Strength follows $S(p)=A p^{k}$ with spot checks $S(4)=40$ and $S(9)=135$. Growth without bound needs a positive coefficient and a positive exponent.

The ratio of the two strengths cancels $A$:

$$
\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}
$$

$$
\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}
$$

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\frac{3}{2}\\right)^{2k}
$$

$$
k=\\frac{3}{2}>0
$$

The $4$ A weld then pins $A$:

$$
A\\cdot 4^{\\frac{3}{2}}=40
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
A=5>0
$$

The recovered law is $S(p)=5p^{\\frac{3}{2}}$. As current grows, a positive multiple of a positive power of $p$ grows without bound, so the statement is True.`,
      `**D.** → False

An extra ampere is the derivative of $S(p)=A p^{k}$. The spot checks $S(4)=40$ and $S(9)=135$ recover both constants first.

The ratio of the two strengths cancels $A$:

$$
\\frac{S(9)}{S(4)}=\\frac{A\\cdot 9^{k}}{A\\cdot 4^{k}}
$$

$$
\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}
$$

$$
\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$ and $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$,

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\frac{3}{2}\\right)^{2k}
$$

$$
k=\\frac{3}{2}
$$

The $4$ A weld then pins $A$:

$$
A\\cdot 4^{\\frac{3}{2}}=40
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
A\\cdot 8=40
$$

$$
A=5
$$

The recovered law is $S(p)=5p^{\\frac{3}{2}}$. Differentiate:

$$
S'(p)=5\\cdot\\frac{3}{2}p^{\\frac{3}{2}-1}
$$

$$
S'(p)=\\frac{15}{2}p^{\\frac{1}{2}}
$$

At four amperes:

$$
S'(4)=\\frac{15}{2}\\cdot 4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
S'(4)=\\frac{15}{2}\\cdot 2=15
$$

At nine amperes:

$$
S'(9)=\\frac{15}{2}\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
S'(9)=\\frac{15}{2}\\cdot 3=\\frac{45}{2}
$$

Because $15<\\frac{45}{2}$, the extra ampere adds less at $4$ A than at $9$ A, so the statement is False.`,
      `**E.** → False

The $400$ N reject line is inverted for current once $S(p)=A p^{k}$ is known. The spot checks $S(4)=40$ and $S(9)=135$ recover both constants.

The ratio of the two strengths cancels $A$:

$$
\\frac{S(9)}{S(4)}=\\frac{A\\cdot 9^{k}}{A\\cdot 4^{k}}
$$

$$
\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}
$$

$$
\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}
$$

Because $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$ and $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$,

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\frac{3}{2}\\right)^{2k}
$$

$$
k=\\frac{3}{2}
$$

The $4$ A weld then pins $A$:

$$
A\\cdot 4^{\\frac{3}{2}}=40
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
A\\cdot 8=40
$$

$$
A=5
$$

The recovered law is $S(p)=5p^{\\frac{3}{2}}$. Set it equal to the reject line:

$$
5p^{\\frac{3}{2}}=400
$$

$$
p^{\\frac{3}{2}}=80
$$

Raise both sides to the power $\\frac{2}{3}$:

$$
p=80^{\\frac{2}{3}}=(80^{\\frac{1}{3}})^{2}
$$

Because $4^{3}=64$ and $4.3^{3}=79.507$,

$$
80^{\\frac{1}{3}}\\approx 4.31
$$

$$
p\\approx 4.31^{2}\\approx 18.57
$$

A setting of $18$ A is still short of the line:

$$
S(18)=5\\cdot 18^{\\frac{3}{2}}=5\\cdot 18\\cdot\\sqrt{18}
$$

$$
\\sqrt{18}=3\\sqrt{2}
$$

$$
S(18)=270\\sqrt{2}\\approx 381.8
$$

$$
381.8<400
$$

The smallest current that clears $400$ N is about $18.57$ A, which is not below $18$ A, so the statement is False.`,
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

Holding power follows $H(m)=A m^{\\frac{2}{3}}$ kilonewtons when mass is in kilograms. The harbour form is $H(t)=B t^{\\frac{2}{3}}$ with $t$ in tonnes, and $1$ tonne $=1000$ kg. The claim is that switching the mass unit leaves the exponent unchanged.

The kilogram law is

$$
H(m)=A m^{\\frac{2}{3}}
$$

A change of mass unit is the substitution $m=1000t$:

$$
m=1000t
$$

$$
H=A(1000t)^{\\frac{2}{3}}
$$

$$
(1000t)^{\\frac{2}{3}}=1000^{\\frac{2}{3}}t^{\\frac{2}{3}}
$$

$$
H=A\\cdot 1000^{\\frac{2}{3}}t^{\\frac{2}{3}}
$$

The new coefficient is $B=A\\cdot 1000^{\\frac{2}{3}}$, which absorbs the conversion. The power of mass remains $\\frac{2}{3}$, so the statement is True.`,
      `**B.** → True

A target of $150$ kN is inverted after the kilogram coefficient is known. Holding power follows $H(m)=A m^{\\frac{2}{3}}$ kilonewtons, the trial buoy of $8$ kg held $24$ kN, and the exponent $\\frac{2}{3}$ is already on the sheet.

The model is

$$
H(m)=A m^{\\frac{2}{3}}
$$

The trial is

$$
H(8)=24
$$

Substitute the recorded mass:

$$
A\\cdot 8^{\\frac{2}{3}}=24
$$

Because $8=2^{3}$,

$$
8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=2^{2}=4
$$

$$
A\\cdot 4=24
$$

$$
A=\\frac{24}{4}=6
$$

Replay the trial:

$$
H(8)=6\\cdot 4=24
$$

The recovered law is

$$
H(m)=6m^{\\frac{2}{3}}
$$

Set holding power equal to the storm floor:

$$
6m^{\\frac{2}{3}}=150
$$

$$
m^{\\frac{2}{3}}=\\frac{150}{6}=25
$$

Raise both sides to the power $\\frac{3}{2}$:

$$
m=25^{\\frac{3}{2}}=(25^{\\frac{1}{2}})^{3}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
m=5^{3}=125
$$

Forward check at $125$ kg:

$$
125^{\\frac{2}{3}}=(5^{3})^{\\frac{2}{3}}=5^{2}=25
$$

$$
H(125)=6\\cdot 25=150
$$

A $125$ kg buoy holds $150$ kN, so the statement is True.`,
      `**C.** → False

The storm mass is inverted in kilograms, not in tonnes. Holding power follows $H(m)=A m^{\\frac{2}{3}}$ with trial $H(8)=24$, and the same physical law is rewritten as $H(t)=B t^{\\frac{2}{3}}$ with $t$ in tonnes and $1$ tonne $=1000$ kg.

The model in kilograms is

$$
H(m)=A m^{\\frac{2}{3}}
$$

$$
A\\cdot 8^{\\frac{2}{3}}=24
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
A\\cdot 4=24
$$

$$
A=6
$$

The recovered kilogram law is $H(m)=6m^{\\frac{2}{3}}$. Set it equal to the storm floor:

$$
6m^{\\frac{2}{3}}=150
$$

$$
m^{\\frac{2}{3}}=25
$$

$$
m=25^{\\frac{3}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
m=5^{3}=125
$$

That $125$ is kilograms. Convert to tonnes:

$$
t=\\frac{125}{1000}=0.125
$$

In the tonne form the conversion $m=1000t$ sits under the exponent:

$$
H=6(1000t)^{\\frac{2}{3}}
$$

$$
B=6\\cdot 1000^{\\frac{2}{3}}
$$

$$
1000^{\\frac{2}{3}}=(10^{3})^{\\frac{2}{3}}=10^{2}=100
$$

$$
B=6\\cdot 100=600
$$

A $125$ tonne buoy would then hold

$$
125^{\\frac{2}{3}}=25
$$

$$
H=600\\cdot 25=15000
$$

which is a hundred times the $150$ kN protocol. The storm mass is $125$ kg, not $125$ tonnes, so the statement is False.`,
      `**D.** → False

The tonne coefficient is the kilogram law after $m=1000t$, and the conversion sits under the exponent $\\frac{2}{3}$. Holding power follows $H(m)=A m^{\\frac{2}{3}}$ with trial $H(8)=24$.

The model in kilograms is

$$
H(m)=A m^{\\frac{2}{3}}
$$

$$
H(8)=24
$$

$$
A\\cdot 8^{\\frac{2}{3}}=24
$$

$$
8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=2^{2}=4
$$

$$
A\\cdot 4=24
$$

$$
A=6
$$

The recovered kilogram law is $H(m)=6m^{\\frac{2}{3}}$. Substitute $m=1000t$:

$$
H=6(1000t)^{\\frac{2}{3}}
$$

$$
H=6\\cdot 1000^{\\frac{2}{3}}t^{\\frac{2}{3}}
$$

The tonne-form coefficient is therefore

$$
B=6\\cdot 1000^{\\frac{2}{3}}
$$

$$
1000=10^{3}
$$

$$
1000^{\\frac{2}{3}}=(10^{3})^{\\frac{2}{3}}=10^{2}=100
$$

$$
B=6\\cdot 100=600
$$

A factor of $1000$ would require exponent $1$:

$$
6\\cdot 1000=6000
$$

$$
\\frac{B}{A}=\\frac{600}{6}=100
$$

$$
100\\neq 1000
$$

The tonne-form coefficient is $100$ times the kilogram coefficient, not $1000$ times, so the statement is False.`,
      `**E.** → False

Doubling mass multiplies holding power by $2^{\\frac{2}{3}}$, because the coefficient cancels. Holding power follows $H(m)=A m^{\\frac{2}{3}}$, so the trial $H(8)=24$ is not needed for the scale factor.

$$
\\frac{H(2m)}{H(m)}=\\frac{A(2m)^{\\frac{2}{3}}}{A m^{\\frac{2}{3}}}
$$

$$
\\frac{H(2m)}{H(m)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}=\\sqrt[3]{4}\\approx 1.587
$$

An exact doubling of holding power would need exponent $1$, which would give the factor $2^{1}=2$. The cube root of four is not two. Holding power rises by about $59\\%$, not by a factor of two, so the statement is False.`,
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

Throughput follows $T(d)=A d^{-2}$ megabits per second, calibrated by the bench test $T(4)=50$. Inverting a power with a nonzero exponent produces another power, so the hop for a given throughput should itself be a power of that throughput.

The model is

$$
T(d)=A d^{-2}
$$

The bench test is

$$
T(4)=50
$$

$$
A\\cdot 4^{-2}=50
$$

$$
4^{2}=16
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
\\frac{A}{16}=50
$$

$$
A=50\\cdot 16=800
$$

The recovered law is

$$
T=\\frac{800}{d^{2}}
$$

Solve for distance:

$$
d^{2}=\\frac{800}{T}
$$

$$
d=\\left(\\frac{800}{T}\\right)^{\\frac{1}{2}}
$$

$$
d=800^{\\frac{1}{2}}T^{-\\frac{1}{2}}
$$

$$
d=\\sqrt{800}\\, T^{-\\frac{1}{2}}
$$

Distance is a power of throughput with exponent $-\\frac{1}{2}$, so the statement is True.`,
      `**B.** → True

The $8$ Mbps floor is a maximum hop, because throughput falls as $d$ grows. Throughput follows $T(d)=A d^{-2}$, and the bench test $T(4)=50$ recovers the coefficient first.

The model is

$$
T(d)=A d^{-2}
$$

$$
T(4)=50
$$

$$
A\\cdot 4^{-2}=50
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
\\frac{A}{16}=50
$$

$$
A=800
$$

Replay the bench test:

$$
T(4)=\\frac{800}{16}=50
$$

The recovered law is

$$
T(d)=\\frac{800}{d^{2}}
$$

Set it equal to the reliability floor:

$$
\\frac{800}{d^{2}}=8
$$

$$
d^{2}=\\frac{800}{8}
$$

$$
d^{2}=100
$$

$$
d=\\sqrt{100}=10
$$

Only the positive root is a hop. Because the exponent $-2$ is negative, every longer hop falls below $8$ Mbps. The farthest reliable hop is exactly $10$ m, so the statement is True.`,
      `**C.** → False

Doubling the hop multiplies throughput by $2^{-2}$, and the coefficient cancels. Throughput follows $T(d)=A d^{-2}$, so the bench test is not needed for the scale factor.

$$
\\frac{T(2d)}{T(d)}=\\frac{A(2d)^{-2}}{A d^{-2}}
$$

$$
\\frac{T(2d)}{T(d)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

A cut to one half would need exponent $-1$, which would give $2^{-1}=\\frac{1}{2}$. The factor is one quarter, not one half. An inverse-square law quarters the reading when distance doubles, so the statement is False.`,
      `**D.** → False

Whether $11$ m complies is settled by evaluating throughput there. Throughput follows $T(d)=A d^{-2}$, and the bench test at $d=4$ m recorded $T=50$ Mbps.

The model is

$$
T(d)=A d^{-2}
$$

$$
T(4)=50
$$

$$
A\\cdot 4^{-2}=50
$$

$$
4^{2}=16
$$

$$
4^{-2}=\\frac{1}{16}
$$

$$
\\frac{A}{16}=50
$$

$$
A=800
$$

The recovered law is

$$
T(d)=\\frac{800}{d^{2}}
$$

The same law meets the floor at $d=10$:

$$
T(10)=\\frac{800}{10^{2}}=\\frac{800}{100}=8
$$

At eleven metres:

$$
T(11)=\\frac{800}{11^{2}}
$$

$$
11^{2}=121
$$

$$
T(11)=\\frac{800}{121}\\approx 6.61
$$

$$
6.61<8
$$

Because the exponent $-2$ is negative, $T(11)<T(10)$. The hop delivers about $6.61$ Mbps, which is below the floor, so the statement is False.`,
      `**E.** → False

A negative exponent puts distance in a denominator, but the numerator stays positive. Throughput follows $T(d)=A d^{-2}$, and the bench test $T(4)=50$ recovers that numerator.

$$
A\\cdot 4^{-2}=50
$$

$$
\\frac{A}{16}=50
$$

$$
A=800>0
$$

The recovered law is $T(d)=\\frac{800}{d^{2}}$. For every hop $d>0$,

$$
\\frac{800}{d^{2}}>0
$$

As hops grow, $T(d)$ falls towards $0$ from above and never crosses it. Throughput cannot become negative, so the statement is False.`,
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

The pair is two evaluations at $16$ g, while the single fish is one evaluation at $32$ g. Gill area follows $G(m)=A m^{\\frac{3}{4}}$, and the specimen $G(256)=512$ recovers $A$ first.

The model is

$$
G(m)=A m^{\\frac{3}{4}}
$$

$$
G(256)=512
$$

$$
A\\cdot 256^{\\frac{3}{4}}=512
$$

$$
256=4^{4}
$$

$$
256^{\\frac{1}{4}}=4
$$

$$
256^{\\frac{3}{4}}=4^{3}=64
$$

$$
64A=512
$$

$$
A=\\frac{512}{64}=8
$$

The recovered law is

$$
G(m)=8m^{\\frac{3}{4}}
$$

Two $16$ g fish:

$$
16=2^{4}
$$

$$
16^{\\frac{1}{4}}=2
$$

$$
16^{\\frac{3}{4}}=2^{3}=8
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

$$
128>107.63
$$

The pair carries more total gill area than one $32$ g fish, so the statement is False.`,
      `**B.** → True

Area at $16$ g is a substitution into the recovered law. Gill area follows $G(m)=A m^{\\frac{3}{4}}$, and the specimen $G(256)=512$ recovers $A$.

The model is

$$
G(m)=A m^{\\frac{3}{4}}
$$

$$
G(256)=512
$$

$$
A\\cdot 256^{\\frac{3}{4}}=512
$$

$$
256^{\\frac{1}{4}}=4
$$

$$
256^{\\frac{3}{4}}=4^{3}=64
$$

$$
64A=512
$$

$$
A=8
$$

Replay the specimen:

$$
G(256)=8\\cdot 64=512
$$

The recovered law is

$$
G(m)=8m^{\\frac{3}{4}}
$$

At sixteen grams:

$$
16^{\\frac{1}{4}}=2
$$

$$
16^{\\frac{3}{4}}=2^{3}=8
$$

$$
G(16)=8\\cdot 8=64
$$

The $16$ g fish carries $64$ cm$^{2}$ of gill, so the statement is True.`,
      `**C.** → False

Area per gram is the area law divided by mass, which subtracts $1$ from the exponent. Gill area follows $G(m)=A m^{\\frac{3}{4}}$, and the specimen $G(256)=512$ recovers $A$ first.

$$
A\\cdot 256^{\\frac{3}{4}}=512
$$

$$
256^{\\frac{3}{4}}=64
$$

$$
64A=512
$$

$$
A=8
$$

Divide the recovered law by mass:

$$
\\frac{G(m)}{m}=\\frac{8m^{\\frac{3}{4}}}{m}
$$

$$
\\frac{G(m)}{m}=8m^{\\frac{3}{4}-1}
$$

$$
\\frac{G(m)}{m}=8m^{-\\frac{1}{4}}
$$

The leftover exponent is negative, so intensity falls as mass grows. A constant intensity would need exponent $0$. It is not a constant, so the statement is False.`,
      `**D.** → True

Gill area follows $G(m)=A m^{\\frac{3}{4}}$ square centimetres. The allometric exponent is given as $\\frac{3}{4}$, and the specimen is not needed to compare it with $1$.

If mass is scaled by a factor $c>1$, area scales by $c^{\\frac{3}{4}}$ while mass itself scales by $c^{1}$. Because

$$
\\frac{3}{4}<1
$$

one has $c^{\\frac{3}{4}}<c$. Gill area therefore grows more slowly than body mass, so the statement is True.`,
      `**E.** → False

A target of $216$ cm$^{2}$ is inverted for mass after the coefficient is known. Gill area follows $G(m)=A m^{\\frac{3}{4}}$, and the specimen $G(256)=512$ recovers $A$.

The model is

$$
G(m)=A m^{\\frac{3}{4}}
$$

$$
A\\cdot 256^{\\frac{3}{4}}=512
$$

$$
256^{\\frac{1}{4}}=4
$$

$$
256^{\\frac{3}{4}}=4^{3}=64
$$

$$
64A=512
$$

$$
A=8
$$

The recovered law is

$$
G(m)=8m^{\\frac{3}{4}}
$$

Set it equal to the target area:

$$
8m^{\\frac{3}{4}}=216
$$

$$
m^{\\frac{3}{4}}=\\frac{216}{8}=27
$$

Raise both sides to the power $\\frac{4}{3}$:

$$
m=27^{\\frac{4}{3}}=(27^{\\frac{1}{3}})^{4}
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
m=3^{4}=81
$$

The claimed $64$ g produces a smaller area:

$$
64^{\\frac{1}{4}}=2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
64^{\\frac{3}{4}}=(2\\sqrt{2})^{3}=8\\cdot 2\\sqrt{2}=16\\sqrt{2}
$$

$$
G(64)=8\\cdot 16\\sqrt{2}=128\\sqrt{2}\\approx 181
$$

$$
181<216
$$

The mass that produces $216$ cm$^{2}$ is $81$ g, so the statement is False.`,
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

Curing strength follows $S(t)=A\\sqrt{t}$ megapascals. Quadrupling time multiplies strength by $\\sqrt{4}$, because the coefficient cancels. The logged $5$ MPa gap is not needed for the scale factor.

$$
\\frac{S(4t)}{S(t)}=\\frac{A\\sqrt{4t}}{A\\sqrt{t}}
$$

$$
\\frac{S(4t)}{S(t)}=\\sqrt{4}
$$

$$
\\sqrt{4}=2
$$

The multiplier is exactly $2$ at every starting day. Quadrupling curing time doubles strength, so the statement is True.`,
      `**B.** → True

The logged gap is a difference of two model values of $S(t)=A\\sqrt{t}$, and $A$ factors out. Strength rose by $5$ MPa between day $4$ and day $9$.

The model is

$$
S(t)=A t^{\\frac{1}{2}}
$$

The surviving record is

$$
S(9)-S(4)=5
$$

$$
A\\sqrt{9}-A\\sqrt{4}=5
$$

$$
\\sqrt{9}=3
$$

$$
\\sqrt{4}=2
$$

$$
A\\cdot 3-A\\cdot 2=5
$$

$$
A(3-2)=5
$$

$$
A=5
$$

The recovered law is

$$
S(t)=5\\sqrt{t}
$$

On day $4$:

$$
S(4)=5\\sqrt{4}
$$

$$
\\sqrt{4}=2
$$

$$
S(4)=5\\cdot 2=10
$$

Companion check on day $9$: $S(9)=5\\cdot 3=15$, and the gap is $15-10=5$. Strength on day $4$ is $10$ MPa, so the statement is True.`,
      `**C.** → False

An extra day is the derivative of $S(t)=A\\sqrt{t}$. The logged $5$ MPa rise between day $4$ and day $9$ recovers $A$ first.

The model is

$$
S(t)=A t^{\\frac{1}{2}}
$$

$$
A\\sqrt{9}-A\\sqrt{4}=5
$$

$$
A(3-2)=5
$$

$$
A=5
$$

The recovered law is

$$
S(t)=5t^{\\frac{1}{2}}
$$

Differentiate:

$$
S'(t)=5\\cdot\\frac{1}{2}t^{\\frac{1}{2}-1}
$$

$$
S'(t)=\\frac{5}{2}t^{-\\frac{1}{2}}
$$

After four days:

$$
S'(4)=\\frac{5}{2}\\cdot 4^{-\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
S'(4)=\\frac{5}{2}\\cdot\\frac{1}{2}=\\frac{5}{4}
$$

After nine days:

$$
S'(9)=\\frac{5}{2}\\cdot 9^{-\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{-\\frac{1}{2}}=\\frac{1}{3}
$$

$$
S'(9)=\\frac{5}{2}\\cdot\\frac{1}{3}=\\frac{5}{6}
$$

Because $\\frac{5}{4}>\\frac{5}{6}$, the extra day adds more after four days than after nine, so the statement is False.`,
      `**D.** → True

Reaching $30$ MPa is an inversion of $S(t)=A\\sqrt{t}$. The logged $5$ MPa rise between day $4$ and day $9$ recovers $A$ first.

The model is

$$
S(t)=A t^{\\frac{1}{2}}
$$

$$
A\\sqrt{9}-A\\sqrt{4}=5
$$

$$
\\sqrt{9}=3
$$

$$
\\sqrt{4}=2
$$

$$
A(3-2)=5
$$

$$
A=5
$$

The recovered law is

$$
S(t)=5\\sqrt{t}
$$

Set strength equal to $30$ MPa:

$$
5\\sqrt{t}=30
$$

$$
\\sqrt{t}=\\frac{30}{5}=6
$$

$$
t=6^{2}=36
$$

Forward check:

$$
S(36)=5\\sqrt{36}
$$

$$
\\sqrt{36}=6
$$

$$
S(36)=5\\cdot 6=30
$$

Reaching $30$ MPa takes exactly $36$ days, so the statement is True.`,
      `**E.** → False

The log preserves a difference, not a level. Strength follows $S(t)=A\\sqrt{t}$, and the recorded rise is $S(9)-S(4)=5$.

The model is

$$
S(t)=A t^{\\frac{1}{2}}
$$

$$
A\\sqrt{9}-A\\sqrt{4}=5
$$

$$
\\sqrt{9}=3
$$

$$
\\sqrt{4}=2
$$

$$
A(3-2)=5
$$

$$
A=5
$$

The recovered law is

$$
S(t)=5\\sqrt{t}
$$

On day $9$:

$$
S(9)=5\\sqrt{9}
$$

$$
\\sqrt{9}=3
$$

$$
S(9)=5\\cdot 3=15
$$

On day $4$:

$$
S(4)=5\\sqrt{4}=5\\cdot 2=10
$$

The logged figure is the gap

$$
S(9)-S(4)=15-10=5
$$

Day $9$ carries $15$ MPa. The figure $5$ is that gap, not the strength on day $9$, so the statement is False.`,
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

Tip deflection follows $y(L)=A L^{k}$ millimetres. Two trusted levels determine the exponent, because their ratio cancels the coefficient. The trusted runs are $y(3)=18$ and $y(6)=72$.

The model is

$$
y(L)=A L^{k}
$$

The span doubles from $3$ m to $6$ m:

$$
\\frac{y(6)}{y(3)}=\\frac{A\\cdot 6^{k}}{A\\cdot 3^{k}}
$$

$$
\\frac{72}{18}=\\left(\\frac{6}{3}\\right)^{k}
$$

$$
4=2^{k}
$$

$$
2^{2}=4
$$

$$
2^{k}=2^{2}
$$

$$
k=2
$$

An exponent of $2$ is a square law. The shorter trusted span then pins $A$:

$$
A\\cdot 3^{2}=18
$$

$$
3^{2}=9
$$

$$
9A=18
$$

$$
A=2
$$

The recovered law is

$$
y(L)=2L^{2}
$$

The longer trusted run is reproduced:

$$
y(6)=2\\cdot 6^{2}=2\\cdot 36=72
$$

The two trusted spans are consistent with a square law, so the statement is True.`,
      `**B.** → True

The third run is a test point, so the prediction comes from the trusted law $y(L)=A L^{k}$ fitted to $y(3)=18$ and $y(6)=72$.

The model is

$$
y(L)=A L^{k}
$$

The trusted ratio cancels $A$:

$$
\\frac{y(6)}{y(3)}=\\frac{72}{18}=2^{k}
$$

$$
4=2^{k}
$$

$$
k=2
$$

The $3$ m run then pins $A$:

$$
A\\cdot 3^{2}=18
$$

$$
9A=18
$$

$$
A=2
$$

The recovered law is

$$
y(L)=2L^{2}
$$

Replay the longer trusted run: $y(6)=2\\cdot 36=72$. At nine metres:

$$
y(9)=2\\cdot 9^{2}
$$

$$
9^{2}=81
$$

$$
y(9)=2\\cdot 81=162
$$

The recorded third run is $150$ mm:

$$
162-150=12
$$

The recorded $150$ mm lies $12$ mm below the quadratic prediction, so the statement is True.`,
      `**C.** → False

Forcing the curve through the third run while keeping the exponent at $2$ replaces the coefficient. The trusted pair $y(3)=18$ and $y(6)=72$ first shows that the trusted exponent is $2$.

The trusted ratio:

$$
\\frac{y(6)}{y(3)}=\\frac{72}{18}=2^{k}
$$

$$
4=2^{k}
$$

$$
k=2
$$

The trusted law would be $y(L)=2L^{2}$, which already fits $y(3)=2\\cdot 9=18$. Now keep $k=2$ but force $y(9)=150$:

$$
A'\\cdot 9^{2}=150
$$

$$
9^{2}=81
$$

$$
81A'=150
$$

$$
A'=\\frac{150}{81}=\\frac{50}{27}
$$

The rescaled law is

$$
y'(L)=\\frac{50}{27}L^{2}
$$

At three metres:

$$
y'(3)=\\frac{50}{27}\\cdot 3^{2}
$$

$$
3^{2}=9
$$

$$
y'(3)=\\frac{50}{27}\\cdot 9=\\frac{50}{3}\\approx 16.67
$$

$$
\\frac{50}{3}\\neq 18
$$

The $3$ m reading moves from $18$ mm to about $16.67$ mm. A coefficient change rescales every level, so the statement is False.`,
      `**D.** → False

Fitting an exponent to a pair uses that pair's ratio, and this pair includes the suspect run $y(9)=150$ together with $y(3)=18$.

The model is

$$
y(L)=A L^{k}
$$

$$
\\frac{y(9)}{y(3)}=\\frac{A\\cdot 9^{k}}{A\\cdot 3^{k}}
$$

$$
\\frac{150}{18}=\\left(\\frac{9}{3}\\right)^{k}
$$

$$
\\frac{25}{3}=3^{k}
$$

Take logarithms:

$$
\\ln\\left(\\frac{25}{3}\\right)=k\\ln 3
$$

$$
k=\\frac{\\ln(\\frac{25}{3})}{\\ln 3}
$$

$$
\\frac{25}{3}\\approx 8.333
$$

$$
\\ln 8.333\\approx 2.120
$$

$$
\\ln 3\\approx 1.099
$$

$$
k\\approx\\frac{2.120}{1.099}\\approx 1.930
$$

An exact square across a threefold span would need the ratio $3^{2}=9$:

$$
\\frac{25}{3}\\approx 8.333\\neq 9
$$

The fitted exponent is about $1.930$, not exactly $2$, so the statement is False.`,
      `**E.** → False

A genuine power law returns the same exponent from every pair of its own points. Tip deflection is modelled as $y(L)=A L^{k}$, with trusted runs $y(3)=18$ and $y(6)=72$ and a third run $y(9)=150$.

The trusted pair:

$$
\\frac{72}{18}=2^{k}
$$

$$
4=2^{k}
$$

$$
k=2
$$

The $3$ m run then gives $A\\cdot 9=18$, so $A=2$ and $y(L)=2L^{2}$. The pair that uses the $9$ m run:

$$
\\frac{150}{18}=3^{k}
$$

$$
\\frac{25}{3}=3^{k}
$$

$$
k=\\frac{\\ln(\\frac{25}{3})}{\\ln 3}\\approx 1.930
$$

The two exponents do not match. The trusted law also predicts

$$
y(9)=2\\cdot 9^{2}=2\\cdot 81=162
$$

$$
162\\neq 150
$$

The third run does not sit on the same power law, so the statement is False.`,
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

Steel mass follows $M(h)=A h^{k}$ kilograms. A percentage rule is a ratio, so it fixes the exponent and cancels the coefficient. Lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$.

The model is

$$
M(h)=A h^{k}
$$

A $20\\%$ stretch is a height factor of $1.2$, and a $72.8\\%$ rise is a mass factor of $1.728$:

$$
\\frac{M(1.2h)}{M(h)}=\\frac{A(1.2h)^{k}}{A h^{k}}
$$

$$
\\frac{M(1.2h)}{M(h)}=1.2^{k}
$$

$$
1.2^{k}=1.728
$$

Check the cube of $1.2$:

$$
1.2^{2}=1.44
$$

$$
1.44\\cdot 1.2=1.728
$$

$$
1.2^{3}=1.728
$$

$$
k=3
$$

Mass scales with the cube of height, so the statement is True.`,
      `**B.** → True

A $12$ m mast is the $10$ m reference lengthened by $20\\%$, so the design note supplies the multiplier. Steel mass follows $M(h)=A h^{k}$, with a $20\\%$ stretch raising mass by $72.8\\%$ and $M(10)=500$.

The model is

$$
M(h)=A h^{k}
$$

The percentage rule recovers the exponent:

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

$$
1.2^{3}=1.728
$$

$$
k=3
$$

The $10$ m reference then pins $A$:

$$
A\\cdot 10^{3}=500
$$

$$
10^{3}=1000
$$

$$
1000A=500
$$

$$
A=\\frac{500}{1000}=0.5
$$

The recovered law is

$$
M(h)=0.5h^{3}
$$

At twelve metres, either route agrees:

$$
\\frac{12}{10}=1.2
$$

$$
M(12)=500\\cdot 1.728=864
$$

$$
12^{3}=1728
$$

$$
M(12)=0.5\\cdot 1728=864
$$

A $12$ m mast uses $864$ kg of steel, so the statement is True.`,
      `**C.** → False

The percentage rule is a quotient of two values of $M(h)=A h^{k}$, and a quotient loses the coefficient. Lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$.

The model is

$$
M(h)=A h^{k}
$$

$$
\\frac{M(1.2h)}{M(h)}=\\frac{A(1.2h)^{k}}{A h^{k}}
$$

$$
\\frac{M(1.2h)}{M(h)}=1.2^{k}
$$

$$
1.2^{k}=1.728
$$

The coefficient $A$ cancels, so every positive $A$ satisfies that note equally well. The family $M(h)=Ah^{3}$ stays one parameter free until the $500$ kg reference selects a level:

$$
A\\cdot 10^{3}=500
$$

$$
A=0.5
$$

Without that reference, $A$ cannot be read from the $20\\%$ rule. Scale information cannot substitute for a level, so the statement is False.`,
      `**D.** → True

A $10\\%$ increase is a height factor of $1.1$, and under the recovered cubic law the mass factor is that number cubed. Steel mass follows $M(h)=A h^{k}$, and a $20\\%$ stretch raising mass by $72.8\\%$ recovers $k$.

The model is

$$
M(h)=A h^{k}
$$

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

$$
1.2^{3}=1.728
$$

$$
k=3
$$

Now apply a $10\\%$ stretch:

$$
\\frac{M(1.1h)}{M(h)}=1.1^{3}
$$

$$
1.1^{2}=1.21
$$

$$
1.21\\cdot 1.1=1.331
$$

$$
\\frac{M(1.1h)-M(h)}{M(h)}=1.331-1
$$

$$
1.331-1=0.331=33.1\\%
$$

The rise is exactly $33.1\\%$, so the statement is True.`,
      `**E.** → False

A $20\\%$ stretch would raise mass by $20\\%$ only if the exponent were $1$. Steel mass follows $M(h)=A h^{k}$, and the design note says the stretch raises mass by $72.8\\%$.

The model is

$$
M(h)=A h^{k}
$$

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

$$
k=3
$$

$$
k=3\\neq 1
$$

Under exponent $1$ the mass factor would be $1.2$. The actual mass factor is $1.728$. A $20\\%$ height increase raises mass by $72.8\\%$, not by $20\\%$, so the statement is False.`,
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

Acoustic intensity follows $I(d)=A d^{-2}$ watts per square metre. Doubling distance multiplies intensity by $2^{-2}$, and the coefficient cancels. The meter reading at $2$ m is not needed for the scale factor.

$$
\\frac{I(2d)}{I(d)}=\\frac{A(2d)^{-2}}{A d^{-2}}
$$

$$
\\frac{I(2d)}{I(d)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The factor is one quarter at every starting distance. Doubling the distance cuts intensity to one quarter, so the statement is True.`,
      `**B.** → False

The exponent is $-2$, so the meter reading recovers the coefficient by multiplying intensity by the square of the distance. Intensity follows $I(d)=A d^{-2}$ watts per square metre, and the meter at $2$ metres records $0.72$ W/m$^{2}$.

The model is

$$
I(d)=A d^{-2}
$$

$$
I(2)=0.72
$$

$$
A\\cdot 2^{-2}=0.72
$$

$$
2^{2}=4
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
\\frac{A}{4}=0.72
$$

$$
A=0.72\\cdot 4=2.88
$$

The recovered law is

$$
I(d)=\\frac{2.88}{d^{2}}
$$

Replay the meter:

$$
I(2)=\\frac{2.88}{4}=0.72
$$

The claimed coefficient $1.44$ fails that same reading:

$$
\\frac{1.44}{2^{2}}=\\frac{1.44}{4}=0.36
$$

$$
0.36\\neq 0.72
$$

The figure $1.44$ is the reading multiplied by the distance $2$ rather than by its square $4$. The recovered coefficient is $2.88$, so the statement is False.`,
      `**C.** → True

An extra metre is the derivative of $I(d)=A d^{-2}$. The meter reading $I(2)=0.72$ recovers $A$ first.

The model is

$$
I(d)=A d^{-2}
$$

$$
A\\cdot 2^{-2}=0.72
$$

$$
\\frac{A}{4}=0.72
$$

$$
A=2.88
$$

The recovered law is

$$
I(d)=2.88\\, d^{-2}
$$

Differentiate:

$$
I'(d)=2.88\\cdot(-2)\\, d^{-3}
$$

$$
I'(d)=-5.76\\, d^{-3}
$$

The drop per metre is the absolute value. At two metres:

$$
|I'(2)|=\\frac{5.76}{2^{3}}
$$

$$
2^{3}=8
$$

$$
|I'(2)|=\\frac{5.76}{8}=0.72
$$

At six metres:

$$
|I'(6)|=\\frac{5.76}{6^{3}}
$$

$$
6^{3}=216
$$

$$
|I'(6)|=\\frac{5.76}{216}\\approx 0.0267
$$

Because $0.72>0.0267$, the drop per metre is steeper near the hub. An extra metre cuts more intensity at $2$ m than at $6$ m, so the statement is True.`,
      `**D.** → False

A cap on intensity is inverted for distance after the coefficient is known. Intensity follows $I(d)=A d^{-2}$, and the meter reading $I(2)=0.72$ recovers $A$. Night operations are capped at $0.08$ W/m$^{2}$.

The model is

$$
I(d)=A d^{-2}
$$

$$
A\\cdot 2^{-2}=0.72
$$

$$
2^{2}=4
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

The recovered law is

$$
I(d)=\\frac{2.88}{d^{2}}
$$

Set it equal to the night cap $0.08$:

$$
\\frac{2.88}{d^{2}}=0.08
$$

$$
d^{2}=\\frac{2.88}{0.08}
$$

$$
d^{2}=36
$$

$$
d=\\sqrt{36}=6
$$

Forward check at six metres:

$$
I(6)=\\frac{2.88}{6^{2}}=\\frac{2.88}{36}=0.08
$$

Six metres is the boundary, and the word above excludes a boundary value. The reading equals the night cap instead of exceeding it, so the statement is False.`,
      `**E.** → False

The night cap is a finite target on a strictly decreasing inverse-square law. Intensity follows $I(d)=A d^{-2}$, and the meter reading $I(2)=0.72$ recovers $A$.

The model is

$$
I(d)=A d^{-2}
$$

$$
A\\cdot 2^{-2}=0.72
$$

$$
\\frac{A}{4}=0.72
$$

$$
A=2.88
$$

The recovered law is

$$
I(d)=\\frac{2.88}{d^{2}}
$$

Set it equal to the night cap:

$$
\\frac{2.88}{d^{2}}=0.08
$$

$$
d^{2}=\\frac{2.88}{0.08}=36
$$

$$
d=\\sqrt{36}=6
$$

Because $A>0$ and the exponent $-2$ is negative, $I(d)$ falls from $I(2)=0.72$ toward $0$ and therefore crosses $0.08$ at a finite distance. The cap is met at $6$ m, so the statement is False.`,
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

Head follows $H(q)=A q^{2}$ metres, and jet speed is $v(H)=4\\sqrt{H}$ metres per second. The composition is $v(q)=v(H(q))$. The commissioning run $H(5)=50$ calibrates the first stage, since the exponent $2$ is given.

The pump stage is

$$
H(q)=A q^{2}
$$

$$
H(5)=50
$$

$$
A\\cdot 5^{2}=50
$$

$$
5^{2}=25
$$

$$
25A=50
$$

$$
A=\\frac{50}{25}=2
$$

The recovered pump law is

$$
H(q)=2q^{2}
$$

Compose with the nozzle $v(H)=4\\sqrt{H}$:

$$
v(q)=4\\sqrt{H(q)}
$$

$$
v(q)=4\\sqrt{2q^{2}}
$$

$$
v(q)=4\\sqrt{2}\\,|q|
$$

For $q>0$,

$$
v(q)=4\\sqrt{2}\\, q
$$

The inner exponent $2$ and the outer exponent $\\frac{1}{2}$ multiply to $1$:

$$
2\\cdot\\frac{1}{2}=1
$$

so the composition is linear through the origin. Jet speed is proportional to flow, so the statement is True.`,
      `**B.** → True

A composition can be evaluated stage by stage. Head follows $H(q)=A q^{2}$ with commissioning run $H(5)=50$, and jet speed is $v(H)=4\\sqrt{H}$.

The pump stage is

$$
H(q)=A q^{2}
$$

$$
A\\cdot 5^{2}=50
$$

$$
5^{2}=25
$$

$$
25A=50
$$

$$
A=2
$$

At the commissioning flow the head is already recorded:

$$
H(5)=50
$$

Pass that head through the nozzle:

$$
v=4\\sqrt{50}
$$

$$
50=25\\cdot 2
$$

$$
\\sqrt{50}=\\sqrt{25\\cdot 2}=5\\sqrt{2}
$$

$$
v=4\\cdot 5\\sqrt{2}=20\\sqrt{2}
$$

The composed law $v(q)=4\\sqrt{2}\\, q$ returns the same value:

$$
v(5)=4\\sqrt{2}\\cdot 5=20\\sqrt{2}
$$

Jet speed at the commissioning flow is $20\\sqrt{2}$ m/s, so the statement is True.`,
      `**C.** → False

Doubling flow multiplies head by $2^{2}$, and the coefficient cancels. Head follows $H(q)=A q^{2}$, so the commissioning run is not needed for the scale factor.

$$
\\frac{H(2q)}{H(q)}=\\frac{A(2q)^{2}}{A q^{2}}
$$

$$
\\frac{H(2q)}{H(q)}=2^{2}
$$

$$
\\frac{H(2q)}{H(q)}=4
$$

Head quadruples rather than doubles. An exact doubling of head would need exponent $1$. The composed jet speed does double, because the nozzle then takes a square root of that four, but the claim is about head, so the statement is False.`,
      `**D.** → False

Inverting the composed law is a single division by its slope. Head follows $H(q)=A q^{2}$ with $H(5)=50$, and jet speed is $v(H)=4\\sqrt{H}$.

The pump stage is

$$
H(q)=A q^{2}
$$

$$
A\\cdot 5^{2}=50
$$

$$
5^{2}=25
$$

$$
25A=50
$$

$$
A=2
$$

Compose the two stages:

$$
v(q)=4\\sqrt{H(q)}
$$

$$
v(q)=4\\sqrt{2q^{2}}
$$

$$
v(q)=4\\sqrt{2}\\, q
$$

Set jet speed equal to the target $40\\sqrt{2}$:

$$
4\\sqrt{2}\\, q=40\\sqrt{2}
$$

$$
q=\\frac{40\\sqrt{2}}{4\\sqrt{2}}
$$

$$
q=10
$$

A flow of $20$ m$^{3}$/h would deliver twice that speed:

$$
v(20)=4\\sqrt{2}\\cdot 20=80\\sqrt{2}
$$

$$
80\\sqrt{2}\\neq 40\\sqrt{2}
$$

The target speed needs $10$ m$^{3}$/h, so the statement is False.`,
      `**E.** → False

Proportionality between head and jet speed would mean a constant quotient. Head follows $H(q)=A q^{2}$ with commissioning run $H(5)=50$, and jet speed is $v(H)=4\\sqrt{H}$.

The pump stage is

$$
H(q)=A q^{2}
$$

$$
A\\cdot 5^{2}=50
$$

$$
A=2
$$

The recovered pump law is $H(q)=2q^{2}$. Compose with the nozzle:

$$
v=4\\sqrt{2q^{2}}=4\\sqrt{2}\\, q
$$

Eliminate the flow:

$$
q=\\frac{v}{4\\sqrt{2}}
$$

$$
H=2\\left(\\frac{v}{4\\sqrt{2}}\\right)^{2}
$$

$$
\\left(\\frac{v}{4\\sqrt{2}}\\right)^{2}=\\frac{v^{2}}{16\\cdot 2}=\\frac{v^{2}}{32}
$$

$$
H=2\\cdot\\frac{v^{2}}{32}=\\frac{v^{2}}{16}
$$

Head rises with the square of jet speed. At $v=20\\sqrt{2}$,

$$
(20\\sqrt{2})^{2}=400\\cdot 2=800
$$

$$
H=\\frac{800}{16}=50
$$

At $v=40\\sqrt{2}$,

$$
(40\\sqrt{2})^{2}=1600\\cdot 2=3200
$$

$$
H=\\frac{3200}{16}=200
$$

$$
\\frac{200}{50}=4
$$

Twice the speed gives four times the head, not twice the head. Head is not proportional to jet speed, so the statement is False.`,
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

Throughput follows $T(s)=A s^{0.5}$ pallets per hour. Doubling throughput is a scale factor $k$ on the crew with $k^{0.5}=2$. The logged shift is not needed for the factor, because the exponent is given.

$$
\\frac{T(ks)}{T(s)}=\\frac{A(ks)^{\\frac{1}{2}}}{A s^{\\frac{1}{2}}}
$$

$$
\\frac{T(ks)}{T(s)}=k^{\\frac{1}{2}}
$$

$$
k^{\\frac{1}{2}}=2
$$

$$
k=2^{2}=4
$$

An exact doubling of the crew would be $k=2$, which would only multiply throughput by $\\sqrt{2}\\approx 1.414$. The yard needs four times the crew, not twice. That is more than a doubling, so the statement is True.`,
      `**B.** → True

Throughput at the capped crew is a substitution after the coefficient is known. Throughput follows $T(s)=A s^{0.5}$ pallets per hour, and the logged shift with $16$ drivers moved $80$ pallets per hour.

The model is

$$
T(s)=A s^{\\frac{1}{2}}
$$

$$
T(16)=80
$$

$$
A\\cdot 16^{\\frac{1}{2}}=80
$$

Because $16=4^{2}$,

$$
16^{\\frac{1}{2}}=4
$$

$$
A\\cdot 4=80
$$

$$
A=\\frac{80}{4}=20
$$

Replay the logged shift:

$$
T(16)=20\\cdot 4=80
$$

The recovered law is

$$
T(s)=20 s^{\\frac{1}{2}}
$$

Safety rules cap the shift at $36$ drivers. At that crew:

$$
T(36)=20\\cdot 36^{\\frac{1}{2}}
$$

Because $36=6^{2}$,

$$
36^{\\frac{1}{2}}=6
$$

$$
T(36)=20\\cdot 6=120
$$

With $36$ drivers the model predicts $120$ pallets per hour, so the statement is True.`,
      `**C.** → False

Throughput per driver is the law divided by crew size, which subtracts $1$ from the exponent. Throughput follows $T(s)=A s^{0.5}$, and the logged shift $T(16)=80$ recovers $A$.

$$
A\\cdot 16^{0.5}=80
$$

$$
16^{0.5}=4
$$

$$
4A=80
$$

$$
A=20
$$

Divide the recovered law by crew size:

$$
\\frac{T(s)}{s}=\\frac{20 s^{\\frac{1}{2}}}{s}
$$

$$
\\frac{T(s)}{s}=20s^{\\frac{1}{2}-1}
$$

$$
\\frac{T(s)}{s}=20s^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so intensity falls as the crew grows. A rising intensity would need a positive leftover exponent. It does not rise, so the statement is False.`,
      `**D.** → False

A target of $150$ pallets per hour is inverted for crew size. Throughput follows $T(s)=A s^{0.5}$ pallets per hour, and the logged shift with $16$ drivers moved $80$ pallets per hour.

The model is

$$
T(s)=A s^{\\frac{1}{2}}
$$

$$
T(16)=80
$$

$$
A\\cdot 16^{\\frac{1}{2}}=80
$$

Because $16=4^{2}$,

$$
16^{\\frac{1}{2}}=4
$$

$$
A\\cdot 4=80
$$

$$
A=\\frac{80}{4}=20
$$

The recovered law is

$$
T(s)=20 s^{\\frac{1}{2}}
$$

Invert a target throughput $T$ by isolating the square root and squaring:

$$
20\\sqrt{s}=T
$$

$$
\\sqrt{s}=\\frac{T}{20}
$$

$$
s=\\left(\\frac{T}{20}\\right)^{2}
$$

For $T=150$:

$$
\\sqrt{s}=\\frac{150}{20}=7.5
$$

$$
s=7.5^{2}=56.25
$$

The required crew is $56.25$, which exceeds the cap of $36$. Even the capped shift delivers only

$$
T(36)=20\\sqrt{36}
$$

$$
36=6^{2}
$$

$$
\\sqrt{36}=6
$$

$$
T(36)=20\\cdot 6=120
$$

$$
120<150
$$

Reaching $150$ pallets per hour lies outside the safety cap, so the statement is False.`,
      `**E.** → True

Throughput has a positive coefficient and a positive exponent, so it increases with crew size. Throughput follows $T(s)=A s^{0.5}$, and the logged shift $T(16)=80$ recovers $A$.

The model is

$$
T(s)=A s^{\\frac{1}{2}}
$$

$$
A\\cdot 16^{\\frac{1}{2}}=80
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
A=20>0
$$

The exponent $0.5$ is positive, so for $0<s_{1}<s_{2}$,

$$
T(s_{1})=20\\sqrt{s_{1}}<20\\sqrt{s_{2}}=T(s_{2})
$$

The safety rule caps the shift at $36$ drivers. The largest admissible crew therefore produces the largest admissible output:

$$
T(36)=20\\sqrt{36}
$$

$$
\\sqrt{36}=6
$$

$$
T(36)=20\\cdot 6=120
$$

No legal crew can exceed $120$ pallets per hour. The safety cap on drivers is therefore also a cap on pallets moved per hour, so the statement is True.`,
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

Paid subscribers follow $q(p)=A p^{r}$. Quadrupling any price multiplies the subscriber count by one eighth, which cancels $A$ and isolates the exponent. The claim is that this exponent is smaller than minus one.

The scale rule is

$$
\\frac{q(4p)}{q(p)}=\\frac{A(4p)^{r}}{A p^{r}}
$$

$$
\\frac{q(4p)}{q(p)}=4^{r}
$$

$$
4^{r}=\\frac{1}{8}
$$

Both sides are powers of $4$, because $4^{\\frac{3}{2}}=8$:

$$
\\frac{1}{8}=4^{-\\frac{3}{2}}
$$

$$
r=-\\frac{3}{2}
$$

Minus three halves sits below minus one:

$$
-\\frac{3}{2}<-1
$$

A given price factor therefore cuts subscribers by more than that factor. Subscribers fall faster than the price rises, so the statement is True.`,
      `**B.** → True

Monthly revenue is price times the subscriber count, $R(p)=p\\,q(p)$, in thousands of euros. Demand follows $q(p)=A p^{r}$. Quadrupling any price multiplies subscribers by one eighth, and $q(4)=250$. The claim is the revenue at sixteen euros, so both constants must be recovered first.

The scale rule cancels $A$:

$$
\\frac{q(4p)}{q(p)}=\\frac{A(4p)^{r}}{A p^{r}}
$$

$$
\\frac{q(4p)}{q(p)}=4^{r}
$$

$$
4^{r}=\\frac{1}{8}
$$

Write $8$ as a power of $4$:

$$
8=4^{\\frac{3}{2}}
$$

$$
\\frac{1}{8}=4^{-\\frac{3}{2}}
$$

Equal bases force equal exponents:

$$
r=-\\frac{3}{2}
$$

The four-euro level then pins $A$:

$$
A\\cdot 4^{-\\frac{3}{2}}=250
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

Demand is $q(p)=2000p^{-\\frac{3}{2}}$, so revenue is

$$
R(p)=p\\cdot 2000p^{-\\frac{3}{2}}
$$

$$
R(p)=2000p^{-\\frac{1}{2}}
$$

At sixteen euros:

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

Revenue multiplies price by the demand law $q(p)=A p^{r}$. Quadrupling any price multiplies subscribers by one eighth, and $q(4)=250$. The claim is that the product $R(p)=pq(p)$ is itself a power of price, so both constants must be recovered first.

The scale rule cancels $A$:

$$
\\frac{q(4p)}{q(p)}=\\frac{A(4p)^{r}}{A p^{r}}
$$

$$
\\frac{q(4p)}{q(p)}=4^{r}
$$

$$
4^{r}=\\frac{1}{8}
$$

$$
8=4^{\\frac{3}{2}}
$$

$$
\\frac{1}{8}=4^{-\\frac{3}{2}}
$$

$$
r=-\\frac{3}{2}
$$

The four-euro count pins $A$:

$$
A\\cdot 4^{-\\frac{3}{2}}=250
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

Demand is $q(p)=2000p^{-\\frac{3}{2}}$. Multiplying by price adds one to the exponent:

$$
R(p)=p\\cdot 2000p^{-\\frac{3}{2}}
$$

$$
R(p)=2000p^{1-\\frac{3}{2}}
$$

$$
R(p)=2000p^{-\\frac{1}{2}}
$$

That is a monomial $A p^{s}$ with coefficient $2000$ and exponent $-\\frac{1}{2}$, so revenue is a power function of price, so the statement is True.`,
      `**D.** → False

Doubling monthly revenue from the recorded four-euro price is a scale factor $k$ on that price. Demand follows $q(p)=A p^{r}$. Quadrupling any price multiplies subscribers by one eighth, and $q(4)=250$. Both constants must be recovered before the scale factor can be read.

The scale rule cancels $A$:

$$
\\frac{q(4p)}{q(p)}=4^{r}
$$

$$
4^{r}=\\frac{1}{8}
$$

$$
8=4^{\\frac{3}{2}}
$$

$$
\\frac{1}{8}=4^{-\\frac{3}{2}}
$$

$$
r=-\\frac{3}{2}
$$

The four-euro level pins $A$:

$$
A\\cdot 4^{-\\frac{3}{2}}=250
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

Revenue is then $R(p)=p\\cdot 2000p^{-\\frac{3}{2}}=2000p^{-\\frac{1}{2}}$. At four euros:

$$
R(4)=2000\\cdot 4^{-\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
R(4)=\\frac{2000}{2}=1000
$$

Doubling that revenue means $R(4k)=2000$. The revenue scale factor is

$$
\\frac{R(4k)}{R(4)}=\\frac{2000(4k)^{-\\frac{1}{2}}}{2000\\cdot 4^{-\\frac{1}{2}}}
$$

$$
\\frac{R(4k)}{R(4)}=k^{-\\frac{1}{2}}
$$

$$
k^{-\\frac{1}{2}}=2
$$

$$
k^{\\frac{1}{2}}=\\frac{1}{2}
$$

$$
k=\\frac{1}{4}
$$

The price must be quartered, not halved. Halving would be $k=\\frac{1}{2}$:

$$
R(2)=2000\\cdot 2^{-\\frac{1}{2}}
$$

$$
R(2)=1000\\sqrt{2}\\approx 1414
$$

which is short of $2000$, so the statement is False.`,
      `**E.** → False

Nine euros is a third price at which to read monthly revenue $R(p)=pq(p)$. Demand follows $q(p)=A p^{r}$. Quadrupling any price multiplies subscribers by one eighth, and $q(4)=250$. Both constants must be recovered first.

The scale rule cancels $A$:

$$
\\frac{q(4p)}{q(p)}=4^{r}
$$

$$
4^{r}=\\frac{1}{8}
$$

$$
8=4^{\\frac{3}{2}}
$$

$$
\\frac{1}{8}=4^{-\\frac{3}{2}}
$$

$$
r=-\\frac{3}{2}
$$

The four-euro level pins $A$:

$$
A\\cdot 4^{-\\frac{3}{2}}=250
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

Six hundred and sixty-seven thousand euros sits above six hundred, not under, so the statement is False.`,
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

The monthly bill is $C(n)=F+A n^{\\frac{1}{2}}$ for $n\\ge 1$ branches. One hundred branches cost $700$ euros and four hundred cost $1000$. The claim is that the retainer keeps $C$ from being a power of $n$.

The square roots are integers, so the two invoices are

$$
F+10A=700
$$

$$
F+20A=1000
$$

Subtracting the first from the second cancels $F$:

$$
10A=300
$$

$$
A=30
$$

The hundred-branch invoice then pins the retainer:

$$
F+10\\cdot 30=700
$$

$$
F=400
$$

The recovered law is $C(n)=400+30n^{\\frac{1}{2}}$. A power $A n^{r}$ cannot carry a nonzero intercept, and $F=400\\neq 0$, so the statement is True.`,
      `**B.** → True

Nine hundred branches is a third size on $C(n)=F+A n^{\\frac{1}{2}}$. One hundred branches cost $700$ euros and four hundred cost $1000$. The claim is the nine-hundred-branch invoice, so both constants must be recovered first.

The hundred-branch square root is an integer:

$$
C(100)=F+A\\cdot 100^{\\frac{1}{2}}=700
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
F+10A=700
$$

The four-hundred-branch invoice is

$$
C(400)=F+A\\cdot 400^{\\frac{1}{2}}=1000
$$

$$
400^{\\frac{1}{2}}=20
$$

$$
F+20A=1000
$$

Subtracting cancels $F$:

$$
(F+20A)-(F+10A)=1000-700
$$

$$
10A=300
$$

$$
A=30
$$

Back-substitution pins the retainer:

$$
F+10\\cdot 30=700
$$

$$
F+300=700
$$

$$
F=400
$$

The recovered bill is $C(n)=400+30n^{\\frac{1}{2}}$. At nine hundred branches:

$$
900^{\\frac{1}{2}}=30
$$

$$
C(900)=400+30\\cdot 30
$$

$$
C(900)=400+900=1300
$$

The monthly bill is one thousand three hundred euros, so the statement is True.`,
      `**C.** → True

Average cost per branch is the monthly bill divided by $n$. The bill is $C(n)=F+A n^{\\frac{1}{2}}$, with $C(100)=700$ and $C(400)=1000$. The claim is that this average falls as the network grows.

The two invoices recover the constants:

$$
F+10A=700
$$

$$
F+20A=1000
$$

$$
10A=300
$$

$$
A=30
$$

$$
F=400
$$

Average cost is then

$$
\\frac{C(n)}{n}=\\frac{400}{n}+30n^{-\\frac{1}{2}}
$$

Both terms fall as $n$ rises. At the recorded sizes:

$$
\\frac{C(100)}{100}=\\frac{700}{100}=7
$$

$$
\\frac{C(400)}{400}=\\frac{1000}{400}=2.5
$$

A larger network is cheaper per branch, so the statement is True.`,
      `**D.** → False

Quadrupling the branch count from the recorded hundred-branch invoice is the move from $n=100$ to $n=400$. The bill is $C(n)=F+A n^{\\frac{1}{2}}$, and those two invoices are already on the sheet: $700$ euros and $1000$ euros.

If the whole bill doubled, the four-hundred-branch invoice would be

$$
2\\cdot 700=1400
$$

The recorded four-hundred-branch invoice is $1000$, not $1400$. Only the square-root term scales: quadrupling multiplies $n^{\\frac{1}{2}}$ by $2$, while the retainer stays put. Subtracting the invoices isolates that term:

$$
C(400)-C(100)=300
$$

which is the extra square-root charge, not another copy of the whole $700$. The bill rises from seven hundred to one thousand, not to one thousand four hundred, so the statement is False.`,
      `**E.** → False

Thirty-six branches is a clean square on $C(n)=F+A n^{\\frac{1}{2}}$. One hundred branches cost $700$ euros and four hundred cost $1000$. The claim compares the thirty-six-branch bill with that hundred-branch invoice, so both constants must be recovered first.

The hundred-branch invoice is

$$
C(100)=F+A\\cdot 100^{\\frac{1}{2}}=700
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
F+10A=700
$$

The four-hundred-branch invoice is

$$
C(400)=F+A\\cdot 400^{\\frac{1}{2}}=1000
$$

$$
400^{\\frac{1}{2}}=20
$$

$$
F+20A=1000
$$

Subtracting cancels $F$:

$$
10A=300
$$

$$
A=30
$$

$$
F+10\\cdot 30=700
$$

$$
F=400
$$

The recovered bill is $C(n)=400+30n^{\\frac{1}{2}}$. At thirty-six branches:

$$
36^{\\frac{1}{2}}=6
$$

$$
C(36)=400+30\\cdot 6
$$

$$
C(36)=400+180=580
$$

Five hundred and eighty euros is less than the hundred-branch invoice of seven hundred, so the statement is False.`,
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

Annual total cost is $T(q)=O(q)+H(q)$, with $O(q)=A q^{-1}$ and $H(q)=B q$. At a batch of forty units the two components each equal $120$ euros. The claim is that this crossing is where $T$ is smallest, so both coefficients must be recovered first.

The ordering level at forty units is

$$
O(40)=\\frac{A}{40}=120
$$

$$
A=120\\cdot 40=4800
$$

The holding level at forty units is

$$
H(40)=40B=120
$$

$$
B=\\frac{120}{40}=3
$$

The total is therefore

$$
T(q)=\\frac{4800}{q}+3q
$$

Differentiate term by term:

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

For every $q>0$ this is positive, so the critical point is a minimum. Nearby totals sit above the crossing:

$$
T(20)=\\frac{4800}{20}+3\\cdot 20
$$

$$
T(20)=240+60=300
$$

$$
T(80)=\\frac{4800}{80}+3\\cdot 80
$$

$$
T(80)=60+240=300
$$

both larger than $T(40)=240$. The meeting point is the minimum, so the statement is True.`,
      `**B.** → True

A batch of sixty units is a third size at which to read $T=O+H$. Ordering cost is $O(q)=A q^{-1}$ and holding cost is $H(q)=B q$. At forty units the two components each equal $120$ euros, so both coefficients must be recovered first.

The ordering level at forty units is

$$
\\frac{A}{40}=120
$$

$$
A=120\\cdot 40=4800
$$

The holding level at forty units is

$$
40B=120
$$

$$
B=\\frac{120}{40}=3
$$

The total is $T(q)=\\frac{4800}{q}+3q$. At sixty units the two pieces are

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

Doubling any batch size is the map $q\\mapsto 2q$ on $T=O+H$. Ordering cost is $A q^{-1}$ and holding cost is $B q$. At forty units the two components each equal $120$ euros, so both coefficients must be recovered first.

The ordering level at forty units is

$$
\\frac{A}{40}=120
$$

$$
A=4800
$$

The holding level at forty units is

$$
40B=120
$$

$$
B=3
$$

At the recorded batch the total is

$$
T(40)=120+120=240
$$

Doubling in the formula, not just at this one size, gives

$$
T(2q)=\\frac{4800}{2q}+3\\cdot(2q)
$$

$$
T(2q)=\\frac{2400}{q}+6q
$$

which is not $T(q)$. At eighty units the pieces are

$$
O(80)=\\frac{4800}{80}=60
$$

$$
H(80)=3\\cdot 80=240
$$

$$
T(80)=60+240=300
$$

The total rises from $240$ to $300$, so it is not unchanged. Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing, so the statement is False.`,
      `**D.** → True

Cutting the batch from forty to twenty, and raising it from forty to eighty, are two moves on $T=O+H$. Ordering cost is $A q^{-1}$ and holding cost is $B q$. At forty units the two components each equal $120$ euros, so both coefficients must be recovered first.

The ordering level at forty units is

$$
\\frac{A}{40}=120
$$

$$
A=4800
$$

The holding level at forty units is

$$
40B=120
$$

$$
B=3
$$

The total is $T(q)=\\frac{4800}{q}+3q$. At the recorded crossing:

$$
T(40)=120+120=240
$$

The product of the two new sizes is

$$
20\\cdot 80=1600
$$

so they are a reciprocal pair for this model. Substituting each size:

$$
T(20)=\\frac{4800}{20}+3\\cdot 20
$$

$$
T(20)=240+60=300
$$

$$
T(80)=\\frac{4800}{80}+3\\cdot 80
$$

$$
T(80)=60+240=300
$$

Each move therefore raises the annual total by $60$ euros, so the two moves cost the same, so the statement is True.`,
      `**E.** → False

Eighty units sits above the recorded crossing of ordering and holding cost. Ordering cost is $O(q)=A q^{-1}$ and holding cost is $H(q)=B q$. At forty units the two components each equal $120$ euros, so both coefficients must be recovered first.

The ordering level at forty units is

$$
\\frac{A}{40}=120
$$

$$
A=4800
$$

The holding level at forty units is

$$
40B=120
$$

$$
B=3
$$

At eighty units the ordering term is

$$
O(80)=\\frac{4800}{80}
$$

$$
O(80)=60
$$

and the holding term is

$$
H(80)=3\\cdot 80=240
$$

Ordering cost is sixty euros. The claim's threshold is $200$, and

$$
60<200
$$

Holding is the large term on this side of the crossing, so the statement is False.`,
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

Output follows $Q(L)=A L^{r}$. Sixteen hours produce $96$ units and eighty-one hours produce $324$. Average product is $Q(L)/L$. The claim is that this quotient is a power of $L$, but not with the same exponent as output.

The ratio of the two shifts cancels $A$:

$$
\\frac{Q(81)}{Q(16)}=\\frac{324}{96}=\\frac{27}{8}
$$

$$
\\frac{27}{8}=\\left(\\frac{81}{16}\\right)^{r}
$$

$$
\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}
$$

$$
\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}
$$

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\frac{3}{2}\\right)^{4r}
$$

$$
4r=3
$$

$$
r=\\frac{3}{4}
$$

Dividing output by labour subtracts one from that exponent:

$$
\\frac{Q(L)}{L}=A L^{\\frac{3}{4}-1}=A L^{-\\frac{1}{4}}
$$

The exponents $\\frac{3}{4}$ and $-\\frac{1}{4}$ differ, so the statement is True.`,
      `**B.** → True

Average product at sixteen hours is the recorded output divided by those hours. Sixteen hours produce $96$ units, so

$$
\\frac{Q(16)}{16}=\\frac{96}{16}
$$

$$
\\frac{96}{16}=6
$$

Six is under seven. The same figure comes from the recovered law. The shift ratio gives $r=\\frac{3}{4}$, and $16^{\\frac{3}{4}}=8$ pins $A=12$, so average product is $12L^{-\\frac{1}{4}}$:

$$
16^{\\frac{1}{4}}=2
$$

$$
12\\cdot 16^{-\\frac{1}{4}}=\\frac{12}{2}=6
$$

Average product at sixteen hours is $6$ units an hour, which is under $7$, so the statement is True.`,
      `**C.** → False

Doubling output is a labour factor $k$ with $k^{r}=2$. Output follows $Q(L)=A L^{r}$. Sixteen hours produce $96$ units and eighty-one hours produce $324$. The exponent must be recovered first.

The ratio of the two shifts cancels $A$:

$$
\\frac{Q(81)}{Q(16)}=\\frac{A\\cdot 81^{r}}{A\\cdot 16^{r}}
$$

$$
\\frac{324}{96}=\\left(\\frac{81}{16}\\right)^{r}
$$

$$
\\frac{324}{96}=\\frac{27}{8}
$$

$$
\\frac{81}{16}=\\left(\\frac{3}{2}\\right)^{4}
$$

$$
\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}
$$

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\left(\\frac{3}{2}\\right)^{4}\\right)^{r}=\\left(\\frac{3}{2}\\right)^{4r}
$$

Equal bases force equal exponents:

$$
4r=3
$$

$$
r=\\frac{3}{4}
$$

The labour factor that doubles output then solves

$$
k^{\\frac{3}{4}}=2
$$

$$
k=2^{\\frac{4}{3}}\\approx 2.52
$$

She must more than double the hours. Doubling labour would multiply output by

$$
2^{\\frac{3}{4}}\\approx 1.68
$$

which is short of $2$, so the statement is False.`,
      `**D.** → True

Average product is $Q(L)/L$ on the power $Q(L)=A L^{r}$. Sixteen hours produce $96$ units and eighty-one hours produce $324$. The claim is that this average falls as $L$ rises.

The shift ratio isolates $r$:

$$
\\frac{324}{96}=\\left(\\frac{81}{16}\\right)^{r}
$$

$$
\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{4r}
$$

$$
r=\\frac{3}{4}
$$

Dividing by labour subtracts one:

$$
\\frac{Q(L)}{L}=A L^{-\\frac{1}{4}}
$$

The exponent $-\\frac{1}{4}$ is negative, so the quotient falls as $L$ grows. At the two recorded shifts:

$$
\\frac{96}{16}=6
$$

$$
\\frac{324}{81}=4
$$

Average product drops from $6$ to $4$, so the statement is True.`,
      `**E.** → False

Average product at eighty-one hours divides the second recorded output by those hours. Eighty-one hours produce $324$ units, so

$$
\\frac{Q(81)}{81}=\\frac{324}{81}
$$

$$
\\frac{324}{81}=4
$$

The figure $6$ is the sixteen-hour average:

$$
\\frac{Q(16)}{16}=\\frac{96}{16}=6
$$

and $4\\neq 6$. The recovered law agrees: $r=\\frac{3}{4}$ and $A=12$ give $12\\cdot 81^{-\\frac{1}{4}}$, and $81^{\\frac{1}{4}}=3$, so

$$
\\frac{12}{3}=4
$$

Average product at eighty-one hours is $4$ units an hour, not $6$, so the statement is False.`,
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

Unit time is $t(n)=F+A n^{-\\frac{1}{2}}$. After twenty-five units the next unit takes $18$ minutes, and after one hundred it takes $13$. The claim is that $t(n)$ approaches the handling floor and never reaches it.

The square roots $5$ and $10$ turn the timings into

$$
F+\\frac{A}{5}=18
$$

$$
F+\\frac{A}{10}=13
$$

Subtracting cancels $F$:

$$
\\frac{A}{10}=5
$$

$$
A=50
$$

$$
F+10=18
$$

$$
F=8
$$

The recovered law is $t(n)=8+50n^{-\\frac{1}{2}}$. As $n$ grows:

$$
\\lim_{n\\to\\infty}t(n)=8
$$

No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the floor is approached and never attained, so the statement is True.`,
      `**B.** → True

A ten-minute target on $t(n)=F+A n^{-\\frac{1}{2}}$ is an inequality for $n$. After twenty-five units the next unit takes $18$ minutes, and after one hundred it takes $13$. Both constants must be recovered first.

The twenty-five-unit timing is

$$
t(25)=F+A\\cdot 25^{-\\frac{1}{2}}=18
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
F+\\frac{A}{5}=18
$$

The hundred-unit timing is

$$
t(100)=F+A\\cdot 100^{-\\frac{1}{2}}=13
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
F+\\frac{A}{10}=13
$$

Subtracting cancels $F$:

$$
\\frac{A}{5}-\\frac{A}{10}=18-13
$$

$$
\\frac{A}{10}=5
$$

$$
A=50
$$

$$
F+\\frac{50}{5}=18
$$

$$
F+10=18
$$

$$
F=8
$$

The recovered law is $t(n)=8+50n^{-\\frac{1}{2}}$. The time falls below ten minutes when

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

At $n=625$ the time is exactly $8+\\frac{50}{25}=10$ minutes, and it drops below only afterwards, so the statement is True.`,
      `**C.** → True

The learning component is the power $A n^{-\\frac{1}{2}}$ on top of the floor. After twenty-five units the next unit takes $18$ minutes, and after one hundred it takes $13$. Quadrupling $n$ multiplies that power by $4^{-\\frac{1}{2}}$.

The exponent rule is

$$
\\frac{A(4n)^{-\\frac{1}{2}}}{A n^{-\\frac{1}{2}}}=4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

The recorded pair is itself a quadrupling, from $25$ to $100$. Subtracting the timings isolates the learning term:

$$
\\frac{A}{5}=18-F
$$

$$
\\frac{A}{10}=13-F
$$

$$
\\frac{A}{10}=5
$$

$$
A=50
$$

so the two learning pieces are

$$
\\frac{50}{\\sqrt{25}}=10
$$

$$
\\frac{50}{\\sqrt{100}}=5
$$

The learning component halves, so the statement is True.`,
      `**D.** → False

Quadrupling cumulative output from twenty-five to one hundred is the recorded pair of timings on $t(n)=F+A n^{-\\frac{1}{2}}$. After twenty-five units the next unit takes $18$ minutes, and after one hundred it takes $13$.

If the whole unit time halved, the second timing would be

$$
\\frac{18}{2}=9
$$

The recorded second timing is $13$, not $9$. The two timings recover $A=50$ and $F=8$, so

$$
t(25)=8+10=18
$$

$$
t(100)=8+5=13
$$

The learning term halves, but the eight-minute floor does not scale, and that floor dilutes the gain in the total, so the statement is False.`,
      `**E.** → False

Four cumulative units is a small $n$ on $t(n)=F+A n^{-\\frac{1}{2}}$. After twenty-five units the next unit takes $18$ minutes, and after one hundred it takes $13$. Both constants must be recovered first.

The twenty-five-unit timing is

$$
F+A\\cdot 25^{-\\frac{1}{2}}=18
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
F+\\frac{A}{5}=18
$$

The hundred-unit timing is

$$
F+A\\cdot 100^{-\\frac{1}{2}}=13
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
F+\\frac{A}{10}=13
$$

Subtracting cancels $F$:

$$
\\frac{A}{10}=5
$$

$$
A=50
$$

$$
F+10=18
$$

$$
F=8
$$

The recovered law is $t(n)=8+50n^{-\\frac{1}{2}}$. At four units:

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

Proportionality would mean revenue is a constant times feed, so exponent $1$. Harvest revenue follows $R(x)=A x^{\\frac{2}{3}}$, and at eight tonnes the revenue is $360$ thousand euros.

The eight-tonne reading pins $A$:

$$
A\\cdot 8^{\\frac{2}{3}}=360
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
4A=360
$$

$$
A=90
$$

The recovered law is $R(x)=90x^{\\frac{2}{3}}$. The exponent $\\frac{2}{3}$ is not $1$. Doubling feed therefore multiplies revenue by

$$
\\frac{R(2x)}{R(x)}=2^{\\frac{2}{3}}\\approx 1.59
$$

not by $2$, so the statement is False.`,
      `**B.** → True

Break-even is the positive root of harvest revenue against feed cost. Revenue is $R(x)=A x^{\\frac{2}{3}}$ and cost is $C(x)=30x$. At eight tonnes, revenue is $360$ thousand euros, so the coefficient must be recovered first.

The eight-tonne reading is

$$
A\\cdot 8^{\\frac{2}{3}}=360
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
4A=360
$$

$$
A=90
$$

The recovered law is $R(x)=90x^{\\frac{2}{3}}$. Set revenue equal to cost:

$$
90x^{\\frac{2}{3}}=30x
$$

Divide by $30x^{\\frac{2}{3}}$ for $x>0$:

$$
3=x^{1-\\frac{2}{3}}
$$

$$
3=x^{\\frac{1}{3}}
$$

$$
x=27
$$

Both sides at twenty-seven tonnes are

$$
R(27)=90\\cdot 27^{\\frac{2}{3}}
$$

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

An extra tonne of feed adds the derivative of harvest revenue. Revenue is $R(x)=A x^{\\frac{2}{3}}$, and at eight tonnes the revenue is $360$ thousand euros, so the coefficient must be recovered first.

The eight-tonne reading is

$$
A\\cdot 8^{\\frac{2}{3}}=360
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
4A=360
$$

$$
A=90
$$

The recovered law is $R(x)=90x^{\\frac{2}{3}}$. Differentiate:

$$
R'(x)=90\\cdot\\frac{2}{3}x^{\\frac{2}{3}-1}
$$

$$
R'(x)=60x^{-\\frac{1}{3}}
$$

At eight tonnes, $8^{\\frac{1}{3}}=2$:

$$
R'(8)=60\\cdot 8^{-\\frac{1}{3}}
$$

$$
R'(8)=\\frac{60}{2}=30
$$

At twenty-seven tonnes, $27^{\\frac{1}{3}}=3$:

$$
R'(27)=60\\cdot 27^{-\\frac{1}{3}}
$$

$$
R'(27)=\\frac{60}{3}=20
$$

The extra tonne adds $20$ after twenty-seven tonnes, which is less than the $30$ it adds after eight, so the statement is False.`,
      `**D.** → True

Cost overtakes revenue once the linear schedule $C(x)=30x$ passes the recovered harvest $R(x)=A x^{\\frac{2}{3}}$. At eight tonnes, revenue is $360$ thousand euros, so the coefficient must be recovered first.

The eight-tonne reading is

$$
A\\cdot 8^{\\frac{2}{3}}=360
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
A=90
$$

The recovered law is $R(x)=90x^{\\frac{2}{3}}$. The ratio of revenue to cost is

$$
\\frac{R(x)}{C(x)}=\\frac{90x^{\\frac{2}{3}}}{30x}
$$

$$
\\frac{R(x)}{C(x)}=\\frac{3}{x^{\\frac{1}{3}}}
$$

This ratio equals $1$ when $x^{\\frac{1}{3}}=3$, so $x=27$. For every $x>27$ the cube root exceeds $3$, so the ratio is strictly less than $1$. A check at sixty-four tonnes:

$$
64^{\\frac{2}{3}}=16
$$

$$
R(64)=90\\cdot 16=1440
$$

$$
C(64)=30\\cdot 64=1920
$$

Cost stays ahead, and the gap widens as $x$ grows, so feeding still more cannot restore a surplus, so the statement is True.`,
      `**E.** → True

Profit at eight tonnes is harvest revenue minus the given feed cost. Revenue at eight tonnes is recorded as $360$ thousand euros, and cost is $C(x)=30x$.

The cost at eight tonnes is

$$
C(8)=30\\cdot 8
$$

$$
C(8)=240
$$

The season's surplus is

$$
P(8)=R(8)-C(8)
$$

$$
P(8)=360-240=120
$$

One hundred and twenty thousand euros exceeds one hundred, because $120>100$, so the statement is True.`,
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

The multiplier of a power $f(x)=A x^{\\frac{3}{2}}$ is the input factor raised to the given exponent, and $A$ cancels. The claim is that a factor of $4$ on the index multiplies cost by $4$.

The scale rule is

$$
\\frac{f(4x)}{f(x)}=\\frac{A(4x)^{\\frac{3}{2}}}{A x^{\\frac{3}{2}}}
$$

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

Index nine is a third size on $f(x)=A x^{\\frac{3}{2}}$. The individual daily figures were lost; the surviving record is that cost at index sixteen exceeds cost at index four by $336$ euros. The coefficient must be recovered from that difference first.

The difference factors $A$:

$$
f(16)-f(4)=A\\cdot 16^{\\frac{3}{2}}-A\\cdot 4^{\\frac{3}{2}}
$$

$$
A\\left(16^{\\frac{3}{2}}-4^{\\frac{3}{2}}\\right)=336
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
A(64-8)=336
$$

$$
56A=336
$$

$$
A=6
$$

A check of the lost levels: $f(4)=6\\cdot 8=48$ and $f(16)=6\\cdot 64=384$, and $384-48=336$. The recovered law is $f(x)=6x^{\\frac{3}{2}}$. At index nine:

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
f(9)=6\\cdot 27=162
$$

Handling cost at index nine is one hundred and sixty-two euros, so the statement is True.`,
      `**C.** → True

Handling cost follows $f(x)=A x^{\\frac{3}{2}}$. The given exponent $\\frac{3}{2}$ is larger than one, so cost grows faster than the pallet-volume index.

The surviving difference recovers $A$ and makes the same point in levels. From $f(16)-f(4)=336$:

$$
A\\left(64-8\\right)=336
$$

$$
A=6
$$

The two recovered levels are

$$
f(4)=6\\cdot 8=48
$$

$$
f(16)=6\\cdot 64=384
$$

$$
\\frac{f(16)}{f(4)}=\\frac{384}{48}=8
$$

The index rose fourfold and cost rose eightfold, which is faster than the index, so the statement is True.`,
      `**D.** → False

Equal gaps in cost would be a linear rule, exponent $1$. Handling cost follows $f(x)=A x^{\\frac{3}{2}}$, and $f(16)-f(4)=336$ recovers $A=6$, so $f(x)=6x^{\\frac{3}{2}}$.

The first derivative is

$$
f'(x)=9x^{\\frac{1}{2}}
$$

which itself rises with $x$. Two equal index steps therefore cannot add the same euros. The recovered levels already disagree with a constant slope: the recorded gap of $12$ in the index costs $336$, or $28$ euros per index unit, while

$$
f(9)=162
$$

$$
f(4)=48
$$

$$
f(9)-f(4)=114
$$

over a gap of $5$, or $22.8$ euros per index unit. Equal index gaps do not produce equal cost gaps, so the statement is False.`,
      `**E.** → False

The difference $f(25)-f(9)$ is a pair of levels on $f(x)=A x^{\\frac{3}{2}}$. The surviving record $f(16)-f(4)=336$ recovers the coefficient first.

$$
A\\left(16^{\\frac{3}{2}}-4^{\\frac{3}{2}}\\right)=336
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
A(64-8)=336
$$

$$
56A=336
$$

$$
A=6
$$

The recovered law is $f(x)=6x^{\\frac{3}{2}}$. The two new levels are

$$
25^{\\frac{1}{2}}=5
$$

$$
25^{\\frac{3}{2}}=125
$$

$$
f(25)=6\\cdot 125=750
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
f(9)=6\\cdot 27=162
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

Inverting a power with a nonzero exponent produces another power. Load follows $W(s)=A s^{\\frac{3}{2}}$, and at scale nine the daily load is $135$ kilograms. The claim is that the scale needed for a given load is itself a power of that load, so the coefficient must be recovered first.

The recorded load is

$$
A\\cdot 9^{\\frac{3}{2}}=135
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
27A=135
$$

$$
A=5
$$

The recovered law is $W=5s^{\\frac{3}{2}}$. The general inversion of $W=A s^{r}$ with $r=\\frac{3}{2}$ is

$$
s=\\left(\\frac{W}{A}\\right)^{\\frac{1}{r}}=\\left(\\frac{W}{A}\\right)^{\\frac{2}{3}}
$$

Divide the recovered law by $5$:

$$
s^{\\frac{3}{2}}=\\frac{W}{5}
$$

Raise both sides to the power $\\frac{2}{3}$:

$$
s=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}}
$$

$$
s=5^{-\\frac{2}{3}}W^{\\frac{2}{3}}
$$

Scale is a power of load with coefficient $5^{-\\frac{2}{3}}$ and exponent $\\frac{2}{3}$, so the statement is True.`,
      `**B.** → True

The permit ceiling is an equation once the recovered load is pushed to $320$ kilograms. Load follows $W(s)=A s^{\\frac{3}{2}}$, and at scale nine the daily load is $135$ kilograms. The coefficient must be recovered first.

The recorded load is

$$
A\\cdot 9^{\\frac{3}{2}}=135
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
27A=135
$$

$$
A=5
$$

The recovered law is $W(s)=5s^{\\frac{3}{2}}$. At the ceiling:

$$
5s^{\\frac{3}{2}}=320
$$

$$
s^{\\frac{3}{2}}=\\frac{320}{5}
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

A forward check:

$$
W(16)=5\\cdot 16^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
W(16)=5\\cdot 64=320
$$

The exponent $\\frac{3}{2}$ is positive, so every larger index breaches the permit. The largest admissible scale is sixteen, so the statement is True.`,
      `**C.** → False

Doubling the permit ceiling is a factor of $2$ on the inverted load. Load follows $W(s)=A s^{\\frac{3}{2}}$, and at scale nine the daily load is $135$ kilograms. The present ceiling is $320$ kilograms, so the coefficient must be recovered first.

The recorded load is

$$
A\\cdot 9^{\\frac{3}{2}}=135
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
A=5
$$

The inverse is $s=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}}$. At the present ceiling:

$$
s=\\left(\\frac{320}{5}\\right)^{\\frac{2}{3}}
$$

$$
s=64^{\\frac{2}{3}}=16
$$

Doubling the ceiling to $640$ kilograms:

$$
s=\\left(\\frac{640}{5}\\right)^{\\frac{2}{3}}
$$

$$
s=128^{\\frac{2}{3}}
$$

A factor of $2$ on the load moves the scale by $2^{\\frac{2}{3}}$:

$$
\\frac{s(640)}{s(320)}=2^{\\frac{2}{3}}\\approx 1.59
$$

$$
16\\cdot 2^{\\frac{2}{3}}\\approx 25.40
$$

Doubling the scale would require $s=32$. The inverse exponent $\\frac{2}{3}$ is smaller than one, so permitted scale grows more slowly than the permitted load, so the statement is False.`,
      `**D.** → False

The coefficient enters the inverse under the exponent $\\frac{2}{3}$. Load follows $W(s)=A s^{\\frac{3}{2}}$, and at scale nine the daily load is $135$ kilograms. The ceiling is $320$ kilograms, so the original coefficient must be recovered first.

The recorded load is

$$
A\\cdot 9^{\\frac{3}{2}}=135
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
27A=135
$$

$$
A=5
$$

Under the same ceiling, the admissible scale is

$$
5s^{\\frac{3}{2}}=320
$$

$$
s^{\\frac{3}{2}}=64
$$

$$
s=16
$$

Doubling the coefficient to $10$ gives

$$
10s^{\\frac{3}{2}}=320
$$

$$
s^{\\frac{3}{2}}=32
$$

$$
s=32^{\\frac{2}{3}}
$$

$$
s\\approx 10.08
$$

Halving would require $s=8$. The scale factor is

$$
\\frac{s_{2}}{s_{1}}=2^{-\\frac{2}{3}}\\approx 0.63
$$

not $\\frac{1}{2}$, so the statement is False.`,
      `**E.** → True

Scale four is a clean square on $W(s)=A s^{\\frac{3}{2}}$. At scale nine the daily load is $135$ kilograms, so the coefficient must be recovered first.

The recorded load is

$$
A\\cdot 9^{\\frac{3}{2}}=135
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
27A=135
$$

$$
A=5
$$

The recovered law is $W(s)=5s^{\\frac{3}{2}}$. At scale four:

$$
4^{\\frac{1}{2}}=2
$$

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

Demand follows $q(p)=A p^{-2}$. A twenty-five percent tariff rise is the factor $\\frac{5}{4}$. The elasticity shortcut predicts a percentage change of minus two times that rise. The exact change raises the tariff factor to the exponent $-2$.

The shortcut is

$$
-2\\times 25\\%=-50\\%
$$

The exact multiplier cancels $A$:

$$
\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}=0.64
$$

Demand keeps $64\\%$ of its level, a cut of $36\\%$, not one half. The shortcut cuts by one half and the exact power does not, so the statement is False.`,
      `**B.** → True

A twenty-five percent tariff rise from the recorded three euros sends the tariff to $3.75$ euros. Demand follows $q(p)=A p^{-2}$, and $q(3)=4000$ occupied spaces. The coefficient must be recovered first.

The recorded pair is

$$
A\\cdot 3^{-2}=4000
$$

$$
3^{2}=9
$$

$$
\\frac{A}{9}=4000
$$

$$
A=36000
$$

A forward check of the recorded pair:

$$
q(3)=\\frac{36000}{9}=4000
$$

The recovered law is $q(p)=36000p^{-2}$. The new tariff is

$$
3\\cdot\\frac{5}{4}=\\frac{15}{4}
$$

$$
\\frac{15}{4}=3.75
$$

$$
\\left(\\frac{15}{4}\\right)^{2}=\\frac{225}{16}=14.0625
$$

$$
q(3.75)=\\frac{36000}{\\frac{225}{16}}
$$

$$
q(3.75)=36000\\cdot\\frac{16}{225}
$$

$$
q(3.75)=2560
$$

Two thousand five hundred and sixty exceeds two thousand five hundred, so the statement is True.`,
      `**C.** → True

The elasticity shortcut and the exact power disagree on a twenty-five percent tariff rise. Demand follows $q(p)=A p^{-2}$, so the exact multiplier is the tariff factor to the power $-2$.

The shortcut predicts

$$
-2\\times 25\\%=-50\\%
$$

a $50\\%$ loss. The exact factor is

$$
\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}=0.64
$$

$$
1-0.64=0.36
$$

a $36\\%$ loss. A predicted $50\\%$ against a true $36\\%$ overstates the loss by fourteen percentage points, so the statement is True.`,
      `**D.** → False

A twenty-five percent cut is the factor $\\frac{3}{4}$, while a twenty-five percent rise is the factor $\\frac{5}{4}$. Demand follows $q(p)=A p^{-2}$, so each percentage change is the corresponding factor to the power $-2$, minus one.

The rise multiplies demand by

$$
\\left(\\frac{5}{4}\\right)^{-2}=\\left(\\frac{4}{5}\\right)^{2}
$$

$$
\\left(\\frac{4}{5}\\right)^{2}=\\frac{16}{25}=0.64
$$

$$
1-\\frac{16}{25}=\\frac{9}{25}=0.36
$$

a $36\\%$ loss. The cut multiplies demand by

$$
\\left(\\frac{3}{4}\\right)^{-2}=\\left(\\frac{4}{3}\\right)^{2}
$$

$$
\\left(\\frac{4}{3}\\right)^{2}=\\frac{16}{9}
$$

$$
\\frac{16}{9}-1=\\frac{7}{9}\\approx 0.778
$$

a rise of about $77.8\\%$. Equal percentage changes would require those two results to match, but

$$
\\frac{7}{9}\\neq\\frac{9}{25}
$$

The two percentages are not the same, so the statement is False.`,
      `**E.** → True

Two euros is a second tariff at which to read $q(p)=A p^{-2}$. The authority records $q(3)=4000$ occupied spaces, so the coefficient must be recovered first.

The recorded pair is

$$
A\\cdot 3^{-2}=4000
$$

$$
3^{2}=9
$$

$$
\\frac{A}{9}=4000
$$

$$
A=36000
$$

The recovered law is $q(p)=36000p^{-2}$. At two euros:

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

Mass follows $M(h)=A h^{3}$. A height multiplier acts through the exponent three, and the coefficient cancels. The claim is that doubling height multiplies mass by eight.

The scale rule is

$$
\\frac{M(2h)}{M(h)}=\\frac{A(2h)^{3}}{A h^{3}}
$$

$$
\\frac{M(2h)}{M(h)}=2^{3}
$$

$$
(2h)^{3}=2^{3}h^{3}
$$

$$
2^{3}=8
$$

Geometric similarity fixes the exponent at three, so every doubling of height multiplies mass by eight. The half-metre weighing is not needed for this factor, so the statement is True.`,
      `**B.** → True

A bell of height $1.5$ m is a second size on $M(h)=A h^{3}$. A finished bell of height one half metre was weighed at $30$ kilograms, so the coefficient must be recovered first.

The weighing is

$$
A\\left(\\frac{1}{2}\\right)^{3}=30
$$

$$
\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}
$$

$$
A\\cdot\\frac{1}{8}=30
$$

$$
A=240
$$

The recovered law is $M(h)=240h^{3}$. At one and a half metres, write $1.5=\\frac{3}{2}$:

$$
\\left(\\frac{3}{2}\\right)^{3}=\\frac{27}{8}
$$

$$
M\\!\\left(\\frac{3}{2}\\right)=240\\cdot\\frac{27}{8}
$$

$$
240\\cdot\\frac{27}{8}=30\\cdot 27
$$

$$
M\\!\\left(\\frac{3}{2}\\right)=810
$$

The same figure is the scale factor from the half-metre bell:

$$
\\frac{1.5}{0.5}=3
$$

$$
3^{3}=27
$$

$$
27\\times 30=810
$$

The mass is eight hundred and ten kilograms, so the statement is True.`,
      `**C.** → False

Tripling the height feeds a factor of three into the exponent three. Mass follows $M(h)=A h^{3}$, so the coefficient cancels.

The scale rule is

$$
\\frac{M(3h)}{M(h)}=\\frac{A(3h)^{3}}{A h^{3}}
$$

$$
\\frac{M(3h)}{M(h)}=3^{3}
$$

$$
3^{3}=27
$$

The taller bell has twenty-seven times the mass, not three times. The recorded half-metre weighing and the one-and-a-half-metre mass make the same point in kilograms: $1.5$ is three times $0.5$, and $27\\times 30=810$, not $3\\times 30=90$, so the statement is False.`,
      `**D.** → False

Mass per metre of height is $M(h)/h$. Mass follows $M(h)=A h^{3}$, and a half-metre bell was weighed at $30$ kilograms.

The weighing pins $A$:

$$
A\\left(\\frac{1}{2}\\right)^{3}=30
$$

$$
A=240
$$

Mass per metre is then

$$
\\frac{M(h)}{h}=240h^{2}
$$

which still depends on $h$. At half a metre:

$$
\\frac{30}{\\frac{1}{2}}=60
$$

At one metre, $M(1)=240$, so the quotient is $240$ kg per metre. The two figures differ, so the statement is False.`,
      `**E.** → False

A one-metre bell is the coefficient of $M(h)=A h^{3}$, because $1^{3}=1$. A finished bell of height one half metre was weighed at $30$ kilograms, so the coefficient must be recovered first.

The weighing is

$$
A\\left(\\frac{1}{2}\\right)^{3}=30
$$

$$
\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}
$$

$$
A\\cdot\\frac{1}{8}=30
$$

$$
A=240
$$

The recovered law is $M(h)=240h^{3}$. At one metre:

$$
M(1)=240\\cdot 1^{3}
$$

$$
M(1)=240
$$

The figure $30$ is the half-metre weighing. Doubling the height from $\\frac{1}{2}$ to $1$ multiplies mass by $8$, and $8\\times 30=240$, not $30$. A one-metre bell weighs two hundred and forty kilograms, so the statement is False.`,
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

Drag on the track cyclist follows $F(v)=A v^{r}$ newtons for speed $v>0$ metres per second, with both constants unknown. Doubling any speed multiplies drag by four. Absorbed power is $P=Fv$ watts. The claim is that riding $25\\%$ faster raises that power by $75\\%$. A scale factor uses only the exponent, so the doubling rule is enough.

The general drag law is

$$
F(v)=Av^{r}
$$

Absorbed power multiplies that drag by speed:

$$
P(v)=F(v)\\cdot v
$$

The doubling record is a ratio of two drag readings, so $A$ cancels:

$$
\\frac{F(2v)}{F(v)}=\\frac{A(2v)^{r}}{Av^{r}}
$$

$$
\\frac{F(2v)}{F(v)}=2^{r}
$$

The recorded factor is $4$, and $4$ is a power of two:

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
2^{r}=2^{2}
$$

The bases match, so the exponents match:

$$
r=2
$$

Drag is then $F(v)=Av^{2}$. Absorbed power multiplies drag by speed, which raises the exponent by one:

$$
P(v)=F(v)\\cdot v=Av^{2}\\cdot v
$$

$$
P(v)=Av^{3}
$$

Riding $25\\%$ faster is the speed multiplier $1.25$:

$$
\\frac{P(1.25v)}{P(v)}=\\frac{A(1.25v)^{3}}{Av^{3}}
$$

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

The same cube as a fraction is $\\left(\\frac{5}{4}\\right)^{3}=\\frac{125}{64}=1.953125$. The relative rise is

$$
1.953125-1=0.953125
$$

or $95.3125\\%$. The claimed $75\\%$ is three times $25\\%$, as if power scaled linearly with speed. Power rises by $95.3125\\%$, so the statement is False.`,
      `**B.** → True

Drag follows $F(v)=Av^{r}$ newtons. Doubling any speed multiplies drag by four, and raising speed from $8$ to $12$ m/s increased drag by exactly $40$ N. Absorbed power is $P=Fv$ watts, and the rider can hold $500$ W. The claim is that this ceiling is reached at exactly $10$ m/s, so both constants must be recovered and the cubic inverted.

The general drag law is

$$
F(v)=Av^{r}
$$

The doubling rule is a ratio, so $A$ cancels:

$$
\\frac{F(2v)}{F(v)}=2^{r}
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The logged increase is a difference of two drag levels:

$$
F(12)-F(8)=40
$$

$$
A(12^{r}-8^{r})=40
$$

With $r=2$:

$$
A(12^{2}-8^{2})=40
$$

$$
12^{2}=144
$$

$$
8^{2}=64
$$

$$
144-64=80
$$

$$
80A=40
$$

$$
A=\\frac{40}{80}
$$

$$
A=\\frac{1}{2}
$$

Drag is $F(v)=\\frac{1}{2}v^{2}$. Power multiplies by speed:

$$
P(v)=\\frac{1}{2}v^{2}\\cdot v
$$

$$
P(v)=\\frac{1}{2}v^{3}
$$

The ceiling inverts that cubic:

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
P(10)=\\frac{1}{2}\\cdot 10^{3}
$$

$$
P(10)=\\frac{1}{2}\\cdot 1000=500
$$

The ceiling sits at exactly $10$ m/s, so the statement is True.`,
      `**C.** → True

An extra metre per second of speed is the derivative of absorbed power. Drag follows $F(v)=Av^{r}$. Doubling any speed multiplies drag by four, and the run from $8$ to $12$ m/s added $40$ N. Power is $P=Fv$, so both constants are needed before $P'$ can be compared at those two speeds.

The general drag law is

$$
F(v)=Av^{r}
$$

Doubling cancels $A$:

$$
\\frac{F(2v)}{F(v)}=2^{r}
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The $40$ N gap is then a difference of two levels of $Av^{2}$:

$$
F(12)-F(8)=40
$$

$$
A(12^{2}-8^{2})=40
$$

$$
12^{2}=144
$$

$$
8^{2}=64
$$

$$
144-64=80
$$

$$
80A=40
$$

$$
A=\\frac{1}{2}
$$

The recovered drag is $F(v)=\\frac{1}{2}v^{2}$. Power is the product of drag and speed:

$$
P(v)=\\frac{1}{2}v^{3}
$$

Differentiate:

$$
P'(v)=\\frac{3}{2}v^{2}
$$

At $8$ m/s:

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

The rider can hold $500$ W for a full pursuit. Drag follows $F(v)=Av^{r}$. Doubling any speed multiplies drag by four, and raising speed from $8$ to $12$ m/s increased drag by $40$ N. Absorbed power is $P=Fv$. The claim is that every speed below $10$ m/s stays under the ceiling, so the cubic must be recovered and then compared with $500$.

The general drag law is

$$
F(v)=Av^{r}
$$

The doubling ratio isolates the exponent:

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The $40$ N record pins the coefficient:

$$
A(12^{2}-8^{2})=40
$$

$$
12^{2}=144
$$

$$
8^{2}=64
$$

$$
144-64=80
$$

$$
80A=40
$$

$$
A=\\frac{1}{2}
$$

Power is then

$$
P(v)=\\frac{1}{2}v^{3}
$$

The map $v\\mapsto v^{3}$ is strictly increasing on $v>0$, and $\\frac{1}{2}>0$, so $P$ itself is strictly increasing. At $v=10$:

$$
P(10)=\\frac{1}{2}\\cdot 10^{3}
$$

$$
10^{3}=1000
$$

$$
P(10)=\\frac{1}{2}\\cdot 1000=500
$$

Therefore $P(v)<500$ if and only if $v<10$. At the logged speed $v=8$:

$$
8^{3}=512
$$

$$
P(8)=\\frac{1}{2}\\cdot 512=256
$$

and $256<500$. The rider stays under $500$ W at every speed below $10$ m/s, so the statement is True.`,
      `**E.** → False

A watt reading at $12$ m/s is a level of absorbed power $P=Fv$, not a linear scale of the $500$ W ceiling. Drag follows $F(v)=Av^{r}$. Doubling any speed multiplies drag by four, and the increase from $8$ to $12$ m/s was $40$ N. Both constants are needed before the $12$ m/s level can be read.

The general drag law is

$$
F(v)=Av^{r}
$$

The doubling rule gives the exponent:

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The $40$ N gap then gives the coefficient:

$$
A(12^{2}-8^{2})=40
$$

$$
12^{2}=144
$$

$$
8^{2}=64
$$

$$
144-64=80
$$

$$
80A=40
$$

$$
A=\\frac{1}{2}
$$

Power multiplies drag by speed:

$$
P(v)=\\frac{1}{2}v^{3}
$$

At $12$ m/s:

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

The locator signal follows $S(x)=A x^{r}$ millivolts for burial depth $x>0$ metres. Doubling any burial depth cuts the received signal to one eighth. Inverse proportionality would mean exponent $-1$. The doubling rule is a ratio, so $A$ cancels and $r$ can be read without the calibration.

$$
\\frac{S(2x)}{S(x)}=\\frac{A(2x)^{r}}{Ax^{r}}
$$

$$
\\frac{S(2x)}{S(x)}=2^{r}
$$

The recorded factor is $\\frac{1}{8}$, and $\\frac{1}{8}$ is a power of two:

$$
2^{r}=\\frac{1}{8}
$$

$$
\\frac{1}{8}=2^{-3}
$$

$$
r=-3
$$

The model is $S(x)=Ax^{-3}$. Inverse proportionality would have required $r=-1$. The product $x\\,S(x)=Ax^{-2}$ still falls as depth grows, so the statement is False.`,
      `**B.** → True

Four metres is twice the calibration depth of $2$ metres, where the locator read $50$ millivolts. The signal follows $S(x)=Ax^{r}$ millivolts. Doubling any burial depth cuts the signal to one eighth, so the scale factor can be read from that rule before the coefficient is needed.

The general law is

$$
S(x)=Ax^{r}
$$

The doubling ratio isolates the exponent:

$$
\\frac{S(2x)}{S(x)}=2^{r}
$$

$$
2^{r}=\\frac{1}{8}
$$

$$
\\frac{1}{8}=2^{-3}
$$

$$
r=-3
$$

Four metres is one doubling of the calibration depth, so the signal is multiplied by $2^{-3}$:

$$
S(4)=S(2)\\cdot 2^{-3}
$$

$$
S(4)=50\\cdot\\frac{1}{8}
$$

$$
S(4)=\\frac{50}{8}=6.25
$$

The same level follows after pinning $A$ from the calibration:

$$
A\\cdot 2^{-3}=50
$$

$$
\\frac{A}{8}=50
$$

$$
A=400
$$

$$
S(4)=400\\cdot 4^{-3}
$$

$$
4^{3}=64
$$

$$
S(4)=\\frac{400}{64}=6.25
$$

The claimed reading is $6.25$ millivolts. The locator reads $6.25$ millivolts, so the statement is True.`,
      `**C.** → True

Inverting a power law of exponent $r\\neq 0$ produces another power law. The signal is $S(x)=Ax^{r}$. Doubling any burial depth cuts the reading to one eighth, and a conductor buried at $2$ metres read $50$ millivolts. Both constants are needed before the inverse can be written.

The general law is

$$
S(x)=Ax^{r}
$$

The doubling ratio cancels $A$:

$$
2^{r}=\\frac{1}{8}
$$

$$
\\frac{1}{8}=2^{-3}
$$

$$
r=-3
$$

The calibration then pins the coefficient:

$$
A\\cdot 2^{-3}=50
$$

$$
\\frac{A}{8}=50
$$

$$
A=400
$$

The recovered law is $S=400x^{-3}$. Solving for depth:

$$
S=\\frac{400}{x^{3}}
$$

$$
x^{3}=\\frac{400}{S}
$$

$$
x=\\left(\\frac{400}{S}\\right)^{\\frac{1}{3}}
$$

$$
x=400^{\\frac{1}{3}}S^{-\\frac{1}{3}}
$$

Depth is a power of the reading with exponent $-\\frac{1}{3}$, so the statement is True.`,
      `**D.** → True

The quantity that a power law holds fixed is $x^{-r}S(x)=A$. The signal follows $S(x)=Ax^{r}$ millivolts. Doubling any burial depth cuts the received signal to one eighth, and the calibration at $2$ metres read $50$ millivolts.

The general law is

$$
S(x)=Ax^{r}
$$

The doubling ratio isolates the exponent:

$$
\\frac{S(2x)}{S(x)}=2^{r}
$$

$$
2^{r}=\\frac{1}{8}
$$

$$
\\frac{1}{8}=2^{-3}
$$

$$
r=-3
$$

Then $-r=3$, so the invariant is the product of the cube of the depth and the signal:

$$
x^{3}S(x)=A
$$

The calibration $S(2)=50$ pins that constant:

$$
2^{3}\\cdot 50=A
$$

$$
8\\cdot 50=400
$$

$$
A=400
$$

At four metres the same product is

$$
S(4)=400\\cdot 4^{-3}
$$

$$
4^{3}=64
$$

$$
S(4)=\\frac{400}{64}=6.25
$$

$$
4^{3}\\cdot S(4)=64\\cdot 6.25=400
$$

The product of the cube of the depth and the signal is $400$ at every depth, so the statement is True.`,
      `**E.** → False

A depth from a $3.2$ millivolt reading inverts the calibrated cube. The signal follows $S(x)=Ax^{r}$. Doubling any burial depth cuts the reading to one eighth, and a conductor buried at $2$ metres read $50$ millivolts. Both constants are needed before the inverse can be evaluated.

The general law is

$$
S(x)=Ax^{r}
$$

The doubling rule gives the exponent:

$$
2^{r}=\\frac{1}{8}
$$

$$
\\frac{1}{8}=2^{-3}
$$

$$
r=-3
$$

The calibration then gives the coefficient:

$$
A\\cdot 2^{-3}=50
$$

$$
A=50\\cdot 8=400
$$

The law is $S(x)=\\frac{400}{x^{3}}$. At a reading of $3.2$ millivolts:

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
x^{3}=125
$$

$$
x=5
$$

because $5^{3}=125$ and depth is positive. At the claimed $10$ metres the locator would show

$$
S(10)=\\frac{400}{10^{3}}
$$

$$
S(10)=\\frac{400}{1000}=0.4
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

Oxygen demand follows $D(m)=A m^{\\frac{3}{4}}$ millilitres per hour for body mass $m>0$ grams. An $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish. The claim is a fresh level $D(256)=320$, so the coefficient $A$ must be recovered from that gap first.

The demand law is

$$
D(m)=Am^{\\frac{3}{4}}
$$

The logged masses are fourth powers, which makes the shape factors exact:

$$
81=3^{4}
$$

$$
81^{\\frac{3}{4}}=(3^{4})^{\\frac{3}{4}}=3^{3}=27
$$

$$
16=2^{4}
$$

$$
16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}=2^{3}=8
$$

The $95$ millilitre gap is then a difference of two levels:

$$
D(81)-D(16)=95
$$

$$
A(27-8)=95
$$

$$
19A=95
$$

$$
A=\\frac{95}{19}=5
$$

The recovered law is $D(m)=5m^{\\frac{3}{4}}$. At $256$ g:

$$
256=4^{4}
$$

$$
256^{\\frac{3}{4}}=(4^{4})^{\\frac{3}{4}}=4^{3}=64
$$

$$
D(256)=5\\cdot 64=320
$$

The claimed demand is $320$ millilitres per hour. The $256$ g fish demands $320$ millilitres per hour, so the statement is True.`,
      `**B.** → True

A mass doubling is a scale factor on oxygen demand $D(m)=A m^{\\frac{3}{4}}$. The coefficient cancels, so only the published exponent $\\frac{3}{4}$ is used. The claim is that the factor is less than $2$.

The demand law is

$$
D(m)=Am^{\\frac{3}{4}}
$$

$$
\\frac{D(2m)}{D(m)}=\\frac{A(2m)^{\\frac{3}{4}}}{Am^{\\frac{3}{4}}}
$$

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

The factor $1.682$ is less than $2$. Demand grows more slowly than mass, so the statement is True.`,
      `**C.** → False

Demand per square centimetre of gill is the quotient of the two recovered laws. Oxygen demand is $D(m)=A m^{\\frac{3}{4}}$, and an $81$ g fish demands $95$ millilitres per hour more than a $16$ g fish. Gill area is $G(m)=B m^{\\frac{2}{3}}$, and a $64$ g fish carries $48$ square centimetres of gill. Both coefficients are needed before the exponents can be subtracted.

The demand gap uses the fourth-power shape factors $81^{\\frac{3}{4}}=27$ and $16^{\\frac{3}{4}}=8$:

$$
A(27-8)=95
$$

$$
19A=95
$$

$$
A=5
$$

The gill record uses $64=4^{3}$:

$$
64^{\\frac{2}{3}}=(4^{3})^{\\frac{2}{3}}=4^{2}=16
$$

$$
B\\cdot 16=48
$$

$$
B=\\frac{48}{16}=3
$$

The intensity is the quotient:

$$
\\frac{D(m)}{G(m)}=\\frac{5m^{\\frac{3}{4}}}{3m^{\\frac{2}{3}}}
$$

$$
\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{3}{4}-\\frac{2}{3}}
$$

The leftover exponent is

$$
\\frac{3}{4}-\\frac{2}{3}=\\frac{9}{12}-\\frac{8}{12}=\\frac{1}{12}
$$

so

$$
\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{1}{12}}
$$

The leftover exponent $\\frac{1}{12}$ is positive, so the intensity rises with body mass. It does not fall, so the statement is False.`,
      `**D.** → True

A tank total is a sum of individual demands, never one application of $D$ to the pooled mass. Oxygen demand follows $D(m)=A m^{\\frac{3}{4}}$. An $81$ g fish demands $95$ millilitres per hour more than a $16$ g fish. Sixteen $16$ g fish have the same total mass as one $256$ g fish, so $A$ must be recovered and both tank totals computed.

The demand law is

$$
D(m)=Am^{\\frac{3}{4}}
$$

The gap uses $81^{\\frac{3}{4}}=27$ and $16^{\\frac{3}{4}}=8$:

$$
A(27-8)=95
$$

$$
19A=95
$$

$$
A=5
$$

The recovered law is $D(m)=5m^{\\frac{3}{4}}$. One small fish:

$$
D(16)=5\\cdot 16^{\\frac{3}{4}}
$$

$$
16^{\\frac{3}{4}}=8
$$

$$
D(16)=5\\cdot 8=40
$$

Sixteen of them:

$$
16\\cdot D(16)=16\\cdot 40=640
$$

One $256$ g fish:

$$
256^{\\frac{3}{4}}=(4^{4})^{\\frac{3}{4}}=4^{3}=64
$$

$$
D(256)=5\\cdot 64=320
$$

The ratio of the two tank totals:

$$
\\frac{640}{320}=2
$$

Sixteen small fish demand twice as much oxygen as one fish of the same total mass, so the statement is True.`,
      `**E.** → False

Gill area is $G(m)=B m^{\\frac{2}{3}}$ square centimetres. A $64$ g fish carries $48$ square centimetres of gill. The exponent $\\frac{2}{3}<1$, so two small fish out-area one fish of twice the mass, but the coefficient must be recovered before the two sides can be compared.

The gill law is

$$
G(m)=Bm^{\\frac{2}{3}}
$$

The gill record uses $64=4^{3}$:

$$
64^{\\frac{2}{3}}=(4^{3})^{\\frac{2}{3}}=4^{2}=16
$$

$$
B\\cdot 16=48
$$

$$
B=\\frac{48}{16}=3
$$

The recovered law is $G(m)=3m^{\\frac{2}{3}}$. At $16$ g:

$$
16=2^{4}
$$

$$
16^{\\frac{2}{3}}=(2^{4})^{\\frac{2}{3}}=2^{\\frac{8}{3}}
$$

$$
2^{\\frac{8}{3}}=2^{2+\\frac{2}{3}}=4\\cdot 2^{\\frac{2}{3}}
$$

$$
G(16)=3\\cdot 4\\cdot 2^{\\frac{2}{3}}=12\\cdot 2^{\\frac{2}{3}}
$$

Two such fish:

$$
2\\,G(16)=24\\cdot 2^{\\frac{2}{3}}
$$

One $32$ g fish:

$$
32=2^{5}
$$

$$
32^{\\frac{2}{3}}=(2^{5})^{\\frac{2}{3}}=2^{\\frac{10}{3}}
$$

$$
2^{\\frac{10}{3}}=2^{3+\\frac{1}{3}}=8\\cdot 2^{\\frac{1}{3}}
$$

$$
G(32)=3\\cdot 8\\cdot 2^{\\frac{1}{3}}=24\\cdot 2^{\\frac{1}{3}}
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

Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{k}$ litres per hour, where $r>0$ is the internal tube radius in millimetres. Neither constant is posted. Doubling any tube radius multiplies flow by $16$. Widening the radius by $50\\%$ is the multiplier $1.5$, and flow responds through the recovered exponent, not through twice $50\\%$.

The general flow law is

$$
Q(r)=Ar^{k}
$$

The doubling record is a ratio of two flows, so $A$ cancels:

$$
\\frac{Q(2r)}{Q(r)}=\\frac{A(2r)^{k}}{Ar^{k}}
$$

$$
\\frac{Q(2r)}{Q(r)}=2^{k}
$$

The recorded factor is $16$, and $16$ is a power of two:

$$
2^{k}=16
$$

$$
16=2^{4}
$$

$$
k=4
$$

A $50\\%$ wider radius is the factor $1.5=\\frac{3}{2}$:

$$
\\frac{Q(1.5r)}{Q(r)}=1.5^{4}
$$

$$
1.5^{4}=\\left(\\frac{3}{2}\\right)^{4}=\\frac{81}{16}
$$

Square first in decimals:

$$
1.5^{2}=2.25
$$

Then square again:

$$
1.5^{4}=(1.5^{2})^{2}=2.25^{2}
$$

$$
2.25^{2}=5.0625
$$

and $\\frac{81}{16}=5.0625$ agrees. The relative rise is

$$
5.0625-1=4.0625
$$

or $406.25\\%$. The claimed $125\\%$ is the rise for exponent $2$, where $1.5^{2}=2.25$ and $2.25-1=1.25$. Flow rises by $406.25\\%$, so the statement is False.`,
      `**B.** → True

A $3$ mm delivery is a fresh level of the flow law $Q(r)=Ar^{k}$. Doubling any tube radius multiplies flow by $16$, and a bench test on a tube of radius $2$ mm delivered $48$ litres per hour. Both constants must be recovered before $Q(3)$ can be read.

The general law is

$$
Q(r)=Ar^{k}
$$

The doubling ratio isolates the exponent:

$$
\\frac{Q(2r)}{Q(r)}=2^{k}
$$

$$
2^{k}=16
$$

$$
16=2^{4}
$$

$$
k=4
$$

The bench test then pins the coefficient:

$$
A\\cdot 2^{k}=48
$$

$$
A\\cdot 2^{4}=48
$$

$$
2^{4}=16
$$

$$
16A=48
$$

$$
A=\\frac{48}{16}=3
$$

The recovered law is $Q(r)=3r^{4}$. At radius $3$ mm:

$$
Q(3)=3\\cdot 3^{4}
$$

$$
3^{2}=9
$$

$$
3^{4}=9^{2}=81
$$

$$
Q(3)=3\\cdot 81=243
$$

The claimed delivery is $243$ litres per hour. The tube delivers $243$ litres per hour, so the statement is True.`,
      `**C.** → True

Halving the tube radius is the multiplier $\\frac{1}{2}$. Flow follows $Q(r)=Ar^{k}$ litres per hour. Doubling any radius multiplies flow by $16$, which fixes the exponent. The coefficient cancels, so the remaining fraction does not depend on the starting radius.

The general law is

$$
Q(r)=Ar^{k}
$$

The doubling ratio is

$$
\\frac{Q(2r)}{Q(r)}=2^{k}
$$

$$
2^{k}=16
$$

$$
16=2^{4}
$$

$$
k=4
$$

Halving is the reciprocal scale:

$$
\\frac{Q\\!\\left(\\frac{r}{2}\\right)}{Q(r)}=\\left(\\frac{1}{2}\\right)^{k}
$$

$$
\\left(\\frac{1}{2}\\right)^{4}=\\frac{1}{16}
$$

One sixteenth of the flow remains, so the statement is True.`,
      `**D.** → False

The mean velocity index divides flow by the tube's cross-section $\\pi r^{2}$, so the exponents subtract rather than cancel. Flow follows $Q(r)=Ar^{k}$. Doubling any radius multiplies flow by $16$, and a $2$ mm bench test delivered $48$ litres per hour. Both constants are needed before the leftover exponent can be read.

The general law is

$$
Q(r)=Ar^{k}
$$

The doubling rule gives $k$:

$$
2^{k}=16
$$

$$
16=2^{4}
$$

$$
k=4
$$

The bench test gives $A$:

$$
A\\cdot 2^{4}=48
$$

$$
16A=48
$$

$$
A=\\frac{48}{16}=3
$$

The recovered flow is $Q(r)=3r^{4}$. The index is then

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{3r^{4}}{\\pi r^{2}}
$$

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}
$$

The leftover exponent $2$ is not zero, so the index grows with the radius. Comparing the bench tube $r=2$ with a $3$ mm tube, the index scales by

$$
\\left(\\frac{3}{2}\\right)^{2}=\\frac{9}{4}=2.25
$$

It is not the same in every tube, so the statement is False.`,
      `**E.** → True

Radius $1$ mm is a fresh evaluation of the recovered fourth-power law. Flow follows $Q(r)=Ar^{k}$. Doubling any tube radius multiplies flow by $16$, and a bench test on a $2$ mm tube delivered $48$ litres per hour. Both constants are needed, and every power of $1$ is $1$, so the delivery equals the coefficient itself.

The general law is

$$
Q(r)=Ar^{k}
$$

The doubling rule isolates the exponent:

$$
2^{k}=16
$$

$$
16=2^{4}
$$

$$
k=4
$$

The bench test pins the coefficient:

$$
A\\cdot 2^{4}=48
$$

$$
16A=48
$$

$$
A=\\frac{48}{16}=3
$$

The recovered law is $Q(r)=3r^{4}$. At radius $1$ mm:

$$
Q(1)=3\\cdot 1^{4}
$$

$$
1^{4}=1
$$

$$
Q(1)=3\\cdot 1=3
$$

The claimed delivery is $3$ litres per hour. The tube delivers $3$ litres per hour, so the statement is True.`,
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

Dose rate follows $H(d)=A d^{r}$ microsieverts per hour. Quadrupling any distance cuts the dose rate to one sixteenth. A distance doubling is a scale factor, so the coefficient cancels and only the exponent from the quadrupling rule is needed.

The general law is

$$
H(d)=Ad^{r}
$$

The quadrupling ratio is

$$
\\frac{H(4d)}{H(d)}=4^{r}
$$

$$
4^{r}=\\frac{1}{16}
$$

$$
\\frac{1}{16}=4^{-2}
$$

$$
r=-2
$$

Doubling the distance is then the factor $2^{-2}$:

$$
\\frac{H(2d)}{H(d)}=2^{r}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

Doubling the distance leaves one quarter of the dose rate, so the statement is True.`,
      `**B.** → False

Six metres is twice the survey distance of three metres, where the meter read $80$ microsieverts per hour. Dose rate follows $H(d)=Ad^{r}$ microsieverts per hour. Quadrupling any distance cuts the dose rate to one sixteenth, so the exponent is $-2$ and the six-metre reading is the survey reading multiplied by $2^{-2}$, not by $\\frac{1}{2}$.

The general law is

$$
H(d)=Ad^{r}
$$

The quadrupling ratio isolates the exponent:

$$
\\frac{H(4d)}{H(d)}=4^{r}
$$

$$
4^{r}=\\frac{1}{16}
$$

$$
\\frac{1}{16}=4^{-2}
$$

$$
r=-2
$$

Six metres is one doubling of the survey distance:

$$
\\frac{H(6)}{H(3)}=2^{r}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
H(6)=80\\cdot\\frac{1}{4}
$$

$$
H(6)=20
$$

The same level follows after pinning $A$ from $H(3)=80$:

$$
A\\cdot 3^{-2}=80
$$

$$
\\frac{A}{9}=80
$$

$$
A=720
$$

$$
H(6)=\\frac{720}{6^{2}}=\\frac{720}{36}=20
$$

The claimed $40$ is half the survey reading, the inverse-proportional trap. The meter reads $20$ microsieverts per hour, so the statement is False.`,
      `**C.** → True

A negative-power law on $d>0$ never crosses zero. Dose rate follows $H(d)=Ad^{r}$. Quadrupling any distance cuts the dose rate to one sixteenth, and a survey meter three metres from the source reads $80$ microsieverts per hour. Those two records pin both constants, after which positivity is immediate.

The quadrupling rule gives the exponent:

$$
4^{r}=\\frac{1}{16}
$$

$$
\\frac{1}{16}=4^{-2}
$$

$$
r=-2
$$

The survey then pins the coefficient:

$$
A\\cdot 3^{-2}=80
$$

$$
3^{2}=9
$$

$$
\\frac{A}{9}=80
$$

$$
A=720
$$

The recovered law is

$$
H(d)=\\frac{720}{d^{2}}
$$

The numerator is positive and the denominator is a square, hence positive for every finite $d>0$. The dose rate stays positive, so the statement is True.`,
      `**D.** → False

Three metres to nine metres is a tripling. Dose rate follows $H(d)=Ad^{r}$, and quadrupling any distance cuts the dose rate to one sixteenth, which fixes the exponent at $-2$. The coefficient cancels, so the factor is $3^{-2}$, not $\\frac{1}{3}$.

The general law is

$$
H(d)=Ad^{r}
$$

$$
4^{r}=\\frac{1}{16}
$$

$$
\\frac{1}{16}=4^{-2}
$$

$$
r=-2
$$

The tripling is then

$$
\\frac{H(9)}{H(3)}=3^{r}=3^{-2}
$$

$$
3^{-2}=\\frac{1}{9}
$$

One third would match exponent $-1$. One ninth of the dose rate remains, so the statement is False.`,
      `**E.** → True

The barrier is the distance where the dose rate has fallen from the survey reading of $80$ to $5$ microsieverts per hour. Dose rate follows $H(d)=Ad^{r}$. Quadrupling any distance cuts the dose rate to one sixteenth, which fixes $r=-2$. Inverse square then converts the dose ratio into a squared distance ratio.

The general law is

$$
H(d)=Ad^{r}
$$

The quadrupling rule:

$$
4^{r}=\\frac{1}{16}
$$

$$
\\frac{1}{16}=4^{-2}
$$

$$
r=-2
$$

The barrier ratio against the survey is

$$
\\frac{H(d)}{H(3)}=\\frac{5}{80}
$$

$$
\\frac{5}{80}=\\frac{1}{16}
$$

With exponent $-2$:

$$
\\left(\\frac{d}{3}\\right)^{-2}=\\frac{1}{16}
$$

$$
\\left(\\frac{3}{d}\\right)^{2}=\\frac{1}{16}
$$

$$
\\frac{3}{d}=\\frac{1}{4}
$$

because distance is positive, so the positive root is taken.

$$
d=3\\cdot 4=12
$$

The same figure follows after pinning $A$ from the survey:

$$
A\\cdot 3^{-2}=80
$$

$$
A=80\\cdot 9=720
$$

$$
\\frac{720}{d^{2}}=5
$$

$$
d^{2}=\\frac{720}{5}=144
$$

$$
d=12
$$

The barrier belongs $12$ metres from the source, so the statement is True.`,
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

The plume radius follows $r(t)=A t^{\\frac{2}{3}}$ metres for $t>0$ hours since release. The stained area is the disc $S=\\pi r^{2}$. Proportional growth of area with elapsed time would mean composed exponent $1$. Squaring the two-thirds radius law produces exponent $\\frac{4}{3}$, and the $45$-metre rise is not needed for that comparison.

The radius law is

$$
r(t)=At^{\\frac{2}{3}}
$$

Compose with the disc formula:

$$
S(t)=\\pi r(t)^{2}
$$

$$
S(t)=\\pi\\bigl(At^{\\frac{2}{3}}\\bigr)^{2}
$$

$$
S(t)=\\pi A^{2} t^{\\frac{4}{3}}
$$

The composed exponent is $\\frac{4}{3}$, and $\\frac{4}{3}>1$. Doubling elapsed time therefore multiplies area by

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
2^{\\frac{4}{3}}\\approx 2\\cdot 1.260=2.52
$$

which is larger than $2$. Area outruns a proportional clock, so the statement is True.`,
      `**B.** → True

The hour-$8$ radius is a level of $r(t)=At^{\\frac{2}{3}}$. The survey records that the radius grew by exactly $45$ metres between hour $1$ and hour $8$, so the coefficient $A$ must be recovered from that gap first. Hour $8$ and hour $1$ are exact cubes under exponent $\\frac{2}{3}$.

The radius law is

$$
r(t)=At^{\\frac{2}{3}}
$$

$$
8=2^{3}
$$

$$
8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=2^{2}=4
$$

$$
1^{\\frac{2}{3}}=1
$$

The $45$-metre rise is a difference of two levels:

$$
r(8)-r(1)=45
$$

$$
A(4-1)=45
$$

$$
3A=45
$$

$$
A=\\frac{45}{3}=15
$$

The recovered law is $r(t)=15t^{\\frac{2}{3}}$. At hour $8$:

$$
r(8)=15\\cdot 8^{\\frac{2}{3}}
$$

$$
r(8)=15\\cdot 4=60
$$

Forward check:

$$
r(1)=15\\cdot 1=15
$$

$$
60-15=45
$$

The claimed radius is $60$ metres. The radius is $60$ metres, so the statement is True.`,
      `**C.** → False

Doubling elapsed time reaches the stained area through the composed exponent $\\frac{4}{3}$, not through the time multiplier itself. The radius follows $r(t)=At^{\\frac{2}{3}}$, and the stained area is $S=\\pi r^{2}$. The coefficient cancels in a scale factor.

The radius law is

$$
r(t)=At^{\\frac{2}{3}}
$$

Compose with the disc:

$$
S(t)=\\pi\\bigl(At^{\\frac{2}{3}}\\bigr)^{2}
$$

$$
S(t)=\\pi A^{2} t^{\\frac{4}{3}}
$$

The doubling factor on area is then

$$
\\frac{S(2t)}{S(t)}=2^{\\frac{4}{3}}
$$

$$
2^{\\frac{4}{3}}=2\\cdot 2^{\\frac{1}{3}}\\approx 2.52
$$

A doubling of area would require composed exponent $1$, which would have returned the factor $2$. The factor is about $2.52$, not $2$, so the statement is False.`,
      `**D.** → False

A target radius of $240$ metres inverts the two-thirds law $r(t)=At^{\\frac{2}{3}}$, so the coefficient must be recovered first. The survey records that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. Hour $8$ and hour $1$ are exact cubes under exponent $\\frac{2}{3}$.

The general radius law is

$$
r(t)=At^{\\frac{2}{3}}
$$

The shape factors are

$$
8=2^{3}
$$

$$
8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=2^{2}=4
$$

$$
1^{\\frac{2}{3}}=1
$$

The $45$-metre rise is a difference of two levels:

$$
r(8)-r(1)=45
$$

$$
A(4-1)=45
$$

$$
3A=45
$$

$$
A=\\frac{45}{3}=15
$$

The recovered law is $r(t)=15t^{\\frac{2}{3}}$. At radius $240$ metres:

$$
15t^{\\frac{2}{3}}=240
$$

$$
t^{\\frac{2}{3}}=\\frac{240}{15}=16
$$

Raise both sides to the power $\\frac{3}{2}$:

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
32=2^{5}
$$

$$
32^{\\frac{2}{3}}=(2^{5})^{\\frac{2}{3}}=2^{\\frac{10}{3}}
$$

$$
2^{\\frac{10}{3}}=2^{3+\\frac{1}{3}}=8\\cdot 2^{\\frac{1}{3}}\\approx 8\\cdot 1.260=10.08
$$

$$
r(32)=15\\cdot 32^{\\frac{2}{3}}\\approx 15\\cdot 10.08=151
$$

The claimed hour $32$ gives about $151$ metres, not $240$. The radius reaches $240$ metres at hour $64$, so the statement is False.`,
      `**E.** → True

Squaring a power multiplies its exponent by $2$ and squares the coefficient. The radius law is $r(t)=At^{\\frac{2}{3}}$, and the stained area is the disc $S=\\pi r^{2}$. The survey coefficient is not needed for the exponent identity.

The radius law is

$$
r(t)=At^{\\frac{2}{3}}
$$

Compose with the disc:

$$
S(t)=\\pi r(t)^{2}
$$

$$
S(t)=\\pi\\bigl(At^{\\frac{2}{3}}\\bigr)^{2}
$$

$$
S(t)=\\pi A^{2} t^{2\\cdot\\frac{2}{3}}
$$

$$
S(t)=\\pi A^{2} t^{\\frac{4}{3}}
$$

$$
\\frac{4}{3}=2\\cdot\\frac{2}{3}
$$

The area exponent is exactly twice the radius exponent, so the statement is True.`,
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

Discharge follows $Q(h)=A h^{\\frac{3}{2}}$ cubic metres per second with head $h$ in metres. Switching the head from metres to centimetres replaces $h$ by a constant multiple of itself. A power function pushes that constant through the existing exponent and does not alter the exponent.

The weir law is

$$
Q(h)=Ah^{\\frac{3}{2}}
$$

One metre is $100$ centimetres, so

$$
h=\\frac{h_{\\mathrm{cm}}}{100}
$$

Substitute into the weir law:

$$
Q=A\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{\\frac{3}{2}}
$$

$$
Q=\\frac{A}{100^{\\frac{3}{2}}}\\,h_{\\mathrm{cm}}^{\\frac{3}{2}}
$$

The conversion power $100^{\\frac{3}{2}}=1000$ rescales only the coefficient. The new exponent on $h_{\\mathrm{cm}}$ is still $\\frac{3}{2}$. Only the coefficient moves, so the statement is True.`,
      `**B.** → True

With the head in centimetres and discharge still in cubic metres per second, the new coefficient is the original $A$ divided by $100^{\\frac{3}{2}}$. Discharge follows $Q(h)=A h^{\\frac{3}{2}}$ cubic metres per second. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second, so $A$ must be recovered first.

The weir law is

$$
Q(h)=Ah^{\\frac{3}{2}}
$$

The shape factor at the gauged head:

$$
0.25=\\frac{1}{4}
$$

$$
0.25^{\\frac{1}{2}}=\\frac{1}{2}=0.5
$$

$$
0.25^{\\frac{3}{2}}=\\bigl(0.25^{\\frac{1}{2}}\\bigr)^{3}=0.5^{3}
$$

$$
0.5^{3}=0.125
$$

$$
A\\cdot 0.125=2
$$

$$
A=\\frac{2}{0.125}=16
$$

The centimetre conversion is $h=\\frac{h_{\\mathrm{cm}}}{100}$, so the new coefficient is $\\frac{A}{100^{\\frac{3}{2}}}$. That power is

$$
100^{\\frac{1}{2}}=10
$$

$$
100^{\\frac{3}{2}}=\\bigl(100^{\\frac{1}{2}}\\bigr)^{3}=10^{3}=1000
$$

$$
\\frac{A}{1000}=\\frac{16}{1000}=0.016
$$

At the gauged point in centimetres the head is $25$ cm:

$$
25^{\\frac{1}{2}}=5
$$

$$
25^{\\frac{3}{2}}=5^{3}=125
$$

$$
0.016\\cdot 125=2
$$

which matches the original discharge. The coefficient is $0.016$, so the statement is True.`,
      `**C.** → False

The head conversion is $h=\\frac{h_{\\mathrm{cm}}}{100}$, and $100$ travels through exponent $\\frac{3}{2}$, not through exponent $1$. Discharge follows $Q(h)=Ah^{\\frac{3}{2}}$. A gauging at $0.25$ metres recorded $2$ cubic metres per second, which recovers $A$ and then the centimetre-form coefficient.

The weir law is

$$
Q(h)=Ah^{\\frac{3}{2}}
$$

The gauged shape factor is $0.25^{\\frac{3}{2}}=0.125$, so

$$
A\\cdot 0.125=2
$$

$$
A=\\frac{2}{0.125}=16
$$

Substitute $h=\\frac{h_{\\mathrm{cm}}}{100}$:

$$
Q=16\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{\\frac{3}{2}}
$$

$$
Q=\\frac{16}{100^{\\frac{3}{2}}}\\,h_{\\mathrm{cm}}^{\\frac{3}{2}}
$$

The conversion power is

$$
100^{\\frac{3}{2}}=1000
$$

The centimetre-form coefficient is therefore

$$
A_{\\mathrm{cm}}=\\frac{16}{1000}=0.016
$$

The original coefficient is divided by $1000$, not multiplied by $100$. A smaller length unit makes every numerical head larger, and the coefficient must shrink. The factor is $\\frac{1}{1000}$, so the statement is False.`,
      `**D.** → False

Proportionality would require exponent $1$. The weir law is given with exponent $\\frac{3}{2}$, and a change of units cannot move that exponent. Doubling the head therefore multiplies discharge by $2^{\\frac{3}{2}}$, not by $2$.

The weir law is

$$
Q(h)=Ah^{\\frac{3}{2}}
$$

The scale factor is

$$
\\frac{Q(2h)}{Q(h)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\cdot 2^{\\frac{1}{2}}=2\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
2\\sqrt{2}\\approx 2.828
$$

Doubling the head multiplies discharge by about $2.83$, not by $2$. Discharge is not proportional to head, so the statement is False.`,
      `**E.** → False

At a head of one metre every power of $1$ is $1$, so the discharge equals the recovered coefficient. Discharge follows $Q(h)=Ah^{\\frac{3}{2}}$, and a gauging at $0.25$ metres recorded $2$ cubic metres per second.

The weir law is

$$
Q(h)=Ah^{\\frac{3}{2}}
$$

The gauged shape factor:

$$
0.25^{\\frac{1}{2}}=0.5
$$

$$
0.25^{\\frac{3}{2}}=0.5^{3}=0.125
$$

$$
A\\cdot 0.125=2
$$

$$
A=\\frac{2}{0.125}=16
$$

At a head of one metre:

$$
Q(1)=16\\cdot 1^{\\frac{3}{2}}
$$

$$
1^{\\frac{3}{2}}=1
$$

$$
Q(1)=16
$$

The scale-factor route from the gauged head agrees, because $\\frac{1}{0.25}=4$ and

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}=8
$$

$$
Q(1)=8\\cdot Q(0.25)=8\\cdot 2=16
$$

The claimed $32$ is what a squared law would give, since $4^{2}=16$ and $16\\cdot 2=32$. The discharge is $16$ cubic metres per second, so the statement is False.`,
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

Fuel use follows $F(x)=A x^{r}$ litres per batch. Doubling the batch mass raises fuel use by $300\\%$. A $300\\%$ rise is a multiplier of $4$, not of $3$, and that ratio isolates the exponent because $A$ cancels.

The general law is

$$
F(x)=Ax^{r}
$$

The doubling ratio is

$$
\\frac{F(2x)}{F(x)}=2^{r}
$$

A $300\\%$ rise means the new value is the old value plus three times the old value:

$$
1+\\frac{300}{100}=4
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

Doubling therefore multiplies fuel by $4$. Reading $300\\%$ as a factor of $3$ drops the baseline $100\\%$. Fuel use is quadrupled, not tripled, so the statement is False.`,
      `**B.** → True

A $10$-tonne batch is a fresh level of $F(x)=Ax^{r}$. Doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres. Both constants are needed: the doubling record fixes the exponent, then the $96$-litre gap fixes the coefficient.

The general law is

$$
F(x)=Ax^{r}
$$

A $300\\%$ rise is the multiplier $4$:

$$
\\frac{F(2x)}{F(x)}=2^{r}
$$

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The logged gap is a difference of two levels:

$$
F(6)-F(2)=96
$$

$$
A(6^{2}-2^{2})=96
$$

$$
6^{2}=36
$$

$$
2^{2}=4
$$

$$
36-4=32
$$

$$
32A=96
$$

$$
A=\\frac{96}{32}=3
$$

The recovered law is $F(x)=3x^{2}$. At $10$ tonnes:

$$
F(10)=3\\cdot 10^{2}
$$

$$
10^{2}=100
$$

$$
F(10)=3\\cdot 100=300
$$

The claimed use is $300$ litres. The batch uses $300$ litres, so the statement is True.`,
      `**C.** → True

A mass triple contributes only $3^{r}$. Fuel use follows $F(x)=Ax^{r}$ litres per batch, and doubling the batch mass raises fuel use by $300\\%$, which is a multiplier of $4$. The coefficient cancels.

The general law is

$$
F(x)=Ax^{r}
$$

A $300\\%$ rise means the new value is four times the old value:

$$
1+\\frac{300}{100}=4
$$

$$
\\frac{F(2x)}{F(x)}=2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The triple is then

$$
\\frac{F(3x)}{F(x)}=3^{r}=3^{2}
$$

$$
3^{2}=9
$$

A law of exponent $1$ would have returned $3$. Fuel use is multiplied by $9$, so the statement is True.`,
      `**D.** → False

Fuel per tonne divides the law by the mass, which lowers the exponent by $1$. Fuel use follows $F(x)=Ax^{r}$. Doubling the batch mass raises fuel by $300\\%$, and the gap from $2$ tonnes to $6$ tonnes is $96$ litres. Both constants are needed before the leftover exponent can be read.

The general law is

$$
F(x)=Ax^{r}
$$

A $300\\%$ rise is multiplier $4$:

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The gap then pins $A$:

$$
F(6)-F(2)=96
$$

$$
A(6^{2}-2^{2})=96
$$

$$
6^{2}=36
$$

$$
2^{2}=4
$$

$$
36-4=32
$$

$$
32A=96
$$

$$
A=\\frac{96}{32}=3
$$

The recovered law is $F(x)=3x^{2}$. Fuel per tonne is

$$
\\frac{F(x)}{x}=\\frac{3x^{2}}{x}=3x
$$

The leftover exponent $1$ is not zero: litres per tonne climb in proportion to batch mass. At the logged batches,

$$
\\frac{F(2)}{2}=\\frac{3\\cdot 4}{2}=6
$$

$$
\\frac{F(6)}{6}=\\frac{3\\cdot 36}{6}=18
$$

The per-tonne figure is not constant, so the statement is False.`,
      `**E.** → False

The $96$ litres is a gap between two batches, not the level at $6$ tonnes. Fuel use follows $F(x)=Ax^{r}$. Doubling the batch mass raises fuel by $300\\%$, and moving from $2$ tonnes to $6$ tonnes adds $96$ litres. Both constants must be recovered, then $F(6)$ evaluated.

The general law is

$$
F(x)=Ax^{r}
$$

A $300\\%$ rise means multiplier $4$:

$$
2^{r}=4
$$

$$
4=2^{2}
$$

$$
r=2
$$

The gap pins the coefficient:

$$
A(6^{2}-2^{2})=96
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

The recovered law is $F(x)=3x^{2}$. At $6$ tonnes:

$$
F(6)=3\\cdot 6^{2}
$$

$$
6^{2}=36
$$

$$
F(6)=3\\cdot 36=108
$$

The companion level is

$$
F(2)=3\\cdot 2^{2}=3\\cdot 4=12
$$

and $108-12=96$ recovers the log entry. The claimed $96$ litres is that gap, not the $6$-tonne level. The $6$-tonne batch uses $108$ litres, so the statement is False.`,
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

The composed map feeds the calibrated inner law into $P(m)=\\frac{m^{4}}{16}$. Flue-gas mass flow follows $m(t)=A t^{\\frac{1}{2}}$ tonnes per hour, and a calibration at $t=9$ recorded $m=6$. Raising a power to a power multiplies the exponents, so both the inner coefficient and the outer fourth power are needed.

The inner law is

$$
m(t)=At^{\\frac{1}{2}}
$$

The calibration uses $9^{\\frac{1}{2}}=3$:

$$
A\\cdot 9^{\\frac{1}{2}}=6
$$

$$
3A=6
$$

$$
A=\\frac{6}{3}=2
$$

The inner law is then $m(t)=2t^{\\frac{1}{2}}$. Substitute into the particulate index:

$$
P\\bigl(m(t)\\bigr)=\\frac{\\bigl(2t^{\\frac{1}{2}}\\bigr)^{4}}{16}
$$

$$
\\bigl(2t^{\\frac{1}{2}}\\bigr)^{4}=2^{4}\\bigl(t^{\\frac{1}{2}}\\bigr)^{4}
$$

$$
2^{4}=16
$$

$$
\\bigl(t^{\\frac{1}{2}}\\bigr)^{4}=t^{\\frac{4}{2}}=t^{2}
$$

$$
P\\bigl(m(t)\\bigr)=\\frac{16t^{2}}{16}
$$

$$
P\\bigl(m(t)\\bigr)=t^{2}
$$

The composed exponent is $2$, so the statement is True.`,
      `**B.** → True

The intermediate reading at throttle $25$ uses the calibrated square-root law, not a proportional scale of the recorded pair. Mass flow follows $m(t)=At^{\\frac{1}{2}}$, and the calibration is $m(9)=6$.

The inner law is

$$
m(t)=At^{\\frac{1}{2}}
$$

The calibration uses $9^{\\frac{1}{2}}=3$:

$$
A\\cdot 9^{\\frac{1}{2}}=6
$$

$$
3A=6
$$

$$
A=2
$$

The recovered law is $m(t)=2t^{\\frac{1}{2}}$. At throttle $25$:

$$
m(25)=2\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
m(25)=2\\cdot 5=10
$$

The scaling rule agrees, because the throttle ratio is $\\frac{25}{9}$ and

$$
\\left(\\frac{25}{9}\\right)^{\\frac{1}{2}}=\\frac{5}{3}
$$

$$
6\\cdot\\frac{5}{3}=10
$$

The claimed mass flow is $10$ tonnes per hour. The mass flow is $10$ tonnes per hour, so the statement is True.`,
      `**C.** → False

Proportional growth would mean composed exponent $1$. Mass flow follows $m(t)=At^{\\frac{1}{2}}$, the calibration is $m(9)=6$, and the particulate index is $P=\\frac{m^{4}}{16}$. Feeding the inner law into the outer one multiplies the exponents.

The inner law is

$$
m(t)=At^{\\frac{1}{2}}
$$

The calibration pins $A$:

$$
A\\cdot 9^{\\frac{1}{2}}=6
$$

$$
3A=6
$$

$$
A=2
$$

Then

$$
P\\bigl(m(t)\\bigr)=\\frac{\\bigl(2t^{\\frac{1}{2}}\\bigr)^{4}}{16}
$$

$$
\\bigl(2t^{\\frac{1}{2}}\\bigr)^{4}=16t^{2}
$$

$$
P\\bigl(m(t)\\bigr)=\\frac{16t^{2}}{16}=t^{2}
$$

Doubling the throttle therefore multiplies the index by

$$
\\frac{P\\bigl(m(2t)\\bigr)}{P\\bigl(m(t)\\bigr)}=2^{2}
$$

$$
2^{2}=4
$$

A proportional law would have returned the factor $2$. The composed exponent is $2$, so the statement is False.`,
      `**D.** → True

Mass flow per unit of throttle is the quotient $\\frac{m(t)}{t}$. Mass flow follows $m(t)=At^{\\frac{1}{2}}$, and the calibration $m(9)=6$ pins $A$. The leftover exponent then decides whether the quotient falls.

The inner law is

$$
m(t)=At^{\\frac{1}{2}}
$$

$$
A\\cdot 9^{\\frac{1}{2}}=6
$$

$$
3A=6
$$

$$
A=2
$$

The inner law is $m(t)=2t^{\\frac{1}{2}}$, so

$$
\\frac{m(t)}{t}=2t^{\\frac{1}{2}-1}
$$

$$
\\frac{m(t)}{t}=2t^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so the quotient falls as $t$ rises. At the calibration,

$$
\\frac{m(9)}{9}=\\frac{6}{9}=\\frac{2}{3}
$$

and at $t=25$,

$$
\\frac{m(25)}{25}=\\frac{10}{25}=\\frac{2}{5}
$$

with $\\frac{2}{5}<\\frac{2}{3}$. Mass flow per unit of throttle falls, so the statement is True.`,
      `**E.** → False

An index of $81$ is inverted by undoing the two stages in reverse. Mass flow follows $m(t)=At^{\\frac{1}{2}}$ with calibration $m(9)=6$, and $P(m)=\\frac{m^{4}}{16}$. After $A$ is recovered, the composed law is a pure square, which inverts by a square root.

The inner law is

$$
m(t)=At^{\\frac{1}{2}}
$$

$$
A\\cdot 9^{\\frac{1}{2}}=6
$$

$$
3A=6
$$

$$
A=2
$$

Compose:

$$
P\\bigl(m(t)\\bigr)=\\frac{\\bigl(2t^{\\frac{1}{2}}\\bigr)^{4}}{16}=t^{2}
$$

At index $81$:

$$
t^{2}=81
$$

$$
t=9
$$

because throttle is positive. The quoted $27$ treats $81$ as if an exponent were a number to divide by. Running the chain forward from $t=9$ returns $m=6$ and

$$
P=\\frac{6^{4}}{16}
$$

$$
6^{2}=36
$$

$$
6^{4}=36^{2}=1296
$$

$$
\\frac{1296}{16}=81
$$

The required throttle setting is $9$, not $27$, so the statement is False.`,
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

Equal waits are the positive roots of $L(d)=Q(d)$. App L follows $L(d)=a d^{\\frac{1}{2}}$ minutes and App Q follows $Q(d)=kd$ minutes. A logged $25$ km trip on App L quoted $20$ minutes, and a logged $100$ km trip on App Q quoted $20$ minutes. Both coefficients must be recovered before the crossing can be solved.

App L's law is

$$
L(d)=a d^{\\frac{1}{2}}
$$

The log uses $25^{\\frac{1}{2}}=5$:

$$
a\\cdot 25^{\\frac{1}{2}}=20
$$

$$
5a=20
$$

$$
a=\\frac{20}{5}=4
$$

App Q's law is

$$
Q(d)=kd
$$

$$
k\\cdot 100=20
$$

$$
k=\\frac{20}{100}=\\frac{1}{5}
$$

Set the recovered laws equal:

$$
4d^{\\frac{1}{2}}=\\frac{1}{5}d
$$

For $d>0$ divide both sides by $d^{\\frac{1}{2}}$:

$$
4=\\frac{1}{5}d^{\\frac{1}{2}}
$$

$$
d^{\\frac{1}{2}}=20
$$

$$
d=20^{2}=400
$$

On $d>0$ there is a single root. Two distinct positive meetings would need a second crossing, which a square-root versus a line cannot produce. They meet only at $d=400$, so the statement is False.`,
      `**B.** → True

App L's quote increases with distance, so a $20$-minute cap becomes a cap on $d$. App L follows $L(d)=a d^{\\frac{1}{2}}$, and a logged $25$ km trip quoted $20$ minutes. That single record recovers $a$ and inverts the cap.

App L's law is

$$
L(d)=a d^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
a\\cdot 5=20
$$

$$
a=\\frac{20}{5}=4
$$

The recovered quote is $L(d)=4d^{\\frac{1}{2}}$. The service-level agreement requires $L(d)\\le 20$:

$$
4d^{\\frac{1}{2}}\\le 20
$$

$$
d^{\\frac{1}{2}}\\le\\frac{20}{4}
$$

$$
d^{\\frac{1}{2}}\\le 5
$$

$$
d\\le 5^{2}
$$

$$
d\\le 25
$$

The endpoint is attained:

$$
L(25)=4\\cdot 5=20
$$

Every longer trip on App L breaches the agreement. App L can serve at most $25$ kilometres under the cap, so the statement is True.`,
      `**C.** → True

Which app leads on a whole interval is the sign of $Q-L$ after both laws are recovered. App L follows $L(d)=a d^{\\frac{1}{2}}$ with $L(25)=20$, and App Q follows $Q(d)=kd$ with $Q(100)=20$. Once App L is strictly faster, the claim is that App Q never catches up, so the ratio $Q/L$ must be shown to stay above $1$.

App L's log:

$$
a\\cdot 25^{\\frac{1}{2}}=20
$$

$$
5a=20
$$

$$
a=4
$$

App Q's log:

$$
k\\cdot 100=20
$$

$$
k=\\frac{1}{5}
$$

The recovered quotes are $L(d)=4d^{\\frac{1}{2}}$ and $Q(d)=\\frac{1}{5}d$. Their ratio is

$$
\\frac{Q(d)}{L(d)}=\\frac{\\frac{1}{5}d}{4d^{\\frac{1}{2}}}
$$

$$
\\frac{Q(d)}{L(d)}=\\frac{1}{20}d^{\\frac{1}{2}}
$$

App L is strictly faster when that ratio exceeds $1$:

$$
\\frac{1}{20}d^{\\frac{1}{2}}>1
$$

$$
d^{\\frac{1}{2}}>20
$$

$$
d>400
$$

The map $d\\mapsto d^{\\frac{1}{2}}$ is strictly increasing on $d>0$, so the ratio itself is strictly increasing. Once it crosses $1$ it stays above $1$. App Q never catches up, so the statement is True.`,
      `**D.** → False

Wait per kilometre is the quotient $\\frac{L(d)}{d}$. App L follows $L(d)=a d^{\\frac{1}{2}}$, and a logged $25$ km trip quoted $20$ minutes. That record pins $a$, after which the leftover exponent decides whether the quotient is constant.

App L's law is

$$
L(d)=a d^{\\frac{1}{2}}
$$

$$
a\\cdot 25^{\\frac{1}{2}}=20
$$

$$
5a=20
$$

$$
a=4
$$

Then

$$
\\frac{L(d)}{d}=4d^{\\frac{1}{2}-1}
$$

$$
\\frac{L(d)}{d}=4d^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so the quotient falls as $d$ grows. At the logged trip it is $\\frac{20}{25}=0.8$, and at $d=100$ it is

$$
\\frac{L(100)}{100}=\\frac{4\\cdot 10}{100}=0.4
$$

The per-kilometre wait is not constant, so the statement is False.`,
      `**E.** → True

The common wait at $400$ km is a level of both recovered laws. App L follows $L(d)=a d^{\\frac{1}{2}}$ with $L(25)=20$, and App Q follows $Q(d)=kd$ with $Q(100)=20$. Both coefficients are needed before the $400$ km quotes can be read.

App L's law is

$$
L(d)=a d^{\\frac{1}{2}}
$$

$$
a\\cdot 25^{\\frac{1}{2}}=20
$$

$$
5a=20
$$

$$
a=4
$$

$$
L(400)=4\\cdot 400^{\\frac{1}{2}}
$$

$$
400^{\\frac{1}{2}}=20
$$

$$
L(400)=4\\cdot 20=80
$$

App Q's law is

$$
Q(d)=kd
$$

$$
k\\cdot 100=20
$$

$$
k=\\frac{1}{5}
$$

$$
Q(400)=\\frac{1}{5}\\cdot 400=80
$$

Both recovered quotes equal $80$. Both apps quote $80$ minutes at $400$ kilometres, so the statement is True.`,
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

Evaporation follows $E(h)=A h^{r}$ after $h>0$, with both constants unknown. The recorded pairs are $E(1)=20$ and $E(4)=40$. The claim is that $r<1$, so the ratio of those two readings is enough.

The ratio of the two evaporations cancels $A$:

$$
\\frac{E(4)}{E(1)}=\\frac{A\\cdot 4^{r}}{A\\cdot 1^{r}}
$$

$$
\\frac{E(4)}{E(1)}=4^{r}
$$

$$
\\frac{40}{20}=4^{r}
$$

$$
2=4^{r}
$$

Because $4=2^{2}$,

$$
2=(2^{2})^{r}
$$

$$
(2^{2})^{r}=2^{2r}
$$

The bases match, so the exponents match:

$$
2r=1
$$

$$
r=\\frac{1}{2}
$$

One half is smaller than one, so evaporation grows more slowly than the humidity deficit, so the statement is True.`,
      `**B.** → False

Evaporation follows $E(h)=A h^{r}$. Doubling the humidity deficit multiplies evaporation by $2^{r}$, so the exponent must be recovered from $E(1)=20$ and $E(4)=40$.

Under a power law the doubling factor is

$$
\\frac{E(2h)}{E(h)}=\\frac{A(2h)^{r}}{A h^{r}}=2^{r}
$$

The recorded ratio cancels $A$ and isolates $r$:

$$
\\frac{E(4)}{E(1)}=\\frac{A\\cdot 4^{r}}{A\\cdot 1^{r}}
$$

$$
\\frac{E(4)}{E(1)}=4^{r}
$$

$$
\\frac{40}{20}=4^{r}
$$

$$
2=4^{r}
$$

Because $4=2^{2}$,

$$
2=(2^{2})^{r}
$$

$$
(2^{2})^{r}=2^{2r}
$$

$$
2r=1
$$

$$
r=\\frac{1}{2}
$$

The doubling multiplier is therefore

$$
2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.414
$$

From the unit-deficit reading $E(1)=20$, a doubled deficit would give

$$
E(2)=20\\cdot 2^{\\frac{1}{2}}\\approx 28.28
$$

Doubling evaporation would have produced $40$. The square root of two is not two, so the statement is False.`,
      `**C.** → True

The claim is a third level, $E(16)=80$, so both constants of $E(h)=A h^{r}$ must be recovered from $E(1)=20$ and $E(4)=40$.

Evaporation follows

$$
E(h)=A h^{r}
$$

The ratio of the two recorded evaporations cancels $A$:

$$
\\frac{E(4)}{E(1)}=\\frac{A\\cdot 4^{r}}{A\\cdot 1^{r}}
$$

$$
\\frac{E(4)}{E(1)}=4^{r}
$$

$$
\\frac{40}{20}=4^{r}
$$

$$
2=4^{r}
$$

Because $4=2^{2}$,

$$
2=(2^{2})^{r}
$$

$$
(2^{2})^{r}=2^{2r}
$$

$$
2r=1
$$

$$
r=\\frac{1}{2}
$$

The unit deficit then pins $A$, because $1^{r}=1$:

$$
A\\cdot 1^{\\frac{1}{2}}=20
$$

$$
1^{\\frac{1}{2}}=1
$$

$$
A\\cdot 1=20
$$

$$
A=20
$$

The recovered law is $E(h)=20h^{\\frac{1}{2}}$. At deficit $16$:

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

The claimed evaporation is $80$ millimetres per day, so the statement is True.`,
      `**D.** → False

A straight line through the first two readings uses the recorded pairs $(1,20)$ and $(4,40)$, then is tested at the third deficit $h=9$, where evaporation was $60$.

The two-point slope is the rise over the run:

$$
\\frac{40-20}{4-1}
$$

$$
\\frac{20}{3}
$$

The line through $(1,20)$ with that slope is

$$
L(h)=20+\\frac{20}{3}(h-1)
$$

At the third deficit $h=9$:

$$
h-1=8
$$

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

The recorded third reading is $60$. The gap is

$$
\\frac{220}{3}-60
$$

$$
60=\\frac{180}{3}
$$

$$
\\frac{220}{3}-\\frac{180}{3}=\\frac{40}{3}
$$

$$
\\frac{40}{3}\\approx 13.33
$$

The line sits about $13.33$ millimetres per day above the third reading, so the statement is False.`,
      `**E.** → False

Forcing the exponent to $1$ makes evaporation linear. The claim recovers the coefficient from the third reading alone, $E(9)=60$, and says that coefficient is $20$.

The forced model is

$$
E(h)=A h^{1}
$$

$$
E(h)=Ah
$$

Substitute the third pair:

$$
A\\cdot 9=60
$$

$$
A=\\frac{60}{9}
$$

$$
\\frac{60}{9}=\\frac{20}{3}
$$

The claimed coefficient $20$ would require

$$
E(9)=20\\cdot 9
$$

$$
20\\cdot 9=180
$$

The recorded third reading is $60$, not $180$. The figure $20$ is the unit-deficit reading $E(1)=20$, which equals $A$ for every exponent because $1^{r}=1$:

$$
A\\cdot 1^{r}=20
$$

$$
A=20
$$

That $A=20$ belongs to the recorded unit deficit, not to a linear fit of the third reading. The recovered linear coefficient is $\\frac{20}{3}$, so the statement is False.`,
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

Net benefit is cooling benefit minus upkeep. Cooling follows $B(n)=A n^{\\frac{1}{2}}$ and upkeep follows $C(n)=kn$. Raising the planting from four thousand trees to nine thousand increased cooling by twelve thousand euros, and at nine thousand trees upkeep was eighteen thousand euros. The claim is the net at $n=9$.

Cooling is the square-root schedule

$$
B(n)=A n^{\\frac{1}{2}}
$$

The square roots at the two logged plantings are whole numbers:

$$
4^{\\frac{1}{2}}=2
$$

$$
9^{\\frac{1}{2}}=3
$$

The recorded benefit gap is therefore

$$
B(9)-B(4)=A\\cdot 9^{\\frac{1}{2}}-A\\cdot 4^{\\frac{1}{2}}
$$

$$
A(3-2)=12
$$

$$
A\\cdot 1=12
$$

$$
A=12
$$

Forward check of that coefficient:

$$
B(4)=12\\cdot 2=24
$$

$$
B(9)=12\\cdot 3=36
$$

$$
36-24=12
$$

which matches the recorded gap. Upkeep is the linear schedule $C(n)=kn$. At nine thousand trees:

$$
C(9)=9k
$$

$$
9k=18
$$

$$
k=2
$$

Net benefit is $N(n)=B(n)-C(n)$. At $n=9$:

$$
B(9)=36
$$

$$
C(9)=2\\cdot 9
$$

$$
2\\cdot 9=18
$$

$$
N(9)=36-18
$$

$$
36-18=18
$$

Net benefit is $18$ thousand euros, so the statement is True.`,
      `**B.** → True

A power function of the planting would carry a single exponent. Net benefit subtracts linear upkeep from square-root cooling, so both coefficients must be recovered first.

The benefit gap between $n=4$ and $n=9$ is $12$:

$$
4^{\\frac{1}{2}}=2
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
A(3-2)=12
$$

$$
A=12
$$

Upkeep at nine thousand trees is $18$:

$$
9k=18
$$

$$
k=2
$$

Netting the two schedules gives

$$
N(n)=12n^{\\frac{1}{2}}-2n
$$

This expression is a sum of two distinct powers of $n$. It is not itself a power of the planting, so the statement is True.`,
      `**C.** → False

The claim is that after upkeep overtakes cooling benefit, planting still more trees restores a positive net. Both schedules must be recovered, then their crossing and the sign of $N$ past that crossing checked.

The benefit gap between four and nine thousand trees recovers $A$:

$$
4^{\\frac{1}{2}}=2
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
A(3-2)=12
$$

$$
A=12
$$

Upkeep at $n=9$ recovers $k$:

$$
9k=18
$$

$$
k=2
$$

The schedules meet when $B(n)=C(n)$:

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

At that planting the net is zero:

$$
B(36)=12\\cdot 6=72
$$

$$
C(36)=2\\cdot 36=72
$$

$$
N(36)=72-72=0
$$

The derivative of the net is

$$
N'(n)=6n^{-\\frac{1}{2}}-2
$$

This is negative when $6n^{-\\frac{1}{2}}<2$, which is $n>9$. Past the crossing at $n=36$ the net is therefore already falling and stays negative. Planting more trees does not restore a positive net, so the statement is False.`,
      `**D.** → True

An extra thousand trees is a finite step of $N(n+1)-N(n)$, which the derivative $N'(n)$ approximates. Cooling is $B(n)=A n^{\\frac{1}{2}}$ and upkeep is $C(n)=kn$, so both coefficients are needed before the two plantings can be compared.

The benefit gap between $n=4$ and $n=9$ is $12$:

$$
4^{\\frac{1}{2}}=2
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
A(3-2)=12
$$

$$
A=12
$$

Upkeep at nine thousand trees is $18$:

$$
9k=18
$$

$$
k=2
$$

Net benefit is then $N(n)=12n^{\\frac{1}{2}}-2n$, with derivative

$$
N'(n)=6n^{-\\frac{1}{2}}-2
$$

At four thousand trees:

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

The finite steps agree in order. From $n=4$ to $n=5$:

$$
N(4)=12\\cdot 2-2\\cdot 4=16
$$

$$
N(5)=12\\sqrt{5}-10\\approx 16.83
$$

$$
N(5)-N(4)\\approx 0.83
$$

From $n=9$ to $n=10$:

$$
N(9)=12\\cdot 3-2\\cdot 9=18
$$

$$
N(10)=12\\sqrt{10}-20\\approx 17.94
$$

$$
N(10)-N(9)\\approx -0.06
$$

Because $0.83>-0.06$, an extra thousand trees adds more to the net at four thousand trees than at nine thousand, so the statement is True.`,
      `**E.** → False

The claim is a net-benefit level at four thousand trees. Cooling follows $B(n)=A n^{\\frac{1}{2}}$ and upkeep follows $C(n)=kn$, so both coefficients must be recovered from the recorded gap and the recorded upkeep.

The square roots at the two logged plantings are

$$
4^{\\frac{1}{2}}=2
$$

$$
9^{\\frac{1}{2}}=3
$$

The benefit rose by $12$ between those plantings:

$$
A(3-2)=12
$$

$$
A=12
$$

Upkeep at nine thousand trees was $18$:

$$
9k=18
$$

$$
k=2
$$

At four thousand trees the two schedules are

$$
B(4)=12\\cdot 2=24
$$

$$
C(4)=2\\cdot 4=8
$$

$$
N(4)=24-8=16
$$

The claimed $24$ is the cooling benefit, not the net. Net benefit is $16$ thousand euros, so the statement is False.`,
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

Weekly demand follows $q(p)=A p^{-2}$. The exponent is given, so the recorded pair $q(5)=80$ pins the coefficient, after which the inverse $p$ in terms of $q$ can be read off.

The demand law is

$$
q(p)=A p^{-2}
$$

Substitute the recorded price:

$$
A\\cdot 5^{-2}=80
$$

$$
5^{2}=25
$$

$$
5^{-2}=\\frac{1}{25}
$$

$$
A\\cdot\\frac{1}{25}=80
$$

$$
A=80\\cdot 25
$$

$$
80\\cdot 25=2000
$$

The calibrated law is

$$
q(p)=2000p^{-2}
$$

$$
q=\\frac{2000}{p^{2}}
$$

A power $q=A p^{r}$ with $r\\neq 0$ inverts by raising to $1/r$:

$$
p=\\left(\\frac{q}{A}\\right)^{\\frac{1}{r}}
$$

Here $r=-2$ and $A=2000$, so

$$
p=\\left(\\frac{q}{2000}\\right)^{\\frac{1}{-2}}
$$

$$
p=\\left(\\frac{2000}{q}\\right)^{\\frac{1}{2}}
$$

$$
p=2000^{\\frac{1}{2}}q^{-\\frac{1}{2}}
$$

Inverting a nonzero power yields another power. Price is a power function of demand with exponent $-\\frac{1}{2}$, so the statement is True.`,
      `**B.** → True

Ten euros is a new price on $q(p)=A p^{-2}$. The exponent is given, so the recorded pair $q(5)=80$ recovers the coefficient before the new level can be read.

The demand law is

$$
q(p)=A p^{-2}
$$

Substitute the recorded price:

$$
A\\cdot 5^{-2}=80
$$

$$
5^{2}=25
$$

$$
5^{-2}=\\frac{1}{25}
$$

$$
A\\cdot\\frac{1}{25}=80
$$

$$
A=80\\cdot 25
$$

$$
80\\cdot 25=2000
$$

The calibrated law is $q(p)=2000p^{-2}$. At ten euros:

$$
q(10)=2000\\cdot 10^{-2}
$$

$$
10^{2}=100
$$

$$
10^{-2}=\\frac{1}{100}
$$

$$
q(10)=\\frac{2000}{100}
$$

$$
\\frac{2000}{100}=20
$$

Demand is $20$ packs a week, so the statement is True.`,
      `**C.** → False

Weekly revenue multiplies price by quantity. Demand follows $q(p)=A p^{-2}$, so the coefficient must be recovered from $q(5)=80$ before the revenue schedule can be written.

The demand law is

$$
q(p)=A p^{-2}
$$

Substitute the recorded pair:

$$
A\\cdot 5^{-2}=80
$$

$$
5^{2}=25
$$

$$
5^{-2}=\\frac{1}{25}
$$

$$
A\\cdot\\frac{1}{25}=80
$$

$$
A=80\\cdot 25
$$

$$
80\\cdot 25=2000
$$

Revenue is $R(p)=p\\cdot q(p)$:

$$
R(p)=p\\cdot 2000p^{-2}
$$

$$
R(p)=2000p^{-1}
$$

$$
R(p)=\\frac{2000}{p}
$$

A schedule that is the same at every price would need exponent $0$. For a price factor $k$ the revenue ratio is

$$
\\frac{R(kp)}{R(p)}=k^{-1}
$$

At the recorded price and at twice that price:

$$
R(5)=\\frac{2000}{5}=400
$$

$$
R(10)=\\frac{2000}{10}=200
$$

$$
\\frac{R(10)}{R(5)}=\\frac{1}{2}
$$

Revenue falls as the price rises, so the statement is False.`,
      `**D.** → True

A quantity target inverts the demand law $q(p)=A p^{-2}$. The exponent is given, so the recorded pair $q(5)=80$ pins $A$ before the target $q=125$ can be solved for $p$.

The demand law is

$$
q(p)=A p^{-2}
$$

Substitute the recorded price:

$$
A\\cdot 5^{-2}=80
$$

$$
5^{2}=25
$$

$$
5^{-2}=\\frac{1}{25}
$$

$$
A\\cdot\\frac{1}{25}=80
$$

$$
A=80\\cdot 25
$$

$$
80\\cdot 25=2000
$$

The inverse of $q=2000p^{-2}$ is

$$
p=\\left(\\frac{2000}{q}\\right)^{\\frac{1}{2}}
$$

The target $q=125$ then reads

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

Only the positive root is a price. Forward substitution returns the target:

$$
q(4)=\\frac{2000}{4^{2}}
$$

$$
4^{2}=16
$$

$$
q(4)=\\frac{2000}{16}
$$

$$
\\frac{2000}{16}=125
$$

The required price is $4$ euros, so the statement is True.`,
      `**E.** → False

Demand follows $q(p)=A p^{-2}$. Quadrupling the price is an input factor of $4$, and the unknown coefficient cancels in the ratio.

The general scale factor for a price multiplier $k$ is

$$
\\frac{q(kp)}{q(p)}=k^{-2}
$$

For $k=4$:

$$
\\frac{q(4p)}{q(p)}=\\frac{A(4p)^{-2}}{A p^{-2}}
$$

$$
\\frac{q(4p)}{q(p)}=4^{-2}
$$

$$
4^{2}=16
$$

$$
4^{-2}=\\frac{1}{16}
$$

A cut to one quarter would be the factor

$$
\\frac{1}{4}=4^{-1}
$$

which would need exponent $-1$. From the recorded pair, quadrupling five euros to twenty euros would leave

$$
\\frac{q(20)}{q(5)}=4^{-2}=\\frac{1}{16}
$$

$$
q(20)=80\\cdot\\frac{1}{16}=5
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

Composed demand substitutes the policy price $p(s)=B s^{\\frac{2}{3}}$ into $q(p)=A p^{\\frac{-3}{2}}$. Both coefficients must be recovered from the pilot $q(16)=50$ and the indexed price $p(8)=16$ before the product of exponents can be read.

Demand follows

$$
q(p)=A p^{\\frac{-3}{2}}
$$

The demand coefficient uses $16^{\\frac{3}{2}}$:

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
A\\cdot 16^{\\frac{-3}{2}}=50
$$

$$
16^{\\frac{-3}{2}}=\\frac{1}{64}
$$

$$
A\\cdot\\frac{1}{64}=50
$$

$$
A=50\\cdot 64
$$

$$
50\\cdot 64=3200
$$

The policy map is

$$
p(s)=B s^{\\frac{2}{3}}
$$

At subsidy index $8$:

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
2^{2}=4
$$

$$
B\\cdot 4=16
$$

$$
B=4
$$

So $p(s)=4s^{\\frac{2}{3}}$. Composing the two powers:

$$
q(p(s))=3200\\bigl(4s^{\\frac{2}{3}}\\bigr)^{\\frac{-3}{2}}
$$

A power of a product splits:

$$
q(p(s))=3200\\cdot 4^{\\frac{-3}{2}}\\cdot s^{\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)}
$$

The numerical power is

$$
4^{\\frac{-3}{2}}=\\bigl(2^{2}\\bigr)^{\\frac{-3}{2}}
$$

$$
\\bigl(2^{2}\\bigr)^{\\frac{-3}{2}}=2^{-3}
$$

$$
2^{-3}=\\frac{1}{8}
$$

The subsidy exponent is

$$
\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)=-1
$$

Therefore

$$
q(p(s))=3200\\cdot\\frac{1}{8}\\cdot s^{-1}
$$

$$
3200\\cdot\\frac{1}{8}=400
$$

$$
q(p(s))=\\frac{400}{s}
$$

The product of composed demand and the subsidy index is the constant $400$:

$$
s\\cdot q(p(s))=400
$$

Inverse proportionality means exponent $-1$ in $s$. Composed demand is inversely proportional to the subsidy index, so the statement is True.`,
      `**B.** → False

Weekly demand follows $q(p)=A p^{\\frac{-3}{2}}$ and the posted price follows $p(s)=B s^{\\frac{2}{3}}$. Composed demand is $q(p(s))$, so the subsidy exponent is the product of those two given exponents.

The general composition is

$$
q(p(s))=A\\bigl(B s^{\\frac{2}{3}}\\bigr)^{\\frac{-3}{2}}
$$

$$
q(p(s))=A B^{\\frac{-3}{2}} s^{\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)}
$$

The subsidy power simplifies:

$$
\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)=-1
$$

An input factor of $3$ therefore multiplies composed demand by $3^{-1}$:

$$
\\frac{q(p(3s))}{q(p(s))}=3^{-1}
$$

$$
3^{-1}=\\frac{1}{3}
$$

Demand falls to a third rather than tripling. Tripling would need a composed exponent of $+1$, so the statement is False.`,
      `**C.** → True

The policy map was calibrated at subsidy index $8$ to the pilot price of $16$ euros, and the pilot sold fifty passes at that price. Composed demand at that same index is therefore the pilot sale.

The stem records

$$
p(8)=16
$$

$$
q(16)=50
$$

Substituting the policy price into demand:

$$
q(p(8))=q(16)
$$

$$
q(p(8))=50
$$

Composed demand is $50$ passes, so the statement is True.`,
      `**D.** → False

Whether composed demand rises or falls with the subsidy index is the sign of the composed exponent. Demand has exponent $\\frac{-3}{2}$ and the policy map has exponent $\\frac{2}{3}$.

$$
q(p(s))=A\\bigl(B s^{\\frac{2}{3}}\\bigr)^{\\frac{-3}{2}}
$$

$$
q(p(s))=A B^{\\frac{-3}{2}} s^{\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)}
$$

The subsidy power is

$$
\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)=-1
$$

So $q(p(s))$ is a negative power of $s$. Raising the subsidy index lowers composed demand, so the statement is False.`,
      `**E.** → False

The claim is a composed-demand level at subsidy index $27$. Demand follows $q(p)=A p^{\\frac{-3}{2}}$ with $q(16)=50$, and the policy map follows $p(s)=B s^{\\frac{2}{3}}$ with $p(8)=16$, so both coefficients must be recovered first.

The demand coefficient uses $16^{\\frac{3}{2}}$:

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
A\\cdot\\frac{1}{64}=50
$$

$$
A=50\\cdot 64=3200
$$

The policy map at $s=8$:

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=2^{2}
$$

$$
2^{2}=4
$$

$$
B\\cdot 4=16
$$

$$
B=4
$$

At subsidy index $27$:

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{2}{3}}=3^{2}
$$

$$
3^{2}=9
$$

$$
p(27)=4\\cdot 9
$$

$$
p(27)=36
$$

Demand at that price:

$$
36^{\\frac{1}{2}}=6
$$

$$
36^{\\frac{3}{2}}=6^{3}
$$

$$
6^{3}=216
$$

$$
q(36)=3200\\cdot 36^{\\frac{-3}{2}}
$$

$$
q(36)=\\frac{3200}{216}
$$

$$
\\frac{3200}{216}=\\frac{400}{27}
$$

$$
\\frac{400}{27}\\approx 14.81
$$

That is not $15$ passes, so the statement is False.`,
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

Sending the whole overnight order to line 2 is a level of $C_{2}(q)=b q^{2}$. The bakery must bake thirty thousand loaves, and the logged run $C_{2}(8)=16$ recovers $b$ before that corner can be scored.

Line 2's cost index is

$$
C_{2}(q)=b q^{2}
$$

Substitute the logged pair, an eight-thousand-loaf run scoring sixteen:

$$
b\\cdot 8^{2}=16
$$

$$
8^{2}=64
$$

$$
64b=16
$$

$$
b=\\frac{16}{64}
$$

$$
\\frac{16}{64}=\\frac{1}{4}
$$

Forward check at the logged run:

$$
C_{2}(8)=\\frac{1}{4}\\cdot 64
$$

$$
\\frac{64}{4}=16
$$

which matches the stem. The recovered law is

$$
C_{2}(q)=\\frac{1}{4}q^{2}
$$

The whole order is $q=30$ thousand loaves on line 2:

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

The corner scores $225$, so the statement is True.`,
      `**B.** → False

The overnight total is fixed at $30$ thousand loaves. Line 2 is cheaper at every common output, but the cheapest plan is the split that equalizes the marginal indices, not necessarily the cheaper-line corner. Both coefficients must be recovered first.

Line 1 follows $C_{1}(q)=a q^{2}$. The logged run $C_{1}(10)=100$ gives

$$
a\\cdot 10^{2}=100
$$

$$
10^{2}=100
$$

$$
100a=100
$$

$$
a=1
$$

Line 2 follows $C_{2}(q)=b q^{2}$. The logged run $C_{2}(8)=16$ gives

$$
b\\cdot 8^{2}=16
$$

$$
8^{2}=64
$$

$$
64b=16
$$

$$
b=\\frac{16}{64}
$$

$$
b=\\frac{1}{4}
$$

The marginal indices are the derivatives $2aq_{1}$ and $2bq_{2}$. Setting them equal:

$$
2a q_{1}=2b q_{2}
$$

$$
2\\cdot 1\\cdot q_{1}=2\\cdot\\frac{1}{4}\\cdot q_{2}
$$

$$
2q_{1}=\\frac{1}{2}q_{2}
$$

$$
q_{2}=4q_{1}
$$

The overnight constraint is $q_{1}+q_{2}=30$:

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

The interior split costs

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

The cheaper-line corner, all $30$ on line 2, is

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

Because $180<225$, concentrating on line 2 is not the cheapest plan, so the statement is False.`,
      `**C.** → True

An even split puts $15$ thousand loaves on each line. That total is compared with six thousand on line 1 and twenty-four thousand on line 2. Both coefficients must be recovered from the logged runs.

Line 1 scored $100$ at $q=10$:

$$
a\\cdot 10^{2}=100
$$

$$
100a=100
$$

$$
a=1
$$

Line 2 scored $16$ at $q=8$:

$$
b\\cdot 8^{2}=16
$$

$$
64b=16
$$

$$
b=\\frac{1}{4}
$$

The even split costs

$$
C_{1}(15)=15^{2}
$$

$$
15^{2}=225
$$

$$
C_{2}(15)=\\frac{1}{4}\\cdot 15^{2}
$$

$$
C_{2}(15)=\\frac{225}{4}
$$

$$
225+\\frac{225}{4}=\\frac{900}{4}+\\frac{225}{4}
$$

$$
\\frac{900}{4}+\\frac{225}{4}=\\frac{1125}{4}
$$

$$
\\frac{1125}{4}=281.25
$$

The six-and-twenty-four split costs

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

Because $281.25>180$, the even split costs more, so the statement is True.`,
      `**D.** → True

The six-and-twenty-four split is a pair of levels, one on each recovered quadratic. Line 1 scored $100$ at ten thousand loaves, and line 2 scored $16$ at eight thousand loaves.

Line 1 follows $C_{1}(q)=a q^{2}$:

$$
a\\cdot 10^{2}=100
$$

$$
10^{2}=100
$$

$$
100a=100
$$

$$
a=1
$$

Line 2 follows $C_{2}(q)=b q^{2}$:

$$
b\\cdot 8^{2}=16
$$

$$
8^{2}=64
$$

$$
64b=16
$$

$$
b=\\frac{16}{64}
$$

$$
b=\\frac{1}{4}
$$

Six thousand loaves on line 1 and twenty-four thousand on line 2 then cost

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
C_{1}(6)+C_{2}(24)=36+144
$$

$$
36+144=180
$$

The split scores $180$, so the statement is True.`,
      `**E.** → False

Average cost on line 1 is the quadratic index divided by own output. The logged run $C_{1}(10)=100$ recovers the coefficient first.

Line 1 follows $C_{1}(q)=a q^{2}$:

$$
a\\cdot 10^{2}=100
$$

$$
10^{2}=100
$$

$$
100a=100
$$

$$
a=1
$$

The average is then

$$
\\frac{C_{1}(q)}{q}=\\frac{a q^{2}}{q}
$$

$$
\\frac{C_{1}(q)}{q}=a q
$$

$$
\\frac{C_{1}(q)}{q}=q
$$

The remaining exponent is $+1$, so the average rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$, so the statement is False.`,
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

For any isoelastic rule $q=A p^{r}$ the point elasticity equals the exponent, because the coefficient cancels in $\\frac{p}{q}\\cdot\\frac{dq}{dp}$. Here the stem gives $r=-2$.

The general elasticity is

$$
\\varepsilon(p)=\\frac{p}{q}\\cdot\\frac{dq}{dp}
$$

Differentiate $q=A p^{r}$:

$$
\\frac{dq}{dp}=r A p^{r-1}
$$

Substitute $q=A p^{r}$:

$$
\\varepsilon(p)=\\frac{p}{A p^{r}}\\cdot r A p^{r-1}
$$

$$
\\varepsilon(p)=r
$$

With the given exponent:

$$
\\varepsilon(p)=-2
$$

The desk record is not needed for this identity. Elasticity is $-2$ at every $p>0$, so the statement is True.`,
      `**B.** → False

The claim is a finite cut from the recorded price $p=10$ to $p=12$. Demand follows $q(p)=A p^{-2}$ with $q(10)=40$, so the coefficient must be recovered before $q(12)$ can be read.

The demand law is

$$
q(p)=A p^{-2}
$$

Substitute the desk record:

$$
A\\cdot 10^{-2}=40
$$

$$
10^{2}=100
$$

$$
10^{-2}=\\frac{1}{100}
$$

$$
A\\cdot\\frac{1}{100}=40
$$

$$
A=40\\cdot 100
$$

$$
40\\cdot 100=4000
$$

At twelve euros:

$$
q(12)=4000\\cdot 12^{-2}
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

The cut is about $12.22$ tickets, not $8$. The figure $8$ is $20\\%$ of the recorded $40$:

$$
0.20\\cdot 40=8
$$

which copies the $20\\%$ price rise instead of raising $1.2$ to the exponent $-2$, so the statement is False.`,
      `**C.** → False

The constant-elasticity shortcut multiplies the exponent by the percentage price move, while the exact rule raises the price factor to the exponent. Demand follows $q(p)=A p^{-2}$, so the exponent is $-2$ and a $10\\%$ rise is the factor $1.1$.

The shortcut gives

$$
\\varepsilon\\cdot 10\\%=-2\\times 10\\%
$$

$$
-2\\times 10\\%=-20\\%
$$

The exact relative change is

$$
\\frac{q(1.1p)}{q(p)}=1.1^{-2}
$$

$$
\\frac{q(1.1p)}{q(p)}-1=1.1^{-2}-1
$$

$$
1.1^{2}=1.21
$$

$$
1.1^{-2}=\\frac{1}{1.21}
$$

$$
\\frac{1}{1.21}-1=\\frac{1-1.21}{1.21}
$$

$$
\\frac{-0.21}{1.21}\\approx -0.1736
$$

The exact cut is about $17.36\\%$, not $20\\%$. The two figures disagree, so the statement is False.`,
      `**D.** → False

Revenue is price times quantity. Demand follows $q(p)=A p^{-2}$ with $q(10)=40$, so the coefficient must be recovered before the revenue schedule can be judged.

The demand law is

$$
q(p)=A p^{-2}
$$

Substitute the desk record:

$$
A\\cdot 10^{-2}=40
$$

$$
10^{2}=100
$$

$$
10^{-2}=\\frac{1}{100}
$$

$$
A\\cdot\\frac{1}{100}=40
$$

$$
A=40\\cdot 100
$$

$$
40\\cdot 100=4000
$$

Revenue is $R(p)=p\\cdot q(p)$:

$$
R(p)=p\\cdot 4000 p^{-2}
$$

$$
R(p)=4000 p^{-1}
$$

$$
R(p)=\\frac{4000}{p}
$$

The revenue exponent $-1$ is negative, so $R$ falls at every price. At the recorded price:

$$
R(10)=\\frac{4000}{10}=400
$$

As $p$ grows without bound,

$$
R(p)\\to 0
$$

Raising the price without bound drives revenue toward zero, so the statement is False.`,
      `**E.** → True

Five euros is a new price on $q(p)=A p^{-2}$. The exponent is given, so the desk record $q(10)=40$ recovers the coefficient before the new level can be read.

The demand law is

$$
q(p)=A p^{-2}
$$

Substitute the recorded pair:

$$
A\\cdot 10^{-2}=40
$$

$$
10^{2}=100
$$

$$
10^{-2}=\\frac{1}{100}
$$

$$
A\\cdot\\frac{1}{100}=40
$$

$$
A=40\\cdot 100
$$

$$
40\\cdot 100=4000
$$

At five euros:

$$
q(5)=4000\\cdot 5^{-2}
$$

$$
5^{2}=25
$$

$$
5^{-2}=\\frac{1}{25}
$$

$$
q(5)=\\frac{4000}{25}
$$

$$
\\frac{4000}{25}=160
$$

The desk sells $160$ tickets, so the statement is True.`,
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

The claim is a throughput level at belt setting $9$. Throughput follows $T(e)=A e^{\\frac{3}{2}}$, and the recorded run $T(4)=64$ recovers the coefficient before that new setting can be read.

The throughput law is

$$
T(e)=A e^{\\frac{3}{2}}
$$

Substitute the recorded pair:

$$
A\\cdot 4^{\\frac{3}{2}}=64
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
8A=64
$$

$$
A=\\frac{64}{8}
$$

$$
A=8
$$

Forward check at the recorded setting:

$$
T(4)=8\\cdot 4^{\\frac{3}{2}}
$$

$$
T(4)=8\\cdot 8
$$

$$
8\\cdot 8=64
$$

which matches the stem. The recovered law is $T(e)=8e^{\\frac{3}{2}}$. At belt setting $9$:

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

A counterfactual coefficient is a plain multiplier in front of the same shape factor $e^{\\frac{3}{2}}$. The ratio of the two throughputs at a fixed setting therefore cancels both the setting and the original $A$.

Throughput follows $T(e)=A e^{\\frac{3}{2}}$. The enlarged law is $T_{c}(e)=1.25 A e^{\\frac{3}{2}}$. Their ratio is

$$
\\frac{T_{c}(e)}{T(e)}=\\frac{1.25 A e^{\\frac{3}{2}}}{A e^{\\frac{3}{2}}}
$$

The shape factor $e^{\\frac{3}{2}}$ cancels:

$$
\\frac{T_{c}(e)}{T(e)}=\\frac{1.25 A}{A}
$$

$$
\\frac{T_{c}(e)}{T(e)}=1.25
$$

Every reading rises by exactly $25\\%$, so the statement is True.`,
      `**C.** → True

A doubling scale factor is a ratio of two model values, so the coefficient appears in both and cancels. Throughput follows $T(e)=A e^{\\frac{3}{2}}$.

The general scale factor for an input multiplier $k$ is

$$
\\frac{T(ke)}{T(e)}=\\frac{A(ke)^{\\frac{3}{2}}}{A e^{\\frac{3}{2}}}=k^{\\frac{3}{2}}
$$

For doubling, $k=2$:

$$
\\frac{T(2e)}{T(e)}=\\frac{A(2e)^{\\frac{3}{2}}}{A e^{\\frac{3}{2}}}
$$

$$
(2e)^{\\frac{3}{2}}=2^{\\frac{3}{2}}e^{\\frac{3}{2}}
$$

$$
\\frac{T(2e)}{T(e)}=2^{\\frac{3}{2}}
$$

The factor is pinned by the exponent alone. It does not depend on $A$, so the statement is True.`,
      `**D.** → False

Under the enlarged coefficient the same cancellation occurs. Throughput follows $T(e)=A e^{\\frac{3}{2}}$, and the counterfactual is $T_{c}(e)=1.25 A e^{\\frac{3}{2}}$.

The doubling ratio under the enlarged law is

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=\\frac{1.25 A (2e)^{\\frac{3}{2}}}{1.25 A e^{\\frac{3}{2}}}
$$

$$
(2e)^{\\frac{3}{2}}=2^{\\frac{3}{2}}e^{\\frac{3}{2}}
$$

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=2^{\\frac{3}{2}}
$$

The original doubling factor is the same:

$$
\\frac{T(2e)}{T(e)}=2^{\\frac{3}{2}}
$$

The factor $1.25$ never survives the ratio. Levels move by $25\\%$ and ratios do not, so the statement is False.`,
      `**E.** → False

The claim is a counterfactual level at belt setting $9$ after enlarging the coefficient by $25\\%$. The recorded run $T(4)=64$ recovers the original $A$ first, then that level is scaled.

The throughput law is

$$
T(e)=A e^{\\frac{3}{2}}
$$

Substitute the recorded pair:

$$
A\\cdot 4^{\\frac{3}{2}}=64
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=2^{3}
$$

$$
2^{3}=8
$$

$$
8A=64
$$

$$
A=8
$$

At belt setting $9$:

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

A $25\\%$ larger coefficient multiplies that reading by $1.25$:

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
