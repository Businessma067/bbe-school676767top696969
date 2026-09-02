import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-9": [
    `The statement is a claim about today's sofa price, not about either branch's gross. Net sales, gross minus returns, are what reflect items sold at listed prices.

The overview already recovered $x = 350$ as that sofa price, after peeling returns and substituting Hillcrest's reduced row into Riverside. This letter does not rebuild that pair. It only asks whether the recovered sofa price is the number in the claim.

**1.** The recovered $350$ is attached to sofas, not to armchairs. A solver who quoted $200$ here would have swapped the labels.

**2.** A solver who divided Riverside's gross $\\$9{,}760$ by $14$ sofas, ignoring armchairs and returns, would land on about $\\$697$ and miss the claim. Returns and armchairs both have to come off first.

The recovered sofa price is $\\$350.00$, so the statement is True.`,

    `The statement is a claim about today's armchair price. Armchairs are the leftover after sofas are taken out of either net-sales row.

The overview already recovered $y = 200$. The claim writes $\\$200.00$, which is exactly that leftover.

A solver who used gross instead of net would inflate both prices. Hillcrest's $\\$300$ of returns is not armchair revenue.

The recovered armchair price is $\\$200.00$, so the statement is True.`,

    `The statement is a claim about Riverside's net sales after its $\\$460$ in returns. Gross is printed at $\\$9{,}760$. Net is gross minus returns.

The extra arithmetic is only peeling the returns.

**1.** Subtract Riverside's returns from Riverside's gross:

$$9760 - 460 = 9300$$

**2.** As a check, rebuild Riverside at the recovered prices $x=350$ and $y=200$:

$$14(350) + 22(200) = 4900 + 4400 = 9300$$

Both routes give $\\$9{,}300$. A solver who subtracted Hillcrest's $\\$300$ here would land on $\\$9{,}460$. A solver who reported gross $\\$9{,}760$ as net would have skipped the peel.

Riverside's net sales were $\\$9{,}300.00$, so the statement is True.`,

    `The statement is a claim about Hillcrest's gross sales, before its $\\$300$ in returns. The table already prints Hillcrest gross at $\\$9{,}300$.

This letter does not peel returns. It asks whether the claimed gross is the gross on the page.

As a consistency check, Hillcrest's net is $9300-300=9000$, and the $20$ sofas and $10$ armchairs at recovered prices rebuild that net:

$$20(350) + 10(200) = 7000 + 2000 = 9000$$

Adding the $\\$300$ of returns back recovers the printed gross. A solver who reported the net $\\$9{,}000$ here would be answering a different question.

Hillcrest's printed gross is $\\$9{,}300.00$, so the statement is True.`,

    `The statement is a claim about a counterfactual: Riverside with zero returns that month. Net sales are defined as gross minus returns. If returns are zero, the two figures coincide.

The extra arithmetic is only setting returns to zero.

**1.** Riverside's gross is already $\\$9{,}760$.

**2.** With returns of $0$:

$$9760 - 0 = 9760$$

Both gross and net would read $\\$9{,}760$. That is a definition, not a new solve. The recovered sofa and armchair prices never enter, because the claim does not ask what would have been sold, only how gross and net relate when returns vanish.

A solver who subtracted the $\\$460$ anyway would be describing the actual month, not the counterfactual. A solver who thought "zero returns" meant zero sales would report $\\$0$ and miss the claim entirely.

Had Riverside recorded zero returns, gross and net would both have equalled $\\$9{,}760.00$, so the statement is True.`,
  ],

  "math-5-10": [
    `The statement is a claim about PrintFast's setup fee, not about the per-page rate. The two orders differ only in page count, so the fee is the intercept of that line.

The overview already recovered $f = 9$. The claim writes $\\$12$, which sits $\\$3$ above that intercept.

**1.** The figure $\\$12$ is a typical round guess: $10\\%$ of a $\\$120$-looking page count, or $33-120 \\times 0.175$. At $f=12$ the $120$-page order would force $r=0.175$, and the $300$-page order would then total $12+52.50=64.50$, not $\\$69$.

**2.** The two invoices force a unique intercept of $\\$9$. With those two bills as printed, the setup fee cannot be $\\$12$.

The claimed $\\$12$ sits $\\$3$ above the recovered $\\$9$, so the statement is False.`,

    `The statement is a claim about PrintFast's per-page rate. Subtracting the two invoices isolates that slope.

The overview already recovered $r = 0.20$. The claim writes $\\$0.25$, five cents above $0.20$.

**1.** The figure $\\$0.25$ is a typical round quarter. At $r=0.25$ the $180$-page gap between the two orders would be $\\$45$, but the actual dollar gap is $\\$36$. Those extra nine dollars are $180 \\times 0.05$.

**2.** A solver who divided $\\$33$ by $120$ pages would land on $\\$0.275$ and forget the fee sitting under both bills.

The claimed $\\$0.25$ sits $\\$0.05$ above the recovered $\\$0.20$, so the statement is False.`,

    `This letter is not either printed order. Order #58 is $120$ pages at $\\$33$. Order #96 is $300$ pages at $\\$69$. The claim asks for a third order: $250$ pages at PrintFast, compared with $\\$60$.

The overview already has $f = 9$ and $r = 0.20$. The extra arithmetic is only evaluating PrintFast at $250$ pages.

**1.** Start from the recovered setup fee.

**2.** Add two hundred fifty pages at the recovered rate:

$$250 \\times 0.20 = 50$$

**3.** Add fee and page charges:

$$9 + 50 = 59$$

The order is $\\$59$, not $\\$60$. The gap is $\\$1$.

Where does $\\$60$ come from as a trap? QuickCopy Center's flat fee is $\\$60$, so a solver who mixed the rival into PrintFast's quote would report $\\$60$ here. A solver who used $f=10$ would get $10+50=60$ exactly. A solver who used $r=0.204$ with $f=9$ would also land near $\\$60$. The rival's flat $\\$60$ is the most tempting mix-up, because letter D asks about that rival at a nearby page count.

What would have to change for the opposite verdict? If the fee were $\\$10$, or if the rate were $\\$0.204$, a $250$-page PrintFast order would be $\\$60$. The two printed orders force $f=9$ and $r=0.20$, and those force $\\$59$ at $250$ pages.

The recovered PrintFast rule at $250$ pages bills $\\$59$, not $\\$60$, so the statement is False.`,

    `The statement compares a $350$-page PrintFast order with QuickCopy Center's flat $\\$60$ fee, and claims PrintFast would be cheaper.

QuickCopy charges $\\$60$ for any order up to $350$ pages. PrintFast's recovered rule is $f=9$, $r=0.20$. The extra arithmetic is only pricing $350$ pages at PrintFast and comparing.

**1.** PrintFast's page charges at $350$ pages:

$$350 \\times 0.20 = 70$$

**2.** Add the setup fee:

$$9 + 70 = 79$$

**3.** Compare with QuickCopy's flat $\\$60$:

$$79 > 60$$

PrintFast is $\\$19$ more expensive at that length, not cheaper. The claim has the comparison backwards.

A solver who used the false rate $0.25$ would make PrintFast even worse, at $9+87.50=96.50$. A solver who compared $250$-page PrintFast $\\$59$ with the rival $\\$60$ would conclude PrintFast is cheaper, but that is a different page count. At the $350$-page cap of the rival's flat quote, PrintFast has already climbed to $\\$79$.

The two formulas have different slopes, so they can cross. Setting $9+0.20x=60$ gives $x=255$ pages. Below about $255$ pages PrintFast is cheaper; above it, QuickCopy is cheaper. The claim asks about $350$ pages, which sits well above that crossing.

PrintFast is more expensive at $350$ pages, not cheaper, so the statement is False.`,

    `The statement is a claim about uniqueness, not about a particular dollar figure. PrintFast's plan is a fee plus a rate, two unknowns. Two invoices with different page counts give two independent equations.

The overview already recovered the unique pair $(f,r)=(9,0.20)$. This letter asks why that pair is the only one.

**1.** Subtracting the two invoices cancels the fee and leaves

$$(300-120)r = 69-33, \\qquad 180r = 36$$

The coefficient $180$ is not zero, because the page counts differ. That forces a unique rate, and then a unique fee.

**2.** Had both orders covered the same number of pages, the fee would cancel and leave $0 \\cdot r$ equal to a dollar gap, which would either be inconsistent or leave $r$ free. Different page counts are what pin the slope down.

**3.** Different totals matter too. If the two bills had been equal despite different page counts, the rate would have been forced to zero, which is still a unique pair, just a degenerate one. Here the totals differ as well, so the rate is the positive $0.20$ already recovered.

A solver who thought "two bills, infinitely many fee-and-rate pairs" would be describing one invoice, not two independent ones. One invoice is a single line in the $(f,r)$ plane. Two non-parallel invoices are a single intersection.

Because the two invoices involve different page counts at different totals, they pin down one combination of setup fee and per-page rate, so the statement is True.`,
  ],
};

applyLetters("01_10.json", patches);
console.log("applied 9-10");
