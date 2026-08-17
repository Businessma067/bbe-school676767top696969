export const BATCH = [
  {
    id: `math-8-21`,
    case_id: `MATH 8.21`,
    title: `Square-Root Scaling at a Packing Station`,
    context: `A packing station models hourly output by $Q(x)=4x^{1/2}$ for $x>0$, where $x$ is the number of identical machine-hours assigned.`,
    statements: [
      `At $x=25$, hourly output is 20 units.`,
      `Increasing machine-hours from 25 to 100 doubles machine-hours and therefore doubles output.`,
      `The ratio $Q(x)/x$ is constant for all positive $x$.`,
      `A 1% increase in machine-hours produces a 2% increase in output.`,
      `To triple output from its level at $x=25$, machine-hours must be tripled.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) At $x=25$, hourly output is 20 units.**  (true)

Substitution gives $Q(25)=4\\sqrt{25}=4\\times 5=20$.`,
      `**B) Increasing machine-hours from 25 to 100 doubles machine-hours and therefore doubles output.**  (false)

Machine-hours rise by a factor of $100/25=4$. Output rises by $4^{1/2}=2$, not because machine-hours merely double.`,
      `**C) The ratio $Q(x)/x$ is constant for all positive $x$.**  (false)

Average output is $Q(x)/x=4x^{-1/2}$, which falls as $x$ rises.`,
      `**D) A 1% increase in machine-hours produces a 2% increase in output.**  (false)

The power exponent is the elasticity: a 1% input increase produces approximately a $0.5\\%$ output increase.`,
      `**E) To triple output from its level at $x=25$, machine-hours must be tripled.**  (false)

Tripling output requires $k^{1/2}=3$, so the input factor is $k=9$, not 3.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 21,
    solution_overview: `The model has coefficient 4 and exponent $r=1/2$. Direct evaluation gives $Q(25)=20$ and $Q(100)=40$. More generally, replacing $x$ by $kx$ multiplies output by $k^{1/2}$. Consequently, output per machine-hour is $4x^{-1/2}$, the elasticity is $1/2$, and tripling output requires nine times the input.`,
  },
  {
    id: `math-8-22`,
    case_id: `MATH 8.22`,
    title: `Calibrating a Quadratic Power Rule`,
    context: `A quality-control score follows a power rule $S(x)=Ax^r$ for $x>0$. The observed scores are $S(2)=12$ and $S(4)=48$.`,
    statements: [
      `The exponent is $r=2$.`,
      `The coefficient is $A=6$.`,
      `The calibrated rule predicts $S(3)=27$.`,
      `Doubling $x$ from any positive starting value doubles the score.`,
      `The equation $S(x)=75$ has the positive solution $x=10$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The exponent is $r=2$.**  (true)

Taking the ratio removes $A$: $48/12=(4/2)^r$, so $4=2^r$ and $r=2$.`,
      `**B) The coefficient is $A=6$.**  (false)

Using $S(2)=12$ gives $12=A\\times 2^2$, hence $A=3$, not 6.`,
      `**C) The calibrated rule predicts $S(3)=27$.**  (true)

The calibrated rule is $S(x)=3x^2$, so $S(3)=3\\times 9=27$.`,
      `**D) Doubling $x$ from any positive starting value doubles the score.**  (false)

For $r=2$, doubling $x$ multiplies $S$ by $2^2=4$.`,
      `**E) The equation $S(x)=75$ has the positive solution $x=10$.**  (false)

