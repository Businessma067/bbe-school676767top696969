/** MATH 8.36–8.40 rewritten: harder stems, Chapter 5 explanation depth. */
export const BATCH = [
  {
    id: "math-8-36",
    case_id: "MATH 8.36",
    title: `Rainwater Basin Storage Under a Square Law`,
    context: `A tapered rainwater basin stores $V(d)=A d^{2}$ cubic metres when filled to a depth of $d>0$ metres. A survey at a depth of $4$ metres measured $48$ cubic metres in store.`,
    statements: [
      `The coefficient of the storage law is $3$.`,
      `At a depth of $10$ metres the basin holds $300$ cubic metres.`,
      `Doubling the depth quadruples the stored volume.`,
      `A stored volume of $675$ cubic metres corresponds to a depth of $15$ metres.`,
      `Stored volume per metre of depth rises as the basin fills.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The coefficient of the storage law is $3$.**  (true)

This claim asks for the constant in the storage law. Dividing the surveyed $48$ cubic metres by the shape factor $4^{2}=16$ gives $A=3$.

The tapered shape is what makes the exponent $2$ plausible: a basin with vertical walls would store volume proportional to depth, while sloping walls widen the surface as the water rises. The coefficient carries the geometry of that taper.

Evaluate the shape factor and divide:

$$
4^{2} = 16, \\qquad 16A = 48 \\quad \\Rightarrow \\quad A = 3
$$

$$
V(d) = 3d^{2}
$$

Check the survey:

$$
V(4) = 3(16) = 48 \\;\\checkmark
$$

The coefficient is $3$, so the claim is true.`,
      `**B) At a depth of $10$ metres the basin holds $300$ cubic metres.**  (true)

This claim extrapolates the storage law to a deeper fill. With $A=3$ the volume at $10$ metres is $3 \\times 100 = 300$ cubic metres.

The comparison with the survey is worth noting: depth rises by a factor of $2.5$ while stored volume rises by a factor of $6.25$. Squaring the depth ratio is what turns a modest rise in level into a large rise in capacity.

Evaluate the storage law:

$$
V(10) = 3(10)^{2} = 3(100) = 300
$$

Confirm with the scale factor from the survey:

$$
\\left(\\frac{10}{4}\\right)^{2} = 6.25, \\qquad 48 \\times 6.25 = 300
$$

The basin holds $300$ cubic metres, so the claim is true.`,
      `**C) Doubling the depth quadruples the stored volume.**  (true)

This claim applies a scale factor, so neither the coefficient nor the starting depth matters. With exponent $2$, doubling the depth multiplies the volume by $2^{2}=4$.

The rule holds at every fill level, which is the practical value of reading the exponent rather than computing volumes: going from $2$ to $4$ metres and from $5$ to $10$ metres both quadruple the store.

Form the scale factor:

$$
\\frac{V(2d)}{V(d)} = \\frac{A(2d)^{2}}{Ad^{2}} = 2^{2} = 4
$$

Check two separate doublings:

$$
V(2) = 12, \\quad V(4) = 48; \\qquad V(5) = 75, \\quad V(10) = 300
$$

Both quadruple, so the claim is true.`,
      `**D) A stored volume of $675$ cubic metres corresponds to a depth of $15$ metres.**  (true)

This claim inverts the storage law. Solving $3d^{2}=675$ gives $d^{2}=225$, so the depth is exactly $15$ metres.

Inverting a squared law takes the square root of the volume ratio, which compresses large differences: the target is more than fourteen times the surveyed volume, yet the depth only needs to grow by a factor of $3.75$.

Set the storage law equal to the target:

$$
3d^{2} = 675 \\quad \\Rightarrow \\quad d^{2} = 225 \\quad \\Rightarrow \\quad d = 15
$$

Confirm by substitution:

$$
V(15) = 3(225) = 675 \\;\\checkmark
$$

The depth is $15$ metres, so the claim is true.`,
      `**E) Stored volume per metre of depth rises as the basin fills.**  (true)

This claim concerns a derived quantity. Dividing volume by depth gives $3d$, which increases with depth, so each additional metre of depth adds more water than the previous one.

Dividing by the input lowers the exponent by one, and starting from $2$ leaves $1$ — still increasing. This is the arithmetic counterpart of the taper: the deeper the basin is filled, the wider the water surface and the more each extra metre holds.

Divide the storage law by depth:

$$
\\frac{V(d)}{d} = \\frac{3d^{2}}{d} = 3d
$$

Evaluate at three depths:

$$
\\frac{V(4)}{4} = 12, \\qquad \\frac{V(10)}{10} = 30, \\qquad \\frac{V(15)}{15} = 45
$$

Volume per metre of depth rises steadily, so the claim is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 36,
    solution_overview: `Basin storage is $V(d)=Ad^{2}$ cubic metres at depth $d>0$, with a survey giving $V(4)=48$.

**Part 1: Building the model.**

Let $d$ = fill depth in metres and $V(d)$ = stored volume. The exponent is given by the tapered geometry, so the single survey reading pins the coefficient.

**1. Translate: the survey.**

$$
A(4)^{2} = 48
$$

**2. Translate: volume per metre of depth.** Dividing by $d$ lowers the exponent by one:

$$
\\frac{V(d)}{d} = A d
$$

**Part 2: The model.**

$$
V(d) = 3d^{2} \\tag{1}
$$

$$
\\frac{V(d)}{d} = 3d \\tag{2}
$$

**Part 3: Solve.**

**1.** The survey gives the coefficient:

$$
A = \\frac{48}{16} = 3
$$

**2.** Levels at deeper fills:

$$
V(10) = 300, \\qquad V(15) = 675
$$

**3.** The scale factor squares the depth multiplier:

$$
\\frac{V(2d)}{V(d)} = 4, \\qquad \\left(\\tfrac{10}{4}\\right)^{2} = 6.25
$$

**4.** Inversion takes the square root of the volume ratio:

$$
d = \\sqrt{\\frac{V}{3}}, \\qquad V = 675 \\;\\Rightarrow\\; d = 15
$$

**5.** Equation (2) has exponent $1$, so each extra metre of depth stores more than the last:

$$
12,\\; 30,\\; 45 \\text{ cubic metres per metre at } d = 4,\\,10,\\,15
$$

**Answer.** $A = 3$ | $V(d) = 3d^{2}$ | $675$ m³ at a depth of $15$ m`,
  },
  {
    id: "math-8-37",
    case_id: "MATH 8.37",
    title: `A Braking-Energy Index Recovered From a Speed Change`,
    context: `A fleet safety report scores braking energy by the index $E(v)=A v^{2}$, where $v>0$ is speed in kilometres per hour. The report does not give $A$ directly: it states only that raising the test speed from $40$ to $60$ km/h raised the index by exactly $100$ points.`,
    statements: [
      `The coefficient of the index is $0.05$.`,
      `At $60$ km/h the index reads $180$.`,
      `Raising the speed by $50\\%$ raises the index by $125\\%$.`,
      `The index reaches $500$ at a speed of $100$ km/h.`,
      `Halving the speed cuts the index to a quarter.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) The coefficient of the index is $0.05$.**  (true)

This claim asks for the constant, which has to be reconstructed from a *change* in the index rather than a level. The two speeds give shape factors $1600$ and $3600$, and the recorded rise of $100$ points then fixes $A=0.05$.

Dividing $100$ by either speed squared on its own is the standard error, and it produces a coefficient roughly twice or four times too small. What the report records is a difference, so the coefficient multiplies the difference of the two squares.

Evaluate both shape factors:

$$
40^{2} = 1600, \\qquad 60^{2} = 3600
$$

Translate the recorded rise:

$$
A(3600 - 1600) = 100 \\quad \\Rightarrow \\quad 2000A = 100 \\quad \\Rightarrow \\quad A = 0.05
$$

$$
E(v) = 0.05v^{2}
$$

The coefficient is $0.05$, so the claim is true.`,
      `**B) At $60$ km/h the index reads $180$.**  (true)

This claim asks for a level at the upper test speed. With $A=0.05$ the index reads $0.05 \\times 3600 = 180$.

The pair of levels is the natural check on part A: the lower speed gives $80$, and the difference $180-80=100$ reproduces the report exactly. Any candidate coefficient that fails this test has been recovered incorrectly.

Evaluate the index at the upper speed:

$$
E(60) = 0.05(3600) = 180
$$

Evaluate at the lower speed and difference them:

$$
E(40) = 0.05(1600) = 80, \\qquad 180 - 80 = 100 \\;\\checkmark
$$

The index reads $180$, so the claim is true.`,
      `**C) Raising the speed by $50\\%$ raises the index by $125\\%$.**  (true)

