import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-47": [
    `The statement looks fifteen years forward and claims the elder's age will then be less than double the younger's age at that time.

The overview already recovered elder $47$ and younger $19$. In fifteen years they are $62$ and $34$.

**1.** Double the younger at that time:

$$2 \\times 34 = 68$$

**2.** Compare with the elder:

$$62 < 68$$

The elder is $6$ years short of double. The ratio $62/34 \\approx 1.82$ is less than $2$. A solver who doubled the current $19$ to $38$ and compared with $47+15=62$ would be mixing a current double with a future elder.

Fifteen years from now the elder is $62$ and double the younger is $68$, so the elder is less than double, so the statement is True.`,

    `The statement claims the current age gap is more than $45\\%$ of the elder's current age.

$$47 - 19 = 28, \\qquad \\frac{28}{47} \\approx 0.5957$$

about $59.6\\%$, which exceeds $45\\%$. A solver who used $28/19 \\approx 147\\%$ against the younger would still pass a $45\\%$ cutoff, but the claim names the elder as the base. A solver who used $47-19=28$ against $100$ as if it were already a percentage of $100$ would miss the division.

The gap is about $60\\%$ of the elder's age, more than $45\\%$, so the statement is True.`,

    `The statement looks $4.5$ years forward and claims the elder will then be more than $2.5$ times the younger.

In $4.5$ years they are $51.5$ and $23.5$.

$$\\frac{51.5}{23.5} \\approx 2.191$$

Then $2.191 > 2.5$ is false. The ratio is about $2.19$, short of $2.5$. The stem's "nine years from now, twice as old" is a different horizon: at $t=9$, $56/28=2$ exactly. At $t=4.5$, halfway in time, the ratio is not halfway between $47/19 \\approx 2.47$ and $2$.

A solver who used $47/19 \\approx 2.47$ as if it were already the $4.5$-year figure would still fail $2.5$, so that slip would not flip the verdict. A solver who computed $2.5 \\times 23.5=58.75$ and compared with $51.5$ would see the shortfall directly.

At $4.5$ years the ratio is about $2.19$, not more than $2.5$, so the statement is False.`,

    `The statement looks ten years back and claims the sum of their ages was less than $40$.

Ten years ago they were $37$ and $9$. Sum: $46$. Then $46 < 40$ is false.

The sum of ages is constant-gap: it drops by $20$ over ten years from the current $47+19=66$, so $46$, which sits $6$ above $40$. A solver who used five years ago, $42+14=56$, matching the stem's first condition, would still fail "less than $40$." A solver who subtracted $10$ from the sum only once, $66-10=56$, would have aged only one person.

Ten years ago the ages summed to $46$, which is not less than $40$, so the statement is False.`,

    `The statement claims there was a point more than $4$ years ago when the elder was exactly three times the younger.

The stem already says that five years ago the elder was exactly three times the younger: $42=3 \\times 14$. Five years is more than four years. This letter is reading that stem condition against a "more than $4$ years ago" cutoff, not re-solving the ages.

A solver who used the nine-years-forward double instead would be answering a future question. The triple is in the past, at $t=-5$, which satisfies "more than $4$ years ago."

The triple occurred five years ago, which is more than four years ago, so the statement is True.`,
  ],

  "math-5-48": [
    `The statement swaps the two markup percentages and claims Order 3's retail total would decrease from $\\$1{,}350.60$.

The overview already recovered wholesale $A=55$ and $B=80$. Actual markups are $32\\%$ on A and $18\\%$ on B, so retail $72.60$ and $94.40$. Swapped: A marked $18\\%$ and B marked $32\\%$, so retail $64.90$ and $105.60$.

**1.** Swapped Order 3: $3$ of A and $12$ of B.

$$3(64.90) + 12(105.60) = 194.70 + 1267.20 = 1461.90$$

**2.** Compare with actual $\\$1{,}350.60$:

$$1461.90 > 1350.60$$

The swapped mix *increases* by $\\$111.30$, it does not decrease. Order 3 is B-heavy ($12$ versus $3$), so giving B the larger markup raises the total.

A solver who swapped unit wholesale prices instead of markups would be answering a different counterfactual. A solver who looked at Order 1, which is A-heavier, might see a decrease; the claim names Order 3.

Swapped markups raise Order 3 to $\\$1{,}461.90$, so the total does not decrease, so the statement is False.`,

    `The statement claims the dollar markup on Product B is more than $80\\%$ of the dollar markup on Product A.

Dollar markup on A: $55 \\times 0.32=17.60$. On B: $80 \\times 0.18=14.40$.

$$\\frac{14.40}{17.60} = 0.8181\\ldots$$

about $81.8\\%$, which exceeds $80\\%$. B's percentage markup is smaller, but B's wholesale is larger, so the dollar markups are close, with B still a bit below A.

A solver who compared $18\\%$ with $80\\%$ of $32\\%$ would be mixing percentage points with dollar markups.

B's dollar markup $\\$14.40$ is more than $80\\%$ of A's $\\$17.60$, so the statement is True.`,

    `The statement claims Order 1's total retail markup exceeds $\\$150$.

Order 1 is $8$ of A and $5$ of B. Markup per A is $17.60$, per B is $14.40$.

**1.** Markup on A's units:

$$8 \\times 17.60 = 140.80$$

**2.** Markup on B's units:

$$5 \\times 14.40 = 72.00$$

**3.** Combined markup:

$$140.80 + 72.00 = 212.80$$

Then $212.80 > 150$. Order 1's retail $1052.80$ minus wholesale $8(55)+5(80)=440+400=840$ is the same $212.80$.

A solver who reported $32\\%$ of $1052.80$ would be applying A's rate to the whole ticket. The two rates differ.

Order 1's markup is $\\$212.80$, which exceeds $\\$150$, so the statement is True.`,

    `The statement raises Order 3's Product B from $12$ to $15$ units, Product A unchanged at $3$, and claims the retail total would increase by more than $\\$280$.

Three extra B at retail $94.40$:

$$3 \\times 94.40 = 283.20$$

Then $283.20 > 280$. The increment is three times B's retail price, not three times wholesale. A solver who used $3 \\times 80=240$ wholesale would fail the $\\$280$ cutoff. A solver who used $3 \\times 72.60$ after swapping products would also fail.

Three extra B add $\\$283.20$, which is more than $\\$280$, so the statement is True.`,

    `The statement claims the wholesale cost ratio $B:A$ is greater than the retail price ratio $B:A$.

Wholesale: $80/55 \\approx 1.4545$. Retail: $94.40/72.60 \\approx 1.3003$. Then $1.4545 > 1.3003$.

A has the larger percentage markup, so retail A is pulled up more than retail B, which shrinks the $B:A$ ratio at retail relative to wholesale. A solver who compared $18\\%$ with $32\\%$ as if those were the price ratios would be answering a different question.

Wholesale $B/A$ exceeds retail $B/A$, so the statement is True.`,
  ],
};

applyLetters("41_50.json", patches);
console.log("applied 47-48");
