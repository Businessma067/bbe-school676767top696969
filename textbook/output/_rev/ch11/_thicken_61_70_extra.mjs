import fs from "node:fs";

const extras = {};
function add(id, letter, text) {
  extras[`${id}-${letter}`] = text.trim();
}

add("math-11-61", "B", `Year 5 is the last term the founder will book in this window. Citing $73.21$ million is citing Part 3, not a second power of $1.10$. A sixth year would be five growth steps and would sit near $80.53$ million, which is not this letter.`);

add("math-11-61", "C", `Five distinct years, not five copies of year 5. The recovered $305.26$ million already includes the $55$ million year 2 and the $73.21$ million year 5. Adding those two snapshots to three copies of $50$ million would double-count. The finite-sum formula is the right total.`);

add("math-11-62", "A", `Halving forever is the textbook case of $|k|<1$. Letter B will name the $4,000$ dollar pile that this convergence permits. This letter only opens the gate.`);

add("math-11-62", "B", `Four thousand dollars is twice the opening month, which is the $1/(1-0.5)=2$ multiple. Later months add the other $2,000$. They do not add another $4,000$.`);

add("math-11-62", "D", `In a subscription line with positive monthly profit, you cannot collect more in four months than you collect in all months. The recovered tail of $250$ is the whole remaining value of the line after month 4. Naming $s_4 > s_{\\infty}$ would require that tail to be negative, which would mean later months were losses. The stem's renewals halve, they do not change sign.

A board that booked $3,750$ as if it were already the lifetime profit would then still receive $250$ of later profit and would have no place to put it. The recovered infinite total is $4,000$, and the four-month pile is the smaller number.

The opposite verdict would need later months to subtract. Under $k = 0.5$ they add. The recovered ranking is $3,750 < 4,000$.`);

add("math-11-62", "E", `Write the first three growing terms out loud: $2,000$, $3,000$, $4,500$. Each is larger than the last. Partial sums $2,000$, $5,000$, $9,500$ are already past $4,000$ and still climbing. A claimed limit of $-4,000$ sits on the other side of zero from every partial sum. That is how you see the illegal plug-in without any further algebra.

The opposite verdict needs $|k|<1$. The hypothetical is $k = 1.5$. The recovered series diverges to infinity, not to a negative finite total.`);

add("math-11-63", "A", `A 10% haircut a year still leaves 90% of the previous deposit. That leftover is small enough that the infinite pile is finite. Letter B will name the $8,000$ total this gate permits.`);

add("math-11-63", "B", `Eight thousand dollars is ten times the opening $800$, because $1/(1-0.90)=10$. That multiple is the whole lifetime, not a ten-year flat plan that happens to use the same product.`);

add("math-11-63", "C", `Five thousand two hundred ten dollars is the decaying decade, not the $8,000$ lifetime and not ten copies of $800$. Letter D will take the ratio of those two recovered piles.`);

add("math-11-63", "D", `Sixty-five percent in the first decade is front-loading, not a calendar share of forever. If $k$ were $0.99$, ten years would capture far less than $65\\%$. If $k$ were $0.50$, ten years would capture almost all of it. At $k = 0.90$ the recovered share is $65.13\\%$, which the claim rounds to $65\\%$.

A treasurer who treated ten years as $10/30 = 33\\%$ of a made-up thirty-year life would understate how much of the lifetime contribution sits in the first decade. Dollars decay. Calendar years do not. The recovered dollar share is about $65\\%$.

The opposite verdict would need a recovered share far from $65\\%$. At this $k$ it is $65.13\\%$.`);

add("math-11-64", "A", `Sixty years is $18$ million tons over $300,000$ tons a year. Losing a zero would report $6$ years and would exhaust the reserve in a political cycle instead of two generations.`);

add("math-11-64", "B", `Thirty-six years is the same reserve over a faster constant take. It is not $60 \\times 300/500$ rounded. The division is exact.`);

