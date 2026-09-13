/**
 * Mock Exam 1 — Mathematics (original exam-format items).
 * One hard task per syllabus chapter 1–13. Not copied from past papers;
 * style mirrors WU BBE written items (scenario + five true/false claims).
 */

export type MockMathDraft = {
  chapter: number;
  topic: string;
  stem: string;
  tablesMarkdown?: string;
  solutionOverview?: string;
  statements: { text: string; isTrue: boolean; explanation: string }[];
};

export const MOCK_EXAM_1_MATH: MockMathDraft[] = [
  {
    chapter: 1,
    topic: "Logic & sets",
    stem: `Let $U=\\{1,2,3,4,5,6,7,8\\}$. Define $A=\\{2,3,5,7\\}$, $B=\\{x\\in U: x\\text{ is even}\\}$, and $C=\\{5,6,7,8\\}$. For $x\\in U$, let $Q(x)$ mean “if $x\\in A$, then $x\\notin B$”. Decide whether each statement is true or false.`,
    solutionOverview: `Evens in $U$ give $B=\\{2,4,6,8\\}$. Then $A\\cap B=\\{2\\}$, $A\\cup C=\\{2,3,5,6,7,8\\}$, and $Q(x)$ fails only at $x=2$.`,
    statements: [
      {
        text: "$|A\\cap B|=1$ and $A\\cap B=\\{2\\}$.",
        isTrue: true,
        explanation: `**A.** → True

List even elements of $U$ and intersect with $A$.

$$B=\\{2,4,6,8\\}$$

$$A=\\{2,3,5,7\\}$$

$$A\\cap B=\\{2\\}$$

$$|A\\cap B|=1$$

The roster and cardinality both match the claim.

So the statement is True.`,
      },
      {
        text: "$Q(x)$ holds for every $x\\in U$.",
        isTrue: false,
        explanation: `**B.** → False

Universal truth of $Q(x)$ requires checking every $x\\in U$; test the overlap of $A$ and $B$.

$$A\\cap B=\\{2\\}$$

$$2\\in A$$

$$2\\in B$$

For $Q(x)$ meaning $x\\in A\\Rightarrow x\\notin B$, at $x=2$ the antecedent and consequent are both true for “$x\\notin B$” failing:

$$Q(2)\\equiv (2\\in A)\\Rightarrow (2\\notin B)$$

$$Q(2)\\equiv \\text{True}\\Rightarrow \\text{False}\\equiv \\text{False}$$

So $Q(x)$ does not hold for every $x\\in U$.

So the statement is False.`,
      },
      {
        text: "$\\neg Q(x)$ is equivalent to “$x\\in A\\cap B$” for each $x\\in U$.",
        isTrue: true,
        explanation: `**C.** → True

Rewrite $Q(x)$ as an implication and negate it using the standard logic rule.

$$Q(x)\\equiv (x\\in A)\\Rightarrow (x\\notin B)$$

$$\\neg(P\\Rightarrow R)\\equiv P\\land \\neg R$$

$$\\neg Q(x)\\equiv (x\\in A)\\land (x\\in B)$$

Membership in both sets is intersection:

$$ (x\\in A)\\land (x\\in B)\\equiv x\\in A\\cap B$$

$$A\\cap B=\\{2\\}$$

The negated predicate matches “$x\\in A\\cap B$” pointwise.

So the statement is True.`,
      },
      {
        text: "$(A\\cup C)^c=\\{1,4\\}$ (complement taken in $U$).",
        isTrue: true,
        explanation: `**D.** → True

Form $A\\cup C$ inside $U$, then list elements of $U$ omitted from that union.

$$A=\\{2,3,5,7\\}$$

$$C=\\{5,6,7,8\\}$$

$$A\\cup C=\\{2,3,5,6,7,8\\}$$

$$U=\\{1,2,3,4,5,6,7,8\\}$$

$$(A\\cup C)^c=U\\setminus(A\\cup C)=\\{1,4\\}$$

The computed complement equals $\\{1,4\\}$.

So the statement is True.`,
      },
      {
        text: "There exists $x\\in C$ with $x\\in A\\cap B$.",
        isTrue: false,
        explanation: `**E.** → False

Compare the roster of $A\\cap B$ with the set $C$.

$$A\\cap B=\\{2\\}$$

$$C=\\{5,6,7,8\\}$$

$$2\\notin C$$

$$A\\cap B\\cap C=\\varnothing$$

No element of $C$ can lie in $A\\cap B$.

So the statement is False.`,
      },
    ],
  },
  {
    chapter: 2,
    topic: "Elementary algebra",
    stem: `A lab records a concentration index (no units) by
$$K=\\frac{\\bigl(3a^{2}b^{-3}\\bigr)^{2}\\,\\bigl(a^{-1}b^{2}\\bigr)^{3}}{a^{3}b^{-1}}$$
when $a>0$ and $b>0$. For a batch with $a=3$ and $b=2$, evaluate each claim.`,
    solutionOverview: `Algebraic simplification gives $K=\\dfrac{9b}{a^{2}}$. Substituting $a=3$, $b=2$ yields $K=2$.`,
    statements: [
      {
        text: "After simplification, $K=\\dfrac{9b}{a^{2}}$.",
        isTrue: true,
        explanation: `**A.** → True

Expand each powered factor in the numerator, multiply, then divide by the denominator.

$$\\bigl(3a^{2}b^{-3}\\bigr)^{2}=3^{2}a^{4}b^{-6}=9a^{4}b^{-6}$$

$$\\bigl(a^{-1}b^{2}\\bigr)^{3}=a^{-3}b^{6}$$

$$9a^{4}b^{-6}\\cdot a^{-3}b^{6}=9a^{4-3}b^{-6+6}$$

$$9a^{4-3}b^{0}=9a$$

$$K=\\frac{9a}{a^{3}b^{-1}}=9a\\cdot a^{-3}\\cdot b^{1}$$

$$K=9a^{1-3}b=\\frac{9b}{a^{2}}$$

The simplified form matches the claim.

So the statement is True.`,
      },
      {
        text: "For $a=3$ and $b=2$, the numeric value of $K$ equals $2$.",
        isTrue: true,
        explanation: `**B.** → True

Substitute $a=3$ and $b=2$ into the simplified index.

$$K=\\frac{9b}{a^{2}}$$

$$a=3,\\quad b=2$$

$$3^{2}=9$$

$$K=\\frac{9\\cdot 2}{9}$$

$$9\\cdot 2=18$$

$$K=\\frac{18}{9}$$

$$K=2$$

The numeric value equals $2$ as claimed.

So the statement is True.`,
      },
      {
        text: "If $a$ is doubled while $b$ stays fixed, $K$ is multiplied by $4$.",
        isTrue: false,
        explanation: `**C.** → False

With fixed $b$, the simplified index is proportional to $a^{-2}$.

$$K=\\frac{9b}{a^{2}}$$

Replace $a$ by $2a$:

$$K_{\\text{new}}=\\frac{9b}{(2a)^{2}}$$

$$(2a)^{2}=4a^{2}$$

$$K_{\\text{new}}=\\frac{9b}{4a^{2}}=\\frac{1}{4}\\cdot\\frac{9b}{a^{2}}$$

$$K_{\\text{new}}=\\frac{K}{4}$$

Doubling $a$ divides $K$ by $4$, it does not multiply by $4$.

So the statement is False.`,
      },
      {
        text: "The expression for $K$ is undefined when $a=3$ and $b=2$.",
        isTrue: false,
        explanation: `**D.** → False

Positive $a$ and $b$ keep every power defined and make the denominator non-zero.

$$a=3>0,\\quad b=2>0$$

$$a^{3}b^{-1}=3^{3}\\cdot 2^{-1}=27\\cdot\\frac{1}{2}$$

$$a^{3}b^{-1}=\\frac{27}{2}\\neq 0$$

Evaluate the simplified index:

$$K=\\frac{9b}{a^{2}}=\\frac{9\\cdot 2}{3^{2}}=2$$

The value is a finite number, so the expression is defined.

So the statement is False.`,
      },
      {
        text: "If $b$ is doubled while $a=3$ stays fixed, the value of $K$ quadruples.",
        isTrue: false,
        explanation: `**E.** → False

Fix $a=3$ in the simplified form and track how $K$ scales with $b$.

$$K=\\frac{9b}{a^{2}}=\\frac{9b}{3^{2}}$$

$$3^{2}=9$$

$$K=\\frac{9b}{9}=b$$

If $b$ doubles to $2b$:

$$K_{\\text{new}}=2b=2K$$

That is a factor of $2$, not $4$.

So the statement is False.`,
      },
    ],
  },
  {
    chapter: 3,
    topic: "Financial mathematics",
    stem: `A startup parks €\\,9\\,200 in a reserve account with nominal annual rate $6.0\\%$, compounded quarterly (no further deposits). Use exact quarterly compounding unless a claim says otherwise.`,
    solutionOverview: `Quarterly rate $i=0.06/4=0.015$. One year: $9200(1.015)^{4}$. Effective annual rate $(1.015)^{4}-1\\approx 6.14\\%$.`,
    statements: [
      {
        text: "The quarterly periodic interest rate is $1.50\\%$.",
        isTrue: true,
        explanation: `**A.** → True

Split the nominal annual rate into four equal quarterly periods.

$$\\text{nominal}=0.06=6.00\\%$$

$$i=\\frac{0.06}{4}$$

$$i=0.015$$

$$0.015\\times 100\\%=1.50\\%$$

The quarterly periodic rate is $1.50\\%$.

So the statement is True.`,
      },
      {
        text: "The effective annual rate (EAR) is strictly greater than $6.00\\%$ but less than $6.20\\%$.",
        isTrue: true,
        explanation: `**B.** → True

The effective annual rate compounds each quarter once.

$$\\text{EAR}=(1+i)^{4}-1$$

$$i=0.015$$

$$(1.015)^{2}=1.030225$$

$$(1.015)^{4}=1.030225^{2}$$

$$(1.015)^{4}=1.061363550625$$

$$\\text{EAR}=1.061363550625-1$$

$$\\text{EAR}\\approx 0.06136=6.14\\%$$

That lies strictly between $6.00\\%$ and $6.20\\%$.

So the statement is True.`,
      },
      {
        text: "After exactly one year the balance is €\\,9\\,764.54$ (rounded to cents).",
        isTrue: true,
        explanation: `**C.** → True

Apply four quarterly factors to the principal.

$$B_{1}=9200(1.015)^{4}$$

$$(1.015)^{4}\\approx 1.0613635506$$

$$9200\\times 1.0613635506=9764.54486552$$

$$B_{1}\\approx 9764.54$$

Rounded to cents, the balance matches €\\,9\\,764.54$.

So the statement is True.`,
      },
      {
        text: "If the same nominal $6.0\\%$ were compounded once per year instead, the balance after one year would be higher than under quarterly compounding.",
        isTrue: false,
        explanation: `**D.** → False

Compare one-year balances under annual versus quarterly compounding at the same nominal $6.0\\%$.

$$B_{\\text{annual}}=9200(1.06)$$

$$9200\\times 1.06=9752.00$$

$$B_{\\text{quarterly}}=9200(1.015)^{4}\\approx 9764.54$$

$$9752.00<9764.54$$

Annual compounding yields the lower balance, not the higher one.

So the statement is False.`,
      },
      {
        text: "After two full years (eight quarters) the balance exceeds €\\,10\\,400$.",
        isTrue: true,
        explanation: `**E.** → True

Eight quarters multiply the one-year growth factor.

$$B_{2}=9200(1.015)^{8}$$

$$(1.015)^{4}\\approx 1.061363550625$$

$$(1.015)^{8}=(1.061363550625)^{2}$$

$$(1.015)^{8}\\approx 1.1264910201$$

$$B_{2}=9200\\times 1.1264910201$$

$$B_{2}\\approx 10363.72$$

That exceeds €\\,10\\,400$.

So the statement is True.`,
      },
    ],
  },
  {
    chapter: 4,
    topic: "Equations (mixed word/algebra)",
    stem: `A courier rides from depot $D$ to client $C$, $24$ km away at speed $v$ km/h, then returns along the same road at $(v+8)$ km/h. The round trip takes exactly $2.5$ hours. Assume constant speeds and no waiting time.`,
    solutionOverview: `Time equation $\\dfrac{24}{v}+\\dfrac{24}{v+8}=2.5$ leads to the positive root $v=16$ km/h.`,
    statements: [
      {
        text: "The outbound speed $v$ satisfies $v=16$ km/h.",
        isTrue: true,
        explanation: `**A.** → True

Write total travel time as sum of leg times and clear denominators.

$$\\frac{24}{v}+\\frac{24}{v+8}=2.5$$

$$48(v+8)+48v=2.5\\cdot 2v(v+8)$$

$$96v+384=5v(v+8)$$

$$5v^{2}-56v-384=0$$

$$\\Delta=56^{2}+4\\cdot 5\\cdot 384=10816=104^{2}$$

$$v=\\frac{56+104}{10}=16$$

The positive speed root is $16$ km/h.

So the statement is True.`,
      },
      {
        text: "The return leg alone takes exactly $1$ hour.",
        isTrue: true,
        explanation: `**B.** → True

Use the return speed rule with $v=16$ km/h.

$$v=16$$

$$v+8=16+8$$

$$v+8=24\\text{ km/h}$$

$$t_{\\text{return}}=\\frac{24\\text{ km}}{24\\text{ km/h}}$$

$$t_{\\text{return}}=1\\text{ h}$$

The return leg lasts exactly one hour.

So the statement is True.`,
      },
      {
        text: "The outbound leg takes $1.5$ hours.",
        isTrue: true,
        explanation: `**C.** → True

Outbound distance $24$ km at speed $16$ km/h gives time $d/v$.

$$v=16\\text{ km/h}$$

$$t_{\\text{out}}=\\frac{24}{16}$$

$$\\frac{24}{16}=\\frac{3}{2}$$

$$t_{\\text{out}}=1.5\\text{ h}$$

The outbound leg takes $1.5$ hours as claimed.

So the statement is True.`,
      },
      {
        text: "If the outbound speed were $12$ km/h instead, the round trip would still last $2.5$ hours with the same return rule.",
        isTrue: false,
        explanation: `**D.** → False

Substitute $v=12$ and apply the same return-speed rule.

$$v=12\\Rightarrow v+8=20$$

$$t_{\\text{out}}=\\frac{24}{12}=2$$

$$t_{\\text{return}}=\\frac{24}{20}=1.2$$

$$t_{\\text{total}}=2+1.2=3.2$$

$$3.2\\neq 2.5$$

The round trip would not last $2.5$ hours.

So the statement is False.`,
      },
      {
        text: "The average speed over the entire $48$ km round trip equals $19.2$ km/h.",
        isTrue: true,
        explanation: `**E.** → True

Average speed is total distance divided by total time on the $48$ km loop.

$$d_{\\text{total}}=24+24=48\\text{ km}$$

$$t_{\\text{total}}=2.5\\text{ h}$$

$$v_{\\text{avg}}=\\frac{48}{2.5}$$

$$\\frac{48}{2.5}=19.2$$

$$v_{\\text{avg}}=19.2\\text{ km/h}$$

That matches the claim.

So the statement is True.`,
      },
    ],
  },
{
    chapter: 5,
    topic: "Linear equations in two unknowns / work rates",
    stem: `Two pumps fill an empty tank. Pump Alpha alone takes $5$ hours; Pump Beta alone takes $8$ hours. Both run together from the start until the tank is full. Evaluate each statement (ignore warm-up delays).`,
    solutionOverview: `Combined rate $\\dfrac{1}{5}+\\dfrac{1}{8}=\\dfrac{13}{40}$ tanks per hour. Full fill time $\\dfrac{40}{13}$ h; after $2$ h together, $\\dfrac{13}{20}$ of the tank is full.`,
    statements: [
      {
        text: "Working together, the pumps fill the tank in $\\dfrac{40}{13}$ hours (exact value).",
        isTrue: true,
        explanation: `**A.** → True

Add individual fill rates (tanks per hour) and invert for joint time.

$$r_{\\alpha}=\\frac{1}{5},\\quad r_{\\beta}=\\frac{1}{8}$$

$$\\frac{1}{T}=\\frac{1}{5}+\\frac{1}{8}$$

$$\\frac{1}{T}=\\frac{8+5}{40}=\\frac{13}{40}$$

$$T=\\frac{40}{13}\\text{ h}$$

The exact joint fill time is $\\dfrac{40}{13}$ hours.

So the statement is True.`,
      },
      {
        text: "After $2$ hours of joint work, more than $70\\%$ of the tank is filled.",
        isTrue: false,
        explanation: `**B.** → False

Multiply the combined rate by $2$ hours to get the filled fraction.

$$r_{\\text{joint}}=\\frac{13}{40}$$

$$\\text{filled}=\\frac{13}{40}\\cdot 2=\\frac{13}{20}$$

$$\\frac{13}{20}=0.65$$

$$0.65=65\\%$$

That is not above $70\\%$.

So the statement is False.`,
      },
      {
        text: "Beta’s hourly rate alone is $\\dfrac{1}{8}$ of the tank per hour.",
        isTrue: true,
        explanation: `**C.** → True

One full tank in $8$ hours means rate one tank per eight hours.

$$\\text{time for one tank}=8\\text{ h}$$

$$r_{\\beta}=\\frac{1\\text{ tank}}{8\\text{ h}}$$

$$r_{\\beta}=\\frac{1}{8}\\text{ tank/h}$$

That is $\\dfrac{1}{8}$ of the tank per hour.

So the statement is True.`,
      },
      {
        text: "If only Alpha runs, the tank is full in less than $4.5$ hours.",
        isTrue: false,
        explanation: `**D.** → False

Alpha alone requires its full rated time to fill one tank.

$$T_{\\alpha}=5\\text{ h}$$

$$5\\not< 4.5$$

The tank is full only after $5$ hours, not in less than $4.5$ hours.

So the statement is False.`,
      },
      {
        text: "After $2$ hours together, more than $\\dfrac{1}{3}$ of the tank remains empty.",
        isTrue: true,
        explanation: `**E.** → True

After $2$ h the empty fraction is one minus the filled fraction.

$$\\text{filled}=\\frac{13}{20}$$

$$\\text{empty}=1-\\frac{13}{20}=\\frac{7}{20}$$

$$\\frac{7}{20}=0.35$$

$$\\frac{1}{3}\\approx 0.3333$$

$$0.35>0.3333$$

More than one third of the tank remains empty.

So the statement is True.`,
      },
    ],
  },
  {
    chapter: 6,
    topic: "Inequalities",
    stem: `Consider real numbers $x$ satisfying mixed linear and quadratic constraints arising from a production window: $|2x-7|\\le 5$ and a profit sign condition $(x-2)(x-6)<0$. Decide each statement.`,
    solutionOverview: `From $|2x-7|\\le 5$ obtain $1\\le x\\le 6$. The product $(x-2)(x-6)<0$ holds on $(2,6)$. Combined: $2<x<6$.`,
    statements: [
      {
        text: "The solution set of $|2x-7|\\le 5$ is $[1,6]$.",
        isTrue: true,
        explanation: `**A.** → True

Rewrite the absolute value inequality as a compound linear bound.

$$|2x-7|\\le 5$$

$$-5\\le 2x-7\\le 5$$

Add $7$ throughout:

$$2\\le 2x\\le 12$$

Divide by $2$:

$$1\\le x\\le 6$$

The solution set is $[1,6]$.

So the statement is True.`,
      },
      {
        text: "$(x-2)(x-6)<0$ exactly when $2<x<6$.",
        isTrue: true,
        explanation: `**B.** → True

The product $(x-2)(x-6)$ changes sign only at the zeros $x=2$ and $x=6$.

$$(x-2)(x-6)<0$$

At $x=0$:

$$(0-2)(0-6)=(-2)(-6)=12>0$$

At $x=3$:

$$(3-2)(3-6)=(1)(-3)=-3<0$$

At $x=7$:

$$(7-2)(7-6)=(5)(1)=5>0$$

Negative on the open interval between the roots:

$$2<x<6$$

So the statement is True.`,
      },
      {
        text: "Every $x$ with $1\\le x\\le 6$ satisfies both constraints simultaneously.",
        isTrue: false,
        explanation: `**C.** → False

Check a point in $[1,6]$ that violates the strict product inequality.

$$x=1$$

$$|2(1)-7|=|-5|=5\\le 5$$

$$(1-2)(1-6)=(-1)(-5)=5>0$$

The absolute bound holds but $(x-2)(x-6)<0$ fails at $x=1$.

So the statement is False.`,
      },
      {
        text: "The combined feasible set is $(2,6)$.",
        isTrue: true,
        explanation: `**D.** → True

Feasible points must satisfy both constraints simultaneously.

$$|2x-7|\\le 5\\Rightarrow x\\in[1,6]$$

$$(x-2)(x-6)<0\\Rightarrow x\\in(2,6)$$

$$[1,6]\\cap(2,6)=(2,6)$$

The combined feasible set is $(2,6)$.

So the statement is True.`,
      },
      {
        text: "$x=6$ belongs to the combined feasible set.",
        isTrue: false,
        explanation: `**E.** → False

Test the endpoint $x=6$ in each constraint.

$$|2(6)-7|=|5|=5\\le 5$$

$$(6-2)(6-6)=4\\cdot 0=0$$

$$(x-2)(x-6)<0\\text{ requires }0<0\\text{, false}$$

So $x=6$ is not in the combined feasible set.

So the statement is False.`,
      },
    ],
  },
  {
    chapter: 7,
    topic: "Linear & quadratic functions",
    stem: `A market model uses supply $q=6p-12$ and demand $q=60-3p$ (quantity $q$ in units, price $p$ in €). The table lists both schedules at selected prices.`,
    tablesMarkdown: `| Price $p$ (€) | Supply $6p-12$ | Demand $60-3p$ |
| ---: | ---: | ---: |
| 6 | 24 | 42 |
| 8 | 36 | 36 |
| 10 | 48 | 30 |
| 12 | 60 | 24 |`,
    solutionOverview: `Equilibrium solves $6p-12=60-3p$, giving $p=8$ and $q=36$. Revenue at price $p$ is $R(p)=p(60-3p)$ with maximum at $p=10$.`,
    statements: [
      {
        text: "Market equilibrium occurs at price $p=8$ and quantity $q=36$.",
        isTrue: true,
        explanation: `**A.** → True

Set supply equal to demand and solve for equilibrium price.

$$6p-12=60-3p$$

$$6p+3p=60+12$$

$$9p=72$$

$$p=8$$

$$q=6(8)-12$$

$$q=48-12=36$$

Equilibrium is $p=8$, $q=36$.

So the statement is True.`,
      },
      {
        text: "At $p=10$, supply exceeds demand.",
        isTrue: true,
        explanation: `**B.** → True

Evaluate both schedules at $p=10$ (from the table or formulas).

$$q^{S}=6(10)-12$$

$$q^{S}=60-12=48$$

$$q^{D}=60-3(10)$$

$$q^{D}=60-30=30$$

$$48>30$$

Supply exceeds demand at $p=10$.

So the statement is True.`,
      },
      {
        text: "Revenue $R(p)=p(60-3p)$ is maximized at $p=10$.",
        isTrue: true,
        explanation: `**C.** → True

Revenue is $R(p)=p\\cdot q^{D}(p)$; locate the vertex of the quadratic.

$$R(p)=p(60-3p)$$

$$R(p)=60p-3p^{2}$$

For $R(p)=ap^{2}+bp+c$ with $a=-3$, $b=60$:

$$p^{*}=-\\frac{b}{2a}=-\\frac{60}{2(-3)}$$

$$p^{*}=10$$

Revenue is maximized at $p=10$.

So the statement is True.`,
      },
      {
        text: "At $p=6$, quantity demanded equals $36$ units.",
        isTrue: false,
        explanation: `**D.** → False

Substitute $p=6$ into the demand equation.

$$q^{D}=60-3p$$

$$p=6$$

$$3p=18$$

$$q^{D}=60-18$$

$$q^{D}=42$$

That is not $36$ units.

So the statement is False.`,
      },
      {
        text: "Maximum revenue equals €\\,300$.",
        isTrue: true,
        explanation: `**E.** → True

Evaluate revenue at the maximizing price $p=10$.

$$R(10)=10(60-3\\cdot 10)$$

$$60-30=30$$

$$R(10)=10\\cdot 30$$

$$R(10)=300$$

Maximum revenue equals €\\,300$.

So the statement is True.`,
      },
    ],
  },
  {
    chapter: 8,
    topic: "Power functions",
    stem: `A solar array’s daily output (MWh) is modelled by $E(k)=4.5\\,k^{0.6}$, where $k$ is the number of panels (scaled in hundreds). Use this model for the claims below.`,
    solutionOverview: `Doubling $k$ multiplies output by $2^{0.6}\\approx 1.516$. At $k=100$, $E(100)=4.5\\cdot 100^{0.6}\\approx 142.3$ MWh.`,
    statements: [
      {
        text: "If $k$ doubles, $E(k)$ increases by a factor of exactly $2$.",
        isTrue: false,
        explanation: `**A.** → False

Compare outputs when $k$ is scaled by $2$ using the power law.

$$E(k)=4.5k^{0.6}$$

$$\\frac{E(2k)}{E(k)}=\\frac{4.5(2k)^{0.6}}{4.5k^{0.6}}$$

$$\\frac{E(2k)}{E(k)}=\\frac{2^{0.6}k^{0.6}}{k^{0.6}}$$

$$\\frac{E(2k)}{E(k)}=2^{0.6}$$

$$2^{0.6}\\approx 1.5157$$

That factor is not exactly $2$.

So the statement is False.`,
      },
      {
        text: "$E(100)$ is greater than $140$ MWh.",
        isTrue: true,
        explanation: `**B.** → True

Evaluate $E(100)=4.5\\cdot 100^{0.6}$.

$$100^{0.6}=(10^{2})^{0.6}=10^{1.2}$$

$$10^{1.2}\\approx 15.8489$$

$$100^{0.6}\\approx 31.6228$$

$$E(100)=4.5\\cdot 31.6228$$

$$E(100)\\approx 142.30$$

That exceeds $140$ MWh.

So the statement is True.`,
      },
      {
        text: "The elasticity-style ratio $\\dfrac{kE'(k)}{E(k)}$ equals $0.6$ for all $k>0$.",
        isTrue: true,
        explanation: `**C.** → True

Differentiate the power function and form the elasticity-style ratio.

$$E(k)=4.5k^{0.6}$$

$$E'(k)=4.5\\cdot 0.6\\,k^{-0.4}$$

$$kE'(k)=4.5\\cdot 0.6\\,k^{0.6}$$

$$\\frac{kE'(k)}{E(k)}=\\frac{4.5\\cdot 0.6\\,k^{0.6}}{4.5k^{0.6}}$$

$$\\frac{kE'(k)}{E(k)}=0.6$$

The ratio equals $0.6$ for all $k>0$.

So the statement is True.`,
      },
      {
        text: "$E(25)$ equals $E(100)/2$.",
        isTrue: false,
        explanation: `**D.** → False

Use the ratio of power-function values at two $k$ levels.

$$\\frac{E(25)}{E(100)}=\\frac{4.5\\cdot 25^{0.6}}{4.5\\cdot 100^{0.6}}$$

$$\\frac{E(25)}{E(100)}=\\left(\\frac{25}{100}\\right)^{0.6}$$

$$\\frac{25}{100}=0.25$$

$$0.25^{0.6}\\approx 0.435$$

That is not $\\dfrac{1}{2}$.

So the statement is False.`,
      },
      {
        text: "For $k>0$, output per panel (average) $E(k)/k$ decreases as $k$ increases.",
        isTrue: true,
        explanation: `**E.** → True

Average output per panel is $E(k)/k$.

$$\\frac{E(k)}{k}=\\frac{4.5k^{0.6}}{k}$$

$$\\frac{E(k)}{k}=4.5k^{-0.4}$$

The exponent $-0.4$ is negative, so increasing $k$ decreases $4.5k^{-0.4}$.

So the statement is True.`,
      },
    ],
  },

  {
    chapter: 9,
    topic: "Polynomial functions",
    stem: `A cost deviation (in € thousands) is modelled by $C(x)=x^{3}-9x^{2}+24x-14$ for $0\\le x\\le 6$, where $x$ is thousands of batches processed.`,
    solutionOverview: `$C'(x)=3(x-2)(x-4)$: local maximum at $x=2$ with $C(2)=6$, local minimum at $x=4$ with $C(4)=2$. On $[0,6]$, the smallest value is $C(0)=-14$.`,
    statements: [
      {
        text: "$C(x)$ has a local maximum at $x=2$.",
        isTrue: true,
        explanation: `**A.** → True

Locate critical points from the derivative and classify with a sign chart.

$$C(x)=x^{3}-9x^{2}+24x-14$$

$$C'(x)=3x^{2}-18x+24$$

$$C'(x)=3(x^{2}-6x+8)$$

$$C'(x)=3(x-2)(x-4)$$

For $x$ slightly below $2$, $C'>0$; slightly above $2$, $C'<0$.

So $x=2$ is a local maximum.

So the statement is True.`,
      },
      {
        text: "$C(4)=2$ (thousand €).",
        isTrue: true,
        explanation: `**B.** → True

Substitute $x=4$ into the cost polynomial term by term.

$$C(4)=4^{3}-9\\cdot 4^{2}+24\\cdot 4-14$$

$$4^{3}=64$$

$$9\\cdot 4^{2}=9\\cdot 16=144$$

$$24\\cdot 4=96$$

$$C(4)=64-144+96-14$$

$$C(4)=2$$

So $C(4)=2$ thousand €.

So the statement is True.`,
      },
      {
        text: "On $[0,6]$, the global minimum of $C$ occurs at $x=0$.",
        isTrue: true,
        explanation: `**C.** → True

Compare endpoint and critical values on $[0,6]$.

$$C(0)=-14$$

$$C(2)=8-36+48-14=6$$

$$C(4)=2$$

$$C(6)=216-324+144-14=22$$

$$\\min\\{C(0),C(2),C(4),C(6)\\}=-14$$

The global minimum on $[0,6]$ occurs at $x=0$.

So the statement is True.`,
      },
      {
        text: "$C(6)=20$ (thousand €).",
        isTrue: false,
        explanation: `**D.** → False

Evaluate $C(6)$ with the same term-by-term arithmetic.

$$C(6)=6^{3}-9\\cdot 6^{2}+24\\cdot 6-14$$

$$6^{3}=216$$

$$9\\cdot 6^{2}=9\\cdot 36=324$$

$$24\\cdot 6=144$$

$$C(6)=216-324+144-14$$

$$C(6)=22$$

That is not $20$.

So the statement is False.`,
      },
      {
        text: "The equation $C'(x)=0$ has exactly two distinct roots in $[0,6]$.",
        isTrue: true,
        explanation: `**E.** → True

Solve $C'(x)=0$ on the domain and count distinct roots.

$$C'(x)=3(x-2)(x-4)$$

$$C'(x)=0\\Rightarrow x=2\\text{ or }x=4$$

$$2\\in[0,6],\\quad 4\\in[0,6]$$

There are exactly two distinct roots in $[0,6]$.

So the statement is True.`,
      },
    ],
  },
  {
    chapter: 10,
    topic: "Exponential & logarithmic functions",
    stem: `A culture count (in millions) follows $N(t)=800\\,e^{0.05t}$, where $t$ is days since calibration. Use natural logarithms where needed.`,
    solutionOverview: `Doubling time $t=\\ln(2)/0.05\\approx 13.86$ days. At $t=10$, $N(10)=800e^{0.5}\\approx 1319$ million.`,
    statements: [
      {
        text: "$N(10)$ exceeds $1300$ million.",
        isTrue: true,
        explanation: `**A.** → True

Evaluate the culture count at $t=10$ days.

$$N(10)=800e^{0.05\\cdot 10}$$

$$0.05\\cdot 10=0.5$$

$$N(10)=800e^{0.5}$$

$$e^{0.5}\\approx 1.6487212707$$

$$800\\cdot 1.6487212707\\approx 1318.98$$

That exceeds $1300$ million.

So the statement is True.`,
      },
      {
        text: "The doubling time of the culture is exactly $10$ days.",
        isTrue: false,
        explanation: `**B.** → False

Doubling time solves $N(t)=2N(0)$ with $N(0)=800$.

$$800e^{0.05t}=1600$$

$$e^{0.05t}=2$$

$$0.05t=\\ln 2$$

$$t=\\frac{\\ln 2}{0.05}$$

$$t\\approx 13.86\\text{ days}$$

That is not exactly $10$ days.

So the statement is False.`,
      },
      {
        text: "$\\ln N(t)=\\ln 800+0.05t$.",
        isTrue: true,
        explanation: `**C.** → True

Apply the logarithm product rule to $N(t)=800e^{0.05t}$.

$$\\ln N(t)=\\ln(800e^{0.05t})$$

$$\\ln N(t)=\\ln 800+\\ln(e^{0.05t})$$

$$\\ln(e^{0.05t})=0.05t$$

$$\\ln N(t)=\\ln 800+0.05t$$

The identity matches the claim.

So the statement is True.`,
      },
      {
        text: "In $14$ days the count is below $1600$ million.",
        isTrue: false,
        explanation: `**D.** → False

Compute the count at $t=14$ and compare with $1600$.

$$N(14)=800e^{0.05\\cdot 14}$$

$$0.05\\cdot 14=0.7$$

$$N(14)=800e^{0.7}$$

$$e^{0.7}\\approx 2.013752707$$

$$N(14)\\approx 800\\cdot 2.013752707\\approx 1611.0$$

$$1611>1600$$

The count is not below $1600$ million.

So the statement is False.`,
      },
      {
        text: "The continuous per-day growth rate parameter equals $0.05$.",
        isTrue: true,
        explanation: `**E.** → True

In continuous exponential form $N(t)=N(0)e^{rt}$, read $r$ from the exponent.

$$N(t)=800e^{0.05t}$$

$$N(t)=N(0)e^{rt}\\Rightarrow r=0.05$$

The per-day continuous growth parameter is $0.05$.

So the statement is True.`,
      },
    ],
  },
  {
    chapter: 11,
    topic: "Differentiation",
    stem: `A particle moves along a line with position $s(t)=t^{3}-6t^{2}+9t$ metres ($t\\ge 0$ in seconds).`,
    solutionOverview: `$v(t)=3t^{2}-12t+9=3(t-1)(t-3)$ and $a(t)=6t-12$. The particle is at rest at $t=1$ s and $t=3$ s; $v(2)=-3$ m/s and $a(2)=0$ m/s$^{2}$.`,
    statements: [
      {
        text: "$v(2)=-3$ m/s.",
        isTrue: true,
        explanation: `**A.** → True

Differentiate position to get velocity, then evaluate at $t=2$.

$$s(t)=t^{3}-6t^{2}+9t$$

$$v(t)=s'(t)=3t^{2}-12t+9$$

$$v(2)=3(2)^{2}-12(2)+9$$

$$3(4)-24+9=12-24+9$$

$$v(2)=-3$$

So $v(2)=-3$ m/s.

So the statement is True.`,
      },
      {
        text: "The particle is instantaneously at rest at $t=3$ s.",
        isTrue: true,
        explanation: `**B.** → True

Factor velocity and test the claimed rest time.

$$v(t)=3t^{2}-12t+9=3(t^{2}-4t+3)$$

$$v(t)=3(t-1)(t-3)$$

$$v(3)=3(3-1)(3-3)$$

$$v(3)=3\\cdot 2\\cdot 0=0$$

The particle is instantaneously at rest at $t=3$ s.

So the statement is True.`,
      },
      {
        text: "$a(2)=0\\,\\text{m/s}^{2}$.",
        isTrue: true,
        explanation: `**C.** → True

Differentiate velocity to get acceleration.

$$a(t)=v'(t)=6t-12$$

$$a(2)=6(2)-12$$

$$a(2)=12-12=0$$

So $a(2)=0$ m/s$^{2}$.

So the statement is True.`,
      },
      {
        text: "For all $t>1$, velocity is strictly positive.",
        isTrue: false,
        explanation: `**D.** → False

Use the factored sign of $v(t)=3(t-1)(t-3)$ on $(1,3)$.

$$1<t<3\\Rightarrow (t-1)>0$$

$$1<t<3\\Rightarrow (t-3)<0$$

$$v(t)=3(t-1)(t-3)<0$$

$$v(2)=-3<0$$

Velocity is not strictly positive for all $t>1$.

So the statement is False.`,
      },
      {
        text: "$s(3)=0$ m.",
        isTrue: true,
        explanation: `**E.** → True

Factor position and evaluate at $t=3$.

$$s(t)=t^{3}-6t^{2}+9t=t(t^{2}-6t+9)$$

$$t^{2}-6t+9=(t-3)^{2}$$

$$s(t)=t(t-3)^{2}$$

$$s(3)=3(3-3)^{2}$$

$$s(3)=3\\cdot 0=0$$

So $s(3)=0$ m.

So the statement is True.`,
      },
    ],
  },
  {
    chapter: 12,
    topic: "Elementary probability",
    stem: `A fair coin is tossed three times (independent). Events $A$ and $B$ are independent with $P(A)=0.35$ and $P(B)=0.40$. Evaluate each statement.`,
    solutionOverview: `Three tosses: $P(\\text{exactly two heads})=3/8$. Also $P(A\\cap B)=0.14$ and $P(A\\cup B)=0.61$.`,
    statements: [
      {
        text: "The probability of exactly two heads equals $\\dfrac{3}{8}$.",
        isTrue: true,
        explanation: `**A.** → True

Count length-$3$ head/tail sequences with exactly two heads.

$$\\text{total outcomes}=2^{3}=8$$

Favorable patterns: HHT, HTH, THH:

$$\\text{favorable}=3$$

$$P(\\text{exactly two heads})=\\frac{3}{8}$$

So the statement is True.`,
      },
      {
        text: "The probability of at least one tail equals $\\dfrac{7}{8}$.",
        isTrue: true,
        explanation: `**B.** → True

Use the complement of three heads in three fair tosses.

$$P(\\text{HHH})=\\left(\\frac{1}{2}\\right)^{3}$$

$$P(\\text{HHH})=\\frac{1}{8}$$

$$P(\\text{at least one tail})=1-P(\\text{HHH})$$

$$1-\\frac{1}{8}=\\frac{7}{8}$$

So the statement is True.`,
      },
      {
        text: "For the independent events, $P(A\\cap B)=0.20$.",
        isTrue: false,
        explanation: `**C.** → False

Independent events multiply probabilities for the intersection.

$$P(A)=0.35,\\quad P(B)=0.40$$

$$P(A\\cap B)=P(A)P(B)$$

$$P(A\\cap B)=0.35\\cdot 0.40$$

$$0.35\\cdot 0.40=0.14$$

That is not $0.20$.

So the statement is False.`,
      },
      {
        text: "$P(A\\cup B)=0.75$ for the independent events.",
        isTrue: false,
        explanation: `**D.** → False

Apply the union rule with the correct intersection.

$$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$$

$$P(A\\cup B)=0.35+0.40-0.14$$

$$0.35+0.40=0.75$$

$$0.75-0.14=0.61$$

That is not $0.75$.

So the statement is False.`,
      },
      {
        text: "Exactly three heads and exactly zero heads are equally likely.",
        isTrue: true,
        explanation: `**E.** → True

Each specific three-toss sequence has equal probability.

$$P(\\text{HHH})=\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}$$

$$P(\\text{TTT})=\\left(\\frac{1}{2}\\right)^{3}=\\frac{1}{8}$$

$$P(\\text{HHH})=P(\\text{TTT})$$

Exactly three heads and zero heads are equally likely.

So the statement is True.`,
      },
    ],
  },
  {
    chapter: 13,
    topic: "Binomial distribution",
    stem: `Each shipment has $n=10$ items; each item independently fails with probability $p=0.30$. Let $X$ be the number of failures in one shipment.`,
    solutionOverview: `$X\\sim\\mathrm{Bin}(10,0.30)$, $E(X)=3$, $P(X=3)\\approx 0.267$, $P(X\\ge 2)\\approx 0.851$.`,
    statements: [
      {
        text: "$E(X)=3$.",
        isTrue: true,
        explanation: `**A.** → True

Expected value of a binomial count is $np$.

$$n=10,\\quad p=0.30$$

$$E(X)=np$$

$$E(X)=10\\cdot 0.30$$

$$10\\cdot 0.30=3$$

So $E(X)=3$.

So the statement is True.`,
      },
      {
        text: "$P(X=3)=\\dbinom{10}{3}(0.30)^{3}(0.70)^{7}$.",
        isTrue: true,
        explanation: `**B.** → True

The binomial pmf at $k=3$ failures is the stated product.

$$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$$

$$P(X=3)=\\binom{10}{3}(0.30)^{3}(0.70)^{7}$$

That matches the displayed formula.

So the statement is True.`,
      },
      {
        text: "$P(X=3)$ is approximately $0.267$ (three decimal places).",
        isTrue: true,
        explanation: `**C.** → True

Evaluate the pmf numerically at $k=3$.

$$P(X=3)=\\binom{10}{3}(0.30)^{3}(0.70)^{7}$$

$$\\binom{10}{3}=120$$

$$(0.30)^{3}=0.027$$

$$(0.70)^{7}\\approx 0.0823543$$

$$P(X=3)\\approx 120\\cdot 0.027\\cdot 0.0823543$$

$$P(X=3)\\approx 0.267$$

To three decimals, $P(X=3)\\approx 0.267$.

So the statement is True.`,
      },
      {
        text: "$P(X\\ge 2)$ is less than $0.80$.",
        isTrue: false,
        explanation: `**D.** → False

Compute the tail probability $P(X\\ge 2)$ for $X\\sim\\mathrm{Bin}(10,0.30)$.

$$P(X\\ge 2)=1-P(X=0)-P(X=1)$$

$$P(X\\ge 2)\\approx 0.8507$$

$$0.8507>0.80$$

So $P(X\\ge 2)$ is not less than $0.80$.

So the statement is False.`,
      },
      {
        text: "The most likely single count of failures is $k=3$.",
        isTrue: true,
        explanation: `**E.** → True

Compare binomial masses at neighboring counts; the mode is where $P(X=k)$ is largest.

$$P(X=2)\\approx 0.233$$

$$P(X=3)\\approx 0.267$$

$$P(X=4)\\approx 0.200$$

$$P(X=3)>P(X=2)$$

$$P(X=3)>P(X=4)$$

The most likely single failure count is $k=3$.

So the statement is True.`,
      },
    ],
  },
];
