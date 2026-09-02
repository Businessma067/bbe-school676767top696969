import { thickenLetters } from "./_thicken_apply.mjs";

const extras = {
  "math-5-11": {
    2: `Dropping a burrito from Ana's order is a reverse of the usual "add an item" letter. Ana's receipt is $4$ tacos and $3$ burritos at $\\$32$. One burrito is $\\$6$, so the reduced mix is $\\$26$. The cutoff $\\$28$ sits $\\$2$ above that, which is not a recovered price; it is a bar the claim chose. Clearing a bar from below is the inequality $26<28$.

A solver who dropped one taco instead would get $32-3.50=28.50$, which is not less than $28$, and would reject the claim. The item being dropped is the whole content: burrito, not taco. A solver who subtracted $\\$4$ as a round item would land on $\\$28$ exactly and fail a strict inequality.

If burritos had been $\\$3.50$ like tacos, dropping one would leave $\\$28.50$, again not under $\\$28$. The two receipts force $y=6$, and $32-6=26$ is then safely under the bar. After the drop Ana would have the same taco count as before and one fewer burrito than Ben's five, which is a different story than this letter needs; the claim only asks for her new total.`,
    4: `Six of each is three times a taco-burrito pair. One pair is $3.50+6=9.50$, and three pairs would be $28.50$, which is not this letter. Six pairs are $57$. That pair view is honest because the mix is balanced. Ana's mix is not balanced, and Ben's mix is not balanced, so neither receipt is a scale copy of six-and-six.

A solver who took Ana's $4$ tacos and Ben's $5$ burritos, then added one taco and one burrito to "get to six," would be mixing two receipts plus an invented pair, which is not how unit prices work. The recovered pair applied to $6$ and $6$ is the only costing.

If tacos had been $\\$4.00$, six-and-six would have been $24+36=60$, and the claim's $\\$57$ would have failed. The two receipts force $x=3.50$: doubling Ben and subtracting Ana isolates $y=6$, then $4x+18=32$ forces $x=3.50$. Those two prices pin $\\$57$ on a six-and-six ticket.`,
  },
  "math-5-12": {
    3: `Three hardcovers and two paperbacks is a customer basket, not a scaled-down sales report. The desk sold $400$ and $220$; this letter sells $3$ and $2$. The recovered prices $12$ and $17$ make the basket $51+24=75$ on the nose. The claim's "less than $\\$75$" is a strict inequality, and equality is not less.

A solver who used $3(12)+2(17)=36+34=70$, swapping the prices, would get a figure that *is* less than $75$ and would flip the verdict. Attaching $17$ to hardcovers and $12$ to paperbacks is the whole content, because the gap rule says hardcover is the dearer book.

Staff count $12$ and loyalty $45\\%$ still do not enter. A $5\\%$ loyalty discount on $75$ would make the basket $71.25$, which would then be less than $75$, but the stem never says this customer is a loyalty member. Without that discount the basket is $75$, and $75$ is not less than $75$.`,
    4: `Three hundred ten hardcovers alone is a one-product story. The reported $\\$8{,}540$ came from two products. At $y=17$, $310$ hardcovers bring $5270$, which is the hardcover column of a different, smaller shop. The missing $\\$3{,}270$ is exactly $400 \\times 12$ plus a leftover $270$, or $220 \\times 17 - 470$, depending on how one carves the original mix. None of those carvings turns $310$ hardcovers into $8540$.

To hit $8540$ with hardcovers alone would need $8540/17=502.35$ hardcovers, not $310$. The figure $310$ is $220+90$, as if ninety extra hardcovers had replaced the paperback column. Ninety extra hardcovers at $17$ add $1530$, and $220 \\times 17=3740$, total $5270$ still. Paperbacks cannot be replaced at hardcover prices without changing the revenue.

Loyalty share and staff headcount remain distractors. They do not convert $310$ copies of an $\\$17$ book into $\\$8{,}540$.`,
  },
  "math-5-13": {
    2: `May at $10$ GB is an interpolation past April's $3$ GB and March's $8$ GB. Extending the recovered line $38+3g$ to $g=10$ is $68$. Scaling March by $10/8$ would give $77.50$ and would keep March's $8$ GB inside the scale, which is the wrong overage. The honest route is the intercept and slope at the new overage.

Premium at $10$ GB is still $\\$40$, because Premium has no overage. Basic at $10$ GB is $15+20=35$. Neither of those other plans is this letter. A solver who reported $\\$40$ or $\\$35$ here would be naming a different plan. The claim says a Standard customer.

If Standard's base had been $\\$38$ with Basic's $\\$2$ overage, May would have been $38+20=58$, not $68$. The March-April gap of $\\$15$ over $5$ GB forces $\\$3$ per GB, and that $\\$3$ is what puts $10$ GB at $38+30=68$.`,
    3: `Five GB of overage is a typical-use figure sitting between April's $3$ and March's $8$. Standard at that use is $53$. Premium is $40$ unlimited. The saving is $13$ dollars, which is not small relative to a $40$ cap. Break-even is only $2/3$ of a GB, so any customer who regularly uses $5$ GB is far into Premium's cheaper region.

A solver who compared Premium with Basic at $5$ GB, $15+10=25$ versus $40$, would conclude switching *to* Premium costs money. The claim is switching *from* Standard. Standard is the expensive plan in this flyer once overage is nonzero.

If Premium had been $\\$55$ unlimited, Standard at $5$ GB would have been cheaper and the claim would fail. The flyer prints Premium at $\\$40$. Combined with Standard's recovered $38+3g$, any $g>2/3$ favours Premium, and $5$ is well above $2/3$.`,
  },
  "math-5-15": {
    2: `March is labelled a forecast. Using it as a third actual row would ask three equations to share one pair $(x,y)$, and they do not. The actual-cost valuation of March's $200$ A and $100$ B is $3900$. The forecast $4700$ is $800$ higher. That $800$ is $200 \\times 2 + 100 \\times 4$ if both unit costs were marked up, or $200 \\times 4$ if only A were marked up by $4$, among other splits. The letter does not need to pick a split. It only needs to see that $4700>3900$ at the same quantities, which is the definition of assuming higher unit prices.

A solver who compared $4700$ with January $3150$ and called the forecast "higher" would be comparing different quantities. Holding March's $200$ and $100$ fixed is what makes the comparison a statement about prices rather than about volume.

If March had been forecast at $3900$, this letter would be false: the forecast would match actual costs. The printed $4700$ is what makes it true. Warehouse floor space and staff still do not enter.`,
    3: `This letter is the false twin of letter C. Letter C says the forecast assumes higher prices, which is true because actual-cost March is $3900$ not $4700$. Letter D says actual-cost March *is* $4700$, which is the opposite assignment of the same two numbers.

The extra arithmetic is therefore the same two products, $200 \\times 12$ and $100 \\times 15$, summing to $3900$. The claimed $4700$ is the forecast row copied back as if it were already an actual-cost total. Copying a forecast into an actual-cost sentence is the error.

A solver who solved a three-row system and found no solution would be seeing the same inconsistency from the other direction. The right response is not to invent new unit costs for March; it is to value March's quantities at January/February costs and notice the $800$ gap. That gap is why D is false and C is true.`,
  },
};

thickenLetters("11_20.json", extras);
console.log("thickened 11-15");
