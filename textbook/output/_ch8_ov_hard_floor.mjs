/** Floor-raising rewrite: 8.21, 8.22, 8.36, 8.40, 8.46 get hidden coefficients,
 *  thresholds and inversions so the easiest tier matches the old level 3 work. */
export const BATCH = [
  {
    id: "math-8-21",
    case_id: "MATH 8.21",
    title: `Packing Output Recovered From a Shift Extension`,
    context: `A packing station's output follows $N(h)=A h^{0.5}$ items, where $h>0$ is the length of the shift in hours. The shift log never records the coefficient: it notes only that extending a shift from $4$ to $9$ hours added exactly $30$ items to the count. A customer order of $150$ items has to be filled inside a single shift.`,
    statements: [
      `The coefficient of the packing law is $30$.`,
      `A nine-hour shift packs $135$ items.`,
      `Doubling the shift length doubles the number of items packed.`,
      `The $150$-item order can be filled inside a $20$-hour shift.`,
      `Items packed per hour rises as the shift lengthens.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      `**A) The coefficient of the packing law is $30$.**  (true)

This claim asks for the scale factor, which the log never states. It has to be rebuilt from the recorded gain of $30$ items between two shift lengths, and that reconstruction returns exactly $30$.

The trap is to read $30$ as an output or as an hourly rate and divide it by one of the shift lengths, giving $30/9$ or $30/4$. The log reports a *difference* between two shifts, so the coefficient multiplies the difference of the two shape factors, not a single one.

Both shift lengths are perfect squares, so the shape factors are whole numbers:

$$
9^{0.5} = 3, \\qquad 4^{0.5} = 2
$$

The recorded gain therefore fixes the coefficient:

$$
N(9) - N(4) = A(3 - 2) = A = 30
$$

The difference of the shape factors happens to be $1$, which is why the recorded gain and the coefficient coincide here. Check the law against the log:

$$
N(h) = 30\\sqrt{h}, \\qquad N(4) = 60, \\qquad N(9) = 90
$$

The two shifts differ by $30$ items as recorded, so the claim is true.`,
      `**B) A nine-hour shift packs $135$ items.**  (false)

This claim evaluates the law at the longer logged shift. With $A=30$ the nine-hour shift packs $90$ items, not $135$.

The figure $135$ is what linear scaling produces: the four-hour shift packs $60$ items, and stretching that in the ratio $9/4$ gives $135$. Output is not proportional to shift length here. The correct scale factor is the *square root* of the length ratio, because the exponent is $0.5$.

Apply the scale factor to the four-hour shift:

$$
\\frac{N(9)}{N(4)} = \\left(\\frac{9}{4}\\right)^{0.5} = \\frac{3}{2}
$$

$$
N(9) = \\frac{3}{2}\\cdot 60 = 90
$$

Evaluate the law directly as a check:

$$
N(9) = 30\\sqrt{9} = 30 \\cdot 3 = 90
$$

The nine-hour shift packs $90$ items, so the claim is false.`,
      `**C) Doubling the shift length doubles the number of items packed.**  (false)

This claim applies a scale factor, so only the exponent matters. With exponent $0.5$, doubling the shift length multiplies output by $\\sqrt{2}\\approx 1.41$, not by $2$.

The reasoning behind the claim treats packing as a steady flow, where twice the time gives twice the work. The model says otherwise: the exponent below $1$ encodes fatigue and setup effects, so each extra hour adds less than the one before it.

Take the ratio at a general shift length; the coefficient cancels:

$$
\\frac{N(2h)}{N(h)} = \\frac{A(2h)^{0.5}}{Ah^{0.5}} = 2^{0.5} \\approx 1.414
$$

Check on the logged four-hour shift:

$$
N(4) = 60, \\qquad N(8) = 30\\sqrt{8} \\approx 84.9
$$

Eight hours pack about $85$ items rather than $120$, so the claim is false.`,
      `**D) The $150$-item order can be filled inside a $20$-hour shift.**  (false)

This claim tests the order against a shift-length limit, so the law has to be inverted. A $20$-hour shift packs about $134$ items, which leaves the order short; filling $150$ items needs $25$ hours.

The temptation is to extrapolate from the logged shifts: nine hours gave $90$ items, so twenty hours "should" comfortably clear $150$. Under the square-root law, more than doubling the shift adds only about $50\\%$ more output, and that is not enough.

Evaluate the law at the limit:

$$
N(20) = 30\\sqrt{20} \\approx 30 \\cdot 4.472 \\approx 134.2
$$

Invert the law at the order size to find what the order actually needs:

$$
30\\sqrt{h} = 150 \\quad \\Rightarrow \\quad \\sqrt{h} = 5 \\quad \\Rightarrow \\quad h = 25
$$

The order requires a $25$-hour shift, five hours more than the limit allows, so the claim is false.`,
      `**E) Items packed per hour rises as the shift lengthens.**  (false)

