import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-96": [
    `Deal 1 is a level \\$18,000 royalty at 10%, worth $18{,}000/0.10 = 180{,}000$. The asking price is \\$170,000. Then $180{,}000 > 170{,}000$. Fair value sits \\$10,000 above the sticker, so Deal 1 is a good buy.

**1.** The trap is comparing the \\$18,000 annual royalty with 10% of \\$170,000, which is \\$17,000, and stopping without forming the perpetuity value. The recovered fair value is \\$180,000.

The recovered Deal 1 fair value is \\$180,000, above the asking price, so the statement is True.`,

    `Deal 2 is a growing perpetuity: $14{,}000/(0.10-0.04) = 233{,}333.33$. Against the same \\$170,000 sticker the cushion is about \\$63,333, which clears \\$60,000.

**1.** The trap is using $14{,}000/0.10 = 140{,}000$ and calling Deal 2 a bad buy. Growth of 4% is in the stem and is what lifts the value above \\$170,000.

The recovered Deal 2 cushion is about \\$63,333.33, so the statement is True.`,

    `The two cushions are \\$10,000 for Deal 1 and about \\$63,333 for Deal 2. Then $63{,}333 > 10{,}000$. Deal 2 is the wider margin of safety, not Deal 1.

Margin of safety here means fair value minus asking price. Both deals share the \\$170,000 sticker, so the ranking of the cushions is just the ranking of the fair values. Deal 2's recovered \\$233,333 sits well above Deal 1's \\$180,000.

**1.** The trap is ranking by the opening royalty, \\$18,000 versus \\$14,000, and calling Deal 1 safer because it pays more in year 1. Safety in this letter is the dollar cushion against the sticker, not the first check. Growth more than makes up for Deal 2's smaller opening royalty.

**2.** Another mix-up is ranking by the ratio of royalty to price, $18{,}000/170{,}000$ versus $14{,}000/170{,}000$, which again ignores growth. The Gordon denominator $r-g$ is the whole difference.

**3.** The opposite verdict would need Deal 2's growth to be low enough that its fair value sat closer to \\$180,000. At 4% growth that is not the catalog.

Deal 2's recovered cushion of about \\$63,333 is the larger margin, so the statement is False.`,

    `Cutting Deal 2's growth to 1% raises the denominator $r-g$ to 0.09:

$$P_2' = 14{,}000/0.09 \\approx 155{,}555.56$$

Then $155{,}555.56 < 170{,}000$. Slow growth turns the bargain into an overpay.

**1.** The original 4% growth was what pushed fair value to about \\$233,333. At 1% the same opening royalty cannot support the \\$170,000 sticker at a 10% required return. Setting $a_1/(r-g)$ equal to the sticker gives $r-g = 14{,}000/170{,}000 \\approx 0.08235$, so the break-even growth is about $1.765\\%$. One percent sits below that break-even. Four percent sits above it.

**2.** The trap is thinking any positive growth keeps Deal 2 above the sticker, because the original deal was a bargain. Growth has to be high enough relative to the required return and the asking price. One percent is not high enough.

**3.** The opposite verdict would need a lower asking price or a lower required return. At \\$170,000 and 10%, the recovered 1% value is about \\$155,556, below the sticker.

The recovered 1% Deal 2 value is about \\$155,555.56, below the asking price, so the statement is True.`,

    `The recovered prices are \\$180,000 for Deal 1 and about \\$233,333 for Deal 2. Then $180{,}000 < 233{,}333$. Growth more than makes up for Deal 2's smaller opening royalty.

**1.** The trap is ranking by year-1 cash, \\$18,000 versus \\$14,000. Fair value is the discounted infinite stream, not the first check. Letter C already ranked the cushions. This letter ranks the fair values themselves, and Deal 2 is larger.

The recovered Deal 1 fair value is less than Deal 2's, so the statement is False.`,
  ],

  "math-11-97": [
    `Continuous discounting packs twelve years into the exponent $-0.055 \\times 12 = -0.66$. The overview recovered $250{,}000 e^{-0.66} \\approx 129{,}213.75$. This letter is reading that continuous deposit, not rebuilding $e^{-0.66}$.

**1.** The trap is $250{,}000 / 1.055^{12} \\approx 131{,}495$, the annual-compounding deposit from letter B. This letter asks for the continuous figure.

The recovered continuous present value is about \\$129,213.75, so the statement is True.`,

    `Continuous compounding grows money faster, so it discounts a future bill harder. The overview recovered the continuous deposit as about \\$129,213.75 and the annual-compounding deposit as about \\$131,495.10. Then $131{,}495.10 > 129{,}213.75$. The continuous deposit is the smaller of the two, not the higher.

**1.** The claim has the comparison backwards: more frequent compounding at a fixed nominal rate is the stronger schedule. Stronger growth means less cash is needed today to hit \\$250,000 in 12 years. Continuous is the limiting case of that stronger schedule.

**2.** The trap is thinking "continuous is more complicated, so it must require a larger deposit," or mixing the future-value ranking (continuous ends higher for a fixed deposit) with this present-value ranking (continuous starts lower for a fixed target).

**3.** The opposite verdict would need the effective rate held fixed while the quoting convention changed, or a negative rate. The stem holds the 5.5% nominal rate fixed.

The recovered continuous deposit is smaller than the annual-compounding deposit, so the statement is False.`,

    `The two recovered deposits differ by about \\$2,281.35, not the claimed \\$4,280.35. The claimed figure is almost double the true gap.

**1.** The trap is subtracting from \\$133,494, or doubling the recovered gap. The annual-minus-continuous spread is $131{,}495.10 - 129{,}213.75 = 2{,}281.35$.

The recovered gap is about \\$2,281.35, not \\$4,280.35, so the statement is False.`,

    `A shorter wait raises present value. It does not cut it in half. Six years of continuous 5.5% needs about \\$179,731 today. Half of \\$129,213.75 would be about \\$64,607. Halving the horizon cannot halve a discounted bill that is already a present value.

**1.** At $t=0$ the present value would be the full \\$250,000. Shortening the wait from 12 years toward 0 years moves the deposit up toward \\$250,000, not down toward \\$64,607. Six years is halfway in time and nowhere near halfway in present value, because the discount factor $e^{-rt}$ is convex in $t$.

**2.** The trap figure is \\$64,607, the literal half of the 12-year deposit. Another wrong figure is \\$125,000, half the target. Both treat present value as linear in time.

**3.** The opposite verdict would need a future-value problem with a fixed deposit, where a shorter wait would indeed produce a smaller pile. This problem is a present-value problem with a fixed target.

The recovered six-year deposit is about \\$179,731, far more than half of \\$129,213.75, so the statement is False.`,

    `One year of continuous 5.5% is $e^{-0.055} \\approx 0.9465$. About 5.35% of a future dollar disappears each year. That is the one-year discount factor, not a simple 5.5% haircut.

**1.** The trap is quoting $1-0.055 = 0.945$ and calling it 5.5% lost. Continuous discounting at 5.5% loses a bit less than 5.5% in the first year, about 5.35%.

The recovered one-year discount factor is about 0.9465, so the statement is True.`,
  ],

  "math-11-98": [
    `Nine years at a continuous 6.25% is the exponent $0.0625 \\times 9 = 0.5625$. The overview recovered $75{,}000 e^{0.5625} \\approx 131{,}629.13$. This letter is reading that continuous pile.

**1.** The trap is the discrete lump of about \\$129,426 from letter E, or the annuity of about \\$96,758. This letter asks for the continuous lump only.

The recovered continuous future value is about \\$131,629.13, so the statement is True.`,

    `The ordinary-annuity future value of nine year-end deposits of \\$8,333.33 at 6.25% is about \\$96,757.60. The continuous lump is about \\$131,629.13. Then $96{,}757.60 < 131{,}629.13$. Both strategies put \\$75,000 of contributions in. They do not put them in at the same time.

**1.** The annuity's later deposits barely have time to compound. The last \\$8,333.33 sits in the account for almost no time. The lump of \\$75,000 compounds for all nine years, and continuous crediting is the stronger clock besides.

**2.** The trap is thinking equal total contributions must produce equal future values. Timing is the whole gap. Letter D names that timing. This letter only ranks the two recovered piles.

The recovered annuity future value sits below the continuous lump, so the statement is True.`,

    `The two recovered piles differ by about \\$34,871.53, which clears \\$30,000. The full \\$75,000 earns interest from day one on the lump-sum side.

**1.** The trap is subtracting an inflated annuity, or quoting \\$75,000 $-$ \\$8,333 as if the gap were one deposit. The recovered gap is $131{,}629.13 - 96{,}757.60 = 34{,}871.53$.

The recovered outperformance is about \\$34,872, more than \\$30,000, so the statement is True.`,

    `No new arithmetic is required beyond the recovered gap of about \\$34,872. The last annuity deposit sits in the account for almost no time, while the lump sum compounds for all nine years. That timing mismatch is why the gap exists.

**1.** Imagine the \\$75,000 fed in as nine year-end slices. Deposit 1 earns eight years of discrete 6.25%. Deposit 9 earns zero years. The continuous lump earns nine full years on the whole \\$75,000, and it earns them on the continuous clock. Both effects, earlier money and a stronger clock, point the same way.

**2.** The trap is blaming the gap only on continuous versus discrete compounding. Letter E shows that even a discrete lump of about \\$129,426 still beats the annuity of about \\$96,758 by about \\$32,669. Continuous compounding adds another \\$2,203 on top. Most of the \\$34,872 is timing, not the continuous clock.

**3.** The opposite verdict would need the annuity deposits to be made at the beginning of each year as a due schedule, and even then the later deposits would still have less time than money invested on day one.

The recovered gap is a timing story, so the statement is True.`,

    `A discrete lump of \\$75,000 at 6.25% for nine years grows to about \\$129,426.15. That already exceeds the annuity's \\$96,757.60. Even without continuous compounding, investing the whole \\$75,000 on day one beats feeding it in over nine years.

**1.** Rank the three recovered piles: continuous lump about \\$131,629, discrete lump about \\$129,426, annuity about \\$96,758. The claim only compares the discrete lump with the annuity, and that ranking is $129{,}426 > 96{,}758$.

**2.** The trap is thinking discrete annual compounding is so much weaker than continuous that it might fall below the annuity. The continuous-versus-discrete spread on the lump is only about \\$2,203. The lump-versus-annuity spread is more than \\$30,000.

The recovered discrete lump is about \\$129,426.15, above the annuity, so the statement is True.`,
  ],

  "math-11-99": [
    `The equipment lessor wants \\$4,200 at the beginning of each year for five years at 8%, an annuity due. The overview recovered that present value as about \\$18,110.94, from the ordinary \\$16,769.39 scaled by $1.08$. This letter is reading the due present cost.

**1.** The trap is reporting the ordinary \\$16,769.39 and stopping. Due payments are earlier, so they are worth more today.

The recovered annuity-due present value is about \\$18,110.94, so the statement is True.`,

    `The due future-value formula at the end of year 5 recovers about \\$26,610.90, not the claimed \\$27,610.90. The extra \\$1,000 is a transcription slip.

**1.** The ordinary five-year pile scaled by $1.08$ is the due future value. A solver who added \\$1,000 onto a correct \\$26,610.90, or who treated six deposits, would manufacture the claim.

**2.** This letter is not the present value of \\$18,110.94 grown forward in some other way. It is the due future value, and that figure is about \\$26,611.

The recovered due future value is about \\$26,610.90, not \\$27,610.90, so the statement is False.`,

    `Seven years at continuous 6% is the exponent $0.42$. The overview recovered $20{,}000 e^{0.42} \\approx 30{,}439.24$, not the claimed \\$31,439.24. The extra \\$1,000 is a transcription slip.

**1.** The trap is adding \\$1,000 onto a correct continuous pile, or using $e^{0.45}$. The recovered continuous result is about \\$30,439.

The recovered continuous accumulation is about \\$30,439.24, not \\$31,439.24, so the statement is False.`,

    `The maintenance-reserve perpetuity of \\$3,000 at 8% is $3{,}000/0.08 = 37{,}500$. Double the lease present value is $2 \\times 18{,}110.94 = 36{,}221.88$. Then $37{,}500 > 36{,}221.88$. An infinite 8% stream is heavier than five due payments at the same rate, just not by a lot.

**1.** Five due payments of \\$4,200 are a lot of cash in a short window, which is why twice their present value, about \\$36,222, sits close to a \\$3,000 perpetuity. Close is not below. The perpetuity still wins, by about \\$1,278.

**2.** The trap is comparing \\$37,500 with $2 \\times 16{,}769$, twice the ordinary lease, or with twice \\$27,611, twice a future value. This letter compares the perpetuity with twice the recovered due present value of about \\$18,111.

**3.** The opposite verdict would need a cheaper perpetuity, for example a higher reserve rate, or a more expensive lease. At 8% for both, the recovered perpetuity of \\$37,500 is not less than double the lease.

The recovered perpetuity is \\$37,500, more than double \\$18,110.94, so the statement is False.`,

    `The recovered pair is the continuous pile of about \\$30,439.24 against the perpetuity of \\$37,500. Then $30{,}439.24 < 37{,}500$. Seven years of continuous 6% on \\$20,000 does not overtake a \\$3,000 perpetual reserve at 8%.

**1.** These are different tools: a future accumulated value versus a present perpetuity cost. The claim asks for a raw comparison of those two recovered dollars. The continuous result is smaller.

**2.** The trap is using the claimed \\$31,439 from letter C, which still sits below \\$37,500, so the ranking would survive the slip. The recovered figure to use is \\$30,439.24.

**3.** The opposite verdict would need a longer continuous wait, a higher continuous rate, or a smaller perpetual payment. With the stem's 7 years at 6% versus \\$3,000 forever at 8%, the perpetuity is larger.

The recovered continuous result is about \\$30,439.24, smaller than \\$37,500, so the statement is False.`,
  ],

  "math-11-100": [
    `Ten years at continuous 5% is $150{,}000 e^{0.5}$. The overview recovered about \\$247,308.20. This letter is reading Component 1's future pile, not a present-day outlay.

**1.** The trap is quoting the opening \\$150,000 as if it were already the accumulated value. This letter asks for the ten-year continuous result.

The recovered continuous pile is about \\$247,308.20, so the statement is True.`,

    `A future \\$80,000 bill at 6% for six years discounts to about \\$56,396.85, not the claimed \\$57,396.85. The extra \\$1,000 is a transcription slip.

**1.** The trap is adding \\$1,000 onto a correct discount, or using $(1.06)^5$. The recovered Component 2 deposit is about \\$56,397.

The recovered deposit today is about \\$56,396.85, not \\$57,396.85, so the statement is False.`,

    `The 12-year ordinary annuity of \\$10,000 at 7% has present value about \\$79,429.40. The overview recovered that settlement value.

**1.** The trap is $10{,}000 \\times 12 = 120{,}000$, the undiscounted checks. Discounting is what cuts that pile to about \\$79,429.

The recovered Component 3 present value is about \\$79,429.40, so the statement is True.`,

    `The growing perpetuity is $5{,}000/(0.07-0.02) = 100{,}000$. The round \\$100,000 is exact. Next year's \\$5,000 over a 5-point spread is a clean hundred thousand.

**1.** The trap is $5{,}000/0.07 \\approx 71{,}429$, the no-growth value, or $5{,}000 \\times 1.02 / 0.05 = 102{,}000$, growing $D_0$ when the stem already gave next year's payment.

The recovered Component 4 value is exactly \\$100,000, so the statement is True.`,

    `Present-day resources are the opening \\$150,000 plus the three present values, not Component 1's future \\$247,308:

$$150{,}000+56{,}396.85+79{,}429.40+100{,}000=385{,}826.25$$

Then $385{,}826.25 < 500{,}000$. Treating a future accumulated value as a present-day outlay is how the total would be pushed toward \\$500,000.

**1.** If someone added the future \\$247,308 instead of the opening \\$150,000, the mix would be about \\$483,134, still below \\$500,000, but that mix is not a present-day commitment. Component 1 commits \\$150,000 today. The \\$247,308 is what that money grows into in ten years.

**2.** Using the claimed Component 2 deposit of \\$57,397 from letter B would add an extra \\$1,000 and still leave the present-day total near \\$386,826, well short of \\$500,000.

**3.** The trap is summing every impressive number on the page, including future values and undiscounted annuity totals, until the pile clears \\$500,000. Present-day resources are four present figures: \\$150,000, about \\$56,397, about \\$79,429, and \\$100,000.

**4.** The opposite verdict would need a much larger scholarship perpetuity or a larger renovation deposit. With the recovered four present pieces, the total is about \\$385,826, not more than \\$500,000.

The recovered present-day total is about \\$385,826.25, below \\$500,000, so the statement is False.`,
  ],
};

const { n, counts } = applyLetters("91_100.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
