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

Start from the programme size $200$ and ask how many staff finished at least one module. Inclusion–exclusion on Privacy, Security, and Audit gives

$$
|P\cup S\cup A|=|P|+|S|+|A|-|P\cap S|-|P\cap A|-|S\cap A|+|P\cap S\cap A|
$$

$$
=120+95+80-48-40-35+18
$$

Add the singles first: $120+95+80=295$. The three pairwise overlaps sum to $48+40+35=123$, so subtracting them leaves $295-123=172$. Adding back the triple intersection of $18$ produces

$$
172+18=190
$$

staff who finished at least one module. Everyone else finished none:

$$
200-190=10
$$

That is exactly the blocked count in the claim.

So the statement is True.`,

    `**B.** → False

The claim compares two Venn regions: the triple intersection (given as $18$) against the “Audit and nothing else” petal. Only Audit is what remains after stripping both pairwise overlaps that touch Audit and restoring the triple (which was subtracted twice):

$$
|A \setminus (P\cup S)|=|A|-|P\cap A|-|S\cap A|+|P\cap S\cap A|
$$

$$
=80-40-35+18=23
$$

“Strictly more staff finished every module than finished Audit alone” would require $18>23$. That inequality is false — the exclusive Audit petal is larger by $5$. The claim fails on a direct numerical comparison, not on a subtle counting trap.

So the statement is False.`,

    `**C.** → True

Translate the verbal claim into exclusive regions. “Privacy but neither of the other two” is the Privacy-only petal. Start from $|P|=120$, subtract everyone who also finished Security ($|P\cap S|=48$) and everyone who also finished Audit ($|P\cap A|=40$). Those two subtractions both remove the triple intersection, so add $|P\cap S\cap A|=18$ back once:

$$
|P \setminus (S\cup A)|=120-48-40+18
$$

$$
=120-88+18=50
$$

Do the same for Security-only, starting from $|S|=95$ and using the Security–Privacy and Security–Audit overlaps:

$$
|S \setminus (P\cup A)|=95-48-35+18=30
$$

Now compare the two petals: $50>30$, so Privacy-only staff outnumber Security-only staff. That is precisely the claim.

So the statement is True.`,

    `**D.** → False

The claim says finishing Audit without Privacy is impossible. But the exclusive Audit count

$$
80-40-35+18=23
$$

is already a nonempty set of people who finished Audit and neither Privacy nor Security. Those $23$ staff are a concrete counterexample, so the impossibility claim collapses immediately.

So the statement is False.`,

    `**E.** → True

Ignore Audit for this letter — the claim only asks for Privacy or Security. Two-set inclusion–exclusion is enough:

$$
|P\cup S|=|P|+|S|-|P\cap S|=120+95-48
$$

$$
=215-48=167
$$

The threshold in the claim is $160$, and $167>160$, so the staff who finished at least one of those two modules are strictly more than $160$.

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

Start from the square of the recorded sum. Expanding

$$
(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca)
$$

and rearranging for the sum of squares gives the identity

$$
a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ca)
$$

Feed in $a+b+c=12$ and $ab+bc+ca=47$:

$$
a^{2}+b^{2}+c^{2}=12^{2}-2\cdot 47=144-94=50
$$

No approximation is needed — the archive forces the sum of squares to equal $50$ exactly, matching the claim.

So the statement is True.`,

    `**B.** → True

The three pairwise squared gaps expand to a tidy multiple of the gap between sum-of-squares and sum-of-products:

$$
(a-b)^{2}+(b-c)^{2}+(c-a)^{2}=2\bigl(a^{2}+b^{2}+c^{2}-ab-bc-ca\bigr)
$$

Letter A already gave $a^{2}+b^{2}+c^{2}=50$, and the archive records $ab+bc+ca=47$, so the parenthesis is just $50-47=3$. Then

$$
2\cdot 3=6
$$

which is exactly the claimed value.

So the statement is True.`,

    `**C.** → False

For three numbers the cubic identity

