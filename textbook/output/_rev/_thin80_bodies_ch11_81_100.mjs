import { applyBodies } from "./_thin80_apply.mjs";

const bodies = {};
function add(key, paras) {
  bodies[key] = paras.join("\n");
}

add("math-11-86:A", [
  "The statement is a claim about the present amount the nonprofit must set aside today to fund $\\$5{,}000$ at the end of each year for $20$ years at $6\\%$. That is a finite ordinary annuity, not the perpetual scholarship the board also asked about.",
  "",
  "The overview recovered that ordinary-annuity present value as about $\\$57{,}349.67$. This letter is reading that twenty-year scholarship fund. It does not rebuild $1-(1.06)^{-20}$ over $0.06$.",
  "",
  "**1.** The trap is $5{,}000 / 0.06 = 83{,}333.33$, the perpetual fund. Twenty years is finite. Forever of $\\$5{,}000$ at $6\\%$ is a larger pile because the payments never stop.",
  "",
  "**2.** Another trap is $5{,}000 \\times 20 = 100{,}000$, the undiscounted cheque total. Discounting is what cuts that pile to about $\\$57{,}350$. A solver who used $5{,}000 \\times 20 / 1.06$ would under-discount, treating twenty years as one year.",
  "",
  "The opposite verdict would need a different rate or a different horizon. At $6\\%$ for $20$ years the recovered fund is about $\\$57{,}349.67$, not the perpetuity and not the raw $20$-year sum. This letter asks for the $20$-year annuity only.",
  "",
  "The recovered twenty-year fund is about $\\$57{,}349.67$, so the statement is True.",
]);

add("math-11-87:A", [
  "The statement is a claim about Option 2's present-value cost: nine end-of-year payments of $\\$2{,}500$ at $7\\%$. Option 1 is $\\$18{,}000$ cash today. This letter reads Option 2 alone, not the ranking.",
  "",
  "The overview recovered that ordinary-annuity present cost as about $\\$16{,}288.18$. This letter does not rebuild the nine-year annuity factor. It only asks whether the recovered present cost is the number in the claim.",
  "",
  "**1.** The trap is $2{,}500 \\times 9 = 22{,}500$, the undiscounted instalments. Discounting is what cuts that pile to about $\\$16{,}288$.",
  "",
  "**2.** A solver who reported Option 1's $\\$18{,}000$ here would be reading cash, not the instalment stream. A solver who treated the nine payments as due (beginning of year) would overstate today's cost, because due payments arrive earlier.",
  "",
  "Option 2's recovered present value sits below the $\\$18{,}000$ cash price, which is why instalments win at $7\\%$. That ranking is a later letter. This letter only pins Option 2 at about $\\$16{,}288$. The opposite verdict would need a different rate or a different payment.",
  "",
  "The recovered present cost is about $\\$16{,}288.18$, so the statement is True.",
]);

add("math-11-88:A", [
  "The statement is a claim about Strategy A's future pile: $\\$12{,}000$ deposited today at $6\\%$ for eight years, all at once. Strategy B's eight end-of-year deposits are a different clock.",
  "",
  "The overview recovered that lump-sum future value as $\\$19{,}126.18$. This letter is reading that pile. It does not rebuild $(1.06)^8$.",
  "",
  "**1.** The trap is $12{,}000 \\times 1.48 = 17{,}760$, eight years of simple $6\\%$. Compounding adds the extra that the claim includes. Simple interest never credits interest on interest.",
  "",
  "**2.** A solver who reported Strategy B's recovered $\\$13{,}856$ here would be reading the annuity, not the lump. A solver who used $(1.06)^7$ would stop a year early and undershoot.",
  "",
  "The opposite verdict would need a different opening deposit or a different rate. With $\\$12{,}000$ at $6\\%$ for eight compounding years, Strategy A's recovered pile is $\\$19{,}126.18$. Eight copies of $\\$1{,}400$ are not this letter.",
  "",
  "The recovered lump-sum pile is $\\$19{,}126.18$, so the statement is True.",
]);

