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

apply("textbook/output/_rev/ch11/01_10.json", {
  "math-11-3": {
    3: `Frequency is a lever, not a trump card. Offer (i) really does pay four times a year, and Offer (ii) pays only twice. That fact is already in the stem. It does not decide the ranking once the quotes differ by a tenth of a point.

A saver who believed "more dates always win" would have taken Offer (i) without converting either quote. That is the mix-up. The recovered pair is $6.55\\%$ against $6.61\\%$. The extra $0.10$ points on Offer (ii) outweigh Offer (i)'s two extra intra-year credits.

What would have to change for the opposite verdict is a shared nominal rate. If both offers quoted $6.4\\%$, quarterly compounding would beat semi-annual compounding. The stem does not share the rate. Offer (ii) quotes $6.5\\%$.

On $\\$10,000$ the $0.06$ point effective gap is about $\\$6$ of extra interest. Small, but it is still a ranking. "Must" is the word that fails. Frequency can lose when the printed quote is lower.`,
  },
  "math-11-7": {
    0: `Fifteen point five six percent is $(1.075)^{2} - 1$, already in Part 3. On a $\\$1,000$ thought experiment that is $\\$155.60$ of interest against $\\$150$ once a year. The extra $\\$5.60$ is the second 7.5% credit riding on the first.

A solver who reported $15\\%$ even would be naming the nominal quote, not the semi-annual conversion. A solver who reported $16.08\\%$ would be answering letter C's monthly clock. This letter is only the $n = 2$ yield.`,
    1: `Fifteen point eight seven percent sits $0.31$ of a point above the semi-annual $15.56\\%$. That $0.31$ is letter E's first gap. On $\\$1,000$ it is about $\\$3.10$ more than two credits a year.

Leaving $R$ at $15\\%$ would erase all intra-year compounding. Jumping to $16.08\\%$ would skip the quarterly stop. The recovered quarterly yield is $15.87\\%$.`,
    2: `Sixteen point zero eight percent is the strongest of the three finite clocks at this 15% quote. Continuous compounding would sit a little higher still, near $16.18\\%$, but the stem stops at monthly.

On $\\$1,000$ monthly 15% produces about $\\$160.80$ of interest, $\\$2.10$ more than quarterly. This letter names that monthly yield. Letters D and E compare the three recovered figures. They do not rebuild $(1.0125)^{12}$.`,
  },
  "math-11-8": {
    2: `Seven thousand two hundred seventy-seven dollars and sixty cents is $4,500$ times the recovered ten-year factor. Booking $\\$9,000$ would be a doubling that letter D will reject. Booking $\\$7,500$ would be simple 6% for ten years, about $\\$222$ too high. The recovered monthly path is $\\$7,277.60$.`,
  },
  "math-11-9": {
    0: `Five point nine two percent quarterly is the unique nominal quote that turns $\\$50,000$ into $\\$80,000$ in 32 quarters. A 6% guess would overshoot. A 5% guess would undershoot. The recovered $r \\approx 5.92\\%$ is already in Part 3. This letter names that quote.`,
    4: `Sixty percent is $(80,000 - 50,000)/50,000$. The cutoff is $65\\%$. The miss is five full points, not a rounding of $60$ to $65$. Treating the growth *factor* $1.60$ as $160\\%$ growth would clear $65\\%$ by counting the original principal as gain. Growth is the factor minus one.`,
  },
  "math-11-10": {
    1: `Ten point eight one percent is option (b)'s monthly conversion of $10.3\\%$. On a $\\$1,000$ unpaid balance that is about $\\$108$ of true annual cost. Naming $10.3\\%$ even would be the nominal quote, not the effective cost. Letter A already ranked the two options. This letter only names (b)'s $R$.`,
    2: `A lower printed quote can still be the more expensive loan once frequency is converted. Option (b) quotes $10.3\\%$ monthly. Option (a) quotes $10.4\\%$ quarterly. After conversion, (a) is slightly cheaper. "Must" is the word that fails. The recovered ranking does not follow the printed quotes.`,
  },
});

