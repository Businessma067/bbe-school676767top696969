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
  "math-11-11": {
    1: `In the story of the stem, the trustee is reconstructing an opening deposit that grew into $\\$40,000$ over six years at 4.5% paid annually. The recovered object is $S_0 \\approx 30,715.86$. Citing that figure is citing Part 3.2, not a second power of $1.045$.

A different wrong figure to name: $40,000 \\times (1.045)^{-5} \\approx 32,158$, which discounts only five years. The stem is six years. One missing year of discount leaves the opening amount too high, and that too-high figure would also sit above letter C's $\\$32,000$ cutoff.

If the rate had been 0%, the deposit would have been the full $\\$40,000$. Every positive year of 4.5% carves some of that away. Six years carve it down to $\\$30,715.86$. That is the present value the claim names.`,
    2: `In the story of the stem, $\\$32,000$ is a round checkpoint, not a second computation. The recovered object is still $S_0 \\approx 30,715.86$. The extra arithmetic is only the $\\$1,284$ gap.

A trustee who booked $\\$32,000$ as "close enough" would overstate the required deposit by more than a thousand dollars. Close is not the cutoff test. The cutoff is a strict less-than, and $\\$30,715.86$ passes it from below.

What would have to change for the opposite verdict is a six-year factor small enough that $40,000$ divided by it exceeded $\\$32,000$. That would take a rate below about $3.8\\%$ annually. The stem is $4.5\\%$.`,
    3: `In the story of the stem, the 5.5% hypothetical asks whether a faster account needs more money today to hit the same $\\$40,000$. It needs less. The new conversion left about $\\$29,010$.

A rushed solver who computed a 5.5% *future* value of the original $\\$30,716$ would see a larger six-year balance and might think "higher" applies to the present value too. Future value on a fixed deposit rises with the rate. Present value of a fixed target falls with the rate.

The $\\$1,706$ drop from $\\$30,716$ to $\\$29,010$ is the dollar meaning of an extra point of annual compounding over six years. The claim has that meaning backwards.`,
    4: `In the story of the stem, interest is what the opening deposit earns on the way to $\\$40,000$. The recovered object is $9,284.14$. That is the complement of letter B: $40,000 - 30,715.86$.

A rushed solver who used $6 \\times 0.045 \\times 30,716 \\approx 8,293$ would be using simple interest on the opening deposit and would undershoot. Compounding adds the extra $\\$991$ above that simple-interest companion.

The cents on $9,284.14$ are forced by the cents on $30,715.86$. If B is right, E is the same arithmetic in reverse. The claim names that reverse.`,
  },
  "math-11-12": {
    1: `In the story of the stem, six years is a round calendar that a Rule-of-72 fragment can invent. The recovered object is $81.30$ months. The extra arithmetic is the nine-month miss versus $72$ months.

After $72$ months the account is still about £254 short. Those nine extra months are the wait for that last £254, and because growth is exponential they earn more dollars per month than the first months did.

What would have to change for the opposite verdict is a monthly rate near $0.56\\%$, which would hit a factor of $1.5$ at $72$ months. The stem is $0.50\\%$ a month.`,
    2: `In the story of the stem, 48 months is four years of monthly credits at $0.50\\%$. The recovered wait is $81.30$ months. The extra look at $(1.005)^{48}$ left about £5,082.

A family that withdrew at four years would be almost a thousand pounds short of the £6,000 goal. That shortfall is why 48 months is not an approximation of $81.30$. It is a different, earlier date.

The opposite verdict would hold for a £5,080 target. The stem's target is £6,000.`,
    3: `In the story of the stem, the investor is comparing a 1.5-times wait with half of a doubling wait on the same 6% monthly account. The recovered objects are $t_{1.5} \\approx 81.30$ and $t_2 / 2 \\approx 69.5$. The extra arithmetic is $81.30 > 69.5$.

A 50% gain feels like "halfway to doubling" in dollars from the original principal, but doubling is a 100% gain, and halfway in *time* produces only a 41.4% gain. The 50% target sits later than the halfway calendar.

That is why the claim's "must be less than half" fails. The recovered 1.5 wait is about 12 months longer than half a doubling.`,
    4: `In the story of the stem, 100 months is a round overshoot of $81.30$. The extra arithmetic is the £6,587 balance at 100 months, about £587 too high.

A solver who wanted a safety margin past the target would land here and think the logarithm had a built-in buffer. It does not. The logarithm hits £6,000 at $81.30$ months. Extra months produce extra money, not a rounding of the same date.

The opposite verdict would hold for a £6,587 target. The stem's target is £6,000.`,
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
console.log("padded 11-12");