add("math-11-88:B", [
  "The statement claims Strategy B's future value after eight years is about $\\$14{,}856.46$. Strategy B is eight end-of-year deposits of $\\$1{,}400$ at $6\\%$, an ordinary annuity, not the lump in letter A.",
  "",
  "The overview recovered $F_B \\approx 13{,}856.46$. The claim writes $\\$14{,}856.46$, exactly $\\$1{,}000$ too high. That extra thousand is a transcription slip, not a different interest story.",
  "",
  "**1.** Eight copies of $\\$1{,}400$ are $\\$11{,}200$ of principal. Interest makes up the rest. The recovered pile is about $\\$13{,}856$, so interest is about $\\$2{,}656$, not $\\$3{,}656$.",
  "",
  "**2.** A solver who added an extra $\\$1{,}000$ onto a correct annuity value, or who treated nine deposits, would land on the claim. A solver who used Strategy A's $\\$19{,}126$ here would overshoot in the other direction.",
  "",
  "The ranking against Strategy A still holds either way: even the inflated $\\$14{,}856$ sits below $\\$19{,}126$. The printed Strategy B figure is still $\\$1{,}000$ too high. The opposite verdict would need the recovered annuity to be $\\$14{,}856$, and it is not.",
  "",
  "The recovered Strategy B future value is about $\\$13{,}856.46$, not $\\$14{,}856.46$, so the statement is False.",
]);

add("math-11-92:A", [
  "The statement is a claim about the preferred stock's fair value: a level $\\$4.25$ dividend in perpetuity at a $7\\%$ required return. The $\\$65$ market quote is a different object, used in later letters.",
  "",
  "The overview recovered $4.25/0.07 \\approx 60.71$. This letter is reading that dividend-discount price. The required return belongs in the denominator.",
  "",
  "**1.** Fair value is the dividend over the required return, not the market price over the return. The trap is $4.25 \\times 0.07 = 0.30$, which is a dollar dividend times a rate, or $65/0.07 \\approx 929$, which puts the sticker in the numerator.",
  "",
  "**2.** A solver who used $4.25/0.065$ or $4.25/0.075$ would wander off $60.71$ by changing the required return the stem did not change. Growth is not in this preferred; a Gordon $g>0$ would be the wrong model.",
  "",
  "The opposite verdict would need a different dividend or a different required return. With $\\$4.25$ forever at $7\\%$, the recovered fair value is about $\\$60.71$. Trading at $\\$65$ is letter B's ranking, not this letter's price.",
  "",
  "The recovered fair value is about $\\$60.71$, so the statement is True.",
]);

add("math-11-92:B", [
  "The statement claims that at a market price of $\\$65.00$ the preferred stock is undervalued relative to fair value. Undervalued would mean the market is asking less than the dividend-discount price, a bargain.",
  "",
  "The overview recovered fair value as about $\\$60.71$. The stock trades at $\\$65.00$. Then $65.00 > 60.71$. The market is asking more than the recovered fair value, so the stock is overvalued, not undervalued.",
  "",
  "**1.** The gap is about $\\$4.29$ of overvaluation. A buyer at $\\$65$ would be paying that extra for the same $\\$4.25$ perpetual dividend.",
  "",
  "**2.** The ranking in the claim is backwards. A solver who compared $\\$65$ with $4.25/0.065 \\approx 65.4$ after inventing a lower required return could manufacture a tiny undervaluation. The stem's required return is $7\\%$, not $6.5\\%$.",
  "",
  "The opposite verdict would need fair value above $\\$65$, which would take a required return below $4.25/65 \\approx 6.54\\%$. Investors require $7\\%$. The recovered fair value sits below the $\\$65$ sticker, so the statement is False.",
]);

add("math-11-92:E", [
  "The statement cuts the preferred dividend by $20\\%$ while keeping the $7\\%$ required return, and claims fair value would fall to exactly $\\$50.57$. Fair value is linear in the dividend, so a $20\\%$ dividend cut is a $20\\%$ price cut.",
  "",
  "A $20\\%$ cut of $\\$4.25$ leaves $\\$3.40$. Then $3.40/0.07 \\approx 48.57$, not the claimed $\\$50.57$. Equivalently $0.80 \\times 60.71 \\approx 48.57$. The extra $\\$2$ is a slip.",
  "",
  "**1.** The cut is $0.20 \\times 4.25 = 0.85$, leaving $3.40$. Feeding $3.54$ into the $7\\%$ denominator is one route to something near $\\$50.57$.",
  "",
  "**2.** A solver who cut the required return by $20\\%$ instead of the dividend would raise the price, the wrong direction. A solver who subtracted $\\$10$ from $\\$60.71$ would land near $\\$50.71$, another neighbour of the claim.",
  "",
  "The opposite verdict would need the cut-dividend value to be $\\$50.57$. With $D=3.40$ at $7\\%$, the recovered fair value is about $\\$48.57$, not $\\$50.57$. Linearity in the dividend is the whole extra arithmetic.",
  "",
  "The recovered cut-dividend fair value is about $\\$48.57$, not $\\$50.57$, so the statement is False.",
]);