This claim is about the average product $N(h)/h$, not about total output. Dividing the law by $h$ leaves a negative exponent, so the hourly rate falls as the shift lengthens.

The confusion comes from watching the total: output does keep rising with every extra hour, and it is easy to slide from "more items overall" to "more items per hour". Those are different quantities, and with an exponent below $1$ they move in opposite directions.

Form the average product by subtracting exponents:

$$
\\frac{N(h)}{h} = \\frac{30h^{0.5}}{h} = 30h^{-0.5}
$$

The exponent $-0.5$ is negative, so the rate decays. Compare the logged shifts and the order-sized one:

$$
\\frac{N(4)}{4} = 15, \\qquad \\frac{N(9)}{9} = 10, \\qquad \\frac{N(25)}{25} = 6
$$

The hourly rate falls from $15$ to $6$ items, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 21,
    solution_overview: `Packing output follows $N(h)=Ah^{0.5}$ items on a shift of $h>0$ hours. The log records only that extending a shift from $4$ to $9$ hours added $30$ items, and an order of $150$ items must fit in one shift.

**Part 1: Building the model.**

Let $h$ = shift length in hours and $N(h)$ = items packed. The exponent is given, so one fact is enough to fix the coefficient — but that fact is a difference of two outputs, not a single output.

**1. Translate: the recorded extension.** Write both shifts through the law and subtract:

$$
A(9)^{0.5} - A(4)^{0.5} = 30
$$

**2. Translate: the order.** The order sets a target output to invert:

$$
N(h) = 150
$$

**Part 2: The model.**

$$
A(3 - 2) = 30 \\tag{1}
$$

$$
Ah^{0.5} = 150 \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$
A = 30, \\qquad N(h) = 30\\sqrt{h}
$$

**2.** Check the law against the logged shifts:

$$
N(4) = 60, \\qquad N(9) = 90, \\qquad 90 - 60 = 30 \\;\\checkmark
$$

**3.** Scale factors depend on the exponent alone:

$$
\\frac{N(2h)}{N(h)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{N(9)}{N(4)} = \\left(\\tfrac{9}{4}\\right)^{0.5} = 1.5
$$

**4.** Equation (2) inverts at the order size, and the $20$-hour limit falls short:

$$
\\sqrt{h} = 5 \\;\\Rightarrow\\; h = 25, \\qquad N(20) \\approx 134.2 < 150
$$

**5.** The hourly rate is the law divided by $h$, so it decays:

$$
\\frac{N(h)}{h} = 30h^{-0.5}: \\quad 15 \\text{ at } h=4, \\quad 10 \\text{ at } h=9, \\quad 6 \\text{ at } h=25
$$

**Answer.** $A = 30$ | $N(h) = 30\\sqrt{h}$ | $N(9) = 90$ | the $150$-item order needs $h = 25$ hours`,
  },
  {
    id: "math-8-22",
    case_id: "MATH 8.22",
    title: `Drag and Absorbed Power on a Wind-Tunnel Rig`,
    context: `Aerodynamic drag on a test rig follows $F(v)=A v^{r}$ newtons, where $v>0$ is the airspeed in metres per second; neither constant is supplied by the manufacturer. Two wind-tunnel runs are on file: $160$ N at $20$ m/s and $640$ N at $40$ m/s. The rig also reports the power absorbed, $P=F\\cdot v$ watts, and its mounting is rated to $1000$ N.`,
    statements: [
      `The drag law is $F(v)=0.4v^{2}$.`,
      `The mounting's $1000$ N rating is first reached at a speed above $55$ m/s.`,
      `The absorbed power is a power function of speed with exponent $3$.`,
      `Doubling the airspeed doubles the absorbed power.`,
      `At $50$ m/s the rig absorbs $25$ kW.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The drag law is $F(v)=0.4v^{2}$.**  (true)

This claim asks for both constants, and two runs are exactly what is needed: their ratio carries the exponent, and either run then carries the level. The two facts give $r=2$ and $A=0.4$.

The trap is to work with the *difference* of the runs, $640-160=480$ N over $20$ m/s, and read off a slope of $24$. Differences describe a straight line; a power law is pinned down by ratios, because only in a ratio does the coefficient cancel.

Take the ratio of the two runs and note that the speeds also stand in a fixed ratio:

$$
\\frac{F(40)}{F(20)} = \\frac{A(40)^{r}}{A(20)^{r}} = 2^{r} = \\frac{640}{160} = 4 \\quad \\Rightarrow \\quad r = 2
$$

Substitute the exponent back into either run to fix the coefficient:

$$
A(20)^{2} = 160 \\quad \\Rightarrow \\quad 400A = 160 \\quad \\Rightarrow \\quad A = 0.4
$$

Verify against the run not used for the level:

$$
F(40) = 0.4(1600) = 640 \\;\\checkmark
$$

Both runs sit on $F(v)=0.4v^{2}$, so the claim is true.`,
      `**B) The mounting's $1000$ N rating is first reached at a speed above $55$ m/s.**  (false)

This claim asks where drag reaches the rating, so the law has to be inverted. Solving $0.4v^{2}=1000$ puts the rating at exactly $50$ m/s, below the speed in the claim.

The figure in the claim is what linear extrapolation from the faster run produces: $640$ N at $40$ m/s suggests $40 \\cdot 1000/640 = 62.5$ m/s, and any speed of that kind clears $55$. Because drag grows with the square of the speed, the remaining $360$ N of headroom is consumed by only $10$ m/s.

Invert the law at the rating:

$$
0.4v^{2} = 1000 \\quad \\Rightarrow \\quad v^{2} = 2500 \\quad \\Rightarrow \\quad v = 50
$$

Confirm with the scale factor from the logged run:

$$
F(50) = F(40)\\left(\\frac{50}{40}\\right)^{2} = 640 \\cdot 1.5625 = 1000 \\;\\checkmark
$$

The rating is reached at $50$ m/s, not above $55$, so the claim is false.`,
      `**C) The absorbed power is a power function of speed with exponent $3$.**  (true)

This claim is about the product $P=F\\cdot v$. Multiplying a power function by $v$ adds $1$ to its exponent, so absorbed power follows a cubic law in the airspeed.

The instinct is to expect power to inherit the drag exponent, since the two quantities are measured on the same runs and rise together. Multiplying by the speed is itself a power of $v$, and the exponent rules add rather than leave the exponent alone.

Multiply the drag law by the speed and add exponents:

$$
P(v) = F(v)\\cdot v = 0.4v^{2}\\cdot v^{1} = 0.4v^{3}
$$

Check the shape on the logged runs:

$$
P(20) = 0.4(8000) = 3200 \\text{ W}, \\qquad P(40) = 0.4(64000) = 25600 \\text{ W}
$$

$$
\\frac{P(40)}{P(20)} = 8 = 2^{3}
$$

Absorbed power is $0.4v^{3}$, a power function with exponent $3$, so the claim is true.`,
      `**D) Doubling the airspeed doubles the absorbed power.**  (false)

This claim applies a scale factor to the power law, where the exponent is $3$. Doubling the airspeed multiplies absorbed power by $2^{3}=8$, not by $2$.

Two separate slips lead to the claim: reading power as proportional to speed, and — for anyone who noticed the squared drag — settling for a factor of $4$. Neither exponent applies. Power carries drag's exponent plus one, which is why fan and engine sizing punishes speed so heavily.

Take the ratio of the power law at doubled speed:

$$
\\frac{P(2v)}{P(v)} = \\frac{0.4(2v)^{3}}{0.4v^{3}} = 2^{3} = 8
$$

Read the same factor off the logged runs:

$$
\\frac{P(40)}{P(20)} = \\frac{25600}{3200} = 8
$$

Absorbed power multiplies by $8$, not by $2$, so the claim is false.`,
      `**E) At $50$ m/s the rig absorbs $25$ kW.**  (false)

This claim evaluates the power law at the mounting's limiting speed. Drag there is exactly $1000$ N, and multiplying by $50$ m/s gives $50$ kW, twice the figure claimed.

The stated value is what appears if the factor $\\tfrac{1}{2}$ from the kinetic-energy formula is carried into a power calculation where it does not belong. Absorbed power is force times speed, with no halving: the half-factor belongs to the energy stored in moving air, not to the rate at which the rig does work against drag.

Evaluate the power law directly:

$$
P(50) = 0.4(50)^{3} = 0.4 \\cdot 125000 = 50000 \\text{ W} = 50 \\text{ kW}
$$

Cross-check through the drag at that speed:

$$
P(50) = F(50)\\cdot 50 = 1000 \\cdot 50 = 50000 \\text{ W}
$$

The rig absorbs $50$ kW rather than $25$ kW, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 22,
    solution_overview: `Drag follows $F(v)=Av^{r}$ newtons at airspeed $v>0$, with runs of $160$ N at $20$ m/s and $640$ N at $40$ m/s. Absorbed power is $P=F\\cdot v$ and the mounting is rated to $1000$ N.

**Part 1: Building the model.**

Let $v$ = airspeed in m/s, $F(v)$ = drag in newtons, $P(v)$ = absorbed power in watts. Two unknown constants need two facts, and the two runs supply them: their ratio isolates the exponent, either run then fixes the coefficient.

**1. Translate: the two runs.** Ratios kill the coefficient, so read the exponent first:

$$
\\frac{F(40)}{F(20)} = 2^{r} = 4
$$

**2. Translate: the level.** One run fixes the scale:

$$
A(20)^{2} = 160
$$

**3. Translate: the rating.** The mounting sets a drag target to invert:

$$
F(v) = 1000
$$

**Part 2: The model.**

$$
2^{r} = 4 \\tag{1}
$$

$$
400A = 160 \\tag{2}
$$

$$
Av^{r} = 1000 \\tag{3}
$$

**Part 3: Solve.**

**1.** Equations (1) and (2) give the drag law:

$$
r = 2, \\qquad A = 0.4, \\qquad F(v) = 0.4v^{2}
$$

**2.** Multiplying by the speed adds one to the exponent:

$$
P(v) = 0.4v^{2}\\cdot v = 0.4v^{3}
$$

**3.** Equation (3) inverts at the rating:

$$
0.4v^{2} = 1000 \\;\\Rightarrow\\; v^{2} = 2500 \\;\\Rightarrow\\; v = 50
$$

**4.** Scale factors follow from the two exponents:

$$
\\frac{F(2v)}{F(v)} = 4, \\qquad \\frac{P(2v)}{P(v)} = 8
$$

**5.** Evaluate the power at the limiting speed:

$$
P(50) = 0.4(125000) = 50000 \\text{ W} = 50 \\text{ kW}
$$

**Answer.** $F(v) = 0.4v^{2}$ | $P(v) = 0.4v^{3}$ | rating reached at $v = 50$ m/s | $P(50) = 50$ kW`,
  },
  {
    id: "math-8-36",
    case_id: "MATH 8.36",
    title: `Basin Storage Read Off a Change in Level`,
    context: `A tapered rainwater basin stores $V(d)=A d^{2}$ cubic metres when filled to a depth of $d>0$ metres. The survey sheet gives no coefficient: it records only that raising the level from $4$ to $6$ metres added exactly $60$ cubic metres to the store. An overflow weir sits at a depth of $9$ metres.`,
    statements: [
      `The storage law is $V(d)=3d^{2}$.`,
      `At the overflow weir the basin holds $243$ cubic metres.`,
      `At half the weir depth the basin holds a quarter of what it holds at the weir.`,
      `Raising the level from $4$ to $6$ metres adds more water than raising it from $2$ to $4$ metres.`,
      `Stored volume per metre of depth rises as the basin fills.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The storage law is $V(d)=3d^{2}$.**  (true)

This claim asks for the coefficient, which the survey never states. Rebuilding it from the recorded gain of $60$ cubic metres between two levels gives $A=3$.

The trap is to divide $60$ by the change in depth, $6-4=2$, and report $A=30$ — or to divide by one of the depths themselves. The survey reports a difference of two *volumes*, and each volume carries the depth squared, so the coefficient multiplies the difference of the squares, not the difference of the depths.

Write both levels through the law and subtract:

$$
V(6) - V(4) = A(6^{2} - 4^{2}) = A(36 - 16) = 20A
$$

Set that against the recorded gain:

$$
20A = 60 \\quad \\Rightarrow \\quad A = 3
$$

Check the law reproduces the survey:

$$
V(4) = 48, \\qquad V(6) = 108, \\qquad 108 - 48 = 60 \\;\\checkmark
$$

The storage law is $V(d)=3d^{2}$, so the claim is true.`,
      `**B) At the overflow weir the basin holds $243$ cubic metres.**  (true)

This claim evaluates the law at the weir depth of $9$ metres. With $A=3$ the store there is $3\\cdot 81=243$ cubic metres.

The tempting shortcut is to scale the six-metre reading in proportion to depth: $108 \\cdot 9/6 = 162$. That undercounts badly, because the correct scale factor for a square law is the *square* of the depth ratio, $(9/6)^{2}=2.25$, giving $108 \\cdot 2.25 = 243$. Tapered walls mean the last three metres hold far more than the first three.

Evaluate the law at the weir:

$$
V(9) = 3(9)^{2} = 3 \\cdot 81 = 243
$$

Confirm through the scale factor from the surveyed level:

$$
V(9) = V(6)\\left(\\frac{9}{6}\\right)^{2} = 108 \\cdot \\frac{9}{4} = 243 \\;\\checkmark
$$

The basin holds $243$ cubic metres at the weir, so the claim is true.`,
      `**C) At half the weir depth the basin holds a quarter of what it holds at the weir.**  (true)

