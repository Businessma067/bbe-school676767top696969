import fs from "fs";

const file = new URL("./91_100.json", import.meta.url);

const overviews = {
  "math-11-91": `Value the endowed stream one year before the first cheque, then walk that lump back to today. A level perpetuity of $a=10000$ at $r=0.06$ is worth $\\frac{a}{r}$ at the date one period before the first payment. Payments start at the end of year $5$, so that valuation date is the end of year $4$:

$$
V_{4}=\\frac{10000}{0.06}=166666.67
$$

Four years of discounting at $6\\%$ uses $(1.06)^{4}=1.262477$:

$$
PV_{0}=\\frac{166666.67}{1.262477}=132015.61
$$

An immediate perpetuity (first payment at the end of year $1$) needs no further discounting and is already $166666.67$.`,

  "math-11-92": `A fixed dividend forever is a perpetuity, so fair value is next year's (here, every year's) dividend over the required return:

$$
P=\\frac{a}{r}=\\frac{4.25}{0.07}=60.71
$$

The share trades at $65.00$, which sits $\\$4.29$ above that fair value, so the stock is overvalued rather than undervalued. Value is strictly proportional to the dividend and inversely proportional to the required return.`,

  "math-11-93": `Add the cash renovation to the maintenance perpetuity. Maintenance of $a=15000$ a year beginning one year from now, at $r=0.045$, is worth

$$
P=\\frac{15000}{0.045}=333333.33
$$

The $50000$ renovation is paid today, so the combined requirement is

$$
50000+333333.33=383333.33
$$`,

  "math-11-94": `Growth shrinks the denominator from the full required return down to the spread $r-g$. Next year's rent is $a_{1}=24000$, growth is $g=0.025$, and the investor requires $r=0.08$, so

$$
P=\\frac{24000}{0.08-0.025}=\\frac{24000}{0.055}=436363.64
$$

The formula itself requires $r>g$: at $r=g$ the denominator vanishes, and above it the model returns a meaningless negative price.`,

  "math-11-95": `The just-paid dividend is not the numerator; next year's is. Grow $D_{0}=3.00$ forward one year at $g=0.03$:

$$
D_{1}=3.00\\times 1.03=3.09
$$

The Gordon formula then divides by the spread $r-g=0.09-0.03=0.06$:

$$
P=\\frac{3.09}{0.06}=51.50
$$`,

  "math-11-96": `Same asking price, two different perpetuity formulas. Deal $1$ is level at $a=18000$ with required return $r=0.10$:

$$
P_{1}=\\frac{18000}{0.10}=180000
$$

a $10000$ cushion over the $170000$ ask. Deal $2$ grows: $a_{1}=14000$, $g=0.04$, so the spread is $0.06$ and

$$
P_{2}=\\frac{14000}{0.06}=233333.33
$$

a $63333.33$ cushion, the larger of the two.`,

  "math-11-97": `Continuous compounding replaces the power $(1+r)^{-t}$ with the exponential $e^{-rt}$. The company needs $S(t)=250000$ in $t=12$ years at a nominal $r=0.055$, so the exponent is $-0.055\\times 12=-0.66$ and

$$
S_{0}=250000\\,e^{-0.66}=250000\\times 0.516855=129213.75
$$

Ordinary annual compounding at the same nominal rate is less efficient, so more must be deposited today: $(1.055)^{12}=1.901209$ and

$$
S_{0}^{\\mathrm{ann}}=\\frac{250000}{1.901209}=131495.10
$$`,

  "math-11-98": `Same $75000$ contributed, wildly different timing. The lump sum works from day one under continuous compounding at $r=0.0625$ for $t=9$ years:

$$
rt=0.5625, \\qquad S_{\\mathrm{cont}}=75000\\,e^{0.5625}=131629.13
$$

Spreading the same $75000$ as nine year-end deposits of $a=8333.33$ at a discrete $6.25\\%$ produces an ordinary annuity worth

$$
F_{9}=\\frac{8333.33}{0.0625}\\bigl[(1.0625)^{9}-1\\bigr]=96757.60
$$

The lump sum therefore outperforms the annuity by $131629.13-96757.60=34871.53$.`,

  "math-11-99": `Treat the lease, the continuous pot, and the perpetuity as three separate books. Beginning-of-year lease payments of $a=4200$ for $n=5$ years at $8\\%$ are an annuity due. The ordinary present value is

$$
P_{\\mathrm{ord}}=\\frac{4200}{0.08}\\Bigl[1-\\frac{1}{(1.08)^{5}}\\Bigr]=16769.39
$$

and advancing one period gives

$$
P_{\\mathrm{due}}=16769.39\\times 1.08=18110.94
$$

Separately, $20000$ left for $7$ years at a continuous $6\\%$ uses $e^{0.42}=1.521962$ and grows to $20000\\times 1.521962=30439.24$. The maintenance perpetuity of $3000$ a year at $8\\%$ is $\\frac{3000}{0.08}=37500$.`,

  "math-11-100": `Four tools, four formulas, then add only the present-day amounts. Component $1$ plants $150000$ today at a continuous $5\\%$ for $10$ years:

$$
S=150000\\,e^{0.50}=247308.20
$$

Component $2$ discounts an $80000$ renovation six years at a discrete $6\\%$: $(1.06)^{6}=1.418519$ and

$$
x=\\frac{80000}{1.418519}=56396.85
$$

Component $3$ is a $12$-year ordinary annuity of $10000$ at $7\\%$, worth

$$
P_{12}=\\frac{10000}{0.07}\\Bigl[1-\\frac{1}{(1.07)^{12}}\\Bigr]=79429.40
$$

Component $4$ is a growing perpetuity $\\frac{5000}{0.07-0.02}=100000$ exactly. The $247308.20$ is a future value and does not enter a present-day sum.`,
};

