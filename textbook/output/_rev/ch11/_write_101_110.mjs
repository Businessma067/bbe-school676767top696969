import fs from "fs";

const file = new URL("./101_110.json", import.meta.url);

const overviews = {
  "math-11-101": `The bakery loan is an ordinary annuity whose present value equals the $60000$ borrowed. Payments are annual and so is the compounding, so the periodic rate is simply $r=0.12$. The instalment that amortises $K=60000$ over $n=6$ years is

$$
a=\\frac{rK}{1-(1+r)^{-n}}=\\frac{7200}{1-(1.12)^{-6}}=\\frac{7200}{0.493369}=14593.54
$$

Year $1$ opens at the full $60000$, so interest is $0.12\\times 60000=7200$ and principal repaid is $14593.54-7200=7393.54$, already more than half the payment. The balance then falls to $52606.46$.`,

  "math-11-102": `Convert the $9\\%$ nominal quote into a monthly rate before anything else. Twelve compounding dates a year give

$$
r=\\frac{0.09}{12}=0.0075=0.75\\%, \\qquad n=4\\times 12=48
$$

The monthly instalment on $K=24000$ is

$$
a=\\frac{0.0075\\times 24000}{1-(1.0075)^{-48}}=\\frac{180}{0.301386}=597.24
$$

Forty-eight such payments total $597.24\\times 48=28667.57$, so lifetime interest is $28667.57-24000=4667.57$.`,

  "math-11-103": `Walk the renovation loan one year at a time. Five equal year-end instalments at $10\\%$ on $K=45000$ start from

$$
a=\\frac{0.10\\times 45000}{1-(1.10)^{-5}}=\\frac{4500}{0.379079}=11870.89
$$

Year $1$ interest is $0.10\\times 45000=4500$, so principal is $7370.89$ and the balance becomes $37629.11$. Year $2$ leaves $29521.14$. Year $3$ interest $2952.11$ and principal $8918.77$ cut the balance to $20602.37$. The five principal slices sum to the original $45000$, because they are exactly the amounts that write the balance down to zero.`,

  "math-11-104": `The first franchise payment is due immediately, so one instalment is undiscounted and the other nine form an ordinary annuity. The combined present-value factor at $r=0.11$ is

$$
1+\\frac{1}{0.11}\\bigl[1-(1.11)^{-9}\\bigr]=1+5.537048=6.537048
$$

Dividing the $150000$ price by that factor gives the due payment

$$
a=\\frac{150000}{6.537048}=22946.14
$$`,

  "math-11-105": `A fixed $10000$ a year will not divide the $35000$ loan at $13\\%$ into a whole number of equal instalments, so first find the smallest $n$ that can finish the job:

$$
n\\ge\\frac{\\ln 10000-\\ln(10000-0.13\\times 35000)}{\\ln 1.13}\\approx 4.9663
$$

Thus $n=5$: four full payments totalling $40000$, then a smaller fifth. After four years the debt has grown to $35000(1.13)^{4}=57066.58$ while the four payments are worth $48497.97$ at that date, leaving $8568.61$. One more year of $13\\%$ turns that residual into a final payment of $9682.53$. Total paid is $40000+9682.53=49682.53$, so interest is $14682.53$.`,

  "math-11-106": `Cash is a flat $500000$ today. The instalment plan is an annuity due of seven $100000$ payments, so value the remaining six as an ordinary annuity and add the payment made now. At $10\\%$,

$$
PV_{B}=100000+\\frac{100000}{0.10}\\bigl[1-(1.10)^{-6}\\bigr]=535526.07
$$

which is $\\$35{,}526$ dearer than cash.`,

  "math-11-107": `Each quarterly $250$ earns simple interest only for the fraction of the year still left before the annual credit. The four deposits sit for $\\frac{3}{4}$, $\\frac{1}{2}$, $\\frac{1}{4}$, and $0$ of a year, which collapses to a year-end equivalent

$$
a=250(4+1.5\\times 0.08)=250\\times 4.12=1030
$$

Once that equivalent is in hand, the account is an ordinary annuity at $8\\%$:

$$
F_{4}=\\frac{1030}{0.08}\\bigl[(1.08)^{4}-1\\bigr]=4641.30
$$`,

  "math-11-108": `A $200000$ mortgage at a nominal $6\\%$, compounded monthly over $20$ years, has monthly rate $r=\\frac{0.06}{12}=0.005$ and $n=240$ payments. The level instalment is

$$
a=\\frac{0.005\\times 200000}{1-(1.005)^{-240}}=\\frac{1000}{0.697904}=1432.86
$$

After $m=60$ payments the outstanding balance is the present value of the $180$ that remain:

$$
B_{60}=\\frac{1432.86}{0.005}\\bigl[1-(1.005)^{-180}\\bigr]=169799.20
$$

Principal repaid is only $200000-169799.20=30200.80$, about $15.10\\%$ of the original loan.`,

  "math-11-109": `The manufacturer pays a fixed $25000$ a year on $120000$ at $14\\%$ until a smaller closer can finish the job. The payment-count threshold is

$$
n\\ge\\frac{\\ln 25000-\\ln(25000-0.14\\times 120000)}{\\ln 1.14}\\approx 8.508
$$

so $n=9$: eight full payments, then a residual. After eight years the loan has grown to $120000(1.14)^{8}=342310.37$ while the eight payments are worth $330819.00$, leaving $11491.37$. One more year of $14\\%$ turns that into a final payment of $13100.16$. Total paid is $8\\times 25000+13100.16=213100.16$, so interest is $93100.16$.`,

  "math-11-110": `The equipment loan is an annuity due of eight payments at $12\\%$, while the reserve is a separate quarterly-savings problem. For the loan, one payment is immediate and seven are discounted:

$$
\\text{factor}=1+\\frac{1}{0.12}\\bigl[1-(1.12)^{-7}\\bigr]=5.563757, \\qquad a=\\frac{90000}{5.563757}=16176.12
$$

The first payment cuts the balance to $73823.88$ before any interest accrues. Year-$1$ interest, paid inside the second instalment, is $0.12\\times 73823.88=8858.87$. Independently, quarterly $300$ deposits at $9\\%$ credited annually have year-end equivalent $300(4+1.5\\times 0.09)=1240.50$, and three years of that annuity accumulate to

$$
F_{3}=\\frac{1240.50}{0.09}\\bigl[(1.09)^{3}-1\\bigr]=4066.48
$$`,
};