$$
a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\bigl(a^{2}+b^{2}+c^{2}-ab-bc-ca\bigr)
$$

ties the sum of cubes to the three elementary symmetric records. From letter A, $a^{2}+b^{2}+c^{2}=50$, so the second factor is

$$
50-47=3
$$

The first factor is the recorded sum $12$, hence

$$
a^{3}+b^{3}+c^{3}-3abc=12\cdot 3=36
$$

Solve for the sum of cubes by adding $3abc$ on both sides. With $abc=60$:

$$
a^{3}+b^{3}+c^{3}=36+3\cdot 60=36+180=216
$$

The claim asserts $220$. That is $4$ too large — a near-miss that would be easy to invent by mistaking $3abc$ for $2abc$ or similar — but the true value is $216$, so the statement is false.

So the statement is False.`,

    `**D.** → True

By Vieta’s formulas the three archive records are exactly the elementary symmetric coefficients of the monic cubic with roots $a$, $b$, $c$:

$$
x^{3}-(a+b+c)x^{2}+(ab+bc+ca)x-abc=0
$$

Substitute the given numbers:

$$
x^{3}-12x^{2}+47x-60=0
$$

Integer candidates that divide $60$ are worth testing. Try $x=3$:

$$
3^{3}-12\cdot 3^{2}+47\cdot 3-60=27-108+141-60=0
$$

so $x=3$ is a root. Factor out $(x-3)$ by synthetic division (coefficients $1$, $-12$, $47$, $-60$): bring down $1$, multiply by $3$ to get $3$, add to $-12$ to get $-9$, multiply by $3$ to get $-27$, add to $47$ to get $20$, multiply by $3$ to get $60$, add to $-60$ to get $0$. The quadratic factor is therefore

$$
x^{2}-9x+20=(x-4)(x-5)
$$

and the cubic factors completely as $(x-3)(x-4)(x-5)$. The unordered triple of roots is $\{3,4,5\}$, which is what the claim asserts.

So the statement is True.`,

    `**E.** → False

Clear the three reciprocals over the common denominator $abc$:

$$
\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}=\dfrac{bc+ca+ab}{abc}=\dfrac{ab+bc+ca}{abc}=\dfrac{47}{60}
$$

The claim writes the flipped fraction $60/47$. That is the reciprocal of the true sum, not the sum itself, so the statement fails.

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

Discount each gift separately at the annual effective rate $5\%$, then add. The present value of the package is

$$
\mathrm{PV}=\dfrac{10000}{1.05}+\dfrac{12000}{1.05^{3}}+\dfrac{14000}{1.05^{4}}
$$

Compute the powers of $1.05$ first so the denominators are exact:

$$
1.05^{2}=1.1025,\qquad 1.05^{3}=1.157625,\qquad 1.05^{4}=1.21550625
$$

Now each term:

$$
\dfrac{10000}{1.05}=\dfrac{1000000}{105}\approx 9523.81
$$

$$
\dfrac{12000}{1.157625}\approx 10366.05
$$

$$
\dfrac{14000}{1.21550625}\approx 11517.83
$$

Adding the three discounted gifts:

$$
9523.81+10366.05+11517.83=31407.69
$$

Compare with the claim’s threshold: $31407.69<32000$, so the present value does not exceed $32000$. The claim overstates the package by roughly $600$.

So the statement is False.`,

    `**B.** → True

Only the one-year gift matters. Discount $10000$ for a single year at $5\%$:

$$
\dfrac{10000}{1.05}\approx 9523.81
$$

That is already strictly below $9600$, so the claim holds without needing the other two gifts.

So the statement is True.`,

    `**C.** → True

A level perpetuity-due of amount $R$ pays at the beginning of every year, including today. Relative to an ordinary perpetuity-immediate (first payment in one year), the due version is worth one extra immediate payment, which is equivalent to multiplying by $(1+i)$:

$$
\ddot{a}_{\infty}=R\cdot\dfrac{1+i}{i}
$$