This claim applies a scale factor, so only the exponent matters. Halving the depth multiplies the store by $(1/2)^{2}=1/4$, regardless of which depth one starts from.

The claim reads as though it needs the awkward depth $4.5$ metres to be checked, and it is easy to assume that half the depth means half the water. Under a square law the quarter is exact, and it is worth seeing that the ugly depth never has to be handled as a special case — the ratio disposes of it.

Take the ratio at half depth; the coefficient cancels:

$$
\\frac{V(d/2)}{V(d)} = \\frac{A(d/2)^{2}}{Ad^{2}} = \\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}
$$

Check the arithmetic at the weir:

$$
V(4.5) = 3(20.25) = 60.75, \\qquad \\frac{243}{4} = 60.75 \\;\\checkmark
$$

Half the weir depth leaves a quarter of the store, so the claim is true.`,
      `**D) Raising the level from $4$ to $6$ metres adds more water than raising it from $2$ to $4$ metres.**  (true)

This claim compares two rises of the same size, two metres each, at different starting depths. The higher rise adds $60$ cubic metres against $36$ for the lower one.

Equal steps in depth feel as though they should add equal water — that is the intuition a straight-sided tank would justify. The basin is tapered, so the surface area grows with depth and each successive metre adds more than the last. This is exactly why the survey's recorded gain of $60$ cubic metres cannot be quoted as "the volume per two metres".

