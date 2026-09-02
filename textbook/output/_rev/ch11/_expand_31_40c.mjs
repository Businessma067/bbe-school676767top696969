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
  "math-11-35": {
    0: `Annual compounding at 7% is a single credit: $40,000 \\times 1.07 = 42,800.00$. Part 3.1 recovered that exact value.

**1.** The trap is $40,000 e^{0.07} \\approx 42,900$, the continuous figure from letter E, used one clock too soon.

**2.** $42,800.00$ is exact. Letters B through E will put quarterly, monthly, and continuous above this floor.

**3.** The recovered annual value is $\\$42,800.00$.

The recovered annual-compounding value is $\\$42,800.00$`,
    1: `Quarterly compounding uses $i = 0.0175$: Part 3.2 recovered $S_4 \\approx 42,874.36$. Monthly compounding uses $i = 0.07/12$: Part 3.3 recovered $S_{12} \\approx 42,891.60$. This letter is reading both.

**1.** Both sit above the annual $\\$42,800$ and below the continuous $\\$42,900.33$, which is the ladder letter C will name.

**2.** A solver who swapped the two figures would still have them in the right order by accident if they kept quarterly below monthly. The recovered pair is $42,874.36$ then $42,891.60$.

**3.** The recovered quarterly and monthly values match the claim.

The recovered quarterly value is $\\$42,874.36$ and the monthly value is $\\$42,891.60$`,
    2: `The four schedules, with $r$ held at 7%, are $S_1 = 42,800.00$, $S_4 \\approx 42,874.36$, $S_{12} \\approx 42,891.60$, and $S_c \\approx 42,900.33$. Part 3 already produced that increasing sequence.

**1.** With the nominal rate held fixed, more frequent crediting raises the accumulation. Annual < quarterly < monthly < continuous is the textbook ranking.

**2.** The trap is thinking monthly could overtake continuous. Continuous is the limit, so it stays on top.

**3.** The recovered order is annual < quarterly < monthly < continuous.

The four values rise with frequency up to the continuous ceiling`,
    3: `The last two dollar gaps are $42,891.60 - 42,874.36 = 17.24$ and $42,900.33 - 42,891.60 = 8.73$. Then $17.24 > 8.73$.

The claim said the monthly-to-quarterly gap is *smaller* than the continuous-to-monthly gap. It is larger.

**1.** Diminishing returns: the step from $n = 4$ to $n = 12$ still captures more leftover intra-year compounding than the step from $n = 12$ to $n = \\infty$.

**2.** The trap is thinking the last step to the ceiling must be the big one. At 7% the ceiling is only $\\$8.73$ above monthly.

**3.** The opposite verdict would hold if $17.24 < 8.73$. They run the other way.

The monthly-to-quarterly gap is the larger one`,
    4: `Continuous compounding is the limit of $(1 + r/m)^{m}$ as $m \\to \\infty$. Every finite $m$ stays strictly below $e^{r}$, so $S_c \\approx 42,900.33$ is a ceiling at this 7% quote.

**1.** Daily or hourly compounding would sit between monthly $\\$42,891.60$ and continuous $\\$42,900.33$, never above.

**2.** Letter D's $\\$8.73$ remaining gap is the most any finite schedule can still capture. It cannot be captured past the ceiling.

**3.** The opposite verdict would need some finite $m$ with $(1.07/m)^{m} > e^{0.07}$, which does not exist.

No finite schedule exceeds the continuous $\\$42,900.33$`,
  },
  "math-11-36": {
    0: `Option 1 discounts $\\$100,000$ continuously at 4.5% for eight years: $100,000 e^{-0.36}$. Part 3.1 recovered $S_0 \\approx 69,767.63$. This letter is reading that deposit.

**1.** A solver who used $100,000 / 1.045^{8} \\approx 70,188$ would be on an annual clock, about $\\$420$ too high.

**2.** The cents, $63$, match $100,000 e^{-0.36}$. Letter B will put Option 2 below this figure.

**3.** The recovered Option 1 deposit is $\\$69,767.63$.

The recovered Option 1 deposit is $\\$69,767.63$`,
    1: `Option 2 uses the faster 6% continuous rate over the same eight years: $100,000 e^{-0.48}$. Part 3.2 recovered $S_0 \\approx 61,878.34$. This letter is reading that deposit.

**1.** Faster growth means less money today. Option 2 needs about $\\$7,889$ less than Option 1, which is letter D's gap with the ranking reversed.

**2.** A solver who reused $\\$69,768$ would be ignoring the extra $1.5$ points of rate.

**3.** The recovered Option 2 deposit is $\\$61,878.34$.

The recovered Option 2 deposit is $\\$61,878.34$`,
    2: `The two required deposits are about $\\$69,767.63$ and $\\$61,878.34$. Then $61,878.34 < 69,767.63$. The faster account needs less money up front, not more.

**1.** The trap is thinking a higher rate requires a larger deposit, as if the parent were buying a more expensive product. The parent is discounting a fixed $\\$100,000$. Higher rate, smaller present value.

**2.** Letter D will mis-assign the gap to Option 2 as the larger amount. This letter is the ranking: Option 2 is smaller.

**3.** The opposite verdict would hold if Option 2 quoted *less* than 4.5%. It quotes 6.0%.

Option 2 requires the smaller upfront deposit`,
    3: `The gap between the two deposits is $69,767.63 - 61,878.34 = 7,889.29$. Part 3.3 already subtracted. Option 1 is the larger deposit, and the gap is about $\\$7,889$, not $\\$9,000$.

**1.** The claim overstates the gap and assigns it to the wrong option. Both errors fail the statement.

**2.** A solver who used $9,000$ as a round $69,768 - 60,768$ would be inventing Option 2's figure. The recovered Option 2 is $\\$61,878$.

**3.** The opposite verdict would need Option 2 larger by about $\\$9,000$. Option 2 is smaller by about $\\$7,889$.

The gap is about $\\$7,889$, with Option 1 larger, not Option 2`,
    4: `Less time to grow means more principal today. Option 1 over four years is $100,000 e^{-0.18} \\approx 83,527.02$. The eight-year requirement was about $\\$69,767.63$. Then $83,527.02 > 69,767.63$.

**1.** Halving the horizon raises the required deposit by about $\\$13,759$. The parent cannot lock up less money by giving the account less time.

**2.** The trap is thinking a shorter wait is "less work" so it needs less cash today. Less work by the account means more work by the parent's wallet.

**3.** The opposite verdict would hold if the four-year target were smaller. The stem keeps $\\$100,000$.

The four-year Option 1 deposit is about $\\$83,527$, larger than the eight-year $\\$69,768$`,
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
console.log("35-36 done");
