/**
 * Mock Exam 6 — course-theme math (Q22–34), same families as the BBE bank / Mock 5,
 * but denser chains and harder traps. Not off-syllabus engines.
 * No solution formulas in stems; teacher steps only in explanations.
 */

/** Q22 — four-set inclusion–exclusion (course sets theme, denser than Mock 5’s three-set). */
export function buildMathQ22Sets() {
  const context = `A certification academy tracks four modules: Risk, Audit, Tax, and Ethics. Of $450$ candidates, $240$ finished Risk, $200$ finished Audit, $180$ finished Tax, and $150$ finished Ethics. Pairwise overlaps are $110$ for Risk–Audit, $100$ for Risk–Tax, $90$ for Risk–Ethics, $85$ for Audit–Tax, $80$ for Audit–Ethics, and $70$ for Tax–Ethics. Exactly $50$ finished all of Risk, Audit, and Tax; $45$ finished all of Risk, Audit, and Ethics; $40$ finished all of Risk, Tax, and Ethics; $38$ finished all of Audit, Tax, and Ethics; and $25$ finished all four. Every candidate is counted in the academy total, including those who finished none.`;

  // union = 770 - 535 + 173 - 25 = 383; none = 67
  // only Risk = 240-110-100-90+50+45+40-25 = 50
  // only Ethics = 150-90-80-70+45+40+38-25 = 8
  // |R∪A| = 240+200-110 = 330

  const statements = [
    "Exactly $67$ candidates finished none of the four modules.",
    "The candidates who finished all four outnumber those who finished Risk and nothing else.",
    "Strictly more than $380$ candidates finished at least one module.",
    "Finishing Ethics without finishing Risk is impossible under these counts.",
    "The candidates who finished Risk or Audit (or both) number strictly more than $325$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Four-set inclusion–exclusion:

$$
|R\\cup A\\cup T\\cup E|=770-535+173-25=383
$$

$$
450-383=67
$$

So the statement is True.`,

    `**B.** → False

Only Risk equals $240-110-100-90+50+45+40-25=50$. All four equals $25$. Since $25\\ngtr 50$, the claim fails.

So the statement is False.`,

    `**C.** → True

The union is $383>380$.

So the statement is True.`,

    `**D.** → False

Only Ethics equals $150-90-80-70+45+40+38-25=8>0$, so Ethics without Risk occurs.

So the statement is False.`,

    `**E.** → True

$$
|R\\cup A|=240+200-110=330>325
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 1.MOCK.FOURSET",
    id: "MATH 1.MOCK.FOURSET",
    title: "Four certification modules — deep inclusion–exclusion",
    chapter: 1,
    subsection: "1.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Union $383$, none $67$. Only Risk $50>$ all-four $25$. Ethics-only $8$. $|R\\cup A|=330$.`,
  };
}

/** Q23 — four-number Vieta archive (course symmetric/Vieta theme). */
export function buildMathQ23Grind() {
  const context = `An algebra archive stores four real numbers $a,b,c,d$ only through

$$
a+b+c+d=15,\\qquad \\sum_{i<j}a_ia_j=80,\\qquad \\sum_{i<j<k}a_ia_ja_k=180,\\qquad abcd=144,
$$

where the middle two sums run over the indicated distinct index tuples among $\\{a,b,c,d\\}$. The original order was not recorded. No decimal approximation is used.

Decide whether each statement is true or false.`;

  // roots {2,3,4,6}; sum sq=225-160=65; cubes=8+27+64+216=315
  // sum 1/a = 180/144 = 5/4; claim 4/5 false
  // Σ_{i<j}(a_i-a_j)^2 = 4*65 - 225 = 260-225=35; claim 70 false

  const statements = [
    "$a^{2}+b^{2}+c^{2}+d^{2}=65$.",
    "$a^{3}+b^{3}+c^{3}+d^{3}=315$.",
    "$\\{a,b,c,d\\}=\\{2,3,4,6\\}$.",
    "$\\dfrac{1}{a}+\\dfrac{1}{b}+\\dfrac{1}{c}+\\dfrac{1}{d}=\\dfrac{4}{5}$.",
    "$(a-b)^{2}+(a-c)^{2}+(a-d)^{2}+(b-c)^{2}+(b-d)^{2}+(c-d)^{2}=70$.",
  ];

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\sum a_i^{2}=\\Bigl(\\sum a_i\\Bigr)^{2}-2\\sum_{i<j}a_ia_j=225-160=65
$$

So the statement is True.`,

    `**B.** → True

The numbers are the roots of $t^{4}-15t^{3}+80t^{2}-180t+144=0$, which factors as $(t-2)(t-3)(t-4)(t-6)$. Then

$$
2^{3}+3^{3}+4^{3}+6^{3}=8+27+64+216=315
$$

So the statement is True.`,

    `**C.** → True

As in letter B, the roots are exactly $\\{2,3,4,6\\}$.

So the statement is True.`,

    `**D.** → False

$$
\\sum\\dfrac{1}{a_i}=\\dfrac{\\sum_{i<j<k}a_ia_ja_k}{abcd}=\\dfrac{180}{144}=\\dfrac{5}{4}\\neq\\dfrac{4}{5}
$$

So the statement is False.`,

    `**E.** → False

$$
\\sum_{i<j}(a_i-a_j)^{2}=n\\sum a_i^{2}-\\Bigl(\\sum a_i\\Bigr)^{2}=4\\cdot 65-225=35\\neq 70
$$

So the statement is False.`,
  ];

  return {
    case_id: "MATH 2.MOCK.FOURSYM",
    id: "MATH 2.MOCK.FOURSYM",
    title: "Four-number archive — full symmetric data and Vieta",
    chapter: 2,
    subsection: "2.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Roots $\\{2,3,4,6\\}$. Sum of squares $65$, cubes $315$. Reciprocal sum $5/4$. Pairwise gap sum $35$.`,
  };
}

