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
  "math-11-10": {
    1: `A borrower comparing two loans needs the converted cost, not the printed quote. Option (b)'s $10.81\\%$ is that converted cost. Option (a)'s quarterly conversion sits a few hundredths lower, which is why letter A failed and letter D fails.

On a $\\$5,000$ unpaid balance, $10.81\\%$ is about $\\$540$ of true annual interest. Naming $10.3\\%$ even would understate that cost by about $\\$25$. This letter only names (b)'s effective rate.`,
  },
});

apply("textbook/output/_rev/ch11/11_20.json", {
  "math-11-17": {
    4: `An always-claim dies at one counterexample. This pair is one: more frequent compounding, larger required deposit. Any other target or horizon on these two quotes reproduces $R_Y > R_X$ and the same ranking of present values.

Equalize the nominal rates and drop "always," and frequency would decide. As written, X compounds monthly at 5.00% and Y compounds quarterly at 5.10%. Y's extra quote wins, so X does not always require the smaller deposit.

The recovered seven-year pair is already $\\$17,630$ against $\\$17,534$. Stretching the horizon or changing the bill scales both present values but does not flip the ranking while the quotes stay as they are.`,
  },
  "math-11-19": {
    0: `Monthly 6.30% is the weakest converted yield of the three certificates, $6.49\\%$. Winning on frequency does not repair a printed hole of $0.10$ to $0.15$ points. On $\\$20,000$ that $6.49\\%$ is about $\\$1,297$ of interest.

A solver who reported $6.30\\%$ would be naming the quote, not the conversion. Letter D will put CD1 last on both columns. This letter names $6.49\\%$.`,
  },
  "math-11-20": {
    3: `The recovered pair is $R_M \\approx 6.17\\%$ against $R_Q \\approx 6.29\\%$. Monthly looks stronger as a clock and is not stronger as a yield, because Q quotes an extra $0.15$ points. Those extra points survive the conversion.

The claim reversed the ranking. Q has the higher effective rate, which is why Q arrives first in letters B and C. This letter is that yield comparison.`,
  },
});

