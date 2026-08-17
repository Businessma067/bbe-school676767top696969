/** MATH 8.31–8.35 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-31",
    case_id: "MATH 8.31",
    title: `Turning a Negative-Power Demand Curve Around`,
    context: `A component supplier faces demand $q(p)=A p^{-2}$ units, where $p>0$ is the price. At a price of $5$ the supplier sells $100$ units. Procurement wants the relationship written the other way round, with price and revenue expressed as functions of the quantity sold.`,
    statements: [
      `The inverse demand curve is $p=50q^{-0.5}$.`,
      `Revenue expressed through quantity is $R=50q^{0.5}$.`,
      `Revenue rises as the quantity sold rises.`,
      `At a price of $10$ the curve sells $50$ units.`,
      `The price elasticity of demand is $-0.5$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The inverse demand curve is $p=50q^{-0.5}$.**  (true)

This claim asks for the demand curve solved for price. The observation gives $A=2500$, and solving $q=2500p^{-2}$ for $p$ produces $p=50q^{-0.5}$.

Inverting a power function replaces the exponent by its reciprocal, so $-2$ becomes $-1/2$, and the coefficient is raised to that same reciprocal power: $2500^{1/2}=50$. Leaving the coefficient untouched is the usual slip and would give a curve that misses every observed point.

Recover the coefficient:

$$
A(5)^{-2} = 100 \\quad \\Rightarrow \\quad \\frac{A}{25} = 100 \\quad \\Rightarrow \\quad A = 2500
$$

Solve the demand curve for price:

$$
q = \\frac{2500}{p^{2}} \\quad \\Rightarrow \\quad p^{2} = \\frac{2500}{q} \\quad \\Rightarrow \\quad p = \\frac{50}{\\sqrt{q}} = 50q^{-0.5}
$$

Check the observed pair:

$$
p(100) = \\frac{50}{10} = 5 \\;\\checkmark
$$

The inverse curve is $50q^{-0.5}$, so the claim is true.`,
      `**B) Revenue expressed through quantity is $R=50q^{0.5}$.**  (true)

This claim builds revenue on the inverse curve. Multiplying $p=50q^{-0.5}$ by $q$ raises the exponent by one, giving $R(q)=50q^{0.5}$.

Working in quantity rather than price is what procurement asked for, and the two descriptions must agree. Written in price, revenue is $2500p^{-1}$; substituting $p=5$ gives $500$, and the quantity form gives $50\\sqrt{100}=500$ as well.

Multiply the inverse curve by quantity:

$$
R(q) = q \\cdot 50q^{-0.5} = 50q^{-0.5+1} = 50q^{0.5}
$$

Cross-check against the price form at the observed point:

$$
R = pq = 5 \\times 100 = 500, \\qquad 50\\sqrt{100} = 500
$$

Revenue in quantity terms is $50q^{0.5}$, so the claim is true.`,
      `**C) Revenue rises as the quantity sold rises.**  (true)

This claim reads the direction from the derived law. The exponent of $R(q)=50q^{0.5}$ is positive, so revenue increases with every additional unit sold.

The same fact looks different from the price side, where revenue is $2500p^{-1}$ and *falls* as price rises. There is no contradiction: cutting the price raises quantity by more, so moving down the demand curve raises revenue — which is what elastic demand means.

Read the sign of the exponent:

$$
R(q) = 50q^{0.5}, \\qquad 0.5 > 0
$$

Evaluate at three quantities:

$$
R(25) = 250, \\qquad R(100) = 500, \\qquad R(400) = 1000
$$

Revenue rises with quantity, so the claim is true.`,
      `**D) At a price of $10$ the curve sells $50$ units.**  (false)

This claim halves the quantity when it should quarter it. Doubling the price from $5$ to $10$ divides quantity by $2^{2}=4$, so sales fall from $100$ to $25$ units.

The claimed $50$ is what an exponent of $-1$ would give. That would also make revenue constant along the curve, contradicting parts B and C, so the error is not isolated — it would change the whole commercial picture.

Evaluate demand at the stated price:

$$
q(10) = \\frac{2500}{100} = 25
$$

Confirm with the scale factor:

$$
\\frac{q(10)}{q(5)} = 2^{-2} = \\frac{1}{4}, \\qquad \\frac{100}{4} = 25
$$

The curve sells $25$ units, so the claim is false.`,
      `**E) The price elasticity of demand is $-0.5$.**  (false)

This claim quotes the exponent of the *inverse* curve. Demand's own exponent is $-2$, and that is the elasticity; $-0.5$ is its reciprocal, belonging to the price-as-a-function-of-quantity relationship.

The reciprocal pairing is exactly why the two numbers are easy to swap: inverting a power function inverts its exponent. Keeping track of which variable is on which side settles it — elasticity measures the percentage response of quantity to price, so it must be read from $q(p)$.

Read the elasticity from the demand curve:

$$
q(p) = 2500p^{-2} \\quad \\Rightarrow \\quad \\text{El}_{p}q = -2
$$

Contrast with the inverse curve:

$$
p(q) = 50q^{-0.5} \\quad \\Rightarrow \\quad \\text{El}_{q}p = -0.5 = \\frac{1}{-2}
$$

Test with a one percent price rise:

$$
1.01^{-2} \\approx 0.9803 \\quad \\Rightarrow \\quad \\text{about } -2\\%
$$

The elasticity is $-2$, so the claim is false.`,
    ],
    difficulty_level: "4/5",
    sort_order: 31,
    solution_overview: `Demand is $q(p)=Ap^{-2}$ with $q(5)=100$; procurement wants price and revenue as functions of quantity.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units, $R$ = revenue. One observation pins the coefficient, and the rest is a change of subject: inverting a power function takes the reciprocal of the exponent and the same reciprocal power of the coefficient.

**1. Translate: the observed pair.**

$$
A(5)^{-2} = 100
$$

**2. Translate: the inversion.**

$$
q = \\frac{A}{p^{2}} \\quad \\Rightarrow \\quad p = A^{1/2}q^{-1/2}
$$

**Part 2: The model.**

$$
q(p) = 2500\\,p^{-2} \\tag{1}
$$

$$
p(q) = 50\\,q^{-0.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$
A = 100 \\times 25 = 2500, \\qquad A^{1/2} = 50
$$

**2.** Revenue from either side, with matching values:

$$
R(p) = 2500p^{-1}, \\qquad R(q) = 50q^{0.5}, \\qquad R = 500 \\text{ at } (p,q) = (5,100)
$$

**3.** Quantities along the curve:

$$
q(5) = 100, \\qquad q(10) = 25, \\qquad q(2.5) = 400
$$

**4.** Elasticities are reciprocal, one for each direction:

$$
\\text{El}_{p}q = -2, \\qquad \\text{El}_{q}p = -0.5
$$

**5.** Because demand is elastic, revenue falls in price and rises in quantity — two readings of the same curve.

**Answer.** $A = 2500$ | $p(q) = 50q^{-0.5}$ | $R(q) = 50q^{0.5}$ | elasticity $-2$`,
  },
  {
    id: "math-8-32",
    case_id: "MATH 8.32",
    title: `Average Product of a Square-Root Technology`,
    context: `A workshop's output follows $Y(L)=A L^{0.5}$ units, where $L>0$ is labour hours. A shift of $144$ hours produced $144$ units. Management also tracks the average product of labour, $Y/L$.`,
    statements: [
      `The output law is $Y(L)=12L^{0.5}$.`,
      `Average product is a power function of labour with exponent $-0.5$.`,
      `At $36$ hours output is $72$ units and average product is $2$ units per hour.`,
      `Quadrupling labour halves the average product.`,
      `Doubling output requires quadrupling labour.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The output law is $Y(L)=12L^{0.5}$.**  (true)

This claim calibrates the technology. Dividing the recorded $144$ units by the shape factor $\\sqrt{144}=12$ gives $A=12$.

The coincidence that hours and units are both $144$ is a deliberate trap: it invites the reading $A=1$, as if output equalled labour. The square root breaks that symmetry — $12$ hours would produce about $41.6$ units, not $12$.

Divide the record by the shape factor:

$$
A\\sqrt{144} = 144 \\quad \\Rightarrow \\quad 12A = 144 \\quad \\Rightarrow \\quad A = 12
$$

$$
Y(L) = 12\\sqrt{L}
$$

Check the recorded shift:

$$
Y(144) = 12(12) = 144 \\;\\checkmark
$$

The output law is $12L^{0.5}$, so the claim is true.`,
      `**B) Average product is a power function of labour with exponent $-0.5$.**  (true)

This claim asks for the structure of the average. Dividing output by labour lowers the exponent by one, so $0.5$ becomes $-0.5$ and the average product is $12L^{-0.5}$.

Dividing by the input is the standard way to build an average from a total, and for power functions it always produces another power function. The negative exponent here is the formal statement that this technology has diminishing average returns.

Divide output by labour:

$$
\\frac{Y(L)}{L} = \\frac{12L^{0.5}}{L} = 12L^{0.5-1} = 12L^{-0.5}
$$

Confirm the shape with two values:

$$
\\frac{Y(36)}{36} = 2, \\qquad \\frac{Y(144)}{144} = 1
$$

Average product is a power function with exponent $-0.5$, so the claim is true.`,
      `**C) At $36$ hours output is $72$ units and average product is $2$ units per hour.**  (true)

This claim checks both quantities at one staffing level. With $\\sqrt{36}=6$, output is $72$ units, and dividing by $36$ hours gives an average product of $2$ units per hour.

Comparing with the recorded shift makes the diminishing returns concrete: quadrupling hours from $36$ to $144$ only doubles output, and the average product halves from $2$ to $1$.

Evaluate output:

$$
Y(36) = 12\\sqrt{36} = 12(6) = 72
$$

Divide by labour:

$$
\\frac{72}{36} = 2
$$

Confirm through the average-product law:

$$
12(36)^{-0.5} = \\frac{12}{6} = 2
$$

Both figures match the claim, so it is true.`,
      `**D) Quadrupling labour halves the average product.**  (true)

This claim applies a scale factor to the average. Since average product carries exponent $-0.5$, quadrupling labour multiplies it by $4^{-0.5}=1/2$.

The factor holds at every starting point, which is what makes it a useful planning rule: whatever the current shift, running four times the hours leaves each hour delivering half as much. The earlier pair $36$ and $144$ hours is exactly one such quadrupling.

Form the scale factor for the average:

$$
\\frac{\\text{AP}(4L)}{\\text{AP}(L)} = 4^{-0.5} = \\frac{1}{2}
$$

Check the concrete pair:

$$
\\text{AP}(36) = 2, \\qquad \\text{AP}(144) = 1
$$

Average product halves, so the claim is true.`,
      `**E) Doubling output requires quadrupling labour.**  (true)

This claim inverts the output law. Since $Y$ carries exponent $0.5$, its inverse carries exponent $2$: doubling output multiplies the required hours by $2^{2}=4$.

The relationship between parts D and E is worth naming. The same quadrupling that doubles output halves the average product, and both statements are the same fact seen from different sides — total output up by $2$, hours up by $4$.

Invert the output law:

$$
Y = 12\\sqrt{L} \\quad \\Rightarrow \\quad L = \\left(\\frac{Y}{12}\\right)^{2}
$$

Apply it to a doubling of output:

$$
\\frac{L(2Y)}{L(Y)} = 2^{2} = 4
$$

Check with concrete figures:

$$
Y = 72 \\;\\Rightarrow\\; L = 36, \\qquad Y = 144 \\;\\Rightarrow\\; L = 144
$$

Doubling output does take four times the labour, so the claim is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 32,
    solution_overview: `Output is $Y(L)=AL^{0.5}$ units from $L>0$ labour hours, with a $144$-hour shift producing $144$ units. Average product is $Y/L$.

**Part 1: Building the model.**

Let $L$ = labour hours, $Y$ = output, AP = average product. The exponent is given, one shift pins the coefficient, and the average is derived by dividing — an operation that lowers the exponent by one.

**1. Translate: the recorded shift.**

$$
A\\sqrt{144} = 144
$$

**2. Translate: the average product.**

$$
\\text{AP}(L) = \\frac{Y(L)}{L}
$$

**Part 2: The model.**

$$
Y(L) = 12\\sqrt{L} \\tag{1}
$$

$$
\\text{AP}(L) = 12L^{-0.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The shift gives the coefficient:

$$
A = \\frac{144}{12} = 12
$$

**2.** Levels and averages at two staffing points:

$$
Y(36) = 72, \\; \\text{AP} = 2, \\qquad Y(144) = 144, \\; \\text{AP} = 1
$$

**3.** Scale factors for the total and for the average point in opposite directions:

$$
\\frac{Y(4L)}{Y(L)} = 4^{0.5} = 2, \\qquad \\frac{\\text{AP}(4L)}{\\text{AP}(L)} = 4^{-0.5} = \\tfrac{1}{2}
$$

**4.** Inverting (1) squares the output ratio:

$$
L = \\left(\\frac{Y}{12}\\right)^{2} \\quad \\Rightarrow \\quad \\text{doubling } Y \\text{ needs } 4\\times L
$$

**5.** All five properties trace back to the single exponent $0.5$: total output rises, the average falls, and the inverse rises with exponent $2$.

**Answer.** $A = 12$ | $Y(L) = 12\\sqrt{L}$ | $\\text{AP}(L) = 12L^{-0.5}$`,
  },
  {
    id: "math-8-33",
    case_id: "MATH 8.33",
    title: `Two Break-Even Points Around a Fixed Charge`,
    context: `A contract manufacturer earns $R(q)=60 q^{0.5}$ from an output of $q>0$ units, pays a variable cost of $2q$, and carries a fixed charge of $400$ per period. Profit is $\\Pi(q)=60q^{0.5}-2q-400$.`,
    statements: [
      `The operation breaks even at two output levels, $100$ and $400$ units.`,
      `Profit is positive at an output of $25$ units.`,
      `Profit is positive at an output of $500$ units.`,
      `Profit rises throughout the range where it is positive.`,
      `Revenue is proportional to output.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The operation breaks even at two output levels, $100$ and $400$ units.**  (true)

This claim asks where profit vanishes. Substituting $s=\\sqrt{q}$ turns the profit condition into a quadratic in $s$ with roots $10$ and $20$, so break-even occurs at $q=100$ and $q=400$ units.

The substitution is the key move: with $\\sqrt{q}$ and $q$ both present, the equation is quadratic in disguise. Two roots are what a fixed charge produces — output must be large enough to cover it, but not so large that the linear variable cost overwhelms the square-root revenue.

Set profit to zero and substitute $s=\\sqrt{q}$:

$$
60s - 2s^{2} - 400 = 0 \\quad \\Rightarrow \\quad s^{2} - 30s + 200 = 0
$$

Factor the quadratic:

$$
(s-10)(s-20) = 0 \\quad \\Rightarrow \\quad s = 10 \\text{ or } s = 20
$$

Square back to output:

$$
q = 100 \\quad \\text{or} \\quad q = 400
$$

Check one of them:

$$
\\Pi(400) = 60(20) - 800 - 400 = 0 \\;\\checkmark
$$

Both break-even points are as claimed, so the statement is true.`,
      `**B) Profit is positive at an output of $25$ units.**  (false)

This claim tests an output below the lower break-even point. At $q=25$ revenue is $300$ against costs of $450$, so the period loses $150$.

Small outputs cannot carry the fixed charge: revenue grows as a square root, so it is at its weakest exactly where the fixed charge is proportionally heaviest. Profit only turns positive once output passes $100$ units.

Evaluate each component at $q=25$:

$$
R(25) = 60(5) = 300, \\qquad 2(25) = 50, \\qquad \\text{fixed } 400
$$

Combine them:

$$
\\Pi(25) = 300 - 50 - 400 = -150
$$

Profit is negative, so the claim is false.`,
      `**C) Profit is positive at an output of $500$ units.**  (false)

This claim tests an output beyond the upper break-even point. At $q=500$ revenue is about $1342$ against costs of $1400$, a loss of roughly $58$.

The margin is thin, which is what makes the statement worth checking rather than guessing: $500$ is only a quarter above the upper break-even of $400$, and profit there was exactly zero. Past that point the linear cost outruns the square-root revenue, and losses widen from then on.

Evaluate revenue:

$$
R(500) = 60\\sqrt{500} \\approx 60 \\times 22.3607 \\approx 1341.6
$$

Evaluate costs:

$$
2(500) + 400 = 1400
$$

Combine:

$$
\\Pi(500) \\approx 1341.6 - 1400 \\approx -58.4
$$

Profit is negative, so the claim is false.`,
      `**D) Profit rises throughout the range where it is positive.**  (false)

This claim confuses positive profit with rising profit. Profit is positive between $100$ and $400$ units, but inside that range it climbs to a peak near $225$ units and then falls back to zero.

The shape follows from the quadratic in $s=\\sqrt{q}$: profit is $-2(s-10)(s-20)$, an inverted parabola in $s$, so it must turn over midway between the roots at $s=15$, that is $q=225$. A claim about monotonicity therefore cannot survive on an interval that contains the peak.

Evaluate profit at three outputs inside the profitable range:

$$
\\Pi(144) = 60(12) - 288 - 400 = 32
$$

$$
\\Pi(225) = 60(15) - 450 - 400 = 50
$$

$$
\\Pi(324) = 60(18) - 648 - 400 = 32
$$

Profit rises to $50$ and then falls back, so the claim is false.`,
      `**E) Revenue is proportional to output.**  (false)

This claim would require revenue's exponent to be $1$. It is $0.5$, so doubling output multiplies revenue by only about $1.414$, while the variable cost — which really is proportional — doubles exactly.

That mismatch is what creates the upper break-even point in part A. If revenue were proportional, the comparison with a $2q$ cost would be settled once and for all by comparing coefficients, and profit would either grow forever or shrink forever.

Compare the two scale factors:

$$
\\frac{R(2q)}{R(q)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{2(2q)}{2q} = 2
$$

Check with levels:

$$
R(100) = 600, \\qquad R(200) \\approx 848.5, \\qquad R(400) = 1200
$$

Quadrupling output only doubles revenue, so the claim is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 33,
    solution_overview: `Profit is $\\Pi(q)=60q^{0.5}-2q-400$ for output $q>0$.

**Part 1: Building the model.**

Let $q$ = units produced and $s=\\sqrt{q}$. Revenue has exponent $0.5$, variable cost exponent $1$, and the fixed charge is a constant — the substitution $s=\\sqrt{q}$ turns this mixture into a quadratic.

**1. Translate: the profit function.**

$$
\\Pi = 60q^{0.5} - 2q - 400
$$

**2. Translate: the substitution.** With $q=s^{2}$:

$$
\\Pi = -2s^{2} + 60s - 400
$$

**Part 2: The model.**

$$
\\Pi(s) = -2\\left(s^{2} - 30s + 200\\right) \\tag{1}
$$

$$
\\Pi(s) = -2(s-10)(s-20) \\tag{2}
$$

**Part 3: Solve.**

**1.** The roots of (2) give the break-even outputs:

$$
s = 10 \\;\\Rightarrow\\; q = 100, \\qquad s = 20 \\;\\Rightarrow\\; q = 400
$$

**2.** The sign of (2) fixes the profitable range:

$$
100 < q < 400 \\;\\Rightarrow\\; \\Pi > 0, \\qquad \\text{otherwise } \\Pi \\le 0
$$

**3.** Being an inverted parabola in $s$, profit peaks midway between the roots:

$$
s = 15 \\;\\Rightarrow\\; q = 225, \\qquad \\Pi(225) = 50
$$

**4.** Values on either side of the peak confirm the turn:

$$
\\Pi(144) = 32, \\qquad \\Pi(324) = 32, \\qquad \\Pi(25) = -150, \\qquad \\Pi(500) \\approx -58.4
$$

**5.** The whole shape comes from the exponent mismatch: revenue scales by $2^{0.5}$ per doubling, variable cost by $2$, so revenue leads at first and loses in the end.

**Answer.** break-even at $q = 100$ and $q = 400$ | peak profit $50$ at $q = 225$`,
  },
  {
    id: "math-8-34",
    case_id: "MATH 8.34",
    title: `A Benefit and a Cost With Different Exponents`,
    context: `A city values a flood-defence programme of scale $x>0$ by the benefit $B(x)=40 x^{0.5}$ and the cost $C(x)=0.5 x^{1.5}$, both in millions. The net benefit is $B(x)-C(x)$.`,
    statements: [
      `Benefit and cost are equal at scale $x=80$.`,
      `Beyond that scale the cost exceeds the benefit.`,
      `The net benefit is largest at scale $x=80$.`,
      `Doubling the scale doubles both the benefit and the cost.`,
      `At scale $x=16$ the cost already exceeds the benefit.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) Benefit and cost are equal at scale $x=80$.**  (true)

This claim asks where the two curves meet. Setting $40x^{0.5}=0.5x^{1.5}$ and cancelling $x^{0.5}$ leaves $40=0.5x$, so the scales coincide at $x=80$.

Cancelling the common power is legitimate because the scale is strictly positive, and it turns a comparison of two curved functions into a single linear equation. The exponents differ by exactly $1$, which is why the leftover condition is linear in $x$.

Set benefit equal to cost:

$$
40x^{0.5} = 0.5x^{1.5} \\quad \\Rightarrow \\quad 40 = 0.5x^{1}
$$

$$
x = 80
$$

Confirm the shared value:

$$
B(80) = 40\\sqrt{80} \\approx 357.8, \\qquad C(80) = 0.5(80)^{1.5} \\approx 357.8
$$

Both sides are about $357.8$ million at scale $80$, so the claim is true.`,
      `**B) Beyond that scale the cost exceeds the benefit.**  (true)

This claim orders the two curves above the crossing. The ratio $C/B = x/80$ rises with scale and equals $1$ at $x=80$, so cost is the larger for every $x>80$.

The ratio argument settles the entire range at once, which a single test value could not do. It also shows the crossing is unique: a strictly increasing ratio passes through $1$ exactly once, so the ordering flips there and never flips back.

Form the ratio of the two curves:

$$
\\frac{C(x)}{B(x)} = \\frac{0.5x^{1.5}}{40x^{0.5}} = \\frac{x}{80}
$$

Read off the comparison:

$$
\\frac{x}{80} > 1 \\quad \\Longleftrightarrow \\quad x > 80
$$

Test a larger programme:

$$
B(100) = 400, \\qquad C(100) = 0.5(1000) = 500
$$

Cost exceeds benefit beyond the crossing, so the claim is true.`,
      `**C) The net benefit is largest at scale $x=80$.**  (false)

This claim puts the optimum at the break-even scale. At $x=80$ the net benefit is exactly zero, whereas smaller programmes deliver a clear surplus — around $138$ million near $x\\approx27$.

Break-even and best are different questions, and here they are as far apart as possible: the crossing is where the surplus has been fully eroded. Any scale beyond the peak still adds benefit, but adds cost faster, and by $x=80$ the accumulated extra cost has consumed the entire early gain.

Evaluate the net benefit at several scales:

$$
N(16) = 160 - 32 = 128
$$

$$
N(27) = 40(5.196) - 0.5(140.3) \\approx 207.8 - 70.1 \\approx 137.7
$$

$$
N(40) \\approx 252.98 - 126.49 \\approx 126.5
$$

Compare with the crossing:

$$
N(80) = 0
$$

The net benefit peaks near $x=27$ and is zero at $x=80$, so the claim is false.`,
      `**D) Doubling the scale doubles both the benefit and the cost.**  (false)

This claim assigns proportional growth to both curves, when neither is proportional. Doubling the scale multiplies the benefit by $2^{0.5}\\approx1.414$ and the cost by $2^{1.5}\\approx2.828$.

The difference between those two factors is the whole story of the programme. Cost grows twice as fast as benefit in proportional terms — $2.828$ against $1.414$ — which guarantees that some finite scale exhausts the surplus.

Compute the two scale factors:

$$
\\frac{B(2x)}{B(x)} = 2^{0.5} \\approx 1.4142, \\qquad \\frac{C(2x)}{C(x)} = 2^{1.5} \\approx 2.8284
$$

Check between two scales:

$$
B(40) \\approx 253.0, \\quad B(80) \\approx 357.8; \\qquad C(40) \\approx 126.5, \\quad C(80) \\approx 357.8
$$

Neither curve doubles, so the claim is false.`,
      `**E) At scale $x=16$ the cost already exceeds the benefit.**  (false)

This claim reverses the ordering at a small scale. At $x=16$ the benefit is $160$ million and the cost only $32$ million, so the programme is strongly worthwhile there.

Small scales are where the benefit curve dominates, because a square root rises steeply from zero while $x^{1.5}$ starts almost flat. The ratio confirms it directly: $16/80=0.2$, so cost is a fifth of benefit at that scale.

Evaluate both curves at $x=16$:

$$
B(16) = 40\\sqrt{16} = 40(4) = 160
$$

$$
C(16) = 0.5(16)^{1.5} = 0.5(64) = 32
$$

Compare through the ratio:

$$
\\frac{C(16)}{B(16)} = \\frac{32}{160} = 0.2 = \\frac{16}{80}
$$

Benefit far exceeds cost at that scale, so the claim is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 34,
    solution_overview: `Benefit is $B(x)=40x^{0.5}$ and cost is $C(x)=0.5x^{1.5}$ for a programme of scale $x>0$.

**Part 1: Building the model.**

Let $x$ = programme scale, $B$ = benefit, $C$ = cost, $N=B-C$ = net benefit. Both constants are given; the analysis turns on the exponents $0.5$ and $1.5$, which differ by exactly $1$.

**1. Translate: the crossing condition.**

$$
40x^{0.5} = 0.5x^{1.5}
$$

**2. Translate: the ordering.** The ratio of the two curves is the cleanest tool:

$$
\\frac{C(x)}{B(x)} = \\frac{0.5x^{1.5}}{40x^{0.5}} = \\frac{x}{80}
$$

**Part 2: The model.**

$$
N(x) = 40x^{0.5} - 0.5x^{1.5} \\tag{1}
$$

$$
\\frac{C(x)}{B(x)} = \\frac{x}{80} \\tag{2}
$$

**Part 3: Solve.**

**1.** Cancel the shared power to find the unique crossing:

$$
40 = 0.5x \\;\\Rightarrow\\; x = 80, \\qquad B = C \\approx 357.8
$$

**2.** Ratio (2) fixes the ordering on both sides:

$$
x < 80 \\;\\Rightarrow\\; B > C, \\qquad x > 80 \\;\\Rightarrow\\; C > B
$$

**3.** The net benefit is positive but not monotone on $(0,80)$:

$$
N(16) = 128, \\qquad N(27) \\approx 137.7, \\qquad N(40) \\approx 126.5, \\qquad N(80) = 0
$$

**4.** Scale factors explain why the surplus must vanish:

$$
2^{0.5} \\approx 1.414 \\text{ for benefit}, \\qquad 2^{1.5} \\approx 2.828 \\text{ for cost}
$$

**5.** The best scale sits near $x\\approx27$, far below break-even — the crossing marks the end of the worthwhile range, not its optimum.

**Answer.** crossing at $x = 80$ with $B = C \\approx 357.8$ | net benefit peaks near $x \\approx 27$`,
  },
  {
    id: "math-8-35",
    case_id: "MATH 8.35",
    title: `Furnace Throughput Calibrated From Two Runs`,
    context: `A furnace's throughput follows $T(g)=A g^{r}$ tonnes per hour, where $g>0$ is the gas feed in cubic metres per hour. Two logged runs are available: a feed of $8$ gave $20$ tonnes per hour, and a feed of $27$ gave $45$. The site licence caps throughput at $80$ tonnes per hour.`,
    statements: [
      `The exponent of the throughput law is $2/3$.`,
      `The coefficient of the throughput law is $5$.`,
      `The licensed ceiling of $80$ tonnes per hour is reached at a gas feed of $64$.`,
      `Doubling the gas feed doubles throughput.`,
      `Throughput per cubic metre of gas rises as the feed rises.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The exponent of the throughput law is $2/3$.**  (true)

This claim asks for the exponent, which two runs determine through their ratio. Dividing one run by the other cancels the coefficient and gives $(27/8)^{r}=2.25$, whose solution is $r=2/3$.

The ratio $27/8$ is a perfect cube ratio, $(3/2)^{3}$, and the throughput ratio $2.25$ is $(3/2)^{2}$. Matching the two exponents of $3/2$ gives $3r=2$ directly, so no logarithms are strictly needed — though they confirm the same value.

Divide the second run by the first:

$$
\\left(\\frac{27}{8}\\right)^{r} = \\frac{45}{20} = 2.25
$$

Write both sides as powers of $3/2$:

$$
\\left(\\left(\\tfrac{3}{2}\\right)^{3}\\right)^{r} = \\left(\\tfrac{3}{2}\\right)^{2} \\quad \\Rightarrow \\quad 3r = 2 \\quad \\Rightarrow \\quad r = \\frac{2}{3}
$$

Check with logarithms:

$$
r = \\frac{\\ln 2.25}{\\ln 3.375} = \\frac{0.8109}{1.2164} \\approx 0.6667
$$

The exponent is $2/3$, so the claim is true.`,
      `**B) The coefficient of the throughput law is $5$.**  (true)

This claim completes the calibration. With $r=2/3$ the shape factor at $g=8$ is $4$, so the coefficient is $20/4=5$.

Using the second run as an independent check is what confirms the exponent as well: $27^{2/3}=9$ and $45/9=5$, the same coefficient. Two runs producing the same coefficient means the power form fits both points exactly.

Evaluate the shape factor at the first run:

$$
8^{2/3} = \\left(8^{1/3}\\right)^{2} = 2^{2} = 4, \\qquad 4A = 20 \\;\\Rightarrow\\; A = 5
$$

Confirm with the second run:

$$
27^{2/3} = 3^{2} = 9, \\qquad \\frac{45}{9} = 5
$$

$$
T(g) = 5g^{2/3}
$$

The coefficient is $5$, so the claim is true.`,
      `**C) The licensed ceiling of $80$ tonnes per hour is reached at a gas feed of $64$.**  (true)

This claim inverts the calibrated law at the licence limit. Solving $5g^{2/3}=80$ gives $g^{2/3}=16$, and raising to the power $3/2$ returns exactly $64$.

Inverting an exponent of $2/3$ means raising to $3/2$, which magnifies the target ratio: throughput must rise fourfold from the first logged run while the feed rises eightfold, from $8$ to $64$. Estimating the feed by proportion would badly understate the gas required.

Set throughput to the ceiling:

$$
5g^{2/3} = 80 \\quad \\Rightarrow \\quad g^{2/3} = 16
$$

Raise both sides to the reciprocal power:

$$
g = 16^{3/2} = \\left(16^{1/2}\\right)^{3} = 4^{3} = 64
$$

Confirm by substitution:

$$
T(64) = 5 \\times 64^{2/3} = 5(16) = 80
$$

The ceiling binds at a feed of $64$, so the claim is true.`,
      `**D) Doubling the gas feed doubles throughput.**  (false)

This claim assumes proportional response. With exponent $2/3$, doubling the feed multiplies throughput by $2^{2/3}\\approx1.587$, a rise of about $59\\%$.

Below-one exponents always mean the input has to grow faster than the output. Here doubling throughput would take a feed multiple of $2^{3/2}\\approx2.83$ — nearly three times the gas — which is the same arithmetic as the licence calculation in part C.

Form the scale factor:

$$
\\frac{T(2g)}{T(g)} = 2^{2/3} \\approx 1.5874
$$

Find the feed multiple that really doubles throughput:

$$
k^{2/3} = 2 \\quad \\Rightarrow \\quad k = 2^{3/2} \\approx 2.83
$$

Check with logged values:

$$
T(8) = 20, \\qquad T(16) = 5 \\times 16^{2/3} \\approx 5 \\times 6.35 \\approx 31.7
$$

Throughput rises by about $59\\%$, not $100\\%$, so the claim is false.`,
      `**E) Throughput per cubic metre of gas rises as the feed rises.**  (false)

This claim reverses the behaviour of the average. Dividing throughput by the feed gives $5g^{-1/3}$, whose exponent is negative, so gas efficiency falls as the furnace is pushed harder.

Total throughput and throughput per cubic metre move in opposite directions, and the exponent decides which is which: since $2/3<1$, dividing by $g$ leaves a negative exponent. Running the furnace at the licence limit is therefore the least gas-efficient way to operate it.

Divide throughput by the feed:

$$
\\frac{T(g)}{g} = \\frac{5g^{2/3}}{g} = 5g^{-1/3}
$$

Evaluate at the three feeds in play:

$$
\\frac{20}{8} = 2.5, \\qquad \\frac{45}{27} \\approx 1.67, \\qquad \\frac{80}{64} = 1.25
$$

Efficiency halves across that range, so the claim is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 35,
    solution_overview: `Throughput is $T(g)=Ag^{r}$ tonnes per hour, with logged runs $T(8)=20$ and $T(27)=45$, under a licensed ceiling of $80$.

**Part 1: Building the model.**

Let $g$ = gas feed and $T(g)$ = throughput. Two unknowns need two runs: their ratio carries the exponent because the coefficient cancels, and either run then carries the coefficient.

**1. Translate: the ratio of the two runs.**

$$
\\left(\\frac{27}{8}\\right)^{r} = \\frac{45}{20} = 2.25
$$

**2. Translate: the coefficient from the first run.**

$$
A \\cdot 8^{r} = 20
$$

**Part 2: The model.**

$$
\\left(\\tfrac{3}{2}\\right)^{3r} = \\left(\\tfrac{3}{2}\\right)^{2} \\tag{1}
$$

$$
T(g) = A g^{r} \\tag{2}
$$

**Part 3: Solve.**

**1.** Matching exponents in (1) avoids logarithms altogether:

$$
3r = 2 \\;\\Rightarrow\\; r = \\tfrac{2}{3}
$$

**2.** Both runs give the same coefficient, confirming the fit:

$$
\\frac{20}{8^{2/3}} = \\frac{20}{4} = 5 = \\frac{45}{9}, \\qquad T(g) = 5g^{2/3}
$$

**3.** Invert at the licence ceiling using the reciprocal exponent $3/2$:

$$
g^{2/3} = 16 \\;\\Rightarrow\\; g = 16^{3/2} = 64
$$

**4.** Scale factors show the sub-proportional response:

$$
2^{2/3} \\approx 1.587 \\;(+59\\%), \\qquad \\text{doubling } T \\text{ needs } 2^{3/2} \\approx 2.83 \\text{ times the gas}
$$

**5.** Gas efficiency declines with the feed, so the licensed maximum is also the least efficient operating point:

$$
\\frac{T(g)}{g} = 5g^{-1/3}: \\quad 2.5,\\; 1.67,\\; 1.25 \\text{ at } g = 8,\\,27,\\,64
$$

**Answer.** $r = 2/3$ | $A = 5$ | $T(g) = 5g^{2/3}$ | ceiling at $g = 64$`,
  },
];