add("math-11-93:A", [
  "The statement is a claim about the present value of just the park's perpetual maintenance, $\\$15{,}000$ a year forever at $4.5\\%$. The $\\$50{,}000$ renovation is a separate cash outlay today and does not enter this letter.",
  "",
  "The overview recovered $15{,}000/0.045 = 333{,}333.33$. This letter is the ongoing fund only, not the combined total in letter B.",
  "",
  "**1.** The trap is adding the $\\$50{,}000$ renovation already, which is letter B's combined $\\$383{,}333.33$. This letter asks for maintenance alone.",
  "",
  "**2.** A solver who used $15{,}000/0.045 \\times 1.045$ would have grown the perpetuity by one extra year. A solver who used $6\\%$ here would report $\\$250{,}000$, which is letter C's maintenance piece, not the $4.5\\%$ figure.",
  "",
  "The opposite verdict would need a different annual maintenance bill or a different rate. With $\\$15{,}000$ forever at $4.5\\%$, the recovered maintenance fund is about $\\$333{,}333.33$. The renovation waits for the next letter.",
  "",
  "The recovered maintenance fund is about $\\$333{,}333.33$, so the statement is True.",
]);

add("math-11-93:B", [
  "The statement adds the immediate $\\$50{,}000$ renovation to the recovered maintenance perpetuity and claims the city must set aside about $\\$383{,}333.33$ today. One piece is cash today. The other is a discounted infinite stream.",
  "",
  "The overview recovered the maintenance fund as $\\$333{,}333.33$. The extra arithmetic is only adding the renovation at face value.",
  "",
  "**1.** Add the two recovered pieces:",
  "",
  "$$50{,}000 + 333{,}333.33 = 383{,}333.33$$",
  "",
  "**2.** The trap is discounting the $\\$50{,}000$ as if it were also a future bill. The renovation is paid today, so it enters at face value. A solver who reported $\\$333{,}333$ here would be answering letter A.",
  "",
  "A solver who treated the renovation as a second perpetuity, $50{,}000/0.045$, would invent about $\\$1.11$ million and miss the claim. The opposite verdict would need the renovation to be deferred. With it due today, the recovered combined total is about $\\$383{,}333.33$.",
  "",
  "The recovered combined total is about $\\$383{,}333.33$, so the statement is True.",
]);

add("math-11-93:C", [
  "The statement rebuilds the combined funding at $6\\%$ instead of $4.5\\%$ and claims the total would be about $\\$300{,}000$. The renovation does not shrink with the rate. Only the perpetuity does.",
  "",
  "At $6\\%$ the maintenance perpetuity falls to $15{,}000/0.06 = 250{,}000$. Adding the same $\\$50{,}000$ renovation gives $\\$300{,}000$. That is the extra arithmetic. This letter does not rebuild the $4.5\\%$ pair.",
  "",
  "**1.** Recompute maintenance at the new rate, then add the unchanged renovation:",
  "",
  "$$15000/0.06 + 50000 = 250000 + 50000 = 300000$$",
  "",
  "**2.** The trap is scaling the whole $\\$383{,}333$ by $4.5/6$, which would report about $\\$287{,}500$ and miss that the renovation is rate-invariant. A solver who forgot to add $\\$50{,}000$ would stop at $\\$250{,}000$.",
  "",
  "A higher rate cheapens future maintenance and leaves today's renovation untouched. The opposite verdict would need the renovation to be discounted too. With it paid today, the recovered $6\\%$ combined total is $\\$300{,}000$.",
  "",
  "The recovered $6\\%$ combined total is $\\$300{,}000$, so the statement is True.",
]);

