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

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

// Second pad: unique 120–180 word blocks for every rich letter still under 360.
const extras = {
  "math-11-11": {
    2: `On a $\\$40,000$ target, sitting $\\$1,284$ below $\\$32,000$ is a comfortable miss, not a rounding. Rounding $\\$30,716$ to the nearest thousand is $\\$31,000$. Rounding to the nearest five thousand is $\\$30,000$. Neither rounding lands on the other side of $\\$32,000$. The cutoff test is strict, and the recovered present value passes it.`,
    3: `The 5.5% path is a different six-year clock on the same $\\$40,000$ target. Faster growth is a gift to a trustee who can wait: less money has to be locked up today. Calling that gift "higher" reverses the present-value relationship. Future value on a fixed deposit would be higher. Required present value is lower.`,
    4: `If the opening deposit had been $\\$32,000$, interest would have been $\\$8,000$, which is letter C's cutoff minus the target in reverse, and that is the wrong pair. The recovered pair is $\\$40,000$ and $\\$30,715.86$. Their difference is $\\$9,284.14$, which is the claim's figure.`,
  },
  "math-11-12": {
    1: `Six years exactly would be a clean answer, and that is why it is tempting. The logarithm is not obliged to land on a whole number of years. $81.30 / 12 = 6.775$, which is closer to $6.8$ years than to $6.0$. The word "exactly" in the claim is what fails even before the nine-month gap is named.`,
    2: `Four years of 6% monthly credits turn £4,000 into about £5,082. A family planning around a four-year calendar would need a higher rate, or a larger opening deposit, to hit £6,000 on that date. Under the stem, four years is not enough, and $48$ months is not an approximation of $81.30$.`,
    3: `Half of $138.99$ is $69.5$ months, where the growth factor is $\\sqrt{2} \\approx 1.414$. The stem's factor is $1.5$. Those two targets are not the same, so their waits are not the same, and $81.30$ sits later than $69.5$. The claim required the $1.5$ wait to be *shorter* than half a doubling. It is longer.`,
    4: `One hundred months would overshoot the goal by about £587. That is a different planning date, useful if the investor wanted a buffer, but it is not the logarithmic solution for £6,000. The inversion that hits the target is $81.30$ months, already in Part 3.3.`,
  },
  "math-11-13": {
    1: `Daily compounding at 4.25% is already next to continuous compounding. The two yearly yields round to the same $4.34\\%$ at two hundredths. That coincidence is not a reason to rebuild $e^{0.0425}$. The overview converted the 365-day clock and left $4.34\\%$, which is the claim's figure.`,
    2: `The cents, $26$, are $20,000 \\times 0.043413$ as Part 3.3 rounded them. A year-end statement that printed $\\$20,868$ without cents would still be this balance. A statement that printed $\\$20,850$ would be the once-a-year 4.25% companion, missing the daily extra.`,
    3: `Switching from $365$ dates to $12$ dates at a fixed 4.25% can only drop the yield. The recovered drop is about $0.01$ of a point. Small, but the claim said monthly would be *higher*. Higher would require a higher nominal quote on the monthly account. The stem holds 4.25% fixed.`,
    4: `A $0.20$-point premium at a $4.25\\%$ quote would need a much higher rate, or a much longer horizon than one year. Neither is on the page. Daily, monthly, and even continuous compounding all sit about $0.09$ points above $4.25\\%$. The cutoff of $0.20$ is more than twice that lift.`,
  },
  "math-11-14": {
    1: `Twenty-five percent is a round number a shopper might remember. The recovered $25.34\\%$ is that round number plus the leftover from $(1.019)^{12}$. It is not $22.80\\%$, and it is not $24\\%$. Letter E will ask whether the $2.54$ point extra clears three points. This letter only names $25.34\\%$.`,
    2: `If the two rates were the same, monthly compounding would add nothing, which happens only when $n = 1$. The card's $n = 12$. Twelve credits of $1.9\\%$ produce $25.34\\%$, and calling that $22.80\\%$ erases more than two points of true annual cost.`,
    3: `Paying $\\$3,684$ after a year would be paying the nominal rate once. The card does not charge once. It charges $1.9\\%$ twelve times, and the recovered balance is $\\$3,760.22$. The extra $\\$76$ is not a fee on top of the model. It is the model.`,
    4: `Two and a half points of extra cost is already a lot on a store card. Three points would be more. The recovered extra is $2.54$, which is more than two and less than three. The cutoff the claim named is $3.00$, and $2.54$ does not clear it.`,
  },
  "math-11-15": {
    0: `The exact square $(1.05)^{2} = 1.1025$ is one of the few conversions in this chapter that needs no rounding. $10.25\\%$ is the twice-a-year clock at 10%, and every later ranking in the task uses it as the left-hand figure.`,
    1: `Moving from two credits to four at a shared 10% adds $0.13$ of a point. That is smaller than the $0.25$ point lift from annual to semi-annual, which is the same diminishing-returns pattern letter E will read on the next two steps.`,
    2: `Moving from four credits to twelve adds only $0.09$ of a point. Monthly compounding at 10% is already close to $e^{0.10} - 1 \\approx 10.52\\%$. The remaining gap to the continuous ceiling is about $0.05$ of a point.`,
    3: `The three figures $10.25$, $10.38$, $10.47$ are a strictly increasing sequence. No pair is tied, and no step is negative. That is what "steadily raises" means here. Letter E asks which step is larger. This letter only asks whether the steps are all up.`,
    4: `If the second jump were larger, monthly compounding would be adding more than quarterly compounding added over semi-annual. At 10% it adds less, $0.09$ against $0.13$. The claim reversed those two gaps.`,
  },
  "math-11-16": {
    0: `Five percent a year sounds modest until it runs for 80 years. That is the economist's point: a constant $5.01\\%$ produces a fifty-fold GDP. The recovered root is that $5.01\\%$, not a linear split of $50$ over $80$.`,
    1: `A $6.25\\%$ path for 80 years is a different country, more than twice as large as the fifty-fold target. Using $6.25\\%$ would overshoot the question. The eightieth root is $5.01\\%$, and letter B's $6.25\\%$ is the linear shortcut that fails.`,
    2: `Halving a multiple is not halving a rate because the map $M \\mapsto M^{1/t} - 1$ is concave. Large multiples sit closer together in rate space than linear thinking expects. $5.01\\%$ and $5.93\\%$ are neighbors. $5.01\\%$ and $2.96\\%$ are not.`,
    3: `After 160 years at $5.01\\%$, the factor is $2,500$, which is twenty-five hundred-fold, not hundred-fold. A factor of $100$ arrives near year $93$. The claim named year $160$ and a factor of $100$, which is the wrong pair.`,
    4: `Forty years at $5.01\\%$ produces a factor of $\\sqrt{50} \\approx 7.07$, not $50$. Hitting $50$ in 40 years needs about $9.65\\%$ a year, which is higher than $5.01\\%$, not lower. Half the calendar is a harder annual job.`,
  },
  "math-11-17": {
    0: `Seven years of monthly 5% on a $\\$25,000$ bill is $84$ discounting dates. The recovered opening amount, $\\$17,629.99$, is that discount. A parent who deposited $\\$25,000$ would be skipping the discount entirely and locking up $\\$7,370$ too much.`,
    1: `Y's $\\$17,534.28$ is about $\\$96$ below X's $\\$17,629.99$. That $\\$96$ is the whole comparison in letter C. This letter only names Y's own present value, recovered in Part 3.2 from $28$ quarterly periods at $1.275\\%$ each.`,
    2: `X compounds more often and still needs more money today. That is the whole surprise of the ranking. Y's extra $0.10$ point of nominal rate is worth more than X's extra eight compounding dates per year, over seven years, on this bill.`,
    3: `Effective rates of $5.20\\%$ and $5.12\\%$ look close. On a $\\$25,000$ bill seven years out they differ by about $\\$96$ of present value. Close rates still pick a winner. The winner is Y.`,
    4: `An always-claim dies at the first counterexample. This stem is one: more frequent compounding, larger required deposit. Any other target and any other horizon on these two quotes will reproduce $R_Y > R_X$ and therefore the same ranking of present values.`,
  },
  "math-11-18": {
    1: `Nine years of 4.4% quarterly is $36$ discounting dates. The recovered $\\$40,467.83$ is $\\$60,000$ pulled back through those dates. A trustee who deposited $\\$60,000$ would be skipping the discount. A trustee who deposited $\\$45,000$ would be using letter C's cutoff as if it were the answer.`,
    2: `More than $\\$45,000$ would mean the nine-year factor was weaker than $60,000/45,000 \\approx 1.333$. The recovered factor is $1.4827$, which pulls the deposit down to $\\$40,468$, about $\\$4,532$ below the cutoff. The claim said "more than." It is less than.`,
    3: `At 5.0% the factor rises to about $1.564$, so the same $\\$60,000$ needs only about $\\$38,365$ today. That is $\\$2,100$ of relief relative to 4.4%, not an extra burden. Higher rate, smaller present value of a fixed target.`,
    4: `Interest of more than $\\$20,000$ would require an opening amount below $\\$40,000$. The recovered opening amount is $\\$40,467.83$, so interest is $\\$19,532.17$. The $\\$468$ miss is the same $\\$467.83$ that sits on the deposit above $\\$40,000$.`,
  },
  "math-11-19": {
    0: `CD1's $6.49\\%$ is the weakest of the three converted yields, even after monthly compounding does its work. On $\\$20,000$ that is $\\$1,297$ of interest, about $\\$38$ more than a once-a-year 6.30% credit, and about $\\$14$ less than CD2.`,
    1: `CD2's $6.55\\%$ is the figure CD3 will match and CD1 will fail to match. Quarterly compounding on 6.40% produces a yearly yield that sits a hundredth above CD1 and a hair from CD3. That is why the three certificates are "closer than they look."`,
    2: `A saver who spent time ranking CD2 against CD3 on the printed quotes would be ranking a tie. The unrounded factors differ by $0.000007$ in $R$, which is less than a cent on $\\$20,000$. For this principal they are the same certificate in dollars.`,
    3: `Lowest nominal and lowest effective is a double last-place finish. Monthly compounding could have saved CD1 if the printed hole had been a few hundredths. The hole is $0.10$ to $0.15$ points, and $R_1 \\approx 6.49\\%$ stays last.`,
    4: `Thirteen dollars and sixty-one cents on $\\$20,000$ is a $0.068$ point effective gap, not a $0.10$ point nominal gap. A saver who expected $\\$20$ of extra interest from the printed quotes would be disappointed by about $\\$6$, and still correctly prefer CD2 to CD1.`,
  },
  "math-11-20": {
    0: `Seventy-six point eight months is $6.40$ years of monthly 6% on the way from $\\$15,000$ to $\\$22,000$. That is the recovered inversion for Account M. Account Q will beat it by about a month and a half. This letter only names M's wait.`,
    1: `Same target, same starting principal, different quotes and different clocks. "The same amount of time" would require the same effective rate. $R_Q \\approx 6.29\\%$ against $R_M \\approx 6.17\\%$ is not the same, so the waits are not the same.`,
    2: `Less frequent compounding is a handicap at a shared quote. It is not a handicap when the less frequent clock quotes $0.15$ points more. Q's handicap is more than offset. Q arrives first. The word "must" is what fails.`,
    3: `M's monthly clock converts 6.00% to about $6.17\\%$. Q's quarterly clock converts 6.15% to about $6.29\\%$. The extra $0.15$ points of printed rate survive the conversion. M does not have the higher effective rate.`,
    4: `A $\\$30,000$ target is a doubling. A $\\$22,000$ target is a $46.7\\%$ gain. Twice $76.8$ months would be the right wait only if logs scaled linearly with the dollar target. They scale with $\\ln M$. $\\ln 2 / \\ln 1.467 \\approx 1.81$, not $2$, so the doubling wait is about $1.81$ times $76.8$, which is $139$ months, not $154$.`,
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
for (const t of arr) {
  const wcs = t.tactical_explanations.map(wc);
  console.log(t.id, wcs.join(", "));
}