Compute the lower rise:

$$
V(4) - V(2) = 3(16 - 4) = 3 \\cdot 12 = 36
$$

Compare with the surveyed rise:

$$
V(6) - V(4) = 3(36 - 16) = 60
$$

The upper two metres add $60$ against $36$ below, so the claim is true.`,
      `**E) Stored volume per metre of depth rises as the basin fills.**  (true)

This claim is about the average $V(d)/d$. Dividing the law by $d$ leaves exponent $1$, so the average grows in proportion to the depth.

The quantity is easy to confuse with the coefficient $A=3$, which is fixed and might suggest a constant "three cubic metres per metre". The coefficient sits in front of $d^{2}$, not in front of $d$: after the division a factor of $d$ survives, and the average keeps climbing.

Form the average by subtracting exponents:

$$
\\frac{V(d)}{d} = \\frac{3d^{2}}{d} = 3d
$$

The exponent is positive, so the average rises. Evaluate at the surveyed depths and the weir:

$$
\\frac{V(4)}{4} = 12, \\qquad \\frac{V(6)}{6} = 18, \\qquad \\frac{V(9)}{9} = 27
$$

Volume per metre climbs from $12$ to $27$ cubic metres, so the claim is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 36,
    solution_overview: `Basin storage follows $V(d)=Ad^{2}$ cubic metres at depth $d>0$. Raising the level from $4$ to $6$ metres added $60$ cubic metres, and the overflow weir sits at $9$ metres.

**Part 1: Building the model.**

Let $d$ = depth in metres and $V(d)$ = stored volume. The exponent is given by the tapered geometry, so a single fact fixes the coefficient — but the recorded fact is a difference of two volumes, not a volume.

**1. Translate: the recorded rise.** Write both levels through the law and subtract:

$$
A(6)^{2} - A(4)^{2} = 60
$$

**2. Translate: the weir.** The weir gives the depth at which the store is to be evaluated:

$$
V(9) = A(9)^{2}
$$

**Part 2: The model.**

$$
A(36 - 16) = 60 \\tag{1}
$$

$$
V(d) = Ad^{2} \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$
20A = 60 \\;\\Rightarrow\\; A = 3, \\qquad V(d) = 3d^{2}
$$

**2.** Check against the survey:

$$
V(4) = 48, \\qquad V(6) = 108, \\qquad 108 - 48 = 60 \\;\\checkmark
$$

**3.** Equation (2) at the weir, with the scale-factor cross-check:

$$
V(9) = 243, \\qquad V(6)\\left(\\tfrac{9}{6}\\right)^{2} = 108 \\cdot 2.25 = 243
$$

**4.** Scale factors need only the exponent:

$$
\\frac{V(d/2)}{V(d)} = \\tfrac{1}{4}, \\qquad V(4.5) = 60.75 = \\tfrac{243}{4}
$$

**5.** Equal steps in depth do not add equal water, and the average keeps rising:

$$
V(4)-V(2) = 36 < 60 = V(6)-V(4), \\qquad \\frac{V(d)}{d} = 3d
$$

**Answer.** $A = 3$ | $V(d) = 3d^{2}$ | $V(9) = 243$ m³ | volume per metre $= 3d$, rising`,
  },
  {
    id: "math-8-40",
    case_id: "MATH 8.40",
    title: `Gallery Lighting Against a Conservation Minimum`,
    context: `Illuminance from a gallery spotlight follows the inverse-square law $I(d)=A d^{-2}$ lux, where $d>0$ is the distance from the lamp in metres. The commissioning sheet does not record $A$: it states only that moving the meter from $2$ to $3$ metres dropped the reading by exactly $75$ lux. Conservation rules require at least $50$ lux on every displayed work.`,
    statements: [
      `The lamp's coefficient is $540$, so a work two metres away receives $135$ lux.`,
      `The $50$-lux minimum is still met at a distance of $3.2$ metres.`,
      `Doubling the distance from the lamp cuts the illuminance to a quarter.`,
      `A work six metres from the lamp falls below the conservation minimum.`,
      `Moving a work from three to four metres costs less illuminance than moving it from two to three metres.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The lamp's coefficient is $540$, so a work two metres away receives $135$ lux.**  (true)

This claim asks for the coefficient and the reading it implies at two metres. The recorded drop of $75$ lux between two distances rebuilds both: $A=540$ and $I(2)=135$ lux.

The trap is to treat $75$ as a reading rather than a drop and divide it by a squared distance, giving $75/4$ or $75/9$. The sheet records a *difference* of two readings, and with a negative exponent each reading carries a reciprocal, so the coefficient multiplies the difference of the two reciprocals.

Write both readings through the law and subtract:

$$
I(2) - I(3) = A\\left(\\frac{1}{2^{2}} - \\frac{1}{3^{2}}\\right) = A\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = A \\cdot \\frac{5}{36}
$$

Set that against the recorded drop:

$$
\\frac{5A}{36} = 75 \\quad \\Rightarrow \\quad A = 540
$$

Evaluate the law at the two distances:

$$
I(2) = \\frac{540}{4} = 135, \\qquad I(3) = \\frac{540}{9} = 60, \\qquad 135 - 60 = 75 \\;\\checkmark
$$

Both the coefficient and the two-metre reading match the claim, so it is true.`,
      `**B) The $50$-lux minimum is still met at a distance of $3.2$ metres.**  (true)

This claim tests the conservation rule at a specific distance. At $3.2$ metres the model gives about $52.7$ lux, which still clears the $50$-lux floor.

The margin is thin enough that a linear reading of the commissioning sheet gets it wrong: the sheet shows $75$ lux lost over the metre from $2$ to $3$, and continuing at that rate would put the reading at $60-15=45$ lux by $3.2$ metres — below the floor. Illuminance does not fall at a steady rate per metre; the decline flattens as the distance grows, which is what keeps $3.2$ metres inside the rule.

Evaluate the law at the stated distance:

$$
I(3.2) = \\frac{540}{3.2^{2}} = \\frac{540}{10.24} \\approx 52.7
$$

Locate the exact boundary by inverting the law at the minimum:

$$
\\frac{540}{d^{2}} = 50 \\quad \\Rightarrow \\quad d^{2} = 10.8 \\quad \\Rightarrow \\quad d \\approx 3.29
$$

The rule holds out to about $3.29$ metres, so $3.2$ metres is inside it and the claim is true.`,
      `**C) Doubling the distance from the lamp cuts the illuminance to a quarter.**  (true)

This claim applies a scale factor, so only the exponent matters. With exponent $-2$, doubling the distance multiplies illuminance by $2^{-2}=1/4$.

The reading that competes with this one is "twice as far, half the light", which treats the fall-off as proportional to distance. It is also worth noting what the claim does *not* say: it holds at every distance, near or far, because the coefficient cancels in the ratio — the absolute loss differs enormously between near and far pairs even though the factor is always a quarter.

Take the ratio at doubled distance:

$$
\\frac{I(2d)}{I(d)} = \\frac{A(2d)^{-2}}{Ad^{-2}} = 2^{-2} = \\frac{1}{4}
$$

Check on two pairs, one near and one far:

$$
I(2) = 135 \\to I(4) = 33.75, \\qquad I(3) = 60 \\to I(6) = 15
$$

Each pair falls by a factor of four, so the claim is true.`,
      `**D) A work six metres from the lamp falls below the conservation minimum.**  (true)

This claim tests a specific distance against the $50$-lux floor. At six metres the model gives $15$ lux, far under the minimum.

A plausible-looking route to the same verdict is wrong: six metres is three times the two-metre distance, so one might cut $135$ lux to a third and quote $45$ lux. That also lands below the floor, which hides the error. Tripling the distance divides illuminance by $9$, not by $3$, and the true reading is $15$ lux — a third of what that shortcut suggests.

Evaluate the law at six metres:

$$
I(6) = \\frac{540}{36} = 15
$$

Confirm through the scale factor from the two-metre reading:

$$
I(6) = I(2)\\cdot 3^{-2} = \\frac{135}{9} = 15 \\;\\checkmark
$$

At $15$ lux the work sits well below the $50$-lux minimum, so the claim is true.`,
      `**E) Moving a work from three to four metres costs less illuminance than moving it from two to three metres.**  (true)

This claim compares two moves of one metre each at different distances. The nearer move costs $75$ lux, the farther one about $26$ lux.

Equal steps in distance suggest equal losses, and the commissioning sheet reinforces the impression by quoting a single figure of $75$ lux for one metre. That figure is tied to the metre it was measured on. Under an inverse-square law the loss per metre collapses as the lamp recedes, which is why fine positioning matters close to the lamp and hardly at all far from it.

Compute the farther move:

$$
I(3) - I(4) = 60 - \\frac{540}{16} = 60 - 33.75 = 26.25
$$

Compare with the recorded nearer move:

$$
I(2) - I(3) = 135 - 60 = 75
$$

The one-metre move costs $26.25$ lux instead of $75$, so the claim is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 40,
    solution_overview: `Illuminance follows $I(d)=Ad^{-2}$ lux at distance $d>0$ metres. Moving from $2$ to $3$ metres dropped the reading by $75$ lux, and conservation rules demand at least $50$ lux.

**Part 1: Building the model.**

Let $d$ = distance in metres and $I(d)$ = illuminance in lux. The exponent is fixed by the inverse-square law, so one fact fixes the coefficient — and that fact is a difference of two readings, each carrying a reciprocal of a square.

**1. Translate: the recorded drop.** Write both readings and subtract:

$$
A(2)^{-2} - A(3)^{-2} = 75
$$

**2. Translate: the conservation rule.** The minimum sets a level to invert:

$$
I(d) = 50
$$

**Part 2: The model.**

$$
A\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 75 \\tag{1}
$$

$$
\\frac{A}{d^{2}} = 50 \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$
\\frac{5A}{36} = 75 \\;\\Rightarrow\\; A = 540, \\qquad I(d) = \\frac{540}{d^{2}}
$$

**2.** Check against the commissioning sheet:

$$
I(2) = 135, \\qquad I(3) = 60, \\qquad 135 - 60 = 75 \\;\\checkmark
$$

**3.** Equation (2) inverts at the minimum:

$$
d^{2} = \\frac{540}{50} = 10.8 \\;\\Rightarrow\\; d \\approx 3.29 \\text{ m}
$$

**4.** Scale factors need only the exponent:

$$
\\frac{I(2d)}{I(d)} = \\tfrac{1}{4}, \\qquad \\frac{I(3d)}{I(d)} = \\tfrac{1}{9}
$$

**5.** Readings at the distances in question, and the collapsing loss per metre:

$$
I(3.2) \\approx 52.7, \\qquad I(6) = 15, \\qquad 75 \\text{ lux lost from } 2\\to 3 \\text{ against } 26.25 \\text{ from } 3\\to 4
$$

**Answer.** $A = 540$ | $I(d) = 540d^{-2}$ | the $50$-lux rule holds out to $d \\approx 3.29$ m | $I(6) = 15$ lux`,
  },
  {
    id: "math-8-46",
    case_id: "MATH 8.46",
    title: `Retail Catchment Under a Distance-Decay Law`,
    context: `Weekly footfall at a retail park from a residential zone follows $f(d)=A d^{-1.5}$ visitors, where $d>0$ is the driving distance in kilometres. The planning file omits the coefficient: it records only that a zone $4$ kilometres away supplies $350$ more visitors a week than a zone $16$ kilometres away. A zone counts as core catchment when it supplies at least $100$ visitors a week.`,
    statements: [
      `The coefficient of the footfall law is $3200$.`,
      `The zone four kilometres away supplies $400$ visitors a week.`,
      `Quadrupling the driving distance cuts footfall to one eighth.`,
      `The core-catchment boundary lies just beyond $10$ kilometres.`,
      `A zone nine kilometres away falls outside the core catchment.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The coefficient of the footfall law is $3200$.**  (true)

This claim asks for the scale factor, which the planning file never states. Rebuilding it from the recorded gap of $350$ visitors between two zones gives $A=3200$.

The trap is to treat $350$ as one zone's footfall, or to divide it by a single shape factor such as $4^{-1.5}$. The file records a *difference* between two zones, so the coefficient multiplies the difference of the two shape factors. Both distances are convenient: $4$ and $16$ are perfect squares, so the fractional exponent resolves exactly.

Evaluate the two shape factors:

$$
4^{1.5} = (2^{2})^{3/2} = 2^{3} = 8, \\qquad 16^{1.5} = (4^{2})^{3/2} = 4^{3} = 64
$$

Write the recorded gap through the law:

$$
f(4) - f(16) = A\\left(\\frac{1}{8} - \\frac{1}{64}\\right) = A \\cdot \\frac{7}{64} = 350
$$

Solve for the coefficient:

$$
A = 350 \\cdot \\frac{64}{7} = 3200
$$

The footfall law is $f(d)=3200d^{-1.5}$, so the claim is true.`,
      `**B) The zone four kilometres away supplies $400$ visitors a week.**  (true)

This claim asks for the nearer zone's own footfall, which the file gives only indirectly. With $A=3200$ the zone supplies $3200/8=400$ visitors a week.

The recorded $350$ is the natural wrong answer: it is the *gap* between the two zones, not the nearer zone's traffic. The two are close in size here precisely because the distant zone contributes so little — at $16$ kilometres it supplies only $50$ visitors, an eighth of the nearer zone's figure, so the gap sits just under the near zone's total.

Evaluate the law at four kilometres:

$$
f(4) = \\frac{3200}{4^{1.5}} = \\frac{3200}{8} = 400
$$

Check the pair against the recorded gap:

$$
f(16) = \\frac{3200}{64} = 50, \\qquad 400 - 50 = 350 \\;\\checkmark
$$

The nearer zone supplies $400$ visitors a week, so the claim is true.`,
      `**C) Quadrupling the driving distance cuts footfall to one eighth.**  (true)

