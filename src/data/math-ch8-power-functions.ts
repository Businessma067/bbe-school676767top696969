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

The coefficient of a power law $P(u)=Au^{0.75}$ is a scale factor that the commissioning log never states directly. What the log gives is the gap between two rates, and both staged counts are exact fourth powers, so their shape factors are whole numbers:

$$16^{0.75} = (2^{4})^{3/4} = 2^{3} = 8$$

$$81^{0.75} = (3^{4})^{3/4} = 3^{3} = 27$$

The recorded lift is a difference between two rates rather than a rate at one staging level, so the coefficient multiplies the difference of the shape factors:

$$A \\cdot 27 - A \\cdot 8 = 57$$

$$19A = 57 \\qquad \\Rightarrow \\qquad A = 3$$

Dividing $57$ by a single staged count would answer a different question. The loading law is $P(u)=3u^{0.75}$, so the statement is True.`,
      `**B.** → False

A level of the recovered law comes from applying the coefficient to the shape factor at that staging level:

$$P(16) = 3 \\times 16^{0.75} = 3 \\times 8 = 24$$

The figure $27$ does belong to this problem, but as $81^{0.75}$, the shape factor of the higher staging level before the coefficient is applied, not as a rate. The companion value confirms the model:

$$P(81) = 3 \\times 27 = 81, \\qquad 81 - 24 = 57$$

The jump matches the log exactly, and the rate at $u=16$ is $24$ units per minute against the claimed $27$, so the statement is False.`,
      `**C.** → True

A scale factor of a power function depends only on the exponent, since the coefficient and the starting level cancel when two rates are divided:

$$\\frac{P(2u)}{P(u)} = \\frac{A(2u)^{0.75}}{Au^{0.75}} = 2^{0.75}$$

Splitting the exponent into pieces that are easy to evaluate:

$$2^{0.75} = 2^{1/2} \\times 2^{1/4} \\approx 1.4142 \\times 1.1892 \\approx 1.6818$$

Doubling the input would double the output only for an exponent of $1$; here the exponent $0.75$ sits below $1$, so the rate grows more slowly than the staged count wherever the doubling starts. The rise is about $68.18\\%$, which is under $70\\%$, so the statement is True.`,
      `**D.** → False

The certification caps the loading rate, not the staged count, so the proposed staging level has to be pushed through the recovered law before any comparison with $100$ units per minute:

$$110^{0.75} = 110^{1/2} \\times 110^{1/4} \\approx 10.4881 \\times 3.2385 \\approx 33.97$$

$$P(110) \\approx 3 \\times 33.97 \\approx 101.9 > 100$$

Inverting the ceiling shows where the true limit sits:

$$3u^{0.75} = 100 \\quad \\Rightarrow \\quad u = \\left(\\tfrac{100}{3}\\right)^{4/3} \\approx 107.3$$

The highest logged run, $81$ units at $81$ units per minute, sat well inside the ceiling, yet that headroom is spent before $110$ units. Staging is certified only to about $107$ units, so the statement is False.`,
      `**E.** → False

Running the law backwards fixes the rate and solves for the staged count, which means raising both sides to the reciprocal power $4/3$:

$$3u^{0.75} = 48 \\quad \\Rightarrow \\quad u^{0.75} = 16$$

$$u = 16^{4/3} = (2^{4})^{4/3} = 2^{16/3} = 2^{5} \\times 2^{1/3} \\approx 32 \\times 1.2599 \\approx 40.32$$

Because the rate at $u=16$ is $24$, proportional thinking points at $32$ units for a rate of $48$; with exponent $0.75$, doubling the output takes an input multiplied by $2^{4/3}\\approx2.52$:

$$16 \\times 2^{4/3} \\approx 16 \\times 2.5198 \\approx 40.32$$

The staged count is about $40.32$ units, which is not below $40$, so the statement is False.`,
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

An exponent is carried by scale factors alone: a percentage rule survives the cancellation of the coefficient $A$, while a bench reading fixes only a level.

$$\\frac{R(1.5d)}{R(d)} = \\frac{A(1.5d)^{r}}{Ad^{r}} = 1.5^{r}$$

A rise of $125\\%$ leaves the new value at $225\\%$ of the old one, so the observed multiplier is $2.25$ rather than $1.25$:

$$1.5^{r} = 2.25 = 1.5^{2}$$

$$r = 2$$

Reading the multiplier as $1.25$ would give $\\ln 1.25/\\ln 1.5\\approx0.55$ and flatten a strongly convex instrument response. The exponent is exactly $2$, so the statement is True.`,
      `**B.** → True

A level needs the coefficient as well as the exponent, and the bench test is the only fact that supplies it:

$$A \\cdot 5^{2} = 50 \\quad \\Rightarrow \\quad 25A = 50 \\quad \\Rightarrow \\quad A = 2$$

$$R(d) = 2d^{2}$$

Because the requested aperture is twice the bench aperture, the ratio rule settles the same question without the coefficient, multiplying resolving power by $2^{2}=4$:

$$R(10) = 2(10)^{2} = 200, \\qquad \\frac{R(10)}{R(5)} = 2^{2} = 4$$

Both routes put the $10$ m aperture at $200$, so the statement is True.`,
      `**C.** → False

Inverting the recovered law means solving for the diameter that produces a required resolving power, which for a squared response is a square root:

$$2d^{2} = 200 \\quad \\Rightarrow \\quad d^{2} = 100 \\quad \\Rightarrow \\quad d = 10$$

Output has to rise fourfold from the bench reading of $50$, which makes a much wider mirror feel necessary; with a squared response a fourfold rise in output needs only a doubling of the diameter. An aperture of $12$ m already overshoots:

$$R(12) = 2(144) = 288 > 200$$

The target is met at $10$ m, two metres below the threshold in the claim, so the statement is False.`,
      `**D.** → True

Under the weaker rule a $50\\%$ widening carries the multiplier $1.6$ instead of $2.25$, and $1.6$ is not a neat power of $1.5$, so the exponent has to be isolated with logarithms:

$$1.5^{r'} = 1.6 \\quad \\Rightarrow \\quad r' \\ln 1.5 = \\ln 1.6$$

$$r' = \\frac{\\ln 1.6}{\\ln 1.5} \\approx \\frac{0.4700}{0.4055} \\approx 1.1592$$

Both logarithms are of numbers above $1$, so the quotient is positive and the response still increases, just far less convexly. A sanity check confirms the size:

$$1.5^{1.2} \\approx 1.6266 > 1.6$$

Since $1.5^{1.2}$ already overshoots the target multiplier, the counterfactual exponent lies below $1.2$, so the statement is True.`,
      `**E.** → False

With the counterfactual exponent in hand, the ratio route carries the bench reading up to the larger aperture without recomputing the coefficient:

$$\\frac{R(10)}{R(5)} = 2^{r'} = 2^{1.1592}$$

$$2^{1.1592} = e^{1.1592 \\times 0.6931} \\approx e^{0.8034} \\approx 2.2331$$

$$R(10) \\approx 50 \\times 2.2331 \\approx 111.7 < 120$$

The doubling factor of $4$ belongs to the original squared rule; an exponent barely above $1$ delivers barely more than proportional growth, which is what the weaker rule describes. The $10$ m aperture stays under $120$, so the statement is False.`,
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

Adding two outputs takes both laws in explicit form, so each turbine's exponent and coefficient come first. Turbine A's doubling rule fixes the exponent and its anchor fixes the coefficient:

$$2^{r_A} = 2\\sqrt{2} = 2^{1.5} \\quad \\Rightarrow \\quad r_A = 1.5$$

$$c \\cdot 4^{1.5} = 32 \\quad \\Rightarrow \\quad 8c = 32 \\quad \\Rightarrow \\quad c = 4$$

Turbine B's proportionality and anchor do the same:

$$k \\cdot 10^{2} = 100 \\quad \\Rightarrow \\quad k = 1 \\quad \\Rightarrow \\quad P_B(w) = w^{2}$$

B's anchor sits at $w=10$, far from the speed being asked about, so its output is transported down through the model rather than read off the report:

$$P_A(4) + P_B(4) = 4(8) + 16 = 32 + 16 = 48 > 45$$

The pair delivers $48$ kW at $w=4$, so the statement is True.`,
      `**B.** → False

Exponents govern how fast output responds to wind speed while coefficients set the level, and the two comparisons can point opposite ways. Each turbine's doubling factor shows the response:

$$\\frac{P_A(2w)}{P_A(w)} = 2^{1.5} \\approx 2.83, \\qquad \\frac{P_B(2w)}{P_B(w)} = 2^{2} = 4$$

Turbine A looks stronger in the low-wind data, with coefficient $4$ against B's $1$ and twice B's output at $w=4$, but that is a level advantage rather than a response advantage:

$$1.5 < 2$$

Turbine A carries the smaller exponent, so the statement is False.`,
      `**C.** → True

A crossover is where the two output laws agree, so the shared power $w^{1.5}$ cancels out of the equation:

$$4w^{1.5} = w^{2} \\quad \\Rightarrow \\quad 4 = w^{0.5}$$

$$w = 4^{2} = 16$$

What remains after the cancellation is a single condition on $w^{0.5}$, so only one positive crossover exists; the apparent solution $w=0$ falls outside the domain $w>0$. Both machines reach the same level there:

$$P_A(16) = 4(16^{1.5}) = 4(64) = 256, \\qquad P_B(16) = 16^{2} = 256$$

The outputs coincide at $w=16$ at $256$ kW each, so the statement is True.`,
      `**D.** → True

A statement about a whole interval is settled by the ratio of the two laws rather than by any single wind speed:

$$\\frac{P_B(w)}{P_A(w)} = \\frac{w^{2}}{4w^{1.5}} = \\frac{w^{0.5}}{4}$$

The ratio is strictly increasing in $w$ and equals $1$ at the crossover, so once it passes $1$ it can never come back:

$$\\frac{w^{0.5}}{4} > 1 \\quad \\Longleftrightarrow \\quad w^{0.5} > 4 \\quad \\Longleftrightarrow \\quad w > 16$$

A convenient speed such as $w=25$ is a sanity test rather than a proof:

$$P_A(25) = 4(125) = 500, \\qquad P_B(25) = 625$$

Turbine B leads at every speed above $16$ m/s, so the statement is True.`,
      `**E.** → True

Halving turbine A's coefficient leaves both exponents untouched, so the crossover condition is solved again with the smaller coefficient:

$$2w^{1.5} = w^{2} \\quad \\Rightarrow \\quad w^{0.5} = 2 \\quad \\Rightarrow \\quad w = 4$$

Halving the coefficient does not halve the crossover speed, because the condition reduces to $w^{0.5}=c$ and the crossover is the square of the coefficient:

$$cw^{1.5} = w^{2} \\quad \\Rightarrow \\quad w = c^{2}, \\qquad c = 4 \\;\\Rightarrow\\; 16, \\quad c = 2 \\;\\Rightarrow\\; 4$$

The crossover moves from $16$ m/s down to $4$ m/s, below the $5$ m/s threshold, so the statement is True.`,
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

The exponent of an assembly-time law is carried by its scale factors, since the coefficient cancels when two times are divided:

$$\\frac{T(4N)}{T(N)} = \\frac{A(4N)^{r}}{AN^{r}} = 4^{r}$$

Matching that against the observed quadrupling factor:

$$4^{r} = 16 = 4^{2} \\quad \\Rightarrow \\quad r = 2$$

The anchor $T(5)=100$ cannot pin an exponent by itself, since one point is consistent with infinitely many pairs $(A,r)$; its role comes once the exponent is known. Assembly time grows with the square of the batch, so the statement is True.`,
      `**B.** → True

Average throughput is $N/T$, and management wants it as a function of elapsed time, so the batch size is replaced by its expression in $T$ rather than the other way round. The anchor fixes the coefficient first:

$$A \\cdot 5^{2} = 100 \\quad \\Rightarrow \\quad 25A = 100 \\quad \\Rightarrow \\quad A = 4, \\qquad T = 4N^{2}$$

$$N^{2} = \\frac{T}{4} \\quad \\Rightarrow \\quad N = \\frac{T^{0.5}}{2} = 0.5\\,T^{0.5}$$

Dividing by elapsed time gives the average rate:

$$R(T) = \\frac{N}{T} = \\frac{0.5\\,T^{0.5}}{T} = 0.5\\,T^{-0.5}$$

The derived law is exactly the one claimed, so the statement is True.`,
      `**C.** → True

A match with the rival is an equation between the derived throughput and the rival's fixed $0.05$ units per minute:

$$0.5\\,T^{-0.5} = 0.05 \\quad \\Rightarrow \\quad T^{-0.5} = 0.1$$

$$T^{0.5} = 10 \\quad \\Rightarrow \\quad T = 100$$

Landing on the anchor batch is a cross-check rather than a coincidence, since the $5$-unit batch takes $100$ minutes:

$$N = 0.5\\sqrt{100} = 5, \\qquad \\frac{N}{T} = \\frac{5}{100} = 0.05$$

The two rates meet at $100$ minutes of elapsed time, so the statement is True.`,
      `**D.** → False

Which side leads past a crossover is decided by the sign of the exponent in the derived law:

$$R(T) = 0.5\\,T^{-0.5}, \\qquad -0.5 < 0 \\;\\Rightarrow\\; R \\text{ decreasing in } T$$

Bigger batches do produce more units in total, but not at a higher average rate: time grows with the square of the batch, so each extra unit costs more time than the last. A longer run past the crossover shows it:

$$R(400) = 0.5(400)^{-0.5} = \\frac{0.5}{20} = 0.025 < 0.05$$

At $400$ minutes the mechanized line averages half the rival's pace, so the statement is False.`,
      `**E.** → True

A faster rival raises the target rate, and the same crossover equation is solved with $0.2$ in place of $0.05$:

$$0.5\\,T^{-0.5} = 0.2 \\quad \\Rightarrow \\quad T^{0.5} = \\frac{0.5}{0.2} = 2.5$$

$$T = 2.5^{2} = 6.25$$

The rival's rate is multiplied by $4$ while the crossover time is divided by $16$, because the inverse relation squares the rate change:

$$T = \\left(\\frac{0.5}{R}\\right)^{2}, \\qquad R = 0.05 \\;\\Rightarrow\\; 100, \\quad R = 0.2 \\;\\Rightarrow\\; 6.25$$

The faster rival is matched after $6.25$ minutes, before the $10$-minute mark, so the statement is True.`,
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

The audit records a change in metal output between two purities rather than an output level, so the coefficient of the yield law has to be unpacked from a difference. Both purities are perfect squares, so their $1.5$ powers are exact:

$$9^{1.5} = (3^{2})^{3/2} = 3^{3} = 27, \\qquad 16^{1.5} = (4^{2})^{3/2} = 4^{3} = 64$$

Dividing $296$ by $16^{1.5}$ alone would read the note as an output at the higher purity; the recorded gain is the difference of the two outputs:

$$c(64) - c(27) = 296 \\quad \\Rightarrow \\quad 37c = 296 \\quad \\Rightarrow \\quad c = 8$$

The metal-yield law is $M(u)=8u^{1.5}$, so the statement is True.`,
      `**B.** → True

Composing two power stages multiplies their exponents, so substituting the metal law into the strength law gives strength directly as a function of purity:

$$S(u) = \\frac{\\left(8u^{1.5}\\right)^{2/3}}{2} = \\frac{8^{2/3}\\,u^{1.5 \\times 2/3}}{2}$$

$$8^{2/3} = 4, \\qquad 1.5 \\times \\frac{2}{3} = 1$$

$$S(u) = \\frac{4u}{2} = 2u$$

An exponent of $1$ makes the composed law linear without making it the competitor's quote: that line carries an intercept of $5$ while the chain passes through the origin, and the structural difference is what produces a single crossover later. The composed exponent is exactly $1$, so the statement is True.`,
      `**C.** → False

At one purity the comparison is between the composed chain $S(u)=2u$ and the quoted line $S_{\\mathrm{comp}}(u)=1.8u+5$:

$$S(10) = 2(10) = 20$$

$$S_{\\mathrm{comp}}(10) = 1.8(10) + 5 = 18 + 5 = 23$$

$$20 < 23$$

Low purities are where the competitor's intercept dominates: the head start of $5$ outweighs the chain's slope advantage until enough purity has accumulated. The chain trails by three units at $u=10$, so the statement is False.`,
      `**D.** → True

Two straight lines with different slopes meet exactly once, so the crossover between the composed chain and the quote is a single linear equation:

$$2u = 1.8u + 5$$

$$0.2u = 5 \\quad \\Rightarrow \\quad u = 25$$

The domain cap $u\\le50$ matters only for whether that crossover is reachable, and this one sits comfortably inside it:

$$S(25) = 50, \\qquad S_{\\mathrm{comp}}(25) = 1.8(25) + 5 = 50, \\qquad 25 \\le 50$$

The offers coincide at purity $25$, which is below $30$, so the statement is True.`,
      `**E.** → True

A claim about a whole interval is settled by the gap between the two offers rather than by one test purity:

$$S(u) - S_{\\mathrm{comp}}(u) = 2u - (1.8u + 5) = 0.2u - 5$$

The chain has the steeper slope, $2$ against $1.8$, so once the accumulated advantage has paid off the intercept the gap widens instead of closing:

$$0.2u - 5 > 0 \\quad \\Longleftrightarrow \\quad u > 25$$

$$S(50) = 100, \\qquad S_{\\mathrm{comp}}(50) = 95, \\qquad \\text{gap} = 5$$

The chain leads at every purity from $25$ up to the cap at $50$, so the statement is True.`,
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

A scale factor of a power law depends only on the exponent, and the doubling test is the fact that carries it, since the coefficient cancels in the ratio:

$$\\frac{L(2x)}{L(x)} = \\frac{A(2x)^{r}}{Ax^{r}} = 2^{r} = 4 \\quad \\Rightarrow \\quad r = 2$$

The same identity applies to a tripling:

$$\\frac{L(3x)}{L(x)} = 3^{2} = 9$$

The figure $6$ treats the scale factor as proportional to the multiplier, as though doubling giving $4$ meant tripling gives $1.5$ times as much; scale factors are powers of the multiplier, not multiples of it. Tripling multiplies peak load by $9$, so the statement is False.`,
      `**B.** → False

The alarm level is a peak load, so locating it in job counts needs both constants of the model. The recorded run fixes the coefficient:

$$A(30)^{2} = 180 \\quad \\Rightarrow \\quad 900A = 180 \\quad \\Rightarrow \\quad A = 0.2$$

Solving the alarm condition then gives the job count:

$$0.2x^{2} = 500 \\quad \\Rightarrow \\quad x^{2} = 2500 \\quad \\Rightarrow \\quad x = 50$$

The recorded margin looks generous, $180$ against an alarm at $500$, yet load grows with the square of the job count, so that headroom is spent within $20$ extra jobs. The alarm trips at $50$ jobs rather than above $55$, so the statement is False.`,
      `**C.** → False

