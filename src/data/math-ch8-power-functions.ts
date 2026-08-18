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

The mass rule is $M(s)=5s^{3}$. At side $2$:

$$2^{3}=8$$

$$M(2)=5\\cdot 8=40$$

That is the claimed $40$ grams, so the statement is True.`,
      `**B.** → False

At side $3$:

$$3^{3}=27$$

$$M(3)=5\\cdot 27=135$$

The claim is $125$, which is $5^{3}$ rather than $5\\cdot 3^{3}$. The recovered mass is $135$, so the statement is False.`,
      `**C.** → True

Multiplying the side by $k$ multiplies the mass by $k^{3}$, because the coefficient cancels:

$$\\frac{M(ks)}{M(s)}=\\frac{5(ks)^{3}}{5s^{3}}=k^{3}$$

For a doubling, $k=2$:

$$2^{3}=8$$

The mass is multiplied by $8$, so the statement is True.`,
      `**D.** → True

At a unit side every power is $1$, so the mass equals the coefficient:

$$1^{3}=1$$

$$M(1)=5\\cdot 1=5$$

That is the claimed $5$ grams, so the statement is True.`,
      `**E.** → False

At side $4$:

$$4^{3}=64$$

$$M(4)=5\\cdot 64=320$$

The claim is $240$, which is not $5\\cdot 4^{3}$. The recovered mass is $320$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `A cube resin block has mass $M(s)=5s^{3}$ grams for side $s>0$ centimetres. This is a power function with exponent $3$ and coefficient $5$.

A level question evaluates the rule at a given side. A scale question uses the ratio identity

$$\\frac{M(ks)}{M(s)}=k^{3}$$

in which the coefficient cancels.`,
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

Load is an even root, and a square root accepts zero because $0^{2}=0$:

$$D(0)=6\\cdot 0^{\\frac{1}{2}}=0$$

That is a genuine real reading of $0$ kilograms, so the statement is True.`,
      `**B.** → False

A negative exponent is a reciprocal, so turbidity is $\\frac{50}{t^{2}}$. At the reset the denominator is zero, and division by zero is undefined.

There is no reading at $t=0$, so the statement is False.`,
      `**C.** → False

The exponent $\\frac{1}{2}$ is an even root. No real number squares to a negative, so $D(-4)$ is not real.

Clock times before the reset sit outside the load domain, so the statement is False.`,
      `**D.** → True

Turbidity at a legal positive time is a level of $R(t)=50t^{-2}$. At $t=4$:

$$4^{2}=16$$

$$R(4)=\\frac{50}{16}=3.125$$

That is the claimed $3.125$ units, so the statement is True.`,
      `**E.** → True

Load at $t=9$ is a level of $D(t)=6t^{\\frac{1}{2}}$:

$$9^{\\frac{1}{2}}=3$$

$$D(9)=6\\cdot 3=18$$

That is the claimed $18$ kilograms, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `A river gauge reports two power functions of elapsed time $t$. Load $D(t)=6t^{\\frac{1}{2}}$ kilograms has exponent $\\frac{1}{2}$ and coefficient $6$. Turbidity $R(t)=50t^{-2}$ units has exponent $-2$ and coefficient $50$.

The sign of the exponent decides the domain. A positive even root needs $t\\ge 0$. A negative exponent puts $t$ in a denominator, so $t>0$. A level question evaluates a legal time. A domain question asks whether the formula returns a real at all.`,
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

A negative exponent puts distance in a denominator:

$$S(x)=\\frac{80}{x^{3}}$$

As $x\\to\\infty$ that denominator grows without bound while the numerator stays $80$, so the quotient is forced toward $0$. The signal fades at infinity, so the statement is True.`,
      `**B.** → True

Near the mast a small positive $x$ makes $x^{3}$ arbitrarily small, so $\\frac{80}{x^{3}}$ becomes arbitrarily large.

The same reciprocal that sent $S$ to zero far away explodes as $x\\to 0^{+}$, so the statement is True.`,
      `**C.** → False

The $2$ in $T(x)=2x^{\\frac{1}{2}}$ is a coefficient, not a ceiling. A positive exponent keeps climbing without bound as $x\\to\\infty$.

There is no long-run cap at $2$, so the statement is False.`,
      `**D.** → True

Strength at two metres is a level of $S(x)=80x^{-3}$:

$$2^{3}=8$$

$$S(2)=\\frac{80}{8}=10$$

That is the claimed $10$ millivolts, so the statement is True.`,
      `**E.** → True

A positive exponent keeps the packet count in the numerator. The square root of a shrinking positive input shrinks as well, so $T(x)\\to 0$ as $x\\to 0^{+}$.

Signal $S$ explodes at that same end; the count does the opposite, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 3,
    solution_overview: `A beacon reports strength $S(x)=80x^{-3}$ millivolts for distance $x>0$ metres, a power with exponent $-3$ and coefficient $80$. A reader logs $T(x)=2x^{\\frac{1}{2}}$ thousand packets for listening time $x>0$ minutes, a power with exponent $\\frac{1}{2}$ and coefficient $2$.

The sign of the exponent governs the ends of the scale. A negative exponent is a reciprocal, so $S$ falls toward $0$ far away and blows up near the mast. A positive exponent keeps $T$ in the numerator, so the count goes to $0$ at the start and has no ceiling in the long run. A level question evaluates a finite $x$.`,
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

Overhead is a reciprocal:

$$U(q)=\\frac{600}{q}$$

On $q>0$ the numerator is fixed while the denominator grows, so every larger order strictly lowers the spread. The rule is strictly decreasing, so the statement is True.`,
      `**B.** → False

The numerator $600$ and the order size $q$ are both positive for every $q>0$, so the quotient stays positive.

Falling toward zero is not the same as crossing it. A negative coefficient would have been needed, so the statement is False.`,
      `**C.** → True

The exponent $\\frac{2}{3}$ is positive, so a larger order raises a larger power, and the coefficient $3$ preserves that order.

Strict increase is the sign of the exponent, so the statement is True.`,
      `**D.** → False

Overhead at eight units is a level of $U(q)=600q^{-1}$:

$$U(8)=\\frac{600}{8}=75$$

The claim is $80$, not $75$, so the statement is False.`,
      `**E.** → True

Finishing hours at eight units use the fractional power as a cube root, then a square:

$$8^{\\frac{2}{3}}=4$$

$$V(8)=3\\cdot 4=12$$

That is the claimed $12$ hours, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 4,
    solution_overview: `A workshop spreads overhead $U(q)=600q^{-1}$ euros per unit and needs $V(q)=3q^{\\frac{2}{3}}$ finishing hours for order size $q>0$. Both are power functions on $q>0$ with positive coefficients.

The sign of the exponent decides the direction. A negative exponent makes $U$ strictly decreasing and always positive. A positive exponent makes $V$ strictly increasing. A level question evaluates a given order size.`,
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

The audited shift pins the coefficient through $Q(25)=40$:

$$25^{\\frac{1}{2}}=5$$

$$5A=40$$

$$A=8$$

That is the claimed coefficient, so the statement is True.`,
      `**B.** → True

With $A=8$ the output rule is $Q(s)=8s^{\\frac{1}{2}}$. At $100$ staff:

$$100^{\\frac{1}{2}}=10$$

$$Q(100)=8\\cdot 10=80$$

That is the claimed $80$ crates per hour, so the statement is True.`,
      `**C.** → True

Multiplying staffing by $k$ multiplies output by $k^{\\frac{1}{2}}$, because the coefficient cancels:

$$\\frac{Q(ks)}{Q(s)}=\\frac{A(ks)^{\\frac{1}{2}}}{A s^{\\frac{1}{2}}}=k^{\\frac{1}{2}}$$

For a quadrupling, $k=4$:

$$4^{\\frac{1}{2}}=2$$

Output is doubled, so the statement is True.`,
      `**D.** → False

A doubled coefficient appears once above and once below in the ratio, so it cancels. The scale factor stays

$$\\frac{Q(4s)}{Q(s)}=4^{\\frac{1}{2}}=2$$

whether $A$ is $8$ or $16$. Doubling $A$ doubles every level, not this ratio, so the statement is False.`,
      `**E.** → False

At four staff the same recovered rule gives

$$4^{\\frac{1}{2}}=2$$

$$Q(4)=8\\cdot 2=16$$

The claim is $20$, not $16$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `A bottling line runs at $Q(s)=A s^{\\frac{1}{2}}$ crates per hour for $s>0$ staff. The exponent $\\frac{1}{2}$ is given, and the audited shift of $25$ staff at $40$ crates per hour fixes the coefficient.

A level question uses that recovered $A$. A scale question uses the ratio identity

$$\\frac{Q(ks)}{Q(s)}=k^{\\frac{1}{2}}$$

in which the coefficient cancels.`,
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

At two machines both indices are levels of the given rules:

$$F(2)=2\\cdot 2^{2}=8$$

$$G(2)=2^{3}=8$$

They meet at $8$ and $8$, not at $8$ and $6$, so the statement is False.`,
      `**B.** → True

The factored difference is $n^{2}(n-2)$. For $n>0$ the square is positive, so the sign of $G-F$ is the sign of $n-2$.

Whenever $n>2$ that factor is positive and the cubic leads, so the statement is True.`,
      `**C.** → True

On $0<n<2$ the same factor $n-2$ is negative, so $F>G$.

A larger coefficient can only lead on small inputs; past the crossing the larger exponent takes over, so the statement is True.`,
      `**D.** → False

The ratio simplifies to a leftover power of $n$:

$$\\frac{G(n)}{F(n)}=\\frac{n^{3}}{2n^{2}}=\\frac{n}{2}$$

As $n$ grows, $\\frac{n}{2}$ grows without bound rather than settling at $1$, so the statement is False.`,
      `**E.** → False

At three machines:

$$F(3)=2\\cdot 9=18$$

$$G(3)=27$$

The claim wants $18$ and $24$. The cubic is $27$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `Two maintenance indices on $n>0$ machines are the power functions $F(n)=2n^{2}$ and $G(n)=n^{3}$. One has exponent $2$ and coefficient $2$; the other has exponent $3$ and coefficient $1$.

A larger coefficient can lead on small inputs. A larger exponent must lead eventually. Subtracting isolates the crossing:

$$G(n)-F(n)=n^{2}(n-2)$$

Dividing instead shows the long-run gap, $\\frac{G(n)}{F(n)}=\\frac{n}{2}$.`,
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

A square root accepts zero because $0^{2}=0$:

$$L(0)=0^{\\frac{1}{2}}=0$$

The even-root gate stays open at a blank reading, so the statement is True.`,
      `**B.** → False

No real $y$ satisfies $y^{2}=-4$, so $L(-4)$ is not real.

Parity of the root, not the size of $4$, decides this letter, so the statement is False.`,
      `**C.** → True

The exponent $\\frac{1}{3}$ is an odd root, so a negative reading is allowed, and $(-2)^{3}=-8$ confirms the inverse:

$$M(-8)=(-8)^{\\frac{1}{3}}=-2$$

That is the claimed value, so the statement is True.`,
      `**D.** → False

A negative exponent puts the root in a denominator, $N(x)=\\frac{1}{\\sqrt{x}}$. At $x=0$ that denominator is zero, so the transform is undefined.

Zero is legal for $L$ and illegal for $N$, so the statement is False.`,
      `**E.** → False

At a legal reading $x=4$:

$$N(4)=4^{-\\frac{1}{2}}=\\frac{1}{2}$$

The claim is $2$, which is $\\sqrt{4}$ with the minus in the exponent dropped, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `A calibration sheet applies three power functions of a raw reading $x$, each with coefficient $1$: $L(x)=x^{\\frac{1}{2}}$, $M(x)=x^{\\frac{1}{3}}$ and $N(x)=x^{-\\frac{1}{2}}$.

Two features of the exponent decide the domain. An even root needs $x\\ge 0$. An odd root accepts every real $x$. A negative exponent moves the root into a denominator, so $N$ needs $x>0$. A level question evaluates a legal reading.`,
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

The drop at four cartridges is a level of $P(x)=12x^{-\\frac{1}{2}}$:

$$4^{\\frac{1}{2}}=2$$

$$P(4)=\\frac{12}{2}=6$$

That is the claimed $6$ kilopascals, so the statement is True.`,
      `**B.** → True

On $x>0$ the numerator stays at $12$ while $\\sqrt{x}$ grows with $x$, so the quotient falls at every larger cartridge count.

A negative exponent is strictly decreasing here, so the statement is True.`,
      `**C.** → True

As $x$ grows the denominator grows without bound while the numerator stays $12$, so $P(x)\\to 0$. Setting $\\frac{12}{\\sqrt{x}}=0$ would require $12=0$, which never happens.

The drop approaches zero without landing on it, so the statement is True.`,
      `**D.** → False

The denominator $\\sqrt{x}$ can be made arbitrarily small as $x\\to 0^{+}$, so $P$ has no finite limit there.

A finite limit at the origin would need a nonnegative exponent, so the statement is False.`,
      `**E.** → True

At nine cartridges:

$$9^{\\frac{1}{2}}=3$$

$$P(9)=\\frac{12}{3}=4$$

That is the claimed $4$ kilopascals, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `A filter bank's pressure drop is the power function $P(x)=12x^{-\\frac{1}{2}}$ kilopascals for $x>0$ cartridges. The coefficient is $12$ and the exponent is $-\\frac{1}{2}$, so the rule is a reciprocal square root on $x>0$.

A negative exponent makes $P$ strictly decreasing and sends it toward $0$ as $x$ grows, without ever reaching $0$. As $x\\to 0^{+}$ the denominator collapses and $P$ has no finite limit. A level question evaluates a given bank size.`,
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

The recorded job pins $A$ through $y(3)=45$:

$$3^{2}=9$$

$$9A=45$$

$$A=5$$

The claim is $15$, which divides $45$ by the radius instead of by its square, so the statement is False.`,
      `**B.** → True

With $A=5$ the primer rule is $y(r)=5r^{2}$. At radius $6$:

$$6^{2}=36$$

$$y(6)=5\\cdot 36=180$$

That is the claimed $180$ litres, so the statement is True.`,
      `**C.** → True

Multiplying the radius by $k$ multiplies primer by $k^{2}$, because the coefficient cancels:

$$\\frac{y(kr)}{y(r)}=\\frac{A(kr)^{2}}{A r^{2}}=k^{2}$$

A fifty percent increase is $k=1.5$:

$$1.5^{2}=2.25$$

Primer is multiplied by $2.25$, so the statement is True.`,
      `**D.** → True

At a unit radius every power is $1$, so the requirement equals the coefficient:

$$1^{2}=1$$

$$y(1)=5\\cdot 1=5$$

That is the claimed $5$ litres, so the statement is True.`,
      `**E.** → False

Halving the radius is $k=0.5$, and the same scale identity gives

$$0.5^{2}=0.25$$

Primer is multiplied by a quarter, not by a half, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 9,
    solution_overview: `Primer for a circular panel is the power function $y(r)=A r^{2}$ litres for radius $r>0$ metres. The exponent is $2$, and the recorded job $y(3)=45$ fixes the coefficient.

A level question uses that recovered $A$. A scale question uses the ratio identity

$$\\frac{y(kr)}{y(r)}=k^{2}$$

in which the coefficient cancels.`,
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

The index at $v=10$ is a level of $E(v)=0.5v^{2}$:

$$10^{2}=100$$

$$E(10)=0.5\\cdot 100=50$$

That is the claimed $50$, so the statement is True.`,
      `**B.** → True

Raising speed from $10$ to $20$ is the multiplier $k=2$. The coefficient cancels:

$$\\frac{E(kv)}{E(v)}=\\frac{0.5(kv)^{2}}{0.5v^{2}}=k^{2}$$

$$2^{2}=4$$

The index is multiplied by $4$, so the statement is True.`,
      `**C.** → True

At $v=20$:

$$20^{2}=400$$

$$E(20)=0.5\\cdot 400=200$$

That is the claimed $200$, so the statement is True.`,
      `**D.** → True

A square of a nonzero real is positive, and the coefficient $0.5$ is positive, so the product stays positive for every $v>0$.

No evaluation is required. Sign is read off the formula, so the statement is True.`,
      `**E.** → False

A ten percent overspeed is $k=1.1$, and the scale identity gives

$$1.1^{2}=1.21$$

The index rises by twenty-one percent, not ten, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `A braking energy index is the power function $E(v)=0.5v^{2}$ points for approach speed $v>0$ in kilometres per hour. The exponent is $2$ and the coefficient is $0.5$.

A level question evaluates the rule at a given speed. A scale question uses the ratio identity

$$\\frac{E(kv)}{E(v)}=k^{2}$$

in which the coefficient cancels. Sign is read off the formula: a square of a positive speed, times a positive coefficient, stays positive.`,
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

The two logged pairs give the ratio

$$\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}$$

$$\\frac{3}{2}=\\left(\\frac{3}{2}\\right)^{3r}$$

so $r=\\frac{1}{3}$. That exponent sits below one, which means harvest grows more slowly than watering time, so the statement is True.`,
      `**B.** → False

Multiplying hours by $k$ multiplies harvest by $k^{r}$, because $A$ cancels:

$$\\frac{Y(kh)}{Y(h)}=k^{r}$$

For a doubling and $r=\\frac{1}{3}$:

$$2^{\\frac{1}{3}}\\neq 2$$

Harvest is not doubled, so the statement is False.`,
      `**C.** → True

With $r=\\frac{1}{3}$ and $Y(8)=4$, the rule is $Y(h)=2h^{\\frac{1}{3}}$. Doubling the four-kilogram harvest means $Y(h)=8$:

$$2h^{\\frac{1}{3}}=8$$

$$h=64$$

That is eight times the logged $8$ hours, which is more than a doubling, so the statement is True.`,
      `**D.** → False

An extra hour is the slope of $Y(h)=2h^{\\frac{1}{3}}$:

$$Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}}$$

The leftover exponent is negative, so $Y'(27)<Y'(8)$. Later hours buy less crop, not more, so the statement is False.`,
      `**E.** → True

A nonzero power inverts to another power. Raise $Y=2h^{\\frac{1}{3}}$ to the reciprocal exponent $3$:

$$h=\\left(\\frac{Y}{2}\\right)^{3}$$

Hours needed for a given harvest are a monomial in that harvest, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 11,
    solution_overview: `Marina's harvest follows the power $Y(h)=A h^{r}$ kilograms after $h>0$ hours of watering. Both constants are unknown, so two observations are needed. The ratio of the logged harvests cancels $A$ and isolates $r$; the eight-hour level then pins $A$.

A scale question uses $k^{r}$. Because $r<1$, harvest grows more slowly than watering time, and an extra hour adds less later than earlier. A nonzero power inverts to another power, so hours needed for a given harvest are themselves a power of that harvest.`,
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

The recorded wait pins $A$ through $W(4)=24$:

$$4^{-\\frac{1}{2}}=\\frac{1}{2}$$

$$\\frac{A}{2}=24$$

$$A=48$$

At nine agents, $W(9)=\\frac{48}{3}=16$, which sits below $20$ minutes, so the statement is True.`,
      `**B.** → True

A nonzero power inverts to another power. From $W=48 n^{-\\frac{1}{2}}$:

$$n=\\left(\\frac{48}{W}\\right)^{2}$$

Agents needed for a given wait are a monomial in that wait, so the statement is True.`,
      `**C.** → False

Wait is $W(n)=48n^{-\\frac{1}{2}}$, so an extra agent is the slope

$$W'(n)=-24n^{-\\frac{3}{2}}$$

The size of that cut falls as $n$ rises, so an extra agent cuts less wait after $16$ agents than after $4$, not more. so the statement is False.`,
      `**D.** → True

A six-minute wait inverts the recovered rule:

$$n=\\left(\\frac{48}{6}\\right)^{2}=64$$

That staffing exceeds the $50$-agent cap, so the statement is True.`,
      `**E.** → False

Doubling the team multiplies wait by $k^{-\\frac{1}{2}}$, because $A$ cancels:

$$\\frac{W(2n)}{W(n)}=2^{-\\frac{1}{2}}$$

$$2^{-\\frac{1}{2}}\\neq\\frac{1}{2}$$

Wait is not halved, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 12,
    solution_overview: `Callers wait according to the power $W(n)=A n^{-\\frac{1}{2}}$ minutes when $n>0$ agents are on duty. The exponent is given, so the recorded shift of $4$ agents at $24$ minutes fixes $A$. Staffing cannot exceed $50$ agents.

A level question uses the recovered rule. A scale question uses $k^{-\\frac{1}{2}}$, in which $A$ cancels. A nonzero power inverts to another power, so the team needed for a target wait is itself a power of that wait.`,
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

Leah's logged pair pins $a$ through $Q_{L}(9)=12$:

$$9^{\\frac{1}{2}}=3$$

$$3a=12$$

$$a=4$$

At four metres, $Q_{L}(4)=4\\cdot 2=8$, which sits above $7$ litres a minute, so the statement is True.`,
      `**B.** → True

Omar's logged pair pins $k$ through $Q_{O}(4)=4$:

$$4^{\\frac{3}{2}}=8$$

$$8k=4$$

$$k=\\frac{1}{2}$$

The ratio of the recovered rules is $\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}$. That equals $1$ at $d=8$, which is shallower than $10$ metres, so the statement is True.`,
      `**C.** → True

Past the unique positive meeting $d=8$, the leftover factor $\\frac{d}{8}$ exceeds $1$ and keeps climbing.

A second crossing would need that ratio to come back through $1$, which a positive leftover power of $d$ cannot do, so the statement is True.`,
      `**D.** → False

Together the wells are $4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$. Distinct exponents cannot be absorbed into one monomial.

A sum of two powers is a power only when the exponents match, so the statement is False.`,
      `**E.** → True

Omar's exponent $\\frac{3}{2}$ sits above $1$, so each extra metre buys more litres than the metre before it.

Flow outruns depth whenever the exponent exceeds one, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 13,
    solution_overview: `Leah and Omar pump at the same depth $d>0$ metres. Leah's well is the power $Q_{L}(d)=a d^{\\frac{1}{2}}$, and Omar's is $Q_{O}(d)=k d^{\\frac{3}{2}}$. Each exponent is given, so each logged level recovers its coefficient.

A level question uses a recovered rule. The ratio $\\frac{Q_{O}}{Q_{L}}$ is a leftover power of $d$, so the wells meet at most once and the leader past that meeting stays ahead. A sum of two distinct powers is not itself a single power.`,
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

