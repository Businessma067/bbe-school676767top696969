import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-106": [
    `Option B is seven beginning-of-year payments of \\$100,000, an annuity due. At 10% the overview recovered that present value as about \\$535,526.07. This letter is reading the 10% due cost, not rebuilding the six remaining discounted payments.

**1.** The trap is $7 \\times 100{,}000 = 700{,}000$, the undiscounted instalments, or the ordinary seven-year present value that omits the immediate first payment.

The recovered 10% present value of Option B is about \\$535,526.07, so the statement is True.`,

    `Cash is \\$500,000 today. Option B at 10% is about \\$535,526.07. Then $535{,}526.07 > 500{,}000$. The lump sum wins at 10%.

**1.** Instalments look smaller year by year, but they are not cheaper in present value at this rate. The extra \\$35,526 is the cost of stretching the same fleet purchase across seven due payments when money is only worth 10%.

The recovered 10% ranking has Option A cheaper, so the statement is True.`,

    `A higher rate does cheapen B, but not to the claimed \\$495,000. At 14% the overview recovered about \\$488,866.75. The round \\$495,000 is a nearby stand-in, about \\$6,133 too high.

**1.** The due formula at 14% is the immediate \\$100,000 plus six ordinary payments discounted at 14%. That extra arithmetic is already in the overview. This letter is reading the 14% present value against the printed \\$495,000.

**2.** The trap is rounding to a convenient \\$495,000 that happens to sit just under cash, so that the ranking in letter D would look obvious. The recovered figure of about \\$488,867 also sits under cash, so the ranking in D survives. The printed dollar amount in this letter does not.

**3.** Another wrong figure is \\$500,000 exactly, as if 14% had made the instalments indifferent to cash. Indifference would need a rate between 10% and 14% that sets $PV_B = 500{,}000$. Fourteen percent overshoots that indifference from above, down to about \\$488,867.

The recovered 14% present value is about \\$488,866.75, not \\$495,000, so the statement is False.`,

    `Compare the 14% present value with cash: $488{,}866.75 < 500{,}000$. At 14% the instalments are discounted hard enough to beat cash. The ranking flips from letter B.

That flip is the whole pedagogical point of the task. Present value of a due payment stream moves opposite to the discount rate. At 10% the stream was worth about \\$535,526, dearer than cash. At 14% it is worth about \\$488,867, cheaper than cash. The cash price never moved. Only the value of waiting moved.

**1.** Why 14% is enough: six of the seven payments are future cash. Raising the rate from 10% to 14% cuts those six discounted pieces by enough to more than erase the \\$35,526 premium that B had at 10%. The immediate first \\$100,000 is rate-invariant, so all of the cheapening happens in the remaining six payments.

**2.** The trap is thinking a ranking at 10% is a ranking for every rate, which is letter E. Letter D is the 14% snapshot. Another trap is using the claimed \\$495,000 from letter C. That stand-in also sits below \\$500,000, so the ranking would survive the slip, but the recovered figure to cite is about \\$488,867.

**3.** A solver who compared seven undiscounted payments of \\$700,000 with cash at every rate would never see a flip. Discounting is what creates the 14% win for B.

**4.** The opposite verdict would need a 14% present value still above \\$500,000, which would need larger instalments or fewer years of wait. With seven due payments of \\$100,000, the recovered 14% cost is about \\$488,867, below cash.

At 14% the recovered Option B present value sits below \\$500,000, so the statement is True.`,

    `At 10% the instalment present value is about \\$535,526, above cash. At 14% it is about \\$488,867, below cash. No schedule is always more expensive when the discount rate can move.

The claim is a universal ranking. Two recovered snapshots already kill it. There is a break-even rate between 10% and 14% at which $PV_B = 500{,}000$. Below that rate, cash wins. Above it, the due instalments win.

**1.** That is not a paradox. It is what discounting does to a delayed payment stream. The more the firm values waiting (the higher the opportunity cost), the more attractive it is to pay later. Option B pays most of its cash later. Option A pays everything today.

**2.** The trap is adding the seven \\$100,000 checks to \\$700,000, seeing that 700 > 500, and concluding B is always dearer. Face-value totals do not rank present values. Letter D already showed the ranking reverse at 14%.

**3.** The opposite verdict would need Option B's payments to be due even sooner, or to total so much more than \\$500,000 that even a huge rate could not pull $PV_B$ below cash. Seven due payments of \\$100,000 are not in that club. At 14% they already are cheaper.

Option B is cheaper than cash at 14% and dearer at 10%, so it is not always more expensive, so the statement is False.`,
  ],

  "math-11-107": [
    `Intra-year interest on four \\$250 deposits at 8% is $a = 250(4 + 1.5 \\times 0.08) = 1{,}030$, not the claimed \\$1,100. The extra \\$70 would need a higher intra-year factor than 4.12.

**1.** The four deposits sit for 9, 6, 3, and 0 months before year-end crediting. Simple interest on those fractions at 8% is the 1.5r in the factor. That is 4.12, times \\$250, which is \\$1,030.

The recovered year-end equivalent is \\$1,030, not \\$1,100, so the statement is False.`,

    `Four years of the recovered \\$1,030 year-end equivalent grow to about \\$4,641.30, not the claimed \\$4,700. The round \\$4,700 is a nearby stand-in.

**1.** The trap is $1{,}030 \\times 4 +$ a loose interest guess, or $250 \\times 16 = 4{,}000$ plus \\$700 of invented interest. The recovered four-year ordinary-annuity pile of \\$1,030 a year at 8% is about \\$4,641.

The recovered four-year balance is about \\$4,641.30, not \\$4,700, so the statement is False.`,

    `Three years of the same equivalent are about \\$3,343.79, not the claimed \\$3,500. Three copies of \\$1,030 plus a little interest do not land on a round \\$3,500.

**1.** The trap is $1{,}030 \\times 3 + 410$ of invented interest, or $250 \\times 12 = 3{,}000$ plus \\$500. The recovered three-year pile is about \\$3,344.

The recovered three-year balance is about \\$3,343.79, not \\$3,500, so the statement is False.`,

    `Dropping intra-year interest replaces the equivalent with \\$1,000. Four years of that lower annuity grow to about \\$4,506.11. That figure is a lower bound, the calculation you get if the quarterly deposits earn nothing until December 31.

**1.** The trap is thinking the simplified calculation should match the correct \\$4,641. It is supposed to sit below, and it does, by the intra-year premium in letter E.

The recovered simplified four-year balance is about \\$4,506.11, so the statement is True.`,

    `The two recovered piles differ by about \\$135.18, not the claimed \\$200. The intra-year premium is about \\$135.

**1.** Four years of an extra \\$30 of year-end equivalent ($1{,}030$ versus $1{,}000$) accumulate at 8% to about \\$135, not to \\$200. The extra \\$70 of equivalent in letter A's false \\$1,100 would have produced a larger premium, which is one way to manufacture \\$200.

**2.** The trap is $4 \\times 50 = 200$ of round intra-year interest, or $1{,}030 - 1{,}000$ times a four-year factor of 2. The recovered gap is $4{,}641.30 - 4{,}506.11 \\approx 135.18$.

The recovered difference is about \\$135.18, not \\$200, so the statement is False.`,
  ],

  "math-11-108": [
    `A 6% nominal mortgage charged monthly is 0.5% per month for 240 months. The overview recovered the payment as about \\$1,432.86. This letter is reading that monthly instalment.

**1.** The trap is $200{,}000 / 240 \\approx 833$, which ignores interest, or $0.005 \\times 200{,}000 = 1{,}000$, which is the first month's interest rather than the payment.

The recovered monthly payment is about \\$1,432.86, so the statement is True.`,

    `Five years leave 180 payments, valued as an ordinary annuity at 0.5% per month. The overview recovered that outstanding balance as about \\$169,799.20.

**1.** Guessing that one quarter of the term pays off one quarter of the principal would report \\$150,000 remaining. Early mortgage years are interest-heavy, so more than three-quarters of the principal is still outstanding. The recovered \\$169,799 is that fact.

The recovered balance after the 60th payment is about \\$169,799.20, so the statement is True.`,

    `Principal repaid after five years is $200{,}000 - 169{,}799.20 = 30{,}200.80$, which is about 15.10% of the original loan, not more than 25%. A quarter of the term has retired closer to one-sixth of the loan.

That is the amortization shape of a long, moderate-rate mortgage. The first years' payments are mostly interest. The recovered first-year interest on \\$200,000 at 0.5% a month is about \\$1,000 of the first \\$1,433 payment, so only about \\$433 of principal goes down in month 1. Five years of that pattern, with principal slowly rising, still only retire about \\$30,201.

**1.** Linear paydown would retire 5/20 = 25% of principal by year 5, which is the claim's cutoff. Amortization is not linear. The recovered 15.10% is 10 points short of that straight line, and that gap is the extra interest paid in the first quarter of the term.

**2.** The trap figure is \\$50,000, a quarter of the loan, or \\$169,799 misread as if it were already a 25% paydown because 170 is "about 75% remaining." 15% repaid is not more than 25%.

**3.** Letter D's first-five-year interest of about \\$55,771 is already larger than the \\$30,201 of principal repaid in the same window. That comparison is why a 25% principal claim cannot survive: most of the cash paid in the first five years was interest.

**4.** The opposite verdict would need a much shorter term or a much lower rate, so that principal would run ahead of interest early. On a 20-year 6% monthly mortgage, the recovered five-year principal fraction is about 15%, not more than 25%.

The recovered principal repaid is about 15.10% of \\$200,000, so the statement is False.`,

    `Sixty payments minus the principal recovered above: $60 \\times 1{,}432.86 - 30{,}200.80 \\approx 55{,}770.80$. That interest pile is already larger than the principal repaid in the same window.

**1.** The overview's about \\$55,770.92 is that same residual. A solver who took $0.06 \\times 5 \\times 200{,}000 = 60{,}000$ of simple interest would overstate, because principal is falling. The recovered \\$55,771 is the amortizing interest bill for five years.

**2.** The trap is reporting the five-year cash paid, $60 \\times 1{,}432.86 \\approx 85{,}972$, as if it were all interest, or reporting only the \\$30,201 of principal. This letter asks for the interest piece of those sixty payments.

The recovered first-five-year interest is about \\$55,770.92, so the statement is True.`,

    `Lifetime interest is total paid minus principal: $240 \\times 1{,}432.86 - 200{,}000 \\approx 143{,}886$. The round \\$120,000 is a simple-interest sketch that understates a 20-year amortizing charge.

**1.** Simple interest of $0.06 \\times 20 \\times 200{,}000 = 240{,}000$ would overstate, because principal is paid down. The claim's \\$120,000 is a different sketch, perhaps $0.06 \\times 10 \\times 200{,}000$ as if the average balance were half the loan for 20 years at a 6% simple rate with a 10-year average wait. The recovered amortizing interest is about \\$143,887, above \\$120,000.

**2.** The trap is treating the first-five-year interest of about \\$55,771 as if four such blocks made \\$223,084, which overstates because later blocks are less interest-heavy. Four equal blocks is not amortization either. The recovered life-of-loan interest is the 240-payment residual, about \\$143,887.

**3.** The opposite verdict would need a shorter term or a lower rate. On this 20-year 6% monthly mortgage, the recovered interest total exceeds \\$120,000.

The recovered lifetime interest is about \\$143,886, not \\$120,000, so the statement is False.`,
  ],

  "math-11-109": [
    `The payoff threshold is about 8.508 years, so the first integer that works is 9. Rounding 8.51 down to 8 would leave a residual unpaid. The overview recovered $n=9$.

**1.** The trap is treating 8.508 as 8, because it is closer to 8 than to 9. The inequality is $n \\ge 8.508$, so 9 is the smallest whole number that retires the loan.

The recovered smallest whole number of payments is 9, so the statement is True.`,

    `After eight years the residual is rolled forward one more year at 14%. The overview recovered that final instalment as about \\$13,100.16. Forcing a ninth full \\$25,000 would overpay.

**1.** The loan's eight-year future value is about \\$342,310. Eight \\$25,000 payments are worth about \\$330,819 at year 8. The gap of about \\$11,491, grown one more year at 14%, is the \\$13,100.16 final payment.

**2.** The trap is a ninth full \\$25,000, or a final payment of \\$11,491 that forgets to roll the residual through year 9. Because 8.508 is only a little past 8, the final payment is well below the regular \\$25,000, about 52% of a full payment.

The recovered ninth payment is about \\$13,100.16, so the statement is True.`,

    `Eight full payments plus the recovered final instalment total $200{,}000 + 13{,}100.16 = 213{,}100.16$. Interest is $213{,}100.16 - 120{,}000 = 93{,}100.16$, not the claimed \\$105,000.

The round \\$105,000 is what you get from treating all nine payments as full \\$25,000 and then subtracting \\$120,000: $225{,}000 - 120{,}000 = 105{,}000$. Letter E exists because that full-payment habit overstates the total. This letter's interest figure inherits that habit.

**1.** The recovered interest of about \\$93,100 is still large, because 14% for nine years is expensive, but it is not \\$105,000. The extra \\$11,900 in the claim is exactly the overstatement of the last payment, $25{,}000 - 13{,}100$.

**2.** The trap is simple interest of $0.14 \\times 9 \\times 120{,}000 = 151{,}200$, which overstates in the other direction, or the full-payment interest of \\$105,000. The recovered amortizing interest uses the smaller ninth payment.

The recovered interest is about \\$93,100.16, not \\$105,000, so the statement is False.`,

    `The recovered life-of-loan total is $8 \\times 25{,}000 + 13{,}100.16 = 213{,}100.16$, not the claimed \\$210,000. The round \\$210,000 is nine copies of something near \\$23,333.

**1.** The trap is rounding the final payment down to \\$10,000 and writing $200{,}000 + 10{,}000$, or rounding the whole total to a clean \\$210,000. The recovered total is about \\$213,100.

The recovered amount actually paid is about \\$213,100.16, not \\$210,000, so the statement is False.`,

    `Nine full payments would be \\$225,000, against the recovered \\$213,100.16:

$$225{,}000-213{,}100.16=11{,}899.84$$

That overstatement is more than \\$10,000. The last instalment is the whole difference: $25{,}000 - 13{,}100.16 = 11{,}899.84$.

**1.** The trap is thinking the overstatement is only a few hundred dollars because 8.508 is close to 9. Close in years is not close in the last payment. The last payment is about \\$13,100, not about \\$24,000. The gap is about \\$11,900, which clears \\$10,000.

**2.** Letter C's false \\$105,000 interest is this same \\$11,900 sitting in the interest column. This letter names the overstatement of total paid, and it is about \\$11,900.

The recovered overstatement is about \\$11,899.84, more than \\$10,000, so the statement is True.`,
  ],

  "math-11-110": [
    `The equipment loan is an eight-payment annuity due at 12%. The overview recovered that due instalment as about \\$16,176.12. This letter is reading the due payment.

**1.** The trap is the ordinary eight-year payment, which would be larger because it waits a year to start. Due means the first \\$16,176.12 is cash today.

The recovered annuity-due payment is about \\$16,176.12, so the statement is True.`,

    `After the immediate first payment the balance is $90{,}000 - 16{,}176.12 = 73{,}823.88$, so year-2 interest is $0.12 \\times 73{,}823.88 \\approx 8{,}858.87$. Charging 12% of the original \\$90,000 again would ignore that the first due payment already cut principal.

**1.** On a due loan the first payment is all principal, because it arrives at $t=0$ before any interest has accrued. That is why $I_1 = 0$ and $I_2 = 0.12 \\times (K-a)$. The recovered \\$8,858.87 is that second-year interest.

**2.** The trap is $0.12 \\times 90{,}000 = 10{,}800$, as if the first payment had not yet happened, or $0.12 \\times 16{,}176 \\approx 1{,}941$, interest on the payment instead of on the remaining balance.

The recovered second-payment interest is about \\$8,858.87, so the statement is True.`,

    `Interest falls as the balance falls. After the second payment the next interest slice is about $I_3 \\approx 7{,}980.79$. Then $7{,}980.79 < 8{,}858.87$. A due loan does not reverse that pattern.

**1.** The second due payment splits into about \\$8,859 of interest and about \\$7,317 of principal, so the balance drops again before year 3's interest is charged. Smaller balance, smaller interest. The claim has the ranking backwards.

**2.** The trap is thinking that because the first payment had zero interest, interest must be rising toward some normal level. Interest starts at zero at $t=0$, jumps to about \\$8,859 at the second payment, and then falls for the rest of the term as any amortizing balance would.

**3.** The opposite verdict would need a growing balance, a skip-payment, or a rising rate. This 12% due loan pays down every year after the opening instalment.

The recovered third-payment interest is about \\$7,980.79, smaller than the second, so the statement is False.`,

    `The year-end equivalent of four \\$300 quarterly deposits at 9% is $300(4 + 1.5 \\times 0.09) = 1{,}240.50$. Three years of that equivalent grow to about \\$4,066.48. Intra-year interest on \\$300 a quarter is what lifts the year-end equivalent above \\$1,200.

**1.** The trap is $300 \\times 4 = 1{,}200$ with no intra-year interest, which would grow to a lower three-year pile. The claim names both the \\$1,240.50 equivalent and the \\$4,066.48 balance, and both match the overview.

The recovered equivalent is \\$1,240.50 and the three-year reserve is about \\$4,066.48, so the statement is True.`,

    `Three due payments are $3 \\times 16{,}176.12 = 48{,}528.36$. The reserve after three years is about \\$4,066.48. Then $48{,}528.36 > 4{,}066.48$. Three loan instalments dwarf a \\$300-a-quarter sinking fund.

**1.** The trap is comparing one loan payment with the reserve, $16{,}176$ versus $4{,}066$, and still the loan wins, or thinking the reserve's three-year pile should be in the same thousands as three loan payments because both run for three years. The loan is servicing \\$90,000. The reserve is feeding \\$300 a quarter. They are different scales.

**2.** The opposite verdict would need a much larger quarterly deposit or a much smaller loan payment. With the recovered figures, three loan payments of about \\$48,528 are not less than a \\$4,066 reserve.

The recovered three loan payments total about \\$48,528, more than the reserve, so the statement is False.`,
  ],
};

const { n, counts } = applyLetters("101_110.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
