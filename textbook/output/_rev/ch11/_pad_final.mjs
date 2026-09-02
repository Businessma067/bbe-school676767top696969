import fs from "node:fs";

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/\bthe statement is (?:True|False)\.\s*$/.test(last)) throw new Error(last.slice(-80));
  return [...parts, extra.trim(), last].join("\n\n");
}
function apply(path, extras) {
  const arr = JSON.parse(fs.readFileSync(path, "utf8"));
  for (const t of arr) {
    const ex = extras[t.id];
    if (!ex) continue;
    t.tactical_explanations = t.tactical_explanations.map((letter, i) =>
      ex[i] ? insertBeforeClose(letter, ex[i]) : letter
    );
  }
  fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
}

apply("textbook/output/_rev/ch11/01_10.json", {
  "math-11-10": {
    3: `The borrower pays the effective rate, not the printed quote. Option (a) converts to a slightly lower $R$ than option (b)'s $10.81\\%$. Calling (a) more expensive ranks the two loans backwards.

A $0.03$ point hole on a $\\$10,000$ unpaid balance is about $\\$3$ of extra annual cost on (b), not on (a). Frequency on (b) closes most of the printed $0.10$ point nominal hole and then some. The recovered ranking is (a) cheaper, (b) dearer.

What would have to change is a shared frequency. If both loans compounded monthly, the higher printed quote would be the more expensive loan. They do not share a frequency. After conversion, (a) is not more expensive.`,
  },
});

apply("textbook/output/_rev/ch11/11_20.json", {
  "math-11-19": {
    2: `CD3's unrounded conversion sits $0.000007$ from CD2's, less than a cent on $\\$20,000$. Ranking $6.45 > 6.40$ on the page is ranking a tie after conversion. Frequency on CD2 closes the $0.05$ point nominal hole.

At published precision both are $6.55\\%$. This letter is that tie. A solver who reported $6.45\\%$ would be naming CD3's printed quote, not the converted yield.`,
  },
  "math-11-20": {
    1: `Same start and same target do not imply the same wait when quotes and clocks differ. $R_Q \\approx 6.29\\%$ against $R_M \\approx 6.17\\%$ is not a tie, so $6.28$ years against $6.40$ years is not the same amount of time.

Close is not equal. Q arrives first, by about a month and a half. Naming the same wait erases that $0.12$ point effective gap.`,
  },
});

