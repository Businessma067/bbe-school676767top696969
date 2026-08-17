export const CH8_EASY_B = [
  {
    id: `math-8-93`,
    case_id: `MATH 8.93`,
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

Both indices must be read at the same line size before they are compared:

$$F(2)=2\\cdot 2^{2}=8, \\qquad G(2)=2^{3}=8$$

The first figure is right and the second is not, because the two indices agree exactly at two machines. That coincidence is the crossing point, so quoting $6$ for the cubic index hides the one line size where the two are level. Both indices read $8$ at $n=2$, so the statement is False.`,
      `**B.** → True

Comparing two powers is easier as one inequality than as two tables. Subtract and factor, keeping the positive factor visible:

$$G(n)-F(n)=n^{3}-2n^{2}=n^{2}(n-2)$$

Because $n^{2}>0$ for every positive line size, the sign of the difference is the sign of $n-2$ alone, so the cubic index leads exactly when $n>2$:

$$n>2 \\quad \\Longleftrightarrow \\quad G(n)>F(n)$$

A second and independent route divides instead of subtracting. The common square cancels, and the quotient exceeds $1$ on precisely the same set of line sizes:

$$\\frac{G(n)}{F(n)}=\\frac{n^{3}}{2n^{2}}=\\frac{n}{2}$$

Levels just past the crossing agree with both arguments, and the gap between the two columns keeps opening as the line grows:

$$F(3)=18, \\quad G(3)=27, \\qquad F(4)=32, \\quad G(4)=64$$

$$F(10)=200, \\qquad G(10)=1000$$

The coefficient $2$ buys the quadratic index a lead only very close to the origin, which is all a fixed coefficient can ever do. Once the line is longer than two machines the extra factor of $n$ carried by the cubic index outweighs that multiplier, and no later line size reverses the order, because $\\frac{n}{2}$ keeps rising and never falls back through $1$. The cubic index exceeds the quadratic one for every $n>2$, so the statement is True.`,
      `**C.** → True

The same factored difference settles the small end of the range:

$$G(n)-F(n)=n^{2}(n-2)$$

For $0<n<2$ the bracket is negative while $n^{2}$ stays positive, so the difference is negative and the quadratic index leads. One line size illustrates it, since $F(1)=2$ against $G(1)=1$. The quadratic index leads on $0<n<2$, so the statement is True.`,
      `**D.** → False

Dividing the two indices cancels the common square and leaves a rule that grows with the line:

$$\\frac{G(n)}{F(n)}=\\frac{n^{3}}{2n^{2}}=\\frac{n}{2}$$

A ratio approaching $1$ would mean the two indices end up level, but this ratio passes every bound:

$$\\frac{G(20)}{F(20)}=10, \\qquad \\frac{G(200)}{F(200)}=100$$

The ratio equals $1$ only at the crossing $n=2$ and never returns to it. The gap widens without limit, so the statement is False.`,
      `**E.** → False

Just past the crossing the two indices are already apart, and each is a single substitution:

$$F(3)=2\\cdot 9=18, \\qquad G(3)=27$$

The quadratic figure is right, so the row fails only on the cubic one, where $24$ has been written for $27$. The sign test agrees that the cubic index must lead at three machines, since $n^{2}(n-2)=9>0$ there. The cubic index reads $27$ rather than $24$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 93,
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
    id: `math-8-94`,
    case_id: `MATH 8.94`,
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

The exponent $\\frac{1}{2}$ is a square root, and zero has a square root because zero squared is zero:

$$L(0)=0^{\\frac{1}{2}}=\\sqrt{0}=0$$

A positive exponent keeps the reading in the numerator, so nothing is divided here and the endpoint survives. The transform returns $0$ at a raw reading of zero, so the statement is True.`,
      `**B.** → False

A square root is an even root, and squaring any real number gives a result that is not negative:

$$L(-4)=(-4)^{\\frac{1}{2}}=\\sqrt{-4}$$

No real number satisfies $y^{2}=-4$, so this transform accepts only $x\\ge 0$ and a negative raw reading has no real value at all. The parity of the root, not the sign of the coefficient, is what closes the domain here. There is no real value at $x=-4$, so the statement is False.`,
      `**C.** → True

The exponent $\\frac{1}{3}$ is an odd root, and odd roots accept negative inputs, because an odd power of a negative number stays negative:

$$(-2)^{3}=-8 \\quad \\Rightarrow \\quad M(-8)=(-8)^{\\frac{1}{3}}=-2$$

This is the difference between the two roots on the sheet: the cube root returns a value at a reading below zero, while the square root refuses the same reading. The cube root of $-8$ is $-2$, so the statement is True.`,
      `**D.** → False

A negative exponent is a reciprocal, so the raw reading appears in a denominator, and the square root sits there with it:

$$N(x)=x^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{x}}$$

At $x=0$ the denominator is $\\sqrt{0}=0$, and division by zero has no value, so this transform accepts only strictly positive readings, $x>0$. The negative exponent excludes the endpoint that the square root was happy to accept. The transform has no value at $x=0$, so the statement is False.`,
      `**E.** → False

The reciprocal has to be respected: the root goes into the denominator, so a raw reading above $1$ returns something below $1$:

$$N(4)=\\frac{1}{\\sqrt{4}}=\\frac{1}{2}$$

The claimed $2$ is $\\sqrt{4}$, the value the first transform returns, so the slip is a dropped minus sign in the exponent. Written side by side the two transforms are reciprocals of one another:

$$L(4)=2, \\qquad N(4)=\\frac{1}{2}, \\qquad L(4)\\cdot N(4)=1$$

Two further readings confirm the pattern rather than one isolated case, since every output here is the reciprocal of a root:

$$N(9)=\\frac{1}{3}, \\qquad N(16)=\\frac{1}{4}$$

The sign of the exponent also fixes the direction of the transform. It falls as the reading grows, so it can return a value above $1$ only when the raw reading is below $1$, as at $N(0.25)=2$. A reading of $4$ sits well above $1$, and the only way to reach $2$ from it is to read the exponent as $\\frac{1}{2}$ instead of $-\\frac{1}{2}$. The domain is untouched by the slip either way, since the denominator would still vanish at zero. The transform returns $\\frac{1}{2}$ at a raw reading of $4$ rather than $2$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 94,
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
    id: `math-8-95`,
    case_id: `MATH 8.95`,
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

The negative fractional exponent is easiest to read as a root in a denominator:

$$P(x)=12x^{-\\frac{1}{2}}=\\frac{12}{\\sqrt{x}}$$

At four cartridges the root is a whole number, so one division finishes the reading:

$$P(4)=\\frac{12}{2}=6$$

Multiplying by the root instead of dividing would give $24$ kilopascals and reverse the whole point of adding cartridges. The drop at four cartridges is $6$ kilopascals, so the statement is True.`,
      `**B.** → True

The rule has a fixed positive numerator and a root of the cartridge count in the denominator:

$$P(x)=\\frac{12}{\\sqrt{x}}$$

Every extra cartridge enlarges $\\sqrt{x}$, and a larger denominator under a fixed numerator gives a smaller quotient, so the drop falls at every point of the range:

$$P(1)=12, \\qquad P(4)=6, \\qquad P(16)=3$$

The drop is strictly decreasing on $x>0$, so the statement is True.`,
      `**C.** → True

Two things are being claimed, and the reciprocal form settles both:

$$P(x)=\\frac{12}{\\sqrt{x}}$$

As the bank grows the denominator passes every bound while the numerator stays at $12$, so the quotient is driven towards zero:

$$P(144)=1, \\qquad P(14400)=0.1, \\qquad P(1440000)=0.01$$

Zero itself is never attained, because a quotient with a nonzero numerator cannot equal zero however large the denominator becomes. Setting $\\frac{12}{\\sqrt{x}}=0$ would require $12=0$, so no cartridge count in the domain returns a drop of zero.

The scaling ratio reaches the same verdict without naming any particular level, since quadrupling the bank always multiplies the drop by one fixed factor:

$$\\frac{P(4x)}{P(x)}=4^{-\\frac{1}{2}}=\\frac{1}{2}$$

Repeated quadrupling therefore halves the drop again and again, which brings it below any target that might be named, and yet each halving leaves a positive figure behind. The coefficient $12$ plays no part in either argument, since it cancels in the ratio and only sets the starting level; a bank rated at $120$ or at $1.2$ would behave in exactly the same way.

Both halves of the claim are needed, and they are not in conflict. Getting arbitrarily close to a value is a statement about how far out the bank has to go, while reaching it is a statement about some particular cartridge count, and here the second never happens for any $x$ in the domain. The drop approaches $0$ without reaching it, so the statement is True.`,
      `**D.** → False

Pulling cartridges runs the same reciprocal in the other direction:

$$P(0.01)=\\frac{12}{\\sqrt{0.01}}=\\frac{12}{0.1}=120$$

$$P(0.0001)=\\frac{12}{0.01}=1200$$

A tiny positive denominator makes the quotient enormous, and no finite figure caps it, so there is no limiting value to quote. The rule does not extend to $x=0$ either, since the denominator would be zero there. The drop grows without bound rather than settling, so the statement is False.`,
      `**E.** → True

Nine cartridges give another whole root, so the reading is again a single division:

$$P(9)=\\frac{12}{\\sqrt{9}}=\\frac{12}{3}=4$$

The figure sits correctly inside the falling shape, since nine cartridges lie between four and sixteen while $4$ lies between the drops of $6$ and $3$ kilopascals. Adding five cartridges to a bank of four has bought only two kilopascals, because the exponent is $-\\frac{1}{2}$ rather than $-1$. The drop at nine cartridges is $4$ kilopascals, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 95,
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
    id: `math-8-96`,
    case_id: `MATH 8.96`,
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

The recorded job is one equation, and the square of the radius has to be formed before the division:

$$A\\cdot 3^{2}=45 \\quad \\Rightarrow \\quad 9A=45 \\quad \\Rightarrow \\quad A=5$$

The claimed $15$ is $\\frac{45}{3}$, which divides by the radius instead of by its square, so it is the value the coefficient would take if the exponent were $1$. Area based rules carry exponent $2$. The coefficient is $5$ rather than $15$, so the statement is False.`,
      `**B.** → True

With the coefficient recovered the rule is $y(r)=5r^{2}$, so the largest panel needs

$$y(6)=5\\cdot 6^{2}=5\\cdot 36=180$$

The scaling route agrees without reusing the coefficient, since doubling the radius from the recorded job multiplies the requirement by $2^{2}=4$, and $45\\times 4=180$. Two independent routes landing on one figure is the check worth making before drums are ordered. The panel needs $180$ litres, so the statement is True.`,
      `**C.** → True

A scale factor of a power function depends only on the exponent, because the coefficient cancels in the ratio:

$$\\frac{y(1.5r)}{y(r)}=\\frac{A(1.5r)^{2}}{Ar^{2}}=1.5^{2}=2.25$$

A panel half again as wide therefore takes $125\\%$ more primer rather than $50\\%$ more. The requirement is multiplied by $2.25$, so the statement is True.`,
      `**D.** → True

At a radius of one metre the square of the radius is $1$, so the coefficient is left standing on its own:

$$y(1)=5\\cdot 1^{2}=5$$

This is the reading that gives the coefficient its meaning: five litres is the primer for a panel of radius one metre, and every other entry is that figure multiplied by the square of the radius.

A second route reaches the same litre count without touching the coefficient at all. Scaling down from the recorded job uses the width multiplier $k=\\frac{1}{3}$, and the exponent acts on the whole multiplier:

$$\\frac{y(1)}{y(3)}=\\left(\\frac{1}{3}\\right)^{2}=\\frac{1}{9}, \\qquad \\frac{45}{9}=5$$

The two routes agree, which also confirms that the coefficient recovered from the recorded job was $5$ and not $15$; had it been $15$, this panel would have wanted $15$ litres and the scaling route would have contradicted it. A third pass runs the model back upward and must return the recorded entry:

$$y(3)=5\\cdot 9=45$$

The domain matters here as well, since $r>0$ excludes a panel of zero radius and nothing is being extrapolated below the sizes the rule was built for. A panel of radius one metre needs $5$ litres, so the statement is True.`,
      `**E.** → False

Halving the radius is a width multiplier of $k=0.5$, and the exponent $2$ acts on the whole multiplier:

$$\\frac{y(0.5r)}{y(r)}=0.5^{2}=0.25$$

Levels around the recorded job make the size of the error plain, since halving the three metre radius gives

$$y(1.5)=5\\cdot 2.25=11.25$$

against the $22.5$ litres a halving rule would predict. A quarter, not a half, is what the narrower panel takes, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 96,
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
    id: `math-8-97`,
    case_id: `MATH 8.97`,
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

The square is taken before the coefficient is applied, which is what makes the standard speeds land on whole numbers:

$$E(10)=0.5\\cdot 10^{2}=0.5\\cdot 100=50$$

Halving the speed first and squaring afterwards would give $5^{2}=25$, exactly half of the correct index, and that is the usual slip when the coefficient is a fraction. The notation fixes the order: the exponent binds to $v$ alone, so the coefficient can only be applied to a square that has already been formed.

A second check comes from a neighbouring level rather than from repeating the same arithmetic. The index at the higher standard speed and the doubling factor have to agree with each other:

$$E(20)=0.5\\cdot 400=200, \\qquad \\frac{E(20)}{E(10)}=2^{2}=4$$

Since $50\\times 4=200$, the two entries are consistent, which the mistaken $25$ would not be, because $25\\times 4=100$ is not the index at twenty. Smaller speeds give a third anchor pointing the same way:

$$E(1)=0.5, \\qquad E(2)=2, \\qquad E(4)=8$$

Each of these is the coefficient multiplied by a square, and the quadrupling pattern is visible straight along the row. The index at the lower standard speed reads $50$, so the statement is True.`,
      `**B.** → True

A ratio of two index values loses the coefficient, so the comparison rests on the exponent alone:

$$\\frac{E(20)}{E(10)}=\\frac{0.5\\cdot 400}{0.5\\cdot 100}=\\frac{400}{100}=4$$

The same figure comes from the speed multiplier $k=2$ directly, since $2^{2}=4$, without evaluating either level. Doubling the approach speed quadruples the index, so the statement is True.`,
      `**C.** → True

The higher standard speed is another single substitution, square first:

$$E(20)=0.5\\cdot 20^{2}=0.5\\cdot 400=200$$

The figure is consistent with the doubling factor, since $50\\times 4=200$, so the two entries agree with each other rather than resting on separate arithmetic. Reporting $100$ here would treat the index as proportional to the speed, which the exponent $2$ rules out. The index at the higher standard speed reads $200$, so the statement is True.`,
      `**D.** → True

Two features of the rule settle the sign with no test data at all. A square is never negative, and the coefficient is positive:

$$v^{2}>0 \\text{ for } v>0, \\qquad 0.5>0$$

The product of two positive quantities is positive, so the index stays above zero across the whole domain. An index of zero would need $v=0$, which the domain excludes. The index is never negative, so the statement is True.`,
      `**E.** → False

A ten percent overspeed is a speed multiplier of $k=1.1$, and the exponent acts on the whole multiplier rather than on the ten percent:

$$\\frac{E(1.1v)}{E(v)}=1.1^{2}=1.21$$

A level check at the lower standard speed makes the gap concrete:

$$E(11)=0.5\\cdot 121=60.5, \\qquad 60.5-50=10.5$$

The index rises by twenty one percent rather than ten, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 97,
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
];