This claim converts a percentage speed change into a percentage index change. The multiplier is $1.5^{2}=2.25$, which is a rise of $125\\%$.

The two test speeds are themselves in this ratio — $60$ is $50\\%$ above $40$ — so the claim can be checked directly against the report: $180/80=2.25$. Squaring is what turns a moderate speed increase into a much larger energy increase, the entire point of the index.

Form the scale factor:

$$
\\frac{E(1.5v)}{E(v)} = 1.5^{2} = 2.25
$$

Convert to a percentage rise:

$$
2.25 - 1 = 1.25 = 125\\%
$$

Check against the two test speeds:

$$
\\frac{E(60)}{E(40)} = \\frac{180}{80} = 2.25 \\;\\checkmark
$$

The index rises by $125\\%$, so the claim is true.`,
      `**D) The index reaches $500$ at a speed of $100$ km/h.**  (true)

This claim evaluates the index at motorway speed. With $A=0.05$, the index at $100$ km/h is $0.05 \\times 10000 = 500$.

Read backwards, the same computation inverts the index: $0.05v^{2}=500$ gives $v^{2}=10000$ and $v=100$. It also puts the safety message in perspective — $2.5$ times the lower test speed produces $6.25$ times the braking energy.

Evaluate the index:

$$
E(100) = 0.05(100)^{2} = 0.05(10000) = 500
$$

