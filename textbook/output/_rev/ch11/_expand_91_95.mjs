import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-91": [
    `Just before the first \\$10,000 check, a level perpetuity at 6% is worth $10{,}000/0.06 = 166{,}666.67$. The overview recovered that year-4 value. The first payment is at the end of year 5, so the valuation point is the end of year 4, one period before the first check.

**1.** The trap is quoting the year-0 donation of about \\$132,016 as if it were already the year-4 fund. This letter asks for the fund at year 4, before the four-year discount.

The recovered year-4 perpetuity value is about \\$166,666.67, so the statement is True.`,

    `Bring the year-4 fund of \\$166,666.67 back through four years at 6%. The overview recovered that donation as about \\$132,015.61. This letter is reading that present value, not rebuilding $(1.06)^4$.

**1.** The trap is discounting five years instead of four, because the first check is at $t=5$. The perpetuity is valued one period before its first payment, so the discount back to today is four years, not five.

The recovered donation today is about \\$132,015.61, so the statement is True.`,

    `The claim says that starting the \\$10,000 checks at the end of year 1, with no deferral, would lower today's present value below the deferred \\$132,015.61. Starting sooner raises present value. Deferral is a discount, not a premium.

An immediate perpetuity is worth the full $10{,}000/0.06 = 166{,}666.67$ today. Then $166{,}666.67 > 132{,}015.61$. The four-year wait is what cuts the donation from about \\$166,667 down to about \\$132,016.

**1.** Every check in the immediate perpetuity arrives four years earlier than the matching check in the deferred stream. Earlier cash is worth more today at a positive 6%. A solver who thought "waiting means more time to grow, so the deferred fund is larger today" was mixing a future-value story into a present-value donation. The philanthropist is funding a stream of outflows. Waiting to start those outflows makes the endowment cheaper to fund today, not more expensive.

**2.** The trap figure is something below \\$132,016 for the immediate fund. Another wrong figure is \\$166,667 discounted five years, which would undershoot the deferred value and still not make the immediate fund smaller. The recovered immediate value is the year-4 fund itself, undiscounted.

**3.** The opposite verdict would need a negative rate, so that later cash was worth more than earlier cash. The fund earns 6%, not a negative rate.

The recovered immediate perpetuity is \\$166,666.67, higher than the deferred \\$132,015.61, so the statement is False.`,

    `The claim says that pushing the first payment to the end of year 9 would cut today's present value to less than half of \\$132,015.61. Extra years of deferral cheapen the endowment, but not by half.

A year-9 start is valued at year 8 and then discounted eight years. The overview recovered that later donation as about \\$104,568.80. Half of \\$132,015.61 would be about \\$66,007.81. The year-9 start still sits well above half.

**1.** Doubling the deferral from 4 years to 8 years multiplies the present value by $1/(1.06)^4 \\approx 0.792$, the same four-year discount factor that turned \\$166,667 into \\$132,016. Applying that factor again to \\$132,016 gives about \\$104,569, which is 79% of the original deferred value, not 50%.

**2.** The trap figure is \\$66,007.81, the literal half. Another wrong figure is \\$0, as if an eight-year wait wiped out the endowment. At 6%, eight years of discounting leave about 63% of the year-4 fund, which is still about \\$104,569.

**3.** Exact halving would need $(1.06)^4 = 2$, so that eight years would be a factor of 4 on the year-4 fund and a factor of 2 on the original deferred value. Four years at 6% is a factor of about $1.26$, not 2. Rule of 72 at 6% points to a doubling time near 12 years, not 4.

**4.** The opposite verdict would need a much higher rate, high enough that four extra years of deferral really did cut the present value in half. At 6% that is not the fund.

The recovered year-9-start donation is about \\$104,568.80, more than half of \\$132,015.61, so the statement is False.`,

    `The ratio of the deferred present value to the immediate perpetuity is exactly the four-year discount factor $1/(1.06)^4 \\approx 0.7921$, not 0.8321. Four years at 6% leave about 79% of the immediate perpetuity, not 83.21%.

**1.** The extra four points look like a slip from $(1.04)^{-4}$ or from $1-0.06 \\times 4 = 0.76$ mixed with something else. The recovered factor is $(1.06)^{-4} \\approx 0.7921$.

**2.** The trap is using simple discount $1-0.06 \\times 4 = 0.76$, or quoting $(1.06)^{-3} \\approx 0.840$ as if the wait were three years. Neither is 0.8321, and neither is the recovered 0.7921.

The recovered ratio is about 0.7921, not 0.8321, so the statement is False.`,
  ],

  "math-11-92": [
    `A level preferred dividend of \\$4.25 at a 7% required return is $4.25/0.07 \\approx 60.71$. The overview recovered that fair value. The required return belongs in the denominator.

**1.** The trap is $4.25 \\times 0.07$ or $65/0.07$. Fair value is the dividend over the required return, not the market price over the return.

The recovered fair value is about \\$60.71, so the statement is True.`,

    `The stock trades at \\$65.00. The overview recovered fair value as about \\$60.71. Then $65.00 > 60.71$. The stock trades above its dividend-discount price, so it is overvalued, not undervalued.

**1.** Undervalued would mean the market price sat below fair value, a bargain. At \\$65 the market is asking more than the recovered \\$60.71. The ranking in the claim is backwards.

The recovered fair value sits below the \\$65 sticker, so the statement is False.`,

    `A lower required return does raise the price, but not to the claimed \\$116.25. At 4% the overview recovered $P' = 4.25/0.04 = 106.25$. Cutting the yield from 7% to 4% scales the price by $0.07/0.04 = 1.75$, which lands on \\$106.25, not \\$116.25.

**1.** The extra \\$10 looks like adding the original \\$10 market premium onto \\$106.25, or mixing $4.65/0.04$. The perpetuity formula uses the \\$4.25 dividend over 0.04, nothing else.

**2.** The trap figure is \\$116.25, \\$10 above the recovered \\$106.25. Another wrong figure is \\$60.71 \\times 2 = 121.42$, as if cutting the yield in half doubled the price. The yield was not halved. It fell from 7% to 4%.

**3.** The opposite verdict would need a different dividend. At \\$4.25 and 4%, the recovered fair value is \\$106.25.

The recovered 4% fair value is \\$106.25, not \\$116.25, so the statement is False.`,

    `The proportional lift from \\$60.71 to \\$106.25 is exactly 75%, not more than 75%. Because fair value is $a/r$, the ratio of the two prices is the inverse ratio of the two required returns: $0.07/0.04 = 1.75$. That is a 75% increase, exactly.

**1.** The claim's "MORE than 75%" would need the new price above $1.75 \\times 60.71$. The recovered \\$106.25 is that product. The word MORE is the whole error.

**2.** Using the rounded \\$60.71 against \\$106.25 still gives 75% to the displayed cents. Using the unrounded $4.25/0.07$ gives 75% on the nose.

**3.** The trap is comparing \\$116.25 from letter C with \\$60.71, which would be more than 75%, but letter C already rejected \\$116.25.

The recovered increase is exactly 75%, so the statement is False.`,

    `Fair value is linear in the dividend. A 20% dividend cut to \\$3.40 at the same 7% produces $3.40/0.07 \\approx 48.57$, not the claimed \\$50.57. A 20% dividend cut is a 20% price cut: $0.80 \\times 60.71 \\approx 48.57$.

**1.** The extra \\$2 looks like a transcription slip, or like $3.54/0.07$. The cut is 20% of \\$4.25, which is \\$0.85, leaving \\$3.40.

The recovered cut-dividend fair value is about \\$48.57, not \\$50.57, so the statement is False.`,
  ],

  "math-11-93": [
    `Level maintenance of \\$15,000 at 4.5% is $15{,}000/0.045 = 333{,}333.33$. The overview recovered that perpetuity. This letter is the park's ongoing fund only, not the renovation.

**1.** The trap is adding the \\$50,000 renovation already, which is letter B's combined total of \\$383,333.33.

The recovered maintenance fund is about \\$333,333.33, so the statement is True.`,

    `Add the immediate renovation to the recovered perpetuity: $50{,}000+333{,}333.33=383{,}333.33$. One piece is cash today. The other is a discounted infinite stream.

**1.** The trap is discounting the \\$50,000 as if it were also a future bill. The renovation is paid today, so it enters at face value.

The recovered combined total is about \\$383,333.33, so the statement is True.`,

    `At 6% the maintenance perpetuity falls to $15{,}000/0.06 = 250{,}000$. Adding the same \\$50,000 renovation gives \\$300,000. The renovation does not shrink with the rate. Only the perpetuity does.

**1.** The trap is scaling the whole \\$383,333 by $4.5/6$, which would report about \\$287,500 and miss that the renovation is rate-invariant.

The recovered 6% combined total is \\$300,000, so the statement is True.`,

    `The claim says the 1.5-point rate increase cuts the total funding requirement by more than 25%. The dollar cut is \\$383,333.33 minus \\$300,000, which is \\$83,333.33. Relative to the original combined total that is about 21.74%, more than 20% but not more than 25%.

**1.** The renovation is a fixed \\$50,000 that does not participate in the rate change. Only the perpetuity falls, from about \\$333,333 to \\$250,000, a 25% drop on that piece alone. Mixing the renovation into the base dilutes the percentage to about 21.74%.

**2.** The trap is reporting the perpetuity-only drop of 25% as if it applied to the combined total, or taking $83{,}333/333{,}333$ and ignoring the renovation in the denominator.

**3.** The opposite verdict would need to drop the renovation from the original total, or to use a larger rate increase. Against \\$383,333 the recovered cut is about 21.74%, not more than 25%.

The recovered reduction is about 21.74%, so the statement is False.`,

    `Half of the original combined 4.5% total is about \\$191,666.67. The 6% maintenance fund alone is \\$250,000. Then $250{,}000 > 191{,}666.67$. Dropping the renovation and raising the rate both help, but not enough to cut the original combined total in half.

**1.** The 6% perpetuity is \\$250,000. Half of \\$383,333 is about \\$191,667. The gap is about \\$58,333. You would need a rate above 6%, or a smaller original renovation, to push the perpetuity-only 6% fund below that half.

**2.** The trap figure is \\$191,667 treated as a ceiling the 6% fund has already beaten. Another wrong figure is \\$150,000, half of \\$300,000, mixing the 6% combined total into this perpetuity-only claim.

**3.** The opposite verdict would need a higher test rate. At $r = 15{,}000/191{,}667 \\approx 7.8\\%$ the perpetuity-only fund would hit the half-line. Six percent is not that high.

The recovered 6% maintenance fund is \\$250,000, more than half of \\$383,333.33, so the statement is False.`,
  ],

  "math-11-94": [
    `The growing-perpetuity value is next year's rent over the spread $r-g$. The overview recovered $24{,}000/(0.08-0.025) = 436{,}363.64$. The spread 5.5% is the whole model.

**1.** The trap is $24{,}000/0.08 = 300{,}000$, the no-growth value from letter B. Growth is in the stem.

The recovered fair value is about \\$436,363.64, so the statement is True.`,

    `No growth uses $r$ alone in the denominator: $24{,}000/0.08 = 300{,}000$. Then $300{,}000 < 436{,}363.64$. Growth raises value when $g < r$. The claim has the ranking backwards.

**1.** The trap is thinking that growth is a risk that must cut today's price. In the Gordon-style model, extra future rents raise the price as long as they do not outrun the required return.

The recovered no-growth value is \\$300,000, lower than the growing value, so the statement is False.`,

    `Faster growth does raise the price, but not past a double. At 4% growth the overview recovered $24{,}000/(0.08-0.04) = 600{,}000$. Double the original value would be $2 \\times 436{,}363.64 = 872{,}727.28$. Closing $r-g$ from 5.5% to 4% scales the price by $0.055/0.04 = 1.375$, not by 2.

**1.** The trap figure is \\$872,727.28, twice the original growing value, treated as if shrinking the denominator from 0.055 to 0.0275. The new denominator is 0.04, not 0.0275. The recovered \\$600,000 is a 37.5% increase, large but not a double.

**2.** Another wrong figure is \\$24,000/0.04 = 600{,}000$ used as if it were already more than \\$872,727. The dollar amount \\$600,000 is correct. The comparison with a double is what fails.

**3.** The opposite verdict would need $r-g$ to halve or more, for example growth of 5.25% against an 8% required return. Four percent growth is not that close to 8%.

The recovered 4% growth value is \\$600,000, not more than double \\$436,363.64, so the statement is False.`,

    `A lower required return does raise the price, but to $24{,}000/(0.06-0.025) = 685{,}714.29$, not the claimed \\$715,714.29. The extra \\$30,000 is a slip on the new denominator $r-g = 0.035$.

**1.** The trap is $24{,}000/0.0335$ or adding \\$30,000 onto the recovered \\$685,714. The spread is 3.5%, and $24{,}000/0.035 = 685{,}714.29$.

The recovered 6% required-return value is \\$685,714.29, not \\$715,714.29, so the statement is False.`,

    `The denominator $r-g$ has to stay positive. At $g=r$ it vanishes and the model explodes. Above that, the constant-growth story is no longer a convergent perpetuity. That is a domain restriction, not a numerical claim about this property's 2.5% escalator.

**1.** The trap is thinking $g=r$ would make the price zero, as if the rents cancelled the discount. Zero would be a stock that never pays. The boundary $g=r$ is a breakdown of the formula toward infinity, which is letter E of the next Gordon task as well.

**2.** For this rental, 2.5% sits safely below 8%. The claim is about the formula's domain, and that domain is $g < r$.

The growing-perpetuity formula requires $g < 8\\%$ here, so the statement is True.`,
  ],

  "math-11-95": [
    `Gordon growth uses next year's dividend. The stock just paid \\$3.00, so $D_1 = 3.00 \\times 1.03 = 3.09$. The 3% growth has to be applied once before the perpetuity formula.

**1.** The trap is feeding the just-paid \\$3.00 straight into $D_1/(r-g)$. That is letter C's understatement.

The recovered next dividend is \\$3.09, so the statement is True.`,

    `With $D_1 = 3.09$ and $r-g = 0.06$, the overview recovered $P = 3.09/0.06 = 51.50$. The claim writes \\$54.50, which is \\$3 too high.

**1.** The extra \\$3 looks like adding $D_0$ onto \\$51.50, or using $3.27/0.06$. The recovered pair is \\$3.09 over 6 points, which is \\$51.50.

The recovered fair value is \\$51.50, not \\$54.50, so the statement is False.`,

    `Using the just-paid dividend by mistake gives $3.00/0.06 = 50.00$. The overview recovered the correct price as \\$51.50, so the understatement is \\$1.50, not the claimed \\$2.50.

**1.** Skipping the one-year growth step costs $0.09/0.06 = 1.50$ dollars. The extra dollar in the claim is a slip.

**2.** The trap is comparing \\$54.50 from letter B with \\$50.00, which would be a \\$4.50 gap, or comparing \\$51.50 with \\$49.00. The recovered gap is \\$1.50.

The recovered understatement is \\$1.50, not \\$2.50, so the statement is False.`,

    `At 5% growth, next year's dividend is \\$3.15 and $r-g = 0.04$, so $P' = 3.15/0.04 = 78.75$. Double \\$51.50 would be \\$103. Closing the spread from 6% to 4% scales the price, it does not double it.

**1.** The trap figure is \\$103, twice the correct original fair value. Another wrong figure is twice the claimed \\$54.50, which is \\$109. The recovered 5% price of \\$78.75 sits well short of either double.

**2.** The ratio of the two prices is not $0.06/0.04$ alone, because $D_1$ also ticks up from \\$3.09 to \\$3.15. That extra growth in the numerator still does not push the price past \\$103.

**3.** The opposite verdict would need $r-g$ to shrink by more than half, or a much larger $D_1$. At 5% growth against 9%, the recovered price is \\$78.75, not more than double \\$51.50.

The recovered 5% growth value is \\$78.75, short of double \\$51.50, so the statement is False.`,

    `At $g=r$ the denominator vanishes and the model explodes toward infinity. It does not collapse to zero. Zero would be the price of a stock that never pays. The boundary $g=9\\%$ is a breakdown of the formula, not a \\$0.00 valuation.

**1.** The trap is swapping the explosion for a zero, as if "no spread" meant "no value." No spread means the discounted growth never dies, so the sum diverges.

**2.** For this pension-fund stock, 3% sits safely below 9%. The claim is about the equal-rate boundary, and that boundary is infinity, not zero.

The growing-perpetuity valuation does not yield \\$0.00 at $g=r$, so the statement is False.`,
  ],
};

const { n, counts } = applyLetters("91_100.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
