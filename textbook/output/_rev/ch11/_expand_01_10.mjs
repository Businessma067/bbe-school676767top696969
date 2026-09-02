import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

const patches = {
  "math-11-2": [
    `**A) The quarterly periodic rate is 2.00%.**  (true)

The 8% quote on this six-year deposit is a nominal annual rate with interest paid four times a year. That is a split across the four quarterly dates, not a compounding calculation yet. Part 3.1 recovered that split as $i = 2.00\\%$. This letter is reading that recovered quarterly rate.

**1.** The trap is treating $8\\%$ itself as the amount credited each quarter, as if the bank paid the whole annual quote four times. That would be four times too large. Another wrong split is $8/12$, as if the account were monthly. The stem says quarterly, so $n = 4$.

**2.** A third mix-up is $8/6$, dividing by the six-year horizon instead of by the number of interest dates in a year. Time to maturity is the exponent later. It is not the denominator of the periodic rate.

**3.** Every later letter on this deposit uses $i = 0.02$. Getting the split right is what lets the 24-quarter growth factor and the six-year balance come out as they do in Parts 3.2 through 3.4.

The recovered quarterly rate is $2.00\\%$, so the statement is True.`,

    `**B) The number of quarterly periods over 6 years is 24.**  (true)

The exponent in a compound formula counts interest dates, not calendar years. Six years of quarterly credits is four dates a year times six years. Part 3.1 recovered $nt = 24$. This letter is reading that count.

**1.** The trap is using $t = 6$ as the exponent, as if interest were paid once a year. That would leave the deposit short of the true six-year balance, because twelve of the twenty-four credits would be ignored.

**2.** Another wrong count is $6 \\times 12 = 72$, treating the account as monthly. The stem pays quarterly. Twelve months are not twelve interest dates here.

**3.** The 24-period exponent is what Part 3.2 raises $1.02$ to. If the count were 6 or 12, the recovered $\\$9,650.61$ would not appear.

The recovered number of quarters is $24$, so the statement is True.`,

    `**C) The balance after 6 years is approximately \\$9,860.00.**  (false)

The owner wants the six-year balance on the $\\$6,000$ deposit at 8% paid quarterly. That future value is not a new conversion. Part 3.2 already compounded the recovered $i = 0.02$ through the recovered $24$ quarters and left $S(6) \\approx 9,650.61$. This letter is reading that product against the printed $\\$9,860.00$.

The claimed figure sits about two hundred dollars above the recovered balance. The gap is

$$9,860.00 - 9,650.61 = 209.39$$

so the wording overstates the account by $\\$209.39$.

**1.** A rushed solver who multiplied $\\$6,000$ by $1.08^6$ would be using annual compounding at the same 8% quote. That is a different clock from the stem. Annual compounding at a fixed nominal rate is weaker than quarterly compounding, so it cannot be the source of a figure *above* $\\$9,650.61$. The $\\$9,860$ guess is not that weaker schedule either.

**2.** Another mix-up is $6,000 \\times 1.08 \\times 6$, a simple-interest product that ignores compounding entirely and also ignores that interest is paid quarterly. That linear shortcut overshoots even more. The recovered $\\$9,650.61$ already includes the intra-year credits. It does not need to be rebuilt from $(1.02)^{24}$.

**3.** The cents on the overview's $9,650.61$ are the rounding of $6,000 \\times 1.608435$. Rounding to the nearest ten dollars would still be $9,650$, not $9,860$. The claimed two-dollar ending is not a rounding of the recovered balance.

For the opposite verdict the six-year product would have to land near $\\$9,860$. That would take a higher quote, a longer horizon, or a larger opening deposit than the stem gives. None of those is on the page.

The recovered six-year balance is $\\$9,650.61$, not $\\$9,860.00$, so the statement is False.`,

    `**D) If the deposit were left for only 3 years instead of 6, the future value would be exactly half of the 6-year future value.**  (false)

The claim is a new horizon, not a reread of $S(6)$. It asks whether cutting the wait in half cuts the *balance* in half. Compound growth is exponential in time, so the dollars do not scale that way. Part 3.2 recovered $S(6) \\approx 9,650.61$. Half of that six-year figure would be

$$\\frac{9,650.61}{2} \\approx 4,825.31$$

Part 3.3 already ran the same quarterly rate for three years, twelve quarters, and left $S(3) \\approx 7,609.45$. That three-year balance is not $\\$4,825.31$.

The comparison that actually answers the claim is

$$7,609.45 > 4,825.31$$

The three-year account is larger than half of the six-year account by about $\\$2,784$.

**1.** Why the linear split fails: after three years the owner already has the original $\\$6,000$ plus about $\\$1,609$ of interest. The second three years then compound on that larger base, not on a fresh $\\$6,000$. Halving the calendar does not halve the dollars, because the second half of the life rides on a bigger principal.

**2.** A related trap is thinking the *interest* halves. Three-year interest is about $7,609.45 - 6,000 = 1,609.45$. Six-year interest is about $3,650.61$. Half of the six-year interest would be $1,825.30$, which is not the three-year interest either. Even the interest column refuses the linear split.

**3.** The opposite verdict would need simple interest, where the dollar gain is proportional to time. The stem pays compound interest quarterly. Under that model, $S(3)$ sits well above $S(6)/2$, and $S(6)$ sits well below $2 \\times S(3)$.

The recovered three-year balance is $\\$7,609.45$, not half of $\\$9,650.61$, so the statement is False.`,

    `**E) The total percentage growth of the deposit over the 6 years is more than 65%.**  (false)

Total percentage growth is the dollar gain over the original $\\$6,000$, not the six-year balance itself and not the 8% quote. Part 3.2 recovered $S(6) \\approx 9,650.61$. Part 3.4 already turned that into a growth rate of $60.84\\%$. This letter only asks whether that recovered growth clears a $65\\%$ cutoff.

The gap against the cutoff is

$$65\\% - 60.84\\% = 4.16$$

so the deposit is $4.16$ percentage points short of $65\\%$.

**1.** A solver who compared the *balance* $9,650.61$ with $65$ as if those were like units would not even have a percentage to test. The claim is a growth rate. Another trap is reading the nominal $8\\% \\times 6 = 48\\%$ simple-interest total, which undershoots both $60.84\\%$ and $65\\%$. Simple interest is the wrong clock.

**2.** A third mix-up is treating the growth factor $1.608435$ as $160.84\\%$ growth. That would double-count the original principal as if it were part of the gain. Growth is the factor minus one, $60.84\\%$, which is what Part 3.4 reported.

**3.** Clearing $65\\%$ would need either a higher quote or a longer wait than six years at 8% quarterly. The recovered $60.84\\%$ is the right side of the comparison, and it does not clear the cutoff.

The recovered six-year growth is $60.84\\%$, which is not more than $65\\%$, so the statement is False.`,
  ],
};

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

for (const t of arr) {
  if (patches[t.id]) {
    if (patches[t.id].length !== 5) throw new Error("bad length " + t.id);
    t.tactical_explanations = patches[t.id];
  }
}

fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");

for (const t of arr) {
  if (!patches[t.id]) continue;
  const wcs = t.tactical_explanations.map(wc);
  console.log(t.id, wcs.join(", "));
}
