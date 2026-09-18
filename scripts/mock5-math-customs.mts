/**
 * Mock Exam 5 — hardened custom math (Q22–34; Q25 unchanged pipes).
 * Teacher-step explanations; long multi-factor products jump to the final number.
 */

function binomCompact(n: number, k: number, val: number): string {
  const kEff = Math.min(k, n - k);
  const numer = Array.from({ length: kEff }, (_, i) => String(n - i)).join(" \\cdot ");
  const denom = Array.from({ length: kEff }, (_, i) => String(i + 1)).join(" \\cdot ");
  if (kEff >= 5) {
    return `$$
\\binom{${n}}{${k}} = \\dfrac{${n}!}{${k}!(${n}-${k})!}
$$

$$
\\dfrac{${n}!}{${k}!(${n - k})!} = \\dfrac{${numer}}{${denom}} = ${val}
$$

$$
\\binom{${n}}{${k}} = ${val}
$$`;
  }
  return `$$
\\binom{${n}}{${k}} = \\dfrac{${numer}}{${denom}} = ${val}
$$`;
}

/** Q22 — hard verbal three-set counting (inclusion–exclusion traps). */
export function buildMathQ22Sets() {
  const context = `A mid-size firm unlocks client-data access only for staff who finish three compliance modules: Privacy, Security, and Audit. Of the $200$ staff in the access programme, $120$ finished Privacy, $95$ finished Security, and $80$ finished Audit. The pairwise overlaps are $48$ for Privacy and Security, $40$ for Privacy and Audit, and $35$ for Security and Audit; $18$ finished all three. Staff who finished none of the three remain blocked from client data.`;

  // |P∪S∪A|=120+95+80-48-40-35+18=190; none=10
  // only P=120-48-40+18=50; only S=95-48-35+18=30; only A=80-40-35+18=23
  // |P∪S|=120+95-48=167

  const statements = [
    "Exactly $10$ staff finished none of the three modules.",
    "Strictly more staff finished every module than finished Audit and nothing else.",
    "The staff who finished Privacy but neither of the other two outnumber those who finished Security but neither of the other two.",
    "Finishing Audit without also finishing Privacy is impossible under these counts.",
    "The staff who finished at least one of Privacy or Security number strictly more than $160$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Use inclusion–exclusion on the three finished-module sets to find how many staff finished at least one module, then subtract from the programme size $200$.

$$
|P\\cup S\\cup A|=120+95+80-48-40-35+18
$$

$$
=295-123+18=190
$$

Staff who finished none:

$$
200-190=10
$$

So exactly $10$ remain blocked — matching the claim.

So the statement is True.`,

    `**B.** → False

Compare the all-three count with the “Audit only” region of the Venn diagram. The all-three count is given as $18$. Only Audit is

$$
|A|-|P\\cap A|-|S\\cap A|+|P\\cap S\\cap A|=80-40-35+18=23
$$

The claim needs $18>23$, but $18$ is smaller. Finishing every module is therefore not strictly more common than finishing Audit alone.

So the statement is False.`,

    `**C.** → True

“Privacy only” subtracts the two Privacy pairwise overlaps and adds back the triple (inclusion–exclusion for one region):

$$
|P|-|P\\cap S|-|P\\cap A|+|P\\cap S\\cap A|=120-48-40+18=50
$$

Likewise Security only:

$$
95-48-35+18=30
$$

Compare the two exclusive regions: $50>30$. Privacy-only staff therefore outnumber Security-only staff, which is exactly what the claim asserts.

So the statement is True.`,

    `**D.** → False

The claim says finishing Audit without Privacy is impossible. But anyone in “Audit only” finished Audit and neither Privacy nor Security. That exclusive Audit region has size

$$
80-40-35+18=23>0
$$

A nonempty region is a concrete counterexample: those $23$ staff finished Audit without Privacy. The impossibility claim therefore fails.

So the statement is False.`,

    `**E.** → True

Two-set inclusion–exclusion for Privacy or Security (Audit is irrelevant for this letter):

$$
|P\\cup S|=|P|+|S|-|P\\cap S|=120+95-48=167
$$

Compare with the threshold in the claim:

$$
167>160
$$

so strictly more than $160$ staff finished at least one of Privacy or Security. The claim therefore holds.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.SETS5",
    id: "MATH 1.MOCK.SETS5",
    title: "Three compliance modules — verbal inclusion–exclusion",
    chapter: 1,
    subsection: "1.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Union $190$, none $10$. Only Audit $23>18$ (all three). Only Privacy $50>$ only Security $30$. Audit without Privacy possible. $|P\\cup S|=167>160$.`,
  };
}

/**
 * Q23 — three-number symmetric archive (Vieta style, harder than two-variable bank).
 */
export function buildMathQ23Grind() {
  const context = `An algebra archive stores three real numbers $a$, $b$ and $c$ only through the records

$$
a+b+c=12,\\qquad ab+bc+ca=47,\\qquad abc=60.
$$

The original order was not recorded, so every conclusion must follow from symmetric identities or from the cubic having roots $a$, $b$ and $c$. No decimal approximation is used in the audit.

Decide whether each statement is true or false.`;

  // a²+b²+c² = 144 - 2·47 = 50
  // (a-b)²+(b-c)²+(c-a)² = 2(50-47) = 6
  // a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca) = 12·3 = 36 ⇒ a³+b³+c³ = 36+180 = 216
  // roots of t³-12t²+47t-60 = (t-3)(t-4)(t-5) ⇒ {3,4,5}
  // 1/a+1/b+1/c = 47/60

  const statements = [
    "$a^{2}+b^{2}+c^{2}=50$.",
    "$(a-b)^{2}+(b-c)^{2}+(c-a)^{2}=6$.",
    "$a^{3}+b^{3}+c^{3}=220$.",
    "$\\{a,b,c\\}=\\{3,4,5\\}$.",
    "$\\dfrac{1}{a}+\\dfrac{1}{b}+\\dfrac{1}{c}=\\dfrac{60}{47}$.",
  ];

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

Expand the square of the sum and rearrange for the sum of squares:

$$
(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca)
$$

$$
a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ca)
$$

Plug in the archive values $a+b+c=12$ and $ab+bc+ca=47$:

$$
a^{2}+b^{2}+c^{2}=12^{2}-2\\cdot 47=144-94=50
$$

The sum of squares is therefore exactly $50$, as claimed.

So the statement is True.`,

    `**B.** → True

Expand the three squared gaps into a standard identity:

$$
(a-b)^{2}+(b-c)^{2}+(c-a)^{2}=2\\bigl(a^{2}+b^{2}+c^{2}-ab-bc-ca\\bigr)
$$

