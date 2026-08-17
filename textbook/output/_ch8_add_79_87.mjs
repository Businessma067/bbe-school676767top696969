/**
 * Chapter 8 additions 8.79 - 8.87.
 * Power-function economics tasks in the MATH 13.18 explanation format.
 * No subsection field: the bank stays a single ordered list.
 */

import { fileURLToPath } from "node:url";

export const BATCH = [
  {
    id: "math-8-79",
    case_id: "MATH 8.79",
    title: "Kiln Flue Mass Flow into a Particulate Index",
    context: String.raw`A kiln's flue-gas mass flow follows $m(t)=A t^{1/2}$ tonnes per hour for throttle setting $t>0$, and the particulate load index is then $P(m)=m^{4}/16$. A calibration at $t=9$ recorded $m=6$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The intermediate law is $m(t)=2t^{1/2}$.`,
      String.raw`The composed map is $P(m(t))=t^{2}$.`,
      String.raw`Doubling the throttle setting doubles the composed particulate index.`,
      String.raw`At $t=25$ the intermediate mass flow is $50$ tonnes per hour.`,
      String.raw`Inverting the composed law, an index of $81$ requires throttle setting $t=27$.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

The square-root shape is given by the model, so a single recorded pair is enough to pin the coefficient. Substitute the calibration setting into the intermediate rule:

$$m(9)=A\cdot 9^{1/2}=3A$$

The recorded reading was $6$ tonnes per hour, which turns the substitution into an equation:

$$3A=6 \quad \Rightarrow \quad A=2$$

The calibrated intermediate law is $m(t)=2t^{1/2}$, and it reproduces the record, since $2\sqrt{9}=2\cdot 3=6$. Reading the recorded $6$ as the coefficient itself is the tempting slip here: that would ignore the factor $9^{1/2}=3$ sitting between the coefficient and the reading, and it would predict $m(9)=18$ tonnes per hour instead. The recovered law is exactly the one named, so the statement is True.`,
      String.raw`**B.** → True

Composition substitutes the calibrated intermediate law into the particulate rule, and raising a power to a power multiplies the exponents:

$$P(m(t))=\frac{\left(2t^{1/2}\right)^{4}}{16}=\frac{2^{4}\,t^{2}}{16}=\frac{16\,t^{2}}{16}=t^{2}$$

The coefficient cancels exactly, because $2^{4}=16$ matches the divisor sitting in the outer rule. Check the collapsed map against the calibration, where the intermediate reading was $6$:

$$P(6)=\frac{6^{4}}{16}=\frac{1296}{16}=81=9^{2}$$

Both routes give $81$ at throttle setting $9$, one through the two-stage chain and one through the composed square. Stopping after recovering $A$ would leave the outer rule unused, which is the usual way a two-stage chain goes unfinished. The composed map is $t^{2}$, so the statement is True.`,
      String.raw`**C.** → False

A doubling of the throttle is an input multiplier of $k=2$, and it reaches the index through the composed exponent $2$ rather than through the inner exponent $1/2$:

$$\frac{P(m(2t))}{P(m(t))}=\frac{(2t)^{2}}{t^{2}}=2^{2}=4$$

Levels make the size of the jump concrete, starting from the calibration setting:

$$P(m(9))=9^{2}=81, \qquad P(m(18))=18^{2}=324$$

and $324=4\times 81$. A doubling of the index would require a composed exponent of $1$, which this chain cannot produce: the inner square root halves the exponent, but the fourth power in the outer rule more than restores it. Doubling the throttle setting multiplies the particulate index by $4$, so the statement is False.`,
      String.raw`**D.** → False

The intermediate reading at a new setting comes from the calibrated square-root law, not from scaling the recorded pair in proportion. Take the square root first, since $25^{1/2}=5$:

$$m(25)=2\cdot 25^{1/2}=2\cdot 5=10$$

The scaling rule agrees, because the setting moves from $9$ to $25$ by a factor of $25/9$ and the exponent is $1/2$:

$$\frac{m(25)}{m(9)}=\left(\frac{25}{9}\right)^{1/2}=\frac{5}{3}, \qquad 6\cdot\frac{5}{3}=10$$

A proportional guess would give $6\times 25/9\approx 16.67$ tonnes per hour, and the quoted $50$ is further still, being what the coefficient $2$ would deliver if the exponent were $1$. The mass flow at setting $25$ is $10$ tonnes per hour, so the statement is False.`,
      String.raw`**E.** → False

Inverting the composed law means undoing a square, and the reciprocal exponent $1/2$ is what does that:

$$P=t^{2} \quad \Longleftrightarrow \quad t=P^{1/2}$$

Apply the inverse to the target index and then run the chain forward as a check:

$$t=81^{1/2}=9, \qquad m(9)=6, \qquad P(6)=\frac{1296}{16}=81$$

The quoted setting of $27$ comes from treating the exponent as a number to divide by, or from reading $81$ as $3^{3}$ scaled up; either route confuses powers with factors. Because the composed map is strictly increasing on $t>0$, the solution is unique, and no second setting can deliver the same index. The required throttle setting is $9$, so the statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 79,
    solution_overview: String.raw`Flue mass flow is $m(t)=At^{1/2}$ tonnes per hour with the calibration $m(9)=6$, and the particulate index is $P(m)=m^{4}/16$.

**Part 1: Building the model.**

Let $t$ = throttle setting, $m$ = mass flow in tonnes per hour, $P$ = particulate load index. The square-root shape is supplied, so one recorded pair fixes the coefficient. Composition then feeds the intermediate output into the second rule, and raising a power to a power multiplies the two exponents.

**1. Translate: the calibration.**

$$A\cdot 9^{1/2}=6, \qquad 9^{1/2}=3$$

**2. Translate: the chain.** Substituting the inner rule into the outer one carries the inner coefficient up to the outer exponent:

$$P(m(t))=\frac{\left(At^{1/2}\right)^{4}}{16}=\frac{A^{4}}{16}\,t^{2}$$

**Part 2: The model.**

$$m(t)=2\,t^{1/2} \tag{1}$$

$$P(m(t))=t^{2} \tag{2}$$

**Part 3: Solve.**

**1.** The calibration gives the coefficient:

$$3A=6 \quad \Rightarrow \quad A=2$$

**2.** The composed coefficient collapses, since $2^{4}/16=1$, leaving the pure square in $(2)$.

**3.** Scale factors run through the composed exponent, never through the inner one:

$$\frac{P(m(2t))}{P(m(t))}=2^{2}=4$$

**4.** Intermediate levels at the settings the statements use:

$$m(9)=6, \qquad m(25)=10$$

**5.** Inverting $(2)$ turns a target index into a throttle setting by a square root:

$$t^{2}=81 \quad \Rightarrow \quad t=9$$

The chain compresses a half and a fourth power into a clean square, so the index reacts far more sharply to the throttle than the mass flow does.

**Answer.** $A=2$ | $m(t)=2\sqrt{t}$ | $P\circ m=t^{2}$ | index $81$ at $t=9$`,
  },
  {
    id: "math-8-80",
    case_id: "MATH 8.80",
    title: "Two Shuttle Fare Timers Under a Wait Cap",
    context: String.raw`Two municipal shuttle apps quote wait time for a trip of distance $d>0$ kilometres. App L uses $L(d)=4d^{1/2}$ minutes and App Q uses $Q(d)=0.2d$ minutes. A service-level agreement caps wait at $20$ minutes. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The two apps quote the same wait at $d=400$.`,
      String.raw`Under the $20$-minute cap, App L can serve at most $d=25$.`,
      String.raw`Under the same cap, App Q can serve at most $d=100$.`,
      String.raw`For every $d>400$, App L is strictly faster than App Q.`,
      String.raw`Doubling distance doubles App L's quoted wait.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      String.raw`**A.** → True

A crossover is the distance at which the two timers quote the same wait, so set the two rules equal:

$$4d^{1/2}=0.2d$$

Divide both sides by $d^{1/2}$, which is positive on the stated domain, and the equation collapses to a single square root:

$$4=0.2\,d^{1/2} \quad \Rightarrow \quad d^{1/2}=20 \quad \Rightarrow \quad d=400$$

Check both quotes at that distance:

$$L(400)=4\cdot 20=80, \qquad Q(400)=0.2\cdot 400=80$$

Both apps promise $80$ minutes, so the tie is exact rather than approximate. Comparing coefficients alone would suggest App L is always the slower quote, since $4$ dwarfs $0.2$, but the coefficient governs only the short-distance picture while the exponent decides the long run. The apps agree at $d=400$, so the statement is True.`,
      String.raw`**B.** → True

App L's quote increases with distance, so a ceiling on wait translates directly into a ceiling on distance. Impose the agreement:

$$4d^{1/2}\le 20$$

Divide by the coefficient and then square, both steps legitimate because every quantity here is positive:

$$d^{1/2}\le 5 \quad \Rightarrow \quad d\le 25$$

The endpoint is attained exactly, which is what makes it the largest admissible trip:

$$L(25)=4\cdot 5=20$$

Any longer trip breaches the promise, since $L(36)=24$ minutes already sits above the cap. Leaving the answer at $d^{1/2}\le 5$ would report a square root rather than a distance, and the squaring step is what converts one into the other. App L can serve at most $25$ kilometres, so the statement is True.`,
      String.raw`**C.** → True

App Q's quote is a power function with exponent $1$, so inverting the same cap needs nothing more than a division:

$$0.2d\le 20 \quad \Rightarrow \quad d\le \frac{20}{0.2}=100$$

The endpoint is again attained exactly:

$$Q(100)=0.2\cdot 100=20$$

The two ceilings are worth setting side by side. App L is capped at $25$ kilometres and App Q at $100$, so the tighter constraint belongs to the app with the smaller exponent, because its large coefficient dominates on short trips. One app's ceiling does not bind the other: these are separate inversions of the same $20$ minute promise against different rules. App Q can serve out to $100$ kilometres, so the statement is True.`,
      String.raw`**D.** → True

Comparing two power functions is cleanest through their ratio, because the ratio is itself a power:

$$\frac{L(d)}{Q(d)}=\frac{4d^{1/2}}{0.2d}=20\,d^{-1/2}=\frac{20}{\sqrt{d}}$$

App L is strictly faster exactly when that ratio drops below $1$:

$$\frac{20}{\sqrt{d}}<1 \quad \Longleftrightarrow \quad \sqrt{d}>20 \quad \Longleftrightarrow \quad d>400$$

At $d=400$ the ratio equals $1$, matching the tie found earlier, and beyond that point it keeps falling because the exponent $-1/2$ is negative. A level check past the crossover confirms the ordering, since $L(900)=120$ minutes against $Q(900)=180$ minutes. The inequality holds at every distance above $400$, so the statement is True.`,
      String.raw`**E.** → False

Doubling the distance is an input multiplier of $k=2$, and App L's quote responds through its own exponent $1/2$:

$$\frac{L(2d)}{L(d)}=\frac{4(2d)^{1/2}}{4d^{1/2}}=2^{1/2}\approx 1.4142$$

The wait grows by about $41.4\%$, not by the $100\%$ a doubling would need. Levels from the crossover show the gap plainly:

$$L(400)=80, \qquad L(800)=4\sqrt{800}\approx 113.14$$

A doubling would demand $160$ minutes, and the model returns roughly $113$. Exact doubling is the signature of exponent $1$, and in this task that exponent belongs to App Q, whose quote does move from $80$ to $160$ minutes across the same two distances. The claim attaches App Q's scaling rule to App L, so the statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 80,
    solution_overview: String.raw`App L quotes $L(d)=4d^{1/2}$ minutes, App Q quotes $Q(d)=0.2d$ minutes, and the agreement caps wait at $20$ minutes.

**Part 1: Building the model.**

Let $d$ = trip distance in kilometres, $L$ and $Q$ = quoted waits in minutes. Both quotes are power functions of distance, one with exponent $1/2$ and one with exponent $1$. The larger exponent must win eventually, so the two quotes cross exactly once on $d>0$, and each quote inverts separately against the shared cap.

**1. Translate: the crossover.**

$$4d^{1/2}=0.2d$$

**2. Translate: the cap.** Both timers increase, so a ceiling on wait becomes a ceiling on distance:

$$4d^{1/2}\le 20, \qquad 0.2d\le 20$$

**Part 2: The model.**

$$\frac{L(d)}{Q(d)}=\frac{4d^{1/2}}{0.2d}=20\,d^{-1/2} \tag{1}$$

$$\frac{L(kd)}{L(d)}=k^{1/2} \tag{2}$$

**Part 3: Solve.**

**1.** Setting $(1)$ equal to $1$ locates the tie:

$$d^{1/2}=20 \quad \Rightarrow \quad d=400$$

**2.** Quotes at the crossover:

$$L(400)=80, \qquad Q(400)=80$$

**3.** Inverting each timer against the cap:

$$d\le 25 \text{ for App L}, \qquad d\le 100 \text{ for App Q}$$

**4.** The ranking past the tie, again from $(1)$:

$$20\,d^{-1/2}<1 \quad \Longleftrightarrow \quad d>400$$

**5.** Distance multipliers act through each exponent separately, so $(2)$ gives $2^{1/2}\approx 1.4142$ for App L while App Q's quote simply doubles. App L is the slower quote on short trips, which is why the cap binds it sooner, and the faster quote beyond $400$ kilometres.

**Answer.** crossover at $d=400$ | App L cap $d\le 25$ | App Q cap $d\le 100$ | App L faster for $d>400$`,
  },
  {
    id: "math-8-81",
    case_id: "MATH 8.81",
    title: "Wetland Evaporation Across Three Humidity Readings",
    context: String.raw`A field team records wetland evaporation $E$ millimetres per day against humidity deficit $h>0$. Three readings are $(h,E)=(1,20)$, $(4,40)$ and $(9,60)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`All three observations fit the single power law $E(h)=20h^{1/2}$.`,
      String.raw`The exponent recovered from the first two readings alone is $1$.`,
      String.raw`A linear model through the first two readings also hits the third.`,
      String.raw`Doubling the humidity deficit from any of the three readings doubles evaporation.`,
      String.raw`With exponent forced to $1$, the coefficient recovered from $(9,60)$ alone is $20$.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

A single power law must reproduce every reading with one coefficient and one exponent. Take the ratio of the first two readings, which cancels the coefficient and isolates the exponent:

$$\frac{E(4)}{E(1)}=\left(\frac{4}{1}\right)^{r}=\frac{40}{20} \quad \Rightarrow \quad 4^{r}=2 \quad \Rightarrow \quad r=\tfrac12$$

The first reading then fixes the coefficient, since $1^{1/2}=1$:

$$A\cdot 1=20 \quad \Rightarrow \quad A=20, \qquad E(h)=20h^{1/2}$$

The third reading played no part in the fitting, so it is a genuine test rather than a restatement. Evaluate the candidate there, using $9^{1/2}=3$:

$$E(9)=20\cdot 3=60$$

That is exactly the recorded value, so all three field points lie on the same square-root curve, so the statement is True.`,
      String.raw`**B.** → False

The ratio of the first two readings isolates the exponent, because the coefficient appears in both readings and cancels:

$$\frac{A\cdot 4^{r}}{A\cdot 1^{r}}=4^{r}=\frac{40}{20}=2$$

Solving $4^{r}=2$ amounts to asking which power of $4$ returns $2$, and the answer is the square root:

$$4^{1/2}=2 \quad \Rightarrow \quad r=\tfrac12$$

An exponent of $1$ would make evaporation proportional to the deficit, so quadrupling the deficit from $1$ to $4$ would quadruple evaporation from $20$ to $80$ millimetres per day. The team recorded $40$, which is only a doubling, and a doubling of output against a quadrupling of input is the signature of exponent $1/2$. The recovered exponent is $1/2$, so the statement is False.`,
      String.raw`**C.** → False

A straight line through two points is unique, so build it and then test the third reading against it. The slope is the rise over the run:

$$\frac{40-20}{4-1}=\frac{20}{3}$$

Anchoring at $(1,20)$ gives the line

$$E_{\text{lin}}(h)=20+\frac{20}{3}(h-1)$$

Evaluate that line at the third humidity deficit:

$$E_{\text{lin}}(9)=20+\frac{20}{3}\cdot 8=20+\frac{160}{3}=\frac{220}{3}\approx 73.33$$

The recorded value is $60$, so the line overshoots by more than $13$ millimetres per day. The direction of the error is no accident: a chord drawn across a square-root curve rises too steeply once it is extended past the second anchor. The line misses $(9,60)$, so the statement is False.`,
      String.raw`**D.** → False

Under the fitted law the exponent is $1/2$, so an input multiplier of $k=2$ produces the output multiplier

$$\frac{E(2h)}{E(h)}=2^{1/2}\approx 1.4142$$

Evaporation rises by about $41.4\%$, well short of doubling, and the multiplier is identical at every reading because the coefficient cancels out of the ratio. Check it at the first recorded deficit:

$$E(1)=20, \qquad E(2)=20\sqrt{2}\approx 28.28$$

A doubling would need $40$ millimetres per day, and that figure belongs to $h=4$, a quadrupling of the deficit rather than a doubling. The recorded data make the same point directly, since moving from $(1,20)$ to $(4,40)$ took four times the deficit to double the evaporation. Doubling the deficit does not double the output, so the statement is False.`,
      String.raw`**E.** → False

Forcing the exponent to $1$ turns the model into $E(h)=Ah$, and calibrating that on the third reading alone is an ordinary division:

$$A\cdot 9=60 \quad \Rightarrow \quad A=\frac{60}{9}=\frac{20}{3}\approx 6.67$$

The coefficient $20$ named in the claim belongs to the square-root fit, where it multiplies $h^{1/2}$ rather than $h$ itself, so the two numbers are attached to different rules. The forced linear law reproduces only the reading it was fitted to:

$$\frac{20}{3}\cdot 1\approx 6.67\neq 20, \qquad \frac{20}{3}\cdot 4\approx 26.67\neq 40$$

Both earlier readings are missed by a wide margin. The recovered coefficient is $20/3$, so the statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 81,
    solution_overview: String.raw`Three wetland readings are $(h,E)=(1,20)$, $(4,40)$ and $(9,60)$, and the question is whether one power law $E(h)=Ah^{r}$ carries all three.

**Part 1: Building the model.**

Let $h$ = humidity deficit, $E$ = evaporation in millimetres per day. A power law has two unknowns, so two readings determine it and the third becomes a test. Ratios are the efficient route, because dividing one reading by another cancels the coefficient and leaves the exponent alone.

**1. Translate: the ratio of the first two readings.**

$$\frac{A\cdot 4^{r}}{A\cdot 1^{r}}=\frac{40}{20} \quad \Rightarrow \quad 4^{r}=2$$

**2. Translate: the coefficient.** With the exponent known, the first reading fixes $A$:

$$A\cdot 1^{1/2}=20$$

**Part 2: The model.**

$$E(h)=20\,h^{1/2} \tag{1}$$

$$\frac{E(kh)}{E(h)}=k^{1/2} \tag{2}$$

**Part 3: Solve.**

**1.** Exponent and coefficient from the first two readings:

$$r=\tfrac12, \qquad A=20$$

**2.** The third reading is the test, and $(1)$ passes it:

$$E(9)=20\cdot 3=60$$

**3.** A line through the first two readings has slope $20/3$ and misses the third:

$$20+\frac{20}{3}\cdot 8=\frac{220}{3}\approx 73.33$$

**4.** Doubling the deficit uses $(2)$ with $k=2$:

$$2^{1/2}\approx 1.4142$$

**5.** Forcing the exponent to $1$ at the last reading alone gives $A=60/9=20/3$, a rival law that misses both earlier points. The data themselves show why: the deficit rises ninefold from $1$ to $9$ while evaporation only triples, and a ninefold input against a threefold output is exactly what an exponent of $1/2$ predicts.

**Answer.** $E(h)=20\sqrt{h}$ fits all three | exponent $1/2$ with coefficient $20$ | the line gives $220/3$ at $h=9$`,
  },
  {
    id: "math-8-82",
    case_id: "MATH 8.82",
    title: "Shade-Tree Cooling Benefit Against Upkeep Cost",
    context: String.raw`A city parks office models annual cooling benefit by $B(n)=12n^{1/2}$ thousand euros and annual upkeep by $C(n)=2n$ thousand euros, where $n>0$ is the number of thousand trees planted. Net benefit is $N(n)=B(n)-C(n)$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`At $n=9$, net benefit is $18$ thousand euros.`,
      String.raw`At $n=4$, net benefit is $16$ thousand euros.`,
      String.raw`At $n=1$, net benefit is $10$ thousand euros.`,
      String.raw`At $n=36$, net benefit is $0$.`,
      String.raw`Net benefit is positive at each of $n=1$, $n=4$ and $n=9$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      String.raw`**A.** → True

Net benefit is the difference of two schedules, so both have to be evaluated before subtracting. Take the square root first, since $9^{1/2}=3$:

$$B(9)=12\cdot 9^{1/2}=12\cdot 3=36, \qquad C(9)=2\cdot 9=18$$

The net is whatever survives the subtraction:

$$N(9)=36-18=18$$

Reporting the benefit of $36$ on its own would answer a different question, and so would reporting the upkeep of $18$ without noticing that the net happens to share its value at this planting. The coincidence is worth naming: at nine thousand trees the benefit is exactly twice the upkeep, which is why the net and the upkeep agree. Net benefit is $18$ thousand euros, so the statement is True.`,
      String.raw`**B.** → True

The same subtraction runs at the smaller planting. The square root of $4$ is $2$, so the two schedules read

$$B(4)=12\cdot 2=24, \qquad C(4)=2\cdot 4=8$$

and the net is the gap between them:

$$N(4)=24-8=16$$

The figure sits close to the net at nine thousand trees, which was $18$, even though this planting is less than half the size. That flatness is the exponent at work: quadrupling the planting from $1$ to $4$ only doubles the benefit while it quadruples the upkeep, so each extra tree adds less to the net than the one before it. Net benefit at four thousand trees is $16$ thousand euros, so the statement is True.`,
      String.raw`**C.** → True

At the smallest planting both schedules are easy to read off, since $1^{1/2}=1$:

$$B(1)=12\cdot 1=12, \qquad C(1)=2\cdot 1=2$$

Subtracting gives the net directly:

$$N(1)=12-2=10$$

The claim asks for the difference rather than for either schedule alone, and $10$ is that difference. The ratio of the two schedules here is $12/2=6$, the largest value it ever takes, because $B/C=6/\sqrt{n}$ falls steadily as the planting grows. Benefit therefore holds its widest relative lead at the smallest planting, even though the absolute net is smallest there. Net benefit is $10$ thousand euros, so the statement is True.`,
      String.raw`**D.** → True

At the break-even planting the two schedules meet exactly. Evaluate each of them, using $36^{1/2}=6$:

$$B(36)=12\cdot 6=72, \qquad C(36)=2\cdot 36=72$$

The net is therefore

$$N(36)=72-72=0$$

The same conclusion follows from the ratio without computing levels at all, since $B\ge C$ holds exactly when $6/\sqrt{n}\ge 1$, which means $n\le 36$. The planting of thirty-six thousand trees is the boundary case, where that inequality becomes an equality. Beyond it upkeep runs ahead and the net turns negative, for instance $N(49)=84-98=-14$. Net benefit is exactly zero at $n=36$, so the statement is True.`,
      String.raw`**E.** → True

The claim bundles three evaluations, and all three follow the same subtraction:

$$N(1)=12-2=10, \qquad N(4)=24-8=16, \qquad N(9)=36-18=18$$

Each of these is strictly greater than zero:

$$10>0, \qquad 16>0, \qquad 18>0$$

The general condition confirms that no intermediate plantings need checking. Net benefit is positive throughout $0<n<36$, because $B/C=6/\sqrt{n}$ exceeds $1$ on that whole range, and all three plantings in the trio sit far below the threshold. Zero first appears at thirty-six thousand trees, which is outside the listed set. Net benefit is positive at each of the three plantings, so the statement is True.`,
    ],
    difficulty_level: "1/5",
    sort_order: 82,
    solution_overview: String.raw`Cooling benefit is $B(n)=12n^{1/2}$ thousand euros, upkeep is $C(n)=2n$ thousand euros, and net benefit is $N(n)=B(n)-C(n)$.

**Part 1: Building the model.**

Let $n$ = thousands of trees planted, $B$ = annual cooling benefit, $C$ = annual upkeep, $N=B-C$ = net benefit, each in thousand euros. Benefit is a power with exponent $1/2$ and upkeep is a power with exponent $1$, so benefit leads at small plantings while upkeep must overtake it eventually.

**1. Translate: the net.**

$$N(n)=12n^{1/2}-2n$$

**2. Translate: the crossing.** Dividing by the positive quantity $2n^{1/2}$ reduces the comparison to one square root:

$$\frac{B(n)}{C(n)}=\frac{6}{n^{1/2}}$$

**Part 2: The model.**

$$N(n)=12\sqrt{n}-2n \tag{1}$$

$$B(n)\ge C(n) \quad \Longleftrightarrow \quad n\le 36 \tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the plantings the statements use:

$$1^{1/2}=1, \qquad 4^{1/2}=2, \qquad 9^{1/2}=3, \qquad 36^{1/2}=6$$

**2.** Benefits at those plantings:

$$12, \qquad 24, \qquad 36, \qquad 72$$

**3.** Upkeep at the same plantings:

$$2, \qquad 8, \qquad 18, \qquad 72$$

**4.** Netting the two schedules line by line:

$$N(1)=10, \qquad N(4)=16, \qquad N(9)=18, \qquad N(36)=0$$

**5.** Every net in the trio is strictly positive, and the net first reaches zero at the break-even planting of thirty-six thousand trees given by $(2)$. Past that point upkeep runs ahead, because its exponent is the larger of the two.

**Answer.** $N(1)=10$ | $N(4)=16$ | $N(9)=18$ | break-even at $N(36)=0$`,
  },
  {
    id: "math-8-83",
    case_id: "MATH 8.83",
    title: "Trail-Map Kiosk Demand Inverted from Price",
    context: String.raw`Weekly pamphlet demand at a trail-map kiosk follows $q(p)=A p^{-2}$ packs per week, where $p>0$ is price in euros. At $p=5$ euros the kiosk sold $80$ packs. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The demand law is $q(p)=2000p^{-2}$ packs per week.`,
      String.raw`At $p=10$ euros, demand is $20$ packs per week.`,
      String.raw`A target of $125$ packs per week requires price $p=4$ euros.`,
      String.raw`Doubling the price halves demand.`,
      String.raw`Weekly revenue $R(p)=p\,q(p)$ is the same at every price.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

The shape of the demand rule is supplied, so a single priced observation is enough to recover the coefficient. Substitute the recorded price, using $5^{-2}=1/25$:

$$q(5)=A\cdot 5^{-2}=\frac{A}{25}$$

The kiosk sold $80$ packs at that price, which turns the substitution into an equation:

$$\frac{A}{25}=80 \quad \Rightarrow \quad A=80\times 25=2000$$

The calibrated rule is $q(p)=2000p^{-2}$, and it reproduces the record, since $2000/25=80$ packs per week. The exponent had to be known in advance for one observation to suffice; a second pair would have been required to recover it. The demand law matches the claim, so the statement is True.`,
      String.raw`**B.** → True

Substituting the new price into the calibrated rule is a direct evaluation:

$$q(10)=2000\cdot 10^{-2}=\frac{2000}{100}=20$$

The scaling route gives the same figure without touching the coefficient again. The price moves from $5$ to $10$, an input multiplier of $2$, and demand responds through the exponent $-2$:

$$\frac{q(10)}{q(5)}=2^{-2}=\frac14, \qquad 80\times\frac14=20$$

Both routes land on $20$ packs per week. The drop is steep because the exponent has magnitude $2$: the kiosk loses three quarters of its sales when it doubles the price. Demand at ten euros is $20$ packs per week, so the statement is True.`,
      String.raw`**C.** → True

Solving for a price means inverting the rule, and the reciprocal of the exponent is what undoes it. Impose the target on the calibrated law:

$$2000p^{-2}=125 \quad \Rightarrow \quad p^{2}=\frac{2000}{125}=16$$

Take the positive root, since price is positive on the stated domain:

$$p=\sqrt{16}=4, \qquad q(4)=\frac{2000}{16}=125$$

The forward check returns the target exactly. Applying the exponent $-2$ a second time instead of its reciprocal would run demand forwards rather than solve for price, and it would produce a quantity where a euro figure is wanted. Because demand is strictly decreasing on $p>0$, no second price hits the same target. The required price is $4$ euros, so the statement is True.`,
      String.raw`**D.** → False

A doubling of price is an input multiplier of $k=2$, and demand responds through the exponent $-2$ rather than through $-1$:

$$\frac{q(2p)}{q(p)}=2^{-2}=\frac14$$

Only a quarter of the sales survive, a loss of $75\%$ rather than the $50\%$ asserted. Levels from the recorded observation show the same thing:

$$q(5)=80, \qquad q(10)=\frac{2000}{100}=20$$

Halving would have left $40$ packs per week, and the model gives $20$. An exact halving requires an exponent of $-1$, which in this task is the revenue exponent rather than the demand exponent, so the claim borrows the wrong rule from the same problem. Demand falls to a quarter, so the statement is False.`,
      String.raw`**E.** → False

Revenue multiplies price by quantity, and multiplying by $p$ adds one to the exponent:

$$R(p)=p\cdot 2000p^{-2}=2000\,p^{-1}=\frac{2000}{p}$$

A schedule that is the same at every price would need exponent $0$, and this one carries $-1$. Two evaluations settle the matter:

$$R(5)=\frac{2000}{5}=400, \qquad R(10)=\frac{2000}{10}=200$$

Revenue halves when the price doubles, and it tends to zero as price grows without bound. Revenue would have been flat only if demand had carried the exponent $-1$, since $p$ times $p^{-1}$ is a constant; the extra magnitude in $-2$ is exactly what costs the kiosk money when it raises the price. Revenue varies with price, so the statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 83,
    solution_overview: String.raw`Pamphlet demand is $q(p)=Ap^{-2}$ packs per week with the recorded pair $q(5)=80$, and weekly revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros, $q$ = packs sold per week, $R$ = weekly revenue in euros. The inverse-square exponent is supplied by the model, so one priced observation fixes the coefficient. Revenue then follows by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A\cdot 5^{-2}=80, \qquad 5^{-2}=\frac{1}{25}$$

**2. Translate: inverting a target.** A demand target becomes a price through the reciprocal exponent:

$$Ap^{-2}=q \quad \Longleftrightarrow \quad p=\left(\frac{A}{q}\right)^{1/2}$$

**Part 2: The model.**

$$q(p)=2000\,p^{-2} \tag{1}$$

$$R(p)=p\cdot 2000p^{-2}=2000\,p^{-1} \tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=80\times 25=2000$$

**2.** Demand at the prices the statements use:

$$q(5)=80, \qquad q(10)=20, \qquad q(4)=125$$

**3.** The inversion of a target of $125$ packs, from $(1)$:

$$p^{2}=\frac{2000}{125}=16 \quad \Rightarrow \quad p=4$$

**4.** The multiplier from a doubling of price:

$$\frac{q(2p)}{q(p)}=2^{-2}=\frac14$$

**5.** Revenue in $(2)$ falls as price rises, since $R(5)=400$ and $R(10)=200$, so it is not the same at every price. The exponents tell the whole story: demand carries $-2$, revenue carries $-1$, and only an exponent of $0$ would give a flat schedule.

**Answer.** $A=2000$ | $q(10)=20$ | target of $125$ packs at $p=4$ | $R(p)=2000/p$`,
  },
  {
    id: "math-8-84",
    case_id: "MATH 8.84",
    title: "Bike-Share Passes Under a Subsidy Price Index",
    context: String.raw`Weekly bike-share day-pass sales follow $q(p)=A p^{-3/2}$ when the pass price is $p>0$ euros. A pilot at $p=16$ sold $50$ passes. Policy indexes the pass by $p(s)=4s^{2/3}$ for a positive subsidy index $s$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The demand law is $q(p)=3200p^{-3/2}$.`,
      String.raw`Under the policy map, composed demand simplifies to $400/s$.`,
      String.raw`Tripling the subsidy index triples composed demand.`,
      String.raw`At $s=8$, composed demand is $100$ passes.`,
      String.raw`Doubling the posted pass price halves demand.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

The exponent is supplied by the model, so the pilot sale pins the coefficient. Evaluate the power by taking the square root first and then cubing:

$$16^{3/2}=\left(\sqrt{16}\right)^{3}=4^{3}=64, \qquad 16^{-3/2}=\frac{1}{64}$$

The pilot record therefore reads as a single equation in the coefficient:

$$\frac{A}{64}=50 \quad \Rightarrow \quad A=50\times 64=3200$$

The calibrated rule is $q(p)=3200p^{-3/2}$, and it reproduces the pilot, since $3200/64=50$ passes. The fractional exponent is where the arithmetic usually goes wrong: $16^{3/2}$ is $64$, not $24$ and not $4096$, because the denominator of the exponent takes a square root before the numerator cubes. The claimed law matches, so the statement is True.`,
      String.raw`**B.** → True

Composition substitutes the policy price into the demand rule. A power raised to a power multiplies the exponents, and the inner coefficient is raised on its own:

$$q(p(s))=3200\left(4s^{2/3}\right)^{-3/2}=3200\cdot 4^{-3/2}\cdot s^{(2/3)(-3/2)}$$

Evaluate the two pieces separately, writing $4=2^{2}$ to keep the fractional exponent clean:

$$4^{-3/2}=\left(2^{2}\right)^{-3/2}=2^{-3}=\frac18, \qquad \left(\tfrac23\right)\left(-\tfrac32\right)=-1$$

Multiplying the pieces through collapses the chain to ordinary inverse proportionality:

$$q(p(s))=3200\cdot\frac18\cdot s^{-1}=\frac{400}{s}$$

The composed rule is $400/s$, so the statement is True.`,
      String.raw`**C.** → False

Composed demand carries the exponent $-1$ in the subsidy index, so an input multiplier of $k=3$ produces the output multiplier

$$\frac{q(p(3s))}{q(p(s))}=3^{-1}=\frac13$$

Demand falls to a third rather than tripling. The two levels side by side show the direction:

$$q(p(2))=\frac{400}{2}=200, \qquad q(p(6))=\frac{400}{6}\approx 66.67$$

The sign of the composed exponent is what decides this, and it came out negative because the negative demand exponent survived the composition intact. Tripling the index would raise demand only if the composed exponent were positive, which would require the policy map to work in the opposite direction. Composed demand is divided by three, so the statement is False.`,
      String.raw`**D.** → False

Evaluate the composed rule at the stated subsidy index:

$$q(p(8))=\frac{400}{8}=50$$

The long route agrees and explains why the figure looks familiar. The policy map first sends the index to a price, using $8^{2/3}=\left(\sqrt[3]{8}\right)^{2}=4$:

$$p(8)=4\cdot 4=16, \qquad q(16)=\frac{3200}{64}=50$$

A subsidy index of $8$ therefore reproduces the pilot price of $16$ euros and with it the pilot sale of $50$ passes. The quoted figure of $100$ is exactly double the correct reading, which is what comes out of dropping the factor $4^{-3/2}=1/8$ and composing to $800/s$ instead. Composed demand at $s=8$ is $50$ passes, so the statement is False.`,
      String.raw`**E.** → False

Doubling the posted price acts through the demand exponent $-3/2$, not through $-1$:

$$\frac{q(2p)}{q(p)}=2^{-3/2}=\frac{1}{2\sqrt{2}}\approx 0.35355$$

About $35.4\%$ of the sales survive, a loss of roughly $64.6\%$ rather than a halving. Levels from the pilot confirm the size, using $32^{3/2}=\left(\sqrt{32}\right)^{3}\approx 181.02$:

$$q(16)=50, \qquad q(32)=\frac{3200}{181.02}\approx 17.68$$

Half of $50$ would be $25$ passes, and the model delivers about $17.7$. An exact halving needs an exponent of $-1$, which in this task is the composed exponent in the subsidy index rather than the exponent on the posted price. The fall is steeper than a halving, so the statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 84,
    solution_overview: String.raw`Day-pass demand is $q(p)=Ap^{-3/2}$ with the pilot record $q(16)=50$, and policy indexes the price by $p(s)=4s^{2/3}$.

**Part 1: Building the model.**

Let $p$ = pass price in euros, $q$ = passes sold per week, $s$ = subsidy index. The pilot fixes the coefficient. The policy map then sits inside the demand rule, and composing two powers multiplies their exponents while the inner coefficient is itself raised to the outer exponent.

**1. Translate: the pilot record.**

$$A\cdot 16^{-3/2}=50, \qquad 16^{3/2}=\left(\sqrt{16}\right)^{3}=64$$

**2. Translate: the composition.**

$$q(p(s))=A\left(4s^{2/3}\right)^{-3/2}=A\cdot 4^{-3/2}\cdot s^{(2/3)(-3/2)}$$

**Part 2: The model.**

$$q(p)=3200\,p^{-3/2} \tag{1}$$

$$q(p(s))=\frac{400}{s} \tag{2}$$

**Part 3: Solve.**

**1.** The pilot gives the coefficient:

$$A=50\times 64=3200$$

**2.** The two pieces of the composition:

$$4^{-3/2}=\frac18, \qquad \left(\tfrac23\right)\left(-\tfrac32\right)=-1$$

**3.** Multiplying them through produces $(2)$:

$$3200\cdot\frac18\cdot s^{-1}=\frac{400}{s}$$

**4.** Composed demand at the index the statements use, where $p(8)=16$ returns the pilot price:

$$q(p(8))=\frac{400}{8}=50$$

**5.** Multipliers act through whichever exponent applies. Tripling the subsidy index uses the composed exponent $-1$ and divides demand by $3$, while doubling the posted price uses the demand exponent $-3/2$ and multiplies demand by $2^{-3/2}\approx 0.3536$. Neither move is proportional.

**Answer.** $A=3200$ | $q\circ p=400/s$ | $q(p(8))=50$ | doubling $p$ multiplies demand by $2^{-3/2}$`,
  },
  {
    id: "math-8-85",
    case_id: "MATH 8.85",
    title: "Overnight Loaves Split Across Two Oven Lines",
    context: String.raw`A regional bakery must bake $30$ thousand loaves overnight and can split them between two oven lines. Line 1's energy-cost index is $C_1(q)=q^{2}$ and line 2's is $C_2(q)=q^{2}/4$, where $q$ is that line's own output in thousands of loaves. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`Sending all $30$ thousand loaves to line 2 costs $225$.`,
      String.raw`Splitting the order as $6$ on line 1 and $24$ on line 2 costs $180$.`,
      String.raw`An even split of $15$ and $15$ costs more than the $6$ and $24$ split.`,
      String.raw`Doubling line 2's own output multiplies its cost index by $4$.`,
      String.raw`Line 1's average cost index falls as its own output rises.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      String.raw`**A.** → True

Concentrating the whole order on one line means evaluating that line's rule at the full thirty thousand loaves:

$$C_2(30)=\frac{30^{2}}{4}=\frac{900}{4}=225$$

The comparison with the other corner is worth making, since line 1 carries the same exponent with four times the coefficient:

$$C_1(30)=30^{2}=900$$

Sending everything to line 1 would cost four times as much, which is exactly the ratio of the two coefficients. Neither corner is the cheapest plan available, because splitting the order lets both lines work at low output where the quadratic penalty is still small. The claim asks only about the line 2 corner, and that corner costs $225$, so the statement is True.`,
      String.raw`**B.** → True

Price the split line by line and then add the two figures. Line 1 takes six thousand loaves:

$$C_1(6)=6^{2}=36$$

Line 2 takes the remaining twenty-four thousand:

$$C_2(24)=\frac{24^{2}}{4}=\frac{576}{4}=144$$

Adding gives the cost of the plan:

$$36+144=180$$

The split is not an arbitrary choice. It equates the two marginal cost indices, since $2q_1=12$ at $q_1=6$ and $q_2/2=12$ at $q_2=24$, and equal marginals are the condition for a least-cost allocation when both cost curves rise. That makes $180$ the floor rather than merely one plan among many. The quoted figure matches, so the statement is True.`,
      String.raw`**C.** → True

Price the even split the same way, with fifteen thousand loaves on each line:

$$C_1(15)=15^{2}=225, \qquad C_2(15)=\frac{225}{4}=56.25$$

Adding those gives the plan's cost, which is then ranked against the other split:

$$225+56.25=281.25>180$$

The even split is more than a hundred index points worse. Symmetry would be optimal only if the two lines had identical cost rules, and they do not: line 2 is four times cheaper at any given output, so it should carry four times the load. The marginal indices at the even split confirm the imbalance, since $2\cdot 15=30$ on line 1 against $15/2=7.5$ on line 2. The even split costs more, so the statement is True.`,
      String.raw`**D.** → True

Line 2's cost index is a power function with exponent $2$, so an input multiplier of $k=2$ produces the output multiplier

$$\frac{C_2(2q)}{C_2(q)}=\frac{(2q)^{2}/4}{q^{2}/4}=2^{2}=4$$

The coefficient $1/4$ cancels out of the ratio, so the multiplier depends only on the load factor and the exponent. A level check inside the range of this order confirms it:

$$C_2(12)=\frac{144}{4}=36, \qquad C_2(24)=\frac{576}{4}=144$$

and $144=4\times 36$. The identical rule applies to line 1, whose exponent is also $2$, which is precisely why concentrating the order on either line is expensive. Doubling line 2's own output quadruples its cost index, so the statement is True.`,
      String.raw`**E.** → False

Average cost is a line's cost divided by its own output, and dividing a power by its own input subtracts one from the exponent:

$$\frac{C_1(q)}{q}=\frac{q^{2}}{q}=q$$

The remaining exponent is $1$, which is positive, so the average rises with output instead of falling. Two levels make the direction visible:

$$\frac{C_1(6)}{6}=6, \qquad \frac{C_1(15)}{15}=15$$

A falling average would need the remaining exponent to be negative, which in turn would need an original exponent below $1$, and line 1's is $2$. Rising average cost is exactly why the bakery gains by splitting the order rather than loading one line. Line 1's average cost index rises with output, so the statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 85,
    solution_overview: String.raw`Thirty thousand loaves are split between two oven lines with cost indices $C_1(q)=q^{2}$ and $C_2(q)=q^{2}/4$.

**Part 1: Building the model.**

Let $q_1$ and $q_2$ = thousands of loaves baked on each line, with $q_1+q_2=30$. Both cost indices are powers with exponent $2$, so each line's cost rises faster than its own load, and line 2 is the cheaper line at every output because its coefficient is a quarter of line 1's.

**1. Translate: the cost of a split.**

$$T(q_1)=q_1^{2}+\frac{(30-q_1)^{2}}{4}$$

**2. Translate: equal marginal indices.** The interior candidate equates the two marginal cost indices:

$$2q_1=\frac{q_2}{2} \quad \Longleftrightarrow \quad q_2=4q_1$$

**Part 2: The model.**

$$C_1(q)=q^{2}, \qquad C_2(q)=\frac{q^{2}}{4} \tag{1}$$

$$\frac{C_2(2q)}{C_2(q)}=2^{2}=4 \tag{2}$$

**Part 3: Solve.**

**1.** The interior candidate, from $q_2=4q_1$ together with $q_1+q_2=30$:

$$q_1=6, \qquad q_2=24$$

**2.** Costs of the plans the statements name:

$$C_2(30)=225, \qquad C_1(6)+C_2(24)=36+144=180$$

**3.** The even split, for comparison:

$$C_1(15)+C_2(15)=225+56.25=281.25$$

**4.** Ranking the three plans:

$$180<225<281.25$$

**5.** Scaling and averages both follow from the exponent $2$. Doubling a line's own output quadruples its cost index by $(2)$, while line 1's average cost index is $C_1(q)/q=q$, which rises with output because $2-1=1$ is still positive.

**Answer.** all on line 2 costs $225$ | the $6$ and $24$ split costs $180$ | the even split costs $281.25$`,
  },
  {
    id: "math-8-86",
    case_id: "MATH 8.86",
    title: "Museum Tickets: Point Elasticity Versus a Finite Rise",
    context: String.raw`Evening museum admissions follow $q(p)=A p^{-2}$ tickets when price is $p>0$ euros. At $p=10$ euros the desk sold $40$ tickets. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The point price elasticity of demand is constantly $-2$.`,
      String.raw`Raising price from $10$ to $12$ euros cuts demand by exactly $20\%$.`,
      String.raw`A $10\%$ price rise cuts demand by exactly $20\%$.`,
      String.raw`Weekly revenue $R(p)=p\,q(p)$ is maximized by raising price without bound.`,
      String.raw`Halving the price doubles demand.`,
    ],
    answer_key: [true, false, false, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

For any isoelastic rule $q=Ap^{r}$ the point elasticity is the exponent itself, because the coefficient cancels once the derivative is scaled by $p/q$:

$$\varepsilon(p)=\frac{p}{q}\cdot\frac{dq}{dp}=\frac{p}{Ap^{r}}\cdot rAp^{r-1}=r$$

Here the exponent is $-2$, so the elasticity takes the same value at every admissible price:

$$\varepsilon(p)=-2 \quad \text{for every } p>0$$

Nothing about the desk record enters the elasticity identity, since the coefficient plays no part in an elasticity. The record is still worth banking for the finite-move statements that follow, because $A\cdot 10^{-2}=40$ gives $A=4000$. The elasticity is constantly $-2$, so the statement is True.`,
      String.raw`**B.** → False

A move from $10$ to $12$ euros is a finite change, so it has to be priced through the demand rule rather than read off an elasticity. With $A=4000$ recovered from the desk record:

$$q(10)=\frac{4000}{100}=40, \qquad q(12)=\frac{4000}{144}\approx 27.778$$

The proportional fall is the gap divided by the starting level:

$$\frac{40-27.778}{40}\approx 0.30556=30.556\%$$

Demand drops by about $30.6\%$, not by the $20\%$ claimed. The figure $20\%$ is the size of the price rise itself, which is a different quantity, and the elasticity shortcut would give yet another wrong answer of $-2\times 20\%=-40\%$. The exact multiplier $1.2^{-2}\approx 0.6944$ sits between those two guesses, so the statement is False.`,
      String.raw`**C.** → False

A rise of $10\%$ means a price factor of $1.1$, and the exact demand response is that factor raised to the exponent:

$$\frac{q(1.1p)}{q(p)}=1.1^{-2}=\frac{1}{1.21}\approx 0.82645$$

Convert the surviving fraction into a percentage cut:

$$1-0.82645=0.17355\approx 17.36\%$$

The elasticity rule of thumb predicts $-2\times 10\%=-20\%$, but that linearizes a curved relationship and overstates the finite decline by more than two and a half percentage points. Levels agree with the exact figure, since $q(10)=40$ and $q(11)=4000/121\approx 33.06$, a loss of about $6.94$ tickets on a base of $40$. The exact cut is about $17.4\%$, so the statement is False.`,
      String.raw`**D.** → False

Revenue is price times quantity, and multiplying by $p$ raises the exponent by one:

$$R(p)=p\cdot 4000p^{-2}=4000\,p^{-1}=\frac{4000}{p}$$

The revenue exponent $-1$ is negative, so revenue falls at every price rather than peaking anywhere:

$$R(10)=400, \qquad R(20)=200, \qquad \lim_{p\to\infty}R(p)=0$$

Pushing the price up without bound drives revenue toward zero, so there is no maximum to reach in that direction. Any isoelastic demand rule with an exponent below $-1$ behaves this way, because the tickets lost outweigh the extra euros charged on the tickets that remain. Revenue is not maximized by raising the price without bound, so the statement is False.`,
      String.raw`**E.** → False

Halving the price is an input multiplier of $k=1/2$, and demand responds through the exponent $-2$:

$$\frac{q(p/2)}{q(p)}=\left(\frac12\right)^{-2}=2^{2}=4$$

Demand quadruples rather than doubling. Levels from the desk record confirm the size of the response:

$$q(10)=40, \qquad q(5)=\frac{4000}{25}=160$$

and $160=4\times 40$. A negative exponent turns a price cut into a demand gain, and a magnitude of $2$ turns it into a large one. An exact doubling would require an exponent of $-1$, which belongs to the revenue rule here rather than to demand. Halving the price multiplies demand by four, so the statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 86,
    solution_overview: String.raw`Evening admissions follow $q(p)=Ap^{-2}$ with the desk record $q(10)=40$, and point elasticity is set against exact finite price moves.

**Part 1: Building the model.**

Let $p$ = admission price in euros, $q$ = tickets sold. For an isoelastic rule $q=Ap^{r}$ the point elasticity equals the exponent $r$ at every price, while a finite price move of factor $k$ multiplies demand by $k^{r}$. The two devices agree only in the limit of vanishing changes.

**1. Translate: the desk record.**

$$A\cdot 10^{-2}=40 \quad \Rightarrow \quad A=40\times 100=4000$$

**2. Translate: the two methods.** For a price factor $k$ the shortcut and the exact rule return different numbers:

$$-2(k-1), \qquad k^{-2}-1$$

**Part 2: The model.**

$$q(p)=4000\,p^{-2} \tag{1}$$

$$R(p)=p\,q(p)=\frac{4000}{p} \tag{2}$$

**Part 3: Solve.**

**1.** Point elasticity is the exponent itself, at every price:

$$\varepsilon(p)=-2$$

**2.** Exact multipliers at the three factors the statements use:

$$1.2^{-2}\approx 0.6944, \qquad 1.1^{-2}\approx 0.82645, \qquad 0.5^{-2}=4$$

**3.** The matching exact percentage changes:

$$-30.56\%, \qquad -17.36\%, \qquad +300\%$$

**4.** Levels behind the first of those moves:

$$q(10)=40, \qquad q(12)=\frac{4000}{144}\approx 27.78$$

**5.** Revenue in $(2)$ carries exponent $-1$, so it falls steadily and tends to zero as price grows without bound, with $R(10)=400$ against $R(20)=200$. Constant elasticity describes the limiting response, never the arithmetic of a finite jump.

**Answer.** $\varepsilon=-2$ at every price | exact cuts of about $30.6\%$ and $17.4\%$ | $R(p)=4000/p$`,
  },
  {
    id: "math-8-87",
    case_id: "MATH 8.87",
    title: "Annealing Lehr Throughput Under a Mis-Scaled Coefficient",
    context: String.raw`A glass-annealing lehr's throughput follows $T(e)=A e^{3/2}$ trays per hour for belt setting $e>0$. A run at $e=4$ delivered $T=64$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`Under the calibrated law, $T(9)=216$.`,
      String.raw`If the coefficient were $25\%$ larger, every throughput reading would rise by exactly $25\%$.`,
      String.raw`The scale factor for doubling the belt setting does not depend on $A$.`,
      String.raw`Doubling the belt setting doubles throughput.`,
      String.raw`If the coefficient were $25\%$ larger, the scale factor $T(2e)/T(e)$ would itself become $25\%$ larger.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      String.raw`**A.** → True

The recorded run fixes the coefficient once the exponent is known. Evaluate the power by taking the square root first and then cubing:

$$4^{3/2}=\left(\sqrt{4}\right)^{3}=2^{3}=8 \quad \Rightarrow \quad 8A=64 \quad \Rightarrow \quad A=8$$

The calibrated rule is $T(e)=8e^{3/2}$. Evaluate it at the requested setting, using $9^{3/2}=\left(\sqrt{9}\right)^{3}=27$:

$$T(9)=8\cdot 27=216$$

The scaling rule agrees without recomputing any coefficient, since the setting rises by a factor of $9/4$ and $(9/4)^{3/2}=(3/2)^{3}=27/8$, so $64\times 27/8=216$. Both routes land on the same reading. Throughput at belt setting $9$ is $216$ trays per hour, so the statement is True.`,
      String.raw`**B.** → True

The coefficient enters the rule as a multiplying factor, so scaling it scales every output by the same amount. Write the counterfactual rule with the coefficient enlarged by a quarter:

$$T_{c}(e)=1.25A\,e^{3/2}=1.25\,T(e)$$

The shape factor $e^{3/2}$ is untouched, so the relationship holds at every belt setting at once rather than at one convenient point. Two levels show it:

$$T_{c}(4)=1.25\cdot 64=80, \qquad T_{c}(9)=1.25\cdot 216=270$$

Each sits exactly $25\%$ above the calibrated figure, since $80/64=1.25$ and $270/216=1.25$. The uniformity is the point: a mis-scaled coefficient lifts the whole curve without tilting it. Every reading rises by exactly $25\%$, so the statement is True.`,
      String.raw`**C.** → True

A scale factor is a ratio of two model values, and the coefficient appears in both of them:

$$\frac{T(2e)}{T(e)}=\frac{A(2e)^{3/2}}{A\,e^{3/2}}=\frac{(2e)^{3/2}}{e^{3/2}}=2^{3/2}$$

Whatever $A$ happens to be, it cancels before the exponent is applied, so the factor is pinned by the exponent alone:

$$2^{3/2}=2\sqrt{2}\approx 2.8284$$

The calibrated rule illustrates the same figure, since $T(4)=64$ and $T(8)=8\cdot 16\sqrt{2}\approx 181.02$, whose ratio is about $2.828$. The cancellation is not special to $A=8$: it holds for any positive coefficient, including one a quarter larger. The doubling factor does not depend on $A$, so the statement is True.`,
      String.raw`**D.** → False

Doubling the belt setting is an input multiplier of $k=2$, and throughput responds through the exponent $3/2$:

$$\frac{T(2e)}{T(e)}=2^{3/2}=2\sqrt{2}\approx 2.8284$$

Throughput nearly triples rather than doubling. A level check from the recorded run makes the size concrete, using $8^{3/2}=\left(\sqrt{8}\right)^{3}=16\sqrt{2}$:

$$T(8)=8\cdot 16\sqrt{2}=128\sqrt{2}\approx 181.02, \qquad \frac{181.02}{64}\approx 2.8284$$

A doubling would have given $128$ trays per hour, and the model returns about $181$. Exact doubling of output is the signature of exponent $1$, and any exponent above $1$ must overshoot it. Doubling the setting multiplies throughput by $2\sqrt{2}$, so the statement is False.`,
      String.raw`**E.** → False

Enlarging the coefficient lifts the numerator and the denominator of a scale factor by the same amount, so the quotient cannot move. Write the counterfactual rule as $T_{c}(e)=1.25\,T(e)$ and form its doubling factor:

$$\frac{T_{c}(2e)}{T_{c}(e)}=\frac{1.25\,T(2e)}{1.25\,T(e)}=\frac{T(2e)}{T(e)}=2^{3/2}$$

Levels confirm the cancellation at the settings already used:

$$T_{c}(4)=80, \qquad T_{c}(8)\approx 226.27, \qquad \frac{226.27}{80}\approx 2.8284$$

The factor stays at $2\sqrt{2}$, exactly as it was before the coefficient moved. A quarter added to $A$ changes every level by a quarter and every ratio not at all, which is the distinction the whole task is built on. The scale factor is unchanged, so the statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 87,
    solution_overview: String.raw`Lehr throughput is $T(e)=Ae^{3/2}$ trays per hour with the recorded run $T(4)=64$.

**Part 1: Building the model.**

Let $e$ = belt setting, $T$ = throughput in trays per hour. The exponent is supplied, so the recorded run fixes the coefficient. Two very different questions then follow: levels, which depend on the coefficient, and scale factors, in which the coefficient cancels.

**1. Translate: the recorded run.**

$$A\cdot 4^{3/2}=64, \qquad 4^{3/2}=\left(\sqrt{4}\right)^{3}=8$$

**2. Translate: a mis-scaled coefficient.** Replacing $A$ by $cA$ multiplies every level by $c$ and leaves every ratio untouched:

$$\frac{cA(ke)^{3/2}}{cA\,e^{3/2}}=k^{3/2}$$

**Part 2: The model.**

$$T(e)=8\,e^{3/2} \tag{1}$$

$$\frac{T(ke)}{T(e)}=k^{3/2} \tag{2}$$

**Part 3: Solve.**

**1.** The calibration:

$$8A=64 \quad \Rightarrow \quad A=8$$

**2.** Levels at the settings the statements use, with $9^{3/2}=27$:

$$T(4)=64, \qquad T(9)=8\cdot 27=216$$

**3.** A coefficient enlarged by a quarter scales every level by that same quarter:

$$1.25\cdot 64=80, \qquad 1.25\cdot 216=270$$

**4.** The doubling factor from $(2)$, which no coefficient can move:

$$2^{3/2}=2\sqrt{2}\approx 2.8284$$

**5.** Levels and ratios therefore answer a mis-scaled coefficient in opposite ways. Every reading moves by exactly the percentage the coefficient moves, while every scale factor stays fixed, because $A$ appears once in the numerator and once in the denominator.

**Answer.** $A=8$ | $T(9)=216$ | a $25\%$ larger coefficient raises every level by $25\%$ | doubling factor $2\sqrt{2}$`,
  },
];

