import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

const patches = {
  "math-11-5": [
    `**A) The quarterly periodic rate is 1.40%.**  (true)

The clinic's 5.6% quote is a nominal annual rate with interest paid four times a year. That is a split across the four quarterly dates, not a compounding calculation yet. Part 3.1 recovered $i = 1.40\\%$. This letter is reading that split.

**1.** The trap is treating $5.6\\%$ itself as the quarterly credit, or dividing by $12$ as if the account were monthly. The stem says quarterly, so $n = 4$.

**2.** Another wrong split is $5.6/10 = 0.56$, as if there were ten interest dates. Four dates, not ten, not twelve.

**3.** The quarterly rate is the input to the effective-rate and year-end-balance letters. Getting $1.40\\%$ right is what lets $R \\approx 5.72\\%$ and $FV \\approx 15,857.81$ come out as they do in Parts 3.2 and 3.3.

The recovered quarterly rate is $1.40\\%$, so the statement is True.`,

    `**B) The effective annual rate is approximately 5.72%.**  (true)

The effective rate is the single yearly yield that reproduces those four quarterly credits on the clinic's account. Part 3.2 already compounded the recovered $i = 0.014$ through four quarters and left $R \\approx 5.72\\%$. This letter is reading that conversion, not rebuilding $(1.014)^{4}$.

The extra against the printed 5.6% is

$$5.72\\% - 5.60\\% = 0.12$$

so quarterly crediting lifts the quote by about $0.12$ of a point.

**1.** A solver who reported the nominal $5.6\\%$ as if it were already effective would understate the yield by that $0.12$ point. The stem pays quarterly, so the printed quote is not the yearly yield.

**2.** Rounding $0.057187$ to $5.72\\%$ is the approximation the claim uses. It is not $5.60\\%$ and not $5.70\\%$. Letter E asks whether that $0.12$ point gap exceeds $0.20$. This letter only asks for the effective rate itself.

**3.** If compounding had been annual, the effective rate would have stayed $5.60\\%$. Four quarterly credits are what lift it to $5.72\\%$. That comparison with a different frequency is letter D. Here the question is only the quarterly effective rate.

The recovered effective rate is about $5.72\\%$, so the statement is True.`,

    `**C) The balance after one year is approximately \\$15,857.81.**  (true)

Once the four-quarter growth factor is in hand, the year-end balance is the $\\$15,000$ deposit times that factor. Part 3.3 already applied $1.057187$ and left $FV \\approx 15,857.81$. This letter is reading that product, not rebuilding $(1.014)^{4}$.

**1.** A solver who multiplied $\\$15,000$ by $1.056$ instead, using the nominal rate as if it compounded once, would get $\\$15,840$ and miss the extra $\\$17.81$ that the four intra-year credits produce.

**2.** That extra $\\$17.81$ is exactly the dollar gap between quarterly and annual compounding on this principal. Letter D asks which *rate* is stronger under a monthly swap. This letter asks for the quarterly schedule's dollar balance.

**3.** The claim's cents, $81$, match the overview's rounding of $15,000 \\times 1.057187$. A table-lookup that stopped at $15,858$ without cents would still be the same dollar, but the printed claim includes the cents.

The recovered year-end balance is $\\$15,857.81$, so the statement is True.`,

    `**D) If the same nominal rate were instead compounded monthly, the resulting effective annual rate would be lower than under quarterly compounding.**  (false)

With the 5.6% nominal rate held fixed, extra compounding dates can only raise the effective yield. Part 3.2 recovered the quarterly effective rate as $R \\approx 5.72\\%$. Part 3.4 already converted the same 5.6% under monthly compounding and left $R_{\\mathrm{mon}} \\approx 5.746\\%$.

The ranking is

$$5.746\\% > 5.72\\%$$

so monthly is slightly stronger, not weaker.

**1.** The claim has the comparison backwards. At a fixed nominal rate, more frequent compounding is the stronger schedule. Monthly means twelve credits a year against four. Twelve is more frequent than four, so the monthly effective rate sits above the quarterly one.

**2.** The trap is thinking that smaller periodic slices ($5.6/12$ instead of $5.6/4$) must produce a smaller yearly yield. The slices are smaller, but there are more of them, and the extra intra-year compounding more than makes up the smaller slice.

**3.** The opposite verdict would need the *effective* rate held fixed while frequency rose, which is a different quoting convention, or a lower *nominal* rate on the monthly account. The stem holds the nominal 5.6% fixed and only swaps the clock.

The dollar gap on $\\$15,000$ is only a few dollars, but the direction is unambiguous. Monthly compounding at the same quote beats quarterly compounding.

Monthly compounding is stronger here, so the statement is False.`,

    `**E) The gap between the EAR and the nominal rate exceeds 0.20 percentage points.**  (false)

The gap is the quarterly effective rate minus the printed 5.6%. Part 3.2 recovered $R \\approx 5.72\\%$. Part 3.5 already subtracted and left about $0.12$ percentage points.

Against the $0.20$-point cutoff that is

$$0.20 - 0.12 = 0.08$$

so the premium is $0.08$ of a point short of the cutoff.

**1.** At a modest 5.6% quote the exponential and its linear approximation stay close. A $0.20$-point premium would need either a much higher quote or a much more frequent clock than quarterly. Monthly compounding at the same 5.6% only lifts the yield to about $5.75\\%$, a $0.15$ point gap, which still misses $0.20$.

**2.** The trap is reading $5.72$ against $5.00$, or treating $0.72$ as if it were already more than $0.20$ of a point. The comparison the claim asks for is effective minus nominal, $0.12$.

**3.** Letter B recovered the $5.72\\%$. Letter D ranked monthly against quarterly. This letter only asks how far $5.72$ sits above $5.60$. The distance is $0.12$ points, not more than $0.20$.

The recovered gap is about $0.12$ points, so the statement is False.`,
  ],

  "math-11-6": [
    `**A) The monthly periodic rate is 0.60%.**  (true)

A 7.2% nominal quote with monthly compounding is spread evenly over the twelve interest dates. Part 3.1 recovered $i_m = 0.60\\%$. This letter is reading that split, not solving for doubling time yet.

**1.** The trap is treating $7.2\\%$ itself as the monthly rate, or dividing by $365$ as if the bank credited daily. Neither matches a nominal annual rate with $n = 12$.

**2.** Another wrong split is $7.2/10 = 0.72$, as if there were ten months. Twelve interest dates, not ten.

**3.** The monthly rate is the base of the logarithm in every later letter. Getting $0.60\\%$ right is what lets the doubling time come out near $115.85$ months in Part 3.2.

The recovered monthly rate is $0.60\\%$, so the statement is True.`,

    `**B) It takes approximately 108 months for the deposit to double.**  (false)

Doubling means the monthly growth factor raised to $t$ equals $2$. Part 3.2 already inverted that equation at the recovered $i_m = 0.006$ and left $t \\approx 115.85$ months. The claim is $108$ months, about eight months too short.

The gap is

$$115.85 - 108 = 7.85$$

so the wording undershoots the wait by almost eight months.

**1.** $108$ months is nine years exactly. The Rule of $72$ at $8\\%$ would give $72/8 = 9$ years, and $7.2\\%$ is close enough to $8\\%$ that a solver might grab nine years. The Rule of $72$ is a rough annual approximation. It is not the logarithm of $2$ over $\\ln 1.006$.

**2.** Another trap is $72 / 0.60 = 120$ months, applying the Rule of $72$ to the *monthly* rate as if $0.60$ were a percent per year. That overshoots. The claim's $108$ undershoots. Neither is the recovered $115.85$.

**3.** Rebuilding $\\ln 2 / \\ln 1.006$ is not this letter's job. Part 3.2 already did that inversion. This letter only asks whether $115.85$ is approximately $108$. It is not.

The opposite verdict would need a higher monthly rate, so that doubling arrived near nine years. At $0.60\\%$ a month the recovered wait is about $115.85$ months, or $9.65$ years.

The recovered doubling time is about $115.85$ months, not $108$, so the statement is False.`,

    `**C) It would take approximately 58 months for the deposit to double.**  (false)

Part 3.2 recovered a doubling time of about $115.85$ months. Fifty-eight months is roughly half of that, as if someone halved the wait because... there is no good reason. Exponential growth does not reach $2$ at half the doubling time. It reaches $\\sqrt{2}$ there.

Half of $115.85$ is about $57.9$ months, which is where the $58$ likely came from. At that halfway calendar the growth factor is only about $1.415$, a $41.5\\%$ gain, not a doubling. Part 3.3 already flagged that $115.85$ is not $58$.

The gap against the recovered wait is

$$115.85 - 58 = 57.85$$

so the wording is almost a full doubling-time too short.

**1.** The trap is thinking "half the time, half the growth" and then quietly replacing "half the growth" with "doubling in half the time." Half the growth would be a factor of $1.5$, which is not $\\sqrt{2} \\approx 1.414$, and neither of those is a factor of $2$.

**2.** Another mix-up is reading $72 / 1.2$ or some other Rule-of-$72$ fragment that happens to land near $58$. The logarithm does not land there.

**3.** After $58$ months the deposit has not doubled. After $115.85$ months it has. The claim names the halfway calendar as if it were the doubling calendar.

The recovered doubling time is about $115.85$ months, not $58$, so the statement is False.`,

    `**D) If the nominal rate were doubled to 14.4%, the resulting effective annual rate would also be exactly double the original effective annual rate.**  (false)

Effective rates do not scale in proportion to the nominal quote, because the conversion $R = (1 + r/12)^{12} - 1$ is exponential in $r$. Part 3.2's companion at the original 7.2% is the same conversion as math-11-1: $R \\approx 7.44\\%$. Part 3.4 already rebuilt the doubled quote at $14.4\\%$ monthly and left $R \\approx 15.38\\%$.

Twice the original effective rate would be

$$2 \\times 7.44\\% = 14.88\\%$$

The comparison is

$$15.38\\% \\ne 14.88\\%$$

so doubling the nominal quote more than doubles the effective yield. The extra is about $0.50$ of a point.

**1.** The trap is treating the map from nominal to effective as a straight line through the origin. It is convex. Raising $r$ raises both the periodic slice and the interest-on-interest on that slice, so the effective rate accelerates.

**2.** A solver who doubled $7.44\\%$ to $14.88\\%$ and stopped would think the claim was true. The overview's $15.38\\%$ is the actual conversion at $i_m = 0.012$, and it is not $14.88\\%$.

**3.** Letter E says the same logarithm works for any target multiple. That is a statement about $t$, not about scaling $R$ with $r$. This letter is the $R$ against $r$ relationship, and it is not linear.

The opposite verdict would need a linear conversion $R = r$, which holds only for annual compounding. The stem compounds monthly.

The recovered $14.4\\%$ effective rate is about $15.38\\%$, not $14.88\\%$, so the statement is False.`,

    `**E) Because $(1 + \\frac{r}{n})^{t}$ is an increasing function of t, the same logarithmic method used for doubling can be used to find the time needed for any other target growth multiple.**  (true)

The inversion $t = \\ln M / \\ln(1 + i_m)$ never used the number $2$ except as the particular target $M = 2$. Any other multiple $M > 1$ simply swaps in $\\ln M$. Part 3.5 already wrote that general formula.

Because $\\ln(1.006) > 0$, the factor $(1.006)^{t}$ is strictly increasing in $t$. A strictly increasing continuous function hits every value above $1$ exactly once. So every target multiple is reached at exactly one time, and that time is the logarithm in Part 3.5.

**1.** The trap is thinking the method is a doubling-only trick, like the Rule of $72$. The Rule of $72$ is a doubling approximation. The logarithm is an inversion for any $M$.

**2.** Another mix-up is worrying that $M = 1.5$ or $M = 3$ would need a different base than $1.006$. The base is the monthly growth factor, which does not change with the target. Only the numerator $\\ln M$ changes.

**3.** If the growth factor were smaller than $1$, the function would be decreasing and the same algebra would describe a decay time. The stem's $i_m = 0.006$ is positive, so the function increases, and the same method finds any growth multiple.

The recovered method is the general logarithm, so the statement is True.`,
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