A move from $30$ to $42$ jobs is a finite $40\\%$ increase in the input, and a squared response amplifies it, so the exact scale factor of the model settles the comparison:

$$\\frac{L(42)}{L(30)}=\\left(\\frac{42}{30}\\right)^2=1.4^2=1.96$$

A percentage change is the scale factor minus one:

$$\\frac{L(42)-L(30)}{L(30)}=1.96-1=0.96=96\\%$$

Reading the exponent as though it were an ordinary multiplier, or reaching for an elasticity shortcut, replaces this finite calculation with something looser. Peak load rises by $96\\%$, which is not less than $90\\%$, so the statement is False.`,
      `**D.** → True

A move from $30$ to $33$ jobs is a finite $10\\%$ increase in the input, and the squared response converts it through the exact scale factor:

$$\\frac{L(33)}{L(30)}=\\left(\\frac{33}{30}\\right)^2=1.1^2=1.21$$

Subtracting one turns the scale factor into a percentage change:

$$\\frac{L(33)-L(30)}{L(30)}=1.21-1=0.21=21\\%$$

A linear reading of the law would put the response at $10\\%$ and doubling the input change would put it at $20\\%$; the exact figure is $21\\%$, so the statement is True.`,
      `**E.** → False

Halving is a multiplier of $1/2$ on the input, and with exponent $2$ the output multiplier is that fraction squared:

$$\\frac{L(x/2)}{L(x)} = \\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}$$

Proportional behaviour would carry the halving straight through; the numbers at the alarm point show what happens instead:

$$L(50) = 0.2(2500) = 500, \\qquad L(25) = 0.2(625) = 125$$

A team expecting a halving would plan for $250$ of residual load where the model gives $125$, and the same reasoning applied upwards would badly understate a spike. Load falls to a quarter, not a half, so the statement is False.`,
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

**4.** Place the recorded run against the alarm. The recorded load is a little over a third of the tripping level:

$$\\frac{180}{500} = 36\\%$$

In job counts the same run sits much closer to the limit, at three fifths of the tripping volume:

$$\\frac{30}{50} = 60\\%$$

The gap between those two percentages is the squaring at work: a run already past halfway in job count is still well below halfway in load.

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

Neither observation reports a response level: the record is a difference between the responses at two intensities, so the coefficient has to be pulled out of that difference. The square-root factors at $25$ and $100$ are $5$ and $10$:

$$Q(100)-Q(25)=A(10-5)=60$$

$$5A=60 \\quad \\Rightarrow \\quad A=12, \\qquad Q(x)=12\\sqrt{x}$$

Writing $A\\sqrt{100}=60$ instead would read the increase as the response at intensity $100$ and lose the lower endpoint. The recovered law is $Q(x)=12\\sqrt{x}$, so the statement is True.`,
      `**B.** → True

The budget caps the input, and the exponent $0.5$ is positive, so responses rise with intensity and the largest feasible response sits at the cap itself:

$$0<x\\le 400, \\qquad Q(x)=12x^{0.5}$$

$$Q(400)=12\\sqrt{400}=12(20)=240$$

Treating $400$ as a response budget, or multiplying it by $12$, skips the square root the model applies to the input. No affordable intensity beats the endpoint value of $240$ usable responses, so the statement is True.`,
      `**C.** → True

A target response inverts the calibrated law: dividing by the coefficient isolates the square root of intensity, and squaring recovers intensity itself:

$$12\\sqrt{x}=180 \\quad \\Rightarrow \\quad \\sqrt{x}=15$$

$$x=15^2=225, \\qquad 225\\le 400$$

Stopping at $\\sqrt{x}=15$ and reporting $15$ as the intensity leaves the inversion half done. The target needs intensity $225$, which lies inside the cap, so the statement is True.`,
      `**D.** → True

A scale effect on a power function with exponent $0.5$ takes the square root of the input multiplier, and the coefficient cancels in the ratio:

$$\\frac{Q(2.25x)}{Q(x)} =\\frac{12(2.25x)^{0.5}}{12x^{0.5}} =(2.25)^{0.5}$$

The awkward-looking factor $2.25$ is $(1.5)^{2}$, so the root is exact:

$$(2.25)^{0.5}=\\sqrt{\\frac{9}{4}}=\\frac{3}{2}=1.5$$

Multiplying responses by $2.25$ would treat the law as linear, which the exponent forbids. A $2.25$-fold intensity change produces a $1.5$-fold response change, so the statement is True.`,
      `**E.** → True

A finite percentage change is measured against the initial response, so both endpoints pass through the calibrated law first:

$$Q(64)=96, \\qquad Q(81)=108$$

$$\\frac{Q(81)-Q(64)}{Q(64)} =\\frac{108-96}{96} =\\frac{1}{8}=12.5\\%$$

The intensity move is itself an increase of $17/64\\approx26.6\\%$, and the square root compresses it to less than half of that. The response increase is exactly $12.5\\%$, so the statement is True.`,
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

A claim about every batch below $20$ documents needs an inequality rather than a spot check, and both coefficients follow from the shared cost at $n=20$:

$$a(20)^{2} = 400 \\;\\Rightarrow\\; a = 1, \\qquad b(20) = 400 \\;\\Rightarrow\\; b = 20$$

Since $n>0$, the common factor $n$ divides out and the comparison reduces to one condition:

$$n^{2} < 20n \\quad \\Longleftrightarrow \\quad n < 20 \\qquad (n>0)$$

What remains describes exactly the interval in the claim, and a check inside it agrees:

$$C(10) = 100 < 200 = D(10)$$

The automated procedure is cheaper across the whole interval, so the statement is True.`,
      `**B.** → False

Past the crossing point the two costs separate, and the gap at a given batch is the difference of the two calibrated totals:

$$C(25) = 25^{2} = 625, \\qquad D(25) = 20(25) = 500$$

$$625 - 500 = 125 > 100$$

Five documents past the meeting point sounds negligible, but the gap equals $n(n-20)$, so it grows with both the distance past $20$ and the batch size itself. The difference is $125$, above the threshold in the claim, so the statement is False.`,
      `**C.** → True

A parabola through the origin and a line through the origin can meet at most twice, so equality of the two costs is a quadratic with at most two roots:

$$n^{2} = 20n \\quad \\Rightarrow \\quad n(n - 20) = 0$$

One of those meetings is the origin, which the stated domain removes:

$$n = 0 \\text{ (excluded)}, \\qquad n = 20$$

Dividing through by $n$ reaches the same place, provided the division is justified by $n>0$. Only $n=20$ survives on the domain, so the statement is True.`,
      `**D.** → False

The difference of two power functions is not itself a power function, so it carries no scale factor at all:

$$C(n) - D(n) = n^{2} - 20n = n(n-20)$$

Each cost taken alone does scale cleanly, the automated total quadrupling and the manual total doubling, but the gap between them behaves differently:

$$25(5) = 125, \\qquad 50(30) = 1500$$

$$\\frac{1500}{125} = 12$$

Doubling the batch from $25$ to $50$ multiplies the gap twelvefold rather than twofold, so the statement is False.`,
      `**E.** → False

Constant unit cost is the signature of an exponent of $1$, so dividing each total by the batch size shows which procedure has it:

$$\\frac{C(n)}{n} = \\frac{n^{2}}{n} = n, \\qquad \\frac{D(n)}{n} = \\frac{20n}{n} = 20$$

The flat rate of $20$ per document belongs to the manual route; the automated law keeps exponent $1$ after the division, so its unit cost climbs:

$$\\frac{C(10)}{10} = 10, \\qquad \\frac{C(30)}{30} = 30$$

The automated cost per document triples between those batches, so the statement is False.`,
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

Recovering a coefficient takes two steps: evaluate the shape factor at the recorded shift, then divide the recorded throughput by it. Because $0.6=3/5$ and $32=2^{5}$, the first step is exact:

$$32^{0.6} = \\left(2^{5}\\right)^{3/5} = 2^{3} = 8$$

$$8A = 96 \\quad \\Rightarrow \\quad A = 12, \\qquad H(s) = 12 s^{0.6}$$

The value $8$ is the shape factor, and reporting it as the coefficient leaves the easy division undone; $A=8$ would predict only $64$ pallets per hour on the recorded shift. The coefficient is $12$, so the statement is False.`,
      `**B.** → True

Reaching a target throughput inverts the calibrated law $H(s)=12s^{0.6}$ rather than substituting into it, so the coefficient comes off first:

$$12s^{0.6}=300 \\quad\\Rightarrow\\quad s^{0.6}=25$$

Undoing an exponent of $0.6$ means raising both sides to the reciprocal power $5/3$:

$$s=25^{1/0.6}=25^{5/3}\\approx213.75$$

Scaling headcount in proportion to throughput would land far lower, since an exponent below $1$ makes staff grow faster than output. The continuous model reaches the ceiling at about $214$ staff, so the statement is True.`,
      `**C.** → False

Doubling headcount multiplies throughput by the exact scale factor $2^{0.6}$, with the coefficient cancelling in the ratio:

$$\\frac{H(2s)}{H(s)}=2^{0.6}\\approx1.5157$$

A percentage gain is that factor minus one:

$$(1.5157-1)\\times100\\%\\approx51.6\\%$$

The exponent $0.6$ is not itself a percentage response, and the band in the claim is roughly what reading it that way would suggest. The increase is about $51.6\\%$, outside that band, so the statement is False.`,
      `**D.** → False

The contract ceiling is a throughput, so the headcount behind it comes from inverting the law at $300$ pallets per hour:

$$12 s^{0.6} = 300 \\quad \\Rightarrow \\quad s^{0.6} = 25$$

$$s = 25^{5/3} = \\left(5^{2}\\right)^{5/3} = 5^{10/3} = 5^{3} \\times 5^{1/3} \\approx 125 \\times 1.710 \\approx 213.8$$

A proportional estimate from the recorded shift, tripling throughput by tripling staff to about $100$, lands far short, which is what the reciprocal exponent $5/3$ corrects. The ceiling binds at about $214$ staff, well below $250$, so the statement is False.`,
      `**E.** → False

Throughput per staff member is a derived power function, obtained by dividing the law by headcount and lowering the exponent by one:

$$\\frac{H(s)}{s} = \\frac{12 s^{0.6}}{s} = 12 s^{-0.4}$$

The exponent is negative, so the average declines even while the total keeps rising:

$$\\frac{H(32)}{32} = \\frac{96}{32} = 3, \\qquad \\frac{H(243)}{243} = \\frac{324}{243} \\approx 1.33$$

Adding staff always lifts total pallets, but each extra worker contributes less than the one before, which is what the average records. Throughput per head falls from $3$ to about $1.33$, so the statement is False.`,
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

The upgrade log records a reduction rather than a level, so the coefficient has to be reconstructed from the difference between two response times. Both server counts are perfect squares, which keeps the negative fractional powers exact:

$$4^{-1.5} = \\frac{1}{4^{1.5}} = \\frac{1}{8}, \\qquad 9^{-1.5} = \\frac{1}{27}$$

With a negative exponent the smaller fleet carries the larger response time, so the recorded cut is the four-server value minus the nine-server value:

$$A\\left(\\frac{1}{8} - \\frac{1}{27}\\right) = 19 \\quad \\Rightarrow \\quad A \\cdot \\frac{19}{216} = 19 \\quad \\Rightarrow \\quad A = 216$$

$$W(4) = \\frac{216}{8} = 27$$

The four-server median is $27$ ms, so the statement is True.`,
      `**B.** → True

The other end of the upgrade is a direct evaluation of the calibrated law:

$$W(9) = \\frac{216}{27} = 8$$

Any candidate coefficient has to reproduce the logged cut of $19$ ms between the two configurations, and this one does:

$$27 - 8 = 19$$

The two medians are $27=3^{3}$ and $8=2^{3}$, mirroring the counts $9=3^{2}$ and $4=2^{2}$ through the exponent $-1.5$. The nine-server median is $8$ ms, so the statement is True.`,
      `**C.** → True

A scale factor holds at any fleet size, and with a negative exponent it is a surviving fraction rather than a growth factor:

$$\\frac{W(2k)}{W(k)} = 2^{-1.5} = \\frac{1}{2\\sqrt{2}} \\approx 0.3536$$

The cut is one minus that fraction, not the fraction itself:

$$1 - 0.3536 = 0.6464 \\approx 65\\%$$

Concrete fleets confirm the multiplier:

$$W(4) = 27, \\qquad W(8) = \\frac{216}{8^{1.5}} = \\frac{216}{22.63} \\approx 9.55, \\qquad \\frac{9.55}{27} \\approx 0.354$$

Doubling the server count cuts the median by about $65\\%$, so the statement is True.`,
      `**D.** → True

Inverting a law with a negative exponent moves the power to the other side and flips its sign, which turns the target into a positive root:

$$216 k^{-1.5} = 1 \\quad \\Rightarrow \\quad k^{1.5} = 216$$

$$k = 216^{2/3} = \\left(6^{3}\\right)^{2/3} = 6^{2} = 36$$

Raising to $-2/3$ instead of $2/3$ is the slip that the sign flip prevents. Substitution confirms the fleet size:

$$W(36) = \\frac{216}{36^{1.5}} = \\frac{216}{216} = 1$$

Cutting the median from $8$ ms to $1$ ms takes four times the nine-server fleet, exactly $36$ servers, so the statement is True.`,
      `**E.** → True

A target median inverts the calibrated law $W(k)=216k^{-1.5}$: the coefficient comes off first, and the negative power flips to leave a positive root to take.

$$216k^{-1.5}=2 \\quad\\Rightarrow\\quad k^{1.5}=108$$

$$k=108^{2/3}\\approx22.68$$

The reciprocal exponent is $2/3$ rather than $1.5$, so scaling the fleet by the ratio of the two times would overshoot badly. The continuous model reaches $2$ ms at about $22.7$ servers, so the statement is True.`,
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

An isoelastic demand curve answers a finite price move through the exact power of the price multiplier, with the coefficient cancelling in the ratio:

$$\\frac{q(1.1p)}{q(p)}=1.1^{-2}=\\frac{1}{1.21}\\approx0.82645$$

The exponent is negative, so the factor sits below $1$ and the fall is one minus that factor:

$$(1-0.82645)\\times100\\%\\approx17.36\\%$$

Multiplying the $10\\%$ move by the elasticity $-2$ would replace the full power with a shortcut. Subscriptions fall by about $17.4\\%$, so the statement is True.`,
      `**B.** → False

Elasticity multiplies percentage changes only in the limit of very small moves, so a $10\\%$ price rise has to pass through the exact scale factor:

$$\\frac{q(1.1p)}{q(p)} = 1.1^{-2} = \\frac{1}{1.21} \\approx 0.8264$$

$$1 - 0.8264 = 0.1736 \\approx 17.4\\%$$

Levels at the observed price tell the same story:

$$q(5) = 400, \\qquad q(5.5) = \\frac{10000}{30.25} \\approx 330.6$$

At a $1\\%$ rise the linear shortcut would be excellent; at $10\\%$ it separates visibly from the power calculation, and the word "exactly" is what the claim cannot support. Quantity falls by about $17.4\\%$ rather than $20\\%$, so the statement is False.`,
      `**C.** → True

Calibration at the observed price gives $q(p)=10000p^{-2}$, and a revenue claim needs the quantity first and the product $pq$ second:

$$q(10)=10000(10)^{-2}=100$$

$$R(10)=10q(10)=10(100)=1000$$

Doubling the price from $5$ divides quantity by $2^{2}$ rather than by $2$, which is what takes $400$ subscriptions down to $100$. Both figures in the claim match the curve, so the statement is True.`,
      `**D.** → False

Revenue is the product of price and quantity, so its exponent is the sum of $+1$ and the demand exponent:

$$R(p) = p\\,q(p) = p \\times 10000 p^{-2} = 10000 p^{-1}$$

Price-independent revenue is the borderline case of elasticity exactly $-1$, where those two exponents cancel; at elasticity $-2$ the quantity loss outweighs the price gain:

$$R(5) = \\frac{10000}{5} = 2000, \\qquad R(10) = \\frac{10000}{10} = 1000$$

Doubling the price halves revenue, which is a plain dependence on price, so the statement is False.`,
      `**E.** → False

Evaluating the calibrated curve at a price four times the observed one is a direct substitution:

$$q(20) = \\frac{10000}{20^{2}} = \\frac{10000}{400} = 25$$

The scale factor from the observed price agrees, since quadrupling the price divides quantity by $4^{2}$:

$$\\frac{q(20)}{q(5)} = 4^{-2} = \\frac{1}{16}, \\qquad \\frac{400}{16} = 25$$

Dividing by the price multiplier itself instead of its square produces exactly the claimed $50$, the answer for elasticity $-1$. The curve gives $25$ subscriptions, so the statement is False.`,
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

A fixed charge enters both bills with the same weight, so differencing the two engagements removes it while the variable parts survive with shape factors $\\sqrt{100}=10$ and $\\sqrt{400}=20$:

$$F + 10a = 500, \\qquad F + 20a = 800$$

$$10a = 300 \\quad \\Rightarrow \\quad a = 30$$

Substituting back recovers the constant part:

$$F = 500 - 10(30) = 200, \\qquad C(n) = 200 + 30\\sqrt{n}$$

Neither engagement can separate the two constants on its own, which is why both filed bills are needed. The fixed charge is $200$, so the statement is True.`,
      `**B.** → False

A power function has the form $An^{r}$ and nothing else, and its scale factor is $k^{r}$ whenever the input is multiplied by $k$, wherever the move starts. Two separate quadruplings test that:

$$\\frac{C(400)}{C(100)} = \\frac{800}{500} = 1.6$$

$$\\frac{C(1600)}{C(400)} = \\frac{200 + 30(40)}{800} = \\frac{1400}{800} = 1.75$$

An exponent of $0.5$ would give the same factor $4^{0.5}=2$ both times, and the drift between $1.6$ and $1.75$ is the fingerprint of the added constant in $200 + 30\\sqrt{n}$. Total cost is a constant plus a power function rather than a power function, so the statement is False.`,
      `**C.** → True

Cost per account is the fee divided by the number of accounts, which lowers the exponent of each term by one:

$$\\frac{C(n)}{n} = \\frac{200}{n} + \\frac{30\\sqrt{n}}{n} = 200n^{-1} + 30n^{-0.5}$$

Both exponents are negative, so both pieces decline: the fixed charge spreads over more accounts, and the variable part thins out because its exponent sits below $1$.

$$\\frac{500}{100} = 5, \\qquad \\frac{800}{400} = 2, \\qquad \\frac{1100}{900} \\approx 1.22$$

Had the variable exponent exceeded $1$, the two forces would pull against each other and the answer would depend on $n$. Cost per account falls from $5$ to about $1.22$, so the statement is True.`,
      `**D.** → True

Extrapolating the recovered schedule is a substitution, and $900$ is a perfect square, so its shape factor is exact and no rounding enters:

$$C(900) = 200 + 30\\sqrt{900} = 200 + 30(30) = 200 + 900 = 1100$$

