/** MATH 8.06–8.10 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-6",
    case_id: "MATH 8.06",
    title: `Server Peak Load Between a Doubling Rule and an Alarm`,
    context: `A monitoring team models a server's peak load as $L(x)=A x^{r}$, where $x>0$ is the number of simultaneous jobs. Stress tests show that doubling the job count multiplies peak load by $4$, and a run with $30$ simultaneous jobs recorded a peak load of $180$. The hardware alarm trips at a peak load of $500$.`,
    statements: [
      `Tripling the job count multiplies peak load by $6$.`,
      `The alarm trips at a job count above $55$.`,
      `The recorded $30$-job run sat at $30\\%$ of the alarm level.`,
      `The elasticity of peak load with respect to the job count is $2$.`,
      `Halving the job count halves peak load.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A) Tripling the job count multiplies peak load by $6$.**  (false)

This claim applies a scale factor, so only the exponent matters. The doubling test fixes $r=2$, and tripling then multiplies peak load by $3^{2}=9$, not by $6$.

The figure $6$ comes from treating the scale factor as proportional to the multiplier: doubling gave $4$, so tripling "should" give $1.5$ times as much, or $6$. Scale factors of a power function are powers of the multiplier, not multiples of it.

Recover the exponent from the doubling test, where the coefficient cancels:

$$
\\frac{L(2x)}{L(x)} = \\frac{A(2x)^{r}}{Ax^{r}} = 2^{r} = 4 \\quad \\Rightarrow \\quad r = 2
$$

Apply the same identity to a tripling:

$$
\\frac{L(3x)}{L(x)} = 3^{2} = 9
$$

The true factor is $9$, so the claim is false.`,
      `**B) The alarm trips at a job count above $55$.**  (false)

This claim asks where the model reaches the alarm level of $500$, which needs both constants. With $r=2$ the recorded run gives $A=0.2$, and solving $0.2x^{2}=500$ puts the alarm exactly at $50$ jobs, below the threshold in the claim.

The margin looks generous from the recorded run — $180$ against an alarm at $500$ — and it is tempting to assume the alarm is far away. Because load grows with the square of the job count, the remaining headroom is used up by only $20$ more jobs.

Fix the coefficient from the recorded run:

$$
A(30)^{2} = 180 \\quad \\Rightarrow \\quad 900A = 180 \\quad \\Rightarrow \\quad A = 0.2
$$

Solve the alarm condition:

$$
0.2x^{2} = 500 \\quad \\Rightarrow \\quad x^{2} = 2500 \\quad \\Rightarrow \\quad x = 50
$$

The alarm trips at $50$ jobs, not above $55$, so the claim is false.`,
      `**C) The recorded $30$-job run sat at $30\\%$ of the alarm level.**  (false)

This claim compares a recorded load with the alarm level. The run peaked at $180$ against an alarm at $500$, which is $36\\%$, not $30\\%$.

The matching numbers $30$ jobs and $30\\%$ are a coincidence the claim exploits: the job count and the percentage of the alarm level are different quantities, and the squared response means they cannot track each other. In job terms the run sat at $30/50=60\\%$ of the trip point, while in load terms it sat at $36\\%$.

Take the ratio of the recorded load to the alarm level:

$$
\\frac{180}{500} = 0.36
$$

Check what $30\\%$ of the alarm level would have required:

$$
0.2x^{2} = 150 \\quad \\Rightarrow \\quad x^{2} = 750 \\quad \\Rightarrow \\quad x \\approx 27.4
$$

The run sat at $36\\%$ of the alarm level, so the claim is false.`,
      `**D) The elasticity of peak load with respect to the job count is $2$.**  (true)

This claim is about the constant elasticity of a power function. For $L(x)=Ax^{r}$ the elasticity equals the exponent at every job count, and here that exponent is $2$.

The number $4$ from the stress test is the natural distractor: it is the factor by which load is multiplied when jobs double, not the percentage response the elasticity measures. Elasticity answers a different question — by what percentage does load move when jobs move by one percent.

Read the elasticity off the exponent:

$$
L(x) = 0.2x^{2} \\quad \\Rightarrow \\quad \\text{El}_{x}L = r = 2
$$

Confirm with a small percentage change:

$$
\\frac{L(1.01x)}{L(x)} = 1.01^{2} = 1.0201 \\quad \\Rightarrow \\quad +2.01\\% \\text{ for } +1\\%
$$

A one percent rise in jobs lifts load by about two percent, so the elasticity is $2$ and the claim is true.`,
      `**E) Halving the job count halves peak load.**  (false)

This claim assumes proportional behaviour. With exponent $2$, halving the job count multiplies peak load by $(1/2)^{2}=1/4$, so load falls to a quarter rather than a half.

The mistake matters in the direction that hurts capacity planning: a team expecting a halving would assume that dropping from $50$ jobs to $25$ leaves $250$ of load, when the model puts it at $125$. Overestimating residual load is safe; the same reasoning applied upwards would badly underestimate a spike.

Apply the scale-factor identity with multiplier $1/2$:

$$
\\frac{L(x/2)}{L(x)} = \\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}
$$

Check numerically at the alarm point:

$$
L(50) = 0.2(2500) = 500, \\qquad L(25) = 0.2(625) = 125
$$

Load falls to a quarter, not a half, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 6,
    solution_overview: `Peak load follows $L(x)=Ax^{r}$ for $x$ simultaneous jobs. Doubling the job count multiplies load by $4$, a $30$-job run peaked at $180$, and the alarm trips at $500$.

**Part 1: Building the model.**

Let $x$ = simultaneous jobs and $L(x)$ = peak load. Two unknowns need two facts: the stress test carries the exponent because scale factors are free of $A$, and the recorded run carries the level.

**1. Translate: the doubling test.** The observed factor is a power of the multiplier:

$$
\\frac{L(2x)}{L(x)} = 2^{r} = 4
$$

**2. Translate: the recorded run.** One measured point fixes the coefficient:

$$
A(30)^{2} = 180
$$

**Part 2: The model.**

$$
2^{r} = 4 \\tag{1}
$$

$$
900A = 180 \\tag{2}
$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the law:

$$
r = 2, \\qquad A = 0.2, \\qquad L(x) = 0.2x^{2}
$$

**2.** Scale factors follow from the exponent alone:

$$
3^{2} = 9, \\qquad \\left(\\tfrac{1}{2}\\right)^{2} = \\tfrac{1}{4}
$$

**3.** Invert the law at the alarm level:

$$
0.2x^{2} = 500 \\;\\Rightarrow\\; x^{2} = 2500 \\;\\Rightarrow\\; x = 50
$$

**4.** Place the recorded run against the alarm:

$$
\\frac{180}{500} = 36\\%, \\qquad \\frac{30}{50} = 60\\% \\text{ of the trip job count}
$$

**5.** The elasticity is the exponent, constant at every job count:

$$
\\text{El}_{x}L = 2
$$

**Answer.** $r = 2$ | $A = 0.2$ | $L(x) = 0.2x^{2}$ | alarm at $x = 50$ jobs`,
  },
  {
    id: "math-8-7",
    case_id: "MATH 8.07",
    title: `Survey Reach Against a Fieldwork Budget Cap`,
    context: `Usable survey responses follow $Q(x)=A x^{0.5}$, where $x>0$ measures outreach intensity. A pilot run at intensity $25$ returned $60$ usable responses. The fieldwork budget caps outreach intensity at $400$.`,
    statements: [
      `At intensity $4$ the model predicts $24$ usable responses.`,
      `Quadrupling outreach intensity doubles the number of usable responses.`,
      `Reaching $240$ usable responses requires intensity $400$.`,
      `The budget cap therefore allows at most $240$ usable responses.`,
      `Raising intensity from $100$ to $121$ raises usable responses by $10\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) At intensity $4$ the model predicts $24$ usable responses.**  (true)

This claim asks for a level well below the pilot, so the coefficient has to be recovered first. The pilot gives $A=12$, and at intensity $4$ the model returns $24$ responses.

The two intensities are far apart — $25$ against $4$ — but the square-root shape compresses the difference: intensity falls by a factor of $6.25$ while responses fall only by a factor of $2.5$. Anyone expecting a proportional collapse to about $10$ responses is applying a linear model.

Recover the coefficient from the pilot:

$$
A(25)^{0.5} = 60 \\quad \\Rightarrow \\quad 5A = 60 \\quad \\Rightarrow \\quad A = 12
$$

$$
Q(x) = 12\\sqrt{x}
$$

Evaluate at the requested intensity:

$$
Q(4) = 12\\sqrt{4} = 12(2) = 24
$$

The model predicts $24$ responses, so the claim is true.`,
      `**B) Quadrupling outreach intensity doubles the number of usable responses.**  (true)

This claim is a pure scale-factor question, so it holds at every starting intensity and does not need the coefficient at all. Quadrupling multiplies responses by $4^{0.5}=2$.

The point worth keeping is the cost side of this arithmetic: buying twice the responses takes four times the outreach, so each additional response is progressively more expensive. That is the practical meaning of an exponent below $1$.

Form the ratio and cancel the coefficient:

$$
\\frac{Q(4x)}{Q(x)} = \\frac{A(4x)^{0.5}}{Ax^{0.5}} = 4^{0.5} = 2
$$

Confirm on the pilot itself:

$$
Q(25) = 60, \\qquad Q(100) = 12(10) = 120
$$

Quadrupling intensity does double responses, so the claim is true.`,
      `**C) Reaching $240$ usable responses requires intensity $400$.**  (true)

This claim runs the model backwards from a response target. Solving $12\\sqrt{x}=240$ gives $\\sqrt{x}=20$ and therefore $x=400$, exactly the intensity in the claim.

Inverting a square-root law squares the required move: responses have to quadruple from the pilot's $60$ to $240$, and intensity has to rise sixteenfold from $25$ to $400$. Reading the target as "four times the pilot intensity" would land at $100$, which delivers only $120$ responses.

Invert the model:

$$
12\\sqrt{x} = 240 \\quad \\Rightarrow \\quad \\sqrt{x} = 20 \\quad \\Rightarrow \\quad x = 400
$$

Check the scale-factor route from the pilot:

$$
\\frac{240}{60} = 4 = k^{0.5} \\;\\Rightarrow\\; k = 16, \\qquad 16 \\times 25 = 400
$$

Both routes give intensity $400$, so the claim is true.`,
      `**D) The budget cap therefore allows at most $240$ usable responses.**  (true)

This claim converts the intensity cap into a response ceiling. Because $Q$ is increasing in $x$, the largest affordable intensity produces the largest attainable response count, and $Q(400)=240$.

The monotonicity step is what makes the conversion legitimate. With an increasing law the cap maps straight onto the maximum; had the exponent been negative, the same cap would have produced a *minimum* instead, and the reasoning would reverse.

The law is increasing because the exponent is positive:

$$
Q(x) = 12x^{0.5}, \\qquad 0.5 > 0
$$

Evaluate at the cap:

$$
Q(400) = 12\\sqrt{400} = 12(20) = 240
$$

No affordable intensity yields more than $240$ responses, so the claim is true.`,
      `**E) Raising intensity from $100$ to $121$ raises usable responses by $10\\%$.**  (true)

This claim tests a specific $21\\%$ rise in intensity. Because $121/100=1.21$ and $1.21^{0.5}=1.1$, responses rise by exactly $10\\%$, from $120$ to $132$.

The neat outcome is not a coincidence: both numbers are perfect squares, so the square-root factor is exact rather than approximate. It also illustrates the general rule for this model — to gain $10\\%$ more responses you must buy $21\\%$ more outreach, since $1.1^{2}=1.21$.

Compute the scale factor:

$$
\\frac{Q(121)}{Q(100)} = \\left(\\frac{121}{100}\\right)^{0.5} = \\frac{11}{10} = 1.1
$$

Verify with levels:

$$
Q(100) = 120, \\qquad Q(121) = 12(11) = 132, \\qquad \\frac{132}{120} = 1.1
$$

Responses rise by exactly $10\\%$, so the claim is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 7,
    solution_overview: `Usable responses follow $Q(x)=Ax^{0.5}$ for outreach intensity $x>0$. A pilot at intensity $25$ returned $60$ responses, and the budget caps intensity at $400$.

**Part 1: Building the model.**

Let $x$ = outreach intensity and $Q(x)$ = usable responses. The exponent is given, so the pilot run is the only fact needed to pin the model; the cap enters afterwards as a domain restriction.

**1. Translate: the pilot run.** One measured point fixes the coefficient:

$$
A(25)^{0.5} = 60
$$

**2. Translate: the budget cap.** Feasible intensities are bounded:

$$
0 < x \\le 400
$$

**Part 2: The model.**

$$
5A = 60 \\tag{1}
$$

$$
Q(x) = A x^{0.5}, \\qquad x \\le 400 \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$
A = 12, \\qquad Q(x) = 12\\sqrt{x}
$$

**2.** Levels follow directly:

$$
Q(4) = 24, \\qquad Q(100) = 120, \\qquad Q(121) = 132
$$

**3.** Scale factors need no coefficient:

$$
\\frac{Q(kx)}{Q(x)} = k^{0.5}, \\qquad 4^{0.5} = 2, \\qquad 1.21^{0.5} = 1.1
$$

**4.** Invert to turn a response target into required intensity:

$$
x = \\left(\\frac{Q}{12}\\right)^{2}, \\qquad Q = 240 \\;\\Rightarrow\\; x = 400
$$

**5.** Since $Q$ is increasing, the intensity cap becomes a response ceiling of $240$, and reaching it costs sixteen times the pilot's intensity for four times its responses.

**Answer.** $A = 12$ | $Q(x) = 12\\sqrt{x}$ | ceiling $Q(400) = 240$ responses`,
  },
  {
    id: "math-8-8",
    case_id: "MATH 8.08",
    title: `Quadratic and Linear Inspection Costs That Meet Once`,
    context: `Two inspection procedures are costed for a batch of $n>0$ documents. The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. Records show that on a batch of $20$ documents the two procedures cost the same, $400$ each.`,
    statements: [
      `The automated procedure is cheaper than the manual one at every batch below $20$ documents.`,
      `At $n=25$ the two procedures differ by less than $100$.`,
      `For $n>0$ the two procedures cost the same only at $n=20$.`,
      `Doubling the batch doubles the gap between the two costs.`,
      `The automated procedure's cost per document is constant.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The automated procedure is cheaper than the manual one at every batch below $20$ documents.**  (true)

This claim covers an interval, so it needs an argument rather than a spot check. Both coefficients follow from the shared $400$ at $n=20$, giving $C(n)=n^{2}$ and $D(n)=20n$, and $n^{2}<20n$ holds for every $n$ between $0$ and $20$.

The comparison reduces to a single inequality once the common factor $n$ is divided out, which is legitimate because $n>0$. What remains, $n<20$, describes exactly the interval in the claim.

Recover both coefficients from the shared cost:

$$
a(20)^{2} = 400 \\;\\Rightarrow\\; a = 1, \\qquad b(20) = 400 \\;\\Rightarrow\\; b = 20
$$

Compare the two laws:

$$
n^{2} < 20n \\quad \\Longleftrightarrow \\quad n < 20 \\qquad (n>0)
$$

Spot-check inside the interval:

$$
C(10) = 100 < 200 = D(10)
$$

The automated procedure is cheaper on the whole interval, so the claim is true.`,
      `**B) At $n=25$ the two procedures differ by less than $100$.**  (false)

This claim measures the gap just past the crossing point. At $n=25$ the automated procedure costs $625$ and the manual one $500$, a difference of $125$, which is more than $100$.

Being only five documents past the meeting point makes the gap feel small, but the gap is quadratic in disguise: it equals $n(n-20)$, so it grows with both the distance past $20$ and the batch size itself. Five documents past the crossing already produce a $125$ difference.

Evaluate both costs:

$$
C(25) = 25^{2} = 625, \\qquad D(25) = 20(25) = 500
$$

Take the difference and compare with the threshold:

$$
625 - 500 = 125 > 100
$$

The gap exceeds $100$, so the claim is false.`,
      `**C) For $n>0$ the two procedures cost the same only at $n=20$.**  (true)

This claim is about the number of crossings. Setting $n^{2}=20n$ and dividing by $n$ leaves $n=20$ as the only positive solution, so the two procedures agree exactly once.

The algebra hides a second root at $n=0$, which is why dividing by $n$ has to be justified: on the stated domain $n>0$ that root is excluded, and no other crossing exists. A parabola through the origin and a line through the origin can meet at most twice, and one of those meetings is the origin itself.

Set the two costs equal:

$$
n^{2} = 20n \\quad \\Rightarrow \\quad n(n - 20) = 0
$$

Discard the root outside the domain:

$$
n = 0 \\text{ (excluded)}, \\qquad n = 20
$$

Only $n=20$ survives, so the claim is true.`,
      `**D) Doubling the batch doubles the gap between the two costs.**  (false)

This claim treats the gap as if it were proportional to batch size. The gap is $n^{2}-20n=n(n-20)$; doubling $n$ from $25$ to $50$ takes it from $125$ to $1500$, a twelvefold increase.

Each cost on its own has a clean scale factor — the automated cost quadruples, the manual cost doubles — but the *difference* of two power functions is not itself a power function, so it has no scale factor at all. That is the structural point being tested.

Write the gap:

$$
C(n) - D(n) = n^{2} - 20n = n(n-20)
$$

Evaluate it at two batches:

$$
25(5) = 125, \\qquad 50(30) = 1500
$$

$$
\\frac{1500}{125} = 12
$$

Doubling the batch multiplies the gap by twelve, not two, so the claim is false.`,
      `**E) The automated procedure's cost per document is constant.**  (false)

This claim confuses the two procedures. Per-document cost is $C(n)/n=n$ for the automated route, which rises with every document added; it is the *manual* procedure that charges a constant $20$ per document.

Constant unit cost is the signature of an exponent of $1$. The automated law has exponent $2$, so dividing by $n$ leaves exponent $1$ — a unit cost that grows linearly and overtakes the manual rate at exactly the crossing point.

Divide each total by the batch size:

$$
\\frac{C(n)}{n} = \\frac{n^{2}}{n} = n, \\qquad \\frac{D(n)}{n} = \\frac{20n}{n} = 20
$$

Compare at two batches:

$$
\\frac{C(10)}{10} = 10, \\qquad \\frac{C(30)}{30} = 30
$$

The automated unit cost triples between those batches, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 8,
    solution_overview: `Two procedures cost $C(n)=an^{2}$ and $D(n)=bn$ for a batch of $n>0$ documents, and both cost $400$ on a batch of $20$.

**Part 1: Building the model.**

Let $n$ = documents in the batch, $C$ = automated cost, $D$ = manual cost. The single shared observation gives one equation for each coefficient, because it applies to both procedures at once.

**1. Translate: the automated cost at $n=20$.**

$$
a(20)^{2} = 400
$$

**2. Translate: the manual cost at $n=20$.**

$$
b(20) = 400
$$

**Part 2: The model.**

$$
C(n) = n^{2} \\tag{1}
$$

$$
D(n) = 20n \\tag{2}
$$

**Part 3: Solve.**

**1.** The coefficients come straight out of the shared observation:

$$
a = 1, \\qquad b = 20
$$

**2.** Find every crossing on the stated domain:

$$
n^{2} = 20n \\;\\Rightarrow\\; n(n-20) = 0 \\;\\Rightarrow\\; n = 20 \\quad (n = 0 \\text{ excluded})
$$

**3.** Order the two procedures on each side of that single crossing:

$$
n < 20 \\;\\Rightarrow\\; C < D, \\qquad n > 20 \\;\\Rightarrow\\; C > D
$$

**4.** The gap is not a power function, and it grows far faster than the batch:

$$
C(n) - D(n) = n(n-20), \\qquad 125 \\text{ at } n=25, \\qquad 1500 \\text{ at } n=50
$$

**5.** Unit costs separate the two shapes cleanly:

$$
\\frac{C(n)}{n} = n \\text{ (rising)}, \\qquad \\frac{D(n)}{n} = 20 \\text{ (constant)}
$$

**Answer.** $C(n) = n^{2}$ | $D(n) = 20n$ | single crossing at $n = 20$ costing $400$`,
  },
  {
    id: "math-8-9",
    case_id: "MATH 8.09",
    title: `Warehouse Throughput With a Contractual Ceiling`,
    context: `Warehouse throughput follows $H(s)=A s^{0.6}$ pallets per hour, where $s>0$ is the number of staff on shift. A shift with $32$ staff moved $96$ pallets per hour. The service contract caps billed throughput at $300$ pallets per hour.`,
    statements: [
      `The coefficient of the throughput law is $A=8$.`,
      `With $243$ staff the model gives $324$ pallets per hour.`,
      `Doubling the headcount more than doubles throughput.`,
      `The contract ceiling is reached at about $250$ staff.`,
      `Throughput per staff member rises as headcount rises.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) The coefficient of the throughput law is $A=8$.**  (false)

This claim reports the wrong constant. Because $0.6=3/5$ and $32=2^{5}$, the shape factor at the recorded shift is $32^{0.6}=2^{3}=8$; the coefficient is what remains after dividing the recorded throughput by that shape factor, namely $A=12$.

Mistaking $8$ for the coefficient is the classic half-finished solve: the hard part — evaluating a fractional power — has been done, and the easy division is skipped. A quick check exposes it, since $A=8$ would predict only $64$ pallets per hour on the recorded shift.

Evaluate the shape factor exactly:

$$
32^{0.6} = \\left(2^{5}\\right)^{3/5} = 2^{3} = 8
$$

Divide the recorded throughput by it:

$$
8A = 96 \\quad \\Rightarrow \\quad A = 12, \\qquad H(s) = 12 s^{0.6}
$$

The coefficient is $12$, not $8$, so the claim is false.`,
      `**B) With $243$ staff the model gives $324$ pallets per hour.**  (true)

This claim asks for a level at a headcount chosen to make the fractional power exact. Since $243=3^{5}$, the shape factor is $3^{3}=27$, and with $A=12$ the model returns $324$ pallets per hour.

The comparison with the recorded shift is instructive: staff rise by a factor of $7.6$ while throughput rises only by a factor of $3.4$. That gap between input growth and output growth is what the exponent $0.6$ encodes.

Evaluate the shape factor:

$$
243^{0.6} = \\left(3^{5}\\right)^{3/5} = 3^{3} = 27
$$

Apply the recovered coefficient:

$$
H(243) = 12(27) = 324
$$

Cross-check through the scale factor from the recorded shift:

$$
\\left(\\frac{243}{32}\\right)^{0.6} = \\frac{27}{8} = 3.375, \\qquad 96 \\times 3.375 = 324
$$

Both routes agree, so the claim is true.`,
      `**C) Doubling the headcount more than doubles throughput.**  (false)

This claim gets the direction of the returns wrong. Doubling staff multiplies throughput by $2^{0.6}\\approx1.516$, a rise of about $52\\%$, so throughput grows by much less than double.

An exponent between $0$ and $1$ always means diminishing returns: output rises with headcount, but each doubling of staff buys a smaller proportional gain than the headcount increase itself. Only an exponent above $1$ would make the claim's "more than doubles" possible.

Form the scale factor:

$$
\\frac{H(2s)}{H(s)} = 2^{0.6}
$$

Evaluate it:

$$
2^{0.6} = e^{0.6 \\times 0.6931} \\approx e^{0.4159} \\approx 1.5157
$$

Check on concrete shifts:

$$
H(32) = 96, \\qquad H(64) = 12 \\times 64^{0.6} \\approx 12 \\times 12.13 \\approx 145.5
$$

Throughput rises by about half, not double, so the claim is false.`,
      `**D) The contract ceiling is reached at about $250$ staff.**  (false)

This claim inverts the law at the contractual ceiling of $300$ pallets per hour. The required headcount is about $214$, not $250$, so the ceiling arrives sooner than the claim suggests.

Inverting an exponent of $0.6$ means raising both sides to the power $5/3$, an operation that magnifies the target ratio. Estimating instead by proportion from the recorded shift — throughput needs to roughly triple, so staff must roughly triple to about $100$ — lands far short, which shows why the inverse exponent has to be applied properly.

Set throughput to the ceiling and isolate the shape factor:

$$
12 s^{0.6} = 300 \\quad \\Rightarrow \\quad s^{0.6} = 25
$$

Raise both sides to the reciprocal power:

$$
s = 25^{5/3} = \\left(5^{2}\\right)^{5/3} = 5^{10/3} = 5^{3} \\times 5^{1/3} \\approx 125 \\times 1.710 \\approx 213.8
$$

The ceiling binds at about $214$ staff, well below $250$, so the claim is false.`,
      `**E) Throughput per staff member rises as headcount rises.**  (false)

This claim asks about a derived quantity. Dividing the law by $s$ gives $H(s)/s = 12s^{-0.4}$, a power function with a negative exponent, so throughput per staff member falls as the shift grows.

Total throughput and throughput per head move in opposite directions here, and conflating them is the trap. Adding staff always raises the total; it lowers the average because each additional worker contributes less than the one before.

Divide the law by headcount:

$$
\\frac{H(s)}{s} = \\frac{12 s^{0.6}}{s} = 12 s^{-0.4}
$$

The exponent is negative, so the average is decreasing. Check two shifts:

$$
\\frac{H(32)}{32} = \\frac{96}{32} = 3, \\qquad \\frac{H(243)}{243} = \\frac{324}{243} \\approx 1.33
$$

Throughput per staff member falls from $3$ to about $1.33$, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 9,
    solution_overview: `Throughput follows $H(s)=As^{0.6}$ pallets per hour for $s$ staff. A $32$-staff shift moved $96$ pallets per hour, and the contract caps billed throughput at $300$.

**Part 1: Building the model.**

Let $s$ = staff on shift and $H(s)$ = pallets per hour. The exponent is given, so one measured shift is enough to pin the coefficient; the contract ceiling then has to be inverted back into a headcount.

**1. Translate: the recorded shift.** Both $32$ and the exponent are powers of small integers, so the shape factor is exact:

$$
32^{0.6} = \\left(2^{5}\\right)^{3/5} = 8, \\qquad 8A = 96
$$

**2. Translate: the contract ceiling.** Billed throughput cannot exceed $300$:

$$
12 s^{0.6} \\le 300
$$

**Part 2: The model.**

$$
H(s) = 12 s^{0.6} \\tag{1}
$$

$$
s^{0.6} \\le 25 \\tag{2}
$$

**Part 3: Solve.**

**1.** The coefficient follows from the recorded shift:

$$
A = 12
$$

**2.** Levels at exact fifth powers stay clean:

$$
H(243) = 12 \\times 3^{3} = 324
$$

**3.** Scale factors show the diminishing returns:

$$
2^{0.6} \\approx 1.516 \\quad (+52\\%), \\qquad \\left(\\tfrac{243}{32}\\right)^{0.6} = 3.375
$$

**4.** Invert (2) by raising to the power $5/3$:

$$
s = 25^{5/3} = 5^{10/3} \\approx 213.8
$$

**5.** The derived average turns the exponent negative, so bigger shifts are less productive per head:

$$
\\frac{H(s)}{s} = 12 s^{-0.4}, \\qquad 3 \\text{ at } s=32, \\qquad 1.33 \\text{ at } s=243
$$

**Answer.** $A = 12$ | $H(s) = 12s^{0.6}$ | ceiling binds at $s \\approx 214$ staff`,
  },
  {
    id: "math-8-10",
    case_id: "MATH 8.10",
    title: `Response Time Recovered from a Server Upgrade`,
    context: `A service's median response time follows $W(k)=A k^{-1.5}$ milliseconds, where $k>0$ is the number of servers. The upgrade log does not state $A$: it records only that moving from $4$ servers to $9$ servers cut the median response time by exactly $19$ ms.`,
    statements: [
      `With four servers the median response time is $27$ ms.`,
      `With nine servers the median response time is $8$ ms.`,
      `Doubling the server count cuts the median response time by about $65\\%$.`,
      `A median response time of $1$ ms requires $36$ servers.`,
      `Median response time falls as servers are added.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) With four servers the median response time is $27$ ms.**  (true)

This claim asks for a level, but the log records only a reduction, so the coefficient has to be reconstructed from the difference between two response times. That reconstruction gives $A=216$, and the four-server median is then $27$ ms.

Both server counts are perfect squares, which keeps the negative fractional powers exact: $4^{-1.5}=1/8$ and $9^{-1.5}=1/27$. The trap is sign confusion — with a negative exponent the *smaller* server count produces the *larger* response time, so the recorded cut is the earlier value minus the later one.

Evaluate the two shape factors:

$$
4^{-1.5} = \\frac{1}{4^{1.5}} = \\frac{1}{8}, \\qquad 9^{-1.5} = \\frac{1}{27}
$$

Translate the recorded cut:

$$
A\\left(\\frac{1}{8} - \\frac{1}{27}\\right) = 19 \\quad \\Rightarrow \\quad A \\cdot \\frac{19}{216} = 19 \\quad \\Rightarrow \\quad A = 216
$$

Evaluate at four servers:

$$
W(4) = \\frac{216}{8} = 27
$$

The four-server median is $27$ ms, so the claim is true.`,
      `**B) With nine servers the median response time is $8$ ms.**  (true)

This claim checks the second end of the upgrade. With $A=216$ the nine-server median is $216/27=8$ ms, and the pair $27$ and $8$ reproduces the logged cut exactly.

This is the natural consistency check on part A: any candidate coefficient must reproduce a difference of $19$ ms between the two configurations, and only $A=216$ does. Notice also that the two values are $27=3^{3}$ and $8=2^{3}$, mirroring the server counts $9=3^{2}$ and $4=2^{2}$ through the exponent $-1.5$.

Evaluate at nine servers:

$$
W(9) = \\frac{216}{27} = 8
$$

Verify the logged reduction:

$$
27 - 8 = 19
$$

The nine-server median is $8$ ms, so the claim is true.`,
      `**C) Doubling the server count cuts the median response time by about $65\\%$.**  (true)

This claim is a scale-factor question and holds at any starting fleet size. Doubling multiplies response time by $2^{-1.5}\\approx0.354$, which is a cut of about $64.6\\%$ — rounded, the $65\\%$ in the claim.

With a negative exponent the scale factor is below $1$, so the multiplier is a survival fraction and the *cut* is one minus that fraction. Reading $0.354$ itself as the reduction would give the wrong answer by inverting the two.

Form the scale factor:

$$
\\frac{W(2k)}{W(k)} = 2^{-1.5} = \\frac{1}{2\\sqrt{2}} \\approx 0.3536
$$

Convert to a percentage cut:

$$
1 - 0.3536 = 0.6464 \\approx 65\\%
$$

Check on concrete fleets:

$$
W(4) = 27, \\qquad W(8) = \\frac{216}{8^{1.5}} = \\frac{216}{22.63} \\approx 9.55, \\qquad \\frac{9.55}{27} \\approx 0.354
$$

The cut is about $65\\%$, so the claim is true.`,
      `**D) A median response time of $1$ ms requires $36$ servers.**  (true)

This claim inverts the model at a demanding target. Solving $216k^{-1.5}=1$ gives $k^{1.5}=216$, and raising to the power $2/3$ returns exactly $36$ servers.

The inversion is where negative exponents bite: moving the power to the other side flips its sign, so the target ratio $216$ is raised to $2/3$ rather than $-2/3$. The size of the answer is worth noting too — cutting the median from $8$ ms to $1$ ms takes four times the nine-server fleet.

Set the model equal to the target:

$$
216 k^{-1.5} = 1 \\quad \\Rightarrow \\quad k^{1.5} = 216
$$

Raise both sides to the reciprocal power:

$$
k = 216^{2/3} = \\left(6^{3}\\right)^{2/3} = 6^{2} = 36
$$

Confirm by substitution:

$$
W(36) = \\frac{216}{36^{1.5}} = \\frac{216}{216} = 1
$$

The target needs $36$ servers, so the claim is true.`,
      `**E) Median response time falls as servers are added.**  (true)

This claim is about the direction of the model, which is settled by the sign of the exponent. With $A=216>0$ and exponent $-1.5<0$, response time is decreasing on the whole domain $k>0$.

No arithmetic is strictly needed here, but it is worth separating this from the *rate* of improvement: response time keeps falling, yet each added server helps less than the last, since the same $-1.5$ exponent that guarantees the decline also flattens it.

Read the sign structure of the model:

$$
W(k) = 216 k^{-1.5}, \\qquad A > 0, \\quad r = -1.5 < 0
$$

Trace the decline across the fleet sizes already computed:

$$
W(4) = 27, \\qquad W(9) = 8, \\qquad W(36) = 1
$$

Response time falls monotonically as servers are added, so the claim is true.`,
    ],
    difficulty_level: "2/5",
    sort_order: 10,
    solution_overview: `Median response time follows $W(k)=Ak^{-1.5}$ ms for $k$ servers. Moving from $4$ to $9$ servers cut the median by exactly $19$ ms.

**Part 1: Building the model.**

Let $k$ = servers and $W(k)$ = median response time in milliseconds. The exponent is given and negative, and the only observation is a *difference* between two response times, so the coefficient must be recovered from that difference.

**1. Translate: the two shape factors.** Both server counts are perfect squares, so the powers are exact fractions:

$$
4^{-1.5} = \\frac{1}{8}, \\qquad 9^{-1.5} = \\frac{1}{27}
$$

**2. Translate: the recorded cut.** The smaller fleet has the larger response time:

$$
A\\left(\\frac{1}{8} - \\frac{1}{27}\\right) = 19
$$

**Part 2: The model.**

$$
W(k) = A k^{-1.5} \\tag{1}
$$

$$
A \\cdot \\frac{19}{216} = 19 \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (2) gives the coefficient in one step:

$$
A = 216, \\qquad W(k) = 216 k^{-1.5}
$$

**2.** Check both logged configurations:

$$
W(4) = 27, \\qquad W(9) = 8, \\qquad 27 - 8 = 19
$$

**3.** Scale factors are below $1$ because the exponent is negative:

$$
\\frac{W(2k)}{W(k)} = 2^{-1.5} \\approx 0.354 \\quad \\Rightarrow \\quad \\text{a cut of about } 65\\%
$$

**4.** Invert the law to turn a latency target into a fleet size:

$$
k = \\left(\\frac{216}{W}\\right)^{2/3}, \\qquad W = 1 \\;\\Rightarrow\\; k = 216^{2/3} = 36
$$

**5.** The negative exponent also fixes the qualitative picture: response time falls throughout, but with ever smaller gains per added server.

**Answer.** $A = 216$ | $W(k) = 216k^{-1.5}$ | $W(4)=27$ ms, $W(9)=8$ ms | $1$ ms needs $36$ servers`,
  },
];
