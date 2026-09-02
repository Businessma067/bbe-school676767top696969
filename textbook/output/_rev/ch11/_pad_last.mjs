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

apply("textbook/output/_rev/ch11/11_20.json", {
  "math-11-19": {
    4: `Thirteen dollars and sixty-one cents is the dollar image of a $0.068$ point effective gap on $\\$20,000$, not a $0.10$ point nominal gap. Expecting $\\$20$ of extra interest from the printed quotes overstates the advantage by about $\\$6$.

The recovered extra is still about $\\$13.61$, and CD2 still beats CD1. That $\\$13.61$ is letter A's $6.49\\%$ against letter B's $6.55\\%$ applied to the same $\\$20,000$. Rounding to $\\$14$ would still be the same comparison. The claim keeps the cents.`,
  },
});

apply("textbook/output/_rev/ch11/21_30.json", {
  "math-11-21": {
    3: `Five dollars and seventy-two cents is the whole point of quoting continuous compounding instead of annual compounding at the same 5%. Part 3 already subtracted $4,730.72 - 4,725.00$.

A baker who ignored that extra would book the annual clock and would be $\\$5.72$ light. The opposite verdict would need those two balances to match, which happens only at a 0% rate. At 5% the extra is $\\$5.72$. On a larger deposit the same $0.1271$ point lift would scale. On this $\\$4,500$ it is those five dollars and seventy-two cents.`,
  },
  "math-11-24": {
    4: `At 10% the step from yearly to semi-annual is $\\$187.50$ and the step from semi-annual to continuous is $\\$200.32$. The second step is slightly larger, because jumping from $n = 2$ all the way to $n = \\infty$ still captures a lot of leftover compounding at 10%.

The claim said the first gap is larger. The recovered pair is $187.50 < 200.32$. Ranking the gaps backwards is the mix-up. What would have to change is a lower quote, where the last step to continuous shrinks. At 10% it does not shrink past $\\$187.50$.`,
  },
  "math-11-27": {
    3: `Three doublings multiply by $8$, not by $6$. $\\$18,000 \\times 8 = 144,000$ after about $37.8$ years. Adding $2+2+2$ is the trap that produces $\\$108,000$. Repeated doublings multiply.

A target of $6 S_0$ would take $(\\ln 6)/0.055 \\approx 32.6$ years, not three doubling periods. The recovered three-doubling balance is $\\$144,000$, not six times the principal. The claim mixed adding doubles with multiplying doubles.`,
  },
  "math-11-29": {
    1: `The 15% one-year extra is $\\$295.86$ on $\\$25,000$. Linear scaling by $15/3 = 5$ would have predicted about $\\$57$. Convexity produces about $26$ times the 3% gap, not $5$ times.

This letter names $\\$295.86$. Letter C will test that $26$-fold ratio against a cutoff of $30$. The recovered 15% pair is $\\$29,045.86$ against $\\$28,750.00$.`,
  },
  "math-11-30": {
    2: `The maximum effective rate at a 9.5% nominal is about $9.97\\%$, the continuous conversion. Setting that maximum equal to $9.50\\%$ names the floor as if it were the ceiling.

Those two ends differ by $0.47$ points, about $\\$1,864$ on $\\$400,000$. The recovered ceiling is $9.97\\%$, not $9.50\\%$. Annual compounding is where effective equals nominal. Continuous compounding is where the lift is largest.`,
  },
  "math-11-32": {
    3: `Clock ranking would put continuous X first. Dollar ranking puts X last. A $0.20$ point printed hole is too much for the continuous ceiling to fill against Z's 7.0% quarterly.

If all three quoted 7.0%, X would win, which is letter E. On this stem the quotes differ, and X is lowest at $\\$68,740.91$. The recovered ranking is $68,741 < 68,851 < 68,933$. Continuous is last, not first.`,
  },
});

apply("textbook/output/_rev/ch11/31_40.json", {
  "math-11-36": {
    1: `Option 2 at 6% continuous needs $\\$61,878.34$ today. Faster growth, smaller present value of a fixed $\\$100,000$ target. Reusing $\\$69,768$ for Option 2 would ignore the extra $1.5$ points of rate.

The recovered Option 2 deposit is $\\$61,878.34$. Letter C will rank it below Option 1. Letter D will mis-size the gap.`,
  },
  "math-11-37": {
    0: `Year-4 revenue is $\\$2,685,284.46$ after four years of 10% continuous on $\\$1,800,000$. Annual 10% would have left about $\\$2,636,000$. This letter names the expansion-phase endpoint.

Letter B will grow this through the 4% maturity phase. The cents, $46$, match the exponential product. A solver who reported $\\$2,700,000$ would be rounding past the recovered figure.`,
    1: `Year-7 revenue is $\\$3,027,649.77$, which is also $S(4) \\times e^{0.12}$ and $1,800,000 e^{0.52}$. This letter names that endpoint.

Letter C will call $7.43\\%$ the constant equivalent that lands on the same dollars. Annual 4% on the second phase would be a little light.`,
  },
  "math-11-39": {
    1: `Tripling at $6.5\\%$ takes $16.90$ years. Linear $1.5 \\times 10.66 = 15.99$ undershoots by $0.91$ years, which is letter E's comparison.

The recovered tripling time is $16.90$ years. This letter names that wait. A solver who reported $17$ years even would be rounding past the inversion.`,
    3: `Four times $\\$12,000$ is $\\$48,000$ at the quadrupling date, by definition. Rebuilding $12,000 e^{0.065 \\times 21.33}$ lands on the same $\\$48,000$. The cents are zeros because the multiple and the principal are round.

This letter names that balance. Letter C already named the date $21.33$ years.`,
  },
  "math-11-40": {
    0: `A's five-year 6% continuous book is $\\$202,478.82$. Annual 6% would have left about $\\$200,734$. This letter names A's stake.

Letters D and E will add it to B and C. The cents, $82$, match the exponential product. Rounding to $\\$202,500$ would still be the same dollar to the nearest hundred.`,
    1: `B's five-year 9% decay book is $\\$140,278.19$, a drop of about $\\$80,000$ from $\\$220,000$. Letter E will flip the exponent and turn this into about $\\$345,029$ of growth.

This letter names the decay path. Discrete annual 9% would be a little lighter.`,
  },
});
console.log("padded last");