With $R=10000$ and $i=0.05$:

$$
10000\cdot\dfrac{1.05}{0.05}=10000\cdot 21=210000
$$

The present value is exactly $210000$, matching the claim with no rounding.

So the statement is True.`,

    `**D.** → False

Moving every gift one year earlier replaces each discount factor $v^{n}=(1.05)^{-n}$ by $v^{n-1}$. Because $1.05>1$, one has $v^{n-1}>v^{n}$ for every positive integer $n$, so each gift’s present value strictly rises. The sum of three larger positive terms is larger, not smaller. The claim asserts that PV would decrease — that is the wrong direction entirely.

So the statement is False.`,

    `**E.** → False

Compare the middle and final gifts on their own. From the powers computed in letter A,

$$
\dfrac{12000}{1.05^{3}}=\dfrac{12000}{1.157625}\approx 10366.05
$$

$$
\dfrac{14000}{1.05^{4}}=\dfrac{14000}{1.21550625}\approx 11517.83
$$

Even though the $14000$ gift arrives one year later, its larger face value more than offsets the extra year of discounting: $11517.83>10366.05$. The claim that the year-$3$ present value exceeds the year-$4$ present value is therefore false.

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

Pipe A fills one full tank in $6$ hours, so its hourly rate is the reciprocal

$$
r_A=\dfrac{1}{6}
$$

tank per hour. Compare with $\tfrac{1}{5}$: because $6>5$, one has $\tfrac{1}{6}<\tfrac{1}{5}$. A’s rate is strictly smaller than the claimed threshold, not greater.

So the statement is False.`,

    `**B.** → False

Write the three rates as fractions of a tank per hour: A contributes $\tfrac{1}{6}$, B contributes $\tfrac{1}{4}$, and the drain removes $\tfrac{1}{12}$. The net combined rate with all three open is

$$
r_A+r_B-r_D=\dfrac{1}{6}+\dfrac{1}{4}-\dfrac{1}{12}
$$

Clear denominators with $12$:

$$
=\dfrac{2}{12}+\dfrac{3}{12}-\dfrac{1}{12}=\dfrac{4}{12}=\dfrac{1}{3}
$$

The claim asserts equality with $\tfrac{5}{12}$. But $\tfrac{1}{3}=\tfrac{4}{12}$, which is one twelfth smaller than $\tfrac{5}{12}$. The claimed net rate is too high.

So the statement is False.`,

    `**C.** → False

From letter B the net fill rate with all three open is $\tfrac{1}{3}$ tank per hour. Starting from empty, time to one full tank is the reciprocal:

$$
T=\dfrac{1}{1/3}=3
$$

hours exactly. The claim needs a fill time strictly less than $3$ hours. Equality to $3$ means the strict inequality fails, even though the tank does fill in finite time.

So the statement is False.`,

    `**D.** → True

Close B and leave only A and the drain. Their net rate is inlet minus outflow:

$$
r_A-r_D=\dfrac{1}{6}-\dfrac{1}{12}
$$

Rewrite $\tfrac{1}{6}$ over the common denominator $12$:

$$
\dfrac{1}{6}=\dfrac{2}{12},\qquad \dfrac{2}{12}-\dfrac{1}{12}=\dfrac{1}{12}
$$

The net rate $\tfrac{1}{12}$ is still positive, so the tank continues to fill (slowly). The time from empty to full is the reciprocal of that net rate:

$$
T=\dfrac{1}{1/12}=12
$$

hours. Compare with the claim’s threshold: $12>8$, so the fill time exceeds $8$ hours, and both halves of the claim hold.

So the statement is True.`,

    `**E.** → True

In one hour, B alone contributes

$$
r_B=\dfrac{1}{4}
$$

of a tank. In the same hour, A and the drain together contribute only the net rate from letter D:

$$
r_A-r_D=\dfrac{1}{12}
$$