const tacticals = {
  "math-11-101": [
    `**A.** → True

Interest compounds once a year and the instalments are yearly, so the rate inside the payment formula is $\\frac{0.12}{1}=0.12$. That is the $r=0.12$ named in the claim, and it is also the $12\\%$ charged on the opening $60000$ balance.`,
    `**B.** → True

The six-year instalment recovered above is $a=14593.54$. The claim names about \\$14,593.54, matching that equal annual payment.`,
    `**C.** → True

No payment has yet reduced the principal, so year-$1$ interest is $0.12\\times 60000=7200.00$ exactly. The claim names exactly \\$7,200.00, and $12\\%$ of $60000$ leaves no rounding.`,
    `**D.** → True

The principal slice of payment $1$ is $14593.54-7200=7393.54$. Half the instalment is $7296.77$. Even in the interest-heaviest year, principal still clears half the payment by about $\\$97$.`,
    `**E.** → False

Year $2$ opens at $52606.46$. Interest that year is $0.12\\times 52606.46=6312.77$ and principal is $8280.77$, so the balance after the second payment is

$$
52606.46-8280.77=44325.69
$$

The claim names about \\$45,000.00, which overshoots the true balance by about $\\$674$.`,
  ],
  "math-11-102": [
    `**A.** → True

The monthly periodic rate is $\\frac{0.09}{12}=0.0075$, which is $0.75\\%$. Payments are also monthly, so that is the $r$ the instalment formula uses.`,
    `**B.** → True

The monthly payment recovered above is $597.24$. The claim names about \\$597.24, matching that $48$-payment annuity.`,
    `**C.** → False

Total paid is $597.24\\times 48=28667.57$. The claim names about \\$29,500.00, which overshoots the true total by about $\\$832$.`,
    `**D.** → True

Lifetime interest is total paid minus the $24000$ financed: $28667.57-24000=4667.57$. The claim names about \\$4,667.57, matching that interest bill.`,
    `**E.** → False

Four annual instalments at the full $9\\%$ rebuild the formula with $r=0.09$ and $n=4$:

$$
a_{\\mathrm{ann}}=\\frac{0.09\\times 24000}{1-(1.09)^{-4}}=7408.05
$$

That sits more than $\\$5{,}000$ above the claimed $2388.96$ cap. Squeezing the same principal into four payments instead of forty-eight raises each instalment, not lowers it.`,
  ],
  "math-11-103": [
    `**A.** → True

The five-year instalment recovered above is $11870.89$. The claim names about \\$11,870.89, matching that equal annual payment.`,
    `**B.** → False

First-year interest is $10\\%$ of the opening $45000$, which is $4500.00$. The claim names \\$5,000.00, $\\$500$ too high. Charging $5000$ would be an $11.1\\%$ rate, not the agreed $10\\%$.`,
    `**C.** → True

Three years of the schedule leave an outstanding balance of $20602.37$. The claim names about \\$20,602.37, matching that remaining principal.`,
    `**D.** → False

Year $4$ opens at $20602.37$, so interest is only $0.10\\times 20602.37=2060.24$ while principal is $11870.89-2060.24=9810.65$. By then the principal slice is larger than the interest slice by about $\\$7{,}750$, not smaller.`,
    `**E.** → False

The principal portions are the write-downs of the balance, so they total the $45000$ borrowed. The claimed $46200$ includes $\\$1{,}200$ that belongs to interest, not principal.`,
  ],
  "math-11-104": [
    `**A.** → True

The combined annuity-due factor recovered above is $6.537048$. The claim names about $6.537048$, matching $1$ plus the nine-payment ordinary factor.`,
    `**B.** → True

Dividing the $150000$ buy-in by that factor produced $a=22946.14$. The claim names about \\$22,946.14, matching the equal due payment.`,
    `**C.** → False

Moving the first payment to the end of year $1$ turns the stream into an ordinary annuity and raises the instalment to

$$
a_{\\mathrm{ord}}=\\frac{0.11\\times 150000}{1-(1.11)^{-10}}=25470.21
$$

That is about $\\$2{,}524$ above the due payment. Later payments buy less discounting, so the required equal payment goes up, not down.`,
    `**D.** → True

The ordinary payment minus the due payment is $25470.21-22946.14=2524.07$, which matches the claimed \\$2,524.08 to the cent of rounding.`,
    `**E.** → False

Ten due payments total $22946.14\\times 10=229461.40$. The claim names about \\$220,000.00, nearly $\\$9{,}500$ below what the franchisee actually hands over.`,
  ],
  "math-11-105": [
    `**A.** → True

The payment-count threshold is about $4.9663$, so four years leave a balance standing and five is the smallest whole number that can retire the loan. The claim names $n=5$.`,
    `**B.** → True

Because the threshold sits above $4$, the debt is still alive after four years, so those four payments are full $10000$ ones totalling $40000$. A leftover balance of $8568.61$ at year $4$ confirms that the fifth year is the closer.`,
    `**C.** → True

The year-$4$ residual $8568.61$, grown one more year at $13\\%$, is $9682.53$. The claim names about \\$9,682.53 as the fifth payment, matching that closing amount.`,
    `**D.** → True

Four full payments plus the $9682.53$ closer total $49682.53$. The claim names about \\$49,682.53 as the amount paid over the life of the loan.`,
    `**E.** → True

Interest is total paid minus the $35000$ borrowed: $49682.53-35000=14682.53$. That interest bill sits about $\\$20{,}317$ below the original principal, so it is less than $35000$.`,
  ],
  "math-11-106": [
    `**A.** → True

At $10\\%$ the annuity-due present value of Option B is $535526.07$. The claim names about \\$535,526.07, matching that seven-payment stream.`,
    `**B.** → True

Cash costs $500000$ today. At $10\\%$ the instalments cost $535526.07$, so paying cash is cheaper by about $\\$35{,}526$.`,
    `**C.** → False

At $14\\%$ the same due formula gives

$$
PV_{B}'=100000+\\frac{100000}{0.14}\\bigl[1-(1.14)^{-6}\\bigr]=488866.75
$$

not the claimed $495000$. The stated figure overshoots the true present value by about $\\$6{,}133$.`,
    `**D.** → True

At $14\\%$ the instalment present value $488866.75$ sits about $\\$11{,}133$ below the $500000$ cash price, so Option B is now the cheaper choice.`,
    `**E.** → False

At $10\\%$ Option B is dearer by $\\$35{,}526$; at $14\\%$ it is cheaper by $\\$11{,}133$. The ranking changes with the rate, so Option B is not always the more expensive plan.`,
  ],
  "math-11-107": [
    `**A.** → False

The year-end equivalent of the four quarterly deposits is $1030$, not $1100$. The extra $\\$70$ in the claim would require more intra-year interest than $8\\%$ simple on those fractional holdings can produce.`,
    `**B.** → False

Four years of $1030$ year-end equivalents accumulate to $4641.30$. The claim names about \\$4,700.00, which overshoots the true balance by about $\\$59$.`,
    `**C.** → False

Three years accumulate to

$$
F_{3}=\\frac{1030}{0.08}\\bigl[(1.08)^{3}-1\\bigr]=3343.79
$$

well short of the claimed $3500$. The stated figure overshoots the three-year balance by about $\\$156$.`,
    `**D.** → True

Dropping the intra-year simple interest and treating each year as a flat $1000$ at year-end produces

$$
F_{4}^{\\mathrm{flat}}=\\frac{1000}{0.08}\\bigl[(1.08)^{4}-1\\bigr]=4506.11
$$

The claim names about \\$4,506.11, matching that simplified four-year balance.`,
    `**E.** → False

The gap between the correct $4641.30$ and the flat $4506.11$ is $135.19$. The claim puts that gap at about $\\$200$, roughly $\\$65$ too high.`,
  ],
  "math-11-108": [
    `**A.** → True

The monthly payment recovered above is $1432.86$. The claim names about \\$1,432.86, matching that $240$-payment annuity.`,
    `**B.** → True

The balance after the $60$th payment is $169799.20$. The claim names about \\$169,799.20, matching the present value of the $180$ remaining instalments.`,
    `**C.** → False

Principal cleared in five years is $30200.80$, only about $15.10\\%$ of the original loan:

$$
\\frac{30200.80}{200000}=0.1510
$$

Early payments go mostly to interest, so the family is nearly ten percentage points short of a $25\\%$ principal reduction.`,
    `**D.** → True

Sixty payments total about $85971.73$, of which $30200.80$ is principal, leaving $55770.93$ of interest. The claim names about \\$55,770.92, matching that first-five-year interest to the dollar.`,
    `**E.** → False

Over the full $240$ months the family pays

$$
1432.86\\times 240=343886.91
$$

so lifetime interest is $343886.91-200000=143886.91$. The claim names about \\$120,000.00, nearly $\\$24{,}000$ below the true interest bill.`,
  ],
  "math-11-109": [
    `**A.** → True

The threshold is about $8.508$, so eight years leave a balance standing and nine is the smallest whole number that retires the loan. The claim names $n=9$.`,
    `**B.** → True

The year-$8$ residual $11491.37$, grown one more year at $14\\%$, is $13100.16$. The claim names about \\$13,100.16 as the ninth payment, matching that closer.`,
    `**C.** → False

Interest is $213100.16-120000=93100.16$. The claim names about \\$105,000.00, nearly $\\$12{,}000$ above the true interest bill.`,
    `**D.** → False

Eight full payments plus the $13100.16$ closer total $213100.16$, not the claimed $210000$. The company actually pays a little more than $\\$3{,}100$ above that stated figure.`,
    `**E.** → True

Nine full $25000$ payments would be $225000$. The true total is $213100.16$, so the overstatement is $225000-213100.16=11899.84$, which clears the $10000$ threshold.`,
  ],
  "math-11-110": [
    `**A.** → True

The annuity-due instalment recovered above is $16176.12$. The claim names about \\$16,176.12, matching the equal start-of-year payment on the $90000$ loan.`,
    `**B.** → True

After the immediate first payment the balance is $73823.88$, and $12\\%$ of that is $8858.87$. The claim names about \\$8,858.87 as the interest inside the second payment.`,
    `**C.** → False

After the second payment the balance is $66506.63$, so the third instalment carries only $0.12\\times 66506.63=7980.80$ of interest, which is $\\$878$ less than the second payment's $8858.87$. Interest falls as the balance falls, so the third slice is smaller, not larger.`,
    `**D.** → True

The reserve's year-end equivalent is $1240.50$, and three years of that annuity accumulate to $4066.48$. Both figures in the claim match those calculations.`,
    `**E.** → False

Three loan payments total $3\\times 16176.12=48528.36$, while the three-year reserve holds only $4066.48$. The loan payments exceed the reserve by about $\\$44{,}462$, so they are not the smaller amount.`,
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