The two invoices are $F+4A=250$ and $F+8A=450$. Subtracting isolates $A=50$ and then $F=50$, so

$$C(n)=50+50n^{\\frac{1}{2}}$$

A power of the run cannot carry a leftover constant. The setup of $50$ euros kills that shape, so the statement is True.`,
      `**B.** → False

The slope of the recovered bill is

$$C'(n)=25n^{-\\frac{1}{2}}$$

which stays positive for every $n>0$. Printing more copies never turns the total downward, so the statement is False.`,
      `**C.** → True

Cost per copy is $\\frac{50}{n}+50n^{-\\frac{1}{2}}$. Both pieces decline as the run lengthens, because the setup is spread and the leftover exponent on the variable term is negative.

A longer run is cheaper per copy, so the statement is True.`,
      `**D.** → True

At twenty-five copies the recovered bill is a level:

$$25^{\\frac{1}{2}}=5$$

$$C(25)=50+50\\cdot 5=300$$

That sits above $280$ euros, so the statement is True.`,
      `**E.** → False

At thirty-six copies:

$$36^{\\frac{1}{2}}=6$$

$$C(36)=50+50\\cdot 6=350$$

The claim wants more than $400$. The bill is $350$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 14,
    solution_overview: `Nora bills a run of $n>0$ copies as a fixed setup plus a square-root charge, $C(n)=F+A n^{\\frac{1}{2}}$. Two invoices recover both unknowns. Subtracting isolates $A$; either invoice then pins $F$.

Because of the leftover constant $F$, the bill is not a power of the run. The variable term still has a positive exponent, so the total bill keeps rising even while cost per copy falls.`,
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

The audited gain is $A\\bigl(16^{\\frac{3}{2}}-9^{\\frac{3}{2}}\\bigr)=296$. Since $16^{\\frac{3}{2}}=64$ and $9^{\\frac{3}{2}}=27$:

$$37A=296$$

$$A=8$$

Then $S=\\frac{1}{2}(8u^{\\frac{3}{2}})^{\\frac{2}{3}}=2u$. The inner $\\frac{3}{2}$ and the outer $\\frac{2}{3}$ multiply to $1$, so strength is proportional to purity, so the statement is True.`,
      `**B.** → False

The composed refinery quote is $S(u)=2u$. Setting it against the rival:

$$2u=1.8u+5$$

$$u=25$$

The quotes meet at purity $25$, so the statement is False.`,
      `**C.** → False

The rival quotes $1.8u+5$. At purity zero that quote still equals $5$, so there is a leftover constant.

A power of purity cannot carry an intercept, so the statement is False.`,
      `**D.** → True

Once $S(u)=2u$, strength at purity $36$ is a level:

$$S(36)=2\\cdot 36=72$$

That sits above $70$, so the statement is True.`,
      `**E.** → False

The same linear law at purity $9$:

$$S(9)=2\\cdot 9=18$$

The claim wants a strength already above $20$. Eighteen sits below that line, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 15,
    solution_overview: `A refinery turns ore of purity $u>0$ into metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. The audited gain from purity $9$ to $16$ is a difference of two levels, which recovers $A$. Alloy strength is the further power $S=\\frac{1}{2}M^{\\frac{2}{3}}$.

Composing the two stages multiplies the exponents. A rival mill quotes the affine rule $1.8u+5$, which is not a power of purity because of the intercept.`,
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

Doubling the job count multiplies load by $4$:

$$2^{r}=4$$

$$r=2$$

That exponent sits above one, so peak load grows faster than the job count, so the statement is True.`,
      `**B.** → False

Halving jobs is $k=\\frac{1}{2}$. The coefficient cancels:

$$\\frac{L(kx)}{L(x)}=k^{2}$$

$$\\left(\\frac{1}{2}\\right)^{2}=\\frac{1}{4}$$

Load drops to a quarter, not to a half, so the statement is False.`,
      `**C.** → True

The eight-job reading with $r=2$ pins $A\\cdot 8^{2}=32$, so $A=\\frac{1}{2}$ and $L(x)=\\frac{1}{2}x^{2}$. Load per job is then

$$\\frac{L(x)}{x}=\\frac{1}{2}x$$

That leftover power is positive, so the average climbs with the job count, so the statement is True.`,
      `**D.** → False

At sixteen jobs the recovered square law gives

$$L(16)=\\frac{1}{2}\\cdot 16^{2}=128$$

The alarm trips at $200$, and $128$ sits below that threshold, so the statement is False.`,
      `**E.** → True

At ten jobs:

$$L(10)=\\frac{1}{2}\\cdot 10^{2}=50$$

That sits above $40$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 16,
    solution_overview: `Peak load is the power $L(x)=A x^{r}$ in the number $x>0$ of simultaneous jobs. The doubling rule cancels $A$ and isolates $r$; the eight-job reading then pins $A$. The hardware alarm is a level constraint $L(x)=200$.

Because the recovered exponent exceeds one, load outruns the job count and load per job rises. A scale question uses $k^{r}$.`,
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

The recorded gain is $A\\bigl(10-5\\bigr)=60$, so $A=12$ and $Q(x)=12x^{\\frac{1}{2}}$. An extra unit is the slope

$$Q'(x)=6x^{-\\frac{1}{2}}$$

The leftover exponent is negative, so $Q'(25)>Q'(100)$. An extra unit adds more at $25$ than at $100$, so the statement is True.`,
      `**B.** → False

Doubling intensity multiplies responses by $k^{\\frac{1}{2}}$, because $A$ cancels:

$$\\frac{Q(2x)}{Q(x)}=2^{\\frac{1}{2}}$$

$$2^{\\frac{1}{2}}\\neq 2$$

Responses are not doubled, so the statement is False.`,
      `**C.** → True

Responses per unit of intensity are $12x^{-\\frac{1}{2}}$. The leftover exponent is negative, so that average falls as outreach rises.

Average and marginal product move together on a power below one, so the statement is True.`,
      `**D.** → False

The budget cap is on intensity, not on responses. At the largest legal $x=400$:

$$Q(400)=12\\cdot 20=240$$

The survey can yield $240$ usable responses, which is not a ceiling of $200$, so the statement is False.`,
      `**E.** → True

At intensity $81$:

$$81^{\\frac{1}{2}}=9$$

$$Q(81)=12\\cdot 9=108$$

That sits above $100$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `Usable survey responses follow the power $Q(x)=A x^{\\frac{1}{2}}$, where $x>0$ is outreach intensity. The recorded gain from intensity $25$ to $100$ is a difference of two square-root levels, which recovers $A$. The fieldwork budget caps intensity at $400$.

Because the exponent sits below one, an extra unit of intensity adds less later than earlier, and responses per unit of intensity fall. A scale question uses $k^{\\frac{1}{2}}$.`,
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

The common reading gives $a\\cdot 16^{2}=256$ and $b\\cdot 16=256$, so $a=1$, $b=16$, and

$$C(n)-D(n)=n(n-16)$$

On $n>0$ the roots are $n=0$, outside the domain, and $n=16$. They meet only at sixteen documents, so the statement is True.`,
      `**B.** → False

For $n>16$ the factor $n-16$ is positive, so $C>D$. The quadratic automated bill is the more expensive one past the meeting, not the cheaper one.

Automation is cheaper only below $16$, so the statement is False.`,
      `**C.** → True

Automated cost per document is the leftover power

$$\\frac{C(n)}{n}=n$$

That leftover exponent is positive, so unit cost rises with the batch, so the statement is True.`,
      `**D.** → False

At twenty-five documents the two recovered bills are

$$C(25)=625, \\qquad D(25)=400$$

The gap is $225$, which is not less than $100$, so the statement is False.`,
      `**E.** → True

On a batch of nine documents the automated bill is a level:

$$C(9)=9^{2}=81$$

That sits under $100$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Two inspection procedures for a batch of $n>0$ documents are the powers $C(n)=a n^{2}$ and $D(n)=b n$. Each exponent is given, and the common reading of $256$ at $n=16$ recovers both coefficients.

Subtracting isolates the unique positive meeting. Past that meeting the larger exponent leads, so the quadratic automated bill is the more expensive one. Automated cost per document is the leftover power $n$.`,
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

The recorded shift pins $A$ through $H(16)=32$:

$$16^{\\frac{1}{2}}=4$$

$$4A=32$$

$$A=8$$

The exponent $\\frac{1}{2}$ sits below one, so throughput grows more slowly than headcount, so the statement is True.`,
      `**B.** → False

Doubling staff multiplies throughput by $k^{\\frac{1}{2}}$, because $A$ cancels:

$$\\frac{H(2s)}{H(s)}=2^{\\frac{1}{2}}$$

$$2^{\\frac{1}{2}}\\neq 2$$

Throughput is not doubled, so the statement is False.`,
      `**C.** → True

The ceiling binds when $8s^{\\frac{1}{2}}=80$, so $s=100$. From that staffing onward billed throughput is the constant $80$.

A horizontal cap is not $A s^{r}$, so billed throughput is no longer a power of staff, so the statement is True.`,
      `**D.** → False

At sixty-four staff the uncapped rule gives

$$H(64)=8\\cdot 8=64$$

That sits below the cap of $80$, so the ceiling is not yet reached, so the statement is False.`,
      `**E.** → True

At eighty-one staff:

$$81^{\\frac{1}{2}}=9$$

$$H(81)=8\\cdot 9=72$$

That sits above $70$ pallets per hour, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Warehouse throughput follows the power $H(s)=A s^{\\frac{1}{2}}$ pallets per hour for $s>0$ staff. The sixteen-staff reading fixes $A$. The service contract caps billed throughput at $80$ pallets per hour, so billed output is $\\min(H(s),80)$ once the ceiling binds.

Because the exponent sits below one, throughput grows more slowly than headcount. A scale question uses $k^{\\frac{1}{2}}$. A horizontal cap is not a power of staff.`,
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

The recorded cut is $A\\bigl(4^{-\\frac{3}{2}}-9^{-\\frac{3}{2}}\\bigr)=19$. Since $4^{\\frac{3}{2}}=8$ and $9^{\\frac{3}{2}}=27$:

$$A\\left(\\frac{1}{8}-\\frac{1}{27}\\right)=19$$

$$A=216$$

Wait is then $W(k)=216k^{-\\frac{3}{2}}$, so $W'(k)=-324k^{-\\frac{5}{2}}$. The size of that cut is larger at $4$ servers than at $9$, so the statement is True.`,
      `**B.** → True

A nonzero power inverts to another power. From $W=216k^{-\\frac{3}{2}}$:

$$k=\\left(\\frac{216}{W}\\right)^{\\frac{2}{3}}$$

Servers needed for a given wait are a monomial in that wait, so the statement is True.`,
      `**C.** → False

Doubling servers multiplies wait by $k^{-\\frac{3}{2}}$, because $A$ cancels:

$$\\frac{W(2k)}{W(k)}=2^{-\\frac{3}{2}}$$

$$2^{-\\frac{3}{2}}\\neq\\frac{1}{2}$$

Wait is not halved, so the statement is False.`,
      `**D.** → False

At nine servers the recovered rule is a level:

$$W(9)=\\frac{216}{27}=8$$

The claim wants a wait of more than $10$ milliseconds. Eight sits below that line, so the statement is False.`,
      `**E.** → True

At four servers:

$$W(4)=\\frac{216}{8}=27$$

That sits above $25$ milliseconds, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Median response time follows the power $W(k)=A k^{-\\frac{3}{2}}$ milliseconds for $k>0$ servers. The exponent is given, so the recorded cut from $4$ servers to $9$ servers, a difference of two levels, recovers $A$.

A negative leftover slope means an extra server helps more on the small cluster. A scale question uses $k^{-\\frac{3}{2}}$. A nonzero power inverts to another power, so the server count needed for a given wait is itself a power of that wait.`,
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

The recorded pair pins $A$ through $q(5)=400$:

$$5^{-2}=\\frac{1}{25}$$

$$\\frac{A}{25}=400$$

$$A=10000$$

Demand is then $q(p)=10000p^{-2}$, so $q'(p)=-20000p^{-3}$. The size of that cut is larger at five euros than at twenty, so the statement is True.`,
      `**B.** → True

A nonzero power inverts to another power. From $q=10000p^{-2}$:

$$p=100q^{-\\frac{1}{2}}$$

Price needed for a given number of subscriptions is a monomial in that number, so the statement is True.`,
      `**C.** → False

Doubling price multiplies demand by $k^{-2}$, because $A$ cancels:

$$\\frac{q(2p)}{q(p)}=2^{-2}=\\frac{1}{4}$$

Demand is quartered, not halved, so the statement is False.`,
      `**D.** → True

Revenue along the curve is $R(p)=pq=10000p^{-1}$. At sixteen euros:

$$R(16)=\\frac{10000}{16}=625$$

That sits under $700$, so the statement is True.`,
      `**E.** → True

At twenty euros the demand rule is a level:

$$q(20)=\\frac{10000}{400}=25$$

That is fewer than $30$ subscriptions, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `Monthly subscriptions follow the power $q(p)=A p^{-2}$ at price $p>0$ euros. The five-euro reading fixes $A$. Revenue is the product $R=pq$, which is itself a leftover power of price.

A negative leftover slope means an extra euro cuts more subscribers at a low price than at a high one. A scale question uses $k^{-2}$. A nonzero power inverts to another power, so the price needed for a given number of subscriptions is itself a power of that number.`,
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

The two invoices are $F+10a=500$ and $F+20a=800$. Subtracting isolates $a=30$ and then $F=200$, so

$$C(n)=200+30n^{\\frac{1}{2}}$$

A power of the number of accounts cannot carry a leftover constant. The fixed engagement charge kills that shape, so the statement is True.`,
      `**B.** → True

Cost per account is $\\frac{200}{n}+30n^{-\\frac{1}{2}}$. Both pieces decline as the book grows, because the fee is spread and the leftover exponent on the variable term is negative.

A larger book is cheaper per account, so the statement is True.`,
      `**C.** → True

An extra account is the slope

$$C'(n)=15n^{-\\frac{1}{2}}$$

The leftover exponent is negative, so $C'(100)>C'(400)$. An extra account adds more at one hundred accounts than at four hundred, so the statement is True.`,
      `**D.** → True

At nine hundred accounts the recovered bill is a level:

$$900^{\\frac{1}{2}}=30$$

$$C(900)=200+30\\cdot 30=1100$$

That sits above $1000$, so the statement is True.`,
      `**E.** → False

At two hundred accounts:

$$C(200)=200+30\\sqrt{200}=200+300\\sqrt{2}$$

Since $\\sqrt{2}<1.5$, this sits below $650$, which is not more than $750$. so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 22,
    solution_overview: `An audit firm bills $C(n)=F+a n^{\\frac{1}{2}}$ for a client with $n>0$ accounts. Two invoices recover both unknowns. Subtracting isolates $a$; either invoice then pins $F$.

Because of the leftover constant $F$, the bill is not a power of the number of accounts. The variable term still has a positive exponent below one, so cost per account falls and an extra account adds less later than earlier.`,
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

The intensity reading $e(16)=30$ pins $k\\cdot 16^{-\\frac{1}{2}}=30$, so $k=120$. Total emissions then compose as

$$E=a\\,e(a)=120 a^{\\frac{1}{2}}=240 t^{\\frac{1}{4}}$$

That is a power of elapsed time, so the statement is True.`,
      `**B.** → False

Doubling elapsed time multiplies $E$ by $k^{\\frac{1}{4}}$, because the coefficient cancels:

$$\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}$$

$$2^{\\frac{1}{4}}\\neq 2$$

Total emissions are not doubled, so the statement is False.`,
      `**C.** → False

Intensity is $e(a)=120 a^{-\\frac{1}{2}}$. The exponent is negative, so intensity falls as the fleet grows, not rises.

A negative leftover power cannot climb, so the statement is False.`,
      `**D.** → True

After sixteen years the composed rule is a level:

$$E(16)=240\\cdot 16^{\\frac{1}{4}}=240\\cdot 2=480$$

That exceeds $400$, so the statement is True.`,
      `**E.** → True

After one year:

$$E(1)=240\\cdot 1^{\\frac{1}{4}}=240$$

That sits under $250$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 23,
    solution_overview: `The fleet after $t>0$ years is the power $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles. Emission intensity is the further power $e(a)=k a^{-\\frac{1}{2}}$, and the reading at $a=16$ fixes $k$. Total fleet emissions are the product $E=a\\,e(a)$, which composes to a leftover power of elapsed time.

A scale question uses that leftover exponent. Intensity itself has a negative exponent in fleet size, so it falls as the fleet grows.`,
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

The bench test pins $A$ through $Q(4)=64$:

$$4^{\\frac{5}{2}}=32$$

$$32A=64$$

$$A=2$$

The exponent $\\frac{5}{2}$ sits above one, so capacity grows faster than diameter, so the statement is True.`,
      `**B.** → False

The exponent $\\frac{5}{2}$ sits above one, so a doubling of capacity needs a diameter multiplier $k=2^{\\frac{2}{5}}<2$.

The diameter must less than double, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $Q=2d^{\\frac{5}{2}}$:

$$d=\\left(\\frac{Q}{2}\\right)^{\\frac{2}{5}}$$

Diameter needed for a given capacity is a monomial in that capacity, so the statement is True.`,
      `**D.** → False

A capacity of $250$ inverts $Q(d)=2d^{\\frac{5}{2}}$:

$$2d^{\\frac{5}{2}}=250$$

$$d^{\\frac{5}{2}}=125$$

$$d=125^{\\frac{2}{5}}=5^{\\frac{6}{5}}$$

Since $5^{\\frac{6}{5}}<10$, the required diameter sits below $10$ cm, so the statement is False.`,
      `**E.** → True

Doubling the diameter multiplies capacity by $k^{\\frac{5}{2}}$, because $A$ cancels:

$$\\frac{Q(2d)}{Q(d)}=2^{\\frac{5}{2}}=4\\sqrt{2}$$

Since $4\\sqrt{2}>5$, capacity is multiplied by more than $5$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 24,
    solution_overview: `Flow capacity follows the power $Q(d)=A d^{\\frac{5}{2}}$ litres per second for internal diameter $d>0$ centimetres. The bench test at $4$ cm and $64$ litres per second fixes $A$.

Because the exponent exceeds one, capacity grows faster than diameter, so a doubling of capacity needs less than a doubling of diameter. A scale question uses $k^{\\frac{5}{2}}$. A nonzero power inverts to another power.`,
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

The four-hour reading pins $A$ through $r(4)=6$:

$$4^{\\frac{1}{2}}=2$$

$$2A=6$$

$$A=3$$

Covered area then composes as $S=\\pi r^{2}=9\\pi t$. That is proportional to elapsed time, so the statement is True.`,
      `**B.** → True

Along $S(t)=9\\pi t$, doubling elapsed time is $k=2$ with leftover exponent $1$:

$$\\frac{S(2t)}{S(t)}=2$$

The area is doubled, so the statement is True.`,
      `**C.** → True

A nonzero power inverts to another power. From $S=9\\pi t$:

$$t=\\frac{1}{9\\pi}S$$

Time needed for a given area is a monomial in that area, so the statement is True.`,
      `**D.** → True

After four hours the composed rule is a level:

$$S(4)=9\\pi\\cdot 4=36\\pi$$

That sits above $30\\pi$ square kilometres, so the statement is True.`,
      `**E.** → False

After nine hours:

$$S(9)=9\\pi\\cdot 9=81\\pi$$

The claim wants $100\\pi$. Eighty-one $\\pi$ sits below that figure, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 25,
    solution_overview: `A delivery hub's service radius follows the power $r(t)=A t^{\\frac{1}{2}}$ kilometres after $t>0$ hours. The four-hour reading fixes $A$. Covered area is the disc $S=\\pi r^{2}$, which composes to a leftover power of elapsed time.

A scale question uses that leftover exponent. A nonzero power inverts to another power, so the time needed for a given area is itself a power of that area.`,
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

The filed invoice pins $a$ through $C_{A}(36)=240$:

$$36^{\\frac{1}{2}}=6$$

$$6a=240$$

$$a=40$$

At sixty-four tickets, $C_{A}(64)=40\\cdot 8=320$ and $C_{B}(64)=5\\cdot 64=320$. Both sit under $400$, so the statement is True.`,
      `**B.** → True

The uncapped bills meet when $40u^{\\frac{1}{2}}=5u$, so $u=64$. Below that crossing the linear Plan B is the smaller bill, because a square root starts above a line through the origin and is then overtaken.

Plan B is cheaper below the crossing, so the statement is True.`,
      `**C.** → True

Plan A's cap binds when $40u^{\\frac{1}{2}}=400$, so $u=100$. From that volume onward billed Plan A is the constant $400$.

A growing ticket count will hit that cap, so the statement is True.`,
      `**D.** → True

Plan A's uncapped cost per ticket is $40u^{-\\frac{1}{2}}$. The leftover exponent is negative, so that average falls as ticket volume rises.

Even after the cap binds, the constant $400$ is spread over more tickets, so the statement is True.`,
      `**E.** → False

At one hundred and forty-four tickets the uncapped power would be $40\\cdot 12=480$, but the cap has already bound, so Plan A bills $400$.

That is not more than $450$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 26,
    solution_overview: `Plan A bills the power $C_{A}(u)=a u^{\\frac{1}{2}}$ for $u>0$ tickets, never charging more than $400$. The filed invoice at $36$ tickets and $240$ euros recovers $a$. Plan B bills the linear rule $5u$ with no cap.

The two uncapped bills meet where the leftover ratio of $u$ equals one. Plan A's cap binds when the uncapped power hits $400$, after which billed Plan A is a constant, not a power. Cost per ticket on Plan A is a negative leftover power.`,
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

The doubling rule is $2^{-b}=0.8$, so $b=-\\log_{2}(0.8)$ sits between $0$ and $1$, and $c(N)=1000 N^{-b}$. An extra unit is the slope $c'(N)=-b\\,1000\\,N^{-b-1}$.

The size of that cut falls as $N$ rises, so an extra unit cuts more after the first unit than after eight, so the statement is True.`,
      `**B.** → False

Quadrupling cumulative output is $k=4$. The coefficient cancels:

$$\\frac{c(4N)}{c(N)}=4^{-b}=(2^{-b})^{2}=0.64$$

Unit cost is multiplied by $0.64$, not by $\\frac{1}{2}$, so the statement is False.`,
      `**C.** → True

A simple reciprocal would be exponent $-1$. Here $b=-\\log_{2}(0.8)\\approx 0.322$, which sits below $1$, so the modelled unit cost falls more slowly than $\\frac{1}{N}$.

