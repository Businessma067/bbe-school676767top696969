/** MATH 8.46–8.50 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-46",
    case_id: "MATH 8.46",
    title: `Retail Footfall Thinning With Distance`,
    context: `Weekly footfall at a retail park from a residential zone follows $f(d)=A d^{-1.5}$ visitors, where $d>0$ is the driving distance in kilometres. A zone $4$ kilometres away supplies $250$ visitors a week.`,
    statements: [
      `A zone $16$ kilometres away supplies about $31$ visitors a week.`,
      `Quadrupling the distance cuts footfall to one eighth.`,
      `A zone one kilometre away would supply $2000$ visitors a week.`,
      `Footfall falls as the driving distance grows.`,
      `A zone $9$ kilometres away supplies $100$ visitors a week.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) A zone $16$ kilometres away supplies about $31$ visitors a week.**  (true)

This claim evaluates the law four times further out than the observed zone. The observation gives $A=2000$, and at $16$ km the model returns $2000/64=31.25$ visitors.

Both distances are perfect squares, so the $1.5$ powers are exact: $4^{1.5}=8$ and $16^{1.5}=64$. The drop is steep — four times the distance leaves an eighth of the footfall — which is why catchment areas are drawn tightly around retail parks.

Recover the coefficient:

$$
A(4)^{-1.5} = 250 \\quad \\Rightarrow \\quad \\frac{A}{8} = 250 \\quad \\Rightarrow \\quad A = 2000
$$

Evaluate at $16$ kilometres:

$$
16^{1.5} = 4^{3} = 64, \\qquad f(16) = \\frac{2000}{64} = 31.25
$$

The model gives about $31$ visitors, so the claim is true.`,
      `**B) Quadrupling the distance cuts footfall to one eighth.**  (true)

This claim is a scale-factor question, independent of the coefficient. With exponent $-1.5$, quadrupling the distance multiplies footfall by $4^{-1.5}=1/8$.

Writing $4^{-1.5}$ as $1/4^{1.5}=1/8$ is the safe route; treating the exponent's sign carelessly would give $8$ instead and turn a collapse into a boom. The rule matches part A exactly, where $250$ visitors became $31.25$.

Form the scale factor:

$$
\\frac{f(4d)}{f(d)} = 4^{-1.5} = \\frac{1}{4^{1.5}} = \\frac{1}{8}
$$

Check on the observed zone:

$$
f(4) = 250, \\qquad f(16) = 31.25, \\qquad \\frac{31.25}{250} = \\frac{1}{8}
$$

Footfall falls to one eighth, so the claim is true.`,
      `**C) A zone one kilometre away would supply $2000$ visitors a week.**  (true)

This claim evaluates the law at unit distance, where the shape factor is $1$ and the model returns the coefficient itself.

That is a useful reading of any power function: the coefficient is the value at an input of $1$, in whatever units the model is written. Here it means the coefficient $2000$ has a direct interpretation — weekly visitors from a zone one kilometre out.

Evaluate at one kilometre:

$$
f(1) = 2000 \\times 1^{-1.5} = 2000
$$

Confirm with the scale factor from the observed zone:

$$
\\left(\\frac{1}{4}\\right)^{-1.5} = 4^{1.5} = 8, \\qquad 250 \\times 8 = 2000
$$

The nearby zone supplies $2000$ visitors, so the claim is true.`,
      `**D) Footfall falls as the driving distance grows.**  (true)

This claim asks for the direction of the model, settled by the sign of the exponent. With $A=2000>0$ and exponent $-1.5<0$, footfall decreases at every distance.

The profile also flattens: most of the catchment is lost within the first few kilometres, and beyond about ten kilometres the differences between zones become small in absolute terms even though they remain large in percentage terms.

Read the sign structure:

$$
f(d) = 2000\\,d^{-1.5}, \\qquad A > 0, \\quad r = -1.5 < 0
$$

Trace the catchment outwards:

$$
f(1) = 2000, \\quad f(4) = 250, \\quad f(9) \\approx 74, \\quad f(16) = 31.25
$$

Footfall falls monotonically with distance, so the claim is true.`,
      `**E) A zone $9$ kilometres away supplies $100$ visitors a week.**  (false)

This claim overstates the nine-kilometre catchment. Since $9^{1.5}=27$, the model gives $2000/27\\approx74$ visitors, about a quarter below the claimed figure.

The claim looks plausible by interpolation — $9$ km sits between $4$ km at $250$ visitors and $16$ km at $31$ — but interpolating a convex decay curve linearly always overstates the middle. The exact route is short here, since $9$ is a perfect square: take the root, then cube.

Evaluate the shape factor:

$$
9^{1.5} = \\left(9^{1/2}\\right)^{3} = 3^{3} = 27
$$

Apply the coefficient:

$$
f(9) = \\frac{2000}{27} \\approx 74.07
$$

The zone supplies about $74$ visitors, not $100$, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 46,
    solution_overview: `Footfall follows $f(d)=Ad^{-1.5}$ visitors from a zone $d>0$ kilometres away, with $f(4)=250$.

**Part 1: Building the model.**

Let $d$ = driving distance in kilometres and $f(d)$ = weekly visitors. The exponent is given and negative, so footfall decays with distance; the observed zone pins the coefficient.

**1. Translate: the observed zone.** The distance is a perfect square, so the shape factor is exact:

$$
4^{1.5} = 8, \\qquad \\frac{A}{8} = 250
$$

**2. Translate: the scale rule.**

$$
\\frac{f(kd)}{f(d)} = k^{-1.5}
$$

**Part 2: The model.**

$$
f(d) = 2000\\,d^{-1.5} \\tag{1}
$$

$$
\\frac{f(kd)}{f(d)} = k^{-1.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The observed zone gives the coefficient, which is also the value at $d=1$:

$$
A = 2000 = f(1)
$$

**2.** Footfall at perfect squares stays exact:

$$
f(4) = 250, \\qquad f(9) = \\frac{2000}{27} \\approx 74.07, \\qquad f(16) = 31.25
$$

**3.** Scale factors from (2):

$$
4^{-1.5} = \\tfrac{1}{8}, \\qquad 2^{-1.5} \\approx 0.354
$$

**4.** Inverting turns a footfall target into a catchment radius:

$$
d = \\left(\\frac{2000}{f}\\right)^{2/3}, \\qquad f = 125 \\;\\Rightarrow\\; d = 16^{2/3} \\approx 6.35
$$

**5.** The curve is convex, so reading intermediate zones off a straight line between two known ones overstates them — the $9$ km zone is a case in point.

**Answer.** $A = 2000$ | $f(d) = 2000d^{-1.5}$ | $f(9) \\approx 74$ visitors`,
  },
  {
    id: "math-8-47",
    case_id: "MATH 8.47",
    title: `Rooftop Solar Output Across Two Installed Arrays`,
    context: `Daily output from a rooftop solar installation follows $y(a)=A a^{r}$ kilowatt-hours, where $a>0$ is the installed panel area in square metres. Two arrays are in service: a $100$ m² array delivers $240$ kWh a day, and a $225$ m² array delivers $360$ kWh. A proposal would expand the second array to $450$ m².`,
    statements: [
      `Output is proportional to the installed area.`,
      `The exponent is $0.5$ and the coefficient is $24$.`,
      `Doubling the installed area raises output by about $50\\%$.`,
      `Expanding the $225$ m² array to $450$ m² would push output above $520$ kWh.`,
      `Output per square metre rises as the array grows.`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A) Output is proportional to the installed area.**  (false)

This claim asserts an exponent of $1$, which the two arrays contradict. Area rises by a factor of $2.25$ between them while output rises only by a factor of $1.5$.

Proportionality is the natural first assumption for solar panels, and it is what a sales brochure would imply. The data say otherwise — shading, inverter limits and roof orientation all bite as arrays grow — and the exponent that fits is $0.5$.

Compare the two ratios:

$$
\\frac{225}{100} = 2.25, \\qquad \\frac{360}{240} = 1.5
$$

Test the proportional prediction against the second array:

$$
240 \\times 2.25 = 540 \\ne 360
$$

The proportional model overstates the larger array by $180$ kWh, so the claim is false.`,
      `**B) The exponent is $0.5$ and the coefficient is $24$.**  (true)

This claim gives the full calibration. Dividing one array by the other leaves $2.25^{r}=1.5$, so $r=0.5$, and either array then gives $A=24$.

Because $1.5^{2}=2.25$, the exponent falls out without logarithms. Checking the coefficient on both arrays is the confirmation that the power form fits: $240/10=24$ and $360/15=24$ agree exactly, which a wrong exponent would not allow.

Take the ratio of the two arrays:

$$
\\left(\\frac{225}{100}\\right)^{r} = \\frac{360}{240} \\quad \\Rightarrow \\quad 2.25^{r} = 1.5 = 2.25^{1/2}
$$

$$
r = 0.5
$$

Recover the coefficient from each array:

$$
\\frac{240}{\\sqrt{100}} = 24, \\qquad \\frac{360}{\\sqrt{225}} = 24, \\qquad y(a) = 24\\sqrt{a}
$$

Both constants are as claimed, so the statement is true.`,
      `**C) Doubling the installed area raises output by about $50\\%$.**  (false)

This claim misreads the scale factor. Doubling the area multiplies output by $2^{0.5}\\approx1.414$, a rise of about $41\\%$, not $50\\%$.

The figure $50\\%$ is what the observed pair of arrays suggests at a glance — output rose by half between them — but that pair differs by a factor of $2.25$ in area, not $2$. Using a scale factor requires matching the multiplier exactly.

Form the scale factor for a doubling:

$$
\\frac{y(2a)}{y(a)} = 2^{0.5} \\approx 1.4142
$$

Contrast with the observed pair:

$$
\\left(\\frac{225}{100}\\right)^{0.5} = 1.5 \\quad \\text{(a } 2.25\\times \\text{ expansion, not } 2\\times)
$$

A doubling gives about $41\\%$, so the claim is false.`,
      `**D) Expanding the $225$ m² array to $450$ m² would push output above $520$ kWh.**  (false)

This claim evaluates the proposal. Doubling that array multiplies its output by $\\sqrt{2}$, giving about $509$ kWh — short of the $520$ threshold.

The margin is narrow, so the question cannot be settled by eye, and it is exactly the sort of check that matters before signing off on an expansion. A proportional forecast would have promised $720$ kWh, more than $200$ kWh above what the calibrated model supports.

Apply the scale factor to the existing array:

$$
y(450) = 360 \\times 2^{0.5} \\approx 360 \\times 1.4142 \\approx 509.1
$$

Confirm through the calibrated law:

$$
y(450) = 24\\sqrt{450} \\approx 24 \\times 21.213 \\approx 509.1
$$

Compare with the threshold:

$$
509.1 < 520
$$

The expansion falls short, so the claim is false.`,
      `**E) Output per square metre rises as the array grows.**  (false)

This claim reverses the behaviour of the average. Dividing output by area gives $24a^{-0.5}$, whose exponent is negative, so each square metre delivers less as the array expands.

This is the practical meaning of the sub-linear exponent, and it is what makes the proposal in part D disappointing: the extra $225$ m² produce only about $149$ kWh, whereas the first $225$ m² produced $360$.

Divide output by area:

$$
\\frac{y(a)}{a} = \\frac{24a^{0.5}}{a} = 24a^{-0.5}
$$

Evaluate for the three arrays:

$$
\\frac{240}{100} = 2.4, \\qquad \\frac{360}{225} = 1.6, \\qquad \\frac{509.1}{450} \\approx 1.13
$$

Output per square metre falls throughout, so the claim is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 47,
    solution_overview: `Solar output is $y(a)=Aa^{r}$ kWh for an array of $a>0$ m², with $y(100)=240$ and $y(225)=360$; a proposal doubles the second array to $450$ m².

**Part 1: Building the model.**

Let $a$ = panel area in square metres and $y(a)$ = daily output. Two unknowns need the two installed arrays: their ratio carries the exponent, and either array then carries the coefficient.

**1. Translate: the ratio of the two arrays.**

$$
\\left(\\frac{225}{100}\\right)^{r} = \\frac{360}{240}
$$

**2. Translate: the coefficient.**

$$
A(100)^{r} = 240
$$

**Part 2: The model.**

$$
2.25^{r} = 1.5 \\tag{1}
$$

$$
y(a) = A a^{r} \\tag{2}
$$

**Part 3: Solve.**

**1.** Since $1.5=2.25^{1/2}$, equation (1) resolves without logarithms:

$$
r = 0.5
$$

**2.** Both arrays give the same coefficient, confirming the fit:

$$
A = \\frac{240}{10} = 24 = \\frac{360}{15}, \\qquad y(a) = 24\\sqrt{a}
$$

**3.** Scale factors must match the multiplier being asked about:

$$
2^{0.5} \\approx 1.414 \\;(+41\\%), \\qquad 2.25^{0.5} = 1.5 \\;(+50\\%)
$$

**4.** The proposal is a doubling of the second array:

$$
y(450) = 24\\sqrt{450} \\approx 509.1 \\text{ kWh} < 520
$$

**5.** Output per square metre falls with size, so each expansion adds less than the last:

$$
\\frac{y(a)}{a} = 24a^{-0.5}: \\quad 2.4,\\; 1.6,\\; 1.13 \\text{ at } a = 100,\\,225,\\,450
$$

**Answer.** $r = 0.5$ | $A = 24$ | $y(a) = 24\\sqrt{a}$ | proposal delivers $\\approx 509$ kWh`,
  },
  {
    id: "math-8-48",
    case_id: "MATH 8.48",
    title: `Battery Cell Costs Down a Learning Curve`,
    context: `Unit cost for battery cells follows $c(N)=A N^{b}$ euros, where $N>0$ is cumulative output in thousands of cells. Two milestones are recorded: at $100$ thousand cells the unit cost was $80$, and at $400$ thousand it was $40$. Cumulative spend is unit cost multiplied by volume.`,
    statements: [
      `The exponent of the learning curve is $-0.5$.`,
      `Quadrupling cumulative volume halves the unit cost.`,
      `Unit cost falls below $20$ only beyond $1600$ thousand cells.`,
      `Cumulative spend grows with the square root of volume.`,
      `Doubling cumulative volume halves the unit cost.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The exponent of the learning curve is $-0.5$.**  (true)

This claim asks for the exponent, which the two milestones determine through their ratio. Volume quadruples while cost halves, so $4^{b}=0.5$ and $b=-0.5$.

The negative sign is forced by the data — cost falls as volume rises — and the magnitude comes from $4^{-0.5}=1/2$. Dropping the sign would describe a cost that *rises* fourfold-to-double with volume, the opposite of a learning curve.

Divide the second milestone by the first:

$$
\\left(\\frac{400}{100}\\right)^{b} = \\frac{40}{80} \\quad \\Rightarrow \\quad 4^{b} = 0.5
$$

Solve using powers of two:

$$
2^{2b} = 2^{-1} \\quad \\Rightarrow \\quad 2b = -1 \\quad \\Rightarrow \\quad b = -0.5
$$

Recover the coefficient for later use:

$$
A(100)^{-0.5} = 80 \\;\\Rightarrow\\; \\frac{A}{10} = 80 \\;\\Rightarrow\\; A = 800
$$

The exponent is $-0.5$, so the claim is true.`,
      `**B) Quadrupling cumulative volume halves the unit cost.**  (true)

This claim restates the calibration as a general rule. Since $4^{-0.5}=1/2$, every quadrupling of cumulative volume halves the unit cost, not just the one between the two milestones.

Scale factors do not depend on the starting point, which is what makes them planning tools: from $400$ to $1600$ thousand cells the cost falls from $40$ to $20$, exactly as it fell from $80$ to $40$ over the first quadrupling.

Form the scale factor:

$$
\\frac{c(4N)}{c(N)} = 4^{-0.5} = \\frac{1}{2}
$$

Check two successive quadruplings:

$$
c(100) = 80, \\qquad c(400) = 40, \\qquad c(1600) = \\frac{800}{40} = 20
$$

Each quadrupling halves the cost, so the claim is true.`,
      `**C) Unit cost falls below $20$ only beyond $1600$ thousand cells.**  (true)

This claim inverts the curve at a cost target. Solving $800N^{-0.5}=20$ gives $\\sqrt{N}=40$, so the cost reaches $20$ exactly at $1600$ thousand cells and falls below it only afterwards.

Inverting an exponent of $-0.5$ means squaring the ratio $800/20=40$. That squaring is why cost targets get so expensive to reach: halving the cost again, to $10$, would take $6400$ thousand cells.

Set the curve equal to the target:

$$
800N^{-0.5} = 20 \\quad \\Rightarrow \\quad \\sqrt{N} = \\frac{800}{20} = 40
$$

Square both sides:

$$
N = 1600
$$

Check on either side:

$$
c(900) = \\frac{800}{30} \\approx 26.7, \\qquad c(2500) = \\frac{800}{50} = 16
$$

The threshold is $1600$ thousand cells, so the claim is true.`,
      `**D) Cumulative spend grows with the square root of volume.**  (true)

This claim asks about a derived quantity. Multiplying unit cost by volume raises the exponent by one, so spend is $800N^{0.5}$ — proportional to the square root of cumulative volume.

The result is worth reading twice: cost per cell falls, yet total spend keeps rising, just at a decelerating rate. Building the derived law rather than guessing is what settles the direction, since the two effects pull opposite ways.

Multiply unit cost by volume:

$$
S(N) = N \\cdot 800N^{-0.5} = 800N^{-0.5+1} = 800N^{0.5}
$$

Evaluate at the milestones:

$$
S(100) = 8000, \\qquad S(400) = 16000, \\qquad S(1600) = 32000
$$

Spend grows as $\\sqrt{N}$, so the claim is true.`,
      `**E) Doubling cumulative volume halves the unit cost.**  (false)

This claim applies the quadrupling rule to a doubling. Doubling multiplies unit cost by $2^{-0.5}\\approx0.707$, a reduction of about $29\\%$, not $50\\%$.

Two doublings make a quadrupling, and $0.707^{2}=0.5$ recovers the halving from part B. Assuming that each doubling halves the cost would compound to a factor of $1/4$ over a quadrupling, twice as fast as the data support.

Apply the scale factor:

$$
\\frac{c(2N)}{c(N)} = 2^{-0.5} \\approx 0.7071
$$

Check against a milestone:

$$
c(100) = 80, \\qquad c(200) = \\frac{800}{\\sqrt{200}} \\approx \\frac{800}{14.142} \\approx 56.6
$$

The cost falls by about $29\\%$, so the claim is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 48,
    solution_overview: `Unit cost is $c(N)=AN^{b}$ euros at cumulative volume $N>0$ thousand cells, with $c(100)=80$ and $c(400)=40$. Cumulative spend is $S=Nc(N)$.

**Part 1: Building the model.**

Let $N$ = cumulative volume in thousands of cells, $c$ = unit cost, $S$ = cumulative spend. Two milestones give two equations; their ratio isolates the exponent, and either milestone then fixes the coefficient.

**1. Translate: the ratio of the milestones.**

$$
\\left(\\frac{400}{100}\\right)^{b} = \\frac{40}{80}
$$

**2. Translate: cumulative spend.** Multiplying by $N$ raises the exponent by one:

$$
S(N) = N \\cdot A N^{b} = A N^{b+1}
$$

**Part 2: The model.**

$$
c(N) = 800\\,N^{-0.5} \\tag{1}
$$

$$
S(N) = 800\\,N^{0.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The ratio gives the exponent and either milestone the coefficient:

$$
4^{b} = 0.5 \\;\\Rightarrow\\; b = -0.5, \\qquad A = 80 \\times 10 = 800
$$

**2.** Unit costs down the curve:

$$
c(100) = 80, \\quad c(400) = 40, \\quad c(1600) = 20, \\quad c(2500) = 16
$$

**3.** Scale factors: a quadrupling halves, a doubling does not:

$$
4^{-0.5} = \\tfrac{1}{2}, \\qquad 2^{-0.5} \\approx 0.707 \\;(-29\\%)
$$

**4.** Invert (1) to turn a cost target into a volume:

$$
N = \\left(\\frac{800}{c}\\right)^{2}, \\qquad c = 20 \\;\\Rightarrow\\; N = 1600
$$

**5.** Equation (2) shows spend still rising while unit cost falls:

$$
S(100) = 8000, \\qquad S(1600) = 32000
$$

**Answer.** $b = -0.5$ | $A = 800$ | $c(N) = 800N^{-0.5}$ | $c = 20$ at $N = 1600$`,
  },
  {
    id: "math-8-49",
    case_id: "MATH 8.49",
    title: `Sediment Transport Driven by Channel Discharge`,
    context: `Sediment transport in a channel follows $S(v)=A v^{3}$ tonnes per day, where $v>0$ is flow velocity, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity itself depends on discharge through $v(q)=q^{0.5}/2$. The channel's stability limit is $5000$ tonnes per day.`,
    statements: [
      `Sediment transport as a function of discharge is $0.625q^{1.5}$.`,
      `The stability limit of $5000$ tonnes per day is reached at a discharge of $400$.`,
      `Doubling the discharge multiplies transport by about $2.83$.`,
      `Doubling the flow velocity doubles sediment transport.`,
      `Transport per unit of discharge is the same at every discharge.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Sediment transport as a function of discharge is $0.625q^{1.5}$.**  (true)

This claim composes the two stages. The gauged run gives $A=5$, and substituting the velocity law into the cubic transport law leaves $S(q)=0.625q^{1.5}$.

The delicate step is cubing the whole velocity law: $\\left(q^{0.5}/2\\right)^{3}$ contributes $1/8$ as well as $q^{1.5}$. Forgetting to cube the divisor $2$ would leave a transport law eight times too large — and would move the stability limit to a quarter of the true discharge.

Calibrate the transport stage:

$$
A(3)^{3} = 135 \\quad \\Rightarrow \\quad 27A = 135 \\quad \\Rightarrow \\quad A = 5
$$

Substitute the velocity law:

$$
S(q) = 5\\left(\\frac{q^{0.5}}{2}\\right)^{3} = 5 \\times \\frac{q^{1.5}}{8} = 0.625\\,q^{1.5}
$$

Spot-check through both stages at $q=36$:

$$
v = \\frac{6}{2} = 3, \\qquad S = 5(27) = 135, \\qquad 0.625(36)^{1.5} = 0.625(216) = 135 \\;\\checkmark
$$

The composed law is $0.625q^{1.5}$, so the claim is true.`,
      `**B) The stability limit of $5000$ tonnes per day is reached at a discharge of $400$.**  (true)

This claim inverts the composed law at the stability limit. Solving $0.625q^{1.5}=5000$ gives $q^{1.5}=8000$, and raising to the power $2/3$ returns exactly $400$.

The cube root of $8000$ is $20$, so the inversion is exact: $8000^{2/3}=20^{2}=400$. Doing the inversion on the composed law rather than stage by stage avoids carrying the intermediate velocity, though both routes agree.

Set the composed law equal to the limit:

$$
0.625q^{1.5} = 5000 \\quad \\Rightarrow \\quad q^{1.5} = 8000
$$

Raise both sides to the reciprocal power:

$$
q = 8000^{2/3} = \\left(8000^{1/3}\\right)^{2} = 20^{2} = 400
$$

Confirm through the stages:

$$
v(400) = \\frac{20}{2} = 10, \\qquad S = 5(1000) = 5000 \\;\\checkmark
$$

The limit is reached at a discharge of $400$, so the claim is true.`,
      `**C) Doubling the discharge multiplies transport by about $2.83$.**  (true)

This claim applies a scale factor to the composed law, whose exponent is $1.5$. Doubling the discharge multiplies transport by $2^{1.5}=2\\sqrt{2}\\approx2.828$.

Reading it through the stages gives the same answer and shows where the exponent comes from: velocity rises by only $41\\%$ when discharge doubles, and cubing $1.414$ gives $2.83$. The composed exponent is $0.5 \\times 3 = 1.5$.

Form the scale factor on the composed law:

$$
\\frac{S(2q)}{S(q)} = 2^{1.5} \\approx 2.8284
$$

Verify through the stages:

$$
v \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{3} \\approx 2.83
$$

Transport multiplies by about $2.83$, so the claim is true.`,
      `**D) Doubling the flow velocity doubles sediment transport.**  (false)

This claim ignores the cubic transport stage. Doubling velocity multiplies transport by $2^{3}=8$, not by $2$.

The two scale factors in this task must be kept apart: doubling *discharge* multiplies transport by $2.83$, while doubling *velocity* multiplies it by $8$. They differ because discharge has to rise fourfold to double the velocity.

Apply the scale factor at the velocity stage:

$$
\\frac{S(2v)}{S(v)} = 2^{3} = 8
$$

Check with concrete velocities:

$$
S(3) = 135, \\qquad S(6) = 5(216) = 1080, \\qquad \\frac{1080}{135} = 8
$$

Transport multiplies by eight, so the claim is false.`,
      `**E) Transport per unit of discharge is the same at every discharge.**  (false)

This claim would require the composed exponent to be $1$. It is $1.5$, so dividing by $q$ leaves $0.625q^{0.5}$, which rises with discharge.

Rising transport per unit of discharge is what makes large floods so damaging: not only is there more water, but each unit of it carries more sediment. The stability limit is therefore reached far sooner than a proportional model would predict.

Divide the composed law by discharge:

$$
\\frac{S(q)}{q} = \\frac{0.625q^{1.5}}{q} = 0.625q^{0.5}
$$

Evaluate at three discharges:

$$
\\frac{S(36)}{36} = 3.75, \\qquad \\frac{S(100)}{100} = 6.25, \\qquad \\frac{S(400)}{400} = 12.5
$$

Transport per unit of discharge more than triples, so the claim is false.`,
    ],
    difficulty_level: "5/5",
    sort_order: 49,
    solution_overview: `Transport is $S(v)=Av^{3}$ with $S(3)=135$, velocity is $v(q)=q^{0.5}/2$, and the stability limit is $5000$ tonnes per day.

**Part 1: Building the model.**

Let $q$ = discharge, $v$ = flow velocity, $S$ = sediment transport. One gauged run calibrates the transport stage; composing then multiplies the exponents and cubes the inner coefficient.

**1. Translate: the gauged run.**

$$
A(3)^{3} = 135
$$

**2. Translate: the composition.**

$$
S(q) = 5\\left(\\frac{q^{0.5}}{2}\\right)^{3}
$$

**Part 2: The model.**

$$
S(v) = 5v^{3} \\tag{1}
$$

$$
S(q) = 0.625\\,q^{1.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The gauged run gives the coefficient, and cubing the divisor gives the composed constant:

$$
A = 5, \\qquad \\frac{5}{8} = 0.625, \\qquad 0.5 \\times 3 = 1.5
$$

**2.** Invert (2) at the stability limit:

$$
q^{1.5} = 8000 \\;\\Rightarrow\\; q = 8000^{2/3} = 400, \\qquad v(400) = 10
$$

**3.** The two stages carry different scale factors:

$$
\\frac{S(2q)}{S(q)} = 2^{1.5} \\approx 2.83, \\qquad \\frac{S(2v)}{S(v)} = 2^{3} = 8
$$

**4.** Levels along the composed law:

$$
S(36) = 135, \\qquad S(100) = 625, \\qquad S(400) = 5000
$$

**5.** Transport per unit of discharge rises, since the composed exponent exceeds $1$:

$$
\\frac{S(q)}{q} = 0.625q^{0.5}: \\quad 3.75,\\; 6.25,\\; 12.5 \\text{ at } q = 36,\\,100,\\,400
$$

**Answer.** $A = 5$ | $S(q) = 0.625q^{1.5}$ | limit at $q = 400$ with $v = 10$`,
  },
  {
    id: "math-8-50",
    case_id: "MATH 8.50",
    title: `Highly Elastic Demand Under a Price Indexation`,
    context: `A commodity trader faces demand $q(p)=A p^{-3}$ units at a price $p>0$, and a price of $2$ clears $500$ units. A proposed indexation would raise the price by $10\\%$ across the board, and the trader wants the effect on both volume and revenue $R=pq$.`,
    statements: [
      `The price elasticity of demand is $-3$.`,
      `Revenue is a power function of price with exponent $-2$.`,
      `At a price of $2$ revenue is $1000$.`,
      `A price rise of $10\\%$ cuts quantity by about $25\\%$.`,
      `A price rise of $10\\%$ cuts revenue by about $17\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The price elasticity of demand is $-3$.**  (true)

This claim reads the elasticity off the demand curve. For a power function the elasticity equals the exponent at every price, so it is $-3$ throughout.

An elasticity of $-3$ is strongly elastic: buyers respond to price roughly three times as hard, in percentage terms, as the price itself moves. That single number drives every other result in this task.

Recover the coefficient so the curve is complete:

$$
A(2)^{-3} = 500 \\quad \\Rightarrow \\quad \\frac{A}{8} = 500 \\quad \\Rightarrow \\quad A = 4000
$$

$$
q(p) = 4000p^{-3}
$$

Read the elasticity and confirm with a small move:

$$
\\text{El}_{p}q = -3, \\qquad 1.01^{-3} \\approx 0.9706 \\;\\Rightarrow\\; \\text{about } -2.9\\%
$$

The elasticity is $-3$, so the claim is true.`,
      `**B) Revenue is a power function of price with exponent $-2$.**  (true)

This claim describes the derived revenue curve. Multiplying demand by price raises the exponent by one, so $-3$ becomes $-2$ and revenue is $4000p^{-2}$.

Revenue built on isoelastic demand is always isoelastic itself, one step less negative. Here the exponent remains negative, which is the formal statement that this trader loses revenue by raising prices.

Multiply demand by price:

$$
R(p) = p \\cdot 4000p^{-3} = 4000p^{-3+1} = 4000p^{-2}
$$

Check the scale-factor behaviour:

$$
\\frac{R(2p)}{R(p)} = 2^{-2} = \\frac{1}{4}
$$

Revenue is a power function with exponent $-2$, so the claim is true.`,
      `**C) At a price of $2$ revenue is $1000$.**  (true)

This claim evaluates revenue at the observed price. With $500$ units at a price of $2$, revenue is $1000$, and the derived formula returns the same figure.

Computing it both ways is the check that the coefficient $4000$ was recovered correctly: raw multiplication uses only the observation, while the formula route uses the calibrated curve.

Multiply the observed price and quantity:

$$
R = 2 \\times 500 = 1000
$$

Confirm through the derived revenue law:

$$
R(2) = \\frac{4000}{2^{2}} = \\frac{4000}{4} = 1000
$$

Both routes give $1000$, so the claim is true.`,
      `**D) A price rise of $10\\%$ cuts quantity by about $25\\%$.**  (true)

This claim prices the indexation on the volume side. The exact factor is $1.1^{-3}\\approx0.7513$, so quantity falls by about $24.9\\%$ — "about $25\\%$" as claimed.

A quick elasticity estimate would say $3 \\times 10\\% = 30\\%$, which overstates the loss by five percentage points. The exact power calculation is the one to trust for a move as large as $10\\%$; elasticity is a small-change approximation.

Apply the exact scale factor:

$$
\\frac{q(1.1p)}{q(p)} = 1.1^{-3} = \\frac{1}{1.331} \\approx 0.7513
$$

Convert to a percentage cut:

$$
1 - 0.7513 \\approx 0.249 = 24.9\\%
$$

Check with levels:

$$
q(2) = 500, \\qquad q(2.2) = \\frac{4000}{10.648} \\approx 375.7
$$

Quantity falls by about $25\\%$, so the claim is true.`,
      `**E) A price rise of $10\\%$ cuts revenue by about $17\\%$.**  (true)

This claim prices the same indexation on the revenue side. Revenue's exponent is $-2$, so the factor is $1.1^{-2}\\approx0.8264$, a fall of about $17.4\\%$.

Comparing with part D shows how the two effects net out: volume falls by about $25\\%$ while each unit sells for $10\\%$ more, and $0.7513 \\times 1.1 = 0.8264$ recovers the revenue factor exactly. The price gain cannot offset the volume loss, because demand is elastic.

Apply the revenue scale factor:

$$
\\frac{R(1.1p)}{R(p)} = 1.1^{-2} = \\frac{1}{1.21} \\approx 0.8264
$$

Convert to a percentage cut:

$$
1 - 0.8264 \\approx 0.174 = 17.4\\%
$$

Check with levels:

$$
R(2) = 1000, \\qquad R(2.2) = \\frac{4000}{4.84} \\approx 826.4
$$

Revenue falls by about $17\\%$, so the claim is true.`,
    ],
    difficulty_level: "5/5",
    sort_order: 50,
    solution_overview: `Demand is $q(p)=Ap^{-3}$ with $q(2)=500$; revenue is $R=pq$; a proposed indexation raises the price by $10\\%$.

**Part 1: Building the model.**

Let $p$ = price, $q$ = units, $R$ = revenue. The isoelastic form fixes the exponent, the observed pair pins the coefficient, and revenue is derived by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$
A(2)^{-3} = 500, \\qquad 2^{-3} = \\tfrac{1}{8}
$$

**2. Translate: the indexation.** A $10\\%$ rise means a multiplier of $1.1$:

$$
\\frac{q(1.1p)}{q(p)} = 1.1^{-3}, \\qquad \\frac{R(1.1p)}{R(p)} = 1.1^{-2}
$$

**Part 2: The model.**

$$
q(p) = 4000\\,p^{-3} \\tag{1}
$$

$$
R(p) = 4000\\,p^{-2} \\tag{2}
$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$
A = 500 \\times 8 = 4000
$$

**2.** Levels at the current price:

$$
q(2) = 500, \\qquad R(2) = 1000
$$

**3.** The indexation, computed exactly rather than by elasticity:

$$
1.1^{-3} \\approx 0.7513 \\;(-24.9\\%), \\qquad 1.1^{-2} \\approx 0.8264 \\;(-17.4\\%)
$$

**4.** Levels after the indexation:

$$
q(2.2) \\approx 375.7, \\qquad R(2.2) \\approx 826.4
$$

**5.** The two factors are consistent: $0.7513 \\times 1.1 = 0.8264$, so the $10\\%$ price gain recovers only part of the volume loss, as elastic demand requires.

**Answer.** $A = 4000$ | $q(p) = 4000p^{-3}$ | $R(p) = 4000p^{-2}$ | indexation: $-25\\%$ volume, $-17\\%$ revenue`,
  },
];
