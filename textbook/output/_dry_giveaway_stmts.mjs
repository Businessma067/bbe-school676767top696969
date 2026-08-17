/**
 * Dry Ch11 giveaway statements only: same claim/answer, no free-lunch wording.
 * Updates matching tactical header lines that quote the old statement.
 * File on disk stores KaTeX as \\$ \\% etc. — use String.raw / enough escapes.
 */
import fs from "fs";

const path = "src/data/math-ch11-financial.ts";
let text = fs.readFileSync(path, "utf8");

/** [old, new] — exact substrings as on disk in the .ts file */
const pairs = [
  [
    String.raw`A preferred stock pays a fixed dividend of \\$4.25 per share at the end of each year, in perpetuity. Investors currently require a 7% annual return on investments of this risk level, and an analyst wants to test how the fair value responds to changes in the required return and the dividend.`,
    String.raw`A preferred stock pays a fixed dividend of \\$4.25 per share at the end of each year, in perpetuity. The stock is currently trading at \\$65.00 per share. Investors currently require a 7% annual return on investments of this risk level, and an analyst wants to test how the fair value responds to changes in the required return and the dividend.`,
  ],
  [
    String.raw`The stock is currently trading at \\$65.00 per share, which is below its fair value of \\$60.71, so the stock is UNDERVALUED.`,
    String.raw`At a market price of \\$65.00, the preferred stock is undervalued relative to its fair value.`,
  ],
  [
    String.raw`Deal 1's fair value is \\$180,000.00, which exceeds the \\$170,000 asking price by \\$10,000.00, making it a good buy.`,
    String.raw`Deal 1 is a good buy at its asking price.`,
  ],
  [
    String.raw`Deal 2's fair value is approximately \\$233,333.33, which exceeds the \\$170,000 asking price by more than \\$60,000.00.`,
    String.raw`Deal 2's fair value exceeds its asking price by more than \\$60,000.00.`,
  ],
  [
    String.raw`If Deal 2's growth rate were instead only 1%, its fair value would fall to approximately \\$155,555.56, making it a worse buy than its \\$170,000 asking price.`,
    String.raw`If Deal 2's growth rate were instead only 1%, its fair value would fall below its asking price.`,
  ],
  [
    String.raw`Mistakenly using the just-paid dividend instead of next year's dividend would give a value of \\$50.00, which UNDERSTATES the correct fair value of \\$51.50; the shortfall is said to be \\$2.50.`,
    String.raw`Mistakenly using the just-paid dividend instead of next year's dividend understates the correct fair value by \\$2.50.`,
  ],
  [
    String.raw`Bank Z's 2-year value is approximately \\$68,932.91, making it the highest of the three offers.`,
    String.raw`Bank Z's 2-year value is approximately \\$68,932.91.`,
  ],
  [
    String.raw`Tranche 3, valued as an infinite declining perpetuity, totals \\$375,000.00, making it the single largest of the three tranches.`,
    String.raw`Tranche 3, valued as an infinite declining perpetuity, totals \\$375,000.00.`,
  ],
  [
    String.raw`The combined portfolio value after 5 years, adding all three assets together, is approximately \\$477,742.90, which is less than the sum of the three original principals.`,
    String.raw`The combined portfolio value after 5 years is less than the sum of the three original principals.`,
  ],
  [
    String.raw`If the decline were instead steeper, at k = 0.95, the infinite total would be \\$10,000,000.00, which is more than half of the original \\$25,000,000.00 infinite total.`,
    String.raw`If the decline were instead steeper, at k = 0.95, the infinite total would be more than half of the original infinite total.`,
  ],
  [
    String.raw`If the decline were steeper, at k = 0.90 instead of 0.96, the infinite total would be \\$500,000.00, which is less than half of the original \\$1,250,000.00 infinite total.`,
    String.raw`If the decline were steeper, at k = 0.90 instead of 0.96, the infinite total would be less than half of the original infinite total.`,
  ],
  [
    String.raw`The cumulative spend after 9 years is approximately \\$2,955,131.26, which is still below the \\$3,000,000 target.`,
    String.raw`The cumulative spend after 9 years is still below the \\$3,000,000 target.`,
  ],
  [
    String.raw`If the growth rate were only 8% instead of 12%, the 10-year cumulative spend would be approximately \\$2,897,312.49, which would still surpass the \\$3,000,000 target within 10 years.`,
    String.raw`If the growth rate were only 8% instead of 12%, the 10-year cumulative spend would still surpass the \\$3,000,000 target within 10 years.`,
  ],
  [
    String.raw`If royalties instead grew at 0% for 12 years, the 12-year total would be \\$108,000.00, which is \\$62,794.15 less than the actual 8%-growth total.`,
    String.raw`If royalties instead grew at 0% for 12 years, the 12-year total would be \\$62,794.15 less than the actual 8%-growth total.`,
  ],
  [
    String.raw`Extending the horizon to 20 years, cumulative profit falls to approximately \\$78,405.66, which is smaller than the 12-year cumulative profit of \\$199,331.90.`,
    String.raw`Extending the horizon to 20 years, cumulative profit falls below the 12-year cumulative profit.`,
  ],
  [
    String.raw`If the same \\$3,000 deposits were instead made at the END of each year, the future value would be approximately \\$20,405.76, which is LOWER than the annuity-due result.`,
    String.raw`If the same \\$3,000 deposits were instead made at the END of each year, the future value would be LOWER than the annuity-due result.`,
  ],
  [
    String.raw`If the same \\$24,000 payments were instead due at the END of each year, the present value would be approximately \\$101,096.80, which is LOWER than the annuity-due result.`,
    String.raw`If the same \\$24,000 payments were instead due at the END of each year, the present value would be LOWER than the annuity-due result.`,
  ],
  [
    String.raw`If the council only needed the perpetuity and the rate were 6%, the required funding of \\$250,000.00 would be LESS than half of the original combined 4.5%-rate total of \\$383,333.33.`,
    String.raw`If the council only needed the perpetuity and the rate were 6%, the required funding would be LESS than half of the original combined 4.5%-rate total.`,
  ],
  [
    String.raw`The annuity's future value is approximately \\$96,757.60, which is LOWER than the lump-sum continuous-compounding result, despite both strategies involving the same total \\$75,000 in contributions.`,
    String.raw`The annuity's future value is LOWER than the lump-sum continuous-compounding result, despite both strategies involving the same total \\$75,000 in contributions.`,
  ],
  [
    String.raw`The maintenance-reserve perpetuity, paying \\$3,000 per year forever at 8%, requires a present value of \\$37,500.00, which is LESS than double the present value of the 5-year annuity-due lease payments.`,
    String.raw`The maintenance-reserve perpetuity, paying \\$3,000 per year forever at 8%, requires a present value that is LESS than double the present value of the 5-year annuity-due lease payments.`,
  ],
  [
    String.raw`If the implied rate had instead been exactly 6.00%, the 3-year value would have been approximately \\$33,522.09, which is higher than the actual observed \\$34,200.00.`,
    String.raw`If the implied rate had instead been exactly 6.00%, the 3-year value would exceed the actual observed \\$34,200.00.`,
  ],
  [
    String.raw`It would take approximately 58 months for the deposit to double, which would be exactly half of the actual doubling time.`,
    String.raw`It would take approximately 58 months for the deposit to double.`,
  ],
];

let missing = [];
for (const [old, neu] of pairs) {
  const count = text.split(old).length - 1;
  if (count === 0) {
    missing.push(old.slice(0, 100));
    continue;
  }
  text = text.split(old).join(neu);
  console.log("OK x" + count + ":", neu.slice(0, 72).replace(/\\/g, "\\\\"));
}

if (missing.length) {
  console.error("MISSING", missing.length);
  missing.forEach((m) => console.error(" -", m));
  process.exit(1);
}

fs.writeFileSync(path, text);
console.log("Wrote", path);