add("math-11-94:A", [
  "The statement is a claim about the rental property's growing-perpetuity fair value. Next year's rent is $\\$24{,}000$, growth is $2.5\\%$, and the required return is $8\\%$. The model is next year's rent over the spread $r-g$.",
  "",
  "The overview recovered $24{,}000/(0.08-0.025) = 436{,}363.64$. The spread $5.5\\%$ is the whole model. This letter does not rebuild a no-growth value.",
  "",
  "**1.** The trap is $24{,}000/0.08 = 300{,}000$, the no-growth value from letter B. Growth is in the stem and belongs in the denominator as $r-g$, not as an afterthought.",
  "",
  "**2.** A solver who used $24{,}000 \\times 1.025 / 0.055$ would have grown $D_1$ into $D_2$ and overstated the price. The stem already gave next year's cash flow, so $D_1$ is $\\$24{,}000$ as written.",
  "",
  "The opposite verdict would need a different spread. If growth were ignored, the price would be $\\$300{,}000$. With $g=0.025$ and $r=0.08$, the recovered fair value is about $\\$436{,}363.64$.",
  "",
  "The recovered fair value is about $\\$436{,}363.64$, so the statement is True.",
]);

add("math-11-94:B", [
  "The statement claims that if the cash flows did not grow, the plain-perpetuity fair value $\\$300{,}000$ would be higher than the growing-perpetuity value $\\$436{,}363.64$. That ranking is backwards.",
  "",
  "No growth uses $r$ alone in the denominator: $24{,}000/0.08 = 300{,}000$. Then $300{,}000 < 436{,}363.64$. Growth raises value when $g < r$. The recovered no-growth value is the smaller of the two.",
  "",
  "**1.** The trap is thinking that growth is a risk that must cut today's price. In the Gordon-style model, extra future rents raise the price as long as they do not outrun the required return.",
  "",
  "**2.** A solver who compared $\\$300{,}000$ with a miscomputed growing value below $\\$300{,}000$ could manufacture the claim. The honest growing value is $\\$436{,}364$, which sits above, not below.",
  "",
  "The opposite verdict would need $g$ negative, a shrinking rent. The stem's $2.5\\%$ growth is positive and below $8\\%$, so it lifts the price. The recovered no-growth value is $\\$300{,}000$, lower than the growing value, so the statement is False.",
]);

add("math-11-94:D", [
  "The statement lowers the required return to $6\\%$ and claims the growing-perpetuity fair value would be about $\\$715{,}714.29$. A lower required return does raise the price, but not to that figure.",
  "",
  "The new spread is $0.06-0.025=0.035$. Then $24{,}000/0.035 = 685{,}714.29$, not the claimed $\\$715{,}714.29$. The extra $\\$30{,}000$ is a slip on the new denominator.",
  "",
  "**1.** The trap is $24{,}000/0.0335$ or adding $\\$30{,}000$ onto the recovered $\\$685{,}714$. The spread is $3.5\\%$, and $24{,}000/0.035 = 685{,}714.29$.",
  "",
  "**2.** A solver who kept $r-g=0.055$ and then scaled $436{,}364$ by $8/6$ would report about $\\$581{,}818$, a different wrong neighbour. The honest rewrite replaces the denominator, not a proportional scale of the old price.",
  "",
  "The opposite verdict would need $24{,}000$ over $0.0335$. With $r=0.06$ and $g=0.025$, the recovered value is $\\$685{,}714.29$, not $\\$715{,}714.29$.",
  "",
  "The recovered $6\\%$ required-return value is $\\$685{,}714.29$, not $\\$715{,}714.29$, so the statement is False.",
]);

add("math-11-95:A", [
  "The statement claims the next dividend is $\\$3.09$. Gordon growth uses next year's dividend $D_1$, not the dividend just paid. The stock just paid $\\$3.00$, denoted $D_0$, and dividends grow at $3\\%$ forever.",
  "",
  "The extra arithmetic is only applying that one growth step. The $9\\%$ required return does not enter until letter B's price.",
  "",
  "**1.** Grow the just-paid dividend once:",
  "",
  "$$3.00 \\times 1.03 = 3.09$$",
  "",
  "**2.** The trap is feeding the just-paid $\\$3.00$ straight into $D_1/(r-g)$. That understates the price and is letter C's neighbourhood. Another trap is $3.00 \\times 1.09$, mixing the required return into the dividend.",
  "",
  "A solver who used $3.00 \\times 1.03^2 = 3.1827$ would have skipped ahead to $D_2$. The perpetuity formula already grows from $D_1$ onward; only one explicit growth step is needed up front. The opposite verdict would need a different $D_0$ or a different $g$.",
  "",
  "The recovered next dividend is $\\$3.09$, so the statement is True.",
]);

