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
      `The exponent is smaller than one, so harvest grows more slowly than watering time.`,
      `If she doubles the watering time, she doubles the harvest.`,
      `To double the $4$-kilogram harvest she must more than double the watering time.`,
      `An extra hour adds more crop after $27$ hours of watering than it does after $8$.`,
      `The watering time needed for a given harvest is itself a power function of that harvest.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The two harvests give $r=\\frac{1}{3}$. An exponent smaller than one means harvest grows more slowly than watering time: each extra hour adds less than the hour before it. One third is below one, so the statement is True.`,
      `**B.** → False

The two harvests give $r=\\frac{1}{3}$. Doubling hours would double harvest only if $r=1$. The scale factor is

$$
\\frac{Y(2h)}{Y(h)}=2^{r}
$$

$$
2^{r}=2^{\\frac{1}{3}}
$$

The cube root of two is about $1.26$, not $2$. The harvest rises, but not in lockstep with the clock, so the statement is False.`,
      `**C.** → True

The recovered law is $Y=2h^{\\frac{1}{3}}$. Doubling the recorded $4$ kilograms means a harvest of $8$:

$$
2h^{\\frac{1}{3}}=8
$$

$$
h^{\\frac{1}{3}}=4
$$

$$
h=64
$$

The recorded watering time is $8$ hours, and $64=8\\cdot 8$, not $2\\cdot 8$. She must multiply hours by $8$, which is more than a doubling, so the statement is True.`,
      `**D.** → False

The recovered law is $Y=2h^{\\frac{1}{3}}$. An extra hour is the slope:

$$
Y'(h)=2\\cdot\\frac{1}{3}h^{-\\frac{2}{3}}
$$

$$
Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}}
$$

After $8$ hours:

$$
Y'(8)=\\frac{2}{3}\\cdot 8^{-\\frac{2}{3}}
$$

$$
8^{-\\frac{2}{3}}=\\frac{1}{4}
$$

$$
Y'(8)=\\frac{2}{3}\\cdot\\frac{1}{4}
$$

$$
Y'(8)=\\frac{1}{6}
$$

After $27$ hours:

$$
Y'(27)=\\frac{2}{3}\\cdot 27^{-\\frac{2}{3}}
$$

$$
27^{-\\frac{2}{3}}=\\frac{1}{9}
$$

$$
Y'(27)=\\frac{2}{3}\\cdot\\frac{1}{9}
$$

$$
Y'(27)=\\frac{2}{27}
$$

$$
\\frac{2}{27}<\\frac{1}{6}
$$

An extra hour adds less crop after $27$ hours than after $8$, not more. The exponent is below one, so the slope is already falling, so the statement is False.`,
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

Wait is then $W(n)=48 n^{-\\frac{1}{2}}$. With $9$ agents:

$$
W(9)=48\\cdot 9^{-\\frac{1}{2}}
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
W(16)=48\\cdot\\frac{1}{4}
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

The recovered law is $W=48 n^{-\\frac{1}{2}}$. A $6$-minute wait means

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

$$
64>50
$$

The inversion asks for $64$ agents, which sits past the $50$-agent cap, so the statement is True.`,
      `**C.** → True

The recovered law is $W=48 n^{-\\frac{1}{2}}$. With $36$ agents the square root is $6$:

$$
W(36)=48\\cdot 36^{-\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
36^{-\\frac{1}{2}}=\\frac{1}{6}
$$

$$
W(36)=48\\cdot\\frac{1}{6}
$$

$$
W(36)=8
$$

$$
8<10
$$

Callers wait $8$ minutes, which is under $10$, so the statement is True.`,
      `**D.** → False

The recovered law is $W=48 n^{-\\frac{1}{2}}$. Doubling the recorded team of $4$ puts $8$ agents on duty:

$$
W(8)=48\\cdot 8^{-\\frac{1}{2}}
$$

$$
8^{\\frac{1}{2}}=2\\sqrt{2}
$$

$$
W(8)=\\frac{48}{2\\sqrt{2}}
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

Half of the recorded $24$-minute wait is $12$. The wait falls only to about $16.97$ minutes, not to $12$, so the statement is False.`,
      `**E.** → False

The recovered law is $W=48 n^{-\\frac{1}{2}}$. An $8$-minute wait means

$$
48 n^{-\\frac{1}{2}}=8
$$

$$
\\frac{48}{\\sqrt{n}}=8
$$

$$
\\sqrt{n}=\\frac{48}{8}
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
      `Omar overtakes Leah before they reach $10$ metres.`,
      `Once Omar is ahead, he stays ahead at every greater depth.`,
      `The two wells together still follow a single power of depth.`,
      `Omar's flow grows faster than depth.`,
    ],
    answer_key: [true, true, true, false, true],
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

Leah's well is $Q_{L}(d)=4d^{\\frac{1}{2}}$. At $4$ metres the square root is $2$:

$$
Q_{L}(4)=4\\cdot 4^{\\frac{1}{2}}
$$

$$
Q_{L}(4)=4\\cdot 2
$$

$$
Q_{L}(4)=8
$$

$$
8>7
$$

Those $8$ litres a minute already clear $7$, so the statement is True.`,
      `**B.** → True

Omar's $4$-metre record pins his coefficient:

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
8k=4
$$

$$
k=\\frac{1}{2}
$$

The wells are $Q_{L}(d)=4d^{\\frac{1}{2}}$ and $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$. They meet when

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

$$
8<10
$$

The crossing at $8$ metres is shallower than $10$, so the statement is True.`,
      `**C.** → True

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
      `**D.** → False

The two wells give $4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$. The exponents $\\frac{1}{2}$ and $\\frac{3}{2}$ are different, and both coefficients are nonzero. A sum of distinct powers is not itself a power of depth, so the statement is False.`,
      `**E.** → True

Omar's well is $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$. An exponent larger than one means flow grows faster than depth: each extra metre adds more than the metre before it. $\\frac{3}{2}$ exceeds one, so the statement is True.`,
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

The two invoices isolate both unknowns. Subtracting cancels the setup:

$$
(F+8A)-(F+4A)=450-250
$$

$$
4A=200
$$

$$
A=50
$$

The $16$-copy invoice then pins $F$:

$$
F+4\\cdot 50=250
$$

$$
F+200=250
$$

$$
F=50
$$

The bill is $C(n)=50+50 n^{\\frac{1}{2}}$. A power of the run cannot carry a leftover constant. The setup is $50$ euros, not zero, so the statement is True.`,
      `**B.** → False

The bill is $C(n)=50+50 n^{\\frac{1}{2}}$. Both the setup and the coefficient are positive, so every extra copy raises the square-root term and the bill cannot fall, so the statement is False.`,
      `**C.** → True

Cost per copy is

$$
\\frac{C(n)}{n}=\\frac{50+50 n^{\\frac{1}{2}}}{n}
$$

$$
\\frac{C(n)}{n}=\\frac{50}{n}+50 n^{-\\frac{1}{2}}
$$

The setup is spread over more copies, and the square-root charge per copy also falls, so the statement is True.`,
      `**D.** → True

At $25$ copies the square root is $5$:

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
C(25)=300
$$

$$
300>280
$$

The bill is $300$ euros, already above $280$, so the statement is True.`,
      `**E.** → False

At $36$ copies the square root is $6$:

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
C(36)=350
$$

$$
350<400
$$

$350$ is not more than $400$, so the statement is False.`,
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

The audit is a difference of two metal outputs:

$$
A\\bigl(16^{\\frac{3}{2}}-9^{\\frac{3}{2}}\\bigr)=296
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
37A=296
$$

$$
A=8
$$

Metal is $M(u)=8 u^{\\frac{3}{2}}$. Strength composes with that law. The $\\frac{3}{2}$ and $\\frac{2}{3}$ cancel, leaving a multiple of purity:

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

Strength is twice purity, so the statement is True.`,
      `**B.** → False

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
u=25
$$

They meet at purity $25$, so the statement is False.`,
      `**C.** → False

A power of purity has the form $c u^{p}$, so it cannot carry a leftover constant. The rival quote is $1.8u+5$, and at purity zero that quote still equals $5$. The intercept kills the power, so the statement is False.`,
      `**D.** → True

The two stages give $S(u)=2u$. At purity $36$:

$$
S(36)=2\\cdot 36
$$

$$
S(36)=72
$$

$$
72>70
$$

$72$ is more than $70$, so the statement is True.`,
      `**E.** → False

The two stages give $S(u)=2u$. At purity $9$:

$$
S(9)=2\\cdot 9
$$

$$
S(9)=18
$$

$$
18<20
$$

$18$ is not above $20$, so the statement is False.`,
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

The $8$-job run then pins $A$:

$$
A\\cdot 8^{2}=32
$$

$$
A\\cdot 64=32
$$

$$
A=\\frac{1}{2}
$$

Peak load is $L(x)=\\frac{1}{2}x^{2}$. Raising the job count from $8$ to $16$:

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

$$
128-32=96
$$

$$
96>32
$$

The added load is $96$, which already exceeds the recorded peak of $32$, so the statement is True.`,
      `**B.** → False

The recovered law is $L=\\frac{1}{2}x^{2}$. At $16$ jobs:

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
128<200
$$

The peak is $128$, still below the alarm of $200$, so the statement is False.`,
      `**C.** → True

The recovered law is $L=\\frac{1}{2}x^{2}$. Load per job is $\\frac{L(x)}{x}=\\frac{1}{2}x$. At $8$ jobs:

$$
\\frac{L(8)}{8}=\\frac{1}{2}\\cdot 8
$$

$$
\\frac{L(8)}{8}=4
$$

At $16$ jobs:

$$
\\frac{L(16)}{16}=\\frac{1}{2}\\cdot 16
$$

$$
\\frac{L(16)}{16}=8
$$

$$
8>4
$$

Load per job rises from $4$ to $8$, so the statement is True.`,
      `**D.** → True

The recovered law is $L=\\frac{1}{2}x^{2}$. The alarm trips at a peak of $200$:

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

The recovered law is $L=\\frac{1}{2}x^{2}$. After $10$ simultaneous jobs:

$$
L(10)=\\frac{1}{2}\\cdot 10^{2}
$$

$$
10^{2}=100
$$

$$
L(10)=\\frac{1}{2}\\cdot 100
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
A(10-5)=60
$$

$$
5A=60
$$

$$
A=12
$$

Responses are $Q(x)=12 x^{\\frac{1}{2}}$. From intensity $25$ to $100$:

$$
Q(25)=12\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
Q(25)=60
$$

$$
Q(100)=12\\cdot 100^{\\frac{1}{2}}
$$

$$
100^{\\frac{1}{2}}=10
$$

$$
Q(100)=120
$$

$$
120-60=60
$$

From intensity $100$ to $400$:

$$
Q(400)=12\\cdot 400^{\\frac{1}{2}}
$$

$$
400^{\\frac{1}{2}}=20
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

The recovered law is $Q=12 x^{\\frac{1}{2}}$. Doubling intensity from $25$ to $50$:

$$
Q(50)=12\\cdot 50^{\\frac{1}{2}}
$$

$$
50^{\\frac{1}{2}}=5\\sqrt{2}
$$

$$
Q(50)=12\\cdot 5\\sqrt{2}
$$

$$
Q(50)=60\\sqrt{2}
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
Q(50)\\approx 84.85
$$

Doubling the recorded $60$ responses would be $120$. The yield only rises to about $84.85$, so the statement is False.`,
      `**C.** → True

The recovered law is $Q=12 x^{\\frac{1}{2}}$. At intensity $81$ the square root is $9$:

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

$$
108>100
$$

The yield is $108$, already above $100$, so the statement is True.`,
      `**D.** → False

The recovered law is $Q=12 x^{\\frac{1}{2}}$. At the intensity cap of $400$:

$$
Q(400)=12\\cdot 400^{\\frac{1}{2}}
$$

$$
400^{\\frac{1}{2}}=20
$$

$$
Q(400)=240
$$

$$
240>200
$$

The cap allows $240$ usable responses, which is more than $200$, so the statement is False.`,
      `**E.** → False

The recovered law is $Q=12 x^{\\frac{1}{2}}$. A yield of $180$ means

$$
12 x^{\\frac{1}{2}}=180
$$

$$
x^{\\frac{1}{2}}=\\frac{180}{12}
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
      `For $n>0$ the two procedures cost the same only at $n=16$.`,
      `The automated procedure is cheaper than the manual one at every batch above $16$ documents.`,
      `The automated procedure's cost per document rises with the batch.`,
      `At $25$ documents the two procedures differ by less than $100$.`,
      `On a batch of $9$ documents the automated procedure costs under $100$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The common bill pins both coefficients:

$$
a\\cdot 16^{2}=256
$$

$$
256a=256
$$

$$
a=1
$$

$$
16b=256
$$

$$
b=16
$$

The procedures are $C(n)=n^{2}$ and $D(n)=16n$. They meet when

$$
n^{2}=16n
$$

$$
n^{2}-16n=0
$$

$$
n(n-16)=0
$$

The roots are $n=0$ and $n=16$. On $n>0$ they meet only at $16$, so the statement is True.`,
      `**B.** → False

The difference is

$$
C(n)-D(n)=n^{2}-16n
$$

$$
C(n)-D(n)=n(n-16)
$$

For $n>16$ both factors are positive, so automated costs more than manual, not less. The quadratic outruns the line past the meeting point, so the statement is False.`,
      `**C.** → True

The automated law is $C(n)=n^{2}$. Cost per document is

$$
\\frac{C(n)}{n}=n
$$

which rises with the batch. The unit cost is the batch size itself, so the statement is True.`,
      `**D.** → False

At $25$ documents:

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
C(25)-D(25)=225
$$

$$
225>100
$$

$225$ is not less than $100$, so the statement is False.`,
      `**E.** → True

At $9$ documents:

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
      `Two separate $16$-staff shifts already move as many pallets as one $64$-staff shift.`,
      `The contract ceiling is already reached with $64$ staff.`,
      `The extra throughput from $16$ to $36$ staff equals the extra from $36$ to $64$.`,
      `With $81$ staff, billed throughput is already above $70$ pallets per hour.`,
      `Staffing that bills $80$ pallets already exceeds $90$ people.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

The $16$-staff record pins the coefficient:

$$
A\\cdot 16^{\\frac{1}{2}}=32
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
4A=32
$$

$$
A=8
$$

Throughput is $H(s)=8s^{\\frac{1}{2}}$. Two separate $16$-staff shifts:

$$
H(16)=8\\cdot 16^{\\frac{1}{2}}
$$

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

The pair already matches the single $64$-staff shift, so the statement is True.`,
      `**B.** → False

The recovered law is $H=8s^{\\frac{1}{2}}$. At $64$ staff:

$$
H(64)=8\\cdot 64^{\\frac{1}{2}}
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
H(64)=64
$$

$$
64<80
$$

Billed throughput is still $64$ pallets an hour, below the contract ceiling of $80$, so the statement is False.`,
      `**C.** → True

The recovered law is $H=8s^{\\frac{1}{2}}$. From $16$ staff to $36$:

$$
H(36)=8\\cdot 36^{\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
H(36)=48
$$

$$
48-32=16
$$

From $36$ staff to $64$:

$$
H(64)=8\\cdot 64^{\\frac{1}{2}}
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
H(64)=64
$$

$$
64-48=16
$$

The two extras are equal, so the statement is True.`,
      `**D.** → True

The recovered law is $H=8s^{\\frac{1}{2}}$, billed as $\\min(H,80)$. With $81$ staff:

$$
H(81)=8\\cdot 81^{\\frac{1}{2}}
$$

$$
81^{\\frac{1}{2}}=9
$$

$$
H(81)=72
$$

$$
72<80
$$

Billed throughput is still the uncapped $72$. Then

$$
72>70
$$

Billed throughput is $72$ pallets per hour, already above $70$, so the statement is True.`,
      `**E.** → True

The recovered law is $H=8s^{\\frac{1}{2}}$. Billing $80$ pallets means the ceiling binds:

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
W(4)=216\\cdot 4^{-\\frac{3}{2}}
$$

$$
W(4)=216\\cdot\\frac{1}{8}
$$

$$
W(4)=27
$$

$$
W(9)=216\\cdot 9^{-\\frac{3}{2}}
$$

$$
W(9)=216\\cdot\\frac{1}{27}
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

The recovered law is $W=216 k^{-\\frac{3}{2}}$. With $4$ servers:

$$
W(4)=216\\cdot 4^{-\\frac{3}{2}}
$$

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

$$
W(4)=27
$$

$$
27>25
$$

The median wait is $27$ milliseconds, already above $25$, so the statement is True.`,
      `**C.** → True

The recovered law is $W=216 k^{-\\frac{3}{2}}$. The wait cut from $4$ to $9$ and the remaining wait at $9$:

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
19>8
$$

The cut of $19$ milliseconds already exceeds the remaining $8$, so the statement is True.`,
      `**D.** → False

The recovered law is $W=216 k^{-\\frac{3}{2}}$. Doubling the server count from $4$ to $8$:

$$
W(8)=216\\cdot 8^{-\\frac{3}{2}}
$$

$$
8^{\\frac{3}{2}}=8\\cdot 8^{\\frac{1}{2}}
$$

$$
8^{\\frac{1}{2}}=2\\sqrt{2}
$$

$$
8^{\\frac{3}{2}}=8\\cdot 2\\sqrt{2}
$$

$$
8\\cdot 2\\sqrt{2}=16\\sqrt{2}
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

Half of the $4$-server wait of $27$ is $\\frac{27}{2}=13.5$. The wait falls to about $9.55$ milliseconds, not to $13.5$, so the statement is False.`,
      `**E.** → False

The recovered law is $W=216 k^{-\\frac{3}{2}}$. With $9$ servers:

$$
W(9)=216\\cdot 9^{-\\frac{3}{2}}
$$

$$
9^{-\\frac{3}{2}}=\\frac{1}{27}
$$

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

The recovered law is $q=10000 p^{-2}$, so revenue is $R=\\frac{10000}{p}$. At twenty euros:

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

The revenue gain is the difference:

$$
2000-500=1500
$$

$$
1500>1400
$$

Cutting the price from twenty euros to five euros raises revenue by $1500$, which is more than $1400$, so the statement is True.`,
      `**B.** → True

The recovered law is $q=10000 p^{-2}$, so revenue is $R=\\frac{10000}{p}$. At sixteen euros the price sits in the denominator:

$$
R(16)=\\frac{10000}{16}
$$

$$
16\\cdot 625=10000
$$

$$
R(16)=625
$$

$$
625<700
$$

Monthly revenue is $625$ euros. That already sits under the claimed $700$ threshold, so the statement is True.`,
      `**C.** → False

The recovered law is $q=10000 p^{-2}$. Doubling the five-euro price takes the price to ten euros:

$$
q(5)=\\frac{10000}{5^{2}}
$$

$$
5^{2}=25
$$

$$
q(5)=\\frac{10000}{25}
$$

$$
q(5)=400
$$

$$
q(10)=\\frac{10000}{10^{2}}
$$

$$
10^{2}=100
$$

$$
q(10)=\\frac{10000}{100}
$$

$$
q(10)=100
$$

The scale factor is $2$ to the demand exponent:

$$
\\frac{q(10)}{q(5)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

Demand falls from $400$ to $100$, which is one quarter, not one half. A halving would need exponent $-1$, so the statement is False.`,
      `**D.** → True

The recovered law is $q=10000 p^{-2}$. Twenty euros is four times the recorded five-euro price, but the direct evaluation is:

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

The curve sells $25$ subscriptions at twenty euros, which is fewer than $30$, so the statement is True.`,
      `**E.** → True

The recovered law is $R=\\frac{10000}{p}$. Setting monthly revenue equal to $2500$:

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

The price that yields $2500$ is $4$ euros, which is already under $5$ euros, so the statement is True.`,
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
      `Because of the fixed engagement charge, the bill is not a power function of the number of accounts.`,
      `Cost per account falls as the book of accounts grows.`,
      `An extra account adds more to the bill at one hundred accounts than at four hundred.`,
      `An engagement covering $900$ accounts is billed at more than $1000$.`,
      `Two hundred accounts cost more than $750$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The two invoices give $C(n)=200+30 n^{\\frac{1}{2}}$. A pure power of $n$ would have the form $A n^{r}$ with no added constant. The intercept is $200\\neq 0$: even with no accounts the firm still bills the engagement fee. That extra constant kills the power shape, so the statement is True.`,
      `**B.** → True

The bill is $C(n)=200+30 n^{\\frac{1}{2}}$. Cost per account splits into two pieces:

$$
\\frac{C(n)}{n}=\\frac{200}{n}+30 n^{-\\frac{1}{2}}
$$

Both leftover exponents are negative, so each extra account dilutes the setup fee and also sits on a flatter square-root slope. Both terms fall as the book grows, so cost per account falls, so the statement is True.`,
      `**C.** → True

The bill is $C(n)=200+30 n^{\\frac{1}{2}}$. An extra account is the slope. Differentiating brings the exponent down by one:

$$
C'(n)=30\\cdot\\frac{1}{2} n^{-\\frac{1}{2}}
$$

$$
C'(n)=15 n^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so later accounts add less. At one hundred accounts:

$$
C'(100)=15\\cdot 100^{-\\frac{1}{2}}
$$

$$
C'(100)=\\frac{15}{10}
$$

$$
C'(100)=\\frac{3}{2}
$$

At four hundred accounts:

$$
C'(400)=15\\cdot 400^{-\\frac{1}{2}}
$$

$$
C'(400)=\\frac{15}{20}
$$

$$
C'(400)=\\frac{3}{4}
$$

$$
\\frac{3}{2}>\\frac{3}{4}
$$

An extra account adds more at one hundred accounts than at four hundred, so the statement is True.`,
      `**D.** → True

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

$$
1100>1000
$$

The billed amount is $1100$, which is more than $1000$, so the statement is True.`,
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

$$
624<750
$$

The new bill is about $624$, which is not more than $750$, so the statement is False.`,
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

Intensity is $e(a)=120 a^{-\\frac{1}{2}}$. Substituting the fleet $a(t)=4t^{\\frac{1}{2}}$ multiplies the two power stages:

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

The composed schedule is a power of elapsed time with exponent $\\frac{1}{4}$, so the statement is True.`,
      `**B.** → False

Composed emissions are $E(t)=240 t^{\\frac{1}{4}}$. Doubling elapsed time multiplies the total by

$$
\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}
$$

$$
2^{\\frac{1}{4}}\\approx 1.189
$$

The composed exponent $\\frac{1}{4}$ is far below one, so the clock cannot double emissions when it doubles. Emissions rise by about $19\\%$, not by $100\\%$, so the statement is False.`,
      `**C.** → False

Intensity is $e(a)=120 a^{-\\frac{1}{2}}$. The exponent $-\\frac{1}{2}$ is negative: a larger fleet spreads the same technology thinner, so kilograms per thousand vehicles fall. A rising intensity would need a positive exponent, so the statement is False.`,
      `**D.** → True

Composed emissions are $E(t)=240 t^{\\frac{1}{4}}$. After sixteen years, $16^{\\frac{1}{4}}=2$:

$$
E(16)=240\\cdot 2
$$

$$
E(16)=480
$$

$$
480>400
$$

Total fleet emissions are $480$, which already exceeds $400$, so the statement is True.`,
      `**E.** → True

Composed emissions are $E(t)=240 t^{\\frac{1}{4}}$. After one year, $1^{\\frac{1}{4}}=1$:

$$
E(1)=240\\cdot 1
$$

$$
E(1)=240
$$

$$
240<250
$$

The first-year total is $240$, which is still under $250$, so the statement is True.`,
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
      `The extra capacity from widening $4$ cm to $9$ cm already exceeds the bench reading of $64$ litres per second.`,
      `Measuring diameter in millimetres makes the new coefficient larger than $0.01$.`,
      `A $16$ cm pipe already delivers more than thirty times the bench capacity.`,
      `Doubling the diameter multiplies capacity by less than $5$.`,
      `To reach $500$ litres per second the diameter must already exceed $9$ cm.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The recovered law is $Q=2d^{\\frac{5}{2}}$. At four centimetres:

$$
4^{\\frac{5}{2}}=4^{2}\\cdot 4^{\\frac{1}{2}}
$$

$$
4^{2}=16
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
4^{\\frac{5}{2}}=32
$$

$$
Q(4)=2\\cdot 32
$$

$$
Q(4)=64
$$

At nine centimetres:

$$
9^{\\frac{5}{2}}=9^{2}\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{2}=81
$$

$$
9^{\\frac{1}{2}}=3
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

The extra capacity is the difference:

$$
486-64=422
$$

$$
422>64
$$

Widening from $4$ cm to $9$ cm adds $422$ litres per second, which already exceeds the bench reading of $64$, so the statement is True.`,
      `**B.** → False

The recovered law is $Q=2d^{\\frac{5}{2}}$ with $d$ in centimetres. A millimetre is one tenth of a centimetre, so $d=\\frac{d_{\\mathrm{mm}}}{10}$:

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
A'=\\frac{2}{10^{\\frac{5}{2}}}
$$

$$
A'=\\frac{2}{100\\sqrt{10}}
$$

$$
\\sqrt{10}\\approx 3.162
$$

$$
A'\\approx 0.00632
$$

$$
0.00632<0.01
$$

The millimetre-unit coefficient is about $0.00632$, which is not larger than $0.01$, so the statement is False.`,
      `**C.** → True

The recovered law is $Q=2d^{\\frac{5}{2}}$. At sixteen centimetres:

$$
16^{\\frac{5}{2}}=16^{2}\\cdot 16^{\\frac{1}{2}}
$$

$$
16^{2}=256
$$

$$
16^{\\frac{1}{2}}=4
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

The bench reading is $Q(4)=64$, so the ratio is:

$$
\\frac{Q(16)}{Q(4)}=\\frac{2048}{64}
$$

$$
\\frac{2048}{64}=32
$$

$$
32>30
$$

A $16$ cm pipe delivers $32$ times the bench capacity, which is more than thirty times, so the statement is True.`,
      `**D.** → False

The recovered law is $Q=2d^{\\frac{5}{2}}$. Doubling the diameter multiplies capacity by $2$ to the given exponent:

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

The recovered law is $Q=2d^{\\frac{5}{2}}$. At nine centimetres:

$$
9^{\\frac{5}{2}}=9^{2}\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{2}=81
$$

$$
9^{\\frac{1}{2}}=3
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
486<500
$$

At $9$ cm the pipe still delivers only $486$ litres per second, short of $500$. The diameter that reaches $500$ must therefore exceed $9$ cm, so the statement is True.`,
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

The recovered law is $r=3t^{\\frac{1}{2}}$, so covered area is $S=9\\pi t$. After four hours:

$$
S(4)=9\\pi\\cdot 4
$$

$$
S(4)=36\\pi
$$

After nine hours:

$$
S(9)=9\\pi\\cdot 9
$$

$$
S(9)=81\\pi
$$

The extra area is the difference:

$$
81\\pi-36\\pi=45\\pi
$$

$$
45\\pi>36\\pi
$$

The extra from hour $4$ to hour $9$ is $45\\pi$, which already exceeds the $36\\pi$ covered at hour $4$, so the statement is True.`,
      `**B.** → True

The recovered law is $S=9\\pi t$. After four hours:

$$
S(4)=9\\pi\\cdot 4
$$

$$
S(4)=36\\pi
$$

$$
36\\pi>30\\pi
$$

The covered area is $36\\pi$ square kilometres, which is already more than $30\\pi$, so the statement is True.`,
      `**C.** → False

The recovered law is $S=9\\pi t$. After nine hours:

$$
S(9)=9\\pi\\cdot 9
$$

$$
S(9)=81\\pi
$$

$$
81\\pi<100\\pi
$$

The area $100\\pi$ would need $t=\\frac{100}{9}$, which is later than nine hours. The covered area is $81\\pi$, not $100\\pi$, so the statement is False.`,
      `**D.** → True

The recovered law is $S=9\\pi t$. After four hours:

$$
S(4)=9\\pi\\cdot 4
$$

$$
S(4)=36\\pi
$$

After eight hours:

$$
S(8)=9\\pi\\cdot 8
$$

$$
S(8)=72\\pi
$$

The scale factor is:

$$
\\frac{S(8)}{S(4)}=\\frac{72\\pi}{36\\pi}
$$

$$
\\frac{72\\pi}{36\\pi}=2
$$

Covered area is linear in elapsed time, so doubling time from $4$ hours to $8$ hours doubles the area, so the statement is True.`,
      `**E.** → True

The recovered law is $S=9\\pi t$. Setting the covered area equal to $90\\pi$:

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

The time needed is $10$ hours, which is already above $9$ hours, so the statement is True.`,
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
      `Below the crossing, Plan B is the cheaper contract.`,
      `Plan A's cap eventually binds as ticket volume grows.`,
      `Plan A's cost per ticket falls as ticket volume rises.`,
      `At $144$ tickets Plan A bills more than $450$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Uncapped Plan A is $40 u^{\\frac{1}{2}}$, and Plan B is $5u$. At sixty-four tickets:

$$
64^{\\frac{1}{2}}=8
$$

$$
40\\cdot 8=320
$$

$$
5\\cdot 64=320
$$

Both bills equal $320$. The cap is $400$, and $320<400$, so the cap is still slack. They sit under the cap at $64$ tickets, so the statement is True.`,
      `**B.** → True

The two uncapped bills meet at $64$ tickets. Plan B is cheaper while $5u<40 u^{\\frac{1}{2}}$. For $u>0$:

$$
u^{\\frac{1}{2}}<8
$$

$$
u<64
$$

Below the crossing the linear bill starts at zero and has not yet caught the square root, so Plan B is the cheaper contract, so the statement is True.`,
      `**C.** → True

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
      `**D.** → True

While the cap is slack, Plan A bills $40 u^{\\frac{1}{2}}$. Cost per ticket is

$$
\\frac{C_A(u)}{u}=40 u^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so unit cost falls as volume rises. Once the cap binds the billed amount is the constant $400$, and $400/u$ also falls. Plan A's cost per ticket falls as ticket volume rises, so the statement is True.`,
      `**E.** → False

Uncapped Plan A is $40 u^{\\frac{1}{2}}$, never charging more than $400$. At $144$ tickets:

$$
144^{\\frac{1}{2}}=12
$$

$$
40\\cdot 12=480
$$

The billed amount is $\\min\\{480,400\\}$. Because $480>400$, the cap binds and Plan A bills $400$, not more than $450$. The claimed $450$ sits above the cap, so the statement is False.`,
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

The doubling rule gives $c(N)=1000 N^{-b}$ with $2^{-b}=0.8$. An extra unit is the slope. Differentiating brings the exponent down by one:

$$
c'(N)=-1000 b N^{-b-1}
$$

The prefactor is negative because $b>0$, so cost falls. The leftover exponent $-b-1$ is itself negative, so later units cut less. After the first unit the cut is $1000b$; after eight units it is smaller by the factor $8^{b+1}>1$. An extra unit cuts more after the first unit than after eight, so the statement is True.`,
      `**B.** → False

Quadrupling cumulative output is two doublings, hence two factors of $0.8$:

$$
\\frac{c(4N)}{c(N)}=0.8^{2}
$$

$$
0.8^{2}=0.64
$$

Unit cost falls to $64\\%$ of its previous value, not to one half. A halving would need two factors whose product is $0.5$, so the statement is False.`,
      `**C.** → True

A simple reciprocal $c\\propto N^{-1}$ would cut unit cost in half at every doubling, because $2^{-1}=\\frac{1}{2}$. The recorded doubling factor is $0.8$, and

$$
0.8>\\frac{1}{2}
$$

so the learning exponent is shallower than $-1$. Unit cost falls, but more slowly than a reciprocal of cumulative output, so the statement is True.`,
      `**D.** → True

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

$$
512<520
$$

The modelled unit cost is $512$, which is already under $520$, so the statement is True.`,
      `**E.** → False

Four successive doublings take the first unit to $N=16$. Continuing from $c(8)=512$:

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

Doubling the spend multiplies revenue by $2$ to the given exponent $\\frac{1}{2}$:

$$
\\frac{R(2x)}{R(x)}=2^{\\frac{1}{2}}
$$

$$
\\sqrt{2}\\approx 1.414
$$

The exponent $\\frac{1}{2}$ is below one, so revenue cannot keep pace with the spend. The factor is about $1.414$, not $2$, so the statement is False.`,
      `**B.** → True

Revenue is $R(x)=90 x^{\\frac{1}{2}}$. Revenue per euro of spend lowers the exponent by one:

$$
\\frac{R(x)}{x}=90 x^{-\\frac{1}{2}}
$$

The leftover exponent is negative: each extra euro of spend still adds sales, but less than the euro before it. The return per euro falls as the campaign grows, so the statement is True.`,
      `**C.** → True

Net gain is $N(x)=90 x^{\\frac{1}{2}}-6x$. Factor out $6 x^{\\frac{1}{2}}$:

$$
N(x)=6 x^{\\frac{1}{2}}\\bigl(15-x^{\\frac{1}{2}}\\bigr)
$$

For $x>0$ the prefactor is positive, so the sign of $N$ is the sign of $15-x^{\\frac{1}{2}}$. That factor is negative for $x>225$, and it becomes more negative as spend grows. Once the net has turned negative it stays negative at every larger spend, so the statement is True.`,
      `**D.** → True

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

$$
300>250
$$

The net is $300$, which is already above $250$, so the statement is True.`,
      `**E.** → False

Revenue is $R(x)=90 x^{\\frac{1}{2}}$. At a spend of $256$:

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

The net is negative. Spend $256$ already sits past the crossing at $225$, so the statement is False.`,
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

The labour record gives $m(L)=4L^{\\frac{1}{2}}$. The material exponent is $\\frac{1}{2}$:

$$
\\frac{1}{2}<1
$$

An exponent smaller than one means material grows more slowly than labour hours: each extra hour adds less material than the hour before it. One half is below one, so the statement is True.`,
      `**B.** → False

Finished output is $g=16L^{\\frac{3}{4}}$. Doubling labour multiplies output by

$$
\\frac{g(2L)}{g(L)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.68
$$

The composed exponent $\\frac{3}{4}$ is below one, so doubling labour cannot double output. The factor is about $1.68$, not $2$, so the statement is False.`,
      `**C.** → True

Finished output is $g=16L^{\\frac{3}{4}}$. Output per labour hour is

$$
\\frac{g}{L}=16 L^{-\\frac{1}{4}}
$$

The leftover exponent is negative: each extra hour still adds finished units, but fewer than the hour before it, so average product falls as the crew grows. Output per hour falls as labour rises, so the statement is True.`,
      `**D.** → True

Finished output is $g=16L^{\\frac{3}{4}}$. Solving for labour:

$$
L=\\left(\\frac{g}{16}\\right)^{\\frac{4}{3}}
$$

A power with a nonzero exponent inverts to another power. Labour is a power of the finished count, so the statement is True.`,
      `**E.** → True

Finished output is $g=16L^{\\frac{3}{4}}$. After eighty-one labour hours:

$$
81=3^{4}
$$

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

Finished output is $432$ units, which is already above $400$, so the statement is True.`,
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
      `At a price of $25$, monthly revenue is already under $450$.`,
      `Doubling the $4$-euro price halves revenue.`,
      `The fixed charge is covered only at prices below $16$.`,
      `Raising the price from $4$ to $16$ cuts revenue by more than the remaining revenue at $16$.`,
      `At a price of $4$, net of the $400$ charge, the publisher still clears more than $550$.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

The recovered law is $q=2000 p^{-\\frac{3}{2}}$, so revenue is $R=2000 p^{-\\frac{1}{2}}$. At a price of $25$:

$$
25^{\\frac{1}{2}}=5
$$

$$
R(25)=2000\\cdot 25^{-\\frac{1}{2}}
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

Monthly revenue is $400$, which is already under $450$, so the statement is True.`,
      `**B.** → False

The recovered law is $R=2000 p^{-\\frac{1}{2}}$. At four euros:

$$
4^{\\frac{1}{2}}=2
$$

$$
R(4)=\\frac{2000}{2}
$$

$$
R(4)=1000
$$

Doubling that price takes it to eight euros:

$$
8^{\\frac{1}{2}}=2\\sqrt{2}
$$

$$
R(8)=\\frac{2000}{2\\sqrt{2}}
$$

$$
R(8)=\\frac{1000}{\\sqrt{2}}
$$

$$
\\sqrt{2}\\approx 1.414
$$

$$
R(8)\\approx 707
$$

The scale factor is $2$ to the revenue exponent:

$$
\\frac{R(8)}{R(4)}=2^{-\\frac{1}{2}}
$$

$$
2^{-\\frac{1}{2}}\\approx 0.707
$$

Revenue falls to about $71\\%$ of $1000$, not to one half. A halving would need exponent $-1$, so the statement is False.`,
      `**C.** → False

The recovered law is $R=2000 p^{-\\frac{1}{2}}$. The charge is covered while revenue stays at least $400$:

$$
2000 p^{-\\frac{1}{2}}\\ge 400
$$

$$
p^{-\\frac{1}{2}}\\ge\\frac{400}{2000}
$$

$$
p^{-\\frac{1}{2}}\\ge\\frac{1}{5}
$$

$$
\\sqrt{p}\\le 5
$$

$$
p\\le 25
$$

The threshold is $25$, not $16$. At the claimed cutoff:

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

The recovered law is $R=2000 p^{-\\frac{1}{2}}$. At four euros:

$$
4^{\\frac{1}{2}}=2
$$

$$
R(4)=\\frac{2000}{2}
$$

$$
R(4)=1000
$$

At sixteen euros:

$$
16^{\\frac{1}{2}}=4
$$

$$
R(16)=\\frac{2000}{4}
$$

$$
R(16)=500
$$

The cut is the difference:

$$
1000-500=500
$$

The remaining revenue at $16$ is $500$, and $500$ is not more than $500$. Raising the price from $4$ to $16$ cuts revenue by exactly the remaining amount, not by more, so the statement is False.`,
      `**E.** → True

The recovered law is $R=2000 p^{-\\frac{1}{2}}$. At four euros:

$$
4^{\\frac{1}{2}}=2
$$

$$
R(4)=\\frac{2000}{2}
$$

$$
R(4)=1000
$$

Net of the fixed charge:

$$
1000-400=600
$$

$$
600>550
$$

The publisher still clears $600$, which is more than $550$, so the statement is True.`,
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

The recorded extension recovers the coefficient, and the extra items are the difference of the two cube-power levels.

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
2^{2}=4
$$

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
A(9-4)=90
$$

$$
5A=90
$$

$$
A=18
$$

The packing law is then $N(h)=18h^{\\frac{2}{3}}$. The two shift counts are

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
162-72=90
$$

$$
90>72
$$

The extra of $90$ already exceeds the $8$-hour output of $72$, so the statement is True.`,
      `**B.** → True

The recovered law is $N(h)=18h^{\\frac{2}{3}}$. A $27$-hour shift is a perfect cube, so the count is exact:

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
N(27)=162
$$

$$
162>150
$$

The shift packs $162$ items, which is more than $150$, so the statement is True.`,
      `**C.** → False

The recovered law is $N(h)=18h^{\\frac{2}{3}}$. Doubling an $8$-hour shift multiplies packed items by $2$ to the given exponent:

$$
\\frac{N(16)}{N(8)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}=4^{\\frac{1}{3}}
$$

$$
4^{\\frac{1}{3}}\\approx 1.587
$$

$$
1.587\\neq 2
$$

The $16$-hour count is about $1.59$ times the $8$-hour count, not twice it, so the statement is False.`,
      `**D.** → False

The recovered law is $N(h)=18h^{\\frac{2}{3}}$. Forty hours against the $250$-item order:

$$
N(40)=18\\cdot 40^{\\frac{2}{3}}
$$

$$
40^{\\frac{1}{3}}\\approx 3.42
$$

$$
40^{\\frac{2}{3}}=\\bigl(40^{\\frac{1}{3}}\\bigr)^{2}
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

The recovered law is $N(h)=18h^{\\frac{2}{3}}$. Average items per hour divide by shift length, which subtracts $1$ from the exponent:

$$
\\frac{N(h)}{h}=18h^{-\\frac{1}{3}}
$$

After $8$ hours:

$$
\\frac{N(8)}{8}=18\\cdot 8^{-\\frac{1}{3}}
$$

$$
8^{-\\frac{1}{3}}=\\frac{1}{2}
$$

$$
\\frac{N(8)}{8}=9
$$

After $27$ hours:

$$
\\frac{N(27)}{27}=18\\cdot 27^{-\\frac{1}{3}}
$$

$$
27^{-\\frac{1}{3}}=\\frac{1}{3}
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
      `The absorbed power is a power function of airspeed.`,
      `Doubling the airspeed more than triples the drag.`,
      `The airspeed that produces a given drag is itself a power function of that drag.`,
      `The mounting's $250$ N rating is first reached at a speed above $30$ m/s.`,
      `At $16$ m/s the rig absorbs more than $2$ kW.`,
    ],
    answer_key: [true, false, true, false, true],
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
      `**C.** → True

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
      `**D.** → False

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
v=5^{2}
$$