The doubling factor $0.8$ is what forces $b<1$, so the statement is True.`,
      `**D.** → True

Three successive doublings take $N$ from $1$ to $8$:

$$c(8)=1000\\cdot(0.8)^{3}=512$$

That sits under $520$, so the statement is True.`,
      `**E.** → False

Four successive doublings take $N$ to $16$:

$$c(16)=1000\\cdot(0.8)^{4}=409.6$$

The materials floor is $400$, and $409.6$ still sits above it, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 27,
    solution_overview: `Unit cost follows the power $c(N)=c_{1} N^{-b}$ for cumulative output $N>0$. Every doubling multiplies unit cost by $0.8$, which isolates $b$, and the first unit cost $1000$ pins $c_{1}$. Materials cost $400$ per unit, a floor the power cannot cross.

A negative leftover slope means an extra unit cuts more after the first unit than after eight. A scale question uses $k^{-b}$. Because $0<b<1$, unit cost falls more slowly than a simple reciprocal.`,
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

The recorded pair pins $A$ through $R(100)=900$:

$$100^{\\frac{1}{2}}=10$$

$$10A=900$$

$$A=90$$

Doubling spend multiplies revenue by $2^{\\frac{1}{2}}$, not by $2$, so the statement is False.`,
      `**B.** → True

Revenue per euro of spend is $90x^{-\\frac{1}{2}}$. The leftover exponent is negative, so that average falls as the campaign grows.

A square-root technology cannot keep pace with spend, so the statement is True.`,
      `**C.** → True

Net gain is $N(x)=90x^{\\frac{1}{2}}-6x$. The unique positive root is $x=225$, and past that root the linear fee dominates a square root.

Once $N$ is negative it stays negative at every larger spend, so the statement is True.`,
      `**D.** → True

At a spend of $100$:

$$N(100)=90\\cdot 10-6\\cdot 100=300$$

That sits above $250$, so the statement is True.`,
      `**E.** → False

At a spend of $256$:

$$N(256)=90\\cdot 16-6\\cdot 256=-96$$

Net gain is already negative, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `Sales revenue from advertising spend $x>0$ follows the power $R(x)=A x^{\\frac{1}{2}}$. The reading at spend $100$ fixes $A$. The platform fee is the linear power $F(x)=6x$. Net gain is the difference $R(x)-F(x)$, which is not itself a power.

Because the revenue exponent sits below one, revenue per euro of spend falls. Once the linear fee overtakes the square-root revenue, net gain stays negative.`,
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

The material reading pins $A$ through $m(100)=40$:

$$100^{\\frac{1}{2}}=10$$

$$10A=40$$

$$A=4$$

Material is $4L^{\\frac{1}{2}}$. The exponent $\\frac{1}{2}$ sits below one, so material grows more slowly than labour hours, so the statement is True.`,
      `**B.** → False

The conversion reading pins $B$ through $g(9)=54$, so $B=2$. Composing gives $g=16L^{\\frac{3}{4}}$. Doubling labour multiplies finished output by $k^{\\frac{3}{4}}$:

$$\\frac{g(2L)}{g(L)}=2^{\\frac{3}{4}}$$

$$2^{\\frac{3}{4}}\\neq 2$$

Finished output is not doubled, so the statement is False.`,
      `**C.** → True

Finished output per labour hour is $16L^{-\\frac{1}{4}}$. The leftover exponent is negative, so that average falls as labour rises.

A composed exponent below one forces a falling average product, so the statement is True.`,
      `**D.** → True

A nonzero power inverts to another power. From $g=16L^{\\frac{3}{4}}$:

$$L=\\left(\\frac{g}{16}\\right)^{\\frac{4}{3}}$$

Labour needed for a given finished count is a monomial in that count, so the statement is True.`,
      `**E.** → True

After eighty-one labour hours the composed rule is a level:

$$81^{\\frac{3}{4}}=27$$

$$g(81)=16\\cdot 27=432$$

That sits above $400$ units, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 29,
    solution_overview: `Labour $L>0$ hours yields material $m(L)=A L^{\\frac{1}{2}}$ tonnes, and material is converted by $g(m)=B m^{\\frac{3}{2}}$ finished units. Each exponent is given, so each logged level recovers its coefficient. Composing the two stages multiplies the exponents.

Because the composed leftover exponent sits below one, finished output grows more slowly than labour, and finished output per labour hour falls. A nonzero power inverts to another power.`,
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

The recorded pair pins $A$ through $q(4)=250$:

$$4^{\\frac{3}{2}}=8$$

$$\\frac{A}{8}=250$$

$$A=2000$$

Revenue is then $R(p)=2000p^{-\\frac{1}{2}}$, which inverts to $p=\\bigl(\\frac{2000}{R}\\bigr)^{2}$. Price needed for a given revenue is a monomial in that revenue, so the statement is True.`,
      `**B.** → False

Doubling the price multiplies revenue by $k^{-\\frac{1}{2}}$, because the coefficient cancels:

$$\\frac{R(2p)}{R(p)}=2^{-\\frac{1}{2}}$$

$$2^{-\\frac{1}{2}}\\neq\\frac{1}{2}$$

Revenue is not halved, so the statement is False.`,
      `**C.** → True

Revenue is $R(p)=2000p^{-\\frac{1}{2}}$. The leftover exponent is negative, so $R$ falls as the price rises.

Inverse-power demand is elastic enough here that a price rise shrinks $pq$, so the statement is True.`,
      `**D.** → True

At a price of $25$:

$$R(25)=\\frac{2000}{5}=400$$

That sits under $450$, so the statement is True.`,
      `**E.** → False

The fixed charge of $400$ is covered when $2000p^{-\\frac{1}{2}}\\ge 400$, so $p\\le 25$. Coverage therefore runs up to $25$ euros, not only below $16$.

so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 30,
    solution_overview: `Demand follows the power $q(p)=A p^{-\\frac{3}{2}}$ copies a month at price $p>0$. The four-euro reading fixes $A$. Revenue is the product $R=pq$, a leftover power of price, and the operation carries a fixed monthly charge of $400$.

Because the leftover exponent on $R$ is negative, revenue falls as the price rises. A nonzero power inverts to another power. The fixed charge is covered wherever $R\\ge 400$.`,
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

The recorded extension is $A\\bigl(27^{\\frac{2}{3}}-8^{\\frac{2}{3}}\\bigr)=90$. Since $27^{\\frac{2}{3}}=9$ and $8^{\\frac{2}{3}}=4$:

$$5A=90$$

$$A=18$$

Output is then $N(h)=18h^{\\frac{2}{3}}$, so $N'(h)=12h^{-\\frac{1}{3}}$. The leftover exponent is negative, so $N'(27)<N'(8)$, so the statement is True.`,
      `**B.** → False

Doubling any shift multiplies items by $k^{\\frac{2}{3}}$, because $A$ cancels:

$$\\frac{N(2h)}{N(h)}=2^{\\frac{2}{3}}$$

$$2^{\\frac{2}{3}}\\neq 2$$

The count is not doubled, so the statement is False.`,
      `**C.** → True

Items packed per hour are $18h^{-\\frac{1}{3}}$. The leftover exponent is negative, so that average falls as the shift lengthens.

Falling average product is the $r<1$ story, so the statement is True.`,
      `**D.** → True

A twenty-seven-hour shift is a level of the recovered rule:

$$N(27)=18\\cdot 9=162$$

That sits above $150$ items, so the statement is True.`,
      `**E.** → False

The $250$-item order inverts $18h^{\\frac{2}{3}}=250$:

$$h=\\left(\\frac{125}{9}\\right)^{\\frac{3}{2}}$$

That length is about $51.8$ hours, which sits past $40$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 31,
    solution_overview: `A packing station's output follows the power $N(h)=A h^{\\frac{2}{3}}$ items after $h>0$ hours. The exponent is given, so the recorded extension from $8$ to $27$ hours, a difference of two levels, recovers $A$.

Because the exponent sits below one, an extra hour adds less later than earlier, and items packed per hour fall. A scale question uses $k^{\\frac{2}{3}}$. A nonzero power inverts to another power, so a target count of $250$ items becomes a shift length.`,
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

The two runs give $\\frac{128}{16}=\\bigl(\\frac{16}{4}\\bigr)^{r}$, so $4^{r}=8$ and $r=\\frac{3}{2}$. Then $A\\cdot 4^{\\frac{3}{2}}=16$ pins $A=2$. Absorbed power composes as

$$P(v)=2v^{\\frac{5}{2}}$$

That is a power of airspeed, so the statement is True.`,
      `**B.** → False

Doubling airspeed multiplies drag by $k^{\\frac{3}{2}}$, because $A$ cancels:

$$\\frac{F(2v)}{F(v)}=2^{\\frac{3}{2}}=2\\sqrt{2}$$

Since $2\\sqrt{2}<3$, drag is not more than tripled, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $F=2v^{\\frac{3}{2}}$:

$$v=\\left(\\frac{F}{2}\\right)^{\\frac{2}{3}}$$

Airspeed that produces a given drag is a monomial in that drag, so the statement is True.`,
      `**D.** → False

The mounting rating inverts $2v^{\\frac{3}{2}}=250$:

$$v^{\\frac{3}{2}}=125$$

$$v=25$$

The rating is first reached at $25$ m/s, which is not above $30$, so the statement is False.`,
      `**E.** → True

At $16$ m/s absorbed power is a level:

$$P(16)=2\\cdot 16^{\\frac{5}{2}}=2048$$

That is more than $2$ kW, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `Aerodynamic drag follows the power $F(v)=A v^{r}$ newtons at airspeed $v>0$. Two wind-tunnel runs recover both constants: the ratio cancels $A$ and isolates $r$; either level then pins $A$. Absorbed power is the product $P=F\\cdot v$, a leftover power of airspeed. The mounting is a level constraint at $250$ N.

A scale question uses $k^{r}$. A nonzero power inverts to another power.`,
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

The recorded pair pins $A$ through $q(16)=300$:

$$16^{\\frac{1}{2}}=4$$

$$\\frac{A}{4}=300$$

$$A=1200$$

Revenue is then $R(p)=1200p^{\\frac{1}{2}}$. The leftover exponent is positive, so revenue rises as the price rises, so the statement is True.`,
      `**B.** → False

Quantity falling when price rises does not force revenue to fall. Here $R(p)=1200p^{\\frac{1}{2}}$ still climbs, because demand is inelastic enough that the price rise outruns the quantity cut.

Revenue and quantity need not move together, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $q=1200p^{-\\frac{1}{2}}$:

$$p=\\left(\\frac{1200}{q}\\right)^{2}$$

Price needed for a given monthly quantity is a monomial in that quantity, so the statement is True.`,
      `**D.** → True

At a price of $25$:

$$q(25)=\\frac{1200}{5}=240$$

That is fewer than $250$ units, so the statement is True.`,
      `**E.** → False

A monthly quantity of $200$ inverts the recovered rule:

$$1200p^{-\\frac{1}{2}}=200$$

$$p=36$$

The required price is $36$, which is not above $40$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `A regional utility faces the power $q(p)=A p^{-\\frac{1}{2}}$ units a month at price $p>0$. The sixteen-euro reading fixes $A$. Revenue is the product $R=pq$, a leftover power of price.

Because the leftover exponent on $R$ is positive, revenue rises as the price rises even though quantity falls. A scale question uses $k^{-\\frac{1}{2}}$. A nonzero power inverts to another power.`,
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

The test firing pins $A$ through $y(27)=324$:

$$27^{\\frac{4}{3}}=81$$

$$81A=324$$

$$A=4$$

To double output, the feed multiplier $k$ must satisfy $k^{\\frac{4}{3}}=2$. Because the exponent exceeds one, $k=2^{\\frac{3}{4}}<2$. The feed must less than double, so the statement is False.`,
      `**B.** → True

Output per cubic metre of fuel is $4x^{\\frac{1}{3}}$. The leftover exponent is positive, so that average rises as the feed increases.

An exponent above one forces a rising average product, so the statement is True.`,
      `**C.** → True

The licence binds when $4x^{\\frac{4}{3}}=1024$, so $x=64$. From that feed onward shipped output is the constant $1024$.

A horizontal cap is not $A x^{r}$, so daily shipped output is no longer a power of the feed, so the statement is True.`,
      `**D.** → True

A feed of $8$ is a level of the recovered rule:

$$8^{\\frac{4}{3}}=16$$

$$y(8)=4\\cdot 16=64$$

That sits above $50$ tonnes, so the statement is True.`,
      `**E.** → False

The licensed ceiling binds at feed $x=64$, which sits past $50$. A feed of $50$ is still below the cap.

The ceiling does not bind before a feed of $50$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 34,
    solution_overview: `A kiln's daily output follows the power $y(x)=A x^{\\frac{4}{3}}$ tonnes for a fuel feed of $x>0$ cubic metres. The test firing at a feed of $27$ fixes $A$. The site licence forbids shipping more than $1024$ tonnes a day, so billed output is $\\min(y(x),1024)$ once the ceiling binds.

Because the exponent exceeds one, output grows faster than the feed, and output per cubic metre rises. A scale question uses $k^{\\frac{4}{3}}$. A horizontal cap is not a power of the feed.`,
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

The calibration reading pins $A$ through $f(8)=36$:

$$8^{\\frac{2}{3}}=4$$

$$4A=36$$

$$A=9$$

Then $g(f(x))=\\frac{(9x^{\\frac{2}{3}})^{\\frac{3}{2}}}{27}=x$. Reporting after calibration returns the original reading, so the statement is True.`,
      `**B.** → False

The composition $g\\circ f$ is the identity, which has exponent $1$. An identity grows exactly as fast as the raw reading, not more slowly.

A leftover exponent of $1$ is lockstep, so the statement is False.`,
      `**C.** → False

The other order is $f(g(y))=9\\bigl(\\frac{y^{\\frac{3}{2}}}{27}\\bigr)^{\\frac{2}{3}}=y$. Applying the stages in reverse also recovers the original index.

The two maps are inverses of each other, so the statement is False.`,
      `**D.** → True

A raw reading of $64$ is a level of $f(x)=9x^{\\frac{2}{3}}$:

$$64^{\\frac{2}{3}}=16$$

$$f(64)=9\\cdot 16=144$$

That sits above $140$, so the statement is True.`,
      `**E.** → False

A raw reading of $125$:

$$125^{\\frac{2}{3}}=25$$

$$f(125)=9\\cdot 25=225$$

The claim wants an index under $200$. Two hundred and twenty-five sits above that line, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 35,
    solution_overview: `A calibration stage converts a raw reading $x>0$ by the power $f(x)=A x^{\\frac{2}{3}}$, and the reading at $x=8$ fixes $A$. A reporting stage converts an index $y>0$ by $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$.

The two exponents are reciprocals, so each composition is the identity: $g\\circ f$ recovers $x$ and $f\\circ g$ recovers $y$. A level question evaluates $f$ at a given reading.`,
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

The S benchmark pins $a$ through $S(4)=16$, so $a=8$. The T benchmark at the same load pins $T(x)=x^{\\frac{3}{2}}$. Their difference factors as

$$T(x)-S(x)=x^{\\frac{1}{2}}(x-8)$$

On $x>0$ they meet only at $x=8$, not at two different positive loads, so the statement is False.`,
      `**B.** → True

Past the unique positive meeting $x=8$, the leftover factor $x-8$ stays positive, so $T>S$ at every greater load.

Raising the load further cannot put S back in front, so the statement is True.`,
      `**C.** → False

The ratio of the recovered scores is

$$\\frac{T(x)}{S(x)}=\\frac{x}{8}$$

That leftover power of $x$ is not constant, so the statement is False.`,
      `**D.** → True

The unique positive meeting is $x=8$, which sits above $6$.

They first meet past load $6$, so the statement is True.`,
      `**E.** → True

At a load of $16$:

$$T(16)=64, \\qquad S(16)=32$$

Algorithm T is ahead by $32$, which is more than $30$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 36,
    solution_overview: `Algorithm S obeys the power $S(x)=a x^{\\frac{1}{2}}$ against a query load $x>0$, and the benchmark at load $4$ recovers $a$. Algorithm T is proportional to $x^{\\frac{3}{2}}$, and the same benchmark recovers its coefficient.

The ratio $\\frac{T}{S}$ is a leftover power of $x$, so the algorithms meet at most once and the leader past that meeting stays ahead. A level question evaluates both recovered rules at a given load.`,
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

The recorded fleet pins $A$ through $C(32)=80$:

$$32^{\\frac{4}{5}}=16$$

$$16A=80$$

$$A=5$$

Capacity is then $C(m)=5m^{\\frac{4}{5}}$. The exponent is positive, so sustained capacity keeps rising as machines are added, so the statement is True.`,
      `**B.** → False

An exponent below one still tends to infinity as $m$ grows. The ceiling $C(m)=500$ inverts at

$$5m^{\\frac{4}{5}}=500$$

$$m=100^{\\frac{5}{4}}$$

which is a finite fleet of about $316$ machines. The contracted ceiling is reached, so the statement is False.`,
      `**C.** → True

A power $A m^{r}$ is a straight line on log-log paper, with slope equal to the exponent.

The uncapped capacity law is exactly that shape, so the statement is True.`,
      `**D.** → True

A fleet of $243$ machines is a level of the recovered rule:

$$243^{\\frac{4}{5}}=81$$

$$C(243)=5\\cdot 81=405$$

That sits above $400$ requests per second, so the statement is True.`,
      `**E.** → False

The contracted ceiling binds at about $316$ machines, which sits past $250$.

The ceiling does not bind before $250$ machines, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 37,
    solution_overview: `Sustained capacity follows the power $C(m)=A m^{\\frac{4}{5}}$ requests per second for $m>0$ machines. The thirty-two-machine reading fixes $A$. The support contract will not certify more than $500$ requests per second, a level constraint on $C$.

Because the exponent is positive, capacity itself keeps rising. An exponent below one still reaches any finite ceiling. On log-log paper a power is a straight line.`,
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

The recorded extension is $A\\bigl(20-10\\bigr)=1200$, so $A=120$ and $R(L)=120L^{\\frac{1}{2}}$. Net gain is then

$$\\Pi(L)=120L^{\\frac{1}{2}}-6L$$

A difference of two distinct powers is not itself a power of hours hired, so the statement is False.`,
      `**B.** → False

Net gain is maximised where $R'(L)=6$, so $L=100$. Net gain is zero where $120L^{\\frac{1}{2}}=6L$, so $L=400$.

Those are different hours, so the statement is False.`,
      `**C.** → True

The wage bill is $6L$, a power of hours hired with exponent $1$ and coefficient $6$.

A linear wage is still a monomial, so the statement is True.`,
      `**D.** → True

At nine hundred hours:

$$\\Pi(900)=120\\cdot 30-6\\cdot 900=-1800$$

That sits below $-1000$, so the statement is True.`,
      `**E.** → True

The unique positive root of $\\Pi(L)=0$ is $L=400$, which sits past $300$ hours.

Net gain crosses zero only after more than $300$ hours, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 38,
    solution_overview: `A seasonal workshop's revenue follows the power $R(L)=A L^{\\frac{1}{2}}$ from $L>0$ hours of hired labour. The recorded extension from $100$ to $400$ hours, a difference of two levels, recovers $A$. Labour is paid a wage of $6$ per hour, so the wage bill is itself a power of hours. Net gain $R(L)-6L$ is a difference of two distinct powers, hence not a power.

The hours that maximise net gain are not the hours at which net gain is zero.`,
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

The logged runs pin $A=\\frac{1}{2}$ and $k=\\frac{1}{4}$, so $C_{1}(q)=\\frac{1}{2}q^{2}$ and $C_{2}(q)=\\frac{1}{4}q^{2}$. Equalising marginal costs on a $60$-unit order sends $20$ units to plant 1 and $40$ to plant 2, at total cost $600$.

Concentrating in either plant costs more than that split, so the statement is False.`,
      `**B.** → False

Whatever split $(q,60-q)$ is chosen, total cost is $\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}$. That is a quadratic in the split, not a monomial in the order size $60$.

Two separate powers do not combine into one power of the order, so the statement is False.`,
      `**C.** → True

Plant 2's cost per unit is $\\frac{C_{2}(q)}{q}=\\frac{1}{4}q$. The leftover exponent is positive, so unit cost rises as that plant produces more.

A quadratic power forces a rising average cost, so the statement is True.`,
      `**D.** → True

The cheaper plant is plant 2. Concentrating all $60$ units there costs

$$C_{2}(60)=\\frac{1}{4}\\cdot 3600=900$$

That sits above $800$, so the statement is True.`,
      `**E.** → True

Sending $30$ units to each plant costs

$$C_{1}(30)+C_{2}(30)=\\frac{1}{2}\\cdot 900+\\frac{1}{4}\\cdot 900=675$$

That sits under $700$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 39,
    solution_overview: `A firm must produce $60$ units and can split them between two plants. Plant 1's cost is the power $C_{1}(q)=A q^{2}$, and a run of $20$ units there recovers $A$. Plant 2's cost is $C_{2}(q)=k q^{2}$, and a run of $40$ units there recovers $k$.

Each plant is a quadratic power, so cost per unit rises with its own run. Adding the two plants at a free split is not a single power of the $60$-unit order. The cheapest split equalises marginal costs.`,
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

The first two measurements give $\\frac{192}{24}=\\bigl(\\frac{16}{4}\\bigr)^{r}$, so $4^{r}=8$ and $r=\\frac{3}{2}$. Then $A\\cdot 4^{\\frac{3}{2}}=24$ pins $A=3$.

Two points of a power law always determine a unique pair $(A,r)$ with $A>0$, so those measurements are consistent with a single power law, so the statement is True.`,
      `**B.** → False

An exponent of $2$ would require $4^{2}=16$ as the $y$-ratio, but the logged ratio is $8$.

The same two measurements do not fit $r=2$, so the statement is False.`,
      `**C.** → False

The fitted law is $y=3x^{\\frac{3}{2}}$. At $x=9$:

$$y(9)=3\\cdot 9^{\\frac{3}{2}}=81$$

That matches the third measurement exactly, so the measurement does not contradict the fit, so the statement is False.`,
      `**D.** → True

At the planned run $x=25$:

$$y(25)=3\\cdot 25^{\\frac{3}{2}}=375$$

That sits above $350$, so the statement is True.`,
      `**E.** → True

At $x=9$ the fitted response is $81$, which sits above $70$.

The third measurement and the fitted level are the same $81$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 40,
    solution_overview: `A laboratory fits the power $y=A x^{r}$ using the first two measurements $(4,24)$ and $(16,192)$. The ratio of those two points cancels $A$ and isolates $r$; either level then pins $A$.