Set beside the filed engagements, the schedule shows its structure:

$$C(100) = 500, \\qquad C(400) = 800, \\qquad C(900) = 1100$$

Accounts rise ninefold from the first engagement while the bill only slightly more than doubles, because each equal step in $\\sqrt{n}$ adds exactly $300$. The $900$-account bill is $1100$, so the statement is True.`,
      `**E.** → False

Doubling the accounts moves only the variable term, and by $\\sqrt{2}\\approx1.414$ rather than by $2$:

$$C(200) = 200 + 30\\sqrt{200} \\approx 200 + 30(14.142) \\approx 624.3$$

$$\\frac{624.3}{500} \\approx 1.249 \\quad \\Rightarrow \\quad +24.9\\%$$

The fixed charge of $200$ does not move at all, so it dilutes every percentage change in the total, and even the variable part alone would have gained only $41\\%$. The bill rises by about a quarter rather than by more than half, so the statement is False.`,
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

$$\\frac{C(n)}{n} = 200n^{-1} + 30n^{-0.5}$$

Both exponents are negative, so the fee per account falls as the engagement grows. Read at account counts $100$, $400$ and $1600$, the average fee runs:

$$5 \\to 2 \\to 1.22$$

The drop is steep at first because the fixed charge is spread over more accounts, then it flattens as the square root term comes to dominate.

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

Total emissions are the product of fleet size and intensity, and multiplying two powers of the same variable adds their exponents:

$$E = a \\times 120a^{-0.5} = 120 a^{0.5}$$

Substituting the fleet law multiplies exponents, because a power of a power compounds:

$$E(t) = 120\\left(4t^{0.5}\\right)^{0.5} = 120 \\times 4^{0.5} \\times t^{0.25} = 240\\,t^{0.25}$$

The exponent $0.5$ belongs to the fleet law, and carrying it through unchanged ignores the second square root. Emissions are a power function of time, but with exponent $0.5 \\times 0.5 = 0.25$, so the statement is False.`,
      `**B.** → False

A level of the composed law is one substitution, and the fourth root of $16$ is exact:

$$E(16) = 240 \\times 16^{0.25} = 240 \\times 2 = 480$$

Running the two stages separately gives the same figure:

$$a(16) = 4\\sqrt{16} = 16, \\qquad e(16) = \\frac{120}{\\sqrt{16}} = 30, \\qquad 16 \\times 30 = 480$$

The claimed $960$ is what the fleet exponent alone would give, since $240 \\times 16^{0.5}=960$, and the fourth root $16^{0.25}=2$ is half the square root $16^{0.5}=4$. Both routes give $480$, so the statement is False.`,
      `**C.** → True

Direction is settled by the signs in the composed law, and a positive coefficient with a positive exponent gives an increasing function:

$$E(t) = 240\\,t^{0.25}, \\qquad 240 > 0, \\quad 0.25 > 0$$

$$E(1) = 240, \\qquad E(16) = 480, \\qquad E(81) = 240 \\times 3 = 720$$

The two stages do pull against each other, the fleet growing while each vehicle pollutes less, and the composed exponent records that fleet growth wins, though only narrowly. Emissions climb steadily, so the statement is True.`,
      `**D.** → False

Doubling the elapsed time multiplies emissions by the fourth root of two, since the composed exponent is $0.25$:

$$\\frac{E(2t)}{E(t)} = 2^{0.25} \\approx 1.1892$$

Doubling emissions instead takes a sixteenfold stretch of time:

$$k^{0.25} = 2 \\quad \\Rightarrow \\quad k = 2^{4} = 16$$

$$E(16) = 480, \\qquad E(32) = 240 \\times 32^{0.25} \\approx 240 \\times 2.378 \\approx 570.7$$

The pair $E(1)=240$ and $E(16)=480$ does look like a doubling, but sixteen years produced it rather than one doubling of time. Doubling time adds about a fifth, so the statement is False.`,
      `**E.** → False

Emission intensity is the second stage of the chain, a power function whose exponent is negative:

$$e(a) = 120a^{-0.5}, \\qquad -0.5 < 0$$

$$e(4) = \\frac{120}{2} = 60, \\qquad e(16) = \\frac{120}{4} = 30$$

The aggregate and the average move in opposite directions here, $+0.25$ for the total against $-0.5$ for intensity, so a rising total is no evidence of rising intensity. Intensity halves as the fleet quadruples, so the statement is False.`,
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

A coefficient is the measured capacity divided by the shape factor at the bench diameter, and a fractional exponent like $2.5$ splits into an integer part and a half:

$$4^{2.5} = 4^{2} \\times 4^{0.5} = 16 \\times 2 = 32$$

$$32A = 64 \\quad \\Rightarrow \\quad A = 2, \\qquad Q(d) = 2d^{2.5}$$

The split is exact only because the bench diameter is a power of two, which is why tests are run at convenient diameters. The coefficient is $2$, so the statement is True.`,
      `**B.** → True

A scale factor is free of both the coefficient and the starting diameter, so doubling the bore multiplies capacity by two raised to the exponent:

$$\\frac{Q(2d)}{Q(d)} = 2^{2.5} = 2^{2} \\times 2^{0.5} = 4\\sqrt{2} \\approx 5.657$$

The bench pipe confirms it:

$$Q(4) = 64, \\qquad Q(8) = 2 \\times 8^{2.5} = 2 \\times 181.02 \\approx 362.0, \\qquad \\frac{362.0}{64} \\approx 5.66$$

A plain area-based rule would predict a factor of $4$ and understate the gain by about $40\\%$, since the exponent here exceeds $2$. The factor is about $5.7$, so the statement is True.`,
      `**C.** → False

Inverting an exponent of $2.5$ raises the target to the reciprocal power $0.4$, which compresses the required change rather than magnifying it:

$$2d^{2.5} = 250 \\quad \\Rightarrow \\quad d^{2.5} = 125 \\quad \\Rightarrow \\quad d = 125^{0.4}$$

$$125^{0.4} = e^{0.4 \\times \\ln 125} = e^{0.4 \\times 4.8283} = e^{1.9313} \\approx 6.90$$

Capacity has to rise nearly fourfold from the bench test, which in proportional terms suggests a much wider pipe; with inverse exponent $0.4$ a fourfold gain needs only $4^{0.4}\\approx1.74$ times the diameter. A $10$ cm pipe overshoots the target outright:

$$Q(10) = 2 \\times 10^{2.5} \\approx 632$$

A bore of about $6.9$ cm already meets the target, so the statement is False.`,
      `**D.** → False

A change of units rescales the input, and a power law absorbs that rescaling entirely in its coefficient:

$$Q = 2 d_{\\text{cm}}^{2.5} = 2\\left(\\frac{d_{\\text{mm}}}{10}\\right)^{2.5} = \\frac{2}{10^{2.5}}\\,d_{\\text{mm}}^{2.5}$$

$$10^{2.5} \\approx 316.23, \\qquad \\frac{2}{316.23} \\approx 0.00632$$

Physical capacity is untouched, as the bench pipe shows in the new units:

$$0.00632 \\times 40^{2.5} \\approx 0.00632 \\times 10119 \\approx 64$$

The exponent survives the switch, which is why exponents and elasticities are quoted as unit-free descriptions, while the coefficient shrinks by a factor of about $316$. The coefficient does change, so the statement is False.`,
      `**E.** → False

A ratio of a power function to its own input stays constant only when the two exponents match, which means an exponent of exactly $1$ upstairs:

$$\\frac{Q(d)}{d} = \\frac{2d^{2.5}}{d} = 2d^{1.5}$$

What is left carries exponent $1.5$ and keeps rising:

$$\\frac{Q(4)}{4} = \\frac{64}{4} = 16, \\qquad \\frac{Q(8)}{8} = \\frac{362.0}{8} \\approx 45.3$$

That is why wider pipes are so much more efficient per centimetre of bore. Capacity per centimetre nearly triples between those two pipes, so the statement is False.`,
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

Substituting the radius law into the disc formula squares a square root, and a power of a power multiplies the exponents:

$$S(t) = \\pi\\left(3t^{0.5}\\right)^{2} = \\pi \\times 9 \\times t^{0.5 \\times 2}$$

$$S(t) = 9\\pi t$$

Equal time steps then add equal area:

$$S(1) = 9\\pi, \\qquad S(2) = 18\\pi, \\qquad S(3) = 27\\pi$$

Proportionality survives only because the two exponents are exact reciprocals; a radius growing as $t^{0.6}$ would leave area with exponent $1.2$ and break it. Area is proportional to elapsed time, so the statement is True.`,
      `**B.** → True

The area covered is the disc of the current radius, so the radius law has to be composed with $\\pi r^{2}$ before any level is read off:

$$S(t)=\\pi\\left(3t^{0.5}\\right)^2=9\\pi t$$

$$S(4)=9\\pi(4)=36\\pi$$

Squaring the radius law squares its coefficient as well, turning the $3$ into a $9$; leaving that step out would understate the area threefold. The four-hour area is $36\\pi$ square kilometres, so the statement is True.`,
      `**C.** → True

The composed law $S(t)=9\\pi t$ carries exponent $1$, so its scale factor is the input multiplier itself:

$$\\frac{S(2t)}{S(t)} = 2^{1} = 2$$

$$S(4) = 36\\pi, \\qquad S(8) = 72\\pi$$

The radius decelerates while area grows with the square of the radius, and those two effects cancel exactly, which is how a slowing frontier still covers ground at a constant pace. Area doubles when time doubles, so the statement is True.`,
      `**D.** → True

The radius law carries exponent $0.5$, so multiplying time by $1.5$ multiplies the radius by the square root of that factor:

$$\\frac{r(1.5t)}{r(t)}=1.5^{0.5}\\approx1.224745$$

A percentage change is the scale factor minus one:

$$(1.224745-1)\\times100\\%\\approx22.5\\%$$

Halving the $50\\%$ time increase to $25\\%$ is the linear guess; the square root delivers slightly less. The radius rises by about $22.5\\%$, so the statement is True.`,
      `**E.** → True

An area target inverts the composed law rather than the radius law, and with exponent $1$ that inversion is a single division once $\\pi$ cancels from both sides:

$$9\\pi t=100\\pi$$

$$t=\\frac{100}{9}\\approx11.11$$

Working through the radius instead adds a step, solving $3t^{0.5}=10$, and lands in the same place. The target area arrives after about $11.1$ hours, so the statement is True.`,
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

A crossing of a square-root schedule and a linear one starts from Plan A's coefficient, which the filed invoice supplies:

$$a\\sqrt{36} = 240 \\quad \\Rightarrow \\quad 6a = 240 \\quad \\Rightarrow \\quad a = 40$$

Dividing by $\\sqrt{u}$ is legitimate on the domain $u>0$ and leaves a condition on $\\sqrt{u}$ alone, which then has to be squared out:

$$40\\sqrt{u} = 5u \\quad \\Rightarrow \\quad 40 = 5\\sqrt{u} \\quad \\Rightarrow \\quad \\sqrt{u} = 8 \\quad \\Rightarrow \\quad u = 64$$

Stopping at $\\sqrt{u}=8$ would report $8$ tickets instead. The shared bill also sits under Plan A's cap:

$$C_A(64) = 40(8) = 320, \\qquad C_B(64) = 5(64) = 320$$

Both plans bill $320$ at $64$ tickets, so the statement is True.`,
      `**B.** → True

An interval claim is settled by the inequality between the two schedules, and $\\sqrt{u}>0$ permits the same division as before:

$$5u < 40\\sqrt{u} \\quad \\Longleftrightarrow \\quad 5\\sqrt{u} < 40 \\quad \\Longleftrightarrow \\quad u < 64$$

$$C_A(16) = 40(4) = 160, \\qquad C_B(16) = 80$$

Plan A is the contract that flattens out at high volume, which makes it feel like the cheap one, yet a square-root schedule starts steeply and charges $40$ for the first ticket against Plan B's $5$. Below the crossing the flat contract is cheaper, so the statement is True.`,
      `**C.** → True

A monetary cap becomes a ticket volume by asking where the uncapped schedule reaches it:

$$40\\sqrt{u} = 400 \\quad \\Rightarrow \\quad \\sqrt{u} = 10 \\quad \\Rightarrow \\quad u = 100$$

Because the uncapped schedule increases, every volume beyond that point would bill more than the cap and is trimmed to it:

$$C_A(u) = \\begin{cases} 40\\sqrt{u}, & u \\le 100 \\\\ 400, & u > 100 \\end{cases}$$

Below $100$ tickets the cap is inert, which is why the crossing at $64$ tickets and $320$ is untouched by it. The cap takes over from $100$ tickets, so the statement is True.`,
      `**D.** → False

The uncapped formula describes the bill only up to the cap, so a volume past $100$ tickets has to run through the two-piece rule:

$$40\\sqrt{144} = 40(12) = 480$$

$$C_A(144) = \\min\\{480,\\,400\\} = 400$$

The arithmetic behind $480$ is correct while the modelling is not, and the error of $80$ at $144$ tickets widens with every extra ticket. Plan A bills $400$, so the statement is False.`,
      `**E.** → False

A constant unit price is what an exponent of $1$ produces, so dividing each schedule by the ticket count shows which plan has it:

$$\\frac{C_A(u)}{u} = \\frac{40\\sqrt{u}}{u} = 40u^{-0.5}, \\qquad \\frac{C_B(u)}{u} = 5$$

Plan A's exponent is $0.5$, which leaves a negative exponent after the division, and once the cap binds the numerator stops growing and the decline steepens:

$$\\frac{240}{36} \\approx 6.67, \\qquad \\frac{320}{64} = 5, \\qquad \\frac{400}{144} \\approx 2.78$$

The flat $5$ per ticket belongs to Plan B. Plan A's per-ticket cost more than halves across that range, so the statement is False.`,
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

**2.** Locate the crossing of the uncapped schedules by setting the two bills equal:

$$40\\sqrt{u} = 5u$$

Dividing both sides by $5\\sqrt{u}$ leaves a single square root:

$$\\sqrt{u} = 8$$

Squaring gives the crossing volume:

$$u = 64$$

At that volume both plans bill $320$.

**3.** Order the plans on each side of the crossing:

$$u < 64 \\;\\Rightarrow\\; C_B < C_A, \\qquad 64 < u \\;\\Rightarrow\\; C_A < C_B$$

**4.** Convert the cap into a ticket volume:

$$40\\sqrt{u} = 400 \\;\\Rightarrow\\; u = 100$$

Beyond $100$ tickets Plan A is flat at $400$ while Plan B keeps climbing, so Plan A's advantage widens without limit.

**5.** Unit costs separate the two shapes. Plan A's cost per ticket falls as the volume grows:

$$\\frac{C_A(u)}{u} = 40u^{-0.5}$$

Plan B's cost per ticket is the same at every volume:

$$\\frac{C_B(u)}{u} = 5$$

That is why the ranking flips once and never flips back.

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

Each doubling of cumulative output applies the survival factor $0.8$ once, so three successive doublings apply it three times over:

$$c(8)=1000(0.8)^3=1000(0.512)=512$$

A cumulative cut is measured against the first-unit cost:

$$\\frac{1000-512}{1000}=0.488=48.8\\%$$

Adding three $20\\%$ cuts into a $60\\%$ reduction would treat the factors as combining additively rather than multiplicatively. The modelled cost is $512$, a cut of $48.8\\%$, so the statement is True.`,
      `**B.** → False

The learning multiplier and the exponent are different objects: $0.8$ is what cost is multiplied by at a doubling, while the exponent governs every other scale factor. Recovering it takes logarithms:

$$2^{-b} = 0.8 \\quad \\Rightarrow \\quad -b\\ln 2 = \\ln 0.8$$

$$b = \\frac{-\\ln 0.8}{\\ln 2} = \\frac{0.2231}{0.6931} \\approx 0.3219$$

$$c(N) = 1000\\,N^{-0.3219}$$

An exponent of $-0.8$ would mean a doubling multiplied cost by $2^{-0.8}\\approx0.574$, a far steeper curve than the one recorded. The exponent is about $-0.322$, so the statement is False.`,
      `**C.** → False

Because $8=2^{3}$, the eighth unit is reached by counting doublings rather than by taking logarithms:

$$1 \\to 2 \\to 4 \\to 8$$

That chain holds three doublings, so the $0.8$ factor is applied three times:

$$c(8) = 1000 \\times 0.8^{3} = 1000 \\times 0.512 = 512$$

The exponent form agrees:

$$1000 \\times 8^{-0.3219} = 1000 \\times e^{-0.3219 \\times 2.0794} \\approx 512$$

The claimed $500$ is a rounded half of the first-unit cost, and rounding a learning curve that way distorts the floor calculation later. The unit cost is $512$, so the statement is False.`,
      `**D.** → False

The materials floor binds where the curve first reaches $400$, which calls for an inversion of the calibrated learning curve:

$$1000\\,N^{-0.3219} = 400 \\quad \\Rightarrow \\quad N^{0.3219} = 2.5$$

$$N = 2.5^{1/0.3219} = e^{0.9163/0.3219} = e^{2.8465} \\approx 17.2$$

Two doublings bracket that figure:

$$c(16) = 1000 \\times 0.8^{4} = 409.6 > 400, \\qquad c(32) = 327.7 < 400$$

The curve is flattening, falling only from $512$ to about $410$ between the eighth and sixteenth units, so extrapolating its early steep part reaches the floor too soon. The floor binds from about $17$ units, so the statement is False.`,
      `**E.** → False

Quadrupling cumulative output is two doublings, so the survival factor applies twice:

$$\\frac{c(4N)}{c(N)} = \\left(0.8\\right)^{2} = 0.64$$

$$1 - 0.64 = 0.36 = 36\\%$$

Percentage reductions compound multiplicatively, so two $20\\%$ cuts leave $64\\%$ of the cost rather than $60\\%$, and halving would need a multiplier near $0.707$ at each doubling. Concrete volumes confirm the factor:

$$c(2) = 800, \\qquad c(8) = 512, \\qquad \\frac{512}{800} = 0.64$$

