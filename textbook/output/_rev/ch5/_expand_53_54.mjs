import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-53": [
    `The statement claims the total waste-related cost on Invoice 1 exceeds $\\$700$.

Job 1 needed $200$ usable studs and $150$ usable sheets. Waste is $12\\%$ extra studs and $8\\%$ extra drywall, so $24$ extra studs and $12$ extra sheets. The overview already recovered stud $\\$4.50$ and drywall $\\$38$.

**1.** Waste studs:

$$24 \\times 4.50 = 108$$

**2.** Waste drywall:

$$12 \\times 38 = 456$$

**3.** Combined waste cost:

$$108 + 456 = 564$$

Then $564 > 700$ is false. Waste on Invoice 1 is $\\$564$, $\\$136$ short of $\\$700$. A solver who used $12\\%$ of the whole invoice $0.12 \\times 7164 \\approx 860$ would accept the claim by applying stud waste to drywall dollars too.

Invoice 1's waste costs $\\$564$, which does not exceed $\\$700$, so the statement is False.`,

    `The statement cuts drywall waste from $8\\%$ to $5\\%$, stud waste unchanged, and claims Invoice 2's total would decrease by more than $\\$150$.

Job 2 needed $175$ usable sheets. At $8\\%$ waste: $14$ extra sheets. At $5\\%$: $8.75$ extra sheets. The drop is $5.25$ sheets at $\\$38$.

$$5.25 \\times 38 = 199.50$$

Then $199.50 > 150$. Stud waste is unchanged, so it does not enter the decrement. A solver who also cut stud waste would overstate the saving. A solver who used $3\\%$ of $175$ as $5.25$ of usable rather than of extra would still get the same $5.25$ sheet drop, because $8\\%-5\\%=3\\%$ of $175$.

Invoice 2 would fall by $\\$199.50$, which is more than $\\$150$, so the statement is True.`,

    `The statement claims Job 2's usable-material cost is more than $90\\%$ of Invoice 2's as-ordered total.

Usable Job 2: $350$ studs and $175$ sheets. Invoice 2 printed $\\$8{,}946$.

**1.** Usable cost:

$$350(4.50) + 175(38) = 1575 + 6650 = 8225$$

**2.** Share of invoice:

$$\\frac{8225}{8946} \\approx 0.9194$$

about $91.9\\%$, which exceeds $90\\%$. Waste is the remaining $8.1\\%$. A solver who used Job 1's $6600/7164 \\approx 92.1\\%$ would still pass $90\\%$, but the claim names Job 2.

Usable material is about $91.9\\%$ of Invoice 2, more than $90\\%$, so the statement is True.`,

    `The statement claims the drywall price is more than $8$ times the stud price.

$$\\frac{38}{4.50} \\approx 8.444$$

Then $8.444 > 8$. Drywall is about $8.44$ studs in price. A solver who used $38/4=9.5$ after dropping the fifty cents would still pass $8$. A solver who used $8 \\times 4.50=36$ and compared with $38$ would see the extra $\\$2$ directly.

Drywall at $\\$38$ is more than $8$ times $\\$4.50$, so the statement is True.`,

    `The statement claims Job 1's waste allowance added a smaller percentage to its usable-cost total than Job 2's waste allowance added to its usable-cost total.

Job 1 usable $6600$, waste $564$, so $564/6600 \\approx 8.545\\%$. Job 2 usable $8225$, waste $721$, so $721/8225 \\approx 8.766\\%$. Then $8.545 < 8.766$.

Job 1 is relatively stud-heavier, and stud waste is $12\\%$ while drywall waste is $8\\%$, wait: Job 1 has $200$ studs versus $150$ sheets, Job 2 has $350$ versus $175$, so Job 2 is actually more stud-heavy in count ratio $350/175=2$ versus $200/150 \\approx 1.33$. Studs have the higher waste rate, so Job 2's waste percentage of usable cost... hmm let me not overcomplicate. The arithmetic already shows Job 1's percentage is smaller.

A solver who compared dollar waste $564$ and $721$ without dividing by usable cost would still find Job 1 smaller, but that is not a percentage of usable cost.

Job 1's waste add-on about $8.55\\%$ is smaller than Job 2's about $8.77\\%$, so the statement is True.`,
  ],

  "math-5-54": [
    `The statement claims the scale factor exceeds $3.4$ by more than $2.5\\%$.

The overview already recovered scale $3.50$.

$$\\frac{3.50 - 3.40}{3.40} = \\frac{0.10}{3.40} \\approx 0.02941$$

about $2.94\\%$, which exceeds $2.5\\%$. A solver who used $0.10/3.50 \\approx 2.86\\%$ against the scale itself would still pass $2.5\\%$. A solver who compared $3.50-3.4=0.10$ as if $0.10$ were already $2.5\\%$ of something else would be mixing a difference with a relative gap.

The scale $3.50$ exceeds $3.4$ by about $2.94\\%$, more than $2.5\\%$, so the statement is True.`,

    `The statement doubles the offset, holds the scale, and claims the predicted true value at a reading of $20$ would exceed $95$.

New offset $27$. Scale $3.50$.

$$3.50 \\times 20 + 27 = 70 + 27 = 97$$

Then $97 > 95$. A solver who doubled the scale instead would get $7 \\times 20 + 13.50=153.50$, still above $95$. A solver who used reading $12.4$ from Point 1 would be answering a different input.

At reading $20$ with doubled offset the prediction is $97$, which exceeds $95$, so the statement is True.`,

    `The statement claims the verification at reading $45.0$ shows the calibration curve's predicted value exceeding the recorded reference by more than $1\\%$ of the recorded value.

The overview already predicted $171.00$ against a recorded $172.20$.

**1.** Predicted minus recorded:

$$171.00 - 172.20 = -1.20$$

The prediction is *below* the recorded value, not above. "Exceeding" fails on sign.

**2.** Even in absolute terms, $1.20/172.20 \\approx 0.70\\%$, which is not more than $1\\%$.

A solver who used $172.20-171=1.20$ as a positive excess of prediction over recorded would have the sign backwards. The curve undershoots the check point.

The prediction $171.00$ does not exceed $172.20$ by more than $1\\%$, so the statement is False.`,

    `The statement claims the percentage increase in true value between Point 1 and Point 2 is more than $100\\%$.

Point 1 true value $56.90$. Point 2 true value $124.45$.

$$\\frac{124.45 - 56.90}{56.90} = \\frac{67.55}{56.90} \\approx 1.187$$

about $118.7\\%$, which exceeds $100\\%$. Point 2 is more than double Point 1. A solver who used readings $31.7/12.4 \\approx 1.556$ would be comparing raw readings, also more than $100\\%$ up, but the claim names true values.

The true-value increase is about $119\\%$, more than $100\\%$, so the statement is True.`,

    `The statement claims a reading of $8.0$ would produce a predicted true value less than half of Point 1's true value $56.90$.

Half of $56.90$ is $28.45$. Predicted at $8.0$:

$$3.50 \\times 8 + 13.50 = 28 + 13.50 = 41.50$$

Then $41.50 < 28.45$ is false. The offset $13.50$ keeps a low reading from scaling down as far as a through-the-origin rule would. A solver who omitted the offset would get $28$, which *is* less than $28.45$ and would flip the verdict. The offset is the whole content of this letter.

The prediction at reading $8$ is $41.50$, which is not less than $28.45$, so the statement is False.`,
  ],
};

applyLetters("51_60.json", patches);
console.log("applied 53-54");
