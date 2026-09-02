import fs from "fs";
import path from "path";

const BOILER = [
  "\n\nThe arithmetic is locked in by the inputs in the stem, not by a second formula. For the opposite verdict, those inputs would have to change.",
  "\n\nNothing in the later letters changes this shared input. A different opening number would require rewriting the rate, the wait, or the face amount itself.",
];

const DUP_PATCHES = {
  "math-1-38:C": `**C.** → True

Symmetric difference joins the two outer buckets the overview already assembled, giving $\\{1,9,11,13\\}$. Each of those four sits in exactly one of the original sets. Including $3$ would be keeping the middle bucket, which is the union, not the symmetric difference. The trap is treating "in $A$ or $B$" as if it already excluded the overlap.`,
  "math-1-14:D": `**D.** → False

Only-$A$ is the leftover after both pair totals come off the $80$ and the triple is put back once, and the overview already recovered that as $40$. The claimed $80-30-20=30$ forgets the $+10$. That missing correction is the same over-subtraction that inclusion-exclusion repairs with its closing plus. Dropping the triple a second time undercounts the exclusive $A$ region.`,
  "math-5-27:E": `**E) The new quotation of \\$1,068 is mathematically consistent with the confirmed rates.**  (true)

The overview already costed that $8$-hour, $19$-tonne mix at the recovered rates and landed on $\\$1{,}068$. The issued quotation matches those rates rather than inventing a third pair. Using the discarded $y = 50$ here would overshoot the quotation, which is how a solver who never finished the system could still think the quote was high.`,
  "math-5-30:C": `**C) The East branch's reported revenue is fully consistent with the derived prices.**  (false)

The overview already costed East at the North-South prices and got $\\$3{,}085$, against a dashboard print of $\\$3{,}200$. The $\\$115$ discrepancy marks East as inconsistent with that price pair. Treating the printed East total as a third independent observation, rather than a check against the recovered prices, is what would make this letter look true.`,
  "math-5-36:A": `**A) Invoice 2 does nothing more than restate Invoice 1's pricing information at 60% scale, rather than corroborating it with independent evidence.**  (true)

The overview already showed every Invoice 2 entry is $0.6$ times the matching Invoice 1 entry, including the total. Rescaling an equation cannot narrow its solution set, so Invoice 2 restates Invoice 1 rather than corroborating it. A solver who treated the two invoices as independent rows of a $2\\times 2$ system would think a unique price pair had been locked in, when only a ray of solutions remains.`,
  "math-11-104:D": `**D) The difference between the ordinary-annuity payment and the annuity-due payment is approximately \\$2,524.08.**  (true)

The overview already subtracted those two recovered payments and got about $\\$2{,}524$. That gap is the price of delaying the first instalment by a year: ordinary starts later, so each payment has to be larger to reach the same present target. It is a comparison of two inverted annuities, not a third inversion. Rounding either payment to a nearby thousand and subtracting would miss this figure.`,
  "math-11-87:B": `**B) Because \\$16,288.18 is less than \\$18,000.00, Option 2 is the financially better choice, saving approximately \\$1,811.82.**  (false)

Option 2 is cheaper, but the overview's saving is $\\$1{,}711.82$, not $\\$1{,}811.82$. The extra hundred dollars is a transcription slip on an otherwise correct ranking. Present-value savings have to be subtracted from the recovered pair, not guessed from a nearby round number. The ranking survives; the claimed dollar gap does not.`,
  "math-11-88:C": `**C) Strategy A yields a higher future value than Strategy B, by approximately \\$5,769.72.**  (false)

A does win, but the overview's gap is about $\\$5{,}270$, not $\\$5{,}770$. The extra $\\$500$ is what you get from pairing the correct $F_A$ with the inflated $F_B$ from letter B. The recovered pair of future values fixes the lead; a five-hundred-dollar transcription does not change which strategy is larger, only the claimed margin.`,
  "math-11-89:C": `**C) The dollar gap between the annuity-due result and the ordinary-annuity result is approximately \\$1,120.29.**  (false)

The timing gap is one year's interest on the ordinary pile, already subtracted in the overview as about $\\$1{,}020$, not $\\$1{,}120$. That extra hundred is not a second $5\\%$ factor; it is a slip on the difference. Annuity-due still leads, because every payment arrives one period sooner, but the claimed gap overstates that one-year interest.`,
  "math-11-90:C": `**C) The dollar gap between the annuity-due present value and the ordinary-annuity present value is approximately \\$7,065.81.**  (false)

The timing gap is one year's interest on the ordinary present value, already subtracted in the overview as about $\\$6{,}066$, not $\\$7{,}066$. That extra thousand is a slip on the difference, not a different lease term. Due still costs more today because the first rent is not deferred; the claimed gap simply inflates that premium.`,
  "math-11-97:C": `**C) The difference between the annual-compounding present value and the continuous-compounding present value is approximately \\$4,280.35.**  (false)

The overview already subtracted the two recovered deposits and got about $\\$2{,}281$, not $\\$4{,}280$. The claimed figure is almost double the true gap. The two clocks are close at $5.5\\%$; they are not $\\$4{,}000$ apart. Continuous discounting is slightly stronger, so the continuous deposit is the smaller of the two, but the spread is a couple of thousand, not four.`,
  "math-11-98:C": `**C) The lump-sum strategy outperforms the annuity strategy by more than \\$30,000.00.**  (true)

The overview already subtracted the two recovered piles and got about $\\$34{,}872$, which clears a $\\$30{,}000$ cutoff. The extra is the interest the full $\\$75{,}000$ earns from day one, interest the staggered deposits cannot match. Comparing undiscounted cash totals would hide that lead, because both strategies put the same dollars in, only on different dates.`,
};

const GOLD_C = `**C) A \\$6,000 deposit left for exactly one year would grow to \\$6,446.54.**  (true)

Once the growth factor $1.074424$ is in hand, the year-end balance is just the principal times that factor, which is the overview's $FV \\approx 6,446.54$. A solver who multiplied $\\$6,000$ by $1.072$ instead, using the nominal rate as if it compounded once, would get $\\$6,432$ and miss the extra $\\$14.54$ that the twelve intra-year credits produce.`;

let stripped = 0;
let patched = 0;

for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const fp = path.join(dir, f);
    const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
    let changed = false;
    for (const t of arr) {
      t.tactical_explanations = t.tactical_explanations.map((e, i) => {
        let next = e;
        for (const b of BOILER) {
          if (next.includes(b.trim())) {
            next = next.split(b.trim()).join("").replace(/\n{3,}/g, "\n\n").trimEnd();
            stripped++;
            changed = true;
          }
        }
        const key = `${t.id}:${"ABCDE"[i]}`;
        if (DUP_PATCHES[key]) {
          next = DUP_PATCHES[key];
          patched++;
          changed = true;
        }
        if (t.id === "math-11-1" && i === 2) {
          next = GOLD_C;
          patched++;
          changed = true;
        }
        return next;
      });
    }
    if (changed) fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  }
}

console.log("stripped boilerplate", stripped, "patched letters", patched);