A later measurement either lies on that fitted law or it does not. A level question evaluates the fitted rule at a planned input.`,
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

The catalogue pair pins $A$ through $q(4)=400$:

$$4^{-2}=\\frac{1}{16}$$

$$\\frac{A}{16}=400$$

$$A=6400$$

Inverting $q=6400p^{-2}$ gives $p=80q^{-\\frac{1}{2}}$. Price that clears a given quantity is a monomial in that quantity, so the statement is True.`,
      `**B.** → True

At $25$ units the inverse is a level:

$$p(25)=\\frac{80}{5}=16$$

That sits under $20$ euros, so the statement is True.`,
      `**C.** → False

Revenue as a function of price is $R(p)=6400p^{-1}$. The leftover exponent is negative, so raising the catalogue price cuts revenue.

Inverse-square demand is elastic enough that a price rise shrinks $pq$, so the statement is False.`,
      `**D.** → True

Revenue as a function of quantity is $R(q)=80q^{\\frac{1}{2}}$. At $100$ units:

$$R(100)=80\\cdot 10=800$$

That sits above $750$ euros, so the statement is True.`,
      `**E.** → False

The leftover exponent on $R(q)$ is $\\frac{1}{2}>0$, so a larger quantity brings in more revenue, not less.

Along this curve the quantity rise outruns the price cut, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 41,
    solution_overview: `A component supplier faces the power $q(p)=A p^{-2}$ units at price $p>0$ euros. The catalogue pair at $4$ euros and $400$ units fixes $A$. Inverting takes the reciprocal exponent, so price as a function of quantity is itself a power. Revenue $R=pq$ can be written as a leftover power of $p$ or of $q$, and those two leftover exponents have opposite signs.`,
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

The recorded extension is $A\\bigl(6-3\\bigr)=60$, so $A=20$ and $Y(L)=20L^{\\frac{1}{2}}$. Average product is then

$$\\frac{Y}{L}=20L^{-\\frac{1}{2}}$$

The leftover exponent is negative, so average product falls as the shift lengthens, so the statement is True.`,
      `**B.** → True

A thirty-six-hour shift is a level of the recovered rule:

$$Y(36)=20\\cdot 6=120$$

That sits above $100$ units, so the statement is True.`,
      `**C.** → False

An extra hour is the slope $Y'(L)=10L^{-\\frac{1}{2}}$. The leftover exponent is negative, so $Y'(36)<Y'(9)$.

An extra hour adds less output after $36$ hours than after $9$, not more, so the statement is False.`,
      `**D.** → True

The nine-hour output is $Y(9)=60$. Doubling that output means $Y(L)=120$, which inverts at $L=36$.

Hours must go from $9$ to $36$, which is more than a doubling, so the statement is True.`,
      `**E.** → False

At twenty-five hours, average product is a level:

$$\\frac{Y(25)}{25}=\\frac{20\\cdot 5}{25}=4$$

That sits below $5$ units per hour, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 42,
    solution_overview: `A workshop's output follows the power $Y(L)=A L^{\\frac{1}{2}}$ units for $L>0$ labour hours. The recorded extension from $9$ hours to $36$ hours, a difference of two levels, recovers $A$. Average product is the leftover power $\\frac{Y}{L}$.

Because the exponent sits below one, average product falls, an extra hour adds less later than earlier, and doubling output needs more than a doubling of hours.`,
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

The recorded run pins $A$ through $R(100)=600$:

$$100^{\\frac{1}{2}}=10$$

$$10A=600$$

$$A=60$$

Profit is $\\Pi(q)=60q^{\\frac{1}{2}}-2q-400$. Setting $\\Pi=0$ and writing $t=\\sqrt{q}$ gives $(t-10)(t-20)=0$, so $q=100$ and $q=400$. Two different positive break-evens, so the statement is True.`,
      `**B.** → True

At twenty-five units:

$$\\Pi(25)=60\\cdot 5-2\\cdot 25-400=-150$$

That sits more than $100$ euros below break-even, so the statement is True.`,
      `**C.** → False

Profit is positive only between the two break-evens $q=100$ and $q=400$. Past $400$ the linear charge dominates the square-root revenue, and profit turns negative again.

Once profit turns positive it does not stay positive at every larger output, so the statement is False.`,
      `**D.** → True

Revenue $R(q)=60q^{\\frac{1}{2}}$ is a power of output. Profit subtracts both a linear term and a constant, so it is not a monomial in $q$.

A leftover intercept or a second exponent kills the power-function shape, so the statement is True.`,
      `**E.** → False

At two hundred and twenty-five units:

$$\\Pi(225)=60\\cdot 15-2\\cdot 225-400=50$$

The claim wants profit exceeding $80$ euros. Fifty sits below that line, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 43,
    solution_overview: `A contract manufacturer earns the power $R(q)=A q^{\\frac{1}{2}}$ euros from an output of $q>0$ units. The run of $100$ units at $600$ euros recovers $A$. Profit subtracts a linear charge of $2$ euros per unit and a fixed charge of $400$, so profit is not a power of output even though revenue is.

Setting profit to zero is a quadratic in $\\sqrt{q}$, which can have two positive roots. Between those roots profit is positive; outside it is negative.`,
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

The benefit trial pins $A$ through $B(16)=72$, so $A=18$. The cost trial pins $K$ through $C(4)=4$, so $K=\\frac{1}{2}$. Setting $B=C$ gives

$$18x^{\\frac{1}{2}}=\\frac{1}{2}x^{\\frac{3}{2}}$$

$$x=36$$

They meet at exactly one positive scale, so the statement is True.`,
      `**B.** → True

At scale $16$ the recovered cost rule is a level:

$$C(16)=\\frac{1}{2}\\cdot 16^{\\frac{3}{2}}=32$$

That sits above $30$ million, so the statement is True.`,
      `**C.** → False

The cost exponent is $\\frac{3}{2}$ and the benefit exponent is $\\frac{1}{2}$. The larger exponent is on cost, so cost does overtake benefit past the unique meeting.

A smaller cost exponent would have been needed for cost never to overtake, so the statement is False.`,
      `**D.** → False

At scale $9$:

$$B(9)=18\\cdot 3=54$$

$$C(9)=\\frac{1}{2}\\cdot 27=13.5$$

Net benefit is $40.5$, which does not exceed $42$ million, so the statement is False.`,
      `**E.** → False

Benefit per million of cost is

$$\\frac{B(x)}{C(x)}=\\frac{36}{x}$$

That leftover power of $x$ is not the same at every scale, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 44,
    solution_overview: `A city values a flood-defence programme of scale $x>0$ by the benefit power $B(x)=A x^{\\frac{1}{2}}$ and the cost power $C(x)=K x^{\\frac{3}{2}}$, both in millions. Each trial recovers its coefficient. Net benefit is the difference $B-C$.

The cost exponent exceeds the benefit exponent, so the two meet at exactly one positive scale and cost overtakes thereafter. Benefit per million of cost is a leftover power of $x$, not a constant.`,
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

The two runs give $\\frac{36}{16}=\\bigl(\\frac{27}{8}\\bigr)^{r}$, so $r=\\frac{2}{3}$. Then $A\\cdot 8^{\\frac{2}{3}}=16$ pins $A=4$.

That exponent sits below one, so throughput grows more slowly than the gas feed, so the statement is True.`,
      `**B.** → True

The licensed ceiling inverts $4g^{\\frac{2}{3}}=32$:

$$g^{\\frac{2}{3}}=8$$

$$g=16\\sqrt{2}$$

Since $16\\sqrt{2}<24$, the ceiling is reached at a feed below $24$ cubic metres per hour, so the statement is True.`,
      `**C.** → False

Doubling the gas feed multiplies throughput by $k^{\\frac{2}{3}}$, because $A$ cancels:

$$\\frac{T(2g)}{T(g)}=2^{\\frac{2}{3}}$$

$$2^{\\frac{2}{3}}\\neq 2$$

Throughput is not doubled, so the statement is False.`,
      `**D.** → False

Throughput per cubic metre of gas is $4g^{-\\frac{1}{3}}$. The leftover exponent is negative, so that average falls as the feed rises, not rises.

An exponent below one forces a falling average product, so the statement is False.`,
      `**E.** → True

A feed of $64$ is a level of the recovered rule:

$$64^{\\frac{2}{3}}=16$$

$$T(64)=4\\cdot 16=64$$

That sits above $60$ tonnes per hour, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 45,
    solution_overview: `A furnace's throughput follows the power $T(g)=A g^{r}$ tonnes per hour for gas feed $g>0$. Two runs recover both constants: the ratio cancels $A$ and isolates $r$; either level then pins $A$. The site licence is a level cap of $32$ tonnes per hour.

Because the recovered exponent sits below one, throughput grows more slowly than the feed, and throughput per cubic metre falls. A scale question uses $k^{r}$.`,
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

The recorded rise is $A\\bigl(5^{2}-3^{2}\\bigr)=64$, so $16A=64$ and $A=4$. Volume is then $V(d)=4d^{2}$.

The exponent $2$ sits above one, so stored volume grows faster than depth, so the statement is True.`,
      `**B.** → True

At six metres the recovered rule is a level:

$$V(6)=4\\cdot 36=144$$

That sits above $140$ cubic metres, so the statement is True.`,
      `**C.** → False

To double stored volume, the depth multiplier $k$ must satisfy $k^{2}=2$, so $k=\\sqrt{2}<2$.

The water depth must less than double, not more than double, so the statement is False.`,
      `**D.** → False

A positive exponent sends $V(d)\\to\\infty$ as $d$ grows. Tapering is already built into the square law; it does not add a ceiling.

Stored volume has no finite cap, so the statement is False.`,
      `**E.** → False

Filling from $4$ metres to $8$ metres adds

$$V(8)-V(4)=4\\cdot 64-4\\cdot 16=192$$

That is not more than $200$ cubic metres, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 46,
    solution_overview: `A tapered rainwater basin stores the power $V(d)=A d^{2}$ cubic metres at depth $d>0$ metres. The recorded rise from $3$ metres to $5$ metres, a difference of two levels, recovers $A$.

Because the exponent exceeds one, stored volume grows faster than depth, and doubling volume needs less than a doubling of depth. A positive exponent has no finite cap as depth grows. A scale question uses $k^{2}$.`,
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

The recorded rise is $A\\bigl(50^{2}-30^{2}\\bigr)=80$, so $1600A=80$ and $A=\\frac{1}{20}$. The slope is then $E'(v)=\\frac{v}{10}$.

That leftover power is positive, so equal speed increments raise the index by more at higher speeds, so the statement is True.`,
      `**B.** → True

At $40$ kilometres per hour the recovered rule is a level:

$$E(40)=\\frac{1}{20}\\cdot 1600=80$$

That sits above $70$, so the statement is True.`,
      `**C.** → False

Index per kilometre per hour of speed is $\\frac{E(v)}{v}=\\frac{v}{20}$. The leftover exponent is positive, so that average is not the same at every speed.

A square law cannot have a constant average, so the statement is False.`,
      `**D.** → True

A nonzero power inverts to another power. From $E=\\frac{1}{20}v^{2}$:

$$v=\\sqrt{20E}$$

The inverse exponent $\\frac{1}{2}$ sits below one, so speed grows more slowly than the index, so the statement is True.`,
      `**E.** → False

At $80$ kilometres per hour:

$$E(80)=\\frac{1}{20}\\cdot 6400=320$$

The claim wants an index still under $300$. Three hundred and twenty sits above that line, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 47,
    solution_overview: `A fleet safety report scores braking energy by the power $E(v)=A v^{2}$, where $v>0$ is speed in kilometres per hour. The recorded rise from $30$ to $50$ kilometres per hour, a difference of two levels, recovers $A$.

Because the exponent exceeds one, equal speed increments raise the index by more at higher speeds, and index per unit of speed rises. A nonzero power inverts to another power, so the speed that produces a given index grows more slowly than the index itself.`,
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

The two-metre silo pins $a\\cdot 4=12$ and $k\\cdot 8=8$, so $S(h)=3h^{2}$ and $V(h)=h^{3}$. Steel uses exponent $2$ and capacity uses exponent $3$.

The smaller exponent is on steel, so steel use grows more slowly than capacity as height rises, so the statement is True.`,
      `**B.** → True

A four-metre silo is a level of the capacity rule:

$$V(4)=4^{3}=64$$

That sits above $60$ cubic metres, so the statement is True.`,
      `**C.** → True

Eliminating height from the two recovered powers gives

$$S=3V^{\\frac{2}{3}}$$

Steel as a function of capacity is a monomial in $V$, so the statement is True.`,
      `**D.** → False

Two separate two-metre silos use $2\\cdot 12=24$ square metres of steel. One four-metre silo uses

$$S(4)=3\\cdot 16=48$$

Those are not the same steel, so the statement is False.`,
      `**E.** → False

An eight-metre silo uses

$$S(8)=3\\cdot 64=192$$

The claim wants more than $200$ square metres. One hundred and ninety-two sits below that line, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 48,
    solution_overview: `Geometrically similar silos have steel skin $S(h)=a h^{2}$ square metres and capacity $V(h)=k h^{3}$ cubic metres for height $h>0$. The two-metre silo recovers both coefficients.

Steel uses exponent $2$ and capacity uses exponent $3$, so steel grows more slowly than capacity. Eliminating $h$ writes steel as a leftover power of capacity. A scale question uses $k^{2}$ for steel and $k^{3}$ for capacity.`,
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

The recorded rise is $A\\bigl(6-2\\bigr)=16$, so $A=4$ and $T(n)=4n^{\\frac{1}{2}}$. Proportionality would need exponent $1$.

The exponent is $\\frac{1}{2}$, so total inspection time is not proportional to the number of shipments, so the statement is False.`,
      `**B.** → True

The $40$-hour ceiling inverts $4n^{\\frac{1}{2}}=40$:

$$n=100$$

That consignment sits below $110$ shipments, so the ceiling is already binding below $110$, so the statement is True.`,
      `**C.** → False

Staffing that just meets the ceiling is $n=100$ with $T=40$. An extra shipment still adds $T'(n)=2n^{-\\frac{1}{2}}$, which at $n=100$ is $0.2$ hours, not almost nothing, and it would push the total past $40$.

A modestly larger consignment is not covered, so the statement is False.`,
      `**D.** → True

Quadrupling a consignment multiplies inspection time by $k^{\\frac{1}{2}}$, because $A$ cancels:

$$\\frac{T(4n)}{T(n)}=4^{\\frac{1}{2}}=2$$

Inspection time is multiplied by two, so the statement is True.`,
      `**E.** → False

A forty-nine-shipment consignment is a level:

$$T(49)=4\\cdot 7=28$$

That is not more than $30$ hours, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 49,
    solution_overview: `Customs inspection time follows the power $T(n)=A n^{\\frac{1}{2}}$ hours for a consignment of $n>0$ shipments. The recorded rise from $4$ shipments to $36$ shipments, a difference of two levels, recovers $A$. A staffing plan can supply at most $40$ inspection hours, a level cap on $T$.

Because the exponent sits below one, total time is not proportional to $n$, and quadrupling a consignment doubles inspection time. The cap inverts to a largest legal consignment.`,
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

The recorded cut is $A\\bigl(2^{-2}-4^{-2}\\bigr)=150$, so $\\frac{3A}{16}=150$ and $A=800$. Illuminance is then $I(d)=800d^{-2}$. Doubling distance multiplies illuminance by $k^{-2}$:

$$\\frac{I(2d)}{I(d)}=2^{-2}=\\frac{1}{4}$$

The reading is cut to one quarter, so the statement is True.`,
      `**B.** → True

At five metres the recovered rule is a level:

$$I(5)=\\frac{800}{25}=32$$

That sits under $40$ lux, so the statement is True.`,
      `**C.** → False

An extra metre is the slope $I'(d)=-1600d^{-3}$. The size of that cut is larger at $2$ metres than at $4$, because a more negative leftover exponent makes the drop steeper near the lamp.

An extra metre cuts less illuminance at $4$ metres, not more, so the statement is False.`,
      `**D.** → False

A nonzero power inverts to another power. From $I=800d^{-2}$:

$$d=\\sqrt{800}\\,I^{-\\frac{1}{2}}$$

Distance as a function of illuminance is still a monomial in $I$. Falling illuminance does not introduce a logarithm, so the statement is False.`,
      `**E.** → False

At three metres:

$$I(3)=\\frac{800}{9}$$

That is about $88.9$ lux, which is not still above $90$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 50,
    solution_overview: `Illuminance from a gallery spotlight follows the power $I(d)=A d^{-2}$ lux at distance $d>0$ metres. The recorded cut from $2$ metres to $4$ metres, a difference of two levels, recovers $A$.

A negative exponent of $-2$ means doubling the distance quarters the reading. An extra metre cuts more illuminance at a short distance than at a long one. A nonzero power inverts to another power, so distance as a function of illuminance is itself a power.`,
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

A power $C(n)=A n^{r}$ grows more slowly than the account count precisely when $r<1$. Here $r=\\frac{3}{4}$. The scale identity is

$$\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}$$

and $2^{\\frac{3}{4}}<2$, so the bill lags the book, so the statement is True.`,
      `**B.** → False

Doubling accounts would double the bill only if the exponent were $1$. With exponent $\\frac{3}{4}$ the factor is

$$\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}\\approx 1.68$$

which is not $2$. Linear thinking is the mismatch, so the statement is False.`,
      `**C.** → True

The recorded rise from $16$ to $81$ accounts isolates $A$. Both sizes are fourth powers, so the shape factors are cubes of the fourth roots:

$$16^{\\frac{3}{4}}=8$$

$$81^{\\frac{3}{4}}=27$$

The logged gap is then

$$A(27-8)=1900$$

$$19A=1900$$

$$A=100$$

At $81$ accounts:

$$C(81)=100\\cdot 27=2700$$

That sits above $2500$, so the statement is True.`,
      `**D.** → False

The recorded rise $A(27-8)=1900$ forces $A=100$, so $C(n)=100 n^{\\frac{3}{4}}$. The leftover slope is

$$C'(n)=75 n^{-\\frac{1}{4}}$$

At sixteen accounts:

$$C'(16)=\\frac{75}{2}$$

At eighty-one accounts:

$$C'(81)=25$$

Because $25<\\frac{75}{2}$, an extra account adds less after eighty-one than after sixteen. The leftover exponent is negative, so later accounts are cheaper to add, so the statement is False.`,
      `**E.** → True

From the same recorded rise, $16^{\\frac{3}{4}}=8$ and $81^{\\frac{3}{4}}=27$, so $19A=1900$ and $A=100$. A bill of $12500$ then inverts as

$$100 n^{\\frac{3}{4}}=12500$$

$$n^{\\frac{3}{4}}=125=5^{3}$$

$$n=5^{4}=625$$

Six hundred and twenty-five sits above $600$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 51,
    solution_overview: `An audit practice prices engagements by $C(n)=A n^{0.75}$ when $n>0$ accounts are tested. The bill rises by exactly $1900$ as engagement size rises from $16$ to $81$ accounts. A client has a $2700$ cap, and a rival quotes $R(n)=50n$.

The exponent $\\frac{3}{4}$ is given, so the remaining unknown is the coefficient $A$. The recorded rise is a difference of two levels:

$$A\\cdot 81^{\\frac{3}{4}}-A\\cdot 16^{\\frac{3}{4}}=1900$$

A scale question uses the ratio identity

$$\\frac{C(kn)}{C(n)}=k^{\\frac{3}{4}}$$

in which the coefficient cancels.`,
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

Inverse-linear decay would multiply concentration by $\\frac{1}{2}$ on a doubling of distance. Here the exponent is $-\\frac{3}{2}$, so

$$\\frac{c(2x)}{c(x)}=2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}\\approx 0.354$$

which is steeper than $\\frac{1}{2}$. Because $-\\frac{3}{2}<-1$, concentration falls faster than inverse-linear decay, so the statement is True.`,
      `**B.** → False

Concentration per metre of distance is $c(x)/x$. With $c(x)=A x^{-\\frac{3}{2}}$ that quotient is

$$\\frac{c(x)}{x}=A x^{-\\frac{5}{2}}$$

The leftover exponent is not $0$, so the intensity still depends on range. It is steeper near the stack than far downwind, so the statement is False.`,
      `**C.** → True

The two monitors give $4^{-\\frac{3}{2}}=\\frac{1}{8}$ and $16^{-\\frac{3}{2}}=\\frac{1}{64}$, so

$$A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=43.75$$

$$\\frac{7A}{64}=43.75$$

$$A=400$$

At $100$ metres the three-halves power is $10^{3}=1000$:

$$c(100)=\\frac{400}{1000}=0.4$$

That sits below $0.5$, so the statement is True.`,
      `**D.** → True

A nonzero power inverts to another power. Starting from $c=A x^{-\\frac{3}{2}}$,

$$x=\\left(\\frac{A}{c}\\right)^{\\frac{2}{3}}$$

The new exponent is the reciprocal of $-\\frac{3}{2}$. Distance needed for a given concentration is still a monomial in $c$, so the statement is True.`,
      `**E.** → False

The logged gap recovers $A=400$, because $4^{-\\frac{3}{2}}=\\frac{1}{8}$ and $16^{-\\frac{3}{2}}=\\frac{1}{64}$. At $4$ metres:

$$c(4)=400\\cdot\\frac{1}{8}=50$$

Fifty is not under $45$. That $50$ is also $6.25+43.75$, the far reading plus the logged gap, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 52,
    solution_overview: `Downwind particle concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre for distance $x>0$ metres from the stack. A monitor at $4$ metres reads exactly $43.75$ more than a monitor at $16$ metres.

The exponent $-\\frac{3}{2}$ is given, so only $A$ is unknown. The $43.75$ figure is a difference of two readings:

$$A\\cdot 4^{-\\frac{3}{2}}-A\\cdot 16^{-\\frac{3}{2}}=43.75$$

A scale question uses

$$\\frac{c(kx)}{c(x)}=k^{-\\frac{3}{2}}$$

