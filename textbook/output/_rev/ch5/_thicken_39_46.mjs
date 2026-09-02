import { thickenLetters } from "./_thicken_apply.mjs";

const extras40 = {
  "math-5-39": {
    2: `Shipment 3 is the audit row. Shipments 1 and 2, after converting $572$ lb to $260$ kg, recovered $f=94.60$ and $r=3.15$. Those two rows rebuild: $94.60+185 \\times 3.15=677.35$ and $94.60+260 \\times 3.15=913.60$. Shipment 3 at $99/2.2=45$ kg predicts $236.35$, but the branch billed $239.80$. The $3.45$ gap is within four dollars and is not zero.

Treating $99$ lb as $99$ kg would predict $94.60+311.85=406.45$, which is not within four dollars of $239.80$. The conversion is the extra arithmetic that makes the predicted charge sit close to the billed one. Close is not equal: this is the inconsistent third row, the way East's revenue was inconsistent in an earlier task.

If the billed amount had been $236.35$, the audit would have cleared. The printed $239.80$ is what keeps the row from matching. Four dollars of tolerance is the claim's window, and $3.45$ sits inside it.`,
  },
  "math-5-40": {
    0: `Client B's usage is exactly double Client A's in both categories, so at constant prices Client B's bill must be exactly double Client A's $483.70$, which is $967.40$. The billed $952.10$ is $15.30$ light, about $1.61\\%$ of $952.10$. That is the whole inconsistency: one pricing scheme cannot produce both invoices when the quantities already sit in a $1:2$ ratio.

A solver who doubled $952.10$ to $1904.20$ would be doubling the wrong client. A solver who reported $15.30/483.70 \\approx 3.16\\%$ would be measuring the gap against Client A, doubling the relative error, because the $15.30$ lives on the doubled invoice. The claim measures against Client B's real total.

No pair $(c,s)$ satisfies both $11c+7s=483.70$ and $22c+14s=952.10$, because the second left-hand side is exactly double the first while the second right-hand side is not. That is a one-line inconsistency test, and $967.40$ versus $952.10$ is that test in dollars.`,
    4: `The doubling hypothesis is the one the quantity columns themselves suggest: B is $2$ times A in both usage columns, so B's dollars should be $2$ times A's dollars. It is wrong by $15.30$. The $50\\%$-heavier hypothesis $1.5 \\times 483.70=725.55$ would describe a client whose usage was $1.5$ times A's, which Client B's counts are not, and it is wrong by $226.55$. Closer-to-the-real-figure is then immediate: $15.30<226.55$.

A solver who compared $967.40$ with $725.55$ without measuring against $952.10$ would be ranking the hypotheses against each other, not against the billed amount. The claim is closeness to the real figure. A solver who used a $10\\%$ surcharge, $1.1 \\times 483.70=532.07$, would be even farther from $952.10$.

The doubling hypothesis remains the least-bad of the two named rivals even though it is still false. That is a comparison of errors, not a claim that $967.40$ is correct.`,
  },
};

thickenLetters("31_40.json", extras40);

const extras41 = {
  "math-5-42": {
    2: `Batch 3 is the QC row. Batches 1 and 2 recovered $16$ g/L and $12$ g/L. At $8$ L mixed $1:3$, A is $2$ L and B is $6$ L, predicted salt $2(16)+6(12)=104$ g. Recorded is $109$ g. The $5$ g extra, attributed only to B at $12$ g/L, is $5/12 \\approx 0.417$ L of extra B, so true B volume $6.417$ L, closer to $6.4$ than to $6.0$.

A solver who put the $5$ g onto A at $16$ g/L would get extra A of $0.3125$ L and a true A volume $2.3125$, which is not this letter. The claim holds A's $2$ L fixed. A solver who spread the $5$ g across both solutions would be answering a different attribution.

This is the inconsistent third row with a named culprit: B's volume. The $6.4$ versus $6.0$ comparison is a closeness check on that culprit, not a second concentration solve. Distances $0.017$ versus $0.417$ make the closeness obvious once $6.417$ is in hand.`,
    3: `A $3:1$ mix is $75\\%$ A, blend concentration $15$ g/L, so $130$ g needs $130/15 \\approx 8.667$ L, not $7.5$ L. At $7.5$ L that mix holds $112.5$ g, $17.5$ g short. To hit $130$ g in $7.5$ L the blend would need $17.33$ g/L, above even pure A at $16$. The recovered pair cannot produce that.

A solver who used Batch 1's $3:2$ blend $14.4$ g/L would get $130/14.4 \\approx 9.03$ L, still not $7.5$. A solver who used $130/(16+12)=130/28 \\approx 4.64$ L would have added concentrations as if both solutions occupied the whole volume. The $3:1$ split is a partition of the total volume, not two full tanks.

This letter is a new mix at a salt target, the way a new invoice mix is a dollar target. The overview never costed $3:1$ at $130$ g. Once $A$ and $B$ are known, the costing is blend then divide, and the divide is $8.667$, not $7.5$.`,
  },
  "math-5-46": {
    0: `Season 1 printed $240$ t Wheat, $160$ t Barley, $\\$42{,}000$. Raising Wheat to $260$ t adds $20 \\times 95=1900$, so $43900$, one hundred dollars short of $44000$. That hundred dollars is why the cutoff is tight. Using Barley's $120$ on the extra $20$ t would add $2400$ and produce $44400$, over the bar, flipping the verdict. The extra tonnes are Wheat.

A solver who scaled the whole $42000$ by $260/240$ would keep Barley inside the scale factor and overshoot. Only the Wheat column changes. This is a one-column increment, the way extra paperbacks added $100 \\times 12$ in an earlier task.

If Wheat had been $100$ per tonne, the extra $20$ t would add $2000$ and the new total would be $44000$ exactly, which still does not *exceed* $44000$. The recovered $95$ is what leaves the counterfactual at $43900$, under the bar.`,
    2: `Season 3's Wheat reconstructs to $180$ t from $53100-300 \\times 120=53100-36000=17100$ and $17100/95=180$. Adding the printed $300$ t of Barley gives $480$ t total. Season 2 is $180+260=440$ t. Season 3 is larger, not smaller. The Wheat columns match at $180$; Season 3's extra $40$ t of Barley is the whole difference.

A solver who left Season 3's Wheat blank and compared $300$ with $440$ would find $300<440$ and accept the claim by dropping the reconstruction. The reconstruction is $180$ t, and it counts in the total tonnage. This is the water-damaged third row, reconstructed, then compared.

If the reconstructed Wheat had been $100$ t, Season 3 would total $400$ t, less than Season 2's $440$, and the claim would have been true. Seasons 1 and 2 force Wheat at $95$ and Barley at $120$, and those force Season 3's Wheat at $180$, total $480$.`,
  },
};

thickenLetters("41_50.json", extras41);
console.log("thickened 39-46");