Quadrupling removes about a third of the cost rather than half, so the statement is False.`,
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

Break-even is where revenue and fee coincide, and dividing by $\\sqrt{x}$ turns that equation into a condition on the root:

$$90\\sqrt{x} = 6x \\quad \\Rightarrow \\quad 90 = 6\\sqrt{x} \\quad \\Rightarrow \\quad \\sqrt{x} = 15$$

$$x = 15^{2} = 225$$

The division discards the root at $x=0$, which the domain excludes and which would only say that a campaign with no spend trivially breaks even. Both sides agree at the surviving root:

$$R(225) = 90(15) = 1350, \\qquad F(225) = 6(225) = 1350$$

The net gain is zero at a spend of $225$, so the statement is True.`,
      `**B.** → False

The sign of the net gain is read off a factorisation in which one factor is positive throughout:

$$R(x) - F(x) = 90\\sqrt{x} - 6x = 6\\sqrt{x}\\left(15 - \\sqrt{x}\\right)$$

$$15 - \\sqrt{x} > 0 \\quad \\Longleftrightarrow \\quad x < 225$$

The fee grows proportionally while revenue grows only as a square root, so break-even closes the profitable range instead of opening it:

$$R(400) - F(400) = 90(20) - 2400 = 1800 - 2400 = -600$$

Above a spend of $225$ the net gain is negative, so the statement is False.`,
      `**C.** → False

Doubling the spend multiplies revenue by two raised to the revenue exponent, which is $0.5$:

$$\\frac{R(2x)}{R(x)} = 2^{0.5} \\approx 1.4142$$

The fee is the schedule that really is proportional:

$$\\frac{F(2x)}{F(x)} = 2$$

$$R(100) = 900, \\qquad R(200) \\approx 1272.8$$

That mismatch, exponent $1$ on fees against $0.5$ on revenue, is the whole economics of the case and makes any large enough campaign loss-making. Revenue grows by about $41\\%$ rather than doubling, so the statement is False.`,
      `**D.** → True

Net gain is the difference between the two schedules at the same spend, so both sides are evaluated first:

$$R(100) = 90\\sqrt{100} = 90(10) = 900$$

$$F(100) = 6(100) = 600$$

$$900 - 600 = 300$$

A spend of $100$ sits well inside the profitable range, and by $225$ the net gain has already fallen back to zero, so the window is narrow. The net gain is $300$, so the statement is True.`,
      `**E.** → False

Revenue per unit of spend is revenue divided by spend, which lowers the exponent by one:

$$\\frac{R(x)}{x} = \\frac{90x^{0.5}}{x} = 90x^{-0.5}$$

The exponent is negative, so the average return declines even while total revenue keeps rising:

$$\\frac{R(100)}{100} = 9, \\qquad \\frac{R(225)}{225} = 6, \\qquad \\frac{R(400)}{400} = 4.5$$

The average crosses the constant fee rate of $6$ exactly at the break-even spend, which is what ends the profitable range. The return per euro falls from $9$ to $4.5$, so the statement is False.`,
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

Each record speaks about one stage only, and the labour record belongs to the material stage:

$$A\\sqrt{100} = 40 \\quad \\Rightarrow \\quad 10A = 40 \\quad \\Rightarrow \\quad A = 4$$

$$m(L) = 4L^{0.5}$$

A second labour level checks the shape:

$$m(400) = 4(20) = 80 \\text{ tonnes}$$

Mixing the records, dividing $54$ by $100$ for instance, produces a coefficient belonging to neither stage. The first stage is $4L^{0.5}$, so the statement is True.`,
      `**B.** → True

Composing the two stages substitutes the whole first stage, coefficient included, into the second. The material record calibrates that second stage:

$$B(9)^{1.5} = 54 \\quad \\Rightarrow \\quad 27B = 54 \\quad \\Rightarrow \\quad B = 2$$

$$g(L) = 2\\left(4L^{0.5}\\right)^{1.5} = 2 \\times 4^{1.5} \\times L^{0.5 \\times 1.5}$$

$$g(L) = 2 \\times 8 \\times L^{0.75} = 16L^{0.75}$$

Raising only the variable and leaving the coefficient behind would give $2 \\times 4 = 8$ and halve every prediction, since $4^{1.5}=8$. The composed law is $16L^{0.75}$, so the statement is True.`,
      `**C.** → True

A scale factor on a composed law uses the composed exponent, here the product $0.5 \\times 1.5 = 0.75$:

$$\\frac{g(2L)}{g(L)} = 2^{0.75} = 2^{1/2} \\times 2^{1/4} \\approx 1.4142 \\times 1.1892 \\approx 1.6818$$

Neither stage's exponent settles the question alone, and the stage-by-stage route agrees:

$$m \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{1.5} \\approx 1.682$$

Finished output rises by about $68\\%$, so the statement is True.`,
      `**D.** → True

Inverting a $0.75$ exponent raises the target to the power $4/3$, which magnifies the required input rather than shrinking it:

$$16L^{0.75} = 432 \\quad \\Rightarrow \\quad L^{0.75} = 27$$

$$L = 27^{4/3} = \\left(3^{3}\\right)^{4/3} = 3^{4} = 81$$

The figures are chosen so the root is exact, since $27=3^{3}$, and substitution confirms it:

$$g(81) = 16 \\times 81^{0.75} = 16 \\times 27 = 432$$

Labour has to grow faster than the output target, and the requirement is exactly $81$ hours, so the statement is True.`,
      `**E.** → True

The average product of labour is the composed law divided by labour, which lowers the exponent by one:

$$\\frac{g(L)}{L} = \\frac{16L^{0.75}}{L} = 16L^{-0.25}$$

A composed exponent below $1$ is the condition for a falling average: total output rises, but not fast enough to keep pace with the hours added.

$$\\frac{g(16)}{16} = \\frac{16 \\times 8}{16} = 8, \\qquad \\frac{g(81)}{81} = \\frac{432}{81} \\approx 5.33$$

An exponent above $1$ would have left a rising average instead. Output per hour falls from $8$ to about $5.33$, so the statement is True.`,
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

Revenue on an isoelastic demand curve is itself a power function, so direction is decided by its exponent. The observation calibrates demand first:

$$A(4)^{-1.5} = 250 \\quad \\Rightarrow \\quad \\frac{A}{8} = 250 \\quad \\Rightarrow \\quad A = 2000$$

$$R(p) = p \\times 2000p^{-1.5} = 2000p^{-0.5}$$

Whether revenue rises or falls turns on whether elasticity lies below $-1$; at $-1.5$ the loss of copies outweighs the higher price per copy:

$$R(4) = \\frac{2000}{2} = 1000, \\qquad R(9) = \\frac{2000}{3} \\approx 666.7$$

Revenue falls as the price rises, so the statement is True.`,
      `**B.** → True

Multiplying a power function by $p$ raises its exponent by exactly $1$, so revenue built on an isoelastic demand curve is isoelastic too:

$$R(p) = p \\cdot 2000p^{-1.5} = 2000\\,p^{-1.5+1} = 2000p^{-0.5}$$

The scale factor behaves as a power function's should:

$$\\frac{R(4p)}{R(p)} = 4^{-0.5} = \\frac{1}{2}$$

The same rule explains why elasticity $-1$ is the knife edge, since the revenue exponent would then be $0$ and revenue constant. Revenue carries exponent $-0.5$, so the statement is True.`,
      `**C.** → True

A revenue level at a new price needs the demand coefficient first, and the observation at a price of $4$ supplies it:

$$250=A(4)^{-1.5}=\\frac{A}{8} \\quad\\Rightarrow\\quad A=2000$$

Multiplying by price raises the exponent to $-0.5$, and the new price is a perfect square, so the root is exact:

$$R(25)=2000(25)^{-0.5}=\\frac{2000}{5}=400$$

Using the demand exponent $-1.5$ in place of the revenue exponent would give a very different figure. Monthly revenue at that price is $400$, so the statement is True.`,
      `**D.** → False

Covering the fixed charge is the condition $2000p^{-0.5}\\ge400$, and inverting a $-0.5$ exponent squares the ratio of the two sides:

$$2000p^{-0.5} = 400 \\quad \\Rightarrow \\quad p^{0.5} = \\frac{2000}{400} = 5$$

$$p = 25$$

Prices either side of the threshold confirm the direction:

$$R(16) = \\frac{2000}{4} = 500 > 400, \\qquad R(36) = \\frac{2000}{6} \\approx 333 < 400$$

The figure $16$ is what appears when the demand exponent is inverted instead of the revenue exponent. Prices up to $25$ still cover the charge, so the statement is False.`,
      `**E.** → False

Revenue carries exponent $-0.5$, so doubling the price multiplies revenue by the reciprocal square root of two:

$$\\frac{R(2p)}{R(p)} = 2^{-0.5} \\approx 0.7071$$

Halving revenue takes a quadrupling of the price:

$$k^{-0.5} = 0.5 \\quad \\Rightarrow \\quad k = 4$$

$$R(4) = 1000, \\qquad R(8) = \\frac{2000}{2.828} \\approx 707, \\qquad R(16) = 500$$

Reading demand's exponent $-1.5$ into the revenue law is the same confusion, since each stage carries its own exponent and its own scale factor. Doubling the price costs about $29\\%$ of revenue, so the statement is False.`,
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

The shift log records a gain in the item count between two shift lengths rather than an output level, so the coefficient has to be rebuilt from a difference. Both shift lengths are perfect squares, so the shape factors are whole numbers:

$$9^{0.5} = 3, \\qquad 4^{0.5} = 2$$

The recorded gain multiplies the coefficient by the difference of those factors, which here happens to be $1$:

$$N(9) - N(4) = A(3 - 2) = A = 30$$

Reading $30$ as an output or an hourly rate and dividing by a shift length would give $30/9$ or $30/4$ instead. The recovered law reproduces the log:

$$N(h) = 30\\sqrt{h}, \\qquad N(4) = 60, \\qquad N(9) = 90$$

The two shifts differ by $30$ items as recorded, so the statement is True.`,
      `**B.** → False

Moving between two shift lengths multiplies output by the square root of the length ratio, since the exponent is $0.5$:

$$\\frac{N(9)}{N(4)} = \\left(\\frac{9}{4}\\right)^{0.5} = \\frac{3}{2}$$

$$N(9) = \\frac{3}{2}\\cdot 60 = 90$$

Stretching the four-hour count of $60$ by the ratio $9/4$ itself produces the claimed $135$, which is the linear answer. Evaluating the law directly agrees with the ratio route:

$$N(9) = 30\\sqrt{9} = 30 \\cdot 3 = 90$$

The nine-hour shift packs $90$ items, so the statement is False.`,
      `**C.** → False

A scale factor depends only on the exponent, and the coefficient cancels out of the ratio:

$$\\frac{N(2h)}{N(h)} = \\frac{A(2h)^{0.5}}{Ah^{0.5}} = 2^{0.5} \\approx 1.414$$

$$N(4) = 60, \\qquad N(8) = 30\\sqrt{8} \\approx 84.9$$

Twice the time gives twice the work only for a steady flow; an exponent below $1$ encodes fatigue and setup effects, so each extra hour adds less than the one before. Eight hours pack about $85$ items rather than $120$, so the statement is False.`,
      `**D.** → False

Testing an order against a shift-length limit means evaluating the law at that limit and inverting it at the order size:

$$N(20) = 30\\sqrt{20} \\approx 30 \\cdot 4.472 \\approx 134.2$$

$$30\\sqrt{h} = 150 \\quad \\Rightarrow \\quad \\sqrt{h} = 5 \\quad \\Rightarrow \\quad h = 25$$

Extrapolating from the logged shifts, where nine hours gave $90$ items, makes twenty hours look comfortable; under a square-root law more than doubling the shift adds only about $50\\%$ more output. The order needs $25$ hours, five more than the limit allows, so the statement is False.`,
      `**E.** → False

Items per hour is the average product, formed by dividing the law by the shift length and subtracting exponents:

$$\\frac{N(h)}{h} = \\frac{30h^{0.5}}{h} = 30h^{-0.5}$$

The exponent is negative, so the hourly rate decays even while the total keeps climbing:

$$\\frac{N(4)}{4} = 15, \\qquad \\frac{N(9)}{9} = 10, \\qquad \\frac{N(25)}{25} = 6$$

More items overall and more items per hour are different claims, and with an exponent below $1$ they point in opposite directions. The hourly rate falls from $15$ to $6$ items, so the statement is False.`,
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

Two runs are exactly what a two-constant law needs: their ratio carries the exponent, because only in a ratio does the coefficient cancel.

$$\\frac{F(40)}{F(20)} = \\frac{A(40)^{r}}{A(20)^{r}} = 2^{r} = \\frac{640}{160} = 4 \\quad \\Rightarrow \\quad r = 2$$

Either run then fixes the level:

$$A(20)^{2} = 160 \\quad \\Rightarrow \\quad 400A = 160 \\quad \\Rightarrow \\quad A = 0.4$$

Working with the difference of the runs, $480$ N over $20$ m/s, would describe a straight line rather than a power law. The run not used for the level verifies the result:

$$F(40) = 0.4(1600) = 640 \\;\\checkmark$$

Both runs sit on $F(v)=0.4v^{2}$, so the statement is True.`,
      `**B.** → False

The mounting rating is a force, so the speed behind it comes from inverting the drag law:

$$0.4v^{2} = 1000 \\quad \\Rightarrow \\quad v^{2} = 2500 \\quad \\Rightarrow \\quad v = 50$$

The scale factor from the faster logged run agrees:

$$F(50) = F(40)\\left(\\frac{50}{40}\\right)^{2} = 640 \\cdot 1.5625 = 1000 \\;\\checkmark$$

Linear extrapolation from that run suggests $40 \\cdot 1000/640 = 62.5$ m/s and clears $55$ comfortably; because drag grows with the square of speed, the remaining $360$ N of headroom is consumed by only $10$ m/s. The rating is reached at $50$ m/s, so the statement is False.`,
      `**C.** → True

Absorbed power is drag times speed, and multiplying by $v$ is itself a power of $v$, so the exponents add:

$$P(v) = F(v)\\cdot v = 0.4v^{2}\\cdot v^{1} = 0.4v^{3}$$

The logged runs display the resulting shape:

$$P(20) = 0.4(8000) = 3200 \\text{ W}, \\qquad P(40) = 0.4(64000) = 25600 \\text{ W}$$

$$\\frac{P(40)}{P(20)} = 8 = 2^{3}$$

Power does not inherit the drag exponent, even though both quantities come off the same runs. Absorbed power is $0.4v^{3}$, a power function with exponent $3$, so the statement is True.`,
      `**D.** → False

The scale factor of the power law uses its own exponent, which is $3$:

$$\\frac{P(2v)}{P(v)} = \\frac{0.4(2v)^{3}}{0.4v^{3}} = 2^{3} = 8$$

The logged runs give the same factor:

$$\\frac{P(40)}{P(20)} = \\frac{25600}{3200} = 8$$

Neither proportionality nor drag's squared exponent applies, since power carries drag's exponent plus one, which is why speed punishes fan and engine sizing so heavily. Absorbed power multiplies by $8$ rather than $2$, so the statement is False.`,
      `**E.** → False

Absorbed power at a given speed is force times speed, with no halving anywhere in the definition:

$$P(50) = 0.4(50)^{3} = 0.4 \\cdot 125000 = 50000 \\text{ W} = 50 \\text{ kW}$$

Routing through the drag at that speed gives the same figure:

$$P(50) = F(50)\\cdot 50 = 1000 \\cdot 50 = 50000 \\text{ W}$$

The claimed $25$ kW is what carrying the factor $\\tfrac{1}{2}$ from the kinetic-energy formula would produce, and that half belongs to the energy stored in moving air rather than to the rate of work against drag. The rig absorbs $50$ kW, so the statement is False.`,
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

Revenue's exponent is demand's exponent plus one, so direction is settled by that sum. The observation calibrates demand first:

$$A(16)^{-0.5} = 300 \\quad \\Rightarrow \\quad \\frac{A}{4} = 300 \\quad \\Rightarrow \\quad A = 1200$$

$$R(p) = p \\times 1200p^{-0.5} = 1200p^{0.5}$$

With demand at $-0.5$ the revenue exponent is $+0.5$: quantity does fall when price rises, but not fast enough to offset the higher price.

$$R(16) = 1200(4) = 4800, \\qquad R(25) = 1200(5) = 6000$$

Revenue rises with price, so the statement is True.`,
      `**B.** → False

A finite price rise of $44\\%$ acts through the exact power of the multiplier $1.44$, which is a convenient square:

$$\\frac{q(1.44p)}{q(p)}=1.44^{-0.5}=\\frac{1}{1.2}=\\frac{5}{6}$$

The quantity fall is one minus that surviving fraction:

$$1-\\frac{5}{6}=\\frac{1}{6}\\approx16.7\\%$$

Multiplying $44\\%$ by the elasticity $-0.5$ gives $22\\%$, and rounding the convenient square towards $20\\%$ is no better; the word "exactly" leaves room for neither. Quantity falls by about $16.7\\%$, so the statement is False.`,
      `**C.** → False

A target quantity inverts the calibrated curve $q(p)=1200p^{-0.5}$, which leaves the square root of price on one side:

$$200=\\frac{1200}{\\sqrt{p}} \\quad\\Rightarrow\\quad \\sqrt{p}=6$$

$$p=6^2=36$$

Quantity has to fall by a third from the observed $300$, and squaring the inversion makes the required price move larger than that proportion suggests, though it still lands short of $40$. The target quantity arrives at a price of $36$, so the statement is False.`,
      `**D.** → False

Quadrupling the price multiplies quantity by four raised to the demand exponent, and that exponent is $-0.5$:

$$\\frac{q(4p)}{q(p)} = 4^{-0.5} = \\frac{1}{2}$$

$$q(16) = 300, \\qquad q(64) = \\frac{1200}{8} = 150$$

Falling to a quarter would need an exponent of $-1$, or a sixteenfold price rise on this curve, and reading the exponent as $-1$ is also what would reverse the revenue conclusion. Quantity halves, so the statement is False.`,
      `**E.** → False

Price-independent revenue is the case of a zero revenue exponent, which arises only when demand's exponent is exactly $-1$:

$$R(p) = 1200p^{0.5}, \\qquad 0.5 \\ne 0$$

$$R(4) = 2400, \\qquad R(16) = 4800, \\qquad R(64) = 9600$$

Here the exponent is $+0.5$, so revenue not only depends on price but moves in the same direction as it, the hallmark of inelastic demand. Revenue doubles with each quadrupling of price, so the statement is False.`,
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

A fractional exponent is handled through its denominator first, taking the cube root of the test feed and then the fourth power:

$$27^{4/3} = \\left(27^{1/3}\\right)^{4} = 3^{4} = 81$$

Dividing the recorded output by that shape factor leaves the coefficient:

$$81A = 324 \\quad \\Rightarrow \\quad A = 4, \\qquad y(x) = 4x^{4/3}$$

The other order works as well but passes through the awkward intermediate $27^{4}=531441$. The coefficient is $4$, so the statement is True.`,
      `**B.** → True

The licence caps output, so the feed behind it comes from inverting the law with the reciprocal exponent $3/4$:

$$4x^{4/3} = 1024 \\quad \\Rightarrow \\quad x^{4/3} = 256$$

$$x = 256^{3/4} = \\left(4^{4}\\right)^{3/4} = 4^{3} = 64$$

An exponent above $1$ compresses the required input change: output rises by a factor of about $3.16$ from the test firing while fuel rises only by about $2.37$. Substitution confirms the feed:

$$y(64) = 4 \\times 64^{4/3} = 4 \\times 256 = 1024$$

The ceiling binds at a feed of $64$, so the statement is True.`,
      `**C.** → False

Half the licensed ceiling is $512$ tonnes, and the feed that produces it comes from inverting the calibrated law:

$$4x^{4/3}=512 \\quad\\Rightarrow\\quad x^{4/3}=128$$

$$x=128^{3/4}\\approx38.05$$

Halving the licensed feed of $64$ to $32$ would be the answer for an exponent of $1$; with exponent $4/3$ output falls faster than feed, so more than half the feed is needed for half the output. Half the ceiling takes about $38.1$ of feed, so the statement is False.`,
      `**D.** → False

Perfect cubes keep the shape factor exact, since the cube root of the feed is a whole number:

$$8^{4/3} = \\left(8^{1/3}\\right)^{4} = 2^{4} = 16$$

$$y(8) = 4(16) = 64$$

The claimed $32$ is what a shape factor of $8$ would give, treating the exponent as $1$, or what halving the coefficient would give. The kiln produces $64$ tonnes, so the statement is False.`,
      `**E.** → False

Doubling the fuel feed multiplies output by two raised to the exponent $4/3$, with the coefficient cancelling in the ratio:

$$\\frac{y(54)}{y(27)}=2^{4/3}\\approx2.5198$$

A percentage change is that factor minus one:

$$(2.5198-1)\\times100\\%\\approx152.0\\%$$

Applying the exponent to the $100\\%$ feed increase as though it were an ordinary multiplier lands near the figure in the claim, while the full power goes further. Output rises by about $152\\%$, so the statement is False.`,
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