add("math-11-64", "D", `Three point nine million tons is a round neighbour of $3.77$ million, and round neighbours are how growing-extraction claims usually go wrong. The recovered ten-year take is $3,773,368$ tons. Calling that $3.9$ million overstates the decade by more than a hundred thousand tons, enough that a mine plan would notice.

A linear $5\\% \\times 10 = 50\\%$ garnish on $3$ million tons would report $4.5$ million, even higher. The geometric extra is milder than that linear slogan because early years have not yet grown much. The recovered extra over a flat decade is about $773,000$ tons, letter E's object. This letter only names the growing level.

The opposite verdict would need a recovered $s_{10}$ near $3.9$ million. At $5\\%$ for ten years from $300,000$ tons it is about $3.77$ million.`);

add("math-11-64", "E", `Seven hundred seventy-three thousand extra tons is a real ramp, and it is not a million-ton ramp. A mine that budgeted a million-ton extra would be planning for a faster growth rate than $5\\%$ or a longer window than ten years.

The $1,000,000$-ton cutoff is the whole letter. $773,368 < 1,000,000$ is the recovered side. Rounding $773,368$ to $800,000$ still misses. Using letter D's false $3.9$ million would give a $900,000$-ton extra, still under the cutoff. Neither false companion saves the threshold.

The opposite verdict would need extra extraction above $1,000,000$ tons. At $5\\%$ for ten years the extra is about $773,000$ tons.`);

add("math-11-65", "A", `One 3% decline from $180$ million tons is $5.4$ million tons off, leaving $174.6$. Subtracting $3$ million tons instead of $3\\%$ is a unit mix-up.`);

add("math-11-65", "B", `Six thousand million tons is $180 / 0.03$. That is the extracted infinite total. The stranded $3,000$ million tons is letter C.`);

add("math-11-65", "C", `Three billion tons stranded is the meaning of a convergent extraction path that never catches the whole reserve. Forever is not the same as emptying the ground. Later years' output gets small, and the leftover $3,000$ million tons stay in the seam.

A planner who treated "infinite years" as "the whole $9,000$ million tons leave" would have no stranded pile and would overstate lifetime take by $3$ billion tons. The recovered infinite take is $6,000$ million tons.

The opposite verdict would need $s_{\\infty} \\ge 9,000$, a slower decline or a larger opening output. At $k = 0.97$ from $180$ million tons, $3$ billion tons remain.`);

add("math-11-65", "D", `Steeper decline strands more, not less, because lifetime take falls. Raising $1-k$ from $0.03$ to $0.05$ cuts $a/(1-k)$ from $6,000$ to $3,600$ million tons and raises the leftover from $3,000$ to $5,400$. Extracted and stranded move in opposite directions.

A slogan "faster mining leaves less behind" describes a higher *opening* output, not a faster *decline*. The hypothetical keeps the opening $180$ million tons and only steepens the decay. The recovered $5\\%$ leftover exceeds the recovered $3\\%$ leftover.

The opposite verdict would need a steeper decline that raised lifetime take, which this formula cannot do.`);

add("math-11-65", "E", `Twenty years at a 3% decline still leave more than half the lifetime tons in the tail. $2,737 < 6,000$ is that fact. A partial sum of positive output cannot overshoot the infinite sum.

A planner who treated twenty years as "long enough to beat forever" would book $2,737$ million tons as if it were already more than $6,000$. The remaining tail is about $3,263$ million tons, larger than the first twenty years.

The opposite verdict would need a signed series. Under the stem's positive declining output, $s_{20}$ sits below $s_{\\infty}$.`);

add("math-11-66", "A", `Half-size reversals damp. Full-size reversals, $k = -1$, do not. Letter E is that other quotient. This letter is $k = -0.5$.`);

add("math-11-66", "B", `Two thousand six hundred sixty-seven dollars sits between the two-term net of $2,000$ and the four-term net of $2,500$, as a damped oscillation should. Stopping at two terms understates the infinite net.`);