Confirm by inversion:

$$
0.05v^{2} = 500 \\;\\Rightarrow\\; v^{2} = 10000 \\;\\Rightarrow\\; v = 100
$$

The index reaches $500$ at $100$ km/h, so the claim is true.`,
      `**E) Halving the speed cuts the index to a quarter.**  (true)

This claim applies the scale factor downwards. With exponent $2$, halving the speed multiplies the index by $(1/2)^{2}=1/4$.

The symmetry with part C is the useful takeaway: the squared law amplifies increases and decreases alike. A driver who halves speed does not halve the braking energy — the reduction is four times as large as a proportional rule would suggest.

Apply the scale factor with multiplier $1/2$:

$$
\\frac{E(v/2)}{E(v)} = \\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}
$$

Check on two concrete pairs:

$$
E(100) = 500, \\quad E(50) = 125; \\qquad E(60) = 180, \\quad E(30) = 45
$$

Both fall to a quarter, so the claim is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 37,
    solution_overview: `The braking-energy index is $E(v)=Av^{2}$, and raising the test speed from $40$ to $60$ km/h raised the index by $100$ points.

**Part 1: Building the model.**

Let $v$ = speed in km/h and $E(v)$ = index. The exponent is given; the only observation is a difference of two index readings, so the coefficient must be recovered from that difference.

**1. Translate: the two shape factors.**

$$
40^{2} = 1600, \\qquad 60^{2} = 3600
$$

**2. Translate: the recorded rise.**

$$
A(3600 - 1600) = 100
$$

**Part 2: The model.**

$$
2000A = 100 \\tag{1}
$$

$$
E(v) = A v^{2} \\tag{2}
$$

**Part 3: Solve.**

**1.** Equation (1) gives the coefficient:

$$
A = 0.05, \\qquad E(v) = 0.05v^{2}
$$

**2.** Check both test speeds against the report:

$$
E(40) = 80, \\qquad E(60) = 180, \\qquad 180 - 80 = 100 \\;\\checkmark
$$

**3.** Scale factors square the speed multiplier:

$$
1.5^{2} = 2.25 \\;(+125\\%), \\qquad \\left(\\tfrac{1}{2}\\right)^{2} = \\tfrac{1}{4}
$$

**4.** Levels at higher speeds, and the inverse reading:

$$
E(100) = 500, \\qquad E = 500 \\;\\Rightarrow\\; v = 100
$$

**5.** The safety point is the squaring itself: $2.5$ times the speed of the lower test gives $6.25$ times its braking energy.

**Answer.** $A = 0.05$ | $E(v) = 0.05v^{2}$ | $E(100) = 500$`,
  },
  {
    id: "math-8-38",
    case_id: "MATH 8.38",
    title: `Geometrically Similar Silos: Steel Against Capacity`,
    context: `A supplier builds geometrically similar storage silos. The steel skin scales with the square of the height, $S(h)=a h^{2}$ square metres, while capacity scales with the cube, $V(h)=k h^{3}$ cubic metres. A six-metre silo uses $108$ square metres of steel and holds $72$ cubic metres.`,
    statements: [
      `The steel requirement is $S(h)=3h^{2}$.`,
      `A nine-metre silo needs $243$ square metres of steel.`,
      `Doubling the height multiplies capacity by $8$.`,
      `Steel per cubic metre of capacity falls as the silo gets taller.`,
      `Doubling the height doubles the steel requirement.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) The steel requirement is $S(h)=3h^{2}$.**  (true)

This claim calibrates the surface law. Dividing $108$ square metres by the shape factor $6^{2}=36$ gives $a=3$.

Keeping the two laws separate is what this task rewards: the same silo supplies one observation for steel and one for capacity, and each calibrates only its own equation. Mixing them — dividing $108$ by $216$, say — produces a constant that belongs to neither.

Evaluate the shape factor and divide:

$$
6^{2} = 36, \\qquad 36a = 108 \\quad \\Rightarrow \\quad a = 3
$$

$$
S(h) = 3h^{2}
$$

Calibrate the capacity law the same way, for later use:

$$
6^{3} = 216, \\qquad 216k = 72 \\quad \\Rightarrow \\quad k = \\frac{1}{3}, \\qquad V(h) = \\frac{h^{3}}{3}
$$

The steel law is $3h^{2}$, so the claim is true.`,
      `**B) A nine-metre silo needs $243$ square metres of steel.**  (true)

This claim extrapolates the steel law. At $h=9$ the requirement is $3 \\times 81 = 243$ square metres.

The ratio route gives the same answer and shows the shape: the height rises by a factor of $1.5$ and the steel by $1.5^{2}=2.25$, so $108 \\times 2.25=243$. Both routes agreeing is a quick guard against a mis-recovered coefficient.

Evaluate the steel law:

$$
S(9) = 3(9)^{2} = 3(81) = 243
$$

Confirm with the scale factor:

$$
\\left(\\frac{9}{6}\\right)^{2} = 2.25, \\qquad 108 \\times 2.25 = 243
$$

The nine-metre silo needs $243$ square metres, so the claim is true.`,
      `**C) Doubling the height multiplies capacity by $8$.**  (true)

This claim applies the scale factor to the capacity law, whose exponent is $3$. Doubling the height multiplies capacity by $2^{3}=8$.

This is the cube half of the classic square-cube pairing: the same doubling that quadruples the steel skin multiplies the contents eightfold. Neither factor depends on the coefficients, so the comparison holds for any family of similar silos.

Form the scale factor:

$$
\\frac{V(2h)}{V(h)} = \\frac{k(2h)^{3}}{kh^{3}} = 2^{3} = 8
$$

Check against the calibrated law:

$$
V(6) = \\frac{216}{3} = 72, \\qquad V(12) = \\frac{1728}{3} = 576, \\qquad \\frac{576}{72} = 8
$$

Capacity multiplies by eight, so the claim is true.`,
      `**D) Steel per cubic metre of capacity falls as the silo gets taller.**  (true)

This claim compares the two laws through their ratio. Dividing steel by capacity gives $9/h$, a power function with exponent $-1$, so taller silos need less steel per cubic metre stored.

This is why large tanks are cheaper per unit of contents: the exponent of the surface law is one less than that of the volume law, so their ratio must fall with size. The result is structural — it depends only on the exponents $2$ and $3$, not on the particular coefficients.

Form the ratio of the two calibrated laws:

$$
\\frac{S(h)}{V(h)} = \\frac{3h^{2}}{h^{3}/3} = \\frac{9h^{2}}{h^{3}} = \\frac{9}{h}
$$

Evaluate at three heights:

$$
\\frac{9}{6} = 1.5, \\qquad \\frac{9}{9} = 1, \\qquad \\frac{9}{12} = 0.75
$$

Steel per cubic metre halves between six and twelve metres, so the claim is true.`,
      `**E) Doubling the height doubles the steel requirement.**  (false)

This claim treats the steel law as proportional. Its exponent is $2$, so doubling the height quadruples the steel: $3h^{2}$ becomes $12h^{2}$.

Doubling would require an exponent of $1$, which no surface law has. The mistake also breaks the square-cube comparison in part D: if steel doubled while capacity multiplied by eight, the steel-per-capacity ratio would fall four times as fast as it really does.

Apply the scale factor:

$$
\\frac{S(2h)}{S(h)} = 2^{2} = 4
$$

Check with concrete silos:

$$
S(6) = 108, \\qquad S(12) = 3(144) = 432, \\qquad \\frac{432}{108} = 4
$$

Steel quadruples, not doubles, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 38,
    solution_overview: `Similar silos have steel $S(h)=ah^{2}$ and capacity $V(h)=kh^{3}$; a six-metre silo uses $108$ m² of steel and holds $72$ m³.

**Part 1: Building the model.**

Let $h$ = height in metres, $S$ = steel area, $V$ = capacity. Geometric similarity fixes both exponents, so each of the two observations calibrates one coefficient.

**1. Translate: the steel observation.**

$$
a(6)^{2} = 108
$$

**2. Translate: the capacity observation.**

$$
k(6)^{3} = 72
$$

**Part 2: The model.**

$$
S(h) = 3h^{2} \\tag{1}
$$

$$
V(h) = \\frac{h^{3}}{3} \\tag{2}
$$

**Part 3: Solve.**

**1.** The two observations give the two coefficients:

$$
a = 3, \\qquad k = \\tfrac{1}{3}
$$

**2.** Levels for a taller silo:

$$
S(9) = 243, \\qquad V(9) = 243
$$

**3.** The square-cube pair of scale factors for one doubling:

$$
\\frac{S(2h)}{S(h)} = 4, \\qquad \\frac{V(2h)}{V(h)} = 8
$$

**4.** Their ratio is the economically interesting quantity:

$$
\\frac{S(h)}{V(h)} = \\frac{9}{h}, \\qquad 1.5,\\; 1,\\; 0.75 \\text{ at } h = 6,\\,9,\\,12
$$

**5.** Because the exponents differ by exactly one, steel per cubic metre is inversely proportional to height — the general reason big tanks are cheap per unit stored.

**Answer.** $S(h) = 3h^{2}$ | $V(h) = h^{3}/3$ | steel per m³ $= 9/h$`,
  },
  {
    id: "math-8-39",
    case_id: "MATH 8.39",
    title: `Inspection Hours Across Growing Shipment Volumes`,
    context: `Customs inspection time follows $T(n)=A n^{0.5}$ hours for a consignment of $n>0$ shipments. A logged consignment of $100$ shipments took $60$ hours. The team also reports time per shipment, $T/n$.`,
    statements: [
      `A consignment of $400$ shipments takes $120$ hours.`,
      `Time per shipment falls as the consignment grows.`,
      `Quadrupling the number of shipments doubles the total inspection time.`,
      `At $100$ shipments the time per shipment is $0.6$ hours.`,
      `Total inspection time is proportional to the number of shipments.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A) A consignment of $400$ shipments takes $120$ hours.**  (true)

This claim extrapolates the inspection law. The logged consignment gives $A=6$, and $400$ shipments then take $6 \\times 20 = 120$ hours.

Quadrupling the shipments only doubles the hours, which is the square-root shape at work. A proportional estimate would have predicted $240$ hours and would have doubled the staffing requested.

Recover the coefficient:

$$
A\\sqrt{100} = 60 \\quad \\Rightarrow \\quad 10A = 60 \\quad \\Rightarrow \\quad A = 6
$$

$$
T(n) = 6\\sqrt{n}
$$

Evaluate at the larger consignment:

$$
T(400) = 6\\sqrt{400} = 6(20) = 120
$$

The consignment takes $120$ hours, so the claim is true.`,
      `**B) Time per shipment falls as the consignment grows.**  (true)

