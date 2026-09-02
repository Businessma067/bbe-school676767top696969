import fs from "node:fs";

const file = new URL("./71_80.json", import.meta.url);

const bodies = {
  "math-11-71": [
    `The statement is a scale check: if month 1 were exactly \\$1,000, month 2 at 15% growth would be \\$1,150.

The overview recovered $1{,}000 \\times 1.15 = 1{,}150$. This letter is reading that hypothetical second month. It is not the actual first-month cost inverted from $\\$58,000$.

**1.** The trap is treating $\\$1,000$ as the recovered $a$ from the $\\$58,000$ total. Letter B inverts that total and finds $a \\approx 6{,}625.74$. This $\\$1,000$ is only a scale check.

**2.** Another mix-up is $1{,}000 \\times 1.15^{2} = 1{,}322.50$, treating month 2 as two growth steps. Month 1 is the uncompounded opening term.

The recovered hypothetical month-2 cost is \\$1,150.00, so the statement is True.`,

    `Management wants the opening month that makes six 15% growing restocking bills total exactly \\$58,000.

The overview recovered $a \\approx 6{,}625.74$ from $58{,}000 \\times 0.15 / ((1.15)^{6}-1)$. This letter is reading that inverted first month. It is not rebuilding $(1.15)^{6}$ as a new conversion.

**1.** The trap is $58{,}000 / 6 \\approx 9{,}666.67$, the flat split from letter E. Growth puts cheaper months first, so $a$ sits below that average.

**2.** Another mix-up is $58{,}000 / 1.15^{6} \\approx 25{,}075$, discounting the total as if it were a single sixth-month bill.

The recovered first-month cost is about \\$6,625.74, so the statement is True.`,

    `Month 6 sits five growth steps past the recovered opening month.

The overview recovered $a_6 \\approx 13{,}326.73$ from $6{,}625.74 \\times (1.15)^{5}$. This letter is reading that last-month cost.

**1.** The trap is $6{,}625.74 \\times (1.15)^{6} \\approx 15{,}326$, treating month 6 as six steps past month 0. The first month is uncompounded.

**2.** Another mix-up is reporting the six-month total $\\$58,000$ as if it were a single month. Letter D will sum months 4 through 6. This letter is month 6 alone.

The recovered month-6 cost is about \\$13,326.73, so the statement is True.`,

    `The statement names months 4 through 6 together as about \\$37,930.

The overview recovered $6{,}625.74 \\times (k^{3}+k^{4}+k^{5}) \\approx 34{,}992.12$. The claimed $\\$37,930$ overstates that three-month pile by about $\\$2,938$.

The gap is

$$37{,}930 - 34{,}992 \\approx 2{,}938$$

so the wording is not a rounding of the recovered late-window total.

**1.** The extra arithmetic is that comparison. The three powers $k^{3}$, $k^{4}$, $k^{5}$ are already in the overview. This letter only tests $\\$37,930$ against $\\$34,992$.

**2.** The figure $\\$37,930$ is what you get from $6{,}625.74 \\times (k^{3}+k^{4}+k^{5}+k^{2})$, folding month 3 into the late window, or from $58{,}000 \\times 0.654$. Months 4 through 6 use only the last three powers.

**3.** A rushed solver who used $13{,}326.73 \\times 3 \\approx 39{,}980$ would treat all three late months as if they were month 6. The recovered sum is $\\$34,992$, because months 4 and 5 are smaller.

In the story, the retailer is asking how much of the $\\$58,000$ sits in the expensive late months. The recovered object is about $\\$34,992$. That is a little more than half the six-month total, which is the point of a rising schedule: the last three months outweigh the first three.

What would have to change for the opposite verdict is a recovered late-window total near $\\$37,930$. At 15% for six months from $a \\approx 6{,}625.74$, the last three months are about $\\$34,992$.

The recovered months 4 through 6 total about \\$34,992, not \\$37,930, so the statement is False.`,

    `The statement spreads the same \\$58,000 evenly over six months and claims that flat monthly figure exceeds the actual first-month cost of \\$6,625.74.

The overview recovered $58{,}000 / 6 = 9{,}666.67$. Then

$$9{,}666.67 > 6{,}625.74$$

so the flat split sits about $\\$3,041$ above the growing schedule's opening month.

**1.** Why this ranking holds: a rising 15% path puts cheap months first and expensive months last. The average month is $\\$9,666.67$. Month 1 must sit below that average, and month 6 must sit above it. The recovered $a_6 \\approx 13{,}327$ confirms the other side of the average.

**2.** The trap is thinking the first month should exceed the average because "growth starts immediately." Growth starts after month 1. Month 1 is the smallest bill on a rising path.

**3.** Another mix-up is comparing $9{,}666.67$ with $a_6$ instead of with $a$. Month 6 does exceed the flat figure. The claim names the first-month cost.

In the story, a treasurer who budgeted $\\$9,667$ for month 1 would over-reserve early and then still be short in month 6. The recovered objects are the flat split and $a \\approx 6{,}625.74$. The claim's extra arithmetic is only that inequality.

What would have to change for the opposite verdict is a declining schedule, $k < 1$, which would put the expensive month first. The stem's $k = 1.15$ is growing.

The recovered flat monthly figure exceeds the recovered first-month cost, so the statement is True.`,
  ],

  "math-11-72": [
    `The endowment pays \\$500,000 this year and then shrinks 2% a year forever. Year 2 is one decline step.

The overview recovered $a_2 = 500{,}000 \\times 0.98 = 490{,}000$. This letter is reading that second-year payout.

**1.** The trap is $500{,}000 \\times 0.98^{2} = 480{,}200$, treating year 2 as two decline steps. Year 1 is the unreduced opening term.

**2.** Another mix-up is $500{,}000 - 2\\% \\times 10$ years, mixing the ten-year window into year 2.

The recovered year-2 payout is \\$490,000.00, so the statement is True.`,

    `The statement names the infinite scholarship total as \\$25,000,000.

The overview recovered $500{,}000 / 0.02 = 25{,}000{,}000$. This letter is reading that perpetual total.

**1.** The trap is $500{,}000 / 0.98 \\approx 510{,}204$, dividing by $k$ instead of by $1-k$. The leftover fraction is $2\\%$, not $98\\%$.

**2.** Letter C will name the first ten years, about $\\$4.57$ million. This letter is the infinite pile.

The recovered infinite payout total is \\$25,000,000.00, so the statement is True.`,

    `The statement names the first ten years of payouts as about \\$4,800,000.

The overview recovered $s_{10} \\approx 4{,}573{,}180$. The claimed $\\$4,800,000$ overstates that decade by about $\\$227,000$.

The gap is

$$4{,}800{,}000 - 4{,}573{,}180 \\approx 226{,}820$$

so the wording is a round $\\$4.8$ million, not a rounding of the recovered $s_{10}$.

**1.** The extra arithmetic is that comparison. The ten-year sum is already in the overview. This letter does not rebuild $0.98^{10}$. It only tests $\\$4.8$ million against $\\$4.57$ million.

**2.** The figure $\\$4,800,000$ is what you get from $500{,}000 \\times 9.6$, or from $500{,}000 \\times (1-0.98^{10})/0.02$ with $0.98^{10}$ taken as $0.808$ instead of $0.817$. Nearby is not the recovered $4{,}573{,}180$.

**3.** Letter D will divide this ten-year total by $\\$25$ million. Using $\\$4.8$ million would report about $19.2\\%$ instead of $18\\%$. The recovered decade is $\\$4,573,180$.

In the story, the board is asking how much scholarship money leaves in the first ten years of a 2% declining plan. The recovered object is $s_{10}$. The claim's extra move is a round $\\$4.8$ million.

What would have to change for the opposite verdict is a recovered decade near $\\$4.8$ million, which would take a slower decline. At $k = 0.98$ the first ten years total about $\\$4.57$ million.

The recovered ten-year total is about \\$4,573,180, not \\$4,800,000, so the statement is False.`,

    `The statement claims the first ten years represent about 18% of the infinite $\\$25$ million total.

The overview recovered $s_{10} \\approx 4{,}573{,}180$ and $s_{\\infty} = 25{,}000{,}000$. Their share is

$$\\frac{4{,}573{,}180}{25{,}000{,}000} \\approx 0.1829$$

which is about $18\\%$. This letter is reading that recovered share.

**1.** A calendar slogan "10 years is not 18% of forever" is true as time and false as dollars. Later payouts are small, so a decade already captures about $18\\%$ of the lifetime scholarships.

**2.** The trap is using letter C's false $\\$4.8$ million, which would give $19.2\\%$, or $10/55 \\approx 18\\%$ from a made-up 55-year life. The recovered share uses $s_{10}/s_{\\infty}$.

**3.** Rounding $18.29\\%$ to $18\\%$ is the approximation the claim uses. It is not $15\\%$ and not $20\\%$.

In the story, the board is asking how front-loaded the 2% declining plan is. The recovered objects are the decade and the perpetuity. About $18\\%$ of all future scholarships leave in the first ten years.

The recovered ten-year share is about 18% of the infinite total, so the statement is True.`,

    `The statement steepens the decline to $k = 0.95$ and claims the new infinite total would be more than half of the original $\\$25$ million.

The overview recovered $500{,}000 / 0.05 = 10{,}000{,}000$ at $k = 0.95$. Half of $\\$25$ million is $\\$12.5$ million. Then

$$10{,}000{,}000 < 12{,}500{,}000$$

so the steeper path's lifetime total is less than half, not more.

**1.** Why this is a threshold test: both infinite totals are already in the overview. This letter only asks whether $10$ million clears $12.5$ million. It does not.

**2.** The trap is thinking a 3-point steeper decline (2% to 5%) should cut the total by 3/5 or by 40%, landing near $15$ million, which would beat half. The infinite-sum formula is $a/(1-k)$, so tripling $1-k$ from $0.02$ to $0.05$ cuts the total to $2/5$ of the original, which is $10$ million, below half.

**3.** A rushed solver who compared $k = 0.95$ with $0.98$ as if those were the totals would never look at $10$ million versus $12.5$ million.

In the story, a 5% declining scholarship plan pays out $10$ million over all future years, against $25$ million at 2% decline. Half of $25$ million is $12.5$ million. The recovered $10$ million does not clear that half.

What would have to change for the opposite verdict is a milder steepening, for example $k = 0.96$, whose infinite total is $12.5$ million exactly. The hypothetical is $k = 0.95$.

The recovered $k = 0.95$ infinite total is \\$10 million, which is not more than half of \\$25 million, so the statement is False.`,
  ],

  "math-11-73": [
    `The marketing budget starts at \\$200,000 and grows 12% a year. Year 2 is one growth step.

The overview recovered $a_2 = 200{,}000 \\times 1.12 = 224{,}000$. This letter is reading that year-2 budget.

**1.** The trap is $200{,}000 \\times 1.12^{2} = 250{,}880$, treating year 2 as two growth steps. Year 1 is the uncompounded opening term.

**2.** Another mix-up is $200{,}000 + 12{,}000 \\times 2$, adding 12% twice as simple interest.

The recovered year-2 budget is \\$224,000.00, so the statement is True.`,

    `The CFO wants the smallest $n$ such that cumulative spend clears \\$3,000,000. The statement says that after 9 years the pile is still below that target.

The overview recovered $s_9 \\approx 2{,}955{,}131$, which sits about $\\$44,869$ short of $\\$3,000,000$. This letter is reading that nine-year miss.

**1.** The trap is rounding $2{,}955{,}131$ up to $3$ million and calling nine years enough. Full precision keeps $s_9$ below the target.

**2.** Letter C will test year 10. Letter D will name the smallest $n$. This letter only asks whether nine years are still short. They are.

The recovered nine-year spend is about \\$2,955,131, still below \\$3,000,000, so the statement is True.`,

    `The statement names the ten-year cumulative spend as about \\$3,600,000.

The overview recovered $s_{10} \\approx 3{,}509{,}747$. The claimed $\\$3,600,000$ overstates that total by about $\\$90,253$.

The gap is

$$3{,}600{,}000 - 3{,}509{,}747 \\approx 90{,}253$$

so the wording is a round $\\$3.6$ million, not a rounding of the recovered $s_{10}$.

**1.** The extra arithmetic is that comparison. The ten-year sum is already in the overview. This letter does not rebuild $(1.12)^{10}$. It only tests $\\$3.6$ million against $\\$3.51$ million.

**2.** The figure $\\$3,600,000$ is what you get from $200{,}000 \\times 18$, or from rounding $3{,}509{,}747$ up by $\\$90,000$. The recovered total is about $\\$3,509,747$.

**3.** Letter D needs this ten-year total to sit above $\\$3,000,000$, which it does. Inflating it to $\\$3.6$ million is not required for that ranking. This letter only asks whether the recovered $s_{10}$ is about $\\$3,600,000$. It is not.

In the story, year 10 is the first year the cumulative marketing spend clears the $\\$3$ million target. The recovered object is $s_{10} \\approx 3{,}509{,}747$. The claim's extra move is a round $\\$3.6$ million.

What would have to change for the opposite verdict is a recovered ten-year total near $\\$3.6$ million. At 12% from $\\$200,000$, ten years total about $\\$3.51$ million.

The recovered ten-year spend is about \\$3,509,747, not \\$3,600,000, so the statement is False.`,

    `The statement names the smallest $n$ that clears \\$3,000,000 as $n = 9$.

The overview recovered $s_9 \\approx 2{,}955{,}131 < 3{,}000{,}000$ and $s_{10} \\approx 3{,}509{,}747 > 3{,}000{,}000$. Those two adjacent totals bracket the target, so the smallest such $n$ is $10$, not $9$.

**1.** Why this is a threshold letter: both neighbouring sums are already in the overview. This letter only reads the bracket. It does not rebuild $(1.12)^{9}$.

**2.** The trap is rounding $s_9$ up to $3$ million, or treating "close" as "past." $\\$44,869$ short is not past. The CFO asked for the first year the pile *surpasses* $\\$3,000,000$.

**3.** Letter B already locked the nine-year miss. Letter C locked a ten-year total above $3$ million (even though it named the wrong dollars). Together they force $n = 10$.

In the story, the break-point year is the first year the cumulative marketing budget exceeds $3$ million. The recovered objects are $s_9$ and $s_{10}$. Nine years miss. Ten years clear. The smallest $n$ is $10$.

What would have to change for the opposite verdict is a recovered $s_9$ already above $3$ million, which would take a higher growth rate or a larger opening budget. At 12% from $\\$200,000$, nine years are still short.

The recovered smallest $n$ is 10, not 9, so the statement is False.`,

    `The statement slows growth to 8% and claims the ten-year pile would still clear \\$3,000,000.

The overview recovered $s_{10} \\approx 2{,}897{,}312$ at $k = 1.08$. Then

$$2{,}897{,}312 < 3{,}000{,}000$$

so ten years at 8% remain about $\\$102,688$ short of the target.

**1.** Why this is extra arithmetic as a new growth path: the 8% ten-year total is already in the overview. This letter only tests it against $\\$3,000,000$. It does not rebuild $(1.12)^{10}$.

**2.** The trap is keeping the original $s_{10} \\approx 3{,}509{,}747$ and asking whether *that* clears $3$ million. Of course it does, but the growth rate was swapped. This letter is the 8% path.

**3.** Another mix-up is $200{,}000 \\times 10 \\times 1.08 = 2{,}160{,}000$, a one-shot 8% garnish on a flat decade, which also misses and is the wrong clock.

In the story, the CFO is asking whether a milder 8% marketing ramp would still hit $3$ million inside ten years. The recovered 8% ten-year total is about $\\$2.90$ million. It does not.

What would have to change for the opposite verdict is a cutoff of $\\$2.8$ million, or an 8% path with a larger opening budget. Under the stem's $\\$200,000$ at 8%, ten years miss $3$ million.

The recovered 8% ten-year spend is about \\$2,897,312, which does not surpass \\$3,000,000, so the statement is False.`,
  ],

  "math-11-74": [
    `The first grant is \\$50,000 and then each later grant is 96% of the previous one. Grant 2 is one decline step.

The overview recovered $a_2 = 50{,}000 \\times 0.96 = 48{,}000$. This letter is reading that second grant.

**1.** The trap is $50{,}000 \\times 0.96^{2} = 46{,}080$, treating grant 2 as two decline steps. The first grant is the unreduced opening term.

**2.** Another mix-up is mixing the six-year deferral into the grant sequence. The sequence itself starts at $a = 50{,}000$ when grants begin. This letter is the second grant in that sequence.

The recovered second grant is \\$48,000.00, so the statement is True.`,

    `The statement names the infinite grant total as \\$1,250,000.

The overview recovered $50{,}000 / 0.04 = 1{,}250{,}000$. This letter is reading that perpetual total.

**1.** The trap is $50{,}000 / 0.96 \\approx 52{,}083$, dividing by $k$ instead of by $1-k$. The leftover fraction is $4\\%$, not $96\\%$.

**2.** Letter C will name the first 15 grants, about $\\$572,392$. This letter is the infinite pile.

The recovered infinite grant total is \\$1,250,000.00, so the statement is True.`,

    `The statement names the first 15 grants as totalling about \\$572,392.03.

The overview recovered $s_{15} \\approx 572{,}392.03$ from $50{,}000 \\times (1-0.96^{15})/0.04$. This letter is reading that 15-grant sum.

**1.** The trap is $50{,}000 \\times 15 = 750{,}000$, fifteen flat copies, or the infinite $\\$1,250,000$. Fifteen decaying grants sit below both.

**2.** Letter D will turn this $\\$572,392$ into a share of $\\$1,250,000$. This letter only names the 15-grant dollars.

The recovered 15-grant total is about \\$572,392.03, so the statement is True.`,

    `The statement claims the first 15 grants are less than 40% of the infinite total.

The overview recovered $s_{15} \\approx 572{,}392$ and $s_{\\infty} = 1{,}250{,}000$. Their share is

$$\\frac{572{,}392}{1{,}250{,}000} \\approx 0.4579$$

which is about $46\\%$, not less than $40\\%$. The share clears the cutoff by about $6$ points.

**1.** Why this is a threshold test: both totals are already in the overview. This letter only asks whether $45.79\\%$ sits below $40\\%$. It does not. It sits above.

**2.** The trap is $15$ years as $15/40 = 37.5\\%$ of a made-up 40-year life, which would miss $40\\%$ from below. Dollar share is not calendar share. Later grants are smaller, but fifteen of them still capture about $46\\%$ of the lifetime pile.

**3.** Another mix-up is $1-0.96^{15} \\approx 0.458$, which already is the share of the perpetuity, misread as $0.358$. The recovered share is $45.79\\%$.

In the story, the analysts are asking how front-loaded the first 15 grants are. The recovered objects are $s_{15}$ and $s_{\\infty}$. About $46\\%$ of all future grants sit in those 15 payments, which is not less than $40\\%$.

What would have to change for the opposite verdict is a slower decline, so that the tail beyond year 15 was a larger share, or a cutoff of $50\\%$. At $k = 0.96$ the recovered share is about $46\\%$.

The recovered 15-grant share is about 46%, which is not less than 40%, so the statement is False.`,

    `The statement steepens the decline to $k = 0.90$ and claims the new infinite total would be less than half of the original $\\$1,250,000$.

The overview recovered $50{,}000 / 0.10 = 500{,}000$ at $k = 0.90$. Half of $\\$1,250,000$ is $\\$625,000$. Then

$$500{,}000 < 625{,}000$$

so the steeper path's lifetime total is less than half.

**1.** Why this ranking holds: $1-k$ rises from $0.04$ to $0.10$, a factor of $2.5$, so the infinite total falls by that same factor, from $1{,}250{,}000$ to $500{,}000$. Half would have required a factor of $2$, which is $k = 0.92$. The hypothetical is steeper than that.

**2.** The trap is thinking a 6-point steeper decline (4% to 10%) should cut the total by 6/10, landing near $500{,}000$ for the wrong reason, or landing near $750{,}000$ and beating half. The recovered $500{,}000$ is below half.

**3.** Letter 72 E was the same shape of test at a different pair of quotients. Here the recovered $500{,}000$ does sit below $625{,}000$.

In the story, a 10% declining grant stream pays $500{,}000$ over all future grants, against $1{,}250{,}000$ at 4% decline. Half of $1{,}250{,}000$ is $625{,}000$. The recovered $500{,}000$ is less than that half.

The recovered $k = 0.90$ infinite total is \\$500,000, which is less than half of \\$1,250,000, so the statement is True.`,
  ],

  "math-11-75": [
    `The vineyard's first-quarter yield is 10,000 lbs and then falls 2% a quarter. Quarter 2 is one decline step.

The overview recovered $a_2 = 10{,}000 \\times 0.98 = 9{,}800$. This letter is reading that second-quarter yield.

**1.** The trap is $10{,}000 \\times 0.98^{2} = 9{,}604$, treating quarter 2 as two decline steps. Quarter 1 is the unreduced opening term.

**2.** Another mix-up is a 2% annual decline, $10{,}000 \\times 0.98$ applied once a year. The stem declines every quarter.

The recovered second-quarter yield is 9,800.00 lbs, so the statement is True.`,

    `The statement names the full 5-year, 20-quarter yield as about 166,196.01 lbs.

The overview recovered $s_{20} = 166{,}196.01$ from $10{,}000 \\times (1-0.98^{20})/0.02$. This letter is reading that 20-quarter total.

**1.** The trap is letter C's $n = 5$ companion, $48{,}039.60$ lbs, which covers only five quarters. Five years are 20 quarters.

**2.** Another mix-up is $10{,}000 \\times 20 = 200{,}000$, twenty flat copies, or the infinite $500{,}000$ lbs from letter E.

The recovered 20-quarter yield is 166,196.01 lbs, so the statement is True.`,

    `The statement substitutes $n = 5$ into the same formula, gets 48,039.60 lbs, and claims that this is the correct 5-year total.

The overview recovered that $n = 5$ product as $48{,}039.60$ lbs and rejected it as the five-year yield. Five years contain 20 quarters, not 5. The $n = 5$ figure covers only the first 1.25 years.

**1.** The extra arithmetic is the unit conversion: $5$ years $\\times 4$ quarters/year $= 20$ periods. Using $n = 5$ treats years as if they were already quarters. The recovered correct total is $s_{20} = 166{,}196.01$ lbs.

**2.** The trap is "the problem says 5 years, so $n = 5$." The geometric clock is the decline clock, and the stem declines every quarter. The exponent must count quarters.

**3.** Letter B already locked the 20-quarter total at $166{,}196.01$ lbs. This letter only asks whether $48{,}039.60$ lbs is the right 5-year figure. It is the right 5-quarter figure, which is not 5 years.

In the story, a vineyard manager who booked 48,040 lbs for five years would understate yield by about 118,000 lbs. The recovered objects are $s_5$ (wrong clock) and $s_{20}$ (right clock). The claim names the wrong clock as if it were right.

What would have to change for the opposite verdict is a 2% *annual* decline for 5 years, whose $n$ would be 5. The stem declines 2% every quarter.

The recovered 5-year total uses n = 20, not n = 5, so the statement is False.`,

    `The statement names the 20th-quarter yield as about 6,812.33 lbs.

The overview recovered $a_{20} \\approx 6{,}812.33$ from $10{,}000 \\times 0.98^{19}$. This letter is reading that last-quarter yield.

**1.** The trap is $10{,}000 \\times 0.98^{20} \\approx 6{,}676$, treating quarter 20 as 20 decline steps past quarter 0. Quarter 1 is the unreduced opening term, so quarter 20 carries the power $19$.

**2.** Another mix-up is reporting the 20-quarter total $166{,}196$ as if it were a single quarter.

The recovered quarter-20 yield is about 6,812.33 lbs, so the statement is True.`,

    `The statement claims that if the 2%-per-quarter decline continued forever, the infinite total of 500,000 lbs would be less than the 20-quarter total.

The overview recovered $s_{\\infty} = 10{,}000 / 0.02 = 500{,}000$ and $s_{20} = 166{,}196.01$. Then

$$500{,}000 > 166{,}196$$

so the infinite pile is larger than the 20-quarter pile, not smaller.

**1.** A partial sum of positive yields cannot exceed the infinite sum. The remaining tail from quarter 21 onward is about $333{,}804$ lbs, twice the first 20 quarters.

**2.** The trap is thinking "20 quarters is almost forever at a 2% decline, so the infinite total should be smaller somehow." Forever still adds the tail. Twenty quarters capture only

$$\\frac{166{,}196}{500{,}000} \\approx 33.2\\%$$

of the lifetime yield.

**3.** The claimed 500,000 lbs infinite total is itself correct. The ranking against $s_{20}$ is what fails.

In the story, stopping after five years leaves about two thirds of the theoretical lifetime yield unharvested. The recovered objects are $s_{\\infty}$ and $s_{20}$. The infinite total is larger.

The recovered infinite yield is 500,000 lbs, which exceeds the 20-quarter total, so the statement is False.`,
  ],

  "math-11-76": [
    `Territory A starts at \\$80,000 and grows 6% a year for 8 years. The statement names that eight-year total as about \\$791,797.43.

The overview recovered $s_{A,8} \\approx 791{,}797.43$. This letter is reading that Territory A pile. It is not Territory B.

**1.** The trap is $80{,}000 \\times 8 = 640{,}000$, eight flat copies, or $80{,}000 \\times (1.06)^{8} \\approx 127{,}508$, the year-9 term treated as a total.

**2.** Letter B will name Territory B's $\\$815,382.06$. This letter is A only.

The recovered Territory A eight-year total is about \\$791,797.43, so the statement is True.`,

    `Territory B starts higher, at \\$95,000, and grows only 2% a year for 8 years. The statement names that eight-year total as about \\$815,382.06.

The overview recovered $s_{B,8} \\approx 815{,}382.06$. This letter is reading that Territory B pile.

**1.** The trap is $95{,}000 \\times 8 = 760{,}000$, eight flat copies, or swapping A's $\\$791,797$ onto B.

**2.** Letter C will rank A against B. This letter only names B's total.

The recovered Territory B eight-year total is about \\$815,382.06, so the statement is True.`,

    `The statement claims Territory A's eight-year total exceeds Territory B's.

The overview recovered $s_{A,8} \\approx 791{,}797$ and $s_{B,8} \\approx 815{,}382$. Then

$$791{,}797 < 815{,}382$$

so A does not exceed B over eight years. B's higher opening royalty outweighs A's faster growth inside this window.

**1.** Why this is a comparison letter: both totals are already in the overview. This letter only ranks them. It does not rebuild $(1.06)^{8}$.

**2.** The trap is choosing A because 6% sounds more generous than 2%. Frequency-of-growth is not a trump card when the opening levels differ by $\\$15,000$. Letter D will show that by year 8, A's *annual* royalty does overtake B's. Cumulative over eight years, B still leads.

**3.** The extra is about $\\$23,585$, letter E's gap. This letter only asks which total is larger. B's is larger.

In the story, the franchisor is picking a territory on eight-year cumulative royalties. The recovered objects are the two eight-year piles. B wins the cumulative race even though A grows faster.

What would have to change for the opposite verdict is a longer window, so that A's 6% compound would catch B's higher start. At $n = 8$, B still leads.

The recovered Territory A total sits below the recovered Territory B total, so the statement is False.`,

    `The statement says that in year 8 alone, A's royalty of about \\$120,290.42 exceeds B's year-8 royalty of about \\$109,125.14.

The overview recovered $a_{A,8} \\approx 120{,}290.42$ and $a_{B,8} \\approx 109{,}125.14$. Then

$$120{,}290 > 109{,}125$$

so by year 8 the faster-growing territory has the larger *annual* payment, even though B still leads on the eight-year *cumulative* total.

**1.** The extra arithmetic is that year-8 ranking. Both year-8 terms are already in the overview. This letter does not rebuild $(1.06)^{7}$.

**2.** The trap is mixing this snapshot with letter C's cumulative ranking. Cumulative and year-8 can disagree when paths cross. They do disagree here: B wins the pile, A wins year 8.

**3.** A rushed solver who compared opening royalties $80{,}000 < 95{,}000$ and concluded A can never catch B in any single year would miss the crossing. Seven years of 6% versus 2% is enough for the annual payments to cross.

In the story, the franchisor who looks only at year 8 would pick A, and the franchisor who looks at eight-year totals would pick B. The recovered objects are the two year-8 royalties. A's year-8 payment is larger.

The recovered year-8 royalties have A exceeding B, so the statement is True.`,

    `The statement claims Territory B's eight-year total exceeds Territory A's by more than \\$30,000.

The overview recovered $s_{B,8} - s_{A,8} \\approx 815{,}382 - 791{,}797 = 23{,}585$. Then

$$23{,}585 < 30{,}000$$

so B's cumulative lead is about $\\$23,585$, not more than $\\$30,000$.

**1.** Why this is a threshold test: both totals are already in the overview. This letter only asks whether the $\\$23,585$ gap clears $\\$30,000$. It does not.

**2.** The trap is using year-8 payments $120{,}290 - 109{,}125 \\approx 11{,}165$ as if that were the cumulative gap, or rounding $23{,}585$ up to $30{,}000$. Full precision keeps the lead at about $\\$23,585$.

**3.** Letter C already ranked B above A. This letter only measures that distance against a $\\$30,000$ cutoff.

In the story, B's extra eight-year royalties are real and they are not more than $\\$30,000$. The recovered gap is $\\$23,585$.

What would have to change for the opposite verdict is a recovered gap above $\\$30,000$, which would take a larger opening gap or a shorter window (before A's growth has time to close). At $n = 8$ the lead is about $\\$23,585$.

The recovered cumulative lead is about \\$23,585, which is not more than \\$30,000, so the statement is False.`,
  ],

  "math-11-77": [
    `At $p = 1.5$, the fourth campaign's marginal benefit is $5{,}000 / 4^{1.5}$. Because $4^{1.5} = 8$, that benefit is $\\$625$, not the claimed $\\$650$.

The overview recovered $a_4 = 625$. The claimed $\\$650$ overstates this by $\\$25$.

**1.** The extra arithmetic is $5{,}000 / 8 = 625$. The power $4^{1.5} = 8$ is already in the overview. This letter only tests $\\$650$ against $\\$625$.

**2.** The figure $\\$650$ is what you get from $5{,}000 / \\sqrt{60}$, or from rounding $625$ up by $\\$25$. The recovered fourth benefit is $\\$625$.

**3.** Letter B will ask whether the $p = 1.5$ series converges. This letter only names $a_4$.

The recovered fourth-batch benefit is \\$625.00, not \\$650.00, so the statement is False.`,

    `The $p$-series rule says $\\sum 1/n^{p}$ converges if and only if $p > 1$. Here $p = 1.5 > 1$, so $\\sum 5{,}000 / n^{1.5}$ converges to a finite total.

The overview recovered that $1.5 > 1$ test. This letter is reading that convergence. It is not naming the dollar total.

**1.** The trap is thinking $p = 1.5$ is "only a little above 1," so the series might still diverge. The gate is $p > 1$, not $p > 2$. One and a half is enough.

**2.** Letter C will test $p = 1$, which sits on the other side of the gate. This letter is $p = 1.5$.

The recovered $p = 1.5$ series converges, so the statement is True.`,

    `The statement sets $p = 1$ and claims the series would still converge, just to a larger total than at $p = 1.5$.

The overview recovered that $p = 1$ is a constant multiple of the harmonic series, which diverges. There is no finite total at $p = 1$, larger or otherwise.

**1.** The extra arithmetic is the $p > 1$ gate applied at $p = 1$. The gate closes. $p = 1$ is not greater than $1$.

**2.** The trap is thinking a larger total at a smaller $p$ is still a total. Smaller $p$ makes terms decay more slowly. At $p = 1$ they decay so slowly that the sum runs to infinity. "Larger" is the wrong word for "infinite."

**3.** Letter E will test $p = 0.5$, also divergent. This letter is the harmonic boundary $p = 1$.

In the story, $p = 1$ means each batch $n$ adds $5{,}000 / n$ dollars. Those harmonic add-ons have no finite infinite-sum. The recovered $p = 1$ series diverges.

The recovered $p = 1$ series diverges, so the statement is False.`,

    `The statement notes that $a_{100} = \\$5.00$ at $p = 1$ and claims that this alone guarantees convergence.

The overview recovered $a_{100} = 5{,}000 / 100 = 5.00$, so the dollar figure is right, and the terms do go to zero. Terms going to zero is necessary for convergence and not sufficient. The harmonic series is the standard counterexample: $a_n \\to 0$ and $\\sum a_n$ diverges.

**1.** Why this is extra reasoning, not a new formula: $a_{100} = 5$ is already in the overview. This letter only asks whether that one term, or the fact that terms vanish, is enough. It is not.

**2.** The trap is the slogan "if the general term goes to zero, the series converges." Letter E will repeat that slogan at $p = 0.5$. The $p$-series rule is the actual test, and $p = 1$ fails it.

**3.** A rushed solver who computed $a_{100} = 5$ and stopped would never look at $p$. The exponent is $1$, which is not greater than $1$.

In the story, the hundredth campaign adding only $\\$5$ sounds small, and small is not the same as a finite infinite-total. The recovered objects are $a_{100} = 5$ and the harmonic divergence. The claim's extra move is "this alone is enough."

The recovered $a_{100}$ is \\$5, but that does not guarantee convergence, so the statement is False.`,

    `At $p = 0.5$ the exponent is not greater than $1$, so $\\sum 5{,}000 / n^{0.5}$ diverges. The terms still go to zero, because $\\sqrt{n} \\to \\infty$, but vanishing terms are not enough.

The overview recovered $0.5 \\le 1$ and the corresponding divergence. This letter is reading that $p$-series failure.

**1.** The trap is exactly letter D's slogan: terms go to zero, so the series should converge. At $p = 0.5$ the terms go to zero even more slowly than the harmonic series, and the sum diverges more obviously.

**2.** Letter B was $p = 1.5$, convergent. Letter C was $p = 1$, divergent. This letter is $p = 0.5$, also divergent. The gate is $p > 1$, and $0.5$ is not on the convergent side.

The recovered $p = 0.5$ series diverges even though the terms tend to 0, so the statement is True.`,
  ],

  "math-11-78": [
    `Revenue starts at \\$150,000 and grows 1% a year. The statement names the 12-year revenue total as about \\$1,902,375.45.

The overview recovered $s_{R,12} = 1{,}902{,}375.45$. This letter is reading that revenue pile. It is not maintenance, and it is not profit.

**1.** The trap is $150{,}000 \\times 12 = 1{,}800{,}000$, twelve flat copies. Compounding at 1% adds the extra $\\$102,375$.

**2.** Letter B will name the 12-year maintenance total. This letter is revenue only.

The recovered 12-year revenue is about \\$1,902,375.45, so the statement is True.`,

    `Maintenance starts at \\$120,000 and grows 3% a year. The statement names the 12-year cost total as about \\$1,703,043.55.

The overview recovered $s_{C,12} = 1{,}703{,}043.55$. This letter is reading that maintenance pile.

**1.** The trap is $120{,}000 \\times 12 = 1{,}440{,}000$, twelve flat copies, or swapping the revenue total onto costs.

**2.** Letter C will subtract this from revenue. This letter only names the cost total.

The recovered 12-year maintenance cost is about \\$1,703,043.55, so the statement is True.`,

    `Cumulative 12-year profit is revenue total minus cost total. The statement names that profit as about \\$199,331.90.

The overview recovered $1{,}902{,}375.45 - 1{,}703{,}043.55 = 199{,}331.90$. This letter is reading that subtraction.

**1.** The trap is $150{,}000 - 120{,}000 = 30{,}000$ times 12, a flat $\\$360,000$ profit that ignores the two different growth rates. Maintenance grows faster, so 12-year profit sits below that flat $360{,}000$.

**2.** Letter E will compare this $\\$199,332$ with the 20-year profit. This letter is the 12-year profit only.

The recovered 12-year profit is about \\$199,331.90, so the statement is True.`,

    `The statement says that in year 12 alone, revenue of about \\$167,350.25 still exceeds maintenance of about \\$166,108.06, leaving about \\$1,242.19.

The overview recovered those year-12 figures and the net $167{,}350.25 - 166{,}108.06 = 1{,}242.19$. This letter is reading that still-positive year-12 margin.

**1.** The extra arithmetic is that year-12 subtraction. Both year-12 terms are already in the overview. This letter does not rebuild $(1.01)^{11}$.

**2.** The trap is thinking "maintenance grows faster, so year 12 must already be negative." Faster growth has not yet overtaken the $\\$30,000$ opening gap by year 12. The recovered year-12 net is still $+\\$1,242$.

**3.** Letter E will show that stretching to 20 years *lowers cumulative profit* even while some late years may turn negative. This letter only asks whether year 12 is still in the black. It is.

In the story, the solar farm still earns a thin positive margin in year 12. The recovered objects are the two year-12 amounts. The claim's cents match the overview.

The recovered year-12 net is about \\$1,242.19, still positive, so the statement is True.`,

    `The statement extends the horizon to 20 years and claims cumulative profit then falls below the 12-year cumulative profit.

The overview recovered $\\Pi_{12} = 199{,}331.90$ and $\\Pi_{20} = 78{,}405.66$. Then

$$78{,}406 < 199{,}332$$

so the longer window *reduces* cumulative profit by about $\\$120,926$. Maintenance's 3% growth eats the 1% revenue lead in the later years.

**1.** Why this is a comparison letter: both cumulative profits are already in the overview. This letter only ranks $\\Pi_{20}$ against $\\Pi_{12}$. It does not rebuild the 20-year geometric sums as a new conversion.

**2.** The trap is thinking more years of still-positive operations must raise cumulative profit. Letter D showed year 12 still positive. After year 12 the annual net turns and then stays negative enough that years 13 through 20 subtract more than they add. Cumulative profit falls.

**3.** A rushed solver who added eight more years of $\\$1,242$ would report a larger 20-year profit. The year-12 margin is not a perpetual add-on. Maintenance is still growing at 3%.

In the story, stretching the farm from 12 years to 20 years is not a free lunch. The recovered objects are $\\Pi_{12}$ and $\\Pi_{20}$. The longer horizon leaves a smaller cumulative profit, about $\\$78,406$ against $\\$199,332$.

What would have to change for the opposite verdict is a maintenance growth rate below the revenue growth rate, so that extra years added profit. The stem has maintenance growing faster.

The recovered 20-year profit sits below the recovered 12-year profit, so the statement is True.`,
  ],

  "math-11-79": [
    `Under the recession path, cash flow starts at \\$2,400,000 and shrinks 6% a year forever. The statement names that infinite total as \\$40,000,000.

The overview recovered $2{,}400{,}000 / 0.06 = 40{,}000{,}000$. This letter is reading that perpetual recession total.

**1.** The trap is $2{,}400{,}000 / 0.94 \\approx 2{,}553{,}191$, dividing by $k$ instead of by $1-k$. The leftover fraction is $6\\%$, not $94\\%$.

**2.** Letter B will name the first 15 recession years. This letter is the infinite pile.

The recovered infinite recession total is \\$40,000,000.00, so the statement is True.`,

    `The statement names the first 15 recession years as about \\$22,000,000.

The overview recovered $s_{15} \\approx 24{,}188{,}328$. The claimed $\\$22,000,000$ understates that decade-and-a-half by about $\\$2,188,328$.

The gap is

$$24{,}188{,}328 - 22{,}000{,}000 \\approx 2{,}188{,}328$$

so the wording is a round $\\$22$ million, not a rounding of the recovered $s_{15}$.

**1.** The extra arithmetic is that comparison. The 15-year sum is already in the overview. This letter does not rebuild $0.94^{15}$. It only tests $\\$22$ million against $\\$24.19$ million.

**2.** The figure $\\$22,000,000$ is what you get from $2{,}400{,}000 \\times 9.17$, or from $40{,}000{,}000 \\times 0.55$. Nearby is not the recovered $24{,}188{,}328$.

**3.** Letter C will divide this 15-year total by $\\$40$ million. Using $\\$22$ million would report $55\\%$ instead of about $60\\%$. The recovered 15-year total is $\\$24,188,328$.

In the story, the fund is asking how much cash the recession path produces in 15 years. The recovered object is $s_{15}$. The claim's extra move is a round $\\$22$ million.

The recovered 15-year recession total is about \\$24,188,328, not \\$22,000,000, so the statement is False.`,

    `The statement claims the 15-year recession total is about 75% of the infinite $\\$40$ million.

The overview recovered $s_{15} \\approx 24{,}188{,}328$ and $s_{\\infty} = 40{,}000{,}000$. Their share is

$$\\frac{24{,}188{,}328}{40{,}000{,}000} \\approx 0.6047$$

which is about $60\\%$, not $75\\%$. The claim overstates the share by about $15$ points.

**1.** Why this is a threshold test: both totals are already in the overview. This letter only asks whether $60.47\\%$ is approximately $75\\%$. It is not.

**2.** The trap is using letter B's false $\\$22$ million, which would give $55\\%$, still not $75\\%$, or $15/20 = 75\\%$ from a made-up 20-year life.

**3.** Another mix-up is $1-0.94^{15} \\approx 0.605$, which already is the share of the perpetuity, misread as $0.75$. The recovered share is $60.47\\%$.

In the story, 15 years of a 6% declining cash-flow path capture about three fifths of the lifetime recession pile, not three quarters. The recovered objects are $s_{15}$ and $s_{\\infty}$.

What would have to change for the opposite verdict is a faster decline, so that 15 years captured $75\\%$ of the infinite total, or a cutoff of $60\\%$. At $k = 0.94$ the recovered share is about $60\\%$.

The recovered 15-year share is about 60%, not 75%, so the statement is False.`,

    `The statement claims the 7-year recovery total of about \\$20,145,210.36 exceeds the infinite recession total of \\$40,000,000.

The overview recovered $s_7 \\approx 20{,}145{,}210$ under recovery and $s_{\\infty} = 40{,}000{,}000$ under recession. Then

$$20{,}145{,}210 < 40{,}000{,}000$$

so seven years of 6% growth do not overtake the never-ending 6% decline. The claim has the inequality backwards.

**1.** Why this is a comparison letter: both totals are already in the overview. This letter only ranks $s_7$ against $s_{\\infty}$. The $\\$20,145,210.36$ figure in the wording is itself the recovered recovery total. The ranking is what fails.

**2.** The trap is thinking "growth beats decline, so seven growth years beat an infinite decline." Infinite decline still adds the long tail. Fifteen recession years already total about $\\$24.2$ million, which itself exceeds the seven-year recovery pile.

**3.** A rushed solver who compared $k = 1.06$ with $k = 0.94$ and declared growth the winner without looking at $n$ versus infinity would agree with the wording. The recovered pair is $20.1$ million versus $40$ million.

In the story, the fund is ranking a 7-year growing exit path against a perpetual shrinking path. The recovered objects are $s_7$ and the recession $s_{\\infty}$. Seven growth years collect about half of the infinite recession pile, not more than all of it.

What would have to change for the opposite verdict is a much longer recovery window, or a much smaller recession total. Under the stem, $20.1$ million does not exceed $40$ million.

The recovered 7-year recovery total sits below the recovered infinite recession total, so the statement is False.`,

    `The statement names year-7 recovery cash flow as about \\$2,900,000.

The overview recovered $a_7 \\approx 3{,}404{,}446$ from $2{,}400{,}000 \\times (1.06)^{6}$. The claimed $\\$2,900,000$ understates that year-7 flow by about $\\$504,000$.

The gap is

$$3{,}404{,}446 - 2{,}900{,}000 \\approx 504{,}446$$

so the wording is a round $\\$2.9$ million, not a rounding of the recovered $a_7$.

**1.** The extra arithmetic is that comparison. Year 7 uses the power $6$, already in the overview. This letter only tests $\\$2.9$ million against $\\$3.40$ million.

**2.** The figure $\\$2,900,000$ is what you get from $2{,}400{,}000 \\times 1.06 \\times 1.14$, or from $2{,}400{,}000 + 7 \\times 70{,}000$. Simple add-ons miss compounding. The recovered year-7 flow is about $\\$3,404,446$.

**3.** A rushed solver who used $(1.06)^{7}$ on the opening cash flow would report about $\\$3,609,000$, the year-8 term. Year 7 carries six growth steps, not seven.

In the story, the last year before exit is the opening $\\$2.4$ million grown for six years at 6%. The recovered object is $a_7$. The claim's extra move is a nearby $\\$2.9$ million.

The recovered year-7 recovery cash flow is about \\$3,404,446, not \\$2,900,000, so the statement is False.`,
  ],

  "math-11-80": [
    `Tranche 1 pays a flat \\$25,000 a year for 9 years. That is the $k = 1$ case, so the total is $25{,}000 \\times 9$.

The overview recovered $s_1 = 225{,}000$. This letter is reading that equal-coupon total.

**1.** The trap is $25{,}000 \\times 10 = 250{,}000$, counting a year 0, or plugging $k = 1$ into the general formula and dividing by zero.

**2.** Letter B will name Tranche 2's growing total. This letter is the flat $\\$225,000$ only.

The recovered Tranche 1 total is \\$225,000.00, so the statement is True.`,

    `Tranche 2 starts at \\$18,000 and grows 7% a year for 9 years. The statement names that total as about \\$215,603.80.

The overview recovered $s_2 = 215{,}603.80$. This letter is reading that growing-coupon total.

**1.** The trap is $18{,}000 \\times 9 = 162{,}000$, nine flat copies, or swapping Tranche 1's $\\$225,000$ onto Tranche 2.

**2.** Letter C will name Tranche 3's perpetuity. This letter is Tranche 2 only.

The recovered Tranche 2 total is about \\$215,603.80, so the statement is True.`,

    `Tranche 3 is a perpetual royalty starting at \\$30,000 and declining 8% a year. The statement names that infinite total as \\$375,000.

The overview recovered $30{,}000 / 0.08 = 375{,}000$. This letter is reading that declining perpetuity.

**1.** The trap is $30{,}000 / 0.92 \\approx 32{,}609$, dividing by $k$ instead of by $1-k$. The leftover fraction is $8\\%$, not $92\\%$.

**2.** Letter D will ask whether this $\\$375,000$ can be added to the two finite tranches. This letter only names Tranche 3.

The recovered Tranche 3 total is \\$375,000.00, so the statement is True.`,

    `The statement claims Tranche 3 must be excluded, so the portfolio totals only the two finite tranches, \\$440,603.80.

The overview recovered $225{,}000 + 215{,}603.80 = 440{,}603.80$ for Tranches 1 and 2, then added Tranche 3's $375{,}000$ to reach $815{,}603.80$. Tranche 3 converges, so it is a finite dollar amount and may be added. Excluding it understates the portfolio by $\\$375,000$.

**1.** Why this is extra reasoning: the three recovered totals are already in the overview. This letter only asks whether a convergent infinite sum is allowed in the combined total. It is.

**2.** The trap is mixing Tranche 3 with letter E's harmonic fee stream. Tranche 3 has $|k| = 0.92 < 1$, so it converges. The fee stream $1{,}000/n$ is $p = 1$ and diverges. Convergence is the gate for inclusion, and Tranche 3 passes.

**3.** A rushed solver who saw "forever" and excluded every infinite stream would drop a perfectly finite $\\$375,000$. Forever with decay at 8% a year still sums.

In the story, the lender is adding three nominal piles. The recovered combined total is $\\$815,603.80$. The claimed $\\$440,603.80$ is only Tranches 1 and 2.

What would have to change for the opposite verdict is a Tranche 3 with $|k| \\ge 1$. The stem's $k = 0.92$ converges.

The recovered combined total includes Tranche 3 and is about \\$815,604, not \\$440,604, so the statement is False.`,

    `The statement notes that $f_{100} = \\$10$ and claims that this alone guarantees the fee stream $\\sum 1{,}000/n$ converges.

The overview recovered $f_{100} = 1{,}000 / 100 = 10$, so the dollar figure is right. The stream is a constant multiple of the harmonic series. Terms going to zero is necessary and not sufficient, so $f_{100} = 10$ does not guarantee a finite total.

**1.** Why this is extra reasoning: $f_{100} = 10$ is already in the overview. This letter only asks whether that one term is enough. It is not. The $p$-series rule requires $p > 1$, and here $p = 1$.

**2.** The trap is the same slogan as in letter 77 D: a small hundredth term means the series settles. The harmonic series is the counterexample. Letter 77 E made the same point at $p = 0.5$.

**3.** Tranche 3 was allowed into the portfolio because $|k|<1$. This fee stream has no such $k$. It is $1/n$, and it diverges.

In the story, a $\\$10$ fee in period 100 sounds harmless, and harmless is not a finite infinite-total. The recovered objects are $f_{100} = 10$ and the harmonic divergence. The claim's extra move is "this alone is sufficient."

The recovered $f_{100}$ is \\$10, but that does not guarantee convergence, so the statement is False.`,
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
  console.log("wrote 71_80", arr.length);
}