add("math-11-95:B", [
  "The statement claims the fair value per share is about $\\$54.50$. Gordon growth is $D_1$ over $r-g$. Letter A already has $D_1=3.09$, and $r-g=0.09-0.03=0.06$.",
  "",
  "The overview recovered $P = 3.09/0.06 = 51.50$. The claim writes $\\$54.50$, which is $\\$3$ too high. That extra $\\$3$ looks like adding $D_0$ onto $\\$51.50$, or using $3.27/0.06$.",
  "",
  "**1.** The recovered pair is $\\$3.09$ over $6$ points, which is $\\$51.50$. There is no leftover fraction.",
  "",
  "**2.** A solver who used $D_0=3.00$ over $0.06$ would report $\\$50.00$, too low rather than too high. A solver who used $3.09/0.0567$ after shrinking the spread would wander toward $\\$54.50$. The stem's spread is $6$ points, not $5.67$.",
  "",
  "The opposite verdict would need $D_1=3.27$ at the same spread, or a $5.67$-point spread at $D_1=3.09$. With $3.09$ over $0.06$, the recovered fair value is $\\$51.50$, not $\\$54.50$.",
  "",
  "The recovered fair value is $\\$51.50$, not $\\$54.50$, so the statement is False.",
]);

add("math-11-96:B", [
  "The statement claims Deal 2's fair value exceeds its $\\$170{,}000$ asking price by more than $\\$60{,}000$. Deal 2 is a growing perpetuity starting at $\\$14{,}000$ next year, growing, at a $10\\%$ required return. Deal 1 is the level $\\$18{,}000$ stream, a different letter.",
  "",
  "Deal 2's fair value is $14{,}000/(0.10-0.04) = 233{,}333.33$. Against the same $\\$170{,}000$ sticker the cushion is about $\\$63{,}333$, which clears $\\$60{,}000$.",
  "",
  "**1.** Subtract the asking price from the recovered growing value:",
  "",
  "$$233{,}333.33 - 170{,}000 = 63{,}333.33$$",
  "",
  "**2.** Then $63333 > 60000$. The trap is using $14{,}000/0.10 = 140{,}000$ and calling Deal 2 a bad buy. Growth of $4\\%$ is in the stem and is what lifts the value above $\\$170{,}000$.",
  "",
  "A solver who compared Deal 1's $18{,}000/0.10 = 180{,}000$ here would report only a $\\$10{,}000$ cushion and fail the cutoff. The claim names Deal 2. The opposite verdict would need a cushion of $\\$60{,}000$ or less.",
  "",
  "The recovered Deal 2 cushion is about $\\$63{,}333.33$, so the statement is True.",
]);

add("math-11-97:A", [
  "The statement is a claim about how much must be invested today, under continuous compounding at $5.5\\%$, to have $\\$250{,}000$ in $12$ years. Continuous discounting packs twelve years into the exponent $-0.055 \\times 12 = -0.66$.",
  "",
  "The overview recovered $250{,}000 e^{-0.66} \\approx 129{,}213.75$. This letter is reading that continuous deposit, not rebuilding $e^{-0.66}$ and not the annual-compounding neighbour.",
  "",
  "**1.** The trap is $250{,}000 / 1.055^{12} \\approx 131{,}495$, the annual-compounding deposit from letter B. This letter asks for the continuous figure, which sits a little lower because continuous discounting is slightly stronger.",
  "",
  "**2.** A solver who used $250{,}000 e^{-0.055} \\approx 236{,}630$ would have discounted only one year. A solver who used $250{,}000 \\times e^{0.66}$ would have compounded forward and reported a future value.",
  "",
  "The opposite verdict would need a different rate or a different horizon. With $12$ years at continuous $5.5\\%$, the recovered present value is about $\\$129{,}213.75$.",
  "",
  "The recovered continuous present value is about $\\$129{,}213.75$, so the statement is True.",
]);

