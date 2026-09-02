import fs from "fs";

const file = new URL("./121_123.json", import.meta.url);

const overviews = {
  "math-11-121": `Renovation cost $65000$ against rents of $34000$ then $42000$ is another two-year quadratic. With $s=\\frac{1}{1+r}$,

$$
42s^{2}+34s-65=0, \\qquad s=\\frac{-34+\\sqrt{12076}}{84}\\approx 0.90346, \\qquad r\\approx 10.69\\%
$$

NPV at $9\\%$ is therefore still positive ($1543.22$), while at $12\\%$ it is negative ($-1160.72$).`,

  "math-11-122": `A perpetual royalty and a two-year stub on the same $50000$ outlay live at opposite ends of the IRR spectrum. Option $1$ pays $6000$ a year forever, so zero NPV means

$$
r=\\frac{6000}{50000}=12\\%
$$

Option $2$ pays $6000$ for only two years. With $s=\\frac{1}{1+r}$ the quadratic $3s^{2}+3s-25=0$ has admissible root $s\\approx 2.42973$, hence $r\\approx -58.84\\%$. That root still sits above $-1$, and the other root ($r\\approx -1.291$) is discarded, so uniqueness above $-1$ holds even though the rate is negative.`,

  "math-11-123": `Two solar designs, two horizons: rank them by IRR, then check a $13\\%$ hurdle. Design A invests $120000$ for $54000$ then $88000$. With $s=\\frac{1}{1+r}$,

$$
44s^{2}+27s-60=0, \\qquad s=\\frac{-27+\\sqrt{11289}}{88}\\approx 0.90057, \\qquad r_{A}\\approx 11.04\\%
$$

Design B is one year: $\\frac{81200}{70000}-1=16\\%$ exactly. The IRR criterion therefore prefers B. At a $13\\%$ discount rate A is already negative (NPV $\\approx -3295.48$) while B is still positive (NPV $\\approx 1858.41$), because $13\\%$ sits above A's rate and below B's.`,
};

const tacticals = {
  "math-11-121": [
    `**A.** → True

The admissible root converts to $r\\approx 10.69\\%$. The claim names approximately $10.69\\%$, matching that internal rate on the renovation.`,
    `**B.** → True

At $9\\%$, below the internal rate, NPV is $1543.22$, a surplus. The project has positive net present value at that cheaper discount rate.`,
    `**C.** → False

At $12\\%$, above the internal rate, NPV is $-1160.72$. The project falls short, so the net present value is negative, not positive.`,
    `**D.** → True

Doubling both rents with the outlay unchanged does more than double the rate. The new quadratic $84s^{2}+68s-65=0$ yields about $77.44\\%$. Double the original $10.69\\%$ would be only $21.38\\%$, so the new rate more than doubles the old one, by some fifty-six percentage points.`,
    `**E.** → False

An outlay of $60000$ with the same rents yields $r=16.67\\%$, about six percentage points above the original $10.69\\%$. Paying less for the same rental income raises the internal rate, not lowers it.`,
  ],
  "math-11-122": [
    `**A.** → True

Option $1$'s perpetuity internal rate is $\\frac{6000}{50000}=12\\%$. The claim names $12\\%$ as the limiting rate, matching that level-stream formula.`,
    `**B.** → True

Option $2$'s admissible quadratic root converts to about $-58.84\\%$. The claim names approximately $-58.84\\%$, matching that two-year stub.`,
    `**C.** → True

Option $2$ has $a_{0}<0$ and both later flows positive, so there is a unique root above $-1$. The quadratic supplies it at about $-58.84\\%$; the other root falls below $-1$ and is dropped. A negative rate is still a rate.`,
    `**D.** → False

The three cash flows sum to $-50000+6000+6000=-38000$, not $-40000$. The claimed total is $\\$2{,}000$ too negative.`,
    `**E.** → True

Removing year $2$ leaves $r=\\frac{6000}{50000}-1=-88\\%$. Compared with Option $2$'s $-58.84\\%$, the truncated project is about twenty-nine percentage points lower. Dropping the second $6000$ pushes the rate further into negative territory.`,
  ],
  "math-11-123": [
    `**A.** → True

Design A's admissible root converts to about $11.04\\%$. The claim names approximately $11.04\\%$, matching that two-year internal rate.`,
    `**B.** → True

Design B's one-year rate is $\\frac{81200}{70000}-1=16\\%$ exactly. The claim names exactly $16\\%$.`,
    `**C.** → True

The IRR criterion picks the higher rate. B earns $16\\%$ and A earns about $11.04\\%$, a gap of nearly five percentage points, so B is preferred.`,
    `**D.** → True

At $13\\%$ Design A's NPV is about $-3295.48$ while Design B's is about $1858.41$. That is the split the claim describes: $13\\%$ sits above A's $11.04\\%$ and below B's $16\\%$.`,
    `**E.** → False

Cutting A's year-$1$ return to $44000$ drops its internal rate to about $5.91\\%$, some ten percentage points below B's $16\\%$. The weakened version of A does not exceed Design B.`,
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
