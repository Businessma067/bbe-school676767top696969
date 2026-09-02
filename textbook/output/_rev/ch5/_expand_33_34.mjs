import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-33": [
    `The statement triples a Specialty Drink's recovered price and claims the result clears twenty dollars.

The overview already recovered a drink at $\\$6.35$. The extra arithmetic is only that triple.

$$3 \\times 6.35 = 19.05$$

Then $19.05 > 20$ is false. The triple sits $\\$0.95$ short of $\\$20$.

A solver who used $6.70$ would get $20.10$ and flip the verdict. A solver who rounded $6.35$ to $7$ first would get $21$ and also flip it. The recovered $6.35$ is what keeps the triple under $20$.

Three drinks cost $\\$19.05$, which does not clear $\\$20$, so the statement is False.`,

    `The statement compares four Pastries with one Specialty Drink plus one Pastry.

The overview already recovered a drink at $6.35$ and a pastry at $3.80$. The extra arithmetic is costing both baskets.

**1.** Four pastries:

$$4 \\times 3.80 = 15.20$$

**2.** One drink and one pastry:

$$6.35 + 3.80 = 10.15$$

**3.** Compare:

$$15.20 > 10.15$$

Four pastries cost $\\$5.05$ more. That is "quite a bit more" in the sense of the claim: more than a $50\\%$ premium on the smaller basket. A solver who compared four pastries with four drinks would be answering a different question.

Four pastries cost $\\$15.20$ and the mixed pair costs $\\$10.15$, so four pastries cost more, so the statement is True.`,

    `The statement claims the printed calorie counts, crossed with the dollar totals, can pin down both prices without using the item quantities.

Calories are printed "for the customer's reference only." They are not a second currency. Two dollar totals with two item types already pin the prices; that is the overview's $2 \\times 2$. Calories are a distractor column, like the oven material costs that were not needed to recover counts.

**1.** Receipt 1 lists $6100$ calories and $\\$78.65$. Receipt 2 lists $5400$ calories and $\\$85.05$. Those four numbers, without quantities, are two pairs (calories, dollars). Two pairs cannot separate four unknowns (drink price, pastry price, drink calories, pastry calories).

**2.** Even as a dollars-only story, dropping the quantities $7$, $9$, $11$, and $4$ leaves two totals and two unknown prices, which is one equation short of a unique pair if the quantities are unknown too.

**3.** The overview used the quantities. Without them the calorie column does not become a substitute system. Nothing in the stem says calories are proportional to price.

A solver who divided $78.65$ by $6100$ and $85.05$ by $5400$ would get two dollars-per-calorie figures and still have no item prices. A solver who treated calories as if they were item counts would be inventing a model the till receipts do not state.

The calorie counts do not pin down the prices without the quantities, so the statement is False.`,

    `The statement splits Receipt 1's $\\$78.65$ evenly across its $16$ items and claims the per-item figure just barely creeps past $\\$4.90$.

**1.** Items on Receipt 1:

$$7 + 9 = 16$$

**2.** Even split:

$$\\frac{78.65}{16} = 4.915625$$

**3.** Compare with $\\$4.90$:

$$4.915625 > 4.90$$

The average clears $4.90$ by about one and a half cents. It sits between the two recovered prices $6.35$ and $3.80$, as a $7$-and-$9$ mix must, and it leans toward the more numerous pastries.

A solver who split Receipt 2, $85.05/15=5.67$, would overshoot $4.90$ by a lot and still "creep past," so the verdict would survive that mix-up, but the claim names Receipt 1. A solver who rounded $4.915$ down to $4.90$ would fail "past."

Receipt 1's even split is about $\\$4.92$, which creeps past $\\$4.90$, so the statement is True.`,

    `This letter is a new mix run for a week: daily $2$ drinks and $2$ pastries, compared with $\\$150$ leftover change under $\\$8$.

The overview already has drink $6.35$ and pastry $3.80$. The extra arithmetic is costing one day, then seven days, then the change from $\\$150$.

**1.** One day's $2$ drinks and $2$ pastries:

$$2(6.35) + 2(3.80) = 12.70 + 7.60 = 20.30$$

**2.** Seven such days:

$$7 \\times 20.30 = 142.10$$

**3.** Change from $\\$150$:

$$150 - 142.10 = 7.90$$

Then $7.90 < 8$. The leftover is ten cents under eight dollars.

A solver who used six days, treating a work week as $6$, would get $121.80$ and leftover $28.20$, which is not less than $\\$8$ in the sense of a tight leftover, and would miss the claim's "less than $8$ in change" as a tight figure. A solver who skipped the pastries would get $7 \\times 12.70=88.90$ and leftover $61.10$. A solver who used $7 \\times 21=147$ as a round pair price would get leftover $3$, still less than $8$, so that rounding would not flip the inequality, but it would miss the exact $7.90$.

What would have to change for the opposite verdict? If a day cost $20.40$, seven days would be $142.80$ and leftover $7.20$, still under $8$. To leave $8$ or more, seven days would need to cost $142$ or less, so a day $20.285$ or less. The recovered pair forces $20.30$ per day and leftover $7.90$.

Left over from $\\$150$ after a week of $2$-and-$2$ is $\\$7.90$, which is less than $\\$8$, so the statement is True.`,
  ],

  "math-5-34": [
    `The statement reads Email 1 as implying four dozen croissants already blow past fifty-five dollars.

The overview already recovered croissants at $\\$13.85$ per dozen. The extra arithmetic is only four dozen.

$$4 \\times 13.85 = 55.40$$

Then $55.40 > 55$. Four dozen croissants cost $\\$55.40$, which blows past fifty-five by forty cents.

A solver who used baguettes $9.40$ here would get $37.60$ and miss the claim. A solver who rounded $13.85$ down to $13$ would get $52$ and fail the cutoff.

Four dozen croissants cost $\\$55.40$, which is past $\\$55$, so the statement is True.`,

    `The statement places the per-dozen gap between croissants and baguettes closer to four dollars than to five.

The overview already recovered $13.85$ and $9.40$. The extra arithmetic is the gap and the two distances.

$$13.85 - 9.40 = 4.45$$

Distance to $4$ is $0.45$. Distance to $5$ is $0.55$. Then $0.45 < 0.55$, so $4.45$ is closer to four.

A solver who rounded $4.45$ to $4.50$ and called that equidistant would still not prefer five. A solver who used $14-9=5$ after rounding both prices would land on five exactly and miss "closer to four."

The gap is $\\$4.45$, closer to four than to five, so the statement is True.`,

    `This letter is a new mix: ten dozen of each pastry. The claim says croissants alone would already account for more than three-fifths of the combined bill.

The overview already has croissants $13.85$ and baguettes $9.40$. The extra arithmetic is costing both lines and taking the croissant share.

**1.** Ten dozen croissants:

$$10 \\times 13.85 = 138.50$$

**2.** Ten dozen baguettes:

$$10 \\times 9.40 = 94.00$$

**3.** Combined bill, then the croissant share, then compare with three-fifths:

$$138.50 + 94.00 = 232.50$$

$$\\frac{138.50}{232.50} = \\frac{277}{465} \\approx 0.5957$$

Three-fifths is $0.6$. Then $0.5957 < 0.6$, so croissants do not account for more than three-fifths. They sit just under.

A solver who used $14$ and $9$ as round prices would get $140/(140+90)=140/230 \\approx 0.609$, which *does* exceed three-fifths and would flip the verdict. The recovered cents, $13.85$ and $9.40$, are what keep the share under $0.6$. A solver who compared $138.50$ with $0.6 \\times 232.50=139.50$ would see the $\\$1$ shortfall directly.

What would have to change for the opposite verdict? If croissants were $14.00$, ten dozen would be $140$ and the share $140/234 \\approx 0.598$ still under, wait $10 \\times 9.40=94$, $140+94=234$, $140/234 \\approx 0.598$. Still under. Croissants would need to be high enough that $10x/(10x+94)>0.6$, so $10x > 0.6(10x+94)$, so $4x > 56.4$, so $x>14.10$. The recovered $13.85$ sits below that threshold.

Croissants' share is about $59.6\\%$, which is not more than three-fifths, so the statement is False.`,

    `The statement compares Email 1's cost per dozen-item with Email 2's, and claims Email 1 runs pricier by a gap that clears two dollars.

Email 1 is $14+11=25$ dozen at $\\$297.30$. Email 2 is $6+23=29$ dozen at $\\$299.30$. The extra arithmetic is the two averages and their difference.

**1.** Email 1 per dozen:

$$\\frac{297.30}{25} = 11.892$$

**2.** Email 2 per dozen:

$$\\frac{299.30}{29} \\approx 10.321$$

**3.** Gap:

$$11.892 - 10.321 \\approx 1.571$$

Then $1.571 > 2$ is false. Email 1 is pricier per dozen, but the gap is about $\\$1.57$, which does not clear two dollars.

A solver who used $297.30/14$ or $299.30/6$, ignoring baguettes, would manufacture a huge gap. A solver who compared totals $299.30-297.30=2.00$ would be comparing whole invoices, not per-dozen figures, and that $2.00$ gap on totals is a coincidence that does not transfer to the averages, because the dozen-counts differ.

Email 1's per-dozen figure exceeds Email 2's by about $\\$1.57$, not by more than $\\$2$, so the statement is False.`,

    `The statement tacks three extra dollars onto every dozen baguettes in Email 2, leaves croissants untouched, and claims the new invoice total has cents digit thirty.

Email 2 has $23$ dozen baguettes at a printed total of $\\$299.30$. The extra arithmetic is $23 \\times 3$ added onto that total.

**1.** Extra dollars on baguettes:

$$23 \\times 3 = 69$$

**2.** New invoice total:

$$299.30 + 69 = 368.30$$

**3.** The cents digit of $368.30$ is $30$, matching the claim. Adding whole dollars cannot change the cents, so the cents stay $30$ from the original $\\$299.30$ whatever whole-dollar tack is used. The "exactly thirty" is then automatic. The claim is still true.

A solver who also raised croissants would be answering a different counterfactual. A solver who used Email 1's $11$ dozen baguettes would get $297.30+33=330.30$, still cents $30$, so that mix-up would not flip the cents claim.

The new Email 2 total is $\\$368.30$, whose cents digit is thirty, so the statement is True.`,
  ],
};

applyLetters("31_40.json", patches);
console.log("applied 33-34");
