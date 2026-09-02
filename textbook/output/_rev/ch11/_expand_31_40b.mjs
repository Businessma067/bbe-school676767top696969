import fs from "node:fs";

const path = "textbook/output/_rev/ch11/31_40.json";
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
  "math-11-33": {
    0: `A continuous fee subtracts from the growth rate: $r_{\\mathrm{net}} = 0.09 - 0.02 = 0.07 = 7\\%$. Part 3.1 recovered that 7%. The claim is 11%, which adds the fee instead of subtracting it.

**1.** Adding the fee would describe a cost piled on top of growth, not a drag. A 2% drag on 9% is 7%, not 11%.

**2.** The trap is $9 + 2 = 11$. Fees reduce the net rate. They do not inflate it.

**3.** Every later letter uses $r_{\\mathrm{net}} = 7\\%$. Getting the sign of the fee right is what lets $S(6) \\approx 3,043,923$ come out as it does.

The recovered net rate is $7\\%$, not $11\\%$`,
    1: `Six years at the 7% net rate is $2,000,000 e^{0.42}$. Part 3.2 recovered $S(6) \\approx 3,043,923$. The claim is $\\$3,100,000$, about $\\$56,000$ too high.

**1.** A solver who used $2,000,000 e^{0.09 \\times 6}$ without the fee would get about $\\$3,430,000$, even higher. The claim sits between the net path and the gross path.

**2.** Another mix-up is $2,000,000 \\times 1.07^{6} \\approx 3,000,730$, annual 7%, nearby but not $\\$3,043,923$ and not $\\$3,100,000$.

**3.** The recovered six-year net value is about $\\$3,043,923$, not $\\$3,100,000$.

The recovered six-year value is about $\\$3,043,923$`,
    2: `Doubling time at the 7% net rate is $(\\ln 2)/0.07$. Part 3.3 recovered about $9.90$ years. The claim is $7.00$ years, which is closer to a Rule-of-72 guess on the *gross* 9% and ignores the fee.

The gap is

$$9.90 - 7.00 = 2.90$$

**1.** Rule of $72$ at $9\\%$ gives $8$ years. Rule of $72$ at $7\\%$ gives about $10.3$ years, closer to $9.90$. The claim's $7.00$ matches neither the net logarithm nor a careful Rule of $72$.

**2.** The opposite verdict would hold if the fee were zero and someone used $72/9 \\approx 8$, still not $7$. Under a 2% fee, the wait is $9.90$ years.

The recovered doubling time is about $9.90$ years, not $7.00$`,
    3: `At a $3.5\\%$ fee the net rate falls to $5.5\\%$. Part 3.5 recovered $S(6) \\approx 2,781,936.26$, so that half of the claim is right. Part 3.6 recovered a doubling time of about $12.60$ years, which is *longer*, not shorter.

The conjunction is therefore false: the value matches, but "shorten to 12.60 years" has the direction backwards.

**1.** A larger fee lowers $r_{\\mathrm{net}}$ and therefore *lengthens* $t_2 = (\\ln 2)/r_{\\mathrm{net}}$. From $9.90$ years at $7\\%$ net to $12.60$ years at $5.5\\%$ net is a stretch, not a shortening.

**2.** The trap is reading $12.60 < 9.90$ by mixing the 12.60 with the original false $7.00$ from letter C. Against the true $9.90$, $12.60$ is longer.

**3.** Both halves would need to be true. The second half is false, so the statement is false.

A heavier fee lengthens the doubling wait to about $12.60$ years; it does not shorten it`,
    4: `The net rate is $r_{\\mathrm{gross}} - r_{\\mathrm{fee}}$, so raising the fee lowers $r_{\\mathrm{net}}$ and therefore $e^{r_{\\mathrm{net}} t}$ at every $t > 0$. Part 3.2's $\\$3,043,923$ at a 2% fee against Part 3.5's $\\$2,781,936$ at a 3.5% fee is that drop.

**1.** A higher fee also lengthens doubling time: $12.60$ years against $9.90$. Both the net rate and the future value fall, and the wait to double rises.

**2.** "All else equal" means the same gross 9% and the same $\\$2,000,000$. Only the fee changes. The heavier fee is strictly worse for the investor at every future date.

**3.** The opposite verdict would need a fee that somehow raised the net rate. A fee is a drag. It cannot.

A higher management fee reduces both the net rate and the cumulative value`,
  },
  "math-11-34": {
    0: `Equating the two paths and taking logs isolates the crossover: $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$. The displayed formula is that same quotient. Part 2 already wrote it.

**1.** The rates add because A is growing while B is decaying. The combined $0.04 + 0.12 = 0.16$ is how fast the *ratio* $A/B$ grows.

**2.** The trap is $\\ln(B_0/A_0) / (r_A - \\delta_B)$, subtracting the decay, which would be wrong for a decaying B.

**3.** Letter B will plug in $\\ln 5 / 0.16$. This letter is the algebra.

The recovered inversion is $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$`,
    1: `The starting ratio is $250,000/50,000 = 5$ and the combined rate is $0.16$. Part 3.1 recovered $t \\approx 10.06$ years, at which both holdings equal about $\\$74,767.44$.

**1.** A solver who used $\\ln 5 / 0.04 = 40.2$ years would be ignoring B's decay. B is falling as A is rising, so they meet much sooner than A's own growth to $\\$250,000$ would take.

**2.** Checking $A(10.06) = 50,000 e^{0.04 \\times 10.06} \\approx 74,767$ matches $B(10.06) = 250,000 e^{-0.12 \\times 10.06}$.

**3.** The recovered crossover is about $10.06$ years at about $\\$74,767$.

The recovered crossover is about $10.06$ years at $\\$74,767.44$`,
    2: `Ten years is still before the $10.06$ crossover. Part 3.2 recovered $A(10) \\approx 74,591.23$ against $B(10) \\approx 75,298.55$. Then $74,591 < 75,298$.

A is still about $\\$707$ behind.

**1.** The trap is rounding $10.06$ down to $10$ and calling the crossover already done. Six hundredths of a year is about three weeks, and in those three weeks A still has to catch $\\$707$.

**2.** The opposite verdict would hold at $t = 10.06$ or later. The claim named $t = 10$ exactly.

At $t = 10$, Asset A is still behind Asset B`,
    3: `The ratio $A(t)/B(t)$ grows like $e^{0.16 t}$ from a start of $1/5$. Setting that ratio equal to $1$ recovers $t = \\ln 5 / 0.16 \\approx 10.06$, after which the ratio keeps climbing. A crossover is guaranteed.

**1.** Never-overtaking would need A's growth rate at or below zero while B stayed flat, or $r_A + \\delta_B \\le 0$, which would keep the ratio from reaching $1$. Here $r_A + \\delta_B = 0.16 > 0$.

**2.** Letter B already found the crossing date. This letter is the "never" wording, which that date refutes.

**3.** The opposite verdict would hold if B grew as well, at 4% or faster. B decays at 12%.

Asset A does overtake Asset B, at about $10.06$ years`,
    4: `After $t \\approx 10.06$ the same ratio stays above $1$ and keeps growing, because A grows while B decays. There is no second crossing.

**1.** Once A is ahead it stays ahead. The two paths are a rising exponential and a falling exponential. They can meet at most once.

**2.** Letter C showed that at $t = 10$ A is still behind. Letter B showed they meet at $10.06$. After that, E holds.

**3.** The opposite verdict would need B to start growing, or A to start decaying, after the crossover. The stem holds both trends.

For any time beyond the crossover, Asset A remains higher`,
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
console.log("33-34 done");
