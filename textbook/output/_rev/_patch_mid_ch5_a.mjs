import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-3:B": `The statement is a claim about today's child ticket price at Riverside Community Cinema, not about either Saturday session's logged revenue. Adult and child tickets keep the same prices across both screenings, so there is a single child price sitting under both rows.

Child tickets are the leftover after the adult price is taken out of either session. The overview already recovered $c = 7$. The claim writes $\\$7.00$, which is exactly that leftover. This letter does not rebuild the pair $a=12$ and $c=7$. It only asks whether the recovered child price is the number in the claim.

**1.** The recovered $7$ is attached to child tickets, not to adult tickets. A solver who swapped the labels would quote $\\$12$ here and miss that children are the cheaper ticket.

**2.** A solver who divided the matinee $\\$2{,}130$ by $150$ child tickets, ignoring the $90$ adults, would land on $\\$14.20$ and think children were the expensive ticket. They are not: adults are $\\$12$ and children are $\\$7$. The trap figure $\\$14.20$ is what a child-only split of the matinee manufactures.

The opposite verdict would need a different logged total on one of the two sessions. With $\\$2{,}130$ and $\\$2{,}200$ as printed, a child ticket cannot cost anything other than $\\$7$.

The recovered child price matches the claimed $\\$7.00$, so the statement is True.`,

  "math-5-4:B": `The statement is a claim about today's wrap price at Corner Deli, not about either charged delivery total. Wraps are the leftover after sandwiches are taken out of a peeled receipt. The $\\$8$ delivery fee is a flat add-on, not a food price, so both receipts were peeled before the food system was solved.

The overview already recovered $y = 5$. The claim writes $\\$5.00$, which is exactly that leftover. This letter does not rebuild the pair $x=7$ and $y=5$. It only asks whether the recovered wrap price is the number in the claim.

**1.** The recovered $5$ is attached to wraps, not to sandwiches. A solver who quoted $\\$7$ here would have swapped the labels.

**2.** A solver who treated the $\\$8$ fee as if it belonged to the wraps, or who split Receipt A's charged $\\$70$ across $4$ wraps, would land on $\\$17.50$ and inflate the wrap price. The trap figure $\\$17.50$ is a four-wrap split of a delivery total that still contains sandwiches and a fee.

The opposite verdict would need a different peeled food subtotal on one of the two receipts. With food layers $\\$62$ and $\\$66$ as recovered, a wrap cannot cost anything other than $\\$5$.

The recovered wrap price matches the claimed $\\$5.00$, so the statement is True.`,

  "math-5-4:D": `The statement is a claim about Receipt B's charged total, fee included. The stem already lists $\\$74.00$ as what was charged for $3$ sandwiches, $9$ wraps, plus the $\\$8$ fee. That charged figure is an observation on the page, not an unknown to recover.

This letter does not peel the fee and does not recover unit prices. It asks whether the claimed total is the total the deli charged.

A solver who reported the food subtotal $74-8=66$ here would be answering letter C's kind of question for the wrong receipt. The claim includes the fee. A solver who rebuilt $3(7)+9(5)+8=21+45+8=74$ would still land on $\\$74$, which is a consistency check, not a new unknown.

The trap is mixing Receipt A's $\\$70$ into this letter, or averaging the two charged totals toward $\\$72$. The claim names Receipt B specifically. The opposite verdict would need the stem to print a different charged total for that $3$-and-$9$ delivery.

