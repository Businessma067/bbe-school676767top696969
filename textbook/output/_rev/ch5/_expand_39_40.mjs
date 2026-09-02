import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-39": [
    `The statement knocks $\\$5.40$ off the recovered handling fee and claims the result is an even $\\$89.20$, implying the real fee overshoots $\\$89$ by roughly six percent.

The overview already recovered the handling fee $f = 94.60$.

**1.** Knock off $5.40$:

$$94.60 - 5.40 = 89.20$$

**2.** Compare the real fee with $89$:

$$\\frac{94.60}{89} \\approx 1.0629$$

about a $6.3\\%$ overshoot of $89$, which is "roughly six percent."

A solver who subtracted $5$ would get $89.60$, not even $89.20$. The $5.40$ is the exact drop that lands on $89.20$.

The fee minus $5.40$ is $89.20$, and $94.60$ overshoots $89$ by about six percent, so the statement is True.`,

    `The statement triples the per-kilogram rate and claims the triple lands just shy of $\\$9.50$.

The overview already recovered $r = 3.15$. The extra arithmetic is only the triple.

$$3 \\times 3.15 = 9.45$$

Then $9.45 < 9.50$, shy by five cents. A solver who used $3.20$ would get $9.60$ and overshoot $9.50$.

Triple the rate is $\\$9.45$, just shy of $\\$9.50$, so the statement is True.`,

    `The statement converts Shipment 3's $99$ lb properly, applies the derived model, and claims the predicted charge comes within four dollars of the billed $\\$239.80$ but does not match it exactly.

The overview already recovered $f=94.60$ and $r=3.15$, and already converted Shipment 2's pounds to kilograms with $2.2$. The extra arithmetic is converting Shipment 3 and evaluating the model.

**1.** Convert $99$ lb:

$$\\frac{99}{2.2} = 45$$

kilograms.

**2.** Predicted charge:

$$94.60 + 45 \\times 3.15 = 94.60 + 141.75 = 236.35$$

**3.** Compare with the billed $\\$239.80$:

$$239.80 - 236.35 = 3.45$$

The gap is $\\$3.45$, which is within four dollars, and $236.35 \\neq 239.80$, so the figures do not match exactly. Shipment 3 is the audit row: the model from Shipments 1 and 2 does not rebuild it.

A solver who treated $99$ lb as $99$ kg would get $94.60+311.85=406.45$, wildly above the bill. The $2.2$ conversion is the whole content of this letter's extra step. A solver who used $1$ kg $= 2.2$ lb in the wrong direction, $99 \\times 2.2$, would be worse.

The predicted $\\$236.35$ sits $\\$3.45$ below the billed $\\$239.80$, within four dollars but not exact, so the statement is True.`,

    `The statement claims $99$ pounds run through the $2.2$-per-kilogram conversion comes out to a number divisible by seven.

Letter C already converted $99/2.2=45$. Then $45/7 \\approx 6.429$, not an integer. Forty-five is divisible by $5$ and $9$, not by $7$.

A solver who used $99/2=49.5$, dropping the $0.2$, would still not get a multiple of seven. A solver who used $98/2.2=44.545$ after rounding the pounds would also miss. The converted $45$ kg is not divisible by seven.

The converted weight is $45$ kg, not divisible by seven, so the statement is False.`,

    `The statement pushes the shipment weight to $400$ kilograms and claims the resulting charge just barely creeps past thirteen hundred fifty dollars.

The overview already has $f=94.60$ and $r=3.15$. The extra arithmetic is evaluating at $400$ kg.

**1.** Kilogram charges:

$$400 \\times 3.15 = 1260$$

**2.** Add the handling fee:

$$94.60 + 1260 = 1354.60$$

**3.** Compare with $1350$:

$$1354.60 > 1350$$

The charge creeps past $1350$ by $\\$4.60$. A solver who forgot the fee would report $1260$, which does not past $1350$ and would flip the verdict. The fee is what carries the total over the bar.

A $400$ kg shipment charges $\\$1{,}354.60$, which creeps past $\\$1{,}350$, so the statement is True.`,
  ],

  "math-5-40": [
    `The statement doubles every line of Client A's invoice and claims Client B should owe $\\$967.40$, a figure that overshoots the billed $\\$952.10$ by a hair over $1.6\\%$ of the real total.

Client B's usage is exactly double Client A's in both categories. At consistent prices, Client B's bill would be double Client A's $\\$483.70$.

**1.** Doubled Client A:

$$2 \\times 483.70 = 967.40$$

**2.** Overage against the billed $\\$952.10$:

$$967.40 - 952.10 = 15.30$$

**3.** As a share of the real total:

$$\\frac{15.30}{952.10} \\approx 0.01607$$

about $1.607\\%$, a hair over $1.6\\%$. The two invoices disagree by $\\$15.30$. That is the overview's inconsistency: no single pair of compute and storage prices can fit both rows.

A solver who doubled $\\$952.10$ instead would be doubling the wrong client. A solver who reported $1.6\\%$ exactly would be rounding the $0.007$ away; the claim says "a hair over."

Doubling Client A predicts $\\$967.40$, which overshoots $\\$952.10$ by about $1.61\\%$, so the statement is True.`,

    `The statement says that for the two invoices to describe one consistent pricing scheme, Client A alone would have needed to account for exactly half of Client B's $\\$952.10$.

If prices are constant and Client B's usage is exactly double Client A's, Client B's bill must be exactly double Client A's bill. Equivalently, Client A must be exactly half of Client B.

**1.** Half of Client B:

$$\\frac{952.10}{2} = 476.05$$

**2.** Client A printed $\\$483.70$. Then $483.70 \\neq 476.05$. The gap is $7.65$, which is half of the $\\$15.30$ discrepancy in letter A, as it must be.

The statement is a *condition* for consistency, not a claim that Client A actually was $476.05$. The condition is correct: consistency would have required Client A to be half of $952.10$. That is why the scheme is inconsistent.

A solver who treated the statement as "Client A *did* account for half" would mark it false. The wording is "would have needed to." That counterfactual condition is true.

Consistency would have required Client A to be $\\$476.05$, half of Client B, so the statement is True.`,

    `The statement places the discrepancy nearer to a $1$-in-$60$ error rate than to a $1$-in-$50$ one.

Letter A already has a $\\$15.30$ gap on a $\\$952.10$ bill.

$$\\frac{952.10}{15.30} \\approx 62.23$$

so the error is about $1$ in $62$. Distance from $62.23$ to $60$ is $2.23$. Distance to $50$ is $12.23$. The figure is nearer to $1$-in-$60$.

A solver who used $15.30/483.70 \\approx 1/31.6$ would be measuring against Client A and would sit nearer $1$-in-$30$ than either named rate. The claim is about "the discrepancy uncovered here," which letter A attached to Client B's billed total.

The error rate is about $1$ in $62$, nearer $1$-in-$60$ than $1$-in-$50$, so the statement is True.`,

    `The statement plugs in a hypothetical $\\$14.20$ per compute-unit and $\\$31.75$ per storage-unit, with no basis in the contract, and claims Client A's invoice would compute to a figure just shy of $\\$375$.

Client A used $11$ compute and $7$ storage. The extra arithmetic is only that hypothetical product.

**1.** Compute line:

$$11 \\times 14.20 = 156.20$$

**2.** Storage line:

$$7 \\times 31.75 = 222.25$$

**3.** Add and compare with $\\$375$:

$$156.20 + 222.25 = 378.45$$

Then $378.45$ is not shy of $375$. It sits $\\$3.45$ *above* $375$. The claim has the comparison backwards.

These unit prices are invented; they are not the recovered pair, because no recovered pair exists. The letter is testing a hypothetical, and that hypothetical overshoots $375$, it does not undershoot it.

A solver who used $10 \\times 14.20 + 7 \\times 31.75=142+222.25=364.25$ after dropping one compute unit would land shy of $375$ and flip the verdict. Client A has $11$ compute units, not $10$.

The hypothetical rebuild of Client A is $\\$378.45$, which is not shy of $\\$375$, so the statement is False.`,

    `The statement compares Client B's actual $\\$952.10$ with two rival hypotheses: a clean doubling of Client A at $\\$967.40$, and a $50\\%$-heavier surcharge instead of a full double at $\\$725.55$. It claims the doubling hypothesis, despite being wrong, still lands closer to the real figure.

**1.** Doubling error:

$$|967.40 - 952.10| = 15.30$$

**2.** Fifty-percent-heavier hypothesis: $1.5 \\times 483.70 = 725.55$, error:

$$|725.55 - 952.10| = 226.55$$

**3.** Compare errors:

$$15.30 < 226.55$$

Doubling is much closer, even though it is still wrong by $\\$15.30$. A $50\\%$ surcharge on Client A would describe a client whose usage was $1.5$ times A's, not double. Client B's counts are exactly double, so the doubling hypothesis is the one the counts themselves suggest. The billed dollars just fail to keep up by $\\$15.30$.

A solver who compared $967.40$ with $725.55$ without measuring against $952.10$ would be ranking the hypotheses against each other, not against the real bill. The claim is about closeness to the real figure.

The doubling hypothesis is $\\$15.30$ off; the $50\\%$ hypothesis is $\\$226.55$ off; doubling is closer, so the statement is True.`,
  ],
};

applyLetters("31_40.json", patches);
console.log("applied 39-40");