This claim applies a scale factor, so only the exponent matters. With exponent $-1.5$, quadrupling the distance multiplies footfall by $4^{-1.5}=1/8$.

The fractional exponent invites two slips: reading the factor as $1/4$, as if decay were proportional, or as $1/16$, as if the law were inverse-square. The exponent $1.5$ sits between the two, and quadrupling gives $4^{3/2}=8$ — which is exactly the relationship between the two zones in the file, $16$ kilometres being four times $4$.

Take the ratio at quadrupled distance:

$$
\\frac{f(4d)}{f(d)} = \\frac{A(4d)^{-1.5}}{Ad^{-1.5}} = 4^{-1.5} = \\frac{1}{4^{3/2}} = \\frac{1}{8}
$$

Verify on the two recorded zones:

$$
\\frac{f(16)}{f(4)} = \\frac{50}{400} = \\frac{1}{8} \\;\\checkmark
$$

Footfall falls to an eighth, so the claim is true.`,
      `**D) The core-catchment boundary lies just beyond $10$ kilometres.**  (true)

This claim asks where footfall falls to the $100$-visitor threshold, so the law has to be inverted. The boundary sits at about $10.08$ kilometres, just past the round figure.

Inverting a fractional exponent is where this goes wrong: after reaching $d^{1.5}=32$ it is tempting to square the $32$, or to halve it, instead of raising it to the reciprocal power $2/3$. Writing $32$ as a power of two makes the reciprocal exponent easy to apply exactly.

