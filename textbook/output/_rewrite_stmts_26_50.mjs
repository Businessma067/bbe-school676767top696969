/**
 * One-shot rewrite of weak/giveaway statements for math-11-26..50.
 * Run: node textbook/output/_rewrite_stmts_26_50.mjs
 */
import fs from "node:fs";

const PATH = new URL("../../src/data/math-ch11-financial.ts", import.meta.url);
let text = fs.readFileSync(PATH, "utf8");

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function patchTask(id, patch) {
  const start = text.indexOf(`id: \`${id}\``);
  if (start < 0) throw new Error("Task not found: " + id);
  // Find the next task id after this one
  const nextId = text.indexOf("\n    id: `math-11-", start + 10);
  if (nextId < 0) throw new Error("Next task boundary not found after " + id);
  const old = text.slice(start, nextId);
  const next = applyPatch(old, patch);
  text = text.slice(0, start) + next + text.slice(nextId);
}

function applyPatch(block, patch) {
  let b = block;
  if (patch.statements) {
    const sm = b.match(/statements: \[([\s\S]*?)\],\n    answer_key:/);
    if (!sm) throw new Error("statements block missing");
    const newStmts =
      "statements: [\n" +
      patch.statements.map((s) => `      \`${s}\`,`).join("\n") +
      "\n    ],\n    answer_key:";
    b = b.replace(/statements: \[[\s\S]*?\],\n    answer_key:/, newStmts);
  }
  if (patch.answer_key) {
    b = b.replace(
      /answer_key: \[[^\]]*\],/,
      `answer_key: [${patch.answer_key.map((x) => (x ? "true" : "false")).join(", ")}],`,
    );
  }
  if (patch.tactical_explanations) {
    const tm = b.match(
      /tactical_explanations: \[([\s\S]*?)\],\n    difficulty_level:/,
    );
    if (!tm) throw new Error("tactical_explanations missing");
    const newTac =
      "tactical_explanations: [\n" +
      patch.tactical_explanations.map((s) => `      \`${s}\`,`).join("\n") +
      "\n    ],\n    difficulty_level:";
    b = b.replace(
      /tactical_explanations: \[[\s\S]*?\],\n    difficulty_level:/,
      newTac,
    );
  }
  if (patch.part3) {
    const om = b.match(
      /solution_overview: `([\s\S]*?)`,\n  \},/,
    );
    if (!om) throw new Error("solution_overview missing");
    let ov = om[1];
    const p3 = ov.indexOf("**Part 3: Solve.**");
    if (p3 < 0) throw new Error("Part 3 missing");
    const head = ov.slice(0, p3);
    ov = head + "**Part 3: Solve.**\n\n" + patch.part3;
    b = b.replace(om[0], `solution_overview: \`${ov}\`,\n  },`);
  }
  return b;
}

const patches = {};

// ---------- 26 ----------
patches["math-11-26"] = {
  statements: [
    `The fleet's value after 4 years is approximately \\$40,219.20.`,
    `The fleet's value after 7 years is approximately \\$29,795.12.`,
    `After 4 years, the fleet retains more than 70% of its original value.`,
    `If the depreciation rate were instead doubled to 20%, the 4-year value would fall below \\$25,000.`,
    `The fleet's dollar decline during the first year alone is larger than its dollar decline during the fourth year alone.`,
  ],
  answer_key: [true, true, false, false, true],
  tactical_explanations: [
    `**A) The fleet's value after 4 years is approximately \\$40,219.20.**  (true)

Continuous depreciation follows $v(t) = v_0 e^{-\\delta t}$, so with $v_0 = 60,000$, $\\delta = 0.10$, and $t = 4$: $v(4) = 60,000 \\times e^{-0.40} \\approx 60,000 \\times 0.670320 = \\$40,219.20$. That matches the claimed value exactly, so the statement is True.`,
    `**B) The fleet's value after 7 years is approximately \\$29,795.12.**  (true)

Using the same formula at $t = 7$: $v(7) = 60,000 \\times e^{-0.10 \\times 7} = 60,000 \\times e^{-0.70} \\approx 60,000 \\times 0.496585 = \\$29,795.12$. This matches the claimed 7-year value, so the statement is True.`,
    `**C) After 4 years, the fleet retains more than 70% of its original value.**  (false)

The remaining fraction is $e^{-\\delta t} = e^{-0.40} \\approx 0.670320 \\approx 67.03\\%$, which is below the claimed $70\\%$ cutoff. False.`,
    `**D) If the depreciation rate were instead doubled to 20%, the 4-year value would fall below \\$25,000.**  (false)

Doubling $\\delta$ to $0.20$ gives $v(4)' = 60,000 \\times e^{-0.20 \\times 4} = 60,000 \\times e^{-0.80} \\approx 60,000 \\times 0.449329 = \\$26,959.74$, which stays above \\$25,000 rather than falling below it. So the statement is False.`,
    `**E) The fleet's dollar decline during the first year alone is larger than its dollar decline during the fourth year alone.**  (true)

Because continuous depreciation removes a fixed PROPORTION of the current value each year rather than a fixed dollar amount, the dollar decline is largest when the base value is largest (i.e., early on) and shrinks as the value itself shrinks. The first-year loss of about \\$5,709.75 is indeed larger than the fourth-year loss of about \\$4,229.89, confirming this pattern.

Year-1 remaining value:

$$v(1) = 60,000 \\times e^{-0.10} \\approx 60,000 \\times 0.904837 = \\$54,290.25$$

so the first-year drop is $60,000 - 54,290.25 = \\$5,709.75$.

Year-3 remaining value, just before year 4:

$$v(3) = 60,000 \\times e^{-0.30} \\approx 60,000 \\times 0.740818 = \\$44,449.09$$

Year-4 drop: $44,449.09 - 40,219.20 = \\$4,229.89$.

\\$5,709.75 > \\$4,229.89, so the first-year dollar decline is larger. True.`,
  ],
  part3: `**1.** $v(4) = 60,000\\times e^{-0.40} = 60,000\\times0.6703200 = \\$40,219.20$ ($\\approx 67.03\\%$ of original, below $70\\%$).

**2.** $v(7) = 60,000\\times e^{-0.70} = 60,000\\times0.4965853 = \\$29,795.12$.

**3.** At $\\delta = 0.20$: $v(4) = 60,000\\times e^{-0.80} = 60,000\\times0.4493290 = \\$26,959.74$, which is above $\\$25,000$, not below.

**4.** $v(1) = \\$54,290.25$, so year-$1$ loss $= \\$5,709.75$; $v(3) = \\$44,449.09$, so year-$4$ loss $= v(3)-v(4) = \\$4,229.89$.`,
};

