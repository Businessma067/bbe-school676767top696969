import fs from "node:fs";

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/\bthe statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer: " + last.slice(-80));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

function apply(path, extras) {
  const arr = JSON.parse(fs.readFileSync(path, "utf8"));
  for (const t of arr) {
    const ex = extras[t.id];
    if (!ex) continue;
    t.tactical_explanations = t.tactical_explanations.map((letter, i) => {
      if (!ex[i]) return letter;
      return insertBeforeClose(letter, ex[i]);
    });
  }
  fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
}

const p21 = "textbook/output/_rev/ch11/21_30.json";
apply(p21, {
  "math-11-21": {
    0: `Ms. Delgado's bakery deposit is a one-year continuous problem at a modest 5% quote. The recovered $\\$4,730.72$ is the dollar image of $e^{0.05} \\approx 1.051271$ applied to $\\$4,500$. A year-end book that printed $\\$4,725$ would be the annual companion from letter C, missing the $\\$5.72$ continuous extra. A book that printed $\\$4,680$ would be the 4% factor from letter E. Neither of those is this balance. Under the stem as written, one year of continuous 5% on $\\$4,500$ lands on $\\$4,730.72$, and that is the figure the claim names.`,
    1: `Interest of $\\$230.72$ is the gain, not the balance. Subtracting a round $\\$4,500$ from $\\$4,730.72$ leaves those same $72$ cents. Simple interest would have been $\\$225$, five dollars and seventy-two cents light, which is exactly letter D's continuous-versus-annual gap. The claim is not simple interest. It is the continuous gain already in Part 3.2. For the opposite verdict the deposit would have had to earn only $\\$225$, which is the once-a-year clock, not the stem.`,
    2: `The claimed $\\$4,735$ sits $\\$10$ above the true annual $\\$4,725$ and $\\$4$ above even the continuous ceiling $\\$4,730.72$. No 5% clock on $\\$4,500$ for one year can produce $\\$4,735$. Annual compounding is the weakest clock at a fixed nominal rate, so it cannot overshoot continuous compounding. The recovered annual figure is $\\$4,725.00$. Naming $\\$4,735$ is a slip above the ceiling, which is why the statement fails.`,
    3: `Five dollars and seventy-two cents is small next to $\\$4,500$, but it is the whole point of quoting continuous compounding instead of annual compounding at the same 5%. Part 3.4 already subtracted $4,730.72 - 4,725.00$. A baker who ignored that extra would book the annual clock and would be $\\$5.72$ light. The opposite verdict would need those two balances to match, which happens only at a 0% rate. At 5% the extra is $\\$5.72$.`,
    4: `Four decimal places on $e^{0.05}$ are $1.0513$, not $1.0400$. A factor of $1.0400$ is a 4% story, one full point below the stem. Rounding $1.051271$ to $1.05$ is two decimals. Rounding to $1.0513$ is four. No conventional rounding drops a hundredth and a half to land on $1.0400$. The recovered factor is $1.051271$.`,
  },
  "math-11-22": {
    0: `Six years of 8% continuous on $\\$3,200$ is the exponent $0.48$ and the recovered $\\$5,171.44$. Annual 8% would have left about $\\$5,077$. Simple 8% would have left $\\$4,736$. The extra above those weaker clocks is compound interest, already in Part 3.1. Later letters will compare this $\\$5,171.44$ with doubled three-year and twelve-year companions. This letter only names the six-year balance the roaster actually holds.`,
    1: `Twice $S(3)$ is a linear fantasy on an exponential path. After three years the fund is about $\\$4,068$. The next three years multiply that by $e^{0.24} \\approx 1.271$, producing $S(6) \\approx 5,171$, not $8,136$. The second three years are more valuable in dollars than a naive half-calendar split, but they are not a second copy of the three-year *balance*. Time enters as an exponent. Doubling $t$ squares the factor applied to $S_0$, and it does not double $S(3)$.`,
    2: `Twenty-nine dollars of overshoot on a $\\$2,000$ interest claim is a rounded-hundred companion, not the recovered cents. Part 3.3 kept $\\$1,971.44$. A treasurer who booked $\\$2,000$ would overstate six years of 8% continuous on $\\$3,200$ by about $\\$29$. Letter A's cents already fix the interest: $5,171.44 - 3,200.00 = 1,971.44$. Approximately $\\$2,000$ is the wrong rounding once the cents are on the page.`,
    3: `Twelve years at 8% continuous multiply the principal by $e^{0.96} \\approx 2.612$, so $S(12) \\approx 8,357$. Twice $S(6)$ would require a factor of $2 \\times 1.616 = 3.232$, which is $e^{1.173}$, about $14.7$ years at 8%, not $12$. The claim's "exactly double" is the same linear split as letter B, now on a longer calendar. Letter E reads the inequality in the true direction.`,
    4: `The ratio $S(12)/S(6)$ equals $e^{0.48} \\approx 1.616$, the same six-year factor again. Each extra six years multiply by $1.616$, not by $2$. That is why $\\$8,357$ sits about $\\$1,985$ below $2 \\times 5,171$. A six-year doubling would have needed $r = (\\ln 2)/6 \\approx 11.6\\%$. The stem is $8\\%$. Under 8% continuous, twelve years is less than double six years, which is the claim.`,
  },
});

console.log("padded 21-22");