Set the law against the threshold:

$$
\\frac{3200}{d^{1.5}} = 100 \\quad \\Rightarrow \\quad d^{1.5} = 32
$$

Raise both sides to the power $2/3$:

$$
d = 32^{2/3} = (2^{5})^{2/3} = 2^{10/3} \\approx 10.08
$$

Check the round distance against the threshold:

$$
f(10) = \\frac{3200}{10^{1.5}} \\approx \\frac{3200}{31.62} \\approx 101.2 > 100
$$

A zone at $10$ kilometres still clears the threshold, so the boundary lies just beyond it and the claim is true.`,
      `**E) A zone nine kilometres away falls outside the core catchment.**  (false)

This claim tests a specific zone against the $100$-visitor threshold. At nine kilometres the model gives about $118.5$ visitors, so the zone is inside the core catchment.

The reasoning that fails here works from the wrong landmark: the file's distant zone at $16$ kilometres supplies only $50$ visitors, and nine kilometres feels closer to that zone than to the busy four-kilometre one. Distance decay is steepest near the retail park, so most of the drop from $400$ to $50$ has already happened well before nine kilometres. The boundary computed from the threshold sits at about $10.08$ kilometres, and nine is comfortably inside it.

Evaluate the shape factor exactly — nine is a perfect square, so the fractional exponent resolves:

