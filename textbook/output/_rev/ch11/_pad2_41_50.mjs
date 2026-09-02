import fs from "node:fs";

const file = "textbook/output/_rev/ch11/41_50.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

const pad = {
  "math-11-41": [
    "",
    "",
    "",
    "",
    `Notice the direction as the rate falls. The $5\\%$ PDV was already $\\$7,619$, below the face. Setting $r=0$ has to lift that present value toward $\\$8,000$, never down toward $\\$7,500$. A claimed $\\$7,500$ at a zero rate is a discount without a rate, which the model does not allow. The recovered zero-rate PDV is the full bonus.`,
  ],
  "math-11-42": [
    "",
    "",
    "",
    `Name the false gap. $\\$60$ is $0.5\\%$ of the $\\$12,000$ face, a round haircut that never uses either recovered PDV. The recovered clocks differ by $\\$52.42$, and that is the only gap the two conventions produce at $r=0.06$ and $t=3$. Calling $\\$52$ approximately $\\$60$ overstates the difference by about $15\\%$ of the gap itself. The opposite verdict would need a longer wait or a higher rate to push the clock gap up to $\\$60$.`,
    "",
  ],
  "math-11-43": [
    "",
    "",
    `The accountant who reports $\\$24,900$ is not using a nearby rounding of $\\$25,704$. The error is about $\\$804$, large enough that it cannot be cents. Continuous $7\\%$ over eight years is the recovered $\\$25,704.41$. A tougher clock than annual is already priced in that figure; the claim asks for still more toughness than the exponent $0.56$ delivers.`,
    `Keep the two jobs separate. Letter B is the annual level. Letter C is the continuous level. This letter is only their difference, $\\$486$. Reporting either level as if it were the gap, or reporting $1.44\\%$ of $\\$45,000$, misses the subtraction the claim actually asks for. At $t=8$ and $r=0.07$ the recovered gap is $\\$486$, not $\\$650$.`,
    `Watch the direction again. Moving $r$ from $7\\%$ to $0\\%$ must lift both present values toward $\\$45,000$, from about $\\$26,190$ and $\\$25,704$ upward, not down to $\\$40,000$. A zero rate erases compounding language entirely: annual and continuous become the same factor $1$. The claimed $\\$40,000$ is a haircut without a rate.`,
  ],
  "math-11-44": [
    "",
    "",
    "",
    "",
    `Write the two recovered deposits side by side: $\\$119,777$ for five years and $\\$95,644$ for ten. The ratio is about $0.80$, not $0.50$. A practice that budgeted half the five-year cheque for a ten-year plan would be about $\\$35,755$ light. Exponential discounting helps with extra years, but each extra year discounts a smaller remaining present value, so the help is not a halving.`,
  ],
  "math-11-45": [
    "",
    "",
    "",
    `Continuous inversion divides $\\ln 1.3514$ by $0.06$, not by $\\ln 1.06$. That single change of denominator is why $5.02$ sits below $5.17$, and why $5.45$ cannot be the continuous wait. Adding a quarter-year penalty to the annual figure moves the wrong way. The recovered continuous maturity is $5.02$ years.`,
    `Stronger growth hits a fixed multiple sooner. That is the whole ranking. Continuous $6\\%$ is the stronger clock, so its wait is the shorter one. The recovered pair $5.02<5.17$ is that fact in years. A claimed longer continuous wait would need continuous compounding to be the weaker clock, which it is not at a fixed nominal rate.`,
  ],
  "math-11-46": [
    "",
    "",
    `The six-year PDV has to sit between $\\$27,000$ and $\\$60,000$, and it does: $\\$40,249$. Twice $\\$27,000$ would overshoot to $\\$54,000$. A midpoint would overshoot to $\\$43,500$. The square-root factor $\\sqrt{0.45}\\approx 0.6708$ is the structure that produces $\\$40,249$ from the same recovered $r$ without treating time as linear.`,
    "",
    `When the factor is held fixed, $r$ scales as $1/t$. Doubling the horizon from $12$ to $24$ therefore halves $6.65\\%$ to $3.33\\%$. That inverse-linear scaling is special to this question; it is not the square-root scaling of a present-value *level* in letter C. The recovered $24$-year rate is $3.33\\%$.`,
  ],
  "math-11-47": [
    `Two years of $5\\%$ is two factors of $1.05$, already recorded as $1.1025$ in the overview. This letter reads $\\$40,000/1.1025\\approx \\$36{,}281$, not that square. A one-year discount, a continuous $e^{-0.10}$, or the face itself are the three usual wrong companions. The recovered nearer PDV is $\\$36,281.18$.`,
    `Five years of $5\\%$ is the factor $1.276282$ already in the overview. This letter reads $\\$65,000$ divided by that factor. Miscounting the wait as four or six years, or switching to $e^{-0.25}$, produces neighbours of $\\$50,931$ that the claim does not name. The recovered later PDV is $\\$50,930.87$.`,
    `The combined figure is a sum of today's dollars, not a sum of future cheques. $\\$36,281+\\$50,931=\\$87,212$ keeps both licensing dates converted. $\\$105,000$ does not. A controller who reports $\\$87,212$ can defend each addend from letters A and B. A controller who reports the faces cannot.`,
    `Equal faces would make the later payment smaller in present value. These faces are not equal. The $62.5\\%$ larger year-five cheque still dominates after five years of $5\\%$. The recovered ranking $\\$50,931>\\$36,281$ is that dominance. The slogan "later means smaller" needs equal $K$ values the stem does not have.`,
    `A tougher clock should pull the total down from $\\$87,212$, and it does, to $\\$86,816$. Pulling it through $\\$86,000$ would need more than the extra toughness of continuous $5\\%$ over these two waits. The recovered continuous sum stays about $\\$816$ above the cutoff, so the threshold claim fails.`,
  ],
  "math-11-48": [
    `Three years of $6\\%$ is the factor $1.191016$ already in the overview. This letter reads $\\$25,500$ divided by that factor. Growing A's $\\$22,000$ forward, or discounting B for one year, answers a different question and will not produce $\\$21,410.30$. The recovered PDV of Option B is that figure.`,
    `The $\\$590$ gap is small enough to be rate-sensitive, which is why letters C and E exist, but at the stem's $6\\%$ it is still a gap in A's favour. Faces cannot close it. Only a lower discount rate can. The recovered ranking $22{,}000>21{,}410$ is the $6\\%$ verdict.`,
    `Direction and level are different jobs. Lowering $r$ to $3\\%$ must raise PDV, and the recovered $\\$23,336$ is that higher level. The claimed $\\$22,780$ is higher than $\\$21,410$ but is not the $3\\%$ present value. Approximately $\\$22,780$ is the wrong neighbour of $\\$23,336$.`,
    `One counterexample kills "regardless." The stem's $6\\%$ case is already that counterexample. A break-even near $5\\%$ shows the ranking *does* depend on $r$. Option B would have to be cash today, larger than $\\$22,000$, for every positive rate to leave it above $\\$22,000$. It is not cash today.`,
    `Near-indifference is the $5\\%$ story: $\\$22,029$ versus $\\$22,000$. The claimed $\\$23,500$ is a midpoint of $\\$22,000$ and $\\$25,000$, not a $5\\%$ discount. Reporting $\\$23,500$ would hide how close the architect is to flipping from A to B. The recovered $5\\%$ PDV is $\\$22,029$.`,
  ],
  "math-11-49": [
    `The FOC after cancelling $(t+2)$ is $t+2=25$, so $t^{*}=23$ exactly in this family, not approximately some other rotation such as $1/r=12.5$ or $2/r=25$. Subtracting the shift $2$ is the last algebraic move. The recovered harvest date is $23$ years.`,
    `Remember what $P'$ and $rP$ both measure: dollars of value per year. The claim's $P/r$ does not measure that. Harvest timing equates two flows. The recovered equation is $P'(t^{*})=rP(t^{*})$, and that is the equation that produced $t^{*}=23$ in letter A.`,
    `Twenty percent of stumpage is $\\$625,000$, a neighbour of the claimed $\\$623,000$. Present value uses $e^{-1.84}\\approx 0.1588$, not $0.20$. The recovered $f(23)\\approx \\$496{,}219$ is the discounted maximum, about $\\$127,000$ below the claim.`,
    `The sign of $\\mathrm{d}t^{*}/\\mathrm{d}r$ is negative for this stand whenever the second-order condition holds. Higher $r$ raises the financing cost $rP$ and brings the crossing $P'=rP$ forward. The recovered $t^{*}=2/r-2$ has that negative slope built in. Later harvests belong to lower rates, not higher ones.`,
    `Stumpage rising from $\\$3,125,000$ to $\\$3,645,000$ between years $23$ and $25$ is real, and it is not enough. Discounting those extra two years at $8\\%$ continuous takes more present value than the extra trees add. The recovered $f(25)<f(23)$ is the definition of a maximum at $t^{*}$.`,
  ],
  "math-11-50": [
    `Four years of continuous $5.5\\%$ is the exponent $0.22$ already in the overview. This letter reads $18{,}000e^{-0.22}\\approx \\$14{,}445$. Using $0.20$ in the exponent, or switching to annual $(1.055)^{-4}$, produces neighbours the claim does not name. The recovered nearer PDV is $\\$14,445.34$.`,
    `Nine years of continuous $5.5\\%$ is the exponent $0.495$. This letter reads $30{,}000e^{-0.495}\\approx \\$18{,}287$. Copying the four-year exponent onto the larger invoice, or using annual compounding, misses that figure. The recovered later PDV is $\\$18,287.13$.`,
    `The settlement is a sum of today's dollars. $\\$14,445+\\$18,287=\\$32,732$ keeps both supplier dates converted. $\\$48,000$ does not, except in letter E's zero-rate world. A winery that tenders $\\$32,732.47$ today has matched the supplier's continuous $5.5\\%$ clock.`,
    `Equal faces would make the nine-year invoice smaller in present value. These faces are not equal. The $67\\%$ larger later bill still dominates after nine years of $5.5\\%$. The recovered ranking $\\$18,287>\\$14,445$ is that dominance. "Later means smaller" needs equal $K$ values the stem does not have.`,
    `At $r=0$ the two due dates become irrelevant, and adding faces is legal. At $r=0.055$ that same addition is the letter-C trap. The recovered zero-rate lump sum is $\\$48,000$ because both discount factors are $1$, not because the invoices were never discounted in the original problem.`,
  ],
};

function splice(body, extraText) {
  if (!extraText) return body;
  const lines = body.replace(/\r\n/g, "\n").trimEnd().split("\n");
  const closer = lines.pop();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();
  return [...lines, "", extraText.trim(), "", closer].join("\n");
}

function words(s) {
  return s.split(/\s+/).filter(Boolean).length;
}

for (const t of arr) {
  const ex = pad[t.id];
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
  const ws = t.tactical_explanations.map(words);
  console.log(t.id, ws.join(", "), "min", Math.min(...ws), "max", Math.max(...ws));
}