From letter A the sum of squares is $50$, and the pairwise product sum is $47$, so

$$
2(50-47)=2\\cdot 3=6
$$

The left-hand side therefore evaluates to $6$, matching the claim.

So the statement is True.`,

    `**C.** → False

Use the standard cubic identity linking cubes to the elementary symmetric sums:

$$
a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\bigl(a^{2}+b^{2}+c^{2}-ab-bc-ca\\bigr)
$$

The second factor is $50-47=3$, so

$$
a^{3}+b^{3}+c^{3}-3abc=12\\cdot 3=36
$$

$$
a^{3}+b^{3}+c^{3}=36+3\\cdot 60=36+180=216
$$

The claimed value $220$ is too large by $4$, so the statement fails.

So the statement is False.`,

    `**D.** → True

By Vieta, $a$, $b$, $c$ are the roots of the monic cubic built from the three archive records:

$$
t^{3}-12t^{2}+47t-60=0
$$

Testing $t=3$: $27-108+141-60=0$, so $t=3$ is a root. Polynomial division (or synthetic division) then factors

$$
(t-3)(t^{2}-9t+20)=(t-3)(t-4)(t-5)
$$

Hence the unordered triple is exactly $\\{3,4,5\\}$.

So the statement is True.`,

    `**E.** → False

Combine the three reciprocals over a common denominator using the archive products:

$$
\\dfrac{1}{a}+\\dfrac{1}{b}+\\dfrac{1}{c}=\\dfrac{ab+bc+ca}{abc}=\\dfrac{47}{60}
$$

The claim flips numerator and denominator to $60/47$. That reciprocal of the true sum is a classic trap and does not equal $\\dfrac{47}{60}$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 2.MOCK.GRIND",
    id: "MATH 2.MOCK.GRIND",
    title: "Three-number archive — symmetric identities and Vieta",
    chapter: 2,
    subsection: "2.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Squares sum to $50$; pairwise squared gaps sum to $6$; cubes sum to $216$ not $220$; roots $\\{3,4,5\\}$; reciprocal sum is $47/60$, not flipped.`,
  };
}

/** Q24 — financial PV with consistent number formatting everywhere. */
export function buildMathQ24Finance() {
  const context = `A scholarship fund will receive three gifts: $10000$ after $1$ year, $12000$ after $3$ years, and $14000$ after $4$ years. The annual effective discount rate is $5\\%$.

A second programme is a level perpetuity-due of $10000$ paid at the start of every year (including today), also at $5\\%$.

Decide whether each statement is true or false.`;

  const statements = [
    "The present value of the three gifts exceeds $32000$.",
    "The present value of the single gift $10000$ due in one year is strictly less than $9600$.",
    "At $5\\%$, the perpetuity-due of $10000$ per year has present value exactly $210000$.",
    "Moving every gift one year earlier would strictly decrease the present value of the three-gift package.",
    "The present value of the $12000$ gift (year $3$) exceeds the present value of the $14000$ gift (year $4$).",
  ];

  const answer_key = [false, true, true, false, false];

  const tactical_explanations = [
    `**A.** → False

Discount each gift at $5\\%$ back to today and add:

$$
\\mathrm{PV}=\\dfrac{10000}{1.05}+\\dfrac{12000}{1.05^{3}}+\\dfrac{14000}{1.05^{4}}
$$

Approximate each term separately:

$$
\\dfrac{10000}{1.05}\\approx 9523.81
$$

$$
\\dfrac{12000}{1.05^{3}}\\approx 10366.05,\\qquad \\dfrac{14000}{1.05^{4}}\\approx 11517.83
$$

$$
\\mathrm{PV}\\approx 9523.81+10366.05+11517.83=31407.69
$$

Since $31407.69<32000$, the package does not exceed $32000$.

So the statement is False.`,

    `**B.** → True

Only the one-year gift matters here. Discount $10000$ for a single year at the effective rate $5\\%$:

$$
\\dfrac{10000}{1.05}\\approx 9523.81
$$

Compare that present value with the claimed threshold $9600$:

$$
9523.81<9600
$$

The discounted gift is therefore strictly less than $9600$, so the statement holds.

So the statement is True.`,

    `**C.** → True

A level perpetuity-due of amount $R$ at effective rate $i$ pays at the start of every year, so its present value is one period larger than an ordinary perpetuity:

$$
\\ddot{a}_{\\infty}=R\\cdot\\dfrac{1+i}{i}
$$

With $R=10000$ and $i=0.05$:

$$
10000\\cdot\\dfrac{1.05}{0.05}=10000\\cdot 21=210000
$$

exactly as claimed.

So the statement is True.`,

    `**D.** → False

Moving every gift one year earlier replaces each discount factor $1/(1.05)^{n}$ by $1/(1.05)^{n-1}$. Because $1.05>1$, each new factor is strictly larger, so every individual present value rises. The sum of three larger positive terms is larger, not smaller — the claim that PV decreases is the wrong direction.

So the statement is False.`,

    `**E.** → False

Reuse the year-$3$ and year-$4$ terms from letter A:

$$
\\dfrac{12000}{1.05^{3}}\\approx 10366.05
$$

$$
\\dfrac{14000}{1.05^{4}}\\approx 11517.83
$$

The year-$4$ gift has the larger present value despite arriving later, because the extra $2000$ of face value outweighs one more year of discounting. The claim that the year-$3$ PV is larger is therefore false.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 3.MOCK.PVFMT",
    id: "MATH 3.MOCK.PVFMT",
    title: "Gifts and perpetuity-due — consistent cash formatting",
    chapter: 3,
    subsection: "3.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Three-gift PV ≈ $31408<32000$. One-year $10000$ discounts to ≈ $9524$. Perpetuity-due $=210000$. Earlier payment raises PV. Year-$4$ gift has larger PV than year-$3$.`,
  };
}