This claim concerns the derived average. Dividing total time by the number of shipments gives $6n^{-0.5}$, whose exponent is negative, so each shipment takes less time as consignments grow.

The economics of this are the reason inspection teams batch work: fixed set-up effort is spread over more shipments, and the square-root law encodes that spreading. Total hours still rise — just more slowly than the shipment count.

Divide total time by the shipment count:

$$
\\frac{T(n)}{n} = \\frac{6n^{0.5}}{n} = 6n^{-0.5}
$$

Evaluate at three consignments:

$$
\\frac{T(25)}{25} = \\frac{30}{25} = 1.2, \\qquad \\frac{T(100)}{100} = 0.6, \\qquad \\frac{T(400)}{400} = 0.3
$$

Time per shipment falls throughout, so the claim is true.`,
      `**C) Quadrupling the number of shipments doubles the total inspection time.**  (true)

This claim is a scale-factor question, independent of the coefficient. With exponent $0.5$, quadrupling the shipments multiplies total time by $4^{0.5}=2$.

The rule applies at any starting volume, which makes it a useful planning shortcut: whatever the current consignment, four times the shipments will take twice the hours — and sixteen times the shipments will take four times the hours.

Form the scale factor:

$$
\\frac{T(4n)}{T(n)} = 4^{0.5} = 2
$$

