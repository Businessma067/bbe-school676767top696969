import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

const patches = {
  "math-11-7": [
    `**A) The effective rate under semi-annual compounding is approximately 15.56%.**  (true)

The student is converting a fixed 15% nominal rate under three clocks. Semi-annual compounding is two credits a year. Part 3.1 recovered that conversion as $R = 15.56\\%$. This letter is reading that yield, not rebuilding $(1.075)^{2}$.

The extra against the printed 15% is

$$15.56\\% - 15.00\\% = 0.56$$

so two intra-year credits lift the quote by $0.56$ of a point.

**1.** A solver who left the yield at $15\\%$ would be describing annual compounding, $n = 1$, which is not this letter. Semi-annual means $n = 2$, and Part 3.1 already split $15\\%$ as $i = 0.075$.

**2.** Rounding $0.155625$ to $15.56\\%$ is exact to two hundredths. It is not $15.50\\%$ and not $15.75\\%$. Letters B and C take the quarterly and monthly clocks. This letter is only the two-credit clock.

**3.** The $15.56\\%$ figure is an input to the ranking in letter D and the gap comparison in letter E. Getting it right is what lets those later comparisons sit where they do.

The recovered semi-annual effective rate is $15.56\\%$, so the statement is True.`,

    `**B) The effective rate under quarterly compounding is approximately 15.87%.**  (true)

Quarterly compounding splits the same 15% across four dates. Part 3.2 recovered that conversion as $R \\approx 15.87\\%$. This letter is reading that yield, not rebuilding $(1.0375)^{4}$.

The extra against the printed 15% is

$$15.87\\% - 15.00\\% = 0.87$$

so four credits lift the quote by about $0.87$ of a point, more than the $0.56$ point lift under two credits.

**1.** The trap is reporting $15.56\\%$ again, the semi-annual figure, as if all intra-year clocks agreed. They do not. More dates at a fixed nominal rate raise the effective yield.

**2.** Another mix-up is $15/4 = 3.75$ reported as the *effective* rate. That $3.75\\%$ is the quarterly periodic rate Part 3.2 already used as an input. The effective rate compounds it four times.

**3.** Rounding $0.158650$ to $15.87\\%$ is the claim's approximation. Letter D will put $15.87\\%$ between $15.56\\%$ and $16.08\\%$. This letter only asks for the quarterly conversion itself.

The recovered quarterly effective rate is about $15.87\\%$, so the statement is True.`,

    `**C) The effective rate under monthly compounding is approximately 16.08%.**  (true)

Monthly compounding splits the same 15% across twelve dates. Part 3.3 recovered that conversion as $R \\approx 16.08\\%$. This letter is reading that yield, not rebuilding $(1.0125)^{12}$.

The extra against the printed 15% is

$$16.08\\% - 15.00\\% = 1.08$$

so twelve credits lift the quote by about $1.08$ points, the largest of the three lifts.

**1.** A solver who stopped at the quarterly $15.87\\%$ would understate the monthly yield by about $0.21$ of a point. Monthly is more frequent than quarterly, so at a fixed 15% it must finish higher.

**2.** Another trap is $e^{0.15} - 1 \\approx 16.18\\%$, the continuous ceiling. Continuous compounding is not on the stem. The stem's most frequent clock is monthly, and Part 3.3 left about $16.08\\%$, a tenth of a point below that ceiling.

**3.** Rounding $0.160766$ to $16.08\\%$ is the claim's approximation. It is not $16.00\\%$ and not $15.00\\%$.

The recovered monthly effective rate is about $16.08\\%$, so the statement is True.`,

    `**D) Increasing the compounding frequency from semi-annual to quarterly to monthly steadily raises the effective rate.**  (true)

With the 15% nominal rate held fixed, extra compounding dates raise the yearly yield. Part 3.1 recovered $15.56\\%$. Part 3.2 recovered $15.87\\%$. Part 3.3 recovered $16.08\\%$. Part 3.4 already ordered them:

$$15.56\\% < 15.87\\% < 16.08\\%$$

Each step up in frequency is a step up in effective rate. The rises get smaller, which is letter E, but they stay positive, which is this letter.

**1.** The trap is thinking that smaller periodic slices must eventually pull the yield down. The slices get smaller, but there are more of them, and at a fixed nominal rate the net effect is always an increase.

**2.** Another mix-up is comparing the three *periodic* rates $7.5\\%$, $3.75\\%$, $1.25\\%$ and calling that a decrease. Those are inputs, not yearly yields. The yearly yields rise.

**3.** The opposite verdict would need a drop somewhere in the chain, which would take a lower nominal rate on the more frequent clock. The stem holds 15% fixed.

The recovered triple rises with frequency, so the statement is True.`,

    `**E) The increase in effective rate from semi-annual to quarterly is smaller than the increase from quarterly to monthly.**  (false)

The two successive jumps sit in Part 3.5 and Part 3.6. Semi-annual to quarterly is $0.31$ of a point. Quarterly to monthly is $0.21$ of a point.

The comparison is

$$0.31 > 0.21$$

so the first step is the larger one, not the smaller. The claim has the ranking of the gaps backwards.

**1.** This is the usual diminishing-returns pattern: each further increase in compounding frequency adds progressively less to the effective rate. The jump from $n = 2$ to $n = 4$ still has a lot of intra-year compounding left to capture. The jump from $n = 4$ to $n = 12$ is already closer to the continuous ceiling, so it adds less.

**2.** The trap is counting the change in $n$ instead of the change in $R$. From 2 to 4 is a doubling of frequency, from 4 to 12 is a tripling, so a rushed solver might think the second jump must be larger. The effective-rate function is concave in $n$. Tripling $n$ later adds less than doubling $n$ earlier.

**3.** The opposite verdict would hold if the gaps ran $0.31 < 0.21$. They do not. The recovered pair is $0.31$ against $0.21$.

The first gap is larger than the second, so the statement is False.`,
  ],

  "math-11-8": [
    `**A) The monthly periodic rate is 0.50%.**  (true)

The trust's 6% quote is a nominal annual rate with interest paid monthly. That is a split across twelve interest dates, not a ten-year compounding calculation yet. Part 3.1 recovered $i = 0.50\\%$. This letter is reading that split.

**1.** The trap is treating $6\\%$ itself as the monthly credit, or dividing by $10$ because the horizon is ten years. Time to maturity is the exponent later. It is not the denominator of the periodic rate.

**2.** Another wrong split is $6/4 = 1.5$, as if the account were quarterly. The stem says monthly, so $n = 12$.

**3.** The monthly rate is the base of the 120-month growth factor in Part 3.2. Getting $0.50\\%$ right is what lets $S(10) \\approx 7,277.60$ come out as it does.

The recovered monthly rate is $0.50\\%$, so the statement is True.`,

    `**B) The number of monthly compounding periods over 10 years, nt, is 120.**  (true)

The exponent counts monthly credits over the ten-year horizon. Twelve dates a year times ten years is $120$. Part 3.1 recovered $nt = 120$. This letter is reading that count.

**1.** The trap is using $t = 10$ as the exponent, as if interest were paid once a year. That would leave the trust short of the recovered $\\$7,277.60$.

**2.** Another wrong count is $10 \\times 4 = 40$, treating the account as quarterly. The stem pays monthly.

**3.** The 120-period exponent is what Part 3.2 raises $1.005$ to. If the count were 10 or 40, the recovered balance would not appear.

The recovered number of months is $120$, so the statement is True.`,

    `**C) The balance after 10 years is approximately \\$7,277.60.**  (true)

The ten-year balance is the $\\$4,000$ deposit times the 120-month growth factor. Part 3.2 already applied $(1.005)^{120} \\approx 1.8194$ and left $S(10) \\approx 7,277.60$. This letter is reading that product, not rebuilding the 120-month factor.

**1.** A solver who multiplied $\\$4,000$ by $1.06^{10}$ instead would be using annual compounding at the same 6% quote. That weaker clock is letter E, and it finishes near $\\$7,163$, not $\\$7,278$.

**2.** Another mix-up is $4,000 \\times 1.06 \\times 10$, a simple-interest product that ignores compounding and gives $\\$6,400$, well below the recovered balance. The extra above $\\$6,400$ is compound interest on a ten-year monthly schedule.

**3.** The claim's cents, $60$, match the overview's rounding of $4,000 \\times 1.8194$. Letter D asks whether that factor is a doubling. This letter only asks for the dollar balance.

The recovered ten-year balance is about $\\$7,277.60$, so the statement is True.`,

    `**D) The deposit exactly doubles in value over these 10 years.**  (false)

Doubling would mean a growth factor of $2$ and a balance of $\\$8,000$. Part 3.2 recovered a factor of $1.8194$ and a balance of about $\\$7,277.60$. Part 3.3 already compared

$$1.8194 < 2.0$$

so the trust has an $82\\%$ gain, not a $100\\%$ gain. The shortfall against $\\$8,000$ is

$$8,000 - 7,277.60 = 722.40$$

about $\\$722$ short of a doubling.

**1.** The Rule of $72$ at $6\\%$ gives $72/6 = 12$ years to double, so ten years should not be enough. The overview's $11.6$-year remark is that same observation. Ten years is short of the doubling calendar.

**2.** The trap is reading $1.82$ as "about $2$" and calling it a doubling. An $82\\%$ gain is a large gain. It is not a doubling. Doubling is exact in the definition of this claim: "exactly doubles."

**3.** The opposite verdict would need either a higher quote or a longer wait. At $0.50\\%$ a month, $(1.005)^{t} = 2$ takes about $139$ months, roughly $11.6$ years, which is what Part 3.3 pointed to.

The recovered factor is $1.8194$, not $2$, so the statement is False.`,

    `**E) If compounded annually instead, the 10-year future value would exceed the future value obtained under monthly compounding.**  (false)

With the 6% nominal rate held fixed, fewer compounding dates lower the accumulation. Part 3.2 recovered the monthly balance as $S(10) \\approx 7,277.60$. Part 3.4 already ran annual compounding, $n = 1$, and left about $\\$7,163.39$.

The ranking is

$$7,163.39 < 7,277.60$$

so annual compounding finishes about $\\$114$ behind, not ahead.

**1.** The claim has the comparison backwards. At a fixed nominal rate, more frequent compounding is the stronger schedule. Monthly means 120 credits against 10 annual credits. The extra intra-year compounding is why $\\$7,277.60$ sits above $\\$7,163.39$.

**2.** The trap is thinking that a $6\\%$ annual credit is "larger per date" than a $0.50\\%$ monthly credit, so annual must win. The annual credit is larger per date, but there are far fewer dates, and no intra-year compounding.

**3.** The opposite verdict would need the *effective* rate held fixed while frequency fell, or a higher nominal rate on the annual account. The stem holds 6% fixed and only swaps the clock.

Annual compounding is weaker here, so the statement is False.`,
  ],
};

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

for (const t of arr) {
  if (patches[t.id]) {
    if (patches[t.id].length !== 5) throw new Error("bad length " + t.id);
    t.tactical_explanations = patches[t.id];
  }
}

fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  if (!patches[t.id]) continue;
  console.log(t.id, t.tactical_explanations.map(wc).join(", "));
}