add("math-11-66", "C", `Four terms are $+4,000 - 2,000 + 1,000 - 500$. Dropping the last $-500$ manufactures the claimed $3,000$. Including it recovers $2,500$. The infinite net is about $2,667$, so $3,000$ overshoots even the lifetime total.

A desk that booked $3,000$ after four rebalances would then still receive a $-250$ fifth term and would have overstated the four-term net by $500$. The recovered $s_4$ is $2,500$.

The opposite verdict would need a recovered four-term sum of $3,000$. Under $k = -0.5$ it is $2,500$.`);

add("math-11-66", "D", `Alternation is not an automatic divergence. Magnitude $|k|<1$ damps the oscillation, and the recovered net is about $2,666.67$. The slogan "alternating series diverge" belongs to $k = -1$, letter E, not to $k = -0.5$.`);

add("math-11-66", "E", `Partial sums $4,000$, $0$, $4,000$, $0$ never approach a single number, so the series diverges, and the claim is still right about *how* those partial sums behave. The oscillation is between $a$ and $0$, not between $a$ and $-a$. Terms alternate. Partial sums fold.

A claimed oscillation between $4,000$ and $-4,000$ would be naming the terms as if they were the running total. After a $+4,000$ and a $-4,000$ the running total is $0$, not $-4,000$. The recovered even partial sums are $0$.`);

add("math-11-67", "B", `One hundred eighty million is $12$ times $15$. Dropping a year reports $168$. Counting a year $0$ reports $192$. The recovered flat total is $180$.`);

add("math-11-67", "C", `Two hundred forty point two eight million is the growing 15-year pile. A table value $240.11$ is a slightly short $(1.04)^{15}$. The recovered product $12 \\times 20.0236$ is $240.28$. Nearby is not the same as recovered.

Letter D will subtract $180$ from this growing total. Using $240.11$ would still miss a $65$ million extra, but this letter's job is the level. The recovered growing total is about $240.28$ million.`);

add("math-11-67", "D", `Sixty million extra from 4% growth over 15 years is real, and it is not $65$ million extra. The cutoff is the whole letter. $60.28 < 65$ is the recovered side.

A linear $4\\% \\times 15 \\times 180 = 108$ million extra would clear $65$ easily and would be the wrong clock: growth compounds on the annual $12$ million, not on the 15-year flat pile. The recovered extra is $60.28$ million.

The opposite verdict would need a recovered extra above $65$ million, which would take a faster growth rate. At $4\\%$ for 15 years from $12$ million, the extra is about $60.28$ million.`);

add("math-11-68", "A", `Thirteen thousand two hundred is exact: $15,000 \\times 0.88$. Rounding to $13,000$ would be a $200$ miss on a single payment.`);

add("math-11-68", "B", `Eighty thousand forty-six dollars is eight decaying payments, below eight flat copies of $15,000$ and below the $125,000$ perpetuity. Letter D will take their ratio.`);

add("math-11-68", "C", `One hundred twenty-five thousand is $15,000 / 0.12$. Adding a round $5,000$ garnish manufactures $130,000$. The recovered denominator is $12\\%$ leftover, not $11.5\\%$.

Letter D will use this perpetuity in the denominator. Inflating it to $130,000$ would understate the eight-year share. The recovered infinite total is $125,000$.

The opposite verdict would need $1-k = 15,000/130,000$, a slower decline than $12\\%$. The stem's $k = 0.88$ produces $125,000$.`);

add("math-11-68", "D", `Sixty-four percent is not more than $75\\%$. Eight decaying payments leave about $36\\%$ of the lifetime pile in the tail after year 8. A calendar slogan "eight years is $80\\%$ of ten" is not a dollar share.

Using the false $130,000$ perpetuity would report about $62\\%$, still under $75\\%$. Neither companion saves the cutoff. The recovered share is $64.04\\%$.

The opposite verdict would need a faster decline or a $60\\%$ cutoff. At $k = 0.88$ the recovered share is about $64\\%$.`);