Check on two separate quadruplings:

$$
T(25) = 30, \\quad T(100) = 60; \\qquad T(100) = 60, \\quad T(400) = 120
$$

Both double, so the claim is true.`,
      `**D) At $100$ shipments the time per shipment is $0.6$ hours.**  (true)

This claim reads the average at the logged consignment. Sixty hours across $100$ shipments is $0.6$ hours each, about $36$ minutes.

The figure can be obtained without the model at all, straight from the log, which makes it a useful check on the derived average-time law: $6 \\times 100^{-0.5}=6/10=0.6$ agrees exactly.

Divide the logged hours by the logged shipments:

$$
\\frac{60}{100} = 0.6
$$

Confirm through the derived law:

$$
6(100)^{-0.5} = \\frac{6}{10} = 0.6
$$

Time per shipment is $0.6$ hours, so the claim is true.`,
      `**E) Total inspection time is proportional to the number of shipments.**  (false)

This claim would require an exponent of $1$. The exponent is $0.5$, so doubling the shipments raises total time by only about $41\\%$.

Proportionality would also contradict part B: if time were proportional to shipments, the time per shipment would be a constant instead of a falling curve. The two statements cannot both hold, and the data settle it — $400$ shipments take $120$ hours, not the $240$ a proportional rule would give.

