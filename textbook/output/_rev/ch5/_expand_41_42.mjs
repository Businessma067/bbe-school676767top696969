import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-41": [
    `The statement claims Fund B's dollar interest is more than triple Fund A's dollar interest.

The overview already recovered Fund A at $\\$4{,}800$ and Fund B at $\\$13{,}600$. The extra arithmetic is applying the two stated rates.

**1.** Fund A's interest at $5.25\\%$:

$$4800 \\times 0.0525 = 252$$

**2.** Fund B's interest at $3.75\\%$:

$$13600 \\times 0.0375 = 510$$

**3.** Compare with triple A's interest:

$$3 \\times 252 = 756, \\qquad 510 < 756$$

Fund B earns about $2.02$ times Fund A's dollars, not more than three times. B's balance is larger, but B's rate is lower, so the dollar interest does not scale with the balance.

A solver who tripled the balances instead, $3 \\times 4800=14400$ versus $13600$, would still find B short of triple, and would be answering a principal question. The claim is about dollar interest.

Fund B's $\\$510$ is not more than triple A's $\\$252$, so the statement is False.`,

    `The statement raises Fund A's rate by $1.5$ percentage points to $6.75\\%$, holds Fund B's rate, and claims combined return would rise above $\\$800$.

The overview already has $A=4800$ and $B=13600$. Fund B's interest stays $510$. The extra arithmetic is the new A interest plus that $510$.

**1.** New A interest:

$$4800 \\times 0.0675 = 324$$

**2.** Combined:

$$324 + 510 = 834$$

**3.** Compare with $\\$800$:

$$834 > 800$$

The combined return would be $\\$834$, which clears $\\$800$ by $\\$34$. The increment from the original $\\$762$ is $4800 \\times 0.015=72$, and $762+72=834$.

A solver who raised both rates by $1.5$ points would overshoot further. A solver who applied $6.75\\%$ to the whole trust would get $18400 \\times 0.0675=1242$ and miss the claim's "Fund B's rate stayed the same."

The new combined return is $\\$834$, which is above $\\$800$, so the statement is True.`,

    `The statement claims the combined annual return $\\$762$ is more than $4\\%$ of the total trust.

The overview already has $A+B=4800+13600=18400$. The extra arithmetic is the ratio.

$$\\frac{762}{18400} = 0.041413\\ldots$$

about $4.14\\%$, which is more than $4\\%$. This blended rate sits between $5.25\\%$ and $3.75\\%$, weighted toward B's larger balance, so it lands nearer $4\\%$ than $5\\%$, but still above $4\\%$.

A solver who used $762/13600 \\approx 5.6\\%$ against B only, or $762/4800=15.9\\%$ against A only, would be using the wrong denominator. The claim names Fund A plus Fund B combined.

The blended return is about $4.14\\%$ of the trust, which exceeds $4\\%$, so the statement is True.`,

    `The statement splits the trust evenly at $\\$9{,}200$ in each fund, original rates, and claims the total return would come within $\\$5$ of the actual $\\$762$.

The extra arithmetic is costing that even split.

**1.** Even-split A interest:

$$9200 \\times 0.0525 = 483$$

**2.** Even-split B interest:

$$9200 \\times 0.0375 = 345$$

**3.** Combined, then gap to $762$:

$$483 + 345 = 828$$

$$|828 - 762| = 66$$

The even split earns $\\$66$ more, not within $\\$5$. Moving money from the lower-rate B into the higher-rate A raises the blend. The actual mix is B-heavy ($13600$ versus $4800$), which is why the actual $762$ sits below the even-split $828$.

A solver who averaged the two rates, $4.5\\%$ of $18400=828$, would get the same $828$ and then still have to compare with $762$. The $\\$5$ window is far too tight for a $\\$66$ gap.

The even split earns $\\$828$, which is $\\$66$ from $\\$762$, not within $\\$5$, so the statement is False.`,

    `The statement takes the percentage difference between the two fund balances relative to the smaller balance, and claims it exceeds $180\\%$.

The smaller balance is A's $\\$4{,}800$. The extra arithmetic is the relative gap.

$$\\frac{13600 - 4800}{4800} = \\frac{8800}{4800} = 1.8\\overline{3}$$

about $183.3\\%$, which exceeds $180\\%$. Relative to B, the same dollar gap is $8800/13600 \\approx 64.7\\%$, a different figure. The claim names the smaller balance as the base.

A solver who used $13600/4800-1=1.833$ is the same arithmetic. A solver who reported $180\\%$ after rounding $1.833$ down would still exceed $180$ if they kept the extra $3.3$ points, but rounding to $180$ exactly would fail a strict "exceeds." The honest figure is $183.3\\%$.

The relative gap versus A is about $183\\%$, which exceeds $180\\%$, so the statement is True.`,
  ],

  "math-5-42": [
    `The statement claims Batch 1 and Batch 2 together contain more than $300$ g of salt.

Batch 1 printed $144$ g. Batch 2 printed $184$ g. The extra arithmetic is only the sum.

$$144 + 184 = 328$$

Then $328 > 300$. Pouring the two batches into one container does not create or destroy salt. A solver who used Batch 3's recorded $109$ as well would get $437$, still above $300$, so that extra would not flip the verdict. The claim names Batch 1 and Batch 2.

The combined salt is $328$ g, which exceeds $300$ g, so the statement is True.`,

    `The statement claims Solution B's concentration is more than $70\\%$ of Solution A's.

The overview already recovered $A=16$ g/L and $B=12$ g/L. The extra arithmetic is the ratio.

$$\\frac{12}{16} = 0.75$$

Then $0.75 > 0.70$. B is $75\\%$ of A, five points above the cutoff.

A solver who used $12/16=0.75$ but compared with $75\\%$ as if the claim said $75$ would still pass. A solver who used Batch 3's inconsistent $109$ g to back out a different B would be mixing the audit row into the recovered pair.

B is $75\\%$ of A, which is more than $70\\%$, so the statement is True.`,

    `The statement attributes Batch 3's entire $5$ g discrepancy to an error in Solution B's recorded volume, with A's $2$ L taken as correct, and claims the true B volume is closer to $6.4$ L than to $6.0$ L.

Batch 3 is $8$ L at $1:3$, so the log's split is $2$ L of A and $6$ L of B. Predicted salt at recovered concentrations is $2(16)+6(12)=32+72=104$ g. Recorded is $109$ g. The extra $5$ g, if it all sits in B at $12$ g/L, is extra B volume.

**1.** Extra B volume for $5$ g at $12$ g/L:

$$\\frac{5}{12} \\approx 0.4167$$

litres.

**2.** True B volume:

$$6 + 0.4167 \\approx 6.417$$

**3.** Distance to $6.4$ is $0.017$. Distance to $6.0$ is $0.417$. The figure is much closer to $6.4$ L.

A solver who put the $5$ g onto A at $16$ g/L would get extra A of $5/16=0.3125$ L and would be answering a different attribution. The claim holds A's $2$ L fixed. A solver who used $109/12 \\approx 9.08$ L of B, ignoring A entirely, would overshoot both $6.4$ and $6.0$.

The B-volume that absorbs the $5$ g is about $6.42$ L, closer to $6.4$ than to $6.0$, so the statement is True.`,

    `The statement claims a $3:1$ mix of A:B containing exactly $130$ g of salt would need a total volume of $7.5$ L.

The overview already has $A=16$ g/L and $B=12$ g/L. A $3:1$ mix is $75\\%$ A and $25\\%$ B. The extra arithmetic is the blend concentration, then $130$ divided by that blend.

**1.** Blend concentration:

$$0.75 \\times 16 + 0.25 \\times 12 = 12 + 3 = 15$$

g/L.

**2.** Volume for $130$ g:

$$\\frac{130}{15} \\approx 8.667$$

L.

**3.** Compare with $7.5$ L:

$$8.667 \\neq 7.5$$

At $7.5$ L the mix would hold $7.5 \\times 15=112.5$ g, which is $17.5$ g short of $130$. A solver who used $130/16=8.125$, treating the batch as pure A, or $130/12 \\approx 10.83$ as pure B, would miss $7.5$ as well. A solver who used $3:2$ from Batch 1, blend $0.6 \\times 16+0.4 \\times 12=14.4$, then $130/14.4 \\approx 9.03$, is a different ratio.

What would have to change for the opposite verdict? $7.5 \\times 15=112.5$, not $130$. To hit $130$ g at $7.5$ L the blend would need $130/7.5 \\approx 17.33$ g/L, above even pure A. The recovered pair cannot produce that.

The $3:1$ batch that holds $130$ g needs about $8.67$ L, not $7.5$ L, so the statement is False.`,

    `The statement claims Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did.

Batch 1 is $3:2$, so A's share is $3/5=0.60$. Batch 2 is $5:1$, so A's share is $5/6 \\approx 0.833$. Then $0.833 > 0.60$.

This letter does not need the recovered concentrations. It is a ratio comparison from the mixing column. Batch 3's $1:3$ is even lighter on A, but the claim names Batch 2 versus Batch 1.

Batch 2's A-share $5/6$ exceeds Batch 1's $3/5$, so the statement is True.`,
  ],
};

applyLetters("41_50.json", patches);
console.log("applied 41-42");