/** Q25 — kept (pipes). */
export function buildMathQ25Pipes() {
  const context = `Two inlet pipes and one drain serve a tank.

Pipe A alone fills the empty tank in $6$ hours.
Pipe B alone fills the empty tank in $4$ hours.
The drain alone empties a full tank in $12$ hours.

All three run together from empty. Decide whether each statement is true or false.`;

  const statements = [
    "A’s fill rate is strictly greater than $\\tfrac{1}{5}$ tank per hour.",
    "The combined net rate of A, B and the drain is exactly $\\tfrac{5}{12}$ tank per hour.",
    "Starting from empty with all three open, the tank is full in strictly less than $3$ hours.",
    "If only A and the drain run (B closed), the tank still fills, and the time needed exceeds $8$ hours.",
    "B alone fills more of the tank in $1$ hour than A and the drain together add net in $1$ hour.",
  ];

  const answer_key = [false, false, false, true, true];

  const tactical_explanations = [
    `**A.** → False

Pipe A fills one tank in $6$ hours, so its hourly rate is the reciprocal of that time:

$$
r_A=\\dfrac{1}{6}\\ \\text{tank per hour}
$$

Compare with the claimed threshold $\\tfrac{1}{5}$ by cross-multiplying (or by noting $5<6$):

$$
\\dfrac{1}{6}<\\dfrac{1}{5}
$$

A’s rate is therefore strictly smaller than $\\tfrac{1}{5}$, not greater. The claim has the inequality the wrong way.

So the statement is False.`,

    `**B.** → False

Add the two inlet rates and subtract the drain rate, using a common denominator of $12$:

$$
r_A+r_B-r_D=\\dfrac{1}{6}+\\dfrac{1}{4}-\\dfrac{1}{12}
$$

$$
=\\dfrac{2}{12}+\\dfrac{3}{12}-\\dfrac{1}{12}=\\dfrac{4}{12}=\\dfrac{1}{3}
$$

The net combined rate is $\\tfrac{1}{3}$. The claim asserts equality with $\\tfrac{5}{12}$, but $\\tfrac{1}{3}=\\tfrac{4}{12}\\neq\\tfrac{5}{12}$.

So the statement is False.`,

    `**C.** → False

From letter B the net fill rate with all three open is $\\tfrac{1}{3}$ tank per hour. Starting from empty, the time to reach one full tank is the reciprocal of that rate:

$$
T=\\dfrac{1}{1/3}=3\\ \\text{hours}
$$

exactly. The claim requires a fill time strictly less than $3$ hours, so the strict inequality fails even though the tank does fill in finite time.

So the statement is False.`,

    `**D.** → True

With B closed, only A and the drain remain. Their net rate is

$$
r_A-r_D=\\dfrac{1}{6}-\\dfrac{1}{12}=\\dfrac{2}{12}-\\dfrac{1}{12}=\\dfrac{1}{12}
$$

The net rate is still positive, so the tank fills. The time needed is

$$
T=\\dfrac{1}{1/12}=12\\ \\text{hours}
$$

and $12>8$, so the fill time exceeds $8$ hours as claimed.

So the statement is True.`,

    `**E.** → True

B alone contributes one-quarter of a tank in one hour:

$$
r_B=\\dfrac{1}{4}
$$

A together with the drain contribute the net rate from letter D:

$$
r_A-r_D=\\dfrac{1}{12}
$$

Compare the two hourly contributions:

$$
\\dfrac{1}{4}>\\dfrac{1}{12}
$$

so B alone fills more in one hour than A and the drain add net in one hour.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 4.MOCK.PIPES",
    id: "MATH 4.MOCK.PIPES",
    title: "Two inlets and a drain — rates and fill times",
    chapter: 4,
    subsection: "4.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Rates: $A=\\tfrac{1}{6}$, $B=\\tfrac{1}{4}$, drain $=\\tfrac{1}{12}$. Net all three $=\\tfrac{1}{3}$ (time $3$). A+drain $=\\tfrac{1}{12}$ (time $12$).`,
  };
}

/** Q26 — 3-product break-even mix (harder linear system). */
export function buildMathQ26BreakEven() {
  const context = `A workshop sells three products $X$, $Y$, $Z$ with unit contributions (price minus variable cost)

$$
c_X=4,\\qquad c_Y=5,\\qquad c_Z=6
$$

(in EUR per unit; keep EUR in prose). Monthly fixed costs are EUR $4800$. Let $x,y,z$ be the monthly unit volumes. A sales plan forces the mix ratios

$$
x=2z,\\qquad y=3z
$$

and requires the plan to sit exactly at break-even (total contribution equals fixed costs).

Decide whether each statement is true or false.`;

  const statements = [
    "At break-even under the stated mix, the volume of product $Z$ is strictly greater than $160$.",
    "The break-even volume of $Z$ is an integer number of units.",
    "Under the mix, break-even total unit volume $x+y+z$ is strictly less than $1000$.",
    "If fixed costs rose to EUR $5800$ with the same mix ratios, the required $z$ would exceed $200$.",
    "Dropping product $Y$ (set $y=0$) while keeping $x=2z$ and the original EUR $4800$ fixed costs would force a strictly larger break-even $z$ than in the three-product plan.",
  ];

  // z=4800/29≈165.52>160 True; not integer False; total≈993<1000 True; at 5800 z=200 not > False; without Y larger True
  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Break-even means total contribution equals fixed costs EUR $4800$:

$$
4x+5y+6z=4800
$$

Substitute the forced mix ratios $x=2z$ and $y=3z$:

$$
4(2z)+5(3z)+6z=8z+15z+6z=29z
$$

$$
29z=4800\\qquad\\Rightarrow\\qquad z=\\dfrac{4800}{29}\\approx 165.52
$$

Since $165.52>160$, the break-even volume of product $Z$ is strictly greater than $160$.

So the statement is True.`,

    `**B.** → False

From letter A the break-even $Z$-volume is the exact fraction

$$
z=\\dfrac{4800}{29}
$$

Check whether $29$ divides $4800$ evenly:

$$
29\\cdot 165=4785,\\qquad 4800-4785=15\\neq 0
$$

The remainder $15$ is nonzero, so $z$ is not an integer number of units. The claim that break-even $z$ is an integer fails.

So the statement is False.`,

    `**C.** → True

Under the mix $x=2z$, $y=3z$, total unit volume collapses to a multiple of $z$:

$$
x+y+z=2z+3z+z=6z
$$

$$
6z=\\dfrac{6\\cdot 4800}{29}=\\dfrac{28800}{29}\\approx 993.10
$$

Compare with the claimed threshold $1000$:

$$
993.10<1000
$$

so break-even total unit volume is strictly less than $1000$.

So the statement is True.`,

    `**D.** → False

Keep the same mix coefficient $29z$ but replace fixed costs by the higher figure EUR $5800$:

$$
29z=5800\\qquad\\Rightarrow\\qquad z=\\dfrac{5800}{29}=200
$$

exactly. The claim needs the strict inequality $z>200$, but equality holds instead. A non-strict threshold does not satisfy “exceed $200$”, so the statement fails.

So the statement is False.`,

    `**E.** → True

Drop product $Y$ by setting $y=0$, while keeping $x=2z$ and the original fixed costs EUR $4800$:

$$
4(2z)+6z=8z+6z=14z=4800
$$

$$
z=\\dfrac{4800}{14}\\approx 342.86
$$

Compare with the three-product break-even $z\\approx 165.52$ from letter A: $342.86>165.52$, so the required $z$ is strictly larger without $Y$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.BE3",
    id: "MATH 5.MOCK.BE3",
    title: "Three-product mix — break-even linear system",
    chapter: 5,
    subsection: "5.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Mix $x=2z$, $y=3z$ ⇒ $29z=4800$, $z\\approx 165.5$. Total units $\\approx 993$. At EUR $5800$, $z=200$ exactly. Dropping $Y$ raises $z$.`,
  };
}

