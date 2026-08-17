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
    context: `Marina's harvest in kilograms follows $Y(h)=A h^{r}$ after $h>0$ hours of watering, with both constants unknown. $8$ hours give $4$ kilograms, and $27$ hours give $6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $64$ hours the harvest is already above $7$ kilograms.`,
      `Doubling the watering time doubles the harvest.`,
      `A $27$-hour watering still yields under $5$ kilograms.`,
      `To reach $8$ kilograms she must already exceed $50$ hours.`,
      `The extra harvest from $8$ hours to $27$ hours already exceeds the $8$-hour record.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The two harvests pin $r=\\frac{1}{3}$ and $A=2$, so $Y=2h^{\\frac{1}{3}}$. At $64$ hours the cube root is $4$:

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

$$
8>7
$$

After $64$ hours the harvest is $8$ kilograms, already above $7$, so the statement is True.`,
      `**B.** → False

Doubling hours would double harvest only if $r=1$. The exponent is $\\frac{1}{3}$, so the scale factor is

$$
\\frac{Y(2h)}{Y(h)}=2^{\\frac{1}{3}}
$$

$$
2^{\\frac{1}{3}}\\approx 1.26
$$

The cube root of two is about $1.26$, not $2$. Extra hours still add crop, but far more slowly than a linear clock, so the statement is False.`,
      `**C.** → False

At $27$ hours the cube root is $3$:

$$
Y(27)=2\\cdot 27^{\\frac{1}{3}}
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
Y(27)=6
$$

$$
6>5
$$

The yield is $6$ kilograms, which is not still under $5$, so the statement is False.`,
      `**D.** → True

Eight kilograms on $Y=2h^{\\frac{1}{3}}$ means

$$
2h^{\\frac{1}{3}}=8
$$

$$
h^{\\frac{1}{3}}=4
$$

$$
h=64
$$

$$
64>50
$$

She needs $64$ hours, already past $50$, so the statement is True.`,
      `**E.** → False

The $8$-hour record is $Y(8)=4$ kilograms, the starting level on this stretch, not a running total that later hours are supposed to beat on their own. From $8$ hours to $27$ hours the harvest only moves from $4$ to $6$:

$$
Y(27)-Y(8)=6-4
$$

$$
6-4=2
$$

$$
2<4
$$

Cube-root watering is front-loaded. Those first $8$ hours already delivered $4$ kilograms, and the next $19$ hours add less than that recorded level. An extra-versus-record claim would need the gain to outrun $4$, but the extra is only $2$, so the statement is False.`,
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

**1.** $Y(64)=8>7$. $Y(27)=6$, which is not under $5$. Eight kilograms invert to $h=64>50$.

**2.** Doubling hours multiplies harvest by $2^{\\frac{1}{3}}$, not by $2$.

**3.** The extra from $8$ to $27$ hours is $2$, which does not exceed the $8$-hour record of $4$.

**Answer.** $A=2$ | $r=\\frac{1}{3}$ | $Y(64)=8$ | $Y(27)=6$ | extra $2$ vs record $4$`,
  },
  {
    id: `math-8-12`,
    case_id: `MATH 8.12`,
    title: `A Helpdesk Wait That Falls With the Team`,
    context: `Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. $4$ agents on the shift produce a $24$ minute wait. Staffing cannot exceed $50$ agents. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The wait cut by going from $4$ agents to $9$ already exceeds the wait cut from $9$ agents to $16$.`,
      `A $6$-minute wait would need more than $50$ agents.`,
      `With $36$ agents, callers wait under $10$ minutes.`,
      `Doubling the recorded team of $4$ cuts the wait in half.`,
      `The team that brings the wait down to $8$ minutes already exceeds the $50$-agent cap.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The $4$-agent record pins the coefficient:

$$
A\\cdot 4^{-\\frac{1}{2}}=24
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
\\frac{A}{2}=24
$$

$$
A=48
$$

Wait is then $W(n)=48 n^{-\\frac{1}{2}}$. Square-root staffing buys a smaller cut on each later stretch: the first agents knock the queue down more than the next equal-looking block of hires. With $9$ agents:

$$
W(9)=48\\cdot 9^{-\\frac{1}{2}}
$$

$$
9^{-\\frac{1}{2}}=\\frac{1}{3}
$$

$$
W(9)=16
$$

The wait cut from $4$ agents to $9$ is

$$
24-16=8
$$

With $16$ agents:

$$
W(16)=48\\cdot 16^{-\\frac{1}{2}}
$$

$$
16^{-\\frac{1}{2}}=\\frac{1}{4}
$$

$$
W(16)=12
$$

The wait cut from $9$ agents to $16$ is

$$
16-12=4
$$

$$
8>4
$$

The first stretch cuts $8$ minutes and the second cuts only $4$, so the statement is True.`,
      `**B.** → True

A $6$-minute wait inverts the same square-root law:

$$
48 n^{-\\frac{1}{2}}=6
$$

$$
\\frac{48}{\\sqrt{n}}=6
$$

$$
\\sqrt{n}=8
$$

$$
n=64
$$

$$
64>50
$$

The inversion asks for $64$ agents. The roster cannot go past $50$, so a $6$-minute wait is already out of reach, so the statement is True.`,
      `**C.** → True

With $36$ agents the square root is $6$:

$$
W(36)=48\\cdot 36^{-\\frac{1}{2}}
$$

$$
36^{-\\frac{1}{2}}=\\frac{1}{6}
$$

$$
W(36)=8
$$

$$
8<10
$$

Callers wait $8$ minutes, which is under $10$, so the statement is True.`,
      `**D.** → False

Doubling the recorded team of $4$ would cut the wait in half only if the exponent were $-1$. Wait falls as $n^{-\\frac{1}{2}}$, so eight agents give the scale factor

$$
\\frac{W(8)}{W(4)}=2^{-\\frac{1}{2}}
$$

$$
2^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{2}}
$$

$$
W(8)=\\frac{24}{\\sqrt{2}}
$$

$$
W(8)=12\\sqrt{2}
$$

$$
12\\sqrt{2}\\approx 16.97
$$

Half of the recorded $24$-minute wait is $12$. The wait only falls to about $16.97$ minutes, not to $12$, so the statement is False.`,
      `**E.** → False

An $8$-minute wait means

$$
48 n^{-\\frac{1}{2}}=8
$$

$$
\\sqrt{n}=6
$$

$$
n=36
$$

$$
36<50
$$

The team that hits $8$ minutes is $36$ agents, which still sits inside the $50$-agent cap, so the statement is False.`,
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

**1.** $W(4)=24$, $W(9)=16$, $W(16)=12$. The cut from $4$ to $9$ is $8$, which exceeds the cut of $4$ from $9$ to $16$. $W(36)=8<10$.

**2.** A six-minute wait needs $n=64$, which violates (2). Doubling the team of $4$ gives $W(8)=12\\sqrt{2}\\approx 16.97$, not half of $24$.

**3.** An eight-minute wait needs $n=36$, which still sits inside the cap.

**Answer.** $A=48$ | $W(9)=16$ | $W(16)=12$ | $W(36)=8$ | $n=64$ for six minutes`,
  },
  {
    id: `math-8-13`,
    case_id: `MATH 8.13`,
    title: `Leah's Well and Omar's Well`,
    context: `Leah and Omar pump at the same depth $d>0$ metres. Leah's well follows $Q_{L}(d)=a d^{\\frac{1}{2}}$, and at $9$ metres she gets $12$ litres a minute. Omar's well follows $Q_{O}(d)=k d^{\\frac{3}{2}}$, and at $4$ metres he gets $4$ litres a minute. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $4$ metres Leah already pumps more than $7$ litres a minute.`,
      `Doubling depth from $4$ to $8$ metres doubles Omar's flow.`,
      `Omar already overtakes Leah before they reach $10$ metres.`,
      `At $9$ metres Omar already pumps more than $13$ litres a minute.`,
      `The extra Omar flow from $4$ m to $9$ m already exceeds Leah's $4$ m reading.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Leah's $9$-metre record pins her coefficient:

$$
a\\cdot 9^{\\frac{1}{2}}=12
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
3a=12
$$

$$
a=4
$$

At $4$ metres her square root is $2$:

$$
Q_{L}(4)=4\\cdot 4^{\\frac{1}{2}}
$$

$$
Q_{L}(4)=8
$$

$$
8>7
$$

Those $8$ litres a minute already clear $7$, so the statement is True.`,
      `**B.** → False

Omar's $4$-metre record pins $k=\\frac{1}{2}$, so $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$. Doubling depth would double his flow only if the exponent were $1$. His exponent is $\\frac{3}{2}$, so the scale factor is

$$
\\frac{Q_{O}(2d)}{Q_{O}(d)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
2\\sqrt{2}\\approx 2.83
$$

From $4$ metres that takes him from $4$ litres a minute to about $11.3$, not to $8$. Depth outruns a doubling, so the statement is False.`,
      `**C.** → True

Leah's square-root well starts stronger at shallow depths, while Omar's $\\frac{3}{2}$ well is still a trickle. They meet when

$$
4 d^{\\frac{1}{2}}=\\frac{1}{2} d^{\\frac{3}{2}}
$$

$$
8 d^{\\frac{1}{2}}=d^{\\frac{3}{2}}
$$

For $d>0$, divide by $d^{\\frac{1}{2}}$:

$$
8=d
$$

$$
8<10
$$

Omar's extra full power of depth means that once he catches her he stays ahead. The crossing at $8$ metres is already shallower than $10$, so he overtakes before they reach $10$ metres, so the statement is True.`,
      `**D.** → True

At $9$ metres Omar's three-halves power is $27$:

$$
Q_{O}(9)=\\frac{1}{2}\\cdot 9^{\\frac{3}{2}}
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
Q_{O}(9)=\\frac{27}{2}
$$

$$
\\frac{27}{2}=13.5
$$

$$
13.5>13
$$

He already pumps $13.5$ litres a minute, so the statement is True.`,
      `**E.** → True

Omar at $4$ m is $Q_{O}(4)=4$. At $9$ m he is at $13.5$, so the extra is

$$
13.5-4=9.5
$$

Leah's $4$ m reading is $Q_{L}(4)=8$. Then

$$
9.5>8
$$

Omar's gain on that stretch already outruns Leah's recorded $4$-metre flow, so the statement is True.`,
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

**1.** $Q_{L}(4)=8>7$. $Q_{O}(9)=13.5>13$. They meet at $d=8$, before ten metres.

**2.** Doubling depth multiplies Omar's flow by $2^{\\frac{3}{2}}$, not by $2$.

**3.** Omar's extra from $4$ m to $9$ m is $9.5$, which already exceeds Leah's $4$ m reading of $8$.

**Answer.** $a=4$ | $k=\\frac{1}{2}$ | $Q_{L}(4)=8$ | $Q_{O}(9)=13.5$ | crossing at $d=8$`,
  },
  {
    id: `math-8-14`,
    case_id: `MATH 8.14`,
    title: `Nora's Print Shop`,
    context: `Nora bills a run of $n>0$ copies as a fixed setup plus a square-root charge, $C(n)=F+A n^{\\frac{1}{2}}$. A $16$-copy run costs $250$ euros, and a $64$-copy run costs $450$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A run of $25$ copies already costs more than $280$ euros.`,
      `Doubling a $16$-copy run doubles the bill.`,
      `A run of $36$ copies costs more than $400$ euros.`,
      `The extra cost from $16$ to $64$ copies already exceeds the $16$-copy bill.`,
      `A $1$-copy run already costs more than $90$ euros.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

Subtracting the two invoices cancels the setup:

$$
(F+8A)-(F+4A)=450-250
$$

$$
4A=200
$$

$$
A=50
$$

The $16$-copy invoice then pins $F=50$, so $C(n)=50+50 n^{\\frac{1}{2}}$. At $25$ copies the square root is $5$:

$$
C(25)=50+50\\cdot 5
$$

$$
C(25)=300
$$

$$
300>280
$$

The bill is $300$ euros, already above $280$, so the statement is True.`,
      `**B.** → False

Doubling a $16$-copy run would double the bill only if $C$ were proportional to $n$. The bill is a $50$-euro setup plus a square-root term. Twice the recorded $250$ would be $500$. At $32$ copies:

$$
C(32)=50+50\\cdot 32^{\\frac{1}{2}}
$$

$$
32^{\\frac{1}{2}}=4\\sqrt{2}
$$

$$
C(32)=50+200\\sqrt{2}
$$

$$
C(32)\\approx 332.8
$$

The setup does not double, and the variable part only grows with $\\sqrt{2}$. The bill rises to about $333$ euros, not to $500$, so the statement is False.`,
      `**C.** → False

At $36$ copies the square root is $6$:

$$
C(36)=50+50\\cdot 6
$$

$$
C(36)=350
$$

$$
350<400
$$

The bill is $350$ euros, which is not more than $400$, so the statement is False.`,
      `**D.** → False

The $16$-copy invoice is $250$ euros. At $64$ copies the bill is $450$, so the extra on that stretch is

$$
450-250=200
$$

$$
200<250
$$

Quadrupling the run does not quadruple the bill: the setup stays $50$, and $\\sqrt{n}$ only doubles from $4$ to $8$. Extra versus recorded asks whether that $200$ already outruns the starting $250$. It does not. The extra falls short of the $16$-copy bill, so the statement is False.`,
      `**E.** → True

A single copy still pays the whole setup:

$$
C(1)=50+50\\cdot 1^{\\frac{1}{2}}
$$

$$
C(1)=100
$$

$$
100>90
$$

The $1$-copy run already costs $100$ euros, so the statement is True.`,
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

**1.** $C(25)=300>280$. $C(36)=350$, which is not more than $400$. $C(1)=100>90$.

**2.** Doubling $16$ copies gives $C(32)\\approx 332.8$, not $500$.

**3.** The extra from $16$ to $64$ copies is $200$, which does not exceed the $16$-copy bill of $250$.

**Answer.** $F=50$ | $A=50$ | $C(25)=300$ | $C(36)=350$ | $C(1)=100$ | extra $200$ vs bill $250$`,
  },
  {
    id: `math-8-15`,
    case_id: `MATH 8.15`,
    title: `A Refinery Against a Linear Quote`,
    context: `A refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. Raising purity from $9$ to $16$ increased metal output by $296$ tonnes. That metal is then converted to alloy strength $S=\\frac{1}{2}M^{\\frac{2}{3}}$. A rival mill quotes strength directly as $1.8u+5$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `On ore of purity $36$, the refinery's strength is more than $70$.`,
      `On ore of purity $9$, the refinery's strength is already above $20$.`,
      `Doubling purity from $9$ to $18$ doubles the refinery's strength.`,
      `The two quotes already meet below purity $30$.`,
      `The extra strength from purity $9$ to $36$ already exceeds the strength at $9$.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The audited gain of $296$ tonnes recovers $A=8$:

$$
A\\bigl(16^{\\frac{3}{2}}-9^{\\frac{3}{2}}\\bigr)=296
$$

$$
A(64-27)=296
$$

$$
37A=296
$$

$$
A=8
$$

Strength then composes with that law. The $\\frac{3}{2}$ and $\\frac{2}{3}$ cancel, leaving $S(u)=2u$. At purity $36$:

$$
S(36)=2\\cdot 36
$$

$$
S(36)=72
$$

$$
72>70
$$

The composed strength is $72$, already more than $70$, so the statement is True.`,
      `**B.** → False

At purity $9$:

$$
S(9)=2\\cdot 9
$$

$$
S(9)=18
$$

$$
18<20
$$

The refinery's strength is $18$, which is not already above $20$, so the statement is False.`,
      `**C.** → True

After composition the refinery is linear: $S(u)=2u$. Doubling purity doubles strength precisely because the leftover exponent is $1$, the one case where a doubling of the input really does double the output. From purity $9$ to $18$:

$$
S(18)=2\\cdot 18
$$

$$
S(18)=36
$$

$$
\\frac{S(18)}{S(9)}=\\frac{36}{18}
$$

$$
\\frac{36}{18}=2
$$

The $\\frac{3}{2}$ on metal and the $\\frac{2}{3}$ on strength cancelled, which is why this doubling works when a raw power usually would not, so the statement is True.`,
      `**D.** → True

The refinery line $S(u)=2u$ meets the rival $1.8u+5$ when

$$
2u=1.8u+5
$$

$$
0.2u=5
$$

$$
u=25
$$

$$
25<30
$$

A linear quote with a leftover intercept starts above the origin, so the steeper refinery line catches it once, at purity $25$, already below $30$, so the statement is True.`,
      `**E.** → True

Strength at purity $9$ is $18$. At purity $36$ it is $72$, so the extra is

$$
72-18=54
$$

$$
54>18
$$

The extra already exceeds the strength at $9$, so the statement is True.`,
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

**1.** $S(36)=72>70$. $S(9)=18$, which is not above $20$. Doubling purity from $9$ to $18$ doubles strength because the composed exponent is $1$.

**2.** Equation (2) meets at $u=25<30$. The extra from $9$ to $36$ is $54$, which already exceeds $S(9)=18$.

**Answer.** $A=8$ | $S(u)=2u$ | $S(9)=18$ | $S(36)=72$ | crossing at $u=25$`,
  },
  {
    id: `math-8-16`,
    case_id: `MATH 8.16`,
    title: `Server Peak Load Between a Doubling Rule and an Alarm`,
    context: `A monitoring team models a server's peak load as $L(x)=A x^{r}$, where $x>0$ is the number of simultaneous jobs. Stress tests show that doubling the job count multiplies peak load by $4$, and a run with $8$ simultaneous jobs recorded a peak load of $32$. The hardware alarm trips at a peak load of $200$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising the job count from $8$ to $16$ adds more load than the recorded peak of $32$.`,
      `The hardware alarm already trips at $16$ simultaneous jobs.`,
      `Load per job at $16$ jobs already exceeds load per job at $8$.`,
      `The job count that trips the alarm is already above $18$.`,
      `After $10$ simultaneous jobs, peak load is already above $40$.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The doubling test cancels $A$ and isolates the exponent:

$$
2^{r}=4
$$

$$
r=2
$$

The $8$-job run then pins $A=\\frac{1}{2}$, so $L(x)=\\frac{1}{2}x^{2}$. The recorded peak at $8$ jobs is $32$. At $16$ jobs:

$$
L(16)=\\frac{1}{2}\\cdot 16^{2}
$$

$$
16^{2}=256
$$

$$
L(16)=128
$$

$$
128-32=96
$$

$$
96>32
$$

Quadratic load is back-loaded: doubling jobs adds $96$, which already outruns the original peak of $32$, so the statement is True.`,
      `**B.** → False

At $16$ jobs the peak is $L(16)=128$. Then

$$
128<200
$$

The alarm of $200$ is still untripped, so the statement is False.`,
      `**C.** → True

Load per job divides $L(x)=\\frac{1}{2}x^{2}$ by $x$, which leaves a leftover exponent of $1$:

$$
\\frac{L(x)}{x}=\\frac{1}{2}x
$$

At $8$ jobs that quotient is $4$. At $16$ jobs it is $8$. Because $r>1$, each extra job still raises the load on every job already running, so the statement is True.`,
      `**D.** → True

The alarm trips at a peak of $200$:

$$
\\frac{1}{2}x^{2}=200
$$

$$
x^{2}=400
$$

$$
x=20
$$

$$
20>18
$$

The trip sits at $20$ jobs, already above $18$, so the statement is True.`,
      `**E.** → True

After $10$ simultaneous jobs:

$$
L(10)=\\frac{1}{2}\\cdot 10^{2}
$$

$$
L(10)=50
$$

$$
50>40
$$

The peak is $50$, already above $40$, so the statement is True.`,
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

**1.** $L(8)=32$ and $L(16)=128$, so the extra load $96$ already exceeds the recorded peak of $32$. The alarm is still untripped at $16$ jobs, and it trips at $x=20>18$.

**2.** Load per job is $\\frac{1}{2}x$, so $\\frac{L(16)}{16}=8$ already exceeds $\\frac{L(8)}{8}=4$. $L(10)=50>40$.

**Answer.** $r=2$ | $A=\\frac{1}{2}$ | $L(10)=50$ | $L(16)=128$ | alarm at $x=20$`,
  },
  {
    id: `math-8-17`,
    case_id: `MATH 8.17`,
    title: `Survey Reach Against a Fieldwork Budget Cap`,
    context: `Usable survey responses follow $Q(x)=A x^{\\frac{1}{2}}$, where $x>0$ measures outreach intensity. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The fieldwork budget caps outreach intensity at $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The extra responses from intensity $25$ to $100$ fall short of the extra from $100$ to $400$.`,
      `Doubling intensity from $25$ to $50$ doubles usable responses.`,
      `At intensity $81$ the survey already yields more than $100$ usable responses.`,
      `The budget cap allows at most $200$ usable responses.`,
      `Intensity that yields $180$ responses already exceeds the budget cap.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded gain is a difference of two square-root levels:

$$
A\\bigl(100^{\\frac{1}{2}}-25^{\\frac{1}{2}}\\bigr)=60
$$

$$
5A=60
$$

$$
A=12
$$

Responses are $Q(x)=12 x^{\\frac{1}{2}}$. From intensity $25$ to $100$ the extra is $60$. From $100$ to $400$:

$$
Q(400)=12\\cdot 20
$$

$$
Q(400)=240
$$

$$
240-120=120
$$

$$
60<120
$$

The first extra is $60$ responses and the second is $120$, so the statement is True.`,
      `**B.** → False

Doubling intensity would double responses only if the exponent were $1$. A square-root survey yields the factor $\\sqrt{2}\\approx 1.41$. From $25$ to $50$:

$$
Q(25)=12\\cdot 5
$$

$$
Q(25)=60
$$

$$
Q(50)=12\\cdot\\sqrt{50}
$$

$$
Q(50)=60\\sqrt{2}
$$

$$
Q(50)\\approx 84.85
$$

Doubling the recorded $60$ responses would be $120$. Extra outreach still helps, but each new block of intensity buys fewer extra responses. The yield only rises to about $84.85$, so the statement is False.`,
      `**C.** → True

At intensity $81$ the square root is $9$:

$$
Q(81)=12\\cdot 9
$$

$$
Q(81)=108
$$

$$
108>100
$$

The yield is $108$, already above $100$, so the statement is True.`,
      `**D.** → False

The budget caps intensity at $400$, not the yield. At that cap:

$$
Q(400)=240
$$

$$
240>200
$$

The cap still allows $240$ usable responses, which is more than $200$, so the statement is False.`,
      `**E.** → False

A yield of $180$ means

$$
12 x^{\\frac{1}{2}}=180
$$

$$
x^{\\frac{1}{2}}=15
$$

$$
x=225
$$

$$
225<400
$$

Intensity $225$ still sits inside the budget cap of $400$, so the statement is False.`,
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

**1.** $Q(25)=60$, $Q(100)=120$, $Q(400)=240$. The extra from $25$ to $100$ is $60$, which falls short of the extra $120$ from $100$ to $400$. Doubling intensity from $25$ to $50$ gives $Q(50)=60\\sqrt{2}\\approx 84.85$, not $120$.

**2.** $Q(81)=108>100$. The cap allows $Q(400)=240$, more than $200$. A yield of $180$ needs $x=225$, inside the cap.

**Answer.** $A=12$ | $Q(81)=108$ | $Q(400)=240$ | $x=225$ for $Q=180$`,
  },
  {
    id: `math-8-18`,
    case_id: `MATH 8.18`,
    title: `Quadratic and Linear Inspection Costs That Meet Once`,
    context: `Two inspection procedures are costed for a batch of $n>0$ documents. The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. Records show that on a batch of $16$ documents the two procedures cost the same, $256$ each. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `On a batch of $9$ documents the automated procedure costs under $100$.`,
      `Doubling a $16$-document batch doubles automated cost.`,
      `At $25$ documents the two procedures differ by less than $100$.`,
      `At $25$ documents the automated bill already exceeds $600$.`,
      `The extra automated cost from $16$ to $25$ documents already exceeds the $16$-document automated bill.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The common bill pins both coefficients: $a=1$ and $b=16$, so $C(n)=n^{2}$ and $D(n)=16n$. At $9$ documents:

$$
C(9)=9^{2}
$$

$$
C(9)=81
$$

$$
81<100
$$

The automated bill is $81$, which is under $100$, so the statement is True.`,
      `**B.** → False

Doubling a $16$-document batch would double automated cost only if the exponent were $1$. The automated law is a square, so the scale factor is

$$
\\frac{C(2n)}{C(n)}=2^{2}
$$

$$
2^{2}=4
$$

From $16$ documents that takes the bill from $256$ to $1024$, not to $512$. A square quadruples when the batch doubles, so the statement is False.`,
      `**C.** → False

At $25$ documents the automated bill is $625$ and the manual bill is $400$:

$$
C(25)-D(25)=625-400
$$

$$
625-400=225
$$

$$
225>100
$$

Past the meeting point the quadratic has already pulled $225$ ahead of the line, which is not less than $100$, so the statement is False.`,
      `**D.** → True

At $25$ documents:

$$
C(25)=25^{2}
$$

$$
C(25)=625
$$

$$
625>600
$$

The automated bill is $625$, already above $600$, so the statement is True.`,
      `**E.** → True

The $16$-document automated bill is $256$. At $25$ documents it is $625$, so the extra is

$$
625-256=369
$$

$$
369>256
$$

Quadratic cost is back-loaded: those nine extra documents add more than the entire original invoice. The extra already exceeds the $16$-document automated bill, so the statement is True.`,
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

**1.** $C(9)=81<100$. $C(25)=625>600$. At $n=25$ the gap is $225$, not less than $100$.

**2.** Doubling a $16$-document batch multiplies automated cost by $4$, not by $2$.

**3.** The extra automated cost from $16$ to $25$ is $369$, which already exceeds the $16$-document bill of $256$.

**Answer.** $a=1$ | $b=16$ | $C(9)=81$ | $C(25)=625$ | gap $225$ | extra $369$ vs bill $256$`,
  },
  {
    id: `math-8-19`,
    case_id: `MATH 8.19`,
    title: `Warehouse Throughput With a Contractual Ceiling`,
    context: `Warehouse throughput follows $H(s)=A s^{\\frac{1}{2}}$ pallets per hour, where $s>0$ is the number of staff on shift. A shift with $16$ staff moved $32$ pallets per hour. The service contract caps billed throughput at $80$ pallets per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Two separate $16$-staff shifts already move as many pallets as one $64$-staff shift.`,
      `The contract ceiling is already reached with $64$ staff.`,
      `The extra throughput from $16$ to $36$ staff equals the extra from $36$ to $64$.`,
      `With $81$ staff, billed throughput is already above $70$ pallets per hour.`,
      `Staffing that bills $80$ pallets already exceeds $90$ people.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The $16$-staff record pins $A=8$, so $H(s)=8s^{\\frac{1}{2}}$. Square-root staffing is subadditive in a precise way: quadrupling staff only doubles throughput. Two separate $16$-staff shifts each move $32$:

$$
H(16)=8\\cdot 4
$$

$$
H(16)=32
$$

$$
2\\cdot H(16)=64
$$

One $64$-staff shift:

$$
H(64)=8\\cdot 8
$$

$$
H(64)=64
$$

Splitting the roster into two shifts already matches the single large shift, so the statement is True.`,
      `**B.** → False

At $64$ staff the uncapped throughput is $H(64)=64$. Then

$$
64<80
$$

Billed throughput is still $64$ pallets an hour, below the contract ceiling of $80$, so the statement is False.`,
      `**C.** → True

From $16$ staff to $36$:

$$
H(36)=8\\cdot 6
$$

$$
H(36)=48
$$

$$
48-32=16
$$

From $36$ staff to $64$:

$$
H(64)=64
$$

$$
64-48=16
$$

The two extras are equal, so the statement is True.`,
      `**D.** → True

Billed throughput is $\\min(H,80)$. With $81$ staff:

$$
H(81)=8\\cdot 9
$$

$$
H(81)=72
$$

$$
72<80
$$

The ceiling has not yet bound, so billed throughput is still the uncapped $72$. Then

$$
72>70
$$

Billed throughput is $72$ pallets per hour, already above $70$, so the statement is True.`,
      `**E.** → True

Billing $80$ pallets means the ceiling just binds:

$$
8 s^{\\frac{1}{2}}=80
$$

$$
s^{\\frac{1}{2}}=10
$$

$$
s=100
$$

$$
100>90
$$

The staffing that bills $80$ is $100$ people, already above $90$, so the statement is True.`,
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

**1.** $H(16)=32$ and $H(64)=64$, so two $16$-staff shifts already match one $64$-staff shift. $H(64)=64<80$. The extras $H(36)-H(16)$ and $H(64)-H(36)$ are both $16$.

**2.** $H(81)=72>70$, still below the cap, so billed throughput is $72$. The cap binds at $s=100>90$.

**Answer.** $A=8$ | $H(16)=32$ | $H(36)=48$ | $H(64)=64$ | $H(81)=72$ | cap binds at $s=100$`,
  },
  {
    id: `math-8-20`,
    case_id: `MATH 8.20`,
    title: `Response Time Recovered from a Server Upgrade`,
    context: `A service's median response time follows $W(k)=A k^{-\\frac{3}{2}}$ milliseconds, where $k>0$ is the number of servers. The upgrade log does not state $A$: it records only that moving from $4$ servers to $9$ servers cut the median response time by exactly $19$ ms. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Moving from $4$ servers to $9$ cuts the median wait by more than $15$ milliseconds.`,
      `With $4$ servers the median wait is already above $25$ milliseconds.`,
      `The wait cut from $4$ to $9$ servers already exceeds the remaining wait at $9$ servers.`,
      `Doubling the server count from $4$ to $8$ halves the median wait.`,
      `With $9$ servers the median wait is more than $10$ milliseconds.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded cut is a difference of two levels:

$$
A\\bigl(4^{-\\frac{3}{2}}-9^{-\\frac{3}{2}}\\bigr)=19
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
9^{-\\frac{3}{2}}=\\frac{1}{27}
$$

$$
\\frac{1}{8}-\\frac{1}{27}=\\frac{19}{216}
$$

$$
A\\cdot\\frac{19}{216}=19
$$

$$
A=216
$$

Wait is $W(k)=216 k^{-\\frac{3}{2}}$. From $4$ servers to $9$:

$$
W(4)=27
$$

$$
W(9)=8
$$

$$
27-8=19
$$

$$
19>15
$$

The cut is $19$ milliseconds, already more than $15$, so the statement is True.`,
      `**B.** → True

With $4$ servers:

$$
W(4)=216\\cdot\\frac{1}{8}
$$

$$
W(4)=27
$$

$$
27>25
$$

The median wait is $27$ milliseconds, already above $25$, so the statement is True.`,
      `**C.** → True

The wait cut from $4$ to $9$ is $19$, and the remaining wait at $9$ is $W(9)=8$. Then

$$
19>8
$$

The cut of $19$ milliseconds already exceeds the remaining $8$, so the statement is True.`,
      `**D.** → False

Doubling servers would halve wait only if the exponent were $-1$. The exponent is $-\\frac{3}{2}$, so each doubling multiplies wait by

$$
2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}
$$

$$
\\frac{1}{2\\sqrt{2}}\\approx 0.354
$$

From $4$ servers to $8$:

$$
W(8)=216\\cdot 8^{-\\frac{3}{2}}
$$

$$
8^{\\frac{3}{2}}=16\\sqrt{2}
$$

$$
W(8)=\\frac{216}{16\\sqrt{2}}
$$

$$
W(8)=\\frac{27}{2\\sqrt{2}}
$$

$$
\\frac{27}{2\\sqrt{2}}\\approx 9.55
$$

Half of the $4$-server wait of $27$ is $13.5$. The extra half-power in the exponent is why the wait falls to about $9.55$ milliseconds, past a mere halving, so the statement is False.`,
      `**E.** → False

With $9$ servers:

$$
W(9)=8
$$

$$
8<10
$$

The median wait is $8$ milliseconds, which is not more than $10$, so the statement is False.`,
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

**1.** $W(4)=27>25$ and $W(9)=8$. The cut $19$ exceeds both $15$ milliseconds and the remaining wait of $8$.

**2.** Doubling from $4$ to $8$ servers gives $W(8)\\approx 9.55$, not half of $27$. $W(9)=8$, which is not more than $10$.

**Answer.** $A=216$ | $W(4)=27$ | $W(9)=8$ | $W(8)\\approx 9.55$`,
  },
  {
    id: `math-8-21`,
    case_id: `MATH 8.21`,
    title: `Isoelastic Subscription Demand and Its Revenue`,
    context: `Monthly subscriptions follow $q(p)=A p^{-2}$, where $p>0$ is the price in euros. At $5$ euros the service sells $400$ subscriptions. Revenue is $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Cutting the price from $20$ euros to $5$ euros raises revenue by more than $1400$.`,
      `At a price of $16$ euros, monthly revenue is already under $700$.`,
      `Doubling the $5$-euro price halves demand.`,
      `At twenty euros the curve sells fewer than $30$ subscriptions.`,
      `The price that yields $2500$ of monthly revenue is already under $5$ euros.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Revenue is price times quantity. With demand of the form $A p^{-2}$ the product collapses to $R=A p^{-1}$, so a cheaper price raises the bill rather than cutting it. The recorded pair $q(5)=400$ pins the coefficient:

$$
A\\cdot 5^{-2}=400
$$

$$
5^{-2}=\\frac{1}{25}
$$

$$
\\frac{A}{25}=400
$$

$$
A=10000
$$

Revenue is then $R=\\frac{10000}{p}$. At twenty euros:

$$
R(20)=\\frac{10000}{20}
$$

$$
R(20)=500
$$

At five euros:

$$
R(5)=\\frac{10000}{5}
$$

$$
R(5)=2000
$$

The extra revenue from the price cut is the difference of those two bills:

$$
2000-500=1500
$$

$$
1500>1400
$$

Cutting the price from twenty euros to five euros raises revenue by $1500$, which is more than $1400$, so the statement is True.`,
      `**B.** → True

At sixteen euros:

$$
R(16)=\\frac{10000}{16}
$$

$$
R(16)=625
$$

$$
625<700
$$

Monthly revenue is $625$ euros, already under $700$, so the statement is True.`,
      `**C.** → False

Doubling the five-euro price would halve demand only if the demand exponent were $-1$. The exponent here is $-2$, so the scale factor is

$$
\\frac{q(10)}{q(5)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The recorded demand is $q(5)=400$, hence

$$
q(10)=\\frac{400}{4}
$$

$$
q(10)=100
$$

Demand falls to one quarter, not to one half, so the statement is False.`,
      `**D.** → True

Twenty euros against the demand curve:

$$
q(20)=\\frac{10000}{20^{2}}
$$

$$
20^{2}=400
$$

$$
q(20)=\\frac{10000}{400}
$$

$$
q(20)=25
$$

$$
25<30
$$

The curve sells $25$ subscriptions, fewer than $30$, so the statement is True.`,
      `**E.** → True

Monthly revenue of $2500$ inverts $R=\\frac{10000}{p}$:

$$
\\frac{10000}{p}=2500
$$

$$
p=\\frac{10000}{2500}
$$

$$
p=4
$$

$$
4<5
$$

The price that yields $2500$ is $4$ euros, already under $5$ euros, so the statement is True.`,
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

**1.** $R(20)=500$ and $R(5)=2000$, so cutting the price from $20$ to $5$ raises revenue by $1500>1400$. $R(16)=625<700$ and $q(20)=25<30$.

**2.** Doubling the $5$-euro price multiplies demand by $\\frac{1}{4}$, not by $\\frac{1}{2}$. $R=2500$ inverts to $p=4<5$.

**Answer.** $A=10000$ | $q(20)=25$ | $R(16)=625$ | $R(5)-R(20)=1500$ | $p=4$ for $R=2500$`,
  },
  {
    id: `math-8-22`,
    case_id: `MATH 8.22`,
    title: `Audit Fees With a Fixed Charge on Top of a Power Term`,
    context: `An audit firm bills $C(n)=F+a n^{\\frac{1}{2}}$ for a client with $n>0$ accounts. $100$ accounts were billed at $500$, and $400$ accounts at $800$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `An engagement covering $900$ accounts is billed at more than $1000$.`,
      `Two hundred accounts cost more than $750$.`,
      `Doubling $100$ accounts doubles the bill.`,
      `The extra bill from $100$ to $400$ accounts already exceeds the $100$-account bill.`,
      `A $100$-account job already costs more than $450$.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

The two invoices isolate the intercept and the square-root coefficient. Subtracting cancels the fixed charge:

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

The bill is $C(n)=200+30 n^{\\frac{1}{2}}$. At nine hundred accounts the square root is $30$:

$$
C(900)=200+30\\cdot 30
$$

$$
C(900)=200+900
$$

$$
C(900)=1100
$$

$$
1100>1000
$$

The engagement is billed at $1100$, more than $1000$, so the statement is True.`,
      `**B.** → False

At two hundred accounts the square root is not an integer:

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

$$
624<750
$$

The bill is about $624$, which is not more than $750$, so the statement is False.`,
      `**C.** → False

Doubling the account count would double the whole bill only if the schedule were a pure power with exponent $1$. Here a fixed engagement fee sits beside a square-root term, so neither piece scales with $n$ itself. From the hundred-account invoice $C(100)=500$, a doubling claim wants $1000$. Directly:

$$
C(200)=200+30\\cdot\\sqrt{200}
$$

$$
\\sqrt{200}=10\\sqrt{2}
$$

$$
C(200)=200+300\\sqrt{2}
$$

$$
C(200)\\approx 624
$$

$$
624<1000
$$

The bill rises, but nowhere near a doubling, so the statement is False.`,
      `**D.** → False

The extra bill is a difference of two invoices, not a new level. Both bills already include the same $200$ engagement fee, so that fee cancels from the extra and cannot help it overtake the original invoice. The square-root piece at one hundred accounts is $300$ and at four hundred accounts is $600$, so the extra is only $300$. The recorded hundred-account bill is $500$:

$$
C(400)-C(100)=800-500
$$

$$
800-500=300
$$

$$
300<500
$$

The extra of $300$ does not exceed the $100$-account bill of $500$, so the statement is False.`,
      `**E.** → True

The hundred-account invoice is already on file:

$$
C(100)=500
$$

$$
500>450
$$

A $100$-account job costs $500$, already more than $450$, so the statement is True.`,
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

**1.** $C(900)=1100>1000$. $C(200)\\approx 624$, which is not more than $750$. $C(100)=500>450$.

**2.** Doubling $100$ accounts does not double the bill: $C(200)\\approx 624$, not $1000$. The extra from $100$ to $400$ is $300$, which does not exceed the $100$-account bill of $500$.

**Answer.** $F=200$ | $a=30$ | $C(900)=1100$ | $C(200)\\approx 624$ | extra $300$`,
  },
  {
    id: `math-8-23`,
    case_id: `MATH 8.23`,
    title: `Fleet Growth Combined With Falling Emission Intensity`,
    context: `An electric-vehicle programme is tracked by two linked power laws. The fleet after $t>0$ years is $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles, and average emission intensity follows $e(a)=k a^{-\\frac{1}{2}}$ kilograms per thousand vehicles. When the fleet has $16$ thousand vehicles, intensity is $30$ kilograms. Total fleet emissions are $E=a\\,e(a)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $16$ years, total fleet emissions already exceed $400$.`,
      `Doubling elapsed time from $1$ year to $2$ years doubles emissions.`,
      `After $1$ year, total fleet emissions are still under $250$.`,
      `After $81$ years, emissions already exceed $700$.`,
      `The extra emissions from year $1$ to year $16$ already exceed the year-$1$ total.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Intensity is recovered from the sixteen-thousand reading:

$$
k\\cdot 16^{-\\frac{1}{2}}=30
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
\\frac{k}{4}=30
$$

$$
k=120
$$

Total emissions multiply fleet by intensity. Substituting $a(t)=4t^{\\frac{1}{2}}$ into $e(a)=120 a^{-\\frac{1}{2}}$ composes two powers of $t$:

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
E(t)=4t^{\\frac{1}{2}}\\cdot 120\\cdot\\frac{1}{2}\\, t^{-\\frac{1}{4}}
$$

$$
E(t)=240 t^{\\frac{1}{2}-\\frac{1}{4}}
$$

$$
E(t)=240 t^{\\frac{1}{4}}
$$

After sixteen years, $16^{\\frac{1}{4}}=2$:

$$
E(16)=240\\cdot 2
$$

$$
E(16)=480
$$

$$
480>400
$$

Total fleet emissions are $480$, already above $400$, so the statement is True.`,
      `**B.** → False

Doubling elapsed time would double emissions only if the composed exponent were $1$. Composition left $E(t)=240 t^{\\frac{1}{4}}$, so the scale factor is

$$
\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}
$$

$$
2^{\\frac{1}{4}}\\approx 1.189
$$

From year $1$ that is $E(2)\\approx 285$, not $480$. Emissions rise by about $19\\%$, not by $100\\%$, so the statement is False.`,
      `**C.** → True

After one year every power of $1$ is $1$, so

$$
E(1)=240\\cdot 1^{\\frac{1}{4}}
$$

$$
E(1)=240
$$

$$
240<250
$$

The first-year total is $240$, still under $250$, so the statement is True.`,
      `**D.** → True

After eighty-one years, $81=3^{4}$ so $81^{\\frac{1}{4}}=3$:

$$
E(81)=240\\cdot 3
$$

$$
E(81)=720
$$

$$
720>700
$$

Emissions are $720$, already above $700$, so the statement is True.`,
      `**E.** → False

The extra from year $1$ to year $16$ is a gap between two totals, not a new reading. Sixteen is a sixteen-fold clock, and the composed exponent is only $\\frac{1}{4}$, so the later total is $16^{\\frac{1}{4}}=2$ times the first-year figure. Doubling a reading makes the extra equal the original, not larger than it. Exceeding the year-$1$ total would need the clock to more than double the emissions:

$$
E(16)-E(1)=480-240
$$

$$
480-240=240
$$

$$
240=240
$$

The extra equals the year-$1$ total, so it does not already exceed that total, so the statement is False.`,
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

**1.** $E(16)=480>400$, $E(1)=240<250$, and $E(81)=720>700$.

**2.** Doubling time multiplies $E$ by $2^{\\frac{1}{4}}\\approx 1.189$, not by $2$. Extra from year $1$ to year $16$ is $240$, which equals the year-$1$ total rather than exceeding it.

**Answer.** $k=120$ | $E(t)=240 t^{\\frac{1}{4}}$ | $E(16)=480$ | $E(81)=720$`,
  },
  {
    id: `math-8-24`,
    case_id: `MATH 8.24`,
    title: `Pipeline Capacity, Inversion, and a Change of Units`,
    context: `Flow capacity through a pipe follows $Q(d)=A d^{\\frac{5}{2}}$ litres per second, where $d>0$ is the internal diameter in centimetres. A bench test on a $4$ cm pipe measured $64$ litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The extra capacity from widening $4$ cm to $9$ cm already exceeds the bench reading of $64$ litres per second.`,
      `Measuring diameter in millimetres makes the new coefficient larger than $0.01$.`,
      `A $16$ cm pipe already delivers more than thirty times the bench capacity.`,
      `Doubling the diameter multiplies capacity by less than $5$.`,
      `To reach $500$ litres per second the diameter must already exceed $9$ cm.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The bench test $Q(4)=64$ pins the coefficient on $Q=A d^{\\frac{5}{2}}$:

$$
A\\cdot 4^{\\frac{5}{2}}=64
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{5}{2}}=4^{2}\\cdot 2
$$

$$
4^{2}=16
$$

$$
4^{\\frac{5}{2}}=32
$$

$$
32A=64
$$

$$
A=2
$$

Capacity is then $Q=2d^{\\frac{5}{2}}$. An exponent larger than one means later centimetres add more than earlier ones, so the extra from a widening can overtake the original bench reading. At nine centimetres:

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{5}{2}}=9^{2}\\cdot 3
$$

