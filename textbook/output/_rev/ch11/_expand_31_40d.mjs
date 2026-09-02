import fs from "node:fs";

const path = "textbook/output/_rev/ch11/31_40.json";
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
  "math-11-37": {
    0: `Four years of continuous 10% carry the exponent $0.40$. Part 3.1 recovered $S(4) \\approx 2,685,284.46$. This letter is reading that expansion-phase endpoint.

**1.** A solver who used $1,800,000 \\times 1.10^{4} \\approx 2,635,800$ would be on an annual clock, about $\\$49,000$ light.

**2.** The cents, $46$, match $1,800,000 e^{0.40}$. Letter B will multiply this by $e^{0.12}$ for the maturity phase.

**3.** The recovered year-4 revenue is $\\$2,685,284.46$.

The recovered year-4 revenue is $\\$2,685,284.46$`,
    1: `Three further years at 4% multiply the year-4 figure by $e^{0.12}$. Equivalently, $S(7) = 1,800,000 e^{0.52}$. Part 3.2 recovered $S(7) \\approx 3,027,649.77$.

**1.** A solver who used $2,685,284 \\times 1.04^{3} \\approx 3,021,000$ would be on an annual 4% clock for the second phase, a little light.

**2.** Letter C will spread the combined exponent $0.52$ across seven years as a $7.43\\%$ constant rate. This letter only names the seven-year revenue.

**3.** The recovered year-7 revenue is $\\$3,027,649.77$.

The recovered year-7 revenue is $\\$3,027,649.77$`,
    2: `Spreading the combined exponent $0.52$ across seven years is $r_{\\mathrm{eff}} = 0.52 / 7 = 0.074286 \\approx 7.43\\%$. Part 3.4 already wrote that time-weighted average.

**1.** That is not a guess between 4% and 10%. Equal weights would give $7.00\\%$, which is letter D's comparison.

**2.** Checking: $1,800,000 e^{0.074286 \\times 7} = 1,800,000 e^{0.52}$, which is $S(7)$. The constant 7.43% reproduces the two-phase outcome.

**3.** The recovered effective seven-year rate is about $7.43\\%$.

The recovered constant equivalent rate is about $7.43\\%$`,
    3: `The plain unweighted average of 10% and 4% is $7.00\\%$. The time-weighted $7.43\\%$ sits above it because the faster 10% phase lasted four years and the slower 4% phase only three.

**1.** Equal weights would understate the expansion years. Four years at 10% and three at 4% is not a 50-50 mix.

**2.** The extra $0.43$ of a point is $(4/7)\\times 10 + (3/7)\\times 4 - 7 = 7.43 - 7.00$.

**3.** The opposite verdict would hold if the phases had equal length. They do not: four then three.

The effective 7.43% is higher than the unweighted 7.00%`,
    4: `Continuous factors multiply, and multiplication commutes: $e^{0.12} e^{0.40} = e^{0.52} = e^{0.40} e^{0.12}$. Part 2 already used added exponents. The year-7 revenue depends on the total exponent, not on which phase came first.

**1.** Reversing the phases would change the *path*: year 3 would be lower if 4% came first. Year 7 would be the same, because $0.12 + 0.40 = 0.52$ either way.

**2.** The trap is thinking early fast growth "compounds more" in dollars by year 7. For a constant starting $S_0$ and a product of exponentials, order does not change the endpoint.

**3.** The opposite verdict would hold for a model with deposits added along the way. The stem is a single opening revenue base.

Reversed phases leave the same year-7 revenue`,
  },
  "math-11-38": {
    0: `Depreciation shrinks value, so the ratio inside the log must be $v_0 / v(t)$, not the reciprocal. Part 3.1 used $\\delta = \\ln(85,000/32,000)/6$. The displayed $\\ln(v(t)/v_0)/t$ would return a negative rate, which describes growth rather than a write-down.

**1.** The trap is copying the growth-rate inversion $r = \\ln(S(t)/S_0)/t$ without flipping for decay. Depreciation needs the minus sign, or the swapped ratio.

**2.** Letter B will plug in the policy values with the correct ratio. This letter is the false displayed formula.

**3.** The recovered formula is $\\delta = \\ln(v_0 / v(t))/t$, not $\\ln(v(t)/v_0)/t$.

The displayed formula has the ratio backwards`,
    1: `The same inversion with the policy values is $\\delta = \\ln(85,000/32,000)/6$. Part 3.1 recovered $\\delta \\approx 16.28\\%$. This letter is reading that implied rate.

**1.** A solver who used the false formula from letter A would get $-16.28\\%$, a growth rate, which is not a write-down.

**2.** Another mix-up is $(1 - 32/85)/6 \\approx 10.4\\%$, a linear write-down. Continuous depreciation is a logarithm.

**3.** Rounding $0.162819$ to $16.28\\%$ is the claim's approximation. Letters C through E will compare this 16.28% with a 15% crane and a $\\$40,000$ target.

The recovered implied rate is about $16.28\\%$`,
    2: `The second crane depreciates at a known 15% for six years: $85,000 e^{-0.90}$. Part 3.2 recovered $v(6) \\approx 34,558.42$. The claim is $\\$36,000.00$, about $\\$1,442$ too high.

**1.** $\\$36,000$ looks like $85,000 \\times (1 - 0.15 \\times 6)$ wait, that would be negative. More likely $85,000 \\times 0.4235$, a rounded $e^{-0.86}$. The recovered $e^{-0.90} \\approx 0.40657$ gives $\\$34,558$.

**2.** The opposite verdict would hold if the claim had named $\\$34,558.42$. It named $\\$36,000.00$.

The recovered 15% six-year value is $\\$34,558.42$, not $\\$36,000.00$`,
    3: `The first crane is written down to $\\$32,000$ while the second retains about $\\$34,558$. Then $32,000 < 34,558$. The slower 15% rate keeps more value.

**1.** Ranking by which crane had the higher implied rate would reverse this: 16.28% writes down faster than 15%, so the first crane keeps *less*, not more.

**2.** The trap is thinking the first crane "must keep more" because its policy target is a known accounting floor. The floor is $\\$32,000$, which is below the 15% crane's $\\$34,558$.

**3.** The opposite verdict would hold if the first crane's target were above $\\$34,558$. It is $\\$32,000$.

The first crane retains less than the second, not more`,
    4: `Holding more value means a gentler rate. A $\\$40,000$ target over the same six years gives $\\delta = \\ln(85,000/40,000)/6 \\approx 12.56\\%$. Then $12.56\\% < 16.28\\%$.

**1.** A higher remaining value over the same horizon cannot imply a faster write-down. $\\$40,000$ is above $\\$32,000$, so the implied $\\delta$ falls.

**2.** The trap is thinking a "rounder" $\\$40,000$ target is a tougher policy. Tougher would be a *lower* remaining value.

**3.** The opposite verdict would hold for a target below $\\$32,000$. The claim named $\\$40,000$.

The recovered $\\$40,000$ implied rate is about $12.56\\%$, lower than $16.28\\%$`,
  },
  "math-11-39": {
    0: `Continuous doubling is $\\ln 2 / 0.065$. Part 3.1 recovered $t_2 \\approx 10.66$ years. This letter is reading that wait.

**1.** The Rule of $72$ at $6.5\\%$ gives $72/6.5 \\approx 11.1$ years, a cousin of $10.66$ but not the logarithm.

**2.** Rounding $10.6638$ to $10.66$ is the claim's approximation. Letters C and E will compare tripling and quadrupling with this $10.66$.

**3.** The recovered doubling time is about $10.66$ years.

The recovered doubling time is about $10.66$ years`,
    1: `Tripling swaps in $\\ln 3$. Part 3.2 recovered $t_3 \\approx 16.90$ years. This letter is reading that wait.

**1.** A solver who used $1.5 \\times 10.66 = 15.99$ would be letter E's false linear scale. The recovered tripling time is $16.90$, about $0.91$ years later than that linear guess.

**2.** Rounding $16.9017$ to $16.90$ is the claim's approximation.

**3.** The recovered tripling time is about $16.90$ years.

The recovered tripling time is about $16.90$ years`,
    2: `Quadrupling is two doublings because $\\ln 4 = 2 \\ln 2$. Part 3.3 recovered $t_4 \\approx 21.33$ years, and $2 \\times 10.66 = 21.32$. Those match.

**1.** Two doubling periods end to end are a quadrupling. That is why $t_4 = 2 t_2$ exactly in the logarithm, up to rounding of $10.66$.

**2.** Letter E will show that $t_3 = 1.5 t_2$ does *not* hold, because $\\ln 3 \\ne 1.5 \\ln 2$. Quadrupling is the special case where the multiple is a power of $2$.

**3.** The recovered quadrupling time is about $21.33$ years, twice the doubling time.

The recovered quadrupling time is twice the doubling time`,
    3: `Four times the $\\$12,000$ deposit is $\\$48,000.00$. By definition of quadrupling time, that is the balance at $t \\approx 21.33$ years. Part 3.5 already wrote that product.

**1.** A solver who used $12,000 e^{0.065 \\times 21.33}$ would land on $\\$48,000$ by construction. Using $12,000 \\times 4$ is the direct route.

**2.** The cents, $00$, are exact because quadrupling a round $\\$12,000$ is round.

**3.** The recovered balance at the quadrupling time is $\\$48,000.00$.

The recovered quadrupled value is $\\$48,000.00$`,
    4: `Times scale with logarithms, and $\\ln 3 / \\ln 2 \\approx 1.585$, not $1.5$. Part 3.5 already compared those ratios. $1.5 \\times 10.66 = 15.99$ years, against the recovered $16.90$.

**1.** Linear scaling of the multiple does not linearly scale the wait. $3 = 1.5 \\times 2$ as a multiple, but $\\ln 3 \\ne 1.5 \\ln 2$.

**2.** The extra $0.91$ years above $15.99$ is the logarithm's curvature. Early growth is slower in the multiple, so a 3-times target sits later than $1.5$ doubling times.

**3.** The opposite verdict would hold for quadrupling, where $4 = 2 \\times 2$ and $\\ln 4 = 2 \\ln 2$. Tripling is not a power of $2$.

The recovered tripling time is about $1.585$ doubling times, not $1.5$`,
  },
  "math-11-40": {
    0: `Asset A grows continuously at 6% for five years: $150,000 e^{0.30}$. Part 3.1 recovered $A(5) \\approx 202,478.82$. This letter is reading that value.

**1.** A solver who used $150,000 \\times 1.06^{5} \\approx 200,734$ would be on an annual clock, about $\\$1,745$ light.

**2.** The cents, $82$, match $150,000 e^{0.30}$. Letters D and E will add this to B and C.

**3.** The recovered Asset A value is $\\$202,478.82$.

The recovered Asset A five-year value is $\\$202,478.82$`,
    1: `Asset B depreciates continuously at 9% for five years: $220,000 e^{-0.45}$. Part 3.1 recovered $B(5) \\approx 140,278.19$. This letter is reading that value.

**1.** A solver who used $220,000 \\times 0.91^{5} \\approx 137,600$ would be on an annual discrete 9% clock, a little light.

**2.** Letter E will flip the sign on this exponent and turn decay into growth of the same 9% magnitude.

**3.** The recovered Asset B value is $\\$140,278.19$.

The recovered Asset B five-year value is $\\$140,278.19$`,
    2: `Asset C chains two phases whose exponents add to $0.30$: $100,000 e^{0.24} e^{0.06} = 100,000 e^{0.30}$. Part 3.2 recovered $C(5) \\approx 134,985.88$. The claim is $\\$130,000.00$, about $\\$4,986$ too low.

**1.** $\\$130,000$ looks like a 30% simple gain on $\\$100,000$. The recovered factor is $e^{0.30} \\approx 1.34986$, which is a $35\\%$ gain, $\\$134,986$.

**2.** Note that C's combined exponent $0.30$ matches A's $0.06 \\times 5 = 0.30$, so C and A share the same growth factor on different principals.

**3.** The recovered Asset C value is $\\$134,985.88$, not $\\$130,000.00$.

The recovered Asset C five-year value is $\\$134,985.88$`,
    3: `The three terminal values add as ordinary nominal amounts: $202,478.82 + 140,278.19 + 134,985.88 = 477,742.89$. The three original principals sum to $470,000$. Then $477,742.89 > 470,000$.

Gains on A and C outweigh B's depreciation, so the portfolio ends above the starting total.

**1.** The trap is seeing B fall from $\\$220,000$ to $\\$140,278$, a $\\$80,000$ drop, and assuming the portfolio must be down. A's gain is about $\\$52,479$ and C's is about $\\$34,986$, which together more than cover B's drop.

**2.** The opposite verdict would hold if B were larger, or if A and C grew more slowly. Under the stem, the combined portfolio is about $\\$7,743$ above the starting $\\$470,000$.

The combined five-year value exceeds the sum of the original principals`,
    4: `Flipping the sign on B's exponent turns decay into growth of the same 9% magnitude: $220,000 e^{0.45}$. Part 3.4 recovered $B(5)' \\approx 345,028.68$. Then $345,028.68 > 340,000$.

**1.** The same 9% magnitude that left about $\\$140,278$ as decay leaves about $\\$345,029$ as growth. Those two figures multiply to $220,000^{2}$, because $e^{0.45} e^{-0.45} = 1$ and $140,278 \\times 345,029 / 220,000 \\approx 220,000$.

**2.** The gap against $\\$340,000$ is about $\\$5,029$. Rounding $\\$345,029$ to the nearest ten thousand is $\\$350,000$, still above $\\$340,000$.

**3.** The opposite verdict would need a cutoff of $\\$350,000$. The claim named $\\$340,000$.

The recovered growth-path B is about $\\$345,029$, which exceeds $\\$340,000$`,
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
console.log("37-40 done");
