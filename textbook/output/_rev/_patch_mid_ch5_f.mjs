import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-39:A": `The statement knocks $\\$5.40$ off Continental Freight's recovered handling fee and claims the result is an even $\\$89.20$, implying the real fee overshoots $\\$89$ by roughly six percent. The overview already recovered the fee $f=94.60$ and the rate $3.15$ per kg. The extra arithmetic is only that subtraction and the percent check.

**1.** Knock $\\$5.40$ off the recovered fee:

$$94.60 - 5.40 = 89.20$$

**2.** The leftover $\\$89.20$ is even in the cents the claim named.

**3.** Overshoot of $\\$89$: $94.60-89=5.60$, and $5.60/89 \\approx 0.0629$, about $6.3\\%$, which is roughly six percent.

A solver who knocked $\\$5.40$ off $89$ would get $83.60$ and miss the claim. A solver who used the rate $3.15$ here would be subtracting a per-kg figure from a fee. Shipment 3's audit discrepancy does not rewrite the fee. The opposite verdict would need a different recovered fee. With $f=94.60$, knocking off $5.40$ lands on $89.20$.

Knocking $\\$5.40$ off the fee lands on $\\$89.20$, so the statement is True.`,

  "math-5-39:D": `The statement converts ninety-nine pounds at $2.2$ pounds per kilogram and claims the result is divisible by seven. This letter does not need the recovered fee or rate. The extra arithmetic is only the conversion, then the divisibility check.

**1.** Convert $99$ lb to kilograms:

$$\\frac{99}{2.2} = 45$$

**2.** Test divisibility by seven:

$$\\frac{45}{7} \\approx 6.429$$

which is not an integer. Then $45$ is not divisible by seven.

**3.** A solver who used $99/2=49.5$, dropping the $0.2$, would still not get a multiple of seven. A solver who used $99 \\times 2.2=217.8$ would have multiplied instead of divided and would then notice $217.8/7$ is also not an integer. The trap figure $49$ is $7 \\times 7$, nearby if someone converted $98$ lb instead of $99$.

The opposite verdict would need a pound count whose kilogram conversion is a multiple of seven, for instance $154$ lb giving $70$ kg. With $99$ lb at $2.2$ lb/kg, the kilogram figure is $45$.

Ninety-nine pounds convert to $45$ kg, which is not divisible by seven, so the statement is False.`,

  "math-5-39:E": `The statement pushes a shipment to $400$ kilograms and claims the resulting charge just barely creeps past thirteen hundred fifty dollars. The overview already recovered $f=94.60$ and $r=3.15$ per kg. The extra arithmetic is only evaluating that line at $400$ kg.

**1.** Mileage-style weight charges at $400$ kg:

$$400 \\times 3.15 = 1260$$

**2.** Add the handling fee:

$$94.60 + 1260 = 1354.60$$

**3.** Compare with $1350$:

$$1354.60 > 1350$$

The charge creeps past $1350$ by $\\$4.60$. A solver who forgot the fee would report $\\$1{,}260$ and fail the cutoff. A solver who used $400 \\times 3=1200$ plus $94.60=1294.60$ would also fail it. The trap figure $1260$ is the weight layer alone.

Shipment 3's audit discrepancy does not move this $400$ kg counterfactual. The opposite verdict would need $400r+f \\le 1350$, so $r \\le 3.1385$ at $f=94.60$. The recovered $r=3.15$ is just above that. A pound-recorded branch converting $400$ kg as $880$ lb and then treating pounds as kilograms would wreck the rate layer; this letter stays in kilograms.

A $400$ kg shipment charges $\\$1{,}354.60$, which creeps past $\\$1{,}350$, so the statement is True.`,

  "math-5-40:C": `The statement places the discrepancy nearer to a $1$-in-$60$ error rate than to a $1$-in-$50$ one. Client B's usage is exactly double Client A's, but Client B was billed $\\$952.10$ rather than double Client A's $\\$483.70$. Letter A already has a $\\$15.30$ gap on that $\\$952.10$ bill. The extra arithmetic is the error rate and the two distances.