/** Q24 — project NPV + perpetuity-due + annuity (course finance theme, denser). */
export function buildMathQ24Finance() {
  const context = `A foundation compares three cash programmes at annual effective rate $8\\%$.

Programme P buys a four-year project: pay EUR $25000$ immediately, then receive EUR $7000$, EUR $8000$, EUR $9000$, and EUR $10000$ at the ends of years $1$, $2$, $3$, and $4$.

Programme Q is a level perpetuity-due of EUR $600$ per year (first payment today).

Programme R is a five-year ordinary annuity of EUR $2000$ per year (first payment in one year).

Decide whether each statement is true or false.`;

  // PV in ≈ 27835; NPV ≈ 2835 > 2500
  // year-1 PV 7000/1.08 ≈ 6481.48 < 6500
  // Q: 600*1.08/0.08 = 8100
  // R: 2000*(1-1.08^{-5})/0.08 ≈ 7985.42 < 8100 so Q > R
  // Moving P inflows one year earlier raises PV → claim "decreases" False

  const statements = [
    "Programme P has a strictly positive net present value, and that NPV exceeds EUR $2500$.",
    "The present value of the single EUR $7000$ inflow (year $1$) is strictly less than EUR $6500$.",
    "At $8\\%$, Programme Q has present value exactly EUR $8100$.",
    "At $8\\%$, Programme R has a strictly larger present value than Programme Q.",
    "Moving every Programme P inflow one year earlier would strictly decrease P’s present value of inflows.",
  ];

  const answer_key = [true, true, true, false, false];

  const tactical_explanations = [
    `**A.** → True

$$
\\mathrm{PV}_{\\mathrm{in}}=\\dfrac{7000}{1.08}+\\dfrac{8000}{1.08^{2}}+\\dfrac{9000}{1.08^{3}}+\\dfrac{10000}{1.08^{4}}\\approx 27835
$$

$$
\\mathrm{NPV}\\approx 27835-25000=2835>2500
$$

So the statement is True.`,

    `**B.** → True

$$
\\dfrac{7000}{1.08}\\approx 6481.48<6500
$$

So the statement is True.`,

    `**C.** → True

Perpetuity-due:

$$
600\\cdot\\dfrac{1.08}{0.08}=8100
$$

So the statement is True.`,

    `**D.** → False

$$
\\mathrm{PV}_{R}=2000\\cdot\\dfrac{1-1.08^{-5}}{0.08}\\approx 7985<8100=\\mathrm{PV}_{Q}
$$

So the statement is False.`,

    `**E.** → False

Earlier payment shortens every discount exponent, so each present value rises.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 3.MOCK.TRIPV",
    id: "MATH 3.MOCK.TRIPV",
    title: "Project, perpetuity-due and annuity — triple present-value audit",
    chapter: 3,
    subsection: "3.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `P NPV $\\approx 2835$. Year-1 PV $\\approx 6481$. Q $=8100>R\\approx 7985$. Earlier payment raises PV.`,
  };
}

/** Q25 — three inlets + two drains (course rate/equation theme). */
export function buildMathQ25Pipes() {
  const context = `Three inlet pipes and two drains serve a tank.

Pipe A alone fills the empty tank in $4$ hours.
Pipe B alone fills the empty tank in $5$ hours.
Pipe C alone fills the empty tank in $6$ hours.
Drain D alone empties a full tank in $8$ hours.
Drain E alone empties a full tank in $12$ hours.

All five run together from empty. Decide whether each statement is true or false.`;

  // net = 1/4+1/5+1/6-1/8-1/12 = 49/120; time = 120/49 ≈ 2.449 < 2.5
  // A rate 1/4 = 0.25 not > 1/3
  // A+B both drains: 1/4+1/5-1/8-1/12 = 29/120; time 120/29 ≈ 4.14 > 4
  // B alone 1/5=24/120; A+C-D = 1/4+1/6-1/8 = 6/24+4/24-3/24=7/24=35/120 > 24/120 so B does NOT outpace

  const statements = [
    "A’s fill rate is strictly greater than $\\tfrac{1}{3}$ tank per hour.",
    "The combined net rate of A, B, C, D and E is exactly $\\tfrac{49}{120}$ tank per hour.",
    "Starting from empty with all five open, the tank is full in strictly less than $2.5$ hours.",
    "If only A and B run with both drains open (C closed), the tank still fills, and the time needed exceeds $4$ hours.",
    "B alone fills more of the tank in $1$ hour than A and C together add net in $1$ hour while only drain D is open.",
  ];

  const answer_key = [false, true, true, true, false];

  const tactical_explanations = [
    `**A.** → False

A’s rate is $\\tfrac{1}{4}<\\tfrac{1}{3}$.

So the statement is False.`,

    `**B.** → True

$$
\\dfrac{1}{4}+\\dfrac{1}{5}+\\dfrac{1}{6}-\\dfrac{1}{8}-\\dfrac{1}{12}=\\dfrac{49}{120}
$$

So the statement is True.`,

    `**C.** → True

$$
\\dfrac{120}{49}\\approx 2.45<2.5
$$

So the statement is True.`,

    `**D.** → True

$$
\\dfrac{1}{4}+\\dfrac{1}{5}-\\dfrac{1}{8}-\\dfrac{1}{12}=\\dfrac{29}{120}>0
$$

Time equals $\\dfrac{120}{29}\\approx 4.14>4$.

So the statement is True.`,

    `**E.** → False

B contributes $\\tfrac{1}{5}=\\tfrac{24}{120}$. A+C−D contributes $\\tfrac{7}{24}=\\tfrac{35}{120}$. Since $\\tfrac{24}{120}<\\tfrac{35}{120}$, B alone does not outpace that net.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 4.MOCK.FIVEPIPE",
    id: "MATH 4.MOCK.FIVEPIPE",
    title: "Three inlets and two drains — net rate labyrinth",
    chapter: 4,
    subsection: "4.5",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Net all five $=49/120$ (time $\\approx 2.45$). A $=1/4<1/3$. A+B−drains $=29/120$ (time $\\approx 4.14$). B $<$ A+C−D.`,
  };
}

/** Q26 — three-product break-even mix (course linear-system / BE theme). */
export function buildMathQ26BreakEven() {
  const context = `A workshop sells three products $X$, $Y$, $Z$ with unit contributions

$$
c_X=4,\\qquad c_Y=6,\\qquad c_Z=10
$$

(in EUR per unit). Monthly fixed costs are EUR $15600$. A sales plan forces

$$
x=2z,\\qquad y=3z
$$

and requires exact break-even.

Decide whether each statement is true or false.`;

  // 4(2z)+6(3z)+10z=8z+18z+10z=36z=15600 → z=1300/3≈433.333
  // total units 6z=2600 exactly
  // at 18000: 36z=18000 → z=500
  // without Y: 8z+10z=18z=15600 → z=866.67 > 433

  const statements = [
    "At break-even under the stated mix, the volume of $Z$ is strictly greater than $430$.",
    "The break-even volume of $Z$ is an integer number of units.",
    "Under the mix, break-even total unit volume $x+y+z$ equals $2600$.",
    "If fixed costs rose to EUR $18000$ with the same mix, the required $z$ would exceed $500$.",
    "Dropping product $Y$ while keeping $x=2z$ and the original EUR $15600$ fixed costs would force a strictly larger break-even $z$.",
  ];

  const answer_key = [true, false, true, false, true];

  const tactical_explanations = [
    `**A.** → True

$$
8z+18z+10z=36z=15600\\Rightarrow z=\\dfrac{1300}{3}\\approx 433.33>430
$$

So the statement is True.`,

    `**B.** → False

$\\dfrac{1300}{3}$ is not an integer.

So the statement is False.`,

    `**C.** → True

$$
x+y+z=6z=6\\cdot\\dfrac{1300}{3}=2600
$$

So the statement is True.`,

    `**D.** → False

$$
36z=18000\\Rightarrow z=500
$$

exactly, so $z$ does not exceed $500$.

So the statement is False.`,

    `**E.** → True

Without $Y$: $18z=15600$, so $z=\\dfrac{2600}{3}\\approx 866.7>\\dfrac{1300}{3}$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 5.MOCK.BE36",
    id: "MATH 5.MOCK.BE36",
    title: "Three-product mix — $36z$ break-even system",
    chapter: 5,
    subsection: "5.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$36z=15600$, $z\\approx 433.3$. Total $2600$. At EUR $18000$, $z=500$. Without $Y$, $z\\approx 867$.`,
  };
}