Solving $3x^2=75$ gives $x^2=25$ and, because $x>0$, $x=5$.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 22,
    solution_overview: `Divide the two observations to identify the exponent: $S(4)/S(2)=4=(4/2)^r=2^r$, so $r=2$. Substitution then gives $A=3$ and $S(x)=3x^2$. This rule yields $S(3)=27$, scales by a factor of four when $x$ doubles, and reaches 75 at $x=5$.`,
  },
  {
    id: `math-8-23`,
    case_id: `MATH 8.23`,
    title: `Isoelastic Price and Revenue`,
    context: `A seller faces the inverse-demand rule $p(q)=16q^{-1/2}$ for $q>0$, where $q$ is quantity and $p$ is price in euros. Revenue is $R(q)=p(q)q$.`,
    statements: [
      `Revenue can be written as $R(q)=16q^{1/2}$.`,
      `At $q=64$, price is €4.`,
      `Increasing quantity from 25 to 100 quadruples revenue.`,
      `The elasticity of price with respect to quantity is $1/2$.`,
      `Average revenue $R(q)/q$ rises as quantity rises.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) Revenue can be written as $R(q)=16q^{1/2}$.**  (true)

Multiplying by quantity adds exponents: $R(q)=16q^{-1/2}q=16q^{1/2}$.`,
      `**B) At $q=64$, price is €4.**  (false)

At $q=64$, $p=16/\\sqrt{64}=16/8=€2$, not €4.`,
      `**C) Increasing quantity from 25 to 100 quadruples revenue.**  (false)

Quantity rises by a factor of 4, so revenue rises by $4^{1/2}=2$.`,
      `**D) The elasticity of price with respect to quantity is $1/2$.**  (false)

The elasticity is the exponent $-1/2$, not $1/2$; price moves in the opposite direction.`,
      `**E) Average revenue $R(q)/q$ rises as quantity rises.**  (false)

Average revenue equals price, $16q^{-1/2}$, and therefore falls with quantity.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 23,
    solution_overview: `Revenue is found before evaluating any claims: $R(q)=q\\times 16q^{-1/2}=16q^{1/2}$. At 64 units, price is €2. A fourfold quantity change doubles revenue, while price has constant elasticity $-1/2$ and declines with quantity.`,
  },
  {
    id: `math-8-24`,
    case_id: `MATH 8.24`,
    title: `Power Output Under a Production Cap`,
    context: `A workshop's deliverable output is $Y(x)=\\min\\{3x^{2/3},48\\}$ for $x>0$. The first term is unconstrained output, while 48 is a binding physical ceiling.`,
    statements: [
      `The ceiling first binds at $x=64$.`,
      `At $x=8$, deliverable output is 12.`,
      `Doubling input from 64 to 128 multiplies deliverable output by $2^{2/3}$.`,
      `For every $x>64$, the elasticity of deliverable output with respect to input remains $2/3$.`,
      `The equation $Y(x)=24$ has the solution $x=16$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The ceiling first binds at $x=64$.**  (true)

Set unconstrained output equal to the cap: $3x^{2/3}=48$, so $x^{2/3}=16$ and $x=16^{3/2}=64$.`,
      `**B) At $x=8$, deliverable output is 12.**  (true)

At $x=8$, $3\\times 8^{2/3}=3\\times 4=12$, below the cap.`,
      `**C) Doubling input from 64 to 128 multiplies deliverable output by $2^{2/3}$.**  (false)

Both 64 and 128 are in the capped region, so output remains 48 rather than scaling by a power factor.`,
      `**D) For every $x>64$, the elasticity of deliverable output with respect to input remains $2/3$.**  (false)

Beyond 64, deliverable output is constant. Its elasticity is 0, although unconstrained output still has exponent $2/3$.`,
      `**E) The equation $Y(x)=24$ has the solution $x=16$.**  (false)

Solving $3x^{2/3}=24$ gives $x^{2/3}=8$ and $x=8^{3/2}=16\\sqrt{8}$, not 16.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 24,
    solution_overview: `The transition point solves $3x^{2/3}=48$, giving $x=64$. Below that input, the power rule governs; for example, $Y(8)=12$. At and above 64, the ceiling fixes output at 48, so further input increases have no effect. An interior target such as 24 must be solved using the uncapped branch.`,
  },
  {
    id: `math-8-25`,
    case_id: `MATH 8.25`,
    title: `A Simplifying Composition of Power Functions`,
    context: `For positive inputs, let $f(x)=8x^{3/2}$ and $g(y)=y^{2/3}$. A two-stage process applies $f$ first and then $g$.`,
    statements: [
      `The composite rule is $(g\\circ f)(x)=4x$.`,
      `The two-stage output at $x=9$ is 36.`,
      `Doubling $x$ doubles the two-stage output.`,
      `The reverse composition $(f\\circ g)(y)$ equals $4y$.`,
      `The exponent of the composite is obtained by adding $3/2$ and $2/3$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The composite rule is $(g\\circ f)(x)=4x$.**  (true)

Composition multiplies exponents: $(8x^{3/2})^{2/3}=8^{2/3}x=4x$.`,
      `**B) The two-stage output at $x=9$ is 36.**  (true)

Using the simplified composite gives $(g\\circ f)(9)=4\\times 9=36$.`,
      `**C) Doubling $x$ doubles the two-stage output.**  (true)

Because the composite has exponent 1, its output is proportional to $x$.`,
      `**D) The reverse composition $(f\\circ g)(y)$ equals $4y$.**  (false)

