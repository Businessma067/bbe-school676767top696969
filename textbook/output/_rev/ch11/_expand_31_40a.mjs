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
  "math-11-31": {
    0: `The observed pair inverts as a continuous rate. Part 3.1 recovered $r \\approx 6.67\\%$. This letter is reading that implied rate, not rebuilding $\\ln(34,200/28,000)/3$.

**1.** A solver who used $(34,200/28,000 - 1)/3 \\approx 7.38\\%$ would be using simple interest. The recovered continuous rate is $6.67\\%$.

**2.** Another mix-up is $\\ln(34,200/28,000) \\approx 0.20$ reported as $20\\%$. That $0.20$ is the three-year exponent, which Part 3.1 already divided by $3$.

**3.** Rounding $0.066674$ to $6.67\\%$ is the claim's approximation. Letters B through E will use this $6.67\\%$.

The recovered implied rate is about $6.67\\%$`,
    1: `Five years at the implied $6.67\\%$ is $28,000 e^{0.33337}$. Part 3.2 recovered $S(5) \\approx 39,078.52$. This letter is reading that projection.

**1.** A solver who used $34,200 \\times e^{0.06667 \\times 2} \\approx 39,078$ would be rolling the observed three-year value forward two more years, which is the same path and the same $\\$39,078.52$.

**2.** Letter C's straight-line companion is $\\$38,333$. The exponential projection sits about $\\$745$ above that line.

**3.** The recovered five-year projection is $\\$39,078.52$.

The recovered five-year value is $\\$39,078.52$`,
    2: `The average dollar increase over the first three years is $(34,200 - 28,000)/3 = 2,066.67$. Carrying that average forward two more years gives $34,200 + 2 \\times 2,066.67 = 38,333.33$. Part 3.2 recovered the exponential $S(5) \\approx 39,078.52$. Those are not equal.

**1.** Straight-line growth ignores compounding on a larger base. Years 4 and 5 add more dollars than years 1 through 3 did on average, because the fund is already larger.

**2.** The trap is treating the observed $\\$2,067$ per year as a perpetual dollar machine. Continuous compounding is a constant *rate*, not a constant dollar add.

**3.** The opposite verdict would hold under simple interest. The stem grew continuously.

The linear projection $\\$38,333$ is not the exponential $\\$39,079$`,
    3: `Doubling time at the implied rate is $(\\ln 2)/0.066674$. Part 3.5 recovered about $10.40$ years. The claim is $12.40$ years, two years too long.

The gap is

$$12.40 - 10.40 = 2.00$$

**1.** The Rule of $72$ at $6.67\\%$ gives $72/6.67 \\approx 10.8$ years, closer to $10.40$ than to $12.40$. Getting $12.40$ looks like $72/5.8$ or $10.40 + 2$.

**2.** At $10.40$ years the fund would be $\\$56,000$. At $12.40$ years it would be about $\\$64,000$, past a doubling.

**3.** The opposite verdict would hold if the claim had named $10.40$ years.

The recovered doubling time is about $10.40$ years, not $12.40$`,
    4: `A slower assumed rate cannot overshoot the observed balance. At $6\\%$, Part 3.6 recovered $S(3) \\approx 33,522.09$, which sits below $\\$34,200$.

**1.** The implied rate is $6.67\\%$. Testing $6.00\\%$ is testing a slower path. A slower path undershoots, not overshoots.

**2.** The trap is thinking "round down the rate, round up the balance" as if those moved together. Lower rate, lower three-year value.

**3.** The opposite verdict would hold at a test rate above $6.67\\%$. The claim named $6.00\\%$.

The recovered 6% three-year value is $\\$33,522$, which does not exceed $\\$34,200$`,
  },
  "math-11-32": {
    0: `Bank X compounds continuously at 6.8% for two years. Part 3.1 recovered $S_X \\approx 68,740.91$. This letter is reading that value.

**1.** A solver who used $60,000 \\times 1.068^{2} \\approx 68,438$ would be on an annual 6.8% clock, about $\\$303$ light.

**2.** The cents, $91$, match $60,000 e^{0.136}$. Letters B and C will put Y and Z above this figure.

**3.** The recovered Bank X value is $\\$68,740.91$.

The recovered Bank X two-year value is $\\$68,740.91$`,
    1: `Bank Y compounds monthly at 6.9% over 24 periods. Part 3.2 recovered $S_Y \\approx 68,851.32$. This letter is reading that value.

**1.** Y quotes $0.10$ points more than X and compounds monthly rather than continuously. The extra quote outweighs X's continuous clock, so Y finishes about $\\$110$ above X.

**2.** A solver who used $60,000 e^{0.069 \\times 2}$ would be giving Y a continuous clock it does not have, and would overshoot the recovered $S_Y$.

**3.** The recovered Bank Y value is $\\$68,851.32$.

The recovered Bank Y two-year value is $\\$68,851.32$`,
    2: `Bank Z compounds quarterly at 7.0% over eight periods. Part 3.3 recovered $S_Z \\approx 68,932.91$. This letter is reading that value.

**1.** Z quotes the highest rate, 7.0%, and still beats Y by about $\\$82$ despite compounding only quarterly. The extra $0.10$ points over Y outweigh Y's extra monthly dates.

**2.** Letter D will rank $S_X < S_Y < S_Z$. This letter only names Z's $\\$68,932.91$.

**3.** The recovered Bank Z value is $\\$68,932.91$.

The recovered Bank Z two-year value is $\\$68,932.91$`,
    3: `The three recovered balances are $S_X \\approx 68,740.91$, $S_Y \\approx 68,851.32$, and $S_Z \\approx 68,932.91$. Part 3.4 already ordered $68,740.91 < 68,851.32 < 68,932.91$.

Continuous compounding is the strongest clock at a *fixed* quote. It cannot rescue X's $0.2$ point shortfall against Z's $7.0\\%$. Bank X is the lowest of the three.

**1.** The trap is ranking by compounding frequency: X continuous, Y monthly, Z quarterly, so X "must" win. Frequency is not a trump when the quotes differ by $0.10$ to $0.20$ points.

**2.** The opposite verdict would hold if all three quoted 7.0%. Then X's continuous clock would win, which is letter E.

**3.** On this stem, the lowest quote plus the strongest clock still finishes last.

Bank X is the lowest of the three offers`,
    4: `Matching the nominal rate at 7.0% continuous flips the ranking. Part 3.5 recovered $S_X' \\approx 69,016.44$ against $S_Z \\approx 68,932.91$. Then $69,016.44 > 68,932.91$.

**1.** Continuous compounding beats any finite frequency once the quoted rates are equal. That is the textbook ceiling. Letter D failed because the quotes were *not* equal. This letter equalizes them.

**2.** The extra is about $\\$83$ on $\\$60,000$ over two years, the dollar meaning of continuous versus quarterly at a shared 7.0%.

**3.** The opposite verdict would hold if X stayed at 6.8%. Raising X to 7.0% is what flips the comparison.

At a matched 7.0%, Bank X exceeds Bank Z`,
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
console.log("31-32 done");
