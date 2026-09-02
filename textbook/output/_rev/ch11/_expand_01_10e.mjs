import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

const patches = {
  "math-11-9": [
    `**A) The required nominal annual rate, compounded quarterly, is approximately 5.92%.**  (true)

The fund must turn $\\$50,000$ into $\\$80,000$ over eight years with quarterly compounding. That is a growth factor of $1.6$ through $32$ quarters. Part 3.1 already took the thirty-second root and left $r \\approx 5.92\\%$. This letter is reading that recovered nominal rate, not rebuilding $(1.6)^{1/32}$.

**1.** The trap is a simple-interest guess: $60\\%$ gain over eight years as $60/8 = 7.5\\%$ a year. That ignores compounding and also ignores that interest is paid quarterly. The recovered $5.92\\%$ is lower than $7.5\\%$ because compounding does part of the work.

**2.** Another mix-up is reporting the quarterly slice $1.48\\%$ as if it were the annual quote. That slice is letter B. The nominal rate is four times the slice, $5.92\\%$.

**3.** Rounding $0.05918$ to $5.92\\%$ is the claim's approximation. Letters C and D will change the horizon or the frequency and recompute a *new* $r$. This letter is the original eight-year quarterly quote.

The recovered nominal rate is about $5.92\\%$, so the statement is True.`,

    `**B) The corresponding quarterly periodic rate is approximately 1.48%.**  (true)

The quarterly rate is the thirty-second root already isolated in Part 3.1, written as a percentage, and restated in Part 3.2 as $5.92\\%/4 \\approx 1.48\\%$. This letter is reading that slice.

**1.** The trap is taking $5.92/8$ because the horizon is eight years, or $5.92/32$ because there are $32$ quarters. The periodic rate is the nominal quote divided by the number of compounding dates *in a year*, which is $4$, not $8$ or $32$.

**2.** Another mix-up is leaving the slice as $0.014796$ without converting to a percent, or rounding it to $1.50\\%$. The claim's $1.48\\%$ matches $0.014796$.

**3.** This $1.48\\%$ is what each quarter actually credits under the recovered 5.92% quote. Later letters change the term or the frequency and therefore change the required slice. This letter is the original quarterly slice.

The recovered quarterly rate is about $1.48\\%$, so the statement is True.`,

    `**C) If the same growth were required in only 4 years instead of 8, the required nominal rate would be lower than in the original 8-year scenario.**  (false)

The target factor stays at $1.6$, so shortening the term to four years leaves only $16$ quarters. Less time to grow means a higher required rate, not a lower one. Part 3.3 already flagged that direction. The new root is a new conversion:

$$1 + \\frac{r}{4} = (1.6)^{1/16} \\approx 1.029811$$

$$r \\approx 4 \\times 0.029811 = 0.11924 \\approx 11.92\\%$$

Against the original $5.92\\%$ that is

$$11.92\\% > 5.92\\%$$

so the four-year quote is about double, not lower.

**1.** The trap is thinking "half the time, half the rate." Rates come from roots, not from proportions of the calendar. Halving the horizon does not halve $r$. Here it roughly doubles $r$, because the same $1.6$ must be earned twice as fast.

**2.** A related mix-up is comparing *dollar* growth per year, $30,000/4$ against $30,000/8$, and calling the four-year path "more dollars per year, so maybe a different kind of lower rate." More dollars per year is a *higher* rate.

**3.** The opposite verdict would hold if the four-year target were a smaller factor, for example growing only halfway to $\\$65,000$. The stem keeps the same $\\$80,000$ target and only cuts the wait.

The recovered four-year nominal rate is about $11.92\\%$, which is higher than $5.92\\%$, so the statement is False.`,

    `**D) If the compounding were changed from quarterly to monthly, the required nominal rate would need to be higher than in the original quarterly scenario.**  (false)

More frequent compounding does part of the work, so the required nominal quote falls, not rises. Over $96$ months the same factor $1.6$ needs a slightly smaller printed rate. That swap is new arithmetic:

$$r = 12\\left[(1.6)^{1/96} - 1\\right] \\approx 12 \\times 0.004908 = 0.05890 \\approx 5.89\\%$$

Against the original $5.92\\%$ that is

$$5.89\\% < 5.92\\%$$

so monthly compounding needs a slightly lower nominal rate.

**1.** The claim has the comparison backwards. At a *fixed* growth target and a *fixed* horizon, the more frequent clock is stronger, so it can advertise a lower nominal quote and still hit $\\$80,000$.

**2.** The trap is thinking that monthly compounding has smaller slices, so the annual quote would have to be raised to compensate. The slices are smaller because there are more of them. The extra dates are an advantage, not a handicap.

**3.** The gap is only about $0.03$ of a point, which is why a rushed rounding to $5.9\\%$ on both clocks might hide it. Full precision keeps monthly below quarterly. The opposite verdict would need the *effective* target held as a nominal quote, which is a different convention.

The recovered monthly nominal rate is about $5.89\\%$, lower than $5.92\\%$, so the statement is False.`,

    `**E) Growing from \\$50,000 to \\$80,000 represents an increase of more than 65%.**  (false)

The dollar gain against the starting amount is a percentage of $\\$50,000$, not of $\\$80,000$, and it does not depend on the compounding clock. Part 3.5 already computed that growth as $60\\%$.

The gap against the $65\\%$ cutoff is

$$65\\% - 60\\% = 5$$

so the increase is five percentage points short of $65\\%$.

**1.** The trap is $80,000/50,000 = 1.6$ read as $160\\%$ growth. That double-counts the original principal. Growth is the factor minus one, $60\\%$.

**2.** Another mix-up is $80 - 50 = 30$ compared with $65$ as if those were like units. Thirty thousand dollars is $60\\%$ of fifty thousand, not $65\\%$.

**3.** Clearing $65\\%$ would need a target of $50,000 \\times 1.65 = 82,500$, which is not the stem's $\\$80,000$. The recovered growth is exactly $60\\%$.

The recovered increase is $60\\%$, which is not more than $65\\%$, so the statement is False.`,
  ],

  "math-11-10": [
    `**A) Option (a)'s effective annual rate is higher than option (b)'s effective annual rate.**  (false)

A borrower pays the effective rate, not the printed nominal quote. Option (a) compounds once, so its effective rate equals the quote: Part 3.1 recovered $R_a = 10.80\\%$. Option (b) compounds quarterly at $10.40\\%$: Part 3.3 recovered $R_b \\approx 10.81\\%$. Part 3.4 already ranked them $R_b > R_a$.

The comparison is

$$10.80\\% < 10.81\\%$$

so option (a) is not the higher effective rate. It is the slightly cheaper loan.

**1.** The trap is ranking the printed quotes, $10.80\\% > 10.40\\%$, and calling (a) more expensive as an *effective* rate. The printed quotes go one way. The effective rates go the other way, because (b) compounds four times a year.

**2.** Another mix-up is thinking annual compounding on a higher quote must beat quarterly compounding on a lower quote by a wide margin. The margin is only about $0.013$ of a point, and it favors (b), not (a). Letter E measures that margin. This letter is the direction.

**3.** The opposite verdict would hold if (b) compounded annually, or if (a) also compounded quarterly. The stem gives (a) annual and (b) quarterly, and the recovered pair is $10.80\\%$ against $10.81\\%$.

Option (a) does not have the higher effective rate, so the statement is False.`,

    `**B) Option (b)'s effective annual rate is approximately 10.81%.**  (true)

Option (b) converts four quarterly credits of $2.60\\%$ into a yearly yield. Part 3.3 recovered $R_b \\approx 10.81\\%$. This letter is reading that conversion, not rebuilding $(1.026)^{4}$.

The extra against the printed 10.40% is

$$10.81\\% - 10.40\\% = 0.41$$

so quarterly crediting lifts the quote by about $0.41$ of a point, enough to overtake option (a)'s $10.80\\%$.

**1.** The trap is leaving the yield at the printed $10.40\\%$, as if quarterly crediting did not produce interest-on-interest. The overview's $0.108127$ is that extra.

**2.** Rounding $0.108127$ to $10.81\\%$ is the claim's approximation. It is not $10.40\\%$ and not $10.80\\%$. Letter A ranks this $10.81\\%$ against (a). This letter only asks for (b)'s own effective rate.

**3.** A solver who split $10.40/12$ as if the loan were monthly would get a different conversion. The stem pays quarterly, $n = 4$, and Part 3.2 already split $i_b = 0.026$.

The recovered effective rate on option (b) is about $10.81\\%$, so the statement is True.`,

    `**C) Because option (b) quotes a lower nominal rate, it must be the cheaper option for the borrower.**  (false)

A borrower pays the effective rate, not the printed nominal quote. Option (b) does quote a lower nominal rate, $10.40\\%$ against $10.80\\%$, but Part 3.3 recovered $R_b \\approx 10.81\\%$, which sits above Part 3.1's $R_a = 10.80\\%$.

The ranking for the borrower is

$$10.81\\% > 10.80\\%$$

so the lower printed quote is the slightly more expensive loan.

**1.** The wording treats "lower nominal" as a trump card. It would be a trump card if both options used the same compounding clock. They do not. Option (a) compounds once. Option (b) compounds four times. The extra dates on (b) more than eat the $0.40$ point hole in the printed quote.

**2.** A rushed solver who never converted (b) would agree with the claim. The overview converted it. The $0.013$ point edge against the borrower is small, but it is the wrong direction for "must be cheaper."

**3.** The opposite verdict would hold if (b) also compounded annually, in which case $10.40\\% < 10.80\\%$ would settle the comparison. The stem pays (b) quarterly.

The lower nominal quote is not the cheaper effective rate, so the statement is False.`,

    `**D) For the borrower, option (a) is more expensive than option (b).**  (false)

Cost to the borrower is the same effective-rate ranking as letters A and C, read from the borrower's side. Part 3.1 recovered $R_a = 10.80\\%$. Part 3.3 recovered $R_b \\approx 10.81\\%$. Then

$$10.80\\% < 10.81\\%$$

so option (a) is the cheaper of the two, not the more expensive.

**1.** This is the printed-quote trap again, now worded as a cost ranking. $10.80\\%$ looks more expensive than $10.40\\%$ on the page. After converting (b), $10.80\\%$ is the *better* deal for the borrower by about $0.013$ of a point.

**2.** Another mix-up is thinking "more expensive" refers to the dollar interest on some unstated principal. Whatever the principal, the loan with the higher effective rate costs more. That loan is (b).

**3.** Letter C said (b) is not cheaper just because it quotes less. This letter says (a) is not more expensive. They are the same ranking. The recovered pair is $10.80\\%$ against $10.81\\%$, and (a) wins for the borrower.

Option (a) is cheaper, so the statement is False.`,

    `**E) The two options' effective annual rates differ by more than 0.05 percentage points.**  (false)

The gap between the two effective rates is Part 3.5's subtraction. $R_b \\approx 10.8127\\%$ against $R_a = 10.80\\%$ leaves about $0.013$ percentage points.

Against the $0.05$-point cutoff that is

$$0.05 - 0.013 = 0.037$$

so the gap is $0.037$ of a point short of the cutoff. The two loans are close.

**1.** The trap is comparing the *nominal* quotes, $10.80 - 10.40 = 0.40$, which easily clears $0.05$. The claim is about effective rates. After conversion the $0.40$ point nominal gap shrinks to $0.013$ effective.

**2.** Another mix-up is reading $0.108127 - 0.1080 = 0.000127$ and then calling that $0.127$ points. The decimal-place slip would clear $0.05$. The correct unit is $0.013$ percentage points.

**3.** Clearing $0.05$ would need either a larger spread in the printed quotes or a bigger frequency gap. The recovered pair is $10.81\\%$ against $10.80\\%$.

The recovered gap is about $0.013$ points, which is not more than $0.05$, so the statement is False.`,
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