add("math-11-68", "E", `A slower decline keeps later payments larger, so the lifetime pile grows. $k = 0.95$ means a $5\\%$ leftover instead of $12\\%$, and $15,000 / 0.05 = 300,000$, more than double $125,000$, not less.

"Less steep, smaller numbers" mixes the decay rate with the total. The decay rate fell and the total rose. The recovered $k = 0.95$ perpetuity exceeds the recovered $k = 0.88$ perpetuity.`);

add("math-11-69", "B", `One hundred seventy thousand seven hundred ninety-four dollars is the 12-year growing pile. A round $175,000$ overstates it by about $4,206$. That extra is not cents, and it is not the $62,794$ growth premium in letter E.

A franchisor who booked $175,000$ would overstate 12-year royalties by more than a typical month-12 payment. The recovered total is $170,794.15$.`);

add("math-11-69", "C", `An 8% growing royalty that never stops has no finite undiscounted total. The illegal plug-in $9,000/(1-1.08) = -112,500$ is negative, which already cannot be a sum of positive royalties. Finite $n = 12$ is letter A. Infinite $n$ is this letter, and the gate closes.`);

add("math-11-69", "D", `Year 12 carries eleven growth steps, $9,000 \\times (1.08)^{11} \\approx 20,985$. The claimed $20,716$ is a nearby table value, about $269$ light. Using $(1.08)^{12}$ would overshoot to about $22,664$, the year-13 royalty.

The recovered last payment of the 12-year window is about $20,984.75$. Nearby is not recovered.`);

add("math-11-69", "E", `The extra $62,794.15$ is $170,794.15 - 108,000$, the recovered growing total minus twelve flat copies of $9,000$. Using letter B's false $175,000$ would invent a $67,000$ extra. The claim's cents match the recovered pair, not that false companion.

A linear $8\\% \\times 12 \\times 108,000$ would overstate the extra. Growth compounds on the annual royalty. The recovered extra is $62,794.15$.`);

add("math-11-70", "A", `Thirty-nine point seven two million is the six growth years together, not six copies of $4$ million and not the year-6 snapshot of $9.95$ million.`);

add("math-11-70", "B", `Nine point nine five million is year 6 alone, five growth steps past $4$ million. Letter D will capitalise this snapshot as the first terminal payment.`);

add("math-11-70", "C", `Finite $n = 6$ with $k = 1.20 \\ne 1$ is exactly when the finite-sum formula is built to be used. Mixing that gate with $|k|<1$ is how someone declares a valid six-year total illegal. Letter A already used the formula.`);

add("math-11-70", "D", `Sixty-six point three six million is $9.95 / 0.15$, year-6 revenue over the $15\\%$ leftover. Using the opening $4$ million as $a_T$ would understate the tail at about $26.67$ million. The terminal phase starts at year 6.`);

add("math-11-70", "E", `One hundred six point zero eight million is $39.72 + 66.36$, finite phase plus terminal tail. That combined value clears $100$ million by about $6$ million. Omitting the tail reports $39.72$, which would miss the cutoff from below and would not be a combined value.

A cap table that booked "under $100$ million" would have dropped the declining perpetuity. The recovered combined value is $106.08$ million.

The opposite verdict would need a recovered combined value at or below $100$. Under the stem, $106.08 > 100$.`);