$$
v=25
$$

The claimed threshold is a speed above $30$ m/s, and $25$ is not above $30$. The rating is reached at $25$ m/s, so the statement is False.`,
      `**E.** → True

Absorbed power is force times speed. At the faster logged run the force is already $128$ N:

$$
P(16)=128\\cdot 16
$$

$$
128\\cdot 16=2048
$$

That is $2048$ watts, or $2.048$ kilowatts, which is more than $2$ kW, so the statement is True.`,
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
R(16)=1200\\cdot 16^{\\frac{1}{2}}
$$

$$
16^{\\frac{1}{2}}=4
$$

$$
R(16)=1200\\cdot 4
$$

$$
R(16)=4800
$$

$$
R(25)=1200\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

$$
R(25)=1200\\cdot 5
$$

$$
R(25)=6000
$$

$$
R(25)-R(16)=6000-4800
$$

$$
6000-4800=1200
$$

$$
1200>1000
$$

Revenue rises by $1200$, which is more than $1000$, so the statement is True.`,
      `**B.** → True

The recovered law is $q(p)=1200p^{-\\frac{1}{2}}$. At a price of $25$:

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
q(25)=240
$$

$$
240<250
$$

The utility sells $240$ units, which is fewer than $250$, so the statement is True.`,
      `**C.** → False

The recovered law is $q(p)=1200p^{-\\frac{1}{2}}$. A target of $200$ units inverts the curve:

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

The recovered revenue is $R(p)=1200p^{\\frac{1}{2}}$. Quantity does fall when price rises, because the demand exponent $-\\frac{1}{2}$ is negative. That does not decide revenue: multiplying by $p$ leaves a positive exponent. Check the two prices:

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
6000>4800
$$

Revenue rises along this curve, so the statement is False.`,
      `**E.** → True

The recovered revenue is $R(p)=1200p^{\\frac{1}{2}}$. Doubling the price from $16$ to $32$ multiplies revenue by $2$ to the leftover exponent:

$$
\\frac{R(32)}{R(16)}=2^{\\frac{1}{2}}
$$

$$
2^{\\frac{1}{2}}=\\sqrt{2}
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
81A=324
$$

$$
A=4
$$

The kiln law is then $y(x)=4x^{\\frac{4}{3}}$. Doubling the test-firing output of $324$ tonnes means a feed multiplier $k$ with $k^{\\frac{4}{3}}=2$:

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
1.682<2
$$

A doubled feed would be the factor $2$. The required factor is about $1.68$, which is not more than $2$, so the statement is False.`,
      `**B.** → True

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. Two firings at a feed of $8$ versus one firing at $27$:

$$
y(8)=4\\cdot 8^{\\frac{4}{3}}
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{4}{3}}=2^{4}
$$

$$
2^{4}=16
$$

$$
y(8)=4\\cdot 16
$$

$$
y(8)=64
$$

$$
2\\cdot y(8)=128
$$

$$
y(27)=4\\cdot 27^{\\frac{4}{3}}
$$

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
y(27)=4\\cdot 81
$$

$$
y(27)=324
$$

$$
128<324
$$

Two firings at feed $8$ total $128$ tonnes, which already falls short of $324$, so the statement is True.`,
      `**C.** → True

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. At a feed of $8$:

$$
y(8)=4\\cdot 8^{\\frac{4}{3}}
$$

$$
8^{\\frac{4}{3}}=16
$$

$$
y(8)=4\\cdot 16
$$

$$
y(8)=64
$$

$$
64>50
$$

The kiln produces $64$ tonnes, which is more than $50$, so the statement is True.`,
      `**D.** → False

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. The licence binds where output hits $1024$:

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

The recovered law is $y(x)=4x^{\\frac{4}{3}}$. The extra output from feed $8$ to feed $27$ is the difference of the two levels:

$$
y(8)=64
$$

$$
y(27)=324
$$

$$
y(27)-y(8)=324-64
$$

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
      `Applying the reporting stage after the calibration stage returns the original reading.`,
      `The composition of the two stages grows more slowly than the raw reading.`,
      `Applying the stages in the other order fails to recover the original index.`,
      `A raw reading of $64$ is sent out with an index above $140$.`,
      `A raw reading of $125$ is sent out with an index under $200$.`,
    ],
    answer_key: [true, false, false, true, false],
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
g(f(x))=x
$$

The two stages cancel. Reporting after calibration returns the original reading, so the statement is True.`,
      `**B.** → False

The composition is already $g(f(x))=x$, which is the power $x^{1}$. Growing more slowly than the raw reading would need a composed exponent below $1$. Here the product of the two stage exponents is

$$
\\frac{2}{3}\\cdot\\frac{3}{2}=1
$$

An exponent of $1$ means the composed map moves in lockstep with the reading, not more slowly. The leftover exponent is not smaller than one, so the statement is False.`,
      `**C.** → False

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
f(g(y))=y
$$

Each map is the two-sided inverse of the other on $y>0$. Applying reporting first and calibration second returns the original index, so the statement is False.`,
      `**D.** → True

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
f(64)=144
$$

$$
144>140
$$

The index sent out is $144$, which is above $140$, so the statement is True.`,
      `**E.** → False

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
f(125)=225
$$

$$
225>200
$$

The index sent out is $225$, which is not under $200$, so the statement is False.`,
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
      `The two algorithms score equally at two different positive loads.`,
      `Once algorithm T is ahead, raising the load further cannot put S back in front.`,
      `The ratio of the two scores is the same at every load.`,
      `The two algorithms first meet at a load above $6$.`,
      `At a load of $16$, algorithm T is ahead by more than $30$.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

The shared benchmark gives $S(x)=8x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$. Set them equal on $x>0$:

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
      `**B.** → True

Those laws give the ratio

$$
\\frac{T(x)}{S(x)}=\\frac{x^{\\frac{3}{2}}}{8x^{\\frac{1}{2}}}
$$

$$
\\frac{T(x)}{S(x)}=\\frac{x}{8}
$$

That ratio exceeds $1$ precisely when $x>8$, and it keeps growing, so $T$ stays ahead on the whole ray $x>8$. Once T is ahead, S cannot catch it, so the statement is True.`,
      `**C.** → False

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
      `**D.** → True

The scores meet at the unique positive load $x=8$. Compare that crossing with the claimed threshold:

$$
8>6
$$

The first meeting sits at load $8$, which is above $6$, so the statement is True.`,
      `**E.** → True

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
16A=80
$$

$$
A=5
$$

The capacity law is then $C(m)=5m^{\\frac{4}{5}}$. A fleet of $243$ is $3^{5}$:

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
C(243)=405
$$

$$
405>400
$$

Capacity is $405$ requests per second, which is more than $400$, so the statement is True.`,
      `**B.** → False

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. The ceiling binds where capacity hits $500$:

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
100^{\\frac{5}{4}}=100\\cdot 100^{\\frac{1}{4}}
$$

$$
100^{\\frac{1}{4}}=\\sqrt{10}
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

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. Two fleets of $32$ versus one fleet of $243$:

$$
C(32)=5\\cdot 32^{\\frac{4}{5}}
$$

$$
32=2^{5}
$$

$$
32^{\\frac{4}{5}}=2^{4}
$$

$$
2^{4}=16
$$

$$
C(32)=5\\cdot 16
$$

$$
C(32)=80
$$

$$
2\\cdot C(32)=160
$$

$$
C(243)=5\\cdot 81
$$

$$
C(243)=405
$$

$$
160<405
$$

Two fleets of $32$ total $160$ requests per second, which already falls short of $405$, so the statement is True.`,
      `**D.** → False

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. An exponent below $1$ slows growth, it does not stop it. The ceiling is already reached at a finite fleet:

$$
5m^{\\frac{4}{5}}=500
$$

$$
m=100^{\\frac{5}{4}}
$$

$$
m=100\\sqrt{10}
$$

$$
m\\approx 316.2
$$

A larger exact fleet sits past that crossing:

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
C(1024)=1280
$$

$$
1280>500
$$

The ceiling is crossed at a finite fleet of about $316$ machines, so the statement is False.`,
      `**E.** → True

The recovered law is $C(m)=5m^{\\frac{4}{5}}$. The extra capacity from $32$ to $243$ machines is the difference of the two levels:

$$
C(32)=80
$$

$$
C(243)=405
$$

$$
C(243)-C(32)=405-80
$$

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
      `The net gain $R(L)-6L$ is itself a power function of hours hired.`,
      `The hours that maximise net gain are the same hours at which net gain is zero.`,
      `The wage bill is a power function of hours hired.`,
      `At $900$ hours the net gain is below $-1000$.`,
      `Net gain crosses zero only after more than $300$ hours.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A.** → False

The revenue gain gives $A=120$, so $R(L)=120L^{\\frac{1}{2}}$. Net gain subtracts the wage bill:

$$
\\Pi(L)=120L^{\\frac{1}{2}}-6L
$$

A power function is a single term $A L^{r}$. This is a difference of two powers with exponents $\\frac{1}{2}$ and $1$. Those exponents are not equal, so the two terms cannot be combined into one monomial. Net gain is not a power function of hours hired, so the statement is False.`,
      `**B.** → False

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
      `**C.** → True

The wage bill is $6$ times hours hired:

$$
W(L)=6L
$$

$$
W(L)=6L^{1}
$$

That is $A L^{r}$ with coefficient $A=6$ and exponent $r=1$. A linear law is the power-function case of exponent $1$. The wage bill is a power function of hours hired, so the statement is True.`,
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

Net gain is $\\Pi(L)=120L^{\\frac{1}{2}}-6L$. Break-even on $L>0$ is where recovered revenue equals the wage bill:

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