Two stages are inverses when their exponents are reciprocals and their constants are matched, so the composition has to be carried out in full:

$$g\\big(f(x)\\big) = \\frac{\\left(9x^{2/3}\\right)^{3/2}}{27} = \\frac{9^{3/2}\\,x^{(2/3)(3/2)}}{27}$$

$$9^{3/2} = 27, \\qquad \\frac{2}{3} \\times \\frac{3}{2} = 1$$

$$g\\big(f(x)\\big) = \\frac{27x}{27} = x$$

Reciprocal exponents alone would leave a power function of exponent $1$ carrying a stray constant; here $9^{3/2}=27$ matches the divisor exactly. The composition returns the original reading, so the statement is True.`,
      `**B.** → True

Composing power functions always gives a power function whose exponent is the product of the two exponents, never their sum:

$$\\frac{2}{3} \\times \\frac{3}{2} = 1$$

The constants collect separately:

$$\\frac{9^{3/2}}{27} = \\frac{27}{27} = 1$$

$$g\\big(f(x)\\big) = 1 \\cdot x^{1}$$

The identity map is the special case where that product equals $1$ and the constants cancel. The composition is a power function with exponent $1$, so the statement is True.`,
      `**C.** → True

A non-unit input tests both constants and both reciprocal exponents, one stage at a time:

$$f(125)=9(125)^{2/3}=9(25)=225$$

$$g(225)=\\frac{225^{3/2}}{27}=\\frac{15^3}{27}=125$$

Each shape factor is exact because $125$ is a cube and $225$ a square, so no rounding hides in the round trip. The stages pass through $225$ and return the original $125$, so the statement is True.`,
      `**D.** → False

The composition is the identity on every positive input, which the algebra settles once and for all:

$$g(f(x))=\\frac{\\left(9x^{2/3}\\right)^{3/2}}{27}=\\frac{27x}{27}=x$$

An awkward input changes nothing, since an exact cancellation admits no rounding:

$$g(f(50))=50 \\quad\\text{and}\\quad \\frac{50-50}{50}=0\\%$$

A raw reading that is neither a cube nor a square invites a decimal detour where a small discrepancy can look real. The composed value equals $50$ exactly, so the statement is False.`,
      `**E.** → False

Reciprocal exponents and matched constants are symmetric conditions, so a pair that inverts in one order inverts in the other as well:

$$f\\big(g(y)\\big) = 9\\left(\\frac{y^{3/2}}{27}\\right)^{2/3} = \\frac{9\\,y^{(3/2)(2/3)}}{27^{2/3}}$$

$$27^{2/3} = 9, \\qquad \\frac{3}{2} \\times \\frac{2}{3} = 1$$

$$f\\big(g(y)\\big) = \\frac{9y}{9} = y$$

The constants cancel in the mirror-image way, with $27^{2/3}=9$ where the other order used $9^{3/2}=27$. The reverse order also returns the input, so the statement is False.`,
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

A tie between two scoring laws is the load at which $S(x)$ and $T(x)$ take the same value, so both laws must be calibrated from the benchmark at load $4$ before the equation can be posed.

$$a\\sqrt{4} = 16 \\;\\Rightarrow\\; a = 8, \\qquad k(4)^{1.5} = 8 \\;\\Rightarrow\\; 8k = 8 \\;\\Rightarrow\\; k = 1$$

Setting the two calibrated scores equal and cancelling the shared factor $x^{0.5}$, which is legitimate because the load is strictly positive:

$$8x^{0.5} = x^{1.5} \\quad \\Rightarrow \\quad 8 = x^{1} \\quad \\Rightarrow \\quad x = 8$$

$$S(8) = 8\\sqrt{8} \\approx 22.63, \\qquad T(8) = 8^{1.5} \\approx 22.63$$

The crossing lands on the coefficient of algorithm S only because the two exponents differ by exactly $1$, not by any general rule. Both algorithms score about $22.63$ at load $8$, so the statement is True.`,
      `**B.** → False

The number of ties is the number of positive solutions of the equality condition, so the question is about roots rather than about values.

$$8x^{0.5} = x^{1.5} \\quad \\Longleftrightarrow \\quad x^{1.5 - 0.5} = 8 \\quad \\Longleftrightarrow \\quad x = 8$$

The ratio of the two scores settles the matter across the whole domain:

$$\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}$$

One curve starting above and ending above suggests two meetings, but a strictly increasing ratio can pass through $1$ only once. There is exactly one crossing on $x>0$, so the statement is False.`,
      `**C.** → False

Which algorithm leads on a range is decided by the ratio $T/S$, which compares the two laws at every load at once.

$$\\frac{T(x)}{S(x)} = \\frac{x}{8} > 1 \\quad \\Longleftrightarrow \\quad x > 8$$

A heavier load makes the ordering concrete:

$$S(16) = 8(4) = 32, \\qquad T(16) = 16^{1.5} = 64$$

Algorithm S does lead at light loads on the strength of its coefficient $8$ against $1$, but exponent $1.5$ against $0.5$ takes over once the crossing is passed. Algorithm T leads above the crossing, so the statement is False.`,
      `**D.** → False

Load $4$ is the benchmark at which the two coefficients were calibrated, and the benchmark scores are recorded directly in the brief.

$$S(4) = 16, \\qquad T(4) = 8$$

The ratio confirms the gap:

$$\\frac{T(4)}{S(4)} = \\frac{4}{8} = 0.5$$

Calibration load and crossing load are different questions, and here they are different numbers. Algorithm S scores twice algorithm T at load $4$, so the statement is False.`,
      `**E.** → False

A constant score ratio is exactly what two power functions produce when they share an exponent and differ only by a coefficient.

$$\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}$$

Evaluating that ratio at three loads:

$$\\frac{4}{8} = 0.5, \\qquad \\frac{8}{8} = 1, \\qquad \\frac{16}{8} = 2$$

The exponents here differ by $1$, so the ratio is itself a power function rather than a constant. It quadruples across that range, so the statement is False.`,
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

A capacity ratio between two fleet sizes cancels the unknown coefficient, leaving only the exponent acting on the fleet multiplier.

$$\\frac{C(64)}{C(32)}=\\left(\\frac{64}{32}\\right)^{0.8}=2^{0.8}\\approx1.741$$

Set that scale factor against the threshold in the claim:

$$1.741<2$$

Reading the exponent $0.8$ as an ordinary multiplier answers a different question, since the finite scale factor is a power rather than a proportion. Capacity rises by a factor below two, so the statement is True.`,
      `**B.** → True

The percentage effect of a doubling is the scale factor minus one, so the same power of two governs it as governed the ratio above.

$$\\frac{C(2m)}{C(m)} = 2^{0.8} = e^{0.8 \\times 0.6931} \\approx e^{0.5545} \\approx 1.7411$$

Checking against the recorded fleet, with $A=80/32^{0.8}=80/16=5$:

$$C(32) = 80, \\qquad C(64) = 5 \\times 64^{0.8} \\approx 5 \\times 27.86 \\approx 139.3, \\qquad \\frac{139.3}{80} \\approx 1.74$$

The shortfall against $100\\%$ compounds rather than cancelling, since two doublings give $2^{1.6}\\approx3.03$ instead of $4$. Capacity rises by about $74\\%$, so the statement is True.`,
      `**C.** → False

The fleet at which a capacity ceiling binds is found by inverting the calibrated law, which means raising both sides to the reciprocal exponent $1.25$.

$$32^{0.8} = 2^{4} = 16 \\;\\Rightarrow\\; A = 5, \\qquad 5m^{0.8} = 500 \\;\\Rightarrow\\; m^{0.8} = 100$$

$$m = 100^{1.25} = 10^{2.5} \\approx 316.2$$

Test the fleet named in the claim:

$$C(250) = 5 \\times 250^{0.8} \\approx 5 \\times 82.4 \\approx 412 < 500$$

Rough proportion suggests a sixfold fleet for a sixfold capacity, while the sub-linear exponent demands a factor of $10^{1.25}\\approx17.8$. The ceiling binds near $316$ machines rather than $250$, so the statement is False.`,
      `**D.** → False

A fleet of $243$ machines is a fifth power, so the exponent $0.8=4/5$ resolves exactly and no rounding enters the level.

$$243^{0.8} = \\left(3^{5}\\right)^{4/5} = 3^{4} = 81$$

Apply the recovered coefficient:

$$C(243) = 5(81) = 405$$

The claimed $486$ is $6 \\times 81$, the figure a coefficient of $6$ would give, whereas the recorded fleet fixes the coefficient at $5$. Capacity is $405$ requests per second, so the statement is False.`,
      `**E.** → False

Capacity per machine is the calibrated law divided by $m$, which lowers the exponent to $0.8-1=-0.2$ and makes the quantity decreasing.

$$\\frac{C(64)/64}{C(32)/32}=2^{-0.2}\\approx0.87055$$

Convert the surviving fraction into a percentage cut:

$$(1-0.87055)\\times100\\%\\approx12.9\\%$$

A negative exponent reverses the direction of the change, and the size of the drop still comes from the full power rather than from the exponent read as a percentage. Capacity per machine falls by about $12.9\\%$, so the statement is False.`,
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

Break-even is the staffing level at which revenue and the wage bill coincide, so the condition is an equation between a square-root law and a linear one.

$$120\\sqrt{L} = 6L \\quad \\Rightarrow \\quad 120 = 6\\sqrt{L} \\quad \\Rightarrow \\quad \\sqrt{L} = 20$$

$$L = 400$$

Check both sides:

$$R(400) = 120(20) = 2400, \\qquad 6(400) = 2400$$

Dividing by $\\sqrt{L}$ discards the trivial root at $L=0$, where a workshop with no labour also breaks even, and keeps the meaningful one. The net gain is zero at $400$ hours, so the statement is True.`,
      `**B.** → True

The net gain at a staffing level is revenue there minus the wage bill there, both read straight off the two given laws.

$$R(100) = 120\\sqrt{100} = 120(10) = 1200, \\qquad 6(100) = 600$$

$$1200 - 600 = 600$$

This level is worth holding on to for part D, since it turns out to be the best the workshop can do rather than merely a point inside the profitable range. The net gain is $600$, so the statement is True.`,
      `**C.** → True

Beyond break-even the wage bill grows in proportion to hours while revenue grows only as a square root, so the two laws have to be evaluated separately at the staffing level in question.

$$R(900) = 120\\sqrt{900} = 120(30) = 3600, \\qquad 6(900) = 5400$$

$$3600 - 5400 = -1800$$

The gap widens with every further hour rather than stabilising, because the exponent mismatch never reverses. The net gain at $900$ hours is $-1800$, so the statement is True.`,
      `**D.** → False

Whether the net gain rises across a range is a question about its shape rather than its sign, so it has to be sampled at several staffing levels inside the range.

$$\\Pi(100) = 1200 - 600 = 600$$

$$\\Pi(225) = 120(15) - 1350 = 1800 - 1350 = 450$$

$$\\Pi(324) = 120(18) - 1944 = 2160 - 1944 = 216$$

The net gain does stay positive on the whole range, which is weaker than rising, and it turns over where revenue per hour falls to the wage of $6$. It drops from $600$ to $216$ while still inside the range, so the statement is False.`,
      `**E.** → False

Revenue per hour of labour is revenue divided by $L$, which lowers the exponent from $0.5$ to $-0.5$.

$$\\frac{R(L)}{L} = \\frac{120L^{0.5}}{L} = 120L^{-0.5}$$

Evaluate at three staffing levels:

$$\\frac{R(100)}{100} = 12, \\qquad \\frac{R(400)}{400} = 6, \\qquad \\frac{R(900)}{900} = 4$$

Constancy would require revenue proportional to hours, while this average starts above the wage of $6$, meets it at $400$ hours and drops below it thereafter. Revenue per hour falls from $12$ to $4$, so the statement is False.`,
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

Concentrating the order means sending all $60$ units to a single plant, so the cost is that plant's own quadratic law evaluated at the full order.

$$C_2(60) = 0.25(60)^{2} = 0.25(3600) = 900$$

The same corner at the other plant, for comparison:

$$C_1(60) = 0.5(3600) = 1800$$

Plant 2 is cheaper only in the sense of a smaller coefficient, which is not the same as being the wise place to put every unit. Concentrating in plant 2 costs $900$, so the statement is True.`,
      `**B.** → False

Ranking two splits means pricing each one through both quadratic laws and adding the two plant costs.

$$0.5(30)^{2} + 0.25(30)^{2} = 450 + 225 = 675$$

$$0.5(20)^{2} + 0.25(40)^{2} = 200 + 400 = 600$$

Symmetry would be right for identical plants, but plant 1's coefficient is twice plant 2's, so the cheaper plant should carry twice the load. The uneven split is cheaper by $75$, so the statement is False.`,
      `**C.** → False

Both cost laws carry exponent $2$, so the effect of doubling a plant's own output is the scale factor $2^{2}$.

$$\\frac{C_2(2q)}{C_2(q)} = 2^{2} = 4$$

Concrete outputs at plant 2:

$$C_2(20) = 100, \\qquad C_2(40) = 400$$

Proportional costs would send every unit to the plant with the smaller coefficient, whereas convexity is what makes running both worthwhile. Cost quadruples rather than doubling, so the statement is False.`,
      `**D.** → False

The split that sends $20$ units to plant 1 and $40$ to plant 2 is priced plant by plant, each through its own quadratic law.

$$C_1(20) = 0.5(400) = 200, \\qquad C_2(40) = 0.25(1600) = 400$$

$$200 + 400 = 600$$

Ranked against the alternatives already priced:

$$600 < 675 < 900$$

An error of $50$ here would blur that ranking, since it would make the even split at $675$ look almost as good as the best division. The split costs $600$, so the statement is False.`,
      `**E.** → False

Plant 2's cost per unit is its cost law divided by its own output, which lowers the exponent from $2$ to $1$.

$$\\frac{C_2(q)}{q} = \\frac{0.25q^{2}}{q} = 0.25q$$

Evaluate at three output levels:

$$\\frac{C_2(20)}{20} = 5, \\qquad \\frac{C_2(40)}{40} = 10, \\qquad \\frac{C_2(60)}{60} = 15$$

A constant unit cost would require exponent $1$ and would remove the trade-off that makes a split optimal. Unit cost triples across that range, so the statement is False.`,
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

Two measurements determine a power law because their ratio cancels the coefficient and leaves an equation in the exponent alone.

$$\\frac{A(16)^{r}}{A(4)^{r}} = \\frac{192}{24} \\quad \\Rightarrow \\quad \\left(\\frac{16}{4}\\right)^{r} = 8$$

Solve the resulting equation:

$$4^{r} = 8 \\quad \\Rightarrow \\quad 2^{2r} = 2^{3} \\quad \\Rightarrow \\quad r = 1.5$$

Both ratios here are whole numbers, $16/4=4$ and $192/24=8$, so the exponent resolves without logarithms. The exponent is exactly $1.5$, so the statement is True.`,
      `**B.** → True

With the exponent fixed, the coefficient follows from either measurement by dividing the response by its shape factor.

$$A(4)^{1.5} = 24 \\quad \\Rightarrow \\quad 8A = 24 \\quad \\Rightarrow \\quad A = 3$$

Confirm with the second measurement:

$$\\frac{192}{16^{1.5}} = \\frac{192}{64} = 3$$

$$y = 3x^{1.5}$$

A wrong exponent would give two different coefficients, so agreement between the measurements is a genuine check rather than a repetition. Both give $A=3$, so the statement is True.`,
      `**C.** → False

The measurement at $x=9$ was held out of the fit, which makes it a test of the model rather than part of its construction.

$$9^{1.5} = \\left(9^{1/2}\\right)^{3} = 3^{3} = 27$$

$$y = 3(27) = 81$$

Compare with the recorded value:

$$81 = 81$$

A two-point fit always passes through its own two points, so agreement at an independent third point is evidence rather than arithmetic. The measurement sits on the curve, so the statement is False.`,
      `**D.** → False

A prediction at $x=25$ uses the fitted law, and $25$ is a perfect square, so the shape factor resolves by taking the square root and then cubing.

$$25^{1.5} = \\left(25^{1/2}\\right)^{3} = 5^{3} = 125$$

Apply the coefficient:

$$y = 3(125) = 375$$

Reading the shape factor as $100$ rather than $125$ is what produces the claimed figure, and the exact route leaves no room for that. The prediction is $375$, so the statement is False.`,
      `**E.** → False

Uniqueness of the fit is settled by the ratio equation, since $4^{r}$ is strictly increasing in $r$ and can equal $8$ only once.

$$\\left(\\frac{16}{4}\\right)^{2} = 16 \\ne 8$$

Force the coefficient from the first point and test the second:

$$A = \\frac{24}{16} = 1.5, \\qquad 1.5(16)^{2} = 384 \\ne 192$$

An exponent of $2$ would demand a response ratio of $16$ where $8$ was observed, so no freedom remains once the ratio is fixed. The rejected exponent misses the second measurement by a factor of two, so the statement is False.`,
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

Inverse demand is the same curve with price as the subject, and inverting a power function replaces its exponent by the reciprocal and raises its coefficient to that same reciprocal power.

$$A(5)^{-2} = 100 \\quad \\Rightarrow \\quad \\frac{A}{25} = 100 \\quad \\Rightarrow \\quad A = 2500$$

$$q = \\frac{2500}{p^{2}} \\quad \\Rightarrow \\quad p^{2} = \\frac{2500}{q} \\quad \\Rightarrow \\quad p = \\frac{50}{\\sqrt{q}} = 50q^{-0.5}$$

Check the observed pair:

