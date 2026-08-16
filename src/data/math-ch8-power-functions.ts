/**
 * Chapter 8 — Power functions (Sydsæter §4.8 style exam tasks).
 * BBE True/False bank: dry claims, multi-step recovery / scaling / composition.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH8_POWER_FUNCTIONS: MathTask[] = [
  {
    id: `math-8-1`,
    case_id: `MATH 8.01`,
    title: `Robot Loading Rate from a Single Anchor Point`,
    context: `A warehouse robot's loading rate (units per minute) follows the power law $P(u)=A u^{0.75}$ for the number of units already staged $u>0$. A calibration run records $P(16)=24$.`,
    statements: [
      `$P(81)=81$.`,
      `$P(16)$ is more than $30\\%$ of $P(81)$.`,
      `The value of $u$ with $P(u)=48$ is less than $40$.`,
      `With the exponent changed to $1$ (same $A$), $P(16)=48$.`,
      `Quadrupling $u$ multiplies $P$ by more than $3$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) $P(81)=81$.**  (true)

From $P(16)=24$ and $16=2^4$, $16^{0.75}=2^3=8$, so $A=24/8=3$. Then $81=3^4$ gives $81^{0.75}=3^3=27$, hence $P(81)=3\\times27=81$.`,
      `**B) $P(16)$ is more than $30\\%$ of $P(81)$.**  (false)

$P(16)=24$ and $P(81)=81$, so $24/81\\approx0.2963<0.30$.`,
      `**C) The value of $u$ with $P(u)=48$ is less than $40$.**  (false)

$3u^{0.75}=48\\Rightarrow u^{0.75}=16\\Rightarrow u=16^{4/3}=2^{16/3}\\approx40.32$, which is not less than $40$.`,
      `**D) With the exponent changed to $1$ (same $A$), $P(16)=48$.**  (true)

With $A=3$ and exponent $1$, $P(16)=3\\times16=48$.`,
      `**E) Quadrupling $u$ multiplies $P$ by more than $3$.**  (false)

The scaling factor is $4^{0.75}=2^{1.5}\\approx2.828<3$.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `A warehouse robot's loading rate follows $P(u)=A u^{0.75}$ for $u>0$, with calibration $P(16)=24$.

**Part 1: Setup.** Recover $A$ from the anchor, then evaluate, invert, and scale.

**Part 2: Formula.** $P(u)=A u^{0.75}$; inverse $u=(P/A)^{4/3}$; scaling $P(ku)/P(u)=k^{0.75}$.

**Part 3: Solve.** $16^{0.75}=8\\Rightarrow A=3$, so $P(u)=3u^{0.75}$. Then $P(81)=81$, $24/81\\approx0.296$, $u$ for $P=48$ is about $40.32$, linear counterfactual gives $48$, and $4^{0.75}\\approx2.83$.`,
  },
  {
    id: `math-8-2`,
    case_id: `MATH 8.02`,
    title: `Telescope Power from a Scaling Rule`,
    context: `A telescope's resolving power follows $R(d)=A d^{r}$ for aperture diameter $d>0$. Engineers know that tripling the diameter multiplies resolving power by a factor of exactly $9$. A bench test records $R(5)=50$.`,
    statements: [
      `$R(10)=200$.`,
      `$R(10)$ is more than $5$ times $R(5)$.`,
      `The diameter needed for $R=200$ is greater than $12$.`,
      `The diameter needed for $R=200$ is exactly $10$.`,
      `If tripling the diameter instead multiplied power by $6$, the exponent would be less than $1.7$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) $R(10)=200$.**  (true)

Tripling multiplies $R$ by $9$, so $3^{r}=9\\Rightarrow r=2$. Then $50=A\\cdot5^{2}\\Rightarrow A=2$, hence $R(d)=2d^{2}$ and $R(10)=200$.`,
      `**B) $R(10)$ is more than $5$ times $R(5)$.**  (false)

$R(10)/R(5)=200/50=4$, which is not more than $5$.`,
      `**C) The diameter needed for $R=200$ is greater than $12$.**  (false)

$2d^{2}=200\\Rightarrow d^{2}=100\\Rightarrow d=10$, not greater than $12$.`,
      `**D) The diameter needed for $R=200$ is exactly $10$.**  (true)

Same inversion as in C: $d=10$.`,
      `**E) If tripling instead multiplied power by $6$, the exponent would be less than $1.7$.**  (true)

$3^{r'}=6\\Rightarrow r'=\\ln6/\\ln3\\approx1.6309<1.7$.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 2,
    solution_overview: `Resolving power $R(d)=A d^{r}$ with the rule that tripling $d$ multiplies $R$ by $9$, and $R(5)=50$.

**Part 1: Setup.** Recover $r$ from the verbal scaling rule, then $A$ from the bench point.

**Part 2: Formula.** $3^{r}=9\\Rightarrow r=2$; $A=50/25=2$; $R(d)=2d^{2}$.

**Part 3: Solve.** Evaluate $R(10)$, compare ratios, invert $R=200$, and test the counterfactual $3^{r'}=6$.`,
  },
  {
    id: `math-8-3`,
    case_id: `MATH 8.03`,
    title: `Two Wind Turbines Compared Directly`,
    context: `Two turbines report power output as functions of wind speed $w>0$: turbine A obeys $P_A(w)=4w^{1.5}$ and turbine B obeys $P_B(w)=w^{2}$. Both formulas are already fully specified.`,
    statements: [
      `$P_A(4)+P_B(4)$ exceeds $45$.`,
      `$P_A(4)$ equals twice $P_B(4)$.`,
      `$P_A(16)=P_B(16)$.`,
      `For every $w>16$, turbine B outproduces turbine A.`,
      `Halving A's coefficient to $2$ would still make A match B at $w=16$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) $P_A(4)+P_B(4)$ exceeds $45$.**  (true)

$P_A(4)=4\\cdot4^{1.5}=4\\cdot8=32$ and $P_B(4)=16$, so the sum is $48>45$.`,
      `**B) $P_A(4)$ equals twice $P_B(4)$.**  (true)

$32=2\\times16$.`,
      `**C) $P_A(16)=P_B(16)$.**  (true)

$P_A(16)=4\\cdot16^{1.5}=4\\cdot64=256$ and $P_B(16)=256$.`,
      `**D) For every $w>16$, turbine B outproduces turbine A.**  (true)

$P_B/P_A=w^{0.5}/4$. This ratio equals $1$ at $w=16$ and is strictly increasing, so $P_B>P_A$ for all $w>16$.`,
      `**E) Halving A's coefficient to $2$ would still make A match B at $w=16$.**  (false)

Then $P_A(16)=2\\cdot64=128\\neq256$.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 3,
    solution_overview: `Given $P_A(w)=4w^{1.5}$ and $P_B(w)=w^{2}$ for $w>0$.

**Part 1: Setup.** Evaluate at $w=4$ and $w=16$; compare the ratio $P_B/P_A=w^{0.5}/4$.

**Part 2: Formula.** Crossing when $w^{0.5}=4\\Rightarrow w=16$.

**Part 3: Solve.** Sum at $4$ is $48$; equal outputs at $16$; B leads beyond the crossing; halving A's coefficient breaks the match.`,
  },
  {
    id: `math-8-4`,
    case_id: `MATH 8.04`,
    title: `Assembly Time, Derived Rate, and a Rival`,
    context: `Assembling $N$ units takes $T(N)=A N^{r}$ minutes. Assembling $4$ times as many units takes $16$ times as long. Assembling $5$ units takes $100$ minutes. Define the average rate $R(T)=N/T$ in units per minute. A rival manual assembler works at a constant rate of $0.05$ units per minute, regardless of $T$.`,
    statements: [
      `The exponent $r$ equals $2$.`,
      `$R(T)=0.5\\,T^{-0.5}$.`,
      `There is a time $T^{*}$ where the mechanized rate equals the rival's rate, and $T^{*}=100$.`,
      `For every $T>T^{*}$, the mechanized process is faster than the rival.`,
      `If the rival's constant rate were instead $0.2$, the crossover would occur at $T<10$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The exponent $r$ equals $2$.**  (true)

$4^{r}=16\\Rightarrow r=2$.`,
      `**B) $R(T)=0.5\\,T^{-0.5}$.**  (true)

$A\\cdot5^{2}=100\\Rightarrow A=4$, so $T=4N^{2}\\Rightarrow N=\\sqrt{T/4}$. Then $R=N/T=0.5\\,T^{-0.5}$.`,
      `**C) There is a time $T^{*}$ where the mechanized rate equals the rival's rate, and $T^{*}=100$.**  (true)

$0.5\\,T^{-0.5}=0.05\\Rightarrow T^{0.5}=10\\Rightarrow T^{*}=100$.`,
      `**D) For every $T>T^{*}$, the mechanized process is faster than the rival.**  (false)

$R(T)$ is decreasing in $T$. Past $T^{*}=100$ the mechanized rate falls below $0.05$, so it is slower, not faster.`,
      `**E) If the rival's constant rate were instead $0.2$, the crossover would occur at $T<10$.**  (true)

$0.5\\,T^{-0.5}=0.2\\Rightarrow T^{0.5}=2.5\\Rightarrow T^{*}=6.25<10$.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 4,
    solution_overview: `Time $T(N)=A N^{r}$ with $4\\times$ units giving $16\\times$ time, and $T(5)=100$. Rate $R=N/T$; rival rate $0.05$.

**Part 1: Setup.** Recover $r$ from scaling, $A$ from the anchor, then express $R$ in terms of $T$.

**Part 2: Formula.** $r=2$, $A=4$, $R(T)=0.5\\,T^{-0.5}$.

**Part 3: Solve.** Crossover with $0.05$ at $T=100$; direction beyond the crossover follows from the negative exponent; rival $0.2$ crosses at $6.25$.`,
  },
  {
    id: `math-8-5`,
    case_id: `MATH 8.05`,
    title: `Ore-to-Alloy Chain Versus a Linear Competitor`,
    context: `Ore purity $u>0$ produces metal $M(u)=c\\,u^{1.5}$. An audit reports $M(16)=512$. Metal converts to alloy strength via $S(M)=M^{2/3}/2$. A competing supplier instead offers strength directly as $S_{\\mathrm{comp}}(u)=1.8u+5$ (linear, not a power function). Purity is only meaningful up to $u=50$.`,
    statements: [
      `The coefficient $c$ equals $8$.`,
      `The composed relationship $S(u)$ is a power function with exponent exactly $1$.`,
      `At $u=10$, the chain-derived process yields more strength than the competitor.`,
      `There is a purity in $(0,50]$ where the two offers are equal, and that purity is below $30$.`,
      `For every purity above that crossover, up to $u=50$, the chain-derived process is strictly better.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The coefficient $c$ equals $8$.**  (true)

$16^{1.5}=64$, so $c=512/64=8$.`,
      `**B) The composed relationship $S(u)$ is a power function with exponent exactly $1$.**  (true)

$S(u)=(8u^{1.5})^{2/3}/2=8^{2/3}u/2=2u$. The product of exponents is $1.5\\times\\tfrac{2}{3}=1$.`,
      `**C) At $u=10$, the chain-derived process yields more strength than the competitor.**  (false)

$S(10)=20$ while $S_{\\mathrm{comp}}(10)=23$, so the chain is behind.`,
      `**D) There is a purity in $(0,50]$ where the two offers are equal, and that purity is below $30$.**  (true)

$2u=1.8u+5\\Rightarrow u=25\\in(0,50]$ and $25<30$.`,
      `**E) For every purity above that crossover, up to $u=50$, the chain-derived process is strictly better.**  (true)

After the single crossing, slope $2>1.8$ keeps the chain ahead; at $u=50$, $100>95$.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 5,
    solution_overview: `Metal $M(u)=c u^{1.5}$ with $M(16)=512$; strength $S(M)=M^{2/3}/2$; competitor $1.8u+5$; domain $u\\le50$.

**Part 1: Setup.** Recover $c$, compose $S\\circ M$, compare with the linear offer.

**Part 2: Formula.** $c=8$, $S(u)=2u$.

**Part 3: Solve.** At $u=10$ the chain trails ($20<23$); crossover at $u=25$; the chain leads on $(25,50]$.`,
  },
  {
    id: `math-8-6`,
    case_id: `MATH 8.06`,
    title: `Server load under a doubling rule`,
    context: `A server's peak load is modeled by the power function $L(x)=A x^r$, where $x>0$ is the number of simultaneous jobs. Tests show that doubling $x$ multiplies peak load by $4$.`,
    statements: [
      `The exponent in the load model is $r=2$.`,
      `Tripling the number of jobs multiplies peak load by $8$.`,
      `Halving the number of jobs halves peak load.`,
      `The load elasticity with respect to the number of jobs is $4$.`,
      `Peak load decreases as the number of jobs increases.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The exponent in the load model is $r=2$.** (true)

The doubling rule gives $2^r=4=2^2$, so $r=2$.`,
      `**B) Tripling the number of jobs multiplies peak load by $8$.** (false)

With $r=2$, the factor is $3^2=9$, not $8$.`,
      `**C) Halving the number of jobs halves peak load.** (false)

The factor is $(1/2)^2=1/4$.`,
      `**D) The load elasticity with respect to the number of jobs is $4$.** (false)

For $A x^r$, the constant elasticity equals $r=2$.`,
      `**E) Peak load decreases as the number of jobs increases.** (false)

Because $A>0$ and $r=2>0$, the function increases on $x>0$.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 6,
    solution_overview: `Use the scale-factor identity $L(kx)/L(x)=k^r$. The observed doubling factor yields $2^r=4$, hence $r=2$. All other scale factors and the elasticity follow from this exponent.`,
  },
  {
    id: `math-8-7`,
    case_id: `MATH 8.07`,
    title: `Square-root response of survey reach`,
    context: `The number of usable survey responses from an outreach intensity $x>0$ is $Q(x)=12x^{0.5}$.`,
    statements: [
      `At intensity $x=4$, the model predicts $24$ usable responses.`,
      `Increasing intensity from $1$ to $9$ triples the predicted response count.`,
      `A predicted response count of $36$ requires intensity $x=9$.`,
      `Doubling intensity multiplies the predicted response count by $\\sqrt{2}$.`,
      `The response elasticity with respect to intensity is $0.5$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) At intensity $x=4$, the model predicts $24$ usable responses.** (true)

$Q(4)=12\\sqrt{4}=24$.`,
      `**B) Increasing intensity from $1$ to $9$ triples the predicted response count.** (true)

The ratio is $(9/1)^{0.5}=3$.`,
      `**C) A predicted response count of $36$ requires intensity $x=9$.** (true)

Solving $12\\sqrt{x}=36$ gives $\\sqrt{x}=3$ and $x=9$.`,
      `**D) Doubling intensity multiplies the predicted response count by $\\sqrt{2}$.** (true)

The scale factor is $2^{0.5}=\\sqrt{2}$.`,
      `**E) The response elasticity with respect to intensity is $0.5$.** (true)

The elasticity of a power function equals its exponent.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `Evaluate or invert $Q(x)=12\\sqrt{x}$ as needed. Ratios eliminate the coefficient: $Q(x_2)/Q(x_1)=(x_2/x_1)^{0.5}$, and the exponent is also the constant elasticity.`,
  },
  {
    id: `math-8-8`,
    case_id: `MATH 8.08`,
    title: `Comparing quadratic and linear processing`,
    context: `Two processing-time models for batch size $x>0$ are $F(x)=2x^2$ and $G(x)=8x$.`,
    statements: [
      `At batch size $x=2$, model $F$ predicts a longer processing time than model $G$.`,
      `At batch size $x=8$, model $F$ predicts $128$ time units.`,
      `The two models predict the same processing time at $x=4$.`,
      `For every $x>0$, the ratio $F(x)/G(x)$ equals $x/2$.`,
      `Model $G$ has elasticity $2$ with respect to batch size.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A) At batch size $x=2$, model $F$ predicts a longer processing time than model $G$.** (false)

$F(2)=8$ while $G(2)=16$.`,
      `**B) At batch size $x=8$, model $F$ predicts $128$ time units.** (true)

$F(8)=2\\times 8^2=128$.`,
      `**C) The two models predict the same processing time at $x=4$.** (true)

$F(4)=32=G(4)$.`,
      `**D) For every $x>0$, the ratio $F(x)/G(x)$ equals $x/2$.** (false)

$F(x)/G(x)=(2x^2)/(8x)=x/4$.`,
      `**E) Model $G$ has elasticity $2$ with respect to batch size.** (false)

$G(x)=8x^1$, so its elasticity is $1$.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 8,
    solution_overview: `Evaluate both models at the stated batch sizes. For the crossover, solve $2x^2=8x$ on $x>0$, giving $x=4$. Simplifying their ratio gives $F/G=x/4$.`,
  },
  {
    id: `math-8-9`,
    case_id: `MATH 8.09`,
    title: `Capped warehouse throughput`,
    context: `Unconstrained throughput at staffing index $x>0$ is $D(x)=5x^{0.5}$. A loading dock imposes a hard cap of $20$, so actual throughput is $T(x)=\\min\\{5x^{0.5},20\\}$.`,
    statements: [
      `At staffing index $x=9$, actual throughput is $15$.`,
      `At staffing index $x=16$, the dock cap is not binding.`,
      `At staffing index $x=25$, actual throughput is $25$.`,
      `Before the cap binds, doubling staffing doubles actual throughput.`,
      `An observed actual throughput of $20$ uniquely identifies staffing index $x=16$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) At staffing index $x=9$, actual throughput is $15$.** (true)

$5\\sqrt{9}=15<20$, so the cap does not alter the value.`,
      `**B) At staffing index $x=16$, the dock cap is not binding.** (false)

$5\\sqrt{16}=20$, exactly the cap, so the constraint binds.`,
      `**C) At staffing index $x=25$, actual throughput is $25$.** (false)

The unconstrained value is $25$, but actual throughput is capped at $20$.`,
      `**D) Before the cap binds, doubling staffing doubles actual throughput.** (false)

A doubling multiplies the square-root model by $\\sqrt{2}$.`,
      `**E) An observed actual throughput of $20$ uniquely identifies staffing index $x=16$.** (false)

Every $x\\ge 16$ produces capped throughput $20$.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `First solve the cap threshold $5\\sqrt{x}=20$, which gives $x=16$. Below it, use the square-root model; at and above it, actual throughput remains $20$.`,
  },
  {
    id: `math-8-10`,
    case_id: `MATH 8.10`,
    title: `Recovering an inverse workload model`,
    context: `Average completion time follows $C(x)=A x^r$ for resource level $x>0$. Doubling resources halves completion time, and $C(2)=40$ minutes.`,
    statements: [
      `The exponent is $r=-1$.`,
      `The coefficient is $A=80$.`,
      `At resource level $x=4$, completion time is $20$ minutes.`,
      `Quadrupling resources divides completion time by $4$.`,
      `A completion time of $10$ minutes requires resource level $x=8$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The exponent is $r=-1$.** (true)

The scale rule is $2^r=1/2$, so $r=-1$.`,
      `**B) The coefficient is $A=80$.** (true)

$40=A\\times 2^{-1}=A/2$, hence $A=80$.`,
      `**C) At resource level $x=4$, completion time is $20$ minutes.** (true)

$C(4)=80/4=20$.`,
      `**D) Quadrupling resources divides completion time by $4$.** (true)

The factor is $4^{-1}=1/4$.`,
      `**E) A completion time of $10$ minutes requires resource level $x=8$.** (true)

Solving $80/x=10$ gives $x=8$.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Translate the doubling rule into $2^r=1/2$ to obtain $r=-1$. Then use $C(2)=40$ to recover $A=80$, giving the shared model $C(x)=80/x$.`,
  },
  {
    id: `math-8-11`,
    case_id: `MATH 8.11`,
    title: `Price elasticity and subscription revenue`,
    context: `Subscription demand at price $p>0$ is $q(p)=81p^{-2}$. Revenue is price times demand: $R(p)=p\\times q(p)$.`,
    statements: [
      `At price $p=9$, demand is $1$ subscription unit.`,
      `At price $p=3$, revenue is $27$.`,
      `Tripling price divides demand by $3$.`,
      `Revenue has power exponent $-2$ with respect to price.`,
      `The revenue model has an interior maximum on $p>0$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) At price $p=9$, demand is $1$ subscription unit.** (true)

$q(9)=81/9^2=1$.`,
      `**B) At price $p=3$, revenue is $27$.** (true)

$q(3)=9$, so $R(3)=3\\times 9=27$.`,
      `**C) Tripling price divides demand by $3$.** (false)

The demand factor is $3^{-2}=1/9$.`,
      `**D) Revenue has power exponent $-2$ with respect to price.** (false)

$R(p)=p\\times81p^{-2}=81p^{-1}$, so its exponent is $-1$.`,
      `**E) The revenue model has an interior maximum on $p>0$.** (false)

$R(p)=81/p$ is strictly decreasing on $p>0$.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `Derive revenue before evaluating claims: $R(p)=p(81p^{-2})=81p^{-1}$. Demand therefore scales with exponent $-2$, while revenue scales with exponent $-1$.`,
  },
  {
    id: `math-8-12`,
    case_id: `MATH 8.12`,
    title: `Fixed and variable audit cost`,
    context: `The total cost of auditing $x>0$ records is $C(x)=64+4x^{0.5}$. The first term is fixed cost and the second is variable cost.`,
    statements: [
      `Auditing $64$ records has total cost $96$.`,
      `Quadrupling the number of records doubles the variable-cost component.`,
      `At $x=64$, average cost per record is $1.5$.`,
      `At $x=64$, fixed cost is one half of total cost.`,
      `A total cost of $80$ corresponds to $x=64$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Auditing $64$ records has total cost $96$.** (true)

$C(64)=64+4\\sqrt{64}=64+32=96$.`,
      `**B) Quadrupling the number of records doubles the variable-cost component.** (true)

The variable factor is $4^{0.5}=2$.`,
      `**C) At $x=64$, average cost per record is $1.5$.** (true)

Average cost is $C(64)/64=96/64=1.5$.`,
      `**D) At $x=64$, fixed cost is one half of total cost.** (false)

The fixed-cost share is $64/96=2/3$.`,
      `**E) A total cost of $80$ corresponds to $x=64$.** (false)

$64+4\\sqrt{x}=80$ gives $\\sqrt{x}=4$, hence $x=16$.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `Keep fixed and variable cost separate. At $x=64$, variable cost is $4\\sqrt{64}=32$ and total cost is $96$. To invert total cost, subtract the fixed $64$ before solving the square-root equation.`,
  },
  {
    id: `math-8-13`,
    case_id: `MATH 8.13`,
    title: `Composing adoption and emissions intensity`,
    context: `A platform's adoption index after $t>0$ periods is $A(t)=t^2$. Emissions intensity at adoption level $a>0$ is $E(a)=243a^{-0.5}$. The time-based intensity is the composition $E(A(t))$.`,
    statements: [
      `At $t=3$, the composed emissions intensity is $81$.`,
      `At $t=9$, the composed emissions intensity is $9$.`,
      `The composition $E(A(t))$ has exponent $-0.5$ with respect to $t$.`,
      `Tripling $t$ divides the composed emissions intensity by $9$.`,
      `The composed model is defined at $t=0$ under the stated domains.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) At $t=3$, the composed emissions intensity is $81$.** (true)

$E(A(3))=243(3^2)^{-0.5}=243/3=81$.`,
      `**B) At $t=9$, the composed emissions intensity is $9$.** (false)

The composition gives $243/9=27$.`,
      `**C) The composition $E(A(t))$ has exponent $-0.5$ with respect to $t$.** (false)

$243(t^2)^{-0.5}=243t^{-1}$ for $t>0$.`,
      `**D) Tripling $t$ divides the composed emissions intensity by $9$.** (false)

The composite exponent is $-1$, so tripling gives factor $1/3$.`,
      `**E) The composed model is defined at $t=0$ under the stated domains.** (false)

At $t=0$, adoption is $0$, but $E(a)$ requires $a>0$ and contains $a^{-0.5}$.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Compose first: $E(A(t))=243(t^2)^{-0.5}=243t^{-1}$ on $t>0$. The product of exponents, $2\\times(-0.5)=-1$, controls all time scaling.`,
  },
  {
    id: `math-8-14`,
    case_id: `MATH 8.14`,
    title: `Inverting a capacity power law`,
    context: `A machine's output at control setting $x>0$ is $y=8x^{3/2}$. Operators sometimes need to recover the setting from a target output.`,
    statements: [
      `At setting $x=4$, output is $64$.`,
      `An output target of $216$ requires setting $x=9$.`,
      `Doubling the setting multiplies output by $4$.`,
      `The inverse setting function has exponent $3/2$ with respect to output.`,
      `The elasticity of the required setting with respect to target output is $3/2$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) At setting $x=4$, output is $64$.** (true)

$8\\times4^{3/2}=8\\times8=64$.`,
      `**B) An output target of $216$ requires setting $x=9$.** (true)

$216/8=27$ and $27^{2/3}=9$, so $x=9$.`,
      `**C) Doubling the setting multiplies output by $4$.** (false)

The factor is $2^{3/2}=2\\sqrt{2}$.`,
      `**D) The inverse setting function has exponent $3/2$ with respect to output.** (false)

Inverting gives $x=(y/8)^{2/3}$, whose exponent is $2/3$.`,
      `**E) The elasticity of the required setting with respect to target output is $3/2$.** (false)

The inverse power function has elasticity $2/3$.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `For direct evaluation use $y=8x^{3/2}$. For targets, divide by $8$ and raise to the reciprocal exponent: $x=(y/8)^{2/3}$. Thus the inverse elasticity is $2/3$.`,
  },
  {
    id: `math-8-15`,
    case_id: `MATH 8.15`,
    title: `From radius growth to service area`,
    context: `A delivery network's effective radius after investment index $t>0$ is $r(t)=2t^{0.5}$. Its circular service area is $S(t)=\\pi[r(t)]^2$.`,
    statements: [
      `The composed area model is $S(t)=4\\pi t$.`,
      `At investment index $t=9$, the radius is $6$.`,
      `At investment index $t=9$, service area is $36\\pi$.`,
      `Quadrupling investment doubles the radius.`,
      `Doubling investment doubles service area.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The composed area model is $S(t)=4\\pi t$.** (true)

$S(t)=\\pi(2t^{0.5})^2=4\\pi t$.`,
      `**B) At investment index $t=9$, the radius is $6$.** (true)

$r(9)=2\\sqrt{9}=6$.`,
      `**C) At investment index $t=9$, service area is $36\\pi$.** (true)

Either $\\pi\\times6^2$ or $4\\pi\\times9$ gives $36\\pi$.`,
      `**D) Quadrupling investment doubles the radius.** (true)

Radius scales by $4^{0.5}=2$.`,
      `**E) Doubling investment doubles service area.** (true)

The composed area has exponent $1$, so its doubling factor is $2$.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `Substitute the radius model into the area formula: $S(t)=\\pi(2t^{0.5})^2=4\\pi t$. Squaring the radius doubles its exponent from $0.5$ to $1$.`,
  },
  {
    id: `math-8-16`,
    case_id: `MATH 8.16`,
    title: `Crossover of two support contracts`,
    context: `For workload index $x>0$, two support contracts cost $C_A(x)=64+4x^{0.5}$ and $C_B(x)=16+16x^{0.5}$.`,
    statements: [
      `At workload index $x=4$, contract B is cheaper.`,
      `At workload index $x=64$, contract A is cheaper.`,
      `The contracts have equal cost at $x=16$.`,
      `Contract A has constant cost elasticity $0.5$.`,
      `Doubling workload doubles the total cost of contract B.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) At workload index $x=4$, contract B is cheaper.** (true)

$C_A(4)=72$ and $C_B(4)=48$.`,
      `**B) At workload index $x=64$, contract A is cheaper.** (true)

$C_A(64)=96$ while $C_B(64)=144$.`,
      `**C) The contracts have equal cost at $x=16$.** (true)

Both costs equal $80$: $64+4\\times4=16+16\\times4$.`,
      `**D) Contract A has constant cost elasticity $0.5$.** (false)

The variable term has exponent $0.5$, but adding fixed cost means total cost is not a pure power function and does not have constant elasticity $0.5$.`,
      `**E) Doubling workload doubles the total cost of contract B.** (false)

Only the variable term scales by $\\sqrt{2}$; the fixed term remains $16$.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `Let $z=\\sqrt{x}$. The crossover equation $64+4z=16+16z$ gives $z=4$ and $x=16$. Fixed terms prevent either total-cost expression from inheriting the variable term's constant elasticity.`,
  },
  {
    id: `math-8-17`,
    case_id: `MATH 8.17`,
    title: `Capacity ceiling in a learning curve`,
    context: `Unrestricted completed cases after learning index $x>0$ are $U(x)=9x^{3/2}$. Regulation limits recorded completions to $243$, so $V(x)=\\min\\{9x^{3/2},243\\}$.`,
    statements: [
      `At learning index $x=4$, recorded completions are $72$.`,
      `At learning index $x=9$, the regulatory ceiling is inactive.`,
      `A record of $243$ completions uniquely implies $x=9$.`,
      `While the ceiling is inactive, doubling $x$ multiplies recorded completions by $4$.`,
      `For $x>9$, recorded completions retain elasticity $3/2$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) At learning index $x=4$, recorded completions are $72$.** (true)

$U(4)=9\\times4^{3/2}=9\\times8=72$, below the ceiling.`,
      `**B) At learning index $x=9$, the regulatory ceiling is inactive.** (false)

$U(9)=9\\times27=243$, so the ceiling binds exactly there.`,
      `**C) A record of $243$ completions uniquely implies $x=9$.** (false)

Every $x\\ge9$ is recorded as $243$ because of the ceiling.`,
      `**D) While the ceiling is inactive, doubling $x$ multiplies recorded completions by $4$.** (false)

The unrestricted factor is $2^{3/2}=2\\sqrt{2}$, not $4$.`,
      `**E) For $x>9$, recorded completions retain elasticity $3/2$.** (false)

Above the threshold, $V(x)=243$ is constant and has elasticity $0$.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `Solve $9x^{3/2}=243$: $x^{3/2}=27$, so $x=27^{2/3}=9$. Below $9$, use the exponent $3/2$; from $9$ onward, the observed function is constant.`,
  },
  {
    id: `math-8-18`,
    case_id: `MATH 8.18`,
    title: `Revenue versus platform fee`,
    context: `At price $p>0$, demand is $q(p)=64p^{-3/2}$. Sales revenue is $R(p)=p\\times q(p)$, while the platform fee is $F(p)=16p^{0.5}$.`,
    statements: [
      `At price $p=4$, demand is $8$ units.`,
      `Revenue and the platform fee are equal at price $p=4$.`,
      `At price $p=4$, revenue is $16$.`,
      `At price $p=16$, revenue exceeds the platform fee.`,
      `Revenue has elasticity $-3/2$ with respect to price.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) At price $p=4$, demand is $8$ units.** (true)

$q(4)=64/4^{3/2}=64/8=8$.`,
      `**B) Revenue and the platform fee are equal at price $p=4$.** (true)

Revenue simplifies to $R(p)=64p^{-0.5}$. At $p=4$, $R=32$, and $F=16\\sqrt{4}=32$.`,
      `**C) At price $p=4$, revenue is $16$.** (false)

Revenue is $4\\times8=32$.`,
      `**D) At price $p=16$, revenue exceeds the platform fee.** (false)

$R(16)=64/4=16$, whereas $F(16)=16\\times4=64$.`,
      `**E) Revenue has elasticity $-3/2$ with respect to price.** (false)

Multiplication by price raises the demand exponent by $1$, so revenue elasticity is $-1/2$.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Derive $R(p)=p(64p^{-3/2})=64p^{-1/2}$. For the crossover, set $64p^{-1/2}=16p^{1/2}$; multiplying by $p^{1/2}$ gives $64=16p$, hence $p=4$.`,
  },
  {
    id: `math-8-19`,
    case_id: `MATH 8.19`,
    title: `Calibrating a two-stage production system`,
    context: `A time index $t>0$ generates effective input $x(t)=4t^2$. Output from effective input is $y(x)=A x^{3/2}$. The observed output at $t=1$ is $64$.`,
    statements: [
      `The output coefficient is $A=8$.`,
      `The composed time model is $y(x(t))=64t^3$.`,
      `At $t=2$, output is $512$.`,
      `Doubling $t$ multiplies output by $8$.`,
      `An output of $1728$ corresponds to $t=3$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The output coefficient is $A=8$.** (true)

At $t=1$, effective input is $x=4$. Thus $64=A\\times4^{3/2}=8A$, giving $A=8$.`,
      `**B) The composed time model is $y(x(t))=64t^3$.** (true)

Substitute $x(t)=4t^2$: $y=8(4t^2)^{3/2}=8\\times8t^3=64t^3$ for $t>0$.`,
      `**C) At $t=2$, output is $512$.** (true)

The composed model gives $64\\times2^3=512$.`,
      `**D) Doubling $t$ multiplies output by $8$.** (true)

The composite exponent is $2\\times(3/2)=3$, so the factor is $2^3=8$.`,
      `**E) An output of $1728$ corresponds to $t=3$.** (true)

$64t^3=1728$ gives $t^3=27$ and therefore $t=3$.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 19,
    solution_overview: `Use the observation at $t=1$: $x(1)=4$ and $64=A4^{3/2}=8A$, so $A=8$. Composition then gives $y(x(t))=8(4t^2)^{3/2}=64t^3$, which supports evaluation, scaling, and inversion.`,
  },
  {
    id: `math-8-20`,
    case_id: `MATH 8.20`,
    title: `Calibrated demand and fixed-cost profit`,
    context: `Demand has power form $q(p)=A p^r$ for price $p>0$. Tripling price divides demand by $9$, and demand at $p=3$ is $27$. Revenue is $R(p)=p\\times q(p)$, and the venture has fixed operating cost $27$, so profit is $\\Pi(p)=R(p)-27$.`,
    statements: [
      `The calibrated demand model predicts $q(3)=27$.`,
      `At price $p=3$, profit is $54$.`,
      `Profit is zero at price $p=9$.`,
      `Doubling price divides revenue by $4$.`,
      `At price $p=27$, profit is positive.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The calibrated demand model predicts $q(3)=27$.** (true)

The scaling rule gives $3^r=1/9=3^{-2}$, so $r=-2$. Using $27=A\\times3^{-2}=A/9$ gives $A=243$, and therefore $q(3)=27$.`,
      `**B) At price $p=3$, profit is $54$.** (true)

Revenue is $3\\times27=81$. Subtracting fixed cost gives $\\Pi(3)=81-27=54$.`,
      `**C) Profit is zero at price $p=9$.** (true)

$q(9)=243/81=3$, so revenue is $9\\times3=27$, exactly equal to fixed cost.`,
      `**D) Doubling price divides revenue by $4$.** (false)

Revenue is $R(p)=p(243p^{-2})=243p^{-1}$, so doubling price divides revenue by $2$.`,
      `**E) At price $p=27$, profit is positive.** (false)

Revenue is $243/27=9$, hence profit is $9-27=-18$.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `From the tripling rule, $3^r=1/9$ gives $r=-2$. The observation $q(3)=27$ then yields $A=243$. Thus $q(p)=243p^{-2}$, $R(p)=243p^{-1}$, and $\\Pi(p)=243/p-27$.`,
  },
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
  {
    id: `math-8-36`,
    case_id: `MATH 8.36`,
    title: `Square-Law Capacity of a Rainwater Basin`,
    context: `For a family of geometrically similar rainwater basins, usable capacity is modeled by the power function $V(x)=2x^2$, where $x>0$ is the basin's scale index and $V$ is measured in thousands of liters.`,
    statements: [
      `At scale index $x=3$, the basin holds $18$ thousand liters.`,
      `Increasing the scale index from $3$ to $6$ multiplies capacity by $4$.`,
      `For every admissible $x$, the capacity is positive.`,
      `The model has exponent $r=2$.`,
      `If the scale index is multiplied by a factor $k>0$, capacity is multiplied by $k^2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A)** Substitute $x=3$: $V(3)=2\\cdot3^2=18$. The unit is thousands of liters, so the claim is true.`,
      `**B)** $V(6)/V(3)=(6/3)^2=2^2=4$. Capacity therefore quadruples, so the claim is true.`,
      `**C)** On the stated domain $x>0$, both $2$ and $x^2$ are positive. Hence $V(x)>0$, so the claim is true.`,
      `**D)** Comparing $V(x)=2x^2$ with $Ax^r$ gives $A=2$ and $r=2$. The claim is true.`,
      `**E)** $V(kx)=2(kx)^2=k^2(2x^2)=k^2V(x)$. The scaling claim is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 36,
    solution_overview: `Use the defining rule directly and keep the model's unit in view. The central power-law identity is $V(kx)=k^2V(x)$: changing the input by a factor changes the output by that factor raised to the exponent. Positivity follows from the stated domain $x>0$.`,
  },
  {
    id: `math-8-37`,
    case_id: `MATH 8.37`,
    title: `Quadratic Braking-Energy Index`,
    context: `A test laboratory summarizes the braking energy absorbed by a particular brake assembly with $E(v)=3v^2$, where $v>0$ is speed in tens of kilometers per hour and $E$ is an energy index.`,
    statements: [
      `At $v=2$, the energy index is $12$.`,
      `At $v=4$, the energy index is $48$.`,
      `Doubling speed multiplies the energy index by $4$.`,
      `Tripling speed multiplies the energy index by $9$.`,
      `The ratio $E(5)/E(1)$ equals $25$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A)** $E(2)=3\\cdot2^2=12$. The claim is true.`,
      `**B)** $E(4)=3\\cdot4^2=3\\cdot16=48$. The claim is true.`,
      `**C)** $E(2v)/E(v)=2^2=4$. The claim is true.`,
      `**D)** $E(3v)/E(v)=3^2=9$. The claim is true.`,
      `**E)** $E(5)/E(1)=(5/1)^2=25$. The coefficient $3$ cancels, so the claim is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 37,
    solution_overview: `Evaluate the two requested inputs and use the square-law scaling rule. In output ratios the coefficient cancels: $E(kv)/E(v)=k^2$. Thus the multiplier depends on the input factor and exponent, not on the coefficient $3$.`,
  },
  {
    id: `math-8-38`,
    case_id: `MATH 8.38`,
    title: `Surface Material for Similar Storage Silos`,
    context: `For a line of geometrically similar grain silos, exterior sheet-metal use is modeled by $M(c)=8c^{2/3}$, where $c>0$ is capacity in standardized volume units and $M$ is measured in sheet units.`,
    statements: [
      `A silo with $c=8$ uses $32$ sheet units.`,
      `Increasing capacity from $8$ to $64$ multiplies sheet-metal use by $4$.`,
      `Multiplying capacity by $27$ multiplies sheet-metal use by $9$.`,
      `The coefficient $8$ affects the scaling factor $M(kc)/M(c)$.`,
      `The model is increasing on its stated domain.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A)** $8^{2/3}=(\\sqrt[3]{8})^2=2^2=4$, so $M(8)=8\\cdot4=32$. The claim is true.`,
      `**B)** The capacity factor is $64/8=8$. Therefore the material factor is $8^{2/3}=4$. The claim is true.`,
      `**C)** Under a factor of $27$, the output factor is $27^{2/3}=(\\sqrt[3]{27})^2=3^2=9$. The claim is true.`,
      `**D)** $M(kc)/M(c)=8(kc)^{2/3}/(8c^{2/3})=k^{2/3}$. The coefficient cancels, so the claim is false.`,
      `**E)** Both the coefficient and exponent are positive. For $c>0$, a larger input produces a larger value of $c^{2/3}$, so the claim is true.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 38,
    solution_overview: `Rewrite fractional powers with cube roots when evaluating clean inputs. For comparisons, use $M(kc)/M(c)=k^{2/3}$; the coefficient cancels. Since the exponent is positive, the model increases over $c>0$, though less than proportionally because $2/3<1$.`,
  },
  {
    id: `math-8-39`,
    case_id: `MATH 8.39`,
    title: `Inspection Time per Shipment`,
    context: `A customs unit models inspection time per shipment by $T(n)=96n^{-1}$ minutes, where $n>0$ is the number of identical inspection teams assigned concurrently. The model ignores coordination delays.`,
    statements: [
      `With $4$ teams, modeled inspection time is $24$ minutes.`,
      `Doubling the number of teams halves the modeled time.`,
      `With $12$ teams, modeled inspection time is $8$ minutes.`,
      `As $n$ becomes very large, $T(n)$ approaches $0$.`,
      `The model permits substitution of $n=0$ and gives $T(0)=0$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A)** $T(4)=96\\cdot4^{-1}=96/4=24$ minutes. The claim is true.`,
      `**B)** $T(2n)/T(n)=2^{-1}=1/2$. The modeled time is halved, so the claim is true.`,
      `**C)** $T(12)=96/12=8$ minutes. The claim is true.`,
      `**D)** Since $T(n)=96/n$, the denominator grows without bound while the numerator stays fixed. Thus $\\lim_{n\\to\\infty}T(n)=0$, so the claim is true.`,
      `**E)** The context specifies $n>0$, and $96/0$ is undefined. Zero teams is outside the mathematical domain; the claim is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 39,
    solution_overview: `The exponent $-1$ makes this an inverse-proportionality model: $T(n)=96/n$. This form gives exact values, the halving rule under input doubling, and the horizontal asymptote $T=0$. The asymptote is not an allowed value at $n=0$; that input is outside the domain.`,
  },
  {
    id: `math-8-40`,
    case_id: `MATH 8.40`,
    title: `Illuminance Along a Museum Gallery`,
    context: `Illuminance from a focused gallery lamp is approximated by $L(d)=800d^{-2}$ lux, where $d>0$ is distance from the lamp in meters.`,
    statements: [
      `At $d=2$, modeled illuminance is $200$ lux.`,
      `Moving from $2$ meters to $4$ meters reduces illuminance to $50$ lux.`,
      `Tripling distance divides illuminance by $9$.`,
      `The graph has a horizontal asymptote at $L=0$.`,
      `For every finite $d>0$, the model gives positive illuminance.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A)** $L(2)=800/2^2=800/4=200$ lux. The claim is true.`,
      `**B)** $L(4)=800/4^2=800/16=50$ lux. Equivalently, doubling distance quarters the output. The claim is true.`,
      `**C)** $L(3d)/L(d)=3^{-2}=1/9$. The claim is true.`,
      `**D)** As $d\\to\\infty$, $800/d^2\\to0$. Hence $L=0$ is a horizontal asymptote, so the claim is true.`,
      `**E)** For finite $d>0$, both $800$ and $d^2$ are positive, so $800/d^2>0$. The model approaches but never reaches zero. The claim is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 40,
    solution_overview: `Convert the negative exponent to $L(d)=800/d^2$. Exact substitution settles the numerical claims. The ratio rule $L(kd)/L(d)=k^{-2}$ handles distance changes, while the limit at infinity distinguishes an approached asymptote from an attained output.`,
  },
  {
    id: `math-8-41`,
    case_id: `MATH 8.41`,
    title: `Audit Cost Under Scale Economies`,
    context: `A compliance firm estimates the cost of auditing a standardized portfolio by $C(q)=600q^{1/2}$ euros, where $q>0$ is the portfolio size index.`,
    statements: [
      `At $q=25$, modeled audit cost is €3,000.`,
      `Increasing $q$ from $25$ to $100$ doubles modeled cost.`,
      `If $q$ is multiplied by $9$, modeled cost is multiplied by $3$.`,
      `Modeled cost per unit of size is $C(q)/q=600q^{-1/2}$.`,
      `Because $C(q)$ increases, $C(q)/q$ also increases with $q$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A)** $C(25)=600\\sqrt{25}=600\\cdot5=3{,}000$. The claim is true.`,
      `**B)** The input factor is $100/25=4$, so the output factor is $4^{1/2}=2$. The claim is true.`,
      `**C)** $C(9q)/C(q)=9^{1/2}=3$. The claim is true.`,
      `**D)** Divide by $q$: $C(q)/q=600q^{1/2-1}=600q^{-1/2}$. The claim is true.`,
      `**E)** Total cost increases because its exponent is $1/2>0$, but unit cost has exponent $-1/2<0$ and therefore decreases. The claim is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 41,
    solution_overview: `The square-root exponent creates subproportional growth. Scaling $q$ by $k$ scales total cost by $\\sqrt{k}$. Dividing total cost by quantity subtracts one from the exponent, yielding a negative exponent; this is why total cost can rise while average cost falls.`,
  },
  {
    id: `math-8-42`,
    case_id: `MATH 8.42`,
    title: `Decline of Airborne Particle Concentration`,
    context: `After an industrial filter is activated, airborne particle concentration is modeled by $P(t)=512t^{-3/2}$ micrograms per cubic meter for $t>0$ hours.`,
    statements: [
      `At $t=4$, modeled concentration is $64$ micrograms per cubic meter.`,
      `Increasing time from $4$ to $16$ divides concentration by $8$.`,
      `Multiplying time by $9$ divides concentration by $27$.`,
      `The model is decreasing for $t>0$.`,
      `The model predicts a finite concentration of $512$ at activation time $t=0$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A)** $4^{3/2}=(\\sqrt4)^3=8$, so $P(4)=512/8=64$. The claim is true.`,
      `**B)** The time factor is $16/4=4$. The concentration factor is $4^{-3/2}=1/8$, so the claim is true.`,
      `**C)** $P(9t)/P(t)=9^{-3/2}=1/(\\sqrt9)^3=1/27$. The claim is true.`,
      `**D)** A positive coefficient with a negative exponent gives a decreasing function on $t>0$. The claim is true.`,
      `**E)** At $t=0$, the expression requires division by $0^{3/2}$. It is undefined and diverges as $t\\to0^+$; the claim is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 42,
    solution_overview: `Treat $t^{-3/2}$ as $1/t^{3/2}$ and evaluate the clean square-root inputs. The negative exponent makes concentration decrease, gives a zero limit at large times, and excludes $t=0$. The coefficient $512$ is not the output at zero.`,
  },
  {
    id: `math-8-43`,
    case_id: `MATH 8.43`,
    title: `Storm-Surge Loss Index`,
    context: `An insurer models the loss index for a coastal district by $D(h)=16h^{3/2}$ for surge height $h>0$ meters. The index is a comparative measure, not a currency forecast.`,
    statements: [
      `At $h=4$, the loss index is $128$.`,
      `Increasing surge height from $4$ to $9$ multiplies the loss index by $27/8$.`,
      `Doubling surge height multiplies the index by $2\\sqrt2$.`,
      `The percentage change caused by multiplying height by a fixed factor is independent of the coefficient $16$.`,
      `The model grows faster than the linear benchmark $16h$ as $h\\to\\infty$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A)** $D(4)=16(\\sqrt4)^3=16\\cdot8=128$. The claim is true.`,
      `**B)** Use a ratio rather than evaluating separately: $D(9)/D(4)=(9/4)^{3/2}=(3/2)^3=27/8$. The claim is true.`,
      `**C)** $D(2h)/D(h)=2^{3/2}=2\\sqrt2$. Thus the output more than doubles, and the claim is true.`,
      `**D)** For any $k>0$, $D(kh)/D(h)=16(kh)^{3/2}/(16h^{3/2})=k^{3/2}$. The coefficient cancels, so the percentage change depends only on $k$ and the exponent. The claim is true.`,
      `**E)** Compare $D(h)$ with $16h$: their ratio is $h^{3/2}/h=h^{1/2}$. Since $\\sqrt h\\to\\infty$, the power model eventually dominates the linear benchmark. The claim is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 43,
    solution_overview: `Apply ratio reasoning throughout. The exponent $3/2$ converts an input factor $k$ into $k^{3/2}$, independent of the coefficient. To compare with a linear benchmark, divide the models: the ratio reduces to $\\sqrt h$, whose divergence establishes faster asymptotic growth without requiring a graph.`,
  },
  {
    id: `math-8-44`,
    case_id: `MATH 8.44`,
    title: `Market Impact of a Block Trade`,
    context: `A trading desk models temporary price impact by $I(Q)=5Q^{1/2}$ basis points for an order-size index $Q>0$. A separate linear estimate is $J(Q)=Q$ basis points.`,
    statements: [
      `At $Q=100$, the power model gives $I(100)=50$ basis points.`,
      `The two models agree at $Q=25$.`,
      `For $0<Q<25$, the power model gives greater impact than the linear estimate.`,
      `For $Q>25$, the linear estimate gives greater impact than the power model.`,
      `Since $I(Q)$ is a power function and $J(Q)$ is linear, the models cannot cross for positive $Q$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A)** $I(100)=5\\sqrt{100}=5\\cdot10=50$ basis points. The claim is true.`,
      `**B)** $I(25)=5\\sqrt{25}=25$, while $J(25)=25$. The models agree, so the claim is true.`,
      `**C)** Compare by division: $I(Q)/J(Q)=5\\sqrt Q/Q=5/\\sqrt Q$. If $0<Q<25$, then $\\sqrt Q<5$, so this ratio exceeds $1$. Hence $I(Q)>J(Q)$, and the claim is true.`,
      `**D)** The same ratio $5/\\sqrt Q$ is below $1$ when $Q>25$. Therefore $I(Q)<J(Q)$ after the crossing, and the claim is true.`,
      `**E)** Different functional forms can cross. Here equality reduces to $5\\sqrt Q=Q$; for positive $Q$, division by $\\sqrt Q$ gives $\\sqrt Q=5$, hence $Q=25$. The claim is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 44,
    solution_overview: `One exact evaluation identifies the positive crossing. A ratio then establishes which model is larger on either side: $I(Q)/J(Q)=5/\\sqrt Q$. This avoids testing isolated points and shows why different exponents do not prevent two models from sharing an output.`,
  },
  {
    id: `math-8-45`,
    case_id: `MATH 8.45`,
    title: `Allometric Energy Use in Livestock`,
    context: `Daily energy use for an animal is approximated by $E(m)=24m^{3/4}$ units, where body-mass index $m>0$. A farm's linear ration rule is $R(m)=6m$ units.`,
    statements: [
      `For an animal with $m=16$, the model gives $E(16)=192$ units.`,
      `Multiplying body mass by $16$ multiplies modeled energy use by $8$.`,
      `Energy use per unit of mass under the power model is $24m^{-1/4}$ and decreases as $m$ increases.`,
      `The power model and ration rule have no positive crossing because their exponents differ.`,
      `For every sufficiently large $m$, the power model exceeds the linear ration rule.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A)** $16^{3/4}=(\\sqrt[4]{16})^3=2^3=8$. Hence $E(16)=24\\cdot8=192$, so the claim is true.`,
      `**B)** The output multiplier is $16^{3/4}=8$. This follows from the input factor alone and does not require knowing the starting mass. The claim is true.`,
      `**C)** Average energy is $E(m)/m=24m^{3/4-1}=24m^{-1/4}$. Its exponent is negative, so the average decreases on $m>0$. The claim is true.`,
      `**D)** Equality is possible despite different exponents. Set $24m^{3/4}=6m$ and divide by $6m^{3/4}>0$: $4=m^{1/4}$, so $m=4^4=256$. The claim is false.`,
      `**E)** Compare the models by $E(m)/R(m)=4m^{-1/4}=4/\\sqrt[4]m$. This ratio tends to $0$ as $m\\to\\infty$, so the linear rule eventually exceeds the power model. The claim is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 45,
    solution_overview: `Fractional powers are easiest to evaluate through roots. Dividing by mass changes the exponent from $3/4$ to $-1/4$, establishing decreasing use per unit. For the competing model, solve the clean positive crossing and examine the ratio $4m^{-1/4}$; it also determines the eventual ordering.`,
  },
  {
    id: `math-8-46`,
    case_id: `MATH 8.46`,
    title: `Retail Footfall by Distance`,
    context: `A regional planner models daily footfall from a residential zone by $F(d)=2400d^{-1/2}$ visits for distance $d>0$ kilometers. A proposed shuttle could instead generate $S(d)=300d^{1/2}$ visits.`,
    statements: [
      `At $d=4$, the distance-decay model gives $1,200$ visits.`,
      `Multiplying distance by $9$ divides $F(d)$ by $3$.`,
      `The two models agree at a positive distance.`,
      `For all $d>0$, the decay model gives more visits than the shuttle model.`,
      `As distance tends to infinity, the decay model tends to $0$.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A)** $F(4)=2400/\\sqrt4=2400/2=1200$. The claim is true.`,
      `**B)** $F(9d)/F(d)=9^{-1/2}=1/3$. The claim is true.`,
      `**C)** The ratio $F(d)/S(d)=8/d$ equals $1$ when $d=8$, so a positive crossing exists. The claim is true.`,
      `**D)** The ratio $8/d$ exceeds $1$ only for $0<d<8$. The shuttle model dominates after the crossing. The claim is false.`,
      `**E)** $F(d)=2400/\\sqrt d\\to0$ as $d\\to\\infty$. The claim is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 46,
    solution_overview: `The two exponents have opposite signs. Scaling by $9$ multiplies the decay model by $9^{-1/2}=1/3$. Comparing the models through their ratio reduces the problem to $8/d$, which proves a crossing at $d=8$ and gives the ordering on both sides. Their limits at infinity are opposite.`,
  },
  {
    id: `math-8-47`,
    case_id: `MATH 8.47`,
    title: `Output Response of Rooftop Solar Area`,
    context: `A design study models annual usable output by $P(a)=50a^{6/5}$ megawatt-hours for effective panel-area index $a>0$. A redesign maps a roof index $x>0$ to effective area $a(x)=x^{5/2}$.`,
    statements: [
      `The composed output model is $P(a(x))=50x^3$.`,
      `Doubling roof index $x$ multiplies composed output by $6$.`,
      `Because the original exponent is $6/5$, adding $5$ to effective area adds a constant amount to output.`,
      `For fixed increments in $a$, the percentage increase in $P(a)$ is constant.`,
      `The model $P(a)=50a^{6/5}$ is exponential because the input appears in an exponent.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A)** Substitute the area map into the power model and multiply exponents: $P(a(x))=50(x^{5/2})^{6/5}=50x^{(5/2)(6/5)}=50x^3$. The claim is true.`,
      `**B)** The composed exponent is $3$, so replacing $x$ by $2x$ gives a factor $2^3=8$, not $6$. Multipliers come from raising the input factor to the exponent. The claim is false.`,
      `**C)** A power function with exponent $6/5$ does not have constant additive increments. The change $50[(a+5)^{6/5}-a^{6/5}]$ depends on the starting value $a$. The claim is false.`,
      `**D)** Constant percentage growth under fixed additive input increments characterizes an exponential pattern, not this power law. Here $P(a+h)/P(a)=(1+h/a)^{6/5}$ depends on $a$. The claim is false.`,
      `**E)** In $50a^{6/5}$, the exponent is the fixed number $6/5$ and the variable is the base. An exponential function would have the variable in the exponent, such as $50b^a$. The claim is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 47,
    solution_overview: `Composition of power functions multiplies exponents, so the two-stage model becomes cubic. Cubic scaling gives a factor of eight under doubling. The remaining claims distinguish power behavior from additive and exponential behavior: fixed input additions do not create fixed output additions or fixed percentage changes, and the variable is the base rather than the exponent.`,
  },
  {
    id: `math-8-48`,
    case_id: `MATH 8.48`,
    title: `Learning-Curve Cost for Battery Cells`,
    context: `A battery producer models labor cost per cell after cumulative output $n>0$ by $C(n)=320n^{-1/4}$ euros. A production program maps time index $t>0$ to cumulative output $n(t)=16t^2$.`,
    statements: [
      `The time-based cost model simplifies to $C(n(t))=160t^{-1/2}$.`,
      `Multiplying cumulative output by $16$ halves labor cost per cell.`,
      `Multiplying the time index by $9$ divides the composed labor cost by $3$.`,
      `Total modeled labor cost for the first $n$ cells is exactly $320n^{3/4}$.`,
      `For every finite output level $n>0$, the model gives a strictly positive cost per cell.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A)** Compose and simplify: $C(n(t))=320(16t^2)^{-1/4}=320\\cdot16^{-1/4}t^{-1/2}=160t^{-1/2}$. The claim is true.`,
      `**B)** The output multiplier is $16^{-1/4}=1/2$. Thus a sixteenfold increase in cumulative output halves per-cell labor cost. The claim is true.`,
      `**C)** Under $t\\mapsto9t$, the composed model scales by $9^{-1/2}=1/3$. The claim is true.`,
      `**D)** Multiplying the current per-cell cost by $n$ gives $320n^{3/4}$, but that is not the exact total of changing costs over cells $1$ through $n$. The claim is false.`,
      `**E)** For every finite $n>0$, $320n^{-1/4}>0$. The claim is true.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 48,
    solution_overview: `Substitution into the learning curve multiplies the exponents and also transforms the coefficient, producing $160t^{-1/2}$. Scaling must then use this effective exponent. Distinguish marginal or current unit cost from accumulated total cost, and distinguish approaching zero from reaching zero at a finite input.`,
  },
  {
    id: `math-8-49`,
    case_id: `MATH 8.49`,
    title: `Sediment Transport and Channel Capacity`,
    context: `For flow speed $v>0$, a river engineer uses $S(v)=2v^3$ for sediment transport and $K(v)=16v$ for channel transport capacity, in compatible index units.`,
    statements: [
      `The models agree at the positive speed $v=2\\sqrt2$.`,
      `For $0<v<2\\sqrt2$, sediment transport is below channel capacity.`,
      `For $v>2\\sqrt2$, sediment transport exceeds channel capacity.`,
      `Doubling speed multiplies the ratio $S(v)/K(v)$ by $8$.`,
      `Because both models tend to infinity, their difference tends to $0$ as $v\\to\\infty$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A)** Set $2v^3=16v$. Since $v>0$, divide by $2v$ to obtain $v^2=8$, so $v=2\\sqrt2$. The claim is true.`,
      `**B)** Compare by ratio: $S(v)/K(v)=(2v^3)/(16v)=v^2/8$. For $0<v<2\\sqrt2$, one has $v^2<8$, so the ratio is below $1$. The claim is true.`,
      `**C)** For $v>2\\sqrt2$, $v^2>8$, making $S(v)/K(v)>1$. Hence the cubic transport model exceeds linear capacity after the crossing. The claim is true.`,
      `**D)** The ratio is proportional to $v^2$. Under $v\\mapsto2v$, it is multiplied by $2^2=4$, not $8$. The cubic output itself scales by $8$, but the linear denominator simultaneously scales by $2$. The claim is false.`,
      `**E)** $S(v)-K(v)=2v^3-16v=2v(v^2-8)$, which tends to positive infinity. Two functions can both diverge while their gap also diverges; the claim is false.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 49,
    solution_overview: `Solve the positive crossing by factoring out the admissible positive input. The ratio $S/K=v^2/8$ then gives the ordering on both sides and reveals that doubling multiplies the ratio by four. Comparing leading powers shows that the cubic-minus-linear difference diverges rather than vanishes.`,
  },
  {
    id: `math-8-50`,
    case_id: `MATH 8.50`,
    title: `Isoelastic Demand, Revenue, and Price Indexing`,
    context: `Demand for a digital service is modeled by $q(p)=800p^{-3/2}$ subscriptions, where normalized price $p>0$. Management also defines revenue index $R(p)=p\\,q(p)$ and a policy map $p(s)=s^{2/3}$ for a positive policy index $s$.`,
    statements: [
      `The revenue index simplifies to $R(p)=800p^{-1/2}$.`,
      `Doubling price multiplies demand by $2^{-3/2}=1/(2\\sqrt2)$.`,
      `The composed demand model is $q(p(s))=800s^{-1}$.`,
      `Under the policy map, tripling $s$ divides modeled demand by $3$.`,
      `As price tends to infinity, both demand and the revenue index tend to $0$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A)** Multiply by price and combine powers with the same base: $R(p)=p\\cdot800p^{-3/2}=800p^{1-3/2}=800p^{-1/2}$. The claim is true.`,
      `**B)** $q(2p)/q(p)=2^{-3/2}=1/2^{3/2}=1/(2\\sqrt2)$. The coefficient and starting price cancel, so the claim is true.`,
      `**C)** Substitute $p(s)=s^{2/3}$ and multiply exponents: $q(p(s))=800(s^{2/3})^{-3/2}=800s^{(2/3)(-3/2)}=800s^{-1}$. The claim is true.`,
      `**D)** The composed exponent is $-1$. Therefore $q(p(3s))/q(p(s))=3^{-1}=1/3$, so tripling the policy index divides demand by three. The claim is true.`,
      `**E)** The demand exponent $-3/2$ and revenue exponent $-1/2$ are both negative. Hence $q(p)\\to0$ and $R(p)\\to0$ as $p\\to\\infty$, although revenue decreases more slowly. The claim is true.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 50,
    solution_overview: `Revenue multiplication adds exponents, changing demand's exponent from $-3/2$ to $-1/2$. Composition with the policy map multiplies exponents and produces inverse proportionality in $s$. Ratio rules then settle scaling, while the negative exponents establish both limits at high price.`,
  }
];
