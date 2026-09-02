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

apply("textbook/output/_rev/ch11/21_30.json", {
  "math-11-21": {
    0: `Ms. Delgado's bakery is asking for a year-end book, not a rate conversion. The recovered object is the continuous balance $\\$4,730.72$, already in Part 3. This letter reads that product against the printed claim.

A year-end book that printed $\\$4,500$ would be ignoring interest entirely. A book that printed $\\$4,725$ would be the annual companion from letter C. Neither of those is the continuous path.

What would have to change for the opposite verdict is a different quote or a different clock. Under 5% continuous for one year on $\\$4,500$, the factor $e^{0.05}$ is already in the overview, and the dollars are $\\$4,730.72$.

The story of the stem is a modest bakery deposit. The extra $72$ cents over a round $\\$4,730$ are the rounding of $4,500 \\times 1.051271$. They belong in the book.`,
    1: `Interest of $\\$230.72$ is the gain column, not the balance column. Subtracting the opening $\\$4,500$ from the recovered $\\$4,730.72$ leaves those same $72$ cents. Simple interest would have been $\\$225$, which is letter D's continuous-versus-annual gap sitting in the interest line.

A rushed baker who booked $\\$225$ would be using the once-a-year clock. A baker who booked $\\$230$ even would be dropping the $72$ cents. The claim keeps those cents.

The opposite verdict would need the deposit to earn only $\\$225$, which is annual 5%, not the stem. Continuous compounding is what produces the extra $\\$5.72$ of interest.`,
    2: `The claimed $\\$4,735$ sits $\\$10$ above the true annual $\\$4,725$ and $\\$4$ above even the continuous ceiling $\\$4,730.72$. No 5% clock on $\\$4,500$ for one year can produce $\\$4,735$.

Annual compounding is the weakest clock at a fixed nominal rate, so it cannot overshoot continuous compounding. The recovered annual figure is $\\$4,725.00$. Naming $\\$4,735$ is a slip above the ceiling.

A different wrong figure to name: $4,500 \\times 1.05^{2} \\approx 4,961$, which treats two years as one. The stem is one year. The annual one-year product is $\\$4,725$, not $\\$4,735$.`,
    3: `Five dollars and seventy-two cents is small next to $\\$4,500$, but it is the whole point of quoting continuous compounding instead of annual compounding at the same 5%. Part 3 already subtracted $4,730.72 - 4,725.00$.

A baker who ignored that extra would book the annual clock and would be $\\$5.72$ light. The opposite verdict would need those two balances to match, which happens only at a 0% rate. At 5% the extra is $\\$5.72$.

On a larger deposit the same $0.1271$ point continuous lift would scale. On this $\\$4,500$ it is those five dollars and seventy-two cents.`,
    4: `Four decimal places on $e^{0.05}$ are $1.0513$, not $1.0400$. A factor of $1.0400$ is a 4% story, one full point below the stem. Rounding $1.051271$ to $1.05$ is two decimals. Rounding to $1.0513$ is four.

No conventional rounding drops a hundredth and a half to land on $1.0400$. The recovered factor is $1.051271$. Letter A already applied it to $\\$4,500$. This letter only names the factor itself.

A 4% continuous path would have left about $\\$4,684$. That is letter-E's implied mix-up in dollars. The stem is 5%.`,
  },
  "math-11-22": {
    0: `Six years of 8% continuous on $\\$3,200$ is the exponent $0.48$ and the recovered $\\$5,171.44$. Annual 8% would have left about $\\$5,077$. Simple 8% would have left $\\$4,736$. The extra above those weaker clocks is compound interest, already in Part 3.

Later letters will compare this $\\$5,171.44$ with doubled three-year and twelve-year companions. This letter only names the six-year balance the roaster actually holds.

The cents, $44$, match $3,200 e^{0.48}$. Rounding to the nearest ten dollars would still be $5,170$, not a different model.`,
    1: `Twice $S(3)$ is a linear fantasy on an exponential path. After three years the fund is about $\\$4,068$. The next three years multiply that by $e^{0.24} \\approx 1.271$, producing $S(6) \\approx 5,171$, not $8,136$.

The second three years are more valuable in dollars than a naive half-calendar split, but they are not a second copy of the three-year *balance*. Time enters as an exponent. Doubling $t$ squares the factor applied to $S_0$, and it does not double $S(3)$.

What would have to change is simple interest, where dollar gains scale with time. The stem is continuous compounding.`,
    2: `Twenty-nine dollars of overshoot on a $\\$2,000$ interest claim is a rounded-hundred companion, not the recovered cents. Part 3 kept $\\$1,971.44$. A treasurer who booked $\\$2,000$ would overstate six years of 8% continuous on $\\$3,200$ by about $\\$29$.

Letter A's cents already fix the interest: $5,171.44 - 3,200.00 = 1,971.44$. Approximately $\\$2,000$ is the wrong rounding once the cents are on the page.

Simple 8% for six years would have been $\\$1,536$, farther from $\\$2,000$ in the other direction. The claim is a rounded-up continuous gain, and it fails.`,
    3: `Twelve years at 8% continuous multiply the principal by $e^{0.96} \\approx 2.612$, so $S(12) \\approx 8,357$. Twice $S(6)$ would require a factor of $2 \\times 1.616 = 3.232$, which is $e^{1.173}$, about $14.7$ years at 8%, not $12$.

The claim's "exactly double" is the same linear split as letter B, now on a longer calendar. Letter E reads the inequality in the true direction. This letter is the false equality.

$\\$8,357$ sits about $\\$1,985$ below $2 \\times 5,171$. That gap is not a rounding of equality.`,
    4: `The ratio $S(12)/S(6)$ equals $e^{0.48} \\approx 1.616$, the same six-year factor again. Each extra six years multiply by $1.616$, not by $2$. That is why $\\$8,357$ sits about $\\$1,985$ below $2 \\times 5,171$.

A six-year doubling would have needed $r = (\\ln 2)/6 \\approx 11.6\\%$. The stem is $8\\%$. Under 8% continuous, twelve years is less than double six years, which is the claim.

The opposite verdict would need a doubling rate, not an 8% rate.`,
  },
  "math-11-23": {
    0: `Nine percent continuous is a single-digit quote with a visible but modest lift to $9.42\\%$. That lift is already in Part 3. A client who budgeted 9% even would understate the fund by $0.42$ points, or about $\\$62$ on $\\$15,000$.

Letter B is that dollar figure. This letter only names $9.42\\%$. Annual compounding would have left the yield at $9\\%$. Continuous compounding is what lifts it.

Rounding $0.094174$ to $9.42\\%$ is the approximation the claim uses. It is not $9.00\\%$ and not $9.50\\%$.`,
    1: `Fifteen thousand dollars times $1.094174$ is $\\$16,412.61$. A client who booked $15,000 \\times 1.09 = 16,350$ would be $\\$62.61$ light, the dollar image of the $0.42$ point lift.

The cents, $61$, are not a table ornament. They are $15,000 \\times 0.094174$ as Part 3 rounded them. For the opposite verdict the principal or the rate would have to change.

Under the stem, one year of 9% continuous on $\\$15,000$ is $\\$16,412.61$. This letter names that balance.`,
    2: `A $0.75$-point premium at a 9% continuous quote would need a higher rate. Part 3's $0.42$ point gap is a little more than half of that cutoff. At 18%, letter D, the premium grows to $1.72$ points, which would clear $0.75$ easily.

This letter is the original 9% quote. The recovered extra is $0.42$ points, and $0.42$ is not more than $0.75$. Rounding $0.42$ to $0.4$ still misses.

The cutoff is a threshold letter. The recovered gap does not clear it.`,
    3: `Convexity is the whole comparison. $e^{0.18} - 1 \\approx 19.72\\%$ against $2 \\times 9.42\\% = 18.84\\%$ is about $0.88$ points of extra lift from doubling the continuous rate.

Annual compounding would have made the claim false, because then $EAR = r$ and doubling $r$ would double $EAR$. The stem compounds continuously. The exponential bends up, so the 18% effective rate exceeds double the original 9.42%.

The recovered pair is $19.72\\% > 18.84\\%$. That is the claim.`,
    4: `Testing $19.72\\%$ against $19.5\\%$ is a cutoff letter on the same 18% conversion as D. The clearance is $0.22$ of a point. Using the linear companion $18.84\\%$ would miss $19.5\\%$ and would be answering D's comparison instead.

The claim named $19.5\\%$ as a floor under the 18% EAR. The recovered $19.72\\%$ sits above that floor. A cutoff of $20\\%$ would have failed. $19.5\\%$ does not.

On $\\$15,000$ that $0.22$ point clearance is about $\\$33$ of extra interest above a $19.5\\%$ book.`,
  },
  "math-11-24": {
    0: `Yearly compounding at 10% is the floor of the three clocks: $K = 1.1000$ exactly. Semi-annual will sit at $1.1025$ and continuous at about $1.1052$. This letter is only the yearly factor.

On $\\$75,000$ it produces $\\$82,500$ after one year, which letters D and E will compare with the other two clocks. A solver who jumped to $e^{0.10}$ would be answering letter C. The stem's yearly clock is $1 + 0.10 = 1.1000$.`,
    1: `Two 5% half-year credits square to $1.1025$ exactly. The extra $0.0025$ of factor is $\\$187.50$ on $\\$75,000$, letter E's first gap. This letter only names $1.1025$.

Leaving $K$ at $1.10$ would erase those two intra-year credits. The recovered semi-annual factor is the square $(1.05)^{2}$, already in Part 3, and it is exact. No rounding is hiding in $1.1025$.`,
    2: `Continuous compounding at 10% is the ceiling, $e^{0.10} \\approx 1.105171 \\approx 1.1052$. On $\\$75,000$ it produces about $\\$82,888$, which is $\\$200$ above semi-annual and $\\$388$ above yearly.

This letter only names the factor $1.1052$. Rounding $1.105171$ to four decimals is $1.1052$, matching the claim. Rounding to $1.10$ would collapse back to the yearly clock.`,
    3: `Two hundred dollars and thirty-two cents is $75,000 \\times 0.002671$, the continuous-minus-semi-annual factor gap. The claimed $\\$250.32$ is $\\$50$ too high, a round-fifty slip.

Using $K_c - K_y$ instead would give about $\\$388$, farther away. The recovered extra of continuous over semi-annual on this $\\$75,000$ contract is $\\$200.32$. Naming $\\$250.32$ overstates that advantage.

A treasurer who booked the extra as $\\$250$ would overstate the continuous schedule's edge over two half-year credits.`,
    4: `At 10% the step from yearly to semi-annual is $\\$187.50$ and the step from semi-annual to continuous is $\\$200.32$. The second step is slightly larger, which is unusual compared with the diminishing jumps at lower rates, because jumping from $n = 2$ all the way to $n = \\infty$ still captures a lot of leftover compounding at 10%.

The claim said the first gap is larger. The recovered pair is $187.50 < 200.32$. Ranking the gaps backwards is the mix-up.

What would have to change is a lower quote, where the last step to continuous shrinks. At 10% it does not shrink past $\\$187.50$.`,
  },
  "math-11-25": {
    0: `Ninety-five thousand dollars at 4.5% continuous for one year is $\\$99,372.65$, not $\\$98,500$. The $\\$873$ shortfall in the claim is a 3.7%-style bump, not $e^{0.045}$.

Annual 4.5% would have given $95,000 \\times 1.045 = 99,275$, still above $\\$98,500$ and still not the continuous figure. The board's one-year projection is $\\$99,372.65$. Naming $\\$98,500$ undershoots every reasonable 4.5% clock.

A 3.5% continuous path would land nearer $\\$98,380$. That is a different quote. The stem is $4.5\\%$.`,
    1: `Two years double the exponent to $0.09$, and $95,000 e^{0.09} \\approx 103,946.56$. That is also $S(1) \\times e^{0.045}$, the same factor applied a second time to a larger base.

Doubling $\\$98,500$ would be a nonsense path. Squaring the recovered one-year factor is the right path, and it lands on Part 3's $\\$103,946.56$. The cents, $56$, match that product.

This letter names the two-year board projection. Letters C and D will read the dollar increments and the factor.`,
    2: `The same factor $1.0460$ applied to $\\$95,000$ adds $\\$4,373$ in year 1 and applied to $\\$99,373$ adds $\\$4,574$ in year 2. Dollar gains rise because the base rises. The claim said year 1 adds more. It adds less.

That is the endowment property the board wanted projected: a fixed year-over-year factor, rising dollar increments. Depreciation would reverse the dollar pattern. This fund is growing.

The extra $\\$201$ in year 2 is interest on year 1's gain. It is not a rate change.`,
    3: `Seeing two different dollar gains and calling them different factors is the mix-up. The factor is $e^{0.045}$ every year. The dollars change. Part 3 already named $1.0460$ as the fixed multiplier.

If the board changed the rate each year, the factor would change. The stem holds 4.5% fixed, so each year the balance is multiplied by the same number, not a different one.

Letter C's rising dollar increments are the image of a *fixed* factor on a rising base. This letter is that distinction.`,
    4: `Doubling 4.5% to 9% replaces $1.0460$ with $1.09417$, not with $2.092$. Factors live just above $1$. Doubling the rate does not double a number near $1.05$.

The effective yields $4.60\\%$ and $9.42\\%$ are not in the ratio $1:2$ either. Linear scaling of $r$ is a small-$r$ story. At 4.5% versus 9% it already fails. The year-over-year factor does not exactly double.

A $9\\%$ continuous year on $\\$95,000$ is about $\\$103,946$, coincidentally near letter B's two-year 4.5% figure, because $e^{0.09}$ is the same product. That coincidence is not a doubled factor of $1.0460$.`,
  },
  "math-11-26": {
    0: `Four years of 10% continuous depreciation on a $\\$60,000$ fleet is $e^{-0.40}$ remaining, $\\$40,219.20$. Discrete annual 10% would leave about $\\$39,366$. Simple 10% for four years would leave $\\$36,000$. The recovered continuous figure is the middle of those, already in Part 3.

Letter C will read it as $67.03\\%$ of original. This letter only names the dollar value. The cents, $20$, match $60,000 e^{-0.40}$.`,
    1: `Seven years at the same 10% leave $e^{-0.70}$ of original, $\\$29,795.12$, just under half. Half would have been $\\$30,000$. The extra three years after $v(4)$ multiply by $e^{-0.30}$, taking $\\$40,219$ down to $\\$29,795$.

That is consistent with rebuilding from $v_0$. The recovered seven-year value is $\\$29,795.12$. This letter names that later date. A half-life at 10% continuous is $(\\ln 2)/0.10 \\approx 6.93$ years, so year 7 sits just past half.`,
    2: `Sixty-seven point zero three percent is $e^{-0.40}$ written as a share, and it is also $40,219.20 / 60,000$. Reporting the lost share $32.97\\%$ would be answering a different question. The claim asks what remains.

At $\\delta = 0.10$ after four years, about two-thirds of the original value remains. That is $67.03\\%$, matching the claim. Letter A already named the dollars. This letter names the share.`,
    3: `Doubling $\\delta$ to 20% squares the four-year remaining factor: $(0.67032)^{2} \\approx 0.4493$, which on $\\$60,000$ is $\\$26,960$, still $\\$1,960$ above $\\$25,000$. Halving $\\$40,219$ would have gone to $\\$20,110$ and would have cleared the cutoff from below.

Remaining value is exponential, not linear in $\\delta$. The recovered doubled-rate value does not fall below $\\$25,000$. The cutoff fails.

A 25% continuous four-year path would go lower. The claim named 20%.`,
    4: `Year 1 starts at $\\$60,000$ and loses about $\\$5,710$. Year 4 starts at $v(3) \\approx 44,449$ and loses about $\\$4,230$. The same 10% continuous rate takes more dollars off the larger base.

Later years do not catch up in dollars. Older vans are worth less, so the same rate takes fewer dollars. That is the depreciation mirror of a growing fund's rising dollar gains.

The claim said the first-year dollar decline is larger. It is. The recovered pair matches.`,
  },
  "math-11-27": {
    0: `Twelve point six zero years is $\\ln 2 / 0.055$, about $12.6027$ rounded. The Rule of $72$ at $5.5\\%$ gives $13.1$ years, a useful cousin, not the recovered logarithm. Letter C will halve this wait at $11\\%$. Letter B will check the balance at this date.

This letter only names the doubling time at the quoted $5.5\\%$. A solver who reported $12$ years even would be a rounded guess. The inversion is $12.60$.`,
    1: `At the doubling time the growth factor is $2$ by construction, so $\\$18,000$ becomes $\\$36,000$ exactly. Stopping at $12$ years even would leave about $\\$34,870$, still short.

The rounded $12.60$ years is close enough that the balance is reported as $\\$36,000.00$. That is one doubling. Letter D takes three. This letter is the one-doubling balance.

The cents are zeros because the multiple and the principal are round.`,
    2: `Raising the rate from $5.5\\%$ to $11\\%$ halves the wait to about $6.30$ years. The doubling time is not a property of doubling independent of $r$. It sits in the denominator of $(\\ln 2)/r$.

A faster reserve account doubles sooner. Leaving the wait at $12.60$ years after doubling the rate would ignore that denominator. The claim said the wait is unchanged. It is not.

What would have to change is a formula other than $(\\ln 2)/r$. The stem uses continuous compounding.`,
    3: `Three doublings multiply: $2^{3} = 8$, so $\\$18,000$ becomes $\\$144,000$ after about $37.8$ years. Adding $2+2+2 = 6$ is the trap, which would give $\\$108,000$. Repeated doublings multiply.

A target of $6 S_0$ would take $(\\ln 6)/0.055 \\approx 32.6$ years, not three doubling periods. The recovered three-doubling balance is $\\$144,000$, not six times the principal.

The claim mixed adding doubles with multiplying doubles.`,
    4: `A higher $r$ shortens $t$, not lengthens it. More growth per year means fewer years to a fixed multiple of $2$. Letter C already showed $6.30$ against $12.60$. This letter is that direction in general.

The claim has the relationship backwards. For the opposite verdict, $t$ would have to rise with $r$, which would take a formula other than $(\\ln 2)/r$.

The recovered formula has $r$ in the denominator. Larger denominator, smaller wait.`,
  },
  "math-11-28": {
    0: `Losing 60% means keeping 40%. The remaining fraction $0.40$ inverts to $2.5$, and $t = \\ln(2.5)/\\delta$. The minus sign in $-\\ln(0.40)/\\delta$ is the same formula. Displaying $\\ln(2.5)/\\delta$ is the positive version already in Part 2.

Using $\\ln(0.60)$ would invert the lost share and would be the wrong logarithm. This letter is the algebra, which matches the claim. Later letters plug in $\\delta$.`,
    1: `At $18\\%$ the wait is $0.916291 / 0.18 \\approx 5.09$ years. A linear write-down $0.60 / 0.18 = 3.33$ years would be too fast. Continuous depreciation is a logarithm.

Rounding $5.0905$ to $5.09$ matches the claim. Letter D will double this wait at $9\\%$. Letter E will compare it with the wait to lose 80%. This letter names $5.09$ years.`,
    2: `Forty percent of $\\$120,000$ is $\\$48,000$ exactly. That is the remaining value at the $5.09$-year date by definition of a 60% loss. Rebuilding $120,000 e^{-0.18 \\times 5.09}$ lands on the same $\\$48,000$.

The direct route $0.40 \\times 120,000$ is enough. The cents are zeros because the principal and the fraction are round. This letter names that remaining value.`,
    3: `Halving $\\delta$ doubles $t$ because time sits in the denominator. A 9% write-down takes about $10.18$ years to lose 60%, twice $5.09$. Slower is not shorter.

Less happening per year means more years to reach the same remaining 40%. The recovered 9% wait is double the original, matching the claim.

A solver who thought a slower rate finishes sooner would have the inequality backwards.`,
    4: `Losing 80% is keeping 20%, which inverts to $5$, and $\\ln 5 > \\ln 2.5$. The extra wait is $\\ln 2 / 0.18 \\approx 3.85$ years, taking $5.09$ out to about $8.94$.

The last stretch is slower in dollars because the base is smaller, but it still takes those extra $3.85$ years from $t = 0$. A deeper loss needs more time at the same rate.

The claim said the 80% wait is longer. It is. The recovered pair is $8.94 > 5.09$.`,
  },
  "math-11-29": {
    0: `Eleven dollars and thirty-six cents is the one-year continuous extra at a modest 3% on $\\$25,000$. Small, which is why a "30 times" comparison with the 15% gap will fail in letter C.

The recovered pair is $\\$25,761.36$ continuous against $\\$25,750.00$ annual. Their difference is $\\$11.36$, matching the claim. For the opposite verdict those two one-year 3% clocks would have to differ by some other amount.

This letter names that small extra. Letter B names the large one.`,
    1: `Two hundred ninety-five dollars and eighty-six cents is the one-year extra at 15%. Convexity of $e^{r} - (1+r)$ grows fast in $r$, so this gap is not $5 \\times 11.36 = 56.80$. It is about $26$ times the 3% gap, which letter C will test against $30$.

The recovered 15% pair is $\\$29,045.86$ against $\\$28,750.00$. Their difference is $\\$295.86$. This letter names that larger extra.`,
    2: `Twenty-six times is large and still short of $30$ by about $4$. Linear scaling by $15/3 = 5$ would have predicted a much smaller ratio and would also have failed, in the other direction.

Rounding $26$ up to $30$ is a full four-fold of rounding, which the recovered $26.04$ does not support. The cutoff is $30$. The recovered ratio is about $26$.

The claim overstates the convexity. The extra is large. It is not more than thirty-fold.`,
    3: `Eight years at 3% raise the dollar gap from $\\$11.36$ to $\\$111.98$, about ten times, not eight, because both balances grow and the faster clock pulls ahead. Using $8 \\times 11.36 = 90.88$ undershoots.

The extra above $\\$90.88$ is compounding of the gap itself. Part 3 recovered $\\$111.98$, matching the claim. This letter names that eight-year extra at the modest 3% quote.`,
    4: `The lender's continuous advantage at 3% grows from $\\$11.36$ at one year to $\\$111.98$ at eight years. Longer holding periods make continuous compounding more advantageous, not less.

The extra is not a one-year curiosity that fades. Both clocks grow, and the faster clock's lead grows with them. The claim has that direction backwards.

"Less advantageous" would describe a shrinking gap. The recovered gap grows.`,
  },
  "math-11-30": {
    0: `Four hundred thousand dollars at 9.5% continuous for one year is $\\$439,863.54$. Annual 9.5% would have left $\\$438,000$, about $\\$1,864$ light. This continuous figure is the ceiling letters B, D, and E will sit under.

The cents, $54$, match $400,000 e^{0.095}$. The recovered Fund A value is $\\$439,863.54$, matching the claim. This letter names the ceiling.`,
    1: `Fund B's monthly product is $\\$439,699.03$, not $\\$439,750$. Fifty-one dollars of overstatement sits in a round figure between monthly and continuous, which is where a guessed compromise would land. The monthly model does not land there.

Part 3 recovered $\\$439,699.03$. Naming $\\$439,750$ overstates Fund B and understates the gap to Fund A that letter E will measure.

The recovered monthly path is $\\$439,699.03$.`,
    2: `The maximum effective rate at a 9.5% nominal is the continuous conversion, about $9.97\\%$, not the printed $9.50\\%$. Annual compounding is the floor, where effective equals nominal.

The claim named the maximum and set it equal to the nominal, which is the floor. Those two ends of the range are $0.47$ points apart. The recovered ceiling is $9.97\\%$.

On $\\$400,000$ that $0.47$ point lift is about $\\$1,864$, letter A's extra over annual.`,
    3: `Daily compounding at $m = 365$ reaches $\\$439,858.10$, five dollars and forty-four cents below Fund A. Close is not overtaking. No finite $m$ can push $(1 + r/m)^{m}$ through $e^{r}$.

Letter E will note that the gap shrank from the monthly $\\$164.51$ to this $\\$5.44$. Shrinking is not crossing. Daily stays below the continuous value.

The claim said daily would exceed A. It does not.`,
    4: `The gap narrows from about $\\$165$ monthly to about $\\$5$ daily. More frequent compounding pulls Fund B toward the ceiling without crossing it. That is the textbook picture: $(1 + r/m)^{m}$ increases in $m$ and approaches $e^{r}$ from below.

The recovered pair $164.51 > 5.44$ is that narrowing. The claim said the gap narrows, and it does.

What would have to change for a widening gap is a lower frequency, not a higher one.`,
  },
});
console.log("padded 21-30 b");