apply("textbook/output/_rev/ch11/21_30.json", {
  "math-11-21": {
    1: `Interest of $\\$230.72$ is the gain column on the bakery deposit. Continuous 5% produces that figure. Annual 5% produces $\\$225.00$. The $\\$5.72$ extra is letter D sitting in the interest line.

Booking $\\$250$ would be a rounded-fifty slip above even the continuous gain. The claim named $\\$230.72$, which matches $4,730.72 - 4,500.00$.`,
  },
  "math-11-24": {
    1: `Two half-year 5% credits are an exact square. A solver who added $2 \\times 5\\%$ would report $1.10$ and would be naming the yearly factor. The extra $0.0025$ of factor is the second credit riding on the first, $\\$187.50$ on this $\\$75,000$ contract.

This letter names $1.1025$. Letter E will compare that first gap with the last step to continuous.`,
    2: `The continuous ceiling at 10% is already in Part 3 as $1.1052$. On $\\$75,000$ that is about $\\$82,888$. The extra over yearly is about $\\$388$. The extra over semi-annual is letter D's $\\$200.32$.

Rounding $1.105171$ to four decimals matches the claim. This letter names that ceiling factor. A solver who wrote $1.10$ would be collapsing back to the yearly clock.`,
  },
  "math-11-25": {
    4: `Doubling 4.5% to 9% replaces the year-over-year factor $1.0460$ with $1.09417$, not with $2.092$. Factors live just above $1$. Doubling the rate does not double a number near $1.05$.

The effective yields $4.60\\%$ and $9.42\\%$ are not in the ratio $1:2$ either. Linear scaling of $r$ is a small-$r$ story. At 4.5% versus 9% it already fails.

A $9\\%$ continuous year on $\\$95,000$ is about $\\$103,946$, coincidentally near letter B's two-year 4.5% figure, because $e^{0.09}$ is the same product. That coincidence is not a doubled factor of $1.0460$. The year-over-year factor does not exactly double.

What would have to change is a linear model in which the growth factor itself is $1 + r$ and someone mistakenly doubled $1 + r$ instead of $r$. Even then $2 \\times 1.045 = 2.090$ is not a one-year factor. Under continuous compounding the claim fails for the reason above.`,
  },
  "math-11-26": {
    2: `The remaining share is $40,219.20 / 60,000 = 0.67032$, which is also $e^{-0.40}$. About two-thirds remains. The lost share $32.97\\%$ is a different question.

This letter names $67.03\\%$. Letter A already named the dollars. Reporting $67\\%$ even would still be the same share to the nearest percent. The claim keeps the hundredths.`,
  },
  "math-11-27": {
    1: `One doubling of $\\$18,000$ is $\\$36,000$ at letter A's $12.60$-year date. Stopping at $12$ years even would leave about $\\$34,870$, still short. The rounded date is close enough that the balance is reported as $\\$36,000.00$.

Three doublings are letter D's $\\$144,000$. This letter is the one-doubling book.`,
  },
  "math-11-28": {
    2: `Forty percent of $\\$120,000$ is $\\$48,000$ at the 60% loss date. Rebuilding the exponential lands on the same round dollars. The cents are zeros because $0.40 \\times 120,000$ is exact.

This letter names that remaining value. Letter B already named the date $5.09$ years.`,
  },
  "math-11-29": {
    3: `Eight years at 3% grow the extra from $\\$11.36$ to $\\$111.98$, about ten times, not eight, because the gap itself compounds. Using $8 \\times 11.36 = 90.88$ undershoots by about $\\$21$.

Part 3 recovered $\\$111.98$, matching the claim. This letter names that eight-year extra at the modest 3% quote.`,
  },
  "math-11-30": {
    0: `Fund A's ceiling is $\\$439,863.54$. Monthly B sits about $\\$165$ below. Daily B sits about $\\$5$ below. Annual 9.5% would have left $\\$438,000$.

Continuous compounding is what produces the extra $\\$1,864$ over annual. This letter names the ceiling. The cents, $54$, match $400,000 e^{0.095}$.`,
    1: `Fund B's monthly book is $\\$439,699.03$, not $\\$439,750$. The extra $\\$51$ in the claim is a guessed compromise between monthly and continuous. The monthly model does not land there.

Naming $\\$439,750$ overstates B and understates the gap to A. The recovered monthly path is $\\$439,699.03$.`,
  },
});

