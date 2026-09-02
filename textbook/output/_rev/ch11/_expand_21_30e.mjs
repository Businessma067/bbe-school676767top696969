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
  "math-11-27": {
    0: `Continuous doubling is $\\ln 2$ over the rate. Part 3.2 recovered $t \\approx 12.60$ years at $5.5\\%$. This letter is reading that wait.

**1.** The Rule of $72$ at $5.5\\%$ gives $72/5.5 \\approx 13.1$ years, a cousin of $12.60$ but not the logarithm. The overview used $\\ln 2 / 0.055$.

**2.** Another mix-up is $72 / 5.5$ months, or $1 / 0.055 \\approx 18$ years, dropping the $\\ln 2$.

**3.** Rounding $12.6027$ to $12.60$ is the claim's approximation. Letter C will halve this wait at $11\\%$.

The recovered doubling time is about $12.60$ years`,
    1: `By construction $e^{0.055 \\times 12.60} = 2$, so the balance at the doubling time is $18,000 \\times 2 = 36,000.00$. Part 3.4 already checked that product.

**1.** A solver who used $18,000 e^{0.055 \\times 12} \\approx 34,870$ would be stopping at 12 years, about $1,130$ short of a doubling.

**2.** The cents, $00$, are exact because doubling is exact at $t = \\ln 2 / r$, even if $12.60$ is a rounded calendar.

**3.** Letter D will take three doublings to $8 \\times 18,000$. This letter is one doubling.

The recovered doubled balance is $\\$36,000.00$`,
    2: `Doubling time is inversely proportional to the rate. At $11\\%$, Part 3.3 recovered $t \\approx 6.30$ years, half of $12.60$, not equal to it.

**1.** The trap is thinking the wait is a property of doubling, independent of the rate. Faster accounts double sooner.

**2.** Raising the rate from $5.5\\%$ to $11\\%$ halves the wait. It does not leave $12.60$ unchanged.

**3.** The opposite verdict would hold if $r$ did not appear in $t = (\\ln 2)/r$. It does appear, in the denominator.

The recovered 11% doubling time is about $6.30$ years, not $12.60$`,
    3: `Each doubling multiplies by $2$, so three doublings multiply by $8$. Part 3.5 recovered $18,000 \\times 8 = 144,000$. Six times the principal would be $\\$108,000$.

**1.** The trap is adding doublings: $2 + 2 + 2 = 6$. Repeated doublings multiply: $2 \\times 2 \\times 2 = 8$.

**2.** Three doubling periods are about $37.8$ years at $5.5\\%$. After that the reserve is eight times the deposit, not six.

**3.** The opposite verdict would hold for a target of $6 S_0$, which takes $(\\ln 6)/0.055 \\approx 32.6$ years, not three doubling periods.

Three doublings produce $8$ times the principal, not $6$`,
    4: `The formula $t = (\\ln 2)/r$ falls as $r$ rises. Part 3.2's $12.60$ years against Part 3.3's $6.30$ years is that fall.

**1.** A higher rate reaches $2$ sooner, not later. The claim has the relationship backwards.

**2.** The trap is thinking a higher rate is "more growth to do" so it takes longer. More growth *per year* means less time to a fixed multiple.

**3.** Letter C already showed the 11% wait is half of $12.60$. This letter is the general direction.

A higher rate gives a shorter doubling time`,
  },
  "math-11-28": {
    0: `Keeping $40\\%$ is $v_0 e^{-\\delta t} = 0.40 v_0$. Cancel $v_0$ and take logs: $t = \\ln(2.5)/\\delta$. Part 2 already wrote that inversion. This letter is reading the displayed formula.

**1.** The trap is $\\ln(0.40)/\\delta$ without the minus sign, which would return a negative time. The displayed $\\ln(2.5)/\\delta$ is the positive version.

**2.** $1/0.40 = 2.5$ is the reciprocal of the remaining fraction. Losing 60% means keeping 40%, which inverts to $2.5$, not to $0.60$ or $1.60$.

**3.** Letter B will plug in $\\delta = 0.18$. This letter is the algebra.

The recovered inversion is $t = \\ln(2.5)/\\delta$`,
    1: `At $\\delta = 0.18$ the same logarithm is $t = \\ln 2.5 / 0.18$. Part 3.2 recovered $t \\approx 5.09$ years.

**1.** A solver who used $\\ln 0.60 / 0.18$ would be inverting the *lost* share instead of the remaining share.

**2.** Another mix-up is $0.60 / 0.18 = 3.33$ years, a linear write-down. Continuous depreciation is a logarithm, not a ratio of percentages.

**3.** Rounding $5.0905$ to $5.09$ is the claim's approximation. Letter D will double this wait at $9\\%$.

The recovered wait is about $5.09$ years`,
    2: `Forty percent of $\\$120,000$ is $\\$48,000.00$. Part 3.3 already checked that remaining value. This letter is that product, not a new exponential.

**1.** A solver who used $120,000 e^{-0.18 \\times 5.09}$ would land on the same $\\$48,000$ by construction. Using $0.40 \\times 120,000$ is the direct route.

**2.** The cents, $00$, are exact because 40% of a round $\\$120,000$ is round.

**3.** Letter E will ask about keeping only 20%. This letter is the 40% remaining value at the 5.09-year date.

The recovered remaining value is $\\$48,000.00$`,
    3: `Time is inversely proportional to $\\delta$. Halving $0.18$ to $0.09$ doubles the wait. Part 3.4 recovered $t \\approx 10.18$ years, which is $2 \\times 5.09$.

**1.** A slower write-down takes twice as long to reach the same remaining fraction. That is the $1/\\delta$ in the formula.

**2.** The trap is thinking a slower rate would *shorten* the wait because "less is happening." Less happening per year means more years to lose 60%.

**3.** The opposite verdict would need $t$ independent of $\\delta$. It is not.

The recovered 9% wait is about $10.18$ years, double $5.09$`,
    4: `Keeping only $20\\%$ inverts to $5$, and $\\ln 5 > \\ln 2.5$. Part 3.6 recovered $t_{80} \\approx 8.94$ years against $t_{60} \\approx 5.09$.

**1.** A deeper loss needs more time at the same rate. Losing 80% is keeping 20%, which is a smaller remaining fraction and a larger logarithm.

**2.** The trap is thinking "once you have lost 60%, the last 20% is quick." The last stretch is slower in dollars (smaller base) and still takes $\\ln 5 - \\ln 2.5 = \\ln 2$ extra, about $3.85$ years at $18\\%$.

**3.** The opposite verdict would hold if the 80% loss were measured from the 60% date without extra time. The claim compares two waits from $t = 0$.

The time to lose 80% is longer than the time to lose 60%`,
  },
  "math-11-29": {
    0: `At 3% over one year on $\\$25,000$, Part 3.1 recovered a continuous balance of $\\$25,761.36$ and Part 3.2 an annual balance of $\\$25,750.00$. Part 3.3 subtracted and left $\\$11.36$.

**1.** That $\\$11.36$ is the extra from continuous crediting at a modest 3% quote. Small, which is why letter C's "30 times" test against the 15% gap will fail.

**2.** A solver who used $25,000 (e^{0.03} - 1.03)$ directly would land on the same $\\$11.36$.

**3.** The recovered 3% one-year gap is $\\$11.36$.

The recovered 3% one-year gap is $\\$11.36$`,
    1: `At 15% over one year, Part 3.4 recovered a continuous balance of $\\$29,045.86$ and Part 3.5 an annual balance of $\\$28,750.00$. Part 3.6 subtracted and left $\\$295.86$.

**1.** The extra is much larger than $\\$11.36$ because 15% is a much higher quote. Convexity of $e^{r} - (1+r)$ grows with $r$.

**2.** A solver who scaled $\\$11.36$ by $15/3 = 5$ would get $\\$56.80$, far below $\\$295.86$. The gap does not scale linearly with the rate.

**3.** The recovered 15% one-year gap is $\\$295.86$.

The recovered 15% one-year gap is $\\$295.86$`,
    2: `The ratio of those two one-year gaps is $295.86 / 11.36 \\approx 26.04$. Part 3.7 already computed that ratio. Against a cutoff of $30$ the extra arithmetic is $30 - 26.04 = 3.96$.

**1.** Twenty-six times is large. It does not clear $30$. Linear scaling by $15/3 = 5$ would have predicted only 5 times, which is also wrong, in the other direction.

**2.** The trap is treating $15/3 = 5$ as the gap ratio, or rounding $26$ up to $30$.

**3.** The opposite verdict would hold if the cutoff were $25$. The claim named $30$.

The recovered ratio is about $26$, which is not more than $30$`,
    3: `Eight years at 3% carry the exponent $0.24$. Part 3.8 recovered a continuous balance of $\\$31,781.23$. Part 3.9 recovered an annual balance of $\\$31,669.25$. Part 3.10 subtracted and left $\\$111.98$.

**1.** The one-year 3% gap was $\\$11.36$. Eight years raise it to $\\$111.98$, about ten times, not eight times, because both balances grow.

**2.** A solver who used $8 \\times 11.36 = 90.88$ would undershoot the eight-year gap. The extra above $\\$90.88$ is compounding of the gap itself.

**3.** The recovered eight-year 3% gap is $\\$111.98$.

The recovered eight-year gap is $\\$111.98$`,
    4: `The same two 3% gaps run $111.98$ at eight years against $11.36$ at one year. Then $111.98 > 11.36$. The lender's continuous advantage grows with time rather than shrinking.

**1.** The trap is thinking the extra from continuous compounding is a one-year curiosity that fades. Both clocks grow, and the faster clock pulls farther ahead.

**2.** Letter D's $\\$111.98$ is the eight-year evidence. Letter A's $\\$11.36$ is the one-year evidence. Longer holding periods make continuous compounding *more* advantageous to the lender, not less.

**3.** The opposite verdict would hold if the gap were a fixed dollar amount. It is not. It grows.

Continuous compounding becomes more advantageous over longer holding periods`,
  },
  "math-11-30": {
    0: `Fund A is continuous compounding at 9.5% on $\\$400,000$. Part 3.1 recovered $S_A \\approx 439,863.54$. This letter is reading that year-end value.

**1.** A solver who used $400,000 \\times 1.095 = 438,000$ would be on an annual clock, about $\\$1,864$ light.

**2.** The cents, $54$, match $400,000 e^{0.095}$. Letters B, D, and E will put Fund B's monthly and daily figures under this ceiling.

**3.** The recovered Fund A value is $\\$439,863.54$.

The recovered continuous year-end value is $\\$439,863.54$`,
    1: `Fund B compounds monthly at $i = 0.095/12$. Part 3.3 recovered $S_B \\approx 439,699.03$. The claim is $\\$439,750.00$, about $\\$51$ too high.

The gap is

$$439,750.00 - 439,699.03 = 50.97$$

**1.** $\\$439,750$ looks like a round figure between monthly and continuous. It is not the monthly product. The monthly product is $\\$439,699.03$.

**2.** A solver who used $400,000 \\times 1.09925$ with a rounded factor might invent $\\$439,700$. The claim's $\\$439,750$ is still too high.

**3.** The opposite verdict would hold if the claim had named $\\$439,699.03$. It named $\\$439,750.00$.

The recovered monthly year-end value is $\\$439,699.03$, not $\\$439,750.00$`,
    2: `The ceiling on the effective annual rate is the continuous conversion, $e^{0.095} - 1 \\approx 9.97\\%$, not the nominal $9.50\\%$. Part 3.4 already stated that.

**1.** The nominal and effective rates coincide only under annual compounding, which is the *floor* of the range, not the ceiling.

**2.** The trap is thinking "maximum frequency still cannot beat the printed quote." Maximum frequency *is* continuous compounding, and it beats the printed quote by about $0.47$ points.

**3.** The opposite verdict would hold for the *minimum* effective rate, which is 9.50% at $n = 1$. The claim named the maximum.

The recovered ceiling is about $9.97\\%$, not $9.50\\%$`,
    3: `Daily compounding still sits below the continuous limit. Part 3.5 recovered $S_{d} \\approx 439,858.10$ against $S_A \\approx 439,863.54$. Then $439,858.10 < 439,863.54$.

**1.** The factor $(1 + r/m)^{m}$ climbs toward $e^{r}$ but never reaches it at a finite $m$. Daily is $m = 365$, still finite.

**2.** The trap is thinking daily is "close enough to count as overtaking." Close is $\\$5.44$ below, which is letter E's narrowed gap. Below is not above.

**3.** The opposite verdict would need a finite $m$ with $(1 + r/m)^{m} > e^{r}$, which does not exist for $r > 0$.

Daily compounding does not exceed Fund A's continuous value`,
    4: `The two gaps against Fund A are $439,863.54 - 439,699.03 = 164.51$ monthly, and $439,863.54 - 439,858.10 = 5.44$ daily. Then $5.44 < 164.51$.

**1.** Switching from monthly to daily pulls Fund B toward the continuous ceiling. The dollar gap narrows from about $\\$165$ to about $\\$5$.

**2.** Narrowing is not overtaking. Letter D already found daily still below. This letter only asks whether the gap shrinks. It does.

**3.** The opposite verdict would hold if daily compounding overshot and the gap grew the other way. Daily stays below, and closer.

The dollar gap narrows from monthly to daily`,
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
console.log("27-30 done");
