import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-101": [
    `The van-and-cooler loan quotes 12% per year with annual instalments, so the periodic rate in the payment formula is $r=0.12$. Annual payments keep the annual rate intact.

**1.** The trap is dividing by 12 as if the bakery paid monthly. This schedule has six year-end instalments, not 72 monthly ones.

The recovered periodic rate is 0.12, so the statement is True.`,

    `The overview recovered the equal annual payment as about \\$14,593.54. This letter is reading that instalment, not rebuilding $1-(1.12)^{-6}$.

**1.** The trap is $60{,}000/6 = 10{,}000$, which ignores interest, or $0.12 \\times 60{,}000 = 7{,}200$, which is year-1 interest rather than the payment.

The recovered annual payment is about \\$14,593.54, so the statement is True.`,

    `Interest in year 1 is the opening balance times the rate: $0.12 \\times 60{,}000 = 7{,}200$. It does not depend on the payment size. The overview recovered that first-year interest exactly.

**1.** The trap is charging 12% of the instalment, $0.12 \\times 14{,}593.54 \\approx 1{,}751$, which is interest on the payment instead of on the loan.

The recovered first-year interest is exactly \\$7,200, so the statement is True.`,

    `Principal in year 1 is the instalment minus that interest. The overview recovered $a \\approx 14{,}593.54$ and first-year interest of \\$7,200, so the principal slice is about \\$7,393.54. Half the payment is about \\$7,296.77. Then $7{,}393.54 > 7{,}296.77$. Principal clears the halfway mark, but not by much.

That ranking is an amortization fact, not a second inversion of the payment formula. On a six-year 12% loan the first payment is already more principal than interest, because six years is short enough, and 12% is not high enough, to keep the early years interest-heavy.

**1.** Compare the two recovered slices: interest \\$7,200, principal about \\$7,394. The gap is only about \\$194. A solver who rounded the payment down to \\$14,400 would have called the split even and missed the claim. The recovered payment of about \\$14,593.54 is what pushes principal over the half.

**2.** The trap is thinking "early payments are mostly interest" as a universal mortgage slogan. That slogan is true for long, lower-rate loans (letter 108's 20-year mortgage is the contrast). It is not true for this six-year 12% van loan. Year 1 is already 50.7% principal.

**3.** Another mix-up is comparing principal with half the original \\$60,000, which is \\$30,000, and calling the first principal slice small. The claim compares principal with half the payment, not with half the loan.

**4.** After year 1 the balance is about \\$52,606. Later years will be even more principal-heavy as the balance, and therefore the interest slice, falls. Year 1 is the most interest-heavy year on this schedule, and even year 1 is already past 50% principal.

**5.** The opposite verdict would need a longer term or a higher rate, so that $rK$ exceeded $a/2$. For $n=6$ and $r=0.12$, the recovered split does not go that way.

The recovered first-year principal of about \\$7,393.54 is more than half of \\$14,593.54, so the statement is True.`,

    `The claim says the balance after the second payment is about \\$45,000. Rolling the amortization through year 2 does not land there.

After year 1 the balance is $60{,}000 - 7{,}393.54 = 52{,}606.46$. Year-2 interest is $0.12 \\times 52{,}606.46 = 6{,}312.77$. Year-2 principal is $14{,}593.54 - 6{,}312.77 = 8{,}280.77$. The closing balance is $52{,}606.46 - 8{,}280.77 = 44{,}325.69$. The claimed \\$45,000 is a tidy \\$15,000-per-year guess, about \\$674 too high.

**1.** Linear paydown would subtract \\$10,000 of principal a year and report \\$40,000 after two years, or subtract \\$15,000 a year (payment treated as all principal) and report \\$30,000. The claim's \\$45,000 is the other linear guess: \\$7,500 of principal a year, as if interest were a flat half of a \\$15,000 payment. None of those linear paths is amortization. Principal rises each year as interest falls.

**2.** The two recovered principal slices are about \\$7,394 and \\$8,281, totalling about \\$15,674 of principal in two years. Then $60{,}000 - 15{,}674 = 44{,}326$, not \\$45,000. The extra \\$674 is exactly the compounding in the schedule that a round \\$45,000 erases.

**3.** A solver who stopped after year 1 and subtracted another \\$7,394 would report about \\$45,213, close to the claim from the other side. Reusing the first principal slice is the simple-interest habit. Year 2's principal is larger.

**4.** The opposite verdict would need a different payment or a different rate so that two years of principal really did total \\$15,000. With $a \\approx 14{,}593.54$ and $r=0.12$, the recovered balance after payment 2 is about \\$44,326.

The recovered outstanding balance is about \\$44,325.69, not \\$45,000, so the statement is False.`,
  ],

  "math-11-102": [
    `A 9% nominal rate charged monthly is split evenly across twelve dates: $0.09/12 = 0.0075 = 0.75\\%$. The overview recovered that monthly rate.

**1.** The trap is using 9% itself as the monthly rate, which would overstate every payment, or dividing by 52 as if the dealer charged weekly.

The recovered monthly rate is 0.75%, so the statement is True.`,

    `Forty-eight months at 0.75% on \\$24,000 invert to about \\$597.24. The overview recovered that monthly instalment.

**1.** The trap is $24{,}000/48 = 500$, which ignores interest, or $0.09/12 \\times 24{,}000 = 180$, which is the first month's interest rather than the payment.

The recovered monthly payment is about \\$597.24, so the statement is True.`,

    `Forty-eight copies of the recovered payment are about \\$28,667.57, not the claimed \\$29,500. The extra \\$832 is a rounded-up stand-in.

**1.** $597.24 \\times 48 = 28{,}667.52$ to the cent, rounding to about \\$28,667.57 in the overview. The claim's \\$29,500 is what you get by rounding the payment up to \\$615, or by adding a loose \\$800 of "fees."

The recovered total paid is about \\$28,667.57, not \\$29,500, so the statement is False.`,

    `Interest is total paid minus principal: $28{,}667.57 - 24{,}000 = 4{,}667.57$. That matches the claim.

**1.** The trap is $9\\% \\times 4 \\times 24{,}000 = 8{,}640$ of simple interest, as if the whole principal sat for four years. Amortization pays principal down along the way, so the interest bill is the recovered \\$4,667.57, not \\$8,640.

The recovered total interest is about \\$4,667.57, so the statement is True.`,

    `Four annual payments at 9% invert to about \\$7,408.05, which is far above the claimed cutoff of \\$2,388.96. The smaller figure is roughly four monthly payments of \\$597, as if a year contained four months.

**1.** An annual schedule has $n=4$ and $r=0.09$. The overview recovered $a \\approx 7{,}408.05$. Four monthly payments would be $4 \\times 597.24 \\approx 2{,}389$, which is the claim's \\$2,388.96. That mix-up treats a year as four months, or treats the annual payment as four times the monthly payment instead of as the inverted four-year annuity.

**2.** The annual payment has to cover a whole year's interest of $0.09 \\times 24{,}000 = 2{,}160$ plus principal. It cannot be \\$2,389, which is barely above one year of interest and would never retire the loan. The recovered \\$7,408 is the figure that actually amortizes \\$24,000 over four years at 9%.

**3.** Comparing apples to apples, twelve monthly payments total about $12 \\times 597.24 \\approx 7{,}167$ per year of cash outlay, which is below the annual-payment \\$7,408 because monthly compounding and monthly principal reduction cut the interest bill. That yearly-cash comparison is a different question. The claim asks whether the annual instalment itself is less than \\$2,388.96. It is not.

**4.** The opposite verdict would need a much lower annual rate or a much longer annual term. At 9% for four years, the recovered annual payment is about \\$7,408, not less than \\$2,389.

The recovered annual payment is about \\$7,408.05, well above \\$2,388.96, so the statement is False.`,
  ],

  "math-11-103": [
    `The overview recovered the equal annual payment as about \\$11,870.89. This letter is reading that renovation instalment.

**1.** The trap is $45{,}000/5 = 9{,}000$, which ignores interest, or $0.10 \\times 45{,}000 = 4{,}500$, which is year-1 interest rather than the payment.

The recovered annual payment is about \\$11,870.89, so the statement is True.`,

    `Year-1 interest is the opening balance times the rate: $0.10 \\times 45{,}000 = 4{,}500$. The claim writes \\$5,000, which is 10% of a round \\$50,000 loan that this renovation is not.

**1.** The extra \\$500 is the tell. A solver who rounded the loan up to \\$50,000, or who took 10% of a \\$50,000 stand-in, would manufacture \\$5,000. The recovered first-year interest is \\$4,500.

The recovered first-year interest is \\$4,500, not \\$5,000, so the statement is False.`,

    `Roll three principal portions off the \\$45,000. Year 1 principal is $11{,}870.89 - 4{,}500 = 7{,}370.89$, leaving \\$37,629.11. Year 2 interest is \\$3,762.91, principal \\$8,107.98, leaving \\$29,521.14. Year 3 interest is \\$2,952.11, principal \\$8,918.77, so the balance after payment 3 is

$$29{,}521.14-8{,}918.77=20{,}602.37$$

That is the claimed remaining balance. This letter is an amortization walk, not a second inversion of the payment formula.

**1.** Linear paydown would subtract $45{,}000 \\times 3/5 = 27{,}000$ of principal and report \\$18,000 remaining. The recovered \\$20,602 sits above that linear guess because the early years are more interest-heavy than the later years, so less principal has been retired by year 3 than a straight line would say.

**2.** The trap is reporting \\$27,000 remaining, three-fifths of the loan, or \\$22,500, half the loan after "about half the term." The recovered walk through the three principal slices is what lands on \\$20,602.37.

**3.** Adding the three recovered principal slices, $7{,}370.89 + 8{,}107.98 + 8{,}918.77 = 24{,}397.64$, and subtracting from \\$45,000 also recovers \\$20,602.36, the same balance. Either route, year-by-year or summed principal, is the amortization, not a fraction of the term.

The recovered balance after the third payment is about \\$20,602.37, so the statement is True.`,

    `By year 4 the balance is the recovered \\$20,602.37, so year-4 interest is $0.10 \\times 20{,}602.37 = 2{,}060.24$ and year-4 principal is $11{,}870.89 - 2{,}060.24 = 9{,}810.65$. Then $2{,}060.24 < 9{,}810.65$. This five-year 10% schedule has already flipped well before year 4.

**1.** The interest-versus-principal split moves the same way every year on a level-payment loan: interest falls as the balance falls, principal rises as a complement of a fixed payment. Year 1 was already 38% interest and 62% principal ($4{,}500$ versus $7{,}371$). Year 4 is about 17% interest and 83% principal. There is no year on this schedule in which interest exceeds principal.

**2.** The trap is the long-mortgage slogan that "early payments are mostly interest," imported into a five-year 10% renovation loan. That slogan needs a long term. Letter 108's 20-year mortgage is the place it lives. Here, even payment 1 is already principal-heavy.

**3.** A solver who used year-1 interest of \\$4,500 against the year-4 payment would still find $4{,}500 < 11{,}870.89$, and the year-4 interest is much smaller than \\$4,500 besides. The claim would need a balance above $a/(2r) = 11{,}870.89 / 0.20 \\approx 59{,}354$, larger than the original loan. That cannot happen on a paydown schedule.

**4.** The opposite verdict would need a much longer term so that the year-4 balance was still huge. On this five-year loan, year 4 is the second-to-last year. Almost all of the remaining payment is principal.

The recovered year-4 interest of about \\$2,060.24 is smaller than the principal portion of about \\$9,810.65, so the statement is False.`,

    `Principal portions have to sum to the original loan. The overview recovered the five principal slices as about \\$7,370.89, \\$8,107.98, \\$8,918.77, \\$9,810.65, and \\$10,791.72, which add to \\$45,000, not to the claimed \\$46,200.

**1.** The extra \\$1,200 would count some interest as principal. A solver who added the five payments, $5 \\times 11{,}870.89 \\approx 59{,}354$, and then subtracted a made-up interest total of \\$13,154, could manufacture \\$46,200. The definition of principal portions is that they retire the \\$45,000 loan and nothing else.

**2.** The trap is adding the five payments and calling that "principal," which is about \\$59,354 and includes all the interest, or adding four principals plus a full payment. The recovered sum of principals is the original \\$45,000.

The recovered principal portions sum to \\$45,000, not \\$46,200, so the statement is False.`,
  ],

  "math-11-104": [
    `An annuity due of ten payments is 1 plus nine discounted ordinary payments. The overview recovered that combined present-value factor as about 6.537048. This letter is reading the factor, not the payment.

**1.** The trap is the ordinary ten-year annuity factor $1-(1.11)^{-10}$ over 0.11, about 5.889, which omits the immediate first payment. Due means the first payment is cash today.

The recovered combined factor is about 6.537048, so the statement is True.`,

    `Divide the \\$150,000 buy-in by that due factor: $150{,}000 / 6.537048 \\approx 22{,}946.14$. The overview recovered that due payment.

**1.** The trap is $150{,}000/10 = 15{,}000$, which ignores both interest and the immediate first payment, or the ordinary payment of about \\$25,470 from letter C.

The recovered equal due payment is about \\$22,946.14, so the statement is True.`,

    `End-of-year timing is an ordinary annuity. The overview recovered $a_{\\mathrm{ordinary}} \\approx 25{,}470.21$. Then $25{,}470.21 > 22{,}946.14$. Paying later means each payment has to be larger to reach the same present target of \\$150,000.

That ranking is the whole point of an annuity due versus an ordinary annuity on a financing problem. The franchisee who pays the first instalment today is giving the franchisor cash immediately, so the remaining nine payments can be smaller. The franchisee who waits a year on every check, including the first, has to write larger checks.

**1.** The ordinary payment inverts $rK / (1-(1+r)^{-n})$ with $n=10$ and $r=0.11$. The due payment divides $K$ by $1 + (1-(1+r)^{-9})/r$. Both recoveries are already in the overview. This letter is the comparison: later timing, larger payment, not smaller.

**2.** The trap is thinking that "waiting is cheaper" because money has time to earn 11% before the first check. That is a present-value intuition for a stream you will receive. Here the franchisee is the one who owes \\$150,000 today. Deferring every payment raises the size of each payment needed to keep the present value at \\$150,000.

**3.** Another mix-up is comparing ten due payments' total cash, about \\$229,461, with ten ordinary payments' total cash, about \\$254,702, and then somehow concluding the ordinary payment is smaller. The ordinary payment is larger; the due payment is smaller. Both totals exceed \\$150,000 by the interest built into the schedule.

**4.** The opposite verdict would need a negative interest rate, so that later cash was worth more, or a different present target. At 11% with a \\$150,000 present buy-in, the recovered ordinary payment is about \\$25,470, higher than the due payment of about \\$22,946.

The recovered ordinary payment is about \\$25,470.21, higher than \\$22,946.14, so the statement is False.`,

    `Subtract the two recovered payments: $25{,}470.21 - 22{,}946.14 \\approx 2{,}524.08$. Ordinary starts later, so each payment has to be larger to reach the same present target. That difference is the claim.

**1.** The dollar gap is not 11% of \\$22,946, which would be about \\$2,524 coincidentally close, and not 11% of \\$25,470 either. It is the difference of the two inverted payments. The coincidence that $0.11 \\times 22{,}946 \\approx 2{,}524$ is a near miss worth naming so it is not treated as the reason.

**2.** Why the payments differ: the due schedule is an immediate \\$22,946 plus nine ordinary discounted payments. The ordinary schedule is ten discounted payments and no immediate cash. To keep the present value at \\$150,000, the ordinary check has to work harder.

**3.** The trap is reporting \\$2,424.08 or \\$3,524.08, a thousand-dollar slip of the kind this chapter uses elsewhere, or reporting the gap in total cash, $10 \\times 2{,}524 = 25{,}240$, as if the claim asked for a ten-year total.

**4.** The opposite verdict would need the two payments to sit closer than about \\$2,524 apart, which would need a lower rate (less penalty for waiting) or a shorter term. At 11% for ten years, the recovered gap is about \\$2,524.08.

The recovered payment difference is about \\$2,524.08, so the statement is True.`,

    `Ten copies of the recovered due payment are about \\$229,461.39, not the claimed \\$220,000. The round \\$220,000 is ten copies of \\$22,000.

**1.** $22{,}946.14 \\times 10 \\approx 229{,}461$. A solver who rounded the payment down to \\$22,000, or who used $22{,}000 \\times 10$, would land on the claim. The recovered total cash outlay is about \\$229,461.

The recovered total of the ten due payments is about \\$229,461.39, not \\$220,000, so the statement is False.`,
  ],

  "math-11-105": [
    `The payoff threshold is about 4.966 years, so the first integer that works is 5. Rounding 4.97 down to 4 would leave a residual unpaid. The overview recovered $n=5$.

**1.** The trap is treating 4.966 as 4, or as 4 years plus a tiny extra that can be ignored. A 13% loan of \\$35,000 against \\$10,000 a year is just shy of four full payments. The fifth payment is required.

The recovered smallest whole number of payments is 5, so the statement is True.`,

    `The schedule is a fixed \\$10,000 a year until the last (smaller) payment. Four full payments total \\$40,000. This letter is a count, not a second inversion of the 4.966 threshold.

**1.** The trap is counting five full \\$10,000 payments, which is letter D's total before the smaller fifth instalment is used.

The first four payments total \\$40,000, so the statement is True.`,

    `After four years the residual is rolled forward one more year at 13%. The overview recovered that final instalment as about \\$9,682.53. The last check is a little under the regular \\$10,000.

**1.** The loan's four-year future value is about \\$57,066.58. Four \\$10,000 payments are worth about \\$48,497.97 at year 4. The gap of about \\$8,569, grown one more year at 13%, is the \\$9,682.53 final payment. That walk is the extra arithmetic this letter leans on, already in the overview.

**2.** The trap is a fifth full \\$10,000, which would overpay by about \\$317, or a final payment of \\$8,569 that forgets to roll the residual forward through year 5.

**3.** Because 4.966 is so close to 5, the final payment is close to the regular payment. That closeness is not a reason to round it to \\$10,000. The recovered figure is about \\$9,682.53.

The recovered fifth payment is about \\$9,682.53, so the statement is True.`,

    `Four full payments plus the recovered final instalment are $40{,}000 + 9{,}682.53 = 49{,}682.53$. Five copies of \\$10,000 would overstate the total by about \\$317.

**1.** The trap is $5 \\times 10{,}000 = 50{,}000$, which ignores that the last payment is smaller. Letter C already recovered that last payment.

The recovered life-of-loan total is about \\$49,682.53, so the statement is True.`,

    `Interest is total paid minus principal: $49{,}682.53 - 35{,}000 = 14{,}682.53$. Then $14{,}682.53 < 35{,}000$. A 13% rate is high, but five years is short, so interest does not overtake the original principal.

**1.** Simple interest of $0.13 \\times 5 \\times 35{,}000 = 22{,}750$ would still sit below \\$35,000, and amortization is cheaper than that simple-interest ceiling besides, because principal is paid down along the way. The recovered \\$14,683 is well under the original loan.

**2.** The trap is comparing interest with a single \\$10,000 payment, or with the final \\$9,683, and calling that "less than principal" as if the claim were about one year. The claim is about the life-of-loan interest total.

**3.** The opposite verdict would need a longer term or a still higher rate so that cumulative interest passed \\$35,000. On this five-year 13% schedule it does not.

The recovered interest of about \\$14,682.53 is less than \\$35,000, so the statement is True.`,
  ],
};

const { n, counts } = applyLetters("101_110.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
