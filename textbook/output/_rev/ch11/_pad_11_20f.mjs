import fs from "node:fs";

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/\bthe statement is (?:True|False)\.\s*$/.test(last)) throw new Error(last.slice(-70));
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

apply("textbook/output/_rev/ch11/11_20.json", {
  "math-11-11": {
    4: `Nine thousand two hundred eighty-four dollars and fourteen cents is forced by letter B: $40,000 - 30,715.86$. Simple interest on the opening deposit would have been about $\\$8,293$, missing the extra $\\$991$ of compounding. Booking $\\$8,000$ would be subtracting the $\\$32,000$ cutoff instead of the recovered deposit. The recovered interest is $\\$9,284.14$.`,
  },
  "math-11-12": {
    2: `Four years leave about £5,082, still £918 short of £6,000. A four-year plan would need a higher monthly rate or a larger opening deposit. Under 0.50% a month, 48 months is a different, earlier date, not an approximation of $81.30$. The recovered wait is $81.30$ months.`,
    4: `One hundred months produce about £6,587, a £587 buffer past the goal. A safety-margin calendar is a different target. The logarithm that hits £6,000 is $81.30$ months. Extra months produce extra money, not a rounding of the same date.`,
  },
  "math-11-13": {
    1: `Daily 4.25% is already next to the continuous ceiling, and both round to $4.34\\%$ at two hundredths. That is not a reason to rebuild $e^{0.0425}$ here. Part 3.2 converted the 365-day clock. On $\\$20,000$ that $4.34\\%$ is letter C's $\\$20,868.26$. This letter names the rate.`,
    2: `Twenty thousand eight hundred sixty-eight dollars and twenty-six cents is $20,000 \\times 1.043413$. Booking $\\$20,850$ would be the once-a-year 4.25% companion, missing $\\$18.26$ of daily extra. The cents match Part 3.3. Under $\\$20,000$ at 4.25% daily for one year, the balance is $\\$20,868.26$.`,
    3: `Monthly 4.25% converts to about $4.33\\%$, one hundredth below daily $4.34\\%$. Larger monthly slices do not beat more daily dates at a fixed quote. The $0.01$ point gap is a couple of dollars on $\\$20,000$, but the claim said monthly would be higher. It is lower.`,
    4: `Even continuous compounding at 4.25% is about $4.34\\%$. No clock at this quote clears a $0.20$-point premium. Daily, monthly, and continuous all sit about $0.09$ points above $4.25\\%$. The cutoff is more than twice that lift. Rounding $0.09$ to $0.1$ still misses $0.20$.`,
  },
  "math-11-14": {
    1: `Twenty-five point three four percent is $(1.019)^{12} - 1$, about $\\$760$ of interest on an unpaid $\\$3,000$. Averaging $22.80$ with $28$ is not that conversion. Letter E will test the $2.54$ point extra against three points. This letter only names $25.34\\%$.`,
    2: `If effective equaled nominal, monthly compounding would add nothing, which happens only at $n = 1$. The card's $n = 12$. Calling $25.34\\%$ the same as $22.80\\%$ erases $2.54$ points of true annual cost. A cardholder who budgeted 22.80% would understate the year by more than two points.`,
    3: `Three thousand seven hundred sixty dollars is $3,000 \\times 1.2534$. Three thousand six hundred eighty-four is $3,000 \\times 1.228$, the nominal rate once. The extra $\\$76$ is twelve monthly charges of $1.9\\%$, not a fee on top of the model. The recovered balance is $\\$3,760.22$.`,
  },
  "math-11-15": {
    0: `Ten point two five percent is exact: $(1.05)^{2} = 1.1025$. On $\\$1,000$ that is $\\$102.50$ of interest against $\\$100$ annually. Every later ranking in this task uses $10.25\\%$ as the left-hand figure. Annual compounding would have left $10\\%$. Two credits are what lift it.`,
    1: `Ten point three eight percent sits $0.13$ of a point above $10.25\\%$. On $\\$1,000$ that is about $\\$1.31$ more than the semi-annual clock. That $0.13$ is letter E's first gap. This letter names the quarterly yield. Adding $4 \\times 2.5\\%$ would erase compounding and return $10\\%$.`,
    2: `Ten point four seven percent sits $0.09$ above quarterly and about $0.05$ below $e^{0.10} - 1 \\approx 10.52\\%$. Monthly at 10% is already near the ceiling. On $\\$1,000$ the extra over quarterly is about $\\$0.90$. This letter names the monthly yield $10.47\\%$.`,
    3: `The sequence $10.25 < 10.38 < 10.47$ has no tie and no negative step. Continuous compounding at 10% would continue the rise to about $10.52\\%$. The stem stops at monthly, already the highest of the three named clocks. The 10% quote is shared, so the ladder rises.`,
    4: `Semi-annual to quarterly adds $0.13$. Quarterly to monthly adds $0.09$. Counting $\\times 2$ then $\\times 3$ in $n$ would predict the second jump larger. The effective-rate curve is concave in $n$, so later jumps add less. The claim reversed $0.13$ and $0.09$.`,
  },
  "math-11-16": {
    0: `Five point zero one percent a year for 80 years really is about fifty-fold. That is the economist's logarithm, not $50/80$ and not $6.25\\%$. Letters C through E will change the multiple or the horizon. This letter is the original eightieth root $5.01\\%$.`,
    1: `A $6.25\\%$ path for 80 years produces a factor near $128$, more than twice the target of $50$. Linear shortcuts overshoot the economist's question. The eightieth root is $5.01\\%$. Naming $6.25\\%$ is that linear cousin, and it fails.`,
    2: `The map $M \\mapsto M^{1/80} - 1$ is concave, so $5.01\\%$ and $5.93\\%$ are neighbors while $5.01\\%$ and $2.96\\%$ are not. Halving $100$ to $50$ does not halve the rate. Simple interest would obey the claim. Compound growth takes roots.`,
    3: `Double the time squares the multiple: $50^{2} = 2,500$, not $100$. A factor of $100$ at $5.01\\%$ arrives near year $93$, not year $160$. The claim confused doubling the calendar with doubling the multiple. Those are different operations on an exponential.`,
    4: `Forty years at $5.01\\%$ produces $\\sqrt{50} \\approx 7.07$, not $50$. Hitting $50$ in 40 years needs about $9.65\\%$ a year. Half the calendar is a harder annual job, not a slower one. The recovered 40-year rate is higher than $5.01\\%$.`,
  },
  "math-11-17": {
    0: `Eighty-four monthly discounts at 5% pull $\\$25,000$ back to $\\$17,629.99$. Depositing the full bill would lock up $\\$7,370$ too much. Annual 5% would have needed about $\\$17,760$, over-depositing by about $\\$130$. The recovered Account X amount is $\\$17,629.99$.`,
    1: `Twenty-eight quarterly discounts at 5.10% pull the same bill back to $\\$17,534.28$, about $\\$96$ below X. That $\\$96$ is letter C's ranking in dollars. Reusing X's $\\$17,630$ in Y would ignore Y's higher quote. The recovered Account Y amount is $\\$17,534.28$.`,
    2: `X compounds more often and still needs more today. Y's extra $0.10$ point of nominal rate is worth more than X's extra eight dates per year over seven years. If both quoted 5.00%, monthly X would need less. Under the stem, Y quotes 5.10% and needs less.`,
    3: `Effective rates of $5.20\\%$ and $5.12\\%$ differ by $0.08$ of a point, which is the $\\$96$ present-value gap on this bill. Close rates still pick a winner. Monthly compounding does not give X the higher yield, because the quotes differ. The recovered pair favors Y.`,
    4: `An always-claim dies at one counterexample. This pair is one: more frequent compounding, larger required deposit. Any other target or horizon on these two quotes reproduces $R_Y > R_X$ and the same ranking of present values. Equalize the nominal rates and drop "always," and frequency would decide. As written, it does not.`,
  },
  "math-11-18": {
    1: `Thirty-six quarterly discounts at 4.4% pull $\\$60,000$ back to $\\$40,467.83$. Annual 4.4% would have needed about $\\$40,700$. Depositing $\\$45,000$ would be using letter C's cutoff as the answer. The recovered opening investment is $\\$40,467.83$.`,
    2: `More than $\\$45,000$ would mean a nine-year factor weaker than $1.333$. The recovered factor is $1.4827$, which pulls the deposit to $\\$40,468$, about $\\$4,532$ below the cutoff. Rounding $\\$40,468$ to $\\$40,000$ still sits below $\\$45,000$. The present value is less than $\\$45,000$, not more.`,
    3: `At 5.0% the factor rises to about $1.564$, so the same $\\$60,000$ needs only about $\\$38,365$ today, $\\$2,100$ of relief. Higher rate, smaller present value of a fixed target. "Higher" would describe the nine-year balance on a fixed deposit. The claim is about the required opening amount, which falls.`,
    4: `Interest of more than $\\$20,000$ would need an opening amount below $\\$40,000$. The recovered opening amount is $\\$40,467.83$, so interest is $\\$19,532.17$, the $\\$468$ complement of the deposit's extra above $\\$40,000$. Rounding the deposit to $\\$40,000$ would manufacture a $\\$20,000$ interest figure the cents do not support.`,
  },
  "math-11-19": {
    0: `CD1's $6.49\\%$ is the weakest converted yield. On $\\$20,000$ that is $\\$1,297$ of interest, $\\$38$ more than a once-a-year 6.30% credit and about $\\$14$ less than CD2. Monthly compounding does work, just not enough to overtake 6.40% quarterly. This letter names $6.49\\%$.`,
    1: `CD2's $6.55\\%$ is the figure CD3 will match and CD1 will fail to match. Quarterly 6.40% produces a yearly yield a hundredth above CD1. That is why the three certificates are closer than the printed quotes look. This letter names $6.55\\%$ for CD2.`,
    2: `CD3's unrounded $R$ differs from CD2's by $0.000007$, less than a cent on $\\$20,000$. Ranking $6.45 > 6.40$ on the page is ranking a tie after conversion. Frequency on CD2 closes the $0.05$ point nominal hole. At published precision they are the same $6.55\\%$.`,
    3: `Lowest nominal and lowest effective is a double last-place finish. The printed hole of $0.10$ to $0.15$ points is too large for monthly compounding to fill. Ranking by frequency would put CD1 first. Ranking by $R$ puts CD1 last at $6.49\\%$ against two $6.55\\%$ figures.`,
    4: `Thirteen dollars and sixty-one cents is a $0.068$ point effective gap on $\\$20,000$, not a $0.10$ point nominal gap. Expecting $\\$20$ of extra interest from the printed quotes overstates the advantage by about $\\$6$. The recovered extra is still about $\\$13.61$, and CD2 still beats CD1.`,
  },
  "math-11-20": {
    0: `Seventy-six point eight months is $6.40$ years of monthly 6% from $\\$15,000$ to $\\$22,000$. Account Q will beat this wait by about a month and a half. This letter only names M's inversion, $t_M \\approx 76.81$ months rounded to $76.8$.`,
    1: `Same target and same start do not imply the same wait when quotes and clocks differ. $R_Q \\approx 6.29\\%$ against $R_M \\approx 6.17\\%$ is not a tie, so $6.28$ years against $6.40$ years is not the same amount of time. Close is not equal.`,
    2: `Q really does compound less often. It still arrives first, because it quotes $6.15\\%$ against M's $6.00\\%$. "Must take longer" is true at a shared nominal rate. The stem does not share the rate. Q's extra $0.15$ points outweigh M's extra monthly dates.`,
    3: `M converts 6.00% monthly to about $6.17\\%$. Q converts 6.15% quarterly to about $6.29\\%$. The extra printed $0.15$ points survive the conversion. Monthly looks stronger as a clock and is not stronger as a yield here. Q has the higher effective rate.`,
    4: `$\\ln 2 / \\ln 1.467 \\approx 1.81$, not $2$, so a doubling wait is about $1.81$ times $76.8$ months, which is $139$ months, not $154$. Twice the money from $\\$15,000$ is $\\$30,000$, a factor of $2$. The original target was a factor of $1.467$. Logs of those factors are not in the ratio $2:1$. The second stretch rides on a larger balance, so it takes less than twice as long.`,
  },
});
console.log("padded 11-20 final");