// ---------- 27 ----------
patches["math-11-27"] = {
  statements: [
    `The doubling time at 5.5% is approximately 12.60 years.`,
    `After exactly 12 years of continuous compounding at 5.5%, the balance exceeds \\$35,000.`,
    `If the rate were instead 11%, the doubling time would also be approximately 12.60 years, unchanged.`,
    `After three full doubling periods, the balance would grow to 6 times the original principal.`,
    `A higher interest rate r gives a longer doubling time.`,
  ],
  answer_key: [true, false, false, false, false],
  tactical_explanations: [
    `**A) The doubling time at 5.5% is approximately 12.60 years.**  (true)

Continuous doubling solves $e^{rt} = 2$, so $t = \\ln(2)/r = 0.693147/0.055 \\approx 12.60$ years, matching the statement exactly. True.`,
    `**B) After exactly 12 years of continuous compounding at 5.5%, the balance exceeds \\$35,000.**  (false)

$S(12) = 18,000 \\times e^{0.055 \\times 12} = 18,000 \\times e^{0.66} \\approx 18,000 \\times 1.934792 = \\$34,826.26$, which is below $\\$35,000$, not above. False.`,
    `**C) If the rate were instead 11%, the doubling time would also be approximately 12.60 years, unchanged.**  (false)

Doubling time is inversely proportional to the rate, not independent of it: doubling $r$ to $0.11$ gives $t' = \\ln(2)/0.11 = 0.693147/0.11 \\approx 6.30$ years, which is half of 12.60, not unchanged. False.`,
    `**D) After three full doubling periods, the balance would grow to 6 times the original principal.**  (false)

Each doubling period multiplies the balance by 2 again, so three periods give a factor of $2^{3} = 8$, not 6: $18,000 \\times 8 = \\$144,000.00$, versus the $18,000 \\times 6 = \\$108,000.00$ implied by the claim. False.`,
    `**E) A higher interest rate r gives a longer doubling time.**  (false)

Since $t = \\ln(2)/r$ has $r$ in the denominator, a larger $r$ gives a smaller (shorter) doubling time, not a longer one — exactly why raising $r$ from $5.5\\%$ to $11\\%$ in (C) cut $t$ from $12.60$ to $6.30$ years rather than lengthening it. False.`,
  ],
  part3: `**1.** $\\ln(2) = 0.693147$.

**2.** $t = 0.693147 / 0.055 = 12.6027$ years.

**3.** $S(12) = 18,000 \\times e^{0.66} \\approx 18,000 \\times 1.934792 = \\$34,826.26$, below $\\$35,000$.

**4.** At $11\\%$: $t = 0.693147 / 0.11 = 6.3013$ years, which is half of $12.6027$, not unchanged.

**5.** After $3$ doubling periods ($37.8080$ years), the growth factor is $2 \\times 2 \\times 2 = 8$, so $S = 18,000 \\times 8 = \\$144,000.00$, not $6 \\times 18,000 = \\$108,000.00$.`,
};

// ---------- 28 ----------
patches["math-11-28"] = {
  statements: [
    `Setting $v_0 \\times e^{-\\delta t} = 0.40 v_0$ and solving gives t = ln(2.5)/δ.`,
    `The press will have lost 60% of its value after approximately 5.09 years.`,
    `When the press has lost 60% of its original value, its remaining value is less than \\$45,000.`,
    `If the depreciation rate were instead 9%, the time to lose 60% of value would double to approximately 10.18 years.`,
    `The time to lose 80% of the value is shorter than the time to lose 60% of the value.`,
  ],
  answer_key: [true, true, false, true, false],
  tactical_explanations: [
    `**A) Setting $v_0 \\times e^{-\\delta t} = 0.40 v_0$ and solving gives t = ln(2.5)/δ.**  (true)

Cancel $v_0$ to get $e^{-\\delta t} = 0.40$, then take natural logs: $\\delta t = -\\ln(0.40) = \\ln(1/0.40) = \\ln(2.5)$, so $t = \\ln(2.5)/\\delta$. That is exactly the claimed formula, so True.`,
    `**B) The press will have lost 60% of its value after approximately 5.09 years.**  (true)

Plugging $\\delta = 0.18$ into that formula: $t = \\ln(2.5)/0.18 = 0.916291/0.18 \\approx 5.09$ years, matching the statement exactly. True.`,
    `**C) When the press has lost 60% of its original value, its remaining value is less than \\$45,000.**  (false)

Losing $60\\%$ means retaining $40\\%$: $120,000 \\times 0.40 = \\$48,000.00$, which is above $\\$45,000$, not below. False.`,
    `**D) If the depreciation rate were instead 9%, the time to lose 60% of value would double to approximately 10.18 years.**  (true)

Since $t = \\ln(2.5)/\\delta$ has $\\delta$ in the denominator, halving $\\delta$ from $18\\%$ to $9\\%$ gives $t' = 0.916291/0.09 \\approx 10.18$ years, and $2 \\times 5.09 = 10.18$, confirming the time doubles. True.`,
    `**E) The time to lose 80% of the value is shorter than the time to lose 60% of the value.**  (false)

Reaching only $20\\%$ remaining (an $80\\%$ loss) requires $t_{80} = \\ln(5)/0.18 = 1.609438/0.18 \\approx 8.94$ years, which is longer than the $5.09$ years needed for a $60\\%$ loss, not shorter. False.`,
  ],
  part3: `**1.** $1/0.40 = 2.5$, and $\\ln(2.5) = 0.916291$.

**2.** $t = 0.916291 / 0.18 = 5.0905$ years.

**3.** Remaining value at $60\\%$ loss: $120,000 \\times 0.40 = \\$48,000.00$, which is above $\\$45,000$.

**4.** At $\\delta = 0.09$: $t = 0.916291 / 0.09 = 10.1810$ years, which is indeed double $5.0905$ years, since halving $\\delta$ doubles $t$.

**5.** For $80\\%$ loss (retain $20\\%$): $1/0.20 = 5$, $\\ln(5) = 1.609438$.

**6.** $t = 1.609438 / 0.18 = 8.9413$ years, which is longer than $5.0905$ years, not shorter.`,
};