apply("textbook/output/_rev/ch11/21_30.json", {
  "math-11-21": {
    4: `The baker who wrote $1.0400$ swapped a 5% continuous factor for a 4% annual factor. Those are different quotes and different clocks. Four-decimal rounding of $e^{0.05}$ is $1.0513$. Two-decimal rounding is $1.05$. Four-decimal rounding of $e^{0.04}$ is $1.0408$, still not $1.0400$.

Nothing in that list matches the claim. The recovered factor is $1.051271$, already in Part 3. Letter A applied it to $\\$4,500$ and got $\\$4,730.72$. This letter only names the factor, and $1.0400$ is not it.

For the opposite verdict the stem would have needed a 4% annual clock. The stem is 5% continuous.`,
  },
  "math-11-22": {
    1: `The linear split "twice $S(3)$" would require the second three years to reproduce the entire three-year *balance*, not the three-year *growth factor*. After three years the roaster already holds about $\\$4,068$. The next three years multiply that by $1.271$, adding about $\\$1,103$, not another $\\$4,068$.

That is why $S(6) \\approx 5,171$ sits far below $2 \\times 4,068 = 8,136$. Compound growth is a factor applied again to a larger base, not a second copy of the earlier balance.

What would have to change is simple interest, where dollar gains scale with time. The stem is continuous compounding at 8%. Under that model, doubling the calendar squares the factor on $S_0$ and does not double $S(3)$.`,
  },
  "math-11-23": {
    0: `Nine point four two percent is the one-year continuous conversion of a 9% quote. On $\\$15,000$ that is about $\\$1,413$ of interest against $\\$1,350$ once a year. The extra $\\$63$ is letter B.

A client who left the quote at $9\\%$ would understate the year by $0.42$ points. A client who jumped to $19.72\\%$ would be answering the doubled-rate letter D. This letter only names the original $9.42\\%$.

Rounding $0.094174$ to $9.42\\%$ is the approximation the claim uses. It is not $9.00\\%$ and not $9.50\\%$.`,
    1: `The dollar image of $9.42\\%$ on $\\$15,000$ is $\\$16,412.61$. Booking $\\$16,350$ is the annual companion, $\\$62.61$ light. Booking $\\$16,500$ is a 10% story the stem does not tell.

The cents, $61$, match Part 3. They are $15,000 \\times 0.094174$ as the overview rounded them. For the opposite verdict the principal or the rate would have to change. Under the stem, one year of 9% continuous is $\\$16,412.61$.`,
    4: `Testing $19.72\\%$ against $19.5\\%$ is a cutoff on the same 18% conversion as D. The clearance is $0.22$ of a point, about $\\$33$ on this $\\$15,000$ fund. Using the linear companion $18.84\\%$ would miss $19.5\\%$ and would be answering D instead.

A cutoff of $20\\%$ would have failed. The claim named $19.5\\%$ as a floor under the 18% EAR. The recovered $19.72\\%$ sits above that floor.`,
  },
  "math-11-24": {
    0: `Yearly compounding at 10% is the floor of the three clocks. The factor is $1.1000$ exactly, with no intra-year credits. On $\\$75,000$ that produces $\\$82,500$ after one year.

A solver who jumped to $1.1025$ would be answering letter B. A solver who jumped to $e^{0.10}$ would be answering letter C. This letter is only the yearly factor. Letters D and E will subtract the three recovered balances.

The stem's yearly clock for one year is $1 + 0.10 = 1.1000$, matching the claim.`,
    1: `Two 5% half-year credits square to $1.1025$ exactly. On $\\$75,000$ that is $\\$82,687.50$, which is $\\$187.50$ above the yearly $\\$82,500$. That $\\$187.50$ is letter E's first gap.

Leaving $K$ at $1.10$ would erase those two intra-year credits. The recovered semi-annual factor is $(1.05)^{2}$, already in Part 3, and it is exact. No rounding is hiding in $1.1025$. This letter names that factor.`,
    2: `Continuous compounding at 10% is the ceiling, $e^{0.10} \\approx 1.1052$. On $\\$75,000$ that produces about $\\$82,888$, which is $\\$200$ above semi-annual and $\\$388$ above yearly.

This letter names $1.1052$. Rounding $1.105171$ to four decimals matches the claim. Rounding to $1.10$ would collapse back to the yearly clock. Letter D will measure the last step in dollars.`,
    3: `Two hundred dollars and thirty-two cents is the continuous-minus-semi-annual gap on $\\$75,000$. The claimed $\\$250.32$ is $\\$50$ too high. Fifty dollars on this principal is about $0.067$ of a point of extra yield that last step does not have.

Using yearly as the baseline would give about $\\$388$, farther from $\\$250$. The recovered extra of continuous over semi-annual is $\\$200.32$. Naming $\\$250.32$ overstates that advantage.`,
  },
  "math-11-25": {
    0: `The board's one-year continuous book is $\\$99,372.65$, not $\\$98,500$. The $\\$873$ shortfall is a 3.7%-style bump, not $e^{0.045}$. Annual 4.5% would have given $\\$99,275$, still above $\\$98,500$ and still not the continuous figure.

Every reasonable 4.5% clock sits above $\\$99,200$. The claimed figure is below the whole family. The recovered one-year projection is $\\$99,372.65$.`,
    1: `Two years double the exponent to $0.09$. $95,000 e^{0.09} \\approx 103,946.56$, which is also $S(1) \\times e^{0.045}$. Doubling the false $\\$98,500$ would be a nonsense path.

This letter names the two-year board projection. The cents, $56$, match that product. Letters C and D will read the dollar increments and the fixed factor.`,
  },
  "math-11-26": {
    0: `Four years of 10% continuous depreciation leave $\\$40,219.20$ of a $\\$60,000$ fleet. Discrete annual 10% would leave about $\\$39,366$. Simple 10% would leave $\\$36,000$. The recovered continuous figure is the middle of those.

Letter C will read it as $67.03\\%$ of original. This letter only names the dollar value. The cents, $20$, match $60,000 e^{-0.40}$.`,
    1: `Seven years at the same 10% leave $\\$29,795.12$, just under half. The half-life is $6.93$ years, so year 7 sits a few weeks past half. The extra three years after $v(4)$ multiply by $e^{-0.30}$, taking $\\$40,219$ down to $\\$29,795$.

This letter names the seven-year value. Rebuilding from $v_0$ lands on the same dollars.`,
    2: `Sixty-seven point zero three percent is $e^{-0.40}$ written as a share, and it is also $40,219.20 / 60,000$. Reporting the lost share $32.97\\%$ would be answering a different question. The claim asks what remains.

At 10% continuous after four years, about two-thirds remains. That is $67.03\\%$, matching the claim. Letter A already named the dollars.`,
    3: `Doubling $\\delta$ to 20% leaves about $\\$26,960$ after four years, still $\\$1,960$ above $\\$25,000$. Halving $\\$40,219$ would have gone to $\\$20,110$ and would have cleared the cutoff from below.

Remaining value is exponential, not linear in $\\delta$. The recovered doubled-rate book does not fall below $\\$25,000$. The cutoff fails.`,
  },
  "math-11-27": {
    0: `Twelve point six zero years is $(\\ln 2)/0.055$. Rule of $72$ at $5.5\\%$ gives $13.1$ years, a cousin, not the recovered logarithm. A 12-year even wait would leave the reserve at about $\\$34,870$, still short of a double.

This letter names the doubling time. Letter B will read the balance at this date. Letter C will halve the wait at $11\\%$.`,
    1: `At the doubling time the growth factor is $2$ by construction, so $\\$18,000$ becomes $\\$36,000$ exactly. Stopping at $12$ years even would leave about $\\$34,870$. The rounded $12.60$ years is close enough that the balance is reported as $\\$36,000.00$.

This letter names the one-doubling balance. Letter D takes three doublings to $\\$144,000$. The cents are zeros because the multiple and the principal are round.`,
    2: `Raising the rate from $5.5\\%$ to $11\\%$ halves the wait to about $6.30$ years. The doubling time sits in the denominator of $(\\ln 2)/r$. A faster reserve account doubles sooner.

Leaving the wait at $12.60$ years after doubling the rate would ignore that denominator. The claim said unchanged. The recovered wait halves.`,
    3: `Three doublings multiply: $2^{3} = 8$, so $\\$18,000$ becomes $\\$144,000$ after about $37.8$ years. Adding $2+2+2 = 6$ is the trap, which would give $\\$108,000$. Repeated doublings multiply.

A target of $6 S_0$ would take $(\\ln 6)/0.055 \\approx 32.6$ years, not three doubling periods. The recovered three-doubling balance is $\\$144,000$, not six times the principal.`,
    4: `A higher $r$ shortens $t$, not lengthens it. More growth per year means fewer years to a fixed multiple of $2$. Letter C already showed $6.30$ against $12.60$. This letter is that direction in general.

The claim has the relationship backwards. For the opposite verdict, $t$ would have to rise with $r$, which would take a formula other than $(\\ln 2)/r$.`,
  },
  "math-11-28": {
    1: `At $18\\%$ the wait is $\\ln(2.5)/0.18 \\approx 5.09$ years. A linear write-down $0.60/0.18 = 3.33$ years would be too fast. Continuous depreciation is a logarithm, already inverted in Part 3.

Rounding $5.0905$ to $5.09$ matches the claim. Letter D will double this wait at $9\\%$. Letter E will compare it with the wait to lose 80%. This letter names $5.09$ years.`,
    2: `Forty percent of $\\$120,000$ is $\\$48,000$ exactly. That is the remaining value at the $5.09$-year date by definition of a 60% loss. Rebuilding $120,000 e^{-0.18 \\times 5.09}$ lands on the same $\\$48,000$.

The direct route $0.40 \\times 120,000$ is enough. The cents are zeros because the principal and the fraction are round. This letter names that remaining value.`,
    3: `Halving $\\delta$ doubles $t$ because time sits in the denominator. A 9% write-down takes about $10.18$ years to lose 60%, twice $5.09$. Slower is not shorter.

Less happening per year means more years to reach the same remaining 40%. The recovered 9% wait is double the original, matching the claim.`,
  },
  "math-11-29": {
    0: `Eleven dollars and thirty-six cents is the one-year continuous extra at a modest 3% on $\\$25,000$. Small, which is why a "30 times" comparison with the 15% gap will fail in letter C.

The recovered pair is $\\$25,761.36$ continuous against $\\$25,750.00$ annual. Their difference is $\\$11.36$, matching the claim. This letter names that small extra. Letter B names the large one.`,
    1: `Two hundred ninety-five dollars and eighty-six cents is the one-year extra at 15%. Convexity of $e^{r} - (1+r)$ grows fast in $r$, so this gap is not $5 \\times 11.36 = 56.80$. It is about $26$ times the 3% gap.

The recovered 15% pair is $\\$29,045.86$ against $\\$28,750.00$. Their difference is $\\$295.86$. This letter names that larger extra.`,
    2: `Twenty-six times is large and still short of $30$ by about $4$. Linear scaling by $15/3 = 5$ would have predicted a much smaller ratio and would also have failed, in the other direction.

Rounding $26$ up to $30$ is too much rounding. The cutoff is $30$. The recovered ratio is about $26.04$. The claim overstates the convexity.`,
    3: `Eight years at 3% raise the dollar gap from $\\$11.36$ to $\\$111.98$, about ten times, not eight, because both balances grow and the faster clock pulls ahead. Using $8 \\times 11.36 = 90.88$ undershoots.

The extra above $\\$90.88$ is compounding of the gap itself. Part 3 recovered $\\$111.98$, matching the claim.`,
    4: `The lender's continuous advantage at 3% grows from $\\$11.36$ at one year to $\\$111.98$ at eight years. Longer holding periods make continuous compounding more advantageous, not less.

The extra is not a one-year curiosity that fades. Both clocks grow, and the faster clock's lead grows with them. The claim has that direction backwards.`,
  },
  "math-11-30": {
    0: `Four hundred thousand dollars at 9.5% continuous for one year is $\\$439,863.54$. Annual 9.5% would have left $\\$438,000$, about $\\$1,864$ light. This continuous figure is the ceiling letters B, D, and E sit under.

The cents, $54$, match $400,000 e^{0.095}$. The recovered Fund A value is $\\$439,863.54$, matching the claim. This letter names the ceiling.`,
    1: `Fund B's monthly product is $\\$439,699.03$, not $\\$439,750$. Fifty-one dollars of overstatement sits in a round figure between monthly and continuous, which is where a guessed compromise would land.

Part 3 recovered $\\$439,699.03$. Naming $\\$439,750$ overstates Fund B and understates the gap to Fund A that letter E will measure.`,
    3: `Daily compounding at $m = 365$ reaches $\\$439,858.10$, five dollars and forty-four cents below Fund A. Close is not overtaking. No finite $m$ can push $(1 + r/m)^{m}$ through $e^{r}$.

Letter E notes that the gap shrank from the monthly $\\$164.51$ to this $\\$5.44$. Shrinking is not crossing. Daily stays below the continuous value.`,
    4: `The gap narrows from about $\\$165$ monthly to about $\\$5$ daily. More frequent compounding pulls Fund B toward the ceiling without crossing it. That is $(1 + r/m)^{m}$ increasing in $m$ and approaching $e^{r}$ from below.

The recovered pair $164.51 > 5.44$ is that narrowing. The claim said the gap narrows, and it does.`,
  },
});