add("math-11-71", "A", `One thousand one hundred fifty dollars is a scale check only. The actual opening month inverted from $58,000$ is letter B's $6,625.74$. Mixing the two is the usual trap.`);
add("math-11-71", "B", `Six thousand six hundred twenty-six dollars is the unique opening month that makes six 15% growing bills total $58,000$. The flat split $9,666.67$ is letter E, a larger number because growth puts cheap months first.`);
add("math-11-71", "C", `Thirteen thousand three hundred twenty-seven dollars is month 6, five steps past $6,625.74$. Six steps would be month 7. The recovered last month of the window carries the power $5$.`);
add("math-11-71", "D", `Thirty-four thousand nine hundred ninety-two dollars is months 4 through 6, the expensive end of a rising schedule. A claimed $37,930$ folds in extra growth or an extra month. The last three months are a little more than half of $58,000$, which is the point of 15% monthly growth: the late window outweighs the early window, but not by as much as $37,930$ would say.

A treasurer who booked $37,930$ for the late quarter would over-reserve by about $2,938$. The recovered late-window total is $34,992.12$.

The opposite verdict would need a recovered months 4-6 total near $37,930$. At 15% from $a \\approx 6,625.74$, those three months are about $34,992$.`);
add("math-11-71", "E", `Nine thousand six hundred sixty-seven dollars is $58,000 / 6$. On a rising path that average sits above month 1 and below month 6. The recovered $a \\approx 6,626$ is the cheap end. The recovered $a_6 \\approx 13,327$ is the expensive end. The claim compares the average with the cheap end, and the average is larger.

A declining $k < 1$ would reverse the ranking. The stem's $k = 1.15$ is growing, so month 1 sits below the flat split.`);

add("math-11-72", "A", `Four hundred ninety thousand is one 2% decline from $500,000$. Two declines would be year 3. Year 2 carries the power $1$.`);
add("math-11-72", "B", `Twenty-five million is $500,000 / 0.02$. That is the perpetual scholarship pile. The first decade is letter C, about $4.57$ million, not $25$ million.`);
add("math-11-72", "C", `Four million five hundred seventy-three thousand is the first decade, not a round $4.8$ million. Letter D will divide this recovered decade by $25$ million. Inflating the decade to $4.8$ million would report about $19\\%$ instead of $18\\%$.

A board that booked $4.8$ million for ten years would overstate early scholarships by about $227,000$. The recovered $s_{10}$ is about $4,573,180$.`);
add("math-11-72", "D", `Eighteen percent is a dollar share, not a calendar share of forever. Ten years of a 2% declining plan still leave $82\\%$ of lifetime scholarships in the tail. Using the false $4.8$ million would report $19.2\\%$, still "about $18\\%$" only loosely. The recovered share is $18.29\\%$, which the claim rounds to $18\\%$.`);
add("math-11-72", "E", `Ten million is $500,000 / 0.05$, two fifths of $25$ million, which is less than half. Tripling the leftover fraction from $2\\%$ to $5\\%$ cuts the infinite total by that same factor. Half would have required $k = 0.96$. The hypothetical is $k = 0.95$.

A board that thought a 3-point steeper decline cut the pile by $3/5$ would expect $15$ million and would beat half. The recovered $10$ million does not.

The opposite verdict would need a milder steepening. At $k = 0.95$ the recovered infinite total is $10$ million, below $12.5$ million.`);

add("math-11-73", "A", `Two hundred twenty-four thousand is one 12% lift from $200,000$. Two lifts would be year 3. Year 2 carries the power $1$.`);
add("math-11-73", "B", `Two million nine hundred fifty-five thousand is still $44,869$ short of $3$ million. Close is not past. Letter D needs this miss in order to reject $n = 9$.`);
add("math-11-73", "C", `Three million five hundred ten thousand is the ten-year pile that first clears $3$ million. A round $3.6$ million overstates it by about $90,000$. Letter D only needs $s_{10} > 3$ million, which holds at $3.51$ million. Inflating to $3.6$ million is not required for the ranking and is not the recovered total.`);
add("math-11-73", "D", `Nine years miss. Ten years clear. The smallest $n$ is the first year on the far side of $3$ million, which is $10$. Rounding $s_9$ up to $3$ million would steal a year from the CFO's break-point.

The opposite verdict would need $s_9$ already above $3$ million. At 12% from $200,000$, nine years remain about $44,869$ short.`);
add("math-11-73", "E", `Two million eight hundred ninety-seven thousand at 8% is still short of $3$ million after ten years. Keeping the original 12% $s_{10} \\approx 3.51$ million and asking whether that clears $3$ million answers a different letter. This letter swapped the growth rate.

The opposite verdict would need an 8% ten-year total above $3$ million, which would take a larger opening budget. Under $200,000$ at 8%, ten years miss.`);

