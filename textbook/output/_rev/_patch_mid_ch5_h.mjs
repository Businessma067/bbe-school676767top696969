import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-49:D": `The statement claims the Falcons' win-to-draw point contribution ratio exceeds $15$. Falcons had $9$ wins and $4$ draws for $75$ points. The overview already recovered a win at $7$ points and a draw at $3$.

**1.** Falcons win points:

$$9 \\times 7 = 63$$

**2.** Falcons draw points:

$$4 \\times 3 = 12$$

**3.** Ratio:

$$\\frac{63}{12} = 5.25$$

Then $5.25 > 15$ is false. The ratio is $5.25$, not above $15$. A solver who used $9/4=2.25$ of counts, or $63/4=15.75$ after dividing win points by draw *count*, would manufacture a figure near $15$. The trap figure $15.75$ is win points over draw count. The claim is point contribution to point contribution, $63:12$.

The opposite verdict would need draw points below $63/15=4.2$, which would take fewer than two draws at $3$ points. The Falcons had four draws.

The win-to-draw points ratio is $5.25$, which does not exceed $15$, so the statement is False.`,

  "math-5-50:A": `The statement raises Batch 1's Metal B from $8$ L to $10$ L, Metal A unchanged at $12$ L, and claims total mass would exceed $200$ kg. The overview already recovered $A=7.6$ kg/L and $B=11.4$ kg/L. Batch 1 printed $182.4$ kg.

**1.** Extra B mass:

$$2 \\times 11.4 = 22.8$$

**2.** New total:

$$182.4 + 22.8 = 205.2$$

**3.** Compare with $200$:

$$205.2 > 200$$

Directly: $12(7.6)+10(11.4)=91.2+114=205.2$. A solver who added $2$ L of A instead would add $15.2$ and get $197.6$, which does not exceed $200$ and would flip the verdict. The trap figure $197.6$ is extra A, not extra B. Batch 3's audit discrepancy does not rewrite Batch 1.

The opposite verdict would need $B \\le 8.8$ kg/L on those extra $2$ L. With $B=11.4$, the counterfactual Batch 1 masses $205.2$ kg.

The counterfactual Batch 1 masses $205.2$ kg, which exceeds $200$ kg, so the statement is True.`,

  "math-5-50:E": `The statement claims combining Batch 1 and Batch 2 into one hypothetical batch would yield a total mass equal to the sum of their individual masses. Combined volumes are $12+5=17$ L of A and $8+15=23$ L of B. At fixed densities, mass is linear in volume.

**1.** Combined mix at recovered densities:

$$17 \\times 7.6 + 23 \\times 11.4 = 129.2 + 262.2 = 391.4$$

**2.** Sum of printed masses:

$$182.4 + 209.0 = 391.4$$

**3.** The figures match. There is no mixing loss in the model. A solver who averaged the two densities and applied that average to $40$ L would generally miss $391.4$, because the combined mix is not a $50/50$ blend. The trap figure is a $50/50$ average of $7.6$ and $11.4$, which is $9.5$ kg/L times $40$ L $=380$ kg, short of $391.4$.

Batch 3's recorded $147$ kg is an audit row and is not pooled here. The opposite verdict would need a nonlinear mixing rule the stem does not state.

Combined mass equals the sum $391.4$ kg, so the statement is True.`,

  "math-5-51:C": `The statement cuts the fee rate by $0.2$ points to $1.4\\%$ and doubles the retainer to $\\$2{,}400$, then claims Client 1's fee (AUM $\\$750{,}000$) would decrease from its actual amount. The overview already recovered rate $1.6\\%$ and retainer $\\$1{,}200$. Actual Client 1 fee is $0.016 \\times 750000 + 1200 = 13200$.

**1.** New fee:

$$0.014 \\times 750000 + 2400 = 10500 + 2400 = 12900$$

**2.** Compare:

$$12900 < 13200$$

**3.** The fee falls by $\\$300$. The rate cut saves $0.002 \\times 750000=1500$, and the doubled retainer costs an extra $1200$, net $-300$. A solver who doubled the retainer without cutting the rate would get $14400$ and see an increase. Both changes together are what produce the decrease. The trap figure $\\$14{,}400$ is the doubled retainer alone.

The opposite verdict would need the rate cut's savings to fall at or below the extra retainer. At AUM $\\$750{,}000$, the savings $1500$ exceed the extra $1200$.