/** Q27 — absolute / radical / rational inequality pack (course ineq theme, denser). */
export function buildMathQ27Ineq() {
  const context = `Decide whether each inequality claim is true or false.`;

  const statements = [
    "The solution set of $|x-1|+|x-7|\\le 8$ is exactly $[1,7]$.",
    "The solution set of $\\sqrt{2x+5}<x-1$ is exactly $(3,+\\infty)$.",
    "The solution set of $\\dfrac{x-4}{x+1}\\le 0$ is exactly $[-1,4]$.",
    "The solution set of $x^{2}-5|x|-6<0$ is exactly $(-6,6)$.",
    "The solution set of $|2x-3|>|x+4|$ is exactly $(-\\infty,-\\tfrac13)\\cup\\bigl(\\tfrac73,+\\infty\\bigr)$.",
  ];

  // A: |x-1|+|x-7|≥6; ≤8 → [0,8] not [1,7]. False
  // B: domain x≥-5/2; x-1>0 ⇒ x>1. Square: 2x+5 < x^2-2x+1 → 0<x^2-4x-4. Roots 2±√8=2±2√2. On x>1: x>2+2√2≈4.828. Not (3,∞). False
  // C: undefined at -1; solution (-1,4]. False
  // D: u=|x|: u^2-5u-6<0 → (u-6)(u+1)<0 → 0≤u<6 → (-6,6). True
  // E: square (2x-3)^2>(x+4)^2 → 4x^2-12x+9 > x^2+8x+16 → 3x^2-20x-7>0
  // disc 400+84=484=22^2; roots (20±22)/6 → 7, -1/3. So (x+1/3)(x-7) > 0 with leading positive? 
  // 3x^2-20x-7 = 3(x-7)(x+1/3). Yes >0 outside: x<-1/3 or x>7.
  // Claim says (-∞,-1/3)∪(7/3,∞) — WRONG second part 7/3 instead of 7. False!

  const answer_key = [false, false, false, true, false];

  const tactical_explanations = [
    `**A.** → False

On $[1,7]$ the sum equals $6$. Outside it grows, and the inequality holds on the wider interval $[0,8]$.

So the statement is False.`,

    `**B.** → False

Domain and $x-1>0$ force $x>1$. Squaring yields $x>2+2\\sqrt{2}\\approx 4.83$, so the solution is $(2+2\\sqrt{2},+\\infty)$, not $(3,+\\infty)$.

So the statement is False.`,

    `**C.** → False

The expression is undefined at $x=-1$, and the solution is $(-1,4]$, not $[-1,4]$.

So the statement is False.`,

    `**D.** → True

With $u=|x|\\ge 0$, $u^{2}-5u-6<0$ gives $0\\le u<6$, i.e. $(-6,6)$.

So the statement is True.`,

    `**E.** → False

Squaring yields $3x^{2}-20x-7>0$, i.e. $x<-\\tfrac13$ or $x>7$, not $x>\\tfrac73$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 6.MOCK.HARDINEQ",
    id: "MATH 6.MOCK.HARDINEQ",
    title: "Absolute, radical and rational inequality traps",
    chapter: 6,
    subsection: "6.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Abs sum on $[0,8]$. Radical $(2+2\\sqrt{2},\\infty)$. Rational excludes $-1$. $|x|<6$. Abs comparison $(-\\infty,-1/3)\\cup(7,\\infty)$.`,
  };
}