/** Q27 — much harder inequalities with traps. */
export function buildMathQ27Ineq() {
  const context = `Decide whether each inequality claim is true or false.`;

  const statements = [
    "The solution set of $|x-1|+|x-4|\\le 3$ is exactly $[1,4]$.",
    "The solution set of $\\sqrt{2x-1}<x-2$ is exactly $(2,+\\infty)$.",
    "The solution set of $\\dfrac{x-2}{x+1}\\le 0$ is exactly $[-1,2]$.",
    "The solution set of $x^{2}-|x|-2<0$ is exactly $(-2,2)$.",
    "The solution set of $|2x+1|>|x-3|$ is exactly $(-\\infty,-4)\\cup\\bigl(\\tfrac{2}{3},+\\infty\\bigr)$.",
  ];

  const answer_key = [true, false, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Interpret $|x-1|+|x-4|$ as the sum of distances from $x$ to $1$ and to $4$ on the real line. For any real $x$, the triangle inequality on the line gives

$$
|x-1|+|x-4|\\ge |(4)-(1)|=3
$$

with equality if and only if $x$ lies between the two points, i.e. on the closed interval $[1,4]$. Therefore the inequality $|x-1|+|x-4|\\le 3$ forces equality, and the solution set is exactly $[1,4]$.

So the statement is True.`,

    `**B.** → False

Domain of the square root: $2x-1\\ge 0$, so $x\\ge \\tfrac{1}{2}$. Also a nonnegative square root cannot be strictly less than a nonpositive number, so one needs $x-2>0$, i.e. $x>2$. Square both sides on $x>2$:

$$
2x-1<(x-2)^{2}=x^{2}-4x+4
$$

$$
0<x^{2}-6x+5=(x-1)(x-5)
$$

On $x>2$ this holds precisely when $x>5$. The true solution is $(5,+\\infty)$, not the claimed $(2,+\\infty)$.

So the statement is False.`,

    `**C.** → False

Critical points are the zero $x=2$ and the vertical asymptote $x=-1$ where the expression is undefined. A sign chart shows the quotient is negative on $(-1,2)$ and zero at $x=2$, so the solution of $\\le 0$ is $(-1,2]$. Including the closed endpoint $x=-1$ is illegal because the expression is undefined there. The claimed set $[-1,2]$ is therefore wrong.

So the statement is False.`,

    `**D.** → True

Substitute $u=|x|\\ge 0$ to remove the absolute value and obtain an ordinary quadratic inequality in $u$:

$$
u^{2}-u-2<0\\qquad\\Rightarrow\\qquad (u-2)(u+1)<0
$$

The roots are $u=-1$ and $u=2$. For $u\\ge 0$ the product is negative precisely when $0\\le u<2$, i.e. $|x|<2$. Translating back to $x$ gives the open interval $x\\in(-2,2)$, matching the claim.

So the statement is True.`,

    `**E.** → True

Both absolute values are nonnegative, so squaring preserves the inequality direction:

$$
(2x+1)^{2}>(x-3)^{2}
$$

$$
4x^{2}+4x+1>x^{2}-6x+9\\qquad\\Rightarrow\\qquad 3x^{2}+10x-8>0
$$

$$
(3x-2)(x+4)>0
$$

The critical roots are $x=-4$ and $x=\\tfrac{2}{3}$. The quadratic (leading coefficient positive) is positive outside the roots: $x<-4$ or $x>\\tfrac{2}{3}$, as claimed.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 6.MOCK.TRAP",
    id: "MATH 6.MOCK.TRAP",
    title: "Hard inequalities — absolute, radical, rational traps",
    chapter: 6,
    subsection: "6.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$|x-1|+|x-4|\\le 3\\Leftrightarrow[1,4]$. Radical inequality → $(5,\\infty)$. Rational ≤0 → $(-1,2]$. $x^{2}-|x|-2<0\\Leftrightarrow(-2,2)$. Absolute comparison → $(-\\infty,-4)\\cup(2/3,\\infty)$.`,
  };
}

/** Q28 — piecewise / conditional function claims (not a throw parabola). */
export function buildMathQ28Piecewise() {
  const context = `Define

$$
f(x)=
\\begin{cases}
2x+1 & \\text{if }x<1,\\\\
x^{2}-2x+4 & \\text{if }x\\ge 1.
\\end{cases}
$$

Decide whether each statement is true or false.`;

  const statements = [
    "$f$ is continuous at $x=1$.",
    "$f$ is differentiable at $x=1$.",
    "For every $x\\ge 1$ one has $f(x)\\ge 3$, with equality at $x=1$.",
    "The global minimum value of $f$ on $\\mathbb{R}$ is $3$.",
    "On the region $x<1$, the equation $f(x)=0$ has a negative root.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Check the left-hand limit, the right-hand value, and $f(1)$. From the left piece $2x+1$,

$$
\\lim_{x\\to 1^{-}}f(x)=2\\cdot 1+1=3
$$

From the right piece (which also defines $f(1)$),

$$
f(1)=1^{2}-2\\cdot 1+4=3
$$

Left limit, right-hand value, and function value all equal $3$, so the three continuity conditions hold at $x=1$.

So the statement is True.`,

    `**B.** → False

Differentiability at the join requires matching one-sided derivatives. On $x<1$, $f'(x)=2$, so the left-hand derivative at $1$ is $2$. On $x\\ge 1$, $f'(x)=2x-2$, hence

$$
f'_+(1)=2\\cdot 1-2=0
$$

Since $2\\neq 0$, the one-sided derivatives disagree and $f$ is not differentiable at $x=1$. Continuity alone (letter A) is not enough for differentiability.

So the statement is False.`,

    `**C.** → True

On $x\\ge 1$ complete the square for the quadratic piece to reveal its vertex value:

$$
f(x)=x^{2}-2x+4=(x-1)^{2}+3
$$

The squared term is nonnegative and vanishes only at $x=1$, so

$$
f(x)\\ge 3\\qquad\\text{for all }x\\ge 1
$$

with equality precisely at $x=1$, which is exactly the claim.

So the statement is True.`,

    `**D.** → False

Letter C only controls the right-hand piece $x\\ge 1$. On the left piece $x<1$ one has the linear formula

$$
f(x)=2x+1
$$

As $x\\to-\\infty$, this expression tends to $-\\infty$, so $f$ is unbounded below on $\\mathbb{R}$. There is therefore no global minimum value equal to $3$ on the whole real line.

So the statement is False.`,

    `**E.** → True

Restrict to the open half-line $x<1$ and solve $f(x)=0$ on the linear piece:

$$
2x+1=0\\qquad\\Rightarrow\\qquad x=-\\dfrac{1}{2}
$$

The candidate $x=-\\tfrac{1}{2}$ lies in the region $x<1$, and it is negative. Hence the left-region equation has a negative root, as claimed.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.PIECE",
    id: "MATH 7.MOCK.PIECE",
    title: "Piecewise linear–quadratic — continuity and traps",
    chapter: 7,
    subsection: "7.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Continuous at $1$, not differentiable there. On $[1,\\infty)$ minimum $3$ at $x=1$, but no global min on $\\mathbb{R}$. Left piece zero at $x=-1/2$.`,
  };
}