The reverse order gives $8(y^{2/3})^{3/2}=8y$, not $4y$.`,
      `**E) The exponent of the composite is obtained by adding $3/2$ and $2/3$.**  (false)

Nested powers multiply their exponents: $(3/2)(2/3)=1$. Addition applies when powers with the same base are multiplied.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 25,
    solution_overview: `For positive inputs, fractional-power rules can be applied without sign ambiguity. The outer exponent acts on both the coefficient and the inner power: $(8x^{3/2})^{2/3}=4x$. The reverse order is different, producing $8y$, which also shows that composition is not generally commutative.`,
  },
  {
    id: `math-8-26`,
    case_id: `MATH 8.26`,
    title: `Crossing and Dominance of Two Powers`,
    context: `Two technologies have positive-input outputs $F(x)=3x^{1/2}$ and $G(x)=x^{3/4}$. Management compares their levels and long-run growth.`,
    statements: [
      `The technologies have equal output at $x=81$.`,
      `For every $0<x<81$, technology $G$ has the larger output.`,
      `As $x\\to\\infty$, the ratio $F(x)/G(x)$ tends to infinity.`,
      `Doubling input multiplies $F$ and $G$ by the same factor.`,
      `The equation $F(x)=G(x)$ has no positive solution because the exponents differ.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The technologies have equal output at $x=81$.**  (true)

Equality gives $3x^{1/2}=x^{3/4}$. Dividing by $x^{1/2}>0$ yields $x^{1/4}=3$, hence $x=81$.`,
      `**B) For every $0<x<81$, technology $G$ has the larger output.**  (false)

For small positive $x$, $x^{1/4}<3$, so $G/F=x^{1/4}/3<1$ and $F$ is larger.`,
      `**C) As $x\\to\\infty$, the ratio $F(x)/G(x)$ tends to infinity.**  (false)

The ratio is $F/G=3x^{-1/4}$, which tends to 0. The larger exponent eventually dominates.`,
      `**D) Doubling input multiplies $F$ and $G$ by the same factor.**  (false)

Doubling multiplies $F$ by $2^{1/2}$ and $G$ by $2^{3/4}$; these factors differ.`,
      `**E) The equation $F(x)=G(x)$ has no positive solution because the exponents differ.**  (false)

Different exponents do not prevent a crossing. Here the coefficient 3 produces the positive crossing $x=81$.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 26,
    solution_overview: `Factor out the lower power when comparing the technologies. Equality reduces to $x^{1/4}=3$, giving the crossing at 81. The ratio $F/G=3x^{-1/4}$ is above one before the crossing, equals one there, and tends to zero afterward. Thus the $3/4$ power dominates in the long run.`,
  },
  {
    id: `math-8-27`,
    case_id: `MATH 8.27`,
    title: `A Tiered Ceiling for Server Capacity`,
    context: `A service has effective capacity $C(x)=\\min\\{5x^{2/5},20\\}$ for $0<x\\le 32$, and $C(x)=24$ for $x>32$. The second branch reflects a discrete infrastructure upgrade.`,
    statements: [
      `Immediately before the upgrade threshold, the power branch reaches capacity 20.`,
      `The effective-capacity function is continuous at $x=32$.`,
      `At $x=1$, effective capacity is 20.`,
      `Increasing $x$ from 1 to 32 multiplies effective capacity by $32^{2/5}=4$.`,
      `For $x>32$, a 10% increase in $x$ increases effective capacity by approximately 4%.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) Immediately before the upgrade threshold, the power branch reaches capacity 20.**  (true)

Since $32^{2/5}=(2^5)^{2/5}=4$, the power output at 32 is $5\\times 4=20$.`,
      `**B) The effective-capacity function is continuous at $x=32$.**  (false)