// ---------- 31 ----------
patches["math-11-31"] = {
  statements: [
    `The implied nominal continuously-compounded rate is approximately 6.67%.`,
    `Using this implied rate, the projected value 5 years from the start, 2 years beyond the observed data, is approximately \\$39,078.52.`,
    `A naive straight-line projection - extending the average dollar increase observed over the first 3 years for 2 more years - gives the same result as the correct exponential projection.`,
    `At the implied rate, the fund's value would double from its original \\$28,000 in approximately 12.40 years.`,
    `If the implied rate had instead been exactly 6.00%, the 3-year value would have exceeded the actual observed \\$34,200.00.`,
  ],
  answer_key: [true, true, false, false, false],
  tactical_explanations: [
    `**A) The implied nominal continuously-compounded rate is approximately 6.67%.**  (true)

Inverting $S(t) = S_0 e^{rt}$ gives $r = \\ln(S(t)/S_0)/t = \\ln(34,200/28,000)/3 = \\ln(1.221429)/3 \\approx 0.200023/3 \\approx 6.67\\%$, matching the statement exactly. True.`,
    `**B) Using this implied rate, the projected value 5 years from the start, 2 years beyond the observed data, is approximately \\$39,078.52.**  (true)

Applying the implied rate for the full 5 years: $S(5) = 28,000 \\times e^{0.066674 \\times 5} = 28,000 \\times e^{0.333370} \\approx 28,000 \\times 1.395661 = \\$39,078.52$, matching the statement exactly. True.`,
    `**C) A naive straight-line projection - extending the average dollar increase observed over the first 3 years for 2 more years - gives the same result as the correct exponential projection.**  (false)

The naive straight-line projection assumes the DOLLAR amount added each year stays constant, giving \\$38,333.33, whereas the correct exponential projection assumes the PERCENTAGE growth rate stays constant, giving the higher figure of \\$39,078.52. Because exponential growth compounds on an ever-larger base, the two methods diverge once projected beyond the observed data, and they do not match.

Average dollar gain over the first 3 years:

$$\\frac{34,200 - 28,000}{3} = \\frac{6,200}{3} \\approx \\$2,066.67\\mathrm{ per year}$$

Linear extension two more years:

$$34,200 + 2 \\times 2,066.67 = \\$38,333.33$$

\\$38,333.33 is not \\$39,078.52. False.`,
    `**D) At the implied rate, the fund's value would double from its original \\$28,000 in approximately 12.40 years.**  (false)

$t_2 = \\ln(2)/0.066674 = 0.693147/0.066674 \\approx 10.40$ years, not 12.40 years — the stated figure overstates the true doubling time by exactly 2 years. False.`,
    `**E) If the implied rate had instead been exactly 6.00%, the 3-year value would have exceeded the actual observed \\$34,200.00.**  (false)

At $r = 6.00\\%$: $S(3) = 28,000 \\times e^{0.18} \\approx 28,000 \\times 1.197217 = \\$33,522.09$, which is LOWER than the observed $\\$34,200.00$, not higher — a smaller assumed growth rate cannot explain a larger observed increase. False.`,
  ],
  part3: `**1.** $r = \\ln(34,200/28,000)/3 = \\ln(1.221429)/3 = 0.200034/3 = 0.066674 \\approx 6.67\\%$.

**2.** $S(5) = 28,000 \\times e^{0.066674 \\times 5} = 28,000 \\times e^{0.333368} = 28,000 \\times 1.395661 = \\$39,078.52$.

**3.** Average dollar increase over $3$ years: $(34,200 - 28,000)/3 = \\$2,066.67$/year.

**4.** Naive linear projection: $34,200 + 2 \\times 2,066.67 = \\$38,333.33$, which does not equal $\\$39,078.52$.

**5.** Doubling time: $\\ln(2)/0.066674 = 0.693147/0.066674 \\approx 10.3961$ years.

**6.** At $r = 6.00\\%$: $S(3) = 28,000 \\times e^{0.18} = 28,000 \\times 1.197217 = \\$33,522.09$, which is LOWER than the actual observed $\\$34,200.00$, not higher.`,
};

// ---------- 32 ----------
patches["math-11-32"] = {
  statements: [
    `Bank X's 2-year value is approximately \\$69,200.00.`,
    `Bank Y's 2-year value is approximately \\$68,851.32.`,
    `Bank Z produces a higher 2-year value than both Bank X and Bank Y.`,
    `Despite compounding continuously, Bank X's value is actually the lowest of the three offers.`,
    `If Bank X's nominal rate were instead also raised to 7.0%, while keeping continuous compounding, its 2-year value would exceed Bank Z's value.`,
  ],
  answer_key: [false, true, true, true, true],
  tactical_explanations: [
    `**A) Bank X's 2-year value is approximately \\$69,200.00.**  (false)

Bank X compounds continuously at $6.8\\%$ for $2$ years: $S_X = 60,000 \\times e^{0.068 \\times 2} = 60,000 \\times e^{0.136} \\approx 60,000 \\times 1.145682 = \\$68,740.91$, not $\\$69,200.00$. False.`,
    `**B) Bank Y's 2-year value is approximately \\$68,851.32.**  (true)

Bank Y compounds monthly at $6.9\\%$, so $i = 0.069/12 = 0.00575$ over $24$ periods: $S_Y = 60,000 \\times (1.00575)^{24} \\approx 60,000 \\times 1.147522 = \\$68,851.32$. True.`,
    `**C) Bank Z produces a higher 2-year value than both Bank X and Bank Y.**  (true)

Bank Z: $S_Z = 60,000 \\times (1.0175)^{8} \\approx 60,000 \\times 1.148882 = \\$68,932.91$. Comparing all three, $\\$68,740.91 < \\$68,851.32 < \\$68,932.91$, so Z is highest. True.`,
    `**D) Despite compounding continuously, Bank X's value is actually the lowest of the three offers.**  (true)

The continuous-compounding ceiling only applies when comparing different frequencies at the SAME nominal rate; here the three banks quote different rates, and Bank Z's higher $7.0\\%$ rate more than offsets its less-frequent compounding, so Bank X's value at the lowest rate ($6.8\\%$) does end up smallest of the three. True.`,
    `**E) If Bank X's nominal rate were instead also raised to 7.0%, while keeping continuous compounding, its 2-year value would exceed Bank Z's value.**  (true)

At a matched $7.0\\%$ rate, $S_X' = 60,000 \\times e^{0.07 \\times 2} = 60,000 \\times e^{0.14} \\approx 60,000 \\times 1.150274 = \\$69,016.44$, which exceeds Bank Z's $\\$68,932.91$: once the rates match, continuous compounding does beat quarterly. True.`,
  ],
  part3: `**1.** $S_X = 60,000 \\times e^{0.068 \\times 2} = 60,000 \\times e^{0.136} = 60,000 \\times 1.145682 = \\$68,740.91$, not $\\$69,200.00$.

**2.** $S_Y = 60,000 \\times (1 + 0.069/12)^{24} = 60,000 \\times (1.00575)^{24} = 60,000 \\times 1.147522 = \\$68,851.32$.

**3.** $S_Z = 60,000 \\times (1 + 0.070/4)^{8} = 60,000 \\times (1.0175)^{8} = 60,000 \\times 1.148882 = \\$68,932.91$.

**4.** Ordering: $\\$68,740.91$ (X) $< \\$68,851.32$ (Y) $< \\$68,932.91$ (Z), so Bank Z is highest and Bank X is lowest.

**5.** If Bank X's rate were $7.0\\%$: $S_X' = 60,000 \\times e^{0.14} = 60,000 \\times 1.150274 = \\$69,016.44$, which exceeds Bank Z's $\\$68,932.91$.`,
};

