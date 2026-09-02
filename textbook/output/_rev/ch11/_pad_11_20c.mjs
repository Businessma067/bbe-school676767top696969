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
  "math-11-16": {
    0: `In the story of the stem, an economist is reverse-engineering a constant annual rate for fifty-fold growth over 80 years. The recovered object is $r \\approx 5.01\\%$. That is a root, not a ratio.

A country growing at $5\\%$ a year really does multiply by about $50$ in 80 years. That is the point of the logarithm. Linear shortcuts that produce $6.25\\%$ or $62.5\\%$ describe a different, much faster path.

Letters C through E will change the multiple or the horizon. This letter is the original eightieth root.`,
    1: `In the story of the stem, $6.25\\%$ is the linear cousin of the fifty-fold story. The recovered object is $5.01\\%$. The extra arithmetic is the factor of about $128$ that $6.25\\%$ would actually produce over 80 years.

That $128$ is more than twice the target of $50$. Using $6.25\\%$ would overshoot the economist's question by a wide margin. The eightieth root is $5.01\\%$.

The opposite verdict would need a target near $128$ times. The stem's target is $50$ times.`,
    2: `In the story of the stem, the economist is asked whether halving the multiple from $100$ to $50$ halves the required rate. It does not. The new conversion left $r_{100} \\approx 5.93\\%$, and half of that is $2.96\\%$, not $5.01\\%$.

Simple interest would obey the claim: twice the total gain in the same time is twice the annual rate. Compound growth takes roots. $50^{1/80}$ is not half of $100^{1/80}$.

The recovered $50\\times$ rate sits much closer to the $100\\times$ rate than a half-rate story would predict, because logarithms compress large multiples.`,
    3: `In the story of the stem, 160 years is two 80-year blocks at the same $5.01\\%$ rate. The recovered 80-year factor is $50$, so the 160-year factor is $50^{2} = 2,500$, not $100$.

Double the time squares the multiple. A factor of $100$ is only twice $50$ as a multiple, which arrives around year $93$, not year $160$.

The claim confuses doubling the *multiple* with doubling the *calendar*. Those are different operations on an exponential.`,
    4: `In the story of the stem, the same fifty-fold gain is now required in 40 years. Less time needs a higher rate. The overview recovered about $9.65\\%$ against $5.01\\%$.

Halving $5.01\\%$ to $2.50\\%$ would produce only a few-fold gain in 40 years, not a fifty-fold gain. The root $50^{1/40}$ is the harder annual job.

The opposite verdict would hold if the 40-year target were a smaller multiple. The stem keeps the $50\\times$ target.`,
  },
  "math-11-17": {
    0: `In the story of the stem, a parent is discounting a $\\$25,000$ tuition bill in Account X, 5.00% monthly for seven years. The recovered object is $S_{0,X} \\approx 17,629.99$. Citing it is citing Part 3.1.

A parent who deposited $\\$25,000 / 1.05^{7} \\approx 17,760$ would be using annual 5% and would over-deposit by about $\\$130$. Monthly 5% is stronger, so it needs the recovered $\\$17,629.99$.

Letter C will compare this with Y. This letter only names X's opening amount.`,
    1: `In the story of the stem, the same bill is discounted in Account Y, 5.10% quarterly. The recovered object is $S_{0,Y} \\approx 17,534.28$. Y grows faster, so it needs less today.

A parent who reused X's $\\$17,630$ in Y would over-deposit by about $\\$96$. That $\\$96$ is the dollar image of Y's higher effective rate.

The cents, $28$, match Part 3.2. Together with X's $99$ cents they are two different products, not a rounding of one another.`,
    2: `In the story of the stem, the parent is asked which account needs less today. The recovered pair is $\\$17,534.28$ against $\\$17,629.99$. Y is smaller by about $\\$96$.

Choosing X because it compounds monthly is the frequency fallacy letter E names as an "always." On this stem, Y's extra $0.10$ point of nominal rate outweighs X's extra dates.

The opposite verdict would hold if both quoted 5.00%. Then monthly X would need less. Under the stem, Y quotes 5.10% and needs less.`,
    3: `In the story of the stem, the parent is ranking the two true yearly yields. The recovered pair is $R_Y \\approx 5.20\\%$ against $R_X \\approx 5.12\\%$. Y is higher by about $0.08$ of a point.

That $0.08$ point on $\\$25,000$ seven years out is why Y's present value is about $\\$96$ smaller. Rate ranking and deposit ranking are the same comparison in different units.

Monthly compounding does not give X the higher effective rate, because the quotes differ.`,
    4: `In the story of the stem, the word "always" claims that more frequent compounding guarantees the smaller deposit for any target and any wait. This pair is a counterexample: X is monthly, Y is quarterly, and X still needs more today.

Changing the tuition bill to $\\$50,000$ or the wait to $10$ years would scale both present values. It would not reverse $R_Y > R_X$. The always fails for every target and every horizon on these two quotes.

Drop the word "always" and equalize the nominal rates, and the frequency ranking would hold. As written, it does not.`,
  },
  "math-11-18": {
    1: `In the story of the stem, the trustee is reconstructing an opening investment that grew into $\\$60,000$ over nine years at 4.4% quarterly. The recovered object is $S_0 \\approx 40,467.83$. Citing it is citing Part 3.2.

A trustee who deposited $60,000 / 1.044^{9} \\approx 40,700$ would be using annual 4.4% and would over-deposit by a couple of hundred dollars. Quarterly 4.4% is stronger, so it needs the recovered $\\$40,467.83$.

Letters C and E will test this figure against $\\$45,000$ and against $\\$20,000$ of interest. This letter only names the deposit.`,
    2: `In the story of the stem, $\\$45,000$ is a round checkpoint above the recovered $\\$40,467.83$. The extra arithmetic is the $\\$4,532$ gap. The present value is below the cutoff, not above it.

A trustee who booked $\\$45,000$ as a conservative overestimate would be leaving about $\\$4,500$ extra in the account for nine years, which is a different decision from the exact reconstruction.

The opposite verdict would need a recovered $S_0$ above $\\$45,000$. At 4.4% quarterly for nine years, $S_0$ is $\\$40,467.83$.`,
    3: `In the story of the stem, the 5.0% hypothetical asks whether a faster account needs more money today to hit the same $\\$60,000$. It needs less. The new conversion left about $\\$38,365$.

Higher rate, larger growth factor, smaller present value. The $\\$2,100$ drop from $\\$40,468$ to $\\$38,365$ is the dollar meaning of an extra $0.60$ points of quarterly compounding over nine years.

The claim has that meaning backwards. "Higher" would describe the nine-year balance on a fixed deposit, not the required opening amount.`,
    4: `In the story of the stem, interest is $\\$60,000$ minus the opening investment. The recovered object is $19,532.17$. The extra arithmetic is the $\\$468$ miss versus $\\$20,000$.

Rounding the deposit to $\\$40,000$ would manufacture a $\\$20,000$ interest figure that the recovered cents do not support. $60,000 - 40,467.83 = 19,532.17$, which is not more than $20,000$.

The opposite verdict would need $S_0$ below $\\$40,000$. Under the stem it is not.`,
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
console.log("padded 16-18");
