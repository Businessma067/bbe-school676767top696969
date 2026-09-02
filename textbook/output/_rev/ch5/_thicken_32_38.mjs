import { thickenLetters } from "./_thicken_apply.mjs";

const extras = {
  "math-5-32": {
    2: `A $250$-mile haul is between Route 1's $170$ and Route 2's $305$, so this is an interpolation on Swift's recovered line. Linear interpolation of the two printed totals using mile share $(250-170)/(305-170)=80/135$ gives $460 + 249.75 \\times 80/135 = 460+148=608$ exactly, matching $145.50+250 \\times 1.85$. The claimed "five cents under $608$" would require interpolating to $607.95$, which neither the two routes nor the recovered pair produces.

Fifty cents of the fee plus fifty cents of the mileage multiply to a whole dollar. Dropping either fifty-cent piece manufactures $607.50$, fifty cents under, still not five cents under. The claim's five-cent story is a rounding rumour with no support in $145.50$ or $1.85$.

If the fee had been $145.45$, the total would have been $607.95$. The two routes force $145.50$: $460-170 \\times 1.85=460-314.50=145.50$. That half dollar pins $608.00$ exactly at $250$ miles.`,
    3: `The $\\$270.50$ saving is Swift's extra $0.50$ per mile on $250$ miles, $125$, plus the whole dispatch fee $145.50$. Both pieces are costs the competitor does not charge. Forgetting the fee leaves only $125$, which fails the $270$ cutoff and would flip the verdict. Forgetting the rate gap leaves only $145.50$, which also fails $270$. Both extras are required to clear the bar, and together they clear it by fifty cents.

Route 1 at $170$ miles would save $145.50+170 \\times 0.50=230.50$, under $270$. Route 2 at $305$ miles would save $145.50+152.50=298$, over $270$. The claim names the $250$-mile mark, the same haul as letter C, and at that mark the saving is $270.50$.

If the competitor had charged $1.40$ per mile, the $250$-mile competitor bill would be $350$ and the saving $258$, under $270$. The stem's $1.35$ is what pushes the saving just over the cutoff.`,
  },
  "math-5-33": {
    2: `Calories are a distractor column, printed for reference only. Two dollar totals plus four item counts already pin the two prices; that is the till's $2 \\times 2$. Adding two calorie totals without four calorie-per-item unknowns does not create a second independent price system. It creates two more numbers with no coefficients that attach them to drinks versus pastries.

A solver who divided $78.65/6100$ and $85.05/5400$ would get two dollars-per-calorie figures, about $0.0129$ and $0.01575$, and would still have no drink price and no pastry price. A solver who treated $6100$ and $5400$ as if they were item counts would be inventing a model the receipts do not state. The stem never says calories are proportional to price, and a drink at $6.35$ versus a pastry at $3.80$ already shows that dollars and calories need not move together.

Without the quantities $7$, $9$, $11$, and $4$, even the dollar totals cannot isolate two prices. The calorie counts do not replace those quantities. They sit beside the totals as unused information, the way oven material cost sat unused until a later letter asked for it. This letter never asks for calories as an output, so they stay unused.`,
    4: `A week of daily $2$-drink-$2$-pastry orders is seven copies of a $20.30$ day. Seven times $20.30$ is $142.10$, and the change from $150$ is $7.90$, ten cents under $8$. That ten cents is tight: a pastry at $3.82$ would have made a day $20.34$ and a week $142.38$, leftover $7.62$, still under $8$, but a drink at $6.50$ would have made a day $20.60$ and a week $144.20$, leftover $5.80$, still under $8$ as an inequality, yet the claim's exact leftover flavour is $7.90$.

A solver who used a five-day week would get $101.50$ and leftover $48.50$, which is not less than $8$ in the tight sense the claim is pointing at. A solver who used $7 \\times 21=147$ as a round pair of pairs would get leftover $3$, still less than $8$, so the inequality would survive rounding, but the cents would be wrong.

If drinks had been $6.50$ and pastries $3.80$, leftover would be $5.80$, still under $8$. To leave $8$ or more, the week would need to cost $142$ or less. The recovered pair forces $142.10$, leftover $7.90$.`,
  },
  "math-5-34": {
    2: `Ten dozen of each is a balanced wholesale ticket, unlike Email 1's croissant-heavy $14$ and $11$ or Email 2's baguette-heavy $6$ and $23$. Croissants at $138.50$ over a combined $232.50$ are $59.57\\%$ of the bill, just under three-fifths. Rounding both prices to $14$ and $9$ would have produced $140/230 \\approx 60.9\\%$, over three-fifths, and would have flipped the verdict. The recovered cents $13.85$ and $9.40$ are what keep the share under $0.6$.

Three-fifths of $232.50$ is $139.50$. Croissants at $138.50$ sit one dollar short of that bar. That dollar is $10 \\times 0.10$ relative to a $13.95$ croissant price, or a slightly cheaper baguette pulling the denominator down. With the recovered pair, the share does not clear three-fifths.

A solver who compared $138.50$ with $0.6 \\times 10 \\times 13.85=83.10$, mixing a share of croissants only, would be answering a different fraction. The claim is croissants' share of the *combined* bill.`,
  },
  "math-5-36": {
    0: `Invoice 2 is $9/15=0.60$ of Invoice 1 in Nitrogen, $12/20=0.60$ in Oxygen, and $419.40/699=0.60$ in dollars. Every column scales by the same factor, so Invoice 2 lies on the same ray as Invoice 1 through the origin in $(N,O,\\$)$ space. A second point on the same ray does not determine a unique price pair; it restates the same linear constraint. Invoice 3, with $13$ Nitrogen and $5$ Oxygen, is a genuinely different mix, and that is the second equation the overview used.

A solver who treated all three invoices as independent would be counting Invoice 1 twice. The consultant was given three rows, but only two of them carry information. That is a standard trap in this chapter: a scaled copy looks like corroboration and is not.

If Invoice 2 had been $9$ Nitrogen and $13$ Oxygen, it would have been independent, and a three-row check could then have caught an inconsistency. As printed, Invoice 2 cannot catch anything Invoice 1 did not already say.`,
  },
  "math-5-38": {
    2: `Season 3's missing T-Shirt count is a reconstruction from the recovered margins, not a third independent $2 \\times 2$. Hoodies contribute $310 \\times 18.40=5704$. Remaining profit $8558.25-5704=2854.25$. Dividing by $11.65$ gives $245$ exactly. Two hundred forty-five is not a multiple of ten; it ends in $5$.

A solver who rounded $245$ to $250$ would manufacture a multiple of ten and accept the claim. A solver who divided $8558.25$ by $11.65$ without stripping Hoodies would get about $734$, also not a multiple of ten, but that is the wrong reconstruction. A solver who used $8558.25-310 \\times 18=8558.25-5580=2978.25$, dropping the forty cents of hoodie margin, would not divide cleanly by $11.65$.

The water damage erased a count that reconstructs to $245$. Multiples of ten would have been $240$ or $250$, and those would have implied hoodie margins or T-Shirt margins different from the two intact seasons. With Seasons 1 and 2 as printed, the missing count is $245$, not a multiple of ten.`,
    4: `Rewriting Season 3 as $260$ T-Shirts, Hoodies held at $310$, adds $15$ T-Shirts to the reconstructed $245$. Fifteen T-Shirts at $11.65$ add $174.75$, and $8558.25+174.75=8733$. That $8733$ crosses $8700$ by $33$, less than $40$, matching the claim.

A solver who used $250$ T-Shirts as a round stand-in would get $2912.50+5704=8616.50$, which does not cross $8700$ and would flip the verdict. The claim's $260$ is $15$ above the reconstruction, not $5$ above a round $250$. A solver who also changed Hoodies would be answering a different rewrite.

If T-Shirt margin had been $11.00$, fifteen extra shirts would add $165$ and the rewritten profit would be $8723.25$, still over $8700$ by less than $40$, so that particular error would not flip this inequality. The honest figure uses $11.65$ and lands on $8733$.`,
  },
};

thickenLetters("31_40.json", extras);
console.log("thickened 32-38");
