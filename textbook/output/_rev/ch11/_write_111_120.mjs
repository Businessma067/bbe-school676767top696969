import fs from "fs";

const file = new URL("./111_120.json", import.meta.url);

const overviews = {
  "math-11-111": `Rank the three site-purchase schedules by present value at $9\\%$ first. Schedule I is cash, already $500000$. Schedule II is a seven-payment annuity due of $95000$; Schedule III is $150000$ today plus a ten-year ordinary annuity of $60000$.

$$
PV_{\\mathrm{II}}=95000+\\frac{95000}{0.09}\\bigl[1-(1.09)^{-6}\\bigr]=521162.27
$$

$$
PV_{\\mathrm{III}}=150000+\\frac{60000}{0.09}\\bigl[1-(1.09)^{-10}\\bigr]=535059.46
$$

Cash is cheapest at $9\\%$.`,

  "math-11-112": `Price the imaging center three ways, then rank at $8\\%$. Cash is $850000$. Schedule II is a nine-payment due stream of $140000$; Schedule III is $300000$ today plus eleven ordinary payments of $80000$.

$$
PV_{\\mathrm{II}}=140000+\\frac{140000}{0.08}\\bigl[1-(1.08)^{-8}\\bigr]=944529.45
$$

$$
PV_{\\mathrm{III}}=300000+\\frac{80000}{0.08}\\bigl[1-(1.08)^{-11}\\bigr]=871117.14
$$

The $8\\%$ order is cash, then III, then II.`,

  "math-11-113": `Watch how cash stacks up against the ten-payment due stream as the rate sits at $7.5\\%$. Cash is $2400000$. Schedule II pays $340000$ at the start of each of ten years; Schedule III pays $600000$ now plus nine ordinary $250000$ instalments.

$$
PV_{\\mathrm{II}}=340000+\\frac{340000}{0.075}\\bigl[1-(1.075)^{-9}\\bigr]=2508821.59
$$

so cash beats Schedule II by about $108822$. Schedule III at that rate is

$$
PV_{\\mathrm{III}}=600000+\\frac{250000}{0.075}\\bigl[1-(1.075)^{-9}\\bigr]=2194721.76
$$`,

  "math-11-114": `A one-year project has an internal rate you can read off as a ratio. Outlay $a=8000$ today and return $b=9600$ a year later make net present value zero when

$$
r=\\frac{b}{a}-1=\\frac{9600}{8000}-1=0.20=20\\%
$$

NPV at a test rate is $A=-8000+\\frac{9600}{1+r}$. The sign pattern $a_{0}<0<a_{1}$ also guarantees a unique root above $-1$, and the one-year equation is linear in $\\frac{1}{1+r}$, so $20\\%$ is that unique root.`,

  "math-11-115": `Two equal returns turn the internal-rate equation into a quadratic. With $a_{0}=-12000$ and $a_{1}=a_{2}=7000$, write $s=\\frac{1}{1+r}$:

$$
7000s^{2}+7000s-12000=0 \\qquad\\Rightarrow\\qquad 7s^{2}+7s-12=0
$$

The positive root is $s=\\frac{-7+\\sqrt{385}}{14}\\approx 0.90153$, so $r\\approx 10.92\\%$. NPV at $8\\%$ is $+482.85$; at $12\\%$ it is $-169.64$.`,

  "math-11-116": `Unequal returns still give a quadratic, just with different coefficients. Outlay $20000$, then $9000$ and $15000$, so with $s=\\frac{1}{1+r}$

$$
15s^{2}+9s-20=0, \\qquad s=\\frac{-9+\\sqrt{1281}}{30}\\approx 0.89304, \\qquad r\\approx 11.98\\%
$$

NPV at $10\\%$ is $+578.51$; at $14\\%$ it is $-563.25$. The undiscounted sum $-20000+9000+15000=4000$ is positive, which is consistent with a positive internal rate.`,

  "math-11-117": `Two one-year uses of cash rank by rate, then by NPV at a common hurdle. Project X invests $15000$ to get $17250$:

$$
r_{X}=\\frac{17250}{15000}-1=15\\%
$$

Project Y invests $22000$ to get $24750$:

$$
r_{Y}=\\frac{24750}{22000}-1=12.5\\%
$$

The IRR criterion therefore prefers X. At an $11\\%$ hurdle both NPVs are still positive ($540.54$ and $297.30$), because $11\\%$ sits below both internal rates.`,

  "math-11-118": `A mid-stream outflow means NPV has to be tested at several rates rather than solved as a clean quadratic. The cash flows are $a_{0}=-45000$, $a_{1}=-3000$, $a_{2}=28000$, $a_{3}=35000$. Discounting at $8\\%$ gives

$$
A\\approx -45000-\\frac{3000}{1.08}+\\frac{28000}{(1.08)^{2}}+\\frac{35000}{(1.08)^{3}}
$$

$$
A\\approx -45000-2777.78+24005.49+27784.13=4011.84
$$

about $4012$. And $a_{1}=-3000$ is an outflow, so $a_{1}$, $a_{2}$, and $a_{3}$ are not all positive.`,

  "math-11-119": `The espresso line is a two-year project with $a_{0}=-34000$, $a_{1}=16000$, $a_{2}=24000$. With $s=\\frac{1}{1+r}$,

$$
12s^{2}+8s-17=0, \\qquad s=\\frac{-8+\\sqrt{880}}{24}\\approx 0.90270, \\qquad r\\approx 10.78\\%
$$

NPV at $9\\%$ is therefore still positive ($879.22$), while at $13\\%$ it is negative ($-1045.19$).`,

  "math-11-120": `These particular returns are built so that $15\\%$ is an exact internal rate. Discount $a_{1}=22000$ and $a_{2}=27600$ at $15\\%$:

$$
\\frac{22000}{1.15}+\\frac{27600}{1.3225}=19130.43+20869.57=40000
$$

which cancels the $40000$ outlay and leaves NPV $=0$ to the dollar. The undiscounted sum $-40000+22000+27600=9600$ is positive, matching a positive IRR. The sign pattern $a_{0}<0<a_{1},a_{2}$ also guarantees a unique root above $-1$, and the other quadratic root sits below $-1$ and is discarded.`,
};