in which the coefficient cancels.`,
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

Surge is a square root of wind and loss cubes that surge, so the composed exponent is

$$\\frac{1}{2}\\cdot 3=\\frac{3}{2}$$

The inner coefficient $0.5$ is cubed as well:

$$32\\cdot 0.5^{3}=4$$

leaving $L(w)=4w^{\\frac{3}{2}}$. A product of powers of the same variable is again a power, so the statement is True.`,
      `**B.** → False

After both stages the leftover exponent is $\\frac{3}{2}$, so a doubling of wind multiplies loss by

$$\\frac{L(2w)}{L(w)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$$

which is not $2$. A one-for-one wind scale-up understates the second stage, so the statement is False.`,
      `**C.** → True

At $w=64$ the surge stage is a square root:

$$s(64)=0.5\\cdot 8=4$$

The loss stage then cubes that height:

$$L=32\\cdot 4^{3}=32\\cdot 64=2048$$

Two thousand and forty-eight sits above $2000$, so the statement is True.`,
      `**D.** → True

The composed exponent is $\\frac{3}{2}>1$, so each extra unit of wind adds more loss than the unit before it. The same doubling factor

$$2^{\\frac{3}{2}}=2\\sqrt{2}>2$$

is that acceleration in a scale. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**E.** → False

Composing first gives $L(w)=4w^{\\frac{3}{2}}$. A loss of $1000$ inverts as

$$4w^{\\frac{3}{2}}=1000$$

$$w^{\\frac{3}{2}}=250$$

$$w=250^{\\frac{2}{3}}\\approx 39.7$$

which sits below $50$, not above it. At $w=50$ the three-halves power is already past $250$ after the coefficient $4$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 53,
    solution_overview: `Storm surge height is $s(w)=0.5 w^{0.5}$ metres at wind speed $w>0$, and the loss index is $L(s)=32 s^{3}$.

Composing substitutes the inner rule into the outer one. Powers multiply and the inner coefficient is raised to the outer exponent:

$$L(w)=32\\bigl(0.5 w^{0.5}\\bigr)^{3}$$

The composed map is again a power of $w$.`,
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

Impact is a square-root law. Doubling order size multiplies impact by

$$\\frac{I(2v)}{I(v)}=2^{\\frac{1}{2}}=\\sqrt{2}\\approx 1.41$$

which is not $2$. One half sits below one, so impact grows more slowly than order size, so the statement is True.`,
      `**B.** → False

The scaled charge is the product $vI(v)$. With $I(v)=A\\sqrt{v}$ that product is $A v^{\\frac{3}{2}}$, so a doubling multiplies the charge by

$$2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$$

which exceeds $2$. Impact itself lags, but multiplying by the doubled size pushes the charge past a doubling, so the statement is False.`,
      `**C.** → True

The square roots at the two logged sizes are $\\sqrt{0.09}=0.3$ and $\\sqrt{0.04}=0.2$, so

$$A(0.3-0.2)=6$$

$$A=60$$

At $0.16$ ADV:

$$\\sqrt{0.16}=0.4$$

$$I(0.16)=60\\cdot 0.4=24$$

Twenty-four sits above $20$, so the statement is True.`,
      `**D.** → True

With $A=60$ the scaled charge is $60 v^{\\frac{3}{2}}$ and the fee is $30v$. They meet when

$$60 v^{\\frac{3}{2}}=30v$$

$$60\\sqrt{v}=30$$

$$v=0.25$$

Past that order $\\sqrt{v}$ keeps growing, so $60\\sqrt{v}-30$ stays positive. Once the scaled charge overtakes the fee it stays larger, so the statement is True.`,
      `**E.** → False

The same calibration $A=60$ makes the scaled charge $60 v^{\\frac{3}{2}}$. At $v=0.25$:

$$\\left(\\frac{1}{4}\\right)^{\\frac{3}{2}}=\\frac{1}{8}$$

$$60\\cdot\\frac{1}{8}=7.5$$

Seven and a half sits below $10$. This is also the break-even order, where charge equals the notional fee $7.5$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 54,
    solution_overview: `Price impact is $I(v)=A v^{0.5}$ basis points for order size $v>0$ as a fraction of average daily volume. Increasing an order from $0.04$ ADV to $0.09$ ADV adds exactly $6$ basis points of impact. The scaled impact charge is $vI(v)$, and a notional fee is $F(v)=30v$.

The exponent $\\frac{1}{2}$ is given, so only $A$ is unknown. The $6$ basis points is a difference of two square roots:

$$A\\sqrt{0.09}-A\\sqrt{0.04}=6$$

The scaled charge multiplies impact by order size and raises the exponent by one.`,
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

A nonzero power inverts to another power. From $E=A m^{\\frac{2}{3}}$,

$$m=\\left(\\frac{E}{A}\\right)^{\\frac{3}{2}}$$

The new exponent is the reciprocal of $\\frac{2}{3}$. Mass needed for a given daily energy is still a monomial in $E$, so the statement is True.`,
      `**B.** → True

Energy per kilogram is $E(m)/m$. With exponent $\\frac{2}{3}$ the leftover power is

$$\\frac{E(m)}{m}=A m^{-\\frac{1}{3}}$$

The leftover exponent is negative, so intensity falls as mass rises. A heavier animal uses more energy in total, but less per kilogram, so the statement is True.`,
      `**C.** → True

The two masses are cubes, so the two-thirds powers are squares of the cube roots:

$$27^{\\frac{2}{3}}=9$$

$$64^{\\frac{2}{3}}=16$$

The logged gap is then

$$A(16-9)=70$$

$$A=10$$

At $64$ kg:

$$E(64)=10\\cdot 16=160$$

One hundred and sixty sits above $150$, so the statement is True.`,
      `**D.** → False

Two equal animals use $2E(m)$. One animal of twice the mass uses

$$E(2m)=2^{\\frac{2}{3}}E(m)$$

Because $\\frac{2}{3}<1$, the factor $2^{\\frac{2}{3}}$ is about $1.59$, not $2$. Merging the two animals lowers total energy use rather than leaving it unchanged, so the statement is False.`,
      `**E.** → True

The same gap of $70$ recovers $A=10$, because $64^{\\frac{2}{3}}=16$ and $27^{\\frac{2}{3}}=9$. Two hundred and sixteen is $6^{3}$, so the two-thirds power is $36$:

$$E(216)=10\\cdot 36=360$$

Three hundred and sixty sits under $400$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 55,
    solution_overview: `Daily energy use follows $E(m)=A m^{\\frac{2}{3}}$ units for body mass $m>0$ kilograms. A $64$ kg animal uses exactly $70$ more energy units per day than a $27$ kg animal. A herd's total use is the sum of its animals' individual uses.

The exponent $\\frac{2}{3}$ is given, so only $A$ is unknown. Both masses are cubes, and the $70$ units is a difference of two levels:

$$A\\cdot 64^{\\frac{2}{3}}-A\\cdot 27^{\\frac{2}{3}}=70$$

Energy per kilogram subtracts one from the exponent.`,
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

The exponent $-\\frac{3}{2}$ is negative, so for $d_{2}>d_{1}$ the ratio of footfalls is

$$\\left(\\frac{d_{2}}{d_{1}}\\right)^{-\\frac{3}{2}}<1$$

A farther zone always supplies fewer visitors than a nearer one. Sign of the exponent is the ranking, so the statement is True.`,
      `**B.** → False

An inverse-square law would give the fourfold-distance factor $4^{-2}=\\frac{1}{16}$. The recovered exponent $-\\frac{3}{2}$ instead gives

$$4^{-\\frac{3}{2}}=\\frac{1}{8}$$

The two scale factors do not match. Inverse-square is the wrong power, so the statement is False.`,
      `**C.** → True

The shape factors are $4^{1.5}=8$ and $16^{1.5}=64$, so

$$\\frac{A}{8}-\\frac{A}{64}=350$$

$$\\frac{7A}{64}=350$$

$$A=3200$$

At $9$ kilometres, $9^{1.5}=27$:

$$f(9)=\\frac{3200}{27}\\approx 118.5$$

That still clears the hundred-visitor core threshold, so the statement is True.`,
      `**D.** → True

With $A=3200$ the core floor $f(d)=100$ inverts as

$$3200 d^{-1.5}=100$$

$$d^{1.5}=32$$

$$d=32^{\\frac{2}{3}}\\approx 10.08$$

Ten kilometres still sits inside, because $10^{1.5}\\approx 31.62<32$. Eleven kilometres is already out, because $11\\sqrt{11}\\approx 36.48>32$. Core catchment already ends before $11$ kilometres, so the statement is True.`,
      `**E.** → False

The slope of $f(d)=3200 d^{-1.5}$ is

$$f'(d)=-4800 d^{-\\frac{5}{2}}$$

Its size is $150$ at $4$ km and only about $4.69$ at $16$ km. An extra kilometre cuts more visitors near the park than far from it. Distance-decay drops are steepest at the door, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 56,
    solution_overview: `Weekly footfall from a residential zone follows $f(d)=A d^{-1.5}$ visitors for driving distance $d>0$ kilometres. A zone $4$ kilometres away supplies $350$ more visitors a week than a zone $16$ kilometres away. A zone counts as core catchment when it supplies at least $100$ visitors a week.

The exponent $-1.5$ is given, so only $A$ is unknown. Both distances are perfect squares, and the recorded $350$ is a difference of two zones:

$$\\frac{A}{4^{1.5}}-\\frac{A}{16^{1.5}}=350$$

Core catchment inverts the same law at the $100$-visitor floor.`,
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

The two arrays give $2.25^{r}=1.5$. Because $1.5=2.25^{\\frac{1}{2}}$,

$$r=\\frac{1}{2}$$

Doubling area then multiplies output by $\\sqrt{2}\\approx 1.41$, not by $2$. One half sits below one, so output grows more slowly than installed area, so the statement is True.`,
      `**B.** → False

From $r=\\frac{1}{2}$ and $A\\cdot 10=240$, the coefficient is $A=24$, so $y(a)=24\\sqrt{a}$. Expanding $225$ m$^{2}$ to $450$ m$^{2}$ is a doubling, and

$$y(450)=360\\cdot\\sqrt{2}\\approx 509$$

which sits under $520$. A linear doubling would have claimed $720$, so the statement is False.`,
      `**C.** → True

Output per square metre is $y(a)/a$. With $y(a)=24\\sqrt{a}$ that quotient is

$$\\frac{y(a)}{a}=24 a^{-\\frac{1}{2}}$$

The leftover exponent is negative. A larger roof delivers more kilowatt-hours in total, but fewer per square metre, so the statement is True.`,
      `**D.** → True

To double the $240$ kWh output, $24\\sqrt{a}=480$ forces

$$\\sqrt{a}=20$$

$$a=400$$

The $100$ m$^{2}$ array must quadruple, which is more than a doubling. Any $r<1$ doubling of output requires more than a doubling of area, so the statement is True.`,
      `**E.** → True

The same $a=400$ that doubles the logged $240$ kWh delivers

$$y(400)=24\\cdot 20=480$$

which sits above $470$. Twenty squared is $400$. The $470$ cutoff is a near miss on that exact doubling array, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 57,
    solution_overview: `Daily output from a rooftop array follows $y(a)=A a^{r}$ kilowatt-hours for installed panel area $a>0$ square metres. A $100$ m$^{2}$ array delivers $240$ kWh a day, and a $225$ m$^{2}$ array delivers $360$ kWh. A proposal would expand the second array to $450$ m$^{2}$.

Both $A$ and $r$ are unknown. The ratio of the two arrays cancels $A$ and isolates $r$; either array then pins $A$:

$$\\left(\\frac{225}{100}\\right)^{r}=\\frac{360}{240}$$

$$A\\cdot 100^{r}=240$$

A scale question uses $\\frac{y(ka)}{y(a)}=k^{r}$.`,
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

The milestone ratio is $4^{b}=\\frac{1}{2}$. Because $4^{-\\frac{1}{2}}=\\frac{1}{2}$,

$$b=-\\frac{1}{2}$$

Doubling volume then multiplies unit cost by $2^{-\\frac{1}{2}}\\approx 0.707$, not by $\\frac{1}{2}$. Quadrupling would halve the unit cost, but a single doubling does not, so the statement is False.`,
      `**B.** → True

With $b=-\\frac{1}{2}$ the unit cost $A N^{-\\frac{1}{2}}$ falls, while cumulative spend is

$$S(N)=A N^{\\frac{1}{2}}$$

The leftover exponent on spend is positive, so $S$ still rises. Cheaper cells can still mean a larger total cheque as volume grows, so the statement is True.`,
      `**C.** → True

From $b=-\\frac{1}{2}$ and $100^{-\\frac{1}{2}}=\\frac{1}{10}$, the coefficient satisfies $A/10=80$, so $A=800$. At $1600$ thousand cells:

$$\\sqrt{1600}=40$$

$$c(1600)=\\frac{800}{40}=20$$

Twenty sits below $25$. Two further quadruplings from $c(100)=80$ are $40$ then $20$, so the statement is True.`,
      `**D.** → False

Cumulative spend is $S(N)=800\\sqrt{N}$. Quadrupling volume multiplies spend by

$$4^{\\frac{1}{2}}=2$$

exactly a doubling, not more than a doubling. From $S(100)=8000$ the spend at $400$ thousand cells is $16000$, twice, so the statement is False.`,
      `**E.** → True

The same $A=800$ at $25$ thousand cells uses $\\sqrt{25}=5$:

$$c(25)=\\frac{800}{5}=160$$

One hundred and sixty sits above $150$. Early on the learning curve the unit cost is still high, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 58,
    solution_overview: `Unit cost for battery cells follows $c(N)=A N^{b}$ euros for cumulative output $N>0$ in thousands of cells. At $100$ thousand cells the unit cost was $80$, and at $400$ thousand it was $40$. Cumulative spend is unit cost multiplied by volume, $S(N)=N\\,c(N)$.

Two milestones give two equations. Their ratio isolates $b$; either milestone then fixes $A$:

$$4^{b}=\\frac{40}{80}$$

$$A\\cdot 100^{b}=80$$

Spend raises the exponent by one.`,
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

The gauged run gives $27A=135$, so $A=5$. Composing with $v(q)=\\frac{1}{2}q^{\\frac{1}{2}}$ then yields

$$S(q)=5\\left(\\frac{q^{\\frac{1}{2}}}{2}\\right)^{3}=0.625 q^{\\frac{3}{2}}$$

Doubling discharge multiplies transport by $2^{\\frac{3}{2}}\\approx 2.83$, which exceeds $2$. The leftover exponent sits above one, so the statement is True.`,
      `**B.** → True

Velocity is a square root of discharge and transport cubes velocity, so the composed exponent is

$$\\frac{1}{2}\\cdot 3=\\frac{3}{2}$$

A product of powers of the same variable is again a power. Transport after both stages is a monomial in $q$, so the statement is True.`,
      `**C.** → True

With $A=5$ the composed law is $S(q)=0.625 q^{1.5}$. The $5000$ t/day limit inverts as

$$0.625 q^{1.5}=5000$$

$$q^{1.5}=8000$$

$$q=400$$

Four hundred contributes $20^{3}=8000$ after the three-halves power, and $0.625\\cdot 8000=5000$, which sits above $4500$, so the statement is True.`,
      `**D.** → False

The first-stage law is $S(v)=5v^{3}$. Doubling velocity multiplies transport by

$$2^{3}=8$$

not by $2$. The claim is about $S(v)$, not about the composed $S(q)$. Mixing the two stages is the mismatch, so the statement is False.`,
      `**E.** → False

At discharge $64$,

$$v(64)=\\frac{8}{2}=4$$

$$S=5\\cdot 4^{3}=5\\cdot 64=320$$

Three hundred and twenty already clears $300$. Transport is not still under the line, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `Sediment transport follows $S(v)=A v^{3}$ tonnes per day for flow velocity $v>0$, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity itself depends on discharge through $v(q)=\\frac{q^{0.5}}{2}$. The channel's stability limit is $5000$ tonnes per day.

One gauged run calibrates the transport stage:

$$A\\cdot 3^{3}=135$$

Composing then substitutes $v(q)$ into $S(v)$, which multiplies the exponents and cubes the inner coefficient.`,
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

Revenue is price times quantity. With $q=A p^{-3}$ that product is

$$R(p)=A p^{-2}$$

A product of two powers of the same variable is again a power. Revenue is a monomial in price, so the statement is True.`,
      `**B.** → True

The leftover exponent on $R(p)=A p^{-2}$ is negative, so $R$ falls as $p$ rises. Highly elastic demand, exponent $-3$, means a price rise cuts quantity by more than enough to shrink $pq$. Raising the price always cuts revenue along this curve, so the statement is True.`,
      `**C.** → True

From $A\\cdot\\frac{1}{8}=500$, the coefficient is $A=4000$, so $R(p)=4000 p^{-2}$. At $p=2.50$:

$$2.5^{2}=\\frac{25}{4}$$

$$R(2.5)=4000\\cdot\\frac{4}{25}=640$$

Six hundred and forty sits below $700$, so the statement is True.`,
      `**D.** → True

A $10\\%$ price rise is the multiplier $k=1.1$. Quantity scales by

$$1.1^{-3}\\approx 0.751$$

a cut of about $24.9\\%$, which is more than $20\\%$. The exponent $-3$ acts on the whole factor, so the statement is True.`,
      `**E.** → False

Elastic demand is why a price rise cuts revenue here, not why it would raise it. With leftover exponent $-2$,

$$1.1^{-2}\\approx 0.826$$

about a $17\\%$ revenue drop. Along this curve a $10\\%$ price rise shrinks the till, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 60,
    solution_overview: `Demand follows $q(p)=A p^{-3}$ units at a price $p>0$, and a price of $2$ clears $500$ units. A proposed indexation would raise the price by $10\\%$ across the board. Revenue is $R=pq$.

The isoelastic form fixes the exponent. The observed pair pins the coefficient:

$$A\\cdot 2^{-3}=500$$

Multiplying by $p$ raises the exponent by one. A price factor $k$ then scales quantity by $k^{-3}$ and revenue by $k^{-2}$.`,
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

The logged ratio is $\\frac{135}{40}=\\frac{27}{8}$ against a current ratio $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$. Matching powers gives

$$\\left(\\frac{3}{2}\\right)^{2k}=\\left(\\frac{3}{2}\\right)^{3}$$

$$k=\\frac{3}{2}$$

Three halves sits above one, so strength outruns current, so the statement is True.`,
      `**B.** → True

From $k=\\frac{3}{2}$ and $A\\cdot 4^{\\frac{3}{2}}=40$, the shape factor $4^{\\frac{3}{2}}=8$ forces $A=5$, so $S(p)=5p^{\\frac{3}{2}}$. At $16$ A:

$$16^{\\frac{3}{2}}=64$$

$$S(16)=5\\cdot 64=320$$

Three hundred and twenty sits above $300$, so the statement is True.`,
      `**C.** → True

A nonzero power inverts to another power. From $S=5p^{\\frac{3}{2}}$,

$$p=\\left(\\frac{S}{5}\\right)^{\\frac{2}{3}}$$

The new exponent is the reciprocal of $\\frac{3}{2}$. Current needed for a given strength is still a monomial in $S$, so the statement is True.`,
      `**D.** → False

The leftover slope of $S(p)=5p^{\\frac{3}{2}}$ is

$$S'(p)=\\frac{15}{2}\\sqrt{p}$$

At $4$ A that is $15$. At $9$ A it is $\\frac{45}{2}$. Because $15<\\frac{45}{2}$, an extra ampere adds less at $4$ A than at $9$ A. An exponent above one makes later amperes more productive, not less, so the statement is False.`,
      `**E.** → False

The $400$ N reject line inverts as $5p^{\\frac{3}{2}}=400$, so

$$p^{\\frac{3}{2}}=80$$

$$p=80^{\\frac{2}{3}}\\approx 18.57$$

which is not below $18$. At $18$ A the weld is still short of $400$ N. The smallest clearing current sits just past eighteen amperes, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 61,
    solution_overview: `A production weld's tensile strength follows $S(p)=A p^{k}$ newtons for welding current $p>0$ amperes. Neither constant is on the sheet: a $4$ A setting produced $40$ N and a $9$ A setting produced $135$ N. The line rejects any weld below $400$ N.

Two unknowns need both observations. The ratio cancels $A$ and isolates $k$; the $4$ A level then pins $A$:

$$\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}$$

$$A\\cdot 4^{k}=40$$

The reject line inverts the same power.`,
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

From $8^{\\frac{2}{3}}=4$, the trial forces $A=6$, so $H(m)=6m^{\\frac{2}{3}}$. Two $8$ kg buoys hold

$$2H(8)=48$$

One $64$ kg buoy holds $H(64)=6\\cdot 16=96$. Because $\\frac{2}{3}<1$, merging mass raises total hold. Two small buoys fall short of one large one, so the statement is False.`,
      `**B.** → True

With $H(m)=6m^{\\frac{2}{3}}$ a $125$ kg buoy is a fifth-power cube: $125=5^{3}$, so the two-thirds power is $25$:

$$H(125)=6\\cdot 25=150$$

One hundred and fifty sits above $140$. That is also the storm floor itself, so the statement is True.`,
      `**C.** → False

Doubling mass multiplies hold by

$$2^{\\frac{2}{3}}\\approx 1.59$$

not by $2$. Holding power rises, but not in lockstep with mass. Lockstep would have needed exponent $1$, and the trial was fitted with $\\frac{2}{3}$, so the statement is False.`,
      `**D.** → True

A nonzero power inverts to another power. From $H=6m^{\\frac{2}{3}}$,

$$m=\\left(\\frac{H}{6}\\right)^{\\frac{3}{2}}$$

The new exponent is the reciprocal of $\\frac{2}{3}$. Mass needed for a given hold is still a monomial in $H$, so the statement is True.`,
      `**E.** → False

Reaching $150$ kN takes $m=(150/6)^{\\frac{3}{2}}=125$ kg, which is $0.125$ tonnes, not more than $1$ tonne. Mixing kilograms with tonnes without the $1000^{\\frac{2}{3}}$ rescaling is how a one-tonne claim appears, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 62,
    solution_overview: `A harbour buoy's holding power follows $H(m)=A m^{\\frac{2}{3}}$ kilonewtons when mass $m>0$ is measured in kilograms. A trial buoy of $8$ kg held exactly $24$ kN. The authority prefers tonnes ($1$ tonne $=1000$ kg) and writes the same law as $H(t)=B t^{\\frac{2}{3}}$. A storm protocol demands at least $150$ kN.

The exponent is given, so one trial fixes $A$:

$$A\\cdot 8^{\\frac{2}{3}}=24$$