/** Q29 — limits with letters only (no numeric substitution grind). */
export function buildMathQ29Limits() {
  const context = `Let $A>0$ and $p\\in\\mathbb{R}$ be parameters. Consider

$$
f(x)=A x^{p}\\qquad(x>0).
$$

Decide whether each statement is true or false.`;

  const statements = [
    "If $p>0$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)=0$.",
    "If $p<0$, then $\\displaystyle\\lim_{x\\to +\\infty}f(x)=0$.",
    "If $p=0$, then $f$ is constant on $(0,+\\infty)$.",
    "For every real $p$, the ratio $f(2x)/f(x)$ does not depend on $x$.",
    "If $p=-1$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)$ is a finite positive number.",
  ];

  const answer_key = [true, true, true, true, false];

  const tactical_explanations = [
    `**A.** → True

Fix $A>0$ and assume the exponent satisfies $p>0$. The model is then a positive multiple of a positive power of $x$. On the half-line $x>0$ one may rewrite that power through the exponential–logarithm identity

$$
x^{p}=e^{p\\ln x}.
$$

As $x\\to 0^{+}$, one has $\\ln x\\to-\\infty$. Because $p$ is a fixed positive number, the product $p\\ln x$ also tends to $-\\infty$, and therefore

$$
e^{p\\ln x}\\to e^{-\\infty}=0.
$$

Multiplying by the constant amplitude $A$ cannot rescue a vanishing exponential:

$$
f(x)=A\\,x^{p}=A\\,e^{p\\ln x}\\to A\\cdot 0=0.
$$

(The same conclusion follows from the elementary rule that every positive power of $x$ tends to $0$ at the origin from the right; the exponential rewriting simply makes the mechanism explicit without plugging in any particular numerical value of $p$.) Hence

$$
\\lim_{x\\to 0^{+}}f(x)=0
$$

whenever $p>0$, which is exactly the claim.

So the statement is True.`,

    `**B.** → True

Write the negative exponent as $p=-q$ with $q>0$. Then

$$
f(x)=\\dfrac{A}{x^{q}}.
$$

As $x\\to+\\infty$ the denominator diverges, so $f(x)\\to 0$.

So the statement is True.`,

    `**C.** → True

The zero-exponent case collapses by the power identity $x^{0}=1$ (valid for every $x>0$):

$$
f(x)=A\\,x^{0}=A\\cdot 1=A.
$$

So on $(0,+\\infty)$ the function is the constant function with value $A$. No $x$-dependence remains once $p=0$, which is precisely what “constant on $(0,+\\infty)$” means.

So the statement is True.`,

    `**D.** → True

$$
\\dfrac{f(2x)}{f(x)}=\\dfrac{A(2x)^{p}}{A x^{p}}=2^{p}.
$$

The right-hand side depends on $p$ alone, never on $x$.

So the statement is True.`,

    `**E.** → False

Specialise to $p=-1$. The model becomes the reciprocal

$$
f(x)=A\\,x^{-1}=\\dfrac{A}{x}\\qquad(x>0).
$$

Ask what happens as $x$ approaches the origin from the right. The numerator is the fixed positive constant $A$, while the denominator $x$ shrinks toward $0$ through positive values. For every candidate finite threshold $M>0$ one can choose $x$ small enough that

$$
\\dfrac{A}{x}>M
$$

— concretely, take $0<x<A/M$. That is the definition of divergence to $+\\infty$:

$$
\\lim_{x\\to 0^{+}}\\dfrac{A}{x}=+\\infty.
$$

An infinite limit is not a real number at all, so it cannot be a “finite positive number.” The claim therefore fails: the right-hand limit at the origin is infinite, not finite and positive. (The same blow-up occurs for every negative exponent, but the letter only needs the concrete case $p=-1$.)

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.LIM",
    id: "MATH 8.MOCK.LIM",
    title: "Power model $Ax^{p}$ — limits in letters only",
    chapter: 8,
    subsection: "8.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Sign of $p$ controls $0^{+}$ and $+\\infty$ limits. $p=0$ ⇒ constant $A$. Ratio $f(2x)/f(x)=2^{p}$ independent of $x$. For $p=-1$, $A/x$ blows up at $0^{+}$.`,
  };
}