// ---------- 33 ----------
patches["math-11-33"] = {
  statements: [
    `The net continuous growth rate, combining the 9% gross return and the 2% fee drag, is 11% per year.`,
    `After 6 years, the net asset value is approximately \\$3,100,000.00.`,
    `At this net rate, the fund's value would double in approximately 7.00 years.`,
    `If the management fee instead rose to 3.5%, the doubling time would shorten compared with the original 2% fee.`,
    `A higher management fee always reduces both the net growth rate and the fund's cumulative value at any future date, compared to a lower fee, all else equal.`,
  ],
  answer_key: [false, false, false, false, true],
  tactical_explanations: [
    `**A) The net continuous growth rate, combining the 9% gross return and the 2% fee drag, is 11% per year.**  (false)

The fee drag must be subtracted from the gross rate, not added: $r_{\\mathrm{net}} = 0.09 - 0.02 = 0.07 = 7\\%$, not 11%. False.`,
    `**B) After 6 years, the net asset value is approximately \\$3,100,000.00.**  (false)

Using the $7\\%$ net rate for $6$ years: $S(6) = 2,000,000 \\times e^{0.07 \\times 6} = 2,000,000 \\times e^{0.42} \\approx 2,000,000 \\times 1.521962 = \\$3,043,923.11$, not \\$3,100,000.00. False.`,
    `**C) At this net rate, the fund's value would double in approximately 7.00 years.**  (false)

The correct doubling time at the $7\\%$ net rate is $t_2 = \\ln(2)/0.07 = 0.693147/0.07 \\approx 9.90$ years, not 7.00 years — the stated figure understates the true doubling time by nearly 3 years. False.`,
    `**D) If the management fee instead rose to 3.5%, the doubling time would shorten compared with the original 2% fee.**  (false)

New net rate $0.09 - 0.035 = 0.055$, so $t_2' = \\ln(2)/0.055 \\approx 12.60$ years, which is LONGER than the original $\\ln(2)/0.07 \\approx 9.90$ years, not shorter — a smaller net growth rate always takes MORE time to double. False.`,
    `**E) A higher management fee always reduces both the net growth rate and the fund's cumulative value at any future date, compared to a lower fee, all else equal.**  (true)

Since $r_{\\mathrm{net}} = r_{\\mathrm{gross}} - r_{\\mathrm{fee}}$, a higher fee mechanically lowers the net rate, and since $e^{rt}$ is strictly increasing in $r$, a lower net rate produces a smaller value at every future date. True.`,
  ],
  part3: `**1.** $r_{\\mathrm{net}} = 0.09 - 0.02 = 0.07 = 7\\%$.

**2.** $S(6) = 2,000,000 \\times e^{0.07 \\times 6} = 2,000,000 \\times e^{0.42} = 2,000,000 \\times 1.521962 = \\$3,043,923.11$.

**3.** Doubling time: $\\ln(2)/0.07 = 0.693147/0.07 \\approx 9.9021$ years.

**4.** At a $3.5\\%$ fee: $r_{\\mathrm{net}}' = 0.09 - 0.035 = 0.055$.

**5.** $S(6) = 2,000,000 \\times e^{0.33} = 2,000,000 \\times 1.390968 = \\$2,781,936.26$.

**6.** Doubling time: $\\ln(2)/0.055 \\approx 12.6027$ years, which is LONGER than $9.9021$ years, not shorter.

**7.** Comparing: a lower net rate ($5.5\\%$ vs $7\\%$) always produces both a smaller $6$-year value and a longer doubling time.
`,
};

// ---------- 34 ----------
patches["math-11-34"] = {
  statements: [
    `Setting $A_0 e^{r_A t} = B_0 e^{-\\delta_B t}$ and solving for t gives $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$.`,
    `The crossover occurs before year 10.`,
    `At exactly t = 10 years, Asset A is already worth more than Asset B.`,
    `Asset A can never actually overtake Asset B in value, no matter how long both trends continue.`,
    `For any time beyond the crossover point, Asset A's value remains higher than Asset B's value.`,
  ],
  answer_key: [true, false, false, false, true],
  tactical_explanations: [
    `**A) Setting $A_0 e^{r_A t} = B_0 e^{-\\delta_B t}$ and solving for t gives $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$.**  (true)

Dividing both sides by $A_0 e^{-\\delta_B t}$ gives $B_0/A_0 = e^{(r_A + \\delta_B)t}$, and taking natural logs gives exactly $t = \\ln(B_0/A_0)/(r_A + \\delta_B)$, matching the claimed closed form. True.`,
    `**B) The crossover occurs before year 10.**  (false)

Insert $B_0/A_0 = 5$ and $r_A + \\delta_B = 0.16$: $t = \\ln(5)/0.16 = 1.609438/0.16 \\approx 10.06$ years, which is after year 10, not before. False.`,
    `**C) At exactly t = 10 years, Asset A is already worth more than Asset B.**  (false)

At t = 10 years, Asset A is worth approximately \\$74,591.23 while Asset B is still worth approximately \\$75,298.55 - Asset B is still ahead at this point, not Asset A, which is exactly why the crossover has not yet occurred by year 10 and instead happens slightly later, at about 10.06 years.

$$A(10) = 50,000 \\times e^{0.40} \\approx 50,000 \\times 1.491825 = \\$74,591.23$$

$$B(10) = 250,000 \\times e^{-1.20} \\approx 250,000 \\times 0.301194 = \\$75,298.55$$

\\$74,591.23 < \\$75,298.55, so A has not yet overtaken B at t = 10. False.`,
    `**D) Asset A can never actually overtake Asset B in value, no matter how long both trends continue.**  (false)

The ratio $A(t)/B(t) = 0.2\\, e^{0.16t}$ grows without bound as $t$ increases, so it must eventually cross $1$ no matter how large the initial gap — exactly what the calculated crossover time of $t \\approx 10.06$ years confirms. False.`,
    `**E) For any time beyond the crossover point, Asset A's value remains higher than Asset B's value.**  (true)

Once $A(t)$ exceeds $B(t)$ at the crossover, $A$ keeps growing while $B$ keeps shrinking, so the ratio $A(t)/B(t) = 0.2\\, e^{0.16t}$ only keeps rising beyond $t \\approx 10.06$, meaning Asset A stays ahead indefinitely. True.`,
  ],
  part3: `**1.** $t = \\ln(5)/0.16 = 10.0590$ years; at crossover both equal $\\$74,767.44$. The crossover is after year 10, not before.

**2.** At $t = 10$: $A(10) = 50,000 \\times e^{0.40} = \\$74,591.23$ and $B(10) = 250,000 \\times e^{-1.20} = \\$75,298.55$, so A has not yet overtaken B — consistent with crossover at $10.06$ years.

**3.** The ratio $A(t)/B(t) = (A_0/B_0)\\times e^{(r_A + \\delta_B)t}$ grows without bound, so a crossover is guaranteed; beyond that point A stays ahead.
`,
};

