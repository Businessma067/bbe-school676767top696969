import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-24": [
    `The statement is a claim about BrightHome's fixed connection fee. The two bills differ only in units consumed, so the fee is the intercept.

The overview already recovered $f = 33$. This letter does not rebuild that pair. It only asks whether the recovered fee is the number in the claim.

A solver who quoted customer service's rate $0.24$ here would have swapped fee and rate. A solver who averaged $\\$83.40$ and $\\$112.80$ would land on about $\\$98$ and treat that as a fee.

The recovered connection fee is $\\$33$, so the statement is True.`,

    `The statement claims customer service's $\\$0.24$ per unit is the actual rate.

The overview already recovered $r = 0.21$. The claim writes $\\$0.24$, three cents above that slope.

**1.** The $140$-unit gap between the bills is $\\$29.40$, which is $0.21$ per unit, not $0.24$. At $0.24$ that gap would have been $\\$33.60$.

**2.** Customer service's figure is unverified against the bills. The bills are the observations; the phone claim is not.

The recovered rate is $\\$0.21$, not $\\$0.24$, so the statement is False.`,

    `This letter is a new usage level: $280$ units on the standard plan, compared with a $\\$95$ cutoff.

The overview already has $f=33$ and $r=0.21$. The extra arithmetic is only evaluating the standard plan at $280$ units.

**1.** Two hundred eighty units at the recovered rate:

$$280 \\times 0.21 = 58.80$$

**2.** Add the recovered fee:

$$33 + 58.80 = 91.80$$

**3.** Compare with $\\$95$:

$$91.80 < 95$$

The standard plan at $280$ units is $\\$91.80$, which sits $\\$3.20$ under the cutoff.

A solver who used customer service's $0.24$ would get $33+67.20=100.20$, which is *not* less than $\\$95$ and would flip the verdict. Using the recovered $0.21$ is the whole content of this letter. A solver who used Solar Offset $0.29 \\times 280=81.20$ would be answering a different plan.

The standard plan at $280$ units costs $\\$91.80$, which is less than $\\$95$, so the statement is True.`,

    `The statement claims Solar Offset is cheaper than the standard plan at every usage level above $0$ units.

Solar Offset is $0.29u$ with no fee. The standard plan is $33+0.21u$. Solar is cheaper when $0.29u < 33+0.21u$, that is $0.08u < 33$, so $u < 412.5$.

**1.** At a sample $100$ units, standard is $33+21=54$ and Solar is $29$. Solar is cheaper there.

**2.** At a sample $500$ units, standard is $33+105=138$ and Solar is $145$. Standard is cheaper there.

**3.** Because there exist positive usages on both sides of $412.5$, Solar is not cheaper at *every* positive usage. Low usage favours the plan with the fee and the shallower rate. High usage favours that same standard plan once the $\\$33$ is diluted. Wait: actually high usage favours the shallower rate, which is standard at $0.21$ versus Solar at $0.29$. Solar only wins below $412.5$ units, where avoiding the $\\$33$ fee outweighs the steeper rate.

A solver who compared the two rates $0.29$ and $0.21$ without the fee would conclude standard is always cheaper and would still reject the claim, but for a stronger reason than the stem supports. The fee creates a region where Solar wins. That region is not "every usage above $0$."

Solar Offset is not cheaper at every positive usage, so the statement is False.`,

    `The statement compares the two plans at $500$ units and claims Solar Offset would be cheaper.

The extra arithmetic is only evaluating both plans at $500$.

**1.** Solar Offset at $500$ units:

$$0.29 \\times 500 = 145$$

**2.** Standard at $500$ units:

$$33 + 500 \\times 0.21 = 33 + 105 = 138$$

**3.** Compare:

$$145 > 138$$

Solar is $\\$7$ more expensive at $500$ units, not cheaper. That usage sits above the $412.5$ crossing from letter D, so the ranking has already flipped.

A solver who used customer service's $0.24$ on standard would get $33+120=153$, and then Solar's $145$ *would* be cheaper, flipping the verdict. The recovered $0.21$ is what keeps standard ahead at $500$ units.

At $500$ units Solar costs $\\$145$ and standard costs $\\$138$, so Solar is not cheaper, so the statement is False.`,
  ],

  "math-5-25": [
    `The statement is a claim about the pasta price. Table 5 is off-peak with no service fee. Table 8 is peak with a $10\\%$ fee already included.

The overview already recovered pasta $x = 19$ after peeling Table 8's fee and solving with Table 5. This letter does not rebuild that pair. It only asks whether the recovered pasta price is the number in the claim.

A solver who divided $\\$174$ by $6$ pasta dishes, ignoring appetizers, would land on $\\$29$ and miss the claim.

The recovered pasta price is $\\$19$, so the statement is True.`,

    `The statement claims an appetizer costs more than a pasta dish.

The overview already recovered pasta $19$ and appetizer $15$. Then $15 > 19$ is false. Pasta is the dearer plate.

A solver who saw Table 8's higher total with more appetizers might infer appetizers are expensive. Table 8 also has a $10\\%$ peak fee, which inflates the total without changing unit prices.

An appetizer costs $\\$15$ and pasta $\\$19$, so an appetizer is not more expensive, so the statement is False.`,

    `The statement compares Table 8's *pre-fee* subtotal with Table 5's printed total, and claims the gap is exactly $\\$26$.

Table 5 printed $\\$174$ with no fee. Table 8 printed $\\$46$ more than that, so $\\$220$, fee already included. The extra arithmetic is peeling Table 8 and subtracting.

**1.** Table 8's printed total:

$$174 + 46 = 220$$

**2.** Strip the $10\\%$ peak fee:

$$\\frac{220}{1.10} = 200$$

**3.** Subtract Table 5:

$$200 - 174 = 26$$

The pre-fee gap is $\\$26$, matching the claim. A solver who compared printed totals $220-174=46$ would be reporting the with-fee gap, which is letter-adjacent but not this claim. A solver who subtracted $10\\%$ of $220$ as $22$ would land on a subtotal of $198$ and a gap of $24$.

Table 8's pre-fee subtotal exceeds Table 5 by $\\$26$, so the statement is True.`,

    `The statement applies the $10\\%$ peak fee to Table 5's off-peak $\\$174$.

$$174 \\times 1.10 = 191.40$$

A solver who added $\\$10$ would get $\\$184$. A solver who used Table 8's $\\$220$ here would be describing Table 8, not the counterfactual Table 5.

If Table 5 had been charged the peak fee, its total would have been $\\$191.40$, so the statement is True.`,

    `This letter is a new mix: $4$ pasta and $4$ appetizers, with the $10\\%$ service charge applied, compared with a $\\$150$ cutoff.

The overview already has pasta $19$ and appetizer $15$. The extra arithmetic is costing the food, then applying the fee.

**1.** Four pasta dishes:

$$4 \\times 19 = 76$$

**2.** Four appetizers:

$$4 \\times 15 = 60$$

**3.** Food subtotal, then $10\\%$ fee, then compare with $\\$150$:

$$76 + 60 = 136, \\qquad 136 \\times 1.10 = 149.60$$

Since $149.60 < 150$, the billed mix sits forty cents under the cutoff.

A solver who skipped the fee would report $\\$136$, still less than $\\$150$, so that error would not flip the verdict. A solver who used $4 \\times 19 + 4 \\times 19$ would overshoot. A solver who compared with $\\$150$ before the fee, then added $10\\%$ of $150$, would be rounding the cutoff rather than the bill.

What would have to change for the opposite verdict? If pasta were $\\$20$, the food would be $80+60=140$ and the billed total $154$, which is not less than $\\$150$. The two tables force pasta at $\\$19$, and four-and-four with the fee is then $\\$149.60$.

Four of each with the $10\\%$ fee costs $\\$149.60$, which is less than $\\$150$, so the statement is True.`,
  ],

  "math-5-26": [
    `The statement is a claim about Item M's unit cost. Weight and volume columns are distractors; only counts and cost determine pricing.

The overview already recovered $M = 21$. This letter does not rebuild that pair. It only asks whether the recovered M price is the number in the claim.

A solver who divided Shipment 1's $\\$4{,}470$ by $110$ M units, ignoring N, would land on about $\\$40.64$ and miss the claim.

The recovered M cost is $\\$21$ per unit, so the statement is True.`,

    `The statement claims Item N costs $\\$30$ per unit.

The overview already recovered $N = 27$. The claim writes $\\$30$, three dollars above that leftover.

At $N=30$, Shipment 1 would be $110(21)+80(30)=2310+2400=4710$, which overshoots $\\$4{,}470$ by $\\$240$. Those extra $\\$240$ are eighty N units times a $\\$3$ overstatement.

The claimed $\\$30$ sits $\\$3$ above the recovered $\\$27$, so the statement is False.`,

    `The statement claims Shipment 1's per-unit average cost equals Shipment 2's per-unit average cost.

Shipment 1 is $110+80=190$ units at $\\$4{,}470$. Shipment 2 is $70+150=220$ units at $\\$5{,}520$. The extra arithmetic is those two averages.

**1.** Shipment 1 average:

$$\\frac{4470}{190} = 23.526\\ldots$$

**2.** Shipment 2 average:

$$\\frac{5520}{220} = 25.09\\ldots$$

**3.** Compare: they are not equal. Shipment 2 is heavier on the dearer Item N ($27$ versus $21$), so its average sits higher. Equal averages would need equal mix proportions, which these shipments do not have.

A solver who compared totals $4470$ and $5520$ without dividing by counts would be answering a different question. A solver who used weight as the denominator would be mixing the distractor column into the average.

The two per-unit averages are not equal, so the statement is False.`,

    `The statement is a new mix: $150$ units of Item N alone.

The overview already recovered $N=27$. The extra arithmetic is only that product.

$$150 \\times 27 = 4050$$

A solver who used $M=21$ here would get $\\$3{,}150$. A solver who used Shipment 2's $150$ N units as if they were the whole shipment would report $\\$5{,}520$ and have included the $70$ M units.

One hundred fifty N units alone cost $\\$4{,}050$, so the statement is True.`,

    `The statement claims Shipment 1's lower total cost, compared with Shipment 2, is explained by its lower total weight.

Shipment 1 costs $\\$4{,}470$ and Shipment 2 costs $\\$5{,}520$, so Shipment 1 is cheaper. The weights are $110 \\times 2.4 + 80 \\times 1.7 = 264+136=400$ kg and $70 \\times 2.4 + 150 \\times 1.7 = 168+255=423$ kg. Shipment 1 is slightly lighter, but that is not why it is cheaper.

The prices were recovered from counts and dollars, not from kilograms. Item N is dearer per unit than Item M ($27$ versus $21$), and Shipment 2 has far more N ($150$ versus $80$). That mix, not the $23$ kg weight gap, is what drives the $\\$1{,}050$ cost gap.

A solver who divided dollars by kilograms and found different dollars-per-kg would still be using weight as if it priced the goods. The table's weight column is constant per item type and never enters the unit-price system.

Shipment 1 is cheaper because of its mix of M and N, not because of total weight, so the statement is False.`,
  ],
};

applyLetters("21_30.json", patches);
console.log("applied 24-26");