Client 1's fee would fall to $\\$12{,}900$, so the statement is True.`,

  "math-5-51:D": `The statement claims the percentage-point difference in effective fee rate between Client 1 and Client 2 is more than $0.05$ points. Client 1 AUM is $\\$750{,}000$ with fee $\\$13{,}200$. Client 2 AUM is $\\$600{,}000$ with fee $\\$10{,}800$. The extra arithmetic is the two effective rates, then the gap.

**1.** Client 1 effective: $13200/750000=0.0176=1.76\\%$.

**2.** Client 2 effective: $10800/600000=0.0180=1.80\\%$.

**3.** Difference: $0.04$ percentage points, which is not more than $0.05$.

The retainer is a larger share of the smaller AUM, so Client 2's effective rate sits $0.04$ points above Client 1's. A solver who compared $1.6\\%$ with itself would report a $0$ gap. A solver who used $2400/150000=1.6$ extra points on the AUM *gap* would be mixing a difference-of-fees story with effective rates. The trap figure $1.6$ points is that gap-rate.

The opposite verdict would need an effective-rate gap above $0.05$ points. With these two AUM levels and a $\\$1{,}200$ retainer, the gap is $0.04$.

The effective-rate gap is $0.04$ points, not more than $0.05$, so the statement is False.`,

  "math-5-52:A": `The statement claims Suspension B's concentration is more than $85\\%$ higher than Suspension A's. The overview already recovered $A=8.4$ mg/mL and $B=15.6$ mg/mL. Batch 3's $8$ mg audit discrepancy does not rewrite those concentrations.

**1.** Concentration gap:

$$15.6 - 8.4 = 7.2$$

**2.** Gap over A:

$$\\frac{7.2}{8.4} \\approx 0.8571$$

**3.** About $85.7\\%$, which exceeds $85\\%$. A solver who used $15.6/8.4 \\approx 1.857$ and reported $185\\%$ would have forgotten to subtract $1$ from a "higher than" claim. A solver who used $7.2/15.6 \\approx 46\\%$ against B would fail the cutoff. The trap figure $185\\%$ is the ratio left as a multiple.

The opposite verdict would need $B \\le 1.85A=15.54$. Recovered $B=15.6$ sits just above that.

B is about $85.7\\%$ higher than A, more than $85\\%$, so the statement is True.`,

  "math-5-52:D": `The statement claims the pooled content of Batch 1 and Batch 2 is less than twice Batch 2's content alone. Batch 1 content is $8880$ mg. Batch 2 content is $12600$ mg. Concentrations are not re-solved here.

**1.** Pooled content:

$$8880 + 12600 = 21480$$

**2.** Twice Batch 2:

$$2 \\times 12600 = 25200$$

**3.** Compare:

$$21480 < 25200$$

Equivalently, Batch 1's $8880$ is less than Batch 2's $12600$, so Batch 1 plus Batch 2 is less than two times Batch 2. A solver who pooled all three batches would be answering a different sum. The trap figure is Batch 3's recorded $9700$ mixed into the pool.

The opposite verdict would need Batch 1 to meet or exceed Batch 2. With $8880 < 12600$, the pooled total is less than twice Batch 2.

Pooled $21{,}480$ mg is less than twice Batch 2's $12{,}600$ mg, so the statement is True.`,

  "math-5-52:E": `The statement claims Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did. This is a volume-share comparison. Concentrations do not enter.

**1.** Batch 2's B-share:

$$\\frac{700}{200+700} = \\frac{700}{900} \\approx 0.778$$

**2.** Batch 3's B-share, after converting $0.32$ L to $320$ mL:

$$\\frac{450}{320+450} = \\frac{450}{770} \\approx 0.584$$

**3.** Compare:

$$0.778 > 0.584$$

A solver who used $0.32$ L unconverted as $0.32$ mL would wreck Batch 3's share. The trap figure is that unconverted $0.32$. The conversion to $320$ mL is already in the table's parenthetical.

The opposite verdict would need Batch 2 to be leaner on B than Batch 3. With $700$ of $900$ mL as B, Batch 2 is the B-heavier mix.

Batch 2's B-share about $78\\%$ exceeds Batch 3's about $58\\%$, so the statement is True.`,

  "math-5-53:C": `The statement claims Job 2's usable-material cost is more than $90\\%$ of Invoice 2's as-ordered total. The overview already recovered studs at $\\$4.50$ and drywall at $\\$38$. Usable Job 2 is $350$ studs and $175$ sheets. Invoice 2 printed $\\$8{,}946$. Waste is $12\\%$ extra studs and $8\\%$ extra drywall, already inside that invoice.

**1.** Usable cost:

$$350 \\times 4.50 + 175 \\times 38 = 1575 + 6650 = 8225$$

**2.** Share of invoice:

$$\\frac{8225}{8946} \\approx 0.9194$$

**3.** About $91.9\\%$, which exceeds $90\\%$. Waste is the remaining $8.1\\%$. A solver who used Job 1's $6600/7164 \\approx 92.1\\%$ would still pass $90\\%$, but the claim names Job 2. The trap is mixing Job 1's waste share into Job 2.

The opposite verdict would need usable cost at or below $0.90 \\times 8946=8051.40$. With $8225$, the share is $91.9\\%$.

Usable material is about $91.9\\%$ of Invoice 2, more than $90\\%$, so the statement is True.`,

  "math-5-54:A": `The statement claims the scale factor exceeds $3.4$ by more than $2.5\\%$. The overview already recovered scale $3.50$ and offset $13.50$. The extra arithmetic is the relative gap above $3.4$.

**1.** Gap above $3.4$:

$$3.50 - 3.40 = 0.10$$

**2.** Relative to $3.4$:

$$\\frac{0.10}{3.40} \\approx 0.02941$$

**3.** About $2.94\\%$, which exceeds $2.5\\%$. A solver who used $0.10/3.50 \\approx 2.86\\%$ against the scale itself would still pass $2.5\\%$. A solver who compared $3.50-3.4=0.10$ as if $0.10$ were already $2.5\\%$ of something else would be mixing a difference with a relative gap. The trap figure $0.10$ is the raw gap, not a percent.

The opposite verdict would need scale at or below $3.4 \\times 1.025=3.485$. Recovered $3.50$ sits above that.

The scale $3.50$ exceeds $3.4$ by about $2.94\\%$, more than $2.5\\%$, so the statement is True.`,

  "math-5-54:B": `The statement doubles the offset, holds the scale, and claims the predicted true value at a reading of $20$ would exceed $95$. The overview already recovered scale $3.50$ and offset $13.50$. New offset is $27$.

**1.** Scale times reading:

$$3.50 \\times 20 = 70$$

**2.** Add the doubled offset:

$$70 + 27 = 97$$

**3.** Compare with $95$:

$$97 > 95$$

A solver who doubled the scale instead would get $7 \\times 20 + 13.50=153.50$, still above $95$. A solver who used reading $12.4$ from Point 1 would be answering a different input. The trap figure $153.50$ is a doubled scale, not a doubled offset.

The opposite verdict would need $3.50 \\times 20 + 27 \\le 95$, so $97 \\le 95$, which fails. The verification-check discrepancy at reading $45$ does not rewrite this counterfactual.

At reading $20$ with doubled offset the prediction is $97$, which exceeds $95$, so the statement is True.`,

  "math-5-54:D": `The statement claims the percentage increase in true value between Point 1 and Point 2 is more than $100\\%$. Point 1 true value is $56.90$. Point 2 true value is $124.45$. The extra arithmetic is the relative increase. Scale and offset are not re-solved.

**1.** True-value gap:

$$124.45 - 56.90 = 67.55$$

**2.** Gap over Point 1:

$$\\frac{67.55}{56.90} \\approx 1.187$$

**3.** About $118.7\\%$, which exceeds $100\\%$. Point 2 is more than double Point 1. A solver who used readings $31.7/12.4 \\approx 1.556$ would be comparing raw readings, also more than $100\\%$ up, but the claim names true values. The trap figure $155.6\\%$ is the reading ratio.

The opposite verdict would need Point 2 at or below $2 \\times 56.90=113.80$. With Point 2 at $124.45$, the increase exceeds $100\\%$.

The true-value increase is about $119\\%$, more than $100\\%$, so the statement is True.`,

  "math-5-54:E": `The statement claims a reading of $8.0$ would produce a predicted true value less than half of Point 1's true value $56.90$. The overview already recovered scale $3.50$ and offset $13.50$. Half of $56.90$ is $28.45$.

**1.** Predicted at reading $8.0$:

$$3.50 \\times 8 + 13.50 = 28 + 13.50 = 41.50$$

**2.** Half of Point 1:

$$56.90 / 2 = 28.45$$

**3.** Compare:

$$41.50 < 28.45$$

is false. The offset $13.50$ keeps a low reading from scaling down as far as a through-the-origin rule would. A solver who omitted the offset would get $28$, which *is* less than $28.45$ and would flip the verdict. The trap figure $28$ is the offset-free prediction. The offset is the whole content of this letter.

The opposite verdict would need $3.50 \\times 8 + 13.50 < 28.45$, so $41.50 < 28.45$, which fails.

The prediction at reading $8$ is $41.50$, which is not less than $28.45$, so the statement is False.`,
};

const patches = [];
for (const e of index) {
  const body = bodies[`${e.id}:${e.letter}`];
  if (!body) continue;
  patches.push({
    file: e.file,
    id: e.id,
    idx: e.idx,
    letter: e.letter,
    key: e.key,
    body,
  });
}

const applied = applyMidPatches(patches);
for (const a of applied) console.log(a.id, a.letter, a.words);
console.log("applied", applied.length);