$$
9^{1.5} = (3^{2})^{3/2} = 3^{3} = 27
$$

Evaluate the law:

$$
f(9) = \\frac{3200}{27} \\approx 118.5
$$

At about $118$ visitors a week the zone clears the $100$-visitor threshold, so the claim is false.`,
    ],
    difficulty_level: "1/5",
    sort_order: 46,
    solution_overview: `Footfall follows $f(d)=Ad^{-1.5}$ visitors a week from a zone $d>0$ kilometres away. A zone at $4$ kilometres supplies $350$ more visitors than one at $16$ kilometres, and core catchment means at least $100$ visitors a week.

**Part 1: Building the model.**

Let $d$ = driving distance in kilometres and $f(d)$ = weekly visitors. The exponent is given and negative, so footfall decays with distance; the recorded gap between two zones fixes the coefficient.

**1. Translate: the two zones.** Both distances are perfect squares, so the shape factors are exact:

$$
4^{1.5} = 8, \\qquad 16^{1.5} = 64
$$

**2. Translate: the recorded gap.** Write both zones through the law and subtract:

$$
\\frac{A}{8} - \\frac{A}{64} = 350
$$

**3. Translate: the catchment rule.** The threshold sets a level to invert:

$$
f(d) = 100
$$

**Part 2: The model.**

$$
\\frac{7A}{64} = 350 \\tag{1}
$$

$$
\\frac{A}{d^{1.5}} = 100 \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient and the law:

$$
A = 350 \\cdot \\frac{64}{7} = 3200, \\qquad f(d) = \\frac{3200}{d^{1.5}}
$$

**2.** Check the two zones against the file:

$$
f(4) = 400, \\qquad f(16) = 50, \\qquad 400 - 50 = 350 \\;\\checkmark
$$

**3.** Equation (2) inverts at the threshold, using the reciprocal exponent:

$$
d^{1.5} = 32 \\;\\Rightarrow\\; d = 32^{2/3} = 2^{10/3} \\approx 10.08 \\text{ km}
$$

**4.** Scale factors need only the exponent:

$$
\\frac{f(4d)}{f(d)} = 4^{-1.5} = \\tfrac{1}{8}
$$

**5.** Test the zones in question against the threshold:

$$
f(9) = \\frac{3200}{27} \\approx 118.5 > 100, \\qquad f(10) \\approx 101.2 > 100
$$

**Answer.** $A = 3200$ | $f(d) = 3200d^{-1.5}$ | $f(4) = 400$ | core catchment out to $d \\approx 10.08$ km`,
  },
];
