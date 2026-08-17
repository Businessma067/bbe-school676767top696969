/**
 * Chapter 8 additions 8.70 - 8.78.
 * Power-function tasks in the MATH 13.18 explanation format.
 * Single ordered list: no per-topic grouping field on the tasks.
 */

export const BATCH = [
  {
    id: "math-8-70",
    case_id: "MATH 8.70",
    title: "Geometrically Similar Bells Cast From One Pattern",
    context: String.raw`A foundry casts geometrically similar bronze bells from a single pattern, so mass follows $M(h)=A h^{3}$ kilograms, where $h>0$ is the bell height in metres. The pattern book omits the coefficient; it records only that a finished bell of height $0.5$ m was weighed at $30$ kg. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The mass law is $M(h)=240h^{3}$.`,
      String.raw`Doubling a bell's height multiplies its mass by $8$.`,
      String.raw`A bell of height $1.5$ m has a mass of $810$ kg.`,
      String.raw`A bell three times as tall as another has three times its mass.`,
      String.raw`Halving a bell's height leaves one eighth of the mass.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      String.raw`**A.** → True

Geometric similarity fixes the exponent at three before any measurement is taken, so the single weighed bell is enough to pin the coefficient. The recorded height sits below one metre, where cubing shrinks the input rather than enlarging it.

$$A(0.5)^{3}=30 \quad \Rightarrow \quad 0.125A=30$$

Dividing by that shape factor is the same as multiplying by eight, since $1/0.125=8$:

$$A=\frac{30}{0.125}=240, \qquad M(h)=240h^{3}$$

The calibrated law reproduces the weighing, because $240(0.125)=30$ kg at half a metre. Reading the weighed $30$ kg as the coefficient itself would skip that step and describe a bell eight times too light at one metre. The calibrated law is $M(h)=240h^{3}$, so the statement is True.`,
      String.raw`**B.** → True

A height multiplier acts on mass through the exponent three, so both the coefficient and the starting height cancel and only the power of the multiplier survives.

$$\frac{M(2h)}{M(h)}=\frac{240(2h)^{3}}{240h^{3}}=\frac{8h^{3}}{h^{3}}=8$$

The same factor shows up in levels, taking the weighed bell up to one metre:

$$M(0.5)=30, \qquad M(1)=240(1)^{3}=240=8\times 30$$

Nothing in that ratio depends on where the doubling starts, so a bell going from $1$ m to $2$ m gains the same factor and reaches $M(2)=1920$ kg. Carrying the height multiplier across unchanged would describe a law of exponent one rather than the mass of a solid body. The mass grows by the factor $8$, so the statement is True.`,
      String.raw`**C.** → True

Evaluating the calibrated law at a new height is a direct substitution, with the cube taken on the height before the coefficient is applied.

$$1.5^{3}=3.375$$

$$M(1.5)=240(3.375)=810$$

The same figure appears as a scale factor from the weighed half-metre bell, since $1.5/0.5=3$ and $3^{3}=27$:

$$\frac{M(1.5)}{M(0.5)}=\frac{810}{30}=27$$

Two independent routes landing on the same number is the usual sign that the coefficient and the exponent are being applied in the right order. Tripling the $30$ kg of the half-metre bell would give $90$ kg, the answer a proportional law would produce. The calibrated cube gives $810$ kg, so the statement is True.`,
      String.raw`**D.** → False

Tripling the height feeds a factor of three into an exponent of three, and the two do not cancel each other.

$$\frac{M(3h)}{M(h)}=\frac{A(3h)^{3}}{Ah^{3}}=3^{3}=27$$

The pair of bells already calibrated shows the gap in kilograms:

$$M(0.5)=30, \qquad M(1.5)=810=27\times 30$$

Any volume-like quantity inherits the cube of a length ratio, which is exactly what separates $27$ from $3$, and the error grows with the ratio rather than staying fixed. Reading the geometric scale factor as a mass scale factor is the standard slip for similar solids. The taller bell has twenty-seven times the mass, so the statement is False.`,
      String.raw`**E.** → True

Halving is the reciprocal of doubling, so the mass factor is the reciprocal of the cube of two rather than the reciprocal of two.

$$\frac{M(h/2)}{M(h)}=\left(\frac{1}{2}\right)^{3}=\frac{1}{8}$$

Working in levels from the weighed bell down to a quarter-metre casting gives the same fraction:

$$M(0.25)=240(0.015625)=3.75=\frac{30}{8}$$

The reciprocal reading is forced by the ratio rule, since the multiplier $k=1/2$ enters the same exponent that produced the factor $8$ for $k=2$. Halving the mass alongside the height would answer a question about a law of exponent one. One eighth of the mass survives, so the statement is True.`,
    ],
    difficulty_level: "1/5",
    sort_order: 70,
    solution_overview: String.raw`Similar bells obey $M(h)=Ah^{3}$, and the single weighing $M(0.5)=30$ fixes the coefficient.

**Part 1: Building the model.**

Let $h$ = bell height in metres and $M$ = mass in kilograms. Geometric similarity means every casting is the same shape at a different scale, so volume, and with it mass, carries the cube of a length. The exponent therefore arrives with the model rather than with the data, one observed pair pins the coefficient, and after that every question is either a substitution or a scale factor.

**1. Translate: the weighed bell.**

$$A(0.5)^{3}=30 \quad \Rightarrow \quad 0.125A=30$$

**2. Translate: the scaling rule.** A height multiplier $k>0$ acts through the exponent, and the coefficient cancels:

$$\frac{M(kh)}{M(h)}=\frac{A(kh)^{3}}{Ah^{3}}=k^{3}$$

**Part 2: The model.**

$$M(h)=240h^{3} \tag{1}$$

$$M(kh)=k^{3}M(h) \tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the weighing:

$$A=\frac{30}{0.125}=240$$

**2.** Doubling, halving and tripling are read straight off (2):

$$2^{3}=8, \qquad \left(\frac{1}{2}\right)^{3}=\frac{1}{8}, \qquad 3^{3}=27$$

**3.** Direct substitutions across the pattern range:

$$M(0.25)=3.75, \qquad M(1)=240, \qquad M(1.5)=240(3.375)=810$$

**4.** The same figure seen as a scale factor from the calibration point:

$$\frac{M(1.5)}{M(0.5)}=\frac{810}{30}=27$$

**5.** Every scaling claim reduces to a cube of the height ratio, which is why a bell three times as tall is twenty-seven times as heavy and a bell half as tall keeps only an eighth of the mass. A length ratio passes through unchanged only when the exponent is one, and no solid body obeys that.

**Answer.** $A=240$ | $M(h)=240h^{3}$ | $M(1.5)=810$ kg | doubling $\times 8$, tripling $\times 27$`,
  },
  {
    id: "math-8-71",
    case_id: "MATH 8.71",
    title: "Drag and Sustained Power on a Velodrome",
    context: String.raw`Aerodynamic drag on a track cyclist follows $F(v)=A v^{2}$ newtons, where $v>0$ is speed in metres per second. The team log never states $A$: it records only that raising the speed from $8$ to $12$ m/s increased drag by exactly $40$ N. The power needed to overcome that drag is $P=Fv$ watts, and the rider can hold $500$ W for a full pursuit. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The drag law is $F(v)=0.5v^{2}$.`,
      String.raw`Absorbed power obeys $P(v)=0.5v^{3}$, and the $500$ W ceiling is reached at exactly $10$ m/s.`,
      String.raw`At $12$ m/s the rider absorbs $600$ W.`,
      String.raw`Riding $25\%$ faster raises the absorbed power by $75\%$.`,
      String.raw`Power per metre per second of speed is the same at every speed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

The $40$ N is a gap between two drag readings rather than a reading in its own right, so the coefficient multiplies a difference of two squares and neither speed appears on its own.

$$F(12)-F(8)=A\left(12^{2}-8^{2}\right)=A(144-64)=80A$$

Setting that against the logged increase leaves a one-step solve:

$$80A=40 \quad \Rightarrow \quad A=0.5, \qquad F(v)=0.5v^{2}$$

The calibrated law returns the log entry, because $F(8)=32$ N and $F(12)=72$ N differ by exactly $40$ N. Setting $F(12)=40$ instead would attach the increment to a level the team never reported and give a coefficient near $0.28$. The calibrated law is $F(v)=0.5v^{2}$, so the statement is True.`,
      String.raw`**B.** → True

Power is drag multiplied by speed, so the extra factor of $v$ lifts the exponent from two to three, and the rider's ceiling is then an inversion of a cube.

$$P(v)=F(v)\,v=0.5v^{2}\cdot v=0.5v^{3}$$

Setting the cubic against the sustainable output leaves a clean cube root:

$$0.5v^{3}=500 \quad \Rightarrow \quad v^{3}=1000 \quad \Rightarrow \quad v=10$$

The ceiling checks in levels, since $F(10)=50$ N and $50\times 10=500$ W of mechanical output. Solving $0.5v^{2}=500$ would cap the drag force instead of the power and push the ceiling out to about $31.6$ m/s. Both the cubic law and the $10$ m/s ceiling match, so the statement is True.`,
      String.raw`**C.** → False

Above the ceiling speed the power law still responds through the cube of the speed ratio, not through the ratio itself.

$$P(12)=0.5(12)^{3}=0.5(1728)=864$$

The same level appears as a scale factor from the ceiling, since $12/10=1.2$:

$$\frac{P(12)}{P(10)}=\left(\frac{12}{10}\right)^{3}=1.728, \qquad 1.728\times 500=864$$

A rider limited to $500$ W is therefore $364$ W short of holding $12$ m/s, a gap the linear reading hides almost entirely. Scaling the ceiling by the speed ratio $1.2$ produces exactly the claimed $600$ W, which is the answer for a law of exponent one. The rider absorbs $864$ W, so the statement is False.`,
      String.raw`**D.** → False

A percentage change in speed enters power through the cube of the multiplier, so the percentage rise is not the exponent multiplied by the percentage move.

$$\frac{P(1.25v)}{P(v)}=1.25^{3}=1.953125$$

Turning that multiplier back into a percentage change subtracts one before scaling:

$$(1.953125-1)\times 100\%=95.3125\%$$

Levels tell the same story, because riding $25\%$ faster than $8$ m/s means reaching $10$ m/s, and the absorbed power climbs from $256$ W to $500$ W. Multiplying $25\%$ by the exponent $3$ gives exactly the claimed $75\%$, a shortcut accurate only for very small moves. Power rises by about $95.3\%$, so the statement is False.`,
      String.raw`**E.** → False

Power per unit speed divides the cubic law by $v$, which returns the drag force and leaves an exponent of two rather than zero.

$$\frac{P(v)}{v}=\frac{0.5v^{3}}{v}=0.5v^{2}=F(v)$$

Evaluating that quotient at the two logged speeds shows it moving:

$$\frac{P(8)}{8}=\frac{256}{8}=32, \qquad \frac{P(12)}{12}=\frac{864}{12}=72$$

A per-unit figure holds still only when the underlying exponent is one, and here it is three. The explicit factor $v$ in $P=Fv$ is easy to see, but the $v^{2}$ hidden inside the drag force is what keeps the ratio climbing. The two values differ, so the statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 71,
    solution_overview: String.raw`Drag is $F(v)=Av^{2}$, calibrated by the $40$ N gap between $8$ and $12$ m/s. Absorbed power is $P=Fv$, and the rider's ceiling is $500$ W.

**Part 1: Building the model.**

Let $v$ = speed in metres per second, $F$ = drag in newtons, $P$ = absorbed power in watts. The log supplies a difference rather than a level, so the coefficient comes from subtracting two squares. Power is then the same law with its exponent raised by one, and the ceiling question inverts that cubic.

**1. Translate: the logged increase.**

$$A\left(12^{2}-8^{2}\right)=80A=40$$

**2. Translate: power.** Multiplying drag by speed adds $1$ to the exponent:

$$P(v)=v\cdot Av^{2}=Av^{3}$$

**3. Translate: a speed multiplier.** Drag and power respond through different exponents:

$$\frac{F(kv)}{F(v)}=k^{2}, \qquad \frac{P(kv)}{P(v)}=k^{3}$$

**Part 2: The model.**

$$F(v)=0.5v^{2} \tag{1}$$

$$P(v)=0.5v^{3} \tag{2}$$

**Part 3: Solve.**

**1.** The difference of squares turns the log entry into a one-step solve:

$$80A=40 \quad \Rightarrow \quad A=0.5$$

**2.** Invert (2) at the rider's ceiling:

$$0.5v^{3}=500 \quad \Rightarrow \quad v^{3}=1000 \quad \Rightarrow \quad v=10$$

**3.** Exact scale factors, which the linear shortcut only approximates:

$$1.2^{3}=1.728, \qquad 1.25^{3}=1.953125\;(+95.3\%)$$

**4.** Levels on the two curves, and the per-unit-speed figure:

$$P(8)=256, \qquad P(10)=500, \qquad P(12)=864, \qquad \frac{P(v)}{v}=0.5v^{2}$$

**5.** Carrying a speed multiplier straight across understates the cost of going faster: a fifth more speed asks for nearly three quarters more power, and the last $2$ m/s above the ceiling would add $364$ W to a $500$ W budget.

**Answer.** $A=0.5$ | $F(v)=0.5v^{2}$, $P(v)=0.5v^{3}$ | ceiling at $v=10$ m/s | $P(12)=864$ W`,
  },
  {
    id: "math-8-72",
    case_id: "MATH 8.72",
    title: "Signal Attenuation From a Buried Cable Locator",
    context: String.raw`The signal a locator receives from a buried conductor follows $S(x)=A x^{-3}$ millivolts, where $x>0$ is the burial depth in metres. A calibration run over a conductor buried at $2$ metres read $50$ millivolts. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The attenuation law is $S(x)=400x^{-3}$.`,
      String.raw`A conductor buried at $4$ metres returns $25$ millivolts.`,
      String.raw`Doubling the burial depth cuts the received signal to one third.`,
      String.raw`A reading of $3.2$ millivolts corresponds to a burial depth of $10$ metres.`,
      String.raw`The received signal is inversely proportional to burial depth.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

The model supplies the exponent, so one calibration reading is enough to pin the coefficient. Because the exponent is negative, recovering the coefficient multiplies by the power of the depth instead of dividing by it.

$$A(2)^{-3}=50 \quad \Rightarrow \quad \frac{A}{2^{3}}=\frac{A}{8}=50$$

Clearing that fraction gives the coefficient in one move:

$$A=50\times 8=400, \qquad S(x)=400x^{-3}$$

The calibrated law returns the calibration run, since $400/8=50$ millivolts at two metres. Dividing by $2^{3}$ instead would give $6.25$ and understate every reading on the site by a factor of $64$. The attenuation law is $S(x)=400x^{-3}$, so the statement is True.`,
      String.raw`**B.** → False

Moving from the calibration depth to twice that depth divides the signal by the cube of two, not by two.

$$S(4)=\frac{400}{4^{3}}=\frac{400}{64}=6.25$$

The same level appears as a scale factor from the calibration run:

$$\frac{S(4)}{S(2)}=\left(\frac{4}{2}\right)^{-3}=\frac{1}{8}, \qquad \frac{50}{8}=6.25$$

Two extra metres of cover therefore cost seven eighths of the signal, which is why deeply buried conductors are so hard to trace. Halving the $50$ millivolt reading produces exactly the claimed $25$, the answer for an inverse-proportional law. The locator reads $6.25$ millivolts, so the statement is False.`,
      String.raw`**C.** → False

A depth multiplier acts through the exponent $-3$, so the surviving fraction is the reciprocal of a cube and the coefficient cancels.

$$\frac{S(2x)}{S(x)}=\frac{A(2x)^{-3}}{Ax^{-3}}=2^{-3}=\frac{1}{8}$$

The calibrated pair of depths shows the same fraction in millivolts:

$$S(2)=50, \qquad S(4)=6.25=\frac{50}{8}$$

Reading the $3$ in the exponent as a divisor is what turns one eighth into one third, and the claim would fit an inverse-cube-root law rather than this attenuation model. Nothing about the starting depth matters, since the ratio depends only on the multiplier. One eighth of the signal survives, so the statement is False.`,
      String.raw`**D.** → False

Recovering a depth from a reading inverts the law, so a cube root acts on the ratio of the coefficient to the reading.

$$\frac{400}{x^{3}}=3.2 \quad \Rightarrow \quad x^{3}=\frac{400}{3.2}=125$$

Taking the cube root completes the inversion:

$$x=\sqrt[3]{125}=5$$

At the claimed depth the locator would read $400/10^{3}=0.4$ millivolts, eight times weaker than the figure quoted, because doubling the depth from five metres again removes seven eighths of the signal. Depth ratios and signal ratios are never equal under an exponent of magnitude three. The reading corresponds to $5$ metres, so the statement is False.`,
      String.raw`**E.** → False

Inverse proportionality is the single case of exponent $-1$, in which depth multiplied by signal stays constant; this model carries exponent $-3$.

$$x\,S(x)=x\cdot 400x^{-3}=400x^{-2}$$

Testing that product at three depths shows it falling rather than holding:

$$2(50)=100, \qquad 4(6.25)=25, \qquad 5(3.2)=16$$

What does stay constant is $x^{3}S(x)=400$, which is the invariant the exponent actually dictates. The signal falls as depth grows, and that shared direction is what makes the wrong exponent easy to accept. Because the product $x\,S(x)$ keeps falling, the received signal is not inversely proportional to burial depth, so the statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 72,
    solution_overview: String.raw`Attenuation is $S(x)=Ax^{-3}$ in millivolts, pinned by the calibration reading $S(2)=50$.

**Part 1: Building the model.**

Let $x$ = burial depth in metres and $S$ = received signal in millivolts. The exponent comes from the model, so one observed pair fixes the coefficient; because the exponent is negative, that recovery multiplies rather than divides. Every remaining question is then either a substitution, a scale factor read off the exponent, or an inversion that ends in a cube root.

**1. Translate: the calibration run.**

$$A(2)^{-3}=50 \quad \Rightarrow \quad \frac{A}{8}=50$$

**2. Translate: the depth scaling.** A depth multiplier $k>0$ acts through the exponent:

$$\frac{S(kx)}{S(x)}=\frac{A(kx)^{-3}}{Ax^{-3}}=k^{-3}$$

**Part 2: The model.**

$$S(x)=400x^{-3} \tag{1}$$

$$S(kx)=k^{-3}S(x) \tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the calibration reading:

$$A=50\times 2^{3}=400$$

**2.** Levels down the depth range:

$$S(2)=50, \qquad S(4)=6.25, \qquad S(5)=3.2, \qquad S(10)=0.4$$

**3.** Inverting (1) recovers a depth from a reading:

$$x^{3}=\frac{400}{S} \quad \Rightarrow \quad S=3.2 \;\Rightarrow\; x=\sqrt[3]{125}=5$$

**4.** The doubling factor, and the test that rules out inverse proportionality:

$$2^{-3}=\frac{1}{8}, \qquad x\,S(x)=400x^{-2}$$

**5.** The quantity that stays fixed is $x^{3}S(x)=400$, not $x\,S(x)$, and that single fact settles the last three claims: doubling the depth keeps an eighth rather than a third, a $3.2$ millivolt trace sits at five metres rather than ten, and the product of depth and signal keeps falling.

**Answer.** $A=400$ | $S(x)=400x^{-3}$ | $S(4)=6.25$ mV | $3.2$ mV at $x=5$ m`,
  },
  {
    id: "math-8-73",
    case_id: "MATH 8.73",
    title: "Oxygen Demand and Gill Area in a Hatchery",
    context: String.raw`A hatchery models a fish's oxygen demand as $D(m)=A m^{3/4}$ millilitres per hour and its gill surface area as $G(m)=B m^{2/3}$ square centimetres, where $m>0$ is body mass in grams. Neither coefficient is published. The records show that an $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish, and that a $64$ g fish carries $48$ square centimetres of gill. A tank's total demand is the sum of its fish's individual demands. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The two laws are $D(m)=5m^{3/4}$ and $G(m)=3m^{2/3}$.`,
      String.raw`Doubling body mass multiplies oxygen demand by $2^{3/4}$ and gill area by $2^{2/3}$, so demand per square centimetre of gill rises by the factor $2^{1/12}$, about $1.059$.`,
      String.raw`A $256$ g fish demands $320$ millilitres per hour.`,
      String.raw`Oxygen demand per square centimetre of gill is $\tfrac{5}{3}m^{1/12}$, which increases with body mass.`,
      String.raw`Sixteen $16$ g fish demand exactly twice as much oxygen per hour as one $256$ g fish of the same total mass.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      String.raw`**A.** → True

Both masses in the demand record are exact fourth powers and the gill record sits at an exact cube, so the two calibrations resolve without any rounding. The first record is a gap between two demands, the second a single level.

$$A\left(81^{3/4}-16^{3/4}\right)=A(27-8)=19A=95 \quad \Rightarrow \quad A=5$$

$$B\left(64^{2/3}\right)=16B=48 \quad \Rightarrow \quad B=3$$

Both calibrations check against the records, since $D(81)-D(16)=135-40=95$ and $G(64)=48$. Attaching the $95$ millilitres to the heavier fish as a level would calibrate on a figure the hatchery never recorded. The two laws are $D(m)=5m^{3/4}$ and $G(m)=3m^{2/3}$, so the statement is True.`,
      String.raw`**B.** → True

Each law responds to a mass multiplier through its own exponent, and the ratio of the two responses subtracts one exponent from the other.

$$\frac{D(2m)}{D(m)}=2^{3/4}\approx 1.6818, \qquad \frac{G(2m)}{G(m)}=2^{2/3}\approx 1.5874$$

Dividing those multipliers leaves a single power of two:

$$\frac{2^{3/4}}{2^{2/3}}=2^{3/4-2/3}=2^{1/12}\approx 1.0595$$

The gap between $3/4$ and $2/3$ is only $1/12$, which looks negligible until it sits in an exponent, where it still produces a genuine rise of about six per cent per doubling. All three multipliers in the claim are correct, so the statement is True.`,
      String.raw`**C.** → True

A mass of $256$ grams is an exact fourth power, so the three-quarter power reduces to the cube of a fourth root and needs no decimal work.

$$256^{3/4}=\left(256^{1/4}\right)^{3}=4^{3}=64$$

$$D(256)=5(64)=320$$

The same figure appears as a scale factor from the $16$ g fish, since $256/16=16$ and $16^{3/4}=(2^{4})^{3/4}=2^{3}=8$:

$$\frac{D(256)}{D(16)}=\frac{320}{40}=8$$

A sixteenfold mass increase therefore costs only an eightfold demand increase, which is the whole point of an exponent below one. Reading $3/4$ as a multiplier of the mass would give $5(192)=960$ instead of a power. The demand is $320$ millilitres per hour, so the statement is True.`,
      String.raw`**D.** → True

Dividing one power law by another subtracts their exponents, so the per-area figure keeps a small positive exponent rather than collapsing to a constant.

$$\frac{D(m)}{G(m)}=\frac{5m^{3/4}}{3m^{2/3}}=\frac{5}{3}m^{3/4-2/3}=\frac{5}{3}m^{1/12}$$

Two levels sixteen mass units apart separate clearly:

$$\frac{D(16)}{G(16)}\approx\frac{40}{19.05}\approx 2.10, \qquad \frac{D(256)}{G(256)}\approx\frac{320}{120.95}\approx 2.65$$

Because $3/4$ exceeds $2/3$ only slightly, the per-area figure looks flat over a narrow mass range, but the exponent $1/12$ is positive and the ratio climbs without bound. Demand per square centimetre does rise with mass, so the statement is True.`,
      String.raw`**E.** → True

Sixteen fish are sixteen separate applications of the demand law, so the total has to be assembled fish by fish before it is set against one larger animal.

$$16\,D(16)=16\left(5\cdot 16^{3/4}\right)=16(5\cdot 8)=16(40)=640$$

The single fish carries the same total mass but a far smaller demand:

$$D(256)=5\left(256^{3/4}\right)=5(64)=320, \qquad \frac{640}{320}=2$$

That factor of two is the signature of an exponent below one: splitting a fixed mass into many small bodies always raises the pooled demand. Pooling the masses first and applying the law once would treat a three-quarter power as if it were additive. The small fish demand exactly twice the single fish's oxygen, so the statement is True.`,
    ],
    difficulty_level: "5/5",
    sort_order: 73,
    solution_overview: String.raw`Oxygen demand is $D(m)=Am^{3/4}$ and gill area is $G(m)=Bm^{2/3}$. The demand coefficient comes from the $95$ mL/h gap between an $81$ g and a $16$ g fish; the gill coefficient comes from the $64$ g record.

**Part 1: Building the model.**

Let $m$ = body mass in grams, $D$ = oxygen demand in millilitres per hour, $G$ = gill area in square centimetres. Both exponents are supplied, so each law needs exactly one record: a difference for the first and a level for the second. Comparing the two laws is then a subtraction of exponents, and tank totals are sums of individual demands, never one application to a pooled mass.

**1. Translate: the demand gap.**

$$A\left(81^{3/4}-16^{3/4}\right)=95$$

**2. Translate: the gill record.**

$$B\left(64^{2/3}\right)=48$$

**3. Translate: demand per unit gill area.** Dividing subtracts exponents:

$$\frac{D(m)}{G(m)}=\frac{A}{B}\,m^{3/4-2/3}=\frac{A}{B}\,m^{1/12}$$

**Part 2: The model.**

$$D(m)=5m^{3/4} \tag{1}$$

$$G(m)=3m^{2/3} \tag{2}$$

$$\frac{D(m)}{G(m)}=\frac{5}{3}m^{1/12} \tag{3}$$

**Part 3: Solve.**

**1.** Exact shape factors make both calibrations one-step solves:

$$81^{3/4}=27, \quad 16^{3/4}=8 \;\Rightarrow\; 19A=95 \;\Rightarrow\; A=5$$

$$64^{2/3}=16 \;\Rightarrow\; 16B=48 \;\Rightarrow\; B=3$$

**2.** Scale factors for a doubling of mass, and their ratio:

$$2^{3/4}\approx 1.6818, \quad 2^{2/3}\approx 1.5874, \quad \frac{2^{3/4}}{2^{2/3}}=2^{1/12}\approx 1.0595$$

**3.** Levels along the demand curve:

$$D(16)=40, \qquad D(81)=135, \qquad D(256)=320$$

**4.** A tank total is formed one fish at a time:

$$16\,D(16)=640=2\,D(256)$$

**Answer.** $A=5$, $B=3$ | $D(m)=5m^{3/4}$, $G(m)=3m^{2/3}$ | demand per unit gill $=\frac{5}{3}m^{1/12}$, rising | $D(256)=320$ mL/h`,
  },
  {
    id: "math-8-74",
    case_id: "MATH 8.74",
    title: "Micro-Irrigation Flow Under a Fourth-Power Law",
    context: String.raw`Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{4}$ litres per hour, where $r>0$ is the internal tube radius in millimetres. A bench test on a tube of radius $2$ mm delivered $48$ litres per hour. The designers also track the mean velocity index $Q/(\pi r^{2})$, which spreads the flow across the tube's cross-section. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The flow law is $Q(r)=3r^{4}$.`,
      String.raw`A tube of radius $3$ mm delivers $243$ litres per hour.`,
      String.raw`Widening the tube radius by $50\%$ raises the flow by $125\%$.`,
      String.raw`Halving the tube radius leaves one sixteenth of the flow.`,
      String.raw`Because flow and cross-section both grow with the radius, the mean velocity index is the same in every tube.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      String.raw`**A.** → True

The transport model supplies the exponent, and the bench figure is a level rather than an increment, so no subtraction is involved. Only the fourth power of the tested radius stands between the reading and the coefficient.

$$A(2)^{4}=48 \quad \Rightarrow \quad 16A=48$$

Dividing by that shape factor finishes the calibration:

$$A=\frac{48}{16}=3, \qquad Q(r)=3r^{4}$$

The calibrated law returns the bench test, because $3(16)=48$ litres per hour at two millimetres. Dividing the measured flow by the radius itself rather than by $r^{4}$ would give a coefficient of $24$ and a curve eight times too steep. The calibrated law is $Q(r)=3r^{4}$, so the statement is True.`,
      String.raw`**B.** → True

Evaluating the calibrated law at a new radius takes the fourth power of the radius first and applies the coefficient afterwards.

$$3^{4}=81, \qquad Q(3)=3(81)=243$$

The same figure appears as a scale factor from the bench tube, since $3/2=1.5$ and $1.5^{4}=5.0625$:

$$\frac{Q(3)}{Q(2)}=\frac{243}{48}=5.0625$$

Half a millimetre of extra bore therefore multiplies delivery by more than five, which is why emitter tolerances matter so much in irrigation design. Scaling the bench figure by the radius ratio $1.5$ would give $72$ litres per hour, the answer for a proportional law. The tube delivers $243$ litres per hour, so the statement is True.`,
      String.raw`**C.** → False

A percentage change in radius enters flow through the fourth power of the multiplier, so the rise is not the exponent multiplied by the percentage move.

$$\frac{Q(1.5r)}{Q(r)}=1.5^{4}=5.0625$$

Converting that multiplier into a percentage change subtracts one first:

$$(5.0625-1)\times 100\%=406.25\%$$

The bench pair confirms the size of the jump, since flow moves from $48$ to $243$ litres per hour when the radius goes from $2$ to $3$ mm. Reading a $50\%$ widening as a $125\%$ gain is precisely the answer for exponent two, where $1.5^{2}=2.25$. Flow rises by $406.25\%$, so the statement is False.`,
      String.raw`**D.** → True

Halving the radius is the reciprocal of doubling it, and an exponent of four turns that into a reciprocal fourth power.

$$\frac{Q(r/2)}{Q(r)}=\left(\frac{1}{2}\right)^{4}=\frac{1}{16}$$

Working in levels from the bench tube down to a one-millimetre bore gives the same fraction:

$$Q(2)=48, \qquad Q(1)=3(1)^{4}=3=\frac{48}{16}$$

Nothing depends on the starting radius, so the same fraction applies between $3$ mm and $1.5$ mm, where $243$ litres per hour falls to $15.1875$. Halving the flow alongside the radius would answer a question about a law of exponent one. One sixteenth of the flow survives, so the statement is True.`,
      String.raw`**E.** → False

The velocity index divides one power function by another, so its exponent is the difference $4-2$ rather than zero.

$$\frac{Q(r)}{\pi r^{2}}=\frac{3r^{4}}{\pi r^{2}}=\frac{3r^{2}}{\pi}$$

Evaluating at the two tube sizes shows the index climbing:

$$\frac{Q(2)}{\pi(2)^{2}}=\frac{12}{\pi}\approx 3.82, \qquad \frac{Q(3)}{\pi(3)^{2}}=\frac{27}{\pi}\approx 8.59$$

Both quantities do grow with the radius, which is what makes a cancellation look plausible, but flow gains two exponents on the cross-section. The index more than doubles between the two tubes, so the statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 74,
    solution_overview: String.raw`Flow obeys $Q(r)=Ar^{4}$, pinned by the bench test $Q(2)=48$. The mean velocity index is $Q/(\pi r^{2})$.

**Part 1: Building the model.**

Let $r$ = internal radius in millimetres and $Q$ = flow in litres per hour. The exponent is supplied by the transport model, so one bench test fixes the coefficient. Dividing flow by the cross-section then produces a second power function whose exponent is the difference of the two, and every scaling claim reduces to a fourth power of the radius ratio.

**1. Translate: the bench test.**

$$A(2)^{4}=48 \quad \Rightarrow \quad 16A=48$$

**2. Translate: a radius multiplier.** The coefficient cancels in the ratio:

$$\frac{Q(kr)}{Q(r)}=\frac{A(kr)^{4}}{Ar^{4}}=k^{4}$$

**3. Translate: the velocity index.** Dividing subtracts exponents:

$$\frac{Q(r)}{\pi r^{2}}=\frac{Ar^{4}}{\pi r^{2}}=\frac{A}{\pi}r^{2}$$

**Part 2: The model.**

$$Q(r)=3r^{4} \tag{1}$$

$$\frac{Q(r)}{\pi r^{2}}=\frac{3r^{2}}{\pi} \tag{2}$$

**Part 3: Solve.**

**1.** The coefficient follows from the bench test:

$$A=\frac{48}{16}=3$$

**2.** Levels across the tube sizes:

$$Q(1)=3, \qquad Q(2)=48, \qquad Q(3)=243$$

**3.** Exact scale factors, all powers of the radius ratio:

$$1.5^{4}=5.0625\;(+406.25\%), \qquad \left(\frac{1}{2}\right)^{4}=\frac{1}{16}$$

**4.** The velocity index at two radii, showing exponent $2$ rather than $0$:

$$\frac{12}{\pi}\approx 3.82, \qquad \frac{27}{\pi}\approx 8.59$$

**5.** A fourth power is unforgiving in both directions: half a millimetre of extra bore multiplies delivery by more than five, and a bore halved keeps only a sixteenth of it. The velocity index still rises because flow outpaces cross-section by two full exponents.

**Answer.** $A=3$ | $Q(r)=3r^{4}$ | $Q(3)=243$ L/h | velocity index $=\frac{3}{\pi}r^{2}$`,
  },
  {
    id: "math-8-75",
    case_id: "MATH 8.75",
    title: "Barrier Distance for a Radiography Source",
    context: String.raw`Dose rate near an industrial radiography source follows the inverse-square law $H(d)=A d^{-2}$ microsieverts per hour, where $d>0$ is the distance from the source in metres. A survey meter three metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The dose-rate law is $H(d)=720d^{-2}$.`,
      String.raw`At six metres the dose rate is $20$ microsieverts per hour.`,
      String.raw`Doubling the distance from the source quarters the dose rate.`,
      String.raw`The barrier belongs twelve metres from the source.`,
      String.raw`Moving from three metres to nine metres cuts the dose rate to one third.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      String.raw`**A.** → True

The inverse-square form fixes the exponent at $-2$, so the survey reading is the only input the coefficient needs. A negative exponent means that recovery multiplies by the square of the distance rather than dividing by it.

$$A(3)^{-2}=80 \quad \Rightarrow \quad \frac{A}{3^{2}}=\frac{A}{9}=80$$

Clearing the fraction gives the coefficient directly:

$$A=80\times 9=720, \qquad H(d)=720d^{-2}$$

The calibrated law returns the survey, since $720/9=80$ microsieverts per hour at three metres. Dividing the reading by $9$ instead would invert the calibration and understate every dose on the site by a factor of $81$. The law is $H(d)=720d^{-2}$, so the statement is True.`,
      String.raw`**B.** → True

Six metres is twice the survey distance, so the dose rate is divided by the square of two, and a direct substitution confirms the same figure.

$$H(6)=\frac{720}{6^{2}}=\frac{720}{36}=20$$

The scale-factor route reaches the same level without touching the coefficient:

$$\frac{H(6)}{H(3)}=\left(\frac{6}{3}\right)^{-2}=\frac{1}{4}, \qquad \frac{80}{4}=20$$

Three extra metres of standoff therefore remove three quarters of the exposure rate, far more than a proportional reading would suggest. Halving the $80$ would answer a question about an inverse-proportional law. The meter reads $20$ microsieverts per hour, so the statement is True.`,
      String.raw`**C.** → True

A distance multiplier acts through the exponent $-2$, so the coefficient and the starting distance cancel and only the square of the multiplier remains.

$$\frac{H(2d)}{H(d)}=\frac{A(2d)^{-2}}{Ad^{-2}}=2^{-2}=\frac{1}{4}$$

The surveyed pair of distances shows the quarter in microsieverts per hour:

$$H(3)=80, \qquad H(6)=20=\frac{80}{4}$$

Because the ratio ignores the starting point, the same quarter applies between six and twelve metres, where $20$ falls to $5$. Subtracting a fixed amount for every metre gained would describe a linear fall rather than an inverse-square one. The dose rate falls to a quarter, so the statement is True.`,
      String.raw`**D.** → True

Locating the barrier inverts the law, so a square root acts on the ratio of the coefficient to the permitted dose rate.

$$\frac{720}{d^{2}}=5 \quad \Rightarrow \quad d^{2}=\frac{720}{5}=144$$

Taking the positive root finishes the inversion, since distance cannot be negative:

$$d=\sqrt{144}=12$$

The answer checks against the scale factors already found, because $12$ metres is four times the survey distance and $4^{-2}=1/16$ turns $80$ into $5$. Multiplying the survey distance by the dose ratio $80/5=16$ would push the barrier out to $48$ metres. The barrier belongs at twelve metres, so the statement is True.`,
      String.raw`**E.** → False

Tripling the distance feeds a factor of three into an exponent of $-2$, so the surviving fraction is the reciprocal of a square.

$$\frac{H(9)}{H(3)}=3^{-2}=\frac{1}{9}$$

A direct substitution gives the level behind that fraction:

$$H(9)=\frac{720}{81}\approx 8.89$$

One third of the survey reading would be about $26.7$ microsieverts per hour, three times what the meter would actually show at nine metres. Reading the tripling straight through as a division by three is right for an inverse-proportional law rather than an inverse-square one. One ninth of the dose rate survives, so the statement is False.`,
    ],
    difficulty_level: "1/5",
    sort_order: 75,
    solution_overview: String.raw`Dose rate obeys the inverse-square law $H(d)=Ad^{-2}$, pinned by the survey reading $H(3)=80$. The barrier sits where $H=5$.

**Part 1: Building the model.**

Let $d$ = distance from the source in metres and $H$ = dose rate in microsieverts per hour. The physics fixes the exponent at $-2$, so one survey reading pins the coefficient, and because that exponent is negative the recovery multiplies by a square rather than dividing by one. The barrier question then inverts the same law, which turns it into a square root.

**1. Translate: the survey reading.**

$$A(3)^{-2}=80 \quad \Rightarrow \quad \frac{A}{9}=80$$

**2. Translate: a distance multiplier.** The coefficient cancels in the ratio:

$$\frac{H(kd)}{H(d)}=\frac{A(kd)^{-2}}{Ad^{-2}}=k^{-2}$$

**3. Translate: the barrier rule.**

$$\frac{A}{d^{2}}=5$$

**Part 2: The model.**

$$H(d)=720d^{-2} \tag{1}$$

$$H(kd)=k^{-2}H(d) \tag{2}$$

**Part 3: Solve.**

**1.** A negative exponent recovers the coefficient by multiplying:

$$A=80\times 3^{2}=720$$

**2.** Levels along the walk-back from the source:

$$H(3)=80, \qquad H(6)=20, \qquad H(9)=\frac{720}{81}\approx 8.89, \qquad H(12)=5$$

**3.** Scale factors read straight off (2):

$$2^{-2}=\frac{1}{4}, \qquad 3^{-2}=\frac{1}{9}, \qquad 4^{-2}=\frac{1}{16}$$

**4.** Invert (1) at the permitted dose rate:

$$d^{2}=\frac{720}{5}=144 \quad \Rightarrow \quad d=12$$

**5.** Distance buys safety quickly but not linearly: doubling the standoff removes three quarters of the dose rate, tripling it removes eight ninths, and the barrier sits at four times the survey distance because $80/5=16$ and $\sqrt{16}=4$.

**Answer.** $A=720$ | $H(d)=720d^{-2}$ | $H(6)=20$ | barrier at $d=12$ m`,
  },
  {
    id: "math-8-76",
    case_id: "MATH 8.76",
    title: "A Dye Plume Spreading Across a Shallow Lake",
    context: String.raw`A tracer dye released into a shallow lake spreads as a disc whose radius follows $r(t)=A t^{2/3}$ metres, with $t>0$ measured in hours since release. The survey note omits the coefficient: it records only that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\pi r^{2}$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The radius law is $r(t)=15t^{2/3}$ and the stained area is $S(t)=225\pi t^{4/3}$.`,
      String.raw`Doubling the elapsed time multiplies the stained area by $2^{4/3}$, about $2.52$.`,
      String.raw`The stained area at hour $8$ is eight times its value at hour $1$.`,
      String.raw`The radius reaches $240$ metres $32$ hours after release.`,
      String.raw`The stained area grows in proportion to the elapsed time.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

The $45$ metres is growth between two survey times, so the coefficient multiplies a difference of two shape factors rather than a single one. Both times are convenient, since $8^{2/3}=4$ and $1^{2/3}=1$.

$$A\left(8^{2/3}-1^{2/3}\right)=A(4-1)=3A=45 \quad \Rightarrow \quad A=15$$

Squaring the radius law afterwards doubles its exponent and squares its coefficient:

$$S(t)=\pi\left(15t^{2/3}\right)^{2}=\pi(225)t^{4/3}=225\pi\,t^{4/3}$$

The calibration checks against the note, because $r(1)=15$ and $r(8)=60$ differ by exactly $45$ metres. Squaring only the time factor and leaving the coefficient outside the bracket would drop the $225$ entirely. Both laws in the claim are correct, so the statement is True.`,
      String.raw`**B.** → True

Area carries the exponent $4/3$, so doubling the elapsed time multiplies it by two raised to that exponent, with the coefficient cancelling in the ratio.

$$\frac{S(2t)}{S(t)}=\frac{225\pi(2t)^{4/3}}{225\pi t^{4/3}}=2^{4/3}$$

Splitting that power into an integer and a fractional part makes it easy to evaluate:

$$2^{4/3}=2\cdot 2^{1/3}\approx 2(1.2599)=2.5198$$

The factor holds at every point on the curve, so the stain grows by the same $2.52$ from hour $1$ to hour $2$ as from hour $12$ to hour $24$. Applying the radius factor $2^{2/3}\approx 1.587$ to the area would forget that area squares the radius. The stained area grows by about $2.52$, so the statement is True.`,
      String.raw`**C.** → False

Between hour $1$ and hour $8$ the time multiplier is eight, and area responds through the exponent $4/3$ rather than through the multiplier itself.

$$\frac{S(8)}{S(1)}=8^{4/3}=\left(8^{1/3}\right)^{4}=2^{4}=16$$

Levels at the two surveyed hours show the same factor:

$$S(1)=225\pi, \qquad S(8)=225\pi(16)=3600\pi$$

The radius only quadrupled over that interval, from $15$ to $60$ metres, and squaring four gives the sixteen. Carrying the time multiplier straight across gives exactly the claimed factor of eight, the answer for a law of exponent one. The area grows sixteenfold, so the statement is False.`,
      String.raw`**D.** → False

Recovering a time from a radius inverts the two-thirds power, so the exponent applied to the radius equation is its reciprocal $3/2$.

$$15t^{2/3}=240 \quad \Rightarrow \quad t^{2/3}=16 \quad \Rightarrow \quad t=16^{3/2}=64$$

Testing the claimed hour directly shows how far short it falls:

$$r(32)=15\left(32^{2/3}\right)\approx 15(10.079)\approx 151.2$$

The last stretch of spreading is slow, so waiting from hour $32$ to hour $64$ adds only about $89$ metres of radius. Inverting a two-thirds power by multiplying instead of raising to $3/2$ is what shortens the wait. The radius reaches $240$ metres at hour $64$, so the statement is False.`,
      String.raw`**E.** → False

Proportional growth requires exponent one, while squaring a two-thirds power leaves an exponent of $4/3$.

$$S(t)=225\pi\,t^{4/3}, \qquad \frac{S(2t)}{S(t)}=2^{4/3}\approx 2.52\ne 2$$

Dividing the area by the elapsed time isolates the mismatch:

$$\frac{S(t)}{t}=225\pi\,t^{1/3}$$

That quotient would be constant under proportionality, but the leftover exponent $1/3$ keeps it rising, from $225\pi$ at hour $1$ to $450\pi$ at hour $8$. The stain does keep spreading without bound, which is what makes a linear reading tempting. Because the ratio $S(t)/t$ still rises with time, the stained area is not proportional to the elapsed time, so the statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 76,
    solution_overview: String.raw`The plume radius is $r(t)=At^{2/3}$, calibrated by the $45$-metre growth between hour $1$ and hour $8$. The stained area is $S=\pi r^{2}$.

**Part 1: Building the model.**

Let $t$ = hours since release, $r$ = plume radius in metres, $S$ = stained area in square metres. The survey gives a difference rather than a level, so the coefficient comes from subtracting two shape factors. Composing with the disc formula then doubles the exponent and squares the coefficient, so the area law is steeper than the radius law.

**1. Translate: the recorded growth.**

$$A\left(8^{2/3}-1^{2/3}\right)=45$$

**2. Translate: the composition.** Squaring the radius law doubles its exponent:

$$S(t)=\pi\left(At^{2/3}\right)^{2}=\pi A^{2}t^{4/3}$$

**3. Translate: a time multiplier.** The two respond through different exponents:

$$\frac{r(kt)}{r(t)}=k^{2/3}, \qquad \frac{S(kt)}{S(t)}=k^{4/3}$$

**Part 2: The model.**

$$r(t)=15t^{2/3} \tag{1}$$

$$S(t)=225\pi\,t^{4/3} \tag{2}$$

**Part 3: Solve.**

**1.** Exact shape factors make the calibration a one-step solve:

$$8^{2/3}=4 \;\Rightarrow\; 3A=45 \;\Rightarrow\; A=15$$

**2.** Scale factors for the area, read off the exponent in (2):

$$2^{4/3}\approx 2.5198, \qquad 8^{4/3}=16$$

**3.** Levels at the two surveyed hours:

$$r(1)=15, \quad r(8)=60, \qquad S(1)=225\pi, \quad S(8)=3600\pi$$

**4.** Invert (1) to find when the radius reaches $240$ metres:

$$t^{2/3}=16 \quad \Rightarrow \quad t=16^{3/2}=64$$

**5.** The two exponents straddle one: area outruns proportional growth, since $4/3>1$, while the radius lags it, since $2/3<1$, so a target radius arrives far later than a linear reading would predict.

**Answer.** $A=15$ | $r(t)=15t^{2/3}$, $S(t)=225\pi t^{4/3}$ | area factor $8^{4/3}=16$ over the first eight hours | $r=240$ m at $t=64$ h`,
  },
  {
    id: "math-8-77",
    case_id: "MATH 8.77",
    title: "A Weir Rating Curve Rewritten in New Units",
    context: String.raw`Discharge over a measuring weir follows $Q(h)=A h^{3/2}$ cubic metres per second, where $h>0$ is the head in metres. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second. A field team wants the same rating curve rewritten with the head in centimetres, sometimes keeping discharge in cubic metres per second and sometimes reporting it in litres per second. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`In the original units the rating curve is $Q(h)=16h^{3/2}$.`,
      String.raw`With the head in centimetres and discharge still in cubic metres per second, the curve becomes $Q=1.6\,h_{\mathrm{cm}}^{3/2}$.`,
      String.raw`With the head in centimetres and discharge in litres per second, the coefficient is $16000$.`,
      String.raw`Switching the head from metres to centimetres leaves the exponent at $3/2$ but multiplies the coefficient by $100$.`,
      String.raw`A head of one metre discharges $32$ cubic metres per second.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

The weir formula supplies the exponent, so the single gauging fixes the coefficient once the three-halves power of a head below one metre is taken. Splitting that power into a square root and a cube keeps the arithmetic exact.

$$0.25^{3/2}=\left(\sqrt{0.25}\right)^{3}=0.5^{3}=0.125$$

The gauging then becomes a one-step division:

$$A(0.125)=2 \quad \Rightarrow \quad A=\frac{2}{0.125}=16, \qquad Q(h)=16h^{3/2}$$

The calibrated curve reproduces the gauging, because $16(0.125)=2$ cubic metres per second at a head of a quarter metre. Multiplying $0.25$ by $3/2$ instead of raising it to that power would give a coefficient near $5.3$. The rating curve is $Q(h)=16h^{3/2}$, so the statement is True.`,
      String.raw`**B.** → False

Rewriting the head in centimetres substitutes $h=h_{\mathrm{cm}}/100$, and the exponent $3/2$ acts on the whole substitution, conversion factor included.

$$Q=16\left(\frac{h_{\mathrm{cm}}}{100}\right)^{3/2}=\frac{16}{100^{3/2}}\,h_{\mathrm{cm}}^{3/2}$$

The conversion factor carries the same three-halves power as the head:

$$100^{3/2}=1000 \quad \Rightarrow \quad Q=0.016\,h_{\mathrm{cm}}^{3/2}$$

A check at the gauged point settles it, since $h_{\mathrm{cm}}=25$ gives $0.016(125)=2$, while the claimed coefficient would return $200$. Dividing the coefficient by $10$ once produces exactly the claimed $1.6$, which treats the conversion as if the exponent were $1/2$. The coefficient is $0.016$, so the statement is False.`,
      String.raw`**C.** → False

Two conversions act here at once: the head factor divides the coefficient by $100^{3/2}=1000$, while the switch to litres multiplies it by $1000$, and the two happen to cancel exactly.

$$Q_{\mathrm{L}}=1000\times\frac{16}{1000}\,h_{\mathrm{cm}}^{3/2}=16\,h_{\mathrm{cm}}^{3/2}$$

The gauged point confirms the coefficient in the new pair of units:

$$h_{\mathrm{cm}}=25 \;\Rightarrow\; 16(125)=2000 \text{ L/s}=2 \text{ m}^{3}\text{/s}$$

The repeated $16$ is a coincidence of these particular units rather than a sign that nothing changed. Applying only the litre conversion to the original coefficient gives exactly the claimed $16000$ and leaves the head still measured in metres. The coefficient in the new units is $16$, so the statement is False.`,
      String.raw`**D.** → False

A change of length unit multiplies the input by a constant, and a power function pushes that constant through its own exponent before it reaches the coefficient.

$$Q=16\left(\frac{h_{\mathrm{cm}}}{100}\right)^{3/2}=16\times 100^{-3/2}\,h_{\mathrm{cm}}^{3/2}$$

Evaluating the converted factor shows both its size and its direction:

$$100^{-3/2}=\frac{1}{1000} \quad \Rightarrow \quad 16\longrightarrow 0.016$$

The exponent half of the claim is right, since a unit change never touches it, but measuring the head in a smaller unit makes each numerical head larger and so shrinks the coefficient. The coefficient is divided by $1000$, so the statement is False.`,
      String.raw`**E.** → False

A head of one metre is the easiest point on any power curve, because every power of one is one and the coefficient stands alone.

$$Q(1)=16(1)^{3/2}=16$$

The scale-factor route from the gauged head confirms it, since $1/0.25=4$:

$$\frac{Q(1)}{Q(0.25)}=4^{3/2}=\left(\sqrt{4}\right)^{3}=8, \qquad 8\times 2=16$$

Quadrupling the head therefore raises discharge eightfold rather than sixteenfold, because the exponent is $3/2$ and not $2$. The claimed $32$ is what a squared law would give from $4^{2}=16$. The discharge is $16$ cubic metres per second, so the statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 77,
    solution_overview: String.raw`The rating curve is $Q(h)=Ah^{3/2}$ in metres and cubic metres per second, pinned by the gauging $Q(0.25)=2$. The team wants the same curve in centimetres, and in litres per second.

**Part 1: Building the model.**

Let $h$ = head in metres, $h_{\mathrm{cm}}=100h$ = head in centimetres, $Q$ = discharge. The exponent belongs to the weir, so one gauging fixes the coefficient. A change of unit replaces the input by a constant multiple of itself, and a power function pushes that constant through its exponent, so the exponent never moves and only the coefficient does. A change of output unit, by contrast, scales the coefficient directly.

**1. Translate: the gauging.**

$$A(0.25)^{3/2}=2$$

**2. Translate: the change of input unit.**

$$Q=A\left(\frac{h_{\mathrm{cm}}}{100}\right)^{3/2}=\frac{A}{100^{3/2}}\,h_{\mathrm{cm}}^{3/2}$$

**3. Translate: the change of output unit.** One cubic metre per second is $1000$ litres per second.

**Part 2: The model.**

$$Q=16h^{3/2} \quad \text{(m, cubic m/s)} \tag{1}$$

$$Q=0.016\,h_{\mathrm{cm}}^{3/2} \quad \text{(cm, cubic m/s)} \tag{2}$$

$$Q=16\,h_{\mathrm{cm}}^{3/2} \quad \text{(cm, L/s)} \tag{3}$$

**Part 3: Solve.**

**1.** The shape factor at the gauged head is exact:

$$0.25^{3/2}=0.5^{3}=0.125 \;\Rightarrow\; A=\frac{2}{0.125}=16$$

**2.** The head conversion carries the exponent:

$$100^{3/2}=1000 \;\Rightarrow\; 16\longrightarrow\frac{16}{1000}=0.016$$

**3.** The litre conversion multiplies by $1000$ and cancels that division:

$$1000\times 0.016=16$$

**4.** One check at the gauged point in each set of units:

$$16(0.25)^{3/2}=2, \qquad 0.016(25)^{3/2}=2, \qquad 16(25)^{3/2}=2000$$

**Answer.** $A=16$ | $Q=16h^{3/2}$ (m, cubic m/s) | $Q=0.016h_{\mathrm{cm}}^{3/2}$ (cm, cubic m/s) | $Q=16h_{\mathrm{cm}}^{3/2}$ (cm, L/s)`,
  },
  {
    id: "math-8-78",
    case_id: "MATH 8.78",
    title: "A Grain Dryer Calibrated From Two Recorded Ratios",
    context: String.raw`Fuel use in a grain dryer follows $F(x)=A x^{r}$ litres per batch, where $x>0$ is the batch mass in tonnes. Neither constant is published. Two figures are on file: doubling the batch mass raises fuel use by $300\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The exponent is $r=2$.`,
      String.raw`The fuel law is $F(x)=3x^{2}$.`,
      String.raw`A $10$-tonne batch uses $300$ litres.`,
      String.raw`Tripling the batch mass multiplies fuel use by $9$.`,
      String.raw`Fuel use per tonne is $3x$ litres, so it rises in proportion to batch mass.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      String.raw`**A.** → True

A percentage rise has to become a multiplier before an exponent can be read from it, and a doubling of the input then fixes that exponent through a power of two. The coefficient plays no part, since it cancels in the ratio.

$$\frac{F(2x)}{F(x)}=\frac{A(2x)^{r}}{Ax^{r}}=2^{r}=1+\frac{300}{100}=4$$

Matching powers of the same base finishes the solve without logarithms:

$$2^{r}=4=2^{2} \quad \Rightarrow \quad r=2$$

The record is a ratio rather than a level, which is exactly why it can settle the exponent while leaving the coefficient untouched. Reading the $300\%$ as a multiplier of three would give $2^{r}=3$ and a non-integer exponent near $1.585$. The exponent is $r=2$, so the statement is True.`,
      String.raw`**B.** → True

With the exponent settled, the second record is a difference between two fuel levels, so the coefficient multiplies the gap between two squares.

$$A\left(6^{2}-2^{2}\right)=A(36-4)=32A=96$$

Dividing through leaves the coefficient and completes the law:

$$A=\frac{96}{32}=3, \qquad F(x)=3x^{2}$$

Both records check against the finished law, since $F(6)-F(2)=108-12=96$ litres and $F(4)/F(2)=48/12=4$. Treating the $96$ litres as the six-tonne batch's whole consumption would give $96/36$ and ignore the two-tonne baseline. The law is $F(x)=3x^{2}$, so the statement is True.`,
      String.raw`**C.** → True

Evaluating the calibrated law at a new batch size squares the mass first and applies the coefficient afterwards.

$$10^{2}=100, \qquad F(10)=3(100)=300$$

The same figure appears as a scale factor from the two-tonne batch, since $10/2=5$ and $5^{2}=25$:

$$\frac{F(10)}{F(2)}=\frac{300}{12}=25$$

A five-fold batch therefore burns twenty-five times the fuel, which is the cost of an exponent above one. Scaling the six-tonne figure of $108$ litres by the mass ratio $10/6$ would give about $180$ litres, the answer for a proportional law. The batch uses $300$ litres, so the statement is True.`,
      String.raw`**D.** → True

A mass multiplier acts through the exponent two, so the coefficient and the starting mass cancel and only the square of the multiplier survives.

$$\frac{F(3x)}{F(x)}=\frac{3(3x)^{2}}{3x^{2}}=3^{2}=9$$

The two logged batch sizes stand in exactly that ratio:

$$F(2)=12, \qquad F(6)=108=9\times 12$$

Because the ratio ignores the starting mass, the same factor applies from $4$ tonnes to $12$ tonnes, where $48$ litres becomes $432$. Carrying the mass multiplier across unchanged would describe a law of exponent one and produce a factor of three rather than nine. Fuel use grows ninefold, so the statement is True.`,
      String.raw`**E.** → True

Fuel use per tonne divides the law by the mass, which lowers the exponent from two to one and leaves a quantity that still depends on batch size.

$$\frac{F(x)}{x}=\frac{3x^{2}}{x}=3x$$

Two logged batches show the per-tonne figure moving in step with the mass:

$$\frac{F(2)}{2}=6, \qquad \frac{F(6)}{6}=18=3\times 6$$

An exponent of one is precisely what proportionality means, so the tripled mass triples the per-tonne figure as well. A per-unit figure would be constant only if the underlying exponent were one, which is not the case here. The per-tonne figure is $3x$ and rises proportionally, so the statement is True.`,
    ],
    difficulty_level: "2/5",
    sort_order: 78,
    solution_overview: String.raw`Fuel use is $F(x)=Ax^{r}$. The doubling rule fixes the exponent, and the $96$-litre gap between $2$ and $6$ tonnes fixes the coefficient.

**Part 1: Building the model.**

Let $x$ = batch mass in tonnes and $F$ = fuel use in litres. Two unknowns need two records, and the order in which they are used matters. The first is a ratio, which is blind to the coefficient and therefore isolates the exponent; the second is a difference of levels, which pins the coefficient once the exponent is known.

**1. Translate: the doubling rule.** A $300\%$ rise is a multiplier of $4$:

$$\frac{F(2x)}{F(x)}=2^{r}=4$$

**2. Translate: the logged gap.**

$$A\left(6^{r}-2^{r}\right)=96$$

**3. Translate: fuel per tonne.** Dividing lowers the exponent by one:

$$\frac{F(x)}{x}=Ax^{r-1}$$

**Part 2: The model.**

$$r=2 \tag{1}$$

$$F(x)=3x^{2} \tag{2}$$

**Part 3: Solve.**

**1.** The ratio equation is settled by matching powers of two:

$$2^{r}=4=2^{2} \quad \Rightarrow \quad r=2$$

**2.** With $r=2$ the difference of squares is exact:

$$A(36-4)=32A=96 \quad \Rightarrow \quad A=3$$

**3.** Levels along the curve:

$$F(2)=12, \qquad F(6)=108, \qquad F(10)=300$$

**4.** Scale factors and the per-tonne figure:

$$\frac{F(3x)}{F(x)}=3^{2}=9, \qquad \frac{F(x)}{x}=3x$$

**5.** Every claim here follows from the single exponent $2$: mass multipliers arrive squared, so doubling costs four times the fuel and tripling nine times, while the per-tonne figure keeps one leftover power of the mass and therefore climbs proportionally.

**Answer.** $r=2$, $A=3$ | $F(x)=3x^{2}$ | $F(10)=300$ litres | fuel per tonne $=3x$`,
  },
];
