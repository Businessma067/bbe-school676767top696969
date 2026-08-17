/** MATH 8.21–8.25 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-21",
    case_id: "MATH 8.21",
    title: `Packing Output Over a Shift`,
    context: `A packing station's output follows $N(h)=A h^{0.5}$ items, where $h>0$ is the length of the shift in hours. A logged four-hour shift packed $48$ items.`,
    statements: [
      `A nine-hour shift packs $72$ items.`,
      `Doubling the shift length doubles the number of items packed.`,
      `The coefficient of the packing law is $12$.`,
      `Packing $96$ items takes an eight-hour shift.`,
      `Items packed per hour rises as the shift lengthens.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) A nine-hour shift packs $72$ items.**  (true)

This claim extrapolates the logged shift to a longer one. The four-hour record gives $A=24$, and a nine-hour shift then packs $24 \\times 3 = 72$ items.

Both shift lengths are perfect squares, so no rounding enters: $\\sqrt{4}=2$ and $\\sqrt{9}=3$. The comparison also shows the shape of the law — the shift is $2.25$ times longer but packs only $1.5$ times as much.

Recover the coefficient from the logged shift:

$$
A\\sqrt{4} = 48 \\quad \\Rightarrow \\quad 2A = 48 \\quad \\Rightarrow \\quad A = 24
$$

$$
N(h) = 24\\sqrt{h}
$$

Evaluate at nine hours:

$$
N(9) = 24(3) = 72
$$

The nine-hour shift packs $72$ items, so the claim is true.`,
      `**B) Doubling the shift length doubles the number of items packed.**  (false)

This claim assumes proportional output. With exponent $0.5$, doubling the shift multiplies output by $2^{0.5}\\approx1.414$, a rise of about $41\\%$.

Diminishing returns of this kind are the reason the exponent is worth reading before doing any arithmetic. Any exponent strictly between $0$ and $1$ guarantees that doubling the input raises output by less than double, regardless of the coefficient or the starting shift.

Form the scale factor:

$$
\\frac{N(2h)}{N(h)} = \\frac{A(2h)^{0.5}}{Ah^{0.5}} = 2^{0.5} \\approx 1.4142
$$

Check on the logged shift:

$$
N(4) = 48, \\qquad N(8) = 24\\sqrt{8} \\approx 24 \\times 2.828 \\approx 67.9
$$

Output rises by about $41\\%$, not $100\\%$, so the claim is false.`,
      `**C) The coefficient of the packing law is $12$.**  (false)

This claim halves the true coefficient. Dividing the logged $48$ items by the shape factor $\\sqrt{4}=2$ gives $A=24$, not $12$.

The value $12$ is what comes out of dividing $48$ by the shift length $4$ instead of by its square root — that is, of treating the law as if the exponent were $1$. It is worth testing any candidate coefficient against the record: $A=12$ would predict just $24$ items on the logged shift.

Divide the record by the correct shape factor:

$$
A = \\frac{48}{\\sqrt{4}} = \\frac{48}{2} = 24
$$

Compare what the two candidates predict:

$$
24\\sqrt{4} = 48 \\;\\checkmark, \\qquad 12\\sqrt{4} = 24 \\;\\times
$$

The coefficient is $24$, so the claim is false.`,
      `**D) Packing $96$ items takes an eight-hour shift.**  (false)

This claim inverts the law but doubles the shift instead of squaring the ratio. Solving $24\\sqrt{h}=96$ gives $\\sqrt{h}=4$ and therefore $h=16$ hours.

Output has to double from the logged $48$ to $96$, and doubling the shift feels like the natural answer. Under a square-root law the required time is multiplied by the *square* of the output ratio, so a doubling of output costs four times the hours.

Invert the law:

$$
24\\sqrt{h} = 96 \\quad \\Rightarrow \\quad \\sqrt{h} = 4 \\quad \\Rightarrow \\quad h = 16
$$

Check what the claimed shift would actually pack:

$$
N(8) = 24\\sqrt{8} \\approx 67.9
$$

The target needs $16$ hours, not $8$, so the claim is false.`,
      `**E) Items packed per hour rises as the shift lengthens.**  (false)

This claim reverses the behaviour of the average. Dividing output by hours gives $24h^{-0.5}$, whose exponent is negative, so the packing rate falls as the shift runs on.

Total output and output per hour move in opposite directions here: a longer shift always packs more items in absolute terms, yet each extra hour contributes less than the previous one. That is the operational meaning of an exponent below $1$.

Divide the law by the shift length:

$$
\\frac{N(h)}{h} = \\frac{24h^{0.5}}{h} = 24h^{-0.5}
$$

Evaluate at three shifts:

$$
\\frac{N(4)}{4} = 12, \\qquad \\frac{N(9)}{9} = 8, \\qquad \\frac{N(16)}{16} = 6
$$

The hourly rate falls from $12$ to $6$, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 21,
    solution_overview: `Packing output is $N(h)=Ah^{0.5}$ items for a shift of $h>0$ hours, and a four-hour shift packed $48$ items.

**Part 1: Building the model.**

Let $h$ = shift length in hours and $N(h)$ = items packed. The exponent is given, so a single logged shift is enough to pin the coefficient; everything else is evaluation, inversion or a scale factor.

**1. Translate: the logged shift.**

$$
A\\sqrt{4} = 48
$$

**2. Translate: the derived hourly rate.** Dividing by $h$ lowers the exponent by one:

$$
\\frac{N(h)}{h} = A h^{-0.5}
$$

**Part 2: The model.**

$$
N(h) = 24\\sqrt{h} \\tag{1}
$$

$$
\\frac{N(h)}{h} = 24h^{-0.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The logged shift gives the coefficient:

$$
A = \\frac{48}{2} = 24
$$

**2.** Levels at perfect squares stay exact:

$$
N(9) = 72, \\qquad N(16) = 96
$$

**3.** The scale factor for a doubling is below $2$:

$$
2^{0.5} \\approx 1.414 \\quad (+41\\%)
$$

**4.** Inversion squares the output ratio:

$$
h = \\left(\\frac{N}{24}\\right)^{2}, \\qquad N = 96 \\;\\Rightarrow\\; h = 16
$$

**5.** The hourly rate in (2) has a negative exponent, so longer shifts are less productive per hour:

$$
12 \\text{ at } h=4, \\qquad 8 \\text{ at } h=9, \\qquad 6 \\text{ at } h=16
$$

**Answer.** $A = 24$ | $N(h) = 24\\sqrt{h}$ | $96$ items need a $16$-hour shift`,
  },
  {
    id: "math-8-22",
    case_id: "MATH 8.22",
    title: `Drag Force Calibrated Against a Safety Limit`,
    context: `Aerodynamic drag on a test rig follows $F(v)=A v^{2}$ newtons, where $v>0$ is speed in metres per second. A wind-tunnel run at $20$ m/s measured $160$ N. The rig's mounting is rated to $1000$ N.`,
    statements: [
      `The coefficient of the drag law is $0.4$.`,
      `At $50$ m/s the drag reaches the mounting's $1000$ N rating.`,
      `Raising the speed by $50\\%$ raises the drag by $50\\%$.`,
      `Halving the speed halves the drag.`,
      `Drag per unit of speed is the same at every speed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The coefficient of the drag law is $0.4$.**  (true)

This claim asks for the constant in the drag law. Dividing the measured $160$ N by the shape factor $20^{2}=400$ gives $A=0.4$.

The units are worth keeping straight: the coefficient carries newtons per (metre per second) squared, so it is not a force and cannot be compared with the $160$ N reading directly. Checking it back against the run is the safest confirmation.

Evaluate the shape factor and divide:

$$
20^{2} = 400, \\qquad 400A = 160 \\quad \\Rightarrow \\quad A = 0.4
$$

$$
F(v) = 0.4v^{2}
$$

Verify the wind-tunnel run:

$$
F(20) = 0.4(400) = 160
$$

The coefficient is $0.4$, so the claim is true.`,
      `**B) At $50$ m/s the drag reaches the mounting's $1000$ N rating.**  (true)

This claim tests the rig's speed limit. With $A=0.4$, drag at $50$ m/s is $0.4 \\times 2500 = 1000$ N, exactly the rating.

Reading the same fact backwards is useful for the operator: inverting $0.4v^{2}=1000$ gives $v=50$, so any run faster than $50$ m/s exceeds the mounting's rating. The margin from the tunnel run is smaller than it looks — speed only has to rise by $150\\%$ while drag rises by $525\\%$.

Evaluate the law at the stated speed:

$$
F(50) = 0.4(50)^{2} = 0.4(2500) = 1000
$$

Invert to express the limit as a speed:

$$
0.4v^{2} = 1000 \\;\\Rightarrow\\; v^{2} = 2500 \\;\\Rightarrow\\; v = 50
$$

Drag reaches the rating at exactly $50$ m/s, so the claim is true.`,
      `**C) Raising the speed by $50\\%$ raises the drag by $50\\%$.**  (false)

This claim carries a percentage change straight through a squared law. The scale factor is $1.5^{2}=2.25$, so drag rises by $125\\%$, not $50\\%$.

Percentage changes never pass through a power function unchanged unless the exponent is $1$. With exponent $2$ the multiplier is squared, which is why moderate speed increases produce dramatic force increases on a test rig.

Form the scale factor:

$$
\\frac{F(1.5v)}{F(v)} = 1.5^{2} = 2.25
$$

Convert to a percentage rise:

$$
2.25 - 1 = 1.25 = 125\\%
$$

Check from the tunnel run:

$$
F(30) = 0.4(900) = 360, \\qquad \\frac{360}{160} = 2.25
$$

Drag rises by $125\\%$, so the claim is false.`,
      `**D) Halving the speed halves the drag.**  (false)

This claim again assumes proportionality. Halving the speed multiplies drag by $(1/2)^{2}=1/4$, so drag falls to a quarter.

The asymmetry with part C is worth noting: the same squared exponent that amplifies increases also amplifies decreases. A rig that survives $1000$ N at $50$ m/s sees only $250$ N at $25$ m/s, which is why low-speed runs are so much gentler on the mounting.

Apply the scale factor with multiplier $1/2$:

$$
\\frac{F(v/2)}{F(v)} = \\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}
$$

Check at the rating speed:

$$
F(50) = 1000, \\qquad F(25) = 0.4(625) = 250
$$

Drag falls to a quarter, not a half, so the claim is false.`,
      `**E) Drag per unit of speed is the same at every speed.**  (false)

This claim would require an exponent of $1$. Dividing the drag law by $v$ leaves $0.4v$, which grows with speed, so drag per unit of speed is not constant.

Dividing by the input always lowers the exponent by one, and only an original exponent of exactly $1$ leaves a constant behind. Here the ratio keeps exponent $1$, meaning it rises in direct proportion to speed.

Divide the law by speed:

$$
\\frac{F(v)}{v} = \\frac{0.4v^{2}}{v} = 0.4v
$$

Evaluate at two speeds:

$$
\\frac{F(20)}{20} = 8, \\qquad \\frac{F(50)}{50} = 20
$$

The ratio more than doubles across that range, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 22,
    solution_overview: `Drag follows $F(v)=Av^{2}$ newtons, a run at $20$ m/s measured $160$ N, and the mounting is rated to $1000$ N.

**Part 1: Building the model.**

Let $v$ = speed in m/s and $F(v)$ = drag in newtons. The exponent is given, so the wind-tunnel run fixes the coefficient, and the rating is then inverted into a maximum safe speed.

**1. Translate: the wind-tunnel run.**

$$
A(20)^{2} = 160
$$

**2. Translate: the mounting rating.**

$$
0.4v^{2} \\le 1000
$$

**Part 2: The model.**

$$
F(v) = 0.4v^{2} \\tag{1}
$$

$$
v^{2} \\le 2500 \\tag{2}
$$

**Part 3: Solve.**

**1.** The run gives the coefficient:

$$
A = \\frac{160}{400} = 0.4
$$

**2.** Invert (2) to get the speed limit:

$$
v \\le 50 \\text{ m/s}
$$

**3.** Scale factors square the speed multiplier:

$$
1.5^{2} = 2.25 \\;(+125\\%), \\qquad \\left(\\tfrac{1}{2}\\right)^{2} = \\tfrac{1}{4}
$$

**4.** Levels across the working range:

$$
F(20) = 160, \\qquad F(25) = 250, \\qquad F(30) = 360, \\qquad F(50) = 1000
$$

**5.** Drag per unit of speed keeps exponent $1$, so it rises linearly rather than staying flat:

$$
\\frac{F(v)}{v} = 0.4v, \\qquad 8 \\text{ at } v=20, \\qquad 20 \\text{ at } v=50
$$

**Answer.** $A = 0.4$ | $F(v) = 0.4v^{2}$ | rating reached at $v = 50$ m/s`,
  },
  {
    id: "math-8-23",
    case_id: "MATH 8.23",
    title: `Inelastic Demand and Where Revenue Goes`,
    context: `A regional utility faces demand $q(p)=A p^{-0.5}$ units per month at a price $p>0$, and a price of $16$ sells $300$ units. The board wants to know how revenue $R=pq$ behaves along this curve.`,
    statements: [
      `Revenue rises as the price rises.`,
      `The price elasticity of demand is $-2$.`,
      `At a price of $25$ the curve gives $300$ units.`,
      `Quadrupling the price cuts quantity to a quarter.`,
      `Revenue does not depend on the price.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) Revenue rises as the price rises.**  (true)

This claim asks for the direction of revenue on an inelastic curve. Multiplying demand by price gives $R(p)=1200p^{0.5}$, a positive exponent, so revenue rises with price.

The general rule behind this is that revenue's exponent is demand's exponent plus one. With demand at $-0.5$ the revenue exponent is $+0.5$: quantity falls when price rises, but not fast enough to offset the higher price.

Recover the coefficient from the observation:

$$
A(16)^{-0.5} = 300 \\quad \\Rightarrow \\quad \\frac{A}{4} = 300 \\quad \\Rightarrow \\quad A = 1200
$$

Build revenue:

$$
R(p) = p \\times 1200p^{-0.5} = 1200p^{0.5}
$$

Compare two prices:

$$
R(16) = 1200(4) = 4800, \\qquad R(25) = 1200(5) = 6000
$$

Revenue rises with price, so the claim is true.`,
      `**B) The price elasticity of demand is $-2$.**  (false)

This claim inverts the exponent. The elasticity of a power demand curve is the exponent itself, which here is $-0.5$, not $-2$.

The difference is not cosmetic: $-0.5$ describes inelastic demand, where revenue rises with price, while $-2$ would describe elastic demand, where revenue falls. The two produce opposite pricing advice from the same data point.

Read the elasticity off the curve:

$$
q(p) = 1200p^{-0.5} \\quad \\Rightarrow \\quad \\text{El}_{p}q = -0.5
$$

Test with a one percent price rise:

$$
1.01^{-0.5} \\approx 0.9950 \\quad \\Rightarrow \\quad \\text{about } -0.5\\%
$$

An elasticity of $-2$ would have cost about $2\\%$ of quantity, so the claim is false.`,
      `**C) At a price of $25$ the curve gives $300$ units.**  (false)

This claim reuses the observed quantity at a higher price. At $p=25$ the curve gives $240$ units, since the shape factor changes from $\\sqrt{16}=4$ to $\\sqrt{25}=5$.

Demand does move slowly on this curve — a $56\\%$ price rise costs only $20\\%$ of volume — which is exactly what makes the claim tempting. Slow movement is not no movement, and the arithmetic separates the two.

Evaluate the curve:

$$
q(25) = \\frac{1200}{\\sqrt{25}} = \\frac{1200}{5} = 240
$$

Confirm with the scale factor from the observation:

$$
\\left(\\frac{25}{16}\\right)^{-0.5} = \\frac{4}{5} = 0.8, \\qquad 300 \\times 0.8 = 240
$$

The curve gives $240$ units, so the claim is false.`,
      `**D) Quadrupling the price cuts quantity to a quarter.**  (false)

This claim applies the price multiplier directly to quantity. With exponent $-0.5$, quadrupling the price multiplies quantity by $4^{-0.5}=1/2$, so volume halves rather than falling to a quarter.

Cutting quantity to a quarter would require an elasticity of $-1$, or a sixteenfold price rise on this curve. The mistake amounts to reading the exponent as $-1$ instead of $-0.5$, which is the same slip that would reverse the revenue conclusion in part A.

Apply the scale factor:

$$
\\frac{q(4p)}{q(p)} = 4^{-0.5} = \\frac{1}{2}
$$

Check from the observed price:

$$
q(16) = 300, \\qquad q(64) = \\frac{1200}{8} = 150
$$

Quantity halves, so the claim is false.`,
      `**E) Revenue does not depend on the price.**  (false)

This claim describes unit-elastic demand, which this curve is not. Revenue is $1200p^{0.5}$, which grows with price without limit on the stated domain.

Revenue is price-independent only when demand's exponent is exactly $-1$, making revenue's exponent zero. Here the exponent is $+0.5$, so revenue is not merely dependent on price — it moves in the same direction as price, the hallmark of inelastic demand.

Write revenue and inspect its exponent:

$$
R(p) = 1200p^{0.5}, \\qquad 0.5 \\ne 0
$$

Evaluate at widely separated prices:

$$
R(4) = 2400, \\qquad R(16) = 4800, \\qquad R(64) = 9600
$$

Revenue doubles with each quadrupling of price, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 23,
    solution_overview: `Demand is $q(p)=Ap^{-0.5}$ with $q(16)=300$, and revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units sold, $R$ = revenue. The exponent is given, one observation pins the coefficient, and revenue is derived by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$
A(16)^{-0.5} = 300, \\qquad 16^{-0.5} = \\tfrac{1}{4}
$$

**2. Translate: revenue.**

$$
R(p) = p \\cdot Ap^{-0.5} = Ap^{0.5}
$$

**Part 2: The model.**

$$
q(p) = 1200\\,p^{-0.5} \\tag{1}
$$

$$
R(p) = 1200\\,p^{0.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$
A = 300 \\times 4 = 1200
$$

**2.** The elasticity is the exponent of (1):

$$
\\text{El}_{p}q = -0.5 \\quad \\text{(inelastic)}
$$

**3.** Quantities along the curve:

$$
q(16) = 300, \\qquad q(25) = 240, \\qquad q(64) = 150
$$

**4.** Scale factors use the exponent, not the price multiplier:

$$
4^{-0.5} = \\tfrac{1}{2}, \\qquad \\left(\\tfrac{25}{16}\\right)^{-0.5} = 0.8
$$

**5.** Because $-0.5 + 1 = 0.5 > 0$, revenue rises with price; it would be flat only at elasticity $-1$:

$$
R(4) = 2400, \\qquad R(16) = 4800, \\qquad R(64) = 9600
$$

**Answer.** $A = 1200$ | $q(p) = 1200p^{-0.5}$ | $R(p) = 1200p^{0.5}$ | elasticity $-0.5$`,
  },
  {
    id: "math-8-24",
    case_id: "MATH 8.24",
    title: `Kiln Output Under a Licensed Ceiling`,
    context: `A kiln's daily output follows $y(x)=A x^{4/3}$ tonnes, where $x>0$ is the fuel feed in cubic metres. A test firing at a feed of $27$ produced $324$ tonnes. The site licence caps daily output at $1024$ tonnes.`,
    statements: [
      `The coefficient of the output law is $4$.`,
      `The licensed ceiling of $1024$ tonnes is reached at a feed of $64$.`,
      `Doubling the fuel feed doubles the output.`,
      `A feed of $8$ produces $32$ tonnes.`,
      `Output per cubic metre of fuel is the same at every feed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) The coefficient of the output law is $4$.**  (true)

This claim asks for the constant. The test feed is a perfect cube, so $27^{4/3}=3^{4}=81$ exactly, and dividing the recorded output by that shape factor gives $A=4$.

Exponents written as fractions are easiest handled through their denominator first: take the cube root of $27$, then raise to the fourth power. Doing it in the other order works too but produces the awkward intermediate $27^{4}=531441$.

Evaluate the shape factor:

$$
27^{4/3} = \\left(27^{1/3}\\right)^{4} = 3^{4} = 81
$$

Divide the recorded output by it:

$$
81A = 324 \\quad \\Rightarrow \\quad A = 4, \\qquad y(x) = 4x^{4/3}
$$

The coefficient is $4$, so the claim is true.`,
      `**B) The licensed ceiling of $1024$ tonnes is reached at a feed of $64$.**  (true)

This claim inverts the law at the licence limit. Solving $4x^{4/3}=1024$ gives $x^{4/3}=256$, and raising to the power $3/4$ returns exactly $64$.

The inverse exponent is $3/4$, so the target ratio is compressed rather than magnified: output must rise by a factor of $3.16$ from the test firing while fuel rises only by a factor of $2.37$. Any exponent above $1$ produces that pattern.

Set the law equal to the ceiling:

$$
4x^{4/3} = 1024 \\quad \\Rightarrow \\quad x^{4/3} = 256
$$

Raise both sides to the reciprocal power:

$$
x = 256^{3/4} = \\left(4^{4}\\right)^{3/4} = 4^{3} = 64
$$

Confirm by substitution:

$$
y(64) = 4 \\times 64^{4/3} = 4 \\times 256 = 1024
$$

The ceiling binds at a feed of $64$, so the claim is true.`,
      `**C) Doubling the fuel feed doubles the output.**  (false)

This claim treats the law as proportional. With exponent $4/3$, doubling the feed multiplies output by $2^{4/3}\\approx2.52$, so output rises by about $152\\%$.

An exponent above $1$ means increasing returns: each doubling of fuel buys more than a doubling of output. That is also why the licence ceiling arrives sooner than a proportional estimate would suggest.

Form the scale factor:

$$
\\frac{y(2x)}{y(x)} = 2^{4/3} = 2 \\times 2^{1/3} \\approx 2 \\times 1.2599 \\approx 2.5198
$$

Check between two feeds:

$$
y(27) = 324, \\qquad y(54) = 4 \\times 54^{4/3} \\approx 816.5, \\qquad \\frac{816.5}{324} \\approx 2.52
$$

Output rises by a factor of about $2.52$, so the claim is false.`,
      `**D) A feed of $8$ produces $32$ tonnes.**  (false)

This claim understates output by half. Since $8^{4/3}=2^{4}=16$, the law gives $4 \\times 16 = 64$ tonnes at that feed.

The claimed $32$ is what appears if the shape factor is computed as $8^{4/3}=8$ — that is, if the exponent is quietly treated as $1$ — or if the coefficient is halved. Perfect cubes make this easy to check: the cube root of $8$ is $2$, and $2^{4}=16$.

Evaluate the shape factor:

$$
8^{4/3} = \\left(8^{1/3}\\right)^{4} = 2^{4} = 16
$$

Apply the coefficient:

$$
y(8) = 4(16) = 64
$$

The kiln produces $64$ tonnes, not $32$, so the claim is false.`,
      `**E) Output per cubic metre of fuel is the same at every feed.**  (false)

This claim would need an exponent of $1$. Dividing the law by $x$ leaves $4x^{1/3}$, which rises with the feed, so fuel efficiency improves as the kiln runs harder.

This is the flip side of the increasing returns in part C: because the exponent exceeds $1$, dividing by the input still leaves a positive exponent. Under the more common case of an exponent below $1$, the same division would have produced a falling average.

Divide the law by the feed:

$$
\\frac{y(x)}{x} = \\frac{4x^{4/3}}{x} = 4x^{1/3}
$$

Evaluate at three feeds:

$$
\\frac{y(8)}{8} = 8, \\qquad \\frac{y(27)}{27} = 12, \\qquad \\frac{y(64)}{64} = 16
$$

Output per cubic metre doubles across that range, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 24,
    solution_overview: `Kiln output is $y(x)=Ax^{4/3}$ tonnes for a fuel feed $x>0$, with a test firing $y(27)=324$ and a licensed ceiling of $1024$ tonnes.

**Part 1: Building the model.**

Let $x$ = fuel feed and $y(x)$ = daily output. The exponent is given and exceeds $1$, so the kiln shows increasing returns; the test firing pins the coefficient and the licence gives a level to invert.

**1. Translate: the test firing.** The feed is a perfect cube, so the shape factor is exact:

$$
27^{4/3} = 3^{4} = 81, \\qquad 81A = 324
$$

**2. Translate: the licence.**

$$
4x^{4/3} \\le 1024
$$

**Part 2: The model.**

$$
y(x) = 4x^{4/3} \\tag{1}
$$

$$
x^{4/3} \\le 256 \\tag{2}
$$

**Part 3: Solve.**

**1.** The test firing gives the coefficient:

$$
A = 4
$$

**2.** Levels at perfect cubes:

$$
y(8) = 64, \\qquad y(27) = 324, \\qquad y(64) = 1024
$$

**3.** The scale factor exceeds the multiplier because the exponent exceeds $1$:

$$
2^{4/3} \\approx 2.52 \\quad (+152\\%)
$$

**4.** Invert (2) with the reciprocal exponent $3/4$:

$$
x = 256^{3/4} = 64
$$

**5.** Fuel efficiency improves with scale, since dividing by $x$ leaves a positive exponent:

$$
\\frac{y(x)}{x} = 4x^{1/3}, \\qquad 8 \\to 12 \\to 16 \\text{ at feeds } 8, 27, 64
$$

**Answer.** $A = 4$ | $y(x) = 4x^{4/3}$ | licence ceiling at feed $x = 64$`,
  },
  {
    id: "math-8-25",
    case_id: "MATH 8.25",
    title: `A Pair of Power Functions That Undo Each Other`,
    context: `A calibration stage converts a raw reading $x>0$ into an index by $f(x)=9x^{2/3}$, and a reporting stage converts an index $y>0$ back into raw units by $g(y)=y^{3/2}/27$. The lab wants to know what happens when the two stages are applied one after the other.`,
    statements: [
      `Applying the reporting stage to the calibration stage returns the original reading.`,
      `The composition of the two stages is a power function with exponent $1$.`,
      `The calibration stage sends $8$ to $36$.`,
      `The reporting stage sends $36$ to $72$.`,
      `Applying the stages in the other order gives something other than the original input.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Applying the reporting stage to the calibration stage returns the original reading.**  (true)

This claim says the two stages are inverses. Substituting $f$ into $g$ multiplies the exponents to $1$ and cancels the constants exactly, leaving $g(f(x))=x$.

Both halves have to work for the claim to hold: the exponents $2/3$ and $3/2$ are reciprocals, and the constants $9$ and $1/27$ are matched to each other, since $9^{3/2}=27$. Change either one and the composition would still be a power function but no longer the identity.

Substitute the first stage into the second:

$$
g\\big(f(x)\\big) = \\frac{\\left(9x^{2/3}\\right)^{3/2}}{27} = \\frac{9^{3/2}\\,x^{(2/3)(3/2)}}{27}
$$

Evaluate the constant and the exponent:

$$
9^{3/2} = 27, \\qquad \\frac{2}{3} \\times \\frac{3}{2} = 1
$$

$$
g\\big(f(x)\\big) = \\frac{27x}{27} = x
$$

The composition returns the original reading, so the claim is true.`,
      `**B) The composition of the two stages is a power function with exponent $1$.**  (true)

This claim describes the same composition structurally. Since $g(f(x))=x=1 \\cdot x^{1}$, the composed map is a power function with coefficient $1$ and exponent $1$.

The general rule is that composing power functions always gives a power function whose exponent is the product of the two exponents — never the sum. The identity is simply the special case where that product equals $1$ and the constants happen to cancel.

Multiply the exponents:

$$
\\frac{2}{3} \\times \\frac{3}{2} = 1
$$

Collect the constants:

$$
\\frac{9^{3/2}}{27} = \\frac{27}{27} = 1
$$

$$
g\\big(f(x)\\big) = 1 \\cdot x^{1}
$$

The composition is a power function with exponent $1$, so the claim is true.`,
      `**C) The calibration stage sends $8$ to $36$.**  (true)

This claim evaluates the first stage alone. Since $8^{2/3}=4$, the calibration stage returns $9 \\times 4 = 36$.

Reading fractional exponents through their denominator keeps this exact: cube-root first, then square. Attempting to square first gives $8^{2}=64$, whose cube root is also $4$ — the same answer here, but far more awkward on numbers that are not perfect cubes.

Evaluate the shape factor:

$$
8^{2/3} = \\left(8^{1/3}\\right)^{2} = 2^{2} = 4
$$

Apply the coefficient:

$$
f(8) = 9(4) = 36
$$

The calibration stage sends $8$ to $36$, so the claim is true.`,
      `**D) The reporting stage sends $36$ to $72$.**  (false)

This claim gets the reporting stage wrong. Since $36^{3/2}=216$, dividing by $27$ returns $8$ — the original reading from part C, exactly as the inverse relationship requires.

The claimed $72$ is $2 \\times 36$, the result of treating the exponent $3/2$ as a simple doubling and ignoring the division by $27$. The inverse structure gives a free check: whatever $f$ sends $8$ to, $g$ must send back to $8$.

Evaluate the shape factor:

$$
36^{3/2} = \\left(36^{1/2}\\right)^{3} = 6^{3} = 216
$$

Divide by the constant:

$$
g(36) = \\frac{216}{27} = 8
$$

The reporting stage returns $8$, not $72$, so the claim is false.`,
      `**E) Applying the stages in the other order gives something other than the original input.**  (false)

This claim asserts that the pair works in only one direction. Composing the other way also gives the identity: $f(g(y))=y$ for every $y>0$.

Two power functions on the positive domain that invert in one order automatically invert in the other, because reciprocal exponents and matched constants are symmetric conditions. The arithmetic below shows the constants cancelling in the mirror-image way, with $27^{2/3}=9$ instead of $9^{3/2}=27$.

Substitute the reporting stage into the calibration stage:

$$
f\\big(g(y)\\big) = 9\\left(\\frac{y^{3/2}}{27}\\right)^{2/3} = \\frac{9\\,y^{(3/2)(2/3)}}{27^{2/3}}
$$

Evaluate the constant and the exponent:

$$
27^{2/3} = 9, \\qquad \\frac{3}{2} \\times \\frac{2}{3} = 1
$$

$$
f\\big(g(y)\\big) = \\frac{9y}{9} = y
$$

The reverse order also returns the input, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 25,
    solution_overview: `The calibration stage is $f(x)=9x^{2/3}$ and the reporting stage is $g(y)=y^{3/2}/27$, both on positive inputs.

**Part 1: Building the model.**

Let $x$ = raw reading and $y$ = index. Composing power functions multiplies their exponents and raises the inner coefficient to the outer exponent, so both the exponents and the constants must be tracked separately.

**1. Translate: the exponents.** They are reciprocals:

$$
\\frac{2}{3} \\times \\frac{3}{2} = 1
$$

**2. Translate: the constants.** They are matched:

$$
9^{3/2} = 27, \\qquad 27^{2/3} = 9
$$

**Part 2: The model.**

$$
g\\big(f(x)\\big) = \\frac{\\left(9x^{2/3}\\right)^{3/2}}{27} \\tag{1}
$$

$$
f\\big(g(y)\\big) = 9\\left(\\frac{y^{3/2}}{27}\\right)^{2/3} \\tag{2}
$$

**Part 3: Solve.**

**1.** Simplify (1):

$$
\\frac{27x}{27} = x
$$

**2.** Simplify (2):

$$
\\frac{9y}{9} = y
$$

**3.** Both orders give the identity, so the two stages are inverse power functions on $x>0$.

**4.** Spot values confirm the pairing:

$$
f(8) = 9 \\times 4 = 36, \\qquad g(36) = \\frac{216}{27} = 8
$$

**5.** The general lesson: composing multiplies exponents, so an inverse requires reciprocal exponents *and* constants satisfying $A^{s}B=1$, which is exactly what $9$ and $1/27$ do here.

**Answer.** $g(f(x)) = x$ | $f(g(y)) = y$ | composed exponent $1$ | $f(8)=36$, $g(36)=8$`,
  },
];