$$p(100) = \\frac{50}{10} = 5 \\;\\checkmark$$

Carrying the coefficient through unchanged, rather than as $2500^{1/2}$, would give a curve that misses every observed point. The inverse curve is $50q^{-0.5}$, so the statement is True.`,
      `**B.** → True

Revenue expressed through quantity is quantity times inverse demand, so the exponents add rather than being carried over unchanged.

$$p(q)=50q^{-0.5}$$

$$R(q)=qp(q)=q\\left(50q^{-0.5}\\right)=50q^{0.5}$$

Multiplying by $q$ raises the exponent by one, taking $-0.5$ to $0.5$ and turning a falling curve into a rising one. The revenue law is $50q^{0.5}$, so the statement is True.`,
      `**C.** → True

The percentage effect of a doubling comes from the scale factor of the revenue law, whose exponent is one half.

$$\\frac{R(2q)}{R(q)}=2^{0.5}=\\sqrt{2}\\approx1.414$$

$$(1.414-1)\\times100\\%\\approx41.4\\%$$

The exponent is not itself the percentage response, since a finite change is the full power minus one. Revenue rises by about $41.4\\%$, so the statement is True.`,
      `**D.** → False

Revenue at a stated quantity has to be built from the price that clears that quantity, which the inverse curve supplies.

$$p(25)=50(25)^{-0.5}=\\frac{50}{5}=10$$

$$R(25)=25p(25)=25(10)=250$$

Reusing the observed price of $5$ would price a different point on the curve, not this one. Revenue is $250$, so the statement is False.`,
      `**E.** → False

Price elasticity of demand measures the percentage response of quantity to price, so it is read from $q(p)$ and equals that curve's own exponent.

$$q(p) = 2500p^{-2} \\quad \\Rightarrow \\quad \\text{El}_{p}q = -2$$

Contrast with the inverse curve:

$$p(q) = 50q^{-0.5} \\quad \\Rightarrow \\quad \\text{El}_{q}p = -0.5 = \\frac{1}{-2}$$

Test with a one percent price rise:

$$1.01^{-2} \\approx 0.9803 \\quad \\Rightarrow \\quad \\text{about } -2\\%$$

The two numbers are reciprocals because inverting a power function inverts its exponent, and $-0.5$ belongs to the other direction. The elasticity is $-2$, so the statement is False.`,
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

The recorded $60$ units is a change in output between two labour levels, so the model has to be evaluated at both and differenced.

$$Y(100)-Y(25)=A\\sqrt{100}-A\\sqrt{25}=60$$

$$A(10-5)=60 \\quad \\Rightarrow \\quad A=12, \\qquad Y(L)=12\\sqrt{L}$$

Substituting only $L=100$ would convert a difference observation into a level observation and return a coefficient of $6$. The recovered technology is $Y(L)=12\\sqrt{L}$, so the statement is True.`,
      `**B.** → True

The comparison is between a square-root output law and a linear benchmark evaluated at the same labour input.

$$Y(64)=12\\sqrt{64}=12(8)=96$$

$$W(64)=0.75(64)=48, \\qquad Y(64)-W(64)=96-48=48$$

Comparing the coefficients $12$ and $0.75$ alone would ignore that one law grows with $\\sqrt{L}$ and the other with $L$. Output exceeds the benchmark by $48$ units at $64$ hours, so the statement is True.`,
      `**C.** → True

Average product is output divided by labour, so its exponent is $0.5-1=-0.5$ and the derived law has to be built before any level is read off.

$$\\operatorname{AP}(L)=\\frac{Y(L)}{L} =\\frac{12L^{0.5}}{L}=12L^{-0.5}$$

$$\\operatorname{AP}(225)=\\frac{12}{\\sqrt{225}} =\\frac{12}{15}=0.8$$

Total output at that labour level is $180$, a different quantity that still has to be divided by the hours. Average product is $0.8$ unit per labour hour, so the statement is True.`,
      `**D.** → True

Running the technology backwards means solving the output law for labour, and a square-root law inverts by squaring.

$$12\\sqrt L=180 \\quad \\Rightarrow \\quad \\sqrt L=15$$

$$L=15^2=225, \\qquad Y(225)=12(15)=180$$

Scaling labour in the same proportion as output would ignore that the inverse exponent is $2$ rather than $1$. The inversion and the direct check both give $225$ labour hours, so the statement is True.`,
      `**E.** → True

Output carries exponent $0.5$ while average product carries $-0.5$, so one labour multiplier acts on the two quantities in opposite directions.

$$\\frac{Y(2.25L)}{Y(L)}=(2.25)^{0.5}=1.5$$

$$\\frac{\\operatorname{AP}(2.25L)}{\\operatorname{AP}(L)} =(2.25)^{-0.5}=\\frac{1}{1.5}=\\frac{2}{3}$$

Rising total output does not carry average product with it, because dividing by labour flips the sign of the exponent. Both multipliers in the claim are exact, so the statement is True.`,
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

Profit mixes $\\sqrt{q}$ with $q$ and a constant, so the substitution $s=\\sqrt{q}$ turns the break-even condition into a quadratic.

$$60s - 2s^{2} - 400 = 0 \\quad \\Rightarrow \\quad s^{2} - 30s + 200 = 0$$

$$(s-10)(s-20) = 0 \\quad \\Rightarrow \\quad s = 10 \\text{ or } s = 20$$

Square back to output:

$$q = 100 \\quad \\text{or} \\quad q = 400$$

Check one of them:

$$\\Pi(400) = 60(20) - 800 - 400 = 0 \\;\\checkmark$$

Two roots rather than one is what a fixed charge produces, since output must be large enough to cover it yet small enough that linear variable cost has not overtaken square-root revenue. Both break-even points are as claimed, so the statement is True.`,
      `**B.** → False

Profit at a stated output is revenue minus variable cost minus the fixed charge, each evaluated at that output.

$$R(25) = 60(5) = 300, \\qquad 2(25) = 50, \\qquad \\text{fixed } 400$$

$$\\Pi(25) = 300 - 50 - 400 = -150$$

Small outputs are where the fixed charge weighs most heavily against square-root revenue, which is why profit turns positive only past $100$ units. Profit is negative at $25$ units, so the statement is False.`,
      `**C.** → False

An output of $500$ units lies beyond the upper break-even point, so revenue and cost have to be compared there rather than assumed.

$$R(500) = 60\\sqrt{500} \\approx 60 \\times 22.3607 \\approx 1341.6$$

$$2(500) + 400 = 1400$$

$$\\Pi(500) \\approx 1341.6 - 1400 \\approx -58.4$$

The margin is thin enough to need the arithmetic, since $500$ is only a quarter above the output where profit was exactly zero. Profit is about $-58$, so the statement is False.`,
      `**D.** → False

Whether profit rises on the profitable range is a question about shape, and in the variable $s=\\sqrt{q}$ profit is $-2(s-10)(s-20)$, an inverted parabola.

$$\\Pi(144) = 60(12) - 288 - 400 = 32$$

$$\\Pi(225) = 60(15) - 450 - 400 = 50$$

$$\\Pi(324) = 60(18) - 648 - 400 = 32$$

Positive throughout an interval is weaker than rising throughout it, and the peak at $s=15$, that is $q=225$, sits inside the interval. Profit climbs to $50$ and falls back, so the statement is False.`,
      `**E.** → False

Proportionality would require revenue's exponent to be $1$, whereas that exponent is $0.5$ and only the variable cost is genuinely proportional.

