import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-121": [
    `The two-year IRR equation becomes $42s^2 + 34s - 65 = 0$. The overview recovered $s \\approx 0.90346$ and $r \\approx 10.69\\%$. Averaging the two rents against \\$65,000 as a one-year rate would overstate the return.

**1.** The trap is $(34{,}000+42{,}000)/65{,}000 - 1 \\approx 16.9\\%$, which ignores that half the cash arrives a year later. Two years of discounting pull the IRR down to about 10.69%.

The recovered IRR is about 10.69%, so the statement is True.`,

    `NPV at 9% is about \\$1,543, positive. Nine percent sits below the 10.69% IRR.

**1.** The recovered pieces are $34{,}000/1.09 \\approx 31{,}193$ and $42{,}000/1.1881 \\approx 35{,}351$, totalling about \\$66,543 against the \\$65,000 outlay.

The recovered 9% NPV is about \\$1,543, positive, so the statement is True.`,

    `NPV at 12% is about $-\\$1,161$, negative. Twelve percent sits above the IRR.

**1.** The recovered pieces are $34{,}000/1.12 \\approx 30{,}357$ and $42{,}000/1.2544 \\approx 33{,}482$, totalling about \\$63,839 against the \\$65,000 outlay.

The recovered 12% NPV is about $-\\$1,161$, so the statement is False.`,

    `Doubling the inflows while holding the outlay fixed is a new quadratic, not $2 \\times 10.69\\%$. The overview recovered $s \\approx 0.564$ and $r \\approx 77\\%$. Twice the original rate would be only 21.4%. The same \\$65,000 now buys twice the rental stream, so IRR more than doubles.

**1.** This is the same nonlinearity as task 115 E, except here the claim is true: the jump from 10.69% to about 77% is far more than a double. Task 115 E claimed the doubled-inflow IRR would equal twice the original rate, which failed. This letter claims it would more than double, which holds.

**2.** If the outlay had doubled with the rents, IRR would have stayed 10.69%. Scaling every cash flow leaves the rate unchanged. Scaling only the inflows is a much better project. The recovered 77% is that better project.

**3.** The trap figure is 21.4%, twice 10.69%, treated as a ceiling. Another wrong figure is 21.4% as a floor that 77% "just" clears. Seventy-seven percent is not a near miss. It is a different project.

**4.** A one-year analogy: doubling both rents as if they were a single payoff of \\$152,000 on a \\$65,000 outlay would be a 134% one-year rate. Two-year discounting pulls that down to about 77%, which is still more than double 10.69%.

**5.** The opposite verdict would need the outlay to rise with the rents, or a claim that IRR would exactly double. More than double is the recovered comparison.

The recovered doubled-inflow IRR is about 77%, more than double 10.69%, so the statement is True.`,

    `Paying \\$5,000 less for the same rents raises IRR. The new quadratic $42s^2 + 34s - 60 = 0$ has admissible root $s \\approx 0.857$ and $r \\approx 16.7\\%$. Then $16.7\\% > 10.69\\%$. The ranking in the claim is backwards.

**1.** A smaller $|a_0|$ on unchanged inflows is a better project. The recovered 16.7% is about six points above the original 10.69%. Letter 119 E was the same direction on the espresso line: cutting the outlay to \\$30,000 lifted IRR to 20%.

**2.** The trap is thinking a smaller renovation "scales the deal down" and must lower every output, including the rate. IRR is a rate. Cutting the outlay raises it.

**3.** The opposite verdict would need a larger outlay. Reducing the outlay to \\$60,000 raises IRR to about 16.7%, it does not lower it.

The recovered reduced-outlay IRR is about 16.7%, higher than 10.69%, so the statement is False.`,
  ],

  "math-11-122": [
    `A level \\$6,000 perpetuity on a \\$50,000 outlay is $6{,}000/50{,}000 = 12\\%$. That is the infinite-horizon IRR, not a two-year stub.

**1.** The trap is treating Option 1 as if it were Option 2's two-year stub, which has a large negative IRR. Forever of \\$6,000 on \\$50,000 is 12%.

The recovered limiting IRR of Option 1 is 12%, so the statement is True.`,

    `Option 2 is the two-year stub $3s^2 + 3s - 25 = 0$. The overview recovered $s \\approx 2.430$ and $r \\approx -58.84\\%$. A negative IRR is what you get when two \\$6,000 returns cannot cover a \\$50,000 outlay.

**1.** The trap is quoting the 12% perpetuity rate as if two years were already forever, or reporting $-12\\%$ as a simple haircut. The recovered quadratic root is about $-58.84\\%$.

The recovered IRR of Option 2 is about $-58.84\\%$, so the statement is True.`,

    `The quadratic has one admissible root $r \\approx -58.84\\% > -1$ and one root below $-1$ that is discarded. Uniqueness here is the quadratic's one valid discount factor, not a claim that the rate is positive.

**1.** $r > -1$ is the domain of a discount factor $s = 1/(1+r) > 0$. A root $r < -1$ would make $s$ negative and would not be an internal rate of return in the ordinary sense. The recovered $s \\approx 2.430$ is positive, so $r \\approx -58.84\\%$ is admissible and unique as an $r > -1$.

**2.** The trap is reading "unique IRR greater than $-1$" as "unique positive IRR." Option 2's IRR is unique and greater than $-1$ and still negative. The undiscounted cash-flow sum of $-\\$38,000$ is why it is negative. Uniqueness is a separate claim.

**3.** Descartes' rule on $-50{,}000 + 6{,}000 s + 6{,}000 s^2$ gives one sign change, hence one positive $s$, hence one $r > -1$. That is the same uniqueness theorem as the oven project, applied to a project that loses money.

The recovered $-58.84\\%$ is the unique admissible IRR, so the statement is True.`,

    `Add the three cash flows at a zero rate: $-50{,}000 + 6{,}000 + 6{,}000 = -38{,}000$. The extra \\$2,000 in the claim would require dropping \\$1,000 from each return. A negative undiscounted total is why IRR is negative, but the exact total is $-\\$38,000$.

**1.** The trap is $-50{,}000 + 10{,}000 = -40{,}000$, as if the two returns were \\$5,000 each, or dropping year 2 and writing $-50{,}000 + 6{,}000 = -44{,}000$. The recovered sum is $-\\$38,000$.

The recovered cash-flow sum is $-\\$38,000$, not $-\\$40,000$, so the statement is False.`,

    `A one-year stub is $6{,}000/50{,}000 - 1 = -88\\%$. Then $-88\\% < -58.84\\%$. Losing year 2 makes a bad project worse.

**1.** Option 2's second \\$6,000 is the only reason IRR is $-58.84\\%$ rather than $-88\\%$. Removing it cannot raise the rate. The recovered one-year IRR of $-88\\%$ sits 29 points below Option 2.

**2.** The trap is thinking that a simpler one-year project must have a "cleaner" and therefore higher rate, or mixing this letter with Option 1's 12% perpetuity. Truncating a negative-NPV stub makes it more negative.

**3.** The opposite verdict would need year 2 to have been an outflow. Year 2 is a \\$6,000 inflow. Removing an inflow lowers IRR.

The recovered one-year stub IRR is $-88\\%$, lower than $-58.84\\%$, so the statement is True.`,
  ],

  "math-11-123": [
    `Design A's two-year equation becomes $44s^2 + 27s - 60 = 0$. The overview recovered $s \\approx 0.90057$ and $r_A \\approx 11.04\\%$. Treating $\\$54{,}000+\\$88{,}000$ against $\\$120{,}000$ as a one-year 18% return would ignore timing.

**1.** The trap is that 18% undiscounted return, or averaging 54 and 88 against 120. Two years of discounting pull A's IRR down to about 11.04%.

The recovered IRR of Design A is about 11.04%, so the statement is True.`,

    `Design B is a one-year project: $81{,}200/70{,}000 - 1 = 16\\%$. No quadratic is required. B's shorter clock is why a smaller dollar payoff can still post a higher rate than A.

**1.** The trap is $(81{,}200-70{,}000)/81{,}200 \\approx 13.8\\%$, profit over payoff, or thinking B must have a lower rate because it invests less. The recovered IRR is exactly 16%.

The recovered IRR of Design B is exactly 16%, so the statement is True.`,

    `Compare the two recovered rates: $16\\% > 11.04\\%$. IRR prefers B. A's larger total cash in is spread over two years. B's single-year 16% wins the rate comparison.

**1.** This is the same criterion as task 117 C, where X's 15% beat Y's 12.5% despite Y's larger dollars. Scale does not enter IRR. Rate does. B turns each invested dollar into 1.16 dollars in one year. A turns each invested dollar into a two-year stream whose internal rate is about 11%.

**2.** The trap is preferring A because $\\$54{,}000+\\$88{,}000 = 142{,}000$ exceeds B's \\$81,200, or because A invests more and "must be the real project." IRR does not rank by scale. The recovered rates are 16% and 11.04%.

**3.** NPV at a common rate can disagree once scale and timing both enter. Letter D tests 13%, which sits between the two IRRs, and there B still wins on NPV as well. This letter is IRR only.

**4.** The opposite verdict would need A's two-year IRR above 16%, which would take larger returns or a smaller outlay. With the stem's \\$54,000 and \\$88,000 on \\$120,000, the recovered $r_A$ is about 11.04%, below B.

The recovered IRR ranking prefers B, so the statement is True.`,

    `Thirteen percent sits between the two IRRs, so the signs split. The overview recovered $NPV_A \\approx -3{,}295$ and $NPV_B \\approx 1{,}858$. That split is exactly what a test rate between 11% and 16% has to produce.

**1.** For conventional projects, NPV is positive below IRR and negative above it. Thirteen percent is above A's 11.04% and below B's 16%, so A is a shortfall and B is a surplus. Letter 117 D tested a rate below both IRRs and got two surpluses. This letter tests the gap between the IRRs and gets a split.

**2.** The recovered dollars: A's pieces are $54{,}000/1.13 \\approx 47{,}788$ and $88{,}000/1.2769 \\approx 68{,}917$, totalling about \\$116,705 against \\$120,000. B's piece is $81{,}200/1.13 \\approx 71{,}858$ against \\$70,000. Neither sign is a rounding of zero.

**3.** The trap is thinking a higher IRR automatically means a higher NPV at every test rate, which is true here at 13% but is not the reason. The reason is the location of 13% relative to the two recovered IRRs. At a test rate of 8%, both NPVs would be positive. At 18%, both would be negative.

**4.** The opposite verdict would need a test rate below 11.04% (both positive) or above 16% (both negative), or swapped IRRs. Thirteen percent is in the split window.

The recovered 13% NPVs are negative for A and positive for B, so the statement is True.`,

    `Cutting A's year-1 return to \\$44,000 makes a weaker two-year project. The new quadratic $22s^2 + 11s - 30 = 0$ has admissible root $s \\approx 0.944$ and $r \\approx 5.9\\%$. Then $5.9\\% < 16\\%$. A smaller early payoff cannot overtake a one-year 16% design.

**1.** The original $r_A \\approx 11.04\\%$ already sat below B's 16%. Cutting year 1 by \\$10,000 pushes A further down, to about 5.9%, not up through 16%. The extra arithmetic is the new quadratic, and the recovered 5.9% is not close to 16%.

**2.** The trap is thinking that year 2's unchanged \\$88,000 is "most of the money" so a \\$10,000 year-1 cut cannot matter much. Early cash matters more for IRR. Losing \\$10,000 in year 1 costs about 5.1 points of IRR here.

**3.** Front-loading would be the opposite experiment, as in task 116 D, where adding \\$9,000 to year 1 lifted IRR through 30%. This letter removes early cash. The rate falls.

**4.** The opposite verdict would need a year-1 cut that somehow still left $r_A > 16\\%$, which would require the original $r_A$ to have been well above 16% already. It was 11.04%.

The recovered cut-return IRR for A is about 5.9%, below B's 16%, so the statement is False.`,
  ],
};

const { n, counts } = applyLetters("121_123.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
