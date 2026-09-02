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
  "math-11-8": {
    2: `In the story of the stem, a grandparent parks $\\$4,000$ for ten years at 6% monthly. The recovered object is $S(10) \\approx 7,277.60$. Citing that balance is citing Part 3.2, not a second 120-month power.

A rushed solver who used $4,000 \\times 1.06^{10} \\approx 7,163$ would be on the annual clock of letter E. Someone who used $4,000 \\times 1.80 = 7,200$ would be a rounded-factor guess near the claim but still not $\\$7,277.60$.

What would have to change for the opposite verdict is a different recovered product. Under $\\$4,000$ at $0.50\\%$ a month for $120$ months, the balance is about $\\$7,277.60$.

The cents on the claim match the overview. This is the monthly schedule's dollar figure, which letter D will test against a doubling and letter E will test against annual compounding.`,
    3: `In the story of the stem, doubling would mean the grandchild's trust hits $\\$8,000$. The recovered object is a factor of $1.8194$, about $\\$7,277.60$. The extra arithmetic is the $\\$722$ shortfall against $\\$8,000$.

A rushed solver who used the Rule of $72$ at $6\\%$ would already expect about $12$ years, so ten years should fail. Someone who treated $1.82$ as "basically $2$" would agree with the claim. An $82\\%$ gain is not a doubling.

What would have to change for the opposite verdict is about $139$ months at this rate, or a higher quote that doubles in $120$ months. The stem is ten years at $0.50\\%$ a month.

The word "exactly" in the claim is doing work. Even a generous "approximately doubles" would be a stretch at $1.82$. The claim says exactly, and $1.8194$ is not $2$.`,
    4: `In the story of the stem, the grandparent is asked whether switching the same 6% to once-a-year credits would grow the trust *more*. That is a swapped frequency. Part 3.4 already ran it and left $\\$7,163.39$. The extra arithmetic is $7,163.39 < 7,277.60$.

A rushed solver who thought a 6% annual credit is "the full rate" while $0.50\\%$ a month is "only half a percent" would agree with the claim. The annual credit is larger per date. There are $110$ fewer dates, and no intra-year compounding.

What would have to change for the opposite verdict is a higher nominal rate on the annual account, or holding the effective rate fixed. The stem holds 6% fixed.

The $\\$114$ gap is the dollar meaning of more frequent compounding at this quote and this horizon. Monthly wins. Annual does not exceed it.`,
  },
  "math-11-9": {
    0: `In the story of the stem, the fund manager is reverse-engineering the quarterly quote that turns $\\$50,000$ into $\\$80,000$ in eight years. The recovered object is $r \\approx 5.92\\%$. Citing it is citing Part 3.1.

A rushed solver who used $60\\%/8 = 7.5\\%$ would be using simple interest. Someone who used $\\ln(1.6)/8 \\approx 5.88\\%$ would be using continuous compounding, a nearby but different clock.

What would have to change for the opposite verdict is a recovered quarterly quote that is not about $5.92\\%$. At $32$ quarters and a factor of $1.6$, it is $5.92\\%$.`,
    2: `In the story of the stem, the same $\\$80,000$ is now required in four years instead of eight. That is a new horizon, so it is this letter's own conversion. The recovered original quote is $5.92\\%$. The new quote is about $11.92\\%$.

A rushed solver who halved $5.92\\%$ to $2.96\\%$ would have "half the time, half the rate" and would agree with the claim. Roots do not work that way. The same $1.6$ in half the quarters needs about twice the rate.

What would have to change for the opposite verdict is a smaller four-year target, so that the required rate really did fall. The stem keeps the $\\$80,000$ target.

The meaning of $11.92\\% > 5.92\\%$ is that time and rate trade off. Less time costs a higher quoted rate.`,
    3: `In the story of the stem, the manager is asked whether switching from quarterly to monthly credits would force a *higher* printed quote to hit the same $\\$80,000$. That is a swapped frequency. The new conversion left about $5.89\\%$.

A rushed solver who thought monthly slices are smaller, so the annual quote must be raised, would agree with the claim. Smaller slices come with more dates. The extra dates are an advantage, so the required printed quote falls.

What would have to change for the opposite verdict is a weaker monthly clock, which does not exist at a shared target and shared horizon: more frequent compounding is stronger.

The $0.03$ point drop is small. The direction is the whole letter. Monthly needs a lower nominal rate, not a higher one.`,
    4: `In the story of the stem, growing from $\\$50,000$ to $\\$80,000$ is a $60\\%$ increase, independent of the compounding clock. The recovered object is Part 3.5's $60\\%$. The extra arithmetic is the five-point miss versus $65\\%$.

A rushed solver who read $1.6$ as $160\\%$ growth would clear $65\\%$ and would be counting the principal as gain. Someone who computed $80/50 - 1$ correctly would land on $60\\%$ and see the miss.

What would have to change for the opposite verdict is a target of at least $\\$82,500$. The stem's target is $\\$80,000$.

The $60\\%$ figure is exact, not an approximation from compounding. No rounding can turn $60$ into more than $65$.`,
  },
  "math-11-10": {
    0: `In the story of the stem, a borrower is ranking two loans: $10.80\\%$ paid once a year against $10.40\\%$ paid four times a year. The recovered objects are $R_a = 10.80\\%$ and $R_b \\approx 10.81\\%$. The extra arithmetic is $10.80 < 10.81$.

A rushed solver who ranked the printed quotes would call (a) higher and would agree with the claim. Printed quotes are not effective rates when the clocks differ.

What would have to change for the opposite verdict is annual compounding on (b), or quarterly compounding on (a). Under the stem, (b) is slightly higher as an effective rate.

The $0.013$ point edge is tiny as money, but the claim is a ranking, and the ranking favors (b), not (a).`,
    1: `In the story of the stem, option (b) is the quarterly 10.40% loan. The recovered object is $R_b \\approx 10.81\\%$. Citing it is citing Part 3.3.

A rushed solver who left the yield at $10.40\\%$ would be ignoring four intra-year credits. Someone who used $10.40 \\times 4$ without splitting would explode the rate.

What would have to change for the opposite verdict is a recovered quarterly conversion that is not about $10.81\\%$. At $i_b = 0.026$ through four quarters, it is $10.81\\%$.

That $10.81\\%$ is what overtakes (a)'s $10.80\\%$. Letters A, C, and D all lean on this figure. This letter only asks whether the conversion itself is $10.81\\%$.`,
    2: `In the story of the stem, option (b) really does quote a lower nominal rate. The recovered objects are still $R_a$ and $R_b$. Nominal is not cost. Cost to the borrower is the effective rate.

A rushed solver who stopped at $10.40 < 10.80$ would agree with the claim. After converting (b), $10.81 > 10.80$, so the cheaper print is the dearer loan.

What would have to change for the opposite verdict is the same compounding clock on both options. Then the lower nominal would be the cheaper loan. The stem mixes annual with quarterly.

The word "must" is doing work. A lower nominal is not a guarantee once frequencies differ. Here it fails.`,
    3: `In the story of the stem, "more expensive" means a higher effective rate for the borrower. The recovered ranking is $R_a < R_b$. Option (a) is cheaper.

A rushed solver who read $10.80 > 10.40$ on the page would agree with the claim. That is the nominal ranking, not the effective ranking.

What would have to change for the opposite verdict is $R_a > R_b$, which would take a higher quote on (a) or annual compounding on (b). Under the stem, (a) is the cheaper effective rate.

Letters A and C already faced this ranking from other wordings. This letter is the cost wording. The recovered pair does not make (a) more expensive.`,
    4: `In the story of the stem, the two loans look $0.40$ points apart on the page and about $0.013$ points apart after conversion. The recovered object is Part 3.5's $0.013$ point gap. The extra arithmetic is the miss versus a $0.05$-point cutoff.

A rushed solver who used the nominal spread $0.40$ would clear $0.05$ easily and would be answering the wrong comparison. The claim is about effective rates.

What would have to change for the opposite verdict is a wider effective spread, for example if (b) compounded monthly instead of quarterly. Under quarterly compounding, the recovered gap is $0.013$, which does not exceed $0.05$.

The two options are close. That closeness is the point of the cutoff letter.`,
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
console.log("padded 8-10");