/** Q28 — piecewise continuity / differentiability (course function theme). */
export function buildMathQ28Piecewise() {
  const context = `Define

$$
f(x)=
\\begin{cases}
-x^{2}+6x-2 & \\text{if }x<3,\\\\
x^{2}-6x+16 & \\text{if }x\\ge 3.
\\end{cases}
$$

Decide whether each statement is true or false.`;

  // at 3: left -9+18-2=7; right 9-18+16=7 continuous
  // left' -2x+6 at 3-=0; right' 2x-6 at 3+=0 differentiable
  // for x≥3, f'=2x-6≥0, f(3)=7 so f≥7 on [3,∞)
  // global min 7? As x→-∞, -x^2→-∞, no
  // on x<3, f=0: -x^2+6x-2=0 → x^2-6x+2=0 → x=3±√7; only 3-√7<3. Negative? 3-√7≈0.35>0. Has positive root in (0,3). Claim "negative root" False
  // Claim has a root in (0,3): True

  const statements = [
    "$f$ is continuous at $x=3$.",
    "$f$ is differentiable at $x=3$.",
    "For every $x\\ge 3$ one has $f(x)\\ge 7$, with equality at $x=3$.",
    "The global minimum value of $f$ on $\\mathbb{R}$ is $7$.",
    "On the region $x<3$, the equation $f(x)=0$ has a root in the open interval $(0,3)$.",
  ];

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

Both pieces equal $7$ at $x=3$.

So the statement is True.`,

    `**B.** → True

Left derivative $-2x+6$ at $3^{-}$ is $0$; right derivative $2x-6$ at $3^{+}$ is $0$.

So the statement is True.`,

    `**C.** → True

For $x\\ge 3$, $f'(x)=2x-6\\ge 0$ and $f(3)=7$, so $f(x)\\ge 7$.

So the statement is True.`,

    `**D.** → False

As $x\\to-\\infty$, $-x^{2}+6x-2\\to-\\infty$, so no global minimum $7$.

So the statement is False.`,

    `**E.** → True

$-x^{2}+6x-2=0$ gives $x=3\\pm\\sqrt{7}$; the root $3-\\sqrt{7}\\approx 0.35$ lies in $(0,3)$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 7.MOCK.JUNCTION",
    id: "MATH 7.MOCK.JUNCTION",
    title: "Quadratic–quadratic junction — continuity and growth",
    chapter: 7,
    subsection: "7.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Continuous and differentiable at $3$. $f\\ge 7$ on $[3,\\infty)$. No global min $7$. Root $3-\\sqrt{7}\\in(0,3)$.`,
  };
}