/** Q30 — parametric cubic equation with heavy calculation. */
export function buildMathQ30Param() {
  const context = `For a real parameter $k$, consider

$$
x^{3}-3x^{2}+(k+2)x-k=0.
$$

Decide whether each statement is true or false.`;

  const statements = [
    "$x=1$ is a real root for every real $k$.",
    "When $k=1$, the equation has exactly two distinct real roots.",
    "When $k=0$, the equation has three distinct real roots.",
    "When $k=2$, the equation has exactly one real root.",
    "Whenever $k\\le 1$, the sum of all real roots counted with multiplicity equals $3$.",
  ];

  const answer_key = [true, false, true, true, true];

  const tactical_explanations = [
    `**A.** → True

Plug $x=1$ into the cubic and expand term by term, treating $k$ as an arbitrary real parameter:

$$
1^{3}-3\\cdot 1^{2}+(k+2)\\cdot 1-k=1-3+(k+2)-k.
$$

The constant pieces cancel first,

$$
1-3=-2,
$$

and then the parameter pieces cancel as well,

$$
(k+2)-k=2,
$$

so the whole expression collapses to

$$
-2+2=0.
$$

The identity $0=0$ does not constrain $k$ at all: every real $k$ makes $x=1$ a root. Once a linear factor is known, synthetic division (or undetermined coefficients) produces the companion quadratic. Matching

$$
(x-1)(x^{2}+ax+b)=x^{3}+(a-1)x^{2}+(b-a)x-b
$$

against $x^{3}-3x^{2}+(k+2)x-k$ forces $a-1=-3$ (so $a=-2$), $-b=-k$ (so $b=k$), and $b-a=k+2$ (which is consistent). Hence for every real $k$

$$
x^{3}-3x^{2}+(k+2)x-k=(x-1)(x^{2}-2x+k).
$$

In particular $x=1$ is always a real root, as claimed.

So the statement is True.`,

    `**B.** → False

Specialise letter A’s factorisation to $k=1$. The quadratic becomes a perfect square:

$$
x^{2}-2x+1=(x-1)^{2},
$$

and the cubic collapses to $(x-1)^{3}=0$. There is only one distinct real root (multiplicity three), not two.

So the statement is False.`,

    `**C.** → True

Set $k=0$ in the factorisation from letter A. The quadratic factor simplifies immediately:

$$
x^{2}-2x=x(x-2),
$$

so the cubic factors completely over the reals as

$$
(x-1)\\,x\\,(x-2)=0.
$$

Reading off the linear factors gives the three roots $x=0$, $x=1$, and $x=2$. These three numbers are pairwise distinct — none equals another — so when $k=0$ the equation has three distinct real roots, exactly as claimed.

So the statement is True.`,

    `**D.** → True

Keep the factorisation $(x-1)(x^{2}-2x+k)=0$ and specialise to $k=2$. The quadratic factor becomes

$$
x^{2}-2x+2.
$$

Its discriminant is

$$
\\Delta=(-2)^{2}-4\\cdot 1\\cdot 2=4-8=-4.
$$

Because $\\Delta<0$, that quadratic has no real roots; completing the square makes the same obstruction visible without the discriminant formula:

$$
x^{2}-2x+2=(x-1)^{2}+1\\ge 1>0
$$

for every real $x$, so the quadratic never crosses zero on $\\mathbb{R}$. Its complex roots are $1\\pm i$, but those do not count toward the real-root inventory. The only real root contributed by the cubic is therefore the simple root $x=1$ of the linear factor. Counting real roots of the original cubic, one finds exactly one — which matches the claim. (A cubic always has three roots in $\\mathbb{C}$ counting multiplicity, but here two of them are non-real.)

So the statement is True.`,

    `**E.** → True

The quadratic $x^{2}-2x+k$ has discriminant $4-4k$. Whenever $k\\le 1$ one has $4-4k\\ge 0$, so both quadratic roots are real and the cubic has three real roots counted with multiplicity. For the monic cubic $x^{3}-3x^{2}+\\cdots$, Vieta’s formulas give that the sum of all roots with multiplicity equals $3$, independently of $k$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 9.MOCK.PARAM",
    id: "MATH 9.MOCK.PARAM",
    title: "Parametric cubic — factorisation and root counts",
    chapter: 9,
    subsection: "9.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Factor $(x-1)(x^{2}-2x+k)$. Root $x=1$ always. $k=1$ → triple root. $k=0$ → $\\{0,1,2\\}$. $k=2$ → one real root. Vieta sum $3$.`,
  };
}

/** Q31 — hard derivative with logarithm; ask structural claims, no numeric plug-ins. */
export function buildMathQ31LogDeriv() {
  const context = `Let

$$
f(x)=\\ln(x^{2}+1)\\cdot e^{-x}\\qquad(x\\in\\mathbb{R}).
$$

Decide whether each statement is true or false.`;

  const statements = [
    "Every term in an expression for $f'$ contains the factor $e^{-x}$.",
    "$x=0$ is a critical point of $f$.",
    "$f'(x)<0$ for every $x<0$.",
    "$f$ has no critical points on $\\mathbb{R}$.",
    "The factor $e^{-x}$ never changes the sign of $f'$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Write $f=uv$ with $u=\\ln(x^{2}+1)$ and $v=e^{-x}$. Differentiating,

$$
u'=\\dfrac{2x}{x^{2}+1},\\qquad v'=-e^{-x},
$$

so the product rule yields

$$
f'(x)=\\dfrac{2x}{x^{2}+1}\\,e^{-x}-\\ln(x^{2}+1)\\,e^{-x}.
$$

Both summands already display the factor $e^{-x}$, so every term in this expression for $f'$ contains it.

So the statement is True.`,

    `**B.** → True

Factor the common exponential out of the derivative from letter A:

$$
f'(x)=e^{-x}\\left(\\dfrac{2x}{x^{2}+1}-\\ln(x^{2}+1)\\right).
$$

A critical point is a root of $f'$. Because $e^{-x}$ never vanishes, the zeros of $f'$ are exactly the zeros of the bracket

$$
B(x)=\\dfrac{2x}{x^{2}+1}-\\ln(x^{2}+1).
$$

Evaluate at the origin:

$$
B(0)=\\dfrac{2\\cdot 0}{0^{2}+1}-\\ln(0^{2}+1)=\\dfrac{0}{1}-\\ln 1=0-0=0.
$$

Hence $f'(0)=e^{0}\\cdot B(0)=1\\cdot 0=0$, so the origin is a critical point of $f$. (Equivalently: the first summand of $f'$ vanishes at $x=0$ because of the factor $2x$, while the second summand vanishes because $\\ln 1=0$; both pieces are zero simultaneously.)

So the statement is True.`,

    `**C.** → True

On $x<0$ the fraction $2x/(x^{2}+1)$ is negative and $\\ln(x^{2}+1)>0$, so their difference — the bracket in $f'$ — is negative. Times $e^{-x}>0$ keeps $f'(x)<0$.

So the statement is True.`,

    `**D.** → False

Letter B already exhibits an explicit zero of the derivative: $f'(0)=0$. A single critical point anywhere on $\\mathbb{R}$ is enough to kill the claim that there are none.

So the statement is False.`,

    `**E.** → True

Return to the factored form

$$
f'(x)=e^{-x}\\,B(x),\\qquad B(x)=\\dfrac{2x}{x^{2}+1}-\\ln(x^{2}+1).
$$

The exponential factor $e^{-x}$ is defined and strictly positive for every real $x$: it never hits zero and never becomes negative. Multiplying a real number by a positive constant preserves the sign of that number —

$$
B(x)>0\\quad\\Rightarrow\\quad f'(x)>0,
$$
$$
B(x)<0\\quad\\Rightarrow\\quad f'(x)<0,
$$
$$
B(x)=0\\quad\\Rightarrow\\quad f'(x)=0.
$$

— and therefore cannot flip the sign of $f'$. In that precise sense the factor $e^{-x}$ never changes the sign of $f'$: all sign information (and all critical-point information) lives entirely inside the bracket $B$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.LOGD",
    id: "MATH 10.MOCK.LOGD",
    title: "Log–exponential product — symbolic derivative claims",
    chapter: 10,
    subsection: "10.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$f'=e^{-x}(2x/(x^{2}+1)-\\ln(x^{2}+1))$. Critical at $0$; $f'<0$ on $(-\\infty,0)$; exponential factor preserves sign.`,
  };
}

