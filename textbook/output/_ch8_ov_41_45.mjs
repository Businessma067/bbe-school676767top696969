/** MATH 8.41–8.45 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-41",
    case_id: "MATH 8.41",
    title: `Audit Cost With Economies of Scale`,
    context: `An audit practice prices engagements by $C(n)=A n^{0.75}$, where $n>0$ is the number of accounts to be tested. A completed engagement covering $16$ accounts was billed at $800$.`,
    statements: [
      `The coefficient of the pricing law is $100$.`,
      `An engagement covering $81$ accounts is billed at $2700$.`,
      `Cost per account falls as the engagement grows.`,
      `Doubling the number of accounts raises the total bill by about $68\\%$.`,
      `Doubling the number of accounts leaves the cost per account unchanged.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The coefficient of the pricing law is $100$.**  (true)

This claim asks for the constant. The engagement size is a fourth power, so $16^{0.75}=2^{3}=8$ exactly, and dividing the bill by that shape factor gives $A=100$.

Fractional exponents written as $3/4$ are handled by taking the fourth root first and cubing afterwards. Doing it the other way round means starting from $16^{3}=4096$, which is correct but needlessly heavy.

Evaluate the shape factor:

$$
16^{0.75} = \\left(2^{4}\\right)^{3/4} = 2^{3} = 8
$$

Divide the bill by it:

$$
8A = 800 \\quad \\Rightarrow \\quad A = 100, \\qquad C(n) = 100n^{0.75}
$$

The coefficient is $100$, so the claim is true.`,
      `**B) An engagement covering $81$ accounts is billed at $2700$.**  (true)

This claim extrapolates the schedule. Since $81=3^{4}$, the shape factor is $3^{3}=27$, and the bill is $100 \\times 27 = 2700$.

The comparison with the completed engagement shows the economies of scale plainly: accounts rise by a factor of about $5.1$ while the bill rises only by a factor of $3.4$. That gap is exactly what an exponent below $1$ buys the client.

Evaluate the shape factor:

$$
81^{0.75} = \\left(3^{4}\\right)^{3/4} = 3^{3} = 27
$$

Apply the coefficient:

$$
C(81) = 100(27) = 2700
$$

Confirm with the ratio route:

$$
\\left(\\frac{81}{16}\\right)^{0.75} = \\frac{27}{8} = 3.375, \\qquad 800 \\times 3.375 = 2700
$$

The bill is $2700$, so the claim is true.`,
      `**C) Cost per account falls as the engagement grows.**  (true)

This claim concerns the derived average. Dividing the bill by the number of accounts gives $100n^{-0.25}$, a power function with a negative exponent, so the price per account declines with size.

Dividing by the input lowers the exponent by one, and $0.75-1=-0.25$. The decline is gentle — a quarter-power — which is why the practice can still quote a meaningful headline rate while offering large clients a discount in effect.

Divide the schedule by the number of accounts:

$$
\\frac{C(n)}{n} = \\frac{100n^{0.75}}{n} = 100n^{-0.25}
$$

Evaluate at three engagement sizes:

$$
\\frac{800}{16} = 50, \\qquad \\frac{2700}{81} \\approx 33.3, \\qquad \\frac{C(256)}{256} = \\frac{6400}{256} = 25
$$

Cost per account halves between $16$ and $256$ accounts, so the claim is true.`,
      `**D) Doubling the number of accounts raises the total bill by about $68\\%$.**  (true)

This claim is a scale-factor question, so the coefficient does not enter. Doubling multiplies the bill by $2^{0.75}\\approx1.682$, a rise of about $68\\%$.

Reading this alongside part C makes the pricing logic complete: the bill rises by $68\\%$ while the workload doubles, so the per-account rate falls by the difference. The factor is the same at every engagement size.

Form the scale factor:

$$
\\frac{C(2n)}{C(n)} = 2^{0.75} = 2^{1/2} \\times 2^{1/4} \\approx 1.6818
$$

Check on a concrete pair:

$$
C(16) = 800, \\qquad C(32) = 100 \\times 32^{0.75} \\approx 100 \\times 13.454 \\approx 1345.4
$$

$$
\\frac{1345.4}{800} \\approx 1.68
$$

The bill rises by about $68\\%$, so the claim is true.`,
      `**E) Doubling the number of accounts leaves the cost per account unchanged.**  (false)

This claim contradicts the pricing structure. Doubling multiplies the per-account rate by $2^{-0.25}\\approx0.841$, so the rate falls by about $16\\%$.

A constant per-account rate would mean an exponent of exactly $1$ — a schedule with no economies of scale at all. The whole point of the $0.75$ exponent is that the rate declines, and parts C and D both quantify the same decline from different angles.

Apply the scale factor to the average:

$$
\\frac{C(2n)/(2n)}{C(n)/n} = 2^{-0.25} \\approx 0.8409
$$

Check with concrete engagements:

$$
\\frac{C(16)}{16} = 50, \\qquad \\frac{C(32)}{32} \\approx \\frac{1345.4}{32} \\approx 42.0
$$

The rate falls from $50$ to about $42$, so the claim is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 41,
    solution_overview: `Audit pricing is $C(n)=An^{0.75}$ for $n>0$ accounts, with a completed engagement $C(16)=800$.

**Part 1: Building the model.**

Let $n$ = accounts tested and $C(n)$ = the bill. The exponent is given and below $1$, so the practice prices with economies of scale; the completed engagement pins the coefficient.

**1. Translate: the completed engagement.** The account count is a fourth power, so the shape factor is exact:

$$
16^{0.75} = 2^{3} = 8, \\qquad 8A = 800
$$

**2. Translate: the per-account rate.** Dividing by $n$ lowers the exponent by one:

$$
\\frac{C(n)}{n} = A n^{-0.25}
$$

**Part 2: The model.**

$$
C(n) = 100n^{0.75} \\tag{1}
$$

$$
\\frac{C(n)}{n} = 100n^{-0.25} \\tag{2}
$$

**Part 3: Solve.**

**1.** The engagement gives the coefficient:

$$
A = 100
$$

**2.** Bills at other fourth powers stay exact:

$$
C(81) = 2700, \\qquad C(256) = 6400
$$

**3.** The scale factor for a doubling:

$$
2^{0.75} \\approx 1.682 \\quad (+68\\%)
$$

**4.** The per-account rate falls with a quarter-power:

$$
50 \\to 42.0 \\to 33.3 \\to 25 \\text{ at } n = 16,\\,32,\\,81,\\,256
$$

**5.** The two effects are the same fact seen twice: the bill rises by the factor $1.682$ while the workload rises by $2$, and the rate therefore falls by $1.682/2 \\approx 0.841$, a cut of about $16\\%$.

**Answer.** $A = 100$ | $C(n) = 100n^{0.75}$ | per-account rate $100n^{-0.25}$`,
  },
  {
    id: "math-8-42",
    case_id: "MATH 8.42",
    title: `Airborne Particle Concentration Downwind`,
    context: `Downwind particle concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre, where $x>0$ is the distance from the stack in metres. A monitor $4$ metres from the stack reads $50$.`,
    statements: [
      `At $16$ metres the concentration reads $6.25$.`,
      `Doubling the distance cuts the concentration by about $65\\%$.`,
      `The concentration falls to $0.4$ at $100$ metres.`,
      `Concentration falls as the distance from the stack grows.`,
      `Halving the distance doubles the concentration.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) At $16$ metres the concentration reads $6.25$.**  (true)

This claim evaluates the law four times further out than the monitor. The monitor gives $A=400$, and at $16$ metres the concentration is $400/64=6.25$.

The distances are perfect squares, so the $1.5$ powers are exact: $4^{1.5}=8$ and $16^{1.5}=64$. Note how fast the decline is — four times the distance leaves one eighth of the concentration, because $4^{-1.5}=1/8$.

Recover the coefficient from the monitor:

$$
A(4)^{-1.5} = 50 \\quad \\Rightarrow \\quad \\frac{A}{8} = 50 \\quad \\Rightarrow \\quad A = 400
$$

Evaluate at $16$ metres:

$$
16^{1.5} = \\left(16^{1/2}\\right)^{3} = 4^{3} = 64, \\qquad c(16) = \\frac{400}{64} = 6.25
$$

The reading is $6.25$, so the claim is true.`,
      `**B) Doubling the distance cuts the concentration by about $65\\%$.**  (true)

This claim is a scale-factor question. Doubling the distance multiplies concentration by $2^{-1.5}\\approx0.354$, which is a cut of about $64.6\\%$ — the $65\\%$ in the claim.

The multiplier and the cut are different numbers, and mixing them is the standard trap with negative exponents: $0.354$ is the fraction that survives, so the reduction is one minus that. The factor holds at every distance, from the stack fence to the boundary.

Form the scale factor:

$$
\\frac{c(2x)}{c(x)} = 2^{-1.5} = \\frac{1}{2\\sqrt{2}} \\approx 0.3536
$$

Convert to a percentage cut:

$$
1 - 0.3536 \\approx 0.646 = 64.6\\%
$$

Check on a concrete pair:

$$
c(4) = 50, \\qquad c(8) = \\frac{400}{22.63} \\approx 17.7, \\qquad \\frac{17.7}{50} \\approx 0.354
$$

The cut is about $65\\%$, so the claim is true.`,
      `**C) The concentration falls to $0.4$ at $100$ metres.**  (true)

This claim evaluates the law at the site boundary. Since $100^{1.5}=1000$, the concentration is $400/1000=0.4$ micrograms per cubic metre.

The number is convenient because $100$ is a perfect square: take the square root to get $10$, then cube it. Read backwards, the same arithmetic answers the regulatory question — a target of $0.4$ is met at exactly $100$ metres.

Evaluate the shape factor:

$$
100^{1.5} = \\left(100^{1/2}\\right)^{3} = 10^{3} = 1000
$$

Apply the coefficient:

$$
c(100) = \\frac{400}{1000} = 0.4
$$

Confirm by inversion:

$$
400x^{-1.5} = 0.4 \\;\\Rightarrow\\; x^{1.5} = 1000 \\;\\Rightarrow\\; x = 1000^{2/3} = 100
$$

The concentration is $0.4$ at $100$ metres, so the claim is true.`,
      `**D) Concentration falls as the distance from the stack grows.**  (true)

This claim asks only for the direction, which the sign of the exponent settles. With $A=400>0$ and exponent $-1.5<0$, concentration decreases at every distance.

The decline is steeper than an inverse-square law would give near the stack and flattens out further away. Both features come from the same exponent: the readings drop from $50$ to $6.25$ over twelve metres, then take another $84$ metres to fall to $0.4$.

Read the sign structure:

$$
c(x) = 400x^{-1.5}, \\qquad A > 0, \\quad r = -1.5 < 0
$$

Trace the readings downwind:

$$
c(4) = 50, \\quad c(8) \\approx 17.7, \\quad c(16) = 6.25, \\quad c(100) = 0.4
$$

Concentration falls monotonically with distance, so the claim is true.`,
      `**E) Halving the distance doubles the concentration.**  (false)

This claim understates the rise. Halving the distance multiplies concentration by $(1/2)^{-1.5}=2^{1.5}\\approx2.83$, so the reading rises by about $183\\%$, not $100\\%$.

Doubling would correspond to an exponent of $-1$. The exponent here is $-1.5$, so every halving of distance costs half again as much in the exponent — the mirror image of part B, where a doubling cut the reading to $35\\%$ rather than $50\\%$.

Apply the scale factor with multiplier $1/2$:

$$
\\frac{c(x/2)}{c(x)} = \\left(\\frac{1}{2}\\right)^{-1.5} = 2^{1.5} \\approx 2.8284
$$

Check on the monitored distance:

$$
c(4) = 50, \\qquad c(2) = \\frac{400}{2^{1.5}} \\approx \\frac{400}{2.828} \\approx 141.4, \\qquad \\frac{141.4}{50} \\approx 2.83
$$

The concentration nearly triples, so the claim is false.`,
    ],
    difficulty_level: "3/5",
    sort_order: 42,
    solution_overview: `Concentration follows $c(x)=Ax^{-1.5}$ at distance $x>0$ metres, with a monitor reading $c(4)=50$.

**Part 1: Building the model.**

Let $x$ = distance in metres and $c(x)$ = concentration. The exponent is given and negative, so concentration declines downwind; the monitor pins the coefficient.

**1. Translate: the monitor reading.** The distance is a perfect square, so the shape factor is exact:

$$
4^{1.5} = 8, \\qquad \\frac{A}{8} = 50
$$

**2. Translate: the scale rule.**

$$
\\frac{c(kx)}{c(x)} = k^{-1.5}
$$

**Part 2: The model.**

$$
c(x) = 400\\,x^{-1.5} \\tag{1}
$$

$$
\\frac{c(kx)}{c(x)} = k^{-1.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The monitor gives the coefficient:

$$
A = 400
$$

**2.** Readings downwind, taken at perfect squares:

$$
c(4) = 50, \\quad c(16) = 6.25, \\quad c(100) = 0.4
$$

**3.** Scale factors in both directions from (2):

$$
2^{-1.5} \\approx 0.354 \\;(-65\\%), \\qquad \\left(\\tfrac{1}{2}\\right)^{-1.5} \\approx 2.83 \\;(+183\\%)
$$

**4.** Inverting turns a concentration target into a distance:

$$
x = \\left(\\frac{400}{c}\\right)^{2/3}, \\qquad c = 0.4 \\;\\Rightarrow\\; x = 1000^{2/3} = 100
$$

**5.** The negative exponent makes the profile monotone and steepest near the stack, which is why the first few metres matter most for exposure.

**Answer.** $A = 400$ | $c(x) = 400x^{-1.5}$ | $c(100) = 0.4$`,
  },
  {
    id: "math-8-43",
    case_id: "MATH 8.43",
    title: `Storm Surge Feeding a Cubic Loss Index`,
    context: `A reinsurer models coastal losses in two stages. Storm surge height is $s(w)=0.5 w^{0.5}$ metres for a wind speed of $w>0$, and the loss index rises with the cube of surge height, $L(s)=32 s^{3}$.`,
    statements: [
      `The composed loss index is $L(w)=4w^{1.5}$.`,
      `Doubling the wind speed multiplies the loss index by about $2.83$.`,
      `At a wind speed of $25$ the loss index is $500$.`,
      `The loss index reaches $4000$ at a wind speed of $100$.`,
      `Losses grow more than proportionally with wind speed.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The composed loss index is $L(w)=4w^{1.5}$.**  (true)

This claim asks for the two stages combined. Substituting the surge law into the loss law multiplies the exponents to $1.5$ and collapses the constants to $4$.

The step that needs care is cubing the whole surge law, coefficient included: $\\left(0.5w^{0.5}\\right)^{3}$ contributes $0.5^{3}=0.125$ as well as $w^{1.5}$. Cubing only the variable part would leave a loss index eight times too large.

Substitute the surge law into the loss law:

$$
L(w) = 32\\left(0.5w^{0.5}\\right)^{3} = 32 \\times 0.5^{3} \\times w^{0.5 \\times 3}
$$

Simplify the constant and the exponent:

$$
32 \\times 0.125 = 4, \\qquad 0.5 \\times 3 = 1.5
$$

$$
L(w) = 4w^{1.5}
$$

The composed law is $4w^{1.5}$, so the claim is true.`,
      `**B) Doubling the wind speed multiplies the loss index by about $2.83$.**  (true)

This claim applies a scale factor to the composed law. With exponent $1.5$, doubling the wind speed multiplies losses by $2^{1.5}=2\\sqrt{2}\\approx2.828$.

The composed exponent is what governs this, not either stage's exponent alone: surge rises by only $41\\%$ when wind doubles, and cubing that rise produces the $183\\%$ jump in losses. Checking both routes is a good guard against composing incorrectly.

Form the scale factor on the composed law:

$$
\\frac{L(2w)}{L(w)} = 2^{1.5} = 2\\sqrt{2} \\approx 2.8284
$$

Verify through the two stages:

$$
s \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{3} \\approx 2.828
$$

Losses multiply by about $2.83$, so the claim is true.`,
      `**C) At a wind speed of $25$ the loss index is $500$.**  (true)

This claim evaluates the composed law. Since $25^{1.5}=125$, the loss index is $4 \\times 125 = 500$.

The stage-by-stage route confirms it and shows the mechanics: surge at that wind speed is $0.5 \\times 5 = 2.5$ metres, and $32 \\times 2.5^{3} = 32 \\times 15.625 = 500$. Agreement between the two routes is the strongest check available.

Evaluate the composed law:

$$
25^{1.5} = \\left(25^{1/2}\\right)^{3} = 5^{3} = 125, \\qquad L(25) = 4(125) = 500
$$

Confirm through the stages:

$$
s(25) = 0.5(5) = 2.5, \\qquad 32(2.5)^{3} = 32(15.625) = 500
$$

The loss index is $500$, so the claim is true.`,
      `**D) The loss index reaches $4000$ at a wind speed of $100$.**  (true)

This claim evaluates the composed law at a severe storm. Since $100^{1.5}=1000$, the index is $4 \\times 1000 = 4000$.

Comparing with part C makes the exposure vivid: four times the wind speed produces eight times the losses, because $4^{1.5}=8$. Read backwards, the same law says that a loss budget of $4000$ is exhausted at exactly $100$ units of wind speed.

Evaluate the shape factor:

$$
100^{1.5} = \\left(100^{1/2}\\right)^{3} = 10^{3} = 1000
$$

Apply the coefficient:

$$
L(100) = 4(1000) = 4000
$$

Confirm by inversion:

$$
4w^{1.5} = 4000 \\;\\Rightarrow\\; w^{1.5} = 1000 \\;\\Rightarrow\\; w = 1000^{2/3} = 100
$$

The index reaches $4000$ at wind speed $100$, so the claim is true.`,
      `**E) Losses grow more than proportionally with wind speed.**  (true)

This claim reads the composed exponent. Since $1.5>1$, the loss index grows faster than the wind speed in proportional terms.

It is worth seeing why the composition ends up above $1$ when the first stage is well below it: the surge stage has exponent $0.5$, but the loss stage triples it, and $0.5 \\times 3 = 1.5$. A convex second stage can more than undo a concave first stage.

Compare the growth of losses with the growth of wind speed:

$$
\\frac{L(kw)}{L(w)} = k^{1.5} > k \\qquad \\text{for } k>1
$$

Check with two multipliers:

$$
2^{1.5} \\approx 2.83 > 2, \\qquad 4^{1.5} = 8 > 4
$$

Losses grow more than proportionally, so the claim is true.`,
    ],
    difficulty_level: "4/5",
    sort_order: 43,
    solution_overview: `Surge is $s(w)=0.5w^{0.5}$ metres and the loss index is $L(s)=32s^{3}$.

**Part 1: Building the model.**

Let $w$ = wind speed, $s$ = surge height, $L$ = loss index. This is a chain, so composing multiplies exponents and raises the inner coefficient to the outer power.

**1. Translate: the surge stage.**

$$
s(w) = 0.5w^{0.5}
$$

**2. Translate: the loss stage applied to it.**

$$
L(w) = 32\\left(0.5w^{0.5}\\right)^{3}
$$

**Part 2: The model.**

$$
32 \\times 0.5^{3} = 4, \\qquad 0.5 \\times 3 = 1.5 \\tag{1}
$$

$$
L(w) = 4w^{1.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** Levels from (2), checked stage by stage:

$$
L(25) = 500 \\;\\; (s = 2.5), \\qquad L(100) = 4000 \\;\\; (s = 5)
$$

**2.** The composed scale factor for a doubling:

$$
2^{1.5} \\approx 2.83, \\qquad \\text{via stages: } \\left(2^{0.5}\\right)^{3} \\approx 1.414^{3} \\approx 2.83
$$

**3.** Inverting the composed law turns a loss budget into a wind speed:

$$
w = \\left(\\frac{L}{4}\\right)^{2/3}, \\qquad L = 4000 \\;\\Rightarrow\\; w = 100
$$

**4.** The composed exponent exceeds $1$, so losses are convex in wind speed:

$$
4^{1.5} = 8 > 4
$$

**5.** The concave surge stage ($0.5$) is more than offset by the cubic loss stage, which is the modelling point of the chain.

**Answer.** $L(w) = 4w^{1.5}$ | composed exponent $1.5$ | $L(100) = 4000$`,
  },
  {
    id: "math-8-44",
    case_id: "MATH 8.44",
    title: `Market Impact of a Block Trade`,
    context: `A broker models the price impact of a block trade as $I(v)=A v^{0.5}$ basis points, where $v>0$ is the order size as a fraction of average daily volume. A calibration trade of $0.04$ ADV moved the price by $12$ basis points.`,
    statements: [
      `The coefficient of the impact law is $60$ basis points.`,
      `An order of $0.09$ ADV moves the price by $18$ basis points.`,
      `Quadrupling the order size doubles the impact.`,
      `Halving the order size cuts the impact by about $29\\%$.`,
      `Impact per unit of order size is the same at every order size.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The coefficient of the impact law is $60$ basis points.**  (true)

This claim asks for the constant. The shape factor at the calibration trade is $\\sqrt{0.04}=0.2$, and dividing the observed impact by it gives $A=60$.

Square roots of numbers below $1$ are larger than the numbers themselves, which is the detail that trips people up here: $\\sqrt{0.04}=0.2$, not $0.02$. Getting that wrong inflates the coefficient tenfold and every prediction with it.

Evaluate the shape factor:

$$
\\sqrt{0.04} = 0.2
$$

Divide the observed impact by it:

$$
0.2A = 12 \\quad \\Rightarrow \\quad A = 60, \\qquad I(v) = 60\\sqrt{v}
$$

The coefficient is $60$ basis points, so the claim is true.`,
      `**B) An order of $0.09$ ADV moves the price by $18$ basis points.**  (true)

This claim applies the calibrated law to a larger order. Since $\\sqrt{0.09}=0.3$, the impact is $60 \\times 0.3 = 18$ basis points.

The comparison with the calibration trade is instructive for execution: the order is $2.25$ times larger but costs only $1.5$ times as much impact. Square-root impact laws are the standard justification for trading in fewer, larger blocks rather than many small ones.

Evaluate the shape factor:

$$
\\sqrt{0.09} = 0.3
$$

Apply the coefficient:

$$
I(0.09) = 60(0.3) = 18
$$

Confirm with the ratio route:

$$
\\left(\\frac{0.09}{0.04}\\right)^{0.5} = \\sqrt{2.25} = 1.5, \\qquad 12 \\times 1.5 = 18
$$

The impact is $18$ basis points, so the claim is true.`,
      `**C) Quadrupling the order size doubles the impact.**  (true)

This claim is a scale-factor question and needs no coefficient. With exponent $0.5$, quadrupling the order multiplies the impact by $4^{0.5}=2$.

This rule is the practical heart of the model: impact per unit traded falls as size grows, so a trader who splits an order into four equal pieces pays twice the impact of trading it in one block, assuming each piece moves the market independently.

Form the scale factor:

$$
\\frac{I(4v)}{I(v)} = 4^{0.5} = 2
$$

Check on the calibration trade:

$$
I(0.04) = 12, \\qquad I(0.16) = 60(0.4) = 24
$$

The impact doubles, so the claim is true.`,
      `**D) Halving the order size cuts the impact by about $29\\%$.**  (true)

This claim applies the scale factor downwards. Halving multiplies the impact by $(1/2)^{0.5}\\approx0.707$, so the reduction is about $29.3\\%$.

Note the asymmetry with intuition: cutting the order in half saves less than a third of the impact, not half. That is the same square-root shape that makes splitting orders expensive in part C, seen from the other direction.

Apply the scale factor:

$$
\\frac{I(v/2)}{I(v)} = \\left(\\frac{1}{2}\\right)^{0.5} \\approx 0.7071
$$

Convert to a percentage cut:

$$
1 - 0.7071 \\approx 0.293 = 29.3\\%
$$

Check on a concrete pair:

$$
I(0.04) = 12, \\qquad I(0.02) = 60\\sqrt{0.02} \\approx 60(0.1414) \\approx 8.49
$$

The impact falls by about $29\\%$, so the claim is true.`,
      `**E) Impact per unit of order size is the same at every order size.**  (false)

This claim would require an exponent of $1$. Dividing the impact law by $v$ gives $60v^{-0.5}$, whose exponent is negative, so impact per unit of size falls as orders grow.

This is precisely why the law is used: if impact per unit were constant, order size would be irrelevant to execution strategy. The declining average is what rewards trading in size and penalises fragmenting an order.

Divide the impact law by the order size:

$$
\\frac{I(v)}{v} = \\frac{60v^{0.5}}{v} = 60v^{-0.5}
$$

Evaluate at three order sizes:

$$
\\frac{12}{0.04} = 300, \\qquad \\frac{18}{0.09} = 200, \\qquad \\frac{24}{0.16} = 150
$$

Impact per unit halves across that range, so the claim is false.`,
    ],
    difficulty_level: "4/5",
    sort_order: 44,
    solution_overview: `Impact is $I(v)=Av^{0.5}$ basis points for an order of $v>0$ ADV, calibrated by $I(0.04)=12$.

**Part 1: Building the model.**

Let $v$ = order size as a fraction of average daily volume and $I(v)$ = price impact in basis points. The exponent is given, so the calibration trade pins the coefficient; note that square roots of fractions below one are larger than the fractions themselves.

**1. Translate: the calibration trade.**

$$
A\\sqrt{0.04} = 12, \\qquad \\sqrt{0.04} = 0.2
$$

**2. Translate: impact per unit traded.**

$$
\\frac{I(v)}{v} = A v^{-0.5}
$$

**Part 2: The model.**

$$
I(v) = 60\\sqrt{v} \\tag{1}
$$

$$
\\frac{I(v)}{v} = 60v^{-0.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The calibration gives the coefficient:

$$
A = \\frac{12}{0.2} = 60
$$

**2.** Impacts at other order sizes:

$$
I(0.02) \\approx 8.49, \\quad I(0.09) = 18, \\quad I(0.16) = 24
$$

**3.** Scale factors, in both directions:

$$
4^{0.5} = 2, \\qquad \\left(\\tfrac{1}{2}\\right)^{0.5} \\approx 0.707 \\;(-29\\%)
$$

**4.** Impact per unit traded declines by (2):

$$
300,\\; 200,\\; 150 \\text{ at } v = 0.04,\\,0.09,\\,0.16
$$

**5.** The declining average is the execution message: four equal slices cost twice the impact of one block of the same total size.

**Answer.** $A = 60$ bp | $I(v) = 60\\sqrt{v}$ | $I(0.09) = 18$ bp`,
  },
  {
    id: "math-8-45",
    case_id: "MATH 8.45",
    title: `Allometric Energy Use Across Livestock Weights`,
    context: `Daily energy use in a livestock study follows $E(m)=A m^{2/3}$, where $m>0$ is body mass in kilograms. A $27$ kg animal was measured at $90$ energy units per day.`,
    statements: [
      `The coefficient of the energy law is $10$.`,
      `A $64$ kg animal uses $160$ energy units per day.`,
      `Energy use per kilogram falls as body mass rises.`,
      `Doubling body mass raises energy use by about $41\\%$.`,
      `Energy use is proportional to body mass.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) The coefficient of the energy law is $10$.**  (true)

This claim asks for the constant. The measured mass is a perfect cube, so $27^{2/3}=3^{2}=9$ exactly, and dividing the measurement by that shape factor gives $A=10$.

Fractional exponents with denominator $3$ are handled by taking the cube root first: $27^{1/3}=3$, then squaring. Trying to square first means working with $27^{2}=729$ and then extracting a cube root, which is far more awkward by hand.

Evaluate the shape factor:

$$
27^{2/3} = \\left(27^{1/3}\\right)^{2} = 3^{2} = 9
$$

Divide the measurement by it:

$$
9A = 90 \\quad \\Rightarrow \\quad A = 10, \\qquad E(m) = 10m^{2/3}
$$

The coefficient is $10$, so the claim is true.`,
      `**B) A $64$ kg animal uses $160$ energy units per day.**  (true)

This claim extrapolates to a heavier animal. Since $64=4^{3}$, the shape factor is $4^{2}=16$, and energy use is $10 \\times 16 = 160$ units.

The comparison shows the allometric compression: mass rises by a factor of about $2.37$ while energy use rises only by a factor of $1.78$. That gap is the whole content of a $2/3$ exponent.

Evaluate the shape factor:

$$
64^{2/3} = \\left(64^{1/3}\\right)^{2} = 4^{2} = 16
$$

Apply the coefficient:

$$
E(64) = 10(16) = 160
$$

Confirm with the ratio route:

$$
\\left(\\frac{64}{27}\\right)^{2/3} = \\left(\\frac{4}{3}\\right)^{2} = \\frac{16}{9}, \\qquad 90 \\times \\frac{16}{9} = 160
$$

The animal uses $160$ units, so the claim is true.`,
      `**C) Energy use per kilogram falls as body mass rises.**  (true)

This claim concerns the derived average. Dividing energy use by mass gives $10m^{-1/3}$, a power function with a negative exponent, so heavier animals use less energy per kilogram.

This is the classic allometric result, and it follows purely from the exponent being below $1$. Total energy use still rises with mass — a heavier animal eats more — but each kilogram of body mass is supported more cheaply.

Divide the energy law by mass:

$$
\\frac{E(m)}{m} = \\frac{10m^{2/3}}{m} = 10m^{-1/3}
$$

Evaluate at three masses:

$$
\\frac{90}{27} \\approx 3.33, \\qquad \\frac{160}{64} = 2.5, \\qquad \\frac{E(125)}{125} = \\frac{250}{125} = 2
$$

Energy per kilogram falls throughout, so the claim is true.`,
      `**D) Doubling body mass raises energy use by about $41\\%$.**  (false)

This claim uses the wrong exponent. Doubling mass multiplies energy use by $2^{2/3}\\approx1.587$, a rise of about $59\\%$; the $41\\%$ figure belongs to an exponent of $0.5$.

The two exponents are easy to confuse because both are below $1$, but they give visibly different scale factors: $1.414$ against $1.587$. Checking against the data settles it — going from $27$ kg to $54$ kg raises energy use from $90$ to about $143$, a $59\\%$ rise.

Form the scale factor:

$$
\\frac{E(2m)}{E(m)} = 2^{2/3} \\approx 1.5874
$$

Convert to a percentage rise:

$$
1.5874 - 1 \\approx 0.587 = 58.7\\%
$$

Check with concrete masses:

$$
E(27) = 90, \\qquad E(54) = 10 \\times 54^{2/3} \\approx 10 \\times 14.29 \\approx 142.9
$$

The rise is about $59\\%$, so the claim is false.`,
      `**E) Energy use is proportional to body mass.**  (false)

This claim would require an exponent of $1$. The exponent is $2/3$, so energy use grows more slowly than mass, and proportionality would contradict the falling per-kilogram figure in part C.

The test is direct: under proportionality, the $64$ kg animal would use $90 \\times 64/27 \\approx 213$ units, while the measured law gives $160$. The gap of more than $50$ units per day is what allometric scaling saves.

Compare the two scale rules:

$$
\\frac{E(km)}{E(m)} = k^{2/3} < k \\qquad \\text{for } k>1
$$

Test the proportional prediction against the model:

$$
\\text{proportional: } 90 \\times \\frac{64}{27} \\approx 213, \\qquad \\text{model: } 160
$$

Energy use is not proportional to mass, so the claim is false.`,
    ],
    difficulty_level: "4/5",
    sort_order: 45,
    solution_overview: `Energy use is $E(m)=Am^{2/3}$ units per day for body mass $m>0$ kg, measured at $E(27)=90$.

**Part 1: Building the model.**

Let $m$ = body mass in kilograms and $E(m)$ = daily energy use. The allometric exponent is given, so the single measurement pins the coefficient; the derived quantity of interest is energy per kilogram.

**1. Translate: the measurement.** The mass is a perfect cube, so the shape factor is exact:

$$
27^{2/3} = 3^{2} = 9, \\qquad 9A = 90
$$

**2. Translate: energy per kilogram.**

$$
\\frac{E(m)}{m} = A m^{-1/3}
$$

**Part 2: The model.**

$$
E(m) = 10m^{2/3} \\tag{1}
$$

$$
\\frac{E(m)}{m} = 10m^{-1/3} \\tag{2}
$$

**Part 3: Solve.**

**1.** The measurement gives the coefficient:

$$
A = 10
$$

**2.** Levels at perfect cubes:

$$
E(64) = 160, \\qquad E(125) = 250
$$

**3.** The scale factor for a doubling of mass:

$$
2^{2/3} \\approx 1.587 \\quad (+59\\%)
$$

**4.** Equation (2) falls with mass, the standard allometric result:

$$
3.33,\\; 2.5,\\; 2 \\text{ units per kg at } m = 27,\\,64,\\,125
$$

**5.** A proportional model would have predicted $213$ units for the $64$ kg animal instead of $160$, which is the practical size of the allometric correction.

**Answer.** $A = 10$ | $E(m) = 10m^{2/3}$ | $E(64) = 160$ units per day`,
  },
];