/** Q29 — power model Ax^p limits (course power-function theme). */
export function buildMathQ29Limits() {
  const context = `Let $A>0$ and $p\\in\\mathbb{R}$. Define $f(x)=A x^{p}$ for $x>0$. Decide whether each statement is true or false.`;

  const statements = [
    "If $p>0$, then $\\displaystyle\\lim_{x\\to +\\infty}f(x)=+\\infty$.",
    "If $-1<p<0$, then $\\displaystyle\\lim_{x\\to 0^{+}}f(x)=0$.",
    "If $p<-1$, then $\\displaystyle\\lim_{x\\to +\\infty}f(x)=0$.",
    "For every $p\\neq 0$ one has $\\displaystyle\\lim_{x\\to 1}f(x)=A$.",
    "If $p>0$, then $f(2)-f(1)=2A-A$ forces $f(2)=2f(1)$.",
  ];

  // A True
  // B False: for -1<p<0, x^p → +∞ as x→0+
  // C True (actually for all p<0 →0 at ∞)
  // D True: f(1)=A always
  // E False: f(2)=A*2^p, 2f(1)=2A; equal only if 2^p=2 i.e. p=1. Claim says "forces f(2)=2f(1)" from f(2)-f(1)=A which is wrong arithmetic for general p. Statement says if p>0 then f(2)-f(1)=2A-A forces... — the premise f(2)-f(1)=2A-A is only true for p=1. Reading as a claim that this identity holds and forces equality — False.

  const answer_key = [true, false, true, true, false];

  const tactical_explanations = [
    `**A.** → True

For $p>0$ and $A>0$, $Ax^{p}\\to+\\infty$ as $x\\to+\\infty$.

So the statement is True.`,

    `**B.** → False

For $-1<p<0$, $x^{p}\\to+\\infty$ as $x\\to 0^{+}$, not $0$.

So the statement is False.`,

    `**C.** → True

For $p<-1<0$, $x^{p}\\to 0$ as $x\\to+\\infty$.

So the statement is True.`,

    `**D.** → True

$f(1)=A\\cdot 1^{p}=A$ for every real $p$.

So the statement is True.`,

    `**E.** → False

In general $f(2)-f(1)=A(2^{p}-1)$, which equals $A$ only when $p=1$. Even then $f(2)=2A=2f(1)$, but the claimed identity does not hold for every $p>0$.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 8.MOCK.POWTRAP",
    id: "MATH 8.MOCK.POWTRAP",
    title: "Power model — endpoint limits and ratio traps",
    chapter: 8,
    subsection: "8.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$p>0\\Rightarrow\\infty$ at $+\\infty$. For $-1<p<0$, blow-up at $0^{+}$. $p<-1\\Rightarrow 0$ at $+\\infty$. $f(1)=A$. $f(2)=2f(1)$ only for $p=1$.`,
  };
}