const EXPECTED_TRUE_COUNTS = [2, 4, 1, 5, 3, 2, 4, 1, 3];
const EXPECTED_DIFFICULTIES = ["5/5", "2/5", "4/5", "1/5", "3/5", "5/5", "2/5", "4/5", "3/5"];
const OVERVIEW_MIN = 1440;
const OVERVIEW_MAX = 1800;
const EXPLANATION_MIN = 506;

if (process.argv[1] && fileURLToPath(import.meta.url) === fileURLToPath(new URL("file:///" + process.argv[1].replaceAll("\\", "/")))) {
  const actual = BATCH.map((task) => task.answer_key.filter(Boolean).length);
  const validShapes = BATCH.every(
    (task, index) =>
      task.id === "math-8-" + (index + 79) &&
      task.case_id === "MATH 8." + (index + 79) &&
      task.sort_order === index + 79 &&
      task.statements.length === 5 &&
      task.answer_key.length === 5 &&
      task.tactical_explanations.length === 5 &&
      task.difficulty_level === EXPECTED_DIFFICULTIES[index] &&
      task.context.trimEnd().endsWith("Evaluate each statement. Mark it TRUE or FALSE.") &&
      !(("sub" + "section") in task),
  );
  const countsMatch = actual.every((count, index) => count === EXPECTED_TRUE_COUNTS[index]);

  const overviewLengths = BATCH.map((task) => task.solution_overview.length);
  const overviewsOk = BATCH.every(
    (task) =>
      task.solution_overview.length >= OVERVIEW_MIN &&
      task.solution_overview.length <= OVERVIEW_MAX &&
      task.solution_overview.includes("**Part 1:") &&
      task.solution_overview.includes("**Part 2:") &&
      task.solution_overview.includes("**Part 3:") &&
      task.solution_overview.includes("**Answer.**"),
  );

  const explanationsOk = BATCH.every((task) =>
    task.tactical_explanations.every((text, index) => {
      const letter = "ABCDE"[index];
      const verdict = task.answer_key[index] ? "True" : "False";
      return (
        text.length >= EXPLANATION_MIN &&
        text.startsWith("**" + letter + ".** \u2192 " + verdict + "\n") &&
        text.trimEnd().endsWith("so the statement is " + verdict + ".") &&
        (text.match(/\$\$/g) || []).length >= 4
      );
    }),
  );

  const styleOk = BATCH.every((task) => {
    const blob = [task.context, task.solution_overview, ...task.statements, ...task.tactical_explanations].join("\n");
    return !blob.includes("\u2014") && !blob.includes("This " + "claim") && !blob.includes("$" + "{");
  });

  console.log("tasks=" + BATCH.length);
  console.log("true_counts=" + actual.join(","));
  console.log("difficulties=" + BATCH.map((t) => t.difficulty_level).join(","));
  console.log("overview_lengths=" + overviewLengths.join(","));
  console.log("explanation_min=" + Math.min(...BATCH.flatMap((t) => t.tactical_explanations.map((e) => e.length))));
  console.log("shapes_ok=" + validShapes);
  console.log("counts_ok=" + countsMatch);
  console.log("overviews_ok=" + overviewsOk);
  console.log("explanations_ok=" + explanationsOk);
  console.log("style_ok=" + styleOk);

  if (BATCH.length !== 9 || !validShapes || !countsMatch || !overviewsOk || !explanationsOk || !styleOk) {
    process.exitCode = 1;
  }
}
