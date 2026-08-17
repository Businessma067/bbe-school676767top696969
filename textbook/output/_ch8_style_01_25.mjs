/**
 * MATH 8.01–8.25 — tactical_explanations restyled to MATH 13.18 body craft.
 * Headers, verdicts, and every display equation preserved from the current bank.
 */
export const PATCHES = [
  {
    sort_order: 1,
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
  },
  {
    sort_order: 2,
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
  },
  {
    sort_order: 3,
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
  },
  {
    sort_order: 4,
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
  },
  {
    sort_order: 5,
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
  },
  {
    sort_order: 6,
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
  },
  {
    sort_order: 7,
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
  },
  {
    sort_order: 8,
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
  },
  {
    sort_order: 9,
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
  },
  {
    sort_order: 10,
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
  },
  {
    sort_order: 11,
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
  },
  {
    sort_order: 12,
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
  },
  {
    sort_order: 13,
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
  },
  {
    sort_order: 14,
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
  },
  {
    sort_order: 15,
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
  },
  {
    sort_order: 16,
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
  },
  {
    sort_order: 17,
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

$$1 \\to 2 \\to 4 \\to 8 \\quad \\text{is three doublings}$$

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
  },
  {
    sort_order: 18,
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
  },
  {
    sort_order: 19,
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
  },
  {
    sort_order: 20,
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
  },
  {
    sort_order: 21,
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
  },
  {
    sort_order: 22,
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
  },
  {
    sort_order: 23,
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
  },
  {
    sort_order: 24,
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
  },
  {
    sort_order: 25,
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
  },
  // END_PATCHES
];
