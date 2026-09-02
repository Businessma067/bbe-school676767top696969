export const CH8_TRIALS_11_15 = [
  {
    id: `math-8-11`,
    case_id: `MATH 8.11`,
    title: `Marina's Vegetable Plot`,
    context: `Marina waters a vegetable plot. Harvest in kilograms follows $Y(h)=A h^{r}$ after $h>0$ hours, with both constants unknown. Eight hours give four kilograms, and twenty-seven hours give six. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The exponent is smaller than one, so harvest grows more slowly than watering time.`,
      `If she doubles the watering time, she doubles the harvest.`,
      `To double the four-kilogram harvest she must more than double the watering time.`,
      `An extra hour adds more crop after twenty-seven hours of watering than it does after eight.`,
      `The watering time needed for a given harvest is itself a power function of that harvest.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Neither constant is given, so the two harvests have to supply the exponent first. Their ratio cancels $A$:

$$
\\frac{Y(27)}{Y(8)}=\\frac{6}{4}=\\frac{3}{2}=\\left(\\frac{27}{8}\\right)^{r} \\qquad \\frac{27}{8}=\\left(\\frac{3}{2}\\right)^{3} \\qquad r=\\frac{1}{3}
$$

One third is smaller than one, so harvest grows more slowly than watering time, and the statement is True.`,
      `**B.** → False

Doubling the hours multiplies the harvest by $2^{r}$, and $r$ comes from the logged ratio.

$$
\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r} \\qquad r=\\frac{1}{3} \\qquad \\frac{Y(2h)}{Y(h)}=2^{\\frac{1}{3}}
$$

The cube root of two is not two. The harvest rises by about a quarter, not by a factor of two, so the statement is False.`,
      `**C.** → True

Doubling the recorded harvest of four kilograms is a scale factor $k$ on the hours, with $k^{r}=2$. The logged ratio gives $r=\\frac{1}{3}$, so

$$
k^{\\frac{1}{3}}=2 \\qquad k=8
$$

She would need eight times the watering, not twice. That is more than a doubling, so the statement is True.`,
      `**D.** → False

An extra hour adds the derivative of the recovered law. From the two harvests, $r=\\frac{1}{3}$ and $A\\cdot 8^{\\frac{1}{3}}=4$, so $A=2$ and

$$
Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}} \\qquad Y'(8)=\\frac{2}{3}\\cdot\\frac{1}{4}=\\frac{1}{6} \\qquad Y'(27)=\\frac{2}{3}\\cdot\\frac{1}{9}=\\frac{2}{27}
$$

Because $\\frac{1}{6}>\\frac{2}{27}$, the extra hour adds more after eight hours than after twenty-seven, so the statement is False.`,
      `**E.** → True

Inverting a power function with a nonzero exponent produces another power function. The logged ratio gives $r=\\frac{1}{3}$ and $A=2$, so

$$
Y=2h^{\\frac{1}{3}} \\qquad h=\\left(\\frac{Y}{2}\\right)^{3}
$$

Hours are a cube of the harvest, which is a power function, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 11,
    solution_overview: `Harvest follows $Y(h)=Ah^{r}$ for $h>0$ hours. Eight hours give $4$ kg and twenty-seven hours give $6$ kg.

**Part 1: Building the model.**

Let $h$ = watering hours and $Y$ = harvest. Two unknowns need both observations. The ratio cancels $A$ and isolates $r$; the eight-hour level then pins $A$.

**1. Translate: the ratio.**

$$\\frac{6}{4}=\\left(\\frac{27}{8}\\right)^{r}$$

**2. Translate: the eight-hour level.**

$$A\\cdot 8^{r}=4$$

**Part 2: The model.**

$$r=\\frac{1}{3} \\tag{1}$$

$$Y(h)=2h^{\\frac{1}{3}} \\tag{2}$$

**Part 3: Solve.**

**1.** Because $r<1$, doubling the hours does not double the harvest, and doubling the harvest needs the hour-factor $8$.

**2.** The derivative $Y'(h)$ falls with $h$, so an extra hour adds more at eight hours than at twenty-seven.

**3.** The inverse $h=(Y/2)^{3}$ is a power function.

**Answer.** $A=2$ | $r=\\frac{1}{3}$ | hour-factor $8$ to double yield`,
  },
  {
    id: `math-8-12`,
    case_id: `MATH 8.12`,
    title: `A Helpdesk Wait That Falls With the Team`,
    context: `A helpdesk's average wait in minutes follows $W(n)=A n^{-\\frac{1}{2}}$ when $n>0$ agents are on duty. With four agents on the shift, callers wait twenty-four minutes. The manager will not staff more than fifty agents. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Quadrupling the recorded team halves the wait.`,
      `Even a full shift of fifty cannot get the wait under five minutes.`,
      `Doubling the recorded team halves the wait.`,
      `A six-minute wait would need more agents than the manager allows.`,
      `If the team keeps growing, the wait eventually becomes negative.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Quadrupling the team multiplies the wait by $4$ to the power of the exponent, and the coefficient cancels.

$$
\\frac{W(4n)}{W(n)}=4^{-\\frac{1}{2}}=\\frac{1}{2}
$$

A check from the recorded wait: $A\\cdot 4^{-\\frac{1}{2}}=24$ gives $A=48$, so $W(16)=12$, which is half of twenty-four minutes. The wait halves, so the statement is True.`,
      `**B.** → True

Five minutes at fifty agents is a level of the recovered law. From $A/2=24$ one has $A=48$, so

$$
W(50)=\\frac{48}{\\sqrt{50}}=\\frac{24\\sqrt{2}}{5}\\approx 6.79
$$

That wait is still above five minutes, so a full shift cannot get under five, and the statement is True.`,
      `**C.** → False

Doubling the recorded team multiplies the wait by $2$ to the power of the exponent. From $A=48$,

$$
W(8)=\\frac{48}{\\sqrt{8}}=12\\sqrt{2}\\approx 16.97 \\qquad \\frac{1}{2}W(4)=12
$$

The wait falls from twenty-four minutes to about seventeen, not to twelve. The factor is $1/\\sqrt{2}$, not one half, so the statement is False.`,
      `**D.** → True

A six-minute wait is an inversion of the recovered law, which then has to be checked against the cap. From $A=48$,

$$
\\frac{48}{\\sqrt{n}}=6 \\qquad \\sqrt{n}=8 \\qquad n=64
$$

Sixty-four agents exceed fifty, so a six-minute wait needs more staff than the manager allows, and the statement is True.`,
      `**E.** → False

A negative exponent sends the wait towards zero from above, never through zero. With $A=48$,

$$
W(n)=\\frac{48}{\\sqrt{n}}>0
$$

for every $n>0$, and $W(n)\\to 0$ as the team grows. The wait stays positive, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `Wait follows $W(n)=A n^{-\\frac{1}{2}}$ minutes for $n>0$ agents. Four agents produce a twenty-four minute wait, and staffing cannot exceed fifty.

**Part 1: Building the model.**

Let $n$ = agents and $W$ = wait. The exponent is given, so the four-agent observation fixes $A$. The cap constrains inversions.

**1. Translate: the recorded wait.**

$$A\\cdot 4^{-\\frac{1}{2}}=24$$

**Part 2: The model.**

$$W(n)=48 n^{-\\frac{1}{2}} \\tag{1}$$

$$n\\le 50 \\tag{2}$$

**Part 3: Solve.**

**1.** Quadrupling halves the wait; doubling only multiplies it by $1/\\sqrt{2}$.

**2.** $W(50)\\approx 6.79$, still above five minutes. A six-minute wait needs $n=64$, which violates (2).

**3.** The wait approaches $0$ but never turns negative.

**Answer.** $A=48$ | quadrupling halves wait | $n=64$ for six minutes`,
  },
  {
    id: `math-8-13`,
    case_id: `MATH 8.13`,
    title: `Leah's Well and Omar's Well`,
    context: `Leah and Omar pump at the same depth $d>0$ metres. Leah's well follows a square-root law $Q_{L}(d)=a d^{\\frac{1}{2}}$, and at nine metres she gets twelve litres a minute. Omar's well follows $Q_{O}(d)=k d^{\\frac{3}{2}}$, and at four metres he gets four litres a minute. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `At Omar's recorded depth, Leah still brings up more water than he does.`,
      `Omar overtakes Leah before they reach ten metres.`,
      `Four times as deep as Omar's record, he already yields more than three times what Leah does.`,
      `Once Omar is ahead, Leah can catch him by going still deeper.`,
      `The two wells together still follow a single power of depth.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Leah's nine-metre reading recovers $a$, and Omar's four-metre reading recovers $k$, before either well can be compared at Omar's depth.

$$
a\\cdot 3=12 \\qquad a=4 \\qquad k\\cdot 8=4 \\qquad k=\\frac{1}{2}
$$

At four metres, $Q_{L}(4)=8$ and $Q_{O}(4)=4$. Leah still brings up more, so the statement is True.`,
      `**B.** → True

Overtaking is the positive crossing of the two recovered laws. With $a=4$ and $k=\\frac{1}{2}$, cancel a shared square root:

$$
4d^{\\frac{1}{2}}=\\frac{1}{2}d^{\\frac{3}{2}} \\qquad d=8
$$

Eight metres is shallower than ten, so Omar overtakes before ten metres, and the statement is True.`,
      `**C.** → False

Four times Omar's recorded depth is sixteen metres, a ratio of the two recovered laws.

$$
Q_{O}(16)=\\frac{1}{2}\\cdot 64=32 \\qquad Q_{L}(16)=4\\cdot 4=16
$$

The ratio is two, not more than three. He yields twice Leah, not more than three times, so the statement is False.`,
      `**D.** → False

A second catching-up would be a second positive root of $Q_{O}=Q_{L}$. With the recovered coefficients the ratio is

$$
\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}
$$

Leah never catches up, so the statement is False.`,
      `**E.** → False

The combined flow is the sum of the two recovered power functions.

$$
Q_{L}(d)+Q_{O}(d)=4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}
$$

A sum of distinct powers is not itself a power function, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 13,
    solution_overview: `Leah yields $a d^{\\frac{1}{2}}$ with twelve litres a minute at nine metres, and Omar yields $k d^{\\frac{3}{2}}$ with four litres a minute at four metres.

**Part 1: Building the model.**

Let $d$ = pump depth. Each well has a known exponent and one level, so each coefficient is recoverable.

**1. Translate: Leah's level.** $3a=12$.

**2. Translate: Omar's level.** $8k=4$.

**Part 2: The model.**

$$Q_{L}(d)=4d^{\\frac{1}{2}}, \\qquad Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}} \\tag{1}$$

