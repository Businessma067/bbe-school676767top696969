import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-51": [
    `The statement costs a client with AUM of $\\$850{,}000$ and claims the fee is less than $1.75\\%$ of that AUM.

The overview already recovered a $1.6\\%$ rate plus a $\\$1{,}200$ retainer. The extra arithmetic is evaluating that rule and dividing.

**1.** Fee on $\\$850{,}000$:

$$0.016 \\times 850000 + 1200 = 13600 + 1200 = 14800$$

**2.** Effective rate:

$$\\frac{14800}{850000} \\approx 0.017412$$

about $1.741\\%$, which is less than $1.75\\%$. The retainer adds $1200/850000 \\approx 0.141$ percentage points on top of $1.6\\%$, and that bump is not enough to reach $1.75\\%$ at this AUM.

A solver who omitted the retainer would report $1.6\\%$ and still pass the cutoff, so that error would not flip the verdict. A solver who used $1.75\\%$ of $850{,}000=14875$ as the fee would be answering a different rule.

The $\\$850{,}000$ client pays about $1.741\\%$ effective, less than $1.75\\%$, so the statement is True.`,

    `The statement claims the flat retainer is more than $10\\%$ of Client 2's total fee.

Client 2's fee is printed at $\\$10{,}800$. The retainer is $\\$1{,}200$.

$$\\frac{1200}{10800} \\approx 0.1111$$

about $11.1\\%$, which exceeds $10\\%$. A solver who used Client 1's $\\$13{,}200$ as the denominator would get about $9.1\\%$ and fail the cutoff. The claim names Client 2.

The retainer is about $11\\%$ of Client 2's fee, more than $10\\%$, so the statement is True.`,

    `The statement cuts the rate by $0.2$ points to $1.4\\%$ and doubles the retainer to $\\$2{,}400$, then claims Client 1's fee (AUM $\\$750{,}000$) would decrease from its actual amount.

Actual Client 1 fee: $0.016 \\times 750000 + 1200 = 12000+1200=13200$.

**1.** New fee:

$$0.014 \\times 750000 + 2400 = 10500 + 2400 = 12900$$

**2.** Compare:

$$12900 < 13200$$

The fee falls by $\\$300$. The rate cut saves $0.002 \\times 750000=1500$, and the doubled retainer costs an extra $1200$, net $-300$.

A solver who doubled the retainer without cutting the rate would get $14400$ and see an increase. Both changes together are what produce the decrease.

Client 1's fee would fall to $\\$12{,}900$, so the statement is True.`,

    `The statement claims the percentage-point difference in effective fee rate between Client 1 and Client 2 is more than $0.05$ points.

**1.** Client 1 effective: $13200/750000=0.0176=1.76\\%$.

**2.** Client 2 effective: $10800/600000=0.0180=1.80\\%$.

**3.** Difference: $0.04$ percentage points, which is not more than $0.05$.

The retainer is a larger share of the smaller AUM, so Client 2's effective rate sits $0.04$ points above Client 1's. A solver who compared $1.6\\%$ with itself would report a $0$ gap. A solver who used $2400/150000=1.6$ extra points on the AUM *gap* would be mixing a difference-of-fees story with effective rates.

The effective-rate gap is $0.04$ points, not more than $0.05$, so the statement is False.`,

    `The statement triples Client 2's AUM and claims the total fee would be more than triple Client 2's fee.

Triple AUM: $\\$1{,}800{,}000$. Triple of Client 2's fee: $3 \\times 10800=32400$.

**1.** Fee on triple AUM:

$$0.016 \\times 1800000 + 1200 = 28800 + 1200 = 30000$$

**2.** Compare with $32400$:

$$30000 < 32400$$

The fee is *less* than triple, not more. The percentage piece triples, $3 \\times 9600=28800$, but the retainer stays $\\$1{,}200$ instead of becoming $\\$3{,}600$. That $\\$2{,}400$ shortfall is why $30000$ sits below $32400$.

A solver who tripled the whole $10800$ as if the fee were a pure percentage would accept the claim. The retainer is the whole reason the fee is sublinear.

The $1.8$ million client pays $\\$30{,}000$, which is not more than triple $\\$10{,}800$, so the statement is False.`,
  ],

  "math-5-52": [
    `The statement claims Suspension B's concentration is more than $85\\%$ higher than Suspension A's.

The overview already recovered $A=8.4$ mg/mL and $B=15.6$ mg/mL.

$$\\frac{15.6 - 8.4}{8.4} = \\frac{7.2}{8.4} \\approx 0.8571$$

about $85.7\\%$, which exceeds $85\\%$. A solver who used $15.6/8.4 \\approx 1.857$ and reported $185\\%$ would have forgotten to subtract $1$ from a "higher than" claim. A solver who used $7.2/15.6 \\approx 46\\%$ against B would fail the cutoff.

B is about $85.7\\%$ higher than A, more than $85\\%$, so the statement is True.`,

    `The statement claims Batch 3's predicted total, after converting $0.32$ L to millilitres, differs from the recorded $9{,}700$ mg by more than $1\\%$ of the recorded value.

The overview already predicted $9{,}708$ mg against $9{,}700$ recorded.

$$\\frac{|9708 - 9700|}{9700} = \\frac{8}{9700} \\approx 0.000825$$

about $0.082\\%$, which is not more than $1\\%$. The conversion $0.32$ L $=320$ mL is already in the prediction. The audit row is almost consistent; the $8$ mg gap is tiny.

A solver who used $0.32$ L as $32$ mL would wreck the prediction and manufacture a huge gap. A solver who compared $9708$ with $1\\%$ of $9700=97$ would see that $8<97$ directly.

The relative gap is about $0.08\\%$, not more than $1\\%$, so the statement is False.`,

    `The statement doubles Batch 1's Suspension B volume, A unchanged at $500$ mL, and claims the new total content would exceed $13{,}500$ mg.

Batch 1 is $500$ mL of A and $300$ mL of B at $8{,}880$ mg. Doubling B to $600$ mL adds $300 \\times 15.6$.

**1.** Extra B content:

$$300 \\times 15.6 = 4680$$

**2.** New total:

$$8880 + 4680 = 13560$$

**3.** Compare with $13500$:

$$13560 > 13500$$

Directly: $500(8.4)+600(15.6)=4200+9360=13560$. A solver who doubled A instead would add $500 \\times 8.4=4200$ and get $13080$, which does not exceed $13500$ and would flip the verdict.

The doubled-B batch holds $13{,}560$ mg, which exceeds $13{,}500$ mg, so the statement is True.`,

    `The statement claims the pooled content of Batch 1 and Batch 2 is less than twice Batch 2's content alone.

$$8880 + 12600 = 21480, \\qquad 2 \\times 12600 = 25200$$

Then $21480 < 25200$. Equivalently, Batch 1's $8880$ is less than Batch 2's $12600$, so Batch 1 plus Batch 2 is less than two times Batch 2. A solver who pooled all three batches would be answering a different sum.

Pooled $21{,}480$ mg is less than twice Batch 2's $12{,}600$ mg, so the statement is True.`,

    `The statement claims Batch 2 used a higher proportion of Suspension B, by volume, than Batch 3 did.

Batch 2: $700/(200+700)=700/900 \\approx 0.778$. Batch 3: $450/(320+450)=450/770 \\approx 0.584$. Then $0.778 > 0.584$.

This is a volume-share comparison. Concentrations do not enter. A solver who used $0.32$ L unconverted as $0.32$ mL would wreck Batch 3's share. The conversion to $320$ mL is already in the table's parenthetical.

Batch 2's B-share about $78\\%$ exceeds Batch 3's about $58\\%$, so the statement is True.`,
  ],
};

applyLetters("51_60.json", patches);
console.log("applied 51-52");