/**
 * Q32 — one derivative-check claim, then example properties and traps.
 */
export function buildMathQ32Engagement() {
  const context = `An engagement score is modelled by

$$
Z(t)=t^{2}\\,e^{-t}\\ln(2t+1)\\qquad(t>0).
$$

Decide whether each statement is true or false.`;

  // Z'=e^{-t}(2t ln(2t+1)-t^2 ln(2t+1)+2t^2/(2t+1)); at t=1 bracket ln3+2/3>0
  const statements = [
    "$Z'(t)=e^{-t}\\left(2t\\ln(2t+1)-t^{2}\\ln(2t+1)+\\dfrac{2t^{2}}{2t+1}\\right)$ for all $t>0$.",
    "$Z(t)>0$ for every $t>0$.",
    "For $t>0$, the factor $e^{-t}$ does not change the sign of $Z'$.",
    "$Z$ is strictly decreasing on $(0,+\\infty)$.",
    "$\\displaystyle\\lim_{t\\to +\\infty}Z(t)=0$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Write $Z=u\\,v\\,w$ with $u=t^{2}$, $v=e^{-t}$, and $w=\\ln(2t+1)$. The three derivatives are

$$
u'=2t,\\qquad v'=-e^{-t},\\qquad w'=\\dfrac{2}{2t+1}
$$

The three-factor product rule $Z'=u'vw+uv'w+uvw'$ then yields, after factoring $e^{-t}$,

$$
Z'=e^{-t}\\left(2t\\ln(2t+1)-t^{2}\\ln(2t+1)+\\dfrac{2t^{2}}{2t+1}\\right)
$$

which matches the claimed formula for all $t>0$.

So the statement is True.`,

    `**B.** → True

For every $t>0$ check the three factors of $Z$ separately. First $t^{2}>0$ because $t\\neq 0$. Second $e^{-t}>0$ for all real $t$. Third $2t+1>1$, so $\\ln(2t+1)>\\ln 1=0$. The product of three strictly positive quantities is strictly positive, hence $Z(t)>0$ on the whole half-line $(0,+\\infty)$.

So the statement is True.`,

    `**C.** → True

From letter A one may write $Z'(t)=e^{-t}\\cdot B(t)$ where $B$ is the displayed bracket. For every real $t$ the factor $e^{-t}$ is strictly positive. Multiplying $B(t)$ by a positive number cannot reverse the inequality $B(t)>0$ or $B(t)<0$, so $e^{-t}$ does not change the sign of $Z'$ on $t>0$.

So the statement is True.`,

    `**D.** → False

Evaluate the bracket of letter A at $t=1$:

$$
B(1)=2\\ln 3-\\ln 3+\\dfrac{2}{3}=\\ln 3+\\dfrac{2}{3}
$$

Since $\\ln 3>0$, one has $B(1)>0$, and with $e^{-1}>0$ this forces $Z'(1)>0$. A positive derivative at $t=1$ means $Z$ is locally increasing there, so $Z$ cannot be strictly decreasing on the whole $(0,+\\infty)$.

So the statement is False.`,

    `**E.** → True

As $t\\to+\\infty$, the polynomial–logarithmic growth of $t^{2}\\ln(2t+1)$ is dominated by the exponential decay of $e^{-t}$. More formally, standard growth-versus-decay limits give $t^{2}\\ln(2t+1)\\,e^{-t}\\to 0$ (exponential beats any polynomial times a slow log). Therefore

$$
\\lim_{t\\to +\\infty}Z(t)=0
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.ZLOG",
    id: "MATH 11.MOCK.ZLOG",
    title: "Engagement score $t^{2}e^{-t}\\ln(2t+1)$ — product of three",
    chapter: 11,
    subsection: "11.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `One derivative check matches the three-factor product rule. $Z>0$ on $(0,\\infty)$; $e^{-t}$ preserves sign of $Z'$; not monotone (since $Z'(1)>0$); $Z(t)\\to 0$ as $t\\to+\\infty$.`,
  };
}

