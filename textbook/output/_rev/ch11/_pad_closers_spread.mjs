import fs from "node:fs";

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/\bthe statement is (?:True|False)\.\s*$/.test(last)) throw new Error(last.slice(-80));
  return [...parts, extra.trim(), last].join("\n\n");
}
function apply(path, extras) {
  const arr = JSON.parse(fs.readFileSync(path, "utf8"));
  for (const t of arr) {
    const ex = extras[t.id];
    if (!ex) continue;
    t.tactical_explanations = t.tactical_explanations.map((letter, i) =>
      ex[i] ? insertBeforeClose(letter, ex[i]) : letter
    );
  }
  fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
}

const p01 = "textbook/output/_rev/ch11/01_10.json";
const a01 = JSON.parse(fs.readFileSync(p01, "utf8"));
const t3 = a01.find((x) => x.id === "math-11-3");
t3.tactical_explanations[2] = t3.tactical_explanations[2].replace(
  /and the statement is True\.\s*$/,
  "so the statement is True."
);
t3.tactical_explanations[3] = t3.tactical_explanations[3].replace(
  /(?<!so )the statement is False\.\s*$/,
  "so the statement is False."
);
fs.writeFileSync(p01, JSON.stringify(a01, null, 2) + "\n");

apply("textbook/output/_rev/ch11/21_30.json", {
  "math-11-26": {
    4: `The first-year dollar drop starts from $\\$60,000$ and takes about $\\$5,710$. The fourth-year dollar drop starts from a smaller book near $\\$44,449$ and takes about $\\$4,230$. The same 10% continuous rate takes more dollars off the larger base.

Later years do not catch up in dollars. Older vans are worth less, so the same rate takes fewer dollars. That is the depreciation mirror of a growing fund's rising dollar gains. The claim said the first-year drop is larger. The recovered pair matches.

What would have to change is an increasing remaining value, which would take a negative write-down. The stem is depreciation. Dollar drops shrink as the base shrinks.`,
  },
  "math-11-32": {
    4: `Matched 7.0% continuous X reaches about $\\$69,016$, about $\\$83$ above Z's $\\$68,933$. Once quotes match, continuous is the ceiling. Letter D failed because the quotes did not match. This letter equalizes them at 7.0% and the ranking flips.

A treasurer who believed "lowest quote always loses" would miss this counterfactual. Raise X's quote to 7.0% and keep the continuous clock, and X becomes the strongest of the three. The recovered matched-rate X exceeds Z.

What would have to change back is a hole in X's quote. At a shared 7.0%, the hole is gone. The stem's actual quotes are 6.8%, 6.9%, and 7.0%, which is why letter D put X last. This letter is the equal-quote companion.`,
  },
});

apply("textbook/output/_rev/ch11/31_40.json", {
  "math-11-36": {
    4: `Four years of 4.5% continuous need about $\\$83,527$ today, $\\$13,759$ more than the eight-year requirement. Less time for the account to work means more cash from the parent. A shorter wait is not less work for the wallet.

The stem keeps the $\\$100,000$ target, so halving the horizon raises the required deposit, not lowers it. The claim said smaller. The recovered four-year deposit is larger.

What would have to change is a smaller target in the four-year case. Keep the $\\$100,000$ bill and cut the calendar, and the opening check grows. Discounting $100,000 e^{-0.18}$ is a weaker discount than $100,000 e^{-0.36}$.`,
  },
  "math-11-37": {
    4: `The year-7 endpoint depends on the total exponent $0.52$, not on the order of the two phases. Reversing 4% then 10% changes year 3 and leaves year 7 unchanged. Multiplication commutes on a single opening base.

Deposits added along the way would break that commutativity. The stem is a single opening $\\$1,800,000$. Reversed phases leave the same year-7 revenue $\\$3,027,650$.

A manager who tracked only year-3 would see a different path and might think year 7 must change too. The endpoint identity is already in Part 3. This letter is that identity applied to the reversed-phase claim.`,
  },
  "math-11-39": {
    1: `Tripling is not a power of two, so the wait is not a simple multiple of the doubling time. $\\ln 3 / 0.065 \\approx 16.90$ years. Linear $1.5 \\times 10.66$ undershoots because $\\ln 3 / \\ln 2 \\approx 1.585$, not $1.5$.

This letter names $16.90$. Letter E will make that curvature the whole claim. Rounding $16.9017$ to $16.90$ is the approximation on the page.`,
  },
  "math-11-40": {
    3: `B's $\\$80,000$ drop looks like a portfolio loss until A's $\\$52,479$ gain and C's $\\$34,986$ gain are added. Together those gains more than cover B's drop, leaving the portfolio about $\\$7,743$ above the starting $\\$470,000$.

The combined five-year value is $\\$477,743$, which is not less than the original principals. "Less than" has the ranking backwards.

A family-office book that looked only at B would report a loss. The recovered sum $202,479 + 140,278 + 134,986 = 477,743$ is the three-asset book. That book is above the opening $\\$470,000$, matching the opposite of the claim.`,
  },
});
console.log("fixed closers and spreads");
