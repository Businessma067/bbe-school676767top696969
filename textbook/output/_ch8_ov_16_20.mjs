/** MATH 8.16–8.20 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-16",
    case_id: "MATH 8.16",
    title: `Two Support Contracts, One Crossing and One Cap`,
    context: `A helpdesk compares two support contracts for $u>0$ tickets a month. Plan A bills $C_A(u)=a u^{0.5}$ and a filed invoice shows $36$ tickets billed at $240$; Plan A also carries a monthly cap, so it never charges more than $400$. Plan B bills a flat $5$ per ticket with no cap.`,
    statements: [
      `The two plans bill the same amount at $64$ tickets.`,
      `Below $64$ tickets Plan B is the cheaper contract.`,
      `Plan A's cap binds from $100$ tickets onwards.`,
      `At $144$ tickets Plan A bills $480$.`,
      `Plan A's cost per ticket is the same at every ticket volume.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The two plans bill the same amount at $64$ tickets.**  (true)

This claim asks for the crossing of a square-root schedule and a linear one. The filed invoice gives $a=40$, and solving $40\\sqrt{u}=5u$ puts the crossing at $64$ tickets, where both plans bill $320$.

Dividing by $\\sqrt{u}$ is the move that makes the equation tractable, and it is legitimate because $u>0$. What remains is a condition on $\\sqrt{u}$ alone, so the crossing has to be squared out of it — the reason the answer is $64$ rather than $8$.

Recover Plan A's coefficient from the invoice:

$$
a\\sqrt{36} = 240 \\quad \\Rightarrow \\quad 6a = 240 \\quad \\Rightarrow \\quad a = 40
$$

Set the two schedules equal:

$$
40\\sqrt{u} = 5u \\quad \\Rightarrow \\quad 40 = 5\\sqrt{u} \\quad \\Rightarrow \\quad \\sqrt{u} = 8 \\quad \\Rightarrow \\quad u = 64
$$

Confirm the shared bill, which also sits under Plan A's cap:

$$
C_A(64) = 40(8) = 320, \\qquad C_B(64) = 5(64) = 320
$$

Both plans bill $320$ at $64$ tickets, so the claim is true.`,
      `**B) Below $64$ tickets Plan B is the cheaper contract.**  (true)

This claim covers an interval below the crossing. For $u<64$ the inequality $5u<40\\sqrt{u}$ holds, so the flat per-ticket contract is cheaper on that whole range.

The direction can feel counter-intuitive because Plan A is the one that flattens out at high volume. At low volume it is the *expensive* option: a square-root schedule starts steeply, charging $40$ for the first ticket where Plan B charges $5$. The cap is what eventually rescues Plan A, but only well past the crossing.

Compare the two schedules and divide by $\\sqrt{u}>0$:

$$
5u < 40\\sqrt{u} \\quad \\Longleftrightarrow \\quad 5\\sqrt{u} < 40 \\quad \\Longleftrightarrow \\quad u < 64
$$

Spot-check inside the interval:

$$
C_A(16) = 40(4) = 160, \\qquad C_B(16) = 80
$$

Plan B is cheaper at every volume below the crossing, so the claim is true.`,
      `**C) Plan A's cap binds from $100$ tickets onwards.**  (true)

This claim converts Plan A's monetary cap into a ticket volume. Solving $40\\sqrt{u}=400$ gives $\\sqrt{u}=10$, so the uncapped schedule reaches $400$ at exactly $100$ tickets and the cap binds from there on.

Because the uncapped schedule is increasing, everything above $100$ tickets would bill more than $400$ and is therefore trimmed to the cap. Below $100$ the cap is irrelevant, which is why the crossing computed in part A — at $64$ tickets and $320$ — is unaffected by it.

Set the uncapped schedule equal to the cap:

$$
40\\sqrt{u} = 400 \\quad \\Rightarrow \\quad \\sqrt{u} = 10 \\quad \\Rightarrow \\quad u = 100
$$

Describe the billed amount as a two-piece rule:

$$
C_A(u) = \\begin{cases} 40\\sqrt{u}, & u \\le 100 \\\\ 400, & u > 100 \\end{cases}
$$

The cap takes over from $100$ tickets, so the claim is true.`,
      `**D) At $144$ tickets Plan A bills $480$.**  (false)

This claim applies the uncapped formula beyond the point where it is valid. The raw schedule would give $40\\sqrt{144}=480$, but the cap has bound since $100$ tickets, so the actual bill is $400$.

The arithmetic in the claim is correct; the modelling is not. Reading a formula outside its stated domain is the whole trap here, and it is worth noting how large the error already is at $144$ tickets: the claim overstates the bill by $80$, and the gap widens with every extra ticket.

Evaluate the uncapped schedule:

$$
40\\sqrt{144} = 40(12) = 480
$$

Compare with the cap, which applies because $144 > 100$:

$$
C_A(144) = \\min\\{480,\\,400\\} = 400
$$

Plan A bills $400$, not $480$, so the claim is false.`,
      `**E) Plan A's cost per ticket is the same at every ticket volume.**  (false)

This claim describes Plan B, not Plan A. Dividing Plan A's schedule by the ticket count gives $40u^{-0.5}$, a decreasing function, while Plan B's per-ticket cost is the constant $5$.

A constant unit price is exactly what an exponent of $1$ produces. Plan A's exponent is $0.5$, so its per-ticket cost falls throughout — and once the cap binds it falls even faster, since the numerator stops growing altogether.

Divide each schedule by the ticket count:

$$
\\frac{C_A(u)}{u} = \\frac{40\\sqrt{u}}{u} = 40u^{-0.5}, \\qquad \\frac{C_B(u)}{u} = 5
$$

Evaluate Plan A's unit cost at three volumes:

$$
\\frac{240}{36} \\approx 6.67, \\qquad \\frac{320}{64} = 5, \\qquad \\frac{400}{144} \\approx 2.78
$$

Plan A's per-ticket cost more than halves across that range, so the claim is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 16,
    solution_overview: `Plan A bills $C_A(u)=au^{0.5}$ with an invoice of $240$ at $36$ tickets and a monthly cap of $400$; Plan B bills $5$ per ticket.

**Part 1: Building the model.**

Let $u$ = tickets per month, $C_A$ and $C_B$ = monthly bills. Plan A needs its coefficient recovered from the filed invoice, and its cap turns the schedule into a two-piece rule that must be respected when evaluating large volumes.

**1. Translate: Plan A's invoice.**

$$
a\\sqrt{36} = 240
$$

**2. Translate: Plan A's cap.** The uncapped schedule is trimmed once it reaches $400$:

$$
C_A(u) = \\min\\left\\{a\\sqrt{u},\\;400\\right\\}
$$

**Part 2: The model.**

$$
C_A(u) = \\min\\left\\{40\\sqrt{u},\\;400\\right\\} \\tag{1}
$$

$$
C_B(u) = 5u \\tag{2}
$$

**Part 3: Solve.**

**1.** The invoice fixes Plan A's coefficient:

$$
6a = 240 \\;\\Rightarrow\\; a = 40
$$

**2.** Locate the crossing of the uncapped schedules:

$$
40\\sqrt{u} = 5u \\;\\Rightarrow\\; \\sqrt{u} = 8 \\;\\Rightarrow\\; u = 64, \\qquad \\text{both bill } 320
$$

**3.** Order the plans on each side of the crossing:

$$
u < 64 \\;\\Rightarrow\\; C_B < C_A, \\qquad 64 < u \\;\\Rightarrow\\; C_A < C_B
$$

**4.** Convert the cap into a ticket volume:

$$
40\\sqrt{u} = 400 \\;\\Rightarrow\\; u = 100
$$

Beyond $100$ tickets Plan A is flat at $400$ while Plan B keeps climbing, so Plan A's advantage widens without limit.

**5.** Unit costs separate the two shapes:

$$
\\frac{C_A(u)}{u} = 40u^{-0.5} \\text{ (falling)}, \\qquad \\frac{C_B(u)}{u} = 5 \\text{ (constant)}
$$

**Answer.** $a = 40$ | crossing at $u = 64$ costing $320$ | cap binds from $u = 100$`,
  },
  {
    id: "math-8-17",
    case_id: "MATH 8.17",
    title: `An Eighty Percent Learning Curve Meeting a Materials Floor`,
    context: `Unit cost on a new assembly line follows the learning curve $c(N)=c_1 N^{-b}$, where $N>0$ is cumulative output. Every doubling of cumulative output multiplies unit cost by $0.8$, and the first unit cost $1000$. Materials alone cost $400$ per unit, so the curve cannot describe costs below that floor.`,
    statements: [
      `Doubling cumulative output cuts unit cost by $20\\%$.`,
      `The exponent of the learning curve is $-0.8$.`,
      `After $8$ units the unit cost is $500$.`,
      `The materials floor binds from about $12$ units onwards.`,
      `Quadrupling cumulative output halves the unit cost.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) Doubling cumulative output cuts unit cost by $20\\%$.**  (true)

This claim restates the learning rule in percentage form. A multiplier of $0.8$ means $80\\%$ of the previous cost survives, so the cut is $20\\%$ at every doubling.

This is the definition of an "eighty percent learning curve", and the phrase names the surviving fraction rather than the reduction — the source of endless confusion in practice. The rule applies to each doubling separately: from $1$ to $2$ units, from $2$ to $4$, from $4$ to $8$, and so on.

Write the doubling rule as a scale factor:

$$
\\frac{c(2N)}{c(N)} = 2^{-b} = 0.8
$$

Convert the multiplier into a percentage cut:

$$
1 - 0.8 = 0.2 = 20\\%
$$

Check the first two doublings from the first-unit cost:

$$
c(2) = 800, \\qquad c(4) = 640
$$

Each doubling removes a fifth of the cost, so the claim is true.`,
      `**B) The exponent of the learning curve is $-0.8$.**  (false)

This claim mistakes the learning multiplier for the exponent. Solving $2^{-b}=0.8$ gives $b\\approx0.3219$, so the exponent is about $-0.322$, not $-0.8$.

The two numbers describe different things: $0.8$ is what the cost is multiplied by when output doubles, while the exponent governs every other scale factor. An exponent of $-0.8$ would mean a doubling multiplied cost by $2^{-0.8}\\approx0.574$ — a far steeper curve than the one observed.

Take logarithms of the doubling rule:

$$
2^{-b} = 0.8 \\quad \\Rightarrow \\quad -b\\ln 2 = \\ln 0.8
$$

Solve for the exponent:

$$
b = \\frac{-\\ln 0.8}{\\ln 2} = \\frac{0.2231}{0.6931} \\approx 0.3219
$$

$$
c(N) = 1000\\,N^{-0.3219}
$$

The exponent is about $-0.322$, so the claim is false.`,
      `**C) After $8$ units the unit cost is $500$.**  (false)

This claim lands near, but not on, the true value. Eight units is three doublings from the first, so the cost is $1000 \\times 0.8^{3} = 512$, twelve above the claimed figure.

Working through doublings is the reliable route here because $8=2^{3}$, so no logarithms are needed. The claim's $500$ looks like a rounded half of the first-unit cost, and rounding a learning curve to "about half after eight units" is exactly the kind of shortcut that misstates a floor calculation later.

Count the doublings from the first unit:

$$
1 \\to 2 \\to 4 \\to 8 \\quad \\text{is three doublings}
$$

Apply the multiplier three times:

$$
c(8) = 1000 \\times 0.8^{3} = 1000 \\times 0.512 = 512
$$

Confirm with the exponent form:

$$
1000 \\times 8^{-0.3219} = 1000 \\times e^{-0.3219 \\times 2.0794} \\approx 512
$$

The unit cost is $512$, not $500$, so the claim is false.`,
      `**D) The materials floor binds from about $12$ units onwards.**  (false)

This claim places the floor far too early. Solving $1000N^{-0.3219}=400$ gives about $17.2$ units, so the curve stays above the floor through the seventeenth unit.

The gap between $12$ and $17$ matters because the curve is flattening: between the eighth unit and the sixteenth the cost falls only from $512$ to about $410$, so a rough guess made by extrapolating the early, steep part of the curve arrives at the floor too soon.

Set the curve equal to the floor:

$$
1000\\,N^{-0.3219} = 400 \\quad \\Rightarrow \\quad N^{0.3219} = 2.5
$$

Solve with logarithms:

$$
N = 2.5^{1/0.3219} = e^{0.9163/0.3219} = e^{2.8465} \\approx 17.2
$$

Bracket the answer with two doublings:

$$
c(16) = 1000 \\times 0.8^{4} = 409.6 > 400, \\qquad c(32) = 327.7 < 400
$$

The floor binds from about $17$ units, not $12$, so the claim is false.`,
      `**E) Quadrupling cumulative output halves the unit cost.**  (false)

This claim compounds the learning rule incorrectly. Quadrupling is two doublings, so the cost is multiplied by $0.8^{2}=0.64$ — a cut of $36\\%$, not $50\\%$.

Halving would require a learning multiplier of about $0.707$ per doubling, since $0.707^{2}=0.5$. The claim implicitly adds the two $20\\%$ cuts into a $40\\%$ cut and then rounds it up; percentage reductions compound multiplicatively, so two $20\\%$ cuts leave $64\\%$, not $60\\%$.

Express quadrupling as two doublings:

$$
\\frac{c(4N)}{c(N)} = \\left(0.8\\right)^{2} = 0.64
$$

Convert to a percentage cut:

$$
1 - 0.64 = 0.36 = 36\\%
$$

Check on concrete volumes:

$$
c(2) = 800, \\qquad c(8) = 512, \\qquad \\frac{512}{800} = 0.64
$$

Quadrupling removes about a third of the cost, not half, so the claim is false.`,
    ],
    difficulty_level: "4/5",
    sort_order: 17,
    solution_overview: `Unit cost follows $c(N)=c_1N^{-b}$ with a doubling multiplier of $0.8$, a first-unit cost of $1000$, and a materials floor at $400$.

**Part 1: Building the model.**

Let $N$ = cumulative output and $c(N)$ = unit cost. The learning rule carries the exponent, the first unit carries the coefficient, and the floor is a level that the curve eventually crosses from above.

**1. Translate: the learning rule.** Scale factors are free of the coefficient:

$$
\\frac{c(2N)}{c(N)} = 2^{-b} = 0.8
$$

**2. Translate: the first unit.** At $N=1$ the shape factor is $1$:

$$
c_1 = 1000
$$

**Part 2: The model.**

$$
2^{-b} = 0.8 \\tag{1}
$$

$$
c(N) = 1000\\,N^{-b} \\tag{2}
$$

**Part 3: Solve.**

**1.** Logarithms turn (1) into the exponent:

$$
b = \\frac{-\\ln 0.8}{\\ln 2} \\approx 0.3219, \\qquad c(N) = 1000N^{-0.3219}
$$

**2.** At powers of two the curve can be walked doubling by doubling:

$$
c(2) = 800, \\quad c(4) = 640, \\quad c(8) = 512, \\quad c(16) = 409.6
$$

**3.** Scale factors compound multiplicatively, not additively:

$$
0.8^{2} = 0.64 \\;(-36\\%), \\qquad 0.8^{3} = 0.512
$$

**4.** Invert the curve at the materials floor:

$$
N^{0.3219} = 2.5 \\;\\Rightarrow\\; N = 2.5^{1/0.3219} \\approx 17.2
$$

**5.** Beyond about $17$ units the curve would predict costs below materials, so the model has to be read as flat at $400$ from there on.

**Answer.** $b \\approx 0.322$ | $c(N) = 1000N^{-0.322}$ | floor reached at $N \\approx 17.2$ units`,
  },
  {
    id: "math-8-18",
    case_id: "MATH 8.18",
    title: `Advertising Revenue Against a Proportional Platform Fee`,
    context: `A merchant's sales revenue from an advertising spend $x>0$ follows $R(x)=90 x^{0.5}$, while the platform charges a fee of $F(x)=6x$ on the same spend. The merchant judges a campaign by the net gain $R(x)-F(x)$.`,
    statements: [
      `The net gain is zero at a spend of $225$.`,
      `The net gain is positive at every spend above $225$.`,
      `Doubling the spend doubles revenue.`,
      `At a spend of $100$ the net gain is $300$.`,
      `Revenue per unit of spend rises as the spend rises.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) The net gain is zero at a spend of $225$.**  (true)

This claim locates the break-even spend. Setting $90\\sqrt{x}=6x$ and dividing by $\\sqrt{x}$ gives $\\sqrt{x}=15$, so revenue and fee coincide at a spend of $225$, both equal to $1350$.

Dividing by $\\sqrt{x}$ discards the root at $x=0$, which is legitimate on the stated domain and also uninteresting: a campaign with no spend trivially breaks even. The economically meaningful break-even is the second one.

Set revenue equal to the fee:

$$
90\\sqrt{x} = 6x \\quad \\Rightarrow \\quad 90 = 6\\sqrt{x} \\quad \\Rightarrow \\quad \\sqrt{x} = 15
$$

$$
x = 15^{2} = 225
$$

Check both sides at that spend:

$$
R(225) = 90(15) = 1350, \\qquad F(225) = 6(225) = 1350
$$

The net gain is zero at a spend of $225$, so the claim is true.`,
      `**B) The net gain is positive at every spend above $225$.**  (false)

This claim gets the sign backwards on the far side of break-even. Above $225$ the fee, which grows proportionally, outruns revenue, which grows only as a square root, so the net gain is negative there.

The comparison is easiest through the same division used in part A: the net gain is positive exactly when $90>6\\sqrt{x}$, that is when $x<225$. Break-even marks the end of the profitable range, not the beginning of it — the opposite of what the claim assumes.

Write the net gain and factor it:

$$
R(x) - F(x) = 90\\sqrt{x} - 6x = 6\\sqrt{x}\\left(15 - \\sqrt{x}\\right)
$$

The first factor is positive, so the sign depends on the bracket:

$$
15 - \\sqrt{x} > 0 \\quad \\Longleftrightarrow \\quad x < 225
$$

Test a spend beyond break-even:

$$
R(400) - F(400) = 90(20) - 2400 = 1800 - 2400 = -600
$$

The net gain is negative above $225$, so the claim is false.`,
      `**C) Doubling the spend doubles revenue.**  (false)

This claim applies a linear rule to a square-root law. Doubling the spend multiplies revenue by $2^{0.5}\\approx1.414$, so revenue rises by about $41\\%$, while the fee — which really is proportional — doubles exactly.

That mismatch is the entire economics of the case: the fee scales with exponent $1$ and revenue with exponent $0.5$, so any large enough campaign is eventually loss-making regardless of the constants involved.

Form the revenue scale factor:

$$
\\frac{R(2x)}{R(x)} = 2^{0.5} \\approx 1.4142
$$

Compare with the fee's scale factor:

$$
\\frac{F(2x)}{F(x)} = 2
$$

Check at a concrete spend:

$$
R(100) = 900, \\qquad R(200) \\approx 1272.8
$$

Revenue grows by about $41\\%$, not $100\\%$, so the claim is false.`,
      `**D) At a spend of $100$ the net gain is $300$.**  (true)

This claim evaluates the net gain inside the profitable range. Revenue is $900$, the fee is $600$, and the difference is exactly $300$.

The spend of $100$ sits well below break-even, so a positive result is expected; what the arithmetic adds is the size. It is worth noting that this is close to the best the campaign can do — at a spend of $225$ the net gain has fallen back to zero, so the profitable window is narrow.

Evaluate both sides at the stated spend:

$$
R(100) = 90\\sqrt{100} = 90(10) = 900
$$

$$
F(100) = 6(100) = 600
$$

Take the difference:

$$
900 - 600 = 300
$$

The net gain is $300$, so the claim is true.`,
      `**E) Revenue per unit of spend rises as the spend rises.**  (false)

This claim asks about the average return on spend. Dividing revenue by spend gives $90x^{-0.5}$, a power function with a negative exponent, so the return per euro spent falls as the campaign grows.

This is the mirror image of part C. Revenue keeps increasing in absolute terms, but each additional euro of spend brings back less than the one before, and the falling average eventually drops below the constant fee rate of $6$ — precisely at the break-even spend.

Divide revenue by spend:

$$
\\frac{R(x)}{x} = \\frac{90x^{0.5}}{x} = 90x^{-0.5}
$$

Evaluate at three spends and compare with the fee rate:

$$
\\frac{R(100)}{100} = 9, \\qquad \\frac{R(225)}{225} = 6, \\qquad \\frac{R(400)}{400} = 4.5
$$

The average return falls from $9$ to $4.5$, so the claim is false.`,
    ],
    difficulty_level: "4/5",
    sort_order: 18,
    solution_overview: `Revenue is $R(x)=90x^{0.5}$ and the platform fee is $F(x)=6x$ on an advertising spend $x>0$.

**Part 1: Building the model.**

Let $x$ = advertising spend, $R$ = sales revenue, $F$ = platform fee. Both constants are given, so the work is comparison rather than calibration: one law has exponent $0.5$ and the other exponent $1$, and their difference decides the campaign.

**1. Translate: the net gain.**

$$
\\Pi(x) = R(x) - F(x) = 90x^{0.5} - 6x
$$

**2. Translate: break-even.** The two curves meet where the net gain vanishes:

$$
90\\sqrt{x} = 6x
$$

**Part 2: The model.**

$$
\\Pi(x) = 90\\sqrt{x} - 6x \\tag{1}
$$

$$
\\Pi(x) = 6\\sqrt{x}\\left(15 - \\sqrt{x}\\right) \\tag{2}
$$

**Part 3: Solve.**

**1.** Solve the break-even condition on $x>0$:

$$
\\sqrt{x} = 15 \\;\\Rightarrow\\; x = 225, \\qquad R = F = 1350
$$

**2.** The factored form (2) settles the sign everywhere:

$$
0 < x < 225 \\;\\Rightarrow\\; \\Pi > 0, \\qquad x > 225 \\;\\Rightarrow\\; \\Pi < 0
$$

**3.** Levels inside and outside the profitable window:

$$
\\Pi(100) = 900 - 600 = 300, \\qquad \\Pi(400) = 1800 - 2400 = -600
$$

**4.** The two laws scale differently, which is why the fee eventually wins:

$$
\\frac{R(2x)}{R(x)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{F(2x)}{F(x)} = 2
$$

**5.** The average return on spend falls to the fee rate exactly at break-even:

$$
\\frac{R(x)}{x} = 90x^{-0.5}, \\qquad 9 \\text{ at } x=100, \\quad 6 \\text{ at } x=225, \\quad 4.5 \\text{ at } x=400
$$

**Answer.** break-even spend $x = 225$ | $R = F = 1350$ | net gain positive only on $(0,225)$`,
  },
  {
    id: "math-8-19",
    case_id: "MATH 8.19",
    title: `Calibrating a Two-Stage Production Chain`,
    context: `A plant runs two stages. Labour $L>0$ hours yields processed material $m(L)=A L^{0.5}$ tonnes, and material is converted into finished goods by $g(m)=B m^{1.5}$ units. Two records are available: $100$ labour hours yielded $40$ tonnes of material, and a run on $9$ tonnes of material produced $54$ finished units.`,
    statements: [
      `The material stage is $m(L)=4L^{0.5}$.`,
      `Finished output as a function of labour is $g(L)=16L^{0.75}$.`,
      `Doubling labour hours raises finished output by about $68\\%$.`,
      `Producing $432$ finished units requires $81$ labour hours.`,
      `Finished output per labour hour falls as labour rises.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The material stage is $m(L)=4L^{0.5}$.**  (true)

This claim calibrates the first stage only. The labour record gives $A\\sqrt{100}=40$, so $A=4$ and the material law is $m(L)=4L^{0.5}$.

Keeping the two records apart is the discipline this task rewards: the labour record speaks only about the first stage, and the material record only about the second. Mixing them — for instance dividing $54$ by $100$ — would produce a coefficient that belongs to neither stage.

Use the labour record:

$$
A\\sqrt{100} = 40 \\quad \\Rightarrow \\quad 10A = 40 \\quad \\Rightarrow \\quad A = 4
$$

$$
m(L) = 4L^{0.5}
$$

Sanity-check a second labour level:

$$
m(400) = 4(20) = 80 \\text{ tonnes}
$$

The first stage is $4L^{0.5}$, so the claim is true.`,
      `**B) Finished output as a function of labour is $g(L)=16L^{0.75}$.**  (true)

This claim asks for the composed law. The material record gives $B=2$, and substituting the first stage into the second multiplies the exponents to $0.75$ and the constants to $16$.

The step that carries the risk is raising the whole first stage to the power $1.5$, coefficient included: $\\left(4L^{0.5}\\right)^{1.5}$ contributes $4^{1.5}=8$ as well as $L^{0.75}$. Forgetting to raise the coefficient would leave $2 \\times 4 = 8$ instead of $16$ and halve every prediction.

Calibrate the second stage:

$$
B(9)^{1.5} = 54 \\quad \\Rightarrow \\quad 27B = 54 \\quad \\Rightarrow \\quad B = 2
$$

Compose the two stages:

$$
g(L) = 2\\left(4L^{0.5}\\right)^{1.5} = 2 \\times 4^{1.5} \\times L^{0.5 \\times 1.5}
$$

$$
g(L) = 2 \\times 8 \\times L^{0.75} = 16L^{0.75}
$$

The composed law is $16L^{0.75}$, so the claim is true.`,
      `**C) Doubling labour hours raises finished output by about $68\\%$.**  (true)

This claim is a scale-factor question on the composed law. Its exponent is $0.75$, so doubling labour multiplies finished output by $2^{0.75}\\approx1.682$, a rise of about $68\\%$.

The composed exponent is what matters, not either stage's exponent on its own: material rises by $41\\%$ and the conversion stage would amplify by $1.5$ in the exponent, and only after multiplying $0.5 \\times 1.5$ does the $0.75$ appear. Checking with the stage-by-stage route is a good habit — $1.414^{1.5}\\approx1.682$ as well.

Form the scale factor for the composed law:

$$
\\frac{g(2L)}{g(L)} = 2^{0.75} = 2^{1/2} \\times 2^{1/4} \\approx 1.4142 \\times 1.1892 \\approx 1.6818
$$

Verify through the stages:

$$
m \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{1.5} \\approx 1.682
$$

Finished output rises by about $68\\%$, so the claim is true.`,
      `**D) Producing $432$ finished units requires $81$ labour hours.**  (true)

This claim inverts the composed law. Solving $16L^{0.75}=432$ gives $L^{0.75}=27$, and raising to the power $4/3$ returns exactly $81$ hours.

The numbers are chosen so the inverse is exact: $27=3^{3}$, so $27^{4/3}=3^{4}=81$. Inverting a $0.75$ exponent always means raising to $4/3$, which magnifies the target ratio — a point that matters because the required labour grows much faster than the output target.

Set the composed law equal to the target:

$$
16L^{0.75} = 432 \\quad \\Rightarrow \\quad L^{0.75} = 27
$$

Raise both sides to the reciprocal power:

$$
L = 27^{4/3} = \\left(3^{3}\\right)^{4/3} = 3^{4} = 81
$$

Confirm by substitution:

$$
g(81) = 16 \\times 81^{0.75} = 16 \\times 27 = 432
$$

The target needs $81$ labour hours, so the claim is true.`,
      `**E) Finished output per labour hour falls as labour rises.**  (true)

This claim concerns the average product of labour. Dividing the composed law by $L$ gives $16L^{-0.25}$, a power function with a negative exponent, so output per hour declines as the plant runs longer shifts.

The composed exponent $0.75$ is below $1$, which is exactly the condition for a falling average: total output keeps rising, but not fast enough to keep up with the hours being added. Had the composition produced an exponent above $1$, the same division would have left a positive exponent and a rising average.

Divide the composed law by labour:

$$
\\frac{g(L)}{L} = \\frac{16L^{0.75}}{L} = 16L^{-0.25}
$$

Evaluate at two labour levels:

$$
\\frac{g(16)}{16} = \\frac{16 \\times 8}{16} = 8, \\qquad \\frac{g(81)}{81} = \\frac{432}{81} \\approx 5.33
$$

Output per hour falls from $8$ to about $5.33$, so the claim is true.`,
    ],
    difficulty_level: "5/5",
    sort_order: 19,
    solution_overview: `Stage one gives $m(L)=AL^{0.5}$ tonnes from $L$ labour hours, stage two gives $g(m)=Bm^{1.5}$ finished units. Records: $m(100)=40$ and $g(9)=54$.

**Part 1: Building the model.**

Let $L$ = labour hours, $m$ = tonnes of material, $g$ = finished units. Each record calibrates one stage, and the two stages then have to be composed — an operation that multiplies exponents and raises the inner coefficient to the outer power.

**1. Translate: the labour record.**

$$
A\\sqrt{100} = 40
$$

**2. Translate: the material record.**

$$
B(9)^{1.5} = 54
$$

**Part 2: The model.**

$$
m(L) = 4L^{0.5} \\tag{1}
$$

$$
g(m) = 2m^{1.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The two records give the two coefficients:

$$
A = 4, \\qquad B = 2
$$

**2.** Compose, raising the inner coefficient to the outer power:

$$
g(L) = 2\\left(4L^{0.5}\\right)^{1.5} = 2 \\times 8 \\times L^{0.75} = 16L^{0.75}
$$

**3.** The composed exponent drives every scale factor:

$$
\\frac{g(2L)}{g(L)} = 2^{0.75} \\approx 1.682 \\quad (+68\\%)
$$

**4.** Invert with the reciprocal exponent $4/3$:

$$
L = \\left(\\frac{g}{16}\\right)^{4/3}, \\qquad g = 432 \\;\\Rightarrow\\; L = 27^{4/3} = 81
$$

**5.** Because the composed exponent is below $1$, the average product falls:

$$
\\frac{g(L)}{L} = 16L^{-0.25}, \\qquad 8 \\text{ at } L=16, \\qquad 5.33 \\text{ at } L=81
$$

**Answer.** $A = 4$ | $B = 2$ | $g(L) = 16L^{0.75}$ | $432$ units need $81$ labour hours`,
  },
  {
    id: "math-8-20",
    case_id: "MATH 8.20",
    title: `Calibrated Demand, Derived Revenue, and a Fixed Charge`,
    context: `A niche publisher faces demand $q(p)=A p^{-1.5}$ copies per month at a price $p>0$, and a price of $4$ sells $250$ copies. Revenue is $R=pq$, and the operation carries a fixed monthly charge of $400$ with no other costs.`,
    statements: [
      `Revenue falls as the price rises.`,
      `Revenue is a power function of price with exponent $-0.5$.`,
      `At a price of $4$ revenue is $1000$.`,
      `The fixed charge is covered only at prices below $16$.`,
      `Doubling the price halves revenue.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Revenue falls as the price rises.**  (true)

This claim asks for the direction of revenue. Multiplying price by demand leaves $R(p)=Ap^{-0.5}$, whose exponent is negative, so revenue declines as the price climbs.

The sign of the revenue exponent is decided by whether demand elasticity is below $-1$. Here it is $-1.5$, so the loss of copies outweighs the higher price per copy; if elasticity had been between $-1$ and $0$, revenue would have risen instead.

Recover the demand coefficient:

$$
A(4)^{-1.5} = 250 \\quad \\Rightarrow \\quad \\frac{A}{8} = 250 \\quad \\Rightarrow \\quad A = 2000
$$

Build revenue by adding $1$ to the exponent:

$$
R(p) = p \\times 2000p^{-1.5} = 2000p^{-0.5}
$$

Compare two prices:

$$
R(4) = \\frac{2000}{2} = 1000, \\qquad R(9) = \\frac{2000}{3} \\approx 666.7
$$

Revenue falls as price rises, so the claim is true.`,
      `**B) Revenue is a power function of price with exponent $-0.5$.**  (true)

This claim describes the structure of revenue. Multiplying a power function by $p$ raises its exponent by exactly $1$, so demand's $-1.5$ becomes revenue's $-0.5$.

This is a general rule worth carrying: revenue built on an isoelastic demand curve is itself isoelastic, with exponent one greater. It explains at a glance why elasticity $-1$ is the knife edge — the revenue exponent is then $0$, a constant.

Multiply demand by price:

$$
R(p) = p \\cdot 2000p^{-1.5} = 2000\\,p^{-1.5+1} = 2000p^{-0.5}
$$

Check that the scale factor behaves like a power function:

$$
\\frac{R(4p)}{R(p)} = 4^{-0.5} = \\frac{1}{2}
$$

Revenue is a power function with exponent $-0.5$, so the claim is true.`,
      `**C) At a price of $4$ revenue is $1000$.**  (true)

This claim evaluates revenue at the observed price. With $250$ copies at a price of $4$, revenue is $1000$ — the same figure the derived formula returns.

Doing it both ways is the point of this statement: the raw multiplication uses the given data with no model at all, while the formula route uses the recovered coefficient. Agreement confirms that the coefficient $A=2000$ was recovered correctly.

Multiply the observed price and quantity:

$$
R = 4 \\times 250 = 1000
$$

Confirm through the derived revenue law:

$$
R(4) = 2000 \\times 4^{-0.5} = \\frac{2000}{2} = 1000
$$

Both routes give $1000$, so the claim is true.`,
      `**D) The fixed charge is covered only at prices below $16$.**  (false)

This claim gets the shape of the answer right and the threshold wrong. Revenue covers the $400$ charge whenever $2000p^{-0.5}\\ge400$, which holds for prices below $25$, not $16$.

The number $16$ is what appears if the inversion is done with the demand exponent instead of the revenue exponent, or if $2000/400=5$ is squared incorrectly. Since inverting a $-0.5$ exponent means squaring the ratio, the correct threshold is $5^{2}=25$.

Set revenue equal to the fixed charge:

$$
2000p^{-0.5} = 400 \\quad \\Rightarrow \\quad p^{0.5} = \\frac{2000}{400} = 5
$$

Square both sides:

$$
p = 25
$$

Check either side of the threshold:

$$
R(16) = \\frac{2000}{4} = 500 > 400, \\qquad R(36) = \\frac{2000}{6} \\approx 333 < 400
$$

Prices up to $25$ still cover the charge, so the claim is false.`,
      `**E) Doubling the price halves revenue.**  (false)

This claim overstates the effect of a price rise. Revenue's exponent is $-0.5$, so doubling the price multiplies revenue by $2^{-0.5}\\approx0.707$ — a fall of about $29\\%$, not $50\\%$.

Halving revenue would need the price to *quadruple*, since $4^{-0.5}=0.5$. Confusing the two is the same error as reading demand's exponent, $-1.5$, into the revenue law; each stage has its own exponent and its own scale factor.

Apply the revenue scale factor:

$$
\\frac{R(2p)}{R(p)} = 2^{-0.5} \\approx 0.7071
$$

Find what really halves revenue:

$$
k^{-0.5} = 0.5 \\quad \\Rightarrow \\quad k = 4
$$

Check with levels:

$$
R(4) = 1000, \\qquad R(8) = \\frac{2000}{2.828} \\approx 707, \\qquad R(16) = 500
$$

Doubling the price costs about $29\\%$ of revenue, so the claim is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 20,
    solution_overview: `Demand is $q(p)=Ap^{-1.5}$ with $q(4)=250$; revenue is $R=pq$; a fixed charge of $400$ must be covered.

**Part 1: Building the model.**

Let $p$ = price, $q$ = copies sold, $R$ = revenue. The exponent is given by the isoelastic form, one observation pins the coefficient, and revenue is a derived power function whose exponent is one higher than demand's.

**1. Translate: the observed price-quantity pair.**

$$
A(4)^{-1.5} = 250, \\qquad 4^{-1.5} = \\frac{1}{8}
$$

**2. Translate: revenue and the fixed charge.**

$$
R(p) = p \\cdot Ap^{-1.5}, \\qquad R(p) \\ge 400
$$

**Part 2: The model.**

$$
q(p) = 2000\\,p^{-1.5} \\tag{1}
$$

$$
R(p) = 2000\\,p^{-0.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$
A = 250 \\times 8 = 2000
$$

**2.** Multiplying by $p$ raises the exponent by one, so revenue is still isoelastic:

$$
-1.5 + 1 = -0.5
$$

**3.** Levels along the revenue curve:

$$
R(4) = 1000, \\qquad R(16) = 500, \\qquad R(36) \\approx 333
$$

**4.** Invert (2) at the fixed charge by squaring the ratio:

$$
p^{0.5} = \\frac{2000}{400} = 5 \\;\\Rightarrow\\; p = 25
$$

**5.** Scale factors on the revenue curve are gentler than on demand:

$$
2^{-0.5} \\approx 0.707 \\;(-29\\%), \\qquad 4^{-0.5} = 0.5
$$

**Answer.** $A = 2000$ | $q(p) = 2000p^{-1.5}$ | $R(p) = 2000p^{-0.5}$ | charge covered for $p < 25$`,
  },
];