// ---------- 35 ----------
patches["math-11-35"] = {
  statements: [
    `The annual-compounding value is exactly \\$42,800.00.`,
    `The quarterly-compounding value is approximately \\$42,874.36, and the monthly-compounding value is approximately \\$42,891.60.`,
    `The four values, from smallest to largest, are ordered annual < quarterly < monthly < continuous.`,
    `The dollar gap between monthly and quarterly compounding is smaller than the dollar gap between continuous and monthly compounding.`,
    `No compounding schedule at this same 7% nominal rate can produce a 1-year value exceeding continuous compounding.`,
  ],
  answer_key: [true, true, true, false, true],
  tactical_explanations: [
    `**A) The annual-compounding value is exactly \\$42,800.00.**  (true)

$S_1 = 40,000 \\times 1.07 = \\$42,800.00$, matching the statement exactly and exact, not approximate. True.`,
    `**B) The quarterly-compounding value is approximately \\$42,874.36, and the monthly-compounding value is approximately \\$42,891.60.**  (true)

Quarterly, with $i = 0.07/4 = 0.0175$ over $4$ periods: $S_4 = 40,000 \\times (1.0175)^{4} \\approx 40,000 \\times 1.071859 = \\$42,874.36$. Monthly, with $i = 0.07/12 = 0.0058333$ over $12$ periods: $S_{12} = 40,000 \\times (1.0058333)^{12} \\approx 40,000 \\times 1.072290 = \\$42,891.60$. Both figures match. True.`,
    `**C) The four values, from smallest to largest, are ordered annual < quarterly < monthly < continuous.**  (true)

The continuous value is $S_{\\infty} = 40,000 \\times e^{0.07} \\approx 40,000 \\times 1.072508 = \\$42,900.33$. Listing all four, $\\$42,800.00 < \\$42,874.36 < \\$42,891.60 < \\$42,900.33$, confirms they are strictly increasing in exactly this order. True.`,
    `**D) The dollar gap between monthly and quarterly compounding is smaller than the dollar gap between continuous and monthly compounding.**  (false)

The monthly-versus-quarterly gap is $42,891.60 - 42,874.36 = \\$17.24$, which is actually LARGER than the continuous-versus-monthly gap of $42,900.33 - 42,891.60 = \\$8.72$, since increments shrink as $(1+r/n)^{n}$ converges toward $e^{r}$. False.`,
    `**E) No compounding schedule at this same 7% nominal rate can produce a 1-year value exceeding continuous compounding.**  (true)

Since $(1+r/n)^{n} \\to e^{r}$ as $n \\to \\infty$ and the sequence is strictly increasing in $n$, the continuous value $Pe^{r}$ is the supremum that no finite-frequency schedule at the same nominal rate can ever reach or exceed. True.`,
  ],
  part3: `**1.** Annual: $S = 40,000 \\times 1.07 = \\$42,800.00$.

**2.** Quarterly: $S = 40,000 \\times (1.0175)^{4} = 40,000 \\times 1.0718590 = \\$42,874.36$.

**3.** Monthly: $S = 40,000 \\times (1.0058333)^{12} = 40,000 \\times 1.0722901 = \\$42,891.60$.

**4.** Continuous: $S = 40,000 \\times e^{0.07} = 40,000 \\times 1.0725082 = \\$42,900.33$.

**5.** Gap (monthly, quarterly): $42,891.60 - 42,874.36 = \\$17.24$.

**6.** Gap (continuous, monthly): $42,900.33 - 42,891.60 = \\$8.72$; the second gap is SMALLER, not larger. Continuous compounding is the ceiling at this nominal rate.
`,
};

// ---------- 37 ----------
patches["math-11-37"] = {
  statements: [
    `Revenue at the end of year 4 is approximately \\$2,685,284.46.`,
    `Revenue at the end of year 7 is approximately \\$3,027,649.77.`,
    `The single constant continuous rate that would have produced the same 7-year outcome starting from \\$1,800,000 is approximately 7.43%.`,
    `The effective 7-year rate equals the plain, unweighted average of the two phase rates.`,
    `If the two phases had instead occurred in the opposite order - 3 years at 4% followed by 4 years at 10% - the year-7 revenue would have come out exactly the same.`,
  ],
  answer_key: [true, true, true, false, true],
  tactical_explanations: [
    `**A) Revenue at the end of year 4 is approximately \\$2,685,284.46.**  (true)

$S(4) = 1,800,000 \\times e^{0.40} = \\$2,685,284.46$, matching the statement exactly.

Phase 1 only: $r_1 = 0.10$ for 4 years.

$$S(4) = 1,800,000 \\times e^{0.10 \\times 4} = 1,800,000 \\times e^{0.40}$$

$$e^{0.40} \\approx 1.491825$$

$$1,800,000 \\times 1.491825 = \\$2,685,284$$

True.`,
    `**B) Revenue at the end of year 7 is approximately \\$3,027,649.77.**  (true)

Applying the second phase's factor to the year-4 balance gives $S(7) = 2,685,284.46 \\times e^{0.12} = \\$3,027,649.77$, matching the statement exactly.

Phase 2 multiplies the year-4 stock by $e^{0.04 \\times 3} = e^{0.12}$:

$$S(7) = 2,685,284.46 \\times e^{0.12}$$

$$e^{0.12} \\approx 1.127497$$

$$2,685,284.46 \\times 1.127497 = \\$3,027,650$$

(rounded to the claimed cent). True.`,
    `**C) The single constant continuous rate that would have produced the same 7-year outcome starting from \\$1,800,000 is approximately 7.43%.**  (true)

Because $S(7) = S_0 \\times e^{r_1 t_1+r_2 t_2}$, the single constant rate reproducing the same 7-year result solves $r_{\\mathrm{eff}} = (r_1 t_1+r_2 t_2)/7 = 0.52/7 \\approx 7.43\\%$, matching the statement exactly.

Combined exponent:

$$r_1 t_1 + r_2 t_2 = 0.10 \\times 4 + 0.04 \\times 3 = 0.40 + 0.12 = 0.52$$

$$r_{\\mathrm{eff}} = 0.52 / 7 = 0.074286 \\approx 7.43\\%$$

True.`,
    `**D) The effective 7-year rate equals the plain, unweighted average of the two phase rates.**  (false)

The correct effective rate is the TIME-WEIGHTED average $(10\\% \\times 4 + 4\\% \\times 3)/7 = 7.43\\%$, while the plain unweighted average is $(10\\% + 4\\%)/2 = 7.00\\%$. These are not equal; the longer high-growth phase pulls the effective rate above the simple average. False.`,
    `**E) If the two phases had instead occurred in the opposite order - 3 years at 4% followed by 4 years at 10% - the year-7 revenue would have come out exactly the same.**  (true)

Since $S_0 \\times e^{r_1 t_1} e^{r_2 t_2} = S_0 \\times e^{r_1 t_1+r_2 t_2}$, and ordinary multiplication is commutative, the combined exponent $r_1 t_1+r_2 t_2 = 0.52$ is exactly the same regardless of which phase happens first. Reversing the order of the two phases therefore produces the identical year-7 revenue of \\$3,027,649.77, exactly as stated.

$$e^{0.12} \\times e^{0.40} = e^{0.52} = e^{0.40} \\times e^{0.12}$$

Same terminal factor, same \\$3,027,649.77. True.`,
  ],
  part3: `**1.** $S(4) = 1,800,000 \\times e^{0.10 \\times 4} = 1,800,000 \\times e^{0.40} = 1,800,000 \\times 1.491825 = \\$2,685,284.46$.

**2.** $S(7) = S(4) \\times e^{0.04 \\times 3} = 2,685,284.46 \\times e^{0.12} = 2,685,284.46 \\times 1.127497 = \\$3,027,649.77$.

**3.** Combined exponent: $r_1 t_1 + r_2 t_2 = (0.10 \\times 4) + (0.04 \\times 3) = 0.40 + 0.12 = 0.52$.

**4.** $r_{\\mathrm{eff}} = 0.52/7 = 0.074286 \\approx 7.43\\%$ (the TIME-WEIGHTED average).

**5.** Plain (unweighted) average: $(0.10 + 0.04)/2 = 0.07 = 7.00\\%$, which does not equal $7.43\\%$.
`,
};