add("math-11-74", "A", `Forty-eight thousand is one 4% decline from $50,000$. The six-year deferral is when grants begin, not an extra decline inside the sequence.`);
add("math-11-74", "B", `One million two hundred fifty thousand is $50,000 / 0.04$. The first 15 grants are letter C, about $572,392$, not the infinite pile.`);
add("math-11-74", "C", `Five hundred seventy-two thousand is 15 decaying grants, below 15 flat copies of $50,000$ and below the $1,250,000$ perpetuity. Letter D will take their ratio.`);
add("math-11-74", "D", `Forty-six percent is not less than $40\\%$. Fifteen decaying grants still capture a little less than half the lifetime pile. A calendar $15/40 = 37.5\\%$ of a made-up 40-year life would miss $40\\%$ from below and would be the wrong clock.

The recovered share is $45.79\\%$, which clears $40\\%$ by about $6$ points. The opposite verdict would need a slower decline or a $50\\%$ cutoff.`);
add("math-11-74", "E", `Five hundred thousand is $50,000 / 0.10$, which is $2.5$ times smaller than $1,250,000$ because $1-k$ rose by $2.5$. Half of $1,250,000$ is $625,000$. The recovered $500,000$ sits below that half.

A milder steepening to $k = 0.92$ would have landed on $625,000$ exactly. The hypothetical is $k = 0.90$, steeper than that.`);

add("math-11-75", "A", `Nine thousand eight hundred pounds is one quarterly 2% decline from $10,000$. An annual 2% decline would be a different clock. The stem declines every quarter.`);
add("math-11-75", "B", `One hundred sixty-six thousand one hundred ninety-six pounds is 20 quarters, five years of quarterly decline. Five terms would be letter C's trap, about $48,040$ lbs.`);
add("math-11-75", "C", `Forty-eight thousand forty pounds is five *quarters*, about $1.25$ years, not five years. Five years are $5 \\times 4 = 20$ decline dates. Using $n = 5$ because the problem says "5 years" treats years as if they were already quarters.

A manager who booked $48,040$ lbs for five years would understate yield by about $118,000$ lbs. The recovered five-year total is $s_{20} = 166,196.01$ lbs.

The opposite verdict would need a 2% *annual* decline, whose $n$ would be 5. The stem declines 2% every quarter.`);
add("math-11-75", "D", `Six thousand eight hundred twelve pounds is quarter 20, nineteen decline steps past $10,000$. Twenty steps would be quarter 21. The last quarter of a 20-quarter window carries the power $19$.`);
add("math-11-75", "E", `Five hundred thousand pounds forever exceeds $166,196$ lbs in 20 quarters. The tail after quarter 20 is about $333,804$ lbs, twice the harvested window. A partial sum of positive yields cannot exceed the infinite sum.

The claimed $500,000$ infinite total is itself correct. The ranking against $s_{20}$ is what fails. Forever is larger, not smaller.`);

