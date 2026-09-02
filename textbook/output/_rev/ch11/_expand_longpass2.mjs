import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));

function insertBeforeCloser(text, extra, truth) {
  const closer = truth ? "so the statement is True." : "so the statement is False.";
  const idx = text.lastIndexOf(closer);
  if (idx < 0) throw new Error("no closer");
  const chunk = extra.trim();
  if (text.slice(0, idx).includes(chunk.slice(0, 50))) return text;
  return text.slice(0, idx) + chunk + "\n\n" + closer;
}

const extras = {
  "math-11-101": {
    4: `**8.** Two years of a six-year schedule is not one-third of the principal. Linear paydown would leave \\$40,000. The claim's \\$45,000 is a different linear guess. Amortization leaves about \\$44,326 because principal slices rise: about \\$7,394 then \\$8,281. Citing the recovered payment of about \\$14,593.54 and rolling those two slices is the only route that lands on the right remaining balance.`,
  },
  "math-11-106": {
    3: `**8.** A logistics treasurer who froze the 10% ranking would keep paying cash and leave about \\$11,133 of present-value savings on the table at 14%. The recovered 14% cost of about \\$488,867 is the figure that undercuts the \\$500,000 cash price. Rate reversals are the point of testing two rates, not a footnote.`,
    4: `**7.** Option B is cheaper than cash at 14% and dearer at 10%. That pair of recovered snapshots is already enough to kill a universal ranking. Face value of \\$700,000 will always exceed \\$500,000. Present value will not. "Always" is the word that fails.`,
  },
  "math-11-114": {
    3: `**4.** A one-year IRR is linear in the payoff, which is why this letter can move from 20% to 25% by adding \\$400 of year-1 cash. Each extra dollar of payoff is an extra $1/8{,}000$ of rate. Four hundred extra dollars is exactly five percentage points. The cutoff was 24%, and 25% clears it by a full point, not by a rounding.

**5.** The original project zeroes at 20%: $-8{,}000 + 9{,}600/1.20 = 0$. The hypothetical zeroes at 25%: $-8{,}000 + 10{,}000/1.25 = 0$. Both are one-year identities, not quadratics. A baker who kept quoting 20% after the payoff rose to \\$10,000 would be ignoring a \\$400 raise that the recovered rate fully reflects.

**6.** Compare NPV at the old 20% IRR on the new payoff: $-8{,}000 + 10{,}000/1.20 \\approx 333$, a surplus, which is another way to see that the new IRR must sit above 20%. The claim's cutoff is 24%. The recovered 25% still clears that higher bar.

**7.** The trap is computing the extra \\$400 as a percent of the new payoff, $400/10{,}000 = 4\\%$, and adding 20% + 4% = 24%, which would sit on the cutoff rather than above it. The extra is a percent of the outlay, $400/8{,}000 = 5\\%$, which is why the new IRR is 25%, not 24%.

**8.** The opposite verdict would need a cutoff above 25%, or a smaller payoff increase. With \\$10,000 back on an \\$8,000 outlay, the recovered IRR is 25%, which exceeds 24%.`,
    4: `**3.** Uniqueness for a one-year conventional project is a theorem, not a numerical accident. The present-value polynomial in the discount factor $s$ is $-8{,}000 + 9{,}600 s$, a straight line with one positive root $s = 8{,}000/9{,}600 = 5/6$, hence $r = 0.20$. There is no second crossing to hunt with a NPV table.

**4.** Later tasks in this subsection need uniqueness arguments because year-1 cash can be negative, or because two-year quadratics have a discarded $r < -1$ root. This oven project has neither complication. One outlay, one return, one admissible IRR, and the recovered 20% is it.

**5.** The opposite verdict would need a second sign-changing cash flow. The stem has only $a_0 = -8{,}000$ and $a_1 = 9{,}600$.`,
  },
  "math-11-117": {
    2: `**7.** Preferring Y on IRR would mean preferring 12.5% to 15%. No reading of "internal rate of return criterion" does that. Dollar profit, scale, and total cash in are other criteria. They are not IRR. The recovered rates remain 15% for X and 12.5% for Y, so X is preferred.`,
    3: `**8.** Eleven percent is below both recovered IRRs, so both NPVs are surpluses, about \\$541 and \\$297. The split-sign picture lives at a test rate between 12.5% and 15%, for example 13.5%. Eleven percent is not that rate. Citing Y's lower IRR as if it were already a negative NPV is swapping the two criteria.`,
  },
  "math-11-119": {
    3: `**4.** Less cash in year 2 cannot raise the internal rate on the same \\$34,000 outlay. The original recovered IRR is about 10.78%. The cut-return quadratic recovers about 3.75%. That is a drop of about seven points, not a rise through the original rate.

**5.** Letter E cuts the outlay and raises IRR, which is the opposite experiment. This letter cuts an inflow. Inflows down, rate down. The claim has that direction backwards.

**6.** The opposite verdict would need a larger year-2 return. Cutting year 2 from \\$24,000 to \\$20,000 lowers the recovered IRR from about 10.78% to about 3.75%.`,
  },
  "math-11-123": {
    4: `**8.** Starting from $r_A \\approx 11.04\\%$, already 5 points short of B's 16%, a cut to year-1 cash cannot cross 16% from below. The recovered 5.9% is the new rate, and it is not close to 16%. Ranking A's remaining \\$88,000 against B's \\$81,200 is a dollar ranking on the wrong year, on the wrong outlay, and on the wrong criterion.`,
  },
};

let n = 0;
for (const file of ["101_110.json", "111_120.json", "121_123.json"]) {
  const fp = path.join(dir, file);
  const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
  for (const t of arr) {
    const pack = extras[t.id];
    if (!pack) continue;
    for (const [iStr, extra] of Object.entries(pack)) {
      const i = Number(iStr);
      t.tactical_explanations[i] = insertBeforeCloser(
        t.tactical_explanations[i],
        extra,
        !!t.answer_key[i]
      );
      n++;
    }
  }
  fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
}
console.log("longpass2", n);
