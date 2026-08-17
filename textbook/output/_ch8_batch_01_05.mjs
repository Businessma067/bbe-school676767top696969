/** MATH 8.01–8.05 — Chapter 5 depth: full derivations, trap notes, Part 1/2/3 overviews. */
export const BATCH = [
  {
    id: "math-8-1",
    case_id: "MATH 8.01",
    title: `Recovering a Robot's Loading Law from a Recorded Jump`,
    context: `A warehouse robot's loading rate (units per minute) follows the power law $P(u)=A u^{0.75}$, where $u>0$ is the number of units already staged at the pick face. The commissioning log never records $A$ itself: it only notes that raising the staged count from $16$ to $81$ units lifted the loading rate by exactly $57$ units per minute. A separate service note certifies the drive for loading rates up to $100$ units per minute.`,
    statements: [
      `The coefficient of the loading law satisfies $A=3$.`,
      `At $u=16$ the loading rate is $27$ units per minute.`,
      `Doubling the staged count raises the loading rate by less than $70\\%$.`,
      `A staged count of $110$ units keeps the rate inside the certified ceiling.`,
      `The staged count that produces exactly $48$ units per minute is below $40$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The coefficient of the loading law satisfies $A=3$.**  (true)

This claim asks for the scale factor of the power law, which the commissioning log never states. It has to be reconstructed from the recorded jump in rate between two staging levels, and that reconstruction gives $A=3$.

The trap is to divide $57$ by one of the staged counts, as if the log had reported a rate at a single staging level. What the log reports is a *difference* between two rates, so the coefficient multiplies the difference of the two shape factors, not a single one.

Both staging levels are exact fourth powers, so the shape factors come out whole:

$$
16^{0.75} = (2^{4})^{3/4} = 2^{3} = 8
$$

$$
81^{0.75} = (3^{4})^{3/4} = 3^{3} = 27
$$

The recorded lift is the difference of the two rates:

$$
A \\cdot 27 - A \\cdot 8 = 57
$$

$$
19A = 57 \\qquad \\Rightarrow \\qquad A = 3
$$

The loading law is therefore $P(u)=3u^{0.75}$, exactly as the claim states.`,
      `**B) At $u=16$ the loading rate is $27$ units per minute.**  (false)

This claim reads a level off the recovered law. With $A=3$ the rate at $u=16$ is $24$ units per minute, three units below the figure claimed.

The number $27$ does appear in the work, but as $81^{0.75}$, the shape factor belonging to the *higher* staging level before the coefficient is applied. Picking up a mid-calculation number and reporting it as a rate is the standard slip here.

Applying the recovered coefficient at $u=16$:

$$
P(16) = 3 \\times 16^{0.75} = 3 \\times 8 = 24
$$

The companion value confirms the model is the right one:

$$
P(81) = 3 \\times 27 = 81, \\qquad 81 - 24 = 57
$$

The jump matches the log exactly, so $24$ is the correct rate at $u=16$ and the claimed $27$ is false.`,
      `**C) Doubling the staged count raises the loading rate by less than $70\\%$.**  (true)

This claim is about a scale factor rather than a level, so neither $A$ nor the starting staging level matters. Doubling multiplies the rate by $2^{0.75}\\approx1.682$, a rise of about $68.2\\%$, which stays under $70\\%$.

The instinct that doubling the input doubles the output belongs to a linear model. Here the exponent $0.75$ is below $1$, so output grows more slowly than the input: every doubling buys less than a doubling in rate, no matter where the doubling starts.

Form the ratio and watch the coefficient and the base cancel:

$$
\\frac{P(2u)}{P(u)} = \\frac{A(2u)^{0.75}}{Au^{0.75}} = 2^{0.75}
$$

Split the exponent into pieces that are easy to evaluate:

$$
2^{0.75} = 2^{1/2} \\times 2^{1/4} \\approx 1.4142 \\times 1.1892 \\approx 1.6818
$$

The rise is about $68.18\\%$, which is less than $70\\%$, so the claim holds.`,
      `**D) A staged count of $110$ units keeps the rate inside the certified ceiling.**  (false)

This claim tests the recovered law against the $100$ units-per-minute certification. At $u=110$ the model predicts about $101.9$ units per minute, so the drive would be pushed past its ceiling.

The margin is thin, which is exactly why the claim cannot be settled by eye: the highest logged staging level was $81$ units at $81$ units per minute, still comfortably inside the ceiling, and it is tempting to assume $110$ is also safe because the two numbers look close.

Evaluate the rate at the proposed staging level:

$$
110^{0.75} = 110^{1/2} \\times 110^{1/4} \\approx 10.4881 \\times 3.2385 \\approx 33.97
$$

$$
P(110) \\approx 3 \\times 33.97 \\approx 101.9 > 100
$$

Inverting the ceiling shows where the true limit sits:

$$
3u^{0.75} = 100 \\quad \\Rightarrow \\quad u = \\left(\\tfrac{100}{3}\\right)^{4/3} \\approx 107.3
$$

Staging is safe only up to about $107$ units, so $110$ units breaches the certification and the claim is false.`,
      `**E) The staged count that produces exactly $48$ units per minute is below $40$.**  (false)

This claim runs the law backwards: it fixes the rate at $48$ units per minute and asks for the staging level behind it. That level is about $40.3$ units, just above the threshold in the claim.

The trap is proportional thinking. The rate at $u=16$ is $24$, and $48$ is twice that, so doubling the staging level to $32$ looks like the answer. With exponent $0.75$, doubling the *output* requires multiplying the *input* by $2^{4/3}\\approx2.52$, not by $2$.

Invert the law by raising both sides to the power $4/3$:

$$
3u^{0.75} = 48 \\quad \\Rightarrow \\quad u^{0.75} = 16
$$

$$
u = 16^{4/3} = (2^{4})^{4/3} = 2^{16/3} = 2^{5} \\times 2^{1/3} \\approx 32 \\times 1.2599 \\approx 40.32
$$

The check against the doubling rule agrees:

$$
16 \\times 2^{4/3} \\approx 16 \\times 2.5198 \\approx 40.32
$$

The staging level is about $40.32$ units, which is not below $40$, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 1,
    solution_overview: `A warehouse robot's loading rate follows $P(u)=Au^{0.75}$ for staged units $u>0$. Raising staging from $16$ to $81$ units lifted the rate by $57$ units per minute, and the drive is certified up to $100$ units per minute.

**Part 1: Building the model.**

Let $u$ = units staged at the pick face and $P(u)$ = loading rate in units per minute. The exponent $0.75$ is given, so only the coefficient $A$ is unknown, and the log gives one usable observation.

**1. Translate: the shape factors at the two logged levels.** Both staging levels are fourth powers, so they simplify exactly:

$$
16^{0.75} = 2^{3} = 8, \\qquad 81^{0.75} = 3^{3} = 27
$$

**2. Translate: the recorded lift.** The log reports a difference of rates, not a rate:

$$
A(27) - A(8) = 57
$$

**Part 2: The model.**

$$
P(u) = A u^{0.75} \\tag{1}
$$

$$
19A = 57 \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (2) gives the coefficient directly:

$$
A = \\frac{57}{19} = 3 \\qquad \\Rightarrow \\qquad P(u) = 3u^{0.75}
$$

**2.** Check both logged levels against the model:

$$
P(16) = 3(8) = 24, \\qquad P(81) = 3(27) = 81, \\qquad 81 - 24 = 57
$$

**3.** Scale factors need no anchor at all, because the coefficient cancels:

$$
\\frac{P(ku)}{P(u)} = k^{0.75}, \\qquad 2^{0.75} \\approx 1.6818
$$

**4.** Invert the law to move from a target rate back to staging:

$$
u = \\left(\\frac{P}{3}\\right)^{4/3}
$$

$$
P = 48 \\;\\Rightarrow\\; u \\approx 40.32, \\qquad P = 100 \\;\\Rightarrow\\; u \\approx 107.3
$$

**5.** The certification therefore caps staging near $107$ units; $110$ units would run the drive at roughly $101.9$ units per minute.

**Answer.** $A = 3$ | $P(u) = 3u^{0.75}$ | certified staging limit $\\approx 107.3$ units`,
  },
  {
    id: "math-8-2",
    case_id: "MATH 8.02",
    title: `Telescope Resolving Power from a Percentage Rule`,
    context: `A telescope's resolving power follows $R(d)=A d^{r}$, where $d>0$ is the aperture diameter in metres. Neither constant was measured directly. Two facts are on file: widening any aperture by $50\\%$ raises resolving power by $125\\%$, and a bench test on the $5$ m mirror recorded a resolving power of $50$.`,
    statements: [
      `The exponent of the resolving-power law is $r=2$.`,
      `A $10$ m aperture delivers a resolving power of $200$.`,
      `Reaching a resolving power of $200$ requires an aperture above $12$ m.`,
      `Had a $50\\%$ widening lifted resolving power by only $60\\%$, the exponent would be below $1.2$.`,
      `Under that weaker rule, with the same bench reading at $5$ m, a $10$ m aperture would deliver more than $120$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The exponent of the resolving-power law is $r=2$.**  (true)

This claim asks for the exponent, and the only fact that carries exponent information is the percentage rule, since scale factors are independent of the coefficient $A$. That rule forces $r=2$.

The trap is arithmetic on the percentages. A rise of $125\\%$ means the new value is $225\\%$ of the old one, so the multiplier is $2.25$, not $1.25$. Using $1.25$ would give $r=\\ln 1.25/\\ln 1.5\\approx0.55$ and turn a strongly convex instrument response into a flat one.

Write the rule as a ratio, where $A$ cancels:

$$
\\frac{R(1.5d)}{R(d)} = \\frac{A(1.5d)^{r}}{Ad^{r}} = 1.5^{r}
$$

Set that multiplier equal to the observed one:

$$
1.5^{r} = 2.25 = 1.5^{2}
$$

$$
r = 2
$$

The exponent is exactly $2$, so the claim is true.`,
      `**B) A $10$ m aperture delivers a resolving power of $200$.**  (true)

This claim needs a level, so the bench reading has to be brought in on top of the exponent. With $r=2$ the bench point fixes $A=2$, and the $10$ m aperture then delivers exactly $200$.

There is a shortcut worth seeing: because $10$ m is twice the bench aperture, the ratio rule alone answers the question without ever computing $A$. Doubling multiplies resolving power by $2^{2}=4$, and $4\\times50=200$.

Recover the coefficient from the bench test:

$$
A \\cdot 5^{2} = 50 \\quad \\Rightarrow \\quad 25A = 50 \\quad \\Rightarrow \\quad A = 2
$$

$$
R(d) = 2d^{2}
$$

Evaluate at the larger aperture, and confirm with the ratio route:

$$
R(10) = 2(10)^{2} = 200, \\qquad \\frac{R(10)}{R(5)} = 2^{2} = 4
$$

Both routes give $200$, so the claim holds.`,
      `**C) Reaching a resolving power of $200$ requires an aperture above $12$ m.**  (false)

This claim runs the law backwards. Solving $2d^{2}=200$ gives exactly $10$ m, so the target is met two metres *below* the threshold in the claim.

The overshoot comes from treating growth as linear: resolving power has to rise fourfold from the bench reading of $50$, and an aperture "well past" $10$ m feels necessary. With a squared response, a fourfold rise in output needs only a twofold rise in diameter.

Invert the recovered law:

$$
2d^{2} = 200 \\quad \\Rightarrow \\quad d^{2} = 100 \\quad \\Rightarrow \\quad d = 10
$$

An aperture of $12$ m would already overshoot the target:

$$
R(12) = 2(144) = 288 > 200
$$

The requirement is $10$ m, not something above $12$ m, so the claim is false.`,
      `**D) Had a $50\\%$ widening lifted resolving power by only $60\\%$, the exponent would be below $1.2$.**  (true)

This claim replaces the observed scaling rule with a weaker one and asks what exponent it implies. The multiplier becomes $1.6$ instead of $2.25$, and solving for the exponent gives about $1.159$, which is below $1.2$.

Because $1.6$ is not a neat power of $1.5$, the exponent cannot be read off by inspection as in part A; logarithms are the only way to isolate it. Note that both logarithms are of numbers above $1$, so the quotient is positive and the response is still increasing, just far less convex.

Take logarithms of the counterfactual scaling rule:

$$
1.5^{r'} = 1.6 \\quad \\Rightarrow \\quad r' \\ln 1.5 = \\ln 1.6
$$

$$
r' = \\frac{\\ln 1.6}{\\ln 1.5} \\approx \\frac{0.4700}{0.4055} \\approx 1.1592
$$

A quick sanity check confirms the size:

$$
1.5^{1.2} \\approx 1.6266 > 1.6
$$

Since $1.5^{1.2}$ already overshoots the target multiplier, the true exponent is below $1.2$, so the claim is true.`,
      `**E) Under that weaker rule, with the same bench reading at $5$ m, a $10$ m aperture would deliver more than $120$.**  (false)

This claim carries the counterfactual exponent through to a level. With $r'\\approx1.1592$ and the bench reading held at $50$, the $10$ m aperture would deliver about $111.6$, short of $120$.

The temptation is to reuse the doubling factor of $4$ from part B, or to assume that an exponent "a bit above $1$" still produces something close to it. Doubling now multiplies output by $2^{1.1592}\\approx2.23$, barely more than proportional growth, which is precisely what the weaker rule was describing.

Work with the ratio so the coefficient never has to be recomputed:

$$
\\frac{R(10)}{R(5)} = 2^{r'} = 2^{1.1592}
$$

$$
2^{1.1592} = e^{1.1592 \\times 0.6931} \\approx e^{0.8034} \\approx 2.2331
$$

Apply that factor to the bench reading:

$$
R(10) \\approx 50 \\times 2.2331 \\approx 111.7 < 120
$$

The weaker rule leaves the $10$ m aperture below $120$, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 2,
    solution_overview: `Resolving power follows $R(d)=Ad^{r}$ for aperture $d>0$. Widening any aperture by $50\\%$ raises resolving power by $125\\%$, and the $5$ m bench test recorded $R=50$.

**Part 1: Building the model.**

Let $d$ = aperture diameter in metres and $R(d)$ = resolving power. Two unknowns, $A$ and $r$, need two independent facts; the percentage rule carries the exponent and the bench test carries the level.

**1. Translate: the percentage rule.** A $50\\%$ wider aperture means $1.5d$, and a $125\\%$ higher output means $2.25$ times as much:

$$
\\frac{R(1.5d)}{R(d)} = 1.5^{r} = 2.25
$$

**2. Translate: the bench test.** One measured point pins the coefficient once $r$ is known:

$$
A \\cdot 5^{r} = 50
$$

**Part 2: The model.**

$$
1.5^{r} = 2.25 \\tag{1}
$$

$$
25A = 50 \\tag{2}
$$

**Part 3: Solve.**

**1.** Because $2.25 = 1.5^{2}$, equation (1) resolves without logarithms:

$$
r = 2
$$

**2.** Equation (2) then gives the coefficient and the full law:

$$
A = \\frac{50}{25} = 2 \\qquad \\Rightarrow \\qquad R(d) = 2d^{2}
$$

**3.** Levels and inversions follow directly:

$$
R(10) = 200, \\qquad R(12) = 288, \\qquad R = 200 \\;\\Rightarrow\\; d = 10
$$

**4.** The counterfactual rule replaces the multiplier $2.25$ by $1.6$, which needs logarithms:

$$
r' = \\frac{\\ln 1.6}{\\ln 1.5} \\approx 1.1592
$$

**5.** Holding the bench reading fixed, doubling the aperture under the weaker rule gives:

$$
R(10) \\approx 50 \\times 2^{1.1592} \\approx 111.7
$$

**Answer.** $r = 2$ | $A = 2$ | $R(d) = 2d^{2}$ | counterfactual exponent $r' \\approx 1.159$`,
  },
  {
    id: "math-8-3",
    case_id: "MATH 8.03",
    title: `Two Turbines with Different Wind Exponents`,
    context: `Two turbines report output as power functions of wind speed $w>0$ in metres per second. For turbine A, doubling the wind speed multiplies output by $2\\sqrt{2}$, and at $w=4$ the turbine delivers $32$ kW. Turbine B's output is proportional to the square of wind speed, and at $w=10$ it delivers $100$ kW.`,
    statements: [
      `At $w=4$ the two turbines together deliver more than $45$ kW.`,
      `Turbine A's exponent is larger than turbine B's.`,
      `The two turbines deliver equal output at $w=16$.`,
      `At every wind speed above that crossover, turbine B out-produces turbine A.`,
      `Halving turbine A's coefficient would move the crossover below $5$ m/s.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) At $w=4$ the two turbines together deliver more than $45$ kW.**  (true)

This claim needs both laws in explicit form before anything can be added. Turbine A's doubling rule and its anchor give $P_A(w)=4w^{1.5}$, turbine B's proportionality and its anchor give $P_B(w)=w^{2}$, and at $w=4$ the two deliver $32$ kW and $16$ kW, a total of $48$ kW.

The anchor for turbine B sits at $w=10$, far from the $w=4$ being asked about, so its output has to be transported down to $w=4$ through the model rather than read off the report. The quadratic shape means that moving from $10$ to $4$ divides output by more than six.

Recover turbine A from its doubling rule and anchor:

$$
2^{r_A} = 2\\sqrt{2} = 2^{1.5} \\quad \\Rightarrow \\quad r_A = 1.5
$$

$$
c \\cdot 4^{1.5} = 32 \\quad \\Rightarrow \\quad 8c = 32 \\quad \\Rightarrow \\quad c = 4
$$

Recover turbine B from its proportionality and anchor:

$$
k \\cdot 10^{2} = 100 \\quad \\Rightarrow \\quad k = 1 \\quad \\Rightarrow \\quad P_B(w) = w^{2}
$$

Add the two outputs at the requested speed:

$$
P_A(4) + P_B(4) = 4(8) + 16 = 32 + 16 = 48 > 45
$$

The combined output clears $45$ kW, so the claim is true.`,
      `**B) Turbine A's exponent is larger than turbine B's.**  (false)

This claim compares exponents, not outputs. Turbine A carries the exponent $1.5$ and turbine B carries $2$, so A's exponent is the smaller of the two.

The confusion is natural because turbine A looks stronger everywhere in the low-wind data: its coefficient is $4$ against B's $1$, and at $w=4$ it delivers twice B's output. Coefficients set the level, exponents set how fast output responds to wind, and here the machine with the larger level has the flatter response.

Compare the two scaling rules side by side:

$$
\\frac{P_A(2w)}{P_A(w)} = 2^{1.5} \\approx 2.83, \\qquad \\frac{P_B(2w)}{P_B(w)} = 2^{2} = 4
$$

Each doubling of wind speed rewards turbine B more than turbine A:

$$
1.5 < 2
$$

Turbine A's exponent is smaller, so the claim is false.`,
      `**C) The two turbines deliver equal output at $w=16$.**  (true)

This claim asks for the crossover of the two laws. Setting $4w^{1.5}=w^{2}$ and dividing by $w^{1.5}$ leaves $w^{0.5}=4$, so the outputs coincide at $w=16$, where both deliver $256$ kW.

Only one positive crossover exists. Once the shared factor $w^{1.5}$ is cancelled, the equation becomes a single condition on $w^{0.5}$, so there is nothing else to find; the apparent second solution $w=0$ falls outside the domain $w>0$.

Set the two outputs equal and cancel the common power:

$$
4w^{1.5} = w^{2} \\quad \\Rightarrow \\quad 4 = w^{0.5}
$$

$$
w = 4^{2} = 16
$$

Verify the shared level:

$$
P_A(16) = 4(16^{1.5}) = 4(64) = 256, \\qquad P_B(16) = 16^{2} = 256
$$

Both turbines deliver $256$ kW at $w=16$, so the claim is true.`,
      `**D) At every wind speed above that crossover, turbine B out-produces turbine A.**  (true)

This claim is about behaviour on a whole interval, not at a point, so a single test value would not settle it. The ratio $P_B/P_A = w^{0.5}/4$ increases with wind speed and equals $1$ at $w=16$, so it exceeds $1$ for every $w>16$.

Checking one convenient speed such as $w=25$ is a useful sanity test but proves nothing about the rest of the interval; what closes the argument is that the ratio is strictly increasing, so once it passes $1$ it can never come back.

Form the ratio of the two laws:

$$
\\frac{P_B(w)}{P_A(w)} = \\frac{w^{2}}{4w^{1.5}} = \\frac{w^{0.5}}{4}
$$

The ratio is increasing in $w$ and crosses $1$ exactly at the crossover:

$$
\\frac{w^{0.5}}{4} > 1 \\quad \\Longleftrightarrow \\quad w^{0.5} > 4 \\quad \\Longleftrightarrow \\quad w > 16
$$

Spot-check beyond the crossover:

$$
P_A(25) = 4(125) = 500, \\qquad P_B(25) = 625
$$

Turbine B leads at every speed above $16$ m/s, so the claim is true.`,
      `**E) Halving turbine A's coefficient would move the crossover below $5$ m/s.**  (true)

This claim asks how sensitive the crossover is to turbine A's coefficient. Replacing $4$ by $2$ moves the crossover from $16$ m/s down to $4$ m/s, which is below the $5$ m/s threshold.

The size of the shift is the surprising part: halving the coefficient does not halve the crossover speed. Because the condition reduces to $w^{0.5}=c$, the crossover is the *square* of the coefficient, so cutting $c$ in half divides the crossover speed by four.

Redo the crossover condition with the reduced coefficient:

$$
2w^{1.5} = w^{2} \\quad \\Rightarrow \\quad w^{0.5} = 2 \\quad \\Rightarrow \\quad w = 4
$$

The general pattern behind both crossovers:

$$
cw^{1.5} = w^{2} \\quad \\Rightarrow \\quad w = c^{2}, \\qquad c = 4 \\;\\Rightarrow\\; 16, \\quad c = 2 \\;\\Rightarrow\\; 4
$$

The new crossover of $4$ m/s is below $5$ m/s, so the claim is true.`,
    ],
    difficulty_level: "3/5",
    sort_order: 3,
    solution_overview: `Turbine A doubles-up by a factor $2\\sqrt{2}$ and delivers $32$ kW at $w=4$. Turbine B is proportional to $w^{2}$ and delivers $100$ kW at $w=10$.

**Part 1: Building the model.**

Let $w$ = wind speed in m/s, $P_A(w)=cw^{r_A}$ and $P_B(w)=kw^{2}$ = outputs in kW. Each turbine supplies one scaling fact and one measured point, which is exactly enough to pin both constants.

**1. Translate: turbine A's doubling rule.** The factor $2\\sqrt{2}$ is a power of $2$, so the exponent falls out:

$$
2^{r_A} = 2\\sqrt{2} = 2^{1.5} \\quad \\Rightarrow \\quad r_A = 1.5
$$

**2. Translate: the two anchors.** Each measured point fixes one coefficient:

$$
c \\cdot 4^{1.5} = 32, \\qquad k \\cdot 10^{2} = 100
$$

**Part 2: The model.**

$$
P_A(w) = 4w^{1.5} \\tag{1}
$$

$$
P_B(w) = w^{2} \\tag{2}
$$

**Part 3: Solve.**

**1.** Evaluate both laws at the low-wind point:

$$
P_A(4) = 32, \\qquad P_B(4) = 16, \\qquad \\text{total } 48 \\text{ kW}
$$

**2.** Compare responsiveness through the exponents rather than the levels:

$$
r_A = 1.5 < 2 = r_B
$$

**3.** Locate the crossover by cancelling the shared power:

$$
4w^{1.5} = w^{2} \\;\\Rightarrow\\; w^{0.5} = 4 \\;\\Rightarrow\\; w = 16, \\qquad P_A(16) = P_B(16) = 256
$$

**4.** Decide the ordering on each side of the crossover with the ratio:

$$
\\frac{P_B(w)}{P_A(w)} = \\frac{w^{0.5}}{4}
$$

The ratio is below $1$ for $w<16$ and above $1$ for $w>16$, so A leads before the crossover and B leads after it.

**5.** The general crossover rule shows how the coefficient controls the switch point:

$$
cw^{1.5} = w^{2} \\;\\Rightarrow\\; w = c^{2}
$$

Halving $c$ from $4$ to $2$ therefore drops the crossover from $16$ m/s to $4$ m/s.

**Answer.** $P_A(w) = 4w^{1.5}$ | $P_B(w) = w^{2}$ | crossover $w = 16$ m/s at $256$ kW`,
  },
  {
    id: "math-8-4",
    case_id: "MATH 8.04",
    title: `Assembly Time, Derived Throughput, and a Manual Rival`,
    context: `Assembling $N$ units on a mechanized line takes $T(N)=A N^{r}$ minutes. Quadrupling the batch multiplies assembly time by $16$, and a batch of $5$ units takes $100$ minutes. Management tracks average throughput $R=N/T$ in units per minute, expressed as a function of the elapsed time $T$. A manual rival sustains a constant $0.05$ units per minute whatever the batch size.`,
    statements: [
      `The exponent of the assembly-time law is $r=2$.`,
      `Average throughput as a function of elapsed time is $R(T)=0.5\\,T^{-0.5}$.`,
      `Mechanized throughput matches the rival's rate at $T=100$ minutes.`,
      `Beyond that elapsed time the mechanized line keeps a higher average throughput than the rival.`,
      `Against a rival sustaining $0.2$ units per minute, the match would occur before $10$ minutes.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The exponent of the assembly-time law is $r=2$.**  (true)

This claim asks for the exponent, and the quadrupling rule is the fact that carries it. Since scale factors are free of the coefficient, $4^{r}=16$ settles the exponent on its own, giving $r=2$.

The anchor $T(5)=100$ looks like it should also be involved, but it cannot pin an exponent by itself: a single point is consistent with infinitely many pairs $(A,r)$. Its role comes next, once $r$ is known.

Write the quadrupling rule as a ratio so $A$ drops out:

$$
\\frac{T(4N)}{T(N)} = \\frac{A(4N)^{r}}{AN^{r}} = 4^{r}
$$

Match it to the observed factor:

$$
4^{r} = 16 = 4^{2} \\quad \\Rightarrow \\quad r = 2
$$

Assembly time grows with the square of the batch, so the claim is true.`,
      `**B) Average throughput as a function of elapsed time is $R(T)=0.5\\,T^{-0.5}$.**  (true)

This claim asks for a derived law rather than a given one: throughput must be re-expressed with elapsed time as the variable. Inverting $T=4N^{2}$ and dividing by $T$ produces exactly $R(T)=0.5T^{-0.5}$.

The step that is easy to botch is the direction of the substitution. Throughput is naturally written as $N/T$, but management wants it as a function of $T$ alone, so $N$ has to be replaced by its expression in $T$ — not the other way round.

Fix the coefficient with the anchor, then invert:

$$
A \\cdot 5^{2} = 100 \\quad \\Rightarrow \\quad 25A = 100 \\quad \\Rightarrow \\quad A = 4, \\qquad T = 4N^{2}
$$

$$
N^{2} = \\frac{T}{4} \\quad \\Rightarrow \\quad N = \\frac{T^{0.5}}{2} = 0.5\\,T^{0.5}
$$

Divide by elapsed time to get average throughput:

$$
R(T) = \\frac{N}{T} = \\frac{0.5\\,T^{0.5}}{T} = 0.5\\,T^{-0.5}
$$

The derived law matches the claim, so it is true.`,
      `**C) Mechanized throughput matches the rival's rate at $T=100$ minutes.**  (true)

This claim locates the elapsed time at which the mechanized average throughput equals the rival's fixed $0.05$ units per minute. Solving $0.5T^{-0.5}=0.05$ gives $T^{0.5}=10$, so the match happens at $T=100$ minutes.

The result lands exactly on the anchor batch, which is a useful cross-check rather than a coincidence: the $5$-unit batch takes $100$ minutes, an average of $5/100 = 0.05$ units per minute, precisely the rival's pace.

Set the derived throughput equal to the rival's rate:

$$
0.5\\,T^{-0.5} = 0.05 \\quad \\Rightarrow \\quad T^{-0.5} = 0.1
$$

$$
T^{0.5} = 10 \\quad \\Rightarrow \\quad T = 100
$$

Confirm through the anchor batch:

$$
N = 0.5\\sqrt{100} = 5, \\qquad \\frac{N}{T} = \\frac{5}{100} = 0.05
$$

The crossover sits at $100$ minutes, so the claim is true.`,
      `**D) Beyond that elapsed time the mechanized line keeps a higher average throughput than the rival.**  (false)

This claim gets the direction of the comparison backwards. The exponent in $R(T)=0.5T^{-0.5}$ is negative, so average throughput *falls* as batches get longer; past $100$ minutes the mechanized line drops below the rival's steady $0.05$ units per minute.

The intuition being appealed to is that bigger batches mean more units and therefore more productivity. That is true of total output but not of the average rate: because time grows with the square of the batch, each extra unit costs more time than the last, and the average per minute decays.

Read the sign of the exponent:

$$
R(T) = 0.5\\,T^{-0.5}, \\qquad -0.5 < 0 \\;\\Rightarrow\\; R \\text{ decreasing in } T
$$

Test a longer run beyond the crossover:

$$
R(400) = 0.5(400)^{-0.5} = \\frac{0.5}{20} = 0.025 < 0.05
$$

At $400$ minutes the mechanized line averages half the rival's pace, so the claim is false.`,
      `**E) Against a rival sustaining $0.2$ units per minute, the match would occur before $10$ minutes.**  (true)

This claim reruns the crossover with a faster rival. A rate of $0.2$ units per minute is met at $T=6.25$ minutes, which is indeed before the $10$-minute mark.

Note how sharply the crossover moves: the rival's rate is multiplied by $4$, and the crossover time is divided by $16$. That is the negative-half exponent at work — inverting $R=0.5T^{-0.5}$ gives $T=(0.5/R)^{2}$, so the crossover responds to the *square* of the rate change.

Set the derived throughput equal to the faster rate:

$$
0.5\\,T^{-0.5} = 0.2 \\quad \\Rightarrow \\quad T^{0.5} = \\frac{0.5}{0.2} = 2.5
$$

$$
T = 2.5^{2} = 6.25
$$

Compare the two crossovers through the general inverse:

$$
T = \\left(\\frac{0.5}{R}\\right)^{2}, \\qquad R = 0.05 \\;\\Rightarrow\\; 100, \\quad R = 0.2 \\;\\Rightarrow\\; 6.25
$$

The faster rival is matched after only $6.25$ minutes, which is before $10$, so the claim is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 4,
    solution_overview: `Assembly time follows $T(N)=AN^{r}$. Quadrupling the batch multiplies time by $16$, and $T(5)=100$ minutes. Average throughput $R=N/T$ is tracked against elapsed time, and a manual rival holds $0.05$ units per minute.

**Part 1: Building the model.**

Let $N$ = batch size in units, $T$ = assembly time in minutes, $R$ = average throughput in units per minute. The scaling fact carries the exponent, the anchor carries the coefficient, and throughput is a derived quantity built from both.

**1. Translate: the quadrupling rule.** Scale factors are independent of $A$:

$$
\\frac{T(4N)}{T(N)} = 4^{r} = 16
$$

**2. Translate: the anchor batch.** One measured pair fixes the coefficient:

$$
A \\cdot 5^{r} = 100
$$

**Part 2: The model.**

$$
4^{r} = 16 \\tag{1}
$$

$$
25A = 100 \\tag{2}
$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the time law:

$$
r = 2, \\qquad A = 4, \\qquad T(N) = 4N^{2}
$$

**2.** Invert the time law so batch size is expressed through elapsed time:

$$
N = \\frac{T^{0.5}}{2}
$$

**3.** Divide by elapsed time to obtain average throughput as a power function with a negative exponent:

$$
R(T) = \\frac{N}{T} = 0.5\\,T^{-0.5}
$$

**4.** Invert once more to turn any target rate into a crossover time:

$$
T = \\left(\\frac{0.5}{R}\\right)^{2}
$$

$$
R = 0.05 \\;\\Rightarrow\\; T = 100, \\qquad R = 0.2 \\;\\Rightarrow\\; T = 6.25
$$

**5.** The negative exponent fixes the ordering: $R$ decreases in $T$, so the mechanized line beats a constant-rate rival only *before* the crossover time and falls behind after it. At $T=400$ the average is $0.025$ units per minute, half the slow rival's pace.

**Answer.** $T(N) = 4N^{2}$ | $R(T) = 0.5\\,T^{-0.5}$ | crossovers at $T = 100$ min and $T = 6.25$ min`,
  },
  {
    id: "math-8-5",
    case_id: "MATH 8.05",
    title: `Ore-to-Alloy Chain Against a Linear Competitor`,
    context: `Ore of purity $u>0$ yields metal according to $M(u)=c\\,u^{1.5}$. An audit records that lifting purity from $9$ to $16$ raised metal output by $296$ units. Metal is then converted into alloy strength by $S(M)=M^{2/3}/2$. A competing supplier quotes strength directly as $S_{\\mathrm{comp}}(u)=1.8u+5$, which is linear rather than a power function. Purity is only meaningful up to $u=50$.`,
    statements: [
      `The coefficient of the metal-yield law is $c=8$.`,
      `Strength as a function of purity is a power function with exponent exactly $1$.`,
      `At purity $u=10$ the chain delivers more strength than the competitor.`,
      `The two suppliers deliver equal strength at a purity below $30$.`,
      `From that purity up to $u=50$ the chain stays strictly ahead of the competitor.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The coefficient of the metal-yield law is $c=8$.**  (true)

This claim asks for the coefficient of the first link in the chain. The audit reports a change in output between two purities rather than an output level, and unpacking that change gives $c=8$.

Both purities are perfect squares, so their $1.5$ powers are exact: $9^{1.5}=27$ and $16^{1.5}=64$. The trap is to divide $296$ by $16^{1.5}$ alone, which treats the audit note as if it recorded the output at the higher purity instead of the gain between the two.

Evaluate the two shape factors:

$$
9^{1.5} = (3^{2})^{3/2} = 3^{3} = 27, \\qquad 16^{1.5} = (4^{2})^{3/2} = 4^{3} = 64
$$

The audit's gain is the difference of the two outputs:

$$
c(64) - c(27) = 296 \\quad \\Rightarrow \\quad 37c = 296 \\quad \\Rightarrow \\quad c = 8
$$

The metal law is $M(u)=8u^{1.5}$, matching the claim.`,
      `**B) Strength as a function of purity is a power function with exponent exactly $1$.**  (true)

This claim is about the composition of the two links. Substituting $M(u)=8u^{1.5}$ into $S(M)=M^{2/3}/2$ multiplies the exponents, $1.5\\times\\tfrac{2}{3}=1$, so strength is proportional to purity: $S(u)=2u$.

Exponent $1$ makes the composed law linear, but that does not make the chain equivalent to the competitor's quote: the competitor's line carries an intercept of $5$, while the chain passes through the origin. It is that structural difference, not the slopes alone, that produces the single crossover in parts D and E.

Compose the two stages:

$$
S(u) = \\frac{\\left(8u^{1.5}\\right)^{2/3}}{2} = \\frac{8^{2/3}\\,u^{1.5 \\times 2/3}}{2}
$$

Simplify the constant and the exponent separately:

$$
8^{2/3} = 4, \\qquad 1.5 \\times \\frac{2}{3} = 1
$$

$$
S(u) = \\frac{4u}{2} = 2u
$$

The composed exponent is exactly $1$, so the claim is true.`,
      `**C) At purity $u=10$ the chain delivers more strength than the competitor.**  (false)

This claim compares the two offers at a single low purity. The chain gives $S(10)=20$ while the competitor gives $23$, so the chain is behind by three units at that purity.

Low purities are where the competitor's intercept dominates. Its $+5$ head start outweighs the chain's slope advantage, and only after enough purity has accumulated does the steeper slope overturn it — which is why testing one point cannot decide the general comparison in parts D and E.

Evaluate both offers at $u=10$:

$$
S(10) = 2(10) = 20
$$

$$
S_{\\mathrm{comp}}(10) = 1.8(10) + 5 = 18 + 5 = 23
$$

Compare:

$$
20 < 23
$$

The chain trails the competitor at $u=10$, so the claim is false.`,
      `**D) The two suppliers deliver equal strength at a purity below $30$.**  (true)

This claim asks for the crossover between the composed chain and the linear quote. Setting $2u = 1.8u + 5$ gives $u=25$, which lies inside the meaningful range and below $30$.

Two straight lines with different slopes meet exactly once, so there is a single crossover to find, and the domain cap $u\\le50$ matters only because it decides whether that crossover is reachable. Here $25$ sits comfortably inside the cap.

Set the two strength offers equal:

$$
2u = 1.8u + 5
$$

$$
0.2u = 5 \\quad \\Rightarrow \\quad u = 25
$$

Check the common level and the domain:

$$
S(25) = 50, \\qquad S_{\\mathrm{comp}}(25) = 1.8(25) + 5 = 50, \\qquad 25 \\le 50
$$

The offers coincide at purity $25$, which is below $30$, so the claim is true.`,
      `**E) From that purity up to $u=50$ the chain stays strictly ahead of the competitor.**  (true)

This claim covers the whole interval from the crossover to the purity cap, so it needs an argument about the gap, not just one test value. The gap $S(u)-S_{\\mathrm{comp}}(u)=0.2u-5$ is increasing and positive for every $u>25$, so the chain leads all the way to $u=50$.

The reason the lead can never be lost is that the composed chain has the steeper slope, $2$ against $1.8$. Once the accumulated slope advantage has paid off the competitor's intercept, the difference keeps widening rather than closing.

Write the gap between the two offers:

$$
S(u) - S_{\\mathrm{comp}}(u) = 2u - (1.8u + 5) = 0.2u - 5
$$

The gap is strictly increasing and changes sign only at the crossover:

$$
0.2u - 5 > 0 \\quad \\Longleftrightarrow \\quad u > 25
$$

Evaluate at the cap to see the size of the final lead:

$$
S(50) = 100, \\qquad S_{\\mathrm{comp}}(50) = 95, \\qquad \\text{gap} = 5
$$

The chain leads at every purity between $25$ and $50$, so the claim is true.`,
    ],
    difficulty_level: "5/5",
    sort_order: 5,
    solution_overview: `Metal yield is $M(u)=cu^{1.5}$, with an audited gain of $296$ units when purity rises from $9$ to $16$. Alloy strength is $S(M)=M^{2/3}/2$, the competitor quotes $S_{\\mathrm{comp}}(u)=1.8u+5$, and purity is capped at $u=50$.

**Part 1: Building the model.**

Let $u$ = ore purity, $M(u)$ = metal output, $S$ = alloy strength. The chain has two stages, so the coefficient of the first stage must be recovered before the two stages can be composed and compared with the competitor's line.

**1. Translate: the audited gain.** The audit reports a difference between two outputs:

$$
c\\left(16^{1.5}\\right) - c\\left(9^{1.5}\\right) = 296
$$

**2. Translate: the composition.** Strength is the second stage applied to the first:

$$
S(u) = \\frac{\\left(c\\,u^{1.5}\\right)^{2/3}}{2}
$$

**Part 2: The model.**

$$
37c = 296 \\tag{1}
$$

$$
S(u) = \\frac{\\left(c\\,u^{1.5}\\right)^{2/3}}{2} \\tag{2}
$$

**Part 3: Solve.**

**1.** The exact shape factors $9^{1.5}=27$ and $16^{1.5}=64$ turn (1) into a one-step solve:

$$
c = \\frac{296}{37} = 8 \\qquad \\Rightarrow \\qquad M(u) = 8u^{1.5}
$$

**2.** Composing multiplies the exponents and collapses the constants:

$$
8^{2/3} = 4, \\qquad 1.5 \\times \\frac{2}{3} = 1 \\qquad \\Rightarrow \\qquad S(u) = 2u
$$

**3.** Compare the two offers at a low purity, where the competitor's intercept still rules:

$$
S(10) = 20 < 23 = S_{\\mathrm{comp}}(10)
$$

**4.** Locate the crossover:

$$
2u = 1.8u + 5 \\;\\Rightarrow\\; 0.2u = 5 \\;\\Rightarrow\\; u = 25, \\qquad S(25) = S_{\\mathrm{comp}}(25) = 50
$$

**5.** Settle the ordering on the whole range with the gap function:

$$
S(u) - S_{\\mathrm{comp}}(u) = 0.2u - 5
$$

The gap is negative below $u=25$ and positive above it, reaching $5$ units at the cap $u=50$, so the competitor leads on $(0,25)$ and the chain leads on $(25,50]$.

**Answer.** $c = 8$ | $M(u) = 8u^{1.5}$ | $S(u) = 2u$ | crossover at $u = 25$ with strength $50$`,
  },
];