const tacticals = {
  "math-11-91": [
    `**A.** → True

One period before the first $10000$ payment the stream is already worth $V_{4}=166666.67$. The claim names about \\$166,666.67, matching that year-$4$ perpetuity value.`,
    `**B.** → True

Discounting that year-$4$ value four years at $6\\%$ produced $PV_{0}=132015.61$. The claim names about \\$132,015.61 as today's required donation, matching that present value.`,
    `**C.** → False

Starting payments at the end of year $1$ leaves the perpetuity already dated today, worth $166666.67$. That is $\\$34{,}651$ above the deferred $132015.61$. Immediate payments are worth more than deferred ones, not less.`,
    `**D.** → False

Pushing the first payment to year $9$ values the stream at year $8$ and discounts eight years. With $(1.06)^{8}=1.593848$,

$$
PV_{0}'=\\frac{166666.67}{1.593848}=104568.80
$$

Half of $132015.61$ is $66007.81$. Four extra years of waiting do shrink the donation, but $104568.80$ still sits $\\$38{,}561$ above that half.`,
    `**E.** → False

The ratio of the deferred present value to the year-$4$ perpetuity is exactly the four-year discount factor:

$$
\\frac{1}{(1.06)^{4}}=\\frac{1}{1.262477}=0.7921
$$

The claim states $0.8321$, four hundredths too high. Dividing $132015.61$ by $166666.67$ returns the same $0.7921$.`,
  ],
  "math-11-92": [
    `**A.** → True

The perpetuity value $\\frac{4.25}{0.07}$ is $60.71$ per share. The claim names about \\$60.71, matching that fair value.`,
    `**B.** → False

Fair value is $60.71$ while the market prints $65.00$. The price stands $\\$4.29$ above fair value, which makes the share overvalued, not undervalued.`,
    `**C.** → False

Cutting the required return to $4\\%$ changes only the denominator:

$$
\\frac{4.25}{0.04}=106.25
$$

The claim names \\$116.25, which overshoots the correct figure by $\\$10$.`,
    `**D.** → False

The move from $60.714286$ to $106.25$ is an increase of $45.535714$, and

$$
\\frac{45.535714}{60.714286}=0.750000
$$

The rise is exactly $75.00\\%$, which does not clear a bar of "more than $75\\%$".`,
    `**E.** → False

After a $20\\%$ dividend cut the new dividend is $4.25\\times 0.80=3.40$ and fair value is

$$
\\frac{3.40}{0.07}=48.57
$$

The claim names exactly \\$50.57, two dollars above the proportional $48.57$.`,
  ],
  "math-11-93": [
    `**A.** → True

The maintenance perpetuity on its own is $333333.33$. The claim names about \\$333,333.33, matching that present value of the $15000$ annual stream at $4.5\\%$.`,
    `**B.** → True

Adding the immediate $50000$ renovation to that perpetuity produces $383333.33$. The claim names about \\$383,333.33 as the total amount to set aside today, matching the combined requirement.`,
    `**C.** → True

Raising the rate to $6\\%$ leaves the renovation untouched and shrinks only the perpetuity to $\\frac{15000}{0.06}=250000$, for a new total of

$$
50000+250000=300000
$$

The claim names about \\$300,000.00, matching that higher-rate combined figure.`,
    `**D.** → False

The drop from $383333.33$ to $300000$ is $83333.33$, which is

$$
\\frac{83333.33}{383333.33}\\approx 0.2174
$$

or about $21.74\\%$. That is more than three percentage points short of a $25\\%$ reduction.`,
    `**E.** → False

Perpetuity-only funding at $6\\%$ is $250000$. Half of the original combined $383333.33$ is $191666.67$. The $6\\%$ maintenance fund still sits $\\$58{,}333$ above that half, so it is not less than half.`,
  ],
  "math-11-94": [
    `**A.** → True

The escalating rent stream is worth $436363.64$ today. The claim names about \\$436,363.64, matching that growing-perpetuity fair value.`,
    `**B.** → False

No growth means a level perpetuity worth $\\frac{24000}{0.08}=300000$. Growth of $2.5\\%$ is worth $436363.64$, so the level value sits $\\$136{,}364$ below the growing value, not above it. Growth lifts every future cash flow.`,
    `**C.** → False

At $4\\%$ growth the spread narrows to $0.04$ and the value is

$$
\\frac{24000}{0.04}=600000
$$

Double the original $436363.64$ would be $872727.28$. The spread only shrinks from $0.055$ to $0.04$, a factor of $1.375$, so the value rises to $600000$ rather than doubling.`,
    `**D.** → False

A $6\\%$ required return with $2.5\\%$ growth uses spread $0.035$ and gives

$$
\\frac{24000}{0.035}=685714.29
$$

The claim names about \\$715,714.29, which sits exactly $\\$30{,}000$ above the correct figure.`,
    `**E.** → True

The growing perpetuity is a geometric series that converges only for $r>g$. If growth equals the $8\\%$ required return the denominator is $0$ and there is no finite value. If growth exceeds $8\\%$ the formula even returns a negative price for a stream of positive rents, so the model cannot be used at or above the required return.`,
  ],
  "math-11-95": [
    `**A.** → True

Next year's dividend is last year's grown one step: $D_{1}=3.09$. The claim names \\$3.09, matching that forward dividend.`,
    `**B.** → False

Fair value uses $D_{1}=3.09$ over the $0.06$ spread, which is $51.50$ per share. The claim names about \\$54.50, three dollars above the correct Gordon value.`,
    `**C.** → False

Plugging the just-paid $3.00$ into the same $0.06$ spread gives $\\frac{3.00}{0.06}=50.00$. The understatement relative to $51.50$ is $1.50$, not the claimed $2.50$.`,
    `**D.** → False

Faster $5\\%$ growth raises next year's dividend to $3.00\\times 1.05=3.15$ and the spread to $0.04$, so

$$
P'=\\frac{3.15}{0.04}=78.75
$$

Double the original $51.50$ would be $103.00$. Faster growth lifts the price sharply, but $78.75$ still falls $\\$24.25$ short of doubling.`,
    `**E.** → False

Setting $g=r=0.09$ makes the denominator $0$. Watching growth creep up to $8.99\\%$ already sends the price into the tens of thousands. The value blows up as the gap closes; it does not approach $0$.`,
  ],
  "math-11-96": [
    `**A.** → True

Deal $1$'s fair value is $180000$ against a $170000$ ask, a $10000$ surplus. A purchase below fair value is a good buy at that price.`,
    `**B.** → True

Deal $2$'s fair value is $233333.33$, so the cushion over $170000$ is $63333.33$. That exceeds the claimed $\\$60{,}000$ threshold by about $\\$3{,}333$.`,
    `**C.** → False

Deal $1$'s margin is $10000$; Deal $2$'s is $63333.33$. Deal $2$ carries the larger margin of safety by about $\\$53{,}333$. The claim awards that title to Deal $1$.`,
    `**D.** → True

Cutting Deal $2$'s growth to $1\\%$ widens the spread to $0.09$ and drops fair value to

$$
\\frac{14000}{0.09}=155555.56
$$

That sits $\\$14{,}444$ below the $170000$ asking price, so fair value does fall below the ask.`,
    `**E.** → False

Head to head, $180000<233333.33$. Deal $2$ is worth about $\\$53{,}333$ more than Deal $1$, even though its first payment is the smaller of the two, because perpetual growth lifts every later royalty.`,
  ],
  "math-11-97": [
    `**A.** → True

The deposit needed today to reach $250000$ in twelve years is $129213.75$. The claim names about \\$129,213.75, matching that continuous present value.`,
    `**B.** → False

Annual compounding needs $131495.10$ today, which is $\\$2{,}281$ more than the continuous $129213.75$. Continuous compounding works the money harder, so the continuous present value is the lower figure, not the higher one.`,
    `**C.** → False

The gap between the two present values is $131495.10-129213.75=2281.35$. The claim names about \\$4,280.35, nearly double the true gap.`,
    `**D.** → False

Shortening the horizon to $6$ years uses $e^{-0.33}=0.718924$ and requires

$$
S_{0}'=250000\\times 0.718924=179731.00
$$

Half of $129213.75$ is $64606.88$. With only six years to grow, the deposit needs a much larger head start, so it lands far above half rather than below it.`,
    `**E.** → True

The one-year factor is $e^{-0.055}\\approx 0.9465$. One minus that factor is $0.0535$, or $5.35\\%$. A dollar due a year from now is worth about $94.65$ cents today, and roughly $5.35\\%$ is lost to one year of continuous discounting.`,
  ],
  "math-11-98": [
    `**A.** → True

Nine years of continuous growth on the $75000$ lump sum produced $S_{\\mathrm{cont}}=131629.13$. The claim names about \\$131,629.13, matching that accumulation.`,
    `**B.** → True

The annuity accumulates only $96757.60$, which is $\\$34{,}872$ below the continuous lump sum, even though both plans put in $75000$ in total. The annuity future value is the lower of the two.`,
    `**C.** → True

The gap $34871.53$ exceeds $30000$ by about $\\$4{,}872$. The lump-sum strategy outperforms the annuity by more than the claimed threshold.`,
    `**D.** → True

The lump sum earns interest on the full $75000$ for all nine years. Each annuity deposit grows only for the years remaining after it is paid: the first has eight years left, the last has none. That timing gap is why the annuity finishes about $\\$35{,}000$ behind.`,
    `**E.** → True

A discrete annual lump sum of the same $75000$ reaches

$$
75000(1.0625)^{9}=129426.15
$$

That already exceeds the annuity's $96757.60$ by about $\\$32{,}669$. Compounding once a year is less generous than compounding continuously, but it is still far ahead of dribbling the money in at year-ends.`,
  ],
  "math-11-99": [
    `**A.** → True

The five-year start-of-year lease at $8\\%$ is worth $P_{\\mathrm{due}}=18110.94$ today. The claim names about \\$18,110.94, matching that annuity-due present value.`,
    `**B.** → False

The matching future value grows the ordinary accumulation by one extra year. The ordinary future value is $\\frac{4200}{0.08}\\bigl[(1.08)^{5}-1\\bigr]=24639.72$, and

$$
F_{\\mathrm{due}}=24639.72\\times 1.08=26610.90
$$

The claim names about \\$27,610.90, which sits exactly $\\$1{,}000$ above the correct accumulation.`,
    `**C.** → False

The continuous investment grows to $30439.24$. The claim names about \\$31,439.24, about $\\$1{,}000$ too high.`,
    `**D.** → False

The perpetuity requires $37500$. Double the lease present value is $2\\times 18110.94=36221.88$. The perpetuity needs $\\$1{,}278$ more than that doubling, so it is not less than double.`,
    `**E.** → False

After seven years the continuous pot holds $30439.24$, while the perpetuity is worth $37500$ today. The continuous result is the smaller of the two, short by about $\\$7{,}061$.`,
  ],
  "math-11-100": [
    `**A.** → True

Component $1$'s continuous accumulation is $247308.20$. The claim names about \\$247,308.20, matching $150000\\,e^{0.50}$.`,
    `**B.** → False

The deposit needed today to reach $80000$ in six years at $6\\%$ is $56396.85$. The claim names about \\$57,396.85, which is $\\$1{,}000$ above the required deposit.`,
    `**C.** → True

The twelve-year ordinary annuity of $10000$ at $7\\%$ is worth $79429.40$. The claim names about \\$79,429.40, matching that present value.`,
    `**D.** → True

The growing perpetuity is $5000$ over a $5\\%$ spread, which is exactly $100000$. The claim names \\$100,000.00, and $\\frac{5000}{0.05}$ is a clean figure.`,
    `**E.** → False

Adding the four present-day pieces $150000+56396.85+79429.40+100000$ gives

$$
150000+56396.85+79429.40+100000=385826.25
$$

That is about $\\$114{,}174$ below $500000$, not above it. Component $1$ enters at its $150000$ outlay today, not at its future accumulation.`,
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
