import fs from "node:fs";

const path = "textbook/output/_rev/ch11/11_20.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer: " + last.slice(-90));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

const extras = {
  "math-11-19": {
    0: `In the story of the stem, a saver is comparing three one-year CDs on $\\$20,000$. CD1 is the 6.30% monthly certificate. The recovered object is $R_1 \\approx 6.49\\%$. Citing it is citing Part 3.2.

On $\\$20,000$ that yield is about $\\$1,297$ of interest, which letter E will use. This letter only names the $6.49\\%$ rate.

A solver who left CD1 at the printed $6.30\\%$ would understate the monthly certificate by $0.19$ of a point and would also understate the interest by about $\\$38$.`,
    1: `In the story of the stem, CD2 is the 6.40% quarterly certificate. The recovered object is $R_2 \\approx 6.55\\%$. On $\\$20,000$ that is about $\\$1,311$ of interest.

CD2's $0.15$ point lift over its printed quote is smaller than CD1's $0.19$ point lift, but CD2 starts $0.10$ points higher, so it still finishes ahead of CD1. That ranking is letter D. This letter only names CD2's $6.55\\%$.`,
    2: `In the story of the stem, CD3 quotes 6.45% twice a year and converts to essentially the same $6.55\\%$ as CD2. The extra arithmetic is the $0.0007$ point unrounded gap.

A saver who picked CD3 over CD2 because $6.45 > 6.40$ on the page would be splitting a tie. After conversion they are the same hundredth. Frequency on CD2 closes the $0.05$ point nominal hole.

"Essentially the same" is the right reading at published precision.`,
    3: `In the story of the stem, CD1 is last on the printed list and last on the effective list. Monthly compounding is not enough to overtake 6.40% quarterly or 6.45% semi-annual.

A saver who ranked by compounding frequency would put CD1 first. A saver who ranked by effective rate puts CD1 last. The recovered $6.49\\%$ against two $6.55\\%$ figures is that last-place finish.

The opposite verdict would need CD1's monthly quote high enough that $R_1$ cleared $6.55\\%$. The stem quotes 6.30%.`,
    4: `In the story of the stem, the extra interest from choosing CD2 over CD1 on $\\$20,000$ is about $\\$13.61$. That is principal times the effective-rate gap, already in Parts 3.8 through 3.10.

A saver who used the $0.10$ point nominal gap would expect $\\$20$ of extra interest and would overstate the advantage. After conversion the gap is about $0.068$ points, which is $\\$13.60$ on $\\$20,000$.

The $13.61$ and $13.62$ companions are rounding, not a different model. Neither is $\\$20$.`,
  },
  "math-11-20": {
    0: `In the story of the stem, the family is timing Account M, 6.00% monthly, from $\\$15,000$ to $\\$22,000$. The recovered object is $t_M \\approx 76.81$ months, rounded to $76.8$. Citing it is citing Part 3.3.

In years that is about $6.40$ years. Letters B and C will put Account Q next to this wait. This letter only names M's own inversion.

A Rule-of-72 doubling scaled by $\\ln 1.467 / \\ln 2$ is more work than the direct logarithm, and it is not needed.`,
    1: `In the story of the stem, the family is asked whether Account Q takes the same time as Account M. It does not. Q arrives in about $6.28$ years against M's $6.40$. The extra arithmetic is $6.275 < 6.40$.

The waits are close, which is why "the same" looks tempting. Close is not equal. A month and a half on $\\$15,000$ growing toward $\\$22,000$ is a real difference in the race.

The opposite verdict would hold if $R_Q = R_M$. Under the stem, $R_Q > R_M$.`,
    2: `In the story of the stem, Q compounds quarterly and M compounds monthly, so Q really does compound less often. The recovered race still has Q winning, because Q quotes $6.15\\%$ against M's $6.00\\%$.

"Must take longer" is a frequency slogan that is true at a shared nominal rate. The stem does not share the nominal rate. Q's extra $0.15$ points outweigh M's extra monthly dates.

Letter D will confirm $R_Q > R_M$. This letter is the time ranking that follows.`,
    3: `In the story of the stem, the family is ranking the two true yearly yields. The recovered pair is $R_M \\approx 6.17\\%$ against $R_Q \\approx 6.29\\%$. M is not higher.

Monthly compounding looks stronger as a clock. It is not stronger as a yield when Q's quote is $0.15$ points higher. That is why Q wins the race in B and C.

The opposite verdict would need a higher monthly quote on M. Under the stem, Q has the higher effective rate.`,
    4: `In the story of the stem, a $\\$30,000$ target is a doubling of $\\$15,000$, while $\\$22,000$ is only a factor of $1.467$. Times scale with logs, and $\\ln 2$ is not twice $\\ln 1.467$. For Account M the extra arithmetic is $138.98$ months against $153.6$.

The second stretch rides on a larger balance, so it does not take as long as the first. That is why a doubling takes less than twice the $76.8$-month wait.

Simple interest would obey "twice the money, twice the time." Compound interest does not.`,
  },
};

for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((letter, i) => {
    if (!ex[i]) return letter;
    return insertBeforeClose(letter, ex[i]);
  });
}
fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
console.log("padded 19-20");
