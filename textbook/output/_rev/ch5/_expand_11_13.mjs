import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-11": [
    `The statement compares Ben's five burritos alone with Ana's entire order. Ana paid $\\$32$ for $4$ tacos and $3$ burritos. Ben's burrito count is $5$, but that is not his whole receipt.

The overview already recovered $y = 6$ as the burrito price. The extra arithmetic is only costing those five burritos and comparing them with Ana's $\\$32$.

**1.** Five burritos at the recovered burrito price:

$$5 \\times 6 = 30$$

**2.** Compare with Ana's whole order:

$$30 < 32$$

Ben's five burritos alone cost $\\$30$, which is $\\$2$ short of Ana's $\\$32$. The claim says he paid more for those five burritos than she paid for everything. He did not.

A solver who used Ben's whole receipt $\\$37$ here would be comparing the wrong object: the claim names the five burritos alone, not the two tacos that came with them. A solver who priced burritos at $\\$7$ would get $35>32$ and flip the verdict. The recovered $y=6$ forbids that.

Ben's five burritos cost less than Ana's whole order, so the statement is False.`,

    `The statement is a claim about the gap between a burrito and a taco, not about either receipt total.

The overview already recovered $x = 3.50$ and $y = 6$. The extra arithmetic is only subtracting.

$$6 - 3.50 = 2.50$$

A burrito sits $\\$2.50$ above a taco. A solver who subtracted in the other order, or who reported $\\$2$ as a round gap, would miss the fifty cents. The two receipts force this exact difference.

The burrito-taco gap is $\\$2.50$, so the statement is True.`,

    `This letter is not Ana's actual order. Ana ordered $4$ tacos and $3$ burritos for $\\$32$. The claim drops one burrito, leaving $4$ tacos and $2$ burritos, and compares that counterfactual with $\\$28$.

The overview already has $x = 3.50$ and $y = 6$. The extra arithmetic is only costing the reduced mix.

**1.** Four tacos at the recovered taco price:

$$4 \\times 3.50 = 14$$

**2.** Two burritos at the recovered burrito price:

$$2 \\times 6 = 12$$

**3.** Add and compare with $\\$28$:

$$14 + 12 = 26$$

Since $26 < 28$, she would have paid less than $\\$28$. The gap to the cutoff is $\\$2$, which is not accidental: dropping one $\\$6$ burrito from $\\$32$ leaves $\\$26$, and $\\$26$ sits $\\$2$ under $\\$28$.

A solver who dropped a taco instead of a burrito would get $32-3.50=28.50$, which is not less than $\\$28$. Direction of the drop matters. The claim names one fewer burrito.

A solver who subtracted $\\$4$ as a round "one item" would land on $\\$28$ exactly and think the inequality failed. One burrito is $\\$6$, not $\\$4$.

What would have to change for the opposite verdict? If burritos were $\\$3$, dropping one would leave $\\$29$, which is not less than $\\$28$. The two receipts force $y=6$, and $32-6=26<28$.

The reduced mix costs $\\$26$, which is less than $\\$28$, so the statement is True.`,

    `The statement is a claim about Ben's total, compared with a $\\$40$ cutoff. Ben paid $\\$5$ more than Ana's $\\$32$.

**1.** Ben's total:

$$32 + 5 = 37$$

**2.** Compare with $\\$40$:

$$37 < 40$$

Rebuilding his mix at $x=3.50$ and $y=6$ confirms $2(3.50)+5(6)=7+30=37$. The claim says his total exceeds $\\$40$. It does not.

A solver who added Ana's $\\$32$ to Ben's five burritos $\\$30$ would get $\\$62$ and wildly overshoot. A solver who used $\\$37+\\$5$ twice would get $\\$42$ and flip the verdict. The $\\$5$ gap is already built into the $\\$37$.

Ben's total is $\\$37$, which does not exceed $\\$40$, so the statement is False.`,

    `This letter is not either friend's receipt. Ana is $4$ tacos and $3$ burritos. Ben is $2$ tacos and $5$ burritos. The claim asks for a third mix: six of each, together.

The overview already has $x = 3.50$ and $y = 6$. The extra arithmetic is only costing the new mix.

**1.** Six tacos at the recovered taco price:

$$6 \\times 3.50 = 21$$

**2.** Six burritos at the recovered burrito price:

$$6 \\times 6 = 36$$

**3.** Add the two pieces:

$$21 + 36 = 57$$

The mix is $\\$57$, matching the claim.

A solver who averaged Ana's $\\$32$ and Ben's $\\$37$ and scaled to twelve items would keep the $4$-and-$3$ and $2$-and-$5$ shapes inside the average, which are not six-and-six. A solver who took $6(3.50+6)=57$ as $6 \\times 9.50$ is actually the same arithmetic in pair form: one taco plus one burrito is $\\$9.50$, and six pairs are $\\$57$. That pair view is honest here because the mix is balanced.

What would have to change for the opposite verdict? If tacos were $\\$4$, six of each would be $24+36=60$. The two receipts force $x=3.50$, and six-and-six is then $\\$57$.

The recovered prices on six of each give $\\$57.00$, so the statement is True.`,
  ],

  "math-5-12": [
    `The statement is a claim about whether a paperback price of $\\$12$ fits the pricing desk's $\\$5$ gap and the combined revenue of $\\$8{,}540$.

The overview already recovered $x = 12$ by substituting $y=x+5$ into $400x+220y=8540$. This letter does not rebuild that pair. It only asks whether that recovered paperback price is consistent with the gap rule, which it is, because the gap rule was used to recover it.

Staff headcount and the loyalty share never enter the price. A solver who folded those distractors into the revenue would manufacture a different paperback price.

A paperback at $\\$12$ fits the $\\$5$ gap, so the statement is True.`,

    `The statement is a claim that hardcovers sit above $\\$18$. The pricing desk prices them $\\$5$ above paperbacks.

The overview already recovered $x=12$, so $y=12+5=17$. Then $17 > 18$ is false.

**1.** The figure $\\$18$ is the gap plus a round $\\$13$ paperback, or $\\$8540/220 \\approx 38$ after ignoring paperbacks, then halved. The recovered hardcover is $\\$17$, one dollar short of the cutoff.

**2.** At $y=18$ the revenue would be $400(13)+220(18)=5200+3960=9160$ if the gap stayed $\\$5$, which overshoots $\\$8{,}540$. The stem's revenue forbids hardcovers above $\\$18$.

Hardcovers are $\\$17$, which is not above $\\$18$, so the statement is False.`,

    `This letter is not the actual sales mix. The desk sold $400$ paperbacks and $220$ hardcovers. The claim adds $100$ paperbacks, hardcovers unchanged, and asks whether revenue would have been $\\$1{,}200$ higher.

The overview already recovered $x = 12$. The extra arithmetic is only costing those $100$ extra paperbacks.

**1.** One hundred extra paperbacks at the recovered paperback price:

$$100 \\times 12 = 1200$$

**2.** Hardcovers are unchanged, so they add $0$ to the increment. The whole increment is $\\$1{,}200$.

A solver who used the hardcover price here would get $\\$1{,}700$ and miss the claim. A solver who scaled the whole $\\$8{,}540$ by $500/400$ would keep hardcovers inside the scale factor and overshoot. Only the paperback column changes.

The extra $100$ paperbacks add $\\$1{,}200$, so the statement is True.`,

    `This letter is a new mix: $3$ hardcovers and $2$ paperbacks, compared with a $\\$75$ cutoff.

The overview already has $x = 12$ and $y = 17$. The extra arithmetic is only costing that basket.

**1.** Three hardcovers:

$$3 \\times 17 = 51$$

**2.** Two paperbacks:

$$2 \\times 12 = 24$$

**3.** Add and compare with $\\$75$:

$$51 + 24 = 75$$

The basket equals $\\$75$, so it is not less than $\\$75$. The inequality is strict in the claim, and equality fails a strict inequality.

A solver who used $y=18$ from letter B would get $54+24=78$ and still fail "less than $75$", so that particular error would not flip the verdict. A solver who treated "less than" as "less than or equal" would flip it. The wording is "would pay less than $\\$75$", and $75$ is not less than $75$.

The basket costs exactly $\\$75$, which is not less than $\\$75$, so the statement is False.`,

    `The statement asks whether $310$ hardcovers alone could have produced the reported $\\$8{,}540$. That is a different mix: zero paperbacks, $310$ hardcovers.

The overview already recovered $y = 17$. The extra arithmetic is only costing those $310$ hardcovers.

**1.** Three hundred ten hardcovers at the recovered hardcover price:

$$310 \\times 17 = 5270$$

**2.** Compare with $\\$8{,}540$:

$$5270 \\neq 8540$$

The gap is $\\$3{,}270$, which is $400 \\times 12$ plus a leftover, the paperback column that this counterfactual dropped. Hardcovers alone at $\\$17$ cannot reach $\\$8{,}540$: that would need $8540/17=502.35$ hardcovers, not $310$.

Staff count $12$ and loyalty $45\\%$ are still distractors. They do not turn $310$ hardcovers into $\\$8{,}540$.

The $310$ hardcovers would bring $\\$5{,}270$, far below $\\$8{,}540$, so the statement is False.`,
  ],

  "math-5-13": [
    `The statement compares Standard's recovered base fee with Basic's advertised $\\$15$ base, and claims Standard's base is lower.

The overview already recovered Standard's base $x = 38$ from the March and April bills. Basic's base is printed at $\\$15$. Then $38 < 15$ is false.

**1.** Standard's base is more than double Basic's, not lower. The trap is mixing Basic's $\\$15$ into the Standard intercept, or averaging $\\$62$ and $\\$47$ toward something below $\\$15$.

**2.** Standard also has a steeper overage rate, $\\$3$ per GB against Basic's $\\$2$. Both pieces of Standard are more expensive than Basic, not less.

Standard's base is $\\$38$, which is higher than Basic's $\\$15$, so the statement is False.`,

    `The statement is a claim about Standard's overage rate. The $\\$15$ gap between March's $\\$62$ and April's $\\$47$ is $5$ GB of overage.

The overview already recovered $y = 3$. The claim writes $\\$3.00$ per GB, which is exactly that slope.

A solver who divided $\\$62$ by $8$ GB would land on $\\$7.75$ and forget the base sitting under both bills.

The Standard overage rate is $\\$3.00$ per GB, so the statement is True.`,

    `This letter is not March or April. March is $8$ GB at $\\$62$. April is $3$ GB at $\\$47$. The claim asks for a May bill at $10$ GB of overage on Standard.

The overview already has $x = 38$ and $y = 3$. The extra arithmetic is only evaluating Standard at $10$ GB.

**1.** Ten GB of overage at the recovered rate:

$$10 \\times 3 = 30$$

**2.** Add the recovered base:

$$38 + 30 = 68$$

The May bill is $\\$68$, matching the claim.

A solver who used Basic's $\\$15+10 \\times 2=35$ here would be answering a different plan. A solver who used Premium's flat $\\$40$ would also miss. The claim names a Standard customer.

A solver who scaled March's $\\$62$ by $10/8$ would get $\\$77.50$ and keep the $8$ GB shape inside the scale. The honest route is the recovered intercept and slope at the new overage.

The recovered Standard plan at $10$ GB bills $\\$68.00$, so the statement is True.`,

    `The statement compares Standard at $5$ GB of overage with Premium's flat $\\$40$, and claims switching to Premium would save money.

The overview already has Standard's $x=38$ and $y=3$. Premium is printed at $\\$40$ with no overage. The extra arithmetic is only costing Standard at $5$ GB and comparing.

**1.** Five GB of overage on Standard:

$$5 \\times 3 = 15$$

**2.** Add the Standard base:

$$38 + 15 = 53$$

**3.** Compare with Premium:

$$53 > 40$$

Switching to Premium saves $\\$13$ for this usage. A solver who used April's $3$ GB bill $\\$47$ as a proxy for $5$ GB would still find $47>40$, so the verdict would survive that particular underestimate. A solver who used Basic at $5$ GB, $15+10=25$, would conclude Premium is more expensive and flip the verdict. The claim is about switching from Standard, not from Basic.

The break-even between Standard and Premium is $38+3g=40$, so $g=\\frac{2}{3}$ GB. Any typical use of $5$ GB sits far above that break-even, so Premium is cheaper for that customer.

Standard at $5$ GB is $\\$53$, which is more than Premium's $\\$40$, so the statement is True.`,

    `The statement compares Basic and Standard at $8$ GB of overage, the same overage as March.

Basic is advertised as $\\$15$ plus $\\$2$ per GB. Standard's March bill for $8$ GB is already printed at $\\$62$, and the recovered plan $38+8 \\times 3=62$ confirms it. The extra arithmetic is only costing Basic at $8$ GB and comparing.

**1.** Basic at $8$ GB:

$$15 + 8 \\times 2 = 15 + 16 = 31$$

**2.** Standard at $8$ GB is March's $\\$62$.

**3.** Compare:

$$31 < 62$$

Basic is cheaper by $\\$31$ at this overage. That is not close. Standard's higher base and higher rate both push it above Basic for every positive overage.

A solver who compared Premium $\\$40$ with Standard $\\$62$ would still find Standard more expensive, but the claim names Basic, not Premium. A solver who used Standard's April bill $\\$47$ here would be using the wrong overage.

At $8$ GB of overage, Basic costs $\\$31$ and Standard costs $\\$62$, so Basic is cheaper, so the statement is True.`,
  ],
};

applyLetters("11_20.json", patches);
console.log("applied 11-13");