The claimed total is the printed charged total on Receipt B, so the statement is True.`,

  "math-5-6:B": `The statement is a claim about today's Premium chair price. Premium is Standard plus the catalogue gap of $\\$45$, so once Standard is in hand the Premium price is a one-step add, not a second unknown.

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

  "math-5-6:C": `The statement is a claim about the twelve Premium chairs in the shipment, not about one Premium chair and not about the whole $\\$9{,}660$ load. The overview already recovered $y = 349$. The extra arithmetic is only multiplying that recovered unit price by twelve.

**1.** Twelve Premium chairs at the recovered Premium price:

$$12 \\times 349 = 4188$$

**2.** The matching Standard slice of the shipment, as a check that the two pieces still add to the printed total:

$$18 \\times 304 = 5472$$

$$5472 + 4188 = 9660$$

**3.** A solver who used the false $\\$354$ from letter B would get

$$12 \\times 354 = 4248$$

and miss the claim by $\\$60$. A solver who used the Standard price $304$ on the Premium chairs would get $3648$ and undershoot by $\\$540$, which is twelve times the $\\$45$ gap.

The trap figure $\\$4{,}248$ is letter B's false Premium, times twelve. Another trap is to take $12/30$ of $\\$9{,}660$, which is $\\$3{,}864$, as if every chair in the shipment had the same price. The shipment is mixed, so the Premium slice has to use $349$, not the blended $322$.

The opposite verdict would need a different recovered Premium price. With $y=349$ pinned by the $\\$45$ gap and the $\\$9{,}660$ shipment, twelve Premium chairs are worth $\\$4{,}188$, not some nearby round of the blended slice.

A clerk who quoted $12 \\times 350 = 4200$ would be rounding Premium to a neighbour of $349$ and missing the claim by $\\$12$. That $\\$12$ is not a rounding of the shipment; it is twelve times a one-dollar convenience. The recovered $349$ is what the substitution produced, and twelve of those chairs are $4188$ exactly, with no leftover cents.

The twelve Premium chairs in the shipment are worth $\\$4{,}188$, so the statement is True.`,

  "math-5-6:D": `The statement is a claim about the catalogue gap itself. The stem already prices Premium exactly $\\$45$ above Standard throughout the current catalogue. That is equation $(1)$ in the overview, not a recovered unknown.

Checking the recovered pair $x=304$ and $y=349$ gives the same gap:

$$349 - 304 = 45$$

A solver who compared Premium to the $30$-chair average $322$ would report a $\\$27$ gap and miss the claim. The gap in the catalogue is Premium minus Standard, not Premium minus the mixed average. A solver who used letter B's false $\\$354$ would report a $\\$50$ gap, which is the round-up trap already named there.

The opposite verdict would need the stem to quote a different catalogue gap. The shipment value recovers the two prices, but it does not rewrite the $\\$45$ that the catalogue already printed. Staff who treated $\\$45$ as a rumour and went looking for a recovered gap in the $\\$9{,}660$ mix would be solving for something the stem already gave.

The catalogue gap is the printed $\\$45.00$, so the statement is True.`,

  "math-5-7:B": `The statement is a claim about ByteMobile's extra-minute rate, not about the fixed monthly fee. The two billed customers differ by $80$ extra minutes and by $\\$24$, so the rate is the slope of that line once the shared fee cancels.

The overview already recovered $r = 0.30$. The claim writes $\\$0.30$ per minute, which is exactly that slope. This letter does not rebuild the subtraction $80r=24$. It only asks whether the recovered rate is the number in the claim.

**1.** The recovered $0.30$ is attached to extra minutes, not to the fee. A solver who quoted $\\$17$ here would have swapped rate and intercept.

**2.** A solver who divided $\\$53$ by $120$ minutes would land on about $\\$0.44$ and forget the fee sitting under both bills. The trap figure $\\$0.44$ is the heavy user's bill treated as if it were all extra-minute charges. The fee has to cancel before the rate appears.

The opposite verdict would need a different pair of quoted bills. With $\\$29$ at $40$ extra minutes and $\\$53$ at $120$ extra minutes, the advertised extra-minute rate cannot be anything other than $\\$0.30$.

The recovered extra-minute rate matches the claimed $\\$0.30$ per minute, so the statement is True.`,

  "math-5-8:C": `The statement is a claim about Standard ovens' share of the $795$ assembly hours this week, not about how many Standard ovens were built and not about material cost. Each Standard oven takes $4$ hours, and the overview already recovered $s = 75$. The extra arithmetic is only multiplying count by the Standard hour rate.

**1.** Standard hours this week:

$$4 \\times 75 = 300$$

**2.** Deluxe's leftover hours, as a check that the two slices still add to the logged $795$:

$$795 - 300 = 495$$

That leftover is $9 \\times 55$, which matches the recovered Deluxe count. The hours log is conserved.

**3.** A solver who used Deluxe's $9$ hours on the Standard count would get $675$ and miss the claim. A solver who used $s=65$ from a half-split of $130$ ovens would get $260$. A solver who reported $4 \\times 130=520$ would have priced every oven as Standard.

The trap figure $260$ is a half-split of the week's $130$ ovens, times four. The trap figure $520$ is the whole week treated as Standard. Neither is $4$ times the recovered $75$.

The material-cost column is a distractor here. Standard material is $\\$120$ per oven, and $75 \\times 120=9000$ is letter E's question, not this one. Hours and dollars are different columns. A solver who reported $\\$300$ as if it were a dollar total would be mixing units.

The opposite verdict would need a different Standard count or a different Standard hour rate. With $s=75$ and $4$ hours each, Standard ovens accounted for $300$ hours. That $300$ is a share of $795$, not a share of $130$ ovens, and not a material bill.

Standard ovens accounted for $300$ of the week's assembly hours, so the statement is True.`,

  "math-5-8:D": `The statement is a claim about Deluxe ovens' share of the assembly hours. Each Deluxe oven takes $9$ hours, and the overview recovered $d = 55$. The extra arithmetic is only multiplying, then comparing with the claimed $500$.

**1.** Deluxe hours this week:

$$9 \\times 55 = 495$$

**2.** Add Standard's $300$ hours from the recovered $s=75$ and compare with the week's log:

$$300 + 495 = 795$$

**3.** The claim writes $500$. Compare that with the conserved log:

$$300 + 500 = 800$$

which overshoots $795$ by $5$ hours. The claimed $500$ is five hours high: a round-up from $495$, or one extra Deluxe oven at $9$ hours mixed with a dropped Standard hour.

The trap figure $500$ is the round hundred sitting just above $495$. Another trap is $9 \\times 45=405$ from letter B's false Deluxe count, which undershoots in the other direction. A solver who split $795$ as $300$ and $495$ but then rounded Deluxe to $500$ would flip the verdict by a convenience round.

A nearby miss is $9 \\times 56 = 504$, which is what one extra Deluxe oven would have logged. The week built $55$ Deluxe ovens, not $56$. Rounding $495$ up to the next hundred is a reporting habit, not an hours identity. The log already says $795$, and $300$ of those hours are Standard, so Deluxe cannot occupy $500$ of a $795$-hour week.

The opposite verdict would need $d=500/9$, which is not an integer, or a week that logged $800$ hours. With $130$ ovens and $795$ hours at $4$ and $9$ hours each, Deluxe hours are $495$, not $500$.

The recovered Deluxe hours are $495$, not the claimed $500$, so the statement is False.`,

  "math-5-9:C": `The statement is a claim about Riverside's net sales after its $\\$460$ in returns. Gross is printed at $\\$9{,}760$. Net is gross minus returns. The extra arithmetic is only peeling Riverside's own returns, then checking that the recovered furniture prices rebuild that net.

**1.** Subtract Riverside's returns from Riverside's gross:

$$9760 - 460 = 9300$$

**2.** Rebuild Riverside at the recovered prices $x=350$ and $y=200$:

$$14 \\times 350 + 22 \\times 200 = 4900 + 4400 = 9300$$

**3.** A solver who subtracted Hillcrest's $\\$300$ here would land on

$$9760 - 300 = 9460$$

and miss the claim. A solver who reported gross $\\$9{,}760$ as net would have skipped the peel. A solver who subtracted both branches' returns from Riverside's gross would get $9760-460-300=9000$, which is Hillcrest's net, not Riverside's.

The trap figure $\\$9{,}460$ is Hillcrest's returns taken off the wrong branch. The trap figure $\\$9{,}760$ is gross left unpeeled. Both routes fail the definition of net sales.

Hillcrest's printed gross is also $\\$9{,}300$. That coincidence is a trap: a solver who copied Hillcrest's gross into Riverside's net without peeling would get the right number for the wrong reason. The honest route is Riverside gross minus Riverside returns. The matching rebuild at $x=350$ and $y=200$ is what shows that the peel is the same layer the system used. Riverside sold $14$ sofas and $22$ armchairs; those counts never change when returns are peeled. Returns are dollars taken off gross, not sofas taken off the floor.

The opposite verdict would need Riverside's printed gross or Riverside's printed returns to change. With $\\$9{,}760$ gross and $\\$460$ returns, Riverside's net is $\\$9{,}300$. The recovered sofa and armchair prices merely confirm that peel.

Riverside's net sales were $\\$9{,}300.00$, so the statement is True.`,

  "math-5-9:D": `The statement is a claim about Hillcrest's gross sales, before its $\\$300$ in returns. The table already prints Hillcrest gross at $\\$9{,}300$. This letter does not peel returns. It asks whether the claimed gross is the gross on the page.

As a consistency check, Hillcrest's net is $9300-300=9000$, and the $20$ sofas and $10$ armchairs at recovered prices rebuild that net:

$$20 \\times 350 + 10 \\times 200 = 7000 + 2000 = 9000$$

Adding the $\\$300$ of returns back recovers the printed gross. A solver who reported the net $\\$9{,}000$ here would be answering a different question. A solver who mixed Riverside's gross $\\$9{,}760$ into this letter would be naming the wrong branch.

The trap figure $\\$9{,}000$ is Hillcrest's net, which the claim does not ask for. The opposite verdict would need the table to print a different Hillcrest gross. Riverside's net is also $\\$9{,}300$, so copying the other branch's peeled figure would happen to match; that coincidence does not turn a printed gross into a recovered unknown.

Hillcrest's printed gross is the claimed $\\$9{,}300.00$, so the statement is True.`,

  "math-5-10:B": `The statement is a claim about PrintFast's per-page rate. Subtracting the two invoices isolates that slope, because the setup fee cancels. The overview already recovered $r = 0.20$. The claim writes $\\$0.25$, five cents above $0.20$. This letter does not rebuild the pair $(f,r)=(9,0.20)$. It only asks whether a quarter-dollar rate can sit on both printed bills.

**1.** The $180$-page gap between Order #96 and Order #58, at the claimed rate:

$$180 \\times 0.25 = 45$$

The actual dollar gap is $69-33=36$, not $\\$45$. Those extra nine dollars are $180 \\times 0.05$.

**2.** At $r=0.25$ the $120$-page order would force a fee $33-30=3$, and the $300$-page order would then total

$$3 + 300 \\times 0.25 = 78$$

which overshoots the printed $\\$69$ by $\\$9$. The two invoices cannot share a quarter-dollar rate.

**3.** A solver who divided $\\$33$ by $120$ pages would land on $\\$0.275$ and forget the fee sitting under both bills. The trap figure $\\$0.25$ is the round quarter nearest that all-in split. Another trap is QuickCopy's flat $\\$60$ mixed into a per-page story.

The honest slope is the dollar gap over the page gap, $36/180=0.20$. That fraction is already recovered. A quarter-dollar rate would require a $\\$45$ gap on the same $180$ pages. The invoices do not show $\\$45$. They show $\\$36$. A clerk who treated $\\$0.25$ as "about a quarter, close enough to $0.20$" would be rounding a rate that the two bills pin to the cent. PrintFast's recovered rate is $0.20$ exactly, because $36/180$ is exact.

The opposite verdict would need the dollar gap between the two orders to be $\\$45$ instead of $\\$36$. With $\\$33$ at $120$ pages and $\\$69$ at $300$ pages, the per-page rate cannot be $\\$0.25$. QuickCopy's flat $\\$60$ never enters a per-page slope.

The claimed $\\$0.25$ sits $\\$0.05$ above the recovered $\\$0.20$, so the statement is False.`,

  "math-5-11:B": `The statement is a claim about the gap between a burrito and a taco at Del Sol, not about either friend's receipt total. Ana paid $\\$32$ for $4$ tacos and $3$ burritos. Ben paid $\\$5$ more than Ana for $2$ tacos and $5$ burritos.

The overview already recovered $x = 3.50$ and $y = 6$. The extra arithmetic is only subtracting those two recovered prices.

**1.** Burrito minus taco:

$$6 - 3.50 = 2.50$$

**2.** A solver who subtracted in the other order would report a negative gap, as if tacos were the expensive item. A solver who reported a round $\\$2$ gap would have dropped the fifty cents. A solver who took Ben's extra $\\$5$ and divided by his two extra burritos would get $\\$2.50$ by luck, but that route ignores that Ben also ordered two fewer tacos. The honest gap is $y-x$, not $5/2$.

**3.** Check that the recovered pair still rebuilds Ana:

$$4 \\times 3.50 + 3 \\times 6 = 14 + 18 = 32$$

Ben's mix as a second check: $2(3.50)+5(6)=7+30=37$, which is $\\$5$ above Ana, matching the stem. The gap $y-x=2.50$ is what makes those two mixes $5$ dollars apart, because Ben swapped two tacos for two extra burritos and $2 \\times 2.50=5$. That is extra arithmetic on the recovered pair, not a second solve.

The two receipts force this exact difference. The opposite verdict would need a different pair of totals. With Ana at $\\$32$ and Ben at $\\$37$, a burrito sits $\\$2.50$ above a taco. A round $\\$3$ gap would have made Ben's two-burrito swap cost $\\$6$ instead of $\\$5$, and the stem's $\\$5$ comparison forbids that. The fifty cents is not decoration; it is what ties the mix swap to the printed $\\$5$.

The burrito-taco gap is the claimed $\\$2.50$, so the statement is True.`,

  "math-5-11:D": `The statement is a claim about Ben's total, compared with a $\\$40$ cutoff. Ben paid $\\$5$ more than Ana's $\\$32$. The overview already recovered $x=3.50$ and $y=6$. The extra arithmetic is only forming Ben's total and comparing it with $\\$40$.

**1.** Ben's total from the $\\$5$ gap:

$$32 + 5 = 37$$

**2.** Rebuild his mix at the recovered prices:

$$2 \\times 3.50 + 5 \\times 6 = 7 + 30 = 37$$

**3.** Compare with the cutoff:

$$37 < 40$$

The claim says his total exceeds $\\$40$. It does not. The gap to the cutoff is $\\$3$.

A solver who added Ana's $\\$32$ to Ben's five burritos at $\\$30$ would get $\\$62$ and wildly overshoot, because that route still contains Ana's whole order. A solver who used $37+5$ twice, adding the $\\$5$ gap a second time, would get $\\$42$ and flip the verdict. The $\\$5$ gap is already built into the $\\$37$.

The trap figure $\\$42$ is the double-counted gap. The trap figure $\\$62$ is Ana's receipt stacked onto Ben's burritos. Neither is Ben's order.

The opposite verdict would need Ben's mix to cost more than $\\$40$. At $x=3.50$ and $y=6$, two tacos and five burritos are $\\$37$. Raising the burrito to $\\$6.60$ would push Ben to $7+33=40$ exactly, and the two receipts forbid that burrito price.

The cutoff $\\$40$ is a round bar, not a recovered number. Clearing it would take another taco at $3.50$ plus a leftover, or one more burrito. Ben ordered two tacos and five burritos, which is $\\$37$. Letter A's false reading of Ben's burritos against Ana's whole order is a different comparison and does not move this total.

Ben's total is $\\$37$, which does not exceed $\\$40$, so the statement is False.`,

  "math-5-12:A": `The statement is a claim about whether a paperback price of $\\$12$ fits the pricing desk's $\\$5$ gap and the combined revenue of $\\$8{,}540$. Hardcover editions are priced exactly $\\$5$ above paperback this quarter, across the board.

The overview already recovered $x = 12$ by substituting $y=x+5$ into $400x+220y=8540$. This letter does not rebuild that pair. It only asks whether that recovered paperback price is consistent with the gap rule, which it is, because the gap rule was used to recover it.

**1.** The recovered $12$ plus the desk's $\\$5$ gap is a hardcover of $17$, and $400(12)+220(17)=4800+3740=8540$, which matches the reported total. That is a consistency check, not a new unknown.

**2.** A solver who divided $\\$8{,}540$ by $400$ paperbacks, ignoring hardcovers, would land on $\\$21.35$ and miss the claim. The trap figure $\\$21.35$ is a paperback-only split of a mixed total.

Staff headcount and the loyalty share never enter the price. A solver who folded those distractors into the revenue would manufacture a different paperback price. The opposite verdict would need a different gap or a different combined revenue.

A paperback at $\\$12$ fits the desk's $\\$5$ gap and the $\\$8{,}540$ total, so the statement is True.`,
};

const patches = [];
for (const e of index) {
  const body = bodies[`${e.id}:${e.letter}`];
  if (!body) continue;
  patches.push({
    file: e.file,
    id: e.id,
    idx: e.idx,
    letter: e.letter,
    key: e.key,
    body,
  });
}

const applied = applyMidPatches(patches);
for (const a of applied) {
  const flag = a.words < 120 ? "UNDER120" : a.words < 160 ? "SHORT" : "";
  console.log(a.id, a.letter, a.words, flag);
}
console.log("applied", applied.length);