add("math-11-97:C", [
  "The statement claims the difference between the annual-compounding present value and the continuous-compounding present value is about $\\$4{,}280.35$. Those two recovered deposits are letter B's $\\$131{,}495.10$ and letter A's $\\$129{,}213.75$.",
  "",
  "The two recovered deposits differ by about $\\$2{,}281.35$, not the claimed $\\$4{,}280.35$. The claimed figure is almost double the true gap.",
  "",
  "**1.** Subtract the two recovered deposits:",
  "",
  "$$131{,}495.10 - 129{,}213.75 = 2{,}281.35$$",
  "",
  "**2.** The trap is subtracting from $\\$133{,}494$, or doubling the recovered gap. $2 \\times 2{,}281.35 = 4{,}562.70$, a neighbour of the claim. Another trap is using $250{,}000(1.055^{-12} - e^{-0.55})$ with a missing zero in the exponent.",
  "",
  "The opposite verdict would need a gap of $\\$4{,}280$. With the two recovered deposits as written, the spread is $131{,}495.10 - 129{,}213.75 = 2{,}281.35$, not $\\$4{,}280.35$. Continuous compounding is only a little stronger than annual compounding over twelve years at $5.5\\%$, so the gap is thousands, not a doubled thousands figure.",
  "",
  "The recovered gap is about $\\$2{,}281.35$, not $\\$4{,}280.35$, so the statement is False.",
]);

add("math-11-97:E", [
  "The statement claims the continuously compounded annual discount factor is about $0.9465$, meaning about $5.35\\%$ of value is lost to discounting each year. That is the one-year factor $e^{-0.055}$, not the twelve-year factor from letter A.",
  "",
  "One year of continuous $5.5\\%$ is $e^{-0.055} \\approx 0.9465$. About $5.35\\%$ of a future dollar disappears each year. That is not a simple $5.5\\%$ haircut.",
  "",
  "**1.** The trap is quoting $1-0.055 = 0.945$ and calling it $5.5\\%$ lost. Continuous discounting at $5.5\\%$ loses a bit less than $5.5\\%$ in the first year, about $5.35\\%$.",
  "",
  "**2.** A solver who reported $e^{0.055} \\approx 1.0565$ here would have quoted the growth factor, not the discount factor. A solver who used $e^{-0.66} \\approx 0.5169$ would have quoted the twelve-year factor from letter A.",
  "",
  "The opposite verdict would need a one-year factor other than $0.9465$. With a continuous $5.5\\%$ rate, $e^{-0.055} \\approx 0.9465$, so about $5.35\\%$ is lost in the first year.",
  "",
  "The recovered one-year discount factor is about $0.9465$, so the statement is True.",
]);

add("math-11-98:A", [
  "The statement is a claim about the lump sum's future value under continuous compounding: $\\$75{,}000$ set aside today at a continuous $6.25\\%$ for nine years. The annuity comparison is a later letter.",
  "",
  "Nine years at continuous $6.25\\%$ is the exponent $0.0625 \\times 9 = 0.5625$. The overview recovered $75{,}000 e^{0.5625} \\approx 131{,}629.13$. This letter is reading that continuous pile.",
  "",
  "**1.** The trap is the discrete lump of about $\\$129{,}426$ from letter E, or the annuity of about $\\$96{,}758$. This letter asks for the continuous lump only.",
  "",
  "**2.** A solver who used $75{,}000(1.0625)^9$ would be answering the discrete-lump neighbour. A solver who used $e^{0.0625} \\approx 1.0645$ for nine years as if the exponent were already $0.5625$ without multiplying by $9$ would stop at one year.",
  "",
  "The opposite verdict would need a different rate or a different horizon. With nine years at continuous $6.25\\%$ on $\\$75{,}000$, the recovered continuous future value is about $\\$131{,}629.13$.",
  "",
  "The recovered continuous future value is about $\\$131{,}629.13$, so the statement is True.",
]);