add("math-11-76", "A", `Seven hundred ninety-one thousand seven hundred ninety-seven dollars is Territory A's eight-year pile, not eight copies of $80,000$ and not Territory B.`);
add("math-11-76", "B", `Eight hundred fifteen thousand three hundred eighty-two dollars is Territory B's eight-year pile. Letter C will rank this against A's $791,797$.`);
add("math-11-76", "C", `B's higher opening $95,000$ outweighs A's 6% growth inside eight years. By year 8 the annual payments have crossed, letter D, but the cumulative race is still B's. "Faster growth wins" is not a trump card when the opening gap is $15,000$.

A longer window would let A's 6% catch up. At $n = 8$ the recovered A total sits below the recovered B total.`);
add("math-11-76", "D", `Year 8 is a snapshot. Cumulative eight years is a pile. They disagree here: A wins the snapshot, B wins the pile. Opening royalties $80,000 < 95,000$ do not freeze that ranking for every later year. Seven years of 6% versus 2% is enough for the annual payments to cross.`);
add("math-11-76", "E", `Twenty-three thousand five hundred eighty-five dollars is B's eight-year lead. That is a real lead and it is not more than $30,000$. Rounding $23,585$ up to $30,000$ is how the cutoff gets a false pass. Full precision keeps the lead at about $23,585$.

The opposite verdict would need a recovered gap above $30,000$. At $n = 8$ the lead is about $23,585$.`);

add("math-11-77", "A", `Five thousand over $8$ is $625$. A claimed $650$ is a $25$ garnish with no model. Letter B will ask whether the $p = 1.5$ series converges. This letter only names $a_4$.`);
add("math-11-77", "B", `One and a half is greater than one, so the $p$-series converges. "Only a little above 1" is still above 1. Letter C will sit on the other side of the gate at $p = 1$.`);
add("math-11-77", "C", `The harmonic series has no finite total. "Larger than the $p = 1.5$ total" is the wrong word for "infinite." Smaller $p$ makes terms decay more slowly until, at $p = 1$, they no longer decay fast enough to sum.

The opposite verdict would need $p > 1$. The hypothetical is $p = 1$.`);
add("math-11-77", "D", `Five dollars in campaign 100 is small, and small is not a finite infinite-total. Terms going to zero is necessary for convergence and not sufficient. The harmonic series is the counterexample, and $p = 1$ is that series.

A planner who stopped at $a_{100} = 5$ would never look at the exponent. The exponent is $1$, which is not greater than $1$.`);
add("math-11-77", "E", `At $p = 0.5$ the terms go to zero even more slowly than the harmonic series. Vanishing terms still do not force a finite sum. The gate is $p > 1$, and $0.5$ is not on the convergent side.`);

add("math-11-78", "A", `One million nine hundred two thousand is 12 years of 1% growing revenue, not 12 copies of $150,000$. Compounding adds about $102,375$.`);
add("math-11-78", "B", `One million seven hundred three thousand is 12 years of 3% growing maintenance. Letter C will subtract this from revenue.`);
add("math-11-78", "C", `One hundred ninety-nine thousand three hundred thirty-two dollars is 12-year profit, below a flat $30,000 \\times 12 = 360,000$ because maintenance grows faster than revenue. Letter E will compare this with the 20-year profit.`);
add("math-11-78", "D", `Year 12 is still in the black by about $1,242$. Faster maintenance growth has not yet eaten the $30,000$ opening gap. Letter E will show that extra years after this still-positive year *lower* cumulative profit. A still-positive year 12 is compatible with a falling cumulative path.`);
add("math-11-78", "E", `Seventy-eight thousand four hundred six dollars at 20 years sits well below $199,332$ at 12 years. Extra years of a thinning, then negative, annual net subtract more than they add. More years is not more cumulative profit when costs grow faster than revenue.

A planner who added eight more copies of the year-12 $1,242$ margin would report a larger 20-year profit. That margin is not a perpetual add-on. Maintenance is still growing at 3%.

The opposite verdict would need maintenance growth below revenue growth. The stem has the reverse.`);