$$
9^{2}=81
$$

$$
9^{\\frac{5}{2}}=243
$$

$$
Q(9)=2\\cdot 243
$$

$$
Q(9)=486
$$

$$
Q(9)-Q(4)=486-64
$$

$$
486-64=422
$$

$$
422>64
$$

Widening from $4$ cm to $9$ cm adds $422$ litres per second, which already exceeds the bench reading of $64$, so the statement is True.`,
      `**B.** → False

A millimetre is one tenth of a centimetre, so the same physical pipe is labelled with a number ten times larger. Capacity is a power of diameter with exponent $\\frac{5}{2}$, so that factor of ten is raised to $\\frac{5}{2}$ before it hits the coefficient. The coefficient must shrink by $10^{\\frac{5}{2}}$ to keep the litres per second unchanged. That shrink is far more than a factor of two, which already drops the old coefficient $2$ below $0.01$:

$$
Q=2\\left(\\frac{d_{\\mathrm{mm}}}{10}\\right)^{\\frac{5}{2}}
$$

$$
Q=2\\cdot 10^{-\\frac{5}{2}}d_{\\mathrm{mm}}^{\\frac{5}{2}}
$$

$$
10^{\\frac{5}{2}}=10^{2}\\cdot\\sqrt{10}
$$

$$
10^{2}=100
$$

$$
A'=\\frac{2}{100\\sqrt{10}}
$$

$$
\\sqrt{10}\\approx 3.162
$$

$$
100\\sqrt{10}\\approx 316.2
$$

$$
A'\\approx 0.00632
$$

$$
0.00632<0.01
$$

The millimetre-unit coefficient is about $0.00632$, which is not larger than $0.01$, so the statement is False.`,
      `**C.** → True

At sixteen centimetres:

$$
16^{\\frac{1}{2}}=4
$$

$$
16^{\\frac{5}{2}}=16^{2}\\cdot 4
$$

$$
16^{2}=256
$$

$$
16^{\\frac{5}{2}}=1024
$$

$$
Q(16)=2\\cdot 1024
$$

$$
Q(16)=2048
$$

The bench is $Q(4)=64$, so

$$
\\frac{2048}{64}=32
$$

$$
32>30
$$

A $16$ cm pipe delivers $32$ times the bench capacity, more than thirty times, so the statement is True.`,
      `**D.** → False

Doubling the diameter would multiply capacity by $2$ only if the exponent were $1$. Here the exponent $\\frac{5}{2}$ already exceeds $2$, so the scale factor sits above $4$ before the leftover square root is applied:

$$
\\frac{Q(2d)}{Q(d)}=2^{\\frac{5}{2}}
$$

$$
2^{\\frac{5}{2}}=2^{2}\\cdot 2^{\\frac{1}{2}}
$$

$$
2^{2}=4
$$

$$
2^{\\frac{5}{2}}=4\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
4\\sqrt{2}\\approx 5.66
$$

$$
5.66>5
$$

The factor is about $5.66$, which is not less than $5$, so the statement is False.`,
      `**E.** → True

At nine centimetres the pipe already delivers $Q(9)=486$:

$$
486<500
$$