Compare the scale factors of a proportional law and this one:

$$
\\frac{T(2n)}{T(n)} = 2^{0.5} \\approx 1.414 \\ne 2
$$

Test against the logged consignment:

$$
\\text{proportional prediction at } 400: \\; 60 \\times 4 = 240, \\qquad \\text{model: } 120
$$

The model gives half the proportional figure, so the claim is false.`,
    ],
    difficulty_level: "2/5",
    sort_order: 39,
    solution_overview: `Inspection time is $T(n)=An^{0.5}$ hours for $n>0$ shipments, with a logged consignment of $100$ shipments taking $60$ hours.

**Part 1: Building the model.**

Let $n$ = shipments and $T(n)$ = total inspection hours. The exponent is given, the log pins the coefficient, and time per shipment is derived by dividing.

**1. Translate: the logged consignment.**

$$
A\\sqrt{100} = 60
$$

**2. Translate: time per shipment.**

$$
\\frac{T(n)}{n} = A n^{-0.5}
$$

**Part 2: The model.**

$$
T(n) = 6\\sqrt{n} \\tag{1}
$$

$$
\\frac{T(n)}{n} = 6n^{-0.5} \\tag{2}
$$

**Part 3: Solve.**

**1.** The log gives the coefficient:

$$
A = 6
$$

