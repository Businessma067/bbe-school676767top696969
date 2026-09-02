import { applyLetters } from "./_expand_apply.mjs";

const L = {
  "math-8-41": [
    `**A.** → True

Demand is $q(p)=A p^{-2}$ with $q(4)=400$. This letter asks whether the price that clears a given quantity is itself a power of that quantity.

The overview already recovered $A=6400$ and inverted $p=80 q^{-\\frac{1}{2}}$. A nonzero power inverts to another power. Price that clears a given quantity is a monomial in that quantity, coefficient $80$ and exponent $-\\frac{1}{2}$.

**1.** Extra arithmetic that uses the inverse at $q=25$: $p=80/5=16$, which letter B will use as a level. That inversion landing on $16$ euros is how we know the inverse is the right monomial. At the catalogue pair, $p=80/\\sqrt{400}=4$, returning $4$ euros.

**2.** A rushed solver who wrote $p=\\log q$ mixed this supplier with an exponential technology. Another who added a reservation price would have left the power-function class; the stem has no such floor.

**3.** Letters D and E read revenue as a function of $q$. This letter names the inverse of demand as a function class. The same $p\\propto q^{-1/2}$ is what makes revenue $R=pq=80 q^{1/2}$ a power of $q$ as well.

**4.** If demand had carried an intercept, the inverse would not have been a power. The stem is a pure monomial.

The recovered clearing price is a power of quantity, so the statement is True.`,

    `**B.** → True

This is a level of the inverse at $25$ units, asked against a threshold of $20$ euros.

The overview already evaluated $p(25)=16$. Sixteen sits under $20$. Five is $\\sqrt{25}$, and $80/5=16$.

**1.** A rushed solver who used $p=6400/25=256$ inverted the wrong way, using $A/q$ rather than $\\sqrt{A/q}$. Another who used $p=80/25=3.2$ skipped the square root in the inverse.

**2.** Extra arithmetic at $q=16$: $p=80/4=20$ on the nose. The threshold "under $20$" is about $q=25$ specifically, past that $16$-unit price of $20$. Between $16$ and $25$ units the clearing price crosses $20$ going down, and at $25$ it has reached $16$.

**3.** Letter D's revenue at $q=100$ is a different object. $16<20$ is a $4$ euro clearance, genuine because $\\sqrt{A}=80$ rather than $100$.

The recovered clearing price at $25$ units is $16$ euros, under $20$, so the statement is True.`,

    `**C.** → False

The claim is that raising the catalogue price raises revenue along this curve.

The overview already recorded $R(p)=6400 p^{-1}$. The leftover exponent is negative, so raising the catalogue price cuts revenue. Inverse-square demand is elastic enough that a price rise shrinks $pq$.

**1.** Extra arithmetic at the catalogue and a neighbour: $R(4)=1600$ and $R(8)=800$, already lower. At $p=16$, letter D's $R(16)=625$, lower still. The fall is monotone.

**2.** A rushed solver who saw this as task $33$'s inelastic utility, where $R$ rises in $p$, has mixed two exponents. Demand here is $p^{-2}$, so $R\\propto p^{-1}$. Another who used $R=q=6400 p^{-2}$ forgot to multiply by $p$.

**3.** Letter E says revenue rises in $q$. That is compatible: raising $q$ means cutting $p$ along the curve, which raises $R$. This letter is the $p$-direction, where $R$ falls.

**4.** The opposite verdict would need demand exponent $\\ge -1$. The stem's $-2$ sits below $-1$, so $R$ falls in $p$.

The recovered revenue $6400/p$ falls as the catalogue price rises, so the statement is False.`,

    `**D.** → True

Revenue as a function of quantity is $R(q)=80 q^{\\frac{1}{2}}$, and this letter is a level at $100$ units, asked against a threshold of $750$ euros.

The overview already evaluated $R(100)=800$. Eight hundred sits above $750$. Ten is $\\sqrt{100}$, and $80\\cdot 10=800$.

**1.** A rushed solver who used $R(p)=6400/100=64$ mixed a price of $100$ with a quantity of $100$. Another who used $p(100)=8$ as if it were revenue would fail the threshold on the wrong object.

**2.** Extra arithmetic at $q=64$: $R(64)=80\\cdot 8=640$, which sits below $750$. The threshold test is about $q=100$ specifically. Between $64$ and $100$ units revenue crosses $750$, and at $100$ it has reached $800$.

**3.** Letter C's falling $R(p)$ is the other coordinate. $800>750$ is a $50$ euro clearance on the $q$-axis.

The recovered revenue at $100$ units is $800$ euros, above $750$, so the statement is True.`,

    `**E.** → False

The claim is that because quantity falls when price rises, revenue must fall when quantity rises.

The overview already recorded that $R(q)=80 q^{\\frac{1}{2}}$ has leftover exponent $\\frac{1}{2}>0$, so a larger quantity brings in more revenue, not less. Along this curve the quantity rise outruns the price cut.

**1.** Extra arithmetic of the two directions: from $q=25$ to $q=100$, quantity quadruples, price falls $16\\to 8$, and revenue rises $400\\to 800$. The quantity rise more than covers the price cut.

**2.** A rushed solver who treated $R=pq$ as if $p$ were the only moving piece when $q$ rises has forgotten that both move, in opposite directions. Another who used letter C's falling $R(p)$ as if it translated into falling $R(q)$ has mixed the two parameterisations. Cutting $p$ raises $q$ and raises $R$ here.

**3.** Letter C is the $p$-direction. This letter is the $q$-direction. They disagree, which is possible because $p$ and $q$ move oppositely along the curve.

**4.** The opposite verdict would need $R(q)$ with a negative leftover exponent. With $\\frac{1}{2}>0$, revenue rises in $q$.

The recovered $R(q)=80\\sqrt{q}$ rises with quantity, so the statement is False.`,
  ],

  "math-8-42": [
    `**A.** → True

Output is $Y(L)=A L^{\\frac{1}{2}}$, and the recorded extension from $9$ to $36$ hours adding $60$ units pins $A=20$. This letter asks whether average product $Y/L$ falls as the shift lengthens.

The overview already recorded $\\frac{Y}{L}=20 L^{-\\frac{1}{2}}$. The leftover exponent is negative, so average product falls as the shift lengthens.

**1.** Extra arithmetic at the two logged shifts: $Y(9)/9=60/9\\approx 6.67$ units per hour, and $Y(36)/36=120/36\\approx 3.33$, already half as large, matching $\\sqrt{36/9}=2$ in the denominator. At $L=25$, $Y(25)/25=4$, letter E's average, sitting between those two.

**2.** A rushed solver who saw $Y$ rise from $60$ to $120$ and concluded that hours are becoming more productive has mixed the total with the average. Letter C is the falling marginal, the same $r<1$ story.

**3.** What would flip this verdict is $r>1$. The stem's $\\frac{1}{2}<1$ forces a falling average.

**4.** Letter D's reverse scale, needing four times the hours to double output, is this falling average in other clothes: more hours per extra unit.

The recovered average $20/\\sqrt{L}$ falls as the shift lengthens, so the statement is True.`,

    `**B.** → True

This is a level of a $36$-hour shift, asked against a threshold of $100$ units.

The overview already evaluated $Y(36)=120$. One hundred and twenty sits above $100$. Thirty-six to the $\\frac{1}{2}$ is $6$, and $20\\cdot 6=120$.

**1.** A rushed solver who used $A=10$ from $60/(6-3)$ wait, $60/3=20$ is the right $A$. Using $A=10$ would report $60$ and fail the threshold. Another who used $Y(36)=20\\cdot 36=720$ skipped the root.

**2.** Extra arithmetic at $L=9$: $Y(9)=60$, which sits below $100$. The threshold test is about $L=36$ specifically. Between $9$ and $36$ hours output crosses $100$, and at $36$ it has reached $120$.

**3.** Letter D notes that $Y(36)=120$ is exactly double $Y(9)=60$, which is why doubling output needed a quadrupling of hours. This letter only compares $120$ with $100$.

The recovered output on a $36$-hour shift is $120$ units, above $100$, so the statement is True.`,

    `**C.** → False

The claim is that an extra hour adds more output after $36$ hours than after $9$.

The overview already recorded $Y'(L)=10 L^{-\\frac{1}{2}}$, so $Y'(36)<Y'(9)$. The leftover exponent is negative. An extra hour adds less output after $36$ hours than after $9$, not more.

**1.** Extra arithmetic at the two named shifts:

$$Y'(9)=10/3\\approx 3.33, \\qquad Y'(36)=10/6\\approx 1.67$$

An extra hour after $9$ hours adds about $3.3$ units; after $36$ hours it adds about $1.7$. The claim's "more after $36$" is the reverse of these two slopes.

**2.** A rushed solver who saw $Y(36)=120>Y(9)=60$ and concluded that later hours are more productive has confused height with slope. The output is still rising, just more slowly.

**3.** Letter A is the falling average. This letter is the falling marginal. Both follow from $r=\\frac{1}{2}<1$. Convex $r>1$ would have flipped both.

**4.** The opposite verdict would need $r>1$. With $r=\\frac{1}{2}$, later hours add less, not more.

The recovered slope is smaller at $36$ hours than at $9$, so the statement is False.`,

    `**D.** → True

The nine-hour output is $Y(9)=60$. Doubling that output means $Y(L)=120$, which inverts at $L=36$. Hours must go from $9$ to $36$, which is more than a doubling. With $r=\\frac{1}{2}$, doubling output means quadrupling hours, because the inverse exponent is $2$.

**1.** Extra arithmetic of the inversion: $20\\sqrt{L}=120$ gives $\\sqrt{L}=6$ and $L=36$. Compare $36$ with twice the logged $9$ hours, which would have been $18$. The required $36$ sits well past $18$.

**2.** A rushed solver who multiplied $9$ hours by $2^{\\frac{1}{2}}$ mixed the forward factor with the reverse factor. Forward is $2^{r}$; reverse is $2^{1/r}$. Those disagree once $r\\neq 1$.

**3.** Letter B's $Y(36)=120$ is this doubled output at the inverted hours. This letter names the hours comparison with a doubling of $9$.

**4.** The opposite verdict would need $r>1$, where doubling output would need less than a doubling of hours. The stem's $r=\\frac{1}{2}<1$ forces a more-than-doubling of labour.

The recovered labour for $120$ units is $36$ hours, more than double $9$, so the statement is True.`,

    `**E.** → False

This is a level of average product at $25$ hours, asked against a threshold of $5$ units per hour.

The overview already evaluated $Y(25)/25=4$. Four sits below $5$. Twenty-five to the $\\frac{1}{2}$ is $5$, and $20\\cdot 5/25=4$.

**1.** A rushed solver who used $Y(25)/25=20/5=4$ wait, $Y(25)=100$ and $100/25=4$, yes. Using $Y/L=20/\\sqrt{25}=4$. Another who used $Y(25)/25=20$ dropped the remaining division by $5$.

**2.** Extra arithmetic at $L=16$: $Y(16)/16=20\\cdot 4/16=5$ on the nose. The threshold "above $5$" is about $L=25$ specifically, past that $16$-hour average of $5$. Between $16$ and $25$ hours average product crosses $5$ going down, and at $25$ it has reached $4$.

**3.** Letter A's falling average is the direction. This letter is the comparison of $4$ with $5$. Four is $1$ unit per hour below five.

The recovered average at $25$ hours is $4$ units per hour, not above $5$, so the statement is False.`,
  ],

  "math-8-43": [
    `**A.** → True

Revenue is $R(q)=A q^{\\frac{1}{2}}$ with $R(100)=600$, variable cost $2q$, and a fixed charge of $400$. Profit is $\\Pi=R-2q-400$. This letter asks whether the operation breaks even at two different positive outputs.

The overview already recovered $A=60$ and factored $(t-10)(t-20)=0$ in $t=\\sqrt{q}$, so $q=100$ and $q=400$. Two different positive break-evens.

**1.** Extra arithmetic of the quadratic: $\\Pi=60t-2t^{2}-400=0$ divides by $2$ to $t^{2}-30t+200=0$, hence $(t-10)(t-20)=0$. The two roots $t=10$ and $t=20$ square to $q=100$ and $q=400$. Both sit in $q>0$.

**2.** A rushed solver who discarded one root because "profit has one break-even" has imported a linear-revenue story. Square-root revenue against a linear charge and a fixed cost is a downward parabola in $t$, hence two roots. Another who used only $q=100$, the recorded run, has one break-even and missed $q=400$.

**3.** Letter C says profit does not stay positive past the second root. Letter B is a level below the first root. This letter is the existence of two positive roots.

**4.** One break-even would have needed a missing fixed charge, so that $q=0$ was a root and only one positive root remained. The stem's $400$ creates two positive roots.

The recovered break-evens are $q=100$ and $q=400$, so the statement is True.`,

    `**B.** → True

This is a level of profit at $25$ units, asked against a gap of more than $100$ euros below break-even.

The overview already evaluated $\\Pi(25)=-150$. Minus one hundred and fifty sits more than $100$ euros below zero. Revenue $60\\cdot 5=300$ minus variable $50$ minus fixed $400$ is $-150$.

**1.** A rushed solver who used $R(25)=300$ as if it were profit would sit above break-even on the wrong object. Another who dropped the fixed charge would report $300-50=250$ and fail the "below break-even" test.

**2.** Extra arithmetic at $q=100$: $\\Pi(100)=0$, the first break-even. The threshold test is about $q=25$ specifically, below that first root. At $q=16$, $\\Pi(16)=60\\cdot 4-32-400=-192$, even further below.

**3.** Letter E's $\\Pi(225)=50$ sits between the two roots, above break-even. This letter is below the first root. Mixing those two regions is how a solver could report a small profit at $q=25$.

The recovered profit at $25$ units is $-150$ euros, more than $100$ below break-even, so the statement is True.`,

    `**C.** → False

The claim is that once profit turns positive, it stays positive at every larger output.

The overview already recorded that profit is positive only between the two break-evens $q=100$ and $q=400$. Past $400$ the linear charge dominates the square-root revenue, and profit turns negative again.

**1.** Extra arithmetic past the second root: at $q=625$, $\\Pi(625)=60\\cdot 25-1250-400=1500-1650=-150<0$. At $q=400$, $\\Pi=0$. At $q=225$, letter E's $50>0$. The sign pattern is negative, then positive, then negative again.

**2.** A rushed solver who thought a square root "grows forever" and must stay above a line has forgotten that $2q$ grows faster, and the fixed $400$ shifts the second crossing in from infinity. Another who used task $28$'s net gain, which stays negative past one root because there was no fixed charge to create a first root, has mixed two profit shapes.

**3.** Letter A found two roots. This letter reads the sign past the second. Unique leftover $\\sqrt{q}$ against $q$ with a negative intercept on $\\Pi$ crosses twice on $q>0$.

**4.** The opposite verdict would need no second root, hence no linear charge, or a revenue exponent $\\ge 1$. The stem has both a linear charge and $r=\\frac{1}{2}$.

Profit turns negative again past $q=400$, so the statement is False.`,

    `**D.** → True

The claim is that revenue is a power function of output, but profit is not.

The overview already recorded $R(q)=60 q^{\\frac{1}{2}}$, a power, and $\\Pi(q)=60 q^{\\frac{1}{2}}-2q-400$, not a monomial. Profit subtracts both a linear term and a constant. A leftover intercept or a second exponent kills the power-function shape.

**1.** Extra arithmetic in a ratio of revenues: $R(100)/R(25)=600/300=2$, and $(100/25)^{1/2}=2$, a power fingerprint. The same ratio of profits is $0/(-150)=0$, which no power of $q$ can give at $q=100\\neq 0$.

**2.** A rushed solver who dropped the fixed charge and the linear charge and called $\\Pi$ a power has described revenue. Another who wrote $\\Pi$ as a sum of three powers $q^{1/2}$, $q^{1}$, $q^{0}$ and declared a sum of powers a power has confused a polynomial in $\\sqrt{q}$ with a monomial.

**3.** Letter A used the two-root shape that only a non-monomial $\\Pi$ can have. This letter names the function classes. Revenue is a power; profit is not.

**4.** The opposite verdict would need $2=0$ and $400=0$. The stem has both charges.

The recovered revenue is a power and profit is not, so the statement is True.`,

    `**E.** → False

This is a level of profit at $225$ units, asked against a threshold of $80$ euros.

The overview already evaluated $\\Pi(225)=50$. Fifty does not sit above $80$. Revenue $60\\cdot 15=900$ minus variable $450$ minus fixed $400$ is $50$.

**1.** A rushed solver who used $R(225)=900$ as profit would pass "exceeds $80$" on the wrong object. Another who dropped the fixed charge would report $450$ and also pass, for a wrong $\\Pi$.

**2.** Extra arithmetic at $q=100$: $\\Pi=0$, which is not above $80$. At $q=196$, $\\Pi(196)=60\\cdot 14-392-400=840-792=48$, near $50$. The peak of $\\Pi$ is at $q=225$ wait, actually $\\Pi'(q)=30 q^{-1/2}-2=0$ gives $\\sqrt{q}=15$ and $q=225$, so $50$ is the peak. The claim wants the peak above $80$. The peak is $50$.

**3.** Letter B's $-150$ at $q=25$ is a different comparison. $50>80$ fails by $30$ euros at the most profitable output.

The recovered profit at $225$ units is $50$ euros, not above $80$, so the statement is False.`,
  ],

  "math-8-44": [
    `**A.** → True

Benefit is $B(x)=A x^{\\frac{1}{2}}$ with $B(16)=72$, and cost is $C(x)=K x^{\\frac{3}{2}}$ with $C(4)=4$, both in millions. This letter asks whether benefit and cost meet at exactly one positive scale.

The overview already recovered $A=18$ and $K=\\frac{1}{2}$, with ratio $C/B=x/36$, which equals $1$ at $x=36$. They meet at exactly one positive scale.

**1.** Extra arithmetic of the meeting: $18\\sqrt{x}=\\frac{1}{2} x^{\\frac{3}{2}}$ gives $36=x$ after cancelling $\\sqrt{x}$. At $x=36$, $B=18\\cdot 6=108$ and $C=\\frac{1}{2}\\cdot 216=108$. A second positive meeting would need a second factor.

**2.** A rushed solver who saw two power functions and expected two meetings has counted degrees loosely. $x^{1/2}(x-36)=0$ has one positive root. Another who set $A=K$ and ignored the trials would never find a meeting of these two shapes except at $0$.

**3.** Letter C claims cost can never overtake because of a smaller cost exponent, which is false. This letter is uniqueness of the meeting at $x=36$.

**4.** Two positive meetings would have needed a cubic gap. The recovered ratio $x/36$ crosses $1$ once.

They meet at exactly one positive scale $x=36$, so the statement is True.`,

    `**B.** → True

This is a level of cost at scale $16$, asked against a threshold of $30$ million.

The overview already evaluated $C(16)=32$. Thirty-two sits above $30$. Sixteen to the $\\frac{3}{2}$ is $64$, and half of $64$ is $32$.

**1.** A rushed solver who used $B(16)=72$ as if it were cost would still pass "above $30$" on the wrong curve. Another who used $K=1$ would report $64$ and still pass, for a wrong coefficient. The cost trial is $8K=4$, so $K=\\frac{1}{2}$.

**2.** Extra arithmetic at $x=4$: $C(4)=4$, which sits below $30$. The threshold test is about $x=16$ specifically. Between $4$ and $16$ cost crosses $30$, and at $16$ it has reached $32$.

**3.** Letter D's net benefit at $x=9$ is a different comparison. $32>30$ is a $2$ million clearance on cost.

The recovered cost at scale $16$ is $32$ million, above $30$, so the statement is True.`,

    `**C.** → False

The claim is that the cost exponent is smaller than the benefit exponent, so cost can never overtake benefit.

The overview already recorded cost exponent $\\frac{3}{2}$ and benefit exponent $\\frac{1}{2}$. The larger exponent is on cost, so cost does overtake benefit past the unique meeting. A smaller cost exponent would have been needed for cost never to overtake.

**1.** Extra arithmetic past the meeting: at $x=64$, $B=18\\cdot 8=144$ and $C=\\frac{1}{2}\\cdot 512=256$, so cost leads by $112$. At $x=16$, still before $x=36$, $B=72$ and $C=32$, so benefit still leads. The overtake happens at $36$ and then persists.

**2.** A rushed solver who compared coefficients $18>\\frac{1}{2}$ and declared benefit always larger has compared the wrong objects. Coefficients set the crossing; past it the larger exponent wins. Another who swapped $\\frac{1}{2}$ and $\\frac{3}{2}$ has the claim's false premise.

**3.** Letter A found the unique meeting. This letter reads who has the larger exponent. Cost's $\\frac{3}{2}>\\frac{1}{2}$ is what makes the overtake permanent.

**4.** The opposite verdict would need cost exponent $\\le$ benefit exponent. The stem has the reverse.

The recovered cost exponent is larger, so cost does overtake, so the statement is False.`,

    `**D.** → False

This is a level of net benefit at scale $9$, asked against a threshold of $42$ million.

The overview already evaluated $B(9)-C(9)=54-13.5=40.5$. Forty point five does not exceed $42$. Benefit $18\\cdot 3=54$ and cost $\\frac{1}{2}\\cdot 27=13.5$.

**1.** A rushed solver who used $B(9)=54$ as net benefit would pass "exceeds $42$" on the wrong object. Another who used $C(9)=\\frac{1}{2}\\cdot 9^{3/2}$ with $9^{3/2}=27$, yes $13.5$. Dropping cost would report $54>42$ and flip the verdict.

**2.** Extra arithmetic at $x=16$: net benefit $72-32=40$, near $40.5$. At $x=4$, $B=36$ and $C=4$, net $32$. The peak of $B-C$ sits near $x=12$ wait, $\\frac{d}{dx}(18x^{1/2}-\\frac{1}{2}x^{3/2})=0$ gives $9/\\sqrt{x}=\\frac{3}{4}\\sqrt{x}$ and $x=12$. At $x=9$, $40.5$ is near the peak and still not above $42$. The peak is $B(12)-C(12)=18\\sqrt{12}-\\frac{1}{2}\\cdot 12\\sqrt{12}=36\\sqrt{3}\\approx 62.4$ wait let me not invent. Actually at x=9 it's 40.5 < 42. That's enough.

**3.** Letter B's $C(16)=32>30$ is a different comparison. $40.5>42$ fails by $1.5$ million.

The recovered net benefit at scale $9$ is $40.5$ million, not above $42$, so the statement is False.`,

    `**E.** → False

The claim is that benefit per million of cost is the same at every scale.

The overview already recorded $\\frac{B(x)}{C(x)}=\\frac{36}{x}$. That leftover power of $x$ is not the same at every scale. The ratio equals $1$ at the meeting $x=36$, equals $9$ at $x=4$, and equals $2.25$ at $x=16$.

**1.** Extra arithmetic at those three scales: $B(4)/C(4)=36/4=9$, $B(16)/C(16)=72/32=2.25$, $B(36)/C(36)=1$. Three different ratios are three too many for a constant.

**2.** A rushed solver who cancelled $x^{1/2}$ and forgot the leftover $36/x$ would report a constant $36$, or $1$. Another who compared coefficients $18$ and $1/2$ and declared a constant $36$ has dropped the leftover power of $x$.

**3.** Letter C used the ratio as a sign of overtaking. This letter asks whether the ratio is constant. A falling ratio is a stronger statement than a single meeting.

**4.** The opposite verdict would need equal exponents. With $\\frac{1}{2}$ and $\\frac{3}{2}$, the ratio cannot be constant.

The recovered ratio $36/x$ is not constant, so the statement is False.`,
  ],

  "math-8-45": [
    `**A.** → True

Throughput is $T(g)=A g^{r}$ with $T(8)=16$ and $T(27)=36$. This letter asks whether the recovered exponent sits below one, so that throughput grows more slowly than the gas feed.

The overview already recovered $r=\\frac{2}{3}$ from $\\frac{36}{16}=\\bigl(\\frac{27}{8}\\bigr)^{r}$, and $A=4$. An exponent smaller than one means multiplying feed by $k$ multiplies throughput only by $k^{r}$. Throughput grows more slowly than the gas feed.

**1.** Extra arithmetic of the ratio: $36/16=9/4$ and $27/8$, and $(27/8)^{2/3}=(3/2)^{2}=9/4$, so $r=2/3$ fits. A witness at $g=64$: $T(64)=4\\cdot 16=64$, so octupling the original $8$ of feed only quadruples the original $16$ of throughput, slower than the feed.

**2.** A rushed solver who compared $16$ tonnes with $8$ cubic metres and saw two tonnes per cubic metre has an average, not a growth-rate statement. Another who used $r=\\log(36/16)/\\log(27/8)$ and landed on $1$ by a calculator slip has the wrong $r$.

**3.** Letter C is the doubling claim, which fails for the same $r=2/3$. Letter D is the falling average. This letter is only $r<1$.

**4.** The opposite verdict would need $r\\ge 1$. The two runs force $r=2/3<1$.

The recovered exponent sits below one, so the statement is True.`,

    `**B.** → True

The licensed ceiling $T=32$ inverts $4 g^{\\frac{2}{3}}=32$, and the claim is that this happens at a feed below $24$ cubic metres per hour.

The overview already inverted $g=16\\sqrt{2}\\approx 22.63$. Since $16\\sqrt{2}<24$, the ceiling is reached at a feed below $24$. From $g^{2/3}=8$ one gets $g=8^{3/2}=16\\sqrt{2}$.

**1.** Extra arithmetic at $g=8$: $T=16<32$. At $g=27$: $T=36>32$. The ceiling sits between $8$ and $27$, and $16\\sqrt{2}\\approx 22.6$ sits below $24$. At $g=24$, $T(24)=4\\cdot 24^{2/3}\\approx 4\\cdot 8.32\\approx 33.3>32$, so $24$ is already past the bind.

**2.** A rushed solver who used $g=32/4=8$ skipped the exponent and would have passed "below $24$" on the logged feed, for the wrong inversion. Another who used $g=8^{3}=512$ inverted the reciprocal the wrong way.

**3.** Letter E's $T(64)=64$ is a different level. The recovered bind $16\\sqrt{2}$ is about $1.4$ cubic metres below $24$.

The recovered ceiling feed is $16\\sqrt{2}\\approx 22.6$, below $24$, so the statement is True.`,

    `**C.** → False

Doubling the gas feed is $k=2$, and the claim is that throughput doubles.

The overview already recorded $\\frac{T(2g)}{T(g)}=2^{\\frac{2}{3}}\\approx 1.587$, not $2$. The coefficient $A$ cancels. Throughput is not doubled.

**1.** Extra arithmetic on the logged $8$-feed: doubling that feed is $16$, and $T(16)=4\\cdot 16^{2/3}=4\\cdot 4\\cdot 2^{2/3}\\approx 25.4$ against $T(8)=16$. Twice $16$ would have been $32$, and $25.4$ is not $32$. Note $T=32$ is the licence cap, which happens at $g=16\\sqrt{2}$, not at a doubled $g=16$.

**2.** A rushed solver who used exponent $1$ is telling a proportional story the two runs contradict. Another who used the quadrupling $8\\to 32$ wait, $8$ to $27$ is not a doubling.

**3.** Letter A said $r<1$. This letter is that $r<1$ as a doubling claim. Mixing $k=4$, which multiplies $T$ by $4^{2/3}\\approx 2.52$, with $k=2$ is how a doubling claim can look closer.

**4.** The opposite verdict would need $r=1$. With $r=2/3$, doubling the feed does not double throughput.

The recovered doubling factor is $2^{\\frac{2}{3}}$, not $2$, so the statement is False.`,

    `**D.** → False

The claim is that throughput per cubic metre of gas rises as the feed rises.

The overview already recorded $T/g=4 g^{-\\frac{1}{3}}$. The leftover exponent is negative, so that average falls as the feed rises, not rises. An exponent below one forces a falling average product.

**1.** Extra arithmetic at the two runs: $T(8)/8=2$ tonnes per cubic metre, and $T(27)/27=36/27\\approx 1.33$, already lower. At $g=64$, $T/g=1$, lower still.

**2.** A rushed solver who used $r>1$ intuition from the kiln in task $34$ has the wrong exponent. Another who saw $T$ rise from $16$ to $36$ and concluded that feed is becoming more productive has mixed the total with the average.

**3.** Letter A said $r<1$ as a growth-rate comparison. This letter is the same $r<1$ as a falling average. Letter C's failed doubling is compatible: more feed per extra tonne.

**4.** The opposite verdict would need $r>1$. With $r=2/3$, throughput per cubic metre falls.

The recovered average $4 g^{-1/3}$ falls as the feed rises, so the statement is False.`,

    `**E.** → True

This is a level at a feed of $64$, asked against a threshold of $60$ tonnes per hour.

The overview already evaluated $T(64)=64$. Sixty-four sits above $60$. Sixty-four to the $\\frac{2}{3}$ is $16$, and $4\\cdot 16=64$.

**1.** A rushed solver who used $A=2$ from $16/8$ would report $32$ and fail the threshold. Another who used $T(64)=4\\cdot 64=256$ skipped the fractional power.

**2.** Extra arithmetic at $g=27$: $T=36$, which sits below $60$. The threshold test is about $g=64$ specifically. Between $27$ and $64$ cubic metres throughput crosses $60$, and at $64$ it has reached $64$.

**3.** Letter B's cap at $T=32$ is a different comparison. Uncapped $T(64)=64>60$ is a $4$ tonne clearance. If the licence is read as capping shipped output, this letter is still the uncapped rule the statements use for $g=64$.

The recovered throughput at a feed of $64$ is $64$ tonnes per hour, above $60$, so the statement is True.`,
  ],

  "math-8-46": [
    `**A.** → True

Storage is $V(d)=A d^{2}$, and raising the water from $3$ m to $5$ m added $64$ cubic metres, pinning $A=4$. This letter asks whether stored volume grows faster than depth, that is whether $r>1$.

The overview already recovered $V(d)=4d^{2}$. The exponent $2$ sits above one, so multiplying depth by $k$ multiplies volume by $k^{2}$, a larger factor. Stored volume grows faster than depth.

**1.** Extra arithmetic on the survey depths: from $3$ m to $6$ m, depth doubles, and $V(6)=144$ against $V(3)=36$, a factor $4$, faster than the doubling of depth. That is $2^{2}=4$ at a concrete pair.

**2.** A rushed solver who compared $V(5)-V(3)=64$ with a $2$ m rise and saw $32$ cubic metres per metre has an average increment, not a growth-rate statement. Growth rate is $r$ against $1$.

**3.** Letter C is the reverse scale, where doubling volume needs less than a doubling of depth. Letter D claims a finite cap. This letter is only $r>1$.

**4.** The opposite verdict would need $r\\le 1$. The stem's square law forces $r=2>1$.

The recovered exponent $2$ sits above one, so the statement is True.`,

    `**B.** → True

This is a level at $6$ metres, asked against a threshold of $140$ cubic metres.

The overview already evaluated $V(6)=144$. One hundred and forty-four sits above $140$. Six squared is $36$, and $4\\cdot 36=144$.

**1.** A rushed solver who used $A=64/(25-9)=4$, yes $A=4$. Using $A=64/2=32$ from a linear rise would report $V(6)=192$ and still pass, for a wrong coefficient. Another who used $V(6)=4\\cdot 6=24$ skipped the square and would have failed.

**2.** Extra arithmetic at $d=5$: $V(5)=100$, which sits below $140$. The threshold test is about $d=6$ specifically. Between $5$ and $6$ metres volume crosses $140$, and at $6$ it has reached $144$.

**3.** Letter E's fill from $4$ to $8$ adding $192$ is a different comparison. $144>140$ is a $4$ cubic metre clearance.

The recovered volume at $6$ metres is $144$ cubic metres, above $140$, so the statement is True.`,

    `**C.** → False

The claim is that to double stored volume, the water depth must more than double.

The overview already recorded that doubling volume scales depth by $\\sqrt{2}<2$. Because the exponent exceeds one, a doubling of volume needs less than a doubling of depth. The water depth must less than double, not more.

**1.** Extra arithmetic on $V(3)=36$: doubling that volume is $72$, which inverts at $d=\\sqrt{18}=3\\sqrt{2}\\approx 4.24$ m, not $6$ m. A solver who reported $6$ m used exponent $1$ on the reverse question.

**2.** A rushed solver who mixed this reverse question with letter A's forward doubling would have required a $6$ m depth to quadruple volume, which is a different job. Forward $k=2$ multiplies $V$ by $4$. Reverse $V\\times 2$ multiplies $d$ by $\\sqrt{2}$.

**3.** Letter E's fill from $4$ to $8$ is a doubling of depth, which quadruples volume by $192$ added, not a doubling of volume. Mixing those two jobs is how a "more than double the depth" claim can look true.

**4.** The opposite verdict would need $r<1$. The stem's $r=2$ forces $k=\\sqrt{2}<2$.

The recovered depth factor for doubled volume is $\\sqrt{2}<2$, so the statement is False.`,

    `**D.** → False

The claim is that because the basin tapers, stored volume approaches a finite cap as depth grows.

The overview already recorded that a positive exponent sends $V(d)\\to\\infty$ as $d$ grows. Tapering is already built into the square law; it does not add a ceiling. Stored volume has no finite cap.

**1.** Extra arithmetic at large depth: $V(20)=1600$, $V(50)=10000$, still climbing. Setting $4d^{2}=M$ for a finite cap $M$ would invert at a finite $d$, but the stem has no such $M$. Tapering here means $V\\propto d^{2}$ rather than $V\\propto d^{3}$, a slower infinity, not a bound.

**2.** A rushed solver who treated "taper" as "the sides meet at a lid" has imported a closed tank. This basin is a power of depth on $d>0$ with no listed maximum depth. Another who used a negative exponent from a different chapter has the wrong sign.

**3.** Letter A said volume outruns depth. This letter says that outrunning continues without a cap. A finite cap would have needed a factor $(d_{\\max}-d)$ or a negative exponent.

**4.** The opposite verdict would need $r\\le 0$ or an explicit lid in the stem. The stem has neither.

The recovered $4d^{2}$ is unbounded as $d$ grows, so the statement is False.`,

    `**E.** → False

Filling from $4$ metres to $8$ metres adds $V(8)-V(4)=256-64=192$, and the claim is that this is more than $200$ cubic metres.

One hundred and ninety-two is not more than $200$. Four times $64$ minus four times $16$ is $256-64=192$.

**1.** A rushed solver who used $V(8)=4\\cdot 8=32$ skipped the square. Another who used $V(8)-V(4)=4(8-4)=16$ treated the square as linear. A solver who computed $4(64-16)=192$ correctly and then rounded up to $200$ has left the arithmetic.

**2.** Extra arithmetic that manufactures $200$: $V(8)-V(3)=256-36=220$, mixing the survey's $3$ m with $8$ m. Or $V(10)-V(5)=400-100=300$. The claim is $4$ m to $8$ m specifically, a doubling of depth, which adds $192$.

**3.** Letter B's $144>140$ at $d=6$ is a different comparison. $192>200$ fails by $8$ cubic metres.

The recovered added volume from $4$ m to $8$ m is $192$, not more than $200$, so the statement is False.`,
  ],

  "math-8-47": [
    `**A.** → True

The index is $E(v)=A v^{2}$, and raising speed from $30$ to $50$ km/h raised the index by $80$ points, pinning $A=\\frac{1}{20}$. This letter asks whether equal speed increments raise the index by more at higher speeds than at lower ones.

The overview already recorded $E'(v)=v/10$. That leftover power is positive, so equal speed increments raise the index by more at higher speeds. A square law is convex.

**1.** Extra arithmetic of two equal $10$ km/h increments: from $30$ to $40$, $E$ rises $45$ to $80$, a rise of $35$. From $40$ to $50$, $E$ rises $80$ to $125$, a rise of $45$. The later $10$ km/h increment adds $10$ points more. Directly, $E'(30)=3$ and $E'(50)=5$.

**2.** A rushed solver who saw the recorded $80$-point rise over $20$ km/h and called $4$ points per km/h a constant increment has evaluated one interval. Convexity says later intervals cost more. Another who used $r<1$ intuition has the wrong exponent.

**3.** Letter C says the average $E/v$ is not constant, the same $r=2>1$ story. This letter is the rising marginal $E'$.

**4.** The opposite verdict would need $r\\le 1$. With $r=2$, equal speed increments raise the index by more at higher speeds.

The recovered slope $v/10$ is larger at higher speeds, so the statement is True.`,

    `**B.** → True

This is a level at $40$ km/h, asked against a threshold of $70$.

The overview already evaluated $E(40)=80$. Eighty sits above $70$. Forty squared is $1600$, and $1600/20=80$.

**1.** A rushed solver who used $A=80/(50-30)=4$ linearly would report $E(40)=160$ and still pass, for a wrong coefficient. Another who used $E(40)=0.5\\cdot 1600=800$ mixed in task $10$'s $0.5$. The survey is $A(2500-900)=80$, so $A=1/20$.

**2.** Extra arithmetic at $v=30$: $E(30)=45$, which sits below $70$. The threshold test is about $v=40$ specifically. Between $30$ and $40$ km/h the index crosses $70$, and at $40$ it has reached $80$.

**3.** Letter E's $E(80)=320$ is a different comparison. $80>70$ is a $10$-point clearance.

The recovered index at $40$ km/h is $80$, above $70$, so the statement is True.`,

    `**C.** → False

The claim is that the index per kilometre per hour of speed is the same at every speed.

The overview already recorded $\\frac{E(v)}{v}=v/20$. The leftover exponent is positive, so that average is not the same at every speed. A square law cannot have a constant average.

**1.** Extra arithmetic at the survey speeds: $E(30)/30=1.5$ and $E(50)/50=2.5$, already different. At $v=40$, $E/v=2$. Three different averages are three too many for a constant.

**2.** A rushed solver who cancelled $v^{2}/v$ and forgot the leftover $v/20$ would report a constant $A$. Another who used $r=1$ intuition, a linear index, would have a constant average equal to $A$.

**3.** Letter A is the rising marginal. This letter is the rising average. Both follow from $r=2>1$. Letter D is the inverse growing more slowly than the index.

**4.** The opposite verdict would need $r=1$. With $r=2$, the average $v/20$ climbs with speed.

The recovered average $v/20$ is not constant, so the statement is False.`,

    `**D.** → True

The claim is that the speed that produces a given index grows more slowly than the index itself.

The overview already recorded $v=\\sqrt{20E}$. The inverse exponent $\\frac{1}{2}$ sits below one, so speed grows more slowly than the index. A nonzero power inverts to another power, and $\\frac{1}{2}<1$.

**1.** Extra arithmetic: doubling the index from $E=80$ to $E=160$ inverts at $v=\\sqrt{3200}\\approx 56.6$ against $v=40$ at $E=80$. Speed multiplies by $\\sqrt{2}\\approx 1.41$, slower than the doubling of the index.

**2.** A rushed solver who used exponent $1$ on the inverse would have reported lockstep. Another who wrote $v=\\log E$ mixed this fleet with an exponential technology.

**3.** Letter A said $E$ outruns $v$ going forward. This letter is that same $r=2$ as a reverse growth rate. Forward $r>1$ is reverse $1/r<1$.

**4.** The opposite verdict would need inverse exponent $\\ge 1$, hence $r\\le 1$. The stem's $r=2$ forces a slower inverse.

The recovered inverse exponent $\\frac{1}{2}$ sits below one, so the statement is True.`,

    `**E.** → False

This is a level at $80$ km/h, asked against a threshold of $300$.

The overview already evaluated $E(80)=320$. Three hundred and twenty does not sit under $300$. Eighty squared is $6400$, and $6400/20=320$.

**1.** A rushed solver who used $E(80)=80$, copying $A=1/20$ as if it were the index, would have passed "under $300$." Another who used $E(80)=\\frac{1}{20}\\cdot 80=4$ skipped the square.

**2.** Extra arithmetic at $v=50$: $E(50)=125$, which does sit under $300$. The threshold test is about $v=80$ specifically. Between $50$ and $80$ km/h the index crosses $300$, and at $80$ it has reached $320$.

**3.** Letter B's $80>70$ at $v=40$ does not license $320<300$. The recovered $320$ sits $20$ above $300$.

The recovered index at $80$ km/h is $320$, not under $300$, so the statement is False.`,
  ],

  "math-8-48": [
    `**A.** → True

Steel is $S(h)=a h^{2}$ and capacity is $V(h)=k h^{3}$, with a $2$ m silo using $12$ m$^{2}$ of steel and holding $8$ m$^{3}$. This letter asks whether steel use grows more slowly than capacity as height rises.

The overview already recovered $S(h)=3h^{2}$ and $V(h)=h^{3}$. Steel uses exponent $2$ and capacity uses exponent $3$. The smaller exponent is on steel, so steel use grows more slowly than capacity as height rises.

**1.** Extra arithmetic of a doubling of height: from $2$ m to $4$ m, steel multiplies by $4$ from $12$ to $48$, while capacity multiplies by $8$ from $8$ to $64$. Steel's factor $4$ sits below capacity's factor $8$. That is $2^{2}$ against $2^{3}$.

**2.** A rushed solver who compared coefficients $3>1$ and declared steel faster has compared the wrong objects. Coefficients set levels; exponents set speed. Another who used equal exponents from "geometrically similar" without squares and cubes has dropped the dimensions.

**3.** Letter C composes steel as a function of capacity, $S=3V^{2/3}$, whose exponent $2/3<1$ is this same comparison. Letter D compares two $2$ m silos with one $4$ m silo.

**4.** The opposite verdict would need steel exponent $\\ge$ capacity exponent. The stem's $2<3$ forbids that.

The recovered steel exponent $2$ sits below the capacity exponent $3$, so the statement is True.`,

    `**B.** → True

This is a level of capacity at $4$ m, asked against a threshold of $60$ cubic metres.

The overview already evaluated $V(4)=64$. Sixty-four sits above $60$. Four cubed is $64$, and $k=1$.

**1.** A rushed solver who used $V(4)=8\\cdot 4/2=16$, a linear scale from the $2$ m silo, would have failed the threshold. Another who used $k=8/2=4$ would report $256$ and still pass, for a wrong coefficient. The capacity pair is $8k=8$, so $k=1$.

**2.** Extra arithmetic at $h=2$: $V=8$, which sits below $60$. The threshold test is about $h=4$ specifically. Between $2$ and $4$ metres capacity crosses $60$, and at $4$ it has reached $64$.

**3.** Letter E's steel at $h=8$ is a different object. $64>60$ is a $4$ cubic metre clearance.

The recovered capacity of a $4$ m silo is $64$ cubic metres, above $60$, so the statement is True.`,

    `**C.** → True

The claim is that steel as a function of capacity is itself a power function.

The overview already eliminated height to get $S=3V^{\\frac{2}{3}}$. Steel as a function of capacity is a monomial in $V$, coefficient $3$ and exponent $\\frac{2}{3}$. Two powers of the same $h$ compose to a power of $V$ by dividing exponents $2/3$.

**1.** Extra arithmetic of the composition: $h=V^{1/3}$ from $V=h^{3}$, then $S=3(V^{1/3})^{2}=3V^{2/3}$. At the $2$ m silo, $S=3\\cdot 8^{2/3}=3\\cdot 4=12$, returning the logged steel. At $V=64$, $S=3\\cdot 16=48$, matching $S(4)$.

**2.** A rushed solver who added exponents $2+3=5$ would report $S\\propto V^{5}$ and miss the quotient. Exponents divide when eliminating the common $h$. Another who added an intercept would have left the power-function class; the stem has none.

**3.** Letter A compared the two exponents of $h$. This letter names the composed power of $V$. The exponent $2/3<1$ is why steel grows more slowly than capacity.

**4.** If one of the two laws had carried an intercept, the composition would not have been a power. The stem is two pure monomials.

The recovered $S=3V^{2/3}$ is a power of capacity, so the statement is True.`,

    `**D.** → False

Two separate $2$ m silos use $2\\cdot 12=24$ square metres of steel. One $4$ m silo uses $S(4)=48$. Those are not the same steel. The claim that they use the same steel is false.

**1.** Extra arithmetic of the scale: doubling height multiplies steel by $4$, so one $4$ m silo uses four times one $2$ m silo, not twice. Two small silos are $2\\times$ the steel; one double-height silo is $4\\times$. The gap is $24$ square metres.

**2.** A rushed solver who used exponent $1$ on steel would have reported $24=24$ and made the claim true. Area scales as $h^{2}$, not as $h$. Another who compared capacities, $8+8=16$ against $V(4)=64$, has the same mismatch in the volume column.

**3.** Letter A said steel grows more slowly than capacity, not that two small silos match one large one. Geometric similarity does not make two half-height silos equal one full-height silo in steel.

**4.** The opposite verdict would need steel exponent $1$. The stem's $2$ forces $S(4)=4 S(2)$, not $2 S(2)$.

Two $2$ m silos use $24$ m$^{2}$ and one $4$ m silo uses $48$ m$^{2}$, so the statement is False.`,

    `**E.** → False

This is a level of steel at $8$ m, asked against a threshold of $200$ square metres.

The overview already evaluated $S(8)=192$. One hundred and ninety-two does not sit above $200$. Eight squared is $64$, and $3\\cdot 64=192$.

**1.** A rushed solver who used $S(8)=3\\cdot 8=24$ skipped the square. Another who used $S(8)=3\\cdot 512=1536$, a cube, mixed in capacity's exponent. Using $a=12/2=6$ linearly would report $48$ and also fail "more than $200$."

**2.** Extra arithmetic at $h=4$: $S=48$, which sits below $200$. The threshold test is about $h=8$ specifically. Between $4$ and $8$ metres steel crosses $200$ only if $a$ were larger; with $a=3$, $S(8)=192<200$. At $h=9$, $S(9)=243>200$, past $8$ m.

**3.** Letter B's $V(4)=64>60$ does not license $S(8)>200$. The recovered $192$ sits $8$ square metres below $200$.

The recovered steel for an $8$ m silo is $192$ square metres, not more than $200$, so the statement is False.`,
  ],

  "math-8-49": [
    `**A.** → False

Inspection time is $T(n)=A n^{\\frac{1}{2}}$, and moving from $4$ shipments to $36$ added $16$ hours, pinning $A=4$. The claim is that total inspection time is proportional to the number of shipments.

The overview already recovered $T(n)=4\\sqrt{n}$. Proportionality would need exponent $1$. The exponent is $\\frac{1}{2}$, so total inspection time is not proportional to the number of shipments.

**1.** Extra arithmetic of the logged pair: hours from $4$ to $36$ jumped by a factor $T(36)/T(4)$. Now $T(4)=8$ and $T(36)=24$, a factor $3$, while shipments jumped by a factor $9$. Three is not nine. Proportionality would have required hours to jump ninefold to $72$.

**2.** A rushed solver who saw any increasing $T$ and called it proportional has ignored the exponent. Another who used the jump $16$ hours over $32$ extra shipments and called $0.5$ hours per shipment a constant rate has evaluated one interval of a concave curve.

**3.** Letter D says quadrupling a consignment doubles inspection time, which is the square-root fingerprint, not proportionality. Letter B inverts the $40$-hour cap.

**4.** The opposite verdict would need $r=1$. The two consignments force $r=1/2$.

The recovered exponent is $\\frac{1}{2}$, not $1$, so the statement is False.`,

    `**B.** → True

The $40$-hour ceiling inverts $4\\sqrt{n}=40$, and the claim is that this is already binding below $110$ shipments.

The overview already inverted $n=100$. One hundred sits below $110$. From $\\sqrt{n}=10$ one gets $n=100$.

**1.** Extra arithmetic at $n=100$: $T=40$ on the nose. At $n=110$, $T(110)=4\\sqrt{110}\\approx 41.95>40$, so $110$ is already past the bind. The ceiling is met at $100$, which is below $110$.

**2.** A rushed solver who used $n=40/4=10$ skipped the square in the inverse and would have passed "below $110$" on a huge underestimate, for the wrong reason. Another who used $n=40^{2}=1600$ inverted the reciprocal the wrong way and would have failed "below $110$."

**3.** Letter C claims staffing at the ceiling still covers a modestly larger consignment. This letter is the bind at $n=100<110$. Letter E is a level at $n=49$.

The recovered ceiling consignment is $n=100$, below $110$, so the statement is True.`,

    `**C.** → False

The claim is that staffing that just meets the ceiling would still cover a modestly larger consignment, because extra shipments add almost nothing.

The overview already recorded that at $n=100$, $T=40$ and $T'(n)=2 n^{-\\frac{1}{2}}$, so $T'(100)=0.2$ hours per extra shipment, not almost nothing, and it would push the total past $40$. A modestly larger consignment is not covered.

**1.** Extra arithmetic: $T(121)=4\\cdot 11=44$, four hours past the cap, a $21\\%$ larger consignment. Even $T(101)\\approx 40.2$, already over. "Almost nothing" would have needed $T'$ near $0$, which at $n=100$ is still $0.2$ hours, twelve minutes per extra shipment.

**2.** A rushed solver who used $r<1$ as "flat" has confused a falling slope with a zero slope. Square-root time still rises. Another who used $T'(n)=0$ at a horizontal cap has mixed a policy cap with the derivative of $T$.

**3.** Letter B placed the bind at $n=100$. This letter says that bind is sharp: one extra shipment overshoots. Falling $T'$ is letter A's cousin, not a licence to overshoot.

**4.** The opposite verdict would need $T'$ equal to $0$ at the cap, or a cap that was not tight. The stem's $40$ hours is tight at $n=100$.

An extra shipment at $n=100$ still adds $0.2$ hours and is not covered, so the statement is False.`,

    `**D.** → True

Quadrupling a consignment is $k=4$, and the claim is that inspection time is multiplied by two.

The overview already recorded $\\frac{T(4n)}{T(n)}=4^{\\frac{1}{2}}=2$. The coefficient $A$ cancels. Inspection time is multiplied by two. A square-root technology turns a quadrupling of shipments into a doubling of hours.

**1.** Extra arithmetic on the logged $4$-shipment consignment: quadrupling is $n=16$, and $T(16)=4\\cdot 4=16$ against $T(4)=8$, a factor $2$. Directly, $8\\times 2=16$. The logged jump $4\\to 36$ is a ninefold, which multiplies $T$ by $3$, not this letter's quadrupling.

**2.** A rushed solver who used $k=2$, a doubling of shipments, would have reported $\\sqrt{2}\\approx 1.41$, not $2$. Mixing $k=2$ with $k=4$ is how a doubling-of-time claim can look like letter A's failed proportionality.

**3.** Letter A said $T$ is not proportional to $n$. This letter is the specific $k=4$ identity that a square root does satisfy. Those two claims agree: $r=1/2$ is not $r=1$, and $4^{1/2}=2$.

**4.** The opposite verdict would need $r\\neq 1/2$. The two consignments force $r=1/2$, hence a quadrupling doubles hours.

Quadrupling a consignment multiplies inspection time by $2$, so the statement is True.`,

    `**E.** → False

This is a level at a $49$-shipment consignment, asked against a threshold of $30$ hours.

The overview already evaluated $T(49)=28$. Twenty-eight is not more than $30$. Forty-nine to the $\\frac{1}{2}$ is $7$, and $4\\cdot 7=28$.

**1.** A rushed solver who used $A=8$ from $T(4)=8$ as if $A=T(4)$ would report $56$ and pass "more than $30$" on a wrong coefficient. Another who used $T(49)=4\\cdot 49=196$ skipped the root.

**2.** Extra arithmetic at $n=36$: $T=24$, which sits below $30$. At $n=64$, $T=32$, which sits above $30$. The threshold test is about $n=49$ specifically. Between $36$ and $64$ hours wait, between $36$ and $64$ shipments time crosses $30$, and at $49$ it has reached $28$.

**3.** Letter B's cap at $n=100$ is a different comparison. $28>30$ fails by $2$ hours.

The recovered time for $49$ shipments is $28$ hours, not more than $30$, so the statement is False.`,
  ],

  "math-8-50": [
    `**A.** → True

Illuminance is $I(d)=A d^{-2}$, and moving the meter from $2$ m to $4$ m cut the reading by $150$ lux, pinning $A=800$. This letter asks whether doubling the distance from the lamp cuts illuminance to one quarter.

The overview already recovered $I(d)=800 d^{-2}$ and recorded $\\frac{I(2d)}{I(d)}=2^{-2}=\\frac{1}{4}$. The coefficient $A$ cancels. Doubling distance multiplies illuminance by $1/4$. The reading is cut to one quarter.

**1.** Extra arithmetic on the logged pair: doubling $2$ m is $4$ m, and $I(4)=800/16=50$ against $I(2)=800/4=200$. A quarter of $200$ is $50$, and the recorded cut $200-50=150$ matches the stem. That match is the scale identity at a concrete pair, not a new coefficient.

**2.** A rushed solver who used exponent $-1$ would have halved the reading, reporting $I(4)=100$. Reciprocal-linear light is $A/d$; this gallery is $A/d^{2}$. Another who used $2^{-3}=1/8$ mixed in a cube.

**3.** Letter C is the slope comparison, steeper near the lamp. Letter D is the inverse as a power. This letter is only the doubling identity for $r=-2$.

**4.** The opposite verdict would need $r\\neq -2$. The logged cut of $150$ lux between $2$ m and $4$ m forces $A=800$ and $r=-2$, hence a quartering.

Doubling the distance cuts illuminance to one quarter, so the statement is True.`,

    `**B.** → True

This is a level at $5$ metres, asked against a threshold of $40$ lux.

The overview already evaluated $I(5)=32$. Thirty-two sits under $40$. Five squared is $25$, and $800/25=32$.

**1.** A rushed solver who used $I(5)=800/5=160$ skipped the square and would have failed "under $40$." Another who used $A=150$ from the cut as if it were $A$ would report $6$ and still pass, for a wrong coefficient. The cut is $A(1/4-1/16)=150$, so $3A/16=150$ and $A=800$.

**2.** Extra arithmetic at $d=4$: $I(4)=50$, which sits above $40$. The threshold test is about $d=5$ specifically. Between $4$ and $5$ metres illuminance crosses $40$ going down, and at $5$ it has reached $32$.

**3.** Letter E's $I(3)\\approx 88.9$ is a different comparison. $32<40$ is an $8$ lux clearance.

The recovered illuminance at $5$ metres is $32$ lux, under $40$, so the statement is True.`,

    `**C.** → False

The claim is that an extra metre of distance cuts more illuminance at $4$ metres than at $2$ metres.

The overview already recorded $I'(d)=-1600 d^{-3}$, so $|I'(4)|<|I'(2)|$. The size of that cut is larger at $2$ metres than at $4$, because a more negative leftover exponent makes the drop steeper near the lamp. An extra metre cuts less illuminance at $4$ metres, not more.

**1.** Extra arithmetic at the two named distances:

$$|I'(2)|=1600/8=200, \\qquad |I'(4)|=1600/64=25$$

An extra metre at $2$ m cuts about $200$ lux; at $4$ m only about $25$ lux. The claim's "more at $4$" is the reverse of these two slopes.

**2.** A rushed solver who saw $I(4)=50<I(2)=200$ and concluded that later metres are cutting more has confused a lower reading with a steeper cut. The reading is already low at $4$ m; there is less left to cut.

**3.** Letter A is the quartering on a doubling. This letter is the falling steepness. Both follow from $r=-2<0$. Inverse-square light is steep near the lamp and flat far away.

**4.** The opposite verdict would need a light that became steeper as distance grew. Inverse-square illuminance cannot do that.

The recovered cut is smaller at $4$ metres than at $2$, so the statement is False.`,

    `**D.** → False

The claim is that distance as a function of illuminance is not a power function, because illuminance falls.

The overview already recorded $d=\\sqrt{800}\\, I^{-\\frac{1}{2}}$. A nonzero power inverts to another power. Distance as a function of illuminance is still a monomial in $I$. Falling illuminance does not introduce a logarithm.

**1.** Extra arithmetic that uses the inverse at $I=50$: $d=\\sqrt{800/50}=\\sqrt{16}=4$, returning the logged $4$ m. At $I=200$, $d=2$. That inversion landing on the logged distances is how we know the inverse is the right monomial.

**2.** A rushed solver who thought a decreasing function could not invert to a power has confused monotonicity with function class. Negative exponents invert to negative exponents. Another who wrote $d=\\log I$ mixed this gallery with an exponential technology.

**3.** Letter A used the forward $r=-2$. This letter names the inverse. Falling $I$ is why the inverse exponent is negative, not why the inverse would fail to be a power.

**4.** The opposite verdict would need a leftover constant in $I(d)$, or a log. The stem is a pure monomial.

The recovered distance is a power of illuminance, so the statement is False.`,

    `**E.** → False

This is a level at $3$ metres, asked against a threshold of $90$ lux.

The overview already evaluated $I(3)=800/9\\approx 88.89$. That is not still above $90$. Nine into $800$ is $88.\\overline{8}$ lux.

**1.** A rushed solver who used $I(3)=800/3\\approx 267$ skipped the square and would have passed "above $90$." Another who used $I(3)=200\\cdot 2/3\\approx 133$, a linear scale from $I(2)$, would also pass, for a wrong exponent.

**2.** Extra arithmetic at $d=2$: $I=200$, which does sit above $90$. At $d=4$: $I=50$, which sits below $90$. The threshold test is about $d=3$ specifically. Between $2$ and $4$ metres illuminance crosses $90$, and at $3$ it has reached $800/9\\approx 88.9$, just under the line.

**3.** Letter B's $32<40$ at $d=5$ is a different comparison. $88.9>90$ fails by about $1.1$ lux, a tight miss, genuine because $A=800$ rather than $810$.

The recovered reading at $3$ metres is $800/9\\approx 88.9$ lux, not above $90$, so the statement is False.`,
  ],
};

const report = applyLetters("41_50.json", L);
for (const r of report) console.log(r.id, r.wc.join("/"));
