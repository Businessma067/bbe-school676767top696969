import fs from "node:fs";

const path = "textbook/output/_rev/ch11/21_30.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer " + last.slice(-80));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

const extras = {
  "math-11-23": {
    0: `In the story of the stem, the client wants the true yearly yield on a 9% continuously compounded bond fund. The recovered object is $EAR \\approx 9.42\\%$. Citing it is citing Part 3.1, not a second $e^{0.09}$.

**1.** A solver who left the yield at $9\\%$ would be describing annual compounding. Continuous compounding lifts 9% to about $9.42\\%$.

**2.** The extra against the printed 9% is $0.42$ of a point, which letter C will test against a $0.75$-point cutoff.

**3.** Rounding $0.094174$ to $9.42\\%$ is the claim's approximation. Letter D will rebuild this conversion at $18\\%$.

The recovered effective rate is about $9.42\\%$`,
    1: `The year-end balance is $\\$15,000$ times $e^{0.09}$. Part 3.2 recovered $S(1) = 16,412.61$. This letter is reading that product.

**1.** A solver who used $15,000 \\times 1.09 = 16,350$ would miss the extra $\\$62.61$ that continuous compounding adds.

**2.** The cents, $61$, match $15,000 \\times 1.094174$. Letter A recovered the $9.42\\%$ that produces this dollar figure.

**3.** What would have to change for the opposite verdict is a different principal or rate. Under $\\$15,000$ at 9% continuous for one year, the balance is $\\$16,412.61$.

The recovered year-end balance is $\\$16,412.61$`,
    2: `The gap is the effective annual rate minus the printed 9%. Part 3.1 recovered $9.42\\%$. Part 3.3 already subtracted and left $0.42$ percentage points.

Against the $0.75$-point cutoff that is

$$0.75 - 0.42 = 0.33$$

so the premium is $0.33$ of a point short.

**1.** At a 9% continuous quote the exponential and its linear approximation are still fairly close. A $0.75$-point premium would need a higher rate. Letter D's 18% conversion does produce a larger premium.

**2.** The trap is reading $9.42$ against $8.00$, or treating $0.42$ as if it already cleared $0.75$.

**3.** The recovered gap is $0.42$ points, which is not more than $0.75$.

The recovered gap is $0.42$ points`,
    3: `Doubling the nominal quote from 9% to 18% is a new conversion. Part 3.4 recovered $EAR_{18} \\approx 19.72\\%$. Twice the original $9.42\\%$ is $18.84\\%$. Part 3.5 compared $19.72\\% > 18.84\\%$.

The extra is about $0.88$ of a point of convexity.

**1.** The trap is treating $EAR = r$ as linear through the origin. The map $r \\mapsto e^{r} - 1$ bends up. Doubling $r$ more than doubles $EAR$.

**2.** A solver who doubled $9.42\\%$ to $18.84\\%$ and stopped would think the claim was false. The overview's $19.72\\%$ is the actual 18% conversion.

**3.** The opposite verdict would hold for annual compounding, where $EAR = r$ so doubling $r$ doubles $EAR$. The stem compounds continuously.

The recovered 18% effective rate exceeds double the original $9.42\\%$`,
    4: `The same 18% conversion, tested against a $19.5\\%$ cutoff. Part 3.4 recovered $19.72\\%$.

The gap against the cutoff is

$$19.72\\% - 19.50\\% = 0.22$$

so the hypothetical yield clears $19.5\\%$ by about $0.22$ of a point.

**1.** A solver who used $2 \\times 9.42\\% = 18.84\\%$ would miss $19.5\\%$ and would be testing the linear companion, not the exponential conversion.

**2.** Letter D asked whether $19.72\\%$ exceeds $18.84\\%$. This letter asks whether $19.72\\%$ exceeds $19.5\\%$. Both comparisons hold.

**3.** The opposite verdict would need a cutoff of $20\\%$. The claim named $19.5\\%$.

The recovered 18% EAR is about $19.72\\%$, which exceeds $19.5\\%$`,
  },
  "math-11-24": {
    0: `Yearly compounding at 10% is one plus the quote. Part 3.1 recovered $K_{y} = 1.1000$. This letter is reading that factor.

**1.** The trap is $e^{0.10} \\approx 1.1052$, the continuous factor, used one clock too soon. Yearly compounding is $1.10$ exactly.

**2.** Another mix-up is $(1.05)^{2} = 1.1025$, the semi-annual factor from letter B.

**3.** $1.1000$ is exact. Letters D and E will apply the three factors to $\\$75,000$.

The recovered yearly factor is $1.1000$`,
    1: `Two half-year credits of 5% square. Part 3.2 recovered $K_{s} = 1.1025$ exactly. This letter is reading that square, not rebuilding it.

**1.** The trap is $1.10$ again, as if twice-a-year crediting added nothing. Two credits of 5% add $0.0025$ of extra factor.

**2.** On $\\$75,000$ that extra is $\\$187.50$, which letter E will use.

**3.** $1.1025$ is exact. Letter C takes the continuous factor next.

The recovered semi-annual factor is $1.1025$`,
    2: `Continuous compounding evaluates $e^{0.10}$. Part 3.3 recovered $K_{c} \\approx 1.105171 \\approx 1.1052$. This letter is reading that factor.

**1.** The trap is stopping at $1.1025$, the semi-annual figure. Continuous is the ceiling, about $0.00267$ above semi-annual.

**2.** Rounding $1.105171$ to $1.1052$ is the claim's approximation.

**3.** On $\\$75,000$ the extra over semi-annual is letter D's dollar gap.

The recovered continuous factor is about $1.1052$`,
    3: `The dollar gap is $\\$75,000$ times the factor gap between continuous and semi-annual. Part 3.4 recovered $\\$200.32$. The claim is $\\$250.32$, about $\\$50$ too high.

The extra arithmetic against the claim is

$$250.32 - 200.32 = 50.00$$

**1.** $\\$250.32$ looks like $\\$200.32$ with a $\\$50$ slip, or $75,000 \\times 0.003337$. The recovered factor gap is $0.002671$, which is $\\$200.32$.

**2.** A solver who used $K_{c} - K_{y}$ instead of $K_{c} - K_{s}$ would get $75,000 \\times 0.005171 \\approx 388$, even farther away.

**3.** The opposite verdict would hold if the claim had named $\\$200.32$. It named $\\$250.32$.

The recovered extra is $\\$200.32$, not $\\$250.32$`,
    4: `Letter E compares two dollar gaps on $\\$75,000$. Semi-annual minus yearly is $\\$187.50$. Continuous minus semi-annual is $\\$200.32$. Part 3.5 already compared $187.50 < 200.32$.

The claim said the first gap is larger. It is smaller.

**1.** At 10% the step from yearly to semi-annual captures $0.0025$ of factor. The step from semi-annual to continuous captures about $0.00267$. The second step is slightly larger here, unlike the diminishing-returns pattern at lower rates in Chapter 11.1.

**2.** The trap is assuming every later frequency step must add less. Between $n = 2$ and $n = \\infty$ there is still a lot of compounding left at 10%.

**3.** The opposite verdict would hold if $187.50 > 200.32$. They run the other way.

The semi-annual-to-yearly gap is the smaller one`,
  },
};

for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((letter, i) => {
    if (!ex[i]) return letter;
    return insertBeforeClose(letter, ex[i]);
  });
}
fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
console.log("23-24 done");
