import fs from "node:fs";

const file = "textbook/output/_rev/ch11/51_60.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

const extra = {
  "math-11-51": [
    `For the manager, $\\$35,234$ is the amount a matching annual quote must reproduce at every horizon, including the original seven years. Booking $\\$33,100$ would understate the beneficiary's claim by more than $\\$2,000$. Booking $\\$50,000$ would ignore the wait entirely.

Letter D reuses this continuous clock at three years and gets $\\$43,035$. Letter E measures how far the equivalent annual quote sits above $5\\%$. Both start from this recovered seven-year PDV as the continuous mark.

If the payment were due today, PDV would be $\\$50,000$. The stem has $t=7$ and $r=0.05$. The recovered continuous PDV is $\\$35,234.40$.`,
    `Sharing the numeral $5$ is not matching present values. Continuous $5\\%$ is a stronger clock than annual $5\\%$, so the matching annual quote has to sit a little higher, at $5.13\\%$. Letter C will reject a different wrong neighbour, $5.87\\%$. The recovered equivalent rate is $5.13\\%$.`,
    `Letter B already rejected $5.00\\%$. The recovered $5.13\\%$ sits between $5.00\\%$ and $5.87\\%$. Neither false quote matches $e^{0.05}-1$. The recovered equivalent annual rate is $5.13\\%$.`,
    `The three-year PDV has to sit between $\\$35,234$ and $\\$50,000$, and it does: $\\$43,035$. Twice $\\$35,234$ would overshoot. A midpoint would be $\\$42,617$, a neighbour of $\\$43,035$ that ignores compounding. The recovered pair of clocks, continuous and converted annual, agree at $\\$43,035.40$.

If $r$ were $0\\%$, shortening the horizon would not change PDV. The recovered $5\\%$ continuous clock is what lifts the three-year value above $\\$35,234$.`,
    `At $5\\%$ the extra from compounding is a few tenths of a point, not a full point. Letter C's false $5.87\\%$ would still miss a $1.00$-point test. The recovered gap is $0.13$ points. A one-point premium would need a continuous quote near $14\\%$, not $5\\%$.`,
  ],
  "math-11-52": [
    `The $\\$35,264$ is the known contract in today's dollars. The covenant is a present-value test, so this is the number that belongs in the $\\$100,000$ total, not the $\\$42,000$ face. Letter B subtracts this piece from $\\$100,000$. A one-year or six-year discount would throw that residual off. The recovered PDV of the existing receivable is $\\$35,264.01$.`,
    `In the negotiation, $\\$64,736$ is today's hole, not the face that will be typed on a six-year invoice. Letter C grows this residual at $6\\%$ for six years. Letter D grows it for three. Letter E grows it at $8\\%$ for six. All three start from this recovered residual.

Subtracting the $\\$42,000$ face from $\\$100,000$ mixes dates and reports $\\$58,000$, the usual trap. The known piece must be discounted first. The recovered amount still required is $\\$64,735.99$.`,
    `Writing $\\$91,829$ on a six-year contract is how the company fills a $\\$64,736$ present-value hole at $6\\%$. Writing $\\$64,736$ itself would underfund, because that dollar amount has not been grown. Writing $\\$100,000$ would ignore the known receivable.

A three-year growth of the residual is letter D's $\\$77,102$. An $8\\%$ growth is letter E's $\\$102,728$. This letter is the $6\\%$, six-year face. The recovered $K_{2}$ is $\\$91,829.24$.`,
    `Holding present value fixed, less time to grow means the face sits closer to the residual. The recovered three-year face $\\$77,102$ is below the six-year $\\$91,829$ for that reason. The slogan "sooner means a bigger cheque" has the inequality backwards.

The extra step is only the ranking $77{,}102<91{,}829$. Both faces start from the same residual $\\$64,736$. The opposite verdict would need a later due date. Pulling the date in lowers the required face.`,
    `The covenant still wants $\\$64,736$ today. At $8\\%$ each future dollar is worth less, so the six-year face must rise from $\\$91,829$ to $\\$102,728$. A higher rate does not let the company promise less. It forces the company to promise more.

Letter D changed time at $6\\%$. This letter changes rate at six years. Both use the same residual. The recovered $8\\%$ face is $\\$102,727.88$.`,
  ],
  "math-11-53": [
    `The factor $0.7711$ is the unique continuous discount that turns a four-year cheque into today's dollars at $6.5\\%$. The claimed $0.8112$ would require a milder rate or a shorter wait. Letter B divides $\\$35,000$ by this factor. Getting $0.7711$ rather than $0.8112$ is what lets the recovered $K$ come out as $\\$45,393$ rather than $\\$43,147$.`,
    `For the firm, $\\$45,393$ in four years is the unique delayed cheque that matches $\\$35,000$ cash today. Asking for $\\$49,851$ would make the delayed option look richer than it is. Letter C tests whether this $K$ clears a $\\$11,000$ premium. Letter D raises $r$. Letter E shortens $t$. All three start from this recovered $\\$45,392.55$.

If the delay were zero, $K$ would be $\\$35,000$. Four years of continuous $6.5\\%$ is what lifts $K$ to $\\$45,393$.`,
    `Direction is right and the cutoff is wrong. A delayed payment must exceed $\\$35,000$, and it does, by $\\$10,393$, which is not more than $\\$11,000$. The false $\\$49,851$ from letter B would have cleared the cutoff and hidden the miss. The recovered premium is $\\$10,392.55$.

The opposite verdict would need $e^{0.26}-1>11{,}000/35{,}000\\approx 0.314$, so $rt>0.273$, a bit above the stem's $0.26$.`,
    `Indifference is $K=35{,}000e^{rt}$. Changing $r$ from $0.065$ to $0.09$ changes the exponent from $0.26$ to $0.36$ and lifts $K$ from $\\$45,393$ to $\\$50,167$. Reusing $e^{0.26}$ after the rate change is the trap that would make $K$ look unchanged.

Letter E shortens $t$ at the original $r$ and lowers $K$. This letter raises $r$ at the original $t$ and raises $K$. The recovered $9\\%$ payment is not the $6.5\\%$ payment.`,
    `Holding $r$ fixed, a shorter wait requires a smaller future cheque to match the same $\\$35,000$ present value. The recovered two-year $K\\approx \\$39,859$ sits below the four-year $\\$45,393$. Halving time does not halve the $\\$10,393$ premium; the two-year premium is about $\\$4,859$.

The opposite verdict would need a longer wait. Shortening the wait lowers $K$. The recovered two-year indifference payment is smaller.`,
  ],
  "math-11-54": [
    `Exponential $P(t)$ growing at $5\\%$ never catches an $8\\%$ discount. The interior FOC is empty, $f$ falls from $t=0$, and the recovered policy is a corner: sell now. Letter C will show $f(10)\\approx \\$29,633<\\$40,000$. Letter E will drop $r$ below $5\\%$ and reverse the corner. This letter is the $r=0.08$ case.`,
    `Selling now is a cash sale. Discounting $\\$40,000$ for a default year would describe waiting, which is letter C. The recovered $f(0)$ is the full $\\$40,000$. Later letters compare ten-year and $4\\%$ policies with this mark.`,
    `The ten-year figure has to sit below $\\$40,000$ at $r=0.08$, and it does: $\\$29,633$. Growing $P$ at $5\\%$ without discounting, or discounting at $8\\%$ without growth, are the two one-sided mistakes. The recovered net exponent is $-0.30$. Compared with $f(0)=\\$40,000$, waiting ten years costs about $\\$10,367$ of present value.`,
    `Watch $f$, not $P$. $P$ climbs at $5\\%$. $f$ falls at $3\\%$ net because $r=0.08>0.05$. The recovered pair $40{,}000>29{,}633$ is already a counterexample to "waiting always helps." Letter E's $r=0.04$ will flip the sign of $0.05-r$. "Regardless of $r$" erases that hinge.`,
    `Dropping $r$ from $8\\%$ to $4\\%$ flips $0.05-r$ from negative to positive. Then $f$ climbs, and selling at $t=0$ is the worst policy in the model, not the best. The corner at $0$ was a property of $r>0.05$, not of exponential $P(t)$ itself. The recovered $4\\%$ present value increases in $t$.`,
  ],
  "math-11-55": [
    `Units match: $P'$ and $rP$ are both dollars per year. $520{,}000\\times 0.9$ or $520{,}000/0.09$ are the usual zero-slips. The measured pair sits on $P'=rP$. The recovered product equals $\\$46,800$.`,
    `Letter C will divide $P$ by this denominator. Letter E will test its sign. A mix of $P$ for $P'$, or dropping the $0.09$, throws both later letters off. The recovered combination is $-\\$1,092$.`,
    `In words, about $4.76$ years of harvest are pulled forward per percentage point of $r$. The negative sign is the story: higher rates bring the cut forward. Putting $P'$ in the numerator, or flipping the denominator to $+1{,}092$, produces a different sensitivity. The recovered $\\mathrm{d}t^{*}/\\mathrm{d}r$ is $-476.19$.

A positive sensitivity would describe a minimum of $f$. The recovered second-order denominator is negative, so this is a maximum, and $t^{*}$ falls as $r$ rises.`,
    `Trees do not start growing faster when the bank pays more. $P(t)$ is unchanged. The financing cost $rP$ rises, so $P'=rP$ crosses sooner. Letter C already locked the negative derivative. This letter is only the verbal ranking: shorten, not lengthen. The recovered sensitivity is negative.`,
    `$P''=3{,}120$ is positive, so value is still accelerating. The second-order test for $f$ is $P''-rP'<0$, and the $-rP'$ term is what makes it pass. Letter B named $-\\$1,092$. This letter only asks whether that figure is negative. It is. The recovered second-order condition holds.`,
  ],
  "math-11-56": [
    `The family formula is $t^{*}=2/r-4$. Forgetting the shift reports $22.22$ years. Using $1/r$ reports $11.11$. Maximising $P$ itself never cuts. The recovered date $18.22$ is the unique interior peak of $f(t)=P(t)e^{-0.09t}$. Letters C through E all use this $t^{*}$.`,
    `Stumpage at $t^{*}$ is about $\\$1.48$ million. Present value discounts that stumpage by $e^{-1.64}\\approx 0.194$, about $\\$287,378$. Twenty percent of stumpage is $\\$296,000$, a neighbour of $\\$250,000$ only after a further round cut. The recovered $f(t^{*})$ is $\\$287,378$, not $\\$250,000$.

Letter C tests curvature at this same date. A harsher discount than $9\\%$ over $18.22$ years would be needed to pull $f$ down to $\\$250,000$.`,
    `Reporting $P''=6{,}000$ as the second-order quantity forgets to subtract $rP'\\approx \\$12,000$. That subtraction flips the sign to $-6{,}000$. A positive denominator would reverse letter D's sensitivity and would fail a maximum test. The recovered quantity is $-\\$6,000$.`,
    `The magnitude $246.91$ matches $1{,}481{,}481/6{,}000$. The sign matches the recovered $-6{,}000$ in the denominator. Copying letter C's false $+6{,}000$ produces exactly the claimed $+246.91$. The two false signs travel together. Comparative statics for a maximum have $\\mathrm{d}t^{*}/\\mathrm{d}r<0$. The recovered sensitivity is $-246.91$.`,
    `Halving $r$ would double $t^{*}$ if the formula were $2/r$ with no shift. The orchard's shift $4$ is subtracted once at each rate, so $t^{*}$ more than doubles: $40.44$, not $36.44$. Linearity of "$2\\times 18.22$" is the slogan this letter kills. The recovered $4.5\\%$ date is $40.44$ years.`,
  ],
  "math-11-57": [
    `The $\\$189,893$ is the exit in today's dollars. Dropping the half year, or switching to annual $11\\%$, produces neighbours of $\\$191{,}000$ to $\\$201{,}000$. The exponent is $0.275$. This piece is the large addend of $\\$227,407$. The recovered exit PDV is $\\$189,893.03$.`,
    `Seven months is $7/12$ of a year, not seven years. A linear $11\\%\\times 7/12$ haircut sits near $\\$37,433$, a neighbour of $\\$37,514$. The recovered continuous PDV is $\\$37,513.95$. Letter D will convert the $\\$2,486$ gap into $6.2\\%$ of face. This letter is the level.`,
    `Adding discounted pieces is the only legal move. Adding faces gives letter E's $\\$290,000$. Adding a face to a PDV can manufacture a round $\\$230,000$. Letters A and B locked $\\$189,893$ and $\\$37,514$. This letter only adds. The recovered combined PDV is $\\$227,407$, not $\\$230,000$.`,
    `Seven months of $11\\%$ is a short wait. A $10\\%$ haircut would need $rt>0.105$, not $0.064$. Using the $11\\%$ quote itself as the haircut is the trap. Letter B locked $\\$37,514$. This letter only asks whether $40{,}000-37{,}514$ is more than $10\\%$ of $\\$40,000$. It is $6.2\\%$.`,
    `At $11\\%$ the combined PDV was $\\$227,407$. A zero rate must lift that figure to the faces, $\\$290,000$. Reapplying $e^{-0.275}$ after setting $r=0$ would freeze the $11\\%$ total. The exponent is zero when $r$ is zero. The recovered zero-rate combined PDV is $\\$290,000$.`,
  ],
  "math-11-58": [
    `The factor $0.625$ is exact because $2/3.2=5/8$. Rounding starts later, when $r$ is recovered from $-\\ln 0.625/4.5$. Writing $1.6$ as the discount factor, or $0.652$ by swapping digits, throws every later rate off. The recovered factor is exactly $0.625$.`,
    `For the investors, $10.44\\%$ is the continuous return implied by $\\$2$ million today for $\\$3.2$ million in $4.5$ years. A linear $37.5\\%/4.5\\approx 8.33\\%$ understates that continuous rate. Letters C through E change $K$ or $t$ and recompute $r$ from the same logarithm idea. This letter is the original $10.44\\%$.`,
    `Holding price and wait fixed, a larger payout is a higher implied rate. The recovered $13.06\\%$ sits above $10.44\\%$. "A larger payout is better, so $r$ should fall" treats $r$ as a cost instead of as the internal rate that equates price to PDV. Raising $K$ raises $r$. Letter D will shorten $t$ and also raise $r$, for a different reason.`,
    `Holding the factor $0.625$ fixed, less time means more return per year. The recovered three-year rate $15.67\\%$ sits above $10.44\\%$, not below. "Less time, less return" has the inverse wrong. Letter E doubles $t$ and halves $r$. This letter shortens $t$ and raises $r$.`,
    `When the factor is held fixed, $r$ scales as $1/t$. Doubling $4.5$ to $9$ halves $10.44\\%$ to $5.22\\%$. A square-root adjustment would be right for a present-value *level*, not for this rate. The recovered $9$-year rate is $5.22\\%$.`,
  ],
  "math-11-59": [
    `Quadratic value with a shift produces $t^{*}=2/r-k$ after $A(t+k)$ cancels. Dropping $k$, or using $1/r$, or leaving $A$ in the date, are the three usual misses. Letter B plugs $r=0.075$ and $k=5$ into this formula. The recovered general harvest date is $t^{*}=2/r-k$.`,
    `$A$ cancelled in letter A, so $1{,}200$ versus $12{,}000$ would not move $t^{*}$. Forgetting to subtract $k=5$ reports $26.67$ years. Using $7.5$ instead of $0.075$ is a percent slip. The recovered date is $21.67$ years. Letters C through E all use this $t^{*}$.`,
    `Stumpage is about $\\$853,333$. Present value multiplies by $e^{-1.625}\\approx 0.197$, about $\\$168,031$. Using $e^{-1.5}$ lands near $\\$190,000$, a neighbour of $\\$195,500$. This letter is $f(t^{*})$, not $P(t^{*})$. The recovered present value is $\\$168,031$, not $\\$195,500$.`,
    `The formula $t^{*}=2/r-k$ has $\\partial t^{*}/\\partial k=-1$. Raising $k$ from $5$ to $8$ cuts three years off the wait, $18.67<21.67$. A larger $k$ means more value is already present at $t=0$, so the remaining wait to $P'=rP$ is shorter, not longer. The recovered $k=8$ harvest is shorter.`,
    `Doubling $r$ would exactly halve $t^{*}$ if $k$ were $0$. Subtracting $k=5$ from both $26.67$ and $13.33$ leaves $21.67$ and $8.33$, and $8.33$ is less than half of $21.67$. Comparing the unshifted $13.33$ with $10.83$ hides that flip. The recovered $15\\%$ harvest is $8.33$ years, less than half of $21.67$.`,
  ],
  "math-11-60": [
    `Five years of continuous $8\\%$ is the exponent $0.40$, not $0.08$ and not a linear $0.40$ haircut. Letter B squares this factor because $t_{2}=2t_{1}$. Getting $0.6703$ right is what lets $0.4493$ come out as a square. The recovered five-year factor is $0.6703$.`,
    `Doubling the exponent to $0.80$ squares the factor; it does not double $0.6703$. $e^{-0.08}$ is a one-year factor, the usual slip of dropping a zero in $0.80$. The recovered ten-year factor is $0.4493$, the square of letter A's $0.6703$.`,
    `Letter A locked $0.6703$. This letter multiplies by $\\$30,000$. Using $0.717$ or $1/1.40$ manufactures $\\$21,500$. Using the ten-year factor on the first payment understates. The recovered PDV is $\\$20,110$, not $\\$21,500$. This piece is one addend of $\\$44,823$.`,
    `The second payment waits ten years. Using the five-year factor $0.6703$ on $\\$55,000$ reports about $\\$36,867$. Using $0.473$ manufactures $\\$26,000$ exactly. The recovered factor is $0.4493$, so the recovered PDV is $\\$24,713$, not $\\$26,000$. This is the second addend of $\\$44,823$.`,
    `The claim's $\\$47,500$ is the sum of letters C and D's false levels, $21{,}500+26{,}000$. Adding the recovered addends $20{,}110+24{,}713$ gives $\\$44,823$. Adding faces gives $\\$85,000$. The recovered combined PDV is $\\$44,823$, not $\\$47,500$.`,
  ],
};

function splice(body, extraText) {
  if (!extraText) return body;
  const lines = body.replace(/\r\n/g, "\n").trimEnd().split("\n");
  const closer = lines.pop();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  return [...lines, "", extraText.trim(), "", closer].join("\n");
}

function words(s) {
  return s.split(/\s+/).filter(Boolean).length;
}

for (const t of arr) {
  const ex = extra[t.id];
  t.tactical_explanations = t.tactical_explanations.map((e, i) => {
    const nl = e.indexOf("\n");
    const header = e.slice(0, nl);
    let body = e.slice(nl + 1).replace(/^\n+/, "");
    body = splice(body, ex[i] || "");
    if (/—|–/.test(body)) throw new Error("dash " + t.id + "ABCDE"[i]);
    return header + "\n\n" + body;
  });
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  console.log(t.id, t.tactical_explanations.map(words).join(", "));
}