**2.** Levels across consignment sizes:

$$
T(25) = 30, \\qquad T(100) = 60, \\qquad T(400) = 120
$$

**3.** The scale factor for a quadrupling is exactly $2$:

$$
4^{0.5} = 2, \\qquad 2^{0.5} \\approx 1.414 \\text{ for a doubling}
$$

**4.** Equation (2) falls with volume, which is the batching gain:

$$
1.2,\\; 0.6,\\; 0.3 \\text{ hours per shipment at } n = 25,\\,100,\\,400
$$

**5.** A proportional model would have predicted $240$ hours for $400$ shipments — double the model's figure — so the exponent matters for staffing, not just for description.

**Answer.** $A = 6$ | $T(n) = 6\\sqrt{n}$ | time per shipment $= 6n^{-0.5}$`,
  },
  {
    id: "math-8-40",
    case_id: "MATH 8.40",
    title: `Illuminance Down the Length of a Gallery`,
    context: `Illuminance from a gallery spotlight follows the inverse-square law $I(d)=A d^{-2}$ lux, where $d>0$ is the distance in metres. A meter reading two metres from the lamp records $300$ lux.`,
    statements: [
      `At four metres the illuminance is $75$ lux.`,
      `Doubling the distance cuts the illuminance to a quarter.`,
      `At ten metres the illuminance is $12$ lux.`,
      `Halving the distance quadruples the illuminance.`,
      `Illuminance falls as the distance from the lamp grows.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) At four metres the illuminance is $75$ lux.**  (true)

This claim evaluates the law at twice the metered distance. The meter reading gives $A=1200$, and at four metres the illuminance is $1200/16=75$ lux.

Negative exponents invert the shape factor, so a larger distance produces a smaller reading. Multiplying rather than dividing by $d^{2}$ is the common slip and would give an absurd $4800$ lux further from the lamp.

Recover the coefficient:

$$
A(2)^{-2} = 300 \\quad \\Rightarrow \\quad \\frac{A}{4} = 300 \\quad \\Rightarrow \\quad A = 1200
$$

$$
I(d) = \\frac{1200}{d^{2}}
$$

Evaluate at four metres:

$$
I(4) = \\frac{1200}{16} = 75
$$

The illuminance is $75$ lux, so the claim is true.`,
      `**B) Doubling the distance cuts the illuminance to a quarter.**  (true)

This claim states the inverse-square rule as a scale factor. Doubling the distance multiplies illuminance by $2^{-2}=1/4$, independently of the coefficient and of the starting distance.

Part A is one instance of this rule — $300$ lux at two metres becoming $75$ lux at four — but the factor holds everywhere along the gallery, which is what makes it a rule rather than a coincidence.

Form the scale factor:

$$
\\frac{I(2d)}{I(d)} = \\frac{A(2d)^{-2}}{Ad^{-2}} = 2^{-2} = \\frac{1}{4}
$$

Check two separate doublings:

$$
I(2) = 300, \\; I(4) = 75; \\qquad I(5) = 48, \\; I(10) = 12
$$

Both fall to a quarter, so the claim is true.`,
      `**C) At ten metres the illuminance is $12$ lux.**  (true)

This claim evaluates the law at the far end of the gallery. With $A=1200$, the illuminance at ten metres is $1200/100=12$ lux.