apply("textbook/output/_rev/ch11/31_40.json", {
  "math-11-31": {
    0: `Six point six seven percent is $\\ln(34,200/28,000)/3$. Simple interest would have said about $7.38\\%$. The logarithm is slower because compounding did part of the observed $\\$6,200$ gain.

Rounding $0.066674$ to $6.67\\%$ matches the claim. A 7% guess would overshoot $\\$34,200$ at the three-year mark. This letter names the implied rate. Later letters project, linearize, double, and test 6% with it.`,
    1: `Five years at $6.67\\%$ is two years beyond the observed data. Rolling $\\$34,200$ forward by $e^{0.06667 \\times 2}$ lands on $\\$39,078.52$, the same as $28,000 e^{0.333}$.

The straight-line companion $\\$38,333$ is about $\\$745$ light, because it ignores extra compounding on a larger base in years 4 and 5. The recovered exponential projection is $\\$39,078.52$.`,
    3: `Ten point four zero years is $(\\ln 2)/0.06667$, a doubling of $\\$28,000$ to $\\$56,000$. The claimed $12.40$ years would take the fund toward $\\$64,000$, past a doubling.

Rule of $72$ at $6.67\\%$ gives about $10.8$ years, closer to $10.40$ than to $12.40$. The recovered doubling time is $10.40$ years, not $12.40$.`,
    4: `Six percent is slower than the implied $6.67\\%$, so it undershoots $\\$34,200$ at the three-year mark, landing at about $\\$33,522$. A slower path cannot exceed the observed balance.

The $\\$678$ shortfall is the dollar image of a $0.67$ point rate hole over three years. The claim said exceed. The inequality is backwards.`,
  },
  "math-11-32": {
    0: `Bank X's continuous 6.8% for two years is $\\$68,740.91$. Annual 6.8% would have left about $\\$68,438$. X has the strongest clock and the lowest quote. Letter D will find that the quote wins that trade.

This letter only names X's $\\$68,740.91$. The cents, $91$, match the exponential product. Later letters name Y and Z on the same $\\$60,000$ for the same two years.`,
    1: `Bank Y quotes $0.10$ points more than X and compounds monthly. That extra quote outweighs X's continuous clock, so Y finishes about $\\$110$ higher at $\\$68,851.32$.

Giving Y a continuous clock it does not have would overstate Y. The recovered monthly 6.9% path over $24$ periods is $\\$68,851.32$, matching the claim.`,
    2: `Bank Z quotes 7.0% quarterly and finishes highest at $\\$68,932.91$, about $\\$82$ above Y. The extra $0.10$ points over Y outweigh Y's extra monthly dates.

This letter names Z's $\\$68,932.91$. The treasurer who takes Z takes the highest two-year value of the three offers. Letter D will rank $X < Y < Z$.`,
    4: `Raising X to 7.0% continuous produces about $\\$69,016$, which beats Z's $\\$68,933$ by about $\\$83$. That is the textbook ceiling once quotes match: continuous beats any finite frequency.

Letter D failed because the quotes did not match. This letter equalizes them at 7.0% and the ranking flips. The recovered matched-rate X exceeds Z.`,
  },
  "math-11-33": {
    1: `Six years at 7% continuous on $\\$2,000,000$ is about $\\$3,043,923$, not $\\$3,100,000$. The extra $\\$56,000$ in the claim sits between the net path and the gross 9% path near $\\$3,430,000$.

Annual 7% would have left about $\\$3,001,000$. An 11% leak, using letter A's sign error, would land near $\\$3,877,000$. None of those companions is $\\$3,100,000$. The recovered six-year net value is $\\$3,043,923$.`,
  },
  "math-11-34": {
    1: `Ten point zero six years is when $50,000 e^{0.04 t}$ meets $250,000 e^{-0.12 t}$, at about $\\$74,767$ each. Ignoring B's decay and waiting for A to grow to $\\$250,000$ would take about $40$ years.

B is falling as A is rising, so they meet much sooner. The recovered crossover is $10.06$ years at $\\$74,767.44$, matching the claim. Letter C will check $t = 10$, three weeks earlier.`,
    2: `At $t = 10$ exactly, A is about $\\$74,591$ and B is about $\\$75,299$. A is still $\\$707$ behind. Rounding $10.06$ down to $10$ skips about three weeks in which A still has to catch that $\\$707$.

The crossover is at $10.06$, not at $10$. The claim said A is already ahead at $t = 10$. It is not.`,
    4: `A rising exponential and a falling exponential meet at most once. After $10.06$ years, A stays ahead. Letter C showed A still behind at $t = 10$. Letter B showed they meet at $10.06$. After that, this letter holds.

For the opposite verdict B would have to start growing, or A decaying, after the crossover. The stem holds both trends.`,
  },
  "math-11-35": {
    1: `Quarterly $7\\%$ leaves $\\$42,874.36$. Monthly $7\\%$ leaves $\\$42,891.60$. Both sit between the annual floor $\\$42,800$ and the continuous ceiling $\\$42,900.33$.

Swapping the two figures would still keep quarterly below monthly. The recovered pair matches the claim. This letter names the two middle clocks. Letter C will rank all four.`,
    2: `Annual < quarterly < monthly < continuous is the textbook ranking at a shared 7% quote: $42,800.00 < 42,874.36 < 42,891.60 < 42,900.33$. Monthly cannot overtake continuous, because continuous is the limit.

The four recovered values rise with frequency and stop at the ceiling, matching the claim.`,
    3: `The step from quarterly to monthly is $\\$17.24$. The step from monthly to continuous is about $\\$8.73$. The first of those two last steps is larger, not smaller.

Diminishing returns: $n = 4$ to $n = 12$ still captures more leftover compounding than $n = 12$ to $n = \\infty$ at 7%. The claim reversed those two gaps.`,
    4: `Daily or hourly compounding would sit in the $\\$8.73$ remaining gap between monthly and continuous, never above $\\$42,900.33$. No finite $m$ beats $e^{0.07}$ at this 7% quote.

The recovered continuous value is the maximum. The claim said no schedule can exceed $\\$42,900.33$. That is the ceiling property.`,
  },
  "math-11-36": {
    0: `Option 1 at 4.5% continuous for eight years needs $\\$69,767.63$ today. Annual 4.5% would have needed about $\\$70,188$, a slightly weaker discount. The recovered continuous deposit is $\\$69,767.63$.

Letter B will put Option 2 about $\\$7,889$ lower because 6% does more of the work. This letter only names Option 1.`,
    1: `Option 2 at 6% continuous needs $\\$61,878.34$ today, about $\\$7,889$ less than Option 1. Faster growth, smaller present value of a fixed $\\$100,000$ target.

Reusing $\\$69,768$ for Option 2 would ignore the extra $1.5$ points of rate. The recovered Option 2 deposit is $\\$61,878.34$, matching the claim.`,
    2: `The faster account needs less today, not more. $61,878 < 69,768$. A parent who thought a higher rate was a more expensive product would agree with the claim. The parent is discounting a fixed bill.

Higher rate, smaller opening check. "Larger" has the comparison backwards.`,
    3: `The gap is $\\$7,889$, with Option 1 larger, not $\\$9,000$ with Option 2 larger. Both the size and the assignment in the claim fail. Rounding $69,768 - 61,878$ to $\\$8,000$ would still not be $\\$9,000$.

The recovered difference is $\\$7,889.29$, Option 1 minus Option 2.`,
    4: `Four years of 4.5% continuous need about $\\$83,527$ today, $\\$13,759$ more than the eight-year requirement. Less time for the account to work means more cash from the parent.

The stem keeps the $\\$100,000$ target, so halving the horizon raises the required deposit, not lowers it. The claim said smaller. The recovered four-year deposit is larger.`,
  },
  "math-11-37": {
    0: `Four years of 10% continuous on $\\$1,800,000$ is about $\\$2,685,284$. Annual 10% would have left about $\\$2,636,000$. The recovered expansion-phase endpoint is $\\$2,685,284.46$.

Letter B will grow this by $e^{0.12}$ through the 4% maturity phase. This letter only names year 4.`,
    1: `Seven years is $e^{0.52}$ on the original base, about $\\$3,027,650$, which is also $S(4) \\times e^{0.12}$. This letter names the year-7 revenue $\\$3,027,649.77$.

Letter C will call $0.52/7 \\approx 7.43\\%$ the constant equivalent that lands on the same dollars.`,
    2: `Seven point four three percent is the time-weighted average, $0.52/7$, not a 50-50 mix of 10% and 4%. Checking $e^{0.0743 \\times 7} = e^{0.52}$ reproduces $S(7)$.

The constant 7.43% is equivalent to the two-phase path at the seven-year mark. A 7% even path would undershoot year 7.`,
    3: `Unweighted $7.00\\%$ understates the four expansion years. Time weights are $4/7$ on 10% and $3/7$ on 4%, which is $7.43\\%$. The extra $0.43$ of a point is exactly that overweighting of the faster phase.

If the phases had equal length, the unweighted average would match. They do not: four then three. The effective rate is higher than $7.00\\%$.`,
    4: `Multiplication commutes, so $e^{0.12} e^{0.40} = e^{0.40} e^{0.12}$. The path would change if 4% came first: year 3 would be lower. The year-7 endpoint would not change, because the total exponent is still $0.52$.

Deposits added along the way would break that commutativity. The stem is a single opening base. Reversed phases leave the same year-7 revenue.`,
  },
  "math-11-38": {
    1: `Sixteen point two eight percent is $\\ln(85,000/32,000)/6$. The false formula from letter A would have given the negative of that. A linear write-down would have said about $10.4\\%$.

The recovered continuous implied rate is $16.28\\%$, matching the claim. Letters C through E will compare this with a 15% crane and a $\\$40,000$ target.`,
    2: `The 15% crane retains $85,000 e^{-0.90} \\approx 34,558$, not $\\$36,000$. Fourteen hundred dollars of overstatement is a rounded factor near $0.424$ instead of $e^{-0.90} \\approx 0.4066$.

The recovered six-year value at the known 15% rate is $\\$34,558.42$. Naming $\\$36,000$ overstates what the slower crane keeps.`,
    3: `Thirty-two thousand dollars is below $\\$34,558$, so the first crane, with the higher implied rate $16.28\\%$, retains less, not more. Ranking by rate would have predicted that: faster write-down, less remaining value.

The claim said the first retains more. The ranking is backwards.`,
    4: `A $\\$40,000$ target is a gentler write-down than $\\$32,000$ over the same six years, so the implied $\\delta$ falls to about $12.56\\%$. Tougher policy would be a lower remaining value, not a rounder higher one.

$12.56\\% < 16.28\\%$. The recovered $\\$40,000$ implied rate is lower than $16.28\\%$, not higher.`,
  },
  "math-11-39": {
    0: `Ten point six six years is $\\ln 2 / 0.065$. Rule of $72$ at $6.5\\%$ gives $11.1$ years, a cousin, not the recovered logarithm. This letter names the doubling time.

Letters C and E will compare quadrupling and tripling with this $10.66$. A solver who reported $11$ years would be the Rule-of-72 cousin.`,
    1: `Sixteen point nine zero years is $\\ln 3 / 0.065$. Linear scaling $1.5 \\times 10.66 = 15.99$ undershoots by about $0.91$ years, which is letter E's comparison.

The recovered tripling time is $16.90$ years, matching the claim. This letter names that wait.`,
    2: `Quadrupling is two doublings because $\\ln 4 = 2 \\ln 2$, so $t_4 = 2 t_2$ exactly in the logarithm. The recovered $21.33$ years matches $2 \\times 10.66$ up to rounding.

Tripling is not a power of $2$, which is why letter E fails. Quadrupling is that special case, matching the claim.`,
    3: `Four times $\\$12,000$ is $\\$48,000$ exactly, the balance at the quadrupling date by definition. Rebuilding $12,000 e^{0.065 \\times 21.33}$ lands on the same $\\$48,000$.

The cents are zeros because the multiple and the principal are round. This letter names that balance.`,
    4: `Three is $1.5$ times two as a multiple, but $\\ln 3 / \\ln 2 \\approx 1.585$, not $1.5$. The extra $0.91$ years above $15.99$ is the logarithm's curvature.

Quadrupling was the power-of-two exception. Tripling is not. The recovered tripling time is not $1.5$ doubling times.`,
  },
  "math-11-40": {
    0: `Asset A's five-year 6% continuous path is $\\$202,478.82$. Annual 6% would have left about $\\$200,734$. The extra is continuous compounding on this private-equity stake.

This letter names $A(5)$. Letters D and E will add it to B and C. The cents, $82$, match the exponential product.`,
    1: `Asset B's five-year 9% continuous depreciation is $\\$140,278.19$. Discrete annual 9% would be a little lighter. The drop from $\\$220,000$ is about $\\$80,000$, which letter D will weigh against A's and C's gains.

Letter E will flip this exponent's sign and turn $\\$140,278$ of decay into about $\\$345,029$ of growth. This letter names the decay-path value.`,
    2: `Asset C's two phases add to exponent $0.30$, the same as A's, so C shares A's growth factor on a $\\$100,000$ base, about $\\$134,986$. The claimed $\\$130,000$ is a 30% simple gain, about $\\$4,986$ light.

The recovered $C(5)$ is $\\$134,985.88$, not $\\$130,000$. Simple 30% ignores compounding on the two-phase path.`,
    3: `B drops about $\\$80,000$, which looks like a portfolio loss until A's $\\$52,479$ gain and C's $\\$34,986$ gain are added. Together those gains more than cover B's drop, leaving the portfolio about $\\$7,743$ above the starting $\\$470,000$.

The combined five-year value is $\\$477,743$, which is not less than the original principals. "Less than" has the ranking backwards.`,
    4: `Growth-path B is $220,000 e^{0.45} \\approx 345,029$, about $\\$5,029$ above $\\$340,000$. Rounding to the nearest ten thousand is $\\$350,000$, still above the cutoff.

The recovered growth-path value exceeds $\\$340,000$. The cutoff is a threshold, and the recovered figure clears it.`,
  },
});
console.log("padded 21-40 d");
