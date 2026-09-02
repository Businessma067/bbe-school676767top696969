import { thickenLetters } from "./_thicken_apply.mjs";

const extras = {
  "math-5-5": {
    4: `Parking everything in Account B is the opposite of the actual split, which put the larger principal in the lower-rate account. That is why the counterfactual $\\$700$ sits $\\$180$ above the year's real $\\$520$. The $\\$180$ is $3$ extra points on the $\\$6{,}000$ that currently sits in Account A. A solver who reported $\\$520$ here would be describing the actual year, not the all-B year.

A second trap is to blend the rates, $0.04 \\times 0.5 + 0.07 \\times 0.5 = 0.055$, then take $5.5\\%$ of $\\$10{,}000$ as $\\$550$. That even mix is not the actual split and is not the all-B mix either. All-B is a $7\\%$ rate on the whole principal, one multiplication, no split.

If Account B's rate had been $5\\%$, the all-B interest would have been $\\$500$, below the actual year's $\\$520$, because moving money into B would then have been a downgrade. The stem's $7\\%$ versus $4\\%$ is what makes the all-B story an upgrade to $\\$700$. Simple interest for one year with no deposits is why that upgrade is just $0.07$ times $10000$, with no compounding and no leftover principal to track.`,
  },
  "math-5-6": {
    4: `Five of each is a balanced order, unlike the shipment's $18$ Standard and $12$ Premium. The shipment is Standard-heavy, which is why its average price $9660/30=322$ sits closer to $304$ than to $349$. Five of each has average $(304+349)/2=326.50$, and five pairs are $5 \\times 653=3265$. That $326.50$ average is not $322$, so scaling the shipment to ten chairs would miss this letter.

The cutoff $\\$3{,}000$ is a round bar, not a recovered number. Clearing it by $\\$265$ is comfortable. A solver who compared $3265$ with $9660/3=3220$ would be taking a third of the shipment, which is $6$ Standard and $4$ Premium, not five and five. Thirds preserve the $18:12$ mix.

If Premium's gap over Standard had been $\\$20$ instead of $\\$45$, the pair would have been about $294$ and $314$, and five of each would have been $3040$, still over $3000$ but by much less. The stem's $\\$45$ gap plus the $\\$9{,}660$ shipment are what pin $3265$. The comparison with $3000$ is then a single inequality, not a second solve.`,
  },
  "math-5-7": {
    2: `Two hundred extra minutes is $80$ minutes past the heavy user's $120$, and $80$ minutes at $0.30$ is $\\$24$. Adding $\\$24$ onto the heavy user's $\\$53$ gives $\\$77$, the same bill. That route does not re-solve the fee and rate; it extends the already-recovered line. A solver who added $\\$24$ onto $\\$53$ as $\\$77$ and then rounded up to $\\$80$ would be manufacturing the claim by a convenience round.

The ad's "low, predictable rate" language is doing rhetorical work, not arithmetic work. Predictable means linear: fee plus rate times extra minutes. Linear does not mean "round numbers at round minute counts." At $200$ minutes the honest value is $77$, and $77$ is not $80$.

If the fee had been $\\$20$ and the rate $0.30$, the $200$-minute bill would have been $80$ exactly, and letter A's recovered fee would have been $20$ as well. The two quoted customers, $\\$29$ at $40$ minutes and $\\$53$ at $120$ minutes, forbid that fee. Their $80$-minute gap is $\\$24$, which forces $0.30$, and then $29-12=17$ forces the fee. Those two recoveries pin $77$ at $200$ minutes.`,
  },
  "math-5-10": {
    2: `Two hundred fifty pages sits between Order #58's $120$ and Order #96's $300$, so it is an interpolation, not an extrapolation. Linear interpolation between $\\$33$ and $\\$69$ using page share $(250-120)/(300-120)=130/180$ gives $33+36 \\times 130/180=33+26=59$, the same $\\$59$. That agreement is a check that the recovered line is the line through the two invoices. It is not a reason to report QuickCopy's $\\$60$.

QuickCopy's flat $\\$60$ is the rival sitting in the stem, and $250$ pages is under QuickCopy's $350$-page cap, so a solver who answered with the rival's quote would get the claimed $\\$60$ by swapping shops. This letter is PrintFast's quote at $250$ pages. PrintFast is $\\$59$ there, one dollar under the rival, which is letter D's neighbourhood but not letter D's $350$-page question.

If PrintFast's rate had been $0.204$ with a $\\$9$ fee, $250$ pages would have been $60$. The two invoices force $0.20$ exactly, because $36/180=0.20$, and that exact fifth of a dollar is what leaves the $250$-page bill at $59$ rather than $60$.`,
    3: `At $350$ pages QuickCopy is still in its flat $\\$60$ band, while PrintFast has been climbing at $20$ cents a page from a $\\$9$ intercept. The $350$-page PrintFast bill $\\$79$ is $\\$19$ above the rival, not below it. Direction of "cheaper" is the whole claim, and the direction is backwards.

The crossing computed in the letter, about $255$ pages, is the only distance at which the two shops match. Below it, PrintFast's lower rate-plus-fee combination wins. Above it, QuickCopy's flat fee wins until the $350$-page cap. Asking about $350$ pages is asking about the far side of that crossing, where the rival is cheaper.

A solver who compared $350$ pages at PrintFast's false $0.25$ rate from letter B would get $9+87.50=96.50$, even worse for PrintFast, and would still reject "PrintFast is cheaper." The recovered $0.20$ is already enough to reject the claim. What would flip it is a PrintFast rate below about $0.146$, because $9+350r<60$ forces $r<0.1457$. The invoices force $0.20$, which is not that low.`,
  },
};

thickenLetters("01_10.json", extras);
console.log("thickened 5-10");