$$
400>300
$$

On $L>0$ that is the only root, and $400$ sits past $300$. Net gain crosses zero only after more than $300$ hours, so the statement is True.`,
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
      `The cheapest way to fill the order is to send every unit to one plant.`,
      `Whatever split is chosen, the two plants together still follow a single power of the $60$-unit order.`,
      `Plant 2's cost per unit rises as it produces more.`,
      `Concentrating all $60$ units in the cheaper plant still costs more than $800$.`,
      `Sending $30$ units to each plant already costs under $700$.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A.** → False

The recorded runs give $C_1(q)=\\frac{1}{2}q^{2}$ and $C_2(q)=\\frac{1}{4}q^{2}$. Plant 2 is cheaper for any given output, so concentrating the $60$-unit order there costs

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
C_2(60)=900
$$

An even split already undercuts that corner:

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
C_1(30)+C_2(30)=675
$$

$$
675<900
$$

Equalising marginal costs is cheaper still. The derivatives are $C_1'(q)=q$ and $C_2'(q_2)=\\frac{1}{2}q_2$. Setting $q=\\frac{1}{2}q_2$ with $q+q_2=60$ sends $20$ to plant 1 and $40$ to plant 2, which costs $600$. Sending everything to one plant is not cheapest, so the statement is False.`,
      `**B.** → False

Total cost is $C_1(q)+C_2(60-q)$:

$$
\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}
$$

That quadratic in the split $q$ takes different values at different splits: $900$ at a corner, $675$ at an even split, $600$ at the $20$-$40$ split. A function of $60$ alone cannot depend on $q$. The two plants together are not a single power of the order, so the statement is False.`,
      `**C.** → True

Plant 2 costs $C_2(q)=\\frac{1}{4}q^{2}$. Unit cost divides by output, which lowers the exponent from $2$ to $1$:

$$
\\frac{C_2(q)}{q}=\\frac{1}{4}q
$$

The leftover exponent is positive, so unit cost rises with how much plant 2 produces. At the recorded run it is $10$; at $20$ units it is $5$; at $60$ units it is $15$. A constant unit cost would be a linear total, exponent $1$. Unit cost triples across that range, so the statement is True.`,
      `**D.** → True

Plant 2 is the cheaper plant, with $C_2(q)=\\frac{1}{4}q^{2}$. Concentrating the $60$-unit order there:

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
      `**E.** → True

An even split sends $30$ units to each plant:

$$
C_1(30)=\\frac{1}{2}\\cdot 30^{2}
$$

$$
30^{2}=900
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
C_1(30)+C_2(30)=675
$$

$$
675<700
$$

The even split costs $675$, which is under $700$, so the statement is True.`,
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
      `**B.** → False

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
      `**C.** → False

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
      `**D.** → True

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
y=375
$$

$$
375>350
$$

The fitted law predicts $375$, which is above $350$, so the statement is True.`,
      `**E.** → True

The fitted law is $y=3x^{\\frac{3}{2}}$. At $x=9$:

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
y=3\\cdot 27
$$

$$
y=81
$$

$$
81>70
$$

The fitted response is $81$, which is already above $70$, so the statement is True.`,
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
      `After $100$ units, revenue is already above $750$ euros.`,
      `After $25$ units the clearing price is already under $20$ euros.`,
      `Raising the catalogue price raises revenue along this curve.`,
      `Doubling quantity from $25$ to $100$ more than doubles revenue.`,
      `The quantity that yields $1600$ of revenue already exceeds $400$ units.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The recovered revenue law is $R=80 q^{\\frac{1}{2}}$. At one hundred units:

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

The recovered inverse is $p=80 q^{-\\frac{1}{2}}$. At twenty-five units:

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

The recovered demand is $q=6400 p^{-2}$. Revenue along the curve is price times quantity:

$$
R(p)=p\\cdot 6400 p^{-2}
$$

$$
R(p)=6400 p^{-1}
$$

$$
R(p)=\\frac{6400}{p}
$$

At the catalogue price of four euros:

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

A higher catalogue price cuts revenue rather than raising it, so the statement is False.`,
      `**D.** → False

The recovered revenue law is $R=80 q^{\\frac{1}{2}}$. Quantity from twenty-five to one hundred is a factor of four:

$$
\\frac{100}{25}=4
$$

Revenue then scales by that factor to the leftover exponent:

$$
\\frac{R(100)}{R(25)}=4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

The two levels confirm the factor:

$$
R(25)=80\\cdot 25^{\\frac{1}{2}}
$$

$$
25^{\\frac{1}{2}}=5
$$

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

The recovered revenue law is $R=80 q^{\\frac{1}{2}}$. The quantity that yields $1600$ of revenue solves

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

The shift extension gives $Y=20 L^{\\frac{1}{2}}$. At nine hours:

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
20\\cdot 3=60
$$

At thirty-six hours:

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

The extra output is the difference:

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

The recovered law is $Y=20 L^{\\frac{1}{2}}$. At thirty-six hours:

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

Output is $120$ units, which is already more than $100$, so the statement is True.`,
      `**C.** → False

The recovered average product is $20 L^{-\\frac{1}{2}}$. At twenty-five hours:

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

The recovered law is $Y=20 L^{\\frac{1}{2}}$. Nine hours already yield $60$ units, so doubling that output means $120$. The labour that produces $120$ solves

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

The labour factor from nine hours is

$$
\\frac{36}{9}=4
$$

$$
4>2
$$

Four times the hours is more than a doubling, so the statement is True.`,
      `**E.** → True

The recovered average product is $20 L^{-\\frac{1}{2}}$. At nine hours:

$$
\\frac{Y(9)}{9}=20\\cdot 9^{-\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
\\frac{Y(9)}{9}=\\frac{20}{3}
$$

At thirty-six hours:

$$
\\frac{Y(36)}{36}=20\\cdot 36^{-\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
\\frac{Y(36)}{36}=\\frac{20}{6}
$$

$$
\\frac{20}{6}=\\frac{10}{3}
$$

The fall is the difference:

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
      `The operation breaks even at two different positive outputs.`,
      `At $25$ units the firm is more than $100$ euros below break-even.`,
      `Once profit turns positive, it stays positive at every larger output.`,
      `Revenue is a power function of output, but profit is not.`,
      `At $225$ units, profit exceeds $80$ euros.`,
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
10^{2}=100
$$

$$
q=20^{2}
$$

$$
20^{2}=400
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
1500-1250-400=-150
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
18\\cdot 2=36
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
\\frac{1}{2}\\cdot 64=32
$$

$$
32>30
$$

Cost is $32$ million, which is already above $30$, so the statement is True.`,
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

The two furnace runs give $T=4 g^{\\frac{2}{3}}$. At a feed of eight:

$$
T(8)=4\\cdot 8^{\\frac{2}{3}}
$$

$$
8^{\\frac{1}{3}}=2
$$

$$
8^{\\frac{2}{3}}=4
$$

$$
T(8)=4\\cdot 4
$$

$$
4\\cdot 4=16
$$

At a feed of twenty-seven:

$$
T(27)=4\\cdot 27^{\\frac{2}{3}}
$$

$$
27^{\\frac{1}{3}}=3
$$

$$
27^{\\frac{2}{3}}=9
$$

$$
T(27)=4\\cdot 9
$$

$$
4\\cdot 9=36
$$

The extra throughput is

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

The recovered exponent is $\\frac{2}{3}$. Doubling the gas feed would double throughput only if that exponent were $1$. The scale factor is

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

The recovered law is $T=4 g^{\\frac{2}{3}}$. At a feed of sixty-four:

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

The recovered law is $T=4 g^{\\frac{2}{3}}$. Throughput per cubic metre lowers the exponent by one:

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
8^{-\\frac{1}{3}}=\\frac{1}{2}
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
27^{-\\frac{1}{3}}=\\frac{1}{3}
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

The recovered law is $T=4 g^{\\frac{2}{3}}$. The licensed ceiling of thirty-two tonnes per hour inverts that law:

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

The survey gives $V=4d^{2}$. At six metres:

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

The recovered law is $V=4d^{2}$. The added volume from four metres to eight metres is a difference of two levels:

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

The recovered law is $V=4d^{2}$ when depth is in metres. A centimetre reading $d_{\\mathrm{cm}}$ counts one hundred centimetres to the metre:

$$
d=\\frac{d_{\\mathrm{cm}}}{100}
$$

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

The recovered law is $V=4d^{2}$. At three metres:

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

At five metres:

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

The extra volume is

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

The recovered law is $V=4d^{2}$. Stored volume at five metres and at three metres:

$$
V(5)=4\\cdot 25
$$

$$
4\\cdot 25=100
$$

$$
V(3)=4\\cdot 9
$$

$$
4\\cdot 9=36
$$

Four times the three-metre volume would be

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

The speed change gives $E=\\frac{1}{20} v^{2}$. At forty kilometres per hour:

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

The recovered law is $E=\\frac{1}{20} v^{2}$. At eighty kilometres per hour:

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

The recovered law is $E=\\frac{1}{20} v^{2}$. At thirty kilometres per hour:

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

The extra index is

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

The recovered law is $E=\\frac{1}{20} v^{2}$. Eighty kilometres per hour is twice forty, and a square law multiplies the index by four:

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

The recovered law is $E=\\frac{1}{20} v^{2}$. The twenty-kilometre-per-hour rise from thirty to fifty adds

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

The first rise adds $80$ and the second adds $120$, so the lower-speed rise does not add more, so the statement is False.`,
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
      `Steel use grows more slowly than capacity as height rises.`,
      `A $4$-metre silo holds more than $60$ cubic metres.`,
      `Steel as a function of capacity is itself a power function.`,
      `Two separate $2$-metre silos use the same steel as one $4$-metre silo.`,
      `An $8$-metre silo needs more than $200$ square metres of steel.`,
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
8\\cdot 8=64
$$

$$
64>60
$$

The silo holds $64$ cubic metres, which is more than $60$, so the statement is True.`,
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
3\\cdot 4=12
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
3\\cdot 16=48
$$

The single four-metre silo uses $48$ square metres, twice as much as the pair, so the statement is False.`,
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
3\\cdot 64=192
$$

$$
192<200
$$

Steel use is $192$ square metres, which is not more than $200$, so the statement is False.`,
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

The jump gives $T=4 n^{\\frac{1}{2}}$. The forty-hour ceiling inverts that law:

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

The recovered law is $T=4 n^{\\frac{1}{2}}$. At forty-nine shipments:

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

The recovered exponent is $\\frac{1}{2}$, so an input factor of $4$ multiplies inspection time by $4$ to that power:

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

The recovered law is $T=4 n^{\\frac{1}{2}}$. At four shipments:

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

At thirty-six shipments:

$$
T(36)=4\\cdot 36^{\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
T(36)=4\\cdot 6
$$

$$
4\\cdot 6=24
$$

The extra hours are

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

The recovered law is $T=4 n^{\\frac{1}{2}}$, and the forty-hour ceiling binds at $n=100$. A $121$-shipment consignment is larger:

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

The logged drop gives $I=800 d^{-2}$. Doubling distance from two metres to four metres is an input factor of $2$ on the inverse-square law:

$$
\\frac{I(4)}{I(2)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The two logged stations confirm that factor:

$$
I(2)=800\\cdot 2^{-2}
$$

$$
2^{2}=4
$$

$$
I(2)=\\frac{800}{4}
$$

$$
\\frac{800}{4}=200
$$

$$
I(4)=800\\cdot 4^{-2}
$$

$$
4^{2}=16
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

The recovered law is $I=800 d^{-2}$. At five metres:

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

The recovered law is $I=800 d^{-2}$. At three metres:

$$
I(3)=\\frac{800}{3^{2}}
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

The recovered law is $I=800 d^{-2}$. The two logged stations are

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

The recovered law is $I=800 d^{-2}$. The distance that yields $8$ lux solves

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

The recorded rise of $1900$ is a difference of two three-quarter powers:

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

The recovered law is $C(n)=100 n^{\\frac{3}{4}}$. At eighty-one accounts:

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

The recovered law is $C(n)=100 n^{\\frac{3}{4}}$. The extra bill from sixteen accounts to eighty-one is a difference of two levels:

$$
C(81)=2700
$$

$$
C(16)=100\\cdot 8
$$

$$
100\\cdot 8=800
$$

$$
C(81)-C(16)=2700-800
$$

$$
2700-800=1900
$$

$$
1900>800
$$

The add-on of $1900$ already exceeds the sixteen-account bill of $800$, so the statement is True.`,
      `**C.** → True

The recovered law is $C(n)=100 n^{\\frac{3}{4}}$. A bill of $12500$ inverts that law:

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

The recovered law is $C(n)=100 n^{\\frac{3}{4}}$. Doubling sixteen accounts is the scale

$$
\\frac{C(32)}{C(16)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

$$
1.682\\neq 2
$$

The bill would double only if the exponent were $1$. Three quarters is below one, so the factor falls short of $2$, so the statement is False.`,
      `**E.** → True

The recovered law is $C(n)=100 n^{\\frac{3}{4}}$, and the rival quotes $R(n)=50n$. At eighty-one accounts:

$$
C(81)=2700
$$

$$
R(81)=50\\cdot 81
$$

$$
50\\cdot 81=4050
$$

$$
2700<4050
$$

The power-law bill of $2700$ already undercuts the rival's $4050$, so the statement is True.`,
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

The recorded gap of $43.75$ is a difference of two negative three-halves powers:

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

The recovered law is $c(x)=400 x^{-\\frac{3}{2}}$. At one hundred metres:

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

The recovered law is $c(x)=400 x^{-\\frac{3}{2}}$. Measuring distance in kilometres means $x=1000d$:

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

The new coefficient is about $0.01265$, already larger than $0.01$, so the statement is True.`,
      `**C.** → False

The recovered law is $c(x)=400 x^{-\\frac{3}{2}}$. At four metres:

$$
4^{\\frac{3}{2}}=8
$$

$$
c(4)=\\frac{400}{8}
$$

$$
\\frac{400}{8}=50
$$

$$
50>45
$$

The nearer monitor reads $50$, which is not under $45$, so the statement is False.`,
      `**D.** → True

The recovered law is $c(x)=400 x^{-\\frac{3}{2}}$. The drop from four metres to sixteen metres is a difference of two levels:

$$
c(4)=50
$$

$$
16^{\\frac{3}{2}}=64
$$

$$
c(16)=\\frac{400}{64}
$$

$$
\\frac{400}{64}=6.25
$$

$$
c(4)-c(16)=50-6.25
$$

$$
50-6.25=43.75
$$

$$
43.75>6.25
$$

The drop of $43.75$ already exceeds the remaining reading of $6.25$ at sixteen metres, so the statement is True.`,
      `**E.** → True

The recovered law is $c(x)=400 x^{-\\frac{3}{2}}$. A reading of $0.4$ inverts that law:

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
      `After both stages, the loss index is itself a power of wind speed.`,
      `Doubling the wind speed doubles the loss index.`,
      `At a wind speed of $64$ the loss index is already above $2000$.`,
      `The composed exponent exceeds one, so losses accelerate as the wind strengthens.`,
      `A loss of $1000$ already requires a wind speed above $50$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

A composition of power laws is again a power law. Substituting the surge stage into the loss stage multiplies the exponents and produces

$$
L(w)=4 w^{\\frac{3}{2}}
$$

which is a power of wind speed with exponent $\\frac{3}{2}$, so the statement is True.`,
      `**B.** → False

Doubling the wind would double the loss only if the composed exponent were $1$. With exponent $\\frac{3}{2}$ the scale factor is

$$
\\frac{L(2w)}{L(w)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83
$$

not $2$. The loss more than doubles, so the statement is False.`,
      `**C.** → True

At wind speed $64$ the composed power is $512$, so the loss index is

$$
L(64)=4\\cdot 64^{\\frac{3}{2}}
$$

$$
64^{\\frac{3}{2}}=8^{3}=512
$$

$$
L(64)=4\\cdot 512=2048
$$

That already clears $2000$, so the statement is True.`,
      `**D.** → True

The composed law is $L(w)=4 w^{\\frac{3}{2}}$. The exponent $\\frac{3}{2}$ exceeds $1$, so doubling the wind multiplies loss by $2\\sqrt{2}>2$. Losses accelerate as the wind strengthens, so the statement is True.`,
      `**E.** → False

A loss of $1000$ on $L(w)=4 w^{\\frac{3}{2}}$ means

$$
4 w^{\\frac{3}{2}}=1000
$$

$$
w^{\\frac{3}{2}}=250
$$

At wind speed $50$ the same power is $50\\sqrt{50}=250\\sqrt{2}\\approx 353.6$, which already exceeds $250$. The wind that hits a loss of $1000$ is therefore below $50$, so the statement is False.`,
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
      `At $0.16$ ADV, impact is already above $20$ basis points.`,
      `At $0.25$ ADV the scaled charge is already above $10$.`,
      `Once the scaled charge overtakes the notional fee, it stays larger at every bigger order.`,
      `Doubling order size from $0.04$ to $0.08$ ADV doubles impact.`,
      `Two orders of $0.04$ ADV together already produce more impact than one order of $0.16$ ADV.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded increment of $6$ basis points is a difference of two square roots:

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

The recovered law is $I(v)=60\\sqrt{v}$. At $0.16$ ADV:

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

The recovered impact is $I(v)=60\\sqrt{v}$, so the scaled charge is $60 v^{\\frac{3}{2}}$. At a quarter of ADV:

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

The scaled charge is $60 v^{\\frac{3}{2}}$ and the notional fee is $F(v)=30v$. They meet when

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

The recovered law is $I(v)=60\\sqrt{v}$. Doubling $0.04$ ADV lands at $0.08$:

$$
I(0.04)=60\\sqrt{0.04}
$$

$$
\\sqrt{0.04}=0.2
$$

$$
I(0.04)=12
$$

$$
I(0.08)=60\\sqrt{0.08}
$$

$$
60\\sqrt{0.08}=12\\sqrt{2}
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

Impact rises by a factor $\\sqrt{2}$, not by $2$. The new reading is about $16.97$, not $24$, so the statement is False.`,
      `**E.** → False

The recovered law is $I(v)=60\\sqrt{v}$. Two separate orders of $0.04$ ADV add

$$
2I(0.04)=2\\cdot 12
$$

$$
2\\cdot 12=24
$$

One order of $0.16$ ADV is

$$
I(0.16)=24
$$

$$
24=24
$$

The pair matches the single larger order; it does not produce more impact, so the statement is False.`,
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
      `The body mass that produces a given daily energy is a power function of that energy.`,
      `Energy use per kilogram falls as body mass rises.`,
      `A $64$ kg animal already uses more than $150$ energy units a day.`,
      `Combining two equal animals into one animal of twice the mass leaves total energy use unchanged.`,
      `A $216$ kg animal still uses under $400$ energy units a day.`,
    ],
    answer_key: [true, true, true, false, true],
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

Energy per kilogram is the allometric law divided by mass:

$$
\\frac{E(m)}{m}=10 m^{\\frac{2}{3}-1}=10 m^{-\\frac{1}{3}}
$$

The leftover exponent is negative, so the average falls as mass rises, so the statement is True.`,
      `**C.** → True

At $64$ kilograms the power is $16$, so daily use is

$$
E(64)=10\\cdot 16=160
$$

That already clears $150$, so the statement is True.`,
      `**D.** → False

Two equal animals use $2E(m)$, while one animal of doubled mass uses $E(2m)$. The scale factor is

$$
\\frac{E(2m)}{E(m)}=2^{\\frac{2}{3}}\\approx 1.59
$$

which is less than $2$, so merging them lowers total energy use, so the statement is False.`,
      `**E.** → True

The mass $216$ is $6^{3}$, so the power is $36$ and daily use is

$$
E(216)=10\\cdot 36=360
$$

Three hundred and sixty is still under $400$, so the statement is True.`,
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
      `A zone $9$ kilometres away still supplies more than $100$ visitors a week.`,
      `Footfall follows an inverse-square law of driving distance.`,
      `The drop from $4$ km to $16$ km already exceeds the remaining footfall at $16$ km.`,
      `Core catchment already ends before $11$ kilometres.`,
      `An extra kilometre of drive cuts more visitors far from the park than near it.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The recorded gap of $350$ visitors is a difference of two negative three-halves powers:

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

The recovered law is $f(d)=3200 d^{-\\frac{3}{2}}$. At nine kilometres:

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

The recovered law is $f(d)=3200 d^{-\\frac{3}{2}}$. An inverse-square law would carry exponent $-2$:

$$
-\\frac{3}{2}\\neq -2
$$

Quadrupling distance then cuts footfall by

$$
4^{-\\frac{3}{2}}=\\frac{1}{8}
$$

whereas inverse-square decay would cut it by $\\frac{1}{16}$. The given exponent is three halves, not two, so the statement is False.`,
      `**C.** → True

The recovered law is $f(d)=3200 d^{-\\frac{3}{2}}$. The drop from four kilometres to sixteen kilometres is a difference of two levels:

$$
f(4)=\\frac{3200}{8}
$$

$$
\\frac{3200}{8}=400
$$

$$
f(16)=\\frac{3200}{64}
$$

$$
\\frac{3200}{64}=50
$$

$$
f(4)-f(16)=400-50
$$

$$
400-50=350
$$

$$
350>50
$$

The drop of $350$ already exceeds the remaining footfall of $50$ at sixteen kilometres, so the statement is True.`,
      `**D.** → True

The recovered law is $f(d)=3200 d^{-\\frac{3}{2}}$. Core catchment ends where footfall hits $100$:

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

The recovered law is $f(d)=3200 d^{-\\frac{3}{2}}$. An extra kilometre is the magnitude of the derivative:

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

so $r=\\frac{1}{2}$. Then $A\\cdot 10=240$ pins $A=24$, and the recovered law is $y(a)=24\\sqrt{a}$. Output per square metre is

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

The recovered law is $y(a)=24\\sqrt{a}$. Doubling $225$ square metres to $450$ multiplies output by $\\sqrt{2}$:

$$
y(450)=24\\sqrt{450}
$$

$$
24\\sqrt{450}=360\\sqrt{2}
$$

$$
360\\sqrt{2}\\approx 509.1
$$

$$
509.1<520
$$

The proposal lands near $509.1$ kWh, which is not above $520$, so the statement is False.`,
      `**C.** → True

The recovered law is $y(a)=24\\sqrt{a}$. At four hundred square metres:

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

The recovered law is $y(a)=24\\sqrt{a}$. Doubling the recorded $240$ kWh means

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

The recovered law is $y(a)=24\\sqrt{a}$. Two separate $100$ m² arrays add

$$
2y(100)=2\\cdot 240
$$

$$
2\\cdot 240=480
$$

One $400$ m² array delivers

$$
y(400)=480
$$

$$
480=480
$$

The pair matches the single larger array; it does not beat it, so the statement is False.`,
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

so $b=-\\frac{1}{2}$. Then $A\\cdot 100^{-\\frac{1}{2}}=80$ pins $A=800$, and the recovered law is $c(N)=800 N^{-\\frac{1}{2}}$. Doubling $100$ thousand cells lands at $200$:

$$
c(200)=\\frac{800}{\\sqrt{200}}
$$

$$
\\sqrt{200}=10\\sqrt{2}
$$

$$
c(200)=\\frac{80}{\\sqrt{2}}
$$

$$
\\frac{80}{\\sqrt{2}}=40\\sqrt{2}
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

A single doubling multiplies cost by $\\frac{1}{\\sqrt{2}}$, not by $\\frac{1}{2}$. The new cost is about $56.57$ euros, not $40$, so the statement is False.`,
      `**B.** → True

The recovered law is $c(N)=800 N^{-\\frac{1}{2}}$. At $1600$ thousand cells:

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

The recovered law is $c(N)=800 N^{-\\frac{1}{2}}$. At $25$ thousand cells:

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

Cumulative spend is unit cost times volume:

$$
S(N)=N\\cdot 800 N^{-\\frac{1}{2}}
$$

$$
S(N)=800 N^{\\frac{1}{2}}
$$

At the two logged milestones:

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
2\\cdot S(100)=16000
$$

$$
16000=16000
$$

Spend at $400$ thousand equals twice the spend at $100$ thousand; it does not exceed twice, so the statement is False.`,
      `**E.** → True

The recovered law is $c(N)=800 N^{-\\frac{1}{2}}$. Quadrupling from $100$ to $400$ thousand cells cuts unit cost by

$$
c(100)=80
$$

$$
c(400)=40
$$

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
      `Doubling the discharge more than doubles sediment transport.`,
      `After both stages, transport is a power function of discharge.`,
      `A discharge of $400$ already pushes transport above $4500$ tonnes per day.`,
      `Doubling the flow velocity doubles sediment transport.`,
      `At discharge $64$, transport is still under $300$ tonnes per day.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The composed law is $S(q)=\\frac{5}{8} q^{\\frac{3}{2}}$. Doubling discharge multiplies transport by

$$
\\frac{S(2q)}{S(q)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83
$$

which exceeds $2$, so the statement is True.`,
      `**B.** → True

A composition of power laws is again a power law. Cubing the inner velocity stage multiplies the exponents and produces

$$
S(q)=\\frac{5}{8} q^{\\frac{3}{2}}
$$

which is a power of discharge with exponent $\\frac{3}{2}$, so the statement is True.`,
      `**C.** → True

The stability calculation on $S(q)=\\frac{5}{8} q^{\\frac{3}{2}}$ at discharge $400$ is

$$
400^{\\frac{3}{2}}=20^{3}=8000
$$

$$
S(400)=\\frac{5}{8}\\cdot 8000=5000
$$

Five thousand already clears $4500$ tonnes per day, so the statement is True.`,
      `**D.** → False

Doubling velocity acts on the transport stage alone. The exponent is $3$, so the scale factor is $2^{3}=8$, not $2$. Doubling velocity multiplies sediment transport by eight, so the statement is False.`,
      `**E.** → False

Velocity at discharge $64$ is $\\frac{\\sqrt{64}}{2}=4$, so transport is

$$
S=5\\cdot 4^{3}=5\\cdot 64=320
$$

Three hundred and twenty is not under $300$, so the statement is False.`,
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

Demand is $q(p)=4000 p^{-3}$. Revenue multiplies by price, which raises the exponent by one:

$$
R(p)=p\\cdot 4000 p^{-3}=4000 p^{-2}
$$

That is a power of $p$ with exponent $-2$, so the statement is True.`,
      `**B.** → True

The exponent $-2$ on $R(p)=4000 p^{-2}$ is negative, so $R$ is strictly decreasing for $p>0$. Raising the price always cuts revenue, so the statement is True.`,
      `**C.** → True

Revenue is $R(p)=4000 p^{-2}$. At a price of $2.50=\\frac{5}{2}$:

$$
\\left(\\frac{5}{2}\\right)^{2}=\\frac{25}{4}
$$

$$
R(2.50)=4000\\cdot\\frac{4}{25}=640
$$

Six hundred and forty is already below $700$, so the statement is True.`,
      `**D.** → True

The indexation is the multiplier $1.1$ acting through the demand exponent $-3$. The coefficient cancels:

$$
\\frac{q(1.1p)}{q(p)}=1.1^{-3}
$$

$$
1.1^{3}=1.331
$$

$$
1.1^{-3}=\\frac{1}{1.331}\\approx 0.751
$$

The relative cut is about $24.9\\%$, which is more than $20\\%$, so the statement is True.`,
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
      `At $16$ A the weld is already stronger than $300$ N.`,
      `An extra ampere adds more strength at $4$ A than it does at $9$ A.`,
      `The extra strength from $4$ A to $9$ A already exceeds the $4$ A reading.`,
      `The smallest current that clears the $400$ N reject line is below $18$ A.`,
      `Doubling current from $4$ A to $8$ A multiplies strength by more than $2.5$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The recovered law is $S(p)=5p^{\\frac{3}{2}}$. At sixteen amperes:

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
S(16)=5\\cdot 64
$$

$$
5\\cdot 64=320
$$

Three hundred and twenty already sits above $300$ N, so the statement is True.`,
      `**B.** → False

Strength is $S(p)=5p^{\\frac{3}{2}}$. An extra ampere is the slope:

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

Because $15<\\frac{45}{2}$, an extra ampere adds less at $4$ A than at $9$ A, so the statement is False.`,
      `**C.** → True

Strength is $S(p)=5p^{\\frac{3}{2}}$. The extra from $4$ A to $9$ A is

$$
S(9)-S(4)=135-40
$$

$$
135-40=95
$$

The $4$ A reading is $40$ N, and $95>40$, so that extra already exceeds the $4$ A reading, so the statement is True.`,
      `**D.** → False

Strength is $S(p)=5p^{\\frac{3}{2}}$. At eighteen amperes:

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
S(18)=5\\cdot 54\\sqrt{2}
$$

$$
S(18)=270\\sqrt{2}
$$

$$
270\\sqrt{2}\\approx 381.8
$$

About $381.8$ N still sits below the $400$ N reject line, so the smallest clearing current is not below $18$ A, so the statement is False.`,
      `**E.** → True

Strength is $S(p)=5p^{\\frac{3}{2}}$. Doubling current from $4$ A to $8$ A multiplies strength by

$$
\\frac{S(8)}{S(4)}=2^{\\frac{3}{2}}
$$

$$
2^{\\frac{3}{2}}=2\\sqrt{2}
$$

$$
2\\sqrt{2}\\approx 2.83
$$

That factor already sits above $2.5$, so the statement is True.`,
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

The recovered law is $H(m)=6m^{\\frac{2}{3}}$. At $125$ kg:

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
H(125)=6\\cdot 25
$$

$$
6\\cdot 25=150
$$

One hundred and fifty already sits above $140$ kN, so the statement is True.`,
      `**B.** → False

Holding power is $H(m)=6m^{\\frac{2}{3}}$. Doubling mass from $8$ kg to $16$ kg multiplies holding power by

$$
\\frac{H(16)}{H(8)}=2^{\\frac{2}{3}}
$$

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

That factor is not $2$. An exact doubling would need exponent $1$, so the statement is False.`,
      `**C.** → False

Holding power is $H(m)=6m^{\\frac{2}{3}}$. The $150$ kN storm floor is already met at $125$ kg, and

$$
\\frac{125}{1000}=0.125
$$

that mass is $0.125$ tonnes, which is not more than $1$ tonne, so the statement is False.`,
      `**D.** → True

The kilogram law is $H(m)=6m^{\\frac{2}{3}}$. Switching to tonnes is the substitution $m=1000t$:

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

The new coefficient is $600$, which already sits above $500$, so the statement is True.`,
      `**E.** → False

Holding power is $H(m)=6m^{\\frac{2}{3}}$. Two $8$ kg buoys hold

$$
2H(8)=2\\cdot 24
$$

$$
2\\cdot 24=48
$$

One $64$ kg buoy holds

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
H(64)=6\\cdot 16
$$

$$
6\\cdot 16=96
$$

Forty-eight sits below ninety-six, so two $8$ kg buoys do not hold more than one $64$ kg buoy, so the statement is False.`,
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

The recovered law is $T(d)=\\frac{800}{d^{2}}$. The $8$ Mbps floor is

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

Ten metres already sits under $12$ m, so the farthest reliable hop is under $12$ m, so the statement is True.`,
      `**B.** → False

Throughput is $T(d)=\\frac{800}{d^{2}}$. Doubling the hop from $4$ m to $8$ m multiplies throughput by

$$
\\frac{T(8)}{T(4)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

The reading falls from $50$ Mbps to $12.5$ Mbps, a cut to one quarter, not to one half, so the statement is False.`,
      `**C.** → False

Throughput is $T(d)=\\frac{800}{d^{2}}$. At $11$ m:

$$
T(11)=\\frac{800}{121}
$$

$$
\\frac{800}{121}\\approx 6.61
$$

About $6.61$ Mbps already sits below the $8$ Mbps floor, so the statement is False.`,
      `**D.** → True

Throughput is $T(d)=\\frac{800}{d^{2}}$. At the two hops:

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
T(4)-T(8)=50-12.5
$$

$$
50-12.5=37.5
$$

The remaining throughput at $8$ m is $12.5$ Mbps, and $37.5>12.5$, so the drop already exceeds that remainder, so the statement is True.`,
      `**E.** → True

Throughput is $T(d)=\\frac{800}{d^{2}}$. At $5$ m:

$$
T(5)=\\frac{800}{25}
$$

$$
\\frac{800}{25}=32
$$

Thirty-two already sits above $30$ Mbps, so the statement is True.`,
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

The recovered law is $G(m)=8m^{\\frac{3}{4}}$. At sixteen grams:

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
G(16)=8\\cdot 8
$$

$$
8\\cdot 8=64
$$

Sixty-four already sits above $50$ cm$^{2}$, so the statement is True.`,
      `**B.** → False

Gill area is $G(m)=8m^{\\frac{3}{4}}$. Doubling mass multiplies gill area by

$$
\\frac{G(2m)}{G(m)}=2^{\\frac{3}{4}}
$$

$$
2^{\\frac{3}{4}}\\approx 1.682
$$

That factor is not $2$. An exact doubling would need exponent $1$, so the statement is False.`,
      `**C.** → False

Gill area is $G(m)=8m^{\\frac{3}{4}}$. At sixty-four grams:

$$
64^{\\frac{3}{4}}=8
$$

$$
G(64)=8\\cdot 8
$$

$$
8\\cdot 8=64
$$

Sixty-four sits well short of $200$ cm$^{2}$, so the statement is False.`,
      `**D.** → True

Gill area is $G(m)=8m^{\\frac{3}{4}}$. Two $16$ g fish already total

$$
2G(16)=2\\cdot 64
$$

$$
2\\cdot 64=128
$$

One $64$ g fish has $G(64)=64$. Because $128>64$, the pair already has more gill area, so the statement is True.`,
      `**E.** → True

Gill area is $G(m)=8m^{\\frac{3}{4}}$. Area per gram is

$$
\\frac{G(m)}{m}=8m^{-\\frac{1}{4}}
$$

At $16$ g:

$$
\\frac{G(16)}{16}=8\\cdot 16^{-\\frac{1}{4}}
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

At $256$ g:

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

The intensity falls by $2$, which is already more than $1$, so the statement is True.`,
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

Quadrupling time multiplies strength by $\\sqrt{4}$, and the coefficient cancels:

$$
\\frac{S(4t)}{S(t)}=\\sqrt{4}
$$

$$
\\sqrt{4}=2
$$

The multiplier is exactly $2$ at every starting day, so the statement is True.`,
      `**B.** → True

The recorded gap recovers the law $S(t)=5\\sqrt{t}$, because

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

Ten already sits above $8$ MPa, so the statement is True.`,
      `**C.** → True

Strength is $S(t)=5\\sqrt{t}$. The two sample days read

$$
S(4)=5\\cdot\\sqrt{4}
$$

$$
S(4)=10
$$

$$
S(9)=5\\cdot\\sqrt{9}
$$

$$
S(9)=15
$$

$$
S(9)-S(4)=15-10
$$

$$
15-10=5
$$

Five already sits short of the day-$4$ strength of $10$ MPa, so the statement is True.`,
      `**D.** → True

Strength is $S(t)=5\\sqrt{t}$. Reaching $30$ MPa:

$$
5\\sqrt{t}=30
$$

$$
\\sqrt{t}=6
$$

$$
t=36
$$

Thirty-six days already sit under $40$, so the statement is True.`,
      `**E.** → False

Strength is $S(t)=5\\sqrt{t}$. Day $9$ carries

$$
S(9)=5\\cdot 3
$$

$$
5\\cdot 3=15
$$

The logged figure is the difference $15-10=5$, a gap, not the day-$9$ level, so the statement is False.`,
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
      `The exponent from the trusted pair is larger than one, so deflection outruns span.`,
      `The trusted quadratic already puts nine metres above $155$ mm.`,
      `Doubling the free span doubles the tip deflection.`,
      `The recorded third run sits more than $10$ mm below the trusted quadratic.`,
      `The third run sits on the same power law as the trusted pair.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The trusted spans double from $3$ m to $6$ m. Their ratio cancels $A$:

$$
\\frac{y(6)}{y(3)}=\\frac{72}{18}=2^{k}
$$

$$
4=2^{k}
$$

$$
k=2
$$

Two is larger than one, so each extra metre of span adds more deflection than the metre before it. Deflection outruns span, so the statement is True.`,
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

One hundred and sixty-two already sits above $155$ mm, so the statement is True.`,
      `**C.** → False

Doubling span would double deflection only if the exponent were $1$. With exponent $2$ the scale factor is

$$
\\frac{y(2L)}{y(L)}=2^{2}=4
$$

The trusted pair already shows that: $3$ m to $6$ m multiplies $18$ mm by four, to $72$ mm, not by two. Deflection quadruples, so the statement is False.`,
      `**D.** → True

The trusted quadratic predicts $162$ mm at nine metres, and the recorded third run is $150$ mm:

$$
162-150=12
$$

Twelve millimetres is more than a $10$ mm shortfall, so the statement is True.`,
      `**E.** → False

The trusted law predicts $y(9)=162$, not the recorded $150$. Fitting the suspect pair $(3,18)$ and $(9,150)$ uses that pair's ratio:

$$
\\frac{150}{18}=3^{k}
$$

$$
\\frac{25}{3}=3^{k}
$$

An exact square would need $3^{2}=9$, but $\\frac{25}{3}\\approx 8.333$. The third run does not sit on the same power law, so the statement is False.`,
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
      `The exponent is larger than one, so steel mass outruns height.`,
      `A $12$ m mast already uses more than $800$ kg of steel.`,
      `The percentage rule alone forces the coefficient $A$ without using the $10$ m reference.`,
      `A $10\\%$ height increase raises mass by more than $30\\%$.`,
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

so $1.2^{3}=1.728$ and $k=3$. Three is larger than one, so mass outruns height, so the statement is True.`,
      `**B.** → True

A $12$ m mast is the $10$ m reference lengthened by $20\\%$, so the design note supplies the multiplier $1.728$:

$$
\\frac{12}{10}=1.2
$$

$$
M(12)=500\\cdot 1.728=864
$$

Eight hundred and sixty-four already sits above $800$ kg, so the statement is True.`,
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

The mass rise is $0.331$, which is $33.1\\%$, already more than $30\\%$, so the statement is True.`,
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
      `Doubling the distance from $2$ m to $4$ m cuts intensity to one quarter.`,
      `At $4$ metres the intensity is already under $0.2$ W/m$^{2}$.`,
      `An extra metre cuts more intensity at $2$ m than it does at $6$ m.`,
      `At $6$ metres the intensity is still above the $0.08$ W/m$^{2}$ night cap.`,
      `The distance that meets the $0.08$ cap is already under $7$ m.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The meter reading recovers $I(d)=\\frac{2.88}{d^{2}}$, because

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

The factor is one quarter at every starting distance, so the statement is True.`,
      `**B.** → True

Intensity is $I(d)=\\frac{2.88}{d^{2}}$. At four metres:

$$
I(4)=\\frac{2.88}{16}
$$

$$
\\frac{2.88}{16}=0.18
$$

That already sits under $0.2$ W/m$^{2}$, so the statement is True.`,
      `**C.** → True

Intensity is $I(d)=\\frac{2.88}{d^{2}}$. An extra metre is the slope:

$$
I'(d)=-5.76\\, d^{-3}
$$

The drop per metre is $\\frac{5.76}{d^{3}}$. At $2$ m:

$$
\\frac{5.76}{2^{3}}=\\frac{5.76}{8}
$$

$$
\\frac{5.76}{8}=0.72
$$

At $6$ m:

$$
\\frac{5.76}{6^{3}}=\\frac{5.76}{216}
$$

$$
\\frac{5.76}{216}\\approx 0.0267
$$

The drop is steeper near the hub, so the statement is True.`,
      `**D.** → False

Intensity is $I(d)=\\frac{2.88}{d^{2}}$. At six metres:

$$
I(6)=\\frac{2.88}{36}
$$

$$
\\frac{2.88}{36}=0.08
$$

Six metres is the night-cap boundary. The word above excludes a boundary value, so the statement is False.`,
      `**E.** → True

Intensity is $I(d)=\\frac{2.88}{d^{2}}$. The $0.08$ cap is

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
d=6
$$

Six metres already sits under $7$ m, so the statement is True.`,
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
      `After both stages, jet speed is proportional to flow.`,
      `At $q=5$ the jet speed is already above $28$ m/s.`,
      `Doubling the flow doubles the head.`,
      `A jet speed of $40\\sqrt{2}$ m/s still takes under $12$ m$^{3}$/h of flow.`,
      `Head is proportional to jet speed.`,
    ],
    answer_key: [true, true, false, true, false],
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

Because $\\sqrt{2}>1.4$, one has $20\\sqrt{2}>28$. Jet speed already sits above $28$ m/s, so the statement is True.`,
      `**C.** → False

Doubling flow multiplies head by $2^{2}$:

$$
\\frac{H(2q)}{H(q)}=2^{2}=4
$$

Head quadruples rather than doubles. An exact doubling of head would need exponent $1$. The claim is about head, so the statement is False.`,
      `**D.** → True

The composition is $v(q)=4\\sqrt{2}\\, q$. A target of $40\\sqrt{2}$ m/s is

$$
4\\sqrt{2}\\, q=40\\sqrt{2}
$$

$$
q=10
$$

Ten cubic metres per hour already sits under $12$. A flow of $20$ would deliver $80\\sqrt{2}$ m/s, twice the target. The target needs $10$ m$^{3}$/h, so the statement is True.`,
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
      `With $36$ drivers the model already predicts more than $110$ pallets per hour.`,
      `Throughput per driver falls from $16$ to $36$ drivers by more than $1$ pallet per driver.`,
      `Reaching $150$ pallets per hour stays inside the safety cap.`,
      `Two $16$-driver shifts already match one $64$-driver shift.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

The logged shift recovers $T(s)=20\\sqrt{s}$, because

$$
A\\cdot 16^{\\frac{1}{2}}=80
$$

$$
A\\cdot 4=80
$$

$$
A=20
$$

Doubling the logged $80$ pallets is a crew factor $k$ with

$$
k^{\\frac{1}{2}}=2
$$

$$
k=4
$$

Four times the crew is more than a doubling, so the statement is True.`,
      `**B.** → True

Throughput is $T(s)=20\\sqrt{s}$. At the capped crew:

$$
T(36)=20\\cdot 36^{\\frac{1}{2}}
$$

$$
36^{\\frac{1}{2}}=6
$$

$$
T(36)=20\\cdot 6
$$

$$
20\\cdot 6=120
$$

One hundred and twenty already sits above $110$ pallets per hour, so the statement is True.`,
      `**C.** → True

Throughput is $T(s)=20\\sqrt{s}$. Throughput per driver is

$$
\\frac{T(s)}{s}=20s^{-\\frac{1}{2}}
$$

At $16$ drivers:

$$
\\frac{T(16)}{16}=\\frac{20}{4}
$$

$$
\\frac{20}{4}=5
$$

At $36$ drivers:

$$
\\frac{T(36)}{36}=\\frac{20}{6}
$$

$$
\\frac{20}{6}=\\frac{10}{3}
$$

$$
5-\\frac{10}{3}=\\frac{5}{3}
$$

The fall is $\\frac{5}{3}>1$ pallet per driver, so the statement is True.`,
      `**D.** → False

Throughput is $T(s)=20\\sqrt{s}$. A target of $150$ inverts as

$$
20\\sqrt{s}=150
$$

$$
\\sqrt{s}=\\frac{150}{20}
$$

$$
\\sqrt{s}=\\frac{15}{2}
$$

$$
s=\\left(\\frac{15}{2}\\right)^{2}
$$

$$
s=\\frac{225}{4}
$$

$$
\\frac{225}{4}=56.25
$$

That crew already exceeds the cap of $36$. Even the capped shift delivers only $120$ pallets per hour, so the statement is False.`,
      `**E.** → True

Throughput is $T(s)=20\\sqrt{s}$. Two $16$-driver shifts move

$$
2T(16)=2\\cdot 80
$$

$$
2\\cdot 80=160
$$

One $64$-driver shift moves

$$
T(64)=20\\cdot 64^{\\frac{1}{2}}
$$

$$
64^{\\frac{1}{2}}=8
$$

$$
T(64)=20\\cdot 8
$$

$$
20\\cdot 8=160
$$

The pair already matches the single $64$-driver shift, so the statement is True.`,
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
      `The exponent on price in the demand model is smaller than minus one, so subscribers fall faster than the price rises.`,
      `At a price of $16$ euros, monthly revenue is already under $600$ thousand euros.`,
      `Revenue is a power function of price.`,
      `To double monthly revenue from the recorded $4$-euro price, the service must cut that price in half.`,
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

Five hundred sits under six hundred, so the statement is True.`,
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

**2.** $R(16)=500<600$ and $R(9)=\\frac{2000}{3}\\approx 666.67$, which is not under $600$. Doubling $R(4)=1000$ needs the price factor $\\frac{1}{4}$, not $\\frac{1}{2}$.

**Answer.** $r=-\\frac{3}{2}$ | $A=2000$ | $R(16)=500$ | price factor $\\frac{1}{4}$ to double revenue`,
  },
  {
    id: `math-8-72`,
    case_id: `MATH 8.72`,
    title: `Fixed Retainer Plus a Square-Root Monitoring Fee`,
    context: `A compliance-monitoring platform bills $C(n)=F+A n^{\\frac{1}{2}}$ euros a month for $n\\ge 1$ branches, with both constants unknown. One hundred branches cost seven hundred euros, and four hundred branches cost one thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
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

Thirteen hundred exceeds twelve hundred, so the statement is True.`,
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

Five hundred and eighty is less than the $100$-branch invoice of $700$, so the statement is False.`,
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
    context: `A spare-parts depot reorders one component in batches of $q>0$ units. Annual ordering cost is $O(q)=A q^{-1}$ euros and annual holding cost is $H(q)=B q$ euros, with both coefficients unknown. At a batch of forty units the two components are equal, and each is one hundred and twenty euros. The annual total is $T=O+H$. Evaluate each statement. Mark it TRUE or FALSE.`,
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
      `At $16$ hours, average product is under $7$ units an hour.`,
      `To double output she must double the labour hours.`,
      `Average product falls by more than $1.5$ units an hour from $16$ to $81$ hours.`,
      `At $81$ hours, average product still exceeds $5$ units an hour.`,
      `The extra output from $16$ to $81$ hours already exceeds the $16$-hour output.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The recovered law is $Q(L)=12L^{\\frac{3}{4}}$. Average product at sixteen hours is the recorded output over the hours:

$$
\\frac{Q(16)}{16}=\\frac{96}{16}
$$

$$
\\frac{96}{16}=6
$$

Six sits under seven, so the statement is True.`,
      `**B.** → False

The recovered law is $Q(L)=12L^{\\frac{3}{4}}$. Doubling output is a labour factor $k$ with

$$
k^{\\frac{3}{4}}=2
$$

$$
k=2^{\\frac{4}{3}}
$$

$$
2^{\\frac{4}{3}}=2\\cdot 2^{\\frac{1}{3}}\\approx 2.52
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

Average product at eighty-one hours is

$$
\\frac{Q(81)}{81}=\\frac{324}{81}
$$

$$
\\frac{324}{81}=4
$$

Four does not exceed five, so the statement is False.`,
      `**E.** → True

The extra output from sixteen hours to eighty-one hours is

$$
Q(81)-Q(16)=324-96
$$

$$
324-96=228
$$

The sixteen-hour output is $96$. Because $228>96$, the extra already exceeds that reading, so the statement is True.`,
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
      `As cumulative output grows without bound, unit time approaches the handling floor without ever reaching it.`,
      `After $900$ cumulative units, modelled unit time is already under $10$ minutes.`,
      `Quadrupling cumulative output halves the learning component.`,
      `Quadrupling cumulative output halves the modelled unit time.`,
      `The unit built after $4$ cumulative units takes under $30$ minutes.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Unit time is $t(n)=8+50n^{-\\frac{1}{2}}$. As $n$ grows the learning term dies, so $t$ approaches $8$. No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the floor is approached and never attained, so the statement is True.`,
      `**B.** → True

Unit time is $t(n)=8+50n^{-\\frac{1}{2}}$. After nine hundred units:

$$
900^{\\frac{1}{2}}=30
$$

$$
t(900)=8+\\frac{50}{30}
$$

$$
t(900)=8+\\frac{5}{3}=\\frac{29}{3}\\approx 9.67
$$

Nine and two thirds minutes sits under ten, so the statement is True.`,
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

**1.** The floor $8$ is a horizontal asymptote, never attained. $t(900)=\\frac{29}{3}\\approx 9.67<10$.

**2.** Quadrupling halves the learning term, $10$ to $5$, but cuts the total only from $18$ to $13$. After four units, $t(4)=33$, which is not under $30$.

**Answer.** $F=8$ | $A=50$ | $t(25)=18$ | $t(100)=13$ | $t(900)=\\frac{29}{3}$`,
  },
  {
    id: `math-8-76`,
    case_id: `MATH 8.76`,
    title: `Break-Even for a Fish Farm With Diminishing Harvest Returns`,
    context: `A fish farm turns feed into harvest revenue $R(x)=A x^{\\frac{2}{3}}$ thousand euros in a season, where $x>0$ is tonnes of feed, while feed and handling cost $C(x)=30x$ thousand euros. At eight tonnes of feed, harvest revenue was three hundred and sixty thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
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

Proportionality would mean revenue is a constant times feed, so exponent $1$. Harvest follows $R(x)=A x^{\\frac{2}{3}}$, and two thirds is not one. Doubling feed therefore multiplies revenue by

$$
2^{\\frac{2}{3}}\\approx 1.59
$$

not by $2$, so the statement is False.`,
      `**B.** → True

Revenue is $R(x)=90x^{\\frac{2}{3}}$ and cost is $C(x)=30x$. At sixty-four tonnes:

$$
64^{\\frac{2}{3}}=16
$$

$$
R(64)=90\\cdot 16=1440
$$

$$
C(64)=30\\cdot 64=1920
$$

Cost $1920$ already exceeds revenue $1440$, so the statement is True.`,
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

**1.** Revenue is not proportional to feed. At $x=64$, cost $1920$ already exceeds revenue $1440$. Profit at $x=8$ is $120$.

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
      `At index $9$ the modelled handling cost is already above $150$ euros.`,
      `Handling cost grows faster than the pallet-volume index.`,
      `Because the exponent exceeds one, equal gaps in the index produce equal gaps in cost.`,
      `Raising the index from $9$ to $25$ adds under $500$ euros of handling cost.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

The recovered law is $f(x)=6x^{\\frac{3}{2}}$. Multiplying the index by $4$ multiplies cost by

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

The recovered law is $f(x)=6x^{\\frac{3}{2}}$. At index nine:

$$
9^{\\frac{3}{2}}=27
$$

$$
f(9)=6\\cdot 27
$$

$$
6\\cdot 27=162
$$

One hundred and sixty-two sits above $150$ euros, so the statement is True.`,
      `**C.** → True

At index four:

$$
4^{\\frac{3}{2}}=8
$$

$$
f(4)=6\\cdot 8
$$

$$
6\\cdot 8=48
$$

Index $16$ is four times $4$, and

$$
16^{\\frac{3}{2}}=64
$$

$$
f(16)=6\\cdot 64
$$

$$
6\\cdot 64=384
$$

$$
\\frac{384}{48}=8
$$

The index rose by a factor of $4$ while cost rose by a factor of $8$. Cost outruns the index, so the statement is True.`,
      `**D.** → False

Equal cost gaps would need a linear rule. Handling is $f(x)=6x^{\\frac{3}{2}}$, so the slope is

$$
f'(x)=9x^{\\frac{1}{2}}
$$

$$
f'(4)=9\\cdot 2
$$

$$
9\\cdot 2=18
$$

$$
f'(9)=9\\cdot 3
$$

$$
9\\cdot 3=27
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
6\\cdot 125=750
$$

$$
f(25)-f(9)=750-162
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

The recovered law is $W(s)=5s^{\\frac{3}{2}}$. The $320$ kilogram ceiling solves

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
4^{2}=16
$$

Sixteen sits below twenty. Every larger index breaches the permit, so the statement is True.`,
      `**B.** → False

The recovered inverse is $s=\\left(\\frac{W}{5}\\right)^{\\frac{2}{3}}$, and the $320$ kg cap already gives $s=16$. Doubling the ceiling to $640$ kg multiplies permitted scale by

$$
2^{\\frac{2}{3}}\\approx 1.587
$$

$$
s=16\\cdot 2^{\\frac{2}{3}}\\approx 25.4
$$

About $25.4$ is not $32$. Doubling the ceiling does not double the admissible scale, so the statement is False.`,
      `**C.** → False

If the coefficient doubled to $10$, the same ceiling would solve

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
s=16\\cdot 2^{-\\frac{2}{3}}\\approx 10.08
$$

Halving $16$ would give $8$. The admissible scale falls to about $10.08$, not to $8$, so the statement is False.`,
      `**D.** → True

The recovered law is $W(s)=5s^{\\frac{3}{2}}$. At scale four:

$$
4^{\\frac{3}{2}}=8
$$

$$
W(4)=5\\cdot 8
$$

$$
5\\cdot 8=40
$$

Forty kilograms is under fifty, so the statement is True.`,
      `**E.** → True

At scale nine the load is the recorded $135$ kilograms. At scale four it is $40$. The extra is

$$
W(9)-W(4)=135-40
$$

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
      `The elasticity shortcut and the exact power agree on the loss from a $25\\%$ tariff rise.`,
      `Raising the tariff by $25\\%$ leaves more than $2500$ occupied spaces.`,
      `The elasticity shortcut overstates the true loss from a $25\\%$ tariff rise.`,
      `Cutting the tariff by $25\\%$ raises demand by the same percentage that a $25\\%$ rise cuts it.`,
      `At a tariff of $2$ euros, hourly demand exceeds $8000$ occupied spaces.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A.** → False

A $25\\%$ tariff rise is the factor $\\frac{5}{4}$. The elasticity shortcut predicts

$$
-2\\times 25\\%=-50\\%
$$

The exact multiplier raises that factor to the exponent $-2$:

$$
\\left(\\frac{5}{4}\\right)^{-2}=\\frac{16}{25}=0.64
$$

Demand keeps $64\\%$ of its level, a cut of $36\\%$, not $50\\%$. The two methods disagree, so the statement is False.`,
      `**B.** → True

Demand at three euros is $4000$. The exact factor for a $25\\%$ rise is $\\frac{16}{25}$:

$$
4000\\cdot\\frac{16}{25}=2560
$$

Two thousand five hundred and sixty exceeds two thousand five hundred, so the statement is True.`,
      `**C.** → True

The shortcut predicts a $50\\%$ loss. The exact factor is $\\frac{16}{25}=0.64$, a $36\\%$ loss. A predicted $50\\%$ against a true $36\\%$ overstates the loss, so the statement is True.`,
      `**D.** → False

A $25\\%$ rise multiplies demand by $\\frac{16}{25}$, a $36\\%$ loss. A $25\\%$ cut is the factor $\\frac{3}{4}$:

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

**1.** A $25\\%$ rise has exact multiplier $0.64$, a $36\\%$ cut, so $q(3.75)=2560>2500$. The shortcut's $50\\%$ overstates that loss. The two routes do not agree.

**2.** A $25\\%$ cut raises demand by about $77.8\\%$, not by $36\\%$. At $p=2$, demand is $9000>8000$.

**Answer.** $A=36000$ | exact cut $36\\%$ for a $25\\%$ rise | $q(3.75)=2560$ | $q(2)=9000$`,
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

The half-metre weighing pins the coefficient:

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

The recovered law is $M(h)=240h^{3}$. Doubling height multiplies mass by

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
M(1)=240\\cdot 1^{3}
$$

$$
M(1)=240
$$

Two hundred and forty exceeds $200$ kg, so the statement is True.`,
      `**D.** → True

Two one-metre bells weigh

$$
2\\cdot M(1)=2\\cdot 240
$$

$$
2\\cdot 240=480
$$

One $1.5$ m bell weighs $810$ kg, as in A. Because $480<810$, the pair already falls short, so the statement is True.`,
      `**E.** → True

At two metres:

$$
M(2)=240\\cdot 2^{3}
$$

$$
2^{3}=8
$$

$$
M(2)=240\\cdot 8=1920
$$

$$
M(2)-M(1)=1920-240
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
      `Absorbed power grows faster than speed.`,
      `If the rider doubles speed, absorbed power doubles.`,
      `An extra metre per second of speed adds more watts at $12$ m/s than it does at $8$ m/s.`,
      `At $8$ m/s the rider is still under $300$ W.`,
      `At $12$ m/s the rider is still under $800$ W.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Power is $P(v)=\\frac{1}{2}v^{3}$. The exponent $3$ sits above one:

$$
3>1
$$

so each extra metre per second costs more watts than the metre before it. Power outruns speed, so the statement is True.`,
      `**B.** → False

Doubling speed would double power only if the exponent were $1$. With exponent $3$ the scale factor is

$$
\\frac{P(2v)}{P(v)}=2^{3}
$$

$$
2^{3}=8
$$

Power rises eightfold, not twofold, so the statement is False.`,
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

At $8$ m/s the cubic is

$$
P(8)=\\frac{1}{2}\\cdot 8^{3}
$$

$$
8^{3}=512
$$

$$
P(8)=\\frac{1}{2}\\cdot 512=256
$$

Because $256<300$, the rider is still under $300$ W, so the statement is True.`,
      `**E.** → False

At $12$ m/s:

$$
P(12)=\\frac{1}{2}\\cdot 12^{3}
$$

$$
12^{2}=144
$$

$$
12^{3}=144\\cdot 12=1728
$$

$$
P(12)=\\frac{1}{2}\\cdot 1728=864
$$

Because $864>800$, the rider is not under $800$ W, so the statement is False.`,
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

The doubling record $2^{r}=\\frac{1}{8}$ and the calibration $S(2)=50$ recover

$$
S(x)=400x^{-3}
$$

Inverse proportionality would mean exponent $-1$, so doubling depth would multiply the signal by

$$
2^{-1}=\\frac{1}{2}
$$

The recovered exponent is $-3$, and

$$
2^{-3}=\\frac{1}{8}
$$

The law is inverse-cube, not inverse-linear, so the statement is False.`,
      `**B.** → False

The recovered law is $S(x)=400x^{-3}$. Doubling depth multiplies the signal by

$$
\\frac{S(2x)}{S(x)}=2^{-3}
$$

$$
2^{-3}=\\frac{1}{8}
$$

A cut to one half would need exponent $-1$. Doubling leaves one eighth of the signal, not one half, so the statement is False.`,
      `**C.** → True

The recovered law is $S(x)=400x^{-3}$. At four metres:

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

The locator already reads under $7$ millivolts, so the statement is True.`,
      `**D.** → False

The recovered law is $S(x)=400x^{-3}$. At a reading of $3.2$ millivolts:

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

because $5^{3}=125$ and depth is positive. Five metres is not more than $8$ metres, so the statement is False.`,
      `**E.** → True

The recovered law is $S(x)=400x^{-3}$, with $S(2)=50$ and $S(4)=6.25$. The drop from $2$ m to $4$ m is

$$
50-6.25=43.75
$$

The remaining signal at $4$ m is $6.25$, and

$$
43.75>6.25
$$

The drop already exceeds the remaining signal, so the statement is True.`,
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
      `Oxygen demand grows more slowly than body mass.`,
      `Oxygen demand per square centimetre of gill falls as the fish grows.`,
      `Two $16$ g fish together have the same total gill area as one $32$ g fish.`,
      `A $256$ g fish already demands more than $300$ millilitres per hour.`,
      `$16$ fish of $16$ g together still demand under $600$ millilitres per hour.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The exponent on demand is $\\frac{3}{4}$. An exponent smaller than one means demand grows more slowly than body mass: each extra gram adds less oxygen demand than the gram before it.

$$
\\frac{3}{4}<1
$$

Three quarters is below one, so the statement is True.`,
      `**B.** → False

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
      `**C.** → False

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
      `**D.** → True

Demand is $D(m)=5m^{\\frac{3}{4}}$. At $256$ g the mass is a fourth power:

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
      `**E.** → False

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

Because $640>600$, they do not still demand under $600$ millilitres per hour, so the statement is False.`,
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
      `A tube of radius $3$ mm already delivers more than $200$ litres per hour.`,
      `Doubling the tube radius doubles the flow.`,
      `A tube of radius $1$ mm still delivers more than $10$ litres per hour.`,
      `The mean velocity index is the same in every tube.`,
      `Two $1$ mm tubes together already fall short of one $2$ mm tube.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

The doubling record $2^{k}=16$ and the bench test $Q(2)=48$ recover

$$
Q(r)=3r^{4}
$$

At radius $3$ mm:

$$
3^{2}=9
$$

$$
3^{4}=81
$$

$$
Q(3)=3\\cdot 81
$$

$$
3\\cdot 81=243
$$

$$
243>200
$$

The tube already delivers more than $200$ litres per hour, so the statement is True.`,
      `**B.** → False

The recovered law is $Q(r)=3r^{4}$. Doubling the radius would double the flow only if the exponent were $1$. With exponent $4$ the scale factor is

$$
\\frac{Q(2r)}{Q(r)}=2^{4}
$$

$$
2^{4}=16
$$

Flow rises sixteenfold, not twofold, so the statement is False.`,
      `**C.** → False

The recovered law is $Q(r)=3r^{4}$. At radius $1$ mm every power of $1$ is $1$, so the delivery equals the coefficient:

$$
Q(1)=3\\cdot 1^{4}
$$

$$
Q(1)=3
$$

$$
3<10
$$

The tube does not still deliver more than $10$ litres per hour, so the statement is False.`,
      `**D.** → False

The recovered law is $Q(r)=3r^{4}$. The mean velocity index divides flow by the tube's cross-section $\\pi r^{2}$, so the exponents subtract rather than cancel:

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{3r^{4}}{\\pi r^{2}}
$$

$$
\\frac{Q(r)}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}
$$

The leftover exponent $2$ is not zero, so the index grows with the radius. It is not the same in every tube, so the statement is False.`,
      `**E.** → True

The recovered law is $Q(r)=3r^{4}$. Two $1$ mm tubes together deliver

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

Two $1$ mm tubes fall short of one $2$ mm tube, so the statement is True.`,
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
      `The distance needed for a given dose rate is itself a power of that dose rate.`,
      `At $6$ metres the dose rate is already under $25$ microsieverts per hour.`,
      `The barrier sits farther than $15$ metres from the source.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

The quadrupling record gives $r=-2$. Doubling the distance is then the factor $2^{-2}$:

$$
\\frac{H(2d)}{H(d)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

A cut to one half would need exponent $-1$. Doubling leaves one quarter of the dose rate, not one half, so the statement is False.`,
      `**B.** → True

The recovered law is $H(d)=720d^{-2}$. At three metres the survey reads $80$ microsieverts per hour. At six metres, one doubling quarters the dose rate:

$$
H(6)=80\\cdot\\frac{1}{4}
$$

$$
H(6)=20
$$

The drop from $3$ metres to $6$ metres is

$$
80-20=60
$$

The remaining dose at $6$ metres is $20$, and

$$
60>20
$$

The drop already exceeds the remaining dose, so the statement is True.`,
      `**C.** → True

From $H=\\frac{720}{d^{2}}$ one gets

$$
d^{2}=\\frac{720}{H}
$$

$$
d=\\sqrt{720}\\, H^{-\\frac{1}{2}}
$$

A power with a nonzero exponent inverts to another power. Distance is a power of the dose rate, so the statement is True.`,
      `**D.** → True

Six metres is one doubling of the three-metre survey, where the meter read $80$ microsieverts per hour. Doubling quarters the dose rate, so

$$
H(6)=80\\cdot\\frac{1}{4}=20
$$

Because $20<25$, the dose rate is already under $25$ microsieverts per hour, so the statement is True.`,
      `**E.** → False

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

Twelve metres is not farther than $15$ metres, so the statement is False.`,
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

**2.** Doubling quarters the dose rate, not halves it. The inverse of $(2)$ is a power. The drop $H(3)-H(6)=60$ already exceeds the remaining dose $H(6)=20$.

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
      `The stained area is itself a power of elapsed time.`,
      `The stained area grows faster than elapsed time.`,
      `Doubling the elapsed time doubles the stained area.`,
      `At hour $8$ the plume radius is already more than $50$ metres.`,
      `The plume radius reaches $240$ metres in under $50$ hours.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The radius law is $r(t)=15t^{\\frac{2}{3}}$. Squaring a power multiplies its exponent by $2$:

$$
S(t)=\\pi\\bigl(15t^{\\frac{2}{3}}\\bigr)^{2}
$$

$$
S(t)=225\\pi\\, t^{\\frac{4}{3}}
$$

That is a monomial in $t$. The stained area is a power of elapsed time, so the statement is True.`,
      `**B.** → True

The stained area is $S(t)=225\\pi\\, t^{\\frac{4}{3}}$. Proportional growth with elapsed time would mean composed exponent $1$. Because

$$
\\frac{4}{3}>1
$$

area outruns a proportional clock, so the statement is True.`,
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
      `**D.** → True

The radius law is $r(t)=15t^{\\frac{2}{3}}$. At hour $8$:

$$
8^{\\frac{2}{3}}=4
$$

$$
r(8)=15\\cdot 4=60
$$

Forward check: $r(1)=15$, and $60-15=45$, which matches the survey gap. Because $60>50$, the radius is already more than $50$ metres, so the statement is True.`,
      `**E.** → False

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

$64$ hours is not under $50$ hours, so the statement is False.`,
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
      `Switching the head to centimetres makes the new coefficient (cubic metres per second) larger than $0.02$.`,
      `A head of $1$ metre still discharges under $20$ cubic metres per second.`,
      `Doubling the head doubles the discharge.`,
      `A head of $4$ metres still discharges under $100$ cubic metres per second.`,
      `The extra discharge from $0.25$ m to $1$ m already exceeds the $0.25$ m gauging.`,
    ],
    answer_key: [false, true, false, false, true],
    tactical_explanations: [
      `**A.** → False

The gauging $Q(0.25)=2$ recovers

$$
Q=16h^{\\frac{3}{2}}
$$

Switching the head to centimetres is $h=\\frac{h_{\\mathrm{cm}}}{100}$:

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

The recovered law is $Q=16h^{\\frac{3}{2}}$. At a head of one metre every power of $1$ is $1$, so the discharge equals the coefficient:

$$
Q(1)=16\\cdot 1^{\\frac{3}{2}}
$$

$$
Q(1)=16
$$

$$
16<20
$$

The weir still discharges under $20$ cubic metres per second, so the statement is True.`,
      `**C.** → False

The recovered law is $Q=16h^{\\frac{3}{2}}$. Doubling the head would double discharge only if the exponent were $1$. With exponent $\\frac{3}{2}$ the scale factor is

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

Doubling the head multiplies discharge by about $2.83$, not by $2$, so the statement is False.`,
      `**D.** → False

The recovered law is $Q=16h^{\\frac{3}{2}}$. At a head of $4$ metres:

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
16\\cdot 8=128
$$

$$
128>100
$$

The weir does not still discharge under $100$ cubic metres per second, so the statement is False.`,
      `**E.** → True

The recovered law is $Q=16h^{\\frac{3}{2}}$, with $Q(0.25)=2$ and $Q(1)=16$. The extra discharge from $0.25$ m to $1$ m is

$$
16-2=14
$$

$$
14>2
$$

The extra already exceeds the $0.25$ m gauging, so the statement is True.`,
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
      `Fuel use grows faster than batch mass.`,
      `Doubling the batch mass doubles fuel use.`,
      `Fuel use per tonne falls as the batch grows.`,
      `A $10$-tonne batch already uses more than $250$ litres.`,
      `A $6$-tonne batch still uses under $100$ litres.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

A $300\\%$ rise on doubling means the new value is four times the old:

$$
1+\\frac{300}{100}=4
$$

$$
2^{r}=4
$$

so $r=2$. An exponent larger than one means fuel outruns mass: each extra tonne costs more litres than the tonne before it. Two sits above one, so the statement is True.`,
      `**B.** → False

Doubling mass would double fuel only if the exponent were $1$. With $r=2$ the scale factor is

$$
\\frac{F(2x)}{F(x)}=2^{2}=4
$$

Reading $300\\%$ as a doubling drops the baseline $100\\%$. Fuel use is quadrupled, not doubled, so the statement is False.`,
      `**C.** → False

Fuel per tonne divides $F(x)=3x^{2}$ by the mass, which lowers the exponent by $1$:

$$
\\frac{F(x)}{x}=3x
$$

The leftover exponent $1$ is not negative: litres per tonne climb in proportion to batch mass. The per-tonne figure rises, so the statement is False.`,
      `**D.** → True

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

Because $300>250$, the batch already uses more than $250$ litres, so the statement is True.`,
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

The companion level is $F(2)=12$, and $108-12=96$ recovers the log entry. Because $108>100$, the $6$-tonne batch does not still use under $100$ litres, so the statement is False.`,
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

Raising a power to a power multiplies the exponents: $\\frac{1}{2}\\cdot 4=2$. The composition is a monomial in $t$, so the statement is True.`,
      `**B.** → False

The composed index is $t^{2}$. Proportional growth would mean exponent $1$. Doubling the throttle therefore multiplies the index by

$$
2^{2}=4
$$

A proportional law would have returned the factor $2$. The composed exponent is $2$, so the statement is False.`,
      `**C.** → True

Mass flow per unit of throttle is the quotient of $m(t)=2t^{\\frac{1}{2}}$ by $t$:

$$
\\frac{m(t)}{t}=2t^{\\frac{1}{2}-1}
$$

$$
\\frac{m(t)}{t}=2t^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so the quotient falls as $t$ rises. At the calibration it is $\\frac{6}{9}=\\frac{2}{3}$, and at throttle $25$ it is $\\frac{10}{25}=\\frac{2}{5}$. Mass flow per unit of throttle falls, so the statement is True.`,
      `**D.** → True

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

Because $10>8$, the mass flow is already above $8$ tonnes per hour, so the statement is True.`,
      `**E.** → False

The composed index is $t^{2}$. At index $81$:

$$
t^{2}=81
$$

$$
t=9
$$

because throttle is positive. Nine is not above $20$. Running the chain forward from $t=9$ returns $m=6$ and $P=\\frac{6^{4}}{16}=81$. The required throttle setting is $9$, so the statement is False.`,
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

The ratio of the two quotes is

$$
\\frac{Q(d)}{L(d)}=\\frac{1}{20}d^{\\frac{1}{2}}
$$

App L is strictly faster when that ratio exceeds $1$, which is $d>400$. The map $d\\mapsto d^{\\frac{1}{2}}$ is strictly increasing on $d>0$, so the ratio itself is strictly increasing. Once it crosses $1$ it stays above $1$. App Q never catches up, so the statement is True.`,
      `**C.** → True

Wait per kilometre is the quotient of $L(d)=4d^{\\frac{1}{2}}$ by $d$:

$$
\\frac{L(d)}{d}=4d^{-\\frac{1}{2}}
$$

The leftover exponent is negative, so the quotient falls as $d$ grows. At the logged trip it is $\\frac{20}{25}=0.8$, and at $d=100$ it is $0.4$. Wait per kilometre falls, so the statement is True.`,
      `**D.** → False

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

The endpoint is attained: $L(25)=20$. Every longer trip on App L breaches the agreement. Thirty kilometres sits past $25$, so the statement is False.`,
      `**E.** → True

At the meeting distance $d=400$:

$$
L(400)=4\\cdot 20=80
$$

$$
Q(400)=\\frac{1}{5}\\cdot 400=80
$$

Because $80>70$, both apps already quote more than $70$ minutes, so the statement is True.`,
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
    context: `A field team models wetland evaporation in millimetres per day by $E(h)=A h^{r}$ against humidity deficit $h>0$, with both constants unknown. Deficits of one and four recorded twenty and forty millimetres per day, and a third reading at deficit nine recorded sixty. Evaluate each statement. Mark it TRUE or FALSE.`,
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

The forty-millimetre reading is at deficit $4$. Doubling evaporation asks for $80$. The law is $E(h)=20h^{\\frac{1}{2}}$:

$$
20h^{\\frac{1}{2}}=80
$$

$$
h^{\\frac{1}{2}}=4
$$

$$
h=16
$$

Doubling the deficit would have been $8$, not $16$. Sixteen is four times four, so she must more than double the humidity, so the statement is True.`,
      `**D.** → False

An extra unit of deficit is the slope $E'(h)=10h^{-\\frac{1}{2}}$. After a deficit of one:

$$
E'(1)=10\\cdot 1^{-\\frac{1}{2}}
$$

$$
E'(1)=10
$$

After a deficit of four:

$$
E'(4)=10\\cdot 4^{-\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
E'(4)=\\frac{10}{2}
$$

$$
E'(4)=5
$$

Because $r<1$ the slope falls. An extra unit adds $5$ millimetres after four, less than the $10$ after one, so the statement is False.`,
      `**E.** → True

At deficit $25$:

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
    context: `A city parks office models annual cooling benefit by $B(n)=A n^{\\frac{1}{2}}$ thousand euros and annual upkeep by $C(n)=k n$ thousand euros, where $n>0$ is the number of thousand trees planted. Raising the planting from four thousand trees to nine thousand increased cooling benefit by twelve thousand euros. At nine thousand trees, upkeep was eighteen thousand euros. Net benefit is $N(n)=B(n)-C(n)$. Evaluate each statement. Mark it TRUE or FALSE.`,
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

Net benefit is

$$
N(n)=12n^{\\frac{1}{2}}-2n
$$

That is a sum of two distinct powers of $n$, not a single power. Linear upkeep is a different exponent from square-root cooling, so the net is not a power function of the planting, so the statement is True.`,
      `**B.** → True

Cooling is $B(n)=12n^{\\frac{1}{2}}$ and upkeep is $C(n)=2n$. At nine thousand trees:

$$
B(9)=12\\cdot 3
$$

$$
B(9)=36
$$

$$
C(9)=18
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

$$
16<20
$$

Net is $16$ thousand euros, which is not more than $20$. The claimed $20$ overshoots the net, and $24$ is cooling before upkeep, so the statement is False.`,
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

**1.** $N(9)=18>15$ and $N(4)=16$, which is not more than $20$. The figure $24$ is $B(4)$, not the net.

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
      `Doubling the five-euro price halves weekly demand.`,
      `At $10$ euros the kiosk already sells under $25$ packs a week.`,
      `Weekly revenue falls as the price rises.`,
      `A target of $125$ packs a week needs a price above $5$ euros.`,
    ],
    answer_key: [true, false, true, true, false],
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
      `**B.** → False

Doubling the price would halve demand only if the exponent were $-1$. With exponent $-2$:

$$
\\frac{q(2p)}{q(p)}=2^{-2}
$$

$$
2^{-2}=\\frac{1}{4}
$$

From the recorded pair, ten euros would leave $80\\cdot\\frac{1}{4}=20$ packs, not $40$. Demand falls to one quarter, not to one half, so the statement is False.`,
      `**C.** → True

Ten euros is twice five, so demand scales by $2^{-2}$:

$$
\\frac{q(10)}{q(5)}=2^{-2}
$$

$$
q(10)=80\\cdot\\frac{1}{4}
$$

$$
q(10)=20
$$

$$
20<25
$$

Weekly sales are $20$ packs, already under $25$, so the statement is True.`,
      `**D.** → True

Weekly revenue is price times demand:

$$
R(p)=p\\cdot 2000p^{-2}
$$

$$
R(p)=\\frac{2000}{p}
$$

The leftover exponent is $-1$, so $R$ falls as $p$ rises. From the recorded pair, $R(5)=400$ and $R(10)=200$. The till shrinks as the price rises, so the statement is True.`,
      `**E.** → False

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
p=4
$$

Four euros sits below five, not above. The unique positive price that moves $125$ packs is $4$ euros, so the statement is False.`,
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

**2.** $q(10)=20<25$. A target of $125$ packs requires $p=4$, which is not above $5$.

**3.** $(2)$ falls with price. Doubling price multiplies demand by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$.

**Answer.** $A=2000$ | $q(10)=20$ | $p=4$ for $125$ packs | $R(p)=\\frac{2000}{p}$`,
  },
  {
    id: `math-8-94`,
    case_id: `MATH 8.94`,
    title: `Bike-Share Passes Under a Subsidy Price Index`,
    context: `Weekly bike-share day-pass sales follow $q(p)=A p^{\\frac{-3}{2}}$ when the pass price is $p>0$ euros. A pilot at sixteen euros sold fifty passes. Policy indexes the pass by $p(s)=B s^{\\frac{2}{3}}$ for a positive subsidy index $s$, and at subsidy index eight the posted price is sixteen euros. Evaluate each statement. Mark it TRUE or FALSE.`,
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

Composed demand is $\\frac{400}{s}$. The product of the given exponents is

$$
\\left(\\frac{2}{3}\\right)\\left(-\\frac{3}{2}\\right)=-1
$$

A monomial $400 s^{-1}$ is a power of $s$. Composed demand is a power function of the subsidy index, so the statement is True.`,
      `**B.** → False

The subsidy exponent is $-1$, so tripling the index multiplies demand by $3^{-1}$:

$$
\\frac{q(p(3s))}{q(p(s))}=3^{-1}
$$

$$
3^{-1}=\\frac{1}{3}
$$

At $s=8$ sales are $50$. Tripling to $24$ would leave $\\frac{50}{3}$ passes, not $150$. Demand falls to a third rather than tripling, so the statement is False.`,
      `**C.** → True

At subsidy index $8$ the policy posts the pilot price of $16$ euros, and the pilot sold fifty passes at that price.

$$
q(p(8))=q(16)
$$

$$
q(p(8))=50
$$

$$
50>40
$$

Composed demand is $50$ passes, already more than $40$, so the statement is True.`,
      `**D.** → False

The subsidy exponent is already $-1$, so a larger index cuts weekly pass sales rather than lifting them.

$$
\\frac{q(p(ks))}{q(p(s))}=k^{-1}
$$

For every $k>1$ that factor is smaller than $1$. Raising the subsidy index lowers composed demand, so the statement is False.`,
      `**E.** → True

At subsidy index $27$:

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
    context: `A regional bakery must bake thirty thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index follows $C_{1}(q)=a q^{2}$ and line 2's follows $C_{2}(q)=b q^{2}$, where $q$ is that line's own output in thousands of loaves. A ten-thousand-loaf run on line 1 scored one hundred, and an eight-thousand-loaf run on line 2 scored sixteen. Evaluate each statement. Mark it TRUE or FALSE.`,
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
      `**B.** → True

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
C_{2}(30)=225
$$

$$
225>200
$$

The corner scores $225$, already more than $200$, so the statement is True.`,
      `**C.** → True

Line 2's coefficient $\\frac{1}{4}$ is smaller than line 1's coefficient $1$, so line 2 is the cheaper line. The equal-marginal split already sent $q_{2}=24$ and $q_{1}=6$. Twenty-four thousand loaves is the larger share, and it sits on the cheaper line, so the statement is True.`,
      `**D.** → False

Line 1 is $C_{1}(q)=q^{2}$. Average cost divides by own output:

$$
\\frac{C_{1}(q)}{q}=\\frac{q^{2}}{q}
$$

$$
\\frac{C_{1}(q)}{q}=q
$$

The leftover exponent is $+1$, so the average rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$, so the statement is False.`,
      `**E.** → True

Six thousand on line 1 and twenty-four thousand on line 2 cost

$$
C_{1}(6)=6^{2}
$$

$$
C_{1}(6)=36
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
C_{2}(24)=144
$$

$$
36+144=180
$$

$$
180<200
$$

The split scores $180$, which is under $200$, so the statement is True.`,
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

**1.** All on line 2 costs $225>200$. The equal-marginal split is $6$ and $24$, costing $180<200$.

**2.** The cheaper line takes the larger share. The cheaper-line corner is not the cheapest plan.

**3.** Line 1's average cost is $q$, which rises with own output.

**Answer.** $a=1$ | $b=\\frac{1}{4}$ | all on line 2 costs $225$ | $6$ and $24$ costs $180$`,
  },
  {
    id: `math-8-96`,
    case_id: `MATH 8.96`,
    title: `Museum Tickets: Point Elasticity Versus a Finite Rise`,
    context: `Evening museum admissions follow $q(p)=A p^{-2}$ tickets when the price is $p>0$ euros. At ten euros the desk sold forty tickets. Evaluate each statement. Mark it TRUE or FALSE.`,
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

Elasticity is $-2$ at every price $p>0$, so demand is equally elastic everywhere, so the statement is True.`,
      `**B.** → True

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

$$
12.22>10
$$

The cut is about $12.22$ tickets, more than $10$, so the statement is True.`,
      `**C.** → True

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

The exact cut is about $17.36\\%$, not $20\\%$. The shortcut overstates the drop, so the statement is True.`,
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
q(5)=160
$$

$$
160>150
$$

Halving the price quadruples demand. The desk sells $160$ tickets, already more than $150$, so the statement is True.`,
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

**2.** $q(12)=\\frac{250}{9}$, a cut of about $12.22>10$ tickets. A $10\\%$ rise cuts demand by about $17.4\\%$, not by the shortcut's $20\\%$.

**3.** $(2)$ falls with price. Halving the price quadruples demand, so $q(5)=160>150$.

**Answer.** $\\varepsilon=-2$ | $A=4000$ | exact cut about $12.22$ tickets | $q(5)=160$`,
  },
  {
    id: `math-8-97`,
    case_id: `MATH 8.97`,
    title: `Annealing Lehr Throughput Under a Mis-Scaled Coefficient`,
    context: `A glass-annealing lehr's throughput follows $T(e)=A e^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at belt setting four delivered sixty-four trays an hour. Evaluate each statement. Mark it TRUE or FALSE.`,
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

The recorded run gives $A=8$, so $T(e)=8e^{\\frac{3}{2}}$. Three halves sits above one:

$$
\\frac{3}{2}>1
$$

An exponent larger than one means throughput grows faster than the belt setting: each extra unit of setting adds more than the unit before it. Three halves is above one, so the statement is True.`,
      `**B.** → True

An extra unit of setting is the slope $T'(e)=12e^{\\frac{1}{2}}$. After setting four:

$$
T'(4)=12\\cdot 4^{\\frac{1}{2}}
$$

$$
4^{\\frac{1}{2}}=2
$$

$$
T'(4)=12\\cdot 2
$$

$$
T'(4)=24
$$

After setting nine:

$$
T'(9)=12\\cdot 9^{\\frac{1}{2}}
$$

$$
9^{\\frac{1}{2}}=3
$$

$$
T'(9)=12\\cdot 3
$$

$$
T'(9)=36
$$

Because $r>1$ the slope rises. An extra unit adds $36$ trays after nine, more than the $24$ after four, so the statement is True.`,
      `**C.** → True

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
T(9)=216
$$

$$
216>200
$$

Throughput is $216$ trays per hour, already more than $200$, so the statement is True.`,
      `**D.** → False

A doubling ratio puts $A$ in both the numerator and the denominator, so the coefficient cancels:

$$
\\frac{T(2e)}{T(e)}=2^{\\frac{3}{2}}
$$

Under the enlarged coefficient the same cancellation occurs:

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=\\frac{1.25 A (2e)^{\\frac{3}{2}}}{1.25 A e^{\\frac{3}{2}}}
$$

$$
\\frac{T_{c}(2e)}{T_{c}(e)}=2^{\\frac{3}{2}}
$$

The factor $1.25$ never survives the ratio. Levels move by $25\\%$ and doubling ratios do not, so the statement is False.`,
      `**E.** → True

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

**1.** Because $r>1$, an extra unit adds more after $9$ than after $4$. $T(9)=216>200$.

**2.** $(2)$ is independent of $A$. A $25\\%$ larger coefficient leaves the doubling factor $2^{\\frac{3}{2}}$ unchanged and raises $T(9)$ to $270>250$.

**Answer.** $A=8$ | $T(9)=216$ | levels scale with $A$ | doubling factor $2^{\\frac{3}{2}}$`,
  },
];
