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

List the even elements of $U$:

$$B=\\{2,4,6,8\\}$$

Intersect with $A=\\{2,3,5,7\\}$:

$$A\\cap B=\\{2\\}$$

Count and roster both show a single element.

So the statement is True.`,
      },
      {
        text: "$Q(x)$ holds for every $x\\in U$.",
        isTrue: false,
        explanation: `**B.** → False

Test $x=2$ (the only element in $A\\cap B$):

$$2\\in A$$

$$2\\in B$$

For an implication “if $x\\in A$ then $x\\notin B$”, a true antecedent with a false consequent makes the whole statement false.

So the statement is False.`,
      },
      {
        text: "$\\neg Q(x)$ is equivalent to “$x\\in A\\cap B$” for each $x\\in U$.",
        isTrue: true,
        explanation: `**C.** → True

Write $Q(x)$ as $x\\in A \\Rightarrow x\\notin B$.

The negation of an implication $P\\Rightarrow R$ is $P\\land \\neg R$:

$$\\neg Q(x)\\equiv (x\\in A)\\land (x\\in B)$$

That is exactly membership in $A\\cap B$.

So the statement is True.`,
      },
      {
        text: "$(A\\cup C)^c=\\{1,4\\}$ (complement taken in $U$).",
        isTrue: true,
        explanation: `**D.** → True

Form the union inside $U$:

$$A\\cup C=\\{2,3,5,7\\}\\cup\\{5,6,7,8\\}=\\{2,3,5,6,7,8\\}$$

Elements of $U$ not in that set:

$$(A\\cup C)^c=\\{1,4\\}$$

The claimed complement matches.

So the statement is True.`,
      },
      {
        text: "There exists $x\\in C$ with $x\\in A\\cap B$.",
        isTrue: false,
        explanation: `**E.** → False

From before:

$$A\\cap B=\\{2\\}$$

Every element of $C$ exceeds $4$, while $2\\notin C$.

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

Expand the numerator:

$$\\bigl(3a^{2}b^{-3}\\bigr)^{2}=9a^{4}b^{-6}$$

$$\\bigl(a^{-1}b^{2}\\bigr)^{3}=a^{-3}b^{6}$$

Multiply:

$$9a^{4}b^{-6}\\cdot a^{-3}b^{6}=9a\\,b^{0}=9a$$

Divide by $a^{3}b^{-1}$:

$$K=\\frac{9a}{a^{3}b^{-1}}=9a\\cdot a^{-3}\\cdot b=\\frac{9b}{a^{2}}$$

So the statement is True.`,
      },
      {
        text: "For $a=3$ and $b=2$, the numeric value of $K$ equals $2$.",
        isTrue: true,
        explanation: `**B.** → True

Use the simplified form:

$$K=\\frac{9b}{a^{2}}=\\frac{9\\cdot 2}{3^{2}}$$

$$K=\\frac{18}{9}=2$$

So the statement is True.`,
      },
      {
        text: "If $a$ is doubled while $b$ stays fixed, $K$ is multiplied by $4$.",
        isTrue: false,
        explanation: `**C.** → False

With fixed $b$, write $K=c/a^{2}$ where $c=9b$.

Replacing $a$ by $2a$:

$$K_{\\text{new}}=\\frac{c}{(2a)^{2}}=\\frac{c}{4a^{2}}=\\frac{K}{4}$$

The index is divided by $4$, not multiplied.

So the statement is False.`,
      },
      {
        text: "The expression for $K$ is undefined when $a=3$ and $b=2$.",
        isTrue: false,
        explanation: `**D.** → False

Both parameters are positive, so every power in the original fraction is defined and the denominator $a^{3}b^{-1}$ is non-zero.

The numeric value $K=2$ is finite.

So the statement is False.`,
      },
      {
        text: "If $b$ is doubled while $a=3$ stays fixed, the value of $K$ quadruples.",
        isTrue: false,
        explanation: `**E.** → False

With $a=3$, the simplified index is