A change of unit is the substitution $m=1000t$, and the conversion enters under the exponent as $B=A\\cdot 1000^{\\frac{2}{3}}$.`,
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

A nonzero power inverts to another power. From $T=A d^{-2}$,

$$d=\\sqrt{A}\\, T^{-\\frac{1}{2}}$$

The new exponent is the reciprocal of $-2$. Hop distance needed for a given throughput is still a monomial in $T$, so the statement is True.`,
      `**B.** → True

The bench reading gives $A/16=50$, so $A=800$ and $T(d)=800/d^{2}$. The reliability floor $T=8$ then forces

$$\\frac{800}{d^{2}}=8$$

$$d^{2}=100$$

$$d=10$$

Ten metres sits under $12$, and every longer hop is slower, so the statement is True.`,
      `**C.** → False

Doubling the hop would halve throughput only if the exponent were $-1$. With $-2$ the factor is

$$2^{-2}=\\frac{1}{4}$$

An inverse-square law quarters the reading when distance doubles. Inverse-linear thinking is the mismatch, so the statement is False.`,
      `**D.** → False

At $d=11$, with $A=800$,

$$T(11)=\\frac{800}{121}\\approx 6.61$$

which sits below $8$. The reliable radius is $10$ m; a longer hop can only be slower. Eleven metres already misses the floor, so the statement is False.`,
      `**E.** → False

The slope of $T(d)=800 d^{-2}$ is

$$T'(d)=-1600 d^{-3}$$

Its size is $25$ at $4$ m and $\\frac{25}{8}$ at $8$ m. An extra metre cuts more throughput on the short hop, not on the long one. Inverse-square drops are steepest at the near end, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 63,
    solution_overview: `A wireless mesh's sustained throughput follows $T(d)=A d^{-2}$ megabits per second for hop distance $d>0$ metres. A bench test at $d=4$ m recorded $T=50$ Mbps. The link is rated reliable only while throughput stays at or above $8$ Mbps.

The exponent $-2$ is given, so one bench reading fixes $A$:

$$\\frac{A}{4^{2}}=50$$

Because the exponent is negative, the reliability floor becomes a maximum distance:

$$\\frac{A}{d^{2}}\\ge 8$$`,
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

The exponent $\\frac{3}{4}$ is smaller than one, so each extra gram of body adds less gill than the gram before it. Gill area grows, but more slowly than body mass. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**B.** → True

The specimen gives $256^{\\frac{3}{4}}=64$, so $64A=512$ and $A=8$. At $16$ g, sixteen is $2^{4}$, so the three-quarters power is $2^{3}=8$:

$$G(16)=8\\cdot 8=64$$

Sixty-four sits above $50$, so the statement is True.`,
      `**C.** → False

Gill area per gram is $G(m)/m$. With $G(m)=8m^{\\frac{3}{4}}$ that intensity is

$$8m^{-\\frac{1}{4}}$$

The leftover exponent is negative, so intensity falls as mass grows. A constant intensity would need leftover exponent $0$, so the statement is False.`,
      `**D.** → False

Doubling mass multiplies gill area by

$$2^{\\frac{3}{4}}\\approx 1.68$$

not by $2$. Area rises, but not in lockstep with mass. The same $r<1$ that made A true makes this doubling false, so the statement is False.`,
      `**E.** → False

A $64$ g fish has $64=2^{6}$, so the three-quarters power is $2^{\\frac{9}{2}}=16\\sqrt{2}$:

$$G(64)=8\\cdot 16\\sqrt{2}=128\\sqrt{2}\\approx 181$$

which sits short of $200$. The three-quarters power has grown, but not as far as the named area, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 64,
    solution_overview: `Gill surface area follows $G(m)=A m^{\\frac{3}{4}}$ square centimetres for body mass $m>0$ grams. A $256$ g specimen has gill area $512$ cm$^{2}$. Area per gram is the derived intensity $\\frac{G(m)}{m}$.

The exponent is given, so one specimen fixes $A$:

$$A\\cdot 256^{\\frac{3}{4}}=512$$

Dividing the law by mass subtracts one from the exponent.`,
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

For $S(t)=A\\sqrt{t}$ a time factor $c$ cancels the coefficient:

$$\\frac{S(ct)}{S(t)}=\\sqrt{c}$$

Quadrupling means $c=4$, and $\\sqrt{4}=2$. A square-root clock turns a fourfold wait into a twofold reading, so the statement is True.`,
      `**B.** → True

The recorded rise factors as $A(3-2)=5$, so $A=5$ and $S(t)=5\\sqrt{t}$. On day $4$:

$$S(4)=5\\cdot 2=10$$

Ten sits above $8$. Together with $S(9)=15$, the logged gap $15-10=5$ is recovered, so the statement is True.`,
      `**C.** → False

The leftover slope is

$$S'(t)=\\frac{5}{2}t^{-\\frac{1}{2}}$$

After four days that is $\\frac{5}{4}$. After nine days it is $\\frac{5}{6}$. An extra day adds more after four days than after nine, not the other way around. A square root flattens, so the statement is False.`,
      `**D.** → True

Reaching $30$ MPa inverts $5\\sqrt{t}=30$:

$$\\sqrt{t}=6$$

$$t=36$$

Thirty-six days sits under $40$. The square-root clock is slower than a linear guess, so the target arrives before day $40$, so the statement is True.`,
      `**E.** → False

The recorded $5$ MPa is the gap $S(9)-S(4)$, not the day $9$ level. With $A=5$,

$$S(9)=5\\cdot 3=15$$

Day $9$ is $15$ MPa. Treating a difference of two readings as a single level is the mix-up named in the title, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 65,
    solution_overview: `Early curing strength follows $S(t)=A\\sqrt{t}$ megapascals for curing time $t>0$ days. The log never states $A$: it only notes that strength rose by exactly $5$ MPa between day $4$ and day $9$.

No single level was logged, so the coefficient comes out of a difference. $A$ is a common factor and the exponent $\\frac{1}{2}$ is given:

$$A\\sqrt{9}-A\\sqrt{4}=5$$

A time multiplier $c$ scales strength by $\\sqrt{c}$.`,
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

The trusted ratio is $4=2^{k}$, so

$$k=2$$

A width factor $c>1$ then multiplies deflection by $c^{2}$, which exceeds $c$. Deflection outruns span. The integer $2$ is a square law, not a coincidence of the $3$ m and $6$ m runs, so the statement is True.`,
      `**B.** → True

From $k=2$ and $A\\cdot 9=18$, the coefficient is $A=2$, so $y(L)=2L^{2}$. The trusted quadratic at nine metres is

$$y(9)=2\\cdot 81=162$$

which sits above $155$. The questionable third run of $150$ is a different number; this letter asks what the trusted pair predicts, so the statement is True.`,
      `**C.** → False

Doubling span multiplies deflection by

$$2^{2}=4$$

not by $2$. The trusted move from $3$ m to $6$ m already did that: $18$ mm became $72$ mm. A doubled free span is four times the sag, so the statement is False.`,
      `**D.** → True

Predicted $162$ mm minus recorded $150$ mm is a $12$ mm shortfall:

$$162-150=12$$

which is more than $10$. The third run sits below the trusted quadratic. A $10$ mm tolerance would still flag this gap, so the statement is True.`,
      `**E.** → False

The third run would sit on the trusted law only if $\\frac{150}{18}=3^{2}$. Instead

$$\\frac{150}{18}=\\frac{25}{3}\\approx 8.33\\neq 9$$

The third run does not sit on the same power law. Predicted $162$ versus recorded $150$ is a $12$ mm gap, now read as a ratio rather than as millimetres, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 66,
    solution_overview: `Tip deflection of a cantilever follows $y(L)=A L^{k}$ millimetres for free span $L>0$ metres. Two spans are trusted: $y(3)=18$ and $y(6)=72$. A third run recorded $y(9)=150$, and the question is whether that third point still sits on the same power law.

Two trusted runs fix both constants. The ratio delivers $k$; either run then delivers $A$:

$$\\frac{72}{18}=2^{k}$$

$$A\\cdot 3^{k}=18$$

The third run is a test of the fitted curve, not an input to it.`,
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

The percentage rule is $1.2^{k}=1.728$. Matching powers of $1.2$ gives

$$1.2^{3}=1.728$$

$$k=3$$

Three is larger than one, so mass outruns height. The coefficient cancels in the ratio, so the statement is True.`,
      `**B.** → True

From $k=3$ and $A\\cdot 1000=500$, the coefficient is $A=0.5$. A $12$ m mast is a $20\\%$ stretch of the $10$ m reference, so

$$M(12)=500\\cdot 1.728=864$$

which sits above $800$. The same check is $0.5\\cdot 12^{3}=864$, so the statement is True.`,
      `**C.** → False

In the ratio $\\frac{M(1.2h)}{M(h)}=1.2^{k}$ the coefficient $A$ cancels, so the percentage rule cannot pin $A$. The $10$ m reference is the level that pins $A$. Scale information cannot substitute for a level, so the statement is False.`,
      `**D.** → True

A $10\\%$ stretch is the factor $1.1^{3}$:

$$1.1^{3}=1.331$$

a $33.1\\%$ mass rise, which sits above $30\\%$. Percent changes pass through the exponent, so the statement is True.`,
      `**E.** → False

A $20\\%$ height increase raises mass by $72.8\\%$, not by $20\\%$. That is the design note itself:

$$1.2^{3}=1.728$$

Height and mass do not move in lockstep when the exponent is $3$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 67,
    solution_overview: `A self-similar mast's steel mass follows $M(h)=A h^{k}$ kilograms for height $h>0$ metres. Lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$, and a $10$ m reference mast uses exactly $500$ kg of steel.

A percentage rule is a ratio and fixes only $k$; the reference mast is a level and fixes only $A$:

$$1.2^{k}=1.728$$

$$A\\cdot 10^{k}=500$$

Scale information cannot substitute for a level.`,
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

For an inverse square, a distance factor $k$ scales intensity by $k^{-2}$. Doubling is $k=2$:

$$2^{-2}=\\frac{1}{4}$$

Doubling distance quarters intensity at every starting range. Inverse-linear thinking would have claimed a half, so the statement is True.`,
      `**B.** → True

The meter reading gives $A/4=0.72$, so $A=2.88$ and $I(d)=2.88/d^{2}$. At $4$ m, which is a doubling of the $2$ m survey:

$$I(4)=\\frac{2.88}{16}=0.18$$

which sits under $0.2$. That is a quarter of $0.72$, so the statement is True.`,
      `**C.** → True

The leftover slope is

$$I'(d)=-5.76\\, d^{-3}$$

Its size is $0.72$ at $2$ m and about $0.027$ at $6$ m. An extra metre cuts more intensity near the hub. Inverse-square drops are front-loaded, so the statement is True.`,
      `**D.** → False

At $6$ m,

$$I(6)=\\frac{2.88}{36}=0.08$$

which equals the night cap rather than sitting above it. The claim wants a reading still above $0.08$; equality is not above. The cap is met exactly at six metres, so the statement is False.`,
      `**E.** → False

An inverse square falls from $0.72$ toward $0$ and therefore crosses $0.08$ at a finite distance. From $A=2.88$,

$$\\frac{2.88}{d^{2}}=0.08$$

$$d=6$$

The cap is met at six metres. Walking away from the hub always eventually satisfies the night limit, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 68,
    solution_overview: `Acoustic intensity from a cooling fan follows $I(d)=A d^{-2}$ watts per square metre for distance $d>0$ metres from the hub. A meter reading at $2$ metres records $0.72$ W/m$^{2}$. Night operations are capped at $0.08$ W/m$^{2}$.

The exponent $-2$ is given, so one meter reading fixes $A$:

$$\\frac{A}{2^{2}}=0.72$$

Because the exponent is negative, the night cap becomes a minimum standing distance

$$\\frac{A}{d^{2}}\\le 0.08$$`,
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

Head is a square of flow and jet speed is a square root of head, so the composed exponent is

$$2\\cdot\\frac{1}{2}=1$$

The leftover map is a line through the origin. Jet speed is proportional to flow, so the statement is True.`,
      `**B.** → True

The commissioning run gives $25A=50$, so $A=2$ and $H(q)=2q^{2}$. Jet speed is then

$$v(q)=4\\sqrt{2q^{2}}=4\\sqrt{2}\\, q$$

At $q=5$:

$$v(5)=20\\sqrt{2}$$

and $\\sqrt{2}>1.4$, so $20\\sqrt{2}>28$. Jet speed already sits above twenty-eight metres per second, so the statement is True.`,
      `**C.** → False

Doubling flow multiplies head by

$$2^{2}=4$$

not by $2$. An exact doubling of head would need exponent $1$. The claim is about $H$, not about the composed speed. Head quadruples, so the statement is False.`,
      `**D.** → True

Because speed is proportional to flow after both stages, twice $v(5)=20\\sqrt{2}$ needs twice the flow:

$$q=10$$

which sits under $12$. The target $40\\sqrt{2}$ m/s needs $10$ m$^{3}$/h, so the statement is True.`,
      `**E.** → False

Eliminating $q$ from $H=2q^{2}$ and $v=4\\sqrt{2}\\, q$ gives

$$H=\\frac{v^{2}}{16}$$

a square of jet speed, not a constant multiple of it. Doubling jet speed quadruples the head. Proportionality would have needed leftover exponent $1$ on $v$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 69,
    solution_overview: `A booster pump's differential head follows $H(q)=A q^{2}$ metres for delivered flow $q>0$ cubic metres per hour. A commissioning run at $q=5$ recorded $H=50$ m. That flow then passes through a nozzle whose jet speed is $v(H)=4\\sqrt{H}$ metres per second, so jet speed as a function of flow is the composition $v(q)=v(H(q))$.

The pump stage is calibrated from the commissioning run:

$$A\\cdot 5^{2}=50$$

Composing the two stages multiplies the exponents: $2\\cdot\\frac{1}{2}=1$.`,
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

To double throughput a staffing factor $k$ must satisfy $k^{\\frac{1}{2}}=2$, so

$$k=4$$

The yard needs four times the crew, not twice. That is more than a doubling. A square-root warehouse will not keep pace with headcount, so the statement is True.`,
      `**B.** → True

The logged shift gives $4A=80$, so $A=20$ and $T(s)=20\\sqrt{s}$. At $36$ drivers:

$$\\sqrt{36}=6$$

$$T(36)=20\\cdot 6=120$$

One hundred and twenty sits above $110$. The safety cap of $36$ drivers is also this level, so the statement is True.`,
      `**C.** → False

Throughput per driver is $T(s)/s$. With $T(s)=20\\sqrt{s}$ that intensity is

$$20 s^{-\\frac{1}{2}}$$

The leftover exponent is negative, so intensity falls as the crew grows. Extra drivers still add pallets, but fewer per driver, so the statement is False.`,
      `**D.** → False

Reaching $150$ pallets inverts $20\\sqrt{s}=150$:

$$\\sqrt{s}=7.5$$

$$s=56.25$$

which sits past the $36$-driver cap. The capped shift delivers only $120$ pallets per hour. Reaching $150$ lies outside the safety cap, so the statement is False.`,
      `**E.** → True

The leftover slope $T'(s)=10 s^{-\\frac{1}{2}}$ stays positive, so throughput rises with crew all the way to the cap. At $s=36$, $T=120$, and no larger legal crew exists. The driver cap is therefore also a cap on pallets moved per hour, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 70,
    solution_overview: `Forklift throughput follows $T(s)=A s^{0.5}$ pallets per hour for $s>0$ drivers on shift. A logged shift with $16$ drivers moved $80$ pallets per hour. Safety rules cap the shift at $36$ drivers.

The exponent $0.5$ is given, so one logged shift fixes $A$:

$$A\\cdot 16^{0.5}=80$$

The exponent is positive but below $1$, so more drivers always help, yet each extra driver helps less than the one before. A throughput target inverts the same square root.`,
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

That exponent sits below $-1$, so a price factor $k>1$ cuts subscribers by more than $k^{-1}$. Subscribers fall faster than the price rises, so the statement is True.`,
      `**B.** → True

From $r=-\\frac{3}{2}$ and $A\\cdot\\frac{1}{8}=250$, the coefficient is $A=2000$, so $R(p)=2000 p^{-\\frac{1}{2}}$. At $16$ euros:

$$R(16)=\\frac{2000}{4}=500$$

Five hundred sits under $600$, so the statement is True.`,
      `**C.** → True

Price times $p^{-\\frac{3}{2}}$ demand leaves leftover exponent $-\\frac{1}{2}$:

$$R(p)=A p^{-\\frac{1}{2}}$$

A monomial is a power function, so revenue is a power of price. Stopping at $q$ would have left exponent $-\\frac{3}{2}$, so the statement is True.`,
      `**D.** → False

To double revenue from $R(4)=1000$, the price factor $k$ satisfies $k^{-\\frac{1}{2}}=2$, so

$$k=\\frac{1}{4}$$

The service must cut that price to a quarter, not to a half. Halving would multiply revenue only by $\\sqrt{2}\\approx 1.41$, so the statement is False.`,
      `**E.** → False

At $9$ euros, with $R(p)=2000 p^{-\\frac{1}{2}}$,

$$R(9)=\\frac{2000}{3}\\approx 667$$

which sits above $600$, not under it. Nine contributes a square root of $3$. The till has fallen from the $4$-euro $1000$, but not as far as the claimed under-$600$ line, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `A streaming tier has paid subscribers $q(p)=A p^{r}$ thousand at price $p$ euros a month. Quadrupling any price multiplies the subscriber count by $\\frac{1}{8}$, and at $4$ euros the tier holds $250$ thousand subscribers. Monthly revenue is $R=pq$, also in thousands of euros.

The scale rule isolates $r$; the four-euro level then pins $A$:

$$4^{r}=\\frac{1}{8}$$

$$A\\cdot 4^{r}=250$$

Revenue adds one to the exponent.`,
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

A pure power $A n^{r}$ cannot carry a nonzero intercept, and the retainer is $400$ euros, so the statement is True.`,
      `**B.** → True

With $C(n)=400+30\\sqrt{n}$, nine hundred branches contribute a square root of $30$:

$$C(900)=400+900=1300$$

One thousand three hundred sits above $1200$. Dropping the retainer would have claimed $900$ and missed the floor, so the statement is True.`,
      `**C.** → True

Cost per branch is

$$\\frac{C(n)}{n}=\\frac{400}{n}+30 n^{-\\frac{1}{2}}$$

Both pieces decline as the network grows: the retainer is spread, and the leftover exponent on the variable term is negative. A larger network is cheaper per branch even while the total bill rises, so the statement is True.`,
      `**D.** → False

Quadrupling $n$ doubles the square-root term, from $30\\sqrt{n}$ to $60\\sqrt{n}$, but the $400$-euro retainer stays put. The whole bill is not doubled. Only a pure power would scale that cleanly, and the retainer stops this bill from being one, so the statement is False.`,
      `**E.** → False

At $36$ branches, $\\sqrt{36}=6$:

$$C(36)=400+180=580$$

The $100$-branch invoice is $700$, and $580<700$. Thirty-six branches still sit below that invoice, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 72,
    solution_overview: `A compliance-monitoring platform bills $C(n)=F+A n^{\\frac{1}{2}}$ euros a month for $n\\ge 1$ branches, with both constants unknown. $100$ branches cost $700$ euros, and $400$ branches cost $1000$ euros.

Two levels recover $F$ and $A$, because the square roots $10$ and $20$ are known:

$$F+10A=700$$

$$F+20A=1000$$

A nonzero retainer means $C$ is not a pure power of $n$.`,
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

which is zero at $q=40$. The second derivative $T''>0$, so the crossing is a minimum. Annual total cost is smallest where the two components meet, so the statement is True.`,
      `**B.** → True

Ordering $A/40=120$ and holding $40B=120$ recover $A=4800$ and $B=3$. A batch of $60$ then costs

$$O(60)=80,\\qquad H(60)=180$$

$$T(60)=260$$

Two hundred and sixty sits above $250$. Sixty is past the minimum, so the total has already ticked up from $240$, so the statement is True.`,
      `**C.** → False

From $\\frac{A}{40}=120$ and $40B=120$, one has $T(q)=\\frac{4800}{q}+3q$. Doubling an arbitrary batch gives $T(2q)=\\frac{2400}{q}+6q$, which equals $T(q)$ only for special pairs. Reciprocal pairs with product $1600$ do preserve $T$, but an arbitrary doubling is not that pairing:

$$T(80)=300\\neq T(40)=240$$

so the statement is False.`,
      `**D.** → True

With $T(q)=\\frac{4800}{q}+3q$ from the crossing $O=H=120$ at $q=40$, the batches $20$ and $80$ are the reciprocal pair around $40$ with product $1600$:

$$T(20)=300,\\qquad T(80)=300$$

Each move from $40$ raises the annual total by $60$ euros, so the two moves cost the same. That is the EOQ symmetry, so the statement is True.`,
      `**E.** → False

The crossing $\\frac{A}{40}=120$ forces $A=4800$. At $80$ units, ordering cost is

$$O(80)=\\frac{4800}{80}=60$$

which sits well below $200$. Holding is the large term on this side of the crossing. Mixing $O$ with $T(80)=300$ is how a "more than $200$" ordering claim appears, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 73,
    solution_overview: `A spare-parts depot reorders in batches of $q>0$ units. Annual ordering cost is $O(q)=A q^{-1}$ euros and annual holding cost is $H(q)=B q$ euros. At a batch of $40$ units the two components are equal, and each is $120$ euros. The annual total is $T=O+H$.

The common level recovers both coefficients:

$$\\frac{A}{40}=120$$

$$40B=120$$

For this pair of exponents the minimum of $T$ is the same crossing. Reciprocal batches with product $A/B$ preserve $T$.`,
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

Average product is then $12 L^{-\\frac{1}{4}}$. The leftover exponent $-\\frac{1}{4}$ is not the output exponent $\\frac{3}{4}$. Average product is still a power of hours, but a different power, so the statement is True.`,
      `**B.** → True

At $16$ hours the logged output is $96$ units, so average product is

$$\\frac{96}{16}=6$$

Six sits under $7$. That logged level does not need a second recovery of $A$, so the statement is True.`,
      `**C.** → False

To double output, $k^{\\frac{3}{4}}=2$ forces

$$k=2^{\\frac{4}{3}}\\approx 2.52$$

more than a doubling of hours. Doubling labour would multiply output only by $2^{\\frac{3}{4}}\\approx 1.68$. A three-quarters technology will not keep pace with the clock, so the statement is False.`,
      `**D.** → True

Average product falls from $6$ at $L=16$ to $4$ at $L=81$, because $324/81=4$. The leftover exponent $-\\frac{1}{4}$ is negative, so the average declines as labour hours rise. Falling average and $r<1$ are the same story, so the statement is True.`,
      `**E.** → False

At $81$ hours the average is $4$, which does not exceed $5$:

$$\\frac{324}{81}=4$$

The sixteen-hour average of $6$ is the one still above $5$; by eighty-one hours it has already fallen, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 74,
    solution_overview: `Output on a bottling line follows $Q(L)=A L^{r}$ units a shift for labour hours $L>0$. $16$ hours produce $96$ units, and $81$ hours produce $324$. Average product is output per labour hour, $Q(L)/L$.

