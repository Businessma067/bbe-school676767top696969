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
    1: `The bakery's gain column is what a lender would call interest income on this deposit. Continuous 5% produces $\\$230.72$. Annual 5% produces $\\$225.00$. The $\\$5.72$ extra is letter D in the interest line rather than the balance line.

Booking $\\$250$ would be a rounded-fifty slip above even the continuous gain. The claim named $\\$230.72$, which matches the recovered difference $4,730.72 - 4,500.00$.`,
    2: `A once-a-year 5% credit on $\\$4,500$ is $\\$4,725$ exactly. Continuous 5% is $\\$4,730.72$. The claimed $\\$4,735$ sits above both. No interpolation between annual and continuous can land above the ceiling.

The mix-up is a five-dollar bump past $\\$4,730$. Five dollars on this principal is a tenth of a point of extra yield the stem does not give.`,
    3: `On $\\$4,500$, a $0.1271$ point continuous lift is $\\$5.72$. On $\\$45,000$ it would be $\\$57.20$. The extra scales with principal and vanishes at a 0% quote. The stem has both a positive rate and a positive principal, so the extra is not zero.

The recovered pair is already in Part 3. This letter only asks whether they differ by $\\$5.72$. They do.`,
    4: `A 4% continuous factor is $e^{0.04} \\approx 1.0408$, still not $1.0400$ even at that wrong quote. The stem's $e^{0.05}$ is $1.051271$. Four-decimal rounding is $1.0513$. Two-decimal rounding is $1.05$. Nothing in that list is $1.0400$.

The claim named $1.0400$. That is a 4% annual factor, a full point and a different clock.`,
  },
  "math-11-22": {
    0: `The roaster's six-year book is the product already in Part 3, $\\$5,171.44$. A three-year book would be about $\\$4,068$. A twelve-year book would be about $\\$8,357$. This letter is the six-year line.

Rounding to $\\$5,170$ would still be the same dollar. Rounding to $\\$5,200$ would overstate the roast by about $\\$29$, the same slip letter C makes on the interest column.`,
    2: `Interest is $5,171.44 - 3,200 = 1,971.44$. The claimed $\\$2,000$ is a rounded hundred. Once Part 3 prints the cents, a rounded hundred is no longer an approximation of the same model. It is a different number.

A simple-interest book would have shown $\\$1,536$, which is not $\\$2,000$ either. The claim overstates the continuous gain.`,
    3: `Twelve years is two six-year blocks of the same factor $e^{0.48} \\approx 1.616$. Applying that factor twice to $\\$3,200$ gives $\\$8,357$, not $2 \\times 5,171$. Applying it once to $\\$5,171$ gives the same $\\$8,357$.

"Exactly double" would need $e^{0.48} = 2$, which is a $11.6\\%$ quote, not $8\\%$. The stem is $8\\%$.`,
    4: `Less than double is the inequality $8,357 < 10,343$. The gap is about $\\$1,986$, almost a second copy of the six-year interest column. That is not an accident: the missing extra is the amount by which $1.616$ falls short of $2$, applied to $S(6)$.

The claim reads that inequality in the true direction.`,
  },
  "math-11-23": {
    0: `On $\\$15,000$, $9.42\\%$ is about $\\$1,413$ of interest against $\\$1,350$ annually. The extra $\\$63$ is letter B. This letter only names the converted yield.

A client who left the quote at $9\\%$ would understate the year. Continuous compounding is what produces $9.42\\%$. The overview already converted $e^{0.09} - 1$.`,
    1: `Sixteen thousand four hundred twelve dollars and sixty-one cents is the dollar image of $9.42\\%$ on $\\$15,000$. Booking $\\$16,350$ is the annual companion. Booking $\\$16,500$ would be a 10% story.

The recovered continuous balance is $\\$16,412.61$. The claim named those cents, and they match Part 3.`,
    2: `Zero point four two is not more than $0.75$. The miss is $0.33$ of a point, about $\\$50$ on this $\\$15,000$ fund. A $0.75$-point continuous premium at a one-year horizon would need a quote nearer $12\\%$, not $9\\%$.

The cutoff fails. The recovered lift is $0.42$ points.`,
    3: `Doubling a continuous rate does not double the effective yield, because $e^{2r} - 1 > 2(e^{r} - 1)$. The extra $0.88$ points is that convexity. Annual compounding would have made both sides $18\\%$, a tie.

The stem is continuous. The recovered $19.72\\%$ exceeds $18.84\\%$, matching the claim.`,
    4: `Nineteen point seven two sits $0.22$ above $19.5$. On $\\$15,000$ that clearance is about $\\$33$. A $20\\%$ cutoff would have failed by $0.28$ of a point. The claim named $19.5\\%$ as a floor, and the recovered 18% conversion clears it.`,
  },
  "math-11-24": {
    0: `One plus ten percent is the yearly growth factor, $1.1000$, with no intra-year credits. On $\\$75,000$ that is $\\$82,500$ exactly. Letters B and C will raise the factor. This letter is the floor.

A solver who wrote $1.10^{2}$ would be treating two years as one. The stem's yearly clock for one year is $1.1000$.`,
    1: `Two half-year 5% credits square to $1.1025$ exactly. On $\\$75,000$ that is $\\$82,687.50$, which is $\\$187.50$ above the yearly $\\$82,500$. That $\\$187.50$ is letter E's first gap.

This letter names the factor $1.1025$. It is exact, not a rounded table value.`,
    2: `The continuous ceiling at 10% is $e^{0.10} \\approx 1.1052$. On $\\$75,000$ that is about $\\$82,888$. The extra over yearly is about $\\$388$. The extra over semi-annual is letter D's $\\$200.32$.

This letter names $1.1052$. Rounding $1.105171$ to four decimals matches the claim.`,
    3: `The recovered extra is $\\$200.32$, not $\\$250.32$. Fifty dollars on $\\$75,000$ is about $0.067$ of a point of extra yield the continuous-minus-semi-annual gap does not have.

Using yearly as the baseline would give $\\$388$, which is not $\\$250$ either. The claim overstates the last step.`,
  },
  "math-11-25": {
    0: `The board's one-year continuous book is $\\$99,372.65$. Naming $\\$98,500$ undershoots by $\\$873$, which is a 3.7%-style bump on $\\$95,000$. Every 4.5% clock, annual or continuous, sits above $\\$99,200$.

The claimed figure is below the whole 4.5% family. The recovered projection is $\\$99,372.65$.`,
    1: `Year 2 applies the same $1.0460$ to a larger base. $99,372.65 \\times 1.0460 \\approx 103,946.56$, matching a rebuild from $95,000 e^{0.09}$. This letter names that two-year figure.

A doubled $\\$98,500$ would be $\\$197,000$, a nonsense path. The recovered two-year book is $\\$103,946.56$.`,
    2: `Year 1 adds about $\\$4,373$. Year 2 adds about $\\$4,574$. The second year adds more dollars, not fewer. That is interest on the first year's gain, about $\\$201$.

The claim reversed the two increments. Growing funds have rising dollar adds at a fixed rate. This endowment is a growing fund.`,
    3: `A changing dollar add is not a changing factor. The factor is $e^{0.045} \\approx 1.0460$ every year. Part 3 already named that constant multiplier.

If the board cut the rate in year 2, the factor would change. The stem holds 4.5% for both years. The claim said a different factor each year. It does not.`,
  },
  "math-11-26": {
    0: `The four-year fleet value is $\\$40,219.20$, already in Part 3. A seven-year book is letter B. A doubled-rate book is letter D. This letter is the original four-year line.

Discrete 10% annual would have left about $\\$39,366$. Continuous 10% leaves more, because the write-down is smoother. The recovered figure is $\\$40,219.20$.`,
    1: `Just under half of $\\$60,000$ is $\\$29,795.12$ at year 7. The half-life at 10% continuous is $6.93$ years, so year 7 sits a few weeks past half. That is why the book is $\\$205$ below $\\$30,000$.

This letter names the seven-year value. Rebuilding from $v(4) \\times e^{-0.30}$ lands on the same dollars.`,
    2: `The remaining share $67.03\\%$ is $40,219.20 / 60,000$, also $e^{-0.40}$. The lost share is $32.97\\%$. The claim asks what remains, not what was lost.

About two-thirds remains after four years at 10% continuous. That is $67.03\\%$, matching the claim.`,
    3: `Twenty percent for four years leaves about $\\$26,960$, still $\\$1,960$ above $\\$25,000$. Linearly halving $\\$40,219$ would have cleared the cutoff from below and would have been the wrong model.

Remaining value is $e^{-\\delta t}$, not linear in $\\delta$. The recovered doubled-rate book does not fall below $\\$25,000$.`,
    4: `The first-year dollar drop is about $\\$5,710$. The fourth-year dollar drop is about $\\$4,230$. Older vans are a smaller base, so the same 10% takes fewer dollars.

That is the depreciation mirror of letter C in the endowment task. The claim said the first-year drop is larger. The recovered pair matches.`,
  },
  "math-11-27": {
    0: `The doubling time $(\\ln 2)/0.055 \\approx 12.60$ years is already in Part 3. Rule of $72$ at $5.5\\%$ gives $13.1$ years, a cousin. This letter names the logarithm, $12.60$.

A 12-year even wait would leave the reserve short of a double. The inversion is $12.60$, not $12$.`,
    1: `One doubling of $\\$18,000$ is $\\$36,000$ by definition. The date that produces that factor of $2$ is letter A's $12.60$ years. Stopping at $12$ years leaves about $\\$34,870$.

This letter names the one-doubling balance. Letter D will take three doublings to $\\$144,000$.`,
    2: `The wait sits in the denominator. Doubling $r$ halves $t$. At $11\\%$ the doubling time is about $6.30$ years, not $12.60$. Leaving the wait unchanged would describe a rate that does not appear in the formula.

The claim said unchanged. The recovered wait halves.`,
    3: `Three doublings multiply by $8$, not by $6$. $\\$18,000 \\times 8 = 144,000$ after about $37.8$ years. Adding $2+2+2$ is the trap that produces $\\$108,000$.

Repeated doublings multiply. The recovered three-doubling balance is $\\$144,000$, not six times the principal.`,
    4: `Larger $r$, smaller $t$. That is the reciprocal in $(\\ln 2)/r$. Letter C already showed the $11\\%$ case. This letter is the direction in general.

The claim has the relationship backwards. A higher rate shortens the wait to double, not lengthens it.`,
  },
  "math-11-28": {
    1: `Five point zero nine years is $\\ln(2.5)/0.18$. A linear $0.60/0.18 = 3.33$ years would write the press down too fast. Continuous depreciation is a logarithm, already inverted in Part 3.

This letter names $5.09$ years. Letter D will double it at $9\\%$. Letter C will read the remaining $\\$48,000$.`,
    2: `Forty percent of $\\$120,000$ is $\\$48,000$. That is the remaining value at the 60% loss date, by definition. Rebuilding the exponential lands on the same round dollars.

This letter names that remaining value. The cents are zeros because $0.40 \\times 120,000$ is exact.`,
    3: `Time sits in the denominator, so halving $\\delta$ doubles $t$. A 9% write-down takes $10.18$ years to lose 60%, twice $5.09$. Slower is longer, not shorter.

The recovered 9% wait matches the claim. A solver who thought a slower rate finishes sooner would reverse the inequality.`,
    4: `Keeping 20% inverts to $5$, and $\\ln 5 > \\ln 2.5$. The extra wait is about $3.85$ years, taking $5.09$ out to about $8.94$. A deeper loss needs more time at the same $18\\%$ rate.

The claim said the 80% wait is longer. The recovered pair is $8.94 > 5.09$.`,
  },
  "math-11-29": {
    0: `The 3% one-year extra is $\\$11.36$ on $\\$25,000$. Small next to the 15% extra of $\\$295.86$. This letter names the small gap. Letter B names the large one. Letter C will test their ratio against $30$.

The recovered pair is $\\$25,761.36$ against $\\$25,750.00$. Their difference matches the claim.`,
    1: `The 15% one-year extra is $\\$295.86$. Linear scaling by $15/3 = 5$ would have predicted about $\\$57$. Convexity produces about $26$ times the 3% gap, not $5$ times.

This letter names $\\$295.86$. The recovered 15% pair is $\\$29,045.86$ against $\\$28,750.00$.`,
    2: `Twenty-six is not more than thirty. The miss is about four-fold of the small gap, or about $\\$45$ on this $\\$25,000$ comparison. Rounding $26$ to $30$ is too much rounding.

The cutoff fails. The recovered ratio is about $26.04$.`,
    3: `Eight years at 3% grow the extra from $\\$11.36$ to $\\$111.98$. That is about ten times, not eight, because the gap itself compounds. Using $8 \\times 11.36$ undershoots by about $\\$21$.

Part 3 recovered $\\$111.98$, matching the claim.`,
    4: `The extra grows from $\\$11.36$ to $\\$111.98$ as the horizon stretches from one year to eight. Longer holding periods make the faster clock more advantageous, not less.

The claim has that direction backwards. The recovered gap grows with time.`,
  },
  "math-11-30": {
    0: `Fund A's ceiling is $\\$439,863.54$. Monthly B sits about $\\$165$ below. Daily B sits about $\\$5$ below. This letter names the ceiling.

Annual 9.5% would have left $\\$438,000$. Continuous compounding is what produces the extra $\\$1,864$. The recovered Fund A value matches the claim.`,
    1: `Fund B's monthly book is $\\$439,699.03$, not $\\$439,750$. The extra $\\$51$ in the claim is a guessed compromise between monthly and continuous. The monthly model does not land there.

The recovered monthly path is $\\$439,699.03$. Naming $\\$439,750$ overstates B.`,
    2: `The maximum effective rate at a 9.5% nominal is about $9.97\\%$, the continuous conversion. Setting that maximum equal to $9.50\\%$ names the floor as if it were the ceiling.

Those two ends differ by $0.47$ points, about $\\$1,864$ on $\\$400,000$. The recovered ceiling is $9.97\\%$, not $9.50\\%$.`,
    3: `Daily B reaches $\\$439,858.10$, still $\\$5.44$ below A. Close is not overtaking. No finite $m$ crosses $e^{r}$.

The claim said daily would exceed A. It does not. The recovered daily book stays under the ceiling.`,
    4: `The gap narrows from $\\$164.51$ monthly to $\\$5.44$ daily. More dates pull B toward A without passing A. That is $(1 + r/m)^{m}$ increasing in $m$ and approaching $e^{r}$ from below.

The recovered pair $164.51 > 5.44$ is that narrowing, matching the claim.`,
  },
});