Because $\tfrac{1}{4}=\tfrac{3}{12}>\tfrac{1}{12}$, B alone fills more in one hour than A and the drain add net in one hour. The claim is therefore true.

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

Break-even means the three products’ contributions exactly cover the monthly fixed costs EUR $4800$. With unit contributions $4$, $5$, and $6$ that is the linear balance

$$
4x+5y+6z=4800.
$$

The sales plan locks the volumes to the mix $x=2z$ and $y=3z$. Substitute those ratios before solving for $z$:

$$
4(2z)+5(3z)+6z=8z+15z+6z=29z.
$$

So the entire plan collapses to a single equation in $z$:

$$
29z=4800\\qquad\\Rightarrow\\qquad z=\\dfrac{4800}{29}.
$$

Long division (or a calculator) gives $4800/29\\approx 165.517$. The claim only asks whether this break-even $Z$-volume is strictly above $160$. Because $165.517>160$, the inequality holds.

(If you prefer an exact comparison without decimals: $29\\cdot 160=4640$, and $4800-4640=160>0$, so $4800/29>160$ as well.)

So the statement is True.`,

    `**B.** → False

Letter A already gave $z=4800/29$. Integer units would require $29\\mid 4800$. But $29\\cdot 165=4785$ and $4800-4785=15\\neq 0$, so the quotient is not an integer.

So the statement is False.`,

    `**C.** → True

With $x=2z$ and $y=3z$, total monthly unit volume is just a multiple of $z$:

$$
x+y+z=2z+3z+z=6z=\\dfrac{6\\cdot 4800}{29}=\\dfrac{28800}{29}.
$$

Now $28800\\div 29$: $29\\cdot 993=28797$, remainder $3$, so

$$
\\dfrac{28800}{29}=993+\\dfrac{3}{29}\\approx 993.10<1000.
$$

Break-even total volume therefore sits strictly below the claimed threshold $1000$.

So the statement is True.`,

    `**D.** → False

Raise fixed costs to EUR $5800$ but keep the same mix coefficient $29z$:

$$
29z=5800\\qquad\\Rightarrow\\qquad z=\\dfrac{5800}{29}=200
$$

exactly ($29\\cdot 200=5800$). “Exceed $200$” is the strict inequality $z>200$; equality fails that test.

So the statement is False.`,

    `**E.** → True

Now drop product $Y$ entirely ($y=0$) while still forcing $x=2z$ and keeping the original fixed costs EUR $4800$. Contribution comes only from $X$ and $Z$:

$$
4x+6z=4(2z)+6z=8z+6z=14z.
$$

Break-even becomes

$$
14z=4800\\qquad\\Rightarrow\\qquad z=\\dfrac{4800}{14}=\\dfrac{2400}{7}\\approx 342.86.
$$

In the three-product plan (letter A) one had $z=4800/29\\approx 165.52$. Compare the two required $Z$-volumes:

$$
\\dfrac{2400}{7}-\\dfrac{4800}{29}=\\dfrac{2400\\cdot 29-4800\\cdot 7}{7\\cdot 29}=\\dfrac{69600-33600}{203}=\\dfrac{36000}{203}>0.
$$

So the two-product break-even $z$ is strictly larger than the three-product one — losing $Y$’s contribution of $5$ EUR per unit forces the workshop to push $Z$ (and with it $X=2z$) much higher to cover the same fixed costs.

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

Think of $|x-1|+|x-4|$ as the sum of distances from a point $x$ on the line to the fixed points $1$ and $4$. Any path from $1$ to $4$ has length at least $3$, and the shortest path is the straight segment between them. Algebraically,

$$
|x-1|+|x-4|\\ge|(4)-(1)|=3,
$$

with equality if and only if $x$ lies on the closed segment joining $1$ and $4$, i.e. $x\\in[1,4]$. The inequality $\\le 3$ therefore forces equality throughout that segment and nowhere else. The solution set is exactly $[1,4]$.

So the statement is True.`,

    `**B.** → False

