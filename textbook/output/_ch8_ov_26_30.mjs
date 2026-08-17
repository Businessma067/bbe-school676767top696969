/** MATH 8.26–8.30 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-26",
    case_id: "MATH 8.26",
    title: `Two Ranking Algorithms That Swap Places`,
    context: `Two ranking algorithms are scored against a query load $x>0$. Algorithm S obeys $S(x)=a x^{0.5}$, and a benchmark at load $4$ scored $16$. Algorithm T's score is proportional to $x^{1.5}$, and the same benchmark load scored $8$.`,
    statements: [
      `The two algorithms score equally at a load of $8$.`,
      `The two algorithms score equally at two different positive loads.`,
      `Algorithm S scores higher at every load above the crossing point.`,
      `At a load of $4$ the two algorithms score equally.`,
      `The ratio of the two scores is the same at every load.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The two algorithms score equally at a load of $8$.**  (true)

This claim asks for the crossing point. The benchmarks give $S(x)=8x^{0.5}$ and $T(x)=x^{1.5}$, and setting them equal leaves $x=8$, where both score about $22.6$.

Cancelling the common factor $x^{0.5}$ is what makes the equation trivial, and it is allowed because the load is strictly positive. What remains is $8=x$, so the crossing sits at exactly the coefficient of algorithm S — a coincidence of these particular exponents, since they differ by exactly $1$.

Calibrate both algorithms from the benchmark:

$$
a\\sqrt{4} = 16 \\;\\Rightarrow\\; a = 8, \\qquad k(4)^{1.5} = 8 \\;\\Rightarrow\\; 8k = 8 \\;\\Rightarrow\\; k = 1
$$

Set the two scores equal and cancel:

$$
8x^{0.5} = x^{1.5} \\quad \\Rightarrow \\quad 8 = x^{1} \\quad \\Rightarrow \\quad x = 8
$$

Confirm the shared score:

$$
S(8) = 8\\sqrt{8} \\approx 22.63, \\qquad T(8) = 8^{1.5} \\approx 22.63
$$

The algorithms tie at load $8$, so the claim is true.`,
      `**B) The two algorithms score equally at two different positive loads.**  (false)

This claim expects more than one tie. After cancelling $x^{0.5}$ the equation reduces to $x=8$, a single root, so on the domain $x>0$ there is exactly one crossing.

Two curves like these can look as if they might cross twice, since one starts above and the other ends above, but a single crossing is all that pattern requires. The algebraic reason is decisive: the ratio of the two scores is strictly increasing, so it can pass through $1$ only once.

Reduce the equality condition:

$$
8x^{0.5} = x^{1.5} \\quad \\Longleftrightarrow \\quad x^{1.5 - 0.5} = 8 \\quad \\Longleftrightarrow \\quad x = 8
$$

Inspect the ratio, which is strictly increasing:

$$
\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}
$$

A strictly increasing ratio equals $1$ only once, so the claim is false.`,
      `**C) Algorithm S scores higher at every load above the crossing point.**  (false)

This claim puts the wrong algorithm ahead beyond the crossing. For $x>8$ the ratio $T/S=x/8$ exceeds $1$, so algorithm T leads on that whole range.

Algorithm S does dominate at light loads, and its larger coefficient — $8$ against $1$ — is what makes that plausible up to the crossing. Beyond it the exponents decide: $1.5$ against $0.5$ means T's score grows three times as fast in proportional terms, and no coefficient advantage can hold that back forever.

Use the ratio to order the two algorithms:

$$
\\frac{T(x)}{S(x)} = \\frac{x}{8} > 1 \\quad \\Longleftrightarrow \\quad x > 8
$$

Check a heavier load:

$$
S(16) = 8(4) = 32, \\qquad T(16) = 16^{1.5} = 64
$$

Algorithm T leads above the crossing, so the claim is false.`,
      `**D) At a load of $4$ the two algorithms score equally.**  (false)

This claim mistakes the benchmark load for the crossing. At $x=4$ the benchmarks themselves record $16$ against $8$, so algorithm S is ahead by a factor of two.

The benchmark is where the coefficients were calibrated, not where the curves meet; those are different questions. The ratio at that load is $4/8=0.5$, exactly the twofold gap the benchmark scores show.

Read the benchmark scores:

$$
S(4) = 16, \\qquad T(4) = 8
$$

Confirm with the ratio:

$$
\\frac{T(4)}{S(4)} = \\frac{4}{8} = 0.5
$$

The two are not equal at load $4$, so the claim is false.`,
      `**E) The ratio of the two scores is the same at every load.**  (false)

This claim would require the two algorithms to share an exponent. They do not — $0.5$ against $1.5$ — so the ratio is $x/8$, which grows without bound.

A constant ratio is exactly the case where two power functions differ only by a coefficient. Here the exponents differ by $1$, so the ratio is itself a power function with exponent $1$: the further the load rises, the more decisively algorithm T wins.

Form the ratio:

$$
\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}
$$

Evaluate at three loads:

$$
\\frac{4}{8} = 0.5, \\qquad \\frac{8}{8} = 1, \\qquad \\frac{16}{8} = 2
$$

The ratio quadruples across that range, so the claim is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 26,
    solution_overview: `Algorithm S obeys $S(x)=ax^{0.5}$ with $S(4)=16$; algorithm T obeys $T(x)=kx^{1.5}$ with $T(4)=8$.

**Part 1: Building the model.**

Let $x$ = query load, $S$ and $T$ = the two scores. Each algorithm has a given exponent and one benchmark, so both coefficients follow immediately; the interesting work is comparing the two laws.

**1. Translate: algorithm S's benchmark.**

$$
a\\sqrt{4} = 16
$$

**2. Translate: algorithm T's benchmark.**

$$
k(4)^{1.5} = 8
$$

**Part 2: The model.**

$$
S(x) = 8x^{0.5} \\tag{1}
$$

$$
T(x) = x^{1.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The benchmarks give the coefficients:

$$
a = 8, \\qquad k = 1
$$

**2.** Locate every crossing by cancelling the shared power:

$$
8x^{0.5} = x^{1.5} \\;\\Rightarrow\\; x = 8, \\qquad S(8) = T(8) \\approx 22.63
$$

**3.** The ratio settles the ordering everywhere and shows the crossing is unique:

$$
\\frac{T(x)}{S(x)} = \\frac{x}{8}
$$

**4.** Read the ordering off that ratio:

$$
x < 8 \\;\\Rightarrow\\; S > T, \\qquad x > 8 \\;\\Rightarrow\\; T > S
$$

**5.** Because the exponents differ, no coefficient could keep S ahead indefinitely; the coefficient only moves the crossing, which sits at $x=a^{1/(1.5-0.5)}=8$.

**Answer.** $S(x) = 8x^{0.5}$ | $T(x) = x^{1.5}$ | single crossing at $x = 8$`,
  },
  {
    id: "math-8-27",
    case_id: "MATH 8.27",
    title: `Server Fleet Capacity Beneath a Contracted Ceiling`,
    context: `A hosting platform's sustained capacity follows $C(m)=A m^{0.8}$ requests per second, where $m>0$ is the number of machines. A fleet of $32$ machines sustains $80$ requests per second. The support contract will not certify more than $500$ requests per second.`,
    statements: [
      `Capacity grows less than proportionally with the fleet size.`,
      `Doubling the fleet raises capacity by about $74\\%$.`,
      `The contracted ceiling of $500$ binds from about $250$ machines.`,
      `A fleet of $243$ machines sustains $486$ requests per second.`,
      `Capacity per machine is the same at every fleet size.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) Capacity grows less than proportionally with the fleet size.**  (true)

This claim reads the exponent. With $0.8$ strictly between $0$ and $1$, capacity rises as machines are added but by proportionally less than the fleet grows.

No calibration is needed for this: the coefficient scales the whole curve up or down without changing the shape. Adding machines always helps — the exponent is positive — but each machine adds less capacity than the one before it.

Compare the growth of capacity with the growth of the fleet:

$$
\\frac{C(km)}{C(m)} = k^{0.8} < k \\qquad \\text{for } k>1
$$

Check with a tenfold expansion:

$$
10^{0.8} \\approx 6.31 < 10
$$

Capacity grows less than proportionally, so the claim is true.`,
      `**B) Doubling the fleet raises capacity by about $74\\%$.**  (true)

This claim quantifies the same diminishing returns. The scale factor is $2^{0.8}\\approx1.7411$, so doubling the fleet buys about $74\\%$ more capacity.

The gap between $74\\%$ and $100\\%$ is what the platform loses to the sub-linear exponent, and it compounds: two doublings give $2^{1.6}\\approx3.03$ rather than $4$. Recovering the missing capacity requires a disproportionately larger fleet.

Form the scale factor:

$$
\\frac{C(2m)}{C(m)} = 2^{0.8} = e^{0.8 \\times 0.6931} \\approx e^{0.5545} \\approx 1.7411
$$

Verify from the recorded fleet, using $A=80/32^{0.8}=80/16=5$:

$$
C(32) = 80, \\qquad C(64) = 5 \\times 64^{0.8} \\approx 5 \\times 27.86 \\approx 139.3, \\qquad \\frac{139.3}{80} \\approx 1.74
$$

Capacity rises by about $74\\%$, so the claim is true.`,
      `**C) The contracted ceiling of $500$ binds from about $250$ machines.**  (false)

This claim inverts the law but lands well short. Solving $5m^{0.8}=500$ gives $m^{0.8}=100$, and raising to the power $1.25$ returns about $316$ machines.

Underestimating here is the natural error, because the recorded fleet suggests a rough proportion — capacity must rise about sixfold, so the fleet "should" rise about sixfold from $32$ to roughly $200$. The sub-linear exponent means the fleet has to rise by $10^{1.25}\\approx17.8$ times instead.

Recover the coefficient and set capacity to the ceiling:

$$
32^{0.8} = 2^{4} = 16 \\;\\Rightarrow\\; A = 5, \\qquad 5m^{0.8} = 500 \\;\\Rightarrow\\; m^{0.8} = 100
$$

Raise both sides to the reciprocal exponent $1.25$:

$$
m = 100^{1.25} = 10^{2.5} \\approx 316.2
$$

Check the claimed fleet:

$$
C(250) = 5 \\times 250^{0.8} \\approx 5 \\times 82.4 \\approx 412 < 500
$$

The ceiling binds near $316$ machines, not $250$, so the claim is false.`,
      `**D) A fleet of $243$ machines sustains $486$ requests per second.**  (false)

This claim overstates capacity at a conveniently chosen fleet size. Since $243=3^{5}$, the shape factor is $3^{4}=81$ exactly, and capacity is $5 \\times 81 = 405$ requests per second.

The claimed $486$ is $6 \\times 81$, which is what the coefficient $6$ would give — the value obtained by dividing $80$ by a mis-evaluated shape factor. Fifth powers make the exponent $0.8=4/5$ exact, so this is a case where the arithmetic can be checked without any rounding at all.

Evaluate the shape factor:

$$
243^{0.8} = \\left(3^{5}\\right)^{4/5} = 3^{4} = 81
$$

Apply the recovered coefficient:

$$
C(243) = 5(81) = 405
$$

The fleet sustains $405$ requests per second, not $486$, so the claim is false.`,
      `**E) Capacity per machine is the same at every fleet size.**  (false)

This claim would require an exponent of $1$. Dividing capacity by the fleet size gives $5m^{-0.2}$, whose exponent is negative, so capacity per machine falls as the fleet grows.

This is the per-unit face of the diminishing returns in parts A and B: the total keeps rising while the average declines. It is also the number that matters commercially, since it says each new machine buys less capacity than the last.

Divide capacity by the fleet size:

$$
\\frac{C(m)}{m} = \\frac{5m^{0.8}}{m} = 5m^{-0.2}
$$

Evaluate at three fleets:

$$
\\frac{80}{32} = 2.5, \\qquad \\frac{405}{243} \\approx 1.67, \\qquad \\frac{500}{316.2} \\approx 1.58
$$

Capacity per machine falls throughout, so the claim is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 27,
    solution_overview: `Capacity follows $C(m)=Am^{0.8}$ requests per second for $m$ machines, with $C(32)=80$ and a contracted ceiling of $500$.

**Part 1: Building the model.**

Let $m$ = machines and $C(m)$ = sustained capacity. The exponent is given and lies below $1$, so the platform faces diminishing returns; the recorded fleet fixes the coefficient and the ceiling has to be inverted into a fleet size.

**1. Translate: the recorded fleet.** The fleet size is a fifth power, so the shape factor is exact:

$$
32^{0.8} = \\left(2^{5}\\right)^{4/5} = 16, \\qquad 16A = 80
$$

**2. Translate: the contracted ceiling.**

$$
5m^{0.8} \\le 500
$$

**Part 2: The model.**

$$
C(m) = 5m^{0.8} \\tag{1}
$$

$$
m^{0.8} \\le 100 \\tag{2}
$$

**Part 3: Solve.**

**1.** The recorded fleet gives the coefficient:

$$
A = 5
$$

**2.** Levels at fifth powers stay exact:

$$
C(243) = 5 \\times 3^{4} = 405
$$

**3.** Scale factors show the sub-linear growth:

$$
2^{0.8} \\approx 1.741 \\;(+74\\%), \\qquad 10^{0.8} \\approx 6.31
$$

**4.** Invert (2) with the reciprocal exponent $1.25$:

$$
m = 100^{1.25} = 10^{2.5} \\approx 316.2
$$

**5.** Capacity per machine carries a negative exponent, so the marginal value of a machine keeps falling:

$$
\\frac{C(m)}{m} = 5m^{-0.2}, \\qquad 2.5 \\text{ at } m=32, \\qquad 1.67 \\text{ at } m=243
$$

**Answer.** $A = 5$ | $C(m) = 5m^{0.8}$ | ceiling binds at $m \\approx 316$ machines`,
  },
  {
    id: "math-8-28",
    case_id: "MATH 8.28",
    title: `Hiring Against a Square-Root Revenue Curve`,
    context: `A seasonal workshop earns revenue $R(L)=120 L^{0.5}$ from $L>0$ hours of hired labour and pays a wage of $6$ per hour. The owner judges a season by the net gain $R(L)-6L$.`,
    statements: [
      `The net gain is zero at $400$ hours.`,
      `At $100$ hours the net gain is $600$.`,
      `At $900$ hours the net gain is negative.`,
      `The net gain rises throughout the range from $0$ to $400$ hours.`,
      `Revenue per hour of labour is the same at every staffing level.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The net gain is zero at $400$ hours.**  (true)

This claim locates the break-even staffing level. Setting $120\\sqrt{L}=6L$ and dividing by $\\sqrt{L}$ gives $\\sqrt{L}=20$, so revenue and wage bill coincide at $400$ hours, both equal to $2400$.

Dividing by $\\sqrt{L}$ removes the trivial root at $L=0$, where a workshop with no labour also breaks even. The meaningful break-even is the second one, and it is the upper edge of the range worth operating in.

Set revenue equal to the wage bill:

$$
120\\sqrt{L} = 6L \\quad \\Rightarrow \\quad 120 = 6\\sqrt{L} \\quad \\Rightarrow \\quad \\sqrt{L} = 20
$$

$$
L = 400
$$

Check both sides:

$$
R(400) = 120(20) = 2400, \\qquad 6(400) = 2400
$$

The net gain is zero at $400$ hours, so the claim is true.`,
      `**B) At $100$ hours the net gain is $600$.**  (true)

This claim evaluates the net gain inside the profitable range. Revenue is $1200$, wages are $600$, and the difference is exactly $600$.

This point is worth remembering for part D, because it turns out to be the best the workshop can do: the net gain here equals the wage bill itself, and every staffing level on either side of it does worse.

Evaluate revenue and wages at $100$ hours:

$$
R(100) = 120\\sqrt{100} = 120(10) = 1200, \\qquad 6(100) = 600
$$

Take the difference:

$$
1200 - 600 = 600
$$

The net gain is $600$, so the claim is true.`,
      `**C) At $900$ hours the net gain is negative.**  (true)

This claim tests a staffing level beyond break-even. Revenue is $3600$ while wages are $5400$, so the season loses $1800$.

Once past $400$ hours the wage bill grows in proportion to hours while revenue grows only as a square root, so losses widen with every additional hour. At $900$ hours the workshop is already $75\\%$ over its revenue in wages.

Evaluate both sides at $900$ hours:

$$
R(900) = 120\\sqrt{900} = 120(30) = 3600, \\qquad 6(900) = 5400
$$

Take the difference:

$$
3600 - 5400 = -1800
$$

The net gain is negative, so the claim is true.`,
      `**D) The net gain rises throughout the range from $0$ to $400$ hours.**  (false)

This claim assumes the net gain climbs all the way to break-even. It does not: the net gain peaks at $100$ hours with $600$ and then falls back to zero at $400$ hours.

The confusion is between *positive* and *rising*. The net gain stays positive on the whole open range, which is why the claim sounds right, but it turns over well before the end of that range — at the point where the falling revenue per hour drops to the wage of $6$.

Compare the net gain at three staffing levels inside the range:

$$
\\Pi(100) = 1200 - 600 = 600
$$

$$
\\Pi(225) = 120(15) - 1350 = 1800 - 1350 = 450
$$

$$
\\Pi(324) = 120(18) - 1944 = 2160 - 1944 = 216
$$

The net gain falls from $600$ to $216$ while still inside the range, so the claim is false.`,
      `**E) Revenue per hour of labour is the same at every staffing level.**  (false)

This claim would require revenue to be proportional to hours. Dividing revenue by $L$ gives $120L^{-0.5}$, which declines as staffing rises.

Watching this average fall explains the whole task. It starts far above the wage of $6$, equals $6$ at $400$ hours — precisely the break-even point — and drops below it thereafter, which is why extra hours eventually destroy value.

Divide revenue by hours:

$$
\\frac{R(L)}{L} = \\frac{120L^{0.5}}{L} = 120L^{-0.5}
$$

Evaluate at three staffing levels:

$$
\\frac{R(100)}{100} = 12, \\qquad \\frac{R(400)}{400} = 6, \\qquad \\frac{R(900)}{900} = 4
$$

Revenue per hour falls from $12$ to $4$, so the claim is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 28,
    solution_overview: `Revenue is $R(L)=120L^{0.5}$ from $L>0$ labour hours, wages cost $6$ per hour, and the net gain is $R(L)-6L$.

**Part 1: Building the model.**

Let $L$ = labour hours, $R$ = revenue, $\\Pi$ = net gain. Both constants are given, so the task is a comparison between an exponent of $0.5$ and an exponent of $1$.

**1. Translate: the net gain.**

$$
\\Pi(L) = 120L^{0.5} - 6L
$$

**2. Translate: break-even.**

$$
120\\sqrt{L} = 6L
$$

**Part 2: The model.**

$$
\\Pi(L) = 120\\sqrt{L} - 6L \\tag{1}
$$

$$
\\Pi(L) = 6\\sqrt{L}\\left(20 - \\sqrt{L}\\right) \\tag{2}
$$

**Part 3: Solve.**

**1.** Solve break-even on $L>0$:

$$
\\sqrt{L} = 20 \\;\\Rightarrow\\; L = 400, \\qquad R = \\text{wages} = 2400
$$

**2.** The factored form (2) fixes the sign of the net gain:

$$
0 < L < 400 \\;\\Rightarrow\\; \\Pi > 0, \\qquad L > 400 \\;\\Rightarrow\\; \\Pi < 0
$$

**3.** Positive is not the same as rising — the net gain turns over inside the profitable range:

$$
\\Pi(100) = 600, \\qquad \\Pi(225) = 450, \\qquad \\Pi(324) = 216, \\qquad \\Pi(400) = 0
$$

**4.** Losses widen beyond break-even:

$$
\\Pi(900) = 3600 - 5400 = -1800
$$

**5.** The driver is the falling average revenue per hour, which crosses the wage exactly at break-even:

$$
\\frac{R(L)}{L} = 120L^{-0.5}: \\quad 12 \\text{ at } 100, \\quad 6 \\text{ at } 400, \\quad 4 \\text{ at } 900
$$

**Answer.** break-even at $L = 400$ hours | peak net gain $600$ at $L = 100$ | $\\Pi(900) = -1800$`,
  },
  {
    id: "math-8-29",
    case_id: "MATH 8.29",
    title: `Splitting an Order Between Two Quadratic-Cost Plants`,
    context: `A firm must produce $60$ units in total and can split them between two plants. Plant 1's cost is $C_1(q)=0.5q^{2}$ and plant 2's cost is $C_2(q)=0.25q^{2}$, where $q$ is that plant's own output.`,
    statements: [
      `Concentrating all $60$ units in the cheaper plant costs $900$.`,
      `An even split between the plants costs less than a $20$–$40$ split.`,
      `Doubling a plant's output doubles that plant's cost.`,
      `The $20$–$40$ split costs $650$.`,
      `Plant 2's cost per unit does not depend on how much it produces.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) Concentrating all $60$ units in the cheaper plant costs $900$.**  (true)

This claim prices the corner solution. Plant 2 has the smaller coefficient, and loading all $60$ units into it costs $0.25 \\times 3600 = 900$.

"Cheaper" needs care here, because plant 2 is cheaper only in the sense of a smaller coefficient; at any given output it costs half of plant 1. That does not make concentration wise — as the later parts show, splitting beats this corner by a wide margin.

Evaluate plant 2 at the full order:

$$
C_2(60) = 0.25(60)^{2} = 0.25(3600) = 900
$$

Compare with the same corner at plant 1:

$$
C_1(60) = 0.5(3600) = 1800
$$

Concentrating in plant 2 costs $900$, so the claim is true.`,
      `**B) An even split between the plants costs less than a $20$–$40$ split.**  (false)

This claim backs the wrong split. Thirty units each cost $675$, while sending $20$ to plant 1 and $40$ to plant 2 costs $600$ — the cheaper of the two.

Symmetry is a good instinct when plants are identical, but these are not: plant 1's cost coefficient is twice plant 2's, so the cheaper plant should carry more of the load. The right balance loads plant 2 with twice as much as plant 1, which is exactly the $20$–$40$ split.

Price the even split:

$$
0.5(30)^{2} + 0.25(30)^{2} = 450 + 225 = 675
$$

Price the $20$–$40$ split:

$$
0.5(20)^{2} + 0.25(40)^{2} = 200 + 400 = 600
$$

The uneven split is cheaper by $75$, so the claim is false.`,
      `**C) Doubling a plant's output doubles that plant's cost.**  (false)

This claim assumes proportional costs. Both plants have exponent $2$, so doubling output multiplies cost by $2^{2}=4$.

The quadratic shape is the reason splitting helps at all. If costs really were proportional to output, total cost would depend only on the coefficients and every unit would go to the cheaper plant; convex costs are what make it worthwhile to run both.

Apply the scale factor at either plant:

$$
\\frac{C_2(2q)}{C_2(q)} = 2^{2} = 4
$$

Check numerically:

$$
C_2(20) = 100, \\qquad C_2(40) = 400
$$

Cost quadruples rather than doubling, so the claim is false.`,
      `**D) The $20$–$40$ split costs $650$.**  (false)

This claim misprices the split computed in part B. The true cost is $600$: plant 1 contributes $200$ and plant 2 contributes $400$.

The gap of $50$ matters because $600$ is the best achievable total — no other division of the $60$ units does better. Reporting $650$ would make the even split at $675$ look almost as good, when in fact the correct figure creates a clear ranking.

Price each plant separately:

$$
C_1(20) = 0.5(400) = 200, \\qquad C_2(40) = 0.25(1600) = 400
$$

Add the two:

$$
200 + 400 = 600
$$

Compare with the alternatives already computed:

$$
600 < 675 < 900
$$

The split costs $600$, not $650$, so the claim is false.`,
      `**E) Plant 2's cost per unit does not depend on how much it produces.**  (false)

This claim would require an exponent of $1$. Dividing plant 2's cost by its output gives $0.25q$, which rises with output, so its unit cost is far from constant.

Rising unit cost is precisely the force that makes a split optimal: as plant 2 takes on more, its cost per unit climbs until sending the next unit to plant 1 becomes the cheaper option. Constant unit costs would eliminate that trade-off entirely.

Divide the cost by output:

$$
\\frac{C_2(q)}{q} = \\frac{0.25q^{2}}{q} = 0.25q
$$

Evaluate at three output levels:

$$
\\frac{C_2(20)}{20} = 5, \\qquad \\frac{C_2(40)}{40} = 10, \\qquad \\frac{C_2(60)}{60} = 15
$$

Unit cost triples across that range, so the claim is false.`,
    ],
    difficulty_level: "4/5",
    sort_order: 29,
    solution_overview: `Sixty units must be split between plants with costs $C_1(q)=0.5q^{2}$ and $C_2(q)=0.25q^{2}$.

**Part 1: Building the model.**

Let $q$ = units at plant 1, so $60-q$ go to plant 2. Both cost laws are power functions with exponent $2$, so costs are convex and the total depends on how the order is divided.

**1. Translate: the total cost of a split.**

$$
K(q) = 0.5q^{2} + 0.25(60-q)^{2}
$$

**2. Translate: the corner options.**

$$
K(0) = 0.25(3600) = 900, \\qquad K(60) = 0.5(3600) = 1800
$$

**Part 2: The model.**

$$
K(q) = 0.5q^{2} + 0.25(60-q)^{2} \\tag{1}
$$

$$
\\frac{C_i(2q)}{C_i(q)} = 2^{2} = 4 \\tag{2}
$$

**Part 3: Solve.**

**1.** Price the candidate splits:

$$
K(30) = 450 + 225 = 675, \\qquad K(20) = 200 + 400 = 600
$$

**2.** Rank them against the corner:

$$
600 < 675 < 900 < 1800
$$

**3.** The best division loads the cheaper plant twice as heavily, matching the ratio of the coefficients:

$$
q : (60-q) = 20 : 40 = 1 : 2
$$

**4.** Convexity is what rewards splitting — each plant's cost quadruples when its own load doubles, by (2).

**5.** Unit costs rise with each plant's own output, which is why neither corner is efficient:

$$
\\frac{C_1(q)}{q} = 0.5q, \\qquad \\frac{C_2(q)}{q} = 0.25q
$$

**Answer.** cheapest split $20$ at plant 1 and $40$ at plant 2, costing $600$ | even split $675$ | all at plant 2 $900$`,
  },
  {
    id: "math-8-30",
    case_id: "MATH 8.30",
    title: `Testing Whether Field Data Fit One Power Law`,
    context: `A laboratory records four measurements of a response $y$ against an input $x$: $(4,\\,24)$, $(16,\\,192)$, $(9,\\,81)$ and a planned run at $x=25$. An analyst fits a power law $y=Ax^{r}$ using the first two measurements only.`,
    statements: [
      `The first two measurements are consistent with a power law of exponent $1.5$.`,
      `The fitted coefficient is $3$.`,
      `The measurement at $x=9$ contradicts the fitted law.`,
      `The fitted law predicts $y=300$ at $x=25$.`,
      `The same two measurements would fit an exponent of $2$ equally well.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The first two measurements are consistent with a power law of exponent $1.5$.**  (true)

This claim asks whether two points determine the exponent claimed. Dividing one measurement by the other cancels the coefficient and leaves $4^{r}=8$, which gives $r=1.5$.

Two points always determine a power law exactly, because the ratio equation carries the exponent and either point then carries the coefficient. The arithmetic is cleanest when the input ratio is a whole number, as here, where $16/4=4$ and $192/24=8$.

Divide the second measurement by the first:

$$
\\frac{A(16)^{r}}{A(4)^{r}} = \\frac{192}{24} \\quad \\Rightarrow \\quad \\left(\\frac{16}{4}\\right)^{r} = 8
$$

Solve the resulting equation:

$$
4^{r} = 8 \\quad \\Rightarrow \\quad 2^{2r} = 2^{3} \\quad \\Rightarrow \\quad r = 1.5
$$

The exponent is exactly $1.5$, so the claim is true.`,
      `**B) The fitted coefficient is $3$.**  (true)

This claim completes the fit. With $r=1.5$ the shape factor at $x=4$ is $8$, so the coefficient is $24/8=3$.

Either measurement can be used, and using both is the sensible check: $192/16^{1.5}=192/64=3$ as well. Agreement confirms that the exponent from part A was right, since a wrong exponent would give two different coefficients.

Use the first measurement:

$$
A(4)^{1.5} = 24 \\quad \\Rightarrow \\quad 8A = 24 \\quad \\Rightarrow \\quad A = 3
$$

Confirm with the second:

$$
\\frac{192}{16^{1.5}} = \\frac{192}{64} = 3
$$

$$
y = 3x^{1.5}
$$

Both measurements give $A=3$, so the claim is true.`,
      `**C) The measurement at $x=9$ contradicts the fitted law.**  (false)

This claim treats the third measurement as an outlier. The fitted law predicts $3 \\times 9^{1.5} = 81$, which is exactly what was recorded, so the point sits on the curve.

This is the one measurement that was *not* used in the fit, which makes it the real test of the model. A power law fitted on two points will always pass through those two; passing through an independent third point is genuine evidence that the form is right.

Evaluate the fitted law at $x=9$:

$$
9^{1.5} = \\left(9^{1/2}\\right)^{3} = 3^{3} = 27
$$

$$
y = 3(27) = 81
$$

Compare with the recorded value:

$$
81 = 81
$$

The measurement agrees with the fit, so the claim is false.`,
      `**D) The fitted law predicts $y=300$ at $x=25$.**  (false)

This claim understates the prediction. At $x=25$ the shape factor is $25^{1.5}=125$, so the fitted law predicts $375$.

The claimed $300$ is what a squared law with the same coefficient would *not* give either; it is closer to what appears if the shape factor is read as $100$, that is, if $25^{1.5}$ is mistaken for $25^{2}/6.25$ or simply rounded down. Since $25$ is a perfect square, the exact route is short: take the square root, then cube.

Evaluate the shape factor:

$$
25^{1.5} = \\left(25^{1/2}\\right)^{3} = 5^{3} = 125
$$

Apply the coefficient:

$$
y = 3(125) = 375
$$

The prediction is $375$, not $300$, so the claim is false.`,
      `**E) The same two measurements would fit an exponent of $2$ equally well.**  (false)

This claim suggests the fit is not unique. It is: the ratio equation $4^{r}=8$ has exactly one solution, and $r=2$ would require the response to rise by a factor of $16$ rather than the observed $8$.

Two distinct points pin a power law uniquely, so there is no freedom left once the ratio is fixed. Testing the rejected exponent makes this concrete: with $r=2$ the coefficient from the first point would be $1.5$, and the second point would then be predicted as $384$ instead of the recorded $192$.

Check what exponent $2$ would imply for the ratio:

$$
\\left(\\frac{16}{4}\\right)^{2} = 16 \\ne 8
$$

Force the coefficient from the first point and test the second:

$$
A = \\frac{24}{16} = 1.5, \\qquad 1.5(16)^{2} = 384 \\ne 192
$$

An exponent of $2$ misses the second measurement by a factor of two, so the claim is false.`,
    ],
    difficulty_level: "4/5",
    sort_order: 30,
    solution_overview: `Measurements $(4,24)$ and $(16,192)$ are used to fit $y=Ax^{r}$; the point $(9,81)$ and a planned run at $x=25$ test the fit.

**Part 1: Building the model.**

Let $x$ = input and $y$ = response. Two unknowns need two measurements, and the standard route is to take the ratio first — it eliminates the coefficient and isolates the exponent.

**1. Translate: the ratio of the two measurements.**

$$
\\left(\\frac{16}{4}\\right)^{r} = \\frac{192}{24}
$$

**2. Translate: the coefficient from either point.**

$$
A(4)^{r} = 24
$$

**Part 2: The model.**

$$
4^{r} = 8 \\tag{1}
$$

$$
y = A x^{r} \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (1) has a unique solution:

$$
2^{2r} = 2^{3} \\;\\Rightarrow\\; r = 1.5
$$

**2.** Either measurement then gives the same coefficient:

$$
A = \\frac{24}{8} = 3 = \\frac{192}{64}, \\qquad y = 3x^{1.5}
$$

**3.** The held-out measurement tests the form:

$$
3 \\times 9^{1.5} = 3 \\times 27 = 81 \\;\\checkmark
$$

**4.** The planned run is a prediction, not a fit:

$$
3 \\times 25^{1.5} = 3 \\times 125 = 375
$$

**5.** No other exponent fits: $r=2$ would demand a response ratio of $16$ and would miss the second measurement by a factor of two.

**Answer.** $r = 1.5$ | $A = 3$ | $y = 3x^{1.5}$ | predicted $y(25) = 375$`,
  },
];
