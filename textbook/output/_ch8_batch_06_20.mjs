import { pathToFileURL } from 'url';

export const BATCH = [
  {
    id: "math-8-6",
    case_id: "MATH 8.06",
    title: "Server load under a doubling rule",
    context: "A server's peak load is modeled by the power function $L(x)=A x^r$, where $x>0$ is the number of simultaneous jobs. Tests show that doubling $x$ multiplies peak load by $4$.",
    statements: [
      "The exponent in the load model is $r=2$.",
      "Tripling the number of jobs multiplies peak load by $8$.",
      "Halving the number of jobs halves peak load.",
      "The load elasticity with respect to the number of jobs is $4$.",
      "Peak load decreases as the number of jobs increases."
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      "**A) The exponent in the load model is $r=2$.** (true)\n\nThe doubling rule gives $2^r=4=2^2$, so $r=2$.",
      "**B) Tripling the number of jobs multiplies peak load by $8$.** (false)\n\nWith $r=2$, the factor is $3^2=9$, not $8$.",
      "**C) Halving the number of jobs halves peak load.** (false)\n\nThe factor is $(1/2)^2=1/4$.",
      "**D) The load elasticity with respect to the number of jobs is $4$.** (false)\n\nFor $A x^r$, the constant elasticity equals $r=2$.",
      "**E) Peak load decreases as the number of jobs increases.** (false)\n\nBecause $A>0$ and $r=2>0$, the function increases on $x>0$."
    ],
    difficulty_level: "1/5",
    sort_order: 6,
    solution_overview: "Use the scale-factor identity $L(kx)/L(x)=k^r$. The observed doubling factor yields $2^r=4$, hence $r=2$. All other scale factors and the elasticity follow from this exponent."
  },
  {
    id: "math-8-7",
    case_id: "MATH 8.07",
    title: "Square-root response of survey reach",
    context: "The number of usable survey responses from an outreach intensity $x>0$ is $Q(x)=12x^{0.5}$.",
    statements: [
      "At intensity $x=4$, the model predicts $24$ usable responses.",
      "Increasing intensity from $1$ to $9$ triples the predicted response count.",
      "A predicted response count of $36$ requires intensity $x=9$.",
      "Doubling intensity multiplies the predicted response count by $\\sqrt{2}$.",
      "The response elasticity with respect to intensity is $0.5$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      "**A) At intensity $x=4$, the model predicts $24$ usable responses.** (true)\n\n$Q(4)=12\\sqrt{4}=24$.",
      "**B) Increasing intensity from $1$ to $9$ triples the predicted response count.** (true)\n\nThe ratio is $(9/1)^{0.5}=3$.",
      "**C) A predicted response count of $36$ requires intensity $x=9$.** (true)\n\nSolving $12\\sqrt{x}=36$ gives $\\sqrt{x}=3$ and $x=9$.",
      "**D) Doubling intensity multiplies the predicted response count by $\\sqrt{2}$.** (true)\n\nThe scale factor is $2^{0.5}=\\sqrt{2}$.",
      "**E) The response elasticity with respect to intensity is $0.5$.** (true)\n\nThe elasticity of a power function equals its exponent."
    ],
    difficulty_level: "1/5",
    sort_order: 7,
    solution_overview: "Evaluate or invert $Q(x)=12\\sqrt{x}$ as needed. Ratios eliminate the coefficient: $Q(x_2)/Q(x_1)=(x_2/x_1)^{0.5}$, and the exponent is also the constant elasticity."
  },
  {
    id: "math-8-8",
    case_id: "MATH 8.08",
    title: "Comparing quadratic and linear processing",
    context: "Two processing-time models for batch size $x>0$ are $F(x)=2x^2$ and $G(x)=8x$.",
    statements: [
      "At batch size $x=2$, model $F$ predicts a longer processing time than model $G$.",
      "At batch size $x=8$, model $F$ predicts $128$ time units.",
      "The two models predict the same processing time at $x=4$.",
      "For every $x>0$, the ratio $F(x)/G(x)$ equals $x/2$.",
      "Model $G$ has elasticity $2$ with respect to batch size."
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      "**A) At batch size $x=2$, model $F$ predicts a longer processing time than model $G$.** (false)\n\n$F(2)=8$ while $G(2)=16$.",
      "**B) At batch size $x=8$, model $F$ predicts $128$ time units.** (true)\n\n$F(8)=2\\times 8^2=128$.",
      "**C) The two models predict the same processing time at $x=4$.** (true)\n\n$F(4)=32=G(4)$.",
      "**D) For every $x>0$, the ratio $F(x)/G(x)$ equals $x/2$.** (false)\n\n$F(x)/G(x)=(2x^2)/(8x)=x/4$.",
      "**E) Model $G$ has elasticity $2$ with respect to batch size.** (false)\n\n$G(x)=8x^1$, so its elasticity is $1$."
    ],
    difficulty_level: "1/5",
    sort_order: 8,
    solution_overview: "Evaluate both models at the stated batch sizes. For the crossover, solve $2x^2=8x$ on $x>0$, giving $x=4$. Simplifying their ratio gives $F/G=x/4$."
  },
  {
    id: "math-8-9",
    case_id: "MATH 8.09",
    title: "Capped warehouse throughput",
    context: "Unconstrained throughput at staffing index $x>0$ is $D(x)=5x^{0.5}$. A loading dock imposes a hard cap of $20$, so actual throughput is $T(x)=\\min\\{5x^{0.5},20\\}$.",
    statements: [
      "At staffing index $x=9$, actual throughput is $15$.",
      "At staffing index $x=16$, the dock cap is not binding.",
      "At staffing index $x=25$, actual throughput is $25$.",
      "Before the cap binds, doubling staffing doubles actual throughput.",
      "An observed actual throughput of $20$ uniquely identifies staffing index $x=16$."
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      "**A) At staffing index $x=9$, actual throughput is $15$.** (true)\n\n$5\\sqrt{9}=15<20$, so the cap does not alter the value.",
      "**B) At staffing index $x=16$, the dock cap is not binding.** (false)\n\n$5\\sqrt{16}=20$, exactly the cap, so the constraint binds.",
      "**C) At staffing index $x=25$, actual throughput is $25$.** (false)\n\nThe unconstrained value is $25$, but actual throughput is capped at $20$.",
      "**D) Before the cap binds, doubling staffing doubles actual throughput.** (false)\n\nA doubling multiplies the square-root model by $\\sqrt{2}$.",
      "**E) An observed actual throughput of $20$ uniquely identifies staffing index $x=16$.** (false)\n\nEvery $x\\ge 16$ produces capped throughput $20$."
    ],
    difficulty_level: "2/5",
    sort_order: 9,
    solution_overview: "First solve the cap threshold $5\\sqrt{x}=20$, which gives $x=16$. Below it, use the square-root model; at and above it, actual throughput remains $20$."
  },
  {
    id: "math-8-10",
    case_id: "MATH 8.10",
    title: "Recovering an inverse workload model",
    context: "Average completion time follows $C(x)=A x^r$ for resource level $x>0$. Doubling resources halves completion time, and $C(2)=40$ minutes.",
    statements: [
      "The exponent is $r=-1$.",
      "The coefficient is $A=80$.",
      "At resource level $x=4$, completion time is $20$ minutes.",
      "Quadrupling resources divides completion time by $4$.",
      "A completion time of $10$ minutes requires resource level $x=8$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      "**A) The exponent is $r=-1$.** (true)\n\nThe scale rule is $2^r=1/2$, so $r=-1$.",
      "**B) The coefficient is $A=80$.** (true)\n\n$40=A\\times 2^{-1}=A/2$, hence $A=80$.",
      "**C) At resource level $x=4$, completion time is $20$ minutes.** (true)\n\n$C(4)=80/4=20$.",
      "**D) Quadrupling resources divides completion time by $4$.** (true)\n\nThe factor is $4^{-1}=1/4$.",
      "**E) A completion time of $10$ minutes requires resource level $x=8$.** (true)\n\nSolving $80/x=10$ gives $x=8$."
    ],
    difficulty_level: "2/5",
    sort_order: 10,
    solution_overview: "Translate the doubling rule into $2^r=1/2$ to obtain $r=-1$. Then use $C(2)=40$ to recover $A=80$, giving the shared model $C(x)=80/x$."
  },
  {
    id: "math-8-11",
    case_id: "MATH 8.11",
    title: "Price elasticity and subscription revenue",
    context: "Subscription demand at price $p>0$ is $q(p)=81p^{-2}$. Revenue is price times demand: $R(p)=p\\times q(p)$.",
    statements: [
      "At price $p=9$, demand is $1$ subscription unit.",
      "At price $p=3$, revenue is $27$.",
      "Tripling price divides demand by $3$.",
      "Revenue has power exponent $-2$ with respect to price.",
      "The revenue model has an interior maximum on $p>0$."
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "**A) At price $p=9$, demand is $1$ subscription unit.** (true)\n\n$q(9)=81/9^2=1$.",
      "**B) At price $p=3$, revenue is $27$.** (true)\n\n$q(3)=9$, so $R(3)=3\\times 9=27$.",
      "**C) Tripling price divides demand by $3$.** (false)\n\nThe demand factor is $3^{-2}=1/9$.",
      "**D) Revenue has power exponent $-2$ with respect to price.** (false)\n\n$R(p)=p\\times81p^{-2}=81p^{-1}$, so its exponent is $-1$.",
      "**E) The revenue model has an interior maximum on $p>0$.** (false)\n\n$R(p)=81/p$ is strictly decreasing on $p>0$."
    ],
    difficulty_level: "2/5",
    sort_order: 11,
    solution_overview: "Derive revenue before evaluating claims: $R(p)=p(81p^{-2})=81p^{-1}$. Demand therefore scales with exponent $-2$, while revenue scales with exponent $-1$."
  },
  {
    id: "math-8-12",
    case_id: "MATH 8.12",
    title: "Fixed and variable audit cost",
    context: "The total cost of auditing $x>0$ records is $C(x)=64+4x^{0.5}$. The first term is fixed cost and the second is variable cost.",
    statements: [
      "Auditing $64$ records has total cost $96$.",
      "Quadrupling the number of records doubles the variable-cost component.",
      "At $x=64$, average cost per record is $1.5$.",
      "At $x=64$, fixed cost is one half of total cost.",
      "A total cost of $80$ corresponds to $x=64$."
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      "**A) Auditing $64$ records has total cost $96$.** (true)\n\n$C(64)=64+4\\sqrt{64}=64+32=96$.",
      "**B) Quadrupling the number of records doubles the variable-cost component.** (true)\n\nThe variable factor is $4^{0.5}=2$.",
      "**C) At $x=64$, average cost per record is $1.5$.** (true)\n\nAverage cost is $C(64)/64=96/64=1.5$.",
      "**D) At $x=64$, fixed cost is one half of total cost.** (false)\n\nThe fixed-cost share is $64/96=2/3$.",
      "**E) A total cost of $80$ corresponds to $x=64$.** (false)\n\n$64+4\\sqrt{x}=80$ gives $\\sqrt{x}=4$, hence $x=16$."
    ],
    difficulty_level: "2/5",
    sort_order: 12,
    solution_overview: "Keep fixed and variable cost separate. At $x=64$, variable cost is $4\\sqrt{64}=32$ and total cost is $96$. To invert total cost, subtract the fixed $64$ before solving the square-root equation."
  },
  {
    id: "math-8-13",
    case_id: "MATH 8.13",
    title: "Composing adoption and emissions intensity",
    context: "A platform's adoption index after $t>0$ periods is $A(t)=t^2$. Emissions intensity at adoption level $a>0$ is $E(a)=243a^{-0.5}$. The time-based intensity is the composition $E(A(t))$.",
    statements: [
      "At $t=3$, the composed emissions intensity is $81$.",
      "At $t=9$, the composed emissions intensity is $9$.",
      "The composition $E(A(t))$ has exponent $-0.5$ with respect to $t$.",
      "Tripling $t$ divides the composed emissions intensity by $9$.",
      "The composed model is defined at $t=0$ under the stated domains."
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      "**A) At $t=3$, the composed emissions intensity is $81$.** (true)\n\n$E(A(3))=243(3^2)^{-0.5}=243/3=81$.",
      "**B) At $t=9$, the composed emissions intensity is $9$.** (false)\n\nThe composition gives $243/9=27$.",
      "**C) The composition $E(A(t))$ has exponent $-0.5$ with respect to $t$.** (false)\n\n$243(t^2)^{-0.5}=243t^{-1}$ for $t>0$.",
      "**D) Tripling $t$ divides the composed emissions intensity by $9$.** (false)\n\nThe composite exponent is $-1$, so tripling gives factor $1/3$.",
      "**E) The composed model is defined at $t=0$ under the stated domains.** (false)\n\nAt $t=0$, adoption is $0$, but $E(a)$ requires $a>0$ and contains $a^{-0.5}$."
    ],
    difficulty_level: "3/5",
    sort_order: 13,
    solution_overview: "Compose first: $E(A(t))=243(t^2)^{-0.5}=243t^{-1}$ on $t>0$. The product of exponents, $2\\times(-0.5)=-1$, controls all time scaling."
  },
  {
    id: "math-8-14",
    case_id: "MATH 8.14",
    title: "Inverting a capacity power law",
    context: "A machine's output at control setting $x>0$ is $y=8x^{3/2}$. Operators sometimes need to recover the setting from a target output.",
    statements: [
      "At setting $x=4$, output is $64$.",
      "An output target of $216$ requires setting $x=9$.",
      "Doubling the setting multiplies output by $4$.",
      "The inverse setting function has exponent $3/2$ with respect to output.",
      "The elasticity of the required setting with respect to target output is $3/2$."
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "**A) At setting $x=4$, output is $64$.** (true)\n\n$8\\times4^{3/2}=8\\times8=64$.",
      "**B) An output target of $216$ requires setting $x=9$.** (true)\n\n$216/8=27$ and $27^{2/3}=9$, so $x=9$.",
      "**C) Doubling the setting multiplies output by $4$.** (false)\n\nThe factor is $2^{3/2}=2\\sqrt{2}$.",
      "**D) The inverse setting function has exponent $3/2$ with respect to output.** (false)\n\nInverting gives $x=(y/8)^{2/3}$, whose exponent is $2/3$.",
      "**E) The elasticity of the required setting with respect to target output is $3/2$.** (false)\n\nThe inverse power function has elasticity $2/3$."
    ],
    difficulty_level: "3/5",
    sort_order: 14,
    solution_overview: "For direct evaluation use $y=8x^{3/2}$. For targets, divide by $8$ and raise to the reciprocal exponent: $x=(y/8)^{2/3}$. Thus the inverse elasticity is $2/3$."
  },
  {
    id: "math-8-15",
    case_id: "MATH 8.15",
    title: "From radius growth to service area",
    context: "A delivery network's effective radius after investment index $t>0$ is $r(t)=2t^{0.5}$. Its circular service area is $S(t)=\\pi[r(t)]^2$.",
    statements: [
      "The composed area model is $S(t)=4\\pi t$.",
      "At investment index $t=9$, the radius is $6$.",
      "At investment index $t=9$, service area is $36\\pi$.",
      "Quadrupling investment doubles the radius.",
      "Doubling investment doubles service area."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      "**A) The composed area model is $S(t)=4\\pi t$.** (true)\n\n$S(t)=\\pi(2t^{0.5})^2=4\\pi t$.",
      "**B) At investment index $t=9$, the radius is $6$.** (true)\n\n$r(9)=2\\sqrt{9}=6$.",
      "**C) At investment index $t=9$, service area is $36\\pi$.** (true)\n\nEither $\\pi\\times6^2$ or $4\\pi\\times9$ gives $36\\pi$.",
      "**D) Quadrupling investment doubles the radius.** (true)\n\nRadius scales by $4^{0.5}=2$.",
      "**E) Doubling investment doubles service area.** (true)\n\nThe composed area has exponent $1$, so its doubling factor is $2$."
    ],
    difficulty_level: "3/5",
    sort_order: 15,
    solution_overview: "Substitute the radius model into the area formula: $S(t)=\\pi(2t^{0.5})^2=4\\pi t$. Squaring the radius doubles its exponent from $0.5$ to $1$."
  },
  {
    id: "math-8-16",
    case_id: "MATH 8.16",
    title: "Crossover of two support contracts",
    context: "For workload index $x>0$, two support contracts cost $C_A(x)=64+4x^{0.5}$ and $C_B(x)=16+16x^{0.5}$.",
    statements: [
      "At workload index $x=4$, contract B is cheaper.",
      "At workload index $x=64$, contract A is cheaper.",
      "The contracts have equal cost at $x=16$.",
      "Contract A has constant cost elasticity $0.5$.",
      "Doubling workload doubles the total cost of contract B."
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      "**A) At workload index $x=4$, contract B is cheaper.** (true)\n\n$C_A(4)=72$ and $C_B(4)=48$.",
      "**B) At workload index $x=64$, contract A is cheaper.** (true)\n\n$C_A(64)=96$ while $C_B(64)=144$.",
      "**C) The contracts have equal cost at $x=16$.** (true)\n\nBoth costs equal $80$: $64+4\\times4=16+16\\times4$.",
      "**D) Contract A has constant cost elasticity $0.5$.** (false)\n\nThe variable term has exponent $0.5$, but adding fixed cost means total cost is not a pure power function and does not have constant elasticity $0.5$.",
      "**E) Doubling workload doubles the total cost of contract B.** (false)\n\nOnly the variable term scales by $\\sqrt{2}$; the fixed term remains $16$."
    ],
    difficulty_level: "3/5",
    sort_order: 16,
    solution_overview: "Let $z=\\sqrt{x}$. The crossover equation $64+4z=16+16z$ gives $z=4$ and $x=16$. Fixed terms prevent either total-cost expression from inheriting the variable term's constant elasticity."
  },
  {
    id: "math-8-17",
    case_id: "MATH 8.17",
    title: "Capacity ceiling in a learning curve",
    context: "Unrestricted completed cases after learning index $x>0$ are $U(x)=9x^{3/2}$. Regulation limits recorded completions to $243$, so $V(x)=\\min\\{9x^{3/2},243\\}$.",
    statements: [
      "At learning index $x=4$, recorded completions are $72$.",
      "At learning index $x=9$, the regulatory ceiling is inactive.",
      "A record of $243$ completions uniquely implies $x=9$.",
      "While the ceiling is inactive, doubling $x$ multiplies recorded completions by $4$.",
      "For $x>9$, recorded completions retain elasticity $3/2$."
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      "**A) At learning index $x=4$, recorded completions are $72$.** (true)\n\n$U(4)=9\\times4^{3/2}=9\\times8=72$, below the ceiling.",
      "**B) At learning index $x=9$, the regulatory ceiling is inactive.** (false)\n\n$U(9)=9\\times27=243$, so the ceiling binds exactly there.",
      "**C) A record of $243$ completions uniquely implies $x=9$.** (false)\n\nEvery $x\\ge9$ is recorded as $243$ because of the ceiling.",
      "**D) While the ceiling is inactive, doubling $x$ multiplies recorded completions by $4$.** (false)\n\nThe unrestricted factor is $2^{3/2}=2\\sqrt{2}$, not $4$.",
      "**E) For $x>9$, recorded completions retain elasticity $3/2$.** (false)\n\nAbove the threshold, $V(x)=243$ is constant and has elasticity $0$."
    ],
    difficulty_level: "4/5",
    sort_order: 17,
    solution_overview: "Solve $9x^{3/2}=243$: $x^{3/2}=27$, so $x=27^{2/3}=9$. Below $9$, use the exponent $3/2$; from $9$ onward, the observed function is constant."
  },
  {
    id: "math-8-18",
    case_id: "MATH 8.18",
    title: "Revenue versus platform fee",
    context: "At price $p>0$, demand is $q(p)=64p^{-3/2}$. Sales revenue is $R(p)=p\\times q(p)$, while the platform fee is $F(p)=16p^{0.5}$.",
    statements: [
      "At price $p=4$, demand is $8$ units.",
      "Revenue and the platform fee are equal at price $p=4$.",
      "At price $p=4$, revenue is $16$.",
      "At price $p=16$, revenue exceeds the platform fee.",
      "Revenue has elasticity $-3/2$ with respect to price."
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      "**A) At price $p=4$, demand is $8$ units.** (true)\n\n$q(4)=64/4^{3/2}=64/8=8$.",
      "**B) Revenue and the platform fee are equal at price $p=4$.** (true)\n\nRevenue simplifies to $R(p)=64p^{-0.5}$. At $p=4$, $R=32$, and $F=16\\sqrt{4}=32$.",
      "**C) At price $p=4$, revenue is $16$.** (false)\n\nRevenue is $4\\times8=32$.",
      "**D) At price $p=16$, revenue exceeds the platform fee.** (false)\n\n$R(16)=64/4=16$, whereas $F(16)=16\\times4=64$.",
      "**E) Revenue has elasticity $-3/2$ with respect to price.** (false)\n\nMultiplication by price raises the demand exponent by $1$, so revenue elasticity is $-1/2$."
    ],
    difficulty_level: "4/5",
    sort_order: 18,
    solution_overview: "Derive $R(p)=p(64p^{-3/2})=64p^{-1/2}$. For the crossover, set $64p^{-1/2}=16p^{1/2}$; multiplying by $p^{1/2}$ gives $64=16p$, hence $p=4$."
  },
  {
    id: "math-8-19",
    case_id: "MATH 8.19",
    title: "Calibrating a two-stage production system",
    context: "A time index $t>0$ generates effective input $x(t)=4t^2$. Output from effective input is $y(x)=A x^{3/2}$. The observed output at $t=1$ is $64$.",
    statements: [
      "The output coefficient is $A=8$.",
      "The composed time model is $y(x(t))=64t^3$.",
      "At $t=2$, output is $512$.",
      "Doubling $t$ multiplies output by $8$.",
      "An output of $1728$ corresponds to $t=3$."
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      "**A) The output coefficient is $A=8$.** (true)\n\nAt $t=1$, effective input is $x=4$. Thus $64=A\\times4^{3/2}=8A$, giving $A=8$.",
      "**B) The composed time model is $y(x(t))=64t^3$.** (true)\n\nSubstitute $x(t)=4t^2$: $y=8(4t^2)^{3/2}=8\\times8t^3=64t^3$ for $t>0$.",
      "**C) At $t=2$, output is $512$.** (true)\n\nThe composed model gives $64\\times2^3=512$.",
      "**D) Doubling $t$ multiplies output by $8$.** (true)\n\nThe composite exponent is $2\\times(3/2)=3$, so the factor is $2^3=8$.",
      "**E) An output of $1728$ corresponds to $t=3$.** (true)\n\n$64t^3=1728$ gives $t^3=27$ and therefore $t=3$."
    ],
    difficulty_level: "5/5",
    sort_order: 19,
    solution_overview: "Use the observation at $t=1$: $x(1)=4$ and $64=A4^{3/2}=8A$, so $A=8$. Composition then gives $y(x(t))=8(4t^2)^{3/2}=64t^3$, which supports evaluation, scaling, and inversion."
  },
  {
    id: "math-8-20",
    case_id: "MATH 8.20",
    title: "Calibrated demand and fixed-cost profit",
    context: "Demand has power form $q(p)=A p^r$ for price $p>0$. Tripling price divides demand by $9$, and demand at $p=3$ is $27$. Revenue is $R(p)=p\\times q(p)$, and the venture has fixed operating cost $27$, so profit is $\\Pi(p)=R(p)-27$.",
    statements: [
      "The calibrated demand model predicts $q(3)=27$.",
      "At price $p=3$, profit is $54$.",
      "Profit is zero at price $p=9$.",
      "Doubling price divides revenue by $4$.",
      "At price $p=27$, profit is positive."
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      "**A) The calibrated demand model predicts $q(3)=27$.** (true)\n\nThe scaling rule gives $3^r=1/9=3^{-2}$, so $r=-2$. Using $27=A\\times3^{-2}=A/9$ gives $A=243$, and therefore $q(3)=27$.",
      "**B) At price $p=3$, profit is $54$.** (true)\n\nRevenue is $3\\times27=81$. Subtracting fixed cost gives $\\Pi(3)=81-27=54$.",
      "**C) Profit is zero at price $p=9$.** (true)\n\n$q(9)=243/81=3$, so revenue is $9\\times3=27$, exactly equal to fixed cost.",
      "**D) Doubling price divides revenue by $4$.** (false)\n\nRevenue is $R(p)=p(243p^{-2})=243p^{-1}$, so doubling price divides revenue by $2$.",
      "**E) At price $p=27$, profit is positive.** (false)\n\nRevenue is $243/27=9$, hence profit is $9-27=-18$."
    ],
    difficulty_level: "5/5",
    sort_order: 20,
    solution_overview: "From the tripling rule, $3^r=1/9$ gives $r=-2$. The observation $q(3)=27$ then yields $A=243$. Thus $q(p)=243p^{-2}$, $R(p)=243p^{-1}$, and $\\Pi(p)=243/p-27$."
  }
];

const trueCounts = BATCH.map(t => t.answer_key.filter(Boolean).length);
console.log(BATCH.map((t, i) => ({ id: t.id, d: t.difficulty_level, T: trueCounts[i] })));
