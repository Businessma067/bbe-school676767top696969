import fs from "node:fs";

const path = "textbook/output/_rev/ch11/21_30.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer " + last.slice(-80));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const extras = {
  "math-11-21": {
    0: `In the story of the stem, Ms. Delgado parks $\\$4,500$ for one year at 5% compounded continuously. The recovered object is $S(1) \\approx 4,730.72$. Citing that balance is citing Part 3.1, not a second evaluation of $e^{0.05}$.

**1.** A solver who used $4,500 \\times 1.05 = 4,725$ would be on the annual clock of letter C. The extra $\\$5.72$ is continuous compounding on this principal, which is letter D.

**2.** Another mix-up is $4,500 \\times 1.04 = 4,680$, as if $e^{0.05}$ rounded to $1.04$. That rounding is letter E's false claim. The factor is $1.051271$.

**3.** The cents, $72$, match $4,500 \\times 1.051271$. A year-end statement that printed $\\$4,731$ would still be this balance.

What would have to change for the opposite verdict is a different principal or rate. Under $\\$4,500$ at 5% continuous for one year, the balance is $\\$4,730.72$.

The recovered year-end balance is $\\$4,730.72$`,
    1: `Interest is the year-end balance minus the $\\$4,500$ deposit. Part 3.1 recovered $S(1) \\approx 4,730.72$. Part 3.2 already subtracted and left $\\$230.72$. This letter is that difference.

**1.** A solver who used $4,500 \\times 0.05 = 225$ would be using simple interest, missing the extra $\\$5.72$ that continuous compounding adds. That extra is letter D.

**2.** Another mix-up is reporting $\\$4,730.72$ as the interest, forgetting to subtract the principal. Interest is the gain, not the balance.

**3.** The cents, $72$, are the same cents as the balance, as they must be after subtracting a round $\\$4,500$.

The recovered first-year interest is $\\$230.72$`,
    2: `Annual compounding at the same 5% applies the quote once. Part 3.3 already computed $4,500 \\times 1.05 = 4,725.00$. The claim is $\\$4,735.00$, which sits above even the continuous $\\$4,730.72$.

The gap against the recovered annual balance is

$$4,735.00 - 4,725.00 = 10.00$$

so the wording is $\\$10$ too high, and in the wrong direction relative to continuous compounding.

**1.** A once-a-year schedule cannot beat continuous compounding at the same nominal rate. Continuous is the ceiling. $\\$4,735$ is above the ceiling, so it cannot be the annual figure.

**2.** The trap is adding the $\\$5.72$ continuous extra *on top of* something near $\\$4,730$ and landing on $\\$4,735$. Annual compounding is weaker, not stronger.

**3.** The opposite verdict would hold if the claim had named $\\$4,725.00$. The claim named $\\$4,735.00$.

The recovered annual balance is $\\$4,725.00$, not $\\$4,735.00$`,
    3: `The dollar gap is the two one-year balances subtracted. Continuous compounding gave $S(1) \\approx 4,730.72$. Annual compounding gave $\\$4,725.00$. Part 3.4 already subtracted and left $\\$5.72$.

**1.** That $\\$5.72$ is the extra from crediting interest continuously rather than once. On $\\$4,500$ at 5% for one year, the extra is small but positive.

**2.** A solver who used $4,730.72 - 4,735.00$ would be subtracting the false annual figure from letter C and would get a negative gap. The true annual figure is $\\$4,725$.

**3.** The opposite verdict would need the two clocks to agree, which happens only at a 0% rate. At 5%, continuous wins by $\\$5.72$.

The recovered extra from continuous compounding is $\\$5.72$`,
    4: `The continuous one-year growth factor is $e^{0.05} \\approx 1.051271$. Part 3.5 already rounded that to $1.0513$ at four decimal places, not $1.0400$.

A factor of $1.0400$ would describe a $4\\%$ continuous rate, or a $4\\%$ simple annual rate. The stem is $5\\%$.

**1.** The trap is $e^{0.04} \\approx 1.0408$, nearby, or $1 + 0.04 = 1.04$. Neither is $e^{0.05}$.

**2.** Rounding $1.051271$ to two decimals is $1.05$, to four decimals is $1.0513$. No standard rounding produces $1.0400$.

**3.** The opposite verdict would hold at a 4% continuous rate. The stem is 5%.

The recovered factor is about $1.0513$, not $1.0400$`,
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
  if (!extras[t.id]) continue;
  console.log(t.id, t.tactical_explanations.map(wc).join(", "));
}
