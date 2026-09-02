import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-57": [
    `The statement claims the equity rate exceeds the bond rate by more than $20\\%$ of the bond rate.

The overview already recovered bond $5.4\\%$ and equity $6.6\\%$.

$$\\frac{6.6 - 5.4}{5.4} = \\frac{1.2}{5.4} \\approx 0.2222$$

about $22.2\\%$, which exceeds $20\\%$. A solver who used $1.2/6.6 \\approx 18.2\\%$ against equity would fail the cutoff. The claim names the bond rate as the base.

Equity exceeds the bond rate by about $22.2\\%$ of the bond rate, more than $20\\%$, so the statement is True.`,

    `The statement claims the current allocation's blended rate is less than $6\\%$.

Current return $\\$2{,}646$ on $\\$45{,}000$:

$$\\frac{2646}{45000} = 0.0588$$

$5.88\\%$, which is less than $6\\%$. The mix is bond-heavy ($\\$27{,}000$ versus $\\$18{,}000$), so the blend sits closer to $5.4\\%$ than to $6.6\\%$, just under $6\\%$.

A solver who averaged $5.4$ and $6.6$ as $6.0\\%$ would hit the cutoff exactly and fail a strict "less than." The dollar-weighted blend is $5.88\\%$, not the unweighted $6\\%$.

The current blend is $5.88\\%$, less than $6\\%$, so the statement is True.`,

    `The statement parks the entire $\\$45{,}000$ in Equities and claims that return would exceed the sum of both described allocations' returns, $\\$2{,}646+\\$2{,}754=\\$5{,}400$.

All-equity return:

$$45000 \\times 0.066 = 2970$$

Then $2970 > 5400$ is false. The all-equity figure is a single year's return on one allocation. Adding the two described allocations is adding two different one-year scenarios, $\\$5{,}400$, which is not a comparable rival portfolio. Even without that, $2970$ does not exceed $5400$.

A solver who compared $2970$ with $2754$ only would find all-equity larger than the equity-heavy mix, which is true but is not this claim. The claim names the *sum* of both described returns.

All-equity earns $\\$2{,}970$, which does not exceed $\\$5{,}400$, so the statement is False.`,

    `The statement claims a $50/50$ split would produce a blended return equal to the average of the two described allocations' returns.

**1.** Fifty-fifty return:

$$22500 \\times 0.054 + 22500 \\times 0.066 = 1215 + 1485 = 2700$$

**2.** Average of the two described returns:

$$\\frac{2646 + 2754}{2} = 2700$$

The figures match. The two described allocations swap $\\$9{,}000$ between bonds and equities. Their average is the midpoint mix, which is $50/50$ on a $\\$45{,}000$ trust. Linearity of simple interest makes that identity exact.

A solver who averaged the *rates* $5.4$ and $6.6$ as $6\\%$ of $45000=2700$ gets the same number by a different route, which happens to be valid here because $50/50$ is also the unweighted rate average.

The $50/50$ return is $\\$2{,}700$, equal to the average of $\\$2{,}646$ and $\\$2{,}754$, so the statement is True.`,

    `The statement claims the bond rate is more than $80\\%$ of the equity rate.

$$\\frac{5.4}{6.6} \\approx 0.8182$$

about $81.8\\%$, which exceeds $80\\%$. Letter A's $22.2\\%$ gap is the complement in a different form: $1-0.818=0.182$, not $0.222$, because those two relatives use different bases. This letter uses equity as the base.

A solver who used $5.4/6.0=0.90$ after rounding equity would still pass $80\\%$. The recovered $6.6\\%$ is what produces $81.8\\%$.

The bond rate is about $81.8\\%$ of the equity rate, more than $80\\%$, so the statement is True.`,
  ],

  "math-5-58": [
    `The statement claims the reconstructed Renters coverage is less than $\\$30{,}000$.

The overview already reconstructed Renters coverage as $\\$25{,}000$. Then $25000 < 30000$.

This letter is a lookup of that reconstruction. A solver who used Auto's $\\$85{,}000$ here would fail the cutoff in the other direction. The Renters premium $\\$331.70$ minus the fee $214.70$ leaves $117$ of rate, and $117/4.68=25$ thousands of coverage.

Reconstructed Renters coverage is $\\$25{,}000$, less than $\\$30{,}000$, so the statement is True.`,

    `The statement claims the fixed administrative fee is more than $60\\%$ of the Auto policy's total premium.

Fee $214.70$. Auto premium $612.50$.

$$\\frac{214.70}{612.50} \\approx 0.3505$$

about $35\\%$, which is not more than $60\\%$. On the smaller Auto policy the fee is a large share, but not as large as $60\\%$. On Home it would be even smaller, $214.70/1197.50 \\approx 18\\%$.

A solver who used Renters $331.70$ as the denominator would get $214.70/331.70 \\approx 65\\%$ and accept the claim. The claim names the Auto policy.

The fee is about $35\\%$ of Auto's premium, not more than $60\\%$, so the statement is False.`,

    `The statement raises the rate per $\\$1{,}000$ by $10\\%$, fee unchanged, and claims the Home policy's premium would increase by more than $\\$75$.

Home coverage is $210$ thousands. Rate $4.68$, so a $10\\%$ rise is $0.468$ per thousand.

$$210 \\times 0.468 = 98.28$$

Then $98.28 > 75$. The fee does not change, so the whole increment is on the rate line. A solver who also raised the fee $10\\%$ would add another $21.47$ and still pass $\\$75$. A solver who used Auto's $85$ thousands would get $39.78$ and fail the cutoff.

Home's premium would rise by $\\$98.28$, more than $\\$75$, so the statement is True.`,

    `The statement claims the Home policy's premium per $\\$1{,}000$ of coverage is more than twice the Auto policy's premium per $\\$1{,}000$.

**1.** Home per thousand: $1197.50/210 \\approx 5.702$.

**2.** Auto per thousand: $612.50/85 \\approx 7.206$.

**3.** Twice Auto: $14.41$. Then $5.70 > 14.41$ is false, and even $5.70 > 7.21$ is false. Home's *average* premium per thousand is *lower* than Auto's, because the shared fee is spread over more coverage.

A solver who compared totals $1197.50$ and $2 \\times 612.50=1225$ would find Home slightly smaller, which is a different comparison that also fails "more than twice." A solver who used only the rate $4.68$ on both would find them equal.

Home's per-thousand premium is about $\\$5.70$, Auto's about $\\$7.21$, so Home is not more than twice Auto, so the statement is False.`,

    `The statement combines Auto and Home into one hypothetical policy covering $295$ thousands, and claims that would cost less than the sum of their separate premiums $\\$1{,}810$.

A combined policy pays the fee once.

$$214.70 + 295 \\times 4.68 = 214.70 + 1380.60 = 1595.30$$

Then $1595.30 < 1810$. The saving is exactly one fee, $214.70$, and $1810-214.70=1595.30$. A solver who charged two fees on the combined policy would get $1810$ and find no saving. The claim's "single hypothetical policy" is what drops a fee.

The combined policy costs $\\$1{,}595.30$, less than $\\$1{,}810$, so the statement is True.`,
  ],
};

applyLetters("51_60.json", patches);
console.log("applied 57-58");
