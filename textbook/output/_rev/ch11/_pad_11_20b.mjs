import fs from "node:fs";

const path = "textbook/output/_rev/ch11/11_20.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer: " + last.slice(-90));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

const extras = {
  "math-11-13": {
    1: `In the story of the stem, the retiree wants the true one-year yield on a 4.25% daily money-market account. The recovered object is $R \\approx 4.34\\%$. Citing it is citing Part 3.2.

A solver who used $4.25 \\times 365 / 360$ as a day-count adjustment would be answering a different quoting convention. The stem divides by 365 and then compounds 365 times. That conversion is $4.34\\%$.

The $0.09$ point lift is modest because 4.25% is a modest quote, even with daily credits. Letter E will ask whether that lift exceeds $0.20$. It does not. This letter only names the $4.34\\%$ yield.`,
    2: `In the story of the stem, $\\$20,000$ sits in the money-market account for one year. The recovered object is $FV \\approx 20,868.26$. That is principal times $1.043413$.

A retiree who booked $\\$20,850$ would be using the nominal 4.25% once. The extra $\\$18.26$ is daily compounding on this principal. Small against $\\$20,000$, it is exactly the dollar image of the $0.09$ point lift in letter B.

What would have to change for the opposite verdict is a different deposit or a different quote. Under $\\$20,000$ at 4.25% daily for one year, the balance is $\\$20,868.26$.`,
    3: `In the story of the stem, the retiree is asked whether switching the same 4.25% to monthly credits would raise the yearly yield. It would lower it. Part 3.4 recovered $R_{\\mathrm{mon}} \\approx 4.33\\%$ against the daily $4.34\\%$.

A rushed solver who thought monthly slices are larger, so monthly must win, would agree with the claim. Larger slices, fewer dates. At a fixed nominal rate the more frequent clock wins, and daily is more frequent than monthly.

The $0.01$ point gap is tiny in dollars on $\\$20,000$, a couple of dollars, but the direction is the whole letter. Monthly is not higher.`,
    4: `In the story of the stem, the gap letter asks how far $4.34\\%$ sits above $4.25\\%$. The recovered object is $0.09$ points. The extra arithmetic is the $0.11$ point miss versus $0.20$.

Even the continuous ceiling $e^{0.0425} - 1$ is about $4.34\\%$. There is no compounding schedule at this quote that clears a $0.20$-point premium. Daily compounding is already next to that ceiling.

Rounding $0.09$ to $0.1$ still misses $0.20$. The cutoff is on the other side of the recovered gap.`,
  },
  "math-11-14": {
    1: `In the story of the stem, the shopper wants the true annual cost of a 1.9% monthly store card. The recovered object is $R \\approx 25.34\\%$. Citing it is citing Part 3.2.

A solver who added $1.9\\%$ twelve times would stop at $22.80\\%$ and would be answering letter A. Someone who averaged $22.80$ with $28$ might invent a number near $25$, but the overview's $25.34\\%$ is $(1.019)^{12} - 1$, not an average.

On an unpaid $\\$3,000$, that $25.34\\%$ is about $\\$760$ of interest in a year. Letter D will apply it. This letter only names the rate.`,
    2: `In the story of the stem, the claim says the true yearly cost equals the printed twelvefold multiple. Those two objects are $25.34\\%$ and $22.80\\%$. They differ by $2.54$ points.

A cardholder who budgeted 22.80% would understate the cost by more than two points. That understatement is the intra-year compounding the card charges every month.

The opposite verdict would hold on an annually compounded 22.80% card. The stem charges 1.9% a month.`,
    3: `In the story of the stem, an unpaid $\\$3,000$ rides on the card for a year. The recovered object is $FV \\approx 3,760.22$. The claim's $\\$3,684$ is $3,000 \\times 1.228$.

A shopper who paid $\\$3,684$ would still owe about $\\$76$ of intra-year compounding. That $\\$76$ is the dollar image of the $2.54$ point gap in letters B and E.

The opposite verdict would need the card to charge 22.80% once a year. It charges 1.9% a month, so the year-end figure is $\\$3,760.22$.`,
    4: `In the story of the stem, the shopper is asking whether the true yearly cost sits more than three points above the printed 22.80%. The recovered gap is $2.54$ points. The extra arithmetic is the $0.46$ point miss versus $3.00$.

A $1.9\\%$ monthly charge is expensive enough for compounding to add more than two points, not expensive enough to add three. Clearing three points would need a monthly charge a little above $2.0\\%$.

Rounding $2.54$ to $3$ would be a full half-point of rounding, which is not how $25.34 - 22.80$ is reported. The recovered gap is $2.54$, which is not more than $3.00$.`,
  },
  "math-11-15": {
    0: `In the story of the stem, the bank is publishing the twice-a-year clock at a shared 10% quote. The recovered object is the exact $10.25\\%$. On a $\\$1,000$ notional that is $\\$102.50$ of interest against $\\$100$ annually, $\\$2.50$ of intra-year extra.`,
    1: `In the story of the stem, this is the four-credit clock at the same 10%. The recovered object is $10.38\\%$. On $\\$1,000$ that is about $\\$103.81$ of interest, $\\$1.31$ more than the semi-annual clock.

That $1.31$ is letter E's first gap in dollars. This letter only names the quarterly yield.`,
    2: `In the story of the stem, this is the twelve-credit clock at the same 10%. The recovered object is $10.47\\%$. On $\\$1,000$ that is about $\\$104.71$ of interest, another $\\$0.90$ above quarterly.

The dollars added shrink as $n$ rises, which is letter E, but they stay positive, which is letter D. This letter only names the monthly yield.`,
    3: `In the story of the stem, the bank is asked whether the three published yields rise as the clock speeds up. The recovered objects are $10.25\\%$, $10.38\\%$, and $10.47\\%$. The extra arithmetic is the chain of inequalities.

A fourth clock, continuous compounding at 10%, would sit near $10.52\\%$ and would continue the rise. The stem stops at monthly, and monthly is already the highest of the three named clocks.

Nothing in the stem lowers the quote as $n$ rises. The 10% quote is shared, so the ladder rises.`,
    4: `In the story of the stem, the bank is asked which step up in frequency adds more to the yield. The recovered gaps are $0.13$ and $0.09$. The extra arithmetic is $0.13 > 0.09$.

A rushed solver who counted $\\times 2$ then $\\times 3$ in $n$ would expect the second gap to be larger. The effective-rate curve is concave in $n$, so later jumps add less.

The claim has those two gaps backwards. The first step, semi-annual to quarterly, is the larger one.`,
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
console.log("padded 13-15");
