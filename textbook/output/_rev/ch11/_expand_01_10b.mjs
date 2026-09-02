import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

const patches = {
  "math-11-3": [
    `**A) The effective annual rate of Offer (i) is approximately 6.55%.**  (true)

The saver is comparing two one-year term deposits, and Offer (i) is the 6.4% quote with interest paid quarterly. The effective annual rate is the single yearly yield that reproduces those four quarterly credits. Part 3.2 recovered that yield as $R_i \\approx 6.55\\%$. This letter is reading that conversion, not rebuilding $(1.016)^{4}$.

The extra against the printed 6.4% is interest-on-interest inside the year:

$$6.55\\% - 6.40\\% = 0.15$$

so quarterly crediting lifts the quote by about $0.15$ of a point.

**1.** A solver who reported the nominal $6.4\\%$ as if it were already effective would understate Offer (i) by that $0.15$ point. The stem pays quarterly, so the printed quote is not the yearly yield.

**2.** Another trap is compounding $6.4\\%$ four times without first splitting it, as if each quarter credited the full annual rate. That would explode the yield. The overview's $i = 0.016$ is the split that Part 3.1 already made.

**3.** Rounding $0.065533$ to $6.55\\%$ is the approximation the claim uses. It is not $6.40\\%$ and not $6.50\\%$. Letter C will rank this $6.55\\%$ against Offer (ii). This letter only asks for Offer (i)'s own effective rate.

The recovered effective rate on Offer (i) is about $6.55\\%$, so the statement is True.`,

    `**B) The effective annual rate of Offer (ii) is approximately 6.61%.**  (true)

Offer (ii) is the 6.5% quote with interest paid twice a year. The effective annual rate is the single yearly yield that reproduces those two semi-annual credits. Part 3.4 recovered that yield as $R_{ii} = 6.61\\%$. This letter is reading that conversion.

The extra against the printed 6.5% is

$$6.61\\% - 6.50\\% = 0.11$$

so two intra-year credits lift the quote by about $0.11$ of a point, a little less than the $0.15$ point lift on Offer (i). Offer (ii) starts from a higher nominal quote, so even with the smaller lift it still finishes ahead. That ranking is letter C. Here the question is only whether the semi-annual conversion is about $6.61\\%$.

**1.** The trap is leaving the yield at the printed $6.5\\%$, as if twice-a-year crediting did not produce interest-on-interest. The overview's $0.066056$ is that extra, already computed.

**2.** Another mix-up is treating Offer (ii) as quarterly because "twice a year" was misread as "every quarter." Semi-annual means $n = 2$, and Part 3.3 already split $6.5\\%$ as $i_{ii} = 0.0325$. Rebuilding $(1.0325)^{2}$ is not this letter's job.

**3.** Rounding $0.066056$ to $6.61\\%$ is the claim's approximation. A table that stopped at $6.60\\%$ would be the same hundredth, but the printed claim is $6.61\\%$, which matches the recovered $6.61\\%$.

If compounding had been annual, the effective rate would have stayed $6.50\\%$. Two credits a year are what lift it to $6.61\\%$.

The recovered effective rate on Offer (ii) is about $6.61\\%$, so the statement is True.`,

    `**C) Offer (ii) is the better choice for the saver.**  (true)

The better one-year offer is the one with the higher effective annual rate, because both deposits start from the same $\\$10,000$ and last one year. Part 3.2 recovered $R_i \\approx 6.55\\%$. Part 3.4 recovered $R_{ii} \\approx 6.61\\%$. Part 3.5 already ranked them:

$$6.61\\% > 6.55\\%$$

Offer (ii) is the stronger yield. On the $\\$10,000$ principal that ranking is also a dollar ranking. Part 3.7 recovered $\\$660.56$ of interest on Offer (ii) against Part 3.6's $\\$655.33$ on Offer (i). The extra is

$$660.56 - 655.33 = 5.23$$

so the saver who takes Offer (ii) finishes about $\\$5.23$ ahead.

**1.** The trap is choosing Offer (i) because it compounds more often. Frequency raises the effective rate only when the *nominal* quote is held fixed. Here the quotes differ: $6.4\\%$ quarterly against $6.5\\%$ semi-annually. The extra compounding dates on Offer (i) do not make up the $0.10$ point hole in the printed quote.

**2.** Another mix-up is comparing the printed 6.5% with 6.4% and stopping, which happens to pick the right offer for the wrong reason. The right reason is the effective-rate ranking, not the nominal ranking. Letter D is the frequency fallacy. This letter is the ranking itself.

**3.** For the opposite verdict, Offer (i)'s effective rate would have to finish above $6.61\\%$. That would take a higher quarterly quote, or the same $6.5\\%$ paid quarterly instead of semi-annually. The stem does not give that.

The recovered ranking is $6.61\\% > 6.55\\%$, so Offer (ii) is the better choice and the statement is True.`,

    `**D) Because Offer (i) compounds more frequently, it must have the higher effective rate.**  (false)

Frequency is not a free lunch. Extra compounding dates raise the effective yield only when the nominal quote is held fixed. Here the quotes are different, and the more frequent schedule is the one with the *lower* printed rate. Part 3.2 recovered $R_i \\approx 6.55\\%$. Part 3.4 recovered $R_{ii} \\approx 6.61\\%$. The ranking is

$$6.55\\% < 6.61\\%$$

so Offer (i)'s four quarterly credits do not produce the higher effective rate.

**1.** The wording treats "more often" as a trump card. It would be a trump card if both offers quoted 6.4%, or both quoted 6.5%. At a shared nominal rate, quarterly compounding beats semi-annual compounding. The stem does not share the nominal rate. Offer (ii) starts $0.10$ of a point higher, and that gap survives the conversion.

**2.** A rushed solver who converted only Offer (i) and then assumed the extra dates must win would never look at $R_{ii}$. The overview already looked. The $0.06$ point edge for Offer (ii) is small, but it is the wrong direction for this claim.

**3.** The opposite verdict would need either equal nominal rates, or a quarterly quote high enough that $(1 + r_i/4)^{4} - 1$ clears $6.61\\%$. Holding the printed 6.4% and 6.5% fixed, more frequent compounding on the cheaper quote is not enough.

Letter C asked which offer is better. This letter asks whether frequency alone forces that ranking. It does not. The recovered pair is $6.55\\%$ against $6.61\\%$, and the more frequent offer is the weaker one.

Because Offer (i) does not have the higher effective rate, the statement is False.`,

    `**E) Depositing \\$10,000 for one year, Offer (ii) would produce more than \\$660 in interest.**  (true)

Interest on a one-year deposit is principal times the effective annual rate. Part 3.7 already applied Offer (ii)'s recovered $R_{ii} \\approx 0.066056$ to $\\$10,000$ and left $I_{ii} = 660.56$. This letter only asks whether that interest clears a $\\$660$ cutoff.

The gap against the cutoff is

$$660.56 - 660 = 0.56$$

so Offer (ii) clears $\\$660$ by fifty-six cents.

**1.** A solver who used the nominal 6.5% as if it compounded once would get $10,000 \\times 0.065 = 650$, which sits $\\$10$ *below* the cutoff. That is the annual-compounding companion, not Offer (ii). The extra $\\$10.56$ is the intra-year compounding on the 6.5% quote.

**2.** Another trap is comparing Offer (i)'s $\\$655.33$ with $\\$660$ and then attaching that miss to Offer (ii). Offer (i) does fall short of $\\$660$. Offer (ii) does not. The claim is about Offer (ii) only.

**3.** Rounding $660.56$ to the nearest dollar is $661$, which still clears $660$. Rounding down to $660$ even would be a tie, not a miss, and the recovered figure is $660.56$, which is strictly more.

For the opposite verdict the recovered interest would have to sit at or below $\\$660$. That would take a smaller principal or a weaker effective rate than $6.61\\%$. The stem's $\\$10,000$ at $R_{ii} \\approx 6.61\\%$ clears the cutoff.

The recovered interest on Offer (ii) is $\\$660.56$, so the statement is True.`,
  ],

  "math-11-4": [
    `**A) The nominal annual rate, quoted as 12 times the monthly rate, is 22.00%.**  (false)

A retail card that charges $1.75\\%$ a month has a nominal annual rate of twelve times that monthly charge, with no compounding built in. Part 3.1 recovered $r_{\\mathrm{nom}} = 21.00\\%$. The claim is $22.00\\%$, a full point too high.

The gap is

$$22.00\\% - 21.00\\% = 1.00$$

so the wording overstates the nominal quote by one percentage point.

**1.** The trap is $12 \\times 1.75 = 21$ computed correctly and then rounded up to $22$, or a slip to $12 \\times 1.833$. Twelve times $1.75$ is exactly $21$, not $22$.

**2.** Another mix-up is confusing the nominal quote with the effective annual rate. The effective rate is higher than $21\\%$ because of monthly compounding. It is not $22\\%$ either. Letter B takes that conversion. This letter is only the twelvefold multiple.

**3.** For the opposite verdict the monthly charge would have to be $22/12 \\approx 1.833\\%$. The stem charges $1.75\\%$ a month.

The recovered nominal rate is $21.00\\%$, not $22.00\\%$, so the statement is False.`,

    `**B) The effective annual rate of interest is approximately 21.75%.**  (false)

The effective annual rate is the yearly yield that reproduces twelve monthly charges of $1.75\\%$. Part 3.2 already compounded that monthly rate and left $R \\approx 23.14\\%$. The claim is $21.75\\%$, which sits near the nominal $21.00\\%$ rather than at the recovered effective rate.

The gap against the recovered yield is

$$23.14\\% - 21.75\\% = 1.39$$

so the wording understates the card's true annual cost by about $1.39$ points.

**1.** $21.75\\%$ looks like $21.00\\%$ plus a small garnish, as if someone added three-quarters of a point by hand instead of compounding. Monthly interest-on-interest at $1.75\\%$ a month is more than a $0.75$ point garnish. The overview's $23.14\\%$ is that compounding.

**2.** A solver who reported the recovered nominal $21.00\\%$ as if it were already effective would also miss, though in a different direction. The claim's $21.75\\%$ is neither the nominal $21.00\\%$ nor the effective $23.14\\%$.

**3.** Rebuilding $(1.0175)^{12}$ is not this letter's job. Part 3.2 already did that conversion. This letter only asks whether the recovered $23.14\\%$ is approximately $21.75\\%$. It is not.

The opposite verdict would need the twelve-month yield to land near $21.75\\%$. That would take a smaller monthly charge than $1.75\\%$. The stem's charge produces about $23.14\\%$.

The recovered effective rate is about $23.14\\%$, not $21.75\\%$, so the statement is False.`,

    `**C) An unpaid balance of \\$2,000 would grow to \\$2,420.00 after one year of accruing interest this way.**  (false)

An unpaid $\\$2,000$ grows by the same twelve-month factor that Part 3.2 recovered. Part 3.3 already applied that factor and left $FV \\approx 2,462.86$. The claim is $\\$2,420.00$.

The gap is

$$2,462.86 - 2,420.00 = 42.86$$

so the wording understates the year-end balance by about $\\$43$.

**1.** $\\$2,420$ is exactly $2,000 \\times 1.21$, the nominal $21\\%$ applied once. That is annual compounding at the nominal quote, not twelve monthly charges of $1.75\\%$. The extra $\\$42.86$ is the intra-year compounding the card actually charges.

**2.** A solver who used the false $22\\%$ from letter A would get $2,000 \\times 1.22 = 2,440$, which is still not $\\$2,462.86$ and still not the claim. The claim is the once-a-year nominal product.

**3.** The recovered cents, $86$, come from $2,000 \\times 1.231430$. Rounding to the nearest ten dollars would still be $2,460$, not $2,420$. The claimed figure is not a rounding of the recovered balance.

For the opposite verdict the unpaid balance would have to grow at the nominal rate with no monthly compounding. The stem charges $1.75\\%$ a month, so the year-end figure is $\\$2,462.86$, not $\\$2,420.00$.

The recovered one-year balance is $\\$2,462.86$, so the statement is False.`,

    `**D) The effective annual rate exceeds the nominal annual rate by more than 2.00 percentage points.**  (true)

The gap the claim asks for is effective minus nominal. Part 3.1 recovered $r_{\\mathrm{nom}} = 21.00\\%$. Part 3.2 recovered $R \\approx 23.14\\%$. Part 3.4 already subtracted them and left $2.14$ percentage points.

That distance against the $2.00$-point cutoff is

$$2.14 - 2.00 = 0.14$$

so the premium clears two points by $0.14$ of a point.

**1.** At a $21\\%$ nominal rate with monthly compounding, the exponential and its linear approximation are no longer close. A $1.75\\%$ monthly charge is large enough that interest-on-interest over twelve months adds more than two points. That is the opposite of a modest single-digit quote, where the gap might be a quarter-point.

**2.** The trap is reading $23.14$ against $22.00$, using the false nominal from letter A, which would leave only about $1.14$ points and miss the cutoff. The recovered nominal is $21.00\\%$, and $23.14 - 21.00 = 2.14$.

**3.** Another mix-up is treating $0.2314 - 0.21 = 0.0214$ as $0.214$ points instead of $2.14$ points, a decimal-place slip that would fail the cutoff. The comparison is in percentage points.

Letter B recovered the $23.14\\%$. Letter A recovered the $21.00\\%$. This letter only asks how far $23.14$ sits above $21.00$. The distance is $2.14$ points, which is more than $2.00$.

The recovered gap is $2.14$ points, so the statement is True.`,

    `**E) If the monthly rate were instead 1.50%, the effective annual rate would still exceed 20%.**  (false)

This letter swaps the monthly charge. The hypothetical is a new conversion, not a reread of $23.14\\%$. Part 3.5 already rebuilt the yearly yield at $1.50\\%$ a month and left $R \\approx 19.56\\%$.

The gap against the $20\\%$ cutoff is

$$20\\% - 19.56\\% = 0.44$$

so the hypothetical effective rate sits $0.44$ of a point short of $20\\%$.

**1.** A solver who annualized $1.50\\%$ without compounding would get a nominal $18.00\\%$, which also misses $20\\%$, but that is the wrong object. The claim is about the *effective* rate. The overview's $19.56\\%$ is that effective rate, and it still misses.

**2.** Another trap is keeping the original $23.14\\%$ and asking whether *that* exceeds $20\\%$. Of course it does, but the claim replaced the monthly charge. The $1.75\\%$ card is not this letter.

**3.** Clearing $20\\%$ at monthly compounding would need a monthly rate a little above $1.53\\%$. The stem's hypothetical is $1.50\\%$, which produces about $19.56\\%$.

The opposite verdict would hold if the cutoff were $19\\%$, or if the monthly charge stayed at $1.75\\%$. Neither is this claim. At $1.50\\%$ a month the recovered effective rate is $19.56\\%$, which does not exceed $20\\%$.

The recovered hypothetical yield is about $19.56\\%$, so the statement is False.`,
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
  console.log(t.id, t.tactical_explanations.map(wc).join(", "));
}
