import { thickenLetters } from "./_thicken_apply.mjs";

const extras50 = {
  "math-5-50": {
    2: `Batch 3 is the audit row, with Metal A logged in gallons and converted at $2.5$ gal $\\approx 9.5$ L. Batches 1 and 2 recovered $7.6$ kg/L and $11.4$ kg/L. Predicted mass $9.5(7.6)+6(11.4)=72.2+68.4=140.6$ kg against recorded $147.0$ kg. The $6.4$ kg gap is $6.4/147 \\approx 4.35\\%$ of the recorded total, which exceeds $4\\%$.

A solver who used $6.4/140.6 \\approx 4.55\\%$ against the prediction would still pass $4\\%$. A solver who skipped the gallon conversion and treated $2.5$ gal as $2.5$ L would predict $2.5(7.6)+6(11.4)=19+68.4=87.4$, a huge gap, and would still pass $4\\%$ but for the wrong predicted mass. The conversion $9.5$ L is what makes the discrepancy a modest $6.4$ kg rather than a catastrophic miss.

This is the inconsistent third row with a relative-error cutoff. The $4\\%$ bar is the claim's window. The $4.35\\%$ figure clears it. If the recorded mass had been $142.0$ kg, the gap would have been $1.4$ kg, about $1\\%$, and the claim would have failed.`,
    3: `Replacing Batch 3's converted $9.5$ L of A with $10$ L adds $0.5 \\times 7.6=3.8$ kg to the $140.6$ prediction, landing at $144.4$ kg. Distance to recorded $147.0$ is $2.6$ kg, which is not within $2$ kg. The extra half litre of A closes part of the audit gap but not enough.

A solver who used $10$ L of B instead would add $4 \\times 11.4=45.6$ kg and overshoot $147$ badly. The claim changes Metal A, the converted column. A solver who compared $144.4$ with $140.6$ rather than with $147.0$ would be measuring the increment, $3.8$ kg, which is not the recorded-gap test.

To come within $2$ kg of $147.0$ the prediction would need to sit between $145.0$ and $149.0$. At $10$ L of A it sits at $144.4$, still $0.6$ kg outside that window. The recovered densities plus $6$ L of B pin that $144.4$.`,
  },
};

thickenLetters("41_50.json", extras50);

