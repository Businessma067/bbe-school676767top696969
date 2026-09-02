import { thickenLetters } from "./_thicken_apply.mjs";

const extras = {
  "math-5-16": {
    3: `Four overtime hours sit between Worker 1's $6$ and Worker 2's $2$, so this third worker is an interpolation of the overtime column at the actual rates. Regular pay is the same $560$ for anyone who completed a $40$-hour week at $14$ per hour. The letter's extra piece is only $4 \\times 24=96$. Adding those is $656$, matching the claim.

A solver who interpolated the two printed totals, halfway from $608$ to $704$, would get $656$ as well, because $4$ hours is halfway in overtime between $2$ and $6$. That shortcut happens to work because regular pay is identical. It would fail if the workers had different regular hours. The honest costing still uses $x=14$ and $y=24$.

If the firm had paid contract overtime $21$ on this third worker, the total would be letter E's $644$. Mixing D and E is the main trap: D is actual rates, E is contract rates, same hours.`,
    4: `The contract rate $21$ is $1.5 \\times 14$, which the firm did not actually pay. This letter asks what the third worker *would* have earned under the rule the contract states. Regular pay is still $560$. Overtime is $4 \\times 21=84$. The sum is $644$, twelve dollars below letter D, and those twelve dollars are $4 \\times 3$, four hours times the $\\$3$ per-hour overpayment the union found.

A solver who used $1.5 \\times 24=36$ as if the contract applied to the already-inflated overtime rate would overshoot wildly. The contract applies to the regular rate, not to the actual overtime rate. A solver who took $90\\%$ of $656$ as a "contract discount" would get $590.40$ and miss $644$. The contract is a specific multiplier $1.5$, not a discount on the actual bill.`,
  },
  "math-5-17": {
    3: `Forty cubic metres is $15$ above June's $25$ and $22$ above May's $18$. Extending the recovered line $15+2v$ to $v=40$ is $95$. Adding $15 \\times 2=30$ onto June's $65$ gives the same $95$. That extension is this letter's extra arithmetic. The claimed $85$ is $10$ light, which is a dropped fee, or a rate of $1.75$ with a $15$ fee, or the office's $18+40 \\times 1.675$.

The office's advertised pair $18$ and $1.85$ would bill $18+74=92$ at $40\\,\\mathrm{m}^{3}$, still not $85$. So even the false office story does not produce the claimed total. The recovered pair produces $95$. Neither story is $85$.

A solver who used $40 \\times 2.125$ with no fee, or $15+40 \\times 1.75$, can manufacture $85$. Those rates are not the $2.00$ isolated from the $7\\,\\mathrm{m}^{3}$ gap between June and peeled May. With $x=15$ and $y=2$, a $40\\,\\mathrm{m}^{3}$ month cannot bill at $85$.`,
  },
  "math-5-19": {
    2: `The upcoming order $40$ X and $30$ Y is exactly double Vendor A's first quoted bundle $20$ X and $15$ Y. Doubling A's $\\$450$ is $\\$900$, which is an honest shortcut for Vendor A. Vendor B's first bundle is the same mix at $\\$460$, and doubling that is $\\$920$. The $\\$20$ gap is $2 \\times 10$, twice the bundle gap, and it matches $40 \\times 2 - 30 \\times 2$ from the unit-price gaps on X and Y.

A solver who used A's second bundle $25$ X and $12$ Y, which is a different mix, would not be costing $40$ and $30$. A solver who picked the cheaper unit from each vendor, $9$ on X from A and $16$ on Y from B, would get $40 \\times 9 + 30 \\times 16=360+480=840$, a cherry-pick the procurement team is not allowed if they must choose one vendor for the whole order.

The claim is the whole-order choice. Vendor A at $900$ beats Vendor B at $920$.`,
    4: `Sixty units of Y and zero X is the opposite mix from letter C's X-heavy order. On a Y-only ticket, Vendor B's $\\$2$ advantage per Y runs on all $60$ units and A's $\\$2$ advantage per X never appears, so B wins by $120$. That ranking reversal is the point: neither vendor is cheaper on everything, and the cheaper overall choice depends on the mix.

A solver who scaled letter C's $900$ and $920$ by $60/30=2$ would keep A's win and miss that X has been dropped. Scaling a mixed order does not produce a Y-only order. The extra arithmetic is $60 \\times 18$ versus $60 \\times 16$, two products, one comparison.

If the order had been $60$ of X only, A would win $60 \\times 9=540$ against $60 \\times 11=660$. The claim names $60$ of Y only, and on that mix B is cheaper.`,
  },
  "math-5-21": {
    2: `Maria's actual $284$ versus the flyer's $300$ is a six-month comparison of two different rules, not a recovered-price lookup. The flyer is $30+45g$. Actual is $38+41g$. At $g=6$ those are $300$ and $284$. Actual is lower, so it does not *exceed* the flyer. The verb "exceeds" is backwards.

The $\\$16$ gap decomposes as $+8$ from the dearer signup and $-24$ from six months of a $\\$4$ cheaper month. Net $-16$. Over a short horizon the cheaper month already outweighs the dearer signup. Over one month the actual rule would be $38+41=79$ versus flyer $30+45=75$, and actual would be *higher*. Six months is long enough for the rate gap to dominate, which is why C is false at Maria's horizon.

A solver who compared $284$ with $38+6 \\times 45=308$ would be mixing actual signup with advertised months. The claim is actual versus the flyer's advertised rates, both pieces advertised.`,
    4: `Twelve months with the signup waived is $12 \\times 41=492$. That is not Maria's horizon and not Jason's. It is a negotiated counterfactual: intercept zero, slope the actual monthly rate, twelve periods. A solver who used the flyer's $45$ would get $540$. A solver who kept the recovered $38$ would get $530$. A solver who used $12 \\times 41 + 30$ would keep the flyer's signup on the actual rate.

The $492$ figure is also Jason's $448$ plus two more months at $41$, minus the $38$ signup Jason already paid: $448+82-38=492$. That reconstruction is a check, not a second solve. It uses Jason as a $10$-month actual path and then strips the signup and adds two months.

If the actual monthly rate had been $41.50$, twelve months would be $498$, and the claim's $492$ would fail. The two histories force $y=41$ exactly, because $164/4=41$, and twelve times that is $492$.`,
  },
};

thickenLetters("11_20.json", extras);
thickenLetters("21_30.json", extras);
console.log("thickened 16-21");