// ---------- 39 ----------
patches["math-11-39"] = {
  statements: [
    `The doubling time at 6.5% is approximately 10.66 years.`,
    `The tripling time at 6.5% is approximately 16.90 years.`,
    `The quadrupling time is exactly twice the doubling time.`,
    `At the quadrupling time, the fund's value exceeds \\$50,000.`,
    `The tripling time must be exactly 1.5 times the doubling time.`,
  ],
  answer_key: [true, true, true, false, false],
  tactical_explanations: [
    `**A) The doubling time at 6.5% is approximately 10.66 years.**  (true)

$t_2 = \\ln(2)/0.065 = 0.693147/0.065 \\approx 10.66$ years, matching the statement exactly. True.`,
    `**B) The tripling time at 6.5% is approximately 16.90 years.**  (true)

$t_3 = \\ln(3)/0.065 = 1.098612/0.065 \\approx 16.90$ years, matching the statement exactly. True.`,
    `**C) The quadrupling time is exactly twice the doubling time.**  (true)

$t_4 = \\ln(4)/r$ and $t_2 = \\ln(2)/r$, so $t_4/t_2 = \\ln(4)/\\ln(2) = 2\\ln(2)/\\ln(2) = 2$ exactly, independent of $r$. True.`,
    `**D) At the quadrupling time, the fund's value exceeds \\$50,000.**  (false)

Four times the original principal is $12,000 \\times 4 = \\$48,000.00$, which is below $\\$50,000$, not above. False.`,
    `**E) The tripling time must be exactly 1.5 times the doubling time.**  (false)

Since $t = \\ln(M)/r$, the ratio of tripling to doubling time is $\\ln(3)/\\ln(2) \\approx 1.58496$, not the naive multiplier ratio $3/2 = 1.5$ — close but not equal. False.`,
  ],
  part3: `**1.** Doubling: $t = \\ln(2)/0.065 = 0.693147/0.065 \\approx 10.6638$ years.

**2.** Tripling: $t = \\ln(3)/0.065 = 1.098612/0.065 \\approx 16.9017$ years.

**3.** Quadrupling: $t = \\ln(4)/0.065 = 1.386294/0.065 \\approx 21.3276$ years.

**4.** Twice the doubling time: $2 \\times 10.6638 = 21.3276$ years, which exactly equals the quadrupling time, since $\\ln(4) = \\ln(2^{2}) = 2\\ln(2)$.

**5.** Value at quadrupling time: $12,000 \\times 4 = \\$48,000.00$, below $\\$50,000$. Ratio of tripling to doubling time: $\\ln(3)/\\ln(2) \\approx 1.5850$, not $1.5$.
`,
};

// ---------- 40 ----------
patches["math-11-40"] = {
  statements: [
    `Asset A's value after 5 years is approximately \\$202,478.82.`,
    `Asset B's value after 5 years is approximately \\$140,278.19.`,
    `Asset C's value after 5 years is approximately \\$130,000.00.`,
    `The combined portfolio value after 5 years is less than the sum of the three original principals.`,
    `If Asset B's rate had instead been a continuous growth rate of the same 9% magnitude, its 5-year value would exceed \\$340,000.00.`,
  ],
  answer_key: [true, true, false, false, true],
  tactical_explanations: [
    `**A) Asset A's value after 5 years is approximately \\$202,478.82.**  (true)

$A(5) = 150,000 \\times e^{0.06 \\times 5} = 150,000 \\times e^{0.30} \\approx 150,000 \\times 1.349859 = \\$202,478.82$. True.`,
    `**B) Asset B's value after 5 years is approximately \\$140,278.19.**  (true)

$B$ depreciates: $B(5) = 220,000 \\times e^{-0.09 \\times 5} = 220,000 \\times e^{-0.45} \\approx 220,000 \\times 0.637628 = \\$140,278.19$. True.`,
    `**C) Asset C's value after 5 years is approximately \\$130,000.00.**  (false)

Chaining the two growth phases correctly gives $C(3) = \\$127,124.92$ and then $C(5) = C(3) \\times e^{0.06} = \\$134,985.88$, not \\$130,000.00 - the stated figure understates the true value by about \\$4,985.88.

First 3 years at 8%:

$$C(3) = 100,000 \\times e^{0.08 \\times 3} = 100,000 \\times e^{0.24}$$

$$e^{0.24} \\approx 1.271249$$

$$C(3) \\approx \\$127,124.92$$

Then 2 years at 3%:

$$C(5) = 127,124.92 \\times e^{0.03 \\times 2} = 127,124.92 \\times e^{0.06}$$

$$e^{0.06} \\approx 1.061837$$

$$C(5) \\approx \\$134,985.88$$

Not \\$130,000. False.`,
    `**D) The combined portfolio value after 5 years is less than the sum of the three original principals.**  (false)

Adding the three 5-year values gives $202,478.82 + 140,278.19 + 134,985.88 = \\$477,742.89$, while the principals sum to $\\$470,000.00$. The portfolio total is MORE than the principal sum, not less — growth in A and C outweighs B's shrinkage. False.`,
    `**E) If Asset B's rate had instead been a continuous growth rate of the same 9% magnitude, its 5-year value would exceed \\$340,000.00.**  (true)

Replacing Asset B's 9% depreciation with a 9% continuous growth rate over the same 5 years gives $220,000 \\times e^{0.45} \\approx \\$345,028.68$, which does exceed \\$340,000.00, illustrating just how large the swing is between shrinking and growing at the same magnitude rate over a multi-year horizon.

$$B(5)' = 220,000 \\times e^{0.09 \\times 5} = 220,000 \\times e^{0.45}$$

$$e^{0.45} \\approx 1.568312$$

$$220,000 \\times 1.568312 = \\$345,028.68$$

\\$345,028.68 > \\$340,000. True.`,
  ],
  part3: `**1.** $A(5) = 150,000 e^{0.30} = \\$202,478.82$; $B(5) = 220,000 e^{-0.45} = \\$140,278.19$.

**2.** $C(5) = 100,000 e^{0.24} e^{0.06} = \\$134,985.88$.

**3.** Portfolio total: $\\$477,742.89$, which exceeds the $\\$470,000.00$ principal sum (not less).

**4.** If $B_0$ instead grew at $9\\%$: $B(5)' = 220,000 e^{0.45} = \\$345,028.68$, which exceeds $\\$340,000.00$.
`,
};

