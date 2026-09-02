import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-49": [
    `The statement sets a draw equal to half a win and claims the Falcons' total would increase from $75$.

The overview already recovered a win at $7$ points and a draw at $3$. Half a win is $3.5$, which is $0.5$ above the actual draw.

**1.** Falcons at draw $=3.5$:

$$9 \\times 7 + 4 \\times 3.5 = 63 + 14 = 77$$

**2.** Compare with $75$:

$$77 > 75$$

The total rises by $2$, because four draws each pick up half a point. A solver who also halved the win to $3.5$ would be answering a different system. The claim keeps the win at its recovered $7$ and only changes the draw.

Falcons would score $77$, which is more than $75$, so the statement is True.`,

    `The statement claims the Ravens earned more than $45\\%$ of their total points from draws alone.

Ravens: $7$ wins, $6$ draws, $67$ points. Draw points: $6 \\times 3=18$.

$$\\frac{18}{67} \\approx 0.2687$$

about $26.9\\%$, which is not more than $45\\%$. Wins still supply $49$ of the $67$ points. A solver who used $6/14 \\approx 43\\%$ of *matches* that were draws would sit near $45\\%$ and might accept the claim. The claim is points, not matches.

Ravens' draw share is about $27\\%$ of points, not more than $45\\%$, so the statement is False.`,

    `The statement uses a halved scoring system, $2$ per win and $1$ per draw, and claims the Falcons would still finish with more points than the Ravens.

**1.** Falcons halved:

$$9 \\times 2 + 4 \\times 1 = 18 + 4 = 22$$

**2.** Ravens halved:

$$7 \\times 2 + 6 \\times 1 = 14 + 6 = 20$$

**3.** Compare:

$$22 > 20$$

Falcons still lead, now by $2$ instead of $8$. Halving every point value halves both totals from $75$ and $67$ to $37.5$ and $33.5$ if the original $7$ and $3$ were simply halved, but $7/2=3.5$ is not the claim's $2$. The claim names a different scale, $2$ and $1$, which is not proportional to $7$ and $3$. Even on that different scale, Falcons remain ahead because they have more wins.

A solver who used $1$ per win and $0$ per draw would be a different system again. Under $2$ and $1$, Falcons $22$ beat Ravens $20$.

Falcons still outscore Ravens under the halved system, so the statement is True.`,

    `The statement claims the Falcons' win-to-draw point contribution ratio exceeds $15$.

Falcons win points $9 \\times 7=63$. Draw points $4 \\times 3=12$.

$$\\frac{63}{12} = 5.25$$

Then $5.25 > 15$ is false. The ratio is $5.25$, not above $15$. A solver who used $9/4=2.25$ of counts, or $63/4=15.75$ after dividing win points by draw *count*, would manufacture a figure near $15$. The claim is point contribution to point contribution, $63:12$.

The win-to-draw points ratio is $5.25$, which does not exceed $15$, so the statement is False.`,

    `The statement converts three Falcons draws into wins, leaving $12$ wins, $1$ draw, $2$ losses, and claims that team would score more than $20$ points higher than the actual $75$.

Each converted draw picks up $7-3=4$ extra points. Three conversions: $12$ extra points.

$$75 + 12 = 87$$

Then $87-75=12$, which is not more than $20$. Directly: $12 \\times 7 + 1 \\times 3=84+3=87$.

A solver who treated the three extra wins as *additional* matches, $12$ wins and $4$ draws, would get $84+12=96$, a $21$-point jump, and flip the verdict. The claim converts draws to wins, so draws fall from $4$ to $1$.

The converted record scores $87$, only $12$ above $75$, not more than $20$ above, so the statement is False.`,
  ],

  "math-5-50": [
    `The statement raises Batch 1's Metal B from $8$ L to $10$ L, Metal A unchanged at $12$ L, and claims total mass would exceed $200$ kg.

The overview already recovered $A=7.6$ kg/L and $B=11.4$ kg/L. Batch 1 printed $182.4$ kg. Extra $2$ L of B add $2 \\times 11.4$.

**1.** Extra B mass:

$$2 \\times 11.4 = 22.8$$

**2.** New total:

$$182.4 + 22.8 = 205.2$$

**3.** Compare with $200$:

$$205.2 > 200$$

Directly: $12(7.6)+10(11.4)=91.2+114=205.2$. A solver who added $2$ L of A instead would add $15.2$ and get $197.6$, which does not exceed $200$ and would flip the verdict.

The counterfactual Batch 1 masses $205.2$ kg, which exceeds $200$ kg, so the statement is True.`,

    `The statement claims Metal B's density is more than $50\\%$ greater than Metal A's.

$$\\frac{11.4}{7.6} = 1.5$$

B is *exactly* $50\\%$ greater than A, not more than $50\\%$ greater. The inequality is strict. A solver who treated "$50\\%$ greater" as including equality would flip the verdict. A solver who used $(11.4-7.6)/11.4 \\approx 33\\%$ against B would fail for a different reason.

B is $50\\%$ denser than A, not more than $50\\%$ denser, so the statement is False.`,

    `The statement claims Batch 3's mass discrepancy is more than $4\\%$ of its recorded total mass.

The overview already predicted $140.6$ kg against a recorded $147.0$ kg.

**1.** Discrepancy:

$$147.0 - 140.6 = 6.4$$

**2.** Share of recorded mass:

$$\\frac{6.4}{147.0} \\approx 0.04354$$

about $4.35\\%$, which exceeds $4\\%$. A solver who used $6.4/140.6 \\approx 4.55\\%$ against the prediction would still pass $4\\%$. A solver who used $2.5$ gal conversion error as a different discrepancy would be answering a different audit.

The $6.4$ kg gap is about $4.35\\%$ of $147.0$ kg, more than $4\\%$, so the statement is True.`,

    `The statement replaces Batch 3's converted $9.5$ L of Metal A with $10$ L, Metal B unchanged at $6$ L, and claims the predicted mass would come within $2$ kg of the recorded $147.0$ kg.

**1.** Predicted mass at $10$ L of A:

$$10(7.6) + 6(11.4) = 76 + 68.4 = 144.4$$

**2.** Distance to $147.0$:

$$|144.4 - 147.0| = 2.6$$

Then $2.6$ is not within $2$ kg. The extra $0.5$ L of A adds $3.8$ kg to the original prediction $140.6$, landing at $144.4$, still $2.6$ kg light of the recorded $147.0$.

A solver who used $10$ L of B instead would get $9.5(7.6)+10(11.4)=72.2+114=186.2$, far from $147$. The claim changes Metal A.

The $10$ L prediction is $144.4$ kg, $2.6$ kg from $147.0$, not within $2$ kg, so the statement is False.`,

    `The statement claims combining Batch 1 and Batch 2 into one hypothetical batch would yield a total mass equal to the sum of their individual masses.

At fixed densities, mass is linear in volume. Batch 1 is $182.4$ kg. Batch 2 is $209.0$ kg. Combined volumes $17$ L of A and $23$ L of B:

$$17(7.6) + 23(11.4) = 129.2 + 262.2 = 391.4$$

and $182.4+209.0=391.4$. The figures match. There is no mixing loss in the model.

A solver who averaged the two densities and applied that average to $40$ L would generally miss $391.4$, because the combined mix is not a $50/50$ blend.

Combined mass equals the sum $391.4$ kg, so the statement is True.`,
  ],
};

applyLetters("41_50.json", patches);
console.log("applied 49-50");