apply("textbook/output/_rev/ch11/31_40.json", {
  "math-11-31": {
    0: `The implied $6.67\\%$ is $\\ln(34,200/28,000)/3$, already in Part 3. Simple interest would have said $7.38\\%$. The logarithm is slower because compounding did part of the observed $\\$6,200$ gain.

This letter names $6.67\\%$. Later letters project, linearize, double, and test 6% with it.`,
    1: `Two more years at $6.67\\%$ take $\\$34,200$ to $\\$39,078.52$. Rebuilding from $28,000 e^{0.333}$ lands on the same dollars. The straight-line companion $\\$38,333$ is letter C, about $\\$745$ light.

This letter names the exponential five-year projection.`,
    3: `Doubling $\\$28,000$ takes $(\\ln 2)/0.06667 \\approx 10.40$ years, not $12.40$. Two extra years would take the fund past $\\$56,000$ toward $\\$64,000$. Rule of $72$ at $6.67\\%$ gives about $10.8$, closer to $10.40$ than to $12.40$.

The recovered doubling time is $10.40$ years.`,
    4: `A 6% path for three years leaves about $\\$33,522$, which is $\\$678$ below the observed $\\$34,200$. Slower cannot exceed the data. The claim said exceed. The inequality is backwards.

The recovered 6% three-year value sits below $\\$34,200$.`,
  },
  "math-11-32": {
    0: `X's two-year continuous 6.8% book is $\\$68,740.91$. Y and Z will finish higher because they quote more. This letter only names X.

Annual 6.8% would have left about $\\$68,438$. The extra is X's continuous clock. The recovered figure matches the claim.`,
    1: `Y's monthly 6.9% book is $\\$68,851.32$, about $\\$110$ above X. The extra $0.10$ points of quote outweigh X's continuous clock. This letter names Y.

Giving Y a continuous clock it does not have would overstate Y. The recovered monthly path matches the claim.`,
    2: `Z's quarterly 7.0% book is $\\$68,932.91$, the highest of the three. About $\\$82$ above Y. This letter names Z.

The treasurer who takes Z takes the largest two-year value on the page. Letter D will rank $X < Y < Z$.`,
    3: `Clock ranking would put X first. Dollar ranking puts X last. A $0.20$ point printed hole is too much for the continuous ceiling to fill against Z. Letter E will equalize the quotes and flip the ranking.

On this stem X is lowest at $\\$68,740.91$, matching the claim.`,
    4: `Matched 7.0% continuous X reaches about $\\$69,016$, about $\\$83$ above Z. Once quotes match, continuous is the ceiling. Letter D failed because the quotes did not match.

This letter equalizes them. The recovered matched-rate X exceeds Z.`,
  },
  "math-11-33": {
    0: `Net rate is gross minus fee: $9\\% - 2\\% = 7\\%$. Adding to $11\\%$ describes a cost piled on growth. Every later letter uses 7%. An 11% leak would inflate $S(6)$ toward $\\$3.88$ million and shrink the doubling time toward $6.3$ years.

The recovered net rate is $7\\%$. The claim has the sign wrong.`,
    1: `Six years at 7% continuous on $\\$2,000,000$ is about $\\$3,043,923$, not $\\$3,100,000$. The extra $\\$56,000$ in the claim sits between the net path and the gross 9% path near $\\$3,430,000$.

The recovered six-year net value is $\\$3,043,923$. Naming $\\$3,100,000$ overstates it.`,
    2: `Doubling at 7% takes $9.90$ years, not $7.00$. Seven years is a Rule-of-72 fragment on the gross 9%, ignoring the fee. The fee lengthens the wait.

The recovered net doubling time is $9.90$ years. The claim named $7.00$.`,
  },
  "math-11-34": {
    1: `They meet at $10.06$ years and $\\$74,767.44$. Ignoring B's decay and waiting for A to grow to $\\$250,000$ would take about $40$ years. B is falling, so they meet much sooner.

This letter names that crossover. Letter C will check $t = 10$, three weeks earlier.`,
    2: `At $t = 10$, A is about $\\$74,591$ and B is about $\\$75,299$. A is still $\\$707$ behind. Rounding $10.06$ down to $10$ skips the last three weeks of the catch-up.

The claim said A is already ahead at $t = 10$. It is not.`,
    3: `Never-overtaking would need $r_A + \\delta_B \\le 0$. Here that sum is $0.16 > 0$, so a crossing is guaranteed and already dated at $10.06$ years. The "never" wording is the claim, and that date refutes it.`,
    4: `After $10.06$ years the ratio $A/B$ keeps climbing past $1$. A stays ahead. For the opposite verdict B would have to start growing, or A decaying, after the crossover. The stem holds both trends.`,
  },
  "math-11-35": {
    1: `The two middle clocks sit at $\\$42,874.36$ quarterly and $\\$42,891.60$ monthly. Both are above the annual $\\$42,800$ and below the continuous $\\$42,900.33$. This letter names that pair.

Swapping them would still keep quarterly below monthly. The recovered pair matches the claim.`,
    2: `The four recovered values rise with frequency: $42,800.00 < 42,874.36 < 42,891.60 < 42,900.33$. Monthly cannot overtake continuous at a shared 7% quote. The ranking matches the claim.`,
    3: `Quarterly to monthly is $\\$17.24$. Monthly to continuous is $\\$8.73$. The first of those last two steps is larger. The claim reversed them.

Diminishing returns at 7%: $n = 4$ to $n = 12$ still captures more leftover compounding than $n = 12$ to $n = \\infty$.`,
    4: `No finite $m$ beats $e^{0.07}$. Daily or hourly compounding sits in the remaining $\\$8.73$ gap, never above $\\$42,900.33$. The recovered continuous value is the maximum at this 7% quote, matching the claim.`,
  },
  "math-11-36": {
    0: `Option 1 needs $\\$69,767.63$ today at 4.5% continuous for eight years. Annual 4.5% would have needed a little more. This letter names Option 1.

Letter B will put Option 2 about $\\$7,889$ lower. The recovered continuous deposit matches the claim.`,
    1: `Option 2 needs $\\$61,878.34$ today at 6% continuous. Faster growth, smaller present value of a fixed $\\$100,000$ bill. Reusing Option 1's $\\$69,768$ would ignore the extra $1.5$ points.

The recovered Option 2 deposit matches the claim.`,
    2: `Option 2 is the smaller check: $61,878 < 69,768$. A higher rate is not a more expensive product when the parent is discounting a fixed target. "Larger" has the ranking backwards.`,
    3: `The gap is $\\$7,889$, Option 1 larger, not $\\$9,000$ with Option 2 larger. Both the size and the assignment fail. Rounding to $\\$8,000$ still would not be $\\$9,000$ and still would not flip who pays more.`,
    4: `Four years at 4.5% need about $\\$83,527$ today, $\\$13,759$ more than the eight-year requirement. Less time means more cash from the parent. The claim said smaller. The recovered four-year deposit is larger.`,
  },
  "math-11-37": {
    0: `Year-4 revenue is $\\$2,685,284.46$ after four years of 10% continuous on $\\$1,800,000$. Annual 10% would have left about $\\$2,636,000$. This letter names the expansion-phase endpoint.

Letter B will grow this through the 4% maturity phase.`,
    1: `Year-7 revenue is $\\$3,027,649.77$, which is also $S(4) \\times e^{0.12}$ and $1,800,000 e^{0.52}$. This letter names that endpoint. Letter C will call $7.43\\%$ the constant equivalent that lands on the same dollars.`,
    2: `The constant equivalent is $0.52/7 \\approx 7.43\\%$, a time-weighted mix, not a 50-50 mix of 10% and 4%. Checking $e^{0.0743 \\times 7} = e^{0.52}$ reproduces $S(7)$. The recovered effective rate is $7.43\\%$.`,
    3: `Unweighted $7\\%$ understates the four expansion years. Weights $4/7$ and $3/7$ produce $7.43\\%$. The extra $0.43$ of a point is that overweighting. The effective rate is higher than $7.00\\%$, matching the claim.`,
    4: `The year-7 endpoint depends on the total exponent $0.52$, not on the order of the two phases. Reversing 4% then 10% changes year 3 and leaves year 7 unchanged. The stem is a single opening base, so multiplication commutes.`,
  },
  "math-11-38": {
    1: `The implied $\\delta$ is $16.28\\%$, from $\\ln(85,000/32,000)/6$. A linear write-down would have said about $10.4\\%$. Letter A's false formula would have said $-16.28\\%$. This letter names the positive continuous rate.`,
    2: `The 15% crane retains about $\\$34,558$, not $\\$36,000$. Fourteen hundred dollars of overstatement is a rounded factor near $0.424$ instead of $e^{-0.90} \\approx 0.4066$. The recovered six-year value is $\\$34,558.42$.`,
    3: `The first crane retains $\\$32,000$. The second retains about $\\$34,558$. Faster implied write-down, less remaining value. The claim said the first retains more. The ranking is backwards.`,
    4: `A $\\$40,000$ target is gentler than $\\$32,000$ over the same six years, so implied $\\delta$ falls to about $12.56\\%$. Less depreciation is needed to land higher. $12.56\\% < 16.28\\%$. The claim said higher.`,
  },
  "math-11-39": {
    0: `Doubling at $6.5\\%$ takes $10.66$ years. Rule of $72$ gives $11.1$ years, a cousin. This letter names the logarithm. Letters C and E will compare quadrupling and tripling with this $10.66$.`,
    1: `Tripling at $6.5\\%$ takes $16.90$ years. Linear $1.5 \\times 10.66 = 15.99$ undershoots by $0.91$ years, letter E's comparison. This letter names $16.90$.`,
    2: `Quadrupling is two doublings because $\\ln 4 = 2 \\ln 2$. The recovered $21.33$ years matches $2 \\times 10.66$ up to rounding. Tripling is not a power of $2$. Quadrupling is that special case, matching the claim.`,
    3: `Four times $\\$12,000$ is $\\$48,000$ at the quadrupling date. Rebuilding the exponential lands on the same round dollars. This letter names that balance.`,
    4: `$\\ln 3 / \\ln 2 \\approx 1.585$, not $1.5$. The extra $0.91$ years above $15.99$ is the logarithm's curvature. Quadrupling was the power-of-two exception. Tripling is not. The recovered tripling time is not $1.5$ doubling times.`,
  },
  "math-11-40": {
    0: `A's five-year 6% continuous book is $\\$202,478.82$. Annual 6% would have left about $\\$200,734$. This letter names A's stake. Letters D and E will add it to B and C.`,
    1: `B's five-year 9% decay book is $\\$140,278.19$, a drop of about $\\$80,000$ from $\\$220,000$. Letter E will flip the exponent and turn this into about $\\$345,029$ of growth. This letter names the decay path.`,
    2: `C shares A's factor $e^{0.30}$ on a $\\$100,000$ base, about $\\$134,986$. The claimed $\\$130,000$ is a 30% simple gain, $\\$4,986$ light. The recovered $C(5)$ is $\\$134,985.88$.`,
    3: `B's $\\$80,000$ drop is more than covered by A's $\\$52,479$ gain and C's $\\$34,986$ gain. The portfolio finishes at $\\$477,743$, about $\\$7,743$ above the starting $\\$470,000$. "Less than" has the ranking backwards.`,
    4: `Growth-path B is about $\\$345,029$, which clears $\\$340,000$ by about $\\$5,029$. Rounding to the nearest ten thousand is $\\$350,000$, still above the cutoff. The recovered growth-path value exceeds $\\$340,000$.`,
  },
});
console.log("padded 21-40 c");
