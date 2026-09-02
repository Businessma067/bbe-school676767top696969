import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer: " + last.slice(-80));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

const extras = {
  "math-11-2": {
    2: `What the owner is actually asking, in the story of the stem, is how many dollars sit in the account after six years of quarterly credits, not how many dollars a rounded table might show. The recovered object that answers that question is $S(6)$, because the stem's clock is quarterly at 8% for six years, not an annual 8% clock and not a simple-interest clock.

A different wrong figure to name out loud: $6,000 \\times (1.02)^{6} \\approx 6,753$, which treats six *years* as six *quarters*. That mix-up uses the right periodic rate with the wrong exponent. The recovered exponent is $24$, not $6$, and the recovered balance is $\\$9,650.61$.

If the opening deposit had been larger, or if the quote had been 8.5% instead of 8%, the six-year product could have sat near $\\$9,860$. Under the stem as written, it does not. The printed $\\$9,860$ is a nearby number with no model behind it on this page.`,
    3: `In the story of the stem, the owner is comparing two holding periods on the same deposit, not two different rates. The recovered objects are $S(3)$ and $S(6)$. The claim's extra move is to take half of $S(6)$ and set it next to $S(3)$. That extra move is the only new arithmetic.

A rushed solver who computed $S(6)/2$ first and never computed $S(3)$ would have no three-year figure to compare. Someone who computed $S(3)$ and then halved *that* would be answering a different question: half the three-year balance, which is not this claim.

What would have to change for the opposite verdict is the interest model itself. Under simple interest the dollar gain is proportional to time, so a three-year balance would sit at $6,000 + 3,650.61/2 = 7,825.31$, still not $4,825.31$, because even simple interest keeps the original principal intact. The only way $S(3)$ equals $S(6)/2$ is if the original principal is zero, which it is not.

The meaning of the comparison is that the second three years are more valuable in dollars than the first three, because they compound on a larger base. That is why $S(3)$ overshoots half of $S(6)$ so clearly.`,
    4: `In the story of the stem, "total percentage growth" is the owner's gain as a share of the $\\$6,000$ that went in, after six years of quarterly credits. The recovered object is the $60.84\\%$ from Part 3.4. The claim's extra arithmetic is only the comparison of that $60.84\\%$ with a $65\\%$ cutoff.

A rushed solver who used $8\\% \\times 6 = 48\\%$ would miss the cutoff from below by even more, and would also be using simple interest. Someone who used the growth *factor* $1.6084$ as $160.84\\%$ would clear $65\\%$ easily and would be counting the principal as growth.

What would have to change for the opposite verdict is either a higher quote or a longer wait. At the recovered 8% quarterly, six years produce $60.84\\%$. Seven years would produce more than $65\\%$, but the stem is six years.

The $4.16$ point miss is not a rounding issue. Rounding $60.84\\%$ to $61\\%$ still misses $65\\%$. The cutoff is on the other side of the recovered growth.`,
  },
  "math-11-3": {
    0: `In the story of the stem, Offer (i) is the quarterly 6.4% term deposit sitting next to a semi-annual 6.5% rival. The recovered object that answers this letter is $R_i$, because an effective annual rate is how a quarterly schedule is made comparable to any other one-year offer.

A rushed solver who converted with $n = 2$ instead of $n = 4$ would be using Offer (ii)'s clock on Offer (i)'s quote. That mix-up would not produce $6.55\\%$. The overview's $n_i = 4$ is the right clock.

What would have to change for the opposite verdict is a different recovered $R_i$, for example if the quote were $6.0\\%$ quarterly. Under the stem's $6.4\\%$ paid quarterly, the yearly yield is about $6.55\\%$.`,
    1: `In the story of the stem, Offer (ii) is the twice-a-year 6.5% deposit. The recovered object is $R_{ii}$, the one-year yield that makes this offer comparable to Offer (i). Citing $6.61\\%$ is citing Part 3.4, not a second independent formula.

A rushed solver who squared $1.065$ instead of $1.0325$ would be compounding the annual quote twice without splitting it, and would overstate the yield. The overview already split $6.5\\%$ in half before squaring.

What would have to change for the opposite verdict is a recovered $R_{ii}$ that is not about $6.61\\%$. Annual compounding at $6.5\\%$ would stay $6.50\\%$. Quarterly compounding at $6.5\\%$ would sit a little above $6.61\\%$. The stem is semi-annual, and the recovered figure is $6.61\\%$.

The $0.11$ point lift over the printed quote is smaller than Offer (i)'s $0.15$ point lift, which is why frequency alone does not pick a winner. Offer (ii) still wins on the higher starting quote.`,
    2: `In the story of the stem, the saver has $\\$10,000$ for one year and must pick a term deposit. The recovered objects are $R_i$ and $R_{ii}$. The extra arithmetic that is this letter's own is the dollar gap $I_{ii} - I_i = 5.23$, which translates the rate ranking into money.

A rushed solver who picked Offer (i) because four credits sound more generous than two would have the frequency fallacy that letter D names. A solver who picked Offer (ii) only because $6.5 > 6.4$ would have the right offer and the wrong reason. The right reason is $6.61\\% > 6.55\\%$.

What would have to change for the opposite verdict is a quarterly quote high enough that $R_i$ clears $6.61\\%$. Holding both printed quotes fixed, Offer (ii) remains the better choice by about $\\$5.23$ on $\\$10,000$.

That $\\$5.23$ is small as a share of $\\$10,000$, but the ranking is unambiguous. The claim is not that the gap is large. The claim is that Offer (ii) is better. It is.`,
    3: `In the story of the stem, Offer (i) really does compound more often: four dates against two. The recovered objects are still $R_i$ and $R_{ii}$. Frequency is a property of the clock. Effective rate is a property of the whole year. They are not the same property when the printed quotes differ.

A rushed solver who learned "more frequent is better" from a textbook example where $r$ was held fixed would apply that slogan here. That slogan is true at a shared nominal rate. It is not true when the more frequent offer is the cheaper quote by $0.10$ of a point.

What would have to change for the opposite verdict is equal nominal rates, or a smaller gap between $6.4\\%$ and $6.5\\%$ combined with an even larger frequency gap. Under the stem, $6.55\\% < 6.61\\%$.

The meaning of the comparison is that a $0.10$ point hole in the printed quote can survive a doubling of compounding frequency. Frequency matters. It does not matter enough here to flip the ranking.`,
    4: `In the story of the stem, the saver deposits $\\$10,000$ for one year in Offer (ii). Interest is the year-end balance minus $\\$10,000$, which is the same as principal times $R_{ii}$. The recovered object is $I_{ii} = 660.56$. The extra arithmetic is the $0.56$ gap versus $\\$660$.

A rushed solver who used $10,000 \\times 0.0661 = 661$ would still clear the cutoff, just with a coarser rounding. A solver who used $10,000 \\times 0.065 = 650$ would miss, because that ignores the two intra-year credits.

What would have to change for the opposite verdict is a smaller principal, for example $\\$9,990$, or a weaker $R_{ii}$. At $\\$10,000$ and $6.61\\%$, the interest is $\\$660.56$, which is more than $\\$660$.

The fifty-six cents are not a rounding of $\\$655.33$, Offer (i)'s interest. Offer (i) misses this cutoff. Offer (ii) clears it. The claim names Offer (ii).`,
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
  console.log(t.id, t.tactical_explanations.map(wc).join(", "));
}