The left-hand value is 20, while the right-hand branch is 24. The upgrade creates an upward jump.`,
      `**C) At $x=1$, effective capacity is 20.**  (false)

At $x=1$, the power branch gives $\\min\\{5,20\\}=5$.`,
      `**D) Increasing $x$ from 1 to 32 multiplies effective capacity by $32^{2/5}=4$.**  (true)

Capacity rises from 5 to 20, a factor of 4, and $32^{2/5}=(2^5)^{2/5}=4$.`,
      `**E) For $x>32$, a 10% increase in $x$ increases effective capacity by approximately 4%.**  (false)

On the branch $x>32$, capacity is the constant 24 and has elasticity 0.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 27,
    solution_overview: `The exact identity $32^{2/5}=4$ makes the threshold easy to evaluate. The capped lower regime reaches 20 at $x=32$, but the upgraded regime starts at 24, so there is a jump. Capacity moves from 5 to 20 between 1 and 32 and then remains constant above the threshold.`,
  },
  {
    id: `math-8-28`,
    case_id: `MATH 8.28`,
    title: `Labor Choice with Square-Root Revenue`,
    context: `A contractor chooses labor hours $\\ell>0$. Revenue is $R(\\ell)=24\\ell^{1/2}$ and the wage bill is $W(\\ell)=4\\ell$, so operating profit is $\\pi(\\ell)=24\\ell^{1/2}-4\\ell$.`,
    statements: [
      `The marginal-revenue term is $12\\ell^{-1/2}$.`,
      `The unique interior profit-maximizing choice is $\\ell=9$.`,
      `Maximum operating profit is 36.`,
      `At the optimum, revenue equals the wage bill.`,
      `Doubling labor from any level doubles revenue and doubles the wage bill.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The marginal-revenue term is $12\\ell^{-1/2}$.**  (true)

The power rule gives $R'(\\ell)=24(1/2)\\ell^{-1/2}=12\\ell^{-1/2}$.`,
      `**B) The unique interior profit-maximizing choice is $\\ell=9$.**  (true)

Set marginal revenue equal to the wage: $12/\\sqrt{\\ell}=4$, so $\\sqrt{\\ell}=3$ and $\\ell=9$. Since $\\pi''(\\ell)=-6\\ell^{-3/2}<0$, this is the unique maximum.`,
      `**C) Maximum operating profit is 36.**  (true)

At 9 hours, profit is $24\\times 3-4\\times 9=72-36=36$.`,
      `**D) At the optimum, revenue equals the wage bill.**  (false)

At the optimum revenue is 72 and the wage bill is 36. Revenue is twice the wage bill.`,
      `**E) Doubling labor from any level doubles revenue and doubles the wage bill.**  (false)

The linear wage bill doubles, but square-root revenue is multiplied only by $2^{1/2}$.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 28,
    solution_overview: `Differentiate the profit function and equate marginal revenue to the constant marginal wage cost. This gives $12/\\sqrt{\\ell}=4$ and hence $\\ell=9$. Negative second derivative confirms a maximum. At that choice, revenue is 72, the wage bill is 36, and operating profit is 36.`,
  },
  {
    id: `math-8-29`,
    case_id: `MATH 8.29`,
    title: `Allocating Output Across Two Power-Cost Plants`,
    context: `A firm must produce 12 units. If plant 1 produces $q$ units, plant 2 produces $12-q$, where $0<q<12$. Their costs are $C_1(q)=q^2$ and $C_2(12-q)=4(12-q)^{3/2}$.`,
    statements: [
      `The cost-minimizing allocation is $q=8$ at plant 1 and 4 units at plant 2.`,
      `The first-order condition is $2q=4(12-q)^{1/2}$.`,
      `At the minimizing allocation, total cost is 80.`,
      `Equalizing the two plants' output levels is sufficient for minimum cost.`,
      `Because both cost exponents exceed 1, assigning all 12 units to plant 1 must be optimal.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The cost-minimizing allocation is $q=8$ at plant 1 and 4 units at plant 2.**  (true)

Total cost is $C(q)=q^2+4(12-q)^{3/2}$. Its derivative is $2q-6\\sqrt{12-q}$. Setting this to zero gives $q=3\\sqrt{12-q}$. Squaring yields $q^2+9q-108=0$, whose feasible root is $q=8$.`,
      `**B) The first-order condition is $2q=4(12-q)^{1/2}$.**  (false)

Plant 2's marginal cost is $4(3/2)(12-q)^{1/2}=6\\sqrt{12-q}$. The correct condition is $2q=6\\sqrt{12-q}$.`,
      `**C) At the minimizing allocation, total cost is 80.**  (false)

At $(q,12-q)=(8,4)$, cost is $8^2+4\\times 4^{3/2}=64+32=96$.`,
      `**D) Equalizing the two plants' output levels is sufficient for minimum cost.**  (false)

Cost minimization equalizes marginal costs, not output levels. The optimum outputs 8 and 4 are unequal.`,
      `**E) Because both cost exponents exceed 1, assigning all 12 units to plant 1 must be optimal.**  (false)

Convexity supports an interior marginal-cost allocation here; it does not imply concentration in one plant. The endpoint $q=12$ costs 144, above 96.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 29,
    solution_overview: `Write the one-variable total cost as $q^2+4(12-q)^{3/2}$. Differentiation gives the marginal-cost balance $2q=6\\sqrt{12-q}$. The feasible solution is $q=8$, and strict convexity, $C''(q)=2+3/\\sqrt{12-q}>0$, confirms the minimum. The resulting total cost is 96, below either relevant endpoint comparison.`,
  },
  {
    id: `math-8-30`,
    case_id: `MATH 8.30`,
    title: `Testing a Calibrated Power Law`,
    context: `An analyst proposes one power law $F(x)=Ax^r$ for $x>0$. Two reliable observations are $F(1)=12$ and $F(4)=24$; a third report lists $F(9)=40$.`,
    statements: [
      `The two reliable observations imply $A=12$ and $r=1/2$.`,
      `Under the calibrated rule, $F(9)=36$.`,
      `The third report is consistent with the same exact power law.`,
      `Under the calibrated rule, increasing $x$ by 21% increases $F(x)$ by exactly 21%.`,
      `The calibrated rule has constant average product $F(x)/x$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The two reliable observations imply $A=12$ and $r=1/2$.**  (true)

From $F(1)=A=12$. Then $24=12\\times 4^r$ gives $4^r=2$ and $r=1/2$.`,
      `**B) Under the calibrated rule, $F(9)=36$.**  (true)

The rule is $F(x)=12\\sqrt{x}$, so $F(9)=12\\times 3=36$.`,
      `**C) The third report is consistent with the same exact power law.**  (false)