/** Q30 — parametric cubic (course polynomial theme). */
export function buildMathQ30Param() {
  const context = `For real parameters $a$ and $b$, consider

$$
p(x)=(x-1)(x^{2}+ax+b).
$$

Decide whether each statement is true or false.`;

  // expand x^3+(a-1)x^2+(b-a)x-b
  // always root x=1
  // quadratic disc a^2-4b; two more real roots iff a^2>4b
  // if a=2,b=5: disc 4-20<0 only one real root
  // claim: for all a,b exactly one real root — False (when disc>0 three real, or disc=0 two)
  // sum of roots if three real: 1 - a? From -coeff: sum = 1-a? Roots 1,r,s with r+s=-a, rs=b. Sum=1-a.
  // product = -(-b)=b? p(x)=x^3+...-b, product of roots = b. For monic: (-1)^3 (-b)/1 = b. Yes product=b.
  // claim product always 1 False

  const statements = [
    "For every real $a$ and $b$, the number $x=1$ is a root of $p$.",
    "If $a=2$ and $b=5$, then $p$ has exactly one real root.",
    "If $a^{2}>4b$, then $p$ has three distinct real roots.",
    "Whenever $p$ has three real roots counting multiplicity, their product equals $b$.",
    "For every real $a$ and $b$, the equation $p(x)=0$ has exactly one real solution.",
  ];

  // C: three distinct when disc>0 and the quadratic roots ≠1. If quadratic root is 1: 1+a+b=0 and a^2>4b — possible multiple root at 1. Distinct requires also quadratic roots ≠1. 
  // If a^2>4b, two distinct quadratic roots; they equal 1 iff 1+a+b=0. Example a=3,b=-1: disc=9+4=13>0, 1+3-1=3≠0 so three distinct. But claim says always when a^2>4b — counterexample a=0,b=-1? disc=4>0, roots of x^2-1=0 → ±1, so roots 1,1,-1 — not three distinct. a=0,b=-1: (x-1)(x^2-1)=(x-1)^2(x+1), roots 1 (mult 2) and -1. a^2=0>4(-1)=-4 yes. So NOT three distinct. False!

  const answer_key = [true, true, false, true, false];

  const tactical_explanations = [
    `**A.** → True

The factor $(x-1)$ forces $p(1)=0$ for every $a,b$.

So the statement is True.`,

    `**B.** → True

$x^{2}+2x+5$ has discriminant $4-20<0$, so only the real root $x=1$ remains.

So the statement is True.`,

    `**C.** → False

For $a=0$, $b=-1$ one has $a^{2}>4b$, but $p(x)=(x-1)^{2}(x+1)$ has only two distinct real roots.

So the statement is False.`,

    `**D.** → True

For the monic cubic $x^{3}+\\cdots-b$, the product of all roots (with multiplicity) equals $b$.

So the statement is True.`,

    `**E.** → False

When the quadratic factor has two additional real roots different from $1$, there are three real solutions.

So the statement is False.`,
  ];

  return {
    case_id: "MATH 9.MOCK.TWOPAR",
    id: "MATH 9.MOCK.TWOPAR",
    title: "Two-parameter cubic — always-one-root factorisation",
    chapter: 9,
    subsection: "9.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Always root $1$. For $(2,5)$ only one real root. $a^{2}>4b$ need not give three distinct roots. Product of roots $=b$. Not always unique.`,
  };
}

