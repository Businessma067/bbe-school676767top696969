import fs from "node:fs";

const file = "textbook/output/_rev/ch11/51_60.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

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

// Classify: lookups may stay 120-200. Everything else must reach 350.
const lookup = {
  "math-11-51": [1, 2],
  "math-11-53": [0],
  "math-11-54": [1],
  "math-11-55": [0, 1],
  "math-11-58": [0],
  "math-11-60": [0, 1],
};

const boost = {
  "math-11-51": [
    "", "", "", "",
    `A one-point gap between effective and continuous quotes is a high-rate phenomenon. At $5\\%$ the two clocks almost touch: $e^{0.05}$ is $1.0513$, so the extra is thirteen hundredths of a point. Treating $0.13$ as $1.3$, or rounding $5.13$ up to $6$, is how a threshold of $1.00$ gets a false pass. The recovered gap stays $0.13$ points on the short side of $1.00$.`,
  ],
  "math-11-52": [
    `The loan officer who accepts $\\$42,000$ as today's contribution has skipped three years of $6\\%$. The recovered contribution is $\\$35,264$. Every later face in this task is grown from a residual that starts with this subtraction. A wrong $\\mathrm{PV}_{1}$ would throw $K_{2}$ off dollar for dollar. The recovered PDV of the known receivable is $\\$35,264.01$.`,
    `Think of $\\$64,736$ as the present-value budget left to spend on a second contract. How that budget is converted into a face depends on the due date and the rate, which is why letters C, D, and E exist. This letter only names the budget. Subtracting faces, or naming $\\$91,829$ here, answers a different question. The recovered residual is $\\$64,735.99$.`,
    `Grow a present-value budget forward and you get a face. Six years of $6\\%$ turn $\\$64,736$ into $\\$91,829$. Three years turn it into $\\$77,102$. Eight percent over six years turns it into $\\$102,728$. This letter is the first of those three conversions. The recovered six-year face is $\\$91,829.24$.`,
    `Same budget, shorter compounding window, smaller face. That ranking is the extra step, and it is already sitting in the overview as $\\$77,102$ versus $\\$91,829$. A claimed larger three-year face would need the residual itself to grow when time shortens. The residual is a present value, fixed at $\\$64,736$. The recovered three-year face is smaller.`,
    `Raise the discount rate and each promised future dollar buys less covenant today, so you must promise more dollars. That is why $\\$102,728$ exceeds $\\$91,829$. A treasurer who thought "higher rate, cheaper promise" has the covenant backwards. The recovered $8\\%$ six-year face is $\\$102,727.88$.`,
  ],
  "math-11-53": [
    "",
    `The delayed cheque has to exceed $\\$35,000$ at any positive rate. How much it exceeds it is the premium, $\\$10,393$ at $6.5\\%$ over four years. The claim's $\\$49,851$ would have made that premium look like $\\$14,851$. The recovered $K$ is $\\$45,393$, and that is the level letter C will test against $\\$11,000$.`,
    `Thresholds are strict. $\\$10,393$ is not more than $\\$11,000$. A solver who rounded to $\\$10,400$ and then to $\\$11,000$ would still be rounding in the wrong direction. The recovered premium sits about $\\$607$ short. The opposite verdict would need a slightly larger $rt$ than $0.26$.`,
    `Write $K=35{,}000e^{rt}$ at both rates. At $0.065$ the exponent is $0.26$ and $K\\approx \\$45,393$. At $0.09$ the exponent is $0.36$ and $K\\approx \\$50,167$. Those are not the same cheque. Unchanged $K$ would require unchanged $rt$. The rate changed.`,
    `Write the same formula at $t=2$: exponent $0.13$, $K\\approx \\$39,859$. That is less extra cash than four years require, not more. The firm's impatience is already in $r=0.065$. Holding that $r$ fixed, cutting the wait cuts the required future payment. The recovered two-year $K$ is smaller.`,
  ],
  "math-11-54": [
    `Whenever $P'/P$ is a constant below $r$, the interior condition is empty and $f$ is decreasing. Here $P'/P=0.05<0.08$. Selling later cannot help present value. The recovered policy is the boundary $t^{*}=0$. Letter C's ten-year value is the numerical proof.`,
    "",
    `Present value after ten years has to be compared with $\\$40,000$, not with a grown $P(10)$. $P(10)=40{,}000e^{0.50}\\approx \\$65,947$ is market value then, not value now. Discounting that market value at $8\\%$ for ten years, after netting the $5\\%$ growth, is $e^{-0.30}$ and $\\$29,633$. The recovered ten-year PDV is $\\$29,632.73$.`,
    `Increasing $P$ is necessary for waiting to help and not sufficient. The sufficient comparison is $P'$ versus $rP$, or the sign of $0.05-r$. At $8\\%$ that sign is negative. The recovered pair $f(0)>f(10)$ is the counterexample. Letter E will flip the sign by dropping $r$ to $4\\%$.`,
    `At $r=0.04$, growth outruns discounting and $f$ is increasing. Immediate sale then realises the smallest present value in the model. The corner at $0$ belongs to $r>0.05$, which is letter A, not to this $4\\%$ hypothetical. The recovered $4\\%$ policy is to wait.`,
  ],
  "math-11-55": [
    "", "",
    `The formula $\\mathrm{d}t^{*}/\\mathrm{d}r=P/(P''-rP')$ uses the stock $P$ in the numerator because a rate shock must be absorbed by shifting time until $P'$ again equals $rP$. A large $P$ and a small negative denominator mean a large negative shift. The recovered sensitivity $-476.19$ is that shift in years per unit $r$.`,
    `Verbal comparative statics follow the sign. Negative derivative means higher $r$, earlier cut. The team that delays harvest when rates rise is treating $r$ as a growth bonus to $P$, which it is not. The recovered sign is negative, so $t^{*}$ shortens.`,
    `A maximum of $f(t)=P(t)e^{-rt}$ requires $P''-rP'<0$ even when $P''$ itself is positive. Positive $P''$ says stumpage is still accelerating. The discounting term $-rP'$ is what bends $f$ down. The recovered combination $-1{,}092$ is that bend, and it is negative.`,
  ],
  "math-11-56": [
    `The first-order algebra cancelled $(t+4)$ and left $t+4=2/r$. Subtracting the shift $4$ is the last move. Skipping it reports $22.22$. Using $1/r$ reports $11.11$. The recovered $t^{*}$ is $18.22$ years, and every later letter in this task uses that date.`,
    `Discounted present value is not a round fraction of stumpage unless $e^{-rt}$ happens to be that fraction. Here $e^{-1.64}\\approx 0.194$, so $f\\approx \\$287,378$. A $20\\%$ story gives $\\$296,000$. Neither is $\\$250,000$. The recovered present value at $t^{*}$ is $\\$287,378$.`,
    `Constant $P''=6{,}000$ is not the second-order test. The test subtracts $r$ times a large $P'$. That subtraction is about $\\$12,000$, and $6{,}000-12{,}000=-6{,}000$. Reporting $+6{,}000$ skips the only term that can make a maximum. The recovered quantity is $-\\$6,000$.`,
    `Once the denominator is known to be $-6{,}000$, the sensitivity cannot be $+246.91$. The recovered quotient is negative. A harvest rule that delayed cutting when rates rose would be using the false positive sign. The recovered $\\mathrm{d}t^{*}/\\mathrm{d}r$ is $-246.91$.`,
    `Inverse relations plus a constant do not scale by doubling. Halving $r$ doubles $2/r$ from $22.22$ to $44.44$, then the same $-4$ yields $40.44$, not $36.44$. The recovered $4.5\\%$ harvest is $40.44$ years. The slogan "$t^{*}$ doubles" forgot the shift.`,
  ],
  "math-11-57": [
    `Two and a half years of $11\\%$ is a substantial discount: about $\\$60,107$ comes off the $\\$250,000$ face. Dropping the half year understates that discount. Annual compounding understates it slightly. The recovered continuous PDV is $\\$189,893.03$, the large addend of the combined total.`,
    `Seven months is a mild discount: about $\\$2,486$ off $\\$40,000$. Treating months as years would destroy the side payment in present value. The recovered short-dated PDV is $\\$37,513.95$. Together with the exit it will sum to $\\$227,407$, not $\\$230,000$.`,
    `Cents matter when the claim prints $\\$230,000.00$. The recovered sum is $\\$227,406.98$, about $\\$2,593$ away. That is not a rounding to the nearest thousand the claim asked for. Faces sum to $\\$290,000$. The recovered combined PDV is $\\$227,407$.`,
    `A $10\\%$ haircut on a $\\$40,000$ side payment would be $\\$4,000$ off, leaving $\\$36,000$. The recovered PDV is $\\$37,514$, a $6.2\\%$ haircut. Short dated and $11\\%$ do not combine into a $10\\%$ rule of thumb. The recovered share is not more than $10\\%$.`,
    `Zero rate is the add-the-faces check. The $11\\%$ total $\\$227,407$ must rise to $\\$290,000$ when $r$ hits $0$, because both discount factors become $1$. Reusing the $11\\%$ factors after setting $r=0$ would freeze the discounted total. The recovered zero-rate combined PDV is $\\$290,000$.`,
  ],
  "math-11-58": [
    "",
    `An implied $10.44\\%$ is the breakeven continuous return on this preferred-share package. Comparable milestones implying $8\\%$ would make the bid look rich. Comparable milestones implying $13\\%$ would make it look cheap. Letters C through E move $K$ or $t$ and recompute that breakeven. The recovered original rate is $10.44\\%$.`,
    `Holding $\\$2$ million and $4.5$ years fixed, stretching the payout to $\\$3.6$ million deepens the discount factor from $0.625$ to $0.556$ and raises $r$ from $10.44\\%$ to $13.06\\%$. That is a better internal rate for the same price, which is why implied $r$ rises. The recovered $\\$3.6$ million rate is higher.`,
    `Pack the same $0.625$ into three years and the annual rate must rise to $15.67\\%$. Inverse in horizon, not decreasing in horizon. "Shorter deal, lower rate" is the trap. The recovered three-year rate is higher than $10.44\\%$.`,
    `Fixed factor and doubled time is the one setting where $r$ halves exactly. Half of $10.44\\%$ is $5.22\\%$. Square-root adjustments belong to levels, not to this inversion. The recovered $9$-year rate is $5.22\\%$.`,
  ],
  "math-11-59": [
    `After $A(t+k)$ cancels, nothing about the dollar scale remains in $t^{*}$. A consultancy that harvested richer stands later would be using a different value function. This family has $t^{*}=2/r-k$. Letter B will substitute the particular $r$ and $k$.`,
    `The particular date is $2/0.075-5\\approx 21.67$ years. The $\\$1,200$ coefficient is a red herring for timing. Percent versus decimal in $r$ is the other red herring. The recovered $t^{*}$ is $21.67$ years.`,
    `Stumpage near $\\$853,000$ discounted at $e^{-1.625}\\approx 0.197$ is near $\\$168,000$. A $1.5$ exponent manufactures $\\$190,000$ and a round-up manufactures $\\$195,500$. The recovered present value is $\\$168,031$, not $\\$195,500$.`,
    `Raising $k$ is a parallel shift of the value curve that brings $P'=rP$ forward one-for-one. Three more units of $k$ cut three years off $t^{*}$. The recovered $k=8$ harvest is $18.67$ years, shorter than $21.67$.`,
    `Half of $21.67$ is $10.83$. The $15\\%$ date $8.33$ sits below that half. Exact halving would have required $k=0$. The shift $-5$ makes a doubled rate more than halve the wait. The recovered $15\\%$ harvest is less than half of the original.`,
  ],
  "math-11-60": [
    "", "",
    `Five years of continuous $8\\%$ leave about $67\\%$ of a future dollar. Times $\\$30,000$ that is $\\$20,110$, not $\\$21,500$. The false $\\$21,500$ is one half of the false $\\$47,500$ total. The recovered first PDV is $\\$20,109.60$.`,
    `Ten years of continuous $8\\%$ leave about $45\\%$ of a future dollar. Times $\\$55,000$ that is $\\$24,713$, not $\\$26,000$. The false $\\$26,000$ is the other half of the false $\\$47,500$ total. The recovered second PDV is $\\$24,713.09$.`,
    `The investor's cheque today is the sum of recovered present values, $\\$44,823$. The claim's $\\$47,500$ is the sum of two rejected levels. Faces sum to $\\$85,000$. Squaring the five-year factor to get the ten-year factor does not change the addition. The recovered combined PDV is $\\$44,823$, not $\\$47,500$.`,
  ],
};

for (const t of arr) {
  const L = lookup[t.id] || [];
  const ex = boost[t.id] || ["", "", "", "", ""];
  t.tactical_explanations = t.tactical_explanations.map((e, i) => {
    const nl = e.indexOf("\n");
    const header = e.slice(0, nl);
    let body = e.slice(nl + 1).replace(/^\n+/, "");
    const w = words(e);
    const need = !L.includes(i) && w < 350;
    const add = need ? (ex[i] || "") : "";
    if (add) body = splice(body, add);
    return header + "\n\n" + body;
  });
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  const L = lookup[t.id] || [];
  const ws = t.tactical_explanations.map(words);
  const flags = ws.map((w, i) => (L.includes(i) ? `L${w}` : (w < 350 ? `!${w}` : `${w}`)));
  console.log(t.id, flags.join(", "));
}
