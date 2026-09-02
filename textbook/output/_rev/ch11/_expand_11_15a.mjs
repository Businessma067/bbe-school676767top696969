import fs from "node:fs";

const path = "textbook/output/_rev/ch11/11_20.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function pack(letter, stmt, key, blocks) {
  const v = key ? "true" : "false";
  const V = key ? "True" : "False";
  return `**${letter}) ${stmt}.**  (${v})\n\n${blocks.filter(Boolean).join("\n\n")}\n\nso the statement is ${V}.`;
}
function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const patches = {
  "math-11-11": [
    pack("A", "The growth factor over the 6 years at 4.5% annual compounding is approximately 1.302253.", true, [
      `The trustee is rolling a deposit forward six years at 4.5% paid once a year. The growth factor is that six-year multiplier. Part 3.1 recovered $(1.045)^{6} \\approx 1.302253$. This letter is reading that factor, not discounting $\\$40,000$ yet.`,
      `**1.** The trap is $1 + 6 \\times 0.045 = 1.27$, simple interest over six years. That undershoots the recovered $1.302253$ because it ignores interest-on-interest.`,
      `**2.** Another mix-up is $(1.045)^{4}$ or $(1.045)^{5}$, stopping a year or two early. The stem is six years, and Part 3.1 used the exponent $6$.`,
      `**3.** Rounding $1.302253$ to $1.30$ would still be this factor. Rounding to $1.27$ would be the simple-interest companion. The claim keeps the six decimals that match the overview.`,
      `The recovered six-year factor is $1.302253$`,
    ]),
    pack("B", "The amount that would need to have been deposited 6 years ago is approximately \\$30,715.86.", true, [
      `The trustee wants today's $\\$40,000$ pulled back six years at 4.5% annual compounding. That original deposit is the target divided by the recovered growth factor. Part 3.2 already did the division and left $S_0 \\approx 30,715.86$. This letter is reading that present value, not rebuilding $(1.045)^{6}$.`,
      `**1.** A rushed solver who multiplied $\\$40,000$ by $1.302253$ would be rolling the target forward instead of back, and would land near $\\$52,090$. That is a future value of an already-future $\\$40,000$, which is not the question.`,
      `**2.** A solver who used $40,000 / 1.27 \\approx 31,496$ would be discounting at the simple-interest factor from letter A. The recovered deposit is $\\$30,715.86$, about $\\$780$ smaller, because compound growth is stronger and therefore needs less money up front.`,
      `**3.** The cents, $86$, match $40,000 / 1.302253$ as Part 3.2 rounded it. A table that stopped at $\\$30,716$ would still be this deposit. A table that printed $\\$32,000$ would not.`,
      `What would have to change for the opposite verdict is a different target, rate, or wait. Under $\\$40,000$ at 4.5% annual for six years, the recovered opening balance is $\\$30,715.86$.`,
      `Letter C will test this $\\$30,715.86$ against a $\\$32,000$ cutoff. Letter E will subtract it from $\\$40,000$ to name the interest. This letter only asks for the deposit itself.`,
      `The recovered deposit is about $\\$30,715.86$`,
    ]),
    pack("C", "This present value is less than \\$32,000.", true, [
      `The cutoff is a round $\\$32,000$ sitting next to the recovered deposit. Part 3.2 recovered $S_0 \\approx 30,715.86$. Part 3.3 already compared $30,715.86 < 32,000$. This letter is that comparison.`,
      `The gap against the cutoff is`,
      `$$32,000 - 30,715.86 = 1,284.14$$`,
      `so the present value sits about $\\$1,284$ below $\\$32,000$.`,
      `**1.** A rushed solver who used the simple-interest companion $\\$31,496$ from letter B would still sit below $\\$32,000$, so the verdict would happen to survive a wrong discount. The recovered figure is $\\$30,715.86$, which clears the cutoff from below by more.`,
      `**2.** Another mix-up is comparing $\\$40,000$ with $\\$32,000$ and calling the target itself the present value. The target is the future amount. The present value is the smaller opening deposit.`,
      `**3.** What would have to change for the opposite verdict is a recovered $S_0$ above $\\$32,000$, which would take a lower rate or a shorter wait. At 4.5% for six years, $S_0$ is $\\$30,715.86$.`,
      `The $\\$1,284$ gap is not a rounding of $\\$32,000$. Rounding $\\$30,715.86$ to the nearest thousand is $\\$31,000$, still below $\\$32,000$.`,
      `The recovered present value is $\\$30,715.86$, which is less than $\\$32,000$`,
    ]),
    pack("D", "If the rate had instead been 5.5%, the required present value would be higher than at 4.5%.", false, [
      `The trustee is asked what happens to the required opening deposit if the six-year rate rises from 4.5% to 5.5%. A present value is a fixed target divided by a growth factor. Raising the rate enlarges the denominator and shrinks the deposit. Part 3.4 already stated that direction. The new conversion is this letter's own arithmetic:`,
      `$$(1.055)^{6} \\approx 1.378843, \\qquad S_0 = \\frac{40,000}{1.378843} \\approx 29,010$$`,
      `Against the recovered $4.5\\%$ deposit of $\\$30,715.86$ that is`,
      `$$29,010 < 30,716$$`,
      `so the 5.5% path needs about $\\$1,706$ less up front, not more.`,
      `**1.** The trap is thinking "higher rate, more money," which is true of a future value on a *fixed* deposit. Here the *target* is fixed and the deposit is the unknown. Higher rate means less money today.`,
      `**2.** A rushed solver who multiplied $\\$30,715.86$ by $1.055/1.045$ would be scaling the deposit up with the rate, which is the wrong direction.`,
      `**3.** The opposite verdict would hold if the question were about the six-year *balance* on a fixed $\\$30,716$ deposit. That future value would indeed be higher at 5.5%. The claim is about the required present value of a fixed $\\$40,000$ target.`,
      `Faster growth means a smaller opening balance. The recovered 5.5% deposit is about $\\$29,010$, below $\\$30,716$`,
    ]),
    pack("E", "The total interest earned over the 6 years on this deposit would be approximately \\$9,284.14.", true, [
      `Interest is the target minus the original deposit. Part 3.2 recovered $S_0 \\approx 30,715.86$. Part 3.5 already subtracted and left $9,284.14$. This letter is reading that difference, not rebuilding the growth factor.`,
      `**1.** A rushed solver who used $40,000 - 32,000 = 8,000$ would be subtracting the cutoff from letter C instead of the recovered deposit. That undershoots the interest by about $\\$1,284$.`,
      `**2.** Another mix-up is $40,000 \\times 0.045 \\times 6 = 10,800$, simple interest on the *target* rather than compound interest on the opening deposit. Simple interest overstates the gain and also uses the wrong principal.`,
      `**3.** The cents, $14$, match $40,000 - 30,715.86$. They are the complement of the cents on the deposit. Letter B's $86$ and this letter's $14$ add to a dollar, as they must.`,
      `What would have to change for the opposite verdict is a different recovered $S_0$. Under the stem, interest is $\\$9,284.14$.`,
      `The recovered interest is $\\$9,284.14$`,
    ]),
  ],
};

for (const t of arr) {
  if (!patches[t.id]) continue;
  if (patches[t.id].length !== 5) throw new Error(t.id);
  t.tactical_explanations = patches[t.id];
}
fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  if (!patches[t.id]) continue;
  console.log(t.id, t.tactical_explanations.map(wc).join(", "));
}