const tacticals = {
  "math-11-111": [
    `**A.** → True

At $9\\%$ Schedule II's annuity-due present value is $521162.27$. The claim names about \\$521,162.27, matching that seven-payment stream of $95000$.`,
    `**B.** → False

At $9\\%$ Schedule III is worth $535059.46$, not the claimed $540000$. The stated figure overshoots the cash-plus-annuity value by about $\\$4{,}941$.`,
    `**C.** → True

At $9\\%$ the three present values line up as $500000<521162.27<535059.46$. Cash under Schedule I is the smallest, so it is the cheapest of the three.`,
    `**D.** → True

At $13\\%$ the due formula gives

$$
PV_{\\mathrm{II}}'=95000+\\frac{95000}{0.13}\\bigl[1-(1.13)^{-6}\\bigr]=474767.23
$$

The claim names about \\$474,767.23, matching that higher-rate annuity-due figure.`,
    `**E.** → False

At $13\\%$ Schedule III falls to

$$
PV_{\\mathrm{III}}'=150000+\\frac{60000}{0.13}\\bigl[1-(1.13)^{-10}\\bigr]=475574.61
$$

The ranking is $474767.23<475574.61<500000$. Schedule II is cheapest; Schedule III comes within about $\\$807$ but does not overtake it.`,
  ],
  "math-11-112": [
    `**A.** → True

At $8\\%$ Schedule II's due present value is $944529.45$. The claim names about \\$944,529.45, matching that nine-payment stream.`,
    `**B.** → True

At $8\\%$ Schedule III is $871117.14$. The claim names about \\$871,117.14, matching the $300000$ cash plus eleven discounted $80000$ payments.`,
    `**C.** → True

At $8\\%$ the order is $850000<871117.14<944529.45$. Schedule I's cash price is the smallest of the three.`,
    `**D.** → True

Raising the rate to $12\\%$ discounts the delayed pieces hard. Schedule III falls to

$$
PV_{\\mathrm{III}}'=300000+\\frac{80000}{0.12}\\bigl[1-(1.12)^{-11}\\bigr]=775015.93
$$

The claim names about \\$775,015.93, matching that higher-rate mixed schedule.`,
    `**E.** → False

At $12\\%$ Schedule II falls to

$$
PV_{\\mathrm{II}}'=140000+\\frac{140000}{0.12}\\bigl[1-(1.12)^{-8}\\bigr]=835469.57
$$

The order is $775015.93<835469.57<850000$. Schedule III is cheapest; Schedule II undercuts cash but still sits about $\\$60{,}454$ above Schedule III.`,
  ],
  "math-11-113": [
    `**A.** → True

At $7.5\\%$ Schedule II's due present value is $2508821.59$. The claim names about \\$2,508,821.59, matching that ten-payment stream of $340000$.`,
    `**B.** → False

At $7.5\\%$ Schedule III is $2194721.76$, not the claimed $2250000$. The stated figure overshoots the mixed schedule by about $\\$55{,}278$.`,
    `**C.** → True

Cash costs $2400000$. At $7.5\\%$ Schedule II costs $2508821.59$, so Schedule I is cheaper than Schedule II by about $\\$108{,}822$.`,
    `**D.** → False

At $11.5\\%$ Schedule II falls to

$$
PV_{\\mathrm{II}}'=340000+\\frac{340000}{0.115}\\bigl[1-(1.115)^{-9}\\bigr]=2186561.89
$$

not the claimed $2100000$. The stated figure undershoots the true present value by about $\\$86{,}562$.`,
    `**E.** → False

At $11.5\\%$ Schedule II's $2186561.89$ sits about $\\$213{,}438$ below the $2400000$ cash price. Cash is no longer the cheaper of those two schedules.`,
  ],
  "math-11-114": [
    `**A.** → True

The one-year internal rate is $\\frac{9600}{8000}-1=20\\%$ exactly. The claim names exactly $20\\%$, matching that ratio.`,
    `**B.** → True

At $15\\%$, which sits below the $20\\%$ internal rate, NPV is

$$
-8000+\\frac{9600}{1.15}=347.83
$$

a surplus. A rate cheaper than the project's own return leaves a positive present value.`,
    `**C.** → False

At $25\\%$, above the internal rate, NPV is

$$
-8000+\\frac{9600}{1.25}=-320.00
$$

The project falls short, so the net present value is negative, not positive.`,
    `**D.** → True

A $10000$ return on the same $8000$ outlay yields $\\frac{10000}{8000}-1=25\\%$. That clears the $24\\%$ threshold by a full percentage point.`,
    `**E.** → True

The first cash flow is negative and the only later one is positive, so the uniqueness result supplies exactly one root above $-1$. Solving $-8000+\\frac{9600}{1+r}=0$ returns that single $20\\%$.`,
  ],
  "math-11-115": [
    `**A.** → True

The admissible root of $7s^{2}+7s-12=0$ converts to $r\\approx 10.92\\%$. The claim names approximately $10.92\\%$, matching that internal rate.`,
    `**B.** → True

At $8\\%$, below the internal rate, NPV is $482.85$, a surplus. The project is worth more than it costs at that cheaper discount rate.`,
    `**C.** → False

At $12\\%$, above the internal rate, NPV is $-169.64$. The project comes up short, so the net present value is negative, not positive.`,
    `**D.** → True

Raising the year-$2$ return to $8000$ changes the quadratic to

$$
8s^{2}+7s-12=0
$$

The admissible root converts to about $15.87\\%$, which clears $13\\%$ by nearly three percentage points.`,
    `**E.** → False

Doubling both returns does not double the rate. The new quadratic is

$$
7s^{2}+7s-6=0
$$

which yields about $81.09\\%$, not twice $10.92\\%$. The claimed $21.84\\%$ is a linear scaling that the quadratic does not obey; the true rate is nearly sixty percentage points higher.`,
  ],
  "math-11-116": [
    `**A.** → True

The admissible root converts to $r\\approx 11.98\\%$. The claim names approximately $11.98\\%$, matching that internal rate for the $9000$ then $15000$ returns.`,
    `**B.** → True

At $10\\%$, below the internal rate, NPV is $578.51$, a surplus. The project has positive net present value at that discount rate.`,
    `**C.** → False

At $14\\%$, above the internal rate, NPV is $-563.25$. The project falls short, so the net present value is negative, not positive.`,
    `**D.** → True

Raising the year-$1$ return by $9000$ changes the middle coefficient and lifts the internal rate to about $42.60\\%$, which exceeds $30\\%$ by more than twelve percentage points.`,
    `**E.** → True

Adding the three cash flows with no discounting gives $-20000+9000+15000=4000$. The claim names \\$4,000, matching that undiscounted total.`,
  ],
  "math-11-117": [
    `**A.** → True

Project X's one-year rate is $\\frac{17250}{15000}-1=15\\%$ exactly. The claim names exactly $15\\%$.`,
    `**B.** → True

Project Y's one-year rate is $\\frac{24750}{22000}-1=12.5\\%$ exactly. The claim names exactly $12.5\\%$.`,
    `**C.** → False

The IRR criterion picks the higher rate. X earns $15\\%$ and Y earns $12.5\\%$, so X is preferred, not Y. The claim reverses that ranking.`,
    `**D.** → False

At $11\\%$ both NPVs are positive: $540.54$ for X and $297.30$ for Y. Y is not negative, because $11\\%$ still sits below Y's $12.5\\%$ internal rate.`,
    `**E.** → False

A $25000$ payoff on Y's $22000$ outlay yields $\\frac{25000}{22000}-1\\approx 13.64\\%$, which remains $1.36$ percentage points behind X's $15\\%$. Y still does not overtake X.`,
  ],
  "math-11-118": [
    `**A.** → True

NPV at $8\\%$ is $4011.84$, which rounds to the claimed \\$4,012. The four discounted cash flows produce that surplus.`,
    `**B.** → False

NPV at $12\\%$ is $-444.83$. The project is already short at that rate, so the net present value is negative, not positive.`,
    `**C.** → False

NPV is still positive at $11\\%$ (about $614$) and already negative at $12\\%$. The internal rate therefore sits between $11\\%$ and $12\\%$, not between $12\\%$ and $15\\%$.`,
    `**D.** → True

NPV at $15\\%$ is $-3423.60$, about $-\\$3{,}424$. The claim names approximately $-\\$3,424$, matching that shortfall.`,
    `**E.** → False

Year $1$ is an installation outflow of $3000$, so $a_{1}=-3000<0$. The two later flows are positive, but the three are not all positive. That also means the standard uniqueness hypothesis does not apply off the shelf.`,
  ],
  "math-11-119": [
    `**A.** → False

The internal rate is about $10.78\\%$, not $14.5\\%$. The claimed figure sits $3.72$ percentage points above the quadratic's admissible root.`,
    `**B.** → False

At $9\\%$, below the $10.78\\%$ internal rate, NPV is $879.22$, a surplus. The net present value is positive, not negative.`,
    `**C.** → True

At $13\\%$, above the internal rate, NPV is $-1045.19$. The project falls short, so the net present value is negative.`,
    `**D.** → False

Cutting year $2$ from $24000$ to $20000$ drops the internal rate to about $3.75\\%$, some seven percentage points below the original $10.78\\%$. The weaker second-year return lowers IRR rather than raising it.`,
    `**E.** → False

An outlay of $30000$ with the same returns yields $r=20\\%$, about nine percentage points above the original $10.78\\%$. Paying less for the same cash inflows raises the internal rate, not lowers it.`,
  ],
  "math-11-120": [
    `**A.** → True

At $15\\%$ the two discounted returns sum to $40000$ and cancel the outlay, so NPV is $0$ to the nearest dollar. That rate is the project's internal rate of return.`,
    `**B.** → True

At $10\\%$, below the $15\\%$ internal rate, NPV is $2809.92$, a surplus. The net present value is positive.`,
    `**C.** → True

At $20\\%$, above the internal rate, NPV is $-2500$. The project falls short, so the net present value is negative.`,
    `**D.** → True

With no discounting, the three signed cash flows add to $-40000+22000+27600=9600$. The claim names \\$9,600, matching that undiscounted total.`,
    `**E.** → True

The first cash flow is negative and both later ones are positive, so there is a unique root above $-1$. Solving the quadratic confirms it: $s=\\frac{120}{138}$ gives $r=15\\%$, and the other root yields $r\\approx -1.60$, which is discarded.`,
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