/** Q31 — coupled decay and growth (course exp/log theme, applied). */
export function buildMathQ31LogDeriv() {
  const context = `A laboratory tracer follows $M(t)=800e^{-0.15t}$ (milligrams, $t$ in years). Separately, an endowment starts at EUR $5000$ and grows continuously at force $5\\%$ per year, so $F(t)=5000e^{0.05t}$.

Decide whether each statement is true or false.`;

  // half-life: 0.15 t = ln2 → t=ln2/0.15≈4.621 < 5
  // M(8)=800 e^{-1.2}≈800*0.3012≈240.96 < 250? above 250? False if claim above 250
  // F reaches 8000: 5000 e^{0.05t}=8000 → e^{0.05t}=1.6 → t=ln(1.6)/0.05≈9.40 < 11? claim t>11 False if "first reaches at t>11"
  // M(t)+something — claim half-life < 6 True
  // F(10)=5000 e^{0.5}≈8244 > 8000 True that after 10 years exceeds 8000

  const statements = [
    "The tracer’s half-life is strictly less than $5$ years.",
    "After $8$ years the remaining mass is still above $250\\ \\mathrm{mg}$.",
    "The fund first reaches EUR $8000$ at some time $t>11$ years.",
    "After $10$ years the fund balance exceeds EUR $8000$.",
    "The tracer’s continuous decay rate $0.15$ is three times the fund’s continuous growth rate $0.05$.",
  ];

  const answer_key = [true, false, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
e^{-0.15t}=\\tfrac12\\Rightarrow t=\\dfrac{\\ln 2}{0.15}\\approx 4.62<5
$$

So the statement is True.`,

    `**B.** → False

$$
M(8)=800e^{-1.2}\\approx 241<250
$$

So the statement is False.`,

    `**C.** → False

$$
5000e^{0.05t}=8000\\Rightarrow t=\\dfrac{\\ln 1.6}{0.05}\\approx 9.40<11
$$

So the statement is False.`,

    `**D.** → True

$$
F(10)=5000e^{0.5}\\approx 8244>8000
$$

So the statement is True.`,

    `**E.** → True

$0.15=3\\cdot 0.05$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 10.MOCK.COUPLE",
    id: "MATH 10.MOCK.COUPLE",
    title: "Coupled tracer decay and endowment growth",
    chapter: 10,
    subsection: "10.2",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Half-life $\\approx 4.62$. $M(8)\\approx 241$. Fund hits $8000$ at $t\\approx 9.4$; $F(10)\\approx 8244$. Rates $0.15=3\\cdot 0.05$.`,
  };
}

/** Q32 — product-of-three engagement derivative (course differentiation theme). */
export function buildMathQ32Engagement() {
  const context = `For $t>0$ define the engagement score

$$
Z(t)=t^{3}e^{-2t}\\ln(t+1).
$$

Decide whether each statement is true or false.`;

  // Use product u=t^3, v=e^{-2t}, w=ln(t+1)
  // Z' = u'vw + uv'w + uvw'
  // One derivative check at a point + property traps
  // Z(t)>0 for t>0 True
  // claim Z decreasing on (0,∞) False
  // lim t→∞ Z=0 True
  // At t=1: compute Z'(1) sign
  // u'=3t^2, v'=-2e^{-2t}, w'=1/(t+1)
  // Z'(1)= 3(1)e^{-2}ln2 + 1*(-2)e^{-2}ln2 + 1*e^{-2}*(1/2)
  // = e^{-2}[3ln2 - 2ln2 + 1/2] = e^{-2}(ln2 + 0.5) > 0
  // claim Z'(1)<0 False
  // Product rule form matches

  const statements = [
    "The derivative $Z'$ expands by the three-factor product rule as $u'vw+uv'w+uvw'$ with $u=t^{3}$, $v=e^{-2t}$, $w=\\ln(t+1)$.",
    "For every $t>0$ one has $Z(t)>0$.",
    "The factor $e^{-2t}$ is always positive, so it cannot change the sign of $Z$ on $(0,+\\infty)$.",
    "$Z$ is strictly decreasing on the whole half-line $(0,+\\infty)$.",
    "$\\displaystyle\\lim_{t\\to +\\infty}Z(t)=0$.",
  ];

  // D False because Z'(1)>0 so initially increasing

  const answer_key = [true, true, true, false, true];

  const tactical_explanations = [
    `**A.** → True

That is exactly the product rule for three differentiable factors.

So the statement is True.`,

    `**B.** → True

For $t>0$, each of $t^{3}$, $e^{-2t}$ and $\\ln(t+1)$ is positive.

So the statement is True.`,

    `**C.** → True

$e^{-2t}>0$ for all real $t$, so it never flips the sign of $Z$ on $(0,+\\infty)$.

So the statement is True.`,

    `**D.** → False

At $t=1$,

$$
Z'(1)=e^{-2}\\bigl(\\ln 2+\\tfrac12\\bigr)>0
$$

so $Z$ increases through $t=1$ and cannot be strictly decreasing on the whole half-line.

So the statement is False.`,

    `**E.** → True

Polynomial–log growth is dominated by $e^{-2t}\\to 0$, so $Z(t)\\to 0$.

So the statement is True.`,
  ];

  return {
    case_id: "MATH 11.MOCK.ZCUBE",
    id: "MATH 11.MOCK.ZCUBE",
    title: "Engagement $t^{3}e^{-2t}\\ln(t+1)$ — product rule and monotonicity traps",
    chapter: 11,
    subsection: "11.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Product rule matches A. $Z>0$; $e^{-2t}$ preserves sign; $Z'(1)>0$ kills monotone decrease; $Z\\to 0$ at $+\\infty$.`,
  };
}