apply("textbook/output/_rev/ch11/31_40.json", {
  "math-11-31": {
    2: `Thirty-eight thousand three hundred thirty-three dollars is two more years of the observed $\\$2,067$ average add. Continuous compounding is a constant rate, not a constant dollar add. Years 4 and 5 add more dollars than that average, which is why $S(5) \\approx 39,079$ sits about $\\$745$ above $38,333$.

The two projections are not the same. The stem grew continuously, so the exponential figure is the one that matches the model. Naming them equal is the mix-up.`,
  },
  "math-11-32": {
    0: `X's two-year continuous 6.8% book is $\\$68,740.91$. Y and Z finish higher because they quote more. Annual 6.8% would have left about $\\$68,438$.

This letter names X. The recovered figure matches the claim. Letter D will put X last of the three.`,
    1: `Y's monthly 6.9% book is $\\$68,851.32$, about $\\$110$ above X. The extra $0.10$ points of quote outweigh X's continuous clock.

This letter names Y. Giving Y a continuous clock it does not have would overstate Y.`,
    2: `Z's quarterly 7.0% book is $\\$68,932.91$, the highest of the three, about $\\$82$ above Y. This letter names Z.

The treasurer who takes Z takes the largest two-year value on the page. Letter D will rank $X < Y < Z$.`,
  },
  "math-11-33": {
    0: `Net rate is gross minus fee: $9\\% - 2\\% = 7\\%$. Adding to $11\\%$ describes a cost piled on growth. An 11% leak would inflate $S(6)$ toward $\\$3.88$ million and shrink the doubling time toward $6.3$ years.

Every later letter uses 7%. The recovered net rate is $7\\%$. The claim has the sign wrong.`,
  },
  "math-11-35": {
    1: `The two middle clocks sit at $\\$42,874.36$ quarterly and $\\$42,891.60$ monthly. Both are above the annual $\\$42,800$ and below the continuous $\\$42,900.33$.

This letter names that pair. Letter C will rank all four. Swapping the two figures would still keep quarterly below monthly.`,
    2: `The four recovered values rise with frequency: $42,800.00 < 42,874.36 < 42,891.60 < 42,900.33$. Monthly cannot overtake continuous at a shared 7% quote.

The ranking matches the claim. A solver who ranked by a guessed table would still need this order at a shared nominal rate.`,
  },
  "math-11-36": {
    0: `Option 1 needs $\\$69,767.63$ today at 4.5% continuous for eight years. Annual 4.5% would have needed a little more. This letter names Option 1.

Letter B will put Option 2 about $\\$7,889$ lower. The recovered continuous deposit matches the claim.`,
    1: `Option 2 needs $\\$61,878.34$ today at 6% continuous. Faster growth, smaller present value of a fixed $\\$100,000$ bill. Reusing Option 1's $\\$69,768$ would ignore the extra $1.5$ points.

The recovered Option 2 deposit matches the claim.`,
    2: `Option 2 is the smaller check: $61,878 < 69,768$. A higher rate is not a more expensive product when the parent is discounting a fixed target.

"Larger" has the ranking backwards. Letter D will also mis-assign the gap.`,
  },
  "math-11-37": {
    0: `Year-4 revenue is $\\$2,685,284.46$ after four years of 10% continuous on $\\$1,800,000$. Annual 10% would have left about $\\$2,636,000$. This letter names the expansion-phase endpoint.

Letter B will grow this through the 4% maturity phase. The cents, $46$, match the exponential product.`,
    1: `Year-7 revenue is $\\$3,027,649.77$, which is also $S(4) \\times e^{0.12}$ and $1,800,000 e^{0.52}$. This letter names that endpoint.

Letter C will call $7.43\\%$ the constant equivalent that lands on the same dollars.`,
    2: `The constant equivalent is $0.52/7 \\approx 7.43\\%$, a time-weighted mix, not a 50-50 mix of 10% and 4%. Checking $e^{0.0743 \\times 7} = e^{0.52}$ reproduces $S(7)$.

A 7% even path would undershoot year 7. The extra $0.43$ is letter D's overweighting of the faster phase.`,
  },
  "math-11-38": {
    1: `The implied $\\delta$ is $16.28\\%$, from $\\ln(85,000/32,000)/6$. A linear write-down would have said about $10.4\\%$. Letter A's false formula would have said $-16.28\\%$.

This letter names the positive continuous rate. Letters C through E will compare it with a 15% crane and a $\\$40,000$ target.`,
    2: `The 15% crane retains about $\\$34,558$, not $\\$36,000$. Fourteen hundred dollars of overstatement is a rounded factor near $0.424$ instead of $e^{-0.90} \\approx 0.4066$.

The recovered six-year value is $\\$34,558.42$. Naming $\\$36,000$ overstates what the slower crane keeps.`,
  },
  "math-11-39": {
    0: `Doubling at $6.5\\%$ takes $10.66$ years. Rule of $72$ gives $11.1$ years, a cousin. This letter names the logarithm.

Letters C and E will compare quadrupling and tripling with this $10.66$. A solver who reported $11$ years would be the Rule-of-72 cousin.`,
    1: `Tripling at $6.5\\%$ takes $16.90$ years. Linear $1.5 \\times 10.66 = 15.99$ undershoots by $0.91$ years, letter E's comparison.

This letter names $16.90$. Rounding $16.9017$ to $16.90$ is the approximation the claim uses.`,
    3: `Four times $\\$12,000$ is $\\$48,000$ at the quadrupling date. Rebuilding the exponential lands on the same round dollars. The cents are zeros because the multiple and the principal are round.

This letter names that balance. Letter C already named the date.`,
  },
  "math-11-40": {
    0: `A's five-year 6% continuous book is $\\$202,478.82$. Annual 6% would have left about $\\$200,734$. This letter names A's stake.

Letters D and E will add it to B and C. The cents, $82$, match the exponential product.`,
    1: `B's five-year 9% decay book is $\\$140,278.19$, a drop of about $\\$80,000$ from $\\$220,000$. Letter E will flip the exponent and turn this into about $\\$345,029$ of growth.

This letter names the decay path.`,
    2: `C shares A's factor $e^{0.30}$ on a $\\$100,000$ base, about $\\$134,986$. The claimed $\\$130,000$ is a 30% simple gain, $\\$4,986$ light.

The recovered $C(5)$ is $\\$134,985.88$. Simple 30% ignores compounding on the two-phase path.`,
    4: `Growth-path B is about $\\$345,029$, which clears $\\$340,000$ by about $\\$5,029$. Rounding to the nearest ten thousand is $\\$350,000$, still above the cutoff.

The recovered growth-path value exceeds $\\$340,000$. The cutoff is a threshold, and the recovered figure clears it.`,
  },
});
console.log("padded final");