Two restrictions appear before any algebra. The square root needs $2x-1\\ge 0$, so $x\\ge 1/2$. Separately, a nonnegative quantity $\\sqrt{2x-1}$ cannot be strictly smaller than a nonpositive number, so one must have $x-2>0$, i.e. $x>2$. On that half-line both sides are defined and the right-hand side is positive, so squaring is valid and preserves the strict inequality:

$$
2x-1<(x-2)^{2}=x^{2}-4x+4.
$$

Bring everything to the right:

$$
0<x^{2}-4x+4-(2x-1)=x^{2}-6x+5=(x-1)(x-5).
$$

A product of two linear factors is positive outside the roots: $x<1$ or $x>5$. Intersect with the working region $x>2$: only $x>5$ survives. Thus the true solution set is $(5,+\\infty)$, not the claimed $(2,+\\infty)$. The interval $(2,5]$ looks tempting after domain trimming alone, but those points fail after squaring (for example at $x=3$: $\\sqrt{5}\\approx 2.24\\nless 1$).

So the statement is False.`,

    `**C.** → False

Critical points: numerator zero at $x=2$, denominator zero at $x=-1$ (undefined). Sign chart: negative on $(-1,2)$, zero at $x=2$, so $\\le 0$ solves as $(-1,2]$. The claimed $[-1,2]$ illegally includes the pole $x=-1$.

So the statement is False.`,

    `**D.** → True

Put $u=|x|$ with $u\\ge 0$. The inequality becomes the ordinary quadratic

$$
u^{2}-u-2<0\\qquad\\Leftrightarrow\\qquad (u-2)(u+1)<0.
$$

Roots at $u=-1$ and $u=2$. The product is negative strictly between the roots, so $-1<u<2$. Restricting to $u\\ge 0$ leaves $0\\le u<2$, i.e. $|x|<2$, hence $x\\in(-2,2)$. That matches the claim exactly (open endpoints because the original inequality is strict).

So the statement is True.`,

    `**E.** → True

Both sides of $|2x+1|>|x-3|$ are nonnegative, so squaring is equivalent and keeps the direction:

$$
(2x+1)^{2}>(x-3)^{2}.
$$

Expand:

$$
4x^{2}+4x+1>x^{2}-6x+9\\qquad\\Rightarrow\\qquad 3x^{2}+10x-8>0.
$$

Factor the quadratic. Looking for integers with product $-24$ and sum $10$: the pair $12$ and $-2$ works after scaling,

$$
3x^{2}+10x-8=(3x-2)(x+4),
$$

because $(3x-2)(x+4)=3x^{2}+12x-2x-8=3x^{2}+10x-8$. Critical roots are therefore $x=2/3$ and $x=-4$. A parabola opening upward is positive outside its roots:

$$
x<-4\\quad\\text{or}\\quad x>\\dfrac{2}{3},
$$

which is exactly the claimed set $(-\\infty,-4)\\cup\\bigl(2/3,+\\infty\\bigr)$.

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

Continuity at the join $x=1$ needs the left-hand limit to equal $f(1)$. Approaching from the left uses the linear piece $2x+1$:

$$
\\lim_{x\\to 1^{-}}f(x)=2\\cdot 1+1=3.
$$

The right-hand piece also covers the point itself:

$$
f(1)=1^{2}-2\\cdot 1+4=3.
$$

Left limit and function value agree at $3$, so $f$ is continuous at $x=1$.

So the statement is True.`,

    `**B.** → False

One-sided derivatives at the join: left piece gives $f'(x)=2$, so $f'_-(1)=2$; right piece gives $f'(x)=2x-2$, so $f'_+(1)=0$. Since $2\\neq 0$, $f$ is not differentiable at $x=1$.

So the statement is False.`,

    `**C.** → True

Restrict attention to the quadratic piece $x\\ge 1$. Completing the square makes the lower bound obvious:

$$
f(x)=x^{2}-2x+4=(x^{2}-2x+1)+3=(x-1)^{2}+3.
$$

