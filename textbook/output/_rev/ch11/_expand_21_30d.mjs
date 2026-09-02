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

const extras = {
  "math-11-25": {
    0: `One year of continuous 4.5% on $\\$95,000$ is $S(1) = 95,000 e^{0.045}$. Part 3.1 recovered $\\$99,372.65$. The claim is $\\$98,500.00$, about $\\$873$ too low.

The gap is

$$99,372.65 - 98,500.00 = 872.65$$

**1.** $\\$98,500$ looks like $95,000 \\times 1.0368$, or a 3.7% simple bump. The recovered factor is $e^{0.045} \\approx 1.046028$.

**2.** A solver who used $95,000 \\times 1.045 = 99,275$ would be on an annual clock, still above $\\$98,500$ and still not $\\$99,372.65$.

**3.** The opposite verdict would hold if the claim had named $\\$99,372.65$. It named $\\$98,500.00$.

The recovered one-year balance is $\\$99,372.65$, not $\\$98,500.00$`,
    1: `Two years double the exponent to $0.09$. Part 3.2 recovered $S(2) \\approx 103,946.56$. This letter is reading that product.

**1.** A solver who doubled the false $\\$98,500$ would get $\\$197,000$, which is not a two-year continuous path. Two years multiply by $e^{0.09} \\approx 1.09417$, not by $2$.

**2.** Another mix-up is $S(1)^{2} / 95,000$, which actually does give $S(2)$ because $S(1) = 95,000 e^{0.045}$ and squaring the factor is $e^{0.09}$. Using the recovered $S(1) \\approx 99,372.65$ that way lands on $\\$103,946.56$.

**3.** The cents, $56$, match Part 3.2. Letter C will split the two yearly dollar gains from $S(0)$, $S(1)$, and $S(2)$.

The recovered two-year balance is $\\$103,946.56$`,
    2: `Year 1 adds $S(1) - S(0)$. From Part 3.3 that is $\\$4,372.65$. Year 2 adds $S(2) - S(1)$. From Part 3.4 that is $\\$4,573.91$. Then $4,372.65 < 4,573.91$.

The claim said year 1 adds more. It adds less.

**1.** The same factor $e^{0.045}$ applies every year. A larger base in year 2 therefore produces a larger dollar gain. That is the point of the textbook property.

**2.** The trap is thinking early years add more because "the money is newer." Dollar gains rise as the balance rises, at a fixed rate.

**3.** The opposite verdict would hold under depreciation, letter E of math-11-26. Here the fund is growing.

Year 1 does not add more dollars than year 2`,
    3: `Continuous compounding at a fixed rate multiplies by the same $e^{r}$ every year. Part 3.5 recovered $e^{0.045} \\approx 1.0460$. Dollar gains change because the base changes. The multiplier does not.

**1.** The trap is seeing $\\$4,373$ then $\\$4,574$ and calling those different *factors*. They are different dollar gains from the same factor.

**2.** Letter E asks whether doubling $r$ doubles the factor. This letter asks whether the factor itself changes from year to year. It does not.

**3.** The opposite verdict would hold if the board changed the rate each year. The stem holds 4.5% fixed.

Each year the balance is multiplied by the same $e^{0.045}$`,
    4: `Doubling $r$ replaces $e^{0.045}$ with $e^{0.09}$. Part 3.6 recovered $1.09417$ against $2 \\times 1.04603 = 2.092$. Those are not equal.

**1.** Growth factors sit just above $1$. Doubling the rate does not double a number near $1.05$. It replaces one exponential with another.

**2.** The trap is doubling $1.046$ to $2.092$ as if the factor scaled with $r$. Factors of $2$ would be a doubling of the *balance*, which at 9% continuous takes $(\\ln 2)/0.09 \\approx 7.7$ years, not a year-over-year factor of $2$.

**3.** The opposite verdict would hold for the *net* rate $e^{r} - 1$ in a linear approximation at tiny $r$. At 4.5% versus 9% the linear story already fails: $9\\%$ is not twice $4.60\\%$ of effective yield either. $e^{0.09} - 1 \\approx 9.42\\%$, against $2 \\times 4.60\\% = 9.20\\%$.

The year-over-year factor does not double when the rate doubles`,
  },
  "math-11-26": {
    0: `Four years of continuous 10% depreciation on $\\$60,000$ carry the exponent $-0.40$. Part 3.1 recovered $v(4) \\approx 40,219.20$. This letter is reading that value.

**1.** A solver who used $60,000 \\times 0.90^{4} \\approx 39,366$ would be on an annual discrete 10% clock, about $\\$853$ light.

**2.** Another mix-up is $60,000 \\times (1 - 0.10 \\times 4) = 36,000$, simple depreciation, even lighter.

**3.** The cents, $20$, match $60,000 e^{-0.40}$. Letter C will read this as $67.03\\%$ of original.

The recovered four-year value is $\\$40,219.20$`,
    1: `Seven years carry the exponent $-0.70$. Part 3.2 recovered $v(7) \\approx 29,795.12$. This letter is reading that value.

**1.** A solver who used $40,219 \\times e^{-0.30}$ from the four-year value would actually land on $v(7)$, because the extra three years multiply by $e^{-0.30}$. Using the recovered $v(4)$ that way is consistent. Rebuilding from $v_0$ is what Part 3.2 did.

**2.** Another mix-up is half of $\\$60,000$ at seven years, $\\$30,000$, which is nearby but not $e^{-0.70} \\approx 0.4966$.

**3.** The recovered seven-year value is $\\$29,795.12$.

The recovered seven-year value is $\\$29,795.12$`,
    2: `The remaining share after four years is the factor $e^{-0.40}$ itself. Part 3.1 recovered $0.670320 = 67.03\\%$. Checking dollars, $40,219.20 / 60,000 = 0.67032$.

**1.** The trap is $40,219 / 60,000$ computed as $67\\%$ even, or as $40/60 = 66.67\\%$. The recovered share is $67.03\\%$.

**2.** Another mix-up is reporting the *lost* share $32.97\\%$ as if the claim asked how much was written off. The claim asks what remains.

**3.** The opposite verdict would need a different four-year factor. At $\\delta = 0.10$, it is $67.03\\%$.

The recovered remaining share is about $67.03\\%$`,
    3: `At a doubled rate $\\delta = 0.20$, four years carry $-0.80$. Part 3.3 recovered $v(4) \\approx 26,959.74$, which is still above $\\$25,000$.

The gap against the cutoff is

$$26,959.74 - 25,000 = 1,959.74$$

**1.** The trap is thinking "double the rate, half the remaining value." Half of $\\$40,219$ is $\\$20,110$, which would sit below $\\$25,000$. Remaining value is $e^{-\\delta t}$, and doubling $\\delta$ squares the four-year remaining factor: $(e^{-0.40})^{2} = e^{-0.80} \\approx 0.449$, which on $\\$60,000$ is $\\$26,960$, not $\\$20,110$.

**2.** The opposite verdict would hold if the cutoff were $\\$27,000$. The claim named $\\$25,000$.

The recovered doubled-rate four-year value is $\\$26,959.74$, which is not below $\\$25,000$`,
    4: `A fixed proportional rate takes the most dollars off the largest remaining value. Part 3.4 recovered a first-year decline of $\\$5,709.75$ against a fourth-year decline of $\\$4,229.89$. Then $5,709.75 > 4,229.89$.

**1.** Year 1 starts at $\\$60,000$. Year 4 starts at $v(3) \\approx 44,449$. The same $10\\%$ continuous rate takes more dollars off the larger base.

**2.** The trap is thinking later years "catch up" in dollars because the vans are older. Older vans are worth less, so the same rate takes fewer dollars.

**3.** This is the depreciation mirror of math-11-25 C, where growing funds add *more* dollars later. Here decaying fleets lose *fewer* dollars later.

The first-year decline is the larger dollar drop`,
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
console.log("25-26 done");
