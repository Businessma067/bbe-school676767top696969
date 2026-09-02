import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-2": [
    `The statement is a claim about today's notebook unit price, not about either invoice total. Notebooks and pens keep the same prices on both Silverline bills, so there is a single notebook price to recover.

The overview already recovered $x = 3.50$ as that notebook price, by reducing Invoice #102 to $x+4y=10.70$ and substituting into Invoice #101. This letter does not rebuild that pair. It only asks whether the recovered notebook price is the number in the claim.

**1.** The recovered $3.50$ is attached to notebooks, not to pens. A solver who swapped the labels would quote $\\$1.80$ here and miss the claim.

**2.** A solver who divided Invoice #101's $\\$185$ by $40$ notebooks, ignoring the $25$ pens on the same bill, would land on $\\$4.625$ and treat that as a notebook price. The pens have to be stripped out first; the overview already did that stripping.

The recovered notebook price is $\\$3.50$, so the statement is True.`,

    `The statement is a claim about today's pen unit price. Pens are the leftover unknown after the notebook price is taken out of either invoice.

The overview already recovered $y = 1.80$. The claim writes $\\$2.10$, which sits $\\$0.30$ above that leftover.

**1.** The figure $\\$2.10$ is a typical misread of Invoice #102: divide $\\$160.50$ by something near $76$ mixed items, or start from $\\$3.50$ and subtract $\\$1.40$ as if the two prices had to add to a round $\\$4.90$. Neither of those routes is the recovered pen price.

**2.** Because both invoices share the same unit prices, the pen price has to work on Invoice #101 as well as on Invoice #102. At $y=2.10$ the first bill would overshoot $\\$185$. The recovered $1.80$ is the only pen price that sits on both printed totals.

**3.** The opposite verdict would need a different printed total on one of the two invoices. With $\\$185.00$ and $\\$160.50$ as printed, a pen cannot cost $\\$2.10$.

The claimed $\\$2.10$ sits $\\$0.30$ above the recovered $\\$1.80$, so the statement is False.`,

    `The statement is a claim about Invoice #101's printed total, not about a reconstructed mix. The stem already lists $\\$185.00$ for $40$ notebooks and $25$ pens. That row is observation $(1)$ in the overview.

This letter does not recover unit prices. It asks whether the claimed total is the total on the page.

**1.** A solver who rebuilt Invoice #101 at the recovered prices $x=3.50$ and $y=1.80$ would still land on $40(3.50)+25(1.80)=185$, which is a consistency check, not a new unknown.

**2.** Mixing Invoice #102's $\\$160.50$ into this letter, or averaging the two bills, would manufacture a different total. The claim names Invoice #101 specifically.

The claimed total is the printed total on Invoice #101, so the statement is True.`,

    `This letter is not either printed invoice. Invoice #101 is $40$ notebooks and $25$ pens. Invoice #102 is $15$ notebooks and $60$ pens. The claim asks for a third mix: ten of each, purchased together at the same unit prices.

The overview already has today's notebook price $x = 3.50$ and today's pen price $y = 1.80$. The extra arithmetic is only costing the new mix.

**1.** Start from the recovered notebook price and take ten notebooks.

$$10 \\times 3.50 = 35$$

**2.** Take ten pens at the recovered pen price.

$$10 \\times 1.80 = 18$$

**3.** Add the two pieces. A transfer of goods does not create or destroy dollars here; the new mix is just a linear combination of the two recovered prices:

$$35 + 18 = 53$$

A solver who averaged the two invoice totals and scaled to twenty items would land somewhere near $\\$172.75$ and miss the claim. Averaging bills mixes quantities that are not ten-and-ten.

A solver who used Invoice #101's implied average of $\\$185/65 \\approx 2.85$ per item, then multiplied by $20$, would get about $\\$57$ and think the claim's $\\$53$ was slightly low. That average still carries the $40$-to-$25$ mix, not a balanced ten-and-ten.

Another wrong route is to take ten notebooks from Invoice #101's $40$ and ten pens from Invoice #102's $60$, then scale each invoice total by $\\frac{10}{40}$ and $\\frac{10}{60}$ separately and add. That treats the two invoices as if each item type lived on only one bill. Both item types appear on both bills, so the only honest costing is the recovered pair applied to the new counts.

What would have to change for the opposite verdict? If pens had been $\\$2.10$ as letter B claimed, ten of each would have been $35+21=56$, not $53$. If notebooks had been $\\$4.00$, the mix would have been $40+18=58$. The stem's two invoices force $x=3.50$ and $y=1.80$, and those two prices force $\\$53$ on a ten-and-ten order.

The claim also writes $\\$53.00$ with cents. There is no leftover fraction: $35$ and $18$ are both whole dollars. A rounding story is not needed.

The recovered prices on ten of each give $\\$53.00$, so the statement is True.`,

    `The statement is a claim about Invoice #102's printed total. The stem already lists $\\$160.50$ for $15$ notebooks and $60$ pens. The claim writes $\\$172.50$, which is $\\$12$ above that printed figure.

This letter is not a second solve of the $2 \\times 2$. The overview already recovered $x=3.50$ and $y=1.80$. The extra arithmetic is only rebuilding Invoice #102 at those prices, to see whether $\\$172.50$ could still be right.

**1.** Fifteen notebooks at the recovered notebook price:

$$15 \\times 3.50 = 52.50$$

**2.** Sixty pens at the recovered pen price:

$$60 \\times 1.80 = 108$$

**3.** Add the two pieces and compare with the claim:

$$52.50 + 108 = 160.50$$

The rebuilt row matches the printed $\\$160.50$, not the claimed $\\$172.50$. The gap is

$$172.50 - 160.50 = 12$$

Where does $\\$12$ come from as a trap? A solver who priced pens at letter B's false $\\$2.10$ would get $15(3.50)+60(2.10)=52.50+126=178.50$, which overshoots in the other direction. A solver who added $\\$12$ onto $\\$160.50$ by treating twelve extra pens at $\\$1.00$, or by mixing Invoice #101's $\\$185$ with a $\\$12.50$ discount story, can manufacture $\\$172.50$ without touching the actual row.

Another tempting misread: take Invoice #102's $15+60=75$ items and imagine a $\\$2.30$ average, $75 \\times 2.30 = 172.50$ exactly. That average is not the recovered mix. At $x=3.50$ and $y=1.80$ the $15$-and-$60$ mix is heavy on the cheaper pens, so the true average is $\\$160.50/75=2.14$, not $2.30$.

The printed total is an observation, not an unknown. Changing it to $\\$172.50$ would force a different pen price, and that new pair would then fail Invoice #101. With both invoices as printed, Invoice #102 cannot total $\\$172.50$.

The claimed $\\$172.50$ sits $\\$12$ above the recovered $\\$160.50$, so the statement is False.`,
  ],

  "math-5-3": [
    `The statement is a claim about today's adult ticket price, not about either session's revenue. Adult and child tickets keep the same prices across both Saturday screenings, so there is a single adult price to recover.

The overview already recovered $a = 12$ as that adult price, by dividing the evening row to $c=55-4a$ and substituting into the matinee. This letter does not rebuild that pair. It only asks whether the recovered adult price is the number in the claim.

**1.** The recovered $12$ is attached to adult tickets, not to child tickets. A solver who swapped the labels would quote $\\$7$ here.

**2.** A solver who divided the evening $\\$2{,}200$ by $160$ adults, ignoring the $40$ child tickets, would land on $\\$13.75$ and miss the claim. The child tickets have to be stripped out first.

The recovered adult price is $\\$12.00$, so the statement is True.`,

    `The statement is a claim about today's child ticket price. Child tickets are the leftover after the adult price is taken out of either session.

The overview already recovered $c = 7$. The claim writes $\\$7.00$, which is exactly that leftover.

A solver who divided the matinee $\\$2{,}130$ by $150$ child tickets, ignoring the $90$ adults, would land on $\\$14.20$ and think children were the expensive ticket. They are not: adults are $\\$12$ and children are $\\$7$.

The recovered child price is $\\$7.00$, so the statement is True.`,

    `The statement is a claim about the Saturday matinee's logged revenue. The box-office already printed $\\$2{,}130$ for $90$ adult and $150$ child tickets. The claim writes $\\$2{,}050$, which is $\\$80$ below that logged figure.

This letter is not a second solve. The overview already recovered $a=12$ and $c=7$. The extra arithmetic is only rebuilding the matinee mix at those prices.

**1.** Ninety adult tickets at the recovered adult price:

$$90 \\times 12 = 1080$$

**2.** One hundred fifty child tickets at the recovered child price:

$$150 \\times 7 = 1050$$

**3.** Add the two pieces and compare with the claim:

$$1080 + 1050 = 2130$$

The rebuilt row matches the logged $\\$2{,}130$, not the claimed $\\$2{,}050$. The gap is

$$2130 - 2050 = 80$$

The figure $\\$2{,}050$ is a typical off-by-$80$ slip: start from $90 \\times 12 = 1080$ and add $150 \\times 6.47$ as if children were slightly cheaper, or take $2{,}130$ and subtract a round $\\$80$ "group discount" that the stem never mentioned. Another route that manufactures $2050$ is $90 \\times 10 + 150 \\times 7.67$, treating adults as a round $\\$10$. None of those mixes is the recovered pair.

Because both sessions share the same prices, changing the matinee total to $\\$2{,}050$ would force a different child price, and that new pair would then fail the evening session. With both rows as logged, the matinee cannot have generated $\\$2{,}050$.

A solver who used the evening total $\\$2{,}200$ here, or who averaged the two sessions, would be answering a different question. The claim names the Saturday matinee specifically.

The claimed $\\$2{,}050$ sits $\\$80$ below the recovered $\\$2{,}130$, so the statement is False.`,

    `The statement is a claim about the Saturday evening session's logged revenue. The box-office already printed $\\$2{,}200$ for $160$ adult and $40$ child tickets. The claim writes $\\$2{,}300$, which is $\\$100$ above that logged figure.

The overview already recovered $a=12$ and $c=7$. The extra arithmetic is only rebuilding the evening mix.

**1.** One hundred sixty adult tickets at $\\$12$:

$$160 \\times 12 = 1920$$

**2.** Forty child tickets at $\\$7$:

$$40 \\times 7 = 280$$

**3.** Add and compare:

$$1920 + 280 = 2200$$

The rebuilt row matches the logged $\\$2{,}200$, not $\\$2{,}300$. The gap is a round $\\$100$.

Where does $\\$2{,}300$ come from as a trap? A solver who priced adults at $\\$12.50$ would get $160(12.50)+40(7)=2000+280=2280$, nearby but not exact. A solver who added $\\$100$ onto $\\$2{,}200$ as a "round-up to the next hundred," or who used $160 \\times 13 + 40 \\times 5.50$, can manufacture $\\$2{,}300$ without touching the actual row. Averaging the two session totals and scaling to $200$ tickets is another way to wander toward $2{,}300$.

The evening session is heavier on adults than the matinee, so its average ticket is higher. That does not license rewriting the printed $\\$2{,}200$. The printed total is an observation. Changing it to $\\$2{,}300$ would break the shared-price story that also has to fit the matinee.

The claimed $\\$2{,}300$ sits $\\$100$ above the recovered $\\$2{,}200$, so the statement is False.`,

    `This letter is not either logged session. The matinee is $90$ adult and $150$ child. The evening is $160$ adult and $40$ child. The claim asks for a third mix: fifty of each, at the same ticket prices.

The overview already has $a = 12$ and $c = 7$. The extra arithmetic is only costing the new mix and comparing it with the claimed $\\$1{,}000$.

**1.** Fifty adult tickets at the recovered adult price:

$$50 \\times 12 = 600$$

**2.** Fifty child tickets at the recovered child price:

$$50 \\times 7 = 350$$

**3.** Add the two pieces:

$$600 + 350 = 950$$

The mix is $\\$950$, not $\\$1{,}000$. The gap is $\\$50$, which is exactly fifty times the $\\$1$ difference between a round $\\$10$ "average ticket" story and the true average of $(12+7)/2=9.50$. A solver who treated fifty-and-fifty as $\\$20$ per pair, $50 \\times 20 = 1000$, is using a pair price of $\\$20$ instead of $12+7=19$. That extra dollar per pair is the whole error.

A solver who used only the adult price, $50 \\times 12 + 50 \\times 12 = 1200$, would overshoot. A solver who used only the child price would undershoot at $700$. The claim's $\\$1{,}000$ sits between those two wrong extremes, which is what makes it tempting: it looks like a round compromise.

What would have to change for the opposite verdict? If child tickets had been $\\$8$, fifty of each would have been $600+400=1000$ exactly. The evening session forbids $c=8$: dividing $160a+40c=2200$ by $40$ gives $c=55-4a$, and $a=12$ forces $c=7$. With the two Saturday rows as logged, a fifty-and-fifty split cannot generate $\\$1{,}000$.

The recovered prices on fifty of each give $\\$950$, not $\\$1{,}000$, so the statement is False.`,
  ],
  "math-5-4": [
    `The statement is a claim about today's sandwich price, not about either charged total. The $\\$8$ delivery fee is not part of the sandwich price, so both receipts were peeled before the food system was solved.

The overview already recovered $x = 7$ as that sandwich price, after subtracting the fee and eliminating wraps. This letter does not rebuild that pair. It only asks whether the recovered sandwich price is the number in the claim.

**1.** The recovered $7$ is attached to sandwiches, not to wraps. A solver who quoted $\\$5$ here would have swapped the labels.

**2.** A solver who divided Receipt A's $\\$70$ by $6$ sandwiches, ignoring wraps and the fee, would land on about $\\$11.67$ and miss the claim. The fee and the wraps both have to come off first.

The recovered sandwich price is $\\$7.00$, so the statement is True.`,

    `The statement is a claim about today's wrap price. Wraps are the leftover after sandwiches are taken out of either peeled receipt.

The overview already recovered $y = 5$. The claim writes $\\$5.00$, which is exactly that leftover.

A solver who treated the $\\$8$ fee as if it belonged to the wraps, or who split $\\$70$ across $4$ wraps, would inflate the wrap price. The fee is a flat add-on, not a food price.

The recovered wrap price is $\\$5.00$, so the statement is True.`,

    `The statement is a claim about Receipt A's food subtotal, before the flat delivery fee is added. The charged total is $\\$70$. The fee is $\\$8$ on every delivery, independent of order size.

This letter does not recover unit prices first. The extra arithmetic is only peeling the fee.

**1.** Subtract the flat fee from the charged total:

$$70 - 8 = 62$$

**2.** As a check, rebuild the food mix at the recovered prices $x=7$ and $y=5$:

$$6(7) + 4(5) = 42 + 20 = 62$$

Both routes give $\\$62$. A solver who subtracted $\\$8$ twice, once per item type, would land on $\\$54$. A solver who left the fee in would report $\\$70$ as the food subtotal. The claim asks for the food layer only.

The food subtotal on Receipt A is $\\$62.00$, so the statement is True.`,

    `The statement is a claim about Receipt B's charged total, fee included. The stem already lists $\\$74.00$ as what was charged for $3$ sandwiches, $9$ wraps, plus the $\\$8$ fee.

This letter does not peel the fee and does not recover unit prices. It asks whether the claimed total is the total on the page.

A solver who reported the food subtotal $74-8=66$ here would be answering letter C's kind of question for the wrong receipt. The claim includes the fee.

The claimed total is the printed charged total on Receipt B, so the statement is True.`,

    `This letter is not either delivery receipt. Receipt A is $6$ sandwiches and $4$ wraps plus a fee. Receipt B is $3$ sandwiches and $9$ wraps plus a fee. The claim asks for a pickup order of five of each, with no delivery fee at all.

The overview already has $x = 7$ and $y = 5$. The extra arithmetic is only costing the new mix, and leaving the $\\$8$ off.

**1.** Five sandwiches at the recovered sandwich price:

$$5 \\times 7 = 35$$

**2.** Five wraps at the recovered wrap price:

$$5 \\times 5 = 25$$

**3.** Add the food pieces. Pickup means the fee is not charged:

$$35 + 25 = 60$$

A solver who added the $\\$8$ anyway, copying the delivery habit, would land on $\\$68$ and miss the claim. The whole content of this letter is that pickup strips the fee.

A solver who averaged the two charged totals and scaled to ten items would keep the fee inside the average and overshoot. Another wrong route is to take half of Receipt A's food plus a third of Receipt B's food, which does not produce five-and-five.

What would have to change for the opposite verdict? If the sandwich were $\\$8$, five of each would be $40+25=65$, not $60$. If pickup still carried the fee, the charged amount would be $68$. The stem's two peeled receipts force $x=7$ and $y=5$, and a pickup five-and-five is then $\\$60$ with nothing added on top.

The recovered food prices on five of each, with no fee, give $\\$60.00$, so the statement is True.`,
  ],

  "math-5-5": [
    `The statement is a claim about how much principal was placed in Account A, the $4\\%$ account. The two accounts together hold $\\$10{,}000$, and together they earned $\\$520$.

The overview already recovered $x = 6000$ in Account A. The claim writes $\\$6{,}500$, which overshoots that principal by $\\$500$.

**1.** The trap is splitting $\\$10{,}000$ as $6500$ and $3500$, or as $6500$ and $4500$. The second of those already fails the conserved total. The first of those fails the interest equation: $0.04(6500)+0.07(3500)=260+245=505$, which is $\\$15$ short of $\\$520$.

**2.** The recovered split is $6000$ at $4\\%$ and $4000$ at $7\\%$. That is the only pair that meets both the $\\$10{,}000$ total and the $\\$520$ of interest.

The claimed $\\$6{,}500$ sits $\\$500$ above the recovered $\\$6{,}000$, so the statement is False.`,

    `The statement is a claim about how much principal was placed in Account B, the $7\\%$ account. Account B is the leftover after Account A's recovered $6000$ is taken out of the conserved $\\$10{,}000$.

The overview already recovered $y = 4000$. The claim writes $\\$4{,}500$, which sits $\\$500$ above that leftover.

**1.** Even the claimed pair $6500+4500=11000$ already overshoots the $\\$10{,}000$ total, so the two false principals in letters A and B are not even internally consistent with each other.

**2.** At $y=4500$ the interest would be $0.04(5500)+0.07(4500)=220+315=535$, which overshoots $\\$520$. The extra $\\$500$ in the $7\\%$ account is exactly what manufactures that extra $\\$15$ of interest.

The claimed $\\$4{,}500$ sits $\\$500$ above the recovered $\\$4{,}000$, so the statement is False.`,

    `The statement is a claim about Account A's interest for the year, not about its principal. Account A pays $4\\%$ simple interest on whatever principal it holds.

The overview already recovered $x = 6000$. The extra arithmetic is only applying that $4\\%$ rate.

**1.** Interest on Account A:

$$0.04 \\times 6000 = 240$$

**2.** The claim writes $\\$260$. That figure is $4\\%$ of the false principal $6500$ from letter A, or $0.04 \\times 6500 = 260$. Using the wrong principal is the whole error.

**3.** Account A's $\\$240$ and Account B's $\\$280$ add to the year's $\\$520$, which is a consistency check on the split, not a new unknown. The claim's $\\$260$ would leave only $\\$260$ for Account B as well, as if the two accounts had earned the same dollar interest despite different rates and different principals.

The recovered interest on Account A is $\\$240$, not $\\$260$, so the statement is False.`,

    `The statement is a claim about Account B's interest for the year. Account B pays $7\\%$ simple interest on the recovered principal $y = 4000$.

**1.** Interest on Account B:

$$0.07 \\times 4000 = 280$$

**2.** The claim writes $\\$210$. That figure is $7\\%$ of $3000$, or $4.67\\%$ of $4500$, or simply $\\$520-\\$310$ after some other misread of Account A. None of those is $7\\%$ of $4000$.

**3.** A solver who computed $0.07 \\times 3000 = 210$ has used a principal that would force Account A to hold $7000$, which then fails the interest total. The recovered pair is $6000$ and $4000$, and Account B's share of the $\\$520$ is $\\$280$.

The recovered interest on Account B is $\\$280$, not $\\$210$, so the statement is False.`,

    `This letter does not need the split. The claim parks the entire $\\$10{,}000$ in Account B alone, which pays $7\\%$ simple annual interest, with no deposits or withdrawals.

The extra arithmetic is only applying that rate to the whole principal.

**1.** Start from the conserved $\\$10{,}000$, now all in Account B.

**2.** Apply Account B's $7\\%$ simple rate for one year:

$$0.07 \\times 10000 = 700$$

**3.** A solver who used Account A's $4\\%$ here would land on $\\$400$ and miss the claim. A solver who used a blended $5.2\\%$ from the actual $\\$520$ on $\\$10{,}000$ would report $\\$520$ as if the mix had not changed. The whole content of this letter is that the mix *does* change: everything sits in the higher-rate account.

Compared with the actual year's $\\$520$, the all-B schedule earns an extra $\\$180$. That extra is $0.03 \\times 6000$, the $3$-point gap applied to the money that used to sit in Account A. The claim does not ask for that comparison; it only asks for the all-B total, which is $\\$700$.

What would have to change for the opposite verdict? If Account B paid $6\\%$, the all-B interest would be $\\$600$, not $\\$700$. If the total principal were $\\$9{,}000$, the all-B interest would be $\\$630$. With $\\$10{,}000$ at $7\\%$, the figure is $\\$700$.

The whole principal at Account B's rate earns $\\$700.00$, so the statement is True.`,
  ],
};

applyLetters("01_10.json", patches);
console.log("applied 2-5");

