/**
 * Chapter 8 — Power functions (Sydsæter §4.8 style exam tasks).
 * BBE True/False bank: dry claims, multi-step recovery / scaling / composition.
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH8_POWER_FUNCTIONS: MathTask[] = [
  {
    id: `math-8-1`,
    case_id: `MATH 8.01`,
    title: `Recovering a Robot's Loading Law from a Recorded Jump`,
    context: `A warehouse robot's loading rate (units per minute) follows the power law $P(u)=A u^{0.75}$, where $u>0$ is the number of units already staged at the pick face. The commissioning log never records $A$ itself: it only notes that raising the staged count from $16$ to $81$ units lifted the loading rate by exactly $57$ units per minute. A separate service note certifies the drive for loading rates up to $100$ units per minute. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the loading law satisfies $A=3$.`,
      `At $u=16$ the loading rate is $27$ units per minute.`,
      `Doubling the staged count raises the loading rate by less than $70\\%$.`,
      `A staged count of $110$ units keeps the rate inside the certified ceiling.`,
      `The staged count that produces exactly $48$ units per minute is below $40$.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the scale factor of the power law, which the commissioning log never states. It has to be reconstructed from the recorded jump in rate between two staging levels, and that reconstruction gives $A=3$.

A common mistake is to divide $57$ by one of the staged counts, as if the log had reported a rate at a single staging level. What the log reports is a *difference* between two rates, so the coefficient multiplies the difference of the two shape factors, not a single one.

Both staging levels are exact fourth powers, so the shape factors come out whole:

$$16^{0.75} = (2^{4})^{3/4} = 2^{3} = 8$$

$$81^{0.75} = (3^{4})^{3/4} = 3^{3} = 27$$

The recorded lift is the difference of the two rates:

$$A \\cdot 27 - A \\cdot 8 = 57$$

$$19A = 57 \\qquad \\Rightarrow \\qquad A = 3$$

The loading law is therefore $P(u)=3u^{0.75}$, so the statement is True.`,
      `**B.** → False

This claim reads a level off the recovered law. With $A=3$ the rate at $u=16$ is $24$ units per minute, three units below the figure claimed.

The number $27$ does appear in the work, but as $81^{0.75}$, the shape factor belonging to the *higher* staging level before the coefficient is applied. Picking up a mid-calculation number and reporting it as a rate is the standard slip here.

Applying the recovered coefficient at $u=16$:

$$P(16) = 3 \\times 16^{0.75} = 3 \\times 8 = 24$$

The companion value confirms the model is the right one:

$$P(81) = 3 \\times 27 = 81, \\qquad 81 - 24 = 57$$

The jump matches the log exactly, so $24$ is the correct rate at $u=16$ and the claimed $27$ is false.`,
      `**C.** → True

This claim is about a scale factor rather than a level, so neither $A$ nor the starting staging level matters. Doubling multiplies the rate by $2^{0.75}\\approx1.682$, a rise of about $68.2\\%$, which stays under $70\\%$.

It is not the case that doubling the input doubles the output belongs to a linear model. Here the exponent $0.75$ is below $1$, so output grows more slowly than the input: every doubling buys less than a doubling in rate, no matter where the doubling starts.

Form the ratio and watch the coefficient and the base cancel:

$$\\frac{P(2u)}{P(u)} = \\frac{A(2u)^{0.75}}{Au^{0.75}} = 2^{0.75}$$

Split the exponent into pieces that are easy to evaluate:

$$2^{0.75} = 2^{1/2} \\times 2^{1/4} \\approx 1.4142 \\times 1.1892 \\approx 1.6818$$

The rise is about $68.18\\%$, which is less than $70\\%$, so the statement is True.`,
      `**D.** → False

This claim tests the recovered law against the $100$ units-per-minute certification. At $u=110$ the model predicts about $101.9$ units per minute, so the drive would be pushed past its ceiling.

The margin is thin, which is exactly why the claim cannot be settled by eye: the highest logged staging level was $81$ units at $81$ units per minute, still comfortably inside the ceiling, and it is tempting to assume $110$ is also safe because the two numbers look close.

Evaluate the rate at the proposed staging level:

$$110^{0.75} = 110^{1/2} \\times 110^{1/4} \\approx 10.4881 \\times 3.2385 \\approx 33.97$$

$$P(110) \\approx 3 \\times 33.97 \\approx 101.9 > 100$$

Inverting the ceiling shows where the true limit sits:

$$3u^{0.75} = 100 \\quad \\Rightarrow \\quad u = \\left(\\tfrac{100}{3}\\right)^{4/3} \\approx 107.3$$

Staging is safe only up to about $107$ units, so $110$ units breaches the certification and the claim is false.`,
      `**E.** → False

This claim runs the law backwards: it fixes the rate at $48$ units per minute and asks for the staging level behind it. That level is about $40.3$ units, just above the threshold in the claim.

The trap is proportional thinking. The rate at $u=16$ is $24$, and $48$ is twice that, so doubling the staging level to $32$ looks like the answer. With exponent $0.75$, doubling the *output* requires multiplying the *input* by $2^{4/3}\\approx2.52$, not by $2$.

Invert the law by raising both sides to the power $4/3$:

$$3u^{0.75} = 48 \\quad \\Rightarrow \\quad u^{0.75} = 16$$

$$u = 16^{4/3} = (2^{4})^{4/3} = 2^{16/3} = 2^{5} \\times 2^{1/3} \\approx 32 \\times 1.2599 \\approx 40.32$$

The check against the doubling rule agrees:

$$16 \\times 2^{4/3} \\approx 16 \\times 2.5198 \\approx 40.32$$

The staging level is about $40.32$ units, which is not below $40$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `A warehouse robot's loading rate follows $P(u)=Au^{0.75}$ for staged units $u>0$. Raising staging from $16$ to $81$ units lifted the rate by $57$ units per minute, and the drive is certified up to $100$ units per minute.

**Part 1: Building the model.**

Let $u$ = units staged at the pick face and $P(u)$ = loading rate in units per minute. The exponent $0.75$ is given, so only the coefficient $A$ is unknown, and the log gives one usable observation.

**1. Translate: the shape factors at the two logged levels.** Both staging levels are fourth powers, so they simplify exactly:

$$16^{0.75} = 2^{3} = 8, \\qquad 81^{0.75} = 3^{3} = 27$$

**2. Translate: the recorded lift.** The log reports a difference of rates, not a rate:

$$A(27) - A(8) = 57$$

**Part 2: The model.**

$$P(u) = A u^{0.75} \\tag{1}$$

$$19A = 57 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (2) gives the coefficient directly:

$$A = \\frac{57}{19} = 3 \\qquad \\Rightarrow \\qquad P(u) = 3u^{0.75}$$

**2.** Check both logged levels against the model:

$$P(16) = 3(8) = 24, \\qquad P(81) = 3(27) = 81, \\qquad 81 - 24 = 57$$

**3.** Scale factors need no anchor at all, because the coefficient cancels:

$$\\frac{P(ku)}{P(u)} = k^{0.75}, \\qquad 2^{0.75} \\approx 1.6818$$

**4.** Invert the law to move from a target rate back to staging:

$$u = \\left(\\frac{P}{3}\\right)^{4/3}$$

$$P = 48 \\;\\Rightarrow\\; u \\approx 40.32, \\qquad P = 100 \\;\\Rightarrow\\; u \\approx 107.3$$

**5.** The certification therefore caps staging near $107$ units; $110$ units would run the drive at roughly $101.9$ units per minute.

**Answer.** $A = 3$ | $P(u) = 3u^{0.75}$ | certified staging limit $\\approx 107.3$ units`,
  },
  {
    id: `math-8-2`,
    case_id: `MATH 8.02`,
    title: `Telescope Resolving Power from a Percentage Rule`,
    context: `A telescope's resolving power follows $R(d)=A d^{r}$, where $d>0$ is the aperture diameter in metres. Neither constant was measured directly. Two facts are on file: widening any aperture by $50\\%$ raises resolving power by $125\\%$, and a bench test on the $5$ m mirror recorded a resolving power of $50$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent of the resolving-power law is $r=2$.`,
      `A $10$ m aperture delivers a resolving power of $200$.`,
      `Reaching a resolving power of $200$ requires an aperture above $12$ m.`,
      `Had a $50\\%$ widening lifted resolving power by only $60\\%$, the exponent would be below $1.2$.`,
      `Under that weaker rule, with the same bench reading at $5$ m, a $10$ m aperture would deliver more than $120$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the exponent, and the only fact that carries exponent information is the percentage rule, since scale factors are independent of the coefficient $A$. That rule forces $r=2$.

The trap is arithmetic on the percentages. A rise of $125\\%$ means the new value is $225\\%$ of the old one, so the multiplier is $2.25$, not $1.25$. Using $1.25$ would give $r=\\ln 1.25/\\ln 1.5\\approx0.55$ and turn a strongly convex instrument response into a flat one.

Write the rule as a ratio, where $A$ cancels:

$$\\frac{R(1.5d)}{R(d)} = \\frac{A(1.5d)^{r}}{Ad^{r}} = 1.5^{r}$$

Set that multiplier equal to the observed one:

$$1.5^{r} = 2.25 = 1.5^{2}$$

$$r = 2$$

The exponent is exactly $2$, so the statement is True.`,
      `**B.** → True

This claim needs a level, so the bench reading has to be brought in on top of the exponent. With $r=2$ the bench point fixes $A=2$, and the $10$ m aperture then delivers exactly $200$.

There is a shortcut worth seeing: because $10$ m is twice the bench aperture, the ratio rule alone answers the question without ever computing $A$. Doubling multiplies resolving power by $2^{2}=4$, and $4\\times50=200$.

Recover the coefficient from the bench test:

$$A \\cdot 5^{2} = 50 \\quad \\Rightarrow \\quad 25A = 50 \\quad \\Rightarrow \\quad A = 2$$

$$R(d) = 2d^{2}$$

Evaluate at the larger aperture, and confirm with the ratio route:

$$R(10) = 2(10)^{2} = 200, \\qquad \\frac{R(10)}{R(5)} = 2^{2} = 4$$

Both routes give $200$, so the statement is True.`,
      `**C.** → False

This claim runs the law backwards. Solving $2d^{2}=200$ gives exactly $10$ m, so the target is met two metres *below* the threshold in the claim.

The overshoot comes from treating growth as linear: resolving power has to rise fourfold from the bench reading of $50$, and an aperture "well past" $10$ m feels necessary. With a squared response, a fourfold rise in output needs only a twofold rise in diameter.

Invert the recovered law:

$$2d^{2} = 200 \\quad \\Rightarrow \\quad d^{2} = 100 \\quad \\Rightarrow \\quad d = 10$$

An aperture of $12$ m would already overshoot the target:

$$R(12) = 2(144) = 288 > 200$$

The requirement is $10$ m, not something above $12$ m, so the statement is False.`,
      `**D.** → True

This claim replaces the observed scaling rule with a weaker one and asks what exponent it implies. The multiplier becomes $1.6$ instead of $2.25$, and solving for the exponent gives about $1.159$, which is below $1.2$.

Because $1.6$ is not a neat power of $1.5$, the exponent cannot be read off by inspection as in part A; logarithms are the only way to isolate it. Note that both logarithms are of numbers above $1$, so the quotient is positive and the response is still increasing, just far less convex.

Take logarithms of the counterfactual scaling rule:

$$1.5^{r'} = 1.6 \\quad \\Rightarrow \\quad r' \\ln 1.5 = \\ln 1.6$$

$$r' = \\frac{\\ln 1.6}{\\ln 1.5} \\approx \\frac{0.4700}{0.4055} \\approx 1.1592$$

A quick sanity check confirms the size:

$$1.5^{1.2} \\approx 1.6266 > 1.6$$

Since $1.5^{1.2}$ already overshoots the target multiplier, the true exponent is below $1.2$, so the statement is True.`,
      `**E.** → False

This claim carries the counterfactual exponent through to a level. With $r'\\approx1.1592$ and the bench reading held at $50$, the $10$ m aperture would deliver about $111.6$, short of $120$.

A common mistake is to reuse the doubling factor of $4$ from part B, or to assume that an exponent "a bit above $1$" still produces something close to it. Doubling now multiplies output by $2^{1.1592}\\approx2.23$, barely more than proportional growth, which is precisely what the weaker rule was describing.

Work with the ratio so the coefficient never has to be recomputed:

$$\\frac{R(10)}{R(5)} = 2^{r'} = 2^{1.1592}$$

$$2^{1.1592} = e^{1.1592 \\times 0.6931} \\approx e^{0.8034} \\approx 2.2331$$

Apply that factor to the bench reading:

$$R(10) \\approx 50 \\times 2.2331 \\approx 111.7 < 120$$

The weaker rule leaves the $10$ m aperture below $120$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 2,
    solution_overview: `Resolving power follows $R(d)=Ad^{r}$ for aperture $d>0$. Widening any aperture by $50\\%$ raises resolving power by $125\\%$, and the $5$ m bench test recorded $R=50$.

**Part 1: Building the model.**

Let $d$ = aperture diameter in metres and $R(d)$ = resolving power. Two unknowns, $A$ and $r$, need two independent facts; the percentage rule carries the exponent and the bench test carries the level.

**1. Translate: the percentage rule.** A $50\\%$ wider aperture means $1.5d$, and a $125\\%$ higher output means $2.25$ times as much:

$$\\frac{R(1.5d)}{R(d)} = 1.5^{r} = 2.25$$

**2. Translate: the bench test.** One measured point pins the coefficient once $r$ is known:

$$A \\cdot 5^{r} = 50$$

**Part 2: The model.**

$$1.5^{r} = 2.25 \\tag{1}$$

$$25A = 50 \\tag{2}$$

**Part 3: Solve.**

**1.** Because $2.25 = 1.5^{2}$, equation (1) resolves without logarithms:

$$r = 2$$

**2.** Equation (2) then gives the coefficient and the full law:

$$A = \\frac{50}{25} = 2 \\qquad \\Rightarrow \\qquad R(d) = 2d^{2}$$

**3.** Levels and inversions follow directly:

$$R(10) = 200, \\qquad R(12) = 288, \\qquad R = 200 \\;\\Rightarrow\\; d = 10$$

**4.** The counterfactual rule replaces the multiplier $2.25$ by $1.6$, which needs logarithms:

$$r' = \\frac{\\ln 1.6}{\\ln 1.5} \\approx 1.1592$$

**5.** Holding the bench reading fixed, doubling the aperture under the weaker rule gives:

$$R(10) \\approx 50 \\times 2^{1.1592} \\approx 111.7$$

**Answer.** $r = 2$ | $A = 2$ | $R(d) = 2d^{2}$ | counterfactual exponent $r' \\approx 1.159$`,
  },
  {
    id: `math-8-3`,
    case_id: `MATH 8.03`,
    title: `Two Turbines with Different Wind Exponents`,
    context: `Two turbines report output as power functions of wind speed $w>0$ in metres per second. For turbine A, doubling the wind speed multiplies output by $2\\sqrt{2}$, and at $w=4$ the turbine delivers $32$ kW. Turbine B's output is proportional to the square of wind speed, and at $w=10$ it delivers $100$ kW. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $w=4$ the two turbines together deliver more than $45$ kW.`,
      `Turbine A's exponent is larger than turbine B's.`,
      `The two turbines deliver equal output at $w=16$.`,
      `At every wind speed above that crossover, turbine B out-produces turbine A.`,
      `Halving turbine A's coefficient would move the crossover below $5$ m/s.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim needs both laws in explicit form before anything can be added. Turbine A's doubling rule and its anchor give $P_A(w)=4w^{1.5}$, turbine B's proportionality and its anchor give $P_B(w)=w^{2}$, and at $w=4$ the two deliver $32$ kW and $16$ kW, a total of $48$ kW.

The anchor for turbine B sits at $w=10$, far from the $w=4$ being asked about, so its output has to be transported down to $w=4$ through the model rather than read off the report. The quadratic shape means that moving from $10$ to $4$ divides output by more than six.

Recover turbine A from its doubling rule and anchor:

$$2^{r_A} = 2\\sqrt{2} = 2^{1.5} \\quad \\Rightarrow \\quad r_A = 1.5$$

$$c \\cdot 4^{1.5} = 32 \\quad \\Rightarrow \\quad 8c = 32 \\quad \\Rightarrow \\quad c = 4$$

Recover turbine B from its proportionality and anchor:

$$k \\cdot 10^{2} = 100 \\quad \\Rightarrow \\quad k = 1 \\quad \\Rightarrow \\quad P_B(w) = w^{2}$$

Add the two outputs at the requested speed:

$$P_A(4) + P_B(4) = 4(8) + 16 = 32 + 16 = 48 > 45$$

The combined output clears $45$ kW, so the statement is True.`,
      `**B.** → False

This claim compares exponents, not outputs. Turbine A carries the exponent $1.5$ and turbine B carries $2$, so A's exponent is the smaller of the two.

The confusion is natural because turbine A looks stronger everywhere in the low-wind data: its coefficient is $4$ against B's $1$, and at $w=4$ it delivers twice B's output. Coefficients set the level, exponents set how fast output responds to wind, and here the machine with the larger level has the flatter response.

Compare the two scaling rules side by side:

$$\\frac{P_A(2w)}{P_A(w)} = 2^{1.5} \\approx 2.83, \\qquad \\frac{P_B(2w)}{P_B(w)} = 2^{2} = 4$$

Each doubling of wind speed rewards turbine B more than turbine A:

$$1.5 < 2$$

Turbine A's exponent is smaller, so the statement is False.`,
      `**C.** → True

This claim asks for the crossover of the two laws. Setting $4w^{1.5}=w^{2}$ and dividing by $w^{1.5}$ leaves $w^{0.5}=4$, so the outputs coincide at $w=16$, where both deliver $256$ kW.

Only one positive crossover exists. Once the shared factor $w^{1.5}$ is cancelled, the equation becomes a single condition on $w^{0.5}$, so there is nothing else to find; the apparent second solution $w=0$ falls outside the domain $w>0$.

Set the two outputs equal and cancel the common power:

$$4w^{1.5} = w^{2} \\quad \\Rightarrow \\quad 4 = w^{0.5}$$

$$w = 4^{2} = 16$$

Verify the shared level:

$$P_A(16) = 4(16^{1.5}) = 4(64) = 256, \\qquad P_B(16) = 16^{2} = 256$$

Both turbines deliver $256$ kW at $w=16$, so the statement is True.`,
      `**D.** → True

This claim is about behaviour on a whole interval, not at a point, so a single test value would not settle it. The ratio $P_B/P_A = w^{0.5}/4$ increases with wind speed and equals $1$ at $w=16$, so it exceeds $1$ for every $w>16$.

Checking one convenient speed such as $w=25$ is a useful sanity test but proves nothing about the rest of the interval; what closes the argument is that the ratio is strictly increasing, so once it passes $1$ it can never come back.

Form the ratio of the two laws:

$$\\frac{P_B(w)}{P_A(w)} = \\frac{w^{2}}{4w^{1.5}} = \\frac{w^{0.5}}{4}$$

The ratio is increasing in $w$ and crosses $1$ exactly at the crossover:

$$\\frac{w^{0.5}}{4} > 1 \\quad \\Longleftrightarrow \\quad w^{0.5} > 4 \\quad \\Longleftrightarrow \\quad w > 16$$

Spot-check beyond the crossover:

$$P_A(25) = 4(125) = 500, \\qquad P_B(25) = 625$$

Turbine B leads at every speed above $16$ m/s, so the statement is True.`,
      `**E.** → True

This claim asks how sensitive the crossover is to turbine A's coefficient. Replacing $4$ by $2$ moves the crossover from $16$ m/s down to $4$ m/s, which is below the $5$ m/s threshold.

The size of the shift is the surprising part: halving the coefficient does not halve the crossover speed. Because the condition reduces to $w^{0.5}=c$, the crossover is the *square* of the coefficient, so cutting $c$ in half divides the crossover speed by four.

Redo the crossover condition with the reduced coefficient:

$$2w^{1.5} = w^{2} \\quad \\Rightarrow \\quad w^{0.5} = 2 \\quad \\Rightarrow \\quad w = 4$$

The general pattern behind both crossovers:

$$cw^{1.5} = w^{2} \\quad \\Rightarrow \\quad w = c^{2}, \\qquad c = 4 \\;\\Rightarrow\\; 16, \\quad c = 2 \\;\\Rightarrow\\; 4$$

The new crossover of $4$ m/s is below $5$ m/s, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 3,
    solution_overview: `Turbine A doubles-up by a factor $2\\sqrt{2}$ and delivers $32$ kW at $w=4$. Turbine B is proportional to $w^{2}$ and delivers $100$ kW at $w=10$.

**Part 1: Building the model.**

Let $w$ = wind speed in m/s, $P_A(w)=cw^{r_A}$ and $P_B(w)=kw^{2}$ = outputs in kW. Each turbine supplies one scaling fact and one measured point, which is exactly enough to pin both constants.

**1. Translate: turbine A's doubling rule.** The factor $2\\sqrt{2}$ is a power of $2$, so the exponent falls out:

$$2^{r_A} = 2\\sqrt{2} = 2^{1.5} \\quad \\Rightarrow \\quad r_A = 1.5$$

**2. Translate: the two anchors.** Each measured point fixes one coefficient:

$$c \\cdot 4^{1.5} = 32, \\qquad k \\cdot 10^{2} = 100$$

**Part 2: The model.**

$$P_A(w) = 4w^{1.5} \\tag{1}$$

$$P_B(w) = w^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** Evaluate both laws at the low-wind point:

$$P_A(4) = 32, \\qquad P_B(4) = 16, \\qquad \\text{total } 48 \\text{ kW}$$

**2.** Compare responsiveness through the exponents rather than the levels:

$$r_A = 1.5 < 2 = r_B$$

**3.** Locate the crossover by cancelling the shared power:

$$4w^{1.5} = w^{2} \\;\\Rightarrow\\; w^{0.5} = 4 \\;\\Rightarrow\\; w = 16, \\qquad P_A(16) = P_B(16) = 256$$

**4.** Decide the ordering on each side of the crossover with the ratio:

$$\\frac{P_B(w)}{P_A(w)} = \\frac{w^{0.5}}{4}$$

The ratio is below $1$ for $w<16$ and above $1$ for $w>16$, so A leads before the crossover and B leads after it.

**5.** The general crossover rule shows how the coefficient controls the switch point:

$$cw^{1.5} = w^{2} \\;\\Rightarrow\\; w = c^{2}$$

Halving $c$ from $4$ to $2$ therefore drops the crossover from $16$ m/s to $4$ m/s.

**Answer.** $P_A(w) = 4w^{1.5}$ | $P_B(w) = w^{2}$ | crossover $w = 16$ m/s at $256$ kW`,
  },
  {
    id: `math-8-4`,
    case_id: `MATH 8.04`,
    title: `Assembly Time, Derived Throughput, and a Manual Rival`,
    context: `Assembling $N$ units on a mechanized line takes $T(N)=A N^{r}$ minutes. Quadrupling the batch multiplies assembly time by $16$, and a batch of $5$ units takes $100$ minutes. Management tracks average throughput $R=N/T$ in units per minute, expressed as a function of the elapsed time $T$. A manual rival sustains a constant $0.05$ units per minute whatever the batch size. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent of the assembly-time law is $r=2$.`,
      `Average throughput as a function of elapsed time is $R(T)=0.5\\,T^{-0.5}$.`,
      `Mechanized throughput matches the rival's rate at $T=100$ minutes.`,
      `Beyond that elapsed time the mechanized line keeps a higher average throughput than the rival.`,
      `Against a rival sustaining $0.2$ units per minute, the match would occur before $10$ minutes.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the exponent, and the quadrupling rule is the fact that carries it. Since scale factors are free of the coefficient, $4^{r}=16$ settles the exponent on its own, giving $r=2$.

The anchor $T(5)=100$ looks like it should also be involved, but it cannot pin an exponent by itself: a single point is consistent with infinitely many pairs $(A,r)$. Its role comes next, once $r$ is known.

Write the quadrupling rule as a ratio so $A$ drops out:

$$\\frac{T(4N)}{T(N)} = \\frac{A(4N)^{r}}{AN^{r}} = 4^{r}$$

Match it to the observed factor:

$$4^{r} = 16 = 4^{2} \\quad \\Rightarrow \\quad r = 2$$

Assembly time grows with the square of the batch, so the statement is True.`,
      `**B.** → True

This claim asks for a derived law rather than a given one: throughput must be re-expressed with elapsed time as the variable. Inverting $T=4N^{2}$ and dividing by $T$ produces exactly $R(T)=0.5T^{-0.5}$.

The step that is easy to botch is the direction of the substitution. Throughput is naturally written as $N/T$, but management wants it as a function of $T$ alone, so $N$ has to be replaced by its expression in $T$ — not the other way round.

Fix the coefficient with the anchor, then invert:

$$A \\cdot 5^{2} = 100 \\quad \\Rightarrow \\quad 25A = 100 \\quad \\Rightarrow \\quad A = 4, \\qquad T = 4N^{2}$$

$$N^{2} = \\frac{T}{4} \\quad \\Rightarrow \\quad N = \\frac{T^{0.5}}{2} = 0.5\\,T^{0.5}$$

Divide by elapsed time to get average throughput:

$$R(T) = \\frac{N}{T} = \\frac{0.5\\,T^{0.5}}{T} = 0.5\\,T^{-0.5}$$

The derived law matches the claim, so it is true.`,
      `**C.** → True

This claim locates the elapsed time at which the mechanized average throughput equals the rival's fixed $0.05$ units per minute. Solving $0.5T^{-0.5}=0.05$ gives $T^{0.5}=10$, so the match happens at $T=100$ minutes.

The result lands exactly on the anchor batch, which is a useful cross-check rather than a coincidence: the $5$-unit batch takes $100$ minutes, an average of $5/100 = 0.05$ units per minute, precisely the rival's pace.

Set the derived throughput equal to the rival's rate:

$$0.5\\,T^{-0.5} = 0.05 \\quad \\Rightarrow \\quad T^{-0.5} = 0.1$$

$$T^{0.5} = 10 \\quad \\Rightarrow \\quad T = 100$$

Confirm through the anchor batch:

$$N = 0.5\\sqrt{100} = 5, \\qquad \\frac{N}{T} = \\frac{5}{100} = 0.05$$

The crossover sits at $100$ minutes, so the statement is True.`,
      `**D.** → False

This claim gets the direction of the comparison backwards. The exponent in $R(T)=0.5T^{-0.5}$ is negative, so average throughput *falls* as batches get longer; past $100$ minutes the mechanized line drops below the rival's steady $0.05$ units per minute.

The intuition being appealed to is that bigger batches mean more units and therefore more productivity. That is true of total output but not of the average rate: because time grows with the square of the batch, each extra unit costs more time than the last, and the average per minute decays.

Read the sign of the exponent:

$$R(T) = 0.5\\,T^{-0.5}, \\qquad -0.5 < 0 \\;\\Rightarrow\\; R \\text{ decreasing in } T$$

Test a longer run beyond the crossover:

$$R(400) = 0.5(400)^{-0.5} = \\frac{0.5}{20} = 0.025 < 0.05$$

At $400$ minutes the mechanized line averages half the rival's pace, so the statement is False.`,
      `**E.** → True

This claim reruns the crossover with a faster rival. A rate of $0.2$ units per minute is met at $T=6.25$ minutes, which is indeed before the $10$-minute mark.

Note how sharply the crossover moves: the rival's rate is multiplied by $4$, and the crossover time is divided by $16$. That is the negative-half exponent at work — inverting $R=0.5T^{-0.5}$ gives $T=(0.5/R)^{2}$, so the crossover responds to the *square* of the rate change.

Set the derived throughput equal to the faster rate:

$$0.5\\,T^{-0.5} = 0.2 \\quad \\Rightarrow \\quad T^{0.5} = \\frac{0.5}{0.2} = 2.5$$

$$T = 2.5^{2} = 6.25$$

Compare the two crossovers through the general inverse:

$$T = \\left(\\frac{0.5}{R}\\right)^{2}, \\qquad R = 0.05 \\;\\Rightarrow\\; 100, \\quad R = 0.2 \\;\\Rightarrow\\; 6.25$$

The faster rival is matched after only $6.25$ minutes, which is before $10$, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 4,
    solution_overview: `Assembly time follows $T(N)=AN^{r}$. Quadrupling the batch multiplies time by $16$, and $T(5)=100$ minutes. Average throughput $R=N/T$ is tracked against elapsed time, and a manual rival holds $0.05$ units per minute.

**Part 1: Building the model.**

Let $N$ = batch size in units, $T$ = assembly time in minutes, $R$ = average throughput in units per minute. The scaling fact carries the exponent, the anchor carries the coefficient, and throughput is a derived quantity built from both.

**1. Translate: the quadrupling rule.** Scale factors are independent of $A$:

$$\\frac{T(4N)}{T(N)} = 4^{r} = 16$$

**2. Translate: the anchor batch.** One measured pair fixes the coefficient:

$$A \\cdot 5^{r} = 100$$

**Part 2: The model.**

$$4^{r} = 16 \\tag{1}$$

$$25A = 100 \\tag{2}$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the time law:

$$r = 2, \\qquad A = 4, \\qquad T(N) = 4N^{2}$$

**2.** Invert the time law so batch size is expressed through elapsed time:

$$N = \\frac{T^{0.5}}{2}$$

**3.** Divide by elapsed time to obtain average throughput as a power function with a negative exponent:

$$R(T) = \\frac{N}{T} = 0.5\\,T^{-0.5}$$

**4.** Invert once more to turn any target rate into a crossover time:

$$T = \\left(\\frac{0.5}{R}\\right)^{2}$$

$$R = 0.05 \\;\\Rightarrow\\; T = 100, \\qquad R = 0.2 \\;\\Rightarrow\\; T = 6.25$$

**5.** The negative exponent fixes the ordering: $R$ decreases in $T$, so the mechanized line beats a constant-rate rival only *before* the crossover time and falls behind after it. At $T=400$ the average is $0.025$ units per minute, half the slow rival's pace.

**Answer.** $T(N) = 4N^{2}$ | $R(T) = 0.5\\,T^{-0.5}$ | crossovers at $T = 100$ min and $T = 6.25$ min`,
  },
  {
    id: `math-8-5`,
    case_id: `MATH 8.05`,
    title: `Ore-to-Alloy Chain Against a Linear Competitor`,
    context: `Ore of purity $u>0$ yields metal according to $M(u)=c\\,u^{1.5}$. An audit records that lifting purity from $9$ to $16$ raised metal output by $296$ units. Metal is then converted into alloy strength by $S(M)=M^{2/3}/2$. A competing supplier quotes strength directly as $S_{\\mathrm{comp}}(u)=1.8u+5$, which is linear rather than a power function. Purity is only meaningful up to $u=50$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the metal-yield law is $c=8$.`,
      `Strength as a function of purity is a power function with exponent exactly $1$.`,
      `At purity $u=10$ the chain delivers more strength than the competitor.`,
      `The two suppliers deliver equal strength at a purity below $30$.`,
      `From that purity up to $u=50$ the chain stays strictly ahead of the competitor.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient of the first link in the chain. The audit reports a change in output between two purities rather than an output level, and unpacking that change gives $c=8$.

Both purities are perfect squares, so their $1.5$ powers are exact: $9^{1.5}=27$ and $16^{1.5}=64$. The trap is to divide $296$ by $16^{1.5}$ alone, which treats the audit note as if it recorded the output at the higher purity instead of the gain between the two.

Evaluate the two shape factors:

$$9^{1.5} = (3^{2})^{3/2} = 3^{3} = 27, \\qquad 16^{1.5} = (4^{2})^{3/2} = 4^{3} = 64$$

The audit's gain is the difference of the two outputs:

$$c(64) - c(27) = 296 \\quad \\Rightarrow \\quad 37c = 296 \\quad \\Rightarrow \\quad c = 8$$

The metal law is $M(u)=8u^{1.5}$, matching the claim.`,
      `**B.** → True

This claim is about the composition of the two links. Substituting $M(u)=8u^{1.5}$ into $S(M)=M^{2/3}/2$ multiplies the exponents, $1.5\\times\\tfrac{2}{3}=1$, so strength is proportional to purity: $S(u)=2u$.

Exponent $1$ makes the composed law linear, but that does not make the chain equivalent to the competitor's quote: the competitor's line carries an intercept of $5$, while the chain passes through the origin. It is that structural difference, not the slopes alone, that produces the single crossover in parts D and E.

Compose the two stages:

$$S(u) = \\frac{\\left(8u^{1.5}\\right)^{2/3}}{2} = \\frac{8^{2/3}\\,u^{1.5 \\times 2/3}}{2}$$

Simplify the constant and the exponent separately:

$$8^{2/3} = 4, \\qquad 1.5 \\times \\frac{2}{3} = 1$$

$$S(u) = \\frac{4u}{2} = 2u$$

The composed exponent is exactly $1$, so the statement is True.`,
      `**C.** → False

This claim compares the two offers at a single low purity. The chain gives $S(10)=20$ while the competitor gives $23$, so the chain is behind by three units at that purity.

Low purities are where the competitor's intercept dominates. Its $+5$ head start outweighs the chain's slope advantage, and only after enough purity has accumulated does the steeper slope overturn it — which is why testing one point cannot decide the general comparison in parts D and E.

Evaluate both offers at $u=10$:

$$S(10) = 2(10) = 20$$

$$S_{\\mathrm{comp}}(10) = 1.8(10) + 5 = 18 + 5 = 23$$

Compare:

$$20 < 23$$

The chain trails the competitor at $u=10$, so the statement is False.`,
      `**D.** → True

This claim asks for the crossover between the composed chain and the linear quote. Setting $2u = 1.8u + 5$ gives $u=25$, which lies inside the meaningful range and below $30$.

Two straight lines with different slopes meet exactly once, so there is a single crossover to find, and the domain cap $u\\le50$ matters only because it decides whether that crossover is reachable. Here $25$ sits comfortably inside the cap.

Set the two strength offers equal:

$$2u = 1.8u + 5$$

$$0.2u = 5 \\quad \\Rightarrow \\quad u = 25$$

Check the common level and the domain:

$$S(25) = 50, \\qquad S_{\\mathrm{comp}}(25) = 1.8(25) + 5 = 50, \\qquad 25 \\le 50$$

The offers coincide at purity $25$, which is below $30$, so the statement is True.`,
      `**E.** → True

This claim covers the whole interval from the crossover to the purity cap, so it needs an argument about the gap, not just one test value. The gap $S(u)-S_{\\mathrm{comp}}(u)=0.2u-5$ is increasing and positive for every $u>25$, so the chain leads all the way to $u=50$.

The reason the lead can never be lost is that the composed chain has the steeper slope, $2$ against $1.8$. Once the accumulated slope advantage has paid off the competitor's intercept, the difference keeps widening rather than closing.

Write the gap between the two offers:

$$S(u) - S_{\\mathrm{comp}}(u) = 2u - (1.8u + 5) = 0.2u - 5$$

The gap is strictly increasing and changes sign only at the crossover:

$$0.2u - 5 > 0 \\quad \\Longleftrightarrow \\quad u > 25$$

Evaluate at the cap to see the size of the final lead:

$$S(50) = 100, \\qquad S_{\\mathrm{comp}}(50) = 95, \\qquad \\text{gap} = 5$$

The chain leads at every purity between $25$ and $50$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 5,
    solution_overview: `Metal yield is $M(u)=cu^{1.5}$, with an audited gain of $296$ units when purity rises from $9$ to $16$. Alloy strength is $S(M)=M^{2/3}/2$, the competitor quotes $S_{\\mathrm{comp}}(u)=1.8u+5$, and purity is capped at $u=50$.

**Part 1: Building the model.**

Let $u$ = ore purity, $M(u)$ = metal output, $S$ = alloy strength. The chain has two stages, so the coefficient of the first stage must be recovered before the two stages can be composed and compared with the competitor's line.

**1. Translate: the audited gain.** The audit reports a difference between two outputs:

$$c\\left(16^{1.5}\\right) - c\\left(9^{1.5}\\right) = 296$$

**2. Translate: the composition.** Strength is the second stage applied to the first:

$$S(u) = \\frac{\\left(c\\,u^{1.5}\\right)^{2/3}}{2}$$

**Part 2: The model.**

$$37c = 296 \\tag{1}$$

$$S(u) = \\frac{\\left(c\\,u^{1.5}\\right)^{2/3}}{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The exact shape factors $9^{1.5}=27$ and $16^{1.5}=64$ turn (1) into a one-step solve:

$$c = \\frac{296}{37} = 8 \\qquad \\Rightarrow \\qquad M(u) = 8u^{1.5}$$

**2.** Composing multiplies the exponents and collapses the constants:

$$8^{2/3} = 4, \\qquad 1.5 \\times \\frac{2}{3} = 1 \\qquad \\Rightarrow \\qquad S(u) = 2u$$

**3.** Compare the two offers at a low purity, where the competitor's intercept still rules:

$$S(10) = 20 < 23 = S_{\\mathrm{comp}}(10)$$

**4.** Locate the crossover:

$$2u = 1.8u + 5 \\;\\Rightarrow\\; 0.2u = 5 \\;\\Rightarrow\\; u = 25, \\qquad S(25) = S_{\\mathrm{comp}}(25) = 50$$

**5.** Settle the ordering on the whole range with the gap function:

$$S(u) - S_{\\mathrm{comp}}(u) = 0.2u - 5$$

The gap is negative below $u=25$ and positive above it, reaching $5$ units at the cap $u=50$, so the competitor leads on $(0,25)$ and the chain leads on $(25,50]$.

**Answer.** $c = 8$ | $M(u) = 8u^{1.5}$ | $S(u) = 2u$ | crossover at $u = 25$ with strength $50$`,
  },
  {
    id: `math-8-6`,
    case_id: `MATH 8.06`,
    title: `Server Peak Load Between a Doubling Rule and an Alarm`,
    context: `A monitoring team models a server's peak load as $L(x)=A x^{r}$, where $x>0$ is the number of simultaneous jobs. Stress tests show that doubling the job count multiplies peak load by $4$, and a run with $30$ simultaneous jobs recorded a peak load of $180$. The hardware alarm trips at a peak load of $500$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Tripling the job count multiplies peak load by $6$.`,
      `The alarm trips at a job count above $55$.`,
      `Increasing the job count from $30$ to $42$ raises peak load by less than $90\\%$.`,
      `Increasing the job count from $30$ to $33$ raises peak load by exactly $21\\%$.`,
      `Halving the job count halves peak load.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

This claim applies a scale factor, so only the exponent matters. The doubling test fixes $r=2$, and tripling then multiplies peak load by $3^{2}=9$, not by $6$.

The figure $6$ comes from treating the scale factor as proportional to the multiplier: doubling gave $4$, so tripling "should" give $1.5$ times as much, or $6$. Scale factors of a power function are powers of the multiplier, not multiples of it.

Recover the exponent from the doubling test, where the coefficient cancels:

$$\\frac{L(2x)}{L(x)} = \\frac{A(2x)^{r}}{Ax^{r}} = 2^{r} = 4 \\quad \\Rightarrow \\quad r = 2$$

Apply the same identity to a tripling:

$$\\frac{L(3x)}{L(x)} = 3^{2} = 9$$

The true factor is $9$, so the statement is False.`,
      `**B.** → False

This claim asks where the model reaches the alarm level of $500$, which needs both constants. With $r=2$ the recorded run gives $A=0.2$, and solving $0.2x^{2}=500$ puts the alarm exactly at $50$ jobs, below the threshold in the claim.

The margin looks generous from the recorded run — $180$ against an alarm at $500$ — and it is tempting to assume the alarm is far away. Because load grows with the square of the job count, the remaining headroom is used up by only $20$ more jobs.

Fix the coefficient from the recorded run:

$$A(30)^{2} = 180 \\quad \\Rightarrow \\quad 900A = 180 \\quad \\Rightarrow \\quad A = 0.2$$

Solve the alarm condition:

$$0.2x^{2} = 500 \\quad \\Rightarrow \\quad x^{2} = 2500 \\quad \\Rightarrow \\quad x = 50$$

The alarm trips at $50$ jobs, not above $55$, so the statement is False.`,
      `**C.** → False

The move from 30 to 42 jobs is a finite $40\\%$ increase, and the square law amplifies it. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{L(42)}{L(30)}=\\left(\\frac{42}{30}\\right)^2=1.4^2=1.96$$

The relevant comparison can then be written as

$$\\frac{L(42)-L(30)}{L(30)}=1.96-1=0.96=96\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Peak load rises by $96\\%$, which is not less than $90\\%$. Therefore the statement is False.`,
      `**D.** → True

The move from 30 to 33 jobs is a finite $10\\%$ increase, so the exact square-law response is required. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{L(33)}{L(30)}=\\left(\\frac{33}{30}\\right)^2=1.1^2=1.21$$

The relevant comparison can then be written as

$$\\frac{L(33)-L(30)}{L(30)}=1.21-1=0.21=21\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The exact increase is $21\\%$. Therefore the statement is True.`,
      `**E.** → False

This claim assumes proportional behaviour. With exponent $2$, halving the job count multiplies peak load by $(1/2)^{2}=1/4$, so load falls to a quarter rather than a half.

The mistake matters in the direction that hurts capacity planning: a team expecting a halving would assume that dropping from $50$ jobs to $25$ leaves $250$ of load, when the model puts it at $125$. Overestimating residual load is safe; the same reasoning applied upwards would badly underestimate a spike.

Apply the scale-factor identity with multiplier $1/2$:

$$\\frac{L(x/2)}{L(x)} = \\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}$$

Check numerically at the alarm point:

$$L(50) = 0.2(2500) = 500, \\qquad L(25) = 0.2(625) = 125$$

Load falls to a quarter, not a half, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 6,
    solution_overview: `Peak load follows $L(x)=Ax^{r}$ for $x$ simultaneous jobs. Doubling the job count multiplies load by $4$, a $30$-job run peaked at $180$, and the alarm trips at $500$.

**Part 1: Building the model.**

Let $x$ = simultaneous jobs and $L(x)$ = peak load. Two unknowns need two facts: the stress test carries the exponent because scale factors are free of $A$, and the recorded run carries the level.

**1. Translate: the doubling test.** The observed factor is a power of the multiplier:

$$\\frac{L(2x)}{L(x)} = 2^{r} = 4$$

**2. Translate: the recorded run.** One measured point fixes the coefficient:

$$A(30)^{2} = 180$$

**Part 2: The model.**

$$2^{r} = 4 \\tag{1}$$

$$900A = 180 \\tag{2}$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the law:

$$r = 2, \\qquad A = 0.2, \\qquad L(x) = 0.2x^{2}$$

**2.** Scale factors follow from the exponent alone:

$$3^{2} = 9, \\qquad \\left(\\tfrac{1}{2}\\right)^{2} = \\tfrac{1}{4}$$

**3.** Invert the law at the alarm level:

$$0.2x^{2} = 500 \\;\\Rightarrow\\; x^{2} = 2500 \\;\\Rightarrow\\; x = 50$$

**4.** Place the recorded run against the alarm:

$$\\frac{180}{500} = 36\\%, \\qquad \\frac{30}{50} = 60\\% \\text{ of the trip job count}$$

**5.** The elasticity is the exponent, constant at every job count:

$$\\text{El}_{x}L = 2$$

**Answer.** $r = 2$ | $A = 0.2$ | $L(x) = 0.2x^{2}$ | alarm at $x = 50$ jobs`,
  },
  {
    id: `math-8-7`,
    case_id: `MATH 8.07`,
    title: `Survey Reach Against a Fieldwork Budget Cap`,
    context: `Usable survey responses follow $Q(x)=A x^{0.5}$, where $x>0$ measures outreach intensity. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The fieldwork budget caps outreach intensity at $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The response law is $Q(x)=12\\sqrt{x}$.`,
      `The budget cap allows at most $240$ usable responses.`,
      `A target of $180$ usable responses requires intensity $225$, so it is affordable.`,
      `Multiplying intensity by $2.25$ multiplies usable responses by $1.5$.`,
      `Raising intensity from $64$ to $81$ raises usable responses by $12.5\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient, but neither observation gives a response level. The recorded *difference* must be applied to the model at both intensities. Since the square-root factors are $5$ and $10$, their difference isolates five copies of $A$.

A common mistake is to write $A\\sqrt{100}=60$. The $60$ is an increase, not the response at $100$, so both endpoints are required.

$$Q(100)-Q(25)=A(10-5)=60$$

$$5A=60 \\quad \\Rightarrow \\quad A=12, \\qquad Q(x)=12\\sqrt{x}$$

The recovered law is exactly $Q(x)=12\\sqrt{x}$, so the statement is True.`,
      `**B.** → True

This claim asks for a response ceiling under an intensity ceiling. From the difference calibration, $Q(x)=12\\sqrt{x}$. Because the exponent $0.5$ is positive, responses increase with intensity, so the largest feasible response occurs at the cap itself.

A common mistake is to treat $400$ as a response budget or to multiply it by $12$. The power-function input must first pass through the square root.

$$0<x\\le 400, \\qquad Q(x)=12x^{0.5}$$

$$Q(400)=12\\sqrt{400}=12(20)=240$$

No smaller affordable intensity can produce more than the endpoint value. The budget therefore allows at most $240$ usable responses, so the statement is True.`,
      `**C.** → True

This claim asks to invert the response law and then compare the required intensity with the budget. The calibrated model is $Q(x)=12\\sqrt{x}$, so setting the target to $180$ first determines the square root of intensity and then intensity itself.

A common mistake is to stop at $\\sqrt{x}=15$ and report $15$ as the required intensity. Inverting a square-root law requires a final squaring step.

$$12\\sqrt{x}=180 \\quad \\Rightarrow \\quad \\sqrt{x}=15$$

$$x=15^2=225, qquad 225\\le 400$$

The target requires intensity $225$, which lies within the cap. Both parts of the statement match the model, so the statement is True.`,
      `**D.** → True

This claim asks for a scale effect rather than a level. For a power function with exponent $0.5$, multiplying the input by $k$ multiplies the output by $k^{0.5}$. Here the non-integer factor $2.25$ is $(1.5)^2$.

A common mistake is to multiply responses by $2.25$ as though the law were linear. The coefficient cancels in the ratio, but the exponent does not.

$$\\frac{Q(2.25x)}{Q(x)} =\\frac{12(2.25x)^{0.5}}{12x^{0.5}} =(2.25)^{0.5}$$

$$(2.25)^{0.5}=\\sqrt{\\frac{9}{4}}=\\frac{3}{2}=1.5$$

Thus a $2.25$-fold intensity change produces a $1.5$-fold response change, so the statement is True.`,
      `**E.** → True

This claim asks for the finite percentage change between two specific intensities. The calibrated law gives $Q(64)=12(8)$ and $Q(81)=12(9)$. The increase must be divided by the initial response, not by the final response or by the intensity change.

A common mistake is to use the relative intensity increase, $17/64\\approx26.6\\%$, as the response increase. The square root compresses that move.

$$Q(64)=96, \\qquad Q(81)=108$$

$$\\frac{Q(81)-Q(64)}{Q(64)} =\\frac{108-96}{96} =\\frac{1}{8}=12.5\\%$$

The finite response increase is exactly $12.5\\%$, so the statement matches the model and is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `Responses follow $Q(x)=Ax^{0.5}$, calibrated by a $60$-response increase from intensity $25$ to $100$, with $x\\le400$.

**Part 1:** Translate the difference rather than treating it as a level:

$$A(\\sqrt{100}-\\sqrt{25})=60$$

**Part 2:** Recover the model and its inverse:

$$A=12, \\qquad Q(x)=12\\sqrt{x}, \\qquad x=\\left(\\frac{Q}{12}\\right)^2$$

**Part 3:** Apply the cap, scale factors, and finite changes:

$$Q(400)=240, \\quad Q=180\\Rightarrow x=225, \\quad (2.25)^{0.5}=1.5, \\quad \\frac{108-96}{96}=12.5\\%$$

**Answer.** $A=12$ | ceiling $240$ responses | $180$ responses require intensity $225$`,
  },
  {
    id: `math-8-8`,
    case_id: `MATH 8.08`,
    title: `Quadratic and Linear Inspection Costs That Meet Once`,
    context: `Two inspection procedures are costed for a batch of $n>0$ documents. The automated procedure costs $C(n)=a n^{2}$ and the manual procedure costs $D(n)=b n$. Records show that on a batch of $20$ documents the two procedures cost the same, $400$ each. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The automated procedure is cheaper than the manual one at every batch below $20$ documents.`,
      `At $n=25$ the two procedures differ by less than $100$.`,
      `For $n>0$ the two procedures cost the same only at $n=20$.`,
      `Doubling the batch doubles the gap between the two costs.`,
      `The automated procedure's cost per document is constant.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim covers an interval, so it needs an argument rather than a spot check. Both coefficients follow from the shared $400$ at $n=20$, giving $C(n)=n^{2}$ and $D(n)=20n$, and $n^{2}<20n$ holds for every $n$ between $0$ and $20$.

The comparison reduces to a single inequality once the common factor $n$ is divided out, which is legitimate because $n>0$. What remains, $n<20$, describes exactly the interval in the claim.

Recover both coefficients from the shared cost:

$$a(20)^{2} = 400 \\;\\Rightarrow\\; a = 1, \\qquad b(20) = 400 \\;\\Rightarrow\\; b = 20$$

Compare the two laws:

$$n^{2} < 20n \\quad \\Longleftrightarrow \\quad n < 20 \\qquad (n>0)$$

Spot-check inside the interval:

$$C(10) = 100 < 200 = D(10)$$

The automated procedure is cheaper on the whole interval, so the statement is True.`,
      `**B.** → False

This claim measures the gap just past the crossing point. At $n=25$ the automated procedure costs $625$ and the manual one $500$, a difference of $125$, which is more than $100$.

Being only five documents past the meeting point makes the gap feel small, but the gap is quadratic in disguise: it equals $n(n-20)$, so it grows with both the distance past $20$ and the batch size itself. Five documents past the crossing already produce a $125$ difference.

Evaluate both costs:

$$C(25) = 25^{2} = 625, \\qquad D(25) = 20(25) = 500$$

Take the difference and compare with the threshold:

$$625 - 500 = 125 > 100$$

The gap exceeds $100$, so the statement is False.`,
      `**C.** → True

This claim is about the number of crossings. Setting $n^{2}=20n$ and dividing by $n$ leaves $n=20$ as the only positive solution, so the two procedures agree exactly once.

The algebra hides a second root at $n=0$, which is why dividing by $n$ has to be justified: on the stated domain $n>0$ that root is excluded, and no other crossing exists. A parabola through the origin and a line through the origin can meet at most twice, and one of those meetings is the origin itself.

Set the two costs equal:

$$n^{2} = 20n \\quad \\Rightarrow \\quad n(n - 20) = 0$$

Discard the root outside the domain:

$$n = 0 \\text{ (excluded)}, \\qquad n = 20$$

Only $n=20$ survives, so the statement is True.`,
      `**D.** → False

This claim treats the gap as if it were proportional to batch size. The gap is $n^{2}-20n=n(n-20)$; doubling $n$ from $25$ to $50$ takes it from $125$ to $1500$, a twelvefold increase.

Each cost on its own has a clean scale factor — the automated cost quadruples, the manual cost doubles — but the *difference* of two power functions is not itself a power function, so it has no scale factor at all. That is the structural point being tested.

Write the gap:

$$C(n) - D(n) = n^{2} - 20n = n(n-20)$$

Evaluate it at two batches:

$$25(5) = 125, \\qquad 50(30) = 1500$$

$$\\frac{1500}{125} = 12$$

Doubling the batch multiplies the gap by twelve, not two, so the statement is False.`,
      `**E.** → False

This claim confuses the two procedures. Per-document cost is $C(n)/n=n$ for the automated route, which rises with every document added; it is the *manual* procedure that charges a constant $20$ per document.

Constant unit cost is the signature of an exponent of $1$. The automated law has exponent $2$, so dividing by $n$ leaves exponent $1$ — a unit cost that grows linearly and overtakes the manual rate at exactly the crossing point.

Divide each total by the batch size:

$$\\frac{C(n)}{n} = \\frac{n^{2}}{n} = n, \\qquad \\frac{D(n)}{n} = \\frac{20n}{n} = 20$$

Compare at two batches:

$$\\frac{C(10)}{10} = 10, \\qquad \\frac{C(30)}{30} = 30$$

The automated unit cost triples between those batches, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 8,
    solution_overview: `Two procedures cost $C(n)=an^{2}$ and $D(n)=bn$ for a batch of $n>0$ documents, and both cost $400$ on a batch of $20$.

**Part 1: Building the model.**

Let $n$ = documents in the batch, $C$ = automated cost, $D$ = manual cost. The single shared observation gives one equation for each coefficient, because it applies to both procedures at once.

**1. Translate: the automated cost at $n=20$.**

$$a(20)^{2} = 400$$

**2. Translate: the manual cost at $n=20$.**

$$b(20) = 400$$

**Part 2: The model.**

$$C(n) = n^{2} \\tag{1}$$

$$D(n) = 20n \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficients come straight out of the shared observation:

$$a = 1, \\qquad b = 20$$

**2.** Find every crossing on the stated domain:

$$n^{2} = 20n \\;\\Rightarrow\\; n(n-20) = 0 \\;\\Rightarrow\\; n = 20 \\quad (n = 0 \\text{ excluded})$$

**3.** Order the two procedures on each side of that single crossing:

$$n < 20 \\;\\Rightarrow\\; C < D, \\qquad n > 20 \\;\\Rightarrow\\; C > D$$

**4.** The gap is not a power function, and it grows far faster than the batch:

$$C(n) - D(n) = n(n-20), \\qquad 125 \\text{ at } n=25, \\qquad 1500 \\text{ at } n=50$$

**5.** Unit costs separate the two shapes cleanly:

$$\\frac{C(n)}{n} = n \\text{ (rising)}, \\qquad \\frac{D(n)}{n} = 20 \\text{ (constant)}$$

**Answer.** $C(n) = n^{2}$ | $D(n) = 20n$ | single crossing at $n = 20$ costing $400$`,
  },
  {
    id: `math-8-9`,
    case_id: `MATH 8.09`,
    title: `Warehouse Throughput With a Contractual Ceiling`,
    context: `Warehouse throughput follows $H(s)=A s^{0.6}$ pallets per hour, where $s>0$ is the number of staff on shift. A shift with $32$ staff moved $96$ pallets per hour. The service contract caps billed throughput at $300$ pallets per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the throughput law is $A=8$.`,
      `The model reaches $300$ pallets per hour at about $214$ staff.`,
      `Doubling the headcount raises throughput by between $55\\%$ and $60\\%$.`,
      `The contract ceiling is reached at about $250$ staff.`,
      `Throughput per staff member rises as headcount rises.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

This claim reports the wrong constant. Because $0.6=3/5$ and $32=2^{5}$, the shape factor at the recorded shift is $32^{0.6}=2^{3}=8$; the coefficient is what remains after dividing the recorded throughput by that shape factor, namely $A=12$.

Mistaking $8$ for the coefficient is the classic half-finished solve: the hard part — evaluating a fractional power — has been done, and the easy division is skipped. A quick check exposes it, since $A=8$ would predict only $64$ pallets per hour on the recorded shift.

Evaluate the shape factor exactly:

$$32^{0.6} = \\left(2^{5}\\right)^{3/5} = 2^{3} = 8$$

Divide the recorded throughput by it:

$$8A = 96 \\quad \\Rightarrow \\quad A = 12, \\qquad H(s) = 12 s^{0.6}$$

The coefficient is $12$, not $8$, so the statement is False.`,
      `**B.** → True

The observation gives $H(s)=12s^{0.6}$, so reaching a target requires inversion rather than substitution. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$12s^{0.6}=300 \\quad\\Rightarrow\\quad s^{0.6}=25$$

The relevant comparison can then be written as

$$s=25^{1/0.6}=25^{5/3}\\approx213.75$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The continuous model reaches the target at about $214$ staff. Therefore the statement is True.`,
      `**C.** → False

Doubling staff uses the exact scale factor $2^{0.6}$; the exponent itself is not a percentage gain. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{H(2s)}{H(s)}=2^{0.6}\\approx1.5157$$

The relevant comparison can then be written as

$$(1.5157-1)\\times100\\%\\approx51.6\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The increase is about $51.6\\%$, outside the stated band. Therefore the statement is False.`,
      `**D.** → False

This claim inverts the law at the contractual ceiling of $300$ pallets per hour. The required headcount is about $214$, not $250$, so the ceiling arrives sooner than the claim suggests.

Inverting an exponent of $0.6$ means raising both sides to the power $5/3$, an operation that magnifies the target ratio. Estimating instead by proportion from the recorded shift — throughput needs to roughly triple, so staff must roughly triple to about $100$ — lands far short, which shows why the inverse exponent has to be applied properly.

Set throughput to the ceiling and isolate the shape factor:

$$12 s^{0.6} = 300 \\quad \\Rightarrow \\quad s^{0.6} = 25$$

Raise both sides to the reciprocal power:

$$s = 25^{5/3} = \\left(5^{2}\\right)^{5/3} = 5^{10/3} = 5^{3} \\times 5^{1/3} \\approx 125 \\times 1.710 \\approx 213.8$$

The ceiling binds at about $214$ staff, well below $250$, so the statement is False.`,
      `**E.** → False

This claim asks about a derived quantity. Dividing the law by $s$ gives $H(s)/s = 12s^{-0.4}$, a power function with a negative exponent, so throughput per staff member falls as the shift grows.

Total throughput and throughput per head move in opposite directions here, and conflating them is the trap. Adding staff always raises the total; it lowers the average because each additional worker contributes less than the one before.

Divide the law by headcount:

$$\\frac{H(s)}{s} = \\frac{12 s^{0.6}}{s} = 12 s^{-0.4}$$

The exponent is negative, so the average is decreasing. Check two shifts:

$$\\frac{H(32)}{32} = \\frac{96}{32} = 3, \\qquad \\frac{H(243)}{243} = \\frac{324}{243} \\approx 1.33$$

Throughput per staff member falls from $3$ to about $1.33$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `Throughput follows $H(s)=As^{0.6}$ pallets per hour for $s$ staff. A $32$-staff shift moved $96$ pallets per hour, and the contract caps billed throughput at $300$.

**Part 1: Building the model.**

Let $s$ = staff on shift and $H(s)$ = pallets per hour. The exponent is given, so one measured shift is enough to pin the coefficient; the contract ceiling then has to be inverted back into a headcount.

**1. Translate: the recorded shift.** Both $32$ and the exponent are powers of small integers, so the shape factor is exact:

$$32^{0.6} = \\left(2^{5}\\right)^{3/5} = 8, \\qquad 8A = 96$$

**2. Translate: the contract ceiling.** Billed throughput cannot exceed $300$:

$$12 s^{0.6} \\le 300$$

**Part 2: The model.**

$$H(s) = 12 s^{0.6} \\tag{1}$$

$$s^{0.6} \\le 25 \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the recorded shift:

$$A = 12$$

**2.** Levels at exact fifth powers stay clean:

$$H(243) = 12 \\times 3^{3} = 324$$

**3.** Scale factors show the diminishing returns:

$$2^{0.6} \\approx 1.516 \\quad (+52\\%), \\qquad \\left(\\tfrac{243}{32}\\right)^{0.6} = 3.375$$

**4.** Invert (2) by raising to the power $5/3$:

$$s = 25^{5/3} = 5^{10/3} \\approx 213.8$$

**5.** The derived average turns the exponent negative, so bigger shifts are less productive per head:

$$\\frac{H(s)}{s} = 12 s^{-0.4}, \\qquad 3 \\text{ at } s=32, \\qquad 1.33 \\text{ at } s=243$$

**Answer.** $A = 12$ | $H(s) = 12s^{0.6}$ | ceiling binds at $s \\approx 214$ staff`,
  },
  {
    id: `math-8-10`,
    case_id: `MATH 8.10`,
    title: `Response Time Recovered from a Server Upgrade`,
    context: `A service's median response time follows $W(k)=A k^{-1.5}$ milliseconds, where $k>0$ is the number of servers. The upgrade log does not state $A$: it records only that moving from $4$ servers to $9$ servers cut the median response time by exactly $19$ ms. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `With four servers the median response time is $27$ ms.`,
      `With nine servers the median response time is $8$ ms.`,
      `Doubling the server count cuts the median response time by about $65\\%$.`,
      `A median response time of $1$ ms requires $36$ servers.`,
      `The model reaches a median response time of $2$ ms at about $22.7$ servers.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for a level, but the log records only a reduction, so the coefficient has to be reconstructed from the difference between two response times. That reconstruction gives $A=216$, and the four-server median is then $27$ ms.

Both server counts are perfect squares, which keeps the negative fractional powers exact: $4^{-1.5}=1/8$ and $9^{-1.5}=1/27$. The trap is sign confusion — with a negative exponent the *smaller* server count produces the *larger* response time, so the recorded cut is the earlier value minus the later one.

Evaluate the two shape factors:

$$4^{-1.5} = \\frac{1}{4^{1.5}} = \\frac{1}{8}, \\qquad 9^{-1.5} = \\frac{1}{27}$$

Translate the recorded cut:

$$A\\left(\\frac{1}{8} - \\frac{1}{27}\\right) = 19 \\quad \\Rightarrow \\quad A \\cdot \\frac{19}{216} = 19 \\quad \\Rightarrow \\quad A = 216$$

Evaluate at four servers:

$$W(4) = \\frac{216}{8} = 27$$

The four-server median is $27$ ms, so the statement is True.`,
      `**B.** → True

This claim checks the second end of the upgrade. With $A=216$ the nine-server median is $216/27=8$ ms, and the pair $27$ and $8$ reproduces the logged cut exactly.

This is the natural consistency check on part A: any candidate coefficient must reproduce a difference of $19$ ms between the two configurations, and only $A=216$ does. Notice also that the two values are $27=3^{3}$ and $8=2^{3}$, mirroring the server counts $9=3^{2}$ and $4=2^{2}$ through the exponent $-1.5$.

Evaluate at nine servers:

$$W(9) = \\frac{216}{27} = 8$$

Verify the logged reduction:

$$27 - 8 = 19$$

The nine-server median is $8$ ms, so the statement is True.`,
      `**C.** → True

This claim is a scale-factor question and holds at any starting fleet size. Doubling multiplies response time by $2^{-1.5}\\approx0.354$, which is a cut of about $64.6\\%$ — rounded, the $65\\%$ in the claim.

With a negative exponent the scale factor is below $1$, so the multiplier is a survival fraction and the *cut* is one minus that fraction. Reading $0.354$ itself as the reduction would give the wrong answer by inverting the two.

Form the scale factor:

$$\\frac{W(2k)}{W(k)} = 2^{-1.5} = \\frac{1}{2\\sqrt{2}} \\approx 0.3536$$

Convert to a percentage cut:

$$1 - 0.3536 = 0.6464 \\approx 65\\%$$

Check on concrete fleets:

$$W(4) = 27, \\qquad W(8) = \\frac{216}{8^{1.5}} = \\frac{216}{22.63} \\approx 9.55, \\qquad \\frac{9.55}{27} \\approx 0.354$$

The cut is about $65\\%$, so the statement is True.`,
      `**D.** → True

This claim inverts the model at a demanding target. Solving $216k^{-1.5}=1$ gives $k^{1.5}=216$, and raising to the power $2/3$ returns exactly $36$ servers.

The inversion is where negative exponents bite: moving the power to the other side flips its sign, so the target ratio $216$ is raised to $2/3$ rather than $-2/3$. The size of the answer is worth noting too — cutting the median from $8$ ms to $1$ ms takes four times the nine-server fleet.

Set the model equal to the target:

$$216 k^{-1.5} = 1 \\quad \\Rightarrow \\quad k^{1.5} = 216$$

Raise both sides to the reciprocal power:

$$k = 216^{2/3} = \\left(6^{3}\\right)^{2/3} = 6^{2} = 36$$

Confirm by substitution:

$$W(36) = \\frac{216}{36^{1.5}} = \\frac{216}{216} = 1$$

The target needs $36$ servers, so the statement is True.`,
      `**E.** → True

From the logged difference the calibrated law is $W(k)=216k^{-1.5}$, and the target must be inverted. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$216k^{-1.5}=2 \\quad\\Rightarrow\\quad k^{1.5}=108$$

The relevant comparison can then be written as

$$k=108^{2/3}\\approx22.68$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The continuous model reaches $2$ ms at about $22.7$ servers. Therefore the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Median response time follows $W(k)=Ak^{-1.5}$ ms for $k$ servers. Moving from $4$ to $9$ servers cut the median by exactly $19$ ms.

**Part 1: Building the model.**

Let $k$ = servers and $W(k)$ = median response time in milliseconds. The exponent is given and negative, and the only observation is a *difference* between two response times, so the coefficient must be recovered from that difference.

**1. Translate: the two shape factors.** Both server counts are perfect squares, so the powers are exact fractions:

$$4^{-1.5} = \\frac{1}{8}, \\qquad 9^{-1.5} = \\frac{1}{27}$$

**2. Translate: the recorded cut.** The smaller fleet has the larger response time:

$$A\\left(\\frac{1}{8} - \\frac{1}{27}\\right) = 19$$

**Part 2: The model.**

$$W(k) = A k^{-1.5} \\tag{1}$$

$$A \\cdot \\frac{19}{216} = 19 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (2) gives the coefficient in one step:

$$A = 216, \\qquad W(k) = 216 k^{-1.5}$$

**2.** Check both logged configurations:

$$W(4) = 27, \\qquad W(9) = 8, \\qquad 27 - 8 = 19$$

**3.** Scale factors are below $1$ because the exponent is negative:

$$\\frac{W(2k)}{W(k)} = 2^{-1.5} \\approx 0.354 \\quad \\Rightarrow \\quad \\text{a cut of about } 65\\%$$

**4.** Invert the law to turn a latency target into a fleet size:

$$k = \\left(\\frac{216}{W}\\right)^{2/3}, \\qquad W = 1 \\;\\Rightarrow\\; k = 216^{2/3} = 36$$

**5.** The negative exponent also fixes the qualitative picture: response time falls throughout, but with ever smaller gains per added server.

**Answer.** $A = 216$ | $W(k) = 216k^{-1.5}$ | $W(4)=27$ ms, $W(9)=8$ ms | $1$ ms needs $36$ servers`,
  },
  {
    id: `math-8-11`,
    case_id: `MATH 8.11`,
    title: `Isoelastic Subscription Demand and Its Revenue`,
    context: `Monthly subscriptions follow the isoelastic demand curve $q(p)=A p^{-2}$, where $p>0$ is the price in euros. At a price of $5$ the service sells $400$ subscriptions. Management wants to know what the curve implies for quantity and for revenue $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising the price by $10\\%$ lowers subscriptions by about $17.4\\%$.`,
      `A price rise of $10\\%$ lowers quantity by exactly $20\\%$.`,
      `At a price of $10$, the curve gives $100$ subscriptions and revenue of $1000$.`,
      `Revenue does not depend on the price.`,
      `At a price of $20$ the curve gives $50$ subscriptions.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

A finite ten-percent price move must be evaluated by the exact factor $1.1^{-2}$. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{q(1.1p)}{q(p)}=1.1^{-2}=\\frac{1}{1.21}\\approx0.82645$$

The relevant comparison can then be written as

$$(1-0.82645)\\times100\\%\\approx17.36\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Subscriptions fall by about $17.4\\%$. Therefore the statement is True.`,
      `**B.** → False

This claim turns the elasticity into an exact prediction for a large price move. The true factor is $1.1^{-2}\\approx0.8264$, a fall of about $17.4\\%$, so the drop is smaller than the claimed $20\\%$.

Elasticity multiplies percentage changes only in the limit of very small moves. For a $1\\%$ rise the approximation is excellent, as part A showed; for a $10\\%$ rise the exact power calculation and the linear shortcut separate visibly, and the word "exactly" is what makes the claim fail.

Apply the exact scale factor:

$$\\frac{q(1.1p)}{q(p)} = 1.1^{-2} = \\frac{1}{1.21} \\approx 0.8264$$

Convert to a percentage change:

$$1 - 0.8264 = 0.1736 \\approx 17.4\\%$$

Check on the observed price:

$$q(5) = 400, \\qquad q(5.5) = \\frac{10000}{30.25} \\approx 330.6$$

Quantity falls by about $17.4\\%$, not exactly $20\\%$, so the statement is False.`,
      `**C.** → True

Calibration gives $q(p)=10000p^{-2}$, after which quantity and revenue must both be evaluated at the second price. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$q(10)=10000(10)^{-2}=100$$

The relevant comparison can then be written as

$$R(10)=10q(10)=10(100)=1000$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Both the quantity and the resulting revenue match the claim. Therefore the statement is True.`,
      `**D.** → False

This claim describes the borderline case of unit elasticity, which is not the curve in front of us. Multiplying price by quantity gives $R(p)=10000\\,p^{-1}$, so revenue falls as price rises.

Revenue is price-independent only when the elasticity is exactly $-1$, since then the exponents $+1$ and $-1$ cancel. With elasticity $-2$ the quantity loss outweighs the price gain, leaving revenue strictly decreasing — the standard elastic-demand conclusion.

Build revenue from the curve:

$$R(p) = p\\,q(p) = p \\times 10000 p^{-2} = 10000 p^{-1}$$

Evaluate at two prices:

$$R(5) = \\frac{10000}{5} = 2000, \\qquad R(10) = \\frac{10000}{10} = 1000$$

Doubling the price halves revenue, so revenue clearly depends on price and the claim is false.`,
      `**E.** → False

This claim evaluates the curve at a price four times the observed one. The correct quantity is $25$ subscriptions; the claimed $50$ would follow from an elasticity of $-1$, not $-2$.

The slip is easy to see through the scale factor: quadrupling the price divides quantity by $4^{2}=16$, taking $400$ down to $25$. Dividing by $4$ instead — that is, using the price multiplier itself rather than its square — produces exactly the claimed $50$.

Evaluate the curve directly:

$$q(20) = \\frac{10000}{20^{2}} = \\frac{10000}{400} = 25$$

Cross-check with the scale factor from the observed price:

$$\\frac{q(20)}{q(5)} = 4^{-2} = \\frac{1}{16}, \\qquad \\frac{400}{16} = 25$$

The curve gives $25$ subscriptions, not $50$, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `Demand is isoelastic, $q(p)=Ap^{-2}$, with $q(5)=400$. Revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros, $q$ = subscriptions, $R$ = revenue. The exponent is given by the isoelastic form, so the single observed price-quantity pair pins the coefficient, and revenue is then a derived power function.

**1. Translate: the observed pair.**

$$A(5)^{-2} = 400 \\quad \\Rightarrow \\quad \\frac{A}{25} = 400$$

**2. Translate: revenue.** Multiplying by $p$ adds $1$ to the exponent:

$$R(p) = p \\cdot A p^{-2} = A p^{-1}$$

**Part 2: The model.**

$$q(p) = 10000\\,p^{-2} \\tag{1}$$

$$R(p) = 10000\\,p^{-1} \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the observed pair:

$$A = 400 \\times 25 = 10000$$

**2.** The elasticity is the exponent, the same at every price:

$$\\text{El}_{p}q = -2$$

**3.** Exact scale factors, which elasticity only approximates for small moves:

$$1.1^{-2} \\approx 0.8264 \\;(-17.4\\%), \\qquad \\left(\\tfrac{1}{2}\\right)^{-2} = 4, \\qquad 4^{-2} = \\tfrac{1}{16}$$

**4.** Levels along the curve:

$$q(5) = 400, \\qquad q(2.5) = 1600, \\qquad q(20) = 25$$

**5.** Revenue in (2) has exponent $-1$, so it falls as price rises; it would be price-independent only if demand elasticity were exactly $-1$:

$$R(5) = 2000, \\qquad R(10) = 1000$$

**Answer.** $A = 10000$ | $q(p) = 10000p^{-2}$ | $R(p) = 10000p^{-1}$ | elasticity $-2$`,
  },
  {
    id: `math-8-12`,
    case_id: `MATH 8.12`,
    title: `Audit Fees With a Fixed Charge on Top of a Power Term`,
    context: `An audit firm bills $C(n)=F + a n^{0.5}$ for a client with $n>0$ accounts, where $F$ is a fixed engagement charge. Two completed engagements are on file: $100$ accounts were billed at $500$, and $400$ accounts at $800$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The fixed engagement charge is $200$.`,
      `Total cost is a power function of the number of accounts.`,
      `Cost per account falls as the number of accounts rises.`,
      `An engagement covering $900$ accounts is billed at $1100$.`,
      `Doubling the accounts from $100$ to $200$ raises the bill by more than $50\\%$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the constant part of the fee, which no single engagement reveals on its own. Differencing the two engagements removes $F$, gives $a=30$, and substituting back leaves $F=200$.

The point of differencing is that the fixed charge appears in both bills with the same weight, so it cancels. The variable part does not cancel, because the two engagements have different shape factors, $\\sqrt{100}=10$ and $\\sqrt{400}=20$.

Write both engagements:

$$F + 10a = 500, \\qquad F + 20a = 800$$

Subtract to eliminate the fixed charge:

$$10a = 300 \\quad \\Rightarrow \\quad a = 30$$

Substitute back:

$$F = 500 - 10(30) = 200, \\qquad C(n) = 200 + 30\\sqrt{n}$$

The fixed charge is $200$, so the statement is True.`,
      `**B.** → False

This claim misreads the structure of the fee. A power function has the form $An^{r}$ and nothing else; adding a constant produces $200+30\\sqrt{n}$, which is a sum of a constant and a power function, not a power function itself.

The clean test is the scale factor. A genuine power function multiplies by $k^{r}$ whenever the input is multiplied by $k$, with a factor that does not depend on where you start. Here the factor drifts, which is the fingerprint of the extra constant.

Compare two quadruplings, both multiplying accounts by $4$:

$$\\frac{C(400)}{C(100)} = \\frac{800}{500} = 1.6$$

$$\\frac{C(1600)}{C(400)} = \\frac{200 + 30(40)}{800} = \\frac{1400}{800} = 1.75$$

A power function with exponent $0.5$ would give the same factor $4^{0.5}=2$ both times. The factors differ, so total cost is not a power function and the claim is false.`,
      `**C.** → True

This claim is about the average fee. Dividing the bill by the number of accounts gives $200n^{-1}+30n^{-0.5}$, a sum of two decreasing terms, so the average falls throughout.

Both pieces work in the same direction, which is what makes the conclusion airtight: the fixed charge is spread over more accounts, and the variable part also thins out because its exponent, $0.5$, is below $1$. If the variable exponent had exceeded $1$, the two forces would have pulled against each other and the answer would depend on $n$.

Divide the fee by the number of accounts:

$$\\frac{C(n)}{n} = \\frac{200}{n} + \\frac{30\\sqrt{n}}{n} = 200n^{-1} + 30n^{-0.5}$$

Both exponents are negative, so both terms decline. Check the filed engagements:

$$\\frac{500}{100} = 5, \\qquad \\frac{800}{400} = 2, \\qquad \\frac{1100}{900} \\approx 1.22$$

Cost per account falls from $5$ to about $1.22$, so the statement is True.`,
      `**D.** → True

This claim extrapolates the recovered fee schedule to a larger engagement. With $F=200$ and $a=30$, the $900$-account bill is $200+30(30)=1100$.

The arithmetic is easy once both constants are known, but the check that matters is that $900$ is a perfect square, so the shape factor $\\sqrt{900}=30$ is exact and no rounding enters. It is also a useful sanity point: accounts rise ninefold from the first engagement while the bill only slightly more than doubles.

Evaluate the recovered schedule:

$$C(900) = 200 + 30\\sqrt{900} = 200 + 30(30) = 200 + 900 = 1100$$

Compare with the filed engagements to see the shape:

$$C(100) = 500, \\qquad C(400) = 800, \\qquad C(900) = 1100$$

Each equal step in $\\sqrt{n}$ adds exactly $300$, confirming the schedule, so the statement is True.`,
      `**E.** → False

This claim overstates how fast the bill grows. Doubling from $100$ to $200$ accounts takes the fee from $500$ to about $624$, a rise of roughly $25\\%$.

Two effects hold the increase down. The variable term rises only by the factor $\\sqrt{2}\\approx1.414$, and the fixed charge of $200$ does not rise at all — it dilutes every percentage change in the total. Even the variable part alone would have gained only $41\\%$, short of the claimed $50\\%$.

Evaluate the fee at the doubled engagement:

$$C(200) = 200 + 30\\sqrt{200} \\approx 200 + 30(14.142) \\approx 624.3$$

Express the change as a percentage:

$$\\frac{624.3}{500} \\approx 1.249 \\quad \\Rightarrow \\quad +24.9\\%$$

The bill rises by about a quarter, not by more than half, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `Audit fees are $C(n)=F+an^{0.5}$ for $n>0$ accounts, with $C(100)=500$ and $C(400)=800$.

**Part 1: Building the model.**

Let $n$ = accounts, $F$ = fixed engagement charge, $a$ = coefficient of the variable term. Two unknowns need the two filed engagements, and because $F$ enters both bills identically it can be removed by differencing.

**1. Translate: the $100$-account engagement.**

$$F + a\\sqrt{100} = 500$$

**2. Translate: the $400$-account engagement.**

$$F + a\\sqrt{400} = 800$$

**Part 2: The model.**

$$F + 10a = 500 \\tag{1}$$

$$F + 20a = 800 \\tag{2}$$

**Part 3: Solve.**

**1.** Subtracting (1) from (2) eliminates the fixed charge:

$$10a = 300 \\;\\Rightarrow\\; a = 30, \\qquad F = 500 - 300 = 200$$

$$C(n) = 200 + 30\\sqrt{n}$$

**2.** The schedule extrapolates cleanly at perfect squares:

$$C(900) = 200 + 900 = 1100, \\qquad C(1600) = 200 + 1200 = 1400$$

**3.** The fee is *not* a power function: equal quadruplings give different factors:

$$\\frac{C(400)}{C(100)} = 1.6, \\qquad \\frac{C(1600)}{C(400)} = 1.75$$

**4.** Average fee splits into two declining power terms:

$$\\frac{C(n)}{n} = 200n^{-1} + 30n^{-0.5}, \\qquad 5 \\to 2 \\to 1.22 \\text{ across the three engagements}$$

**5.** Doubling the accounts moves the variable term by $\\sqrt{2}$ only, and the fixed charge damps the total further:

$$C(200) \\approx 624.3 \\quad (+24.9\\%)$$

**Answer.** $F = 200$ | $a = 30$ | $C(n) = 200 + 30\\sqrt{n}$`,
  },
  {
    id: `math-8-13`,
    case_id: `MATH 8.13`,
    title: `Fleet Growth Combined With Falling Emission Intensity`,
    context: `An electric-vehicle programme is tracked by two linked power laws. The fleet after $t>0$ years is $a(t)=4t^{0.5}$ thousand vehicles, and average emission intensity falls with fleet size according to $e(a)=120a^{-0.5}$ kilograms per thousand vehicles. Total fleet emissions are $E(t)=a(t)\\,e\\big(a(t)\\big)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Total fleet emissions are a power function of time with exponent $0.5$.`,
      `After $16$ years total fleet emissions are $960$.`,
      `Total fleet emissions rise as the programme runs longer.`,
      `Doubling the elapsed time doubles total fleet emissions.`,
      `Emission intensity rises as the fleet grows.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

This claim gets the composition half right. Total emissions are indeed a power function of time, but the exponent is $0.25$, not $0.5$: multiplying fleet size by intensity leaves $120a^{0.5}$, and substituting $a(t)=4t^{0.5}$ halves the exponent again.

The exponent $0.5$ is the one belonging to the *fleet* law, and carrying it through unchanged is the natural slip. Each stage of a chain multiplies exponents, and here two successive square roots compress time into a fourth root.

Multiply fleet size by intensity:

$$E = a \\times 120a^{-0.5} = 120 a^{0.5}$$

Substitute the fleet law:

$$E(t) = 120\\left(4t^{0.5}\\right)^{0.5} = 120 \\times 4^{0.5} \\times t^{0.25} = 240\\,t^{0.25}$$

The exponent is $0.5 \\times 0.5 = 0.25$, not $0.5$, so the statement is False.`,
      `**B.** → False

This claim evaluates the composed law at $t=16$. The correct figure is $480$; the claimed $960$ is exactly double it.

Where the doubling comes from is instructive: $960$ is what you get by ignoring the intensity stage entirely and reading $E$ off the exponent $0.5$, since $240 \\times 16^{0.5}=960$. The fourth root, $16^{0.25}=2$, is half of the square root, $16^{0.5}=4$.

Evaluate the composed law:

$$E(16) = 240 \\times 16^{0.25} = 240 \\times 2 = 480$$

Check through the two stages separately:

$$a(16) = 4\\sqrt{16} = 16, \\qquad e(16) = \\frac{120}{\\sqrt{16}} = 30, \\qquad 16 \\times 30 = 480$$

Both routes give $480$, so the statement is False.`,
      `**C.** → True

This claim asks only for the direction of the composed law. With $E(t)=240t^{0.25}$, the coefficient is positive and the exponent is positive, so emissions increase throughout.

The result is worth pausing on, because the two stages pull in opposite directions: the fleet grows while each vehicle pollutes less. The composed exponent, $+0.25$, records that fleet growth wins — but only barely, which is why the rise is so slow.

Read the sign structure of the composed law:

$$E(t) = 240\\,t^{0.25}, \\qquad 240 > 0, \\quad 0.25 > 0$$

Trace the level over time:

$$E(1) = 240, \\qquad E(16) = 480, \\qquad E(81) = 240 \\times 3 = 720$$

Emissions climb steadily, so the statement is True.`,
      `**D.** → False

This claim assumes proportional growth. The scale factor is $2^{0.25}\\approx1.189$, so doubling the elapsed time raises emissions by only about $19\\%$.

Slow growth is easy to mistake for proportional growth when the numbers are checked at just one point, and the earlier value $E(16)=480$ against $E(1)=240$ does look like a doubling — but that took sixteen years, not one doubling of time. The correct reading is that emissions double only when time rises sixteenfold.

Form the scale factor:

$$\\frac{E(2t)}{E(t)} = 2^{0.25} \\approx 1.1892$$

Find what time multiple actually doubles emissions:

$$k^{0.25} = 2 \\quad \\Rightarrow \\quad k = 2^{4} = 16$$

Check numerically:

$$E(16) = 480, \\qquad E(32) = 240 \\times 32^{0.25} \\approx 240 \\times 2.378 \\approx 570.7$$

Doubling time adds about a fifth, not a whole doubling, so the statement is False.`,
      `**E.** → False

This claim reverses the second stage of the chain. Intensity is $e(a)=120a^{-0.5}$, a power function with a negative exponent, so it falls as the fleet grows.

Total emissions and emissions per vehicle move in opposite directions in this programme, and that is exactly what the two exponents encode: $-0.5$ for intensity, $+0.25$ for the total. Reading a rising total as evidence of rising intensity confuses the aggregate with the average.

Read the sign of the intensity exponent:

$$e(a) = 120a^{-0.5}, \\qquad -0.5 < 0$$

Evaluate at two fleet sizes reached by the programme:

$$e(4) = \\frac{120}{2} = 60, \\qquad e(16) = \\frac{120}{4} = 30$$

Intensity halves as the fleet quadruples, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Fleet size is $a(t)=4t^{0.5}$ thousand vehicles, intensity is $e(a)=120a^{-0.5}$ kg per thousand vehicles, and total emissions are $E(t)=a(t)e(a(t))$.

**Part 1: Building the model.**

Let $t$ = years, $a$ = fleet in thousands, $e$ = emission intensity, $E$ = total emissions. This is a chain: the output of the fleet law becomes the input of the intensity law, and the total multiplies the two.

**1. Translate: total emissions in terms of fleet size.** Multiplying adds the exponents:

$$E = a \\cdot 120a^{-0.5} = 120a^{0.5}$$

**2. Translate: substitute the fleet law.** Composing multiplies the exponents:

$$E(t) = 120\\left(4t^{0.5}\\right)^{0.5}$$

**Part 2: The model.**

$$a(t) = 4t^{0.5}, \\qquad e(a) = 120a^{-0.5} \\tag{1}$$

$$E(t) = 240\\,t^{0.25} \\tag{2}$$

**Part 3: Solve.**

**1.** The composed constant and exponent come out cleanly:

$$120 \\times 4^{0.5} = 240, \\qquad 0.5 \\times 0.5 = 0.25$$

**2.** Levels can be checked either through (2) or stage by stage:

$$E(16) = 240 \\times 2 = 480, \\qquad a(16) = 16, \\quad e(16) = 30, \\quad 16 \\times 30 = 480$$

**3.** The composed exponent is positive but small, so growth is slow:

$$\\frac{E(2t)}{E(t)} = 2^{0.25} \\approx 1.189 \\quad (+19\\%)$$

**4.** Doubling total emissions needs a sixteenfold stretch of time:

$$k^{0.25} = 2 \\;\\Rightarrow\\; k = 16$$

**5.** The two stages pull opposite ways — intensity falls with fleet size while the total still rises:

$$e(4) = 60, \\qquad e(16) = 30$$

**Answer.** $E(t) = 240t^{0.25}$ | composed exponent $0.25$ | $E(16) = 480$`,
  },
  {
    id: `math-8-14`,
    case_id: `MATH 8.14`,
    title: `Pipeline Capacity, Inversion, and a Change of Units`,
    context: `Flow capacity through a pipe follows $Q(d)=A d^{2.5}$ litres per second, where $d>0$ is the internal diameter in centimetres. A bench test on a $4$ cm pipe measured a capacity of $64$ litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the capacity law is $A=2$.`,
      `Doubling the diameter multiplies capacity by about $5.7$.`,
      `A capacity of $250$ litres per second requires a diameter above $10$ cm.`,
      `Measuring the diameter in millimetres instead of centimetres leaves the coefficient unchanged.`,
      `Capacity per centimetre of diameter is the same at every diameter.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the constant in front. The bench diameter is a power of two, so $4^{2.5}=32$ exactly, and dividing the measured capacity by that shape factor gives $A=2$.

Fractional exponents like $2.5$ are best split into an integer part and a half: $4^{2.5}=4^{2}\\times4^{0.5}$. Attempting the same shortcut on a diameter that is not a perfect square is where the arithmetic usually goes wrong, which is why bench tests are run at convenient diameters.

Evaluate the shape factor:

$$4^{2.5} = 4^{2} \\times 4^{0.5} = 16 \\times 2 = 32$$

Divide the measured capacity by it:

$$32A = 64 \\quad \\Rightarrow \\quad A = 2, \\qquad Q(d) = 2d^{2.5}$$

The coefficient is $2$, so the statement is True.`,
      `**B.** → True

This claim is a scale-factor question, independent of the coefficient and of the starting diameter. Doubling multiplies capacity by $2^{2.5}\\approx5.657$, which rounds to the $5.7$ in the claim.

The size of this factor is the practical message of the model: a modest widening of the pipe buys a large gain in throughput, because the exponent exceeds $2$. Expecting a factor of $4$, as for a plain area-based rule, would understate capacity by about $40\\%$.

Form the scale factor:

$$\\frac{Q(2d)}{Q(d)} = 2^{2.5} = 2^{2} \\times 2^{0.5} = 4\\sqrt{2} \\approx 5.657$$

Check against the bench pipe:

$$Q(4) = 64, \\qquad Q(8) = 2 \\times 8^{2.5} = 2 \\times 181.02 \\approx 362.0, \\qquad \\frac{362.0}{64} \\approx 5.66$$

The factor is about $5.7$, so the statement is True.`,
      `**C.** → False

This claim inverts the law and overshoots badly. Solving $2d^{2.5}=250$ gives $d^{2.5}=125$ and therefore $d\\approx6.9$ cm, well under $10$ cm.

The overshoot comes from thinking in proportional terms: capacity has to rise nearly fourfold from the bench test, so the pipe "must" be much wider. With exponent $2.5$ the inverse exponent is only $0.4$, so a fourfold capacity gain needs a diameter increase of just $4^{0.4}\\approx1.74$.

Invert the recovered law:

$$2d^{2.5} = 250 \\quad \\Rightarrow \\quad d^{2.5} = 125 \\quad \\Rightarrow \\quad d = 125^{0.4}$$

Evaluate the root:

$$125^{0.4} = e^{0.4 \\times \\ln 125} = e^{0.4 \\times 4.8283} = e^{1.9313} \\approx 6.90$$

Confirm that $10$ cm would overshoot the target:

$$Q(10) = 2 \\times 10^{2.5} \\approx 632$$

A $6.9$ cm pipe already meets the target, so the statement is False.`,
      `**D.** → False

This claim ignores how units enter a power law. Switching to millimetres multiplies every diameter figure by $10$, so the coefficient must shrink by $10^{2.5}\\approx316$ to keep the same physical capacity; it becomes about $0.00632$.

The exponent is the part that survives a change of units, which is why exponents — and elasticities — are quoted as unit-free descriptions of a relationship. The coefficient always absorbs the rescaling, and the larger the exponent, the more violently it does so.

Rewrite the law with $d_{\\text{mm}} = 10\\,d_{\\text{cm}}$:

$$Q = 2 d_{\\text{cm}}^{2.5} = 2\\left(\\frac{d_{\\text{mm}}}{10}\\right)^{2.5} = \\frac{2}{10^{2.5}}\\,d_{\\text{mm}}^{2.5}$$

Evaluate the new coefficient:

$$10^{2.5} \\approx 316.23, \\qquad \\frac{2}{316.23} \\approx 0.00632$$

Check that capacity is unchanged for the bench pipe:

$$0.00632 \\times 40^{2.5} \\approx 0.00632 \\times 10119 \\approx 64$$

The coefficient changes while the exponent does not, so the statement is False.`,
      `**E.** → False

This claim would require an exponent of exactly $1$. Dividing the law by $d$ leaves $2d^{1.5}$, which grows with diameter, so capacity per centimetre is far from constant.

Ratios like this one are only constant when the numerator and the divisor carry the same exponent. Here the numerator carries $2.5$, so the ratio keeps an exponent of $1.5$ — still strongly increasing, which is why wider pipes are so much more efficient per centimetre of bore.

Divide the law by the diameter:

$$\\frac{Q(d)}{d} = \\frac{2d^{2.5}}{d} = 2d^{1.5}$$

Evaluate at two diameters:

$$\\frac{Q(4)}{4} = \\frac{64}{4} = 16, \\qquad \\frac{Q(8)}{8} = \\frac{362.0}{8} \\approx 45.3$$

Capacity per centimetre nearly triples between those pipes, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `Flow capacity is $Q(d)=Ad^{2.5}$ litres per second for a diameter $d>0$ in centimetres, with a bench test giving $Q(4)=64$.

**Part 1: Building the model.**

Let $d$ = internal diameter in centimetres and $Q(d)$ = capacity in litres per second. The exponent is given, so the bench test alone pins the coefficient; the questions then push the model through inversion and a change of units.

**1. Translate: the bench test.** The bench diameter is a power of two, so the shape factor is exact:

$$4^{2.5} = 4^{2} \\times 4^{0.5} = 32, \\qquad 32A = 64$$

**2. Translate: the change of units.** One centimetre is ten millimetres:

$$d_{\\text{mm}} = 10\\,d_{\\text{cm}}$$

**Part 2: The model.**

$$Q(d) = 2d^{2.5} \\tag{1}$$

$$Q = \\frac{2}{10^{2.5}}\\,d_{\\text{mm}}^{2.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The bench test gives the coefficient:

$$A = 2$$

**2.** Scale factors follow from the exponent alone:

$$2^{2.5} = 4\\sqrt{2} \\approx 5.657$$

**3.** Inversion uses the reciprocal exponent $1/2.5 = 0.4$:

$$d = \\left(\\frac{Q}{2}\\right)^{0.4}, \\qquad Q = 250 \\;\\Rightarrow\\; d = 125^{0.4} \\approx 6.90 \\text{ cm}$$

**4.** Rescaling the unit leaves the exponent alone and rescales the coefficient by $10^{2.5}$:

$$A_{\\text{mm}} = \\frac{2}{316.23} \\approx 0.00632$$

**5.** Capacity per centimetre of bore keeps exponent $1.5$, so it rises with diameter:

$$\\frac{Q(d)}{d} = 2d^{1.5}, \\qquad 16 \\text{ at } d=4, \\qquad 45.3 \\text{ at } d=8$$

**Answer.** $A = 2$ | $Q(d) = 2d^{2.5}$ | $250$ l/s needs $d \\approx 6.9$ cm`,
  },
  {
    id: `math-8-15`,
    case_id: `MATH 8.15`,
    title: `From Radius Growth to the Area a Service Covers`,
    context: `A delivery hub's service radius expands with time according to $r(t)=3t^{0.5}$ kilometres, where $t>0$ is hours since opening. The area covered is the disc of that radius, $S=\\pi r^{2}$ square kilometres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The area covered is proportional to elapsed time.`,
      `After $4$ hours the covered area is $36\\pi$ square kilometres.`,
      `Doubling the elapsed time doubles the area covered.`,
      `Increasing elapsed time by $50\\%$ increases the service radius by about $22.5\\%$.`,
      `The covered area reaches $100\\pi$ square kilometres after about $11.1$ hours.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim is about the composed law. Substituting the radius law into the disc formula squares a square root, so the exponents multiply to $1$ and area is exactly proportional to time: $S(t)=9\\pi t$.

Proportionality is a strong statement, and it survives here only because the two exponents are exact reciprocals of each other. Had the radius grown as $t^{0.6}$, the area would have carried exponent $1.2$ and the proportionality would fail.

Compose the two relationships:

$$S(t) = \\pi\\left(3t^{0.5}\\right)^{2} = \\pi \\times 9 \\times t^{0.5 \\times 2}$$

$$S(t) = 9\\pi t$$

Check that equal time steps add equal area:

$$S(1) = 9\\pi, \\qquad S(2) = 18\\pi, \\qquad S(3) = 27\\pi$$

Area is proportional to elapsed time, so the statement is True.`,
      `**B.** → True

The radius law has to be composed with the disc-area formula before the four-hour level is evaluated. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$S(t)=\\pi\\left(3t^{0.5}\\right)^2=9\\pi t$$

The relevant comparison can then be written as

$$S(4)=9\\pi(4)=36\\pi$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The composed area at four hours is $36\\pi$ square kilometres. Therefore the statement is True.`,
      `**C.** → True

This claim applies a scale factor to the composed law. Since $S(t)=9\\pi t$ has exponent $1$, doubling time multiplies area by $2^{1}=2$.

The result looks obvious once the composition is done, but it is genuinely surprising before it: the radius grows ever more slowly, and yet the area keeps up a constant pace. The two effects — a decelerating radius and an area that grows with the square of the radius — cancel exactly.

Apply the scale factor to the composed law:

$$\\frac{S(2t)}{S(t)} = 2^{1} = 2$$

Verify with levels:

$$S(4) = 36\\pi, \\qquad S(8) = 72\\pi$$

Area doubles when time doubles, so the statement is True.`,
      `**D.** → True

A fifty-percent time increase multiplies time by $1.5$, so radius is multiplied by its square root. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{r(1.5t)}{r(t)}=1.5^{0.5}\\approx1.224745$$

The relevant comparison can then be written as

$$(1.224745-1)\\times100\\%\\approx22.5\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The radius increases by about $22.5\\%$. Therefore the statement is True.`,
      `**E.** → True

The target is an area, so the composed law $S(t)=9\\pi t$ must be inverted for time. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$9\\pi t=100\\pi$$

The relevant comparison can then be written as

$$t=\\frac{100}{9}\\approx11.11$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The target area is reached after about $11.1$ hours. Therefore the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `The service radius is $r(t)=3t^{0.5}$ km after $t>0$ hours, and the area covered is the disc $S=\\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours since opening, $r$ = service radius in kilometres, $S$ = area in square kilometres. This is a two-stage chain, and the second stage is a power function with exponent $2$, so composing multiplies the exponents.

**1. Translate: the radius law.**

$$r(t) = 3t^{0.5}$$

**2. Translate: the area of the disc.**

$$S = \\pi r^{2}$$

**Part 2: The model.**

$$S(t) = \\pi\\left(3t^{0.5}\\right)^{2} \\tag{1}$$

$$S(t) = 9\\pi t \\tag{2}$$

**Part 3: Solve.**

**1.** The composition squares the coefficient and multiplies the exponents:

$$3^{2} = 9, \\qquad 0.5 \\times 2 = 1$$

**2.** Levels at convenient hours, checked through both stages:

$$r(4) = 6 \\;\\Rightarrow\\; S = 36\\pi, \\qquad r(9) = 9 \\;\\Rightarrow\\; S = 81\\pi$$

**3.** The two stages carry different scale factors for the same doubling of time:

$$\\frac{r(2t)}{r(t)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{S(2t)}{S(t)} = 2^{1} = 2$$

**4.** The exponent $1$ in (2) means area accrues at a constant rate:

$$S(1) = 9\\pi, \\quad S(2) = 18\\pi, \\quad S(3) = 27\\pi$$

**5.** The apparent paradox — a slowing radius but a steadily growing area — resolves because $\\left(t^{0.5}\\right)^{2}=t$ exactly.

**Answer.** $r(t) = 3\\sqrt{t}$ | $S(t) = 9\\pi t$ | $S(9) = 81\\pi$ km²`,
  },
  {
    id: `math-8-16`,
    case_id: `MATH 8.16`,
    title: `Two Support Contracts, One Crossing and One Cap`,
    context: `A helpdesk compares two support contracts for $u>0$ tickets a month. Plan A bills $C_A(u)=a u^{0.5}$ and a filed invoice shows $36$ tickets billed at $240$; Plan A also carries a monthly cap, so it never charges more than $400$. Plan B bills a flat $5$ per ticket with no cap. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two plans bill the same amount at $64$ tickets.`,
      `Below $64$ tickets Plan B is the cheaper contract.`,
      `Plan A's cap binds from $100$ tickets onwards.`,
      `At $144$ tickets Plan A bills $480$.`,
      `Plan A's cost per ticket is the same at every ticket volume.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the crossing of a square-root schedule and a linear one. The filed invoice gives $a=40$, and solving $40\\sqrt{u}=5u$ puts the crossing at $64$ tickets, where both plans bill $320$.

Dividing by $\\sqrt{u}$ is the move that makes the equation tractable, and it is legitimate because $u>0$. What remains is a condition on $\\sqrt{u}$ alone, so the crossing has to be squared out of it — the reason the answer is $64$ rather than $8$.

Recover Plan A's coefficient from the invoice:

$$a\\sqrt{36} = 240 \\quad \\Rightarrow \\quad 6a = 240 \\quad \\Rightarrow \\quad a = 40$$

Set the two schedules equal:

$$40\\sqrt{u} = 5u \\quad \\Rightarrow \\quad 40 = 5\\sqrt{u} \\quad \\Rightarrow \\quad \\sqrt{u} = 8 \\quad \\Rightarrow \\quad u = 64$$

Confirm the shared bill, which also sits under Plan A's cap:

$$C_A(64) = 40(8) = 320, \\qquad C_B(64) = 5(64) = 320$$

Both plans bill $320$ at $64$ tickets, so the statement is True.`,
      `**B.** → True

This claim covers an interval below the crossing. For $u<64$ the inequality $5u<40\\sqrt{u}$ holds, so the flat per-ticket contract is cheaper on that whole range.

The direction can feel counter-intuitive because Plan A is the one that flattens out at high volume. At low volume it is the *expensive* option: a square-root schedule starts steeply, charging $40$ for the first ticket where Plan B charges $5$. The cap is what eventually rescues Plan A, but only well past the crossing.

Compare the two schedules and divide by $\\sqrt{u}>0$:

$$5u < 40\\sqrt{u} \\quad \\Longleftrightarrow \\quad 5\\sqrt{u} < 40 \\quad \\Longleftrightarrow \\quad u < 64$$

Spot-check inside the interval:

$$C_A(16) = 40(4) = 160, \\qquad C_B(16) = 80$$

Plan B is cheaper at every volume below the crossing, so the statement is True.`,
      `**C.** → True

This claim converts Plan A's monetary cap into a ticket volume. Solving $40\\sqrt{u}=400$ gives $\\sqrt{u}=10$, so the uncapped schedule reaches $400$ at exactly $100$ tickets and the cap binds from there on.

Because the uncapped schedule is increasing, everything above $100$ tickets would bill more than $400$ and is therefore trimmed to the cap. Below $100$ the cap is irrelevant, which is why the crossing computed in part A — at $64$ tickets and $320$ — is unaffected by it.

Set the uncapped schedule equal to the cap:

$$40\\sqrt{u} = 400 \\quad \\Rightarrow \\quad \\sqrt{u} = 10 \\quad \\Rightarrow \\quad u = 100$$

Describe the billed amount as a two-piece rule:

$$C_A(u) = \\begin{cases} 40\\sqrt{u}, & u \\le 100 \\\\ 400, & u > 100 \\end{cases}$$

The cap takes over from $100$ tickets, so the statement is True.`,
      `**D.** → False

This claim applies the uncapped formula beyond the point where it is valid. The raw schedule would give $40\\sqrt{144}=480$, but the cap has bound since $100$ tickets, so the actual bill is $400$.

The arithmetic in the claim is correct; the modelling is not. Reading a formula outside its stated domain is the whole trap here, and it is worth noting how large the error already is at $144$ tickets: the claim overstates the bill by $80$, and the gap widens with every extra ticket.

Evaluate the uncapped schedule:

$$40\\sqrt{144} = 40(12) = 480$$

Compare with the cap, which applies because $144 > 100$:

$$C_A(144) = \\min\\{480,\\,400\\} = 400$$

Plan A bills $400$, not $480$, so the statement is False.`,
      `**E.** → False

This claim describes Plan B, not Plan A. Dividing Plan A's schedule by the ticket count gives $40u^{-0.5}$, a decreasing function, while Plan B's per-ticket cost is the constant $5$.

A constant unit price is exactly what an exponent of $1$ produces. Plan A's exponent is $0.5$, so its per-ticket cost falls throughout — and once the cap binds it falls even faster, since the numerator stops growing altogether.

Divide each schedule by the ticket count:

$$\\frac{C_A(u)}{u} = \\frac{40\\sqrt{u}}{u} = 40u^{-0.5}, \\qquad \\frac{C_B(u)}{u} = 5$$

Evaluate Plan A's unit cost at three volumes:

$$\\frac{240}{36} \\approx 6.67, \\qquad \\frac{320}{64} = 5, \\qquad \\frac{400}{144} \\approx 2.78$$

Plan A's per-ticket cost more than halves across that range, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `Plan A bills $C_A(u)=au^{0.5}$ with an invoice of $240$ at $36$ tickets and a monthly cap of $400$; Plan B bills $5$ per ticket.

**Part 1: Building the model.**

Let $u$ = tickets per month, $C_A$ and $C_B$ = monthly bills. Plan A needs its coefficient recovered from the filed invoice, and its cap turns the schedule into a two-piece rule that must be respected when evaluating large volumes.

**1. Translate: Plan A's invoice.**

$$a\\sqrt{36} = 240$$

**2. Translate: Plan A's cap.** The uncapped schedule is trimmed once it reaches $400$:

$$C_A(u) = \\min\\left\\{a\\sqrt{u},\\;400\\right\\}$$

**Part 2: The model.**

$$C_A(u) = \\min\\left\\{40\\sqrt{u},\\;400\\right\\} \\tag{1}$$

$$C_B(u) = 5u \\tag{2}$$

**Part 3: Solve.**

**1.** The invoice fixes Plan A's coefficient:

$$6a = 240 \\;\\Rightarrow\\; a = 40$$

**2.** Locate the crossing of the uncapped schedules:

$$40\\sqrt{u} = 5u \\;\\Rightarrow\\; \\sqrt{u} = 8 \\;\\Rightarrow\\; u = 64, \\qquad \\text{both bill } 320$$

**3.** Order the plans on each side of the crossing:

$$u < 64 \\;\\Rightarrow\\; C_B < C_A, \\qquad 64 < u \\;\\Rightarrow\\; C_A < C_B$$

**4.** Convert the cap into a ticket volume:

$$40\\sqrt{u} = 400 \\;\\Rightarrow\\; u = 100$$

Beyond $100$ tickets Plan A is flat at $400$ while Plan B keeps climbing, so Plan A's advantage widens without limit.

**5.** Unit costs separate the two shapes:

$$\\frac{C_A(u)}{u} = 40u^{-0.5} \\text{ (falling)}, \\qquad \\frac{C_B(u)}{u} = 5 \\text{ (constant)}$$

**Answer.** $a = 40$ | crossing at $u = 64$ costing $320$ | cap binds from $u = 100$`,
  },
  {
    id: `math-8-17`,
    case_id: `MATH 8.17`,
    title: `An Eighty Percent Learning Curve Meeting a Materials Floor`,
    context: `Unit cost on a new assembly line follows the learning curve $c(N)=c_1 N^{-b}$, where $N>0$ is cumulative output. Every doubling of cumulative output multiplies unit cost by $0.8$, and the first unit cost $1000$. Materials alone cost $400$ per unit, so the curve cannot describe costs below that floor. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After three successive doublings, the modelled unit cost is $512$, a total cut of $48.8\\%$ from the first unit.`,
      `The exponent of the learning curve is $-0.8$.`,
      `After $8$ units the unit cost is $500$.`,
      `The materials floor binds from about $12$ units onwards.`,
      `Quadrupling cumulative output halves the unit cost.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

Three successive doublings apply the $0.8$ survival factor three times, not once. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$c(8)=1000(0.8)^3=1000(0.512)=512$$

The relevant comparison can then be written as

$$\\frac{1000-512}{1000}=0.488=48.8\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The modelled cost is $512$, which is a cumulative cut of $48.8\\%$. Therefore the statement is True.`,
      `**B.** → False

This claim mistakes the learning multiplier for the exponent. Solving $2^{-b}=0.8$ gives $b\\approx0.3219$, so the exponent is about $-0.322$, not $-0.8$.

The two numbers describe different things: $0.8$ is what the cost is multiplied by when output doubles, while the exponent governs every other scale factor. An exponent of $-0.8$ would mean a doubling multiplied cost by $2^{-0.8}\\approx0.574$ — a far steeper curve than the one observed.

Take logarithms of the doubling rule:

$$2^{-b} = 0.8 \\quad \\Rightarrow \\quad -b\\ln 2 = \\ln 0.8$$

Solve for the exponent:

$$b = \\frac{-\\ln 0.8}{\\ln 2} = \\frac{0.2231}{0.6931} \\approx 0.3219$$

$$c(N) = 1000\\,N^{-0.3219}$$

The exponent is about $-0.322$, so the statement is False.`,
      `**C.** → False

This claim lands near, but not on, the true value. Eight units is three doublings from the first, so the cost is $1000 \\times 0.8^{3} = 512$, twelve above the claimed figure.

Working through doublings is the reliable route here because $8=2^{3}$, so no logarithms are needed. The claim's $500$ looks like a rounded half of the first-unit cost, and rounding a learning curve to "about half after eight units" is exactly the kind of shortcut that misstates a floor calculation later.

Count the doublings from the first unit:

$$1 \\to 2 \\to 4 \\to 8 \\quad \\text{is three doublings}$$

Apply the multiplier three times:

$$c(8) = 1000 \\times 0.8^{3} = 1000 \\times 0.512 = 512$$

Confirm with the exponent form:

$$1000 \\times 8^{-0.3219} = 1000 \\times e^{-0.3219 \\times 2.0794} \\approx 512$$

The unit cost is $512$, not $500$, so the statement is False.`,
      `**D.** → False

This claim places the floor far too early. Solving $1000N^{-0.3219}=400$ gives about $17.2$ units, so the curve stays above the floor through the seventeenth unit.

The gap between $12$ and $17$ matters because the curve is flattening: between the eighth unit and the sixteenth the cost falls only from $512$ to about $410$, so a rough guess made by extrapolating the early, steep part of the curve arrives at the floor too soon.

Set the curve equal to the floor:

$$1000\\,N^{-0.3219} = 400 \\quad \\Rightarrow \\quad N^{0.3219} = 2.5$$

Solve with logarithms:

$$N = 2.5^{1/0.3219} = e^{0.9163/0.3219} = e^{2.8465} \\approx 17.2$$

Bracket the answer with two doublings:

$$c(16) = 1000 \\times 0.8^{4} = 409.6 > 400, \\qquad c(32) = 327.7 < 400$$

The floor binds from about $17$ units, not $12$, so the statement is False.`,
      `**E.** → False

This claim compounds the learning rule incorrectly. Quadrupling is two doublings, so the cost is multiplied by $0.8^{2}=0.64$ — a cut of $36\\%$, not $50\\%$.

Halving would require a learning multiplier of about $0.707$ per doubling, since $0.707^{2}=0.5$. The claim implicitly adds the two $20\\%$ cuts into a $40\\%$ cut and then rounds it up; percentage reductions compound multiplicatively, so two $20\\%$ cuts leave $64\\%$, not $60\\%$.

Express quadrupling as two doublings:

$$\\frac{c(4N)}{c(N)} = \\left(0.8\\right)^{2} = 0.64$$

Convert to a percentage cut:

$$1 - 0.64 = 0.36 = 36\\%$$

Check on concrete volumes:

$$c(2) = 800, \\qquad c(8) = 512, \\qquad \\frac{512}{800} = 0.64$$

Quadrupling removes about a third of the cost, not half, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `Unit cost follows $c(N)=c_1N^{-b}$ with a doubling multiplier of $0.8$, a first-unit cost of $1000$, and a materials floor at $400$.

**Part 1: Building the model.**

Let $N$ = cumulative output and $c(N)$ = unit cost. The learning rule carries the exponent, the first unit carries the coefficient, and the floor is a level that the curve eventually crosses from above.

**1. Translate: the learning rule.** Scale factors are free of the coefficient:

$$\\frac{c(2N)}{c(N)} = 2^{-b} = 0.8$$

**2. Translate: the first unit.** At $N=1$ the shape factor is $1$:

$$c_1 = 1000$$

**Part 2: The model.**

$$2^{-b} = 0.8 \\tag{1}$$

$$c(N) = 1000\\,N^{-b} \\tag{2}$$

**Part 3: Solve.**

**1.** Logarithms turn (1) into the exponent:

$$b = \\frac{-\\ln 0.8}{\\ln 2} \\approx 0.3219, \\qquad c(N) = 1000N^{-0.3219}$$

**2.** At powers of two the curve can be walked doubling by doubling:

$$c(2) = 800, \\quad c(4) = 640, \\quad c(8) = 512, \\quad c(16) = 409.6$$

**3.** Scale factors compound multiplicatively, not additively:

$$0.8^{2} = 0.64 \\;(-36\\%), \\qquad 0.8^{3} = 0.512$$

**4.** Invert the curve at the materials floor:

$$N^{0.3219} = 2.5 \\;\\Rightarrow\\; N = 2.5^{1/0.3219} \\approx 17.2$$

**5.** Beyond about $17$ units the curve would predict costs below materials, so the model has to be read as flat at $400$ from there on.

**Answer.** $b \\approx 0.322$ | $c(N) = 1000N^{-0.322}$ | floor reached at $N \\approx 17.2$ units`,
  },
  {
    id: `math-8-18`,
    case_id: `MATH 8.18`,
    title: `Advertising Revenue Against a Proportional Platform Fee`,
    context: `A merchant's sales revenue from an advertising spend $x>0$ follows $R(x)=90 x^{0.5}$, while the platform charges a fee of $F(x)=6x$ on the same spend. The merchant judges a campaign by the net gain $R(x)-F(x)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The net gain is zero at a spend of $225$.`,
      `The net gain is positive at every spend above $225$.`,
      `Doubling the spend doubles revenue.`,
      `At a spend of $100$ the net gain is $300$.`,
      `Revenue per unit of spend rises as the spend rises.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

This claim locates the break-even spend. Setting $90\\sqrt{x}=6x$ and dividing by $\\sqrt{x}$ gives $\\sqrt{x}=15$, so revenue and fee coincide at a spend of $225$, both equal to $1350$.

Dividing by $\\sqrt{x}$ discards the root at $x=0$, which is legitimate on the stated domain and also uninteresting: a campaign with no spend trivially breaks even. The economically meaningful break-even is the second one.

Set revenue equal to the fee:

$$90\\sqrt{x} = 6x \\quad \\Rightarrow \\quad 90 = 6\\sqrt{x} \\quad \\Rightarrow \\quad \\sqrt{x} = 15$$

$$x = 15^{2} = 225$$

Check both sides at that spend:

$$R(225) = 90(15) = 1350, \\qquad F(225) = 6(225) = 1350$$

The net gain is zero at a spend of $225$, so the statement is True.`,
      `**B.** → False

This claim gets the sign backwards on the far side of break-even. Above $225$ the fee, which grows proportionally, outruns revenue, which grows only as a square root, so the net gain is negative there.

The comparison is easiest through the same division used in part A: the net gain is positive exactly when $90>6\\sqrt{x}$, that is when $x<225$. Break-even marks the end of the profitable range, not the beginning of it — the opposite of what the claim assumes.

Write the net gain and factor it:

$$R(x) - F(x) = 90\\sqrt{x} - 6x = 6\\sqrt{x}\\left(15 - \\sqrt{x}\\right)$$

The first factor is positive, so the sign depends on the bracket:

$$15 - \\sqrt{x} > 0 \\quad \\Longleftrightarrow \\quad x < 225$$

Test a spend beyond break-even:

$$R(400) - F(400) = 90(20) - 2400 = 1800 - 2400 = -600$$

The net gain is negative above $225$, so the statement is False.`,
      `**C.** → False

This claim applies a linear rule to a square-root law. Doubling the spend multiplies revenue by $2^{0.5}\\approx1.414$, so revenue rises by about $41\\%$, while the fee — which really is proportional — doubles exactly.

That mismatch is the entire economics of the case: the fee scales with exponent $1$ and revenue with exponent $0.5$, so any large enough campaign is eventually loss-making regardless of the constants involved.

Form the revenue scale factor:

$$\\frac{R(2x)}{R(x)} = 2^{0.5} \\approx 1.4142$$

Compare with the fee's scale factor:

$$\\frac{F(2x)}{F(x)} = 2$$

Check at a concrete spend:

$$R(100) = 900, \\qquad R(200) \\approx 1272.8$$

Revenue grows by about $41\\%$, not $100\\%$, so the statement is False.`,
      `**D.** → True

This claim evaluates the net gain inside the profitable range. Revenue is $900$, the fee is $600$, and the difference is exactly $300$.

The spend of $100$ sits well below break-even, so a positive result is expected; what the arithmetic adds is the size. It is worth noting that this is close to the best the campaign can do — at a spend of $225$ the net gain has fallen back to zero, so the profitable window is narrow.

Evaluate both sides at the stated spend:

$$R(100) = 90\\sqrt{100} = 90(10) = 900$$

$$F(100) = 6(100) = 600$$

Take the difference:

$$900 - 600 = 300$$

The net gain is $300$, so the statement is True.`,
      `**E.** → False

This claim asks about the average return on spend. Dividing revenue by spend gives $90x^{-0.5}$, a power function with a negative exponent, so the return per euro spent falls as the campaign grows.

This is the mirror image of part C. Revenue keeps increasing in absolute terms, but each additional euro of spend brings back less than the one before, and the falling average eventually drops below the constant fee rate of $6$ — precisely at the break-even spend.

Divide revenue by spend:

$$\\frac{R(x)}{x} = \\frac{90x^{0.5}}{x} = 90x^{-0.5}$$

Evaluate at three spends and compare with the fee rate:

$$\\frac{R(100)}{100} = 9, \\qquad \\frac{R(225)}{225} = 6, \\qquad \\frac{R(400)}{400} = 4.5$$

The average return falls from $9$ to $4.5$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Revenue is $R(x)=90x^{0.5}$ and the platform fee is $F(x)=6x$ on an advertising spend $x>0$.

**Part 1: Building the model.**

Let $x$ = advertising spend, $R$ = sales revenue, $F$ = platform fee. Both constants are given, so the work is comparison rather than calibration: one law has exponent $0.5$ and the other exponent $1$, and their difference decides the campaign.

**1. Translate: the net gain.**

$$\\Pi(x) = R(x) - F(x) = 90x^{0.5} - 6x$$

**2. Translate: break-even.** The two curves meet where the net gain vanishes:

$$90\\sqrt{x} = 6x$$

**Part 2: The model.**

$$\\Pi(x) = 90\\sqrt{x} - 6x \\tag{1}$$

$$\\Pi(x) = 6\\sqrt{x}\\left(15 - \\sqrt{x}\\right) \\tag{2}$$

**Part 3: Solve.**

**1.** Solve the break-even condition on $x>0$:

$$\\sqrt{x} = 15 \\;\\Rightarrow\\; x = 225, \\qquad R = F = 1350$$

**2.** The factored form (2) settles the sign everywhere:

$$0 < x < 225 \\;\\Rightarrow\\; \\Pi > 0, \\qquad x > 225 \\;\\Rightarrow\\; \\Pi < 0$$

**3.** Levels inside and outside the profitable window:

$$\\Pi(100) = 900 - 600 = 300, \\qquad \\Pi(400) = 1800 - 2400 = -600$$

**4.** The two laws scale differently, which is why the fee eventually wins:

$$\\frac{R(2x)}{R(x)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{F(2x)}{F(x)} = 2$$

**5.** The average return on spend falls to the fee rate exactly at break-even:

$$\\frac{R(x)}{x} = 90x^{-0.5}, \\qquad 9 \\text{ at } x=100, \\quad 6 \\text{ at } x=225, \\quad 4.5 \\text{ at } x=400$$

**Answer.** break-even spend $x = 225$ | $R = F = 1350$ | net gain positive only on $(0,225)$`,
  },
  {
    id: `math-8-19`,
    case_id: `MATH 8.19`,
    title: `Calibrating a Two-Stage Production Chain`,
    context: `A plant runs two stages. Labour $L>0$ hours yields processed material $m(L)=A L^{0.5}$ tonnes, and material is converted into finished goods by $g(m)=B m^{1.5}$ units. Two records are available: $100$ labour hours yielded $40$ tonnes of material, and a run on $9$ tonnes of material produced $54$ finished units. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The material stage is $m(L)=4L^{0.5}$.`,
      `Finished output as a function of labour is $g(L)=16L^{0.75}$.`,
      `Doubling labour hours raises finished output by about $68\\%$.`,
      `Producing $432$ finished units requires $81$ labour hours.`,
      `Finished output per labour hour falls as labour rises.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim calibrates the first stage only. The labour record gives $A\\sqrt{100}=40$, so $A=4$ and the material law is $m(L)=4L^{0.5}$.

Keeping the two records apart is the discipline this task rewards: the labour record speaks only about the first stage, and the material record only about the second. Mixing them — for instance dividing $54$ by $100$ — would produce a coefficient that belongs to neither stage.

Use the labour record:

$$A\\sqrt{100} = 40 \\quad \\Rightarrow \\quad 10A = 40 \\quad \\Rightarrow \\quad A = 4$$

$$m(L) = 4L^{0.5}$$

Sanity-check a second labour level:

$$m(400) = 4(20) = 80 \\text{ tonnes}$$

The first stage is $4L^{0.5}$, so the statement is True.`,
      `**B.** → True

This claim asks for the composed law. The material record gives $B=2$, and substituting the first stage into the second multiplies the exponents to $0.75$ and the constants to $16$.

The step that carries the risk is raising the whole first stage to the power $1.5$, coefficient included: $\\left(4L^{0.5}\\right)^{1.5}$ contributes $4^{1.5}=8$ as well as $L^{0.75}$. Forgetting to raise the coefficient would leave $2 \\times 4 = 8$ instead of $16$ and halve every prediction.

Calibrate the second stage:

$$B(9)^{1.5} = 54 \\quad \\Rightarrow \\quad 27B = 54 \\quad \\Rightarrow \\quad B = 2$$

Compose the two stages:

$$g(L) = 2\\left(4L^{0.5}\\right)^{1.5} = 2 \\times 4^{1.5} \\times L^{0.5 \\times 1.5}$$

$$g(L) = 2 \\times 8 \\times L^{0.75} = 16L^{0.75}$$

The composed law is $16L^{0.75}$, so the statement is True.`,
      `**C.** → True

This claim is a scale-factor question on the composed law. Its exponent is $0.75$, so doubling labour multiplies finished output by $2^{0.75}\\approx1.682$, a rise of about $68\\%$.

The composed exponent is what matters, not either stage's exponent on its own: material rises by $41\\%$ and the conversion stage would amplify by $1.5$ in the exponent, and only after multiplying $0.5 \\times 1.5$ does the $0.75$ appear. Checking with the stage-by-stage route is a good habit — $1.414^{1.5}\\approx1.682$ as well.

Form the scale factor for the composed law:

$$\\frac{g(2L)}{g(L)} = 2^{0.75} = 2^{1/2} \\times 2^{1/4} \\approx 1.4142 \\times 1.1892 \\approx 1.6818$$

Verify through the stages:

$$m \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{1.5} \\approx 1.682$$

Finished output rises by about $68\\%$, so the statement is True.`,
      `**D.** → True

This claim inverts the composed law. Solving $16L^{0.75}=432$ gives $L^{0.75}=27$, and raising to the power $4/3$ returns exactly $81$ hours.

The numbers are chosen so the inverse is exact: $27=3^{3}$, so $27^{4/3}=3^{4}=81$. Inverting a $0.75$ exponent always means raising to $4/3$, which magnifies the target ratio — a point that matters because the required labour grows much faster than the output target.

Set the composed law equal to the target:

$$16L^{0.75} = 432 \\quad \\Rightarrow \\quad L^{0.75} = 27$$

Raise both sides to the reciprocal power:

$$L = 27^{4/3} = \\left(3^{3}\\right)^{4/3} = 3^{4} = 81$$

Confirm by substitution:

$$g(81) = 16 \\times 81^{0.75} = 16 \\times 27 = 432$$

The target needs $81$ labour hours, so the statement is True.`,
      `**E.** → True

This claim concerns the average product of labour. Dividing the composed law by $L$ gives $16L^{-0.25}$, a power function with a negative exponent, so output per hour declines as the plant runs longer shifts.

The composed exponent $0.75$ is below $1$, which is exactly the condition for a falling average: total output keeps rising, but not fast enough to keep up with the hours being added. Had the composition produced an exponent above $1$, the same division would have left a positive exponent and a rising average.

Divide the composed law by labour:

$$\\frac{g(L)}{L} = \\frac{16L^{0.75}}{L} = 16L^{-0.25}$$

Evaluate at two labour levels:

$$\\frac{g(16)}{16} = \\frac{16 \\times 8}{16} = 8, \\qquad \\frac{g(81)}{81} = \\frac{432}{81} \\approx 5.33$$

Output per hour falls from $8$ to about $5.33$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 19,
    solution_overview: `Stage one gives $m(L)=AL^{0.5}$ tonnes from $L$ labour hours, stage two gives $g(m)=Bm^{1.5}$ finished units. Records: $m(100)=40$ and $g(9)=54$.

**Part 1: Building the model.**

Let $L$ = labour hours, $m$ = tonnes of material, $g$ = finished units. Each record calibrates one stage, and the two stages then have to be composed — an operation that multiplies exponents and raises the inner coefficient to the outer power.

**1. Translate: the labour record.**

$$A\\sqrt{100} = 40$$

**2. Translate: the material record.**

$$B(9)^{1.5} = 54$$

**Part 2: The model.**

$$m(L) = 4L^{0.5} \\tag{1}$$

$$g(m) = 2m^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The two records give the two coefficients:

$$A = 4, \\qquad B = 2$$

**2.** Compose, raising the inner coefficient to the outer power:

$$g(L) = 2\\left(4L^{0.5}\\right)^{1.5} = 2 \\times 8 \\times L^{0.75} = 16L^{0.75}$$

**3.** The composed exponent drives every scale factor:

$$\\frac{g(2L)}{g(L)} = 2^{0.75} \\approx 1.682 \\quad (+68\\%)$$

**4.** Invert with the reciprocal exponent $4/3$:

$$L = \\left(\\frac{g}{16}\\right)^{4/3}, \\qquad g = 432 \\;\\Rightarrow\\; L = 27^{4/3} = 81$$

**5.** Because the composed exponent is below $1$, the average product falls:

$$\\frac{g(L)}{L} = 16L^{-0.25}, \\qquad 8 \\text{ at } L=16, \\qquad 5.33 \\text{ at } L=81$$

**Answer.** $A = 4$ | $B = 2$ | $g(L) = 16L^{0.75}$ | $432$ units need $81$ labour hours`,
  },
  {
    id: `math-8-20`,
    case_id: `MATH 8.20`,
    title: `Calibrated Demand, Derived Revenue, and a Fixed Charge`,
    context: `A niche publisher faces demand $q(p)=A p^{-1.5}$ copies per month at a price $p>0$, and a price of $4$ sells $250$ copies. Revenue is $R=pq$, and the operation carries a fixed monthly charge of $400$ with no other costs. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue falls as the price rises.`,
      `Revenue is a power function of price with exponent $-0.5$.`,
      `At a price of $25$, monthly revenue is $400$.`,
      `The fixed charge is covered only at prices below $16$.`,
      `Doubling the price halves revenue.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the direction of revenue. Multiplying price by demand leaves $R(p)=Ap^{-0.5}$, whose exponent is negative, so revenue declines as the price climbs.

The sign of the revenue exponent is decided by whether demand elasticity is below $-1$. Here it is $-1.5$, so the loss of copies outweighs the higher price per copy; if elasticity had been between $-1$ and $0$, revenue would have risen instead.

Recover the demand coefficient:

$$A(4)^{-1.5} = 250 \\quad \\Rightarrow \\quad \\frac{A}{8} = 250 \\quad \\Rightarrow \\quad A = 2000$$

Build revenue by adding $1$ to the exponent:

$$R(p) = p \\times 2000p^{-1.5} = 2000p^{-0.5}$$

Compare two prices:

$$R(4) = \\frac{2000}{2} = 1000, \\qquad R(9) = \\frac{2000}{3} \\approx 666.7$$

Revenue falls as price rises, so the statement is True.`,
      `**B.** → True

This claim describes the structure of revenue. Multiplying a power function by $p$ raises its exponent by exactly $1$, so demand's $-1.5$ becomes revenue's $-0.5$.

This is a general rule worth carrying: revenue built on an isoelastic demand curve is itself isoelastic, with exponent one greater. It explains at a glance why elasticity $-1$ is the knife edge — the revenue exponent is then $0$, a constant.

Multiply demand by price:

$$R(p) = p \\cdot 2000p^{-1.5} = 2000\\,p^{-1.5+1} = 2000p^{-0.5}$$

Check that the scale factor behaves like a power function:

$$\\frac{R(4p)}{R(p)} = 4^{-0.5} = \\frac{1}{2}$$

Revenue is a power function with exponent $-0.5$, so the statement is True.`,
      `**C.** → True

The observation first calibrates demand, and multiplying by price then produces the revenue law used at the new price. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$250=A(4)^{-1.5}=\\frac{A}{8} \\quad\\Rightarrow\\quad A=2000$$

The relevant comparison can then be written as

$$R(25)=2000(25)^{-0.5}=\\frac{2000}{5}=400$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Revenue at the different price is exactly $400$. Therefore the statement is True.`,
      `**D.** → False

This claim gets the shape of the answer right and the threshold wrong. Revenue covers the $400$ charge whenever $2000p^{-0.5}\\ge400$, which holds for prices below $25$, not $16$.

The number $16$ is what appears if the inversion is done with the demand exponent instead of the revenue exponent, or if $2000/400=5$ is squared incorrectly. Since inverting a $-0.5$ exponent means squaring the ratio, the correct threshold is $5^{2}=25$.

Set revenue equal to the fixed charge:

$$2000p^{-0.5} = 400 \\quad \\Rightarrow \\quad p^{0.5} = \\frac{2000}{400} = 5$$

Square both sides:

$$p = 25$$

Check either side of the threshold:

$$R(16) = \\frac{2000}{4} = 500 > 400, \\qquad R(36) = \\frac{2000}{6} \\approx 333 < 400$$

Prices up to $25$ still cover the charge, so the statement is False.`,
      `**E.** → False

This claim overstates the effect of a price rise. Revenue's exponent is $-0.5$, so doubling the price multiplies revenue by $2^{-0.5}\\approx0.707$ — a fall of about $29\\%$, not $50\\%$.

Halving revenue would need the price to *quadruple*, since $4^{-0.5}=0.5$. Confusing the two is the same error as reading demand's exponent, $-1.5$, into the revenue law; each stage has its own exponent and its own scale factor.

Apply the revenue scale factor:

$$\\frac{R(2p)}{R(p)} = 2^{-0.5} \\approx 0.7071$$

Find what really halves revenue:

$$k^{-0.5} = 0.5 \\quad \\Rightarrow \\quad k = 4$$

Check with levels:

$$R(4) = 1000, \\qquad R(8) = \\frac{2000}{2.828} \\approx 707, \\qquad R(16) = 500$$

Doubling the price costs about $29\\%$ of revenue, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `Demand is $q(p)=Ap^{-1.5}$ with $q(4)=250$; revenue is $R=pq$; a fixed charge of $400$ must be covered.

**Part 1: Building the model.**

Let $p$ = price, $q$ = copies sold, $R$ = revenue. The exponent is given by the isoelastic form, one observation pins the coefficient, and revenue is a derived power function whose exponent is one higher than demand's.

**1. Translate: the observed price-quantity pair.**

$$A(4)^{-1.5} = 250, \\qquad 4^{-1.5} = \\frac{1}{8}$$

**2. Translate: revenue and the fixed charge.**

$$R(p) = p \\cdot Ap^{-1.5}, \\qquad R(p) \\ge 400$$

**Part 2: The model.**

$$q(p) = 2000\\,p^{-1.5} \\tag{1}$$

$$R(p) = 2000\\,p^{-0.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A = 250 \\times 8 = 2000$$

**2.** Multiplying by $p$ raises the exponent by one, so revenue is still isoelastic:

$$-1.5 + 1 = -0.5$$

**3.** Levels along the revenue curve:

$$R(4) = 1000, \\qquad R(16) = 500, \\qquad R(36) \\approx 333$$

**4.** Invert (2) at the fixed charge by squaring the ratio:

$$p^{0.5} = \\frac{2000}{400} = 5 \\;\\Rightarrow\\; p = 25$$

**5.** Scale factors on the revenue curve are gentler than on demand:

$$2^{-0.5} \\approx 0.707 \\;(-29\\%), \\qquad 4^{-0.5} = 0.5$$

**Answer.** $A = 2000$ | $q(p) = 2000p^{-1.5}$ | $R(p) = 2000p^{-0.5}$ | charge covered for $p < 25$`,
  },
  {
    id: `math-8-21`,
    case_id: `MATH 8.21`,
    title: `Packing Output Recovered From a Shift Extension`,
    context: `A packing station's output follows $N(h)=A h^{0.5}$ items, where $h>0$ is the length of the shift in hours. The shift log never records the coefficient: it notes only that extending a shift from $4$ to $9$ hours added exactly $30$ items to the count. A customer order of $150$ items has to be filled inside a single shift. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the packing law is $30$.`,
      `A nine-hour shift packs $135$ items.`,
      `Doubling the shift length doubles the number of items packed.`,
      `The $150$-item order can be filled inside a $20$-hour shift.`,
      `Items packed per hour rises as the shift lengthens.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the scale factor, which the log never states. It has to be rebuilt from the recorded gain of $30$ items between two shift lengths, and that reconstruction returns exactly $30$.

A common mistake is to read $30$ as an output or as an hourly rate and divide it by one of the shift lengths, giving $30/9$ or $30/4$. The log reports a *difference* between two shifts, so the coefficient multiplies the difference of the two shape factors, not a single one.

Both shift lengths are perfect squares, so the shape factors are whole numbers:

$$9^{0.5} = 3, \\qquad 4^{0.5} = 2$$

The recorded gain therefore fixes the coefficient:

$$N(9) - N(4) = A(3 - 2) = A = 30$$

The difference of the shape factors happens to be $1$, which is why the recorded gain and the coefficient coincide here. Check the law against the log:

$$N(h) = 30\\sqrt{h}, \\qquad N(4) = 60, \\qquad N(9) = 90$$

The two shifts differ by $30$ items as recorded, so the statement is True.`,
      `**B.** → False

This claim evaluates the law at the longer logged shift. With $A=30$ the nine-hour shift packs $90$ items, not $135$.

The figure $135$ is what linear scaling produces: the four-hour shift packs $60$ items, and stretching that in the ratio $9/4$ gives $135$. Output is not proportional to shift length here. The correct scale factor is the *square root* of the length ratio, because the exponent is $0.5$.

Apply the scale factor to the four-hour shift:

$$\\frac{N(9)}{N(4)} = \\left(\\frac{9}{4}\\right)^{0.5} = \\frac{3}{2}$$

$$N(9) = \\frac{3}{2}\\cdot 60 = 90$$

Evaluate the law directly as a check:

$$N(9) = 30\\sqrt{9} = 30 \\cdot 3 = 90$$

The nine-hour shift packs $90$ items, so the statement is False.`,
      `**C.** → False

This claim applies a scale factor, so only the exponent matters. With exponent $0.5$, doubling the shift length multiplies output by $\\sqrt{2}\\approx 1.41$, not by $2$.

The reasoning behind the claim treats packing as a steady flow, where twice the time gives twice the work. The model says otherwise: the exponent below $1$ encodes fatigue and setup effects, so each extra hour adds less than the one before it.

Take the ratio at a general shift length; the coefficient cancels:

$$\\frac{N(2h)}{N(h)} = \\frac{A(2h)^{0.5}}{Ah^{0.5}} = 2^{0.5} \\approx 1.414$$

Check on the logged four-hour shift:

$$N(4) = 60, \\qquad N(8) = 30\\sqrt{8} \\approx 84.9$$

Eight hours pack about $85$ items rather than $120$, so the statement is False.`,
      `**D.** → False

This claim tests the order against a shift-length limit, so the law has to be inverted. A $20$-hour shift packs about $134$ items, which leaves the order short; filling $150$ items needs $25$ hours.

A common mistake is to extrapolate from the logged shifts: nine hours gave $90$ items, so twenty hours "should" comfortably clear $150$. Under the square-root law, more than doubling the shift adds only about $50\\%$ more output, and that is not enough.

Evaluate the law at the limit:

$$N(20) = 30\\sqrt{20} \\approx 30 \\cdot 4.472 \\approx 134.2$$

Invert the law at the order size to find what the order actually needs:

$$30\\sqrt{h} = 150 \\quad \\Rightarrow \\quad \\sqrt{h} = 5 \\quad \\Rightarrow \\quad h = 25$$

The order requires a $25$-hour shift, five hours more than the limit allows, so the statement is False.`,
      `**E.** → False

This claim is about the average product $N(h)/h$, not about total output. Dividing the law by $h$ leaves a negative exponent, so the hourly rate falls as the shift lengthens.

The confusion comes from watching the total: output does keep rising with every extra hour, and it is easy to slide from "more items overall" to "more items per hour". Those are different quantities, and with an exponent below $1$ they move in opposite directions.

Form the average product by subtracting exponents:

$$\\frac{N(h)}{h} = \\frac{30h^{0.5}}{h} = 30h^{-0.5}$$

The exponent $-0.5$ is negative, so the rate decays. Compare the logged shifts and the order-sized one:

$$\\frac{N(4)}{4} = 15, \\qquad \\frac{N(9)}{9} = 10, \\qquad \\frac{N(25)}{25} = 6$$

The hourly rate falls from $15$ to $6$ items, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 21,
    solution_overview: `Packing output follows $N(h)=Ah^{0.5}$ items on a shift of $h>0$ hours. The log records only that extending a shift from $4$ to $9$ hours added $30$ items, and an order of $150$ items must fit in one shift.

**Part 1: Building the model.**

Let $h$ = shift length in hours and $N(h)$ = items packed. The exponent is given, so one fact is enough to fix the coefficient — but that fact is a difference of two outputs, not a single output.

**1. Translate: the recorded extension.** Write both shifts through the law and subtract:

$$A(9)^{0.5} - A(4)^{0.5} = 30$$

**2. Translate: the order.** The order sets a target output to invert:

$$N(h) = 150$$

**Part 2: The model.**

$$A(3 - 2) = 30 \\tag{1}$$

$$Ah^{0.5} = 150 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$A = 30, \\qquad N(h) = 30\\sqrt{h}$$

**2.** Check the law against the logged shifts:

$$N(4) = 60, \\qquad N(9) = 90, \\qquad 90 - 60 = 30 \\;\\checkmark$$

**3.** Scale factors depend on the exponent alone:

$$\\frac{N(2h)}{N(h)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{N(9)}{N(4)} = \\left(\\tfrac{9}{4}\\right)^{0.5} = 1.5$$

**4.** Equation (2) inverts at the order size, and the $20$-hour limit falls short:

$$\\sqrt{h} = 5 \\;\\Rightarrow\\; h = 25, \\qquad N(20) \\approx 134.2 < 150$$

**5.** The hourly rate is the law divided by $h$, so it decays:

$$\\frac{N(h)}{h} = 30h^{-0.5}: \\quad 15 \\text{ at } h=4, \\quad 10 \\text{ at } h=9, \\quad 6 \\text{ at } h=25$$

**Answer.** $A = 30$ | $N(h) = 30\\sqrt{h}$ | $N(9) = 90$ | the $150$-item order needs $h = 25$ hours`,
  },
  {
    id: `math-8-22`,
    case_id: `MATH 8.22`,
    title: `Drag and Absorbed Power on a Wind-Tunnel Rig`,
    context: `Aerodynamic drag on a test rig follows $F(v)=A v^{r}$ newtons, where $v>0$ is the airspeed in metres per second; neither constant is supplied by the manufacturer. Two wind-tunnel runs are on file: $160$ N at $20$ m/s and $640$ N at $40$ m/s. The rig also reports the power absorbed, $P=F\\cdot v$ watts, and its mounting is rated to $1000$ N. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The drag law is $F(v)=0.4v^{2}$.`,
      `The mounting's $1000$ N rating is first reached at a speed above $55$ m/s.`,
      `The absorbed power is a power function of speed with exponent $3$.`,
      `Doubling the airspeed doubles the absorbed power.`,
      `At $50$ m/s the rig absorbs $25$ kW.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for both constants, and two runs are exactly what is needed: their ratio carries the exponent, and either run then carries the level. The two facts give $r=2$ and $A=0.4$.

A common mistake is to work with the *difference* of the runs, $640-160=480$ N over $20$ m/s, and read off a slope of $24$. Differences describe a straight line; a power law is pinned down by ratios, because only in a ratio does the coefficient cancel.

Take the ratio of the two runs and note that the speeds also stand in a fixed ratio:

$$\\frac{F(40)}{F(20)} = \\frac{A(40)^{r}}{A(20)^{r}} = 2^{r} = \\frac{640}{160} = 4 \\quad \\Rightarrow \\quad r = 2$$

Substitute the exponent back into either run to fix the coefficient:

$$A(20)^{2} = 160 \\quad \\Rightarrow \\quad 400A = 160 \\quad \\Rightarrow \\quad A = 0.4$$

Verify against the run not used for the level:

$$F(40) = 0.4(1600) = 640 \\;\\checkmark$$

Both runs sit on $F(v)=0.4v^{2}$, so the statement is True.`,
      `**B.** → False

This claim asks where drag reaches the rating, so the law has to be inverted. Solving $0.4v^{2}=1000$ puts the rating at exactly $50$ m/s, below the speed in the claim.

The figure in the claim is what linear extrapolation from the faster run produces: $640$ N at $40$ m/s suggests $40 \\cdot 1000/640 = 62.5$ m/s, and any speed of that kind clears $55$. Because drag grows with the square of the speed, the remaining $360$ N of headroom is consumed by only $10$ m/s.

Invert the law at the rating:

$$0.4v^{2} = 1000 \\quad \\Rightarrow \\quad v^{2} = 2500 \\quad \\Rightarrow \\quad v = 50$$

Confirm with the scale factor from the logged run:

$$F(50) = F(40)\\left(\\frac{50}{40}\\right)^{2} = 640 \\cdot 1.5625 = 1000 \\;\\checkmark$$

The rating is reached at $50$ m/s, not above $55$, so the statement is False.`,
      `**C.** → True

This claim is about the product $P=F\\cdot v$. Multiplying a power function by $v$ adds $1$ to its exponent, so absorbed power follows a cubic law in the airspeed.

The instinct is to expect power to inherit the drag exponent, since the two quantities are measured on the same runs and rise together. Multiplying by the speed is itself a power of $v$, and the exponent rules add rather than leave the exponent alone.

Multiply the drag law by the speed and add exponents:

$$P(v) = F(v)\\cdot v = 0.4v^{2}\\cdot v^{1} = 0.4v^{3}$$

Check the shape on the logged runs:

$$P(20) = 0.4(8000) = 3200 \\text{ W}, \\qquad P(40) = 0.4(64000) = 25600 \\text{ W}$$

$$\\frac{P(40)}{P(20)} = 8 = 2^{3}$$

Absorbed power is $0.4v^{3}$, a power function with exponent $3$, so the statement is True.`,
      `**D.** → False

This claim applies a scale factor to the power law, where the exponent is $3$. Doubling the airspeed multiplies absorbed power by $2^{3}=8$, not by $2$.

Two separate slips lead to the claim: reading power as proportional to speed, and — for anyone who noticed the squared drag — settling for a factor of $4$. Neither exponent applies. Power carries drag's exponent plus one, which is why fan and engine sizing punishes speed so heavily.

Take the ratio of the power law at doubled speed:

$$\\frac{P(2v)}{P(v)} = \\frac{0.4(2v)^{3}}{0.4v^{3}} = 2^{3} = 8$$

Read the same factor off the logged runs:

$$\\frac{P(40)}{P(20)} = \\frac{25600}{3200} = 8$$

Absorbed power multiplies by $8$, not by $2$, so the statement is False.`,
      `**E.** → False

This claim evaluates the power law at the mounting's limiting speed. Drag there is exactly $1000$ N, and multiplying by $50$ m/s gives $50$ kW, twice the figure claimed.

The stated value is what appears if the factor $\\tfrac{1}{2}$ from the kinetic-energy formula is carried into a power calculation where it does not belong. Absorbed power is force times speed, with no halving: the half-factor belongs to the energy stored in moving air, not to the rate at which the rig does work against drag.

Evaluate the power law directly:

$$P(50) = 0.4(50)^{3} = 0.4 \\cdot 125000 = 50000 \\text{ W} = 50 \\text{ kW}$$

Cross-check through the drag at that speed:

$$P(50) = F(50)\\cdot 50 = 1000 \\cdot 50 = 50000 \\text{ W}$$

The rig absorbs $50$ kW rather than $25$ kW, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 22,
    solution_overview: `Drag follows $F(v)=Av^{r}$ newtons at airspeed $v>0$, with runs of $160$ N at $20$ m/s and $640$ N at $40$ m/s. Absorbed power is $P=F\\cdot v$ and the mounting is rated to $1000$ N.

**Part 1: Building the model.**

Let $v$ = airspeed in m/s, $F(v)$ = drag in newtons, $P(v)$ = absorbed power in watts. Two unknown constants need two facts, and the two runs supply them: their ratio isolates the exponent, either run then fixes the coefficient.

**1. Translate: the two runs.** Ratios kill the coefficient, so read the exponent first:

$$\\frac{F(40)}{F(20)} = 2^{r} = 4$$

**2. Translate: the level.** One run fixes the scale:

$$A(20)^{2} = 160$$

**3. Translate: the rating.** The mounting sets a drag target to invert:

$$F(v) = 1000$$

**Part 2: The model.**

$$2^{r} = 4 \\tag{1}$$

$$400A = 160 \\tag{2}$$

$$Av^{r} = 1000 \\tag{3}$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the drag law:

$$r = 2, \\qquad A = 0.4, \\qquad F(v) = 0.4v^{2}$$

**2.** Multiplying by the speed adds one to the exponent:

$$P(v) = 0.4v^{2}\\cdot v = 0.4v^{3}$$

**3.** Equation (3) inverts at the rating:

$$0.4v^{2} = 1000 \\;\\Rightarrow\\; v^{2} = 2500 \\;\\Rightarrow\\; v = 50$$

**4.** Scale factors follow from the two exponents:

$$\\frac{F(2v)}{F(v)} = 4, \\qquad \\frac{P(2v)}{P(v)} = 8$$

**5.** Evaluate the power at the limiting speed:

$$P(50) = 0.4(125000) = 50000 \\text{ W} = 50 \\text{ kW}$$

**Answer.** $F(v) = 0.4v^{2}$ | $P(v) = 0.4v^{3}$ | rating reached at $v = 50$ m/s | $P(50) = 50$ kW`,
  },
  {
    id: `math-8-23`,
    case_id: `MATH 8.23`,
    title: `Inelastic Demand and Where Revenue Goes`,
    context: `A regional utility faces demand $q(p)=A p^{-0.5}$ units per month at a price $p>0$, and a price of $16$ sells $300$ units. The board wants to know how revenue $R=pq$ behaves along this curve. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue rises as the price rises.`,
      `Raising price by $44\\%$ cuts quantity by exactly $20\\%$.`,
      `To reduce monthly quantity to $200$ units, the price must rise to $40$.`,
      `Quadrupling the price cuts quantity to a quarter.`,
      `Revenue does not depend on the price.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the direction of revenue on an inelastic curve. Multiplying demand by price gives $R(p)=1200p^{0.5}$, a positive exponent, so revenue rises with price.

The general rule behind this is that revenue's exponent is demand's exponent plus one. With demand at $-0.5$ the revenue exponent is $+0.5$: quantity falls when price rises, but not fast enough to offset the higher price.

Recover the coefficient from the observation:

$$A(16)^{-0.5} = 300 \\quad \\Rightarrow \\quad \\frac{A}{4} = 300 \\quad \\Rightarrow \\quad A = 1200$$

Build revenue:

$$R(p) = p \\times 1200p^{-0.5} = 1200p^{0.5}$$

Compare two prices:

$$R(16) = 1200(4) = 4800, \\qquad R(25) = 1200(5) = 6000$$

Revenue rises with price, so the statement is True.`,
      `**B.** → False

A forty-four-percent price rise gives a convenient square, but its exact quantity response is not twenty percent. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{q(1.44p)}{q(p)}=1.44^{-0.5}=\\frac{1}{1.2}=\\frac{5}{6}$$

The relevant comparison can then be written as

$$1-\\frac{5}{6}=\\frac{1}{6}\\approx16.7\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Quantity falls by about $16.7\\%$, not exactly $20\\%$. Therefore the statement is False.`,
      `**C.** → False

The observed pair gives $q(p)=1200p^{-0.5}$, so the price for a target quantity is found by inversion. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$200=\\frac{1200}{\\sqrt{p}} \\quad\\Rightarrow\\quad \\sqrt{p}=6$$

The relevant comparison can then be written as

$$p=6^2=36$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The target quantity occurs at price $36$, not $40$. Therefore the statement is False.`,
      `**D.** → False

This claim applies the price multiplier directly to quantity. With exponent $-0.5$, quadrupling the price multiplies quantity by $4^{-0.5}=1/2$, so volume halves rather than falling to a quarter.

Cutting quantity to a quarter would require an elasticity of $-1$, or a sixteenfold price rise on this curve. The mistake amounts to reading the exponent as $-1$ instead of $-0.5$, which is the same slip that would reverse the revenue conclusion in part A.

Apply the scale factor:

$$\\frac{q(4p)}{q(p)} = 4^{-0.5} = \\frac{1}{2}$$

Check from the observed price:

$$q(16) = 300, \\qquad q(64) = \\frac{1200}{8} = 150$$

Quantity halves, so the statement is False.`,
      `**E.** → False

This claim describes unit-elastic demand, which this curve is not. Revenue is $1200p^{0.5}$, which grows with price without limit on the stated domain.

Revenue is price-independent only when demand's exponent is exactly $-1$, making revenue's exponent zero. Here the exponent is $+0.5$, so revenue is not merely dependent on price — it moves in the same direction as price, the hallmark of inelastic demand.

Write revenue and inspect its exponent:

$$R(p) = 1200p^{0.5}, \\qquad 0.5 \\ne 0$$

Evaluate at widely separated prices:

$$R(4) = 2400, \\qquad R(16) = 4800, \\qquad R(64) = 9600$$

Revenue doubles with each quadrupling of price, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 23,
    solution_overview: `Demand is $q(p)=Ap^{-0.5}$ with $q(16)=300$, and revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units sold, $R$ = revenue. The exponent is given, one observation pins the coefficient, and revenue is derived by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A(16)^{-0.5} = 300, \\qquad 16^{-0.5} = \\tfrac{1}{4}$$

**2. Translate: revenue.**

$$R(p) = p \\cdot Ap^{-0.5} = Ap^{0.5}$$

**Part 2: The model.**

$$q(p) = 1200\\,p^{-0.5} \\tag{1}$$

$$R(p) = 1200\\,p^{0.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A = 300 \\times 4 = 1200$$

**2.** The elasticity is the exponent of (1):

$$\\text{El}_{p}q = -0.5 \\quad \\text{(inelastic)}$$

**3.** Quantities along the curve:

$$q(16) = 300, \\qquad q(25) = 240, \\qquad q(64) = 150$$

**4.** Scale factors use the exponent, not the price multiplier:

$$4^{-0.5} = \\tfrac{1}{2}, \\qquad \\left(\\tfrac{25}{16}\\right)^{-0.5} = 0.8$$

**5.** Because $-0.5 + 1 = 0.5 > 0$, revenue rises with price; it would be flat only at elasticity $-1$:

$$R(4) = 2400, \\qquad R(16) = 4800, \\qquad R(64) = 9600$$

**Answer.** $A = 1200$ | $q(p) = 1200p^{-0.5}$ | $R(p) = 1200p^{0.5}$ | elasticity $-0.5$`,
  },
  {
    id: `math-8-24`,
    case_id: `MATH 8.24`,
    title: `Kiln Output Under a Licensed Ceiling`,
    context: `A kiln's daily output follows $y(x)=A x^{4/3}$ tonnes, where $x>0$ is the fuel feed in cubic metres. A test firing at a feed of $27$ produced $324$ tonnes. The site licence caps daily output at $1024$ tonnes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the output law is $4$.`,
      `The licensed ceiling of $1024$ tonnes is reached at a feed of $64$.`,
      `A fuel feed of $32$ produces half of the licensed output ceiling.`,
      `A feed of $8$ produces $32$ tonnes.`,
      `Increasing fuel feed from $27$ to $54$ raises output by about $125\\%$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the constant. The test feed is a perfect cube, so $27^{4/3}=3^{4}=81$ exactly, and dividing the recorded output by that shape factor gives $A=4$.

Exponents written as fractions are easiest handled through their denominator first: take the cube root of $27$, then raise to the fourth power. Doing it in the other order works too but produces the awkward intermediate $27^{4}=531441$.

Evaluate the shape factor:

$$27^{4/3} = \\left(27^{1/3}\\right)^{4} = 3^{4} = 81$$

Divide the recorded output by it:

$$81A = 324 \\quad \\Rightarrow \\quad A = 4, \\qquad y(x) = 4x^{4/3}$$

The coefficient is $4$, so the statement is True.`,
      `**B.** → True

This claim inverts the law at the licence limit. Solving $4x^{4/3}=1024$ gives $x^{4/3}=256$, and raising to the power $3/4$ returns exactly $64$.

The inverse exponent is $3/4$, so the target ratio is compressed rather than magnified: output must rise by a factor of $3.16$ from the test firing while fuel rises only by a factor of $2.37$. Any exponent above $1$ produces that pattern.

Set the law equal to the ceiling:

$$4x^{4/3} = 1024 \\quad \\Rightarrow \\quad x^{4/3} = 256$$

Raise both sides to the reciprocal power:

$$x = 256^{3/4} = \\left(4^{4}\\right)^{3/4} = 4^{3} = 64$$

Confirm by substitution:

$$y(64) = 4 \\times 64^{4/3} = 4 \\times 256 = 1024$$

The ceiling binds at a feed of $64$, so the statement is True.`,
      `**C.** → False

Half the licensed output is $512$ tonnes, and the calibrated law $y(x)=4x^{4/3}$ must be inverted. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$4x^{4/3}=512 \\quad\\Rightarrow\\quad x^{4/3}=128$$

The relevant comparison can then be written as

$$x=128^{3/4}\\approx38.05$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Half the ceiling requires about $38.1$ units of feed, not $32$. Therefore the statement is False.`,
      `**D.** → False

This claim understates output by half. Since $8^{4/3}=2^{4}=16$, the law gives $4 \\times 16 = 64$ tonnes at that feed.

The claimed $32$ is what appears if the shape factor is computed as $8^{4/3}=8$ — that is, if the exponent is quietly treated as $1$ — or if the coefficient is halved. Perfect cubes make this easy to check: the cube root of $8$ is $2$, and $2^{4}=16$.

Evaluate the shape factor:

$$8^{4/3} = \\left(8^{1/3}\\right)^{4} = 2^{4} = 16$$

Apply the coefficient:

$$y(8) = 4(16) = 64$$

The kiln produces $64$ tonnes, not $32$, so the statement is False.`,
      `**E.** → False

The move from 27 to 54 doubles feed, so output is multiplied by $2^{4/3}$. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{y(54)}{y(27)}=2^{4/3}\\approx2.5198$$

The relevant comparison can then be written as

$$(2.5198-1)\\times100\\%\\approx152.0\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Output rises by about $152\\%$, not $125\\%$. Therefore the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 24,
    solution_overview: `Kiln output is $y(x)=Ax^{4/3}$ tonnes for a fuel feed $x>0$, with a test firing $y(27)=324$ and a licensed ceiling of $1024$ tonnes.

**Part 1: Building the model.**

Let $x$ = fuel feed and $y(x)$ = daily output. The exponent is given and exceeds $1$, so the kiln shows increasing returns; the test firing pins the coefficient and the licence gives a level to invert.

**1. Translate: the test firing.** The feed is a perfect cube, so the shape factor is exact:

$$27^{4/3} = 3^{4} = 81, \\qquad 81A = 324$$

**2. Translate: the licence.**

$$4x^{4/3} \\le 1024$$

**Part 2: The model.**

$$y(x) = 4x^{4/3} \\tag{1}$$

$$x^{4/3} \\le 256 \\tag{2}$$

**Part 3: Solve.**

**1.** The test firing gives the coefficient:

$$A = 4$$

**2.** Levels at perfect cubes:

$$y(8) = 64, \\qquad y(27) = 324, \\qquad y(64) = 1024$$

**3.** The scale factor exceeds the multiplier because the exponent exceeds $1$:

$$2^{4/3} \\approx 2.52 \\quad (+152\\%)$$

**4.** Invert (2) with the reciprocal exponent $3/4$:

$$x = 256^{3/4} = 64$$

**5.** Fuel efficiency improves with scale, since dividing by $x$ leaves a positive exponent:

$$\\frac{y(x)}{x} = 4x^{1/3}, \\qquad 8 \\to 12 \\to 16 \\text{ at feeds } 8, 27, 64$$

**Answer.** $A = 4$ | $y(x) = 4x^{4/3}$ | licence ceiling at feed $x = 64$`,
  },
  {
    id: `math-8-25`,
    case_id: `MATH 8.25`,
    title: `A Pair of Power Functions That Undo Each Other`,
    context: `A calibration stage converts a raw reading $x>0$ into an index by $f(x)=9x^{2/3}$, and a reporting stage converts an index $y>0$ back into raw units by $g(y)=y^{3/2}/27$. The lab wants to know what happens when the two stages are applied one after the other. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Applying the reporting stage to the calibration stage returns the original reading.`,
      `The composition of the two stages is a power function with exponent $1$.`,
      `Starting with a raw reading of $125$, the two stages produce index $225$ and then return raw reading $125$.`,
      `For a raw input of $50$, applying both stages returns a value $8\\%$ above the input.`,
      `Applying the stages in the other order gives something other than the original input.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim says the two stages are inverses. Substituting $f$ into $g$ multiplies the exponents to $1$ and cancels the constants exactly, leaving $g(f(x))=x$.

Both halves have to work for the claim to hold: the exponents $2/3$ and $3/2$ are reciprocals, and the constants $9$ and $1/27$ are matched to each other, since $9^{3/2}=27$. Change either one and the composition would still be a power function but no longer the identity.

Substitute the first stage into the second:

$$g\\big(f(x)\\big) = \\frac{\\left(9x^{2/3}\\right)^{3/2}}{27} = \\frac{9^{3/2}\\,x^{(2/3)(3/2)}}{27}$$

Evaluate the constant and the exponent:

$$9^{3/2} = 27, \\qquad \\frac{2}{3} \\times \\frac{3}{2} = 1$$

$$g\\big(f(x)\\big) = \\frac{27x}{27} = x$$

The composition returns the original reading, so the statement is True.`,
      `**B.** → True

This claim describes the same composition structurally. Since $g(f(x))=x=1 \\cdot x^{1}$, the composed map is a power function with coefficient $1$ and exponent $1$.

The general rule is that composing power functions always gives a power function whose exponent is the product of the two exponents — never the sum. The identity is simply the special case where that product equals $1$ and the constants happen to cancel.

Multiply the exponents:

$$\\frac{2}{3} \\times \\frac{3}{2} = 1$$

Collect the constants:

$$\\frac{9^{3/2}}{27} = \\frac{27}{27} = 1$$

$$g\\big(f(x)\\big) = 1 \\cdot x^{1}$$

The composition is a power function with exponent $1$, so the statement is True.`,
      `**C.** → True

This non-unit test checks both constants and both reciprocal exponents in the two-stage composition. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$f(125)=9(125)^{2/3}=9(25)=225$$

The relevant comparison can then be written as

$$g(225)=\\frac{225^{3/2}}{27}=\\frac{15^3}{27}=125$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The stages pass through $225$ and return the original $125$. Therefore the statement is True.`,
      `**D.** → False

The two laws are exact inverses on positive inputs, so a composed output cannot be eight percent above its input. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$g(f(x))=\\frac{\\left(9x^{2/3}\\right)^{3/2}}{27}=\\frac{27x}{27}=x$$

The relevant comparison can then be written as

$$g(f(50))=50 \\quad\\text{and}\\quad \\frac{50-50}{50}=0\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The composed value equals $50$ exactly, rather than exceeding it. Therefore the statement is False.`,
      `**E.** → False

This claim asserts that the pair works in only one direction. Composing the other way also gives the identity: $f(g(y))=y$ for every $y>0$.

Two power functions on the positive domain that invert in one order automatically invert in the other, because reciprocal exponents and matched constants are symmetric conditions. The arithmetic below shows the constants cancelling in the mirror-image way, with $27^{2/3}=9$ instead of $9^{3/2}=27$.

Substitute the reporting stage into the calibration stage:

$$f\\big(g(y)\\big) = 9\\left(\\frac{y^{3/2}}{27}\\right)^{2/3} = \\frac{9\\,y^{(3/2)(2/3)}}{27^{2/3}}$$

Evaluate the constant and the exponent:

$$27^{2/3} = 9, \\qquad \\frac{3}{2} \\times \\frac{2}{3} = 1$$

$$f\\big(g(y)\\big) = \\frac{9y}{9} = y$$

The reverse order also returns the input, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 25,
    solution_overview: `The calibration stage is $f(x)=9x^{2/3}$ and the reporting stage is $g(y)=y^{3/2}/27$, both on positive inputs.

**Part 1: Building the model.**

Let $x$ = raw reading and $y$ = index. Composing power functions multiplies their exponents and raises the inner coefficient to the outer exponent, so both the exponents and the constants must be tracked separately.

**1. Translate: the exponents.** They are reciprocals:

$$\\frac{2}{3} \\times \\frac{3}{2} = 1$$

**2. Translate: the constants.** They are matched:

$$9^{3/2} = 27, \\qquad 27^{2/3} = 9$$

**Part 2: The model.**

$$g\\big(f(x)\\big) = \\frac{\\left(9x^{2/3}\\right)^{3/2}}{27} \\tag{1}$$

$$f\\big(g(y)\\big) = 9\\left(\\frac{y^{3/2}}{27}\\right)^{2/3} \\tag{2}$$

**Part 3: Solve.**

**1.** Simplify (1):

$$\\frac{27x}{27} = x$$

**2.** Simplify (2):

$$\\frac{9y}{9} = y$$

**3.** Both orders give the identity, so the two stages are inverse power functions on $x>0$.

**4.** Spot values confirm the pairing:

$$f(8) = 9 \\times 4 = 36, \\qquad g(36) = \\frac{216}{27} = 8$$

**5.** The general lesson: composing multiplies exponents, so an inverse requires reciprocal exponents *and* constants satisfying $A^{s}B=1$, which is exactly what $9$ and $1/27$ do here.

**Answer.** $g(f(x)) = x$ | $f(g(y)) = y$ | composed exponent $1$ | $f(8)=36$, $g(36)=8$`,
  },
  {
    id: `math-8-26`,
    case_id: `MATH 8.26`,
    title: `Two Ranking Algorithms That Swap Places`,
    context: `Two ranking algorithms are scored against a query load $x>0$. Algorithm S obeys $S(x)=a x^{0.5}$, and a benchmark at load $4$ scored $16$. Algorithm T's score is proportional to $x^{1.5}$, and the same benchmark load scored $8$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two algorithms score equally at a load of $8$.`,
      `The two algorithms score equally at two different positive loads.`,
      `Algorithm S scores higher at every load above the crossing point.`,
      `At a load of $4$ the two algorithms score equally.`,
      `The ratio of the two scores is the same at every load.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the crossing point. The benchmarks give $S(x)=8x^{0.5}$ and $T(x)=x^{1.5}$, and setting them equal leaves $x=8$, where both score about $22.6$.

Cancelling the common factor $x^{0.5}$ is what makes the equation trivial, and it is allowed because the load is strictly positive. What remains is $8=x$, so the crossing sits at exactly the coefficient of algorithm S — a coincidence of these particular exponents, since they differ by exactly $1$.

Calibrate both algorithms from the benchmark:

$$a\\sqrt{4} = 16 \\;\\Rightarrow\\; a = 8, \\qquad k(4)^{1.5} = 8 \\;\\Rightarrow\\; 8k = 8 \\;\\Rightarrow\\; k = 1$$

Set the two scores equal and cancel:

$$8x^{0.5} = x^{1.5} \\quad \\Rightarrow \\quad 8 = x^{1} \\quad \\Rightarrow \\quad x = 8$$

Confirm the shared score:

$$S(8) = 8\\sqrt{8} \\approx 22.63, \\qquad T(8) = 8^{1.5} \\approx 22.63$$

The algorithms tie at load $8$, so the statement is True.`,
      `**B.** → False

This claim expects more than one tie. After cancelling $x^{0.5}$ the equation reduces to $x=8$, a single root, so on the domain $x>0$ there is exactly one crossing.

Two curves like these can look as if they might cross twice, since one starts above and the other ends above, but a single crossing is all that pattern requires. The algebraic reason is decisive: the ratio of the two scores is strictly increasing, so it can pass through $1$ only once.

Reduce the equality condition:

$$8x^{0.5} = x^{1.5} \\quad \\Longleftrightarrow \\quad x^{1.5 - 0.5} = 8 \\quad \\Longleftrightarrow \\quad x = 8$$

Inspect the ratio, which is strictly increasing:

$$\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}$$

A strictly increasing ratio equals $1$ only once, so the statement is False.`,
      `**C.** → False

This claim puts the wrong algorithm ahead beyond the crossing. For $x>8$ the ratio $T/S=x/8$ exceeds $1$, so algorithm T leads on that whole range.

Algorithm S does dominate at light loads, and its larger coefficient — $8$ against $1$ — is what makes that plausible up to the crossing. Beyond it the exponents decide: $1.5$ against $0.5$ means T's score grows three times as fast in proportional terms, and no coefficient advantage can hold that back forever.

Use the ratio to order the two algorithms:

$$\\frac{T(x)}{S(x)} = \\frac{x}{8} > 1 \\quad \\Longleftrightarrow \\quad x > 8$$

Check a heavier load:

$$S(16) = 8(4) = 32, \\qquad T(16) = 16^{1.5} = 64$$

Algorithm T leads above the crossing, so the statement is False.`,
      `**D.** → False

This claim mistakes the benchmark load for the crossing. At $x=4$ the benchmarks themselves record $16$ against $8$, so algorithm S is ahead by a factor of two.

The benchmark is where the coefficients were calibrated, not where the curves meet; those are different questions. The ratio at that load is $4/8=0.5$, exactly the twofold gap the benchmark scores show.

Read the benchmark scores:

$$S(4) = 16, \\qquad T(4) = 8$$

Confirm with the ratio:

$$\\frac{T(4)}{S(4)} = \\frac{4}{8} = 0.5$$

The two are not equal at load $4$, so the statement is False.`,
      `**E.** → False

This claim would require the two algorithms to share an exponent. They do not — $0.5$ against $1.5$ — so the ratio is $x/8$, which grows without bound.

A constant ratio is exactly the case where two power functions differ only by a coefficient. Here the exponents differ by $1$, so the ratio is itself a power function with exponent $1$: the further the load rises, the more decisively algorithm T wins.

Form the ratio:

$$\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}$$

Evaluate at three loads:

$$\\frac{4}{8} = 0.5, \\qquad \\frac{8}{8} = 1, \\qquad \\frac{16}{8} = 2$$

The ratio quadruples across that range, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 26,
    solution_overview: `Algorithm S obeys $S(x)=ax^{0.5}$ with $S(4)=16$; algorithm T obeys $T(x)=kx^{1.5}$ with $T(4)=8$.

**Part 1: Building the model.**

Let $x$ = query load, $S$ and $T$ = the two scores. Each algorithm has a given exponent and one benchmark, so both coefficients follow immediately; the interesting work is comparing the two laws.

**1. Translate: algorithm S's benchmark.**

$$a\\sqrt{4} = 16$$

**2. Translate: algorithm T's benchmark.**

$$k(4)^{1.5} = 8$$

**Part 2: The model.**

$$S(x) = 8x^{0.5} \\tag{1}$$

$$T(x) = x^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The benchmarks give the coefficients:

$$a = 8, \\qquad k = 1$$

**2.** Locate every crossing by cancelling the shared power:

$$8x^{0.5} = x^{1.5} \\;\\Rightarrow\\; x = 8, \\qquad S(8) = T(8) \\approx 22.63$$

**3.** The ratio settles the ordering everywhere and shows the crossing is unique:

$$\\frac{T(x)}{S(x)} = \\frac{x}{8}$$

**4.** Read the ordering off that ratio:

$$x < 8 \\;\\Rightarrow\\; S > T, \\qquad x > 8 \\;\\Rightarrow\\; T > S$$

**5.** Because the exponents differ, no coefficient could keep S ahead indefinitely; the coefficient only moves the crossing, which sits at $x=a^{1/(1.5-0.5)}=8$.

**Answer.** $S(x) = 8x^{0.5}$ | $T(x) = x^{1.5}$ | single crossing at $x = 8$`,
  },
  {
    id: `math-8-27`,
    case_id: `MATH 8.27`,
    title: `Server Fleet Capacity Beneath a Contracted Ceiling`,
    context: `A hosting platform's sustained capacity follows $C(m)=A m^{0.8}$ requests per second, where $m>0$ is the number of machines. A fleet of $32$ machines sustains $80$ requests per second. The support contract will not certify more than $500$ requests per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The capacity ratio $C(64)/C(32)$ is less than $2$.`,
      `Doubling the fleet raises capacity by about $74\\%$.`,
      `The contracted ceiling of $500$ binds from about $250$ machines.`,
      `A fleet of $243$ machines sustains $486$ requests per second.`,
      `Doubling the fleet from $32$ to $64$ machines cuts capacity per machine by less than $10\\%$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The ratio between the two fleet sizes cancels the unknown coefficient and leaves the finite scale factor. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{C(64)}{C(32)}=\\left(\\frac{64}{32}\\right)^{0.8}=2^{0.8}\\approx1.741$$

The relevant comparison can then be written as

$$1.741<2$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Capacity rises by a factor below two. Therefore the statement is True.`,
      `**B.** → True

This claim quantifies the same diminishing returns. The scale factor is $2^{0.8}\\approx1.7411$, so doubling the fleet buys about $74\\%$ more capacity.

The gap between $74\\%$ and $100\\%$ is what the platform loses to the sub-linear exponent, and it compounds: two doublings give $2^{1.6}\\approx3.03$ rather than $4$. Recovering the missing capacity requires a disproportionately larger fleet.

Form the scale factor:

$$\\frac{C(2m)}{C(m)} = 2^{0.8} = e^{0.8 \\times 0.6931} \\approx e^{0.5545} \\approx 1.7411$$

Verify from the recorded fleet, using $A=80/32^{0.8}=80/16=5$:

$$C(32) = 80, \\qquad C(64) = 5 \\times 64^{0.8} \\approx 5 \\times 27.86 \\approx 139.3, \\qquad \\frac{139.3}{80} \\approx 1.74$$

Capacity rises by about $74\\%$, so the statement is True.`,
      `**C.** → False

This claim inverts the law but lands well short. Solving $5m^{0.8}=500$ gives $m^{0.8}=100$, and raising to the power $1.25$ returns about $316$ machines.

Underestimating here is the natural error, because the recorded fleet suggests a rough proportion — capacity must rise about sixfold, so the fleet "should" rise about sixfold from $32$ to roughly $200$. The sub-linear exponent means the fleet has to rise by $10^{1.25}\\approx17.8$ times instead.

Recover the coefficient and set capacity to the ceiling:

$$32^{0.8} = 2^{4} = 16 \\;\\Rightarrow\\; A = 5, \\qquad 5m^{0.8} = 500 \\;\\Rightarrow\\; m^{0.8} = 100$$

Raise both sides to the reciprocal exponent $1.25$:

$$m = 100^{1.25} = 10^{2.5} \\approx 316.2$$

Check the claimed fleet:

$$C(250) = 5 \\times 250^{0.8} \\approx 5 \\times 82.4 \\approx 412 < 500$$

The ceiling binds near $316$ machines, not $250$, so the statement is False.`,
      `**D.** → False

This claim overstates capacity at a conveniently chosen fleet size. Since $243=3^{5}$, the shape factor is $3^{4}=81$ exactly, and capacity is $5 \\times 81 = 405$ requests per second.

The claimed $486$ is $6 \\times 81$, which is what the coefficient $6$ would give — the value obtained by dividing $80$ by a mis-evaluated shape factor. Fifth powers make the exponent $0.8=4/5$ exact, so this is a case where the arithmetic can be checked without any rounding at all.

Evaluate the shape factor:

$$243^{0.8} = \\left(3^{5}\\right)^{4/5} = 3^{4} = 81$$

Apply the recovered coefficient:

$$C(243) = 5(81) = 405$$

The fleet sustains $405$ requests per second, not $486$, so the statement is False.`,
      `**E.** → False

Capacity per machine carries exponent $0.8-1=-0.2$, so its exact change must be calculated over the doubling. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{C(64)/64}{C(32)/32}=2^{-0.2}\\approx0.87055$$

The relevant comparison can then be written as

$$(1-0.87055)\\times100\\%\\approx12.9\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Capacity per machine falls by about $12.9\\%$, not by less than $10\\%$. Therefore the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 27,
    solution_overview: `Capacity follows $C(m)=Am^{0.8}$ requests per second for $m$ machines, with $C(32)=80$ and a contracted ceiling of $500$.

**Part 1: Building the model.**

Let $m$ = machines and $C(m)$ = sustained capacity. The exponent is given and lies below $1$, so the platform faces diminishing returns; the recorded fleet fixes the coefficient and the ceiling has to be inverted into a fleet size.

**1. Translate: the recorded fleet.** The fleet size is a fifth power, so the shape factor is exact:

$$32^{0.8} = \\left(2^{5}\\right)^{4/5} = 16, \\qquad 16A = 80$$

**2. Translate: the contracted ceiling.**

$$5m^{0.8} \\le 500$$

**Part 2: The model.**

$$C(m) = 5m^{0.8} \\tag{1}$$

$$m^{0.8} \\le 100 \\tag{2}$$

**Part 3: Solve.**

**1.** The recorded fleet gives the coefficient:

$$A = 5$$

**2.** Levels at fifth powers stay exact:

$$C(243) = 5 \\times 3^{4} = 405$$

**3.** Scale factors show the sub-linear growth:

$$2^{0.8} \\approx 1.741 \\;(+74\\%), \\qquad 10^{0.8} \\approx 6.31$$

**4.** Invert (2) with the reciprocal exponent $1.25$:

$$m = 100^{1.25} = 10^{2.5} \\approx 316.2$$

**5.** Capacity per machine carries a negative exponent, so the marginal value of a machine keeps falling:

$$\\frac{C(m)}{m} = 5m^{-0.2}, \\qquad 2.5 \\text{ at } m=32, \\qquad 1.67 \\text{ at } m=243$$

**Answer.** $A = 5$ | $C(m) = 5m^{0.8}$ | ceiling binds at $m \\approx 316$ machines`,
  },
  {
    id: `math-8-28`,
    case_id: `MATH 8.28`,
    title: `Hiring Against a Square-Root Revenue Curve`,
    context: `A seasonal workshop earns revenue $R(L)=120 L^{0.5}$ from $L>0$ hours of hired labour and pays a wage of $6$ per hour. The owner judges a season by the net gain $R(L)-6L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The net gain is zero at $400$ hours.`,
      `At $100$ hours the net gain is $600$.`,
      `At $900$ hours the net gain is negative.`,
      `The net gain rises throughout the range from $0$ to $400$ hours.`,
      `Revenue per hour of labour is the same at every staffing level.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim locates the break-even staffing level. Setting $120\\sqrt{L}=6L$ and dividing by $\\sqrt{L}$ gives $\\sqrt{L}=20$, so revenue and wage bill coincide at $400$ hours, both equal to $2400$.

Dividing by $\\sqrt{L}$ removes the trivial root at $L=0$, where a workshop with no labour also breaks even. The meaningful break-even is the second one, and it is the upper edge of the range worth operating in.

Set revenue equal to the wage bill:

$$120\\sqrt{L} = 6L \\quad \\Rightarrow \\quad 120 = 6\\sqrt{L} \\quad \\Rightarrow \\quad \\sqrt{L} = 20$$

$$L = 400$$

Check both sides:

$$R(400) = 120(20) = 2400, \\qquad 6(400) = 2400$$

The net gain is zero at $400$ hours, so the statement is True.`,
      `**B.** → True

This claim evaluates the net gain inside the profitable range. Revenue is $1200$, wages are $600$, and the difference is exactly $600$.

This point is worth remembering for part D, because it turns out to be the best the workshop can do: the net gain here equals the wage bill itself, and every staffing level on either side of it does worse.

Evaluate revenue and wages at $100$ hours:

$$R(100) = 120\\sqrt{100} = 120(10) = 1200, \\qquad 6(100) = 600$$

Take the difference:

$$1200 - 600 = 600$$

The net gain is $600$, so the statement is True.`,
      `**C.** → True

This claim tests a staffing level beyond break-even. Revenue is $3600$ while wages are $5400$, so the season loses $1800$.

Once past $400$ hours the wage bill grows in proportion to hours while revenue grows only as a square root, so losses widen with every additional hour. At $900$ hours the workshop is already $75\\%$ over its revenue in wages.

Evaluate both sides at $900$ hours:

$$R(900) = 120\\sqrt{900} = 120(30) = 3600, \\qquad 6(900) = 5400$$

Take the difference:

$$3600 - 5400 = -1800$$

The net gain is negative, so the statement is True.`,
      `**D.** → False

This claim assumes the net gain climbs all the way to break-even. It does not: the net gain peaks at $100$ hours with $600$ and then falls back to zero at $400$ hours.

The confusion is between *positive* and *rising*. The net gain stays positive on the whole open range, which is why the claim sounds right, but it turns over well before the end of that range — at the point where the falling revenue per hour drops to the wage of $6$.

Compare the net gain at three staffing levels inside the range:

$$\\Pi(100) = 1200 - 600 = 600$$

$$\\Pi(225) = 120(15) - 1350 = 1800 - 1350 = 450$$

$$\\Pi(324) = 120(18) - 1944 = 2160 - 1944 = 216$$

The net gain falls from $600$ to $216$ while still inside the range, so the statement is False.`,
      `**E.** → False

This claim would require revenue to be proportional to hours. Dividing revenue by $L$ gives $120L^{-0.5}$, which declines as staffing rises.

Watching this average fall explains the whole task. It starts far above the wage of $6$, equals $6$ at $400$ hours — precisely the break-even point — and drops below it thereafter, which is why extra hours eventually destroy value.

Divide revenue by hours:

$$\\frac{R(L)}{L} = \\frac{120L^{0.5}}{L} = 120L^{-0.5}$$

Evaluate at three staffing levels:

$$\\frac{R(100)}{100} = 12, \\qquad \\frac{R(400)}{400} = 6, \\qquad \\frac{R(900)}{900} = 4$$

Revenue per hour falls from $12$ to $4$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 28,
    solution_overview: `Revenue is $R(L)=120L^{0.5}$ from $L>0$ labour hours, wages cost $6$ per hour, and the net gain is $R(L)-6L$.

**Part 1: Building the model.**

Let $L$ = labour hours, $R$ = revenue, $\\Pi$ = net gain. Both constants are given, so the task is a comparison between an exponent of $0.5$ and an exponent of $1$.

**1. Translate: the net gain.**

$$\\Pi(L) = 120L^{0.5} - 6L$$

**2. Translate: break-even.**

$$120\\sqrt{L} = 6L$$

**Part 2: The model.**

$$\\Pi(L) = 120\\sqrt{L} - 6L \\tag{1}$$

$$\\Pi(L) = 6\\sqrt{L}\\left(20 - \\sqrt{L}\\right) \\tag{2}$$

**Part 3: Solve.**

**1.** Solve break-even on $L>0$:

$$\\sqrt{L} = 20 \\;\\Rightarrow\\; L = 400, \\qquad R = \\text{wages} = 2400$$

**2.** The factored form (2) fixes the sign of the net gain:

$$0 < L < 400 \\;\\Rightarrow\\; \\Pi > 0, \\qquad L > 400 \\;\\Rightarrow\\; \\Pi < 0$$

**3.** Positive is not the same as rising — the net gain turns over inside the profitable range:

$$\\Pi(100) = 600, \\qquad \\Pi(225) = 450, \\qquad \\Pi(324) = 216, \\qquad \\Pi(400) = 0$$

**4.** Losses widen beyond break-even:

$$\\Pi(900) = 3600 - 5400 = -1800$$

**5.** The driver is the falling average revenue per hour, which crosses the wage exactly at break-even:

$$\\frac{R(L)}{L} = 120L^{-0.5}: \\quad 12 \\text{ at } 100, \\quad 6 \\text{ at } 400, \\quad 4 \\text{ at } 900$$

**Answer.** break-even at $L = 400$ hours | peak net gain $600$ at $L = 100$ | $\\Pi(900) = -1800$`,
  },
  {
    id: `math-8-29`,
    case_id: `MATH 8.29`,
    title: `Splitting an Order Between Two Quadratic-Cost Plants`,
    context: `A firm must produce $60$ units in total and can split them between two plants. Plant 1's cost is $C_1(q)=0.5q^{2}$ and plant 2's cost is $C_2(q)=0.25q^{2}$, where $q$ is that plant's own output. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Concentrating all $60$ units in the cheaper plant costs $900$.`,
      `An even split between the plants costs less than a $20$–$40$ split.`,
      `Doubling a plant's output doubles that plant's cost.`,
      `The $20$–$40$ split costs $650$.`,
      `Plant 2's cost per unit does not depend on how much it produces.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim prices the corner solution. Plant 2 has the smaller coefficient, and loading all $60$ units into it costs $0.25 \\times 3600 = 900$.

"Cheaper" needs care here, because plant 2 is cheaper only in the sense of a smaller coefficient; at any given output it costs half of plant 1. That does not make concentration wise — as the later parts show, splitting beats this corner by a wide margin.

Evaluate plant 2 at the full order:

$$C_2(60) = 0.25(60)^{2} = 0.25(3600) = 900$$

Compare with the same corner at plant 1:

$$C_1(60) = 0.5(3600) = 1800$$

Concentrating in plant 2 costs $900$, so the statement is True.`,
      `**B.** → False

This claim backs the wrong split. Thirty units each cost $675$, while sending $20$ to plant 1 and $40$ to plant 2 costs $600$ — the cheaper of the two.

Symmetry is a good instinct when plants are identical, but these are not: plant 1's cost coefficient is twice plant 2's, so the cheaper plant should carry more of the load. The right balance loads plant 2 with twice as much as plant 1, which is exactly the $20$–$40$ split.

Price the even split:

$$0.5(30)^{2} + 0.25(30)^{2} = 450 + 225 = 675$$

Price the $20$–$40$ split:

$$0.5(20)^{2} + 0.25(40)^{2} = 200 + 400 = 600$$

The uneven split is cheaper by $75$, so the statement is False.`,
      `**C.** → False

This claim assumes proportional costs. Both plants have exponent $2$, so doubling output multiplies cost by $2^{2}=4$.

The quadratic shape is the reason splitting helps at all. If costs really were proportional to output, total cost would depend only on the coefficients and every unit would go to the cheaper plant; convex costs are what make it worthwhile to run both.

Apply the scale factor at either plant:

$$\\frac{C_2(2q)}{C_2(q)} = 2^{2} = 4$$

Check numerically:

$$C_2(20) = 100, \\qquad C_2(40) = 400$$

Cost quadruples rather than doubling, so the statement is False.`,
      `**D.** → False

This claim misprices the split computed in part B. The true cost is $600$: plant 1 contributes $200$ and plant 2 contributes $400$.

The gap of $50$ matters because $600$ is the best achievable total — no other division of the $60$ units does better. Reporting $650$ would make the even split at $675$ look almost as good, when in fact the correct figure creates a clear ranking.

Price each plant separately:

$$C_1(20) = 0.5(400) = 200, \\qquad C_2(40) = 0.25(1600) = 400$$

Add the two:

$$200 + 400 = 600$$

Compare with the alternatives already computed:

$$600 < 675 < 900$$

The split costs $600$, not $650$, so the statement is False.`,
      `**E.** → False

This claim would require an exponent of $1$. Dividing plant 2's cost by its output gives $0.25q$, which rises with output, so its unit cost is far from constant.

Rising unit cost is precisely the force that makes a split optimal: as plant 2 takes on more, its cost per unit climbs until sending the next unit to plant 1 becomes the cheaper option. Constant unit costs would eliminate that trade-off entirely.

Divide the cost by output:

$$\\frac{C_2(q)}{q} = \\frac{0.25q^{2}}{q} = 0.25q$$

Evaluate at three output levels:

$$\\frac{C_2(20)}{20} = 5, \\qquad \\frac{C_2(40)}{40} = 10, \\qquad \\frac{C_2(60)}{60} = 15$$

Unit cost triples across that range, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 29,
    solution_overview: `Sixty units must be split between plants with costs $C_1(q)=0.5q^{2}$ and $C_2(q)=0.25q^{2}$.

**Part 1: Building the model.**

Let $q$ = units at plant 1, so $60-q$ go to plant 2. Both cost laws are power functions with exponent $2$, so costs are convex and the total depends on how the order is divided.

**1. Translate: the total cost of a split.**

$$K(q) = 0.5q^{2} + 0.25(60-q)^{2}$$

**2. Translate: the corner options.**

$$K(0) = 0.25(3600) = 900, \\qquad K(60) = 0.5(3600) = 1800$$

**Part 2: The model.**

$$K(q) = 0.5q^{2} + 0.25(60-q)^{2} \\tag{1}$$

$$\\frac{C_i(2q)}{C_i(q)} = 2^{2} = 4 \\tag{2}$$

**Part 3: Solve.**

**1.** Price the candidate splits:

$$K(30) = 450 + 225 = 675, \\qquad K(20) = 200 + 400 = 600$$

**2.** Rank them against the corner:

$$600 < 675 < 900 < 1800$$

**3.** The best division loads the cheaper plant twice as heavily, matching the ratio of the coefficients:

$$q : (60-q) = 20 : 40 = 1 : 2$$

**4.** Convexity is what rewards splitting — each plant's cost quadruples when its own load doubles, by (2).

**5.** Unit costs rise with each plant's own output, which is why neither corner is efficient:

$$\\frac{C_1(q)}{q} = 0.5q, \\qquad \\frac{C_2(q)}{q} = 0.25q$$

**Answer.** cheapest split $20$ at plant 1 and $40$ at plant 2, costing $600$ | even split $675$ | all at plant 2 $900$`,
  },
  {
    id: `math-8-30`,
    case_id: `MATH 8.30`,
    title: `Testing Whether Field Data Fit One Power Law`,
    context: `A laboratory records four measurements of a response $y$ against an input $x$: $(4,\\,24)$, $(16,\\,192)$, $(9,\\,81)$ and a planned run at $x=25$. An analyst fits a power law $y=Ax^{r}$ using the first two measurements only. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The first two measurements are consistent with a power law of exponent $1.5$.`,
      `The fitted coefficient is $3$.`,
      `The measurement at $x=9$ contradicts the fitted law.`,
      `The fitted law predicts $y=300$ at $x=25$.`,
      `The same two measurements would fit an exponent of $2$ equally well.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks whether two points determine the exponent claimed. Dividing one measurement by the other cancels the coefficient and leaves $4^{r}=8$, which gives $r=1.5$.

Two points always determine a power law exactly, because the ratio equation carries the exponent and either point then carries the coefficient. The arithmetic is cleanest when the input ratio is a whole number, as here, where $16/4=4$ and $192/24=8$.

Divide the second measurement by the first:

$$\\frac{A(16)^{r}}{A(4)^{r}} = \\frac{192}{24} \\quad \\Rightarrow \\quad \\left(\\frac{16}{4}\\right)^{r} = 8$$

Solve the resulting equation:

$$4^{r} = 8 \\quad \\Rightarrow \\quad 2^{2r} = 2^{3} \\quad \\Rightarrow \\quad r = 1.5$$

The exponent is exactly $1.5$, so the statement is True.`,
      `**B.** → True

This claim completes the fit. With $r=1.5$ the shape factor at $x=4$ is $8$, so the coefficient is $24/8=3$.

Either measurement can be used, and using both is the sensible check: $192/16^{1.5}=192/64=3$ as well. Agreement confirms that the exponent from part A was right, since a wrong exponent would give two different coefficients.

Use the first measurement:

$$A(4)^{1.5} = 24 \\quad \\Rightarrow \\quad 8A = 24 \\quad \\Rightarrow \\quad A = 3$$

Confirm with the second:

$$\\frac{192}{16^{1.5}} = \\frac{192}{64} = 3$$

$$y = 3x^{1.5}$$

Both measurements give $A=3$, so the statement is True.`,
      `**C.** → False

This claim treats the third measurement as an outlier. The fitted law predicts $3 \\times 9^{1.5} = 81$, which is exactly what was recorded, so the point sits on the curve.

This is the one measurement that was *not* used in the fit, which makes it the real test of the model. A power law fitted on two points will always pass through those two; passing through an independent third point is genuine evidence that the form is right.

Evaluate the fitted law at $x=9$:

$$9^{1.5} = \\left(9^{1/2}\\right)^{3} = 3^{3} = 27$$

$$y = 3(27) = 81$$

Compare with the recorded value:

$$81 = 81$$

The measurement agrees with the fit, so the statement is False.`,
      `**D.** → False

This claim understates the prediction. At $x=25$ the shape factor is $25^{1.5}=125$, so the fitted law predicts $375$.

The claimed $300$ is what a squared law with the same coefficient would *not* give either; it is closer to what appears if the shape factor is read as $100$, that is, if $25^{1.5}$ is mistaken for $25^{2}/6.25$ or simply rounded down. Since $25$ is a perfect square, the exact route is short: take the square root, then cube.

Evaluate the shape factor:

$$25^{1.5} = \\left(25^{1/2}\\right)^{3} = 5^{3} = 125$$

Apply the coefficient:

$$y = 3(125) = 375$$

The prediction is $375$, not $300$, so the statement is False.`,
      `**E.** → False

This claim suggests the fit is not unique. It is: the ratio equation $4^{r}=8$ has exactly one solution, and $r=2$ would require the response to rise by a factor of $16$ rather than the observed $8$.

Two distinct points pin a power law uniquely, so there is no freedom left once the ratio is fixed. Testing the rejected exponent makes this concrete: with $r=2$ the coefficient from the first point would be $1.5$, and the second point would then be predicted as $384$ instead of the recorded $192$.

Check what exponent $2$ would imply for the ratio:

$$\\left(\\frac{16}{4}\\right)^{2} = 16 \\ne 8$$

Force the coefficient from the first point and test the second:

$$A = \\frac{24}{16} = 1.5, \\qquad 1.5(16)^{2} = 384 \\ne 192$$

An exponent of $2$ misses the second measurement by a factor of two, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 30,
    solution_overview: `Measurements $(4,24)$ and $(16,192)$ are used to fit $y=Ax^{r}$; the point $(9,81)$ and a planned run at $x=25$ test the fit.

**Part 1: Building the model.**

Let $x$ = input and $y$ = response. Two unknowns need two measurements, and the standard route is to take the ratio first — it eliminates the coefficient and isolates the exponent.

**1. Translate: the ratio of the two measurements.**

$$\\left(\\frac{16}{4}\\right)^{r} = \\frac{192}{24}$$

**2. Translate: the coefficient from either point.**

$$A(4)^{r} = 24$$

**Part 2: The model.**

$$4^{r} = 8 \\tag{1}$$

$$y = A x^{r} \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) has a unique solution:

$$2^{2r} = 2^{3} \\;\\Rightarrow\\; r = 1.5$$

**2.** Either measurement then gives the same coefficient:

$$A = \\frac{24}{8} = 3 = \\frac{192}{64}, \\qquad y = 3x^{1.5}$$

**3.** The held-out measurement tests the form:

$$3 \\times 9^{1.5} = 3 \\times 27 = 81 \\;\\checkmark$$

**4.** The planned run is a prediction, not a fit:

$$3 \\times 25^{1.5} = 3 \\times 125 = 375$$

**5.** No other exponent fits: $r=2$ would demand a response ratio of $16$ and would miss the second measurement by a factor of two.

**Answer.** $r = 1.5$ | $A = 3$ | $y = 3x^{1.5}$ | predicted $y(25) = 375$`,
  },
  {
    id: `math-8-31`,
    case_id: `MATH 8.31`,
    title: `Turning a Negative-Power Demand Curve Around`,
    context: `A component supplier faces demand $q(p)=A p^{-2}$ units, where $p>0$ is the price. At a price of $5$ the supplier sells $100$ units. Procurement wants the relationship written the other way round, with price and revenue expressed as functions of the quantity sold. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The inverse demand curve is $p=50q^{-0.5}$.`,
      `Revenue expressed through quantity is $R=50q^{0.5}$.`,
      `Doubling the quantity sold raises revenue by about $41.4\\%$.`,
      `When the curve sells $25$ units, revenue is $300$.`,
      `The price elasticity of demand is $-0.5$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the demand curve solved for price. The observation gives $A=2500$, and solving $q=2500p^{-2}$ for $p$ produces $p=50q^{-0.5}$.

Inverting a power function replaces the exponent by its reciprocal, so $-2$ becomes $-1/2$, and the coefficient is raised to that same reciprocal power: $2500^{1/2}=50$. Leaving the coefficient untouched is the usual slip and would give a curve that misses every observed point.

Recover the coefficient:

$$A(5)^{-2} = 100 \\quad \\Rightarrow \\quad \\frac{A}{25} = 100 \\quad \\Rightarrow \\quad A = 2500$$

Solve the demand curve for price:

$$q = \\frac{2500}{p^{2}} \\quad \\Rightarrow \\quad p^{2} = \\frac{2500}{q} \\quad \\Rightarrow \\quad p = \\frac{50}{\\sqrt{q}} = 50q^{-0.5}$$

Check the observed pair:

$$p(100) = \\frac{50}{10} = 5 \\;\\checkmark$$

The inverse curve is $50q^{-0.5}$, so the statement is True.`,
      `**B.** → True

Revenue through quantity is obtained by multiplying quantity by inverse demand, so the exponents must be added. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$p(q)=50q^{-0.5}$$

The relevant comparison can then be written as

$$R(q)=qp(q)=q\\left(50q^{-0.5}\\right)=50q^{0.5}$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The revenue law is $R=50q^{0.5}$. Therefore the statement is True.`,
      `**C.** → True

The derived revenue law has exponent one-half, so the exact scale factor for a doubling is required. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{R(2q)}{R(q)}=2^{0.5}=\\sqrt{2}\\approx1.414$$

The relevant comparison can then be written as

$$(1.414-1)\\times100\\%\\approx41.4\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Revenue rises by about $41.4\\%$. Therefore the statement is True.`,
      `**D.** → False

Revenue must be evaluated through the inverse-demand representation rather than by reusing the original observed price. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$p(25)=50(25)^{-0.5}=\\frac{50}{5}=10$$

The relevant comparison can then be written as

$$R(25)=25p(25)=25(10)=250$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Revenue is $250$, not $300$. Therefore the statement is False.`,
      `**E.** → False

This claim quotes the exponent of the *inverse* curve. Demand's own exponent is $-2$, and that is the elasticity; $-0.5$ is its reciprocal, belonging to the price-as-a-function-of-quantity relationship.

The reciprocal pairing is exactly why the two numbers are easy to swap: inverting a power function inverts its exponent. Keeping track of which variable is on which side settles it — elasticity measures the percentage response of quantity to price, so it must be read from $q(p)$.

Read the elasticity from the demand curve:

$$q(p) = 2500p^{-2} \\quad \\Rightarrow \\quad \\text{El}_{p}q = -2$$

Contrast with the inverse curve:

$$p(q) = 50q^{-0.5} \\quad \\Rightarrow \\quad \\text{El}_{q}p = -0.5 = \\frac{1}{-2}$$

Test with a one percent price rise:

$$1.01^{-2} \\approx 0.9803 \\quad \\Rightarrow \\quad \\text{about } -2\\%$$

The elasticity is $-2$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 31,
    solution_overview: `Demand is $q(p)=Ap^{-2}$ with $q(5)=100$; procurement wants price and revenue as functions of quantity.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units, $R$ = revenue. One observation pins the coefficient, and the rest is a change of subject: inverting a power function takes the reciprocal of the exponent and the same reciprocal power of the coefficient.

**1. Translate: the observed pair.**

$$A(5)^{-2} = 100$$

**2. Translate: the inversion.**

$$q = \\frac{A}{p^{2}} \\quad \\Rightarrow \\quad p = A^{1/2}q^{-1/2}$$

**Part 2: The model.**

$$q(p) = 2500\\,p^{-2} \\tag{1}$$

$$p(q) = 50\\,q^{-0.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A = 100 \\times 25 = 2500, \\qquad A^{1/2} = 50$$

**2.** Revenue from either side, with matching values:

$$R(p) = 2500p^{-1}, \\qquad R(q) = 50q^{0.5}, \\qquad R = 500 \\text{ at } (p,q) = (5,100)$$

**3.** Quantities along the curve:

$$q(5) = 100, \\qquad q(10) = 25, \\qquad q(2.5) = 400$$

**4.** Elasticities are reciprocal, one for each direction:

$$\\text{El}_{p}q = -2, \\qquad \\text{El}_{q}p = -0.5$$

**5.** Because demand is elastic, revenue falls in price and rises in quantity — two readings of the same curve.

**Answer.** $A = 2500$ | $p(q) = 50q^{-0.5}$ | $R(q) = 50q^{0.5}$ | elasticity $-2$`,
  },
  {
    id: `math-8-32`,
    case_id: `MATH 8.32`,
    title: `Average Product of a Square-Root Technology`,
    context: `A workshop's output follows $Y(L)=A L^{0.5}$ units, where $L>0$ is labour hours. Increasing labour from $25$ to $100$ hours increased output by exactly $60$ units. Management tracks average product $Y/L$ and compares output with a linear wage benchmark $W(L)=0.75L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The output law is $Y(L)=12\\sqrt{L}$.`,
      `At $64$ hours, output exceeds the linear wage benchmark by $48$ units.`,
      `At $225$ hours, average product is $0.8$ unit per labour hour.`,
      `Producing $180$ units requires $225$ labour hours.`,
      `Multiplying labour hours by $2.25$ multiplies output by $1.5$ and average product by $\\frac{2}{3}$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the technology coefficient from an output jump. The model must be evaluated at both labour levels because $60$ is the change in output, not either output level. The square-root factors differ by $10-5=5$.

A common mistake is to substitute only $L=100$ and conclude $A=6$. That silently converts a difference observation into a level observation.

$$Y(100)-Y(25)=A\\sqrt{100}-A\\sqrt{25}=60$$

$$A(10-5)=60 \\quad \\Rightarrow \\quad A=12, qquad Y(L)=12\\sqrt{L}$$

The recovered technology is $Y(L)=12\\sqrt{L}$, so the statement is True.`,
      `**B.** → True

This claim compares curved output with a linear benchmark at the same labour input. Using the calibrated model, output at $64$ hours is $96$, while the wage benchmark is $0.75(64)=48$. Their difference is therefore $48$ units.

A common mistake is to compare coefficients, $12$ and $0.75$, without evaluating their different powers of $L$. One law grows with $\\sqrt L$ and the other with $L$.

$$Y(64)=12\\sqrt{64}=12(8)=96$$

$$W(64)=0.75(64)=48, qquad Y(64)-W(64)=96-48=48$$

Output exceeds the linear benchmark by exactly $48$ units at $64$ hours, so the statement is True.`,
      `**C.** → True

This claim asks for average product at a labour level that is not a multiple of either calibration input. Average product is output divided by labour, so its exponent is $0.5-1=-0.5$. At $225$ hours the square root is $15$.

A common mistake is to evaluate total output, $180$, and report that number as the average. The total must still be divided by $225$ hours.

$$\\operatorname{AP}(L)=\\frac{Y(L)}{L} =\\frac{12L^{0.5}}{L}=12L^{-0.5}$$

$$\\operatorname{AP}(225)=\\frac{12}{\\sqrt{225}} =\\frac{12}{15}=0.8$$

Average product is $0.8$ unit per labour hour, so the statement is True.`,
      `**D.** → True

This claim asks to run the square-root technology backwards for a non-doubling target. With $Y(L)=12\\sqrt L$, a target of $180$ fixes $\\sqrt L=15$, after which the labour input must be squared.

A common mistake is to scale labour in the same proportion as output. A square-root production law has inverse exponent $2$, so output ratios are squared when converted to labour ratios.

$$12\\sqrt L=180 \\quad \\Rightarrow \\quad \\sqrt L=15$$

$$L=15^2=225, qquad Y(225)=12(15)=180$$

The inversion and direct check both give $225$ labour hours, so the statement is True.`,
      `**E.** → True

This claim compares scale factors for a total and its average. Output has exponent $0.5$, while average product has exponent $-0.5$. Therefore the same $2.25$-fold labour change pushes the two quantities in opposite directions.

A common mistake is to assume that because total output rises, average product must rise too. Dividing by labour changes the exponent and reverses the direction.

$$\\frac{Y(2.25L)}{Y(L)}=(2.25)^{0.5}=1.5$$

$$\\frac{\\operatorname{AP}(2.25L)}{\\operatorname{AP}(L)} =(2.25)^{-0.5}=\\frac{1}{1.5}=\\frac{2}{3}$$

Both multipliers in the statement are exact, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `Output is $Y(L)=AL^{0.5}$, with a $60$-unit output jump from $25$ to $100$ hours; average product is $Y/L$.

**Part 1:** Translate the jump and the derived average:

$$A(10-5)=60, qquad \\operatorname{AP}(L)=AL^{-0.5}$$

**Part 2:** Recover the total, average, and inverse laws:

$$Y(L)=12\\sqrt L, qquad \\operatorname{AP}(L)=\\frac{12}{\\sqrt L}, qquad L=\\left(\\frac{Y}{12}\\right)^2$$

**Part 3:** Compare with wages and evaluate the planning targets:

$$Y(64)-0.75(64)=48, quad \\operatorname{AP}(225)=0.8, quad Y=180\\Rightarrow L=225$$

**Answer.** $A=12$ | $Y(L)=12\\sqrt L$ | $\\operatorname{AP}(225)=0.8$ | $180$ units need $225$ hours`,
  },
  {
    id: `math-8-33`,
    case_id: `MATH 8.33`,
    title: `Two Break-Even Points Around a Fixed Charge`,
    context: `A contract manufacturer earns $R(q)=60 q^{0.5}$ from an output of $q>0$ units, pays a variable cost of $2q$, and carries a fixed charge of $400$ per period. Profit is $\\Pi(q)=60q^{0.5}-2q-400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The operation breaks even at two output levels, $100$ and $400$ units.`,
      `Profit is positive at an output of $25$ units.`,
      `Profit is positive at an output of $500$ units.`,
      `Profit rises throughout the range where it is positive.`,
      `Revenue is proportional to output.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks where profit vanishes. Substituting $s=\\sqrt{q}$ turns the profit condition into a quadratic in $s$ with roots $10$ and $20$, so break-even occurs at $q=100$ and $q=400$ units.

The substitution is the key move: with $\\sqrt{q}$ and $q$ both present, the equation is quadratic in disguise. Two roots are what a fixed charge produces — output must be large enough to cover it, but not so large that the linear variable cost overwhelms the square-root revenue.

Set profit to zero and substitute $s=\\sqrt{q}$:

$$60s - 2s^{2} - 400 = 0 \\quad \\Rightarrow \\quad s^{2} - 30s + 200 = 0$$

Factor the quadratic:

$$(s-10)(s-20) = 0 \\quad \\Rightarrow \\quad s = 10 \\text{ or } s = 20$$

Square back to output:

$$q = 100 \\quad \\text{or} \\quad q = 400$$

Check one of them:

$$\\Pi(400) = 60(20) - 800 - 400 = 0 \\;\\checkmark$$

Both break-even points are as claimed, so the statement is true.`,
      `**B.** → False

This claim tests an output below the lower break-even point. At $q=25$ revenue is $300$ against costs of $450$, so the period loses $150$.

Small outputs cannot carry the fixed charge: revenue grows as a square root, so it is at its weakest exactly where the fixed charge is proportionally heaviest. Profit only turns positive once output passes $100$ units.

Evaluate each component at $q=25$:

$$R(25) = 60(5) = 300, \\qquad 2(25) = 50, \\qquad \\text{fixed } 400$$

Combine them:

$$\\Pi(25) = 300 - 50 - 400 = -150$$

Profit is negative, so the statement is False.`,
      `**C.** → False

This claim tests an output beyond the upper break-even point. At $q=500$ revenue is about $1342$ against costs of $1400$, a loss of roughly $58$.

The margin is thin, which is what makes the statement worth checking rather than guessing: $500$ is only a quarter above the upper break-even of $400$, and profit there was exactly zero. Past that point the linear cost outruns the square-root revenue, and losses widen from then on.

Evaluate revenue:

$$R(500) = 60\\sqrt{500} \\approx 60 \\times 22.3607 \\approx 1341.6$$

Evaluate costs:

$$2(500) + 400 = 1400$$

Combine:

$$\\Pi(500) \\approx 1341.6 - 1400 \\approx -58.4$$

Profit is negative, so the statement is False.`,
      `**D.** → False

This claim confuses positive profit with rising profit. Profit is positive between $100$ and $400$ units, but inside that range it climbs to a peak near $225$ units and then falls back to zero.

The shape follows from the quadratic in $s=\\sqrt{q}$: profit is $-2(s-10)(s-20)$, an inverted parabola in $s$, so it must turn over midway between the roots at $s=15$, that is $q=225$. A claim about monotonicity therefore cannot survive on an interval that contains the peak.

Evaluate profit at three outputs inside the profitable range:

$$\\Pi(144) = 60(12) - 288 - 400 = 32$$

$$\\Pi(225) = 60(15) - 450 - 400 = 50$$

$$\\Pi(324) = 60(18) - 648 - 400 = 32$$

Profit rises to $50$ and then falls back, so the statement is False.`,
      `**E.** → False

This claim would require revenue's exponent to be $1$. It is $0.5$, so doubling output multiplies revenue by only about $1.414$, while the variable cost — which really is proportional — doubles exactly.

That mismatch is what creates the upper break-even point in part A. If revenue were proportional, the comparison with a $2q$ cost would be settled once and for all by comparing coefficients, and profit would either grow forever or shrink forever.

Compare the two scale factors:

$$\\frac{R(2q)}{R(q)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{2(2q)}{2q} = 2$$

Check with levels:

$$R(100) = 600, \\qquad R(200) \\approx 848.5, \\qquad R(400) = 1200$$

Quadrupling output only doubles revenue, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 33,
    solution_overview: `Profit is $\\Pi(q)=60q^{0.5}-2q-400$ for output $q>0$.

**Part 1: Building the model.**

Let $q$ = units produced and $s=\\sqrt{q}$. Revenue has exponent $0.5$, variable cost exponent $1$, and the fixed charge is a constant — the substitution $s=\\sqrt{q}$ turns this mixture into a quadratic.

**1. Translate: the profit function.**

$$\\Pi = 60q^{0.5} - 2q - 400$$

**2. Translate: the substitution.** With $q=s^{2}$:

$$\\Pi = -2s^{2} + 60s - 400$$

**Part 2: The model.**

$$\\Pi(s) = -2\\left(s^{2} - 30s + 200\\right) \\tag{1}$$

$$\\Pi(s) = -2(s-10)(s-20) \\tag{2}$$

**Part 3: Solve.**

**1.** The roots of (2) give the break-even outputs:

$$s = 10 \\;\\Rightarrow\\; q = 100, \\qquad s = 20 \\;\\Rightarrow\\; q = 400$$

**2.** The sign of (2) fixes the profitable range:

$$100 < q < 400 \\;\\Rightarrow\\; \\Pi > 0, \\qquad \\text{otherwise } \\Pi \\le 0$$

**3.** Being an inverted parabola in $s$, profit peaks midway between the roots:

$$s = 15 \\;\\Rightarrow\\; q = 225, \\qquad \\Pi(225) = 50$$

**4.** Values on either side of the peak confirm the turn:

$$\\Pi(144) = 32, \\qquad \\Pi(324) = 32, \\qquad \\Pi(25) = -150, \\qquad \\Pi(500) \\approx -58.4$$

**5.** The whole shape comes from the exponent mismatch: revenue scales by $2^{0.5}$ per doubling, variable cost by $2$, so revenue leads at first and loses in the end.

**Answer.** break-even at $q = 100$ and $q = 400$ | peak profit $50$ at $q = 225$`,
  },
  {
    id: `math-8-34`,
    case_id: `MATH 8.34`,
    title: `A Benefit and a Cost With Different Exponents`,
    context: `A city values a flood-defence programme of scale $x>0$ by the benefit $B(x)=40 x^{0.5}$ and the cost $C(x)=0.5 x^{1.5}$, both in millions. The net benefit is $B(x)-C(x)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Benefit and cost are equal at scale $x=80$.`,
      `Beyond that scale the cost exceeds the benefit.`,
      `The net benefit is largest at scale $x=80$.`,
      `Doubling the scale doubles both the benefit and the cost.`,
      `At scale $x=16$ the cost already exceeds the benefit.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks where the two curves meet. Setting $40x^{0.5}=0.5x^{1.5}$ and cancelling $x^{0.5}$ leaves $40=0.5x$, so the scales coincide at $x=80$.

Cancelling the common power is legitimate because the scale is strictly positive, and it turns a comparison of two curved functions into a single linear equation. The exponents differ by exactly $1$, which is why the leftover condition is linear in $x$.

Set benefit equal to cost:

$$40x^{0.5} = 0.5x^{1.5} \\quad \\Rightarrow \\quad 40 = 0.5x^{1}$$

$$x = 80$$

Confirm the shared value:

$$B(80) = 40\\sqrt{80} \\approx 357.8, \\qquad C(80) = 0.5(80)^{1.5} \\approx 357.8$$

Both sides are about $357.8$ million at scale $80$, so the statement is True.`,
      `**B.** → True

This claim orders the two curves above the crossing. The ratio $C/B = x/80$ rises with scale and equals $1$ at $x=80$, so cost is the larger for every $x>80$.

The ratio argument settles the entire range at once, which a single test value could not do. It also shows the crossing is unique: a strictly increasing ratio passes through $1$ exactly once, so the ordering flips there and never flips back.

Form the ratio of the two curves:

$$\\frac{C(x)}{B(x)} = \\frac{0.5x^{1.5}}{40x^{0.5}} = \\frac{x}{80}$$

Read off the comparison:

$$\\frac{x}{80} > 1 \\quad \\Longleftrightarrow \\quad x > 80$$

Test a larger programme:

$$B(100) = 400, \\qquad C(100) = 0.5(1000) = 500$$

Cost exceeds benefit beyond the crossing, so the statement is True.`,
      `**C.** → False

This claim puts the optimum at the break-even scale. At $x=80$ the net benefit is exactly zero, whereas smaller programmes deliver a clear surplus — around $138$ million near $x\\approx27$.

Break-even and best are different questions, and here they are as far apart as possible: the crossing is where the surplus has been fully eroded. Any scale beyond the peak still adds benefit, but adds cost faster, and by $x=80$ the accumulated extra cost has consumed the entire early gain.

Evaluate the net benefit at several scales:

$$N(16) = 160 - 32 = 128$$

$$N(27) = 40(5.196) - 0.5(140.3) \\approx 207.8 - 70.1 \\approx 137.7$$

$$N(40) \\approx 252.98 - 126.49 \\approx 126.5$$

Compare with the crossing:

$$N(80) = 0$$

The net benefit peaks near $x=27$ and is zero at $x=80$, so the statement is False.`,
      `**D.** → False

This claim assigns proportional growth to both curves, when neither is proportional. Doubling the scale multiplies the benefit by $2^{0.5}\\approx1.414$ and the cost by $2^{1.5}\\approx2.828$.

The difference between those two factors is the whole story of the programme. Cost grows twice as fast as benefit in proportional terms — $2.828$ against $1.414$ — which guarantees that some finite scale exhausts the surplus.

Compute the two scale factors:

$$\\frac{B(2x)}{B(x)} = 2^{0.5} \\approx 1.4142, \\qquad \\frac{C(2x)}{C(x)} = 2^{1.5} \\approx 2.8284$$

Check between two scales:

$$B(40) \\approx 253.0, \\quad B(80) \\approx 357.8; \\qquad C(40) \\approx 126.5, \\quad C(80) \\approx 357.8$$

Neither curve doubles, so the statement is False.`,
      `**E.** → False

This claim reverses the ordering at a small scale. At $x=16$ the benefit is $160$ million and the cost only $32$ million, so the programme is strongly worthwhile there.

Small scales are where the benefit curve dominates, because a square root rises steeply from zero while $x^{1.5}$ starts almost flat. The ratio confirms it directly: $16/80=0.2$, so cost is a fifth of benefit at that scale.

Evaluate both curves at $x=16$:

$$B(16) = 40\\sqrt{16} = 40(4) = 160$$

$$C(16) = 0.5(16)^{1.5} = 0.5(64) = 32$$

Compare through the ratio:

$$\\frac{C(16)}{B(16)} = \\frac{32}{160} = 0.2 = \\frac{16}{80}$$

Benefit far exceeds cost at that scale, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 34,
    solution_overview: `Benefit is $B(x)=40x^{0.5}$ and cost is $C(x)=0.5x^{1.5}$ for a programme of scale $x>0$.

**Part 1: Building the model.**

Let $x$ = programme scale, $B$ = benefit, $C$ = cost, $N=B-C$ = net benefit. Both constants are given; the analysis turns on the exponents $0.5$ and $1.5$, which differ by exactly $1$.

**1. Translate: the crossing condition.**

$$40x^{0.5} = 0.5x^{1.5}$$

**2. Translate: the ordering.** The ratio of the two curves is the cleanest tool:

$$\\frac{C(x)}{B(x)} = \\frac{0.5x^{1.5}}{40x^{0.5}} = \\frac{x}{80}$$

**Part 2: The model.**

$$N(x) = 40x^{0.5} - 0.5x^{1.5} \\tag{1}$$

$$\\frac{C(x)}{B(x)} = \\frac{x}{80} \\tag{2}$$

**Part 3: Solve.**

**1.** Cancel the shared power to find the unique crossing:

$$40 = 0.5x \\;\\Rightarrow\\; x = 80, \\qquad B = C \\approx 357.8$$

**2.** Ratio (2) fixes the ordering on both sides:

$$x < 80 \\;\\Rightarrow\\; B > C, \\qquad x > 80 \\;\\Rightarrow\\; C > B$$

**3.** The net benefit is positive but not monotone on $(0,80)$:

$$N(16) = 128, \\qquad N(27) \\approx 137.7, \\qquad N(40) \\approx 126.5, \\qquad N(80) = 0$$

**4.** Scale factors explain why the surplus must vanish:

$$2^{0.5} \\approx 1.414 \\text{ for benefit}, \\qquad 2^{1.5} \\approx 2.828 \\text{ for cost}$$

**5.** The best scale sits near $x\\approx27$, far below break-even — the crossing marks the end of the worthwhile range, not its optimum.

**Answer.** crossing at $x = 80$ with $B = C \\approx 357.8$ | net benefit peaks near $x \\approx 27$`,
  },
  {
    id: `math-8-35`,
    case_id: `MATH 8.35`,
    title: `Furnace Throughput Calibrated From Two Runs`,
    context: `A furnace's throughput follows $T(g)=A g^{r}$ tonnes per hour, where $g>0$ is the gas feed in cubic metres per hour. Two logged runs are available: a feed of $8$ gave $20$ tonnes per hour, and a feed of $27$ gave $45$. The site licence caps throughput at $80$ tonnes per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent of the throughput law is $2/3$.`,
      `The coefficient of the throughput law is $5$.`,
      `The licensed ceiling of $80$ tonnes per hour is reached at a gas feed of $64$.`,
      `Doubling the gas feed doubles throughput.`,
      `Throughput per cubic metre of gas rises as the feed rises.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the exponent, which two runs determine through their ratio. Dividing one run by the other cancels the coefficient and gives $(27/8)^{r}=2.25$, whose solution is $r=2/3$.

The ratio $27/8$ is a perfect cube ratio, $(3/2)^{3}$, and the throughput ratio $2.25$ is $(3/2)^{2}$. Matching the two exponents of $3/2$ gives $3r=2$ directly, so no logarithms are strictly needed — though they confirm the same value.

Divide the second run by the first:

$$\\left(\\frac{27}{8}\\right)^{r} = \\frac{45}{20} = 2.25$$

Write both sides as powers of $3/2$:

$$\\left(\\left(\\tfrac{3}{2}\\right)^{3}\\right)^{r} = \\left(\\tfrac{3}{2}\\right)^{2} \\quad \\Rightarrow \\quad 3r = 2 \\quad \\Rightarrow \\quad r = \\frac{2}{3}$$

Check with logarithms:

$$r = \\frac{\\ln 2.25}{\\ln 3.375} = \\frac{0.8109}{1.2164} \\approx 0.6667$$

The exponent is $2/3$, so the statement is True.`,
      `**B.** → True

This claim completes the calibration. With $r=2/3$ the shape factor at $g=8$ is $4$, so the coefficient is $20/4=5$.

Using the second run as an independent check is what confirms the exponent as well: $27^{2/3}=9$ and $45/9=5$, the same coefficient. Two runs producing the same coefficient means the power form fits both points exactly.

Evaluate the shape factor at the first run:

$$8^{2/3} = \\left(8^{1/3}\\right)^{2} = 2^{2} = 4, \\qquad 4A = 20 \\;\\Rightarrow\\; A = 5$$

Confirm with the second run:

$$27^{2/3} = 3^{2} = 9, \\qquad \\frac{45}{9} = 5$$

$$T(g) = 5g^{2/3}$$

The coefficient is $5$, so the statement is True.`,
      `**C.** → True

This claim inverts the calibrated law at the licence limit. Solving $5g^{2/3}=80$ gives $g^{2/3}=16$, and raising to the power $3/2$ returns exactly $64$.

Inverting an exponent of $2/3$ means raising to $3/2$, which magnifies the target ratio: throughput must rise fourfold from the first logged run while the feed rises eightfold, from $8$ to $64$. Estimating the feed by proportion would badly understate the gas required.

Set throughput to the ceiling:

$$5g^{2/3} = 80 \\quad \\Rightarrow \\quad g^{2/3} = 16$$

Raise both sides to the reciprocal power:

$$g = 16^{3/2} = \\left(16^{1/2}\\right)^{3} = 4^{3} = 64$$

Confirm by substitution:

$$T(64) = 5 \\times 64^{2/3} = 5(16) = 80$$

The ceiling binds at a feed of $64$, so the statement is True.`,
      `**D.** → False

This claim assumes proportional response. With exponent $2/3$, doubling the feed multiplies throughput by $2^{2/3}\\approx1.587$, a rise of about $59\\%$.

Below-one exponents always mean the input has to grow faster than the output. Here doubling throughput would take a feed multiple of $2^{3/2}\\approx2.83$ — nearly three times the gas — which is the same arithmetic as the licence calculation in part C.

Form the scale factor:

$$\\frac{T(2g)}{T(g)} = 2^{2/3} \\approx 1.5874$$

Find the feed multiple that really doubles throughput:

$$k^{2/3} = 2 \\quad \\Rightarrow \\quad k = 2^{3/2} \\approx 2.83$$

Check with logged values:

$$T(8) = 20, \\qquad T(16) = 5 \\times 16^{2/3} \\approx 5 \\times 6.35 \\approx 31.7$$

Throughput rises by about $59\\%$, not $100\\%$, so the statement is False.`,
      `**E.** → False

This claim reverses the behaviour of the average. Dividing throughput by the feed gives $5g^{-1/3}$, whose exponent is negative, so gas efficiency falls as the furnace is pushed harder.

Total throughput and throughput per cubic metre move in opposite directions, and the exponent decides which is which: since $2/3<1$, dividing by $g$ leaves a negative exponent. Running the furnace at the licence limit is therefore the least gas-efficient way to operate it.

Divide throughput by the feed:

$$\\frac{T(g)}{g} = \\frac{5g^{2/3}}{g} = 5g^{-1/3}$$

Evaluate at the three feeds in play:

$$\\frac{20}{8} = 2.5, \\qquad \\frac{45}{27} \\approx 1.67, \\qquad \\frac{80}{64} = 1.25$$

Efficiency halves across that range, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 35,
    solution_overview: `Throughput is $T(g)=Ag^{r}$ tonnes per hour, with logged runs $T(8)=20$ and $T(27)=45$, under a licensed ceiling of $80$.

**Part 1: Building the model.**

Let $g$ = gas feed and $T(g)$ = throughput. Two unknowns need two runs: their ratio carries the exponent because the coefficient cancels, and either run then carries the coefficient.

**1. Translate: the ratio of the two runs.**

$$\\left(\\frac{27}{8}\\right)^{r} = \\frac{45}{20} = 2.25$$

**2. Translate: the coefficient from the first run.**

$$A \\cdot 8^{r} = 20$$

**Part 2: The model.**

$$\\left(\\tfrac{3}{2}\\right)^{3r} = \\left(\\tfrac{3}{2}\\right)^{2} \\tag{1}$$

$$T(g) = A g^{r} \\tag{2}$$

**Part 3: Solve.**

**1.** Matching exponents in (1) avoids logarithms altogether:

$$3r = 2 \\;\\Rightarrow\\; r = \\tfrac{2}{3}$$

**2.** Both runs give the same coefficient, confirming the fit:

$$\\frac{20}{8^{2/3}} = \\frac{20}{4} = 5 = \\frac{45}{9}, \\qquad T(g) = 5g^{2/3}$$

**3.** Invert at the licence ceiling using the reciprocal exponent $3/2$:

$$g^{2/3} = 16 \\;\\Rightarrow\\; g = 16^{3/2} = 64$$

**4.** Scale factors show the sub-proportional response:

$$2^{2/3} \\approx 1.587 \\;(+59\\%), \\qquad \\text{doubling } T \\text{ needs } 2^{3/2} \\approx 2.83 \\text{ times the gas}$$

**5.** Gas efficiency declines with the feed, so the licensed maximum is also the least efficient operating point:

$$\\frac{T(g)}{g} = 5g^{-1/3}: \\quad 2.5,\\; 1.67,\\; 1.25 \\text{ at } g = 8,\\,27,\\,64$$

**Answer.** $r = 2/3$ | $A = 5$ | $T(g) = 5g^{2/3}$ | ceiling at $g = 64$`,
  },
  {
    id: `math-8-36`,
    case_id: `MATH 8.36`,
    title: `Rainwater Basin Storage Under a Square Law`,
    context: `A tapered rainwater basin stores $V(d)=A d^{2}$ cubic metres when filled to a depth of $d>0$ metres. A survey at a depth of $4$ metres measured $48$ cubic metres in store. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the storage law is $3$.`,
      `At a depth of $10$ metres the basin holds $300$ cubic metres.`,
      `The volume added from depth $7$ to $9$ metres is exactly $\\frac{4}{3}$ times the volume added from $5$ to $7$ metres.`,
      `A stored volume of $675$ cubic metres corresponds to a depth of $15$ metres.`,
      `Stored volume per metre of depth rises as the basin fills.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the constant in the storage law. Dividing the surveyed $48$ cubic metres by the shape factor $4^{2}=16$ gives $A=3$.

The tapered shape is what makes the exponent $2$ plausible: a basin with vertical walls would store volume proportional to depth, while sloping walls widen the surface as the water rises. The coefficient carries the geometry of that taper.

Evaluate the shape factor and divide:

$$4^{2} = 16, \\qquad 16A = 48 \\quad \\Rightarrow \\quad A = 3$$

$$V(d) = 3d^{2}$$

Check the survey:

$$V(4) = 3(16) = 48 \\;\\checkmark$$

The coefficient is $3$, so the statement is True.`,
      `**B.** → True

This claim extrapolates the storage law to a deeper fill. With $A=3$ the volume at $10$ metres is $3 \\times 100 = 300$ cubic metres.

The comparison with the survey is worth noting: depth rises by a factor of $2.5$ while stored volume rises by a factor of $6.25$. Squaring the depth ratio is what turns a modest rise in level into a large rise in capacity.

Evaluate the storage law:

$$V(10) = 3(10)^{2} = 3(100) = 300$$

Confirm with the scale factor from the survey:

$$\\left(\\frac{10}{4}\\right)^{2} = 6.25, \\qquad 48 \\times 6.25 = 300$$

The basin holds $300$ cubic metres, so the statement is True.`,
      `**C.** → True

The calibrated storage law is $V(d)=3d^2$, so equal depth intervals need not add equal volumes. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$V(9)-V(7)=3(9^2-7^2)=3(32)=96$$

The relevant comparison can then be written as

$$\\frac{V(9)-V(7)}{V(7)-V(5)}=\\frac{96}{3(49-25)}=\\frac{96}{72}=\\frac{4}{3}$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The later two-metre rise adds exactly four-thirds as much volume. Therefore the statement is True.`,
      `**D.** → True

This claim inverts the storage law. Solving $3d^{2}=675$ gives $d^{2}=225$, so the depth is exactly $15$ metres.

Inverting a squared law takes the square root of the volume ratio, which compresses large differences: the target is more than fourteen times the surveyed volume, yet the depth only needs to grow by a factor of $3.75$.

Set the storage law equal to the target:

$$3d^{2} = 675 \\quad \\Rightarrow \\quad d^{2} = 225 \\quad \\Rightarrow \\quad d = 15$$

Confirm by substitution:

$$V(15) = 3(225) = 675 \\;\\checkmark$$

The depth is $15$ metres, so the statement is True.`,
      `**E.** → True

This claim concerns a derived quantity. Dividing volume by depth gives $3d$, which increases with depth, so each additional metre of depth adds more water than the previous one.

Dividing by the input lowers the exponent by one, and starting from $2$ leaves $1$ — still increasing. This is the arithmetic counterpart of the taper: the deeper the basin is filled, the wider the water surface and the more each extra metre holds.

Divide the storage law by depth:

$$\\frac{V(d)}{d} = \\frac{3d^{2}}{d} = 3d$$

Evaluate at three depths:

$$\\frac{V(4)}{4} = 12, \\qquad \\frac{V(10)}{10} = 30, \\qquad \\frac{V(15)}{15} = 45$$

Volume per metre of depth rises steadily, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 36,
    solution_overview: `Basin storage is $V(d)=Ad^{2}$ cubic metres at depth $d>0$, with a survey giving $V(4)=48$.

**Part 1: Building the model.**

Let $d$ = fill depth in metres and $V(d)$ = stored volume. The exponent is given by the tapered geometry, so the single survey reading pins the coefficient.

**1. Translate: the survey.**

$$A(4)^{2} = 48$$

**2. Translate: volume per metre of depth.** Dividing by $d$ lowers the exponent by one:

$$\\frac{V(d)}{d} = A d$$

**Part 2: The model.**

$$V(d) = 3d^{2} \\tag{1}$$

$$\\frac{V(d)}{d} = 3d \\tag{2}$$

**Part 3: Solve.**

**1.** The survey gives the coefficient:

$$A = \\frac{48}{16} = 3$$

**2.** Levels at deeper fills:

$$V(10) = 300, \\qquad V(15) = 675$$

**3.** The scale factor squares the depth multiplier:

$$\\frac{V(2d)}{V(d)} = 4, \\qquad \\left(\\tfrac{10}{4}\\right)^{2} = 6.25$$

**4.** Inversion takes the square root of the volume ratio:

$$d = \\sqrt{\\frac{V}{3}}, \\qquad V = 675 \\;\\Rightarrow\\; d = 15$$

**5.** Equation (2) has exponent $1$, so each extra metre of depth stores more than the last:

$$12,\\; 30,\\; 45 \\text{ cubic metres per metre at } d = 4,\\,10,\\,15$$

**Answer.** $A = 3$ | $V(d) = 3d^{2}$ | $675$ m³ at a depth of $15$ m`,
  },
  {
    id: `math-8-37`,
    case_id: `MATH 8.37`,
    title: `A Braking-Energy Index Recovered From a Speed Change`,
    context: `A fleet safety report scores braking energy by the index $E(v)=A v^{2}$, where $v>0$ is speed in kilometres per hour. The report does not give $A$ directly: it states only that raising the test speed from $40$ to $60$ km/h raised the index by exactly $100$ points. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the index is $0.05$.`,
      `At $60$ km/h the index reads $180$.`,
      `Raising speed from $72$ to $90$ km/h raises the index by exactly $56.25\\%$.`,
      `The index reaches $500$ at a speed of $100$ km/h.`,
      `An index reading of $320$ corresponds to a speed of $80$ km/h.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the constant, which has to be reconstructed from a *change* in the index rather than a level. The two speeds give shape factors $1600$ and $3600$, and the recorded rise of $100$ points then fixes $A=0.05$.

Dividing $100$ by either speed squared on its own is the standard error, and it produces a coefficient roughly twice or four times too small. What the report records is a difference, so the coefficient multiplies the difference of the two squares.

Evaluate both shape factors:

$$40^{2} = 1600, \\qquad 60^{2} = 3600$$

Translate the recorded rise:

$$A(3600 - 1600) = 100 \\quad \\Rightarrow \\quad 2000A = 100 \\quad \\Rightarrow \\quad A = 0.05$$

$$E(v) = 0.05v^{2}$$

The coefficient is $0.05$, so the statement is True.`,
      `**B.** → True

This claim asks for a level at the upper test speed. With $A=0.05$ the index reads $0.05 \\times 3600 = 180$.

The pair of levels is the natural check on part A: the lower speed gives $80$, and the difference $180-80=100$ reproduces the report exactly. Any candidate coefficient that fails this test has been recovered incorrectly.

Evaluate the index at the upper speed:

$$E(60) = 0.05(3600) = 180$$

Evaluate at the lower speed and difference them:

$$E(40) = 0.05(1600) = 80, \\qquad 180 - 80 = 100 \\;\\checkmark$$

The index reads $180$, so the statement is True.`,
      `**C.** → True

The speed ratio is $90/72=1.25$, and the square law converts it to an exact index factor. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{E(90)}{E(72)}=\\left(\\frac{90}{72}\\right)^2=1.25^2=1.5625$$

The relevant comparison can then be written as

$$(1.5625-1)\\times100\\%=56.25\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The index rises by exactly $56.25\\%$. Therefore the statement is True.`,
      `**D.** → True

This claim evaluates the index at motorway speed. With $A=0.05$, the index at $100$ km/h is $0.05 \\times 10000 = 500$.

Read backwards, the same computation inverts the index: $0.05v^{2}=500$ gives $v^{2}=10000$ and $v=100$. It also puts the safety message in perspective — $2.5$ times the lower test speed produces $6.25$ times the braking energy.

Evaluate the index:

$$E(100) = 0.05(100)^{2} = 0.05(10000) = 500$$

Confirm by inversion:

$$0.05v^{2} = 500 \\;\\Rightarrow\\; v^{2} = 10000 \\;\\Rightarrow\\; v = 100$$

The index reaches $500$ at $100$ km/h, so the statement is True.`,
      `**E.** → True

The recorded change calibrates the index as $E(v)=0.05v^2$, which can be inverted for a specified reading. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$0.05v^2=320 \\quad\\Rightarrow\\quad v^2=6400$$

The relevant comparison can then be written as

$$v=\\sqrt{6400}=80$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The positive speed corresponding to index $320$ is $80$ km/h. Therefore the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 37,
    solution_overview: `The braking-energy index is $E(v)=Av^{2}$, and raising the test speed from $40$ to $60$ km/h raised the index by $100$ points.

**Part 1: Building the model.**

Let $v$ = speed in km/h and $E(v)$ = index. The exponent is given; the only observation is a difference of two index readings, so the coefficient must be recovered from that difference.

**1. Translate: the two shape factors.**

$$40^{2} = 1600, \\qquad 60^{2} = 3600$$

**2. Translate: the recorded rise.**

$$A(3600 - 1600) = 100$$

**Part 2: The model.**

$$2000A = 100 \\tag{1}$$

$$E(v) = A v^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient:

$$A = 0.05, \\qquad E(v) = 0.05v^{2}$$

**2.** Check both test speeds against the report:

$$E(40) = 80, \\qquad E(60) = 180, \\qquad 180 - 80 = 100 \\;\\checkmark$$

**3.** Scale factors square the speed multiplier:

$$1.5^{2} = 2.25 \\;(+125\\%), \\qquad \\left(\\tfrac{1}{2}\\right)^{2} = \\tfrac{1}{4}$$

**4.** Levels at higher speeds, and the inverse reading:

$$E(100) = 500, \\qquad E = 500 \\;\\Rightarrow\\; v = 100$$

**5.** The safety point is the squaring itself: $2.5$ times the speed of the lower test gives $6.25$ times its braking energy.

**Answer.** $A = 0.05$ | $E(v) = 0.05v^{2}$ | $E(100) = 500$`,
  },
  {
    id: `math-8-38`,
    case_id: `MATH 8.38`,
    title: `Geometrically Similar Silos: Steel Against Capacity`,
    context: `A supplier builds geometrically similar storage silos. The steel skin scales with the square of the height, $S(h)=a h^{2}$ square metres, while capacity scales with the cube, $V(h)=k h^{3}$ cubic metres. A six-metre silo uses $108$ square metres of steel and holds $72$ cubic metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `A silo with capacity $192$ cubic metres needs about $208$ square metres of steel.`,
      `Steel use first exceeds $200$ square metres once height exceeds about $8.16$ metres.`,
      `Increasing silo height by $50\\%$ raises steel use by $125\\%$.`,
      `Steel per cubic metre of capacity falls as the silo gets taller.`,
      `Doubling the height doubles the steel requirement.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The six-metre observations give $S(h)=3h^2$ and $V(h)=h^3/3$; capacity must first be inverted for height. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{h^3}{3}=192 \\quad\\Rightarrow\\quad h=\\sqrt[3]{576}\\approx8.32$$

The relevant comparison can then be written as

$$S(h)=3h^2\\approx3(8.32)^2\\approx207.7$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The target-capacity silo requires about $208$ square metres of steel. Therefore the statement is True.`,
      `**B.** → True

The steel threshold is found from the calibrated surface law, with the strict inequality preserved. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$3h^2>200 \\quad\\Rightarrow\\quad h^2>\\frac{200}{3}$$

The relevant comparison can then be written as

$$h>\\sqrt{\\frac{200}{3}}\\approx8.165$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Steel use exceeds $200$ square metres beyond about $8.16$ metres. Therefore the statement is True.`,
      `**C.** → True

A fifty-percent height increase multiplies height by $1.5$, while steel scales with height squared. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{S(1.5h)}{S(h)}=1.5^2=2.25$$

The relevant comparison can then be written as

$$(2.25-1)\\times100\\%=125\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Steel use rises by exactly $125\\%$. Therefore the statement is True.`,
      `**D.** → True

This claim compares the two laws through their ratio. Dividing steel by capacity gives $9/h$, a power function with exponent $-1$, so taller silos need less steel per cubic metre stored.

This is why large tanks are cheaper per unit of contents: the exponent of the surface law is one less than that of the volume law, so their ratio must fall with size. The result is structural — it depends only on the exponents $2$ and $3$, not on the particular coefficients.

Form the ratio of the two calibrated laws:

$$\\frac{S(h)}{V(h)} = \\frac{3h^{2}}{h^{3}/3} = \\frac{9h^{2}}{h^{3}} = \\frac{9}{h}$$

Evaluate at three heights:

$$\\frac{9}{6} = 1.5, \\qquad \\frac{9}{9} = 1, \\qquad \\frac{9}{12} = 0.75$$

Steel per cubic metre halves between six and twelve metres, so the statement is True.`,
      `**E.** → False

This claim treats the steel law as proportional. Its exponent is $2$, so doubling the height quadruples the steel: $3h^{2}$ becomes $12h^{2}$.

Doubling would require an exponent of $1$, which no surface law has. The mistake also breaks the square-cube comparison in part D: if steel doubled while capacity multiplied by eight, the steel-per-capacity ratio would fall four times as fast as it really does.

Apply the scale factor:

$$\\frac{S(2h)}{S(h)} = 2^{2} = 4$$

Check with concrete silos:

$$S(6) = 108, \\qquad S(12) = 3(144) = 432, \\qquad \\frac{432}{108} = 4$$

Steel quadruples, not doubles, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 38,
    solution_overview: `Similar silos have steel $S(h)=ah^{2}$ and capacity $V(h)=kh^{3}$; a six-metre silo uses $108$ m² of steel and holds $72$ m³.

**Part 1: Building the model.**

Let $h$ = height in metres, $S$ = steel area, $V$ = capacity. Geometric similarity fixes both exponents, so each of the two observations calibrates one coefficient.

**1. Translate: the steel observation.**

$$a(6)^{2} = 108$$

**2. Translate: the capacity observation.**

$$k(6)^{3} = 72$$

**Part 2: The model.**

$$S(h) = 3h^{2} \\tag{1}$$

$$V(h) = \\frac{h^{3}}{3} \\tag{2}$$

**Part 3: Solve.**

**1.** The two observations give the two coefficients:

$$a = 3, \\qquad k = \\tfrac{1}{3}$$

**2.** Levels for a taller silo:

$$S(9) = 243, \\qquad V(9) = 243$$

**3.** The square-cube pair of scale factors for one doubling:

$$\\frac{S(2h)}{S(h)} = 4, \\qquad \\frac{V(2h)}{V(h)} = 8$$

**4.** Their ratio is the economically interesting quantity:

$$\\frac{S(h)}{V(h)} = \\frac{9}{h}, \\qquad 1.5,\\; 1,\\; 0.75 \\text{ at } h = 6,\\,9,\\,12$$

**5.** Because the exponents differ by exactly one, steel per cubic metre is inversely proportional to height — the general reason big tanks are cheap per unit stored.

**Answer.** $S(h) = 3h^{2}$ | $V(h) = h^{3}/3$ | steel per m³ $= 9/h$`,
  },
  {
    id: `math-8-39`,
    case_id: `MATH 8.39`,
    title: `Inspection Hours Across Growing Shipment Volumes`,
    context: `Customs inspection time follows $T(n)=A n^{0.5}$ hours for a consignment of $n>0$ shipments. Moving from a $25$-shipment consignment to a $225$-shipment consignment added exactly $60$ inspection hours. A staffing plan can supply at most $90$ inspection hours. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The inspection law is $T(n)=6\\sqrt{n}$.`,
      `The $90$-hour staffing ceiling can cover at most $225$ shipments.`,
      `Multiplying a consignment size by $2.25$ multiplies total inspection time by $1.5$.`,
      `At $144$ shipments, time per shipment is $0.5$ hour.`,
      `Total inspection time is proportional to the number of shipments.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from the difference between two consignments. The added $60$ hours equals $T(225)-T(25)$, so both square-root factors are needed. Their values are $15$ and $5$.

A common mistake is to attach $60$ hours to the larger consignment alone. That would ignore the inspection time already required at $25$ shipments.

$$T(225)-T(25)=A(\\sqrt{225}-\\sqrt{25})=60$$

$$A(15-5)=60 \\quad \\Rightarrow \\quad A=6, qquad T(n)=6\\sqrt n$$

The difference calibration produces exactly the law stated, so the statement is True.`,
      `**B.** → True

This claim asks to convert an hours ceiling into a shipment ceiling. Since $T(n)=6\\sqrt n$ is increasing, the largest feasible consignment occurs where the available $90$ hours are fully used. The resulting equation must be inverted.

A common mistake is to compute $90/6=15$ and call that the shipment count. Fifteen is $\\sqrt n$, not $n$.

$$6\\sqrt n\\le90 \\quad \\Rightarrow \\quad \\sqrt n\\le15$$

$$n\\le15^2=225, qquad T(225)=6(15)=90$$

Thus the staffing ceiling covers no more than $225$ shipments, and the boundary is attainable. The claim is true.`,
      `**C.** → True

This claim asks for a non-quadrupling scale factor. For a square-root law, multiplying shipments by $k$ multiplies hours by $\\sqrt k$. The coefficient and starting consignment cancel in the ratio.

A common mistake is to use $2.25$ itself as the time multiplier, which would impose a proportional model rather than the stated exponent $0.5$.

$$\\frac{T(2.25n)}{T(n)} =\\frac{6(2.25n)^{0.5}}{6n^{0.5}} =(2.25)^{0.5}$$

$$(2.25)^{0.5}=\\sqrt{\\frac94}=\\frac32=1.5$$

The inspection-time multiplier is exactly $1.5$, so the statement is True.`,
      `**D.** → True

This claim asks for a derived average rather than total inspection time. At $144$ shipments, total time is $6\\sqrt{144}=72$ hours. Dividing by the shipment count gives one half hour per shipment.

A common mistake is to confuse the total $72$ with the average, or to divide the coefficient $6$ by $144$ without retaining the square-root factor.

$$\\frac{T(n)}{n}=\\frac{6n^{0.5}}{n}=6n^{-0.5}$$

$$\\frac{T(144)}{144} =\\frac{6}{\\sqrt{144}} =\\frac{6}{12}=0.5$$

Time per shipment is exactly $0.5$ hour at $144$ shipments, so the statement is True.`,
      `**E.** → False

This claim asks whether total time is proportional to shipment count. Proportionality requires exponent $1$ and a constant time per shipment. Here the exponent is $0.5$, and time per shipment is $6n^{-0.5}$, which falls as consignments grow.

A common mistake is to infer proportionality merely because both $T$ and $n$ increase. Increasing together is weaker than increasing in a constant ratio.

$$\\frac{T(kn)}{T(n)}=k^{0.5}\\ne k \\quad \\text{for } k\\ne1$$

$$\\frac{T(225)}{225}=\\frac{90}{225}=0.4, \\qquad \\frac{T(25)}{25}=\\frac{30}{25}=1.2$$

The per-shipment rate is not constant, so total time is not proportional to shipments. The claim is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 39,
    solution_overview: `Inspection time is $T(n)=An^{0.5}$, and increasing a consignment from $25$ to $225$ shipments adds $60$ hours.

**Part 1:** Translate the difference and the staffing ceiling:

$$A(15-5)=60, qquad T(n)\\le90$$

**Part 2:** Recover the total and average laws:

$$T(n)=6\\sqrt n, qquad \\frac{T(n)}n=6n^{-0.5}$$

**Part 3:** Invert the ceiling and evaluate the scale questions:

$$6\\sqrt n\\le90\\Rightarrow n\\le225, quad (2.25)^{0.5}=1.5, quad \\frac{T(144)}{144}=0.5$$

**Answer.** $A=6$ | ceiling $225$ shipments | time per shipment falls with consignment size`,
  },
  {
    id: `math-8-40`,
    case_id: `MATH 8.40`,
    title: `Illuminance Down the Length of a Gallery`,
    context: `Illuminance from a gallery spotlight follows the inverse-square law $I(d)=A d^{-2}$ lux, where $d>0$ is the distance in metres. A meter reading two metres from the lamp records $300$ lux. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At four metres the illuminance is $75$ lux.`,
      `Doubling the distance cuts the illuminance to a quarter.`,
      `Illuminance is one ninth of its two-metre reading at a distance of $6$ metres.`,
      `Halving the distance quadruples the illuminance.`,
      `Illuminance falls as the distance from the lamp grows.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim evaluates the law at twice the metered distance. The meter reading gives $A=1200$, and at four metres the illuminance is $1200/16=75$ lux.

Negative exponents invert the shape factor, so a larger distance produces a smaller reading. Multiplying rather than dividing by $d^{2}$ is the common slip and would give an absurd $4800$ lux further from the lamp.

Recover the coefficient:

$$A(2)^{-2} = 300 \\quad \\Rightarrow \\quad \\frac{A}{4} = 300 \\quad \\Rightarrow \\quad A = 1200$$

$$I(d) = \\frac{1200}{d^{2}}$$

Evaluate at four metres:

$$I(4) = \\frac{1200}{16} = 75$$

The illuminance is $75$ lux, so the statement is True.`,
      `**B.** → True

This claim states the inverse-square rule as a scale factor. Doubling the distance multiplies illuminance by $2^{-2}=1/4$, independently of the coefficient and of the starting distance.

Part A is one instance of this rule — $300$ lux at two metres becoming $75$ lux at four — but the factor holds everywhere along the gallery, which is what makes it a rule rather than a coincidence.

Form the scale factor:

$$\\frac{I(2d)}{I(d)} = \\frac{A(2d)^{-2}}{Ad^{-2}} = 2^{-2} = \\frac{1}{4}$$

Check two separate doublings:

$$I(2) = 300, \\; I(4) = 75; \\qquad I(5) = 48, \\; I(10) = 12$$

Both fall to a quarter, so the statement is True.`,
      `**C.** → True

The target is a fraction of the two-metre reading, so the coefficient cancels in a distance ratio. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{I(d)}{I(2)}=\\left(\\frac{d}{2}\\right)^{-2}=\\frac{1}{9}$$

The relevant comparison can then be written as

$$\\left(\\frac{d}{2}\\right)^2=9 \\quad\\Rightarrow\\quad d=6$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

At six metres the reading is exactly one ninth of the two-metre value. Therefore the statement is True.`,
      `**D.** → True

This claim applies the scale factor in the other direction. Halving the distance multiplies illuminance by $(1/2)^{-2}=4$.

Sign handling is the only difficulty: the multiplier $1/2$ raised to the power $-2$ inverts and then squares, giving $4$ rather than $1/4$. The symmetry with part B is exact — moving closer gains as much as moving away loses.

Apply the scale factor:

$$\\frac{I(d/2)}{I(d)} = \\left(\\frac{1}{2}\\right)^{-2} = 4$$

Check on the metered distance:

$$I(2) = 300, \\qquad I(1) = \\frac{1200}{1} = 1200$$

Illuminance quadruples, so the statement is True.`,
      `**E.** → True

This claim asks for the direction of the law, which the sign of the exponent settles. With $A=1200>0$ and exponent $-2<0$, illuminance decreases on the whole gallery.

The decline is also decelerating: most of the light is lost in the first few metres, and beyond about eight metres the readings change slowly in absolute terms. Both facts come from the same negative exponent.

Read the sign structure:

$$I(d) = 1200\\,d^{-2}, \\qquad A > 0, \\quad r = -2 < 0$$

Trace the readings down the gallery:

$$I(1) = 1200, \\quad I(2) = 300, \\quad I(4) = 75, \\quad I(10) = 12$$

Illuminance falls monotonically with distance, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 40,
    solution_overview: `Illuminance follows $I(d)=Ad^{-2}$ lux at distance $d>0$ metres, with a meter reading of $300$ lux at two metres.

**Part 1: Building the model.**

Let $d$ = distance in metres and $I(d)$ = illuminance in lux. The inverse-square form fixes the exponent at $-2$, so the meter reading is the only fact needed to pin the coefficient.

**1. Translate: the meter reading.**

$$A(2)^{-2} = 300, \\qquad 2^{-2} = \\tfrac{1}{4}$$

**2. Translate: the scale rule.** Coefficients cancel in ratios:

$$\\frac{I(kd)}{I(d)} = k^{-2}$$

**Part 2: The model.**

$$I(d) = \\frac{1200}{d^{2}} \\tag{1}$$

$$\\frac{I(kd)}{I(d)} = k^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** The meter reading gives the coefficient:

$$A = 300 \\times 4 = 1200$$

**2.** Readings down the gallery:

$$I(1) = 1200, \\quad I(2) = 300, \\quad I(4) = 75, \\quad I(5) = 48, \\quad I(10) = 12$$

**3.** Scale factors from (2), in both directions:

$$2^{-2} = \\tfrac{1}{4}, \\qquad \\left(\\tfrac{1}{2}\\right)^{-2} = 4, \\qquad 5^{-2} = \\tfrac{1}{25}$$

**4.** Inverting (1) turns a lighting target into a distance:

$$d = \\sqrt{\\frac{1200}{I}}, \\qquad I = 48 \\;\\Rightarrow\\; d = 5$$

**5.** The negative exponent makes the law decreasing everywhere, with most of the light lost in the first few metres.

**Answer.** $A = 1200$ | $I(d) = 1200d^{-2}$ | $I(10) = 12$ lux`,
  },
  {
    id: `math-8-41`,
    case_id: `MATH 8.41`,
    title: `Audit Cost With Economies of Scale`,
    context: `An audit practice prices engagements by $C(n)=A n^{0.75}$, where $n>0$ is the number of accounts tested. The bill rises by exactly $1900$ when engagement size rises from $16$ to $81$ accounts. A client has a $2700$ cap, while a rival quotes $R(n)=50n$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The pricing law is $C(n)=100n^{0.75}$.`,
      `The $2700$ cap covers at most $81$ accounts under the practice's schedule.`,
      `The two firms tie at $16$ accounts, and the practice is cheaper than the rival for every $n>16$.`,
      `A bill of $12500$ corresponds to an engagement of $625$ accounts.`,
      `Doubling the number of accounts raises the practice's bill by exactly $75\\%$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from a bill difference. Because $0.75=3/4$, the exact shape factors are $16^{3/4}=8$ and $81^{3/4}=27$. Their difference, not either factor alone, multiplies $A$ to produce the $1900$ increase.

A common mistake is to set $A81^{0.75}=1900$. The record describes a jump between two bills.

$$C(81)-C(16)=A(27-8)=1900$$

$$19A=1900 \\quad \\Rightarrow \\quad A=100, qquad C(n)=100n^{0.75}$$

The recovered schedule is exactly the one in the statement, so the statement is True.`,
      `**B.** → True

This claim converts a spending cap into an account ceiling. The schedule $C(n)=100n^{3/4}$ is increasing, so the largest engagement under the cap is found by solving the boundary equation. Raising both sides to the inverse power $4/3$ completes the inversion.

A common mistake is to divide by $100$ and report $27$ accounts. Twenty-seven is the value of $n^{3/4}$.

$$100n^{3/4}\\le2700 \\quad \\Rightarrow \\quad n^{3/4}\\le27$$

$$n\\le27^{4/3}=(\\sqrt[3]{27})^4=3^4=81$$

The endpoint costs $C(81)=2700$, so the cap covers at most $81$ accounts. The claim is true.`,
      `**C.** → True

This claim asks for the crossover with a linear rival. A tie requires $100n^{3/4}=50n$. For positive $n$, dividing by $50n^{3/4}$ leaves an equation in $n^{1/4}$. The relative exponent also determines which firm is cheaper after the tie.

A common mistake is to compare $100$ with $50$ and ignore that the rival's exponent is larger.

$$100n^{3/4}=50n \\quad \\Rightarrow \\quad 2=n^{1/4} \\quad \\Rightarrow \\quad n=16$$

$$\\frac{C(n)}{R(n)} =\\frac{100n^{3/4}}{50n} =2n^{-1/4}<1 \\quad \\text{when } n>16$$

The firms tie at $16$, and the practice is cheaper beyond that point, so the statement is True.`,
      `**D.** → True

This claim asks to invert the calibrated audit schedule for a target bill. Dividing $12500$ by $100$ gives $n^{3/4}=125$. Since $125=5^3$, applying the inverse exponent $4/3$ produces the exact fourth power $5^4$.

A common mistake is to treat the exponent as $3/4$ during inversion instead of using its reciprocal.

$$100n^{3/4}=12500 \\quad \\Rightarrow \\quad n^{3/4}=125=5^3$$

$$n=125^{4/3}=(5^3)^{4/3}=5^4=625$$

A direct check gives $100(625^{3/4})=100(125)=12500$. The target bill corresponds to $625$ accounts, so the statement is True.`,
      `**E.** → False

This claim asks for the percentage effect of doubling accounts. The scale multiplier is $2^{0.75}=2^{3/4}$, not $1+0.75$. Numerically it is about $1.682$, so the increase is about $68.2\\%$.

A common mistake is to read the exponent as a percentage response. Exponents govern multiplicative scaling through powers, not direct percentage addition.

$$\\frac{C(2n)}{C(n)}=2^{3/4}\\approx1.6818$$

$$\\frac{C(2n)-C(n)}{C(n)} =2^{3/4}-1 \\approx0.6818=68.18\\%$$

Doubling raises the bill by about $68\\%$, not exactly $75\\%$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 41,
    solution_overview: `Audit cost follows $C(n)=An^{3/4}$; the bill rises by $1900$ from $16$ to $81$ accounts. The rival charges $R(n)=50n$.

**Part 1:** Use the two exact fourth-power inputs:

$$A(81^{3/4}-16^{3/4})=A(27-8)=1900$$

**Part 2:** Recover and compare the schedules:

$$C(n)=100n^{3/4}, qquad R(n)=50n, qquad C=R\\Rightarrow n=16$$

**Part 3:** Invert the cap and target bill:

$$C(n)\\le2700\\Rightarrow n\\le81, qquad C(n)=12500\\Rightarrow n=625$$

**Answer.** $A=100$ | cap $81$ accounts | rival crossover $n=16$ | $12500$ bill at $n=625$`,
  },
  {
    id: `math-8-42`,
    case_id: `MATH 8.42`,
    title: `Airborne Particle Concentration Downwind`,
    context: `Downwind particle concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre, where $x>0$ is distance from the stack in metres. A monitor at $4$ metres reads exactly $43.75$ more than a monitor at $16$ metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The concentration law is $c(x)=400x^{-1.5}$.`,
      `Concentration is at most $6.25$ precisely when the monitor is at least $16$ metres from the stack.`,
      `Halving the distance multiplies concentration by exactly $2^{1.5}=2\\sqrt{2}$.`,
      `At $100$ metres, concentration is $0.4$ microgram per cubic metre.`,
      `Doubling the distance cuts concentration by exactly $50\\%$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from the difference between two monitor readings. With exponent $-1.5=-3/2$, the shape factors at $4$ and $16$ metres are $1/8$ and $1/64$. Their difference is $7/64$.

A common mistake is to treat $43.75$ as either monitor's reading. It is the near reading minus the far reading.

$$c(4)-c(16) =A\\left(4^{-3/2}-16^{-3/2}\\right) =A\\left(\\frac18-\\frac1{64}\\right)$$

$$A\\frac7{64}=43.75=\\frac{175}{4} \\quad \\Rightarrow \\quad A=400$$

Therefore $c(x)=400x^{-1.5}$, exactly as stated, so the statement is True.`,
      `**B.** → True

This claim asks for the distance threshold corresponding to a concentration ceiling. Because the exponent is negative and $A>0$, concentration falls as distance grows. Solving the boundary $c(x)=6.25$ therefore separates unsafe smaller distances from qualifying larger distances.

A common mistake is to reverse the inequality when interpreting a decreasing function.

$$400x^{-3/2}=6.25 \\quad \\Rightarrow \\quad x^{3/2}=\\frac{400}{6.25}=64$$

$$x=64^{2/3}=(\\sqrt[3]{64})^2=4^2=16, qquad c(x)\\le6.25 \\Longleftrightarrow x\\ge16$$

The threshold and inequality direction both match the statement, so it is true.`,
      `**C.** → True

This claim asks for the exact effect of halving distance. For exponent $-1.5$, the distance multiplier $1/2$ is itself raised to $-1.5$, which reverses it and produces $2^{1.5}$. This equals $2\\sqrt2$ exactly.

A common mistake is to say concentration merely doubles. That would correspond to exponent $-1$, not $-1.5$.

$$\\frac{c(x/2)}{c(x)} =\\left(\\frac12\\right)^{-1.5} =2^{1.5}$$

$$2^{1.5}=2^{3/2}=\\sqrt{2^3}=2\\sqrt2\\approx2.828$$

Halving distance multiplies concentration by the exact factor stated, so the statement is True.`,
      `**D.** → True

This claim asks for a concentration level after the coefficient has been recovered. At $100$ metres, the denominator is $100^{1.5}=1000$, because taking the square root first gives $10$ and cubing gives $1000$.

A common mistake is to calculate $100^{1.5}$ as $150$ or to apply the negative exponent without taking the reciprocal.

$$100^{1.5}=100^{3/2}=(\\sqrt{100})^3=10^3=1000$$

$$c(100)=400(100)^{-1.5} =\\frac{400}{1000}=0.4$$

The model gives $0.4$ microgram per cubic metre at $100$ metres, so the statement is True.`,
      `**E.** → False

This claim asks for the percentage reduction from doubling distance. The surviving concentration fraction is $2^{-1.5}=1/(2\\sqrt2)\\approx0.3536$. The percentage cut is one minus that fraction, about $64.6\\%$.

A common mistake is to confuse a negative exponent with an inverse-linear law, or to call the surviving $35.4\\%$ the percentage reduction.

$$\\frac{c(2x)}{c(x)} =2^{-1.5} =\\frac{1}{2\\sqrt2} \\approx0.3536$$

$$1-0.3536=0.6464\\approx64.6\\%$$

Doubling distance cuts concentration by about $64.6\\%$, not exactly $50\\%$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 42,
    solution_overview: `Concentration is $c(x)=Ax^{-3/2}$, calibrated by the difference between monitors at $4$ and $16$ metres.

**Part 1:** Translate the monitor difference:

$$A\\left(\\frac18-\\frac1{64}\\right)=43.75$$

**Part 2:** Recover the model and its scale law:

$$c(x)=400x^{-3/2}, qquad \\frac{c(kx)}{c(x)}=k^{-3/2}$$

**Part 3:** Solve the threshold and evaluate the exact factors:

$$c(x)\\le6.25\\Longleftrightarrow x\\ge16, quad (1/2)^{-3/2}=2\\sqrt2, quad c(100)=0.4$$

**Answer.** $A=400$ | threshold $x=16$ m | halving factor $2\\sqrt2$ | $c(100)=0.4$`,
  },
  {
    id: `math-8-43`,
    case_id: `MATH 8.43`,
    title: `Storm Surge Feeding a Cubic Loss Index`,
    context: `A reinsurer models coastal losses in two stages. Storm surge height is $s(w)=0.5 w^{0.5}$ metres for a wind speed of $w>0$, and the loss index rises with the cube of surge height, $L(s)=32 s^{3}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The composed loss index is $L(w)=4w^{1.5}$.`,
      `Doubling the wind speed multiplies the loss index by about $2.83$.`,
      `The loss index reaches $1000$ at a wind speed of about $39.7$.`,
      `At a wind speed of $64$, the loss index is $2048$.`,
      `Increasing wind speed by $50\\%$ raises the loss index by about $83.7\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the two stages combined. Substituting the surge law into the loss law multiplies the exponents to $1.5$ and collapses the constants to $4$.

The step that needs care is cubing the whole surge law, coefficient included: $\\left(0.5w^{0.5}\\right)^{3}$ contributes $0.5^{3}=0.125$ as well as $w^{1.5}$. Cubing only the variable part would leave a loss index eight times too large.

Substitute the surge law into the loss law:

$$L(w) = 32\\left(0.5w^{0.5}\\right)^{3} = 32 \\times 0.5^{3} \\times w^{0.5 \\times 3}$$

Simplify the constant and the exponent:

$$32 \\times 0.125 = 4, \\qquad 0.5 \\times 3 = 1.5$$

$$L(w) = 4w^{1.5}$$

The composed law is $4w^{1.5}$, so the statement is True.`,
      `**B.** → True

This claim applies a scale factor to the composed law. With exponent $1.5$, doubling the wind speed multiplies losses by $2^{1.5}=2\\sqrt{2}\\approx2.828$.

The composed exponent is what governs this, not either stage's exponent alone: surge rises by only $41\\%$ when wind doubles, and cubing that rise produces the $183\\%$ jump in losses. Checking both routes is a good guard against composing incorrectly.

Form the scale factor on the composed law:

$$\\frac{L(2w)}{L(w)} = 2^{1.5} = 2\\sqrt{2} \\approx 2.8284$$

Verify through the two stages:

$$s \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{3} \\approx 2.828$$

Losses multiply by about $2.83$, so the statement is True.`,
      `**C.** → True

Composing the two stages gives $L(w)=4w^{1.5}$, which must be inverted for the specified loss. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$4w^{1.5}=1000 \\quad\\Rightarrow\\quad w^{1.5}=250$$

The relevant comparison can then be written as

$$w=250^{2/3}\\approx39.69$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The index reaches $1000$ at wind speed about $39.7$. Therefore the statement is True.`,
      `**D.** → True

The composed law must be evaluated with the square-root contribution retained before the cube is applied. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$L(64)=4(64)^{1.5}=4(64)(8)$$

The relevant comparison can then be written as

$$L(64)=2048$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The loss index is $2048$. Therefore the statement is True.`,
      `**E.** → True

A fifty-percent wind increase uses the composed exponent $1.5$, not either stage in isolation. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{L(1.5w)}{L(w)}=1.5^{1.5}\\approx1.8371$$

The relevant comparison can then be written as

$$(1.8371-1)\\times100\\%\\approx83.7\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

The loss index rises by about $83.7\\%$. Therefore the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 43,
    solution_overview: `Surge is $s(w)=0.5w^{0.5}$ metres and the loss index is $L(s)=32s^{3}$.

**Part 1: Building the model.**

Let $w$ = wind speed, $s$ = surge height, $L$ = loss index. This is a chain, so composing multiplies exponents and raises the inner coefficient to the outer power.

**1. Translate: the surge stage.**

$$s(w) = 0.5w^{0.5}$$

**2. Translate: the loss stage applied to it.**

$$L(w) = 32\\left(0.5w^{0.5}\\right)^{3}$$

**Part 2: The model.**

$$32 \\times 0.5^{3} = 4, \\qquad 0.5 \\times 3 = 1.5 \\tag{1}$$

$$L(w) = 4w^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** Levels from (2), checked stage by stage:

$$L(25) = 500 \\;\\; (s = 2.5), \\qquad L(100) = 4000 \\;\\; (s = 5)$$

**2.** The composed scale factor for a doubling:

$$2^{1.5} \\approx 2.83, \\qquad \\text{via stages: } \\left(2^{0.5}\\right)^{3} \\approx 1.414^{3} \\approx 2.83$$

**3.** Inverting the composed law turns a loss budget into a wind speed:

$$w = \\left(\\frac{L}{4}\\right)^{2/3}, \\qquad L = 4000 \\;\\Rightarrow\\; w = 100$$

**4.** The composed exponent exceeds $1$, so losses are convex in wind speed:

$$4^{1.5} = 8 > 4$$

**5.** The concave surge stage ($0.5$) is more than offset by the cubic loss stage, which is the modelling point of the chain.

**Answer.** $L(w) = 4w^{1.5}$ | composed exponent $1.5$ | $L(100) = 4000$`,
  },
  {
    id: `math-8-44`,
    case_id: `MATH 8.44`,
    title: `Market Impact of a Block Trade`,
    context: `A broker models price impact as $I(v)=A v^{0.5}$ basis points, where $v>0$ is order size as a fraction of average daily volume. Increasing an order from $0.04$ ADV to $0.09$ ADV adds exactly $6$ basis points of impact. The scaled impact charge is $vI(v)$, while a notional fee is $F(v)=30v$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The impact law is $I(v)=60\\sqrt{v}$.`,
      `Increasing order size from $0.04$ to $0.09$ ADV multiplies impact by $1.5$.`,
      `The notional fee and scaled impact charge break even at $v=0.25$ ADV, with impact charge lower below that size.`,
      `At $v=0.16$ ADV, impact is $24$ basis points and the scaled impact charge is $3.84$.`,
      `The scaled impact charge is proportional to order size.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from an impact difference. The square-root factors at $0.04$ and $0.09$ are $0.2$ and $0.3$, so the observed six-basis-point increase equals $0.1A$.

A common mistake is to use $I(0.09)=6$. Six is the change in impact, not the larger order's total impact.

$$I(0.09)-I(0.04) =A(\\sqrt{0.09}-\\sqrt{0.04}) =A(0.3-0.2)$$

$$0.1A=6 \\quad \\Rightarrow \\quad A=60, qquad I(v)=60\\sqrt v$$

The difference calibration gives exactly the impact law stated, so the statement is True.`,
      `**B.** → True

This claim asks for the impact multiplier associated with a non-fourfold size change. The order grows by $0.09/0.04=2.25$, and a square-root impact law converts that into a multiplier of $\\sqrt{2.25}=1.5$.

A common mistake is to say the impact also grows $2.25$ times. That would be linear impact rather than square-root impact.

$$\\frac{0.09}{0.04}=2.25$$

$$\\frac{I(0.09)}{I(0.04)} =\\left(\\frac{0.09}{0.04}\\right)^{0.5} =\\sqrt{2.25}=1.5$$

Indeed, the levels are $18$ and $12$ basis points. Their ratio is $1.5$, so the statement is True.`,
      `**C.** → True

This claim asks for the break-even between a notional fee and the scaled impact charge. Since $vI(v)=60v^{3/2}$, equating it to $30v$ and dividing by positive $v$ leaves an equation in $\\sqrt v$.

A common mistake is to compare $I(v)$ directly with $F(v)$; the context defines the impact charge as $vI(v)$.

$$60v^{3/2}=30v \\quad \\Rightarrow \\quad 2\\sqrt v=1 \\quad \\Rightarrow \\quad v=0.25$$

$$\\frac{vI(v)}{F(v)} =\\frac{60v^{3/2}}{30v} =2\\sqrt v<1 \\quad \\text{when }0<v<0.25$$

Break-even occurs at $0.25$ ADV and impact charge is lower below it, so the statement is True.`,
      `**D.** → True

This claim asks for both impact in basis points and the scaled charge. At $v=0.16$, the square root is $0.4$, giving impact $24$. Multiplying that impact by order size gives $0.16(24)=3.84$.

A common mistake is to treat the impact and impact charge as the same quantity. The latter includes one additional factor of $v$.

$$I(0.16)=60\\sqrt{0.16}=60(0.4)=24$$

$$vI(v)=0.16(24)=3.84$$

Both the $24$-basis-point impact and the $3.84$ scaled charge agree with the statement, so the statement is True.`,
      `**E.** → False

This claim asks whether the scaled impact charge is linear in order size. Multiplying $I(v)=60v^{1/2}$ by $v$ gives $60v^{3/2}$, whose exponent is $1.5$, not $1$. Its per-unit charge therefore rises with size.

A common mistake is to see the explicit factor $v$ in $vI(v)$ and overlook the additional $v^{1/2}$ inside impact.

$$vI(v)=v(60v^{1/2})=60v^{3/2}$$

$$\\frac{(2v)I(2v)}{vI(v)} =2^{3/2}=2\\sqrt2\\ne2$$

A proportional charge would double when size doubles; this charge grows by about $2.83$. The claim is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 44,
    solution_overview: `Impact is $I(v)=Av^{1/2}$, calibrated by the six-basis-point increase from $0.04$ to $0.09$ ADV. The scaled charge is $vI(v)$.

**Part 1:** Use the impact difference:

$$A(0.3-0.2)=6$$

**Part 2:** Recover impact and charge laws:

$$I(v)=60\\sqrt v, qquad vI(v)=60v^{3/2}, qquad F(v)=30v$$

**Part 3:** Evaluate scaling and break-even:

$$\\sqrt{2.25}=1.5, quad 60v^{3/2}=30v\\Rightarrow v=0.25, quad I(0.16)=24$$

**Answer.** $A=60$ bp | break-even $v=0.25$ ADV | scaled impact charge has exponent $3/2$`,
  },
  {
    id: `math-8-45`,
    case_id: `MATH 8.45`,
    title: `Allometric Energy Use Across Livestock Weights`,
    context: `Daily energy use follows $E(m)=A m^{2/3}$ units for body mass $m>0$ kilograms. A $64$ kg animal uses exactly $70$ more energy units per day than a $27$ kg animal. A herd's total use is the sum of its animals' individual uses. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The energy law is $E(m)=10m^{2/3}$.`,
      `Doubling body mass multiplies energy use by exactly $2^{2/3}=\\sqrt[3]{4}$.`,
      `Eight $27$ kg animals use twice as much total energy as one $216$ kg animal.`,
      `Combining two equal animals into one animal of twice the mass leaves total energy use unchanged.`,
      `Energy use per kilogram is constant across body masses.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from a two-point difference. The exact shape factors are $64^{2/3}=16$ and $27^{2/3}=9$, so the measured $70$-unit gap equals seven copies of $A$.

A common mistake is to attach $70$ to the $64$ kg animal as its total use. It is the larger animal's use minus the smaller animal's use.

$$E(64)-E(27) =A(64^{2/3}-27^{2/3}) =A(16-9)$$

$$7A=70 \\quad \\Rightarrow \\quad A=10, qquad E(m)=10m^{2/3}$$

The calibrated allometric law is exactly the one in the statement, so the statement is True.`,
      `**B.** → True

This claim asks for the exact scale factor when mass doubles. The coefficient and starting mass cancel, leaving $2^{2/3}$. Writing the power as a cube root gives the equivalent exact form $\\sqrt[3]{4}$.

A common mistake is to interpret exponent $2/3$ as a $66.7\\%$ increase. The multiplier is a power of $2$, not $1+2/3$.

$$\\frac{E(2m)}{E(m)} =\\frac{10(2m)^{2/3}}{10m^{2/3}} =2^{2/3}$$

$$2^{2/3}=(2^2)^{1/3}=\\sqrt[3]{4}\\approx1.587$$

Both exact expressions in the statement describe the same multiplier, so the statement is True.`,
      `**C.** → True

This claim asks for a composed herd total, not merely one animal's use. A $27$ kg animal uses $10(9)=90$ units, so eight use $720$. Since $216=6^3$, one $216$ kg animal uses $10(6^2)=360$ units.

A common mistake is to combine the herd's masses first. Allometric energy is nonlinear, so eight separate animals are not equivalent to one animal with their combined mass.

$$8E(27)=8\\left(10\\cdot27^{2/3}\\right) =8(90)=720$$

$$E(216)=10(216^{1/3})^2 =10(6^2)=360, qquad \\frac{720}{360}=2$$

The eight-animal herd uses exactly twice the single animal's energy, so the statement is True.`,
      `**D.** → False

This claim asks whether merging two equal animals preserves total use. Before combining, the total is $2E(m)$. One animal of mass $2m$ uses $E(2m)=2^{2/3}E(m)$, and $2^{2/3}<2$.

A common mistake is to use only total mass and forget that the model is applied separately to each animal before herd totals are added.

$$E(m)+E(m)=2E(m)$$

$$E(2m)=2^{2/3}E(m)\\approx1.587E(m)<2E(m)$$

For example, two $27$ kg animals use $180$ units, while one $54$ kg animal uses about $142.9$. Total use falls rather than remaining unchanged, so the statement is False.`,
      `**E.** → False

This claim asks whether energy use per kilogram is constant. Dividing the allometric law by mass reduces the exponent by one, giving $10m^{-1/3}$. The negative exponent means the per-kilogram rate falls as body mass rises.

A common mistake is to confuse rising total use with a constant average rate. Total energy rises, but less than proportionally.

$$\\frac{E(m)}{m} =\\frac{10m^{2/3}}{m} =10m^{-1/3}$$

$$\\frac{E(27)}{27}=\\frac{90}{27}=\\frac{10}{3}, qquad \\frac{E(64)}{64}=\\frac{160}{64}=2.5$$

The two per-kilogram values differ and the derived rate declines with mass, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 45,
    solution_overview: `Energy follows $E(m)=Am^{2/3}$, calibrated by the $70$-unit difference between $64$ kg and $27$ kg animals.

**Part 1:** Translate the two-point calibration:

$$A(64^{2/3}-27^{2/3})=A(16-9)=70$$

**Part 2:** Recover the individual and per-kilogram laws:

$$E(m)=10m^{2/3}, qquad \\frac{E(m)}m=10m^{-1/3}$$

**Part 3:** Apply exact scaling and compose herd totals:

$$\\frac{E(2m)}{E(m)}=2^{2/3}=\\sqrt[3]{4}, quad 8E(27)=720, quad E(216)=360$$

**Answer.** $A=10$ | doubling factor $2^{2/3}$ | eight $27$ kg animals use twice one $216$ kg animal`,
  },
  {
    id: `math-8-46`,
    case_id: `MATH 8.46`,
    title: `Retail Catchment Under a Distance-Decay Law`,
    context: `Weekly footfall at a retail park from a residential zone follows $f(d)=A d^{-1.5}$ visitors, where $d>0$ is the driving distance in kilometres. The planning file omits the coefficient: it records only that a zone $4$ kilometres away supplies $350$ more visitors a week than a zone $16$ kilometres away. A zone counts as core catchment when it supplies at least $100$ visitors a week. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient of the footfall law is $3200$.`,
      `The zone four kilometres away supplies $400$ visitors a week.`,
      `Quadrupling the driving distance cuts footfall to one eighth.`,
      `The core-catchment boundary lies just beyond $10$ kilometres.`,
      `A zone nine kilometres away falls outside the core catchment.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the scale factor, which the planning file never states. Rebuilding it from the recorded gap of $350$ visitors between two zones gives $A=3200$.

A common mistake is to treat $350$ as one zone's footfall, or to divide it by a single shape factor such as $4^{-1.5}$. The file records a *difference* between two zones, so the coefficient multiplies the difference of the two shape factors. Both distances are convenient: $4$ and $16$ are perfect squares, so the fractional exponent resolves exactly.

Evaluate the two shape factors:

$$4^{1.5} = (2^{2})^{3/2} = 2^{3} = 8, \\qquad 16^{1.5} = (4^{2})^{3/2} = 4^{3} = 64$$

Write the recorded gap through the law:

$$f(4) - f(16) = A\\left(\\frac{1}{8} - \\frac{1}{64}\\right) = A \\cdot \\frac{7}{64} = 350$$

Solve for the coefficient:

$$A = 350 \\cdot \\frac{64}{7} = 3200$$

The footfall law is $f(d)=3200d^{-1.5}$, so the statement is True.`,
      `**B.** → True

This claim asks for the nearer zone's own footfall, which the file gives only indirectly. With $A=3200$ the zone supplies $3200/8=400$ visitors a week.

The recorded $350$ is the natural wrong answer: it is the *gap* between the two zones, not the nearer zone's traffic. The two are close in size here precisely because the distant zone contributes so little — at $16$ kilometres it supplies only $50$ visitors, an eighth of the nearer zone's figure, so the gap sits just under the near zone's total.

Evaluate the law at four kilometres:

$$f(4) = \\frac{3200}{4^{1.5}} = \\frac{3200}{8} = 400$$

Check the pair against the recorded gap:

$$f(16) = \\frac{3200}{64} = 50, \\qquad 400 - 50 = 350 \\;\\checkmark$$

The nearer zone supplies $400$ visitors a week, so the statement is True.`,
      `**C.** → True

This claim applies a scale factor, so only the exponent matters. With exponent $-1.5$, quadrupling the distance multiplies footfall by $4^{-1.5}=1/8$.

The fractional exponent invites two slips: reading the factor as $1/4$, as if decay were proportional, or as $1/16$, as if the law were inverse-square. The exponent $1.5$ sits between the two, and quadrupling gives $4^{3/2}=8$ — which is exactly the relationship between the two zones in the file, $16$ kilometres being four times $4$.

Take the ratio at quadrupled distance:

$$\\frac{f(4d)}{f(d)} = \\frac{A(4d)^{-1.5}}{Ad^{-1.5}} = 4^{-1.5} = \\frac{1}{4^{3/2}} = \\frac{1}{8}$$

Verify on the two recorded zones:

$$\\frac{f(16)}{f(4)} = \\frac{50}{400} = \\frac{1}{8} \\;\\checkmark$$

Footfall falls to an eighth, so the statement is True.`,
      `**D.** → True

This claim asks where footfall falls to the $100$-visitor threshold, so the law has to be inverted. The boundary sits at about $10.08$ kilometres, just past the round figure.

Inverting a fractional exponent is where this goes wrong: after reaching $d^{1.5}=32$ it is tempting to square the $32$, or to halve it, instead of raising it to the reciprocal power $2/3$. Writing $32$ as a power of two makes the reciprocal exponent easy to apply exactly.

Set the law against the threshold:

$$\\frac{3200}{d^{1.5}} = 100 \\quad \\Rightarrow \\quad d^{1.5} = 32$$

Raise both sides to the power $2/3$:

$$d = 32^{2/3} = (2^{5})^{2/3} = 2^{10/3} \\approx 10.08$$

Check the round distance against the threshold:

$$f(10) = \\frac{3200}{10^{1.5}} \\approx \\frac{3200}{31.62} \\approx 101.2 > 100$$

A zone at $10$ kilometres still clears the threshold, so the boundary lies just beyond it and the claim is true.`,
      `**E.** → False

This claim tests a specific zone against the $100$-visitor threshold. At nine kilometres the model gives about $118.5$ visitors, so the zone is inside the core catchment.

The reasoning that fails here works from the wrong landmark: the file's distant zone at $16$ kilometres supplies only $50$ visitors, and nine kilometres feels closer to that zone than to the busy four-kilometre one. Distance decay is steepest near the retail park, so most of the drop from $400$ to $50$ has already happened well before nine kilometres. The boundary computed from the threshold sits at about $10.08$ kilometres, and nine is comfortably inside it.

Evaluate the shape factor exactly — nine is a perfect square, so the fractional exponent resolves:

$$9^{1.5} = (3^{2})^{3/2} = 3^{3} = 27$$

Evaluate the law:

$$f(9) = \\frac{3200}{27} \\approx 118.5$$

At about $118$ visitors a week the zone clears the $100$-visitor threshold, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 46,
    solution_overview: `Footfall follows $f(d)=Ad^{-1.5}$ visitors a week from a zone $d>0$ kilometres away. A zone at $4$ kilometres supplies $350$ more visitors than one at $16$ kilometres, and core catchment means at least $100$ visitors a week.

**Part 1: Building the model.**

Let $d$ = driving distance in kilometres and $f(d)$ = weekly visitors. The exponent is given and negative, so footfall decays with distance; the recorded gap between two zones fixes the coefficient.

**1. Translate: the two zones.** Both distances are perfect squares, so the shape factors are exact:

$$4^{1.5} = 8, \\qquad 16^{1.5} = 64$$

**2. Translate: the recorded gap.** Write both zones through the law and subtract:

$$\\frac{A}{8} - \\frac{A}{64} = 350$$

**3. Translate: the catchment rule.** The threshold sets a level to invert:

$$f(d) = 100$$

**Part 2: The model.**

$$\\frac{7A}{64} = 350 \\tag{1}$$

$$\\frac{A}{d^{1.5}} = 100 \\tag{2}$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$A = 350 \\cdot \\frac{64}{7} = 3200, \\qquad f(d) = \\frac{3200}{d^{1.5}}$$

**2.** Check the two zones against the file:

$$f(4) = 400, \\qquad f(16) = 50, \\qquad 400 - 50 = 350 \\;\\checkmark$$

**3.** Equation (2) inverts at the threshold, using the reciprocal exponent:

$$d^{1.5} = 32 \\;\\Rightarrow\\; d = 32^{2/3} = 2^{10/3} \\approx 10.08 \\text{ km}$$

**4.** Scale factors need only the exponent:

$$\\frac{f(4d)}{f(d)} = 4^{-1.5} = \\tfrac{1}{8}$$

**5.** Test the zones in question against the threshold:

$$f(9) = \\frac{3200}{27} \\approx 118.5 > 100, \\qquad f(10) \\approx 101.2 > 100$$

**Answer.** $A = 3200$ | $f(d) = 3200d^{-1.5}$ | $f(4) = 400$ | core catchment out to $d \\approx 10.08$ km`,
  },
  {
    id: `math-8-47`,
    case_id: `MATH 8.47`,
    title: `Rooftop Solar Output Across Two Installed Arrays`,
    context: `Daily output from a rooftop solar installation follows $y(a)=A a^{r}$ kilowatt-hours, where $a>0$ is the installed panel area in square metres. Two arrays are in service: a $100$ m² array delivers $240$ kWh a day, and a $225$ m² array delivers $360$ kWh. A proposal would expand the second array to $450$ m². Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Output is proportional to the installed area.`,
      `The exponent is $0.5$ and the coefficient is $24$.`,
      `Doubling the installed area raises output by about $50\\%$.`,
      `Expanding the $225$ m² array to $450$ m² would push output above $520$ kWh.`,
      `Output per square metre rises as the array grows.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

This claim asserts an exponent of $1$, which the two arrays contradict. Area rises by a factor of $2.25$ between them while output rises only by a factor of $1.5$.

Proportionality is the natural first assumption for solar panels, and it is what a sales brochure would imply. The data say otherwise — shading, inverter limits and roof orientation all bite as arrays grow — and the exponent that fits is $0.5$.

Compare the two ratios:

$$\\frac{225}{100} = 2.25, \\qquad \\frac{360}{240} = 1.5$$

Test the proportional prediction against the second array:

$$240 \\times 2.25 = 540 \\ne 360$$

The proportional model overstates the larger array by $180$ kWh, so the statement is False.`,
      `**B.** → True

This claim gives the full calibration. Dividing one array by the other leaves $2.25^{r}=1.5$, so $r=0.5$, and either array then gives $A=24$.

Because $1.5^{2}=2.25$, the exponent falls out without logarithms. Checking the coefficient on both arrays is the confirmation that the power form fits: $240/10=24$ and $360/15=24$ agree exactly, which a wrong exponent would not allow.

Take the ratio of the two arrays:

$$\\left(\\frac{225}{100}\\right)^{r} = \\frac{360}{240} \\quad \\Rightarrow \\quad 2.25^{r} = 1.5 = 2.25^{1/2}$$

$$r = 0.5$$

Recover the coefficient from each array:

$$\\frac{240}{\\sqrt{100}} = 24, \\qquad \\frac{360}{\\sqrt{225}} = 24, \\qquad y(a) = 24\\sqrt{a}$$

Both constants are as claimed, so the statement is true.`,
      `**C.** → False

This claim misreads the scale factor. Doubling the area multiplies output by $2^{0.5}\\approx1.414$, a rise of about $41\\%$, not $50\\%$.

The figure $50\\%$ is what the observed pair of arrays suggests at a glance — output rose by half between them — but that pair differs by a factor of $2.25$ in area, not $2$. Using a scale factor requires matching the multiplier exactly.

Form the scale factor for a doubling:

$$\\frac{y(2a)}{y(a)} = 2^{0.5} \\approx 1.4142$$

Contrast with the observed pair:

$$\\left(\\frac{225}{100}\\right)^{0.5} = 1.5 \\quad \\text{(a } 2.25\\times \\text{ expansion, not } 2\\times)$$

A doubling gives about $41\\%$, so the statement is False.`,
      `**D.** → False

This claim evaluates the proposal. Doubling that array multiplies its output by $\\sqrt{2}$, giving about $509$ kWh — short of the $520$ threshold.

The margin is narrow, so the question cannot be settled by eye, and it is exactly the sort of check that matters before signing off on an expansion. A proportional forecast would have promised $720$ kWh, more than $200$ kWh above what the calibrated model supports.

Apply the scale factor to the existing array:

$$y(450) = 360 \\times 2^{0.5} \\approx 360 \\times 1.4142 \\approx 509.1$$

Confirm through the calibrated law:

$$y(450) = 24\\sqrt{450} \\approx 24 \\times 21.213 \\approx 509.1$$

Compare with the threshold:

$$509.1 < 520$$

The expansion falls short, so the statement is False.`,
      `**E.** → False

This claim reverses the behaviour of the average. Dividing output by area gives $24a^{-0.5}$, whose exponent is negative, so each square metre delivers less as the array expands.

This is the practical meaning of the sub-linear exponent, and it is what makes the proposal in part D disappointing: the extra $225$ m² produce only about $149$ kWh, whereas the first $225$ m² produced $360$.

Divide output by area:

$$\\frac{y(a)}{a} = \\frac{24a^{0.5}}{a} = 24a^{-0.5}$$

Evaluate for the three arrays:

$$\\frac{240}{100} = 2.4, \\qquad \\frac{360}{225} = 1.6, \\qquad \\frac{509.1}{450} \\approx 1.13$$

Output per square metre falls throughout, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 47,
    solution_overview: `Solar output is $y(a)=Aa^{r}$ kWh for an array of $a>0$ m², with $y(100)=240$ and $y(225)=360$; a proposal doubles the second array to $450$ m².

**Part 1: Building the model.**

Let $a$ = panel area in square metres and $y(a)$ = daily output. Two unknowns need the two installed arrays: their ratio carries the exponent, and either array then carries the coefficient.

**1. Translate: the ratio of the two arrays.**

$$\\left(\\frac{225}{100}\\right)^{r} = \\frac{360}{240}$$

**2. Translate: the coefficient.**

$$A(100)^{r} = 240$$

**Part 2: The model.**

$$2.25^{r} = 1.5 \\tag{1}$$

$$y(a) = A a^{r} \\tag{2}$$

**Part 3: Solve.**

**1.** Since $1.5=2.25^{1/2}$, equation (1) resolves without logarithms:

$$r = 0.5$$

**2.** Both arrays give the same coefficient, confirming the fit:

$$A = \\frac{240}{10} = 24 = \\frac{360}{15}, \\qquad y(a) = 24\\sqrt{a}$$

**3.** Scale factors must match the multiplier being asked about:

$$2^{0.5} \\approx 1.414 \\;(+41\\%), \\qquad 2.25^{0.5} = 1.5 \\;(+50\\%)$$

**4.** The proposal is a doubling of the second array:

$$y(450) = 24\\sqrt{450} \\approx 509.1 \\text{ kWh} < 520$$

**5.** Output per square metre falls with size, so each expansion adds less than the last:

$$\\frac{y(a)}{a} = 24a^{-0.5}: \\quad 2.4,\\; 1.6,\\; 1.13 \\text{ at } a = 100,\\,225,\\,450$$

**Answer.** $r = 0.5$ | $A = 24$ | $y(a) = 24\\sqrt{a}$ | proposal delivers $\\approx 509$ kWh`,
  },
  {
    id: `math-8-48`,
    case_id: `MATH 8.48`,
    title: `Battery Cell Costs Down a Learning Curve`,
    context: `Unit cost for battery cells follows $c(N)=A N^{b}$ euros, where $N>0$ is cumulative output in thousands of cells. Two milestones are recorded: at $100$ thousand cells the unit cost was $80$, and at $400$ thousand it was $40$. Cumulative spend is unit cost multiplied by volume. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent of the learning curve is $-0.5$.`,
      `Quadrupling cumulative volume halves the unit cost.`,
      `Unit cost falls below $20$ only beyond $1600$ thousand cells.`,
      `Cumulative spend grows with the square root of volume.`,
      `Doubling cumulative volume halves the unit cost.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the exponent, which the two milestones determine through their ratio. Volume quadruples while cost halves, so $4^{b}=0.5$ and $b=-0.5$.

The negative sign is forced by the data — cost falls as volume rises — and the magnitude comes from $4^{-0.5}=1/2$. Dropping the sign would describe a cost that *rises* fourfold-to-double with volume, the opposite of a learning curve.

Divide the second milestone by the first:

$$\\left(\\frac{400}{100}\\right)^{b} = \\frac{40}{80} \\quad \\Rightarrow \\quad 4^{b} = 0.5$$

Solve using powers of two:

$$2^{2b} = 2^{-1} \\quad \\Rightarrow \\quad 2b = -1 \\quad \\Rightarrow \\quad b = -0.5$$

Recover the coefficient for later use:

$$A(100)^{-0.5} = 80 \\;\\Rightarrow\\; \\frac{A}{10} = 80 \\;\\Rightarrow\\; A = 800$$

The exponent is $-0.5$, so the statement is True.`,
      `**B.** → True

This claim restates the calibration as a general rule. Since $4^{-0.5}=1/2$, every quadrupling of cumulative volume halves the unit cost, not just the one between the two milestones.

Scale factors do not depend on the starting point, which is what makes them planning tools: from $400$ to $1600$ thousand cells the cost falls from $40$ to $20$, exactly as it fell from $80$ to $40$ over the first quadrupling.

Form the scale factor:

$$\\frac{c(4N)}{c(N)} = 4^{-0.5} = \\frac{1}{2}$$

Check two successive quadruplings:

$$c(100) = 80, \\qquad c(400) = 40, \\qquad c(1600) = \\frac{800}{40} = 20$$

Each quadrupling halves the cost, so the statement is True.`,
      `**C.** → True

This claim inverts the curve at a cost target. Solving $800N^{-0.5}=20$ gives $\\sqrt{N}=40$, so the cost reaches $20$ exactly at $1600$ thousand cells and falls below it only afterwards.

Inverting an exponent of $-0.5$ means squaring the ratio $800/20=40$. That squaring is why cost targets get so expensive to reach: halving the cost again, to $10$, would take $6400$ thousand cells.

Set the curve equal to the target:

$$800N^{-0.5} = 20 \\quad \\Rightarrow \\quad \\sqrt{N} = \\frac{800}{20} = 40$$

Square both sides:

$$N = 1600$$

Check on either side:

$$c(900) = \\frac{800}{30} \\approx 26.7, \\qquad c(2500) = \\frac{800}{50} = 16$$

The threshold is $1600$ thousand cells, so the statement is True.`,
      `**D.** → True

This claim asks about a derived quantity. Multiplying unit cost by volume raises the exponent by one, so spend is $800N^{0.5}$ — proportional to the square root of cumulative volume.

The result is worth reading twice: cost per cell falls, yet total spend keeps rising, just at a decelerating rate. Building the derived law rather than guessing is what settles the direction, since the two effects pull opposite ways.

Multiply unit cost by volume:

$$S(N) = N \\cdot 800N^{-0.5} = 800N^{-0.5+1} = 800N^{0.5}$$

Evaluate at the milestones:

$$S(100) = 8000, \\qquad S(400) = 16000, \\qquad S(1600) = 32000$$

Spend grows as $\\sqrt{N}$, so the statement is True.`,
      `**E.** → False

This claim applies the quadrupling rule to a doubling. Doubling multiplies unit cost by $2^{-0.5}\\approx0.707$, a reduction of about $29\\%$, not $50\\%$.

Two doublings make a quadrupling, and $0.707^{2}=0.5$ recovers the halving from part B. Assuming that each doubling halves the cost would compound to a factor of $1/4$ over a quadrupling, twice as fast as the data support.

Apply the scale factor:

$$\\frac{c(2N)}{c(N)} = 2^{-0.5} \\approx 0.7071$$

Check against a milestone:

$$c(100) = 80, \\qquad c(200) = \\frac{800}{\\sqrt{200}} \\approx \\frac{800}{14.142} \\approx 56.6$$

The cost falls by about $29\\%$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 48,
    solution_overview: `Unit cost is $c(N)=AN^{b}$ euros at cumulative volume $N>0$ thousand cells, with $c(100)=80$ and $c(400)=40$. Cumulative spend is $S=Nc(N)$.

**Part 1: Building the model.**

Let $N$ = cumulative volume in thousands of cells, $c$ = unit cost, $S$ = cumulative spend. Two milestones give two equations; their ratio isolates the exponent, and either milestone then fixes the coefficient.

**1. Translate: the ratio of the milestones.**

$$\\left(\\frac{400}{100}\\right)^{b} = \\frac{40}{80}$$

**2. Translate: cumulative spend.** Multiplying by $N$ raises the exponent by one:

$$S(N) = N \\cdot A N^{b} = A N^{b+1}$$

**Part 2: The model.**

$$c(N) = 800\\,N^{-0.5} \\tag{1}$$

$$S(N) = 800\\,N^{0.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The ratio gives the exponent and either milestone the coefficient:

$$4^{b} = 0.5 \\;\\Rightarrow\\; b = -0.5, \\qquad A = 80 \\times 10 = 800$$

**2.** Unit costs down the curve:

$$c(100) = 80, \\quad c(400) = 40, \\quad c(1600) = 20, \\quad c(2500) = 16$$

**3.** Scale factors: a quadrupling halves, a doubling does not:

$$4^{-0.5} = \\tfrac{1}{2}, \\qquad 2^{-0.5} \\approx 0.707 \\;(-29\\%)$$

**4.** Invert (1) to turn a cost target into a volume:

$$N = \\left(\\frac{800}{c}\\right)^{2}, \\qquad c = 20 \\;\\Rightarrow\\; N = 1600$$

**5.** Equation (2) shows spend still rising while unit cost falls:

$$S(100) = 8000, \\qquad S(1600) = 32000$$

**Answer.** $b = -0.5$ | $A = 800$ | $c(N) = 800N^{-0.5}$ | $c = 20$ at $N = 1600$`,
  },
  {
    id: `math-8-49`,
    case_id: `MATH 8.49`,
    title: `Sediment Transport Driven by Channel Discharge`,
    context: `Sediment transport in a channel follows $S(v)=A v^{3}$ tonnes per day, where $v>0$ is flow velocity, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity itself depends on discharge through $v(q)=q^{0.5}/2$. The channel's stability limit is $5000$ tonnes per day. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Sediment transport as a function of discharge is $0.625q^{1.5}$.`,
      `The stability limit of $5000$ tonnes per day is reached at a discharge of $400$.`,
      `Doubling the discharge multiplies transport by about $2.83$.`,
      `Doubling the flow velocity doubles sediment transport.`,
      `Transport per unit of discharge is the same at every discharge.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim composes the two stages. The gauged run gives $A=5$, and substituting the velocity law into the cubic transport law leaves $S(q)=0.625q^{1.5}$.

The delicate step is cubing the whole velocity law: $\\left(q^{0.5}/2\\right)^{3}$ contributes $1/8$ as well as $q^{1.5}$. Forgetting to cube the divisor $2$ would leave a transport law eight times too large — and would move the stability limit to a quarter of the true discharge.

Calibrate the transport stage:

$$A(3)^{3} = 135 \\quad \\Rightarrow \\quad 27A = 135 \\quad \\Rightarrow \\quad A = 5$$

Substitute the velocity law:

$$S(q) = 5\\left(\\frac{q^{0.5}}{2}\\right)^{3} = 5 \\times \\frac{q^{1.5}}{8} = 0.625\\,q^{1.5}$$

Spot-check through both stages at $q=36$:

$$v = \\frac{6}{2} = 3, \\qquad S = 5(27) = 135, \\qquad 0.625(36)^{1.5} = 0.625(216) = 135 \\;\\checkmark$$

The composed law is $0.625q^{1.5}$, so the statement is True.`,
      `**B.** → True

This claim inverts the composed law at the stability limit. Solving $0.625q^{1.5}=5000$ gives $q^{1.5}=8000$, and raising to the power $2/3$ returns exactly $400$.

The cube root of $8000$ is $20$, so the inversion is exact: $8000^{2/3}=20^{2}=400$. Doing the inversion on the composed law rather than stage by stage avoids carrying the intermediate velocity, though both routes agree.

Set the composed law equal to the limit:

$$0.625q^{1.5} = 5000 \\quad \\Rightarrow \\quad q^{1.5} = 8000$$

Raise both sides to the reciprocal power:

$$q = 8000^{2/3} = \\left(8000^{1/3}\\right)^{2} = 20^{2} = 400$$

Confirm through the stages:

$$v(400) = \\frac{20}{2} = 10, \\qquad S = 5(1000) = 5000 \\;\\checkmark$$

The limit is reached at a discharge of $400$, so the statement is True.`,
      `**C.** → True

This claim applies a scale factor to the composed law, whose exponent is $1.5$. Doubling the discharge multiplies transport by $2^{1.5}=2\\sqrt{2}\\approx2.828$.

Reading it through the stages gives the same answer and shows where the exponent comes from: velocity rises by only $41\\%$ when discharge doubles, and cubing $1.414$ gives $2.83$. The composed exponent is $0.5 \\times 3 = 1.5$.

Form the scale factor on the composed law:

$$\\frac{S(2q)}{S(q)} = 2^{1.5} \\approx 2.8284$$

Verify through the stages:

$$v \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{3} \\approx 2.83$$

Transport multiplies by about $2.83$, so the statement is True.`,
      `**D.** → False

This claim ignores the cubic transport stage. Doubling velocity multiplies transport by $2^{3}=8$, not by $2$.

The two scale factors in this task must be kept apart: doubling *discharge* multiplies transport by $2.83$, while doubling *velocity* multiplies it by $8$. They differ because discharge has to rise fourfold to double the velocity.

Apply the scale factor at the velocity stage:

$$\\frac{S(2v)}{S(v)} = 2^{3} = 8$$

Check with concrete velocities:

$$S(3) = 135, \\qquad S(6) = 5(216) = 1080, \\qquad \\frac{1080}{135} = 8$$

Transport multiplies by eight, so the statement is False.`,
      `**E.** → False

This claim would require the composed exponent to be $1$. It is $1.5$, so dividing by $q$ leaves $0.625q^{0.5}$, which rises with discharge.

Rising transport per unit of discharge is what makes large floods so damaging: not only is there more water, but each unit of it carries more sediment. The stability limit is therefore reached far sooner than a proportional model would predict.

Divide the composed law by discharge:

$$\\frac{S(q)}{q} = \\frac{0.625q^{1.5}}{q} = 0.625q^{0.5}$$

Evaluate at three discharges:

$$\\frac{S(36)}{36} = 3.75, \\qquad \\frac{S(100)}{100} = 6.25, \\qquad \\frac{S(400)}{400} = 12.5$$

Transport per unit of discharge more than triples, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 49,
    solution_overview: `Transport is $S(v)=Av^{3}$ with $S(3)=135$, velocity is $v(q)=q^{0.5}/2$, and the stability limit is $5000$ tonnes per day.

**Part 1: Building the model.**

Let $q$ = discharge, $v$ = flow velocity, $S$ = sediment transport. One gauged run calibrates the transport stage; composing then multiplies the exponents and cubes the inner coefficient.

**1. Translate: the gauged run.**

$$A(3)^{3} = 135$$

**2. Translate: the composition.**

$$S(q) = 5\\left(\\frac{q^{0.5}}{2}\\right)^{3}$$

**Part 2: The model.**

$$S(v) = 5v^{3} \\tag{1}$$

$$S(q) = 0.625\\,q^{1.5} \\tag{2}$$

**Part 3: Solve.**

**1.** The gauged run gives the coefficient, and cubing the divisor gives the composed constant:

$$A = 5, \\qquad \\frac{5}{8} = 0.625, \\qquad 0.5 \\times 3 = 1.5$$

**2.** Invert (2) at the stability limit:

$$q^{1.5} = 8000 \\;\\Rightarrow\\; q = 8000^{2/3} = 400, \\qquad v(400) = 10$$

**3.** The two stages carry different scale factors:

$$\\frac{S(2q)}{S(q)} = 2^{1.5} \\approx 2.83, \\qquad \\frac{S(2v)}{S(v)} = 2^{3} = 8$$

**4.** Levels along the composed law:

$$S(36) = 135, \\qquad S(100) = 625, \\qquad S(400) = 5000$$

**5.** Transport per unit of discharge rises, since the composed exponent exceeds $1$:

$$\\frac{S(q)}{q} = 0.625q^{0.5}: \\quad 3.75,\\; 6.25,\\; 12.5 \\text{ at } q = 36,\\,100,\\,400$$

**Answer.** $A = 5$ | $S(q) = 0.625q^{1.5}$ | limit at $q = 400$ with $v = 10$`,
  },
  {
    id: `math-8-50`,
    case_id: `MATH 8.50`,
    title: `Highly Elastic Demand Under a Price Indexation`,
    context: `A commodity trader faces demand $q(p)=A p^{-3}$ units at a price $p>0$, and a price of $2$ clears $500$ units. A proposed indexation would raise the price by $10\\%$ across the board, and the trader wants the effect on both volume and revenue $R=pq$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising price by $20\\%$ cuts quantity by about $42.1\\%$.`,
      `Revenue is a power function of price with exponent $-2$.`,
      `At a price of $2.50$, revenue is $640$.`,
      `A price rise of $10\\%$ cuts quantity by about $25\\%$.`,
      `A price rise of $10\\%$ cuts revenue by about $17\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

A finite twenty-percent price rise must use the exact cubic inverse factor rather than a linear elasticity estimate. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$\\frac{q(1.2p)}{q(p)}=1.2^{-3}=\\frac{1}{1.728}\\approx0.57870$$

The relevant comparison can then be written as

$$(1-0.57870)\\times100\\%\\approx42.1\\%$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Quantity falls by about $42.1\\%$. Therefore the statement is True.`,
      `**B.** → True

This claim describes the derived revenue curve. Multiplying demand by price raises the exponent by one, so $-3$ becomes $-2$ and revenue is $4000p^{-2}$.

Revenue built on isoelastic demand is always isoelastic itself, one step less negative. Here the exponent remains negative, which is the formal statement that this trader loses revenue by raising prices.

Multiply demand by price:

$$R(p) = p \\cdot 4000p^{-3} = 4000p^{-3+1} = 4000p^{-2}$$

Check the scale-factor behaviour:

$$\\frac{R(2p)}{R(p)} = 2^{-2} = \\frac{1}{4}$$

Revenue is a power function with exponent $-2$, so the statement is True.`,
      `**C.** → True

The observed pair gives $A=4000$ and hence revenue $R(p)=4000p^{-2}$, which can be evaluated at the new price. The claim must be tested with the finite scale factor from the model, rather than by reading the exponent as though it were an ordinary multiplier. First identify the calibrated law or cancel its coefficient in a ratio; then keep the full power until the numerical comparison is complete.

A direct calculation gives

$$500=A(2)^{-3}=\\frac{A}{8} \\quad\\Rightarrow\\quad A=4000$$

The relevant comparison can then be written as

$$R(2.5)=4000(2.5)^{-2}=\\frac{4000}{6.25}=640$$

This second line is also a useful check on units and direction. A positive exponent preserves the direction of the input change, a negative exponent reverses it, and a percentage change is found from the scale factor minus one. That distinction prevents an elasticity shortcut or a convenient-looking input from replacing the exact finite calculation.

Revenue at price $2.50$ is exactly $640$. Therefore the statement is True.`,
      `**D.** → True

This claim prices the indexation on the volume side. The exact factor is $1.1^{-3}\\approx0.7513$, so quantity falls by about $24.9\\%$ — "about $25\\%$" as claimed.

A quick elasticity estimate would say $3 \\times 10\\% = 30\\%$, which overstates the loss by five percentage points. The exact power calculation is the one to trust for a move as large as $10\\%$; elasticity is a small-change approximation.

Apply the exact scale factor:

$$\\frac{q(1.1p)}{q(p)} = 1.1^{-3} = \\frac{1}{1.331} \\approx 0.7513$$

Convert to a percentage cut:

$$1 - 0.7513 \\approx 0.249 = 24.9\\%$$

Check with levels:

$$q(2) = 500, \\qquad q(2.2) = \\frac{4000}{10.648} \\approx 375.7$$

Quantity falls by about $25\\%$, so the statement is True.`,
      `**E.** → True

This claim prices the same indexation on the revenue side. Revenue's exponent is $-2$, so the factor is $1.1^{-2}\\approx0.8264$, a fall of about $17.4\\%$.

Comparing with part D shows how the two effects net out: volume falls by about $25\\%$ while each unit sells for $10\\%$ more, and $0.7513 \\times 1.1 = 0.8264$ recovers the revenue factor exactly. The price gain cannot offset the volume loss, because demand is elastic.

Apply the revenue scale factor:

$$\\frac{R(1.1p)}{R(p)} = 1.1^{-2} = \\frac{1}{1.21} \\approx 0.8264$$

Convert to a percentage cut:

$$1 - 0.8264 \\approx 0.174 = 17.4\\%$$

Check with levels:

$$R(2) = 1000, \\qquad R(2.2) = \\frac{4000}{4.84} \\approx 826.4$$

Revenue falls by about $17\\%$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 50,
    solution_overview: `Demand is $q(p)=Ap^{-3}$ with $q(2)=500$; revenue is $R=pq$; a proposed indexation raises the price by $10\\%$.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units, $R$ = revenue. The isoelastic form fixes the exponent, the observed pair pins the coefficient, and revenue is derived by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A(2)^{-3} = 500, \\qquad 2^{-3} = \\tfrac{1}{8}$$

**2. Translate: the indexation.** A $10\\%$ rise means a multiplier of $1.1$:

$$\\frac{q(1.1p)}{q(p)} = 1.1^{-3}, \\qquad \\frac{R(1.1p)}{R(p)} = 1.1^{-2}$$

**Part 2: The model.**

$$q(p) = 4000\\,p^{-3} \\tag{1}$$

$$R(p) = 4000\\,p^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A = 500 \\times 8 = 4000$$

**2.** Levels at the current price:

$$q(2) = 500, \\qquad R(2) = 1000$$

**3.** The indexation, computed exactly rather than by elasticity:

$$1.1^{-3} \\approx 0.7513 \\;(-24.9\\%), \\qquad 1.1^{-2} \\approx 0.8264 \\;(-17.4\\%)$$

**4.** Levels after the indexation:

$$q(2.2) \\approx 375.7, \\qquad R(2.2) \\approx 826.4$$

**5.** The two factors are consistent: $0.7513 \\times 1.1 = 0.8264$, so the $10\\%$ price gain recovers only part of the volume loss, as elastic demand requires.

**Answer.** $A = 4000$ | $q(p) = 4000p^{-3}$ | $R(p) = 4000p^{-2}$ | indexation: $-25\\%$ volume, $-17\\%$ revenue`,
  },
];
