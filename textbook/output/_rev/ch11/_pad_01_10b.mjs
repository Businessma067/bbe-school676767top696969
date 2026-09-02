import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/so the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer: " + last.slice(-80));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

const extras = {
  "math-11-4": {
    1: `In the story of the stem, the cardholder wants the true annual cost of a 1.75% monthly charge, not the twelvefold multiple from letter A. The recovered object is $R \\approx 23.14\\%$. The claim's $21.75\\%$ is a nearby number that sits between the nominal $21.00\\%$ and the true effective rate.

A rushed solver who added $1.75\\%$ twelve times without compounding would stop at $21.00\\%$. Someone who averaged $21\\%$ with $22.5\\%$ might invent $21.75\\%$. Neither of those is $(1.0175)^{12} - 1$.

What would have to change for the opposite verdict is a monthly charge near $1.66\\%$, whose twelve-month yield is about $21.75\\%$. The stem charges $1.75\\%$ a month. The recovered yearly cost is $23.14\\%$.

The $1.39$ point miss is large enough that rounding cannot save the claim. Rounding $23.14\\%$ to $23\\%$ still does not look like $21.75\\%$.`,
    2: `In the story of the stem, an unpaid $\\$2,000$ rides on the card for a year at $1.75\\%$ a month. The recovered object is $FV \\approx 2,462.86$. The claim's $\\$2,420$ is the nominal $21\\%$ applied once.

A rushed solver who used $2,000 \\times 1.175$ would get $\\$2,350$, mixing a $17.5\\%$ annual guess with the monthly $1.75\\%$. Someone who used $2,000 \\times (1.0175)^{12}$ correctly would land on the recovered $\\$2,462.86$ and then see that $\\$2,420$ is the wrong companion.

What would have to change for the opposite verdict is annual compounding at $21\\%$, which is not how the card works. The stem charges every month. Monthly charges produce $\\$2,462.86$.

The extra $\\$42.86$ is the cost of ignoring intra-year compounding on this balance. For a cardholder, that extra is part of the true annual cost, not a rounding.`,
    3: `In the story of the stem, the cardholder is asking how much worse the true yearly cost is than the printed twelvefold multiple. The recovered objects are $R \\approx 23.14\\%$ and $r_{\\mathrm{nom}} = 21.00\\%$. The extra arithmetic is the $0.14$ point clearance over a $2.00$-point cutoff.

A rushed solver who used the false $22\\%$ nominal from letter A would compute $23.14 - 22 = 1.14$ and miss the cutoff. That is why letter A had to be settled first. The nominal quote is $21\\%$, not $22\\%$.

What would have to change for the opposite verdict is a smaller monthly charge, so that interest-on-interest added less than two points. At $1.75\\%$ a month, twelve credits add $2.14$ points.

The meaning of the comparison is that this card is expensive enough for compounding to matter in whole percentage points, not in tenths.`,
    4: `In the story of the stem, the hypothetical replaces the monthly charge with $1.50\\%$ and asks whether the true yearly cost would still top $20\\%$. That is a new conversion. Part 3.5 already built it and left $R \\approx 19.56\\%$. The extra arithmetic is the $0.44$ point miss versus $20\\%$.

A rushed solver who annualized $1.50 \\times 12 = 18\\%$ would miss $20\\%$ from farther below and would also be answering a nominal-rate question. The claim is about the effective rate. The recovered effective rate at $1.50\\%$ a month is $19.56\\%$.

Another mix-up is keeping $23.14\\%$ from the original card and asking whether that exceeds $20\\%$. It does, but the monthly charge was swapped. This letter is the $1.50\\%$ card.

What would have to change for the opposite verdict is a cutoff of $19\\%$, or a monthly charge a little above $1.53\\%$. The stem's hypothetical is $1.50\\%$, and $19.56\\%$ does not exceed $20\\%$.

The $0.44$ point miss is not a rounding of $20\\%$. Rounding $19.56\\%$ to $19.6\\%$ still misses.`,
  },
  "math-11-5": {
    1: `In the story of the stem, the clinic wants the true one-year yield on a 5.6% quarterly account, not the printed quote. The recovered object is $R \\approx 5.72\\%$. Citing that figure is citing Part 3.2.

A rushed solver who left the yield at $5.6\\%$ would be describing annual compounding. Someone who used $e^{0.056} - 1 \\approx 5.76\\%$ would be describing continuous compounding, which is not the stem's clock.

What would have to change for the opposite verdict is a recovered $R$ that is not about $5.72\\%$. Monthly compounding at the same 5.6% sits near $5.75\\%$, which is letter D. This letter is the quarterly conversion, and it is $5.72\\%$.

The $0.12$ point lift is modest because $5.6\\%$ is a modest quote. It is still a real lift, and the claim's $5.72\\%$ names it.`,
    2: `In the story of the stem, the clinic deposits $\\$15,000$ for one year. The recovered object is $FV \\approx 15,857.81$. That is principal times the quarterly growth factor already in Part 3.2.

A rushed solver who used $15,000 \\times 1.056 = 15,840$ would miss the extra $\\$17.81$. Someone who used $15,000 \\times 1.0572$ with a rounded $5.72\\%$ would land within a dollar of the recovered cents.

What would have to change for the opposite verdict is a different deposit or a different quote. Under $\\$15,000$ at 5.6% quarterly for one year, the balance is $\\$15,857.81$.

The cents on the claim match the overview. This is not an approximate table value that could equally well have been $15,850$. The product is $15,000 \\times 1.057187$.`,
    3: `In the story of the stem, the clinic is asked what would happen if the same 5.6% were credited twelve times a year instead of four. That is a swapped frequency, so it is new arithmetic relative to the quarterly conversion, but Part 3.4 already performed it. The recovered monthly effective rate is about $5.746\\%$.

A rushed solver who thought "smaller monthly slices mean a smaller yearly yield" would agree with the claim. The slices are smaller. There are three times as many of them. The net effect at a fixed nominal rate is a slightly higher effective rate.

What would have to change for the opposite verdict is a lower nominal rate on the monthly account, or holding the *effective* rate fixed while raising frequency. The stem holds the nominal 5.6% fixed.

The ranking $5.746\\% > 5.72\\%$ is small in dollars on $\\$15,000$, a few dollars, but the direction is the whole point of the letter. Monthly is not weaker.`,
    4: `In the story of the stem, the clinic is asking how far the true yearly yield sits above the printed 5.6%. The recovered object is the $0.12$ point gap from Part 3.5. The extra arithmetic is the miss versus a $0.20$-point cutoff.

A rushed solver who used $5.72 - 5.00 = 0.72$ would clear the cutoff and would also be subtracting from the wrong baseline. The nominal rate is $5.60\\%$, not $5.00\\%$.

What would have to change for the opposite verdict is a higher quote or a more frequent clock that lifted $R$ by more than $0.20$ points. Even monthly compounding at 5.6% only lifts by about $0.15$. The quarterly lift is $0.12$.

The $0.08$ point miss is not a rounding of $0.20$. Rounding $0.12$ to $0.1$ still misses $0.20$.`,
  },
  "math-11-6": {
    1: `In the story of the stem, the investor wants the wait until a deposit doubles at 7.2% monthly. The recovered object is $t \\approx 115.85$ months. The claim's $108$ months is a nine-year Rule-of-$72$ companion, not the logarithm.

A rushed solver who used $72 / 7.2 = 10$ years, or $120$ months, would overshoot in the other direction. Someone who used $72 / 8 = 9$ years because $7.2$ is "close to $8$" would land on $108$ months and think the claim was right.

What would have to change for the opposite verdict is a higher monthly rate, so that doubling arrived near nine years. At $0.60\\%$ a month, the recovered wait is $9.65$ years, not $9.00$.

Eight months of miss is not a rounding of $115.85$. Rounding to the nearest year is $10$ years, still not $108$ months.`,
    2: `In the story of the stem, $58$ months is being offered as a doubling time. The recovered doubling time is $115.85$ months. Fifty-eight months is the halfway calendar, where the growth factor is $\\sqrt{2}$, not $2$.

A rushed solver who halved $116$ because "half the money takes half the time" would invent this claim. Half the money from a doubling would be the original principal, which is already there at time zero, not at $58$ months.

What would have to change for the opposite verdict is a target of $1.414$ times the deposit, which is reached near $58$ months. The stem's target is a doubling.

The meaning of the comparison is that exponential growth is slow at first and faster later. The first $58$ months do not produce half of a doubling in dollar gain either: a $41.5\\%$ gain is less than a $50\\%$ gain.`,
    3: `In the story of the stem, the investor is asking whether doubling the printed quote doubles the true yearly yield. That is a new conversion at $14.4\\%$ monthly. Part 3.4 already built it and left $R \\approx 15.38\\%$. Twice the original $7.44\\%$ is $14.88\\%$. Those are not equal.

A rushed solver who treated $R \\approx r$ would think doubling $r$ doubles $R$, and at $7.2\\%$ the two are close enough that the error is only $0.24$ points. At $14.4\\%$ the error is $0.50$ points on the doubled $R$, and $15.38\\%$ is not $14.88\\%$.

What would have to change for the opposite verdict is annual compounding, where $R = r$ exactly, so doubling $r$ would double $R$. The stem compounds monthly.

The convexity is the whole point: each extra point of nominal rate buys more than a point of effective rate once intra-year compounding is running.`,
  },
  "math-11-7": {
    0: `In the story of the stem, the student is publishing three effective rates at a shared 15% nominal. This letter is the twice-a-year clock. The recovered object is $R = 15.56\\%$.

A rushed solver who used $15.00\\%$ would be on the annual clock. Someone who used $(1.15)^{2} - 1 = 32.25\\%$ would have compounded the annual quote twice without splitting it.

What would have to change for the opposite verdict is a different recovered $R$ for $n = 2$. At 15% semi-annual, the yield is $15.5625\\%$, which rounds to $15.56\\%$.`,
    1: `In the story of the stem, this is the four-credit clock at the same 15%. The recovered object is $R \\approx 15.87\\%$. Citing it is citing Part 3.2.

A rushed solver who reused $15.56\\%$ would be stuck on the semi-annual clock. Someone who used $4 \\times 3.75\\% = 15\\%$ would be adding periodic rates instead of compounding them.

What would have to change for the opposite verdict is a recovered quarterly yield that is not about $15.87\\%$. The overview's $(1.0375)^{4} - 1$ is that yield.`,
    2: `In the story of the stem, this is the twelve-credit clock at the same 15%. The recovered object is $R \\approx 16.08\\%$. Citing it is citing Part 3.3.

A rushed solver who stopped at $15.87\\%$ would be one clock behind. Someone who used $e^{0.15} - 1 \\approx 16.18\\%$ would be one clock ahead, on the continuous ceiling.

What would have to change for the opposite verdict is a recovered monthly yield that is not about $16.08\\%$. At $i = 0.0125$ through twelve months, it is $16.08\\%$.`,
    3: `In the story of the stem, the student is asked whether the three published yields rise as the clock speeds up. The recovered objects are $15.56\\%$, $15.87\\%$, and $16.08\\%$. The extra arithmetic is only the chain of inequalities already in Part 3.4.

A rushed solver who compared periodic rates $7.5 > 3.75 > 1.25$ would think the effective rates must fall. Periodic rates fall as $n$ rises. Effective rates rise.

What would have to change for the opposite verdict is a drop in $R$ as $n$ rises, which cannot happen at a fixed positive nominal rate. The stem holds 15% fixed.

The meaning of the ranking is the textbook fact that, at a shared quote, more frequent compounding is strictly stronger. The three numbers on the page confirm it.`,
    4: `In the story of the stem, the student is asked which step up in frequency adds more to the yield. The recovered gaps are $0.31$ and $0.21$. The extra arithmetic is $0.31 > 0.21$.

A rushed solver who counted the jump in $n$ ($\\times 2$ then $\\times 3$) would expect the second gap to be larger. The effective-rate curve is concave in $n$, so later jumps add less.

What would have to change for the opposite verdict is a pair of gaps with the second larger than the first. At 15%, moving from $n = 2$ to $n = 4$ still captures a lot of intra-year compounding. Moving from $n = 4$ to $n = 12$ is already near the continuous ceiling at about $16.18\\%$, so it adds only $0.21$.

The claim has those two gaps backwards.`,
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
console.log("padded 4-7");