$$K=\\frac{9b}{9}=b$$

Doubling $b$ doubles $K$, not quadruples it.

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

Nominal rate with four quarters per year:

$$i=\\frac{0.06}{4}=0.015$$

$$i=1.50\\%$$

So the statement is True.`,
      },
      {
        text: "The effective annual rate (EAR) is strictly greater than $6.00\\%$ but less than $6.20\\%$.",
        isTrue: true,
        explanation: `**B.** → True

Compound four quarters:

$$\\text{EAR}=(1.015)^{4}-1$$

$$(1.015)^{2}=1.030225$$

$$(1.015)^{4}=1.061363550625$$

$$\\text{EAR}\\approx 0.06136=6.14\\%$$

That lies between $6.00\\%$ and $6.20\\%$.

So the statement is True.`,
      },
      {
        text: "After exactly one year the balance is €\\,9\\,764.54$ (rounded to cents).",
        isTrue: true,
        explanation: `**C.** → True

Balance after four quarters:

$$B_{1}=9200(1.015)^{4}$$

Using $(1.015)^{4}\\approx 1.0613635506$:

$$B_{1}=9200\\times 1.0613635506$$

$$B_{1}\\approx 9764.54$$

So the statement is True.`,
      },
      {
        text: "If the same nominal $6.0\\%$ were compounded once per year instead, the balance after one year would be higher than under quarterly compounding.",
        isTrue: false,
        explanation: `**D.** → False

Annual compounding once:

$$B_{\\text{annual}}=9200(1.06)=9752.00$$

Quarterly compounding gave about €\\,9764.54$, which is larger.

Fewer compounding dates per year lowers the effective rate here.

So the statement is False.`,
      },
      {
        text: "After two full years (eight quarters) the balance exceeds €\\,10\\,400$.",
        isTrue: true,
        explanation: `**E.** → True

Eight quarters:

$$B_{2}=9200(1.015)^{8}$$

$$(1.015)^{8}=(1.061363550625)^{2}\\approx 1.1264910201$$

$$B_{2}\\approx 9200\\times 1.1264910201\\approx 10363.72$$

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

Set up total time:

$$\\frac{24}{v}+\\frac{24}{v+8}=2.5$$

Multiply by $2v(v+8)$:

$$48(v+8)+48v=5v(v+8)$$

$$96v+384=5v^{2}+40v$$

$$5v^{2}-56v-384=0$$

Discriminant:

$$56^{2}+4\\cdot 5\\cdot 384=3136+7680=10816=104^{2}$$

Positive root:

$$v=\\frac{56+104}{10}=16$$

So the statement is True.`,
      },
      {
        text: "The return leg alone takes exactly $1$ hour.",
        isTrue: true,
        explanation: `**B.** → True

With $v=16$, the return speed is $v+8=24$ km/h:

$$t_{\\text{return}}=\\frac{24}{24}=1\\text{ h}$$

So the statement is True.`,
      },
      {
        text: "The outbound leg takes $1.5$ hours.",
        isTrue: true,
        explanation: `**C.** → True

Outbound speed $16$ km/h over $24$ km:

$$t_{\\text{out}}=\\frac{24}{16}=1.5\\text{ h}$$

So the statement is True.`,
      },
      {
        text: "If the outbound speed were $12$ km/h instead, the round trip would still last $2.5$ hours with the same return rule.",
        isTrue: false,
        explanation: `**D.** → False

For $v=12$, return speed is $20$ km/h:

$$t=\\frac{24}{12}+\\frac{24}{20}=2+1.2=3.2\\text{ h}$$

That exceeds $2.5$ hours.

So the statement is False.`,
      },
      {
        text: "The average speed over the entire $48$ km round trip equals $19.2$ km/h.",
        isTrue: true,
        explanation: `**E.** → True

Total distance $48$ km in $2.5$ h:

$$v_{\\text{avg}}=\\frac{48}{2.5}=19.2\\text{ km/h}$$

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

Add the individual rates:

$$\\frac{1}{T}=\\frac{1}{5}+\\frac{1}{8}=\\frac{13}{40}$$

$$T=\\frac{40}{13}\\text{ h}$$

So the statement is True.`,
      },
      {
        text: "After $2$ hours of joint work, more than $70\\%$ of the tank is filled.",
        isTrue: false,
        explanation: `**B.** → False

Joint fill in $2$ h:

$$\\frac{13}{40}\\cdot 2=\\frac{13}{20}=0.65$$

That is $65\\%$, not above $70\\%$.

So the statement is False.`,
      },
      {
        text: "Beta’s hourly rate alone is $\\dfrac{1}{8}$ of the tank per hour.",
        isTrue: true,
        explanation: `**C.** → True

If Beta alone needs $8$ h for one tank, its rate is one tank over eight hours:

$$r_{\\beta}=\\frac{1}{8}\\text{ tank/h}$$

So the statement is True.`,
      },
      {
        text: "If only Alpha runs, the tank is full in less than $4.5$ hours.",
        isTrue: false,
        explanation: `**D.** → False

Alpha alone requires the full $5$ h, which is not less than $4.5$ h.

So the statement is False.`,
      },
      {
        text: "After $2$ hours together, more than $\\dfrac{1}{3}$ of the tank remains empty.",
        isTrue: true,
        explanation: `**E.** → True

Filled fraction after $2$ h is $13/20$, so empty fraction is

$$1-\\frac{13}{20}=\\frac{7}{20}=0.35$$

Since $\\dfrac{1}{3}\\approx 0.333$ and $0.35>0.333$, more than one third remains empty.

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

Rewrite the absolute value bound:

$$-5\\le 2x-7\\le 5$$

Add $7$:

$$2\\le 2x\\le 12$$

Divide by $2$:

$$1\\le x\\le 6$$

So the statement is True.`,
      },
      {
        text: "$(x-2)(x-6)<0$ exactly when $2<x<6$.",
        isTrue: true,
        explanation: `**B.** → True

The quadratic factor changes sign at $x=2$ and $x=6$. Test intervals:

At $x=0$: $(-2)(-6)>0$.

At $x=3$: $(1)(-3)<0$.

At $x=7$: $(5)(1)>0$.

Negative only on $(2,6)$.

So the statement is True.`,
      },
      {
        text: "Every $x$ with $1\\le x\\le 6$ satisfies both constraints simultaneously.",
        isTrue: false,
        explanation: `**C.** → False

At $x=1$, $|2-7|\\le 5$ holds but $(1-2)(1-6)>0$, so the product condition fails.

So the statement is False.`,
      },
      {
        text: "The combined feasible set is $(2,6)$.",
        isTrue: true,
        explanation: `**D.** → True

Intersect $[1,6]$ with $(2,6)$:

$$(2,6)$$

So the statement is True.`,
      },
      {
        text: "$x=6$ belongs to the combined feasible set.",
        isTrue: false,
        explanation: `**E.** → False

At $x=6$, $|12-7|\\le 5$ is true, but $(4)(0)=0$, and the strict inequality $(x-2)(x-6)<0$ excludes $x=6$.

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

Set supply equal to demand:

$$6p-12=60-3p$$

$$9p=72$$

$$p=8$$

Then $q=6\\cdot 8-12=36$.

So the statement is True.`,
      },
      {
        text: "At $p=10$, supply exceeds demand.",
        isTrue: true,
        explanation: `**B.** → True

From the table (or formulas):

$$q^{S}=48,\\quad q^{D}=30$$

Supply is larger.

So the statement is True.`,
      },
      {
        text: "Revenue $R(p)=p(60-3p)$ is maximized at $p=10$.",
        isTrue: true,
        explanation: `**C.** → True

Expand:

$$R(p)=60p-3p^{2}$$

This is a downward parabola; vertex at

$$p=-\\frac{60}{2(-3)}=10$$

So the statement is True.`,
      },
      {
        text: "At $p=6$, quantity demanded equals $36$ units.",
        isTrue: false,
        explanation: `**D.** → False