const extras51 = {
  "math-5-52": {
    1: `Batch 3 is the QC row, with Suspension A logged as $0.32$ L and converted to $320$ mL. Batches 1 and 2 recovered $8.4$ and $15.6$ mg/mL. Predicted content $320(8.4)+450(15.6)=2688+7020=9708$ mg against recorded $9700$ mg. The $8$ mg gap is $8/9700 \\approx 0.082\\%$ of the recorded value, far below $1\\%$.

A solver who used $0.32$ L as $32$ mL would predict $32(8.4)+450(15.6)=268.8+7020=7288.8$, a $25\\%$ miss, and would accept "more than $1\\%$." The conversion to $320$ mL is the extra arithmetic that makes the audit almost clean. Close is not "more than $1\\%$"; it is $0.08\\%$.

This is an inconsistent third row that is *almost* consistent. Letter B asks whether the relative gap exceeds $1\\%$, and it does not. If the recorded value had been $9{,}500$ mg, the gap would have been $208$ mg, about $2.2\\%$, and the claim would have been true.`,
    2: `Doubling Batch 1's B volume from $300$ mL to $600$ mL, A held at $500$ mL, adds $300 \\times 15.6=4680$ mg to the printed $8880$, producing $13560$, sixty milligrams over $13500$. That sixty is tight. Using A's concentration on the extra $300$ mL would add $2520$ and produce $11400$, under the bar, flipping the verdict. The extra millilitres are B.

A solver who doubled both volumes would get $17760$ and still exceed $13500$, so that error would not flip the inequality, but it would be a different mix. The claim doubles B only. This is a new mix built from Batch 1 by one column change, the way extra paperbacks or extra Wheat tonnes were one-column increments earlier in the chapter.

If B had been $15.0$ mg/mL, the extra $300$ mL would add $4500$ and the new total would be $13380$, under $13500$. The recovered $15.6$ is what pushes $13560$ over the bar.`,
  },
  "math-5-54": {
    2: `Point 3 is the verification check, not a third calibration point. Points 1 and 2 recovered scale $3.50$ and offset $13.50$. At reading $45.0$ the curve predicts $3.50 \\times 45 + 13.50=171.00$. Recorded reference is $172.20$. The prediction is $1.20$ *below* the recorded value, so it does not exceed it. Even absolutely, $1.20/172.20 \\approx 0.70\\%$, under $1\\%$.

A solver who used $172.20-171$ as a positive excess of prediction over recorded would have the sign backwards. "Exceeding" requires predicted $>$ recorded. Here predicted $<$ recorded. A solver who treated Point 3 as a third calibration point and refit the line would be mixing the verification into the fit, which the table's Role column forbids.

This is the inconsistent third row on a calibration curve. The $1\\%$ relative bar is the claim's window, and the signed comparison fails before the bar is even applied. If the recorded value had been $169.00$, the prediction $171.00$ would have exceeded it by $2/169 \\approx 1.18\\%$, over $1\\%$, and the claim would have been true. The printed $172.20$ is what keeps predicted below recorded.`,
  },
  "math-5-56": {
    1: `Route 3 is the audit row, with Truck distance logged in miles and converted at $155.3$ mi $\\approx 250$ km. Routes 1 and 2 recovered $32.0$ and $18.0$ L/$100$ km. Predicted fuel $2.50 \\times 32 + 4.00 \\times 18 = 80+72=152.0$ L against recorded $155.0$ L. The $3.0$ L gap is $3/155 \\approx 1.94\\%$ of the recorded value, which is not more than $2\\%$.

A solver who treated $155.3$ mi as $155.3$ km would predict $1.553 \\times 32 + 4 \\times 18 \\approx 49.7+72=121.7$ L, about $21\\%$ below $155$, and would accept "more than $2\\%$." The conversion to $250$ km is the extra arithmetic that makes the relative gap $1.94\\%$ rather than $21\\%$. Close is not "more than $2\\%$ below."

This is the inconsistent third row with a $2\\%$ relative bar. The prediction *is* below the recorded value; the bar is what the claim fails. If the recorded value had been $160$ L, the gap would have been $8/160=5\\%$, over $2\\%$, and the claim would have been true.`,
    2: `Raising Route 1's Van distance from $620$ km to $900$ km, Truck held at $850$ km, adds $280$ km of Van at $18.0$ L/$100$ km, which is $50.4$ L, producing $383.6+50.4=434.0$ L, four litres over $430$. Using Truck's rate on those extra $280$ km would add $89.6$ L and still exceed $430$, so that swap would not flip the inequality, but it would be the wrong vehicle. The extra kilometres are Van.

A solver who replaced $620$ with $900$ on both columns would be answering a different counterfactual. This is a one-column increment on Route 1, a new mix built from a logged route. The cutoff $430$ is a round bar; $434$ clears it by four litres. If the Van rate had been $16.0$ L/$100$ km, the extra $280$ km would add $44.8$ L and the new total would be $428.4$, under $430$. The recovered $18.0$ is what pushes $434$ over the bar.`,
  },
  "math-5-58": {
    4: `Combining Auto and Home into one policy covering $85+210=295$ thousands pays the administrative fee once. Separate policies pay it twice. The saving is exactly $214.70$, and $1810-214.70=1595.30$. Linearity of the rate term means the $4.68$ per thousand on $295$ thousands matches the sum of the two rate lines; only the intercept is not doubled.

A solver who charged two fees on the combined policy would get $1810$ and find no saving. The claim's "single hypothetical policy" is what drops a fee. A solver who combined coverage as $210$ thousands only, dropping Auto, would be answering a different merge.

If the fee had been zero, combined and separate would cost the same, and the claim would fail. The recovered $214.70$ intercept is the whole reason a combined policy is cheaper. This is a new mix in the sense of a merged ticket, not a third policy row.`,
  },
  "math-5-60": {
    1: `Day 3 is the audit row, with Plant A logged as $1{,}020$ min and converted to $17$ hrs. Days 1 and 2 recovered $145.0$ and $98.0$ MWh/hr. Predicted energy $17(145)+11(98)=2465+1078=3543$ MWh against recorded $3553$ MWh. The $10$ MWh gap is $10/3553 \\approx 0.281\\%$ of the recorded value, under $0.3\\%$.

A solver who used $1020$ min as $1020$ hours would wreck Plant A's term. A solver who compared $10$ with $0.3\\%$ of $3553 \\approx 10.66$ would see $10<10.66$ directly. The conversion $17$ hrs is the extra arithmetic that makes the relative gap a few tenths of a percent rather than a catastrophe.

This is the inconsistent third row with a tight $0.3\\%$ bar. The gap *is* nonzero, so Day 3 does not rebuild exactly; it just sits inside the claim's window. If the recorded value had been $3600$ MWh, the gap would have been $57/3600=1.58\\%$, over $0.3\\%$, and the claim would have failed.`,
    2: `Swapping the two plants onto each other's combined Days 1-2 hours gives A the $20+9=29$ hours B actually ran and B the $14+22=36$ hours A actually ran. Output $29 \\times 145 + 36 \\times 98 = 4205+3528=7733$ MWh, which is $329$ MWh *below* the actual $8062$, not above it. The $329$ is $7$ hours moved from A onto B times the $47$ MWh/hr rate gap.

A solver who swapped in the other direction, giving A even more hours, would exceed $8062$ and might accept the claim. The claim's assignment is the one that under-uses the stronger plant. This is a new mix of hours, not a third day. The overview never costed $29$ and $36$ in that assignment.

If the plants had equal rates, the swap would leave $8062$ unchanged and the claim would fail. The recovered gap $145-98=47$ is what makes the under-use of A cost $329$ MWh.`,
  },
};

thickenLetters("51_60.json", extras51);
console.log("thickened 50-60");