add("math-11-98:C", [
  "The statement claims the lump-sum strategy outperforms the annuity strategy by more than $\\$30{,}000$. The lump is letter A's continuous pile, about $\\$131{,}629.13$. The annuity is nine end-of-year deposits of $\\$8{,}333.33$ growing to about $\\$96{,}757.60$.",
  "",
  "The two recovered piles differ by about $\\$34{,}871.53$, which clears $\\$30{,}000$. The full $\\$75{,}000$ earns interest from day one on the lump-sum side.",
  "",
  "**1.** Subtract the recovered annuity from the recovered lump:",
  "",
  "$$131{,}629.13 - 96{,}757.60 = 34{,}871.53$$",
  "",
  "**2.** Then $34872 > 30000$. The trap is subtracting an inflated annuity, or quoting $\\$75{,}000 - \\$8{,}333$ as if the gap were one deposit. Spreading the same $\\$75{,}000$ over nine years is what costs the annuity about $\\$35{,}000$ of future value.",
  "",
  "The opposite verdict would need a gap of $\\$30{,}000$ or less. With the two recovered piles as written, the outperformance is about $\\$34{,}872$, more than $\\$30{,}000$, so the statement is True.",
]);

add("math-11-99:A", [
  "The statement is a claim about the equipment lessor's five beginning-of-year payments of $\\$4{,}200$ at $8\\%$, an annuity due. Due means the first payment is cash today. The owner's separate $\\$20{,}000$ continuous investment is a different component.",
  "",
  "The overview recovered that present value as about $\\$18{,}110.94$, from the ordinary $\\$16{,}769.39$ scaled by $1.08$. This letter is reading the due present cost, not rebuilding the ordinary factor from scratch.",
  "",
  "**1.** The trap is reporting the ordinary $\\$16{,}769.39$ and stopping. Due payments are earlier, so they are worth more today. Multiplying the ordinary present value by $1.08$ is the standard due adjustment.",
  "",
  "**2.** A solver who used $4{,}200 \\times 5 = 21{,}000$ would skip discounting. A solver who discounted the first payment as well would understate a due stream. The first $\\$4{,}200$ is not discounted.",
  "",
  "The opposite verdict would need ordinary timing. With beginning-of-year payments at $8\\%$ for five years, the recovered annuity-due present value is about $\\$18{,}110.94$.",
  "",
  "The recovered annuity-due present value is about $\\$18{,}110.94$, so the statement is True.",
]);

add("math-11-99:C", [
  "The statement claims the $\\$20{,}000$ investment under continuous compounding at a nominal $6\\%$ accumulates after $7$ years to about $\\$31{,}439.24$. Seven years at continuous $6\\%$ is the exponent $0.42$.",
  "",
  "The overview recovered $20{,}000 e^{0.42} \\approx 30{,}439.24$, not the claimed $\\$31{,}439.24$. The extra $\\$1{,}000$ is a transcription slip, the same extra-thousand pattern as other false letters in this stretch.",
  "",
  "**1.** The trap is adding $\\$1{,}000$ onto a correct continuous pile, or using $e^{0.45}$. The recovered continuous result is about $\\$30{,}439$.",
  "",
  "**2.** A solver who used $20{,}000(1.06)^7 \\approx 30{,}073$ would be answering a discrete neighbour, still not $\\$31{,}439$. A solver who used $e^{0.06 \\times 8}$ would have run eight years.",
  "",
  "The opposite verdict would need $20{,}000 e^{0.42}$ to equal $31{,}439$. It equals about $30{,}439$. Adding a round thousand to a correct continuous pile is how the claim is manufactured. The recovered continuous accumulation is about $\\$30{,}439.24$, not $\\$31{,}439.24$, so the statement is False.",
]);

add("math-11-100:A", [
  "The statement is a claim about Component 1's accumulated value: $\\$150{,}000$ invested today at continuous $5\\%$ for $10$ years. Ten years at continuous $5\\%$ is the exponent $0.5$. The other three components are separate tools.",
  "",
  "The overview recovered $150{,}000 e^{0.5} \\approx 247{,}308.20$. This letter is reading Component 1's future pile, not a present-day outlay and not Component 2's discount.",
  "",
  "**1.** The trap is quoting the opening $\\$150{,}000$ as if it were already the accumulated value. This letter asks for the ten-year continuous result.",
  "",
  "**2.** A solver who used $150{,}000(1.05)^{10} \\approx 244{,}335$ would be answering a discrete neighbour. A solver who used $e^{0.05}$ without the ten-year factor would report one year of growth.",
  "",
  "The opposite verdict would need a different rate or horizon. With ten years at continuous $5\\%$ on $\\$150{,}000$, the recovered continuous pile is about $\\$247{,}308.20$. Components 2 through 4 do not mix into this letter.",
  "",
  "The recovered continuous pile is about $\\$247{,}308.20$, so the statement is True.",
]);

