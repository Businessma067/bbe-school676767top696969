import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-59": [
    `The statement claims that by Year 6, Species A's population exceeds Species B's by more than $20$ individuals.

The overview already recovered A at $+72$ per year and B at $+36$ per year. Year 2 counts are $610$ and $730$. Year 6 is four years later.

**1.** Year 6, Species A:

$$610 + 4 \\times 72 = 610 + 288 = 898$$

**2.** Year 6, Species B:

$$730 + 4 \\times 36 = 730 + 144 = 874$$

**3.** Gap:

$$898 - 874 = 24$$

Then $24 > 20$. A starts behind by $120$ at Year 2 and closes $36$ individuals per year, so after four years it has closed $144$ and leads by $24$. A solver who used Year 2's $610$ and $730$ without growing them would find A still behind and fail the claim.

At Year 6, A leads B by $24$ individuals, more than $20$, so the statement is True.`,

    `The statement sets Species B's growth equal to A's actual $+72$, and claims Year 6's combined population would then exceed $1{,}772$ by more than $140$ individuals.

B currently adds $36$ per year. The extra $36$ per year for four years is $144$.

$$1772 + 144 = 1916, \\qquad 1916 - 1772 = 144$$

Then $144 > 140$. Directly: A still $898$, B now $730+4\\times 72=1018$, combined $1916$. A solver who also raised A would double-count. The claim changes only B's rate.

The counterfactual combined population is $1{,}916$, which exceeds $1{,}772$ by $144$, more than $140$, so the statement is True.`,

    `The statement claims the ratio of the two species' total population growth from Year 2 to Year 6 is greater than $2.5:1$.

A's growth over four years: $288$. B's growth: $144$. Ratio: $288:144=2:1$. Then $2 > 2.5$ is false.

The stem already says A grows at exactly twice B's annual rate, so four years of that still gives $2:1$, not $2.5:1$. A solver who used Year 6 *levels* $898:874 \\approx 1.03:1$ would be comparing stocks, not growth. A solver who used $72:36$ as $2:1$ is the same ratio in annual form.

The growth ratio is $2:1$, not greater than $2.5:1$, so the statement is False.`,

    `The statement claims the two species had equal populations at some point between Year 2 and Year 6.

At Year 2, B leads by $120$. A closes $72-36=36$ individuals per year.

$$\\frac{120}{36} = 3.\\overline{3}$$

years after Year 2, which is Year $5.\\overline{3}$, between Year 2 and Year 6. Directly: $610+72t=730+36t$ gives $36t=120$, $t=10/3$. A solver who required an integer year would miss that equality can fall mid-year. The claim says "at some point," not "at a census year."

They meet about $3.33$ years after Year 2, which sits inside the interval, so the statement is True.`,

    `The statement claims Species A overtakes Species B in total population before Year 5.

Letter D already placed the crossing at Year $5.\\overline{3}$. Year $5.\\overline{3}$ is after Year 5, not before it.

At Year 5, three years after Year 2: A is $610+216=826$, B is $730+108=838$. B still leads by $12$. A does not overtake until a third of the way through the next year.

A solver who used $t=3$ as "Year 5" and saw $826<838$ would correctly reject the claim. A solver who counted Year 2 as year zero and used $t<5$ would get $t<5$ including $3.33$, and might accept; the calendar label "Year 5" is Year 2 plus three years, and $3.33>3$.

A overtakes at Year $5.33$, not before Year 5, so the statement is False.`,
  ],

  "math-5-60": [
    `The statement claims Plant A's output rate exceeds Plant B's by more than $45\\%$.

The overview already recovered $A=145.0$ MWh/hr and $B=98.0$ MWh/hr.

$$\\frac{145 - 98}{98} = \\frac{47}{98} \\approx 0.4796$$

about $48.0\\%$, which exceeds $45\\%$. A solver who used $47/145 \\approx 32\\%$ against A would fail the cutoff. A solver who used $145/98 \\approx 1.48$ and reported $148\\%$ would have skipped the "exceeds by" subtraction.

A exceeds B by about $48\\%$, more than $45\\%$, so the statement is True.`,

    `The statement claims Day 3's predicted total, after converting $1{,}020$ min to hours, differs from the recorded $3{,}553$ MWh by less than $0.3\\%$ of the recorded value.

The overview already predicted $3{,}543$ MWh against $3{,}553$ recorded. The conversion $1020$ min $=17$ hrs is already in that prediction.

$$\\frac{|3543 - 3553|}{3553} = \\frac{10}{3553} \\approx 0.002814$$

about $0.281\\%$, which is less than $0.3\\%$. A solver who used $1020$ min as $1020$ hours would wreck Plant A's term. A solver who compared $10$ with $0.3\\%$ of $3553 \\approx 10.66$ would see $10<10.66$ directly.

The relative gap is about $0.28\\%$, less than $0.3\\%$, so the statement is True.`,

    `The statement swaps the two plants onto each other's combined Days 1-2 hours: Plant A runs the $29$ hours Plant B actually ran, Plant B runs the $36$ hours Plant A actually ran, and claims that grand total would exceed the actual combined Day 1 + Day 2 total $8{,}062$ MWh.

**1.** Counterfactual output:

$$29 \\times 145 + 36 \\times 98 = 4205 + 3528 = 7733$$

**2.** Actual Day 1 plus Day 2:

$$3990 + 4072 = 8062$$

**3.** Compare:

$$7733 < 8062$$

The swapped assignment produces *less*, not more. Plant A is the stronger plant, and the swap gives A fewer hours ($29$ instead of $36$). That $7$-hour move from A onto B costs $7 \\times (145-98)=329$ MWh, and $8062-329=7733$.

A solver who swapped the rates instead of the hours in the opposite direction would get the actual total again. The claim's assignment is the one that under-uses A.

The swapped total is $7{,}733$ MWh, which does not exceed $8{,}062$ MWh, so the statement is False.`,

    `The statement claims the combined output rate of both plants is more than $2.4$ times Plant B's rate alone.

$$145 + 98 = 243, \\qquad \\frac{243}{98} \\approx 2.4796$$

Then $2.48 > 2.4$. Equivalently, $2.4 \\times 98=235.2$, and $243>235.2$. A solver who used $2.4 \\times 145$ against A would be using the wrong base.

The combined rate $243$ MWh/hr is about $2.48$ times B's $98$, more than $2.4$ times, so the statement is True.`,

    `The statement claims that across all three days combined, using the recorded Day 3 value, total energy exceeds $11{,}600$ MWh.

$$3990 + 4072 + 3553 = 11615$$

Then $11615 > 11600$. Using the predicted Day 3 $3543$ would give $11605$, still above $11600$, so the audit discrepancy does not flip this particular cutoff. The claim names the recorded Day 3 value, $3553$.

A solver who omitted Day 3 would get $8062$ and fail the cutoff. All three days are in the sum.

The three-day recorded total is $11{,}615$ MWh, which exceeds $11{,}600$ MWh, so the statement is True.`,
  ],
};

applyLetters("51_60.json", patches);
console.log("applied 59-60");
