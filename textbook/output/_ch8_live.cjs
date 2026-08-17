/**
 * Chapter 8 — Power functions (Sydsæter §4.8 style exam tasks).
 * BBE True/False bank: dry claims, multi-step recovery / scaling / composition.
 */



module.exports.T = [
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

$$16^{0.75} = (2^{4})^{3/4} = 2^{3} = 8, \\qquad 81^{0.75} = (3^{4})^{3/4} = 3^{3} = 27$$

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

$$1.5^{r} = 2.25 = 1.5^{2}, \\qquad r = 2$$

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

$$S(t)=\\pi\\left(3t^{0.5}\\right)^2=9\\pi t, \\qquad S(4)=9\\pi(4)=36\\pi$$

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

$$9\\pi t=100\\pi, \\qquad t=\\frac{100}{9}\\approx11.11$$

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

$$\\frac{c(4N)}{c(N)} = \\left(0.8\\right)^{2} = 0.64, \\qquad 1 - 0.64 = 0.36 = 36\\%$$

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

$$F(100) = 6(100) = 600, \\qquad 900 - 600 = 300$$

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

$$\\frac{N(9)}{N(4)} = \\left(\\frac{9}{4}\\right)^{0.5} = \\frac{3}{2}, \\qquad N(9) = \\frac{3}{2}\\cdot 60 = 90$$

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

$$8^{4/3} = \\left(8^{1/3}\\right)^{4} = 2^{4} = 16, \\qquad y(8) = 4(16) = 64$$

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

$$\\frac{9^{3/2}}{27} = \\frac{27}{27} = 1, \\qquad g\\big(f(x)\\big) = 1 \\cdot x^{1}$$

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

$$\\frac{192}{16^{1.5}} = \\frac{192}{64} = 3, \\qquad y = 3x^{1.5}$$

A wrong exponent would give two different coefficients, so agreement between the measurements is a genuine check rather than a repetition. Both give $A=3$, so the statement is True.`,
      `**C.** → False

The measurement at $x=9$ was held out of the fit, which makes it a test of the model rather than part of its construction.

$$9^{1.5} = \\left(9^{1/2}\\right)^{3} = 3^{3} = 27, \\qquad y = 3(27) = 81$$

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

$$\\frac{S(1.5h)}{S(h)}=1.5^2=2.25, \\qquad (2.25-1)\\times100\\%=125\\%$$

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

$$\\frac{T(n)}{n}=\\frac{6n^{0.5}}{n}=6n^{-0.5}, \\qquad \\frac{T(144)}{144} =\\frac{6}{\\sqrt{144}} =\\frac{6}{12}=0.5$$

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

$$L(64)=4(64)^{1.5}=4(64)(8), \\qquad L(64)=2048$$

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
  {
    id: `math-8-51`,
    case_id: `MATH 8.51`,
    title: `Weld Strength Recovered From Two Spot Checks`,
    context: `A production weld's tensile strength follows $S(p)=A p^{k}$ newtons, where $p>0$ is the welding current in amperes. Neither constant is on the calibration sheet: the sheet only records that a $4$ A setting produced $40$ N of strength and a $9$ A setting produced $135$ N. The line rejects any weld below $400$ N. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered strength law is $S(p)=5p^{3/2}$.`,
      `At $16$ A the weld strength is $320$ N.`,
      `The smallest current that clears the $400$ N reject line is below $18$ A.`,
      `Doubling any current multiplies strength by less than $2.5$.`,
      `A $100$ A setting yields exactly $4000$ N of strength.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Two observed levels fix the exponent first and the coefficient second, because dividing one observation by the other cancels the unknown coefficient and leaves a pure ratio of currents:

$$\\frac{S(9)}{S(4)}=\\frac{135}{40}=\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}$$

Both sides are powers of $3/2$, since $27/8=(3/2)^{3}$ and $9/4=(3/2)^{2}$, so the exponent falls out without logarithms:

$$\\left(\\tfrac{3}{2}\\right)^{3}=\\left(\\tfrac{3}{2}\\right)^{2k} \\quad\\Rightarrow\\quad 2k=3 \\quad\\Rightarrow\\quad k=\\frac{3}{2}$$

The shorter spot check now carries the coefficient, using $4^{3/2}=(\\sqrt{4})^{3}=8$:

$$A\\cdot8=40 \\quad\\Rightarrow\\quad A=5$$

The second spot check is reproduced exactly, since $5\\cdot9^{3/2}=5\\cdot27=135$. The recovered law is $S(p)=5p^{3/2}$, so the statement is True.`,
      `**B.** → True

A calibrated power law is evaluated by substitution, never by interpolating between the two logged currents. Take the square root first and then cube it, since $16^{3/2}=(\\sqrt{16})^{3}=4^{3}=64$:

$$S(16)=5\\cdot64=320$$

The scaling route agrees, because $16$ A is the $4$ A setting multiplied by $4$, and a factor on the current reaches strength through the exponent $3/2$:

$$\\frac{S(16)}{S(4)}=4^{3/2}=8, \\qquad 40\\cdot8=320$$

Straight-line reasoning between the pairs $(4,40)$ and $(9,135)$ has slope $19$ and would put the $16$ A figure at $268$ N, which the model does not support, because a curved law cannot be read off a chord. The weld at $16$ A carries $320$ N, so the statement is True.`,
      `**C.** → False

A floor on strength becomes a floor on current by inverting the law, which means raising both sides to the reciprocal power $2/3$:

$$5p^{3/2}=400 \\quad\\Rightarrow\\quad p^{3/2}=80 \\quad\\Rightarrow\\quad p=80^{2/3}$$

Evaluate the cube root first and then square it:

$$80^{1/3}\\approx4.3089, \\qquad 80^{2/3}\\approx18.57$$

Scaling from the level $S(16)=320$ confirms the same boundary, since the strength has to rise by a factor of $400/320=5/4$:

$$16\\cdot\\left(\\frac{5}{4}\\right)^{2/3}\\approx16\\cdot1.1604\\approx18.57$$

A setting of $18$ A delivers only $5\\cdot18^{3/2}\\approx381.8$ N and is rejected. The reject line is cleared only above about $18.57$ A, which is not below $18$ A, so the statement is False.`,
      `**D.** → False

A pure scale factor depends on the exponent alone, because the coefficient and the starting current both cancel in the ratio:

$$\\frac{S(2p)}{S(p)}=\\frac{5(2p)^{3/2}}{5p^{3/2}}=2^{3/2}=2\\sqrt{2}\\approx2.828$$

An exponent of $1$ would give a multiplier of exactly $2$, and an exponent above $1$ pushes the multiplier past that, which is what happens here with $3/2$. A concrete pair of settings shows the same figure:

$$S(8)=5\\cdot8^{3/2}=5\\cdot22.6274\\approx113.14, \\qquad \\frac{113.14}{40}\\approx2.828$$

The strength multiplier for a doubled current is about $2.828$, comfortably above $2.5$ rather than below it, so the statement is False.`,
      `**E.** → False

The largest setting is handled the same way as every other, by substituting into the recovered law rather than extrapolating a percentage from the logged pairs. Write $100=10^{2}$ so the fractional power is exact:

$$100^{3/2}=(10^{2})^{3/2}=10^{3}=1000$$

$$S(100)=5\\cdot1000=5000$$

The quoted figure of $4000$ N corresponds to a coefficient of $4$, which contradicts the calibration:

$$4\\cdot4^{3/2}=32\\ne40$$

A coefficient of $4$ would have made the $4$ A spot check read $32$ N instead of the recorded $40$ N. The model gives $5000$ N at $100$ A against the stated $4000$ N, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 51,
    solution_overview: `Weld strength is $S(p)=Ap^{k}$ newtons, with spot checks $S(4)=40$ and $S(9)=135$, and welds below $400$ N are rejected.

**Part 1: Building the model.**

Let $p$ = welding current in amperes and $S$ = tensile strength in newtons. Neither constant is recorded, so two observations are needed: their ratio carries the exponent, and either observation alone then carries the coefficient.

**1. Translate: the ratio of the spot checks.**

$$\\frac{135}{40}=\\frac{27}{8}=\\left(\\frac{9}{4}\\right)^{k}$$

**2. Translate: the reject line.** A floor on strength becomes a floor on current through the reciprocal exponent $2/3$:

$$5p^{3/2}\\ge400 \\quad\\Longleftrightarrow\\quad p\\ge80^{2/3}$$

**Part 2: The model.**

$$S(p)=5\\,p^{3/2} \\tag{1}$$

$$\\frac{S(cp)}{S(p)}=c^{3/2} \\tag{2}$$

**Part 3: Solve.**

**1.** Both sides of the ratio are powers of $3/2$, which fixes the exponent and then the coefficient:

$$k=\\frac{3}{2}, \\qquad A\\cdot4^{3/2}=40 \\quad\\Rightarrow\\quad A=5$$

**2.** Levels at the currents the statements use:

$$S(16)=5\\cdot64=320, \\qquad S(100)=5\\cdot1000=5000$$

**3.** The reject threshold, inverted from $(1)$:

$$p=80^{2/3}\\approx18.57$$

**4.** The doubling multiplier from $(2)$:

$$2^{3/2}=2\\sqrt{2}\\approx2.828$$

**5.** An exponent above $1$ makes strength outrun current, so a doubled setting gains far more than $2.5$ times the strength, while the reject line is cleared only above about $18.57$ A rather than below $18$ A.

**Answer.** $S(p)=5p^{3/2}$ | $S(16)=320$ N | reject threshold $\\approx18.57$ A | doubling factor $2^{3/2}\\approx2.828$`,
  },
  {
    id: `math-8-52`,
    case_id: `MATH 8.52`,
    title: `Mooring Holding Power Across Kilograms and Tonnes`,
    context: `A harbour buoy's holding power follows $H(m)=A m^{2/3}$ kilonewtons when mass $m>0$ is measured in kilograms. A trial buoy of $8$ kg held exactly $24$ kN. The harbour authority prefers masses in tonnes ($1$ tonne $=1000$ kg) and writes the same physical law as $H(t)=B t^{2/3}$ with $t$ in tonnes. A storm protocol demands at least $150$ kN of holding power. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `In kilogram units the holding-power law is $H(m)=6m^{2/3}$.`,
      `In tonne units the coefficient is $B=600$, so $H(t)=600t^{2/3}$.`,
      `Reaching $150$ kN requires a mass of exactly $125$ kg.`,
      `Doubling buoy mass multiplies holding power by $2^{2/3}\\approx1.587$.`,
      `Writing the tonne-form coefficient as $B=6000$ still reproduces the $8$ kg trial.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The exponent is supplied by the model, so a single trial is enough to pin the coefficient once the shape factor at that mass is evaluated. Write $8=2^{3}$ so the fractional power is exact:

$$8^{2/3}=(2^{3})^{2/3}=2^{2}=4$$

The trial then reads $4A=24$, which gives the coefficient directly:

$$A=\\frac{24}{4}=6, \\qquad H(m)=6m^{2/3}$$

Substituting the trial mass back returns $6\\cdot4=24$ kN, matching the record. Reading the $24$ kN as the coefficient itself would skip the shape factor $4$ and inflate every later prediction fourfold. The kilogram-unit law is $H(m)=6m^{2/3}$, so the statement is True.`,
      `**B.** → True

A change of mass unit is a substitution, not a new experiment. Replacing $m$ by $1000t$ leaves the physics untouched and pushes the conversion into a new coefficient:

$$H=6(1000t)^{2/3}=6\\cdot1000^{2/3}\\,t^{2/3}$$

The conversion factor is itself a clean power, since $1000=10^{3}$:

$$1000^{2/3}=(10^{3})^{2/3}=10^{2}=100, \\qquad B=6\\cdot100=600$$

Testing the tonne form on the original trial, where $8$ kg is $0.008$ t and $0.008^{2/3}=(0.2)^{2}=0.04$:

$$600\\cdot0.04=24$$

Both forms return the same $24$ kN for the same buoy, so the statement is True.`,
      `**C.** → True

A target holding power is inverted by raising both sides to the reciprocal power $3/2$, which undoes the exponent $2/3$:

$$6m^{2/3}=150 \\quad\\Rightarrow\\quad m^{2/3}=25 \\quad\\Rightarrow\\quad m=25^{3/2}$$

Take the square root first and then cube it:

$$25^{3/2}=(\\sqrt{25})^{3}=5^{3}=125$$

Pure ratio reasoning against the trial gives the same mass, because holding power must rise by a factor of $150/24=25/4$:

$$8\\cdot\\left(\\frac{25}{4}\\right)^{3/2}=8\\cdot\\left(\\frac{5}{2}\\right)^{3}=8\\cdot\\frac{125}{8}=125$$

A forward check closes the loop, since $6\\cdot125^{2/3}=6\\cdot25=150$. The storm protocol needs exactly $125$ kg, so the statement is True.`,
      `**D.** → True

Doubling the mass acts through the exponent alone, so the coefficient and the starting mass both cancel and the unit system becomes irrelevant:

$$\\frac{H(2m)}{H(m)}=\\frac{6(2m)^{2/3}}{6m^{2/3}}=2^{2/3}$$

The exact value is a cube root of $4$:

$$2^{2/3}=(2^{2})^{1/3}=\\sqrt[3]{4}\\approx1.5874$$

Levels confirm the multiplier, since doubling the trial buoy to $16$ kg gives $6\\cdot16^{2/3}\\approx6\\cdot6.3496\\approx38.10$ and $38.10/24\\approx1.587$. Reading the exponent $2/3$ as a $66.7\\%$ increase would replace a power with an added proportion and overstate the gain. Both forms in the statement describe the same multiplier, so the statement is True.`,
      `**E.** → False

A tonne-form coefficient is admissible only if it reproduces the one measurement on record. Rewrite the trial mass as $0.008$ tonnes and test the proposed figure:

$$6000\\cdot(0.008)^{2/3}=6000\\cdot0.04=240$$

That is ten times the logged $24$ kN, so the proposal fails the calibration outright:

$$240\\ne24$$

The factor of ten is exactly the mishandled conversion, since the mass unit enters under the exponent $2/3$ rather than linearly:

$$6\\cdot1000^{2/3}=600, \\qquad 6\\cdot1000^{1}=6000$$

Only $B=600$ keeps the two unit systems describing the same buoy, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 52,
    solution_overview: `Holding power is $H(m)=Am^{2/3}$ kilonewtons in kilograms with $H(8)=24$, the same law in tonnes is $H(t)=Bt^{2/3}$, and the storm floor is $150$ kN.

**Part 1: Building the model.**

Let $m$ = buoy mass in kilograms, $t$ = the same mass in tonnes, $H$ = holding power in kilonewtons. The exponent is given, so one trial fixes the coefficient. A change of unit is a substitution $m=1000t$, and the conversion enters under the exponent rather than beside it.

**1. Translate: the trial buoy.**

$$A\\cdot8^{2/3}=24, \\qquad 8^{2/3}=4$$

**2. Translate: the storm floor.** A target on holding power inverts through the reciprocal exponent $3/2$:

$$6m^{2/3}\\ge150 \\quad\\Longleftrightarrow\\quad m\\ge25^{3/2}$$

**Part 2: The model.**

$$H(m)=6\\,m^{2/3} \\tag{1}$$

$$H(t)=600\\,t^{2/3}, \\qquad B=6\\cdot1000^{2/3} \\tag{2}$$

**Part 3: Solve.**

**1.** The trial gives the kilogram coefficient:

$$A=\\frac{24}{4}=6$$

**2.** The unit change gives the tonne coefficient, since $1000^{2/3}=100$:

$$B=6\\cdot100=600$$

**3.** Both forms reproduce the trial, with $8$ kg written as $0.008$ t:

$$6\\cdot8^{2/3}=24, \\qquad 600\\cdot0.008^{2/3}=24$$

**4.** The storm mass and the doubling multiplier:

$$m=25^{3/2}=125, \\qquad 2^{2/3}\\approx1.5874$$

**5.** A coefficient of $6000$ would return $240$ kN for the trial buoy, ten times the record, because it converts the unit linearly instead of through the exponent $2/3$.

**Answer.** $H(m)=6m^{2/3}$ | $B=600$ | storm mass $125$ kg | doubling factor $2^{2/3}\\approx1.587$`,
  },
  {
    id: `math-8-53`,
    case_id: `MATH 8.53`,
    title: `Mesh Throughput Against an Inverse-Square Floor`,
    context: `A wireless mesh's sustained throughput follows $T(d)=A d^{-2}$ megabits per second, where $d>0$ is the hop distance in metres. A bench test at $d=4$ m recorded $T=50$ Mbps. The link is rated reliable only while throughput stays at or above $8$ Mbps. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered throughput law is $T(d)=800d^{-2}$.`,
      `The farthest reliable hop distance is exactly $10$ m.`,
      `At $d=25$ m the throughput is $1.28$ Mbps.`,
      `A hop of $11$ m still clears the $8$ Mbps reliability floor.`,
      `Tripling the transmitter coefficient would extend the reliable radius to $30$ m.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The exponent is fixed at $-2$ by the model, so one bench reading is enough to recover the coefficient. Multiply the observed throughput by the square of the hop distance:

$$T(4)=\\frac{A}{4^{2}}=\\frac{A}{16}=50 \\quad\\Rightarrow\\quad A=50\\cdot16=800$$

The calibrated law is therefore

$$T(d)=800d^{-2}=\\frac{800}{d^{2}}$$

Substituting the bench hop back returns $800/16=50$ Mbps, matching the record exactly. Reading the $50$ Mbps as the coefficient itself would ignore the shape factor $1/16$ and understate every prediction by a factor of sixteen. The recovered law is $T(d)=800d^{-2}$, so the statement is True.`,
      `**B.** → True

A reliability floor is a target on the output, so the law has to be inverted for distance. Set throughput to the floor and solve for the positive root:

$$\\frac{800}{d^{2}}=8 \\quad\\Rightarrow\\quad d^{2}=\\frac{800}{8}=100 \\quad\\Rightarrow\\quad d=10$$

The negative root has no meaning as a hop distance. Ratio reasoning from the bench point reaches the same radius, since throughput must fall by a factor of $50/8=25/4$ and distance enters squared:

$$\\left(\\frac{d}{4}\\right)^{2}=\\frac{25}{4} \\quad\\Rightarrow\\quad \\frac{d}{4}=\\frac{5}{2} \\quad\\Rightarrow\\quad d=10$$

Because the exponent is negative, throughput decreases with distance, so every hop under $10$ m complies and every longer hop fails. The farthest reliable hop is exactly $10$ m, so the statement is True.`,
      `**C.** → True

A far hop is evaluated by dividing the coefficient by the square of the distance:

$$T(25)=\\frac{800}{25^{2}}=\\frac{800}{625}=1.28$$

Scaling from the reliability boundary gives the same figure without recomputing the coefficient, since $25$ m is $2.5$ times the $10$ m radius and the factor enters squared:

$$8\\cdot(2.5)^{-2}=\\frac{8}{6.25}=1.28$$

The steepness is worth noting: stretching the hop from $10$ m to $25$ m costs about $84\\%$ of the throughput, because an inverse-square law punishes distance far harder than a proportional rule would. The link at $25$ m carries $1.28$ Mbps, so the statement is True.`,
      `**D.** → False

Whether a hop complies is settled by evaluating the model at that hop and comparing with the floor, not by judging the distance as roughly close to the limit:

$$T(11)=\\frac{800}{11^{2}}=\\frac{800}{121}\\approx6.612$$

$$6.612<8$$

The general argument is the same. The exponent $-2$ is negative, so throughput falls monotonically with distance, and the boundary sits at exactly $10$ m:

$$11>10 \\quad\\Rightarrow\\quad T(11)<T(10)=8$$

An $11$ m hop delivers only about $6.61$ Mbps, roughly $17\\%$ short of the requirement, so the statement is False.`,
      `**E.** → False

Multiplying the coefficient scales every throughput by the same factor, but the reliable radius responds through the square root, because distance sits under an exponent of $2$:

$$\\frac{3\\cdot800}{d^{2}}=8 \\quad\\Rightarrow\\quad d^{2}=300 \\quad\\Rightarrow\\quad d=10\\sqrt{3}\\approx17.32$$

Reaching $30$ m would need a nine-fold coefficient rather than a tripled one, since the radius triples only when the coefficient grows by $3^{2}$:

$$\\frac{9\\cdot800}{30^{2}}=\\frac{7200}{900}=8$$

Checking the tripled transmitter at $30$ m confirms the shortfall, because $2400/900\\approx2.67$ Mbps sits far below the floor. Tripling stretches the radius only to about $17.32$ m, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 53,
    solution_overview: `Mesh throughput is $T(d)=Ad^{-2}$ megabits per second, calibrated by $T(4)=50$, and the link is reliable only while $T\\ge8$.

**Part 1: Building the model.**

Let $d$ = hop distance in metres and $T$ = sustained throughput in megabits per second. The exponent $-2$ is given, so one bench reading fixes the coefficient. Because the exponent is negative, throughput falls as the hop grows, which turns the reliability floor into a maximum distance.

**1. Translate: the bench reading.**

$$\\frac{A}{4^{2}}=50$$

**2. Translate: the reliability floor.** A floor on throughput inverts into a ceiling on distance:

$$\\frac{A}{d^{2}}\\ge8 \\quad\\Longleftrightarrow\\quad d\\le\\sqrt{\\frac{A}{8}}$$

**Part 2: The model.**

$$T(d)=\\frac{800}{d^{2}} \\tag{1}$$

$$d_{\\max}=\\sqrt{\\frac{A}{8}} \\tag{2}$$

**Part 3: Solve.**

**1.** The bench reading gives the coefficient:

$$A=50\\cdot16=800$$

**2.** The reliable radius from $(2)$:

$$d^{2}=100 \\quad\\Rightarrow\\quad d=10$$

**3.** Throughput at the hops the statements name:

$$T(11)=\\frac{800}{121}\\approx6.61, \\qquad T(25)=\\frac{800}{625}=1.28$$

**4.** A tripled coefficient, again through $(2)$:

$$d=\\sqrt{300}=10\\sqrt{3}\\approx17.32$$

**5.** Distance is punished twice over here: an $11$ m hop already misses the floor, and tripling transmitter power buys only a factor of $\\sqrt{3}$ in radius, so a $30$ m link would need nine times the coefficient.

**Answer.** $T(d)=800d^{-2}$ | reliable radius $10$ m | $T(25)=1.28$ Mbps | tripled coefficient reaches $\\approx17.32$ m`,
  },
  {
    id: `math-8-54`,
    case_id: `MATH 8.54`,
    title: `Allometric Gill Area Across Body Masses`,
    context: `A fish physiologist models gill surface area as $G(m)=A m^{3/4}$ square centimetres for body mass $m>0$ grams. A $256$ g specimen has gill area $512$ cm$^{2}$. Area per gram is the derived intensity $G(m)/m$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered gill-area law is $G(m)=8m^{3/4}$.`,
      `Gill area per gram is constant across body masses.`,
      `Two $16$ g fish together have the same total gill area as one $32$ g fish.`,
      `The mass that produces $216$ cm$^{2}$ of gill area is $64$ g.`,
      `At $m=16$ g the intensity $G(m)/m$ equals $8$ cm$^{2}$ per gram.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The allometric exponent is supplied, so one specimen fixes the coefficient. Write the mass as a power of two so the fractional exponent is exact, since $256=2^{8}$:

$$256^{3/4}=(2^{8})^{3/4}=2^{6}=64$$

Divide the observed area by that shape factor:

$$A=\\frac{512}{64}=8, \\qquad G(m)=8m^{3/4}$$

Two independent checks agree with the calibration: a one-gram fish would carry $G(1)=8$ cm$^{2}$, and a $16$ g fish carries $G(16)=8\\cdot16^{3/4}=8\\cdot8=64$ cm$^{2}$. Treating the observed $512$ as the coefficient would inflate every prediction sixty-four fold. The recovered law is $G(m)=8m^{3/4}$, so the statement is True.`,
      `**B.** → False

Area per gram is the law divided by its own input, and dividing a power by $m$ subtracts one from the exponent:

$$\\frac{G(m)}{m}=\\frac{8m^{3/4}}{m}=8m^{-1/4}$$

The leftover exponent is negative, which is exactly the condition for a falling intensity on a positive domain. Two masses make the decline visible:

$$\\frac{G(16)}{16}=\\frac{64}{16}=4, \\qquad \\frac{G(81)}{81}=\\frac{216}{81}=\\frac{8}{3}\\approx2.667$$

Total gill area does rise with body mass, but with exponent $3/4$ it rises less than proportionally, so each extra gram of fish carries less gill area than the gram before it. Intensity is not constant, so the statement is False.`,
      `**C.** → False

Allometric laws apply fish by fish, so a pair contributes two evaluations at $16$ g while a single larger animal is one evaluation at $32$ g:

$$2G(16)=2\\cdot8\\cdot16^{3/4}=2\\cdot8\\cdot8=128$$

$$G(32)=8\\cdot32^{3/4}=8\\cdot2^{15/4}=64\\cdot2^{3/4}\\approx107.63$$

The gap of about $20.4$ cm$^{2}$ favours the pair:

$$128>107.63$$

The reason is structural rather than numerical. An exponent below $1$ makes the law concave, so splitting a fixed total mass into separate animals always yields more combined surface than merging it into one. Two $16$ g fish carry more gill area than one $32$ g fish, so the statement is False.`,
      `**D.** → False

Inverting a target area means raising both sides to the reciprocal power $4/3$, which undoes the exponent $3/4$:

$$8m^{3/4}=216 \\quad\\Rightarrow\\quad m^{3/4}=27 \\quad\\Rightarrow\\quad m=27^{4/3}$$

Evaluate with $27=3^{3}$, so the cube root is exact:

$$27^{4/3}=(3^{3})^{4/3}=3^{4}=81$$

The stated mass gives a different area, using $64=2^{6}$:

$$G(64)=8\\cdot64^{3/4}=8\\cdot2^{9/2}=128\\sqrt{2}\\approx181.02$$

A $64$ g fish falls about $35$ cm$^{2}$ short of the target. The mass that produces $216$ cm$^{2}$ is $81$ g rather than $64$ g, so the statement is False.`,
      `**E.** → False

Intensity at a given mass is the recovered area divided by that mass, which is not the coefficient of the area law:

$$\\frac{G(16)}{16}=\\frac{8\\cdot16^{3/4}}{16}=\\frac{64}{16}=4$$

The derived intensity law returns the same value directly, since $16^{1/4}=2$:

$$8m^{-1/4}\\Big|_{m=16}=\\frac{8}{2}=4$$

The figure $8$ does belong to the model, but as the intensity of a one-gram fish, where $G(1)/1=8$. Intensity has already halved by $16$ g, because a fourth root of $16$ divides it by $2$. At $16$ g the intensity is $4$ cm$^{2}$ per gram against the stated $8$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 54,
    solution_overview: `Gill area is $G(m)=Am^{3/4}$ square centimetres, calibrated by $G(256)=512$, and intensity is the derived law $G(m)/m$.

**Part 1: Building the model.**

Let $m$ = body mass in grams, $G$ = gill area in square centimetres, and let intensity be area per gram. The exponent is given, so one specimen fixes the coefficient. Dividing the law by its own input subtracts one from the exponent, which drives every remaining statement.

**1. Translate: the specimen.**

$$A\\cdot256^{3/4}=512, \\qquad 256^{3/4}=64$$

**2. Translate: intensity.**

$$\\frac{G(m)}{m}=\\frac{8m^{3/4}}{m^{1}}=8m^{-1/4}$$

**Part 2: The model.**

$$G(m)=8\\,m^{3/4} \\tag{1}$$

$$\\frac{G(m)}{m}=8\\,m^{-1/4} \\tag{2}$$

**Part 3: Solve.**

**1.** The specimen gives the coefficient:

$$A=\\frac{512}{64}=8$$

**2.** Areas at the masses the statements use:

$$G(16)=64, \\qquad G(32)\\approx107.63, \\qquad G(64)\\approx181.02, \\qquad G(81)=216$$

**3.** Intensities from $(2)$ at two of those masses:

$$\\frac{64}{16}=4, \\qquad \\frac{216}{81}=\\frac{8}{3}\\approx2.667$$

**4.** The inverted target and the split-versus-merged comparison:

$$m=27^{4/3}=81, \\qquad 2G(16)=128>G(32)\\approx107.63$$

**5.** Every result follows from the exponent sitting below $1$: intensity carries the negative exponent $-1/4$ and falls with mass, and concavity means two small fish beat one merged fish of the same total mass.

**Answer.** $G(m)=8m^{3/4}$ | intensity $8m^{-1/4}$ | $G(16)/16=4$ | $216$ cm$^{2}$ at $81$ g`,
  },
  {
    id: `math-8-55`,
    case_id: `MATH 8.55`,
    title: `Curing Strength From a Timed Gap Between Samples`,
    context: `A concrete lab models early curing strength as $S(t)=A\\sqrt{t}$ megapascals, where $t>0$ is curing time in days. The log never states $A$: it only notes that strength rose by exactly $5$ MPa between day $4$ and day $9$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered curing law is $S(t)=5\\sqrt{t}$.`,
      `Strength on day $4$ is $10$ MPa and on day $9$ is $15$ MPa.`,
      `Quadrupling curing time exactly doubles strength.`,
      `Reaching $30$ MPa requires exactly $36$ days of curing.`,
      `Moving from day $4$ to day $9$ raises strength by $50\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

No single strength was recorded, only a gap between two days, and a gap is still enough because the coefficient is a common factor of both levels. Write the record as one equation:

$$S(9)-S(4)=A\\sqrt{9}-A\\sqrt{4}=A(3-2)$$

The two square roots differ by exactly $1$, so the coefficient is read off directly:

$$A\\cdot1=5 \\quad\\Rightarrow\\quad A=5, \\qquad S(t)=5\\sqrt{t}$$

Attaching the $5$ MPa to day $9$ as a level would invent an observation the log never made, and it would give the far smaller coefficient $5/3$. The difference calibration recovers $S(t)=5\\sqrt{t}$, so the statement is True.`,
      `**B.** → True

With the coefficient recovered from the gap, each logged day is evaluated by multiplying it by the square root of that day:

$$S(4)=5\\sqrt{4}=5\\cdot2=10, \\qquad S(9)=5\\sqrt{9}=5\\cdot3=15$$

The pair has to reproduce the surviving record, and it does:

$$15-10=5$$

Neither figure appears in the log itself: both are reconstructed from the single difference, which is only possible because the exponent was known in advance. Day $4$ carries $10$ MPa and day $9$ carries $15$ MPa, so the statement is True.`,
      `**C.** → True

A time multiplier reaches strength through the exponent $1/2$, so the coefficient cancels and the starting day is irrelevant:

$$\\frac{S(4t)}{S(t)}=\\frac{5\\sqrt{4t}}{5\\sqrt{t}}=\\sqrt{4}=2$$

The identity holds anywhere on the curve, not only at the logged days. Two concrete pairs make that plain:

$$S(4)=10, \\quad S(16)=5\\cdot4=20, \\qquad S(9)=15, \\quad S(36)=5\\cdot6=30$$

Each quadrupling of curing time exactly doubles the strength, which is the practical meaning of a square-root law. Quadrupling time doubles strength, so the statement is True.`,
      `**D.** → True

A target strength is inverted by dividing out the coefficient and then squaring, since squaring undoes the exponent $1/2$:

$$5\\sqrt{t}=30 \\quad\\Rightarrow\\quad \\sqrt{t}=6 \\quad\\Rightarrow\\quad t=36$$

Scaling from the reconstructed day-$9$ level reaches the same calendar day, because strength has to double and time enters as a square root:

$$\\left(\\frac{30}{15}\\right)^{2}=4, \\qquad 9\\cdot4=36$$

A forward check closes the loop, since $5\\sqrt{36}=5\\cdot6=30$ MPa. Waiting to day $36$ delivers exactly $30$ MPa, so the statement is True.`,
      `**E.** → True

A percentage change compares two levels as a ratio, and the coefficient cancels there just as it does in any pure scale calculation:

$$\\frac{S(9)}{S(4)}=\\frac{\\sqrt{9}}{\\sqrt{4}}=\\frac{3}{2}=1.5$$

Converting the ratio into a relative rise:

$$\\frac{S(9)-S(4)}{S(4)}=\\frac{5}{10}=0.5=50\\%$$

The reconstructed levels agree, since $10$ MPa growing to $15$ MPa is a gain of half the starting value. The percentage is fixed by the day ratio $9/4$ alone, so it would be the same for any lab whose curve had a different coefficient. The rise from day $4$ to day $9$ is $50\\%$, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 55,
    solution_overview: `Curing strength is $S(t)=A\\sqrt{t}$ megapascals, and the only surviving record is the $5$ MPa rise between day $4$ and day $9$.

**Part 1: Building the model.**

Let $t$ = curing time in days and $S$ = strength in megapascals. No single level was logged, so the coefficient has to come out of a difference. That works because $A$ is a common factor of every model value and the exponent $1/2$ is given in advance.

**1. Translate: the surviving record.**

$$A\\sqrt{9}-A\\sqrt{4}=5$$

**2. Translate: factor the coefficient out.** The two square roots differ by exactly one:

$$A(3-2)=5$$

**Part 2: The model.**

$$S(t)=5\\,\\sqrt{t} \\tag{1}$$

$$\\frac{S(ct)}{S(t)}=\\sqrt{c} \\tag{2}$$

**Part 3: Solve.**

**1.** The record gives the coefficient:

$$A=5$$

**2.** Levels at the two logged days, which the record must reproduce:

$$S(4)=10, \\qquad S(9)=15, \\qquad 15-10=5$$

**3.** The quadrupling multiplier from $(2)$:

$$\\sqrt{4}=2, \\qquad S(16)=20=2\\cdot S(4)$$

**4.** The inverted target and the relative rise:

$$5\\sqrt{t}=30 \\Rightarrow t=36, \\qquad \\frac{15}{10}=1.5$$

**5.** Every scale result here is coefficient free: the $50\\%$ rise and the doubling both come from the day ratio raised to the exponent $1/2$, so only the levels themselves needed the calibration. Reading the logged $5$ MPa as a level rather than as a gap would have given $A=5/3$ and understated every strength by two thirds.

**Answer.** $S(t)=5\\sqrt{t}$ | $S(4)=10$ and $S(9)=15$ | $30$ MPa on day $36$ | rise of $50\\%$ from day $4$ to day $9$`,
  },
  {
    id: `math-8-56`,
    case_id: `MATH 8.56`,
    title: `Cantilever Deflection Checked Against a Third Span`,
    context: `A materials lab models tip deflection of a cantilever as $y(L)=A L^{k}$ millimetres, where $L>0$ is the free span in metres. Two spans are trusted: $y(3)=18$ and $y(6)=72$. A third run recorded $y(9)=150$, and the question is whether that third point still sits on the same power law. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two trusted spans recover the law $y(L)=2L^{2}$.`,
      `The quadratic model predicts $y(9)=162$, so the recorded $150$ undershoots by $12$ mm.`,
      `Rescaling the coefficient to force $y(9)=150$ leaves $y(3)=18$ unchanged.`,
      `The two-point exponent fitted to $(3,18)$ and $(9,150)$ is still exactly $2$.`,
      `Under $y(L)=2L^{2}$, doubling any span multiplies deflection by $3$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Two trusted levels determine both constants, and the ratio comes first because it removes the coefficient. The span doubles from $3$ m to $6$ m while deflection quadruples:

$$\\frac{y(6)}{y(3)}=\\frac{72}{18}=4=2^{k} \\quad\\Rightarrow\\quad k=2$$

Back-substituting into the shorter trusted span recovers the coefficient:

$$A\\cdot3^{2}=18 \\quad\\Rightarrow\\quad 9A=18 \\quad\\Rightarrow\\quad A=2$$

The longer trusted span is reproduced exactly, since $2\\cdot6^{2}=72$. Both trusted runs therefore sit on the same curve, which is what makes them usable as a calibration pair. The recovered law is $y(L)=2L^{2}$, so the statement is True.`,
      `**B.** → True

The third span is a test of the calibrated model, so the prediction has to be generated from the law rather than read from the log:

$$y(9)=2\\cdot9^{2}=2\\cdot81=162$$

Comparing prediction with measurement gives the absolute discrepancy:

$$162-150=12$$

In relative terms the run falls short by $12/162=2/27\\approx7.4\\%$, which is large enough to matter for a stiffness check and small enough to look plausible at a glance. The quadratic model predicts $162$ mm and the recorded run is $12$ mm below it, so the statement is True.`,
      `**C.** → False

Forcing the curve through the third run while keeping the exponent at $2$ replaces the coefficient with a smaller one:

$$A'\\cdot9^{2}=150 \\quad\\Rightarrow\\quad A'=\\frac{150}{81}=\\frac{50}{27}\\approx1.852$$

Every predicted level moves with the coefficient, because it multiplies the whole curve:

$$y'(3)=\\frac{50}{27}\\cdot9=\\frac{50}{3}\\approx16.67, \\qquad y'(6)=\\frac{50}{27}\\cdot36=\\frac{200}{3}\\approx66.67$$

Both trusted runs are now missed, the first by about $1.33$ mm and the second by about $5.33$ mm. A coefficient change rescales every prediction uniformly by $50/54$, so no level can survive untouched, so the statement is False.`,
      `**D.** → False

Fitting an exponent to the pair $(3,18)$ and $(9,150)$ uses their own ratio, and the third run does not sit where the quadratic law expects it:

$$\\frac{150}{18}=\\frac{25}{3}\\approx8.333=3^{k}$$

An exponent of $2$ would require the ratio $3^{2}=9$, so the fitted value must land below $2$:

$$k=\\frac{\\ln(25/3)}{\\ln3}=\\frac{2.1203}{1.0986}\\approx1.930$$

The trusted pair still forces exactly $2$, since $72/18=4=2^{2}$, so the two fits disagree precisely because the third run is off the curve. The exponent fitted with the $9$ m point is about $1.930$ rather than $2$, so the statement is False.`,
      `**E.** → False

A doubling of span acts through the exponent, and the exponent recovered from the trusted pair is $2$:

$$\\frac{y(2L)}{y(L)}=\\frac{2(2L)^{2}}{2L^{2}}=2^{2}=4$$

The trusted runs are themselves an instance of that rule, since the span moves from $3$ m to $6$ m:

$$\\frac{y(6)}{y(3)}=\\frac{72}{18}=4$$

A multiplier of $3$ would belong to a different exponent, namely $\\log_{2}3\\approx1.585$, which no pair of trusted runs supports here. Doubling the span multiplies deflection by $4$ rather than by $3$, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 56,
    solution_overview: `Tip deflection is modelled as $y(L)=AL^{k}$ millimetres, with trusted runs $y(3)=18$ and $y(6)=72$ and a questionable third run $y(9)=150$.

**Part 1: Building the model.**

Let $L$ = free span in metres and $y$ = tip deflection in millimetres. Two trusted runs fix both constants: the ratio removes the coefficient and delivers the exponent, and either run then delivers the coefficient. The third run is a test of the fitted curve rather than an input to it.

**1. Translate: the trusted ratio.**

$$\\frac{72}{18}=2^{k}$$

**2. Translate: a two-point refit using the third run.**

$$\\frac{150}{18}=3^{k} \\quad\\Longleftrightarrow\\quad k=\\frac{\\ln(25/3)}{\\ln3}$$

**Part 2: The model.**

$$y(L)=2\\,L^{2} \\tag{1}$$

$$\\frac{y(cL)}{y(L)}=c^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The trusted pair fixes both constants:

$$k=2, \\qquad 9A=18 \\Rightarrow A=2$$

**2.** The prediction at the third span and its discrepancy:

$$y(9)=162, \\qquad 162-150=12$$

**3.** A coefficient rescaled to force the third run:

$$A'=\\frac{150}{81}\\approx1.852, \\qquad y'(3)\\approx16.67\\ne18$$

**4.** The refitted exponent and the doubling multiplier from $(2)$:

$$k\\approx1.930, \\qquad 2^{2}=4$$

**5.** The third run is inconsistent with the trusted pair, and no repair is free: rescaling the coefficient breaks both trusted levels, while refitting the exponent drags it below $2$.

**Answer.** $y(L)=2L^{2}$ | predicted $y(9)=162$ mm | shortfall $12$ mm | refitted exponent $\\approx1.930$ | doubling factor $4$`,
  },
  {
    id: `math-8-57`,
    case_id: `MATH 8.57`,
    title: `Mast Steel Mass Under a Finite Percentage Scale-Up`,
    context: `A self-similar mast's steel mass follows $M(h)=A h^{k}$ kilograms, where $h>0$ is mast height in metres. Design notes state that lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$, and a $10$ m reference mast uses exactly $500$ kg of steel. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The recovered mass law is $M(h)=0.5\\,h^{3}$.`,
      `A $12$ m mast uses $864$ kg of steel.`,
      `Tripling height multiplies steel mass by $27$.`,
      `A $10\\%$ height increase raises mass by exactly $33.1\\%$.`,
      `The percentage rule alone forces the coefficient $A$ without using the $10$ m reference.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A percentage rule is a statement about a ratio, so it fixes the exponent while saying nothing about the coefficient. A $20\\%$ longer mast means a height factor of $1.2$ and a mass factor of $1.728$:

$$1.2^{k}=1.728 \\quad\\Rightarrow\\quad k=3$$

The check is exact rather than numerical, since $1.2^{3}=1.728$. The reference mast then supplies the missing level, using $10^{3}=1000$:

$$1000A=500 \\quad\\Rightarrow\\quad A=0.5, \\qquad M(h)=0.5\\,h^{3}$$

Both pieces of information are needed and neither is redundant: the ratio gives the shape and the reference gives the scale. The recovered law is $M(h)=0.5h^{3}$ kilograms, so the statement is True.`,
      `**B.** → True

A $12$ m mast is the reference mast lengthened by exactly $20\\%$, so the design note itself supplies the multiplier:

$$M(12)=500\\cdot1.728=864$$

Substituting into the recovered law gives the same figure, since $12^{3}=1728$:

$$M(12)=0.5\\cdot1728=864$$

The two routes must agree, because the multiplier $1.728$ is nothing other than $1.2^{3}$ evaluated on the same cubic curve. The extra $364$ kg for two extra metres is the practical cost of an exponent of $3$. A $12$ m mast uses $864$ kg of steel, so the statement is True.`,
      `**C.** → True

Tripling the height is a pure scale question, so the coefficient cancels and only the exponent survives:

$$\\frac{M(3h)}{M(h)}=\\frac{0.5(3h)^{3}}{0.5h^{3}}=3^{3}=27$$

Levels confirm the identity from the reference mast:

$$M(30)=0.5\\cdot30^{3}=13500=27\\cdot500$$

The size of the factor is the whole point of self-similar scaling: every linear dimension grows threefold, and volume, which sets the steel requirement, grows by the cube of that. Replacing $27$ with $3$ would treat mass as if it were a length. Tripling height multiplies steel mass by $27$, so the statement is True.`,
      `**D.** → True

A $10\\%$ increase is a height factor of $1.1$, and under a cubic law the mass factor is that number cubed:

$$1.1^{3}=1.331$$

Subtracting one converts the multiplier into a percentage rise:

$$\\frac{M(1.1h)-M(h)}{M(h)}=1.331-1=0.331=33.1\\%$$

The reference mast makes the figure concrete, since an $11$ m mast needs $M(11)=0.5\\cdot1331=665.5$ kg against $500$ kg, a gain of $165.5$ kg on $500$. Tripling the percentage rise from a $10\\%$ stretch to roughly $33\\%$ is the same effect that turned $20\\%$ into $72.8\\%$. The rise is exactly $33.1\\%$, so the statement is True.`,
      `**E.** → False

The percentage rule is built from a quotient, and a quotient of two values of the same power law loses the coefficient completely:

$$\\frac{M(1.2h)}{M(h)}=\\frac{A(1.2h)^{k}}{Ah^{k}}=1.2^{k}$$

Every member of the family $M(h)=Ah^{3}$ satisfies the design note equally well, whatever positive value $A$ takes:

$$M_{1}(h)=0.5h^{3}, \\qquad M_{2}(h)=7h^{3}, \\qquad \\frac{M_{2}(1.2h)}{M_{2}(h)}=1.728$$

Only a level observation breaks the tie, and the $10$ m reference mast is the one available. Scale information cannot substitute for level information, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 57,
    solution_overview: `Steel mass is $M(h)=Ah^{k}$ kilograms, a $20\\%$ taller mast needs $72.8\\%$ more steel, and the $10$ m reference mast uses $500$ kg.

**Part 1: Building the model.**

Let $h$ = mast height in metres and $M$ = steel mass in kilograms. The two given facts do different jobs: a percentage rule is a ratio and fixes only the exponent, while the reference mast is a level and fixes only the coefficient. Both are needed to write the model.

**1. Translate: the percentage rule.** A $20\\%$ stretch is a factor of $1.2$ and a $72.8\\%$ rise is a factor of $1.728$:

$$1.2^{k}=1.728$$

**2. Translate: the reference mast.**

$$A\\cdot10^{3}=500$$

**Part 2: The model.**

$$M(h)=0.5\\,h^{3} \\tag{1}$$

$$\\frac{M(ch)}{M(h)}=c^{3} \\tag{2}$$

**Part 3: Solve.**

**1.** The ratio gives the exponent, exactly rather than approximately:

$$1.2^{3}=1.728 \\quad\\Rightarrow\\quad k=3$$

**2.** The reference mast gives the coefficient:

$$1000A=500 \\quad\\Rightarrow\\quad A=0.5$$

**3.** Levels at the heights the statements use:

$$M(11)=665.5, \\qquad M(12)=864, \\qquad M(30)=13500$$

**4.** Multipliers from $(2)$ for the two stretches named:

$$1.1^{3}=1.331, \\qquad 3^{3}=27$$

**5.** The percentage rule holds for every coefficient, since $A$ cancels in $(2)$, so the family $M(h)=Ah^{3}$ stays one parameter free until the $500$ kg reference selects $A=0.5$.

**Answer.** $M(h)=0.5h^{3}$ kg | $M(12)=864$ kg | tripling multiplies mass by $27$ | a $10\\%$ stretch adds $33.1\\%$`,
  },
  {
    id: `math-8-58`,
    case_id: `MATH 8.58`,
    title: `Cooling Fan Noise Against a Night-Time Cap`,
    context: `Acoustic intensity from a cooling fan follows $I(d)=A d^{-2}$ watts per square metre, where $d>0$ is distance from the hub in metres. A meter reading at $2$ metres records $0.72$ W/m². Night operations are capped at $0.08$ W/m². Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The intensity law is $I(d)=1.44 d^{-2}$.`,
      `At $6$ metres the intensity is still above the $0.08$ W/m² night cap.`,
      `Doubling the distance cuts intensity to one quarter.`,
      `Moving from $2$ to $3$ metres cuts intensity by exactly $0.50$ W/m².`,
      `Intensity per metre of distance is the same at every distance.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

The exponent is given as $-2$, so the meter reading recovers the coefficient by multiplying the observed intensity by the square of the distance:

$$\\frac{A}{2^{2}}=0.72 \\quad\\Rightarrow\\quad \\frac{A}{4}=0.72 \\quad\\Rightarrow\\quad A=2.88$$

The stated coefficient fails that same reading by a factor of two:

$$\\frac{1.44}{4}=0.36\\ne0.72$$

The number $1.44$ is what appears when the reading is multiplied by the distance rather than by its square, a slip that shows up whenever an inverse-square law is treated as an inverse-first-power law. The recovered coefficient is $2.88$, so the statement is False.`,
      `**B.** → False

A cap on intensity becomes a distance question once the law is inverted, so solve for the distance at which the fan just meets the night limit:

$$\\frac{2.88}{d^{2}}=0.08 \\quad\\Rightarrow\\quad d^{2}=\\frac{2.88}{0.08}=36 \\quad\\Rightarrow\\quad d=6$$

Evaluating the law at six metres shows equality rather than an excess:

$$I(6)=\\frac{2.88}{36}=0.08$$

Since the exponent is negative, intensity keeps falling with distance, so six metres is exactly the boundary and any greater distance sits below the cap. The reading at $6$ metres equals the cap instead of exceeding it, so the statement is False.`,
      `**C.** → True

A pure scale factor for an inverse-square law involves the exponent alone, because the coefficient and the starting distance both cancel:

$$\\frac{I(2d)}{I(d)}=\\frac{A(2d)^{-2}}{Ad^{-2}}=2^{-2}=\\frac{1}{4}$$

Levels taken from the meter reading show the same quartering:

$$I(2)=0.72, \\qquad I(4)=\\frac{2.88}{16}=0.18=\\frac{0.72}{4}$$

The identity holds at any starting point, so moving from $3$ metres to $6$ metres also quarters the reading, from $0.32$ to $0.08$ W/m². Doubling the distance cuts intensity to one quarter, so the statement is True.`,
      `**D.** → False

An absolute drop has to be computed from two levels, because only ratios are shortcut friendly on a power law. Evaluate both distances:

$$I(2)=0.72, \\qquad I(3)=\\frac{2.88}{9}=0.32$$

Subtract to get the loss over that one metre:

$$0.72-0.32=0.40$$

The stated $0.50$ W/m² would require a constant drop per metre, which an inverse-square law never produces: the next metre out, from $3$ to $4$, costs only $0.32-0.18=0.14$ W/m². The move from $2$ to $3$ metres costs $0.40$ W/m², so the statement is False.`,
      `**E.** → False

Intensity per metre of distance is the derived quantity $I(d)/d$, and dividing a power by $d$ subtracts one more from the exponent:

$$\\frac{I(d)}{d}=\\frac{2.88d^{-2}}{d}=2.88\\,d^{-3}$$

The leftover exponent $-3$ is negative, so the ratio falls steeply rather than holding steady. Two distances make that visible:

$$\\frac{I(2)}{2}=0.36, \\qquad \\frac{I(3)}{3}\\approx0.1067$$

The per-metre figure has lost about $70\\%$ of its value over a single metre, which is what a cubic decay does. Intensity per metre is not constant, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 58,
    solution_overview: `Fan intensity is $I(d)=Ad^{-2}$ watts per square metre, calibrated by $I(2)=0.72$, and night work is capped at $0.08$.

**Part 1: Building the model.**

Let $d$ = distance from the hub in metres and $I$ = acoustic intensity in watts per square metre. The exponent $-2$ is given, so one meter reading fixes the coefficient. Because the exponent is negative, intensity falls with distance and the night cap becomes a minimum standing distance.

**1. Translate: the meter reading.**

$$\\frac{A}{2^{2}}=0.72$$

**2. Translate: the night cap.** A ceiling on intensity inverts into a floor on distance:

$$\\frac{A}{d^{2}}\\le0.08 \\quad\\Longleftrightarrow\\quad d\\ge\\sqrt{\\frac{A}{0.08}}$$

**Part 2: The model.**

$$I(d)=\\frac{2.88}{d^{2}} \\tag{1}$$

$$\\frac{I(d)}{d}=2.88\\,d^{-3} \\tag{2}$$

**Part 3: Solve.**

**1.** The reading gives the coefficient:

$$A=0.72\\cdot4=2.88$$

**2.** The cap distance, inverted from $(1)$:

$$d^{2}=36 \\quad\\Rightarrow\\quad d=6, \\qquad I(6)=0.08$$

**3.** Levels at the distances the statements use:

$$I(3)=0.32, \\qquad I(4)=0.18$$

**4.** The doubling factor and the one-metre loss:

$$\\frac{I(2d)}{I(d)}=\\frac{1}{4}, \\qquad I(2)-I(3)=0.40$$

**5.** Ratios behave simply and differences do not: doubling always quarters the reading, while the loss per metre shrinks from $0.40$ to $0.14$ W/m² between successive metres, and the per-metre ratio in $(2)$ decays as $d^{-3}$.

**Answer.** $I(d)=2.88d^{-2}$ | cap met at $d=6$ m | doubling factor $1/4$ | loss from $2$ to $3$ m is $0.40$ W/m²`,
  },
  {
    id: `math-8-59`,
    case_id: `MATH 8.59`,
    title: `Pump Head Composed Through a Square Flow Law`,
    context: `A booster pump's differential head follows $H(q)=A q^{2}$ metres when the delivered flow is $q>0$ cubic metres per hour. A commissioning run at $q=5$ recorded $H=50$ m. The plant then pipes that flow through a nozzle whose jet speed is $v(H)=4\\sqrt{H}$ metres per second, so jet speed as a function of flow is the composition $v(q)=v(H(q))$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The head law is $H(q)=2q^{2}$, and the composed jet-speed law is $v(q)=4\\sqrt{2}\\,q$.`,
      `At $q=5$ the jet speed is $20\\sqrt{2}$ m/s.`,
      `Doubling the flow doubles the jet speed.`,
      `A jet speed of $40\\sqrt{2}$ m/s requires flow $20$ m³/h.`,
      `Head is proportional to jet speed.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The commissioning run calibrates the first stage on its own, since the exponent $2$ is given:

$$A\\cdot5^{2}=50 \\quad\\Rightarrow\\quad 25A=50 \\quad\\Rightarrow\\quad A=2, \\qquad H(q)=2q^{2}$$

Composition then substitutes the head law inside the nozzle law, and the square root pulls the flow out of the square:

$$v(q)=4\\sqrt{2q^{2}}=4\\sqrt{2}\\,\\sqrt{q^{2}}=4\\sqrt{2}\\,q$$

The absolute value is unnecessary because flow is positive. The exponents explain the shape of the result, since the inner $2$ and the outer $1/2$ multiply to $1$:

$$2\\cdot\\frac{1}{2}=1$$

Both the head law and the composed linear law match the statement, so the statement is True.`,
      `**B.** → True

A composition can be evaluated stage by stage or through the simplified law, and the two routes must agree. Passing through the intermediate head first:

$$H(5)=2\\cdot25=50, \\qquad v=4\\sqrt{50}=4\\cdot5\\sqrt{2}=20\\sqrt{2}$$

Using the composed law directly:

$$v(5)=4\\sqrt{2}\\cdot5=20\\sqrt{2}$$

Numerically that is about $28.28$ m/s, since $\\sqrt{2}\\approx1.4142$. The agreement is a check on the composition itself, because an error in collecting the constants would show up as a mismatch between the two routes. Jet speed at the commissioning flow is $20\\sqrt{2}$ m/s, so the statement is True.`,
      `**C.** → True

The composed map has exponent $1$, so a flow multiplier passes straight through to jet speed:

$$\\frac{v(2q)}{v(q)}=\\frac{4\\sqrt{2}\\,(2q)}{4\\sqrt{2}\\,q}=2$$

Tracking the two stages separately shows why the exponents conspire. Head quadruples, and the nozzle then takes a square root of that:

$$\\frac{H(2q)}{H(q)}=2^{2}=4, \\qquad \\sqrt{4}=2$$

Levels confirm it, since raising the flow from $5$ to $10$ lifts head from $50$ m to $200$ m and jet speed from $20\\sqrt{2}$ to $40\\sqrt{2}$ m/s. Doubling the flow doubles the jet speed, so the statement is True.`,
      `**D.** → False

Inverting a linear composed law is a single division by its slope:

$$4\\sqrt{2}\\,q=40\\sqrt{2} \\quad\\Rightarrow\\quad q=\\frac{40\\sqrt{2}}{4\\sqrt{2}}=10$$

Working back through the stages gives the same flow. The required head follows from the nozzle law, and then the head law is inverted:

$$H=\\left(\\frac{40\\sqrt{2}}{4}\\right)^{2}=200, \\qquad 2q^{2}=200 \\quad\\Rightarrow\\quad q=10$$

A flow of $20$ m³/h would deliver $v=80\\sqrt{2}$ m/s, twice the target, which is what treating speed as proportional to head rather than to its square root produces. The target speed needs $10$ m³/h, so the statement is False.`,
      `**E.** → False

Proportionality between head and jet speed would mean a constant quotient, so eliminate the flow and inspect the relation directly:

$$q=\\frac{v}{4\\sqrt{2}}, \\qquad H=2\\left(\\frac{v}{4\\sqrt{2}}\\right)^{2}=\\frac{2v^{2}}{32}=\\frac{v^{2}}{16}$$

Head therefore rises with the square of jet speed, so the quotient keeps growing:

$$\\frac{H}{v}=\\frac{v}{16}$$

The commissioning point and its double show the gap plainly: at $v=20\\sqrt{2}$ the head is $50$ m, and at $v=40\\sqrt{2}$ it is $200$ m, four times as much for twice the speed. Head is quadratic in jet speed rather than proportional to it, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 59,
    solution_overview: `Head is $H(q)=Aq^{2}$ metres with $H(5)=50$, jet speed is $v(H)=4\\sqrt{H}$ metres per second, and the composition sends flow straight to speed.

**Part 1: Building the model.**

Let $q$ = flow in cubic metres per hour, $H$ = differential head in metres, $v$ = jet speed in metres per second. The pump stage is calibrated from the commissioning run, the nozzle stage is given outright, and composing them multiplies the exponents rather than adding the effects.

**1. Translate: the commissioning run.**

$$A\\cdot5^{2}=50$$

**2. Translate: the composition.** Substituting the head law inside the nozzle law pulls the flow out of the square root:

$$v(q)=4\\sqrt{2q^{2}}, \\qquad 2\\cdot\\tfrac{1}{2}=1$$

**Part 2: The model.**

$$H(q)=2\\,q^{2} \\tag{1}$$

$$v(q)=4\\sqrt{2}\\,q \\tag{2}$$

**Part 3: Solve.**

**1.** The commissioning run gives the head coefficient:

$$25A=50 \\quad\\Rightarrow\\quad A=2$$

**2.** Jet speed at the commissioning flow, by either route:

$$v(5)=4\\sqrt{50}=20\\sqrt{2}\\approx28.28$$

**3.** The doubling identity, from the composed exponent $1$ in $(2)$:

$$\\frac{v(2q)}{v(q)}=2, \\qquad \\frac{H(2q)}{H(q)}=4$$

**4.** The inverted speed target:

$$4\\sqrt{2}\\,q=40\\sqrt{2} \\quad\\Rightarrow\\quad q=10$$

**5.** Eliminating the flow between $(1)$ and $(2)$ gives $H=v^{2}/16$, so head is quadratic in speed even though speed is linear in flow.

**Answer.** $H(q)=2q^{2}$ | $v(q)=4\\sqrt{2}\\,q$ | $v(5)=20\\sqrt{2}$ m/s | $40\\sqrt{2}$ m/s needs $q=10$ | $H=v^{2}/16$`,
  },
  {
    id: `math-8-60`,
    case_id: `MATH 8.60`,
    title: `Warehouse Forklift Throughput Under a Staffing Cap`,
    context: `Forklift throughput follows $T(s)=A s^{0.5}$ pallets per hour, where $s>0$ is the number of drivers on shift. A logged shift with $16$ drivers moved $80$ pallets per hour. Safety rules cap the shift at $36$ drivers. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The throughput law is $T(s)=20\\sqrt{s}$.`,
      `With $36$ drivers the model predicts $120$ pallets per hour.`,
      `Quadrupling the crew doubles throughput.`,
      `Reaching $100$ pallets per hour requires $25$ drivers.`,
      `The safety cap therefore allows at most $120$ pallets per hour.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The exponent $0.5$ is supplied by the model, so one logged shift fixes the coefficient. Evaluate the shape factor first, since $16^{0.5}=4$:

$$A\\cdot4=80 \\quad\\Rightarrow\\quad A=20, \\qquad T(s)=20\\sqrt{s}$$

Substituting the logged crew back reproduces the record exactly:

$$T(16)=20\\cdot4=80$$

Reading the $80$ pallets per hour as the coefficient would ignore the shape factor $4$ and quadruple every prediction, putting a $36$ driver shift at $480$ pallets per hour instead of a realistic figure. The recovered law is $T(s)=20\\sqrt{s}$, so the statement is True.`,
      `**B.** → True

The capped crew is evaluated by substitution, taking the square root first because $36=6^{2}$:

$$T(36)=20\\sqrt{36}=20\\cdot6=120$$

Scaling from the logged shift confirms the figure, since the crew grows by a factor of $36/16=9/4$ and that factor reaches throughput through the exponent $0.5$:

$$80\\cdot\\sqrt{\\frac{9}{4}}=80\\cdot\\frac{3}{2}=120$$

The comparison is worth reading closely: adding twenty drivers to the logged shift, more than doubling the crew, lifts output by only half. A full crew of $36$ moves $120$ pallets per hour, so the statement is True.`,
      `**C.** → True

A crew multiplier reaches throughput through the exponent $0.5$, so the coefficient cancels and the starting crew is irrelevant:

$$\\frac{T(4s)}{T(s)}=\\frac{20\\sqrt{4s}}{20\\sqrt{s}}=\\sqrt{4}=2$$

Levels show the same doubling from the logged shift:

$$T(16)=80, \\qquad T(64)=20\\cdot8=160$$

The identity holds anywhere on the curve, so a crew of $4$ moving $40$ pallets per hour and a crew of $16$ moving $80$ are another instance of it. Quadrupling the crew doubles throughput, so the statement is True.`,
      `**D.** → True

A throughput target is inverted by dividing out the coefficient and then squaring, since squaring undoes the exponent $0.5$:

$$20\\sqrt{s}=100 \\quad\\Rightarrow\\quad \\sqrt{s}=5 \\quad\\Rightarrow\\quad s=25$$

Ratio reasoning from the logged shift reaches the same crew, because throughput has to rise by a factor of $100/80=5/4$ and crew size enters as a square:

$$16\\cdot\\left(\\frac{5}{4}\\right)^{2}=16\\cdot\\frac{25}{16}=25$$

A forward check closes the loop, since $20\\sqrt{25}=20\\cdot5=100$ pallets per hour, and $25$ drivers stays inside the safety cap. Reaching $100$ pallets per hour needs $25$ drivers, so the statement is True.`,
      `**E.** → True

The exponent $0.5$ is positive, so throughput increases with crew size and the largest allowed crew produces the largest allowed output:

$$s_{1}<s_{2} \\quad\\Rightarrow\\quad 20\\sqrt{s_{1}}<20\\sqrt{s_{2}}$$

The safety cap therefore transfers directly onto throughput, and the ceiling is the value at the capped crew:

$$\\max_{0<s\\le36}T(s)=T(36)=20\\cdot6=120$$

Any output above that would need more than $36$ drivers: $150$ pallets per hour would require $s=(150/20)^{2}=56.25$, well outside the rule. The staffing cap allows at most $120$ pallets per hour, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 60,
    solution_overview: `Forklift throughput is $T(s)=As^{0.5}$ pallets per hour, calibrated by $T(16)=80$, and safety rules cap the shift at $36$ drivers.

**Part 1: Building the model.**

Let $s$ = drivers on shift and $T$ = pallets moved per hour. The exponent $0.5$ is given, so one logged shift fixes the coefficient. The exponent is positive but below $1$, so more drivers always help, yet each extra driver helps less than the one before.

**1. Translate: the logged shift.**

$$A\\cdot16^{0.5}=80, \\qquad 16^{0.5}=4$$

**2. Translate: a throughput target.** Inverting the law squares the required ratio:

$$20\\sqrt{s}=T \\quad\\Longleftrightarrow\\quad s=\\left(\\frac{T}{20}\\right)^{2}$$

**Part 2: The model.**

$$T(s)=20\\,\\sqrt{s} \\tag{1}$$

$$\\frac{T(cs)}{T(s)}=\\sqrt{c} \\tag{2}$$

**Part 3: Solve.**

**1.** The logged shift gives the coefficient:

$$A=\\frac{80}{4}=20$$

**2.** Throughput at the crew sizes the statements use:

$$T(25)=100, \\qquad T(36)=120, \\qquad T(64)=160$$

**3.** The quadrupling multiplier from $(2)$:

$$\\sqrt{4}=2, \\qquad T(64)=2\\cdot T(16)$$

**4.** The inverted target and the binding cap:

$$s=\\left(\\frac{100}{20}\\right)^{2}=25, \\qquad \\max_{0<s\\le36}T(s)=120$$

**5.** Because throughput rises with crew size, the staffing cap converts straight into an output ceiling, and the square root explains why more than doubling the logged crew adds only half again as many pallets.

**Answer.** $T(s)=20\\sqrt{s}$ | $T(36)=120$ | quadrupling doubles throughput | $100$ pallets need $25$ drivers | ceiling $120$ pallets per hour`,
  },
  {
    id: `math-8-61`,
    case_id: `MATH 8.61`,
    title: `Subscriber Demand and Revenue for a Streaming Tier`,
    context: `A streaming service prices one subscription tier at $p$ euros per month and models paid subscribers by $q(p)=Ap^{-3/2}$, measured in thousands. At the current price of $4$ the tier holds $250$ thousand subscribers. Monthly revenue for the tier is $R=pq$, also measured in thousands of euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient in the demand model is $A=2000$.`,
      `Doubling the subscription price halves the number of subscribers.`,
      `At a price of $16$, monthly revenue for the tier is $500$.`,
      `Revenue is a power function of price with exponent $-1/2$.`,
      `Raising the price by $21\\%$ reduces revenue by about $21\\%$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The exponent is supplied by the model, so one observed price and quantity pair is enough to pin the coefficient. Substitute the current price into the demand rule:

$$q(4)=A\\cdot4^{-3/2}$$

Evaluate the power by taking the square root first and then cubing, since $4^{3/2}=(\\sqrt{4})^{3}=8$:

$$4^{-3/2}=\\frac{1}{8}$$

The observation therefore reads

$$\\frac{A}{8}=250$$

$$A=250\\times8=2000$$

The calibrated demand rule is $q(p)=2000p^{-3/2}$, and it reproduces the observation, because $2000/8=250$ thousand subscribers at a price of $4$. The coefficient named in the claim agrees with the recovered value, so the statement is True.`,
      `**B.** → False

A price doubling is an input multiplier of $k=2$, and in a power model the output multiplier is that factor raised to the exponent:

$$\\frac{q(2p)}{q(p)}=2^{-3/2}$$

$$2^{-3/2}=\\frac{1}{2\\sqrt{2}}\\approx0.35355$$

Only about $35.4\\%$ of the subscribers remain, which is a loss of roughly $64.6\\%$ rather than the $50\\%$ asserted. Working in levels gives the same picture. Starting from $q(4)=250$ thousand and moving to a price of $8$:

$$q(8)=\\frac{2000}{8^{3/2}}=\\frac{2000}{22.6274}\\approx88.39$$

Half of $250$ would be $125$ thousand, and the model gives roughly $88$ thousand instead. The loss is steeper than halving because the exponent has magnitude $3/2$ rather than $1$, so the statement is False.`,
      `**C.** → True

Revenue is price times quantity, so multiply the calibrated demand rule by $p$, which adds one to the exponent:

$$R(p)=p\\cdot2000p^{-3/2}=2000p^{-1/2}$$

Evaluate at the quoted price, using $16^{1/2}=4$:

$$R(16)=\\frac{2000}{4}=500$$

The two factors computed separately agree with that figure. Subscribers at the same price are

$$q(16)=\\frac{2000}{16^{3/2}}=\\frac{2000}{64}=31.25$$

and multiplying by the price gives $16\\times31.25=500$ thousand euros per month. Both routes land on the same revenue level, so the statement is True.`,
      `**D.** → True

Revenue inherits its exponent from demand, raised by one, because the extra factor of $p$ is itself a power with exponent $1$:

$$R(p)=p^{1}\\cdot2000p^{-3/2}=2000p^{\\,1-3/2}=2000p^{-1/2}$$

Comparing with the general form $Ap^{r}$ gives coefficient $2000$ and exponent $-1/2$, which is what the claim states. The scaling behaviour confirms the exponent, since quadrupling the price should multiply revenue by $4^{-1/2}$:

$$\\frac{R(4p)}{R(p)}=4^{-1/2}=\\frac{1}{2}$$

Levels agree, because $R(4)=1000$ and $R(16)=500$. The exponent is negative, which is the formal way of saying that this tier loses revenue whenever its price rises. so the statement is True.`,
      `**E.** → False

A rise of $21\\%$ is a price multiplier of $1.21$, and it acts on revenue through the revenue exponent $-1/2$, not through the demand exponent:

$$\\frac{R(1.21p)}{R(p)}=1.21^{-1/2}$$

Since $1.21=1.1^{2}$, the square root is exact:

$$1.21^{-1/2}=\\frac{1}{1.1}\\approx0.90909$$

Revenue keeps about $90.9\\%$ of its former level, a fall of roughly $9.1\\%$ rather than $21\\%$. Levels confirm the size of the effect, starting from $R(4)=1000$ and moving to a price of $4.84$:

$$R(4.84)=\\frac{2000}{2.2}\\approx909.09$$

The loss is about $91$ thousand euros on a base of $1000$ thousand. The claim overstates the damage by a wide margin, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 61,
    solution_overview: `Demand is $q(p)=Ap^{-3/2}$ with $q(4)=250$ thousand subscribers, and revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros per month, $q$ = subscribers in thousands, $R$ = revenue in thousands of euros. The isoelastic form fixes the exponent, the observed pair fixes the coefficient, and revenue follows by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A\\cdot4^{-3/2}=250, \\qquad 4^{-3/2}=\\frac{1}{8}$$

**2. Translate: a price multiplier.** A rise by a factor $k$ reaches quantity and revenue through different exponents:

$$\\frac{q(kp)}{q(p)}=k^{-3/2}, \\qquad \\frac{R(kp)}{R(p)}=k^{-1/2}$$

**Part 2: The model.**

$$q(p)=2000\\,p^{-3/2} \\tag{1}$$

$$R(p)=2000\\,p^{-1/2} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=250\\times8=2000$$

**2.** Levels at the current price:

$$q(4)=250, \\qquad R(4)=1000$$

**3.** Levels at the quoted price of $16$:

$$q(16)=\\frac{2000}{64}=31.25, \\qquad R(16)=\\frac{2000}{4}=500$$

**4.** Multipliers for the two changes the statements ask about:

$$2^{-3/2}\\approx0.35355, \\qquad 1.21^{-1/2}=\\frac{1}{1.1}\\approx0.90909$$

**5.** Doubling the price removes about $64.6\\%$ of subscribers, well past a halving, while a rise of $21\\%$ costs only about $9.1\\%$ of revenue. Both effects point the same way, since the revenue exponent $-1/2$ is negative.

**Answer.** $A=2000$ | $R(p)=2000p^{-1/2}$ | $R(16)=500$`,
  },
  {
    id: `math-8-62`,
    case_id: `MATH 8.62`,
    title: `Fixed Retainer Plus a Square-Root Monitoring Fee`,
    context: `A compliance-monitoring platform bills a client $C(n)=400+30n^{1/2}$ euros per month, where $n\\ge1$ is the number of branches under monitoring. The first term is a fixed retainer and the second term is the variable monitoring charge. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Monitoring $100$ branches costs $700$ euros per month.`,
      `At $n=400$ the variable monitoring charge is $600$ euros.`,
      `Raising the branch count from $100$ to $400$ doubles the variable monitoring charge.`,
      `At $n=100$ the average monthly cost per branch is $7$ euros.`,
      `Monitoring $900$ branches costs $1300$ euros per month.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The bill splits into a piece that never moves and a piece that grows with the square root of the branch count. Evaluate the variable term at the stated size:

$$30\\cdot100^{1/2}=30\\cdot10=300$$

Add the retainer, which does not depend on $n$:

$$C(100)=400+300=700$$

The square root is what keeps the variable piece modest. Ten branches would carry a monitoring charge of about $30\\sqrt{10}\\approx94.87$ euros, so a hundredfold jump in branches multiplies that charge by only about ten. The model returns $700$ euros per month at a hundred branches, matching the figure in the claim, so the statement is True.`,
      `**B.** → True

The variable monitoring charge is the second term on its own, evaluated at the stated branch count. Take the square root first:

$$400^{1/2}=20$$

Then apply the rate:

$$30\\cdot400^{1/2}=30\\cdot20=600$$

The retainer sits outside this calculation, so the full bill at four hundred branches is

$$C(400)=400+600=1000$$

of which $600$ euros is the variable component and $400$ euros is the fixed retainer. The claim asks only about the variable piece and names exactly that figure, so the statement is True.`,
      `**C.** → True

Only the variable term responds to the branch count, and it is a power function with exponent $1/2$. The branch count is multiplied by

$$\\frac{400}{100}=4$$

so the variable charge is multiplied by that factor raised to the exponent:

$$4^{1/2}=2$$

Checking the two levels directly confirms the doubling:

$$30\\cdot100^{1/2}=300, \\qquad 30\\cdot400^{1/2}=600$$

The rate of $30$ cancels out of the ratio, so the multiplier depends only on the branch factor and the exponent. Quadrupling the branch count doubles the variable charge, so the statement is True.`,
      `**D.** → True

Average cost per branch is the whole bill divided by the number of branches:

$$\\frac{C(n)}{n}=\\frac{400}{n}+\\frac{30}{n^{1/2}}$$

At the stated size the bill is $C(100)=400+300=700$ euros, so

$$\\frac{C(100)}{100}=\\frac{700}{100}=7$$

The split form gives the same answer, since $400/100=4$ euros of retainer per branch plus $30/10=3$ euros of monitoring per branch. Both pieces of the average fall as the client adds branches, which is why a larger network pays less per branch. The average at a hundred branches is exactly $7$ euros, so the statement is True.`,
      `**E.** → True

The same two-part rule applies at the larger size. Evaluate the square root first, since $900=30^{2}$:

$$900^{1/2}=30$$

The variable charge is therefore

$$30\\cdot30=900$$

and the full bill adds the fixed retainer:

$$C(900)=400+900=1300$$

The jump from four hundred to nine hundred branches raises the variable charge from $600$ to $900$ euros, a multiplier of $1.5$, which is exactly $(900/400)^{1/2}=(2.25)^{1/2}$. The quoted monthly total of $1300$ euros matches the model, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 62,
    solution_overview: `The monthly bill is $C(n)=400+30n^{1/2}$ euros for $n$ monitored branches.

**Part 1: Building the model.**

Let $n$ = branches under monitoring, $C$ = monthly bill in euros. The bill is a sum of two parts with very different behaviour: a constant retainer that ignores $n$ entirely, and a power term with coefficient $30$ and exponent $1/2$.

**1. Translate: the fixed part.** The retainer contributes the same $400$ euros at every branch count.

**2. Translate: the variable part.** The monitoring charge scales as a square root, so multiplying the branch count by $k$ multiplies that charge by $k^{1/2}$:

$$\\frac{30(kn)^{1/2}}{30n^{1/2}}=k^{1/2}$$

**Part 2: The model.**

$$C(n)=400+30\\,n^{1/2} \\tag{1}$$

$$\\frac{C(n)}{n}=\\frac{400}{n}+\\frac{30}{n^{1/2}} \\tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the sizes the statements use:

$$100^{1/2}=10, \\qquad 400^{1/2}=20, \\qquad 900^{1/2}=30$$

**2.** Variable charges at those sizes:

$$300, \\qquad 600, \\qquad 900$$

**3.** Full bills, adding the retainer to each:

$$C(100)=700, \\qquad C(400)=1000, \\qquad C(900)=1300$$

**4.** Average cost per branch at a hundred branches:

$$\\frac{700}{100}=7$$

**5.** Quadrupling the branch count from $100$ to $400$ multiplies the variable charge by $4^{1/2}=2$, so the charge doubles while the retainer stays put. Because both terms of the average shrink as $n$ grows, larger networks always pay less per branch.

**Answer.** $C(100)=700$ | $C(400)=1000$ | $C(900)=1300$ | average per branch at $100$ is $7$`,
  },
  {
    id: `math-8-63`,
    case_id: `MATH 8.63`,
    title: `Ordering Cost Against Holding Cost at a Spare-Parts Depot`,
    context: `A spare-parts depot reorders one component in batches of $q>0$ units. Annual ordering cost is $O(q)=4800q^{-1}$ euros and annual holding cost is $H(q)=3q$ euros, so the annual total is $T(q)=4800q^{-1}+3q$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two cost components are equal at $q=40$, where each equals $120$ euros.`,
      `Annual total cost is minimized at $q=60$.`,
      `Doubling the batch size from $40$ to $80$ leaves the annual total unchanged.`,
      `Cutting the batch size from $40$ to $20$ raises the annual total by exactly as much as raising it from $40$ to $80$.`,
      `Ordering cost exceeds holding cost for every batch size above $40$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Setting the falling component equal to the rising one turns the comparison into a single equation:

$$\\frac{4800}{q}=3q$$

Multiply both sides by $q$, which is legitimate because the depot orders positive batches:

$$4800=3q^{2}$$

$$q^{2}=1600$$

$$q=40$$

The negative root $q=-40$ is outside the domain. Evaluate each component at the crossing point:

$$O(40)=\\frac{4800}{40}=120, \\qquad H(40)=3\\cdot40=120$$

Both components sit at $120$ euros a year, giving an annual total of $240$ euros. The batch size and the common value in the claim both match, so the statement is True.`,
      `**B.** → False

The falling ordering term and the rising holding term trade off, and the minimum occurs where their rates of change cancel:

$$T'(q)=-4800q^{-2}+3$$

$$-\\frac{4800}{q^{2}}+3=0$$

$$q^{2}=1600 \\quad \\Rightarrow \\quad q=40$$

The stationary point is a minimum, since $T''(q)=9600q^{-3}>0$ for positive batches. Comparing the two candidate batch sizes in levels settles it:

$$T(40)=120+120=240$$

$$T(60)=\\frac{4800}{60}+3\\cdot60=80+180=260$$

A batch of $60$ costs $20$ euros a year more than the optimum, so the named minimizer is wrong so the statement is False.`,
      `**C.** → False

Doubling the batch halves the ordering term and doubles the holding term, and those two effects do not cancel because the components are not symmetric in size at the new point. Evaluate both parts at the larger batch:

$$O(80)=\\frac{4800}{80}=60, \\qquad H(80)=3\\cdot80=240$$

$$T(80)=60+240=300$$

Compare with the starting point:

$$T(40)=120+120=240$$

The annual total rises by $60$ euros rather than staying flat. Ordering cost drops by $60$ euros while holding cost climbs by $120$ euros, and the larger increase wins. The total is not preserved, so the statement is False.`,
      `**D.** → True

The total is unchanged when the two components swap roles, because the product of the two batch sizes matters rather than their difference. Replace $q$ by $1600/q$:

$$T\\!\\left(\\frac{1600}{q}\\right)=\\frac{4800q}{1600}+\\frac{3\\cdot1600}{q}=3q+\\frac{4800}{q}=T(q)$$

Since $20\\times80=1600$, the batches $20$ and $80$ are exactly such a pair. Check both in levels:

$$T(20)=\\frac{4800}{20}+3\\cdot20=240+60=300$$

$$T(80)=\\frac{4800}{80}+3\\cdot80=60+240=300$$

Each sits $300-240=60$ euros above the optimum of $T(40)=240$. Halving and doubling the batch cost the depot the same amount, so the statement is True.`,
      `**E.** → False

Above the crossing point the ranking runs the other way, because the ordering term keeps falling while the holding term keeps rising. Compare the components at a larger batch:

$$O(80)=\\frac{4800}{80}=60, \\qquad H(80)=3\\cdot80=240$$

Holding cost is four times ordering cost there. In general, for $q>40$,

$$\\frac{O(q)}{H(q)}=\\frac{4800}{3q^{2}}=\\frac{1600}{q^{2}}<1$$

so ordering cost is the smaller of the two whenever the batch exceeds $40$. The claim describes what happens below the crossing point, where small batches force frequent reordering. Above it the inequality reverses, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 63,
    solution_overview: `Annual cost splits into $O(q)=4800q^{-1}$ for ordering and $H(q)=3q$ for holding, with total $T(q)=4800q^{-1}+3q$.

**Part 1: Building the model.**

Let $q$ = units per batch, $O$ = annual ordering cost, $H$ = annual holding cost, $T$ = annual total. One term is a power with exponent $-1$ and one is a power with exponent $1$, so the total falls at small batches and rises at large ones.

**1. Translate: equal components.**

$$\\frac{4800}{q}=3q$$

**2. Translate: the cheapest batch.**

$$T'(q)=-4800q^{-2}+3=0$$

**Part 2: The model.**

$$T(q)=\\frac{4800}{q}+3q \\tag{1}$$

$$T\\!\\left(\\frac{1600}{q}\\right)=T(q) \\tag{2}$$

**Part 3: Solve.**

**1.** Both conditions collapse to the same equation:

$$q^{2}=1600 \\quad \\Rightarrow \\quad q=40$$

**2.** Components and total at the crossing point:

$$O(40)=120, \\qquad H(40)=120, \\qquad T(40)=240$$

**3.** The second derivative confirms a minimum:

$$T''(q)=\\frac{9600}{q^{3}}>0$$

**4.** Totals at the batches the statements name:

$$T(20)=300, \\qquad T(60)=260, \\qquad T(80)=300$$

**5.** The identity in $(2)$ explains why $20$ and $80$ tie: their product is $1600$, so they exchange the two components. Below $q=40$ ordering dominates, above it holding dominates, and no batch beats the $240$ euro floor. Mid-range batches such as $q=36$ still prefer the balanced schedule, since the two cost components have not yet swapped places.

**Answer.** components equal at $q=40$ | $T(40)=240$ is the minimum | $T(20)=T(80)=300$`,
  },
  {
    id: `math-8-64`,
    case_id: `MATH 8.64`,
    title: `Average Product on a Bottling Line`,
    context: `Output on a bottling line is modelled by $Q(L)=12L^{3/4}$ units per shift, where $L>0$ is the number of labour hours booked for that shift. Average product is output per labour hour, $Q(L)/L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Average product is a power function of $L$ with exponent $3/4$.`,
      `At $L=16$ output is $96$ units and average product is $8$ units per hour.`,
      `Doubling labour hours doubles average product.`,
      `Average product falls as labour hours rise.`,
      `At $L=81$ average product is $6$ units per hour.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

Average product is output divided by labour, and dividing a power by $L$ subtracts one from the exponent:

$$\\frac{Q(L)}{L}=\\frac{12L^{3/4}}{L}=12L^{\\,3/4-1}=12L^{-1/4}$$

Comparing with the general form $AL^{r}$ gives coefficient $12$ and exponent $-1/4$, not $3/4$. The exponent $3/4$ belongs to total output, which is a different quantity. The sign is what matters: a positive exponent would mean average product grows with labour, while the recovered exponent is negative. A numerical check separates the two rules at sixteen hours:

$$12\\cdot16^{-1/4}=6, \\qquad 12\\cdot16^{3/4}=96$$

The first is output per hour and the second is output for the shift. The stated exponent belongs to the wrong one of these, so the statement is False.`,
      `**B.** → False

The claim bundles two figures, and both need checking. Total output uses the exponent $3/4$, and $16^{3/4}=(\\sqrt[4]{16})^{3}=2^{3}=8$:

$$Q(16)=12\\cdot8=96$$

That part is right. Average product divides this by the labour hours:

$$\\frac{Q(16)}{16}=\\frac{96}{16}=6$$

The general rule gives the same value, since $12\\cdot16^{-1/4}=12/2=6$. Average product at sixteen hours is $6$ units per hour, not the $8$ units per hour quoted. The figure $8$ is the value of $16^{3/4}$ itself, which is not the average product. One of the two parts fails, so the statement is False.`,
      `**C.** → False

Average product is the power function $12L^{-1/4}$, so an input multiplier of $2$ produces the output multiplier

$$\\frac{12(2L)^{-1/4}}{12L^{-1/4}}=2^{-1/4}\\approx0.8409$$

Average product falls to about $84\\%$ of its previous value rather than doubling. Levels show the same effect between sixteen and thirty-two hours:

$$12\\cdot16^{-1/4}=6, \\qquad 12\\cdot32^{-1/4}\\approx5.05$$

Doubling the shift raises total output by a factor of $2^{3/4}\\approx1.68$, which is less than the doubling of hours, so output per hour must decline. The claim reverses the direction of the effect, so the statement is False.`,
      `**D.** → True

Average product carries a negative exponent, which is exactly the condition for a decreasing power function on a positive domain:

$$\\frac{Q(L)}{L}=12L^{-1/4}=\\frac{12}{L^{1/4}}$$

As $L$ grows, the fourth root in the denominator grows while the numerator stays fixed, so the quotient shrinks. Two concrete shifts make the fall visible:

$$12\\cdot16^{-1/4}=\\frac{12}{2}=6, \\qquad 12\\cdot81^{-1/4}=\\frac{12}{3}=4$$

The reason is that total output has exponent $3/4$, which is below $1$, so booking more hours raises output less than proportionally. Average product declines with labour hours, so the statement is True.`,
      `**E.** → False

Evaluate the average product rule at the stated shift length. The fourth root of $81$ is $3$, since $3^{4}=81$:

$$\\frac{Q(81)}{81}=12\\cdot81^{-1/4}=\\frac{12}{3}=4$$

The long route agrees. Total output uses $81^{3/4}=(\\sqrt[4]{81})^{3}=3^{3}=27$:

$$Q(81)=12\\cdot27=324, \\qquad \\frac{324}{81}=4$$

Average product at eighty-one hours is $4$ units per hour, not $6$. The value $6$ belongs to a shift of sixteen hours, and average product has fallen since then because the exponent on labour is below one. The quoted figure is wrong, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 64,
    solution_overview: `Output is $Q(L)=12L^{3/4}$ units per shift and average product is $Q(L)/L$.

**Part 1: Building the model.**

Let $L$ = labour hours booked, $Q$ = units produced in the shift, and let average product be output per labour hour. Dividing a power function by its own input subtracts one from the exponent, which is the whole content of this task.

**1. Translate: total output.** The exponent $3/4$ is below $1$, so output grows less than proportionally with hours.

**2. Translate: output per hour.**

$$\\frac{Q(L)}{L}=\\frac{12L^{3/4}}{L^{1}}=12L^{-1/4}$$

**Part 2: The model.**

$$Q(L)=12\\,L^{3/4} \\tag{1}$$

$$\\frac{Q(L)}{L}=12\\,L^{-1/4} \\tag{2}$$

**Part 3: Solve.**

**1.** Fourth roots at the shift lengths the statements use:

$$16^{1/4}=2, \\qquad 81^{1/4}=3$$

**2.** Total output at those shifts:

$$Q(16)=12\\cdot8=96, \\qquad Q(81)=12\\cdot27=324$$

**3.** Average product at the same shifts:

$$\\frac{96}{16}=6, \\qquad \\frac{324}{81}=4$$

**4.** The multiplier from doubling the shift:

$$2^{-1/4}\\approx0.8409$$

**5.** Every claim in this task turns on the sign of the exponent in $(2)$. Because $-1/4$ is negative, average product falls as hours rise, and it falls slowly, losing only about $16\\%$ when hours double. That slow decline is the signature of an exponent between $0$ and $1$: total product still rises, but each extra hour contributes less than the last.

**Answer.** average product $=12L^{-1/4}$ | $6$ units per hour at $L=16$ | $4$ units per hour at $L=81$`,
  },
  {
    id: `math-8-65`,
    case_id: `MATH 8.65`,
    title: `Learning Curve With an Irreducible Assembly Floor`,
    context: `A drone-assembly cell models the labour time of the unit built after $n$ cumulative units by $t(n)=8+50n^{-1/2}$ minutes, where $n\\ge1$. The constant $8$ is an irreducible handling floor and the second term is the learning component. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $n=25$ the modelled unit time is $18$ minutes.`,
      `As $n$ grows without bound the modelled unit time approaches $8$ minutes without ever reaching it.`,
      `Raising cumulative output from $25$ to $100$ halves the learning component.`,
      `Raising cumulative output from $25$ to $100$ halves the modelled unit time.`,
      `Modelled unit time first falls below $10$ minutes once cumulative output passes $625$ units.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Only the second term responds to cumulative output, so evaluate it first. The exponent $-1/2$ puts a square root in the denominator, and $25^{1/2}=5$:

$$50\\cdot25^{-1/2}=\\frac{50}{5}=10$$

Add the handling floor, which is the same at every cumulative count:

$$t(25)=8+10=18$$

The split is worth noticing: at this stage the cell spends $8$ minutes on work that learning cannot remove and $10$ minutes on work that it can. The model returns $18$ minutes for the unit built after twenty-five cumulative units, matching the claim, so the statement is True.`,
      `**B.** → True

The learning component is a power with negative exponent, so it shrinks toward zero as cumulative output grows:

$$\\lim_{n\\to\\infty}\\frac{50}{\\sqrt{n}}=0$$

The floor is untouched by this, so the whole model tends to it:

$$\\lim_{n\\to\\infty}t(n)=8+0=8$$

Reaching the floor exactly would require $50/\\sqrt{n}=0$, which no finite $n$ satisfies, since the numerator is fixed at $50$ and the denominator is always finite. The values bear this out: $t(100)=13$, $t(2500)=9$, $t(250000)=8.1$, each still above $8$. The line $t=8$ is a horizontal asymptote that the model never touches, so the statement is True.`,
      `**C.** → True

The learning component alone is a power function with exponent $-1/2$, and the cumulative count is multiplied by

$$\\frac{100}{25}=4$$

so that component is multiplied by

$$4^{-1/2}=\\frac{1}{2}$$

Checking the two levels directly confirms the halving:

$$50\\cdot25^{-1/2}=10, \\qquad 50\\cdot100^{-1/2}=5$$

The coefficient $50$ cancels out of the ratio, so the multiplier depends only on the output factor and the exponent. Quadrupling cumulative output halves the learning component, so the statement is True.`,
      `**D.** → False

The multiplier applies only to the learning term. The floor is a constant and is not scaled at all, so the total cannot fall in the same proportion. Compute both totals:

$$t(25)=8+\\frac{50}{5}=8+10=18$$

$$t(100)=8+\\frac{50}{10}=8+5=13$$

Half of $18$ would be $9$ minutes, and the model gives $13$ minutes instead:

$$\\frac{13}{18}\\approx0.7222$$

Unit time falls by about $28\\%$, not by $50\\%$. The learning component does halve, from $10$ minutes to $5$, but the $8$ minute floor dilutes that gain in the total. The claim transfers the scaling rule to a quantity that is not a pure power, so the statement is False.`,
      `**E.** → True

Impose the target on the model and isolate the learning term:

$$8+\\frac{50}{\\sqrt{n}}<10$$

$$\\frac{50}{\\sqrt{n}}<2$$

Both sides are positive, so cross-multiplying preserves the inequality:

$$\\sqrt{n}>25$$

$$n>625$$

The boundary case is exact rather than approximate, since $50/\\sqrt{625}=50/25=2$ gives $t(625)=10$ minutes precisely. Unit time is therefore still at $10$ minutes at $625$ cumulative units and drops below only afterwards, for example $t(676)=8+50/26\\approx9.92$. The threshold and the strict wording both match, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 65,
    solution_overview: `Unit labour time is $t(n)=8+50n^{-1/2}$ minutes, a constant floor plus a decaying learning term.

**Part 1: Building the model.**

Let $n$ = cumulative units built, $t$ = labour minutes for the next unit. The model is a sum, not a pure power, so scaling rules apply to the learning term alone and never to the total.

**1. Translate: the learning term.** Multiplying cumulative output by $k$ multiplies that term by $k^{-1/2}$:

$$\\frac{50(kn)^{-1/2}}{50n^{-1/2}}=k^{-1/2}$$

**2. Translate: a time target.** A ceiling on unit time becomes a lower bound on cumulative output:

$$8+\\frac{50}{\\sqrt{n}}<c \\quad \\Longleftrightarrow \\quad \\sqrt{n}>\\frac{50}{c-8}$$

**Part 2: The model.**

$$t(n)=8+50\\,n^{-1/2} \\tag{1}$$

$$\\lim_{n\\to\\infty}t(n)=8 \\tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the counts the statements use:

$$25^{1/2}=5, \\qquad 100^{1/2}=10, \\qquad 625^{1/2}=25$$

**2.** Learning components at those counts:

$$10, \\qquad 5, \\qquad 2$$

**3.** Totals, adding the floor to each:

$$t(25)=18, \\qquad t(100)=13, \\qquad t(625)=10$$

**4.** The target from $(2)$ applied to a ceiling of $10$ minutes:

$$\\sqrt{n}>25 \\quad \\Rightarrow \\quad n>625$$

**5.** Quadrupling output halves the learning term but cuts the total only from $18$ to $13$ minutes, roughly $28\\%$. The floor of $8$ minutes is approached and never attained, since $50/\\sqrt{n}$ stays strictly positive.

**Answer.** $t(25)=18$ | $t(100)=13$ | floor $8$ approached but never reached | below $10$ minutes once $n>625$`,
  },
  {
    id: `math-8-66`,
    case_id: `MATH 8.66`,
    title: `Break-Even for a Fish Farm With Diminishing Harvest Returns`,
    context: `A fish farm turns feed into harvest revenue $R(x)=90x^{2/3}$ thousand euros in a season, where $x>0$ is tonnes of feed used, while feed and handling cost $C(x)=30x$ thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Revenue equals cost at $x=27$.`,
      `At $x=8$ the season runs at a loss.`,
      `Revenue is proportional to the tonnes of feed used.`,
      `For every $x>27$ the season's cost exceeds its revenue.`,
      `Raising feed from $8$ to $16$ tonnes doubles revenue.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Break-even means the two curves meet, so set them equal:

$$90x^{2/3}=30x$$

Divide both sides by $30x^{2/3}$, which is positive on the stated domain:

$$3=x^{\\,1-2/3}=x^{1/3}$$

Cube both sides:

$$x=27$$

Verify by evaluating each side at that feed level, using $27^{2/3}=(\\sqrt[3]{27})^{2}=9$:

$$R(27)=90\\cdot9=810, \\qquad C(27)=30\\cdot27=810$$

Both come to $810$ thousand euros, so the season exactly covers its cost at twenty-seven tonnes. The claimed break-even point is correct, so the statement is True.`,
      `**B.** → False

Compute both sides at the stated feed level. The cube root of $8$ is $2$, so $8^{2/3}=2^{2}=4$:

$$R(8)=90\\cdot4=360$$

$$C(8)=30\\cdot8=240$$

Profit is the gap between them:

$$P(8)=360-240=120$$

The season clears $120$ thousand euros rather than losing money. Eight tonnes sits well below the break-even level of twenty-seven tonnes, which is precisely the region where revenue runs ahead of cost. The margin per tonne makes the same point, since revenue per tonne is

$$\\frac{360}{8}=45$$

against a cost of $30$ per tonne. Profit is positive at this feed level, so the statement is False.`,
      `**C.** → False

Proportionality would mean revenue is a power function with exponent $1$, so that doubling feed doubles revenue. The model has exponent $2/3$ instead, and the scaling test exposes the difference:

$$\\frac{R(kx)}{R(x)}=k^{2/3}$$

$$\\frac{R(2x)}{R(x)}=2^{2/3}\\approx1.5874$$

A proportional relation would also force a constant revenue per tonne, and it is not constant:

$$\\frac{R(8)}{8}=45, \\qquad \\frac{R(27)}{27}=30$$

Revenue per tonne falls as feed rises, which is the signature of an exponent below $1$. The cost curve is the proportional one here, not revenue, so the statement is False.`,
      `**D.** → True

Compare the two curves in general rather than at a single point. Revenue at least covers cost when

$$90x^{2/3}\\ge30x$$

Dividing by the positive quantity $30x^{2/3}$ gives

$$3\\ge x^{1/3} \\quad \\Longleftrightarrow \\quad x\\le27$$

So revenue leads only up to twenty-seven tonnes, and beyond that the inequality flips and cost leads. A check past the crossing confirms it, using $64^{2/3}=4^{2}=16$:

$$R(64)=90\\cdot16=1440, \\qquad C(64)=30\\cdot64=1920$$

The season would lose $480$ thousand euros at sixty-four tonnes. Cost outruns revenue for every feed level above the break-even point, so the statement is True.`,
      `**E.** → False

Revenue is a power function with exponent $2/3$, so doubling the input multiplies revenue by

$$2^{2/3}\\approx1.5874$$

not by $2$. The levels confirm the shortfall, using $16^{2/3}=(\\sqrt[3]{16})^{2}\\approx6.3496$:

$$R(8)=90\\cdot4=360$$

$$R(16)=90\\cdot6.3496\\approx571.5$$

Doubling revenue would require about $720$ thousand euros, and the model delivers roughly $571$ thousand instead. Cost, by contrast, does double, from $240$ to $480$ thousand euros, which is why extra feed eventually stops paying. The stated multiplier is too large, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 66,
    solution_overview: `Revenue is $R(x)=90x^{2/3}$ and cost is $C(x)=30x$, both in thousand euros for $x$ tonnes of feed.

**Part 1: Building the model.**

Let $x$ = tonnes of feed, $R$ = season revenue, $C$ = season cost, $P=R-C$ = profit. Revenue is a power with exponent $2/3$, so it grows less than proportionally, while cost is a power with exponent $1$. A curve with the smaller exponent must eventually be overtaken.

**1. Translate: break-even.**

$$90x^{2/3}=30x$$

**2. Translate: the comparison.** Dividing by the positive quantity $30x^{2/3}$ reduces the whole comparison to one cube root, weighed against the number $3$:

$$\\frac{R(x)}{C(x)}=\\frac{3}{x^{1/3}}$$

**Part 2: The model.**

$$P(x)=90x^{2/3}-30x \\tag{1}$$

$$R(x)\\ge C(x) \\quad \\Longleftrightarrow \\quad x\\le27 \\tag{2}$$

**Part 3: Solve.**

**1.** The break-even feed level:

$$x^{1/3}=3 \\quad \\Rightarrow \\quad x=27$$

**2.** Levels at the crossing:

$$R(27)=810, \\qquad C(27)=810, \\qquad P(27)=0$$

**3.** Levels below the crossing:

$$R(8)=360, \\qquad C(8)=240, \\qquad P(8)=120$$

**4.** Levels above the crossing:

$$R(64)=1440, \\qquad C(64)=1920, \\qquad P(64)=-480$$

**5.** The scaling test separates the two curves: doubling feed multiplies revenue by $2^{2/3}\\approx1.5874$ but multiplies cost by $2$. Profit is positive on $0<x<27$, zero at $27$, and negative afterwards, peaking at $x=8$ where $P=120$.

**Answer.** break-even at $x=27$ | $P(8)=120$ | cost leads for every $x>27$`,
  },
  {
    id: `math-8-67`,
    case_id: `MATH 8.67`,
    title: `Calibrating a Handling-Cost Law From a Cost Difference`,
    context: `A distribution centre models daily handling cost by $f(x)=Ax^{3/2}$ euros, where $x>0$ is a pallet-volume index. The individual daily figures were lost, and the only surviving record states that the cost at index $16$ exceeds the cost at index $4$ by $336$ euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The coefficient is $A=6$.`,
      `The recovered levels are $f(4)=48$ and $f(16)=384$.`,
      `At index $9$ the modelled handling cost is $162$ euros.`,
      `Multiplying the pallet-volume index by $4$ multiplies handling cost by $8$.`,
      `The difference $f(25)-f(9)$ equals $588$ euros.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

A difference of two model values still determines the coefficient, because $A$ factors out of both terms. Write the record as an equation:

$$f(16)-f(4)=A\\cdot16^{3/2}-A\\cdot4^{3/2}=336$$

Evaluate each power by taking the square root first and then cubing:

$$16^{3/2}=(\\sqrt{16})^{3}=4^{3}=64$$

$$4^{3/2}=(\\sqrt{4})^{3}=2^{3}=8$$

Factor and solve:

$$A(64-8)=56A=336$$

$$A=\\frac{336}{56}=6$$

The exponent had to be known in advance for this to work, and it is given in the model. The calibrated rule is $f(x)=6x^{3/2}$, and the coefficient matches the claim, so the statement is True.`,
      `**B.** → True

Recovering the levels needs the coefficient first, and the surviving record supplies it. From $A(16^{3/2}-4^{3/2})=336$ and the powers $16^{3/2}=64$ and $4^{3/2}=8$:

$$56A=336 \\quad \\Rightarrow \\quad A=6$$

Now evaluate the calibrated rule at each index:

$$f(4)=6\\cdot8=48$$

$$f(16)=6\\cdot64=384$$

The pair must reproduce the record, and it does:

$$384-48=336$$

A second consistency check comes from the ratio, which should be the input factor raised to the exponent:

$$\\frac{384}{48}=8=4^{3/2}$$

Both quoted levels agree with the calibration, with the surviving difference, and with the scaling behaviour of the model, so the statement is True.`,
      `**C.** → True

With the coefficient recovered from the record as $A=336/56=6$, the model is $f(x)=6x^{3/2}$. Evaluate the power at the requested index, taking the square root first:

$$9^{3/2}=(\\sqrt{9})^{3}=3^{3}=27$$

Apply the coefficient:

$$f(9)=6\\cdot27=162$$

The figure sits between the two recovered levels, above $f(4)=48$ and below $f(16)=384$, which is what an increasing model requires for an index between $4$ and $16$. Handling cost at index $9$ is exactly $162$ euros, so the statement is True.`,
      `**D.** → True

The multiplier for a power function depends only on the input factor and the exponent, so the coefficient plays no part:

$$\\frac{f(4x)}{f(x)}=\\frac{A(4x)^{3/2}}{Ax^{3/2}}=4^{3/2}$$

Evaluate that power:

$$4^{3/2}=(\\sqrt{4})^{3}=2^{3}=8$$

The recovered levels are a worked instance of the same rule, since the index moves from $4$ to $16$ by a factor of $4$:

$$\\frac{f(16)}{f(4)}=\\frac{384}{48}=8$$

Cost grows faster than volume here because the exponent exceeds $1$. The stated multiplier is exactly right, so the statement is True.`,
      `**E.** → True

Both levels come from the calibrated rule $f(x)=6x^{3/2}$. Evaluate the two powers by taking square roots and cubing:

$$25^{3/2}=(\\sqrt{25})^{3}=5^{3}=125$$

$$9^{3/2}=(\\sqrt{9})^{3}=3^{3}=27$$

Apply the coefficient to each:

$$f(25)=6\\cdot125=750, \\qquad f(9)=6\\cdot27=162$$

Subtract:

$$750-162=588$$

The gap is far wider than the difference between indices $4$ and $9$, which comes to $162-48=114$, because an exponent above $1$ makes each extra unit of volume cost more than the last. The quoted difference matches, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 67,
    solution_overview: `Handling cost is $f(x)=Ax^{3/2}$ euros, and the only record is $f(16)-f(4)=336$.

**Part 1: Building the model.**

Let $x$ = pallet-volume index, $f$ = daily handling cost in euros. No single level is known, so the coefficient has to come out of a difference. That works because $A$ is a common factor of every model value, and the exponent is given.

**1. Translate: the surviving record.**

$$A\\cdot16^{3/2}-A\\cdot4^{3/2}=336$$

**2. Translate: factor the coefficient out.**

$$A\\left(16^{3/2}-4^{3/2}\\right)=336$$

**Part 2: The model.**

$$f(x)=6\\,x^{3/2} \\tag{1}$$

$$\\frac{f(kx)}{f(x)}=k^{3/2} \\tag{2}$$

**Part 3: Solve.**

**1.** The two powers in the record:

$$16^{3/2}=64, \\qquad 4^{3/2}=8$$

**2.** The calibration:

$$56A=336 \\quad \\Rightarrow \\quad A=6$$

**3.** Recovered levels at the recorded indices:

$$f(4)=48, \\qquad f(16)=384, \\qquad 384-48=336$$

**4.** Further levels the statements need:

$$f(9)=162, \\qquad f(25)=750, \\qquad 750-162=588$$

**5.** The scaling identity in $(2)$ gives the same information without any levels: a factor of $4$ on the index multiplies cost by $4^{3/2}=8$, matching $384/48=8$. An exponent above $1$ makes cost rise faster than volume, which is why equal index gaps produce widening cost gaps. Once both constants are known, every later index is a pure evaluation of $f(s)=6s^{3/2}$.

**Answer.** $A=6$ | $f(4)=48$, $f(9)=162$, $f(16)=384$, $f(25)=750$ | factor of $4$ on volume multiplies cost by $8$`,
  },
  {
    id: `math-8-68`,
    case_id: `MATH 8.68`,
    title: `Inverting a Wastewater Load Model Against a Permit Ceiling`,
    context: `A dye-house discharges a wastewater load of $W(s)=5s^{3/2}$ kilograms per day, where $s>0$ is a production scale index. The site permit caps the daily load at $320$ kilograms, and the plant wants the largest scale index it may run. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The largest admissible scale index is $s=16$.`,
      `The load model inverts to $s=(W/5)^{2/3}$.`,
      `Doubling the permit ceiling to $640$ doubles the admissible scale index.`,
      `At scale index $9$ the daily load is $135$ kilograms.`,
      `If the coefficient rose from $5$ to $10$, the admissible scale index under the same ceiling would be halved.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The ceiling is an equation once the load is pushed to its maximum:

$$5s^{3/2}=320$$

Divide by the coefficient:

$$s^{3/2}=64$$

Undo the exponent by raising both sides to the reciprocal power $2/3$, and evaluate using $64^{1/3}=4$:

$$s=64^{2/3}=\\left(\\sqrt[3]{64}\\right)^{2}=4^{2}=16$$

Check the load at that index, using $16^{3/2}=64$:

$$W(16)=5\\cdot64=320$$

The load is exactly at the cap. Since the exponent $3/2$ is positive, $W$ increases with $s$, so every index above $16$ breaches the permit and every index below it complies. The largest admissible index is $16$, so the statement is True.`,
      `**B.** → True

Inverting means solving the rule for the input. Start from the model and isolate the power:

$$W=5s^{3/2} \\quad \\Rightarrow \\quad s^{3/2}=\\frac{W}{5}$$

Raise both sides to the reciprocal exponent $2/3$, which cancels $3/2$ because $(3/2)\\cdot(2/3)=1$:

$$s=\\left(\\frac{W}{5}\\right)^{2/3}$$

Test the inverse on the permit figure:

$$\\left(\\frac{320}{5}\\right)^{2/3}=64^{2/3}=16$$

That returns the admissible index found from the ceiling, and running it forward gives $W(16)=320$ again. The stated inverse rule is correct, so the statement is True.`,
      `**C.** → False

The inverse is itself a power function, with exponent $2/3$ rather than $1$, so a ceiling multiplier of $k$ moves the admissible index by $k^{2/3}$:

$$\\frac{(2W/5)^{2/3}}{(W/5)^{2/3}}=2^{2/3}\\approx1.5874$$

Computing the new index directly gives the same figure:

$$s=\\left(\\frac{640}{5}\\right)^{2/3}=128^{2/3}\\approx25.40$$

Doubling would require $s=32$, and the model allows only about $25.4$. Because load rises faster than scale, permitted room for scale grows more slowly than the permitted load. The claim assumes proportional inversion, so the statement is False.`,
      `**D.** → True

Evaluate the load rule at the stated index. Take the square root first and then cube, since $9^{3/2}=(\\sqrt{9})^{3}=3^{3}=27$:

$$W(9)=5\\cdot27=135$$

The figure is consistent with the permit analysis. The cap allows an index of $16$, and $9$ is below that, so the resulting load should be under $320$ kilograms, which $135$ is. The scaling rule confirms the gap, since moving from index $9$ to index $16$ multiplies the load by

$$\\left(\\frac{16}{9}\\right)^{3/2}=\\left(\\frac{4}{3}\\right)^{3}=\\frac{64}{27}\\approx2.37$$

and $135\\times64/27=320$. The stated load is correct, so the statement is True.`,
      `**E.** → False

A larger coefficient does tighten the admissible index, but not in proportion, because the coefficient enters the inverse under the exponent $2/3$:

$$s=\\left(\\frac{320}{10}\\right)^{2/3}=32^{2/3}$$

Evaluate that power, writing $32=2^{5}$:

$$32^{2/3}=2^{10/3}\\approx10.08$$

Compare with the original admissible index of $16$:

$$\\frac{10.08}{16}\\approx0.63=2^{-2/3}$$

Halving would give $8$, and the model permits about $10.1$. Doubling the coefficient costs the plant only about $37\\%$ of its scale, not $50\\%$. The claim uses a proportional rule where a fractional power applies, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 68,
    solution_overview: `Load is $W(s)=5s^{3/2}$ kilograms per day and the permit caps it at $320$.

**Part 1: Building the model.**

Let $s$ = production scale index, $W$ = daily load in kilograms. The exponent $3/2$ is positive, so load increases with scale and a cap on load becomes a cap on scale. Converting one into the other is an inversion, and inverting a power means using the reciprocal exponent.

**1. Translate: the binding permit.**

$$5s^{3/2}=320$$

**2. Translate: the inverse rule.** Raising both sides to the power $2/3$ cancels the exponent, since $(3/2)\\cdot(2/3)=1$:

$$s=\\left(\\frac{W}{5}\\right)^{2/3}$$

**Part 2: The model.**

$$W(s)=5\\,s^{3/2} \\tag{1}$$

$$s(W)=\\left(\\frac{W}{5}\\right)^{2/3} \\tag{2}$$

**Part 3: Solve.**

**1.** The binding permit reduces to a clean power:

$$s^{3/2}=64 \\quad \\Rightarrow \\quad s=64^{2/3}=16$$

**2.** Loads at the indices the statements use:

$$W(9)=135, \\qquad W(16)=320$$

**3.** A doubled ceiling, using $(2)$:

$$s=128^{2/3}\\approx25.40, \\qquad \\frac{25.40}{16}=2^{2/3}\\approx1.5874$$

**4.** A doubled coefficient, again using $(2)$:

$$s=32^{2/3}\\approx10.08, \\qquad \\frac{10.08}{16}=2^{-2/3}\\approx0.63$$

**5.** Both counterfactuals move the admissible index by a factor of $2$ raised to $\\pm2/3$, never by $2$ or by $1/2$. That is the practical content of inverting an exponent above $1$: scale reacts to permits more slowly than load reacts to scale.

**Answer.** largest index $s=16$ | inverse $s=(W/5)^{2/3}$ | $W(9)=135$ | doubling the cap raises the index by $2^{2/3}\\approx1.59$`,
  },
  {
    id: `math-8-69`,
    case_id: `MATH 8.69`,
    title: `Elasticity Shortcut Against the Exact Change in Parking Demand`,
    context: `A city parking authority models hourly demand by $q(p)=Ap^{-2}$ occupied spaces, where $p$ is the hourly tariff in euros, and it records $4000$ occupied spaces at a tariff of $3$. Demand of this form has constant elasticity $-2$, so the usual shortcut predicts a percentage change in demand equal to $-2$ times the percentage change in tariff. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Raising the tariff by $25\\%$ cuts hourly demand by exactly $50\\%$.`,
      `The elasticity shortcut understates the true loss caused by a $25\\%$ tariff rise.`,
      `Raising the tariff by $25\\%$ cuts hourly demand by exactly $36\\%$.`,
      `Raising the tariff by $1\\%$ cuts hourly demand by exactly $2\\%$.`,
      `Cutting the tariff by $25\\%$ raises hourly demand by exactly $50\\%$.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

The shortcut suggests $-2\\times25\\%=-50\\%$, but elasticity measures the response to an infinitesimal change, while $25\\%$ is a finite move. The exact multiplier is a power:

$$\\frac{q(1.25p)}{q(p)}=1.25^{-2}=\\frac{1}{1.5625}=0.64$$

Demand keeps $64\\%$ of its level, so the true cut is $36\\%$. Levels confirm this once the coefficient is recovered from the observation, $A=4000\\cdot3^{2}=36000$:

$$q(3)=4000, \\qquad q(3.75)=\\frac{36000}{14.0625}=2560$$

Half of $4000$ would be $2000$, and the model gives $2560$. The exact loss is smaller than the shortcut predicts, so the statement is False.`,
      `**B.** → False

Put the two figures side by side. The shortcut applies the elasticity to the whole finite change:

$$-2\\times25\\%=-50\\%$$

The exact calculation uses the power multiplier:

$$1.25^{-2}=0.64 \\quad \\Rightarrow \\quad -36\\%$$

A predicted loss of $50\\%$ against a true loss of $36\\%$ means the shortcut overstates the damage by $14$ percentage points. The direction is systematic for a convex demand curve: the exact multiplier $1.25^{-2}$ lies above the linear approximation, so the shortcut is always too pessimistic for a price rise of this size. The claim reverses that direction, so the statement is False.`,
      `**C.** → True

A rise of $25\\%$ is a tariff multiplier of $1.25$, and in an isoelastic model the demand multiplier is that factor raised to the exponent:

$$\\frac{q(1.25p)}{q(p)}=1.25^{-2}=\\frac{1}{1.5625}=0.64$$

Convert the surviving fraction into a percentage cut:

$$1-0.64=0.36=36\\%$$

Levels give the same result. The observation fixes the coefficient, since $4000=A\\cdot3^{-2}$ gives $A=36000$, and the new tariff is $3\\times1.25=3.75$:

$$q(3.75)=\\frac{36000}{14.0625}=2560, \\qquad \\frac{2560}{4000}=0.64$$

The figure is exact rather than approximate, because $1.25^{-2}$ is a terminating decimal. Demand falls by exactly $36\\%$, so the statement is True.`,
      `**D.** → False

Even a small change is not matched exactly by the shortcut. Compute the true multiplier for a tariff factor of $1.01$:

$$1.01^{-2}=\\frac{1}{1.0201}\\approx0.980296$$

The implied cut is

$$1-0.980296=0.019704\\approx1.9704\\%$$

The shortcut predicts $2\\%$, and the exact figure is about $1.9704\\%$, a gap of roughly $0.03$ percentage points. The word in the claim is exactly, and the two values differ, so the equality fails. Elasticity is a limit, so the approximation improves as the change shrinks but only becomes exact at a change of zero. so the statement is False.`,
      `**E.** → False

A cut of $25\\%$ is a tariff multiplier of $0.75$, and the demand response is again a power:

$$\\frac{q(0.75p)}{q(p)}=0.75^{-2}=\\frac{1}{0.5625}\\approx1.7778$$

Demand rises by about $77.8\\%$, far more than the $50\\%$ claimed. Levels agree, with the coefficient $A=36000$ and the new tariff $3\\times0.75=2.25$:

$$q(2.25)=\\frac{36000}{5.0625}\\approx7111.1$$

A rise of $50\\%$ would give $6000$ spaces. The asymmetry is worth noting: a $25\\%$ rise costs $36\\%$ of demand while a $25\\%$ cut adds about $78\\%$, because the two multipliers $1.25^{-2}$ and $0.75^{-2}$ are not mirror images. so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 69,
    solution_overview: `Demand is $q(p)=Ap^{-2}$ with $q(3)=4000$, and the elasticity shortcut is compared with exact finite changes.

**Part 1: Building the model.**

Let $p$ = hourly tariff in euros, $q$ = occupied spaces. The exponent $-2$ is the constant elasticity. The shortcut multiplies that elasticity by a percentage change in tariff; the exact route raises the tariff multiplier to the exponent. The two agree only in the limit of vanishing changes.

**1. Translate: the observed pair.**

$$A\\cdot3^{-2}=4000$$

**2. Translate: the two methods.** For a tariff factor $k$, the shortcut predicts the first expression while the exact route gives the second:

$$-2(k-1), \\qquad k^{-2}-1$$

**Part 2: The model.**

$$q(p)=36000\\,p^{-2} \\tag{1}$$

$$\\frac{q(kp)}{q(p)}=k^{-2} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=4000\\times9=36000$$

**2.** Exact multipliers from $(2)$ at the three factors the statements use:

$$1.25^{-2}=0.64, \\qquad 1.01^{-2}\\approx0.980296, \\qquad 0.75^{-2}\\approx1.7778$$

**3.** The matching exact percentage changes:

$$-36\\%, \\qquad -1.9704\\%, \\qquad +77.78\\%$$

**4.** Levels at the corresponding tariffs:

$$q(3)=4000, \\qquad q(3.75)=2560, \\qquad q(2.25)\\approx7111.1$$

**5.** The shortcut predicts $-50\\%$, $-2\\%$ and $+50\\%$ for the same three moves. It overstates the loss from a rise and understates the gain from a cut, and its error shrinks as the change shrinks, from $14$ percentage points at $25\\%$ down to about $0.03$ at $1\\%$.

**Answer.** $A=36000$ | exact cut of $36\\%$ for a $25\\%$ rise | exact gain of about $77.8\\%$ for a $25\\%$ cut | shortcut exact only in the limit`,
  },
  {
    id: `math-8-70`,
    case_id: `MATH 8.70`,
    title: `Geometrically Similar Bells Cast From One Pattern`,
    context: `A foundry casts geometrically similar bronze bells from a single pattern, so mass follows $M(h)=A h^{3}$ kilograms, where $h>0$ is the bell height in metres. The pattern book omits the coefficient; it records only that a finished bell of height $0.5$ m was weighed at $30$ kg. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The mass law is $M(h)=240h^{3}$.`,
      `Doubling a bell's height multiplies its mass by $8$.`,
      `A bell of height $1.5$ m has a mass of $810$ kg.`,
      `A bell three times as tall as another has three times its mass.`,
      `Halving a bell's height leaves one eighth of the mass.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Geometric similarity fixes the exponent at three before any measurement is taken, so the single weighed bell is enough to pin the coefficient. The recorded height sits below one metre, where cubing shrinks the input rather than enlarging it.

$$A(0.5)^{3}=30 \\quad \\Rightarrow \\quad 0.125A=30$$

Dividing by that shape factor is the same as multiplying by eight, since $1/0.125=8$:

$$A=\\frac{30}{0.125}=240, \\qquad M(h)=240h^{3}$$

The calibrated law reproduces the weighing, because $240(0.125)=30$ kg at half a metre. Reading the weighed $30$ kg as the coefficient itself would skip that step and describe a bell eight times too light at one metre. The calibrated law is $M(h)=240h^{3}$, so the statement is True.`,
      `**B.** → True

A height multiplier acts on mass through the exponent three, so both the coefficient and the starting height cancel and only the power of the multiplier survives.

$$\\frac{M(2h)}{M(h)}=\\frac{240(2h)^{3}}{240h^{3}}=\\frac{8h^{3}}{h^{3}}=8$$

The same factor shows up in levels, taking the weighed bell up to one metre:

$$M(0.5)=30, \\qquad M(1)=240(1)^{3}=240=8\\times 30$$

Nothing in that ratio depends on where the doubling starts, so a bell going from $1$ m to $2$ m gains the same factor and reaches $M(2)=1920$ kg. Carrying the height multiplier across unchanged would describe a law of exponent one rather than the mass of a solid body. The mass grows by the factor $8$, so the statement is True.`,
      `**C.** → True

Evaluating the calibrated law at a new height is a direct substitution, with the cube taken on the height before the coefficient is applied.

$$1.5^{3}=3.375$$

$$M(1.5)=240(3.375)=810$$

The same figure appears as a scale factor from the weighed half-metre bell, since $1.5/0.5=3$ and $3^{3}=27$:

$$\\frac{M(1.5)}{M(0.5)}=\\frac{810}{30}=27$$

Two independent routes landing on the same number is the usual sign that the coefficient and the exponent are being applied in the right order. Tripling the $30$ kg of the half-metre bell would give $90$ kg, the answer a proportional law would produce. The calibrated cube gives $810$ kg, so the statement is True.`,
      `**D.** → False

Tripling the height feeds a factor of three into an exponent of three, and the two do not cancel each other.

$$\\frac{M(3h)}{M(h)}=\\frac{A(3h)^{3}}{Ah^{3}}=3^{3}=27$$

The pair of bells already calibrated shows the gap in kilograms:

$$M(0.5)=30, \\qquad M(1.5)=810=27\\times 30$$

Any volume-like quantity inherits the cube of a length ratio, which is exactly what separates $27$ from $3$, and the error grows with the ratio rather than staying fixed. Reading the geometric scale factor as a mass scale factor is the standard slip for similar solids. The taller bell has twenty-seven times the mass, so the statement is False.`,
      `**E.** → True

Halving is the reciprocal of doubling, so the mass factor is the reciprocal of the cube of two rather than the reciprocal of two.

$$\\frac{M(h/2)}{M(h)}=\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}$$

Working in levels from the weighed bell down to a quarter-metre casting gives the same fraction:

$$M(0.25)=240(0.015625)=3.75=\\frac{30}{8}$$

The reciprocal reading is forced by the ratio rule, since the multiplier $k=1/2$ enters the same exponent that produced the factor $8$ for $k=2$. Halving the mass alongside the height would answer a question about a law of exponent one. One eighth of the mass survives, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 70,
    solution_overview: `Similar bells obey $M(h)=Ah^{3}$, and the single weighing $M(0.5)=30$ fixes the coefficient.

**Part 1: Building the model.**

Let $h$ = bell height in metres and $M$ = mass in kilograms. Geometric similarity means every casting is the same shape at a different scale, so volume, and with it mass, carries the cube of a length. The exponent therefore arrives with the model rather than with the data, one observed pair pins the coefficient, and after that every question is either a substitution or a scale factor.

**1. Translate: the weighed bell.**

$$A(0.5)^{3}=30 \\quad \\Rightarrow \\quad 0.125A=30$$

**2. Translate: the scaling rule.** A height multiplier $k>0$ acts through the exponent, and the coefficient cancels:

$$\\frac{M(kh)}{M(h)}=\\frac{A(kh)^{3}}{Ah^{3}}=k^{3}$$

**Part 2: The model.**

$$M(h)=240h^{3} \\tag{1}$$

$$M(kh)=k^{3}M(h) \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the weighing:

$$A=\\frac{30}{0.125}=240$$

**2.** Doubling, halving and tripling are read straight off (2):

$$2^{3}=8, \\qquad \\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}, \\qquad 3^{3}=27$$

**3.** Direct substitutions across the pattern range:

$$M(0.25)=3.75, \\qquad M(1)=240, \\qquad M(1.5)=240(3.375)=810$$

**4.** The same figure seen as a scale factor from the calibration point:

$$\\frac{M(1.5)}{M(0.5)}=\\frac{810}{30}=27$$

**5.** Every scaling claim reduces to a cube of the height ratio, which is why a bell three times as tall is twenty-seven times as heavy and a bell half as tall keeps only an eighth of the mass. A length ratio passes through unchanged only when the exponent is one, and no solid body obeys that.

**Answer.** $A=240$ | $M(h)=240h^{3}$ | $M(1.5)=810$ kg | doubling $\\times 8$, tripling $\\times 27$`,
  },
  {
    id: `math-8-71`,
    case_id: `MATH 8.71`,
    title: `Drag and Sustained Power on a Velodrome`,
    context: `Aerodynamic drag on a track cyclist follows $F(v)=A v^{2}$ newtons, where $v>0$ is speed in metres per second. The team log never states $A$: it records only that raising the speed from $8$ to $12$ m/s increased drag by exactly $40$ N. The power needed to overcome that drag is $P=Fv$ watts, and the rider can hold $500$ W for a full pursuit. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The drag law is $F(v)=0.5v^{2}$.`,
      `Absorbed power obeys $P(v)=0.5v^{3}$, and the $500$ W ceiling is reached at exactly $10$ m/s.`,
      `At $12$ m/s the rider absorbs $600$ W.`,
      `Riding $25\\%$ faster raises the absorbed power by $75\\%$.`,
      `Power per metre per second of speed is the same at every speed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The $40$ N is a gap between two drag readings rather than a reading in its own right, so the coefficient multiplies a difference of two squares and neither speed appears on its own.

$$F(12)-F(8)=A\\left(12^{2}-8^{2}\\right)=A(144-64)=80A$$

Setting that against the logged increase leaves a one-step solve:

$$80A=40 \\quad \\Rightarrow \\quad A=0.5, \\qquad F(v)=0.5v^{2}$$

The calibrated law returns the log entry, because $F(8)=32$ N and $F(12)=72$ N differ by exactly $40$ N. Setting $F(12)=40$ instead would attach the increment to a level the team never reported and give a coefficient near $0.28$. The calibrated law is $F(v)=0.5v^{2}$, so the statement is True.`,
      `**B.** → True

Power is drag multiplied by speed, so the extra factor of $v$ lifts the exponent from two to three, and the rider's ceiling is then an inversion of a cube.

$$P(v)=F(v)\\,v=0.5v^{2}\\cdot v=0.5v^{3}$$

Setting the cubic against the sustainable output leaves a clean cube root:

$$0.5v^{3}=500 \\quad \\Rightarrow \\quad v^{3}=1000 \\quad \\Rightarrow \\quad v=10$$

The ceiling checks in levels, since $F(10)=50$ N and $50\\times 10=500$ W of mechanical output. Solving $0.5v^{2}=500$ would cap the drag force instead of the power and push the ceiling out to about $31.6$ m/s. Both the cubic law and the $10$ m/s ceiling match, so the statement is True.`,
      `**C.** → False

Above the ceiling speed the power law still responds through the cube of the speed ratio, not through the ratio itself.

$$P(12)=0.5(12)^{3}=0.5(1728)=864$$

The same level appears as a scale factor from the ceiling, since $12/10=1.2$:

$$\\frac{P(12)}{P(10)}=\\left(\\frac{12}{10}\\right)^{3}=1.728, \\qquad 1.728\\times 500=864$$

A rider limited to $500$ W is therefore $364$ W short of holding $12$ m/s, a gap the linear reading hides almost entirely. Scaling the ceiling by the speed ratio $1.2$ produces exactly the claimed $600$ W, which is the answer for a law of exponent one. The rider absorbs $864$ W, so the statement is False.`,
      `**D.** → False

A percentage change in speed enters power through the cube of the multiplier, so the percentage rise is not the exponent multiplied by the percentage move.

$$\\frac{P(1.25v)}{P(v)}=1.25^{3}=1.953125$$

Turning that multiplier back into a percentage change subtracts one before scaling:

$$(1.953125-1)\\times 100\\%=95.3125\\%$$

Levels tell the same story, because riding $25\\%$ faster than $8$ m/s means reaching $10$ m/s, and the absorbed power climbs from $256$ W to $500$ W. Multiplying $25\\%$ by the exponent $3$ gives exactly the claimed $75\\%$, a shortcut accurate only for very small moves. Power rises by about $95.3\\%$, so the statement is False.`,
      `**E.** → False

Power per unit speed divides the cubic law by $v$, which returns the drag force and leaves an exponent of two rather than zero.

$$\\frac{P(v)}{v}=\\frac{0.5v^{3}}{v}=0.5v^{2}=F(v)$$

Evaluating that quotient at the two logged speeds shows it moving:

$$\\frac{P(8)}{8}=\\frac{256}{8}=32, \\qquad \\frac{P(12)}{12}=\\frac{864}{12}=72$$

A per-unit figure holds still only when the underlying exponent is one, and here it is three. The explicit factor $v$ in $P=Fv$ is easy to see, but the $v^{2}$ hidden inside the drag force is what keeps the ratio climbing. The two values differ, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 71,
    solution_overview: `Drag is $F(v)=Av^{2}$, calibrated by the $40$ N gap between $8$ and $12$ m/s. Absorbed power is $P=Fv$, and the rider's ceiling is $500$ W.

**Part 1: Building the model.**

Let $v$ = speed in metres per second, $F$ = drag in newtons, $P$ = absorbed power in watts. The log supplies a difference rather than a level, so the coefficient comes from subtracting two squares. Power is then the same law with its exponent raised by one, and the ceiling question inverts that cubic.

**1. Translate: the logged increase.**

$$A\\left(12^{2}-8^{2}\\right)=80A=40$$

**2. Translate: power.** Multiplying drag by speed adds $1$ to the exponent:

$$P(v)=v\\cdot Av^{2}=Av^{3}$$

**3. Translate: a speed multiplier.** Drag and power respond through different exponents:

$$\\frac{F(kv)}{F(v)}=k^{2}, \\qquad \\frac{P(kv)}{P(v)}=k^{3}$$

**Part 2: The model.**

$$F(v)=0.5v^{2} \\tag{1}$$

$$P(v)=0.5v^{3} \\tag{2}$$

**Part 3: Solve.**

**1.** The difference of squares turns the log entry into a one-step solve:

$$80A=40 \\quad \\Rightarrow \\quad A=0.5$$

**2.** Invert (2) at the rider's ceiling:

$$0.5v^{3}=500 \\quad \\Rightarrow \\quad v^{3}=1000 \\quad \\Rightarrow \\quad v=10$$

**3.** Exact scale factors, which the linear shortcut only approximates:

$$1.2^{3}=1.728, \\qquad 1.25^{3}=1.953125\\;(+95.3\\%)$$

**4.** Levels on the two curves, and the per-unit-speed figure:

$$P(8)=256, \\qquad P(10)=500, \\qquad P(12)=864, \\qquad \\frac{P(v)}{v}=0.5v^{2}$$

**5.** Carrying a speed multiplier straight across understates the cost of going faster: a fifth more speed asks for nearly three quarters more power, and the last $2$ m/s above the ceiling would add $364$ W to a $500$ W budget.

**Answer.** $A=0.5$ | $F(v)=0.5v^{2}$, $P(v)=0.5v^{3}$ | ceiling at $v=10$ m/s | $P(12)=864$ W`,
  },
  {
    id: `math-8-72`,
    case_id: `MATH 8.72`,
    title: `Signal Attenuation From a Buried Cable Locator`,
    context: `The signal a locator receives from a buried conductor follows $S(x)=A x^{-3}$ millivolts, where $x>0$ is the burial depth in metres. A calibration run over a conductor buried at $2$ metres read $50$ millivolts. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The attenuation law is $S(x)=400x^{-3}$.`,
      `A conductor buried at $4$ metres returns $25$ millivolts.`,
      `Doubling the burial depth cuts the received signal to one third.`,
      `A reading of $3.2$ millivolts corresponds to a burial depth of $10$ metres.`,
      `The received signal is inversely proportional to burial depth.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The model supplies the exponent, so one calibration reading is enough to pin the coefficient. Because the exponent is negative, recovering the coefficient multiplies by the power of the depth instead of dividing by it.

$$A(2)^{-3}=50 \\quad \\Rightarrow \\quad \\frac{A}{2^{3}}=\\frac{A}{8}=50$$

Clearing that fraction gives the coefficient in one move:

$$A=50\\times 8=400, \\qquad S(x)=400x^{-3}$$

The calibrated law returns the calibration run, since $400/8=50$ millivolts at two metres. Dividing by $2^{3}$ instead would give $6.25$ and understate every reading on the site by a factor of $64$. The attenuation law is $S(x)=400x^{-3}$, so the statement is True.`,
      `**B.** → False

Moving from the calibration depth to twice that depth divides the signal by the cube of two, not by two.

$$S(4)=\\frac{400}{4^{3}}=\\frac{400}{64}=6.25$$

The same level appears as a scale factor from the calibration run:

$$\\frac{S(4)}{S(2)}=\\left(\\frac{4}{2}\\right)^{-3}=\\frac{1}{8}, \\qquad \\frac{50}{8}=6.25$$

Two extra metres of cover therefore cost seven eighths of the signal, which is why deeply buried conductors are so hard to trace. Halving the $50$ millivolt reading produces exactly the claimed $25$, the answer for an inverse-proportional law. The locator reads $6.25$ millivolts, so the statement is False.`,
      `**C.** → False

A depth multiplier acts through the exponent $-3$, so the surviving fraction is the reciprocal of a cube and the coefficient cancels.

$$\\frac{S(2x)}{S(x)}=\\frac{A(2x)^{-3}}{Ax^{-3}}=2^{-3}=\\frac{1}{8}$$

The calibrated pair of depths shows the same fraction in millivolts:

$$S(2)=50, \\qquad S(4)=6.25=\\frac{50}{8}$$

Reading the $3$ in the exponent as a divisor is what turns one eighth into one third, and the claim would fit an inverse-cube-root law rather than this attenuation model. Nothing about the starting depth matters, since the ratio depends only on the multiplier. One eighth of the signal survives, so the statement is False.`,
      `**D.** → False

Recovering a depth from a reading inverts the law, so a cube root acts on the ratio of the coefficient to the reading.

$$\\frac{400}{x^{3}}=3.2 \\quad \\Rightarrow \\quad x^{3}=\\frac{400}{3.2}=125$$

Taking the cube root completes the inversion:

$$x=\\sqrt[3]{125}=5$$

At the claimed depth the locator would read $400/10^{3}=0.4$ millivolts, eight times weaker than the figure quoted, because doubling the depth from five metres again removes seven eighths of the signal. Depth ratios and signal ratios are never equal under an exponent of magnitude three. The reading corresponds to $5$ metres, so the statement is False.`,
      `**E.** → False

Inverse proportionality is the single case of exponent $-1$, in which depth multiplied by signal stays constant; this model carries exponent $-3$.

$$x\\,S(x)=x\\cdot 400x^{-3}=400x^{-2}$$

Testing that product at three depths shows it falling rather than holding:

$$2(50)=100, \\qquad 4(6.25)=25, \\qquad 5(3.2)=16$$

What does stay constant is $x^{3}S(x)=400$, which is the invariant the exponent actually dictates. The signal falls as depth grows, and that shared direction is what makes the wrong exponent easy to accept. Because the product $x\\,S(x)$ keeps falling, the received signal is not inversely proportional to burial depth, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 72,
    solution_overview: `Attenuation is $S(x)=Ax^{-3}$ in millivolts, pinned by the calibration reading $S(2)=50$.

**Part 1: Building the model.**

Let $x$ = burial depth in metres and $S$ = received signal in millivolts. The exponent comes from the model, so one observed pair fixes the coefficient; because the exponent is negative, that recovery multiplies rather than divides. Every remaining question is then either a substitution, a scale factor read off the exponent, or an inversion that ends in a cube root.

**1. Translate: the calibration run.**

$$A(2)^{-3}=50 \\quad \\Rightarrow \\quad \\frac{A}{8}=50$$

**2. Translate: the depth scaling.** A depth multiplier $k>0$ acts through the exponent:

$$\\frac{S(kx)}{S(x)}=\\frac{A(kx)^{-3}}{Ax^{-3}}=k^{-3}$$

**Part 2: The model.**

$$S(x)=400x^{-3} \\tag{1}$$

$$S(kx)=k^{-3}S(x) \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the calibration reading:

$$A=50\\times 2^{3}=400$$

**2.** Levels down the depth range:

$$S(2)=50, \\qquad S(4)=6.25, \\qquad S(5)=3.2, \\qquad S(10)=0.4$$

**3.** Inverting (1) recovers a depth from a reading:

$$x^{3}=\\frac{400}{S} \\quad \\Rightarrow \\quad S=3.2 \\;\\Rightarrow\\; x=\\sqrt[3]{125}=5$$

**4.** The doubling factor, and the test that rules out inverse proportionality:

$$2^{-3}=\\frac{1}{8}, \\qquad x\\,S(x)=400x^{-2}$$

**5.** The quantity that stays fixed is $x^{3}S(x)=400$, not $x\\,S(x)$, and that single fact settles the last three claims: doubling the depth keeps an eighth rather than a third, a $3.2$ millivolt trace sits at five metres rather than ten, and the product of depth and signal keeps falling.

**Answer.** $A=400$ | $S(x)=400x^{-3}$ | $S(4)=6.25$ mV | $3.2$ mV at $x=5$ m`,
  },
  {
    id: `math-8-73`,
    case_id: `MATH 8.73`,
    title: `Oxygen Demand and Gill Area in a Hatchery`,
    context: `A hatchery models a fish's oxygen demand as $D(m)=A m^{3/4}$ millilitres per hour and its gill surface area as $G(m)=B m^{2/3}$ square centimetres, where $m>0$ is body mass in grams. Neither coefficient is published. The records show that an $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish, and that a $64$ g fish carries $48$ square centimetres of gill. A tank's total demand is the sum of its fish's individual demands. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two laws are $D(m)=5m^{3/4}$ and $G(m)=3m^{2/3}$.`,
      `Doubling body mass multiplies oxygen demand by $2^{3/4}$ and gill area by $2^{2/3}$, so demand per square centimetre of gill rises by the factor $2^{1/12}$, about $1.059$.`,
      `A $256$ g fish demands $320$ millilitres per hour.`,
      `Oxygen demand per square centimetre of gill is $\\tfrac{5}{3}m^{1/12}$, which increases with body mass.`,
      `Sixteen $16$ g fish demand exactly twice as much oxygen per hour as one $256$ g fish of the same total mass.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Both masses in the demand record are exact fourth powers and the gill record sits at an exact cube, so the two calibrations resolve without any rounding. The first record is a gap between two demands, the second a single level.

$$A\\left(81^{3/4}-16^{3/4}\\right)=A(27-8)=19A=95 \\quad \\Rightarrow \\quad A=5$$

$$B\\left(64^{2/3}\\right)=16B=48 \\quad \\Rightarrow \\quad B=3$$

Both calibrations check against the records, since $D(81)-D(16)=135-40=95$ and $G(64)=48$. Attaching the $95$ millilitres to the heavier fish as a level would calibrate on a figure the hatchery never recorded. The two laws are $D(m)=5m^{3/4}$ and $G(m)=3m^{2/3}$, so the statement is True.`,
      `**B.** → True

Each law responds to a mass multiplier through its own exponent, and the ratio of the two responses subtracts one exponent from the other.

$$\\frac{D(2m)}{D(m)}=2^{3/4}\\approx 1.6818, \\qquad \\frac{G(2m)}{G(m)}=2^{2/3}\\approx 1.5874$$

Dividing those multipliers leaves a single power of two:

$$\\frac{2^{3/4}}{2^{2/3}}=2^{3/4-2/3}=2^{1/12}\\approx 1.0595$$

The gap between $3/4$ and $2/3$ is only $1/12$, which looks negligible until it sits in an exponent, where it still produces a genuine rise of about six per cent per doubling. All three multipliers in the claim are correct, so the statement is True.`,
      `**C.** → True

A mass of $256$ grams is an exact fourth power, so the three-quarter power reduces to the cube of a fourth root and needs no decimal work.

$$256^{3/4}=\\left(256^{1/4}\\right)^{3}=4^{3}=64$$

$$D(256)=5(64)=320$$

The same figure appears as a scale factor from the $16$ g fish, since $256/16=16$ and $16^{3/4}=(2^{4})^{3/4}=2^{3}=8$:

$$\\frac{D(256)}{D(16)}=\\frac{320}{40}=8$$

A sixteenfold mass increase therefore costs only an eightfold demand increase, which is the whole point of an exponent below one. Reading $3/4$ as a multiplier of the mass would give $5(192)=960$ instead of a power. The demand is $320$ millilitres per hour, so the statement is True.`,
      `**D.** → True

Dividing one power law by another subtracts their exponents, so the per-area figure keeps a small positive exponent rather than collapsing to a constant.

$$\\frac{D(m)}{G(m)}=\\frac{5m^{3/4}}{3m^{2/3}}=\\frac{5}{3}m^{3/4-2/3}=\\frac{5}{3}m^{1/12}$$

Two levels sixteen mass units apart separate clearly:

$$\\frac{D(16)}{G(16)}\\approx\\frac{40}{19.05}\\approx 2.10, \\qquad \\frac{D(256)}{G(256)}\\approx\\frac{320}{120.95}\\approx 2.65$$

Because $3/4$ exceeds $2/3$ only slightly, the per-area figure looks flat over a narrow mass range, but the exponent $1/12$ is positive and the ratio climbs without bound. Demand per square centimetre does rise with mass, so the statement is True.`,
      `**E.** → True

Sixteen fish are sixteen separate applications of the demand law, so the total has to be assembled fish by fish before it is set against one larger animal.

$$16\\,D(16)=16\\left(5\\cdot 16^{3/4}\\right)=16(5\\cdot 8)=16(40)=640$$

The single fish carries the same total mass but a far smaller demand:

$$D(256)=5\\left(256^{3/4}\\right)=5(64)=320, \\qquad \\frac{640}{320}=2$$

That factor of two is the signature of an exponent below one: splitting a fixed mass into many small bodies always raises the pooled demand. Pooling the masses first and applying the law once would treat a three-quarter power as if it were additive. The small fish demand exactly twice the single fish's oxygen, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 73,
    solution_overview: `Oxygen demand is $D(m)=Am^{3/4}$ and gill area is $G(m)=Bm^{2/3}$. The demand coefficient comes from the $95$ mL/h gap between an $81$ g and a $16$ g fish; the gill coefficient comes from the $64$ g record.

**Part 1: Building the model.**

Let $m$ = body mass in grams, $D$ = oxygen demand in millilitres per hour, $G$ = gill area in square centimetres. Both exponents are supplied, so each law needs exactly one record: a difference for the first and a level for the second. Comparing the two laws is then a subtraction of exponents, and tank totals are sums of individual demands, never one application to a pooled mass.

**1. Translate: the demand gap.**

$$A\\left(81^{3/4}-16^{3/4}\\right)=95$$

**2. Translate: the gill record.**

$$B\\left(64^{2/3}\\right)=48$$

**3. Translate: demand per unit gill area.** Dividing subtracts exponents:

$$\\frac{D(m)}{G(m)}=\\frac{A}{B}\\,m^{3/4-2/3}=\\frac{A}{B}\\,m^{1/12}$$

**Part 2: The model.**

$$D(m)=5m^{3/4} \\tag{1}$$

$$G(m)=3m^{2/3} \\tag{2}$$

$$\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{1/12} \\tag{3}$$

**Part 3: Solve.**

**1.** Exact shape factors make both calibrations one-step solves:

$$81^{3/4}=27, \\quad 16^{3/4}=8 \\;\\Rightarrow\\; 19A=95 \\;\\Rightarrow\\; A=5$$

$$64^{2/3}=16 \\;\\Rightarrow\\; 16B=48 \\;\\Rightarrow\\; B=3$$

**2.** Scale factors for a doubling of mass, and their ratio:

$$2^{3/4}\\approx 1.6818, \\quad 2^{2/3}\\approx 1.5874, \\quad \\frac{2^{3/4}}{2^{2/3}}=2^{1/12}\\approx 1.0595$$

**3.** Levels along the demand curve:

$$D(16)=40, \\qquad D(81)=135, \\qquad D(256)=320$$

**4.** A tank total is formed one fish at a time:

$$16\\,D(16)=640=2\\,D(256)$$

**Answer.** $A=5$, $B=3$ | $D(m)=5m^{3/4}$, $G(m)=3m^{2/3}$ | demand per unit gill $=\\frac{5}{3}m^{1/12}$, rising | $D(256)=320$ mL/h`,
  },
  {
    id: `math-8-74`,
    case_id: `MATH 8.74`,
    title: `Micro-Irrigation Flow Under a Fourth-Power Law`,
    context: `Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{4}$ litres per hour, where $r>0$ is the internal tube radius in millimetres. A bench test on a tube of radius $2$ mm delivered $48$ litres per hour. The designers also track the mean velocity index $Q/(\\pi r^{2})$, which spreads the flow across the tube's cross-section. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The flow law is $Q(r)=3r^{4}$.`,
      `A tube of radius $3$ mm delivers $243$ litres per hour.`,
      `Widening the tube radius by $50\\%$ raises the flow by $125\\%$.`,
      `Halving the tube radius leaves one sixteenth of the flow.`,
      `Because flow and cross-section both grow with the radius, the mean velocity index is the same in every tube.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The transport model supplies the exponent, and the bench figure is a level rather than an increment, so no subtraction is involved. Only the fourth power of the tested radius stands between the reading and the coefficient.

$$A(2)^{4}=48 \\quad \\Rightarrow \\quad 16A=48$$

Dividing by that shape factor finishes the calibration:

$$A=\\frac{48}{16}=3, \\qquad Q(r)=3r^{4}$$

The calibrated law returns the bench test, because $3(16)=48$ litres per hour at two millimetres. Dividing the measured flow by the radius itself rather than by $r^{4}$ would give a coefficient of $24$ and a curve eight times too steep. The calibrated law is $Q(r)=3r^{4}$, so the statement is True.`,
      `**B.** → True

Evaluating the calibrated law at a new radius takes the fourth power of the radius first and applies the coefficient afterwards.

$$3^{4}=81, \\qquad Q(3)=3(81)=243$$

The same figure appears as a scale factor from the bench tube, since $3/2=1.5$ and $1.5^{4}=5.0625$:

$$\\frac{Q(3)}{Q(2)}=\\frac{243}{48}=5.0625$$

Half a millimetre of extra bore therefore multiplies delivery by more than five, which is why emitter tolerances matter so much in irrigation design. Scaling the bench figure by the radius ratio $1.5$ would give $72$ litres per hour, the answer for a proportional law. The tube delivers $243$ litres per hour, so the statement is True.`,
      `**C.** → False

A percentage change in radius enters flow through the fourth power of the multiplier, so the rise is not the exponent multiplied by the percentage move.

$$\\frac{Q(1.5r)}{Q(r)}=1.5^{4}=5.0625$$

Converting that multiplier into a percentage change subtracts one first:

$$(5.0625-1)\\times 100\\%=406.25\\%$$

The bench pair confirms the size of the jump, since flow moves from $48$ to $243$ litres per hour when the radius goes from $2$ to $3$ mm. Reading a $50\\%$ widening as a $125\\%$ gain is precisely the answer for exponent two, where $1.5^{2}=2.25$. Flow rises by $406.25\\%$, so the statement is False.`,
      `**D.** → True

Halving the radius is the reciprocal of doubling it, and an exponent of four turns that into a reciprocal fourth power.

$$\\frac{Q(r/2)}{Q(r)}=\\left(\\frac{1}{2}\\right)^{4}=\\frac{1}{16}$$

Working in levels from the bench tube down to a one-millimetre bore gives the same fraction:

$$Q(2)=48, \\qquad Q(1)=3(1)^{4}=3=\\frac{48}{16}$$

Nothing depends on the starting radius, so the same fraction applies between $3$ mm and $1.5$ mm, where $243$ litres per hour falls to $15.1875$. Halving the flow alongside the radius would answer a question about a law of exponent one. One sixteenth of the flow survives, so the statement is True.`,
      `**E.** → False

The velocity index divides one power function by another, so its exponent is the difference $4-2$ rather than zero.

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{3r^{4}}{\\pi r^{2}}=\\frac{3r^{2}}{\\pi}$$

Evaluating at the two tube sizes shows the index climbing:

$$\\frac{Q(2)}{\\pi(2)^{2}}=\\frac{12}{\\pi}\\approx 3.82, \\qquad \\frac{Q(3)}{\\pi(3)^{2}}=\\frac{27}{\\pi}\\approx 8.59$$

Both quantities do grow with the radius, which is what makes a cancellation look plausible, but flow gains two exponents on the cross-section. The index more than doubles between the two tubes, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 74,
    solution_overview: `Flow obeys $Q(r)=Ar^{4}$, pinned by the bench test $Q(2)=48$. The mean velocity index is $Q/(\\pi r^{2})$.

**Part 1: Building the model.**

Let $r$ = internal radius in millimetres and $Q$ = flow in litres per hour. The exponent is supplied by the transport model, so one bench test fixes the coefficient. Dividing flow by the cross-section then produces a second power function whose exponent is the difference of the two, and every scaling claim reduces to a fourth power of the radius ratio.

**1. Translate: the bench test.**

$$A(2)^{4}=48 \\quad \\Rightarrow \\quad 16A=48$$

**2. Translate: a radius multiplier.** The coefficient cancels in the ratio:

$$\\frac{Q(kr)}{Q(r)}=\\frac{A(kr)^{4}}{Ar^{4}}=k^{4}$$

**3. Translate: the velocity index.** Dividing subtracts exponents:

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{Ar^{4}}{\\pi r^{2}}=\\frac{A}{\\pi}r^{2}$$

**Part 2: The model.**

$$Q(r)=3r^{4} \\tag{1}$$

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{3r^{2}}{\\pi} \\tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the bench test:

$$A=\\frac{48}{16}=3$$

**2.** Levels across the tube sizes:

$$Q(1)=3, \\qquad Q(2)=48, \\qquad Q(3)=243$$

**3.** Exact scale factors, all powers of the radius ratio:

$$1.5^{4}=5.0625\\;(+406.25\\%), \\qquad \\left(\\frac{1}{2}\\right)^{4}=\\frac{1}{16}$$

**4.** The velocity index at two radii, showing exponent $2$ rather than $0$:

$$\\frac{12}{\\pi}\\approx 3.82, \\qquad \\frac{27}{\\pi}\\approx 8.59$$

**5.** A fourth power is unforgiving in both directions: half a millimetre of extra bore multiplies delivery by more than five, and a bore halved keeps only a sixteenth of it. The velocity index still rises because flow outpaces cross-section by two full exponents.

**Answer.** $A=3$ | $Q(r)=3r^{4}$ | $Q(3)=243$ L/h | velocity index $=\\frac{3}{\\pi}r^{2}$`,
  },
  {
    id: `math-8-75`,
    case_id: `MATH 8.75`,
    title: `Barrier Distance for a Radiography Source`,
    context: `Dose rate near an industrial radiography source follows the inverse-square law $H(d)=A d^{-2}$ microsieverts per hour, where $d>0$ is the distance from the source in metres. A survey meter three metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The dose-rate law is $H(d)=720d^{-2}$.`,
      `At six metres the dose rate is $20$ microsieverts per hour.`,
      `Doubling the distance from the source quarters the dose rate.`,
      `The barrier belongs twelve metres from the source.`,
      `Moving from three metres to nine metres cuts the dose rate to one third.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The inverse-square form fixes the exponent at $-2$, so the survey reading is the only input the coefficient needs. A negative exponent means that recovery multiplies by the square of the distance rather than dividing by it.

$$A(3)^{-2}=80 \\quad \\Rightarrow \\quad \\frac{A}{3^{2}}=\\frac{A}{9}=80$$

Clearing the fraction gives the coefficient directly:

$$A=80\\times 9=720, \\qquad H(d)=720d^{-2}$$

The calibrated law returns the survey, since $720/9=80$ microsieverts per hour at three metres. Dividing the reading by $9$ instead would invert the calibration and understate every dose on the site by a factor of $81$. The law is $H(d)=720d^{-2}$, so the statement is True.`,
      `**B.** → True

Six metres is twice the survey distance, so the dose rate is divided by the square of two, and a direct substitution confirms the same figure.

$$H(6)=\\frac{720}{6^{2}}=\\frac{720}{36}=20$$

The scale-factor route reaches the same level without touching the coefficient:

$$\\frac{H(6)}{H(3)}=\\left(\\frac{6}{3}\\right)^{-2}=\\frac{1}{4}, \\qquad \\frac{80}{4}=20$$

Three extra metres of standoff therefore remove three quarters of the exposure rate, far more than a proportional reading would suggest. Halving the $80$ would answer a question about an inverse-proportional law. The meter reads $20$ microsieverts per hour, so the statement is True.`,
      `**C.** → True

A distance multiplier acts through the exponent $-2$, so the coefficient and the starting distance cancel and only the square of the multiplier remains.

$$\\frac{H(2d)}{H(d)}=\\frac{A(2d)^{-2}}{Ad^{-2}}=2^{-2}=\\frac{1}{4}$$

The surveyed pair of distances shows the quarter in microsieverts per hour:

$$H(3)=80, \\qquad H(6)=20=\\frac{80}{4}$$

Because the ratio ignores the starting point, the same quarter applies between six and twelve metres, where $20$ falls to $5$. Subtracting a fixed amount for every metre gained would describe a linear fall rather than an inverse-square one. The dose rate falls to a quarter, so the statement is True.`,
      `**D.** → True

Locating the barrier inverts the law, so a square root acts on the ratio of the coefficient to the permitted dose rate.

$$\\frac{720}{d^{2}}=5 \\quad \\Rightarrow \\quad d^{2}=\\frac{720}{5}=144$$

Taking the positive root finishes the inversion, since distance cannot be negative:

$$d=\\sqrt{144}=12$$

The answer checks against the scale factors already found, because $12$ metres is four times the survey distance and $4^{-2}=1/16$ turns $80$ into $5$. Multiplying the survey distance by the dose ratio $80/5=16$ would push the barrier out to $48$ metres. The barrier belongs at twelve metres, so the statement is True.`,
      `**E.** → False

Tripling the distance feeds a factor of three into an exponent of $-2$, so the surviving fraction is the reciprocal of a square.

$$\\frac{H(9)}{H(3)}=3^{-2}=\\frac{1}{9}$$

A direct substitution gives the level behind that fraction:

$$H(9)=\\frac{720}{81}\\approx 8.89$$

One third of the survey reading would be about $26.7$ microsieverts per hour, three times what the meter would actually show at nine metres. Reading the tripling straight through as a division by three is right for an inverse-proportional law rather than an inverse-square one. One ninth of the dose rate survives, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 75,
    solution_overview: `Dose rate obeys the inverse-square law $H(d)=Ad^{-2}$, pinned by the survey reading $H(3)=80$. The barrier sits where $H=5$.

**Part 1: Building the model.**

Let $d$ = distance from the source in metres and $H$ = dose rate in microsieverts per hour. The physics fixes the exponent at $-2$, so one survey reading pins the coefficient, and because that exponent is negative the recovery multiplies by a square rather than dividing by one. The barrier question then inverts the same law, which turns it into a square root.

**1. Translate: the survey reading.**

$$A(3)^{-2}=80 \\quad \\Rightarrow \\quad \\frac{A}{9}=80$$

**2. Translate: a distance multiplier.** The coefficient cancels in the ratio:

$$\\frac{H(kd)}{H(d)}=\\frac{A(kd)^{-2}}{Ad^{-2}}=k^{-2}$$

**3. Translate: the barrier rule.**

$$\\frac{A}{d^{2}}=5$$

**Part 2: The model.**

$$H(d)=720d^{-2} \\tag{1}$$

$$H(kd)=k^{-2}H(d) \\tag{2}$$

**Part 3: Solve.**

**1.** A negative exponent recovers the coefficient by multiplying:

$$A=80\\times 3^{2}=720$$

**2.** Levels along the walk-back from the source:

$$H(3)=80, \\qquad H(6)=20, \\qquad H(9)=\\frac{720}{81}\\approx 8.89, \\qquad H(12)=5$$

**3.** Scale factors read straight off (2):

$$2^{-2}=\\frac{1}{4}, \\qquad 3^{-2}=\\frac{1}{9}, \\qquad 4^{-2}=\\frac{1}{16}$$

**4.** Invert (1) at the permitted dose rate:

$$d^{2}=\\frac{720}{5}=144 \\quad \\Rightarrow \\quad d=12$$

**5.** Distance buys safety quickly but not linearly: doubling the standoff removes three quarters of the dose rate, tripling it removes eight ninths, and the barrier sits at four times the survey distance because $80/5=16$ and $\\sqrt{16}=4$.

**Answer.** $A=720$ | $H(d)=720d^{-2}$ | $H(6)=20$ | barrier at $d=12$ m`,
  },
  {
    id: `math-8-76`,
    case_id: `MATH 8.76`,
    title: `A Dye Plume Spreading Across a Shallow Lake`,
    context: `A tracer dye released into a shallow lake spreads as a disc whose radius follows $r(t)=A t^{2/3}$ metres, with $t>0$ measured in hours since release. The survey note omits the coefficient: it records only that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The radius law is $r(t)=15t^{2/3}$ and the stained area is $S(t)=225\\pi t^{4/3}$.`,
      `Doubling the elapsed time multiplies the stained area by $2^{4/3}$, about $2.52$.`,
      `The stained area at hour $8$ is eight times its value at hour $1$.`,
      `The radius reaches $240$ metres $32$ hours after release.`,
      `The stained area grows in proportion to the elapsed time.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The $45$ metres is growth between two survey times, so the coefficient multiplies a difference of two shape factors rather than a single one. Both times are convenient, since $8^{2/3}=4$ and $1^{2/3}=1$.

$$A\\left(8^{2/3}-1^{2/3}\\right)=A(4-1)=3A=45 \\quad \\Rightarrow \\quad A=15$$

Squaring the radius law afterwards doubles its exponent and squares its coefficient:

$$S(t)=\\pi\\left(15t^{2/3}\\right)^{2}=\\pi(225)t^{4/3}=225\\pi\\,t^{4/3}$$

The calibration checks against the note, because $r(1)=15$ and $r(8)=60$ differ by exactly $45$ metres. Squaring only the time factor and leaving the coefficient outside the bracket would drop the $225$ entirely. Both laws in the claim are correct, so the statement is True.`,
      `**B.** → True

Area carries the exponent $4/3$, so doubling the elapsed time multiplies it by two raised to that exponent, with the coefficient cancelling in the ratio.

$$\\frac{S(2t)}{S(t)}=\\frac{225\\pi(2t)^{4/3}}{225\\pi t^{4/3}}=2^{4/3}$$

Splitting that power into an integer and a fractional part makes it easy to evaluate:

$$2^{4/3}=2\\cdot 2^{1/3}\\approx 2(1.2599)=2.5198$$

The factor holds at every point on the curve, so the stain grows by the same $2.52$ from hour $1$ to hour $2$ as from hour $12$ to hour $24$. Applying the radius factor $2^{2/3}\\approx 1.587$ to the area would forget that area squares the radius. The stained area grows by about $2.52$, so the statement is True.`,
      `**C.** → False

Between hour $1$ and hour $8$ the time multiplier is eight, and area responds through the exponent $4/3$ rather than through the multiplier itself.

$$\\frac{S(8)}{S(1)}=8^{4/3}=\\left(8^{1/3}\\right)^{4}=2^{4}=16$$

Levels at the two surveyed hours show the same factor:

$$S(1)=225\\pi, \\qquad S(8)=225\\pi(16)=3600\\pi$$

The radius only quadrupled over that interval, from $15$ to $60$ metres, and squaring four gives the sixteen. Carrying the time multiplier straight across gives exactly the claimed factor of eight, the answer for a law of exponent one. The area grows sixteenfold, so the statement is False.`,
      `**D.** → False

Recovering a time from a radius inverts the two-thirds power, so the exponent applied to the radius equation is its reciprocal $3/2$.

$$15t^{2/3}=240 \\quad \\Rightarrow \\quad t^{2/3}=16 \\quad \\Rightarrow \\quad t=16^{3/2}=64$$

Testing the claimed hour directly shows how far short it falls:

$$r(32)=15\\left(32^{2/3}\\right)\\approx 15(10.079)\\approx 151.2$$

The last stretch of spreading is slow, so waiting from hour $32$ to hour $64$ adds only about $89$ metres of radius. Inverting a two-thirds power by multiplying instead of raising to $3/2$ is what shortens the wait. The radius reaches $240$ metres at hour $64$, so the statement is False.`,
      `**E.** → False

Proportional growth requires exponent one, while squaring a two-thirds power leaves an exponent of $4/3$.

$$S(t)=225\\pi\\,t^{4/3}, \\qquad \\frac{S(2t)}{S(t)}=2^{4/3}\\approx 2.52\\ne 2$$

Dividing the area by the elapsed time isolates the mismatch:

$$\\frac{S(t)}{t}=225\\pi\\,t^{1/3}$$

That quotient would be constant under proportionality, but the leftover exponent $1/3$ keeps it rising, from $225\\pi$ at hour $1$ to $450\\pi$ at hour $8$. The stain does keep spreading without bound, which is what makes a linear reading tempting. Because the ratio $S(t)/t$ still rises with time, the stained area is not proportional to the elapsed time, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 76,
    solution_overview: `The plume radius is $r(t)=At^{2/3}$, calibrated by the $45$-metre growth between hour $1$ and hour $8$. The stained area is $S=\\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours since release, $r$ = plume radius in metres, $S$ = stained area in square metres. The survey gives a difference rather than a level, so the coefficient comes from subtracting two shape factors. Composing with the disc formula then doubles the exponent and squares the coefficient, so the area law is steeper than the radius law.

**1. Translate: the recorded growth.**

$$A\\left(8^{2/3}-1^{2/3}\\right)=45$$

**2. Translate: the composition.** Squaring the radius law doubles its exponent:

$$S(t)=\\pi\\left(At^{2/3}\\right)^{2}=\\pi A^{2}t^{4/3}$$

**3. Translate: a time multiplier.** The two respond through different exponents:

$$\\frac{r(kt)}{r(t)}=k^{2/3}, \\qquad \\frac{S(kt)}{S(t)}=k^{4/3}$$

**Part 2: The model.**

$$r(t)=15t^{2/3} \\tag{1}$$

$$S(t)=225\\pi\\,t^{4/3} \\tag{2}$$

**Part 3: Solve.**

**1.** Exact shape factors make the calibration a one-step solve:

$$8^{2/3}=4 \\;\\Rightarrow\\; 3A=45 \\;\\Rightarrow\\; A=15$$

**2.** Scale factors for the area, read off the exponent in (2):

$$2^{4/3}\\approx 2.5198, \\qquad 8^{4/3}=16$$

**3.** Levels at the two surveyed hours:

$$r(1)=15, \\quad r(8)=60, \\qquad S(1)=225\\pi, \\quad S(8)=3600\\pi$$

**4.** Invert (1) to find when the radius reaches $240$ metres:

$$t^{2/3}=16 \\quad \\Rightarrow \\quad t=16^{3/2}=64$$

**5.** The two exponents straddle one: area outruns proportional growth, since $4/3>1$, while the radius lags it, since $2/3<1$, so a target radius arrives far later than a linear reading would predict.

**Answer.** $A=15$ | $r(t)=15t^{2/3}$, $S(t)=225\\pi t^{4/3}$ | area factor $8^{4/3}=16$ over the first eight hours | $r=240$ m at $t=64$ h`,
  },
  {
    id: `math-8-77`,
    case_id: `MATH 8.77`,
    title: `A Weir Rating Curve Rewritten in New Units`,
    context: `Discharge over a measuring weir follows $Q(h)=A h^{3/2}$ cubic metres per second, where $h>0$ is the head in metres. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second. A field team wants the same rating curve rewritten with the head in centimetres, sometimes keeping discharge in cubic metres per second and sometimes reporting it in litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `In the original units the rating curve is $Q(h)=16h^{3/2}$.`,
      `With the head in centimetres and discharge still in cubic metres per second, the curve becomes $Q=1.6\\,h_{\\mathrm{cm}}^{3/2}$.`,
      `With the head in centimetres and discharge in litres per second, the coefficient is $16000$.`,
      `Switching the head from metres to centimetres leaves the exponent at $3/2$ but multiplies the coefficient by $100$.`,
      `A head of one metre discharges $32$ cubic metres per second.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

The weir formula supplies the exponent, so the single gauging fixes the coefficient once the three-halves power of a head below one metre is taken. Splitting that power into a square root and a cube keeps the arithmetic exact.

$$0.25^{3/2}=\\left(\\sqrt{0.25}\\right)^{3}=0.5^{3}=0.125$$

The gauging then becomes a one-step division:

$$A(0.125)=2 \\quad \\Rightarrow \\quad A=\\frac{2}{0.125}=16, \\qquad Q(h)=16h^{3/2}$$

The calibrated curve reproduces the gauging, because $16(0.125)=2$ cubic metres per second at a head of a quarter metre. Multiplying $0.25$ by $3/2$ instead of raising it to that power would give a coefficient near $5.3$. The rating curve is $Q(h)=16h^{3/2}$, so the statement is True.`,
      `**B.** → False

Rewriting the head in centimetres substitutes $h=h_{\\mathrm{cm}}/100$, and the exponent $3/2$ acts on the whole substitution, conversion factor included.

$$Q=16\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{3/2}=\\frac{16}{100^{3/2}}\\,h_{\\mathrm{cm}}^{3/2}$$

The conversion factor carries the same three-halves power as the head:

$$100^{3/2}=1000 \\quad \\Rightarrow \\quad Q=0.016\\,h_{\\mathrm{cm}}^{3/2}$$

A check at the gauged point settles it, since $h_{\\mathrm{cm}}=25$ gives $0.016(125)=2$, while the claimed coefficient would return $200$. Dividing the coefficient by $10$ once produces exactly the claimed $1.6$, which treats the conversion as if the exponent were $1/2$. The coefficient is $0.016$, so the statement is False.`,
      `**C.** → False

Two conversions act here at once: the head factor divides the coefficient by $100^{3/2}=1000$, while the switch to litres multiplies it by $1000$, and the two happen to cancel exactly.

$$Q_{\\mathrm{L}}=1000\\times\\frac{16}{1000}\\,h_{\\mathrm{cm}}^{3/2}=16\\,h_{\\mathrm{cm}}^{3/2}$$

The gauged point confirms the coefficient in the new pair of units:

$$h_{\\mathrm{cm}}=25 \\;\\Rightarrow\\; 16(125)=2000 \\text{ L/s}=2 \\text{ m}^{3}\\text{/s}$$

The repeated $16$ is a coincidence of these particular units rather than a sign that nothing changed. Applying only the litre conversion to the original coefficient gives exactly the claimed $16000$ and leaves the head still measured in metres. The coefficient in the new units is $16$, so the statement is False.`,
      `**D.** → False

A change of length unit multiplies the input by a constant, and a power function pushes that constant through its own exponent before it reaches the coefficient.

$$Q=16\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{3/2}=16\\times 100^{-3/2}\\,h_{\\mathrm{cm}}^{3/2}$$

Evaluating the converted factor shows both its size and its direction:

$$100^{-3/2}=\\frac{1}{1000} \\quad \\Rightarrow \\quad 16\\longrightarrow 0.016$$

The exponent half of the claim is right, since a unit change never touches it, but measuring the head in a smaller unit makes each numerical head larger and so shrinks the coefficient. The coefficient is divided by $1000$, so the statement is False.`,
      `**E.** → False

A head of one metre is the easiest point on any power curve, because every power of one is one and the coefficient stands alone.

$$Q(1)=16(1)^{3/2}=16$$

The scale-factor route from the gauged head confirms it, since $1/0.25=4$:

$$\\frac{Q(1)}{Q(0.25)}=4^{3/2}=\\left(\\sqrt{4}\\right)^{3}=8, \\qquad 8\\times 2=16$$

Quadrupling the head therefore raises discharge eightfold rather than sixteenfold, because the exponent is $3/2$ and not $2$. The claimed $32$ is what a squared law would give from $4^{2}=16$. The discharge is $16$ cubic metres per second, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 77,
    solution_overview: `The rating curve is $Q(h)=Ah^{3/2}$ in metres and cubic metres per second, pinned by the gauging $Q(0.25)=2$. The team wants the same curve in centimetres, and in litres per second.

**Part 1: Building the model.**

Let $h$ = head in metres, $h_{\\mathrm{cm}}=100h$ = head in centimetres, $Q$ = discharge. The exponent belongs to the weir, so one gauging fixes the coefficient. A change of unit replaces the input by a constant multiple of itself, and a power function pushes that constant through its exponent, so the exponent never moves and only the coefficient does. A change of output unit, by contrast, scales the coefficient directly.

**1. Translate: the gauging.**

$$A(0.25)^{3/2}=2$$

**2. Translate: the change of input unit.**

$$Q=A\\left(\\frac{h_{\\mathrm{cm}}}{100}\\right)^{3/2}=\\frac{A}{100^{3/2}}\\,h_{\\mathrm{cm}}^{3/2}$$

**3. Translate: the change of output unit.** One cubic metre per second is $1000$ litres per second.

**Part 2: The model.**

$$Q=16h^{3/2} \\quad \\text{(m, cubic m/s)} \\tag{1}$$

$$Q=0.016\\,h_{\\mathrm{cm}}^{3/2} \\quad \\text{(cm, cubic m/s)} \\tag{2}$$

$$Q=16\\,h_{\\mathrm{cm}}^{3/2} \\quad \\text{(cm, L/s)} \\tag{3}$$

**Part 3: Solve.**

**1.** The shape factor at the gauged head is exact:

$$0.25^{3/2}=0.5^{3}=0.125 \\;\\Rightarrow\\; A=\\frac{2}{0.125}=16$$

**2.** The head conversion carries the exponent:

$$100^{3/2}=1000 \\;\\Rightarrow\\; 16\\longrightarrow\\frac{16}{1000}=0.016$$

**3.** The litre conversion multiplies by $1000$ and cancels that division:

$$1000\\times 0.016=16$$

**4.** One check at the gauged point in each set of units:

$$16(0.25)^{3/2}=2, \\qquad 0.016(25)^{3/2}=2, \\qquad 16(25)^{3/2}=2000$$

**Answer.** $A=16$ | $Q=16h^{3/2}$ (m, cubic m/s) | $Q=0.016h_{\\mathrm{cm}}^{3/2}$ (cm, cubic m/s) | $Q=16h_{\\mathrm{cm}}^{3/2}$ (cm, L/s)`,
  },
  {
    id: `math-8-78`,
    case_id: `MATH 8.78`,
    title: `A Grain Dryer Calibrated From Two Recorded Ratios`,
    context: `Fuel use in a grain dryer follows $F(x)=A x^{r}$ litres per batch, where $x>0$ is the batch mass in tonnes. Neither constant is published. Two figures are on file: doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is $r=2$.`,
      `The fuel law is $F(x)=3x^{2}$.`,
      `A $10$-tonne batch uses $300$ litres.`,
      `Tripling the batch mass multiplies fuel use by $9$.`,
      `Fuel use per tonne is $3x$ litres, so it rises in proportion to batch mass.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

A percentage rise has to become a multiplier before an exponent can be read from it, and a doubling of the input then fixes that exponent through a power of two. The coefficient plays no part, since it cancels in the ratio.

$$\\frac{F(2x)}{F(x)}=\\frac{A(2x)^{r}}{Ax^{r}}=2^{r}=1+\\frac{300}{100}=4$$

Matching powers of the same base finishes the solve without logarithms:

$$2^{r}=4=2^{2} \\quad \\Rightarrow \\quad r=2$$

The record is a ratio rather than a level, which is exactly why it can settle the exponent while leaving the coefficient untouched. Reading the $300\\%$ as a multiplier of three would give $2^{r}=3$ and a non-integer exponent near $1.585$. The exponent is $r=2$, so the statement is True.`,
      `**B.** → True

With the exponent settled, the second record is a difference between two fuel levels, so the coefficient multiplies the gap between two squares.

$$A\\left(6^{2}-2^{2}\\right)=A(36-4)=32A=96$$

Dividing through leaves the coefficient and completes the law:

$$A=\\frac{96}{32}=3, \\qquad F(x)=3x^{2}$$

Both records check against the finished law, since $F(6)-F(2)=108-12=96$ litres and $F(4)/F(2)=48/12=4$. Treating the $96$ litres as the six-tonne batch's whole consumption would give $96/36$ and ignore the two-tonne baseline. The law is $F(x)=3x^{2}$, so the statement is True.`,
      `**C.** → True

Evaluating the calibrated law at a new batch size squares the mass first and applies the coefficient afterwards.

$$10^{2}=100, \\qquad F(10)=3(100)=300$$

The same figure appears as a scale factor from the two-tonne batch, since $10/2=5$ and $5^{2}=25$:

$$\\frac{F(10)}{F(2)}=\\frac{300}{12}=25$$

A five-fold batch therefore burns twenty-five times the fuel, which is the cost of an exponent above one. Scaling the six-tonne figure of $108$ litres by the mass ratio $10/6$ would give about $180$ litres, the answer for a proportional law. The batch uses $300$ litres, so the statement is True.`,
      `**D.** → True

A mass multiplier acts through the exponent two, so the coefficient and the starting mass cancel and only the square of the multiplier survives.

$$\\frac{F(3x)}{F(x)}=\\frac{3(3x)^{2}}{3x^{2}}=3^{2}=9$$

The two logged batch sizes stand in exactly that ratio:

$$F(2)=12, \\qquad F(6)=108=9\\times 12$$

Because the ratio ignores the starting mass, the same factor applies from $4$ tonnes to $12$ tonnes, where $48$ litres becomes $432$. Carrying the mass multiplier across unchanged would describe a law of exponent one and produce a factor of three rather than nine. Fuel use grows ninefold, so the statement is True.`,
      `**E.** → True

Fuel use per tonne divides the law by the mass, which lowers the exponent from two to one and leaves a quantity that still depends on batch size.

$$\\frac{F(x)}{x}=\\frac{3x^{2}}{x}=3x$$

Two logged batches show the per-tonne figure moving in step with the mass:

$$\\frac{F(2)}{2}=6, \\qquad \\frac{F(6)}{6}=18=3\\times 6$$

An exponent of one is precisely what proportionality means, so the tripled mass triples the per-tonne figure as well. A per-unit figure would be constant only if the underlying exponent were one, which is not the case here. The per-tonne figure is $3x$ and rises proportionally, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 78,
    solution_overview: `Fuel use is $F(x)=Ax^{r}$. The doubling rule fixes the exponent, and the $96$-litre gap between $2$ and $6$ tonnes fixes the coefficient.

**Part 1: Building the model.**

Let $x$ = batch mass in tonnes and $F$ = fuel use in litres. Two unknowns need two records, and the order in which they are used matters. The first is a ratio, which is blind to the coefficient and therefore isolates the exponent; the second is a difference of levels, which pins the coefficient once the exponent is known.

**1. Translate: the doubling rule.** A $300\\%$ rise is a multiplier of $4$:

$$\\frac{F(2x)}{F(x)}=2^{r}=4$$

**2. Translate: the logged gap.**

$$A\\left(6^{r}-2^{r}\\right)=96$$

**3. Translate: fuel per tonne.** Dividing lowers the exponent by one:

$$\\frac{F(x)}{x}=Ax^{r-1}$$

**Part 2: The model.**

$$r=2 \\tag{1}$$

$$F(x)=3x^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The ratio equation is settled by matching powers of two:

$$2^{r}=4=2^{2} \\quad \\Rightarrow \\quad r=2$$

**2.** With $r=2$ the difference of squares is exact:

$$A(36-4)=32A=96 \\quad \\Rightarrow \\quad A=3$$

**3.** Levels along the curve:

$$F(2)=12, \\qquad F(6)=108, \\qquad F(10)=300$$

**4.** Scale factors and the per-tonne figure:

$$\\frac{F(3x)}{F(x)}=3^{2}=9, \\qquad \\frac{F(x)}{x}=3x$$

**5.** Every claim here follows from the single exponent $2$: mass multipliers arrive squared, so doubling costs four times the fuel and tripling nine times, while the per-tonne figure keeps one leftover power of the mass and therefore climbs proportionally.

**Answer.** $r=2$, $A=3$ | $F(x)=3x^{2}$ | $F(10)=300$ litres | fuel per tonne $=3x$`,
  },
  {
    id: `math-8-79`,
    case_id: `MATH 8.79`,
    title: `Kiln Flue Mass Flow into a Particulate Index`,
    context: `A kiln's flue-gas mass flow follows $m(t)=A t^{1/2}$ tonnes per hour for throttle setting $t>0$, and the particulate load index is then $P(m)=m^{4}/16$. A calibration at $t=9$ recorded $m=6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The intermediate law is $m(t)=2t^{1/2}$.`,
      `The composed map is $P(m(t))=t^{2}$.`,
      `Doubling the throttle setting doubles the composed particulate index.`,
      `At $t=25$ the intermediate mass flow is $50$ tonnes per hour.`,
      `Inverting the composed law, an index of $81$ requires throttle setting $t=27$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The square-root shape is given by the model, so a single recorded pair is enough to pin the coefficient. Substitute the calibration setting into the intermediate rule:

$$m(9)=A\\cdot 9^{1/2}=3A$$

The recorded reading was $6$ tonnes per hour, which turns the substitution into an equation:

$$3A=6 \\quad \\Rightarrow \\quad A=2$$

The calibrated intermediate law is $m(t)=2t^{1/2}$, and it reproduces the record, since $2\\sqrt{9}=2\\cdot 3=6$. Reading the recorded $6$ as the coefficient itself is the tempting slip here: that would ignore the factor $9^{1/2}=3$ sitting between the coefficient and the reading, and it would predict $m(9)=18$ tonnes per hour instead. The recovered law is exactly the one named, so the statement is True.`,
      `**B.** → True

Composition substitutes the calibrated intermediate law into the particulate rule, and raising a power to a power multiplies the exponents:

$$P(m(t))=\\frac{\\left(2t^{1/2}\\right)^{4}}{16}=\\frac{2^{4}\\,t^{2}}{16}=\\frac{16\\,t^{2}}{16}=t^{2}$$

The coefficient cancels exactly, because $2^{4}=16$ matches the divisor sitting in the outer rule. Check the collapsed map against the calibration, where the intermediate reading was $6$:

$$P(6)=\\frac{6^{4}}{16}=\\frac{1296}{16}=81=9^{2}$$

Both routes give $81$ at throttle setting $9$, one through the two-stage chain and one through the composed square. Stopping after recovering $A$ would leave the outer rule unused, which is the usual way a two-stage chain goes unfinished. The composed map is $t^{2}$, so the statement is True.`,
      `**C.** → False

A doubling of the throttle is an input multiplier of $k=2$, and it reaches the index through the composed exponent $2$ rather than through the inner exponent $1/2$:

$$\\frac{P(m(2t))}{P(m(t))}=\\frac{(2t)^{2}}{t^{2}}=2^{2}=4$$

Levels make the size of the jump concrete, starting from the calibration setting:

$$P(m(9))=9^{2}=81, \\qquad P(m(18))=18^{2}=324$$

and $324=4\\times 81$. A doubling of the index would require a composed exponent of $1$, which this chain cannot produce: the inner square root halves the exponent, but the fourth power in the outer rule more than restores it. Doubling the throttle setting multiplies the particulate index by $4$, so the statement is False.`,
      `**D.** → False

The intermediate reading at a new setting comes from the calibrated square-root law, not from scaling the recorded pair in proportion. Take the square root first, since $25^{1/2}=5$:

$$m(25)=2\\cdot 25^{1/2}=2\\cdot 5=10$$

The scaling rule agrees, because the setting moves from $9$ to $25$ by a factor of $25/9$ and the exponent is $1/2$:

$$\\frac{m(25)}{m(9)}=\\left(\\frac{25}{9}\\right)^{1/2}=\\frac{5}{3}, \\qquad 6\\cdot\\frac{5}{3}=10$$

A proportional guess would give $6\\times 25/9\\approx 16.67$ tonnes per hour, and the quoted $50$ is further still, being what the coefficient $2$ would deliver if the exponent were $1$. The mass flow at setting $25$ is $10$ tonnes per hour, so the statement is False.`,
      `**E.** → False

Inverting the composed law means undoing a square, and the reciprocal exponent $1/2$ is what does that:

$$P=t^{2} \\quad \\Longleftrightarrow \\quad t=P^{1/2}$$

Apply the inverse to the target index and then run the chain forward as a check:

$$t=81^{1/2}=9, \\qquad m(9)=6, \\qquad P(6)=\\frac{1296}{16}=81$$

The quoted setting of $27$ comes from treating the exponent as a number to divide by, or from reading $81$ as $3^{3}$ scaled up; either route confuses powers with factors. Because the composed map is strictly increasing on $t>0$, the solution is unique, and no second setting can deliver the same index. The required throttle setting is $9$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 79,
    solution_overview: `Flue mass flow is $m(t)=At^{1/2}$ tonnes per hour with the calibration $m(9)=6$, and the particulate index is $P(m)=m^{4}/16$.

**Part 1: Building the model.**

Let $t$ = throttle setting, $m$ = mass flow in tonnes per hour, $P$ = particulate load index. The square-root shape is supplied, so one recorded pair fixes the coefficient. Composition then feeds the intermediate output into the second rule, and raising a power to a power multiplies the two exponents.

**1. Translate: the calibration.**

$$A\\cdot 9^{1/2}=6, \\qquad 9^{1/2}=3$$

**2. Translate: the chain.** Substituting the inner rule into the outer one carries the inner coefficient up to the outer exponent:

$$P(m(t))=\\frac{\\left(At^{1/2}\\right)^{4}}{16}=\\frac{A^{4}}{16}\\,t^{2}$$

**Part 2: The model.**

$$m(t)=2\\,t^{1/2} \\tag{1}$$

$$P(m(t))=t^{2} \\tag{2}$$

**Part 3: Solve.**

**1.** The calibration gives the coefficient:

$$3A=6 \\quad \\Rightarrow \\quad A=2$$

**2.** The composed coefficient collapses, since $2^{4}/16=1$, leaving the pure square in $(2)$.

**3.** Scale factors run through the composed exponent, never through the inner one:

$$\\frac{P(m(2t))}{P(m(t))}=2^{2}=4$$

**4.** Intermediate levels at the settings the statements use:

$$m(9)=6, \\qquad m(25)=10$$

**5.** Inverting $(2)$ turns a target index into a throttle setting by a square root:

$$t^{2}=81 \\quad \\Rightarrow \\quad t=9$$

The chain compresses a half and a fourth power into a clean square, so the index reacts far more sharply to the throttle than the mass flow does.

**Answer.** $A=2$ | $m(t)=2\\sqrt{t}$ | $P\\circ m=t^{2}$ | index $81$ at $t=9$`,
  },
  {
    id: `math-8-80`,
    case_id: `MATH 8.80`,
    title: `Two Shuttle Fare Timers Under a Wait Cap`,
    context: `Two municipal shuttle apps quote wait time for a trip of distance $d>0$ kilometres. App L uses $L(d)=4d^{1/2}$ minutes and App Q uses $Q(d)=0.2d$ minutes. A service-level agreement caps wait at $20$ minutes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The two apps quote the same wait at $d=400$.`,
      `Under the $20$-minute cap, App L can serve at most $d=25$.`,
      `Under the same cap, App Q can serve at most $d=100$.`,
      `For every $d>400$, App L is strictly faster than App Q.`,
      `Doubling distance doubles App L's quoted wait.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

A crossover is the distance at which the two timers quote the same wait, so set the two rules equal:

$$4d^{1/2}=0.2d$$

Divide both sides by $d^{1/2}$, which is positive on the stated domain, and the equation collapses to a single square root:

$$4=0.2\\,d^{1/2} \\quad \\Rightarrow \\quad d^{1/2}=20 \\quad \\Rightarrow \\quad d=400$$

Check both quotes at that distance:

$$L(400)=4\\cdot 20=80, \\qquad Q(400)=0.2\\cdot 400=80$$

Both apps promise $80$ minutes, so the tie is exact rather than approximate. Comparing coefficients alone would suggest App L is always the slower quote, since $4$ dwarfs $0.2$, but the coefficient governs only the short-distance picture while the exponent decides the long run. The apps agree at $d=400$, so the statement is True.`,
      `**B.** → True

App L's quote increases with distance, so a ceiling on wait translates directly into a ceiling on distance. Impose the agreement:

$$4d^{1/2}\\le 20$$

Divide by the coefficient and then square, both steps legitimate because every quantity here is positive:

$$d^{1/2}\\le 5 \\quad \\Rightarrow \\quad d\\le 25$$

The endpoint is attained exactly, which is what makes it the largest admissible trip:

$$L(25)=4\\cdot 5=20$$

Any longer trip breaches the promise, since $L(36)=24$ minutes already sits above the cap. Leaving the answer at $d^{1/2}\\le 5$ would report a square root rather than a distance, and the squaring step is what converts one into the other. App L can serve at most $25$ kilometres, so the statement is True.`,
      `**C.** → True

App Q's quote is a power function with exponent $1$, so inverting the same cap needs nothing more than a division:

$$0.2d\\le 20 \\quad \\Rightarrow \\quad d\\le \\frac{20}{0.2}=100$$

The endpoint is again attained exactly:

$$Q(100)=0.2\\cdot 100=20$$

The two ceilings are worth setting side by side. App L is capped at $25$ kilometres and App Q at $100$, so the tighter constraint belongs to the app with the smaller exponent, because its large coefficient dominates on short trips. One app's ceiling does not bind the other: these are separate inversions of the same $20$ minute promise against different rules. App Q can serve out to $100$ kilometres, so the statement is True.`,
      `**D.** → True

Comparing two power functions is cleanest through their ratio, because the ratio is itself a power:

$$\\frac{L(d)}{Q(d)}=\\frac{4d^{1/2}}{0.2d}=20\\,d^{-1/2}=\\frac{20}{\\sqrt{d}}$$

App L is strictly faster exactly when that ratio drops below $1$:

$$\\frac{20}{\\sqrt{d}}<1 \\quad \\Longleftrightarrow \\quad \\sqrt{d}>20 \\quad \\Longleftrightarrow \\quad d>400$$

At $d=400$ the ratio equals $1$, matching the tie found earlier, and beyond that point it keeps falling because the exponent $-1/2$ is negative. A level check past the crossover confirms the ordering, since $L(900)=120$ minutes against $Q(900)=180$ minutes. The inequality holds at every distance above $400$, so the statement is True.`,
      `**E.** → False

Doubling the distance is an input multiplier of $k=2$, and App L's quote responds through its own exponent $1/2$:

$$\\frac{L(2d)}{L(d)}=\\frac{4(2d)^{1/2}}{4d^{1/2}}=2^{1/2}\\approx 1.4142$$

The wait grows by about $41.4\\%$, not by the $100\\%$ a doubling would need. Levels from the crossover show the gap plainly:

$$L(400)=80, \\qquad L(800)=4\\sqrt{800}\\approx 113.14$$

A doubling would demand $160$ minutes, and the model returns roughly $113$. Exact doubling is the signature of exponent $1$, and in this task that exponent belongs to App Q, whose quote does move from $80$ to $160$ minutes across the same two distances. The claim attaches App Q's scaling rule to App L, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 80,
    solution_overview: `App L quotes $L(d)=4d^{1/2}$ minutes, App Q quotes $Q(d)=0.2d$ minutes, and the agreement caps wait at $20$ minutes.

**Part 1: Building the model.**

Let $d$ = trip distance in kilometres, $L$ and $Q$ = quoted waits in minutes. Both quotes are power functions of distance, one with exponent $1/2$ and one with exponent $1$. The larger exponent must win eventually, so the two quotes cross exactly once on $d>0$, and each quote inverts separately against the shared cap.

**1. Translate: the crossover.**

$$4d^{1/2}=0.2d$$

**2. Translate: the cap.** Both timers increase, so a ceiling on wait becomes a ceiling on distance:

$$4d^{1/2}\\le 20, \\qquad 0.2d\\le 20$$

**Part 2: The model.**

$$\\frac{L(d)}{Q(d)}=\\frac{4d^{1/2}}{0.2d}=20\\,d^{-1/2} \\tag{1}$$

$$\\frac{L(kd)}{L(d)}=k^{1/2} \\tag{2}$$

**Part 3: Solve.**

**1.** Setting $(1)$ equal to $1$ locates the tie:

$$d^{1/2}=20 \\quad \\Rightarrow \\quad d=400$$

**2.** Quotes at the crossover:

$$L(400)=80, \\qquad Q(400)=80$$

**3.** Inverting each timer against the cap:

$$d\\le 25 \\text{ for App L}, \\qquad d\\le 100 \\text{ for App Q}$$

**4.** The ranking past the tie, again from $(1)$:

$$20\\,d^{-1/2}<1 \\quad \\Longleftrightarrow \\quad d>400$$

**5.** Distance multipliers act through each exponent separately, so $(2)$ gives $2^{1/2}\\approx 1.4142$ for App L while App Q's quote simply doubles. App L is the slower quote on short trips, which is why the cap binds it sooner, and the faster quote beyond $400$ kilometres.

**Answer.** crossover at $d=400$ | App L cap $d\\le 25$ | App Q cap $d\\le 100$ | App L faster for $d>400$`,
  },
  {
    id: `math-8-81`,
    case_id: `MATH 8.81`,
    title: `Wetland Evaporation Across Three Humidity Readings`,
    context: `A field team records wetland evaporation $E$ millimetres per day against humidity deficit $h>0$. Three readings are $(h,E)=(1,20)$, $(4,40)$ and $(9,60)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `All three observations fit the single power law $E(h)=20h^{1/2}$.`,
      `The exponent recovered from the first two readings alone is $1$.`,
      `A linear model through the first two readings also hits the third.`,
      `Doubling the humidity deficit from any of the three readings doubles evaporation.`,
      `With exponent forced to $1$, the coefficient recovered from $(9,60)$ alone is $20$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

A single power law must reproduce every reading with one coefficient and one exponent. Take the ratio of the first two readings, which cancels the coefficient and isolates the exponent:

$$\\frac{E(4)}{E(1)}=\\left(\\frac{4}{1}\\right)^{r}=\\frac{40}{20} \\quad \\Rightarrow \\quad 4^{r}=2 \\quad \\Rightarrow \\quad r=\\tfrac12$$

The first reading then fixes the coefficient, since $1^{1/2}=1$:

$$A\\cdot 1=20 \\quad \\Rightarrow \\quad A=20, \\qquad E(h)=20h^{1/2}$$

The third reading played no part in the fitting, so it is a genuine test rather than a restatement. Evaluate the candidate there, using $9^{1/2}=3$:

$$E(9)=20\\cdot 3=60$$

That is exactly the recorded value, so all three field points lie on the same square-root curve, so the statement is True.`,
      `**B.** → False

The ratio of the first two readings isolates the exponent, because the coefficient appears in both readings and cancels:

$$\\frac{A\\cdot 4^{r}}{A\\cdot 1^{r}}=4^{r}=\\frac{40}{20}=2$$

Solving $4^{r}=2$ amounts to asking which power of $4$ returns $2$, and the answer is the square root:

$$4^{1/2}=2 \\quad \\Rightarrow \\quad r=\\tfrac12$$

An exponent of $1$ would make evaporation proportional to the deficit, so quadrupling the deficit from $1$ to $4$ would quadruple evaporation from $20$ to $80$ millimetres per day. The team recorded $40$, which is only a doubling, and a doubling of output against a quadrupling of input is the signature of exponent $1/2$. The recovered exponent is $1/2$, so the statement is False.`,
      `**C.** → False

A straight line through two points is unique, so build it and then test the third reading against it. The slope is the rise over the run:

$$\\frac{40-20}{4-1}=\\frac{20}{3}$$

Anchoring at $(1,20)$ gives the line

$$E_{\\text{lin}}(h)=20+\\frac{20}{3}(h-1)$$

Evaluate that line at the third humidity deficit:

$$E_{\\text{lin}}(9)=20+\\frac{20}{3}\\cdot 8=20+\\frac{160}{3}=\\frac{220}{3}\\approx 73.33$$

The recorded value is $60$, so the line overshoots by more than $13$ millimetres per day. The direction of the error is no accident: a chord drawn across a square-root curve rises too steeply once it is extended past the second anchor. The line misses $(9,60)$, so the statement is False.`,
      `**D.** → False

Under the fitted law the exponent is $1/2$, so an input multiplier of $k=2$ produces the output multiplier

$$\\frac{E(2h)}{E(h)}=2^{1/2}\\approx 1.4142$$

Evaporation rises by about $41.4\\%$, well short of doubling, and the multiplier is identical at every reading because the coefficient cancels out of the ratio. Check it at the first recorded deficit:

$$E(1)=20, \\qquad E(2)=20\\sqrt{2}\\approx 28.28$$

A doubling would need $40$ millimetres per day, and that figure belongs to $h=4$, a quadrupling of the deficit rather than a doubling. The recorded data make the same point directly, since moving from $(1,20)$ to $(4,40)$ took four times the deficit to double the evaporation. Doubling the deficit does not double the output, so the statement is False.`,
      `**E.** → False

Forcing the exponent to $1$ turns the model into $E(h)=Ah$, and calibrating that on the third reading alone is an ordinary division:

$$A\\cdot 9=60 \\quad \\Rightarrow \\quad A=\\frac{60}{9}=\\frac{20}{3}\\approx 6.67$$

The coefficient $20$ named in the claim belongs to the square-root fit, where it multiplies $h^{1/2}$ rather than $h$ itself, so the two numbers are attached to different rules. The forced linear law reproduces only the reading it was fitted to:

$$\\frac{20}{3}\\cdot 1\\approx 6.67\\neq 20, \\qquad \\frac{20}{3}\\cdot 4\\approx 26.67\\neq 40$$

Both earlier readings are missed by a wide margin. The recovered coefficient is $20/3$, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 81,
    solution_overview: `Three wetland readings are $(h,E)=(1,20)$, $(4,40)$ and $(9,60)$, and the question is whether one power law $E(h)=Ah^{r}$ carries all three.

**Part 1: Building the model.**

Let $h$ = humidity deficit, $E$ = evaporation in millimetres per day. A power law has two unknowns, so two readings determine it and the third becomes a test. Ratios are the efficient route, because dividing one reading by another cancels the coefficient and leaves the exponent alone.

**1. Translate: the ratio of the first two readings.**

$$\\frac{A\\cdot 4^{r}}{A\\cdot 1^{r}}=\\frac{40}{20} \\quad \\Rightarrow \\quad 4^{r}=2$$

**2. Translate: the coefficient.** With the exponent known, the first reading fixes $A$:

$$A\\cdot 1^{1/2}=20$$

**Part 2: The model.**

$$E(h)=20\\,h^{1/2} \\tag{1}$$

$$\\frac{E(kh)}{E(h)}=k^{1/2} \\tag{2}$$

**Part 3: Solve.**

**1.** Exponent and coefficient from the first two readings:

$$r=\\tfrac12, \\qquad A=20$$

**2.** The third reading is the test, and $(1)$ passes it:

$$E(9)=20\\cdot 3=60$$

**3.** A line through the first two readings has slope $20/3$ and misses the third:

$$20+\\frac{20}{3}\\cdot 8=\\frac{220}{3}\\approx 73.33$$

**4.** Doubling the deficit uses $(2)$ with $k=2$:

$$2^{1/2}\\approx 1.4142$$

**5.** Forcing the exponent to $1$ at the last reading alone gives $A=60/9=20/3$, a rival law that misses both earlier points. The data themselves show why: the deficit rises ninefold from $1$ to $9$ while evaporation only triples, and a ninefold input against a threefold output is exactly what an exponent of $1/2$ predicts.

**Answer.** $E(h)=20\\sqrt{h}$ fits all three | exponent $1/2$ with coefficient $20$ | the line gives $220/3$ at $h=9$`,
  },
  {
    id: `math-8-82`,
    case_id: `MATH 8.82`,
    title: `Shade-Tree Cooling Benefit Against Upkeep Cost`,
    context: `A city parks office models annual cooling benefit by $B(n)=12n^{1/2}$ thousand euros and annual upkeep by $C(n)=2n$ thousand euros, where $n>0$ is the number of thousand trees planted. Net benefit is $N(n)=B(n)-C(n)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At $n=9$, net benefit is $18$ thousand euros.`,
      `At $n=4$, net benefit is $16$ thousand euros.`,
      `At $n=1$, net benefit is $10$ thousand euros.`,
      `At $n=36$, net benefit is $0$.`,
      `Net benefit is positive at each of $n=1$, $n=4$ and $n=9$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Net benefit is the difference of two schedules, so both have to be evaluated before subtracting. Take the square root first, since $9^{1/2}=3$:

$$B(9)=12\\cdot 9^{1/2}=12\\cdot 3=36, \\qquad C(9)=2\\cdot 9=18$$

The net is whatever survives the subtraction:

$$N(9)=36-18=18$$

Reporting the benefit of $36$ on its own would answer a different question, and so would reporting the upkeep of $18$ without noticing that the net happens to share its value at this planting. The coincidence is worth naming: at nine thousand trees the benefit is exactly twice the upkeep, which is why the net and the upkeep agree. Net benefit is $18$ thousand euros, so the statement is True.`,
      `**B.** → True

The same subtraction runs at the smaller planting. The square root of $4$ is $2$, so the two schedules read

$$B(4)=12\\cdot 2=24, \\qquad C(4)=2\\cdot 4=8$$

and the net is the gap between them:

$$N(4)=24-8=16$$

The figure sits close to the net at nine thousand trees, which was $18$, even though this planting is less than half the size. That flatness is the exponent at work: quadrupling the planting from $1$ to $4$ only doubles the benefit while it quadruples the upkeep, so each extra tree adds less to the net than the one before it. Net benefit at four thousand trees is $16$ thousand euros, so the statement is True.`,
      `**C.** → True

At the smallest planting both schedules are easy to read off, since $1^{1/2}=1$:

$$B(1)=12\\cdot 1=12, \\qquad C(1)=2\\cdot 1=2$$

Subtracting gives the net directly:

$$N(1)=12-2=10$$

The claim asks for the difference rather than for either schedule alone, and $10$ is that difference. The ratio of the two schedules here is $12/2=6$, the largest value it ever takes, because $B/C=6/\\sqrt{n}$ falls steadily as the planting grows. Benefit therefore holds its widest relative lead at the smallest planting, even though the absolute net is smallest there. Net benefit is $10$ thousand euros, so the statement is True.`,
      `**D.** → True

At the break-even planting the two schedules meet exactly. Evaluate each of them, using $36^{1/2}=6$:

$$B(36)=12\\cdot 6=72, \\qquad C(36)=2\\cdot 36=72$$

The net is therefore

$$N(36)=72-72=0$$

The same conclusion follows from the ratio without computing levels at all, since $B\\ge C$ holds exactly when $6/\\sqrt{n}\\ge 1$, which means $n\\le 36$. The planting of thirty-six thousand trees is the boundary case, where that inequality becomes an equality. Beyond it upkeep runs ahead and the net turns negative, for instance $N(49)=84-98=-14$. Net benefit is exactly zero at $n=36$, so the statement is True.`,
      `**E.** → True

The claim bundles three evaluations, and all three follow the same subtraction:

$$N(1)=12-2=10, \\qquad N(4)=24-8=16, \\qquad N(9)=36-18=18$$

Each of these is strictly greater than zero:

$$10>0, \\qquad 16>0, \\qquad 18>0$$

The general condition confirms that no intermediate plantings need checking. Net benefit is positive throughout $0<n<36$, because $B/C=6/\\sqrt{n}$ exceeds $1$ on that whole range, and all three plantings in the trio sit far below the threshold. Zero first appears at thirty-six thousand trees, which is outside the listed set. Net benefit is positive at each of the three plantings, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 82,
    solution_overview: `Cooling benefit is $B(n)=12n^{1/2}$ thousand euros, upkeep is $C(n)=2n$ thousand euros, and net benefit is $N(n)=B(n)-C(n)$.

**Part 1: Building the model.**

Let $n$ = thousands of trees planted, $B$ = annual cooling benefit, $C$ = annual upkeep, $N=B-C$ = net benefit, each in thousand euros. Benefit is a power with exponent $1/2$ and upkeep is a power with exponent $1$, so benefit leads at small plantings while upkeep must overtake it eventually.

**1. Translate: the net.**

$$N(n)=12n^{1/2}-2n$$

**2. Translate: the crossing.** Dividing by the positive quantity $2n^{1/2}$ reduces the comparison to one square root:

$$\\frac{B(n)}{C(n)}=\\frac{6}{n^{1/2}}$$

**Part 2: The model.**

$$N(n)=12\\sqrt{n}-2n \\tag{1}$$

$$B(n)\\ge C(n) \\quad \\Longleftrightarrow \\quad n\\le 36 \\tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the plantings the statements use:

$$1^{1/2}=1, \\qquad 4^{1/2}=2, \\qquad 9^{1/2}=3, \\qquad 36^{1/2}=6$$

**2.** Benefits at those plantings:

$$12, \\qquad 24, \\qquad 36, \\qquad 72$$

**3.** Upkeep at the same plantings:

$$2, \\qquad 8, \\qquad 18, \\qquad 72$$

**4.** Netting the two schedules line by line:

$$N(1)=10, \\qquad N(4)=16, \\qquad N(9)=18, \\qquad N(36)=0$$

**5.** Every net in the trio is strictly positive, and the net first reaches zero at the break-even planting of thirty-six thousand trees given by $(2)$. Past that point upkeep runs ahead, because its exponent is the larger of the two.

**Answer.** $N(1)=10$ | $N(4)=16$ | $N(9)=18$ | break-even at $N(36)=0$`,
  },
  {
    id: `math-8-83`,
    case_id: `MATH 8.83`,
    title: `Trail-Map Kiosk Demand Inverted from Price`,
    context: `Weekly pamphlet demand at a trail-map kiosk follows $q(p)=A p^{-2}$ packs per week, where $p>0$ is price in euros. At $p=5$ euros the kiosk sold $80$ packs. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The demand law is $q(p)=2000p^{-2}$ packs per week.`,
      `At $p=10$ euros, demand is $20$ packs per week.`,
      `A target of $125$ packs per week requires price $p=4$ euros.`,
      `Doubling the price halves demand.`,
      `Weekly revenue $R(p)=p\\,q(p)$ is the same at every price.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The shape of the demand rule is supplied, so a single priced observation is enough to recover the coefficient. Substitute the recorded price, using $5^{-2}=1/25$:

$$q(5)=A\\cdot 5^{-2}=\\frac{A}{25}$$

The kiosk sold $80$ packs at that price, which turns the substitution into an equation:

$$\\frac{A}{25}=80 \\quad \\Rightarrow \\quad A=80\\times 25=2000$$

The calibrated rule is $q(p)=2000p^{-2}$, and it reproduces the record, since $2000/25=80$ packs per week. The exponent had to be known in advance for one observation to suffice; a second pair would have been required to recover it. The demand law matches the claim, so the statement is True.`,
      `**B.** → True

Substituting the new price into the calibrated rule is a direct evaluation:

$$q(10)=2000\\cdot 10^{-2}=\\frac{2000}{100}=20$$

The scaling route gives the same figure without touching the coefficient again. The price moves from $5$ to $10$, an input multiplier of $2$, and demand responds through the exponent $-2$:

$$\\frac{q(10)}{q(5)}=2^{-2}=\\frac14, \\qquad 80\\times\\frac14=20$$

Both routes land on $20$ packs per week. The drop is steep because the exponent has magnitude $2$: the kiosk loses three quarters of its sales when it doubles the price. Demand at ten euros is $20$ packs per week, so the statement is True.`,
      `**C.** → True

Solving for a price means inverting the rule, and the reciprocal of the exponent is what undoes it. Impose the target on the calibrated law:

$$2000p^{-2}=125 \\quad \\Rightarrow \\quad p^{2}=\\frac{2000}{125}=16$$

Take the positive root, since price is positive on the stated domain:

$$p=\\sqrt{16}=4, \\qquad q(4)=\\frac{2000}{16}=125$$

The forward check returns the target exactly. Applying the exponent $-2$ a second time instead of its reciprocal would run demand forwards rather than solve for price, and it would produce a quantity where a euro figure is wanted. Because demand is strictly decreasing on $p>0$, no second price hits the same target. The required price is $4$ euros, so the statement is True.`,
      `**D.** → False

A doubling of price is an input multiplier of $k=2$, and demand responds through the exponent $-2$ rather than through $-1$:

$$\\frac{q(2p)}{q(p)}=2^{-2}=\\frac14$$

Only a quarter of the sales survive, a loss of $75\\%$ rather than the $50\\%$ asserted. Levels from the recorded observation show the same thing:

$$q(5)=80, \\qquad q(10)=\\frac{2000}{100}=20$$

Halving would have left $40$ packs per week, and the model gives $20$. An exact halving requires an exponent of $-1$, which in this task is the revenue exponent rather than the demand exponent, so the claim borrows the wrong rule from the same problem. Demand falls to a quarter, so the statement is False.`,
      `**E.** → False

Revenue multiplies price by quantity, and multiplying by $p$ adds one to the exponent:

$$R(p)=p\\cdot 2000p^{-2}=2000\\,p^{-1}=\\frac{2000}{p}$$

A schedule that is the same at every price would need exponent $0$, and this one carries $-1$. Two evaluations settle the matter:

$$R(5)=\\frac{2000}{5}=400, \\qquad R(10)=\\frac{2000}{10}=200$$

Revenue halves when the price doubles, and it tends to zero as price grows without bound. Revenue would have been flat only if demand had carried the exponent $-1$, since $p$ times $p^{-1}$ is a constant; the extra magnitude in $-2$ is exactly what costs the kiosk money when it raises the price. Revenue varies with price, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 83,
    solution_overview: `Pamphlet demand is $q(p)=Ap^{-2}$ packs per week with the recorded pair $q(5)=80$, and weekly revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros, $q$ = packs sold per week, $R$ = weekly revenue in euros. The inverse-square exponent is supplied by the model, so one priced observation fixes the coefficient. Revenue then follows by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A\\cdot 5^{-2}=80, \\qquad 5^{-2}=\\frac{1}{25}$$

**2. Translate: inverting a target.** A demand target becomes a price through the reciprocal exponent:

$$Ap^{-2}=q \\quad \\Longleftrightarrow \\quad p=\\left(\\frac{A}{q}\\right)^{1/2}$$

**Part 2: The model.**

$$q(p)=2000\\,p^{-2} \\tag{1}$$

$$R(p)=p\\cdot 2000p^{-2}=2000\\,p^{-1} \\tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=80\\times 25=2000$$

**2.** Demand at the prices the statements use:

$$q(5)=80, \\qquad q(10)=20, \\qquad q(4)=125$$

**3.** The inversion of a target of $125$ packs, from $(1)$:

$$p^{2}=\\frac{2000}{125}=16 \\quad \\Rightarrow \\quad p=4$$

**4.** The multiplier from a doubling of price:

$$\\frac{q(2p)}{q(p)}=2^{-2}=\\frac14$$

**5.** Revenue in $(2)$ falls as price rises, since $R(5)=400$ and $R(10)=200$, so it is not the same at every price. The exponents tell the whole story: demand carries $-2$, revenue carries $-1$, and only an exponent of $0$ would give a flat schedule.

**Answer.** $A=2000$ | $q(10)=20$ | target of $125$ packs at $p=4$ | $R(p)=2000/p$`,
  },
  {
    id: `math-8-84`,
    case_id: `MATH 8.84`,
    title: `Bike-Share Passes Under a Subsidy Price Index`,
    context: `Weekly bike-share day-pass sales follow $q(p)=A p^{-3/2}$ when the pass price is $p>0$ euros. A pilot at $p=16$ sold $50$ passes. Policy indexes the pass by $p(s)=4s^{2/3}$ for a positive subsidy index $s$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The demand law is $q(p)=3200p^{-3/2}$.`,
      `Under the policy map, composed demand simplifies to $400/s$.`,
      `Tripling the subsidy index triples composed demand.`,
      `At $s=8$, composed demand is $100$ passes.`,
      `Doubling the posted pass price halves demand.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

The exponent is supplied by the model, so the pilot sale pins the coefficient. Evaluate the power by taking the square root first and then cubing:

$$16^{3/2}=\\left(\\sqrt{16}\\right)^{3}=4^{3}=64, \\qquad 16^{-3/2}=\\frac{1}{64}$$

The pilot record therefore reads as a single equation in the coefficient:

$$\\frac{A}{64}=50 \\quad \\Rightarrow \\quad A=50\\times 64=3200$$

The calibrated rule is $q(p)=3200p^{-3/2}$, and it reproduces the pilot, since $3200/64=50$ passes. The fractional exponent is where the arithmetic usually goes wrong: $16^{3/2}$ is $64$, not $24$ and not $4096$, because the denominator of the exponent takes a square root before the numerator cubes. The claimed law matches, so the statement is True.`,
      `**B.** → True

Composition substitutes the policy price into the demand rule. A power raised to a power multiplies the exponents, and the inner coefficient is raised on its own:

$$q(p(s))=3200\\left(4s^{2/3}\\right)^{-3/2}=3200\\cdot 4^{-3/2}\\cdot s^{(2/3)(-3/2)}$$

Evaluate the two pieces separately, writing $4=2^{2}$ to keep the fractional exponent clean:

$$4^{-3/2}=\\left(2^{2}\\right)^{-3/2}=2^{-3}=\\frac18, \\qquad \\left(\\tfrac23\\right)\\left(-\\tfrac32\\right)=-1$$

Multiplying the pieces through collapses the chain to ordinary inverse proportionality:

$$q(p(s))=3200\\cdot\\frac18\\cdot s^{-1}=\\frac{400}{s}$$

The composed rule is $400/s$, so the statement is True.`,
      `**C.** → False

Composed demand carries the exponent $-1$ in the subsidy index, so an input multiplier of $k=3$ produces the output multiplier

$$\\frac{q(p(3s))}{q(p(s))}=3^{-1}=\\frac13$$

Demand falls to a third rather than tripling. The two levels side by side show the direction:

$$q(p(2))=\\frac{400}{2}=200, \\qquad q(p(6))=\\frac{400}{6}\\approx 66.67$$

The sign of the composed exponent is what decides this, and it came out negative because the negative demand exponent survived the composition intact. Tripling the index would raise demand only if the composed exponent were positive, which would require the policy map to work in the opposite direction. Composed demand is divided by three, so the statement is False.`,
      `**D.** → False

Evaluate the composed rule at the stated subsidy index:

$$q(p(8))=\\frac{400}{8}=50$$

The long route agrees and explains why the figure looks familiar. The policy map first sends the index to a price, using $8^{2/3}=\\left(\\sqrt[3]{8}\\right)^{2}=4$:

$$p(8)=4\\cdot 4=16, \\qquad q(16)=\\frac{3200}{64}=50$$

A subsidy index of $8$ therefore reproduces the pilot price of $16$ euros and with it the pilot sale of $50$ passes. The quoted figure of $100$ is exactly double the correct reading, which is what comes out of dropping the factor $4^{-3/2}=1/8$ and composing to $800/s$ instead. Composed demand at $s=8$ is $50$ passes, so the statement is False.`,
      `**E.** → False

Doubling the posted price acts through the demand exponent $-3/2$, not through $-1$:

$$\\frac{q(2p)}{q(p)}=2^{-3/2}=\\frac{1}{2\\sqrt{2}}\\approx 0.35355$$

About $35.4\\%$ of the sales survive, a loss of roughly $64.6\\%$ rather than a halving. Levels from the pilot confirm the size, using $32^{3/2}=\\left(\\sqrt{32}\\right)^{3}\\approx 181.02$:

$$q(16)=50, \\qquad q(32)=\\frac{3200}{181.02}\\approx 17.68$$

Half of $50$ would be $25$ passes, and the model delivers about $17.7$. An exact halving needs an exponent of $-1$, which in this task is the composed exponent in the subsidy index rather than the exponent on the posted price. The fall is steeper than a halving, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 84,
    solution_overview: `Day-pass demand is $q(p)=Ap^{-3/2}$ with the pilot record $q(16)=50$, and policy indexes the price by $p(s)=4s^{2/3}$.

**Part 1: Building the model.**

Let $p$ = pass price in euros, $q$ = passes sold per week, $s$ = subsidy index. The pilot fixes the coefficient. The policy map then sits inside the demand rule, and composing two powers multiplies their exponents while the inner coefficient is itself raised to the outer exponent.

**1. Translate: the pilot record.**

$$A\\cdot 16^{-3/2}=50, \\qquad 16^{3/2}=\\left(\\sqrt{16}\\right)^{3}=64$$

**2. Translate: the composition.**

$$q(p(s))=A\\left(4s^{2/3}\\right)^{-3/2}=A\\cdot 4^{-3/2}\\cdot s^{(2/3)(-3/2)}$$

**Part 2: The model.**

$$q(p)=3200\\,p^{-3/2} \\tag{1}$$

$$q(p(s))=\\frac{400}{s} \\tag{2}$$

**Part 3: Solve.**

**1.** The pilot gives the coefficient:

$$A=50\\times 64=3200$$

**2.** The two pieces of the composition:

$$4^{-3/2}=\\frac18, \\qquad \\left(\\tfrac23\\right)\\left(-\\tfrac32\\right)=-1$$

**3.** Multiplying them through produces $(2)$:

$$3200\\cdot\\frac18\\cdot s^{-1}=\\frac{400}{s}$$

**4.** Composed demand at the index the statements use, where $p(8)=16$ returns the pilot price:

$$q(p(8))=\\frac{400}{8}=50$$

**5.** Multipliers act through whichever exponent applies. Tripling the subsidy index uses the composed exponent $-1$ and divides demand by $3$, while doubling the posted price uses the demand exponent $-3/2$ and multiplies demand by $2^{-3/2}\\approx 0.3536$. Neither move is proportional.

**Answer.** $A=3200$ | $q\\circ p=400/s$ | $q(p(8))=50$ | doubling $p$ multiplies demand by $2^{-3/2}$`,
  },
  {
    id: `math-8-85`,
    case_id: `MATH 8.85`,
    title: `Overnight Loaves Split Across Two Oven Lines`,
    context: `A regional bakery must bake $30$ thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index is $C_1(q)=q^{2}$ and line 2's is $C_2(q)=q^{2}/4$, where $q$ is that line's own output in thousands of loaves. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Sending all $30$ thousand loaves to line 2 costs $225$.`,
      `Splitting the order as $6$ on line 1 and $24$ on line 2 costs $180$.`,
      `An even split of $15$ and $15$ costs more than the $6$ and $24$ split.`,
      `Doubling line 2's own output multiplies its cost index by $4$.`,
      `Line 1's average cost index falls as its own output rises.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Concentrating the whole order on one line means evaluating that line's rule at the full thirty thousand loaves:

$$C_2(30)=\\frac{30^{2}}{4}=\\frac{900}{4}=225$$

The comparison with the other corner is worth making, since line 1 carries the same exponent with four times the coefficient:

$$C_1(30)=30^{2}=900$$

Sending everything to line 1 would cost four times as much, which is exactly the ratio of the two coefficients. Neither corner is the cheapest plan available, because splitting the order lets both lines work at low output where the quadratic penalty is still small. The claim asks only about the line 2 corner, and that corner costs $225$, so the statement is True.`,
      `**B.** → True

Price the split line by line and then add the two figures. Line 1 takes six thousand loaves:

$$C_1(6)=6^{2}=36$$

Line 2 takes the remaining twenty-four thousand:

$$C_2(24)=\\frac{24^{2}}{4}=\\frac{576}{4}=144$$

Adding gives the cost of the plan:

$$36+144=180$$

The split is not an arbitrary choice. It equates the two marginal cost indices, since $2q_1=12$ at $q_1=6$ and $q_2/2=12$ at $q_2=24$, and equal marginals are the condition for a least-cost allocation when both cost curves rise. That makes $180$ the floor rather than merely one plan among many. The quoted figure matches, so the statement is True.`,
      `**C.** → True

Price the even split the same way, with fifteen thousand loaves on each line:

$$C_1(15)=15^{2}=225, \\qquad C_2(15)=\\frac{225}{4}=56.25$$

Adding those gives the plan's cost, which is then ranked against the other split:

$$225+56.25=281.25>180$$

The even split is more than a hundred index points worse. Symmetry would be optimal only if the two lines had identical cost rules, and they do not: line 2 is four times cheaper at any given output, so it should carry four times the load. The marginal indices at the even split confirm the imbalance, since $2\\cdot 15=30$ on line 1 against $15/2=7.5$ on line 2. The even split costs more, so the statement is True.`,
      `**D.** → True

Line 2's cost index is a power function with exponent $2$, so an input multiplier of $k=2$ produces the output multiplier

$$\\frac{C_2(2q)}{C_2(q)}=\\frac{(2q)^{2}/4}{q^{2}/4}=2^{2}=4$$

The coefficient $1/4$ cancels out of the ratio, so the multiplier depends only on the load factor and the exponent. A level check inside the range of this order confirms it:

$$C_2(12)=\\frac{144}{4}=36, \\qquad C_2(24)=\\frac{576}{4}=144$$

and $144=4\\times 36$. The identical rule applies to line 1, whose exponent is also $2$, which is precisely why concentrating the order on either line is expensive. Doubling line 2's own output quadruples its cost index, so the statement is True.`,
      `**E.** → False

Average cost is a line's cost divided by its own output, and dividing a power by its own input subtracts one from the exponent:

$$\\frac{C_1(q)}{q}=\\frac{q^{2}}{q}=q$$

The remaining exponent is $1$, which is positive, so the average rises with output instead of falling. Two levels make the direction visible:

$$\\frac{C_1(6)}{6}=6, \\qquad \\frac{C_1(15)}{15}=15$$

A falling average would need the remaining exponent to be negative, which in turn would need an original exponent below $1$, and line 1's is $2$. Rising average cost is exactly why the bakery gains by splitting the order rather than loading one line. Line 1's average cost index rises with output, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 85,
    solution_overview: `Thirty thousand loaves are split between two oven lines with cost indices $C_1(q)=q^{2}$ and $C_2(q)=q^{2}/4$.

**Part 1: Building the model.**

Let $q_1$ and $q_2$ = thousands of loaves baked on each line, with $q_1+q_2=30$. Both cost indices are powers with exponent $2$, so each line's cost rises faster than its own load, and line 2 is the cheaper line at every output because its coefficient is a quarter of line 1's.

**1. Translate: the cost of a split.**

$$T(q_1)=q_1^{2}+\\frac{(30-q_1)^{2}}{4}$$

**2. Translate: equal marginal indices.** The interior candidate equates the two marginal cost indices:

$$2q_1=\\frac{q_2}{2} \\quad \\Longleftrightarrow \\quad q_2=4q_1$$

**Part 2: The model.**

$$C_1(q)=q^{2}, \\qquad C_2(q)=\\frac{q^{2}}{4} \\tag{1}$$

$$\\frac{C_2(2q)}{C_2(q)}=2^{2}=4 \\tag{2}$$

**Part 3: Solve.**

**1.** The interior candidate, from $q_2=4q_1$ together with $q_1+q_2=30$:

$$q_1=6, \\qquad q_2=24$$

**2.** Costs of the plans the statements name:

$$C_2(30)=225, \\qquad C_1(6)+C_2(24)=36+144=180$$

**3.** The even split, for comparison:

$$C_1(15)+C_2(15)=225+56.25=281.25$$

**4.** Ranking the three plans:

$$180<225<281.25$$

**5.** Scaling and averages both follow from the exponent $2$. Doubling a line's own output quadruples its cost index by $(2)$, while line 1's average cost index is $C_1(q)/q=q$, which rises with output because $2-1=1$ is still positive.

**Answer.** all on line 2 costs $225$ | the $6$ and $24$ split costs $180$ | the even split costs $281.25$`,
  },
  {
    id: `math-8-86`,
    case_id: `MATH 8.86`,
    title: `Museum Tickets: Point Elasticity Versus a Finite Rise`,
    context: `Evening museum admissions follow $q(p)=A p^{-2}$ tickets when price is $p>0$ euros. At $p=10$ euros the desk sold $40$ tickets. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The point price elasticity of demand is constantly $-2$.`,
      `Raising price from $10$ to $12$ euros cuts demand by exactly $20\\%$.`,
      `A $10\\%$ price rise cuts demand by exactly $20\\%$.`,
      `Weekly revenue $R(p)=p\\,q(p)$ is maximized by raising price without bound.`,
      `Halving the price doubles demand.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A.** → True

For any isoelastic rule $q=Ap^{r}$ the point elasticity is the exponent itself, because the coefficient cancels once the derivative is scaled by $p/q$:

$$\\varepsilon(p)=\\frac{p}{q}\\cdot\\frac{dq}{dp}=\\frac{p}{Ap^{r}}\\cdot rAp^{r-1}=r$$

Here the exponent is $-2$, so the elasticity takes the same value at every admissible price:

$$\\varepsilon(p)=-2 \\quad \\text{for every } p>0$$

Nothing about the desk record enters the elasticity identity, since the coefficient plays no part in an elasticity. The record is still worth banking for the finite-move statements that follow, because $A\\cdot 10^{-2}=40$ gives $A=4000$. The elasticity is constantly $-2$, so the statement is True.`,
      `**B.** → False

A move from $10$ to $12$ euros is a finite change, so it has to be priced through the demand rule rather than read off an elasticity. With $A=4000$ recovered from the desk record:

$$q(10)=\\frac{4000}{100}=40, \\qquad q(12)=\\frac{4000}{144}\\approx 27.778$$

The proportional fall is the gap divided by the starting level:

$$\\frac{40-27.778}{40}\\approx 0.30556=30.556\\%$$

Demand drops by about $30.6\\%$, not by the $20\\%$ claimed. The figure $20\\%$ is the size of the price rise itself, which is a different quantity, and the elasticity shortcut would give yet another wrong answer of $-2\\times 20\\%=-40\\%$. The exact multiplier $1.2^{-2}\\approx 0.6944$ sits between those two guesses, so the statement is False.`,
      `**C.** → False

A rise of $10\\%$ means a price factor of $1.1$, and the exact demand response is that factor raised to the exponent:

$$\\frac{q(1.1p)}{q(p)}=1.1^{-2}=\\frac{1}{1.21}\\approx 0.82645$$

Convert the surviving fraction into a percentage cut:

$$1-0.82645=0.17355\\approx 17.36\\%$$

The elasticity rule of thumb predicts $-2\\times 10\\%=-20\\%$, but that linearizes a curved relationship and overstates the finite decline by more than two and a half percentage points. Levels agree with the exact figure, since $q(10)=40$ and $q(11)=4000/121\\approx 33.06$, a loss of about $6.94$ tickets on a base of $40$. The exact cut is about $17.4\\%$, so the statement is False.`,
      `**D.** → False

Revenue is price times quantity, and multiplying by $p$ raises the exponent by one:

$$R(p)=p\\cdot 4000p^{-2}=4000\\,p^{-1}=\\frac{4000}{p}$$

The revenue exponent $-1$ is negative, so revenue falls at every price rather than peaking anywhere:

$$R(10)=400, \\qquad R(20)=200, \\qquad \\lim_{p\\to\\infty}R(p)=0$$

Pushing the price up without bound drives revenue toward zero, so there is no maximum to reach in that direction. Any isoelastic demand rule with an exponent below $-1$ behaves this way, because the tickets lost outweigh the extra euros charged on the tickets that remain. Revenue is not maximized by raising the price without bound, so the statement is False.`,
      `**E.** → False

Halving the price is an input multiplier of $k=1/2$, and demand responds through the exponent $-2$:

$$\\frac{q(p/2)}{q(p)}=\\left(\\frac12\\right)^{-2}=2^{2}=4$$

Demand quadruples rather than doubling. Levels from the desk record confirm the size of the response:

$$q(10)=40, \\qquad q(5)=\\frac{4000}{25}=160$$

and $160=4\\times 40$. A negative exponent turns a price cut into a demand gain, and a magnitude of $2$ turns it into a large one. An exact doubling would require an exponent of $-1$, which belongs to the revenue rule here rather than to demand. Halving the price multiplies demand by four, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 86,
    solution_overview: `Evening admissions follow $q(p)=Ap^{-2}$ with the desk record $q(10)=40$, and point elasticity is set against exact finite price moves.

**Part 1: Building the model.**

Let $p$ = admission price in euros, $q$ = tickets sold. For an isoelastic rule $q=Ap^{r}$ the point elasticity equals the exponent $r$ at every price, while a finite price move of factor $k$ multiplies demand by $k^{r}$. The two devices agree only in the limit of vanishing changes.

**1. Translate: the desk record.**

$$A\\cdot 10^{-2}=40 \\quad \\Rightarrow \\quad A=40\\times 100=4000$$

**2. Translate: the two methods.** For a price factor $k$ the shortcut and the exact rule return different numbers:

$$-2(k-1), \\qquad k^{-2}-1$$

**Part 2: The model.**

$$q(p)=4000\\,p^{-2} \\tag{1}$$

$$R(p)=p\\,q(p)=\\frac{4000}{p} \\tag{2}$$

**Part 3: Solve.**

**1.** Point elasticity is the exponent itself, at every price:

$$\\varepsilon(p)=-2$$

**2.** Exact multipliers at the three factors the statements use:

$$1.2^{-2}\\approx 0.6944, \\qquad 1.1^{-2}\\approx 0.82645, \\qquad 0.5^{-2}=4$$

**3.** The matching exact percentage changes:

$$-30.56\\%, \\qquad -17.36\\%, \\qquad +300\\%$$

**4.** Levels behind the first of those moves:

$$q(10)=40, \\qquad q(12)=\\frac{4000}{144}\\approx 27.78$$

**5.** Revenue in $(2)$ carries exponent $-1$, so it falls steadily and tends to zero as price grows without bound, with $R(10)=400$ against $R(20)=200$. Constant elasticity describes the limiting response, never the arithmetic of a finite jump.

**Answer.** $\\varepsilon=-2$ at every price | exact cuts of about $30.6\\%$ and $17.4\\%$ | $R(p)=4000/p$`,
  },
  {
    id: `math-8-87`,
    case_id: `MATH 8.87`,
    title: `Annealing Lehr Throughput Under a Mis-Scaled Coefficient`,
    context: `A glass-annealing lehr's throughput follows $T(e)=A e^{3/2}$ trays per hour for belt setting $e>0$. A run at $e=4$ delivered $T=64$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Under the calibrated law, $T(9)=216$.`,
      `If the coefficient were $25\\%$ larger, every throughput reading would rise by exactly $25\\%$.`,
      `The scale factor for doubling the belt setting does not depend on $A$.`,
      `Doubling the belt setting doubles throughput.`,
      `If the coefficient were $25\\%$ larger, the scale factor $T(2e)/T(e)$ would itself become $25\\%$ larger.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The recorded run fixes the coefficient once the exponent is known. Evaluate the power by taking the square root first and then cubing:

$$4^{3/2}=\\left(\\sqrt{4}\\right)^{3}=2^{3}=8 \\quad \\Rightarrow \\quad 8A=64 \\quad \\Rightarrow \\quad A=8$$

The calibrated rule is $T(e)=8e^{3/2}$. Evaluate it at the requested setting, using $9^{3/2}=\\left(\\sqrt{9}\\right)^{3}=27$:

$$T(9)=8\\cdot 27=216$$

The scaling rule agrees without recomputing any coefficient, since the setting rises by a factor of $9/4$ and $(9/4)^{3/2}=(3/2)^{3}=27/8$, so $64\\times 27/8=216$. Both routes land on the same reading. Throughput at belt setting $9$ is $216$ trays per hour, so the statement is True.`,
      `**B.** → True

The coefficient enters the rule as a multiplying factor, so scaling it scales every output by the same amount. Write the counterfactual rule with the coefficient enlarged by a quarter:

$$T_{c}(e)=1.25A\\,e^{3/2}=1.25\\,T(e)$$

The shape factor $e^{3/2}$ is untouched, so the relationship holds at every belt setting at once rather than at one convenient point. Two levels show it:

$$T_{c}(4)=1.25\\cdot 64=80, \\qquad T_{c}(9)=1.25\\cdot 216=270$$

Each sits exactly $25\\%$ above the calibrated figure, since $80/64=1.25$ and $270/216=1.25$. The uniformity is the point: a mis-scaled coefficient lifts the whole curve without tilting it. Every reading rises by exactly $25\\%$, so the statement is True.`,
      `**C.** → True

A scale factor is a ratio of two model values, and the coefficient appears in both of them:

$$\\frac{T(2e)}{T(e)}=\\frac{A(2e)^{3/2}}{A\\,e^{3/2}}=\\frac{(2e)^{3/2}}{e^{3/2}}=2^{3/2}$$

Whatever $A$ happens to be, it cancels before the exponent is applied, so the factor is pinned by the exponent alone:

$$2^{3/2}=2\\sqrt{2}\\approx 2.8284$$

The calibrated rule illustrates the same figure, since $T(4)=64$ and $T(8)=8\\cdot 16\\sqrt{2}\\approx 181.02$, whose ratio is about $2.828$. The cancellation is not special to $A=8$: it holds for any positive coefficient, including one a quarter larger. The doubling factor does not depend on $A$, so the statement is True.`,
      `**D.** → False

Doubling the belt setting is an input multiplier of $k=2$, and throughput responds through the exponent $3/2$:

$$\\frac{T(2e)}{T(e)}=2^{3/2}=2\\sqrt{2}\\approx 2.8284$$

Throughput nearly triples rather than doubling. A level check from the recorded run makes the size concrete, using $8^{3/2}=\\left(\\sqrt{8}\\right)^{3}=16\\sqrt{2}$:

$$T(8)=8\\cdot 16\\sqrt{2}=128\\sqrt{2}\\approx 181.02, \\qquad \\frac{181.02}{64}\\approx 2.8284$$

A doubling would have given $128$ trays per hour, and the model returns about $181$. Exact doubling of output is the signature of exponent $1$, and any exponent above $1$ must overshoot it. Doubling the setting multiplies throughput by $2\\sqrt{2}$, so the statement is False.`,
      `**E.** → False

Enlarging the coefficient lifts the numerator and the denominator of a scale factor by the same amount, so the quotient cannot move. Write the counterfactual rule as $T_{c}(e)=1.25\\,T(e)$ and form its doubling factor:

$$\\frac{T_{c}(2e)}{T_{c}(e)}=\\frac{1.25\\,T(2e)}{1.25\\,T(e)}=\\frac{T(2e)}{T(e)}=2^{3/2}$$

Levels confirm the cancellation at the settings already used:

$$T_{c}(4)=80, \\qquad T_{c}(8)\\approx 226.27, \\qquad \\frac{226.27}{80}\\approx 2.8284$$

The factor stays at $2\\sqrt{2}$, exactly as it was before the coefficient moved. A quarter added to $A$ changes every level by a quarter and every ratio not at all, which is the distinction the whole task is built on. The scale factor is unchanged, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 87,
    solution_overview: `Lehr throughput is $T(e)=Ae^{3/2}$ trays per hour with the recorded run $T(4)=64$.

**Part 1: Building the model.**

Let $e$ = belt setting, $T$ = throughput in trays per hour. The exponent is supplied, so the recorded run fixes the coefficient. Two very different questions then follow: levels, which depend on the coefficient, and scale factors, in which the coefficient cancels.

**1. Translate: the recorded run.**

$$A\\cdot 4^{3/2}=64, \\qquad 4^{3/2}=\\left(\\sqrt{4}\\right)^{3}=8$$

**2. Translate: a mis-scaled coefficient.** Replacing $A$ by $cA$ multiplies every level by $c$ and leaves every ratio untouched:

$$\\frac{cA(ke)^{3/2}}{cA\\,e^{3/2}}=k^{3/2}$$

**Part 2: The model.**

$$T(e)=8\\,e^{3/2} \\tag{1}$$

$$\\frac{T(ke)}{T(e)}=k^{3/2} \\tag{2}$$

**Part 3: Solve.**

**1.** The calibration:

$$8A=64 \\quad \\Rightarrow \\quad A=8$$

**2.** Levels at the settings the statements use, with $9^{3/2}=27$:

$$T(4)=64, \\qquad T(9)=8\\cdot 27=216$$

**3.** A coefficient enlarged by a quarter scales every level by that same quarter:

$$1.25\\cdot 64=80, \\qquad 1.25\\cdot 216=270$$

**4.** The doubling factor from $(2)$, which no coefficient can move:

$$2^{3/2}=2\\sqrt{2}\\approx 2.8284$$

**5.** Levels and ratios therefore answer a mis-scaled coefficient in opposite ways. Every reading moves by exactly the percentage the coefficient moves, while every scale factor stays fixed, because $A$ appears once in the numerator and once in the denominator.

**Answer.** $A=8$ | $T(9)=216$ | a $25\\%$ larger coefficient raises every level by $25\\%$ | doubling factor $2\\sqrt{2}$`,
  },
];