**1.** Error rate against Client B's billed total:

$$\\frac{952.10}{15.30} \\approx 62.23$$

so the error is about $1$ in $62$.

**2.** Distance from $62.23$ to $60$ is $2.23$. Distance to $50$ is $12.23$.

**3.** Then $2.23 < 12.23$, so the figure is nearer to $1$-in-$60$.

A solver who used $15.30/483.70 \\approx 1/31.6$ would be measuring against Client A and would sit nearer $1$-in-$30$ than either named rate. The trap figure $1/31.6$ is the gap measured on the wrong invoice. The claim is about \"the discrepancy uncovered here,\" which letter A attached to Client B's billed total.

The opposite verdict would need the rate to sit closer to $50$ than to $60$, for instance a $\\$19$ gap on $\\$952$. With a $\\$15.30$ gap, the rate is about $1$ in $62$.

The error rate is about $1$ in $62$, nearer $1$-in-$60$ than $1$-in-$50$, so the statement is True.`,

  "math-5-41:C": `The statement claims the combined annual return $\\$762$ is more than $4\\%$ of the total trust. The overview already recovered Fund A at $\\$4{,}800$ and Fund B at $\\$13{,}600$. The extra arithmetic is the combined principal, then the ratio.

**1.** Combined trust:

$$4800 + 13600 = 18400$$

**2.** Combined return over combined principal:

$$\\frac{762}{18400} = 0.041413\\ldots$$

**3.** About $4.14\\%$, which is more than $4\\%$. This blended rate sits between A's $5.25\\%$ and B's $3.75\\%$, weighted toward B's larger balance, so it lands nearer $4\\%$ than $5\\%$, but still above $4\\%$.

A solver who used $762/13600 \\approx 5.6\\%$ against B only, or $762/4800=15.9\\%$ against A only, would be using the wrong denominator. The trap figure $15.9\\%$ is A-only. The claim names Fund A plus Fund B combined.

The opposite verdict would need a combined return of $736$ or less on $18400$. With $\\$762$ as the year's combined return, the blended rate exceeds $4\\%$.

The blended return is about $4.14\\%$ of the trust, which exceeds $4\\%$, so the statement is True.`,

  "math-5-42:A": `The statement claims Batch 1 and Batch 2 together contain more than $300$ g of salt. Batch 1 printed $144$ g. Batch 2 printed $184$ g. Pouring the two batches into one container does not create or destroy salt. The extra arithmetic is only the sum. Recovered concentrations are not needed.

**1.** Add the two printed salt contents:

$$144 + 184 = 328$$

**2.** Compare with $300$ g:

$$328 > 300$$

**3.** The combined salt exceeds $300$ g by $28$ g. A solver who used Batch 3's recorded $109$ as well would get $437$, still above $300$, so that extra would not flip the verdict. A solver who used Batch 3's predicted $104$ would get $432$, still above. The claim names Batch 1 and Batch 2.

The opposite verdict would need those two batches to total $300$ g or less. With $144$ and $184$ as printed, the combined salt is $328$ g.

The combined salt is $328$ g, which exceeds $300$ g, so the statement is True.`,

  "math-5-42:B": `The statement claims Solution B's concentration is more than $70\\%$ of Solution A's. The overview already recovered $A=16$ g/L and $B=12$ g/L. The extra arithmetic is the ratio.

**1.** B as a fraction of A:

$$\\frac{12}{16} = 0.75$$

**2.** Compare with $70\\%$:

$$0.75 > 0.70$$

**3.** B is $75\\%$ of A, five points above the cutoff. A solver who used $12/16=0.75$ but compared with $75\\%$ as if the claim said $75$ would still pass. A solver who used Batch 3's inconsistent $109$ g to back out a different B would be mixing the audit row into the recovered pair. The trap figure $109$ is the recorded Batch 3 total, not a concentration.

