import fs from "node:fs";

const file = new URL("./61_70.json", import.meta.url);

const bodies = {
  "math-11-61": [
    `The startup earns \\$50 million this year and then grows 10% a year. Year 2 is one growth step past that opening term, not a five-year total and not a year-5 snapshot.

The overview recovered $a_2 = 55.00$. This letter is reading that year-2 revenue. It is not rebuilding $(1.10)^{4}$ or the geometric sum.

**1.** The trap is $50 \\times 1.10^{2} = 60.50$, treating year 2 as two growth steps. The first year is the uncompounded opening term $a$, so year 2 carries the power $1$, not $2$.

**2.** Another mix-up is leaving year 2 at $\\$50$ million, as if growth started only after year 2. The stem grows for each of the next four years, so year 2 already includes one 10% lift.

Year 2 is the simplest lookup in the task. Later letters use $a_5$ and $s_5$. Those need the same $k = 1.10$, not a second rate.

The recovered year-2 revenue is \\$55.00 million, so the statement is True.`,

    `Year 5 is the last term of the five-year window. It carries four growth steps past the opening \\$50 million, not five.

The overview recovered $a_5 \\approx 73.21$ from $50 \\times (1.10)^{4}$. This letter is reading that year-5 revenue. It is not summing the five years.

**1.** The trap is $50 \\times (1.10)^{5} \\approx 80.53$, as if year 5 sat five steps past year 0 rather than four steps past year 1. The first term is already year 1.

**2.** Another mix-up is reporting the five-year total $305.26$ as if it were a single year's revenue. Letter C is the sum. This letter is the last term.

Four steps at 10% turn \\$50 million into about \\$73.21 million. A solver who used three steps would land near \\$66.55 million and would miss the claim's cents.

The recovered year-5 revenue is about \\$73.21 million, so the statement is True.`,

    `The founder wants the five-year revenue pile, not a single year's snapshot. That pile is the finite geometric sum with first term $50$ and quotient $1.10$.

The overview recovered $s_5 \\approx 305.26$ from $50 \\times 6.1051$. This letter is reading that total. It is not rebuilding $(1.10)^{5}$ as a new conversion.

**1.** The trap is $50 \\times 5 = 250$, five flat copies of the opening year. That is letter D's companion path, about \\$55 million light.

**2.** Another mix-up is $50 \\times (1.10)^{5} \\approx 80.53$, treating the growth factor itself as the five-year total. The sum formula divides $(k^{n}-1)$ by $(k-1)$.

Letter E will name a different false total, $\\$328.86$ million. This letter only asks whether the recovered sum is about $\\$305.26$ million. It is.

The recovered five-year total is about \\$305.26 million, so the statement is True.`,

    `The statement holds revenue flat at \\$50 million for five years, which really does total \\$250 million, and then claims that this flat path sits exactly \\$60 million below the growing total.

The overview recovered $s_5 \\approx 305.26$ and the flat companion $250$. Their gap is

$$305.26 - 250 = 55.26$$

so growth adds about \\$55.26 million, not \\$60 million. The ranking is right. The dollar amount is wrong.

**1.** Why the extra arithmetic is only a subtraction: both totals are already in the overview. This letter does not rebuild $(1.10)^{5}$. It only tests the named \\$60 million cutoff against the recovered \\$55.26 million gap.

**2.** A rushed solver who rounded $305.26$ to $310$ and subtracted $250$ would manufacture exactly $\\$60$ million. Rounding the total first is how the false gap appears. Full precision keeps the extra at $\\$55.26$ million.

**3.** Another mix-up is treating 10% of $\\$50$ million times five years as $\\$25$ million of extra, or 10% of $\\$250$ million as $\\$25$ million, and then adding that to something to reach $\\$60$. Linear 10% of the opening year, five times, ignores that years 3 through 5 grow on a larger base. The geometric extra is $\\$55.26$ million, already larger than a naive $\\$25$ million and smaller than the claimed $\\$60$ million.

In the story, the founder is asking how much the 10% path is worth relative to a no-growth plan. The recovered objects are $s_5 \\approx 305.26$ and the flat $250$. The claim's own move is to name the difference as $\\$60$ million exactly. That named difference overshoots the recovered gap by about $\\$4.74$ million.

A solver who compared only the last year, $73.21$ versus $50$, and then multiplied the $\\$23.21$ million year-5 extra by something, would also miss. Extra revenue is spread across years 2 through 5, not concentrated in year 5.

What would have to change for the opposite verdict is a recovered growing total near $\\$310$ million, because $310 - 250 = 60$. At 10% for five years starting from $\\$50$ million, the recovered total is $\\$305.26$ million. A higher growth rate, or a sixth year, could push the extra through $\\$60$ million. The stem has five years at 10%.

The word "exactly" is doing work here. Even "approximately \\$60 million" would be a stretch: $\\$55.26$ million is not a rounding of $\\$60$ million. The claim's exact $\\$60.00$ million is a round number with no model behind it on this page.

The recovered growth premium is about \\$55.26 million, not \\$60 million, so the statement is False.`,

    `The statement names a second five-year total, about \\$328.86 million, as if that were the growing path.

The overview recovered $s_5 \\approx 305.26$. The claimed $\\$328.86$ million sits about $\\$23.60$ million too high.

The extra against the recovered total is

$$328.86 - 305.26 = 23.60$$

so the wording overstates five-year revenue by about \\$23.60 million.

**1.** The figure $\\$328.86$ million is what you get if you sum six years instead of five, because

$$s_6 = 50 \\times \\frac{1.10^{6}-1}{0.10} \\approx 385.78$$

is larger still, or if you add year 5 twice: $305.26 + 23.21 \\approx 328.47$, a neighbour of $328.86$. Counting year 5 twice is the likely mix-up. The window is five distinct years.

**2.** Another trap is $50 \\times (1.10)^{5} \\times 4$, or using the growth factor $1.61051$ as if it were already a sum of millions. The finite-sum formula is $50 \\times 6.1051$, already computed in Part 3.

**3.** Letter C already locked the total at about $\\$305.26$ million. This letter only asks whether that recovered total is approximately $\\$328.86$ million. It is not.

In the story, the founder is still asking for five-year revenue under 10% growth. The recovered object is $s_5$. The claim's extra arithmetic is the $\\$23.60$ million gap versus a nearby round-looking total.

A rushed solver who used $n = 6$ in the exponent of the last term and then summed five copies of something near $\\$65.8$ million could also invent $\\$329$ million. The stem's $n$ is $5$.

What would have to change for the opposite verdict is a recovered five-year sum near $\\$328.86$ million. That would take a higher growth rate, near 12%, or an extra year. Under 10% for five years starting at $\\$50$ million, the total is $\\$305.26$ million.

Letter D's false $\\$60$ million extra would have implied a growing total of $\\$310$ million, which is still not $\\$328.86$ million. Two different wrong companions sit above the recovered $s_5$. Neither is this path.

The recovered five-year total is about \\$305.26 million, not \\$328.86 million, so the statement is False.`,
  ],

  "math-11-62": [
    `Monthly profits start at \\$2,000 and then halve every month forever. An infinite geometric series with $|k|<1$ has a finite sum.

The overview recovered $|0.5| = 0.5 < 1$, so the series converges. This letter is reading that test. It is not yet naming the dollar total.

**1.** The trap is thinking "forever means infinite dollars." Forever with a ratio $0.5$ still piles up to a finite amount, because each month is half the last.

**2.** Another mix-up is checking $k > 0$ instead of $|k|<1$. Sign does not decide convergence here. Magnitude does. Letter E will break $|k|<1$ by setting $k = 1.5$.

The recovered series converges, so the statement is True.`,

    `The company wants the dollar total of every future monthly profit, including this month's \\$2,000, if renewals halve forever.

The overview recovered $2{,}000 / (1-0.5) = 4{,}000$. This letter is reading that infinite sum. It is not listing the first four months.

**1.** The trap is $2{,}000 / 0.5 = 4{,}000$ done correctly and then doubled "because it is infinite," landing on $\\$8,000$. The formula already includes every later month.

**2.** Another mix-up is $2{,}000 / (1+0.5)$, which treats the quotient as growth. Here $k = 0.5$ is decay, so the denominator is $1-k = 0.5$.

The recovered infinite profit total is \\$4,000.00, so the statement is True.`,

    `The statement asks only for the first four months: \\$2,000, then half, then half, then half.

The overview recovered $2{,}000+1{,}000+500+250 = 3{,}750$. This letter is reading that partial sum. It is not the infinite total.

**1.** The trap is stopping after three months at $\\$3,500$, or including a fifth month of $\\$125$ and reporting $\\$3,875$. Four months is $n = 4$.

**2.** Letter D will compare this $\\$3,750$ with the infinite $\\$4,000$. This letter only asks whether the four-month pile is $\\$3,750$.

The first four months already capture most of the infinite total, because the remaining tail is itself a geometric series starting at $\\$125$.

The recovered four-month sum is \\$3,750.00, so the statement is True.`,

    `The statement ranks the four-month partial sum against the infinite total and claims the partial sum is larger.

The overview recovered $s_4 = 3{,}750$ and $s_{\\infty} = 4{,}000$. A partial sum of a series of positive terms cannot exceed the infinite sum. The ranking is

$$3{,}750 < 4{,}000$$

so the four-month pile sits $\\$250$ below the infinite total, not above it.

**1.** Why this is extra arithmetic only as a comparison: both figures are already in the overview. This letter does not rebuild $a/(1-k)$. It only tests $s_4$ against $s_{\\infty}$.

**2.** The trap is treating "the first four months are most of the money" as "the first four months are more than all the money." Most is not more. The remaining tail from month 5 onward is

$$\\frac{125}{1-0.5} = 250$$

which is exactly the $\\$250$ gap. That tail is positive, so the infinite sum must sit above the partial sum.

**3.** A rushed solver who used $k = -0.5$ and cancelled terms, or who dropped the opening $\\$2,000$, could manufacture a partial sum above $\\$4,000$. The stem's profits are positive and halved, not signed.

In the story, the subscription line earns less each month but never earns a negative month. Adding later months can only raise the total. The recovered objects are the four-month $\\$3,750$ and the infinite $\\$4,000$. The claim's extra move is to say the smaller pile exceeds the larger one.

What would have to change for the opposite verdict is a signed series whose later terms are negative enough to pull the infinite sum below $s_4$. Letter 66 has that pattern. This product line does not.

The $\\$250$ tail is not a rounding of $\\$0$. Four months capture $3{,}750/4{,}000 = 93.75\\%$ of the infinite total, which is most, and still not more than $100\\%$.

The recovered four-month sum sits below the recovered infinite sum, so the statement is False.`,

    `The statement swaps the halving quotient for $k = 1.5$ and claims the infinite series would still converge, to $-\\$4,000$.

The overview recovered $|1.5| = 1.5 \\ge 1$, so the convergence test fails. There is no finite infinite-sum, and in particular there is no $-\\$4,000$ total.

The formula $a/(1-k)$ at $k = 1.5$ would formally give

$$\\frac{2{,}000}{1-1.5} = \\frac{2{,}000}{-0.5} = -4{,}000$$

which is exactly the claimed figure. That algebraic extension is not a sum of profits. The terms $2{,}000$, $3{,}000$, $4{,}500$, $\\ldots$ grow without bound, so the partial sums diverge to $+\\infty$, not to a negative number.

**1.** The trap is plugging $|k|\\ge 1$ into $a/(1-k)$ anyway, because the algebra still produces a number. The number $-\\$4,000$ is that illegal plug-in. Convergence is a gate in front of the formula, not a decoration.

**2.** Another mix-up is thinking a negative total could describe "losses from too-fast growth." The model here is monthly profit, and at $k = 1.5$ those profits get larger, not negative.

**3.** Letter A already used $|k|<1$ as the gate. This letter only changes $k$ to $1.5$ and asks whether the gate still opens. It does not.

In the story, $k = 1.5$ would mean each month's profit is $50\\%$ larger than the last. Renewals would explode, not decay. An exploding series of positive terms cannot converge to a finite sum, and it cannot converge to a negative sum.

A rushed solver who remembered "the formula gave $-4{,}000$ on the calculator" would agree with the wording and would have skipped the $|k|<1$ test. The overview already ran that test and failed it.

What would have to change for the opposite verdict is a quotient with $|k|<1$. The stem's hypothetical is $k = 1.5$. At that quotient the series diverges.

The recovered $k = 1.5$ series does not converge, so the statement is False.`,
  ],

  "math-11-63": [
    `Each year's deposit is 90% of the previous year's, forever, starting at \\$800. An infinite geometric series converges when $|k|<1$.

The overview recovered $|0.90| = 0.90 < 1$, so the declining deposits have a finite total. This letter is reading that test.

**1.** The trap is thinking "forever plus dollars means an infinite pile." Decay at 10% a year still sums, because the later deposits get small.

**2.** Letter E will set $k = 1.10$ and fail the same test. This letter is the stem's $k = 0.90$.

The recovered series converges, so the statement is True.`,

    `The investor wants the dollar total of every declining deposit, starting at \\$800 this year.

The overview recovered $800 / 0.10 = 8{,}000$. This letter is reading that infinite sum. It is not the ten-year partial sum.

**1.** The trap is $800 / 0.90 \\approx 889$, dividing by $k$ instead of by $1-k$. The leftover fraction each year is $10\\%$, not $90\\%$.

**2.** Another mix-up is $800 \\times 10 = 8{,}000$ for a ten-year flat plan. The $\\$8,000$ here is the infinite decaying total, and it happens to match that flat coincidence. Letter C's ten-year decaying sum is $\\$5,210.57$, not $\\$8,000$.

The recovered infinite deposit total is \\$8,000.00, so the statement is True.`,

    `The statement asks for the first ten declining deposits, not the infinite pile.

The overview recovered $s_{10} \\approx 5{,}210.57$ from $800 \\times 6.5132$. This letter is reading that ten-year sum.

**1.** The trap is $800 \\times 10 = 8{,}000$, ten flat copies, which is actually the infinite decaying total. Ten decaying deposits cannot reach the infinite total.

**2.** Another mix-up is $800 \\times 0.90^{10} \\approx 279$, reporting the tenth deposit as if it were the ten-year sum.

Letter D will turn $\\$5,210.57$ into a $65\\%$ share of $\\$8,000$. This letter only names the ten-year dollars.

The recovered ten-deposit total is about \\$5,210.57, so the statement is True.`,

    `The statement asks whether the first ten deposits are about $65\\%$ of the infinite $\\$8,000$ total.

The overview recovered $s_{10} \\approx 5{,}210.57$ and $s_{\\infty} = 8{,}000$. Their share is

$$\\frac{5{,}210.57}{8{,}000} \\approx 0.6513$$

which is about $65\\%$. This letter is reading that recovered share. It is not rebuilding $0.90^{10}$.

**1.** A rushed solver who used $10/\\infty$ as if time-shares were linear would have no percentage at all. Ten years is not $65\\%$ of forever in calendar terms. It is $65\\%$ in dollars because the later deposits are small.

**2.** Another mix-up is $5{,}210.57 / 8{,}000$ reported as $52\\%$, dropping a digit, or as $75\\%$ from $1-0.90^{10} \\approx 0.651$ misread as $0.75$. The recovered share is $65.13\\%$, which the claim rounds to $65\\%$.

**3.** The extra arithmetic is only the comparison of that $65.13\\%$ with the wording "about $65\\%$." Rounding $0.6513$ to $65\\%$ is the approximation the claim uses. It is not $60\\%$ and not $70\\%$.

In the story, the sinking-fund investor is asking how much of the lifetime contribution sits in the first decade. The recovered objects are $s_{10}$ and $s_{\\infty}$. Most of the money arrives early because each deposit is $90\\%$ of the last.

What would have to change for the opposite verdict is a recovered share far from $65\\%$, for example if $k$ were $0.50$, where ten terms would already be almost the whole infinite sum. At $k = 0.90$ the first ten deposits are about $65\\%$ of the lifetime total.

The recovered ten-year share is about 65% of the infinite total, so the statement is True.`,

    `The statement replaces the $90\\%$ decay with $k = 1.10$ and claims the infinite series would then diverge.

The overview recovered $|1.10| = 1.10 \\ge 1$, so the convergence test fails. Growing deposits of $\\$800$, $\\$880$, $\\$968$, $\\ldots$ have partial sums that run to infinity.

**1.** The trap is plugging $k = 1.10$ into $a/(1-k)$ and reporting $-\\$8,000$ as a "sum." That algebraic extension is not a sum. Divergence means there is no finite total.

**2.** Letter A already used $|k|<1$ as the gate for $k = 0.90$. This letter only changes $k$ to $1.10$. The gate closes.

A 10% growing contribution plan cannot be given a finite lifetime pile by the infinite geometric formula. The recovered $k = 1.10$ series diverges.

The recovered $k = 1.10$ series diverges, so the statement is True.`,
  ],

  "math-11-64": [
    `At a constant $300{,}000$ tons a year, the $18{,}000{,}000$-ton reserve is a division, not a geometric sum.

The overview recovered $18{,}000{,}000 / 300{,}000 = 60$ years. This letter is reading that exhaustion time.

**1.** The trap is $18{,}000{,}000 / 3{,}000{,}000 = 6$, losing zeros, or $300{,}000 / 18{,}000{,}000$. Exhaustion is reserve over annual take.

**2.** Letter B will repeat the same division at $500{,}000$ tons a year. This letter is the $300{,}000$ clock.

The recovered constant-rate life is exactly 60 years, so the statement is True.`,

    `The statement raises constant extraction to $500{,}000$ tons a year and names a 36-year life.

The overview recovered $18{,}000{,}000 / 500{,}000 = 36$ years. This letter is reading that second division.

**1.** The trap is scaling 60 years by $300/500 = 0.6$ and then rounding $36$ to $40$. The division is exact: $36$ years, not about $36$.

**2.** Another mix-up is $18 / 0.5 = 36$ done in millions correctly and then adding the growing-scenario years. This letter is constant $500{,}000$ only.

The recovered $500{,}000$-ton life is 36 years, so the statement is True.`,

    `The statement says that constant extraction is the $k = 1$ case of a geometric series, so $n$ years total $a \\times n$.

The overview recovered that identity: when the yearly take does not change, $s_n = a n$. This letter is reading that special case, not summing a growing path.

**1.** The trap is plugging $k = 1$ into $a(k^{n}-1)/(k-1)$ and dividing by zero. That is why the $k = 1$ case is written separately as $a n$. Letter 67 makes the same point for pension contributions.

**2.** The lithium constant-rate totals $300{,}000 \\times 10 = 3{,}000{,}000$ and $300{,}000 \\times 60 = 18{,}000{,}000$ both use $s_n = a n$. Neither needs a growth factor.

The recovered $k = 1$ total is yearly amount times number of years, so the statement is True.`,

    `The statement switches to 5% growth for 10 years from a first-year take of $300{,}000$ tons and names a ten-year total of about $3{,}900{,}000$ tons.

The overview recovered $s_{10} \\approx 3{,}773{,}368$ from $300{,}000 \\times (1.05^{10}-1)/0.05$. The claimed $3{,}900{,}000$ overstates that take by about $126{,}632$ tons.

The gap is

$$3{,}900{,}000 - 3{,}773{,}368 = 126{,}632$$

so the wording is not a rounding of the recovered geometric total.

**1.** The figure $3{,}900{,}000$ is what you get from $300{,}000 \\times 10 \\times 1.30$, a $30\\%$ garnish on the constant ten-year take, or from $300{,}000 \\times (1.05)^{10} \\times 8$. Neither is the finite-sum formula. The recovered total already sits in Part 3.

**2.** A rushed solver who used $300{,}000 \\times 10 \\times 1.05 = 3{,}150{,}000$ would understate, applying one year of growth to all ten years. Someone who used $a(k^{n}-1)/k$ without subtracting $1$ in the right place could overshoot toward $3.9$ million.

**3.** Letter E will subtract this growing total from the constant $3{,}000{,}000$. This letter only asks whether the growing ten-year take is about $3{,}900{,}000$. It is about $3{,}773{,}368$.

In the story, the mine is asking how many tons leave the ground over a decade if extraction grows 5% a year from $300{,}000$. The recovered object is $s_{10}$. The claim's extra arithmetic is the $126{,}632$-ton gap versus a round $3.9$ million.

What would have to change for the opposite verdict is a recovered $s_{10}$ near $3.9$ million, which would take a growth rate a little above 5% or an eleventh year. At 5% for ten years the recovered take is about $3.77$ million tons.

A table that rounded $3{,}773{,}368$ to $3{,}800{,}000$ would still not be $3{,}900{,}000$. The claimed extra $100{,}000$ tons above even that round is not cents.

The recovered ten-year growing extraction is about 3,773,368 tons, not 3,900,000 tons, so the statement is False.`,

    `The statement claims the 5% growing ten-year take exceeds the constant $300{,}000$-ton ten-year take by more than $1{,}000{,}000$ tons.

The overview recovered $s_{10} \\approx 3{,}773{,}368$ under growth and $3{,}000{,}000$ under a constant take. Their extra is

$$3{,}773{,}368 - 3{,}000{,}000 = 773{,}368$$

which sits about $226{,}632$ tons short of a $1{,}000{,}000$-ton cutoff.

**1.** Why the extra arithmetic is a threshold test: both totals are already in the overview. This letter only asks whether $773{,}368$ clears $1{,}000{,}000$. It does not.

**2.** The trap is using letter D's false $3{,}900{,}000$, which would give a $900{,}000$-ton extra, still under $1{,}000{,}000$, or rounding $773{,}368$ up to $1$ million. Full precision keeps the extra at about $773{,}000$ tons.

**3.** Another mix-up is $0.05 \\times 10 \\times 3{,}000{,}000 = 1{,}500{,}000$, treating 5% of the constant decade as if it were a simple add-on each year on the whole pile. Growth at 5% compounds on the annual take, not on the decade total.

In the story, the analysts are asking how much extra lithium a 5% ramp removes in ten years relative to holding extraction flat. The recovered extra is $773{,}368$ tons. That is a real extra, and it is not more than a million tons.

A rushed solver who compared year-10 extraction $300{,}000 \\times 1.05^{9} \\approx 465{,}000$ with $300{,}000$ and then multiplied the $165{,}000$-ton year-10 extra by six would invent about $1{,}000{,}000$ tons. Extra tons are spread across the decade, and the recovered sum of those extras is $773{,}368$.

What would have to change for the opposite verdict is a recovered extra above $1{,}000{,}000$ tons, which would take faster growth or more years. At 5% for ten years from $300{,}000$ tons, the extra is about $773{,}000$ tons.

The $226{,}632$-ton miss is not a rounding of the cutoff. Rounding $773{,}368$ to $770{,}000$ still misses $1{,}000{,}000$.

The recovered extra is about 773,368 tons, which is not more than 1,000,000 tons, so the statement is False.`,
  ],

  "math-11-65": [
    `This year's coal output is 180 million tons and then falls 3% a year. Year 2 is one decline step.

The overview recovered $a_2 = 180 \\times 0.97 = 174.6$. This letter is reading that year-2 output.

**1.** The trap is $180 \\times 0.97^{2} \\approx 169.4$, treating year 2 as two decline steps. Year 1 is the unreduced opening term.

**2.** Another mix-up is $180 - 3 = 177$, subtracting 3 million tons instead of 3%. The stem's 3% is a quotient $k = 0.97$.

The recovered year-2 output is 174.6 million tons, so the statement is True.`,

    `The statement names the infinite 3%-decline total as 6,000 million tons.

The overview recovered $180 / 0.03 = 6{,}000$. This letter is reading that infinite extraction. It is not the stranded remainder.

**1.** The trap is $180 / 0.97 \\approx 186$, dividing by $k$ instead of by $1-k$. The leftover fraction is $3\\%$, not $97\\%$.

**2.** Letter C will subtract this $6{,}000$ from the $9{,}000$ million-ton reserve. This letter only names the extracted infinite total.

The recovered infinite extraction is 6,000 million tons, so the statement is True.`,

    `The statement says the 3%-decline path never exhausts the 9,000 million-ton reserve, leaving 3 billion tons stranded.

The overview recovered $s_{\\infty} = 6{,}000$ million tons extracted, so

$$9{,}000 - 6{,}000 = 3{,}000$$

million tons remain. That leftover is 3 billion tons, and because the infinite sum converges, those 3 billion tons are never taken.

**1.** Why this is a threshold claim, not a lookup: the letter has to connect convergence to a leftover reserve. A convergent extraction path with $s_{\\infty} < $ reserve leaves a permanently stranded pile. That is the meaning of $3{,}000$ million tons here.

**2.** The trap is thinking "forever means the whole reserve goes." Forever at a decaying 3% path still sums only to $6{,}000$ million tons. The extra $3{,}000$ million tons stay in the ground because later years' output gets small.

**3.** Letter D will steepen the decline to 5% and strand even more. This letter is the 3% leftover of 3 billion tons.

In the story, the region has 9 billion tons in the ground and a path that takes 6 billion tons over all future years. The recovered objects are the reserve $9{,}000$ and the infinite take $6{,}000$. The claim's extra arithmetic is the $3{,}000$ million-ton remainder.

A rushed solver who used $180 / 0.03 = 6{,}000$ as if it were the leftover, or who reported $9{,}000 - 180 = 8{,}820$, would miss. The leftover is reserve minus the infinite sum, not reserve minus this year's output.

What would have to change for the opposite verdict is an infinite take at or above $9{,}000$ million tons, which would need a slower decline or a larger opening output. At $k = 0.97$ from 180 million tons, the path strands 3 billion tons.

The recovered leftover is 3,000 million tons of stranded coal, so the statement is True.`,

    `The statement steepens the decline from 3% to 5% and claims the steeper path would leave less coal stranded.

The overview recovered a 5% infinite take of $180 / 0.05 = 3{,}600$ million tons, so stranded coal becomes

$$9{,}000 - 3{,}600 = 5{,}400$$

million tons. Under 3% decline the stranded pile was $3{,}000$ million tons. Then

$$5{,}400 > 3{,}000$$

so the steeper path strands more coal, not less.

**1.** The extra arithmetic is that ranking. Both infinite takes are already in the overview. A faster decline cuts the lifetime take, which raises the leftover.

**2.** The trap is thinking "steeper decline uses the reserve faster, so less is left." Steeper decline uses the reserve more slowly in later years, because output collapses sooner. The recovered 5% take $3{,}600$ sits well below the 3% take $6{,}000$.

**3.** A rushed solver who compared $3{,}600$ with $3{,}000$ and thought "less extracted means less stranded" swapped extracted with stranded. Extracted fell. Stranded rose.

In the story, the region's leftover coal is what the infinite path does not take. Cutting the path's lifetime take from $6{,}000$ to $3{,}600$ million tons raises the stranded pile from $3{,}000$ to $5{,}400$. That is more stranded, not less.

What would have to change for the opposite verdict is a steeper decline that somehow raised lifetime extraction, which this model cannot do: raising $1-k$ shrinks $a/(1-k)$. The recovered 5% leftover exceeds the recovered 3% leftover.

The recovered 5% path strands 5,400 million tons, more than the 3,000 million tons stranded at 3%, so the statement is False.`,

    `The statement claims that 20 years of 3% decline already extract more than the infinite 6,000 million-ton total.

The overview recovered $s_{20} \\approx 2{,}737.3$ million tons. Compared with $s_{\\infty} = 6{,}000$,

$$2{,}737.3 < 6{,}000$$

so twenty years sit far below the infinite total, not above it.

**1.** A partial sum of positive terms cannot exceed the infinite sum. The remaining tail from year 21 onward is about $3{,}263$ million tons, still more than the first twenty years.

**2.** The trap is thinking "20 years is a long time, so it must overshoot the infinite total." Infinite means the later years still add. At $k = 0.97$, twenty years capture only

$$\\frac{2{,}737.3}{6{,}000} \\approx 45.6\\%$$

of the lifetime take.

**3.** Another mix-up is $180 \\times 20 = 3{,}600$, a flat twenty-year take, still below $6{,}000$, or $180 / 0.03 \\times 0.97^{20}$ as if the infinite sum were already reduced by the twentieth power.

In the story, the first two decades of a slowly declining mine cannot exhaust a path whose remaining life still holds more than half the tons. The recovered objects are $s_{20}$ and $s_{\\infty}$. The claim's extra move is to put $s_{20}$ above $s_{\\infty}$.

What would have to change for the opposite verdict is a signed series, or a finite path that was mislabelled infinite. Under the stem's positive declining output, $s_{20} < s_{\\infty}$.

The recovered 20-year take is about 2,737 million tons, below the infinite 6,000 million tons, so the statement is False.`,
  ],

  "math-11-66": [
    `The trading model applies \\$4,000, then minus half, then plus a quarter, and so on. An alternating geometric series still converges when $|k|<1$.

The overview recovered $|-0.5| = 0.5 < 1$, so the series converges. Sign does not break the test. Magnitude does.

**1.** The trap is "alternating means it cannot settle." Alternating with a decaying magnitude does settle. Letter E's $k = -1$ is the case that does not.

**2.** Letter D will claim the series necessarily diverges. This letter is the $|k|<1$ test for $k = -0.5$.

The recovered series converges, so the statement is True.`,

    `The statement names the infinite net adjustment as about \\$2,666.67.

The overview recovered $4{,}000 / (1-(-0.5)) = 4{,}000 / 1.5 \\approx 2{,}666.67$. This letter is reading that infinite sum.

**1.** The trap is $4{,}000 / (1-0.5) = 8{,}000$, dropping the sign of $k$. The denominator is $1-(-0.5) = 1.5$, not $0.5$.

**2.** Another mix-up is $4{,}000 - 2{,}000 = 2{,}000$, stopping after two terms. The infinite net sits above the two-term partial sum because the third term is $+\\$1,000$.

The recovered infinite net adjustment is about \\$2,666.67, so the statement is True.`,

    `The statement names the first four adjustments as summing to \\$3,000.

The overview recovered the four terms $4{,}000$, $-2{,}000$, $1{,}000$, $-500$, and

$$4{,}000 - 2{,}000 + 1{,}000 - 500 = 2{,}500$$

The claimed $\\$3,000$ overstates that partial sum by $\\$500$.

**1.** The extra arithmetic is that addition. The four terms are already in the overview. This letter only checks the named $\\$3,000$ against $\\$2,500$.

**2.** The figure $\\$3,000$ is what you get if you drop the last $-\\$500$, or if you add $4{,}000-2{,}000+1{,}000$ and stop. Four terms include the $-\\$500$.

**3.** Another mix-up is $4{,}000 \\times (1-(-0.5)^{4}) / 1.5 = 4{,}000 \\times 0.9375 / 1.5 = 2{,}500$, which is the finite-sum formula and already matches the recovered $\\$2,500$. The claim's $\\$3,000$ is not that formula.

In the story, four rebalancing corrections net $\\$2,500$, which already sits close to the infinite $\\$2,666.67$. Naming $\\$3,000$ overshoots both the four-term sum and the infinite sum.

What would have to change for the opposite verdict is a recovered $s_4$ of $\\$3,000$, which would need dropping a term or changing $k$. Under $k = -0.5$ the four-term sum is $\\$2,500$.

The recovered four-term sum is \\$2,500.00, not \\$3,000.00, so the statement is False.`,

    `The statement claims an alternating series must diverge no matter how small the terms become.

The overview recovered $|k| = 0.5 < 1$, so this particular alternating series converges to about $\\$2,666.67$. Magnitude decides convergence. Alternation does not, by itself, force divergence.

**1.** The trap is a slogan from $k = -1$, where partial sums oscillate and never settle. That is letter E. Here $|k| = 0.5$, so the oscillation damps.

**2.** A rushed solver who learned "alternating geometric series diverge" skipped the $|k|<1$ gate. Letter A already opened that gate.

The recovered $k = -0.5$ series converges, so it does not necessarily diverge, so the statement is False.`,

    `The statement sets $k = -1$ and claims the partial sums would alternate forever between \\$4,000 and \\$0.

The overview recovered that at $k = -1$ the terms are $+\\$4,000$, $-\\$4,000$, $+\\$4,000$, $-\\$4,000$, so

$$s_1 = 4{,}000,\\quad s_2 = 0,\\quad s_3 = 4{,}000,\\quad s_4 = 0$$

Odd partial sums stay at $a$ and even partial sums stay at $0$. That is not a limit, but it is exactly the oscillation the claim names.

**1.** The extra arithmetic is listing those partial sums. They are already in the overview. This letter reads that recovered oscillation.

**2.** The trap is thinking $k = -1$ still converges because the terms are bounded. Bounded oscillating partial sums do not converge. Letter A needed $|k|<1$, and $|-1| = 1$ fails that test.

**3.** Another mix-up is reporting the oscillation as between $\\$4,000$ and $-\\$4,000$. The partial sums, not the terms, are what the claim names, and those partial sums are $\\$4,000$ and $\\$0$.

In the story, a correction that fully reverses each time never damps. The recovered objects are the odd and even partial sums. The claim describes them correctly even though the series diverges.

The recovered $k = -1$ partial sums oscillate between \\$4,000 and \\$0, so the statement is True.`,
  ],

  "math-11-67": [
    `The city currently pays a flat \\$12 million a year for 15 years. That is the degenerate geometric case $k = 1$, where the total is just payment times number of payments.

The overview recovered $s_n = a n$ for that case. This letter is reading that identity.

**1.** The trap is plugging $k = 1$ into $a(k^{n}-1)/(k-1)$ and dividing by zero. Letter E names that trap. The $k = 1$ total is written separately as $a n$.

**2.** Letter B will evaluate $12 \\times 15 = 180$. This letter only names the special case.

The recovered $k = 1$ total is yearly payment times number of years, so the statement is True.`,

    `The statement names the 15-year flat total as \\$180 million.

The overview recovered $12 \\times 15 = 180$. This letter is reading that product.

**1.** The trap is $12 \\times 14 = 168$, dropping the last year, or $12 \\times 16 = 192$, counting a year 0.

**2.** Letter C will name the growing companion, about $\\$240.28$ million. This letter is the flat $\\$180$ million only.

The recovered flat 15-year total is \\$180.00 million, so the statement is True.`,

    `The statement names the 4%-growth 15-year total as about \\$240.11 million.

The overview recovered $s_{15} \\approx 240.28$ from $12 \\times (1.04^{15}-1)/0.04$. The claimed $\\$240.11$ million sits about $\\$0.17$ million too low.

The gap is

$$240.28 - 240.11 = 0.17$$

so the wording is a nearby rounding, but it is not the recovered $240.28$.

**1.** The extra arithmetic is that comparison. The growing total is already in the overview. This letter does not rebuild $(1.04)^{15}$. It only tests $240.11$ against $240.28$.

**2.** The figure $240.11$ is what you get if you use $(1.04)^{15} \\approx 1.8005$ instead of $1.800944$, a slightly short table value, and then $12 \\times 20.0125 = 240.15$. Nearby is not the recovered $240.28$.

**3.** Letter D will subtract $180$ from this growing total. Using $240.11$ instead of $240.28$ would still miss the $\\$65$ million cutoff, but this letter's job is the level, not the gap.

In the story, the fund managers are asking what 15 years of 4% growing contributions total. The recovered object is $s_{15} \\approx 240.28$. The claim's extra move is to name $240.11$.

What would have to change for the opposite verdict is a recovered total that rounds to $240.11$. The overview's $12 \\times 20.0236 = 240.28$ does not.

The recovered growing 15-year total is about \\$240.28 million, not \\$240.11 million, so the statement is False.`,

    `The statement claims the 4%-growth 15-year total exceeds the flat $\\$180$ million by more than $\\$65$ million.

The overview recovered $s_{15} \\approx 240.28$ under growth and $180$ under flat contributions. Their extra is

$$240.28 - 180 = 60.28$$

which sits about $\\$4.72$ million short of a $\\$65$ million cutoff.

**1.** Why this is a threshold test: both totals are already in the overview. This letter only asks whether $60.28$ clears $65$. It does not.

**2.** The trap is using letter C's false $240.11$, which would give an extra of $60.11$, still under $65$, or rounding $60.28$ up to $65$. Full precision keeps the extra at about $\\$60.28$ million.

**3.** Another mix-up is $0.04 \\times 15 \\times 180 = 108$, treating 4% of the flat pile as if it were a simple add-on. Growth at 4% compounds on the annual contribution, not on the 15-year total.

In the story, the managers are asking how much extra the 4% ramp adds relative to staying at $\\$12$ million a year. The recovered extra is $\\$60.28$ million. That is a real extra, and it is not more than $\\$65$ million.

A rushed solver who used $12 \\times (1.04)^{15} \\approx 21.61$ as if it were the extra, or who used $240.28 - 180$ rounded to $60$ and then "more than $65$ because of rounding," would miss. The cutoff is $65$, and $60.28$ is not more than $65$.

What would have to change for the opposite verdict is a recovered extra above $\\$65$ million, which would take a faster growth rate or more years. At 4% for 15 years from $\\$12$ million, the extra is about $\\$60.28$ million.

The recovered extra is about \\$60.28 million, which is not more than \\$65 million, so the statement is False.`,

    `The general finite-sum formula has denominator $k-1$. At $k = 1$ that denominator is $0$, so the formula cannot be used directly.

The overview recovered $1-1 = 0$ and noted that the equal-payment case must use $s_n = a n$ instead. This letter is reading that divide-by-zero warning.

**1.** The trap is taking a limit and writing $n a^{n-1}$ from L'Hôpital, which is more machinery than the chapter needs. The practical rule is: if $k = 1$, multiply. If $k \\ne 1$, use the fraction.

**2.** Letter A already named $s_n = a n$. This letter names why the other formula is unavailable at $k = 1$.

The recovered $k = 1$ case cannot use the general formula, so the statement is True.`,
  ],

  "math-11-68": [
    `The settlement pays \\$15,000 the first year and then 88% of the previous payment. Year 2 is one decline step.

The overview recovered $a_2 = 15{,}000 \\times 0.88 = 13{,}200$. This letter is reading that second payment.

**1.** The trap is $15{,}000 \\times 0.88^{2} = 11{,}616$, treating year 2 as two decline steps. Year 1 is the unreduced opening term.

**2.** Another mix-up is $15{,}000 - 12\\% = 13{,}200$ done as $15{,}000 - 1{,}800$ correctly, then reporting $\\$13,000$. The product is exact: $\\$13,200$.

The recovered second payment is \\$13,200.00, so the statement is True.`,

    `The statement names the eight finite payments as totalling about \\$80,045.68.

The overview recovered $s_8 \\approx 80{,}045.68$ from $15{,}000 \\times (1-0.88^{8})/0.12$. This letter is reading that eight-year total.

**1.** The trap is $15{,}000 \\times 8 = 120{,}000$, eight flat copies, or the infinite $\\$125,000$ from letter C. Eight decaying payments sit below both.

**2.** Another mix-up is $15{,}000 \\times 0.88^{8} \\approx 5{,}395$, reporting the eighth payment as if it were the eight-year sum.

The recovered eight-payment total is about \\$80,045.68, so the statement is True.`,

    `The statement names the perpetual total at the same 88% quotient as \\$130,000.

The overview recovered $s_{\\infty} = 15{,}000 / 0.12 = 125{,}000$. The claimed $\\$130,000$ overstates that perpetuity by $\\$5,000$.

The gap is

$$130{,}000 - 125{,}000 = 5{,}000$$

so the wording is a round $\\$5,000$ too high.

**1.** The extra arithmetic is that comparison. The infinite sum is already in the overview. This letter does not rebuild $1-k$. It only tests $\\$130,000$ against $\\$125,000$.

**2.** The figure $\\$130,000$ is what you get from $15{,}000 / 0.115$, as if the leftover were $11.5\\%$ instead of $12\\%$, or from adding a round $\\$5,000$ garnish to $\\$125,000$. The recovered denominator is $0.12$.

**3.** Letter D will divide $s_8$ by this infinite total. Using $\\$130,000$ in the denominator would understate the eight-year share. The recovered perpetuity is $\\$125,000$.

In the story, a clause that never stops paying, at 12% decay a year from $\\$15,000$, is worth $\\$125,000$ in undiscounted dollars. Naming $\\$130,000$ is a nearby round number with no model behind it.

What would have to change for the opposite verdict is $1-k = 15{,}000/130{,}000 \\approx 0.115$, a slower decline than $0.12$. The stem's $k = 0.88$ produces $\\$125,000$.

The recovered infinite total is \\$125,000.00, not \\$130,000.00, so the statement is False.`,

    `The statement claims the eight-payment total is more than 75% of the infinite total.

The overview recovered $s_8 \\approx 80{,}045.68$ and $s_{\\infty} = 125{,}000$. Their share is

$$\\frac{80{,}045.68}{125{,}000} \\approx 0.6404$$

which is about $64\\%$, not more than $75\\%$. The miss is about $11$ percentage points.

**1.** Why this is a threshold test: both totals are already in the overview. This letter only asks whether $64.04\\%$ clears $75\\%$. It does not.

**2.** The trap is using letter C's false $\\$130,000$ in the denominator, which would give $80{,}046/130{,}000 \\approx 61.6\\%$, still under $75\\%$, or treating eight years as $8/10 = 80\\%$ of a made-up ten-year life.

**3.** Another mix-up is $1-0.88^{8} \\approx 0.640$, which already is the share of the perpetuity, misread as $0.75$. The recovered share is $64.04\\%$.

In the story, eight decaying payments capture a little less than two thirds of the never-ending pile, because later payments are small but they still add about $36\\%$ of the lifetime total. The recovered objects are $s_8$ and $s_{\\infty}$. The claim's extra move is a $75\\%$ cutoff.

What would have to change for the opposite verdict is a faster decline, so that eight years captured more than $75\\%$ of the infinite pile, or a cutoff of $60\\%$. At $k = 0.88$ the recovered share is about $64\\%$.

The recovered eight-year share is about 64%, which is not more than 75%, so the statement is False.`,

    `The statement slows the decline from $k = 0.88$ to $k = 0.95$ and claims the infinite total would then be smaller.

The overview recovered $15{,}000 / 0.05 = 300{,}000$ at $k = 0.95$, against $125{,}000$ at $k = 0.88$. Then

$$300{,}000 > 125{,}000$$

so a slower decline raises the infinite total, not lowers it.

**1.** The extra arithmetic is that ranking. Both perpetuities are already in the overview. A larger $k$ (closer to $1$) shrinks $1-k$ and raises $a/(1-k)$.

**2.** The trap is thinking "less steep means smaller numbers." Less steep means later payments stay larger, so the lifetime pile grows. The recovered $k = 0.95$ total is $\\$300,000$.

**3.** A rushed solver who compared $0.95$ with $0.88$ and thought "smaller decay rate, smaller sum" mixed the decay rate $1-k$ with the total. The decay rate fell from $12\\%$ to $5\\%$, and the total rose.

In the story, a settlement that shrinks by 5% a year instead of 12% keeps paying meaningful amounts for much longer. The recovered infinite pile triples from $\\$125,000$ to $\\$300,000$.

What would have to change for the opposite verdict is a smaller $k$, a steeper decline. The hypothetical is a larger $k$.

The recovered $k = 0.95$ infinite total is \\$300,000, larger than \\$125,000, so the statement is False.`,
  ],

  "math-11-69": [
    `Royalties grow at 8% a year for 12 years from a first-year \\$9,000. That is a finite geometric series with $k = 1.08 \\ne 1$, so the finite-sum formula is well-defined.

The overview recovered $k-1 = 0.08 \\ne 0$ and used $s_{12} = a(k^{12}-1)/(k-1)$. This letter is reading that the formula applies. It is not yet naming the dollar total.

**1.** The trap is thinking any $k > 1$ makes the finite formula illegal, mixing it with the infinite-sum gate $|k|<1$. Finite $n$ does not need $|k|<1$. Letter C will try to apply the infinite formula and fail.

**2.** Another mix-up is $k = 1$, which would need $s_n = a n$. The stem's $k$ is $1.08$.

The recovered finite-sum formula is valid for this 12-year stream, so the statement is True.`,

    `The statement names the 12-year royalty total as about \\$175,000.

The overview recovered $s_{12} \\approx 170{,}794.15$. The claimed $\\$175,000$ overstates that total by about $\\$4,206$.

The gap is

$$175{,}000 - 170{,}794.15 = 4{,}205.85$$

so the wording is a round $\\$175{,}000$ with no model behind it on this page.

**1.** The extra arithmetic is that comparison. The 12-year sum is already in the overview. This letter does not rebuild $(1.08)^{12}$. It only tests $\\$175,000$ against $\\$170,794$.

**2.** The figure $\\$175,000$ is what you get from rounding $9{,}000 \\times 19.44$, or from $9{,}000 \\times 12 \\times 1.62$. Neither is $9{,}000 \\times 18.977$.

**3.** Letter E will subtract the flat $\\$108,000$ from this growing total. Using $\\$175,000$ would overstate the extra by about $\\$4,206$. The recovered growing total is $\\$170,794.15$.

In the story, the franchisor is asking how much 12 years of 8% growing royalties collect. The recovered object is $s_{12}$. The claim's extra move is a round $\\$175,000$.

What would have to change for the opposite verdict is a recovered total near $\\$175,000$, which would take a slightly higher growth rate. At 8% for 12 years from $\\$9,000$, the total is about $\\$170,794$.

The recovered 12-year total is about \\$170,794, not \\$175,000, so the statement is False.`,

    `The statement claims the infinite-sum formula can still be applied to this 8% growing stream.

The overview recovered $k = 1.08 > 1$, so $|k| \\ge 1$ and the infinite geometric series diverges. There is no finite infinite-total, and the formula $a/(1-k)$ is not a legitimate value here.

Formally $9{,}000 / (1-1.08) = -112{,}500$, a negative number that cannot be 12 years of positive royalties. That algebraic extension is the same illegal plug-in as in letter 62 E.

**1.** The trap is using $a/(1-k)$ whenever a geometric series appears, without the $|k|<1$ gate. Growing royalties forever do not have a finite undiscounted total.

**2.** Letter A already said the finite formula is valid. Finite $n = 12$ and infinite $n$ are different gates. This letter is the infinite gate, and it closes.

In the story, an 8% growing royalty that never stops would collect arbitrarily large amounts. The recovered $k = 1.08$ infinite series diverges.

The recovered infinite-sum formula does not apply to this growing stream, so the statement is False.`,

    `The statement names the year-12 royalty as about \\$20,715.85.

The overview recovered $a_{12} \\approx 20{,}984.75$ from $9{,}000 \\times (1.08)^{11}$. The claimed $\\$20,715.85$ understates that last payment by about $\\$269$.

The gap is

$$20{,}984.75 - 20{,}715.85 = 268.90$$

so the wording is not a rounding of the recovered year-12 term.

**1.** The extra arithmetic is that comparison. Year 12 uses the power $11$, already in the overview. This letter only tests $\\$20,715.85$ against $\\$20,984.75$.

**2.** The figure $\\$20,715.85$ is what you get from $9{,}000 \\times (1.08)^{10} \\approx 19{,}434$ plus a $6.6\\%$ garnish, or from using $(1.08)^{12}/1.08^{0.1}$. The recovered factor is $(1.08)^{11} \\approx 2.3316$.

**3.** A rushed solver who used $(1.08)^{12}$ on the first royalty would report about $\\$22,664$, the year-13 term. Year 12 is four steps short of that.

In the story, the last royalty of the 12-year window is the opening $\\$9,000$ grown for 11 years. The recovered object is $a_{12}$. The claim's extra move is a nearby $\\$20,716$.

What would have to change for the opposite verdict is a recovered year-12 payment near $\\$20,716$, which would take a slightly slower growth rate. At 8% for 11 steps from $\\$9,000$, the payment is about $\\$20,985$.

The recovered year-12 royalty is about \\$20,984.75, not \\$20,715.85, so the statement is False.`,

    `The statement holds royalties flat at \\$9,000 for 12 years and claims that flat total sits $\\$62,794.15$ below the 8%-growth total.

The overview recovered $s_{12} \\approx 170{,}794.15$ under growth and $9{,}000 \\times 12 = 108{,}000$ under a flat path. Their gap is

$$170{,}794.15 - 108{,}000 = 62{,}794.15$$

which matches the claimed extra exactly.

**1.** Why this is a comparison letter: both totals are already in the overview. This letter only subtracts. It does not rebuild $(1.08)^{12}$.

**2.** The trap is using letter B's false $\\$175,000$, which would give an extra of $\\$67,000$, not $\\$62,794.15$. The recovered growing total is $\\$170,794.15$.

**3.** Another mix-up is $0.08 \\times 12 \\times 108{,}000 = 103{,}680$, treating 8% of the flat pile as a simple add-on. Growth compounds on the annual royalty, and the recovered extra is $\\$62,794.15$.

In the story, the franchisor is asking how much the 8% ramp is worth relative to a no-growth location. The recovered extra is $\\$62,794.15$. That is the claim's figure.

A rushed solver who rounded $170{,}794$ to $171{,}000$ would report $\\$63,000$ and would still be describing the same extra, just with worse cents. The claim includes the cents that match the overview.

The recovered growth extra is \\$62,794.15, so the statement is True.`,
  ],

  "math-11-70": [
    `The company grows revenue 20% a year for 6 years from \\$4 million. The statement names that six-year finite total as about \\$39.72 million.

The overview recovered $s_6 = 39.72$ from $4 \\times (1.20^{6}-1)/0.20$. This letter is reading that finite-phase sum.

**1.** The trap is $4 \\times 6 = 24$, six flat copies, or $4 \\times (1.20)^{6} \\approx 11.94$, the year-7 term treated as a total.

**2.** Letter B will name year-6 revenue alone, about $\\$9.95$ million. This letter is the six-year pile.

The recovered six-year finite total is about \\$39.72 million, so the statement is True.`,

    `Year 6 is the last term of the finite growth window. It carries five growth steps past the opening \\$4 million.

The overview recovered $a_6 = 4 \\times (1.20)^{5} = 9.95328 \\approx 9.95$. This letter is reading that year-6 revenue.

**1.** The trap is $4 \\times (1.20)^{6} \\approx 11.94$, treating year 6 as six steps past year 0. The first year is the uncompounded opening term.

**2.** Letter D will use this $\\$9.95$ million as the first term of the terminal perpetuity. This letter only names the year-6 snapshot.

The recovered year-6 revenue is about \\$9.95 million, so the statement is True.`,

    `The statement claims the six-year series has no valid finite-sum formula.

The overview recovered $k = 1.20 \\ne 1$, so $k-1 = 0.20 \\ne 0$ and $s_6 = a(k^{6}-1)/(k-1)$ is well-defined. Letter A already used that formula to get $\\$39.72$ million.

**1.** The trap is mixing the infinite-sum gate $|k|<1$ with the finite-sum gate $k \\ne 1$. Growing for a finite 6 years is allowed. Growing forever at $20\\%$ would not have a finite infinite-total, but that is not this letter.

**2.** Letter D's terminal phase uses $|k_T|<1$ because that phase is infinite. The finite phase does not need that gate.

The recovered finite-sum formula is valid, so the statement is False.`,

    `The statement treats year-6 revenue as the first payment of a perpetuity that declines 15% a year, and names that terminal value as about \\$66.36 million.

The overview recovered $T = 9.95328 / 0.15 \\approx 66.36$. This letter is reading that terminal perpetuity. It is not adding the six-year finite total.

**1.** The trap is $4 / 0.15 \\approx 26.67$, using the year-1 revenue as the first terminal payment. The terminal phase starts at year 6, so $a_T \\approx 9.95$.

**2.** Another mix-up is $9.95 / (1-1.20)$, illegally using the growth quotient on an infinite phase. The terminal quotient is $0.85$, and $|0.85|<1$.

**3.** Letter E will add this $\\$66.36$ million to the finite $\\$39.72$ million. This letter only names the terminal piece.

In the story, investors capitalise the declining tail that begins with year-6 revenue. The recovered object is $T \\approx 66.36$. The first terminal payment is the recovered $a_6$, not the opening $\\$4$ million.

The recovered terminal value is about \\$66.36 million, so the statement is True.`,

    `The statement adds the six-year finite total to the terminal perpetuity and claims the combined value is less than \\$100 million.

The overview recovered $s_6 = 39.72$ and $T \\approx 66.36$. Their sum is

$$39.72 + 66.36 = 106.08$$

which sits about $\\$6.08$ million above a $\\$100$ million cutoff.

**1.** Why this is a threshold test: both pieces are already in the overview. This letter only adds them and tests $106.08$ against $100$.

**2.** The trap is adding $39.72 + 66.36$ as $96.08$ by dropping $10$, or omitting the terminal piece and reporting $39.72 < 100$. Combined means both pieces.

**3.** Another mix-up is treating the terminal $\\$66.36$ million as replacing the finite total rather than sitting on top of it. The finite years are cash in years 1 through 6. The terminal value is the declining tail from year 6 onward. Adding them is the chapter's combined projected value, about $\\$106.08$ million.

In the story, the cap table cares about the six growth years plus the declining tail. The recovered combined value is $\\$106.08$ million, which is not less than $\\$100$ million.

A rushed solver who used $a_T = 4$ would get a terminal $26.67$ and a combined $66.39$, which would miss $100$ from below. The terminal first payment is year-6 revenue, about $\\$9.95$ million.

What would have to change for the opposite verdict is a recovered combined value at or below $100$, which would take a smaller year-6 revenue or a steeper terminal decline. Under the stem, $106.08 > 100$.

The recovered combined value is about \\$106.08 million, which is not less than \\$100 million, so the statement is False.`,
  ],
};

function wrap(stmt, key, letter, body) {
  const v = key ? "true" : "false";
  return `**${letter}) ${stmt}**  (${v})\n\n${body}`;
}

function check(id, i, body, key) {
  const letter = "ABCDE"[i];
  const close = key ? "True" : "False";
  if (body.includes("\u2014") || body.includes("\u2013") || body.includes("${")) {
    throw new Error(`forbidden ${id} ${letter}`);
  }
  if (!body.trim().endsWith(`so the statement is ${close}.`)) {
    throw new Error(`closer ${id} ${letter}: ${body.trim().slice(-80)}`);
  }
}

const arr = JSON.parse(fs.readFileSync(file, "utf8"));
for (const t of arr) {
  const b = bodies[t.id];
  if (!b) continue;
  t.tactical_explanations = t.statements.map((stmt, i) => {
    check(t.id, i, b[i], t.answer_key[i]);
    return wrap(stmt, t.answer_key[i], "ABCDE"[i], b[i]);
  });
}

const missing = arr.filter((t) => !bodies[t.id]).map((t) => t.id);
if (missing.length) {
  console.log("still stub", missing.join(","));
} else {
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
  console.log("wrote 61_70", arr.length);
}