add("math-11-100:B", [
  "The statement claims Component 2's required deposit today, using discrete annual compounding, is about $\\$57{,}396.85$. Component 2 is an $\\$80{,}000$ bill due in six years at $6\\%$ annual compounding.",
  "",
  "A future $\\$80{,}000$ at $6\\%$ for six years discounts to about $\\$56{,}396.85$, not the claimed $\\$57{,}396.85$. The extra $\\$1{,}000$ is a transcription slip.",
  "",
  "**1.** The trap is adding $\\$1{,}000$ onto a correct discount, or using $(1.06)^5$ as if the bill were five years out. The recovered Component 2 deposit is about $\\$56{,}397$.",
  "",
  "**2.** A solver who used continuous discounting, $80{,}000 e^{-0.36}$, would report a slightly different neighbour, still not $\\$57{,}397$. A solver who reported $\\$80{,}000$ itself would skip discounting entirely.",
  "",
  "The opposite verdict would need $80{,}000 / (1.06)^6$ to equal $57{,}396.85$. It equals about $56{,}396.85$. Adding a round thousand to a correct six-year discount is how the claim is manufactured. The recovered deposit today is about $\\$56{,}396.85$, not $\\$57{,}396.85$, so the statement is False.",
]);

add("math-11-100:C", [
  "The statement is a claim about Component 3: the present value of a $12$-year ordinary annuity of $\\$10{,}000$ at $7\\%$. That is a settlement stream, not Component 1's continuous pile and not Component 4's growing perpetuity.",
  "",
  "The overview recovered that present value as about $\\$79{,}429.40$. This letter is reading the settlement value. It does not rebuild $1-(1.07)^{-12}$ over $0.07$.",
  "",
  "**1.** The trap is $10{,}000 \\times 12 = 120{,}000$, the undiscounted checks. Discounting is what cuts that pile to about $\\$79{,}429$.",
  "",
  "**2.** A solver who treated the twelve payments as due would overstate today's cost. A solver who used $10{,}000/0.07 \\approx 142{,}857$ would have quoted a perpetuity, Component 4's style of model with the wrong payment.",
  "",
  "The opposite verdict would need a different rate or a different horizon. With twelve ordinary $\\$10{,}000$ payments at $7\\%$, the recovered Component 3 present value is about $\\$79{,}429.40$.",
  "",
  "The recovered Component 3 present value is about $\\$79{,}429.40$, so the statement is True.",
]);

add("math-11-100:D", [
  "The statement is a claim about Component 4: a growing perpetuity paying $\\$5{,}000$ next year, growing at $2\\%$ forever, at a $7\\%$ required return. The claim says the present value is exactly $\\$100{,}000$.",
  "",
  "The growing perpetuity is $5{,}000/(0.07-0.02) = 100{,}000$. The round $\\$100{,}000$ is exact. Next year's $\\$5{,}000$ over a $5$-point spread is a clean hundred thousand.",
  "",
  "**1.** The trap is $5{,}000/0.07 \\approx 71{,}429$, the no-growth value. Growth of $2\\%$ belongs in the denominator as $r-g$.",
  "",
  "**2.** Another trap is $5{,}000 \\times 1.02 / 0.05 = 102{,}000$, growing $D_0$ when the stem already gave next year's payment. $D_1$ is $\\$5{,}000$ as written, so the extra $1.02$ does not belong in the numerator.",
  "",
  "The opposite verdict would need a different spread. With $r-g=0.05$ and $D_1=5{,}000$, Component 4 is exactly $\\$100{,}000$, not an approximation.",
  "",
  "The recovered Component 4 value is exactly $\\$100{,}000$, so the statement is True.",
]);

const r = applyBodies(bodies);
console.log("81-100 applied", r.n, "wrote", r.wrote);
if (r.errors.length) console.log("ERRORS", r.errors);
const bad = r.stats.filter((s) => !s.ok);
console.log("out of range", bad.map((s) => s.key + " " + s.wc).join(", ") || 0);
for (const s of r.stats) if (!s.ok) console.log(s.key, s.wc);