The ratio isolates $r$; the sixteen-hour level then pins $A$:

$$\\frac{324}{96}=\\left(\\frac{81}{16}\\right)^{r}$$

$$A\\cdot 16^{r}=96$$

Dividing by $L$ subtracts one from the exponent.`,
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

No finite $n$ makes $\\frac{50}{\\sqrt{n}}=0$, so the handling floor is approached and never attained, so the statement is True.`,
      `**B.** → True

After $900$ cumulative units, $\\sqrt{900}=30$:

$$t(900)=8+\\frac{50}{30}=8+\\frac{5}{3}=\\frac{29}{3}\\approx 9.67$$

which sits under $10$. The floor is close, but the learning term is still a sliver, so the statement is True.`,
      `**C.** → True

The learning component scales as $n^{-\\frac{1}{2}}$, so quadrupling $n$ multiplies it by

$$4^{-\\frac{1}{2}}=\\frac{1}{2}$$

The floor is untouched by this scaling, but the claim is only about the learning term. Inverse-square-root learning halves on a fourfold volume, so the statement is True.`,
      `**D.** → False

Quadrupling volume halves the learning term, but the eight-minute floor stays put and dilutes the gain in the total. From $t(25)=18$ a halved learning term cuts the total only from $18$ to $13$, not to $9$. The intercept is why the learning term can halve while the whole unit time does not, so the statement is False.`,
      `**E.** → False

After $4$ cumulative units, $\\sqrt{4}=2$:

$$t(4)=8+\\frac{50}{2}=33$$

which sits above $30$. The power term has fallen from the first unit, but not far enough to pull the unit under thirty minutes, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 75,
    solution_overview: `Labour time of the unit built after $n$ cumulative units follows $t(n)=F+A n^{-\\frac{1}{2}}$ minutes for $n\\ge 1$. After $25$ units the next unit takes $18$ minutes, and after $100$ units it takes $13$.

Two levels recover $F$ and $A$:

$$F+\\frac{A}{5}=18$$

$$F+\\frac{A}{10}=13$$

Scaling rules apply to the learning term alone. The floor $F$ is a horizontal asymptote.`,
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

not by $2$. Revenue rises more slowly than feed. Proportionality would have required lockstep, so the statement is False.`,
      `**B.** → True

At $64$ tonnes, sixty-four is $4^{3}$, so the two-thirds power is $16$:

$$R(64)=90\\cdot 16=1440$$

$$C(64)=1920$$

Cost already exceeds harvest revenue. Past the break-even $x=27$, the linear cost is ahead, so the statement is True.`,
      `**C.** → False

The leftover slope is

$$R'(x)=60 x^{-\\frac{1}{3}}$$

After $8$ tonnes that is $30$. After $27$ tonnes it is $20$. An extra tonne adds less revenue later, not more. A two-thirds harvest flattens, so the statement is False.`,
      `**D.** → True

The ratio of revenue to cost is

$$\\frac{R(x)}{C(x)}=\\frac{3}{x^{\\frac{1}{3}}}$$

They meet at $x=27$. Past that planting the cube root keeps growing, so the ratio stays below $1$ and keeps falling. Extra feed widens the gap; it cannot restore a surplus, so the statement is True.`,
      `**E.** → True

At $8$ tonnes, logged revenue $360$ minus cost $240$ is profit

$$P(8)=120$$

One hundred and twenty sits above $100$. Using revenue in place of profit would have claimed $360$ and overshot the letter, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 76,
    solution_overview: `A fish farm turns feed into harvest revenue $R(x)=A x^{\\frac{2}{3}}$ thousand euros for $x>0$ tonnes of feed, while feed and handling cost $C(x)=30x$ thousand euros. At $8$ tonnes of feed, harvest revenue was $360$ thousand euros.

The exponent is given, so the eight-tonne level pins $A$:

$$A\\cdot 8^{\\frac{2}{3}}=360$$

Cost is linear, so a curve with exponent $\\frac{2}{3}$ is overtaken once. Net is $R-C$, and the ratio $R/C$ falls as $x$ grows.`,
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

not by $4$. A four-fold factor would belong to exponent $1$. The three-halves exponent outruns the index, so the statement is False.`,
      `**B.** → True

The shape factors are $16^{\\frac{3}{2}}=64$ and $4^{\\frac{3}{2}}=8$, so $56A=336$ and $A=6$. At index $9$:

$$9^{\\frac{3}{2}}=27$$

$$f(9)=6\\cdot 27=162$$

One hundred and sixty-two sits above $150$, so the statement is True.`,
      `**C.** → True

The exponent $\\frac{3}{2}>1$, and the same $4^{\\frac{3}{2}}=8$ from A is already larger than $4$. Cost grows faster than the pallet-volume index. A proportional handler would have carried exponent $1$, so the statement is True.`,
      `**D.** → False

The leftover slope is

$$f'(x)=9\\sqrt{x}$$

which is $18$ at index $4$ and $27$ at index $9$. Because $27>18$, later index steps of the same width add more euros than earlier ones. Equal gaps in the index do not produce equal gaps in cost when $r>1$, so the statement is False.`,
      `**E.** → False

Raising the index from $9$ to $25$ adds

$$f(25)-f(9)=750-162=588$$

which is not under $500$. Twenty-five contributes $5^{3}=125$, times $6$ is $750$. Five hundred and eighty-eight euros is not under five hundred, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 77,
    solution_overview: `Daily handling cost follows $f(x)=A x^{\\frac{3}{2}}$ euros for pallet-volume index $x>0$. The individual daily figures were lost; the only surviving record states that the cost at index $16$ exceeds the cost at index $4$ by $336$ euros.

No single level is known, so $A$ comes out of a difference:

$$A\\left(16^{\\frac{3}{2}}-4^{\\frac{3}{2}}\\right)=336$$

A scale question uses $\\frac{f(kx)}{f(x)}=k^{\\frac{3}{2}}$.`,
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

The new exponent is the reciprocal of $\\frac{3}{2}$. Scale needed for a given load is still a monomial in $W$, so the statement is True.`,
      `**B.** → True

The recorded load gives $9^{\\frac{3}{2}}=27$, so $27A=135$ and $A=5$. The $320$ kg cap then inverts as

$$5 s^{\\frac{3}{2}}=320$$

$$s^{\\frac{3}{2}}=64$$

$$s=16$$

Sixteen sits below $20$. Every larger index breaches the permit, so the statement is True.`,
      `**C.** → False

Doubling the ceiling multiplies admissible scale by

$$2^{\\frac{2}{3}}\\approx 1.59$$

not by $2$. The inverse exponent $\\frac{2}{3}<1$, so permitted scale grows more slowly than the permitted load. Linear thinking on the inverse is the mismatch, so the statement is False.`,
      `**D.** → False

If $A$ doubled, the admissible scale would satisfy $10 s^{\\frac{3}{2}}=320$, so

$$s=32^{\\frac{2}{3}}\\approx 10.08$$

not $8$. The scale factor is $2^{-\\frac{2}{3}}\\approx 0.63$, not $\\frac{1}{2}$. Halving $s$ would have needed inverse exponent $-1$ on $A$, so the statement is False.`,
      `**E.** → True

At scale index $4$, with $A=5$, four contributes $2^{3}=8$:

$$W(4)=5\\cdot 8=40$$

Forty sits under $50$. The load has grown with scale, but at this small index it is still below the named line, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 78,
    solution_overview: `A dye-house discharges wastewater load $W(s)=A s^{\\frac{3}{2}}$ kilograms a day for production scale $s>0$. At scale $9$ the daily load is $135$ kilograms. The site permit caps the daily load at $320$ kilograms.

The recorded level pins $A$:

$$A\\cdot 9^{\\frac{3}{2}}=135$$

A cap on load becomes a cap on scale by inversion, with reciprocal exponent $\\frac{2}{3}$.`,
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

a cut of $36\\%$, not $50\\%$. The two methods disagree. Linearizing a power at a $25\\%$ step is too coarse, so the statement is False.`,
      `**B.** → True

After a $25\\%$ rise the exact demand is

$$4000\\cdot\\frac{16}{25}=2560$$

which sits above $2500$. The $2500$ cutoff is a near miss on that exact inverse-square step, so the statement is True.`,
      `**C.** → True

The shortcut claims a $50\\%$ loss; the exact cut is $36\\%$. A predicted $50\\%$ against a true $36\\%$ overstates the loss. The two methods disagree on the size of the cut, so the statement is True.`,
      `**D.** → False

A $25\\%$ rise cuts demand by $36\\%$. A $25\\%$ cut raises it by

$$\\left(\\frac{3}{4}\\right)^{-2}-1=\\frac{16}{9}-1=\\frac{7}{9}\\approx 77.8\\%$$

Inverse-square percentage changes are not symmetric. The two percentages are not the same, so the statement is False.`,
      `**E.** → True

From $A/9=4000$, the coefficient is $A=36000$. At a tariff of $2$ euros:

$$q(2)=\\frac{36000}{4}=9000$$

Nine thousand sits above $8000$. Cutting the tariff from $3$ to $2$ is not a $25\\%$ move; this letter is a separate level, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 79,
    solution_overview: `Hourly parking demand follows $q(p)=A p^{-2}$ occupied spaces for tariff $p>0$ euros. The file records $4000$ occupied spaces at a tariff of $3$ euros. Demand of this form has constant elasticity $-2$, so the usual shortcut predicts a percentage change in demand equal to $-2$ times the percentage change in tariff.

The observed pair pins the coefficient:

$$A\\cdot 3^{-2}=4000$$

For a tariff factor $k$, the shortcut returns $-2(k-1)$ and the exact rule returns $k^{-2}-1$.`,
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

which exceeds $2$. Mass grows faster than height. A proportional casting would have carried exponent $1$. Geometric similarity is a volume scaling, so the leftover exponent is $3$, so the statement is True.`,
      `**B.** → True

The weighed bell gives $A\\cdot\\frac{1}{8}=30$, so $A=240$ and $M(h)=240 h^{3}$. Height $1.5$ is three times the $0.5$ m pattern, so mass multiplies by $27$:

$$M(1.5)=30\\cdot 27=810$$

which sits above $700$. Linear scaling would have claimed $90$ kg, so the statement is True.`,
      `**C.** → False

Doubling height multiplies mass by $8$, not by $2$. The half-metre bell at $30$ kg would become $240$ kg at one metre, not $60$ kg. The cube of a doubling is $8$, not $2$, so the statement is False.`,
      `**D.** → False

Mass per metre is $M(h)/h=240 h^{2}$, which rises with height. At $0.5$ m the quotient is $60$; at $1$ m it is $240$. A constant intensity would have needed exponent $1$, so the statement is False.`,
      `**E.** → True

At a unit height the cube is $1$, so the mass equals the coefficient:

$$M(1)=240$$

Two hundred and forty sits above $200$. That $A$ is the one-metre bell, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 80,
    solution_overview: `Geometrically similar bronze bells have mass $M(h)=A h^{3}$ kilograms for height $h>0$ metres. The pattern book omits the coefficient; it records only that a finished bell of height $0.5$ metres was weighed at $30$ kilograms.

Geometric similarity fixes the exponent at $3$; one observed pair pins $A$:

$$A(0.5)^{3}=30$$

A height multiplier $k$ scales mass by $k^{3}$.`,
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

The leftover exponent $3>1$, so absorbed power grows faster than speed. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**B.** → False

With power exponent $3$, doubling speed multiplies absorbed power by

$$2^{3}=8$$

not by $2$. Drag itself only quadrupled, because its exponent was $2$; multiplying by the doubled speed doubles that factor again, from $4$ to $8$. Power rises eightfold, not twofold, so the statement is False.`,
      `**C.** → True

From $r=2$ and $A(12^{2}-8^{2})=40$, the difference of squares is $80A=40$, so $A=\\frac{1}{2}$ and $P(v)=\\frac{1}{2}v^{3}$. The leftover slope is

$$P'(v)=\\frac{3}{2}v^{2}$$

At $8$ m/s that is $96$. At $12$ m/s it is $216$. Because $216>96$, the extra metre costs more watts at $12$ m/s than at $8$ m/s, so the statement is True.`,
      `**D.** → True

The doubling record $2^{r}=4$ forces $r=2$, and $A(144-64)=40$ forces $A=\\frac{1}{2}$, so $P(v)=\\frac{1}{2}v^{3}$. At $8$ m/s:

$$P(8)=\\frac{1}{2}\\cdot 512=256$$

Two hundred and fifty-six sits under $300$. Using drag $32$ N times speed $8$ is the same check, so the statement is True.`,
      `**E.** → False

At $12$ m/s the cubic $P(v)=\\frac{1}{2}v^{3}$ gives

$$P(12)=\\frac{1}{2}\\cdot 1728=864$$

which sits past $800$, not under it. The faster run has already broken the eight-hundred-watt line, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 81,
    solution_overview: `Aerodynamic drag on a track cyclist follows $F(v)=A v^{r}$ newtons for speed $v>0$ metres per second. Doubling any speed multiplies drag by four, and raising speed from $8$ to $12$ m/s increased drag by exactly $40$ N. The power needed to overcome that drag is $P=Fv$ watts.

The doubling record is a ratio, so the coefficient cancels and the exponent is isolated first:

$$2^{r}=4$$

The logged increase is a difference of two levels, which then pins $A$. Multiplying by speed raises the exponent by one.`,
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

The doubling record is $2^{r}=\\frac{1}{8}$, so $r=-3$. Inverse proportionality would mean exponent $-1$, which would cut the signal in half when depth doubles. The recorded factor is $2^{-3}=\\frac{1}{8}$. The locator falls faster than an inverse-depth law, so the statement is False.`,
      `**B.** → False

Doubling depth multiplies the signal by

$$2^{-3}=\\frac{1}{8}$$

not by $\\frac{1}{2}$. The recorded factor is one eighth, four times steeper than a halving. Inverse-linear thinking is the mismatch, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $S=A x^{-3}$,

$$x=A^{\\frac{1}{3}} S^{-\\frac{1}{3}}$$

Isolating depth raises both sides to the reciprocal of $-3$. Depth is a monomial in the reading. Falling signal does not introduce a logarithm, so the statement is True.`,
      `**D.** → True

From $r=-3$ and $A\\cdot 2^{-3}=50$, the coefficient is $A=400$. Four metres is one doubling of the calibration depth of $2$ m, so

$$S(4)=50\\cdot\\frac{1}{8}=6.25$$

which sits under $7$. Inverse-cube decay is already under seven millivolts, so the statement is True.`,
      `**E.** → False

A reading of $3.2$ mV inverts $400 x^{-3}=3.2$:

$$x^{3}=\\frac{400}{3.2}=125$$

$$x=5$$

Five metres is not more than $8$ m. A second doubling from $4$ m would have been $8$ m and a much smaller reading, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 82,
    solution_overview: `The signal a locator receives from a buried conductor follows $S(x)=A x^{r}$ millivolts for burial depth $x>0$ metres. Doubling any burial depth cuts the received signal to $\\frac{1}{8}$, and a calibration run over a conductor buried at $2$ metres read $50$ millivolts.

The doubling record isolates the exponent because the coefficient cancels:

$$2^{r}=\\frac{1}{8}$$

One observed pair then fixes the coefficient. Because the exponent is negative, that recovery multiplies by a power of the depth.`,
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

The demand gap uses $81^{\\frac{3}{4}}=27$ and $16^{\\frac{3}{4}}=8$, so $19A=95$ and $A=5$. Demand is then $D(m)=5m^{\\frac{3}{4}}$. Three quarters sits below one, so each extra gram adds less oxygen demand than the gram before it. Oxygen demand lags body mass, so the statement is True.`,
      `**B.** → False

Demand per square centimetre is $D/G$. With $A=5$ and $B=3$ from $64^{\\frac{2}{3}}=16$, that intensity is

$$\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{1}{12}}$$

The leftover exponent $\\frac{1}{12}$ is positive, so intensity rises with body mass. It does not fall. Demand outruns gill area because $\\frac{3}{4}>\\frac{2}{3}$, so the statement is False.`,
      `**C.** → False

Because $\\frac{2}{3}<1$, two small fish out-area one fish of twice the mass. With $G(m)=3m^{\\frac{2}{3}}$,

$$2G(16)=2\\cdot 3\\cdot 16^{\\frac{2}{3}}=24\\cdot 2^{\\frac{2}{3}}$$

$$G(32)=3\\cdot 32^{\\frac{2}{3}}=24\\cdot 2^{\\frac{1}{3}}$$

and $2^{\\frac{2}{3}}>2^{\\frac{1}{3}}$. Merging the two $16$ g fish into one $32$ g fish loses gill area, so the statement is False.`,
      `**D.** → True

With $A=5$, a $256$ g fish is $4^{4}$, so the three-quarters power is $4^{3}=64$:

$$D(256)=5\\cdot 64=320$$

Three hundred and twenty sits above $300$, so the statement is True.`,
      `**E.** → False

A tank total is a sum of individual demands, never one application of $D$ to the pooled mass. Sixteen fish of $16$ g demand

$$16\\cdot D(16)=16\\cdot 40=640$$

which sits above $600$. Using $D(256)$ in place of $16D(16)$ is the pooling mix-up, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 83,
    solution_overview: `Oxygen demand follows $D(m)=A m^{\\frac{3}{4}}$ millilitres per hour and gill surface area follows $G(m)=B m^{\\frac{2}{3}}$ square centimetres, for body mass $m>0$ grams. An $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish, and a $64$ g fish carries $48$ square centimetres of gill. A tank's total demand is the sum of its fish's individual demands.

Both exponents are supplied, so each law needs exactly one record: a difference for demand and a level for gill area.

$$A\\left(81^{\\frac{3}{4}}-16^{\\frac{3}{4}}\\right)=95$$

$$B\\cdot 64^{\\frac{2}{3}}=48$$

Intensity subtracts the exponents. A tank total is a sum, never $D$ applied to a pooled mass.`,
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

The doubling factor $16=2^{4}$ forces $k=4$. Four sits well above one, so each extra millimetre of bore adds more delivery than the millimetre before it. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**B.** → False

Doubling the radius would double the flow only if the exponent were $1$. With exponent $4$ the factor is

$$2^{4}=16$$

which is the recorded doubling factor itself. Flow rises sixteenfold, not twofold, so the statement is False.`,
      `**C.** → False

From $k=4$ and $A\\cdot 16=48$, the coefficient is $A=3$. The mean velocity index is then

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}$$

The leftover exponent $2$ is not zero, so the index grows with the radius. It is not the same in every tube, so the statement is False.`,
      `**D.** → True

With $Q(r)=3r^{4}$, a tube of radius $3$ mm delivers

$$Q(3)=3\\cdot 81=243$$

which sits above $200$. Three to the fourth is $81$, so the statement is True.`,
      `**E.** → False

At radius $1$ mm every power of $1$ is $1$, so

$$Q(1)=3$$

which sits under $10$. The coefficient itself is the one-millimetre delivery. The fourth-power law drops that fast when the bore shrinks below the $2$ mm bench, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 84,
    solution_overview: `Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{k}$ litres per hour for internal tube radius $r>0$ millimetres. Doubling any tube radius multiplies flow by $16$, and a bench test on a tube of radius $2$ mm delivered $48$ litres per hour. The mean velocity index is $\\frac{Q}{\\pi r^{2}}$.

The doubling record isolates the exponent:

$$2^{k}=16$$

One bench test then fixes the coefficient. Dividing flow by the cross-section produces a second power whose exponent is $k-2$.`,
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

not by $\\frac{1}{2}$. A half would have been inverse-linear; this survey's quadrupling record is inverse-square, so the statement is False.`,
      `**B.** → True

From $r=-2$ and $A\\cdot 3^{-2}=80$, the coefficient is $A=720$. The leftover slope is

$$H'(d)=-1440 d^{-3}$$

Its size is $\\frac{160}{3}$ at $3$ m and $\\frac{20}{3}$ at $6$ m. An extra metre cuts more dose at three metres than at six. Inverse-square decay is front-loaded, so the statement is True.`,
      `**C.** → True

A nonzero power inverts to another power. From $H=A d^{-2}$,

$$d=\\sqrt{A}\\, H^{-\\frac{1}{2}}$$

The new exponent is the reciprocal of $-2$. Distance needed for a given dose rate is still a monomial in $H$, so the statement is True.`,
      `**D.** → True

Six metres is a doubling of the $3$ m survey. Inverse square quarters the $80$ reading:

$$H(6)=\\frac{80}{4}=20$$

which sits under $25$. Inverse square on a doubled range is a quarter, so the statement is True.`,
      `**E.** → False

From $H(3)=80$ down to $H=5$ is a factor $\\frac{1}{16}$, hence a fourfold distance:

$$d=3\\cdot 4=12$$

Twelve metres is not farther than $15$. The barrier sits at twelve metres, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 85,
    solution_overview: `Dose rate near an industrial radiography source follows $H(d)=A d^{r}$ microsieverts per hour for distance $d>0$ metres. Quadrupling any distance cuts the dose rate to $\\frac{1}{16}$, and a survey meter $3$ metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour.

The quadrupling record isolates the exponent:

$$4^{r}=\\frac{1}{16}$$

