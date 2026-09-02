import fs from "node:fs";

const file = "textbook/output/_rev/ch11/51_60.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

// Second unique pad for PDV / harvest / threshold letters still under 350.
const extra = {
  "math-11-51": [
    `Name the false figure. $\\$33,100$ is what an eight-year wait or a linear $35\\%$ haircut almost produces. Seven years of continuous $5\\%$ produce $\\$35,234$. The gap of $\\$2,134$ is not cents. The recovered PDV is $\\$35,234.40$, not $\\$33,100$.`,
    "", "",
    `The converted annual clock and the continuous clock are built to agree at every $t$, including $t=3$. That is the point of $1+r_{a}=e^{r}$. The recovered three-year PDV is $\\$43,035.40$ on both clocks. A solver who thinks the conversion depends on seven years has not cancelled $t$.`,
    `Threshold claims die on the recovered side of the cutoff. $0.13<1.00$ is that side. Rounding $5.13$ to $6$ or reading $0.13$ as $1.3$ would manufacture a pass. Full precision keeps the gap at $0.13$ points. The recovered gap is not more than $1.00$ percentage point.`,
  ],
  "math-11-52": [
    `A covenant test that used $\\$42,000$ as today's contribution would overstate the known contract by about $\\$6,736$. Three years of $6\\%$ are not free. The recovered PDV is $\\$35,264.01$. Letter B subtracts this figure, not the face, from $\\$100,000$.`,
    `Keep the jobs separate. This letter is the hole. Letter C is the six-year face that fills the hole. Reporting $\\$91,829$ here, or $\\$58,000$ from subtracting faces, mixes those jobs. The recovered residual is $\\$64,735.99$.`,
    `If the second receivable were due today, the required face would be the residual $\\$64,736$. Six years of $6\\%$ are what lift it to $\\$91,829$. A three-year lift is $\\$77,102$. An $8\\%$ lift is $\\$102,728$. This letter is the $6\\%$ six-year face $\\$91,829.24$.`,
    `The extra step is only $77{,}102<91{,}829$. Same residual, shorter wait, smaller face. The opposite ranking would need the present-value target to grow when the wait shortens, which it does not. The recovered three-year face is smaller.`,
    `At $0\\%$ the required face would equal $\\$64,736$. At $6\\%$ it is $\\$91,829$. At $8\\%$ it is $\\$102,728$. Higher $r$ raises the face when present value is held fixed. The recovered $8\\%$ six-year face is $\\$102,727.88$.`,
  ],
  "math-11-53": [
    "",
    `Letter C will test a $\\$11,000$ premium against this $K$. The recovered premium is $\\$10,393$, so that threshold will fail. Using $0.8112$ as the factor would have produced a different $K$ and a different premium. The recovered indifference payment is $\\$45,392.55$, not $\\$49,850.75$.`,
    `More than $\\$11,000$ would require $rt$ a bit above $0.26$. The stem has $0.26$. The recovered premium $\\$10,393$ is the four-year, $6.5\\%$ figure, about $\\$607$ short of the cutoff. The statement is a threshold claim, and the recovered side is below.`,
    `Opportunity cost is the price of waiting. Raise it from $6.5\\%$ to $9\\%$ and the delayed cheque must grow from $\\$45,393$ to $\\$50,167$ to keep the firm indifferent. Unchanged $K$ would mean $r$ had dropped out of $K=PV_{0}e^{rt}$. It has not.`,
    `Two years of continuous $6.5\\%$ is the exponent $0.13$, already in the overview. This letter reads $K\\approx \\$39,859<\\$45,393$. Impatience is already inside $r$. Holding $r$ fixed, less wait means less extra cash. The recovered two-year payment is smaller.`,
  ],
  "math-11-54": [
    `A corner at $t^{*}=0$ is what you get whenever growth is stuck below the discount rate. Here $5\\%<8\\%$, forever. Waiting cannot help $f$. Letter C's $\\$29,633$ is the ten-year proof. The recovered policy is sell now.`,
    "",
    `Someone who reported $40{,}000e^{0.50}$ named future market value, not present value. Someone who reported $40{,}000e^{-0.80}$ named a no-growth discount. The recovered net is $-0.30$, and $f(10)\\approx \\$29,632.73$. That sits about $\\$10,367$ below selling now.`,
    `The hinge is the sign of $0.05-r$. At $r=0.08$ the sign is negative and waiting hurts. At $r=0.04$ the sign is positive and waiting helps. "Regardless" denies the hinge. The recovered $8\\%$ pair $40{,}000>29{,}633$ is already a counterexample.`,
    `The recovered $4\\%$ path $40{,}000e^{0.01t}$ climbs without bound in this model. Immediate sale would lock in the minimum of $f$, not the maximum. Letter A was $r>0.05$. This letter is $r<0.05$. The policies are opposites.`,
  ],
  "math-11-55": [
    "", "",
    `A one-point rise in $r$ pulls about $4.76$ years of harvest forward. That is a large sensitivity because $P$ is large relative to $|P''-rP'|$. Putting $P'$ in the numerator understates it. Flipping the sign of the denominator reverses it. The recovered sensitivity is $-476.19$.`,
    `Higher $r$ raises $rP$ and brings the crossing $P'=rP$ forward. Trees do not grow faster. The recovered derivative is negative, so $t^{*}$ shortens. "Lengthen" would need a minimum of $f$, which letter E's second-order test rejects.`,
    `The test is not $P''<0$. $P''$ is positive. The test is $P''-rP'<0$, and $-rP'$ is what passes it. The recovered expression $-1{,}092$ is negative, so the second-order condition for a maximum holds.`,
  ],
  "math-11-56": [
    `Letter B will value $f$ at this date. Letter C will sign $P''-rP'$. Letter D will divide $P$ by that quantity. Letter E will halve $r$. All four need $t^{*}\\approx 18.22$, not $22.22$ and not $11.11$. The recovered harvest date is $18.22$ years.`,
    `The recovered $f(t^{*})\\approx \\$287,378$ uses $e^{-1.64}\\approx 0.194$ against stumpage $\\$1,481,481$. A $20\\%$ factor would give about $\\$296,000$, still not $\\$250,000$. The claim understates the discounted maximum. The recovered present value is not $\\$250,000$.`,
    `Letter D's formula uses this denominator. A sign error here reverses $\\mathrm{d}t^{*}/\\mathrm{d}r$. The recovered $P''-rP'$ is $-6{,}000$, the magnitude of $P''$ after subtracting $rP'\\approx 12{,}000$. The claim's $+\\$6,000$ is $P''$ with the subtraction skipped.`,
    `Size without sign is not the sensitivity. The recovered quotient is negative because the denominator is negative. A reported $+246.91$ is letter C's false $+6{,}000$ recycled. For a maximum, $t^{*}$ falls as $r$ rises. The recovered sensitivity is $-246.91$.`,
    `Write $t^{*}=2/r-4$ at both rates: $18.22$ at $9\\%$ and $40.44$ at $4.5\\%$. Doubling $18.22$ ignores the shift. The recovered $4.5\\%$ date is $40.44$ years, four years later than $36.44$. Linearity fails because of the $-4$.`,
  ],
  "math-11-57": [
    `Letter C adds this $\\$189,893$ to the side payment's $\\$37,514$. Treating the exit as $\\$250,000$ today would throw that total off by about $\\$60,000$. The exponent is $0.11\\times 2.5=0.275$. The recovered exit PDV is $\\$189,893.03$.`,
    `Letter C adds this $\\$37,514$ to the exit. Letter D converts the $\\$2,486$ gap into $6.2\\%$ of face. Seven months is $0.583$ years, not $7$ years. The recovered side-payment PDV is $\\$37,513.95$.`,
    `A round $\\$230,000$ is a nickname, not a rounding of $\\$227,407$ to the cents the claim printed. Faces sum to $\\$290,000$. Recovered PDVs sum to $\\$227,407$. The recovered combined PDV is not $\\$230,000$.`,
    `More than $10\\%$ would need a longer wait or a higher rate. Seven months of $11\\%$ is a $6.2\\%$ haircut. Using $11\\%$ itself as the share is the trap. The recovered discount is $6.2\\%$ of face, not more than $10\\%$.`,
    `The original $11\\%$ total was $\\$227,407$. Setting $r=0$ must lift that total to $\\$290,000$, because both $e^{0}=1$. The recovered zero-rate combined PDV is $\\$290,000$.`,
  ],
  "math-11-58": [
    "",
    `Letters C, D, and E all start from this $10.44\\%$. A linear $8.33\\%$ would throw those later rankings off. The recovered inversion uses $-\\ln 0.625/4.5$. The recovered continuous rate is $10.44\\%$.`,
    `The new factor $2/3.6\\approx 0.556$ is a deeper discount than $0.625$. Deeper discount at the same $t$ is a higher $r$. The recovered $13.06\\%$ sits above $10.44\\%$. Raising the payout raises implied $r$ when price is held fixed.`,
    `The same $0.625$ packed into $3$ years instead of $4.5$ is $15.67\\%$ per year. Inverse in $t$, not decreasing in $t$. The recovered three-year rate is higher, not lower. Letter E will double $t$ and halve $r$.`,
    `Half of $10.44\\%$ is $5.22\\%$. That is $-\\ln 0.625/9$, not $10.44/\\sqrt{2}$. Fixed factor, doubled time, halved rate. The recovered $9$-year rate is $5.22\\%$.`,
  ],
  "math-11-59": [
    `The scale $A$ cancels, so a more valuable stand is not harvested later in this family. Only $r$ and $k$ remain. Letter B will substitute $0.075$ and $5$. The recovered formula is $t^{*}=2/r-k$.`,
    `Using percent $7.5$ in place of $0.075$ is a slip of two orders of magnitude. Forgetting $k$ reports $26.67$. The recovered date is $21.67$ years, and $A=1{,}200$ never entered.`,
    `Present value is stumpage times $e^{-1.625}$. A milder exponent $1.5$ manufactures a neighbour of $\\$195,500$. The recovered exponent is $1.625$, and $f(t^{*})\\approx \\$168,031$. The claim overstates the discounted maximum.`,
    `Three extra years of shift cut three years off $t^{*}$. That is $\\partial t^{*}/\\partial k=-1$ in words. The recovered $k=8$ date is $18.67$ years, shorter than $21.67$. Waiting longer would require a smaller $k$ or a smaller $r$.`,
    `Compare $8.33$ with half of $21.67$, which is $10.83$. Less than half, not more. The unshifted pair $13.33$ versus $13.33$ would have been exact halving. The shift $-5$ is what makes doubling $r$ more than halve $t^{*}$. The recovered $15\\%$ date is $8.33$ years.`,
  ],
  "math-11-60": [
    "", "",
    `This $\\$20,110$ is one addend of $\\$44,823$. Letter D is the other. Letter E adds them. A $\\$21,500$ addend is what produces the false $\\$47,500$ total in letter E. The recovered five-year PDV is $\\$20,109.60$, not $\\$21,500$.`,
    `This $\\$24,713$ is the other addend. Using $0.6703$ on $\\$55,000$ would treat a ten-year payment as a five-year payment. The recovered ten-year PDV is $\\$24,713.09$, not $\\$26,000$.`,
    `Adding the two recovered present values is the investor's cheque today: $\\$44,823$. Adding the two false present values is $\\$47,500$, the claim. Adding faces is $\\$85,000$. The recovered combined PDV is $\\$44,823$, not $\\$47,500$.`,
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
    return e.slice(0, nl) + "\n\n" + splice(e.slice(nl + 1).replace(/^\n+/, ""), ex[i] || "");
  });
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) console.log(t.id, t.tactical_explanations.map(words).join(", "));
