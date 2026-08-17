/**
 * Chapter 8 Power Functions - new tasks MATH 8.51-8.60 (add-only batch).
 * Calibration, inversion, scaling and composition tasks in the MATH 13.18 explanation format.
 * No subsection field: the bank stays a single ordered list.
 */
export const BATCH = [
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
];