$$\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8} \\tag{2}$$

**Part 3: Solve.**

**1.** At Omar's depth Leah leads, $8$ against $4$. They meet at $d=8$, before ten metres.

**2.** At four times Omar's depth the ratio is $2$, not more than $3$. Ratio (2) crosses $1$ only once, and the sum is not a single power.

**Answer.** $a=4$ | $k=\\frac{1}{2}$ | crossing at $d=8$ | ratio $2$ at four times Omar's depth`,
  },
  {
    id: `math-8-14`,
    case_id: `MATH 8.14`,
    title: `Nora's Print Shop`,
    context: `Nora's bill for a run of $n>0$ copies is a fixed setup plus a square-root charge, $C(n)=F+A n^{\\frac{1}{2}}$. Sixteen copies cost two hundred and fifty euros, and sixty-four copies cost four hundred and fifty. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `Because of the setup, the bill is not a power function of the run.`,
      `A longer run is cheaper per copy.`,
      `If she prints enough copies, the total bill starts to fall.`,
      `Quadrupling a run of twenty-five copies doubles that bill.`,
      `Thirty-six copies cost less than the sixty-four-copy invoice.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

Two recorded bills are two equations in $F$ and $A$. Subtracting cancels the setup.

$$
F+4A=250 \\qquad F+8A=450 \\qquad 4A=200 \\qquad A=50 \\qquad F=50
$$

The setup is fifty euros, not zero, so

$$
C(n)=50+50\\sqrt{n}
$$

is not a power of $n$, so the statement is True.`,
      `**B.** → True

Cost per copy is the recovered bill divided by the run. With $F=50$ and $A=50$,

$$
\\frac{C(n)}{n}=\\frac{50}{n}+50 n^{-\\frac{1}{2}}
$$

Both terms fall as $n$ rises, so a longer run is cheaper per copy, and the statement is True.`,
      `**C.** → False

The total bill is a positive setup plus a positive multiple of $\\sqrt{n}$, which itself rises with $n$. With the recovered constants,

$$
C(n)=50+50\\sqrt{n}
$$

is strictly increasing. Printing more copies always raises the bill. It never starts to fall, so the statement is False.`,
      `**D.** → False

Quadrupling twenty-five copies is a scale test on the recovered rule. With $F=50$ and $A=50$,

$$
C(25)=50+50\\cdot 5=300 \\qquad C(100)=50+50\\cdot 10=550 \\qquad 2\\cdot 300=600
$$

Five hundred and fifty is not six hundred. The setup is paid once and does not scale, so the statement is False.`,
      `**E.** → True

Thirty-six copies give a whole square root, once both constants are known. With $F=50$ and $A=50$,

$$
C(36)=50+50\\cdot 6=350
$$

The sixty-four-copy invoice is four hundred and fifty euros, and $350<450$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `The bill is $C(n)=F+A n^{\\frac{1}{2}}$ for $n>0$ copies, with $C(16)=250$ and $C(64)=450$.

**Part 1: Building the model.**

Let $n$ = copies and $C$ = euros. Two unknowns need both invoices. Subtracting isolates $A$; either invoice then pins $F$.

**1. Translate: the two invoices.**

$$F+4A=250, \\qquad F+8A=450$$

**Part 2: The model.**

$$C(n)=50+50\\sqrt{n} \\tag{1}$$

**Part 3: Solve.**

**1.** The setup $F=50$ keeps (1) from being a power of $n$. Unit cost falls, but the total bill keeps rising.

**2.** Quadrupling $25$ copies takes the bill from $300$ to $550$, not to $600$. Thirty-six copies cost $350$, below the sixty-four-copy invoice.

**Answer.** $F=50$ | $A=50$ | $C(36)=350<C(64)$`,
  },
  {
    id: `math-8-15`,
    case_id: `MATH 8.15`,
    title: `A Refinery Against a Linear Quote`,
    context: `A refinery takes ore of purity $u>0$ and makes metal $M(u)=A u^{\\frac{3}{2}}$ tonnes. An audit records that raising purity from nine to sixteen increased metal output by two hundred and ninety-six tonnes. Metal is then turned into alloy strength $S=\\frac{1}{2}M^{\\frac{2}{3}}$. A rival mill quotes strength directly as $1.8u+5$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `After both stages, the refinery's strength is proportional to purity.`,
      `On fairly lean ore of purity ten, the rival still looks better.`,
      `The two quotes never meet.`,
      `Once the refinery pulls ahead, it stays ahead.`,
      `The rival's quote is a power function of purity.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The metal coefficient is recovered from the audited gain, which is a difference of two outputs, before the strength stage can be composed.

$$
9^{\\frac{3}{2}}=27 \\qquad 16^{\\frac{3}{2}}=64 \\qquad A(64-27)=296 \\qquad A=8
$$

Substitute $M(u)=8u^{\\frac{3}{2}}$ into the strength stage:

$$
S(u)=\\frac{1}{2}\\bigl(8u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}=\\frac{1}{2}\\cdot 4\\,u=2u
$$

Strength is twice purity, which is proportionality, so the statement is True.`,
      `**B.** → True

Purity ten is a comparison of the collapsed chain with the rival line, so $A$ has to be recovered first. The audited jump between the shape factors $64$ and $27$ gives $A=8$ and $S(u)=2u$, hence

$$
S(10)=20 \\qquad 1.8\\cdot 10+5=23
$$

The rival quotes higher, so the rival still looks better on that ore, and the statement is True.`,
      `**C.** → False

Agreement is the crossing of $S(u)=2u$ with the rival line, after $A$ has been recovered from the audit.

$$
2u=1.8u+5 \\qquad 0.2u=5 \\qquad u=25
$$

They do meet, at purity twenty-five, so the statement is False.`,
      `**D.** → True

Past the crossing the chain has the steeper slope. From $2u=1.8u+5$ one has $u=25$, and the gap is

$$
2u-(1.8u+5)=0.2u-5
$$

which is positive for every $u>25$. Once the refinery is ahead it stays ahead, so the statement is True.`,
      `**E.** → False

A power function of purity cannot carry a nonzero intercept. The rival quotes

$$
1.8u+5
$$

The extra constant term stops this from being a power of $u$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 15,
    solution_overview: `Metal is $M(u)=A u^{\\frac{3}{2}}$, and raising purity from nine to sixteen added $296$ tonnes. Strength is $S=\\frac{1}{2}M^{\\frac{2}{3}}$. The rival quotes $1.8u+5$.

**Part 1: Building the model.**

Let $u$ = purity. The audit is a difference of two metal outputs, which recovers $A$. The strength stage then composes with that law. The rival is affine.

**1. Translate: the audited gain.**

$$A\\bigl(16^{\\frac{3}{2}}-9^{\\frac{3}{2}}\\bigr)=296$$

**2. Translate: the composition.**

$$S(u)=\\frac{1}{2}\\bigl(A u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}$$

**Part 2: The model.**

$$A=8, \\qquad S(u)=2u \\tag{1}$$

$$2u=1.8u+5 \\tag{2}$$

**Part 3: Solve.**

**1.** The chain is proportional to purity. At purity ten the rival leads. Equation (2) meets at $u=25$, after which the chain leads for good.

**2.** The rival's intercept keeps it from being a power of $u$.

**Answer.** $A=8$ | $S(u)=2u$ | crossing at $u=25$ | rival is not a power`,
  },
];