$$\\frac{R(2q)}{R(q)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{2(2q)}{2q} = 2$$

Check with levels:

$$R(100) = 600, \\qquad R(200) \\approx 848.5, \\qquad R(400) = 1200$$

That mismatch is what creates the upper break-even point, since proportional revenue would settle the comparison once and for all by coefficients. Quadrupling output only doubles revenue, so the statement is False.`,
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

Benefit and cost are equal where the two curves meet, and since both carry a factor $x^{0.5}$ on a strictly positive domain, that shared power can be cancelled.

$$40x^{0.5} = 0.5x^{1.5} \\quad \\Rightarrow \\quad 40 = 0.5x^{1}$$

$$x = 80$$

Confirm the shared value:

$$B(80) = 40\\sqrt{80} \\approx 357.8, \\qquad C(80) = 0.5(80)^{1.5} \\approx 357.8$$

The exponents differ by exactly $1$, which is why what remains is linear in $x$ rather than another power equation. Both sides are about $357.8$ million at scale $80$, so the statement is True.`,
      `**B.** → True

The ordering of two power functions across a whole range is carried by their ratio, which here is itself a power function.

$$\\frac{C(x)}{B(x)} = \\frac{0.5x^{1.5}}{40x^{0.5}} = \\frac{x}{80}$$

Read off the comparison:

$$\\frac{x}{80} > 1 \\quad \\Longleftrightarrow \\quad x > 80$$

Test a larger programme:

$$B(100) = 400, \\qquad C(100) = 0.5(1000) = 500$$

A single test value could not settle a whole range, while a strictly increasing ratio passes through $1$ once and never returns. Cost exceeds benefit beyond the crossing, so the statement is True.`,
      `**C.** → False

The largest net benefit is a question about the difference $B-C$ rather than about where the two curves meet, so that difference has to be sampled across scales.

$$N(16) = 160 - 32 = 128$$

$$N(27) = 40(5.196) - 0.5(140.3) \\approx 207.8 - 70.1 \\approx 137.7$$

$$N(40) \\approx 252.98 - 126.49 \\approx 126.5$$

Compare with the crossing:

$$N(80) = 0$$

Break-even is where the surplus has been fully eroded, not where it is largest. The net benefit peaks near $x=27$ and is zero at $x=80$, so the statement is False.`,
      `**D.** → False

Doubling acts on each curve through its own exponent, so the two scale factors are $2^{0.5}$ and $2^{1.5}$ rather than a common factor of $2$.

$$\\frac{B(2x)}{B(x)} = 2^{0.5} \\approx 1.4142, \\qquad \\frac{C(2x)}{C(x)} = 2^{1.5} \\approx 2.8284$$

Check between two scales:

$$B(40) \\approx 253.0, \\quad B(80) \\approx 357.8; \\qquad C(40) \\approx 126.5, \\quad C(80) \\approx 357.8$$

Cost grows twice as fast as benefit in proportional terms, which is what guarantees the surplus is exhausted at some finite scale. Neither curve doubles, so the statement is False.`,
      `**E.** → False

At small scales a square root rises steeply from zero while $x^{1.5}$ starts almost flat, so the two curves have to be evaluated rather than ordered by habit.

$$B(16) = 40\\sqrt{16} = 40(4) = 160$$

$$C(16) = 0.5(16)^{1.5} = 0.5(64) = 32$$

Compare through the ratio:

$$\\frac{C(16)}{B(16)} = \\frac{32}{160} = 0.2 = \\frac{16}{80}$$

The ordering that holds beyond the crossing does not extend backwards through it. Benefit is five times cost at that scale, so the statement is False.`,
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

**4.** Scale factors explain why the surplus must vanish. Doubling the scale multiplies the benefit by:

$$2^{0.5} \\approx 1.414$$

The same doubling multiplies the cost by:

$$2^{1.5} \\approx 2.828$$

Cost grows twice as fast as benefit under every doubling, so any surplus held at a small scale is eaten as the programme expands.

**5.** The best scale sits near $x\\approx27$, far below break-even. The crossing at $x = 80$ marks the end of the worthwhile range, not its optimum.

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

Two logged runs fix the exponent through their ratio, which cancels the coefficient and leaves a pure power equation.

$$\\left(\\frac{27}{8}\\right)^{r} = \\frac{45}{20} = 2.25$$

Write both sides as powers of $3/2$:

$$\\left(\\left(\\tfrac{3}{2}\\right)^{3}\\right)^{r} = \\left(\\tfrac{3}{2}\\right)^{2} \\quad \\Rightarrow \\quad 3r = 2 \\quad \\Rightarrow \\quad r = \\frac{2}{3}$$

Check with logarithms:

$$r = \\frac{\\ln 2.25}{\\ln 3.375} = \\frac{0.8109}{1.2164} \\approx 0.6667$$

Matching exponents is exact where the logarithmic route only approximates, and both feed sizes cooperate because $27/8$ is a perfect cube ratio. The exponent is $2/3$, so the statement is True.`,
      `**B.** → True

With the exponent known, the coefficient is a logged throughput divided by its shape factor, and each cube resolves exactly.

$$8^{2/3} = \\left(8^{1/3}\\right)^{2} = 2^{2} = 4, \\qquad 4A = 20 \\;\\Rightarrow\\; A = 5$$

Confirm with the second run:

$$27^{2/3} = 3^{2} = 9, \\qquad \\frac{45}{9} = 5$$

$$T(g) = 5g^{2/3}$$

Two runs returning the same coefficient is a check on the exponent as well, since a wrong exponent would split them. The coefficient is $5$, so the statement is True.`,
      `**C.** → True

A licensed ceiling on throughput is inverted into a gas feed by raising both sides to the reciprocal exponent $3/2$.

$$5g^{2/3} = 80 \\quad \\Rightarrow \\quad g^{2/3} = 16$$

$$g = 16^{3/2} = \\left(16^{1/2}\\right)^{3} = 4^{3} = 64$$

Confirm by substitution:

$$T(64) = 5 \\times 64^{2/3} = 5(16) = 80$$

Estimating the feed by proportion would badly understate it, since throughput rises fourfold while the feed rises eightfold. The ceiling binds at a feed of $64$, so the statement is True.`,
      `**D.** → False

Doubling the feed acts through the exponent $2/3$, so the throughput multiplier is a power of two rather than two itself.

$$\\frac{T(2g)}{T(g)} = 2^{2/3} \\approx 1.5874$$

Find the feed multiple that really doubles throughput:

$$k^{2/3} = 2 \\quad \\Rightarrow \\quad k = 2^{3/2} \\approx 2.83$$

Check with logged values:

$$T(8) = 20, \\qquad T(16) = 5 \\times 16^{2/3} \\approx 5 \\times 6.35 \\approx 31.7$$

An exponent below one always means the input grows faster than the output, here by nearly three times the gas for a doubling. Throughput rises by about $59\\%$, so the statement is False.`,
      `**E.** → False

Throughput per cubic metre is the calibrated law divided by the feed, which lowers the exponent to $2/3-1=-1/3$.

$$\\frac{T(g)}{g} = \\frac{5g^{2/3}}{g} = 5g^{-1/3}$$

Evaluate at the three feeds in play:

$$\\frac{20}{8} = 2.5, \\qquad \\frac{45}{27} \\approx 1.67, \\qquad \\frac{80}{64} = 1.25$$

Total throughput and gas efficiency move in opposite directions once the exponent falls below one, so the licensed maximum is the least efficient operating point. Efficiency halves across that range, so the statement is False.`,
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

**4.** Scale factors show the sub-proportional response. Doubling the gas feed multiplies throughput by:

$$2^{2/3} \\approx 1.587$$

That is a gain of about $59\\%$, well short of a doubling. Read the other way, doubling the throughput calls for a gas factor of:

$$2^{3/2} \\approx 2.83$$

So extra output has to be bought with almost three times the feed.

**5.** Gas efficiency declines with the feed, so the licensed maximum is also the least efficient operating point. Throughput per unit of gas is:

$$\\frac{T(g)}{g} = 5g^{-1/3}$$

At feeds of $8$, $27$ and $64$ that ratio reads:

$$2.5,\\; 1.67,\\; 1.25$$

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

The tapered geometry fixes the exponent at $2$, so a single survey reading is enough to determine the coefficient.

$$4^{2} = 16, \\qquad 16A = 48 \\quad \\Rightarrow \\quad A = 3$$

$$V(d) = 3d^{2}$$

Check the survey:

$$V(4) = 3(16) = 48 \\;\\checkmark$$

Vertical walls would store volume proportional to depth, while sloping walls widen the surface as the water rises and load that geometry into the coefficient. The coefficient is $3$, so the statement is True.`,
      `**B.** → True

Extrapolating the calibrated law to a deeper fill squares the depth, either directly or through the ratio against the survey.

$$V(10) = 3(10)^{2} = 3(100) = 300$$

Confirm with the scale factor from the survey:

$$\\left(\\frac{10}{4}\\right)^{2} = 6.25, \\qquad 48 \\times 6.25 = 300$$

Depth rises by a factor of $2.5$ while stored volume rises by $6.25$, since it is the ratio that gets squared rather than the difference. The basin holds $300$ cubic metres, so the statement is True.`,
      `**C.** → True

Equal depth intervals need not add equal volumes under a squared law, so each increment has to be computed from the calibrated model.

$$V(9)-V(7)=3(9^2-7^2)=3(32)=96$$

$$\\frac{V(9)-V(7)}{V(7)-V(5)}=\\frac{96}{3(49-25)}=\\frac{96}{72}=\\frac{4}{3}$$

The exponent governs the ratio of increments rather than a constant addition per metre. The later two-metre rise adds exactly four thirds as much volume, so the statement is True.`,
      `**D.** → True

Inverting a squared law means taking a square root, so a target volume converts into a depth once the coefficient is divided out.

$$3d^{2} = 675 \\quad \\Rightarrow \\quad d^{2} = 225 \\quad \\Rightarrow \\quad d = 15$$

Confirm by substitution:

$$V(15) = 3(225) = 675 \\;\\checkmark$$

Square roots compress large differences, so a target more than fourteen times the surveyed volume needs a depth only $3.75$ times as great. The depth is $15$ metres, so the statement is True.`,
      `**E.** → True

Stored volume per metre of depth is the storage law divided by $d$, which lowers the exponent from $2$ to $1$.

$$\\frac{V(d)}{d} = \\frac{3d^{2}}{d} = 3d$$

Evaluate at three depths:

$$\\frac{V(4)}{4} = 12, \\qquad \\frac{V(10)}{10} = 30, \\qquad \\frac{V(15)}{15} = 45$$

Dividing by the input lowers the exponent without turning the quantity around while it stays positive, which is the arithmetic counterpart of the taper. Volume per metre rises steadily, so the statement is True.`,
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

**5.** Equation (2) has exponent $1$, so each extra metre of depth stores more than the last. Volume per metre of depth reads:

$$12,\\; 30,\\; 45$$

Those three figures are cubic metres per metre, taken at depths of $4$, $10$ and $15$ metres. They climb in direct proportion to the depth, which is what an exponent of $1$ means.

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

The report records a change in the index between two test speeds, so the coefficient multiplies the difference of the two shape factors.

$$40^{2} = 1600, \\qquad 60^{2} = 3600$$

Translate the recorded rise:

$$A(3600 - 1600) = 100 \\quad \\Rightarrow \\quad 2000A = 100 \\quad \\Rightarrow \\quad A = 0.05$$

$$E(v) = 0.05v^{2}$$

Dividing $100$ by either speed squared alone would treat a difference as a level and return a coefficient several times too small. The coefficient is $0.05$, so the statement is True.`,
      `**B.** → True

A level at the upper test speed is the calibrated law evaluated there, with the shape factor already in hand.

$$E(60) = 0.05(3600) = 180$$

Evaluate at the lower speed and difference them:

$$E(40) = 0.05(1600) = 80, \\qquad 180 - 80 = 100 \\;\\checkmark$$

Reproducing the recorded $100$-point rise is the test any candidate coefficient must pass. The index reads $180$ at $60$ km/h, so the statement is True.`,
      `**C.** → True

A percentage change under a square law comes from squaring the speed ratio, here $90/72=1.25$, and subtracting one.

$$\\frac{E(90)}{E(72)}=\\left(\\frac{90}{72}\\right)^2=1.25^2=1.5625$$

$$(1.5625-1)\\times100\\%=56.25\\%$$

The exponent scales the ratio multiplicatively rather than adding a percentage of its own. The index rises by exactly $56.25\\%$, so the statement is True.`,
      `**D.** → True

Motorway speed is another level of the calibrated index, and the same equation read backwards recovers the speed from a reading.

$$E(100) = 0.05(100)^{2} = 0.05(10000) = 500$$

Confirm by inversion:

$$0.05v^{2} = 500 \\;\\Rightarrow\\; v^{2} = 10000 \\;\\Rightarrow\\; v = 100$$

Speed enters squared, so $2.5$ times the lower test speed produces $6.25$ times the braking energy rather than $2.5$ times. The index reaches $500$ at $100$ km/h, so the statement is True.`,
      `**E.** → True

Converting an index reading back into a speed inverts the calibrated square law, dividing by the coefficient and then taking a square root.

$$0.05v^2=320 \\quad \\Rightarrow \\quad v^2=6400$$

$$v=\\sqrt{6400}=80$$

Only the positive root is admissible, since speed is positive throughout this model. The reading of $320$ corresponds to $80$ km/h, so the statement is True.`,
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

Steel and capacity are separate laws sharing one variable, so a capacity target has to be inverted into a height before the steel law can be applied.

$$\\frac{h^3}{3}=192 \\quad \\Rightarrow \\quad h=\\sqrt[3]{576}\\approx8.32$$

$$S(h)=3h^2\\approx3(8.32)^2\\approx207.7$$

Going straight from capacity to steel by proportion would skip the change of exponent from $3$ to $2$. The target silo needs about $208$ square metres of steel, so the statement is True.`,
      `**B.** → True

A steel threshold is a condition on the surface law, and the inequality survives the square root because height is positive.

$$3h^2>200 \\quad \\Rightarrow \\quad h^2>\\frac{200}{3}$$

$$h>\\sqrt{\\frac{200}{3}}\\approx8.165$$

A positive exponent preserves the direction of the inequality rather than reversing it. Steel use exceeds $200$ square metres beyond about $8.16$ metres, so the statement is True.`,
      `**C.** → True

A fifty percent height increase is a multiplier of $1.5$ acting through the surface exponent of $2$.

$$\\frac{S(1.5h)}{S(h)}=1.5^2=2.25$$

$$(2.25-1)\\times100\\%=125\\%$$

The percentage rise is the squared multiplier minus one, not the height increase carried over unchanged. Steel use rises by exactly $125\\%$, so the statement is True.`,
      `**D.** → True

Steel per cubic metre of capacity is the ratio of the two calibrated laws, whose exponents differ by exactly one.

$$\\frac{S(h)}{V(h)} = \\frac{3h^{2}}{h^{3}/3} = \\frac{9h^{2}}{h^{3}} = \\frac{9}{h}$$

Evaluate at three heights:

$$\\frac{9}{6} = 1.5, \\qquad \\frac{9}{9} = 1, \\qquad \\frac{9}{12} = 0.75$$

The result depends only on the exponents $2$ and $3$, not on the particular coefficients, which is why large tanks are always cheaper per unit stored. Steel per cubic metre halves between six and twelve metres, so the statement is True.`,
      `**E.** → False

The steel law has exponent $2$, so a height multiplier enters squared.

$$\\frac{S(2h)}{S(h)} = 2^{2} = 4$$

Check with concrete silos:

$$S(6) = 108, \\qquad S(12) = 3(144) = 432, \\qquad \\frac{432}{108} = 4$$

Doubling would require exponent $1$, which no surface law has, and would also break the square-cube comparison of the previous part. Steel quadruples, so the statement is False.`,
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

The added $60$ hours is the difference between two inspection times, so both square-root factors enter the calibration.

$$T(225)-T(25)=A(\\sqrt{225}-\\sqrt{25})=60$$

$$A(15-5)=60 \\quad \\Rightarrow \\quad A=6, \\qquad T(n)=6\\sqrt n$$

Attaching the $60$ hours to the larger consignment alone would ignore the time already required at $25$ shipments. The difference calibration gives $T(n)=6\\sqrt{n}$, so the statement is True.`,
      `**B.** → True

An hours ceiling becomes a shipment ceiling by inverting an increasing law, so the boundary is where the available hours are exactly used.

$$6\\sqrt n\\le90 \\quad \\Rightarrow \\quad \\sqrt n\\le15$$

$$n\\le15^2=225, \\qquad T(225)=6(15)=90$$

The intermediate $15$ is $\\sqrt{n}$ rather than $n$, so the squaring step cannot be skipped. The ceiling covers at most $225$ shipments and the boundary is attainable, so the statement is True.`,
      `**C.** → True

For a square-root law a consignment multiplier $k$ acts on total time as $\\sqrt{k}$, and both the coefficient and the starting size cancel.

$$\\frac{T(2.25n)}{T(n)} =\\frac{6(2.25n)^{0.5}}{6n^{0.5}} =(2.25)^{0.5}$$

$$(2.25)^{0.5}=\\sqrt{\\frac94}=\\frac32=1.5$$

Using $2.25$ itself as the time multiplier would impose exponent $1$ in place of the stated $0.5$. The inspection-time multiplier is exactly $1.5$, so the statement is True.`,
      `**D.** → True

Time per shipment is total time divided by the shipment count, which lowers the exponent to $-0.5$.

$$\\frac{T(n)}{n}=\\frac{6n^{0.5}}{n}=6n^{-0.5}$$

$$\\frac{T(144)}{144} =\\frac{6}{\\sqrt{144}} =\\frac{6}{12}=0.5$$

The total of $72$ hours is a different quantity from the average, and the square-root factor has to be retained when dividing. Time per shipment is exactly $0.5$ hour at $144$ shipments, so the statement is True.`,
      `**E.** → False

Proportionality requires exponent $1$ and therefore a constant time per shipment, which is stronger than the two quantities merely rising together.

$$\\frac{T(kn)}{T(n)}=k^{0.5}\\ne k \\quad \\text{for } k\\ne1$$

$$\\frac{T(225)}{225}=\\frac{90}{225}=0.4, \\qquad \\frac{T(25)}{25}=\\frac{30}{25}=1.2$$

Total time and shipment count do move together, but not in a constant ratio. The per-shipment rate is not constant, so the statement is False.`,
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

The inverse-square form fixes the exponent at $-2$, so the meter reading at two metres is all that is needed to pin the coefficient.

$$A(2)^{-2} = 300 \\quad \\Rightarrow \\quad \\frac{A}{4} = 300 \\quad \\Rightarrow \\quad A = 1200$$

$$I(d) = \\frac{1200}{d^{2}}$$

Evaluate at four metres:

$$I(4) = \\frac{1200}{16} = 75$$

A negative exponent divides by the shape factor rather than multiplying by it, which is why the reading falls with distance. The illuminance is $75$ lux, so the statement is True.`,
      `**B.** → True

A scale factor depends only on the exponent, so doubling the distance acts through $2^{-2}$ wherever along the gallery it happens.

$$\\frac{I(2d)}{I(d)} = \\frac{A(2d)^{-2}}{Ad^{-2}} = 2^{-2} = \\frac{1}{4}$$

Check two separate doublings:

$$I(2) = 300, \\; I(4) = 75; \\qquad I(5) = 48, \\; I(10) = 12$$

The first pair is one instance of the rule and the second shows it is not tied to the metered distance. Both fall to a quarter, so the statement is True.`,
      `**C.** → True

A reading expressed as a fraction of the two-metre value is a ratio, so the coefficient cancels and only the distance multiplier matters.

$$\\frac{I(d)}{I(2)}=\\left(\\frac{d}{2}\\right)^{-2}=\\frac{1}{9}$$

$$\\left(\\frac{d}{2}\\right)^2=9 \\quad \\Rightarrow \\quad d=6$$

The negative exponent inverts the ratio, so a ninth of the light corresponds to three times the distance rather than a ninth of it. At six metres the reading is exactly one ninth of the two-metre value, so the statement is True.`,
      `**D.** → True

Moving closer is the same rule with a multiplier below one, and a negative exponent inverts before squaring.

$$\\frac{I(d/2)}{I(d)} = \\left(\\frac{1}{2}\\right)^{-2} = 4$$

Check on the metered distance:

$$I(2) = 300, \\qquad I(1) = \\frac{1200}{1} = 1200$$

Reading the multiplier as $1/4$ would apply the rule in the wrong direction, whereas approaching gains exactly what retreating loses. Illuminance quadruples, so the statement is True.`,
      `**E.** → True

The direction of a power law is settled by the sign of its exponent together with the sign of its coefficient.

$$I(d) = 1200\\,d^{-2}, \\qquad A > 0, \\quad r = -2 < 0$$

Trace the readings down the gallery:

$$I(1) = 1200, \\quad I(2) = 300, \\quad I(4) = 75, \\quad I(10) = 12$$

The decline is also decelerating, so most of the light is lost in the first few metres rather than spread evenly along the gallery. Illuminance falls monotonically with distance, so the statement is True.`,
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

Since $0.75=3/4$ and both engagement sizes are fourth powers, the shape factors resolve exactly, and the recorded rise is a difference of two bills.

$$C(81)-C(16)=A(27-8)=1900$$

$$19A=1900 \\quad \\Rightarrow \\quad A=100, \\qquad C(n)=100n^{0.75}$$

Setting $A \\cdot 81^{0.75}=1900$ would treat a jump between two bills as a single bill. The recovered schedule is $C(n)=100n^{0.75}$, so the statement is True.`,
      `**B.** → True

A spending cap becomes an account ceiling because the schedule is increasing, and inverting it means raising both sides to the power $4/3$.

$$100n^{3/4}\\le2700 \\quad \\Rightarrow \\quad n^{3/4}\\le27$$

$$n\\le27^{4/3}=(\\sqrt[3]{27})^4=3^4=81$$

Stopping at $27$ would report the value of $n^{3/4}$ rather than the account count itself. The endpoint costs exactly $2700$ and the cap therefore covers at most $81$ accounts, so the statement is True.`,
      `**C.** → True

A tie with a linear rival is an equation between exponents $3/4$ and $1$, and dividing by $50n^{3/4}$ on the positive domain leaves a power of $n^{1/4}$.

$$100n^{3/4}=50n \\quad \\Rightarrow \\quad 2=n^{1/4} \\quad \\Rightarrow \\quad n=16$$

$$\\frac{C(n)}{R(n)} =\\frac{100n^{3/4}}{50n} =2n^{-1/4}<1 \\quad \\text{when } n>16$$

Comparing the coefficients $100$ and $50$ alone would ignore that the rival carries the larger exponent. The firms tie at $16$ accounts and the practice is cheaper beyond, so the statement is True.`,
      `**D.** → True

Inverting the schedule for a target bill uses the reciprocal exponent $4/3$, and the intermediate value is a perfect cube.

$$100n^{3/4}=12500 \\quad \\Rightarrow \\quad n^{3/4}=125=5^3$$

$$n=125^{4/3}=(5^3)^{4/3}=5^4=625$$

Applying $3/4$ again in place of its reciprocal would run the schedule forwards rather than backwards. A direct check gives $100(625^{3/4})=100(125)=12500$, so the statement is True.`,
      `**E.** → False

Doubling the accounts acts through the exponent as $2^{3/4}$, a multiplicative scaling rather than an added percentage.

$$\\frac{C(2n)}{C(n)}=2^{3/4}\\approx1.6818$$

$$\\frac{C(2n)-C(n)}{C(n)} =2^{3/4}-1 \\approx0.6818=68.18\\%$$

Reading the exponent $0.75$ as the percentage response confuses a power with a proportion. Doubling raises the bill by about $68\\%$ rather than exactly $75\\%$, so the statement is False.`,
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

The monitors record a gap between two concentrations, so the coefficient multiplies the difference of two shape factors with exponent $-3/2$.

$$c(4)-c(16) =A\\left(4^{-3/2}-16^{-3/2}\\right) =A\\left(\\frac18-\\frac1{64}\\right)$$

$$A\\frac7{64}=43.75=\\frac{175}{4} \\quad \\Rightarrow \\quad A=400$$

Treating $43.75$ as either monitor's own reading would calibrate the law to a level it never recorded. The concentration law is $c(x)=400x^{-1.5}$, so the statement is True.`,
      `**B.** → True

Because the exponent is negative and the coefficient positive, concentration falls with distance, so a boundary distance separates the two sides of the ceiling.

$$400x^{-3/2}=6.25 \\quad \\Rightarrow \\quad x^{3/2}=\\frac{400}{6.25}=64$$

$$x=64^{2/3}=(\\sqrt[3]{64})^2=4^2=16, \\qquad c(x)\\le6.25 \\Longleftrightarrow x\\ge16$$

A decreasing function flips the direction of the inequality when it is carried from concentrations over to distances. Both the threshold and the direction match the claim, so the statement is True.`,
      `**C.** → True

Halving the distance is a multiplier of $1/2$ raised to the exponent $-1.5$, which inverts it and then applies the three-halves power.

$$\\frac{c(x/2)}{c(x)} =\\left(\\frac12\\right)^{-1.5} =2^{1.5}$$

$$2^{1.5}=2^{3/2}=\\sqrt{2^3}=2\\sqrt2\\approx2.828$$

A mere doubling would correspond to exponent $-1$, one half step away from the law in force here. Halving distance multiplies concentration by exactly $2\\sqrt{2}$, so the statement is True.`,
      `**D.** → True

A level at $100$ metres needs the shape factor $100^{1.5}$, which resolves by taking the square root first and then cubing.

$$100^{1.5}=100^{3/2}=(\\sqrt{100})^3=10^3=1000$$

$$c(100)=400(100)^{-1.5} =\\frac{400}{1000}=0.4$$

The exponent $1.5$ is a power rather than a multiple, so it gives $1000$ and not $150$, and the negative sign puts it in the denominator. Concentration is $0.4$ microgram per cubic metre, so the statement is True.`,
      `**E.** → False

The effect of doubling the distance is the surviving fraction $2^{-1.5}$, and the percentage cut is one minus that fraction.

$$\\frac{c(2x)}{c(x)} =2^{-1.5} =\\frac{1}{2\\sqrt2} \\approx0.3536$$

$$1-0.3536=0.6464\\approx64.6\\%$$

An exact halving would require exponent $-1$, and the surviving $35.4\\%$ is not itself the reduction. Doubling distance cuts concentration by about $64.6\\%$, so the statement is False.`,
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

Composing two power laws substitutes the inner law into the outer one, which multiplies the exponents and raises the inner coefficient to the outer power.

$$L(w) = 32\\left(0.5w^{0.5}\\right)^{3} = 32 \\times 0.5^{3} \\times w^{0.5 \\times 3}$$

Simplify the constant and the exponent:

$$32 \\times 0.125 = 4, \\qquad 0.5 \\times 3 = 1.5$$

$$L(w) = 4w^{1.5}$$

Cubing only the variable part and carrying $0.5$ through unchanged would leave the loss index eight times too large. The composed law is $4w^{1.5}$, so the statement is True.`,
      `**B.** → True

A doubling of wind speed acts through the composed exponent $1.5$, which is the product of the two stage exponents.

$$\\frac{L(2w)}{L(w)} = 2^{1.5} = 2\\sqrt{2} \\approx 2.8284$$

Verify through the two stages:

$$s \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{3} \\approx 2.828$$

Either stage exponent taken alone would give a different factor, and agreement between the two routes guards against composing incorrectly. Losses multiply by about $2.83$, so the statement is True.`,
      `**C.** → True

A stated loss level is inverted through the composed law, so the reciprocal exponent $2/3$ applies once the coefficient is divided out.

$$4w^{1.5}=1000 \\quad \\Rightarrow \\quad w^{1.5}=250$$

$$w=250^{2/3}\\approx39.69$$

Inverting one stage at a time works too, but only the composed exponent can be reciprocated in a single step. The index reaches $1000$ at a wind speed of about $39.7$, so the statement is True.`,
      `**D.** → True

A level under the composed law keeps the square-root contribution before the cube is applied, which is what the exponent $1.5$ encodes.

$$L(64)=4(64)^{1.5}=4(64)(8)$$

$$L(64)=2048$$

Applying the cube to the wind speed itself, rather than to the surge it produces, would overstate the index badly. The loss index at wind speed $64$ is $2048$, so the statement is True.`,
      `**E.** → True

A fifty percent increase is a multiplier of $1.5$ acting through the composed exponent, which is also $1.5$.

$$\\frac{L(1.5w)}{L(w)}=1.5^{1.5}\\approx1.8371$$

$$(1.8371-1)\\times100\\%\\approx83.7\\%$$

Neither stage exponent in isolation gives this factor, only their product. The loss index rises by about $83.7\\%$, so the statement is True.`,
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

**2.** The composed scale factor for a doubling of the wind speed:

$$2^{1.5} \\approx 2.83$$

Working stage by stage gives the same number. Surge rises by the square root factor, and the loss stage cubes it:

$$\\left(2^{0.5}\\right)^{3} \\approx 1.414^{3} \\approx 2.83$$

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

The six basis points is a change in impact between two order sizes, so the coefficient multiplies the difference of the two square roots.

$$I(0.09)-I(0.04) =A(\\sqrt{0.09}-\\sqrt{0.04}) =A(0.3-0.2)$$

$$0.1A=6 \\quad \\Rightarrow \\quad A=60, \\qquad I(v)=60\\sqrt v$$

Setting $I(0.09)=6$ would treat the increment as the larger order's total impact. The difference calibration gives $I(v)=60\\sqrt{v}$, so the statement is True.`,
      `**B.** → True

A size multiplier acts on impact through the exponent $0.5$, so the impact ratio is the square root of the size ratio.

$$\\frac{0.09}{0.04}=2.25$$

$$\\frac{I(0.09)}{I(0.04)} =\\left(\\frac{0.09}{0.04}\\right)^{0.5} =\\sqrt{2.25}=1.5$$

Carrying the size ratio $2.25$ across unchanged would describe linear impact rather than square-root impact. The levels are $18$ and $12$ basis points and their ratio is $1.5$, so the statement is True.`,
      `**C.** → True

The scaled impact charge is $vI(v)=60v^{3/2}$, so a break-even with a linear fee is an equation between exponents $3/2$ and $1$.

$$60v^{3/2}=30v \\quad \\Rightarrow \\quad 2\\sqrt v=1 \\quad \\Rightarrow \\quad v=0.25$$

$$\\frac{vI(v)}{F(v)} =\\frac{60v^{3/2}}{30v} =2\\sqrt v<1 \\quad \\text{when }0<v<0.25$$

Comparing $I(v)$ with $F(v)$ directly would compare the wrong pair, since the context defines the charge as $vI(v)$. Break-even is at $0.25$ ADV with the charge lower below it, so the statement is True.`,
      `**D.** → True

Impact and the scaled charge are two different quantities, the second being the first multiplied by order size.

$$I(0.16)=60\\sqrt{0.16}=60(0.4)=24$$

$$vI(v)=0.16(24)=3.84$$

That extra factor of $v$ is what separates a basis-point figure from a charge. Both the $24$ basis points and the $3.84$ charge match the claim, so the statement is True.`,
      `**E.** → False

Proportionality would require the charge to carry exponent $1$, while multiplying impact by $v$ gives exponent $3/2$.

$$vI(v)=v(60v^{1/2})=60v^{3/2}$$

$$\\frac{(2v)I(2v)}{vI(v)} =2^{3/2}=2\\sqrt2\\ne2$$

The explicit factor $v$ is visible, but the $v^{1/2}$ hidden inside impact is what breaks proportionality. The charge grows by about $2.83$ when size doubles, so the statement is False.`,
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

The measured $70$ units is the gap between two animals' daily use, and both masses are exact cubes, so the shape factors resolve without rounding.

$$E(64)-E(27) =A(64^{2/3}-27^{2/3}) =A(16-9)$$

$$7A=70 \\quad \\Rightarrow \\quad A=10, \\qquad E(m)=10m^{2/3}$$

Attaching the $70$ to the heavier animal as its total use would calibrate on a level the data never gave. The allometric law is $E(m)=10m^{2/3}$, so the statement is True.`,
      `**B.** → True

Doubling body mass acts through the exponent, so the coefficient and the starting mass cancel and only $2^{2/3}$ survives.

$$\\frac{E(2m)}{E(m)} =\\frac{10(2m)^{2/3}}{10m^{2/3}} =2^{2/3}$$

$$2^{2/3}=(2^2)^{1/3}=\\sqrt[3]{4}\\approx1.587$$

Reading $2/3$ as a $66.7\\%$ increase would replace a power of two with an added proportion. Both exact forms in the claim describe the same multiplier, so the statement is True.`,
      `**C.** → True

A herd total is the sum of individual uses, so the law is applied animal by animal before anything is added.

$$8E(27)=8\\left(10\\cdot27^{2/3}\\right) =8(90)=720$$

$$E(216)=10(216^{1/3})^2 =10(6^2)=360, \\qquad \\frac{720}{360}=2$$

Combining the masses first would treat a nonlinear law as if it were additive. The eight-animal herd uses exactly twice the single animal's energy, so the statement is True.`,
      `**D.** → False

Merging two animals replaces two applications of the law with one application at twice the mass, and the exponent $2/3$ lies below one.

$$E(m)+E(m)=2E(m)$$

$$E(2m)=2^{2/3}E(m)\\approx1.587E(m)<2E(m)$$

Working from total mass alone hides the fact that the model applies to each animal separately. Two $27$ kg animals use $180$ units against about $142.9$ for one $54$ kg animal, so the statement is False.`,
      `**E.** → False

Energy use per kilogram is the allometric law divided by mass, which lowers the exponent to $-1/3$.

$$\\frac{E(m)}{m} =\\frac{10m^{2/3}}{m} =10m^{-1/3}$$

$$\\frac{E(27)}{27}=\\frac{90}{27}=\\frac{10}{3}, \\qquad \\frac{E(64)}{64}=\\frac{160}{64}=2.5$$

Total use does rise with mass, but less than proportionally, which is exactly what makes the average fall. The two per-kilogram values differ, so the statement is False.`,
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

The planning file records a gap between two zones rather than either zone's footfall, so the coefficient multiplies the difference of the two shape factors.

$$4^{1.5} = (2^{2})^{3/2} = 2^{3} = 8, \\qquad 16^{1.5} = (4^{2})^{3/2} = 4^{3} = 64$$

Write the recorded gap through the law:

$$f(4) - f(16) = A\\left(\\frac{1}{8} - \\frac{1}{64}\\right) = A \\cdot \\frac{7}{64} = 350$$

$$A = 350 \\cdot \\frac{64}{7} = 3200$$

Dividing $350$ by a single shape factor such as $4^{-1.5}$ would answer a question the file never posed. The footfall law is $f(d)=3200d^{-1.5}$, so the statement is True.`,
      `**B.** → True

The nearer zone's own footfall is the calibrated law evaluated at four kilometres, which the file gives only indirectly.

$$f(4) = \\frac{3200}{4^{1.5}} = \\frac{3200}{8} = 400$$

Check the pair against the recorded gap:

$$f(16) = \\frac{3200}{64} = 50, \\qquad 400 - 50 = 350 \\;\\checkmark$$

The recorded $350$ sits close to this figure only because the distant zone contributes an eighth as much. The nearer zone supplies $400$ visitors a week, so the statement is True.`,
      `**C.** → True

A scale factor depends only on the exponent, so quadrupling the distance acts through $4^{-1.5}$ and the coefficient cancels.

$$\\frac{f(4d)}{f(d)} = \\frac{A(4d)^{-1.5}}{Ad^{-1.5}} = 4^{-1.5} = \\frac{1}{4^{3/2}} = \\frac{1}{8}$$

Verify on the two recorded zones:

$$\\frac{f(16)}{f(4)} = \\frac{50}{400} = \\frac{1}{8} \\;\\checkmark$$

The exponent $1.5$ sits between proportional decay, which would give a quarter, and inverse-square decay, which would give a sixteenth. Footfall falls to an eighth, so the statement is True.`,
      `**D.** → True

The catchment boundary is where footfall meets the threshold, so the law has to be inverted with the reciprocal exponent $2/3$.

$$\\frac{3200}{d^{1.5}} = 100 \\quad \\Rightarrow \\quad d^{1.5} = 32$$

$$d = 32^{2/3} = (2^{5})^{2/3} = 2^{10/3} \\approx 10.08$$

Check the round distance against the threshold:

$$f(10) = \\frac{3200}{10^{1.5}} \\approx \\frac{3200}{31.62} \\approx 101.2 > 100$$

Squaring $32$, or halving it, would apply the exponent instead of its reciprocal. A zone at $10$ kilometres still clears the threshold and the boundary lies just beyond it, so the statement is True.`,
      `**E.** → False

A specific zone is tested against the threshold by evaluating the law there, and nine is a perfect square, so the fractional exponent resolves exactly.

$$9^{1.5} = (3^{2})^{3/2} = 3^{3} = 27$$

Evaluate the law:

$$f(9) = \\frac{3200}{27} \\approx 118.5$$

Nine kilometres looks closer to the quiet zone at sixteen than to the busy one at four, yet distance decay is steepest near the park, so most of the drop has already happened. At about $118$ visitors the zone clears the $100$-visitor threshold, so the statement is False.`,
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

Proportionality is the claim that the exponent equals $1$, so it is tested by comparing the area ratio with the output ratio between the two arrays.

$$\\frac{225}{100} = 2.25, \\qquad \\frac{360}{240} = 1.5$$

Test the proportional prediction against the second array:

$$240 \\times 2.25 = 540 \\ne 360$$

Shading, inverter limits and roof orientation all bite as arrays grow, and the exponent that fits this pair is $0.5$. The proportional model overstates the larger array by $180$ kWh, so the statement is False.`,
      `**B.** → True

Two installed arrays determine both constants: their ratio carries the exponent, and either array then carries the coefficient.

$$\\left(\\frac{225}{100}\\right)^{r} = \\frac{360}{240} \\quad \\Rightarrow \\quad 2.25^{r} = 1.5 = 2.25^{1/2}$$

$$r = 0.5$$

Recover the coefficient from each array:

$$\\frac{240}{\\sqrt{100}} = 24, \\qquad \\frac{360}{\\sqrt{225}} = 24, \\qquad y(a) = 24\\sqrt{a}$$

Because $1.5^{2}=2.25$ the exponent falls out without logarithms, and a wrong exponent would leave the two coefficients disagreeing. Both constants are as claimed, so the statement is True.`,
      `**C.** → False

A scale factor has to match the multiplier being asked about, and a doubling is a multiplier of $2$ rather than the $2.25$ separating the installed arrays.

$$\\frac{y(2a)}{y(a)} = 2^{0.5} \\approx 1.4142$$

Contrast with the observed pair:

$$\\left(\\frac{225}{100}\\right)^{0.5} = 1.5 \\quad \\text{(a } 2.25\\times \\text{ expansion, not } 2\\times)$$

Output did rise by half between the two arrays, but across a $2.25$-fold expansion rather than a doubling. A doubling gives about $41\\%$, so the statement is False.`,
      `**D.** → False

The proposal doubles the second array, so the calibrated law is evaluated at $450$ m² and compared with the stated threshold.

$$y(450) = 360 \\times 2^{0.5} \\approx 360 \\times 1.4142 \\approx 509.1$$

Confirm through the calibrated law:

$$y(450) = 24\\sqrt{450} \\approx 24 \\times 21.213 \\approx 509.1$$

$$509.1 < 520$$

The margin is narrow enough that a proportional forecast, which would promise $720$ kWh, is more than $200$ kWh out. The expansion falls short of $520$, so the statement is False.`,
      `**E.** → False

Output per square metre is the calibrated law divided by area, which lowers the exponent to $-0.5$.

$$\\frac{y(a)}{a} = \\frac{24a^{0.5}}{a} = 24a^{-0.5}$$

Evaluate for the three arrays:

$$\\frac{240}{100} = 2.4, \\qquad \\frac{360}{225} = 1.6, \\qquad \\frac{509.1}{450} \\approx 1.13$$

Total output still rises, which is the practical meaning of a sub-linear exponent rather than a contradiction of it. Output per square metre falls throughout, so the statement is False.`,
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

Two milestones fix the exponent through their ratio, which cancels the coefficient and leaves a power equation in the volume multiplier.

$$\\left(\\frac{400}{100}\\right)^{b} = \\frac{40}{80} \\quad \\Rightarrow \\quad 4^{b} = 0.5$$

Solve using powers of two:

$$2^{2b} = 2^{-1} \\quad \\Rightarrow \\quad 2b = -1 \\quad \\Rightarrow \\quad b = -0.5$$

Recover the coefficient for later use:

$$A(100)^{-0.5} = 80 \\;\\Rightarrow\\; \\frac{A}{10} = 80 \\;\\Rightarrow\\; A = 800$$

The negative sign is forced by the data, since dropping it would describe cost rising with volume instead of a learning curve. The exponent is $-0.5$, so the statement is True.`,
      `**B.** → True

A scale factor holds at every starting point, so the effect of quadrupling volume is $4^{-0.5}$ wherever it is applied.

$$\\frac{c(4N)}{c(N)} = 4^{-0.5} = \\frac{1}{2}$$

Check two successive quadruplings:

$$c(100) = 80, \\qquad c(400) = 40, \\qquad c(1600) = \\frac{800}{40} = 20$$

The halving observed between the milestones is a general rule rather than a feature of that particular pair. Each quadrupling halves the cost, so the statement is True.`,
      `**C.** → True

A cost target is inverted through the curve, and an exponent of $-0.5$ inverts by squaring the ratio of coefficient to target.

$$800N^{-0.5} = 20 \\quad \\Rightarrow \\quad \\sqrt{N} = \\frac{800}{20} = 40$$

$$N = 1600$$

Check on either side:

$$c(900) = \\frac{800}{30} \\approx 26.7, \\qquad c(2500) = \\frac{800}{50} = 16$$

That squaring is why further targets get expensive, since halving the cost again to $10$ would take $6400$ thousand cells. The threshold is $1600$ thousand cells, so the statement is True.`,
      `**D.** → True

Cumulative spend is unit cost multiplied by volume, and multiplying by $N$ raises the exponent by one.

$$S(N) = N \\cdot 800N^{-0.5} = 800N^{-0.5+1} = 800N^{0.5}$$

Evaluate at the milestones:

$$S(100) = 8000, \\qquad S(400) = 16000, \\qquad S(1600) = 32000$$

Falling unit cost and rising volume pull in opposite directions, so only the derived law settles which wins. Spend grows as $\\sqrt{N}$, so the statement is True.`,
      `**E.** → False

A doubling is a different multiplier from a quadrupling, so it acts through $2^{-0.5}$ rather than $4^{-0.5}$.

$$\\frac{c(2N)}{c(N)} = 2^{-0.5} \\approx 0.7071$$

Check against a milestone:

$$c(100) = 80, \\qquad c(200) = \\frac{800}{\\sqrt{200}} \\approx \\frac{800}{14.142} \\approx 56.6$$

Two doublings make a quadrupling, and $0.7071^{2}=0.5$ recovers the halving rule exactly. The cost falls by about $29\\%$, so the statement is False.`,
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

The chain runs from discharge to velocity to transport, so the gauged run calibrates the transport stage before the velocity law is substituted in.

$$A(3)^{3} = 135 \\quad \\Rightarrow \\quad 27A = 135 \\quad \\Rightarrow \\quad A = 5$$

Substitute the velocity law:

$$S(q) = 5\\left(\\frac{q^{0.5}}{2}\\right)^{3} = 5 \\times \\frac{q^{1.5}}{8} = 0.625\\,q^{1.5}$$

Spot-check through both stages at $q=36$:

$$v = \\frac{6}{2} = 3, \\qquad S = 5(27) = 135, \\qquad 0.625(36)^{1.5} = 0.625(216) = 135 \\;\\checkmark$$

Cubing the numerator alone and leaving the divisor $2$ untouched would leave the law eight times too large. The composed law is $0.625q^{1.5}$, so the statement is True.`,
      `**B.** → True

The stability limit is inverted through the composed law, whose reciprocal exponent is $2/3$.

$$0.625q^{1.5} = 5000 \\quad \\Rightarrow \\quad q^{1.5} = 8000$$

$$q = 8000^{2/3} = \\left(8000^{1/3}\\right)^{2} = 20^{2} = 400$$

Confirm through the stages:

$$v(400) = \\frac{20}{2} = 10, \\qquad S = 5(1000) = 5000 \\;\\checkmark$$

Inverting the composed law avoids carrying the intermediate velocity, though both routes agree. The limit is reached at a discharge of $400$, so the statement is True.`,
      `**C.** → True

A discharge multiplier acts through the composed exponent $0.5 \\times 3 = 1.5$, not through either stage alone.

$$\\frac{S(2q)}{S(q)} = 2^{1.5} \\approx 2.8284$$

Verify through the stages:

$$v \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{3} \\approx 2.83$$

Velocity rises by only $41\\%$ when discharge doubles, and cubing that rise reproduces the composed factor. Transport multiplies by about $2.83$, so the statement is True.`,
      `**D.** → False

Doubling the velocity acts on the transport stage alone, whose exponent is $3$.

$$\\frac{S(2v)}{S(v)} = 2^{3} = 8$$

Check with concrete velocities:

$$S(3) = 135, \\qquad S(6) = 5(216) = 1080, \\qquad \\frac{1080}{135} = 8$$

The two doublings in this task have to be kept apart, since discharge must rise fourfold to double the velocity. Transport multiplies by eight, so the statement is False.`,
      `**E.** → False

Transport per unit of discharge is the composed law divided by $q$, which lowers the exponent from $1.5$ to $0.5$.

$$\\frac{S(q)}{q} = \\frac{0.625q^{1.5}}{q} = 0.625q^{0.5}$$

Evaluate at three discharges:

$$\\frac{S(36)}{36} = 3.75, \\qquad \\frac{S(100)}{100} = 6.25, \\qquad \\frac{S(400)}{400} = 12.5$$

Constancy would require the composed exponent to be $1$, whereas each unit of a larger flow carries more sediment than before. Transport per unit of discharge more than triples, so the statement is False.`,
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

A twenty percent price rise is a multiplier of $1.2$ acting through the demand exponent $-3$, so the surviving fraction is a power.

$$\\frac{q(1.2p)}{q(p)}=1.2^{-3}=\\frac{1}{1.728}\\approx0.57870$$

$$(1-0.57870)\\times100\\%\\approx42.1\\%$$

A linear elasticity estimate would multiply $3$ by $20\\%$ and overstate the loss for a change this large. Quantity falls by about $42.1\\%$, so the statement is True.`,
      `**B.** → True

Revenue is price times quantity, and multiplying an isoelastic demand curve by $p$ raises its exponent by one.

$$R(p) = p \\cdot 4000p^{-3} = 4000p^{-3+1} = 4000p^{-2}$$

Check the scale-factor behaviour:

$$\\frac{R(2p)}{R(p)} = 2^{-2} = \\frac{1}{4}$$

The exponent stays negative, which is the formal statement that this trader loses revenue by raising prices. Revenue is a power function with exponent $-2$, so the statement is True.`,
      `**C.** → True

A revenue level needs the coefficient first, which the observed pair supplies, and then the derived revenue law evaluated at the new price.

$$500=A(2)^{-3}=\\frac{A}{8} \\quad \\Rightarrow \\quad A=4000$$

$$R(2.5)=4000(2.5)^{-2}=\\frac{4000}{6.25}=640$$

The negative exponent puts the price in the denominator, so revenue falls as the price rises. Revenue at price $2.50$ is exactly $640$, so the statement is True.`,
      `**D.** → True

The indexation is a multiplier of $1.1$ on price, and its effect on volume is the exact power $1.1^{-3}$.

$$\\frac{q(1.1p)}{q(p)} = 1.1^{-3} = \\frac{1}{1.331} \\approx 0.7513$$

Convert to a percentage cut:

$$1 - 0.7513 \\approx 0.249 = 24.9\\%$$

Check with levels:

$$q(2) = 500, \\qquad q(2.2) = \\frac{4000}{10.648} \\approx 375.7$$

An elasticity estimate of $3 \\times 10\\% = 30\\%$ overstates the loss by five percentage points, since elasticity approximates only small changes. Quantity falls by about $25\\%$, so the statement is True.`,
      `**E.** → True

The same indexation acts on revenue through the revenue exponent $-2$ rather than the demand exponent $-3$.

$$\\frac{R(1.1p)}{R(p)} = 1.1^{-2} = \\frac{1}{1.21} \\approx 0.8264$$

Convert to a percentage cut:

$$1 - 0.8264 \\approx 0.174 = 17.4\\%$$

Check with levels:

$$R(2) = 1000, \\qquad R(2.2) = \\frac{4000}{4.84} \\approx 826.4$$

Volume falls by about $25\\%$ while each unit sells for $10\\%$ more, and $0.7513 \\times 1.1 = 0.8264$ reconciles the two exactly. Revenue falls by about $17\\%$, so the statement is True.`,
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
