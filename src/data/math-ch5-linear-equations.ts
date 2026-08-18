/**
 * Chapter 5  -  Linear equations in two unknowns
 * Structured prose + markdown tables from PDF (UI-native, no screenshots).
 */

import type { MathTask } from "@/data/math-chapters";

export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [
  {
    id: `math-5-1`,
    case_id: `MATH 5.01`,
    title: `Balancing Crate Counts Between Two Depots`,
    context: `The North depot and the South depot are together holding 620 crates this week. A scheduling note observes that if 50 crates were transferred from North to South, the two depots would end up holding exactly the same number of crates.`,
    statements: [
      `The North depot currently holds 360 crates.`,
      `The South depot currently holds 240 crates.`,
      `If 30 crates were moved from South to North instead, North would then hold 390 crates.`,
      `The difference between the two depots today is 120 crates.`,
      `Moving 50 crates from North to South would leave both depots holding 310 crates each.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The North depot currently holds 360 crates.**  (true)

The statement is a claim about today's North holding, not about the equalized holdings after the transfer. North is the depot that would send crates in the note's $50$-crate move, so it has to be the larger of the two; if the labels were swapped, North would be the smaller pile.

The overview already recovered $x = 360$ as that larger holding, by adding the total $x+y=620$ to the difference $x-y=100$. This letter does not rebuild that pair. It only asks whether the recovered North count is the number in the claim.

**1.** North is the side that shrinks in the equalizing transfer, so the recovered $360$ is attached to North, not to South.

**2.** Treating the equalized $310$ as today's North count, or splitting $620$ in half from the start, would land on $310$ and miss the claim. Working from the isolated values, $310$ is the figure that is checked, not the detour that produced $620$. Halving the total is what happens *after* the transfer, not before it.

The recovered North holding is $360$, so the statement is True.`,
      `**B) The South depot currently holds 240 crates.**  (false)

South is the leftover after North's recovered $360$ is taken out of the conserved $620$. The overview already found $y = 260$. The claim writes $240$, which is $20$ crates short of that leftover.

**1.** The figure $240$ is a typical misread of the equalizing story: start from the common $310$ and subtract $70$, or treat the $50$-crate move as if it were already today's gap. Neither of those routes is the difference equation $x-y=100$.

**2.** Because a transfer of $50$ takes $50$ off one side and adds $50$ to the other, today's gap has to be $100$, not $50$ and not $70$. South is then $260$, not $240$.

**3.** The opposite verdict would need the total or the transfer note to change. With $620$ crates and a $50$-crate equalizing move, South cannot be $240$.

The claimed $240$ sits $20$ below the recovered $260$, so the statement is False.`,
      `**C) If 30 crates were moved from South to North instead, North would then hold 390 crates.**  (true)

This letter is not the overview's equalizing transfer. The note moved $50$ crates from North to South. The claim reverses the direction and uses a different amount, $30$, from South to North. North therefore *gains* crates.

The overview already has today's North holding $x = 360$. The extra arithmetic is only the reverse move:

**1.** Start from the recovered North count.

**2.** Add the $30$ crates that arrive from South:

$$360 + 30 = 390$$

**3.** Subtracting $30$ anyway, copying the overview's $x-50$ habit, would land on $330$ and miss the claim. After isolating the unknown, the check is against $30$. The figure $330$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $30$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The sign of the move is the whole content of this letter: South is the sender, North is the receiver.

**4.** After the reverse move South would be $260-30=230$, and the two depots would be further apart, not equal. The claim does not ask for that South figure; it only asks for North's new holding, which is $390$.

The recovered North count plus the reverse transfer is $390$, so the statement is True.`,
      `**D) The difference between the two depots today is 120 crates.**  (false)

Today's gap is already equation $(2)$ in the overview: $x-y=100$. The recovered counts $360$ and $260$ are $100$ apart, not $120$.

**1.** The trap is reading the note's $50$ transferred crates as the current difference, or adding $50$ onto $70$ to manufacture $120$. A transfer of $50$ closes a gap of $100$, because it takes $50$ off one side and adds $50$ to the other. The gap shrinks by twice the amount moved.

**2.** If today's difference really were $120$, the equalizing move would have to be $60$ crates, not $50$. The stem's $50$-crate note is what forces $x-y=100$.

**3.** Another wrong route is to compare North to the equalized $310$ and double that $50$-crate drop into a $120$ by mixing in an extra $20$. None of those combinations is the recovered gap.

The claim's $120$ is larger than the recovered $100$, so the statement is False.`,
      `**E) Moving 50 crates from North to South would leave both depots holding 310 crates each.**  (true)

This is the equalizing transfer that the overview already checked: North $360-50=310$ and South $260+50=310$. The letter is not a second solve. It asks what the transfer *means*.

A transfer does not create or destroy crates, so if the two holdings become equal, each must be half of the conserved $620$. That is why $310$ appears on both sides. Half the total is a consistency check on the translation, not a new unknown.

**1.** If the recovered North count had been anything other than $360$, the $50$-crate move would not have landed on half of $620$. The match to $310$ on both sides is how we know the two equations were translated correctly.

**2.** Moving $50$ from South to North instead would get $410$ and $210$, which are not equal. Working from the isolated values, $50$ is the figure that is checked, not the detour that produced $210$. Direction matters. The claim uses the note's actual direction, North to South.

Both sides of the equalizing transfer are $310$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 1,
    solution_overview: `The North depot and the South depot are together holding 620 crates this week. A scheduling note observes that if 50 crates were transferred from North to South, the two depots would end up holding exactly the same number of crates.

**Part 1: Building the system.**

Let $x$ = crates at the North depot, $y$ = crates at the South depot. The memo's transfer clue must be translated into an equation: after moving 50 crates from North to South, North would have $x - 50$ and South would have $y + 50$, and these are described as equal.

**1. Translate: combined total.** That observation becomes:

$$
x + y = 620
$$

**2. Translate: equalizing transfer.** The transfer is first written as $x - 50 = y + 50$, which rearranges to a clean difference:

$$
x - y = 100
$$

**Part 2: The model.**

$$
x + y = 620 \\tag{1}
$$

$$
x - y = 100 \\tag{2}
$$

**Part 3: Solve.**

**1.** This is now a standard sum-and-difference pair: $x + y = 620$ and $x - y = 100$.

**2.** Adding the two equations eliminates $y$:

$$
(x + y) + (x - y) = 620 + 100, \\qquad 2x = 720
$$

$$
x = 360
$$

**3.** Then substitute $x = 360$ into the total:

$$
y = 620 - 360 = 260
$$

**4.** Check the equalizing transfer:

$$
x - 50 = 360 - 50 = 310, \\qquad y + 50 = 260 + 50 = 310
$$

The two depots do end up equal, confirming the translation was correct.

**Answer.** North depot = 360 crates | South depot = 260 crates`,
  },
  {
    id: `math-5-2`,
    case_id: `MATH 5.02`,
    title: `Reading Unit Prices Off Two Supplier Invoices`,
    context: `Silverline Stationery Co. received two invoices from the same supplier this month. Notebooks and pens are billed at fixed unit prices that stayed the same on both invoices.`,
    tables_markdown: `| Invoice | Notebooks | Pens | Invoice Total |
| --- | --- | --- | --- |
| #101 | 40 | 25 | \\$185.00 |
| #102 | 15 | 60 | \\$160.50 |`,
    statements: [
      `A notebook costs \\$3.50.`,
      `A pen costs \\$2.10.`,
      `Invoice #101 (40 notebooks and 25 pens) totals \\$185.00.`,
      `10 notebooks and 10 pens purchased together would cost \\$53.00.`,
      `Invoice #102 (15 notebooks and 60 pens) totals \\$172.50.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A) A notebook costs \\$3.50.**  (true)

The statement is a claim about today's notebook unit price, not about either invoice total. Notebooks and pens keep the same prices on both Silverline bills, so there is a single notebook price to recover.

The overview already recovered $x = 3.50$ as that notebook price, by reducing Invoice #102 to $x+4y=10.70$ and substituting into Invoice #101. This letter does not rebuild that pair. It only asks whether the recovered notebook price is the number in the claim.

**1.** The recovered $3.50$ is attached to notebooks, not to pens. Swapping the labels would quote $\\$1.80$ here and miss the claim. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

**2.** Dividing Invoice #101's $\\$185$ by $40$ notebooks, ignoring the $25$ pens on the same bill, would land on $\\$4.625$ and treat that as a notebook price. The stem's recovered values line up with $40$, whereas $25$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $40$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The pens have to be stripped out first; the overview already did that stripping.

The recovered notebook price is $\\$3.50$, so the statement is True.`,
      `**B) A pen costs \\$2.10.**  (false)

The statement is a claim about today's pen unit price. Pens are the leftover unknown after the notebook price is taken out of either invoice.

The overview already recovered $y = 1.80$. The claim writes $\\$2.10$, which sits $\\$0.30$ above that leftover.

**1.** The figure $\\$2.10$ is a typical misread of Invoice #102: divide $\\$160.50$ by something near $76$ mixed items, or start from $\\$3.50$ and subtract $\\$1.40$ as if the two prices had to add to a round $\\$4.90$. Neither of those routes is the recovered pen price.

**2.** Because both invoices share the same unit prices, the pen price has to work on Invoice #101 as well as on Invoice #102. At $y=2.10$ the first bill would overshoot $\\$185$. The recovered $1.80$ is the only pen price that sits on both printed totals.

**3.** The opposite verdict would need a different printed total on one of the two invoices. With $\\$185.00$ and $\\$160.50$ as printed, a pen cannot cost $\\$2.10$.

The claimed $\\$2.10$ sits $\\$0.30$ above the recovered $\\$1.80$, so the statement is False.`,
      `**C) Invoice #101 (40 notebooks and 25 pens) totals \\$185.00.**  (true)

The statement is a claim about Invoice #101's printed total, not about a reconstructed mix. The stem already lists $\\$185.00$ for $40$ notebooks and $25$ pens. That row is observation $(1)$ in the overview.

This letter does not recover unit prices. It asks whether the claimed total is the total on the page.

**1.** Rebuilding Invoice #101 at the recovered prices $x=3.50$ and $y=1.80$ would still land on $40(3.50)+25(1.80)=185$, which is a consistency check, not a new unknown. So the letter reads the claim against $x=3.50$; $40(3.50)+25(1.80)=185$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $x=3.50$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** Mixing Invoice #102's $\\$160.50$ into this letter, or averaging the two bills, would manufacture a different total. The claim names Invoice #101 specifically.

The claimed total is the printed total on Invoice #101, so the statement is True.`,
      `**D) 10 notebooks and 10 pens purchased together would cost \\$53.00.**  (true)

This letter is not either printed invoice. Invoice #101 is $40$ notebooks and $25$ pens. Invoice #102 is $15$ notebooks and $60$ pens. The claim asks for a third mix: ten of each, purchased together at the same unit prices.

The overview already has today's notebook price $x = 3.50$ and today's pen price $y = 1.80$. The extra arithmetic is only costing the new mix.

**1.** Start from the recovered notebook price and take ten notebooks.

$$10 \\times 3.50 = 35$$

**2.** Take ten pens at the recovered pen price.

$$10 \\times 1.80 = 18$$

**3.** Add the two pieces. A transfer of goods does not create or destroy dollars here; the new mix is just a linear combination of the two recovered prices:

$$35 + 18 = 53$$

Averaging the two invoice totals and scaling to twenty items would land somewhere near $\\$172.75$ and miss the claim. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Averaging bills mixes quantities that are not ten-and-ten.

Using Invoice #101's implied average of $\\$185/65 \\approx 2.85$ per item, then multiplied by $20$, would get about $\\$57$ and think the claim's $\\$53$ was slightly low. The opposite verdict would need a different isolation than $20$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That average still carries the $40$-to-$25$ mix, not a balanced ten-and-ten.

Another wrong route is to take ten notebooks from Invoice #101's $40$ and ten pens from Invoice #102's $60$, then scale each invoice total by $\\frac{10}{40}$ and $\\frac{10}{60}$ separately and add. That treats the two invoices as if each item type lived on only one bill. Both item types appear on both bills, so the only honest costing is the recovered pair applied to the new counts.

What would have to change for the opposite verdict? If pens had been $\\$2.10$ as letter B claimed, ten of each would have been $35+21=56$, not $53$. If notebooks had been $\\$4.00$, the mix would have been $40+18=58$. The stem's two invoices force $x=3.50$ and $y=1.80$, and those two prices force $\\$53$ on a ten-and-ten order.

The claim also writes $\\$53.00$ with cents. There is no leftover fraction: $35$ and $18$ are both whole dollars. A rounding story is not needed.

The recovered prices on ten of each give $\\$53.00$, The ten-and-ten mix is also a check on whether the two recovered prices are being used as a pair. Ten notebooks without the pens would be $\\$35$, and ten pens without the notebooks would be $\\$18$. Neither of those one-sided baskets is $\\$53$. The claim is the sum, and the sum is what a purchasing clerk would actually be quoted.

A second trap is to treat $\\$53$ as if it were a round $\\$50$ plus a $\\$3$ notebook, or as $\\$185 \\times \\frac{10}{40}$ from Invoice #101. Scaling one invoice by $\\frac{10}{40}$ keeps the $40$-to-$25$ mix inside the scale factor and produces $\\$46.25$, not $\\$53$. The only mix that is ten of each is the mix that uses both recovered unit prices at count ten.

If the supplier later changed the pen price and left notebooks alone, this letter's $\\$53$ would move by ten times that change and the two printed invoices would no longer share a common $y$. With the invoices as printed this month, the ten-and-ten quote is pinned.

so the statement is True.`,
      `**E) Invoice #102 (15 notebooks and 60 pens) totals \\$172.50.**  (false)

The statement is a claim about Invoice #102's printed total. The stem already lists $\\$160.50$ for $15$ notebooks and $60$ pens. The claim writes $\\$172.50$, which is $\\$12$ above that printed figure.

This letter is not a second solve of the $2 \\times 2$. The overview already recovered $x=3.50$ and $y=1.80$. The extra arithmetic is only rebuilding Invoice #102 at those prices, to see whether $\\$172.50$ could still be right.

**1.** Fifteen notebooks at the recovered notebook price:

$$15 \\times 3.50 = 52.50$$

**2.** Sixty pens at the recovered pen price:

$$60 \\times 1.80 = 108$$

**3.** Add the two pieces and compare with the claim:

$$52.50 + 108 = 160.50$$

The rebuilt row matches the printed $\\$160.50$, not the claimed $\\$172.50$. The gap is

$$172.50 - 160.50 = 12$$

Where does $\\$12$ come from as a trap? Pricing pens at letter B's false $\\$2.10$ would get $15(3.50)+60(2.10)=52.50+126=178.50$, which overshoots in the other direction. Keeping $15(3.50)+60(2.10)=52.50+126=178.50$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Adding $\\$12$ onto $\\$160.50$ by treating twelve extra pens at $\\$1.00$, or by mixing Invoice #101's $\\$185$ with a $\\$12.50$ discount story, can manufacture $\\$172.50$ without touching the actual row. Once $185$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

Another tempting misread: take Invoice #102's $15+60=75$ items and imagine a $\\$2.30$ average, $75 \\times 2.30 = 172.50$ exactly. That average is not the recovered mix. At $x=3.50$ and $y=1.80$ the $15$-and-$60$ mix is heavy on the cheaper pens, so the true average is $\\$160.50/75=2.14$, not $2.30$.

The printed total is an observation, not an unknown. Changing it to $\\$172.50$ would force a different pen price, and that new pair would then fail Invoice #101. With both invoices as printed, Invoice #102 cannot total $\\$172.50$.

The claimed $\\$172.50$ sits $\\$12$ above the recovered $\\$160.50$, Invoice #102's printed $\\$160.50$ is an observation in the stem, sitting in the same table as Invoice #101. Changing a printed observation is not a new mix; it is a contradiction of the page. The letter's job is to say that out loud, then show that the recovered prices rebuild the printed number rather than the claimed one.

A clerk who copied Invoice #101's $\\$185$ and subtracted a round $\\$12.50$ "volume discount" can manufacture $\\$172.50$ without ever touching fifteen notebooks or sixty pens. Another clerk who priced sixty pens at $\\$2.00$ even and fifteen notebooks at $\\$3.50$ would get $\\$172.50$ exactly: $52.50+120=172.50$. That $\\$2.00$ pen is letter B's neighbourhood, twenty cents above the recovered $1.80$, and it is the cleanest algebraic route to the false total.

Because both invoices must share prices, a $\\$172.50$ on Invoice #102 would force a different $y$, and that $y$ would then fail Invoice #101's $\\$185$. The two rows cannot be edited independently. The claimed total is not a nearby rounding of $\\$160.50$; it is a different product.

so the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 2,
    solution_overview: `Silverline Stationery Co. received two invoices from the same supplier this month.

**Part 1: Building the system.**

Let $x$ = price of one notebook, $y$ = price of one pen.

**1. Translate: Invoice #101.** That observation becomes:

$$
40x + 25y = 185.00
$$

**2. Translate: Invoice #102.** That observation becomes:

$$
15x + 60y = 160.50
$$

**Part 2: The model.**

$$
40x + 25y = 185.00 \\tag{1}
$$

$$
15x + 60y = 160.50 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Invoice #102 by 15 to simplify: $x + 4y = 10.70$, so $x = 10.70 - 4y$.

**2.** Substitute into Invoice #101: $40(10.70 - 4y) + 25y = 185.00$.

**3.** This expands to $428.00 - 160y + 25y = 185.00$, so $-135y = -243.00$, giving

$$
y = \\frac{243.00}{135} = 1.80
$$

**4.** Then

$$
x = 10.70 - 4(1.80) = 10.70 - 7.20 = 3.50
$$

**Answer.** Notebook = \\$3.50 | Pen = \\$1.80`,
  },
  {
    id: `math-5-3`,
    case_id: `MATH 5.03`,
    title: `Pricing Adult and Child Tickets From a Box-Office Summary`,
    context: `The Riverside Community Cinema's box-office system logged ticket counts and revenue for two Saturday screenings of the same film. Adult and child tickets are sold at fixed prices throughout the day.`,
    tables_markdown: `| Session | Adult Tickets | Child Tickets | Revenue |
| --- | --- | --- | --- |
| Saturday Matinee | 90 | 150 | \\$2,130 |
| Saturday Evening | 160 | 40 | \\$2,200 |`,
    statements: [
      `An adult ticket costs \\$12.00.`,
      `A child ticket costs \\$7.00.`,
      `The Saturday matinee (90 adult, 150 child) generated \\$2,050.00 in revenue.`,
      `The Saturday evening session (160 adult, 40 child) generated \\$2,300.00 in revenue.`,
      `50 adult tickets and 50 child tickets together would generate \\$1,000.00.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) An adult ticket costs \\$12.00.**  (true)

The statement is a claim about today's adult ticket price, not about either session's revenue. Adult and child tickets keep the same prices across both Saturday screenings, so there is a single adult price to recover.

The overview already recovered $a = 12$ as that adult price, by dividing the evening row to $c=55-4a$ and substituting into the matinee. This letter does not rebuild that pair. It only asks whether the recovered adult price is the number in the claim.

**1.** The recovered $12$ is attached to adult tickets, not to child tickets. Swapping the labels would quote $\\$7$ here. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

**2.** Dividing the evening $\\$2{,}200$ by $160$ adults, ignoring the $40$ child tickets, would land on $\\$13.75$ and miss the claim. That is the fork: $160$ belongs to the recovered isolation, $40$ belongs to the discarded mix. The child tickets have to be stripped out first.

The recovered adult price is $\\$12.00$, so the statement is True.`,
      `**B) A child ticket costs \\$7.00.**  (true)

The statement is a claim about today's child ticket price at Riverside Community Cinema, not about either Saturday session's logged revenue. Adult and child tickets keep the same prices across both screenings, so there is a single child price sitting under both rows.

Child tickets are the leftover after the adult price is taken out of either session. The overview already recovered $c = 7$. The claim writes $\\$7.00$, which is exactly that leftover. This letter does not rebuild the pair $a=12$ and $c=7$. It only asks whether the recovered child price is the number in the claim.

**1.** The recovered $7$ is attached to child tickets, not to adult tickets. Swapping the labels would quote $\\$12$ here and miss that children are the cheaper ticket. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence.

**2.** Dividing the matinee $\\$2{,}130$ by $150$ child tickets, ignoring the $90$ adults, would land on $\\$14.20$ and think children were the expensive ticket. After isolating the unknown, the check is against $150$. The figure $90$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $150$ stays in the write-up. That contrast is the reason the verdict goes the way it does. They are not: adults are $\\$12$ and children are $\\$7$. The trap figure $\\$14.20$ is what a child-only split of the matinee manufactures.

The opposite verdict would need a different logged total on one of the two sessions. With $\\$2{,}130$ and $\\$2{,}200$ as printed, a child ticket cannot cost anything other than $\\$7$.

The recovered child price matches the claimed $\\$7.00$, so the statement is True.`,
      `**C) The Saturday matinee (90 adult, 150 child) generated \\$2,050.00 in revenue.**  (false)

The statement is a claim about the Saturday matinee's logged revenue. The box-office already printed $\\$2{,}130$ for $90$ adult and $150$ child tickets. The claim writes $\\$2{,}050$, which is $\\$80$ below that logged figure.

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

Using the evening total $\\$2{,}200$ here, or averaging the two sessions, would be answering a different question. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim names the Saturday matinee specifically.

The claimed $\\$2{,}050$ sits $\\$80$ below the recovered $\\$2{,}130$, The matinee is the child-heavy session: $150$ child tickets against $90$ adult. That mix is why the average ticket, $2130/240=8.875$, sits closer to $7$ than to $12$. A false $\\$2{,}050$ would drop that average to about $8.54$, as if children had been $6.47$ or adults $11.11$. Neither of those unit prices survives the evening session.

The $\\$80$ gap is also $10$ adult tickets at $\\$8$, or about $11$ child tickets at $\\$7$. Nothing in the box-office log describes $10$ unpaid adults or $11$ unpaid children. The logged $\\$2{,}130$ already counts $90$ and $150$ as paid. Inventing complimentary tickets is a story the stem does not tell.

If the matinee really had generated $\\$2{,}050$, the overview's substitution $90a+150(55-4a)=2050$ would have produced a different adult price, and that price would then have failed $160a+40c=2200$. With both sessions as logged, the matinee total is not a free parameter.

so the statement is False.`,
      `**D) The Saturday evening session (160 adult, 40 child) generated \\$2,300.00 in revenue.**  (false)

The statement is a claim about the Saturday evening session's logged revenue. The box-office already printed $\\$2{,}200$ for $160$ adult and $40$ child tickets. The claim writes $\\$2{,}300$, which is $\\$100$ above that logged figure.

The overview already recovered $a=12$ and $c=7$. The extra arithmetic is only rebuilding the evening mix.

**1.** One hundred sixty adult tickets at $\\$12$:

$$160 \\times 12 = 1920$$

**2.** Forty child tickets at $\\$7$:

$$40 \\times 7 = 280$$

**3.** Add and compare:

$$1920 + 280 = 2200$$

The rebuilt row matches the logged $\\$2{,}200$, not $\\$2{,}300$. The gap is a round $\\$100$.

Where does $\\$2{,}300$ come from as a trap? Pricing adults at $\\$12.50$ would get $160(12.50)+40(7)=2000+280=2280$, nearby but not exact. Once $160(12.50)+40(7)=2000+280=2280$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Adding $\\$100$ onto $\\$2{,}200$ as a "round-up to the next hundred," or using $160 \\times 13 + 40 \\times 5.50$, can manufacture $\\$2{,}300$ without touching the actual row. The path that matches the stem therefore holds $160 \\times 13 + 40 \\times 5.50$ fixed and only then reads the claim. Averaging the two session totals and scaling to $200$ tickets is another way to wander toward $2{,}300$.

The evening session is heavier on adults than the matinee, so its average ticket is higher. That does not license rewriting the printed $\\$2{,}200$. The printed total is an observation. Changing it to $\\$2{,}300$ would break the shared-price story that also has to fit the matinee.

The claimed $\\$2{,}300$ sits $\\$100$ above the recovered $\\$2{,}200$, so the statement is False.`,
      `**E) 50 adult tickets and 50 child tickets together would generate \\$1,000.00.**  (false)

This letter is not either logged session. The matinee is $90$ adult and $150$ child. The evening is $160$ adult and $40$ child. The claim asks for a third mix: fifty of each, at the same ticket prices.

The overview already has $a = 12$ and $c = 7$. The extra arithmetic is only costing the new mix and comparing it with the claimed $\\$1{,}000$.

**1.** Fifty adult tickets at the recovered adult price:

$$50 \\times 12 = 600$$

**2.** Fifty child tickets at the recovered child price:

$$50 \\times 7 = 350$$

**3.** Add the two pieces:

$$600 + 350 = 950$$

The mix is $\\$950$, not $\\$1{,}000$. The gap is $\\$50$, which is exactly fifty times the $\\$1$ difference between a round $\\$10$ "average ticket" story and the true average of $(12+7)/2=9.50$. Treating fifty-and-fifty as $\\$20$ per pair, $50 \\times 20 = 1000$, is using a pair price of $\\$20$ instead of $12+7=19$. Working from the isolated values, $50 \\times 20 = 1000$ is the figure that is checked, not the detour that produced $12+7=19$. That extra dollar per pair is the whole error.

Using only the adult price, $50 \\times 12 + 50 \\times 12 = 1200$, would overshoot. That is why $50 \\times 12 + 50 \\times 12 = 1200$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Using only the child price would undershoot at $700$. Keeping $700$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The claim's $\\$1{,}000$ sits between those two wrong extremes, which is what makes it tempting: it looks like a round compromise.

What would have to change for the opposite verdict? If child tickets had been $\\$8$, fifty of each would have been $600+400=1000$ exactly. The evening session forbids $c=8$: dividing $160a+40c=2200$ by $40$ gives $c=55-4a$, and $a=12$ forces $c=7$. With the two Saturday rows as logged, a fifty-and-fifty split cannot generate $\\$1{,}000$.

The recovered prices on fifty of each give $\\$950$, not $\\$1{,}000$, Fifty-and-fifty is the most balanced mix in the set of claims, and that is why a round $\\$1{,}000$ looks plausible: fifty pairs at a round $\\$20$. The recovered pair price is $12+7=19$, so fifty pairs are $950$. The extra dollar per pair is a rounding of the adult price to $13$, or of the child price to $8$, or of both toward $10$.

Another trap is to take half the matinee and half the evening. Half of $2130$ plus half of $2200$ is $2165$, which is not $1000$ and is not fifty-and-fifty either. Averaging sessions preserves whatever mixes those sessions had, $90/150$ and $160/40$, not $50/50$.

A box-office that actually sold fifty of each would have a row that looks like neither Saturday session. That row is this letter's extra arithmetic, and only this letter's. The overview never costed it. Once $a$ and $c$ are in hand, the costing is two multiplications and an add, and the add is $950$, not $1000$.

so the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 3,
    solution_overview: `The Riverside Community Cinema's box-office system logged ticket counts and revenue for two Saturday screenings of the same film. Adult and child tickets are sold at fixed prices throughout the day.

**Part 1: Building the system.**

Let $a$ = adult ticket price, $c$ = child ticket price.

**1. Translate: Saturday matinee.** That observation becomes:

$$
90a + 150c = 2130
$$

**2. Translate: Saturday evening.** That observation becomes:

$$
160a + 40c = 2200
$$

**Part 2: The model.**

$$
90a + 150c = 2130 \\tag{1}
$$

$$
160a + 40c = 2200 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide the evening equation by 40: $4a + c = 55$, so $c = 55 - 4a$.

**2.** Substitute into the matinee equation: $90a + 150(55 - 4a) = 2130$.

**3.** This expands to $90a + 8250 - 600a = 2130$, so $-510a = -6120$, giving

$$
a = \\frac{6120}{510} = 12
$$

**4.** Then

$$
c = 55 - 4(12) = 55 - 48 = 7
$$

**Answer.** Adult ticket = \\$12.00 | Child ticket = \\$7.00`,
  },
  {
    id: `math-5-4`,
    case_id: `MATH 5.04`,
    title: `Stripping Out a Delivery Fee Before Pricing a Deli's Menu`,
    context: `Corner Deli delivers office lunches for a flat \\$8.00 delivery fee added on top of the food cost, no matter the order size. Receipt A: 6 sandwiches, 4 wraps, plus the \\$8.00 delivery fee  -  total charged \\$70.00. Receipt B: 3 sandwiches, 9 wraps, plus the \\$8.00 delivery fee  -  total charged \\$74.00.`,
    statements: [
      `A sandwich costs \\$7.00.`,
      `A wrap costs \\$5.00.`,
      `Receipt A's food subtotal, before the \\$8.00 delivery fee is added, is \\$62.00.`,
      `Receipt B's total, including the \\$8.00 delivery fee, is \\$74.00.`,
      `A pickup order of 5 sandwiches and 5 wraps would cost \\$60.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) A sandwich costs \\$7.00.**  (true)

The statement is a claim about today's sandwich price, not about either charged total. The $\\$8$ delivery fee is not part of the sandwich price, so both receipts were peeled before the food system was solved.

The overview already recovered $x = 7$ as that sandwich price, after subtracting the fee and eliminating wraps. This letter does not rebuild that pair. It only asks whether the recovered sandwich price is the number in the claim.

**1.** The recovered $7$ is attached to sandwiches, not to wraps. Quoting $\\$5$ here would have swapped the labels. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

**2.** Dividing Receipt A's $\\$70$ by $6$ sandwiches, ignoring wraps and the fee, would land on about $\\$11.67$ and miss the claim. The opposite verdict would need a different isolation than $6$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The fee and the wraps both have to come off first.

The recovered sandwich price is $\\$7.00$, so the statement is True.`,
      `**B) A wrap costs \\$5.00.**  (true)

The statement is a claim about today's wrap price at Corner Deli, not about either charged delivery total. Wraps are the leftover after sandwiches are taken out of a peeled receipt. The $\\$8$ delivery fee is a flat add-on, not a food price, so both receipts were peeled before the food system was solved.

The overview already recovered $y = 5$. The claim writes $\\$5.00$, which is exactly that leftover. This letter does not rebuild the pair $x=7$ and $y=5$. It only asks whether the recovered wrap price is the number in the claim.

**1.** The recovered $5$ is attached to wraps, not to sandwiches. Quoting $\\$7$ here would have swapped the labels. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Treating the $\\$8$ fee as if it belonged to the wraps, or splitting Receipt A's charged $\\$70$ across $4$ wraps, would land on $\\$17.50$ and inflate the wrap price. Keeping $4$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $\\$17.50$ is a four-wrap split of a delivery total that still contains sandwiches and a fee.

The opposite verdict would need a different peeled food subtotal on one of the two receipts. With food layers $\\$62$ and $\\$66$ as recovered, a wrap cannot cost anything other than $\\$5$.

The recovered wrap price matches the claimed $\\$5.00$, so the statement is True.`,
      `**C) Receipt A's food subtotal, before the \\$8.00 delivery fee is added, is \\$62.00.**  (true)

The statement is a claim about Receipt A's food subtotal, before the flat delivery fee is added. The charged total is $\\$70$. The fee is $\\$8$ on every delivery, independent of order size.

This letter does not recover unit prices first. The extra arithmetic is only peeling the fee.

**1.** Subtract the flat fee from the charged total:

$$70 - 8 = 62$$

**2.** As a check, rebuild the food mix at the recovered prices $x=7$ and $y=5$:

$$6(7) + 4(5) = 42 + 20 = 62$$

Both routes give $\\$62$. Subtracting $\\$8$ twice, once per item type, would land on $\\$54$. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Leaving the fee in would report $\\$70$ as the food subtotal. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The claim asks for the food layer only.

The food subtotal on Receipt A is $\\$62.00$, so the statement is True.`,
      `**D) Receipt B's total, including the \\$8.00 delivery fee, is \\$74.00.**  (true)

The statement is a claim about Receipt B's charged total, fee included. The stem already lists $\\$74.00$ as what was charged for $3$ sandwiches, $9$ wraps, plus the $\\$8$ fee. That charged figure is an observation on the page, not an unknown to recover.

This letter does not peel the fee and does not recover unit prices. It asks whether the claimed total is the total the deli charged.

Reporting the food subtotal $74-8=66$ here would be answering letter C's kind of question for the wrong receipt. Once $74-8=66$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The claim includes the fee. Rebuilding $3(7)+9(5)+8=21+45+8=74$ would still land on $\\$74$, which is a consistency check, not a new unknown. Once $3(7)+9(5)+8=21+45+8=74$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The trap is mixing Receipt A's $\\$70$ into this letter, or averaging the two charged totals toward $\\$72$. The claim names Receipt B specifically. The opposite verdict would need the stem to print a different charged total for that $3$-and-$9$ delivery.

The claimed total is the printed charged total on Receipt B, so the statement is True.`,
      `**E) A pickup order of 5 sandwiches and 5 wraps would cost \\$60.00.**  (true)

This letter is not either delivery receipt. Receipt A is $6$ sandwiches and $4$ wraps plus a fee. Receipt B is $3$ sandwiches and $9$ wraps plus a fee. The claim asks for a pickup order of five of each, with no delivery fee at all.

The overview already has $x = 7$ and $y = 5$. The extra arithmetic is only costing the new mix, and leaving the $\\$8$ off.

**1.** Five sandwiches at the recovered sandwich price:

$$5 \\times 7 = 35$$

**2.** Five wraps at the recovered wrap price:

$$5 \\times 5 = 25$$

**3.** Add the food pieces. Pickup means the fee is not charged:

$$35 + 25 = 60$$

Adding the $\\$8$ anyway, copying the delivery habit, would land on $\\$68$ and miss the claim. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The whole content of this letter is that pickup strips the fee.

Averaging the two charged totals and scaling to ten items would keep the fee inside the average and overshoot. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Another wrong route is to take half of Receipt A's food plus a third of Receipt B's food, which does not produce five-and-five.

What would have to change for the opposite verdict? If the sandwich were $\\$8$, five of each would be $40+25=65$, not $60$. If pickup still carried the fee, the charged amount would be $68$. The stem's two peeled receipts force $x=7$ and $y=5$, and a pickup five-and-five is then $\\$60$ with nothing added on top.

The recovered food prices on five of each, with no fee, give $\\$60.00$, Pickup is the one place in this task where the $\\$8$ fee must stay off. Every printed receipt in the stem is a delivery. Treating "five and five" as half of Receipt A's $6$ and $4$, then kept the fee, would report $31+8=39$ and miss $\\$60$. Working from the isolated values, $6$ is the figure that is checked, not the detour that produced $31+8=39$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Half of Receipt A is not five-and-five, and pickup is not delivery.

Another trap is to average the two charged totals, $(70+74)/2=72$, and call that a ten-item order. That average still contains two fees, and the item mix is $4.5$ sandwiches and $6.5$ wraps, not five and five. The recovered prices $7$ and $5$ are what turn five-and-five into $35+25=60$ with nothing sitting on top.

If the deli later waived delivery on small orders but still charged $\\$8$ on a ten-item pickup, this letter's $\\$60$ would become $\\$68$ and the claim would fail. The stem says the fee is added on every delivery, no matter the order size, and it says this order is pickup. Those two sentences together strip the fee.

The five-and-five food cost is also a useful check on the pair. Five sandwiches contribute $\\$35$ and five wraps contribute $\\$25$, so sandwiches are $35/60$ of the dollars even though the item counts are equal. That split is what a $7$-versus-$5$ pair has to produce. A $6$-and-$6$ pair would have split $\\$60$ evenly and would not match the peeled receipts.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 4,
    solution_overview: `Corner Deli delivers office lunches for a flat \\$8.00 delivery fee added on top of the food cost, no matter the order size. Receipt A: 6 sandwiches, 4 wraps, plus the \\$8.00 delivery fee, total charged \\$70.00.

**Part 1: Building the system.**

Let $x$ = price of one sandwich, $y$ = price of one wrap. Before writing any equation, the \\$8.00 delivery fee must be subtracted from each receipt total, since it is not part of either unknown price.

**1. Subtract the delivery fee, then write the food-price equation.** Start from the printed total: $6x + 4y = 70.00 - 8.00 = 62.00$. The clean system equation is:

$$
6x + 4y = 62.00
$$

**2. Subtract the delivery fee, then write the food-price equation.** Start from the printed total: $3x + 9y = 74.00 - 8.00 = 66.00$. The clean system equation is:

$$
3x + 9y = 66.00
$$

**Part 2: The model.**

$$
6x + 4y = 62.00 \\tag{1}
$$

$$
3x + 9y = 66.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the second equation by 2: $6x + 18y = 132$.

**2.** Subtract the first equation:

$$
(6x + 18y) - (6x + 4y) = 132 - 62
$$

$$
14y = 70, \\qquad y = 5
$$

**3.** Substitute back:

$$
3x + 9(5) = 66, \\qquad 3x = 21, \\qquad x = 7
$$

**Answer.** Sandwich = \\$7.00 | Wrap = \\$5.00`,
  },
  {
    id: `math-5-5`,
    case_id: `MATH 5.05`,
    title: `Splitting Savings Between Two Interest-Bearing Accounts`,
    context: `An investor split a total of \\$10,000 between two accounts at the start of the year: Account A pays 4% simple annual interest, and Account B pays 7% simple annual interest. No deposits or withdrawals were made all year, and together the two accounts earned \\$520.00 in interest.`,
    statements: [
      `\\$6,500 was placed in Account A.`,
      `\\$4,500 was placed in Account B.`,
      `Account A earned \\$260.00 in interest over the year.`,
      `Account B earned \\$210.00 in interest over the year.`,
      `Had the entire \\$10,000 been placed in Account B alone, total interest for the year would have been \\$700.00.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) \\$6,500 was placed in Account A.**  (false)

The statement is a claim about how much principal was placed in Account A, the $4\\%$ account. The two accounts together hold $\\$10{,}000$, and together they earned $\\$520$.

The overview already recovered $x = 6000$ in Account A. The claim writes $\\$6{,}500$, which overshoots that principal by $\\$500$.

**1.** The trap is splitting $\\$10{,}000$ as $6500$ and $3500$, or as $6500$ and $4500$. The second of those already fails the conserved total. The first of those fails the interest equation: $0.04(6500)+0.07(3500)=260+245=505$, which is $\\$15$ short of $\\$520$.

**2.** The recovered split is $6000$ at $4\\%$ and $4000$ at $7\\%$. That is the only pair that meets both the $\\$10{,}000$ total and the $\\$520$ of interest.

The claimed $\\$6{,}500$ sits $\\$500$ above the recovered $\\$6{,}000$, so the statement is False.`,
      `**B) \\$4,500 was placed in Account B.**  (false)

The statement is a claim about how much principal was placed in Account B, the $7\\%$ account. Account B is the leftover after Account A's recovered $6000$ is taken out of the conserved $\\$10{,}000$.

The overview already recovered $y = 4000$. The claim writes $\\$4{,}500$, which sits $\\$500$ above that leftover.

**1.** Even the claimed pair $6500+4500=11000$ already overshoots the $\\$10{,}000$ total, so the two false principals in letters A and B are not even internally consistent with each other.

**2.** At $y=4500$ the interest would be $0.04(5500)+0.07(4500)=220+315=535$, which overshoots $\\$520$. The extra $\\$500$ in the $7\\%$ account is exactly what manufactures that extra $\\$15$ of interest.

The claimed $\\$4{,}500$ sits $\\$500$ above the recovered $\\$4{,}000$, so the statement is False.`,
      `**C) Account A earned \\$260.00 in interest over the year.**  (false)

The statement is a claim about Account A's interest for the year, not about its principal. Account A pays $4\\%$ simple interest on whatever principal it holds.

The overview already recovered $x = 6000$. The extra arithmetic is only applying that $4\\%$ rate.

**1.** Interest on Account A:

$$0.04 \\times 6000 = 240$$

**2.** The claim writes $\\$260$. That figure is $4\\%$ of the false principal $6500$ from letter A, or $0.04 \\times 6500 = 260$. Using the wrong principal is the whole error.

**3.** Account A's $\\$240$ and Account B's $\\$280$ add to the year's $\\$520$, which is a consistency check on the split, not a new unknown. The claim's $\\$260$ would leave only $\\$260$ for Account B as well, as if the two accounts had earned the same dollar interest despite different rates and different principals.

The recovered interest on Account A is $\\$240$, not $\\$260$, so the statement is False.`,
      `**D) Account B earned \\$210.00 in interest over the year.**  (false)

The statement is a claim about Account B's interest for the year. Account B pays $7\\%$ simple interest on the recovered principal $y = 4000$.

**1.** Interest on Account B:

$$0.07 \\times 4000 = 280$$

**2.** The claim writes $\\$210$. That figure is $7\\%$ of $3000$, or $4.67\\%$ of $4500$, or simply $\\$520-\\$310$ after some other misread of Account A. None of those is $7\\%$ of $4000$.

**3.** Computing $0.07 \\times 3000 = 210$ has used a principal that would force Account A to hold $7000$, which then fails the interest total. Working from the isolated values, $0.07 \\times 3000 = 210$ is the figure that is checked, not the detour that produced $7000$. That contrast is the reason the verdict goes the way it does. The recovered pair is $6000$ and $4000$, and Account B's share of the $\\$520$ is $\\$280$.

The recovered interest on Account B is $\\$280$, not $\\$210$, so the statement is False.`,
      `**E) Had the entire \\$10,000 been placed in Account B alone, total interest for the year would have been \\$700.00.**  (true)

This letter does not need the split. The claim parks the entire $\\$10{,}000$ in Account B alone, which pays $7\\%$ simple annual interest, with no deposits or withdrawals.

The extra arithmetic is only applying that rate to the whole principal.

**1.** Start from the conserved $\\$10{,}000$, now all in Account B.

**2.** Apply Account B's $7\\%$ simple rate for one year:

$$0.07 \\times 10000 = 700$$

**3.** Using Account A's $4\\%$ here would land on $\\$400$ and miss the claim. The recovered isolation is checked against the claim using $4\\%$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using a blended $5.2\\%$ from the actual $\\$520$ on $\\$10{,}000$ would report $\\$520$ as if the mix had not changed. The path that matches the stem therefore holds $5.2\\%$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The whole content of this letter is that the mix *does* change: everything sits in the higher-rate account.

Compared with the actual year's $\\$520$, the all-B schedule earns an extra $\\$180$. That extra is $0.03 \\times 6000$, the $3$-point gap applied to the money that used to sit in Account A. The claim does not ask for that comparison; it only asks for the all-B total, which is $\\$700$.

What would have to change for the opposite verdict? If Account B paid $6\\%$, the all-B interest would be $\\$600$, not $\\$700$. If the total principal were $\\$9{,}000$, the all-B interest would be $\\$630$. With $\\$10{,}000$ at $7\\%$, the figure is $\\$700$.

The whole principal at Account B's rate earns $\\$700.00$, Parking everything in Account B is the opposite of the actual split, which put the larger principal in the lower-rate account. That is why the counterfactual $\\$700$ sits $\\$180$ above the year's real $\\$520$. The $\\$180$ is $3$ extra points on the $\\$6{,}000$ that currently sits in Account A. Reporting $\\$520$ here would be describing the actual year, not the all-B year. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

A second trap is to blend the rates, $0.04 \\times 0.5 + 0.07 \\times 0.5 = 0.055$, then take $5.5\\%$ of $\\$10{,}000$ as $\\$550$. That even mix is not the actual split and is not the all-B mix either. All-B is a $7\\%$ rate on the whole principal, one multiplication, no split.

If Account B's rate had been $5\\%$, the all-B interest would have been $\\$500$, below the actual year's $\\$520$, because moving money into B would then have been a downgrade. The stem's $7\\%$ versus $4\\%$ is what makes the all-B story an upgrade to $\\$700$. Simple interest for one year with no deposits is why that upgrade is just $0.07$ times $10000$, with no compounding and no leftover principal to track.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 5,
    solution_overview: `An investor split a total of \\$10,000 between two accounts at the start of the year: Account A pays 4% simple annual interest, and Account B pays 7% simple annual interest. No deposits or withdrawals were made all year, and together the two accounts earned \\$520.00 in interest.

**Part 1: Building the system.**

Let $x$ = amount placed in Account A, $y$ = amount placed in Account B.

**1. Translate: total split.** That observation becomes:

$$
x + y = 10000
$$

**2. Translate: total interest.** That observation becomes:

$$
0.04x + 0.07y = 520
$$

**Part 2: The model.**

$$
x + y = 10000 \\tag{1}
$$

$$
0.04x + 0.07y = 520 \\tag{2}
$$

**Part 3: Solve.**

**1.** Solve the first equation for $x$: $x = 10000 - y$.

**2.** Substitute: $0.04(10000 - y) + 0.07y = 520$.

**3.** This expands to $400 - 0.04y + 0.07y = 520$, so

$$
0.03y = 120, \\qquad y = \\frac{120}{0.03} = 4000
$$

**4.** Then

$$
x = 10000 - 4000 = 6000
$$

**Answer.** Account A = \\$6,000 | Account B = \\$4,000`,
  },
  {
    id: `math-5-6`,
    case_id: `MATH 5.06`,
    title: `Pricing Two Chair Grades From a Price Gap and a Shipment Value`,
    context: `Premium-grade office chairs are priced exactly \\$45 more per unit than Standard-grade chairs throughout the current catalogue. A recent shipment of 18 Standard chairs and 12 Premium chairs was valued at \\$9,660.00 in total.`,
    statements: [
      `A Standard chair is priced at \\$304.00.`,
      `A Premium chair is priced at \\$354.00.`,
      `The 12 Premium chairs in the shipment are worth \\$4,188.00 in total.`,
      `The price gap between one Premium chair and one Standard chair is \\$45.00.`,
      `A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than \\$3,000.00.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) A Standard chair is priced at \\$304.00.**  (true)

The statement is a claim about today's Standard chair price, not about the shipment total. Premium sits $\\$45$ above Standard throughout the catalogue, so there is a single Standard price to recover.

The overview already recovered $x = 304$ as that Standard price, by substituting $y=x+45$ into the shipment $18x+12y=9660$. This letter does not rebuild that pair. It only asks whether the recovered Standard price is the number in the claim.

**1.** The recovered $304$ is attached to Standard chairs, not to Premium. Quoting $349$ here would have swapped the grades. The recovered isolation is checked against the claim using $349$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Dividing $\\$9{,}660$ by $30$ chairs, ignoring the $\\$45$ gap, would land on $\\$322$ and miss the claim. The recovered isolation is checked against the claim using $30$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That average sits between $304$ and $349$, which is exactly where a gap-blind split has to land.

The recovered Standard price is $\\$304.00$, so the statement is True.`,
      `**B) A Premium chair is priced at \\$354.00.**  (false)

The statement is a claim about today's Premium chair price. Premium is Standard plus the catalogue gap of $\\$45$, so once Standard is in hand the Premium price is a one-step add, not a second unknown.

The overview already recovered $x=304$, so $y=304+45=349$. The claim writes $\\$354$, five dollars above $349$. This letter does not rebuild the shipment substitution. It only asks whether $\\$354$ can be the Premium price that sits $\\$45$ above $304$ and still values the shipment at $\\$9{,}660$.

**1.** Form the claimed Premium price from the recovered Standard price plus a false $\\$50$ gap, which is a typical round-up of the catalogue $\\$45$:

$$304 + 50 = 354$$

That is exactly the claimed figure. The stem's gap is $\\$45$, not $\\$50$, so this route is already the error.

**2.** Rebuild the $18$-and-$12$ shipment at $x=304$ and the claimed $y=354$:

$$18 \\times 304 + 12 \\times 354 = 5472 + 4248 = 9720$$

**3.** Compare with the printed shipment value:

$$9720 - 9660 = 60$$

Those extra $\\$60$ are twelve chairs times a $\\$5$ overstatement. Another trap is to start from the $30$-chair average $9660/30=322$ and add $\\$32$, which also manufactures something near $\\$354$. Neither route is $x+45$ at $x=304$.

A second trap sits in the $30$-chair average $9660/30=322$. Adding a round $\\$32$ onto that average manufactures $\\$354$ without ever touching the $\\$45$ gap. The average is a mixed number: it sits between $304$ and $349$ because the shipment is Standard-heavy, $18$ against $12$. It is not a Premium price.

The opposite verdict would need the catalogue gap to be $\\$50$, or the shipment to be valued at $\\$9{,}720$. With a $\\$45$ gap and a $\\$9{,}660$ shipment, Premium cannot be $\\$354$. The recovered Premium price is $349$, and $354$ is a different product.

The claimed $\\$354$ sits $\\$5$ above the recovered $\\$349$, so the statement is False.`,
      `**C) The 12 Premium chairs in the shipment are worth \\$4,188.00 in total.**  (true)

The statement is a claim about the twelve Premium chairs in the shipment, not about one Premium chair and not about the whole $\\$9{,}660$ load. The overview already recovered $y = 349$. The extra arithmetic is only multiplying that recovered unit price by twelve.

**1.** Twelve Premium chairs at the recovered Premium price:

$$12 \\times 349 = 4188$$

**2.** The matching Standard slice of the shipment, as a check that the two pieces still add to the printed total:

$$18 \\times 304 = 5472$$

$$5472 + 4188 = 9660$$

**3.** Using the false $\\$354$ from letter B would get The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

$$12 \\times 354 = 4248$$

and miss the claim by $\\$60$. Using the Standard price $304$ on the Premium chairs would get $3648$ and undershoot by $\\$540$, which is twelve times the $\\$45$ gap. Working from the isolated values, $304$ is the figure that is checked, not the detour that produced $45$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The trap figure $\\$4{,}248$ is letter B's false Premium, times twelve. Another trap is to take $12/30$ of $\\$9{,}660$, which is $\\$3{,}864$, as if every chair in the shipment had the same price. The shipment is mixed, so the Premium slice has to use $349$, not the blended $322$.

The opposite verdict would need a different recovered Premium price. With $y=349$ pinned by the $\\$45$ gap and the $\\$9{,}660$ shipment, twelve Premium chairs are worth $\\$4{,}188$, not some nearby round of the blended slice.

A clerk who quoted $12 \\times 350 = 4200$ would be rounding Premium to a neighbour of $349$ and missing the claim by $\\$12$. That $\\$12$ is not a rounding of the shipment; it is twelve times a one-dollar convenience. The recovered $349$ is what the substitution produced, and twelve of those chairs are $4188$ exactly, with no leftover cents.

The twelve Premium chairs in the shipment are worth $\\$4{,}188$, so the statement is True.`,
      `**D) The price gap between one Premium chair and one Standard chair is \\$45.00.**  (true)

The statement is a claim about the catalogue gap itself. The stem already prices Premium exactly $\\$45$ above Standard throughout the current catalogue. That is equation $(1)$ in the overview, not a recovered unknown.

Checking the recovered pair $x=304$ and $y=349$ gives the same gap:

$$349 - 304 = 45$$

Comparing Premium to the $30$-chair average $322$ would report a $\\$27$ gap and miss the claim. So the letter reads the claim against $30$; $322$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $30$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The gap in the catalogue is Premium minus Standard, not Premium minus the mixed average. Using letter B's false $\\$354$ would report a $\\$50$ gap, which is the round-up trap already named there. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

The opposite verdict would need the stem to quote a different catalogue gap. The shipment value recovers the two prices, but it does not rewrite the $\\$45$ that the catalogue already printed. Staff who treated $\\$45$ as a rumour and went looking for a recovered gap in the $\\$9{,}660$ mix would be solving for something the stem already gave.

The catalogue gap is the printed $\\$45.00$, so the statement is True.`,
      `**E) A smaller order of 5 Standard chairs and 5 Premium chairs would cost more than \\$3,000.00.**  (true)

This letter is not the shipment. The shipment is $18$ Standard and $12$ Premium. The claim asks for a smaller order of five of each, and compares that cost with a $\\$3{,}000$ cutoff.

The overview already has $x = 304$ and $y = 349$. The extra arithmetic is only costing the new mix and comparing it with the cutoff.

**1.** Five Standard chairs at the recovered Standard price:

$$5 \\times 304 = 1520$$

**2.** Five Premium chairs at the recovered Premium price:

$$5 \\times 349 = 1745$$

**3.** Add the two pieces and compare with $\\$3{,}000$:

$$1520 + 1745 = 3265$$

Since $3265 > 3000$, the smaller order clears the cutoff by $\\$265$.

Using five times the $30$-chair average $322$ on both grades would get $5 \\times 322 \\times 2 = 3220$, nearby but not the same. Working from the isolated values, $30$ is the figure that is checked, not the detour that produced $5 \\times 322 \\times 2 = 3220$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Forgetting the $\\$45$ gap and pricing both grades at $304$ would get $3040$, which still clears $\\$3{,}000$ but by only $\\$40$. The recovered comparison therefore keeps $304$ and does not substitute $3040$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using the false Premium $354$ would get $1520+1770=3290$ and still clear the cutoff, so the verdict would happen to survive that particular error. So the letter reads the claim against $354$; $1520+1770=3290$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $354$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The honest costing still uses $349$.

What would have to change for the opposite verdict? If both grades were about $\\$290$ and $\\$335$, five of each would be $3125$, still over. To fall under $\\$3{,}000$ the pair would need $5(x+y)<3000$, so $x+y<600$. With $x+y=304+349=653$, the five-and-five mix is pinned at $3265$. The shipment and the $\\$45$ gap forbid a pair summing to less than $600$.

The recovered prices on five of each give $\\$3{,}265$, which is more than $\\$3{,}000$, Five of each is a balanced order, unlike the shipment's $18$ Standard and $12$ Premium. The shipment is Standard-heavy, which is why its average price $9660/30=322$ sits closer to $304$ than to $349$. Five of each has average $(304+349)/2=326.50$, and five pairs are $5 \\times 653=3265$. That $326.50$ average is not $322$, so scaling the shipment to ten chairs would miss this letter.

The cutoff $\\$3{,}000$ is a round bar, not a recovered number. Clearing it by $\\$265$ is comfortable. Comparing $3265$ with $9660/3=3220$ would be taking a third of the shipment, which is $6$ Standard and $4$ Premium, not five and five. The recovered comparison therefore keeps $3265$ and does not substitute $4$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Thirds preserve the $18:12$ mix.

If Premium's gap over Standard had been $\\$20$ instead of $\\$45$, the pair would have been about $294$ and $314$, and five of each would have been $3040$, still over $3000$ but by much less. The stem's $\\$45$ gap plus the $\\$9{,}660$ shipment are what pin $3265$. The comparison with $3000$ is then a single inequality, not a second solve.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 6,
    solution_overview: `Premium-grade office chairs are priced exactly \\$45 more per unit than Standard-grade chairs throughout the current catalogue. A recent shipment of 18 Standard chairs and 12 Premium chairs was valued at \\$9,660.00 in total.

**Part 1: Building the system.**

Let $x$ = price of a Standard chair, $y$ = price of a Premium chair.

**1. Translate: Premium priced \\$45 above Standard.** That observation becomes:

$$
y = x + 45
$$

**2. Translate: shipment value.** That observation becomes:

$$
18x + 12y = 9660
$$

**Part 2: The model.**

$$
y = x + 45 \\tag{1}
$$

$$
18x + 12y = 9660 \\tag{2}
$$

**Part 3: Solve.**

**1.** Substitute directly: $18x + 12(x + 45) = 9660$.

**2.** This expands to $18x + 12x + 540 = 9660$, so

$$
30x = 9120, \\qquad x = \\frac{9120}{30} = 304
$$

**3.** Then

$$
y = 304 + 45 = 349
$$

**Answer.** Standard chair = \\$304.00 | Premium chair = \\$349.00`,
  },
  {
    id: `math-5-7`,
    case_id: `MATH 5.07`,
    title: `Extracting a Hidden Rate Structure From a Mobile Ad`,
    context: `ByteMobile's ad boasts a "simple plan": one customer who went 40 minutes over their allowance last month paid \\$29.00 in total. A heavy user who went 120 minutes over paid \\$53.00  -  the ad frames this as a low, predictable rate for every extra minute, on top of a small fixed monthly fee.`,
    statements: [
      `ByteMobile's fixed monthly fee is \\$17.00.`,
      `The extra-minute rate advertised is \\$0.30 per minute.`,
      `A customer using 200 extra minutes in a month would pay \\$80.00.`,
      `A customer using 0 extra minutes would pay \\$0.00 that month.`,
      `The advertised rate (\\$0.30 per minute) is more than double a rival plan's rate of \\$0.20 per minute.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) ByteMobile's fixed monthly fee is \\$17.00.**  (true)

The statement is a claim about ByteMobile's fixed monthly fee, not about the extra-minute rate. The two billed customers differ only in extra minutes, so the fee is the intercept of that line.

The overview already recovered $f = 17$ by subtracting the two bills to isolate the rate, then substituting back. This letter does not rebuild that pair. It only asks whether the recovered fee is the number in the claim.

**1.** The recovered $17$ is the amount charged even at zero extra minutes. Quoting $0.30$ here would have swapped fee and rate. Keeping $0.30$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Averaging $\\$29$ and $\\$53$ would land on $\\$41$ and treat that as a fee. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Averaging two bills that include extra minutes cannot isolate the intercept.

The recovered fixed fee is $\\$17.00$, so the statement is True.`,
      `**B) The extra-minute rate advertised is \\$0.30 per minute.**  (true)

The statement is a claim about ByteMobile's extra-minute rate, not about the fixed monthly fee. The two billed customers differ by $80$ extra minutes and by $\\$24$, so the rate is the slope of that line once the shared fee cancels.

The overview already recovered $r = 0.30$. The claim writes $\\$0.30$ per minute, which is exactly that slope. This letter does not rebuild the subtraction $80r=24$. It only asks whether the recovered rate is the number in the claim.

**1.** The recovered $0.30$ is attached to extra minutes, not to the fee. Quoting $\\$17$ here would have swapped rate and intercept. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

**2.** Dividing $\\$53$ by $120$ minutes would land on about $\\$0.44$ and forget the fee sitting under both bills. Once $120$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $\\$0.44$ is the heavy user's bill treated as if it were all extra-minute charges. The fee has to cancel before the rate appears.

The opposite verdict would need a different pair of quoted bills. With $\\$29$ at $40$ extra minutes and $\\$53$ at $120$ extra minutes, the advertised extra-minute rate cannot be anything other than $\\$0.30$.

The recovered extra-minute rate matches the claimed $\\$0.30$ per minute, so the statement is True.`,
      `**C) A customer using 200 extra minutes in a month would pay \\$80.00.**  (false)

This letter is not either billed customer. The ad quotes $40$ extra minutes at $\\$29$ and $120$ extra minutes at $\\$53$. The claim asks for a third month: $200$ extra minutes, and compares that bill with $\\$80$.

The overview already has $f = 17$ and $r = 0.30$. The extra arithmetic is only evaluating the plan at $200$ extra minutes.

**1.** Start from the recovered fee.

**2.** Add two hundred extra minutes at the recovered rate:

$$200 \\times 0.30 = 60$$

**3.** Add fee and extra-minute charges:

$$17 + 60 = 77$$

The bill is $\\$77$, not $\\$80$. The gap is $\\$3$.

Where does $\\$80$ come from as a trap? Using $f=20$ would get $20+60=80$ exactly. That is the fork: $f=20$ belongs to the recovered isolation, $20+60=80$ belongs to the discarded mix. Using $r=0.315$ with $f=17$ would get $17+63=80$. The recovered comparison therefore keeps $r=0.315$ and does not substitute $17+63=80$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Taking $\\$53$ for $120$ minutes and scaling by $200/120$ would get about $\\$88$ and overshoot. The recovered comparison therefore keeps $120$ and does not substitute $200/120$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another tempting route: $200 \\times 0.40 = 80$, using a round forty-cent rate and dropping the fee.

The plan is linear: fee plus rate times extra minutes. It is not a round $\\$80$ at a round $200$ minutes unless the fee and rate cooperate to make that happen. With $f=17$ and $r=0.30$, they do not.

What would have to change for the opposite verdict? If the fee were $\\$20$, or if the rate were $\\$0.315$, the $200$-minute bill would be $\\$80$. The two quoted customers force $f=17$ and $r=0.30$, and those force $\\$77$ at $200$ extra minutes.

The recovered plan at $200$ extra minutes bills $\\$77$, not $\\$80$, Two hundred extra minutes is $80$ minutes past the heavy user's $120$, and $80$ minutes at $0.30$ is $\\$24$. Adding $\\$24$ onto the heavy user's $\\$53$ gives $\\$77$, the same bill. That route does not re-solve the fee and rate; it extends the already-recovered line. Adding $\\$24$ onto $\\$53$ as $\\$77$ and then rounding up to $\\$80$ would be manufacturing the claim by a convenience round. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The ad's "low, predictable rate" language is doing rhetorical work, not arithmetic work. Predictable means linear: fee plus rate times extra minutes. Linear does not mean "round numbers at round minute counts." At $200$ minutes the honest value is $77$, and $77$ is not $80$.

If the fee had been $\\$20$ and the rate $0.30$, the $200$-minute bill would have been $80$ exactly, and letter A's recovered fee would have been $20$ as well. The two quoted customers, $\\$29$ at $40$ minutes and $\\$53$ at $120$ minutes, forbid that fee. Their $80$-minute gap is $\\$24$, which forces $0.30$, and then $29-12=17$ forces the fee. Those two recoveries pin $77$ at $200$ minutes.

so the statement is False.`,
      `**D) A customer using 0 extra minutes would pay \\$0.00 that month.**  (false)

The statement is a claim about a month with no extra minutes. The ad's "simple plan" still charges the fixed monthly fee even when the customer stays inside the allowance.

The overview already recovered $f = 17$. The extra arithmetic is only evaluating the plan at zero extra minutes.

**1.** Extra-minute charges drop out:

$$17 + 0 \\times 0.30 = 17$$

**2.** The claim writes $\\$0.00$. That would be true only if there were no fee, or if unused allowance generated a credit that wiped the fee. The ad describes a fee plus a rate, not a fee that vanishes at zero extra minutes.

**3.** Treating the plan as "pay only for extra minutes" would report $\\$0$ here and miss the intercept. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The two quoted bills already show that even $40$ extra minutes cost $\\$29$, which is more than $40 \\times 0.30=12$, so a fee is sitting under the line.

A customer with zero extra minutes still owes $\\$17$, not $\\$0$, so the statement is False.`,
      `**E) The advertised rate (\\$0.30 per minute) is more than double a rival plan's rate of \\$0.20 per minute.**  (false)

The statement compares ByteMobile's recovered extra-minute rate with a rival's $\\$0.20$ per minute, and claims ByteMobile is more than double the rival.

The overview already recovered $r = 0.30$. The extra arithmetic is only doubling the rival and comparing.

**1.** Double the rival's rate:

$$2 \\times 0.20 = 0.40$$

**2.** Compare ByteMobile's $0.30$ with that double:

$$0.30 < 0.40$$

ByteMobile's rate is $1.5$ times the rival's, not more than twice. "More than double" would need $r > 0.40$.

**3.** The trap is reading $0.30$ against $0.10$, or treating $0.30-0.20=0.10$ as if a ten-cent gap were already a doubling. Doubling is a ratio, not a difference. Another trap is comparing the fee $\\$17$ with some rival fee that the stem never gave.

The opposite verdict would need ByteMobile's rate above $\\$0.40$. The two quoted bills force $r=0.30$, which sits $10$ cents short of double the rival.

ByteMobile's rate is not more than double the rival's, so the statement is False.`,
    ],
    difficulty_level: `\\frac{1}{5}`,
    sort_order: 7,
    solution_overview: `ByteMobile's ad boasts a "simple plan": one customer who went 40 minutes over their allowance last month paid \\$29.00 in total. A heavy user who went 120 minutes over paid \\$53.00. The ad frames this as a low, predictable rate for every extra minute, on top of a small fixed monthly fee.

**Part 1: Building the system.**

Let $f$ = fixed monthly fee, $r$ = rate charged per extra minute. The advertisement never states the fixed fee or the rate directly; both must be recovered from the two example bills it quotes.

**1. Read the bill with 40 extra units.** At rate $r$, that bill is:

$$
f + 40r = 29.00
$$

**2. Read the bill with 120 extra units.** At rate $r$, that bill is:

$$
f + 120r = 53.00
$$

**Part 2: The model.**

$$
f + 40r = 29.00 \\tag{1}
$$

$$
f + 120r = 53.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract the first equation from the second:

$$
(f + 120r) - (f + 40r) = 53.00 - 29.00
$$

$$
80r = 24.00, \\qquad r = 0.30
$$

**2.** Substitute back:

$$
f + 40(0.30) = 29.00, \\qquad f + 12.00 = 29.00
$$

$$
f = 17.00
$$

**Answer.** Fixed fee = \\$17.00 | Extra-minute rate = \\$0.30/min`,
  },
  {
    id: `math-5-8`,
    case_id: `MATH 5.08`,
    title: `Finding Weekly Output From a Production Report`,
    context: `The table below lists standard specifications for two oven models. This week, the division completed 130 ovens in total and logged 795 assembly hours in total across both models. (Not every figure below is needed to find how many of each model were built.)`,
    tables_markdown: `| Product | Assembly Hrs/Unit | Material Cost/Unit |
| --- | --- | --- |
| Standard Oven | 4 hrs | \\$120 |
| Deluxe Oven | 9 hrs | \\$180 |`,
    statements: [
      `The division built 75 Standard ovens this week.`,
      `The division built 45 Deluxe ovens this week.`,
      `Standard ovens accounted for 300 assembly hours this week.`,
      `Deluxe ovens accounted for 500 assembly hours this week.`,
      `The total material cost of all Standard ovens built this week is \\$9,000.00.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The division built 75 Standard ovens this week.**  (true)

The statement is a claim about how many Standard ovens were built this week, not about hours or material cost. The week completed $130$ ovens and logged $795$ assembly hours.

The overview already recovered $s = 75$ as the Standard count, by substituting $s=130-d$ into $4s+9d=795$. This letter does not rebuild that pair. It only asks whether the recovered Standard count is the number in the claim.

**1.** The recovered $75$ is attached to Standard ovens, not to Deluxe. Quoting $55$ here would have swapped the models. The opposite verdict would need a different isolation than $55$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does.

**2.** Splitting $130$ in half would land on $65$ and miss the hours constraint. So the letter reads the claim against $130$; $65$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $130$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Standard ovens take $4$ hours and Deluxe take $9$, so the split cannot be even if the hour total is $795$.

The recovered Standard count is $75$, so the statement is True.`,
      `**B) The division built 45 Deluxe ovens this week.**  (false)

The statement is a claim about how many Deluxe ovens were built this week. Deluxe is the leftover after Standard's recovered $75$ is taken out of the conserved $130$.

The overview already recovered $d = 55$. The claim writes $45$, ten short of that leftover.

**1.** The figure $45$ is a typical misread: start from $130$ and subtract $85$, or treat the hour gap as if Deluxe were $10$ hours instead of $9$. At $d=45$ the hours would be $4(85)+9(45)=340+405=745$, which is $50$ hours short of $795$.

**2.** The opposite verdict would need a different hour total or a different pair of assembly times. With $130$ ovens and $795$ hours at $4$ and $9$ hours each, Deluxe cannot be $45$.

The claimed $45$ sits $10$ below the recovered $55$, so the statement is False.`,
      `**C) Standard ovens accounted for 300 assembly hours this week.**  (true)

The statement is a claim about Standard ovens' share of the $795$ assembly hours this week, not about how many Standard ovens were built and not about material cost. Each Standard oven takes $4$ hours, and the overview already recovered $s = 75$. The extra arithmetic is only multiplying count by the Standard hour rate.

**1.** Standard hours this week:

$$4 \\times 75 = 300$$

**2.** Deluxe's leftover hours, as a check that the two slices still add to the logged $795$:

$$795 - 300 = 495$$

That leftover is $9 \\times 55$, which matches the recovered Deluxe count. The hours log is conserved.

**3.** Using Deluxe's $9$ hours on the Standard count would get $675$ and miss the claim. Working from the isolated values, $9$ is the figure that is checked, not the detour that produced $675$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $s=65$ from a half-split of $130$ ovens would get $260$. Working from the isolated values, $s=65$ is the figure that is checked, not the detour that produced $260$. That contrast is the reason the verdict goes the way it does. Reporting $4 \\times 130=520$ would have priced every oven as Standard. The recovered isolation is checked against the claim using $4 \\times 130=520$, which is the figure the sessions actually produce.

The trap figure $260$ is a half-split of the week's $130$ ovens, times four. The trap figure $520$ is the whole week treated as Standard. Neither is $4$ times the recovered $75$.

The material-cost column is a distractor here. Standard material is $\\$120$ per oven, and $75 \\times 120=9000$ is letter E's question, not this one. Hours and dollars are different columns. Reporting $\\$300$ as if it were a dollar total would be mixing units. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The opposite verdict would need a different Standard count or a different Standard hour rate. With $s=75$ and $4$ hours each, Standard ovens accounted for $300$ hours. That $300$ is a share of $795$, not a share of $130$ ovens, and not a material bill.

Standard ovens accounted for $300$ of the week's assembly hours, so the statement is True.`,
      `**D) Deluxe ovens accounted for 500 assembly hours this week.**  (false)

The statement is a claim about Deluxe ovens' share of the assembly hours. Each Deluxe oven takes $9$ hours, and the overview recovered $d = 55$. The extra arithmetic is only multiplying, then comparing with the claimed $500$.

**1.** Deluxe hours this week:

$$9 \\times 55 = 495$$

**2.** Add Standard's $300$ hours from the recovered $s=75$ and compare with the week's log:

$$300 + 495 = 795$$

**3.** The claim writes $500$. Compare that with the conserved log:

$$300 + 500 = 800$$

which overshoots $795$ by $5$ hours. The claimed $500$ is five hours high: a round-up from $495$, or one extra Deluxe oven at $9$ hours mixed with a dropped Standard hour.

The trap figure $500$ is the round hundred sitting just above $495$. Another trap is $9 \\times 45=405$ from letter B's false Deluxe count, which undershoots in the other direction. Splitting $795$ as $300$ and $495$ but then rounded Deluxe to $500$ would flip the verdict by a convenience round. The recovered comparison therefore keeps $795$ and does not substitute $500$.

A nearby miss is $9 \\times 56 = 504$, which is what one extra Deluxe oven would have logged. The week built $55$ Deluxe ovens, not $56$. Rounding $495$ up to the next hundred is a reporting habit, not an hours identity. The log already says $795$, and $300$ of those hours are Standard, so Deluxe cannot occupy $500$ of a $795$-hour week.

The opposite verdict would need $d=500/9$, which is not an integer, or a week that logged $800$ hours. With $130$ ovens and $795$ hours at $4$ and $9$ hours each, Deluxe hours are $495$, not $500$.

The recovered Deluxe hours are $495$, not the claimed $500$, so the statement is False.`,
      `**E) The total material cost of all Standard ovens built this week is \\$9,000.00.**  (true)

This letter is where the material-cost column matters. Assembly hours recovered the counts; they do not price the steel. Standard ovens cost $\\$120$ each, and the overview already has $s = 75$.

The extra arithmetic is only multiplying count by unit material cost.

**1.** Start from the recovered Standard count, $75$.

**2.** Apply the table's Standard material cost of $\\$120$ per oven:

$$75 \\times 120 = 9000$$

**3.** Using Deluxe's $\\$180$ here would get $\\$13{,}500$ and miss the claim. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Using $s=55$, swapping the counts, would get $\\$6{,}600$. The recovered isolation is checked against the claim using $s=55$, which is the figure the sessions actually produce. Pricing all $130$ ovens at $\\$120$ would get $\\$15{,}600$ and have ignored that Deluxe uses a different material cost. The recovered isolation is checked against the claim using $130$, which is the figure the sessions actually produce.

The Deluxe material column is a distractor for this letter. The claim names Standard ovens only. What would have to change for the opposite verdict? If the Standard count were $70$, the material total would be $\\$8{,}400$. If the unit cost were $\\$125$, seventy-five ovens would be $\\$9{,}375$. With $s=75$ and $\\$120$ per Standard oven, the figure is $\\$9{,}000$.

The Standard material total is $\\$9{,}000.00$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 8,
    solution_overview: `The table below lists standard specifications for two oven models. This week, the division completed 130 ovens in total and logged 795 assembly hours in total across both models.

**Part 1: Building the system.**

Let $s$ = number of Standard ovens built, $d$ = number of Deluxe ovens built. The material-cost column is not needed to find s and d; it becomes relevant only for statement E below.

**1. Translate: total ovens built.** That observation becomes:

$$
s + d = 130
$$

**2. Translate: total assembly hours.** That observation becomes:

$$
4s + 9d = 795
$$

**Part 2: The model.**

$$
s + d = 130 \\tag{1}
$$

$$
4s + 9d = 795 \\tag{2}
$$

**Part 3: Solve.**

**1.** From the total-ovens equation, $s = 130 - d$.

**2.** Substitute into the hours equation: $4(130 - d) + 9d = 795$.

**3.** This expands to $520 - 4d + 9d = 795$, giving

$$
5d = 275, \\qquad d = 55
$$

**4.** Then

$$
s = 130 - 55 = 75
$$

**Answer.** Standard ovens = 75 | Deluxe ovens = 55`,
  },
  {
    id: `math-5-9`,
    case_id: `MATH 5.09`,
    title: `Recovering Furniture Prices From Two Branches' Net Sales`,
    context: `Two branches sold sofas and armchairs this month at company-wide fixed prices. "Net sales" (gross sales minus returns) is what actually reflects items sold at their listed prices.`,
    tables_markdown: `| Branch | Sofas Sold | Armchairs Sold | Gross Sales | Returns |
| --- | --- | --- | --- | --- |
| Riverside | 14 | 22 | \\$9,760 | \\$460 |
| Hillcrest | 20 | 10 | \\$9,300 | \\$300 |`,
    statements: [
      `A sofa sells for \\$350.00.`,
      `An armchair sells for \\$200.00.`,
      `Riverside's net sales (after its \\$460 in returns) were \\$9,300.00.`,
      `Hillcrest's gross sales (before its \\$300 in returns) were \\$9,300.00.`,
      `Had Riverside recorded zero returns that month, its gross and net sales would both have equalled \\$9,760.00.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A) A sofa sells for \\$350.00.**  (true)

The statement is a claim about today's sofa price, not about either branch's gross. Net sales, gross minus returns, are what reflect items sold at listed prices.

The overview already recovered $x = 350$ as that sofa price, after peeling returns and substituting Hillcrest's reduced row into Riverside. This letter does not rebuild that pair. It only asks whether the recovered sofa price is the number in the claim.

**1.** The recovered $350$ is attached to sofas, not to armchairs. Quoting $200$ here would have swapped the labels. Once $200$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim.

**2.** Dividing Riverside's gross $\\$9{,}760$ by $14$ sofas, ignoring armchairs and returns, would land on about $\\$697$ and miss the claim. Keeping $14$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Returns and armchairs both have to come off first.

The recovered sofa price is $\\$350.00$, so the statement is True.`,
      `**B) An armchair sells for \\$200.00.**  (true)

The statement is a claim about today's armchair price at the two furniture branches, not about either branch's printed net. Armchairs are the leftover after sofas are taken out of a net-sales row. Net sales, gross minus returns, is the layer that actually reflects listed prices.

The overview recovered $y = 200$ as that armchair leftover, after the Hillcrest reduction $y = 900 - 2x$ was substituted into Riverside's peeled net. This letter does not rebuild the pair. It only asks whether the recovered armchair price is the $\\$200.00$ in the claim.

**1.** The recovered $200$ is attached to armchairs, not to sofas. Swapping the labels would quote $\\$350$ here and miss the claim. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

**2.** Dividing Hillcrest's net by armchair count, ignoring sofas, would inflate the leftover. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Hillcrest's $\\$300$ of returns is not armchair revenue either; those returns were already peeled before the system was solved.

Using gross instead of net would inflate both prices, because returns would still be sitting inside the dollars. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The opposite verdict would need a different peeled net on one of the two branches. With the nets as recovered, an armchair cannot sell for anything other than $\\$200$.

The recovered armchair price is $\\$200.00$, so the statement is True.`,
      `**C) Riverside's net sales (after its \\$460 in returns) were \\$9,300.00.**  (true)

The statement is a claim about Riverside's net sales after its $\\$460$ in returns. Gross is printed at $\\$9{,}760$. Net is gross minus returns. The extra arithmetic is only peeling Riverside's own returns, then checking that the recovered furniture prices rebuild that net.

**1.** Subtract Riverside's returns from Riverside's gross:

$$9760 - 460 = 9300$$

**2.** Rebuild Riverside at the recovered prices $x=350$ and $y=200$:

$$14 \\times 350 + 22 \\times 200 = 4900 + 4400 = 9300$$

**3.** Subtracting Hillcrest's $\\$300$ here would land on After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

$$9760 - 300 = 9460$$

and miss the claim. Reporting gross $\\$9{,}760$ as net would have skipped the peel. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Subtracting both branches' returns from Riverside's gross would get $9760-460-300=9000$, which is Hillcrest's net, not Riverside's. The opposite verdict would need a different isolation than $9760-460-300=9000$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does.

The trap figure $\\$9{,}460$ is Hillcrest's returns taken off the wrong branch. The trap figure $\\$9{,}760$ is gross left unpeeled. Both routes fail the definition of net sales.

Hillcrest's printed gross is also $\\$9{,}300$. That coincidence is a trap: copying Hillcrest's gross into Riverside's net without peeling would get the right number for the wrong reason. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The honest route is Riverside gross minus Riverside returns. The matching rebuild at $x=350$ and $y=200$ is what shows that the peel is the same layer the system used. Riverside sold $14$ sofas and $22$ armchairs; those counts never change when returns are peeled. Returns are dollars taken off gross, not sofas taken off the floor.

The opposite verdict would need Riverside's printed gross or Riverside's printed returns to change. With $\\$9{,}760$ gross and $\\$460$ returns, Riverside's net is $\\$9{,}300$. The recovered sofa and armchair prices merely confirm that peel.

Riverside's net sales were $\\$9{,}300.00$, so the statement is True.`,
      `**D) Hillcrest's gross sales (before its \\$300 in returns) were \\$9,300.00.**  (true)

The statement is a claim about Hillcrest's gross sales, before its $\\$300$ in returns. The table already prints Hillcrest gross at $\\$9{,}300$. This letter does not peel returns. It asks whether the claimed gross is the gross on the page.

As a consistency check, Hillcrest's net is $9300-300=9000$, and the $20$ sofas and $10$ armchairs at recovered prices rebuild that net:

$$20 \\times 350 + 10 \\times 200 = 7000 + 2000 = 9000$$

Adding the $\\$300$ of returns back recovers the printed gross. Reporting the net $\\$9{,}000$ here would be answering a different question. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Mixing Riverside's gross $\\$9{,}760$ into this letter would be naming the wrong branch. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

The trap figure $\\$9{,}000$ is Hillcrest's net, which the claim does not ask for. The opposite verdict would need the table to print a different Hillcrest gross. Riverside's net is also $\\$9{,}300$, so copying the other branch's peeled figure would happen to match; that coincidence does not turn a printed gross into a recovered unknown.

Hillcrest's printed gross is the claimed $\\$9{,}300.00$, so the statement is True.`,
      `**E) Had Riverside recorded zero returns that month, its gross and net sales would both have equalled \\$9,760.00.**  (true)

The statement is a claim about a counterfactual: Riverside with zero returns that month. Net sales are defined as gross minus returns. If returns are zero, the two figures coincide.

The extra arithmetic is only setting returns to zero.

**1.** Riverside's gross is already $\\$9{,}760$.

**2.** With returns of $0$:

$$9760 - 0 = 9760$$

Both gross and net would read $\\$9{,}760$. That is a definition, not a new solve. The recovered sofa and armchair prices never enter, because the claim does not ask what would have been sold, only how gross and net relate when returns vanish.

Subtracting the $\\$460$ anyway would be describing the actual month, not the counterfactual. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Thinking "zero returns" meant zero sales would report $\\$0$ and miss the claim entirely. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence.

Had Riverside recorded zero returns, gross and net would both have equalled $\\$9{,}760.00$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 9,
    solution_overview: `Two branches sold sofas and armchairs this month at company-wide fixed prices. "Net sales" (gross sales minus returns) is what actually reflects items sold at their listed prices.

**Part 1: Building the system.**

Let $x$ = price of one sofa, $y$ = price of one armchair. The gross figures cannot be used directly; each branch's returns must be subtracted first to isolate the value of items actually sold at listed prices.

**1. Subtract returns, then write the net-sales equation.** Start from the printed total: $14x + 22y = 9760 - 460 = 9300$. The clean system equation is:

$$
14x + 22y = 9300
$$

**2. Subtract returns, then write the net-sales equation.** Start from the printed total: $20x + 10y = 9300 - 300 = 9000$. The clean system equation is:

$$
20x + 10y = 9000
$$

**Part 2: The model.**

$$
14x + 22y = 9300 \\tag{1}
$$

$$
20x + 10y = 9000 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide the Hillcrest equation by 10: $2x + y = 900$, so $y = 900 - 2x$.

**2.** Substitute into Riverside's equation: $14x + 22(900 - 2x) = 9300$.

**3.** This expands to $14x + 19800 - 44x = 9300$, so $-30x = -10500$, giving

$$
x = \\frac{10500}{30} = 350
$$

**4.** Then

$$
y = 900 - 2(350) = 900 - 700 = 200
$$

**Answer.** Sofa = \\$350.00 | Armchair = \\$200.00`,
  },
  {
    id: `math-5-10`,
    case_id: `MATH 5.10`,
    title: `Comparing a Print Shop's Own Rates Against a Rival's Flat Quote`,
    context: `PrintFast Express charges a fixed setup fee on every order, plus a constant charge per page. Order #58 (120 pages) billed \\$33.00, and Order #96 (300 pages) billed \\$69.00. A rival, QuickCopy Center, instead charges a flat \\$60.00 for any order up to 350 pages, regardless of length.`,
    statements: [
      `PrintFast's setup fee is \\$12.00.`,
      `PrintFast's per-page rate is \\$0.25.`,
      `A 250-page order at PrintFast would cost \\$60.00.`,
      `For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat \\$60.00 fee.`,
      `Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.`,
    ],
    answer_key: [false, false, false, false, true],
    tactical_explanations: [
      `**A) PrintFast's setup fee is \\$12.00.**  (false)

The statement is a claim about PrintFast's setup fee, not about the per-page rate. The two orders differ only in page count, so the fee is the intercept of that line.

The overview already recovered $f = 9$. The claim writes $\\$12$, which sits $\\$3$ above that intercept.

**1.** The figure $\\$12$ is a typical round guess: $10\\%$ of a $\\$120$-looking page count, or $33-120 \\times 0.175$. At $f=12$ the $120$-page order would force $r=0.175$, and the $300$-page order would then total $12+52.50=64.50$, not $\\$69$.

**2.** The two invoices force a unique intercept of $\\$9$. With those two bills as printed, the setup fee cannot be $\\$12$.

The claimed $\\$12$ sits $\\$3$ above the recovered $\\$9$, so the statement is False.`,
      `**B) PrintFast's per-page rate is \\$0.25.**  (false)

The statement is a claim about PrintFast's per-page rate. Subtracting the two invoices isolates that slope, because the setup fee cancels. The overview already recovered $r = 0.20$. The claim writes $\\$0.25$, five cents above $0.20$. This letter does not rebuild the pair $(f,r)=(9,0.20)$. It only asks whether a quarter-dollar rate can sit on both printed bills.

**1.** The $180$-page gap between Order #96 and Order #58, at the claimed rate:

$$180 \\times 0.25 = 45$$

The actual dollar gap is $69-33=36$, not $\\$45$. Those extra nine dollars are $180 \\times 0.05$.

**2.** At $r=0.25$ the $120$-page order would force a fee $33-30=3$, and the $300$-page order would then total

$$3 + 300 \\times 0.25 = 78$$

which overshoots the printed $\\$69$ by $\\$9$. The two invoices cannot share a quarter-dollar rate.

**3.** Dividing $\\$33$ by $120$ pages would land on $\\$0.275$ and forget the fee sitting under both bills. The opposite verdict would need a different isolation than $120$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap figure $\\$0.25$ is the round quarter nearest that all-in split. Another trap is QuickCopy's flat $\\$60$ mixed into a per-page story.

The honest slope is the dollar gap over the page gap, $36/180=0.20$. That fraction is already recovered. A quarter-dollar rate would require a $\\$45$ gap on the same $180$ pages. The invoices do not show $\\$45$. They show $\\$36$. A clerk who treated $\\$0.25$ as "about a quarter, close enough to $0.20$" would be rounding a rate that the two bills pin to the cent. PrintFast's recovered rate is $0.20$ exactly, because $36/180$ is exact.

The opposite verdict would need the dollar gap between the two orders to be $\\$45$ instead of $\\$36$. With $\\$33$ at $120$ pages and $\\$69$ at $300$ pages, the per-page rate cannot be $\\$0.25$. QuickCopy's flat $\\$60$ never enters a per-page slope.

The claimed $\\$0.25$ sits $\\$0.05$ above the recovered $\\$0.20$, so the statement is False.`,
      `**C) A 250-page order at PrintFast would cost \\$60.00.**  (false)

This letter is not either printed order. Order #58 is $120$ pages at $\\$33$. Order #96 is $300$ pages at $\\$69$. The claim asks for a third order: $250$ pages at PrintFast, compared with $\\$60$.

The overview already has $f = 9$ and $r = 0.20$. The extra arithmetic is only evaluating PrintFast at $250$ pages.

**1.** Start from the recovered setup fee.

**2.** Add two hundred fifty pages at the recovered rate:

$$250 \\times 0.20 = 50$$

**3.** Add fee and page charges:

$$9 + 50 = 59$$

The order is $\\$59$, not $\\$60$. The gap is $\\$1$.

Where does $\\$60$ come from as a trap? QuickCopy Center's flat fee is $\\$60$, so mixing the rival into PrintFast's quote would report $\\$60$ here. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $f=10$ would get $10+50=60$ exactly. The stem's recovered values line up with $f=10$, whereas $10+50=60$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $f=10$ stays in the write-up. Using $r=0.204$ with $f=9$ would also land near $\\$60$. So the letter reads the claim against $r=0.204$; $f=9$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $r=0.204$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The rival's flat $\\$60$ is the most tempting mix-up, because letter D asks about that rival at a nearby page count.

What would have to change for the opposite verdict? If the fee were $\\$10$, or if the rate were $\\$0.204$, a $250$-page PrintFast order would be $\\$60$. The two printed orders force $f=9$ and $r=0.20$, and those force $\\$59$ at $250$ pages.

The recovered PrintFast rule at $250$ pages bills $\\$59$, not $\\$60$, Two hundred fifty pages sits between Order #58's $120$ and Order #96's $300$, so it is an interpolation, not an extrapolation. Linear interpolation between $\\$33$ and $\\$69$ using page share $(250-120)/(300-120)=130/180$ gives $33+36 \\times 130/180=33+26=59$, the same $\\$59$. That agreement is a check that the recovered line is the line through the two invoices. It is not a reason to report QuickCopy's $\\$60$.

QuickCopy's flat $\\$60$ is the rival sitting in the stem, and $250$ pages is under QuickCopy's $350$-page cap, so answering with the rival's quote would get the claimed $\\$60$ by swapping shops. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. This letter is PrintFast's quote at $250$ pages. PrintFast is $\\$59$ there, one dollar under the rival, which is letter D's neighbourhood but not letter D's $350$-page question.

If PrintFast's rate had been $0.204$ with a $\\$9$ fee, $250$ pages would have been $60$. The two invoices force $0.20$ exactly, because $36/180=0.20$, and that exact fifth of a dollar is what leaves the $250$-page bill at $59$ rather than $60$.

so the statement is False.`,
      `**D) For a 350-page order, PrintFast would be cheaper than QuickCopy Center's flat \\$60.00 fee.**  (false)

The statement compares a $350$-page PrintFast order with QuickCopy Center's flat $\\$60$ fee, and claims PrintFast would be cheaper.

QuickCopy charges $\\$60$ for any order up to $350$ pages. PrintFast's recovered rule is $f=9$, $r=0.20$. The extra arithmetic is only pricing $350$ pages at PrintFast and comparing.

**1.** PrintFast's page charges at $350$ pages:

$$350 \\times 0.20 = 70$$

**2.** Add the setup fee:

$$9 + 70 = 79$$

**3.** Compare with QuickCopy's flat $\\$60$:

$$79 > 60$$

PrintFast is $\\$19$ more expensive at that length, not cheaper. The claim has the comparison backwards.

Using the false rate $0.25$ would make PrintFast even worse, at $9+87.50=96.50$. The stem's recovered values line up with $0.25$, whereas $9+87.50=96.50$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $0.25$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Comparing $250$-page PrintFast $\\$59$ with the rival $\\$60$ would conclude PrintFast is cheaper, but that is a different page count. The path that matches the stem therefore holds $250$ fixed and only then reads the claim. At the $350$-page cap of the rival's flat quote, PrintFast has already climbed to $\\$79$.

The two formulas have different slopes, so they can cross. Setting $9+0.20x=60$ gives $x=255$ pages. Below about $255$ pages PrintFast is cheaper; above it, QuickCopy is cheaper. The claim asks about $350$ pages, which sits well above that crossing.

PrintFast is more expensive at $350$ pages, not cheaper, At $350$ pages QuickCopy is still in its flat $\\$60$ band, while PrintFast has been climbing at $20$ cents a page from a $\\$9$ intercept. The $350$-page PrintFast bill $\\$79$ is $\\$19$ above the rival, not below it. Direction of "cheaper" is the whole claim, and the direction is backwards.

The crossing computed in the letter, about $255$ pages, is the only distance at which the two shops match. Below it, PrintFast's lower rate-plus-fee combination wins. Above it, QuickCopy's flat fee wins until the $350$-page cap. Asking about $350$ pages is asking about the far side of that crossing, where the rival is cheaper.

Comparing $350$ pages at PrintFast's false $0.25$ rate from letter B would get $9+87.50=96.50$, even worse for PrintFast, and would still reject "PrintFast is cheaper." The recovered comparison therefore keeps $350$ and does not substitute $9+87.50=96.50$.The recovered $0.20$ is already enough to reject the claim. What would flip it is a PrintFast rate below about $0.146$, because $9+350r<60$ forces $r<0.1457$. The invoices force $0.20$, which is not that low.

so the statement is False.`,
      `**E) Because Order #58 and Order #96 involve different page counts at different total prices, these two invoices pin down one, and only one, possible combination of setup fee and per-page rate.**  (true)

The statement is a claim about uniqueness, not about a particular dollar figure. PrintFast's plan is a fee plus a rate, two unknowns. Two invoices with different page counts give two independent equations.

The overview already recovered the unique pair $(f,r)=(9,0.20)$. This letter asks why that pair is the only one.

**1.** Subtracting the two invoices cancels the fee and leaves

$$(300-120)r = 69-33, \\qquad 180r = 36$$

The coefficient $180$ is not zero, because the page counts differ. That forces a unique rate, and then a unique fee.

**2.** Had both orders covered the same number of pages, the fee would cancel and leave $0 \\cdot r$ equal to a dollar gap, which would either be inconsistent or leave $r$ free. Different page counts are what pin the slope down.

**3.** Different totals matter too. If the two bills had been equal despite different page counts, the rate would have been forced to zero, which is still a unique pair, just a degenerate one. Here the totals differ as well, so the rate is the positive $0.20$ already recovered.

Thinking "two bills, infinitely many fee-and-rate pairs" would be describing one invoice, not two independent ones. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. One invoice is a single line in the $(f,r)$ plane. Two non-parallel invoices are a single intersection.

Because the two invoices involve different page counts at different totals, they pin down one combination of setup fee and per-page rate, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 10,
    solution_overview: `PrintFast Express charges a fixed setup fee on every order, plus a constant charge per page. Order #58 (120 pages) billed \\$33.00, and Order #96 (300 pages) billed \\$69.00.

**Part 1: Building the system.**

Let $f$ = PrintFast's setup fee, $r$ = PrintFast's rate per page.

**1. Translate: Order #58.** That observation becomes:

$$
f + 120r = 33.00
$$

**2. Translate: Order #96.** That observation becomes:

$$
f + 300r = 69.00
$$

**Part 2: The model.**

$$
f + 120r = 33.00 \\tag{1}
$$

$$
f + 300r = 69.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract Order #58's equation from Order #96's:

$$
(f + 300r) - (f + 120r) = 69.00 - 33.00
$$

$$
180r = 36.00, \\qquad r = 0.20
$$

**2.** Substitute back:

$$
f + 120(0.20) = 33.00, \\qquad f + 24.00 = 33.00
$$

$$
f = 9.00
$$

**3.** For a 250-page order:

$$
9.00 + 250(0.20) = 9.00 + 50.00 = 59.00
$$

**4.** For a 350-page order:

$$
9.00 + 350(0.20) = 9.00 + 70.00 = 79.00
$$

**Answer.** PrintFast setup fee = \\$9.00 | Rate = \\$0.20/page`,
  },
  {
    id: `math-5-11`,
    case_id: `MATH 5.11`,
    title: `Del Sol Food Truck`,
    context: `Two friends grabbed lunch separately from the same food truck, which sells only tacos and burritos at a fixed price each. Ana ordered 4 tacos and 3 burritos and paid \\$32.00 in total. Ben ordered 2 tacos and 5 burritos  -  and when he compared receipts with Ana afterward, he realized he had paid exactly \\$5.00 more than she did, even though neither of them knew the other's order size in advance.`,
    statements: [
      `Ben paid more for his 5 burritos alone than Ana paid for her entire order.`,
      `A burrito costs \\$2.50 more than a taco.`,
      `Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than \\$28.00.`,
      `Ben's total order price exceeds \\$40.00.`,
      `Buying 6 tacos and 6 burritos together would cost \\$57.00.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) Ben paid more for his 5 burritos alone than Ana paid for her entire order.**  (false)

The statement compares Ben's five burritos alone with Ana's entire order. Ana paid $\\$32$ for $4$ tacos and $3$ burritos. Ben's burrito count is $5$, but that is not his whole receipt.

The overview already recovered $y = 6$ as the burrito price. The extra arithmetic is only costing those five burritos and comparing them with Ana's $\\$32$.

**1.** Five burritos at the recovered burrito price:

$$5 \\times 6 = 30$$

**2.** Compare with Ana's whole order:

$$30 < 32$$

Ben's five burritos alone cost $\\$30$, which is $\\$2$ short of Ana's $\\$32$. The claim says he paid more for those five burritos than she paid for everything. He did not.

Using Ben's whole receipt $\\$37$ here would be comparing the wrong object: the claim names the five burritos alone, not the two tacos that came with them. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Pricing burritos at $\\$7$ would get $35>32$ and flip the verdict. Keeping $35>32$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The recovered $y=6$ forbids that.

Ben's five burritos cost less than Ana's whole order, so the statement is False.`,
      `**B) A burrito costs \\$2.50 more than a taco.**  (true)

The statement is a claim about the gap between a burrito and a taco at Del Sol, not about either friend's receipt total. Ana paid $\\$32$ for $4$ tacos and $3$ burritos. Ben paid $\\$5$ more than Ana for $2$ tacos and $5$ burritos.

The overview already recovered $x = 3.50$ and $y = 6$. The extra arithmetic is only subtracting those two recovered prices.

**1.** Burrito minus taco:

$$6 - 3.50 = 2.50$$

**2.** Subtracting in the other order would report a negative gap, as if tacos were the expensive item. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Reporting a round $\\$2$ gap would have dropped the fifty cents. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Taking Ben's extra $\\$5$ and dividing by his two extra burritos would get $\\$2.50$ by luck, but that route ignores that Ben also ordered two fewer tacos. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The honest gap is $y-x$, not $5/2$.

**3.** Check that the recovered pair still rebuilds Ana:

$$4 \\times 3.50 + 3 \\times 6 = 14 + 18 = 32$$

Ben's mix as a second check: $2(3.50)+5(6)=7+30=37$, which is $\\$5$ above Ana, matching the stem. The gap $y-x=2.50$ is what makes those two mixes $5$ dollars apart, because Ben swapped two tacos for two extra burritos and $2 \\times 2.50=5$. That is extra arithmetic on the recovered pair, not a second solve.

The two receipts force this exact difference. The opposite verdict would need a different pair of totals. With Ana at $\\$32$ and Ben at $\\$37$, a burrito sits $\\$2.50$ above a taco. A round $\\$3$ gap would have made Ben's two-burrito swap cost $\\$6$ instead of $\\$5$, and the stem's $\\$5$ comparison forbids that. The fifty cents is not decoration; it is what ties the mix swap to the printed $\\$5$.

The burrito-taco gap is the claimed $\\$2.50$, so the statement is True.`,
      `**C) Had Ana ordered one fewer burrito (4 tacos and 2 burritos instead), she would have paid less than \\$28.00.**  (true)

This letter is not Ana's actual order. Ana ordered $4$ tacos and $3$ burritos for $\\$32$. The claim drops one burrito, leaving $4$ tacos and $2$ burritos, and compares that counterfactual with $\\$28$.

The overview already has $x = 3.50$ and $y = 6$. The extra arithmetic is only costing the reduced mix.

**1.** Four tacos at the recovered taco price:

$$4 \\times 3.50 = 14$$

**2.** Two burritos at the recovered burrito price:

$$2 \\times 6 = 12$$

**3.** Add and compare with $\\$28$:

$$14 + 12 = 26$$

Since $26 < 28$, she would have paid less than $\\$28$. The gap to the cutoff is $\\$2$, which is not accidental: dropping one $\\$6$ burrito from $\\$32$ leaves $\\$26$, and $\\$26$ sits $\\$2$ under $\\$28$.

Dropping a taco instead of a burrito would get $32-3.50=28.50$, which is not less than $\\$28$. The opposite verdict would need a different isolation than $32-3.50=28.50$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Direction of the drop matters. The claim names one fewer burrito.

Subtracting $\\$4$ as a round "one item" would land on $\\$28$ exactly and think the inequality failed. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. One burrito is $\\$6$, not $\\$4$.

What would have to change for the opposite verdict? If burritos were $\\$3$, dropping one would leave $\\$29$, which is not less than $\\$28$. The two receipts force $y=6$, and $32-6=26<28$.

The reduced mix costs $\\$26$, which is less than $\\$28$, Dropping a burrito from Ana's order is a reverse of the usual "add an item" letter. Ana's receipt is $4$ tacos and $3$ burritos at $\\$32$. One burrito is $\\$6$, so the reduced mix is $\\$26$. The cutoff $\\$28$ sits $\\$2$ above that, which is not a recovered price; it is a bar the claim chose. Clearing a bar from below is the inequality $26<28$.

Dropping one taco instead would get $32-3.50=28.50$, which is not less than $28$, and would reject the claim. That is the fork: $32-3.50=28.50$ belongs to the recovered isolation, $28$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The item being dropped is the whole content: burrito, not taco. Subtracting $\\$4$ as a round item would land on $\\$28$ exactly and fail a strict inequality. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

If burritos had been $\\$3.50$ like tacos, dropping one would leave $\\$28.50$, again not under $\\$28$. The two receipts force $y=6$, and $32-6=26$ is then safely under the bar. After the drop Ana would have the same taco count as before and one fewer burrito than Ben's five, which is a different story than this letter needs; the claim only asks for her new total.

so the statement is True.`,
      `**D) Ben's total order price exceeds \\$40.00.**  (false)

The statement is a claim about Ben's total, compared with a $\\$40$ cutoff. Ben paid $\\$5$ more than Ana's $\\$32$. The overview already recovered $x=3.50$ and $y=6$. The extra arithmetic is only forming Ben's total and comparing it with $\\$40$.

**1.** Ben's total from the $\\$5$ gap:

$$32 + 5 = 37$$

**2.** Rebuild his mix at the recovered prices:

$$2 \\times 3.50 + 5 \\times 6 = 7 + 30 = 37$$

**3.** Compare with the cutoff:

$$37 < 40$$

The claim says his total exceeds $\\$40$. It does not. The gap to the cutoff is $\\$3$.

Adding Ana's $\\$32$ to Ben's five burritos at $\\$30$ would get $\\$62$ and wildly overshoot, because that route still contains Ana's whole order. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Using $37+5$ twice, adding the $\\$5$ gap a second time, would get $\\$42$ and flip the verdict. Keeping $37+5$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The $\\$5$ gap is already built into the $\\$37$.

The trap figure $\\$42$ is the double-counted gap. The trap figure $\\$62$ is Ana's receipt stacked onto Ben's burritos. Neither is Ben's order.

The opposite verdict would need Ben's mix to cost more than $\\$40$. At $x=3.50$ and $y=6$, two tacos and five burritos are $\\$37$. Raising the burrito to $\\$6.60$ would push Ben to $7+33=40$ exactly, and the two receipts forbid that burrito price.

The cutoff $\\$40$ is a round bar, not a recovered number. Clearing it would take another taco at $3.50$ plus a leftover, or one more burrito. Ben ordered two tacos and five burritos, which is $\\$37$. Letter A's false reading of Ben's burritos against Ana's whole order is a different comparison and does not move this total.

Ben's total is $\\$37$, which does not exceed $\\$40$, so the statement is False.`,
      `**E) Buying 6 tacos and 6 burritos together would cost \\$57.00.**  (true)

This letter is not either friend's receipt. Ana is $4$ tacos and $3$ burritos. Ben is $2$ tacos and $5$ burritos. The claim asks for a third mix: six of each, together.

The overview already has $x = 3.50$ and $y = 6$. The extra arithmetic is only costing the new mix.

**1.** Six tacos at the recovered taco price:

$$6 \\times 3.50 = 21$$

**2.** Six burritos at the recovered burrito price:

$$6 \\times 6 = 36$$

**3.** Add the two pieces:

$$21 + 36 = 57$$

The mix is $\\$57$, matching the claim.

Averaging Ana's $\\$32$ and Ben's $\\$37$ and scaling to twelve items would keep the $4$-and-$3$ and $2$-and-$5$ shapes inside the average, which are not six-and-six. Working from the isolated values, $4$ is the figure that is checked, not the detour that produced $5$. Taking $6(3.50+6)=57$ as $6 \\times 9.50$ is actually the same arithmetic in pair form: one taco plus one burrito is $\\$9.50$, and six pairs are $\\$57$. Working from the isolated values, $6(3.50+6)=57$ is the figure that is checked, not the detour that produced $57$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That pair view is honest here because the mix is balanced.

What would have to change for the opposite verdict? If tacos were $\\$4$, six of each would be $24+36=60$. The two receipts force $x=3.50$, and six-and-six is then $\\$57$.

The recovered prices on six of each give $\\$57.00$, Six of each is three times a taco-burrito pair. One pair is $3.50+6=9.50$, and three pairs would be $28.50$, which is not this letter. Six pairs are $57$. That pair view is honest because the mix is balanced. Ana's mix is not balanced, and Ben's mix is not balanced, so neither receipt is a scale copy of six-and-six.

Taking Ana's $4$ tacos and Ben's $5$ burritos, then added one taco and one burrito to "get to six," would be mixing two receipts plus an invented pair, which is not how unit prices work. The stem's recovered values line up with $4$, whereas $5$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $4$ stays in the write-up. The recovered pair applied to $6$ and $6$ is the only costing.

If tacos had been $\\$4.00$, six-and-six would have been $24+36=60$, and the claim's $\\$57$ would have failed. The two receipts force $x=3.50$: doubling Ben and subtracting Ana isolates $y=6$, then $4x+18=32$ forces $x=3.50$. Those two prices pin $\\$57$ on a six-and-six ticket.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 11,
    solution_overview: `Two friends grabbed lunch separately from the same food truck, which sells only tacos and burritos at a fixed price each. Ana ordered 4 tacos and 3 burritos and paid \\$32.00 in total.

**Part 1: Building the system.**

Nothing here states the taco or burrito price directly. What is known is Ana's order and total, plus a comparison between Ben's total and Ana's. That comparison must first be turned into an actual dollar figure for Ben's order before a system of two equations can be written.

**1. Record this independent observation.** In symbols:

$$
4x + 3y = 32.00
$$

**2. Translate: Ben paid \\$5.00 more than Ana.** That comparison becomes $2x + 5y = 32.00 + 5.00 = 37.00$. The clean system equation is:

$$
2x + 5y = 37.00
$$

**Part 2: The model.**

$$
4x + 3y = 32.00 \\tag{1}
$$

$$
2x + 5y = 37.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the second equation by 2: $4x + 10y = 74.00$.

**2.** Subtract the first ($4x + 3y = 32.00$):

$$
(4x + 10y) - (4x + 3y) = 74.00 - 32.00
$$

$$
7y = 42.00, \\qquad y = 6.00
$$

**3.** Substituting back:

$$
4x + 3(6.00) = 32.00, \\qquad 4x + 18.00 = 32.00
$$

$$
x = 3.50
$$

**Answer.** Taco = \\$3.50 | Burrito = \\$6.00`,
  },
  {
    id: `math-5-12`,
    case_id: `MATH 5.12`,
    title: `Northgate Books Monthly Sales Report`,
    context: `Memo  -  Pricing Desk: "Hardcover editions are priced exactly \\$5 above the paperback price this quarter, across the board."`,
    tables_markdown: `| Metric | Value |
| --- | --- |
| Paperback units sold | 400 |
| Hardcover units sold | 220 |
| Combined revenue (paperback + hardcover) | \\$8,540 |
| Full-time staff on payroll | 12 |
| Loyalty-member share of purchases | 45% |`,
    statements: [
      `A paperback price of \\$12 is consistent with the pricing desk's \\$5 gap rule.`,
      `Hardcover editions are priced above \\$18.`,
      `Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been \\$1,200 higher.`,
      `A customer buying 3 hardcovers and 2 paperbacks would pay less than \\$75.`,
      `The reported \\$8,540 total could also have come from selling 310 hardcovers alone.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) A paperback price of \\$12 is consistent with the pricing desk's \\$5 gap rule.**  (true)

The statement is a claim about whether a paperback price of $\\$12$ fits the pricing desk's $\\$5$ gap and the combined revenue of $\\$8{,}540$. Hardcover editions are priced exactly $\\$5$ above paperback this quarter, across the board.

The overview already recovered $x = 12$ by substituting $y=x+5$ into $400x+220y=8540$. This letter does not rebuild that pair. It only asks whether that recovered paperback price is consistent with the gap rule, which it is, because the gap rule was used to recover it.

**1.** The recovered $12$ plus the desk's $\\$5$ gap is a hardcover of $17$, and $400(12)+220(17)=4800+3740=8540$, which matches the reported total. That is a consistency check, not a new unknown.

**2.** Dividing $\\$8{,}540$ by $400$ paperbacks, ignoring hardcovers, would land on $\\$21.35$ and miss the claim. Once $400$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The trap figure $\\$21.35$ is a paperback-only split of a mixed total.

Staff headcount and the loyalty share never enter the price. Folding those distractors into the revenue would manufacture a different paperback price. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The opposite verdict would need a different gap or a different combined revenue.

A paperback at $\\$12$ fits the desk's $\\$5$ gap and the $\\$8{,}540$ total, so the statement is True.`,
      `**B) Hardcover editions are priced above \\$18.**  (false)

The statement is a claim that hardcover editions sit above $\\$18$. The pricing desk prices hardcovers exactly $\\$5$ above paperbacks this quarter, across the board. The overview already recovered $x=12$, so $y=12+5=17$. Then $17 > 18$ is false. This letter does not rebuild the substitution into $\\$8{,}540$. It only asks whether the recovered hardcover clears an $\\$18$ bar.

**1.** Form the recovered hardcover from the recovered paperback plus the desk's gap:

$$12 + 5 = 17$$

**2.** Compare with the claimed cutoff. Then $17 > 18$ is false.

**3.** If hardcovers really were $\\$18$ and the $\\$5$ gap still held, paperbacks would be $\\$13$, and the reported mix would be

$$400 \\times 13 + 220 \\times 18 = 5200 + 3960 = 9160$$

which overshoots $\\$8{,}540$ by $\\$620$. The stem's revenue forbids that pair.

The trap figure $\\$18$ is the gap plus a round $\\$13$ paperback, or $\\$8540/220 \\approx 38$ after ignoring paperbacks, then halved. The recovered hardcover is $\\$17$, one dollar short of the cutoff. Staff headcount $12$ and loyalty $45\\%$ never push $17$ across $18$. Treating $\\$18$ as "about $\\$17$, close enough" would be rounding a cutoff the claim wrote as a strict bar. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Hardcovers at $17$ fail "above $18$" by a full dollar, not by a rounding.

Another wrong route is $8540/(400+220) \\approx 13.77$ as a blended book, then adding the $\\$5$ gap to get $18.77$ and calling hardcovers "above $\\$18$." That blend still contains paperbacks. The desk's hardcover is $17$, recovered from $x+5$ at $x=12$, and $17$ is not above $18$.

The opposite verdict would need a paperback above $\\$13$, or a gap above $\\$6$. With $x=12$ and a $\\$5$ gap, hardcovers are $\\$17$, which is not above $\\$18$.

Hardcovers are $\\$17$, which is not above $\\$18$, so the statement is False.`,
      `**C) Had 500 paperbacks been sold instead of 400 (hardcover sales unchanged), revenue would have been \\$1,200 higher.**  (true)

This letter is not the actual sales mix. The desk sold $400$ paperbacks and $220$ hardcovers. The claim adds $100$ paperbacks, hardcovers unchanged, and asks whether revenue would have been $\\$1{,}200$ higher.

The overview already recovered $x = 12$. The extra arithmetic is only costing those $100$ extra paperbacks.

**1.** One hundred extra paperbacks at the recovered paperback price:

$$100 \\times 12 = 1200$$

**2.** Hardcovers are unchanged, so they add $0$ to the increment. The whole increment is $\\$1{,}200$.

Using the hardcover price here would get $\\$1{,}700$ and miss the claim. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Scaling the whole $\\$8{,}540$ by $500/400$ would keep hardcovers inside the scale factor and overshoot. That is why $500/400$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. Only the paperback column changes.

The extra $100$ paperbacks add $\\$1{,}200$, so the statement is True.`,
      `**D) A customer buying 3 hardcovers and 2 paperbacks would pay less than \\$75.**  (false)

This letter is a new mix: $3$ hardcovers and $2$ paperbacks, compared with a $\\$75$ cutoff.

The overview already has $x = 12$ and $y = 17$. The extra arithmetic is only costing that basket.

**1.** Three hardcovers:

$$3 \\times 17 = 51$$

**2.** Two paperbacks:

$$2 \\times 12 = 24$$

**3.** Add and compare with $\\$75$:

$$51 + 24 = 75$$

The basket equals $\\$75$, so it is not less than $\\$75$. The inequality is strict in the claim, and equality fails a strict inequality.

Using $y=18$ from letter B would get $54+24=78$ and still fail "less than $75$", so that particular error would not flip the verdict. After isolating the unknown, the check is against $y=18$. The figure $75$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $y=18$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Treating "less than" as "less than or equal" would flip it. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The wording is "would pay less than $\\$75$", and $75$ is not less than $75$.

The basket costs exactly $\\$75$, which is not less than $\\$75$, Three hardcovers and two paperbacks is a customer basket, not a scaled-down sales report. The desk sold $400$ and $220$; this letter sells $3$ and $2$. The recovered prices $12$ and $17$ make the basket $51+24=75$ on the nose. The claim's "less than $\\$75$" is a strict inequality, and equality is not less.

Using $3(12)+2(17)=36+34=70$, swapping the prices, would get a figure that *is* less than $75$ and would flip the verdict. The recovered comparison therefore keeps $3(12)+2(17)=36+34=70$ and does not substitute $75$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Attaching $17$ to hardcovers and $12$ to paperbacks is the whole content, because the gap rule says hardcover is the dearer book.

Staff count $12$ and loyalty $45\\%$ still do not enter. A $5\\%$ loyalty discount on $75$ would make the basket $71.25$, which would then be less than $75$, but the stem never says this customer is a loyalty member. Without that discount the basket is $75$, and $75$ is not less than $75$.

so the statement is False.`,
      `**E) The reported \\$8,540 total could also have come from selling 310 hardcovers alone.**  (false)

The statement asks whether $310$ hardcovers alone could have produced the reported $\\$8{,}540$. That is a different mix: zero paperbacks, $310$ hardcovers.

The overview already recovered $y = 17$. The extra arithmetic is only costing those $310$ hardcovers.

**1.** Three hundred ten hardcovers at the recovered hardcover price:

$$310 \\times 17 = 5270$$

**2.** Compare with $\\$8{,}540$:

$$5270 \\neq 8540$$

The gap is $\\$3{,}270$, which is $400 \\times 12$ plus a leftover, the paperback column that this counterfactual dropped. Hardcovers alone at $\\$17$ cannot reach $\\$8{,}540$: that would need $8540/17=502.35$ hardcovers, not $310$.

Staff count $12$ and loyalty $45\\%$ are still distractors. They do not turn $310$ hardcovers into $\\$8{,}540$.

The $310$ hardcovers would bring $\\$5{,}270$, far below $\\$8{,}540$, Three hundred ten hardcovers alone is a one-product story. The reported $\\$8{,}540$ came from two products. At $y=17$, $310$ hardcovers bring $5270$, which is the hardcover column of a different, smaller shop. The missing $\\$3{,}270$ is exactly $400 \\times 12$ plus a leftover $270$, or $220 \\times 17 - 470$, depending on how one carves the original mix. None of those carvings turns $310$ hardcovers into $8540$.

To hit $8540$ with hardcovers alone would need $8540/17=502.35$ hardcovers, not $310$. The figure $310$ is $220+90$, as if ninety extra hardcovers had replaced the paperback column. Ninety extra hardcovers at $17$ add $1530$, and $220 \\times 17=3740$, total $5270$ still. Paperbacks cannot be replaced at hardcover prices without changing the revenue.

Loyalty share and staff headcount remain distractors. They do not convert $310$ copies of an $\\$17$ book into $\\$8{,}540$.

so the statement is False.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 12,
    solution_overview: `Memo. Pricing Desk: "Hardcover editions are priced exactly \\$5 above the paperback price this quarter, across the board.".

**Part 1: Building the system.**

Let $x$ = paperback price, $y$ = hardcover price. Staff headcount and the loyalty-member percentage do not affect unit pricing and should be set aside.

**1. Record this independent observation.** In symbols:

$$
y = x + 5
$$

**2. Record this independent observation.** In symbols:

$$
400x + 220y = 8540
$$

**Part 2: The model.**

$$
y = x + 5 \\tag{1}
$$

$$
400x + 220y = 8540 \\tag{2}
$$

**Part 3: Solve.**

**1.** Substitute directly: $400x + 220(x + 5) = 8540$.

**2.** Expanding:

$$
400x + 220x + 1100 = 8540, \\qquad 620x = 7440
$$

$$
x = 12
$$

**3.** Then

$$
y = 12 + 5 = 17
$$

**Answer.** Paperback = \\$12.00 | Hardcover = \\$17.00`,
  },
  {
    id: `math-5-13`,
    case_id: `MATH 5.13`,
    title: `SkyLink Mobile Promotional Flyer`,
    context: `SKYLINK MOBILE: BASIC  -  \\$15/month base + \\$2.00/GB overage. STANDARD  -  base fee and overage rate confirmed by billing history below. PREMIUM  -  \\$40/month, unlimited, no overage.`,
    tables_markdown: `| Month | Overage Used | Total Bill |
| --- | --- | --- |
| March | 8 GB | \\$62.00 |
| April | 3 GB | \\$47.00 |`,
    statements: [
      `The Standard plan has a lower base fee than the advertised Basic plan.`,
      `The overage rate on the Standard plan is \\$3.00 per GB.`,
      `A Standard customer using 10 GB of overage in May would be billed \\$68.00.`,
      `Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.`,
      `For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The Standard plan has a lower base fee than the advertised Basic plan.**  (false)

The statement compares Standard's recovered base fee with Basic's advertised $\\$15$ base, and claims Standard's base is lower. March billed $\\$62$ for $8$ GB of overage. April billed $\\$47$ for $3$ GB. Those two Standard bills recover the intercept. Basic's $\\$15$ is printed on the flyer, not recovered.

The overview already recovered Standard's base $x = 38$. Basic's base is printed at $\\$15$. Then $38 < 15$ is false. This letter does not rebuild the subtraction $5y=15$. It only asks which intercept is smaller.

**1.** Compare the two bases:

$$38 - 15 = 23$$

Standard's base sits $\\$23$ above Basic's, not below it. Standard's base is more than double Basic's.

**2.** The $5$ GB gap between March and April, at the recovered overage rate $y=3$, is $15$, and $62-15=47$, which rebuilds April. That check uses Standard's own bills. It never pulls Basic's $\\$15$ into Standard's intercept.

**3.** Mixing Basic's $\\$15$ into the Standard intercept, or averaging $\\$62$ and $\\$47$ toward something below $\\$15$, would manufacture a false "Standard is cheaper" story. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Averaging two overage bills cannot isolate a base below $\\$15$ when both bills already sit at $\\$47$ and $\\$62$.

Standard also has a steeper overage rate, $\\$3$ per GB against Basic's $\\$2$. Both pieces of Standard are more expensive than Basic, not less. Premium's $\\$40$ unlimited is a third plan and does not lower Standard's base. A customer who glanced at Premium, saw $\\$40$, and thought Standard must sit between Basic $\\$15$ and Premium $\\$40$ would still not be entitled to put Standard *below* Basic. Between is $38$, which is where the bills already are.

The opposite verdict would need Standard's March and April bills to recover an intercept below $\\$15$. With $\\$62$ at $8$ GB and $\\$47$ at $3$ GB, the intercept is $\\$38$.

Standard's base is $\\$38$, which is higher than Basic's $\\$15$, so the statement is False.`,
      `**B) The overage rate on the Standard plan is \\$3.00 per GB.**  (true)

The statement is a claim about Standard's overage rate, the slope on extra gigabytes, not about the $\\$38$ base that sits under every Standard bill. SkyLink's flyer already printed Basic and Premium; Standard's two history rows are what pin this slope.

The overview recovered $y = 3$ from the $\\$15$ gap between March's $\\$62$ and April's $\\$47$. That gap is $5$ GB of overage, so the slope is $\\$3$ per GB. This letter does not rebuild the base. It only asks whether the recovered slope is the $\\$3.00$ in the claim.

**1.** Subtract the two Standard bills to isolate the overage layer:

$$62 - 47 = 15, \\qquad 15/5 = 3$$

That check uses the recovered difference, not a second solve of $x+8y=62$.

**2.** Dividing $\\$62$ by $8$ GB would land on $\\$7.75$ and forget the base sitting under both bills. The recovered isolation is checked against the claim using $8$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Copying Basic's $\\$2.00$ per GB here would be reading the flyer, not Standard's history. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The opposite verdict would need a different pair of Standard bills. With March at $\\$62$ on $8$ GB and April at $\\$47$ on $3$ GB, the overage rate is pinned at $\\$3$.

The Standard overage rate is $\\$3.00$ per GB, so the statement is True.`,
      `**C) A Standard customer using 10 GB of overage in May would be billed \\$68.00.**  (true)

This letter is not March or April. March is $8$ GB at $\\$62$. April is $3$ GB at $\\$47$. The claim asks for a May bill at $10$ GB of overage on Standard.

The overview already has $x = 38$ and $y = 3$. The extra arithmetic is only evaluating Standard at $10$ GB.

**1.** Ten GB of overage at the recovered rate:

$$10 \\times 3 = 30$$

**2.** Add the recovered base:

$$38 + 30 = 68$$

The May bill is $\\$68$, matching the claim.

Using Basic's $\\$15+10 \\times 2=35$ here would be answering a different plan. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using Premium's flat $\\$40$ would also miss. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim names a Standard customer.

Scaling March's $\\$62$ by $10/8$ would get $\\$77.50$ and keep the $8$ GB shape inside the scale. The recovered comparison therefore keeps $10/8$ and does not substitute $8$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The honest route is the recovered intercept and slope at the new overage.

The recovered Standard plan at $10$ GB bills $\\$68.00$, May at $10$ GB is an interpolation past April's $3$ GB and March's $8$ GB. Extending the recovered line $38+3g$ to $g=10$ is $68$. Scaling March by $10/8$ would give $77.50$ and would keep March's $8$ GB inside the scale, which is the wrong overage. The honest route is the intercept and slope at the new overage.

Premium at $10$ GB is still $\\$40$, because Premium has no overage. Basic at $10$ GB is $15+20=35$. Neither of those other plans is this letter. Reporting $\\$40$ or $\\$35$ here would be naming a different plan. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim says a Standard customer.

If Standard's base had been $\\$38$ with Basic's $\\$2$ overage, May would have been $38+20=58$, not $68$. The March-April gap of $\\$15$ over $5$ GB forces $\\$3$ per GB, and that $\\$3$ is what puts $10$ GB at $38+30=68$.

so the statement is True.`,
      `**D) Switching from Standard to Premium would save money for a customer who typically uses 5 GB of overage per month.**  (true)

The statement compares Standard at $5$ GB of overage with Premium's flat $\\$40$, and claims switching to Premium would save money.

The overview already has Standard's $x=38$ and $y=3$. Premium is printed at $\\$40$ with no overage. The extra arithmetic is only costing Standard at $5$ GB and comparing.

**1.** Five GB of overage on Standard:

$$5 \\times 3 = 15$$

**2.** Add the Standard base:

$$38 + 15 = 53$$

**3.** Compare with Premium:

$$53 > 40$$

Switching to Premium saves $\\$13$ for this usage. Using April's $3$ GB bill $\\$47$ as a proxy for $5$ GB would still find $47>40$, so the verdict would survive that particular underestimate. Working from the isolated values, $3$ is the figure that is checked, not the detour that produced $47>40$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using Basic at $5$ GB, $15+10=25$, would conclude Premium is more expensive and flip the verdict. The stem's recovered values line up with $5$, whereas $15+10=25$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim is about switching from Standard, not from Basic.

The break-even between Standard and Premium is $38+3g=40$, so $g=\\frac{2}{3}$ GB. Any typical use of $5$ GB sits far above that break-even, so Premium is cheaper for that customer.

Standard at $5$ GB is $\\$53$, which is more than Premium's $\\$40$, Five GB of overage is a typical-use figure sitting between April's $3$ and March's $8$. Standard at that use is $53$. Premium is $40$ unlimited. The saving is $13$ dollars, which is not small relative to a $40$ cap. Break-even is only $2/3$ of a GB, so any customer who regularly uses $5$ GB is far into Premium's cheaper region.

Comparing Premium with Basic at $5$ GB, $15+10=25$ versus $40$, would conclude switching *to* Premium costs money. The stem's recovered values line up with $5$, whereas $40$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The claim is switching *from* Standard. Standard is the expensive plan in this flyer once overage is nonzero.

If Premium had been $\\$55$ unlimited, Standard at $5$ GB would have been cheaper and the claim would fail. The flyer prints Premium at $\\$40$. Combined with Standard's recovered $38+3g$, any $g>2/3$ favours Premium, and $5$ is well above $2/3$.

so the statement is True.`,
      `**E) For a customer using 8 GB of overage, the Basic plan works out cheaper than the Standard plan.**  (true)

The statement compares Basic and Standard at $8$ GB of overage, the same overage as March.

Basic is advertised as $\\$15$ plus $\\$2$ per GB. Standard's March bill for $8$ GB is already printed at $\\$62$, and the recovered plan $38+8 \\times 3=62$ confirms it. The extra arithmetic is only costing Basic at $8$ GB and comparing.

**1.** Basic at $8$ GB:

$$15 + 8 \\times 2 = 15 + 16 = 31$$

**2.** Standard at $8$ GB is March's $\\$62$.

**3.** Compare:

$$31 < 62$$

Basic is cheaper by $\\$31$ at this overage. That is not close. Standard's higher base and higher rate both push it above Basic for every positive overage.

Comparing Premium $\\$40$ with Standard $\\$62$ would still find Standard more expensive, but the claim names Basic, not Premium. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Using Standard's April bill $\\$47$ here would be using the wrong overage. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

At $8$ GB of overage, Basic costs $\\$31$ and Standard costs $\\$62$, so Basic is cheaper, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 13,
    solution_overview: `SKYLINK MOBILE: BASIC: \\$15/month base + \\$2.00/GB overage. STANDARD: base fee and overage rate confirmed by billing history below.

**Part 1: Building the system.**

Let $x$ = Standard plan's base fee, $y$ = its per-GB overage rate. The Basic and Premium prices belong to different plans and should not be substituted into this customer's equations.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Read the bill with 8 extra units.** At rate $y$, that bill is:

$$
x + 8y = 62.00
$$

**2. Read the bill with 3 extra units.** At rate $y$, that bill is:

$$
x + 3y = 47.00
$$

**Part 2: The model.**

$$
x + 8y = 62.00 \\tag{1}
$$

$$
x + 3y = 47.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract directly:

$$
(x + 8y) - (x + 3y) = 62.00 - 47.00
$$

$$
5y = 15, \\qquad y = 3
$$

**2.** Substitute back:

$$
x + 3(3) = 47, \\qquad x + 9 = 47, \\qquad x = 38
$$

**Answer.** Standard base fee = \\$38.00 | Overage rate = \\$3.00/GB`,
  },
  {
    id: `math-5-14`,
    case_id: `MATH 5.14`,
    title: `Lakeview Inn Booking Confirmations`,
    context: `LAKEVIEW INN  -  Rate Card. Standard Rooms & Suites, free breakfast & Wi-Fi, all rates subject to 8% occupancy tax.`,
    tables_markdown: `| Confirmation | Standard Rooms | Suites | Total Charged (incl. 8% tax) |
| --- | --- | --- | --- |
| Weekend 1 | 10 | 4 | \\$2,419.20 |
| Weekend 2 | 7 | 9 | \\$3,099.60 |`,
    statements: [
      `After removing the occupancy tax, Weekend 1's booking revenue was \\$2,240.00.`,
      `A Suite costs \\$200 more per night than a Standard room.`,
      `Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.`,
      `Including the 8% tax, a single Suite night costs \\$226.80.`,
      `Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by \\$210.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) After removing the occupancy tax, Weekend 1's booking revenue was \\$2,240.00.**  (true)

The statement is a claim about Weekend 1's pre-tax revenue, not about either room rate. Weekend 1 charged $\\$2{,}419.20$ for $10$ Standard rooms and $4$ Suites, already including an $8\\%$ occupancy tax. The extra arithmetic is only stripping that tax. Unit prices are not needed yet.

**1.** Divide the charged total by $1.08$:

$$\\frac{2419.20}{1.08} = 2240$$

**2.** Subtracting $8\\%$ of $2419.20$ as $193.536$ would land on $2225.664$ and miss the claim. The stem's recovered values line up with $8\\%$, whereas $2225.664$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $8\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does. An $8\\%$ tax is added to the pre-tax figure, so the peel is division by $1.08$, not subtraction of $8\\%$ of the gross. The trap figure $2225.66$ is that wrong peel.

**3.** Rebuild Weekend 1 at the recovered pre-tax rates $x=140$ and $y=210$, as a check:

$$10 \\times 140 + 4 \\times 210 = 1400 + 840 = 2240$$

Both routes give $\\$2{,}240$. Weekend 2's charged $\\$3{,}099.60$ is a different weekend and a different peel, $3099.60/1.08=2870$. Mixing that $2870$ into Weekend 1 would miss the claim.

Breakfast and Wi-Fi are listed as free and do not sit inside the occupancy tax. Mixing Weekend 2's charged $\\$3{,}099.60$ into this peel, or averaging the two charged weekends, manufactures a different pre-tax figure. The claim names Weekend 1 specifically.

The opposite verdict would need a different charged total or a different tax rate. With $\\$2{,}419.20$ at $8\\%$, Weekend 1's booking revenue before tax is $\\$2{,}240$. Reporting the charged $\\$2{,}419.20$ as pre-tax would have skipped the peel entirely. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The pre-tax Weekend 1 revenue is $\\$2{,}240.00$, so the statement is True.`,
      `**B) A Suite costs \\$200 more per night than a Standard room.**  (false)

The statement is a claim about the gap between a Suite and a Standard room, pre-tax. The overview already recovered $x=140$ and $y=210$. The extra arithmetic is only subtracting those two recovered nightly rates, then testing whether a $\\$200$ gap could still fit both weekends.

**1.** Recovered Suite minus recovered Standard:

$$210 - 140 = 70$$

**2.** The claim writes $\\$200$. Compare:

$$70 \\neq 200$$

**3.** At a $\\$200$ gap the Weekend 1 pre-tax row would be $10x+4(x+200)=2240$, so $14x+800=2240$, $14x=1440$, $x=102.86$. Weekend 2 would then be $7(102.86)+9(302.86) \\approx 3447$, far above the peeled $\\$2{,}870$. With both weekends as charged, the Suite cannot sit $\\$200$ above Standard.

The trap figure $\\$200$ is a typical round gap, or $210-10$ after mixing a tax story, or a misread of "Suite is half again Standard" as "Suite is $\\$200$ more." Half again of $140$ is $210$, which is the recovered Suite, and the gap on that pair is $70$, not $200$. Tax does not create a $\\$200$ gap either: $1.08 \\times 70 = 75.60$, still nowhere near $200$. Comparing taxed Suite $226.80$ with taxed Standard $151.20$ would still get a $75.60$ gap. After isolating the unknown, the check is against $226.80$. The figure $75.60$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $226.80$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

The opposite verdict would need a different pair of peeled weekend totals. With Weekend 1 at $\\$2{,}240$ pre-tax and Weekend 2 at $\\$2{,}870$ pre-tax, the gap is $\\$70$.

The recovered gap is $\\$70$, not $\\$200$, so the statement is False.`,
      `**C) Booking 6 Standard rooms for one night (pre-tax) costs less than booking 4 Suites.**  (false)

This letter is a new mix compared with another new mix: $6$ Standard rooms versus $4$ Suites, both pre-tax, and the claim says the six Standards cost less.

The overview already has $x = 140$ and $y = 210$. The extra arithmetic is only costing both baskets.

**1.** Six Standard rooms pre-tax:

$$6 \\times 140 = 840$$

**2.** Four Suites pre-tax:

$$4 \\times 210 = 840$$

**3.** Compare:

$$840 = 840$$

The two bookings cost the same, so six Standards are not cheaper. The inequality is strict, and equality fails it.

The equality is not an accident. One Suite is $1.5$ Standard rooms in price, because $210/140=1.5$. Four Suites are then $6$ Standard rooms exactly. Using the false $\\$200$ gap from letter B, taking Suites at $340$, would get $6(140)=840 < 4(340)=1360$ and flip the verdict. The stem's recovered values line up with $340$, whereas $6(140)=840 < 4(340)=1360$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $340$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered pair forbids that gap.

Tax does not enter, because the claim is pre-tax. Adding $8\\%$ to both sides would scale both $840$ figures by $1.08$ and leave them equal still.

Six Standards and four Suites both cost $\\$840$ pre-tax, so six Standards are not cheaper, so the statement is False.`,
      `**D) Including the 8% tax, a single Suite night costs \\$226.80.**  (true)

The statement is a claim about one Suite night after the $8\\%$ occupancy tax is applied, not about the pre-tax Suite rate itself. Lakeview quotes rooms pre-tax; the tax is a last-step multiplier on whatever rate the booking used.

The overview recovered the pre-tax Suite rate $y = 210$. The extra arithmetic is only applying the tax. This letter does not rebuild Weekend 1 or Weekend 2.

**1.** Start from the recovered Suite rate.

**2.** Multiply by one plus the occupancy tax:

$$210 \\times 1.08 = 226.80$$

The claim's $\\$226.80$ is that product, cents included. There is no leftover fraction to round.

Computing $210+8=218$, adding eight dollars instead of eight percent, would miss the claim. The recovered isolation is checked against the claim using $210+8=218$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using Standard's $140 \\times 1.08 = 151.20$ here would have swapped the room types. The path that matches the stem therefore holds $140 \\times 1.08 = 151.20$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Taxing $210$ twice would overshoot to about $\\$244.94$. The recovered isolation is checked against the claim using $210$, which is the figure the sessions actually produce.

The opposite verdict would need a different pre-tax Suite rate. If Suites had been $\\$200$ as letter B claimed, tax-on would have been $\\$216$, not $\\$226.80$. With $y=210$ recovered from the two weekends, a single Suite night including tax is $\\$226.80$.

A single Suite night including tax costs $\\$226.80$, so the statement is True.`,
      `**E) Had Weekend 2 booked 10 Suites instead of 9 (Standard rooms unchanged), pre-tax revenue would have risen by \\$210.**  (true)

The statement is a one-Suite increment on Weekend 2: Standard rooms unchanged, one extra Suite, pre-tax. Weekend 2 actually booked $7$ Standard rooms and $9$ Suites. The claim pushes Suites from $9$ to $10$.

The overview already recovered $y=210$ as the pre-tax Suite rate. The extra arithmetic is only that increment.

**1.** One extra Suite at the recovered pre-tax Suite rate:

$$1 \\times 210 = 210$$

**2.** Weekend 2's new pre-tax total would be the peeled $\\$2{,}870$ plus that increment:

$$2870 + 210 = 3080$$

**3.** Adding the taxed Suite night $\\$226.80$ here would be answering a with-tax question. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The claim is pre-tax. Using the Standard rate $140$ would report a $\\$140$ rise and miss the claim. Once $140$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Using letter B's false $\\$200$ gap, adding $200$ onto $140$, would happen to land on $340$ or on $200$ depending on which end they grabbed, neither of which is $210$. That is the fork: $200$ belongs to the recovered isolation, $210$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does.

Standard rooms are unchanged, so they add $0$ to the increment. Occupancy tax is not applied in this letter; the claim names pre-tax revenue. Adding a tenth Suite after tax would raise the charged total by $210 \\times 1.08 = 226.80$, which is letter D's neighbourhood, not this increment.

The opposite verdict would need a different recovered Suite rate. With $y=210$, one extra Suite raises Weekend 2's pre-tax revenue by $\\$210$. That $\\$210$ is the Suite's own pre-tax price, not a coincidence with the $\\$200$ false gap in letter B.

Weekend 2's pre-tax revenue would rise by the claimed $\\$210$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 14,
    solution_overview: `LAKEVIEW INN. Rate Card. Standard Rooms & Suites, free breakfast & Wi-Fi, all rates subject to 8% occupancy tax.

**Part 1: Building the system.**

Let $x$ = nightly Standard rate, $y$ = nightly Suite rate, both before tax. Each total must first be converted back to a pre-tax figure before it can be used in the model.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Record this independent observation.** In symbols:

$$
10x + 4y = 2419.20 \\/ 1.08 = 2240.00
$$

**2. Record this independent observation.** In symbols:

$$
7x + 9y = 3099.60 \\/ 1.08 = 2870.00
$$

**Part 2: The model.**

$$
10x + 4y = 2419.20 \\/ 1.08 = 2240.00 \\tag{1}
$$

$$
7x + 9y = 3099.60 \\/ 1.08 = 2870.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** From the first equation, $5x + 2y = 1120$, so $y = \\frac{(1120 - 5x)}{2}$.

**2.** Substituting into the second (after doubling it to $14x + 18y = 5740$):

$$
14x + 9(1120 - 5x) = 5740
$$

$$
14x + 10080 - 45x = 5740, \\qquad -31x = -4340
$$

$$
x = 140
$$

**3.** Then

$$
y = \\frac{1120 - 5(140)}{2} = \\frac{420}{2} = 210
$$

**Answer.** Standard = \\$140.00/night (pre-tax) | Suite = \\$210.00/night (pre-tax)`,
  },
  {
    id: `math-5-15`,
    case_id: `MATH 5.15`,
    title: `Crestwood Distribution Centre, Inventory Valuation`,
    context: `Only the January and February rows report actual recorded inventory values. March is a forecast row and cannot be used to solve for today's unit costs. Warehouse floor space and on-site staff are distractors (not needed below).`,
    tables_markdown: `| Period | Type | Comp. A (units) | Comp. B (units) | Total Value |
| --- | --- | --- | --- | --- |
| January | Actual | 150 | 90 | \\$3,150 |
| February | Actual | 130 | 140 | \\$3,660 |
| March | Forecast | 200 | 100 | \\$4,700 (projected) |`,
    statements: [
      `Component A's unit cost is \\$12.`,
      `Component B's unit cost is \\$18.`,
      `The March forecast assumes higher unit prices than what actually applied in January and February.`,
      `If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be \\$4,700.`,
      `The combined actual inventory value recorded for January and February is \\$6,810.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Component A's unit cost is \\$12.**  (true)

The statement is a claim about Component A's unit cost at Crestwood. Only January and February report actual recorded inventory values. March is a forecast row and cannot be used to solve for today's unit costs.

The overview already recovered $x = 12$ from those two actual rows. This letter does not rebuild that pair. It only asks whether the recovered A cost is the number in the claim.

**1.** The recovered $12$ is attached to Component A, not to Component B. Quoting $\\$15$ here would have swapped the labels. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence.

**2.** Dividing January's $\\$3{,}150$ by $150$ units of A, ignoring the $90$ units of B, would land on $\\$21$ and miss the claim. So the letter reads the claim against $150$; $90$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $150$ stays in the write-up. The trap figure $\\$21$ is an A-only split of a mixed January row. Warehouse floor space and on-site staff are distractors; folding them into the value would manufacture a different unit cost.

The opposite verdict would need a different recorded January or February total. With $\\$3{,}150$ and $\\$3{,}660$ as actuals, Component A cannot cost anything other than $\\$12$.

The recovered A cost matches the claimed $\\$12$, so the statement is True.`,
      `**B) Component B's unit cost is \\$18.**  (false)

The statement is a claim about Component B's unit cost. The overview already recovered $y = 15$ from the January and February actuals. The claim writes $\\$18$, three dollars above that leftover. March is a forecast and does not enter the solve.

**1.** Rebuild January at $x=12$ and the claimed $y=18$:

$$150 \\times 12 + 90 \\times 18 = 1800 + 1620 = 3420$$

**2.** Compare with the recorded January value:

$$3420 - 3150 = 270$$

Those extra $\\$270$ are ninety B units times a $\\$3$ overstatement.

**3.** February at the same false $y$ would be $130(12)+140(18)=1560+2520=4080$, which overshoots the recorded $\\$3{,}660$ by $\\$420$. Those extra $\\$420$ are $140 \\times 3$. Both actual rows reject $\\$18$.

The trap figure $\\$18$ is a typical misread of the March forecast: $4700$ for $200+100$ items averages about $\\$15.67$, or of February $3660/140 \\approx 26$ after ignoring A. Warehouse floor space does not price B. March's forecast quantities $200$ A and $100$ B at the actual costs would be $200(12)+100(15)=3900$, not $18$ on B. Using March to recover $y$ is the error the stem warned against: March is a forecast row.

The opposite verdict would need January's recorded value to be $\\$3{,}420$ instead of $\\$3{,}150$. With the two actual rows as printed, Component B cannot cost $\\$18$.

The claimed $\\$18$ sits $\\$3$ above the recovered $\\$15$, so the statement is False.`,
      `**C) The March forecast assumes higher unit prices than what actually applied in January and February.**  (true)

The statement compares the March forecast with the actual January/February unit costs. March is not a third equation. It is a projected mix of $200$ A and $100$ B listed at $\\$4{,}700$.

The overview already recovered $x=12$ and $y=15$. The extra arithmetic is only valuing March's quantities at those actual costs, then comparing with the forecast.

**1.** Two hundred A at the actual A cost:

$$200 \\times 12 = 2400$$

**2.** One hundred B at the actual B cost:

$$100 \\times 15 = 1500$$

**3.** Add and compare with the forecast $\\$4{,}700$:

$$2400 + 1500 = 3900$$

The forecast $\\$4{,}700$ sits $\\$800$ above $\\$3{,}900$. That extra $\\$800$ is the whole content of "assumes higher unit prices." If March used the same unit costs as January and February, the projected value would be $\\$3{,}900$, not $\\$4{,}700$.

Treating March as a third actual row and trying to find a pair that fits all three would find the system inconsistent, which is the same conclusion in different language: March is not using January/February prices. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

Comparing $\\$4{,}700$ with January $\\$3{,}150$ and calling that "higher" would be comparing totals of different quantities, not unit prices. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The honest comparison holds quantities fixed at March's $200$ and $100$.

The March forecast of $\\$4{,}700$ exceeds the actual-cost valuation $\\$3{,}900$, so it assumes higher unit prices, March is labelled a forecast. Using it as a third actual row would ask three equations to share one pair $(x,y)$, and they do not. The actual-cost valuation of March's $200$ A and $100$ B is $3900$. The forecast $4700$ is $800$ higher. That $800$ is $200 \\times 2 + 100 \\times 4$ if both unit costs were marked up, or $200 \\times 4$ if only A were marked up by $4$, among other splits. The letter does not need to pick a split. It only needs to see that $4700>3900$ at the same quantities, which is the definition of assuming higher unit prices.

Comparing $4700$ with January $3150$ and calling the forecast "higher" would be comparing different quantities. That is the fork: $4700$ belongs to the recovered isolation, $3150$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Holding March's $200$ and $100$ fixed is what makes the comparison a statement about prices rather than about volume.

If March had been forecast at $3900$, this letter would be false: the forecast would match actual costs. The printed $4700$ is what makes it true. Warehouse floor space and staff still do not enter.

so the statement is True.`,
      `**D) If March's forecast quantities (200 A + 100 B) were valued at the actual January/February unit costs, the result would be \\$4,700.**  (false)

The statement claims that March's $200$ A and $100$ B, valued at the actual January/February costs, would equal the forecast $\\$4{,}700$.

Letter C already valued that mix at $x=12$ and $y=15$ and got $\\$3{,}900$. This letter is the other side of the same comparison: it claims the actual-cost valuation *is* $\\$4{,}700$.

**1.** Actual-cost valuation of March's quantities:

$$200(12) + 100(15) = 3900$$

**2.** Compare with $\\$4{,}700$:

$$3900 \\neq 4700$$

The gap is still $\\$800$. Reporting the forecast figure as if it were already an actual-cost total would accept the claim without doing the arithmetic. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The forecast is a projection, not a valuation at recovered costs.

What would have to change for the opposite verdict? If A were $\\$16$ and B were $\\$15$, the mix would be $3200+1500=4700$. January forbids $x=16$: $150(16)+90(15)=2400+1350=3750$, which overshoots $\\$3{,}150$. With January and February as recorded, March's actual-cost value cannot be $\\$4{,}700$.

The actual-cost valuation is $\\$3{,}900$, not $\\$4{,}700$, This letter is the false twin of letter C. Letter C says the forecast assumes higher prices, which is true because actual-cost March is $3900$ not $4700$. Letter D says actual-cost March *is* $4700$, which is the opposite assignment of the same two numbers.

The extra arithmetic is therefore the same two products, $200 \\times 12$ and $100 \\times 15$, summing to $3900$. The claimed $4700$ is the forecast row copied back as if it were already an actual-cost total. Copying a forecast into an actual-cost sentence is the error.

Solving a three-row system and found no solution would be seeing the same inconsistency from the other direction. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The right response is not to invent new unit costs for March; it is to value March's quantities at January/February costs and notice the $800$ gap. That gap is why D is false and C is true.

so the statement is False.`,
      `**E) The combined actual inventory value recorded for January and February is \\$6,810.**  (true)

The statement is a claim about the combined actual inventory value of January and February at Crestwood. Those two printed totals are $\\$3{,}150$ and $\\$3{,}660$. March is a forecast row and is not added. Warehouse floor space and staff counts are distractors.

This letter does not recover Component A or Component B. The extra arithmetic is only adding the two actual rows that the stem already printed.

**1.** Take January's recorded value.

**2.** Add February's recorded value, and leave March out:

$$3150 + 3660 = 6810$$

The claim's $\\$6{,}810$ is that sum. Including March's $\\$4{,}700$ would get $\\$11{,}510$ and miss the claim. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The word "actual" is doing the work: only the two actual rows enter.

Rebuilding January plus February at the recovered $x=12$ and $y=15$ would still land on $6810$, which is a consistency check, not a new unknown. So the letter reads the claim against $x=12$; $6810$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $x=12$ stays in the write-up. Averaging the three rows and doubling would mix the forecast into the actuals.

The opposite verdict would need a different printed January or February total. With those two rows as recorded, the combined actual value is $\\$6{,}810$.

The combined actual value is $\\$6{,}810$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 15,
    solution_overview: `Only the January and February rows report actual recorded inventory values. March is a forecast row and cannot be used to solve for today's unit costs.

**Part 1: Building the system.**

Only the January and February rows report actual recorded values; March is explicitly labelled a forecast and cannot be used to solve for today's unit costs.

Only the observation rows that report actual measured totals enter the system; forecast or unused rows stay out of the coefficients.

**1. Use the January row (actual data).** Write the equation:

$$
150x + 90y = 3150
$$

**2. Use the February row (actual data).** Write the equation:

$$
130x + 140y = 3660
$$

**Part 2: The model.**

$$
150x + 90y = 3150 \\tag{1}
$$

$$
130x + 140y = 3660 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide by 30 and 10 respectively: $5x + 3y = 105$; $13x + 14y = 366$.

**2.** Multiply by 14 and 3: $70x + 42y = 1470$; $39x + 42y = 1098$.

**3.** Subtracting:

$$
(70x + 42y) - (39x + 42y) = 1470 - 1098
$$

$$
31x = 372, \\qquad x = 12
$$

**4.** Then from $5(12) + 3y = 105$:

$$
60 + 3y = 105, \\qquad 3y = 45, \\qquad y = 15
$$

**Answer.** Component A = \\$12.00/unit | Component B = \\$15.00/unit`,
  },
  {
    id: `math-5-16`,
    case_id: `MATH 5.16`,
    title: `Sunrise Staffing, Overtime Contract Check`,
    context: `Sunrise Staffing's contract states overtime must be paid at exactly 1.5× the regular hourly wage. A union representative pulled this week's payroll for two workers, both completing a full 40-hour regular week, to check whether that rule was actually followed.`,
    tables_markdown: `| Worker | Regular Hrs | Overtime Hrs | Total Pay |
| --- | --- | --- | --- |
| Worker 1 | 40 | 6 | \\$704 |
| Worker 2 | 40 | 2 | \\$608 |`,
    statements: [
      `The overtime rate actually paid matches the contractual $1.5\\times$ regular-rate rule.`,
      `The regular hourly wage is \\$14.`,
      `Relative to the $1.5\\times$ contract rule, Worker 2 was overpaid by exactly \\$6.00 on their overtime hours.`,
      `A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn \\$656.`,
      `That same third worker, paid strictly under the $1.5\\times$ contract rule instead, would earn \\$644.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The overtime rate actually paid matches the contractual $1.5\\times$ regular-rate rule.**  (false)

The statement claims the overtime rate actually paid matches the contract's $1.5\\times$ regular-rate rule. Worker 1 earned $\\$704$ for $40$ regular hours plus $6$ overtime hours. Worker 2 earned $\\$608$ for $40$ regular hours plus $2$ overtime hours. Both completed a full $40$-hour regular week.

The overview already recovered $x=14$ and $y=24$. The extra arithmetic is only forming the contract overtime rate and comparing it with the actual overtime rate.

**1.** Contract overtime at $1.5$ times the recovered regular wage:

$$1.5 \\times 14 = 21$$

**2.** Compare with the overtime rate actually paid:

$$24 \\neq 21$$

**3.** The per-hour gap is $3$. Worker 1's six overtime hours therefore carry $6 \\times 3=18$ extra dollars, and Worker 2's two overtime hours carry $2 \\times 3=6$ extra dollars. Those extras are how the two payroll rows refuse the $1.5\\times$ rule.

Comparing $24$ with $1.5 \\times 16$ after misreading the regular wage would manufacture a match at $24=24$. Working from the isolated values, $24$ is the figure that is checked, not the detour that produced $24=24$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $\\$16$ is $\\$608/38$ after dropping two hours, or a blend of regular and overtime. The two payroll rows force $x=14$ and $y=24$, and those do not match the $1.5\\times$ rule. Checking only Worker 2, $608$ against $40(14)+2(21)=560+42=602$, would already see a $\\$6$ miss, which is letter C's extra, not a match. That is the fork: $608$ belongs to the recovered isolation, $40(14)+2(21)=560+42=602$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Matching the contract would require both extras to be zero.

The opposite verdict would need the actual overtime rate to be $\\$21$. With $\\$704$ and $\\$608$ as paid, it is $\\$24$.

The actual overtime rate does not match the contract, so the statement is False.`,
      `**B) The regular hourly wage is \\$14.**  (true)

The statement is a claim about the regular hourly wage at Sunrise Staffing. Both workers completed a full $40$-hour regular week, so the regular wage is the shared intercept of the two payroll rows.

The overview already recovered $x = 14$. The claim writes $\\$14$, which is exactly that intercept. This letter does not rebuild the subtraction that isolated overtime. It only asks whether the recovered regular wage is the number in the claim.

**1.** The recovered $14$ is attached to regular hours, not to overtime. Quoting $\\$24$ here would have swapped the rates. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** Dividing Worker 2's $\\$608$ by $42$ total hours would land on about $\\$14.48$ and mix overtime into the regular rate. Once $42$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The trap figure $\\$14.48$ is an all-hours split of a mixed week. The overtime hours have to be stripped out first.

The opposite verdict would need a different pair of payroll totals. With $\\$704$ and $\\$608$ as paid, the regular wage cannot be anything other than $\\$14$.

The recovered regular wage matches the claimed $\\$14$, so the statement is True.`,
      `**C) Relative to the $1.5\\times$ contract rule, Worker 2 was overpaid by exactly \\$6.00 on their overtime hours.**  (true)

The statement is a claim about Worker 2's overtime overpayment relative to the contract, not about Worker 1. The overview already recovered actual overtime $y=24$ and regular $x=14$, so the contract overtime rate is $1.5 \\times 14 = 21$. Worker 2 had $2$ overtime hours. The extra arithmetic is only the gap times those hours.

**1.** Per-hour overpayment against the contract:

$$24 - 21 = 3$$

**2.** Two overtime hours at that per-hour extra:

$$2 \\times 3 = 6$$

**3.** Worker 2's whole extra is therefore $\\$6$, matching the claim. Worker 1's six overtime hours would have been $6 \\times 3=18$, which is a different letter. Using Worker 1's hours here would get $\\$18$ and miss the claim. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. Reporting the $\\$3$ per-hour gap as the total would undershoot. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

The trap figure $\\$18$ is Worker 1's overtime extra, parked on Worker 2. The trap figure $\\$3$ is the rate gap left unmultiplied. Neither is Worker 2's two-hour extra. Worker 2's whole pay $\\$608$ minus the contract rebuild $40(14)+2(21)=602$ is the same $\\$6$, a useful check that does not re-solve the rates.

The opposite verdict would need Worker 2 to have a different overtime count, or a different actual overtime rate. With $2$ overtime hours at $\\$24$ against a $\\$21$ contract rate, the overtime overpayment is $\\$6$.

The overtime overpayment on Worker 2 is $\\$6.00$, so the statement is True.`,
      `**D) A third worker completing 40 regular + 4 overtime hours, paid at the rates actually used this week, would earn \\$656.**  (true)

This letter is a third worker, not in the table: $40$ regular hours plus $4$ overtime hours, paid at the rates actually used this week, $x=14$ and $y=24$.

The extra arithmetic is only costing that new mix at the actual rates.

**1.** Forty regular hours at $\\$14$:

$$40 \\times 14 = 560$$

**2.** Four overtime hours at the actual $\\$24$:

$$4 \\times 24 = 96$$

**3.** Add:

$$560 + 96 = 656$$

The third worker would earn $\\$656$ at this week's actual rates, matching the claim.

Using the contract overtime $21$ here would get $560+84=644$, which is letter E's figure. After isolating the unknown, the check is against $21$. The figure $560+84=644$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $21$ stays in the write-up. Mixing the two letters is the main trap: actual rates for D, contract rates for E.

Using Worker 1's $6$ overtime hours or Worker 2's $2$ would be costing a different person. So the letter reads the claim against $6$; $2$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $6$ stays in the write-up. The claim names $4$ overtime hours.

The actual-rate mix of $40+4$ hours is $\\$656$, Four overtime hours sit between Worker 1's $6$ and Worker 2's $2$, so this third worker is an interpolation of the overtime column at the actual rates. Regular pay is the same $560$ for anyone who completed a $40$-hour week at $14$ per hour. The letter's extra piece is only $4 \\times 24=96$. Adding those is $656$, matching the claim.

Interpolating the two printed totals, halfway from $608$ to $704$, would get $656$ as well, because $4$ hours is halfway in overtime between $2$ and $6$. Working from the isolated values, $608$ is the figure that is checked, not the detour that produced $6$. That shortcut happens to work because regular pay is identical. It would fail if the workers had different regular hours. The honest costing still uses $x=14$ and $y=24$.

If the firm had paid contract overtime $21$ on this third worker, the total would be letter E's $644$. Mixing D and E is the main trap: D is actual rates, E is contract rates, same hours.

so the statement is True.`,
      `**E) That same third worker, paid strictly under the $1.5\\times$ contract rule instead, would earn \\$644.**  (true)

This letter is the same third worker as letter D, but paid strictly under the $1.5\\times$ contract rule instead of at this week's actual overtime rate.

The overview already has $x=14$, so contract overtime is $1.5 \\times 14 = 21$. The extra arithmetic is only costing $40+4$ hours at those contract rates.

**1.** Forty regular hours at $\\$14$:

$$40 \\times 14 = 560$$

**2.** Four overtime hours at the contract $\\$21$:

$$4 \\times 21 = 84$$

**3.** Add:

$$560 + 84 = 644$$

The third worker would earn $\\$644$ under the contract, matching the claim. Compared with letter D's $\\$656$, the contract saves the firm $\\$12$, which is $4 \\times 3$, four hours times the $\\$3$ per-hour gap.

Using $y=24$ here would be repeating letter D. That is why $y=24$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. Taking $1.5 \\times 16$ as overtime after a wrong regular wage would miss $644$. Working from the isolated values, $1.5 \\times 16$ is the figure that is checked, not the detour that produced $644$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The contract-rate mix of $40+4$ hours is $\\$644$, The contract rate $21$ is $1.5 \\times 14$, which the firm did not actually pay. This letter asks what the third worker *would* have earned under the rule the contract states. Regular pay is still $560$. Overtime is $4 \\times 21=84$. The sum is $644$, twelve dollars below letter D, and those twelve dollars are $4 \\times 3$, four hours times the $\\$3$ per-hour overpayment the union found.

Using $1.5 \\times 24=36$ as if the contract applied to the already-inflated overtime rate would overshoot wildly. The path that matches the stem therefore holds $1.5 \\times 24=36$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The contract applies to the regular rate, not to the actual overtime rate. Taking $90\\%$ of $656$ as a "contract discount" would get $590.40$ and miss $644$. The stem's recovered values line up with $90\\%$, whereas $644$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $90\\%$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The contract is a specific multiplier $1.5$, not a discount on the actual bill.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 16,
    solution_overview: `Sunrise Staffing's contract states overtime must be paid at exactly 1.5× the regular hourly wage. A union representative pulled this week's payroll for two workers, both completing a full 40-hour regular week, to check whether that rule was actually followed.

**Part 1: Building the system.**

Let $x$ = regular hourly wage, $y$ = overtime rate actually paid. Only once both rates are known can they be compared against the contract's 1.5× rule.

Time coefficients come from the story's clocks (head-starts, overtime hours, or duration multipliers), not from the headline total alone.

**1. Record this independent observation.** In symbols:

$$
40x + 6y = 704
$$

**2. Record this independent observation.** In symbols:

$$
40x + 2y = 608
$$

**Part 2: The model.**

$$
40x + 6y = 704 \\tag{1}
$$

$$
40x + 2y = 608 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting cancels the $40x$ term:

$$
(40x + 6y) - (40x + 2y) = 704 - 608 \\Rightarrow 4y = 96 \\Rightarrow y = 24
$$

**2.** Substituting back into Worker 2:

$$
40x + 2(24) = 608 \\Rightarrow 40x + 48 = 608 \\Rightarrow x = 14
$$

**Answer.** Regular wage = \\$14.00/hr | Overtime actually paid = \\$24.00/hr (contract requires \\$21.00/hr)`,
  },
  {
    id: `math-5-17`,
    case_id: `MATH 5.17`,
    title: `Riverside Water Utility, Billing Dispute`,
    context: `A customer contacted Riverside Water to query two consecutive bills. She used 18 m³ in May and was billed \\$56.10  -  but May's bill also carried a 10% late penalty applied to the entire bill. In June she used 25 m³ with no penalty, billed \\$65.00. The billing office insists its fixed charge is \\$18.00 and its rate is \\$1.85 per m³.`,
    statements: [
      `The billing office's claim of an \\$18.00 fixed monthly charge is correct.`,
      `The rate charged is \\$2.00 per cubic metre.`,
      `After removing the late penalty, May's actual water charge was \\$51.00.`,
      `A customer using 40 m³ in a month would be billed \\$85.00.`,
      `Had the same 10% late penalty been applied to June's \\$65.00 bill, the total would have been \\$71.50.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) The billing office's claim of an \\$18.00 fixed monthly charge is correct.**  (false)

The statement claims the billing office's $\\$18$ fixed monthly charge is correct. May used $18\\,\\mathrm{m}^{3}$ and was billed $\\$56.10$ including a $10\\%$ late penalty on the entire bill. June used $25\\,\\mathrm{m}^{3}$ with no penalty, billed $\\$65.00$. After peeling May, those two clean bills recover a different intercept.

The overview already recovered $x = 15$. The office claimed $\\$18$, which sits $\\$3$ above that intercept. This letter does not rebuild $7y=14$. It only asks whether $\\$18$ can be the fee that sits on both peeled bills.

**1.** At $x=18$ and the recovered rate $y=2$, May's clean bill would be

$$18 + 18 \\times 2 = 54$$

but the peeled May charge is $\\$51$. Those extra $\\$3$ are the overstated fee.

**2.** June at the same false fee would be $18+25(2)=68$, which overshoots the printed $\\$65$ by the same $\\$3$.

**3.** The office also claimed $\\$1.85$ per cubic metre, which is not the recovered $y=2$. At $x=18$ and $y=1.85$, June would be $18+46.25=64.25$, close to $\\$65$ but not on it, and peeled May would be $18+33.30=51.30$, close to $\\$51$ but not on it. Nearby is not a match.

The trap figure $\\$18$ is the office's own claim, sitting in the stem as a disputed number. Quoting the office is not reading the bills. Nearby is not a match: the office's pair $(18, 1.85)$ misses both peeled totals, so it is not the plan.

The opposite verdict would need the peeled May charge to be $\\$54$ instead of $\\$51$. With $\\$51$ and $\\$65$ as clean totals, the fixed charge cannot be $\\$18$.

The recovered fixed charge is $\\$15$, not $\\$18$, so the statement is False.`,
      `**B) The rate charged is \\$2.00 per cubic metre.**  (true)

The statement is a claim about the per-cubic-metre rate. After peeling May, the $7\\,\\mathrm{m}^{3}$ gap between June and May isolates that slope.

The overview already recovered $y = 2$. The claim writes $\\$2.00$ per cubic metre, which is exactly that slope. This letter does not rebuild the intercept. It only asks whether the recovered rate is the number in the claim.

**1.** The recovered $2$ is attached to usage, not to the fixed charge. Quoting $\\$15$ here would have swapped rate and fee. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Using the office's $\\$1.85$ here would be quoting the disputed claim, not the bills. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Dividing June's $\\$65$ by $25$ would land on $\\$2.60$ and forget the fixed charge. Once $25$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The trap figure $\\$2.60$ is an all-in split of June. The trap figure $\\$1.85$ is the office's rate.

The opposite verdict would need a different pair of clean bills. With peeled May at $\\$51$ and June at $\\$65$, the rate cannot be anything other than $\\$2$.

The recovered rate matches the claimed $\\$2.00$ per cubic metre, so the statement is True.`,
      `**C) After removing the late penalty, May's actual water charge was \\$51.00.**  (true)

The statement is a claim about May's water charge after the $10\\%$ late penalty is removed. May was billed $\\$56.10$ including that penalty on the entire bill. The extra arithmetic is only dividing by $1.10$. Unit prices are not needed yet.

**1.** Divide the billed May total by $1.10$:

$$\\frac{56.10}{1.10} = 51$$

**2.** Subtracting $10\\%$ of $56.10$ as $5.61$ would land on $50.49$ and miss the claim. That is the fork: $10\\%$ belongs to the recovered isolation, $50.49$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The penalty was applied to the whole bill, so the peel is division by $1.10$, not subtraction of $10\\%$ of the gross. The trap figure $50.49$ is that wrong peel.

**3.** Rebuild May at the recovered plan $x=15$, $y=2$:

$$15 + 18 \\times 2 = 51$$

Both routes give $\\$51$. June's $\\$65$ is already clean and should not be peeled. Dividing June by $1.10$ as well would get $59.09$ and have invented a penalty the stem says June did not carry. The recovered comparison therefore keeps $1.10$ and does not substitute $59.09$. That contrast is the reason the verdict goes the way it does. Reporting $\\$56.10$ as the water charge would have left the penalty in. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

The opposite verdict would need a different May billed total or a penalty that was a flat add-on rather than $10\\%$ of the whole bill. With $\\$56.10$ as $1.10$ times the water charge, May's actual water charge is $\\$51$.

May's actual water charge was $\\$51.00$, so the statement is True.`,
      `**D) A customer using 40 m³ in a month would be billed \\$85.00.**  (false)

This letter is not May or June. May is $18\\,\\mathrm{m}^{3}$ (clean $\\$51$). June is $25\\,\\mathrm{m}^{3}$ at $\\$65$. The claim asks for a third month: $40\\,\\mathrm{m}^{3}$, compared with $\\$85$.

The overview already has $x = 15$ and $y = 2$. The extra arithmetic is only evaluating the plan at $40\\,\\mathrm{m}^{3}$.

**1.** Forty cubic metres at the recovered rate:

$$40 \\times 2 = 80$$

**2.** Add the recovered fixed charge:

$$15 + 80 = 95$$

**3.** Compare with $\\$85$:

$$95 \\neq 85$$

The bill is $\\$95$, not $\\$85$. The gap is $\\$10$.

Where does $\\$85$ come from as a trap? Using the office's $18+40 \\times 1.85=18+74=92$ still misses $85$. Working from the isolated values, $18+40 \\times 1.85=18+74=92$ is the figure that is checked, not the detour that produced $85$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $15+40 \\times 1.75$ or $5+40 \\times 2=85$ can manufacture the claim by dropping $\\$10$ of the fee. The recovered comparison therefore keeps $15+40 \\times 1.75$ and does not substitute $5+40 \\times 2=85$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Another route: take June's $\\$65$ and add $15\\,\\mathrm{m}^{3}$ at $\\$1.33$, wandering toward $85$.

The office's false fee $\\$18$ with the true rate $2$ would give $18+80=98$, even farther from $85$. With the recovered pair, $40\\,\\mathrm{m}^{3}$ cannot bill at $\\$85$.

What would have to change for the opposite verdict? If the fee were $\\$5$, or if the rate were $\\$1.75$ with a $\\$15$ fee, the $40\\,\\mathrm{m}^{3}$ bill would be $\\$85$. The two actual months force $x=15$ and $y=2$, and those force $\\$95$ at $40\\,\\mathrm{m}^{3}$.

The recovered plan at $40\\,\\mathrm{m}^{3}$ bills $\\$95$, not $\\$85$, Forty cubic metres is $15$ above June's $25$ and $22$ above May's $18$. Extending the recovered line $15+2v$ to $v=40$ is $95$. Adding $15 \\times 2=30$ onto June's $65$ gives the same $95$. That extension is this letter's extra arithmetic. The claimed $85$ is $10$ light, which is a dropped fee, or a rate of $1.75$ with a $15$ fee, or the office's $18+40 \\times 1.675$.

The office's advertised pair $18$ and $1.85$ would bill $18+74=92$ at $40\\,\\mathrm{m}^{3}$, still not $85$. So even the false office story does not produce the claimed total. The recovered pair produces $95$. Neither story is $85$.

Using $40 \\times 2.125$ with no fee, or $15+40 \\times 1.75$, can manufacture $85$. That is the fork: $40 \\times 2.125$ belongs to the recovered isolation, $85$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Those rates are not the $2.00$ isolated from the $7\\,\\mathrm{m}^{3}$ gap between June and peeled May. With $x=15$ and $y=2$, a $40\\,\\mathrm{m}^{3}$ month cannot bill at $85$.

so the statement is False.`,
      `**E) Had the same 10% late penalty been applied to June's \\$65.00 bill, the total would have been \\$71.50.**  (true)

The statement applies May's $10\\%$ late penalty to June's already-clean $\\$65$ bill. June had no penalty. The claim is a counterfactual. The extra arithmetic is only multiplying the printed June total by $1.10$. The recovered fee and rate are not needed, because June's $\\$65$ is already the clean water charge.

**1.** Apply a $10\\%$ penalty to the whole June bill:

$$65 \\times 1.10 = 71.50$$

**2.** Adding $\\$10$ as a round penalty would get $\\$75$. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Applying $10\\%$ only to the usage portion $50$, leaving the $\\$15$ fee unpenalized, would get $65+5=70$. The recovered comparison therefore keeps $10\\%$ and does not substitute $65+5=70$. The stem says May's penalty was applied to the entire bill, so the same rule on June hits the whole $\\$65$.

**3.** Rebuilding June from the recovered plan and then penalizing gives the same figure: $15+25(2)=65$, then $65 \\times 1.10=71.50$. That is a check, not a second solve.

The trap figure $\\$75$ is a round ten-dollar penalty. The trap figure $\\$70$ is a fee-exempt $10\\%$. Neither is "the same $10\\%$ late penalty" the stem described for May. Taking $10\\%$ of $65$ as $6.50$ and then adding it to May's $\\$56.10$ would be mixing months. So the letter reads the claim against $10\\%$; $6.50$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $10\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does. June's counterfactual stands on June's $\\$65$ alone.

The opposite verdict would need June's clean bill to be a different total, or a penalty rule that skipped the fixed charge. With $\\$65$ penalized at $10\\%$ on the whole bill, the total would have been $\\$71.50$.

A $10\\%$ penalty on June would have produced $\\$71.50$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 17,
    solution_overview: `A customer contacted Riverside Water to query two consecutive bills. She used 18 m³ in May and was billed \\$56.10, but May's bill also carried a 10% late penalty applied to the entire bill.

**Part 1: Building the system.**

Since the 10% penalty was applied to May's whole bill rather than as a flat add-on, May's reported total must first be divided back down. The fixed charge and rate must be derived independently from the two bills, since the phone claim may not be accurate.

**1. Record this independent observation.** In symbols:

$$
x + 18y = 56.10 \\/ 1.10 = 51.00
$$

**2. Read the bill with 25 extra units.** At rate $y$, that bill is:

$$
x + 25y = 65.00
$$

**Part 2: The model.**

$$
x + 18y = 56.10 \\/ 1.10 = 51.00 \\tag{1}
$$

$$
x + 25y = 65.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting cancels $x$:

$$
(x + 25y) - (x + 18y) = 65.00 - 51.00
$$

$$
7y = 14.00 \\Rightarrow y = 2.00
$$

**2.** Substituting back into the cleaned May equation:

$$
x + 18(2.00) = 51.00 \\Rightarrow x + 36 = 51 \\Rightarrow x = 15.00
$$

**Answer.** Fixed charge = \\$15.00 | Rate = \\$2.00/m³ (billing office's claim does not match)`,
  },
  {
    id: `math-5-18`,
    case_id: `MATH 5.18`,
    title: `CityCab vs. MetroX Fare Comparison`,
    context: `A commuter is deciding between two ride-hailing companies. An 8 km CityCab ride once cost \\$14.00, and a 20 km CityCab ride cost exactly \\$12.00 more than that. Separately, a 5 km MetroX ride cost \\$13.50, with a 15 km MetroX ride costing exactly \\$15.00 more.`,
    statements: [
      `For a 10 km ride, CityCab works out cheaper than MetroX.`,
      `Both companies charge the same base fare of \\$6.00.`,
      `For distances under 4 km, MetroX would be cheaper than CityCab.`,
      `A 30 km CityCab ride costs \\$36.00.`,
      `There is a distance of 5 km at which both companies charge exactly the same fare.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) For a 10 km ride, CityCab works out cheaper than MetroX.**  (true)

The statement compares a $10\\,\\mathrm{km}$ ride on CityCab with the same distance on MetroX.

The overview already recovered CityCab as base $\\$6$ plus $\\$1$ per km, and MetroX as base $\\$6$ plus $\\$1.50$ per km. The extra arithmetic is only evaluating both at $10\\,\\mathrm{km}$.

**1.** CityCab at $10\\,\\mathrm{km}$:

$$6 + 10 \\times 1 = 16$$

**2.** MetroX at $10\\,\\mathrm{km}$:

$$6 + 10 \\times 1.50 = 21$$

**3.** Compare:

$$16 < 21$$

CityCab is $\\$5$ cheaper at this distance. That $\\$5$ is $10$ kilometres times the $\\$0.50$ rate gap. Because the bases match, CityCab is cheaper at every positive distance, so it is cheaper at $10\\,\\mathrm{km}$ in particular.

Using CityCab's $8\\,\\mathrm{km}$ quote $\\$14$ as a proxy for $10\\,\\mathrm{km}$ would still find $14<21$, so the verdict would survive that underestimate. The recovered comparison therefore keeps $8\\,\\mathrm{km}$ and does not substitute $14<21$. Swapping the rates would flip the comparison. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

CityCab's $10\\,\\mathrm{km}$ fare is $\\$16$ and MetroX's is $\\$21$, so CityCab is cheaper, so the statement is True.`,
      `**B) Both companies charge the same base fare of \\$6.00.**  (true)

The statement claims both ride-hailing companies charge the same $\\$6$ base fare. CityCab and MetroX were recovered from different quoted pairs, so the two intercepts are separate objects that happen to match.

The overview recovered CityCab's intercept $x_1 = 6$ and MetroX's intercept $x_2 = 6$. This letter is reading those two intercepts side by side, not rebuilding either per-km rate.

**1.** CityCab's base is what remains after $8$ km at $\\$1$ per km is taken out of the $\\$14$ quote.

**2.** MetroX's base is what remains after $5$ km at $\\$1.50$ per km is taken out of the $\\$13.50$ quote. Both leftovers are $\\$6$.

Treating CityCab's $\\$14$ for $8\\,\\mathrm{km}$ as a base would miss the per-km layer. Once $8\\,\\mathrm{km}$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Treating MetroX's $\\$13.50$ the same way would quote a $\\$13.50$ base and think the companies differed. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Both intercepts sit at $\\$6$ once the rates are stripped out.

Matching bases do not mean matching fares. MetroX's recovered rate is $\\$1.50$ per km against CityCab's $\\$1.00$, so longer rides pull apart. The claim is only about the intercepts. The opposite verdict would need one of those two quoted pairs to change.

Both bases are $\\$6.00$, so the statement is True.`,
      `**C) For distances under 4 km, MetroX would be cheaper than CityCab.**  (false)

The statement claims MetroX is cheaper than CityCab for distances under $4\\,\\mathrm{km}$.

Both companies share a $\\$6$ base. MetroX's rate $1.50$ exceeds CityCab's rate $1$. For any positive distance the MetroX fare is strictly larger. Under $4\\,\\mathrm{km}$ is a positive-distance region, so MetroX is not cheaper there.

**1.** At a sample $3\\,\\mathrm{km}$, CityCab is $6+3=9$ and MetroX is $6+4.50=10.50$. CityCab is still cheaper.

**2.** At a sample $1\\,\\mathrm{km}$, CityCab is $7$ and MetroX is $7.50$. Still CityCab.

**3.** The fares would match only at distance $0$, where both equal the shared base $\\$6$. That is not a ride under $4\\,\\mathrm{km}$ in the sense of a cheaper MetroX trip.

Thinking a higher per-km rate could be offset by a lower base would need MetroX's base to sit below CityCab's. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The bases are equal, so there is no offset.

MetroX is not cheaper under $4\\,\\mathrm{km}$, so the statement is False.`,
      `**D) A 30 km CityCab ride costs \\$36.00.**  (true)

The statement is a new CityCab distance: $30\\,\\mathrm{km}$, compared with $\\$36$. Neither quoted CityCab ride was $30\\,\\mathrm{km}$. The $8\\,\\mathrm{km}$ quote was $\\$14$ and the $20\\,\\mathrm{km}$ quote was $\\$26$. This letter extends the recovered CityCab line.

The overview already has CityCab as $6+1$ per km. The extra arithmetic is only evaluating at $30\\,\\mathrm{km}$. This letter does not rebuild MetroX.

**1.** Start from the recovered CityCab base.

**2.** Add thirty kilometres at the recovered CityCab rate:

$$6 + 30 \\times 1 = 36$$

Using MetroX's rate here would get $6+45=51$ and miss the claim. The path that matches the stem therefore holds $6+45=51$ fixed and only then reads the claim. Forgetting the base would report $\\$30$. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $20\\,\\mathrm{km}$ as a scale factor, $26 \\times 30/20 = 39$, would keep a mixed intercept and overshoot. Working from the isolated values, $20\\,\\mathrm{km}$ is the figure that is checked, not the detour that produced $26 \\times 30/20 = 39$. That contrast is the reason the verdict goes the way it does.

The opposite verdict would need a different CityCab rate. If CityCab charged $\\$1.50$ like MetroX, $30\\,\\mathrm{km}$ would be $\\$51$. With the recovered $y_1=1$, a $30\\,\\mathrm{km}$ CityCab ride is $\\$36$.

A $30\\,\\mathrm{km}$ CityCab ride costs $\\$36.00$, so the statement is True.`,
      `**E) There is a distance of 5 km at which both companies charge exactly the same fare.**  (false)

The statement claims there is a $5\\,\\mathrm{km}$ distance at which both companies charge the same fare.

Setting the two recovered rules equal:

$$6 + d = 6 + 1.50d$$

forces $d=0$. There is no positive distance at which the fares match. In particular they do not match at $5\\,\\mathrm{km}$.

**1.** At $5\\,\\mathrm{km}$, CityCab is $6+5=11$ and MetroX is $6+7.50=13.50$. Those are MetroX's printed $5\\,\\mathrm{km}$ quote and CityCab's rule at the same distance. They differ by $\\$2.50$.

**2.** The trap is reading MetroX's $5\\,\\mathrm{km}$ quote $\\$13.50$ as if CityCab also charged $\\$13.50$ there, or treating "a distance of $5\\,\\mathrm{km}$" as the $5\\,\\mathrm{km}$ MetroX observation without evaluating CityCab.

The fares match only at $0\\,\\mathrm{km}$, not at $5\\,\\mathrm{km}$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 18,
    solution_overview: `A commuter is deciding between two ride-hailing companies. An 8 km CityCab ride once cost \\$14.00, and a 20 km CityCab ride cost exactly \\$12.00 more than that.

**Part 1: Building the system.**

Each company must be modelled separately. Each "costs X more than" comparison must first be converted into an absolute fare. Let $x_1$, $y_1$ be CityCab's base fare and rate, and $x_2$, $y_2$ be MetroX's.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
\\text{CityCab: } x_1 + 8y_1 = 14.00, x_1 + 20y_1 = 26.00
$$

**2. Record this independent observation.** In symbols:

$$
\\text{MetroX: } x_2 + 5y_2 = 13.50, x_2 + 15y_2 = 28.50
$$

**Part 2: The model.**

$$
\\text{CityCab: } x_1 + 8y_1 = 14.00, x_1 + 20y_1 = 26.00 \\tag{1}
$$

$$
\\text{MetroX: } x_2 + 5y_2 = 13.50, x_2 + 15y_2 = 28.50 \\tag{2}
$$

**Part 3: Solve.**

**1.** For CityCab, subtracting cancels $x_1$:

$$
(x_1 + 20y_1) - (x_1 + 8y_1) = 26.00 - 14.00
$$

$$
12y_1 = 12 \\Rightarrow y_1 = 1
$$

Then $x_1 + 8(1) = 14$, so $x_1 = 6$.

**2.** For MetroX the same difference of the two quoted rides is

$$
(x_2 + 15y_2) - (x_2 + 5y_2) = 28.50 - 13.50
$$

$$
10y_2 = 15 \\Rightarrow y_2 = 1.5
$$

Then $x_2 + 5(1.5) = 13.50$, so $x_2 = 6$.

**Answer.** CityCab: base \\$6.00, rate \\$1.00/km | MetroX: base \\$6.00, rate \\$1.50/km`,
  },
  {
    id: `math-5-19`,
    case_id: `MATH 5.19`,
    title: `Bramble & Co., Vendor Quotation Comparison`,
    context: `Bramble & Co.'s procurement team received quotations from two suppliers for Products X and Y. Neither vendor lists a unit price outright  -  both quotes only show bundled order totals. Bramble needs 40 units of X and 30 units of Y next month.`,
    tables_markdown: `| Vendor | Order | Units X | Units Y | Total |
| --- | --- | --- | --- | --- |
| Vendor A | 1 | 20 | 15 | \\$450 |
| Vendor A | 2 | 25 | 12 | \\$441 |
| Vendor B | 1 | 20 | 15 | \\$460 |
| Vendor B | 2 | 25 | 12 | \\$467 |`,
    statements: [
      `Vendor A charges less than Vendor B for Product X.`,
      `Vendor B charges less than Vendor A for Product Y.`,
      `For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.`,
      `Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by \\$20.`,
      `If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Vendor A charges less than Vendor B for Product X.**  (true)

The statement compares Vendor A's price for Product X with Vendor B's price for Product X. Each vendor quoted two bundles, and each vendor's pair was solved separately. The overview already recovered $x_A=9$ and $x_B=11$. Then $9<11$, so Vendor A is cheaper on X.

**1.** Compare the two recovered X prices:

$$11 - 9 = 2$$

Vendor A charges $\\$2$ less per unit of X.

**2.** Vendor A's bundles were $20X+15Y=450$ and $25X+12Y=441$. Vendor B's matching mixes were $460$ and $467$. The $\\$10$ and $\\$26$ gaps on those bundles are not the unit-X gap. Comparing bundle totals $\\$450$ and $\\$460$ would reach the same ranking for those particular bundles, but the claim is about unit X, not about a mixed bundle. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**3.** Swapping X and Y would compare $18$ with $16$ and conclude Vendor A is *more* expensive, flipping the verdict. So the letter reads the claim against $18$; $16$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $18$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Y is letter B's question. This letter is X.

The opposite verdict would need Vendor A's recovered X to sit at or above Vendor B's $11$. With the four bundle totals as printed, $x_A=9$ and $x_B=11$. Upcoming order size $40$ of X and $30$ of Y does not rewrite those unit prices. That mix is letter C's costing. This letter only ranks the two X prices. Vendor B is cheaper on Y, which is the next letter, and that fact does not reverse the X ranking.

The opposite verdict would need Vendor A's recovered X to sit at or above Vendor B's $11$. With the four bundle totals as printed, $x_A=9$ and $x_B=11$.

Vendor A charges $\\$9$ for X and Vendor B charges $\\$11$, so Vendor A is cheaper on X, so the statement is True.`,
      `**B) Vendor B charges less than Vendor A for Product Y.**  (true)

The statement compares Vendor B's price for Product Y with Vendor A's price for Product Y. Each vendor quoted two bundles, and each vendor's pair was solved separately. The overview already recovered $y_A=18$ and $y_B=16$. Then $16<18$, so Vendor B is cheaper on Y.

**1.** Compare the two recovered Y prices:

$$18 - 16 = 2$$

Vendor B charges $\\$2$ less per unit of Y.

**2.** The ranking on Y is the reverse of the ranking on X. Vendor A won X by $\\$2$. Vendor B wins Y by $\\$2$. Assuming one vendor is cheaper on everything would miss this letter. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The four bundles force a split: A wins on X, B wins on Y.

**3.** Comparing matching bundles $\\$450$ and $\\$460$ would still be ranking mixed tickets, not unit Y. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Those bundles contain $15$ units of Y and $20$ of X. The unit-Y ranking is $16$ versus $18$, recovered from each vendor's own pair.

The trap is carrying letter A's "A is cheaper" into this letter. A is cheaper on X, not on Y. Upcoming order size does not rewrite unit Y. The opposite verdict would need $y_B \\ge y_A$. With the four bundle totals as printed, $y_B=16$ and $y_A=18$.

Vendor B charges $\\$16$ for Y and Vendor A charges $\\$18$, so Vendor B is cheaper on Y, so the statement is True.`,
      `**C) For the upcoming order of 40 units X and 30 units Y, Vendor A is the cheaper overall choice.**  (true)

This letter is the upcoming order, neither printed bundle: $40$ of X and $30$ of Y. Bramble has to choose a vendor for the whole mix.

The overview already has A's pair $(9,18)$ and B's pair $(11,16)$. The extra arithmetic is only costing the mix both ways.

**1.** Vendor A on $40$ X and $30$ Y:

$$40 \\times 9 + 30 \\times 18 = 360 + 540 = 900$$

**2.** Vendor B on the same mix:

$$40 \\times 11 + 30 \\times 16 = 440 + 480 = 920$$

**3.** Compare:

$$900 < 920$$

Vendor A is $\\$20$ cheaper overall. A's advantage on X is $40 \\times 2=80$. B's advantage on Y is $30 \\times 2=60$. Net, A wins by $\\$20$. The mix is X-heavy enough that A's cheaper X outweighs B's cheaper Y.

Doubling A's first bundle $20$ X and $15$ Y would get exactly this mix at $2 \\times 450=900$, which is an honest shortcut for Vendor A, because $40$ and $30$ are double $20$ and $15$. The recovered comparison therefore keeps $20$ and does not substitute $30$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Vendor B's first bundle doubled is $2 \\times 460=920$, the same comparison.

Vendor A costs $\\$900$ and Vendor B costs $\\$920$ on the upcoming order, so Vendor A is cheaper overall, The upcoming order $40$ X and $30$ Y is exactly double Vendor A's first quoted bundle $20$ X and $15$ Y. Doubling A's $\\$450$ is $\\$900$, which is an honest shortcut for Vendor A. Vendor B's first bundle is the same mix at $\\$460$, and doubling that is $\\$920$. The $\\$20$ gap is $2 \\times 10$, twice the bundle gap, and it matches $40 \\times 2 - 30 \\times 2$ from the unit-price gaps on X and Y.

Using A's second bundle $25$ X and $12$ Y, which is a different mix, would not be costing $40$ and $30$. That is the fork: $25$ belongs to the recovered isolation, $30$ belongs to the discarded mix. Picking the cheaper unit from each vendor, $9$ on X from A and $16$ on Y from B, would get $40 \\times 9 + 30 \\times 16=360+480=840$, a cherry-pick the procurement team is not allowed if they must choose one vendor for the whole order. Working from the isolated values, $9$ is the figure that is checked, not the detour that produced $40 \\times 9 + 30 \\times 16=360+480=840$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The claim is the whole-order choice. Vendor A at $900$ beats Vendor B at $920$.

so the statement is True.`,
      `**D) Switching the entire upcoming order to Vendor B would reduce Bramble's total cost by \\$20.**  (false)

The statement claims switching the upcoming $40$/$30$ order to Vendor B would reduce Bramble's cost by $\\$20$.

Letter C already costed the mix at $\\$900$ on A and $\\$920$ on B. Switching to B raises the total by $\\$20$, it does not reduce it.

**1.** Cost on A: $\\$900$. Cost on B: $\\$920$.

**2.** Change if switched to B:

$$920 - 900 = +20$$

That is an increase of $\\$20$, not a reduction of $\\$20$. The claim has the sign backwards. The $\\$20$ gap is real; the direction is not.

Remembering "A is cheaper by $20$" from letter C but then read "switching to B reduces by $20$" as the same fact would flip the verb. Once $20$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Reducing is the opposite of A's advantage.

Switching to Vendor B raises the cost by $\\$20$, it does not reduce it, so the statement is False.`,
      `**E) If the upcoming order changed to 60 units of Y only, Vendor B would work out cheaper than Vendor A.**  (true)

This letter changes the upcoming order to $60$ units of Y only, no X, and asks which vendor is cheaper on that Y-only mix.

The overview already has $y_A=18$ and $y_B=16$. The extra arithmetic is only costing sixty Y both ways.

**1.** Sixty Y at Vendor A:

$$60 \\times 18 = 1080$$

**2.** Sixty Y at Vendor B:

$$60 \\times 16 = 960$$

**3.** Compare:

$$960 < 1080$$

Vendor B is $\\$120$ cheaper on a Y-only order, because B's Y advantage of $\\$2$ runs on all $60$ units and A's X advantage never appears. This is the reverse of letter C's ranking, where the mix still had $40$ units of X.

Using the $40$/$30$ totals $900$ and $920$ here would keep A's win and miss the claim. Working from the isolated values, $40$ is the figure that is checked, not the detour that produced $920$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Dropping X entirely is the whole content of this letter.

On $60$ units of Y only, Vendor B costs $\\$960$ and Vendor A costs $\\$1{,}080$, so Vendor B is cheaper, Sixty units of Y and zero X is the opposite mix from letter C's X-heavy order. On a Y-only ticket, Vendor B's $\\$2$ advantage per Y runs on all $60$ units and A's $\\$2$ advantage per X never appears, so B wins by $120$. That ranking reversal is the point: neither vendor is cheaper on everything, and the cheaper overall choice depends on the mix.

Scaling letter C's $900$ and $920$ by $60/30=2$ would keep A's win and miss that X has been dropped. That is the fork: $900$ belongs to the recovered isolation, $60/30=2$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Scaling a mixed order does not produce a Y-only order. The extra arithmetic is $60 \\times 18$ versus $60 \\times 16$, two products, one comparison.

If the order had been $60$ of X only, A would win $60 \\times 9=540$ against $60 \\times 11=660$. The claim names $60$ of Y only, and on that mix B is cheaper.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 19,
    solution_overview: `Bramble & Co.'s procurement team received quotations from two suppliers for Products X and Y. Neither vendor lists a unit price outright; both quotes only show bundled order totals.

**Part 1: Building the system.**

Each vendor's unit prices are independent and must be solved separately. Let $x_A$, $y_A$ denote Vendor A's prices, and $x_B$, $y_B$ denote Vendor B's.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
\\text{Vendor A: } 20x_A + 15y_A = 450, 25x_A + 12y_A = 441
$$

**2. Record this independent observation.** In symbols:

$$
\\text{Vendor B: } 20x_B + 15y_B = 460, 25x_B + 12y_B = 467
$$

**Part 2: The model.**

$$
\\text{Vendor A: } 20x_A + 15y_A = 450, 25x_A + 12y_A = 441 \\tag{1}
$$

$$
\\text{Vendor B: } 20x_B + 15y_B = 460, 25x_B + 12y_B = 467 \\tag{2}
$$

**Part 3: Solve.**

**1.** Vendor A: divide the first quote by 5 to get $4x_A + 3y_A = 90$, so $y_A = 30 - \\frac{4}{3}x_A$. Substitute into $25x_A + 12y_A = 441$:

$$
25x_A + 12\\left(30 - \\frac{4}{3}x_A\\right) = 441
$$

$$
25x_A + 360 - 16x_A = 441 \\Rightarrow 9x_A = 81 \\Rightarrow x_A = 9
$$

Then $y_A = 30 - 12 = 18$.

**2.** Vendor B: divide $20x_B + 15y_B = 460$ by 5 to get $4x_B + 3y_B = 92$. The same substitution into $25x_B + 12y_B = 467$ produces

$$
25x_B + 12\\cdot\\frac{92 - 4x_B}{3} = 467 \\Rightarrow 75x_B + 1104 - 48x_B = 1401
$$

$$
27x_B = 297 \\Rightarrow x_B = 11, \\qquad y_B = \\frac{92 - 44}{3} = 16
$$

**Answer.** Vendor A: X = \\$9, Y = \\$18 | Vendor B: X = \\$11, Y = \\$16`,
  },
  {
    id: `math-5-20`,
    case_id: `MATH 5.20`,
    title: `Alpha & Beta Holdings, Quarterly Dashboard`,
    context: `Alpha and Beta are sister companies that sell Product P and Service Q at identical market prices. Combined, they earned \\$27,200 in Q1 revenue, and Beta earned exactly \\$1,000 more than Alpha. Alpha sold 150 units of P and 80 subscriptions of Q; Beta sold 100 units of P and 130 subscriptions of Q. (Alpha's headcount grew 8% year-on-year versus Beta's 6%  -  a staffing detail with no bearing on pricing.)`,
    statements: [
      `Product P is priced at \\$50 and Service Q at \\$70, identically for both companies.`,
      `Beta generated more Q1 revenue than Alpha.`,
      `If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.`,
      `Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.`,
      `Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Product P is priced at \\$50 and Service Q at \\$70, identically for both companies.**  (true)

The statement is a claim about the shared prices of Product P and Service Q. Alpha and Beta sell at identical market prices. Combined they earned $\\$27{,}200$, and Beta earned exactly $\\$1{,}000$ more than Alpha, so Alpha is $\\$13{,}100$ and Beta is $\\$14{,}100$. Those two company totals, with the unit counts, recover one shared pair.

The overview already recovered $p=50$ and $q=70$. This letter does not rebuild that pair. It only asks whether those recovered prices are the numbers in the claim, and whether they are shared. They are: the stem says identical market prices, and the unique pair that fits both companies' unit counts is $50$ and $70$.

**1.** The recovered $50$ is attached to Product P, not to Service Q. Swapping the labels would quote $\\$70$ for P and miss the claim. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

**2.** Dividing Alpha's $\\$13{,}100$ by $150$ units of P, ignoring Q, would land on about $\\$87.33$ and miss the claim. That is why $150$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The trap figure $\\$87.33$ is a P-only split of a mixed company total.

Headcount growth of $8\\%$ versus $6\\%$ is a staffing distractor. It does not enter the prices. The opposite verdict would need a different pair of company totals or different unit counts.

Product P is $\\$50$ and Service Q is $\\$70$ for both companies, so the statement is True.`,
      `**B) Beta generated more Q1 revenue than Alpha.**  (true)

The statement claims Beta generated more Q1 revenue than Alpha. The stem already says Beta earned exactly $\\$1{,}000$ more than Alpha, and the combined total is $\\$27{,}200$. That comparison is the gap equation, not a recovered price.

Alpha's revenue is $\\$13{,}100$ and Beta's is $\\$14{,}100$. Beta is larger by the stated $\\$1{,}000$. This letter does not recover Product P or Service Q. It only asks which sister company posted the larger Q1 total.

**1.** Split the combined $\\$27{,}200$ using the $\\$1{,}000$ gap:

$$(27200-1000)/2 = 13100, \\qquad 13100+1000 = 14100$$

**2.** Then $14100 > 13100$. Beta is the larger of the two.

Comparing unit counts $150+80=230$ against $100+130=230$ might think the revenues should match. Working from the isolated values, $150+80=230$ is the figure that is checked, not the detour that produced $100+130=230$. The mix differs: Alpha is heavier on Product P at $\\$50$, Beta is heavier on Service Q at $\\$70$, so the dollars differ even at shared prices and shared unit totals.

Headcount growth of $8\\%$ versus $6\\%$ is a staffing distractor. The opposite verdict would need the gap sentence to reverse. With Beta $\\$1{,}000$ ahead as printed, Beta's Q1 revenue is larger.

Beta's Q1 revenue is larger, so the statement is True.`,
      `**C) If Alpha raises Product P's price by 10% next quarter with sales volumes unchanged, its total revenue would increase by exactly 10%.**  (false)

The statement claims that a $10\\%$ rise in Alpha's Product P price, volumes unchanged, would raise Alpha's *total* revenue by exactly $10\\%$.

The overview already has $p=50$, $q=70$, and Alpha's mix $150$ P and $80$ Q. Alpha's current total is $\\$13{,}100$. The extra arithmetic is only the increment on the P line.

**1.** Alpha's current P revenue:

$$150 \\times 50 = 7500$$

**2.** A $10\\%$ P-price rise, volumes unchanged, adds $10\\%$ of that P line:

$$0.10 \\times 7500 = 750$$

**3.** That $\\$750$ as a share of Alpha's whole $\\$13{,}100$:

$$\\frac{750}{13100} \\approx 0.057$$

about $5.7\\%$, not $10\\%$. Service Q's $\\$5{,}600$ is untouched, so the total cannot rise by the same percentage as one component.

Applying $10\\%$ to the whole $13100$ would get a $\\$1{,}310$ increment and accept the claim. After isolating the unknown, the check is against $10\\%$. The figure $13100$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $10\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does. That would be correct only if every line rose $10\\%$. Only P's price changes.

Alpha's total would rise by about $5.7\\%$, not by $10\\%$, so the statement is False.`,
      `**D) Alpha's projected revenue after that 10% Product P price increase would surpass Beta's current Q1 revenue.**  (false)

The statement claims Alpha's projected revenue after a $10\\%$ Product P price increase, volumes unchanged, would surpass Beta's current Q1 revenue. Alpha currently has $\\$13{,}100$. Beta currently has $\\$14{,}100$. Only Alpha's P line, $150$ units at $\\$50$, is about to rise.

The overview already recovered $p=50$ and $q=70$. Letter C's increment on Alpha's P line is $0.10 \\times 7500=750$. The extra arithmetic here is only forming Alpha's new total and comparing it with Beta.

**1.** Alpha after the increase:

$$13100 + 750 = 13850$$

**2.** Compare with Beta's current Q1:

$$13850 < 14100$$

**3.** The remaining shortfall is $14100-13850=250$. The original gap was $\\$1{,}000$. A $10\\%$ bump on P closed $\\$750$ of that gap and left $\\$250$. It does not overtake Beta.

Adding $10\\%$ of Alpha's whole revenue, $1310$, would get $14410>14100$ and flip the verdict. Working from the isolated values, $10\\%$ is the figure that is checked, not the detour that produced $14410>14100$. That is letter C's error carried forward. Only P's line rises. Headcount growth still does not enter.

The opposite verdict would need the P increment to exceed $\\$1{,}000$, which would take a $10\\%$ bump on more than $\\$10{,}000$ of P revenue. Alpha's P line is $\\$7{,}500$. With volumes unchanged, Alpha's projected $\\$13{,}850$ does not surpass Beta's $\\$14{,}100$.

Alpha's projected $\\$13{,}850$ does not surpass Beta's $\\$14{,}100$, so the statement is False.`,
      `**E) Beta's revenue from Service Q subscriptions alone exceeds Alpha's entire Q1 revenue from Product P.**  (true)

The statement compares Beta's Q-subscription revenue alone with Alpha's entire P-line revenue. It is not a comparison of the two company totals. Alpha sold $150$ units of P. Beta sold $130$ subscriptions of Q. Shared prices are $p=50$ and $q=70$.

The overview already has those recovered prices. The extra arithmetic is only those two products, then the comparison.

**1.** Beta's Q line:

$$130 \\times 70 = 9100$$

**2.** Alpha's P line:

$$150 \\times 50 = 7500$$

**3.** Compare:

$$9100 > 7500$$

Beta's Q subscriptions alone exceed Alpha's whole P line by $\\$1{,}600$. Comparing Beta's whole $\\$14{,}100$ with Alpha's whole $\\$13{,}100$ would be answering letter B again. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. This letter is narrower: one line against one line.

The trap figure $\\$14{,}100$ is Beta's whole Q1, parked on a Q-only claim. The trap figure $\\$13{,}100$ is Alpha's whole Q1, parked on a P-only claim. Neither is the line the claim named.

The opposite verdict would need $130q \\le 150p$. At $q=70$ and $p=50$, that inequality fails. Headcount growth does not rewrite either line.

Beta's Q revenue $\\$9{,}100$ exceeds Alpha's P revenue $\\$7{,}500$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{2}{5}`,
    sort_order: 20,
    solution_overview: `Alpha and Beta are sister companies that sell Product P and Service Q at identical market prices. Combined, they earned \\$27,200 in Q1 revenue, and Beta earned exactly \\$1,000 more than Alpha.

**Part 1: Building the system.**

Individual Q1 revenue figures are not stated directly, only their combined total and the gap between them. Those must first be turned into Alpha's and Beta's separate revenue figures (a small sum-and-difference step) before the unit-sales data can be used.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
Stage 1: A + B = 27200, B - A = 1000
$$

**2. Record this independent observation.** In symbols:

$$
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100
$$

**Part 2: The model.**

$$
Stage 1: A + B = 27200, B - A = 1000 \\tag{1}
$$

$$
Stage 2: 150x + 80y = 13100, 100x + 130y = 14100 \\tag{2}
$$

**Part 3: Solve.**

**1.** Adding the Stage 1 equations:

$$
(A + B) + (B - A) = 27200 + 1000 \\Rightarrow 2B = 28200 \\Rightarrow B = 14100
$$

Then $A = 27200 - 14100 = 13100$.

**2.** Stage 2, after dividing by 10, is $15x + 8y = 1310$ and $10x + 13y = 1410$. Multiply the first by 2 and the second by 3 so the $x$ terms match:

$$
30x + 16y = 2620, \\qquad 30x + 39y = 4230
$$

Subtract: $23y = 1610$, so $y = 70$. Then $10x + 13(70) = 1410$ gives $10x = 500$ and $x = 50$.

Check: $150(50) + 80(70) = 7500 + 5600 = 13100$ and $100(50) + 130(70) = 5000 + 9100 = 14100$.

**Answer.** Product P = \\$50.00 | Service Q = \\$70.00`,
  },
  {
    id: `math-5-21`,
    case_id: `MATH 5.21`,
    title: `FitZone Gym  -  Checking the Advertised Rates`,
    context: `FITZONE GYM  -  NEW MEMBER SPECIAL! "Join for just a \\$30 signup fee, then only \\$45/month!" An accounting team member is skeptical and pulls two real members' payment histories. Maria, after her 6th monthly payment, had paid \\$284 total. Jason, after his 10th monthly payment, had paid \\$448 total.`,
    statements: [
      `The flyer's advertised \\$30 signup fee matches what members are actually being charged.`,
      `The monthly rate members are actually paying is lower than the advertised \\$45/month.`,
      `Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.`,
      `Jason paid more than \\$400 in total by his 10th payment.`,
      `A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay \\$492.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) The flyer's advertised \\$30 signup fee matches what members are actually being charged.**  (false)

The statement claims the flyer's $\\$30$ signup fee matches what members are actually charged. Maria, after her $6$th monthly payment, had paid $\\$284$. Jason, after his $10$th, had paid $\\$448$. Those two histories recover a different intercept.

The overview already recovered $x = 38$. The flyer claimed $\\$30$, which sits $\\$8$ below that intercept. This letter does not rebuild the monthly rate. It only asks whether $\\$30$ can sit on both histories.

**1.** At $x=30$ and the recovered monthly rate $y=41$, Maria would have paid

$$30 + 6 \\times 41 = 276$$

but she paid $\\$284$. Those extra $\\$8$ are the understated signup.

**2.** Jason at the same false fee would be $30+10(41)=440$, which undershoots his $\\$448$ by the same $\\$8$.

**3.** The flyer also claimed $\\$45$ per month, which is not the recovered $y=41$. At $x=30$ and $y=45$, Maria would be $30+270=300$, which overshoots $\\$284$. Both advertised numbers fail the two histories.

The trap figure $\\$30$ is the flyer's own claim, sitting in the stem as a disputed number. Quoting the flyer is not reading Maria and Jason. The opposite verdict would need Maria's total to be $\\$276$ instead of $\\$284$. With $\\$284$ and $\\$448$ as paid, the signup fee cannot be $\\$30$.

The recovered signup fee is $\\$38$, not $\\$30$, so the statement is False.`,
      `**B) The monthly rate members are actually paying is lower than the advertised \\$45/month.**  (true)

The statement compares the actual monthly rate with the advertised $\\$45$. Maria and Jason's histories recover the slope once the shared signup fee cancels. The four extra months between Jason and Maria cost $448-284=164$.

The overview already recovered $y = 41$. Then $41 < 45$, so members pay $\\$4$ less per month than the flyer states.

**1.** The four-month gap at the claimed flyer rate:

$$4 \\times 45 = 180$$

The actual dollar gap is $\\$164$, not $\\$180$. Those extra $\\$16$ are four months times a $\\$4$ overstatement.

**2.** Compare the recovered rate with the advertised rate:

$$41 < 45$$

**3.** Using $\\$45$ as if it were already confirmed would skip the two histories. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Dividing Maria's $\\$284$ by $6$ would land on about $\\$47.33$ and mix the signup fee into the monthly rate. The recovered isolation is checked against the claim using $6$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $\\$47.33$ is an all-in split of Maria. The trap figure $\\$45$ is the flyer.

The opposite verdict would need the four-month gap to be $\\$180$ instead of $\\$164$. With $\\$284$ and $\\$448$ as paid, the monthly rate is $\\$41$, which is lower than $\\$45$.

The actual monthly rate is $\\$41$, which is lower than $\\$45$, so the statement is True.`,
      `**C) Maria's actual 6-month total exceeds what the flyer's advertised rates would have produced over the same 6 months.**  (false)

The statement compares Maria's actual $6$-month total with what the flyer's advertised rates would have produced over the same six months, and claims her actual total exceeds the flyer figure.

Maria actually paid $\\$284$. The flyer advertised $\\$30$ signup plus $\\$45$ per month. The extra arithmetic is only evaluating that advertised rule at six months.

**1.** Six months at the advertised monthly rate:

$$6 \\times 45 = 270$$

**2.** Add the advertised signup:

$$30 + 270 = 300$$

**3.** Compare with Maria's actual $\\$284$:

$$284 < 300$$

Her actual total sits $\\$16$ *below* the flyer figure, so it does not exceed it. The claim has the comparison backwards.

Where does the $\\$16$ gap come from? The actual signup is $\\$8$ higher ($38$ versus $30$), which would push Maria up, but the actual monthly rate is $\\$4$ lower ($41$ versus $45$), and six months of that $\\$4$ is $\\$24$. Net, $8-24=-16$, which is exactly $284-300$. The cheaper month outweighs the dearer signup over six months.

Comparing $\\$284$ with $30+6(41)=276$ would be comparing actual with a mixed rule, not with the flyer. The recovered isolation is checked against the claim using $30+6(41)=276$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using Jason's ten-month flyer total $30+450=480$ here would be answering a different horizon. That is why $30+450=480$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

Maria's $\\$284$ does not exceed the flyer's $\\$300$, Maria's actual $284$ versus the flyer's $300$ is a six-month comparison of two different rules, not a recovered-price lookup. The flyer is $30+45g$. Actual is $38+41g$. At $g=6$ those are $300$ and $284$. Actual is lower, so it does not *exceed* the flyer. The verb "exceeds" is backwards.

The $\\$16$ gap decomposes as $+8$ from the dearer signup and $-24$ from six months of a $\\$4$ cheaper month. Net $-16$. Over a short horizon the cheaper month already outweighs the dearer signup. Over one month the actual rule would be $38+41=79$ versus flyer $30+45=75$, and actual would be *higher*. Six months is long enough for the rate gap to dominate, which is why C is false at Maria's horizon.

Comparing $284$ with $38+6 \\times 45=308$ would be mixing actual signup with advertised months. Working from the isolated values, $284$ is the figure that is checked, not the detour that produced $38+6 \\times 45=308$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim is actual versus the flyer's advertised rates, both pieces advertised.

so the statement is False.`,
      `**D) Jason paid more than \\$400 in total by his 10th payment.**  (true)

The statement compares Jason's $10$-month total with a $\\$400$ cutoff. Jason's listed total is already $\\$448$ after his tenth payment. The claim is about what Jason actually paid, not about the flyer's $\\$30$ plus $\\$45$ story.

The overview recovered signup $x=38$ and monthly $y=41$. Rebuilding at those values is only a check: $38+10(41)=448$. The extra arithmetic for this letter is the comparison with $\\$400$.

**1.** Read Jason's printed total, $\\$448$.

**2.** Compare with the cutoff:

$$448 > 400$$

Jason clears $\\$400$ by $\\$48$. Using the flyer rule $30+10(45)=480$ would still clear $\\$400$, so that error would not flip the verdict. The recovered isolation is checked against the claim using $30+10(45)=480$, which is the figure the sessions actually produce. The honest figure is still $\\$448$.

Reporting Maria's $\\$284$ here would fail the cutoff, but Maria is a six-month history, not Jason's tenth payment. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The opposite verdict would need Jason's printed total to sit at $\\$400$ or below. With $\\$448$ on the page, he paid more than $\\$400$.

Jason paid $\\$448$, which is more than $\\$400$, so the statement is True.`,
      `**E) A member who negotiated away the signup fee entirely and paid only the monthly rate for a full 12 months would pay \\$492.**  (true)

This letter is not Maria or Jason. It is a member who negotiated the signup fee down to zero and then paid only the actual monthly rate for twelve months.

The overview already recovered $y = 41$. The extra arithmetic is only twelve months at that rate, with no intercept.

**1.** Drop the signup fee entirely.

**2.** Twelve months at the recovered monthly rate:

$$12 \\times 41 = 492$$

**3.** Keeping the recovered $\\$38$ signup would get $38+492=530$ and miss the claim. The path that matches the stem therefore holds $38+492=530$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using the flyer's $\\$45$ would get $12 \\times 45=540$. The opposite verdict would need a different isolation than $12 \\times 45=540$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Using twelve months at $\\$41$ plus the flyer's $\\$30$ would get $522$. The recovered isolation is checked against the claim using $522$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The whole content of this letter is that the signup is gone.

What would have to change for the opposite verdict? If the actual monthly rate were $\\$41.50$, twelve months would be $\\$498$. The two histories force $y=41$, and twelve months with no signup is then $\\$492$.

Twelve months at $\\$41$ with no signup is $\\$492$, Twelve months with the signup waived is $12 \\times 41=492$. That is not Maria's horizon and not Jason's. It is a negotiated counterfactual: intercept zero, slope the actual monthly rate, twelve periods. Using the flyer's $45$ would get $540$. The stem's recovered values line up with $45$, whereas $540$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $45$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Keeping the recovered $38$ would get $530$. Working from the isolated values, $38$ is the figure that is checked, not the detour that produced $530$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $12 \\times 41 + 30$ would keep the flyer's signup on the actual rate. The opposite verdict would need a different isolation than $12 \\times 41 + 30$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does.

The $492$ figure is also Jason's $448$ plus two more months at $41$, minus the $38$ signup Jason already paid: $448+82-38=492$. That reconstruction is a check, not a second solve. It uses Jason as a $10$-month actual path and then strips the signup and adds two months.

If the actual monthly rate had been $41.50$, twelve months would be $498$, and the claim's $492$ would fail. The two histories force $y=41$ exactly, because $164/4=41$, and twelve times that is $492$.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 21,
    solution_overview: `FITZONE GYM. NEW MEMBER SPECIAL! "Join for just a \\$30 signup fee, then only \\$45/month!" An accounting team member is skeptical and pulls two real members' payment histories. Maria, after her 6th monthly payment, had paid \\$284 total.

**Part 1: Building the system.**

Let $x$ = the signup fee actually charged, $y$ = the actual monthly rate. The flyer's advertised figures (\\$30 and \\$45) are a claim to be checked, not values to plug directly into the model.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Maria.** That observation becomes:

$$
x + 6y = 284
$$

**2. Translate: Jason.** That observation becomes:

$$
x + 10y = 448
$$

**Part 2: The model.**

$$
x + 6y = 284 \\tag{1}
$$

$$
x + 10y = 448 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting Jason minus Maria:

$$
(x + 10y) - (x + 6y) = 448 - 284 \\Rightarrow 4y = 164 \\Rightarrow y = 41
$$

**2.** Substituting back into Maria's history:

$$
x + 6(41) = 284 \\Rightarrow x + 246 = 284 \\Rightarrow x = 38
$$

**Answer.** Signup fee = \\$38.00 | Monthly rate = \\$41.00/month (flyer's figures do not match)`,
  },
  {
    id: `math-5-22`,
    case_id: `MATH 5.22`,
    title: `StreamPlus  -  Household Billing Comparison`,
    context: `StreamPlus offers two flat-rate monthly plans, Basic and Premium, with no separate connection fee. Customer service pulled combined billing records mixing plan-months across two households.`,
    tables_markdown: `| Household | Basic-Months | Premium-Months | Combined Total |
| --- | --- | --- | --- |
| Household 1 | 4 | 3 | \\$169 |
| Household 2 | 2 | 7 | \\$255 |`,
    statements: [
      `The Basic plan costs \\$19 per month.`,
      `The Premium plan costs \\$35 per month.`,
      `Household 2's combined total is more than double Household 1's combined total.`,
      `There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.`,
      `A household billed for 5 months of Basic and 5 months of Premium would owe a combined \\$250.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A) The Basic plan costs \\$19 per month.**  (true)

The statement is a claim about StreamPlus's Basic monthly price. The two households mix Basic-months and Premium-months at shared plan prices, with no separate connection fee.

The overview already recovered $x = 19$. This letter does not rebuild that pair. It only asks whether the recovered Basic price is the number in the claim.

**1.** The recovered $19$ is attached to Basic, not to Premium. Quoting $\\$31$ here would have swapped the plans. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

**2.** Dividing Household 1's $\\$169$ by $7$ plan-months would land on about $\\$24.14$ and mix Premium into Basic. Keeping $7$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $\\$24.14$ is a blended month. The Premium months have to be stripped out first. Household 2's larger mixed total is a different mix, not a reason to average the two households into a fake Basic price. No connection fee sits under the plans, so there is no intercept to peel before reading Basic.

The opposite verdict would need a different pair of household totals. With the two mixed billing records as printed, Basic cannot cost anything other than $\\$19$.

The recovered Basic price matches the claimed $\\$19$ per month, so the statement is True.`,
      `**B) The Premium plan costs \\$35 per month.**  (false)

The statement is a claim about the Premium monthly price. The overview already recovered $y = 31$. The claim writes $\\$35$, four dollars above that leftover. This letter does not rebuild Basic. It only asks whether $\\$35$ can sit on both mixed household totals.

**1.** At $y=35$ with recovered Basic $x=19$, Household 1's $4$ Basic plus $3$ Premium months would be

$$4 \\times 19 + 3 \\times 35 = 76 + 105 = 181$$

which overshoots $\\$169$ by $\\$12$. Those extra $\\$12$ are three Premium months times a $\\$4$ overstatement.

**2.** The figure $\\$35$ is a typical round guess, or $\\$255/7 \\approx 36$ after treating Household 2 as all Premium.

**3.** At the recovered $y=31$, Household 1 rebuilds as $4(19)+3(31)=76+93=169$, matching the printed total. That check uses the recovered pair, not a second solve.

The opposite verdict would need Household 1's total to be $\\$181$ instead of $\\$169$. With the two mixed records as printed, Premium cannot cost $\\$35$.

The claimed $\\$35$ sits $\\$4$ above the recovered $\\$31$, so the statement is False.`,
      `**C) Household 2's combined total is more than double Household 1's combined total.**  (false)

The statement compares Household 2's combined total with double Household 1's combined total.

Household 1 billed $\\$169$. Household 2 billed $\\$255$. The extra arithmetic is only doubling and comparing.

**1.** Double Household 1:

$$2 \\times 169 = 338$$

**2.** Compare with Household 2:

$$255 < 338$$

Household 2 is not more than double Household 1. It is about $1.51$ times Household 1. The trap is reading $255$ against $169+86$, or treating "more than double" as "more than $200$ more." Double is a ratio, not a vague increase.

Comparing plan-month counts $9$ against $7$ might think Household 2 should be larger by a similar ratio; the mix is more Premium-heavy, but not enough to double the dollars. After isolating the unknown, the check is against $9$. The figure $7$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $9$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

Household 2's $\\$255$ is less than double Household 1's $\\$169$, so the statement is False.`,
      `**D) There exists some positive number of months at which paying only for Basic would cost the same as paying only for Premium for that many months.**  (false)

The statement claims there is some positive number of months $n$ at which $n$ months of only Basic costs the same as $n$ months of only Premium.

That would require $n x = n y$ with $n>0$, hence $x=y$. The overview already recovered $x=19$ and $y=31$, which are not equal.

**1.** At $n=1$, Basic is $\\$19$ and Premium is $\\$31$.

**2.** At any other positive $n$, both sides scale by the same $n$, so the gap $n(31-19)=12n$ stays positive. It never hits zero.

**3.** There is no connection fee to create a crossing the way PrintFast and QuickCopy can cross. Both plans are flat per month, so the cheaper plan stays cheaper at every horizon.

Setting $4x+3y=2x+7y$ would be equating the two household mixes, not equating pure-Basic with pure-Premium. That is why $4x+3y=2x+7y$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Those household equations are already satisfied by $(19,31)$ without forcing $x=y$.

Basic and Premium never cost the same for a positive run of months, so the statement is False.`,
      `**E) A household billed for 5 months of Basic and 5 months of Premium would owe a combined \\$250.**  (true)

This letter is a new mix: $5$ months of Basic and $5$ months of Premium, neither household's mix.

The overview already has $x=19$ and $y=31$. The extra arithmetic is only costing five of each.

**1.** Five Basic months:

$$5 \\times 19 = 95$$

**2.** Five Premium months:

$$5 \\times 31 = 155$$

**3.** Add:

$$95 + 155 = 250$$

The mix is $\\$250$, matching the claim. In pair form, one Basic plus one Premium is $\\$50$, and five pairs are $\\$250$.

Averaging the two household totals and scaling to ten months would keep the $4$-and-$3$ and $2$-and-$7$ shapes inside the average. The recovered comparison therefore keeps $4$ and does not substitute $7$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $y=35$ from letter B would get $95+175=270$ and miss the claim. After isolating the unknown, the check is against $y=35$. The figure $95+175=270$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $y=35$ stays in the write-up.

What would have to change for the opposite verdict? If Premium were $\\$32$, five of each would be $\\$255$. The two households force $y=31$, and five-and-five is then $\\$250$.

The recovered prices on five of each give $\\$250$, Five months of each plan is a balanced household, unlike Household 1's $4$ Basic and $3$ Premium or Household 2's $2$ Basic and $7$ Premium. One Basic plus one Premium is $19+31=50$, and five such pairs are $250$. That pair view is honest here because the counts match.

Averaging $169$ and $255$ and scaling to ten months would keep the unbalanced mixes inside the average. After isolating the unknown, the check is against $169$. The figure $255$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $169$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $y=35$ from letter B would get $95+175=270$ and miss $250$. The recovered comparison therefore keeps $y=35$ and does not substitute $250$. If Premium had been $32$, five of each would have been $255$, the same as Household 2's printed total by coincidence, and the claim's $250$ would fail. The two households force $y=31$, and five-and-five is then $250$.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 22,
    solution_overview: `StreamPlus offers two flat-rate monthly plans, Basic and Premium, with no separate connection fee. Customer service pulled combined billing records mixing plan-months across two households.

**Part 1: Building the system.**

Let $x$ = Basic monthly price, $y$ = Premium monthly price.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Record this independent observation.** In symbols:

$$
4x + 3y = 169
$$

**2. Record this independent observation.** In symbols:

$$
2x + 7y = 255
$$

**Part 2: The model.**

$$
4x + 3y = 169 \\tag{1}
$$

$$
2x + 7y = 255 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the first by 7 and the second by 3: $28x + 21y = 1183$; $6x + 21y = 765$.

**2.** Subtracting:

$$
(28x + 21y) - (6x + 21y) = 1183 - 765 \\Rightarrow 22x = 418 \\Rightarrow x = 19
$$

**3.** Substituting back into Household 1:

$$
4(19) + 3y = 169 \\Rightarrow 76 + 3y = 169 \\Rightarrow y = 31
$$

**Answer.** Basic = \\$19.00/month | Premium = \\$31.00/month`,
  },
  {
    id: `math-5-23`,
    case_id: `MATH 5.23`,
    title: `Willow Market  -  Grocery Receipts`,
    context: `Two items  -  organic apples and almond milk  -  recently had their prices updated. (A note on every receipt reminds shoppers that loyalty- card members save 5% storewide; neither receipt below belongs to a loyalty member, so no discount has actually been applied.)`,
    tables_markdown: `| Receipt 1 | Qty | Price |
| --- | --- | --- |
| Bread (loaf) | 1 | \\$3.60 |
| Eggs (dozen) | 1 | \\$4.40 |
| Organic Apples (lb) | 5 | ? |
| Almond Milk (carton) | 3 | ? |
| Receipt Total |  | \\$50.00 |
| Receipt 2 | Qty | Price |
| Bread (loaf) | 1 | \\$3.60 |
| Organic Apples (lb) | 2 | ? |
| Almond Milk (carton) | 5 | ? |
| Receipt Total |  | \\$43.20 |`,
    statements: [
      `Organic apples cost \\$4.80 per pound.`,
      `Almond milk costs less than organic apples, per unit.`,
      `Five pounds of apples costs exactly the same as four cartons of almond milk.`,
      `If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than \\$47.00.`,
      `Buying 10 lb of apples and 2 cartons of milk together costs more than \\$60.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) Organic apples cost \\$4.80 per pound.**  (true)

The statement is a claim about the organic apple price after bread and eggs are peeled off the receipts. A note reminds shoppers that loyalty-card members save $5\\%$ storewide, but neither receipt belongs to a loyalty member, so no discount has actually been applied.

The overview already recovered $x = 4.80$. This letter does not rebuild that pair. It only asks whether the recovered apple price is the number in the claim.

**1.** The recovered $4.80$ is attached to apples, not to almond milk. Quoting $\\$6$ here would have swapped the items. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** Dividing Receipt 1's $\\$50$ by $5$ pounds of apples, ignoring everything else, would land on $\\$10$ and miss the claim. Once $5$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $\\$10$ is an apple-only split of a mixed receipt. Bread, eggs, and milk all have to come off first.

The opposite verdict would need a different peeled remainder on one of the two receipts. With the two non-loyalty receipts as printed, apples cannot cost anything other than $\\$4.80$ per pound.

The recovered apple price matches the claimed $\\$4.80$ per pound, so the statement is True.`,
      `**B) Almond milk costs less than organic apples, per unit.**  (false)

The statement claims almond milk costs less per unit than organic apples. The overview already recovered $x=4.80$ per pound for apples and $y=6$ per carton for milk. The extra arithmetic is only comparing those two recovered unit prices on the units as sold.

**1.** Milk minus apples, on the units as sold:

$$6 - 4.80 = 1.20$$

Milk sits $\\$1.20$ above apples, not below.

**2.** Then $6 < 4.80$ is false. Milk is the dearer item.

**3.** Five pounds of apples cost $5 \\times 4.80=24$, and four cartons of milk cost $4 \\times 6=24$, which is letter C's equality. That equality does not make one carton cheaper than one pound. It makes five pounds match four cartons.

Per-unit comparison here is carton versus pound, which is what the claim asks. Converting to some other unit would be answering a different question. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Loyalty $5\\%$ was not applied. The opposite verdict would need $y < x$. With $y=6$ and $x=4.80$, milk is not cheaper per unit.

Almond milk costs $\\$6$ and apples $\\$4.80$, so milk is not cheaper per unit, so the statement is False.`,
      `**C) Five pounds of apples costs exactly the same as four cartons of almond milk.**  (true)

The statement compares five pounds of apples with four cartons of almond milk.

The overview already has $x=4.80$ and $y=6$. The extra arithmetic is only costing both baskets.

**1.** Five pounds of apples:

$$5 \\times 4.80 = 24$$

**2.** Four cartons of milk:

$$4 \\times 6 = 24$$

**3.** Compare:

$$24 = 24$$

The two baskets match. Five pounds of apples is exactly Receipt 1's apple column, which the leftover equation already priced at $\\$24$ once milk is stripped. Four cartons of milk are not on either receipt as a block, but $4 \\times 6=24$ is the same dollar figure.

Using five cartons of milk, copying Receipt 2's milk count, would get $\\$30$ and miss the equality. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

Five pounds of apples and four cartons of milk both cost $\\$24$, so the statement is True.`,
      `**D) If the store's 5% loyalty discount had applied to Receipt 1's total, the customer would have paid less than \\$47.00.**  (false)

The statement applies the $5\\%$ loyalty discount to Receipt 1's $\\$50$ total and claims the customer would have paid less than $\\$47$.

Neither printed receipt actually received that discount. This letter is a counterfactual. The extra arithmetic is only $95\\%$ of $\\$50$.

**1.** Loyalty price on Receipt 1:

$$50 \\times 0.95 = 47.50$$

**2.** Compare with $\\$47$:

$$47.50 > 47$$

The discounted total is $\\$47.50$, which is not less than $\\$47$. The inequality is strict, and $47.50$ fails it.

Computing $50-5=45$, subtracting five dollars instead of five percent, would get a figure that *is* less than $\\$47$ and flip the verdict. That is why $50-5=45$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Five percent of $\\$50$ is $\\$2.50$, not $\\$5$. Applying $5\\%$ only to the apple-and-milk leftover $\\$42$ would get $50-2.10=47.90$, still not less than $\\$47$. That is the fork: $5\\%$ belongs to the recovered isolation, $50-2.10=47.90$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The loyalty price would have been $\\$47.50$, which is not less than $\\$47$, so the statement is False.`,
      `**E) Buying 10 lb of apples and 2 cartons of milk together costs more than \\$60.**  (false)

This letter is a new mix: $10$ lb of apples and $2$ cartons of milk, compared with a $\\$60$ cutoff.

The overview already has $x=4.80$ and $y=6$. The extra arithmetic is only costing that mix.

**1.** Ten pounds of apples:

$$10 \\times 4.80 = 48$$

**2.** Two cartons of milk:

$$2 \\times 6 = 12$$

**3.** Add and compare with $\\$60$:

$$48 + 12 = 60$$

The mix equals $\\$60$, so it is not more than $\\$60$. The inequality is strict, and equality fails it.

Treating "more than" as "at least" would flip the verdict. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $y=4.80$ as well, swapping the prices, would get $48+9.60=57.60$ and still fail "more than $60$", so that error would not flip this particular letter. The recovered comparison therefore keeps $y=4.80$ and does not substitute $60$. Adding bread and eggs onto the mix would overshoot. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

Ten pounds of apples and two cartons of milk cost exactly $\\$60$, which is not more than $\\$60$, Ten pounds of apples and two cartons of milk is double Receipt 2's apple column plus two-fifths of its milk column, not a scale copy of either receipt. At $4.80$ and $6$ the mix is $48+12=60$ on the nose. The claim's "more than $\\$60$" is a strict inequality, and equality fails it.

Treating "more than" as "at least" would flip the verdict. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Adding Receipt 2's bread $3.60$ onto $60$ would get $63.60$ and accept "more than $60$" by keeping a known item that this letter's mix does not include. That is the fork: $3.60$ belongs to the recovered isolation, $63.60$ belongs to the discarded mix. Apples and milk only, ten and two, is $60$ exactly.

If apples had been $5.00$, the mix would have been $50+12=62$, which is more than $60$, and the claim would have been true. The two leftover equations force $x=4.80$, and $10 \\times 4.80 + 12 = 60$, not more.

so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 23,
    solution_overview: `Two items, organic apples and almond milk, recently had their prices updated. (A note on every receipt reminds shoppers that loyalty- card members save 5% storewide; neither receipt below belongs to a loyalty member, so no discount has actually been applied.).

**Part 1: Building the system.**

Let $x$ = current price per lb of organic apples, $y$ = current price per carton of almond milk. Bread and egg prices are already known, and the loyalty-discount note is a distractor that does not apply here.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Subtract known items, then write the remaining-price equation.** Start from the printed total: $5x + 3y = 50.00 - 3.60 - 4.40 = 42.00$. The clean system equation is:

$$
5x + 3y = 42.00
$$

**2. Subtract known items, then write the remaining-price equation.** Start from the printed total: $2x + 5y = 43.20 - 3.60 = 39.60$. The clean system equation is:

$$
2x + 5y = 39.60
$$

**Part 2: The model.**

$$
5x + 3y = 42.00 \\tag{1}
$$

$$
2x + 5y = 39.60 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the first by 5 and the second by 3: $25x + 15y = 210$; $6x + 15y = 118.80$.

**2.** Subtracting:

$$
(25x + 15y) - (6x + 15y) = 210 - 118.80 \\Rightarrow 19x = 91.20 \\Rightarrow x = 4.80
$$

**3.** Substituting back into the first leftover:

$$
5(4.80) + 3y = 42.00 \\Rightarrow 24.00 + 3y = 42.00 \\Rightarrow y = 6.00
$$

**Answer.** Organic apples = \\$4.80/lb | Almond milk = \\$6.00/carton`,
  },
  {
    id: `math-5-24`,
    case_id: `MATH 5.24`,
    title: `BrightHome Energy  -  Monthly Utility Bills`,
    context: `BrightHome Energy bills a fixed connection fee plus a constant rate per unit. Customer service claims the rate is \\$0.24/unit, unverified against real data. BrightHome also offers a Solar Offset Plan with no connection fee, at a flat \\$0.29/unit.`,
    tables_markdown: `| Bill | Units Consumed | Total Charge |
| --- | --- | --- |
| Bill 1 | 240 | \\$83.40 |
| Bill 2 | 380 | \\$112.80 |`,
    statements: [
      `The fixed connection fee is \\$33.`,
      `Customer service's claimed rate of \\$0.24 per unit is correct.`,
      `At 280 units of usage, the standard plan costs less than \\$95.`,
      `The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.`,
      `At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) The fixed connection fee is \\$33.**  (true)

The statement is a claim about BrightHome's fixed connection fee. The two bills differ only in units consumed, $\\$83.40$ at $240$ units and $\\$112.80$ at $380$ units, so the fee is the intercept of that line. Customer service's $\\$0.24$ rate is a claim to check, not a value to plug in.

The overview already recovered $f = 33$. This letter does not rebuild that pair. It only asks whether the recovered fee is the number in the claim.

**1.** The recovered $33$ is attached to the connection, not to the per-unit rate. Quoting $0.21$ or $0.24$ here would have swapped fee and rate. The stem's recovered values line up with $0.21$, whereas $0.24$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $0.21$ stays in the write-up.

**2.** Averaging $\\$83.40$ and $\\$112.80$ would land on about $\\$98$ and treat that as a fee. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. The trap figure $\\$98$ is an average of two bills that already include usage. Averaging cannot isolate the intercept.

The Solar Offset Plan has no connection fee and does not rewrite this intercept. The opposite verdict would need a different pair of billed totals. With $\\$83.40$ and $\\$112.80$ as printed, the connection fee cannot be anything other than $\\$33$.

The recovered connection fee matches the claimed $\\$33$, so the statement is True.`,
      `**B) Customer service's claimed rate of \\$0.24 per unit is correct.**  (false)

The statement claims customer service's $\\$0.24$ per unit is the actual rate. The two standard-plan bills recover a different slope once the shared fee cancels. The $140$-unit gap between $380$ and $240$ units is $112.80-83.40=29.40$ dollars.

The overview already recovered $r = 0.21$. The claim writes $\\$0.24$, three cents above that slope.

**1.** The $140$-unit gap at the claimed rate:

$$140 \\times 0.24 = 33.60$$

The actual dollar gap is $\\$29.40$, not $\\$33.60$. Those extra $\\$4.20$ are $140$ times $\\$0.03$.

**2.** At $r=0.24$ and recovered $f=33$, the $240$-unit bill would be $33+57.60=90.60$, which overshoots $\\$83.40$ by $\\$7.20$.

**3.** Customer service's figure is unverified against the bills. The bills are the observations; the phone claim is not. The Solar Offset's $\\$0.29$ is a different plan and does not pull the standard rate up to $0.24$.

The opposite verdict would need the dollar gap to be $\\$33.60$ instead of $\\$29.40$. With $\\$83.40$ and $\\$112.80$ as printed, the rate cannot be $\\$0.24$.

The recovered rate is $\\$0.21$, not $\\$0.24$, so the statement is False.`,
      `**C) At 280 units of usage, the standard plan costs less than \\$95.**  (true)

This letter is a new usage level: $280$ units on the standard plan, compared with a $\\$95$ cutoff.

The overview already has $f=33$ and $r=0.21$. The extra arithmetic is only evaluating the standard plan at $280$ units.

**1.** Two hundred eighty units at the recovered rate:

$$280 \\times 0.21 = 58.80$$

**2.** Add the recovered fee:

$$33 + 58.80 = 91.80$$

**3.** Compare with $\\$95$:

$$91.80 < 95$$

The standard plan at $280$ units is $\\$91.80$, which sits $\\$3.20$ under the cutoff.

Using customer service's $0.24$ would get $33+67.20=100.20$, which is *not* less than $\\$95$ and would flip the verdict. So the letter reads the claim against $0.24$; $33+67.20=100.20$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $0.24$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using the recovered $0.21$ is the whole content of this letter. Using Solar Offset $0.29 \\times 280=81.20$ would be answering a different plan. The recovered isolation is checked against the claim using $0.29 \\times 280=81.20$, which is the figure the sessions actually produce.

The standard plan at $280$ units costs $\\$91.80$, which is less than $\\$95$, Two hundred eighty units sits between Bill 1's $240$ and Bill 2's $380$, so this is an interpolation on the recovered line $33+0.21u$. At $u=280$ that line is $91.80$, which sits $3.20$ under $95$. Customer service's $0.24$ would have put the same usage at $33+67.20=100.20$, over the cutoff, and would have flipped the verdict. Using the recovered $0.21$ is therefore essential, not decorative.

Solar Offset at $280$ units is $0.29 \\times 280=81.20$, which is also less than $95$, but that is a different plan. The claim names the standard plan. Reporting $81.20$ here would be answering with the rival. Once $81.20$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim.

Linear interpolation between $83.40$ and $112.80$ using unit share $(280-240)/(380-240)=40/140$ gives $83.40+29.40 \\times 40/140=83.40+8.40=91.80$, the same figure. That agreement checks the line. It does not replace the cutoff comparison.

so the statement is True.`,
      `**D) The Solar Offset Plan is cheaper than the standard plan at every usage level above 0 units.**  (false)

The statement claims Solar Offset is cheaper than the standard plan at every usage level above $0$ units.

Solar Offset is $0.29u$ with no fee. The standard plan is $33+0.21u$. Solar is cheaper when $0.29u < 33+0.21u$, that is $0.08u < 33$, so $u < 412.5$.

**1.** At a sample $100$ units, standard is $33+21=54$ and Solar is $29$. Solar is cheaper there.

**2.** At a sample $500$ units, standard is $33+105=138$ and Solar is $145$. Standard is cheaper there.

**3.** Because there exist positive usages on both sides of $412.5$, Solar is not cheaper at *every* positive usage. Low usage can favour Solar, because avoiding the $\\$33$ fee outweighs the steeper $0.29$ rate. High usage favours the shallower standard rate $0.21$. Solar only wins below $412.5$ units.

Comparing the two rates $0.29$ and $0.21$ without the fee would conclude standard is always cheaper and would still reject the claim, but for a stronger reason than the stem supports. Working from the isolated values, $0.29$ is the figure that is checked, not the detour that produced $0.21$. The fee creates a region where Solar wins. That region is not "every usage above $0$."

Solar Offset is not cheaper at every positive usage, so the statement is False.`,
      `**E) At 500 units of usage, the Solar Offset Plan would be cheaper than the standard plan.**  (false)

The statement compares the two plans at $500$ units and claims Solar Offset would be cheaper.

The extra arithmetic is only evaluating both plans at $500$.

**1.** Solar Offset at $500$ units:

$$0.29 \\times 500 = 145$$

**2.** Standard at $500$ units:

$$33 + 500 \\times 0.21 = 33 + 105 = 138$$

**3.** Compare:

$$145 > 138$$

Solar is $\\$7$ more expensive at $500$ units, not cheaper. That usage sits above the $412.5$ crossing from letter D, so the ranking has already flipped.

Using customer service's $0.24$ on standard would get $33+120=153$, and then Solar's $145$ *would* be cheaper, flipping the verdict. After isolating the unknown, the check is against $0.24$. The figure $145$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $0.24$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The recovered $0.21$ is what keeps standard ahead at $500$ units.

At $500$ units Solar costs $\\$145$ and standard costs $\\$138$, so Solar is not cheaper, Five hundred units sits above the $412.5$ crossing from letter D, so Solar's steeper rate has already overtaken the $\\$33$ fee advantage. Solar is $145$. Standard is $138$. Solar is $7$ more expensive, not cheaper.

Using customer service's $0.24$ on standard would get $33+120=153$, and then Solar's $145$ would look cheaper, flipping the verdict. So the letter reads the claim against $0.24$; $145$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $0.24$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered $0.21$ is what keeps standard ahead at $500$ units. Comparing $500 \\times 0.29$ with $500 \\times 0.21$ without the fee would find Solar more expensive by $40$, which is the wrong gap ($40$ versus $7$) but the right ranking. Working from the isolated values, $500 \\times 0.29$ is the figure that is checked, not the detour that produced $7$. That contrast is the reason the verdict goes the way it does.

If the Solar rate had been $0.27$, then $500 \\times 0.27=135$, which is less than standard's $138$, and the claim would have been true. The stem prints Solar at $0.29$, and at $500$ units that $0.29$ loses to $33+0.21 \\times 500$.

so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 24,
    solution_overview: `BrightHome Energy bills a fixed connection fee plus a constant rate per unit. Customer service claims the rate is \\$0.24/unit, unverified against real data.

**Part 1: Building the system.**

Let $x$ = fixed connection fee, $y$ = rate per unit under the standard plan. Treat the \\$0.24/unit figure as a claim to verify.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Read the bill with 240 extra units.** At rate $y$, that bill is:

$$
x + 240y = 83.40
$$

**2. Read the bill with 380 extra units.** At rate $y$, that bill is:

$$
x + 380y = 112.80
$$

**Part 2: The model.**

$$
x + 240y = 83.40 \\tag{1}
$$

$$
x + 380y = 112.80 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtracting Bill 2 minus Bill 1:

$$
(x + 380y) - (x + 240y) = 112.80 - 83.40
$$

$$
140y = 29.40 \\Rightarrow y = 0.21
$$

**2.** Substituting back into Bill 1:

$$
x + 240(0.21) = 83.40 \\Rightarrow x + 50.40 = 83.40 \\Rightarrow x = 33.00
$$

**3.** Crossover with Solar ($0.29u$, no connection fee):

$$
33 + 0.21u = 0.29u \\Rightarrow 33 = 0.08u \\Rightarrow u = 412.5
$$

**Answer.** Fixed fee = \\$33.00 | Rate = \\$0.21/unit (customer service's figure does not match)`,
  },
  {
    id: `math-5-25`,
    case_id: `MATH 5.25`,
    title: `Trattoria Bella  -  Off-Peak vs. Peak Bills`,
    context: `Trattoria Bella serves pasta and appetizers at consistent prices. Off-peak tables carry no service fee; peak tables automatically have a 10% service charge added before the bill is printed. Table 5 (off-peak) printed \\$174.00 for 6 pasta + 4 appetizers, with no fee. Table 8 (peak, fee already included) came to \\$46.00 more than Table 5's total, for 5 pasta + 7 appetizers.`,
    statements: [
      `A pasta dish costs \\$19.`,
      `An appetizer costs more than a pasta dish.`,
      `Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly \\$26.00.`,
      `If Table 5 had also been charged the 10% peak-hour service fee, its total would have been \\$191.40.`,
      `Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than \\$150.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) A pasta dish costs \\$19.**  (true)

The statement is a claim about the pasta price at Trattoria Bella. Table 5 is off-peak with no service fee, $6$ pasta and $4$ appetizers for $\\$174$. Table 8 is peak with a $10\\%$ fee already included, $\\$46$ more than Table 5, for $5$ pasta and $7$ appetizers.

The overview already recovered pasta $x = 19$ after peeling Table 8's fee and solving with Table 5. This letter does not rebuild that pair. It only asks whether the recovered pasta price is the number in the claim.

**1.** The recovered $19$ is attached to pasta, not to appetizers. Quoting $\\$15$ here would have swapped the plates. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.

**2.** Dividing $\\$174$ by $6$ pasta dishes, ignoring appetizers, would land on $\\$29$ and miss the claim. Once $6$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $\\$29$ is a pasta-only split of Table 5. Appetizers have to come off first, and Table 8's fee has to be peeled before that table can help.

The opposite verdict would need a different Table 5 total. With $\\$174$ off-peak and a peeled Table 8 of $\\$200$, pasta cannot cost anything other than $\\$19$.

The recovered pasta price matches the claimed $\\$19$, so the statement is True.`,
      `**B) An appetizer costs more than a pasta dish.**  (false)

The statement claims an appetizer costs more than a pasta dish. The overview already recovered pasta $19$ and appetizer $15$. The extra arithmetic is only comparing those two recovered plate prices.

**1.** Appetizer minus pasta:

$$15 - 19 = -4$$

The appetizer sits $\\$4$ below pasta, not above.

**2.** Then $15 > 19$ is false. Pasta is the dearer plate.

**3.** Seeing Table 8's higher total with more appetizers might infer appetizers are expensive. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Table 8 also has a $10\\%$ peak fee, which inflates the printed total without changing unit prices. Peel first: Table 8's food layer is $\\$200$ for $5$ pasta and $7$ appetizers, which at $19$ and $15$ rebuilds $95+105=200$.

The trap is reading a fee-inflated mix as a ranking of plate prices. The opposite verdict would need $y > x$. With $x=19$ and $y=15$, an appetizer is not more expensive.

An appetizer costs $\\$15$ and pasta $\\$19$, so an appetizer is not more expensive, so the statement is False.`,
      `**C) Table 8's pre-service-charge subtotal exceeds Table 5's total by exactly \\$26.00.**  (true)

The statement compares Table 8's *pre-fee* subtotal with Table 5's printed total, and claims the gap is exactly $\\$26$.

Table 5 printed $\\$174$ with no fee. Table 8 printed $\\$46$ more than that, so $\\$220$, fee already included. The extra arithmetic is peeling Table 8 and subtracting.

**1.** Table 8's printed total:

$$174 + 46 = 220$$

**2.** Strip the $10\\%$ peak fee:

$$\\frac{220}{1.10} = 200$$

**3.** Subtract Table 5:

$$200 - 174 = 26$$

The pre-fee gap is $\\$26$, matching the claim. Comparing printed totals $220-174=46$ would be reporting the with-fee gap, which is letter-adjacent but not this claim. The opposite verdict would need a different isolation than $220-174=46$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Subtracting $10\\%$ of $220$ as $22$ would land on a subtotal of $198$ and a gap of $24$. So the letter reads the claim against $10\\%$; $24$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $10\\%$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

Table 8's pre-fee subtotal exceeds Table 5 by $\\$26$, so the statement is True.`,
      `**D) If Table 5 had also been charged the 10% peak-hour service fee, its total would have been \\$191.40.**  (true)

The statement applies the $10\\%$ peak-hour service fee to Table 5, which printed as an off-peak bill. Table 5's $\\$174$ for $6$ pasta and $4$ appetizers carried no fee. Table 8 is the peak table; this letter is a counterfactual about Table 5.

The extra arithmetic is only multiplying Table 5's printed total by $1.10$. This letter does not rebuild pasta or appetizer prices.

**1.** Start from Table 5's off-peak $\\$174$.

**2.** Apply the peak fee that Table 5 never actually paid:

$$174 \\times 1.10 = 191.40$$

Adding $\\$10$ would get $\\$184$. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Using Table 8's $\\$220$ here would be describing Table 8, not the counterfactual Table 5. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Taxing $\\$174$ after first peeling a fee that was never there would wander off $191.40$. Once $191.40$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

As a check, $6(19)+4(15)=114+60=174$, then $174 \\times 1.10=191.40$ still. The opposite verdict would need a different Table 5 print. With $\\$174$ off-peak, a $10\\%$ peak fee would have printed $\\$191.40$.

If Table 5 had been charged the peak fee, its total would have been $\\$191.40$, so the statement is True.`,
      `**E) Buying 4 pasta dishes and 4 appetizers, with the 10% service charge applied, would cost less than \\$150.**  (true)

This letter is a new mix: $4$ pasta and $4$ appetizers, with the $10\\%$ service charge applied, compared with a $\\$150$ cutoff.

The overview already has pasta $19$ and appetizer $15$. The extra arithmetic is costing the food, then applying the fee.

**1.** Four pasta dishes:

$$4 \\times 19 = 76$$

**2.** Four appetizers:

$$4 \\times 15 = 60$$

**3.** Food subtotal, then $10\\%$ fee, then compare with $\\$150$:

$$76 + 60 = 136, \\qquad 136 \\times 1.10 = 149.60$$

Since $149.60 < 150$, the billed mix sits forty cents under the cutoff.

Skipping the fee would report $\\$136$, still less than $\\$150$, so that error would not flip the verdict. Keeping $150$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Using $4 \\times 19 + 4 \\times 19$ would overshoot. The path that matches the stem therefore holds $4 \\times 19 + 4 \\times 19$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Comparing with $\\$150$ before the fee, then added $10\\%$ of $150$, would be rounding the cutoff rather than the bill. That is the fork: $10\\%$ belongs to the recovered isolation, $150$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

What would have to change for the opposite verdict? If pasta were $\\$20$, the food would be $80+60=140$ and the billed total $154$, which is not less than $\\$150$. The two tables force pasta at $\\$19$, and four-and-four with the fee is then $\\$149.60$.

Four of each with the $10\\%$ fee costs $\\$149.60$, which is less than $\\$150$, Four pasta and four appetizers with the $10\\%$ peak fee is a new mix, not Table 5's $6$ and $4$ and not Table 8's $5$ and $7$. Food is $76+60=136$. After the fee, $149.60$, forty cents under $150$. That forty cents is why the cutoff is tight: a pasta price of $19.10$ would have pushed the billed total to $150.04$, over the bar.

Skipping the fee would report $136$, still under $150$, so that error would not flip the inequality, but it would miss the billed figure the claim is about. After isolating the unknown, the check is against $136$. The figure $150$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $136$ stays in the write-up. The claim includes the service charge. Applying $10\\%$ to $150$ as a round check would be rounding the bar rather than the bill. The stem's recovered values line up with $10\\%$, whereas $150$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $10\\%$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

Table 5 off-peak at four-and-four would be $136$ with no fee, comfortably under $150$. This letter is the peak-hour version of that basket. The $10\\%$ is what brings $136$ up to $149.60$, still just under.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 25,
    solution_overview: `Trattoria Bella serves pasta and appetizers at consistent prices. Off-peak tables carry no service fee; peak tables automatically have a 10% service charge added before the bill is printed.

**Part 1: Building the system.**

Let $x$ = price of one pasta dish, $y$ = price of one appetizer. Table 8's total must first be reconstructed as Table 5's total plus \\$46.00, and only then can the 10% service charge be stripped back out.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Record this independent observation.** In symbols:

$$
6x + 4y = 174.00
$$

**2. Record this independent observation.** In symbols:

$$
5x + 7y = (174.00 + 46.00) \\/ 1.10 = 200.00
$$

**Part 2: The model.**

$$
6x + 4y = 174.00 \\tag{1}
$$

$$
5x + 7y = (174.00 + 46.00) \\/ 1.10 = 200.00 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Table 5's equation by 2: $3x + 2y = 87$.

**2.** Multiply by 7: $21x + 14y = 609$.

**3.** Multiply Table 8's equation by 2: $10x + 14y = 400$.

**4.** Subtracting:

$$
(21x + 14y) - (10x + 14y) = 609 - 400 \\Rightarrow 11x = 209 \\Rightarrow x = 19
$$

**5.** Substituting back into $3x + 2y = 87$:

$$
3(19) + 2y = 87 \\Rightarrow 57 + 2y = 87 \\Rightarrow y = 15
$$

**Answer.** Pasta dish = \\$19.00 | Appetizer = \\$15.00`,
  },
  {
    id: `math-5-26`,
    case_id: `MATH 5.26`,
    title: `Meridian Distribution  -  Warehouse Inventory Summary`,
    context: `Meridian Distribution ships Item M and Item N. The inventory system logs item counts, unit weight, unit volume, and total shipment cost  -  but only item counts and cost determine unit pricing.`,
    tables_markdown: `| Shipment | Item M Units | Item N Units | Wt. M (kg) | Wt. N (kg) | Cost |
| --- | --- | --- | --- | --- | --- |
| Shipment 1 | 110 | 80 | 2.4 | 1.7 | \\$4,470 |
| Shipment 2 | 70 | 150 | 2.4 | 1.7 | \\$5,520 |`,
    statements: [
      `Item M costs \\$21 per unit.`,
      `Item N costs \\$30 per unit.`,
      `Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.`,
      `150 units of Item N alone would cost \\$4,050.`,
      `Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) Item M costs \\$21 per unit.**  (true)

The statement is a claim about Item M's unit cost at Meridian. The inventory system logs item counts, unit weight, unit volume, and total shipment cost, but only item counts and cost determine unit pricing. Weight and volume are freight distractors.

The overview already recovered $M = 21$ from Shipment 1's $110M+80N=4470$ and Shipment 2's $70M+150N=5520$. This letter does not rebuild that pair. It only asks whether the recovered M price is the number in the claim.

**1.** The recovered $21$ is attached to M, not to N. Quoting $\\$27$ here would have swapped the items. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** Dividing Shipment 1's $\\$4{,}470$ by $110$ M units, ignoring N, would land on about $\\$40.64$ and miss the claim. Once $110$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $\\$40.64$ is an M-only split of a mixed shipment. Weight and volume columns do not price M.

The opposite verdict would need a different shipment total. With $\\$4{,}470$ and $\\$5{,}520$ as printed, Item M cannot cost anything other than $\\$21$.

The recovered M cost matches the claimed $\\$21$ per unit, so the statement is True.`,
      `**B) Item N costs \\$30 per unit.**  (false)

The statement claims Item N costs $\\$30$ per unit at Meridian. Item N is the leftover unknown after Item M is taken out of either shipment cost. Weight and volume columns are distractors; only counts and cost pin the prices.

The overview recovered $N = 27$. The claim writes $\\$30$, three dollars above that leftover. This letter does not rebuild Item M. It asks whether $\\$30$ could still sit on both shipments.

**1.** At $N=30$, Shipment 1 would be $110(21)+80(30)=2310+2400=4710$, which overshoots $\\$4{,}470$ by $\\$240$.

**2.** Those extra $\\$240$ are eighty N units times a $\\$3$ overstatement. Shipment 2 would overshoot by $150 \\times 3 = 450$ as well. Neither printed total survives $N=30$.

Dividing Shipment 2's $\\$5{,}520$ by $150+70$ mixed units would land near $\\$25$ and still miss $27$. Working from the isolated values, $150+70$ is the figure that is checked, not the detour that produced $27$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Rounding $27$ up to a neighbouring ten would manufacture $\\$30$. Once $27$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim.

The opposite verdict would need a different Shipment 1 total. With $\\$4{,}470$ and $\\$5{,}520$ as printed, Item N cannot cost $\\$30$. The claimed $\\$30$ sits $\\$3$ above the recovered $\\$27$, so the statement is False.`,
      `**C) Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.**  (false)

The statement claims Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.

Shipment 1 is $110+80=190$ units at $\\$4{,}470$. Shipment 2 is $70+150=220$ units at $\\$5{,}520$. The extra arithmetic is those two averages.

**1.** Shipment 1 average:

$$\\frac{4470}{190} = 23.526\\ldots$$

**2.** Shipment 2 average:

$$\\frac{5520}{220} = 25.09\\ldots$$

**3.** Compare: they are not equal. Shipment 2 is heavier on the dearer Item N ($27$ versus $21$), so its average sits higher. Equal averages would need equal mix proportions, which these shipments do not have.

Comparing totals $4470$ and $5520$ without dividing by counts would be answering a different question. The recovered comparison therefore keeps $4470$ and does not substitute $5520$. Using weight as the denominator would be mixing the distractor column into the average. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

The two per-unit averages are not equal, so the statement is False.`,
      `**D) 150 units of Item N alone would cost \\$4,050.**  (true)

The statement is a new mix: $150$ units of Item N alone, with no Item M on the order. Shipment 2 did include $150$ N units, but it also included $70$ M units. This letter strips those M units out.

The overview recovered $N=27$. The extra arithmetic is only that product. This letter does not rebuild Shipment 1.

**1.** Start from the recovered N price.

**2.** Take one hundred fifty units and no M units:

$$150 \\times 27 = 4050$$

Using $M=21$ here would get $\\$3{,}150$. That is why $M=21$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using Shipment 2's $150$ N units as if they were the whole shipment would report $\\$5{,}520$ and have included the $70$ M units. After isolating the unknown, the check is against $150$. The figure $70$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $150$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using the false $\\$30$ from letter B would get $\\$4{,}500$ and overshoot. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The opposite verdict would need a different N price. If N had been $\\$30$, one hundred fifty units would have been $\\$4{,}500$, not $\\$4{,}050$. With $N=27$ recovered from the two shipments, $150$ N units alone cost $\\$4{,}050$.

One hundred fifty N units alone cost $\\$4{,}050$, so the statement is True.`,
      `**E) Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight of goods.**  (false)

The statement claims Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight.

Shipment 1 costs $\\$4{,}470$ and Shipment 2 costs $\\$5{,}520$, so Shipment 1 is cheaper. The weights are $110 \\times 2.4 + 80 \\times 1.7 = 264+136=400$ kg and $70 \\times 2.4 + 150 \\times 1.7 = 168+255=423$ kg. Shipment 1 is slightly lighter, but that is not why it is cheaper.

The prices were recovered from counts and dollars, not from kilograms. Item N is dearer per unit than Item M ($27$ versus $21$), and Shipment 2 has far more N ($150$ versus $80$). That mix, not the $23$ kg weight gap, is what drives the $\\$1{,}050$ cost gap.

Dividing dollars by kilograms and found different dollars-per-kg would still be using weight as if it priced the goods. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The table's weight column is constant per item type and never enters the unit-price system.

Shipment 1 is cheaper because of its mix of M and N, not because of total weight, so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 26,
    solution_overview: `Meridian Distribution ships Item M and Item N. The inventory system logs item counts, unit weight, unit volume, and total shipment cost, but only item counts and cost determine unit pricing.

**Part 1: Building the system.**

Let $x$ = cost per unit of Item M, $y$ = cost per unit of Item N. Weight and volume are logged for freight billing and play no role in the item pricing itself.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
110x + 80y = 4470
$$

**2. Record this independent observation.** In symbols:

$$
70x + 150y = 5520
$$

**Part 2: The model.**

$$
110x + 80y = 4470 \\tag{1}
$$

$$
70x + 150y = 5520 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide by 10: $11x + 8y = 447$; $7x + 15y = 552$.

**2.** Multiply by 15 and 8: $165x + 120y = 6705$; $56x + 120y = 4416$.

**3.** Subtracting:

$$
(165x + 120y) - (56x + 120y) = 6705 - 4416 \\Rightarrow 109x = 2289 \\Rightarrow x = 21
$$

**4.** Substituting back into $11x + 8y = 447$:

$$
11(21) + 8y = 447 \\Rightarrow 231 + 8y = 447 \\Rightarrow y = 27
$$

**Answer.** Item M = \\$21.00/unit | Item N = \\$27.00/unit`,
  },
  {
    id: `math-5-27`,
    case_id: `MATH 5.27`,
    title: `Green Horizons Landscaping  -  Job Quotation`,
    context: `Green Horizons prices Standard and Premium planting. Job 1's invoice records quantity in planting bundles (each bundle = 2 Standard + 5 Premium units), while Job 2's invoice lists individual units directly. Job 1: 7 bundles  -  Total \\$1,946. Job 2: 13 Standard + 21 Premium  -  Total \\$1,301. New Quotation: 8 Standard + 19 Premium  -  Quoted Total: \\$1,068.`,
    statements: [
      `Standard planting costs \\$29 per unit.`,
      `Premium planting costs \\$50 per unit.`,
      `Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.`,
      `The Premium portion alone of Job 1 cost more than the entirety of Job 2.`,
      `The new quotation of \\$1,068 is mathematically consistent with the confirmed rates.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Standard planting costs \\$29 per unit.**  (true)

The statement is a claim about the Standard planting price at Green Horizons. Job 1 is billed in bundles of $2$ Standard plus $5$ Premium. Job 2 is billed in units: $13$ Standard and $21$ Premium for $\\$1{,}301$. The overview already expanded Job 1's $7$ bundles to $14$ Standard and $35$ Premium and recovered $x = 29$.

This letter does not rebuild that pair. It only asks whether the recovered Standard price is the number in the claim.

**1.** The recovered $29$ is attached to Standard, not to Premium. Quoting $\\$44$ here would have swapped the grades. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

**2.** Dividing Job 2's $\\$1{,}301$ by $13$ Standard units, ignoring Premium, would land on $\\$100$ and miss the claim. The opposite verdict would need a different isolation than $13$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $\\$100$ is a Standard-only split of a mixed job. Bundles have to be unpacked before Job 1 can help, but this letter is not doing that unpacking; the overview already did.

The opposite verdict would need a different Job 2 total. With the expanded Job 1 at $\\$1{,}946$ and Job 2 at $\\$1{,}301$, Standard cannot cost anything other than $\\$29$.

The recovered Standard price matches the claimed $\\$29$ per unit, so the statement is True.`,
      `**B) Premium planting costs \\$50 per unit.**  (false)

The statement claims Premium planting costs $\\$50$ per unit at Green Horizons. Premium is the leftover after Standard is taken out of either job. Job 1 was quoted in bundles; the overview already expanded those bundles before solving.

The overview recovered $y = 44$. The claim writes $\\$50$, six dollars above that leftover. This letter does not rebuild Standard's $\\$29$.

**1.** At $y=50$, Job 2 would be $13(29)+21(50)=377+1050=1427$, which overshoots $\\$1{,}301$ by $\\$126$.

**2.** Those extra $\\$126$ are twenty-one Premium units times a $\\$6$ overstatement. Job 1's expanded $14$ Standard and $35$ Premium would overshoot by $35 \\times 6 = 210$ as well.

Treating each Job 1 bundle as one Premium unit would inflate $y$. Once $y$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Rounding $44$ up to a neighbouring ten would manufacture $\\$50$. Once $44$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The new quotation $8(29)+19(44)=1068$ would also fail at $y=50$.

The opposite verdict would need a different Job 2 total. With $\\$1{,}301$ as printed, Premium cannot cost $\\$50$. The claimed $\\$50$ sits $\\$6$ above the recovered $\\$44$, so the statement is False.`,
      `**C) Job 1 actually consisted of 14 Standard units and 35 Premium units once its bundles are expanded.**  (true)

The statement expands Job 1's $7$ bundles into unit counts. Each bundle is $2$ Standard plus $5$ Premium. The extra arithmetic is only that expansion. Unit prices are not needed.

**1.** Standard units in Job 1:

$$7 \\times 2 = 14$$

**2.** Premium units in Job 1:

$$7 \\times 5 = 35$$

**3.** Total plants in Job 1, as a check:

$$14 + 35 = 49$$

which is also $7 \\times 7$, because each bundle holds $7$ plants. The claim asks for the split, not the mixed $49$.

Treating a bundle as $2+5=7$ units of one type would report $49$ mixed units and miss the split. That is the fork: $2+5=7$ belongs to the recovered isolation, $49$ belongs to the discarded mix. Using Job 2's $13$ and $21$ here would be naming the wrong job. The recovered comparison therefore keeps $13$ and does not substitute $21$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The new quotation $8$ Standard and $19$ Premium is a third mix, not Job 1 unpacked.

The opposite verdict would need a different bundle recipe. With $7$ bundles of $2$ Standard and $5$ Premium, Job 1 is $14$ Standard and $35$ Premium.

Job 1 expands to $14$ Standard and $35$ Premium, so the statement is True.`,
      `**D) The Premium portion alone of Job 1 cost more than the entirety of Job 2.**  (true)

The statement compares Job 1's Premium portion alone with the entirety of Job 2.

The overview already recovered $y=44$, and letter C expanded Job 1 to $35$ Premium units. Job 2's printed total is $\\$1{,}301$. The extra arithmetic is only costing those $35$ Premium units.

**1.** Premium portion of Job 1:

$$35 \\times 44 = 1540$$

**2.** Compare with Job 2:

$$1540 > 1301$$

Job 1's Premium line alone exceeds Job 2 by $\\$239$. Using $y=50$ from letter B would get $1750$, still greater, so that error would not flip the verdict. After isolating the unknown, the check is against $y=50$. The figure $1750$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $y=50$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Comparing whole Job 1 $\\$1{,}946$ with Job 2 would be answering a coarser question that still happens to rank the same way. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim is narrower: Premium portion versus whole Job 2.

Job 1's Premium portion is $\\$1{,}540$, which exceeds Job 2's $\\$1{,}301$, so the statement is True.`,
      `**E) The new quotation of \\$1,068 is mathematically consistent with the confirmed rates.**  (true)

The statement asks whether the new quotation of $\\$1{,}068$ for $8$ Standard and $19$ Premium is consistent with the recovered rates.

The overview already has $x=29$ and $y=44$. The extra arithmetic is only costing that mix.

**1.** Eight Standard units:

$$8 \\times 29 = 232$$

**2.** Nineteen Premium units:

$$19 \\times 44 = 836$$

**3.** Add and compare with the quoted $\\$1{,}068$:

$$232 + 836 = 1068$$

The quotation matches exactly. It is not a third independent observation that could contradict the first two; it is the same linear rule evaluated at a new mix.

Using $y=50$ would get $232+950=1182$ and call the quote inconsistent. The stem's recovered values line up with $y=50$, whereas $232+950=1182$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $y=50$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered $44$ is what makes $\\$1{,}068$ sit on the line.

The mix $8$ Standard and $19$ Premium at the recovered rates is $\\$1{,}068$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 27,
    solution_overview: `Green Horizons prices Standard and Premium planting. Job 1's invoice records quantity in planting bundles (each bundle = 2 Standard + 5 Premium units), while Job 2's invoice lists individual units directly.

**Part 1: Building the system.**

Let $x$ = price per Standard unit, $y$ = price per Premium unit. Job 1's bundles must first be converted into individual Standard and Premium units before the system can be written.

**1. Translate: Job 1, bundles expanded: 7×2, 7×5.** That observation becomes:

$$
14x + 35y = 1946
$$

**2. Translate: Job 2, as invoiced.** That observation becomes:

$$
13x + 21y = 1301
$$

**Part 2: The model.**

$$
14x + 35y = 1946 \\tag{1}
$$

$$
13x + 21y = 1301 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Job 1's equation by 7: $2x + 5y = 278$.

**2.** Multiply by 21 and Job 2's by 5: $42x + 105y = 5838$; $65x + 105y = 6505$.

**3.** Subtracting:

$$
(65x + 105y) - (42x + 105y) = 6505 - 5838 \\Rightarrow 23x = 667 \\Rightarrow x = 29
$$

**4.** Substituting back into $2x + 5y = 278$:

$$
2(29) + 5y = 278 \\Rightarrow 58 + 5y = 278 \\Rightarrow y = 44
$$

**5.** Check the new quotation:

$$
8(29) + 19(44) = 232 + 836 = 1068
$$

**Answer.** Standard = \\$29.00/unit | Premium = \\$44.00/unit`,
  },
  {
    id: `math-5-28`,
    case_id: `MATH 5.28`,
    title: `Horizon Consulting  -  Travel Reimbursement Memo`,
    context: `Reimbursement is a fixed per-diem for each meal day plus a fixed rate per mile. Finance separately believes the mileage rate is \\$0.40/mile, unconfirmed against payroll data. One of three reports contains a data-entry error making it financially impossible.`,
    tables_markdown: `| Report | Meal Days | Miles Driven | Total Reimbursed |
| --- | --- | --- | --- |
| Report 1 | 5 | 150 | \\$323 |
| Report 2 | 3 | 250 | \\$245 |
| Report 3 | 7 | 40 | \\$120 |`,
    statements: [
      `The per diem is \\$55 per day.`,
      `Finance's belief that the mileage rate is \\$0.40/mile is correct.`,
      `Report 3 is impossible, since 7 meal days alone would require at least \\$385 at the confirmed per-diem rate  -  far more than its reported \\$120 total.`,
      `Report 1's total exceeds Report 2's total by more than \\$80.`,
      `Reports 1 and 2 combined reimbursed at least \\$550.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The per diem is \\$55 per day.**  (true)

The statement is a claim about the per-diem rate at Horizon Consulting. Reimbursement is a fixed per diem for each meal day plus a fixed rate per mile. Reports 1 and 2 are the consistent pair. Report 3 is the corrupted row and is not used to recover the rates. Finance's believed $\\$0.40$ mileage rate is a claim to check, not a value to plug in.

The overview already recovered the per diem $d = 55$ from Reports 1 and 2. This letter does not rebuild that pair. It only asks whether the recovered per diem is the number in the claim.

**1.** The recovered $55$ is attached to meal days, not to miles. Quoting $0.32$ here would have swapped per diem and mileage. The recovered isolation is checked against the claim using $0.32$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Dividing Report 1's $\\$323$ by $5$ days, ignoring miles, would land on $\\$64.60$ and miss the claim. Once $5$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap figure $\\$64.60$ is a day-only split of a mixed report. Miles have to come off first. Report 3's $\\$120$ for $7$ days is impossible at $d=55$ and must stay out.

The opposite verdict would need a different pair of clean-report totals. With Report 1 at $\\$323$ and Report 2 at $\\$245$, the per diem cannot be anything other than $\\$55$.

The recovered per diem matches the claimed $\\$55$ per day, so the statement is True.`,
      `**B) Finance's belief that the mileage rate is \\$0.40/mile is correct.**  (false)

The statement claims Finance's $\\$0.40$ per mile is the actual mileage rate. Reports 1 and 2 recover a different slope. Report 1 is $5$ days and $150$ miles for $\\$323$. Report 2 is $3$ days and $250$ miles for $\\$245$.

The overview already recovered $r = 0.32$ from those two clean reports. Then $0.32 \\neq 0.40$.

**1.** At $r=0.40$ and recovered $d=55$, Report 1 would be

$$5 \\times 55 + 150 \\times 0.40 = 275 + 60 = 335$$

which overshoots $\\$323$ by $\\$12$. Those extra $\\$12$ are $150$ miles times an $\\$0.08$ overstatement.

**2.** Report 2 at the same false rate would be $3(55)+250(0.40)=165+100=265$, which overshoots $\\$245$ by $\\$20$, and $250 \\times 0.08=20$.

**3.** Finance's belief is unverified against payroll. The two clean reports are the observations. Report 3 cannot be used to rescue $0.40$, because Report 3 is already impossible at the recovered per diem.

The opposite verdict would need Report 1 to total $\\$335$ instead of $\\$323$. With the two clean reports as printed, the mileage rate cannot be $\\$0.40$.

The recovered mileage rate is $\\$0.32$, not $\\$0.40$, so the statement is False.`,
      `**C) Report 3 is impossible, since 7 meal days alone would require at least \\$385 at the confirmed per-diem rate  -  far more than its reported \\$120 total.**  (true)

The statement argues Report 3 is impossible: $7$ meal days alone would require at least $\\$385$ at the confirmed per diem, far more than the reported $\\$120$.

The overview already recovered $d=55$. Mileage is nonnegative, so a $7$-day report cannot undercut $7 \\times 55$.

**1.** Seven days of per diem, ignoring miles:

$$7 \\times 55 = 385$$

**2.** Report 3 printed $\\$120$. Then $120 < 385$, so even with zero miles the printed total is $\\$265$ short of the per diem floor.

**3.** Adding $40$ miles at $0.32$ would only make the required total larger, $385+12.80=397.80$, farther from $\\$120$. The row cannot be rescued by a mileage story. It is a data-entry error.

Using Finance's $0.40$ here would still find the floor at $\\$385$ plus a larger mileage piece. The recovered isolation is checked against the claim using $0.40$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does. Treating $\\$120$ as per diem only, $120/7 \\approx 17$, would be recovering a third inconsistent per diem instead of testing Report 3 against the pair already recovered. The path that matches the stem therefore holds $120/7 \\approx 17$ fixed and only then reads the claim.

Seven days require at least $\\$385$, so Report 3's $\\$120$ is impossible, Report 3 is the inconsistent third row. Reports 1 and 2 recovered $d=55$ and $r=0.32$. Seven meal days at $55$ already demand $385$ before any miles. Report 3 printed $120$ for those seven days plus $40$ miles, which is $265$ below the per-diem floor and $277.80$ below the model value $385+12.80=397.80$.

No nonnegative mileage rate can rescue a total that sits below the per-diem floor. Setting $7(55)+40r=120$ forces $r=-6.625$, a negative rate, which is financially impossible. That is why the row is a data-entry error rather than a third observation.

Trying to include Report 3 in the $2 \\times 2$ would find no nonnegative solution that also fits Reports 1 and 2. The path that matches the stem therefore holds $2 \\times 2$ fixed and only then reads the claim. That contrast is the reason the verdict goes the way it does. The right response is to recover the pair from the two clean reports, then test Report 3 against that pair, which is this letter. Finance's believed $0.40$ mileage rate is irrelevant to the floor: the floor is pure per diem.

so the statement is True.`,
      `**D) Report 1's total exceeds Report 2's total by more than \\$80.**  (false)

The statement claims Report 1's total exceeds Report 2's total by more than $\\$80$. Report 1 printed $\\$323$. Report 2 printed $\\$245$. Report 3 is corrupted and is not in this comparison. The extra arithmetic is only the difference, then the cutoff.

**1.** Report 1 minus Report 2:

$$323 - 245 = 78$$

**2.** Compare with $\\$80$:

$$78 > 80$$

is false. The gap is $\\$78$, two dollars short of the cutoff.

**3.** Rebuilding at recovered $d=55$ and $r=0.32$ confirms the same printed totals: $5(55)+150(0.32)=275+48=323$ and $3(55)+250(0.32)=165+80=245$. The $\\$78$ gap is $2$ extra days minus $100$ fewer miles, $110-32=78$, not a second solve.

Using $323-240$ or adding a round $\\$2$ of rounding would manufacture $\\$80$ or more. The recovered isolation is checked against the claim using $323-240$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $\\$80$ is the round bar the claim chose. The printed totals give $\\$78$ exactly. Including Report 3's $\\$120$ on either side would rewrite a comparison the claim did not ask.

The opposite verdict would need the printed gap to exceed $\\$80$. With $\\$323$ and $\\$245$ as printed, the gap is $\\$78$.

Report 1 exceeds Report 2 by $\\$78$, which is not more than $\\$80$, so the statement is False.`,
      `**E) Reports 1 and 2 combined reimbursed at least \\$550.**  (true)

The statement claims Reports 1 and 2 combined reimbursed at least $\\$550$. Report 3 is the corrupted row and is not added. The extra arithmetic is only the sum of the two clean printed totals, then the cutoff.

**1.** Add the two clean reports:

$$323 + 245 = 568$$

**2.** Compare with $\\$550$:

$$568 \\geq 550$$

The combined total clears the bar by $\\$18$.

**3.** Including Report 3's $\\$120$ would get $\\$688$, still above $\\$550$, so that error would not flip the verdict. That is why $550$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Subtracting Report 3 would get $568-120=448$ and flip it. The opposite verdict would need a different isolation than $568-120=448$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The claim names Reports 1 and 2 combined. Using Finance's false $0.40$ rate to rebuild the two reports would inflate the sum and still clear $\\$550$, so that error also would not flip this particular cutoff. That is why $0.40$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The honest sum still uses the printed $\\$323$ and $\\$245$.

The opposite verdict would need the two clean reports to total less than $\\$550$. With those two printed figures, the combined reimbursement is $\\$568$.

The two clean reports total $\\$568$, which is at least $\\$550$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 28,
    solution_overview: `Reimbursement is a fixed per-diem for each meal day plus a fixed rate per mile. Finance separately believes the mileage rate is \\$0.40/mile, unconfirmed against payroll data.

**Part 1: Building the system.**

Let $x$ = per-diem rate, $y$ = per-mile rate. Identify which report cannot possibly be correct before building the model, and treat Finance's \\$0.40/mile belief as a claim to be checked.

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Report 1.** That observation becomes:

$$
5x + 150y = 323
$$

**2. Translate: Report 2.** That observation becomes:

$$
3x + 250y = 245
$$

**Part 2: The model.**

$$
5x + 150y = 323 \\tag{1}
$$

$$
3x + 250y = 245 \\tag{2}
$$

**Part 3: Solve.**

**1.** Report 3 must be checked before use. Once $x = 55$ is in hand, 7 meal days alone cost $7 \\times 55 = 385$, already far above the reported $120$, so that row is set aside as an entry error. (Even before solving, any per diem in the same range as Reports 1 and 2 already overshoots $120$.)

**2.** Multiply the remaining two equations by 3 and 5: $15x + 450y = 969$; $15x + 1250y = 1225$.

**3.** Subtracting:

$$
(15x + 1250y) - (15x + 450y) = 1225 - 969 \\Rightarrow 800y = 256 \\Rightarrow y = 0.32
$$

**4.** Substituting back into Report 1:

$$
5x + 150(0.32) = 323 \\Rightarrow 5x + 48 = 323 \\Rightarrow x = 55
$$

**Answer.** Per diem = \\$55.00/day | Mileage rate = \\$0.32/mile (Finance's belief does not match)`,
  },
  {
    id: `math-5-29`,
    case_id: `MATH 5.29`,
    title: `Cedarline Manufacturing  -  Weekly Production Log`,
    context: `Cedarline assembles Widget A and Widget B on the same line, each requiring a fixed number of labor-hours. Week 1's log is fully legible. Week 2's log is smudged: unit counts are gone, but a sticky note reads "8 more Widget B than Widget A, 58 units total, using 505 labor- hours." Week 3 is water-damaged: the Widget A count is illegible.`,
    tables_markdown: `| Week | Widget A | Widget B | Total Labor-Hours |
| --- | --- | --- | --- |
| Week 1 | 35 | 20 | 445 |
| Week 2 | (see note) | (see note) | 505 |
| Week 3 | (illegible) | 15 | 290 |`,
    statements: [
      `Widget A requires 7 hours of labor to assemble.`,
      `Widget B requires 12 hours of labor to assemble.`,
      `Week 2 actually produced 25 Widget A units and 33 Widget B units.`,
      `If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.`,
      `The illegible Week 3 entry can be reconstructed as 20 Widget A units.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Widget A requires 7 hours of labor to assemble.**  (true)

The statement is a claim about Widget A's labor hours per unit at Cedarline. Week 1 is fully legible: $35$ Widget A and $20$ Widget B used $445$ hours. Week 2's counts were recovered from the sticky note as $25$ A and $33$ B using $505$ hours. Week 3 is water-damaged and is not needed to recover the rates.

The overview already recovered $a = 7$ hours per Widget A. This letter does not rebuild that pair. It only asks whether the recovered A-time is the number in the claim.

**1.** The recovered $7$ is attached to Widget A, not to Widget B. Quoting $10$ here would have swapped the widgets. The recovered isolation is checked against the claim using $10$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**2.** Dividing Week 1's $445$ hours by $35$ A units, ignoring B, would land on about $12.7$ and miss the claim. The stem's recovered values line up with $445$, whereas $12.7$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $445$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap figure $12.7$ is an A-only split of a mixed week. Widget B's hours have to come off first.

The opposite verdict would need a different Week 1 hour total. With $445$ and $505$ as the two clean hour logs, Widget A cannot take anything other than $7$ hours.

The recovered A-time matches the claimed $7$ hours per unit, so the statement is True.`,
      `**B) Widget B requires 12 hours of labor to assemble.**  (false)

The statement claims Widget B requires $12$ hours of labor per unit on Cedarline's line. Widget B is the leftover after Widget A's $7$ hours are taken out of Week 1. Week 2's smudged counts and Week 3's water damage are not this letter.

The overview recovered $b = 10$. The claim writes $12$, two hours above that leftover. This letter does not rebuild Widget A.

**1.** At $b=12$, Week 1 would be $35(7)+20(12)=245+240=485$, which overshoots $445$ by $40$ hours.

**2.** Those extra $40$ hours are twenty B units times a $2$-hour overstatement. Week 2's reconstructed $25$ A and $33$ B would overshoot as well.

Splitting Week 1's $445$ hours across $55$ widgets would land near $8.1$ hours and treat both types as equal. Working from the isolated values, $445$ is the figure that is checked, not the detour that produced $8.1$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Reading the sticky note's $505$ hours as if they belonged to Week 1 would inflate B. Once $505$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Twelve hours is a round neighbour of ten, not the recovered leftover.

The opposite verdict would need a different Week 1 labor total. With $445$ hours on $35$ A and $20$ B, Widget B cannot take $12$ hours. The claimed $12$ sits $2$ hours above the recovered $10$, so the statement is False.`,
      `**C) Week 2 actually produced 25 Widget A units and 33 Widget B units.**  (true)

The statement reconstructs Week 2 from the sticky note: $8$ more Widget B than Widget A, $58$ units total.

That is a sum-and-difference pair on the counts, not a second labor-rate solve. The extra arithmetic is only those two count equations.

**1.** Total units $A+B=58$ and $B=A+8$.

**2.** Substitute:

$$A + (A+8) = 58, \\qquad 2A = 50, \\qquad A = 25$$

**3.** Then $B=25+8=33$.

Week 2 produced $25$ Widget A and $33$ Widget B. As a check, the recovered times give $7(25)+10(33)=175+330=505$, matching the logged hours. Using $B=A-8$ would flip the counts to $33$ A and $25$ B and fail that hour check. So the letter reads the claim against $B=A-8$; $25$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $B=A-8$ stays in the write-up.

Week 2's counts are $25$ A and $33$ B, so the statement is True.`,
      `**D) If Widget A's assembly time increased by 20% (Widget B's unchanged), Week 1's total labor-hours would also increase by 20%.**  (false)

The statement claims that a $20\\%$ increase in Widget A's assembly time, with B unchanged, would raise Week 1's total hours by $20\\%$ as well.

Week 1 logged $445$ hours: $35$ A at $7$ hours and $20$ B at $10$ hours. Only the A-time rises.

**1.** New A-time:

$$7 \\times 1.20 = 8.4$$

**2.** New Week 1 hours:

$$35 \\times 8.4 + 20 \\times 10 = 294 + 200 = 494$$

**3.** Compare with a $20\\%$ rise of the original $445$:

$$445 \\times 1.20 = 534$$

Then $494 \\neq 534$. The total rises by $49$ hours, about $11\\%$, not $20\\%$. Widget B's $200$ hours are untouched, so the whole week cannot scale by A's percentage.

Applying $20\\%$ to $445$ would accept the claim. Working from the isolated values, $20\\%$ is the figure that is checked, not the detour that produced $445$. That would be correct only if every hour on the line were A-hours.

Week 1's hours would rise to $494$, not to $534$, so the statement is False.`,
      `**E) The illegible Week 3 entry can be reconstructed as 20 Widget A units.**  (true)

The statement reconstructs Week 3's illegible Widget A count. Week 3 logged $15$ Widget B and $290$ hours. The overview already has $a=7$ and $b=10$. The extra arithmetic is only solving one linear equation for the missing count. This letter does not rebuild Week 1 or Week 2.

**1.** B's hours in Week 3:

$$15 \\times 10 = 150$$

**2.** Remaining hours for A:

$$290 - 150 = 140$$

**3.** A units:

$$\\frac{140}{7} = 20$$

Week 3 produced $20$ Widget A units. Using $b=12$ from letter B would get $290-180=110$, which is not divisible by $7$ into a clean count. Working from the isolated values, $b=12$ is the figure that is checked, not the detour that produced $7$. The recovered $b=10$ is what makes $20$ drop out. Treating $290/15 \\approx 19.3$ as an A count would have ignored B entirely. The path that matches the stem therefore holds $290/15 \\approx 19.3$ fixed and only then reads the claim.

The trap figure $110/7$ is letter B's false B-time, which refuses to land on an integer. The opposite verdict would need a different Week 3 hour log or a different recovered B-time. With $b=10$ and $a=7$, the illegible count is $20$.

The illegible Week 3 entry reconstructs as $20$ Widget A units, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 29,
    solution_overview: `Cedarline assembles Widget A and Widget B on the same line, each requiring a fixed number of labor-hours. Week 1's log is fully legible.

**Part 1: Building the system.**

Let $x$ = labor-hours per Widget A, $y$ = labor-hours per Widget B. Week 2's unit counts must first be recovered from the sticky note (a small sum-and-difference step) before the main system can be written.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Week 1.** That observation becomes:

$$
35x + 20y = 445
$$

**2. Translate: Week 2, recovered counts.** That observation becomes:

$$
25x + 33y = 505
$$

**Part 2: The model.**

$$
35x + 20y = 445 \\tag{1}
$$

$$
25x + 33y = 505 \\tag{2}
$$

**Part 3: Solve.**

**1.** Recover Week 2 first:

$$
B = A + 8, \\qquad A + B = 58 \\Rightarrow 2A + 8 = 58 \\Rightarrow A = 25,\\ B = 33
$$

**2.** Multiply Week 1 by 33 and Week 2 by 20: $1155x + 660y = 14685$; $500x + 660y = 10100$.

**3.** Subtracting:

$$
(1155x + 660y) - (500x + 660y) = 14685 - 10100 \\Rightarrow 655x = 4585 \\Rightarrow x = 7
$$

**4.** Substituting back into Week 1:

$$
35(7) + 20y = 445 \\Rightarrow 245 + 20y = 445 \\Rightarrow y = 10
$$

**5.** Reconstruct Week 3:

$$
7A + 10(15) = 290 \\Rightarrow 7A = 140 \\Rightarrow A = 20
$$

**Answer.** Widget A = 7 hrs/unit | Widget B = 10 hrs/unit`,
  },
  {
    id: `math-5-30`,
    case_id: `MATH 5.30`,
    title: `Sterling Distributors  -  Regional Sales Dashboard`,
    context: `Sterling Distributors' dashboard reports quarterly unit sales and revenue for Products X and Y, sold at company-wide fixed prices, across three branches. Two of the three branch reports are known to reconcile correctly; the third contains an uncorrected data-entry error, though the dashboard does not indicate which one.`,
    tables_markdown: `| Branch | Product X Units | Product Y Units | Reported Revenue |
| --- | --- | --- | --- |
| North | 85 | 70 | \\$4,145 |
| South | 55 | 95 | \\$3,875 |
| East | 65 | 50 | \\$3,200 |`,
    statements: [
      `Product X is priced at \\$29.`,
      `Product Y is priced at \\$28.`,
      `The East branch's reported revenue is fully consistent with the derived prices.`,
      `If the East branch's reported revenue were corrected to reflect the derived prices, it should read \\$3,085.`,
      `North's reported revenue exceeds South's and East's reported revenues combined.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A) Product X is priced at \\$29.**  (true)

The statement is a claim about Product X's price at Sterling Distributors. Two of the three branch reports reconcile; the third contains an uncorrected data-entry error. North and South are the consistent pair: $85X+70Y=4145$ and $55X+95Y=3875$. East is the row to check later, not the row to solve from.

The overview already recovered $x = 29$ from North and South. This letter does not rebuild that pair. It only asks whether the recovered X price is the number in the claim.

**1.** The recovered $29$ is attached to Product X, not to Product Y. Quoting $\\$24$ here would have swapped the products. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**2.** Dividing North's $\\$4{,}145$ by $85$ units of X, ignoring Y, would land on about $\\$48.76$ and miss the claim. That is why $85$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap figure $\\$48.76$ is an X-only split of a mixed branch. East's uncorrected revenue must stay out of the solve.

The opposite verdict would need a different North or South total. With those two reconciling rows as printed, Product X cannot cost anything other than $\\$29$.

The recovered X price matches the claimed $\\$29$, so the statement is True.`,
      `**B) Product Y is priced at \\$28.**  (false)

The statement claims Product Y is priced at $\\$28$ across Sterling's branches. Product Y is the leftover after Product X is taken out of the two consistent branches. East is the branch that fails the recovered pair; this letter is not East's error.

The overview recovered $y = 24$. The claim writes $\\$28$, four dollars above that leftover. This letter does not rebuild Product X's $\\$29$.

**1.** At $y=28$, North would be $85(29)+70(28)=2465+1960=4425$, which overshoots the reported $\\$4{,}145$ by $\\$280$.

**2.** Those extra $\\$280$ are seventy Y units times a $\\$4$ overstatement. South would fail by the same $\\$4$ per Y unit. East's printed $\\$3{,}200$ is a different error, not a license to raise Y.

Averaging North and South per unit and calling that Y would mix X into the leftover. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Rounding $24$ up toward $29$ would manufacture $\\$28$ as a compromise between the two prices. That is the fork: $24$ belongs to the recovered isolation, $29$ belongs to the discarded mix. The recovered pair is $29$ and $24$, not $29$ and $28$.

The opposite verdict would need different North and South totals. With those two branches as printed, Product Y cannot cost $\\$28$. The claimed $\\$28$ sits $\\$4$ above the recovered $\\$24$, so the statement is False.`,
      `**C) The East branch's reported revenue is fully consistent with the derived prices.**  (false)

The statement claims East's reported $\\$3{,}200$ is consistent with the derived prices.

The overview already recovered $x=29$ and $y=24$. East sold $65$ X and $50$ Y. The extra arithmetic is only rebuilding East.

**1.** East's X line:

$$65 \\times 29 = 1885$$

**2.** East's Y line:

$$50 \\times 24 = 1200$$

**3.** Add and compare with the reported $\\$3{,}200$:

$$1885 + 1200 = 3085$$

Then $3085 \\neq 3200$. East's reported total sits $\\$115$ above the reconstructed $\\$3{,}085$. North and South both rebuild exactly at these prices, so East is the inconsistent row.

Treating East as one of the two defining rows would recover a different pair that then fails North or South. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The dashboard does not say which row is wrong; checking each rebuilt total against the reported one is how East is identified.

East's reported $\\$3{,}200$ does not match the reconstructed $\\$3{,}085$, East is the inconsistent third row. North rebuilds at $85(29)+70(24)=4145$ exactly. South rebuilds at $55(29)+95(24)=3875$ exactly. East at $65(29)+50(24)=3085$ does not match the printed $3200$. The $115$ overstatement is the dashboard error.

Using East with North to recover a pair would then fail South, and using East with South would fail North. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Checking each rebuilt total against the printed one is how East is identified as the odd row. The stem says two of three reconcile and does not say which; this letter is that check for East.

If East had printed $3085$, this letter would be true. The printed $3200$ is what makes it false. Using East's reported $3200$ in a later comparison, as letter E does, is a different question: letter E names reported revenues, including the error. Letter C asks whether that reported figure is consistent with the derived prices, and it is not.

so the statement is False.`,
      `**D) If the East branch's reported revenue were corrected to reflect the derived prices, it should read \\$3,085.**  (true)

The statement asks what East's revenue should read if corrected to the derived prices. East printed $\\$3{,}200$ for $65$ of X and $50$ of Y. North and South already forced $x=29$ and $y=24$. East is the inconsistent row.

Letter C already rebuilt East at $65(29)+50(24)=3085$. This letter is that corrected figure. The extra arithmetic is the same reconstruction: $\\$3{,}085$, not the printed $\\$3{,}200$.

**1.** Sixty-five X units at the recovered X price:

$$65 \\times 29 = 1885$$

**2.** Fifty Y units at the recovered Y price, then add:

$$50 \\times 24 = 1200, \\qquad 1885 + 1200 = 3085$$

The gap is $3200-3085=115$. That $\\$115$ is East's recording error, not a second price pair. Averaging North and South per unit and scaling to East's counts would wander off $3085$. The opposite verdict would need a different isolation than $3085$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The path that "corrected" East up to $\\$3{,}200$ would be defending the bad row. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

The opposite verdict would need North or South to be the bad branch. With those two consistent, East's honest total is $\\$3{,}085$.

Corrected East revenue is $\\$3{,}085$, so the statement is True.`,
      `**E) North's reported revenue exceeds South's and East's reported revenues combined.**  (false)

The statement claims North's reported revenue exceeds South's and East's reported revenues combined.

North printed $\\$4{,}145$. South printed $\\$3{,}875$. East printed $\\$3{,}200$. The extra arithmetic is adding South and East, then comparing. Use the reported figures, including East's error, because the claim names reported revenues.

**1.** South plus East reported:

$$3875 + 3200 = 7075$$

**2.** Compare with North:

$$4145 < 7075$$

North does not exceed the other two combined. It is not even close. Using East's corrected $\\$3{,}085$ would give $3875+3085=6960$, still far above $4145$. Either way the claim fails.

Comparing North with South alone, $4145>3875$, would be answering a different comparison. Keeping $4145>3875$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim is North versus the *sum* of South and East.

North's $\\$4{,}145$ does not exceed $\\$7{,}075$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 30,
    solution_overview: `Sterling Distributors' dashboard reports quarterly unit sales and revenue for Products X and Y, sold at company-wide fixed prices, across three branches. Two of the three branch reports are known to reconcile correctly; the third contains an uncorrected data-entry error, though the dashboard does not indicate which one.

**Part 1: Building the system.**

Let $x$ = price of Product X, $y$ = price of Product Y.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: North.** That observation becomes:

$$
85x + 70y = 4145
$$

**2. Translate: South.** That observation becomes:

$$
55x + 95y = 3875
$$

**Part 2: The model.**

$$
85x + 70y = 4145 \\tag{1}
$$

$$
55x + 95y = 3875 \\tag{2}
$$

**Part 3: Solve.**

**1.** North and South are used to derive the prices, since they reconcile with each other.

**2.** Divide by 5: $17x + 14y = 829$; $11x + 19y = 775$.

**3.** Multiply by 19 and 14: $323x + 266y = 15751$; $154x + 266y = 10850$.

**4.** Subtracting:

$$
(323x + 266y) - (154x + 266y) = 15751 - 10850 \\Rightarrow 169x = 4901 \\Rightarrow x = 29
$$

**5.** Substituting back into $17x + 14y = 829$:

$$
17(29) + 14y = 829 \\Rightarrow 493 + 14y = 829 \\Rightarrow y = 24
$$

**6.** Testing East:

$$
65(29) + 50(24) = 1885 + 1200 = 3085
$$

which does not match East's reported \\$3,200. The $115$ discrepancy reveals East as the erroneous branch.

**Answer.** Product X = \\$29.00/unit | Product Y = \\$24.00/unit`,
  },
  {
    id: `math-5-31`,
    case_id: `MATH 5.31`,
    title: `Riverside Hardware Supply  -  Two Fastener Invoices`,
    context: `Riverside Hardware Supply ships Type A Bolts and Type B Hinges by the case, at fixed per-case prices.`,
    tables_markdown: `| Invoice | Type A Cases | Type B Cases | Total |
| --- | --- | --- | --- |
| Invoice 1 | 9 | 13 | \\$527.45 |
| Invoice 2 | 7 | 19 | \\$657.35 |`,
    statements: [
      `Rounding Type A's case price up to the next whole dollar lands on exactly \\$19.00.`,
      `A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.`,
      `If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the \\$24 mark.`,
      `Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.`,
      `Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) Rounding Type A's case price up to the next whole dollar lands on exactly \\$19.00.**  (true)

The statement is a rounding claim about Type A's recovered case price, not about Invoice 1's total.

The overview already recovered Type A at $\\$18.45$ per case. Rounding that price up to the next whole dollar is the extra arithmetic.

**1.** Type A's price sits between $18$ and $19$. The next whole dollar above $18.45$ is $19$.

**2.** Rounding *to* the nearest dollar would also land on $18$, because $18.45$ is closer to $18$ than to $19$. The claim says "up to the next whole dollar," which is a ceiling, not nearest-even rounding. Ceiling of $18.45$ is $19$.

Rounding $18.45$ to $18$ would be using nearest-dollar instead of rounding up. The recovered comparison therefore keeps $18.45$ and does not substitute $18$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Rounding Invoice 1's $\\$527.45$ and then dividing by $22$ cases would be rounding the wrong object. Keeping $22$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

Ceiling of the recovered Type A price is $\\$19.00$, so the statement is True.`,
      `**B) A warehouse clerk insists Type B's case price exceeds Type A's by more than nine dollars but less than ten.**  (true)

The statement is a clerk's claim about the gap between Type B and Type A: more than nine dollars but less than ten.

The overview already recovered Type A at $18.45$ and Type B at $27.80$. The extra arithmetic is only the difference.

$$27.80 - 18.45 = 9.35$$

Then $9 < 9.35 < 10$. The gap sits in the open interval the clerk named.

Rounding both prices first, $28-18=10$, would land on the boundary and fail "less than ten." That is why $28-18=10$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed.using $27.80-18.00=9.80$ after dropping A's cents would still sit inside the interval, so that particular slip would not flip the verdict. The opposite verdict would need a different isolation than $27.80-18.00=9.80$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The honest gap is $9.35$.

Type B exceeds Type A by $\\$9.35$, which is more than nine and less than ten, so the statement is True.`,
      `**C) If Invoice 2's total were split evenly across its 26 cases regardless of fastener type, each case's implied share would clear the \\$24 mark.**  (true)

The statement splits Invoice 2's total evenly across its $26$ cases, ignoring fastener type, and asks whether that implied share clears $\\$24$.

Invoice 2 printed $\\$657.35$ for $7+19=26$ cases. The extra arithmetic is only that quotient. Unit prices are not re-solved.

**1.** Cases on Invoice 2:

$$7 + 19 = 26$$

**2.** Even split of the printed total:

$$\\frac{657.35}{26} = 25.282\\ldots$$

**3.** Compare with $\\$24$:

$$25.28 > 24$$

The implied share clears $\\$24$ by about $\\$1.28$. That average sits between the two recovered prices $18.45$ and $27.80$, as any mix average must. Invoice 2 is heavy on Type B ($19$ versus $7$), so the average leans toward $27.80$, which is why it clears $24$ comfortably.

Splitting Invoice 1 instead, $527.45/22 \\approx 23.97$, would fall just *under* $\\$24$ and flip the verdict. Once $527.45/22 \\approx 23.97$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The claim names Invoice 2. Using $657.35/19$, ignoring Type A, would overshoot further. The path that matches the stem therefore holds $657.35/19$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

Invoice 2's even split is about $\\$25.28$ per case, which clears $\\$24$, so the statement is True.`,
      `**D) Swapping which quantity (13 vs 9) applies to which fastener type in Invoice 1 happens to leave the total unchanged, purely because both fastener prices are so close together.**  (false)

The statement claims that swapping Invoice 1's quantities $13$ and $9$ across fastener types would leave the total unchanged, "because both prices are so close together."

The overview already recovered $A=18.45$ and $B=27.80$. Those prices are $9.35$ apart, not close. The extra arithmetic is costing both assignments.

**1.** Actual Invoice 1: $9$ of A and $13$ of B.

$$9(18.45) + 13(27.80) = 166.05 + 361.40 = 527.45$$

That rebuilds the printed total, as it should.

**2.** Swapped assignment: $13$ of A and $9$ of B.

$$13(18.45) + 9(27.80) = 239.85 + 250.20 = 490.05$$

**3.** Compare:

$$490.05 \\neq 527.45$$

The swapped mix is $\\$37.40$ cheaper. That gap is $4$ cases moved from B onto A, times the $\\$9.35$ price gap: $4 \\times 9.35 = 37.40$. The totals match only if the two prices are equal. They are not.

Glancing at $18.45$ and $27.80$ and calling them "close" because both start with a $2$-looking dollar after rounding would still be wrong by more than $\\$9$ per case. That is the fork: $18.45$ belongs to the recovered isolation, $2$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. "Close together" is the false premise that manufactures an unchanged total.

Swapping the quantities changes Invoice 1's total from $\\$527.45$ to $\\$490.05$, so the statement is False.`,
      `**E) Since 16 and 32 are simply the two invoices' case counts added together, common sense suggests the combined order must cost strictly more than placing both invoices separately, thanks to some kind of bulk-order premium.**  (false)

The statement claims that combining the two invoices into one order of $16$ A cases and $32$ B cases must cost strictly more than placing both invoices separately, because of a bulk-order premium.

The two invoices already *are* $9+7=16$ of A and $13+19=32$ of B. At fixed per-case prices there is no bulk premium in the model. The extra arithmetic is adding the two printed totals and comparing with the combined mix at recovered prices.

**1.** Separate invoices:

$$527.45 + 657.35 = 1184.80$$

**2.** Combined mix at recovered prices:

$$16(18.45) + 32(27.80) = 295.20 + 889.60 = 1184.80$$

**3.** Compare: the figures match. Linearity says they must. A bulk premium would have to be stated in the stem, and it is not. Common sense about "bigger order, bigger discount or bigger premium" is a story the invoices do not tell.

Adding a round $5\\%$ premium onto $\\$1{,}184.80$ would get about $\\$1{,}244$ and accept the claim. The path that matches the stem therefore holds $5\\%$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That premium is invented. Thinking $16$ and $32$ were new counts, not the sums of the two invoices, might cost a different mix; $16$ and $32$ are exactly those sums. The stem's recovered values line up with $16$, whereas $32$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $16$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The combined order costs the same $\\$1{,}184.80$ as the two invoices placed separately, so it does not cost strictly more, so the statement is False.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 31,
    solution_overview: `Riverside Hardware Supply ships Type A Bolts and Type B Hinges by the case, at fixed per-case prices.

**Part 1: Building the system.**

Let $x$ = price per case of Type A, $y$ = price per case of Type B.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
9x + 13y = 527.45
$$

**2. Record this independent observation.** In symbols:

$$
7x + 19y = 657.35
$$

**Part 2: The model.**

$$
9x + 13y = 527.45 \\tag{1}
$$

$$
7x + 19y = 657.35 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Invoice 1 by 19 and Invoice 2 by 13 so the $y$ terms both become $247y$:

$$
19(9x + 13y) = 19(527.45) \\Rightarrow 171x + 247y = 10021.55
$$

$$
13(7x + 19y) = 13(657.35) \\Rightarrow 91x + 247y = 8545.55
$$

**2.** Subtract the scaled Invoice 2 from the scaled Invoice 1:

$$
(171x + 247y) - (91x + 247y) = 10021.55 - 8545.55
$$

$$
80x = 1476.00 \\Rightarrow x = \\frac{1476.00}{80} = 18.45
$$

**3.** Substitute $x = 18.45$ into Invoice 1:

$$
9(18.45) + 13y = 527.45 \\Rightarrow 166.05 + 13y = 527.45
$$

$$
13y = 361.40 \\Rightarrow y = 27.80
$$

**Answer.** Type A costs \\$18.45 per case and Type B costs \\$27.80 per case.`,
  },
  {
    id: `math-5-32`,
    case_id: `MATH 5.32`,
    title: `Swift Cargo Co. vs. a Flat-Rate Competitor`,
    context: `Swift Cargo Co. charges a fixed dispatch fee plus a constant rate per mile. A competitor charges a flat \\$1.35 per mile with no dispatch fee at all.`,
    tables_markdown: `| Route | Miles | Total Charged by Swift Cargo |
| --- | --- | --- |
| Route 1 | 170 | \\$460.00 |
| Route 2 | 305 | \\$709.75 |`,
    statements: [
      `The dispatch fee sits exactly halfway between \\$145 and \\$146.`,
      `Per mile, Swift Cargo's rate is closer to \\$1.50 than to \\$2.00.`,
      `A 250-mile haul comes in five cents under six hundred and eight dollars.`,
      `At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of \\$270.`,
      `Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line  -  even though that intersection falls at a negative, and therefore meaningless, mileage.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A) The dispatch fee sits exactly halfway between \\$145 and \\$146.**  (true)

The statement places Swift Cargo's recovered dispatch fee halfway between $\\$145$ and $\\$146$. The overview already recovered the fee $f = 145.50$ from the two mileage bills. The extra arithmetic is only checking that midpoint.

**1.** Halfway between $145$ and $146$:

$$\\frac{145 + 146}{2} = 145.50$$

**2.** Compare with the recovered fee: they match.

**3.** Rounding $145.50$ to $146$ would have left the halfway point. That is the fork: $145.50$ belongs to the recovered isolation, $146$ belongs to the discarded mix. Using $460-170 \\times 2$ as a fee guess would land on $120$ and miss the claim. The recovered comparison therefore keeps $460-170 \\times 2$ and does not substitute $120$. That contrast is the reason the verdict goes the way it does. The trap figure $120$ is a two-dollar-per-mile leftover after stripping a round mileage charge that is not the recovered rate.

The opposite verdict would need the recovered fee to sit off $145.50$, for instance at $145$ or $146$ after a rounding. With the two Swift Cargo bills as printed, the dispatch fee is $145.50$, which is exactly the midpoint the claim named.

The dispatch fee is $\\$145.50$, which is exactly halfway between $\\$145$ and $\\$146$, so the statement is True.`,
      `**B) Per mile, Swift Cargo's rate is closer to \\$1.50 than to \\$2.00.**  (false)

The statement claims Swift Cargo's per-mile rate is closer to $\\$1.50$ than to $\\$2.00$.

The overview already recovered $r = 1.85$. The extra arithmetic is the two distances.

**1.** Distance to $\\$1.50$:

$$1.85 - 1.50 = 0.35$$

**2.** Distance to $\\$2.00$:

$$2.00 - 1.85 = 0.15$$

**3.** Compare: $0.15 < 0.35$, so $1.85$ is closer to $2.00$, not to $1.50$. The claim has the nearer neighbour backwards.

Comparing $1.85$ with $1.50$ only, noticing "both start with $1$," would call them closer as a digit story. That is the fork: $1.85$ belongs to the recovered isolation, $1$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Distance on the number line is what the claim asks. The competitor's flat $\\$1.35$ is a third point, even farther from $1.85$ than $1.50$ is.

Swift's rate $1.85$ sits closer to $2.00$ than to $1.50$, so the statement is False.`,
      `**C) A 250-mile haul comes in five cents under six hundred and eight dollars.**  (false)

This letter is a new haul: $250$ miles at Swift Cargo, claimed to come in five cents under $\\$608$.

The overview already has $f=145.50$ and $r=1.85$. The extra arithmetic is only evaluating Swift at $250$ miles.

**1.** Mileage charges:

$$250 \\times 1.85 = 462.50$$

**2.** Add the dispatch fee:

$$145.50 + 462.50 = 608.00$$

**3.** Compare with "five cents under $608$":

$$608.00 \\neq 607.95$$

The haul is exactly $\\$608.00$, not five cents under. The claim's five-cent story is a rounding rumour. Both $145.50$ and $462.50$ have a fifty-cent piece; they add to a whole dollar.

Using $250 \\times 1.80 + 145.50 = 450+145.50=595.50$ would undershoot. Once $250 \\times 1.80 + 145.50 = 450+145.50=595.50$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Using $r=1.85$ but $f=145$ would get $607.50$, which *is* fifty cents under $608$, nearby but not five cents. The recovered comparison therefore keeps $r=1.85$ and does not substitute $608$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Computing $250 \\times 1.85=462.50$ and then adding $145$ as $607.50$ again dropped the half dollar in the fee. That is the fork: $250 \\times 1.85=462.50$ belongs to the recovered isolation, $607.50$ belongs to the discarded mix.

What would have to change for the opposite verdict? If the fee were $145.45$, the total would be $607.95$, five cents under $608$. The two routes force $f=145.50$, and $250$ miles is then exactly $\\$608$.

The $250$-mile Swift haul is $\\$608.00$ exactly, not five cents under, A $250$-mile haul is between Route 1's $170$ and Route 2's $305$, so this is an interpolation on Swift's recovered line. Linear interpolation of the two printed totals using mile share $(250-170)/(305-170)=80/135$ gives $460 + 249.75 \\times 80/135 = 460+148=608$ exactly, matching $145.50+250 \\times 1.85$. The claimed "five cents under $608$" would require interpolating to $607.95$, which neither the two routes nor the recovered pair produces.

Fifty cents of the fee plus fifty cents of the mileage multiply to a whole dollar. Dropping either fifty-cent piece manufactures $607.50$, fifty cents under, still not five cents under. The claim's five-cent story is a rounding rumour with no support in $145.50$ or $1.85$.

If the fee had been $145.45$, the total would have been $607.95$. The two routes force $145.50$: $460-170 \\times 1.85=460-314.50=145.50$. That half dollar pins $608.00$ exactly at $250$ miles.

so the statement is False.`,
      `**D) At that same 250-mile mark, choosing the flat-rate competitor over Swift Cargo pockets a savings north of \\$270.**  (true)

The statement compares that same $250$-mile haul on Swift Cargo with the flat-rate competitor, and claims choosing the competitor pockets more than $\\$270$.

The competitor charges $\\$1.35$ per mile with no dispatch fee. Letter C already priced Swift at $\\$608$. The extra arithmetic is costing the competitor and subtracting.

**1.** Competitor at $250$ miles:

$$250 \\times 1.35 = 337.50$$

**2.** Swift at $250$ miles, from letter C:

$$608.00$$

**3.** Savings if the competitor is chosen:

$$608.00 - 337.50 = 270.50$$

Then $270.50 > 270$. The savings clear the cutoff by fifty cents.

Where does the $\\$270.50$ come from in pieces? Swift's extra rate is $1.85-1.35=0.50$ per mile, so $250 \\times 0.50=125$ of extra mileage, plus the whole $\\$145.50$ dispatch fee, totals $270.50$. Both pieces are extra cost on Swift; the competitor has neither the fee nor the steeper rate.

Forgetting the fee would report only the $\\$125$ rate gap and fail the $\\$270$ cutoff. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Using letter C's false $607.95$ would get savings $270.45$, still above $270$, so that slip would not flip the verdict. That is the fork: $607.95$ belongs to the recovered isolation, $270$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Comparing at Route 1's $170$ miles would get a smaller savings and might fall under $270$. That is the fork: $170$ belongs to the recovered isolation, $270$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

What would have to change for the opposite verdict? If the competitor charged $1.40$ per mile, the $250$-mile competitor bill would be $350$ and the savings $258$, under $270$. The stem's $1.35$ competitor rate plus Swift's recovered pair forces $270.50$.

Choosing the competitor at $250$ miles saves $\\$270.50$, which is north of $\\$270$, The $\\$270.50$ saving is Swift's extra $0.50$ per mile on $250$ miles, $125$, plus the whole dispatch fee $145.50$. Both pieces are costs the competitor does not charge. Forgetting the fee leaves only $125$, which fails the $270$ cutoff and would flip the verdict. Forgetting the rate gap leaves only $145.50$, which also fails $270$. Both extras are required to clear the bar, and together they clear it by fifty cents.

Route 1 at $170$ miles would save $145.50+170 \\times 0.50=230.50$, under $270$. Route 2 at $305$ miles would save $145.50+152.50=298$, over $270$. The claim names the $250$-mile mark, the same haul as letter C, and at that mark the saving is $270.50$.

If the competitor had charged $1.40$ per mile, the $250$-mile competitor bill would be $350$ and the saving $258$, under $270$. The stem's $1.35$ is what pushes the saving just over the cutoff.

so the statement is True.`,
      `**E) Because the two pricing formulas have different slopes, they are mathematically guaranteed to intersect somewhere on the number line  -  even though that intersection falls at a negative, and therefore meaningless, mileage.**  (true)

The statement is a uniqueness-and-crossing claim: Swift's fee-plus-rate line and the competitor's through-the-origin line have different slopes, so they intersect somewhere on the number line, even if that intersection is at a negative mileage.

Swift is $145.50 + 1.85m$. The competitor is $1.35m$. The slopes $1.85$ and $1.35$ are not equal, so the lines are not parallel, so they intersect at exactly one $m$.

**1.** Set the two formulas equal:

$$145.50 + 1.85m = 1.35m$$

**2.** Collect the mileage terms:

$$145.50 = 1.35m - 1.85m = -0.50m$$

**3.** Solve:

$$m = \\frac{145.50}{-0.50} = -291$$

The intersection is at $-291$ miles, which is not a real haul. It is still an intersection on the number line. The claim says exactly that: guaranteed to intersect, even though the crossing is negative and therefore meaningless as a route.

Concluding "different slopes, but Swift is always more expensive, so they never meet" would be thinking on $m \\geq 0$ only. That is why $m \\geq 0$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. On the nonnegative ray they never meet. On the whole line they do. The claim is careful about that distinction.

Using equal slopes would be describing a different competitor. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. If the competitor also charged $1.85$ per mile with no fee, the lines would be parallel and $145.50$ apart, never meeting. The stem's $1.35$ is what forces a crossing, and the positive fee is what pushes that crossing into negative miles.

The two formulas intersect at $m=-291$, a meaningless mileage but a real intersection, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 32,
    solution_overview: `Swift Cargo Co. charges a fixed dispatch fee plus a constant rate per mile.

**Part 1: Building the system.**

Let $x$ = Swift Cargo's fixed dispatch fee, $y$ = Swift Cargo's rate per mile.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides. Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Read the bill with 170 extra units.** At rate $y$, that bill is:

$$
x + 170y = 460.00
$$

**2. Read the bill with 305 extra units.** At rate $y$, that bill is:

$$
x + 305y = 709.75
$$

**Part 2: The model.**

$$
x + 170y = 460.00 \\tag{1}
$$

$$
x + 305y = 709.75 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract Route 1 from Route 2 to cancel the shared dispatch fee $x$:

$$
(x + 305y) - (x + 170y) = 709.75 - 460.00
$$

$$
135y = 249.75 \\Rightarrow y = \\frac{249.75}{135} = 1.85
$$

**2.** Substitute $y = 1.85$ into Route 1:

$$
x + 170(1.85) = 460.00 \\Rightarrow x + 314.50 = 460.00 \\Rightarrow x = 145.50
$$

**Answer.** Swift Cargo charges a \\$145.50 dispatch fee plus \\$1.85 per mile.`,
  },
  {
    id: `math-5-33`,
    case_id: `MATH 5.33`,
    title: `Café Lumière  -  Two Till Receipts`,
    context: `Café Lumière sells Specialty Drinks and Pastries at fixed prices. Two till receipts also list a total calorie count, printed for the customer's reference only. Receipt 1: 7 Specialty Drinks + 9 Pastries  -  Total: \\$78.65  -  (listed) Total Calories: 6,100 Receipt 2: 11 Specialty Drinks + 4 Pastries  -  Total: \\$85.05  -  (listed) Total Calories: 5,400`,
    statements: [
      `A Specialty Drink's price, tripled, would clear twenty dollars.`,
      `Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined  -  quite a bit more, in fact.`,
      `Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.`,
      `Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past \\$4.90.`,
      `A week of daily 2-Drink-2-Pastry orders costs enough that, left over from \\$150, you'd have less than \\$8 in change.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) A Specialty Drink's price, tripled, would clear twenty dollars.**  (false)

The statement triples a Specialty Drink's recovered price and claims the result clears twenty dollars. Café Lumière's two till receipts recover a drink at $\\$6.35$ and a pastry at $\\$3.80$. Calorie counts are printed for reference only and do not enter the prices.

The overview already recovered a drink at $\\$6.35$. The extra arithmetic is only that triple, then the cutoff.

**1.** Triple the recovered drink price:

$$3 \\times 6.35 = 19.05$$

**2.** Compare with twenty dollars:

$$19.05 > 20$$

is false. The triple sits $\\$0.95$ short of $\\$20$.

**3.** Using $6.70$ would get $20.10$ and flip the verdict. The recovered comparison therefore keeps $6.70$ and does not substitute $20.10$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Rounding $6.35$ to $7$ first would get $21$ and also flip it. Working from the isolated values, $6.35$ is the figure that is checked, not the detour that produced $21$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $\\$7$ is a convenience round. The recovered $6.35$ is what keeps the triple under $20$. Calories $6100$ and $5400$ do not price a drink.

The opposite verdict would need a drink above $20/3 \\approx 6.67$. With the two till totals $\\$78.65$ and $\\$85.05$ as printed, the drink is $6.35$.

Three drinks cost $\\$19.05$, which does not clear $\\$20$, so the statement is False.`,
      `**B) Buy four Pastries and you'll spend more than a single Specialty Drink and a single Pastry combined  -  quite a bit more, in fact.**  (true)

The statement compares four Pastries with one Specialty Drink plus one Pastry. The overview already recovered a drink at $6.35$ and a pastry at $3.80$. Calories still do not enter. The extra arithmetic is costing both baskets.

**1.** Four pastries:

$$4 \\times 3.80 = 15.20$$

**2.** One drink and one pastry:

$$6.35 + 3.80 = 10.15$$

**3.** Compare:

$$15.20 > 10.15$$

Four pastries cost $\\$5.05$ more. That is "quite a bit more" in the sense of the claim: more than a $50\\%$ premium on the smaller basket. Comparing four pastries with four drinks would be answering a different question. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Using $4 \\times 6.35=25.40$ against $10.15$ would still find four of something larger, but of the wrong item. That is the fork: $4 \\times 6.35=25.40$ belongs to the recovered isolation, $10.15$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does.

The trap is reading "quite a bit more" as a second numerical bar. The claim's inequality is four pastries versus the mixed pair, and $15.20>10.15$ is the whole comparison. The opposite verdict would need $4y \\le x+y$, so $3y \\le x$, $3(3.80)=11.40 \\le 6.35$, which fails. With $y=3.80$ and $x=6.35$, four pastries cost more.

Four pastries cost $\\$15.20$ and the mixed pair costs $\\$10.15$, so four pastries cost more, so the statement is True.`,
      `**C) Cross-reference the calorie counts against the dollar totals and you can, in principle, pin down both prices without the item quantities at all.**  (false)

The statement claims the printed calorie counts, crossed with the dollar totals, can pin down both prices without using the item quantities.

Calories are printed "for the customer's reference only." They are not a second currency. Two dollar totals with two item types already pin the prices; that is the overview's $2 \\times 2$. Calories are a distractor column, like the oven material costs that were not needed to recover counts.

**1.** Receipt 1 lists $6100$ calories and $\\$78.65$. Receipt 2 lists $5400$ calories and $\\$85.05$. Those four numbers, without quantities, are two pairs (calories, dollars). Two pairs cannot separate four unknowns (drink price, pastry price, drink calories, pastry calories).

**2.** Even as a dollars-only story, dropping the quantities $7$, $9$, $11$, and $4$ leaves two totals and two unknown prices, which is one equation short of a unique pair if the quantities are unknown too.

**3.** The overview used the quantities. Without them the calorie column does not become a substitute system. Nothing in the stem says calories are proportional to price.

Dividing $78.65$ by $6100$ and $85.05$ by $5400$ would get two dollars-per-calorie figures and still have no item prices. That is the fork: $78.65$ belongs to the recovered isolation, $5400$ belongs to the discarded mix. Treating calories as if they were item counts would be inventing a model the till receipts do not state. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

The calorie counts do not pin down the prices without the quantities, Calories are a distractor column, printed for reference only. Two dollar totals plus four item counts already pin the two prices; that is the till's $2 \\times 2$. Adding two calorie totals without four calorie-per-item unknowns does not create a second independent price system. It creates two more numbers with no coefficients that attach them to drinks versus pastries.

Dividing $78.65/6100$ and $85.05/5400$ would get two dollars-per-calorie figures, about $0.0129$ and $0.01575$, and would still have no drink price and no pastry price. After isolating the unknown, the check is against $78.65/6100$. The figure $0.01575$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $78.65/6100$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Treating $6100$ and $5400$ as if they were item counts would be inventing a model the receipts do not state. So the letter reads the claim against $6100$; $5400$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $6100$ stays in the write-up. The stem never says calories are proportional to price, and a drink at $6.35$ versus a pastry at $3.80$ already shows that dollars and calories need not move together.

Without the quantities $7$, $9$, $11$, and $4$, even the dollar totals cannot isolate two prices. The calorie counts do not replace those quantities. They sit beside the totals as unused information, the way oven material cost sat unused until a later letter asked for it. This letter never asks for calories as an output, so they stay unused.

so the statement is False.`,
      `**D) Split Receipt 1's total evenly across its 16 items and the resulting per-item figure just barely creeps past \\$4.90.**  (true)

The statement splits Receipt 1's $\\$78.65$ evenly across its $16$ items and claims the per-item figure just barely creeps past $\\$4.90$.

**1.** Items on Receipt 1:

$$7 + 9 = 16$$

**2.** Even split:

$$\\frac{78.65}{16} = 4.915625$$

**3.** Compare with $\\$4.90$:

$$4.915625 > 4.90$$

The average clears $4.90$ by about one and a half cents. It sits between the two recovered prices $6.35$ and $3.80$, as a $7$-and-$9$ mix must, and it leans toward the more numerous pastries.

Splitting Receipt 2, $85.05/15=5.67$, would overshoot $4.90$ by a lot and still "creep past," so the verdict would survive that mix-up, but the claim names Receipt 1. The stem's recovered values line up with $85.05/15=5.67$, whereas $4.90$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $85.05/15=5.67$ stays in the write-up. Rounding $4.915$ down to $4.90$ would fail "past." The recovered comparison therefore keeps $4.915$ and does not substitute $4.90$. That contrast is the reason the verdict goes the way it does.

Receipt 1's even split is about $\\$4.92$, which creeps past $\\$4.90$, so the statement is True.`,
      `**E) A week of daily 2-Drink-2-Pastry orders costs enough that, left over from \\$150, you'd have less than \\$8 in change.**  (true)

This letter is a new mix run for a week: daily $2$ drinks and $2$ pastries, compared with $\\$150$ leftover change under $\\$8$.

The overview already has drink $6.35$ and pastry $3.80$. The extra arithmetic is costing one day, then seven days, then the change from $\\$150$.

**1.** One day's $2$ drinks and $2$ pastries:

$$2(6.35) + 2(3.80) = 12.70 + 7.60 = 20.30$$

**2.** Seven such days:

$$7 \\times 20.30 = 142.10$$

**3.** Change from $\\$150$:

$$150 - 142.10 = 7.90$$

Then $7.90 < 8$. The leftover is ten cents under eight dollars.

Using six days, treating a work week as $6$, would get $121.80$ and leftover $28.20$, which is not less than $\\$8$ in the sense of a tight leftover, and would miss the claim's "less than $8$ in change" as a tight figure. The recovered comparison therefore keeps $6$ and does not substitute $8$. That contrast is the reason the verdict goes the way it does. Skipping the pastries would get $7 \\times 12.70=88.90$ and leftover $61.10$. The recovered comparison therefore keeps $7 \\times 12.70=88.90$ and does not substitute $61.10$. That contrast is the reason the verdict goes the way it does. Using $7 \\times 21=147$ as a round pair price would get leftover $3$, still less than $8$, so that rounding would not flip the inequality, but it would miss the exact $7.90$. The recovered comparison therefore keeps $7 \\times 21=147$ and does not substitute $7.90$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

What would have to change for the opposite verdict? If a day cost $20.40$, seven days would be $142.80$ and leftover $7.20$, still under $8$. To leave $8$ or more, seven days would need to cost $142$ or less, so a day $20.285$ or less. The recovered pair forces $20.30$ per day and leftover $7.90$.

Left over from $\\$150$ after a week of $2$-and-$2$ is $\\$7.90$, which is less than $\\$8$, A week of daily $2$-drink-$2$-pastry orders is seven copies of a $20.30$ day. Seven times $20.30$ is $142.10$, and the change from $150$ is $7.90$, ten cents under $8$. That ten cents is tight: a pastry at $3.82$ would have made a day $20.34$ and a week $142.38$, leftover $7.62$, still under $8$, but a drink at $6.50$ would have made a day $20.60$ and a week $144.20$, leftover $5.80$, still under $8$ as an inequality, yet the claim's exact leftover flavour is $7.90$.

Using a five-day week would get $101.50$ and leftover $48.50$, which is not less than $8$ in the tight sense the claim is pointing at. The recovered comparison therefore keeps $101.50$ and does not substitute $8$. That contrast is the reason the verdict goes the way it does. Using $7 \\times 21=147$ as a round pair of pairs would get leftover $3$, still less than $8$, so the inequality would survive rounding, but the cents would be wrong. The recovered comparison therefore keeps $7 \\times 21=147$ and does not substitute $8$.

If drinks had been $6.50$ and pastries $3.80$, leftover would be $5.80$, still under $8$. To leave $8$ or more, the week would need to cost $142$ or less. The recovered pair forces $142.10$, leftover $7.90$.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 33,
    solution_overview: `Café Lumière sells Specialty Drinks and Pastries at fixed prices. Two till receipts also list a total calorie count, printed for the customer's reference only.

**Part 1: Building the system.**

Let $x$ = price per Specialty Drink, $y$ = price per Pastry.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
7x + 9y = 78.65
$$

**2. Record this independent observation.** In symbols:

$$
11x + 4y = 85.05
$$

**Part 2: The model.**

$$
7x + 9y = 78.65 \\tag{1}
$$

$$
11x + 4y = 85.05 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Receipt 1 by 4 and Receipt 2 by 9 so the $y$ coefficients both become $36y$:

$$
4(7x + 9y) = 4(78.65) \\Rightarrow 28x + 36y = 314.60
$$

$$
9(11x + 4y) = 9(85.05) \\Rightarrow 99x + 36y = 765.45
$$

**2.** Subtract the first scaled equation from the second:

$$
(99x + 36y) - (28x + 36y) = 765.45 - 314.60
$$

$$
71x = 450.85 \\Rightarrow x = \\frac{450.85}{71} = 6.35
$$

**3.** Substitute $x = 6.35$ into Receipt 1:

$$
7(6.35) + 9y = 78.65 \\Rightarrow 44.45 + 9y = 78.65
$$

$$
9y = 34.20 \\Rightarrow y = 3.80
$$

**Answer.** A Specialty Drink costs \\$6.35 and a Pastry costs \\$3.80.`,
  },
  {
    id: `math-5-34`,
    case_id: `MATH 5.34`,
    title: `Northgate Bakery Wholesale  -  Order Confirmation Emails`,
    context: `Northgate Bakery Wholesale sells Croissants and Baguettes by the dozen at fixed wholesale prices. Email 1: "Order confirmed: 14 dozen croissants + 11 dozen baguettes. Total cost: \\$297.30." Email 2: "Order confirmed: 6 dozen croissants + 23 dozen baguettes. Total cost: \\$299.30."`,
    statements: [
      `Reading between the lines of Email 1, croissants are priced at a level where four dozen would already blow past fifty-five dollars.`,
      `The per-dozen gap between croissants and baguettes is closer to four dollars than to five.`,
      `Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.`,
      `Per dozen-item ordered, Email 1 runs pricier than Email 2  -  and the gap clears two dollars.`,
      `Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Reading between the lines of Email 1, croissants are priced at a level where four dozen would already blow past fifty-five dollars.**  (true)

The statement reads Email 1 as implying four dozen croissants already blow past fifty-five dollars. Email 1 confirmed $14$ dozen croissants and $11$ dozen baguettes for $\\$297.30$. Email 2 confirmed $6$ dozen croissants and $23$ dozen baguettes for $\\$299.30$.

The overview already recovered croissants at $\\$13.85$ per dozen. The extra arithmetic is only four dozen, then the cutoff.

**1.** Four dozen at the recovered croissant price:

$$4 \\times 13.85 = 55.40$$

**2.** Compare with fifty-five:

$$55.40 > 55$$

Four dozen croissants cost $\\$55.40$, which blows past fifty-five by forty cents.

**3.** Using baguettes $9.40$ here would get $37.60$ and miss the claim. That is the fork: $9.40$ belongs to the recovered isolation, $37.60$ belongs to the discarded mix. Rounding $13.85$ down to $13$ would get $52$ and fail the cutoff. After isolating the unknown, the check is against $13.85$. The figure $52$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $13.85$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The trap figure $\\$52$ is a rounded-down dozen times four.

The opposite verdict would need a croissant dozen at or below $55/4=13.75$. With the two emails as printed, croissants are $13.85$. Email 2's similar dollar total is a different mix and does not rewrite the croissant price.

Four dozen croissants cost $\\$55.40$, which is past $\\$55$, so the statement is True.`,
      `**B) The per-dozen gap between croissants and baguettes is closer to four dollars than to five.**  (true)

The statement places the per-dozen gap between croissants and baguettes closer to four dollars than to five. The overview already recovered $13.85$ and $9.40$. The extra arithmetic is the gap and the two distances.

**1.** Croissant dozen minus baguette dozen:

$$13.85 - 9.40 = 4.45$$

**2.** Distance to four dollars: $4.45-4=0.45$. Distance to five dollars: $5-4.45=0.55$.

**3.** Then $0.45 < 0.55$, so $4.45$ is closer to four.

Rounding $4.45$ to $4.50$ and calling that equidistant would still not prefer five. Working from the isolated values, $4.45$ is the figure that is checked, not the detour that produced $4.50$. That contrast is the reason the verdict goes the way it does. Using $14-9=5$ after rounding both prices would land on five exactly and miss "closer to four." Once $14-9=5$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.The trap figure $\\$5$ is that pair of rounded prices. Email 1's mix is croissant-heavy, so its average dozen is closer to $13.85$ than Email 2's baguette-heavy mix is; that average is not the gap.

The opposite verdict would need a gap of $4.50$ or more. With $13.85$ and $9.40$ as recovered, the gap is $4.45$, which sits nearer four.

The gap is $\\$4.45$, closer to four than to five, so the statement is True.`,
      `**C) Order ten dozen of each pastry, and croissants alone would already account for more than three-fifths of the combined bill.**  (false)

This letter is a new mix: ten dozen of each pastry. The claim says croissants alone would already account for more than three-fifths of the combined bill.

The overview already has croissants $13.85$ and baguettes $9.40$. The extra arithmetic is costing both lines and taking the croissant share.

**1.** Ten dozen croissants:

$$10 \\times 13.85 = 138.50$$

**2.** Ten dozen baguettes:

$$10 \\times 9.40 = 94.00$$

**3.** Combined bill, then the croissant share, then compare with three-fifths:

$$138.50 + 94.00 = 232.50$$

$$\\frac{138.50}{232.50} = \\frac{277}{465} \\approx 0.5957$$

Three-fifths is $0.6$. Then $0.5957 < 0.6$, so croissants do not account for more than three-fifths. They sit just under.

Using $14$ and $9$ as round prices would get $140/(140+90)=140/230 \\approx 0.609$, which *does* exceed three-fifths and would flip the verdict. The stem's recovered values line up with $14$, whereas $140/(140+90)=140/230 \\approx 0.609$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $14$ stays in the write-up. The recovered cents, $13.85$ and $9.40$, are what keep the share under $0.6$. Comparing $138.50$ with $0.6 \\times 232.50=139.50$ would see the $\\$1$ shortfall directly. The recovered comparison therefore keeps $138.50$ and does not substitute $0.6 \\times 232.50=139.50$. That contrast is the reason the verdict goes the way it does.

What would have to change for the opposite verdict? If croissants were $14.00$, ten dozen would be $140$ and the share $140/234 \\approx 0.598$ still under, wait $10 \\times 9.40=94$, $140+94=234$, $140/234 \\approx 0.598$. Still under. Croissants would need to be high enough that $10x/(10x+94)>0.6$, so $10x > 0.6(10x+94)$, so $4x > 56.4$, so $x>14.10$. The recovered $13.85$ sits below that threshold.

Croissants' share is about $59.6\\%$, which is not more than three-fifths, Ten dozen of each is a balanced wholesale ticket, unlike Email 1's croissant-heavy $14$ and $11$ or Email 2's baguette-heavy $6$ and $23$. Croissants at $138.50$ over a combined $232.50$ are $59.57\\%$ of the bill, just under three-fifths. Rounding both prices to $14$ and $9$ would have produced $140/230 \\approx 60.9\\%$, over three-fifths, and would have flipped the verdict. The recovered cents $13.85$ and $9.40$ are what keep the share under $0.6$.

Three-fifths of $232.50$ is $139.50$. Croissants at $138.50$ sit one dollar short of that bar. That dollar is $10 \\times 0.10$ relative to a $13.95$ croissant price, or a slightly cheaper baguette pulling the denominator down. With the recovered pair, the share does not clear three-fifths.

Comparing $138.50$ with $0.6 \\times 10 \\times 13.85=83.10$, mixing a share of croissants only, would be answering a different fraction. After isolating the unknown, the check is against $138.50$. The figure $0.6 \\times 10 \\times 13.85=83.10$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $138.50$ stays in the write-up. The claim is croissants' share of the *combined* bill.

so the statement is False.`,
      `**D) Per dozen-item ordered, Email 1 runs pricier than Email 2  -  and the gap clears two dollars.**  (false)

The statement compares Email 1's cost per dozen-item with Email 2's, and claims Email 1 runs pricier by a gap that clears two dollars.

Email 1 is $14+11=25$ dozen at $\\$297.30$. Email 2 is $6+23=29$ dozen at $\\$299.30$. The extra arithmetic is the two averages and their difference.

**1.** Email 1 per dozen:

$$\\frac{297.30}{25} = 11.892$$

**2.** Email 2 per dozen:

$$\\frac{299.30}{29} \\approx 10.321$$

**3.** Gap:

$$11.892 - 10.321 \\approx 1.571$$

Then $1.571 > 2$ is false. Email 1 is pricier per dozen, but the gap is about $\\$1.57$, which does not clear two dollars.

Using $297.30/14$ or $299.30/6$, ignoring baguettes, would manufacture a huge gap. So the letter reads the claim against $297.30/14$; $299.30/6$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $297.30/14$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Comparing totals $299.30-297.30=2.00$ would be comparing whole invoices, not per-dozen figures, and that $2.00$ gap on totals is a coincidence that does not transfer to the averages, because the dozen-counts differ. Working from the isolated values, $299.30-297.30=2.00$ is the figure that is checked, not the detour that produced $2.00$.

Email 1's per-dozen figure exceeds Email 2's by about $\\$1.57$, not by more than $\\$2$, so the statement is False.`,
      `**E) Tack three extra dollars onto every dozen baguettes in Email 2's order, leave the croissant price untouched, and the new invoice total lands on a figure whose cents digit is exactly thirty.**  (true)

The statement tacks three extra dollars onto every dozen baguettes in Email 2, leaves croissants untouched, and claims the new invoice total has cents digit thirty.

Email 2 has $23$ dozen baguettes at a printed total of $\\$299.30$. The extra arithmetic is $23 \\times 3$ added onto that total.

**1.** Extra dollars on baguettes:

$$23 \\times 3 = 69$$

**2.** New invoice total:

$$299.30 + 69 = 368.30$$

**3.** The cents digit of $368.30$ is $30$, matching the claim. Adding whole dollars cannot change the cents, so the cents stay $30$ from the original $\\$299.30$ whatever whole-dollar tack is used. The "exactly thirty" is then automatic. The claim is still true.

Also raising croissants would be answering a different counterfactual. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using Email 1's $11$ dozen baguettes would get $297.30+33=330.30$, still cents $30$, so that mix-up would not flip the cents claim. The recovered comparison therefore keeps $11$ and does not substitute $30$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The new Email 2 total is $\\$368.30$, whose cents digit is thirty, so the statement is True.`,
    ],
    difficulty_level: `\\frac{3}{5}`,
    sort_order: 34,
    solution_overview: `Northgate Bakery Wholesale sells Croissants and Baguettes by the dozen at fixed wholesale prices. Email 1: "Order confirmed: 14 dozen croissants + 11 dozen baguettes.

**Part 1: Building the system.**

Let $x$ = wholesale price per dozen croissants, $y$ = wholesale price per dozen baguettes.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
14x + 11y = 297.30
$$

**2. Record this independent observation.** In symbols:

$$
6x + 23y = 299.30
$$

**Part 2: The model.**

$$
14x + 11y = 297.30 \\tag{1}
$$

$$
6x + 23y = 299.30 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Email 1 by 23 and Email 2 by 11 so the $y$ terms both become $253y$:

$$
23(14x + 11y) = 23(297.30) \\Rightarrow 322x + 253y = 6837.90
$$

$$
11(6x + 23y) = 11(299.30) \\Rightarrow 66x + 253y = 3292.30
$$

**2.** Subtract:

$$
(322x + 253y) - (66x + 253y) = 6837.90 - 3292.30
$$

$$
256x = 3545.60 \\Rightarrow x = \\frac{3545.60}{256} = 13.85
$$

**3.** Substitute $x = 13.85$ into Email 1:

$$
14(13.85) + 11y = 297.30 \\Rightarrow 193.90 + 11y = 297.30
$$

$$
11y = 103.40 \\Rightarrow y = 9.40
$$

**Answer.** Croissants cost \\$13.85 per dozen and baguettes cost \\$9.40 per dozen.`,
  },
  {
    id: `math-5-35`,
    case_id: `MATH 5.35`,
    title: `Meridian Textiles  -  Quarterly Margin Verification`,
    context: `Meridian Textiles tracks a fixed profit margin per unit for Fabric Rolls and Yarn Spools.`,
    tables_markdown: `| Quarter | Fabric Rolls | Yarn Spools | Total Profit |
| --- | --- | --- | --- |
| Q1 | 240 | 175 | \\$10,029.00 |
| Q2 | 310 | 90 | \\$10,260.50 |`,
    statements: [
      `Fabric Roll margins clear the \\$27 line, though not by enough to also clear \\$27.50.`,
      `Yarn Spool's per-unit margin, doubled, would just clear forty dollars.`,
      `Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears \\$8,400  -  but only by a slender margin.`,
      `The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.`,
      `Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round \\$13,675  -  no cents required.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Fabric Roll margins clear the \\$27 line, though not by enough to also clear \\$27.50.**  (true)

The statement places Fabric Roll's recovered margin above $\\$27$ but not above $\\$27.50$. That is a two-sided cutoff on one recovered leftover, not a second solve of the Meridian invoices.

The overview recovered the Fabric margin at $x = 27.35$. Yarn Spool's $\\$19.80$ is a different product and does not enter this letter.

**1.** Compare $27.35$ with the lower line:

$$27.35 > 27$$

**2.** Compare the same leftover with the upper line:

$$27.35 < 27.50$$

So $27 < 27.35 < 27.50$. Fabric clears $\\$27$ by $35$ cents and misses $\\$27.50$ by $15$ cents. The recovered cents are what sit in the gap.

Rounding $27.35$ to $27$ would fail the first inequality. So the letter reads the claim against $27.35$; $27$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $27.35$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Rounding to $27.50$ would fail the second. Once $27.50$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using Yarn's $19.80$ here would miss both lines. Keeping $19.80$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Clearing $\\$27.50$ would have needed another $15$ cents of Fabric profit, which the two invoices do not support.

Fabric's margin is $\\$27.35$, which clears $\\$27$ but not $\\$27.50$, so the statement is True.`,
      `**B) Yarn Spool's per-unit margin, doubled, would just clear forty dollars.**  (false)

The statement doubles Yarn Spool's recovered margin and claims the double just clears forty dollars. The overview already recovered Yarn at $\\$19.80$ and Fabric at $\\$27.35$. The extra arithmetic is only the double, then the cutoff.

**1.** Double the recovered Yarn margin:

$$2 \\times 19.80 = 39.60$$

**2.** Compare with forty:

$$39.60 > 40$$

is false. The double sits forty cents short of $\\$40$.

**3.** Using $20$ would get $40$ exactly and treat "just clear" as equality. After isolating the unknown, the check is against $20$. The figure $40$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $20$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered $19.80$ is what keeps the double under forty. Doubling Fabric $27.35$ would get $54.70$ and clear forty easily, answering the wrong product. That is the fork: $27.35$ belongs to the recovered isolation, $54.70$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The trap figure $\\$40$ is a round bar that $2 \\times 20$ would kiss. "Just clear" is a strict reading of above forty, and $39.60$ is not above forty. The opposite verdict would need Yarn above $20$. With the quarterly margins as recovered, Yarn is $19.80$.

Double Yarn's margin is $\\$39.60$, which does not clear $\\$40$, so the statement is False.`,
      `**C) Shift the product mix to 200 Fabric Rolls and 150 Yarn Spools, and the resulting profit clears \\$8,400  -  but only by a slender margin.**  (true)

This letter is a new mix: $200$ Fabric Rolls and $150$ Yarn Spools, compared with an $\\$8{,}400$ profit cutoff, "only by a slender margin."

The overview already has Fabric $27.35$ and Yarn $19.80$. The extra arithmetic is costing the mix.

**1.** Two hundred Fabric Rolls:

$$200 \\times 27.35 = 5470$$

**2.** One hundred fifty Yarn Spools:

$$150 \\times 19.80 = 2970$$

**3.** Add and compare with $\\$8{,}400$:

$$5470 + 2970 = 8440$$

Then $8440 > 8400$. The mix clears the cutoff by $\\$40$, which is slender relative to an $\\$8{,}400$ bar: about half a percent.

Using Q1's mix scaled to $200$ rolls would keep Q1's yarn ratio and miss this letter's $150$ spools. That is the fork: $200$ belongs to the recovered isolation, $150$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Rounding to $27$ and $20$ would get $5400+3000=8400$ exactly, which does not "clear" a strict cutoff. So the letter reads the claim against $27$; $5400+3000=8400$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $27$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The recovered cents are what produce the slender $\\$40$ overshoot.

What would have to change for the opposite verdict? If Fabric were $27.00$, the mix would be $5400+2970=8370$, under $8400$. The two quarters force $27.35$, and $200$/$150$ is then $8440$.

The new mix profits $\\$8{,}440$, which clears $\\$8{,}400$ by $\\$40$, so the statement is True.`,
      `**D) The gap between Q2's and Q1's total profit, in dollars, would still be a three-digit number even if you dropped the smallest hundred from it.**  (true)

The statement looks at the dollar gap between Q2's and Q1's total profit, and claims that even after dropping the smallest hundred from that gap, a three-digit number remains.

**1.** Profit gap:

$$10260.50 - 10029.00 = 231.50$$

**2.** Drop the smallest hundred, meaning subtract $100$:

$$231.50 - 100 = 131.50$$

**3.** $131.50$ is still three-digit. The claim holds.

Dropping the hundreds place entirely, reporting $31.50$, would have a two-digit leftover and flip the verdict. The recovered isolation is checked against the claim using $31.50$, which is the figure the sessions actually produce. "Dropped the smallest hundred from it" is subtract $100$, not strip the hundreds digit. Using $10260.50-10029=231.50$ and calling $231$ already three-digit without dropping would be answering a weaker claim that is also true. The recovered comparison therefore keeps $10260.50-10029=231.50$ and does not substitute $231$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The reduced gap is $131.50$, still three-digit, so the statement is True.`,
      `**E) Five hundred Fabric Rolls, and not a single Yarn Spool, would land the total profit on a suspiciously round \\$13,675  -  no cents required.**  (true)

The statement costs five hundred Fabric Rolls and no Yarn Spools, and claims the profit is a round $\\$13{,}675$ with no cents. This is a new mix: Fabric only, not a quarterly mix of both products.

The overview already recovered Fabric at $27.35$. The extra arithmetic is only that product.

**1.** Five hundred Fabric Rolls at the recovered Fabric margin:

$$500 \\times 27.35 = 13675$$

**2.** Split the cents: five hundred times $27$ is $13500$, and five hundred times $0.35$ is $175$.

$$13500 + 175 = 13675$$

**3.** The product is a whole-dollar $\\$13{,}675$. Including even one Yarn Spool would add $19.80$ and destroy the round figure. Once $19.80$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $500 \\times 27=13500$ after dropping the cents would miss the claim by $175$. That is the fork: $500 \\times 27=13500$ belongs to the recovered isolation, $175$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The trap is treating "no cents required" as a rounding instruction rather than as a description of $13675$ exactly. The opposite verdict would need a Fabric margin with a leftover cent after times $500$. With $y=27.35$, five hundred Fabric Rolls profit $\\$13{,}675$ exactly.

Five hundred Fabric Rolls profit $\\$13{,}675$ exactly, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 35,
    solution_overview: `Meridian Textiles tracks a fixed profit margin per unit for Fabric Rolls and Yarn Spools.

**Part 1: Building the system.**

Let $x$ = profit per Fabric Roll, $y$ = profit per Yarn Spool.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Record this independent observation.** In symbols:

$$
240x + 175y = 10029.00
$$

**2. Record this independent observation.** In symbols:

$$
310x + 90y = 10260.50
$$

**Part 2: The model.**

$$
240x + 175y = 10029.00 \\tag{1}
$$

$$
310x + 90y = 10260.50 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Q1 by 90 and Q2 by 175 so the $y$ coefficients both become $15750y$:

$$
90(240x + 175y) = 90(10029.00) \\Rightarrow 21600x + 15750y = 902610
$$

$$
175(310x + 90y) = 175(10260.50) \\Rightarrow 54250x + 15750y = 1795587.5
$$

**2.** Subtract the scaled Q1 from the scaled Q2:

$$
(54250x + 15750y) - (21600x + 15750y) = 1795587.5 - 902610
$$

$$
32650x = 892977.5 \\Rightarrow x = \\frac{892977.5}{32650} = 27.35
$$

**3.** Substitute $x = 27.35$ into Q1:

$$
240(27.35) + 175y = 10029.00 \\Rightarrow 6564.00 + 175y = 10029.00
$$

$$
175y = 3465.00 \\Rightarrow y = 19.80
$$

**Answer.** Fabric Roll margin = \\$27.35 per unit; Yarn Spool margin = \\$19.80 per unit.`,
  },
  {
    id: `math-5-36`,
    case_id: `MATH 5.36`,
    title: `Continental Gas Supply  -  Reconstructing Cylinder Prices`,
    context: `A consultant reviewing Continental Gas Supply's cylinder pricing agreement was given three monthly supplier invoices for Nitrogen-type and Oxygen-type cylinders.`,
    tables_markdown: `| Invoice | Nitrogen Units | Oxygen Units | Total |
| --- | --- | --- | --- |
| Invoice 1 | 15 | 20 | \\$699.00 |
| Invoice 2 | 9 | 12 | \\$419.40 |
| Invoice 3 | 13 | 5 | \\$326.45 |`,
    statements: [
      `Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.`,
      `Nitrogen-type cylinders are priced closer to \\$17.00 than to \\$16.00.`,
      `Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.`,
      `Double Invoice 3's order exactly, and the resulting bill would land above \\$655.`,
      `Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the \\$20 mark.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.**  (true)

The statement claims Invoice 2 restates Invoice 1 at $60\\%$ scale, rather than giving independent evidence.

Invoice 1 is $15$ Nitrogen and $20$ Oxygen at $\\$699$. Invoice 2 is $9$ Nitrogen and $12$ Oxygen at $\\$419.40$.

**1.** Quantity scale:

$$\\frac{9}{15} = 0.60, \\qquad \\frac{12}{20} = 0.60$$

**2.** Dollar scale:

$$\\frac{419.40}{699} = 0.60$$

Every column of Invoice 2 is $0.60$ times Invoice 1. The second invoice is a scaled copy, not a second independent mix. It cannot isolate a second unknown. The overview used Invoice 1 with Invoice 3, which is a genuinely different mix ($13$ Nitrogen and $5$ Oxygen).

Treating all three rows as independent would be over-counting information. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Two of the three rows are the same line.

Invoice 2 is Invoice 1 at $60\\%$ scale, Invoice 2 is $9/15=0.60$ of Invoice 1 in Nitrogen, $12/20=0.60$ in Oxygen, and $419.40/699=0.60$ in dollars. Every column scales by the same factor, so Invoice 2 lies on the same ray as Invoice 1 through the origin in $(N,O,\\$)$ space. A second point on the same ray does not determine a unique price pair; it restates the same linear constraint. Invoice 3, with $13$ Nitrogen and $5$ Oxygen, is a genuinely different mix, and that is the second equation the overview used.

Treating all three invoices as independent would be counting Invoice 1 twice. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The consultant was given three rows, but only two of them carry information. That is a standard trap in this chapter: a scaled copy looks like corroboration and is not.

If Invoice 2 had been $9$ Nitrogen and $13$ Oxygen, it would have been independent, and a three-row check could then have caught an inconsistency. As printed, Invoice 2 cannot catch anything Invoice 1 did not already say.

so the statement is True.`,
      `**B) Nitrogen-type cylinders are priced closer to \\$17.00 than to \\$16.00.**  (false)

The statement claims Nitrogen-type cylinders are priced closer to $\\$17$ than to $\\$16$. That is a nearest-neighbour test on the recovered Nitrogen leftover, not a second walk through the three invoices.

The overview recovered Nitrogen at $x = 16.40$. Oxygen's $\\$22.65$ is the other product and does not enter this comparison.

**1.** Distance from $16.40$ to $17$:

$$17 - 16.40 = 0.60$$

**2.** Distance from $16.40$ to $16$:

$$16.40 - 16 = 0.40$$

Then $0.40 < 0.60$, so $16.40$ is closer to $16$. Midway would have been $16.50$; $16.40$ still sits on the $16$ side of that midpoint.

The claim has the nearer neighbour backwards. Rounding $16.40$ to $16.50$ and calling that equidistant would still not prefer $17$. Working from the isolated values, $16.40$ is the figure that is checked, not the detour that produced $17$. Comparing Oxygen $22.65$ to $17$ would be answering a different question. So the letter reads the claim against $22.65$; $17$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $22.65$ stays in the write-up. Nitrogen would have to sit above $16.50$ to prefer $17$, and $16.40$ does not.

Nitrogen at $\\$16.40$ sits closer to $\\$16$ than to $\\$17$, so the statement is False.`,
      `**C) Four Oxygen-type cylinders cost less than six Nitrogen-type cylinders bought in that same bulk.**  (true)

The statement compares four Oxygen-type cylinders with six Nitrogen-type cylinders. The overview already recovered Oxygen at $22.65$ and Nitrogen at $16.40$. The extra arithmetic is costing both baskets.

**1.** Four Oxygen:

$$4 \\times 22.65 = 90.60$$

**2.** Six Nitrogen:

$$6 \\times 16.40 = 98.40$$

**3.** Compare:

$$90.60 < 98.40$$

Four Oxygen cost less than six Nitrogen by $\\$7.80$. Using four and six of the same type would be answering a different question. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Swapping the prices would flip the inequality: $4(16.40)=65.60$ against $6(22.65)=135.90$ still has four cheaper, so that particular swap would not flip this verdict. That is the fork: $4(16.40)=65.60$ belongs to the recovered isolation, $6(22.65)=135.90$ belongs to the discarded mix. Using $4(22.65)$ against $4(16.40)$ would be four of each, not four versus six.

Invoice 2 restating Invoice 1 at $60\\%$ scale is a dependence warning, not a third price. The opposite verdict would need $4(22.65) \\ge 6(16.40)$, so $90.60 \\ge 98.40$, which fails.

Four Oxygen cost $\\$90.60$ and six Nitrogen cost $\\$98.40$, so four Oxygen cost less, so the statement is True.`,
      `**D) Double Invoice 3's order exactly, and the resulting bill would land above \\$655.**  (false)

The statement doubles Invoice 3's order exactly and claims the resulting bill lands above $\\$655$. Invoice 3 is $13$ Nitrogen and $5$ Oxygen at $\\$326.45$. Doubling at fixed prices doubles the dollars. This letter does not rebuild Nitrogen and Oxygen.

**1.** Double the printed Invoice 3 total:

$$2 \\times 326.45 = 652.90$$

**2.** Compare with $\\$655$:

$$652.90 > 655$$

is false. The doubled bill sits $\\$2.10$ short of $\\$655$.

**3.** Rebuild the double from recovered prices as a check: $26(16.40)+10(22.65)=426.40+226.50=652.90$, the same figure. Doubling Invoice 1 instead would get a much larger bill and flip the verdict. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Using $2 \\times 328$ as a round Invoice 3 would get $656$ and also flip it. That is the fork: $2 \\times 328$ belongs to the recovered isolation, $656$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The printed $326.45$ is what keeps the double under $655$.

The opposite verdict would need Invoice 3 above $327.50$. With Invoice 3 at $\\$326.45$, twice that order is $\\$652.90$.

Double Invoice 3 is $\\$652.90$, which is not above $\\$655$, so the statement is False.`,
      `**E) Blend Invoices 1 and 3 together, cylinders and dollars alike, and the resulting per-cylinder price fails to reach the \\$20 mark.**  (true)

The statement blends Invoices 1 and 3 together, cylinders and dollars alike, and claims the resulting per-cylinder price fails to reach $\\$20$.

**1.** Combined cylinders:

$$(15+20) + (13+5) = 35 + 18 = 53$$

**2.** Combined dollars:

$$699.00 + 326.45 = 1025.45$$

**3.** Per-cylinder blend:

$$\\frac{1025.45}{53} \\approx 19.348$$

Then $19.35 < 20$. The blend fails to reach $\\$20$. Invoice 1's own average $699/35=19.97$ already sits just under $20$, and Invoice 3 is lighter on the dearer Oxygen, which pulls the blend down further.

Using Invoice 2 as well would be triple-counting Invoice 1's information, because Invoice 2 is a scaled copy. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Dividing $1025.45$ by $35$, forgetting Invoice 3's $18$ cylinders, would get about $29$ and overshoot $20$. After isolating the unknown, the check is against $1025.45$. The figure $20$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $1025.45$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The blended per-cylinder price is about $\\$19.35$, which does not reach $\\$20$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 36,
    solution_overview: `A consultant reviewing Continental Gas Supply's cylinder pricing agreement was given three monthly supplier invoices for Nitrogen-type and Oxygen-type cylinders.

**Part 1: Building the system.**

Let $x$ = price per Nitrogen-type cylinder, $y$ = price per Oxygen-type cylinder.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Invoice 1.** That observation becomes:

$$
15x + 20y = 699.00
$$

**2. Translate: Invoice 3, independent of Invoice 1.** That observation becomes:

$$
13x + 5y = 326.45
$$

**Part 2: The model.**

$$
15x + 20y = 699.00 \\tag{1}
$$

$$
13x + 5y = 326.45 \\tag{2}
$$

**Part 3: Solve.**

**1.** Check Invoice 2 against Invoice 1 first:

$$
\\frac{9}{15} = \\frac{12}{20} = \\frac{419.40}{699.00} = 0.60
$$

Invoice 2's quantities (9, 12) are exactly 0.6 times Invoice 1's (15, 20), so Invoice 2 is redundant.

**2.** Multiply Invoice 3 by 4 so its Oxygen coefficient matches Invoice 1:

$$
4(13x + 5y) = 4(326.45) \\Rightarrow 52x + 20y = 1305.80
$$

**3.** Subtract Invoice 1:

$$
(52x + 20y) - (15x + 20y) = 1305.80 - 699.00
$$

$$
37x = 606.80 \\Rightarrow x = \\frac{606.80}{37} = 16.40
$$

**4.** Substitute $x = 16.40$ into Invoice 1:

$$
15(16.40) + 20y = 699.00 \\Rightarrow 246.00 + 20y = 699.00
$$

$$
20y = 453.00 \\Rightarrow y = 22.65
$$

**Answer.** Nitrogen-type cylinders cost \\$16.40 each and Oxygen-type cylinders cost \\$22.65 each.`,
  },
  {
    id: `math-5-37`,
    case_id: `MATH 5.37`,
    title: `Ferro Machine Shop  -  Two Technicians, Two Sessions`,
    context: `On Monday's day shift, Alvarez logged 4 hours on an overhaul while Bianchi logged 7 hours on that same job; together they left it 65.5% finished. The next day, Alvarez put in 9 hours, Bianchi just 3, and an identical type of job was left 90.0% complete.`,
    statements: [
      `Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.`,
      `Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.`,
      `Their combined hourly output, expressed as a fraction, reduces to exactly $\\frac{13}{100}$  -  no more, no less.`,
      `Bianchi's slice of Tuesday's finished work, as a fraction, is closer to $\\frac{1}{7}$ than to $\\frac{1}{8}$.`,
      `Tally every hour either technician logged across both days  -  23 in all  -  and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A) Working alone, Alvarez's solo completion time, rounded to the nearest whole hour, would round down to 11 hours rather than up to 12.**  (false)

The statement claims Alvarez's solo completion time, rounded to the nearest whole hour, would round down to $11$ rather than up to $12$.

The overview already recovered Alvarez at $0.085$ job per hour. Solo time is the reciprocal.

$$\\frac{1}{0.085} \\approx 11.765$$

Nearest-hour rounding of $11.765$ is $12$, not $11$. The fractional part $0.765$ is well above a half, so the rounding goes up.

Rounding the rate to $0.09$ first gives $1/0.09 \\approx 11.11$, and nearest-hour rounding would send $11.11$ down to $11$. That detour uses a rounded rate the two sessions never produced. The recovered rate is $0.085$, so $1/0.085 \\approx 11.765$. The fractional part $0.765$ sits well above a half, so nearest-hour rounding goes up to $12$, not down to $11$. Applying an "always round down" shop rule to $11.76$ would also land on $11$, but that is not the claim's nearest-hour instruction: ordinary nearest-hour rounding looks at the half, and $0.765$ is far past it.

Alvarez's solo time rounds to $12$ hours, not down to $11$, so the statement is False.`,
      `**B) Bianchi, working entirely alone, would take longer to finish one job than it would take Alvarez, working entirely alone, to finish two.**  (false)

The statement claims Bianchi alone would take longer to finish one job than Alvarez alone would take to finish two.

The overview already recovered Alvarez $0.085$ and Bianchi $0.045$. The extra arithmetic is those two solo times.

**1.** Bianchi, one job:

$$\\frac{1}{0.045} \\approx 22.222$$

hours.

**2.** Alvarez, two jobs:

$$\\frac{2}{0.085} \\approx 23.529$$

hours.

**3.** Compare:

$$22.222 < 23.529$$

Bianchi's one job is *shorter* than Alvarez's two jobs, not longer. The claim has the comparison backwards.

Comparing one job to one job, $22.22>11.76$, would be answering a different question that is true but is not this claim. Keeping $22.22>11.76$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Doubling Alvarez's work is the whole content of the letter.

Bianchi's solo job is about $22.2$ hours and Alvarez's two jobs are about $23.5$ hours, so Bianchi is not slower on that comparison, so the statement is False.`,
      `**C) Their combined hourly output, expressed as a fraction, reduces to exactly $\\frac{13}{100}$  -  no more, no less.**  (true)

The statement claims Alvarez and Bianchi's combined hourly output reduces to exactly $\\frac{13}{100}$. That is a sum of two recovered rates, not a second solve of Monday and Tuesday.

The overview recovered Alvarez at $0.085$ job per hour and Bianchi at $0.045$ job per hour. The extra arithmetic is only adding those two leftovers.

**1.** Add the two recovered rates:

$$0.085 + 0.045 = 0.130 = \\frac{13}{100}$$

**2.** The combined rate is exactly $13\\%$ per hour. There is no rounding. Together they finish $0.13$ of a job each hour they both work.

Adding Monday's $65.5\\%$ over $11$ hours, $0.655/11 \\approx 0.0595$, would be averaging people-hours with a different mix, not adding the two recovered rates. Working from the isolated values, $65.5\\%$ is the figure that is checked, not the detour that produced $0.655/11 \\approx 0.0595$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Adding Tuesday's $90\\%$ over $12$ hours would get $0.075$, another mixed-session average. That is the fork: $90\\%$ belongs to the recovered isolation, $0.075$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Those averages are not $x+y$.

The opposite verdict would need a different pair of rates. With $0.085$ and $0.045$ recovered from the two sessions, the combined rate is exactly $\\frac{13}{100}$.

The combined rate is exactly $\\frac{13}{100}$, so the statement is True.`,
      `**D) Bianchi's slice of Tuesday's finished work, as a fraction, is closer to $\\frac{1}{7}$ than to $\\frac{1}{8}$.**  (true)

The statement places Bianchi's slice of Tuesday's finished work closer to $\\frac{1}{7}$ than to $\\frac{1}{8}$.

Tuesday Bianchi logged $3$ hours at $0.045$ job per hour. Tuesday finished $90\\%$ of a job.

**1.** Bianchi's Tuesday output:

$$3 \\times 0.045 = 0.135$$

of a job.

**2.** Compare $0.135$ with $\\frac{1}{7} \\approx 0.1429$ and $\\frac{1}{8}=0.125$:

$$|0.135 - 0.1429| \\approx 0.0079, \\qquad |0.135 - 0.125| = 0.010$$

The distance to $\\frac{1}{7}$ is smaller. Bianchi's slice is $0.135$ of the job, which is $0.135/0.900=0.15$ of Tuesday's finished work if the claim meant a share of Tuesday rather than a share of one job. The wording is "slice of Tuesday's finished work, as a fraction." If that means $0.135/0.900=0.15$, then compare $0.15$ with $1/7$ and $1/8$: $|0.15-0.1429|=0.0071$ and $|0.15-0.125|=0.025$, still closer to $\\frac{1}{7}$. Either reading prefers $\\frac{1}{7}$.

Using Monday's $7$ hours for Bianchi here would be answering a different day. Keeping $7$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

Bianchi's Tuesday slice sits closer to $\\frac{1}{7}$ than to $\\frac{1}{8}$, so the statement is True.`,
      `**E) Tally every hour either technician logged across both days  -  23 in all  -  and divide it into the total work finished; the resulting hourly average doesn't quite clear seven percent.**  (true)

The statement tallies every hour either technician logged across both days, $4+7+9+3=23$, divides that into the total work finished, and claims the resulting hourly average does not quite clear seven percent.

**1.** Work finished: Monday $0.655$ plus Tuesday $0.900$.

$$0.655 + 0.900 = 1.555$$

jobs.

**2.** Combined hours $23$. Average:

$$\\frac{1.555}{23} \\approx 0.06761$$

**3.** Compare with $7\\% = 0.07$:

$$0.06761 < 0.07$$

The average is about $6.76\\%$, which does not quite clear seven percent. This average is a people-hour blend of the two recovered rates, weighted by hours, not the unweighted $13\\%$ from letter C. Letter C added the two rates as if both worked every hour. Here the hours are pooled.

Using $1.555/16$, counting Alvarez's $4+9=13$ hours only, would overstate the average. So the letter reads the claim against $1.555/16$; $4+9=13$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $1.555/16$ stays in the write-up. Using $0.13$ from letter C and calling that seven-plus would be answering letter C again. Once $0.13$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The pooled average is about $6.76\\%$, shy of $7\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 37,
    solution_overview: `On Monday's day shift, Alvarez logged 4 hours on an overhaul while Bianchi logged 7 hours on that same job; together they left it 65.5% finished. The next day, Alvarez put in 9 hours, Bianchi just 3, and an identical type of job was left 90.0% complete.

**Part 1: Building the system.**

Let $x$ = fraction of a job Alvarez completes per hour, $y$ = fraction of a job Bianchi completes per hour.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Monday.** That observation becomes:

$$
4x + 7y = 0.655
$$

**2. Translate: Tuesday.** That observation becomes:

$$
9x + 3y = 0.900
$$

**Part 2: The model.**

$$
4x + 7y = 0.655 \\tag{1}
$$

$$
9x + 3y = 0.900 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Monday by 9 and Tuesday by 4 so the $x$ coefficients both become $36x$:

$$
9(4x + 7y) = 9(0.655) \\Rightarrow 36x + 63y = 5.895
$$

$$
4(9x + 3y) = 4(0.900) \\Rightarrow 36x + 12y = 3.600
$$

**2.** Subtract the scaled Tuesday from the scaled Monday:

$$
(36x + 63y) - (36x + 12y) = 5.895 - 3.600
$$

$$
51y = 2.295 \\Rightarrow y = \\frac{2.295}{51} = 0.045
$$

**3.** Substitute $y = 0.045$ into Monday:

$$
4x + 7(0.045) = 0.655 \\Rightarrow 4x + 0.315 = 0.655
$$

$$
4x = 0.340 \\Rightarrow x = 0.085
$$

**Answer.** Alvarez completes 0.085 job/hour (8.5%/hour), and Bianchi completes 0.045 job/hour (4.5%/hour).`,
  },
  {
    id: `math-5-38`,
    case_id: `MATH 5.38`,
    title: `Vantage Apparel  -  A Water-Damaged Production Report`,
    context: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies, netting \\$9,793.50. Season 2: 275 T-Shirts and 410 Hoodies, netting \\$10,747.75. Season 3's paperwork survived only in part: 310 Hoodies and an overall profit of \\$8,558.25 are legible, but water damage erased the T-Shirt count entirely.`,
    statements: [
      `T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.`,
      `Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.`,
      `Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.`,
      `Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.`,
      `Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses \\$8,700  -  clearing it by less than \\$40.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) T-Shirt margins, it turns out, sit closer to eleven dollars than to twelve.**  (false)

The statement claims T-Shirt margins sit closer to eleven dollars than to twelve. Season 1 netted $\\$9{,}793.50$ on $430$ T-Shirts and $260$ Hoodies. Season 2 netted $\\$10{,}747.75$ on $275$ T-Shirts and $410$ Hoodies. Those two seasons recover the pair.

The overview already recovered T-Shirt margin at $\\$11.65$. The extra arithmetic is the two distances to eleven and to twelve.

**1.** Distance to eleven: $11.65-11=0.65$. Distance to twelve: $12-11.65=0.35$.

**2.** Then $0.35 < 0.65$, so $11.65$ is closer to twelve.

**3.** The claim has the nearer neighbour backwards. Looking at the leading $11$ and stopping would call it closer to eleven as a digit story. Once $11$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap is reading the integer part as the nearer integer. Distance, not the leading digit, decides "closer."

The opposite verdict would need a T-Shirt margin below $11.50$. With Seasons 1 and 2 as printed, the margin is $11.65$, which sits closer to twelve.

T-Shirt margin $\\$11.65$ sits closer to twelve than to eleven, so the statement is False.`,
      `**B) Hoodie margins, by contrast, sit closer to eighteen dollars than to nineteen.**  (true)

The statement claims Hoodie margins sit closer to eighteen dollars than to nineteen. That is a nearest-neighbour test on the recovered Hoodie leftover. T-Shirt's $\\$11.65$ is letter A's object, not this one.

The overview recovered Hoodie margin at $y = 18.40$. Season 3's missing T-Shirt count is a later reconstruction and does not enter this comparison.

**1.** Distance from $18.40$ to eighteen:

$$18.40 - 18 = 0.40$$

**2.** Distance from $18.40$ to nineteen:

$$19 - 18.40 = 0.60$$

Then $0.40 < 0.60$, so $18.40$ is closer to eighteen. Midway would have been $18.50$; $18.40$ still sits on the $18$ side of that midpoint.

Rounding $18.40$ to $18.50$ and calling that equidistant would still not prefer nineteen. Working from the isolated values, $18.40$ is the figure that is checked, not the detour that produced $18.50$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Comparing T-Shirt $11.65$ here would be answering letter A. The opposite verdict would need a different isolation than $11.65$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Hoodies would have to sit above $18.50$ to prefer nineteen, and $18.40$ does not.

Hoodie margin $\\$18.40$ sits closer to eighteen than to nineteen, so the statement is True.`,
      `**C) Whatever the water damage erased, the missing Season 3 T-Shirt count reconstructs to a number that's a multiple of ten.**  (false)

The statement claims the missing Season 3 T-Shirt count reconstructs to a multiple of ten.

The overview already reconstructed that count as $245$. Then $245$ is not a multiple of ten: $245/10=24.5$.

**1.** Season 3 logged $310$ Hoodies and $\\$8{,}558.25$ profit. Hoodie contribution:

$$310 \\times 18.40 = 5704$$

**2.** Remaining profit for T-Shirts:

$$8558.25 - 5704 = 2854.25$$

**3.** T-Shirt count:

$$\\frac{2854.25}{11.65} = 245$$

The reconstruction is $245$, which ends in $5$, not $0$. Rounding $245$ to $250$ would manufacture a multiple of ten. The stem's recovered values line up with $245$, whereas $250$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $245$ stays in the write-up. Using $8558.25/11.65 \\approx 734$ after ignoring Hoodies would also land off a multiple of ten, but that is the wrong reconstruction. The opposite verdict would need a different isolation than $8558.25/11.65 \\approx 734$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The missing count is $245$, not a multiple of ten, Season 3's missing T-Shirt count is a reconstruction from the recovered margins, not a third independent $2 \\times 2$. Hoodies contribute $310 \\times 18.40=5704$. Remaining profit $8558.25-5704=2854.25$. Dividing by $11.65$ gives $245$ exactly. Two hundred forty-five is not a multiple of ten; it ends in $5$.

Rounding $245$ to $250$ would manufacture a multiple of ten and accept the claim. After isolating the unknown, the check is against $245$. The figure $250$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $245$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Dividing $8558.25$ by $11.65$ without stripping Hoodies would get about $734$, also not a multiple of ten, but that is the wrong reconstruction. Working from the isolated values, $8558.25$ is the figure that is checked, not the detour that produced $734$. Using $8558.25-310 \\times 18=8558.25-5580=2978.25$, dropping the forty cents of hoodie margin, would not divide cleanly by $11.65$. That is the fork: $8558.25-310 \\times 18=8558.25-5580=2978.25$ belongs to the recovered isolation, $11.65$ belongs to the discarded mix.

The water damage erased a count that reconstructs to $245$. Multiples of ten would have been $240$ or $250$, and those would have implied hoodie margins or T-Shirt margins different from the two intact seasons. With Seasons 1 and 2 as printed, the missing count is $245$, not a multiple of ten.

so the statement is False.`,
      `**D) Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly 52 Hoodies' worth of margin.**  (true)

The statement claims Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly $52$ Hoodies' worth of margin. Season 1 netted $\\$9{,}793.50$. Season 2 netted $\\$10{,}747.75$. The overview already recovered Hoodie margin $18.40$.

**1.** Season 2 minus Season 1:

$$10747.75 - 9793.50 = 954.25$$

**2.** Fifty-two Hoodies at the recovered Hoodie margin:

$$52 \\times 18.40 = 956.80$$

**3.** Compare:

$$954.25 < 956.80$$

The earnings gap is $\\$2.55$ short of $52$ Hoodies. That is "just barely fail." using $50$ Hoodies, $920$, would find the gap covers $50$ easily and miss the $52$. After isolating the unknown, the check is against $50$. The figure $52$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $50$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using T-Shirt margin $11.65 \\times 52 \\approx 605.80$ would be covering the wrong garment. Once $11.65 \\times 52 \\approx 605.80$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Season 3's reconstructed T-Shirt count does not enter this comparison.

The opposite verdict would need the earnings gap to reach $956.80$. With the two printed season totals, the gap is $954.25$.

Season 2's extra $\\$954.25$ fails to cover $52$ Hoodies at $\\$956.80$, so the statement is True.`,
      `**E) Rewrite Season 3's history so that it produced 260 T-Shirts instead of the reconstructed count (Hoodies held at 310), and the profit crosses \\$8,700  -  clearing it by less than \\$40.**  (true)

The statement rewrites Season 3 as $260$ T-Shirts instead of the reconstructed $245$, Hoodies held at $310$, and claims profit crosses $\\$8{,}700$ by less than $\\$40$.

The overview already has T-Shirt $11.65$ and Hoodie $18.40$. The extra arithmetic is costing that counterfactual mix.

**1.** Two hundred sixty T-Shirts:

$$260 \\times 11.65 = 3029$$

**2.** Three hundred ten Hoodies:

$$310 \\times 18.40 = 5704$$

**3.** Add, then compare with $\\$8{,}700$:

$$3029 + 5704 = 8733$$

Then $8733 > 8700$, and the overshoot is $33$, which is less than $40$.

Compared with the reconstructed Season 3 at $245$ T-Shirts, this rewrite adds $15$ T-Shirts times $11.65$, which is $174.75$, and $8558.25+174.75=8733$, the same figure.

Using $250$ T-Shirts as a round stand-in would get $2912.50+5704=8616.50$, which does not cross $8700$ and would flip the verdict. That is the fork: $250$ belongs to the recovered isolation, $8700$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. The claim's $260$ is what pushes the profit over.

The rewritten Season 3 profits $\\$8{,}733$, which crosses $\\$8{,}700$ by $\\$33$, Rewriting Season 3 as $260$ T-Shirts, Hoodies held at $310$, adds $15$ T-Shirts to the reconstructed $245$. Fifteen T-Shirts at $11.65$ add $174.75$, and $8558.25+174.75=8733$. That $8733$ crosses $8700$ by $33$, less than $40$, matching the claim.

Using $250$ T-Shirts as a round stand-in would get $2912.50+5704=8616.50$, which does not cross $8700$ and would flip the verdict. That is the fork: $250$ belongs to the recovered isolation, $8700$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. The claim's $260$ is $15$ above the reconstruction, not $5$ above a round $250$. Also changing Hoodies would be answering a different rewrite. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

If T-Shirt margin had been $11.00$, fifteen extra shirts would add $165$ and the rewritten profit would be $8723.25$, still over $8700$ by less than $40$, so that particular error would not flip this inequality. The honest figure uses $11.65$ and lands on $8733$.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 38,
    solution_overview: `Vantage Apparel earns a fixed profit per unit on T-Shirts and Hoodies. Season 1: 430 T-Shirts and 260 Hoodies, netting \\$9,793.50.

**Part 1: Building the system.**

Let $x$ = profit per T-Shirt, $y$ = profit per Hoodie.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Season 1.** That observation becomes:

$$
430x + 260y = 9793.50
$$

**2. Translate: Season 2.** That observation becomes:

$$
275x + 410y = 10747.75
$$

**Part 2: The model.**

$$
430x + 260y = 9793.50 \\tag{1}
$$

$$
275x + 410y = 10747.75 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Season 1 by 410 and Season 2 by 260 so the $y$ coefficients both become $106600y$:

$$
410(430x + 260y) = 410(9793.50) \\Rightarrow 176300x + 106600y = 4015335
$$

$$
260(275x + 410y) = 260(10747.75) \\Rightarrow 71500x + 106600y = 2794415
$$

**2.** Subtract:

$$
(176300x + 106600y) - (71500x + 106600y) = 4015335 - 2794415
$$

$$
104800x = 1220920 \\Rightarrow x = \\frac{1220920}{104800} = 11.65
$$

**3.** Substitute $x = 11.65$ into Season 1:

$$
430(11.65) + 260y = 9793.50 \\Rightarrow 5009.50 + 260y = 9793.50
$$

$$
260y = 4784.00 \\Rightarrow y = 18.40
$$

**4.** Reconstruct Season 3's T-Shirt count $T$:

$$
11.65T + 18.40(310) = 8558.25 \\Rightarrow 11.65T + 5704.00 = 8558.25
$$

$$
11.65T = 2854.25 \\Rightarrow T = 245
$$

**Answer.** T-Shirts earn \\$11.65 each, Hoodies earn \\$18.40 each, and Season 3 made 245 T-Shirts.`,
  },
  {
    id: `math-5-39`,
    case_id: `MATH 5.39`,
    title: `Continental Freight Co.  -  Cross-Unit Billing Audit`,
    context: `Continental Freight Co. bills a flat handling fee plus a constant rate per kilogram shipped. One branch records weights in pounds (1 kg ≈ 2.2 lb). A third shipment is under audit.`,
    tables_markdown: `| Shipment | Weight | Total Charged |
| --- | --- | --- |
| Shipment 1 (Metric) | 185 kg | \\$677.35 |
| Shipment 2 (Imperial) | 572 lb | \\$913.60 |
| Shipment 3 (Imperial, audit) | 99 lb | \\$239.80 |`,
    statements: [
      `Knock five dollars and forty cents off the flat handling fee and you'd land on an even \\$89.20  -  implying the real fee currently overshoots \\$89 by roughly six percent.`,
      `The per-kilogram rate, tripled, would land just shy of \\$9.50.`,
      `Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed  -  but doesn't match it exactly.`,
      `Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.`,
      `Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Knock five dollars and forty cents off the flat handling fee and you'd land on an even \\$89.20  -  implying the real fee currently overshoots \\$89 by roughly six percent.**  (true)

The statement knocks $\\$5.40$ off Continental Freight's recovered handling fee and claims the result is an even $\\$89.20$, implying the real fee overshoots $\\$89$ by roughly six percent. The overview already recovered the fee $f=94.60$ and the rate $3.15$ per kg. The extra arithmetic is only that subtraction and the percent check.

**1.** Knock $\\$5.40$ off the recovered fee:

$$94.60 - 5.40 = 89.20$$

**2.** The leftover $\\$89.20$ is even in the cents the claim named.

**3.** Overshoot of $\\$89$: $94.60-89=5.60$, and $5.60/89 \\approx 0.0629$, about $6.3\\%$, which is roughly six percent.

Knocking $\\$5.40$ off $89$ would get $83.60$ and miss the claim. The stem's recovered values line up with $89$, whereas $83.60$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $89$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using the rate $3.15$ here would be subtracting a per-kg figure from a fee. Keeping $3.15$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Shipment 3's audit discrepancy does not rewrite the fee. The opposite verdict would need a different recovered fee. With $f=94.60$, knocking off $5.40$ lands on $89.20$.

Knocking $\\$5.40$ off the fee lands on $\\$89.20$, so the statement is True.`,
      `**B) The per-kilogram rate, tripled, would land just shy of \\$9.50.**  (true)

The statement triples Continental Freight's per-kilogram rate and claims the triple lands just shy of $\\$9.50$. The handling fee $\\$94.60$ does not enter. Shipment 3's pound-to-kilogram conversion is a different letter.

The overview recovered $r = 3.15$. The extra arithmetic is only the triple. This letter does not rebuild the fee.

**1.** Triple the recovered rate:

$$3 \\times 3.15 = 9.45$$

**2.** Compare with $\\$9.50$:

$$9.45 < 9.50$$

The triple is shy by five cents. Using $3.20$ would get $9.60$ and overshoot $9.50$. So the letter reads the claim against $3.20$; $9.50$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $3.20$ stays in the write-up. Tripling the fee instead of the rate would report something near $\\$284$ and miss the claim entirely. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.

Converting $3.15$ per kg into a per-pound rate, $3.15/2.2 \\approx 1.43$, then tripled that, would land near $4.29$ and fail the cutoff in the other direction. That is the fork: $3.15$ belongs to the recovered isolation, $4.29$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. The claim triples the per-kilogram rate, not a per-pound rewrite.

The opposite verdict would need a recovered rate of $3.17$ or more. With $r=3.15$, triple the rate is $\\$9.45$, just shy of $\\$9.50$, so the statement is True.`,
      `**C) Convert Shipment 3's weight properly, apply the derived model, and the predicted charge comes within four dollars of what was actually billed  -  but doesn't match it exactly.**  (true)

The statement converts Shipment 3's $99$ lb properly, applies the derived model, and claims the predicted charge comes within four dollars of the billed $\\$239.80$ but does not match it exactly.

The overview already recovered $f=94.60$ and $r=3.15$, and already converted Shipment 2's pounds to kilograms with $2.2$. The extra arithmetic is converting Shipment 3 and evaluating the model.

**1.** Convert $99$ lb:

$$\\frac{99}{2.2} = 45$$

kilograms.

**2.** Predicted charge:

$$94.60 + 45 \\times 3.15 = 94.60 + 141.75 = 236.35$$

**3.** Compare with the billed $\\$239.80$:

$$239.80 - 236.35 = 3.45$$

The gap is $\\$3.45$, which is within four dollars, and $236.35 \\neq 239.80$, so the figures do not match exactly. Shipment 3 is the audit row: the model from Shipments 1 and 2 does not rebuild it.

Treating $99$ lb as $99$ kg would get $94.60+311.85=406.45$, wildly above the bill. After isolating the unknown, the check is against $99$. The figure $94.60+311.85=406.45$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $99$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The $2.2$ conversion is the whole content of this letter's extra step. Using $1$ kg $= 2.2$ lb in the wrong direction, $99 \\times 2.2$, would be worse. That is the fork: $1$ belongs to the recovered isolation, $99 \\times 2.2$ belongs to the discarded mix.

The predicted $\\$236.35$ sits $\\$3.45$ below the billed $\\$239.80$, within four dollars but not exact, Shipment 3 is the audit row. Shipments 1 and 2, after converting $572$ lb to $260$ kg, recovered $f=94.60$ and $r=3.15$. Those two rows rebuild: $94.60+185 \\times 3.15=677.35$ and $94.60+260 \\times 3.15=913.60$. Shipment 3 at $99/2.2=45$ kg predicts $236.35$, but the branch billed $239.80$. The $3.45$ gap is within four dollars and is not zero.

Treating $99$ lb as $99$ kg would predict $94.60+311.85=406.45$, which is not within four dollars of $239.80$. The conversion is the extra arithmetic that makes the predicted charge sit close to the billed one. Close is not equal: this is the inconsistent third row, the way East's revenue was inconsistent in an earlier task.

If the billed amount had been $236.35$, the audit would have cleared. The printed $239.80$ is what keeps the row from matching. Four dollars of tolerance is the claim's window, and $3.45$ sits inside it.

so the statement is True.`,
      `**D) Ninety-nine pounds, run through the standard 2.2-per-kilogram conversion, comes out to a number divisible by seven.**  (false)

The statement converts ninety-nine pounds at $2.2$ pounds per kilogram and claims the result is divisible by seven. This letter does not need the recovered fee or rate. The extra arithmetic is only the conversion, then the divisibility check.

**1.** Convert $99$ lb to kilograms:

$$\\frac{99}{2.2} = 45$$

**2.** Test divisibility by seven:

$$\\frac{45}{7} \\approx 6.429$$

which is not an integer. Then $45$ is not divisible by seven.

**3.** Using $99/2=49.5$, dropping the $0.2$, would still not get a multiple of seven. That is the fork: $99/2=49.5$ belongs to the recovered isolation, $0.2$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $99 \\times 2.2=217.8$ would have multiplied instead of divided and would then notice $217.8/7$ is also not an integer. Working from the isolated values, $99 \\times 2.2=217.8$ is the figure that is checked, not the detour that produced $217.8/7$. That contrast is the reason the verdict goes the way it does. The trap figure $49$ is $7 \\times 7$, nearby if someone converted $98$ lb instead of $99$.

The opposite verdict would need a pound count whose kilogram conversion is a multiple of seven, for instance $154$ lb giving $70$ kg. With $99$ lb at $2.2$ lb/kg, the kilogram figure is $45$.

Ninety-nine pounds convert to $45$ kg, which is not divisible by seven, so the statement is False.`,
      `**E) Push the shipment weight up to 400 kilograms and the resulting charge just barely creeps past thirteen hundred fifty dollars.**  (true)

The statement pushes a shipment to $400$ kilograms and claims the resulting charge just barely creeps past thirteen hundred fifty dollars. The overview already recovered $f=94.60$ and $r=3.15$ per kg. The extra arithmetic is only evaluating that line at $400$ kg.

**1.** Mileage-style weight charges at $400$ kg:

$$400 \\times 3.15 = 1260$$

**2.** Add the handling fee:

$$94.60 + 1260 = 1354.60$$

**3.** Compare with $1350$:

$$1354.60 > 1350$$

The charge creeps past $1350$ by $\\$4.60$. Forgetting the fee would report $\\$1{,}260$ and fail the cutoff. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Using $400 \\times 3=1200$ plus $94.60=1294.60$ would also fail it. The stem's recovered values line up with $400 \\times 3=1200$, whereas $94.60=1294.60$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $400 \\times 3=1200$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $1260$ is the weight layer alone.

Shipment 3's audit discrepancy does not move this $400$ kg counterfactual. The opposite verdict would need $400r+f \\le 1350$, so $r \\le 3.1385$ at $f=94.60$. The recovered $r=3.15$ is just above that. A pound-recorded branch converting $400$ kg as $880$ lb and then treating pounds as kilograms would wreck the rate layer; this letter stays in kilograms.

A $400$ kg shipment charges $\\$1{,}354.60$, which creeps past $\\$1{,}350$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 39,
    solution_overview: `Continental Freight Co. bills a flat handling fee plus a constant rate per kilogram shipped.

**Part 1: Building the system.**

Let $x$ = flat handling fee, $y$ = rate per kilogram. Weights must be converted to kilograms before the model is built.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Shipment 1, already in kg.** That observation becomes:

$$
x + 185y = 677.35
$$

**2. Translate: Shipment 2: 572 lb / 2.2 = 260 kg.** That observation becomes:

$$
x + 260y = 913.60
$$

**Part 2: The model.**

$$
x + 185y = 677.35 \\tag{1}
$$

$$
x + 260y = 913.60 \\tag{2}
$$

**Part 3: Solve.**

**1.** Convert Shipment 2's weight to kilograms:

$$
\\frac{572}{2.2} = 260 \\text{ kg}
$$

**2.** Subtract Shipment 1 from the converted Shipment 2:

$$
(x + 260y) - (x + 185y) = 913.60 - 677.35
$$

$$
75y = 236.25 \\Rightarrow y = \\frac{236.25}{75} = 3.15
$$

**3.** Substitute $y = 3.15$ into Shipment 1:

$$
x + 185(3.15) = 677.35 \\Rightarrow x + 582.75 = 677.35 \\Rightarrow x = 94.60
$$

**4.** Audit Shipment 3:

$$
\\frac{99}{2.2} = 45 \\text{ kg}
$$

**5.** The model predicts

$$
94.60 + 45(3.15) = 94.60 + 141.75 = 236.35
$$

but Shipment 3 was charged \\$239.80, a \\$3.45 discrepancy.

**Answer.** The handling fee is \\$94.60 and the rate is \\$3.15/kg; Shipment 3 should cost \\$236.35 rather than \\$239.80.`,
  },
  {
    id: `math-5-40`,
    case_id: `MATH 5.40`,
    title: `Vantage Cloud Services  -  A Doubled Invoice That Doesn't Double`,
    context: `Vantage Cloud Services bills every client under one fixed-rate structure: a per-compute-unit charge plus a per-storage-unit charge. Client B's usage is exactly double Client A's in both categories.`,
    tables_markdown: `| Client | Compute Units | Storage Units | Reported Total |
| --- | --- | --- | --- |
| Client A | 11 | 7 | \\$483.70 |
| Client B | 22 | 14 | \\$952.10 |`,
    statements: [
      `Doubling every line of Client A's invoice implies Client B should owe \\$967.40  -  a figure that overshoots what was actually billed by a hair over 1.6% of the real total.`,
      `For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's \\$952.10 billed amount.`,
      `The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.`,
      `Plugging in a purely hypothetical \\$14.20 per compute-unit and \\$31.75 per storage-unit  -  numbers with no basis in the real contract  -  Client A's invoice would compute to a figure just shy of \\$375.`,
      `Compare Client B's actual bill to two rival hypotheses  -  one assuming a clean doubling of Client A (\\$967.40), the other assuming a 50%-heavier surcharge instead of a full double (\\$725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Doubling every line of Client A's invoice implies Client B should owe \\$967.40  -  a figure that overshoots what was actually billed by a hair over 1.6% of the real total.**  (true)

The statement doubles every line of Client A's invoice and claims Client B should owe $\\$967.40$, a figure that overshoots the billed $\\$952.10$ by a hair over $1.6\\%$ of the real total.

Client B's usage is exactly double Client A's in both categories. At consistent prices, Client B's bill would be double Client A's $\\$483.70$.

**1.** Doubled Client A:

$$2 \\times 483.70 = 967.40$$

**2.** Overage against the billed $\\$952.10$:

$$967.40 - 952.10 = 15.30$$

**3.** As a share of the real total:

$$\\frac{15.30}{952.10} \\approx 0.01607$$

about $1.607\\%$, a hair over $1.6\\%$. The two invoices disagree by $\\$15.30$. That is the overview's inconsistency: no single pair of compute and storage prices can fit both rows.

Doubling $\\$952.10$ instead would be doubling the wrong client. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reporting $1.6\\%$ exactly would be rounding the $0.007$ away; the claim says "a hair over." So the letter reads the claim against $1.6\\%$; $0.007$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $1.6\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

Doubling Client A predicts $\\$967.40$, which overshoots $\\$952.10$ by about $1.61\\%$, Client B's usage is exactly double Client A's in both categories, so at constant prices Client B's bill must be exactly double Client A's $483.70$, which is $967.40$. The billed $952.10$ is $15.30$ light, about $1.61\\%$ of $952.10$. That is the whole inconsistency: one pricing scheme cannot produce both invoices when the quantities already sit in a $1:2$ ratio.

Doubling $952.10$ to $1904.20$ would be doubling the wrong client. The stem's recovered values line up with $952.10$, whereas $1904.20$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $952.10$ stays in the write-up. Reporting $15.30/483.70 \\approx 3.16\\%$ would be measuring the gap against Client A, doubling the relative error, because the $15.30$ lives on the doubled invoice. So the letter reads the claim against $15.30/483.70 \\approx 3.16\\%$; $15.30$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $15.30/483.70 \\approx 3.16\\%$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim measures against Client B's real total.

No pair $(c,s)$ satisfies both $11c+7s=483.70$ and $22c+14s=952.10$, because the second left-hand side is exactly double the first while the second right-hand side is not. That is a one-line inconsistency test, and $967.40$ versus $952.10$ is that test in dollars.

so the statement is True.`,
      `**B) For the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's \\$952.10 billed amount.**  (true)

The statement says that for the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's $\\$952.10$.

If prices are constant and Client B's usage is exactly double Client A's, Client B's bill must be exactly double Client A's bill. Equivalently, Client A must be exactly half of Client B.

**1.** Half of Client B:

$$\\frac{952.10}{2} = 476.05$$

**2.** Client A printed $\\$483.70$. Then $483.70 \\neq 476.05$. The gap is $7.65$, which is half of the $\\$15.30$ discrepancy in letter A, as it must be.

The statement is a *condition* for consistency, not a claim that Client A actually was $476.05$. The condition is correct: consistency would have required Client A to be half of $952.10$. That is why the scheme is inconsistent.

Treating the statement as "Client A *did* account for half" would mark it false. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The wording is "would have needed to." That counterfactual condition is true.

Consistency would have required Client A to be $\\$476.05$, half of Client B, so the statement is True.`,
      `**C) The discrepancy uncovered here sits nearer to a 1-in-60 error rate than to a 1-in-50 one.**  (true)

The statement places the discrepancy nearer to a $1$-in-$60$ error rate than to a $1$-in-$50$ one. Client B's usage is exactly double Client A's, but Client B was billed $\\$952.10$ rather than double Client A's $\\$483.70$. Letter A already has a $\\$15.30$ gap on that $\\$952.10$ bill. The extra arithmetic is the error rate and the two distances.

**1.** Error rate against Client B's billed total:

$$\\frac{952.10}{15.30} \\approx 62.23$$

so the error is about $1$ in $62$.

**2.** Distance from $62.23$ to $60$ is $2.23$. Distance to $50$ is $12.23$.

**3.** Then $2.23 < 12.23$, so the figure is nearer to $1$-in-$60$.

Using $15.30/483.70 \\approx 1/31.6$ would be measuring against Client A and would sit nearer $1$-in-$30$ than either named rate. The stem's recovered values line up with $15.30/483.70 \\approx 1/31.6$, whereas $30$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $15.30/483.70 \\approx 1/31.6$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The trap figure $1/31.6$ is the gap measured on the wrong invoice. The claim is about "the discrepancy uncovered here," which letter A attached to Client B's billed total.

The opposite verdict would need the rate to sit closer to $50$ than to $60$, for instance a $\\$19$ gap on $\\$952$. With a $\\$15.30$ gap, the rate is about $1$ in $62$.

The error rate is about $1$ in $62$, nearer $1$-in-$60$ than $1$-in-$50$, so the statement is True.`,
      `**D) Plugging in a purely hypothetical \\$14.20 per compute-unit and \\$31.75 per storage-unit  -  numbers with no basis in the real contract  -  Client A's invoice would compute to a figure just shy of \\$375.**  (false)

The statement plugs in a hypothetical $\\$14.20$ per compute-unit and $\\$31.75$ per storage-unit, with no basis in the contract, and claims Client A's invoice would compute to a figure just shy of $\\$375$.

Client A used $11$ compute and $7$ storage. The extra arithmetic is only that hypothetical product.

**1.** Compute line:

$$11 \\times 14.20 = 156.20$$

**2.** Storage line:

$$7 \\times 31.75 = 222.25$$

**3.** Add and compare with $\\$375$:

$$156.20 + 222.25 = 378.45$$

Then $378.45$ is not shy of $375$. It sits $\\$3.45$ *above* $375$. The claim has the comparison backwards.

These unit prices are invented; they are not the recovered pair, because no recovered pair exists. The letter is testing a hypothetical, and that hypothetical overshoots $375$, it does not undershoot it.

Using $10 \\times 14.20 + 7 \\times 31.75=142+222.25=364.25$ after dropping one compute unit would land shy of $375$ and flip the verdict. After isolating the unknown, the check is against $10 \\times 14.20 + 7 \\times 31.75=142+222.25=364.25$. The figure $375$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $10 \\times 14.20 + 7 \\times 31.75=142+222.25=364.25$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Client A has $11$ compute units, not $10$.

The hypothetical rebuild of Client A is $\\$378.45$, which is not shy of $\\$375$, so the statement is False.`,
      `**E) Compare Client B's actual bill to two rival hypotheses  -  one assuming a clean doubling of Client A (\\$967.40), the other assuming a 50%-heavier surcharge instead of a full double (\\$725.55). The doubling hypothesis, despite being wrong, still lands closer to the real figure than the other one does.**  (true)

The statement compares Client B's actual $\\$952.10$ with two rival hypotheses: a clean doubling of Client A at $\\$967.40$, and a $50\\%$-heavier surcharge instead of a full double at $\\$725.55$. It claims the doubling hypothesis, despite being wrong, still lands closer to the real figure.

**1.** Doubling error:

$$|967.40 - 952.10| = 15.30$$

**2.** Fifty-percent-heavier hypothesis: $1.5 \\times 483.70 = 725.55$, error:

$$|725.55 - 952.10| = 226.55$$

**3.** Compare errors:

$$15.30 < 226.55$$

Doubling is much closer, even though it is still wrong by $\\$15.30$. A $50\\%$ surcharge on Client A would describe a client whose usage was $1.5$ times A's, not double. Client B's counts are exactly double, so the doubling hypothesis is the one the counts themselves suggest. The billed dollars just fail to keep up by $\\$15.30$.

Comparing $967.40$ with $725.55$ without measuring against $952.10$ would be ranking the hypotheses against each other, not against the real bill. Working from the isolated values, $967.40$ is the figure that is checked, not the detour that produced $952.10$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim is about closeness to the real figure.

The doubling hypothesis is $\\$15.30$ off; the $50\\%$ hypothesis is $\\$226.55$ off; doubling is closer, The doubling hypothesis is the one the quantity columns themselves suggest: B is $2$ times A in both usage columns, so B's dollars should be $2$ times A's dollars. It is wrong by $15.30$. The $50\\%$-heavier hypothesis $1.5 \\times 483.70=725.55$ would describe a client whose usage was $1.5$ times A's, which Client B's counts are not, and it is wrong by $226.55$. Closer-to-the-real-figure is then immediate: $15.30<226.55$.

Comparing $967.40$ with $725.55$ without measuring against $952.10$ would be ranking the hypotheses against each other, not against the billed amount. That is the fork: $967.40$ belongs to the recovered isolation, $952.10$ belongs to the discarded mix. The claim is closeness to the real figure. Using a $10\\%$ surcharge, $1.1 \\times 483.70=532.07$, would be even farther from $952.10$. So the letter reads the claim against $10\\%$; $952.10$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $10\\%$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The doubling hypothesis remains the least-bad of the two named rivals even though it is still false. That is a comparison of errors, not a claim that $967.40$ is correct.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 40,
    solution_overview: `Vantage Cloud Services bills every client under one fixed-rate structure: a per-compute-unit charge plus a per-storage-unit charge. Client B's usage is exactly double Client A's in both categories.

**Part 1: Building the system.**

Let $x$ = price per compute-unit, $y$ = price per storage-unit.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Client A.** That observation becomes:

$$
11x + 7y = 483.70
$$

**2. Translate: Client B, as reported.** That observation becomes:

$$
22x + 14y = 952.10
$$

**Part 2: The model.**

$$
11x + 7y = 483.70 \\tag{1}
$$

$$
22x + 14y = 952.10 \\tag{2}
$$

**Part 3: Solve.**

**1.** Client B's coefficients $(22, 14)$ are exactly double Client A's $(11, 7)$. Scaling Client A's equation by 2:

$$
2(11x + 7y) = 2(483.70) \\Rightarrow 22x + 14y = 967.40
$$

**2.** Client B's reported total is $952.10$, not $967.40$:

$$
967.40 - 952.10 = 15.30
$$

The two equations are inconsistent by $15.30$.

**3.** The coefficient pairs are proportional ($22:14 = 11:7$) while the constants are not ($967.40 \\ne 952.10$), which is the parallel-lines case. No pair $(x, y)$ satisfies both invoices at once.

**Answer.** No consistent compute and storage prices exist for both invoices; they disagree by \\$15.30.`,
  },
  {
    id: `math-5-41`,
    case_id: `MATH 5.41`,
    title: `Sterling Family Trust  -  Two-Fund Return Reconstruction`,
    context: `The Sterling Family Trust is split between two funds. Fund A pays a fixed 5.25% simple annual return; Fund B pays 3.75%. The officer's notes state Fund B's balance is \\$4,000 more than twice Fund A's balance, and the combined annual return from both funds is \\$762.00.`,
    statements: [
      `The dollar interest earned by Fund B is more than triple the dollar interest earned by Fund A.`,
      `If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above \\$800.00.`,
      `The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).`,
      `Had the trust instead been split evenly (\\$9,200.00 in each fund) at the original rates, the total return would have come within \\$5.00 of the actual \\$762.00.`,
      `The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.`,
    ],
    answer_key: [false, true, true, false, true],
    tactical_explanations: [
      `**A) The dollar interest earned by Fund B is more than triple the dollar interest earned by Fund A.**  (false)

The statement claims Fund B's dollar interest is more than triple Fund A's dollar interest.

The overview already recovered Fund A at $\\$4{,}800$ and Fund B at $\\$13{,}600$. The extra arithmetic is applying the two stated rates.

**1.** Fund A's interest at $5.25\\%$:

$$4800 \\times 0.0525 = 252$$

**2.** Fund B's interest at $3.75\\%$:

$$13600 \\times 0.0375 = 510$$

**3.** Compare with triple A's interest:

$$3 \\times 252 = 756, \\qquad 510 < 756$$

Fund B earns about $2.02$ times Fund A's dollars, not more than three times. B's balance is larger, but B's rate is lower, so the dollar interest does not scale with the balance.

Tripling the balances instead, $3 \\times 4800=14400$ versus $13600$, would still find B short of triple, and would be answering a principal question. That is the fork: $3 \\times 4800=14400$ belongs to the recovered isolation, $13600$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. The claim is about dollar interest.

Fund B's $\\$510$ is not more than triple A's $\\$252$, so the statement is False.`,
      `**B) If Fund A's rate were raised by 1.5 percentage points (to 6.75%) while Fund B's rate stayed the same, the combined annual return would rise above \\$800.00.**  (true)

The statement raises Fund A's rate by $1.5$ percentage points to $6.75\\%$, holds Fund B's rate, and claims combined return would rise above $\\$800$.

The overview already has $A=4800$ and $B=13600$. Fund B's interest stays $510$. The extra arithmetic is the new A interest plus that $510$.

**1.** New A interest:

$$4800 \\times 0.0675 = 324$$

**2.** Combined:

$$324 + 510 = 834$$

**3.** Compare with $\\$800$:

$$834 > 800$$

The combined return would be $\\$834$, which clears $\\$800$ by $\\$34$. The increment from the original $\\$762$ is $4800 \\times 0.015=72$, and $762+72=834$.

Raising both rates by $1.5$ points would overshoot further. The path that matches the stem therefore holds $1.5$ fixed and only then reads the claim. Applying $6.75\\%$ to the whole trust would get $18400 \\times 0.0675=1242$ and miss the claim's "Fund B's rate stayed the same." Working from the isolated values, $6.75\\%$ is the figure that is checked, not the detour that produced $18400 \\times 0.0675=1242$.

The new combined return is $\\$834$, which is above $\\$800$, so the statement is True.`,
      `**C) The combined annual return represents more than 4% of the total trust value (Fund A + Fund B combined).**  (true)

The statement claims the combined annual return $\\$762$ is more than $4\\%$ of the total trust. The overview already recovered Fund A at $\\$4{,}800$ and Fund B at $\\$13{,}600$. The extra arithmetic is the combined principal, then the ratio.

**1.** Combined trust:

$$4800 + 13600 = 18400$$

**2.** Combined return over combined principal:

$$\\frac{762}{18400} = 0.041413\\ldots$$

**3.** About $4.14\\%$, which is more than $4\\%$. This blended rate sits between A's $5.25\\%$ and B's $3.75\\%$, weighted toward B's larger balance, so it lands nearer $4\\%$ than $5\\%$, but still above $4\\%$.

Using $762/13600 \\approx 5.6\\%$ against B only, or $762/4800=15.9\\%$ against A only, would be using the wrong denominator. So the letter reads the claim against $762/13600 \\approx 5.6\\%$; $762/4800=15.9\\%$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $762/13600 \\approx 5.6\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The trap figure $15.9\\%$ is A-only. The claim names Fund A plus Fund B combined.

The opposite verdict would need a combined return of $736$ or less on $18400$. With $\\$762$ as the year's combined return, the blended rate exceeds $4\\%$.

The blended return is about $4.14\\%$ of the trust, which exceeds $4\\%$, so the statement is True.`,
      `**D) Had the trust instead been split evenly (\\$9,200.00 in each fund) at the original rates, the total return would have come within \\$5.00 of the actual \\$762.00.**  (false)

The statement splits the trust evenly at $\\$9{,}200$ in each fund, original rates, and claims the total return would come within $\\$5$ of the actual $\\$762$.

The extra arithmetic is costing that even split.

**1.** Even-split A interest:

$$9200 \\times 0.0525 = 483$$

**2.** Even-split B interest:

$$9200 \\times 0.0375 = 345$$

**3.** Combined, then gap to $762$:

$$483 + 345 = 828$$

$$|828 - 762| = 66$$

The even split earns $\\$66$ more, not within $\\$5$. Moving money from the lower-rate B into the higher-rate A raises the blend. The actual mix is B-heavy ($13600$ versus $4800$), which is why the actual $762$ sits below the even-split $828$.

Averaging the two rates, $4.5\\%$ of $18400=828$, would get the same $828$ and then still have to compare with $762$. After isolating the unknown, the check is against $4.5\\%$. The figure $762$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $4.5\\%$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The $\\$5$ window is far too tight for a $\\$66$ gap.

The even split earns $\\$828$, which is $\\$66$ from $\\$762$, not within $\\$5$, so the statement is False.`,
      `**E) The percentage difference between the two fund balances, taken relative to the smaller balance, exceeds 180%.**  (true)

The statement takes the percentage difference between the two fund balances relative to the smaller balance, and claims it exceeds $180\\%$.

The smaller balance is A's $\\$4{,}800$. The extra arithmetic is the relative gap.

$$\\frac{13600 - 4800}{4800} = \\frac{8800}{4800} = 1.8\\overline{3}$$

about $183.3\\%$, which exceeds $180\\%$. Relative to B, the same dollar gap is $8800/13600 \\approx 64.7\\%$, a different figure. The claim names the smaller balance as the base.

Using $13600/4800-1=1.833$ is the same arithmetic. The path that matches the stem therefore holds $13600/4800-1=1.833$ fixed and only then reads the claim. Reporting $180\\%$ after rounding $1.833$ down would still exceed $180$ if they kept the extra $3.3$ points, but rounding to $180$ exactly would fail a strict "exceeds." Working from the isolated values, $180\\%$ is the figure that is checked, not the detour that produced $3.3$. That contrast is the reason the verdict goes the way it does.The honest figure is $183.3\\%$.

The relative gap versus A is about $183\\%$, which exceeds $180\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 41,
    solution_overview: `The Sterling Family Trust is split between two funds. Fund A pays a fixed 5.25% simple annual return; Fund B pays 3.75%.

**Part 1: Building the system.**

Let $x$ = balance in Fund A, $y$ = balance in Fund B.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Fund B's balance, from the stated relationship.** That observation becomes:

$$
y = 2x + 4000
$$

**2. Translate: combined annual return.** That observation becomes:

$$
0.0525x + 0.0375y = 762
$$

**Part 2: The model.**

$$
y = 2x + 4000 \\tag{1}
$$

$$
0.0525x + 0.0375y = 762 \\tag{2}
$$

**Part 3: Solve.**

**1.** Substitute $y = 2x + 4000$ into the return equation:

$$
0.0525x + 0.0375(2x + 4000) = 762
$$

$$
0.0525x + 0.075x + 150 = 762 \\Rightarrow 0.1275x + 150 = 762
$$

$$
0.1275x = 612 \\Rightarrow x = \\frac{612}{0.1275} = 4800
$$

**2.** Substitute back:

$$
y = 2(4800) + 4000 = 9600 + 4000 = 13600
$$

**Answer.** Fund A holds \\$4,800 and Fund B holds \\$13,600.`,
  },
  {
    id: `math-5-42`,
    case_id: `MATH 5.42`,
    title: `Solventis Labs  -  Ratio-Blended Batch Reconstruction`,
    context: `Solventis Labs combines Stock Solution A and Stock Solution B in a stated volume ratio. The log records total volume and mixing ratio (A:B) rather than individual volumes.`,
    tables_markdown: `| Batch | Total Volume | Mixing Ratio (A:B) | Total Salt Content |
| --- | --- | --- | --- |
| Batch 1 | 10 L | 3 : 2 | 144 g |
| Batch 2 | 12 L | 5 : 1 | 184 g |
| Batch 3 (QC review) | 8 L | 1 : 3 | 109 g (recorded) |`,
    statements: [
      `The combined salt content of Batch 1 and Batch 2, if poured together into one container, would exceed 300 g.`,
      `Solution B's concentration is more than 70% of Solution A's concentration.`,
      `If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.`,
      `Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.`,
      `Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) The combined salt content of Batch 1 and Batch 2, if poured together into one container, would exceed 300 g.**  (true)

The statement claims Batch 1 and Batch 2 together contain more than $300$ g of salt. Batch 1 printed $144$ g. Batch 2 printed $184$ g. Pouring the two batches into one container does not create or destroy salt. The extra arithmetic is only the sum. Recovered concentrations are not needed.

**1.** Add the two printed salt contents:

$$144 + 184 = 328$$

**2.** Compare with $300$ g:

$$328 > 300$$

**3.** The combined salt exceeds $300$ g by $28$ g. Using Batch 3's recorded $109$ as well would get $437$, still above $300$, so that extra would not flip the verdict. Working from the isolated values, $109$ is the figure that is checked, not the detour that produced $300$. That contrast is the reason the verdict goes the way it does. Using Batch 3's predicted $104$ would get $432$, still above. The stem's recovered values line up with $104$, whereas $432$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $104$ stays in the write-up. The claim names Batch 1 and Batch 2.

The opposite verdict would need those two batches to total $300$ g or less. With $144$ and $184$ as printed, the combined salt is $328$ g.

The combined salt is $328$ g, which exceeds $300$ g, so the statement is True.`,
      `**B) Solution B's concentration is more than 70% of Solution A's concentration.**  (true)

The statement claims Solution B's concentration is more than $70\\%$ of Solution A's. The overview already recovered $A=16$ g/L and $B=12$ g/L. The extra arithmetic is the ratio.

**1.** B as a fraction of A:

$$\\frac{12}{16} = 0.75$$

**2.** Compare with $70\\%$:

$$0.75 > 0.70$$

**3.** B is $75\\%$ of A, five points above the cutoff. Using $12/16=0.75$ but compared with $75\\%$ as if the claim said $75$ would still pass. The stem's recovered values line up with $12/16=0.75$, whereas $75$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $12/16=0.75$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Using Batch 3's inconsistent $109$ g to back out a different B would be mixing the audit row into the recovered pair. Keeping $109$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap figure $109$ is the recorded Batch 3 total, not a concentration.

The opposite verdict would need $B \\le 0.70A$, so $B \\le 11.2$ at $A=16$. The recovered $B=12$ sits above that. Batch 1's $3:2$ mix at $16$ and $12$ rebuilds $6(16)+4(12)=96+48=144$, a check that those concentrations still sit on the printed salt, not a second solve.

B is $75\\%$ of A, which is more than $70\\%$, so the statement is True.`,
      `**C) If Batch 3's entire 5 g discrepancy were attributed only to an error in the recorded volume of Solution B (with Solution A's 2 L taken as correct), the true volume of Solution B used would be closer to 6.4 L than to 6.0 L.**  (true)

The statement attributes Batch 3's entire $5$ g discrepancy to an error in Solution B's recorded volume, with A's $2$ L taken as correct, and claims the true B volume is closer to $6.4$ L than to $6.0$ L.

Batch 3 is $8$ L at $1:3$, so the log's split is $2$ L of A and $6$ L of B. Predicted salt at recovered concentrations is $2(16)+6(12)=32+72=104$ g. Recorded is $109$ g. The extra $5$ g, if it all sits in B at $12$ g/L, is extra B volume.

**1.** Extra B volume for $5$ g at $12$ g/L:

$$\\frac{5}{12} \\approx 0.4167$$

litres.

**2.** True B volume:

$$6 + 0.4167 \\approx 6.417$$

**3.** Distance to $6.4$ is $0.017$. Distance to $6.0$ is $0.417$. The figure is much closer to $6.4$ L.

Putting the $5$ g onto A at $16$ g/L would get extra A of $5/16=0.3125$ L and would be answering a different attribution. The stem's recovered values line up with $5$, whereas $5/16=0.3125$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The claim holds A's $2$ L fixed. Using $109/12 \\approx 9.08$ L of B, ignoring A entirely, would overshoot both $6.4$ and $6.0$. So the letter reads the claim against $109/12 \\approx 9.08$; $6.0$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $109/12 \\approx 9.08$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

The B-volume that absorbs the $5$ g is about $6.42$ L, closer to $6.4$ than to $6.0$, Batch 3 is the QC row. Batches 1 and 2 recovered $16$ g/L and $12$ g/L. At $8$ L mixed $1:3$, A is $2$ L and B is $6$ L, predicted salt $2(16)+6(12)=104$ g. Recorded is $109$ g. The $5$ g extra, attributed only to B at $12$ g/L, is $5/12 \\approx 0.417$ L of extra B, so true B volume $6.417$ L, closer to $6.4$ than to $6.0$.

Putting the $5$ g onto A at $16$ g/L would get extra A of $0.3125$ L and a true A volume $2.3125$, which is not this letter. So the letter reads the claim against $5$; $2.3125$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim holds A's $2$ L fixed. Spreading the $5$ g across both solutions would be answering a different attribution. The opposite verdict would need a different isolation than $5$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim.

This is the inconsistent third row with a named culprit: B's volume. The $6.4$ versus $6.0$ comparison is a closeness check on that culprit, not a second concentration solve. Distances $0.017$ versus $0.417$ make the closeness obvious once $6.417$ is in hand.

so the statement is True.`,
      `**D) Using the reconstructed concentrations, a batch mixed in a 3:1 ratio of A:B that must contain exactly 130 g of salt would need a total volume of 7.5 L.**  (false)

The statement claims a $3:1$ mix of A:B containing exactly $130$ g of salt would need a total volume of $7.5$ L.

The overview already has $A=16$ g/L and $B=12$ g/L. A $3:1$ mix is $75\\%$ A and $25\\%$ B. The extra arithmetic is the blend concentration, then $130$ divided by that blend.

**1.** Blend concentration:

$$0.75 \\times 16 + 0.25 \\times 12 = 12 + 3 = 15$$

g/L.

**2.** Volume for $130$ g:

$$\\frac{130}{15} \\approx 8.667$$

L.

**3.** Compare with $7.5$ L:

$$8.667 \\neq 7.5$$

At $7.5$ L the mix would hold $7.5 \\times 15=112.5$ g, which is $17.5$ g short of $130$. Using $130/16=8.125$, treating the batch as pure A, or $130/12 \\approx 10.83$ as pure B, would miss $7.5$ as well. Working from the isolated values, $130/16=8.125$ is the figure that is checked, not the detour that produced $7.5$. Using $3:2$ from Batch 1, blend $0.6 \\times 16+0.4 \\times 12=14.4$, then $130/14.4 \\approx 9.03$, is a different ratio. The recovered comparison therefore keeps $3:2$ and does not substitute $130/14.4 \\approx 9.03$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

What would have to change for the opposite verdict? $7.5 \\times 15=112.5$, not $130$. To hit $130$ g at $7.5$ L the blend would need $130/7.5 \\approx 17.33$ g/L, above even pure A. The recovered pair cannot produce that.

The $3:1$ batch that holds $130$ g needs about $8.67$ L, not $7.5$ L, A $3:1$ mix is $75\\%$ A, blend concentration $15$ g/L, so $130$ g needs $130/15 \\approx 8.667$ L, not $7.5$ L. At $7.5$ L that mix holds $112.5$ g, $17.5$ g short. To hit $130$ g in $7.5$ L the blend would need $17.33$ g/L, above even pure A at $16$. The recovered pair cannot produce that.

Using Batch 1's $3:2$ blend $14.4$ g/L would get $130/14.4 \\approx 9.03$ L, still not $7.5$. That is the fork: $3:2$ belongs to the recovered isolation, $7.5$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Using $130/(16+12)=130/28 \\approx 4.64$ L would have added concentrations as if both solutions occupied the whole volume. That is why $130/(16+12)=130/28 \\approx 4.64$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The $3:1$ split is a partition of the total volume, not two full tanks.

This letter is a new mix at a salt target, the way a new invoice mix is a dollar target. The overview never costed $3:1$ at $130$ g. Once $A$ and $B$ are known, the costing is blend then divide, and the divide is $8.667$, not $7.5$.

so the statement is False.`,
      `**E) Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.**  (true)

The statement claims Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did. Batch 1 is mixed $3:2$, so A's share is $3/5=0.60$. Batch 2 is mixed $5:1$, so A's share is $5/6 \\approx 0.833$. This letter does not need the recovered concentrations. It is a ratio comparison from the mixing column.

**1.** Batch 1's A-share:

$$\\frac{3}{5} = 0.60$$

**2.** Batch 2's A-share:

$$\\frac{5}{6} \\approx 0.833$$

**3.** Compare:

$$0.833 > 0.60$$

Batch 3's $1:3$ is even lighter on A, but the claim names Batch 2 versus Batch 1. Comparing total volumes instead of proportions would be answering a different question. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Using salt grams $184$ versus $144$ would be ranking content, not A's volume share. The recovered comparison therefore keeps $184$ and does not substitute $144$.

The opposite verdict would need Batch 2's A:B ratio to be leaner on A than $3:2$. The log's $5:1$ is richer on A.

Batch 2's A-share $5/6$ exceeds Batch 1's $3/5$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 42,
    solution_overview: `Solventis Labs combines Stock Solution A and Stock Solution B in a stated volume ratio. The log records total volume and mixing ratio (A:B) rather than individual volumes.

**Part 1: Building the system.**

Let $x$ = grams of salt per liter in Solution A, $y$ = grams of salt per liter in Solution B.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Batch 1: 10 L split 3:2 → 6 L of A, 4 L of B.** That observation becomes:

$$
6x + 4y = 144
$$

**2. Translate: Batch 2: 12 L split 5:1 → 10 L of A, 2 L of B.** That observation becomes:

$$
10x + 2y = 184
$$

**Part 2: The model.**

$$
6x + 4y = 144 \\tag{1}
$$

$$
10x + 2y = 184 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide both equations by 2:

$$
3x + 2y = 72, \\qquad 5x + y = 92 \\Rightarrow y = 92 - 5x
$$

**2.** Substitute into the first simplified equation:

$$
3x + 2(92 - 5x) = 72 \\Rightarrow 3x + 184 - 10x = 72
$$

$$
-7x = -112 \\Rightarrow x = 16
$$

**3.** Then

$$
y = 92 - 5(16) = 92 - 80 = 12
$$

**4.** Audit Batch 3 (8 L at 1:3 is $2$ L of A and $6$ L of B):

$$
2(16) + 6(12) = 32 + 72 = 104
$$

versus 109 g recorded, a 5 g discrepancy.

**Answer.** Solution A has 16 g/L and Solution B has 12 g/L; Batch 3 is predicted to contain 104 g, versus 109 g recorded.`,
  },
  {
    id: `math-5-43`,
    case_id: `MATH 5.43`,
    title: `Union Mills Manufacturing  -  Fractional-Hour Overtime Reconstruction`,
    context: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, \\$765.00 gross. Employee B: 40 regular + 7 OT hours, \\$882.00 gross.`,
    statements: [
      `If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed \\$6.00.`,
      `Employee B's overtime pay is more than 40% of his total gross pay.`,
      `The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.`,
      `If the overtime premium were eliminated but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.`,
      `The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) If Employee A had instead worked 40 regular hours with no overtime, and then received a one-time bonus equal to 10% of what her actual 2.5 hours of overtime pay was, the bonus would exceed \\$6.00.**  (true)

The statement gives Employee A a one-time bonus equal to $10\\%$ of her actual $2.5$ hours of overtime pay, after a $40$-hour regular week with no overtime, and claims that bonus exceeds $\\$6$.

The overview already recovered overtime at $\\$26$ per hour ($17.50$ base plus $8.50$ premium). A's actual overtime pay is $2.5 \\times 26$. The extra arithmetic is $10\\%$ of that.

**1.** A's overtime pay:

$$2.5 \\times 26 = 65$$

**2.** Ten percent bonus:

$$0.10 \\times 65 = 6.50$$

**3.** Compare with $\\$6$:

$$6.50 > 6$$

The bonus is $\\$6.50$. Using only the $\\$8.50$ premium, $2.5 \\times 8.50=21.25$, then $10\\%$ of that, would get $2.125$ and fail the cutoff. After isolating the unknown, the check is against $2.5 \\times 8.50=21.25$. The figure $2.125$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $2.5 \\times 8.50=21.25$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Overtime *pay* is the full $\\$26$ rate, not the premium alone.

The bonus is $\\$6.50$, which exceeds $\\$6$, so the statement is True.`,
      `**B) Employee B's overtime pay is more than 40% of his total gross pay.**  (false)

The statement claims Employee B's overtime pay is more than $40\\%$ of his total gross. Employee B worked $40$ regular hours plus $7$ overtime hours for $\\$882$ gross. The overview already recovered base $17.50$ and overtime $26$ (base plus $\\$8.50$ premium). The extra arithmetic is B's overtime dollars over B's gross.

**1.** Overtime dollars:

$$7 \\times 26 = 182$$

**2.** Share of gross:

$$\\frac{182}{882} \\approx 0.2063$$

**3.** About $20.6\\%$, which is not more than $40\\%$. Regular pay $40 \\times 17.50=700$ is the bulk of $882$. Using $7/47 \\approx 15\\%$ of hours, or $182/700$ against regular only, would still miss $40\\%$. After isolating the unknown, the check is against $7/47 \\approx 15\\%$. The figure $40\\%$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $7/47 \\approx 15\\%$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $26/17.50 \\approx 1.49$ as if a rate ratio were a dollar share would overshoot. That is why $26/17.50 \\approx 1.49$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap figure $40\\%$ is a round bar far above $20.6\\%$.

The opposite verdict would need overtime dollars above $0.40 \\times 882=352.80$, which would take more than $13.5$ overtime hours at $26$. B worked $7$.

B's overtime is about $21\\%$ of gross, not more than $40\\%$, so the statement is False.`,
      `**C) The combined gross pay of both employees exceeds what they would have earned had both worked exactly 45 hours at the base rate with no overtime premium at all.**  (true)

The statement compares both employees' combined actual gross with what they would have earned had both worked exactly $45$ hours at the base rate with no overtime premium.

**1.** Combined actual:

$$765 + 882 = 1647$$

**2.** Both at $45$ hours of base only:

$$2 \\times 45 \\times 17.50 = 1575$$

**3.** Compare:

$$1647 > 1575$$

Actual combined exceeds the no-premium $45$-hour story by $\\$72$. That extra is the overtime premium $8.50$ running on A's $2.5$ plus B's $7$ hours, $9.5 \\times 8.50=80.75$, minus the fact that actual hours are $42.5$ and $47$, not both $45$. The inequality direction is what the claim needs, and it holds.

Using $45$ hours at the overtime rate $\\$26$ would overshoot wildly. The opposite verdict would need a different isolation than $45$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The claim is base rate with no premium.

Combined actual $\\$1{,}647$ exceeds $\\$1{,}575$, so the statement is True.`,
      `**D) If the overtime premium were eliminated but the base wage simultaneously rose by 15%, Employee A's gross pay for the same 42.5 hours would decrease compared to her actual earnings.**  (false)

The statement eliminates the overtime premium but raises the base wage $15\\%$, and claims Employee A's gross for the same $42.5$ hours would decrease.

New base: $17.50 \\times 1.15 = 20.125$. All $42.5$ hours pay that rate, no premium.

**1.** New gross:

$$42.5 \\times 20.125 = 855.3125$$

**2.** Compare with actual $\\$765$:

$$855.31 > 765$$

The new gross *increases* by about $\\$90$, it does not decrease. The $15\\%$ base raise on every hour more than replaces the lost premium on $2.5$ hours.

Applying $15\\%$ only to the $40$ regular hours and dropping overtime entirely would get $40 \\times 20.125=805$, still above $765$. Working from the isolated values, $15\\%$ is the figure that is checked, not the detour that produced $765$. Comparing $20.125$ with $26$ and concluding "lower overtime rate means lower pay" would miss that the raise applies to all $42.5$ hours. That is the fork: $20.125$ belongs to the recovered isolation, $42.5$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

A's gross would rise to about $\\$855$, not fall, so the statement is False.`,
      `**E) The ratio of Employee B's overtime hours to Employee A's (7 : 2.5) is greater than the ratio of their gross pay amounts (882 : 765).**  (true)

The statement compares the ratio of overtime hours $7:2.5$ with the ratio of gross pay $882:765$, and claims the hours ratio is greater. Employee A had $2.5$ overtime hours and $\\$765$ gross. Employee B had $7$ overtime hours and $\\$882$ gross. Regular pay is $40 \\times 17.50=700$ for both.

**1.** Overtime-hours ratio:

$$\\frac{7}{2.5} = 2.8$$

**2.** Gross-pay ratio:

$$\\frac{882}{765} \\approx 1.153$$

**3.** Compare:

$$2.8 > 1.153$$

B worked $2.8$ times A's overtime hours, but earned only about $15\\%$ more gross, because regular pay is the same $700$ for both. Comparing $182:65$ overtime dollars, $2.8$, with $2.8$ hours would find them equal and miss that the claim uses *gross* pay in the second ratio. So the letter reads the claim against $182:65$; $2.8$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $182:65$ stays in the write-up. The trap is swapping gross for overtime dollars.

The opposite verdict would need the gross ratio to reach $2.8$, which would require B to earn $2.8 \\times 765=2142$. B earned $882$.

The hours ratio $2.8$ exceeds the gross ratio $1.15$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 43,
    solution_overview: `Union Mills pays a fixed base hourly wage plus a fixed overtime premium on top of the base wage for hours beyond 40/week. Employee A: 40 regular + 2.5 OT hours, \\$765.00 gross.

**Part 1: Building the system.**

Let $x$ = base hourly wage, $y$ = overtime premium per hour (on top of the base wage, per OT hour).

Time coefficients come from the story's clocks - head-starts, overtime hours, or duration multipliers - not from the headline total alone.

**1. Translate: Employee A: 40 regular + 2.5 OT hours, each OT hour paid at x+y.** That observation becomes:

$$
42.5x + 2.5y = 765
$$

**2. Translate: Employee B: 40 regular + 7 OT hours.** That observation becomes:

$$
47x + 7y = 882
$$

**Part 2: The model.**

$$
42.5x + 2.5y = 765 \\tag{1}
$$

$$
47x + 7y = 882 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Employee A's equation by $2.8$ so its $y$ coefficient matches B's $7y$:

$$
2.8(42.5x + 2.5y) = 2.8(765) \\Rightarrow 119x + 7y = 2142
$$

**2.** Subtract Employee B:

$$
(119x + 7y) - (47x + 7y) = 2142 - 882
$$

$$
72x = 1260 \\Rightarrow x = \\frac{1260}{72} = 17.50
$$

**3.** Substitute $x = 17.50$ into A's equation:

$$
42.5(17.50) + 2.5y = 765 \\Rightarrow 743.75 + 2.5y = 765
$$

$$
2.5y = 21.25 \\Rightarrow y = 8.50
$$

**Answer.** The base wage is \\$17.50/hour and the overtime premium is \\$8.50/hour, so overtime pays \\$26.00/hour.`,
  },
  {
    id: `math-5-44`,
    case_id: `MATH 5.44`,
    title: `Greenfield Landscaping  -  Redundant Project Reconciliation`,
    context: `Greenfield installs cedar wood fencing and galvanized wire fencing at fixed prices per meter. One of three projects turns out to be a scaled repeat of another and adds nothing new.`,
    tables_markdown: `| Project | Wood Fencing | Wire Fencing | Total Cost |
| --- | --- | --- | --- |
| Project 1 | 18 m | 24 m | \\$750.00 |
| Project 2 | 27 m | 36 m | \\$1,125.00 |
| Project 3 | 10 m | 40 m | \\$710.00 |`,
    statements: [
      `If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded \\$950.00.`,
      `The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.`,
      `Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs (\\$750.00 + \\$710.00).`,
      `If wire fencing rose by \\$2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.`,
      `Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A) If Project 3 had instead used 20 m of wood (wire unchanged at 40 m), its total cost would have exceeded \\$950.00.**  (true)

The statement gives Project 3 $20$ m of wood instead of $10$ m, wire unchanged at $40$ m, and claims the total would exceed $\\$950$.

The overview already recovered wood at $\\$27$ per m and wire at $\\$11$ per m. The extra arithmetic is costing that counterfactual mix.

**1.** Twenty metres of wood:

$$20 \\times 27 = 540$$

**2.** Forty metres of wire:

$$40 \\times 11 = 440$$

**3.** Add and compare with $\\$950$:

$$540 + 440 = 980$$

Then $980 > 950$. Compared with actual Project 3 at $\\$710$, the extra $10$ m of wood add $270$, and $710+270=980$.

Using $20$ m of *wire* would add $110$ and get $820$, which does not exceed $950$ and would flip the verdict. Working from the isolated values, $20$ is the figure that is checked, not the detour that produced $950$. That contrast is the reason the verdict goes the way it does. The claim changes wood.

The counterfactual Project 3 costs $\\$980$, which exceeds $\\$950$, so the statement is True.`,
      `**B) The per-meter price gap between wood and wire (x - y) is more than 145% of the wire price per meter.**  (true)

The statement claims the per-metre gap $x-y$ is more than $145\\%$ of the wire price. The overview already recovered cedar wood $x=27$ and galvanized wire $y=11$. The extra arithmetic is the gap and the ratio.

**1.** Wood minus wire:

$$27 - 11 = 16$$

**2.** Gap as a share of wire:

$$\\frac{16}{11} \\approx 1.4545$$

**3.** Then $1.4545 > 1.45$. The gap is just over $145\\%$ of wire's price. Using $16/27 \\approx 59\\%$ against wood would be using the wrong base. The opposite verdict would need a different isolation than $16/27 \\approx 59\\%$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Rounding $1.4545$ down to $1.45$ would fail a strict "more than." The stem's recovered values line up with $1.4545$, whereas $1.45$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $1.4545$ stays in the write-up.The trap figure $59\\%$ is the gap over wood.

Project 3 being a scaled repeat of another project does not rewrite $27$ and $11$. The opposite verdict would need $16/11 \\le 1.45$, so a gap of $15.95$ or less. With $x=27$ and $y=11$, the gap is $16$.

The gap is about $145.45\\%$ of the wire price, which exceeds $145\\%$, so the statement is True.`,
      `**C) Combining Project 1 and Project 3's materials into one hypothetical project (28 m wood + 64 m wire) would cost less than the sum of their individual costs (\\$750.00 + \\$710.00).**  (false)

The statement claims combining Project 1 and Project 3 into one hypothetical project would cost less than the sum of their individual costs $\\$750+\\$710$.

At fixed per-metre prices, combining is linear. The extra arithmetic is adding the metres and costing, then comparing with the sum of printed totals.

**1.** Combined metres: $18+10=28$ m wood, $24+40=64$ m wire.

**2.** Combined cost:

$$28(27) + 64(11) = 756 + 704 = 1460$$

**3.** Sum of individuals:

$$750 + 710 = 1460$$

The figures match. There is no bulk discount in the stem. Project 2 is a scaled copy of Project 1 and is not used here.

Inventing a $10\\%$ combined-project discount would get $1314$ and accept the claim. The recovered comparison therefore keeps $10\\%$ and does not substitute $1314$. That discount is not in the model.

The combined project costs $\\$1{,}460$, the same as the two projects separately, so it does not cost less, so the statement is False.`,
      `**D) If wire fencing rose by \\$2.00 per meter (wood unchanged), Project 1's total cost would increase by more than 15%.**  (false)

The statement raises wire by $\\$2$ per metre, wood unchanged, and claims Project 1's total would increase by more than $15\\%$.

Project 1 has $24$ m of wire. The extra arithmetic is the dollar increase and the percentage of $\\$750$.

**1.** Dollar increase:

$$24 \\times 2 = 48$$

**2.** Percentage of Project 1:

$$\\frac{48}{750} = 0.064$$

$6.4\\%$, which is not more than $15\\%$. Wire is the cheaper line, so a $\\$2$ rise on $24$ m cannot move a $\\$750$ invoice by $15\\%$. Fifteen percent of $750$ is $112.50$, which would need a $4.69$ per-metre wire rise.

Applying $15\\%$ to the wire line only, or using $24/42 \\approx 57\\%$ of metres as if metres were dollars, would miss the $6.4\\%$ figure. The recovered comparison therefore keeps $15\\%$ and does not substitute $6.4\\%$.

Project 1 would rise by $6.4\\%$, not by more than $15\\%$, so the statement is False.`,
      `**E) Project 3's cost per total meter installed is higher than Project 1's cost per total meter installed.**  (false)

The statement claims Project 3's cost per total metre installed is higher than Project 1's. Project 3 used $10$ m wood and $40$ m wire for $\\$710$. Project 1 used $18$ m wood and $24$ m wire for $\\$750$. The extra arithmetic is the two averages.

**1.** Project 3: $10+40=50$ m at $\\$710$, so $710/50=14.20$ per metre.

**2.** Project 1: $18+24=42$ m at $\\$750$, so $750/42 \\approx 17.86$ per metre.

**3.** Compare: $14.20 < 17.86$. Project 3 is *lower* per metre, not higher. Project 3 is wire-heavy, and wire is cheaper per metre at $11$ versus wood at $27$, so the average falls.

Comparing totals $710$ and $750$ without dividing by metres would still find Project 3 smaller, but that is not a per-metre comparison. Working from the isolated values, $710$ is the figure that is checked, not the detour that produced $750$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $710$ versus $750$ is the un-normalized totals. The claim is per total metre installed.

The opposite verdict would need Project 3's mix to be wood-heavier than Project 1's. With $40$ of $50$ metres as wire, Project 3's average is $14.20$.

Project 3's $\\$14.20$ per metre is less than Project 1's $\\$17.86$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 44,
    solution_overview: `Greenfield installs cedar wood fencing and galvanized wire fencing at fixed prices per meter. One of three projects turns out to be a scaled repeat of another and adds nothing new.

**Part 1: Building the system.**

Let $x$ = price per meter of cedar wood fencing, $y$ = price per meter of galvanized wire fencing.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Project 1.** That observation becomes:

$$
18x + 24y = 750
$$

**2. Translate: Project 3, independent of Project 1.** That observation becomes:

$$
10x + 40y = 710
$$

**Part 2: The model.**

$$
18x + 24y = 750 \\tag{1}
$$

$$
10x + 40y = 710 \\tag{2}
$$

**Part 3: Solve.**

**1.** Check Project 2 against Project 1:

$$
(27, 36) = 1.5(18, 24), \\qquad 1.5(750) = 1125
$$

That matches Project 2 exactly, so Project 2 is redundant.

**2.** Divide Project 1 by 6 and Project 3 by 10:

$$
3x + 4y = 125, \\qquad x + 4y = 71
$$

**3.** Subtract:

$$
(3x + 4y) - (x + 4y) = 125 - 71 \\Rightarrow 2x = 54 \\Rightarrow x = 27
$$

**4.** Substitute $x = 27$ into $x + 4y = 71$:

$$
27 + 4y = 71 \\Rightarrow 4y = 44 \\Rightarrow y = 11
$$

**Answer.** Cedar wood costs \\$27/m and galvanized wire costs \\$11/m.`,
  },
  {
    id: `math-5-45`,
    case_id: `MATH 5.45`,
    title: `Meridian Rail  -  Two-Route Speed Reconstruction`,
    context: `Two Meridian Rail boats travel at fixed constant speeds. On one 250 km stretch, they start from opposite docks and meet after 2 hours. On a separate 356 km stretch, Boat B gets a 3-hour head start before Boat A departs; they meet exactly 1 hour after Boat A's departure.`,
    statements: [
      `The time it would take Boat A alone to travel the full 356 km stretch is more than 7 hours.`,
      `In the 250 km scenario, the difference in distance covered by the two boats when they meet is less than half of the total 250 km gap.`,
      `If both boats' speeds were each increased by 20%, the time to close the original 250 km gap would fall below 1.5 hours.`,
      `The combined distance both boats would cover in 3 hours at their actual speeds exceeds the 356 km stretch length.`,
      `Boat B's speed is more than 60% higher than Boat A's speed.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The time it would take Boat A alone to travel the full 356 km stretch is more than 7 hours.**  (true)

The statement is a solo-time claim for Boat A on the $356$ km stretch, not a meeting-time claim on the $250$ km stretch. The overview already recovered Boat A's speed $48$ km/h and Boat B's speed $77$ km/h. Those two speeds are not re-solved here. The extra arithmetic is only the quotient $356/48$, then a comparison with the $7$-hour cutoff.

**1.** Solo hours for A on $356$ km:

$$\\frac{356}{48} \\approx 7.4167$$

**2.** Hours and minutes:

$$0.4167 \\times 60 \\approx 25$$

so about $7$ hours $25$ minutes, which is more than $7$ hours.

**3.** The cutoff speed that would make the time exactly $7$ hours:

$$\\frac{356}{7} \\approx 50.857$$

Recovered A is $48$, which sits about $2.86$ km/h below that cutoff, so the solo time must overshoot $7$ hours.

Using Boat B's $77$ km/h would get $356/77 \\approx 4.62$ hours and fail the cutoff. So the letter reads the claim against $77$; $356/77 \\approx 4.62$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $77$ stays in the write-up. Using the meeting stretch $250/48 \\approx 5.21$ would also fail. The opposite verdict would need a different isolation than $250/48 \\approx 5.21$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $5.21$ hours is A's time on the $250$ km meeting stretch, not on the $356$ km stretch the claim named. Another trap is $356/77$ mixed as if A and B shared the $356$ km run as a combined speed; the claim is A *alone*.

The opposite verdict would need A's speed at or above $50.86$ km/h. With $A=48$, that does not happen. Boat B's $77$ km/h is a different vessel and does not rewrite A's solo clock.

Boat A needs about $7.42$ hours to cover $356$ km alone, which is more than $7$ hours, so the statement is True.`,
      `**B) In the 250 km scenario, the difference in distance covered by the two boats when they meet is less than half of the total 250 km gap.**  (true)

The statement looks at the $250$ km meeting: the difference in distance covered by the two boats, compared with half of $250$ km.

They meet after $2$ hours. The overview already has $A=48$ and $B=77$.

**1.** Distance A covers in $2$ hours:

$$2 \\times 48 = 96$$

**2.** Distance B covers in $2$ hours:

$$2 \\times 77 = 154$$

**3.** Difference, then half the stretch:

$$154 - 96 = 58, \\qquad \\frac{250}{2} = 125$$

Then $58 < 125$. The difference is less than half the gap. Because they start from opposite docks and close $250$ km together, the difference in distances is $(77-48)\\times 2=58$, while half the stretch would be the difference only if one boat were stationary.

Reporting $154-96=58$ against $250$ itself, or against $96$, would be using the wrong comparison figure. The stem's recovered values line up with $154-96=58$, whereas $96$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $154-96=58$ stays in the write-up. The claim names half of the $250$ km gap.

The distance difference at meeting is $58$ km, less than $125$ km, so the statement is True.`,
      `**C) If both boats' speeds were each increased by 20%, the time to close the original 250 km gap would fall below 1.5 hours.**  (false)

The statement raises both speeds by $20\\%$ and claims the time to close the original $250$ km gap would fall below $1.5$ hours.

Combined speed is currently $48+77=125$ km/h, so $250/125=2$ hours, matching the stem. After a $20\\%$ rise each, combined speed is $1.2 \\times 125=150$ km/h.

**1.** New time:

$$\\frac{250}{150} \\approx 1.667$$

hours.

**2.** Compare with $1.5$:

$$1.667 > 1.5$$

The new time is about $1$ hour $40$ minutes, which is not below $1.5$ hours. A $20\\%$ speed increase cuts time to $1/1.2 \\approx 0.833$ of the original $2$ hours, which is $1.667$, not $1.5$. To hit $1.5$ hours the combined speed would need $250/1.5 \\approx 166.7$ km/h, a $33\\%$ rise.

Subtracting $20\\%$ of $2$ hours, $2-0.4=1.6$, is close but still not below $1.5$. So the letter reads the claim against $20\\%$; $1.5$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $20\\%$ stays in the write-up. Using $1.2 \\times 2=2.4$ would have increased time instead of speed. The path that matches the stem therefore holds $1.2 \\times 2=2.4$ fixed and only then reads the claim.

The $20\\%$ speed-up still takes about $1.67$ hours, not below $1.5$, so the statement is False.`,
      `**D) The combined distance both boats would cover in 3 hours at their actual speeds exceeds the 356 km stretch length.**  (true)

The statement claims the combined distance both boats would cover in $3$ hours exceeds the $356$ km stretch. The overview already recovered $48$ and $77$ km/h. The extra arithmetic is three hours of combined speed, not the head-start meeting.

**1.** Combined speed:

$$48 + 77 = 125$$

**2.** Three hours at that combined speed:

$$3 \\times 125 = 375$$

**3.** Compare with $356$ km:

$$375 > 356$$

In $3$ hours they cover $19$ km more than that stretch. This is not the head-start scenario; it is both boats travelling simultaneously for $3$ hours. Giving B a $3$-hour head start and then one more hour of A, which is the stem's second meeting, would be answering a different clock. That is why $3$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap is mixing the stem's $3$-hour head start into this simultaneous $3$-hour run.

The opposite verdict would need $3(48+77) \\le 356$, so a combined speed of about $118.7$ km/h or less. With $125$ km/h combined, three hours is $375$ km.

Three hours of combined travel is $375$ km, which exceeds $356$ km, so the statement is True.`,
      `**E) Boat B's speed is more than 60% higher than Boat A's speed.**  (true)

The statement claims Boat B is more than $60\\%$ faster than Boat A. This is a relative-increase comparison, not a meeting-time letter. The overview already recovered $A=48$ km/h and $B=77$ km/h. The extra arithmetic is the gap, then the gap over A's speed.

**1.** Speed gap:

$$77 - 48 = 29$$

**2.** Gap as a share of A:

$$\\frac{29}{48} \\approx 0.60417$$

**3.** Sixty percent of A, as a cutoff speed increment:

$$0.60 \\times 48 = 28.8$$

The actual gap $29$ sits $0.2$ km/h above $28.8$, so the relative increase is about $60.4\\%$, which exceeds $60\\%$. Equivalently, the cutoff speed is $1.60 \\times 48 = 76.8$, and recovered $B=77$ sits just above that.

Using $77/48 \\approx 1.604$ and reporting $160\\%$ would have forgotten to subtract $1$ from a "higher than" claim. That is the fork: $77/48 \\approx 1.604$ belongs to the recovered isolation, $1$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Using $29/77 \\approx 37.7\\%$ against B would fail the cutoff. Keeping $29/77 \\approx 37.7\\%$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $160\\%$ is the ratio left as a multiple. Another trap is $77-48=29$ treated as already "$29\\%$ higher," mixing kilometres-per-hour with percentage points.

The opposite verdict would need $B \\le 76.8$. Recovered $B=77$ is $0.2$ km/h above that bar. The $356$ km stretch and the $250$ km meeting stretch are distance stories; they do not rewrite these two constant speeds.

B is about $60.4\\%$ faster than A, which is more than $60\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 45,
    solution_overview: `Two Meridian Rail boats travel at fixed constant speeds. On one 250 km stretch, they start from opposite docks and meet after 2 hours.

**Part 1: Building the system.**

Let $x$ = Boat A's speed (km/h), $y$ = Boat B's speed (km/h).

Time coefficients come from the story's clocks - head-starts, overtime hours, or duration multipliers - not from the headline total alone.

**1. Translate: 250 km gap closed in 2 hrs: 2(x+y) = 250.** That observation becomes:

$$
x + y = 125
$$

**2. Translate: Boat A travels 1 hr; Boat B travels its 3-hr head start plus 1 more = 4 hrs.** That observation becomes:

$$
x + 4y = 356
$$

**Part 2: The model.**

$$
x + y = 125 \\tag{1}
$$

$$
x + 4y = 356 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract the first equation from the second:

$$
(x + 4y) - (x + y) = 356 - 125
$$

$$
3y = 231 \\Rightarrow y = \\frac{231}{3} = 77
$$

**2.** Substitute $y = 77$ into $x + y = 125$:

$$
x + 77 = 125 \\Rightarrow x = 48
$$

**Answer.** Boat A travels 48 km/h and Boat B travels 77 km/h.`,
  },
  {
    id: `math-5-46`,
    case_id: `MATH 5.46`,
    title: `Meridian Textiles  -  Three-Season Profit Reconstruction`,
    context: `Meridian Textiles tracks a fixed profit per tonne for Wheat and Barley. Season 3's paperwork was water-damaged: Barley tonnage and total profit survived, but Wheat tonnage is illegible.`,
    tables_markdown: `| Season | Wheat | Barley | Total Profit |
| --- | --- | --- | --- |
| Season 1 | 240 t | 160 t | \\$42,000 |
| Season 2 | 180 t | 260 t | \\$48,300 |
| Season 3 (illegible) |  | 300 t | \\$53,100 |`,
    statements: [
      `If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded \\$44,000.`,
      `Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.`,
      `Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.`,
      `Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of \\$53,100 would have been understated by more than \\$3,500.`,
      `Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A) If Season 1's Wheat output had instead been 260 tonnes (Barley unchanged at 160 t), total profit would have exceeded \\$44,000.**  (false)

The statement raises Season 1's Wheat from $240$ t to $260$ t, Barley unchanged, and claims total profit would exceed $\\$44{,}000$.

The overview already recovered Wheat at $\\$95$ per tonne. Season 1 printed $\\$42{,}000$. The extra $20$ t of Wheat add $20 \\times 95$.

**1.** Extra Wheat profit:

$$20 \\times 95 = 1900$$

**2.** New Season 1 total:

$$42000 + 1900 = 43900$$

**3.** Compare with $\\$44{,}000$:

$$43900 < 44000$$

The new total is $\\$43{,}900$, one hundred dollars short of the cutoff. Using Barley's $120$ on the extra $20$ t would get $42000+2400=44400$ and flip the verdict. Working from the isolated values, $120$ is the figure that is checked, not the detour that produced $42000+2400=44400$. That contrast is the reason the verdict goes the way it does. The extra tonnes are Wheat.

Season 1 at $260$ t Wheat would profit $\\$43{,}900$, which does not exceed $\\$44{,}000$, Season 1 printed $240$ t Wheat, $160$ t Barley, $\\$42{,}000$. Raising Wheat to $260$ t adds $20 \\times 95=1900$, so $43900$, one hundred dollars short of $44000$. That hundred dollars is why the cutoff is tight. Using Barley's $120$ on the extra $20$ t would add $2400$ and produce $44400$, over the bar, flipping the verdict. The extra tonnes are Wheat.

Scaling the whole $42000$ by $260/240$ would keep Barley inside the scale factor and overshoot. The recovered comparison therefore keeps $42000$ and does not substitute $260/240$. That contrast is the reason the verdict goes the way it does. Only the Wheat column changes. This is a one-column increment, the way extra paperbacks added $100 \\times 12$ in an earlier task.

If Wheat had been $100$ per tonne, the extra $20$ t would add $2000$ and the new total would be $44000$ exactly, which still does not *exceed* $44000$. The recovered $95$ is what leaves the counterfactual at $43900$, under the bar.

so the statement is False.`,
      `**B) Barley's profit-per-tonne advantage over Wheat (y - x) represents more than 25% of Wheat's profit per tonne.**  (true)

The statement claims Barley's per-tonne profit advantage over Wheat is more than $25\\%$ of Wheat's per-tonne profit. The overview already recovered Wheat $x=95$ and Barley $y=120$. Season 3's reconstructed Wheat tonnage is a different unknown and does not enter this ratio. The extra arithmetic is the gap, then the gap over Wheat.

**1.** Barley minus Wheat:

$$120 - 95 = 25$$

**2.** Gap over Wheat:

$$\\frac{25}{95} \\approx 0.26316$$

**3.** Twenty-five percent of Wheat:

$$0.25 \\times 95 = 23.75$$

The actual gap $\\$25$ sits $\\$1.25$ above $\\$23.75$, so the relative advantage is about $26.3\\%$, which exceeds $25\\%$.

Using $25/120 \\approx 20.8\\%$ against Barley would fail the cutoff and flip the verdict. Keeping $25/120 \\approx 20.8\\%$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $20.8\\%$ is the gap over the wrong crop. Treating $\\$25$ as already $25\\%$ of a round $\\$100$ Wheat margin would skip Wheat's actual $\\$95$. The path that matches the stem therefore holds $25\\%$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Season 1 and Season 2 totals are mixes of tonnes, not per-tonne margins, so dividing a season total by a round tonnage does not recover this $25/95$ ratio.

The opposite verdict would need a gap of $23.75$ or less on a $\\$95$ Wheat margin, so Barley at or below $118.75$. Recovered Barley is $\\$120$.

Barley's $\\$25$ advantage is about $26.3\\%$ of Wheat's $\\$95$, which exceeds $25\\%$, so the statement is True.`,
      `**C) Season 3's total tonnage (Wheat + Barley) is less than Season 2's total tonnage.**  (false)

The statement claims Season 3's total tonnage is less than Season 2's total tonnage.

The overview already reconstructed Season 3's Wheat as $180$ t, with Barley $300$ t printed. Season 2 is $180$ t Wheat and $260$ t Barley.

**1.** Season 3 total:

$$180 + 300 = 480$$

**2.** Season 2 total:

$$180 + 260 = 440$$

**3.** Compare:

$$480 > 440$$

Season 3 is *more* tonnes, not less. The Wheat columns match at $180$; Season 3's extra $40$ t of Barley is the whole difference.

Leaving Season 3's Wheat blank and comparing $300$ with $440$ would find $300<440$ and accept the claim by dropping the reconstructed Wheat. The recovered comparison therefore keeps $300$ and does not substitute $300<440$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The reconstruction is $180$ t, and it counts.

Season 3's $480$ t is not less than Season 2's $440$ t, Season 3's Wheat reconstructs to $180$ t from $53100-300 \\times 120=53100-36000=17100$ and $17100/95=180$. Adding the printed $300$ t of Barley gives $480$ t total. Season 2 is $180+260=440$ t. Season 3 is larger, not smaller. The Wheat columns match at $180$; Season 3's extra $40$ t of Barley is the whole difference.

Leaving Season 3's Wheat blank and comparing $300$ with $440$ would find $300<440$ and accept the claim by dropping the reconstruction. The stem's recovered values line up with $300$, whereas $300<440$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $300$ stays in the write-up. The reconstruction is $180$ t, and it counts in the total tonnage. This is the water-damaged third row, reconstructed, then compared.

If the reconstructed Wheat had been $100$ t, Season 3 would total $400$ t, less than Season 2's $440$, and the claim would have been true. Seasons 1 and 2 force Wheat at $95$ and Barley at $120$, and those force Season 3's Wheat at $180$, total $480$.

so the statement is False.`,
      `**D) Had Season 3 actually produced 220 tonnes of Wheat rather than the reconstructed 180 tonnes, the recorded total profit of \\$53,100 would have been understated by more than \\$3,500.**  (true)

The statement replaces Season 3's reconstructed $180$ t of Wheat with $220$ t and claims the recorded $\\$53{,}100$ would then have been understated by more than $\\$3{,}500$.

The extra $40$ t of Wheat at $\\$95$ per tonne is the understatement.

$$40 \\times 95 = 3800$$

Then $3800 > 3500$. If Season 3 had actually produced $220$ t of Wheat, true profit would be $53100+3800=56900$, and the recorded $53100$ would sit $3800$ low.

Using Barley's $120$ on the $40$ t would get $4800$, still above $3500$, so that swap would not flip the verdict. That is the fork: $120$ belongs to the recovered isolation, $3500$ belongs to the discarded mix. Using $20$ t extra, mixing letter A's increment, would get $1900$ and fail the cutoff. After isolating the unknown, the check is against $20$. The figure $1900$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $20$ stays in the write-up.

The understatement would be $\\$3{,}800$, which is more than $\\$3{,}500$, so the statement is True.`,
      `**E) Season 2's profit per tonne of total output exceeds Season 1's profit per tonne of total output.**  (true)

The statement claims Season 2's profit per tonne of total output exceeds Season 1's. Season 1 is $240$ t Wheat and $160$ t Barley for $\\$42{,}000$. Season 2 is $180$ t Wheat and $260$ t Barley for $\\$48{,}300$. The extra arithmetic is the two averages. Recovered $95$ and $120$ are not re-solved here; they already sit inside those printed totals.

**1.** Season 1: $240+160=400$ t at $\\$42{,}000$, so $42000/400=105$ per tonne.

**2.** Season 2: $180+260=440$ t at $\\$48{,}300$, so $48300/440=109.772\\ldots$ per tonne.

**3.** Compare: $109.77 > 105$. Season 2 is Barley-heavier, and Barley pays $120$ versus Wheat's $95$, so the average rises.

Comparing totals $48300>42000$ without dividing by tonnes would be ranking size, not intensity. The path that matches the stem therefore holds $48300>42000$ fixed and only then reads the claim. Season 3's reconstructed $180$ t of Wheat is a third season and is not in this comparison.

The opposite verdict would need Season 2 to be Wheat-heavier than Season 1. With $260$ t of Barley against Season 1's $160$ t, Season 2's profit per tonne is higher.

Season 2's about $\\$109.77$ per tonne exceeds Season 1's $\\$105$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 46,
    solution_overview: `Meridian Textiles tracks a fixed profit per tonne for Wheat and Barley. Season 3's paperwork was water-damaged: Barley tonnage and total profit survived, but Wheat tonnage is illegible.

**Part 1: Building the system.**

Let $x$ = profit per tonne of Wheat, $y$ = profit per tonne of Barley.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Season 1: 240x+160y=42000, /80.** That observation becomes:

$$
3x + 2y = 525
$$

**2. Translate: Season 2: 180x+260y=48300, /20.** That observation becomes:

$$
9x + 13y = 2415
$$

**Part 2: The model.**

$$
3x + 2y = 525 \\tag{1}
$$

$$
9x + 13y = 2415 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the simplified Season 1 by 13 and Season 2 by 2 so the $y$ coefficients both become $26y$:

$$
13(3x + 2y) = 13(525) \\Rightarrow 39x + 26y = 6825
$$

$$
2(9x + 13y) = 2(2415) \\Rightarrow 18x + 26y = 4830
$$

**2.** Subtract:

$$
(39x + 26y) - (18x + 26y) = 6825 - 4830
$$

$$
21x = 1995 \\Rightarrow x = \\frac{1995}{21} = 95
$$

**3.** Substitute $x = 95$ into $3x + 2y = 525$:

$$
3(95) + 2y = 525 \\Rightarrow 285 + 2y = 525 \\Rightarrow 2y = 240 \\Rightarrow y = 120
$$

**4.** Reconstruct Season 3's Wheat tonnage $T$:

$$
95T + 120(300) = 53100 \\Rightarrow 95T + 36000 = 53100
$$

$$
95T = 17100 \\Rightarrow T = 180
$$

**Answer.** Wheat = \\$95.00/t | Barley = \\$120.00/t | Season 3 Wheat reconstructed = 180 tonnes`,
  },
  {
    id: `math-5-47`,
    case_id: `MATH 5.47`,
    title: `Bramwell & Co.  -  Double-Condition Age Reconstruction`,
    context: `Bramwell's HR system flagged an "elder" and "younger" employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.`,
    statements: [
      `Fifteen years from now, the elder employee's age will be less than double the younger employee's age at that time.`,
      `The current age gap (x - y) is more than 45% of the elder employee's current age.`,
      `Exactly 4.5 years from now, the elder employee will be more than 2.5 times the younger employee's age.`,
      `Ten years ago, the sum of their ages was less than 40.`,
      `There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A) Fifteen years from now, the elder employee's age will be less than double the younger employee's age at that time.**  (true)

The statement looks fifteen years forward and claims the elder's age will then be less than double the younger's age at that time.

The overview already recovered elder $47$ and younger $19$. In fifteen years they are $62$ and $34$.

**1.** Double the younger at that time:

$$2 \\times 34 = 68$$

**2.** Compare with the elder:

$$62 < 68$$

The elder is $6$ years short of double. The ratio $62/34 \\approx 1.82$ is less than $2$. Doubling the current $19$ to $38$ and comparing with $47+15=62$ would be mixing a current double with a future elder. So the letter reads the claim against $19$; $47+15=62$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $19$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

Fifteen years from now the elder is $62$ and double the younger is $68$, so the elder is less than double, so the statement is True.`,
      `**B) The current age gap (x - y) is more than 45% of the elder employee's current age.**  (true)

The statement claims the current age gap $x-y$ is more than $45\\%$ of the elder employee's current age. The overview already recovered elder $x=47$ and younger $y=19$. This letter does not rebuild the five-years-ago triple. The extra arithmetic is the current gap over $47$.

**1.** Current gap:

$$47 - 19 = 28$$

**2.** Gap over the elder:

$$\\frac{28}{47} \\approx 0.5957$$

**3.** Forty-five percent of the elder:

$$0.45 \\times 47 = 21.15$$

The actual gap $28$ sits $6.85$ years above $21.15$, so about $59.6\\%$ of $47$, which exceeds $45\\%$ by a wide margin. The five-years-ago gap was also $28$, because both ages drop by the same five years, but the *base* was then $42$, and $28/42 \\approx 67\\%$ is a different letter.

Using $28/19 \\approx 147\\%$ against the younger would still exceed $45\\%$ but would be using the wrong base. So the letter reads the claim against $28/19 \\approx 147\\%$; $45\\%$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $28/19 \\approx 147\\%$ stays in the write-up. Using $47-19=28$ as if $28$ were already "$28\\%$ of $47$" would mix years with percentage points. The recovered comparison therefore keeps $47-19=28$ and does not substitute $47$. The trap figure $45\\%$ is a round bar well below $59.6\\%$; it is not a computed share from the stem.

The opposite verdict would need the gap at or below $21.15$ years. With ages $47$ and $19$, the gap is $28$.

The gap $28$ is about $59.6\\%$ of $47$, which exceeds $45\\%$, so the statement is True.`,
      `**C) Exactly 4.5 years from now, the elder employee will be more than 2.5 times the younger employee's age.**  (false)

The statement looks $4.5$ years forward and claims the elder will then be more than $2.5$ times the younger.

In $4.5$ years they are $51.5$ and $23.5$.

$$\\frac{51.5}{23.5} \\approx 2.191$$

Then $2.191 > 2.5$ is false. The ratio is about $2.19$, short of $2.5$. The stem's "nine years from now, twice as old" is a different horizon: at $t=9$, $56/28=2$ exactly. At $t=4.5$, halfway in time, the ratio is not halfway between $47/19 \\approx 2.47$ and $2$.

Using $47/19 \\approx 2.47$ as if it were already the $4.5$-year figure would still fail $2.5$, so that slip would not flip the verdict. The stem's recovered values line up with $47/19 \\approx 2.47$, whereas $2.5$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $47/19 \\approx 2.47$ stays in the write-up. Computing $2.5 \\times 23.5=58.75$ and comparing with $51.5$ would see the shortfall directly. That is the fork: $2.5 \\times 23.5=58.75$ belongs to the recovered isolation, $51.5$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

At $4.5$ years the ratio is about $2.19$, not more than $2.5$, so the statement is False.`,
      `**D) Ten years ago, the sum of their ages was less than 40.**  (false)

The statement claims that ten years ago the sum of their ages was less than $40$. The overview already recovered current ages $47$ and $19$. The extra arithmetic is subtracting ten from each, then adding. Ages are not re-solved from the five-year triple.

**1.** Ages ten years ago:

$$47-10=37, \\qquad 19-10=9$$

**2.** Sum ten years ago:

$$37 + 9 = 46$$

**3.** Compare with $40$:

$$46 < 40$$

is false. Equivalently, current sum minus twenty years of living: $47+19-20=46$. The sum is $46$, six above the cutoff.

Subtracting ten only from the elder would get $37+19=56$. Keeping $37+19=56$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Using five years ago, $42+14=56$, would be at the stem's triple moment, not ten years ago. That is why $42+14=56$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $56$ is that five-year-ago sum, or the one-sided subtraction. Another trap is $47-10+19=56$ after forgetting to age the younger back. Ten years ago the younger was $9$, which is a legal age in this story; the claim is about the *sum*, not about whether $9$ looks surprising.

The opposite verdict would need a current sum below $60$. With $47+19=66$, ten years ago is $46$.

Ten years ago the ages summed to $46$, which is not less than $40$, so the statement is False.`,
      `**E) There was a point in time, more than 4 years ago, when the elder employee was exactly three times the younger employee's age.**  (true)

The statement claims there was a point more than $4$ years ago when the elder was exactly three times the younger. The stem already says that five years ago the elder was exactly three times the younger: $42=3 \\times 14$. Five years is more than four years. This letter is reading that stem condition against a "more than $4$ years ago" cutoff, not re-solving the ages.

**1.** The triple is at $t=-5$ years.

**2.** Compare with the cutoff of $4$ years ago:

$$5 > 4$$

**3.** The triple sits one year past the cutoff. Using the nine-years-forward double instead would be answering a future question. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The double is at $t=+9$, which is not "more than $4$ years ago." requiring an integer number of years beyond five would miss that five already qualifies. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The opposite verdict would need the triple to fall at $4$ years ago or more recently. The stem pins it at five years ago.

The triple occurred five years ago, which is more than four years ago, so the statement is True.`,
    ],
    difficulty_level: `\\frac{4}{5}`,
    sort_order: 47,
    solution_overview: `Bramwell's HR system flagged an "elder" and "younger" employee for a data-entry conflict: five years ago, the elder was exactly three times as old as the younger; nine years from now, the elder will be exactly twice as old as the younger.

**Part 1: Building the system.**

Let $x$ = elder employee's current age, $y$ = younger employee's current age.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: five years ago, elder was 3× younger.** That observation becomes:

$$
x - 5 = 3(y - 5)
$$

**2. Translate: in nine years, elder will be 2× younger.** That observation becomes:

$$
x + 9 = 2(y + 9)
$$

**Part 2: The model.**

$$
x - 5 = 3(y - 5) \\tag{1}
$$

$$
x + 9 = 2(y + 9) \\tag{2}
$$

**Part 3: Solve.**

**1.** Expand both age conditions:

$$
x - 5 = 3(y - 5) \\Rightarrow x - 5 = 3y - 15 \\Rightarrow x = 3y - 10
$$

$$
x + 9 = 2(y + 9) \\Rightarrow x + 9 = 2y + 18 \\Rightarrow x = 2y + 9
$$

**2.** Set the two expressions for $x$ equal:

$$
3y - 10 = 2y + 9 \\Rightarrow y = 19
$$

**3.** Substitute $y = 19$ into $x = 2y + 9$:

$$
x = 2(19) + 9 = 38 + 9 = 47
$$

**Answer.** Elder employee = 47 years old | Younger employee = 19 years old`,
  },
  {
    id: `math-5-48`,
    case_id: `MATH 5.48`,
    title: `Crestline Retail Group  -  Decimal Markup Reconstruction`,
    context: `Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another.`,
    tables_markdown: `| Order | Product A Units | Product B Units | Retail Total |
| --- | --- | --- | --- |
| Order 1 | 8 | 5 | \\$1,052.80 |
| Order 2 | 16 | 10 | \\$2,105.60 |
| Order 3 | 3 | 12 | \\$1,350.60 |`,
    statements: [
      `If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual \\$1,350.60.`,
      `The dollar markup on Product B is more than 80% of the dollar markup on Product A.`,
      `Order 1's total retail markup exceeds \\$150.00.`,
      `If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than \\$280.00.`,
      `The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) If the two markup percentages were swapped (Product A marked up 18%, Product B marked up 32%), Order 3's retail total would decrease compared to its actual \\$1,350.60.**  (false)

The statement swaps the two markup percentages and claims Order 3's retail total would decrease from $\\$1{,}350.60$.

The overview already recovered wholesale $A=55$ and $B=80$. Actual markups are $32\\%$ on A and $18\\%$ on B, so retail $72.60$ and $94.40$. Swapped: A marked $18\\%$ and B marked $32\\%$, so retail $64.90$ and $105.60$.

**1.** Swapped Order 3: $3$ of A and $12$ of B.

$$3(64.90) + 12(105.60) = 194.70 + 1267.20 = 1461.90$$

**2.** Compare with actual $\\$1{,}350.60$:

$$1461.90 > 1350.60$$

The swapped mix *increases* by $\\$111.30$, it does not decrease. Order 3 is B-heavy ($12$ versus $3$), so giving B the larger markup raises the total.

Swapping unit wholesale prices instead of markups would be answering a different counterfactual. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Looking at Order 1, which is A-heavier, might see a decrease; the claim names Order 3. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence.

Swapped markups raise Order 3 to $\\$1{,}461.90$, so the total does not decrease, so the statement is False.`,
      `**B) The dollar markup on Product B is more than 80% of the dollar markup on Product A.**  (true)

The statement claims Product B's dollar markup is more than $80\\%$ of Product A's dollar markup. Crestline marks A up $32\\%$ and B up $18\\%$ over wholesale. The overview already recovered wholesale $A=55$ and $B=80$. Percentage markups are given; dollar markups are not. The extra arithmetic is those two dollar markups, then their ratio.

**1.** Dollar markup on A:

$$55 \\times 0.32 = 17.60$$

**2.** Dollar markup on B:

$$80 \\times 0.18 = 14.40$$

**3.** B's markup as a share of A's:

$$\\frac{14.40}{17.60} = 0.81818\\ldots$$

about $81.8\\%$, which exceeds $80\\%$. Eighty percent of $\\$17.60$ is $\\$14.08$, and B's $\\$14.40$ sits $\\$0.32$ above that cutoff.

B's percentage markup is smaller, but B's wholesale is larger, so the dollar markups are close. Comparing $18\\%$ with $80\\%$ of $32\\%$ would mix percentage points with dollars: $0.80 \\times 32=25.6$ percentage points, which $18$ fails. The recovered comparison therefore keeps $18\\%$ and does not substitute $18$. The trap figure $18/32=56.25\\%$ is the *rate* ratio, not the dollar ratio. Another trap is comparing retail prices $94.40$ and $72.60$ and reporting $94.40/72.60 \\approx 130\\%$, which is a price ratio, not a markup ratio.

The opposite verdict would need $14.40 \\le 14.08$. Recovered wholesale prices pin the dollar markups just above that bar.

B's dollar markup $\\$14.40$ is more than $80\\%$ of A's $\\$17.60$, so the statement is True.`,
      `**C) Order 1's total retail markup exceeds \\$150.00.**  (true)

The statement claims Order 1's total retail markup exceeds $\\$150$. Order 1 is $8$ of A and $5$ of B. This is a new mix of the dollar markups, not a printed invoice total. The overview already recovered wholesale $A=55$ and $B=80$. Markup per A is $55 \\times 0.32=17.60$. Markup per B is $80 \\times 0.18=14.40$.

**1.** Markup on Order 1's A units:

$$8 \\times 17.60 = 140.80$$

**2.** Markup on Order 1's B units:

$$5 \\times 14.40 = 72.00$$

**3.** Combined markup:

$$140.80 + 72.00 = 212.80$$

Then $212.80 > 150$. Check against wholesale: Order 1 wholesale is $8(55)+5(80)=440+400=840$. Retail is $8(72.60)+5(94.40)=580.80+472=1052.80$. Difference $1052.80-840=212.80$, same figure.

Taking $32\\%$ of wholesale $840$ would get $268.80$ by forcing A's rate onto B. The stem's recovered values line up with $32\\%$, whereas $268.80$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $32\\%$ stays in the write-up. Taking $18\\%$ of $840$ would get $151.20$, just over $\\$150$, which still passes but is the wrong one-rate story. That is the fork: $18\\%$ belongs to the recovered isolation, $151.20$ belongs to the discarded mix. The trap figure $151.20$ is that all-$18\\%$ markup. The two rates differ, so the honest markup is the unit mix $140.80+72.00$.

The opposite verdict would need Order 1's mix to carry $\\$150$ or less. With $8$ and $5$ at $17.60$ and $14.40$, the markup is $212.80$.

Order 1's markup is $\\$212.80$, which exceeds $\\$150$, so the statement is True.`,
      `**D) If Order 3's Product B quantity rose from 12 to 15 units (Product A unchanged at 3 units), the retail total would increase by more than \\$280.00.**  (true)

The statement raises Order 3's Product B from $12$ to $15$ units, Product A unchanged at $3$, and claims the retail total would increase by more than $\\$280$. Retail B is $80 \\times 1.18=94.40$. The extra arithmetic is three extra B at that retail price.

**1.** Three extra B at retail:

$$3 \\times 94.40 = 283.20$$

**2.** Compare with $\\$280$:

$$283.20 > 280$$

**3.** The increment is three times B's retail price, not three times wholesale. Using $3 \\times 80=240$ wholesale would fail the $\\$280$ cutoff. The opposite verdict would need a different isolation than $3 \\times 80=240$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Using $3 \\times 72.60$ after swapping products would also fail. Once $3 \\times 72.60$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $240$ is wholesale on the extra units.

Product A unchanged means those $3$ units add $0$ to the increment. The opposite verdict would need retail B at or below $280/3 \\approx 93.33$. With retail B at $94.40$, three extra units add $283.20$.

Three extra B add $\\$283.20$, which is more than $\\$280$, so the statement is True.`,
      `**E) The wholesale cost ratio of Product B to Product A (y : x) is greater than the retail price ratio of Product B to Product A.**  (true)

The statement claims the wholesale cost ratio $B:A$ is greater than the retail price ratio $B:A$. Wholesale $A=55$, $B=80$ from the overview. Retail A is $55 \\times 1.32=72.60$. Retail B is $80 \\times 1.18=94.40$. This is a comparison of two ratios, not a dollar-markup letter.

**1.** Wholesale ratio:

$$\\frac{80}{55} = \\frac{16}{11} \\approx 1.4545$$

**2.** Retail ratio:

$$\\frac{94.40}{72.60} = \\frac{944}{726} \\approx 1.3003$$

**3.** Compare:

$$1.4545 > 1.3003$$

A has the larger percentage markup, so retail A is pulled up more than retail B, which shrinks $B:A$ at retail relative to wholesale. That is the whole mechanism. If the markups had been equal, the two ratios would match.

Comparing $18\\%$ with $32\\%$ as if those were the price ratios would be answering a different question. The recovered comparison therefore keeps $18\\%$ and does not substitute $32\\%$. The trap figure $32/18 \\approx 1.78$ is a rate ratio, not a price ratio. Another trap is comparing dollar markups $14.40/17.60 \\approx 0.818$ and calling that the "retail ratio." Letter B already used that quotient for a different claim.

The opposite verdict would need B's markup percentage to exceed A's, which would inflate retail $B/A$ above wholesale $B/A$. The stem marks A at $32\\%$ and B at $18\\%$.

Wholesale $B/A$ exceeds retail $B/A$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 48,
    solution_overview: `Crestline marks up Product A by 32% and Product B by 18% over wholesale cost. One of three orders is an exact scaled repeat of another.

**Part 1: Building the system.**

Let $x$ = wholesale cost of Product A, $y$ = wholesale cost of Product B.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Order 1: retail A is 1.32x, retail B is 1.18y.** That observation becomes:

$$
10.56x + 5.9y = 1052.80
$$

**2. Translate: Order 3, independent of Order 1.** That observation becomes:

$$
3.96x + 14.16y = 1350.60
$$

**Part 2: The model.**

$$
10.56x + 5.9y = 1052.80 \\tag{1}
$$

$$
3.96x + 14.16y = 1350.60 \\tag{2}
$$

**Part 3: Solve.**

**1.** Order 2 $(16, 10, 2105.60)$ is exactly double Order 1 $(8, 5, 1052.80)$, so it is redundant and set aside.

**2.** Multiply Order 1 by $0.375$ so its $x$ coefficient matches Order 3's $3.96x$:

$$
0.375(10.56x + 5.9y) = 0.375(1052.80)
$$

$$
3.96x + 2.2125y = 394.80
$$

**3.** Subtract from Order 3:

$$
(3.96x + 14.16y) - (3.96x + 2.2125y) = 1350.60 - 394.80
$$

$$
11.9475y = 955.80 \\Rightarrow y = \\frac{955.80}{11.9475} = 80.00
$$

**4.** Substitute $y = 80$ into Order 1:

$$
10.56x + 5.9(80) = 1052.80 \\Rightarrow 10.56x + 472 = 1052.80
$$

$$
10.56x = 580.80 \\Rightarrow x = 55.00
$$

**Answer.** Product A wholesale = \\$55.00 | Product B wholesale = \\$80.00`,
  },
  {
    id: `math-5-49`,
    case_id: `MATH 5.49`,
    title: `Fairview Amateur League  -  Cross-Team Points Reconstruction`,
    context: `The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points. The Ravens: 7 wins, 6 draws, 1 loss in 14 matches, 8 points fewer than the Falcons.`,
    statements: [
      `If a draw were worth exactly half of what a win is worth, the Falcons' total points would increase compared to their actual 75.`,
      `The Ravens earned more than 45% of their total points from draws alone.`,
      `Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.`,
      `The Falcons' win-to-draw point contribution ratio exceeds 15.`,
      `A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A) If a draw were worth exactly half of what a win is worth, the Falcons' total points would increase compared to their actual 75.**  (true)

The statement sets a draw equal to half a win and claims the Falcons' total would increase from $75$.

The overview already recovered a win at $7$ points and a draw at $3$. Half a win is $3.5$, which is $0.5$ above the actual draw.

**1.** Falcons at draw $=3.5$:

$$9 \\times 7 + 4 \\times 3.5 = 63 + 14 = 77$$

**2.** Compare with $75$:

$$77 > 75$$

The total rises by $2$, because four draws each pick up half a point. Also halving the win to $3.5$ would be answering a different system. The path that matches the stem therefore holds $3.5$ fixed and only then reads the claim. The claim keeps the win at its recovered $7$ and only changes the draw.

Falcons would score $77$, which is more than $75$, so the statement is True.`,
      `**B) The Ravens earned more than 45% of their total points from draws alone.**  (false)

The statement claims the Ravens earned more than $45\\%$ of their total points from draws alone. The Falcons had $75$ points. The Ravens had $8$ fewer, so $67$ points, from $7$ wins and $6$ draws. The overview already recovered a win at $7$ points and a draw at $3$.

**1.** Ravens' draw points:

$$6 \\times 3 = 18$$

**2.** Share of Ravens' total:

$$\\frac{18}{67} \\approx 0.2687$$

**3.** About $26.9\\%$, which is not more than $45\\%$. Wins still supply $7 \\times 7=49$ of the $67$ points. Using $6/14 \\approx 43\\%$ of *matches* that were draws would sit near $45\\%$ and might accept the claim. Working from the isolated values, $6/14 \\approx 43\\%$ is the figure that is checked, not the detour that produced $45\\%$. That contrast is the reason the verdict goes the way it does. The trap figure $43\\%$ is match share, not point share. The claim is points, not matches.

The opposite verdict would need draw points above $0.45 \\times 67 \\approx 30.15$, which would take more than $10$ draws at $3$ points. The Ravens had $6$ draws.

Ravens' draw share is about $27\\%$ of points, not more than $45\\%$, so the statement is False.`,
      `**C) Under a halved scoring system (2 points per win, 1 point per draw), the Falcons would still have finished with more points than the Ravens.**  (true)

The statement uses a halved scoring system, $2$ per win and $1$ per draw, and claims the Falcons would still finish with more points than the Ravens.

**1.** Falcons halved:

$$9 \\times 2 + 4 \\times 1 = 18 + 4 = 22$$

**2.** Ravens halved:

$$7 \\times 2 + 6 \\times 1 = 14 + 6 = 20$$

**3.** Compare:

$$22 > 20$$

Falcons still lead, now by $2$ instead of $8$. Halving every point value halves both totals from $75$ and $67$ to $37.5$ and $33.5$ if the original $7$ and $3$ were simply halved, but $7/2=3.5$ is not the claim's $2$. The claim names a different scale, $2$ and $1$, which is not proportional to $7$ and $3$. Even on that different scale, Falcons remain ahead because they have more wins.

Using $1$ per win and $0$ per draw would be a different system again. So the letter reads the claim against $1$; $0$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $1$ stays in the write-up. Under $2$ and $1$, Falcons $22$ beat Ravens $20$.

Falcons still outscore Ravens under the halved system, so the statement is True.`,
      `**D) The Falcons' win-to-draw point contribution ratio exceeds 15.**  (false)

The statement claims the Falcons' win-to-draw *point contribution* ratio exceeds $15$. Falcons had $9$ wins, $4$ draws, and $75$ points. The overview already recovered a win at $7$ points and a draw at $3$. Losses contribute $0$. This letter does not rebuild that pair. It only splits the $75$ points into win points and draw points, then divides.

**1.** Falcons win points:

$$9 \\times 7 = 63$$

**2.** Falcons draw points:

$$4 \\times 3 = 12$$

**3.** Point-contribution ratio:

$$\\frac{63}{12} = 5.25$$

Then $5.25 > 15$ is false. Check: $63+12=75$, so the split rebuilds the printed Falcons total. The ratio is $5.25$ to $1$, not $15$ to $1$.

Using match counts $9/4=2.25$ would be answering a wins-to-draws *record* ratio. The opposite verdict would need a different isolation than $9/4=2.25$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Dividing win points by draw *count*, $63/4=15.75$, would manufacture a figure just above $15$ and accept the claim. The stem's recovered values line up with $63/4=15.75$, whereas $15$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $63/4=15.75$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The trap figure $15.75$ is win points over draw count. The claim is point contribution to point contribution, $63:12$. Another trap is $75/5=15$ from a five-result average that is not in the stem.

The opposite verdict would need draw points below $63/15=4.2$, which would take fewer than two draws at $3$ points. The Falcons had four draws. The Ravens' $67$ points are a different club.

The win-to-draw points ratio is $5.25$, which does not exceed $15$, so the statement is False.`,
      `**E) A hypothetical team with the Falcons' record but 3 additional wins converted from draws (12 wins, 1 draw, 2 losses) would score more than 20 points higher than the Falcons' actual total.**  (false)

The statement converts three Falcons draws into wins, leaving $12$ wins, $1$ draw, $2$ losses, and claims that team would score more than $20$ points higher than the actual $75$.

Each converted draw picks up $7-3=4$ extra points. Three conversions: $12$ extra points.

$$75 + 12 = 87$$

Then $87-75=12$, which is not more than $20$. Directly: $12 \\times 7 + 1 \\times 3=84+3=87$.

Treating the three extra wins as *additional* matches, $12$ wins and $4$ draws, would get $84+12=96$, a $21$-point jump, and flip the verdict. After isolating the unknown, the check is against $12$. The figure $21$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $12$ stays in the write-up. The claim converts draws to wins, so draws fall from $4$ to $1$.

The converted record scores $87$, only $12$ above $75$, not more than $20$ above, so the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 49,
    solution_overview: `The Fairview league awards a fixed points value for a win and a smaller fixed value for a draw; a loss earns zero. The Falcons: 9 wins, 4 draws, 2 losses in 15 matches, 75 points.

**Part 1: Building the system.**

Let $x$ = points per win, $y$ = points per draw.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: Falcons.** That observation becomes:

$$
9x + 4y = 75
$$

**2. Translate: Ravens: 75 - 8 = 67 total points.** That observation becomes:

$$
7x + 6y = 67
$$

**Part 2: The model.**

$$
9x + 4y = 75 \\tag{1}
$$

$$
7x + 6y = 67 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply the Falcons equation by 3 and the Ravens equation by 2 so the $y$ coefficients both become $12y$:

$$
3(9x + 4y) = 3(75) \\Rightarrow 27x + 12y = 225
$$

$$
2(7x + 6y) = 2(67) \\Rightarrow 14x + 12y = 134
$$

**2.** Subtract:

$$
(27x + 12y) - (14x + 12y) = 225 - 134
$$

$$
13x = 91 \\Rightarrow x = 7
$$

**3.** Substitute $x = 7$ into the Falcons equation:

$$
9(7) + 4y = 75 \\Rightarrow 63 + 4y = 75 \\Rightarrow 4y = 12 \\Rightarrow y = 3
$$

**Answer.** Win = 7 points | Draw = 3 points`,
  },
  {
    id: `math-5-50`,
    case_id: `MATH 5.50`,
    title: `Meridian Alloys  -  Decimal Density Reconstruction and Audit`,
    context: `Meridian Alloys blends molten Metal A and Metal B, each with a fixed mass-per-liter figure. A third batch's Metal A volume was logged in US gallons and converted to liters (2.5 gal ≈ 9.5 L).`,
    tables_markdown: `| Batch | Metal A | Metal B | Total Mass |
| --- | --- | --- | --- |
| Batch 1 | 12 L | 8 L | 182.4 kg |
| Batch 2 | 5 L | 15 L | 209.0 kg |
| Batch 3 (audit) | 9.5 L (conv.) | 6 L | 147.0 kg (recorded) |`,
    statements: [
      `If Batch 1's Metal B volume had been 10 L instead of 8 L (Metal A unchanged at 12 L), the total mass would have exceeded 200 kg.`,
      `Metal B's density is more than 50% greater than Metal A's density.`,
      `The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.`,
      `If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.`,
      `Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) If Batch 1's Metal B volume had been 10 L instead of 8 L (Metal A unchanged at 12 L), the total mass would have exceeded 200 kg.**  (true)

The statement raises Batch 1's Metal B from $8$ L to $10$ L, leaves Metal A at $12$ L, and claims total mass would exceed $200$ kg. This is a new mix, not the printed Batch 1 row. The overview already recovered $A=7.6$ kg/L and $B=11.4$ kg/L. Batch 1 printed $182.4$ kg, which is $12(7.6)+8(11.4)=91.2+91.2=182.4$. The extra arithmetic is only the extra $2$ L of B.

**1.** Extra B mass:

$$2 \\times 11.4 = 22.8$$

**2.** New total:

$$182.4 + 22.8 = 205.2$$

**3.** Direct rebuild of the counterfactual batch:

$$12 \\times 7.6 + 10 \\times 11.4 = 91.2 + 114 = 205.2$$

Then $205.2 > 200$. The extra $2$ L of B add $22.8$ kg, which is more than the $17.6$ kg gap from $182.4$ up to $200$.

Adding $2$ L of A instead would add $15.2$ kg and get $197.6$, which does not exceed $200$ and would flip the verdict. That is the fork: $2$ belongs to the recovered isolation, $200$ belongs to the discarded mix. The trap figure $197.6$ kg is extra A, not extra B. Averaging $7.6$ and $11.4$ to $9.5$ and then adding $2 \\times 9.5=19$ would get $201.4$, which still passes $200$ but is the wrong extra-mass story. The stem's recovered values line up with $7.6$, whereas $200$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $7.6$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Batch 3's recorded $147$ kg versus predicted $140.6$ kg is an audit discrepancy and does not rewrite Batch 1's densities.

The opposite verdict would need $B \\le 17.6/2=8.8$ kg/L on those extra $2$ L. Recovered $B=11.4$.

The counterfactual Batch 1 masses $205.2$ kg, which exceeds $200$ kg, so the statement is True.`,
      `**B) Metal B's density is more than 50% greater than Metal A's density.**  (false)

The statement claims Metal B's density is more than $50\\%$ greater than Metal A's. That is a strict relative-increase test on the two recovered densities. Batch 3's gallon conversion and $6.4$ kg discrepancy do not enter.

The overview recovered Metal A at $7.6$ kg/L and Metal B at $11.4$ kg/L. The extra arithmetic is the relative gap against A.

**1.** Form the ratio of the two recovered densities:

$$\\frac{11.4}{7.6} = 1.5$$

**2.** Equivalently, the relative increase is

$$\\frac{11.4-7.6}{7.6} = \\frac{3.8}{7.6} = 0.50$$

B is exactly $50\\%$ greater than A, not more than $50\\%$ greater. The inequality is strict. Treating "$50\\%$ greater" as including equality would flip the verdict. That is why $50\\%$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $(11.4-7.6)/11.4 \\approx 33\\%$ against B would fail for a different reason. The recovered isolation is checked against the claim using $(11.4-7.6)/11.4 \\approx 33\\%$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does.

Density B would have to sit strictly above $11.4$ to clear a "more than" test, and the recovered value does not. The opposite verdict would need a different Batch 1 or Batch 2 mass.

B is $50\\%$ denser than A, not more than $50\\%$ denser, so the statement is False.`,
      `**C) The mass discrepancy found in Batch 3 represents more than 4% of its recorded total mass.**  (true)

The statement claims Batch 3's mass discrepancy is more than $4\\%$ of its recorded total mass.

The overview already predicted $140.6$ kg against a recorded $147.0$ kg.

**1.** Discrepancy:

$$147.0 - 140.6 = 6.4$$

**2.** Share of recorded mass:

$$\\frac{6.4}{147.0} \\approx 0.04354$$

about $4.35\\%$, which exceeds $4\\%$. Using $6.4/140.6 \\approx 4.55\\%$ against the prediction would still pass $4\\%$. Working from the isolated values, $6.4/140.6 \\approx 4.55\\%$ is the figure that is checked, not the detour that produced $4\\%$. Using $2.5$ gal conversion error as a different discrepancy would be answering a different audit. That is why $2.5$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The $6.4$ kg gap is about $4.35\\%$ of $147.0$ kg, more than $4\\%$, Batch 3 is the audit row, with Metal A logged in gallons and converted at $2.5$ gal $\\approx 9.5$ L. Batches 1 and 2 recovered $7.6$ kg/L and $11.4$ kg/L. Predicted mass $9.5(7.6)+6(11.4)=72.2+68.4=140.6$ kg against recorded $147.0$ kg. The $6.4$ kg gap is $6.4/147 \\approx 4.35\\%$ of the recorded total, which exceeds $4\\%$.

Using $6.4/140.6 \\approx 4.55\\%$ against the prediction would still pass $4\\%$. Working from the isolated values, $6.4/140.6 \\approx 4.55\\%$ is the figure that is checked, not the detour that produced $4\\%$. Skipping the gallon conversion and treating $2.5$ gal as $2.5$ L would predict $2.5(7.6)+6(11.4)=19+68.4=87.4$, a huge gap, and would still pass $4\\%$ but for the wrong predicted mass. After isolating the unknown, the check is against $2.5$. The figure $4\\%$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $2.5$ stays in the write-up. The conversion $9.5$ L is what makes the discrepancy a modest $6.4$ kg rather than a catastrophic miss.

This is the inconsistent third row with a relative-error cutoff. The $4\\%$ bar is the claim's window. The $4.35\\%$ figure clears it. If the recorded mass had been $142.0$ kg, the gap would have been $1.4$ kg, about $1\\%$, and the claim would have failed.

so the statement is True.`,
      `**D) If Batch 3's actual Metal A volume were 10 L rather than the converted 9.5 L (Metal B unchanged at 6 L), the predicted mass would come within 2 kg of the recorded 147.0 kg.**  (false)

The statement replaces Batch 3's converted $9.5$ L of Metal A with $10$ L, Metal B unchanged at $6$ L, and claims the predicted mass would come within $2$ kg of the recorded $147.0$ kg.

**1.** Predicted mass at $10$ L of A:

$$10(7.6) + 6(11.4) = 76 + 68.4 = 144.4$$

**2.** Distance to $147.0$:

$$|144.4 - 147.0| = 2.6$$

Then $2.6$ is not within $2$ kg. The extra $0.5$ L of A adds $3.8$ kg to the original prediction $140.6$, landing at $144.4$, still $2.6$ kg light of the recorded $147.0$.

Using $10$ L of B instead would get $9.5(7.6)+10(11.4)=72.2+114=186.2$, far from $147$. So the letter reads the claim against $10$; $147$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $10$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The claim changes Metal A.

The $10$ L prediction is $144.4$ kg, $2.6$ kg from $147.0$, not within $2$ kg, Replacing Batch 3's converted $9.5$ L of A with $10$ L adds $0.5 \\times 7.6=3.8$ kg to the $140.6$ prediction, landing at $144.4$ kg. Distance to recorded $147.0$ is $2.6$ kg, which is not within $2$ kg. The extra half litre of A closes part of the audit gap but not enough.

Using $10$ L of B instead would add $4 \\times 11.4=45.6$ kg and overshoot $147$ badly. After isolating the unknown, the check is against $10$. The figure $147$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $10$ stays in the write-up. The claim changes Metal A, the converted column. Comparing $144.4$ with $140.6$ rather than with $147.0$ would be measuring the increment, $3.8$ kg, which is not the recorded-gap test. That is the fork: $144.4$ belongs to the recovered isolation, $3.8$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does.

To come within $2$ kg of $147.0$ the prediction would need to sit between $145.0$ and $149.0$. At $10$ L of A it sits at $144.4$, still $0.6$ kg outside that window. The recovered densities plus $6$ L of B pin that $144.4$.

so the statement is False.`,
      `**E) Combining Batch 1 and Batch 2 into a single hypothetical batch (17 L Metal A + 23 L Metal B) would yield a total mass equal to the sum of their individual masses.**  (true)

The statement claims combining Batch 1 and Batch 2 into one hypothetical batch would yield a total mass equal to the sum of their individual masses. Combined volumes are $12+5=17$ L of A and $8+15=23$ L of B. At fixed densities, mass is linear in volume.

**1.** Combined mix at recovered densities:

$$17 \\times 7.6 + 23 \\times 11.4 = 129.2 + 262.2 = 391.4$$

**2.** Sum of printed masses:

$$182.4 + 209.0 = 391.4$$

**3.** The figures match. There is no mixing loss in the model. Averaging the two densities and applying that average to $40$ L would generally miss $391.4$, because the combined mix is not a $50/50$ blend. So the letter reads the claim against $40$; $50/50$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $40$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The trap figure is a $50/50$ average of $7.6$ and $11.4$, which is $9.5$ kg/L times $40$ L $=380$ kg, short of $391.4$.

Batch 3's recorded $147$ kg is an audit row and is not pooled here. The opposite verdict would need a nonlinear mixing rule the stem does not state.

Combined mass equals the sum $391.4$ kg, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 50,
    solution_overview: `Meridian Alloys blends molten Metal A and Metal B, each with a fixed mass-per-liter figure. A third batch's Metal A volume was logged in US gallons and converted to liters (2.5 gal ≈ 9.5 L).

**Part 1: Building the system.**

Let $x$ = mass per liter of Metal A (kg/L), $y$ = mass per liter of Metal B (kg/L).

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Batch 1.** That observation becomes:

$$
12x + 8y = 182.4
$$

**2. Translate: Batch 2.** That observation becomes:

$$
5x + 15y = 209.0
$$

**Part 2: The model.**

$$
12x + 8y = 182.4 \\tag{1}
$$

$$
5x + 15y = 209.0 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Batch 1 by 4 and Batch 2 by 5:

$$
3x + 2y = 45.6, \\qquad x + 3y = 41.8 \\Rightarrow x = 41.8 - 3y
$$

**2.** Substitute into the first simplified equation:

$$
3(41.8 - 3y) + 2y = 45.6 \\Rightarrow 125.4 - 9y + 2y = 45.6
$$

$$
-7y = 45.6 - 125.4 = -79.8 \\Rightarrow y = \\frac{79.8}{7} = 11.4
$$

**3.** Substitute $y = 11.4$ back:

$$
x = 41.8 - 3(11.4) = 41.8 - 34.2 = 7.6
$$

**4.** Audit Batch 3:

$$
9.5(7.6) + 6(11.4) = 72.2 + 68.4 = 140.6
$$

versus 147.0 kg recorded, a 6.4 kg discrepancy.

**Answer.** Metal A = 7.6 kg/L | Metal B = 11.4 kg/L | Batch 3 predicted = 140.6 kg (vs. 147.0 kg recorded)`,
  },
  {
    id: `math-5-51`,
    case_id: `MATH 5.51`,
    title: `Halcyon Ventures  -  Fee Structure Reconstruction from Client Differentials`,
    context: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is \\$600,000, fee \\$10,800. Client 1's AUM exceeds Client 2's by \\$150,000 and pays \\$2,400 more in total fees. The flat retainer is identical for every client, so it cancels out of any fee-difference comparison.`,
    statements: [
      `A client with AUM of \\$850,000 would pay a fee representing less than 1.75% of their AUM.`,
      `The flat retainer accounts for more than 10% of Client 2's total fee.`,
      `If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM \\$750,000) would decrease compared to its actual amount.`,
      `The percentage-point difference in effective fee rate between Client 1 and Client 2 is more than 0.05 percentage points.`,
      `A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A) A client with AUM of \\$850,000 would pay a fee representing less than 1.75% of their AUM.**  (true)

The statement costs a client with AUM of $\\$850{,}000$ and claims the fee is less than $1.75\\%$ of that AUM.

The overview already recovered a $1.6\\%$ rate plus a $\\$1{,}200$ retainer. The extra arithmetic is evaluating that rule and dividing.

**1.** Fee on $\\$850{,}000$:

$$0.016 \\times 850000 + 1200 = 13600 + 1200 = 14800$$

**2.** Effective rate:

$$\\frac{14800}{850000} \\approx 0.017412$$

about $1.741\\%$, which is less than $1.75\\%$. The retainer adds $1200/850000 \\approx 0.141$ percentage points on top of $1.6\\%$, and that bump is not enough to reach $1.75\\%$ at this AUM.

Omitting the retainer would report $1.6\\%$ and still pass the cutoff, so that error would not flip the verdict. Keeping $1.6\\%$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Using $1.75\\%$ of $850{,}000=14875$ as the fee would be answering a different rule. Working from the isolated values, $1.75\\%$ is the figure that is checked, not the detour that produced $850{,}000=14875$.

The $\\$850{,}000$ client pays about $1.741\\%$ effective, less than $1.75\\%$, so the statement is True.`,
      `**B) The flat retainer accounts for more than 10% of Client 2's total fee.**  (true)

The statement claims Halcyon's flat retainer is more than $10\\%$ of Client 2's total fee. Client 2's fee is printed at $\\$10{,}800$ on $\\$600{,}000$ of AUM. The retainer is the leftover after the $1.6\\%$ rate is taken out.

The overview recovered the retainer $y = 1200$. The extra arithmetic is only that share of Client 2's printed fee. This letter does not rebuild Client 1.

**1.** Divide the recovered retainer by Client 2's total:

$$\\frac{1200}{10800} \\approx 0.1111$$

**2.** About $11.1\\%$ exceeds $10\\%$. Ten percent of $\\$10{,}800$ is $\\$1{,}080$, and $\\$1{,}200$ sits $\\$120$ above that line.

Using Client 1's $\\$13{,}200$ as the denominator would get about $9.1\\%$ and fail the cutoff. The opposite verdict would need a different isolation than $9.1\\%$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The claim names Client 2. Dividing $\\$1{,}200$ by AUM, $1200/600000=0.002$, would report $0.2\\%$ and miss the cutoff in the other direction. The recovered comparison therefore keeps $1200/600000=0.002$ and does not substitute $0.2\\%$.

The opposite verdict would need a retainer of $\\$1{,}080$ or less. With $y=1200$ recovered from Client 2's total, the retainer is about $11\\%$ of Client 2's fee, more than $10\\%$, so the statement is True.`,
      `**C) If the fee rate were reduced by 0.2 percentage points (to 1.4%) while the retainer doubled, Client 1's total fee (AUM \\$750,000) would decrease compared to its actual amount.**  (true)

The statement cuts the fee rate by $0.2$ points to $1.4\\%$ and doubles the retainer to $\\$2{,}400$, then claims Client 1's fee (AUM $\\$750{,}000$) would decrease from its actual amount. The overview already recovered rate $1.6\\%$ and retainer $\\$1{,}200$. Actual Client 1 fee is $0.016 \\times 750000 + 1200 = 13200$.

**1.** New fee:

$$0.014 \\times 750000 + 2400 = 10500 + 2400 = 12900$$

**2.** Compare:

$$12900 < 13200$$

**3.** The fee falls by $\\$300$. The rate cut saves $0.002 \\times 750000=1500$, and the doubled retainer costs an extra $1200$, net $-300$. Doubling the retainer without cutting the rate would get $14400$ and see an increase. That is why $14400$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Both changes together are what produce the decrease. The trap figure $\\$14{,}400$ is the doubled retainer alone.

The opposite verdict would need the rate cut's savings to fall at or below the extra retainer. At AUM $\\$750{,}000$, the savings $1500$ exceed the extra $1200$.

Client 1's fee would fall to $\\$12{,}900$, so the statement is True.`,
      `**D) The percentage-point difference in effective fee rate between Client 1 and Client 2 is more than 0.05 percentage points.**  (false)

The statement claims the percentage-point difference in effective fee rate between Client 1 and Client 2 is more than $0.05$ points. Client 1 AUM is $\\$750{,}000$ with fee $\\$13{,}200$. Client 2 AUM is $\\$600{,}000$ with fee $\\$10{,}800$. The extra arithmetic is the two effective rates, then the gap.

**1.** Client 1 effective: $13200/750000=0.0176=1.76\\%$.

**2.** Client 2 effective: $10800/600000=0.0180=1.80\\%$.

**3.** Difference: $0.04$ percentage points, which is not more than $0.05$.

The retainer is a larger share of the smaller AUM, so Client 2's effective rate sits $0.04$ points above Client 1's. Comparing $1.6\\%$ with itself would report a $0$ gap. Working from the isolated values, $1.6\\%$ is the figure that is checked, not the detour that produced $0$. Using $2400/150000=1.6$ extra points on the AUM *gap* would be mixing a difference-of-fees story with effective rates. The recovered isolation is checked against the claim using $2400/150000=1.6$, which is the figure the sessions actually produce. The trap figure $1.6$ points is that gap-rate.

The opposite verdict would need an effective-rate gap above $0.05$ points. With these two AUM levels and a $\\$1{,}200$ retainer, the gap is $0.04$.

The effective-rate gap is $0.04$ points, not more than $0.05$, so the statement is False.`,
      `**E) A client whose AUM is exactly triple Client 2's AUM would pay a total fee more than triple Client 2's fee.**  (false)

The statement triples Client 2's AUM and claims the total fee would be more than triple Client 2's fee.

Triple AUM: $\\$1{,}800{,}000$. Triple of Client 2's fee: $3 \\times 10800=32400$.

**1.** Fee on triple AUM:

$$0.016 \\times 1800000 + 1200 = 28800 + 1200 = 30000$$

**2.** Compare with $32400$:

$$30000 < 32400$$

The fee is *less* than triple, not more. The percentage piece triples, $3 \\times 9600=28800$, but the retainer stays $\\$1{,}200$ instead of becoming $\\$3{,}600$. That $\\$2{,}400$ shortfall is why $30000$ sits below $32400$.

Tripling the whole $10800$ as if the fee were a pure percentage would accept the claim. Once $10800$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The retainer is the whole reason the fee is sublinear.

The $1.8$ million client pays $\\$30{,}000$, which is not more than triple $\\$10{,}800$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 51,
    solution_overview: `Halcyon charges an annual fee equal to a percentage rate on assets under management (AUM), plus a flat retainer. Client 2's AUM is \\$600,000, fee \\$10,800.

**Part 1: Building the system.**

Let $x$ = the percentage fee rate (as a decimal), $y$ = the flat retainer (in dollars).

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Client 2's total fee.** That observation becomes:

$$
600000x + y = 10800
$$

**2. Translate: fee difference / AUM difference  -  retainer cancels.** That observation becomes:

$$
150000x = 2400
$$

**Part 2: The model.**

$$
600000x + y = 10800 \\tag{1}
$$

$$
150000x = 2400 \\tag{2}
$$

**Part 3: Solve.**

**1.** The fee-difference equation already isolates the rate:

$$
150000x = 2400 \\Rightarrow x = \\frac{2400}{150000} = 0.016
$$

(that is $1.6\\%$).

**2.** Substitute into Client 2's total:

$$
600000(0.016) + y = 10800 \\Rightarrow 9600 + y = 10800 \\Rightarrow y = 1200
$$

**Answer.** Fee rate = 1.6% of AUM | Retainer = \\$1,200.00 (Fee = 0.016·AUM + 1200)`,
  },
  {
    id: `math-5-52`,
    case_id: `MATH 5.52`,
    title: `Solventis Labs  -  Multi-Unit Suspension Concentration Reconstruction`,
    context: `Solventis blends two drug suspensions, each with a fixed mg/mL concentration. A third batch's Suspension A volume was logged in liters, then converted to mL.`,
    tables_markdown: `| Batch | Suspension A | Suspension B | Total Content |
| --- | --- | --- | --- |
| Batch 1 | 500 mL | 300 mL | 8,880 mg |
| Batch 2 | 200 mL | 700 mL | 12,600 mg |
| Batch 3 (QC) | 0.32 L (=320 mL) | 450 mL | 9,700 mg (recorded) |`,
    statements: [
      `Suspension B's concentration is more than 85% higher than Suspension A's concentration.`,
      `Batch 3's predicted total content, once its volume is correctly converted to milliliters, differs from the recorded value by more than 1% of the recorded value.`,
      `If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.`,
      `The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.`,
      `Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Suspension B's concentration is more than 85% higher than Suspension A's concentration.**  (true)

The statement claims Suspension B's concentration is more than $85\\%$ higher than Suspension A's. This is a relative-increase comparison. The overview already recovered $A=8.4$ mg/mL and $B=15.6$ mg/mL. Batch 3's $8$ mg audit discrepancy (predicted $9708$ versus recorded $9700$) does not rewrite those concentrations.

**1.** Concentration gap:

$$15.6 - 8.4 = 7.2$$

**2.** Gap over A:

$$\\frac{7.2}{8.4} = \\frac{72}{84} = \\frac{6}{7} \\approx 0.85714$$

**3.** Eighty-five percent of A, as a cutoff gap:

$$0.85 \\times 8.4 = 7.14$$

The actual gap $7.2$ sits $0.06$ mg/mL above $7.14$, so about $85.7\\%$, which exceeds $85\\%$. Equivalently, the cutoff concentration is $1.85 \\times 8.4=15.54$, and recovered $B=15.6$ sits just above that.

Using $15.6/8.4 \\approx 1.857$ and reporting $185.7\\%$ would have forgotten to subtract $1$ from a "higher than" claim. The recovered comparison therefore keeps $15.6/8.4 \\approx 1.857$ and does not substitute $1$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $7.2/15.6 \\approx 46.2\\%$ against B would fail the cutoff. The opposite verdict would need a different isolation than $7.2/15.6 \\approx 46.2\\%$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The trap figure $185.7\\%$ is the ratio left as a multiple. Another trap is Batch 2's volume share $700/900$ treated as a concentration ratio.

The opposite verdict would need $B \\le 15.54$. Recovered $B=15.6$.

B is about $85.7\\%$ higher than A, more than $85\\%$, so the statement is True.`,
      `**B) Batch 3's predicted total content, once its volume is correctly converted to milliliters, differs from the recorded value by more than 1% of the recorded value.**  (false)

The statement claims Batch 3's predicted total, after converting $0.32$ L to millilitres, differs from the recorded $9{,}700$ mg by more than $1\\%$ of the recorded value.

The overview already predicted $9{,}708$ mg against $9{,}700$ recorded.

$$\\frac{|9708 - 9700|}{9700} = \\frac{8}{9700} \\approx 0.000825$$

about $0.082\\%$, which is not more than $1\\%$. The conversion $0.32$ L $=320$ mL is already in the prediction. The audit row is almost consistent; the $8$ mg gap is tiny.

Using $0.32$ L as $32$ mL would wreck the prediction and manufacture a huge gap. The stem's recovered values line up with $0.32$, whereas $32$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $0.32$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Comparing $9708$ with $1\\%$ of $9700=97$ would see that $8<97$ directly. The recovered comparison therefore keeps $9708$ and does not substitute $8<97$. That contrast is the reason the verdict goes the way it does.

The relative gap is about $0.08\\%$, not more than $1\\%$, Batch 3 is the QC row, with Suspension A logged as $0.32$ L and converted to $320$ mL. Batches 1 and 2 recovered $8.4$ and $15.6$ mg/mL. Predicted content $320(8.4)+450(15.6)=2688+7020=9708$ mg against recorded $9700$ mg. The $8$ mg gap is $8/9700 \\approx 0.082\\%$ of the recorded value, far below $1\\%$.

Using $0.32$ L as $32$ mL would predict $32(8.4)+450(15.6)=268.8+7020=7288.8$, a $25\\%$ miss, and would accept "more than $1\\%$." So the letter reads the claim against $0.32$; $1\\%$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $0.32$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.The conversion to $320$ mL is the extra arithmetic that makes the audit almost clean. Close is not "more than $1\\%$"; it is $0.08\\%$.

This is an inconsistent third row that is *almost* consistent. Letter B asks whether the relative gap exceeds $1\\%$, and it does not. If the recorded value had been $9{,}500$ mg, the gap would have been $208$ mg, about $2.2\\%$, and the claim would have been true.

so the statement is False.`,
      `**C) If Batch 1's Suspension B volume were doubled (Suspension A unchanged at 500 mL), the new total content would exceed 13,500 mg.**  (true)

The statement doubles Batch 1's Suspension B volume, A unchanged at $500$ mL, and claims the new total content would exceed $13{,}500$ mg.

Batch 1 is $500$ mL of A and $300$ mL of B at $8{,}880$ mg. Doubling B to $600$ mL adds $300 \\times 15.6$.

**1.** Extra B content:

$$300 \\times 15.6 = 4680$$

**2.** New total:

$$8880 + 4680 = 13560$$

**3.** Compare with $13500$:

$$13560 > 13500$$

Directly: $500(8.4)+600(15.6)=4200+9360=13560$. Doubling A instead would add $500 \\times 8.4=4200$ and get $13080$, which does not exceed $13500$ and would flip the verdict. After isolating the unknown, the check is against $500 \\times 8.4=4200$. The figure $13500$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $500 \\times 8.4=4200$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The doubled-B batch holds $13{,}560$ mg, which exceeds $13{,}500$ mg, Doubling Batch 1's B volume from $300$ mL to $600$ mL, A held at $500$ mL, adds $300 \\times 15.6=4680$ mg to the printed $8880$, producing $13560$, sixty milligrams over $13500$. That sixty is tight. Using A's concentration on the extra $300$ mL would add $2520$ and produce $11400$, under the bar, flipping the verdict. The extra millilitres are B.

Doubling both volumes would get $17760$ and still exceed $13500$, so that error would not flip the inequality, but it would be a different mix. So the letter reads the claim against $17760$; $13500$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $17760$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The claim doubles B only. This is a new mix built from Batch 1 by one column change, the way extra paperbacks or extra Wheat tonnes were one-column increments earlier in the chapter.

If B had been $15.0$ mg/mL, the extra $300$ mL would add $4500$ and the new total would be $13380$, under $13500$. The recovered $15.6$ is what pushes $13560$ over the bar.

so the statement is True.`,
      `**D) The combined total content of Batch 1 and Batch 2, if pooled, would be less than twice Batch 2's total content alone.**  (true)

The statement claims the pooled content of Batch 1 and Batch 2 is less than twice Batch 2's content alone. Batch 1 printed $8880$ mg. Batch 2 printed $12600$ mg. Concentrations are not re-solved. This is a comparison of printed contents, with one extra doubling.

**1.** Pooled content:

$$8880 + 12600 = 21480$$

**2.** Twice Batch 2:

$$2 \\times 12600 = 25200$$

**3.** Gap by which the pool undershoots the double:

$$25200 - 21480 = 3720$$

which is exactly Batch 2 minus Batch 1: $12600-8880=3720$. Equivalently, Batch 1 is smaller than Batch 2, so Batch 1 plus Batch 2 is less than two times Batch 2.

Pooling all three batches, $21480+9700=31180$, would overshoot $25200$ and flip the verdict. The recovered comparison therefore keeps $21480+9700=31180$ and does not substitute $25200$. That contrast is the reason the verdict goes the way it does. The trap figure $9700$ is Batch 3's recorded content mixed into a two-batch claim. Doubling Batch 1 instead, $2 \\times 8880=17760$, would find the pool $21480$ *larger* than that double and would answer a different comparison. Working from the isolated values, $2 \\times 8880=17760$ is the figure that is checked, not the detour that produced $21480$.

The opposite verdict would need Batch 1 to meet or exceed Batch 2. With $8880 < 12600$, the pooled total is less than twice Batch 2. Predicted Batch 3 $9708$ is not in this pool.

Pooled $21{,}480$ mg is less than twice Batch 2's $12{,}600$ mg, so the statement is True.`,
      `**E) Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.**  (true)

The statement claims Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did. This is a volume-share comparison. Concentrations $8.4$ and $15.6$ do not enter, and neither do the milligram totals. Batch 2 is $200$ mL A and $700$ mL B. Batch 3 is $0.32$ L A, already converted in the table as $320$ mL, and $450$ mL B.

**1.** Batch 2's B-share:

$$\\frac{700}{200+700} = \\frac{700}{900} = \\frac{7}{9} \\approx 0.7778$$

**2.** Batch 3's B-share:

$$\\frac{450}{320+450} = \\frac{450}{770} = \\frac{45}{77} \\approx 0.5844$$

**3.** Compare:

$$0.7778 > 0.5844$$

The gap is about $19.3$ percentage points. Batch 1's B-share $300/800=0.375$ is even leaner on B, but the claim names Batch 2 versus Batch 3.

Using $0.32$ L unconverted as $0.32$ mL would get Batch 3's share $450/450.32 \\approx 1$ and would scramble the comparison. So the letter reads the claim against $0.32$; $450/450.32 \\approx 1$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $0.32$ stays in the write-up. The trap figure is that unconverted $0.32$. Comparing B *millilitres* $700$ vs $450$ without dividing by each batch's total would still find Batch 2 larger, but that is a volume comparison, not a proportion comparison. The recovered comparison therefore keeps $700$ and does not substitute $450$. That contrast is the reason the verdict goes the way it does. The claim is proportion.

The opposite verdict would need Batch 2 to be leaner on B than Batch 3. With $700$ of $900$ mL as B, Batch 2 is the B-heavier mix.

Batch 2's B-share about $78\\%$ exceeds Batch 3's about $58\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 52,
    solution_overview: `Solventis blends two drug suspensions, each with a fixed mg/mL concentration. A third batch's Suspension A volume was logged in liters, then converted to mL.

**Part 1: Building the system.**

Let $x$ = mg/mL concentration of Suspension A, $y$ = mg/mL concentration of Suspension B.

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Batch 1.** That observation becomes:

$$
500x + 300y = 8880
$$

**2. Translate: Batch 2.** That observation becomes:

$$
200x + 700y = 12600
$$

**Part 2: The model.**

$$
500x + 300y = 8880 \\tag{1}
$$

$$
200x + 700y = 12600 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Batch 1 by 100 and Batch 2 by 100:

$$
5x + 3y = 88.8, \\qquad 2x + 7y = 126
$$

**2.** Multiply the first by 7 and the second by 3 so the $y$ coefficients both become $21y$:

$$
35x + 21y = 621.6, \\qquad 6x + 21y = 378
$$

**3.** Subtract:

$$
(35x + 21y) - (6x + 21y) = 621.6 - 378
$$

$$
29x = 243.6 \\Rightarrow x = \\frac{243.6}{29} = 8.4
$$

**4.** Substitute $x = 8.4$ into $2x + 7y = 126$:

$$
2(8.4) + 7y = 126 \\Rightarrow 16.8 + 7y = 126 \\Rightarrow 7y = 109.2 \\Rightarrow y = 15.6
$$

**5.** Audit Batch 3 ($0.32$ L $= 320$ mL of A):

$$
320(8.4) + 450(15.6) = 2688 + 7020 = 9708
$$

versus 9,700 mg recorded, an 8 mg discrepancy.

**Answer.** Suspension A = 8.4 mg/mL | Suspension B = 15.6 mg/mL | Batch 3 predicted = 9,708 mg (vs. 9,700 mg recorded)`,
  },
  {
    id: `math-5-53`,
    case_id: `MATH 5.53`,
    title: `Ridgeline Construction  -  Waste-Adjusted Material Cost Reconstruction`,
    context: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall. Job 1 needed 200 usable studs + 150 usable sheets, invoice \\$7,164.00. Job 2 needed 350 usable studs + 175 usable sheets, invoice \\$8,946.00.`,
    statements: [
      `The total waste-related cost on Invoice 1 exceeds \\$700.00.`,
      `If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than \\$150.00.`,
      `Job 2's usable-material cost is more than 90% of Invoice 2's actual as-ordered total.`,
      `The drywall price (y) is more than 8 times the stud price (x).`,
      `Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.`,
    ],
    answer_key: [false, true, true, true, true],
    tactical_explanations: [
      `**A) The total waste-related cost on Invoice 1 exceeds \\$700.00.**  (false)

The statement claims the total waste-related cost on Invoice 1 exceeds $\\$700$.

Job 1 needed $200$ usable studs and $150$ usable sheets. Waste is $12\\%$ extra studs and $8\\%$ extra drywall, so $24$ extra studs and $12$ extra sheets. The overview already recovered stud $\\$4.50$ and drywall $\\$38$.

**1.** Waste studs:

$$24 \\times 4.50 = 108$$

**2.** Waste drywall:

$$12 \\times 38 = 456$$

**3.** Combined waste cost:

$$108 + 456 = 564$$

Then $564 > 700$ is false. Waste on Invoice 1 is $\\$564$, $\\$136$ short of $\\$700$. Using $12\\%$ of the whole invoice $0.12 \\times 7164 \\approx 860$ would accept the claim by applying stud waste to drywall dollars too. That is the fork: $12\\%$ belongs to the recovered isolation, $0.12 \\times 7164 \\approx 860$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does.

Invoice 1's waste costs $\\$564$, which does not exceed $\\$700$, so the statement is False.`,
      `**B) If the drywall waste allowance were reduced from 8% to 5% (stud waste unchanged), Invoice 2's total would decrease by more than \\$150.00.**  (true)

The statement cuts drywall waste from $8\\%$ to $5\\%$, stud waste unchanged, and claims Invoice 2's total would decrease by more than $\\$150$.

Job 2 needed $175$ usable sheets. At $8\\%$ waste: $14$ extra sheets. At $5\\%$: $8.75$ extra sheets. The drop is $5.25$ sheets at $\\$38$.

$$5.25 \\times 38 = 199.50$$

Then $199.50 > 150$. Stud waste is unchanged, so it does not enter the decrement. Also cutting stud waste would overstate the saving. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Using $3\\%$ of $175$ as $5.25$ of usable rather than of extra would still get the same $5.25$ sheet drop, because $8\\%-5\\%=3\\%$ of $175$. After isolating the unknown, the check is against $3\\%$. The figure $8\\%-5\\%=3\\%$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $3\\%$ stays in the write-up.

Invoice 2 would fall by $\\$199.50$, which is more than $\\$150$, so the statement is True.`,
      `**C) Job 2's usable-material cost is more than 90% of Invoice 2's actual as-ordered total.**  (true)

The statement claims Job 2's usable-material cost is more than $90\\%$ of Invoice 2's as-ordered total. The overview already recovered studs at $\\$4.50$ and drywall at $\\$38$. Usable Job 2 is $350$ studs and $175$ sheets. Invoice 2 printed $\\$8{,}946$. Waste is $12\\%$ extra studs and $8\\%$ extra drywall, already inside that invoice. This letter costs the usable basket, then divides by the printed invoice.

**1.** Usable cost:

$$350 \\times 4.50 + 175 \\times 38 = 1575 + 6650 = 8225$$

**2.** Share of invoice:

$$\\frac{8225}{8946} \\approx 0.9194$$

**3.** Waste dollars, as a check:

$$8946 - 8225 = 721$$

and $721/8946 \\approx 0.0806$, so waste is about $8.1\\%$ of the invoice and usable is about $91.9\\%$, which exceeds $90\\%$. Ninety percent of $\\$8{,}946$ is $\\$8{,}051.40$, and usable $\\$8{,}225$ sits $\\$173.60$ above that cutoff.

Using Job 1's $6600/7164 \\approx 92.1\\%$ would still pass $90\\%$, but the claim names Job 2. So the letter reads the claim against $6600/7164 \\approx 92.1\\%$; $90\\%$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $6600/7164 \\approx 92.1\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The trap is mixing Job 1's waste share into Job 2. Another trap is treating waste as $12\\%$ of the whole invoice because stud waste is $12\\%$; drywall waste is only $8\\%$, and drywall dollars dominate Job 2, so the blended waste share is nearer $8\\%$ than $12\\%$.

The opposite verdict would need usable cost at or below $\\$8{,}051.40$. With $8225$, the share is $91.9\\%$.

Usable material is about $91.9\\%$ of Invoice 2, more than $90\\%$, so the statement is True.`,
      `**D) The drywall price (y) is more than 8 times the stud price (x).**  (true)

The statement claims Ridgeline's drywall price is more than $8$ times the stud price. Both prices are recovered leftovers after waste allowances were folded into the invoices. This letter does not rebuild Job 1's waste dollars.

The overview recovered $x = 4.50$ for a stud and $y = 38$ for a drywall sheet. The extra arithmetic is the ratio of those two leftovers.

**1.** Form the ratio:

$$\\frac{38}{4.50} \\approx 8.444$$

**2.** Then $8.444 > 8$. Equivalently, eight studs cost $8 \\times 4.50 = 36$, and one sheet at $\\$38$ costs $\\$2$ more than that bundle.

Using $38/4=9.5$ after dropping the fifty cents would still pass $8$, but the honest denominator is $4.50$. Working from the isolated values, $38/4=9.5$ is the figure that is checked, not the detour that produced $4.50$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Comparing waste-inflated invoice averages would mix $12\\%$ extra studs and $8\\%$ extra sheets into the ratio. The recovered comparison therefore keeps $12\\%$ and does not substitute $8\\%$.

A ratio of $8$ exactly would have needed drywall at $\\$36$, two dollars below the recovered sheet price. With $y=38$ and $x=4.50$, drywall is more than $8$ times a stud.

Drywall at $\\$38$ is more than $8$ times $\\$4.50$, so the statement is True.`,
      `**E) Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.**  (true)

The statement claims Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.

Job 1 usable $6600$, waste $564$, so $564/6600 \\approx 8.545\\%$. Job 2 usable $8225$, waste $721$, so $721/8225 \\approx 8.766\\%$. Then $8.545 < 8.766$.

Job 2 has the higher stud-to-sheet count ratio, $350/175=2$ versus Job 1's $200/150 \\approx 1.33$, and studs carry the higher waste rate of $12\\%$ against drywall's $8\\%$. That mix difference is why Job 2's waste percentage of usable cost sits slightly higher. The arithmetic already shows Job 1's percentage is smaller.

Comparing dollar waste $564$ and $721$ without dividing by usable cost would still find Job 1 smaller, but that is not a percentage of usable cost. After isolating the unknown, the check is against $564$. The figure $721$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $564$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

Job 1's waste add-on about $8.55\\%$ is smaller than Job 2's about $8.77\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 53,
    solution_overview: `Ridgeline prices lumber studs and drywall sheets at fixed unit prices. Every order includes a waste allowance beyond the usable amount: 12% extra studs, 8% extra drywall.

**Part 1: Building the system.**

Let $x$ = price per stud, $y$ = price per drywall sheet. The ordered (waste-inflated) quantities must be computed from the usable amounts before any pricing model can be built.

Waste allowances change how many units are purchased relative to usable amounts; the equations follow the as-ordered quantities that actually appear on the invoice.

**1. Translate: Job 1: 200×1.12=224 studs, 150×1.08=162 sheets.** That observation becomes:

$$
224x + 162y = 7164
$$

**2. Translate: Job 2: 350×1.12=392 studs, 175×1.08=189 sheets.** That observation becomes:

$$
392x + 189y = 8946
$$

**Part 2: The model.**

$$
224x + 162y = 7164 \\tag{1}
$$

$$
392x + 189y = 8946 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Job 1 by $1.75$ so its stud coefficient matches Job 2's $392x$ ($224 \\times 1.75 = 392$):

$$
1.75(224x + 162y) = 1.75(7164) \\Rightarrow 392x + 283.5y = 12537
$$

**2.** Subtract Job 2:

$$
(392x + 283.5y) - (392x + 189y) = 12537 - 8946
$$

$$
94.5y = 3591 \\Rightarrow y = \\frac{3591}{94.5} = 38.00
$$

**3.** Substitute $y = 38$ into Job 1:

$$
224x + 162(38) = 7164 \\Rightarrow 224x + 6156 = 7164
$$

$$
224x = 1008 \\Rightarrow x = 4.50
$$

**Answer.** Stud price = \\$4.50 | Drywall sheet price = \\$38.00`,
  },
  {
    id: `math-5-54`,
    case_id: `MATH 5.54`,
    title: `Precision Dynamics  -  Sensor Calibration Curve Reconstruction`,
    context: `A sensor's raw reading converts to a true value via True Value = (scale factor)×(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check.`,
    tables_markdown: `| Point | Reading | Reference True Value | Role |
| --- | --- | --- | --- |
| Point 1 | 12.4 | 56.90 | Calibration |
| Point 2 | 31.7 | 124.45 | Calibration |
| Point 3 | 45.0 | 172.20 | Verification (recorded) |`,
    statements: [
      `The scale factor exceeds 3.4 by more than 2.5%.`,
      `If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.`,
      `The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.`,
      `The percentage increase in true value between Point 1 and Point 2 is more than 100%.`,
      `A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) The scale factor exceeds 3.4 by more than 2.5%.**  (true)

The statement claims the scale factor exceeds $3.4$ by more than $2.5\\%$. The overview already recovered scale $3.50$ and offset $13.50$. The offset does not enter a claim about the scale alone. The extra arithmetic is the relative gap above $3.4$.

**1.** Gap above $3.4$:

$$3.50 - 3.40 = 0.10$$

**2.** Relative to $3.4$:

$$\\frac{0.10}{3.40} \\approx 0.02941$$

**3.** Two-and-a-half percent of $3.4$:

$$0.025 \\times 3.40 = 0.085$$

The actual gap $0.10$ sits $0.015$ above $0.085$, so about $2.94\\%$, which exceeds $2.5\\%$. Equivalently, the cutoff scale is $3.4 \\times 1.025=3.485$, and recovered $3.50$ sits $0.015$ above that.

Using $0.10/3.50 \\approx 2.86\\%$ against the scale itself would still pass $2.5\\%$, but that is a different base. Working from the isolated values, $0.10/3.50 \\approx 2.86\\%$ is the figure that is checked, not the detour that produced $2.5\\%$. Treating $3.50-3.4=0.10$ as if $0.10$ were already $2.5\\%$ of something would mix a difference with a relative gap. After isolating the unknown, the check is against $3.50-3.4=0.10$. The figure $2.5\\%$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $3.50-3.4=0.10$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The trap figure $0.10$ is the raw gap, not a percent. Point 3's verification discrepancy does not rewrite the recovered scale.

The opposite verdict would need scale at or below $3.485$. Recovered $3.50$ sits above that.

The scale $3.50$ exceeds $3.4$ by about $2.94\\%$, more than $2.5\\%$, so the statement is True.`,
      `**B) If the offset were doubled (scale factor unchanged), the predicted true value at a reading of 20 would exceed 95.**  (true)

The statement doubles the offset, holds the scale, and claims the predicted true value at a reading of $20$ would exceed $95$. This is a new-offset counterfactual, not Point 1 or Point 2. The overview already recovered scale $3.50$ and offset $13.50$. New offset is $2 \\times 13.50=27$. Reading $20$ is not a calibration point.

**1.** Scale times the new reading:

$$3.50 \\times 20 = 70$$

**2.** Add the doubled offset:

$$70 + 27 = 97$$

**3.** Compare with $95$:

$$97 > 95$$

The prediction overshoots $95$ by $2$. With the original offset the same reading would be $70+13.50=83.50$, which fails $95$; doubling the offset is what carries the claim.

Doubling the scale instead would get $7 \\times 20 + 13.50=153.50$, still above $95$. After isolating the unknown, the check is against $7 \\times 20 + 13.50=153.50$. The figure $95$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $7 \\times 20 + 13.50=153.50$ stays in the write-up. The trap figure $153.50$ is a doubled scale, not a doubled offset. Using reading $12.4$ from Point 1 would get $3.50 \\times 12.4 + 27=43.4+27=70.4$, which fails $95$ and would flip the verdict. The recovered comparison therefore keeps $12.4$ and does not substitute $95$. That contrast is the reason the verdict goes the way it does. The claim names reading $20$. The verification-check discrepancy at reading $45$ does not rewrite this counterfactual.

The opposite verdict would need $3.50 \\times 20 + 27 \\le 95$, so $97 \\le 95$, which fails.

At reading $20$ with doubled offset the prediction is $97$, which exceeds $95$, so the statement is True.`,
      `**C) The verification check at a reading of 45.0 shows the calibration curve's predicted value exceeding the recorded reference value by more than 1% of the recorded value.**  (false)

The statement claims the verification at reading $45.0$ shows the calibration curve's predicted value exceeding the recorded reference by more than $1\\%$ of the recorded value.

The overview already predicted $171.00$ against a recorded $172.20$.

**1.** Predicted minus recorded:

$$171.00 - 172.20 = -1.20$$

The prediction is *below* the recorded value, not above. "Exceeding" fails on sign.

**2.** Even in absolute terms, $1.20/172.20 \\approx 0.70\\%$, which is not more than $1\\%$.

Using $172.20-171=1.20$ as a positive excess of prediction over recorded would have the sign backwards. That is why $172.20-171=1.20$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The curve undershoots the check point.

The prediction $171.00$ does not exceed $172.20$ by more than $1\\%$, Point 3 is the verification check, not a third calibration point. Points 1 and 2 recovered scale $3.50$ and offset $13.50$. At reading $45.0$ the curve predicts $3.50 \\times 45 + 13.50=171.00$. Recorded reference is $172.20$. The prediction is $1.20$ *below* the recorded value, so it does not exceed it. Even absolutely, $1.20/172.20 \\approx 0.70\\%$, under $1\\%$.

Using $172.20-171$ as a positive excess of prediction over recorded would have the sign backwards. The opposite verdict would need a different isolation than $172.20-171$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. "Exceeding" requires predicted $>$ recorded. Here predicted $<$ recorded. Treating Point 3 as a third calibration point and refit the line would be mixing the verification into the fit, which the table's Role column forbids. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

This is the inconsistent third row on a calibration curve. The $1\\%$ relative bar is the claim's window, and the signed comparison fails before the bar is even applied. If the recorded value had been $169.00$, the prediction $171.00$ would have exceeded it by $2/169 \\approx 1.18\\%$, over $1\\%$, and the claim would have been true. The printed $172.20$ is what keeps predicted below recorded.

so the statement is False.`,
      `**D) The percentage increase in true value between Point 1 and Point 2 is more than 100%.**  (true)

The statement claims the percentage increase in true value between Point 1 and Point 2 is more than $100\\%$. Point 1 true value is $56.90$. Point 2 true value is $124.45$. Scale and offset are not re-solved. A $100\\%$ increase means Point 2 more than doubles Point 1.

**1.** True-value gap:

$$124.45 - 56.90 = 67.55$$

**2.** Gap over Point 1:

$$\\frac{67.55}{56.90} \\approx 1.1863$$

**3.** Double Point 1, as a cutoff:

$$2 \\times 56.90 = 113.80$$

Point 2 is $124.45$, which sits $10.65$ above $113.80$, so the increase is about $118.7\\%$, which exceeds $100\\%$.

Using readings $31.7/12.4 \\approx 2.556$ and reporting a $155.6\\%$ reading increase would be comparing raw readings, also more than $100\\%$ up, but the claim names true values. Working from the isolated values, $31.7/12.4 \\approx 2.556$ is the figure that is checked, not the detour that produced $100\\%$. That contrast is the reason the verdict goes the way it does. The trap figure $155.6\\%$ is the reading ratio's increase. The offset $13.50$ is why true-value growth ($118.7\\%$) is slower than reading growth ($155.6\\%$): a positive intercept makes the output less than proportional to the input.

The opposite verdict would need Point 2 at or below $113.80$. With Point 2 at $124.45$, the increase exceeds $100\\%$.

The true-value increase is about $119\\%$, more than $100\\%$, so the statement is True.`,
      `**E) A reading of 8.0 would produce a predicted true value that is less than half of Point 1's true value (56.90).**  (false)

The statement claims a reading of $8.0$ would produce a predicted true value less than half of Point 1's true value $56.90$. This is a new-reading counterfactual plus a false half-comparison. The overview already recovered scale $3.50$ and offset $13.50$. Half of $56.90$ is $28.45$. Reading $8.0$ is not a calibration point.

**1.** Predicted at reading $8.0$:

$$3.50 \\times 8 + 13.50 = 28 + 13.50 = 41.50$$

**2.** Half of Point 1:

$$56.90 / 2 = 28.45$$

**3.** Compare:

$$41.50 < 28.45$$

is false. The prediction $41.50$ sits $13.05$ *above* half of Point 1, not below it. The offset $13.50$ is almost the entire excess: without the offset the scale piece is $28$, which *would* sit just under $28.45$ and would flip the verdict.

The trap figure $28$ is that offset-free prediction. A through-the-origin rule is the habit of scaling through the origin after seeing "scale factor $3.50$." Another trap is taking half of reading $12.4$, getting $6.2$, then predicting $3.50 \\times 6.2 + 13.50=35.20$, still not below $28.45$. The offset is the whole content of this letter: it keeps a low reading from scaling down as far as a proportional rule would.

The opposite verdict would need $3.50 \\times 8 + 13.50 < 28.45$, so $41.50 < 28.45$, which fails. Point 3's verification row does not rewrite scale or offset.

The prediction at reading $8$ is $41.50$, which is not less than $28.45$, so the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 54,
    solution_overview: `A sensor's raw reading converts to a true value via True Value = (scale factor)×(Reading) + (offset). Two calibration points were recorded against certified standards; a third was an independent verification check.

**Part 1: Building the system.**

Let $x$ = the sensor's scale factor, $y$ = the sensor's offset, so that $\\mathrm{True\\ Value} = x \\cdot (\\mathrm{Reading}) + y$.

**1. Translate: Point 1.** That observation becomes:

$$
12.4x + y = 56.90
$$

**2. Translate: Point 2.** That observation becomes:

$$
31.7x + y = 124.45
$$

**Part 2: The model.**

$$
12.4x + y = 56.90 \\tag{1}
$$

$$
31.7x + y = 124.45 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract Point 1 from Point 2 to cancel the offset $y$:

$$
(31.7x + y) - (12.4x + y) = 124.45 - 56.90
$$

$$
19.3x = 67.55 \\Rightarrow x = \\frac{67.55}{19.3} = 3.50
$$

**2.** Substitute $x = 3.50$ into Point 1:

$$
12.4(3.50) + y = 56.90 \\Rightarrow 43.40 + y = 56.90 \\Rightarrow y = 13.50
$$

**3.** Verification at reading $45.0$:

$$
45.0(3.50) + 13.50 = 157.50 + 13.50 = 171.00
$$

versus recorded 172.20, a $1.20$ discrepancy.

**Answer.** Scale factor = 3.50 | Offset = 13.50 | Verification predicted = 171.00 (vs. 172.20 recorded)`,
  },
  {
    id: `math-5-55`,
    case_id: `MATH 5.55`,
    title: `Meridian Commodities  -  Blended Shipment Price Reconstruction`,
    context: `Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost \\$2,943.20. Shipment 2: 800 kg total, mixed 5:3 Coffee:Cocoa, cost \\$4,555.00.`,
    statements: [
      `Coffee costs more than 25% more per kilogram than Cocoa.`,
      `Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.`,
      `If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual \\$4,555.00.`,
      `The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.`,
      `The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A) Coffee costs more than 25% more per kilogram than Cocoa.**  (true)

The statement claims Coffee costs more than $25\\%$ more per kilogram than Cocoa at Meridian. That is a relative-premium test on the two recovered commodity prices, not a second walk through the blend ratios.

The overview recovered Coffee at $x = 6.20$ per kg and Cocoa at $y = 4.85$ per kg. The extra arithmetic is Coffee's premium over Cocoa, with Cocoa as the base.

**1.** Form the relative gap:

$$\\frac{6.20-4.85}{4.85} = \\frac{1.35}{4.85} \\approx 0.2784$$

**2.** About $27.8\\%$ exceeds $25\\%$. Twenty-five percent of $\\$4.85$ is $\\$1.2125$, and the $\\$1.35$ gap sits above that mark.

Using $1.35/6.20 \\approx 21.8\\%$ against Coffee would fail the cutoff. The path that matches the stem therefore holds $1.35/6.20 \\approx 21.8\\%$ fixed and only then reads the claim. The claim is Coffee's premium over Cocoa, so Cocoa is the base. Comparing shipment totals instead of unit prices would mix the $3:2$ and $5:3$ blends into the premium. So the letter reads the claim against $3:2$; $5:3$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $3:2$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

The opposite verdict would need a Coffee price at or below $1.25 \\times 4.85 = 6.0625$. With $x=6.20$, Coffee is about $27.8\\%$ dearer than Cocoa, more than $25\\%$, so the statement is True.`,
      `**B) Shipment 1's cost attributable to Coffee represents more than 65% of Shipment 1's total cost.**  (true)

The statement claims Shipment 1's Coffee dollars are more than $65\\%$ of that shipment's printed $\\$2{,}943.20$. The mix is $3:2$ Coffee to Cocoa on $520$ kg, so Coffee is three-fifths of the mass. The overview already recovered Coffee at $\\$6.20$/kg and Cocoa at $\\$4.85$/kg. This letter does not rebuild that pair. It only costs the Coffee piece of Shipment 1 and compares it with the printed total.

**1.** Coffee kilograms on Shipment 1:

$$\\frac{3}{5} \\times 520 = 312$$

**2.** Coffee dollars:

$$312 \\times 6.20 = 1934.40$$

**3.** Share of the printed total:

$$\\frac{1934.40}{2943.20} \\approx 0.6572$$

About $65.7\\%$, which exceeds $65\\%$. Cocoa on the same bill is $208 \\times 4.85 = 1008.80$, and $1934.40+1008.80=2943.20$ rebuilds the printed row, so the Coffee share is not a rounding artefact.

Using mass share $3/5=60\\%$ would sit under $65\\%$ and flip the verdict, because Coffee is the dearer commodity: dollars run ahead of kilograms. The recovered comparison therefore keeps $3/5=60\\%$ and does not substitute $65\\%$. The trap figure $60\\%$ is the mass fraction, not the dollar fraction. Costing all $520$ kg at $\\$6.20$ would get $\\$3{,}224$ and a $100\\%$ Coffee story that the mix does not support. The stem's recovered values line up with $520$, whereas $100\\%$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $520$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

The opposite verdict would need Coffee's dollar share at or below $0.65 \\times 2943.20 = 1913.08$. That would take a Coffee price at or below $1913.08/312 \\approx 6.13$. Recovered Coffee is $\\$6.20$. Shipment 2's $5:3$ mix is a different bill and does not rewrite Shipment 1's $312$ kg.

Shipment 1's Coffee dollars are about $65.7\\%$ of $\\$2{,}943.20$, which is more than $65\\%$, so the statement is True.`,
      `**C) If Shipment 2's ratio had instead been 1:1 (400 kg of each) rather than 5:3, its total cost would have been lower than the actual \\$4,555.00.**  (true)

The statement changes Shipment 2 from $5:3$ to $1:1$ at the same $800$ kg, and claims the total cost would be lower than $\\$4{,}555$.

A $1:1$ split is $400$ kg of each.

**1.** Coffee:

$$400 \\times 6.20 = 2480$$

**2.** Cocoa:

$$400 \\times 4.85 = 1940$$

**3.** Combined, then compare with $4555$:

$$2480 + 1940 = 4420$$

Then $4420 < 4555$. Moving mass from Coffee onto Cocoa, the cheaper commodity, lowers the bill by $\\$135$. The actual $5:3$ mix is $500$ kg Coffee and $300$ kg Cocoa; the $1:1$ mix shifts $100$ kg, and $100 \\times (6.20-4.85)=135$.

Using $5:3$ still would report $4555$ and find no decrease. After isolating the unknown, the check is against $5:3$. The figure $4555$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $5:3$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The ratio change is the whole content of this letter.

The $1:1$ shipment costs $\\$4{,}420$, lower than $\\$4{,}555$, so the statement is True.`,
      `**D) The total Cocoa cost across both shipments combined exceeds the total Coffee cost across both shipments combined.**  (false)

The statement claims combined Cocoa dollars across both shipments exceed combined Coffee dollars. That is a two-shipment dollar comparison, not a unit-price comparison. The overview already recovered Coffee at $\\$6.20$/kg and Cocoa at $\\$4.85$/kg. Shipment 1 is $3:2$ on $520$ kg. Shipment 2 is $5:3$ on $800$ kg.

**1.** Cocoa kilograms, then Cocoa dollars:

$$208 + 300 = 508, \\qquad 508 \\times 4.85 = 2463.80$$

**2.** Coffee kilograms, then Coffee dollars:

$$312 + 500 = 812, \\qquad 812 \\times 6.20 = 5034.40$$

**3.** Compare the two dollar piles:

$$2463.80 > 5034.40$$

is false. Coffee dollars are more than double Cocoa dollars. Cocoa is cheaper per kilogram *and* the mixes are Coffee-heavy ($312$ vs $208$, then $500$ vs $300$), so both the price gap and the mass gap push Coffee's dollar total up.

Comparing kilograms $508$ vs $812$ and treating mass as money would still find Cocoa smaller, but comparing unit prices the wrong way, or using only Shipment 1's Cocoa $1008.80$ against Shipment 2's Coffee $3100$, can manufacture a Cocoa-wins story by mixing unmatched rows. Working from the isolated values, $1008.80$ is the figure that is checked, not the detour that produced $3100$. That contrast is the reason the verdict goes the way it does. That is the fork: $508$ belongs to the recovered isolation, $3100$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. The trap figure $\\$2{,}463.80$ is the Cocoa total sitting next to Shipment 1's printed $\\$2{,}943.20$ as if one shipment's Cocoa could beat the other shipment's whole bill.

The opposite verdict would need Cocoa dearer than Coffee, or a Cocoa-heavy mix the stem does not give. With recovered prices and these two ratios, Cocoa cannot overtake Coffee in combined dollars.

Combined Cocoa is $\\$2{,}463.80$ against Coffee's $\\$5{,}034.40$, so Cocoa does not exceed Coffee, so the statement is False.`,
      `**E) The price gap between Coffee and Cocoa (x - y) is less than 30% of Coffee's price.**  (true)

The statement claims the price gap $x-y$ is less than $30\\%$ of Coffee's recovered price. The overview already recovered Coffee $x=6.20$ and Cocoa $y=4.85$. The extra arithmetic is only the gap and the ratio. The two shipment totals are not re-solved.

**1.** Gap:

$$6.20 - 4.85 = 1.35$$

**2.** Gap as a share of Coffee:

$$\\frac{1.35}{6.20} \\approx 0.2177$$

**3.** About $21.8\\%$, which is less than $30\\%$. Thirty percent of Coffee would be $0.30 \\times 6.20 = 1.86$, and the actual gap $1.35$ sits $\\$0.51$ under that cutoff.

Using $1.35/4.85 \\approx 27.8\\%$ against Cocoa would still pass $30\\%$, but the claim names Coffee as the base. So the letter reads the claim against $1.35/4.85 \\approx 27.8\\%$; $30\\%$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $1.35/4.85 \\approx 27.8\\%$ stays in the write-up. Using $6.20/4.85 \\approx 1.278$ and reporting $27.8\\%$ "higher" is answering a different percent-higher letter, not a gap-over-Coffee letter. So the letter reads the claim against $6.20/4.85 \\approx 1.278$; $27.8\\%$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $6.20/4.85 \\approx 1.278$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The trap figure $27.8\\%$ is the gap over Cocoa, or the "higher than" remainder after subtracting $1$ from the price ratio.

The opposite verdict would need a gap of at least $1.86$, so Cocoa at or below $6.20-1.86=4.34$. Recovered Cocoa is $\\$4.85$. Shipment 2's $5:3$ mix does not rewrite those two unit prices.

The gap is about $21.8\\%$ of Coffee, which is less than $30\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 55,
    solution_overview: `Meridian Commodities buys Coffee and Cocoa at fixed prices per kg. Shipment 1: 520 kg total, mixed 3:2 Coffee:Cocoa, cost \\$2,943.20.

**Part 1: Building the system.**

Let $x$ = price per kg of Coffee, $y$ = price per kg of Cocoa. Individual weights within each shipment must be worked out from the total weight and ratio before a pricing model can be built.

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Shipment 1: 520 kg split 3:2 → 312 kg Coffee, 208 kg Cocoa.** That observation becomes:

$$
312x + 208y = 2943.2
$$

**2. Translate: Shipment 2: 800 kg split 5:3 → 500 kg Coffee, 300 kg Cocoa.** That observation becomes:

$$
500x + 300y = 4555
$$

**Part 2: The model.**

$$
312x + 208y = 2943.2 \\tag{1}
$$

$$
500x + 300y = 4555 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Shipment 1 by 8 and Shipment 2 by 100:

$$
39x + 26y = 367.9, \\qquad 5x + 3y = 45.55 \\Rightarrow x = 9.11 - 0.6y
$$

**2.** Substitute into the first simplified equation:

$$
39(9.11 - 0.6y) + 26y = 367.9
$$

$$
355.29 - 23.4y + 26y = 367.9 \\Rightarrow 355.29 + 2.6y = 367.9
$$

$$
2.6y = 12.61 \\Rightarrow y = \\frac{12.61}{2.6} = 4.85
$$

**3.** Substitute $y = 4.85$ back:

$$
x = 9.11 - 0.6(4.85) = 9.11 - 2.91 = 6.20
$$

**Answer.** Coffee = \\$6.20/kg | Cocoa = \\$4.85/kg`,
  },
  {
    id: `math-5-56`,
    case_id: `MATH 5.56`,
    title: `Continental Freight  -  Fleet Fuel Rate Reconstruction`,
    context: `Continental Freight tracks fuel consumption (L per 100 km) for Trucks and Vans. A third route's Truck distance was logged in miles and converted to km (155.3 mi ≈ 250 km).`,
    tables_markdown: `| Route | Truck | Van | Total Fuel |
| --- | --- | --- | --- |
| Route 1 | 850 km | 620 km | 383.6 L |
| Route 2 | 500 km | 900 km | 322.0 L |
| Route 3 (audit) | 155.3 mi (≈250 km) | 400 km | 155.0 L (recorded) |`,
    statements: [
      `Truck fuel consumption is more than 75% higher than Van fuel consumption.`,
      `Route 3's predicted fuel use, once its distance is correctly converted to kilometers, is more than 2% below its recorded value.`,
      `If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.`,
      `Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's individual rate.`,
      `Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A) Truck fuel consumption is more than 75% higher than Van fuel consumption.**  (true)

The statement claims a Truck's litres per $100$ km exceed a Van's by more than $75\\%$ of the Van rate. The overview already recovered Truck $32.0$ L/$100$ km and Van $18.0$ L/$100$ km. Route 3's recorded $155.0$ L is an audit row and does not rewrite those two rates.

**1.** Rate gap:

$$32.0 - 18.0 = 14.0$$

**2.** Gap over the Van:

$$\\frac{14.0}{18.0} \\approx 0.7778$$

**3.** About $77.8\\%$, which exceeds $75\\%$. Seventy-five percent of $18$ is $13.5$, and the actual gap $14$ sits $0.5$ L/$100$ km above that cutoff.

Using $32/18 \\approx 1.778$ and reporting $177.8\\%$ would have forgotten to subtract $1$ from a "higher than" claim. Working from the isolated values, $32/18 \\approx 1.778$ is the figure that is checked, not the detour that produced $1$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Using $14/32=43.75\\%$ against the Truck would fail the cutoff. The path that matches the stem therefore holds $14/32=43.75\\%$ fixed and only then reads the claim. The trap figure $177.8\\%$ is the ratio left as a multiple. Another trap is Route 2's fleet average $322/14=23$ treated as a "truck" rate: $23$ is only about $28\\%$ above $18$.

The opposite verdict would need Truck at or below $18 \\times 1.75=31.5$. Recovered Truck is $32.0$. The mile-to-kilometre conversion on Route 3 does not move these two fleet rates.

Truck consumption is about $77.8\\%$ higher than Van consumption, more than $75\\%$, so the statement is True.`,
      `**B) Route 3's predicted fuel use, once its distance is correctly converted to kilometers, is more than 2% below its recorded value.**  (false)

The statement claims Route 3's predicted fuel, after converting $155.3$ mi to kilometres, is more than $2\\%$ below its recorded value.

The overview already predicted $152.0$ L against a recorded $155.0$ L. The conversion $155.3$ mi $\\approx 250$ km is already in that prediction.

$$\\frac{155.0 - 152.0}{155.0} = \\frac{3}{155} \\approx 0.01935$$

about $1.94\\%$, which is not more than $2\\%$. The prediction is below the recorded value, but shy of a $2\\%$ relative gap.

Using $3/152 \\approx 1.97\\%$ against the prediction would still fail $2\\%$. So the letter reads the claim against $3/152 \\approx 1.97\\%$; $2\\%$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $3/152 \\approx 1.97\\%$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Treating $155.3$ mi as $155.3$ km would wreck the Truck term and manufacture a large gap. The recovered isolation is checked against the claim using $155.3$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The prediction sits about $1.94\\%$ below $155.0$ L, not more than $2\\%$ below, Route 3 is the audit row, with Truck distance logged in miles and converted at $155.3$ mi $\\approx 250$ km. Routes 1 and 2 recovered $32.0$ and $18.0$ L/$100$ km. Predicted fuel $2.50 \\times 32 + 4.00 \\times 18 = 80+72=152.0$ L against recorded $155.0$ L. The $3.0$ L gap is $3/155 \\approx 1.94\\%$ of the recorded value, which is not more than $2\\%$.

Treating $155.3$ mi as $155.3$ km would predict $1.553 \\times 32 + 4 \\times 18 \\approx 49.7+72=121.7$ L, about $21\\%$ below $155$, and would accept "more than $2\\%$." After isolating the unknown, the check is against $155.3$. The figure $2\\%$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $155.3$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.The conversion to $250$ km is the extra arithmetic that makes the relative gap $1.94\\%$ rather than $21\\%$. Close is not "more than $2\\%$ below."

This is the inconsistent third row with a $2\\%$ relative bar. The prediction *is* below the recorded value; the bar is what the claim fails. If the recorded value had been $160$ L, the gap would have been $8/160=5\\%$, over $2\\%$, and the claim would have been true.

so the statement is False.`,
      `**C) If Route 1's Van distance had instead been 900 km (Truck unchanged at 850 km), total fuel would have exceeded 430 L.**  (true)

The statement raises Route 1's Van distance to $900$ km, Truck unchanged at $850$ km, and claims total fuel would exceed $430$ L.

Route 1 printed $383.6$ L. Extra Van distance $900-620=280$ km at $18.0$ L/$100$ km.

**1.** Extra Van fuel:

$$2.80 \\times 18.0 = 50.4$$

**2.** New total:

$$383.6 + 50.4 = 434.0$$

**3.** Compare with $430$:

$$434 > 430$$

Directly: $850 \\times 0.320 + 900 \\times 0.180 = 272 + 162 = 434$. Using $900$ km of Truck instead would add far more fuel and still exceed $430$, so that swap would not flip the verdict, but it would be the wrong vehicle. That is the fork: $900$ belongs to the recovered isolation, $430$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does.

The counterfactual Route 1 uses $434$ L, which exceeds $430$ L, Raising Route 1's Van distance from $620$ km to $900$ km, Truck held at $850$ km, adds $280$ km of Van at $18.0$ L/$100$ km, which is $50.4$ L, producing $383.6+50.4=434.0$ L, four litres over $430$. Using Truck's rate on those extra $280$ km would add $89.6$ L and still exceed $430$, so that swap would not flip the inequality, but it would be the wrong vehicle. The extra kilometres are Van.

Replacing $620$ with $900$ on both columns would be answering a different counterfactual. Working from the isolated values, $620$ is the figure that is checked, not the detour that produced $900$. That contrast is the reason the verdict goes the way it does. This is a one-column increment on Route 1, a new mix built from a logged route. The cutoff $430$ is a round bar; $434$ clears it by four litres. If the Van rate had been $16.0$ L/$100$ km, the extra $280$ km would add $44.8$ L and the new total would be $428.4$, under $430$. The recovered $18.0$ is what pushes $434$ over the bar.

so the statement is True.`,
      `**D) Route 2's fleet-wide average fuel efficiency is closer to the Van's individual rate than to the Truck's individual rate.**  (true)

The statement claims Route 2's fleet-wide average litres per $100$ km sits closer to the Van rate than to the Truck rate. Route 2 is $500$ km Truck and $900$ km Van, printed total $322.0$ L. The overview already recovered Truck $32.0$ and Van $18.0$. The extra arithmetic is the distance-weighted average, then two distances on the number line.

**1.** Combined distance and fleet average:

$$500 + 900 = 1400, \\qquad \\frac{322.0}{14.00} = 23.0$$

(the $14.00$ is $1400$ km written as hundreds of kilometres, matching the L/$100$ km unit). Directly: $322 \\times 100 / 1400 = 23$.

**2.** Distance from $23$ to the Van:

$$23.0 - 18.0 = 5.0$$

**3.** Distance from $23$ to the Truck:

$$32.0 - 23.0 = 9.0$$

Then $5.0 < 9.0$, so the average is closer to the Van. That is not a surprise: $900$ of $1400$ km, about $64\\%$, is Van distance, so the average is pulled toward $18$.

Averaging $32$ and $18$ as an unweighted $25$ would sit $7$ from the Van and $7$ from the Truck and call it a tie. That is the fork: $32$ belongs to the recovered isolation, $7$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $25$ is that unweighted midpoint. Route 2 is not half-and-half. Using litres $500$ vs $900$ as if they were fuel rather than kilometres would also scramble the weights. The recovered comparison therefore keeps $500$ and does not substitute $900$.

The opposite verdict would need the Truck share of Route 2's distance large enough to push the average past the midpoint $25$. With $500$ Truck kilometres out of $1400$, the average is $23$, on the Van side of $25$.

Route 2's $23.0$ L/$100$ km is $5$ from the Van and $9$ from the Truck, so the statement is True.`,
      `**E) Route 1's total fuel use is less than the sum of what each vehicle type would use if it alone covered the full combined distance (850 + 620 = 1,470 km) at its own rate.**  (true)

The statement claims Route 1's total fuel is less than the sum of what each vehicle type would use if it alone covered the full combined distance $1470$ km at its own rate.

**1.** Truck alone on $1470$ km:

$$14.70 \\times 32.0 = 470.4$$

**2.** Van alone on $1470$ km:

$$14.70 \\times 18.0 = 264.6$$

**3.** Sum of those two solo runs, then compare with Route 1's $383.6$:

$$470.4 + 264.6 = 735.0, \\qquad 383.6 < 735.0$$

Route 1 splits $1470$ km across the two types; it does not run both types over the whole distance. The inequality is then immediate: actual fuel is a weighted average of $32$ and $18$, times $1470$ km, which sits between $264.6$ and $470.4$, far below the sum $735$.

Comparing $383.6$ with $470.4$ only would still find $383.6$ smaller, but the claim is against the *sum* of both solo runs. The stem's recovered values line up with $383.6$, whereas $470.4$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $383.6$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

Route 1's $383.6$ L is less than $735$ L, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 56,
    solution_overview: `Continental Freight tracks fuel consumption (L per 100 km) for Trucks and Vans. A third route's Truck distance was logged in miles and converted to km (155.3 mi ≈ 250 km).

**Part 1: Building the system.**

Let $x$ = Truck fuel consumption (L/100km), $y$ = Van fuel consumption (L/100km).

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Route 1, distances in hundreds of km.** That observation becomes:

$$
8.5x + 6.2y = 383.6
$$

**2. Translate: Route 2, distances in hundreds of km.** That observation becomes:

$$
5x + 9y = 322
$$

**Part 2: The model.**

$$
8.5x + 6.2y = 383.6 \\tag{1}
$$

$$
5x + 9y = 322 \\tag{2}
$$

**Part 3: Solve.**

**1.** Multiply Route 1 by 9 and Route 2 by 6.2 so the $y$ coefficients both become $55.8y$:

$$
9(8.5x + 6.2y) = 9(383.6) \\Rightarrow 76.5x + 55.8y = 3452.4
$$

$$
6.2(5x + 9y) = 6.2(322) \\Rightarrow 31x + 55.8y = 1996.4
$$

**2.** Subtract:

$$
(76.5x + 55.8y) - (31x + 55.8y) = 3452.4 - 1996.4
$$

$$
45.5x = 1456 \\Rightarrow x = \\frac{1456}{45.5} = 32.0
$$

**3.** Substitute $x = 32$ into Route 2:

$$
5(32) + 9y = 322 \\Rightarrow 160 + 9y = 322 \\Rightarrow 9y = 162 \\Rightarrow y = 18.0
$$

**4.** Audit Route 3 ($155.3$ mi $\\approx 250$ km $= 2.5$ hundreds of km):

$$
2.5(32) + 4(18) = 80 + 72 = 152
$$

versus 155 L recorded, a 3 L discrepancy.

**Answer.** Truck = 32.0 L/100km | Van = 18.0 L/100km | Route 3 predicted = 152.0 L (vs. 155.0 L recorded)`,
  },
  {
    id: `math-5-57`,
    case_id: `MATH 5.57`,
    title: `Whitmore Scholarship Fund  -  Blended-Return Rate Reconstruction`,
    context: `The \\$45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation (\\$27,000 Bonds, \\$18,000 Equities) returns \\$2,646.00. A proposed reallocation swapping those amounts (\\$18,000 Bonds, \\$27,000 Equities) would return \\$2,754.00.`,
    statements: [
      `The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.`,
      `Under the current allocation, the blended rate is less than 6%.`,
      `If the entire \\$45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns (\\$2,646.00 + \\$2,754.00 = \\$5,400.00).`,
      `A $\\frac{50}{50}$ split (\\$22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.`,
      `The bond rate is more than 80% of the equity rate.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) The equity rate exceeds the bond rate by more than 20% of the bond rate, in relative terms.**  (true)

The statement claims the equity rate exceeds the bond rate by more than $20\\%$ of the bond rate. The overview already recovered the bond rate $5.4\\%$ and the equity rate $6.6\\%$. The two allocation returns $\\$2{,}646$ and $\\$2{,}754$ are not re-solved here. The extra arithmetic is the rate gap and the relative gap.

**1.** Equity minus bond:

$$6.6 - 5.4 = 1.2$$

**2.** Gap over the bond rate:

$$\\frac{1.2}{5.4} \\approx 0.2222$$

**3.** About $22.2\\%$, which exceeds $20\\%$. Twenty percent of $5.4$ is $1.08$ percentage points, and the actual gap $1.2$ sits $0.12$ points above that cutoff.

Using $1.2/6.6 \\approx 18.2\\%$ against equity would fail the cutoff and flip the verdict. The opposite verdict would need a different isolation than $1.2/6.6 \\approx 18.2\\%$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap figure $18.2\\%$ is the gap over the larger rate. Using $6.6/5.4 \\approx 1.222$ and reporting $122\\%$ would have left the ratio as a multiple. So the letter reads the claim against $6.6/5.4 \\approx 1.222$; $122\\%$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $6.6/5.4 \\approx 1.222$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The claim is "more than $20\\%$ of the bond rate, in relative terms," which is the $1.2/5.4$ quotient.

The opposite verdict would need equity at or below $5.4 \\times 1.20 = 6.48\\%$. Recovered equity is $6.6\\%$. Swapping the $\\$27{,}000$ and $\\$18{,}000$ sleeves changes the blended return, not these two sleeve rates.

Equity is about $22.2\\%$ higher than the bond rate, more than $20\\%$ of the bond rate, so the statement is True.`,
      `**B) Under the current allocation, the blended rate is less than 6%.**  (true)

The statement claims the current blended rate is less than $6\\%$. Current allocation is $\\$27{,}000$ in bonds and $\\$18{,}000$ in equities, returning $\\$2{,}646$ on a $\\$45{,}000$ fund. The overview already recovered $5.4\\%$ and $6.6\\%$. This letter does not rebuild those rates. It only divides the printed current return by the fund.

**1.** Blended rate from the printed current return:

$$\\frac{2646}{45000} = 0.0588 = 5.88\\%$$

**2.** Weighted check at recovered rates:

$$\\frac{27000}{45000} \\times 5.4 + \\frac{18000}{45000} \\times 6.6 = 0.6 \\times 5.4 + 0.4 \\times 6.6 = 3.24 + 2.64 = 5.88$$

**3.** Compare with $6\\%$:

$$5.88 < 6$$

The current mix is $60\\%$ bonds, so the blend sits closer to $5.4$ than to $6.6$. Averaging $5.4$ and $6.6$ as an unweighted $6.0\\%$ would sit exactly on the cutoff and might treat "less than $6\\%$" as a tie. The recovered comparison therefore keeps $5.4$ and does not substitute $6\\%$. That contrast is the reason the verdict goes the way it does. The trap figure $6.0\\%$ is that unweighted midpoint. The fund is not $50/50$ today.

The opposite verdict would need the current return at or above $0.06 \\times 45000=2700$. The printed current return is $\\$2{,}646$. The proposed swap return $\\$2{,}754$ is a different mix and is not "current."

The current blend is $5.88\\%$, which is less than $6\\%$, so the statement is True.`,
      `**C) If the entire \\$45,000 were placed in Equities alone, the return would exceed the combined total of both described allocations' returns (\\$2,646.00 + \\$2,754.00 = \\$5,400.00).**  (false)

The statement places the entire $\\$45{,}000$ in equities and claims that all-equity return would exceed the *sum* of the two described allocation returns, $\\$2{,}646+\\$2{,}754=\\$5{,}400$. Those two returns are two alternative mixes of the *same* $\\$45{,}000$, not two separate funds. Adding them double-counts the principal. The overview already recovered equity at $6.6\\%$.

**1.** All-equity return:

$$45000 \\times 0.066 = 2970$$

**2.** The claimed comparison total:

$$2646 + 2754 = 5400$$

**3.** Compare:

$$2970 > 5400$$

is false. The all-equity figure $\\$2{,}970$ sits between the two described returns, as it must: $6.6\\%$ is the top sleeve rate, so a $100\\%$ equity mix beats the current $5.88\\%$ mix and the swapped mix, but it cannot beat the *sum* of two full-fund returns.

Treating $\\$5{,}400$ as "two years of income" or as "both portfolios at once" is the intended trap. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The trap figure $\\$5{,}400$ is that illegal sum. Another wrong route: $45000 \\times 0.066 \\times 2 = 5940$, stacking two years onto all-equity, which still is not the claim, but shows how easy it is to double a return.

The opposite verdict would need an equity rate above $5400/45000=12\\%$, which would be adding the two sleeve rates rather than using one of them. Recovered equity is $6.6\\%$, not $12\\%$.

All-equity income is $\\$2{,}970$, which does not exceed $\\$5{,}400$, so the statement is False.`,
      `**D) A $\\frac{50}{50}$ split (\\$22,500 in each) would produce a blended return exactly equal to the average of the two described allocations' returns.**  (true)

The statement claims a $50/50$ split would produce a blended return equal to the average of the two described allocations' returns.

**1.** Fifty-fifty return:

$$22500 \\times 0.054 + 22500 \\times 0.066 = 1215 + 1485 = 2700$$

**2.** Average of the two described returns:

$$\\frac{2646 + 2754}{2} = 2700$$

The figures match. The two described allocations swap $\\$9{,}000$ between bonds and equities. Their average is the midpoint mix, which is $50/50$ on a $\\$45{,}000$ trust. Linearity of simple interest makes that identity exact.

Averaging the *rates* $5.4$ and $6.6$ as $6\\%$ of $45000=2700$ gets the same number by a different route, which happens to be valid here because $50/50$ is also the unweighted rate average. So the letter reads the claim against $5.4$; $50/50$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $5.4$ stays in the write-up.

The $50/50$ return is $\\$2{,}700$, equal to the average of $\\$2{,}646$ and $\\$2{,}754$, so the statement is True.`,
      `**E) The bond rate is more than 80% of the equity rate.**  (true)

The statement claims the bond rate is more than $80\\%$ of the equity rate. The overview already recovered bond $5.4\\%$ and equity $6.6\\%$. The two allocation dollars $\\$2{,}646$ and $\\$2{,}754$ are not re-solved. The extra arithmetic is the quotient, then a cutoff comparison.

**1.** Bond over equity:

$$\\frac{5.4}{6.6} = \\frac{54}{66} = \\frac{9}{11} \\approx 0.81818$$

**2.** Eighty percent of equity:

$$0.80 \\times 6.6 = 5.28$$

**3.** Compare the bond rate with that cutoff:

$$5.4 > 5.28$$

About $81.8\\%$ of equity, which exceeds $80\\%$. The gap above the cutoff is $0.12$ percentage points.

Using $5.4/6.0=90\\%$ against a round $6\\%$ would overstate the share. After isolating the unknown, the check is against $5.4/6.0=90\\%$. The figure $6\\%$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $5.4/6.0=90\\%$ stays in the write-up. Using $6.6/5.4 \\approx 1.222$ and reporting $122\\%$ is answering letter A's "higher than" story, not a bond-as-a-share-of-equity story. That is the fork: $6.6/5.4 \\approx 1.222$ belongs to the recovered isolation, $122\\%$ belongs to the discarded mix. The trap figure $1.22$ is the inverted ratio. Another trap is using the current blended $5.88\\%$ in the denominator: $5.4/5.88 \\approx 91.8\\%$, which still passes $80\\%$ but is not the equity rate.

The opposite verdict would need bond at or below $5.28\\%$. Recovered bond is $5.4\\%$. The current $60/40$ split does not rewrite the two sleeve rates.

The bond rate is about $81.8\\%$ of the equity rate, more than $80\\%$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 57,
    solution_overview: `The \\$45,000 Whitmore Fund splits between a Bond Portfolio and an Equity Portfolio, each earning its own fixed rate. Current allocation (\\$27,000 Bonds, \\$18,000 Equities) returns \\$2,646.00.

**Part 1: Building the system.**

Let $x$ = Bond Portfolio's annual rate (%), $y$ = Equity Portfolio's annual rate (%).

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: current allocation.** That observation becomes:

$$
270x + 180y = 2646
$$

**2. Translate: proposed reallocation.** That observation becomes:

$$
180x + 270y = 2754
$$

**Part 2: The model.**

$$
270x + 180y = 2646 \\tag{1}
$$

$$
180x + 270y = 2754 \\tag{2}
$$

**Part 3: Solve.**

**1.** Add the two allocation equations:

$$
(270x + 180y) + (180x + 270y) = 2646 + 2754
$$

$$
450x + 450y = 5400 \\Rightarrow x + y = 12
$$

**2.** Subtract the first from the second:

$$
(180x + 270y) - (270x + 180y) = 2754 - 2646
$$

$$
-90x + 90y = 108 \\Rightarrow y - x = 1.2 \\Rightarrow y = x + 1.2
$$

**3.** Substitute into $x + y = 12$:

$$
x + (x + 1.2) = 12 \\Rightarrow 2x + 1.2 = 12 \\Rightarrow 2x = 10.8 \\Rightarrow x = 5.4
$$

Then $y = 5.4 + 1.2 = 6.6$.

**Answer.** Bond rate = 5.4% | Equity rate = 6.6%`,
  },
  {
    id: `math-5-58`,
    case_id: `MATH 5.58`,
    title: `Ashford Mutual Insurance  -  Premium Structure Reconstruction`,
    context: `Ashford prices every policy as a fixed administrative fee plus a rate per \\$1,000 of coverage. A third policy's coverage amount is illegible, but its premium survived.`,
    tables_markdown: `| Policy | Coverage | Premium |
| --- | --- | --- |
| Auto | \\$85,000 | \\$612.50 |
| Home | \\$210,000 | \\$1,197.50 |
| Renters | (illegible) | \\$331.70 |`,
    statements: [
      `The reconstructed Renters coverage amount is less than \\$30,000.`,
      `The fixed administrative fee represents more than 60% of the Auto policy's total premium.`,
      `If the rate per \\$1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than \\$75.00.`,
      `The Home policy's premium per \\$1,000 of coverage is more than twice the Auto policy's premium per \\$1,000 of coverage.`,
      `Combining the Auto and Home coverage into a single hypothetical policy (295 units of \\$1,000 coverage total) would cost less than the sum of their separate premiums (\\$612.50 + \\$1,197.50 = \\$1,810.00).`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A) The reconstructed Renters coverage amount is less than \\$30,000.**  (true)

The statement claims the reconstructed Renters coverage is less than $\\$30{,}000$. The Renters premium survived; the coverage amount was the illegible piece. Auto and Home are the two fully printed policies that pinned the fee and the rate.

The overview reconstructed Renters coverage as $\\$25{,}000$. Then $25000 < 30000$. This letter is a lookup of that reconstruction against a round cutoff. It does not rebuild the $\\$214.70$ fee or the $\\$4.68$ rate.

**1.** The Renters premium $\\$331.70$ minus the fee $214.70$ leaves $117$ of rate.

**2.** Then $117/4.68=25$ thousands of coverage, which is $\\$25{,}000$, and $25{,}000$ sits $\\$5{,}000$ under the $\\$30{,}000$ line.

Using Auto's $\\$85{,}000$ here would fail the cutoff in the other direction. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Treating $\\$331.70$ as if it were already thousands of coverage would report something near $332$ and miss the claim. Once $332$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Forgetting to peel the fee would divide $331.70$ by $4.68$ and overshoot $25$. So the letter reads the claim against $331.70$; $25$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $331.70$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The opposite verdict would need a reconstructed coverage of $\\$30{,}000$ or more. With $C=25$ recovered from the Renters premium, coverage is $\\$25{,}000$, less than $\\$30{,}000$, so the statement is True.`,
      `**B) The fixed administrative fee represents more than 60% of the Auto policy's total premium.**  (false)

The statement claims the fixed administrative fee is more than $60\\%$ of the Auto premium $\\$612.50$. The overview already recovered the fee $\\$214.70$ and the rate $\\$4.68$ per $\\$1{,}000$ of coverage. Auto coverage is $\\$85{,}000$, which is $85$ units.

**1.** Fee share of Auto:

$$\\frac{214.70}{612.50} \\approx 0.3505$$

**2.** Rate dollars on Auto, as a check:

$$85 \\times 4.68 = 397.80, \\qquad 214.70 + 397.80 = 612.50$$

**3.** Sixty percent of Auto:

$$0.60 \\times 612.50 = 367.50$$

Then $214.70$ is about $35\\%$ of Auto, not more than $60\\%$. The fee would have to exceed $\\$367.50$ to pass the cutoff. On Auto, the coverage charge $\\$397.80$ is the larger piece.

Using Home's premium $\\$1{,}197.50$ in the denominator would get $214.70/1197.50 \\approx 17.9\\%$, even smaller. Once $214.70/1197.50 \\approx 17.9\\%$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using Renters $\\$331.70$ would get about $64.7\\%$ and would accept the claim. Keeping $64.7\\%$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap figure $64.7\\%$ is the fee share of *Renters*, the small policy, not of Auto. The claim names Auto.

The opposite verdict would need Auto coverage small enough that $214.70$ is $60\\%$ of the premium, so premium about $\\$357.83$ and coverage charge about $\\$143$, or about $31$ units. Auto is $85$ units.

The fee is about $35\\%$ of the Auto premium, not more than $60\\%$, so the statement is False.`,
      `**C) If the rate per \\$1,000 of coverage increased by 10% (fixed fee unchanged), the Home policy's premium would increase by more than \\$75.00.**  (true)

The statement raises the rate per $\\$1{,}000$ by $10\\%$, holds the fee, and claims Home's premium would rise by more than $\\$75$. Home coverage is $\\$210{,}000$, which is $210$ units. The overview already recovered rate $\\$4.68$ and fee $\\$214.70$. The extra arithmetic is only the rate increment on those $210$ units. The fee cancels out of a change.

**1.** New rate:

$$4.68 \\times 1.10 = 5.148$$

**2.** Extra dollars on Home:

$$210 \\times (5.148 - 4.68) = 210 \\times 0.468 = 98.28$$

**3.** Compare with $\\$75$:

$$98.28 > 75$$

Directly: $10\\%$ of Home's coverage charge $210 \\times 4.68 = 982.80$ is $98.28$. Applying $10\\%$ to the whole Home premium $\\$1{,}197.50$ would get $\\$119.75$, still above $\\$75$, but that wrongly inflates the fee. The recovered comparison therefore keeps $10\\%$ and does not substitute $75$. The trap figure $\\$119.75$ is $10\\%$ of the full premium. Using Auto's $85$ units would get $85 \\times 0.468=39.78$, which fails $\\$75$ and would flip the verdict. The recovered comparison therefore keeps $85$ and does not substitute $85 \\times 0.468=39.78$. The claim names Home.

The opposite verdict would need $210 \\times 0.468 \\le 75$, so a rate increment at or below $75/210 \\approx 0.357$, which would be about a $7.6\\%$ rate rise, not $10\\%$. Renters' reconstructed $\\$25{,}000$ is a different policy.

Home's premium would rise by $\\$98.28$, which exceeds $\\$75$, so the statement is True.`,
      `**D) The Home policy's premium per \\$1,000 of coverage is more than twice the Auto policy's premium per \\$1,000 of coverage.**  (false)

The statement claims the Home policy's premium per $\\$1{,}000$ of coverage is more than twice the Auto policy's premium per $\\$1{,}000$.

**1.** Home per thousand: $1197.50/210 \\approx 5.702$.

**2.** Auto per thousand: $612.50/85 \\approx 7.206$.

**3.** Twice Auto: $14.41$. Then $5.70 > 14.41$ is false, and even $5.70 > 7.21$ is false. Home's *average* premium per thousand is *lower* than Auto's, because the shared fee is spread over more coverage.

Comparing totals $1197.50$ and $2 \\times 612.50=1225$ would find Home slightly smaller, which is a different comparison that also fails "more than twice." Working from the isolated values, $1197.50$ is the figure that is checked, not the detour that produced $2 \\times 612.50=1225$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.using only the rate $4.68$ on both would find them equal. That is why $4.68$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it.

Home's per-thousand premium is about $\\$5.70$, Auto's about $\\$7.21$, so Home is not more than twice Auto, so the statement is False.`,
      `**E) Combining the Auto and Home coverage into a single hypothetical policy (295 units of \\$1,000 coverage total) would cost less than the sum of their separate premiums (\\$612.50 + \\$1,197.50 = \\$1,810.00).**  (true)

The statement combines Auto and Home into one hypothetical policy covering $295$ thousands, and claims that would cost less than the sum of their separate premiums $\\$1{,}810$.

A combined policy pays the fee once.

$$214.70 + 295 \\times 4.68 = 214.70 + 1380.60 = 1595.30$$

Then $1595.30 < 1810$. The saving is exactly one fee, $214.70$, and $1810-214.70=1595.30$. Charging two fees on the combined policy would get $1810$ and find no saving. The recovered isolation is checked against the claim using $1810$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The claim's "single hypothetical policy" is what drops a fee.

The combined policy costs $\\$1{,}595.30$, less than $\\$1{,}810$, Combining Auto and Home into one policy covering $85+210=295$ thousands pays the administrative fee once. Separate policies pay it twice. The saving is exactly $214.70$, and $1810-214.70=1595.30$. Linearity of the rate term means the $4.68$ per thousand on $295$ thousands matches the sum of the two rate lines; only the intercept is not doubled.

Charging two fees on the combined policy would get $1810$ and find no saving. The recovered isolation is checked against the claim using $1810$, which is the figure the sessions actually produce. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The claim's "single hypothetical policy" is what drops a fee. Combining coverage as $210$ thousands only, dropping Auto, would be answering a different merge. That is why $210$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

If the fee had been zero, combined and separate would cost the same, and the claim would fail. The recovered $214.70$ intercept is the whole reason a combined policy is cheaper. This is a new mix in the sense of a merged ticket, not a third policy row.

so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 58,
    solution_overview: `Ashford prices every policy as a fixed administrative fee plus a rate per \\$1,000 of coverage. A third policy's coverage amount is illegible, but its premium survived.

**Part 1: Building the system.**

Let $x$ = the fixed administrative fee per policy (in dollars), $y$ = the rate per \\$1,000 of coverage (in dollars).

The printed totals are not raw unknown×quantity rows: any shared fee or tax is peeled off first, and only then do the remaining amounts become the right-hand sides.

**1. Translate: Auto, coverage in units of \\$1,000.** That observation becomes:

$$
x + 85y = 612.50
$$

**2. Translate: Home.** That observation becomes:

$$
x + 210y = 1197.50
$$

**Part 2: The model.**

$$
x + 85y = 612.50 \\tag{1}
$$

$$
x + 210y = 1197.50 \\tag{2}
$$

**Part 3: Solve.**

**1.** Subtract Auto from Home to cancel the fixed fee $x$:

$$
(x + 210y) - (x + 85y) = 1197.50 - 612.50
$$

$$
125y = 585 \\Rightarrow y = \\frac{585}{125} = 4.68
$$

**2.** Substitute $y = 4.68$ into Auto:

$$
x + 85(4.68) = 612.50 \\Rightarrow x + 397.80 = 612.50 \\Rightarrow x = 214.70
$$

**3.** Reconstruct the Renters coverage $C$ (in units of $1,000$):

$$
214.70 + 4.68C = 331.70 \\Rightarrow 4.68C = 117.00 \\Rightarrow C = 25
$$

that is $25,000$ of coverage.

**Answer.** Fixed fee = \\$214.70 | Rate = \\$4.68/\\$1,000 | Renters coverage reconstructed = \\$25,000`,
  },
  {
    id: `math-5-59`,
    case_id: `MATH 5.59`,
    title: `Cedar Hollow Reserve  -  Linear Population Growth Reconstruction`,
    context: `Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340). At Year 6: combined population = 1,772. Species A grows at exactly twice the annual rate of Species B.`,
    statements: [
      `By Year 6, Species A's population exceeds Species B's population by more than 20 individuals.`,
      `If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.`,
      `The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth: Species B's growth) is greater than 2.5: 1.`,
      `At some point between Year 2 and Year 6, the two species had equal populations.`,
      `Species A overtakes Species B in total population size before Year 5.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A) By Year 6, Species A's population exceeds Species B's population by more than 20 individuals.**  (true)

The statement claims that by Year 6, Species A's population exceeds Species B's by more than $20$ individuals.

The overview already recovered A at $+72$ per year and B at $+36$ per year. Year 2 counts are $610$ and $730$. Year 6 is four years later.

**1.** Year 6, Species A:

$$610 + 4 \\times 72 = 610 + 288 = 898$$

**2.** Year 6, Species B:

$$730 + 4 \\times 36 = 730 + 144 = 874$$

**3.** Gap:

$$898 - 874 = 24$$

Then $24 > 20$. A starts behind by $120$ at Year 2 and closes $36$ individuals per year, so after four years it has closed $144$ and leads by $24$. Using Year 2's $610$ and $730$ without growing them would find A still behind and fail the claim. The stem's recovered values line up with $610$, whereas $730$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $610$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

At Year 6, A leads B by $24$ individuals, more than $20$, so the statement is True.`,
      `**B) If Species B's growth rate were instead equal to Species A's actual rate, the combined population at Year 6 would exceed the actual combined 1,772 by more than 140 individuals.**  (true)

The statement gives Species B Species A's recovered rate $+72$ per year, instead of B's own $+36$, and claims Year 6 combined would then exceed the actual $1{,}772$ by more than $140$ individuals. Year 2 to Year 6 is $4$ years of growth. The overview already recovered $A=+72$ and $B=+36$. Actual combined growth is $1772-1340=432$, which is $4 \\times (72+36)=432$.

**1.** Extra annual growth if B also adds $72$:

$$72 - 36 = 36$$

**2.** Extra individuals over four years:

$$4 \\times 36 = 144$$

**3.** Compare with $140$:

$$144 > 140$$

The counterfactual Year 6 combined is $1772+144=1916$. Applying the extra $36$ for only the two endpoint years, or for $6-2-1=3$ intervals, would get $108$ extra and fail the cutoff. The stem's recovered values line up with $36$, whereas $108$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $36$ stays in the write-up. The trap figure $108$ is three years of extra growth instead of four. Linear change from Year 2 to Year 6 includes the four increments at the ends of Years $3,4,5,6$.

Raising A instead of B, or using $+72$ on both from Year $0$, would be answering a different clock. The recovered comparison therefore keeps $+72$ and does not substitute $0$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim starts from the given Year 2 counts and only rewrites B's later slope.

The opposite verdict would need extra growth at or below $140$, so at most $35$ extra per year over four years. B's actual shortfall versus A is $36$ per year.

Rewriting B's rate as $+72$ adds $144$ individuals by Year 6, more than $140$, so the statement is True.`,
      `**C) The ratio of the two species' total population growth from Year 2 to Year 6 (Species A's growth: Species B's growth) is greater than 2.5: 1.**  (false)

The statement claims the Year 2 to Year 6 growth ratio of Species A to Species B exceeds $2.5:1$. The overview already recovered $A=+72$ per year and $B=+36$ per year. The window is $4$ years. The extra arithmetic is the two four-year totals, then the ratio.

**1.** Species A's growth over the window:

$$4 \\times 72 = 288$$

**2.** Species B's growth over the window:

$$4 \\times 36 = 144$$

**3.** Ratio:

$$\\frac{288}{144} = 2$$

Then $2 > 2.5$ is false. The stem already said A grows at exactly twice B's annual rate, so the four-year totals must sit in the same $2:1$ ratio. A $2.5:1$ claim would need $288:115.2$, which is not $144$ on B's side.

Using Year 6 *levels* $610+288=898$ against $730+144=874$ and formed $898:874 \\approx 1.03:1$ would be comparing stocks, not growth. That is the fork: $610+288=898$ belongs to the recovered isolation, $898:874 \\approx 1.03:1$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Using $72:36$ and then adding $0.5$ by mixing in the Year 2 gap $120/144$ can manufacture something near $2.5$. The recovered comparison therefore keeps $72:36$ and does not substitute $2.5$. The trap figure $2.5$ is that mixed stock-and-flow ratio, not the growth ratio the claim named.

The opposite verdict would need B's four-year growth at or below $288/2.5=115.2$. Recovered B growth is $144$. Combined growth $432$ also splits $288+144$.

The growth ratio is $2:1$, which is not greater than $2.5:1$, so the statement is False.`,
      `**D) At some point between Year 2 and Year 6, the two species had equal populations.**  (true)

The statement claims the two species had equal populations at some time between Year 2 and Year 6. At Year 2, A is $610$ and B is $730$, so B leads by $120$. A grows at $+72$ and B at $+36$, so A closes $36$ individuals per year. This is a crossing-time letter, not a Year 6 snapshot.

**1.** Closing speed:

$$72 - 36 = 36$$

**2.** Years after Year 2 until the gap $120$ closes:

$$\\frac{120}{36} = \\frac{10}{3} \\approx 3.333$$

**3.** Calendar year of the crossing:

$$2 + \\frac{10}{3} = \\frac{16}{3} \\approx 5.333$$

Year $5.33$ sits strictly between Year 2 and Year 6. Check: after $3$ years (Year 5) A is $610+216=826$ and B is $730+108=838$, still $12$ apart. After $4$ years (Year 6) A is $898$ and B is $874$, A now ahead by $24$. The crossing is inside that last year.

Comparing only the integer year-end counts and never interpolated would say they were never equal, because neither Year 5 nor Year 6 is a tie. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The trap is that discrete year-end table. The stem's growth is linear in time, so populations are defined between year-ends. Letter E asks whether A overtakes *before Year 5*; that is a different cutoff. This letter only asks whether a crossing exists in the open window.

The opposite verdict would need the closing time at or beyond $4$ years, so a Year 2 gap of at least $144$. The actual gap is $120$.

The populations meet about $3.33$ years after Year 2, inside the window, so the statement is True.`,
      `**E) Species A overtakes Species B in total population size before Year 5.**  (false)

The statement claims Species A overtakes Species B in total population before Year 5.

Letter D already placed the crossing at Year $5.\\overline{3}$. Year $5.\\overline{3}$ is after Year 5, not before it.

At Year 5, three years after Year 2: A is $610+216=826$, B is $730+108=838$. B still leads by $12$. A does not overtake until a third of the way through the next year.

Using $t=3$ as "Year 5" and seeing $826<838$ would correctly reject the claim. The stem's recovered values line up with $t=3$, whereas $826<838$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $t=3$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Counting Year 2 as year zero and using $t<5$ would get $t<5$ including $3.33$, and might accept; the calendar label "Year 5" is Year 2 plus three years, and $3.33>3$. The recovered comparison therefore keeps $t<5$ and does not substitute $3.33>3$.

A overtakes at Year $5.33$, not before Year 5, so the statement is False.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 59,
    solution_overview: `Two species change by a fixed net number of individuals each year. At Year 2: Species A = 610, Species B = 730 (combined 1,340).

**Part 1: Building the system.**

Let $x$ = Species A's net annual change (individuals/year), $y$ = Species B's net annual change.

Each left-hand coefficient is a quantity taken straight from an observation row or bill; the matching right-hand side is that observation's total in the same units.

**1. Translate: combined growth of 432 over 4 years, Year 2 to Year 6: 4x+4y=432.** That observation becomes:

$$
x + y = 108
$$

**2. Translate: Species A grows at twice Species B's rate.** That observation becomes:

$$
x = 2y
$$

**Part 2: The model.**

$$
x + y = 108 \\tag{1}
$$

$$
x = 2y \\tag{2}
$$

**Part 3: Solve.**

**1.** Substitute $x = 2y$ into $x + y = 108$:

$$
2y + y = 108 \\Rightarrow 3y = 108 \\Rightarrow y = 36
$$

**2.** Then

$$
x = 2(36) = 72
$$

Year 6 populations, for later claims: $A = 610 + 4(72) = 898$ and $B = 730 + 4(36) = 874$.

**Answer.** Species A = +72 individuals/year | Species B = +36 individuals/year`,
  },
  {
    id: `math-5-60`,
    case_id: `MATH 5.60`,
    title: `Continental Power Grid  -  Plant Output Rate Reconstruction`,
    context: `Two power plants each produce electricity at a fixed MWh-per-hour rate. Day 3's Plant A operating time was logged in minutes and converted to hours (1,020 min = 17 hrs).`,
    tables_markdown: `| Day | Plant A | Plant B | Total Energy |
| --- | --- | --- | --- |
| Day 1 | 14 hrs | 20 hrs | 3,990 MWh |
| Day 2 | 22 hrs | 9 hrs | 4,072 MWh |
| Day 3 (audit) | 1,020 min (=17 hrs) | 11 hrs | 3,553 MWh (recorded) |`,
    statements: [
      `Plant A's output rate exceeds Plant B's by more than 45%.`,
      `Day 3's predicted total energy, once its operating time is correctly converted to hours, differs from the recorded value by less than 0.3% of the recorded value.`,
      `If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).`,
      `The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.`,
      `Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A) Plant A's output rate exceeds Plant B's by more than 45%.**  (true)

The statement claims Plant A's output rate exceeds Plant B's by more than $45\\%$. That is a relative-gap test on the two recovered MWh-per-hour leftovers. Day 3's minute conversion and $10$ MWh discrepancy do not enter.

The overview recovered $A=145.0$ MWh/hr and $B=98.0$ MWh/hr. The extra arithmetic is A's premium over B, with B as the base.

**1.** Form the relative gap:

$$\\frac{145-98}{98} = \\frac{47}{98} \\approx 0.4796$$

**2.** About $48.0\\%$ exceeds $45\\%$. Forty-five percent of $98$ is $44.1$, and the $47$ MWh/hr gap sits above that mark.

Using $47/145 \\approx 32\\%$ against A would fail the cutoff. The path that matches the stem therefore holds $47/145 \\approx 32\\%$ fixed and only then reads the claim. That contrast is the reason the verdict goes the way it does. Using $145/98 \\approx 1.48$ and reporting $148\\%$ would have skipped the "exceeds by" subtraction. Working from the isolated values, $145/98 \\approx 1.48$ is the figure that is checked, not the detour that produced $148\\%$. Day 3's recorded $3{,}553$ versus predicted $3{,}543$ is a mass-audit issue, not a rate issue.

The opposite verdict would need A at or below $1.45 \\times 98 = 142.1$. With $A=145$, A exceeds B by about $48\\%$, more than $45\\%$, so the statement is True.`,
      `**B) Day 3's predicted total energy, once its operating time is correctly converted to hours, differs from the recorded value by less than 0.3% of the recorded value.**  (true)

The statement claims Day 3's predicted total, after converting $1{,}020$ min to hours, differs from the recorded $3{,}553$ MWh by less than $0.3\\%$ of the recorded value.

The overview already predicted $3{,}543$ MWh against $3{,}553$ recorded. The conversion $1020$ min $=17$ hrs is already in that prediction.

$$\\frac{|3543 - 3553|}{3553} = \\frac{10}{3553} \\approx 0.002814$$

about $0.281\\%$, which is less than $0.3\\%$. Using $1020$ min as $1020$ hours would wreck Plant A's term. Once $1020$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Comparing $10$ with $0.3\\%$ of $3553 \\approx 10.66$ would see $10<10.66$ directly. Working from the isolated values, $10$ is the figure that is checked, not the detour that produced $10<10.66$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The relative gap is about $0.28\\%$, less than $0.3\\%$, Day 3 is the audit row, with Plant A logged as $1{,}020$ min and converted to $17$ hrs. Days 1 and 2 recovered $145.0$ and $98.0$ MWh/hr. Predicted energy $17(145)+11(98)=2465+1078=3543$ MWh against recorded $3553$ MWh. The $10$ MWh gap is $10/3553 \\approx 0.281\\%$ of the recorded value, under $0.3\\%$.

Using $1020$ min as $1020$ hours would wreck Plant A's term. Once $1020$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Comparing $10$ with $0.3\\%$ of $3553 \\approx 10.66$ would see $10<10.66$ directly. Working from the isolated values, $10$ is the figure that is checked, not the detour that produced $10<10.66$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The conversion $17$ hrs is the extra arithmetic that makes the relative gap a few tenths of a percent rather than a catastrophe.

This is the inconsistent third row with a tight $0.3\\%$ bar. The gap *is* nonzero, so Day 3 does not rebuild exactly; it just sits inside the claim's window. If the recorded value had been $3600$ MWh, the gap would have been $57/3600=1.58\\%$, over $0.3\\%$, and the claim would have failed.

so the statement is True.`,
      `**C) If Plant A had operated for the combined time Plant B actually operated across Days 1–2 (29 hours), while Plant B operated for the combined time Plant A actually did (36 hours), the grand total would exceed the actual combined Day 1 + Day 2 total (8,062 MWh).**  (false)

The statement swaps the two plants onto each other's combined Days 1-2 hours: Plant A runs the $29$ hours Plant B actually ran, Plant B runs the $36$ hours Plant A actually ran, and claims that grand total would exceed the actual combined Day 1 + Day 2 total $8{,}062$ MWh.

**1.** Counterfactual output:

$$29 \\times 145 + 36 \\times 98 = 4205 + 3528 = 7733$$

**2.** Actual Day 1 plus Day 2:

$$3990 + 4072 = 8062$$

**3.** Compare:

$$7733 < 8062$$

The swapped assignment produces *less*, not more. Plant A is the stronger plant, and the swap gives A fewer hours ($29$ instead of $36$). That $7$-hour move from A onto B costs $7 \\times (145-98)=329$ MWh, and $8062-329=7733$.

Swapping the rates instead of the hours in the opposite direction would get the actual total again. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. The claim's assignment is the one that under-uses A.

The swapped total is $7{,}733$ MWh, which does not exceed $8{,}062$ MWh, Swapping the two plants onto each other's combined Days 1-2 hours gives A the $20+9=29$ hours B actually ran and B the $14+22=36$ hours A actually ran. Output $29 \\times 145 + 36 \\times 98 = 4205+3528=7733$ MWh, which is $329$ MWh *below* the actual $8062$, not above it. The $329$ is $7$ hours moved from A onto B times the $47$ MWh/hr rate gap.

Swapping in the other direction, giving A even more hours, would exceed $8062$ and might accept the claim. The opposite verdict would need a different isolation than $8062$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim's assignment is the one that under-uses the stronger plant. This is a new mix of hours, not a third day. The overview never costed $29$ and $36$ in that assignment.

If the plants had equal rates, the swap would leave $8062$ unchanged and the claim would fail. The recovered gap $145-98=47$ is what makes the under-use of A cost $329$ MWh.

so the statement is False.`,
      `**D) The combined output rate of both plants together (x + y) is more than 2.4 times Plant B's rate alone.**  (true)

The statement claims the combined output rate of both plants is more than $2.4$ times Plant B's rate alone. That is a factor test on $x+y$ against $y$, not a second audit of Day 3.

The overview recovered $A=145$ and $B=98$. The extra arithmetic is the sum and the factor. Letter A already used the $47$ MWh/hr gap; this letter uses the sum.

**1.** Add the two recovered rates, then divide by B:

$$145 + 98 = 243, \\qquad \\frac{243}{98} \\approx 2.4796$$

**2.** Then $2.48 > 2.4$. Equivalently, $2.4 \\times 98 = 235.2$, and $243 > 235.2$ with $7.8$ MWh/hr to spare.

Using $2.4 \\times 145$ against A would be using the wrong base: $348$ compared with $243$ fails, and that is not the claim. So the letter reads the claim against $2.4 \\times 145$; $243$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $2.4 \\times 145$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Comparing $145/98 \\approx 1.48$ would be repeating letter A's ratio instead of the combined factor. The recovered isolation is checked against the claim using $145/98 \\approx 1.48$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The opposite verdict would need $x+y \\le 2.4y$, so $x \\le 1.4y = 137.2$. With $A=145$, the combined rate $243$ MWh/hr is about $2.48$ times B's $98$, more than $2.4$ times, so the statement is True.`,
      `**E) Across all three days combined (using the recorded Day 3 value), total energy production exceeds 11,600 MWh.**  (true)

The statement adds Day 1, Day 2, and the *recorded* Day 3 total and claims the three-day energy exceeds $11{,}600$ MWh. The printed rows are $3{,}990$, $4{,}072$, and recorded Day 3 $3{,}553$. The overview already recovered Plant A $145.0$ MWh/hr and Plant B $98.0$ MWh/hr, and a Day 3 *prediction* $3{,}543$. This letter uses the recorded $3{,}553$, not that prediction.

**1.** Day 1 plus Day 2:

$$3990 + 4072 = 8062$$

**2.** Add recorded Day 3:

$$8062 + 3553 = 11615$$

**3.** Compare with $11{,}600$:

$$11615 > 11600$$

The three-day recorded total is $11{,}615$ MWh, $15$ MWh above the cutoff. Using the predicted Day 3 $3{,}543$ would get $11{,}605$, still above $11{,}600$, so the audit discrepancy is not the verdict. Working from the isolated values, $3{,}543$ is the figure that is checked, not the detour that produced $11{,}600$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Dropping Day 3 entirely would get $8{,}062$ and fail. That is why $8{,}062$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The trap figure $11{,}605$ is the predicted-Day-3 sum; the claim names the recorded value.

The opposite verdict would need the three-day sum at or below $11{,}600$, so recorded Day 3 at or below $11{,}600-8062=3538$. Recorded Day 3 is $3{,}553$.

The recorded three-day total is $11{,}615$ MWh, which exceeds $11{,}600$, so the statement is True.`,
    ],
    difficulty_level: `\\frac{5}{5}`,
    sort_order: 60,
    solution_overview: `Two power plants each produce electricity at a fixed MWh-per-hour rate. Day 3's Plant A operating time was logged in minutes and converted to hours (1,020 min = 17 hrs).

**Part 1: Building the system.**

Let $x$ = Plant A's output rate (MWh/operating hr), $y$ = Plant B's output rate (MWh/operating hr).

Before writing coefficients, every quantity is converted into one shared unit (for example miles→km or L→mL) so the left-hand sides match the right-hand side units.

**1. Translate: Day 1.** That observation becomes:

$$
14x + 20y = 3990
$$

**2. Translate: Day 2.** That observation becomes:

$$
22x + 9y = 4072
$$

**Part 2: The model.**

$$
14x + 20y = 3990 \\tag{1}
$$

$$
22x + 9y = 4072 \\tag{2}
$$

**Part 3: Solve.**

**1.** Divide Day 1 by 2:

$$
7x + 10y = 1995
$$

**2.** Multiply that simplified equation by 9:

$$
63x + 90y = 17955
$$

**3.** Multiply Day 2 by 10:

$$
10(22x + 9y) = 10(4072) \\Rightarrow 220x + 90y = 40720
$$

**4.** Subtract the scaled Day 1 from the scaled Day 2:

$$
(220x + 90y) - (63x + 90y) = 40720 - 17955
$$

$$
157x = 22765 \\Rightarrow x = \\frac{22765}{157} = 145.0
$$

**5.** Substitute $x = 145$ into $7x + 10y = 1995$:

$$
7(145) + 10y = 1995 \\Rightarrow 1015 + 10y = 1995 \\Rightarrow 10y = 980 \\Rightarrow y = 98.0
$$

**6.** Audit Day 3 ($1020$ min $= 17$ hrs):

$$
17(145) + 11(98) = 2465 + 1078 = 3543
$$

versus 3,553 MWh recorded, a 10 MWh discrepancy.

**Answer.** Plant A = 145.0 MWh/hr | Plant B = 98.0 MWh/hr | Day 3 predicted = 3,543 MWh (vs. 3,553 MWh recorded)`,
  },
];
