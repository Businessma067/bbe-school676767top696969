import { thickenLetters } from "./_thicken_apply.mjs";

const extras = {
  "math-5-2": {
    3: `The ten-and-ten mix is also a check on whether the two recovered prices are being used as a pair. Ten notebooks without the pens would be $\\$35$, and ten pens without the notebooks would be $\\$18$. Neither of those one-sided baskets is $\\$53$. The claim is the sum, and the sum is what a purchasing clerk would actually be quoted.

A second trap is to treat $\\$53$ as if it were a round $\\$50$ plus a $\\$3$ notebook, or as $\\$185 \\times \\frac{10}{40}$ from Invoice #101. Scaling one invoice by $\\frac{10}{40}$ keeps the $40$-to-$25$ mix inside the scale factor and produces $\\$46.25$, not $\\$53$. The only mix that is ten of each is the mix that uses both recovered unit prices at count ten.

If the supplier later changed the pen price and left notebooks alone, this letter's $\\$53$ would move by ten times that change and the two printed invoices would no longer share a common $y$. With the invoices as printed this month, the ten-and-ten quote is pinned.`,
    4: `Invoice #102's printed $\\$160.50$ is an observation in the stem, sitting in the same table as Invoice #101. Changing a printed observation is not a new mix; it is a contradiction of the page. The letter's job is to say that out loud, then show that the recovered prices rebuild the printed number rather than the claimed one.

A clerk who copied Invoice #101's $\\$185$ and subtracted a round $\\$12.50$ "volume discount" can manufacture $\\$172.50$ without ever touching fifteen notebooks or sixty pens. Another clerk who priced sixty pens at $\\$2.00$ even and fifteen notebooks at $\\$3.50$ would get $\\$172.50$ exactly: $52.50+120=172.50$. That $\\$2.00$ pen is letter B's neighbourhood, twenty cents above the recovered $1.80$, and it is the cleanest algebraic route to the false total.

Because both invoices must share prices, a $\\$172.50$ on Invoice #102 would force a different $y$, and that $y$ would then fail Invoice #101's $\\$185$. The two rows cannot be edited independently. The claimed total is not a nearby rounding of $\\$160.50$; it is a different product.`,
  },
  "math-5-3": {
    2: `The matinee is the child-heavy session: $150$ child tickets against $90$ adult. That mix is why the average ticket, $2130/240=8.875$, sits closer to $7$ than to $12$. A false $\\$2{,}050$ would drop that average to about $8.54$, as if children had been $6.47$ or adults $11.11$. Neither of those unit prices survives the evening session.

The $\\$80$ gap is also $10$ adult tickets at $\\$8$, or about $11$ child tickets at $\\$7$. Nothing in the box-office log describes $10$ unpaid adults or $11$ unpaid children. The logged $\\$2{,}130$ already counts $90$ and $150$ as paid. Inventing complimentary tickets is a story the stem does not tell.

If the matinee really had generated $\\$2{,}050$, the overview's substitution $90a+150(55-4a)=2050$ would have produced a different adult price, and that price would then have failed $160a+40c=2200$. With both sessions as logged, the matinee total is not a free parameter.`,
    4: `Fifty-and-fifty is the most balanced mix in the set of claims, and that is why a round $\\$1{,}000$ looks plausible: fifty pairs at a round $\\$20$. The recovered pair price is $12+7=19$, so fifty pairs are $950$. The extra dollar per pair is a rounding of the adult price to $13$, or of the child price to $8$, or of both toward $10$.

Another trap is to take half the matinee and half the evening. Half of $2130$ plus half of $2200$ is $2165$, which is not $1000$ and is not fifty-and-fifty either. Averaging sessions preserves whatever mixes those sessions had, $90/150$ and $160/40$, not $50/50$.

A box-office that actually sold fifty of each would have a row that looks like neither Saturday session. That row is this letter's extra arithmetic, and only this letter's. The overview never costed it. Once $a$ and $c$ are in hand, the costing is two multiplications and an add, and the add is $950$, not $1000$.`,
  },
  "math-5-4": {
    4: `Pickup is the one place in this task where the $\\$8$ fee must stay off. Every printed receipt in the stem is a delivery. A solver who treated "five and five" as half of Receipt A's $6$ and $4$, then kept the fee, would report $31+8=39$ and miss $\\$60$. Half of Receipt A is not five-and-five, and pickup is not delivery.

Another trap is to average the two charged totals, $(70+74)/2=72$, and call that a ten-item order. That average still contains two fees, and the item mix is $4.5$ sandwiches and $6.5$ wraps, not five and five. The recovered prices $7$ and $5$ are what turn five-and-five into $35+25=60$ with nothing sitting on top.

If the deli later waived delivery on small orders but still charged $\\$8$ on a ten-item pickup, this letter's $\\$60$ would become $\\$68$ and the claim would fail. The stem says the fee is added on every delivery, no matter the order size, and it says this order is pickup. Those two sentences together strip the fee.

The five-and-five food cost is also a useful check on the pair. Five sandwiches contribute $\\$35$ and five wraps contribute $\\$25$, so sandwiches are $35/60$ of the dollars even though the item counts are equal. That split is what a $7$-versus-$5$ pair has to produce. A $6$-and-$6$ pair would have split $\\$60$ evenly and would not match the peeled receipts.`,
  },
};

thickenLetters("01_10.json", extras);
console.log("thickened 2-4");