/** Q33 — best-of-five unfair match (course probability theme). */
export function buildMathQ33Coins() {
  const context = `Ana and Ben play a best-of-five contest (first to three wins takes the match). Each game is independent. Ana wins a single game with probability $p=\\tfrac{3}{5}$; Ben wins with probability $q=\\tfrac{2}{5}$.

They stop when one player reaches three wins.

Decide whether each statement is true or false.`;

  const statements = [
    "The probability Ana sweeps the match $3$–$0$ is $\\dfrac{27}{125}$.",
    "The probability the match lasts exactly five games is $\\dfrac{216}{625}$.",
    "The probability Ana wins the match equals $\\dfrac{3}{5}$.",
    "Conditional on the match lasting five games, the probability Ana wins the match is $\\dfrac{3}{5}$.",
    "The probability the match ends in exactly three games is $\\dfrac{7}{25}$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
p^{3}=\\left(\\dfrac{3}{5}\\right)^{3}=\\dfrac{27}{125}
$$

So the statement is True.`,

    `**B.** → True

A fifth game requires a $2$–$2$ split after four games:

$$
\\binom{4}{2}p^{2}q^{2}=6\\cdot\\dfrac{9}{25}\\cdot\\dfrac{4}{25}=\\dfrac{216}{625}
$$

So the statement is True.`,

    `**C.** → False

$$
P(\\text{Ana wins})=p^{3}(1+3q+6q^{2})=\\dfrac{27}{125}\\cdot\\dfrac{79}{25}=\\dfrac{2133}{3125}\\neq\\dfrac{3}{5}
$$

So the statement is False.`,

    `**D.** → True

Given $2$–$2$, the fifth game decides, and Ana wins it with probability $p=\\tfrac{3}{5}$.

So the statement is True.`,

    `**E.** → True

$$
p^{3}+q^{3}=\\dfrac{27+8}{125}=\\dfrac{35}{125}=\\dfrac{7}{25}
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 12.MOCK.BEST5",
    id: "MATH 12.MOCK.BEST5",
    title: "Best-of-five unfair match — length and winner traps",
    chapter: 12,
    subsection: "12.3",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `Sweep $27/125$. Five games $216/625$. Ana match win $2133/3125\\neq 3/5$. Given five games, win prob $p$. Three-game match $7/25$.`,
  };
}

/** Q34 — binomial mean / variance / proportion (course binomial theme). */
export function buildMathQ34Binomial() {
  const context = `A call centre handles $n=50$ independent outbound calls. Each call is a sale with probability $p=0.3$. Let $X\\sim\\mathrm{Bin}(50,0.3)$ and $\\hat{p}=X/50$.

Decide whether each statement is true or false.`;

  // mean 15, var 10.5, sd≈3.24 ∈ (3,4)
  // var claim =15 False
  // var hatp = 0.3*0.7/50 = 0.21/50 = 0.0042
  // sd hatp ≈ 0.0648 < 0.07

  const statements = [
    "The mean of $X$ is $15$ and the variance of $X$ is $10.5$.",
    "The standard deviation of $X$ is strictly between $3$ and $4$.",
    "The variance of $X$ equals $15$.",
    "The variance of the sales rate $\\hat{p}$ equals $0.0042$.",
    "The standard deviation of $\\hat{p}$ is strictly less than $0.07$.",
  ];

  const answer_key = [true, true, false, true, true];

  const tactical_explanations = [
    `**A.** → True

$$
E[X]=50\\cdot 0.3=15,\\qquad \\mathrm{Var}(X)=50\\cdot 0.3\\cdot 0.7=10.5
$$

So the statement is True.`,

    `**B.** → True

$$
\\sqrt{10.5}\\approx 3.24\\in(3,4)
$$

So the statement is True.`,

    `**C.** → False

Variance is $10.5$, not the mean $15$.

So the statement is False.`,

    `**D.** → True

$$
\\mathrm{Var}(\\hat{p})=\\dfrac{0.3\\cdot 0.7}{50}=0.0042
$$

So the statement is True.`,

    `**E.** → True

$$
\\sqrt{0.0042}\\approx 0.0648<0.07
$$

So the statement is True.`,
  ];

  return {
    case_id: "MATH 13.MOCK.CALL50",
    id: "MATH 13.MOCK.CALL50",
    title: "Fifty sales calls — binomial mean, variance, proportion",
    chapter: 13,
    subsection: "13.1",
    context,
    statements,
    answer_key,
    tactical_explanations,
    difficulty_level: "5/5",
    solution_overview: `$E=15$, $\\mathrm{Var}=10.5$, $\\mathrm{SD}\\approx 3.24$. Variance is not $15$. $\\mathrm{Var}(\\hat{p})=0.0042$, $\\mathrm{SD}\\approx 0.065$.`,
  };
}