For every real $x$ one has $(x-1)^{2}\\ge 0$, so $f(x)\\ge 3$, and the squared term vanishes precisely when $x=1$. That point lies in the region $x\\ge 1$, so on the whole half-line $[1,+\\infty)$ one obtains

$$
f(x)\\ge 3,
$$

with equality attained at $x=1$ and nowhere else in that region. As a quick check: at $x=1$ one gets $f(1)=3$, and at $x=3$ one gets $f(3)=9-6+4=7>3$. The claim is therefore correct — it never asserts anything about $x<1$, only about the right-hand piece.

So the statement is True.`,

    `**D.** → False

Letter C only pins down a minimum of $3$ on $[1,+\\infty)$. On the complementary half-line $x<1$ the function is the unrestricted linear piece $f(x)=2x+1$. Sending $x\\to-\\infty$ drives $2x+1\\to-\\infty$, so $f$ has no lower bound on $\\mathbb{R}$ at all. In particular $3$ cannot be a global minimum value on the whole real line — values such as $f(-10)=-19$ already sit well below $3$.

So the statement is False.`,

    `**E.** → True

On the open half-line $x<1$ the formula is linear: solve $2x+1=0$ to get $x=-1/2$. That candidate is negative and satisfies $x<1$, so it is a genuine root of $f(x)=0$ in the left region.

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

Factor the engagement score as a product of three smooth pieces on $t>0$:

$$
Z(t)=u(t)\\,v(t)\\,w(t),\\qquad u(t)=t^{2},\\quad v(t)=e^{-t},\\quad w(t)=\\ln(2t+1).
$$

Differentiate each factor separately. The power rule yields $u'(t)=2t$. The exponential chain rule yields $v'(t)=-e^{-t}$. For the logarithm, the inner derivative of $2t+1$ is $2$, so

$$
w'(t)=\\dfrac{1}{2t+1}\\cdot 2=\\dfrac{2}{2t+1}.
$$

Expand the three-factor product rule $Z'=u'vw+uv'w+uvw'$ before combining anything:

$$
u'vw=2t\\cdot e^{-t}\\cdot\\ln(2t+1),
$$

$$
uv'w=t^{2}\\cdot\\bigl(-e^{-t}\\bigr)\\cdot\\ln(2t+1)=-t^{2}e^{-t}\\ln(2t+1),
$$

$$
uvw'=t^{2}\\cdot e^{-t}\\cdot\\dfrac{2}{2t+1}=e^{-t}\\cdot\\dfrac{2t^{2}}{2t+1}.
$$

Every summand carries a factor $e^{-t}$. Pull that common factor out to obtain

$$
Z'(t)=e^{-t}\\Biggl(2t\\ln(2t+1)-t^{2}\\ln(2t+1)+\\dfrac{2t^{2}}{2t+1}\\Biggr).
$$

The right-hand side is exactly the formula in the claim, and each step used only identities that hold for every $t>0$.

So the statement is True.`,

    `**B.** → True

On $t>0$ each factor of $Z$ is strictly positive: $t^{2}>0$, the exponential $e^{-t}$ never vanishes, and $2t+1>1$ forces $\\ln(2t+1)>0$. A product of three positive quantities stays positive.

So the statement is True.`,

    `**C.** → True

Letter A already wrote $Z'(t)=e^{-t}\\,B(t)$ with $B$ the displayed bracket. Because $e^{-t}>0$ for every real argument, multiplying by that factor cannot turn a positive bracket into a negative derivative or a negative bracket into a positive one. The signs of $Z'$ and of $B$ therefore agree throughout $t>0$.

So the statement is True.`,

    `**D.** → False

Strict decrease on $(0,+\\infty)$ would require $Z'(t)\\le 0$ at every point of that half-line. Test the bracket from letter A at the convenient interior point $t=1$:

$$
B(1)=2\\cdot 1\\cdot\\ln(2\\cdot 1+1)-1^{2}\\ln 3+\\dfrac{2\\cdot 1^{2}}{2\\cdot 1+1}.
$$

