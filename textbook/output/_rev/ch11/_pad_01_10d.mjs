import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer: " + last.slice(-80));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const extras = {
  "math-11-3": { 0: `The $0.15$ point lift is modest, but it is the whole difference between a printed 6.4% and a true 6.55% yearly cost of waiting. On $\\$10,000$ that lift is about $\\$15$ of extra interest relative to annual compounding at 6.4%.` },
  "math-11-5": {
    1: `The $0.12$ point lift is the quarterly analogue of the extra $\\$17.81$ in letter C. Rate and dollars are the same comparison in different units.`,
    2: `If the deposit had been $\\$1,500$ instead of $\\$15,000$, the cents would scale down by ten and would no longer match $81$. The stem's principal is $\\$15,000$, and the product is $\\$15,857.81$.`,
    4: `Even switching to monthly compounding, as letter D did, only lifts the gap from $0.12$ to about $0.15$. Neither clock at 5.6% clears a $0.20$-point premium.`,
  },
  "math-11-6": {
    4: `In the story of the stem, the investor who just found a doubling time is asking whether that logarithm is a one-trick method. It is not. The same inversion finds the wait to triple, to grow by half, or to reach any other $M > 1$.

A rushed solver who treats the Rule of $72$ as the method would think only doublings are allowed. The Rule of $72$ is a doubling approximation. The logarithm is general.

What would have to change for the opposite verdict is a growth factor that was not strictly increasing, which would take a negative rate. The stem's $i_m = 0.006$ is positive.

The recovered method is $t = \\ln M / \\ln(1.006)$ for any target multiple $M$.`,
  },
  "math-11-7": {
    0: `On a $\\$1,000$ notional, that $15.56\\%$ yield is $\\$155.63$ of interest in a year, against $\\$150$ at annual compounding. The extra $\\$5.63$ is the two intra-year credits.`,
    1: `On the same $\\$1,000$ notional, $15.87\\%$ is about $\\$158.65$ of interest, $\\$3$ more than the semi-annual clock. That is the dollar meaning of moving from $n = 2$ to $n = 4$ at 15%.`,
    2: `On the same $\\$1,000$, $16.08\\%$ is about $\\$160.77$ of interest, another $\\$2$ above quarterly. The dollars added shrink as $n$ rises, which is letter E, but they stay positive, which is letter D.`,
    3: `A fourth clock, continuous compounding at 15%, would sit near $16.18\\%$ and would continue the rise. The stem stops at monthly, and monthly is already the highest of the three named clocks.`,
  },
  "math-11-8": {
    2: `Ten years of 6% simple interest would give $\\$6,400$. The extra $\\$877.60$ above that is compound interest, most of it from the monthly credits. The claim's $\\$7,277.60$ is that compounded figure.`,
    3: `An $82\\%$ gain on $\\$4,000$ is $\\$3,277.60$ of interest, which is real money for a grandchild. It is still $\\$722$ short of a doubling. The claim asked for a doubling, not for a large gain.`,
    4: `If the grandparent had wanted the annual clock to win, the annual quote would have needed to be a little above 6.1% to catch the monthly 6% schedule. The stem holds both clocks at 6%.`,
  },
  "math-11-9": {
    0: `The $5.92\\%$ quote is the one the later letters will perturb, first by cutting the wait in half and then by switching to monthly credits. Those perturbations are new conversions. This letter is the original eight-year quarterly quote.`,
    4: `Sixty percent of $\\$50,000$ is $\\$30,000$, which is exactly the dollar gap between the start and the target. Sixty-five percent would have been $\\$32,500$, so the target would have had to be $\\$82,500$ to clear the cutoff.`,
  },
  "math-11-10": {
    1: `That $0.41$ point lift over the printed 10.40% is what lets (b) overtake (a). Without the four quarterly credits, (b) would be the cheaper loan by $0.40$ points. With them, it is the dearer loan by $0.013$ points.`,
    2: `On a $\\$10,000$ one-year loan the effective-rate edge is about $\\$1.27$ of extra interest on (b). Small as money, it is still the wrong direction for "must be cheaper."`,
    3: `The same $\\$1.27$ on a $\\$10,000$ loan is the dollar meaning of (a) being cheaper. "More expensive" would require (a) to cost more than that. It costs less.`,
    4: `A $0.05$-point cutoff on a $\\$10,000$ loan is $\\$5$ of extra interest. The recovered gap is about $\\$1.27$, well under that cutoff.`,
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
for (const t of arr) {
  if (t.id === "math-11-1") continue;
  const wcs = t.tactical_explanations.map(wc);
  console.log(t.id, wcs.join(", "), "spread", Math.max(...wcs) - Math.min(...wcs));
}
