/**
 * Chapter 8 rhythm patch, tasks 8.01-8.30.
 *
 * Replacement `tactical_explanations` entries. Each patch names the task by
 * `sort_order` and the explanation by 0-based `explanation_index` (0..4 = A..E).
 *
 * Structure is deliberately context-dependent rather than uniform: display
 * counts run 1-4 according to what the argument needs (one fused line for a
 * single-move check, four blocks for a coefficient recovery or a boundary test).
 *
 * Length deltas below are measured against the pre-rhythm baseline
 * (commit 8f531b4^). Data only; a separate writer applies these.
 */

export const PATCHES = [
  // ---------------------------------------------------------------- 8.01 ----
  {
    sort_order: 1,
    explanation_index: 0,
    text: String.raw`**A.** → True

The log never states the coefficient of $P(u)=Au^{0.75}$. It reports the gap between two loading rates, and both staged counts are exact fourth powers, so the shape factors come out whole:

$$16^{0.75} = (2^{4})^{3/4} = 2^{3} = 8, \qquad 81^{0.75} = (3^{4})^{3/4} = 3^{3} = 27$$

The recorded lift is a difference of rates rather than a rate at one staging level, so the coefficient multiplies the difference of those shape factors, and one division finishes the recovery:

$$A(27) - A(8) = 19A = 57 \qquad \Rightarrow \qquad A = 3$$

Dividing $57$ by either staged count alone would answer a different question. The loading law is $P(u)=3u^{0.75}$, so the statement is True.`,
  },

  // ---------------------------------------------------------------- 8.06 ----
  {
    sort_order: 6,
    explanation_index: 0,
    text: String.raw`**A.** → False

A scale factor of a power law depends on the exponent alone, and the doubling test carries it, since the coefficient cancels in the ratio:

$$\frac{L(2x)}{L(x)} = \frac{A(2x)^{r}}{Ax^{r}} = 2^{r} = 4 \quad \Rightarrow \quad r = 2$$

The same identity handles a multiplier of $3$:

$$\frac{L(3x)}{L(x)} = 3^{2} = 9$$

The recorded run turns that into levels, with $A = 0.2$:

$$L(30) = 180, \qquad L(90) = 0.2(8100) = 1620$$

The figure $6$ treats the scale factor as proportional to the multiplier, as though doubling giving $4$ left tripling half as much again. Tripling multiplies peak load by $9$, so the statement is False.`,
  },
  {
    sort_order: 6,
    explanation_index: 1,
    text: String.raw`**B.** → False

An alarm level is a peak load, so locating it in job counts needs both constants of the model rather than the exponent alone. The recorded run supplies the coefficient:

$$A(30)^{2} = 180 \quad \Rightarrow \quad 900A = 180 \quad \Rightarrow \quad A = 0.2$$

Solving the alarm condition converts that load back into a job count:

$$0.2x^{2} = 500 \quad \Rightarrow \quad x^{2} = 2500 \quad \Rightarrow \quad x = 50$$

Testing the boundary named in the claim shows the alarm has already tripped there:

$$L(55) = 0.2(3025) = 605 > 500$$

$$L(49) = 0.2(2401) = 480.2, \qquad L(50) = 0.2(2500) = 500$$

The recorded margin looks generous, $180$ against a limit of $500$, but a squared response spends that headroom inside twenty extra jobs. The alarm trips at $50$ jobs, below $55$ rather than above it, so the statement is False.`,
  },
  {
    sort_order: 6,
    explanation_index: 2,
    text: String.raw`**C.** → False

A move from $30$ to $42$ jobs is a finite $40\%$ increase in the input, and a squared response amplifies it instead of passing it through, so the chain runs multiplier, then scale factor, then percentage:

$$\frac{42}{30} = 1.4, \qquad (1.4)^{2} = 1.96$$

A percentage change is that scale factor minus one:

$$\frac{L(42) - L(30)}{L(30)} = 1.96 - 1 = 0.96 = 96\%$$

Levels give the same reading, with the coefficient $0.2$ from the recorded run:

$$L(30) = 180, \qquad L(42) = 0.2(1764) = 352.8, \qquad 352.8 - 180 = 172.8$$

Reading the exponent as an ordinary multiplier puts the answer near $80\%$ and slips under the threshold, while the exact power clears it. Peak load rises by $96\%$, which is not less than $90\%$, so the statement is False.`,
  },
  {
    sort_order: 6,
    explanation_index: 3,
    text: String.raw`**D.** → True

A move from $30$ to $33$ jobs is a finite $10\%$ increase, and with exponent $2$ the scale factor and the percentage change fit on one line:

$$\frac{L(33)}{L(30)} = \left(\frac{33}{30}\right)^{2} = 1.1^{2} = 1.21 \quad \Rightarrow \quad 1.21 - 1 = 21\%$$

A linear reading reports $10\%$ and doubling the input change reports $20\%$; the extra point is $0.1^{2} = 0.01$, which small-change shortcuts discard. The rise is exactly $21\%$, so the statement is True.`,
  },
  {
    sort_order: 6,
    explanation_index: 4,
    text: String.raw`**E.** → False

Halving is a multiplier of $1/2$ on the input, and with exponent $2$ the output multiplier is that fraction squared rather than the fraction itself:

$$\frac{L(x/2)}{L(x)} = \left(\frac{1}{2}\right)^{2} = \frac{1}{4}$$

The recorded run is the cleanest counterexample, since its level is known exactly:

$$L(30) = 180, \qquad L(15) = 0.2(225) = 45 = \frac{180}{4}$$

A halving would have left $90$ there, twice what the model gives, and the same gap opens at the alarm point where the stakes are larger:

$$L(50) = 0.2(2500) = 500, \qquad L(25) = 0.2(625) = 125$$

A team planning for $250$ of residual load would hold twice the capacity the model needs, and read upwards the same error badly understates a spike. Load falls to a quarter, not a half, so the statement is False.`,
  },

  // ---------------------------------------------------------------- 8.07 ----
  {
    sort_order: 7,
    explanation_index: 0,
    text: String.raw`**A.** → True

Neither record reports a response level: the log gives the increase between two intensities, so the coefficient has to come out of a difference. The square-root factors there are exact:

$$25^{0.5} = 5, \qquad 100^{0.5} = 10$$

The coefficient is common to both endpoints, so it factors out of that increase:

$$Q(100) - Q(25) = A(10) - A(5) = 5A$$

One division finishes the recovery:

$$5A = 60 \quad \Rightarrow \quad A = 12, \qquad Q(x) = 12\sqrt{x}$$

Substituting both endpoints checks the calibration:

$$Q(25) = 60, \qquad Q(100) = 120, \qquad 120 - 60 = 60$$

Writing $A\sqrt{100} = 60$ instead reads the increase as a level at intensity $100$, giving $A = 6$. The recovered law is $Q(x) = 12\sqrt{x}$, so the statement is True.`,
  },
  {
    sort_order: 7,
    explanation_index: 1,
    text: String.raw`**B.** → True

The budget caps the input, not the output, so a ceiling on responses has to come from the model. The exponent $0.5$ is positive, so $Q$ is strictly increasing and the largest feasible response sits at the right-hand endpoint:

$$0 < x \le 400, \qquad Q(x) = 12x^{0.5}$$

Evaluating the calibrated law there:

$$Q(400) = 12\sqrt{400} = 12(20) = 240$$

Nothing inside the cap can beat it, as a point just short of it shows:

$$Q(399) \approx 12(19.975) \approx 239.7 < 240$$

Treating $400$ as a budget of responses skips the square root the model applies to intensity. The affordable maximum is $240$ usable responses, so the statement is True.`,
  },
  {
    sort_order: 7,
    explanation_index: 2,
    text: String.raw`**C.** → True

Two things are asserted, an intensity and a verdict on affordability. Inverting the calibrated law strips the coefficient, then the square root:

$$12\sqrt{x} = 180 \quad \Rightarrow \quad \sqrt{x} = 15 \quad \Rightarrow \quad x = 15^{2} = 225$$

The intensity goes against the budget, the target against the maximum:

$$225 \le 400, \qquad 180 \le 240$$

Stopping at $\sqrt{x} = 15$ leaves the inversion half done. Both parts hold, so the statement is True.`,
  },
  {
    sort_order: 7,
    explanation_index: 3,
    text: String.raw`**D.** → True

A scale effect on a power function with exponent $0.5$ is the square root of the input multiplier, and the coefficient cancels out of the ratio:

$$\frac{Q(2.25x)}{Q(x)} = \frac{12(2.25x)^{0.5}}{12x^{0.5}} = (2.25)^{0.5}$$

The awkward-looking multiplier is a perfect square, so the root is exact rather than approximate:

$$(2.25)^{0.5} = \sqrt{\frac{9}{4}} = \frac{3}{2} = 1.5$$

Levels reproduce the factor, starting from the calibration intensity:

$$Q(100) = 120, \qquad Q(225) = 12(15) = 180, \qquad \frac{180}{120} = 1.5$$

Multiplying responses by $2.25$ would treat the law as linear, which the exponent forbids, and would put $270$ where the model puts $180$. A $2.25$-fold intensity change produces a $1.5$-fold response change, so the statement is True.`,
  },
  {
    sort_order: 7,
    explanation_index: 4,
    text: String.raw`**E.** → True

A finite percentage change is measured against the initial response, so both endpoints pass through the calibrated law first:

$$Q(64) = 12(8) = 96, \qquad Q(81) = 12(9) = 108, \qquad \frac{108 - 96}{96} = \frac{1}{8} = 12.5\%$$

Both intensities are perfect squares, so nothing rounds. The intensity itself rose by about $26.6\%$, and the square root compresses that to under half. The response increase is exactly $12.5\%$, so the statement is True.`,
  },

  // ---------------------------------------------------------------- 8.09 ----
  {
    sort_order: 9,
    explanation_index: 3,
    text: String.raw`**D.** → False

The contract ceiling is a throughput, so the headcount behind it comes from inverting the calibrated law:

$$12s^{0.6} = 300 \quad \Rightarrow \quad s^{0.6} = 25$$

Undoing an exponent of $0.6$ raises both sides to the reciprocal power $5/3$:

$$s = 25^{5/3} = 5^{10/3} = 5^{3} \times 5^{1/3} \approx 125 \times 1.710 \approx 213.7$$

The headcount named in the claim overshoots the ceiling rather than reaching it:

$$H(250) \approx 12 \times 27.46 \approx 329.6 > 300$$

$$H(214) \approx 12 \times 25.02 \approx 300.3$$

A proportional estimate from the recorded shift lands far short, and the reciprocal exponent $5/3$ is what corrects it. The ceiling binds near $214$ staff, so the statement is False.`,
  },

  // ---------------------------------------------------------------- 8.11 ----
  {
    sort_order: 11,
    explanation_index: 2,
    text: String.raw`**C.** → True

The observed price calibrates the curve before either figure can be tested, and a negative exponent makes that a multiplication:

$$A(5)^{-2} = 400 \quad \Rightarrow \quad \frac{A}{25} = 400 \quad \Rightarrow \quad A = 10000$$

Quantity comes first, since revenue is built on it:

$$q(10) = \frac{10000}{100} = 100$$

Revenue is price times quantity:

$$R(10) = 10 \times 100 = 1000$$

Doubling the price from $5$ divides quantity by $2^{2}$ rather than by $2$, which takes $400$ subscriptions to $100$ instead of $200$. Both figures match the curve, so the statement is True.`,
  },

  // ---------------------------------------------------------------- 8.15 ----
  {
    sort_order: 15,
    explanation_index: 4,
    text: String.raw`**E.** → True

An area target inverts the composed law, not the radius law, so $S(t) = 9\pi t$ goes in first and $\pi$ cancels:

$$9\pi t = 100\pi \quad \Rightarrow \quad 9t = 100$$

With composed exponent $1$ the inversion is one division:

$$t = \frac{100}{9} \approx 11.11$$

Routing through the radius adds a step and lands in the same place. The target area arrives after about $11.1$ hours, so the statement is True.`,
  },

  // ---------------------------------------------------------------- 8.19 ----
  {
    sort_order: 19,
    explanation_index: 2,
    text: String.raw`**C.** → True

A scale factor on a composed law uses the composed exponent, the product of the two stage exponents rather than their sum:

$$0.5 \times 1.5 = 0.75, \qquad \frac{g(2L)}{g(L)} = 2^{0.75} \approx 1.4142 \times 1.1892 \approx 1.6818$$

Neither stage settles it alone: doubling labour lifts material by $2^{0.5} \approx 1.414$, and the second stage lifts that factor by its own exponent, $1.414^{1.5} \approx 1.682$. Levels agree where the shape factors are exact:

$$g(16) = 16(8) = 128, \qquad g(32) = 16 \times 2^{3.75} \approx 215.3, \qquad \frac{215.3}{128} \approx 1.682$$

Finished output rises by about $68\%$, so the statement is True.`,
  },

  // ---------------------------------------------------------------- 8.21 ----
  {
    sort_order: 21,
    explanation_index: 3,
    text: String.raw`**D.** → False

Two readings settle an order-against-a-limit claim, and here they agree: evaluate the law at the shift limit, then invert it at the order size.

$$N(20) = 30\sqrt{20} \approx 30(4.472) \approx 134.2 < 150$$

$$30\sqrt{h} = 150 \quad \Rightarrow \quad \sqrt{h} = 5 \quad \Rightarrow \quad h = 25$$

$$25 - 20 = 5$$

Extrapolating from the logged shifts, where nine hours packed $90$ items, makes twenty hours look comfortable, but a square-root law turns a shift more than doubled into about $50\%$ more output. The order needs $25$ hours, five beyond the limit, so the statement is False.`,
  },

  // ---------------------------------------------------------------- 8.23 ----
  {
    sort_order: 23,
    explanation_index: 3,
    text: String.raw`**D.** → False

Quadrupling the price multiplies quantity by four raised to the demand exponent $-0.5$, so the fall is a square root rather than a proportion:

$$\frac{q(4p)}{q(p)} = 4^{-0.5} = \frac{1}{2}, \qquad q(16) = 300, \qquad q(64) = \frac{1200}{8} = 150$$

Cutting quantity to a quarter would need an exponent of $-1$, or a sixteenfold price rise on this curve:

$$q(256) = \frac{1200}{16} = 75$$

Quantity halves, so the statement is False.`,
  },

  // ---------------------------------------------------------------- 8.24 ----
  {
    sort_order: 24,
    explanation_index: 2,
    text: String.raw`**C.** → False

Half the licensed ceiling is $512$ tonnes, and the claim can be tested from either end. Pushing the named feed through the calibrated law is the shorter route:

$$32^{4/3} = 2^{20/3} \approx 101.59, \qquad y(32) \approx 406.4$$

That falls short of $512$ by a wide margin. Inverting at half the ceiling names the feed that does reach it:

$$4x^{4/3} = 512 \quad \Rightarrow \quad x^{4/3} = 128$$

$$x = 128^{3/4} = \left(2^{7}\right)^{3/4} = 2^{21/4} \approx 38.05$$

Halving the licensed feed of $64$ would be right for an exponent of $1$; with exponent $4/3$ output falls faster than feed. Half the ceiling takes a feed of about $38.1$, so the statement is False.`,
  },
  {
    sort_order: 24,
    explanation_index: 3,
    text: String.raw`**D.** → False

A perfect cube keeps the shape factor exact: the exponent $4/3$ takes the cube root of the feed, then the fourth power.

$$8^{4/3} = \left(8^{1/3}\right)^{4} = 2^{4} = 16, \qquad y(8) = 4(16) = 64$$

The test firing reaches the same level through a scale factor, since $8$ and $27$ are both cubes:

$$\frac{y(8)}{y(27)} = \left(\frac{2}{3}\right)^{4} = \frac{16}{81}, \qquad 324 \times \frac{16}{81} = 64$$

The claimed $32$ is what reading the exponent as $1$ would give. The kiln produces $64$ tonnes, so the statement is False.`,
  },

  // ---------------------------------------------------------------- 8.25 ----
  {
    sort_order: 25,
    explanation_index: 2,
    text: String.raw`**C.** → True

A non-unit input tests both constants and both reciprocal exponents, so the round trip is worth taking one stage at a time:

$$f(125) = 9(125)^{2/3} = 9(25) = 225$$

$$g(225) = \frac{225^{3/2}}{27} = \frac{15^{3}}{27} = 125$$

Both shape factors are exact, since $125$ is a cube and $225$ a square, so no rounding hides in the trip, which is what the general identity predicts:

$$g\big(f(x)\big) = \frac{9^{3/2}x}{27} = x$$

The stages pass through index $225$ and return the original $125$, so the statement is True.`,
  },

  // ---------------------------------------------------------------- 8.26 ----
  {
    sort_order: 26,
    explanation_index: 2,
    text: String.raw`**C.** → False

Which algorithm leads over a range is decided by the ratio of the two calibrated laws, because a ratio compares them at every load at once:

$$\frac{T(x)}{S(x)} = \frac{x^{1.5}}{8x^{0.5}} = \frac{x}{8}$$

$$\frac{x}{8} > 1 \quad \Longleftrightarrow \quad x > 8$$

Just past the crossing the gap is small, but it already runs against algorithm S:

$$S(9) = 8(3) = 24, \qquad T(9) = 9^{1.5} = 27$$

A heavier load widens it:

$$S(16) = 8(4) = 32, \qquad T(16) = 16^{1.5} = 64$$

Algorithm S does lead at light loads, on the strength of its coefficient $8$ against $1$, but exponent $1.5$ against $0.5$ takes the lead over once the crossing is passed. Algorithm T scores higher above the crossing, so the statement is False.`,
  },
  {
    sort_order: 26,
    explanation_index: 3,
    text: String.raw`**D.** → False

Load $4$ is where the two coefficients were fitted, not where the scores meet, and the brief records both values:

$$S(4) = 16, \qquad T(4) = 8, \qquad \frac{T(4)}{S(4)} = 0.5$$

Calibration load and crossing load are different questions, and only the second makes the scores agree:

$$S(8) = 8\sqrt{8} \approx 22.63, \qquad T(8) = 8^{1.5} \approx 22.63$$

Algorithm S scores twice algorithm T at load $4$, so the statement is False.`,
  },

  // ---------------------------------------------------------------- 8.27 ----
  {
    sort_order: 27,
    explanation_index: 0,
    text: String.raw`**A.** → True

A ratio of capacities cancels the unknown coefficient, leaving only the exponent on the fleet multiplier:

$$\frac{C(64)}{C(32)} = \left(\frac{64}{32}\right)^{0.8} = 2^{0.8}$$

An exponent below $1$ already forces the factor under $2$; splitting the power gives its size:

$$2^{0.8} = 2 \times 2^{-0.2} \approx 2 \times 0.8706 \approx 1.741 < 2$$

Levels agree, once $32^{0.8} = 2^{4} = 16$ fixes the coefficient:

$$A = \frac{80}{16} = 5, \qquad C(64) = 5 \times 2^{4.8} \approx 139.3, \qquad \frac{139.3}{80} \approx 1.74$$

Reading $0.8$ as an ordinary multiplier answers a different question, since a scale factor is a power rather than a proportion. Capacity rises by a factor below two, so the statement is True.`,
  },

  // ---------------------------------------------------------------- 8.29 ----
  {
    sort_order: 29,
    explanation_index: 1,
    text: String.raw`**B.** → False

Ranking two splits means pricing each one through both quadratic laws and adding the plant costs, one line apiece:

$$0.5(30)^{2} + 0.25(30)^{2} = 450 + 225 = 675$$

$$0.5(20)^{2} + 0.25(40)^{2} = 200 + 400 = 600$$

Symmetry is the right instinct for identical plants, but plant 1's coefficient is twice plant 2's, so the cheaper plant should carry the larger share. The uneven split costs $75$ less, so the statement is False.`,
  },
];

export default PATCHES;