add("math-11-79", "A", `Forty million is $2,400,000 / 0.06$. That is the perpetual recession pile. Fifteen years of it are letter B, about $24.2$ million, not $40$ million.`);
add("math-11-79", "B", `Twenty-four million one hundred eighty-eight thousand is the first 15 recession years, not a round $22$ million. Letter C will divide this recovered decade-and-a-half by $40$ million. Using $22$ million would report $55\\%$ instead of about $60\\%$.`);
add("math-11-79", "C", `Sixty percent is not $75\\%$. Fifteen years of a 6% declining path capture about three fifths of the lifetime recession pile. A calendar $15/20 = 75\\%$ of a made-up 20-year life is the usual mix-up.

The recovered share is $60.47\\%$. The opposite verdict would need a faster decline or a $60\\%$ cutoff.`);
add("math-11-79", "D", `Twenty million one hundred forty-five thousand of 7-year growth does not exceed $40$ million of infinite decline. Growth versus decline is not the right comparison when one clock is 7 years and the other is forever. Fifteen recession years already total about $24.2$ million, which itself exceeds the seven-year recovery pile.

The $20,145,210.36$ figure in the wording is the recovered recovery total. The ranking against $40$ million is what fails. Seven growth years collect about half of the infinite recession pile, not more than all of it.`);
add("math-11-79", "E", `Three million four hundred four thousand is year 7 of the recovery, six growth steps past $2.4$ million. A round $2.9$ million is about $504,000$ light. Simple add-ons of $70,000$ a year miss compounding. The recovered year-7 flow is about $3,404,446$.`);

add("math-11-80", "A", `Two hundred twenty-five thousand is nine flat coupons of $25,000$. Plugging $k = 1$ into the general formula divides by zero. The $k = 1$ total is $a n$.`);
add("math-11-80", "B", `Two hundred fifteen thousand six hundred four dollars is nine growing coupons from $18,000$ at 7%. Nine flat copies would be $162,000$. The recovered Tranche 2 sits below Tranche 1's $225,000$ even though it grows, because it starts lower.`);
add("math-11-80", "C", `Three hundred seventy-five thousand is $30,000 / 0.08$. That convergent perpetuity is the largest of the three tranches. Letter D will ask whether it may be added.`);
add("math-11-80", "D", `Eight hundred fifteen thousand six hundred four dollars is all three tranches. The claimed $440,604$ is only Tranches 1 and 2. Tranche 3 converges at $|k| = 0.92 < 1$, so it is a finite dollar amount and belongs in the combined total. "Forever" is not a reason to drop it.

Letter E's harmonic fee stream is the series that diverges. Mixing that divergence with Tranche 3's 8% decline is the trap. Convergence is the gate for inclusion, and Tranche 3 passes.

The opposite verdict would need $|k| \\ge 1$ on Tranche 3. The stem's $k = 0.92$ converges.`);
add("math-11-80", "E", `Ten dollars in period 100 is small, and small is not a finite infinite-total. The fee stream is $1,000 / n$, a constant multiple of the harmonic series. Terms going to zero is necessary and not sufficient. The $p$-series rule requires $p > 1$, and here $p = 1$.

Tranche 3 was allowed into the portfolio because $|k|<1$. This fee stream has no such $k$. The recovered $f_{100}$ is $10$, and that fact does not guarantee convergence.`);

function insertBeforeCloser(expl, extra) {
  const trueC = "so the statement is True.";
  const falseC = "so the statement is False.";
  const close = expl.trimEnd().endsWith(trueC) ? trueC : falseC;
  const idx = expl.lastIndexOf(close);
  if (idx < 0) throw new Error("no closer");
  return expl.slice(0, idx) + extra + "\n\n" + expl.slice(idx);
}

for (const fname of ["61_70", "71_80"]) {
  const p = new URL(`./${fname}.json`, import.meta.url);
  const arr = JSON.parse(fs.readFileSync(p, "utf8"));
  const letters = "ABCDE";
  let n = 0;
  for (const t of arr) {
    t.tactical_explanations = t.tactical_explanations.map((e, i) => {
      const extra = extras[`${t.id}-${letters[i]}`];
      if (!extra) return e;
      n++;
      return insertBeforeCloser(e, extra);
    });
  }
  fs.writeFileSync(p, JSON.stringify(arr, null, 2) + "\n");
  console.log("thickened", fname, n);
}