Simplify term by term:

$$
2\\ln 3-\\ln 3+\\dfrac{2}{3}=\\ln 3+\\dfrac{2}{3}.
$$

Since $\\ln 3>0$, the sum $\\ln 3+\\tfrac{2}{3}$ is strictly positive. Multiplying by the positive factor $e^{-1}$ keeps

$$
Z'(1)=e^{-1}\\Bigl(\\ln 3+\\dfrac{2}{3}\\Bigr)>0.
$$

A positive derivative at an interior point means $Z$ is locally increasing there. That single counterexample already kills the claim that $Z$ is strictly decreasing on the whole half-line; there is no need to chart the full sign of $B$.

So the statement is False.`,

    `**E.** → True

Group the decaying exponential against the growing factors:

$$
Z(t)=\\bigl(t^{2}\\ln(2t+1)\\bigr)\\,e^{-t}.
$$

As $t\\to+\\infty$ the product $t^{2}\\ln(2t+1)$ diverges, but only polynomially times a slow logarithm. Exponential growth dominates every such product, which is the standard comparison

$$
\\dfrac{t^{2}\\ln(2t+1)}{e^{t}}\\to 0.
$$

Hence $Z(t)\\to 0$, matching the claimed limit.

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

Ana wins in exactly two games only by sweeping both. Independence multiplies:

$$
P(\\text{Ana }2\\text{–}0)=p^{2}=\\left(\\dfrac{2}{3}\\right)^{2}=\\dfrac{4}{9}.
$$

So the statement is True.`,

    `**B.** → True

A third game is needed exactly when the first two games split. The ordered splits Ana–Ben and Ben–Ana are mutually exclusive:

$$
P(\\text{AB})=pq=\\dfrac{2}{3}\\cdot\\dfrac{1}{3}=\\dfrac{2}{9},
$$

$$
P(\\text{BA})=qp=\\dfrac{1}{3}\\cdot\\dfrac{2}{3}=\\dfrac{2}{9}.
$$

Add them:

$$
P(\\text{exactly three games})=\\dfrac{2}{9}+\\dfrac{2}{9}=\\dfrac{4}{9}=2pq.
$$

That is the claimed probability.

So the statement is True.`,

    `**C.** → False

Ana wins the match either $2$–$0$ or $2$–$1$. The sweep probability is $p^{2}$ from letter A. For a $2$–$1$ win she must split the first two games and then take the decider. The two split orders each contribute a factor $p^{2}q$:

$$
P(\\text{Ana }2\\text{–}1)=P(\\text{ABA})+P(\\text{BAA})=pqp+qpp=2p^{2}q.
$$

Add the two mutually exclusive ways she takes the match:

$$
P(\\text{Ana wins})=p^{2}+2p^{2}q=p^{2}(1+2q).
$$

Substitute $p=\\tfrac{2}{3}$ and $q=\\tfrac{1}{3}$:

$$
p^{2}=\\dfrac{4}{9},\\qquad 1+2q=1+\\dfrac{2}{3}=\\dfrac{5}{3},
$$

$$
P(\\text{Ana wins})=\\dfrac{4}{9}\\cdot\\dfrac{5}{3}=\\dfrac{20}{27}.
$$

Compare with the claimed value:

$$
\\dfrac{2}{3}=\\dfrac{18}{27}\\neq\\dfrac{20}{27}.
$$

The figure $\\tfrac{2}{3}$ is only Ana’s single-game win probability. A best-of-three amplifies the stronger player, so her match-win probability is larger than $p$. The equality claim therefore fails.

So the statement is False.`,

    `**D.** → True

Condition on lasting three games: the score after two games is already $1$–$1$. The third game alone decides the match, and Ana wins that game with probability $p=\\tfrac{2}{3}$. The conditional match-win probability therefore equals her ordinary game-win probability.

So the statement is True.`,

    `**E.** → True

