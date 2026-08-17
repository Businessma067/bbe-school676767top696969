/** MATH 8.11–8.15 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-11",
    case_id: "MATH 8.11",
    title: `Isoelastic Subscription Demand and Its Revenue`,
    context: `Monthly subscriptions follow the isoelastic demand curve $q(p)=A p^{-2}$, where $p>0$ is the price in euros. At a price of $5$ the service sells $400$ subscriptions. Management wants to know what the curve implies for quantity and for revenue $R=pq$.`,
    statements: [
      `The price elasticity of demand is $-2$.`,
      `A price rise of $10\\%$ lowers quantity by exactly $20\\%$.`,
      `Halving the price quadruples the number of subscriptions.`,
      `Revenue does not depend on the price.`,
      `At a price of $20$ the curve gives $50$ subscriptions.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The price elasticity of demand is $-2$.**  (true)

This claim reads the elasticity off the demand curve. For a power function the elasticity is the exponent itself, constant at every price, and here that exponent is $-2$.

The word "isoelastic" is the structural hint: the elasticity does not drift as price moves, unlike a straight-line demand curve, where elasticity changes at every point. That is precisely why one number describes the whole curve.

Recover the coefficient so the curve is fully specified:

$$
A(5)^{-2} = 400 \\quad \\Rightarrow \\quad \\frac{A}{25} = 400 \\quad \\Rightarrow \\quad A = 10000
$$

$$
q(p) = 10000\\,p^{-2}
$$

Read the elasticity from the exponent and confirm with a small change:

$$
\\text{El}_{p}q = -2, \\qquad \\frac{q(1.01p)}{q(p)} = 1.01^{-2} \\approx 0.9803 \\;\\Rightarrow\\; -1.97\\%
$$

A one percent price rise costs about two percent of quantity, so the claim is true.`,
      `**B) A price rise of $10\\%$ lowers quantity by exactly $20\\%$.**  (false)

This claim turns the elasticity into an exact prediction for a large price move. The true factor is $1.1^{-2}\\approx0.8264$, a fall of about $17.4\\%$, so the drop is smaller than the claimed $20\\%$.

Elasticity multiplies percentage changes only in the limit of very small moves. For a $1\\%$ rise the approximation is excellent, as part A showed; for a $10\\%$ rise the exact power calculation and the linear shortcut separate visibly, and the word "exactly" is what makes the claim fail.

Apply the exact scale factor:

$$
\\frac{q(1.1p)}{q(p)} = 1.1^{-2} = \\frac{1}{1.21} \\approx 0.8264
$$

Convert to a percentage change:

$$
1 - 0.8264 = 0.1736 \\approx 17.4\\%
$$

Check on the observed price:

$$
q(5) = 400, \\qquad q(5.5) = \\frac{10000}{30.25} \\approx 330.6
$$

Quantity falls by about $17.4\\%$, not exactly $20\\%$, so the claim is false.`,
      `**C) Halving the price quadruples the number of subscriptions.**  (true)

This claim is a scale-factor question, so the coefficient plays no part. Halving the price multiplies quantity by $(1/2)^{-2}=4$.

Negative exponents are where sign slips happen: the multiplier $1/2$ is raised to $-2$, which inverts and then squares, giving $4$ rather than $1/4$. The result is exact for any halving, however large the price, which is the practical content of constant elasticity.

Form the scale factor with multiplier $1/2$:

$$
\\frac{q(p/2)}{q(p)} = \\left(\\frac{1}{2}\\right)^{-2} = 2^{2} = 4
$$

Verify at the observed price:

$$
q(5) = 400, \\qquad q(2.5) = \\frac{10000}{6.25} = 1600
$$

Subscriptions quadruple from $400$ to $1600$, so the claim is true.`,
      `**D) Revenue does not depend on the price.**  (false)

This claim describes the borderline case of unit elasticity, which is not the curve in front of us. Multiplying price by quantity gives $R(p)=10000\\,p^{-1}$, so revenue falls as price rises.

Revenue is price-independent only when the elasticity is exactly $-1$, since then the exponents $+1$ and $-1$ cancel. With elasticity $-2$ the quantity loss outweighs the price gain, leaving revenue strictly decreasing — the standard elastic-demand conclusion.

Build revenue from the curve:

$$
R(p) = p\\,q(p) = p \\times 10000 p^{-2} = 10000 p^{-1}
$$

Evaluate at two prices:

$$
R(5) = \\frac{10000}{5} = 2000, \\qquad R(10) = \\frac{10000}{10} = 1000
$$

Doubling the price halves revenue, so revenue clearly depends on price and the claim is false.`,
      `**E) At a price of $20$ the curve gives $50$ subscriptions.**  (false)

This claim evaluates the curve at a price four times the observed one. The correct quantity is $25$ subscriptions; the claimed $50$ would follow from an elasticity of $-1$, not $-2$.

The slip is easy to see through the scale factor: quadrupling the price divides quantity by $4^{2}=16$, taking $400$ down to $25$. Dividing by $4$ instead — that is, using the price multiplier itself rather than its square — produces exactly the claimed $50$.

Evaluate the curve directly:

$$
q(20) = \\frac{10000}{20^{2}} = \\frac{10000}{400} = 25
$$

Cross-check with the scale factor from the observed price:

$$
\\frac{q(20)}{q(5)} = 4^{-2} = \\frac{1}{16}, \\qquad \\frac{400}{16} = 25
$$

The curve gives $25$ subscriptions, not $50$, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 11,
    solution_overview: `Demand is isoelastic, $q(p)=Ap^{-2}$, with $q(5)=400$. Revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros, $q$ = subscriptions, $R$ = revenue. The exponent is given by the isoelastic form, so the single observed price-quantity pair pins the coefficient, and revenue is then a derived power function.

**1. Translate: the observed pair.**

$$
A(5)^{-2} = 400 \\quad \\Rightarrow \\quad \\frac{A}{25} = 400
$$

**2. Translate: revenue.** Multiplying by $p$ adds $1$ to the exponent:

$$
R(p) = p \\cdot A p^{-2} = A p^{-1}
$$

**Part 2: The model.**

$$
q(p) = 10000\\,p^{-2} \\tag{1}
$$

$$
R(p) = 10000\\,p^{-1} \\tag{2}
$$

**Part 3: Solve.**

**1.** The coefficient follows from the observed pair:

$$
A = 400 \\times 25 = 10000
$$

**2.** The elasticity is the exponent, the same at every price:

$$
\\text{El}_{p}q = -2
$$

**3.** Exact scale factors, which elasticity only approximates for small moves:

$$
1.1^{-2} \\approx 0.8264 \\;(-17.4\\%), \\qquad \\left(\\tfrac{1}{2}\\right)^{-2} = 4, \\qquad 4^{-2} = \\tfrac{1}{16}
$$

**4.** Levels along the curve:

$$
q(5) = 400, \\qquad q(2.5) = 1600, \\qquad q(20) = 25
$$

**5.** Revenue in (2) has exponent $-1$, so it falls as price rises; it would be price-independent only if demand elasticity were exactly $-1$:

$$
R(5) = 2000, \\qquad R(10) = 1000
$$

**Answer.** $A = 10000$ | $q(p) = 10000p^{-2}$ | $R(p) = 10000p^{-1}$ | elasticity $-2$`,
  },
  {
    id: "math-8-12",
    case_id: "MATH 8.12",
    title: `Audit Fees With a Fixed Charge on Top of a Power Term`,
    context: `An audit firm bills $C(n)=F + a n^{0.5}$ for a client with $n>0$ accounts, where $F$ is a fixed engagement charge. Two completed engagements are on file: $100$ accounts were billed at $500$, and $400$ accounts at $800$.`,
    statements: [
      `The fixed engagement charge is $200$.`,
      `Total cost is a power function of the number of accounts.`,
      `Cost per account falls as the number of accounts rises.`,
      `An engagement covering $900$ accounts is billed at $1100$.`,
      `Doubling the accounts from $100$ to $200$ raises the bill by more than $50\\%$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A) The fixed engagement charge is $200$.**  (true)

This claim asks for the constant part of the fee, which no single engagement reveals on its own. Differencing the two engagements removes $F$, gives $a=30$, and substituting back leaves $F=200$.

The point of differencing is that the fixed charge appears in both bills with the same weight, so it cancels. The variable part does not cancel, because the two engagements have different shape factors, $\\sqrt{100}=10$ and $\\sqrt{400}=20$.

Write both engagements:

$$
F + 10a = 500, \\qquad F + 20a = 800
$$

Subtract to eliminate the fixed charge:

$$
10a = 300 \\quad \\Rightarrow \\quad a = 30
$$

Substitute back:

$$
F = 500 - 10(30) = 200, \\qquad C(n) = 200 + 30\\sqrt{n}
$$

The fixed charge is $200$, so the claim is true.`,
      `**B) Total cost is a power function of the number of accounts.**  (false)

This claim misreads the structure of the fee. A power function has the form $An^{r}$ and nothing else; adding a constant produces $200+30\\sqrt{n}$, which is a sum of a constant and a power function, not a power function itself.

The clean test is the scale factor. A genuine power function multiplies by $k^{r}$ whenever the input is multiplied by $k$, with a factor that does not depend on where you start. Here the factor drifts, which is the fingerprint of the extra constant.

Compare two quadruplings, both multiplying accounts by $4$:

$$
\\frac{C(400)}{C(100)} = \\frac{800}{500} = 1.6
$$

$$
\\frac{C(1600)}{C(400)} = \\frac{200 + 30(40)}{800} = \\frac{1400}{800} = 1.75
$$

A power function with exponent $0.5$ would give the same factor $4^{0.5}=2$ both times. The factors differ, so total cost is not a power function and the claim is false.`,
      `**C) Cost per account falls as the number of accounts rises.**  (true)

This claim is about the average fee. Dividing the bill by the number of accounts gives $200n^{-1}+30n^{-0.5}$, a sum of two decreasing terms, so the average falls throughout.

Both pieces work in the same direction, which is what makes the conclusion airtight: the fixed charge is spread over more accounts, and the variable part also thins out because its exponent, $0.5$, is below $1$. If the variable exponent had exceeded $1$, the two forces would have pulled against each other and the answer would depend on $n$.

Divide the fee by the number of accounts:

$$
\\frac{C(n)}{n} = \\frac{200}{n} + \\frac{30\\sqrt{n}}{n} = 200n^{-1} + 30n^{-0.5}
$$

Both exponents are negative, so both terms decline. Check the filed engagements:

$$
\\frac{500}{100} = 5, \\qquad \\frac{800}{400} = 2, \\qquad \\frac{1100}{900} \\approx 1.22
$$

Cost per account falls from $5$ to about $1.22$, so the claim is true.`,
      `**D) An engagement covering $900$ accounts is billed at $1100$.**  (true)

This claim extrapolates the recovered fee schedule to a larger engagement. With $F=200$ and $a=30$, the $900$-account bill is $200+30(30)=1100$.

The arithmetic is easy once both constants are known, but the check that matters is that $900$ is a perfect square, so the shape factor $\\sqrt{900}=30$ is exact and no rounding enters. It is also a useful sanity point: accounts rise ninefold from the first engagement while the bill only slightly more than doubles.

Evaluate the recovered schedule:

$$
C(900) = 200 + 30\\sqrt{900} = 200 + 30(30) = 200 + 900 = 1100
$$

Compare with the filed engagements to see the shape:

$$
C(100) = 500, \\qquad C(400) = 800, \\qquad C(900) = 1100
$$

Each equal step in $\\sqrt{n}$ adds exactly $300$, confirming the schedule, so the claim is true.`,
      `**E) Doubling the accounts from $100$ to $200$ raises the bill by more than $50\\%$.**  (false)

This claim overstates how fast the bill grows. Doubling from $100$ to $200$ accounts takes the fee from $500$ to about $624$, a rise of roughly $25\\%$.

Two effects hold the increase down. The variable term rises only by the factor $\\sqrt{2}\\approx1.414$, and the fixed charge of $200$ does not rise at all — it dilutes every percentage change in the total. Even the variable part alone would have gained only $41\\%$, short of the claimed $50\\%$.

Evaluate the fee at the doubled engagement:

$$
C(200) = 200 + 30\\sqrt{200} \\approx 200 + 30(14.142) \\approx 624.3
$$

Express the change as a percentage:

$$
\\frac{624.3}{500} \\approx 1.249 \\quad \\Rightarrow \\quad +24.9\\%
$$

The bill rises by about a quarter, not by more than half, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 12,
    solution_overview: `Audit fees are $C(n)=F+an^{0.5}$ for $n>0$ accounts, with $C(100)=500$ and $C(400)=800$.

**Part 1: Building the model.**

Let $n$ = accounts, $F$ = fixed engagement charge, $a$ = coefficient of the variable term. Two unknowns need the two filed engagements, and because $F$ enters both bills identically it can be removed by differencing.

**1. Translate: the $100$-account engagement.**

$$
F + a\\sqrt{100} = 500
$$

**2. Translate: the $400$-account engagement.**

$$
F + a\\sqrt{400} = 800
$$

**Part 2: The model.**

$$
F + 10a = 500 \\tag{1}
$$

$$
F + 20a = 800 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting (1) from (2) eliminates the fixed charge:

$$
10a = 300 \\;\\Rightarrow\\; a = 30, \\qquad F = 500 - 300 = 200
$$

$$
C(n) = 200 + 30\\sqrt{n}
$$

**2.** The schedule extrapolates cleanly at perfect squares:

$$
C(900) = 200 + 900 = 1100, \\qquad C(1600) = 200 + 1200 = 1400
$$

**3.** The fee is *not* a power function: equal quadruplings give different factors:

$$
\\frac{C(400)}{C(100)} = 1.6, \\qquad \\frac{C(1600)}{C(400)} = 1.75
$$

**4.** Average fee splits into two declining power terms:

$$
\\frac{C(n)}{n} = 200n^{-1} + 30n^{-0.5}, \\qquad 5 \\to 2 \\to 1.22 \\text{ across the three engagements}
$$

**5.** Doubling the accounts moves the variable term by $\\sqrt{2}$ only, and the fixed charge damps the total further:

$$
C(200) \\approx 624.3 \\quad (+24.9\\%)
$$

**Answer.** $F = 200$ | $a = 30$ | $C(n) = 200 + 30\\sqrt{n}$`,
  },
  {
    id: "math-8-13",
    case_id: "MATH 8.13",
    title: `Fleet Growth Combined With Falling Emission Intensity`,
    context: `An electric-vehicle programme is tracked by two linked power laws. The fleet after $t>0$ years is $a(t)=4t^{0.5}$ thousand vehicles, and average emission intensity falls with fleet size according to $e(a)=120a^{-0.5}$ kilograms per thousand vehicles. Total fleet emissions are $E(t)=a(t)\\,e\\big(a(t)\\big)$.`,
    statements: [
      `Total fleet emissions are a power function of time with exponent $0.5$.`,
      `After $16$ years total fleet emissions are $960$.`,
      `Total fleet emissions rise as the programme runs longer.`,
      `Doubling the elapsed time doubles total fleet emissions.`,
      `Emission intensity rises as the fleet grows.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A) Total fleet emissions are a power function of time with exponent $0.5$.**  (false)

This claim gets the composition half right. Total emissions are indeed a power function of time, but the exponent is $0.25$, not $0.5$: multiplying fleet size by intensity leaves $120a^{0.5}$, and substituting $a(t)=4t^{0.5}$ halves the exponent again.

The exponent $0.5$ is the one belonging to the *fleet* law, and carrying it through unchanged is the natural slip. Each stage of a chain multiplies exponents, and here two successive square roots compress time into a fourth root.

Multiply fleet size by intensity:

$$
E = a \\times 120a^{-0.5} = 120 a^{0.5}
$$

Substitute the fleet law:

$$
E(t) = 120\\left(4t^{0.5}\\right)^{0.5} = 120 \\times 4^{0.5} \\times t^{0.25} = 240\\,t^{0.25}
$$

The exponent is $0.5 \\times 0.5 = 0.25$, not $0.5$, so the claim is false.`,
      `**B) After $16$ years total fleet emissions are $960$.**  (false)

This claim evaluates the composed law at $t=16$. The correct figure is $480$; the claimed $960$ is exactly double it.

Where the doubling comes from is instructive: $960$ is what you get by ignoring the intensity stage entirely and reading $E$ off the exponent $0.5$, since $240 \\times 16^{0.5}=960$. The fourth root, $16^{0.25}=2$, is half of the square root, $16^{0.5}=4$.

Evaluate the composed law:

$$
E(16) = 240 \\times 16^{0.25} = 240 \\times 2 = 480
$$

Check through the two stages separately:

$$
a(16) = 4\\sqrt{16} = 16, \\qquad e(16) = \\frac{120}{\\sqrt{16}} = 30, \\qquad 16 \\times 30 = 480
$$

Both routes give $480$, so the claim is false.`,
      `**C) Total fleet emissions rise as the programme runs longer.**  (true)

This claim asks only for the direction of the composed law. With $E(t)=240t^{0.25}$, the coefficient is positive and the exponent is positive, so emissions increase throughout.

The result is worth pausing on, because the two stages pull in opposite directions: the fleet grows while each vehicle pollutes less. The composed exponent, $+0.25$, records that fleet growth wins — but only barely, which is why the rise is so slow.

Read the sign structure of the composed law:

$$
E(t) = 240\\,t^{0.25}, \\qquad 240 > 0, \\quad 0.25 > 0
$$

Trace the level over time:

$$
E(1) = 240, \\qquad E(16) = 480, \\qquad E(81) = 240 \\times 3 = 720
$$

Emissions climb steadily, so the claim is true.`,
      `**D) Doubling the elapsed time doubles total fleet emissions.**  (false)

This claim assumes proportional growth. The scale factor is $2^{0.25}\\approx1.189$, so doubling the elapsed time raises emissions by only about $19\\%$.

Slow growth is easy to mistake for proportional growth when the numbers are checked at just one point, and the earlier value $E(16)=480$ against $E(1)=240$ does look like a doubling — but that took sixteen years, not one doubling of time. The correct reading is that emissions double only when time rises sixteenfold.

Form the scale factor:

$$
\\frac{E(2t)}{E(t)} = 2^{0.25} \\approx 1.1892
$$

Find what time multiple actually doubles emissions:

$$
k^{0.25} = 2 \\quad \\Rightarrow \\quad k = 2^{4} = 16
$$

Check numerically:

$$
E(16) = 480, \\qquad E(32) = 240 \\times 32^{0.25} \\approx 240 \\times 2.378 \\approx 570.7
$$

Doubling time adds about a fifth, not a whole doubling, so the claim is false.`,
      `**E) Emission intensity rises as the fleet grows.**  (false)

This claim reverses the second stage of the chain. Intensity is $e(a)=120a^{-0.5}$, a power function with a negative exponent, so it falls as the fleet grows.

Total emissions and emissions per vehicle move in opposite directions in this programme, and that is exactly what the two exponents encode: $-0.5$ for intensity, $+0.25$ for the total. Reading a rising total as evidence of rising intensity confuses the aggregate with the average.

Read the sign of the intensity exponent:

$$
e(a) = 120a^{-0.5}, \\qquad -0.5 < 0
$$

Evaluate at two fleet sizes reached by the programme:

$$
e(4) = \\frac{120}{2} = 60, \\qquad e(16) = \\frac{120}{4} = 30
$$

Intensity halves as the fleet quadruples, so the claim is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 13,
    solution_overview: `Fleet size is $a(t)=4t^{0.5}$ thousand vehicles, intensity is $e(a)=120a^{-0.5}$ kg per thousand vehicles, and total emissions are $E(t)=a(t)e(a(t))$.

**Part 1: Building the model.**

Let $t$ = years, $a$ = fleet in thousands, $e$ = emission intensity, $E$ = total emissions. This is a chain: the output of the fleet law becomes the input of the intensity law, and the total multiplies the two.

**1. Translate: total emissions in terms of fleet size.** Multiplying adds the exponents:

$$
E = a \\cdot 120a^{-0.5} = 120a^{0.5}
$$

**2. Translate: substitute the fleet law.** Composing multiplies the exponents:

$$
E(t) = 120\\left(4t^{0.5}\\right)^{0.5}
$$

**Part 2: The model.**

$$
a(t) = 4t^{0.5}, \\qquad e(a) = 120a^{-0.5} \\tag{1}
$$

$$
E(t) = 240\\,t^{0.25} \\tag{2}
$$

**Part 3: Solve.**

**1.** The composed constant and exponent come out cleanly:

$$
120 \\times 4^{0.5} = 240, \\qquad 0.5 \\times 0.5 = 0.25
$$

**2.** Levels can be checked either through (2) or stage by stage:

$$
E(16) = 240 \\times 2 = 480, \\qquad a(16) = 16, \\quad e(16) = 30, \\quad 16 \\times 30 = 480
$$

**3.** The composed exponent is positive but small, so growth is slow:

$$
\\frac{E(2t)}{E(t)} = 2^{0.25} \\approx 1.189 \\quad (+19\\%)
$$

**4.** Doubling total emissions needs a sixteenfold stretch of time:

$$
k^{0.25} = 2 \\;\\Rightarrow\\; k = 16
$$

**5.** The two stages pull opposite ways — intensity falls with fleet size while the total still rises:

$$
e(4) = 60, \\qquad e(16) = 30
$$

**Answer.** $E(t) = 240t^{0.25}$ | composed exponent $0.25$ | $E(16) = 480$`,
  },
  {
    id: "math-8-14",
    case_id: "MATH 8.14",
    title: `Pipeline Capacity, Inversion, and a Change of Units`,
    context: `Flow capacity through a pipe follows $Q(d)=A d^{2.5}$ litres per second, where $d>0$ is the internal diameter in centimetres. A bench test on a $4$ cm pipe measured a capacity of $64$ litres per second.`,
    statements: [
      `The coefficient of the capacity law is $A=2$.`,
      `Doubling the diameter multiplies capacity by about $5.7$.`,
      `A capacity of $250$ litres per second requires a diameter above $10$ cm.`,
      `Measuring the diameter in millimetres instead of centimetres leaves the coefficient unchanged.`,
      `Capacity per centimetre of diameter is the same at every diameter.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The coefficient of the capacity law is $A=2$.**  (true)

This claim asks for the constant in front. The bench diameter is a power of two, so $4^{2.5}=32$ exactly, and dividing the measured capacity by that shape factor gives $A=2$.

Fractional exponents like $2.5$ are best split into an integer part and a half: $4^{2.5}=4^{2}\\times4^{0.5}$. Attempting the same shortcut on a diameter that is not a perfect square is where the arithmetic usually goes wrong, which is why bench tests are run at convenient diameters.

Evaluate the shape factor:

$$
4^{2.5} = 4^{2} \\times 4^{0.5} = 16 \\times 2 = 32
$$

Divide the measured capacity by it:

$$
32A = 64 \\quad \\Rightarrow \\quad A = 2, \\qquad Q(d) = 2d^{2.5}
$$

The coefficient is $2$, so the claim is true.`,
      `**B) Doubling the diameter multiplies capacity by about $5.7$.**  (true)

This claim is a scale-factor question, independent of the coefficient and of the starting diameter. Doubling multiplies capacity by $2^{2.5}\\approx5.657$, which rounds to the $5.7$ in the claim.

The size of this factor is the practical message of the model: a modest widening of the pipe buys a large gain in throughput, because the exponent exceeds $2$. Expecting a factor of $4$, as for a plain area-based rule, would understate capacity by about $40\\%$.

Form the scale factor:

$$
\\frac{Q(2d)}{Q(d)} = 2^{2.5} = 2^{2} \\times 2^{0.5} = 4\\sqrt{2} \\approx 5.657
$$

Check against the bench pipe:

$$
Q(4) = 64, \\qquad Q(8) = 2 \\times 8^{2.5} = 2 \\times 181.02 \\approx 362.0, \\qquad \\frac{362.0}{64} \\approx 5.66
$$

The factor is about $5.7$, so the claim is true.`,
      `**C) A capacity of $250$ litres per second requires a diameter above $10$ cm.**  (false)

This claim inverts the law and overshoots badly. Solving $2d^{2.5}=250$ gives $d^{2.5}=125$ and therefore $d\\approx6.9$ cm, well under $10$ cm.

The overshoot comes from thinking in proportional terms: capacity has to rise nearly fourfold from the bench test, so the pipe "must" be much wider. With exponent $2.5$ the inverse exponent is only $0.4$, so a fourfold capacity gain needs a diameter increase of just $4^{0.4}\\approx1.74$.

Invert the recovered law:

$$
2d^{2.5} = 250 \\quad \\Rightarrow \\quad d^{2.5} = 125 \\quad \\Rightarrow \\quad d = 125^{0.4}
$$

Evaluate the root:

$$
125^{0.4} = e^{0.4 \\times \\ln 125} = e^{0.4 \\times 4.8283} = e^{1.9313} \\approx 6.90
$$

Confirm that $10$ cm would overshoot the target:

$$
Q(10) = 2 \\times 10^{2.5} \\approx 632
$$

A $6.9$ cm pipe already meets the target, so the claim is false.`,
      `**D) Measuring the diameter in millimetres instead of centimetres leaves the coefficient unchanged.**  (false)

This claim ignores how units enter a power law. Switching to millimetres multiplies every diameter figure by $10$, so the coefficient must shrink by $10^{2.5}\\approx316$ to keep the same physical capacity; it becomes about $0.00632$.

The exponent is the part that survives a change of units, which is why exponents — and elasticities — are quoted as unit-free descriptions of a relationship. The coefficient always absorbs the rescaling, and the larger the exponent, the more violently it does so.

Rewrite the law with $d_{\\text{mm}} = 10\\,d_{\\text{cm}}$:

$$
Q = 2 d_{\\text{cm}}^{2.5} = 2\\left(\\frac{d_{\\text{mm}}}{10}\\right)^{2.5} = \\frac{2}{10^{2.5}}\\,d_{\\text{mm}}^{2.5}
$$

Evaluate the new coefficient:

$$
10^{2.5} \\approx 316.23, \\qquad \\frac{2}{316.23} \\approx 0.00632
$$

Check that capacity is unchanged for the bench pipe:

$$
0.00632 \\times 40^{2.5} \\approx 0.00632 \\times 10119 \\approx 64
$$

The coefficient changes while the exponent does not, so the claim is false.`,
      `**E) Capacity per centimetre of diameter is the same at every diameter.**  (false)

This claim would require an exponent of exactly $1$. Dividing the law by $d$ leaves $2d^{1.5}$, which grows with diameter, so capacity per centimetre is far from constant.

Ratios like this one are only constant when the numerator and the divisor carry the same exponent. Here the numerator carries $2.5$, so the ratio keeps an exponent of $1.5$ — still strongly increasing, which is why wider pipes are so much more efficient per centimetre of bore.

Divide the law by the diameter:

$$
\\frac{Q(d)}{d} = \\frac{2d^{2.5}}{d} = 2d^{1.5}
$$

Evaluate at two diameters:

$$
\\frac{Q(4)}{4} = \\frac{64}{4} = 16, \\qquad \\frac{Q(8)}{8} = \\frac{362.0}{8} \\approx 45.3
$$

Capacity per centimetre nearly triples between those pipes, so the claim is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 14,
    solution_overview: `Flow capacity is $Q(d)=Ad^{2.5}$ litres per second for a diameter $d>0$ in centimetres, with a bench test giving $Q(4)=64$.

**Part 1: Building the model.**

Let $d$ = internal diameter in centimetres and $Q(d)$ = capacity in litres per second. The exponent is given, so the bench test alone pins the coefficient; the questions then push the model through inversion and a change of units.

**1. Translate: the bench test.** The bench diameter is a power of two, so the shape factor is exact:

$$
4^{2.5} = 4^{2} \\times 4^{0.5} = 32, \\qquad 32A = 64
$$

**2. Translate: the change of units.** One centimetre is ten millimetres:

$$
d_{\\text{mm}} = 10\\,d_{\\text{cm}}
$$

**Part 2: The model.**

$$
Q(d) = 2d^{2.5} \\tag{1}
$$

$$
Q = \\frac{2}{10^{2.5}}\\,d_{\\text{mm}}^{2.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The bench test gives the coefficient:

$$
A = 2
$$

**2.** Scale factors follow from the exponent alone:

$$
2^{2.5} = 4\\sqrt{2} \\approx 5.657
$$

**3.** Inversion uses the reciprocal exponent $1/2.5 = 0.4$:

$$
d = \\left(\\frac{Q}{2}\\right)^{0.4}, \\qquad Q = 250 \\;\\Rightarrow\\; d = 125^{0.4} \\approx 6.90 \\text{ cm}
$$

**4.** Rescaling the unit leaves the exponent alone and rescales the coefficient by $10^{2.5}$:

$$
A_{\\text{mm}} = \\frac{2}{316.23} \\approx 0.00632
$$

**5.** Capacity per centimetre of bore keeps exponent $1.5$, so it rises with diameter:

$$
\\frac{Q(d)}{d} = 2d^{1.5}, \\qquad 16 \\text{ at } d=4, \\qquad 45.3 \\text{ at } d=8
$$

**Answer.** $A = 2$ | $Q(d) = 2d^{2.5}$ | $250$ l/s needs $d \\approx 6.9$ cm`,
  },
  {
    id: "math-8-15",
    case_id: "MATH 8.15",
    title: `From Radius Growth to the Area a Service Covers`,
    context: `A delivery hub's service radius expands with time according to $r(t)=3t^{0.5}$ kilometres, where $t>0$ is hours since opening. The area covered is the disc of that radius, $S=\\pi r^{2}$ square kilometres.`,
    statements: [
      `The area covered is proportional to elapsed time.`,
      `After $4$ hours the service radius is $6$ kilometres.`,
      `Doubling the elapsed time doubles the area covered.`,
      `Doubling the elapsed time multiplies the radius by about $1.41$.`,
      `After $9$ hours the area covered is $81\\pi$ square kilometres.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The area covered is proportional to elapsed time.**  (true)

This claim is about the composed law. Substituting the radius law into the disc formula squares a square root, so the exponents multiply to $1$ and area is exactly proportional to time: $S(t)=9\\pi t$.

Proportionality is a strong statement, and it survives here only because the two exponents are exact reciprocals of each other. Had the radius grown as $t^{0.6}$, the area would have carried exponent $1.2$ and the proportionality would fail.

Compose the two relationships:

$$
S(t) = \\pi\\left(3t^{0.5}\\right)^{2} = \\pi \\times 9 \\times t^{0.5 \\times 2}
$$

$$
S(t) = 9\\pi t
$$

Check that equal time steps add equal area:

$$
S(1) = 9\\pi, \\qquad S(2) = 18\\pi, \\qquad S(3) = 27\\pi
$$

Area is proportional to elapsed time, so the claim is true.`,
      `**B) After $4$ hours the service radius is $6$ kilometres.**  (true)

This claim evaluates the inner law only. With $r(t)=3\\sqrt{t}$ and $t=4$, the radius is $3 \\times 2 = 6$ kilometres.

It is a small computation, but it is the one that anchors the rest: the composed area law and every scale factor below are built on this radius law, so a slip here — for instance reading $3t^{0.5}$ as $(3t)^{0.5}$ — would propagate through the whole task. Note $(3\\cdot4)^{0.5}\\approx3.46$, a very different answer.

Evaluate the radius law:

$$
r(4) = 3\\sqrt{4} = 3(2) = 6
$$

Confirm the matching area both ways:

$$
S = \\pi(6)^{2} = 36\\pi, \\qquad S(4) = 9\\pi(4) = 36\\pi
$$

The radius is $6$ km, so the claim is true.`,
      `**C) Doubling the elapsed time doubles the area covered.**  (true)

This claim applies a scale factor to the composed law. Since $S(t)=9\\pi t$ has exponent $1$, doubling time multiplies area by $2^{1}=2$.

The result looks obvious once the composition is done, but it is genuinely surprising before it: the radius grows ever more slowly, and yet the area keeps up a constant pace. The two effects — a decelerating radius and an area that grows with the square of the radius — cancel exactly.

Apply the scale factor to the composed law:

$$
\\frac{S(2t)}{S(t)} = 2^{1} = 2
$$

Verify with levels:

$$
S(4) = 36\\pi, \\qquad S(8) = 72\\pi
$$

Area doubles when time doubles, so the claim is true.`,
      `**D) Doubling the elapsed time multiplies the radius by about $1.41$.**  (true)

This claim applies a scale factor to the inner law instead. The radius carries exponent $0.5$, so doubling time multiplies it by $2^{0.5}\\approx1.414$.

Reading this alongside part C is the point of the pair: the same doubling of time multiplies the radius by about $1.41$ and the area by exactly $2$, because $1.414^{2}=2$. Two different scale factors describe the same event at two stages of the chain.

Form the scale factor for the radius:

$$
\\frac{r(2t)}{r(t)} = 2^{0.5} \\approx 1.4142
$$

Check on concrete hours:

$$
r(4) = 6, \\qquad r(8) = 3\\sqrt{8} \\approx 8.485, \\qquad \\frac{8.485}{6} \\approx 1.414
$$

The radius grows by a factor of about $1.41$, so the claim is true.`,
      `**E) After $9$ hours the area covered is $81\\pi$ square kilometres.**  (true)

This claim evaluates the composed law at $t=9$. Since $S(t)=9\\pi t$, the area is $81\\pi$ square kilometres.

The check through the radius is worth doing because the numbers coincide in a way that could hide an error: the radius at nine hours is exactly $9$ km, so the disc area $\\pi(9)^{2}=81\\pi$ reproduces the composed result. Two different routes landing on the same figure is the strongest confirmation available here.

Evaluate the composed law:

$$
S(9) = 9\\pi(9) = 81\\pi
$$

Confirm through the radius:

$$
r(9) = 3\\sqrt{9} = 9, \\qquad \\pi(9)^{2} = 81\\pi
$$

Both routes give $81\\pi$ square kilometres, so the claim is true.`,
    ],
    difficulty_level: "3/5",
    sort_order: 15,
    solution_overview: `The service radius is $r(t)=3t^{0.5}$ km after $t>0$ hours, and the area covered is the disc $S=\\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours since opening, $r$ = service radius in kilometres, $S$ = area in square kilometres. This is a two-stage chain, and the second stage is a power function with exponent $2$, so composing multiplies the exponents.

**1. Translate: the radius law.**

$$
r(t) = 3t^{0.5}
$$

**2. Translate: the area of the disc.**

$$
S = \\pi r^{2}
$$

**Part 2: The model.**

$$
S(t) = \\pi\\left(3t^{0.5}\\right)^{2} \\tag{1}
$$

$$
S(t) = 9\\pi t \\tag{2}
$$

**Part 3: Solve.**

**1.** The composition squares the coefficient and multiplies the exponents:

$$
3^{2} = 9, \\qquad 0.5 \\times 2 = 1
$$

**2.** Levels at convenient hours, checked through both stages:

$$
r(4) = 6 \\;\\Rightarrow\\; S = 36\\pi, \\qquad r(9) = 9 \\;\\Rightarrow\\; S = 81\\pi
$$

**3.** The two stages carry different scale factors for the same doubling of time:

$$
\\frac{r(2t)}{r(t)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{S(2t)}{S(t)} = 2^{1} = 2
$$

**4.** The exponent $1$ in (2) means area accrues at a constant rate:

$$
S(1) = 9\\pi, \\quad S(2) = 18\\pi, \\quad S(3) = 27\\pi
$$

**5.** The apparent paradox — a slowing radius but a steadily growing area — resolves because $\\left(t^{0.5}\\right)^{2}=t$ exactly.

**Answer.** $r(t) = 3\\sqrt{t}$ | $S(t) = 9\\pi t$ | $S(9) = 81\\pi$ km²`,
  },
];
