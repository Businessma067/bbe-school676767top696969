import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-21": [
    `The statement claims the flyer's $\\$30$ signup fee matches what members are actually charged. Maria and Jason's histories recover a different intercept.

The overview already recovered $x = 38$. The flyer claimed $\\$30$, which sits $\\$8$ below that intercept.

**1.** At $x=30$ and the recovered monthly rate $y=41$, Maria would have paid $30+6(41)=276$, but she paid $\\$284$. Those extra $\\$8$ are the overstated-as-under signup.

**2.** The flyer also claimed $\\$45$ per month, which is not the recovered $y=41$. Both advertised numbers fail the two histories.

The recovered signup fee is $\\$38$, not $\\$30$, so the statement is False.`,

    `The statement compares the actual monthly rate with the advertised $\\$45$.

The overview already recovered $y = 41$. Then $41 < 45$, so members pay $\\$4$ less per month than the flyer states.

A solver who used $\\$45$ as if it were already confirmed would skip the two histories. The four extra months between Jason and Maria cost $\\$164$, which is $41$ per month, not $45$.

The actual monthly rate is $\\$41$, which is lower than $\\$45$, so the statement is True.`,

    `The statement compares Maria's actual $6$-month total with what the flyer's advertised rates would have produced over the same six months, and claims her actual total exceeds the flyer figure.

Maria actually paid $\\$284$. The flyer advertised $\\$30$ signup plus $\\$45$ per month. The extra arithmetic is only evaluating that advertised rule at six months.

**1.** Six months at the advertised monthly rate:

$$6 \\times 45 = 270$$

**2.** Add the advertised signup:

$$30 + 270 = 300$$

**3.** Compare with Maria's actual $\\$284$:

$$284 < 300$$

Her actual total sits $\\$16$ *below* the flyer figure, so it does not exceed it. The claim has the comparison backwards.

Where does the $\\$16$ gap come from? The actual signup is $\\$8$ higher ($38$ versus $30$), which would push Maria up, but the actual monthly rate is $\\$4$ lower ($41$ versus $45$), and six months of that $\\$4$ is $\\$24$. Net, $8-24=-16$, which is exactly $284-300$. The cheaper month outweighs the dearer signup over six months.

A solver who compared $\\$284$ with $30+6(41)=276$ would be comparing actual with a mixed rule, not with the flyer. A solver who used Jason's ten-month flyer total $30+450=480$ here would be answering a different horizon.

Maria's $\\$284$ does not exceed the flyer's $\\$300$, so the statement is False.`,

    `The statement compares Jason's $10$-month total with a $\\$400$ cutoff. Jason's listed total is already $\\$448$.

$$448 > 400$$

Rebuilding at $x=38$ and $y=41$ gives $38+10(41)=448$ as a check. A solver who used the flyer rule $30+10(45)=480$ would still clear $\\$400$, so that error would not flip the verdict. The claim is about what Jason actually paid, which is $\\$448$.

Jason paid $\\$448$, which is more than $\\$400$, so the statement is True.`,

    `This letter is not Maria or Jason. It is a member who negotiated the signup fee down to zero and then paid only the actual monthly rate for twelve months.

The overview already recovered $y = 41$. The extra arithmetic is only twelve months at that rate, with no intercept.

**1.** Drop the signup fee entirely.

**2.** Twelve months at the recovered monthly rate:

$$12 \\times 41 = 492$$

**3.** A solver who kept the recovered $\\$38$ signup would get $38+492=530$ and miss the claim. A solver who used the flyer's $\\$45$ would get $12 \\times 45=540$. A solver who used twelve months at $\\$41$ plus the flyer's $\\$30$ would get $522$. The whole content of this letter is that the signup is gone.

What would have to change for the opposite verdict? If the actual monthly rate were $\\$41.50$, twelve months would be $\\$498$. The two histories force $y=41$, and twelve months with no signup is then $\\$492$.

Twelve months at $\\$41$ with no signup is $\\$492$, so the statement is True.`,
  ],

  "math-5-22": [
    `The statement is a claim about the Basic monthly price. The two households mix Basic-months and Premium-months at shared plan prices.

The overview already recovered $x = 19$. This letter does not rebuild that pair. It only asks whether the recovered Basic price is the number in the claim.

A solver who divided Household 1's $\\$169$ by $7$ plan-months would land on about $\\$24.14$ and mix Premium into Basic. The Premium months have to be stripped out first.

The recovered Basic price is $\\$19$ per month, so the statement is True.`,

    `The statement is a claim about the Premium monthly price. The overview already recovered $y = 31$. The claim writes $\\$35$, four dollars above that leftover.

**1.** At $y=35$, Household 1 would be $4(19)+3(35)=76+105=181$, which overshoots $\\$169$ by $\\$12$. Those extra $\\$12$ are three Premium months times a $\\$4$ overstatement.

**2.** The figure $\\$35$ is a typical round guess, or $\\$255/7 \\approx 36$ after treating Household 2 as all Premium.

The claimed $\\$35$ sits $\\$4$ above the recovered $\\$31$, so the statement is False.`,

    `The statement compares Household 2's combined total with double Household 1's combined total.

Household 1 billed $\\$169$. Household 2 billed $\\$255$. The extra arithmetic is only doubling and comparing.

**1.** Double Household 1:

$$2 \\times 169 = 338$$

**2.** Compare with Household 2:

$$255 < 338$$

Household 2 is not more than double Household 1. It is about $1.51$ times Household 1. The trap is reading $255$ against $169+86$, or treating "more than double" as "more than $200$ more." Double is a ratio, not a vague increase.

A solver who compared plan-month counts $9$ against $7$ might think Household 2 should be larger by a similar ratio; the mix is more Premium-heavy, but not enough to double the dollars.

Household 2's $\\$255$ is less than double Household 1's $\\$169$, so the statement is False.`,

    `The statement claims there is some positive number of months $n$ at which $n$ months of only Basic costs the same as $n$ months of only Premium.

That would require $n x = n y$ with $n>0$, hence $x=y$. The overview already recovered $x=19$ and $y=31$, which are not equal.

**1.** At $n=1$, Basic is $\\$19$ and Premium is $\\$31$.

**2.** At any other positive $n$, both sides scale by the same $n$, so the gap $n(31-19)=12n$ stays positive. It never hits zero.

**3.** There is no connection fee to create a crossing the way PrintFast and QuickCopy can cross. Both plans are flat per month, so the cheaper plan stays cheaper at every horizon.

A solver who set $4x+3y=2x+7y$ would be equating the two household mixes, not equating pure-Basic with pure-Premium. Those household equations are already satisfied by $(19,31)$ without forcing $x=y$.

Basic and Premium never cost the same for a positive run of months, so the statement is False.`,

    `This letter is a new mix: $5$ months of Basic and $5$ months of Premium, neither household's mix.

The overview already has $x=19$ and $y=31$. The extra arithmetic is only costing five of each.

**1.** Five Basic months:

$$5 \\times 19 = 95$$

**2.** Five Premium months:

$$5 \\times 31 = 155$$

**3.** Add:

$$95 + 155 = 250$$

The mix is $\\$250$, matching the claim. In pair form, one Basic plus one Premium is $\\$50$, and five pairs are $\\$250$.

A solver who averaged the two household totals and scaled to ten months would keep the $4$-and-$3$ and $2$-and-$7$ shapes inside the average. A solver who used $y=35$ from letter B would get $95+175=270$ and miss the claim.

What would have to change for the opposite verdict? If Premium were $\\$32$, five of each would be $\\$255$. The two households force $y=31$, and five-and-five is then $\\$250$.

The recovered prices on five of each give $\\$250$, so the statement is True.`,
  ],

  "math-5-23": [
    `The statement is a claim about the apple price after bread and eggs are peeled off the receipts. Loyalty discount does not apply: neither receipt belongs to a loyalty member.

The overview already recovered $x = 4.80$. This letter does not rebuild that pair. It only asks whether the recovered apple price is the number in the claim.

A solver who divided Receipt 1's $\\$50$ by $5$ pounds of apples, ignoring everything else, would land on $\\$10$ and miss the claim. Bread, eggs, and milk all have to come off first.

The recovered apple price is $\\$4.80$ per pound, so the statement is True.`,

    `The statement claims almond milk costs less per unit than organic apples.

The overview already recovered $x=4.80$ and $y=6$. Then $6 < 4.80$ is false. Milk is more expensive per carton than apples are per pound.

Per-unit comparison here is carton versus pound, which is what the claim asks. A solver who converted to some other unit would be answering a different question. On the units as sold, milk is the dearer item.

Almond milk costs $\\$6$ and apples $\\$4.80$, so milk is not cheaper per unit, so the statement is False.`,

    `The statement compares five pounds of apples with four cartons of almond milk.

The overview already has $x=4.80$ and $y=6$. The extra arithmetic is only costing both baskets.

**1.** Five pounds of apples:

$$5 \\times 4.80 = 24$$

**2.** Four cartons of milk:

$$4 \\times 6 = 24$$

**3.** Compare:

$$24 = 24$$

The two baskets match. Five pounds of apples is exactly Receipt 1's apple column, which the leftover equation already priced at $\\$24$ once milk is stripped. Four cartons of milk are not on either receipt as a block, but $4 \\times 6=24$ is the same dollar figure.

A solver who used five cartons of milk, copying Receipt 2's milk count, would get $\\$30$ and miss the equality.

Five pounds of apples and four cartons of milk both cost $\\$24$, so the statement is True.`,

    `The statement applies the $5\\%$ loyalty discount to Receipt 1's $\\$50$ total and claims the customer would have paid less than $\\$47$.

Neither printed receipt actually received that discount. This letter is a counterfactual. The extra arithmetic is only $95\\%$ of $\\$50$.

**1.** Loyalty price on Receipt 1:

$$50 \\times 0.95 = 47.50$$

**2.** Compare with $\\$47$:

$$47.50 > 47$$

The discounted total is $\\$47.50$, which is not less than $\\$47$. The inequality is strict, and $47.50$ fails it.

A solver who computed $50-5=45$, subtracting five dollars instead of five percent, would get a figure that *is* less than $\\$47$ and flip the verdict. Five percent of $\\$50$ is $\\$2.50$, not $\\$5$. A solver who applied $5\\%$ only to the apple-and-milk leftover $\\$42$ would get $50-2.10=47.90$, still not less than $\\$47$.

The loyalty price would have been $\\$47.50$, which is not less than $\\$47$, so the statement is False.`,

    `This letter is a new mix: $10$ lb of apples and $2$ cartons of milk, compared with a $\\$60$ cutoff.

The overview already has $x=4.80$ and $y=6$. The extra arithmetic is only costing that mix.

**1.** Ten pounds of apples:

$$10 \\times 4.80 = 48$$

**2.** Two cartons of milk:

$$2 \\times 6 = 12$$

**3.** Add and compare with $\\$60$:

$$48 + 12 = 60$$

The mix equals $\\$60$, so it is not more than $\\$60$. The inequality is strict, and equality fails it.

A solver who treated "more than" as "at least" would flip the verdict. A solver who used $y=4.80$ as well, swapping the prices, would get $48+9.60=57.60$ and still fail "more than $60$", so that error would not flip this particular letter. A solver who added bread and eggs onto the mix would overshoot.

Ten pounds of apples and two cartons of milk cost exactly $\\$60$, which is not more than $\\$60$, so the statement is False.`,
  ],
};

applyLetters("21_30.json", patches);
console.log("applied 21-23");