The opposite verdict would need $B \\le 0.70A$, so $B \\le 11.2$ at $A=16$. The recovered $B=12$ sits above that. Batch 1's $3:2$ mix at $16$ and $12$ rebuilds $6(16)+4(12)=96+48=144$, a check that those concentrations still sit on the printed salt, not a second solve.

B is $75\\%$ of A, which is more than $70\\%$, so the statement is True.`,

  "math-5-42:E": `The statement claims Batch 2 used a higher proportion of Solution A, by volume, than Batch 1 did. Batch 1 is mixed $3:2$, so A's share is $3/5=0.60$. Batch 2 is mixed $5:1$, so A's share is $5/6 \\approx 0.833$. This letter does not need the recovered concentrations. It is a ratio comparison from the mixing column.

**1.** Batch 1's A-share:

$$\\frac{3}{5} = 0.60$$

**2.** Batch 2's A-share:

$$\\frac{5}{6} \\approx 0.833$$

**3.** Compare:

$$0.833 > 0.60$$

Batch 3's $1:3$ is even lighter on A, but the claim names Batch 2 versus Batch 1. A solver who compared total volumes instead of proportions would be answering a different question. A solver who used salt grams $184$ versus $144$ would be ranking content, not A's volume share.

The opposite verdict would need Batch 2's A:B ratio to be leaner on A than $3:2$. The log's $5:1$ is richer on A.

Batch 2's A-share $5/6$ exceeds Batch 1's $3/5$, so the statement is True.`,

  "math-5-43:B": `The statement claims Employee B's overtime pay is more than $40\\%$ of his total gross. Employee B worked $40$ regular hours plus $7$ overtime hours for $\\$882$ gross. The overview already recovered base $17.50$ and overtime $26$ (base plus $\\$8.50$ premium). The extra arithmetic is B's overtime dollars over B's gross.

**1.** Overtime dollars:

$$7 \\times 26 = 182$$

**2.** Share of gross:

$$\\frac{182}{882} \\approx 0.2063$$

**3.** About $20.6\\%$, which is not more than $40\\%$. Regular pay $40 \\times 17.50=700$ is the bulk of $882$. A solver who used $7/47 \\approx 15\\%$ of hours, or $182/700$ against regular only, would still miss $40\\%$. A solver who used $26/17.50 \\approx 1.49$ as if a rate ratio were a dollar share would overshoot. The trap figure $40\\%$ is a round bar far above $20.6\\%$.

The opposite verdict would need overtime dollars above $0.40 \\times 882=352.80$, which would take more than $13.5$ overtime hours at $26$. B worked $7$.

B's overtime is about $21\\%$ of gross, not more than $40\\%$, so the statement is False.`,

  "math-5-43:E": `The statement compares the ratio of overtime hours $7:2.5$ with the ratio of gross pay $882:765$, and claims the hours ratio is greater. Employee A had $2.5$ overtime hours and $\\$765$ gross. Employee B had $7$ overtime hours and $\\$882$ gross. Regular pay is $40 \\times 17.50=700$ for both.

**1.** Overtime-hours ratio:

$$\\frac{7}{2.5} = 2.8$$

**2.** Gross-pay ratio:

$$\\frac{882}{765} \\approx 1.153$$

**3.** Compare:

$$2.8 > 1.153$$

B worked $2.8$ times A's overtime hours, but earned only about $15\\%$ more gross, because regular pay is the same $700$ for both. A solver who compared $182:65$ overtime dollars, $2.8$, with $2.8$ hours would find them equal and miss that the claim uses *gross* pay in the second ratio. The trap is swapping gross for overtime dollars.

The opposite verdict would need the gross ratio to reach $2.8$, which would require B to earn $2.8 \\times 765=2142$. B earned $882$.

The hours ratio $2.8$ exceeds the gross ratio $1.15$, so the statement is True.`,
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
