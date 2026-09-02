import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-114": [
    `A one-year project is the payoff over the outlay: $9{,}600/8{,}000 - 1 = 0.20 = 20\\%$. The overview recovered that IRR. No quadratic is hiding in the background.

**1.** The trap is $(9{,}600-8{,}000)/9{,}600$, which would report 16.7% of the payoff rather than of the outlay, or quoting a 20% profit as if it needed a two-year model.

The recovered IRR is exactly 20%, so the statement is True.`,

    `NPV at 15% is $-8{,}000 + 9{,}600/1.15 \\approx 347.83$, which is positive. A rate below the 20% IRR has to leave a surplus.

**1.** The trap is thinking any rate below 20% could still produce a negative NPV if the dollars were small. For a conventional one-year project, NPV and IRR agree: test rates below IRR give positive NPV.

The recovered 15% NPV is about \\$347.83, positive, so the statement is True.`,

    `NPV at 25% is $-8{,}000 + 9{,}600/1.25 = -320$, which is negative. A rate above the 20% IRR has to leave a shortfall.

**1.** The trap is mixing this letter with letter B and reporting a surplus at every test rate, or using $9{,}600/1.20$ which would be the IRR zero. Twenty-five percent sits above 20%, so NPV is negative.

The recovered 25% NPV is $-\\$320$, so the statement is False.`,

    `The new one-year rate is $10{,}000/8{,}000 - 1 = 25\\%$, which exceeds 24%. Raising the payoff by \\$400 lifts IRR by five points.

**1.** Linearity of a one-year IRR in the payoff is the extra arithmetic: each extra dollar of year-1 cash is an extra $1/8{,}000$ of rate. Four hundred dollars is five percentage points. The cutoff was 24%, and 25% clears it.

**2.** The trap is adding 20% + 4% as if the extra \\$400 were 4% of the payoff, or computing $(10{,}000-8{,}000)/10{,}000 = 20\\%$ and saying the IRR did not move. The recovered new IRR is 25%.

**3.** The opposite verdict would need a cutoff above 25%, or a smaller payoff increase. With \\$10,000 back on an \\$8,000 outlay, the recovered IRR is 25%, which exceeds 24%.

The recovered new IRR is 25%, so the statement is True.`,

    `One negative outlay followed by one positive return is the uniqueness case: exactly one $r^{*} > -1$. The recovered 20% is that unique rate. A sign-changing second return would be the multiple-root story, and this oven project does not have one.

**1.** Descartes' rule of signs, on the cash-flow polynomial $-8{,}000 + 9{,}600 s$, gives one sign change and therefore one positive $s$, hence one $r > -1$. That is the theorem behind the claim, not a second numerical solve.

**2.** The trap is thinking uniqueness requires NPV to be tested at several rates, as in the three-year mixed-sign project later in the chapter. One year, one inflow, one outflow: one IRR.

The recovered 20% is the unique admissible IRR, so the statement is True.`,
  ],

  "math-11-115": [
    `The two-year IRR equation is the quadratic $7s^2 + 7s - 12 = 0$. The overview recovered $s \\approx 0.90153$ and $r \\approx 10.92\\%$. This letter is reading that rate.

**1.** The trap is $(7{,}000+7{,}000)/12{,}000 - 1 = 16.7\\%$, which ignores timing, or treating the project as one year of \\$7,000.

The recovered IRR is about 10.92%, so the statement is True.`,

    `NPV at 8% is about \\$482.85, positive. Eight percent sits below the 10.92% IRR, so a conventional project has to show a surplus.

**1.** The recovered pieces are $7{,}000/1.08 \\approx 6{,}481$ and $7{,}000/1.1664 \\approx 6{,}001$, totalling about \\$12,483 against the \\$12,000 outlay.

The recovered 8% NPV is about \\$482.85, positive, so the statement is True.`,

    `NPV at 12% is about $-\\$169.64$, negative. Twelve percent sits above the IRR.

**1.** The recovered pieces are $7{,}000/1.12 = 6{,}250$ and $7{,}000/1.2544 \\approx 5{,}580$, totalling about \\$11,830 against the \\$12,000 outlay. The shortfall is the claimed sign.

The recovered 12% NPV is about $-\\$169.64$, so the statement is False.`,

    `A larger second return is a new quadratic $8s^2 + 7s - 12 = 0$. The overview recovered $r \\approx 15.87\\%$, which exceeds 13%. Pulling an extra \\$1,000 into year 2 lifts IRR by about five points.

**1.** This extra arithmetic is the letter's own work: a new discriminant $49 + 384 = 433$, a new $s \\approx 0.863$, a new rate near 15.87%. Reusing 10.92% and adding a guess would not clear a 13% cutoff on purpose.

**2.** The trap is thinking a \\$1,000 raise in year 2 is the same as a \\$1,000 raise in year 1. Front-loading would lift IRR more. Even the later extra is enough to clear 13%.

**3.** The opposite verdict would need a higher cutoff or a smaller extra return. With year 2 at \\$8,000, the recovered IRR is about 15.87%, above 13%.

The recovered new IRR is about 15.87%, so the statement is True.`,

    `IRR is not linear in the returns. Doubling both payoffs while holding the outlay fixed produces a new quadratic $7s^2 + 7s - 6 = 0$ and a rate near 81%, not $2 \\times 10.92\\% = 21.84\\%$. Twice the cash in does not mean twice the rate, because the \\$12,000 outlay was not doubled with them.

**1.** If the outlay had doubled as well, to \\$24,000 against two \\$14,000 returns, the quadratic would be the original one again and IRR would stay 10.92%. Scaling every cash flow, including $a_0$, leaves IRR unchanged. Scaling only the inflows is a different project, a much better one, and its IRR jumps to about 81%.

**2.** The trap figure is 21.84%, twice the original rate. Another wrong figure is 21.84% as if $s$ halved when the inflows doubled. The new admissible $s$ is about 0.552, which is not half of 0.902.

**3.** A one-year analogy: doubling the \\$9,600 oven payoff in task 114 from \\$9,600 to \\$19,200 on the same \\$8,000 outlay would take IRR from 20% to 140%, not to 40%. Two-year projects do the same kind of nonlinear jump.

**4.** The opposite verdict would need the outlay to double with the returns. The stem holds the outlay at \\$12,000. The recovered doubled-inflow IRR is about 81%, not 21.84%.

The recovered doubled-return IRR is about 81%, not 21.84%, so the statement is False.`,
  ],

  "math-11-116": [
    `The two-year IRR equation becomes $15s^2 + 9s - 20 = 0$. The overview recovered $s \\approx 0.89304$ and $r \\approx 11.98\\%$. Treating the project as $(9{,}000+15{,}000)/20{,}000 - 1 = 20\\%$ would ignore timing.

**1.** The trap is that 20% undiscounted return, or averaging 9 and 15 against 20 as a one-year 20%. Two years of discounting pull the IRR down to about 11.98%.

The recovered IRR is about 11.98%, so the statement is True.`,

    `NPV at 10% is about \\$578.51, positive. Ten percent sits below the 11.98% IRR.

**1.** The recovered pieces are $9{,}000/1.10 \\approx 8{,}182$ and $15{,}000/1.21 \\approx 12{,}397$, totalling about \\$20,579 against the \\$20,000 outlay.

The recovered 10% NPV is about \\$578.51, positive, so the statement is True.`,

    `NPV at 14% is about $-\\$563.25$, negative. Fourteen percent sits above the IRR.

**1.** The recovered pieces are $9{,}000/1.14 \\approx 7{,}895$ and $15{,}000/1.2996 \\approx 11{,}542$, totalling about \\$19,437 against the \\$20,000 outlay.

The recovered 14% NPV is about $-\\$563.25$, so the statement is False.`,

    `Pulling \\$9,000 into year 1 is a new quadratic $15s^2 + 18s - 20 = 0$. The overview recovered $r \\approx 42.6\\%$, which exceeds 30%. Front-loading cash raises IRR much faster than adding the same dollars to year 2 would.

**1.** The extra arithmetic is this letter's own quadratic: discriminant $324 + 1{,}200 = 1{,}524$, $s \\approx 0.701$, rate about 42.6%. Letter 115 D added \\$1,000 in year 2 and gained about five points. Here an extra \\$9,000 in year 1 gains about 31 points. Timing of the extra cash is the whole difference.

**2.** The trap is adding 11.98% + 9/20 = 11.98% + 45% as a naive sum, or thinking a doubled year-1 return merely doubles the IRR. The recovered 42.6% is the inverted new quadratic.

**3.** The opposite verdict would need a 30% cutoff above 42.6%, which it is not. With year 1 at \\$18,000, the recovered IRR exceeds 30%.

The recovered new IRR is about 42.6%, so the statement is True.`,

    `Add the three cash flows at a zero rate: $-20{,}000 + 9{,}000 + 15{,}000 = 4{,}000$. A positive undiscounted total is why a positive IRR exists at all. It is not a present value.

**1.** The trap is discounting the inflows before adding, which would report the NPV at 0% wait, NPV at 0% is this same \\$4,000. The claim is the undiscounted sum, and that sum is \\$4,000.

The recovered cash-flow sum is \\$4,000, so the statement is True.`,
  ],

  "math-11-117": [
    `Project X is a one-year project: $17{,}250/15{,}000 - 1 = 15\\%$. The overview recovered that IRR. No timing puzzle is hiding in a second year.

**1.** The trap is $(17{,}250-15{,}000)/17{,}250 \\approx 13\\%$, profit over payoff rather than over outlay.

The recovered IRR of Project X is exactly 15%, so the statement is True.`,

    `Project Y is also one year: $24{,}750/22{,}000 - 1 = 12.5\\%$. A bigger dollar profit does not mean a bigger rate, because Y invests more.

**1.** Y's profit is \\$2,750 on \\$22,000. X's profit is \\$2,250 on \\$15,000. Y makes more dollars and a worse rate. That is letter C's ranking.

The recovered IRR of Project Y is exactly 12.5%, so the statement is True.`,

    `Compare the two recovered rates: $15\\% > 12.5\\%$. IRR prefers X. Y's larger payoff is attractive in dollars and still loses on rate.

The IRR criterion ranks by rate, not by the dollar profit or by the scale of the outlay. X turns each invested dollar into 1.15 dollars in a year. Y turns each invested dollar into 1.125 dollars. On that criterion X wins.

**1.** NPV at a common rate can rank them differently once scale enters. At 11%, letter D will show both NPVs positive, with X's NPV larger in dollars as well, but that is a different criterion. This letter is IRR only.

**2.** The trap is preferring Y because \\$24,750 > \\$17,250, or because Y's profit of \\$2,750 exceeds X's \\$2,250. Those are cash totals, not rates. The recovered rates are 15% and 12.5%.

**3.** The opposite verdict would need Y's payoff high enough that $24{,}750/22{,}000 - 1$ exceeded 15%, which would take a payoff above \\$25,300. The stem's \\$24,750 is not that high. Letter E tests \\$25,000 and still loses.

The recovered IRR ranking prefers X, not Y, so the statement is False.`,

    `Eleven percent sits below both IRRs, so both NPVs are positive. The overview recovered $NPV_X \\approx 540.54$ and $NPV_Y \\approx 297.30$. A split sign would require a test rate between 12.5% and 15%, and 11% is not in that gap.

**1.** For a conventional one-year project, NPV is positive below IRR and negative above it. Testing at 11% is below 12.5% and below 15%, so both signs are positive. The claim wants X positive and Y negative, which is the picture at, say, 13.5%.

**2.** The trap is seeing Y's lower IRR and assuming Y is already negative at any test rate below 15%, or mixing IRR with NPV so that "Y loses on IRR" is rewritten as "Y has negative NPV." Y loses on IRR and still has a positive NPV at 11%.

**3.** The recovered dollars also kill a "Y is negative" reading: \\$297 is not a rounding of zero and is not a shortfall.

**4.** The opposite verdict would need a test rate in $(12.5\\%, 15\\%)$. Eleven percent is not in that interval.

The recovered 11% NPVs are both positive, so the statement is False.`,

    `The new one-year rate is $25{,}000/22{,}000 - 1 \\approx 13.64\\%$. Then $13.64\\% < 15\\%$. An extra \\$250 of payoff helps Y, but not enough to overtake X.

**1.** Letter C already noted that Y would need a payoff above \\$25,300 to beat X's 15%. \\$25,000 is still \\$300 short of that bar. The recovered 13.64% sits between the original 12.5% and X's 15%.

**2.** The trap is thinking any raise of Y's payoff that "looks close" to a round \\$25,000 must overtake X, or computing $(25{,}000-22{,}000)/22{,}000$ as 14% and rounding up through 15%. The recovered 13.64% does not exceed 15%.

**3.** The opposite verdict would need a payoff of at least $1.15 \\times 22{,}000 = 25{,}300$. The stem's hypothetical is \\$25,000, which is not enough.

The recovered new IRR for Y is about 13.64%, still below X's 15%, so the statement is False.`,
  ],

  "math-11-118": [
    `Discount the mixed cash flows at 8%. The overview recovered NPV about \\$4,012. Year 1 is an outflow, so it enters with a minus sign.

**1.** The recovered pieces are about $-2{,}778$, $+24{,}005$, and $+27{,}784$ around the $-45{,}000$ outlay. Net is about \\$4,012. A solver who treated year 1 as an inflow would overstate NPV by about \\$5,556.

The recovered 8% NPV is about \\$4,012, so the statement is True.`,

    `NPV at 12% is about $-\\$445$, negative. Twelve percent sits above this project's IRR.

**1.** The recovered pieces are about $-2{,}679$, $+22{,}321$, and $+24{,}912$ around $-45{,}000$. Net is about $-\\$445$. The claim wants a surplus. The recovered sign is a shortfall.

The recovered 12% NPV is negative, so the statement is False.`,

    `NPV is already negative at 12% and more negative at 15%, so the IRR sits below 12%, between the positive 8% value and the negative 12% value. Placing it above 12% ignores the sign change that has already happened.

For a conventional project, IRR is the unique root where NPV crosses zero. Here the crossing is between 8% (NPV about \\$4,012) and 12% (NPV about $-\\$445$), so IRR is a little under 12%, not between 12% and 15%.

**1.** Letter D's 15% NPV of about $-\\$3,424$ is a deeper shortfall, which is consistent with 15% sitting further above IRR. It is not evidence that IRR lives in (12%, 15%). Once NPV is already negative at 12%, the root cannot be above 12%.

**2.** The trap is seeing two negative NPVs at 12% and 15% and splitting the difference, as if IRR were the midpoint of the test rates rather than the zero of the NPV schedule. The zero is to the left of 12%.

**3.** The mixed sign in year 1 ($a_1 = -3{,}000$) is why a quadratic shortcut is messy, which is why the task tests NPV at several rates instead. Multiple rates do not mean multiple IRRs in (12%, 15%). Descartes' rule still allows a unique positive root here, and the NPV table locates it below 12%.

**4.** The opposite verdict would need NPV to be positive at 12% and negative at 15%. The recovered 12% NPV is already negative.

The recovered IRR lies below 12%, not between 12% and 15%, so the statement is False.`,

    `NPV at 15% is about $-\\$3,424$. That is a deeper shortfall than at 12%. The overview recovered that figure.

**1.** The trap is reporting the 12% shortfall of about \\$445 as if it were already the 15% figure, or dropping the minus sign. The recovered 15% NPV is about $-\\$3,424$.

The recovered 15% NPV is about $-\\$3,424$, so the statement is True.`,

    `Year 1 is a \\$3,000 installation outflow, so $a_1 = -3{,}000$. The uniqueness shortcut that needs every later cash flow positive does not apply here.

**1.** The trap is reading "net returns of \\$28,000 and \\$35,000" back onto year 1, or treating a disruption cost as if it were already netted into the outlay. The stem lists $a_1$ as a cash outflow.

The recovered $a_1$ is negative, so the statement is False.`,
  ],

  "math-11-119": [
    `The two-year IRR equation becomes $12s^2 + 8s - 17 = 0$. The overview recovered $r \\approx 10.78\\%$, not the claimed 14.5%. The extra four points in the claim would need a smaller outlay or larger returns.

**1.** The trap is averaging 16 and 24 against 34 as $(16+24)/34 - 1 \\approx 17.6\\%$, or splitting the difference between 9% and 13% test rates. The recovered quadratic root is about 10.78%.

The recovered IRR is about 10.78%, not 14.5%, so the statement is False.`,

    `NPV at 9% is about \\$879, positive. Nine percent sits below the 10.78% IRR, so the claim's negative sign is backwards.

**1.** The recovered pieces are $16{,}000/1.09 \\approx 14{,}679$ and $24{,}000/1.1881 \\approx 20{,}200$, totalling about \\$34,879 against the \\$34,000 outlay.

The recovered 9% NPV is about \\$879, positive, so the statement is False.`,

    `NPV at 13% is about $-\\$1,045$, negative. Thirteen percent sits above the IRR.

**1.** The recovered pieces are $16{,}000/1.13 \\approx 14{,}159$ and $24{,}000/1.2769 \\approx 18{,}796$, totalling about \\$32,955 against the \\$34,000 outlay.

The recovered 13% NPV is about $-\\$1,045$, so the statement is True.`,

    `Cutting year 2 from \\$24,000 to \\$20,000 is a weaker project. The new quadratic $10s^2 + 8s - 17 = 0$ has admissible root $s \\approx 0.964$ and $r \\approx 3.75\\%$. Then $3.75\\% < 10.78\\%$. A smaller later return lowers IRR, it does not raise it.

**1.** The claim has the comparison backwards. Less cash in year 2 cannot produce a higher internal rate on the same \\$34,000 outlay. The extra arithmetic is the new quadratic, already in the overview as a comparison, and the recovered 3.75% is well below 10.78%.

**2.** The trap is thinking a rounder \\$20,000 "looks cleaner" and must be a better-behaved project, or mixing this letter with letter E's smaller outlay, which does raise IRR. Here the outlay is unchanged and the inflow falls.

**3.** The opposite verdict would need a larger year-2 return, as in task 115 D. Cutting the return is the wrong direction.

The recovered cut-return IRR is about 3.75%, lower than 10.78%, so the statement is False.`,

    `Paying less for the same returns raises IRR. The new quadratic $12s^2 + 8s - 15 = 0$ has exact root $s = 5/6$, so $r = 20\\%$. Then $20\\% > 10.78\\%$. The ranking in the claim is backwards.

**1.** A smaller $|a_0|$ on unchanged inflows is a better project. The recovered 20% is almost double the original 10.78%. That jump is not a transcription slip. It is what a \\$4,000 cheaper machine does when the espresso line still returns \\$16,000 and \\$24,000.

**2.** The trap is thinking a smaller outlay "scales everything down," including IRR. IRR is a rate, not a dollar pile. Cutting the denominator of the implied return raises the rate.

**3.** The opposite verdict would need a larger outlay. Reducing the outlay to \\$30,000 raises IRR to 20%, it does not lower it.

The recovered reduced-outlay IRR is 20%, higher than 10.78%, so the statement is False.`,
  ],

  "math-11-120": [
    `Discount both returns at 15%: $22{,}000/1.15 + 27{,}600/1.3225 = 19{,}130.43 + 20{,}869.57 = 40{,}000$. NPV is \\$0 to the nearest dollar. Fifteen percent zeroes the project, which is the definition of IRR.

**1.** The trap is testing 10% or 20% and reporting those NPVs as if they were already zero. Letters B and C are the off-IRR tests. This letter is the zero itself.

The recovered 15% NPV is \\$0, so the statement is True.`,

    `NPV at 10% is about \\$2,810, positive. A test rate below the 15% IRR has to leave a surplus.

**1.** The recovered pieces are $22{,}000/1.10 = 20{,}000$ and $27{,}600/1.21 \\approx 22{,}810$, totalling about \\$42,810 against the \\$40,000 outlay.

The recovered 10% NPV is about \\$2,810, positive, so the statement is True.`,

    `NPV at 20% is $-\\$2,500$, negative. Twenty percent sits above IRR.

**1.** The recovered pieces are $22{,}000/1.20 \\approx 18{,}333$ and $27{,}600/1.44 \\approx 19{,}167$, totalling \\$37,500 against the \\$40,000 outlay. The shortfall is exactly \\$2,500.

The recovered 20% NPV is $-\\$2,500$, so the statement is True.`,

    `Add the three cash flows at a zero rate: $-40{,}000 + 22{,}000 + 27{,}600 = 9{,}600$. A positive undiscounted total is why the unique IRR is positive. It is not a present value.

**1.** The trap is reporting NPV at 10% as if it were the undiscounted sum, or using $22{,}000 + 27{,}600$ without the outlay. The recovered sum is \\$9,600.

The recovered cash-flow sum is \\$9,600, so the statement is True.`,

    `One negative outlay followed by two positive returns is the uniqueness case. The recovered 15% is that unique admissible root. The other quadratic root sits below $-1$ and is discarded. The sign pattern, not a second NPV table, is what guarantees uniqueness.

**1.** Two sign changes would be the Descartes warning for possibly two positive roots. Here the signs are $-, +, +$, one change, one positive $s$, one $r > -1$. Letter 118's mixed year-1 outflow is the contrast, and even that project still had a single crossing in the NPV table.

**2.** The trap is thinking a two-year project always has two IRRs, or that NPV of zero at 15% might be one of several zeros. The recovered NPV schedule is positive at 10%, zero at 15%, and negative at 20%, a single crossing.

The recovered 15% is the unique admissible IRR, so the statement is True.`,
  ],
};

const { n, counts } = applyLetters("111_120.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