A two-game ending means someone swept. Ana’s sweep has probability $p^{2}=\\tfrac{4}{9}$; Ben’s sweep has probability

$$
q^{2}=\\left(\\dfrac{1}{3}\\right)^{2}=\\dfrac{1}{9}.
$$

These outcomes are disjoint, so

$$
P(\\text{ends in two games})=p^{2}+q^{2}=\\dfrac{4}{9}+\\dfrac{1}{9}=\\dfrac{5}{9}.
$$

As a check, letter B gave $P(\\text{three games})=\\tfrac{4}{9}$, and every match ends in either two or three games, hence the complement is

$$
1-\\dfrac{4}{9}=\\dfrac{5}{9},
$$

the same answer.

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

For $X\\sim\\mathrm{Bin}(n,p)$ one has $E[X]=np$ and $\\mathrm{Var}(X)=np(1-p)$. With $n=50$ and $p=0.4$,

$$
E[X]=50\\cdot 0.4=20,
$$

$$
\\mathrm{Var}(X)=50\\cdot 0.4\\cdot 0.6=50\\cdot 0.24=12.
$$

Both halves of the claim match.

So the statement is True.`,

    `**B.** → True

Letter A produced $\\mathrm{Var}(X)=12$, so

$$
\\mathrm{SD}(X)=\\sqrt{12}=\\sqrt{4\\cdot 3}=2\\sqrt{3}.
$$

To place $2\\sqrt{3}$ between $3$ and $4$ without a calculator, compare squares. The square-root function is increasing on $[0,+\\infty)$, therefore

$$
3<2\\sqrt{3}<4\\qquad\\Longleftrightarrow\\qquad 9<12<16.
$$

The middle inequality is immediate from $3^{2}=9$ and $4^{2}=16$. Hence

$$
3<\\mathrm{SD}(X)<4,
$$

which is exactly the claimed sandwich.

So the statement is True.`,

    `**C.** → False

The variance is $np(1-p)=12$, not $20$. The number $20$ is the mean $np$; swapping mean for variance is the trap.

So the statement is False.`,

    `**D.** → True

The sales rate is the scaled binomial $\\hat{p}=X/50$. Variance scales by the square of the constant:

$$
\\mathrm{Var}\\!\\left(\\dfrac{X}{50}\\right)=\\dfrac{1}{50^{2}}\\mathrm{Var}(X)=\\dfrac{12}{2500}=0.0048.
$$

The Bernoulli-proportion formula recovers the same figure in one step:

$$
\\mathrm{Var}(\\hat{p})=\\dfrac{p(1-p)}{n}=\\dfrac{0.4\\cdot 0.6}{50}=\\dfrac{0.24}{50}=0.0048.
$$

So the statement is True.`,

    `**E.** → True

From letter D the variance of the sales rate is already known:

$$
\\mathrm{Var}(\\hat{p})=0.0048.
$$

The standard deviation is the positive square root of that variance:

$$
\\mathrm{SD}(\\hat{p})=\\sqrt{0.0048}.
$$

The claim asks only for a comparison with $0.1$, not for a decimal expansion. Square both sides of the proposed inequality $\\sqrt{0.0048}<0.1$: because both sides are positive, the inequality is equivalent to

$$
0.0048<0.1^{2}=0.01.
$$

The numerical comparison $0.0048<0.01$ is immediate, so $\\mathrm{SD}(\\hat{p})<0.1$ follows at once.

For a sharper picture one can also sandwich the square root against $0.07$. Compute

$$
0.07^{2}=0.0049.
$$

Since $0.0048<0.0049$, taking positive square roots yields $\\sqrt{0.0048}<0.07$. Chaining with $0.07<0.1$ then gives

$$
\\mathrm{SD}(\\hat{p})=\\sqrt{0.0048}<0.07<0.1.
$$

Either route — the direct comparison with $0.01$, or the tighter sandwich through $0.07$ — confirms that the sales-rate standard deviation sits strictly below one-tenth.

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