apply("textbook/output/_rev/ch11/11_20.json", {
  "math-11-12": {
    2: `Forty-eight months is four years of 0.50% a month. The recovered wait is $81.30$ months, more than 33 months longer. A four-year calendar would leave the pot at about £5,082, still £918 short of £6,000.

The mix-up is treating a factor of $1.5$ as if it arrived in four years at 6% simple interest. The stem compounds monthly at 0.50%. The logarithm that hits £6,000 is $81.30$, not $48$.`,
    4: `One hundred months is a round companion near $81.30$, not the inversion itself. At month 100 the pot is about £6,587, a £587 overshoot of the goal. Safety-margin calendars are a different target.

"Exactly 100" would need a different monthly rate or a different goal. Under 0.50% a month, $\\ln(1.5)/\\ln(1.005)$ is $81.30$. Extra months produce extra money, not a rounding of the same date.`,
  },
  "math-11-13": {
    2: `Twenty thousand eight hundred sixty-eight dollars and twenty-six cents is the daily year-end on $\\$20,000$. Annual 4.25% would have left $\\$20,850$, missing $\\$18.26$ of daily extra. Booking $\\$20,850$ is that weaker clock.

The cents, $26$, match Part 3. They are not a table ornament. For the opposite verdict the principal or the quote would have to change. Under the stem, one year of 4.25% daily is $\\$20,868.26$.`,
    4: `Daily 4.25% converts to about $4.34\\%$, a $0.09$ point lift. The cutoff is $0.20$ points, more than twice that lift. Continuous compounding at the same quote is still about $4.34\\%$. No clock at 4.25% clears a fifth of a point of premium.

Rounding $0.09$ to $0.1$ still misses $0.20$. A 9% quote would produce a larger lift. The stem is $4.25\\%$.`,
  },
  "math-11-14": {
    2: `Effective equals nominal only when $n = 1$. The card's $n = 12$. Calling $25.34\\%$ the same as $22.80\\%$ erases $2.54$ points of true annual cost. A cardholder who budgeted $22.80\\%$ would understate the year by more than two points.

On $\\$3,000$ that erased extra is about $\\$76$. Letter D will test a $\\$3,684$ companion that uses the nominal rate once. This letter is the identity claim, and it fails.`,
    3: `Three thousand six hundred eighty-four dollars is $3,000 \\times 1.228$, one nominal year. The recovered balance is $\\$3,760.22$. The extra $\\$76$ is twelve monthly charges of $1.9\\%$, not a fee on top of the model.

Booking $\\$3,684$ is answering a once-a-year clock the card does not use. The claim named $\\$3,684.00$. The recovered monthly path is higher.`,
  },
  "math-11-15": {
    0: `Ten point two five percent is exact: $(1.05)^{2} = 1.1025$. On $\\$1,000$ that is $\\$102.50$ of interest against $\\$100$ annually. Every later ranking in this task uses $10.25\\%$ as the left-hand figure.

Annual compounding would have left $10\\%$. Two credits are what lift it. A solver who reported $10.38\\%$ would be answering letter B. This letter is only the semi-annual yield.`,
    1: `Ten point three eight percent sits $0.13$ of a point above $10.25\\%$. On $\\$1,000$ that is about $\\$1.31$ more than the semi-annual clock. That $0.13$ is letter E's first gap.

Adding $4 \\times 2.5\\%$ would erase compounding and return $10\\%$. The recovered quarterly yield is $10.38\\%$. This letter names that figure.`,
    2: `Ten point four seven percent sits $0.09$ above quarterly and about $0.05$ below $e^{0.10} - 1 \\approx 10.52\\%$. Monthly at 10% is already near the ceiling. On $\\$1,000$ the extra over quarterly is about $\\$0.90$.

This letter names the monthly yield $10.47\\%$. Letter D will rank the three. Letter E will compare the two jumps.`,
  },
  "math-11-16": {
    0: `Five point zero one percent a year for 80 years really is about fifty-fold. That is the eightieth root, not $50/80$ and not $6.25\\%$. Letters C through E will change the multiple or the horizon.

This letter is the original inversion. Rounding $0.05012$ to $5.01\\%$ is the approximation the claim uses. A 5% even path would land a little short of $50$ after 80 years.`,
    1: `A $6.25\\%$ path for 80 years produces a factor near $128$, more than twice the target of $50$. Linear shortcuts overshoot the economist's question. The eightieth root is $5.01\\%$.

Naming $6.25\\%$ is $50/80$, a simple-growth cousin. Compound growth takes roots, not quotients. The claim fails by that linear mix-up.`,
    3: `Double the time squares the multiple: $50^{2} = 2,500$, not $100$. A factor of $100$ at $5.01\\%$ arrives near year $93$, not year $160$. The claim confused doubling the calendar with doubling the multiple.

Those are different operations on an exponential. $160$ years at $5.01\\%$ is $50^{2}$, a 2,500-fold path, far past $100\\times$.`,
    4: `Forty years at $5.01\\%$ produces $\\sqrt{50} \\approx 7.07$, not $50$. Hitting $50$ in 40 years needs about $9.65\\%$ a year. Half the calendar is a harder annual job, not a slower one.

The recovered 40-year rate is higher than $5.01\\%$. "Lower" has the direction backwards. Less time for the same multiple needs more growth per year.`,
  },
  "math-11-17": {
    0: `Eighty-four monthly discounts at 5% pull $\\$25,000$ back to $\\$17,629.99$. Depositing the full bill would lock up $\\$7,370$ too much. Annual 5% would have needed about $\\$17,760$, over-depositing by about $\\$130$.

The recovered Account X amount is $\\$17,629.99$. This letter names that present value. Letter B will put Y a little lower.`,
    1: `Twenty-eight quarterly discounts at 5.10% pull the same bill back to $\\$17,534.28$, about $\\$96$ below X. That $\\$96$ is letter C's ranking in dollars. Reusing X's $\\$17,630$ in Y would ignore Y's higher quote.

The recovered Account Y amount is $\\$17,534.28$. The cents, $28$, match the quarterly product.`,
    2: `X compounds more often and still needs more today. Y's extra $0.10$ point of nominal rate is worth more than X's extra eight dates per year over seven years. If both quoted 5.00%, monthly X would need less.

Under the stem, Y quotes 5.10% and needs less. "Smaller upfront" for X is the ranking reversed.`,
    3: `Effective rates of $5.20\\%$ and $5.12\\%$ differ by $0.08$ of a point, which is the $\\$96$ present-value gap on this bill. Close rates still pick a winner. Monthly compounding does not give X the higher yield, because the quotes differ.

The recovered pair favors Y. This letter is that yield ranking, already in Part 3.`,
  },
  "math-11-18": {
    1: `Thirty-six quarterly discounts at 4.4% pull $\\$60,000$ back to $\\$40,467.83$. Annual 4.4% would have needed about $\\$40,700$. Depositing $\\$45,000$ would be using letter C's cutoff as the answer.

The recovered opening investment is $\\$40,467.83$. This letter names that present value.`,
    2: `More than $\\$45,000$ would mean a nine-year factor weaker than $1.333$. The recovered factor is $1.4827$, which pulls the deposit to $\\$40,468$, about $\\$4,532$ below the cutoff. Rounding $\\$40,468$ to $\\$40,000$ still sits below $\\$45,000$.

The present value is less than $\\$45,000$, not more. The claim has the comparison backwards.`,
    4: `Interest of more than $\\$20,000$ would need an opening amount below $\\$40,000$. The recovered opening amount is $\\$40,467.83$, so interest is $\\$19,532.17$. Rounding the deposit to $\\$40,000$ would manufacture a $\\$20,000$ interest figure the cents do not support.

The cutoff fails by about $\\$468$ of extra deposit, which is $\\$468$ of missing interest.`,
  },
  "math-11-19": {
    0: `CD1's $6.49\\%$ is the weakest converted yield. On $\\$20,000$ that is $\\$1,297$ of interest, $\\$38$ more than a once-a-year 6.30% credit and about $\\$14$ less than CD2. Monthly compounding does work, just not enough to overtake 6.40% quarterly.

This letter names $6.49\\%$. Letter D will put CD1 last on both printed and converted rankings.`,
    1: `CD2's $6.55\\%$ is the figure CD3 will match and CD1 will fail to match. Quarterly 6.40% produces a yearly yield a hundredth above CD1. That is why the three certificates are closer than the printed quotes look.

This letter names $6.55\\%$ for CD2. On $\\$20,000$ that is about $\\$1,311$ of interest.`,
    2: `CD3's unrounded $R$ differs from CD2's by $0.000007$, less than a cent on $\\$20,000$. Ranking $6.45 > 6.40$ on the page is ranking a tie after conversion. Frequency on CD2 closes the $0.05$ point nominal hole.

At published precision they are the same $6.55\\%$. This letter is that tie.`,
    3: `Lowest nominal and lowest effective is a double last-place finish. The printed hole of $0.10$ to $0.15$ points is too large for monthly compounding to fill. Ranking by frequency would put CD1 first. Ranking by $R$ puts CD1 last at $6.49\\%$ against two $6.55\\%$ figures.

The recovered ranking matches the claim.`,
    4: `Thirteen dollars and sixty-one cents is a $0.068$ point effective gap on $\\$20,000$, not a $0.10$ point nominal gap. Expecting $\\$20$ of extra interest from the printed quotes overstates the advantage by about $\\$6$. The recovered extra is still about $\\$13.61$, and CD2 still beats CD1.

That $\\$13.61$ is the dollar image of letter A's $6.49\\%$ against letter B's $6.55\\%$.`,
  },
  "math-11-20": {
    0: `Seventy-six point eight months is $6.40$ years of monthly 6% from $\\$15,000$ to $\\$22,000$. Account Q will beat this wait by about a month and a half. This letter only names M's inversion, $t_M \\approx 76.81$ months rounded to $76.8$.

A solver who reported $72$ months would be a six-year guess. The logarithm is $76.8$, not $72$.`,
    1: `Same target and same start do not imply the same wait when quotes and clocks differ. $R_Q \\approx 6.29\\%$ against $R_M \\approx 6.17\\%$ is not a tie, so $6.28$ years against $6.40$ years is not the same amount of time.

Close is not equal. Q arrives first. Naming the same wait erases that $0.12$ point effective gap.`,
    2: `Q really does compound less often. It still arrives first, because it quotes $6.15\\%$ against M's $6.00\\%$. "Must take longer" is true at a shared nominal rate. The stem does not share the rate.

Q's extra $0.15$ points outweigh M's extra monthly dates. Frequency is a lever, not a trump card.`,
    3: `M converts 6.00% monthly to about $6.17\\%$. Q converts 6.15% quarterly to about $6.29\\%$. The extra printed $0.15$ points survive the conversion. Monthly looks stronger as a clock and is not stronger as a yield here.

Q has the higher effective rate. The claim reversed the ranking.`,
  },
});
console.log("padded fix 01-20");