/** Q33 — confusing best-of / coin tournament probability. */
export function buildMathQ33Coins() {
  const context = `Ana and Ben play a best-of-three coin contest (first to two wins takes the match). Each game is independent. Ana wins a single game with probability $p=\\tfrac{2}{3}$; Ben wins with probability $q=\\tfrac{1}{3}$.

They always play until one player has two wins (so the match ends in two or three games).

Decide whether each statement is true or false.`;

  // P(Ana wins in 2)= p^2 = 4/9
  // P(Ben wins in 2)= q^2 = 1/9
  // P(goes to game 3)= 2pq = 4/9
  // P(Ana wins match)= p^2 + 2pq*p = p^2 + 2p^2 q = p^2(1+2q)= (4/9)(1+2/3)=(4/9)(5/3)=20/27
  // Or: Ana wins 2-0 or 2-1: C(2,2)p^2 + C(2,1)p^2 q wait standard: p^2 + 2p^2 q = 4/9 + 2*(4/9)*(1/3)=4/9+8/27=12/27+8/27=20/27
  // P(Ben wins)=1-20/27=7/27 = q^2 + 2q^2 p = 1/9 + 2*(1/9)*(2/3)=1/9+4/27=3/27+4/27=7/27
  // P(exactly 3 games)=2pq=4/9
  // P(Ana wins | exactly 3 games)=P(split first two then Ana)= (2pq * p)/(2pq)=p=2/3
  // Trap: P(Ana wins) = 2/3? False that's just game win prob
  // E: P(match ends in 2 games)= p^2+q^2=4/9+1/9=5/9

  const statements = [
    "The probability Ana wins the match in exactly two games is $\\dfrac{4}{9}$.",
    "The probability the match lasts exactly three games is $\\dfrac{4}{9}$.",
    "The probability Ana wins the match (in two or three games) equals $\\dfrac{2}{3}$.",
    "Conditional on the match lasting three games, the probability Ana wins the match is $\\dfrac{2}{3}$.",
    "The probability the match ends in exactly two games is $\\dfrac{5}{9}$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

Ana wins the match in exactly two games only by sweeping both games (score $2$–$0$). Independence of the games gives

$$
P(\\text{Ana sweeps})=p^{2}=\\left(\\dfrac{2}{3}\\right)^{2}=\\dfrac{4}{9}
$$

No other two-game path awards the match to Ana (a split would force a third game). So the probability is exactly $\\dfrac{4}{9}$.

So the statement is True.`,

    `**B.** → True

A third game is needed precisely when the first two games are split one–one. The two mutually exclusive orders are Ana-then-Ben and Ben-then-Ana:

$$
P(\\text{split})=pq+qp=2pq
$$

$$
2pq=2\\cdot\\dfrac{2}{3}\\cdot\\dfrac{1}{3}=\\dfrac{4}{9}
$$

so the match lasts exactly three games with probability $\\dfrac{4}{9}$.

So the statement is True.`,

    `**C.** → False

Ana’s overall match-win probability includes the $2$–$0$ sweep and the $2$–$1$ paths:

$$
P(\\text{Ana wins match})=p^{2}+2p^{2}q=p^{2}(1+2q)
$$

$$
=\\dfrac{4}{9}\\left(1+\\dfrac{2}{3}\\right)=\\dfrac{4}{9}\\cdot\\dfrac{5}{3}=\\dfrac{20}{27}
$$

Compare with $\\dfrac{2}{3}=\\dfrac{18}{27}$: the match-win probability is larger. The trap is confusing Ana’s per-game win probability $p=\\tfrac{2}{3}$ with her match-win probability.

So the statement is False.`,

    `**D.** → True

Conditional on lasting three games, the first two games must already be split $1$–$1$. The third game then decides the match alone. Ana wins that deciding game with her ordinary game-win probability

$$
p=\\dfrac{2}{3}
$$

Equivalently, $P(\\text{Ana wins}\\mid\\text{three games})=p$, which matches the claim exactly.

So the statement is True.`,

    `**E.** → True

The match ends in two games when either player sweeps:

$$
P(\\text{ends in two})=p^{2}+q^{2}
$$

$$
=\\left(\\dfrac{2}{3}\\right)^{2}+\\left(\\dfrac{1}{3}\\right)^{2}=\\dfrac{4}{9}+\\dfrac{1}{9}=\\dfrac{5}{9}
$$

Alternatively, this is the complement of the three-game probability $\\tfrac{4}{9}$ from letter B, since $1-\\tfrac{4}{9}=\\tfrac{5}{9}$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 12.MOCK.BEST3",
    id: "MATH 12.MOCK.BEST3",
    title: "Best-of-three unfair coin match — length and winner traps",
    chapter: 12,
    subsection: "12.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Ana $2$–$0$: $4/9$. Three games: $4/9$. Ana match win $20/27\\neq 2/3$. Given three games, Ana wins with $p=2/3$. Two-game match: $5/9$.`,
  };
}

/** Q34 — real-life binomial with Var / SD traps. */
export function buildMathQ34Binomial() {
  const context = `A call centre handles $n=50$ independent outbound calls in an evening. Each call is a “sale” with probability $p=0.4$, independently of the others. Let $X$ be the number of sales that evening, so $X\\sim\\mathrm{Bin}(50,0.4)$.

Let $\\hat{p}=X/50$ be the evening’s sales rate (a sample proportion).

Decide whether each statement is true or false.`;

  const statements = [
    "The mean of $X$ is $20$ and the variance of $X$ is $12$.",
    "The standard deviation of $X$ is strictly between $3$ and $4$.",
    "The variance of $X$ equals $20$.",
    "The variance of the sales rate $\\hat{p}$ equals $0.0048$.",
    "The standard deviation of $\\hat{p}$ is strictly less than $0.1$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

For $X\\sim\\mathrm{Bin}(n,p)$ with $n=50$ and $p=0.4$, apply the standard mean and variance formulas separately:

$$
E[X]=np=50\\cdot 0.4=20
$$

$$
\\mathrm{Var}(X)=np(1-p)=50\\cdot 0.4\\cdot 0.6=50\\cdot 0.24=12
$$

Both claimed figures match the formulas exactly, so the joint claim holds.

So the statement is True.`,

    `**B.** → True

From letter A, $\\mathrm{Var}(X)=12$, so the standard deviation is

$$
\\mathrm{SD}(X)=\\sqrt{12}=2\\sqrt{3}
$$

Compare squares to sandwich the square root between $3$ and $4$:

$$
3^{2}=9<12<16=4^{2}
$$

Taking positive square roots preserves the inequalities, hence $3<2\\sqrt{3}<4$ as claimed.

So the statement is True.`,

    `**C.** → False

Letter A already computed $\\mathrm{Var}(X)=np(1-p)=12$. The figure $20$ appearing in the claim is the mean $E[X]=np$, not the variance. Confusing mean with variance is the classic binomial trap here — the variance equals $12$, not $20$, so the statement is wrong.

So the statement is False.`,

    `**D.** → True

The sample proportion is $\\hat{p}=X/n=X/50$. Scaling a random variable by $1/n$ scales variance by $1/n^{2}$, which rearranges to the usual Bernoulli-proportion formula

$$
\\mathrm{Var}(\\hat{p})=\\dfrac{p(1-p)}{n}=\\dfrac{0.4\\cdot 0.6}{50}=\\dfrac{0.24}{50}=0.0048
$$

matching the claim exactly.

So the statement is True.`,

    `**E.** → True

Take the positive square root of the variance from letter D:

$$
\\mathrm{SD}(\\hat{p})=\\sqrt{0.0048}
$$

Numerically $\\sqrt{0.0049}=0.07$ and $0.0048<0.0049$, so

$$
\\sqrt{0.0048}\\approx 0.0693<0.1
$$

The standard deviation of the sales rate is therefore strictly less than $0.1$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 13.MOCK.CALLS",
    id: "MATH 13.MOCK.CALLS",
    title: "Call-centre sales — binomial mean, variance, and proportion traps",
    chapter: 13,
    subsection: "13.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E[X]=20$, $\\mathrm{Var}(X)=12$, $\\mathrm{SD}(X)=2\\sqrt{3}\\in(3,4)$. Variance is not $20$. $\\mathrm{Var}(\\hat{p})=0.0048$, $\\mathrm{SD}(\\hat{p})\\approx 0.069$.`,
  };
}
