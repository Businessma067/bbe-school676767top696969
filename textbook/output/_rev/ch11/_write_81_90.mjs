import fs from "fs";

const file = new URL("./81_90.json", import.meta.url);

const overviews = {
  "math-11-81": `A single deposit has to grow into a known pile, so the compounding formula is run backwards. Ms. Delgado needs $A=5000$ in $n=3$ years at $r=0.07$. One annual credit multiplies the balance by $1.07$, and three of those credits must turn today's deposit $x$ into $5000$:

$$
x(1.07)^{3}=5000, \\qquad x=\\frac{5000}{(1.07)^{3}}
$$

$$
(1.07)^{3}=1.225043
$$

$$
x=\\frac{5000}{1.225043}=4081.49
$$

That is the oven-fund deposit. Whatever the account later adds on top of $4081.49$ is interest:

$$
5000-4081.49=918.51
$$`,

  "math-11-82": `A lump sum left untouched simply multiplies by the growth factor once a year. The designer plants $P=6500$ at $r=0.06$, so the balance after $n$ years is

$$
F=6500\\left(1+\\frac{6}{100}\\right)^{n}=6500(1.06)^{n}
$$

Five years uses

$$
(1.06)^{5}=1.338226
$$

$$
F(5)=6500\\times 1.338226=8698.47
$$

Interest in that first block is the extra $8698.47-6500=2198.47$. Ten years uses the square of the same factor:

$$
(1.06)^{10}=1.790848
$$

$$
F(10)=6500\\times 1.790848=11640.51
$$

Years $6$ through $10$ therefore add $11640.51-8698.47=2942.04$, more than the first block because interest now accrues on an already larger balance.`,

  "math-11-83": `End-of-year deposits of the same size are an ordinary annuity. The clinic puts in $a=2000$ for $n=6$ years at $r=0.05$, and the accumulated value is

$$
F_{n}=\\frac{a}{r}\\bigl[(1+r)^{n}-1\\bigr]
$$

The leading fraction is $\\frac{2000}{0.05}=40000$. With $(1.05)^{6}=1.340096$ the bracket is $0.340096$, so

$$
F_{6}=40000\\times 0.340096=13603.84
$$

Six deposits contribute $12000$ of principal, leaving $13603.84-12000=1603.84$ of interest. Discounting the same pile back six years divides by the growth factor rather than multiplying:

$$
P_{6}=\\frac{13603.84}{1.340096}=10151.40
$$`,

  "math-11-84": `Turn the annual fleet deposit into the leading fraction first: $\\frac{3500}{0.08}=43750$. Ten years of ordinary deposits at $8\\%$ then accumulate as

$$
F_{10}=43750\\bigl[(1.08)^{10}-1\\bigr]
$$

With $(1.08)^{10}=2.158925$ the bracket is $1.158925$ and

$$
F_{10}=43750\\times 1.158925=50702.97
$$

Ten deposits contribute $35000$ of principal, so interest is $50702.97-35000=15702.97$, still well below the principal itself.`,

  "math-11-85": `The retiree is buying an ordinary annuity of withdrawals: $a=2400$ a year for $n=15$ years from an account earning $r=0.045$. The amount needed today is

$$
P_{n}=\\frac{a}{r}\\Bigl[1-\\frac{1}{(1+r)^{n}}\\Bigr]
$$

The leading fraction is $\\frac{2400}{0.045}=53333.33$. With $(1.045)^{15}=1.935282$ the discount term is $0.516720$ and the bracket is $0.483280$, so

$$
P_{15}=53333.33\\times 0.483280=25775.15
$$

Fifteen undiscounted withdrawals total $2400\\times 15=36000$, so the discount gap is $36000-25775.15=10224.85$.`,

  "math-11-86": `Twenty years of scholarships sit inside a perpetuity of the same $a=5000$ at $r=0.06$. The infinite stream is worth

$$
P=\\frac{a}{r}=\\frac{5000}{0.06}=83333.33
$$

and the twenty-year slice keeps only the bracket $1-\\frac{1}{(1.06)^{20}}$. With $(1.06)^{20}=3.207135$ that bracket is $0.688195$, so

$$
P_{20}=83333.33\\times 0.688195=57349.67
$$

The perpetuity therefore exceeds the finite fund by $83333.33-57349.67=25983.66$.`,

  "math-11-87": `Cash paid today needs no formula: Option $1$ costs $18000$ on the spot. Option $2$ is an ordinary annuity of $a=2500$ for $n=9$ years at $r=0.07$, whose present value is

$$
P_{9}=\\frac{2500}{0.07}\\Bigl[1-\\frac{1}{(1.07)^{9}}\\Bigr]
$$

The leading fraction is $\\frac{2500}{0.07}=35714.29$. With $(1.07)^{9}=1.838459$ the bracket is $0.456066$ and

$$
P_{9}=35714.29\\times 0.456066=16288.18
$$

That is cheaper than cash by $18000-16288.18=1711.82$.`,

  "math-11-88": `Timing, not just dollars committed, decides the equipment fund. Strategy A plants $P=12000$ today and leaves it to compound at $r=0.06$ for $n=8$ years:

$$
(1.06)^{8}=1.593848
$$

$$
F_{A}=12000\\times 1.593848=19126.18
$$

Strategy B dribbles in $a=1400$ at each year-end, an ordinary annuity:

$$
F_{B}=\\frac{1400}{0.06}\\bigl[(1.06)^{8}-1\\bigr]=23333.33\\times 0.593848=13856.46
$$

A finishes ahead by $19126.18-13856.46=5269.72$. B commits only $1400\\times 8=11200$ of cash against A's $12000$.`,

  "math-11-89": `Beginning-of-year gym deposits are ordinary deposits advanced one period. Build the end-of-year annuity first, then multiply by $(1+r)$. With $a=3000$, $r=0.05$, $n=6$,

$$
F_{\\mathrm{ord}}=\\frac{3000}{0.05}\\bigl[(1.05)^{6}-1\\bigr]=60000\\times 0.340096=20405.76
$$

and the due value is

$$
F_{\\mathrm{due}}=20405.76\\times 1.05=21426.05
$$

The timing gap is one year's interest on the ordinary total, $20405.76\\times 0.05=1020.29$. The identity $F_{\\mathrm{due}}=F_{\\mathrm{ord}}(1+r)$ holds for any $n$ and any positive $r$, because every due payment simply lands one period earlier.`,

  "math-11-90": `The landlord's first rent cheque is due today, so it is not discounted. The remaining four payments form an ordinary annuity, or equivalently the five-payment ordinary present value can be advanced one period. With $a=24000$, $r=0.06$, $n=5$,

$$
P_{\\mathrm{ord}}=\\frac{24000}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{5}}\\Bigr]=400000\\times 0.252742=101096.80
$$

and the due value is

$$
P_{\\mathrm{due}}=101096.80\\times 1.06=107162.61
$$

The timing gap is $107162.61-101096.80=6065.81$.`,
};