Substitute $p=6$ into demand:

$$q^{D}=60-18=42$$

Not $36$.

So the statement is False.`,
      },
      {
        text: "Maximum revenue equals €\\,300$.",
        isTrue: true,
        explanation: `**E.** → True

At $p=10$:

$$R(10)=10(60-30)=10\\cdot 30=300$$

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

Scale $k\\mapsto 2k$:

$$\\frac{E(2k)}{E(k)}=\\frac{4.5(2k)^{0.6}}{4.5k^{0.6}}=2^{0.6}\\approx 1.516$$

That is not a factor of $2$.

So the statement is False.`,
      },
      {
        text: "$E(100)$ is greater than $140$ MWh.",
        isTrue: true,
        explanation: `**B.** → True

Compute:

$$100^{0.6}=10^{1.2}\\approx 31.622$$

$$E(100)=4.5\\cdot 31.622\\approx 142.3$$

That exceeds $140$.

So the statement is True.`,
      },
      {
        text: "The elasticity-style ratio $\\dfrac{kE'(k)}{E(k)}$ equals $0.6$ for all $k>0$.",
        isTrue: true,
        explanation: `**C.** → True

Differentiate the power law:

$$E'(k)=4.5\\cdot 0.6\\,k^{-0.4}$$

Form the ratio:

$$\\frac{kE'(k)}{E(k)}=\\frac{k\\cdot 4.5\\cdot 0.6\\,k^{-0.4}}{4.5k^{0.6}}=0.6$$

So the statement is True.`,
      },
      {
        text: "$E(25)$ equals $E(100)/2$.",
        isTrue: false,
        explanation: `**D.** → False

Compare using exponents:

$$\\frac{E(25)}{E(100)}=\\left(\\frac{25}{100}\\right)^{0.6}=0.25^{0.6}\\approx 0.435$$

Not one half.

So the statement is False.`,
      },
      {
        text: "For $k>0$, output per panel (average) $E(k)/k$ decreases as $k$ increases.",
        isTrue: true,
        explanation: `**E.** → True

Average output per panel:

$$\\frac{E(k)}{k}=4.5k^{-0.4}$$

The exponent $-0.4$ is negative, so the average falls when $k$ rises.

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

Differentiate:

$$C'(x)=3x^{2}-18x+24=3(x-2)(x-4)$$

The derivative changes from positive to negative at $x=2$.

So the statement is True.`,
      },
      {
        text: "$C(4)=2$ (thousand €).",
        isTrue: true,
        explanation: `**B.** → True

$$C(4)=64-144+96-14=2$$

So the statement is True.`,
      },
      {
        text: "On $[0,6]$, the global minimum of $C$ occurs at $x=0$.",
        isTrue: true,
        explanation: `**C.** → True

$$C(0)=-14,\\quad C(2)=6,\\quad C(4)=2,\\quad C(6)=22$$

The smallest value is $-14$ at $x=0$.

So the statement is True.`,
      },
      {
        text: "$C(6)=20$ (thousand €).",
        isTrue: false,
        explanation: `**D.** → False

$$C(6)=216-324+144-14=22$$

So the statement is False.`,
      },
      {
        text: "The equation $C'(x)=0$ has exactly two distinct roots in $[0,6]$.",
        isTrue: true,
        explanation: `**E.** → True

$$C'(x)=3(x-2)(x-4)$$

Roots $x=2$ and $x=4$ lie in $[0,6]$.

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

$$N(10)=800e^{0.5}\\approx 800\\cdot 1.6487\\approx 1319$$

So the statement is True.`,
      },
      {
        text: "The doubling time of the culture is exactly $10$ days.",
        isTrue: false,
        explanation: `**B.** → False

$$800e^{0.05t}=1600\\Rightarrow t=\\frac{\\ln 2}{0.05}\\approx 13.86$$

So the statement is False.`,
      },
      {
        text: "$\\ln N(t)=\\ln 800+0.05t$.",
        isTrue: true,
        explanation: `**C.** → True

Logarithm of $N(t)=800e^{0.05t}$ gives the claimed affine relation in $t$.

So the statement is True.`,
      },
      {
        text: "In $14$ days the count is below $1600$ million.",
        isTrue: false,
        explanation: `**D.** → False

$$N(14)=800e^{0.7}\\approx 1611>1600$$

So the statement is False.`,
      },
      {
        text: "The continuous per-day growth rate parameter equals $0.05$.",
        isTrue: true,
        explanation: `**E.** → True

The exponent $0.05t$ identifies rate $0.05$ in continuous form.

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

Differentiate position:

$$v(t)=3t^{2}-12t+9$$

At $t=2$:

$$v(2)=12-24+9=-3$$

So the statement is True.`,
      },
      {
        text: "The particle is instantaneously at rest at $t=3$ s.",
        isTrue: true,
        explanation: `**B.** → True

Factor velocity:

$$v(t)=3(t-1)(t-3)$$

Substitute $t=3$:

$$v(3)=0$$

So the statement is True.`,
      },
      {
        text: "$a(2)=0\\,\\text{m/s}^{2}$.",
        isTrue: true,
        explanation: `**C.** → True

Acceleration:

$$a(t)=6t-12$$

$$a(2)=12-12=0$$

So the statement is True.`,
      },
      {
        text: "For all $t>1$, velocity is strictly positive.",
        isTrue: false,
        explanation: `**D.** → False

On $(1,3)$ the factor $(t-3)<0$ while $(t-1)>0$, so $v(t)<0$.

Example: $v(2)=-3$.

So the statement is False.`,
      },
      {
        text: "$s(3)=0$ m.",
        isTrue: true,
        explanation: `**E.** → True

Factor position as $s(t)=t(t-3)^{2}$:

$$s(3)=3\\cdot 0^{2}=0$$

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

Three favorable sequences out of eight equally likely outcomes.

So the statement is True.`,
      },
      {
        text: "The probability of at least one tail equals $\\dfrac{7}{8}$.",
        isTrue: true,
        explanation: `**B.** → True

$$1-P(\\text{HHH})=1-\\frac{1}{8}=\\frac{7}{8}$$

So the statement is True.`,
      },
      {
        text: "For the independent events, $P(A\\cap B)=0.20$.",
        isTrue: false,
        explanation: `**C.** → False

$$P(A\\cap B)=0.35\\cdot 0.40=0.14$$

So the statement is False.`,
      },
      {
        text: "$P(A\\cup B)=0.75$ for the independent events.",
        isTrue: false,
        explanation: `**D.** → False

$$P(A\\cup B)=0.35+0.40-0.14=0.61$$

So the statement is False.`,
      },
      {
        text: "Exactly three heads and exactly zero heads are equally likely.",
        isTrue: true,
        explanation: `**E.** → True

Each specific length-$3$ sequence has probability $1/8$.

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

$$E(X)=np=10\\cdot 0.30=3$$

So the statement is True.`,
      },
      {
        text: "$P(X=3)=\\dbinom{10}{3}(0.30)^{3}(0.70)^{7}$.",
        isTrue: true,
        explanation: `**B.** → True

This is the binomial pmf at $k=3$.

So the statement is True.`,
      },
      {
        text: "$P(X=3)$ is approximately $0.267$ (three decimal places).",
        isTrue: true,
        explanation: `**C.** → True

Numerical evaluation gives about $0.267$.

So the statement is True.`,
      },
      {
        text: "$P(X\\ge 2)$ is less than $0.80$.",
        isTrue: false,
        explanation: `**D.** → False

$$P(X\\ge 2)\\approx 0.851$$

So the statement is False.`,
      },
      {
        text: "The most likely single count of failures is $k=3$.",
        isTrue: true,
        explanation: `**E.** → True

$P(X=3)$ exceeds neighboring masses $P(X=2)$ and $P(X=4)$.

So the statement is True.`,
      },
    ],
  },
];