// ---------- 41 ----------
patches["math-11-41"] = {
  statements: [
    `The discount factor exceeds 0.96.`,
    `The PDV of the \\$8,000 bonus is approximately \\$7,619.05.`,
    `If the interest rate were 10% instead of 5%, the PDV of the \\$8,000 bonus would be higher than its value under the original 5% rate.`,
    `The difference between the \\$8,000 future bonus and its present value exceeds \\$400.`,
    `If the interest rate were 0% per year, the present value of the \\$8,000 bonus would be exactly \\$7,500.`,
  ],
  answer_key: [false, true, false, false, false],
  tactical_explanations: [
    `**A) The discount factor exceeds 0.96.**  (false)

The one-period discount factor is $(1+r)^{-1} = (1.05)^{-1} = 1/1.05 \\approx 0.9524$, which is below $0.96$, not above. False.`,
    `**B) The PDV of the \\$8,000 bonus is approximately \\$7,619.05.**  (true)

$PDV = K(1+r)^{-t} = 8,000/1.05 \\approx \\$7,619.05$, matching the statement exactly. True.`,
    `**C) If the interest rate were 10% instead of 5%, the PDV of the \\$8,000 bonus would be higher than its value under the original 5% rate.**  (false)

Raising the discount rate makes future money worth less today, not more. At $r = 0.10$: $PDV = 8,000/1.10 \\approx \\$7,272.73$, which is lower than the $\\$7,619.05$ found at $5\\%$, so the direction is backwards. False.`,
    `**D) The difference between the \\$8,000 future bonus and its present value exceeds \\$400.**  (false)

The gap is $8,000 - 7,619.05 = \\$380.95$, which is below $\\$400$, not above. False.`,
    `**E) If the interest rate were 0% per year, the present value of the \\$8,000 bonus would be exactly \\$7,500.**  (false)

At $r = 0\\%$, the discount factor is $(1.00)^{-1} = 1$, so $PDV = 8,000 \\times 1 = \\$8,000$, the unchanged face amount, not \\$7,500. False.`,
  ],
  part3: `**1.** Discount factor: $(1.05)^{-1} = 1/1.05 \\approx 0.9524$, below $0.96$.

**2.** $PDV = 8,000 \\times 0.9524 \\approx \\$7,619.05$.

**3.** At $r = 0.10$: $PDV = 8,000/1.10 \\approx \\$7,272.73$.

**4.** Difference at $5\\%$: $8,000 - 7,619.05 = \\$380.95$, below $\\$400$.

**5.** At $r = 0\\%$: $PDV = 8,000 \\times (1.00)^{-1} = \\$8,000$.`,
};

// ---------- 45 ----------
patches["math-11-45"] = {
  statements: [
    `The ratio of the payoff to the purchase price exceeds 1.40.`,
    `The implied maturity time, assuming annual compounding, is approximately 5.17 years.`,
    `If the purchase price had instead been \\$20,000 for the same \\$25,000 payoff at the same 6% rate, the implied maturity time would be longer than the original implied maturity time.`,
    `If continuous compounding were used instead of annual compounding, the implied maturity time would be approximately 5.45 years.`,
    `The continuous-compounding implied maturity time is longer than the annual-compounding implied maturity time.`,
  ],
  answer_key: [false, true, false, false, false],
  tactical_explanations: [
    `**A) The ratio of the payoff to the purchase price exceeds 1.40.**  (false)

$K/PDV = 25,000/18,500 \\approx 1.3514$, which is below $1.40$, not above. False.`,
    `**B) The implied maturity time, assuming annual compounding, is approximately 5.17 years.**  (true)

From $PDV = K(1+r)^{-t}$, $t = \\ln(K/PDV)/\\ln(1+r) = \\ln(1.3514)/\\ln(1.06) \\approx 0.301105/0.058269 \\approx 5.17$ years, matching the statement exactly. True.`,
    `**C) If the purchase price had instead been \\$20,000 for the same \\$25,000 payoff at the same 6% rate, the implied maturity time would be longer than the original implied maturity time.**  (false)

A \\$20,000 price implies the smaller multiple $25,000/20,000 = 1.25$, giving $t = \\ln(1.25)/\\ln(1.06) \\approx 0.223143/0.058269 \\approx 3.83$ years, which is shorter than the original $5.17$ years, not longer. False.`,
    `**D) If continuous compounding were used instead of annual compounding, the implied maturity time would be approximately 5.45 years.**  (false)

Continuous: $t = \\ln(K/PDV)/r = 0.301105/0.06 \\approx 5.02$ years, not 5.45 years. False.`,
    `**E) The continuous-compounding implied maturity time is longer than the annual-compounding implied maturity time.**  (false)

Comparing the two results, $5.02$ years (continuous) is shorter than $5.17$ years (annual), the opposite of what the statement claims. False.`,
  ],
  part3: `**1.** $K/PDV = 25,000/18,500 \\approx 1.3514$, which is below $1.40$.

**2.** $\\ln(1.3514) \\approx 0.3011$; $\\ln(1.06) \\approx 0.05827$.

**3.** $t = 0.3011/0.05827 \\approx 5.17$ years.

**4.** For a $\\$20,000$ price: ratio $25,000/20,000 = 1.25$, $\\ln(1.25) \\approx 0.2231$, $t = 0.2231/0.05827 \\approx 3.83$ years.

**5.** Continuous: $t = \\ln(1.3514)/0.06 \\approx 0.3011/0.06 \\approx 5.02$ years.

**6.** Compare continuous $t \\approx 5.02$ years vs annual $t \\approx 5.17$ years.`,
};