const tacticals = {
  "math-11-81": [
    `**A.** → True

Today's required deposit is already $4081.49$. The claim names about \\$4,081.49, which is that same figure to the cent.`,
    `**B.** → False

A weaker rate does less of the growing, so the same $5000$ target has to be divided by a smaller factor. At $5\\%$:

$$
(1.05)^{3}=1.157625
$$

$$
x=\\frac{5000}{1.157625}=4319.19
$$

That is $\\$237.70$ more than $4081.49$, not less. Cutting the rate raises the deposit.`,
    `**C.** → False

Interest is the target minus today's deposit. From the overview those two figures are $5000$ and $4081.49$, and their gap is $918.51$. The claim names \\$928.51, which overshoots the true interest by exactly $\\$10.00$.`,
    `**D.** → True

With $r$ and $n$ held fixed, $x=\\frac{A}{(1+r)^{n}}$ is proportional to $A$. Doubling the oven cost to $10000$ therefore doubles the $4081.49$ deposit:

$$
2\\times 4081.49=8162.98
$$

Direct substitution $\\frac{10000}{1.225043}$ returns the same $8162.98$, matching the claimed figure.`,
    `**E.** → False

Time sits in the exponent, so doubling the horizon squares the growth factor rather than doubling it.

$$
(1.07)^{6}=1.500730
$$

$$
x_{6}=\\frac{5000}{1.500730}=3331.71
$$

Half of the three-year deposit would be $2040.75$. The true six-year figure sits about $\\$1{,}291$ above that half, because $1.225043$ is far short of the $2$ that exact halving would need.`,
  ],
  "math-11-82": [
    `**A.** → True

Five years of $6\\%$ growth on the $6500$ deposit already produced $F(5)=8698.47$. The claim names about \\$8,698.47, matching that accumulation to the cent.`,
    `**B.** → True

Interest in the first five years is the accumulated value minus the original $6500$. Using the overview balance $8698.47$,

$$
8698.47-6500=2198.47
$$

That is exactly the interest figure named in the claim.`,
    `**C.** → False

Compounding multiplies; it does not add a second identical copy of the five-year gain. Double the five-year value would be

$$
2\\times 8698.47=17396.94
$$

The true ten-year balance is $11640.51$, which falls $\\$5{,}756$ short of that doubling, because $(1.06)^{10}=1.790848$ is well below $2\\times 1.338226$.`,
    `**D.** → False

The two interest blocks sit in the overview: $2198.47$ in years $1$ through $5$, and $2942.04$ in years $6$ through $10$. The second block is larger by $743.57$, not smaller, because years $6$ to $10$ earn interest on a balance that already includes the first block's interest. The claim reverses that order.`,
    `**E.** → False

The rate enters inside a power, so cutting it in half does not cut the balance in half. At $3\\%$:

$$
(1.03)^{5}=1.159274
$$

$$
F=6500\\times 1.159274=7535.28
$$

Half of $8698.47$ would be $4349.24$. The lower-rate balance still contains the full $6500$ principal plus $1035.28$ of interest, so it stays far above half.`,
  ],
  "math-11-83": [
    `**A.** → True

Six year-end deposits of $2000$ at $5\\%$ accumulated to $F_{6}=13603.84$. The claim names about \\$13,603.84, matching that fund to the cent.`,
    `**B.** → False

Interest is the accumulated value minus the $12000$ actually deposited. From the overview that gap is $1603.84$. The claim names \\$1,703.84, which is exactly $\\$100$ too high.`,
    `**C.** → False

Present value of a future pile is the pile divided by $(1.05)^{6}=1.340096$, which the overview already evaluated as $10151.40$. The claimed \\$18,230.45 is what you get by multiplying $13603.84$ by $1.340096$ instead of dividing, which walks the money the wrong way in time.`,
    `**D.** → False

The deposit $a$ is a plain multiplier in the annuity formula, so a $50\\%$ raise really does lift $F_{6}$ by $50\\%$:

$$
1.5\\times 13603.84=20405.76
$$

The claim's dollar figure of \\$21,405.76 overstates that correct raised value by $\\$1{,}000$, so the numerical claim fails even though the proportionality is sound.`,
    `**E.** → False

Twelve years of the same deposits uses $(1.05)^{12}=1.795856$ and

$$
F_{12}=\\frac{2000}{0.05}\\bigl[1.795856-1\\bigr]=40000\\times 0.795856=31834.24
$$

Double the six-year fund would be $2\\times 13603.84=27207.68$. Twelve years produce $\\$4{,}626$ more than that doubling, because the first six deposits keep compounding through the second six years. The future value is more than double, not less.`,
  ],
  "math-11-84": [
    `**A.** → True

Ten year-end deposits of $3500$ at $8\\%$ land at $F_{10}=50702.97$. The claim names about \\$50,702.97, matching that accumulation.`,
    `**B.** → True

Interest is the fund minus the $35000$ of principal paid in. The overview gap is $15702.97$, which is exactly the interest figure named in the claim.`,
    `**C.** → False

Twenty years rebuilds the same formula with a doubled exponent. With $(1.08)^{20}=4.660957$,

$$
F_{20}=43750\\times(4.660957-1)=160166.87
$$

Double the ten-year fund would be $2\\times 50702.97=101405.94$. The longer horizon overshoots that doubling by about $\\$58{,}761$, because the first decade of deposits keeps earning through the second decade. The future value is more than double, not less.`,
    `**D.** → False

The interest portion $15702.97$ sits next to $35000$ of principal. Interest is less than half the principal, short by $19297.03$. The claim has interest exceeding principal, which reverses the comparison.`,
    `**E.** → True

Raising the rate to $10\\%$ rebuilds both pieces of the annuity: $\\frac{3500}{0.10}=35000$ and $(1.10)^{10}=2.593742$, so

$$
F_{10}'=35000\\times(2.593742-1)=55780.97
$$

Compared with the claimed threshold,

$$
55780.97>55000
$$

The higher rate clears $\\$55{,}000$ by about $\\$781$.`,
  ],
  "math-11-85": [
    `**A.** → True

The amount that must sit in the account today is $P_{15}=25775.15$. The claim names about \\$25,775.15, matching that required deposit.`,
    `**B.** → True

The raw sum of the withdrawals is $36000$, while today's deposit is $25775.15$. The nominal total exceeds the deposit by about $\\$10{,}225$, because each future withdrawal is discounted and interest earned in the meantime covers the rest. Future dollars really are worth less than present dollars here.`,
    `**C.** → False

Later withdrawals add less and less, so doubling the years cannot double the present value. Stretching to $30$ years uses $(1.045)^{30}=3.745318$ and

$$
P_{30}=53333.33\\Bigl[1-\\frac{1}{3.745318}\\Bigr]=39091.65
$$

Double the fifteen-year figure would be $51550.30$. The longer plan falls more than $\\$12{,}000$ short of that doubling.`,
    `**D.** → False

The discount gap is the nominal $36000$ minus today's $25775.15$, which equals $10224.85$. The claim names \\$11,224.85, roughly $\\$1{,}000$ above the true gap.`,
    `**E.** → False

A higher rate does more of the work of funding the withdrawals, so less money is needed up front. At $6\\%$ the leading fraction shrinks to $\\frac{2400}{0.06}=40000$ and

$$
P_{15}'=40000\\Bigl[1-\\frac{1}{(1.06)^{15}}\\Bigr]=23309.40
$$

That is about $\\$2{,}466$ below $25775.15$. Raising the rate lowers the present-value requirement rather than raising it.`,
  ],
  "math-11-86": [
    `**A.** → True

What must be set aside today to pay $5000$ a year for twenty years at $6\\%$ is $P_{20}=57349.67$. The claim names about \\$57,349.67, matching that present value.`,
    `**B.** → True

The perpetuity value is the leading fraction $83333.33$, and it exceeds the twenty-year annuity by $25983.66$. Both pieces of the claim match those overview figures.`,
    `**C.** → False

The twenty-year share of the perpetuity is the bracket itself, $0.688195$, or $68.82\\%$. The claim names $72.82\\%$, four percentage points too high. Dividing $57349.67$ by $83333.33$ returns the same $68.82\\%$:

$$
\\frac{57349.67}{83333.33}=0.6882
$$`,
    `**D.** → False

Forty years still reach only $(1.06)^{40}=10.285718$ and a bracket of $0.902778$, so the fund reaches $90.28\\%$ of the perpetuity:

$$
P_{40}=83333.33\\times 0.902778=75231.48
$$

That is still almost five percentage points short of the claimed $95\\%$ threshold, because distant payments are discounted heavily.`,
    `**E.** → True

In $P_{n}=\\frac{a}{r}\\bigl[1-\\frac{1}{(1+r)^{n}}\\bigr]$ the only $n$ is inside the discount term. As $n$ grows, $(1.06)^{n}\\to\\infty$ and the reciprocal collapses to $0$, so $P_{n}$ converges to $\\frac{a}{r}=83333.33$. That limit is precisely the perpetuity formula named in the claim.`,
  ],
  "math-11-87": [
    `**A.** → True

The discounted cost of the nine instalments is $P_{9}=16288.18$. The claim names about \\$16,288.18, matching that present value.`,
    `**B.** → False

Option $2$ is cheaper than the $18000$ cash price, but the saving is $1711.82$. The claim names \\$1,811.82, which overstates the advantage by $\\$100$. Ranking is right; the dollar figure is not.`,
    `**C.** → False

A lower discount rate makes future payments count for more today. At $4\\%$ the leading fraction enlarges to $\\frac{2500}{0.04}=62500$ and

$$
P_{9}'=62500\\Bigl[1-\\frac{1}{(1.04)^{9}}\\Bigr]=18588.31
$$

That sits above both the $7\\%$ value and the $18000$ cash price. Option $1$ becomes the better deal at $4\\%$, the opposite of the claim.`,
    `**D.** → False

Nine undiscounted payments total $2500\\times 9=22500$. Subtracting the $18000$ lump sum leaves an excess of $4500$, not the claimed $4600$. The claim overstates the nominal gap by $\\$100$.`,
    `**E.** → False

Investing the cash price for nine years at $7\\%$ grows it by the overview factor $1.838459$:

$$
18000\\times 1.838459=33092.26
$$

That sits $\\$908$ short of $34000$, so the lump sum does not clear the claimed threshold.`,
  ],
  "math-11-88": [
    `**A.** → True

Strategy A's eight-year accumulation is $F_{A}=19126.18$. The claim names about \\$19,126.18, matching that compounded lump sum.`,
    `**B.** → False

Strategy B's ordinary-annuity value is $F_{B}=13856.46$. The claim names \\$14,856.46, which is exactly $\\$1{,}000$ too high.`,
    `**C.** → False

A does finish ahead of B, but the lead is $5269.72$. The claim names \\$5,769.72, an overstatement of $\\$500$.`,
    `**D.** → False

Eight deposits of $1400$ commit $11200$ of cash. Strategy A commits $12000$ up front. B's total cash outlay is $\\$800$ smaller than A's, not larger.`,
    `**E.** → True

Raising B's annual deposit to $1500$ matches A's $12000$ of total cash, yet B still accumulates only

$$
F_{B}'=\\frac{1500}{0.06}\\bigl[(1.06)^{8}-1\\bigr]=25000\\times 0.593848=14846.20
$$

That remains below A's $19126.18$ by about $\\$4{,}280$, because B's deposits miss years of growth that the lump sum enjoys from day one.`,
  ],
  "math-11-89": [
    `**A.** → True

Start-of-year gym deposits for six years accumulated to $21426.05$. The claim names about \\$21,426.05, matching that annuity-due future value.`,
    `**B.** → True

End-of-year deposits stop at the ordinary value $20405.76$, which is $\\$1{,}020.29$ below the due result $21426.05$. Multiplying a positive ordinary total by $1.05$ can only raise it, and under end-of-year timing the final deposit earns nothing before the fund is measured.`,
    `**C.** → False

The timing gap is $21426.05-20405.76=1020.29$, which is also $20405.76\\times 0.05$. The claim names \\$1,120.29, exactly $\\$100$ too high.`,
    `**D.** → False

Twelve years of the same deposits give $F_{\\mathrm{ord}}=\\frac{3000}{0.05}\\bigl[(1.05)^{12}-1\\bigr]=47751.36$ and

$$
F_{\\mathrm{due}}=47751.36\\times 1.05=50138.93
$$

Double the six-year figure would be $42852.10$. The longer run overshoots that doubling by about $\\$7{,}287$, because the first six deposits keep compounding through the second six years.`,
    `**E.** → True

Every due payment occurs one period earlier than its ordinary counterpart, so the whole accumulated sum picks up one extra factor of $(1+r)$. That is $F_{\\mathrm{due}}=F_{\\mathrm{ord}}(1+r)$, independent of the deposit $a$ and the count $n$. Both the six-year and twelve-year gym figures carry the same multiplier $1.05$.`,
  ],
  "math-11-90": [
    `**A.** → True

The landlord's value of the five-year lease today is $107162.61$. The claim names about \\$107,162.61, matching that annuity-due present value.`,
    `**B.** → True

End-of-year rent is the ordinary present value $101096.80$, which is $\\$6{,}065.81$ below the due result. Every payment arrives a year later and is discounted once more, so the end-of-year lease is worth less to the landlord.`,
    `**C.** → False

The timing gap is $107162.61-101096.80=6065.81$, equal to one year's interest on the ordinary present value. The claim names \\$7,065.81, exactly $\\$1{,}000$ too high.`,
    `**D.** → False

A ten-year due lease uses $(1.06)^{10}=1.790848$ and

$$
P_{\\mathrm{due}}(10)=\\frac{24000}{0.06}\\Bigl[1-\\frac{1}{1.790848}\\Bigr]\\times 1.06=187240.52
$$

Double the five-year figure would be $214325.22$. Years $6$ through $10$ are discounted more heavily than the first five, so the ten-year value falls about $\\$27{,}085$ short of doubling.`,
    `**E.** → True

An annuity due splits as the payment due today plus an ordinary annuity of the remaining $n-1$ payments: $P_{\\mathrm{due}}=a+P_{4}$. Adding $24000$ to the four-year ordinary value

$$
P_{4}=\\frac{24000}{0.06}\\Bigl[1-\\frac{1}{(1.06)^{4}}\\Bigr]=83162.40
$$

recovers $107162.40$, which agrees with the standard $P_{\\mathrm{ord}}(5)\\times 1.06$ route to within twenty-one cents of factor rounding.`,
  ],
};