So $500$ litres per second still lies past $9$ cm, and the diameter that reaches $500$ must already exceed $9$ cm, so the statement is True.`,
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

**1.** $Q(4)=64$ and $Q(9)=486$, so the extra $422$ already exceeds the bench reading. $Q(16)=2048=32\\cdot 64$, more than thirty times the bench.

**2.** The millimetre-unit coefficient is $\\frac{2}{100\\sqrt{10}}\\approx 0.00632$, not larger than $0.01$. Doubling $d$ multiplies $Q$ by $4\\sqrt{2}\\approx 5.66$, not by less than $5$. $Q(9)=486<500$, so $d$ must exceed $9$ cm to reach $500$.

**Answer.** $A=2$ | $Q(9)=486$ | $Q(16)=2048$ | $A'\\approx 0.00632$ | doubling factor $4\\sqrt{2}$`,
  },
  {
    id: `math-8-25`,
    case_id: `MATH 8.25`,
    title: `From Radius Growth to the Area a Service Covers`,
    context: `A delivery hub's service radius follows $r(t)=A t^{\\frac{1}{2}}$ kilometres after $t>0$ hours. After $4$ hours the radius is $6$ kilometres. The area covered is the disc $S=\\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The extra area from hour $4$ to hour $9$ already exceeds the area covered at hour $4$.`,
      `After $4$ hours the covered area is already more than $30\\pi$ square kilometres.`,
      `After $9$ hours the covered area has already reached $100\\pi$ square kilometres.`,
      `Doubling elapsed time from $4$ hours to $8$ hours doubles the area covered.`,
      `The time needed to cover $90\\pi$ square kilometres is already above $9$ hours.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The four-hour radius $r(4)=6$ pins $A$ on $r=A t^{\\frac{1}{2}}$:

$$
A\\cdot 4^{\\frac{1}{2}}=6
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
2A=6
$$

$$
A=3
$$

Covered area is the disc $S=\\pi r^{2}$, which composes to $S=9\\pi t$. Area then grows in proportion to time, so five extra hours add more than the original four-hour disc. After four hours $S(4)=36\\pi$ and after nine hours $S(9)=81\\pi$:

$$
S(9)-S(4)=81\\pi-36\\pi
$$

$$
81\\pi-36\\pi=45\\pi
$$

$$
45\\pi>36\\pi
$$

The extra $45\\pi$ already exceeds the $36\\pi$ covered at hour $4$, so the statement is True.`,
      `**B.** → True

After four hours:

$$
S(4)=9\\pi\\cdot 4
$$

$$
S(4)=36\\pi
$$

$$
36\\pi>30\\pi
$$

The covered area is $36\\pi$ square kilometres, already more than $30\\pi$, so the statement is True.`,
      `**C.** → False

After nine hours:

$$
S(9)=9\\pi\\cdot 9
$$

$$
S(9)=81\\pi
$$

$$
81\\pi<100\\pi
$$

The covered area is $81\\pi$, which has not reached $100\\pi$, so the statement is False.`,
      `**D.** → True

Doubling elapsed time doubles area here because the composed exponent is $1$, not because every power doubles. Radius grows like $t^{\\frac{1}{2}}$, and area squares that radius, so the exponents multiply: $\\frac{1}{2}\\cdot 2=1$. Covered area is therefore linear in the clock, $S=9\\pi t$, and a linear schedule is the one case where doubling the input doubles the output:

$$
S(4)=9\\pi\\cdot 4
$$

$$
S(4)=36\\pi
$$

$$
S(8)=9\\pi\\cdot 8
$$

$$
S(8)=72\\pi
$$

$$
\\frac{S(8)}{S(4)}=\\frac{72\\pi}{36\\pi}
$$

$$
\\frac{72\\pi}{36\\pi}=2
$$

Doubling time from $4$ hours to $8$ hours doubles the area, so the statement is True.`,
      `**E.** → True

Setting the covered area equal to $90\\pi$:

$$
9\\pi t=90\\pi
$$

$$
t=\\frac{90\\pi}{9\\pi}
$$

$$
t=10
$$

$$
10>9
$$

The time needed is $10$ hours, already above $9$ hours, so the statement is True.`,
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

**1.** $S(4)=36\\pi$ and $S(9)=81\\pi$, so the extra $45\\pi$ already exceeds the area at hour $4$. $S(4)=36\\pi>30\\pi$, while $S(9)=81\\pi$ has not reached $100\\pi$.

**2.** $S(8)=72\\pi=2\\cdot S(4)$, so doubling time from $4$ to $8$ doubles area. $S=90\\pi$ inverts to $t=10>9$.

**Answer.** $A=3$ | $S(t)=9\\pi t$ | $S(4)=36\\pi$ | $S(9)=81\\pi$ | $t=10$ for $S=90\\pi$`,
  },
  {
    id: `math-8-26`,
    case_id: `MATH 8.26`,
    title: `Two Support Contracts, One Crossing and One Cap`,
    context: `A helpdesk compares two support contracts for $u>0$ tickets a month. Plan A bills $C_A(u)=a u^{\\frac{1}{2}}$ and never charges more than $400$. A filed invoice shows $36$ tickets billed at $240$. Plan B bills a flat $5$ per ticket with no cap. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $64$ tickets both plans still sit under the $400$ cap.`,
      `At $144$ tickets Plan A bills more than $450$.`,
      `Doubling tickets from $36$ to $72$ doubles Plan B's bill.`,
      `At $36$ tickets Plan A already bills more than $200$.`,
      `The extra Plan A bill from $36$ to $64$ tickets already exceeds the $36$-ticket Plan A bill.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The filed invoice $C_A(36)=240$ pins Plan A's coefficient:

$$
a\\cdot 36^{\\frac{1}{2}}=240
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
6a=240
$$

$$
a=40
$$

Uncapped Plan A is $40 u^{\\frac{1}{2}}$ and Plan B is $5u$. A square-root bill starts above a linear bill and is then overtaken; their meeting is a single positive volume, and that volume happens to lie below the cap. At sixty-four tickets:

$$
64^{\\frac{1}{2}}=8
$$

$$
40\\cdot 8=320
$$

$$
5\\cdot 64=320
$$

Both bills equal $320$. The cap is $400$, and $320<400$, so the cap is still slack at the crossing. Both plans sit under the $400$ cap at $64$ tickets, so the statement is True.`,
      `**B.** → False

At $144$ tickets the uncapped square-root bill would be

$$
144^{\\frac{1}{2}}=12
$$

$$
40\\cdot 12=480
$$

Plan A never charges more than $400$, so the billed amount is $\\min\\{480,400\\}$. Because $480>400$, Plan A bills $400$. The claimed $450$ sits above that cap. Plan A bills $400$, which is not more than $450$, so the statement is False.`,
      `**C.** → True

Plan B is a flat $5$ per ticket, so its exponent is $1$. Doubling tickets doubles a linear bill, and no cap applies to Plan B. From the $36$-ticket volume:

$$
C_B(36)=5\\cdot 36
$$

$$
C_B(36)=180
$$

$$
C_B(72)=5\\cdot 72
$$

$$
C_B(72)=360
$$

$$
\\frac{360}{180}=2
$$

Doubling tickets from $36$ to $72$ doubles Plan B's bill, so the statement is True.`,
      `**D.** → True

At $36$ tickets Plan A is the filed invoice:

$$
C_A(36)=240
$$

$$
240>200
$$

Plan A already bills $240$, more than $200$, so the statement is True.`,
      `**E.** → False

The extra Plan A bill from $36$ to $64$ tickets is a gap between two square-root readings, both still below the cap. The exponent $\\frac{1}{2}$ is less than one, so the later bill cannot double, and the extra stays smaller than the original invoice:

$$
C_A(64)-C_A(36)=320-240
$$

$$
320-240=80
$$

$$
80<240
$$

The extra of $80$ does not exceed the $36$-ticket Plan A bill of $240$, so the statement is False.`,
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

**1.** At $u=64$ both bills are $320<400$. At $u=144$ Plan A is capped at $400$, not more than $450$. $C_A(36)=240>200$.

**2.** Plan B is linear, so doubling tickets from $36$ to $72$ doubles its bill. Extra Plan A from $36$ to $64$ is $80$, which does not exceed the $36$-ticket bill of $240$.

**Answer.** $a=40$ | crossing $u=64$ | $C_A(144)=400$ | extra $80$`,
  },
  {
    id: `math-8-27`,
    case_id: `MATH 8.27`,
    title: `An Eighty Percent Learning Curve Meeting a Materials Floor`,
    context: `Unit cost on a new assembly line follows $c(N)=c_1 N^{-b}$ for cumulative output $N>0$. Every doubling of cumulative output multiplies unit cost by $0.8$, and the first unit cost $1000$. Materials alone cost $400$ per unit, so the curve cannot describe costs below that floor. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After three successive doublings the modelled unit cost is already under $520$.`,
      `After four successive doublings the modelled unit cost is already under $400$.`,
      `Quadrupling cumulative output halves the unit cost.`,
      `After one doubling, unit cost is already under $850$.`,
      `The cost cut from the first unit to $N=8$ already exceeds $450$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Every doubling multiplies unit cost by $0.8$, and the first unit costs $1000$. Three successive doublings take $N$ from $1$ to $8$:

$$
c(2)=1000\\cdot 0.8
$$

$$
c(2)=800
$$

$$
c(4)=800\\cdot 0.8
$$

$$
c(4)=640
$$

$$
c(8)=640\\cdot 0.8
$$

$$
c(8)=512
$$

$$
512<520
$$

The modelled unit cost is $512$, already under $520$, so the statement is True.`,
      `**B.** → False

Four successive doublings take the first unit to $N=16$. The materials floor would bind only if the power law had already crossed $400$. Four factors of $0.8$ leave $0.4096$ of the original $1000$, which still sits above the floor. Continuing from $c(8)=512$:

$$
c(16)=512\\cdot 0.8
$$

$$
c(16)=409.6
$$

$$
409.6>400
$$

The modelled cost is still above the $400$ materials floor. It is not already under $400$, so the statement is False.`,
      `**C.** → False

Quadrupling cumulative output is exactly two doublings, not a new exponent. Each doubling multiplies unit cost by $0.8$, so two doublings multiply it by $0.8^{2}$. Halving would need those two factors to multiply to $\\frac{1}{2}$, which they do not:

$$
\\frac{c(4N)}{c(N)}=0.8^{2}
$$

$$
0.8^{2}=0.64
$$

$$
0.64>\\frac{1}{2}
$$

Unit cost falls to $64\\%$ of its previous value, not to one half. An $80\\%$ learning curve is shallower than a reciprocal, so the statement is False.`,
      `**D.** → True

After one doubling, $N=2$:

$$
c(2)=1000\\cdot 0.8
$$

$$
c(2)=800
$$

$$
800<850
$$

Unit cost is $800$, already under $850$, so the statement is True.`,
      `**E.** → True

The cost cut from the first unit to $N=8$ is a gap between $1000$ and the three-doubling reading $512$. Three factors of $0.8$ leave $51.2\\%$ of the original cost, so more than $45\\%$ has been cut:

$$
1000-512=488
$$

$$
488>450
$$

The cut of $488$ already exceeds $450$, so the statement is True.`,
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

**1.** $c(8)=512<520$. $c(16)=409.6$, still above $400$. $c(2)=800<850$.

**2.** Two doublings multiply cost by $0.64$, not by $0.5$. The cut from $N=1$ to $N=8$ is $488>450$.

**Answer.** $b\\approx 0.322$ | $c(8)=512$ | $c(16)=409.6$ | $c(2)=800$ | cut $488$`,
  },
  {
    id: `math-8-28`,
    case_id: `MATH 8.28`,
    title: `Advertising Revenue Against a Proportional Platform Fee`,
    context: `A merchant's sales revenue from an advertising spend $x>0$ follows $R(x)=A x^{\\frac{1}{2}}$. At a spend of $100$ the campaign brings in $900$. The platform charges a fee $F(x)=6x$ on the same spend. Net gain is $R(x)-F(x)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At a spend of $100$ the net gain is already above $250$.`,
      `At a spend of $256$ the net gain is still positive.`,
      `Doubling the spend from $100$ to $200$ doubles net gain.`,
      `At a spend of $81$ the net gain already exceeds $300$.`,
      `The extra net from spend $81$ to $100$ already exceeds $20$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The recorded campaign $R(100)=900$ pins the coefficient on $R=A x^{\\frac{1}{2}}$:

$$
A\\cdot 100^{\\frac{1}{2}}=900
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
10A=900
$$

$$
A=90
$$

Revenue is $R=90 x^{\\frac{1}{2}}$ and the fee is $F=6x$. At a spend of $100$:

$$
F(100)=6\\cdot 100
$$

$$
F(100)=600
$$

$$
N(100)=900-600
$$

$$
N(100)=300
$$

$$
300>250
$$

The net gain is $300$, already above $250$, so the statement is True.`,
      `**B.** → False

Net gain is $N(x)=90 x^{\\frac{1}{2}}-6x$. Factor out $6 x^{\\frac{1}{2}}$:

$$
N(x)=6 x^{\\frac{1}{2}}\\bigl(15-x^{\\frac{1}{2}}\\bigr)
$$

The prefactor is positive, so $N$ changes sign when $x^{\\frac{1}{2}}=15$, that is at $x=225$. Spend $256$ already sits past that crossing. At a spend of $256$:

$$
256^{\\frac{1}{2}}=16
$$

$$
R(256)=90\\cdot 16
$$

$$
R(256)=1440
$$

$$
F(256)=6\\cdot 256
$$

$$
F(256)=1536
$$

$$
N(256)=1440-1536
$$

$$
N(256)=-96
$$

The net is negative, so it is not still positive, so the statement is False.`,
      `**C.** → False

Doubling the spend would double net gain only if net were a pure power with exponent $1$. Net is a square-root revenue minus a linear fee, so the two pieces scale differently: revenue grows by $\\sqrt{2}$ while the fee itself doubles. From $N(100)=300$, a doubling claim wants $600$. At a spend of $200$:

$$
N(200)=90\\cdot 200^{\\frac{1}{2}}-6\\cdot 200
$$

$$
200^{\\frac{1}{2}}=10\\sqrt{2}
$$

$$
N(200)=900\\sqrt{2}-1200
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
900\\sqrt{2}\\approx 1273
$$

$$
N(200)\\approx 73
$$

$$
73<600
$$

Net actually falls from $300$ toward the later crossing, so the statement is False.`,
      `**D.** → True

At a spend of $81$:

$$
81^{\\frac{1}{2}}=9
$$

$$
R(81)=90\\cdot 9
$$

$$
R(81)=810
$$

$$
F(81)=6\\cdot 81
$$

$$
F(81)=486
$$

$$
N(81)=810-486
$$

$$
N(81)=324
$$

$$
324>300
$$

The net gain is $324$, already above $300$, so the statement is True.`,
      `**E.** → False

The extra net from spend $81$ to $100$ is a gap, and that gap is negative. Past the peak the linear fee is already eating the square-root revenue, so a larger spend can lower the net. The two levels are $N(81)=324$ and $N(100)=300$:

$$
N(100)-N(81)=300-324
$$

$$
300-324=-24
$$

$$
-24<20
$$

The extra is $-24$, which does not exceed $20$, so the statement is False.`,
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

**1.** $N(100)=300>250$. $N(81)=324>300$. $N(256)=-96$.

**2.** Doubling spend from $100$ to $200$ does not double net: $N(200)\\approx 73$ versus $600$. Extra net from $81$ to $100$ is $-24$, which does not exceed $20$.

**Answer.** $A=90$ | $N(100)=300$ | $N(81)=324$ | $N(256)=-96$ | $N(200)\\approx 73$`,
  },
  {
    id: `math-8-29`,
    case_id: `MATH 8.29`,
    title: `Calibrating a Two-Stage Production Chain`,
    context: `A plant runs two stages. Labour $L>0$ hours yields material $m(L)=A L^{\\frac{1}{2}}$ tonnes, and material is converted by $g(m)=B m^{\\frac{3}{2}}$ finished units. $100$ labour hours yielded $40$ tonnes of material, and a run on $9$ tonnes of material produced $54$ finished units. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $81$ labour hours, finished output is already above $400$ units.`,
      `Doubling labour hours doubles finished output.`,
      `After $16$ labour hours, finished output is already above $120$ units.`,
      `After $16$ hours, material is already above $15$ tonnes.`,
      `The extra finished output from $16$ to $81$ hours already exceeds the $16$-hour finished count.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The labour record $m(100)=40$ pins $A$:

$$
A\\cdot 100^{\\frac{1}{2}}=40
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
10A=40
$$

$$
A=4
$$

The material record $g(9)=54$ pins $B$:

$$
B\\cdot 9^{\\frac{3}{2}}=54
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
27B=54
$$

$$
B=2
$$

Finished output composes the two stages. Material is $m=4 L^{\\frac{1}{2}}$, and $g=2 m^{\\frac{3}{2}}$, so

$$
g(L)=2\\bigl(4 L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}
$$

$$
\\bigl(4 L^{\\frac{1}{2}}\\bigr)^{\\frac{3}{2}}=4^{\\frac{3}{2}} L^{\\frac{3}{4}}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
g(L)=2\\cdot 8 L^{\\frac{3}{4}}
$$

$$
g(L)=16 L^{\\frac{3}{4}}
$$

After eighty-one labour hours, $81=3^{4}$:

$$
81^{\\frac{3}{4}}=3^{3}
$$

$$
3^{3}=27
$$

$$
g(81)=16\\cdot 27
$$

$$
g(81)=432
$$

$$
432>400
$$

Finished output is $432$ units, already above $400$, so the statement is True.`,
      `**B.** → False

Doubling labour hours would double finished output only if the composed exponent were $1$. Composition multiplies the inner $\\frac{1}{2}$ by the outer $\\frac{3}{2}$, leaving $\\frac{3}{4}$, so the scale factor is

$$
\\frac{g(2L)}{g(L)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

Output rises by about $68\\%$, not by $100\\%$, so the statement is False.`,
      `**C.** → True

After sixteen labour hours, $16=2^{4}$:

$$
16^{\\frac{3}{4}}=2^{3}
$$

$$
2^{3}=8
$$

$$
g(16)=16\\cdot 8
$$

$$
g(16)=128
$$

$$
128>120
$$

Finished output is $128$ units, already above $120$, so the statement is True.`,
      `**D.** → True

Material is $m=4 L^{\\frac{1}{2}}$. After sixteen hours:

$$
16^{\\frac{1}{2}}=4
$$

$$
m(16)=4\\cdot 4
$$

$$
m(16)=16
$$

$$
16>15
$$

Material is $16$ tonnes, already above $15$, so the statement is True.`,
      `**E.** → True

The extra finished output from $16$ to $81$ hours is a gap between $g(16)=128$ and $g(81)=432$. The later count more than triples, so the extra already exceeds the original sixteen-hour reading:

$$
g(81)-g(16)=432-128
$$

$$
432-128=304
$$

$$
304>128
$$

The extra of $304$ already exceeds the $16$-hour finished count of $128$, so the statement is True.`,
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

**1.** $g(81)=432>400$. $g(16)=128>120$. $m(16)=16>15$.

**2.** Doubling $L$ multiplies $g$ by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. Extra finished output from $16$ to $81$ is $304$, which exceeds the $16$-hour count of $128$.

**Answer.** $A=4$ | $B=2$ | $g=16L^{\\frac{3}{4}}$ | $g(81)=432$ | $g(16)=128$`,
  },
  {
    id: `math-8-30`,
    case_id: `MATH 8.30`,
    title: `Calibrated Demand, Derived Revenue, and a Fixed Charge`,
    context: `A niche publisher faces demand $q(p)=A p^{-\\frac{3}{2}}$ copies a month at a price $p>0$. A price of $4$ euros sells $250$ copies. Revenue is $R=pq$, and the operation carries a fixed monthly charge of $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At a price of $25$, monthly revenue is already under $450$.`,
      `Doubling the $4$-euro price halves revenue.`,
      `The fixed charge is covered only at prices below $16$.`,
      `Raising the price from $4$ to $16$ cuts revenue by more than the remaining revenue at $16$.`,
      `At a price of $4$, net of the $400$ charge, the publisher still clears more than $550$.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

The priced observation $q(4)=250$ pins demand:

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
\\frac{A}{8}=250
$$

$$
A=2000
$$

Revenue is then $R=2000 p^{-\\frac{1}{2}}$. At a price of $25$:

$$
25^{\\frac{1}{2}}=5
$$

$$
R(25)=\\frac{2000}{5}
$$

$$
R(25)=400
$$

$$
400<450
$$

Monthly revenue is $400$, already under $450$, so the statement is True.`,
      `**B.** → False

Doubling the four-euro price would halve revenue only if the revenue exponent were $-1$. Multiplying demand by price left exponent $-\\frac{1}{2}$, so the scale factor is

$$
\\frac{R(8)}{R(4)}=2^{-\\frac{1}{2}}
$$

$$
2^{-\\frac{1}{2}}\\approx 0.707
$$

From $R(4)=1000$ that is about $707$, not $500$. Revenue falls to about $71\\%$ of itself, not to one half, so the statement is False.`,
      `**C.** → False

The fixed charge is covered while revenue stays at least $400$. Because $R=2000 p^{-\\frac{1}{2}}$ falls as price rises, coverage is a ceiling on $p$, not a floor. Solving $R(p)=400$ gives the last covered price:

$$
2000 p^{-\\frac{1}{2}}=400
$$

$$
p^{-\\frac{1}{2}}=\\frac{400}{2000}
$$

$$
p^{-\\frac{1}{2}}=\\frac{1}{5}
$$

$$
\\sqrt{p}=5
$$

$$
p=25
$$

The claimed cutoff $16$ is too tight. At sixteen euros:

$$
16^{\\frac{1}{2}}=4
$$

$$
R(16)=\\frac{2000}{4}
$$

$$
R(16)=500
$$

$$
500>400
$$

The charge is still covered at $p=16$, and remains covered up to $p=25$, so the statement is False.`,
      `**D.** → False

Raising the price from $4$ to $16$ is a four-fold price, and revenue scales by $4^{-\\frac{1}{2}}=\\frac{1}{2}$. Halving a reading makes the cut equal the remaining revenue, not larger than it:

$$
R(4)=1000
$$

$$
R(16)=500
$$

$$
1000-500=500
$$

The cut is $500$, and the remaining revenue at $16$ is also $500$. The cut is not more than the remaining amount, so the statement is False.`,
      `**E.** → True

At four euros, revenue is $R(4)=1000$. Net of the charge:

$$
1000-400=600
$$

$$
600>550
$$

The publisher still clears $600$, more than $550$, so the statement is True.`,
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

**1.** $R(25)=400<450$. Doubling the $4$-euro price multiplies revenue by $\\frac{1}{\\sqrt{2}}$, not by $\\frac{1}{2}$. The charge is covered for $p\\le 25$, not only below $16$.

**2.** $R(4)-R(16)=500$, which equals remaining revenue at $16$, not more. Net at $p=4$ is $1000-400=600>550$.

**Answer.** $A=2000$ | $R(p)=2000 p^{-\\frac{1}{2}}$ | $R(25)=400$ | cover for $p\\le 25$ | $R(4)-400=600$`,
  },
  {
    id: `math-8-31`,
    case_id: `MATH 8.31`,
    title: `Packing Output Recovered From a Shift Extension`,
    context: `A packing station's output follows $N(h)=A h^{\\frac{2}{3}}$ items after $h>0$ hours of shift, and the coefficient is never logged. Extending a shift from $8$ to $27$ hours added exactly $90$ items. A rush order of $250$ items has to be packed in a single shift. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The extra items from $8$ to $27$ hours already exceed the $8$-hour output.`,
      `A $27$-hour shift packs more than $150$ items.`,
      `Doubling an $8$-hour shift doubles the number of items packed.`,
      `The $250$-item order can be packed in under $40$ hours.`,
      `Average items per hour fall by more than $2$ when the shift goes from $8$ hours to $27$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The recorded extension recovers the coefficient, because both shift lengths are perfect cubes and the extra items are the difference of the two cube-power levels.

$$
A\\cdot 27^{\\frac{2}{3}}-A\\cdot 8^{\\frac{2}{3}}=90
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
27^{\\frac{1}{3}}=3
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

Packing is then $N(h)=18h^{\\frac{2}{3}}$. The two shift counts are

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
162-72=90
$$

$$
90>72
$$

The extra of $90$ already exceeds the $8$-hour output of $72$, so the statement is True.`,
      `**B.** → True

At $27$ hours the packing count is already the larger cube-power level:

$$
N(27)=162
$$

$$
162>150
$$

The shift packs $162$ items, which is more than $150$, so the statement is True.`,
      `**C.** → False

Doubling packed items would need exponent $1$. The packing exponent is $\\frac{2}{3}$, so stretching an $8$-hour shift to $16$ hours scales the count by

$$
\\frac{N(16)}{N(8)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

The $16$-hour count is about $1.59$ times the $8$-hour count, not twice it, so the statement is False.`,
      `**D.** → False

Forty hours against the $250$-item order is an evaluation, not an inversion:

$$
N(40)=18\\cdot 40^{\\frac{2}{3}}
$$

$$
40^{\\frac{1}{3}}\\approx 3.42
$$

$$
40^{\\frac{2}{3}}\\approx 3.42^{2}
$$

$$
3.42^{2}=11.6964
$$

$$
N(40)=18\\cdot 11.6964
$$

$$
N(40)\\approx 210.5
$$

$$
210.5<250
$$

Forty hours pack about $210.5$ items, which is still short of $250$, so the statement is False.`,
      `**E.** → True

Average items per hour divide by shift length, which subtracts $1$ from the exponent:

$$
\\frac{N(h)}{h}=18h^{-\\frac{1}{3}}
$$

After $8$ hours:

$$
\\frac{N(8)}{8}=18\\cdot\\frac{1}{2}
$$

$$
\\frac{N(8)}{8}=9
$$

After $27$ hours:

$$
\\frac{N(27)}{27}=18\\cdot\\frac{1}{3}
$$

$$
\\frac{N(27)}{27}=6
$$

$$
9-6=3
$$

$$
3>2
$$

The hourly rate falls by $3$, which is more than $2$, so the statement is True.`,
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

**1.** Equation (1) gives $A=18$, so $N(h)=18h^{\\frac{2}{3}}$. Then $N(8)=72$ and $N(27)=162$. The extra from $8$ to $27$ is $90$, which already exceeds the $8$-hour count of $72$.

**2.** Average product falls from $9$ to $6$, a drop of $3$. Doubling an $8$-hour shift multiplies output by $2^{\\frac{2}{3}}\\approx 1.587$, not by $2$.

**3.** At $40$ hours, $40^{\\frac{1}{3}}\\approx 3.42$ and $N(40)=18\\cdot 40^{\\frac{2}{3}}\\approx 210.5$, which is still short of $250$.

**Answer.** $A=18$ | $N(h)=18h^{\\frac{2}{3}}$ | $N(8)=72$ | $N(27)=162$ | $N(40)\\approx 210.5$`,
  },
  {
    id: `math-8-32`,
    case_id: `MATH 8.32`,
    title: `Drag and Absorbed Power on a Wind-Tunnel Rig`,
    context: `Aerodynamic drag on a test rig follows $F(v)=A v^{r}$ newtons at airspeed $v>0$ metres per second, and the manufacturer supplies neither constant. Two wind-tunnel runs are on file: $16$ N at $4$ m/s and $128$ N at $16$ m/s. The rig also reports absorbed power $P=F\\cdot v$ watts, and the mounting is rated to $250$ N. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $16$ m/s the rig absorbs more than $2$ kW.`,
      `Doubling the airspeed from $4$ to $8$ m/s more than triples the drag.`,
      `The mounting's $250$ N rating is first reached at a speed above $30$ m/s.`,
      `At $4$ m/s drag is already under $20$ N.`,
      `The extra drag from $4$ to $16$ m/s already exceeds $100$ N.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The two tunnel runs recover drag, and absorbed power multiplies that force by speed.

$$
\\frac{F(16)}{F(4)}=\\frac{128}{16}
$$

$$
\\frac{128}{16}=8
$$

$$
4^{r}=8
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

$$
A\\cdot 4^{\\frac{3}{2}}=16
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
8A=16
$$

$$
A=2
$$

Drag is then $F(v)=2v^{\\frac{3}{2}}$, so absorbed power is $P(v)=2v^{\\frac{5}{2}}$. At $16$ m/s the logged force is already $128$ N:

$$
P(16)=128\\cdot 16
$$

$$
128\\cdot 16=2048
$$

That is $2048$ watts, or $2.048$ kilowatts, which is more than $2$ kW, so the statement is True.`,
      `**B.** → False

Doubling drag would need exponent $1$, and a tripling would need $2^{r}=3$. Drag scales with exponent $\\frac{3}{2}$, so stretching $4$ m/s to $8$ m/s multiplies force by

$$
\\frac{F(8)}{F(4)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
2\\sqrt{2}\\approx 2.828
$$

$$
2.828<3
$$

The factor is more than a doubling but less than a tripling, so the statement is False.`,
      `**C.** → False

The mounting's $250$ N rating inverts the drag law $F(v)=2v^{\\frac{3}{2}}$:

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
v=5^{2}
$$

$$
v=25
$$

$$
25<30
$$

The rating is first reached at $25$ m/s, which is not a speed above $30$ m/s, so the statement is False.`,
      `**D.** → True

At $4$ m/s the slower logged run already records the drag:

$$
F(4)=16
$$

$$
16<20
$$

Drag is $16$ N, which is already under $20$ N, so the statement is True.`,
      `**E.** → True

The two logged runs are $F(4)=16$ and $F(16)=128$. The extra drag is

$$
128-16=112
$$

$$
112>100
$$

The extra of $112$ N already exceeds $100$ N, so the statement is True.`,
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

**3.** $P(16)=2048$ W $=2.048$ kW, already more than $2$ kW. $F(4)=16<20$. The extra drag from $4$ to $16$ m/s is $112$, already past $100$ N.

**4.** Doubling airspeed from $4$ to $8$ m/s multiplies drag by $2^{\\frac{3}{2}}\\approx 2.828$, which is not more than a tripling.

**5.** Equation (3) inverts at the rating:

$$2v^{\\frac{3}{2}}=250 \\qquad v=25$$

which is not a speed above $30$ m/s.

**Answer.** $F(v)=2v^{\\frac{3}{2}}$ | $P(v)=2v^{\\frac{5}{2}}$ | rating at $v=25$ m/s | $P(16)=2.048$ kW | extra drag $112$ N`,
  },
  {
    id: `math-8-33`,
    case_id: `MATH 8.33`,
    title: `Inelastic Demand and Where Revenue Goes`,
    context: `A regional utility faces demand $q(p)=A p^{-\\frac{1}{2}}$ units a month at price $p>0$, and a price of $16$ sells $300$ units. The board wants to know how revenue $R=pq$ behaves along this curve. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising the price from $16$ to $25$ raises revenue by more than $1000$.`,
      `At a price of $25$ the utility sells fewer than $250$ units.`,
      `Cutting monthly quantity to $200$ units requires a price above $40$.`,
      `Because quantity falls when price rises, revenue must fall as well.`,
      `Doubling the price from $16$ to $32$ multiplies revenue by more than $1.4$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The recorded pair recovers the coefficient, and the revenue change is a difference of two square-root levels.

$$
A\\cdot 16^{-\\frac{1}{2}}=300
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

Demand is then $q(p)=1200p^{-\\frac{1}{2}}$ and revenue is $R(p)=1200p^{\\frac{1}{2}}$. At the two prices:

$$
R(16)=1200\\cdot 4
$$

$$
R(16)=4800
$$

$$
R(25)=1200\\cdot 5
$$

$$
R(25)=6000
$$

$$
6000-4800=1200
$$

$$
1200>1000
$$

Revenue rises by $1200$, which is more than $1000$, so the statement is True.`,
      `**B.** → True

At a price of $25$ the utility sells

$$
q(25)=1200\\cdot 25^{-\\frac{1}{2}}
$$

$$
25^{-\\frac{1}{2}}=\\frac{1}{5}
$$

$$
q(25)=240
$$

$$
240<250
$$

The utility sells $240$ units, which is fewer than $250$, so the statement is True.`,
      `**C.** → False

A target of $200$ units inverts $q(p)=1200p^{-\\frac{1}{2}}$:

$$
200=1200\\cdot p^{-\\frac{1}{2}}
$$

$$
p^{\\frac{1}{2}}=\\frac{1200}{200}
$$

$$
p^{\\frac{1}{2}}=6
$$

$$
p=36
$$

$$
36<40
$$

The target arrives at a price of $36$, which is not above $40$, so the statement is False.`,
      `**D.** → False

Quantity does fall when price rises, because the demand exponent $-\\frac{1}{2}$ is negative. Revenue multiplies quantity by $p$, which leaves a positive leftover exponent $\\frac{1}{2}$. Check the two prices already computed:

$$
R(16)=4800
$$

$$
R(25)=6000
$$

$$
6000>4800
$$

Revenue rises along this curve, so the statement is False.`,
      `**E.** → True

Doubling revenue would need leftover exponent $1$. Revenue here is $R(p)=1200p^{\\frac{1}{2}}$, so doubling the price from $16$ to $32$ multiplies revenue by

$$
\\frac{R(32)}{R(16)}=2^{\\frac{1}{2}}
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
1.414>1.4
$$

The factor is about $1.414$, which is more than $1.4$, so the statement is True.`,
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

**1.** $q(16)=300$, $q(25)=240$, and $q(36)=200$. Cutting quantity to $200$ needs $p=36$, not a price above $40$.

**2.** $R(16)=4800$ and $R(25)=6000$, so the rise is $1200>1000$. Revenue rises with price because the leftover exponent $\\frac{1}{2}$ is positive.

**3.** Doubling the price from $16$ to $32$ multiplies revenue by $\\sqrt{2}\\approx 1.414$.

**Answer.** $A=1200$ | $q(p)=1200p^{-\\frac{1}{2}}$ | $R(p)=1200p^{\\frac{1}{2}}$ | $R(25)-R(16)=1200$ | $q(36)=200$`,
  },
  {
    id: `math-8-34`,
    case_id: `MATH 8.34`,
    title: `Kiln Output Under a Licensed Ceiling`,
    context: `A kiln's daily output follows $y(x)=A x^{\\frac{4}{3}}$ tonnes for a fuel feed of $x>0$ cubic metres. A test firing at a feed of $27$ produced $324$ tonnes. The site licence forbids shipping more than $1024$ tonnes a day, so any extra firing is wasted. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `To double the test-firing output, the fuel feed must more than double.`,
      `Two firings at a feed of $8$ together already fall short of one firing at a feed of $27$.`,
      `A feed of $8$ produces more than $50$ tonnes.`,
      `The licensed ceiling binds before a feed of $50$.`,
      `The extra output from feed $8$ to feed $27$ already exceeds $250$ tonnes.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

The test firing recovers the coefficient, and doubling output is an inverse-scale question.

$$
27^{\\frac{4}{3}}=81
$$

$$
81A=324
$$

$$
A=4
$$

The kiln law is then $y(x)=4x^{\\frac{4}{3}}$. Doubling the test-firing output of $324$ tonnes means a feed multiplier $k$ with $k^{\\frac{4}{3}}=2$:

$$
\\frac{x}{27}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

$$
1.682<2
$$

A doubled feed would be the factor $2$. The required factor is about $1.68$, which is not more than $2$, so the statement is False.`,
      `**B.** → True

Two firings at a feed of $8$ versus one firing at $27$:

$$
y(8)=4\\cdot 8^{\\frac{4}{3}}
$$

$$
8^{\\frac{4}{3}}=16
$$

$$
y(8)=64
$$

$$
2\\cdot 64=128
$$

$$
y(27)=324
$$

$$
128<324
$$

Two firings at feed $8$ total $128$ tonnes, which already falls short of $324$, so the statement is True.`,
      `**C.** → True

At a feed of $8$:

$$
y(8)=64
$$

$$
64>50
$$

The kiln produces $64$ tonnes, which is more than $50$, so the statement is True.`,
      `**D.** → False

The licence binds where output hits $1024$:

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
x=4^{3}
$$

$$
x=64
$$

$$
64>50
$$

The ceiling binds at a feed of $64$, which is not before $50$, so the statement is False.`,
      `**E.** → True

The extra output from feed $8$ to feed $27$ is

$$
324-64=260
$$

$$
260>250
$$

The extra is $260$ tonnes, which already exceeds $250$, so the statement is True.`,
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

**1.** The test firing gives $A=4$. Then $y(8)=64$ and $y(27)=324$. Two firings at feed $8$ total $128$, which falls short of $324$. The extra from $8$ to $27$ is $260$.

**2.** Doubling output scales feed by $2^{\\frac{3}{4}}\\approx 1.682$, which is less than a doubling.

**3.** Invert (2): $x=256^{\\frac{3}{4}}=64$. The licence binds at $64$, not before a feed of $50$.

**Answer.** $A=4$ | $y(x)=4x^{\\frac{4}{3}}$ | $y(8)=64$ | $y(27)=324$ | licence at $x=64$`,
  },
  {
    id: `math-8-35`,
    case_id: `MATH 8.35`,
    title: `A Pair of Power Functions That Undo Each Other`,
    context: `A calibration stage converts a raw reading $x>0$ into an index by $f(x)=A x^{\\frac{2}{3}}$, and a raw reading of $8$ produced index $36$. A reporting stage converts an index $y>0$ back by $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$. The lab wants to know what happens when the two stages are applied one after the other. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A raw reading of $64$ is sent out with an index above $140$.`,
      `A raw reading of $125$ is sent out with an index under $200$.`,
      `Doubling a raw reading of $8$ doubles the sent index.`,
      `Applying calibration then reporting returns the original reading of $8$.`,
      `The extra index from reading $8$ to $64$ already exceeds the index at $8$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The recorded pair $f(8)=36$ recovers the calibration coefficient:

$$
A\\cdot 8^{\\frac{2}{3}}=36
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
4A=36
$$

$$
A=9
$$

Calibration is then $f(x)=9x^{\\frac{2}{3}}$. At raw reading $64$:

$$
64^{\\frac{2}{3}}=16
$$

$$
f(64)=9\\cdot 16
$$

$$
f(64)=144
$$

$$
144>140
$$

The index sent out is $144$, which is above $140$, so the statement is True.`,
      `**B.** → False

At raw reading $125$:

$$
125^{\\frac{2}{3}}=25
$$

$$
f(125)=9\\cdot 25
$$

$$
f(125)=225
$$

$$
225>200
$$

The index sent out is $225$, which is not under $200$, so the statement is False.`,
      `**C.** → False

Doubling the sent index would need exponent $1$. Calibration uses exponent $\\frac{2}{3}$, so stretching a raw reading of $8$ to $16$ multiplies the index by

$$
\\frac{f(16)}{f(8)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

The factor is about $1.59$, not $2$, so the statement is False.`,
      `**D.** → True

Reporting after calibration is the composition $g(f(x))$. The stage exponents multiply to $1$, and the coefficients are tuned to cancel:

$$
g(f(x))=\\frac{1}{27}\\bigl(9x^{\\frac{2}{3}}\\bigr)^{\\frac{3}{2}}
$$

$$
\\bigl(x^{\\frac{2}{3}}\\bigr)^{\\frac{3}{2}}=x
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
g(f(x))=x
$$

At the recorded reading that identity is

$$
g(f(8))=8
$$

The two stages are inverses on $x>0$, so the original reading of $8$ comes back as $8$, so the statement is True.`,
      `**E.** → True

The index at reading $8$ is the recorded $36$, and at $64$ it is $144$. The extra is

$$
144-36=108
$$

$$
108>36
$$

The extra of $108$ already exceeds the index of $36$ at reading $8$, so the statement is True.`,
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

**1.** Equation (1) is the recovered calibration $f(x)=9x^{\\frac{2}{3}}$.

**2.** Named levels: $f(64)=144>140$ and $f(125)=225$, which is not under $200$. The extra from $8$ to $64$ is $108$, already past $f(8)=36$.

**3.** Doubling a raw reading of $8$ multiplies the index by $2^{\\frac{2}{3}}\\approx 1.587$, not by $2$.

**4.** Compose reporting after calibration:

$$g(f(x))=\\frac{1}{27}(9x^{\\frac{2}{3}})^{\\frac{3}{2}}=x$$

so $g(f(8))=8$.

**5.** The product of the exponents is $1$, and the coefficients cancel.

**Answer.** $A=9$ | $f(64)=144$ | $f(125)=225$ | $g(f(8))=8$ | extra $108$`,
  },
  {
    id: `math-8-36`,
    case_id: `MATH 8.36`,
    title: `Two Ranking Algorithms That Swap Places`,
    context: `Two ranking algorithms are scored against a query load $x>0$. Algorithm S obeys $S(x)=a x^{\\frac{1}{2}}$, and a benchmark at load $4$ scored $16$. Algorithm T is proportional to $x^{\\frac{3}{2}}$, and the same benchmark scored $8$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two algorithms first meet at a load above $6$.`,
      `At a load of $16$, algorithm T is ahead by more than $30$.`,
      `Doubling the load from $4$ to $8$ doubles algorithm S.`,
      `At load $4$, algorithm T already leads algorithm S.`,
      `The extra T-score from load $8$ to $16$ already exceeds S at load $8$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The shared benchmark recovers both coefficients. Algorithm S at load $4$ scored $16$:

$$
a\\cdot 4^{\\frac{1}{2}}=16
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

Algorithm T at the same load scored $8$:

$$
k\\cdot 4^{\\frac{3}{2}}=8
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
8k=8
$$

$$
k=1
$$

The laws are $S(x)=8x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$. They meet where

$$
8x^{\\frac{1}{2}}=x^{\\frac{3}{2}}
$$

$$
8=x^{\\frac{3}{2}-\\frac{1}{2}}
$$

$$
8=x
$$

$$
8>6
$$

On $x>0$ that is the unique crossing, and it sits at a load above $6$, so the statement is True.`,
      `**B.** → True

At a load of $16$:

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
16^{\\frac{3}{2}}=64
$$

$$
64-32=32
$$

$$
32>30
$$

Algorithm T is ahead by $32$, which is more than $30$, so the statement is True.`,
      `**C.** → False

Doubling algorithm S would need exponent $1$. S uses exponent $\\frac{1}{2}$, so stretching load $4$ to $8$ multiplies the S-score by

$$
\\frac{S(8)}{S(4)}=2^{\\frac{1}{2}}
$$

$$
\\sqrt{2}\\approx 1.414
$$

The factor is about $1.41$, not $2$, so the statement is False.`,
      `**D.** → False

At load $4$ the benchmark already records both scores:

$$
S(4)=16
$$

$$
T(4)=8
$$

$$
8<16
$$

Algorithm T sits at $8$, behind S at $16$, so T does not already lead, so the statement is False.`,
      `**E.** → True

The algorithms meet at load $8$, so $S(8)=T(8)$. That common score is

$$
T(8)=8^{\\frac{3}{2}}
$$

$$
8^{\\frac{3}{2}}=16\\sqrt{2}
$$

$$
16\\sqrt{2}\\approx 22.63
$$

The extra T-score from load $8$ to $16$ is

$$
T(16)-T(8)=64-16\\sqrt{2}
$$

$$
64-16\\sqrt{2}\\approx 41.37
$$

$$
41.37>22.63
$$

The extra already exceeds S at load $8$, so the statement is True.`,
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

**1.** The benchmark gives $a=8$ and $k=1$, so $S(4)=16$ and $T(4)=8$. T does not lead at load $4$.

**2.** Set (1) equal to (2) on $x>0$:

$$8x^{\\frac{1}{2}}=x^{\\frac{3}{2}} \\qquad x=8$$

The unique positive crossing sits above $6$.

**3.** Doubling load from $4$ to $8$ multiplies $S$ by $2^{\\frac{1}{2}}\\approx 1.414$, not by $2$.

**4.** Named levels: $S(16)=32$, $T(16)=64$, so T is ahead by $32$. $T(8)=S(8)=16\\sqrt{2}$. The extra T-score from $8$ to $16$ is $64-16\\sqrt{2}\\approx 41.4$, already past $S(8)$.

**Answer.** $S(x)=8x^{\\frac{1}{2}}$ | $T(x)=x^{\\frac{3}{2}}$ | unique crossing at $x=8$ | $T(16)-S(16)=32$ | extra T $\\approx 41.4$`,
  },
  {
    id: `math-8-37`,
    case_id: `MATH 8.37`,
    title: `Server Fleet Capacity Beneath a Contracted Ceiling`,
    context: `A hosting platform's sustained capacity follows $C(m)=A m^{\\frac{4}{5}}$ requests per second for $m>0$ machines. A fleet of $32$ machines sustains $80$ requests per second. The support contract will not certify more than $500$ requests per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A fleet of $243$ machines sustains more than $400$ requests per second.`,
      `The contracted ceiling binds before $250$ machines.`,
      `Two fleets of $32$ machines together already fall short of one fleet of $243$.`,
      `Because the exponent is below $1$, the contracted ceiling is never reached.`,
      `The extra capacity from $32$ to $243$ machines already exceeds the $32$-machine reading.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The $32$-machine run recovers the coefficient, and $243$ is a fifth power so the capacity is exact.

$$
32^{\\frac{4}{5}}=16
$$

$$
16A=80
$$

$$
A=5
$$

Capacity is then $C(m)=5m^{\\frac{4}{5}}$. A fleet of $243$ is $3^{5}$:

$$
243^{\\frac{4}{5}}=81
$$

$$
C(243)=5\\cdot 81
$$

$$
C(243)=405
$$

$$
405>400
$$

Capacity is $405$ requests per second, which is more than $400$, so the statement is True.`,
      `**B.** → False

The ceiling binds where capacity hits $500$:

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
m=100\\sqrt{10}
$$

$$
100\\sqrt{10}\\approx 316.2
$$

$$
316.2>250
$$

The ceiling binds near $316$ machines, which is not before $250$, so the statement is False.`,
      `**C.** → True

Two fleets of $32$ versus one fleet of $243$:

$$
C(32)=80
$$

$$
2\\cdot 80=160
$$

$$
C(243)=405
$$

$$
160<405
$$

Two fleets of $32$ total $160$ requests per second, which already falls short of $405$, so the statement is True.`,
      `**D.** → False

An exponent below $1$ slows growth, it does not stop it. Square-root-like capacity still tends to infinity as the fleet grows, so it must cross any finite ceiling. The $500$ cap is already reached at a finite fleet of about $316$ machines, and a larger exact fleet sits past that crossing:

$$
C(1024)=5\\cdot 256
$$

$$
C(1024)=1280
$$

$$
1280>500
$$

The ceiling is crossed at a finite fleet, so the statement is False.`,
      `**E.** → True

The extra capacity from $32$ to $243$ machines is

$$
405-80=325
$$

$$
325>80
$$

The extra of $325$ already exceeds the $32$-machine reading of $80$, so the statement is True.`,
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

**1.** $C(32)=80$ and $C(243)=5\\cdot 81=405$. Two fleets of $32$ total $160$, which falls short of $405$. The extra from $32$ to $243$ is $325$, which already exceeds the $32$-machine reading of $80$.

**2.** Invert (2): $m=100^{\\frac{5}{4}}=100\\sqrt{10}\\approx 316.2$. The ceiling binds near $316$ machines, not before $250$. An exponent below $1$ slows growth but still reaches $500$ at a finite fleet.

**Answer.** $A=5$ | $C(m)=5m^{\\frac{4}{5}}$ | $C(243)=405$ | ceiling at $m\\approx 316.2$`,
  },
  {
    id: `math-8-38`,
    case_id: `MATH 8.38`,
    title: `Hiring Against a Square-Root Revenue Curve`,
    context: `A seasonal workshop's revenue follows $R(L)=A L^{\\frac{1}{2}}$ from $L>0$ hours of hired labour. Extending a season from $100$ to $400$ hours raised recorded revenue by $1200$. Labour is paid a wage of $6$ per hour, and the owner judges the season by the net gain $R(L)-6L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $900$ hours the net gain is below $-1000$.`,
      `Net gain crosses zero only after more than $300$ hours.`,
      `Doubling hours from $100$ to $200$ doubles net gain.`,
      `At $100$ hours net gain already exceeds $500$.`,
      `The extra net from $100$ to $400$ hours already exceeds the net at $100$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The revenue gain recovers the coefficient, because both hour counts are perfect squares.

$$
A\\cdot 400^{\\frac{1}{2}}-A\\cdot 100^{\\frac{1}{2}}=1200
$$

$$
20A-10A=1200
$$

$$
10A=1200
$$

$$
A=120
$$

Revenue is then $R(L)=120L^{\\frac{1}{2}}$ and net gain is $\\Pi(L)=120L^{\\frac{1}{2}}-6L$. At $900$ hours:

$$
900^{\\frac{1}{2}}=30
$$

$$
R(900)=120\\cdot 30
$$

$$
R(900)=3600
$$

$$
6\\cdot 900=5400
$$

$$
\\Pi(900)=3600-5400
$$

$$
\\Pi(900)=-1800
$$

$$
-1800<-1000
$$

Square-root revenue cannot keep pace with a linear wage once hours are large. The net gain is $-1800$, so the statement is True.`,
      `**B.** → True

Break-even on $L>0$ is where recovered revenue equals the wage bill:

$$
120L^{\\frac{1}{2}}-6L=0
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

$$
400>300
$$

On $L>0$ that is the only root, and $400$ sits past $300$. Net gain crosses zero only after more than $300$ hours, so the statement is True.`,
      `**C.** → False

Net gain is a difference of two powers, $\\Pi(L)=120L^{\\frac{1}{2}}-6L$, so it is not itself a power of hours. Doubling hours would double net only for a single monomial of exponent $1$. From $100$ hours to $200$:

$$
\\Pi(100)=600
$$

$$
\\Pi(200)=120\\sqrt{200}-1200
$$

$$
\\sqrt{200}=10\\sqrt{2}
$$

$$
\\Pi(200)=1200\\sqrt{2}-1200
$$

$$
\\Pi(200)\\approx 497
$$

Twice $600$ would be $1200$. The net falls to about $497$, so the statement is False.`,
      `**D.** → True

At $100$ hours net gain is

$$
\\Pi(100)=120\\cdot 10-600
$$

$$
\\Pi(100)=600
$$

$$
600>500
$$

Net gain is $600$, which already exceeds $500$, so the statement is True.`,
      `**E.** → False

The extra net from $100$ to $400$ hours is

$$
\\Pi(400)-\\Pi(100)=0-600
$$

$$
0-600=-600
$$

The net at $100$ hours is $600$. An extra of $-600$ does not exceed $600$, so the statement is False.`,
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

**1.** The revenue gain gives $A=120$. Then $\\Pi(100)=600>500$ and $\\Pi(900)=-1800$, already below $-1000$.

**2.** Break-even $\\Pi(L)=0$ on $L>0$:

$$120L^{\\frac{1}{2}}=6L \\qquad L=400$$

which sits past $300$ hours.

**3.** Doubling hours from $100$ to $200$ cannot double net gain: $\\Pi$ is a difference of two powers, and $\\Pi(200)=1200(\\sqrt{2}-1)\\approx 497$, not $1200$.

**4.** The extra net from $100$ to $400$ hours is $0-600=-600$, which does not exceed $\\Pi(100)=600$.

**5.** The maximiser is $\\Pi'(L)=0$ at $L=100$.

**Answer.** $A=120$ | $\\Pi(100)=600$ | $\\Pi(400)=0$ | $\\Pi(900)=-1800$ | $\\Pi(200)\\approx 497$`,
  },
  {
    id: `math-8-39`,
    case_id: `MATH 8.39`,
    title: `Splitting an Order Between Two Quadratic-Cost Plants`,
    context: `A firm must produce $60$ units and can split them between two plants. Plant 1's cost is $C_1(q)=A q^{2}$: a run of $20$ units there cost $200$. Plant 2's cost is $C_2(q)=k q^{2}$: a run of $40$ units there cost $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Concentrating all $60$ units in the cheaper plant still costs more than $800$.`,
      `Sending $30$ units to each plant already costs under $700$.`,
      `Doubling plant 2's run from $20$ to $40$ doubles its cost.`,
      `A $20$/$40$ split already costs under $650$.`,
      `Two runs of $20$ on plant 2 together already fall short of one run of $40$ on plant 2.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The recorded runs recover both plants. Plant 1 at $20$ units cost $200$:

$$
A\\cdot 20^{2}=200
$$

$$
400A=200
$$

$$
A=\\frac{1}{2}
$$

Plant 2 at $40$ units cost $400$:

$$
k\\cdot 40^{2}=400
$$

$$
1600k=400
$$

$$
k=\\frac{1}{4}
$$

Plant 2 is cheaper for any given output, so it is the cheaper plant. Concentrating all $60$ units there costs

$$
C_2(60)=\\frac{1}{4}\\cdot 60^{2}
$$

$$
60^{2}=3600
$$

$$
C_2(60)=900
$$

$$
900>800
$$

The corner still costs $900$, which is more than $800$, so the statement is True.`,
      `**B.** → True

Sending $30$ units to each plant costs

$$
C_1(30)=\\frac{1}{2}\\cdot 900
$$

$$
C_1(30)=450
$$

$$
C_2(30)=\\frac{1}{4}\\cdot 900
$$

$$
C_2(30)=225
$$

$$
450+225=675
$$

$$
675<700
$$

The even split costs $675$, which is under $700$, so the statement is True.`,
      `**C.** → False

Doubling plant 2's cost would need exponent $1$. Plant 2 is quadratic, $C_2(q)=\\frac{1}{4}q^{2}$, so stretching a run of $20$ to $40$ multiplies its cost by

$$
\\frac{C_2(40)}{C_2(20)}=2^{2}
$$

$$
2^{2}=4
$$

The cost goes from $100$ to $400$, a factor of $4$, not $2$, so the statement is False.`,
      `**D.** → True

A $20$/$40$ split costs the two recorded runs:

$$
C_1(20)+C_2(40)=200+400
$$

$$
200+400=600
$$

$$
600<650
$$

The split costs $600$, which is already under $650$, so the statement is True.`,
      `**E.** → True

Two runs of $20$ on plant 2 together cost

$$
2\\cdot C_2(20)=2\\cdot 100
$$

$$
2\\cdot 100=200
$$

One run of $40$ on plant 2 costs $C_2(40)=400$. Because $200<400$, the two small runs already fall short of the single large run, so the statement is True.`,
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

**1.** The recorded runs give $A=\\frac{1}{2}$ and $k=\\frac{1}{4}$. Plant 2 is the cheaper plant. Concentrating all $60$ units there costs $C_2(60)=900>800$.

**2.** An even split costs $C(30)=675<700$. The $20$ to $40$ split costs $C(20)=600<650$.

**3.** Doubling plant 2 from $20$ to $40$ multiplies its cost by $2^{2}=4$, not by $2$.

**4.** Two runs of $20$ on plant 2 total $200$, which already falls short of $C_2(40)=400$.

**5.** Equalising marginal costs yields the $20$ to $40$ split, which is cheapest.

**Answer.** $C_1(q)=\\frac{1}{2}q^{2}$ | $C_2(q)=\\frac{1}{4}q^{2}$ | $C_2(60)=900$ | even split $675$ | $20$ to $40$ split $600$`,
  },
  {
    id: `math-8-40`,
    case_id: `MATH 8.40`,
    title: `Testing Whether Field Data Fit One Power Law`,
    context: `A laboratory records four measurements of a response $y$ against an input $x$: $(4,\\,24)$, $(16,\\,192)$, $(9,\\,81)$ and a planned run at $x=25$. An analyst fits a power law $y=A x^{r}$ using the first two measurements only. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The fitted law predicts a response above $350$ at $x=25$.`,
      `At $x=9$ the fitted response is already above $70$.`,
      `Doubling $x$ from $4$ to $8$ doubles the fitted response.`,
      `The measurement at $x=9$ sits more than $10$ above the fitted law.`,
      `The extra fitted response from $x=4$ to $x=9$ already exceeds the $x=4$ reading.`,
    ],
    answer_key: [true, true, false, false, true],
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
4^{r}=8
$$

$$
2^{2r}=2^{3}
$$

$$
r=\\frac{3}{2}
$$

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

The fitted law is $y=3x^{\\frac{3}{2}}$. At $x=25$:

$$
25^{\\frac{3}{2}}=125
$$

$$
y(25)=3\\cdot 125
$$

$$
y(25)=375
$$

$$
375>350
$$

The fitted law predicts $375$, which is above $350$, so the statement is True.`,
      `**B.** → True

At $x=9$ the fitted response is

$$
9^{\\frac{3}{2}}=27
$$

$$
y(9)=3\\cdot 27
$$

$$
y(9)=81
$$

$$
81>70
$$

The fitted response is $81$, which is already above $70$, so the statement is True.`,
      `**C.** → False

Doubling the fitted response would need exponent $1$. The fitted exponent is $\\frac{3}{2}$, so stretching $x$ from $4$ to $8$ multiplies the response by

$$
\\frac{y(8)}{y(4)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
2\\sqrt{2}\\approx 2.828
$$

The factor is about $2.83$, not $2$, so the statement is False.`,
      `**D.** → False

The measurement at $x=9$ was held out of the fit. The fitted value there is already $81$, and the recorded response is also $81$:

$$
81-81=0
$$

$$
0<10
$$

The held-out point sits on the curve, not more than $10$ above it, so the statement is False.`,
      `**E.** → True

The extra fitted response from $x=4$ to $x=9$ is

$$
y(9)-y(4)=81-24
$$

$$
81-24=57
$$

$$
57>24
$$

The extra of $57$ already exceeds the $x=4$ reading of $24$, so the statement is True.`,
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

**2.** The planned run: $y(25)=375>350$. At $x=9$ the fitted response is $81>70$.

**3.** Doubling $x$ from $4$ to $8$ multiplies the fitted response by $2^{\\frac{3}{2}}\\approx 2.828$, not by $2$.

**4.** The held-out measurement at $x=9$ is also $81$, so it sits $0$ above the fitted law, not more than $10$.

**5.** The extra fitted response from $x=4$ to $x=9$ is $81-24=57$, already past $y(4)=24$.

**Answer.** $r=\\frac{3}{2}$ | $A=3$ | $y=3x^{\\frac{3}{2}}$ | $y(9)=81$ | $y(25)=375$ | extra $57$`,
  },
  {
    id: `math-8-41`,
    case_id: `MATH 8.41`,
    title: `Turning a Negative-Power Demand Curve Around`,
    context: `A component supplier faces demand $q(p)=A p^{-2}$ units at a price $p>0$ euros. A catalogue price of $4$ euros clears $400$ units. Procurement wants the curve written the other way round, with price a function of quantity. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $100$ units, revenue is already above $750$ euros.`,
      `After $25$ units the clearing price is already under $20$ euros.`,
      `Raising the catalogue price raises revenue along this curve.`,
      `Doubling quantity from $25$ to $100$ more than doubles revenue.`,
      `The quantity that yields $1600$ of revenue already exceeds $400$ units.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The catalogue pair $q(4)=400$ pins the coefficient on $q=A p^{-2}$:

$$
A\\cdot 4^{-2}=400
$$

$$
4^{2}=16
$$

$$
\\frac{A}{16}=400
$$

$$
A=6400
$$

Demand is then $q=6400 p^{-2}$. Revenue as a function of quantity is $R=80 q^{\\frac{1}{2}}$. At one hundred units:

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
80\\cdot 10=800
$$

$$
800>750
$$

Revenue is $800$ euros, which is already above $750$, so the statement is True.`,
      `**B.** → True

At twenty-five units the inverse price is $p=80 q^{-\\frac{1}{2}}$:

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
\\frac{80}{5}=16
$$

$$
16<20
$$

The clearing price is $16$ euros, which is already under $20$, so the statement is True.`,
      `**C.** → False

Along this curve, revenue is price times quantity:

$$
R(p)=p\\cdot 6400 p^{-2}
$$

$$
R(p)=\\frac{6400}{p}
$$

The leftover exponent on price is $-1$, so a larger catalogue price puts a larger number in the denominator. Raising the price therefore cuts revenue rather than raising it. At the recorded four euros:

$$
R(4)=\\frac{6400}{4}
$$

$$
\\frac{6400}{4}=1600
$$

At eight euros:

$$
R(8)=\\frac{6400}{8}
$$

$$
\\frac{6400}{8}=800
$$

$$
800<1600
$$

A higher catalogue price cuts revenue, so the statement is False.`,
      `**D.** → False

Quantity from twenty-five to one hundred is a factor of four, not a doubling:

$$
\\frac{100}{25}=4
$$

Revenue scales with $q^{\\frac{1}{2}}$, so that factor of four becomes

$$
\\frac{R(100)}{R(25)}=4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

The two levels confirm the factor:

$$
R(25)=80\\cdot 5
$$

$$
80\\cdot 5=400
$$

$$
R(100)=80\\cdot 10
$$

$$
80\\cdot 10=800
$$

$$
\\frac{800}{400}=2
$$

Revenue exactly doubles, which is not more than a doubling, so the statement is False.`,
      `**E.** → False

Setting revenue equal to $1600$ solves

$$
80 q^{\\frac{1}{2}}=1600
$$

$$
q^{\\frac{1}{2}}=\\frac{1600}{80}
$$

$$
\\frac{1600}{80}=20
$$

$$
q=20^{2}
$$

$$
20^{2}=400
$$

That quantity is exactly $400$ units, which does not exceed $400$, so the statement is False.`,
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

**1.** $A=6400$, so $R(q)=80q^{\\frac{1}{2}}$ and $R(p)=\\frac{6400}{p}$.

**2.** $R(100)=800$, already above $750$. $p(25)=16$, already under $20$.

**3.** $R$ falls as catalogue price rises. From $25$ to $100$ units, $R$ doubles exactly. $R=1600$ at $q=400$, which does not exceed $400$.

**Answer.** $A=6400$ | $R(100)=800$ | $p(25)=16$ | $R=1600$ at $q=400$`,
  },
  {
    id: `math-8-42`,
    case_id: `MATH 8.42`,
    title: `Average Product of a Square-Root Technology`,
    context: `A workshop's output follows $Y(L)=A L^{\\frac{1}{2}}$ units for $L>0$ labour hours. Extending a shift from $9$ hours to $36$ hours added exactly $60$ units. Management tracks average product $\\frac{Y}{L}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The extra output from $9$ to $36$ hours already equals the $9$-hour output.`,
      `A $36$-hour shift already produces more than $100$ units.`,
      `At $25$ hours, average product is still above $5$ units per hour.`,
      `To double the $9$-hour output, labour hours must more than double.`,
      `Average product falls by more than $2$ units per hour when the shift goes from $9$ to $36$ hours.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The shift extension from nine hours to thirty-six added sixty units. Those hours are perfect squares, so the coefficient is a difference of square roots:

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

Output is then $Y=20 L^{\\frac{1}{2}}$. The two shift counts are

$$
Y(9)=20\\cdot 3
$$

$$
20\\cdot 3=60
$$

$$
Y(36)=20\\cdot 6
$$

$$
20\\cdot 6=120
$$

$$
Y(36)-Y(9)=120-60
$$

$$
120-60=60
$$

$$
60=60
$$

The extra from nine to thirty-six already equals the nine-hour output, so the statement is True.`,
      `**B.** → True

Output follows $Y=20 L^{\\frac{1}{2}}$. At thirty-six hours the square root is exact:

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
20\\cdot 6=120
$$

$$
120>100
$$

A $36$-hour shift produces $120$ units, which is already more than $100$, so the statement is True.`,
      `**C.** → False

Average product at twenty-five hours divides output by labour:

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
\\frac{20}{5}=4
$$

$$
4<5
$$

Average product is $4$ units per hour, which is not above $5$, so the statement is False.`,
      `**D.** → True

Nine hours already yield $60$ units, so doubling that output means $120$. Because the exponent is $\\frac{1}{2}$, labour must scale by four, not by two. The labour that produces $120$ solves

$$
20 L^{\\frac{1}{2}}=120
$$

$$
L^{\\frac{1}{2}}=\\frac{120}{20}
$$

$$
\\frac{120}{20}=6
$$

$$
L=6^{2}
$$

$$
6^{2}=36
$$

$$
\\frac{36}{9}=4
$$

$$
4>2
$$

Four times the hours is more than a doubling, so the statement is True.`,
      `**E.** → True

Average product is $20 L^{-\\frac{1}{2}}$. At nine hours:

$$
\\frac{Y(9)}{9}=\\frac{20}{3}
$$

At thirty-six hours:

$$
\\frac{Y(36)}{36}=\\frac{20}{6}
$$

$$
\\frac{20}{6}=\\frac{10}{3}
$$

The fall is

$$
\\frac{20}{3}-\\frac{10}{3}=\\frac{10}{3}
$$

$$
\\frac{10}{3}\\approx 3.33
$$

$$
3.33>2
$$

Average product falls by more than $2$ units per hour, so the statement is True.`,
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

**1.** $Y(9)=60$ and $Y(36)=120$. The extra $60$ equals the nine-hour output.

**2.** $Y(36)=120>100$. Doubling sixty units needs $L=36$, four times nine hours.

**3.** Average product is $4$ at $L=25$, not above $5$. From $9$ to $36$ hours it falls by $\\frac{10}{3}>2$.

**Answer.** $A=20$ | $Y(36)=120$ | $\\frac{Y(25)}{25}=4$ | AP drop $\\frac{10}{3}$`,
  },
  {
    id: `math-8-43`,
    case_id: `MATH 8.43`,
    title: `Two Break-Even Points Around a Fixed Charge`,
    context: `A contract manufacturer earns $R(q)=A q^{\\frac{1}{2}}$ euros from an output of $q>0$ units, pays $2$ euros per unit, and carries a fixed charge of $400$ euros a period. A run of $100$ units brought in $600$ euros of revenue. Profit is revenue minus both charges. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $25$ units the firm is more than $100$ euros below break-even.`,
      `At $225$ units, profit exceeds $80$ euros.`,
      `At $100$ units the operation is already at break-even.`,
      `Doubling output from $100$ to $200$ doubles profit.`,
      `The extra profit from $100$ to $225$ already falls short of $60$ euros.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The hundred-unit invoice $R(100)=600$ pins the coefficient:

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

Profit is then $\\Pi=60 q^{\\frac{1}{2}}-2q-400$. At twenty-five units:

$$
25^{\\frac{1}{2}}=5
$$

$$
60\\cdot 5=300
$$

$$
2\\cdot 25=50
$$

$$
\\Pi(25)=300-50-400
$$

$$
300-50-400=-150
$$

The firm is $150$ euros below break-even, which is more than $100$, so the statement is True.`,
      `**B.** → False

At two hundred and twenty-five units the square root is $15$:

$$
60\\cdot 15=900
$$

$$
2\\cdot 225=450
$$

$$
\\Pi(225)=900-450-400
$$

$$
900-450-400=50
$$

$$
50<80
$$

Profit is $50$ euros, which does not exceed $80$, so the statement is False.`,
      `**C.** → True

At one hundred units the square root is $10$, so revenue matches the recorded invoice of $600$ euros:

$$
60\\cdot 10=600
$$

$$
2\\cdot 100=200
$$

$$
\\Pi(100)=600-200-400
$$

$$
600-200-400=0
$$

Profit is exactly zero. The operation is already at break-even, so the statement is True.`,
      `**D.** → False

Profit is not a power of output. Square-root revenue would scale under a doubling, but the linear charge $-2q$ and the intercept $-400$ do not share that exponent, so the whole expression is not homogeneous. Doubling output would double profit only if $\\Pi$ were a degree-$1$ power with no intercept. At the first break-even $\\Pi(100)=0$, and twice zero is still zero. At two hundred units:

$$
200^{\\frac{1}{2}}=10\\sqrt{2}
$$

$$
\\Pi(200)=60\\cdot 10\\sqrt{2}-2\\cdot 200-400
$$

$$
\\Pi(200)=600\\sqrt{2}-800
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
600\\cdot 1.414=848.4
$$

$$
\\Pi(200)\\approx 48.4
$$

$$
48.4\\neq 0
$$

Doubling output from $100$ to $200$ does not double profit, so the statement is False.`,
      `**E.** → True

Profit at one hundred units is $0$ and at two hundred and twenty-five units is $50$. The extra is the gap from that break-even:

$$
\\Pi(225)-\\Pi(100)=50-0
$$

$$
50-0=50
$$

$$
50<60
$$

The extra already falls short of $60$ euros, so the statement is True.`,
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

**1.** $A=60$. $\\Pi(25)=-150$, more than $100$ euros below break-even. $\\Pi(100)=0$, already at break-even.

**2.** $\\Pi(225)=50$, which does not exceed $80$. The extra from $100$ to $225$ is $50$, which falls short of $60$.

**3.** Doubling output from $100$ to $200$ does not double profit: $\\Pi(100)=0$ and $\\Pi(200)=600\\sqrt{2}-800\\approx 48.4\\neq 0$.

**Answer.** $A=60$ | $\\Pi(25)=-150$ | $\\Pi(100)=0$ | $\\Pi(225)=50$ | extra $50$`,
  },
  {
    id: `math-8-44`,
    case_id: `MATH 8.44`,
    title: `A Benefit and a Cost With Different Exponents`,
    context: `A city values a flood-defence programme of scale $x>0$ by the benefit $B(x)=A x^{\\frac{1}{2}}$ and the cost $C(x)=K x^{\\frac{3}{2}}$, both in millions. A trial at scale $16$ delivered $72$ million of benefit. A trial at scale $4$ cost $4$ million. Net benefit is $B-C$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At scale $16$, cost is already above $30$ million.`,
      `At scale $9$, net benefit exceeds $42$ million.`,
      `Benefit and cost already meet below scale $40$.`,
      `Doubling scale from $16$ to $32$ doubles benefit.`,
      `The extra cost from scale $16$ to $36$ already exceeds the cost at $16$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The two trials pin both coefficients. Benefit at scale $16$ is $72$:

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

Cost at scale $4$ is $4$:

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

Cost is then $C=\\frac{1}{2} x^{\\frac{3}{2}}$. At scale sixteen:

$$
C(16)=\\frac{1}{2}\\cdot 16^{\\frac{3}{2}}
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
C(16)=\\frac{1}{2}\\cdot 64
$$

$$
\\frac{1}{2}\\cdot 64=32
$$

$$
32>30
$$

Cost is $32$ million, which is already above $30$, so the statement is True.`,
      `**B.** → False

At scale nine, benefit and cost are

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
18\\cdot 3=54
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
54-\\frac{27}{2}=\\frac{81}{2}
$$

$$
\\frac{81}{2}=40.5
$$

$$
40.5<42
$$

Net benefit is $40.5$ million, which does not exceed $42$, so the statement is False.`,
      `**C.** → True

Benefit grows like a square root and cost like a three-halves power, so cost has the steeper exponent and must overtake. They meet where $B=C$:

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
18\\cdot 2=36
$$

$$
36<40
$$

The unique positive meeting is already below scale $40$, so the statement is True.`,
      `**D.** → False

Benefit is $B=18 x^{\\frac{1}{2}}$. Doubling scale would double benefit only if the exponent were $1$. With exponent $\\frac{1}{2}$ the scale factor is

$$
\\frac{B(2x)}{B(x)}=2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.414
$$

$$
1.414\\neq 2
$$

From scale $16$ to $32$, benefit rises by about $1.41$, not by $2$, so the statement is False.`,
      `**E.** → True

Cost at scale $16$ is $32$. At the meeting scale $36$:

$$
C(36)=\\frac{1}{2}\\cdot 36^{\\frac{3}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
36^{\\frac{3}{2}}=216
$$

$$
C(36)=\\frac{1}{2}\\cdot 216
$$

$$
\\frac{1}{2}\\cdot 216=108
$$

$$
C(36)-C(16)=108-32
$$

$$
108-32=76
$$

$$
76>32
$$

The extra already exceeds the cost at $16$, so the statement is True.`,
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

**1.** $A=18$ and $K=\\frac{1}{2}$. $C(16)=32>30$. At $x=9$, net benefit is $40.5$, which does not exceed $42$.

**2.** The unique positive meeting is $x=36$, already below $40$. Doubling scale from $16$ to $32$ multiplies benefit by $2^{\\frac{1}{2}}\\approx 1.414$, not by $2$.

**3.** Extra cost from $16$ to $36$ is $C(36)-C(16)=108-32=76$, which already exceeds $C(16)=32$.

**Answer.** $A=18$ | $K=\\frac{1}{2}$ | $C(16)=32$ | meeting $x=36$ | extra cost $76$`,
  },
  {
    id: `math-8-45`,
    case_id: `MATH 8.45`,
    title: `Furnace Throughput Calibrated From Two Runs`,
    context: `A furnace's throughput follows $T(g)=A g^{r}$ tonnes per hour, where $g>0$ is the gas feed in cubic metres per hour. A feed of $8$ gave $16$ tonnes per hour, and a feed of $27$ gave $36$. The site licence caps throughput at $32$ tonnes per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The extra throughput from feed $8$ to $27$ already exceeds the $8$-feed reading.`,
      `Doubling the gas feed doubles throughput.`,
      `A feed of $64$ already produces more than $60$ tonnes per hour.`,
      `Throughput per cubic metre falls from feed $8$ to $27$ by more than $0.5$.`,
      `The licensed ceiling is reached at a feed below $24$ cubic metres per hour.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The two furnace runs determine both constants. Their ratio cancels $A$:

$$
\\frac{36}{16}=\\left(\\frac{27}{8}\\right)^{r}
$$

$$
\\frac{36}{16}=\\frac{9}{4}
$$

$$
\\frac{27}{8}=\\frac{3^{3}}{2^{3}}
$$

$$
\\left(\\frac{3}{2}\\right)^{2}=\\left(\\frac{3}{2}\\right)^{3r}
$$

$$
2=3r
$$

$$
r=\\frac{2}{3}
$$

The eight-feed level then pins $A$:

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

Throughput is $T=4 g^{\\frac{2}{3}}$. The extra from feed $8$ to $27$ is

$$
T(27)-T(8)=36-16
$$

$$
36-16=20
$$

$$
20>16
$$

The extra already exceeds the eight-feed reading, so the statement is True.`,
      `**B.** → False

Doubling the gas feed would double throughput only if the exponent were $1$. With exponent $\\frac{2}{3}$ the scale factor is

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
      `**C.** → True

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
T(64)=4\\cdot 16
$$

$$
4\\cdot 16=64
$$

$$
64>60
$$

Throughput is $64$ tonnes per hour, which is already more than $60$, so the statement is True.`,
      `**D.** → True

Throughput per cubic metre lowers the exponent by one:

$$
\\frac{T(g)}{g}=4 g^{-\\frac{1}{3}}
$$

At feed $8$:

$$
\\frac{T(8)}{8}=4\\cdot 8^{-\\frac{1}{3}}
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
\\frac{T(8)}{8}=4\\cdot\\frac{1}{2}
$$

$$
4\\cdot\\frac{1}{2}=2
$$

At feed $27$:

$$
\\frac{T(27)}{27}=4\\cdot 27^{-\\frac{1}{3}}
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
\\frac{T(27)}{27}=4\\cdot\\frac{1}{3}
$$

$$
4\\cdot\\frac{1}{3}=\\frac{4}{3}
$$

The fall is

$$
2-\\frac{4}{3}=\\frac{2}{3}
$$

$$
\\frac{2}{3}\\approx 0.667
$$

$$
0.667>0.5
$$

Throughput per cubic metre falls by more than $0.5$, so the statement is True.`,
      `**E.** → True

The licensed ceiling of thirty-two tonnes per hour inverts the throughput law:

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
8\\cdot 2\\sqrt{2}=16\\sqrt{2}
$$

$$
16\\sqrt{2}\\approx 22.63
$$

$$
22.63<24
$$

That feed is below $24$ cubic metres per hour, so the statement is True.`,
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

**1.** Extra from $8$ to $27$ is $20$, which exceeds $T(8)=16$. $T(64)=64>60$.

**2.** Doubling the feed multiplies $T$ by $2^{\\frac{2}{3}}\\approx 1.587$, not by $2$. Throughput per cubic metre falls from $2$ to $\\frac{4}{3}$, a drop of $\\frac{2}{3}>0.5$.

**3.** The ceiling $T=32$ is met at $g=16\\sqrt{2}\\approx 22.63$, below $24$.

**Answer.** $A=4$ | $r=\\frac{2}{3}$ | extra $20$ | ceiling at $g=16\\sqrt{2}$`,
  },
  {
    id: `math-8-46`,
    case_id: `MATH 8.46`,
    title: `Rainwater Basin Storage Under a Square Law`,
    context: `A tapered rainwater basin stores $V(d)=A d^{2}$ cubic metres when filled to a depth of $d>0$ metres. A survey found that raising the water from $3$ metres to $5$ metres added exactly $64$ cubic metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $6$ metres the basin already holds more than $140$ cubic metres.`,
      `Filling from $4$ metres to $8$ metres adds more than $200$ cubic metres.`,
      `Measuring depth in centimetres makes the new coefficient larger than $0.001$.`,
      `The extra volume from $3$ metres to $5$ metres already exceeds the volume stored at $3$ metres.`,
      `Stored volume at $5$ metres is already more than four times the volume at $3$ metres.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The survey is a difference of squares and recovers the coefficient:

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

Storage is then $V=4d^{2}$. At six metres:

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
4\\cdot 36=144
$$

$$
144>140
$$

The basin holds $144$ cubic metres, which is already more than $140$, so the statement is True.`,
      `**B.** → False

The added volume from four metres to eight metres is a difference of two levels:

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
4\\cdot 64=256
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
4\\cdot 16=64
$$

$$
V(8)-V(4)=256-64
$$

$$
256-64=192
$$

$$
192<200
$$

The add-on is $192$ cubic metres, which is not more than $200$, so the statement is False.`,
      `**C.** → False

Storage is $V=4d^{2}$ when depth is in metres. A centimetre reading $d_{\\mathrm{cm}}$ counts one hundred centimetres to the metre, so $d=\\frac{d_{\\mathrm{cm}}}{100}$. A square law pushes that $100$ through the exponent $2$, and only the coefficient moves:

$$
V=4\\left(\\frac{d_{\\mathrm{cm}}}{100}\\right)^{2}
$$

$$
V=\\frac{4}{100^{2}}d_{\\mathrm{cm}}^{2}
$$

$$
100^{2}=10000
$$

$$
V=\\frac{4}{10000}d_{\\mathrm{cm}}^{2}
$$

$$
\\frac{4}{10000}=0.0004
$$

$$
0.0004<0.001
$$

The new coefficient is $0.0004$, which is not larger than $0.001$, so the statement is False.`,
      `**D.** → True

At three metres and at five metres:

$$
V(3)=4\\cdot 3^{2}
$$

$$
3^{2}=9
$$

$$
V(3)=4\\cdot 9
$$

$$
4\\cdot 9=36
$$

$$
V(5)=4\\cdot 5^{2}
$$

$$
5^{2}=25
$$

$$
V(5)=4\\cdot 25
$$

$$
4\\cdot 25=100
$$

$$
V(5)-V(3)=100-36
$$

$$
100-36=64
$$

$$
64>36
$$

The extra already exceeds the volume stored at three metres, so the statement is True.`,
      `**E.** → False

Stored volume at five metres is $100$. Four times the three-metre volume would be

$$
4\\cdot 36=144
$$

$$
100<144
$$

The ratio of the two levels is

$$
\\frac{V(5)}{V(3)}=\\frac{100}{36}
$$

$$
\\frac{100}{36}=\\frac{25}{9}
$$

$$
\\frac{25}{9}\\approx 2.78
$$

$$
2.78<4
$$

Volume at five metres is not more than four times the volume at three metres, so the statement is False.`,
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

**1.** $V(6)=144>140$. Filling from $4$ m to $8$ m adds $192$, not more than $200$.

**2.** The centimetre-form coefficient is $0.0004$, not larger than $0.001$.

**3.** Extra from $3$ m to $5$ m is $64>V(3)=36$. $V(5)=100$ is not more than four times $V(3)=36$.

**Answer.** $A=4$ | $V(6)=144$ | add-on $192$ | $A'=0.0004$`,
  },
  {
    id: `math-8-47`,
    case_id: `MATH 8.47`,
    title: `A Braking-Energy Index Recovered From a Speed Change`,
    context: `A fleet safety report scores braking energy by the index $E(v)=A v^{2}$, where $v>0$ is speed in kilometres per hour. The report does not give $A$: it states only that raising the test speed from $30$ to $50$ kilometres per hour raised the index by exactly $80$ points. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $40$ kilometres per hour the index is already above $70$.`,
      `At $80$ kilometres per hour the index is still under $300$.`,
      `The extra index from $30$ to $50$ already exceeds the index at $30$.`,
      `Raising speed from $40$ to $80$ multiplies the index by $4$.`,
      `A $20$ km/h rise from $30$ to $50$ adds more to the index than a $20$ km/h rise from $50$ to $70$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The eighty-point gap is a difference of squares and recovers the coefficient:

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
\\frac{80}{1600}=\\frac{1}{20}
$$

The index is then $E=\\frac{1}{20} v^{2}$. At forty kilometres per hour:

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
\\frac{1600}{20}=80
$$

$$
80>70
$$

The index reads $80$, which is already above $70$, so the statement is True.`,
      `**B.** → False

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
\\frac{6400}{20}=320
$$

$$
320>300
$$

The index is $320$, which is not under $300$, so the statement is False.`,
      `**C.** → True

At thirty kilometres per hour:

$$
E(30)=\\frac{1}{20}\\cdot 30^{2}
$$

$$
30^{2}=900
$$

$$
E(30)=\\frac{900}{20}
$$

$$
\\frac{900}{20}=45
$$

At fifty:

$$
E(50)=\\frac{1}{20}\\cdot 50^{2}
$$

$$
50^{2}=2500
$$

$$
E(50)=\\frac{2500}{20}
$$

$$
\\frac{2500}{20}=125
$$

$$
E(50)-E(30)=125-45
$$

$$
125-45=80
$$

$$
80>45
$$

The extra already exceeds the index at thirty, so the statement is True.`,
      `**D.** → True

Eighty kilometres per hour is twice forty. A square law would need exponent $1$ to merely double the index; with exponent $2$ the scale factor is

$$
\\frac{E(80)}{E(40)}=2^{2}
$$

$$
2^{2}=4
$$

The two levels confirm that factor:

$$
E(40)=\\frac{1600}{20}
$$

$$
\\frac{1600}{20}=80
$$

$$
E(80)=\\frac{6400}{20}
$$

$$
\\frac{6400}{20}=320
$$

$$
\\frac{320}{80}=4
$$

Raising speed from $40$ to $80$ multiplies the index by $4$, so the statement is True.`,
      `**E.** → False

A square law is convex, so the same twenty-kilometre-per-hour step adds more at higher speed. The first rise is a difference of squares:

$$
50^{2}-30^{2}=2500-900
$$

$$
2500-900=1600
$$

$$
E(50)-E(30)=\\frac{1600}{20}
$$

$$
\\frac{1600}{20}=80
$$

The same increment starting at fifty:

$$
70^{2}-50^{2}=4900-2500
$$

$$
4900-2500=2400
$$

$$
E(70)-E(50)=\\frac{2400}{20}
$$

$$
\\frac{2400}{20}=120
$$

$$
80<120
$$

The lower-speed rise adds $80$ and the higher-speed rise adds $120$, so the first does not add more, so the statement is False.`,
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

**1.** $E(40)=80>70$ and $E(80)=320$, not under $300$. Raising speed from $40$ to $80$ multiplies $E$ by $4$.

**2.** Extra from $30$ to $50$ is $80>E(30)=45$.

**3.** A $20$ kilometre-per-hour rise from $30$ to $50$ adds $80$; from $50$ to $70$ it adds $120$.

**Answer.** $A=\\frac{1}{20}$ | $E(40)=80$ | $E(80)=320$ | second rise $120$`,
  },
  {
    id: `math-8-48`,
    case_id: `MATH 8.48`,
    title: `Geometrically Similar Silos: Steel Against Capacity`,
    context: `A supplier builds geometrically similar storage silos. The steel skin scales with the square of the height, $S(h)=a h^{2}$ square metres, while capacity scales with the cube, $V(h)=k h^{3}$ cubic metres. A $2$-metre silo uses $12$ square metres of steel and holds $8$ cubic metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $4$-metre silo holds more than $60$ cubic metres.`,
      `An $8$-metre silo needs more than $200$ square metres of steel.`,
      `Doubling height from $2$ m to $4$ m doubles steel use.`,
      `Two separate $2$-metre silos already use less steel than one $4$-metre silo.`,
      `The extra steel from $2$ m to $4$ m already exceeds the steel of one $2$-metre silo.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The two-metre silo holds eight cubic metres, so the cube law pins $k$:

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

Capacity is then $V=h^{3}$. A four-metre silo is twice as tall:

$$
V(4)=4^{3}
$$

$$
4^{3}=64
$$

$$
64>60
$$

The silo holds $64$ cubic metres, which is more than $60$, so the statement is True.`,
      `**B.** → False

The two-metre silo uses twelve square metres of steel, so

$$
a\\cdot 2^{2}=12
$$

$$
2^{2}=4
$$

$$
4a=12
$$

$$
a=3
$$

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
3\\cdot 64=192
$$

$$
192<200
$$

Steel use is $192$ square metres, which is not more than $200$, so the statement is False.`,
      `**C.** → False

Steel is a square of height. Doubling height would double steel only if the exponent were $1$. With exponent $2$ the scale factor is

$$
\\frac{S(2h)}{S(h)}=2^{2}
$$

$$
2^{2}=4
$$

From $2$ m to $4$ m, steel goes from $12$ to $48$, a factor of four, not two, so the statement is False.`,
      `**D.** → True

Two separate two-metre silos add two copies of the small skin. One four-metre silo is a geometric doubling of height, and the square law multiplies steel by four, not by two, so the single large skin costs more than two small ones. The two-metre skin is $12$ square metres:

$$
2\\cdot S(2)=2\\cdot 12
$$

$$
2\\cdot 12=24
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
3\\cdot 16=48
$$

$$
24<48
$$

The pair already uses less steel than the single four-metre silo, so the statement is True.`,
      `**E.** → True

Steel at two metres is $12$ and at four metres is $48$. The extra is the gap between those skins:

$$
S(4)-S(2)=48-12
$$

$$
48-12=36
$$

$$
36>12
$$

The extra already exceeds the steel of one two-metre silo, so the statement is True.`,
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

**1.** $V(4)=64>60$. $S(8)=192$, which is not more than $200$.

**2.** Doubling height from $2$ m to $4$ m multiplies steel by $2^{2}=4$, not by $2$.

**3.** Two $2$-metre silos use $24$ square metres; one $4$-metre silo uses $48$. Extra steel from $2$ m to $4$ m is $36$, which already exceeds $S(2)=12$.

**Answer.** $S=3h^{2}$ | $V=h^{3}$ | $V(4)=64$ | $S(8)=192$ | extra steel $36$`,
  },
  {
    id: `math-8-49`,
    case_id: `MATH 8.49`,
    title: `Inspection Hours Across Growing Shipment Volumes`,
    context: `Customs inspection time follows $T(n)=A n^{\\frac{1}{2}}$ hours for a consignment of $n>0$ shipments. Moving from a $4$-shipment consignment to a $36$-shipment consignment added exactly $16$ inspection hours. A staffing plan can supply at most $40$ inspection hours. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The $40$-hour ceiling is already binding below $110$ shipments.`,
      `A $49$-shipment consignment takes more than $30$ hours.`,
      `Quadrupling a $4$-shipment consignment multiplies inspection time by two.`,
      `The extra hours from $4$ to $36$ shipments already exceed the $4$-shipment time.`,
      `Staffing that just meets the $40$-hour ceiling still covers a $121$-shipment consignment.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The sixteen-hour jump recovers the coefficient. Four and thirty-six are perfect squares:

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

Inspection time is then $T=4 n^{\\frac{1}{2}}$. The forty-hour ceiling inverts that law:

$$
4 n^{\\frac{1}{2}}=40
$$

$$
n^{\\frac{1}{2}}=\\frac{40}{4}
$$

$$
\\frac{40}{4}=10
$$

$$
n=10^{2}
$$

$$
10^{2}=100
$$

$$
100<110
$$

Time still increases with $n$, so every larger consignment overshoots forty hours. The ceiling already binds at $100$ shipments, which is below $110$, so the statement is True.`,
      `**B.** → False

Inspection time is $T=4 n^{\\frac{1}{2}}$. At forty-nine shipments the square root is exact:

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
4\\cdot 7=28
$$

$$
28<30
$$

Inspection takes $28$ hours, which is not more than $30$, so the statement is False.`,
      `**C.** → True

The exponent is $\\frac{1}{2}$, so an input factor of $4$ multiplies inspection time by $4$ to that power:

$$
\\frac{T(4n)}{T(n)}=4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

The logged four-shipment consignment becomes sixteen shipments:

$$
T(4)=4\\cdot 4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
T(4)=4\\cdot 2
$$

$$
4\\cdot 2=8
$$

$$
T(16)=4\\cdot 16^{\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
T(16)=4\\cdot 4
$$

$$
4\\cdot 4=16
$$

$$
\\frac{16}{8}=2
$$

Quadrupling the consignment doubles inspection time, so the statement is True.`,
      `**D.** → True

At four shipments and at thirty-six shipments:

$$
T(4)=4\\cdot 2
$$

$$
4\\cdot 2=8
$$

$$
T(36)=4\\cdot 6
$$

$$
4\\cdot 6=24
$$

$$
T(36)-T(4)=24-8
$$

$$
24-8=16
$$

$$
16>8
$$

The extra hours already exceed the four-shipment time, so the statement is True.`,
      `**E.** → False

The forty-hour ceiling binds at $n=100$. A $121$-shipment consignment is larger:

$$
121^{\\frac{1}{2}}=11
$$

$$
T(121)=4\\cdot 11
$$

$$
4\\cdot 11=44
$$

$$
44>40
$$

The extra twenty-one shipments still add four hours, which the forty-hour plan cannot supply, so the statement is False.`,
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

**1.** The ceiling $T=40$ binds at $n=100$, already below $110$. $T(49)=28$, not more than $30$.

**2.** Quadrupling four shipments doubles inspection time. Extra from $4$ to $36$ is $16>T(4)=8$.

**3.** $T(121)=44$ overshoots the forty-hour plan.

**Answer.** $A=4$ | cap at $n=100$ | $T(49)=28$ | $T(121)=44$`,
  },
  {
    id: `math-8-50`,
    case_id: `MATH 8.50`,
    title: `Illuminance Down the Length of a Gallery`,
    context: `Illuminance from a gallery spotlight follows $I(d)=A d^{-2}$ lux, where $d>0$ is the distance in metres. A conservation log never states $A$: it records only that moving the meter from $2$ metres to $4$ metres cut the reading by $150$ lux. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the distance from $2$ metres to $4$ metres cuts illuminance to one quarter.`,
      `At $5$ metres the illuminance is already under $40$ lux.`,
      `At $3$ metres the reading is still above $90$ lux.`,
      `The illuminance drop from $2$ metres to $4$ metres already exceeds the remaining illuminance at $4$ metres.`,
      `The distance that yields $8$ lux already exceeds $10$ metres.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The logged drop recovers the coefficient. Inverse-square shape factors at two metres and four metres give

$$
A\\bigl(2^{-2}-4^{-2}\\bigr)=150
$$

$$
2^{2}=4
$$

$$
4^{2}=16
$$

$$
A\\bigl(\\frac{1}{4}-\\frac{1}{16}\\bigr)=150
$$

$$
A\\cdot\\frac{3}{16}=150
$$

$$
A=150\\cdot\\frac{16}{3}
$$

$$
A=800
$$

Illuminance is then $I=800 d^{-2}$. Doubling distance from two metres to four metres is an input factor of $2$ on the inverse-square law:

$$
\\frac{I(4)}{I(2)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The two logged stations confirm that factor:

$$
I(2)=\\frac{800}{4}
$$

$$
\\frac{800}{4}=200
$$

$$
I(4)=\\frac{800}{16}
$$

$$
\\frac{800}{16}=50
$$

$$
\\frac{50}{200}=\\frac{1}{4}
$$

Illuminance falls to one quarter, so the statement is True.`,
      `**B.** → True

Illuminance is $I=800 d^{-2}$. At five metres the inverse square is exact:

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
\\frac{800}{25}=32
$$

$$
32<40
$$

Illuminance is $32$ lux, which is already under $40$, so the statement is True.`,
      `**C.** → False

Illuminance is $I=800 d^{-2}$. At three metres the inverse square is

$$
I(3)=800\\cdot 3^{-2}
$$

$$
3^{2}=9
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

The reading is below $90$ lux, so the statement is False.`,
      `**D.** → True

The two logged stations evaluate as

$$
I(2)=\\frac{800}{4}
$$

$$
\\frac{800}{4}=200
$$

$$
I(4)=\\frac{800}{16}
$$

$$
\\frac{800}{16}=50
$$

The drop from two metres to four metres is

$$
I(2)-I(4)=200-50
$$

$$
200-50=150
$$

$$
150>50
$$

The drop already exceeds the remaining illuminance at four metres, so the statement is True.`,
      `**E.** → False

The distance that yields $8$ lux solves

$$
800 d^{-2}=8
$$

$$
d^{2}=\\frac{800}{8}
$$

$$
\\frac{800}{8}=100
$$

$$
d=\\sqrt{100}
$$

$$
\\sqrt{100}=10
$$

That distance is exactly $10$ metres, which does not exceed $10$, so the statement is False.`,
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

**1.** Doubling $d$ from $2$ to $4$ multiplies $I$ by $\\frac{1}{4}$. The drop $150$ already exceeds the remaining $I(4)=50$.

**2.** $I(5)=32<40$ and $I(3)=\\frac{800}{9}\\approx 88.89$, not above $90$.

**3.** $I=8$ inverts to $d=10$, which does not exceed $10$.

**Answer.** $A=800$ | $I(5)=32$ | $I(3)=\\frac{800}{9}$ | $d=10$ for $8$ lux`,
  },
  {
    id: `math-8-51`,
    case_id: `MATH 8.51`,
    title: `Audit Cost With Economies of Scale`,
    context: `An audit practice prices engagements by $C(n)=A n^{0.75}$, where $n>0$ is the number of accounts tested. The bill rises by exactly $1900$ when engagement size rises from $16$ to $81$ accounts. A client has a $2700$ cap, while a rival quotes $R(n)=50n$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $81$ accounts the bill is already above $2500$.`,
      `The extra bill from $16$ to $81$ accounts already exceeds the $16$-account bill.`,
      `A bill of $12500$ already requires more than $600$ accounts.`,
      `Doubling $16$ accounts doubles the practice bill.`,
      `At $81$ accounts the power-law bill is already cheaper than the rival's quote.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The recorded rise of $1900$ is not a level: it is the gap between two three-quarter powers. Sixteen and eighty-one are both fourth powers, so the shape factors are exact:

$$
16^{\\frac{3}{4}}=8
$$

$$
81^{\\frac{3}{4}}=27
$$

$$
A(27-8)=1900
$$

$$
19A=1900
$$

$$
A=100
$$

The practice bill is then $C(n)=100 n^{\\frac{3}{4}}$. At eighty-one accounts:

$$
C(81)=100\\cdot 27
$$

$$
100\\cdot 27=2700
$$

$$
2700>2500
$$

The bill is $2700$, already above $2500$, so the statement is True.`,
      `**B.** → True

The sixteen-account bill is $C(16)=800$, and the logged rise to eighty-one accounts is already $1900$:

$$
1900>800
$$

The add-on already exceeds the sixteen-account bill, so the statement is True.`,
      `**C.** → True

A bill of $12500$ inverts $C(n)=100 n^{\\frac{3}{4}}$:

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
n=5^{4}
$$

$$
5^{4}=625
$$

$$
625>600
$$

Six hundred and twenty-five accounts already exceeds $600$, so the statement is True.`,
      `**D.** → False

Doubling sixteen accounts would double the bill only if the exponent were $1$. Three quarters sits below one, so the scale factor is

$$
\\frac{C(32)}{C(16)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

$$
1.682\\neq 2
$$

The bill rises, but not in lockstep with the account count, so the statement is False.`,
      `**E.** → True

At eighty-one accounts the practice bills $C(81)=2700$ while the rival quotes

$$
R(81)=50\\cdot 81
$$

$$
50\\cdot 81=4050
$$

$$
2700<4050
$$

The power-law bill already undercuts the rival's $4050$, so the statement is True.`,
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

**2.** Named bills and the extra:

$$C(16)=800 \\qquad C(81)=2700 \\qquad C(81)-C(16)=1900>800$$

**3.** Target bill and doubling:

$$C=12500 \\Rightarrow n=625 \\qquad \\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}\\approx 1.68$$

**4.** Rival at $81$:

$$R(81)=4050 \\qquad 2700<4050$$

**Answer.** $A=100$ | $C(16)=800$ | $C(81)=2700$ | extra $1900$ | $n=625$ for $C=12500$ | $R(81)=4050$`,
  },
  {
    id: `math-8-52`,
    case_id: `MATH 8.52`,
    title: `Airborne Particle Concentration Downwind`,
    context: `Downwind particle concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre, where $x>0$ is distance from the stack in metres. A monitor at $4$ metres reads exactly $43.75$ more than a monitor at $16$ metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $100$ metres the concentration is already below $0.5$ microgram per cubic metre.`,
      `Measuring distance in kilometres makes the new coefficient larger than $0.01$.`,
      `At $4$ metres the nearer monitor still reads under $45$ micrograms per cubic metre.`,
      `The drop from $4$ metres to $16$ metres already exceeds the remaining reading at $16$ metres.`,
      `The distance that yields $0.4$ already exceeds $80$ metres.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The $43.75$ gap is a difference of two negative three-halves powers. Four metres and sixteen metres are squares, so the shape factors are exact:

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
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
7A=2800
$$

$$
A=400
$$

Concentration is then $c(x)=400 x^{-\\frac{3}{2}}$. At one hundred metres:

$$
100^{\\frac{3}{2}}=1000
$$

$$
c(100)=\\frac{400}{1000}
$$

$$
\\frac{400}{1000}=0.4
$$

$$
0.4<0.5
$$

The reading is $0.4$, already below $0.5$, so the statement is True.`,
      `**B.** → True

A change of input unit never moves the exponent. It only rescales the coefficient, because a power pushes a constant factor through that same exponent. Measuring distance in kilometres means $x=1000d$, so each metre-reading is a thousand times the kilometre-reading. The new coefficient is the old $400$ divided by $1000$ to the power $\\frac{3}{2}$:

$$
c=400(1000d)^{-\\frac{3}{2}}
$$

$$
c=400\\cdot 1000^{-\\frac{3}{2}} d^{-\\frac{3}{2}}
$$

$$
1000^{\\frac{3}{2}}=10^{4.5}
$$

$$
A'=\\frac{400}{10^{4.5}}
$$

$$
A'\\approx 0.01265
$$

$$
0.01265>0.01
$$

The kilometre-scale coefficient is about $0.01265$, already larger than $0.01$, so the statement is True.`,
      `**C.** → False

At four metres the nearer monitor reads

$$
c(4)=\\frac{400}{8}
$$

$$
\\frac{400}{8}=50
$$

$$
50>45
$$

The reading is $50$, which is not under $45$, so the statement is False.`,
      `**D.** → True

The logged $43.75$ is already the drop from four metres to sixteen metres. What remains at sixteen metres is

$$
c(16)=\\frac{400}{64}
$$

$$
\\frac{400}{64}=6.25
$$

$$
43.75>6.25
$$

The drop already exceeds the leftover reading of $6.25$, so the statement is True.`,
      `**E.** → True

A reading of $0.4$ inverts $c(x)=400 x^{-\\frac{3}{2}}$:

$$
400 x^{-\\frac{3}{2}}=0.4
$$

$$
x^{\\frac{3}{2}}=\\frac{400}{0.4}
$$

$$
\\frac{400}{0.4}=1000
$$

$$
x=1000^{\\frac{2}{3}}
$$

$$
1000^{\\frac{2}{3}}=100
$$

$$
100>80
$$

The distance is $100$ metres, already past $80$, so the statement is True.`,
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

**3.** Drop versus remaining:

$$c(4)-c(16)=43.75>6.25$$

**4.** Kilometre-scale coefficient:

$$A'=400\\cdot 1000^{-\\frac{3}{2}}=\\frac{400}{10^{4.5}}\\approx 0.01265>0.01$$

**Answer.** $A=400$ | $c(4)=50$ | $c(16)=6.25$ | $c(100)=0.4$ | $A'\\approx 0.01265$`,
  },
  {
    id: `math-8-53`,
    case_id: `MATH 8.53`,
    title: `Storm Surge Feeding a Cubic Loss Index`,
    context: `A reinsurer models coastal losses in two stages. Storm surge height is $s(w)=0.5 w^{0.5}$ metres for a wind speed of $w>0$, and the loss index rises with the cube of surge height, $L(s)=32 s^{3}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At a wind speed of $64$ the loss index is already above $2000$.`,
      `A loss of $1000$ already requires a wind speed above $50$.`,
      `Doubling the wind speed doubles the loss index.`,
      `At wind speed $16$ the loss index is already above $250$.`,
      `The extra loss from wind $16$ to $64$ already exceeds $1700$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Composing two power laws multiplies the exponents and raises the inner coefficient to the outer power. Surge is $s(w)=0.5 w^{\\frac{1}{2}}$ and loss is $L(s)=32 s^{3}$, so

$$
L(w)=32\\bigl(0.5 w^{\\frac{1}{2}}\\bigr)^{3}
$$

$$
32\\cdot 0.5^{3}=32\\cdot\\frac{1}{8}
$$

$$
32\\cdot\\frac{1}{8}=4
$$

$$
\\frac{1}{2}\\cdot 3=\\frac{3}{2}
$$

The composed law is $L(w)=4 w^{\\frac{3}{2}}$. At wind speed $64$:

$$
64^{\\frac{1}{2}}=8
$$

$$
64^{\\frac{3}{2}}=8^{3}
$$

$$
8^{3}=512
$$

$$
L(64)=4\\cdot 512
$$

$$
4\\cdot 512=2048
$$

$$
2048>2000
$$

The loss index is $2048$, already above $2000$, so the statement is True.`,
      `**B.** → False

A loss of $1000$ inverts $L(w)=4 w^{\\frac{3}{2}}$:

$$
4 w^{\\frac{3}{2}}=1000
$$

$$
w^{\\frac{3}{2}}=250
$$

$$
w=250^{\\frac{2}{3}}
$$

$$
w\\approx 39.7
$$

$$
39.7<50
$$

The required wind is about $39.7$, which is not above $50$, so the statement is False.`,
      `**C.** → False

Doubling the wind would double the loss only if the composed exponent were $1$. With exponent $\\frac{3}{2}$ the scale factor is

$$
\\frac{L(2w)}{L(w)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
2\\sqrt{2}\\approx 2.83
$$

$$
2.83\\neq 2
$$

The loss more than doubles, so the statement is False.`,
      `**D.** → True

At wind speed $16$:

$$
16^{\\frac{3}{2}}=64
$$

$$
L(16)=4\\cdot 64
$$

$$
4\\cdot 64=256
$$

$$
256>250
$$

The loss index is $256$, already above $250$, so the statement is True.`,
      `**E.** → True

The extra loss from wind $16$ to $64$ is a difference of two named levels:

$$
L(64)=2048
$$

$$
L(16)=256
$$

$$
2048-256=1792
$$

$$
1792>1700
$$

The extra of $1792$ already exceeds $1700$, so the statement is True.`,
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

**1.** Named winds:

$$L(64)=2048>2000 \\qquad L(16)=256>250$$

**2.** Invert a loss of $1000$:

$$w=250^{\\frac{2}{3}}\\approx 39.7$$

which is not above $50$. Doubling wind multiplies loss by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$.

**3.** Extra from $16$ to $64$:

$$2048-256=1792>1700$$

**Answer.** $L(w)=4w^{1.5}$ | $L(64)=2048$ | $L(16)=256$ | $L=1000$ at $w\\approx 39.7$ | extra $1792$`,
  },
  {
    id: `math-8-54`,
    case_id: `MATH 8.54`,
    title: `Market Impact of a Block Trade`,
    context: `A broker models price impact as $I(v)=A v^{0.5}$ basis points, where $v>0$ is order size as a fraction of average daily volume. Increasing an order from $0.04$ ADV to $0.09$ ADV adds exactly $6$ basis points of impact. The scaled impact charge is $vI(v)$, while a notional fee is $F(v)=30v$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $0.16$ ADV, impact is already above $20$ basis points.`,
      `At $0.25$ ADV the scaled charge is already above $10$.`,
      `Once the scaled charge overtakes the notional fee, it stays larger at every bigger order.`,
      `Doubling order size from $0.04$ to $0.08$ ADV doubles impact.`,
      `Two orders of $0.04$ ADV together already produce more impact than one order of $0.16$ ADV.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded extra of $6$ basis points is a difference of two square roots:

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

Impact is then $I(v)=60\\sqrt{v}$. At $0.16$ ADV:

$$
\\sqrt{0.16}=0.4
$$

$$
I(0.16)=60\\cdot 0.4
$$

$$
60\\cdot 0.4=24
$$

$$
24>20
$$

Impact is $24$ basis points, already above $20$, so the statement is True.`,
      `**B.** → False

The scaled charge is $60 v^{\\frac{3}{2}}$. At a quarter of ADV:

$$
\\left(\\frac{1}{4}\\right)^{\\frac{3}{2}}=\\frac{1}{8}
$$

$$
60\\cdot\\frac{1}{8}=7.5
$$

$$
7.5<10
$$

The scaled charge is $7.5$, which is not above $10$, so the statement is False.`,
      `**C.** → True

The scaled charge $60 v^{\\frac{3}{2}}$ and the notional fee $30v$ are two different powers of order size. Their ratio is a positive power of $v$, so it can cross $1$ only once, and after that crossing the steeper curve stays ahead. They meet when

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
v=\\frac{1}{4}
$$

For every $v>\\frac{1}{4}$ one has $\\sqrt{v}>\\frac{1}{2}$, so $60 v^{\\frac{3}{2}}>30v$. Once the scaled charge overtakes the fee it stays larger, so the statement is True.`,
      `**D.** → False

Doubling order size would double impact only if the exponent were $1$. With a square-root law the scale factor is

$$
\\frac{I(2v)}{I(v)}=2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.414
$$

$$
I(0.04)=12
$$

$$
I(0.08)=12\\sqrt{2}
$$

$$
12\\sqrt{2}\\approx 16.97
$$

$$
2\\cdot 12=24
$$

$$
16.97\\neq 24
$$

Impact rises by a factor $\\sqrt{2}$, not by $2$, so the statement is False.`,
      `**E.** → False

Two separate orders of $0.04$ ADV add

$$
2I(0.04)=2\\cdot 12
$$

$$
2\\cdot 12=24
$$

One order of $0.16$ ADV is $I(0.16)=24$. The pair matches the single larger order; it does not produce more impact, so the statement is False.`,
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

**1.** Named impacts:

$$I(0.04)=12 \\qquad I(0.08)=12\\sqrt{2}\\approx 16.97 \\qquad I(0.16)=24$$

**2.** Scaled charge versus fee:

$$60 v^{\\frac{3}{2}}=30v \\Rightarrow v=0.25 \\qquad 60\\cdot(0.25)^{\\frac{3}{2}}=7.5$$

**3.** Two small orders versus one large:

$$2I(0.04)=24=I(0.16)$$

**Answer.** $A=60$ | $I(v)=60\\sqrt{v}$ | $I(0.16)=24$ | $I(0.08)\\approx 16.97$ | break-even $v=0.25$ | scaled $(0.25)=7.5$`,
  },
  {
    id: `math-8-55`,
    case_id: `MATH 8.55`,
    title: `Allometric Energy Use Across Livestock Weights`,
    context: `Daily energy use follows $E(m)=A m^{\\frac{2}{3}}$ units for body mass $m>0$ kilograms. A $64$ kg animal uses exactly $70$ more energy units per day than a $27$ kg animal. A herd's total use is the sum of its animals' individual uses. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $64$ kg animal already uses more than $150$ energy units a day.`,
      `A $216$ kg animal still uses under $400$ energy units a day.`,
      `Doubling mass from $27$ kg to $54$ kg doubles energy use.`,
      `Combining two $27$ kg animals into one $54$ kg animal leaves total energy unchanged.`,
      `Two $27$ kg animals together already use more than one $64$ kg animal.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The recorded extra of $70$ energy units is a difference of two two-thirds powers. Both masses are cubes, so the shape factors are exact:

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
7A=70
$$

$$
A=10
$$

Daily use is then $E(m)=10 m^{\\frac{2}{3}}$. At $64$ kilograms:

$$
E(64)=10\\cdot 16
$$

$$
10\\cdot 16=160
$$

$$
160>150
$$

The animal uses $160$ energy units a day, already more than $150$, so the statement is True.`,
      `**B.** → True

At $216$ kilograms the mass is $6^{3}$, so the power is $36$:

$$
E(216)=10\\cdot 36
$$

$$
10\\cdot 36=360
$$

$$
360<400
$$

Daily use is $360$, still under $400$, so the statement is True.`,
      `**C.** → False

Doubling mass from $27$ kg to $54$ kg would double energy only if the exponent were $1$. Two thirds sits below one, so the scale factor is

$$
\\frac{E(54)}{E(27)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

$$
E(27)=90
$$

$$
E(54)\\approx 142.7
$$

$$
2\\cdot 90=180
$$

$$
142.7\\neq 180
$$

Energy rises, but not in lockstep with mass, so the statement is False.`,
      `**D.** → False

Herd totals add animal by animal. Combining two $27$ kg animals into one $54$ kg animal would leave total energy unchanged only if $E(2m)=2E(m)$, which is the linear case $r=1$. Here the exponent is $\\frac{2}{3}$, so one larger animal uses less than the two smaller ones together: a concave power under-adds when mass is pooled. Two $27$ kg animals use

$$
2E(27)=2\\cdot 90
$$

$$
2\\cdot 90=180
$$

while one $54$ kg animal uses $E(54)\\approx 142.7$. Because $142.7\\neq 180$, merging them cuts total energy use, so the statement is False.`,
      `**E.** → True

Two $27$ kg animals already use $180$ energy units. One $64$ kg animal uses $E(64)=160$:

$$
180>160
$$

The pair already uses more than the single $64$ kg animal, so the statement is True.`,
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

$$E(27)=90 \\qquad E(64)=160>150 \\qquad E(216)=360<400$$

**2.** Doubling $27$ kg to $54$ kg multiplies energy by $2^{\\frac{2}{3}}\\approx 1.59$, not by $2$. One $54$ kg animal uses about $142.7$, not $180$.

**3.** Two $27$ kg animals use $180>160=E(64)$.

**Answer.** $A=10$ | $E(64)=160$ | $E(216)=360$ | $E(54)\\approx 142.7$ | two $27$ kg animals $180$`,
  },
  {
    id: `math-8-56`,
    case_id: `MATH 8.56`,
    title: `Retail Catchment Under a Distance-Decay Law`,
    context: `Weekly footfall at a retail park from a residential zone follows $f(d)=A d^{-1.5}$ visitors, where $d>0$ is the driving distance in kilometres. The planning file omits the coefficient: it records only that a zone $4$ kilometres away supplies $350$ more visitors a week than a zone $16$ kilometres away. A zone counts as core catchment when it supplies at least $100$ visitors a week. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A zone $9$ kilometres away still supplies more than $100$ visitors a week.`,
      `Footfall follows an inverse-square law of driving distance.`,
      `The drop from $4$ km to $16$ km already exceeds the remaining footfall at $16$ km.`,
      `Core catchment already ends before $11$ kilometres.`,
      `An extra kilometre of drive cuts more visitors far from the park than near it.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The recorded extra of $350$ visitors is a difference of two negative three-halves powers:

$$
4^{\\frac{3}{2}}=8
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
\\frac{A}{8}-\\frac{A}{64}=350
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

Footfall is then $f(d)=3200 d^{-\\frac{3}{2}}$. At nine kilometres:

$$
9^{\\frac{3}{2}}=27
$$

$$
f(9)=\\frac{3200}{27}
$$

$$
\\frac{3200}{27}\\approx 118.5
$$

$$
118.5>100
$$

The zone still supplies about $118.5$ visitors, already above $100$, so the statement is True.`,
      `**B.** → False

An inverse-square law would carry exponent $-2$. The recovered exponent is $-\\frac{3}{2}$, which is not $-2$. Quadrupling distance then cuts footfall by

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

whereas inverse-square decay would cut it by $\\frac{1}{16}$. The given decay is three-halves, not two, so the statement is False.`,
      `**C.** → True

The drop from four kilometres to sixteen kilometres is the logged $350$. What remains at sixteen kilometres is

$$
f(16)=\\frac{3200}{64}
$$

$$
\\frac{3200}{64}=50
$$

$$
350>50
$$

The drop already exceeds the leftover footfall of $50$, so the statement is True.`,
      `**D.** → True

Core catchment ends where footfall hits $100$:

$$
3200 d^{-\\frac{3}{2}}=100
$$

$$
d^{\\frac{3}{2}}=32
$$

$$
d=32^{\\frac{2}{3}}
$$

$$
32^{\\frac{2}{3}}=8\\cdot 2^{\\frac{1}{3}}
$$

$$
2^{\\frac{1}{3}}\\approx 1.260
$$

$$
d\\approx 10.08
$$

$$
10.08<11
$$

The boundary sits near $10.08$ kilometres, already before $11$, so the statement is True.`,
      `**E.** → False

An extra kilometre is the magnitude of the slope. Because the exponent $-\\frac{3}{2}$ is more negative than $-1$, that slope itself falls as distance grows: the same extra kilometre removes more visitors near the park, where the curve is steep, than far out, where it has already flattened. Differentiating:

$$
f'(d)=-4800 d^{-\\frac{5}{2}}
$$

$$
\\lvert f'(4)\\rvert=\\frac{4800}{4^{\\frac{5}{2}}}
$$

$$
4^{\\frac{5}{2}}=32
$$

$$
\\lvert f'(4)\\rvert=150
$$

$$
\\lvert f'(16)\\rvert=\\frac{4800}{16^{\\frac{5}{2}}}
$$

$$
16^{\\frac{5}{2}}=1024
$$

$$
\\lvert f'(16)\\rvert\\approx 4.69
$$

$$
4.69<150
$$

An extra kilometre cuts more visitors near the park than far from it, so the statement is False.`,
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

$$f(4)=400 \\qquad f(9)=\\frac{3200}{27}\\approx 118.5 \\qquad f(16)=50$$

**2.** Drop versus remaining:

$$f(4)-f(16)=350>50$$

**3.** Core-catchment boundary:

$$3200 d^{-1.5}=100 \\Rightarrow d=32^{\\frac{2}{3}}\\approx 10.08<11$$

**4.** Slope magnitude falls as $d$ rises. The exponent is $-\\frac{3}{2}$, not $-2$.

**Answer.** $A=3200$ | $f(4)=400$ | $f(9)\\approx 118.5$ | $f(16)=50$ | core out to $d\\approx 10.08$ km`,
  },
  {
    id: `math-8-57`,
    case_id: `MATH 8.57`,
    title: `Rooftop Solar Output Across Two Installed Arrays`,
    context: `Daily output from a rooftop solar installation follows $y(a)=A a^{r}$ kilowatt-hours, where $a>0$ is the installed panel area in square metres. Two arrays are in service: a $100$ m² array delivers $240$ kWh a day, and a $225$ m² array delivers $360$ kWh. A proposal would expand the second array to $450$ m². Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Output per square metre falls from $100$ m² to $225$ m² by more than $0.5$ kWh.`,
      `Expanding the $225$ m² array to $450$ m² would push output above $520$ kWh.`,
      `A $400$ m² array already delivers more than $470$ kWh.`,
      `To double the $240$ kWh output, the $100$ m² array must more than double in area.`,
      `Two $100$ m² arrays together already beat one $400$ m² array.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The two arrays give the ratio

$$
\\left(\\frac{225}{100}\\right)^{r}=\\frac{360}{240}
$$

$$
2.25^{r}=1.5
$$

$$
2.25^{\\frac{1}{2}}=1.5
$$

so $r=\\frac{1}{2}$. Then $A\\cdot 10=240$ pins $A=24$, and output is $y(a)=24\\sqrt{a}$. Output per square metre at the two sizes:

$$
\\frac{y(100)}{100}=\\frac{240}{100}
$$

$$
\\frac{240}{100}=2.4
$$

$$
\\frac{y(225)}{225}=\\frac{360}{225}
$$

$$
\\frac{360}{225}=1.6
$$

$$
2.4-1.6=0.8
$$

$$
0.8>0.5
$$

The average falls by $0.8$ kWh per square metre, already more than $0.5$, so the statement is True.`,
      `**B.** → False

Doubling $225$ square metres to $450$ multiplies output by $\\sqrt{2}$, not by $2$, because the exponent is $\\frac{1}{2}$:

$$
y(450)=360\\sqrt{2}
$$

$$
360\\sqrt{2}\\approx 509.1
$$

$$
509.1<520
$$

The proposal lands near $509.1$ kWh, which is not above $520$, so the statement is False.`,
      `**C.** → True

At four hundred square metres:

$$
\\sqrt{400}=20
$$

$$
y(400)=24\\cdot 20
$$

$$
24\\cdot 20=480
$$

$$
480>470
$$

The array delivers $480$ kWh, already more than $470$, so the statement is True.`,
      `**D.** → True

Doubling the recorded $240$ kWh would double area only if the exponent were $1$. With a square-root law, output doubles when area quadruples:

$$
24\\sqrt{a}=480
$$

$$
\\sqrt{a}=20
$$

$$
a=400
$$

$$
\\frac{400}{100}=4
$$

$$
4>2
$$

Area must quadruple, which is more than a doubling, so the statement is True.`,
      `**E.** → False

Two separate $100$ m² arrays add

$$
2y(100)=2\\cdot 240
$$

$$
2\\cdot 240=480
$$

One $400$ m² array delivers $y(400)=480$. The pair matches the single larger array; it does not beat it, so the statement is False.`,
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

$$r=\\frac{1}{2} \\qquad A=24 \\qquad y(a)=24\\sqrt{a}$$

**2.** Named outputs:

$$y(400)=480 \\qquad y(450)=360\\sqrt{2}\\approx 509.1<520$$

**3.** Average product:

$$\\frac{y(100)}{100}=2.4 \\qquad \\frac{y(225)}{225}=1.6 \\qquad 2.4-1.6=0.8>0.5$$

**4.** Doubling $240$ kWh needs $a=400$. Two $100$ m² arrays:

$$2y(100)=480=y(400)$$

**Answer.** $r=\\frac{1}{2}$ | $A=24$ | $y(400)=480$ | $y(450)\\approx 509.1$ | AP drop $0.8$`,
  },
  {
    id: `math-8-58`,
    case_id: `MATH 8.58`,
    title: `Battery Cell Costs Down a Learning Curve`,
    context: `Unit cost for battery cells follows $c(N)=A N^{b}$ euros, where $N>0$ is cumulative output in thousands of cells. Two milestones are recorded: at $100$ thousand cells the unit cost was $80$, and at $400$ thousand it was $40$. Cumulative spend is unit cost multiplied by volume. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling cumulative volume from $100$ to $200$ halves the unit cost.`,
      `At $1600$ thousand cells the unit cost is already below $25$ euros.`,
      `At $25$ thousand cells the unit cost is still above $150$ euros.`,
      `Cumulative spend at $400$ thousand already exceeds twice the spend at $100$ thousand.`,
      `Quadrupling from $100$ to $400$ thousand cells cuts unit cost by more than $35$ euros.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

The two milestones give the ratio

$$
\\left(\\frac{400}{100}\\right)^{b}=\\frac{40}{80}
$$

$$
4^{b}=\\frac{1}{2}
$$

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

so $b=-\\frac{1}{2}$. Then $A\\cdot 100^{-\\frac{1}{2}}=80$ pins $A=800$, and unit cost is $c(N)=800 N^{-\\frac{1}{2}}$. Doubling $100$ thousand cells would halve cost only if the exponent were $-1$. With exponent $-\\frac{1}{2}$ the scale factor is

$$
\\frac{c(200)}{c(100)}=2^{-\\frac{1}{2}}
$$

$$
2^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{2}}
$$

$$
c(200)=40\\sqrt{2}
$$

$$
40\\sqrt{2}\\approx 56.57
$$

$$
\\frac{80}{2}=40
$$

$$
56.57\\neq 40
$$

A single doubling multiplies cost by $\\frac{1}{\\sqrt{2}}$, not by $\\frac{1}{2}$, so the statement is False.`,
      `**B.** → True

At $1600$ thousand cells:

$$
\\sqrt{1600}=40
$$

$$
c(1600)=\\frac{800}{40}
$$

$$
\\frac{800}{40}=20
$$

$$
20<25
$$

Unit cost is $20$ euros, already below $25$, so the statement is True.`,
      `**C.** → True

At $25$ thousand cells:

$$
\\sqrt{25}=5
$$

$$
c(25)=\\frac{800}{5}
$$

$$
\\frac{800}{5}=160
$$

$$
160>150
$$

Unit cost is $160$ euros, still above $150$, so the statement is True.`,
      `**D.** → False

Cumulative spend is unit cost times volume, which raises the exponent by one:

$$
S(N)=800 N^{\\frac{1}{2}}
$$

Quadrupling volume from $100$ to $400$ therefore doubles spend, because $\\sqrt{4}=2$:

$$
S(100)=800\\cdot 10
$$

$$
800\\cdot 10=8000
$$

$$
S(400)=800\\cdot 20
$$

$$
800\\cdot 20=16000
$$

$$
2\\cdot 8000=16000
$$

Spend at $400$ thousand equals twice the spend at $100$ thousand; it does not exceed twice, so the statement is False.`,
      `**E.** → True

Quadrupling from $100$ to $400$ thousand cells cuts unit cost by

$$
80-40=40
$$

$$
40>35
$$

The cut is $40$ euros, already more than $35$, so the statement is True.`,
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

**2.** Named costs:

$$c(25)=160 \\qquad c(200)=40\\sqrt{2}\\approx 56.57 \\qquad c(1600)=20$$

**3.** Quadrupling cut and spend:

$$c(100)-c(400)=40>35 \\qquad S(100)=8000 \\qquad S(400)=16000=2S(100)$$

**Answer.** $b=-\\frac{1}{2}$ | $A=800$ | $c(1600)=20$ | $c(25)=160$ | $S(400)=2S(100)$`,
  },
  {
    id: `math-8-59`,
    case_id: `MATH 8.59`,
    title: `Sediment Transport Driven by Channel Discharge`,
    context: `Sediment transport in a channel follows $S(v)=A v^{3}$ tonnes per day, where $v>0$ is flow velocity, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity itself depends on discharge through $v(q)=\\frac{q^{0.5}}{2}$. The channel's stability limit is $5000$ tonnes per day. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A discharge of $400$ already pushes transport above $4500$ tonnes per day.`,
      `At discharge $64$, transport is still under $300$ tonnes per day.`,
      `Doubling the discharge more than doubles sediment transport.`,
      `Doubling the flow velocity doubles sediment transport.`,
      `The extra transport from discharge $64$ to $400$ already exceeds $4500$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The gauged run $S(3)=135$ pins the transport coefficient:

$$
A\\cdot 3^{3}=135
$$

$$
27A=135
$$

$$
A=5
$$

Velocity is $v(q)=\\frac{q^{\\frac{1}{2}}}{2}$, so composing cubes the inner stage:

$$
S(q)=5\\left(\\frac{q^{\\frac{1}{2}}}{2}\\right)^{3}
$$

$$
S(q)=\\frac{5}{8} q^{\\frac{3}{2}}
$$

At discharge $400$:

$$
400^{\\frac{1}{2}}=20
$$

$$
400^{\\frac{3}{2}}=20^{3}
$$

$$
20^{3}=8000
$$

$$
S(400)=\\frac{5}{8}\\cdot 8000
$$

$$
\\frac{5}{8}\\cdot 8000=5000
$$

$$
5000>4500
$$

Transport is $5000$ tonnes per day, already above $4500$, so the statement is True.`,
      `**B.** → False

At discharge $64$:

$$
64^{\\frac{1}{2}}=8
$$

$$
64^{\\frac{3}{2}}=8^{3}
$$

$$
8^{3}=512
$$

$$
S(64)=\\frac{5}{8}\\cdot 512
$$

$$
\\frac{5}{8}\\cdot 512=320
$$

$$
320>300
$$

Transport is $320$ tonnes per day, which is not under $300$, so the statement is False.`,
      `**C.** → True

Doubling discharge would double transport only if the composed exponent were $1$. With exponent $\\frac{3}{2}$ the scale factor is

$$
\\frac{S(2q)}{S(q)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
2\\sqrt{2}\\approx 2.83
$$

$$
2.83>2
$$

Doubling discharge more than doubles sediment transport, so the statement is True.`,
      `**D.** → False

Doubling velocity acts on the transport stage alone. That exponent is $3$, so the scale factor would be $2$ only if the exponent were $1$:

$$
\\frac{S(2v)}{S(v)}=2^{3}
$$

$$
2^{3}=8
$$

$$
8\\neq 2
$$

Doubling velocity multiplies sediment transport by eight, not by two, so the statement is False.`,
      `**E.** → True

The extra transport from discharge $64$ to $400$ is a difference of two named levels:

$$
S(400)=5000
$$

$$
S(64)=320
$$

$$
5000-320=4680
$$

$$
4680>4500
$$

The extra of $4680$ already exceeds $4500$, so the statement is True.`,
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

**1.** Named discharges:

$$S(400)=5000>4500 \\qquad S(64)=320$$

which is not under $300$.

**2.** The two doublings:

$$\\frac{S(2q)}{S(q)}=2^{1.5}\\approx 2.83 \\qquad \\frac{S(2v)}{S(v)}=8$$

**3.** Extra from $64$ to $400$:

$$5000-320=4680>4500$$

**Answer.** $A=5$ | $S(q)=0.625q^{1.5}$ | $S(400)=5000$ | $S(64)=320$ | extra $4680$`,
  },
  {
    id: `math-8-60`,
    case_id: `MATH 8.60`,
    title: `Highly Elastic Demand Under a Price Indexation`,
    context: `A commodity trader faces demand $q(p)=A p^{-3}$ units at a price $p>0$, and a price of $2$ clears $500$ units. A proposed indexation would raise the price by $10\\%$ across the board, and the trader wants the effect on both volume and revenue $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At a price of $2.50$, revenue is already below $700$.`,
      `A price rise of $10\\%$ from $2$ cuts quantity by more than $20\\%$.`,
      `Doubling the price from $2$ to $4$ halves revenue.`,
      `At price $2$, revenue already exceeds $900$.`,
      `The revenue drop from $2$ to $2.50$ already exceeds $300$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The observed pair $q(2)=500$ pins the coefficient:

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

Demand is then $q(p)=4000 p^{-3}$, so revenue is $R(p)=4000 p^{-2}$. At a price of $2.50=\\frac{5}{2}$:

$$
\\left(\\frac{5}{2}\\right)^{2}=\\frac{25}{4}
$$

$$
R(2.50)=4000\\cdot\\frac{4}{25}
$$

$$
4000\\cdot\\frac{4}{25}=640
$$

$$
640<700
$$

Revenue is $640$, already below $700$, so the statement is True.`,
      `**B.** → True

A $10\\%$ rise from price $2$ lands at $2.2$. Quantity is a cube in the denominator, so the relative cut is larger than $10\\%$, but a linear elasticity shortcut of $3\\cdot 10\\%=30\\%$ is not the exact power. The recorded $500$ units must be compared with the new level:

$$
2.2^{3}=10.648
$$

$$
q(2.2)=\\frac{4000}{10.648}
$$

$$
q(2.2)\\approx 375.6
$$

$$
500-375.6=124.4
$$

$$
\\frac{124.4}{500}\\approx 0.249
$$

The cut is about $25\\%$ from $500$, already more than $20\\%$, so the statement is True.`,
      `**C.** → False

Doubling the price from $2$ to $4$ would halve revenue only if the revenue exponent were $-1$. Revenue is $R(p)=4000 p^{-2}$, so the scale factor is

$$
\\frac{R(4)}{R(2)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
R(2)=1000
$$

$$
R(4)=\\frac{4000}{16}
$$

$$
\\frac{4000}{16}=250
$$

$$
\\frac{1000}{2}=500
$$

$$
250\\neq 500
$$

Revenue falls to a quarter of $1000$, not to a half, so the statement is False.`,
      `**D.** → True

At price $2$:

$$
R(2)=4000\\cdot 2^{-2}
$$

$$
2^{2}=4
$$

$$
R(2)=\\frac{4000}{4}
$$

$$
\\frac{4000}{4}=1000
$$

$$
1000>900
$$

Revenue is $1000$, already above $900$, so the statement is True.`,
      `**E.** → True

The revenue drop from $2$ to $2.50$ is a difference of two named levels:

$$
R(2)=1000
$$

$$
R(2.50)=640
$$

$$
1000-640=360
$$

$$
360>300
$$

The drop of $360$ already exceeds $300$, so the statement is True.`,
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

**1.** Coefficient and named revenues:

$$A=4000 \\qquad R(2)=1000>900 \\qquad R(2.5)=640<700$$

**2.** A $10\\%$ rise from $2$ is $p=2.2$:

$$q(2.2)=\\frac{4000}{2.2^{3}}\\approx 375.6$$

a cut of about $25\\%$ from $500$, already more than $20\\%$.

**3.** Doubling price from $2$ to $4$ gives $R(4)=250$, a quarter of $1000$, not a half. The drop from $2$ to $2.50$ is $360>300$.

**Answer.** $A=4000$ | $R(2)=1000$ | $R(2.5)=640$ | $q(2.2)\\approx 375.6$ | $R(4)=250$`,
  },
  {
    id: `math-8-61`,
    case_id: `MATH 8.61`,
    title: `Weld Strength Recovered From Two Spot Checks`,
    context: `A production weld's tensile strength follows $S(p)=A p^{k}$ newtons, where $p>0$ is the welding current in amperes. Neither constant is on the calibration sheet: the sheet only records that a $4$ A setting produced $40$ N of strength and a $9$ A setting produced $135$ N. The line rejects any weld below $400$ N. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $16$ A the weld is already stronger than $300$ N.`,
      `An extra ampere adds more strength at $4$ A than it does at $9$ A.`,
      `The extra strength from $4$ A to $9$ A already exceeds the $4$ A reading.`,
      `The smallest current that clears the $400$ N reject line is below $18$ A.`,
      `Doubling current from $4$ A to $8$ A multiplies strength by more than $2.5$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The sheet never prints the constants. Two spot checks are enough, because their ratio cancels the coefficient:

$$
\\frac{S(9)}{S(4)}=\\frac{135}{40}
$$

$$
\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}
$$

$$
\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}
$$

Because $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$ and $\\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3}$,

$$
\\left(\\frac{3}{2}\\right)^{3}=\\left(\\frac{3}{2}\\right)^{2k}
$$

$$
2k=3
$$

$$
k=\\frac{3}{2}
$$

The $4$ A reading then pins the coefficient:

$$
A\\cdot 4^{\\frac{3}{2}}=40
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
8A=40
$$

$$
A=5
$$

At sixteen amperes:

$$
16^{\\frac{3}{2}}=64
$$

$$
S(16)=5\\cdot 64
$$

$$
5\\cdot 64=320
$$

$$
320>300
$$

so the statement is True.`,
      `**B.** → False

An extra ampere is the slope, not a constant add-on. The exponent $\\frac{3}{2}$ already exceeds one, so the slope itself is still rising: later amperes add more newtons than earlier ones. Comparing $4$ A with $9$ A therefore goes the wrong way for the claim. Differentiating $S(p)=5p^{\\frac{3}{2}}$ brings the exponent down by one:

$$
S'(p)=5\\cdot\\frac{3}{2}p^{\\frac{1}{2}}
$$

$$
S'(p)=\\frac{15}{2}p^{\\frac{1}{2}}
$$

$$
S'(4)=\\frac{15}{2}\\cdot 2
$$

$$
S'(4)=15
$$

$$
S'(9)=\\frac{15}{2}\\cdot 3
$$

$$
S'(9)=\\frac{45}{2}
$$

$$
15<\\frac{45}{2}
$$

so the statement is False.`,
      `**C.** → True

The two logged strengths are $135$ N and $40$ N.

$$
135-40=95
$$

$$
95>40
$$

so the statement is True.`,
      `**D.** → False

The reject line is $400$ N. At eighteen amperes the three-halves power is still short of that floor:

$$
S(18)=5\\cdot 18^{\\frac{3}{2}}
$$

$$
18^{\\frac{3}{2}}=18\\cdot\\sqrt{18}
$$

$$
\\sqrt{18}=3\\sqrt{2}
$$

$$
18^{\\frac{3}{2}}=54\\sqrt{2}
$$

$$
S(18)=270\\sqrt{2}
$$

$$
270\\sqrt{2}\\approx 381.8
$$

$$
381.8<400
$$

so the statement is False.`,
      `**E.** → True

Doubling current would double strength only if the exponent were $1$. With exponent $\\frac{3}{2}$ the scale factor is

$$
\\frac{S(8)}{S(4)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
2\\sqrt{2}\\approx 2.83
$$

$$
2.83>2.5
$$

so the statement is True.`,
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

**1.** $S(16)=320>300$. The extra from $4$ A to $9$ A is $95$, which already exceeds $S(4)=40$.

**2.** $S'(4)=15<S'(9)=\\frac{45}{2}$, so an extra ampere adds less at $4$ A. Doubling current multiplies strength by $2\\sqrt{2}\\approx 2.83>2.5$.

**3.** $S(18)=270\\sqrt{2}\\approx 381.8<400$, so the reject line is not yet cleared at $18$ A.

**Answer.** $A=5$ | $k=\\frac{3}{2}$ | $S(16)=320$ N | $S(18)\\approx 381.8$ N`,
  },
  {
    id: `math-8-62`,
    case_id: `MATH 8.62`,
    title: `Mooring Holding Power Across Kilograms and Tonnes`,
    context: `A harbour buoy's holding power follows $H(m)=A m^{\\frac{2}{3}}$ kilonewtons when mass $m>0$ is measured in kilograms. A trial buoy of $8$ kg held exactly $24$ kN. The harbour authority prefers masses in tonnes ($1$ tonne $=1000$ kg) and writes the same physical law as $H(t)=B t^{\\frac{2}{3}}$ with $t$ in tonnes. A storm protocol demands at least $150$ kN of holding power. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $125$ kg buoy already holds more than $140$ kN.`,
      `Doubling buoy mass from $8$ kg to $16$ kg doubles holding power.`,
      `Reaching $150$ kN takes more than $1$ tonne.`,
      `Switching mass from kilograms to tonnes makes the new coefficient larger than $500$.`,
      `Two $8$ kg buoys together already hold more than one $64$ kg buoy.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The trial buoy pins the kilogram-scale coefficient at once, because the exponent $\\frac{2}{3}$ is already given:

$$
A\\cdot 8^{\\frac{2}{3}}=24
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
4A=24
$$

$$
A=6
$$

At $125$ kg:

$$
125^{\\frac{2}{3}}=25
$$

$$
H(125)=6\\cdot 25
$$

$$
6\\cdot 25=150
$$

$$
150>140
$$

so the statement is True.`,
      `**B.** → False

Doubling mass would double holding power only if the exponent were $1$. With exponent $\\frac{2}{3}$ the scale factor is

$$
\\frac{H(16)}{H(8)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

so the statement is False.`,
      `**C.** → False

The $125$ kg buoy already holds $150$ kN, and that mass in tonnes is

$$
\\frac{125}{1000}=0.125
$$

$$
0.125<1
$$

so the statement is False.`,
      `**D.** → True

Switching the input unit does not rewrite the exponent. The harbour still obeys the same two-thirds power of mass; only the coefficient absorbs the conversion. One tonne is a thousand kilograms, and that thousand is raised to two thirds before it multiplies the old coefficient. Two thirds of a factor of a thousand is a factor of a hundred, so the new coefficient is six hundred, already past five hundred.

$$
H=6(1000t)^{\\frac{2}{3}}
$$

$$
(1000t)^{\\frac{2}{3}}=1000^{\\frac{2}{3}}t^{\\frac{2}{3}}
$$

$$
1000^{\\frac{2}{3}}=(10^{3})^{\\frac{2}{3}}
$$

$$
(10^{3})^{\\frac{2}{3}}=10^{2}
$$

$$
10^{2}=100
$$

$$
H=6\\cdot 100\\, t^{\\frac{2}{3}}
$$

$$
H=600t^{\\frac{2}{3}}
$$

$$
600>500
$$

so the statement is True.`,
      `**E.** → False

Two separate $8$ kg buoys add their holding powers; they do not fuse into one larger buoy.

$$
2H(8)=2\\cdot 24
$$

$$
2\\cdot 24=48
$$

One $64$ kg buoy holds

$$
64^{\\frac{2}{3}}=16
$$

$$
H(64)=6\\cdot 16
$$

$$
6\\cdot 16=96
$$

$$
48<96
$$

so the statement is False.`,
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

**1.** $H(125)=150>140$. Doubling $8$ kg to $16$ kg multiplies holding power by $2^{\\frac{2}{3}}\\approx 1.587$, not by $2$.

**2.** The tonne-scale coefficient is $600>500$. Reaching $150$ kN takes $0.125$ tonnes, not more than $1$ tonne.

**3.** Two $8$ kg buoys hold $48$ kN, while $H(64)=96$.

**Answer.** $A=6$ | $B=600$ | $H(125)=150$ | $H(64)=96$ | two $8$ kg buoys $48$ kN`,
  },
  {
    id: `math-8-63`,
    case_id: `MATH 8.63`,
    title: `Mesh Throughput Against an Inverse-Square Floor`,
    context: `A wireless mesh's sustained throughput follows $T(d)=A d^{-2}$ megabits per second, where $d>0$ is the hop distance in metres. A bench test at $d=4$ m recorded $T=50$ Mbps. The link is rated reliable only while throughput stays at or above $8$ Mbps. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The farthest reliable hop distance is already under $12$ m.`,
      `Doubling the hop distance from $4$ m to $8$ m halves the throughput.`,
      `A hop of $11$ m still clears the $8$ Mbps reliability floor.`,
      `The drop from $4$ m to $8$ m already exceeds remaining throughput at $8$ m.`,
      `A hop of $5$ m still delivers more than $30$ Mbps.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Throughput falls as an inverse square of hop distance, so a reliability floor is a maximum hop, not a minimum. Because the exponent is negative, stretching the hop always cuts throughput, and the $8$ Mbps floor is the farthest the link can go while staying rated. The bench reading at four metres recovers the coefficient, then inverts.

$$
\\frac{A}{4^{2}}=50
$$

$$
\\frac{A}{16}=50
$$

$$
A=800
$$

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
d=10
$$

$$
10<12
$$

so the statement is True.`,
      `**B.** → False

Doubling hop distance would halve throughput only if the exponent were $-1$. With exponent $-2$ the scale factor is

$$
\\frac{T(8)}{T(4)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

so the statement is False.`,
      `**C.** → False

At $11$ m the inverse square is already below the floor.

$$
T(11)=\\frac{800}{121}
$$

$$
\\frac{800}{121}\\approx 6.61
$$

$$
6.61<8
$$

so the statement is False.`,
      `**D.** → True

The drop from $4$ m to $8$ m is a difference of two levels, and the remainder at $8$ m is the later reading itself.

$$
T(4)=\\frac{800}{16}
$$

$$
T(4)=50
$$

$$
T(8)=\\frac{800}{64}
$$

$$
T(8)=12.5
$$

$$
50-12.5=37.5
$$

$$
37.5>12.5
$$

so the statement is True.`,
      `**E.** → True

At $5$ m the inverse square is $32$ Mbps.

$$
T(5)=\\frac{800}{25}
$$

$$
\\frac{800}{25}=32
$$

$$
32>30
$$

so the statement is True.`,
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

**1.** The $8$ Mbps floor is met at $d=10$ m, already under $12$ m. $T(11)=\\frac{800}{121}\\approx 6.61$ misses the floor.

**2.** Doubling $4$ m to $8$ m quarters throughput, from $50$ to $12.5$. The drop $37.5$ already exceeds the remaining $12.5$.

**3.** $T(5)=32>30$.

**Answer.** $A=800$ | reliable radius $10$ m | $T(8)=12.5$ | $T(5)=32$`,
  },
  {
    id: `math-8-64`,
    case_id: `MATH 8.64`,
    title: `Allometric Gill Area Across Body Masses`,
    context: `A fish physiologist models gill surface area as $G(m)=A m^{\\frac{3}{4}}$ square centimetres for body mass $m>0$ grams. A $256$ g specimen has gill area $512$ cm$^{2}$. Area per gram is the derived intensity $\\frac{G(m)}{m}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $16$ g fish already has more than $50$ cm$^{2}$ of gill.`,
      `Doubling body mass doubles gill area.`,
      `A $64$ g fish already has more than $200$ cm$^{2}$ of gill.`,
      `Two $16$ g fish together already have more gill area than one $64$ g fish.`,
      `Gill area per gram falls from $16$ g to $256$ g by more than $1$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The $256$ g specimen pins the coefficient, because $256$ is a fourth power:

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

At sixteen grams:

$$
16^{\\frac{3}{4}}=8
$$

$$
G(16)=8\\cdot 8
$$

$$
8\\cdot 8=64
$$

$$
64>50
$$

so the statement is True.`,
      `**B.** → False

Doubling mass would double gill area only if the exponent were $1$. With exponent $\\frac{3}{4}$ the scale factor is

$$
\\frac{G(2m)}{G(m)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

so the statement is False.`,
      `**C.** → False

At sixty-four grams the three-quarters power is $8$.

$$
G(64)=8\\cdot 8
$$

$$
8\\cdot 8=64
$$

$$
64<200
$$

so the statement is False.`,
      `**D.** → True

Two $16$ g fish add their gill areas; they are not one fused $32$ g fish.

$$
2G(16)=2\\cdot 64
$$

$$
2\\cdot 64=128
$$

One $64$ g fish has $G(64)=64$. Because $128>64$, the pair already has more gill area, so the statement is True.`,
      `**E.** → True

Gill area grows slower than mass because the exponent $\\frac{3}{4}$ is below one. Dividing by mass therefore leaves a negative leftover, so area per gram must fall as the fish gets heavier. From $16$ g to $256$ g that intensity drops from $4$ to $2$. The fall of $2$ already exceeds $1$.

$$
\\frac{G(m)}{m}=8m^{-\\frac{1}{4}}
$$

$$
16^{\\frac{1}{4}}=2
$$

$$
\\frac{G(16)}{16}=\\frac{8}{2}
$$

$$
\\frac{8}{2}=4
$$

$$
256^{\\frac{1}{4}}=4
$$

$$
\\frac{G(256)}{256}=\\frac{8}{4}
$$

$$
\\frac{8}{4}=2
$$

$$
4-2=2
$$

$$
2>1
$$

so the statement is True.`,
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

**1.** $G(16)=64>50$. Doubling mass multiplies gill area by $2^{\\frac{3}{4}}\\approx 1.682$, not by $2$.

**2.** $G(64)=64$, which is not more than $200$. Two $16$ g fish already total $128>64$.

**3.** Gill area per gram falls from $4$ at $16$ g to $2$ at $256$ g, a drop of more than $1$.

**Answer.** $A=8$ | $G(16)=64$ | $G(64)=64$ | intensity $4$ to $2$`,
  },
  {
    id: `math-8-65`,
    case_id: `MATH 8.65`,
    title: `Curing Strength From a Timed Gap Between Samples`,
    context: `A concrete lab models early curing strength as $S(t)=A\\sqrt{t}$ megapascals, where $t>0$ is curing time in days. The log never states $A$: it only notes that strength rose by exactly $5$ MPa between day $4$ and day $9$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Quadrupling curing time exactly doubles strength.`,
      `Strength on day $4$ is already above $8$ MPa.`,
      `The extra strength from day $4$ to day $9$ already falls short of the day-$4$ strength.`,
      `Reaching $30$ MPa still takes under $40$ days of curing.`,
      `The recorded $5$ MPa is the strength on day $9$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Quadrupling time multiplies strength by $\\sqrt{4}$, and the unknown coefficient cancels. That factor is exactly $2$ at every starting day, which is the square-root signature.

$$
\\frac{S(4t)}{S(t)}=\\sqrt{4}
$$

$$
\\sqrt{4}=2
$$

so the statement is True.`,
      `**B.** → True

The logged $5$ MPa is a gap between day $4$ and day $9$, not a level. Factoring out the coefficient recovers it:

$$
A\\sqrt{9}-A\\sqrt{4}=5
$$

$$
A(3-2)=5
$$

$$
A=5
$$

Day $4$ then reads

$$
S(4)=5\\cdot 2
$$

$$
5\\cdot 2=10
$$

$$
10>8
$$

so the statement is True.`,
      `**C.** → True

The extra from day $4$ to day $9$ is the recorded $5$ MPa itself, and day $4$ already carries $10$ MPa.

$$
S(4)=10
$$

$$
S(9)=15
$$

$$
15-10=5
$$

$$
5<10
$$

so the statement is True.`,
      `**D.** → True

Thirty megapascals inverts the square-root law to a square of six:

$$
5\\sqrt{t}=30
$$

$$
\\sqrt{t}=6
$$

$$
t=36
$$

$$
36<40
$$

so the statement is True.`,
      `**E.** → False

Day $9$ carries $15$ MPa. The logged figure is the difference $15-10=5$, a gap, not the day-$9$ level, so the statement is False.`,
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

**2.** Quadrupling time doubles strength. The extra from day $4$ to day $9$ is $5$, which falls short of $S(4)=10$.

**3.** $30$ MPa occurs on day $36$, already under $40$ days.

**Answer.** $A=5$ | $S(4)=10$ | $S(9)=15$ | $30$ MPa on day $36$`,
  },
  {
    id: `math-8-66`,
    case_id: `MATH 8.66`,
    title: `Cantilever Deflection Checked Against a Third Span`,
    context: `A materials lab models tip deflection of a cantilever as $y(L)=A L^{k}$ millimetres, where $L>0$ is the free span in metres. Two spans are trusted: $y(3)=18$ and $y(6)=72$. A third run recorded $y(9)=150$, and the question is whether that third point still sits on the same power law. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The trusted quadratic already puts nine metres above $155$ mm.`,
      `The recorded third run sits more than $10$ mm below the trusted quadratic.`,
      `Doubling the free span doubles the tip deflection.`,
      `At span $6$ m the trusted law already exceeds $70$ mm.`,
      `The extra predicted deflection from $3$ m to $6$ m already exceeds the $3$ m reading.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The trusted spans double from $3$ m to $6$ m, so their ratio is a pure power of $2$ and cancels the coefficient:

$$
\\frac{y(6)}{y(3)}=\\frac{72}{18}
$$

$$
\\frac{72}{18}=4
$$

$$
2^{k}=4
$$

$$
k=2
$$

The $3$ m run then pins the coefficient:

$$
A\\cdot 3^{2}=18
$$

$$
9A=18
$$

$$
A=2
$$

At nine metres the trusted quadratic predicts

$$
y(9)=2\\cdot 9^{2}
$$

$$
9^{2}=81
$$

$$
2\\cdot 81=162
$$

$$
162>155
$$

so the statement is True.`,
      `**B.** → True

The trusted pair is a square law, so the nine-metre prediction is not a free parameter. Once the curve is pinned at three metres and six metres it has already committed to one hundred and sixty-two millimetres at nine. The lab's third run came in at one hundred and fifty. That is a shortfall of twelve millimetres, and twelve already exceeds the ten-millimetre tolerance the claim names. The third point is a test of the fitted curve, not a third input to it.

$$
162-150=12
$$

$$
12>10
$$

so the statement is True.`,
      `**C.** → False

Doubling the free span would double tip deflection only if the exponent were $1$. The trusted pair already forced a square, so the scale factor is four, not two.

$$
\\frac{y(2L)}{y(L)}=2^{2}
$$

$$
2^{2}=4
$$

so the statement is False.`,
      `**D.** → True

At span $6$ m the trusted pair already recorded $72$ mm.

$$
y(6)=72
$$

$$
72>70
$$

so the statement is True.`,
      `**E.** → True

The extra from $3$ m to $6$ m is a difference of two trusted readings, and the $3$ m reading is $18$ mm.

$$
y(6)-y(3)=72-18
$$

$$
72-18=54
$$

$$
54>18
$$

so the statement is True.`,
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

**1.** The trusted pair is a square law with $A=2$. It predicts $y(9)=162>155$. The recorded $150$ sits $12$ mm below that prediction.

**2.** Doubling span multiplies deflection by $4$, not by $2$. $y(6)=72>70$.

**3.** The extra from $3$ m to $6$ m is $54$, which already exceeds $y(3)=18$.

**Answer.** $y(L)=2L^{2}$ | predicted $y(9)=162$ mm | shortfall $12$ mm | $y(6)=72$ | extra $54$ mm`,
  },
  {
    id: `math-8-67`,
    case_id: `MATH 8.67`,
    title: `Mast Steel Mass Under a Finite Percentage Scale-Up`,
    context: `A self-similar mast's steel mass follows $M(h)=A h^{k}$ kilograms, where $h>0$ is mast height in metres. Design notes state that lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$, and a $10$ m reference mast uses exactly $500$ kg of steel. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $12$ m mast already uses more than $800$ kg of steel.`,
      `A $20\\%$ height increase raises mass by $20\\%$.`,
      `A $10$ m mast already uses more than $450$ kg of steel.`,
      `A $10\\%$ height increase raises mass by more than $30\\%$.`,
      `The extra steel from $10$ m to $12$ m already exceeds $350$ kg.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

A $20\\%$ stretch is the height factor $1.2$, and a $72.8\\%$ rise is the mass factor $1.728$. The ratio cancels the coefficient and forces a cube:

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

The $10$ m reference then pins $A\\cdot 1000=500$, so $A=0.5$. A $12$ m mast is that reference lengthened by $20\\%$, and the design note supplies the multiplier $1.728$:

$$
M(12)=500\\cdot 1.728
$$

$$
500\\cdot 1.728=864
$$

$$
864>800
$$

so the statement is True.`,
      `**B.** → False

A $20\\%$ height increase would raise mass by $20\\%$ only if the exponent were $1$, which would give the factor $1.2$. The design note records the factor $1.728$, a $72.8\\%$ rise, because $k=3$.

$$
1.2^{3}=1.728
$$

$$
1.728\\neq 1.2
$$

so the statement is False.`,
      `**C.** → True

The $10$ m reference mast is already logged at $500$ kg.

$$
M(10)=500
$$

$$
500>450
$$

so the statement is True.`,
      `**D.** → True

A $10\\%$ stretch is the factor $1.1$ through the cube. An exact $30\\%$ rise would need the factor $1.3$, but the cube overshoots that.

$$
1.1^{2}=1.21
$$

$$
1.21\\cdot 1.1=1.331
$$

$$
0.331>0.30
$$

so the statement is True.`,
      `**E.** → True

The extra steel from $10$ m to $12$ m is a difference of two cube levels.

$$
M(12)-M(10)=864-500
$$

$$
864-500=364
$$

$$
364>350
$$

so the statement is True.`,
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

**1.** The ratio forces a cube, and the reference then forces $A=0.5$. $M(10)=500>450$ and $M(12)=864>800$.

**2.** A $20\\%$ stretch adds $72.8\\%$, not $20\\%$. A $10\\%$ stretch adds $33.1\\%$, already more than $30\\%$. The extra steel from $10$ m to $12$ m is $364>350$.

**Answer.** $M(h)=0.5h^{3}$ | $M(10)=500$ kg | $M(12)=864$ kg | extra $364$ kg | $10\\%$ stretch adds $33.1\\%$`,
  },
  {
    id: `math-8-68`,
    case_id: `MATH 8.68`,
    title: `Cooling Fan Noise Against a Night-Time Cap`,
    context: `Acoustic intensity from a cooling fan follows $I(d)=A d^{-2}$ watts per square metre, where $d>0$ is distance from the hub in metres. A meter reading at $2$ metres records $0.72$ W/m$^{2}$. Night operations are capped at $0.08$ W/m$^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the distance from $2$ m to $4$ m cuts intensity to one quarter.`,
      `At $4$ metres the intensity is already under $0.2$ W/m$^{2}$.`,
      `An extra metre cuts more intensity at $2$ m than it does at $6$ m.`,
      `At $6$ metres the intensity is still above the $0.08$ W/m$^{2}$ night cap.`,
      `The distance that meets the $0.08$ cap is already under $7$ m.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The meter reading at $2$ m pins the inverse-square coefficient:

$$
\\frac{A}{2^{2}}=0.72
$$

$$
A=2.88
$$

Doubling distance from $2$ m to $4$ m then multiplies intensity by

$$
\\frac{I(4)}{I(2)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

so the statement is True.`,
      `**B.** → True

At four metres the inverse square is already $0.18$.

$$
I(4)=\\frac{2.88}{16}
$$

$$
\\frac{2.88}{16}=0.18
$$

$$
0.18<0.2
$$

so the statement is True.`,
      `**C.** → True

An extra metre is the slope of the inverse square, not a constant cut. Because the leftover exponent after differentiating is $-3$, the drop per metre shrinks rapidly as one steps away from the hub. Near the fan the same extra metre therefore removes far more intensity than it does at six metres.

$$
I'(d)=-5.76\\, d^{-3}
$$

$$
\\frac{5.76}{2^{3}}=\\frac{5.76}{8}
$$

$$
\\frac{5.76}{8}=0.72
$$

$$
\\frac{5.76}{6^{3}}=\\frac{5.76}{216}
$$

$$
\\frac{5.76}{216}\\approx 0.0267
$$

$$
0.72>0.0267
$$

so the statement is True.`,
      `**D.** → False

Six metres is exactly the night-cap boundary. The word above excludes a boundary value.

$$
I(6)=\\frac{2.88}{36}
$$

$$
\\frac{2.88}{36}=0.08
$$

so the statement is False.`,
      `**E.** → True

The $0.08$ cap inverts to a standing distance of $6$ m.

$$
\\frac{2.88}{d^{2}}=0.08
$$

$$
d^{2}=36
$$

$$
d=6
$$

$$
6<7
$$

so the statement is True.`,
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

**1.** Doubling $2$ m to $4$ m quarters intensity. $I(4)=0.18<0.2$.

**2.** $\\lvert I'\\rvert$ is larger at $2$ m than at $6$ m. $I(6)=0.08$ exactly, so the reading is not still above the cap.

**3.** The cap is met at $d=6$, already under $7$ m.

**Answer.** $I(d)=\\frac{2.88}{d^{2}}$ | $I(4)=0.18$ | $I(6)=0.08$ | cap at $d=6$ m`,
  },
  {
    id: `math-8-69`,
    case_id: `MATH 8.69`,
    title: `Pump Head Composed Through a Square Flow Law`,
    context: `A booster pump's differential head follows $H(q)=A q^{2}$ metres when the delivered flow is $q>0$ cubic metres per hour. A commissioning run at $q=5$ recorded $H=50$ m. The plant then pipes that flow through a nozzle whose jet speed is $v(H)=4\\sqrt{H}$ metres per second, so jet speed as a function of flow is the composition $v(q)=v(H(q))$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $q=5$ the jet speed is already above $28$ m/s.`,
      `Doubling the flow doubles the head.`,
      `A jet speed of $40\\sqrt{2}$ m/s still takes under $12$ m$^{3}$/h of flow.`,
      `Head at $q=5$ is already above $45$ m.`,
      `The extra head from $q=5$ to $q=10$ already exceeds the head at $q=5$.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Head is a square of flow, and jet speed is a square root of that head. Composing the two stages multiplies the exponents: two times one half is one, so the jet ends up linear in flow. The commissioning run at five cubic metres per hour already recorded a head of fifty metres. Passing that fifty metres through the nozzle gives twenty root two metres per second. Because root two sits above $1.4$, that speed is already above twenty-eight.

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
v=4\\sqrt{50}
$$

$$
\\sqrt{50}=5\\sqrt{2}
$$

$$
v=20\\sqrt{2}
$$

$$
20\\sqrt{2}\\approx 28.28
$$

$$
28.28>28
$$

so the statement is True.`,
      `**B.** → False

Doubling flow would double head only if the exponent were $1$. With exponent $2$ the scale factor is four, not two.

$$
\\frac{H(2q)}{H(q)}=2^{2}
$$

$$
2^{2}=4
$$

so the statement is False.`,
      `**C.** → True

The composition is linear, so a target speed inverts by division. A jet of $40\\sqrt{2}$ m/s on $v(q)=4\\sqrt{2}\\, q$ is

$$
4\\sqrt{2}\\, q=40\\sqrt{2}
$$

$$
q=10
$$

$$
10<12
$$

so the statement is True.`,
      `**D.** → True

The commissioning run already recorded a head of $50$ m.

$$
H(5)=50
$$

$$
50>45
$$

so the statement is True.`,
      `**E.** → True

Head is a square of flow, so doubling flow from $5$ to $10$ quadruples head. The extra is then three times the original head, already more than the $q=5$ reading.

$$
H(10)=2\\cdot 10^{2}
$$

$$
2\\cdot 100=200
$$

$$
200-50=150
$$

$$
150>50
$$

so the statement is True.`,
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

**1.** $H(5)=50>45$ and $v(5)=20\\sqrt{2}\\approx 28.28>28$. Doubling flow quadruples head.

**2.** A target of $40\\sqrt{2}$ m/s needs $q=10<12$. The extra head from $q=5$ to $q=10$ is $150$, which already exceeds $H(5)=50$.

**Answer.** $H(q)=2q^{2}$ | $v(q)=4\\sqrt{2}\\, q$ | $v(5)=20\\sqrt{2}$ m/s | $H(5)=50$ | extra head $150$ m`,
  },
  {
    id: `math-8-70`,
    case_id: `MATH 8.70`,
    title: `Warehouse Forklift Throughput Under a Staffing Cap`,
    context: `Forklift throughput follows $T(s)=A s^{0.5}$ pallets per hour, where $s>0$ is the number of drivers on shift. A logged shift with $16$ drivers moved $80$ pallets per hour. Safety rules cap the shift at $36$ drivers. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `To double the logged throughput the yard must more than double the crew.`,
      `With $36$ drivers the model already predicts more than $110$ pallets per hour.`,
      `Throughput per driver falls from $16$ to $36$ drivers by more than $1$ pallet per driver.`,
      `Reaching $150$ pallets per hour stays inside the safety cap.`,
      `Two $16$-driver shifts already match one $64$-driver shift.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The logged shift pins the square-root coefficient:

$$
A\\cdot 16^{\\frac{1}{2}}=80
$$

$$
4A=80
$$

$$
A=20
$$

Doubling the logged $80$ pallets is a crew factor $k$ with $\\sqrt{k}=2$, so $k=4$. Four times the crew is more than a doubling, so the statement is True.`,
      `**B.** → True

At the capped crew of $36$ the square root is $6$.

$$
T(36)=20\\cdot 6
$$

$$
20\\cdot 6=120
$$

$$
120>110
$$

so the statement is True.`,
      `**C.** → True

Throughput per driver is the square-root law divided by crew size, which subtracts one from the exponent and leaves a negative leftover. Extra drivers still raise the shift total, but each one adds less than the last, so the average must fall. From $16$ drivers to $36$ that average drops by $\\frac{5}{3}$, already more than one pallet per driver.

$$
\\frac{T(s)}{s}=20s^{-\\frac{1}{2}}
$$

$$
\\frac{T(16)}{16}=\\frac{20}{4}
$$

$$
\\frac{20}{4}=5
$$

$$
\\frac{T(36)}{36}=\\frac{20}{6}
$$

$$
\\frac{20}{6}=\\frac{10}{3}
$$

$$
5-\\frac{10}{3}=\\frac{5}{3}
$$

$$
\\frac{5}{3}>1
$$

so the statement is True.`,
      `**D.** → False

A target of $150$ pallets inverts to a square of the crew.

$$
20\\sqrt{s}=150
$$

$$
\\sqrt{s}=\\frac{15}{2}
$$

$$
s=\\frac{225}{4}
$$

$$
\\frac{225}{4}=56.25
$$

$$
56.25>36
$$

so the statement is False.`,
      `**E.** → True

Two $16$-driver shifts add their throughputs; one $64$-driver shift is four times the crew, and a square-root law turns that four into a two.

$$
2T(16)=2\\cdot 80
$$

$$
2\\cdot 80=160
$$

$$
T(64)=20\\cdot 8
$$

$$
20\\cdot 8=160
$$

so the statement is True.`,
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

**1.** Doubling the logged $80$ pallets needs four times the crew. $T(36)=120>110$.

**2.** Throughput per driver falls from $5$ at $16$ drivers to $\\frac{10}{3}$ at $36$ drivers, a drop of $\\frac{5}{3}>1$.

**3.** $150$ pallets would need $s=56.25>36$. Two $16$-driver shifts already match $T(64)=160$.

**Answer.** $T(s)=20\\sqrt{s}$ | $T(36)=120$ | fourfold crew to double output | $150$ pallets need $56.25$ drivers`,
  },
  {
    id: `math-8-71`,
    case_id: `MATH 8.71`,
    title: `Subscriber Demand and Revenue for a Streaming Tier`,
    context: `A streaming service prices one subscription tier at $p$ euros a month. Paid subscribers, in thousands, follow $q(p)=A p^{r}$ with both constants unknown. Quadrupling any price multiplies the subscriber count by one eighth, and at four euros the tier holds two hundred and fifty thousand subscribers. Monthly revenue is $R=pq$, also in thousands of euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At a price of $16$ euros, monthly revenue is already under $600$ thousand euros.`,
      `At a price of $9$ euros, monthly revenue is under $600$ thousand euros.`,
      `Doubling the $4$-euro price halves revenue.`,
      `At the recorded $4$-euro price, revenue already exceeds $900$ thousand euros.`,
      `The revenue drop from $4$ to $16$ euros already exceeds $450$ thousand euros.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Quadrupling any price multiplies the subscriber count by one eighth, so the demand exponent solves

$$
4^{r}=\\frac{1}{8}
$$

$$
4^{\\frac{3}{2}}=8
$$

$$
r=-\\frac{3}{2}
$$

The four-euro level of two hundred and fifty thousand subscribers then pins the coefficient:

$$
A\\cdot 4^{-\\frac{3}{2}}=250
$$

$$
\\frac{A}{8}=250
$$

$$
A=2000
$$

Monthly revenue is price times demand, which adds one to the exponent, so $R(p)=2000p^{-\\frac{1}{2}}$. At sixteen euros the square root is $4$:

$$
R(16)=\\frac{2000}{4}
$$

$$
R(16)=500
$$

Five hundred already sits under six hundred, so the statement is True.`,
      `**B.** → False

At a price of nine euros:

$$
R(9)=2000\\cdot 9^{-\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
R(9)=\\frac{2000}{3}\\approx 666.67
$$

About $666.67$ thousand euros sits above six hundred, not under, so the statement is False.`,
      `**C.** → False

Halving revenue on a doubled price would need leftover exponent $-1$ on $R$. Revenue is $R(p)=2000p^{-\\frac{1}{2}}$, so the scale factor is

$$
\\frac{R(2p)}{R(p)}=2^{-\\frac{1}{2}}
$$

$$
2^{-\\frac{1}{2}}\\approx 0.707
$$

From the recorded $R(4)=1000$, doubling to eight euros would leave about $707$ thousand euros, not $500$. The leftover exponent is minus one half, not minus one, so the statement is False.`,
      `**D.** → True

At the recorded four-euro price:

$$
R(4)=2000\\cdot 4^{-\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
R(4)=1000
$$

One thousand already exceeds nine hundred, so the statement is True.`,
      `**E.** → True

The four-euro reading is the recorded gauging of one thousand. Sixteen euros is a quadrupling of that price, and leftover exponent $-\\frac{1}{2}$ turns a factor of four into a factor of one half, so revenue falls from $1000$ to $500$. The drop is half the recorded reading itself:

$$
R(4)-R(16)=1000-500
$$

$$
1000-500=500
$$

Five hundred already exceeds four hundred and fifty, so the statement is True.`,
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

**1.** $R(16)=500<600$. $R(9)=\\frac{2000}{3}\\approx 666.67$, which is not under $600$. At the recorded price, $R(4)=1000>900$.

**2.** Doubling the $4$-euro price multiplies revenue by $2^{-\\frac{1}{2}}\\approx 0.707$, not by $\\frac{1}{2}$. The drop from $4$ to $16$ euros is $500$, which already exceeds $450$.

**Answer.** $r=-\\frac{3}{2}$ | $A=2000$ | $R(4)=1000$ | $R(16)=500$ | $R(9)=\\frac{2000}{3}$`,
  },
  {
    id: `math-8-72`,
    case_id: `MATH 8.72`,
    title: `Fixed Retainer Plus a Square-Root Monitoring Fee`,
    context: `A compliance-monitoring platform bills $C(n)=F+A n^{\\frac{1}{2}}$ euros a month for $n\\ge 1$ branches, with both constants unknown. One hundred branches cost seven hundred euros, and four hundred branches cost one thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Monitoring $900$ branches costs more than $1200$ euros a month.`,
      `At $36$ branches the bill already exceeds the $100$-branch invoice.`,
      `Quadrupling the branch count doubles the whole bill.`,
      `A $100$-branch network already costs more than $650$ euros.`,
      `The extra bill from $100$ to $400$ branches already exceeds the $100$-branch bill.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The two invoices differ by three hundred euros while the square roots are $10$ and $20$:

$$
F+10A=700
$$

$$
F+20A=1000
$$

Subtracting isolates the monitoring coefficient:

$$
10A=300
$$

$$
A=30
$$

$$
F=400
$$

so the bill is $C(n)=400+30n^{\\frac{1}{2}}$. Nine hundred branches is a clean square:

$$
900^{\\frac{1}{2}}=30
$$

$$
C(900)=400+30\\cdot 30
$$

$$
C(900)=1300
$$

Thirteen hundred already exceeds twelve hundred, so the statement is True.`,
      `**B.** → False

At thirty-six branches:

$$
36^{\\frac{1}{2}}=6
$$

$$
C(36)=400+30\\cdot 6
$$

$$
C(36)=580
$$

Five hundred and eighty sits below the $100$-branch invoice of $700$, so the statement is False.`,
      `**C.** → False

Quadrupling the branch count would double the whole bill only if $C$ were a pure square root of $n$. The recorded pair is already a quadrupling: $100$ branches at $700$ euros and $400$ at $1000$. Doubling the whole bill would have made the second invoice $1400$, not $1000$. Only the square-root term doubles when $n$ quadruples; the $400$-euro retainer stays put.

$$
C(400)=1000
$$

$$
2\\cdot C(100)=1400
$$

One thousand is not fourteen hundred, so the statement is False.`,
      `**D.** → True

A $100$-branch network is the first recorded invoice:

$$
C(100)=700
$$

Seven hundred already exceeds six hundred and fifty, so the statement is True.`,
      `**E.** → False

The extra from one hundred to four hundred branches is the gap between the two recorded invoices:

$$
C(400)-C(100)=1000-700
$$

$$
1000-700=300
$$

The $100$-branch bill is $700$, and $300$ does not exceed $700$, so the statement is False.`,
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

**1.** $C(900)=1300>1200$ and $C(100)=700>650$. $C(36)=580$, which is below $C(100)=700$.

**2.** Quadrupling raises the bill from $700$ to $1000$, not to $1400$. The extra from $100$ to $400$ branches is $300$, which does not exceed the $100$-branch bill of $700$.

**Answer.** $F=400$ | $A=30$ | $C(900)=1300$ | $C(36)=580$ | extra $300$`,
  },
  {
    id: `math-8-73`,
    case_id: `MATH 8.73`,
    title: `Ordering Cost Against Holding Cost at a Spare-Parts Depot`,
    context: `A spare-parts depot reorders one component in batches of $q>0$ units. Annual ordering cost is $O(q)=A q^{-1}$ euros and annual holding cost is $H(q)=B q$ euros, with both coefficients unknown. At a batch of forty units the two components are equal, and each is one hundred and twenty euros. The annual total is $T=O+H$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A batch of $60$ units costs more than $250$ euros a year in total.`,
      `At $80$ units, ordering cost is more than $200$ euros.`,
      `Doubling any batch size leaves the annual total unchanged.`,
      `Cutting the batch from $40$ to $20$ raises the annual total by as much as raising it from $40$ to $80$.`,
      `At $40$ units the annual total is already under $250$ euros.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

At forty units the two components each equal $120$ euros, so

$$
\\frac{A}{40}=120
$$

$$
A=4800
$$

$$
40B=120
$$

$$
B=3
$$

and the annual total is $T(q)=\\frac{4800}{q}+3q$. At sixty units:

$$
O(60)=\\frac{4800}{60}
$$

$$
O(60)=80
$$

$$
H(60)=3\\cdot 60
$$

$$
H(60)=180
$$

$$
T(60)=80+180
$$

$$
T(60)=260
$$

Two hundred and sixty exceeds two hundred and fifty, so the statement is True.`,
      `**B.** → False

Ordering cost is $O(q)=\\frac{4800}{q}$. At eighty units:

$$
O(80)=\\frac{4800}{80}
$$

$$
O(80)=60
$$

Sixty sits well below two hundred. Holding is the large term on this side of the crossing, so the statement is False.`,
      `**C.** → False

Doubling any batch would leave $T$ unchanged only if ordering and holding scaled as exact opposites under a factor of $2$. They do not:

$$
T(2q)=\\frac{4800}{2q}+3\\cdot(2q)
$$

$$
T(2q)=\\frac{2400}{q}+6q
$$

which is not $T(q)$. Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing. At the recorded batch the total is $240$; at eighty it is $300$, so the statement is False.`,
      `**D.** → True

Twenty and eighty multiply to $1600$, the same product as $40\\cdot 40$. For this pair of exponents that pairing is a symmetry of $T$: swapping $q$ with $\\frac{1600}{q}$ merely swaps the two cost terms. Cutting $40$ to $20$ and raising $40$ to $80$ are therefore the same move on that symmetry.

$$
T(40)=240
$$

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
      `**E.** → True

At the recorded batch of forty units the two components are $120$ each:

$$
T(40)=120+120
$$

$$
T(40)=240
$$

Two hundred and forty already sits under two hundred and fifty, so the statement is True.`,
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

**1.** $T(60)=260>250$ and $T(40)=240<250$. At $q=80$, ordering cost is $60$, not more than $200$.

**2.** Doubling $40$ to $80$ raises $T$ from $240$ to $300$, so an arbitrary doubling does not leave the total unchanged. The pair $20$ and $80$ ties at $300$, so cutting $40$ to $20$ and raising $40$ to $80$ add the same $60$ euros.

**Answer.** $A=4800$ | $B=3$ | $T(40)=240$ | $T(60)=260$ | $T(20)=T(80)=300$ | $O(80)=60$`,
  },
  {
    id: `math-8-74`,
    case_id: `MATH 8.74`,
    title: `Average Product on a Bottling Line`,
    context: `Output on a bottling line follows $Q(L)=A L^{r}$ units a shift, where $L>0$ is labour hours, with both constants unknown. Sixteen hours produce ninety-six units, and eighty-one hours produce three hundred and twenty-four. Average product is output per labour hour, $Q(L)/L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $16$ hours, average product is under $7$ units an hour.`,
      `To double output she must double the labour hours.`,
      `Average product falls by more than $1.5$ units an hour from $16$ to $81$ hours.`,
      `At $81$ hours, average product still exceeds $5$ units an hour.`,
      `The extra output from $16$ to $81$ hours already exceeds the $16$-hour output.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Sixteen hours produce ninety-six units, so average product is that output over the hours:

$$
\\frac{Q(16)}{16}=\\frac{96}{16}
$$

$$
\\frac{96}{16}=6
$$

Six sits under seven, so the statement is True.`,
      `**B.** → False

The two recorded shifts give $Q(L)=12L^{\\frac{3}{4}}$. Doubling output would need a labour factor $k$ with exponent $1$ on labour if hours and output moved in lockstep. With exponent $\\frac{3}{4}$:

$$
k^{\\frac{3}{4}}=2
$$

$$
k=2^{\\frac{4}{3}}
$$

$$
2^{\\frac{4}{3}}\\approx 2.52
$$

She must multiply hours by about $2.52$, not by $2$. Doubling labour would multiply output only by $2^{\\frac{3}{4}}\\approx 1.68$, short of $2$, so the statement is False.`,
      `**C.** → True

Average product at sixteen hours is already $6$. At eighty-one hours:

$$
\\frac{Q(81)}{81}=\\frac{324}{81}
$$

$$
\\frac{324}{81}=4
$$

$$
6-4=2
$$

The fall of $2$ exceeds $1.5$ units an hour, so the statement is True.`,
      `**D.** → False

At eighty-one hours average product is

$$
\\frac{324}{81}=4
$$

Four does not exceed five, so the statement is False.`,
      `**E.** → True

The sixteen-hour output is the recorded $96$ units. Eighty-one hours produce $324$, so the extra is the gap between those two logged levels, not a fresh evaluation of the power. A three-quarter power still grows, and over this stretch the add-on more than doubles the early reading.

$$
Q(81)-Q(16)=324-96
$$

$$
324-96=228
$$

Because $228>96$, the extra already exceeds the sixteen-hour output, so the statement is True.`,
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

**1.** Average product is $6$ at $L=16$ and $4$ at $L=81$. The fall of $2$ already exceeds $1.5$. Doubling output needs the hour-factor $2^{\\frac{4}{3}}\\approx 2.52$, not $2$.

**2.** The extra from $16$ to $81$ hours is $228$, which already exceeds the $16$-hour output of $96$. At $L=81$, average product is $4$, which does not exceed $5$.

**Answer.** $r=\\frac{3}{4}$ | $A=12$ | AP $6$ then $4$ | extra $228>96$ | $k=2^{\\frac{4}{3}}$ to double $Q$`,
  },
  {
    id: `math-8-75`,
    case_id: `MATH 8.75`,
    title: `Learning Curve With an Irreducible Assembly Floor`,
    context: `A drone-assembly cell models the labour time of the unit built after $n$ cumulative units by $t(n)=F+A n^{-\\frac{1}{2}}$ minutes, $n\\ge 1$, with both constants unknown. After twenty-five units the next unit takes eighteen minutes, and after one hundred units it takes thirteen. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After $900$ cumulative units, modelled unit time is already under $10$ minutes.`,
      `The unit built after $4$ cumulative units takes under $30$ minutes.`,
      `Quadrupling cumulative output halves the modelled unit time.`,
      `After $25$ units, modelled unit time is already under $20$ minutes.`,
      `The time cut from $n=25$ to $n=100$ already exceeds $4$ minutes.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The two timings differ by five minutes while the square roots are $5$ and $10$:

$$
F+\\frac{A}{5}=18
$$

$$
F+\\frac{A}{10}=13
$$

Subtracting isolates the learning coefficient:

$$
\\frac{A}{10}=5
$$

$$
A=50
$$

$$
F=8
$$

so unit time is $t(n)=8+50n^{-\\frac{1}{2}}$. After nine hundred units:

$$
900^{\\frac{1}{2}}=30
$$

$$
t(900)=8+\\frac{50}{30}
$$

$$
t(900)=\\frac{29}{3}\\approx 9.67
$$

Nine and two thirds minutes sits under ten, so the statement is True.`,
      `**B.** → False

After four cumulative units:

$$
4^{\\frac{1}{2}}=2
$$

$$
t(4)=8+\\frac{50}{2}
$$

$$
t(4)=33
$$

Thirty-three minutes is above thirty, so the statement is False.`,
      `**C.** → False

Quadrupling $n$ would halve modelled unit time only if $t$ were a pure inverse square root. The learning term $50n^{-\\frac{1}{2}}$ does halve, because $4^{-\\frac{1}{2}}=\\frac{1}{2}$. The eight-minute floor stays put and dilutes that gain in the total. The recorded pair is already a quadrupling: $18$ minutes down to $13$. Halving the whole unit time would have made the second timing $9$, not $13$.

$$
4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

$$
\\frac{1}{2}\\cdot 18=9
$$

Thirteen is not nine, so the statement is False.`,
      `**D.** → True

After twenty-five units the next unit is the recorded eighteen minutes:

$$
t(25)=18
$$

Eighteen already sits under twenty, so the statement is True.`,
      `**E.** → True

The time cut from $n=25$ to $n=100$ is the gap between the two recorded timings:

$$
t(25)-t(100)=18-13
$$

$$
18-13=5
$$

Five minutes already exceeds four, so the statement is True.`,
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

**1.** $t(900)=\\frac{29}{3}\\approx 9.67<10$ and $t(25)=18<20$. After four units, $t(4)=33$, which is not under $30$.

**2.** Quadrupling halves the learning term but cuts the total only from $18$ to $13$, not to $9$. The time cut from $n=25$ to $n=100$ is $5$ minutes, which already exceeds $4$.

**Answer.** $F=8$ | $A=50$ | $t(25)=18$ | $t(100)=13$ | $t(900)=\\frac{29}{3}$ | $t(4)=33$`,
  },
  {
    id: `math-8-76`,
    case_id: `MATH 8.76`,
    title: `Break-Even for a Fish Farm With Diminishing Harvest Returns`,
    context: `A fish farm turns feed into harvest revenue $R(x)=A x^{\\frac{2}{3}}$ thousand euros in a season, where $x>0$ is tonnes of feed, while feed and handling cost $C(x)=30x$ thousand euros. At eight tonnes of feed, harvest revenue was three hundred and sixty thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $64$ tonnes, cost already exceeds harvest revenue.`,
      `At $8$ tonnes the season clears more than $100$ thousand euros.`,
      `Doubling feed from $8$ to $16$ tonnes doubles revenue.`,
      `An extra tonne of feed adds more revenue after $27$ tonnes than after $8$.`,
      `The extra revenue from $8$ to $27$ tonnes already exceeds $400$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The eight-tonne harvest pins the coefficient: $8^{\\frac{2}{3}}=4$, so $A=90$ and $R(x)=90x^{\\frac{2}{3}}$. Cost is linear at $30$ thousand euros per tonne. A two-thirds power is overtaken by a line once, and sixty-four tonnes already sits past that crossing.

$$
64^{\\frac{2}{3}}=16
$$

$$
R(64)=90\\cdot 16
$$

$$
R(64)=1440
$$

$$
C(64)=30\\cdot 64
$$

$$
C(64)=1920
$$

Cost $1920$ already exceeds revenue $1440$, so the statement is True.`,
      `**B.** → True

At eight tonnes revenue is the recorded $360$ thousand euros, and cost is

$$
C(8)=30\\cdot 8
$$

$$
C(8)=240
$$

$$
P(8)=360-240
$$

$$
P(8)=120
$$

One hundred and twenty exceeds one hundred, so the statement is True.`,
      `**C.** → False

Doubling feed would double revenue only if the exponent were $1$. With exponent $\\frac{2}{3}$ the scale factor is

$$
\\frac{R(16)}{R(8)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

Revenue rises, but not in lockstep with feed, so the statement is False.`,
      `**D.** → False

An extra tonne adds the derivative $R'(x)=60x^{-\\frac{1}{3}}$. The leftover exponent is negative, so each extra tonne adds less as the farm scales up.

$$
R'(8)=60\\cdot 8^{-\\frac{1}{3}}
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
R'(8)=30
$$

$$
R'(27)=60\\cdot 27^{-\\frac{1}{3}}
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
R'(27)=20
$$

The extra tonne adds less after twenty-seven tonnes than after eight, so the statement is False.`,
      `**E.** → True

Revenue at eight tonnes is $360$. At the crossing $x=27$:

$$
27^{\\frac{2}{3}}=9
$$

$$
R(27)=90\\cdot 9
$$

$$
R(27)=810
$$

$$
810-360=450
$$

Four hundred and fifty already exceeds four hundred, so the statement is True.`,
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

**1.** At $x=64$, cost $1920$ already exceeds revenue $1440$. Profit at $x=8$ is $120>100$.

**2.** Doubling $8$ to $16$ tonnes multiplies revenue by $2^{\\frac{2}{3}}\\approx 1.587$, not by $2$. $R'(8)=30>R'(27)=20$. The extra revenue from $8$ to $27$ tonnes is $450$, which already exceeds $400$.

**Answer.** $A=90$ | $P(8)=120$ | $R(64)=1440$ | $C(64)=1920$ | extra $450$`,
  },
  {
    id: `math-8-77`,
    case_id: `MATH 8.77`,
    title: `Calibrating a Handling-Cost Law From a Cost Difference`,
    context: `A distribution centre models daily handling cost by $f(x)=A x^{\\frac{3}{2}}$ euros, where $x>0$ is a pallet-volume index. The individual daily figures were lost, and the only surviving record states that the cost at index sixteen exceeds the cost at index four by three hundred and thirty-six euros. Evaluate each statement. Mark it TRUE or FALSE.`,
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

The surviving record is a difference, not a level: $f(16)-f(4)=336$. With exponent $\\frac{3}{2}$ the shape factors are $64$ and $8$, so

$$
A(64-8)=336
$$

$$
56A=336
$$

$$
A=6
$$

and handling cost is $f(x)=6x^{\\frac{3}{2}}$. Multiplying the index by $4$ would multiply cost by $4$ only if the exponent were $1$. The actual scale factor is

$$
\\frac{f(4x)}{f(x)}=4^{\\frac{3}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{3}{2}}=8
$$

Cost is multiplied by eight, not by four, so the statement is False.`,
      `**B.** → True

At index nine:

$$
9^{\\frac{3}{2}}=27
$$

$$
f(9)=6\\cdot 27
$$

$$
f(9)=162
$$

One hundred and sixty-two sits above $150$ euros, so the statement is True.`,
      `**C.** → True

The exponent $\\frac{3}{2}$ sits above one, so each extra unit of the index adds more cost than the unit before it. Index $16$ is four times $4$:

$$
4^{\\frac{3}{2}}=8
$$

$$
f(4)=6\\cdot 8
$$

$$
f(4)=48
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
f(16)=6\\cdot 64
$$

$$
f(16)=384
$$

$$
\\frac{384}{48}=8
$$

The index rose by a factor of $4$ while cost rose by a factor of $8$. Cost outruns the index, so the statement is True.`,
      `**D.** → False

Equal cost gaps would need a linear rule, exponent $1$. Handling is $f(x)=6x^{\\frac{3}{2}}$, so the slope itself still grows:

$$
f'(x)=9x^{\\frac{1}{2}}
$$

$$
f'(4)=18
$$

$$
f'(9)=27
$$

The same one-unit gap adds $18$ euros at index $4$ and $27$ euros at index $9$. Equal index gaps do not produce equal cost gaps, so the statement is False.`,
      `**E.** → False

At index nine the cost is $162$. At index twenty-five:

$$
25^{\\frac{3}{2}}=125
$$

$$
f(25)=6\\cdot 125
$$

$$
f(25)=750
$$

$$
750-162=588
$$

Five hundred and eighty-eight is not under $500$, so the statement is False.`,
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

**1.** $f(4)=48$ and $f(16)=384$, so a factor of $4$ on the index multiplies cost by $8$, not by $4$. The slope $f'(x)=9x^{\\frac{1}{2}}$ rises, so equal index gaps do not give equal cost gaps.

**2.** $f(9)=162>150$ and $f(25)-f(9)=588$, which is not under $500$.

**Answer.** $A=6$ | $f(4)=48$ | $f(9)=162$ | $f(16)=384$ | $f(25)=750$ | extra $588$`,
  },
  {
    id: `math-8-78`,
    case_id: `MATH 8.78`,
    title: `Inverting a Wastewater Load Model Against a Permit Ceiling`,
    context: `A dye-house discharges a wastewater load of $W(s)=A s^{\\frac{3}{2}}$ kilograms a day, where $s>0$ is a production scale index. At scale nine the daily load is one hundred and thirty-five kilograms. The site permit caps the daily load at three hundred and twenty kilograms, and the plant wants the largest scale it may run. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The largest admissible scale is already below $20$.`,
      `Doubling the permit ceiling doubles the admissible scale index.`,
      `If the coefficient doubled, the admissible scale under the same ceiling would be halved.`,
      `At scale index $4$ the daily load is under $50$ kilograms.`,
      `The extra load from scale $4$ to scale $9$ already exceeds the load at scale $4$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The recorded load at scale nine pins the coefficient, because $9^{\\frac{3}{2}}=27$ and $5\\cdot 27=135$. The $320$ kilogram ceiling then inverts the three-halves power:

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
s=4^{2}
$$

$$
s=16
$$

Sixteen sits below twenty. Every larger index breaches the permit, so the statement is True.`,
      `**B.** → False

Doubling the ceiling would double the admissible scale only if the inverse exponent were $1$. The inverse is $s=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}}$, so a doubled ceiling multiplies permitted scale by

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

$$
16\\cdot 2^{\\frac{2}{3}}\\approx 25.4
$$

About $25.4$ is not $32$. Doubling the ceiling does not double the admissible scale, so the statement is False.`,
      `**C.** → False

A doubled coefficient is a factor of $2$ on the output, which the inverse sends through exponent $\\frac{2}{3}$, not through exponent $1$. If the coefficient doubled to $10$, the same ceiling would solve

$$
10s^{\\frac{3}{2}}=320
$$

$$
s=16\\cdot 2^{-\\frac{2}{3}}\\approx 10.08
$$

Halving $16$ would give $8$. The admissible scale falls to about $10.08$, not to $8$, so the statement is False.`,
      `**D.** → True

At scale four:

$$
4^{\\frac{3}{2}}=8
$$

$$
W(4)=5\\cdot 8
$$

$$
W(4)=40
$$

Forty kilograms is under fifty, so the statement is True.`,
      `**E.** → True

At scale nine the load is the recorded $135$ kilograms. At scale four it is $40$. The extra is

$$
135-40=95
$$

Because $95>40$, the extra already exceeds the load at scale $4$, so the statement is True.`,
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

**1.** The binding permit gives $s=16<20$, and $W(4)=40<50$. The extra from scale $4$ to $9$ is $95$, which already exceeds $W(4)=40$.

**2.** Doubling the cap to $640$ raises the index to $16\\cdot 2^{\\frac{2}{3}}\\approx 25.4$, not to $32$. Doubling $A$ cuts the index to $16\\cdot 2^{-\\frac{2}{3}}\\approx 10.08$, not to $8$.

**Answer.** $A=5$ | largest $s=16$ | $W(4)=40$ | extra $95>40$ | doubled cap $s\\approx 25.4$`,
  },
  {
    id: `math-8-79`,
    case_id: `MATH 8.79`,
    title: `Elasticity Shortcut Against the Exact Change in Parking Demand`,
    context: `A city parking authority models hourly demand by $q(p)=A p^{-2}$ occupied spaces, where $p>0$ is the hourly tariff in euros. It records four thousand occupied spaces at a tariff of three euros. Demand of this form has constant elasticity minus two, so the usual shortcut predicts a percentage change in demand equal to minus two times the percentage change in tariff. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising the tariff by $25\\%$ leaves more than $2500$ occupied spaces.`,
      `At a tariff of $2$ euros, hourly demand exceeds $8000$ occupied spaces.`,
      `Cutting the tariff by $25\\%$ raises demand by the same percentage that a $25\\%$ rise cuts it.`,
      `The elasticity shortcut and the exact power agree on the loss from a $25\\%$ tariff rise.`,
      `The exact drop from $3$ to $3.75$ euros already exceeds $1400$ occupied spaces.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Demand at three euros is $4000$. A $25\\%$ tariff rise is the factor $\\frac{5}{4}$, and the exact multiplier raises that factor to the exponent $-2$:

$$
\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}
$$

$$
4000\\cdot\\frac{16}{25}=2560
$$

Two thousand five hundred and sixty exceeds two thousand five hundred, so the statement is True.`,
      `**B.** → True

The recorded pair $q(3)=4000$ pins

$$
A\\cdot 3^{-2}=4000
$$

$$
\\frac{A}{9}=4000
$$

$$
A=36000
$$

so $q(p)=36000p^{-2}$. At two euros:

$$
q(2)=\\frac{36000}{4}
$$

$$
q(2)=9000
$$

Nine thousand exceeds eight thousand, so the statement is True.`,
      `**C.** → False

A $25\\%$ rise multiplies demand by $\\frac{16}{25}$, a $36\\%$ loss. A $25\\%$ cut is the factor $\\frac{3}{4}$, which is not the reciprocal of $\\frac{5}{4}$ in the percentage-change sense. Raising that cut factor to $-2$ gives

$$
\\left(\\frac{3}{4}\\right)^{-2}=\\frac{16}{9}
$$

$$
\\frac{16}{9}-1=\\frac{7}{9}\\approx 0.778
$$

a rise of about $77.8\\%$, not $36\\%$. The two percentages are not the same, so the statement is False.`,
      `**D.** → False

The elasticity shortcut linearizes: it multiplies the constant elasticity $-2$ by the $25\\%$ tariff change and predicts a $50\\%$ loss. The exact power raises the finite factor $\\frac{5}{4}$ to $-2$, which keeps $64\\%$ of demand, a $36\\%$ cut. Those two methods agree only for infinitesimal changes. A $25\\%$ move is not infinitesimal, so the shortcut overstates the loss and the two figures do not match.

$$
-2\\times 25\\%=-50\\%
$$

$$
\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}
$$

$$
\\frac{16}{25}=0.64
$$

A predicted $50\\%$ against a true $36\\%$ is not agreement, so the statement is False.`,
      `**E.** → True

Demand at three euros is $4000$ and at $3.75$ euros is $2560$. The exact drop is

$$
4000-2560=1440
$$

Fourteen hundred and forty already exceeds fourteen hundred, so the statement is True.`,
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

**1.** A $25\\%$ rise has exact multiplier $0.64$, so $q(3.75)=2560>2500$. The exact drop from $3$ to $3.75$ is $1440$, which already exceeds $1400$. At $p=2$, demand is $9000>8000$.

**2.** The shortcut's $50\\%$ cut does not match the exact $36\\%$ cut. A $25\\%$ tariff cut raises demand by about $77.8\\%$, not by $36\\%$.

**Answer.** $A=36000$ | exact cut $36\\%$ for a $25\\%$ rise | $q(3.75)=2560$ | $q(2)=9000$ | drop $1440$`,
  },
  {
    id: `math-8-80`,
    case_id: `MATH 8.80`,
    title: `Geometrically Similar Bells Cast From One Pattern`,
    context: `A foundry casts geometrically similar bronze bells from a single pattern, so mass follows $M(h)=A h^{3}$ kilograms, where $h>0$ is height in metres. The pattern book omits the coefficient; it records only that a finished bell of height one half metre was weighed at thirty kilograms. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A bell of height $1.5$ m already weighs more than $700$ kg.`,
      `Doubling a bell's height doubles its mass.`,
      `A one-metre bell already weighs more than $200$ kg.`,
      `Two $1$ m bells together already fall short of one $1.5$ m bell.`,
      `Raising height from $1$ m to $2$ m adds more than $1600$ kg.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The half-metre weighing pins the coefficient. Geometric similarity cubes every linear scale, so a factor of three on height from the half-metre pattern is a factor of twenty-seven on mass, after the eight in the denominator from the original cube.

$$
A\\left(\\frac{1}{2}\\right)^{3}=30
$$

$$
A\\cdot\\frac{1}{8}=30
$$

$$
A=240
$$

so $M(h)=240h^{3}$. At one and a half metres:

$$
\\left(\\frac{3}{2}\\right)^{3}=\\frac{27}{8}
$$

$$
M\\left(\\frac{3}{2}\\right)=240\\cdot\\frac{27}{8}
$$

$$
240\\cdot\\frac{27}{8}=810
$$

Eight hundred and ten exceeds $700$ kg, so the statement is True.`,
      `**B.** → False

Doubling height would double mass only if the exponent were $1$. With exponent $3$ the scale factor is

$$
\\frac{M(2h)}{M(h)}=2^{3}
$$

$$
2^{3}=8
$$

Mass rises eightfold, not twofold. The half-metre bell of $30$ kg would become $240$ kg at one metre, not $60$ kg, so the statement is False.`,
      `**C.** → True

At one metre the cube is $1$, so the mass is the coefficient itself:

$$
M(1)=240
$$

Two hundred and forty exceeds $200$ kg, so the statement is True.`,
      `**D.** → True

Two one-metre bells weigh

$$
2\\cdot 240=480
$$

One $1.5$ m bell weighs $810$ kg, as in A. Cubing does not treat two small bells as a substitute for one large one: $2\\cdot 1^{3}=2$ while $\\left(\\frac{3}{2}\\right)^{3}=\\frac{27}{8}$. Because $480<810$, the pair already falls short, so the statement is True.`,
      `**E.** → True

At two metres:

$$
M(2)=240\\cdot 8
$$

$$
M(2)=1920
$$

$$
1920-240=1680
$$

One thousand six hundred and eighty exceeds $1600$ kg, so the statement is True.`,
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

**1.** $M(1.5)=810>700$ and $M(1)=240>200$. Two $1$ m bells weigh $480$, which already falls short of the $810$ kg bell.

**2.** Doubling height multiplies mass by $8$, not by $2$. Raising height from $1$ m to $2$ m adds $1680$ kg, which exceeds $1600$.

**Answer.** $A=240$ | $M(1)=240$ | $M(1.5)=810$ | two $1$ m bells $480<810$ | $M(2)-M(1)=1680$`,
  },
  {
    id: `math-8-81`,
    case_id: `MATH 8.81`,
    title: `Drag and Sustained Power on a Velodrome`,
    context: `Aerodynamic drag on a track cyclist follows $F(v)=A v^{r}$ newtons for speed $v>0$ metres per second, with both constants unknown. Doubling any speed multiplies drag by four, and raising speed from $8$ to $12$ m/s increased drag by exactly $40$ N. The power needed to overcome that drag is $P=Fv$ watts, and the rider can hold $500$ W for a full pursuit. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $8$ m/s the rider is still under $300$ W.`,
      `At $12$ m/s the rider is still under $800$ W.`,
      `If the rider doubles speed, absorbed power doubles.`,
      `At $8$ m/s drag is already above $30$ N.`,
      `The extra watts from $8$ to $12$ m/s already exceed $500$ W.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Doubling any speed multiplies drag by four, so $2^{r}=4$. Matching powers of two gives $r=2$. The $40$ N gap between $8$ and $12$ m/s then pins the coefficient:

$$
12^{2}-8^{2}=144-64
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

Absorbed power is drag times speed, which raises the exponent by one:

$$
P(v)=\\frac{1}{2}v^{3}
$$

At $8$ m/s:

$$
8^{3}=512
$$

$$
P(8)=\\frac{1}{2}\\cdot 512
$$

$$
P(8)=256
$$

Because $256<300$, the rider is still under $300$ W, so the statement is True.`,
      `**B.** → False

At $12$ m/s the same cubic is

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
144\\cdot 12=1728
$$

$$
P(12)=\\frac{1}{2}\\cdot 1728
$$

$$
P(12)=864
$$

$$
864>800
$$

The $8$ m/s reading was $256$ W, still under $300$. At $12$ m/s the rider is already $864$ W, which is not still under $800$ W. The $500$ W pursuit ceiling is already breached as well, so the statement is False.`,
      `**C.** → False

Doubling speed would double absorbed power only if the power exponent were $1$, because only then is $2^{r}=2$. Drag already carries exponent $2$, so doubling speed quadruples drag. Power multiplies by one extra factor of speed, which raises the exponent to $3$:

$$
\\frac{P(2v)}{P(v)}=2^{3}
$$

$$
2^{3}=8
$$

Power rises eightfold, not twofold. From $8$ m/s that would send $256$ W to $2048$ W, not to $512$ W, so the statement is False.`,
      `**D.** → True

Drag is $F(v)=\\frac{1}{2}v^{2}$, the same coefficient as power but with exponent $2$ rather than $3$. At $8$ m/s one can also recover drag as power over speed, $F=\\frac{P}{v}$:

$$
F(8)=\\frac{1}{2}\\cdot 8^{2}
$$

$$
8^{2}=64
$$

$$
F(8)=\\frac{1}{2}\\cdot 64
$$

$$
F(8)=32
$$

$$
\\frac{P(8)}{8}=\\frac{256}{8}=32
$$

$$
32>30
$$

Drag is already above $30$ N. The $300$ W bound was about power, not about this $32$ N reading. Thirty-two already clears $30$ N, so the statement is True.`,
      `**E.** → True

The extra watts are a difference of two levels of $P(v)=\\frac{1}{2}v^{3}$, not a new calibration. The $8$ m/s reading is $256$ W. Raising speed to $12$ m/s reaches $864$ W, so the add-on is

$$
P(12)-P(8)=864-256
$$

$$
864-256=608
$$

$$
608>500
$$

The extra already exceeds $500$ W. The $40$ N drag gap is not the watt gap: power multiplies drag by speed, so the watt extra outruns a naive $40\\times 8$ or $40\\times 12$, so the statement is True.`,
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

**2.** Doubling speed multiplies power by $8$, not by $2$. Drag at $8$ m/s is $F(8)=32>30$.

**3.** Levels against the thresholds:

$$P(8)=256<300, \\qquad P(12)=864>800, \\qquad P(12)-P(8)=608>500$$

**Answer.** $r=2$, $A=\\frac{1}{2}$ | $F(v)=\\frac{1}{2}v^{2}$, $P(v)=\\frac{1}{2}v^{3}$ | $P(8)=256$ W | $P(12)=864$ W | extra $608$ W`,
  },
  {
    id: `math-8-82`,
    case_id: `MATH 8.82`,
    title: `Signal Attenuation From a Buried Cable Locator`,
    context: `The signal a locator receives from a buried conductor follows $S(x)=A x^{r}$ millivolts, where $x>0$ is the burial depth in metres. Neither constant is posted. Doubling any burial depth cuts the received signal to one eighth, and a calibration run over a conductor buried at $2$ metres read $50$ millivolts. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The received signal is inversely proportional to burial depth.`,
      `Doubling burial depth halves the received signal.`,
      `A conductor buried at $4$ metres already returns under $7$ millivolts.`,
      `A reading of $3.2$ millivolts still corresponds to a burial depth of more than $8$ metres.`,
      `The drop from $2$ m to $4$ m already exceeds the remaining signal at $4$ m.`,
    ],
    answer_key: [false, false, true, false, true],
    tactical_explanations: [
      `**A.** → False

The doubling record $2^{r}=\\frac{1}{8}$ forces $r=-3$, and the $2$ m calibration $S(2)=50$ then multiplies to $S(x)=400x^{-3}$. Inverse proportionality would mean exponent $-1$: depth and signal would move in exact opposite lockstep, and doubling depth would cut the signal in half. The recovered exponent is $-3$, a cube rather than a line:

$$
2^{-1}=\\frac{1}{2}
$$

$$
2^{-3}=\\frac{1}{8}
$$

The law is inverse-cube. A conductor twice as deep returns one eighth of the signal, not one half, so the statement is False.`,
      `**B.** → False

Doubling depth would halve the signal only if the exponent were $-1$. With exponent $-3$ the scale factor is

$$
\\frac{S(2x)}{S(x)}=2^{-3}
$$

$$
2^{-3}=\\frac{1}{8}
$$

The $2$ m calibration is $50$ millivolts, so one doubling would leave

$$
S(4)=50\\cdot\\frac{1}{8}
$$

$$
S(4)=6.25
$$

Half of $50$ would have been $25$, not $6.25$. Doubling leaves one eighth of the signal, not one half, so the statement is False.`,
      `**C.** → True

Four metres is one doubling of the $2$ m calibration. Inverse-cube decay cuts the signal to one eighth:

$$
S(4)=400\\cdot 4^{-3}
$$

$$
4^{3}=64
$$

$$
S(4)=\\frac{400}{64}
$$

$$
\\frac{400}{64}=6.25
$$

$$
6.25<7
$$

The locator already reads under $7$ millivolts. The calibration $50$ millivolts at $2$ m has already been spent down to $6.25$, so the statement is True.`,
      `**D.** → False

A reading of $3.2$ millivolts inverts $S(x)=400x^{-3}$:

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

because $5^{3}=125$ and depth is positive. Five metres is not more than $8$ metres. At $8$ m the locator would already have fallen to $S(8)=\\frac{400}{512}<1$, far below $3.2$. The $3.2$ millivolt contour sits shallower than the claimed $8$ m, so the statement is False.`,
      `**E.** → True

The calibration at $2$ m is $50$ millivolts, and $S(4)=6.25$. The drop is

$$
50-6.25=43.75
$$

The remaining signal at $4$ m is $6.25$, and

$$
43.75>6.25
$$

The drop already exceeds the remaining signal. Inverse-cube decay spends seven eighths of the near-field reading on the first doubling of depth, leaving only $6.25$ millivolts, so the statement is True.`,
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

**2.** Doubling depth leaves $\\frac{1}{8}$ of the signal, not $\\frac{1}{2}$, so the law is not inverse proportionality.

**3.** Levels against the thresholds:

$$S(4)=6.25<7, \\qquad x=5\\ \\text{at}\\ S=3.2, \\qquad S(2)-S(4)=43.75>S(4)=6.25$$

**Answer.** $r=-3$, $A=400$ | $S(x)=400x^{-3}$ | $S(4)=6.25$ mV | $3.2$ mV at $x=5$ m | drop $43.75>6.25$`,
  },
  {
    id: `math-8-83`,
    case_id: `MATH 8.83`,
    title: `Oxygen Demand and Gill Area in a Hatchery`,
    context: `A hatchery models a fish's oxygen demand as $D(m)=A m^{\\frac{3}{4}}$ millilitres per hour and its gill surface area as $G(m)=B m^{\\frac{2}{3}}$ square centimetres, where $m>0$ is body mass in grams. Neither coefficient is published. An $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish, and a $64$ g fish carries $48$ square centimetres of gill. A tank's total demand is the sum of its fish's individual demands. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $256$ g fish already demands more than $300$ millilitres per hour.`,
      `$16$ fish of $16$ g together still demand under $600$ millilitres per hour.`,
      `Two $16$ g fish together have the same total gill area as one $32$ g fish.`,
      `A $16$ g fish already demands more than $35$ millilitres per hour.`,
      `Sixteen $16$ g fish together already demand more than one $256$ g fish.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

An $81$ g fish demands $95$ millilitres per hour more than a $16$ g fish. Both masses are fourth powers, so

$$
81^{\\frac{3}{4}}=27
$$

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

Demand is then $D(m)=5m^{\\frac{3}{4}}$. At $256$ g:

$$
256=4^{4}
$$

$$
256^{\\frac{3}{4}}=(4^{4})^{\\frac{3}{4}}=4^{3}
$$

$$
4^{3}=64
$$

$$
D(256)=5\\cdot 64=320
$$

Because $320>300$, the $256$ g fish already demands more than $300$ millilitres per hour, so the statement is True.`,
      `**B.** → False

A tank total is a sum of individual demands, never one application of $D$ to the pooled mass. One $16$ g fish demands

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
16\\cdot 40=640
$$

$$
640>600
$$

They do not still demand under $600$ millilitres per hour. Pooling the same $256$ g into one fish would have been only $D(256)=320$, so the sixteen small fish already overshoot both $600$ and that single large fish, so the statement is False.`,
      `**C.** → False

Gill area is $G(m)=3m^{\\frac{2}{3}}$, pinned by $G(64)=48$. The exponent $\\frac{2}{3}$ sits below one, so area grows more slowly than mass: two small fish out-area one fish of twice the mass. Directly:

$$
G(16)=3\\cdot 16^{\\frac{2}{3}}
$$

$$
16^{\\frac{2}{3}}=(2^{4})^{\\frac{2}{3}}=2^{\\frac{8}{3}}
$$

$$
2^{\\frac{8}{3}}=4\\cdot 2^{\\frac{2}{3}}
$$

$$
G(16)=12\\cdot 2^{\\frac{2}{3}}
$$

$$
2G(16)=24\\cdot 2^{\\frac{2}{3}}
$$

$$
G(32)=3\\cdot 32^{\\frac{2}{3}}=24\\cdot 2^{\\frac{1}{3}}
$$

Because $2^{\\frac{2}{3}}>2^{\\frac{1}{3}}$, the two $16$ g fish carry more gill area than the one $32$ g fish, so the statement is False.`,
      `**D.** → True

A $16$ g fish is a fourth power, so the demand is exact:

$$
D(16)=5\\cdot 16^{\\frac{3}{4}}
$$

$$
16^{\\frac{3}{4}}=(2^{4})^{\\frac{3}{4}}
$$

$$
(2^{4})^{\\frac{3}{4}}=2^{3}
$$

$$
2^{3}=8
$$

$$
D(16)=5\\cdot 8
$$

$$
D(16)=40
$$

$$
40>35
$$

The fish already demands more than $35$ millilitres per hour. The $300$ ml claim was about a $256$ g fish, not this $40$ ml reading, so the statement is True.`,
      `**E.** → True

Sixteen $16$ g fish together demand $640$ millilitres per hour. One $256$ g fish, sixteen times the mass of one small fish, demands $320$. The comparison is

$$
16\\cdot D(16)=640
$$

$$
D(256)=320
$$

$$
640>320
$$

Because $\\frac{3}{4}<1$, pooling mass into one large fish saves demand: each extra gram adds less oxygen than the gram before it. Sixteen small fish already out-demand one fish of sixteen times the mass. The tank total $640$ is twice $320$, so the statement is True.`,
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

**2.** Two $16$ g fish out-area one $32$ g fish, because $\\frac{2}{3}<1$. A tank total is a sum, never $D$ applied to a pooled mass.

**3.** Levels against the thresholds:

$$D(256)=320>300, \\qquad D(16)=40>35, \\qquad 16\\,D(16)=640>600, \\qquad 640>D(256)$$

**Answer.** $A=5$, $B=3$ | $D(256)=320$ | $D(16)=40$ | $16\\,D(16)=640$`,
  },
  {
    id: `math-8-84`,
    case_id: `MATH 8.84`,
    title: `Micro-Irrigation Flow Under a Fourth-Power Law`,
    context: `Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{k}$ litres per hour, where $r>0$ is the internal tube radius in millimetres. Neither constant is posted. Doubling any tube radius multiplies flow by $16$, and a bench test on a tube of radius $2$ mm delivered $48$ litres per hour. The designers also track the mean velocity index $\\frac{Q}{\\pi r^{2}}$, which spreads the flow across the tube's cross-section. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A tube of radius $3$ mm already delivers more than $200$ litres per hour.`,
      `Doubling the tube radius doubles the flow.`,
      `A tube of radius $1$ mm still delivers more than $10$ litres per hour.`,
      `The mean velocity index is the same in every tube.`,
      `Two $1$ mm tubes together already fall short of one $2$ mm tube.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

The doubling record $2^{k}=16$ forces $k=4$, because $2^{4}=16$. The bench test $Q(2)=48$ then divides to the coefficient:

$$
A\\cdot 2^{4}=48
$$

$$
16A=48
$$

$$
A=3
$$

Flow is $Q(r)=3r^{4}$. At radius $3$ mm:

$$
3^{2}=9
$$

$$
3^{4}=81
$$

$$
Q(3)=3\\cdot 81=243
$$

$$
243>200
$$

The tube already delivers more than $200$ litres per hour. The bench $48$ at $2$ mm already sits well below this $243$, so the statement is True.`,
      `**B.** → False

Doubling the radius would double the flow only if the exponent were $1$. With exponent $4$ the scale factor is

$$
\\frac{Q(2r)}{Q(r)}=2^{4}
$$

$$
2^{4}=16
$$

Flow rises sixteenfold, not twofold. The bench already records that jump: $1$ mm delivers $3$ litres per hour and $2$ mm delivers $48$, so the statement is False.`,
      `**C.** → False

At radius $1$ mm every power of $1$ is $1$, so the delivery equals the coefficient:

$$
Q(1)=3\\cdot 1^{4}
$$

$$
1^{4}=1
$$

$$
Q(1)=3
$$

$$
3<10
$$

The tube does not still deliver more than $10$ litres per hour. Doubling that $1$ mm bore to the bench radius $2$ mm multiplies flow by $16$, from $3$ to $48$, which is how a narrow tube can sit so far below $10$ and a slightly wider one so far above it, so the statement is False.`,
      `**D.** → False

The mean velocity index divides flow by the tube's cross-section $\\pi r^{2}$. Flow carries exponent $4$ and area carries exponent $2$, so the exponents subtract rather than cancel:

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{3r^{4}}{\\pi r^{2}}
$$

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}
$$

The leftover exponent $2$ is not zero: mean velocity still grows with the square of the radius. A wider tube is not merely a scaled copy of a narrow one at the same speed. The index is not the same in every tube, so the statement is False.`,
      `**E.** → True

Two $1$ mm tubes together deliver

$$
2\\cdot Q(1)=2\\cdot 3
$$

$$
2\\cdot 3=6
$$

One $2$ mm tube is the bench reading

$$
Q(2)=48
$$

$$
6<48
$$

The pair already falls short. Fourth-power flow rewards a single wide bore far more than two narrow ones of the same total radius, so the statement is True.`,
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

**2.** Doubling the radius multiplies flow by $16$, not by $2$. The velocity index still carries exponent $2$, so it is not the same in every tube.

**3.** Levels against the thresholds:

$$Q(3)=243>200, \\qquad Q(1)=3<10, \\qquad 2Q(1)=6<48=Q(2)$$

**Answer.** $k=4$, $A=3$ | $Q(r)=3r^{4}$ | $Q(3)=243$ L/h | $2Q(1)=6<Q(2)=48$`,
  },
  {
    id: `math-8-85`,
    case_id: `MATH 8.85`,
    title: `Barrier Distance for a Radiography Source`,
    context: `Dose rate near an industrial radiography source follows $H(d)=A d^{r}$ microsieverts per hour, where $d>0$ is the distance from the source in metres. Neither constant is posted. Quadrupling any distance cuts the dose rate to one sixteenth, and a survey meter three metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Doubling the distance from the source halves the dose rate.`,
      `The drop from $3$ metres to $6$ metres already exceeds the remaining dose at $6$ metres.`,
      `The $5$ microsievert barrier is already reached before $13$ metres.`,
      `At $6$ metres the dose rate is already under $25$ microsieverts per hour.`,
      `The barrier sits farther than $15$ metres from the source.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

Quadrupling distance cuts the dose rate to one sixteenth, so $4^{r}=\\frac{1}{16}$ and $r=-2$. Doubling is then the factor $2^{-2}$:

$$
\\frac{H(2d)}{H(d)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

A cut to one half would need exponent $-1$. Doubling leaves one quarter of the dose rate, not one half, so the statement is False.`,
      `**B.** → True

The three-metre survey reads $80$ microsieverts per hour. Six metres is one doubling, which quarters the dose rate:

$$
H(6)=80\\cdot\\frac{1}{4}=20
$$

The drop from $3$ metres to $6$ metres is

$$
80-20=60
$$

The remaining dose at $6$ metres is $20$, and $60>20$. Inverse-square decay spends three quarters of the near-field reading on the first doubling of distance, so the drop already exceeds what is left, so the statement is True.`,
      `**C.** → True

The barrier is the distance where the survey reading of $80$ has fallen to $5$. That is a sixteenth of the three-metre dose:

$$
\\frac{5}{80}=\\frac{1}{16}
$$

With exponent $-2$, a sixteenth of the dose is two doublings of distance:

$$
\\left(\\frac{d}{3}\\right)^{-2}=\\frac{1}{16}
$$

$$
\\frac{d}{3}=4
$$

$$
d=12
$$

$$
12<13
$$

The barrier sits at $12$ metres, already before $13$ metres, so the statement is True.`,
      `**D.** → True

Six metres is one doubling of the three-metre survey, where the meter read $80$ microsieverts per hour. Doubling quarters the dose rate, so

$$
H(6)=80\\cdot\\frac{1}{4}
$$

$$
H(6)=20
$$

$$
20<25
$$

The dose rate is already under $25$ microsieverts per hour. The remaining $20$ is also the figure that made the $3$ m to $6$ m drop equal $60$, so the statement is True.`,
      `**E.** → False

The barrier is where the dose rate has fallen from $80$ to $5$ microsieverts per hour:

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
d=3\\cdot 4
$$

$$
d=12
$$

Twelve metres is not farther than $15$ metres. A sixteenth of the survey reading is exactly two doublings of distance, $3\\cdot 4=12$, so the statement is False.`,
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

**2.** Doubling quarters the dose rate, not halves it. The drop $H(3)-H(6)=60$ already exceeds the remaining dose $H(6)=20$. The barrier $H=5$ sits at $d=12$, before $13$ metres.

**3.** Levels against the thresholds:

$$H(6)=20<25, \\qquad d=12<15$$

**Answer.** $r=-2$, $A=720$ | $H(d)=720d^{-2}$ | $H(6)=20$ | barrier at $d=12$ m | drop $60>20$`,
  },
  {
    id: `math-8-86`,
    case_id: `MATH 8.86`,
    title: `A Dye Plume Spreading Across a Shallow Lake`,
    context: `A tracer dye released into a shallow lake spreads as a disc whose radius follows $r(t)=A t^{\\frac{2}{3}}$ metres, with $t>0$ measured in hours since release. The survey note omits the coefficient: it records only that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At hour $8$ the plume radius is already more than $50$ metres.`,
      `The plume radius reaches $240$ metres in under $50$ hours.`,
      `Doubling the elapsed time doubles the stained area.`,
      `At hour $1$ the radius is already above $10$ metres.`,
      `The extra radius from hour $1$ to hour $8$ already exceeds $40$ metres.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The survey gap of $45$ metres between hour $1$ and hour $8$ recovers the coefficient, because $8^{\\frac{2}{3}}=4$ and $1^{\\frac{2}{3}}=1$:

$$
A(4-1)=45
$$

$$
3A=45
$$

$$
A=15
$$

The radius law is $r(t)=15t^{\\frac{2}{3}}$. At hour $8$:

$$
r(8)=15\\cdot 4
$$

$$
r(8)=60
$$

$$
60>50
$$

The plume radius is already more than $50$ metres, so the statement is True.`,
      `**B.** → False

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
16^{\\frac{3}{2}}=4^{3}
$$

$$
4^{3}=64
$$

Sixty-four hours is not under $50$ hours. The $240$ m disc is $16$ times the hour-$1$ radius of $15$ m, and a two-thirds power turns that $16$ into $64$ hours, so the statement is False.`,
      `**C.** → False

The stained area is the disc $S=\\pi r^{2}$. Squaring the radius law doubles its exponent, so $S(t)=225\\pi\\, t^{\\frac{4}{3}}$. Doubling elapsed time would double that area only if the composed exponent were $1$. The leftover $\\frac{4}{3}$ is already larger than one:

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

Area grows by about $2.52$, not by $2$. Doubling time more than doubles the stain, so the statement is False.`,
      `**D.** → True

At hour $1$ every power of $1$ is $1$, so the radius equals the coefficient $15$:

$$
r(1)=15\\cdot 1^{\\frac{2}{3}}
$$

$$
1^{\\frac{2}{3}}=1
$$

$$
r(1)=15\\cdot 1
$$

$$
r(1)=15
$$

$$
15>10
$$

The radius is already above $10$ metres. The survey gap of $45$ metres from hour $1$ to hour $8$ is consistent with this start: $15+45=60$, which is $r(8)$. A $10$ m disc would already have been passed before the first hour was logged. Fifteen metres already clears $10$, so the statement is True.`,
      `**E.** → True

The extra radius from hour $1$ to hour $8$ is the survey gap itself:

$$
r(8)-r(1)=60-15
$$

$$
60-15=45
$$

$$
45>40
$$

The extra already exceeds $40$ metres. The $45$ metres is a difference of two radii, not the level at hour $8$. Treating $45$ as $r(8)$ would have understated the hour-$8$ disc of $60$ m, so the statement is True.`,
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

**2.** $(2)$ is a power of $t$. Doubling time multiplies area by $2^{\\frac{4}{3}}\\approx 2.52$, not by $2$.

**3.** Levels against the thresholds:

$$r(8)=60>50, \\qquad r(1)=15>10, \\qquad r(8)-r(1)=45>40, \\qquad t=64\\ \\text{at}\\ r=240$$

**Answer.** $A=15$ | $r(t)=15t^{\\frac{2}{3}}$, $S(t)=225\\pi t^{\\frac{4}{3}}$ | $r(8)=60$ m | $r=240$ m at $t=64$ h | extra $45$ m`,
  },
  {
    id: `math-8-87`,
    case_id: `MATH 8.87`,
    title: `A Weir Rating Curve Rewritten in New Units`,
    context: `Discharge over a measuring weir follows $Q(h)=A h^{\\frac{3}{2}}$ cubic metres per second, where $h>0$ is the head in metres. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second. A field team wants the same rating curve rewritten with the head in centimetres, sometimes keeping discharge in cubic metres per second and sometimes reporting it in litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Switching the head to centimetres makes the new coefficient (cubic metres per second) larger than $0.02$.`,
      `A head of $1$ metre still discharges under $20$ cubic metres per second.`,
      `Doubling the head doubles the discharge.`,
      `A head of $4$ metres still discharges under $100$ cubic metres per second.`,
      `The extra discharge from $0.25$ m to $1$ m already exceeds the $0.25$ m gauging.`,
    ],
    answer_key: [false, true, false, false, true],
    tactical_explanations: [
      `**A.** → False

The gauging $Q(0.25)=2$ pins $Q=16h^{\\frac{3}{2}}$ in metres. Switching the head to centimetres is not a new weir: it is the same physical law with the substitution $h=\\frac{h_{\\mathrm{cm}}}{100}$. A power pushes that $100$ through the exponent, so the exponent $\\frac{3}{2}$ never moves and only the coefficient does. Because $\\frac{3}{2}>1$, a hundredfold smaller input shrinks the coefficient by more than a hundred:

$$
Q=16\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{\\frac{3}{2}}
$$

$$
Q=\\frac{16}{100^{\\frac{3}{2}}}h_{\\mathrm{cm}}^{\\frac{3}{2}}
$$

$$
100^{\\frac{3}{2}}=(10^{2})^{\\frac{3}{2}}
$$

$$
(10^{2})^{\\frac{3}{2}}=10^{3}
$$

$$
10^{3}=1000
$$

$$
\\frac{16}{1000}=0.016
$$

$$
0.016<0.02
$$

The new coefficient is $0.016$, which is not larger than $0.02$, so the statement is False.`,
      `**B.** → True

At a head of one metre every power of $1$ is $1$, so the discharge equals the metre-scale coefficient $16$:

$$
Q(1)=16\\cdot 1^{\\frac{3}{2}}
$$

$$
1^{\\frac{3}{2}}=1
$$

$$
Q(1)=16\\cdot 1
$$

$$
Q(1)=16
$$

$$
16<20
$$

The weir still discharges under $20$ cubic metres per second. The centimetre-scale coefficient $0.016$ is a unit change, not a new discharge: at $h=1$ the physical reading remains $16$ cubic metres per second, already under $20$ as claimed, so the statement is True.`,
      `**C.** → False

Doubling the head would double discharge only if the exponent were $1$, because only then is $2^{r}=2$. The weir exponent is $\\frac{3}{2}$, so the scale factor is already larger than $2$:

$$
\\frac{Q(2h)}{Q(h)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\cdot 2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.414
$$

$$
2\\cdot 1.414\\approx 2.828
$$

Doubling the head multiplies discharge by about $2.83$, not by $2$. From the one-metre reading of $16$ that would reach about $45$, not $32$, so the statement is False.`,
      `**D.** → False

At a head of $4$ metres the shape factor is a clean cube of two:

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
Q(4)=16\\cdot 8
$$

$$
Q(4)=128
$$

$$
128>100
$$

The weir does not still discharge under $100$ cubic metres per second. One hundred and twenty-eight already overshoots $100$, so the statement is False.`,
      `**E.** → True

The $0.25$ m gauging recorded $2$ cubic metres per second. At a head of $1$ metre the discharge equals the coefficient:

$$
Q(1)=16\\cdot 1^{\\frac{3}{2}}
$$

$$
Q(1)=16
$$

The extra discharge from $0.25$ m to $1$ m is the difference of those two levels:

$$
Q(1)-Q(0.25)=16-2
$$

$$
16-2=14
$$

$$
14>2
$$

The extra already exceeds the $0.25$ m gauging of $2$. Because $\\frac{3}{2}>1$, quadrupling the head from $0.25$ m to $1$ m more than quadruples discharge, from $2$ to $16$, so the statement is True.`,
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

**2.** Switching the head to centimetres rescales the coefficient to $\\frac{16}{100^{\\frac{3}{2}}}=\\frac{16}{1000}=0.016$, which is not larger than $0.02$. Doubling head multiplies discharge by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$.

**3.** Levels against the thresholds:

$$Q(1)=16<20, \\qquad Q(4)=128>100, \\qquad Q(1)-Q(0.25)=14>2$$

**Answer.** $A=16$ | $Q=16h^{\\frac{3}{2}}$ (m, m$^{3}$/s) | $A'=0.016$ (cm, m$^{3}$/s) | $Q(4)=128$`,
  },
  {
    id: `math-8-88`,
    case_id: `MATH 8.88`,
    title: `A Grain Dryer Calibrated From Two Recorded Ratios`,
    context: `Fuel use in a grain dryer follows $F(x)=A x^{r}$ litres per batch, where $x>0$ is the batch mass in tonnes. Neither constant is published. Doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A $10$-tonne batch already uses more than $250$ litres.`,
      `A $6$-tonne batch still uses under $100$ litres.`,
      `Doubling the batch mass doubles fuel use.`,
      `A $2$-tonne batch already uses more than $10$ litres.`,
      `The extra fuel from $2$ t to $6$ t already exceeds $90$ litres.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

A $300\\%$ rise on doubling means the new value is four times the old, so $2^{r}=4$ and $r=2$. The $96$ litre gap between $2$ tonnes and $6$ tonnes then pins $A=3$, because $6^{2}-2^{2}=32$ and $32A=96$. Fuel use is $F(x)=3x^{2}$. At $10$ tonnes:

$$
F(10)=3\\cdot 10^{2}
$$

$$
10^{2}=100
$$

$$
F(10)=3\\cdot 100=300
$$

Because $300>250$, the batch already uses more than $250$ litres, so the statement is True.`,
      `**B.** → False

At $6$ tonnes:

$$
F(6)=3\\cdot 6^{2}
$$

$$
6^{2}=36
$$

$$
F(6)=3\\cdot 36
$$

$$
F(6)=108
$$

$$
108>100
$$

The $96$ litres is the gap from $2$ tonnes, not the level at $6$ tonnes. Adding that gap to $F(2)=12$ recovers $108$, which is not still under $100$ litres. One hundred and eight already overshoots $100$, so the statement is False.`,
      `**C.** → False

Doubling mass would double fuel only if the exponent were $1$, because only then is $2^{r}=2$. With $r=2$ the scale factor is

$$
\\frac{F(2x)}{F(x)}=2^{2}
$$

$$
2^{2}=4
$$

Reading $300\\%$ as a doubling drops the baseline $100\\%$. A $300\\%$ rise means the new bill is four times the old, not twice. Fuel use is quadrupled, not doubled, so the statement is False.`,
      `**D.** → True

At $2$ tonnes:

$$
F(2)=3\\cdot 2^{2}
$$

$$
2^{2}=4
$$

$$
F(2)=3\\cdot 4
$$

$$
F(2)=12
$$

$$
12>10
$$

A $2$-tonne batch already uses more than $10$ litres. The logged $96$ litres is the extra from here to $6$ tonnes, not this $12$ litre reading. Forward check: $12+96=108$, which is $F(6)$. Twelve litres already clears $10$, and that $12$ is the baseline the $96$ litre gap is measured from, so the statement is True.`,
      `**E.** → True

The extra fuel from $2$ t to $6$ t is the logged $96$ litres, a difference of two levels of $F(x)=3x^{2}$, not a new run:

$$
F(6)-F(2)=108-12
$$

$$
108-12=96
$$

$$
96>90
$$

The extra already exceeds $90$ litres. Treating $96$ as the $6$-tonne bill would understate the add-on relative to the $2$-tonne reading of $12$, so the statement is True.`,
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

**3.** Doubling mass quadruples fuel, not doubles it. Levels against the thresholds:

$$F(10)=300>250, \\qquad F(6)=108>100, \\qquad F(2)=12>10, \\qquad F(6)-F(2)=96>90$$

**Answer.** $r=2$, $A=3$ | $F(x)=3x^{2}$ | $F(10)=300$ litres | $F(6)=108$ litres | extra $96$ litres`,
  },
  {
    id: `math-8-89`,
    case_id: `MATH 8.89`,
    title: `Kiln Flue Mass Flow into a Particulate Index`,
    context: `A kiln's flue-gas mass flow follows $m(t)=A t^{\\frac{1}{2}}$ tonnes per hour for throttle setting $t>0$, and the particulate load index is then $P(m)=\\frac{m^{4}}{16}$. A calibration at $t=9$ recorded $m=6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At throttle $25$ the mass flow is already above $8$ tonnes per hour.`,
      `An index of $81$ still requires a throttle setting above $20$.`,
      `Doubling the throttle doubles mass flow.`,
      `At throttle $9$ mass flow is already above $5$ tonnes per hour.`,
      `The extra mass flow from throttle $9$ to $25$ already exceeds $3$ tonnes per hour.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The calibration $m(9)=6$ with exponent $\\frac{1}{2}$ pins $A=2$, because $9^{\\frac{1}{2}}=3$ and $3A=6$. Mass flow is $m(t)=2t^{\\frac{1}{2}}$. At throttle $25$:

$$
m(25)=2\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
m(25)=2\\cdot 5
$$

$$
m(25)=10
$$

$$
10>8
$$

The mass flow is already above $8$ tonnes per hour. Ten already clears eight at that throttle, so the statement is True.`,
      `**B.** → False

The particulate index is $P(m)=\\frac{m^{4}}{16}$. Feeding the inner square root through that fourth power multiplies the exponents: $\\frac{1}{2}\\cdot 4=2$. The composed index collapses to $t^{2}$, because $\\frac{2^{4}}{16}=1$. An index of $81$ is therefore

$$
t^{2}=81
$$

$$
t=9
$$

because throttle is positive. Nine is not above $20$. Running the chain forward from $t=9$ returns $m=6$ and $P=\\frac{6^{4}}{16}=81$. The required throttle setting is the calibration point itself, so the statement is False.`,
      `**C.** → False

Doubling the throttle would double mass flow only if the exponent were $1$, because only then is $2^{r}=2$. Mass flow is $m(t)=2t^{\\frac{1}{2}}$, so the scale factor is

$$
\\frac{m(2t)}{m(t)}=2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.41
$$

From the calibration $m(9)=6$ that would reach about $8.5$, not $12$. Flow rises, but only by about $41\\%$, not by $100\\%$. An exact doubling would have needed exponent $1$, so the statement is False.`,
      `**D.** → True

At the calibration throttle:

$$
m(9)=2\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
m(9)=2\\cdot 3
$$

$$
m(9)=6
$$

$$
6>5
$$

Mass flow is already above $5$ tonnes per hour. The index $81$ is $P=\\frac{6^{4}}{16}$ at this same throttle, so the $5$ tonne claim is the inner reading, not the outer index. Six tonnes per hour already clears five at the logged throttle of $9$, so the statement is True.`,
      `**E.** → True

Mass flow at throttle $9$ is $6$ tonnes per hour and at throttle $25$ is $10$. The extra is

$$
m(25)-m(9)=10-6
$$

$$
10-6=4
$$

$$
4>3
$$

The extra already exceeds $3$ tonnes per hour. Square-root growth adds less and less: the jump from $9$ to $25$ is a factor $\\frac{5}{3}$ on throttle and only $4$ extra tonnes. The add-on is still $4$, which already exceeds $3$ tonnes per hour as claimed, so the statement is True.`,
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

**2.** The composed coefficient collapses, since $\\frac{2^{4}}{16}=1$, leaving $P\\circ m=t^{2}$. Doubling throttle multiplies mass flow by $2^{\\frac{1}{2}}\\approx 1.41$, not by $2$. Index $81$ occurs at $t=9$, not above $20$.

**3.** Levels against the thresholds:

$$m(25)=10>8, \\qquad m(9)=6>5, \\qquad m(25)-m(9)=4>3$$

**Answer.** $A=2$ | $m(t)=2t^{\\frac{1}{2}}$ | $P\\circ m=t^{2}$ | index $81$ at $t=9$ | extra $4$`,
  },
  {
    id: `math-8-90`,
    case_id: `MATH 8.90`,
    title: `Two Shuttle Fare Timers Under a Wait Cap`,
    context: `Two municipal shuttle apps quote wait time for a trip of distance $d>0$ kilometres. App L follows $L(d)=a d^{\\frac{1}{2}}$ minutes and App Q follows $Q(d)=k d$ minutes, with both coefficients unpublished. A logged $25$ km trip on App L quoted $20$ minutes, and a logged $100$ km trip on App Q quoted $20$ minutes. A service-level agreement caps wait at $20$ minutes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Under the $20$-minute cap, App L can serve trips longer than $30$ kilometres.`,
      `At $400$ kilometres both apps already quote more than $70$ minutes.`,
      `Doubling distance from $25$ to $50$ km doubles App L's wait.`,
      `At $25$ km App Q already quotes under $10$ minutes.`,
      `The extra App L wait from $25$ km to $100$ km already exceeds $15$ minutes.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

The $25$ km log $L(25)=20$ pins $a=4$, because $25^{\\frac{1}{2}}=5$ and $5a=20$, so $L(d)=4d^{\\frac{1}{2}}$. App L's quote increases with distance, so a $20$-minute cap becomes a cap on $d$:

$$
4d^{\\frac{1}{2}}\\le 20
$$

$$
d^{\\frac{1}{2}}\\le 5
$$

$$
d\\le 25
$$

The endpoint is attained: $L(25)=20$. Every longer trip on App L breaches the agreement. At $30$ km the quote would already be $4\\sqrt{30}>20$. Thirty kilometres sits past $25$. The cap is a hard $25$ km endpoint on App L and stops there, so the statement is False.`,
      `**B.** → True

The $100$ km log $Q(100)=20$ pins $k=\\frac{1}{5}$, so $Q(d)=\\frac{1}{5}d$. A square-root wait and a linear wait meet once on $d>0$:

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
d=400
$$

At that meeting distance both quotes are $80$ minutes:

$$
L(400)=4\\cdot 20=80
$$

$$
Q(400)=\\frac{1}{5}\\cdot 400=80
$$

Because $80>70$, both apps already quote more than $70$ minutes, so the statement is True.`,
      `**C.** → False

Doubling distance would double App L's wait only if the exponent were $1$, because only then is $2^{r}=2$. App L is a square root, so from $25$ km to $50$ km the factor is

$$
\\frac{L(50)}{L(25)}=2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.41
$$

$$
L(50)=20\\sqrt{2}
$$

$$
20\\sqrt{2}\\approx 28.3
$$

which is not $40$. Wait rises, but not in lockstep with kilometres. An exact doubling of wait would have needed exponent $1$, so the statement is False.`,
      `**D.** → True

App Q is linear: $Q(d)=\\frac{1}{5}d$, pinned by the $100$ km log of $20$ minutes. At $25$ km:

$$
Q(25)=\\frac{1}{5}\\cdot 25
$$

$$
\\frac{1}{5}\\cdot 25=5
$$

$$
5<10
$$

Five minutes already sits under $10$. App L's logged $20$ minutes at the same $25$ km is four times as long, so App Q is well inside the claimed bound. Five minutes already sits under ten, so the statement is True.`,
      `**E.** → True

App L at $25$ km is the logged $20$ minutes. At $100$ km:

$$
L(100)=4\\cdot 100^{\\frac{1}{2}}
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
L(100)=4\\cdot 10=40
$$

The extra wait is

$$
40-20=20
$$

$$
20>15
$$

The extra already exceeds $15$ minutes, so the statement is True.`,
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

**2.** The laws meet once on $d>0$, at $d=400$, where both quote $80>70$ minutes. Doubling $25$ km to $50$ km multiplies App L by $2^{\\frac{1}{2}}$, not by $2$.

**3.** App L's cap is $d\\le 25$, which does not reach $30$ km. $Q(25)=5<10$. The extra App L wait from $25$ km to $100$ km is $20>15$.

**Answer.** $a=4$, $k=\\frac{1}{5}$ | meet at $d=400$, wait $80$ min | App L cap $d=25$ | $Q(25)=5$ | extra $20$ min`,
  },
  {
    id: `math-8-91`,
    case_id: `MATH 8.91`,
    title: `Wetland Evaporation Across Three Humidity Readings`,
    context: `A field team models wetland evaporation in millimetres per day by $E(h)=A h^{r}$ against humidity deficit $h>0$, with both constants unknown. Deficits of one and four recorded twenty and forty millimetres per day, and a third reading at deficit nine recorded sixty. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After a humidity deficit of $25$, evaporation is already more than $90$ millimetres per day.`,
      `Doubling the humidity deficit doubles evaporation.`,
      `To double the forty-millimetre reading she must already exceed $10$ of deficit.`,
      `After a deficit of $4$, evaporation is still under $35$ millimetres per day.`,
      `The extra evaporation from deficit $1$ to $4$ already exceeds $15$ millimetres per day.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The two readings $E(1)=20$ and $E(4)=40$ force $4^{r}=2$, so $r=\\frac{1}{2}$ and $E(h)=20h^{\\frac{1}{2}}$. After a humidity deficit of $25$:

$$
E(25)=20\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
E(25)=20\\cdot 5
$$

$$
E(25)=100
$$

$$
100>90
$$

Evaporation is $100$ millimetres per day, already more than $90$, so the statement is True.`,
      `**B.** → False

Doubling the deficit would double evaporation only if the exponent were $1$. With $r=\\frac{1}{2}$ the scale factor is

$$
\\frac{E(2h)}{E(h)}=2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}\\approx 1.41
$$

which is not $2$. Evaporation rises, but not in lockstep with humidity, so the statement is False.`,
      `**C.** → True

The forty-millimetre reading sits at deficit $4$. Doubling that output asks for $80$ millimetres per day, not for a doubled deficit. Because the exponent is $\\frac{1}{2}$, humidity must be squared to double evaporation, so the jump is a factor of four rather than two:

$$
20h^{\\frac{1}{2}}=80
$$

$$
h^{\\frac{1}{2}}=4
$$

$$
h=16
$$

$$
16>10
$$

Sixteen already exceeds $10$. A doubled deficit would have been only $8$, so she must already exceed $10$ of deficit, so the statement is True.`,
      `**D.** → False

At deficit $4$ the logged evaporation is already $40$:

$$
E(4)=40
$$

$$
40>35
$$

Forty millimetres per day is not still under $35$, so the statement is False.`,
      `**E.** → True

The extra from deficit $1$ to $4$ is the gap between two logged evaporations, $40$ minus $20$, not a fresh evaluation of the square-root law. That add-on is $20$ millimetres per day. The claim asks whether this extra already exceeds $15$, not whether it exceeds the original $20$-millimetre record. Because $r=\\frac{1}{2}<1$ evaporation grows more slowly than the deficit, but the recorded jump is still larger than the $15$-millimetre floor.

$$
E(4)-E(1)=40-20
$$

$$
40-20=20
$$

$$
20>15
$$

The extra is $20$ millimetres per day, which already exceeds $15$, so the statement is True.`,
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

**1.** $E(25)=100>90$. $E(4)=40$, which is not under $35$. Doubling the deficit multiplies evaporation by $2^{\\frac{1}{2}}$, not by $2$.

**2.** Doubling the forty-millimetre reading needs $h=16$, which already exceeds $10$. The extra from deficit $1$ to $4$ is $20$, which already exceeds $15$.

**Answer.** $A=20$ | $r=\\frac{1}{2}$ | $E(25)=100$ | $h=16$ to double $E(4)$ | extra $20$`,
  },
  {
    id: `math-8-92`,
    case_id: `MATH 8.92`,
    title: `Shade-Tree Cooling Benefit Against Upkeep Cost`,
    context: `A city parks office models annual cooling benefit by $B(n)=A n^{\\frac{1}{2}}$ thousand euros and annual upkeep by $C(n)=k n$ thousand euros, where $n>0$ is the number of thousand trees planted. Raising the planting from four thousand trees to nine thousand increased cooling benefit by twelve thousand euros. At nine thousand trees, upkeep was eighteen thousand euros. Net benefit is $N(n)=B(n)-C(n)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At nine thousand trees, net benefit is already more than $15$ thousand euros.`,
      `At four thousand trees, net benefit is already more than $20$ thousand euros.`,
      `Doubling the planting from $4$ to $8$ thousand trees doubles net benefit.`,
      `Once upkeep overtakes cooling benefit, the net at $36$ thousand trees is already under $5$.`,
      `The extra net from $4$ to $9$ thousand trees already falls short of $5$ thousand euros.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Cooling rose by $12$ between four and nine thousand trees, so $A(3-2)=12$ and $A=12$. Upkeep at nine thousand was $18$, so $k=2$ and $N(n)=12n^{\\frac{1}{2}}-2n$. At nine thousand trees:

$$
N(9)=12\\cdot 3-2\\cdot 9
$$

$$
N(9)=36-18
$$

$$
N(9)=18
$$

$$
18>15
$$

Net benefit is $18$ thousand euros, already more than $15$, so the statement is True.`,
      `**B.** → False

At four thousand trees:

$$
N(4)=12\\cdot 2-2\\cdot 4
$$

$$
N(4)=24-8
$$

$$
N(4)=16
$$

$$
16<20
$$

Net is $16$ thousand euros, which is not more than $20$, so the statement is False.`,
      `**C.** → False

Net benefit is not a single power of the planting, so doubling $n$ does not double $N$. Doubling would need a homogeneous degree-$1$ law. From $N(4)=16$, a doubled net would be $32$, but at eight thousand trees:

$$
N(8)=12\\cdot 8^{\\frac{1}{2}}-2\\cdot 8
$$

$$
8^{\\frac{1}{2}}=2\\sqrt{2}
$$

$$
N(8)=24\\sqrt{2}-16
$$

$$
24\\sqrt{2}-16\\approx 17.94
$$

$$
17.94\\neq 32
$$

The net barely moves, rather than doubling, so the statement is False.`,
      `**D.** → True

Upkeep overtakes cooling at the unique positive root of $12n^{\\frac{1}{2}}=2n$. That is a two-curve crossing, not a power-function zero: square-root benefit is overtaken by linear cost exactly once. After cancelling $2n^{\\frac{1}{2}}$ for $n>0$, the root is $n=36$. Net benefit there is already $0$, which sits under $5$. Past that crossing the derivative $N'(n)=6n^{-\\frac{1}{2}}-2$ stays negative, so the net cannot climb back above zero.

$$
12n^{\\frac{1}{2}}=2n
$$

$$
6=n^{\\frac{1}{2}}
$$

$$
n=36
$$

$$
N(36)=12\\cdot 6-2\\cdot 36
$$

$$
N(36)=0
$$

$$
0<5
$$

Once upkeep overtakes cooling, the net at $36$ thousand trees is already under $5$, so the statement is True.`,
      `**E.** → True

The extra net from four thousand to nine thousand trees is

$$
N(9)-N(4)=18-16
$$

$$
18-16=2
$$

$$
2<5
$$

The extra is $2$ thousand euros, which already falls short of $5$, so the statement is True.`,
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

**1.** $N(9)=18>15$ and $N(4)=16$, which is not more than $20$. Doubling from $4$ to $8$ thousand trees gives $N(8)=24\\sqrt{2}-16\\approx 17.94$, not $32$.

**2.** The schedules meet at $n=36$, where $N(36)=0<5$. The extra from $4$ to $9$ is $2$, which falls short of $5$.

**Answer.** $A=12$ | $k=2$ | $N(9)=18$ | $N(4)=16$ | $N(36)=0$ | extra $2$`,
  },
  {
    id: `math-8-93`,
    case_id: `MATH 8.93`,
    title: `Trail-Map Kiosk Demand Inverted from Price`,
    context: `Weekly pamphlet demand at a trail-map kiosk follows $q(p)=A p^{-2}$ packs per week, where $p>0$ is the price in euros. At a price of five euros the kiosk sold eighty packs. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $10$ euros the kiosk already sells under $25$ packs a week.`,
      `A target of $125$ packs a week needs a price above $5$ euros.`,
      `Doubling the five-euro price halves weekly demand.`,
      `At $5$ euros weekly revenue already exceeds $350$.`,
      `The demand drop from $5$ to $10$ euros already exceeds $50$ packs.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

At five euros the kiosk sold eighty packs, so $A\\cdot 5^{-2}=80$ and $A=2000$. Ten euros is twice five, so demand scales by $2^{-2}$:

$$
q(10)=80\\cdot 2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

$$
q(10)=20
$$

$$
20<25
$$

Weekly sales are $20$ packs, already under $25$, so the statement is True.`,
      `**B.** → False

A target of $125$ packs inverts $q=2000p^{-2}$. Because the exponent is $-2$, a larger demand requires a smaller price, not a larger one. The unique positive price that moves $125$ packs sits below the recorded five euros, so the kiosk must cut the price rather than raise it.

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
p=4
$$

$$
4<5
$$

Four euros is not above five, so the statement is False.`,
      `**C.** → False

Doubling the price would halve demand only if the exponent were $-1$. With exponent $-2$ the scale factor is

$$
\\frac{q(2p)}{q(p)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

Demand falls to one quarter, not to one half, so the statement is False.`,
      `**D.** → True

Weekly revenue at the recorded five-euro price is

$$
R(5)=5\\cdot 80
$$

$$
R(5)=400
$$

$$
400>350
$$

The till is $400$, already above $350$, so the statement is True.`,
      `**E.** → True

From five euros to ten euros demand falls from $80$ to $20$:

$$
80-20=60
$$

$$
60>50
$$

The drop is $60$ packs, which already exceeds $50$, so the statement is True.`,
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

**1.** $q(10)=20<25$. A target of $125$ packs requires $p=4$, which is not above $5$. Doubling price multiplies demand by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$.

**2.** $R(5)=400>350$. The demand drop from $5$ to $10$ euros is $60$, which already exceeds $50$.

**Answer.** $A=2000$ | $q(10)=20$ | $p=4$ for $125$ packs | $R(5)=400$ | drop $60$`,
  },
  {
    id: `math-8-94`,
    case_id: `MATH 8.94`,
    title: `Bike-Share Passes Under a Subsidy Price Index`,
    context: `Weekly bike-share day-pass sales follow $q(p)=A p^{\\frac{-3}{2}}$ when the pass price is $p>0$ euros. A pilot at sixteen euros sold fifty passes. Policy indexes the pass by $p(s)=B s^{\\frac{2}{3}}$ for a positive subsidy index $s$, and at subsidy index eight the posted price is sixteen euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At subsidy index $8$, composed demand is already more than $40$ passes.`,
      `At subsidy index $27$, composed demand stays under $16$ passes.`,
      `Tripling the subsidy index triples composed demand.`,
      `Raising the subsidy index raises composed demand.`,
      `The demand drop from subsidy $8$ to $27$ already exceeds $30$ passes.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

At subsidy index $8$ the policy posts the pilot price of $16$ euros, and the pilot sold fifty passes at that price.

$$
q(p(8))=50
$$

$$
50>40
$$

Composed demand is $50$ passes, already more than $40$, so the statement is True.`,
      `**B.** → True

Composed demand multiplies the two given exponents: $\\frac{2}{3}$ from the price index and $-\\frac{3}{2}$ from sales. The product is $-1$, so the subsidy index enters as a reciprocal, $q(p(s))=\\frac{400}{s}$. At $s=8$ that monomial recovers the recorded $50$ passes. At $s=27$ the same reciprocal is a little under $15$, which stays under $16$.

$$
\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)=-1
$$

$$
q(p(27))=\\frac{400}{27}
$$

$$
\\frac{400}{27}\\approx 14.81
$$

$$
14.81<16
$$

Composed demand is about $14.81$ passes, which stays under $16$, so the statement is True.`,
      `**C.** → False

The subsidy exponent is already $-1$, so tripling the index multiplies demand by $3^{-1}$:

$$
\\frac{q(p(3s))}{q(p(s))}=3^{-1}
$$

$$
3^{-1}=\\frac{1}{3}
$$

Demand falls to a third rather than tripling, so the statement is False.`,
      `**D.** → False

Because the composed exponent is $-1$, a larger index cuts weekly pass sales rather than lifting them. The price map $p(s)=4s^{\\frac{2}{3}}$ does rise with $s$, but demand then applies a negative power large enough to flip the sign. For every $k>1$,

$$
\\frac{q(p(ks))}{q(p(s))}=k^{-1}
$$

and that factor is smaller than $1$. Raising the subsidy index lowers composed demand, so the statement is False.`,
      `**E.** → True

Composed demand is $50$ at $s=8$ and $\\frac{400}{27}$ at $s=27$:

$$
50-\\frac{400}{27}
$$

$$
\\frac{1350}{27}-\\frac{400}{27}=\\frac{950}{27}
$$

$$
\\frac{950}{27}\\approx 35.19
$$

$$
35.19>30
$$

The drop is about $35.19$ passes, which already exceeds $30$, so the statement is True.`,
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

**1.** $q(p(8))=50>40$. At $s=27$, composed demand is $\\frac{400}{27}\\approx 14.81<16$.

**2.** $(2)$ has exponent $-1$, so tripling $s$ divides demand by $3$ and raising $s$ lowers demand. The drop from $8$ to $27$ is about $35.19$, which already exceeds $30$.

**Answer.** $A=3200$ | $B=4$ | $q\\circ p=\\frac{400}{s}$ | $q(p(8))=50$ | drop $\\approx 35.19$`,
  },
  {
    id: `math-8-95`,
    case_id: `MATH 8.95`,
    title: `Overnight Loaves Split Across Two Oven Lines`,
    context: `A regional bakery must bake thirty thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index follows $C_{1}(q)=a q^{2}$ and line 2's follows $C_{2}(q)=b q^{2}$, where $q$ is that line's own output in thousands of loaves. A ten-thousand-loaf run on line 1 scored one hundred, and an eight-thousand-loaf run on line 2 scored sixteen. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Sending all thirty thousand loaves to line 2 scores more than $200$.`,
      `The six-and-twenty-four split scores under $200$.`,
      `Concentrating the whole order on the cheaper line is the cheapest plan.`,
      `Line 1's average cost index falls as its own output rises.`,
      `Two batches of $12$ thousand on line 2 together already fall short of one batch of $24$ thousand on line 2.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

A ten-thousand-loaf run on line 1 scored $100$, so $a=1$. An eight-thousand-loaf run on line 2 scored $16$, so $b=\\frac{1}{4}$. Sending the whole overnight order to line 2 is

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
C_{2}(30)=225
$$

$$
225>200
$$

The corner scores $225$, already more than $200$, so the statement is True.`,
      `**B.** → True

Six thousand on line 1 and twenty-four thousand on line 2 cost

$$
C_{1}(6)=6^{2}=36
$$

$$
C_{2}(24)=\\frac{1}{4}\\cdot 24^{2}
$$

$$
24^{2}=576
$$

$$
C_{2}(24)=144
$$

$$
36+144=180
$$

$$
180<200
$$

The split scores $180$, which is under $200$, so the statement is True.`,
      `**C.** → False

Quadratic costs make a large run on the cheaper line expensive at the margin. Equalizing the two derivatives $C_{1}'(q)=2q$ and $C_{2}'(q)=\\frac{1}{2}q$ forces $q_{2}=4q_{1}$. With thirty thousand loaves to place, that split is $6$ and $24$, scoring $180$. Dumping everything on line 2, the cheaper line, scores $225$. Spreading the overnight order still beats the corner, because the square grows so fast that one overloaded line costs more than two moderate ones.

$$
q_{1}+4q_{1}=30
$$

$$
q_{1}=6, \\qquad q_{2}=24
$$

$$
180<225
$$

The cheaper-line corner is not the cheapest plan, so the statement is False.`,
      `**D.** → False

Line 1 is $C_{1}(q)=q^{2}$. Average cost divides by own output:

$$
\\frac{C_{1}(q)}{q}=q
$$

The leftover exponent is $+1$, so the average rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$, so the statement is False.`,
      `**E.** → True

Two batches of $12$ thousand on line 2 are $2C_{2}(12)$, not $C_{2}(24)$:

$$
C_{2}(12)=\\frac{1}{4}\\cdot 12^{2}=36
$$

$$
2\\cdot 36=72
$$

$$
C_{2}(24)=144
$$

$$
72<144
$$

The two smaller batches already fall short of one batch of $24$ thousand, so the statement is True.`,
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

**1.** All on line 2 costs $225>200$. The equal-marginal split is $6$ and $24$, costing $180<200$. That split beats the cheaper-line corner, so concentrating is not cheapest.

**2.** Line 1's average cost is $q$, which rises with own output. Two runs of $12$ on line 2 cost $72$, which falls short of one run of $24$ at $144$.

**Answer.** $a=1$ | $b=\\frac{1}{4}$ | all on line 2 costs $225$ | $6$ and $24$ costs $180$ | two $\\times 12$ costs $72$`,
  },
  {
    id: `math-8-96`,
    case_id: `MATH 8.96`,
    title: `Museum Tickets: Point Elasticity Versus a Finite Rise`,
    context: `Evening museum admissions follow $q(p)=A p^{-2}$ tickets when the price is $p>0$ euros. At ten euros the desk sold forty tickets. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising the price from $10$ to $12$ euros cuts demand by more than $10$ tickets.`,
      `At $5$ euros the desk already sells more than $150$ tickets.`,
      `Weekly revenue is maximized by raising the price without bound.`,
      `At $10$ euros the desk already sells more than $35$ tickets.`,
      `The exact drop from $10$ to $12$ euros already exceeds the $10\\%$ shortcut of $4$ tickets.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The desk record $q(10)=40$ pins $A=4000$, so $q(p)=4000p^{-2}$. At twelve euros:

$$
q(12)=\\frac{4000}{12^{2}}
$$

$$
12^{2}=144
$$

$$
q(12)=\\frac{4000}{144}=\\frac{250}{9}
$$

$$
\\frac{250}{9}\\approx 27.78
$$

$$
40-\\frac{250}{9}=\\frac{110}{9}\\approx 12.22
$$

$$
12.22>10
$$

The cut is about $12.22$ tickets, more than $10$, so the statement is True.`,
      `**B.** → True

Five euros is half of ten, so demand scales by $\\left(\\frac{1}{2}\\right)^{-2}$:

$$
q(5)=40\\cdot 4
$$

$$
q(5)=160
$$

$$
160>150
$$

The desk sells $160$ tickets, already more than $150$, so the statement is True.`,
      `**C.** → False

Revenue is price times demand:

$$
R(p)=p\\cdot 4000p^{-2}
$$

$$
R(p)=\\frac{4000}{p}
$$

The leftover exponent is $-1$, so the till shrinks as the price rises. As $p$ grows without bound, $R(p)\\to 0$. A maximum would need a turning point or a positive leftover exponent; this schedule has neither. Raising the price without bound drives weekly revenue toward zero, so the statement is False.`,
      `**D.** → True

At ten euros the desk recorded forty tickets.

$$
40>35
$$

Forty already exceeds $35$, so the statement is True.`,
      `**E.** → True

A $10\\%$ shortcut applied to the recorded $40$ tickets would predict a drop of only $4$ tickets. That linear slice ignores the inverse-square law: raising the price from $10$ to $12$ is a $20\\%$ rise, and $p^{-2}$ cuts tickets by more than $10$, not by $10\\%$ of the starting count. The exact reading at $12$ euros is $\\frac{250}{9}\\approx 27.78$, so the drop is about $12.22$. The claim is only that this exact drop already exceeds the $4$-ticket shortcut.

$$
40-\\frac{250}{9}=\\frac{110}{9}
$$

$$
\\frac{110}{9}\\approx 12.22
$$

$$
12.22>4
$$

The exact drop already exceeds the $10\\%$ shortcut of $4$ tickets, so the statement is True.`,
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

**1.** $q(12)=\\frac{250}{9}$, a cut of $\\frac{110}{9}\\approx 12.22>10$ tickets. $q(5)=160>150$ and $q(10)=40>35$.

**2.** $(2)$ falls with price, so raising the price without bound drives revenue to $0$. The exact drop already exceeds the $10\\%$ shortcut of $4$ tickets.

**Answer.** $A=4000$ | $q(12)=\\frac{250}{9}$ | exact cut $\\approx 12.22$ | $q(5)=160$ | $q(10)=40$`,
  },
  {
    id: `math-8-97`,
    case_id: `MATH 8.97`,
    title: `Annealing Lehr Throughput Under a Mis-Scaled Coefficient`,
    context: `A glass-annealing lehr's throughput follows $T(e)=A e^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at belt setting four delivered sixty-four trays an hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At belt setting $9$, throughput is already more than $200$ trays per hour.`,
      `If the coefficient were $25\\%$ larger, throughput at setting $9$ would already exceed $250$ trays per hour.`,
      `If the coefficient were $25\\%$ larger, the scale factor T(2e)/T(e) would itself become $25\\%$ larger.`,
      `Doubling the belt setting doubles throughput.`,
      `The extra throughput from setting $4$ to $9$ already exceeds $140$ trays per hour.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The recorded run $T(4)=64$ pins $A=8$, because $4^{\\frac{3}{2}}=8$. At belt setting $9$:

$$
T(9)=8\\cdot 9^{\\frac{3}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
9^{\\frac{3}{2}}=27
$$

$$
T(9)=8\\cdot 27=216
$$

$$
216>200
$$

Throughput is $216$ trays per hour, already more than $200$, so the statement is True.`,
      `**B.** → True

Throughput at belt setting $9$ is $216$ trays per hour. A $25\\%$ larger coefficient multiplies that reading by $1.25$:

$$
T_{c}(9)=1.25\\cdot 216
$$

$$
1.25\\cdot 216=270
$$

$$
270>250
$$

Throughput would be $270$ trays per hour, already above $250$, so the statement is True.`,
      `**C.** → False

A doubling ratio puts the coefficient in both the numerator and the denominator, so $A$ cancels. Enlarging $A$ by $25\\%$ enlarges every level, including $T(2e)$ and $T(e)$, by the same factor. Their ratio is still $2^{\\frac{3}{2}}$. Levels move by $25\\%$ and doubling ratios do not: the factor $1.25$ never survives the quotient, so the scale factor itself does not become $25\\%$ larger.

$$
\\frac{T(2e)}{T(e)}=2^{\\frac{3}{2}}
$$

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=\\frac{1.25 A (2e)^{\\frac{3}{2}}}{1.25 A e^{\\frac{3}{2}}}
$$

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=2^{\\frac{3}{2}}
$$

The scale factor is unchanged, so the statement is False.`,
      `**D.** → False

Doubling the belt setting would double throughput only if the exponent were $1$. With exponent $\\frac{3}{2}$ the scale factor is

$$
\\frac{T(2e)}{T(e)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83
$$

which is not $2$. Throughput more than doubles, so the statement is False.`,
      `**E.** → True

Throughput is $T(4)=64$ and $T(9)=216$. The extra is

$$
216-64=152
$$

$$
152>140
$$

The extra is $152$ trays per hour, which already exceeds $140$, so the statement is True.`,
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

**1.** $T(9)=216>200$. A $25\\%$ larger coefficient raises that reading to $270>250$, but $(2)$ is independent of $A$, so the doubling factor $2^{\\frac{3}{2}}$ does not become $25\\%$ larger.

**2.** Doubling the belt setting multiplies throughput by $2^{\\frac{3}{2}}$, not by $2$. The extra from $4$ to $9$ is $152$, which already exceeds $140$.

**Answer.** $A=8$ | $T(9)=216$ | $T_{c}(9)=270$ | extra $152$ | doubling factor $2^{\\frac{3}{2}}$`,
  },
];