The exact prediction is 36, whereas the report says 40; all three points cannot lie on that calibrated law.`,
      `**D) Under the calibrated rule, increasing $x$ by 21% increases $F(x)$ by exactly 21%.**  (false)

An input factor of 1.21 produces an output factor of $1.21^{1/2}=1.1$, so the increase is 10%, not 21%.`,
      `**E) The calibrated rule has constant average product $F(x)/x$.**  (false)

Average product is $12x^{-1/2}$, which decreases rather than remaining constant.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 30,
    solution_overview: `The observation at one identifies $A$ directly. The observation at four then identifies $r=1/2$, producing $F(x)=12\\sqrt{x}$. This predicts 36 at nine, so the reported 40 is inconsistent. The exact square-root relationship also maps a 21% input increase to a 10% output increase, while average product declines.`,
  },
  {
    id: `math-8-31`,
    case_id: `MATH 8.31`,
    title: `Inverse Demand from a Negative Power`,
    context: `Market quantity demanded is $Q(p)=81p^{-2}$ for $p>0$. The firm rewrites demand in inverse form and studies revenue as a function of quantity.`,
    statements: [
      `The inverse-demand function is $p(Q)=9Q^{-1/2}$.`,
      `Revenue as a function of quantity is $R(Q)=9Q^{1/2}$.`,
      `At $Q=9$, price and revenue are 3 and 27, respectively.`,
      `A fourfold increase in price reduces quantity demanded by 50%.`,
      `The price elasticity of quantity demanded is $-1/2$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The inverse-demand function is $p(Q)=9Q^{-1/2}$.**  (true)

From $Q=81p^{-2}=81/p^2$, one gets $p^2=81/Q$ and, since price is positive, $p=9Q^{-1/2}$.`,
      `**B) Revenue as a function of quantity is $R(Q)=9Q^{1/2}$.**  (true)

Multiply inverse price by quantity: $R(Q)=Q\\times 9Q^{-1/2}=9Q^{1/2}$.`,
      `**C) At $Q=9$, price and revenue are 3 and 27, respectively.**  (true)

At $Q=9$, price is $9/3=3$ and revenue is $9\\times 3=27$.`,
      `**D) A fourfold increase in price reduces quantity demanded by 50%.**  (false)

A price factor of 4 multiplies quantity by $4^{-2}=1/16$, a reduction of $15/16=93.75\\%$.`,
      `**E) The price elasticity of quantity demanded is $-1/2$.**  (false)

In the original demand function, the elasticity of quantity with respect to price is the exponent $-2$. The value $-1/2$ belongs to inverse demand.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 31,
    solution_overview: `Solve the negative-power equation using positivity: $Q=81/p^2$ implies $p=9/\\sqrt{Q}$. Revenue then becomes $9\\sqrt{Q}$. At nine units, price is 3 and revenue 27. The original demand elasticity is $-2$, so a fourfold price increase leaves only one-sixteenth of the original quantity.`,
  },
  {
    id: `math-8-32`,
    case_id: `MATH 8.32`,
    title: `Marginal and Average Products of a Power Technology`,
    context: `A production technology is $Y(x)=10x^{3/5}$ for $x>0$. Define average product by $AP(x)=Y(x)/x$ and marginal product by $MP(x)=Y'(x)$.`,
    statements: [
      `$AP(x)=10x^{-2/5}$.`,
      `$MP(x)=6x^{-2/5}$.`,
      `For every positive $x$, $MP(x)=(3/5)AP(x)$.`,
      `Multiplying input by 32 multiplies output by 8.`,
      `The elasticity $MP(x)x/Y(x)$ equals $3/5$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) $AP(x)=10x^{-2/5}$.**  (true)

Dividing by $x$ subtracts one from the exponent: $AP=10x^{3/5-1}=10x^{-2/5}$.`,
      `**B) $MP(x)=6x^{-2/5}$.**  (true)

The derivative is $MP=10(3/5)x^{3/5-1}=6x^{-2/5}$.`,
      `**C) For every positive $x$, $MP(x)=(3/5)AP(x)$.**  (true)

Both measures contain $x^{-2/5}$, and their coefficient ratio is $6/10=3/5$.`,
      `**D) Multiplying input by 32 multiplies output by 8.**  (true)

The scaling factor is $32^{3/5}=(2^5)^{3/5}=2^3=8$.`,
      `**E) The elasticity $MP(x)x/Y(x)$ equals $3/5$.**  (true)

Substitution gives $(6x^{-2/5})x/(10x^{3/5})=6/10=3/5$, the power exponent.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `Dividing and differentiating both reduce the original exponent by one, so average and marginal product share the factor $x^{-2/5}$. Their constant ratio is $3/5$. The same exponent governs scale changes and elasticity: a factor 32 in input becomes a factor 8 in output, and $MP\\times x/Y=3/5$.`,
  },
  {
    id: `math-8-33`,
    case_id: `MATH 8.33`,
    title: `Profit Choice with a Fixed Operating Charge`,
    context: `A project using input $x>0$ earns revenue $R(x)=16x^{3/4}$. Variable input costs €3 per unit, and operating the project incurs a fixed charge of €200. Thus $\\pi(x)=16x^{3/4}-3x-200$. The firm may alternatively not operate and earn zero.`,
    statements: [
      `Conditional on operating, the unique profit-maximizing input is $x=256$.`,
      `At $x=256$, revenue is €512.`,
      `At the interior optimum, variable cost equals revenue.`,
      `The maximized operating profit is negative, so shutting down is preferable.`,
      `Removing the fixed charge would change the first-order condition and the maximizing input.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) Conditional on operating, the unique profit-maximizing input is $x=256$.**  (true)

The derivative is $\\pi'(x)=12x^{-1/4}-3$. Setting it to zero gives $x^{1/4}=4$ and $x=4^4=256$. Also $\\pi''(x)=-3x^{-5/4}<0$, so this is the unique conditional maximum.`,
      `**B) At $x=256$, revenue is €512.**  (false)

Since $256^{1/4}=4$, $256^{3/4}=4^3=64$. Revenue is $16\\times 64=€1,024$, not €512.`,
      `**C) At the interior optimum, variable cost equals revenue.**  (false)

Variable cost is $3\\times 256=€768$, while revenue is €1,024. Their difference is the €256 operating surplus before the fixed charge.`,
      `**D) The maximized operating profit is negative, so shutting down is preferable.**  (false)

Net profit is $1,024-768-200=€56$, which is positive. Operating therefore beats the zero shutdown payoff, contrary to the claim.`,
      `**E) Removing the fixed charge would change the first-order condition and the maximizing input.**  (false)

A fixed charge disappears upon differentiation. Removing it raises profit by €200 but leaves $12x^{-1/4}-3=0$ and $x=256$ unchanged.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 33,
    solution_overview: `The fixed charge affects the participation decision but not the interior first-order condition. Equating $12x^{-1/4}$ to 3 gives $x=256$, and concavity confirms the conditional optimum. At that input, revenue is €1,024 and variable cost €768, leaving €256 before the fixed charge and €56 afterward. Because €56 exceeds the shutdown payoff, the firm operates.`,
  },
  {
    id: `math-8-34`,
    case_id: `MATH 8.34`,
    title: `Net Benefit from Competing Power Terms`,
    context: `For scale $x>0$, a program's net benefit before fixed administration cost is $N(x)=2x^{3/2}-8x^{1/2}$. Analysts compare signs, turning points, and asymptotic behavior.`,
    statements: [
      `$N(x)=0$ at $x=4$.`,
      `As $x\\to\\infty$, $N(x)/(2x^{3/2})\\to 1$.`,
      `$N(x)$ is positive for every $x>0$.`,
      `The only stationary point occurs at $x=4$.`,
      `For every $x>4$, the elasticity $xN'(x)/N(x)$ is below $3/2$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) $N(x)=0$ at $x=4$.**  (true)

Factor the expression: $N(x)=2x^{1/2}(x-4)$. For positive $x$, it vanishes exactly when $x=4$.`,
      `**B) As $x\\to\\infty$, $N(x)/(2x^{3/2})\\to 1$.**  (true)

The ratio is $1-4/x$, which tends to 1. The $x^{3/2}$ term dominates the lower power asymptotically.`,
      `**C) $N(x)$ is positive for every $x>0$.**  (false)

The factor $2\\sqrt{x}$ is positive, but $x-4$ is negative on $0<x<4$. Hence net benefit is negative there.`,
      `**D) The only stationary point occurs at $x=4$.**  (false)

Differentiate: $N'(x)=3x^{1/2}-4x^{-1/2}=x^{-1/2}(3x-4)$. The stationary point is $x=4/3$, not 4.`,
      `**E) For every $x>4$, the elasticity $xN'(x)/N(x)$ is below $3/2$.**  (false)

For $x>4$, elasticity is $(3x-4)/(2(x-4))$. Subtracting $3/2$ gives $8/[2(x-4)]=4/(x-4)>0$, so it is above $3/2$ and approaches that value from above.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 34,
    solution_overview: `Factoring gives $N(x)=2\\sqrt{x}(x-4)$, which identifies the zero and sign change at 4. Differentiation instead locates the stationary point at $4/3$; zeros and turning points must not be conflated. Dividing by the leading term gives $1-4/x$, establishing asymptotic equivalence. For $x>4$, the net-benefit elasticity exceeds $3/2$ because the denominator is reduced by the negative lower-power term.`,
  },
  {
    id: `math-8-35`,
    case_id: `MATH 8.35`,
    title: `Calibrated Power Output Through a Capacity Ceiling`,
    context: `Uncapped output follows $U(x)=Ax^r$ for $x>0$. Observations below capacity give $U(4)=12$ and $U(9)=18$. Delivered output is $D(x)=\\min\\{U(x),54\\}$. A downstream index is $H(y)=(y/6)^2$.`,
    statements: [
      `The uncapped rule is $U(x)=6x^{1/2}$.`,
      `The delivery ceiling first binds at $x=81$.`,
      `For $0<x\\le 81$, the composite index satisfies $H(D(x))=x$.`,
      `For every $x>81$, $H(D(x))=x$.`,
      `As $x\\to\\infty$, $D(x)/U(x)$ tends to 1.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The uncapped rule is $U(x)=6x^{1/2}$.**  (true)

The observation ratio gives $18/12=(9/4)^r$. Since $3/2=(3/2)^{2r}$, $2r=1$ and $r=1/2$. Then $12=A\\sqrt{4}=2A$, so $A=6$.`,
      `**B) The delivery ceiling first binds at $x=81$.**  (true)

Set uncapped output equal to 54: $6\\sqrt{x}=54$, so $\\sqrt{x}=9$ and $x=81$.`,
      `**C) For $0<x\\le 81$, the composite index satisfies $H(D(x))=x$.**  (true)

Up to the threshold, $D(x)=6\\sqrt{x}$. Therefore $H(D(x))=(6\\sqrt{x}/6)^2=x$. Equality also holds at $x=81$.`,
      `**D) For every $x>81$, $H(D(x))=x$.**  (false)

Above the threshold, $D(x)=54$, so $H(D(x))=(54/6)^2=81$, not $x$. The downstream index also inherits the ceiling.`,
      `**E) As $x\\to\\infty$, $D(x)/U(x)$ tends to 1.**  (false)

For $x>81$, the ratio is $54/(6\\sqrt{x})=9/\\sqrt{x}$, which tends to 0 rather than 1.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 35,
    solution_overview: `Use both uncapped observations before considering the ceiling. Their ratio identifies $r=1/2$, and substitution gives $A=6$. The cap equation $6\\sqrt{x}=54$ yields the threshold 81. Before and at that point, the downstream square reverses the square-root rule exactly, giving $H(D(x))=x$. Beyond it, delivered output is fixed at 54, the downstream index is fixed at 81, and delivered output becomes negligible relative to ever-growing uncapped output.`,
  },
];
