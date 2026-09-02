import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-43": [
    `The statement gives Employee A a one-time bonus equal to $10\\%$ of her actual $2.5$ hours of overtime pay, after a $40$-hour regular week with no overtime, and claims that bonus exceeds $\\$6$.

The overview already recovered overtime at $\\$26$ per hour ($17.50$ base plus $8.50$ premium). A's actual overtime pay is $2.5 \\times 26$. The extra arithmetic is $10\\%$ of that.

**1.** A's overtime pay:

$$2.5 \\times 26 = 65$$

**2.** Ten percent bonus:

$$0.10 \\times 65 = 6.50$$

**3.** Compare with $\\$6$:

$$6.50 > 6$$

The bonus is $\\$6.50$. A solver who used only the $\\$8.50$ premium, $2.5 \\times 8.50=21.25$, then $10\\%$ of that, would get $2.125$ and fail the cutoff. Overtime *pay* is the full $\\$26$ rate, not the premium alone.

The bonus is $\\$6.50$, which exceeds $\\$6$, so the statement is True.`,

    `The statement claims Employee B's overtime pay is more than $40\\%$ of his total gross.

B's overtime is $7$ hours at $\\$26$. Gross is $\\$882$.

**1.** Overtime dollars:

$$7 \\times 26 = 182$$

**2.** Share of gross:

$$\\frac{182}{882} \\approx 0.2063$$

about $20.6\\%$, which is not more than $40\\%$. Regular pay $40 \\times 17.50=700$ is the bulk of $882$.

A solver who used $7/47 \\approx 15\\%$ of hours, or $182/700$ against regular only, would still miss $40\\%$. A solver who used $26/17.50 \\approx 1.49$ as if a rate ratio were a dollar share would overshoot.

B's overtime is about $21\\%$ of gross, not more than $40\\%$, so the statement is False.`,

    `The statement compares both employees' combined actual gross with what they would have earned had both worked exactly $45$ hours at the base rate with no overtime premium.

**1.** Combined actual:

$$765 + 882 = 1647$$

**2.** Both at $45$ hours of base only:

$$2 \\times 45 \\times 17.50 = 1575$$

**3.** Compare:

$$1647 > 1575$$

Actual combined exceeds the no-premium $45$-hour story by $\\$72$. That extra is the overtime premium $8.50$ running on A's $2.5$ plus B's $7$ hours, $9.5 \\times 8.50=80.75$, minus the fact that actual hours are $42.5$ and $47$, not both $45$. The inequality direction is what the claim needs, and it holds.

A solver who used $45$ hours at the overtime rate $\\$26$ would overshoot wildly. The claim is base rate with no premium.

Combined actual $\\$1{,}647$ exceeds $\\$1{,}575$, so the statement is True.`,

    `The statement eliminates the overtime premium but raises the base wage $15\\%$, and claims Employee A's gross for the same $42.5$ hours would decrease.

New base: $17.50 \\times 1.15 = 20.125$. All $42.5$ hours pay that rate, no premium.

**1.** New gross:

$$42.5 \\times 20.125 = 855.3125$$

**2.** Compare with actual $\\$765$:

$$855.31 > 765$$

The new gross *increases* by about $\\$90$, it does not decrease. The $15\\%$ base raise on every hour more than replaces the lost premium on $2.5$ hours.

A solver who applied $15\\%$ only to the $40$ regular hours and dropped overtime entirely would get $40 \\times 20.125=805$, still above $765$. A solver who compared $20.125$ with $26$ and concluded "lower overtime rate means lower pay" would miss that the raise applies to all $42.5$ hours.

A's gross would rise to about $\\$855$, not fall, so the statement is False.`,

    `The statement compares the ratio of overtime hours $7:2.5$ with the ratio of gross pay $882:765$, and claims the hours ratio is greater.

$$\\frac{7}{2.5} = 2.8, \\qquad \\frac{882}{765} \\approx 1.153$$

Then $2.8 > 1.153$. B worked $2.8$ times A's overtime hours, but earned only about $15\\%$ more gross, because regular pay is the same $700$ for both. The overtime hours ratio is much larger than the gross ratio.

A solver who compared $182:65$ overtime dollars, $2.8$, with $2.8$ hours would find them equal and miss that the claim uses *gross* pay in the second ratio.

The hours ratio $2.8$ exceeds the gross ratio $1.15$, so the statement is True.`,
  ],

  "math-5-44": [
    `The statement gives Project 3 $20$ m of wood instead of $10$ m, wire unchanged at $40$ m, and claims the total would exceed $\\$950$.

The overview already recovered wood at $\\$27$ per m and wire at $\\$11$ per m. The extra arithmetic is costing that counterfactual mix.

**1.** Twenty metres of wood:

$$20 \\times 27 = 540$$

**2.** Forty metres of wire:

$$40 \\times 11 = 440$$

**3.** Add and compare with $\\$950$:

$$540 + 440 = 980$$

Then $980 > 950$. Compared with actual Project 3 at $\\$710$, the extra $10$ m of wood add $270$, and $710+270=980$.

A solver who used $20$ m of *wire* would add $110$ and get $820$, which does not exceed $950$ and would flip the verdict. The claim changes wood.

The counterfactual Project 3 costs $\\$980$, which exceeds $\\$950$, so the statement is True.`,

    `The statement claims the per-metre gap $x-y$ is more than $145\\%$ of the wire price.

The overview already recovered $x=27$ and $y=11$. The extra arithmetic is the gap and the ratio.

$$27 - 11 = 16, \\qquad \\frac{16}{11} \\approx 1.4545$$

Then $1.4545 > 1.45$. The gap is just over $145\\%$ of wire's price. A solver who used $16/27 \\approx 59\\%$ against wood would be using the wrong base. A solver who rounded $1.4545$ down to $1.45$ would fail a strict "more than."

The gap is about $145.45\\%$ of the wire price, which exceeds $145\\%$, so the statement is True.`,

    `The statement claims combining Project 1 and Project 3 into one hypothetical project would cost less than the sum of their individual costs $\\$750+\\$710$.

At fixed per-metre prices, combining is linear. The extra arithmetic is adding the metres and costing, then comparing with the sum of printed totals.

**1.** Combined metres: $18+10=28$ m wood, $24+40=64$ m wire.

**2.** Combined cost:

$$28(27) + 64(11) = 756 + 704 = 1460$$

**3.** Sum of individuals:

$$750 + 710 = 1460$$

The figures match. There is no bulk discount in the stem. Project 2 is a scaled copy of Project 1 and is not used here.

A solver who invented a $10\\%$ combined-project discount would get $1314$ and accept the claim. That discount is not in the model.

The combined project costs $\\$1{,}460$, the same as the two projects separately, so it does not cost less, so the statement is False.`,

    `The statement raises wire by $\\$2$ per metre, wood unchanged, and claims Project 1's total would increase by more than $15\\%$.

Project 1 has $24$ m of wire. The extra arithmetic is the dollar increase and the percentage of $\\$750$.

**1.** Dollar increase:

$$24 \\times 2 = 48$$

**2.** Percentage of Project 1:

$$\\frac{48}{750} = 0.064$$

$6.4\\%$, which is not more than $15\\%$. Wire is the cheaper line, so a $\\$2$ rise on $24$ m cannot move a $\\$750$ invoice by $15\\%$. Fifteen percent of $750$ is $112.50$, which would need a $4.69$ per-metre wire rise.

A solver who applied $15\\%$ to the wire line only, or who used $24/42 \\approx 57\\%$ of metres as if metres were dollars, would miss the $6.4\\%$ figure.

Project 1 would rise by $6.4\\%$, not by more than $15\\%$, so the statement is False.`,

    `The statement claims Project 3's cost per total metre installed is higher than Project 1's.

**1.** Project 3: $10+40=50$ m at $\\$710$, so $710/50=14.20$ per metre.

**2.** Project 1: $18+24=42$ m at $\\$750$, so $750/42 \\approx 17.86$ per metre.

**3.** Compare: $14.20 < 17.86$. Project 3 is *lower* per metre, not higher. Project 3 is wire-heavy, and wire is cheaper per metre, so the average falls.

A solver who compared totals $710$ and $750$ without dividing by metres would still find Project 3 smaller, but that is not a per-metre comparison. The claim is per total metre installed.

Project 3's $\\$14.20$ per metre is less than Project 1's $\\$17.86$, so the statement is False.`,
  ],
};

applyLetters("41_50.json", patches);
console.log("applied 43-44");