// ---------- 46 ----------
patches["math-11-46"] = {
  statements: [
    `The implied discount factor exceeds 0.50.`,
    `The implied continuous discount rate is approximately 6.65% per year.`,
    `At the implied rate, if the payoff were due in 6 years instead of 12, its present value would be approximately \\$40,249.20.`,
    `If the purchase price had instead been \\$30,000 for the same \\$60,000 payoff in 12 years, the implied continuous discount rate would be higher than the rate found for the original \\$27,000 price.`,
    `Doubling the horizon to 24 years would require the rate to be approximately 3.33%.`,
  ],
  answer_key: [false, true, true, false, true],
  tactical_explanations: [
    `**A) The implied discount factor exceeds 0.50.**  (false)

$PDV/K = 27,000/60,000 = 0.45$ exactly, which is below $0.50$, not above. False.`,
    `**B) The implied continuous discount rate is approximately 6.65% per year.**  (true)

$r = -\\ln(PDV/K)/t = -\\ln(0.45)/12 \\approx 0.798507/12 \\approx 6.65\\%$, matching the statement exactly. True.`,
    `**C) At the implied rate, if the payoff were due in 6 years instead of 12, its present value would be approximately \\$40,249.20.**  (true)

At $t = 6$ with $r \\approx 0.066542$: $rt \\approx 0.39925$, so $PDV = 60,000 \\times e^{-0.39925} \\approx 60,000 \\times 0.67082 \\approx \\$40,249.20$. True.`,
    `**D) If the purchase price had instead been \\$30,000 for the same \\$60,000 payoff in 12 years, the implied continuous discount rate would be higher than the rate found for the original \\$27,000 price.**  (false)

A \\$30,000 price gives $30,000/60,000 = 0.5$, so $r = -\\ln(0.5)/12 = 0.693147/12 \\approx 5.78\\%$, which is lower than the original $6.65\\%$, not higher: paying more today implies less discounting was needed. False.`,
    `**E) Doubling the horizon to 24 years would require the rate to be approximately 3.33%.**  (true)

The product $rt = -\\ln(0.45) \\approx 0.798507$ is fixed, so doubling $t$ to 24 gives $r = 0.798507/24 \\approx 3.33\\%$, matching the statement exactly. True.`,
  ],
  part3: `**1.** $PDV/K = 27,000/60,000 = 0.45$, which is below $0.50$.

**2.** $r = -\\ln(0.45)/12 = 0.798508/12 \\approx 0.0665 = 6.65\\%$.

**3.** For $t = 6$: $rt = 0.0665 \\times 6 \\approx 0.3992$, $e^{-0.3992} \\approx 0.6708$, so $PDV = 60,000 \\times 0.6708 \\approx \\$40,249.20$.

**4.** For a $\\$30,000$ price: ratio $30,000/60,000 = 0.5$, $r = -\\ln(0.5)/12 = 0.693147/12 \\approx 0.0578 = 5.78\\%$.

**5.** For $t = 24$ with the same discount factor $0.45$: $r = -\\ln(0.45)/24 = 0.798508/24 \\approx 0.0333 = 3.33\\%$.`,
};

// ---------- 50 ----------
patches["math-11-50"] = {
  statements: [
    `The present value of the \\$18,000 obligation is approximately \\$14,445.34.`,
    `The present value of the \\$30,000 obligation is approximately \\$18,287.13.`,
    `The combined lump-sum payment the winery should make today is approximately \\$32,732.47.`,
    `The \\$30,000 obligation contributes a smaller present value than the \\$18,000 obligation.`,
    `If the discount rate were 0% instead of 5.5%, the combined lump-sum payment today would exceed \\$50,000.`,
  ],
  answer_key: [true, true, true, false, false],
  tactical_explanations: [
    `**A) The present value of the \\$18,000 obligation is approximately \\$14,445.34.**  (true)

With $rt_1 = 0.055 \\times 4 = 0.22$: $PDV_1 = 18,000 \\times e^{-0.22} \\approx 18,000 \\times 0.802484 \\approx \\$14,445.34$. True.`,
    `**B) The present value of the \\$30,000 obligation is approximately \\$18,287.13.**  (true)

With $rt_2 = 0.055 \\times 9 = 0.495$: $PDV_2 = 30,000 \\times e^{-0.495} \\approx 30,000 \\times 0.609571 \\approx \\$18,287.13$. True.`,
    `**C) The combined lump-sum payment the winery should make today is approximately \\$32,732.47.**  (true)

Present values add directly: $14,445.34 + 18,287.13 = \\$32,732.47$, matching the statement exactly. True.`,
    `**D) The \\$30,000 obligation contributes a smaller present value than the \\$18,000 obligation.**  (false)

Comparing the two: $\\$18,287.13 > \\$14,445.34$, so the \\$30,000 obligation's larger face amount more than offsets its extra 5 years of discounting, making it larger, not smaller. False.`,
    `**E) If the discount rate were 0% instead of 5.5%, the combined lump-sum payment today would exceed \\$50,000.**  (false)

At $r = 0$, $e^{0} = 1$ for both terms, so the combined present value is simply $18,000 + 30,000 = \\$48,000$, which is below $\\$50,000$, not above. False.`,
  ],
  part3: `**1.** $rt_1 = 0.055 \\times 4 = 0.22$, $e^{-0.22} \\approx 0.8025$, so $PDV_1 = 18,000 \\times 0.8025 \\approx \\$14,445.34$.

**2.** $rt_2 = 0.055 \\times 9 = 0.495$, $e^{-0.495} \\approx 0.6096$, so $PDV_2 = 30,000 \\times 0.6096 \\approx \\$18,287.13$.

**3.** Combined PDV: $14,445.34 + 18,287.13 \\approx \\$32,732.47$.

**4.** Compare $\\$18,287.13$ (from the $\\$30,000$ obligation) vs $\\$14,445.34$ (from the $\\$18,000$ obligation).

**5.** At $r = 0\\%$: $e^{0} = 1$ for both terms, so combined $PDV = 18,000 + 30,000 = \\$48,000$, below $\\$50,000$.`,
};

// Apply in reverse id order so string positions stay stable when replacing
const ids = Object.keys(patches).sort((a, b) => {
  const na = Number(a.split("-").pop());
  const nb = Number(b.split("-").pop());
  return nb - na;
});

let rewritten = 0;
for (const id of ids) {
  const before = text;
  patchTask(id, patches[id]);
  if (text === before) throw new Error("No change for " + id);
  // count changed statements roughly
  rewritten += patches[id].statements.length; // will recount properly below
}

fs.writeFileSync(PATH, text);
console.log("Patched tasks:", ids.length);
console.log("Wrote", PATH.pathname);