The drop is severe — five times the distance leaves one twenty-fifth of the light — which is the practical reason galleries space lamps closely rather than relying on a few bright ones.

Evaluate the law:

$$
I(10) = \\frac{1200}{10^{2}} = \\frac{1200}{100} = 12
$$

Confirm with the scale factor from the meter reading:

$$
\\left(\\frac{10}{2}\\right)^{-2} = \\frac{1}{25}, \\qquad \\frac{300}{25} = 12
$$

The illuminance is $12$ lux, so the claim is true.`,
      `**D) Halving the distance quadruples the illuminance.**  (true)

This claim applies the scale factor in the other direction. Halving the distance multiplies illuminance by $(1/2)^{-2}=4$.

Sign handling is the only difficulty: the multiplier $1/2$ raised to the power $-2$ inverts and then squares, giving $4$ rather than $1/4$. The symmetry with part B is exact — moving closer gains as much as moving away loses.

Apply the scale factor:

$$
\\frac{I(d/2)}{I(d)} = \\left(\\frac{1}{2}\\right)^{-2} = 4
$$

Check on the metered distance:

$$
I(2) = 300, \\qquad I(1) = \\frac{1200}{1} = 1200
$$

Illuminance quadruples, so the claim is true.`,
      `**E) Illuminance falls as the distance from the lamp grows.**  (true)

This claim asks for the direction of the law, which the sign of the exponent settles. With $A=1200>0$ and exponent $-2<0$, illuminance decreases on the whole gallery.

The decline is also decelerating: most of the light is lost in the first few metres, and beyond about eight metres the readings change slowly in absolute terms. Both facts come from the same negative exponent.

Read the sign structure:

$$
I(d) = 1200\\,d^{-2}, \\qquad A > 0, \\quad r = -2 < 0
$$

Trace the readings down the gallery:

$$
I(1) = 1200, \\quad I(2) = 300, \\quad I(4) = 75, \\quad I(10) = 12
$$

Illuminance falls monotonically with distance, so the claim is true.`,
    ],
    difficulty_level: "1/5",
    sort_order: 40,
    solution_overview: `Illuminance follows $I(d)=Ad^{-2}$ lux at distance $d>0$ metres, with a meter reading of $300$ lux at two metres.

**Part 1: Building the model.**

Let $d$ = distance in metres and $I(d)$ = illuminance in lux. The inverse-square form fixes the exponent at $-2$, so the meter reading is the only fact needed to pin the coefficient.

**1. Translate: the meter reading.**

$$
A(2)^{-2} = 300, \\qquad 2^{-2} = \\tfrac{1}{4}
$$

**2. Translate: the scale rule.** Coefficients cancel in ratios:

$$
\\frac{I(kd)}{I(d)} = k^{-2}
$$

**Part 2: The model.**

$$
I(d) = \\frac{1200}{d^{2}} \\tag{1}
$$

$$
\\frac{I(kd)}{I(d)} = k^{-2} \\tag{2}
$$

**Part 3: Solve.**

**1.** The meter reading gives the coefficient:

$$
A = 300 \\times 4 = 1200
$$

**2.** Readings down the gallery:

$$
I(1) = 1200, \\quad I(2) = 300, \\quad I(4) = 75, \\quad I(5) = 48, \\quad I(10) = 12
$$

**3.** Scale factors from (2), in both directions:

$$
2^{-2} = \\tfrac{1}{4}, \\qquad \\left(\\tfrac{1}{2}\\right)^{-2} = 4, \\qquad 5^{-2} = \\tfrac{1}{25}
$$

**4.** Inverting (1) turns a lighting target into a distance:

$$
d = \\sqrt{\\frac{1200}{I}}, \\qquad I = 48 \\;\\Rightarrow\\; d = 5
$$

**5.** The negative exponent makes the law decreasing everywhere, with most of the light lost in the first few metres.

**Answer.** $A = 1200$ | $I(d) = 1200d^{-2}$ | $I(10) = 12$ lux`,
  },
];
