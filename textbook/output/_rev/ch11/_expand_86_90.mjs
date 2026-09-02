import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-86": [
    `The nonprofit needs \\$5,000 at the end of each year for 20 years at 6%. The overview recovered that ordinary-annuity present value as about \\$57,349.67. This letter is reading that twenty-year scholarship fund, not rebuilding the annuity factor.

**1.** The trap is $5{,}000 / 0.06 = 83{,}333.33$, the perpetual fund. Twenty years is finite. This letter asks for the 20-year annuity only.

The recovered twenty-year fund is about \\$57,349.67, so the statement is True.`,

    `A level perpetuity of \\$5,000 at 6% is $5{,}000/0.06 = 83{,}333.33$. The overview recovered the 20-year annuity as about \\$57,349.67, so the gap is

$$83{,}333.33-57{,}349.67=25{,}983.66$$

That gap is the present value of scholarships from year 21 onward.

**1.** The trap is subtracting in the wrong order, or quoting the perpetuity alone as if it were already the gap. The claim names both the perpetuity and the gap, and both match the recovered pair.

The recovered perpetuity is about \\$83,333.33 and exceeds the 20-year fund by about \\$25,983.66, so the statement is True.`,

    `The claim says the 20-year annuity is about 72.82% of the perpetuity. The share is the recovered 20-year fund over the recovered perpetuity:

$$\\frac{57{,}349.67}{83{,}333.33} \\approx 0.6882 = 68.82\\%$$

Twenty years at 6% capture a little more than two thirds of the perpetual fund, not 72.82%.

**1.** The extra four points in the claim look like a slip from $1-(1.06)^{-20}$ misread, or from using 20/27.5 as a linear share of some invented horizon. The annuity factor is $1-(1.06)^{-20} \\approx 0.6882$, which already is the share of the perpetuity.

**2.** The trap is treating 20 years as 72.82% of a 27.5-year invented life, or swapping 68.82 with 72.82 by a four-point transcription error.

The recovered share is about 68.82%, not 72.82%, so the statement is False.`,

    `The claim says that extending the scholarships to 40 years would push the present value above 95% of the perpetuity. Forty years raise the share, but not that far.

The overview recovered $P_{40} \\approx 75{,}231.50$ against the perpetuity of \\$83,333.33, so the share is about 90.28%. That sits short of 95%.

**1.** The remaining 9.72% is the present value of scholarships from year 41 onward. Those far-off payments are still worth something at 6%, about \\$8,102 today. Clearing 95% would require that tail to be smaller than 5% of \\$83,333, which is about \\$4,167. The actual tail is about twice that.

**2.** The trap figure is 95% of \\$83,333.33, about \\$79,167. The recovered 40-year fund of about \\$75,232 sits about \\$3,935 short of that 95% line. Another wrong figure is 100%, as if 40 years were already forever.

**3.** How many years would it take to clear 95%? The share is $1-(1.06)^{-n}$. Setting that above 0.95 means $(1.06)^{-n} < 0.05$, so $n \\ln 1.06 > \\ln 20$, and $n$ is a bit over 51 years. Forty years is not long enough.

**4.** The opposite verdict would need a higher rate, which would discount the tail harder and lift the 40-year share, or a longer term. At 6% for 40 years the recovered share is about 90%, not more than 95%.

The recovered 40-year share is about 90.28%, short of 95%, so the statement is False.`,

    `As the number of scholarship payments grows, the ordinary-annuity present value climbs toward $a/r$. The overview recovered that ceiling as \\$83,333.33. Letting $n \\to \\infty$ makes $(1.06)^{-n}$ vanish, so $P_n \\to 5{,}000/0.06$. That is the definition of the perpetuity formula, not a second model.

**1.** The trap is thinking a perpetuity needs a different rate, or that the limit is zero because "infinite discounting." Each extra year adds a smaller present slice. The slices sum to $a/r$, they do not cancel.

The recovered perpetual fund is the limit \\$83,333.33, so the statement is True.`,
  ],

  "math-11-87": [
    `Nine end-of-year payments of \\$2,500 at 7% are an ordinary annuity. The overview recovered that present cost as about \\$16,288.18. This letter is reading Option 2's present value, not rebuilding the annuity factor.

**1.** The trap is $2{,}500 \\times 9 = 22{,}500$, the undiscounted instalments. Discounting is what cuts that pile to about \\$16,288.

The recovered present cost is about \\$16,288.18, so the statement is True.`,

    `Option 2 is cheaper than the \\$18,000 cash price, but the saving is not the claimed \\$1,811.82. The overview recovered $P_9 \\approx 16{,}288.18$, so

$$18{,}000-16{,}288.18=1{,}711.82$$

The extra hundred dollars is a slip on an otherwise correct ranking. Option 2 still wins. The printed saving is \\$100 too high.

**1.** The trap is pairing the correct \\$16,288.18 with \\$18,100, or subtracting from \\$18,000 as if the present value were \\$16,188.18. The ranking survives. The dollar gap does not.

The recovered saving is \\$1,711.82, not \\$1,811.82, so the statement is False.`,

    `The claim says that cutting the discount rate from 7% to 4% would lower Option 2's present value below \\$16,288.18 and make the cash option look even worse. A lower rate discounts the instalments less, so Option 2's present value rises, it does not fall.

The overview recovered the 7% present value as about \\$16,288.18. At 4% the same nine payments are worth about \\$18,588.31. Then $18{,}588.31 > 16{,}288.18$. At 4% the instalment plan is even dearer than the \\$18,000 cash price.

**1.** Present value of a payment stream moves opposite to the rate. The supplier still wants nine checks of \\$2,500. A smaller discount factor means those later checks are worth more today. A solver who thought "worse rate, smaller number" was thinking of a future-value problem, or of the interest the company could earn on cash it keeps. This letter asks for the present cost of Option 2, which goes up when the rate goes down.

**2.** The trap figure is something below \\$16,288, as if 4% had cheapened the instalments. Another wrong figure is \\$22,500, the undiscounted total, which is the 0% present value, not the 4% one. The recovered 4% value of about \\$18,588 sits between \\$16,288 and \\$22,500, as it must.

**3.** At 4% the ranking of the two options actually flips: Option 2's \\$18,588 exceeds cash of \\$18,000, so cash becomes the cheaper choice. The claim says the opposite, that Option 1 becomes even less attractive. That would be the 7% story, not the 4% story.

**4.** The opposite verdict would need a higher rate, not a lower one. Raising the rate from 7% would cut Option 2's present value and widen the saving against cash. Four percent is the wrong side of 7%.

The recovered 4% present value is about \\$18,588.31, higher than \\$16,288.18, so the statement is False.`,

    `The nominal Option 2 payments total $2{,}500 \\times 9 = 22{,}500$. Against the \\$18,000 lump sum the undiscounted spread is \\$4,500, not the claimed \\$4,600.

**1.** The extra hundred is a slip on the face-value comparison. A solver who used $2{,}500 \\times 10$, or who subtracted from \\$18,100, would manufacture \\$4,600.

**2.** This letter is not a present-value comparison. It is only the undiscounted spread, and that spread is \\$4,500.

The recovered nominal spread is \\$4,500, not \\$4,600, so the statement is False.`,

    `The claim grows Option 1's \\$18,000 forward for nine years at 7% and says the pile exceeds \\$34,000. The overview recovered that future value as about \\$33,092.26. That sits about \\$908 short of \\$34,000.

**1.** The trap is rounding $(1.07)^9$ up to 1.89 and writing $18{,}000 \\times 1.89 = 34{,}020$. The recovered factor is about $1.838$, which lands at about \\$33,092.

**2.** Another wrong figure is \\$18,000 + 9 \\times 0.07 \\times 18{,}000 = 29{,}340$ of simple interest, which undershoots in the other direction. The claim overshoots the compound result, it does not undershoot it.

**3.** The opposite verdict would need a higher rate or a longer wait. At 7% for nine years the recovered pile does not clear \\$34,000.

The recovered future value is about \\$33,092.26, short of \\$34,000, so the statement is False.`,
  ],

  "math-11-88": [
    `Strategy A plants \\$12,000 today at 6% for eight years. The overview recovered that lump-sum future value as \\$19,126.18. This letter is reading that pile, not rebuilding $(1.06)^8$.

**1.** The trap is $12{,}000 \\times 1.48 = 17{,}760$, eight years of simple 6%. Compounding adds the extra that the claim includes.

The recovered lump-sum pile is \\$19,126.18, so the statement is True.`,

    `Eight end-of-year deposits of \\$1,400 at 6% grow to about \\$13,856.46, not the claimed \\$14,856.46. The overview recovered $F_B \\approx 13{,}856.46$. The extra \\$1,000 is a transcription slip.

**1.** The trap is adding an extra \\$1,000 onto a correct annuity value, or treating nine deposits. The ranking against Strategy A still holds. The printed Strategy B figure is \\$1,000 too high.

The recovered Strategy B future value is about \\$13,856.46, not \\$14,856.46, so the statement is False.`,

    `Strategy A does win, but the gap is not the claimed \\$5,769.72. The overview recovered $F_A = 19{,}126.18$ and $F_B \\approx 13{,}856.46$, so

$$19{,}126.18-13{,}856.46=5{,}269.72$$

The extra \\$500 is what you get from pairing the correct $F_A$ with the inflated $F_B$ from letter B.

**1.** The trap is reusing \\$14,856.46 as if it were Strategy B. Letter B already rejected that figure. This letter has to use the recovered \\$13,856.46.

The recovered gap is \\$5,269.72, not \\$5,769.72, so the statement is False.`,

    `Strategy B's nominal deposits total $1{,}400 \\times 8 = 11{,}200$. That is less than Strategy A's \\$12,000, not more.

**1.** The trap is comparing future values instead of cash committed, or counting nine deposits of \\$1,400. The claim is about cash put in, and B puts in \\$800 less than A.

**2.** A puts more cash in and still wins on future value, because the whole \\$12,000 earns interest from day one. That timing is letter E's territory. This letter only ranks the cash committed.

The recovered cash committed under B is \\$11,200, less than \\$12,000, so the statement is False.`,

    `The claim raises Strategy B's annual deposit from \\$1,400 to \\$1,500 and asks whether B still finishes below A's \\$19,126.18. Scaling an ordinary annuity is linear in the deposit.

**1.** At \\$1,500 a year the eight-year fund is about \\$14,846.20. Then

$$14{,}846.20 < 19{,}126.18$$

Raising the annual deposit by \\$100 is not enough to catch the lump sum.

**2.** How large would the annual deposit have to be to match A? Linearity says $a' = 1{,}400 \\times 19{,}126.18 / 13{,}856.46 \\approx 1{,}932$. The firm would need about \\$1,932 a year, not \\$1,500, to catch the \\$12,000 lump sum. An extra \\$100 a year closes only a small slice of the \\$5,270 gap.

**3.** The trap figure is \\$14,856.46 from letter B, which happens to sit near this \\$1,500 result by coincidence. Using that as if it were already the \\$1,500 fund would still be below A, so the verdict would survive, but the recovered \\$14,846.20 is the figure this letter needs.

**4.** The opposite verdict would need an annual deposit above about \\$1,932, or a lower lump-sum starting point. At \\$1,500 a year, B remains well below A's recovered \\$19,126.18.

The recovered \\$1,500 annuity is about \\$14,846.20, still lower than Strategy A, so the statement is True.`,
  ],

  "math-11-89": [
    `The gym owner deposits \\$3,000 at the beginning of each year for six years at 5%, an annuity due. The overview recovered that due future value as \\$21,426.05. This letter is reading the start-of-year pile, not rebuilding the ordinary factor and the extra $1.05$ scale.

**1.** The trap is reporting the ordinary six-year pile of \\$20,405.76 and stopping. Due deposits get one extra period of growth. This letter asks for the due result.

The recovered annuity-due future value is \\$21,426.05, so the statement is True.`,

    `If the same \\$3,000 deposits were made at the end of each year, the fund would be the ordinary future value of \\$20,405.76. The due result is \\$21,426.05. Then

$$20{,}405.76 < 21{,}426.05$$

Every due payment has one extra period to grow, so the end-of-year schedule is lower.

**1.** The trap is thinking that paying later somehow earns more because "the money stays in the business longer." In the fund, earlier deposits are the ones that compound longer. End-of-year timing is the weaker schedule.

The ordinary future value sits below the recovered due result, so the statement is True.`,

    `The timing gap is one year's interest on the ordinary pile. The overview recovered

$$21{,}426.05-20{,}405.76=1{,}020.29$$

The claim writes \\$1,120.29, which is \\$100 too high.

**1.** The extra hundred is a transcription slip. A solver who started from \\$21,526.05, or who took 5% of \\$22,405.76, would manufacture it.

**2.** The gap is exactly $0.05 \\times 20{,}405.76$, one extra year of 5% on the ordinary fund. It is not 5% of the due fund, which would be about \\$1,071 and is a different wrong figure.

The recovered timing gap is \\$1,020.29, not \\$1,120.29, so the statement is False.`,

    `The claim says that doubling the number of due deposits from 6 years to 12 years would exactly double the annuity-due future value to about \\$42,852.10. Doubling the horizon more than doubles a growing annuity, and the due scale of $1.05$ does not cancel that.

The overview recovered the six-year due fund as \\$21,426.05. At 12 years the ordinary pile is about \\$47,751.36 and the due pile is about \\$50,138.93. Twice the six-year due value is \\$42,852.10. Extra deposits in years 7 through 12 themselves earn interest, and the original six-year pile keeps compounding, so the twelve-year due fund sits well above a double.

**1.** An annuity-due future value is the ordinary future value times $(1+r)$. That identity holds at every horizon, including $n=12$. It does not make the due fund linear in $n$. If the ordinary fund more than doubles when $n$ doubles, the due fund more than doubles as well, because both sides are scaled by the same $1.05$.

**2.** Years 7 through 12 add six more beginning-of-year deposits of \\$3,000. Those later deposits still have time to grow, and the first six deposits receive six extra years of 5% on top of what they had already earned by year 6. All of that extra growth is why \\$50,139 is not \\$42,852.

**3.** The trap figure is \\$42,852.10, twice the six-year due result. Another wrong figure is \\$42,000, twelve deposits of \\$3,000 with a little rounding. Neither is the recovered twelve-year due fund of about \\$50,139.

**4.** A solver who doubled the ordinary six-year pile instead, $2 \\times 20{,}405.76 = 40{,}811.52$, and then scaled by $1.05$ would still land on \\$42,852.10, the same trap. Doubling first and then applying the due identity is algebraically the same as doubling the due result. Both routes assume linearity in $n$, which an accumulating annuity does not have.

**5.** What would have to change for the opposite verdict? A 0% rate would make the due fund equal to $n \\times 3{,}000$, so 12 years would be exactly double 6 years. The gym's account pays 5%, not 0%. A sinking fund with a cap, or a plan that stopped depositing after year 6 and only compounded, would also scale differently. The stem keeps depositing every year.

**6.** The ordinary twelve-year fund of about \\$47,751 already exceeds twice the ordinary six-year fund of \\$20,406. The due identity then lifts both sides by 5%, and \\$50,139 exceeds \\$42,852 by about \\$7,287. That extra is the compounding on the second block of deposits, not a rounding issue.

The recovered 12-year annuity-due future value is about \\$50,138.93, not double \\$21,426.05, so the statement is False.`,

    `The identity $F_{\\mathrm{due}} = F_{\\mathrm{ordinary}}(1+r)$ does not use the horizon. Every payment in an annuity due occurs one period earlier than the matching ordinary payment, so the whole pile is scaled by one extra growth factor whether $n$ is 6 or 12, and whether the rate is 5% or anything else positive.

That is a timing identity, not a dollar coincidence on this gym's numbers. The overview used it at $n=6$ to turn \\$20,405.76 into \\$21,426.05, and again at $n=12$ to turn \\$47,751.36 into \\$50,138.93. The same one-year scale appears in both places.

**1.** Why the identity does not depend on $n$: label the ordinary payments $a$ at $t=1,2,\\ldots,n$. The due payments are $a$ at $t=0,1,\\ldots,n-1$. Shifting every date back by one period multiplies every accumulated value, evaluated at the original terminal date, by $(1+r)$. Factoring $(1+r)$ out of the sum leaves the ordinary future-value formula times $(1+r)$. No term in that factoring used the length of the sum.

**2.** Why the identity does not depend on a particular $r$, as long as $r$ is the same rate used to grow both schedules: the extra year's growth is exactly $(1+r)$, by definition of the rate. At 5% that factor is $1.05$. At 8% it would be $1.08$. The claim says "exactly one extra year's worth of interest growth, regardless of the number of payments or the interest rate," which is this factoring, not a claim that the dollar gap is the same at every rate.

**3.** The dollar gap $F_{\\mathrm{due}}-F_{\\mathrm{ordinary}} = r \\cdot F_{\\mathrm{ordinary}}$ does depend on $r$ and on $n$, because $F_{\\mathrm{ordinary}}$ does. Letter C asked for that dollar gap at $n=6$. This letter asks for the structural identity, which holds even though the dollar gap changes.

**4.** The trap is reading the claim as "the dollar gap is always \\$1,020.29," which is the six-year gap, or as "the due fund is always 5% larger regardless of $r$." If the rate changed, the percentage gap would change with it. The claim does not say the percentage is 5%. It says the extra is one year's interest growth, which tracks whatever $r$ is in force.

**5.** The opposite verdict would need a schedule that is not a pure one-period shift: skip a payment, change the rate mid-stream, or evaluate the two funds at different dates. The stem's due versus ordinary comparison is a pure shift of every \\$3,000 by one year at a constant 5%.

The due future value exceeds the ordinary future value by exactly one extra period of interest for any $n$ and any positive $r$, so the statement is True.`,
  ],

  "math-11-90": [
    `The tenant pays \\$24,000 at the beginning of each year for five years at a 6% opportunity cost, an annuity due. The overview recovered that lease present value as \\$107,162.61. This letter is reading the due present cost, not rebuilding the ordinary five-year factor and the extra $1.06$ scale.

**1.** The trap is reporting the ordinary present value of \\$101,096.80 and stopping. Due rent is due sooner, so it is worth more today. This letter asks for the due result.

The recovered annuity-due present value is \\$107,162.61, so the statement is True.`,

    `If the same \\$24,000 payments were due at the end of each year, the present value would be the ordinary \\$101,096.80. The due result is \\$107,162.61. Then

$$101{,}096.80 < 107{,}162.61$$

Payments that arrive later are worth less today, so the end-of-year lease is cheaper in present value (worse for the landlord who is receiving the rent).

**1.** The trap is thinking that later rent is "safer" or somehow larger in present value. Discounting cuts later cash. The landlord prefers the due schedule.

The ordinary present value sits below the recovered due result, so the statement is True.`,

    `The timing gap is one year's interest on the ordinary present value. The overview recovered

$$107{,}162.61-101{,}096.80=6{,}065.81$$

The claim writes \\$7,065.81, which is \\$1,000 too high.

**1.** The extra thousand is a transcription slip. A solver who started from \\$108,162.61, or who took 6% of \\$117,763, would manufacture it.

**2.** The gap is exactly $0.06 \\times 101{,}096.80$, one extra year of 6% on the ordinary present value. It is not 6% of the due present value, which would be about \\$6,430 and is a different wrong figure.

The recovered timing gap is \\$6,065.81, not \\$7,065.81, so the statement is False.`,

    `The claim says that extending the due lease from 5 years to 10 years would exactly double the annuity-due present value to about \\$214,325.22. Later rent is discounted harder, so doubling the term does not double present value.

The overview recovered the five-year due present value as \\$107,162.61. At 10 years the ordinary present value is about \\$176,642.00 and the due present value is about \\$187,240.52. Twice the five-year due value is \\$214,325.22. Years 6 through 10 still add value, just not another full copy of the first five years.

**1.** An annuity-due present value is the ordinary present value times $(1+r)$. That identity holds at every horizon. It does not make the due present value linear in $n$. If the ordinary present value less than doubles when $n$ doubles, the due present value less than doubles as well, because both sides are scaled by the same $1.06$.

**2.** A rent check in year 10 is discounted by $(1.06)^{10} \\approx 1.79$, so it is worth only about 56 cents on the dollar today. A check in year 1 is due immediately on the due schedule and is worth a full dollar. The second five years cannot be worth as much, in present value, as the first five years. That is why \\$187,241 is not \\$214,325.

**3.** The trap figure is \\$214,325.22, twice the five-year due result. Another wrong figure is \\$240,000, ten undiscounted rents. Neither is the recovered ten-year due present value of about \\$187,241.

**4.** A solver who doubled the ordinary five-year present value, $2 \\times 101{,}096.80 = 202{,}193.60$, and then scaled by $1.06$ would still land on \\$214,325.22, the same trap. Doubling first and then applying the due identity assumes linearity in $n$, which a discounted stream does not have. Far-off rents are cheap.

**5.** What would have to change for the opposite verdict? A 0% opportunity cost would make every rent count at face value, so 10 years of due rent would be exactly double 5 years. The landlord's opportunity cost is 6%, not 0%. A growing rent, or a balloon in the second half, could also push the second block up to match the first. The stem's rent is level.

**6.** The ordinary ten-year present value of about \\$176,642 already sits below twice the ordinary five-year value of \\$101,097. The due identity then lifts both sides by 6%, and \\$187,241 sits about \\$27,085 below \\$214,325. That shortfall is the extra discount on years 6 through 10, not a rounding issue.

The recovered 10-year annuity-due present value is about \\$187,240.52, not double \\$107,162.61, so the statement is False.`,

    `The first rent is due immediately, so it is not discounted. The remaining four rents are an ordinary four-year annuity. The overview recovered that decomposition as

$$24{,}000+83{,}162.40=107{,}162.40$$

which matches the $1.06$-scaled ordinary five-year value of \\$107,162.61 within rounding.

That is an equivalent identity, not a second lease. An annuity due of $n$ payments is one immediate payment plus an ordinary annuity of $n-1$ payments. Here $n=5$, so the leftover ordinary piece has four rents.

**1.** Why this matches $P_n(1+r)$: the ordinary five-year present value discounts five end-of-year rents. Multiplying by $1.06$ moves every rent one period earlier, which is the due schedule. Splitting off the immediate \\$24,000 and discounting the other four as ordinary rents is the same cash-flow list: rent at $t=0,1,2,3,4$.

**2.** The four-year ordinary present value is about \\$83,162.40. Adding the opening \\$24,000 recovers the due present value. A solver who added five remaining ordinary payments, or who discounted the first rent as well, would miss the identity.

**3.** The trap is treating the first payment as due at the end of year 1, which would be the ordinary five-year lease of \\$101,096.80, or adding $P_5$ rather than $P_4$ to the \\$24,000 and double-counting a rent.

**4.** Rounding of \\$107,162.40 against \\$107,162.61 is the usual annuity-factor rounding. Both routes describe the same due lease. The claim does not ask for matching to the cent. It asks whether the decomposition is a valid computation, which it is.

**5.** The opposite verdict would need a lease that was not due, or a first payment that was not the full \\$24,000. The stem's commercial lease is a five-payment annuity due of \\$24,000.

The first \\$24,000 plus the ordinary four-year remainder recovers the due present value, so the statement is True.`,
  ],
};

const { n, counts } = applyLetters("81_90.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
