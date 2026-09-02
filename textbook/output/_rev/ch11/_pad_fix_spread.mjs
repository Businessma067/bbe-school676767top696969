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
  "math-11-7": {
    3: `The three recovered yields $15.56\\% < 15.87\\% < 16.08\\%$ have no tie and no negative step. Continuous compounding at 15% would continue the rise to about $16.18\\%$, but the stem stops at monthly.

On a $\\$10,000$ thought experiment the extra from semi-annual to monthly is about $\\$52$ of interest. That extra is interest-on-interest from four extra dates, then eight more. Frequency at a fixed 15% quote is a one-way lever.

A solver who thought monthly must *lower* the yield, confusing this with a fixed *effective* quote, would reverse the ladder. The stem holds the *nominal* rate fixed. More dates raise $R$.

The opposite verdict would need a shared effective rate, where more frequency lowers the printed quote. That is a different convention. Under this stem the ladder rises, matching the claim.`,
  },
  "math-11-10": {
    4: `The recovered pair sits $0.03$ of a point apart, far short of a $0.05$ point cutoff. On a $\\$10,000$ unpaid balance that is about $\\$3$ of extra annual cost, not $\\$5$. Rounding $0.03$ to $0.05$ is a two-hundredths slip the conversions do not support.

A borrower who ranked by the printed $0.10$ point nominal hole would have expected a much larger effective gap. Frequency on (b) closes most of that hole. The leftover is $0.03$ points, and $0.03$ is not more than $0.05$.`,
  },
});

apply("textbook/output/_rev/ch11/11_20.json", {
  "math-11-15": {
    0: `Two 5% half-year credits are an exact square, not a table interpolation. A solver who added $2 \\times 5\\%$ would report $10\\%$ and would be naming the nominal quote. The extra $0.25$ of a point is the second credit riding on the first.

This letter is only that $10.25\\%$ figure. Letters B and C climb from here.`,
    1: `Four 2.5% quarter-year credits produce $10.38\\%$, already in Part 3. The $0.13$ point step from $10.25\\%$ is letter E's first measured jump. A solver who reported $10.47\\%$ would be skipping to monthly.

This letter names the quarterly stop.`,
    4: `Semi-annual to quarterly adds $0.13$. Quarterly to monthly adds $0.09$. Counting $\\times 2$ then $\\times 3$ in $n$ would predict the second jump larger. The effective-rate curve is concave in $n$, so later jumps add less.

The claim reversed $0.13$ and $0.09$. On $\\$1,000$ that reversal is about $\\$0.40$ of extra interest assigned to the wrong step. Diminishing returns are the whole comparison.

What would have to change is a jump from $n = 1$ to $n = 2$ versus $n = 2$ to $n = 4$ at a much higher quote, where early convexity can scramble the sizes. At 10% the first of these two steps is larger.`,
  },
  "math-11-16": {
    2: `The map $M \\mapsto M^{1/80} - 1$ is concave, so $5.01\\%$ and $5.93\\%$ are neighbors while $5.01\\%$ and $2.96\\%$ are not. Halving $100$ to $50$ does not halve the rate. Simple interest would obey the claim. Compound growth takes roots.

A 100-fold path in 80 years needs about $5.93\\%$, only $0.92$ points above the 50-fold rate, not half of it. The economist who halves $5.93$ lands on $2.96\\%$ and misses the fifty-fold target by a wide margin.

The recovered 50-fold rate is $5.01\\%$, not half of the 100-fold rate.`,
  },
  "math-11-17": {
    1: `Y's extra $0.10$ points of quote, even on a quarterly clock, discount the $\\$25,000$ bill a little harder than X's monthly 5.00%. The $\\$96$ gap is small next to $\\$17,500$ and still enough to rank the two accounts.

A parent who deposited X's $\\$17,630$ in Y would overfund the bill. The recovered Y amount is $\\$17,534.28$.`,
  },
  "math-11-19": {
    1: `On $\\$20,000$, CD2's $6.55\\%$ is about $\\$1,311$ of interest. CD1's $6.49\\%$ is about $\\$1,297$. The $\\$13.61$ extra is letter E. This letter only names CD2's converted yield.

A solver who reported $6.40\\%$ would be naming the printed quote, not the quarterly conversion.`,
    3: `CD1 quotes $6.30\\%$ monthly, the lowest printed rate, and converts to $6.49\\%$, the lowest effective rate. Winning on frequency does not repair a $0.10$ to $0.15$ point printed hole against CD2 and CD3.

The recovered last-place finish is on both columns. The claim named that double last place, and it holds.`,
  },
  "math-11-20": {
    2: `If both quoted 6.00%, quarterly Q would take longer than monthly M. The stem does not share the rate. Q quotes $6.15\\%$. That extra $0.15$ points more than pays for four dates a year instead of twelve.

"Must" is the word that fails. Frequency can lose when the printed quote is lower. Account Q arrives first, in about $75.3$ months against M's $76.8$.`,
  },
});
console.log("padded spread 01-20");