One survey reading then pins the coefficient. The barrier question inverts the same law.`,
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

A monomial in $t$ remains a monomial. Stopping at radius would have left exponent $\\frac{2}{3}$, so the statement is True.`,
      `**B.** → True

The composed exponent $\\frac{4}{3}>1$, so the stained area outruns elapsed time. A proportional disc would have carried exponent $1$. Area can grow faster than time even while radius grows more slowly than time, so the statement is True.`,
      `**C.** → False

Doubling time multiplies area by

$$2^{\\frac{4}{3}}\\approx 2.52$$

not by $2$. Exponent $1$ would have returned the factor $2$. Linear thinking understates the disc, so the statement is False.`,
      `**D.** → True

The shape factors are $8^{\\frac{2}{3}}=4$ and $1^{\\frac{2}{3}}=1$, so $3A=45$ and $A=15$. At hour $8$:

$$r(8)=15\\cdot 4=60$$

which sits above $50$. That is also $r(1)+45=15+45$, the first-hour radius plus the logged gap, so the statement is True.`,
      `**E.** → False

A radius of $240$ metres inverts $15 t^{\\frac{2}{3}}=240$:

$$t^{\\frac{2}{3}}=16$$

$$t=64$$

Sixty-four hours is not under $50$. The plume takes sixty-four hours to reach two hundred and forty metres, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 86,
    solution_overview: `A tracer dye spreads as a disc whose radius follows $r(t)=A t^{\\frac{2}{3}}$ metres for $t>0$ hours since release. The survey records only that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\\pi r^{2}$.

The survey gives a difference rather than a level, so the coefficient comes from subtracting two shape factors:

$$A\\left(8^{\\frac{2}{3}}-1^{\\frac{2}{3}}\\right)=45$$

Squaring the radius law doubles its exponent and squares the coefficient.`,
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

The new exponent is the reciprocal of $\\frac{3}{2}$. Head needed for a given discharge is still a monomial in $Q$. A change of units does not change that, so the statement is True.`,
      `**B.** → True

The exponent is still $\\frac{3}{2}$ after rewriting in centimetres. A change of units cannot move the exponent below one. Discharge still outruns head. Only the coefficient absorbs the $100^{\\frac{3}{2}}$ rescaling, so the statement is True.`,
      `**C.** → False

Doubling head multiplies discharge by

$$2^{\\frac{3}{2}}\\approx 2.83$$

not by $2$. Changing the input unit to centimetres rescales only the coefficient; it does not flatten the exponent to $1$. Discharge would double with head only for a linear weir, so the statement is False.`,
      `**D.** → True

The gauging gives $0.25^{\\frac{3}{2}}=0.125$, so $A=16$ and $Q=16 h^{\\frac{3}{2}}$. At a unit head the power is $1$:

$$Q(1)=16$$

which sits under $20$. The gauging at $0.25$ m was only $2$ m$^{3}$/s; one metre still discharges $16$, so the statement is True.`,
      `**E.** → False

At $4$ metres, $4^{\\frac{3}{2}}=8$:

$$Q(4)=16\\cdot 8=128$$

which is not under $100$. Four metres is sixteen times the $0.25$ m gauging in head, hence $16^{\\frac{3}{2}}=64$ times the gauging of $2$, which is $128$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 87,
    solution_overview: `Discharge over a measuring weir follows $Q(h)=A h^{\\frac{3}{2}}$ cubic metres per second for head $h>0$ metres. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second. A field team wants the same rating curve rewritten with the head in centimetres.

The exponent belongs to the weir, so one gauging fixes the coefficient:

$$A(0.25)^{\\frac{3}{2}}=2$$

A change of input unit replaces the input by a constant multiple of itself. A power function pushes that constant through its exponent, so the exponent never moves and only the coefficient does.`,
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

A $300\\%$ rise is the multiplier $4=2^{2}$, so $r=2$. Two sits above one, so each extra tonne adds more litres than the tonne before it. Fuel use grows faster than batch mass, so the statement is True.`,
      `**B.** → False

Doubling the batch multiplies fuel by $4$, not by $2$. A $300\\%$ rise is a multiplier of $4$, not of $2$. Fuel use is quadrupled. Linear thinking reads "$300\\%$ more" as if it were a doubling plus a bit, rather than $2^{r}$, so the statement is False.`,
      `**C.** → False

With $r=2$ fuel per tonne is $A x$, a positive leftover power, so litres per tonne climb in proportion to batch mass. The leftover exponent $r-1=1$ is not negative. The per-tonne figure rises, it does not fall, so the statement is False.`,
      `**D.** → True

From $r=2$ and $A(36-4)=96$, the coefficient is $A=3$, so $F(x)=3x^{2}$. A $10$-tonne batch uses

$$F(10)=3\\cdot 100=300$$

which sits above $250$. From the $2$ t batch, a fivefold mass is a twenty-fivefold fuel bill: $12\\cdot 25=300$, so the statement is True.`,
      `**E.** → False

A $6$-tonne batch uses

$$F(6)=3\\cdot 36=108$$

which is not under $100$. That $108$ is also $12+96$, the $2$ t fuel plus the logged gap. The six-tonne batch does not still use under one hundred litres, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 88,
    solution_overview: `Fuel use in a grain dryer follows $F(x)=A x^{r}$ litres per batch for batch mass $x>0$ tonnes. Doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres.

Two unknowns need two records. The first is a ratio, which is blind to the coefficient and therefore isolates the exponent; the second is a difference of levels, which pins the coefficient once the exponent is known. A $300\\%$ rise is a multiplier of $4$:

$$2^{r}=4$$

$$A\\left(6^{r}-2^{r}\\right)=96$$`,
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

The composition is a monomial in $t$. Stopping after $m(t)$ would have left exponent $\\frac{1}{2}$, so the statement is True.`,
      `**B.** → False

The leftover exponent is $2$, not $1$, so the index grows faster than the throttle, not in proportion to it. Doubling throttle multiplies the index by $4$. Proportionality would have needed the two stages to cancel to exponent $1$, so the statement is False.`,
      `**C.** → True

From $3A=6$, the coefficient is $A=2$, so $m(t)=2 t^{\\frac{1}{2}}$. Mass flow per unit of throttle is

$$\\frac{m(t)}{t}=2 t^{-\\frac{1}{2}}$$

which falls from $\\frac{2}{3}$ at $t=9$ to $\\frac{2}{5}$ at $t=25$. The leftover exponent is negative, so the statement is True.`,
      `**D.** → True

At throttle $25$, $\\sqrt{25}=5$:

$$m(25)=2\\cdot 5=10$$

which sits above $8$. Linear scaling from $m(9)=6$ would have claimed about $16.7$ and overshot; the square root is slower, so the statement is True.`,
      `**E.** → False

Composing first gives $P\\circ m=t^{2}$, because $\\frac{2^{4}}{16}=1$. An index of $81$ is then

$$t^{2}=81$$

$$t=9$$

not a setting above $20$. Nine is the calibration throttle itself: $m(9)=6$ and $P(6)=81$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 89,
    solution_overview: `A kiln's flue-gas mass flow follows $m(t)=A t^{\\frac{1}{2}}$ tonnes per hour for throttle setting $t>0$, and the particulate load index is $P(m)=\\frac{m^{4}}{16}$. A calibration at $t=9$ recorded $m=6$.

The square-root shape is supplied, so one recorded pair fixes the coefficient:

$$A\\cdot 9^{\\frac{1}{2}}=6$$

Composition feeds the intermediate output into the second rule, and raising a power to a power multiplies the two exponents.`,
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

A square-root versus a line cannot meet twice on $d>0$. They meet only once, and the wait there is $80$ minutes, well past the cap, so the statement is False.`,
      `**B.** → True

Past $d=400$ the ratio $\\frac{Q}{L}=\\frac{1}{20}\\sqrt{d}$ exceeds $1$ and keeps climbing, so App Q stays slower. Once App L quotes a shorter wait, App Q never catches up. A second crossing would need the leftover square root to change sign, so the statement is True.`,
      `**C.** → True

App L's wait per kilometre is $L(d)/d=4 d^{-\\frac{1}{2}}$, which falls from $0.8$ at $d=25$ to $0.4$ at $d=100$. The leftover exponent is negative. Longer trips still take more minutes in total, but fewer minutes per kilometre on the square-root app, so the statement is True.`,
      `**D.** → False

App L's $20$-minute cap binds at $4\\sqrt{d}=20$, so $d=25$. Thirty kilometres sits past $25$, so $L(30)>20$. Under the cap, App L cannot serve trips longer than twenty-five kilometres. Mixing L's cap with Q's cap at $d=100$ is the mix-up, so the statement is False.`,
      `**E.** → True

At the meeting $d=400$ both apps quote

$$L(400)=4\\cdot 20=80$$

$$Q(400)=\\frac{400}{5}=80$$

Eighty minutes sits above $70$. Both already quote eighty minutes, more than seventy, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 90,
    solution_overview: `Two municipal shuttle apps quote wait time for a trip of distance $d>0$ kilometres. App L follows $L(d)=a d^{\\frac{1}{2}}$ minutes and App Q follows $Q(d)=k d$ minutes. A logged $25$ km trip on App L quoted $20$ minutes, and a logged $100$ km trip on App Q quoted $20$ minutes. A service-level agreement caps wait at $20$ minutes.

Each app is a power of distance with a hidden coefficient, so each log pins one coefficient:

$$a\\cdot 25^{\\frac{1}{2}}=20$$

$$k\\cdot 100=20$$

Equal waits set the two recovered laws equal. The cap inverts each law separately.`,
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

One half sits below one, so each extra unit of deficit adds less evaporation than the unit before it. The third reading $E(9)=60$ sits on the same square-root law, $20\\cdot 3=60$, which is a consistency check, so the statement is True.`,
      `**B.** → False

Doubling the deficit would double evaporation only if $r=1$. The scale factor is

$$2^{\\frac{1}{2}}\\approx 1.41$$

not $2$. Evaporation rises, but not in lockstep with humidity. A square-root humidity law will not keep evaporation in step with the deficit, so the statement is False.`,
      `**C.** → True

From $r=\\frac{1}{2}$ and $A=20$, doubling $E(4)=40$ means $20\\sqrt{h}=80$, so

$$\\sqrt{h}=4$$

$$h=16$$

Sixteen is four times four, not twice four. To double a square-root output you quadruple the input, so the statement is True.`,
      `**D.** → False

The leftover slope of $E(h)=20\\sqrt{h}$ is

$$E'(h)=10 h^{-\\frac{1}{2}}$$

After a deficit of one that is $10$. After a deficit of four it is $5$. An extra unit adds less after four, not more. A square-root evaporative law flattens, so the statement is False.`,
      `**E.** → True

At deficit $25$, $\\sqrt{25}=5$:

$$E(25)=20\\cdot 5=100$$

One hundred sits above $90$. The third logged point at deficit $9$ is $60$; this letter is a further perfect square on the same curve, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 91,
    solution_overview: `Wetland evaporation follows $E(h)=A h^{r}$ millimetres per day against humidity deficit $h>0$. Deficits of $1$ and $4$ recorded $20$ and $40$ millimetres per day, and a third reading at deficit $9$ recorded $60$.

Two unknowns need the first two readings. Their ratio cancels $A$ and isolates $r$; the unit deficit then pins $A$:

$$\\frac{40}{20}=4^{r}$$

$$A\\cdot 1^{r}=20$$

The third reading is a test of the fitted curve, not an input to it.`,
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

A leftover second exponent keeps the net from being a power function of the planting. Upkeep being linear is exactly why those two powers cannot be absorbed into one monomial, so the statement is True.`,
      `**B.** → True

At nine thousand trees, benefit $12\\cdot 3=36$ minus upkeep $18$ is net

$$N(9)=18$$

Eighteen sits above $15$. Using benefit in place of net would have claimed $36$ and overshot, so the statement is True.`,
      `**C.** → False

The schedules meet when $12\\sqrt{n}=2n$, so $\\sqrt{n}=6$ and $n=36$. Past that planting the ratio of benefit to upkeep keeps falling, because $\\sqrt{n}$ cannot keep pace with $n$. Planting more trees after upkeep overtakes cooling only deepens the loss. The net stays negative, so the statement is False.`,
      `**D.** → True

The leftover slope of the net is

$$N'(n)=6 n^{-\\frac{1}{2}}-2$$

At four thousand trees that is $1$. At nine thousand trees it is $0$. An extra thousand trees still adds at four thousand and adds nothing at nine thousand. Nine thousand is the peak, not a point where later trees help more, so the statement is True.`,
      `**E.** → False

At four thousand trees, benefit $24$ minus upkeep $8$ is net

$$N(4)=16$$

which is not more than $20$. The claimed $20$ overshoots the net, and $24$ is cooling before upkeep. Mixing $B$ with $N$ is the mix-up, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 92,
    solution_overview: `Annual cooling benefit follows $B(n)=A n^{\\frac{1}{2}}$ thousand euros and annual upkeep follows $C(n)=k n$ thousand euros, for $n>0$ thousand trees planted. Raising the planting from $4$ thousand trees to $9$ thousand increased cooling benefit by $12$ thousand euros. At $9$ thousand trees, upkeep was $18$ thousand euros. Net benefit is $N(n)=B(n)-C(n)$.

The benefit difference isolates $A$. The upkeep level isolates $k$:

$$A\\bigl(9^{\\frac{1}{2}}-4^{\\frac{1}{2}}\\bigr)=12$$

$$9k=18$$

Net is a square root minus a line, so it is not a single power of $n$.`,
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

The new exponent is the reciprocal of $-2$. Price needed for a given weekly demand is still a monomial in $q$. Falling demand does not introduce a logarithm, so the statement is True.`,
      `**B.** → False

Doubling the five-euro price would halve demand only if the exponent were $-1$. With $-2$ the factor is

$$2^{-2}=\\frac{1}{4}$$

so $80\\cdot\\frac{1}{4}=20$ packs, not $40$. Demand falls to one quarter, not to one half. Inverse-linear thinking is the mismatch, so the statement is False.`,
      `**C.** → True

From $A/25=80$, the coefficient is $A=2000$. Ten euros is a doubling of the logged $5$, so inverse-square demand is a quarter of $80$:

$$q(10)=20$$

Twenty packs already sit under twenty-five, so the statement is True.`,
      `**D.** → True

Revenue is $R(p)=\\frac{2000}{p}$, a negative leftover power, so the till shrinks as the price rises. At $5$ euros the take is $400$; at $10$ euros it is $200$. Inverse-square demand is elastic enough that a price rise cuts $pq$, so the statement is True.`,
      `**E.** → False

A target of $125$ packs inverts $2000/p^{2}=125$:

$$p^{2}=16$$

$$p=4$$

which sits below $5$, not above it. More packs require a lower price along this curve. The unique positive price that moves $125$ packs is four euros, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 93,
    solution_overview: `Weekly pamphlet demand follows $q(p)=A p^{-2}$ packs per week for price $p>0$ euros. At a price of $5$ euros the kiosk sold $80$ packs.

The exponent is given, so one priced observation fixes $A$:

$$A\\cdot 5^{-2}=80$$

Inversion uses the reciprocal exponent. Revenue is $R=pq$, which raises the exponent by one.`,
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

Demand's exponent $-\\frac{3}{2}$ times the indexation exponent $\\frac{2}{3}$ is $-1$. The composition is a monomial $C s^{-1}$, a power of $s$. Stopping after $p(s)$ would have left exponent $\\frac{2}{3}$, so the statement is True.`,
      `**B.** → False

Tripling the subsidy index multiplies composed demand by

$$3^{-1}=\\frac{1}{3}$$

not by $3$. Demand falls to a third rather than tripling. The indexation $p\\propto s^{\\frac{2}{3}}$ raises the pass price as $s$ grows, so the composed map is inverse, not increasing, so the statement is False.`,
      `**C.** → True

Subsidy index $8$ was calibrated to the $16$-euro, $50$-pass reading, so composed demand at $s=8$ is the pilot itself:

$$q\\bigl(p(8)\\bigr)=50$$

Fifty passes already sit above forty, so the statement is True.`,
      `**D.** → False

From $A\\cdot 16^{-\\frac{3}{2}}=50$ and $B\\cdot 4=16$, the composition collapses to $q(p(s))=\\frac{400}{s}$. For every $k>1$ the factor $k^{-1}<1$. Raising the subsidy index lowers composed demand. "Subsidy up, sales up" ignores that indexation, so the statement is False.`,
      `**E.** → True

At subsidy index $27$, composed demand is

$$\\frac{400}{27}\\approx 14.81$$

which sits under $16$. From the pilot, $\\frac{27}{8}$ times the index multiplies demand by $\\frac{8}{27}$: $50\\cdot\\frac{8}{27}=\\frac{400}{27}$. Fourteen and a bit stays under sixteen, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 94,
    solution_overview: `Weekly bike-share day-pass sales follow $q(p)=A p^{-\\frac{3}{2}}$ when the pass price is $p>0$ euros. A pilot at $16$ euros sold $50$ passes. Policy indexes the pass by $p(s)=B s^{\\frac{2}{3}}$ for a positive subsidy index $s$, and at subsidy index $8$ the posted price is $16$ euros.

The pilot fixes $A$. The indexed price at $s=8$ fixes $B$:

$$A\\cdot 16^{-\\frac{3}{2}}=50$$

$$B\\cdot 8^{\\frac{2}{3}}=16$$

Composition multiplies the exponents: $-\\frac{3}{2}\\cdot\\frac{2}{3}=-1$.`,
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

All on line 2 costs $225$. Spreading the load still beats concentrating, so the statement is False.`,
      `**B.** → True

All thirty thousand loaves on line 2 score

$$C_{2}(30)=\\frac{1}{4}\\cdot 900=225$$

which sits above $200$. Plant 2 is cheaper per squared unit, but thirty squared is still $900$. The corner already clears two hundred, so the statement is True.`,
      `**C.** → True

Equal marginal costs force $q_{2}=4q_{1}$, so the cheaper line takes the larger share: $24$ against $6$. Twenty-four thousand loaves sit on line 2. A cheaper coefficient should carry more volume, not less, when both costs are squares, so the statement is True.`,
      `**D.** → False

Line 1's average cost index is $C_{1}(q)/q=q$ itself, which rises with output. A falling average would need an original exponent below $1$, and line 1's is $2$. Extra loaves on line 1 are dearer per loaf, not cheaper, so the statement is False.`,
      `**E.** → True

The $6$-and-$24$ split scores

$$36+144=180$$

which sits under $200$. Six squared is $36$; twenty-four squared over $4$ is $144$. Spreading at equal marginals beats the $225$ corner, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 95,
    solution_overview: `A regional bakery must bake $30$ thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index follows $C_{1}(q)=a q^{2}$ and line 2's follows $C_{2}(q)=b q^{2}$. A $10$-thousand-loaf run on line 1 scored $100$, and an $8$-thousand-loaf run on line 2 scored $16$.

Each logged run fixes one coefficient:

$$a\\cdot 10^{2}=100$$

$$b\\cdot 8^{2}=16$$

Equal marginal costs split the overnight order. A corner that dumps everything on the cheaper line is a different plan.`,
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

For a power $q=A p^{r}$ the point elasticity is the exponent itself, $\\varepsilon=r=-2$, independent of $p$. Demand is equally elastic at every price $p>0$. The usual mix-up is treating elasticity as a local slope that would change along the curve; for a monomial it does not, so the statement is True.`,
      `**B.** → True

From $A/100=40$, the coefficient is $A=4000$. At $12$ euros:

$$q(12)=\\frac{4000}{144}=\\frac{250}{9}\\approx 27.78$$

The exact cut from $40$ is about $12.22$ tickets, which sits above $10$. A $20\\%$ elasticity shortcut on $40$ tickets would have claimed $8$ and undershot, so the statement is True.`,
      `**C.** → True

The shortcut predicts $-2\\times 10\\%=-20\\%$. The exact factor is

$$1.1^{-2}=\\frac{1}{1.21}\\approx 0.826$$

a cut of about $17.36\\%$. The shortcut overstates the drop. Linearizing a power at a $10\\%$ step is still a little coarse, so the statement is True.`,
      `**D.** → False

Revenue is $R(p)=\\frac{4000}{p}$, which falls toward $0$ as $p$ grows. Raising the price without bound drives the till toward zero rather than a maximum. Inverse-square demand is elastic: a price rise cuts $pq$. There is no interior maximum on $p>0$, so the statement is False.`,
      `**E.** → True

Halving the price quadruples inverse-square demand:

$$q(5)=40\\cdot 4=160$$

which sits above $150$. Inverse-linear thinking would have claimed $80$ and missed the letter, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 96,
    solution_overview: `Evening museum admissions follow $q(p)=A p^{-2}$ tickets when the price is $p>0$ euros. At $10$ euros the desk sold $40$ tickets.

The exponent is given, so the desk record fixes $A$:

$$A\\cdot 10^{-2}=40$$

For a price factor $k$, the constant-elasticity shortcut returns $-2(k-1)$ and the exact rule returns $k^{-2}-1$. Revenue is $R=pq$.`,
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

The exponent $\\frac{3}{2}$ is larger than one, so each extra unit of belt setting adds more trays than the unit before it. Three halves is above one, so throughput outruns the belt. A proportional lehr would have carried exponent $1$, so the statement is True.`,
      `**B.** → True

From $4^{\\frac{3}{2}}=8$, the recorded run gives $A=8$, so $T(e)=8 e^{\\frac{3}{2}}$. The leftover slope is

$$T'(e)=12\\sqrt{e}$$

After setting four that is $24$. After setting nine it is $36$. Because $r>1$ the slope rises. An extra unit adds more trays after nine than after four, so the statement is True.`,
      `**C.** → True

At belt setting $9$, nine contributes $3^{3}=27$:

$$T(9)=8\\cdot 27=216$$

Two hundred and sixteen sits above $200$. Because the exponent exceeds one, the belt setting of $9$ has outrun a linear guess from $T(4)=64$, so the statement is True.`,
      `**D.** → False

A $25\\%$ larger coefficient appears once above and once below in the ratio $\\frac{T(2e)}{T(e)}$, so it cancels. The doubling factor stays

$$2^{\\frac{3}{2}}$$

Levels move by $25\\%$ and doubling ratios do not, so the statement is False.`,
      `**E.** → True

Levels do scale with $A$. The calibrated $T(9)=216$ becomes

$$1.25\\cdot 216=270$$

under a $25\\%$ larger coefficient, which sits above $250$. The factor $1.25$ survives on levels even though it cancels in every ratio, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 97,
    solution_overview: `A glass-annealing lehr's throughput follows $T(e)=A e^{\\frac{3}{2}}$ trays per hour for belt setting $e>0$. A run at belt setting $4$ delivered $64$ trays an hour.

The exponent is given, so the recorded run fixes $A$:

$$A\\cdot 4^{\\frac{3}{2}}=64$$

Levels depend on $A$. Scale factors cancel it:

$$\\frac{T(ke)}{T(e)}=k^{\\frac{3}{2}}$$`,
  },
];