const forbidden = [
  "Part 1:",
  "Part 2:",
  "Part 3:",
  "Building the model",
  "**Answer.**",
  "so the statement is True.",
  "so the statement is False.",
  "The recovered law is",
  "—",
  "–",
  "${",
];

const frozenKeys = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];

function headerFor(i, key) {
  const letter = "ABCDE"[i];
  return `**${letter}.** → ${key ? "True" : "False"}`;
}

const data = JSON.parse(fs.readFileSync(file, "utf8"));
const before = data.map((t) => {
  const snap = {};
  for (const k of frozenKeys) {
    if (k in t) snap[k] = JSON.stringify(t[k]);
  }
  return snap;
});

const issues = [];
let count = 0;

for (let ti = 0; ti < data.length; ti++) {
  const task = data[ti];
  if (!overviews[task.id]) throw new Error(`missing overview ${task.id}`);
  if (!tacticals[task.id]) throw new Error(`missing tacticals ${task.id}`);
  task.solution_overview = overviews[task.id];
  task.tactical_explanations = tacticals[task.id];
  count++;

  for (const needle of forbidden) {
    if (task.solution_overview.includes(needle)) {
      issues.push(`${task.id} overview contains ${JSON.stringify(needle)}`);
    }
  }
  for (let i = 0; i < 5; i++) {
    const t = task.tactical_explanations[i];
    const want = headerFor(i, task.answer_key[i]);
    if (!t.startsWith(want)) {
      issues.push(`${task.id} ${"ABCDE"[i]} header want ${want}`);
    }
    for (const needle of forbidden) {
      if (t.includes(needle)) {
        issues.push(`${task.id} ${"ABCDE"[i]} contains ${JSON.stringify(needle)}`);
      }
    }
  }
  for (const k of frozenKeys) {
    if (k in task && JSON.stringify(task[k]) !== before[ti][k]) {
      issues.push(`${task.id} froze ${k} changed`);
    }
  }
}

if (issues.length) {
  console.error(issues.join("\n"));
  process.exit(1);
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
console.log("wrote", count, "tasks");
for (const t of data) console.log(t.id, t.solution_overview.split("\n")[0].slice(0, 88));
