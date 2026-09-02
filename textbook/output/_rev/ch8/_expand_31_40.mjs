import { applyLetters } from "./_expand_apply.mjs";

const L = {
  "math-8-31": [
    `**A.** → True

Packing output is $N(h)=A h^{\\frac{2}{3}}$, and the recorded extension from $8$ to $27$ hours adding $90$ items pins $A$. This letter is a slope comparison: whether an extra hour adds fewer items after twenty-seven hours than after eight.

The overview already recovered $A=18$ from $5A=90$, so $N(h)=18h^{\\frac{2}{3}}$ and $N'(h)=12 h^{-\\frac{1}{3}}$. The leftover exponent is negative, so $N'(27)<N'(8)$. Later hours add less, not more.

**1.** Extra arithmetic at the two named shifts:

$$N'(8)=12/2=6, \\qquad N'(27)=12/3=4$$

An extra hour after $8$ hours adds $6$ items; after $27$ hours it adds $4$. The claim's direction matches these two slopes.

**2.** A rushed solver who saw $N(27)=162>N(8)=72$ and concluded that later hours are more productive has confused height with slope. The count is still rising, just more slowly. Another who used $r>1$ intuition has the wrong exponent.

**3.** Letter C is the falling average $N/h$. This letter is the falling marginal $N'$. Both are the $r=\\frac{2}{3}<1$ story. Convex $r>1$ would have flipped both.

**4.** The opposite verdict would need $r>1$. With $r=\\frac{2}{3}$, an extra hour adds fewer items after twenty-seven hours than after eight.

The recovered slope is smaller at $27$ hours than at $8$, so the statement is True.`,

    `**B.** → False

Doubling any shift is $k=2$, and the claim is that items packed double.

The overview already recorded $\\frac{N(2h)}{N(h)}=2^{\\frac{2}{3}}\\approx 1.587$, not $2$. The coefficient $A$ cancels. A doubled shift buys about fifty-nine percent more items, not one hundred percent more.

**1.** Extra arithmetic on the logged $8$-hour output: doubling those $8$ hours is $16$ hours, and $N(16)=18\\cdot 16^{\\frac{2}{3}}=18\\cdot 4\\cdot 2^{\\frac{2}{3}}\\approx 114$ against $N(8)=72$. Twice $72$ would have been $144$, and $114$ is not $144$.

**2.** A rushed solver who used exponent $1$ is telling a proportional story the recorded extension already contradicts: hours from $8$ to $27$ would have had to take items from $72$ to $243$, not to $162$. Another who used $2^{\\frac{1}{2}}$ mixed this station with a square-root technology.

**3.** Letter E inverts a $250$-item order past $40$ hours. This letter is a forward doubling. Mixing reverse and forward factors, $2^{3/2}$ with $2^{2/3}$, is how a doubling claim can look true.

**4.** The opposite verdict would need $r=1$. With $r=\\frac{2}{3}$, doubling a shift does not double the count.

The recovered doubling factor is $2^{\\frac{2}{3}}$, not $2$, so the statement is False.`,

    `**C.** → True

The claim is that items packed per hour of shift falls as the shift lengthens.

The overview already recorded $\\frac{N(h)}{h}=18 h^{-\\frac{1}{3}}$. The leftover exponent is negative, so that average falls as $h$ grows. Falling average product is the $r<1$ story.

**1.** Extra arithmetic at the two logged shifts: $N(8)/8=72/8=9$ items per hour, and $N(27)/27=162/27=6$, already lower. At $h=64$, $N(64)=18\\cdot 16=288$ and $288/64=4.5$, lower still.

**2.** A rushed solver who saw $N$ rise from $72$ to $162$ and concluded that hours are becoming more productive has mixed the total with the average. Letter A's falling slope is the same story.

**3.** What would flip this verdict is $r>1$. The stem's $\\frac{2}{3}<1$ forces a falling average.

**4.** Letter B's $2^{2/3}$ scale is this letter at $k=2$: a doubled shift raises the total by less than $2$, so items per hour fall.

The recovered average $18 h^{-\\frac{1}{3}}$ falls as the shift lengthens, so the statement is True.`,

    `**D.** → True

This is a level of a $27$-hour shift, asked against a threshold of $150$ items.

The overview already evaluated $N(27)=162$. One hundred and sixty-two sits above $150$. Twenty-seven to the $\\frac{2}{3}$ is $9$, and $18\\cdot 9=162$.

**1.** A rushed solver who used $N(27)=18\\cdot 27=486$ skipped the fractional power. Another who used $A=10$ from $90/9$ would report $90$ and fail the threshold on a wrong coefficient. The gain is $A(9-4)=90$, so $A=18$.

**2.** Extra arithmetic at $h=8$: $N(8)=72$, which sits below $150$. The threshold test is about $h=27$ specifically. Between $8$ and $27$ hours the count crosses $150$, and at $27$ it has reached $162$.

**3.** Letter E's $250$-item order is a different target. $162>150$ is a modest clearance, genuine because $A=18$ rather than $16$.

The recovered count on a $27$-hour shift is $162$ items, above $150$, so the statement is True.`,

    `**E.** → False

The $250$-item order inverts $18 h^{\\frac{2}{3}}=250$, and the claim is that this fits in under $40$ hours.

The overview already inverted $h=(125/9)^{\\frac{3}{2}}\\approx 51.8$ hours, past $40$. The extra arithmetic is that inversion:

$$h^{\\frac{2}{3}}=\\frac{125}{9}, \\qquad h=\\Bigl(\\frac{125}{9}\\Bigr)^{\\frac{3}{2}}\\approx 51.8$$

**1.** A rushed solver who used $h=250/18\\approx 13.9$ skipped the exponent and would have passed "under $40$" on a huge underestimate. Another who used $h=(250/18)^{\\frac{2}{3}}$ inverted the reciprocal the wrong way.

**2.** Extra arithmetic at $h=40$: $N(40)=18\\cdot 40^{\\frac{2}{3}}\\approx 18\\cdot 11.70\\approx 211$, which sits below $250$. Even a $40$-hour shift cannot pack the order. At $h=64$, $N(64)=288>250$, so the order fits between $40$ and $64$ hours, near $52$.

**3.** Letter D's $162>150$ at $h=27$ does not license $250$ items inside $40$ hours. The recovered $51.8$ sits $11.8$ hours past $40$.

The recovered shift for $250$ items is about $51.8$ hours, not under $40$, so the statement is False.`,
  ],

  "math-8-32": [
    `**A.** → True

Drag is $F(v)=A v^{r}$ with runs of $16$ N at $4$ m/s and $128$ N at $16$ m/s, and absorbed power is $P=F\\cdot v$. This letter asks whether that power is a power function of airspeed.

The overview already recovered $r=\\frac{3}{2}$ and $A=2$, then composed $P(v)=2 v^{\\frac{5}{2}}$. Multiplying a power of $v$ by $v$ raises the exponent by one, so $P$ is a monomial in airspeed, coefficient $2$ and exponent $\\frac{5}{2}$.

**1.** Extra arithmetic of the composition: $P=F v=2 v^{\\frac{3}{2}}\\cdot v=2 v^{\\frac{5}{2}}$. The $\\frac{5}{2}$ is $\\frac{3}{2}+1$, addition of exponents under multiplication by $v$, not under composition of two stages.

**2.** A rushed solver who added $r$ to itself, reporting $P\\propto v^{3}$, has squared drag instead of multiplying by speed. Another who left $P$ as $F$ without the extra $v$ has described drag, not power.

**3.** Extra check at $v=16$: $P(16)=2048$ W, which letter E will use. That $2048$ sitting on $2\\cdot 16^{5/2}$ is the fingerprint of a power of airspeed.

**4.** If power had been $F+v$ rather than $F\\cdot v$, the sum of two distinct powers would not have been a single power. The stem multiplies.

The recovered $P(v)=2 v^{\\frac{5}{2}}$ is a power of airspeed, so the statement is True.`,

    `**B.** → False

Doubling airspeed is $k=2$, and the claim is that drag more than triples.

The overview already recorded $\\frac{F(2v)}{F(v)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.828$. Since $2\\sqrt{2}<3$, drag is not more than tripled. The coefficient $A$ cancels.

**1.** Extra arithmetic on the slower run: doubling $4$ m/s is $8$ m/s, and $F(8)=2\\cdot 8^{\\frac{3}{2}}=2\\cdot 16\\sqrt{2}=32\\sqrt{2}\\approx 45.3$ against $F(4)=16$. Triple $16$ would have been $48$, and $45.3$ is not above $48$. The factor $2.828$ sits just under $3$.

**2.** A rushed solver who used $2^{2}=4$ would have passed "more than $3$" on an area story. Another who used $2^{\\frac{5}{2}}\\approx 5.66$ mixed letter A's power exponent with drag. Drag's exponent is $\\frac{3}{2}$, not $\\frac{5}{2}$.

**3.** Letter E is absorbed power at $16$ m/s. This letter is a scale factor on drag. A factor just under $3$ is a tight miss, genuine because $\\sqrt{2}<1.5$.

**4.** The opposite verdict would need $2^{r}>3$, hence $r>\\log_{2} 3\\approx 1.58$. The recovered $r=1.5$ sits just below that line.

The recovered doubling factor is $2\\sqrt{2}<3$, so the statement is False.`,

    `**C.** → True

The claim is about the inverse: whether the airspeed that produces a given drag is itself a power function of that drag.

The overview already recorded $v=(F/2)^{\\frac{2}{3}}$. A nonzero power inverts to another power. From $F=2 v^{\\frac{3}{2}}$, isolate $v$ by raising to $\\frac{2}{3}$. The result is a monomial in $F$.

**1.** Extra arithmetic that uses the inverse at the slower run: $v=(16/2)^{\\frac{2}{3}}=8^{\\frac{2}{3}}=4$, which returns the logged $4$ m/s. That inversion landing on $4$ is how we know the inverse is the right monomial.

**2.** A rushed solver who wrote $v=\\log F$ mixed this rig with an exponential technology. Another who added a stall speed, $v=1+(F/2)^{\\frac{2}{3}}$, would have left the power-function class; the stem has no such floor.

**3.** Letter D uses this inverse at $F=250$. This letter names the inverse as a function class. The same $v\\propto F^{2/3}$ is what made the rating invert in one monomial step.

**4.** If drag had been $2 v^{\\frac{3}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial.

The recovered airspeed is a power of drag, so the statement is True.`,

    `**D.** → False

The mounting rating of $250$ N inverts $2 v^{\\frac{3}{2}}=250$, and the claim is that this first happens at a speed above $30$ m/s.

The overview already inverted $v=25$. Twenty-five is not above $30$. The extra arithmetic is that inversion:

$$v^{\\frac{3}{2}}=125, \\qquad v=125^{\\frac{2}{3}}=25$$

because $125=5^{3}$ and $(5^{3})^{\\frac{2}{3}}=5^{2}=25$.

**1.** A rushed solver who used $v=250/2=125$ skipped the exponent and would have passed "above $30$" on a huge overestimate. Another who used $v=250^{\\frac{2}{3}}\\approx 40$ dropped the $A=2$ and still passed, for a wrong inversion.

**2.** Extra arithmetic at $v=16$, the faster run: $F(16)=128$, well below $250$. At $v=25$, $F=250$ on the nose. At $v=30$, $F(30)=2\\cdot 30^{\\frac{3}{2}}=2\\cdot 30\\sqrt{30}\\approx 329$, already past the rating. The rating is first reached at $25$, not above $30$.

**3.** Letter B's doubling factor just under $3$ is a different comparison. The recovered $25$ m/s sits $5$ m/s below $30$.

The recovered rating speed is $25$ m/s, not above $30$, so the statement is False.`,

    `**E.** → True

This is a level of absorbed power at $16$ m/s, asked against a threshold of $2$ kW.

The overview already evaluated $P(16)=2048$ W $=2.048$ kW. That is more than $2$ kW. Sixteen to the $\\frac{5}{2}$ is $16^{2}\\sqrt{16}=256\\cdot 4=1024$, and $2\\cdot 1024=2048$.

**1.** A rushed solver who used $P=F=128$ W would sit far under $2$ kW on drag rather than power. Another who used $P=128\\cdot 16=2048$ has the right product $F\\cdot v$ at this one speed, which is a check, not a reason to skip the composed exponent on other speeds.

**2.** Extra arithmetic at $v=4$: $P(4)=2\\cdot 4^{\\frac{5}{2}}=2\\cdot 32=64$ W, well under $2$ kW. The threshold test is about $v=16$ specifically. Between $4$ and $16$ m/s power crosses $2$ kW, and at $16$ it has reached $2.048$ kW.

**3.** The opposite verdict would need $P(16)\\le 2000$, which would have required a smaller $A$. The two runs force $A=2$ and $P(16)=2048$.

The recovered power at $16$ m/s is $2.048$ kW, above $2$ kW, so the statement is True.`,
  ],

  "math-8-33": [
    `**A.** → True

Demand is $q(p)=A p^{-\\frac{1}{2}}$ with $q(16)=300$, and revenue is $R=pq$. This letter asks whether revenue rises as the price rises.

The overview already recovered $A=1200$ and $R(p)=1200 p^{\\frac{1}{2}}$. The leftover exponent is positive, so revenue rises as the price rises. Demand is inelastic enough here that a price rise outruns the quantity cut.

**1.** Extra arithmetic at the recorded price and a neighbour: $R(16)=4800$ and $R(25)=6000$, already higher. At $p=64$, $R(64)=9600$, higher still. The climb is monotone.

**2.** A rushed solver who saw quantity fall from $q(16)=300$ to $q(25)=240$ and concluded that revenue must fall has imported letter B's trap. Quantity falling does not force revenue to fall when $|r|<1$. Another who used $R=1200 p^{-\\frac{1}{2}}$ flipped the sign of the revenue exponent.

**3.** Letter B is the false "quantity falls, so revenue falls." Letter C is the inverse of quantity. This letter is the sign of $R'(p)=600 p^{-\\frac{1}{2}}>0$.

**4.** The opposite verdict would need demand exponent $\\le -1$. The stem's $-\\frac{1}{2}$ sits above $-1$, so $R$ rises in $p$.

The recovered revenue $1200 p^{\\frac{1}{2}}$ rises as the price rises, so the statement is True.`,

    `**B.** → False

The claim is that because quantity falls when price rises, revenue must fall as well.

The overview already recorded that $R(p)=1200 p^{\\frac{1}{2}}$ still climbs. Demand is inelastic enough that the price rise outruns the quantity cut. Revenue and quantity need not move together.

**1.** Extra arithmetic of the two directions: from $p=16$ to $p=25$, quantity falls $300\\to 240$, a $20\\%$ cut, while price rises $16\\to 25$, a $56\\%$ rise, and revenue rises $4800\\to 6000$, a $25\\%$ rise. The price rise more than covers the quantity cut.

**2.** A rushed solver who treated $R=pq$ as if $q$ were the only moving piece has forgotten that $p$ moves too. Another who used task $30$'s elastic demand, where $R$ does fall in $p$, has mixed two utilities.

**3.** Letter A named the rising $R$ directly. This letter rejects a false general rule. Inelastic inverse-square-root demand is the case where the general rule fails.

**4.** The opposite verdict would need $|r|>1$ on demand. With $r=-\\frac{1}{2}$, quantity falling does not drag revenue down.

Revenue and quantity need not move together, so the statement is False.`,

    `**C.** → True

The claim is about the inverse: whether the price needed for a given monthly quantity is itself a power function of that quantity.

The overview already recorded $p=(1200/q)^{2}$. A nonzero power inverts to another power. From $q=1200 p^{-\\frac{1}{2}}$, isolate $p$ as a monomial in $q$, coefficient $1200^{2}$ and exponent $-2$.

**1.** Extra arithmetic that uses the inverse at $q=200$: $p=(1200/200)^{2}=36$, which letter E will use. That inversion landing on $36$ is how we know the inverse is the right monomial. At the recorded pair, $p=(1200/300)^{2}=16$, returning the catalogue price.

**2.** A rushed solver who wrote $p=\\log q$ mixed this utility with an exponential technology. Another who added a reservation price would have left the power-function class; the stem has no such floor.

**3.** Letter E uses this inverse at $q=200$. This letter names the inverse as a function class.

**4.** If demand had carried an intercept, the inverse would not have been a power. The stem is a pure monomial.

The recovered price is a power of monthly quantity, so the statement is True.`,

    `**D.** → True

This is a level of quantity at a price of $25$, asked against a threshold of $250$ units.

The overview already evaluated $q(25)=240$. Two hundred and forty is fewer than $250$. Twenty-five is a perfect square, so the square root is $5$, and $1200/5=240$.

**1.** A rushed solver who used $q(25)=1200/25=48$ skipped the remaining root in the exponent. Another who used $R(25)=6000$ as if it were quantity would blow past $250$ on the wrong object.

**2.** Extra arithmetic at $p=16$: $q(16)=300$, which is not fewer than $250$. The threshold test is about $p=25$ specifically. Between $16$ and $25$ euros quantity crosses $250$, and at $25$ it has reached $240$.

**3.** Letter E's $q=200$ at $p=36$ is a different comparison. $240<250$ is a modest clearance, genuine because $A=1200$ rather than $1300$.

The recovered quantity at $25$ euros is $240$ units, fewer than $250$, so the statement is True.`,

    `**E.** → False

A monthly quantity of $200$ inverts the recovered rule, and the claim is that this requires a price above $40$.

The overview already inverted $p=36$. Thirty-six is not above $40$. From $1200 p^{-\\frac{1}{2}}=200$, one gets $p^{\\frac{1}{2}}=6$ and $p=36$.

**1.** A rushed solver who used $p=1200/200=6$ skipped the square in the inverse and would have failed "above $40$" on a huge underestimate, for the wrong reason. Another who used $p=(1200/200)^{\\frac{1}{2}}\\approx 2.45$ inverted the reciprocal the wrong way.

**2.** Extra arithmetic at $p=40$: $q(40)=1200/\\sqrt{40}\\approx 189.7$, which sits below $200$. So $200$ units need a price below $40$, namely $36$. At $p=36$, $q=200$ on the nose.

**3.** Letter D's $240<250$ at $p=25$ does not license $p>40$ for $q=200$. The recovered $36$ sits $4$ euros below $40$.

The recovered price for $200$ units is $36$, not above $40$, so the statement is False.`,
  ],

  "math-8-34": [
    `**A.** → False

Kiln output is $y(x)=A x^{\\frac{4}{3}}$ with $y(27)=324$, and the claim is that doubling the test-firing output requires more than a doubling of the fuel feed.

The overview already recovered $A=4$ and recorded that doubling output scales feed by $2^{\\frac{3}{4}}\\approx 1.682<2$. Because the exponent exceeds one, a doubling of output needs less than a doubling of the input. The feed must less than double, not more.

**1.** Extra arithmetic on the inversion: $4 x^{\\frac{4}{3}}=648$ gives $x^{\\frac{4}{3}}=162$, so $x=162^{\\frac{3}{4}}$. Since $27^{\\frac{4}{3}}=81$ and we want $162=2\\cdot 81$, the feed factor is $2^{3/4}\\approx 1.682$, and $27\\times 1.682\\approx 45.4$ cubic metres, not $54$.

**2.** A rushed solver who used exponent $1$ would have reported a doubled feed of $54$. Another who mixed this reverse question with letter B's rising average would have the right $r>1$ and the wrong direction on the reverse scale.

**3.** Letter B says output per cubic metre rises, the $r>1$ average. This letter is the reverse scale. Both follow from $\\frac{4}{3}>1$, and the reverse scale is $k=2^{3/4}<2$.

**4.** The opposite verdict would need $r<1$. The stem's $\\frac{4}{3}>1$ forces a less-than-doubling of feed.

The recovered feed factor for doubled output is $2^{\\frac{3}{4}}<2$, so the statement is False.`,

    `**B.** → True

The claim is that output per cubic metre of fuel rises as the feed increases.

The overview already recorded $\\frac{y(x)}{x}=4 x^{\\frac{1}{3}}$. The leftover exponent is positive, so that average rises as the feed increases. An exponent above one forces a rising average product.

**1.** Extra arithmetic at the test firing and a neighbour: $y(27)/27=324/27=12$ tonnes per cubic metre, and $y(8)/8=64/8=8$, already lower on a smaller feed. At $x=64$, $y(64)/64=1024/64=16$, higher than $12$.

**2.** A rushed solver who used $r<1$ intuition from a square-root kiln has the wrong exponent. Another who saw the licence cap and thought extra fuel is wasted on the average has mixed shipped output with uncapped $y(x)$. This letter is the uncapped average.

**3.** Letter A used $r>1$ as a reverse scale. This letter uses $r>1$ as a rising average. Letter C is the cap's effect on function class.

**4.** The opposite verdict would need $r\\le 1$. With $r=\\frac{4}{3}$, output per cubic metre rises.

The recovered average $4 x^{\\frac{1}{3}}$ rises as the feed increases, so the statement is True.`,

    `**C.** → True

The site licence forbids shipping more than $1024$ tonnes a day. This letter asks whether, once the licence binds, daily shipped output is no longer a power function of the feed.

The overview already recorded the bind at $x=64$, where $y(64)=1024$. From that feed onward shipped output is the constant $1024$. A horizontal cap is not $A x^{r}$, so daily shipped output is no longer a power of the feed.

**1.** Extra arithmetic at the bind: $4 x^{\\frac{4}{3}}=1024$ gives $x^{\\frac{4}{3}}=256$ and $x=64$. At $x=125$, uncapped $y(125)=4\\cdot 125^{\\frac{4}{3}}=4\\cdot 625=2500$, but shipped output is $1024$. The ratio of shipped output $1024/1024=1$ is a power only of exponent $0$, which does not match the uncapped $\\frac{4}{3}$ on $x<64$. Two exponents on two intervals are not one power on the whole domain.

**2.** A rushed solver who said "a cap is $1024 x^{0}$, which is a power" has described the capped piece alone. The shipped series is the minimum of two formulas. Another who ignored the licence and called $y(x)$ shipped output has rewritten the stem.

**3.** Letter E checks that $x=50$ is still uncapped. Letter D is a level at $x=8$, also uncapped. This letter is the function class once $x\\ge 64$.

**4.** The recovered shipped rule is a two-piece minimum, not a single power, so the statement is True.`,

    `**D.** → True

This is a level at a feed of $8$, asked against a threshold of $50$ tonnes.

The overview already evaluated $y(8)=64$. Sixty-four sits above $50$. Eight to the $\\frac{4}{3}$ is $16$, and $4\\cdot 16=64$.

**1.** A rushed solver who used $y(8)=4\\cdot 8=32$ skipped the fractional power and would have failed the threshold. Another who used $A=12$ from $324/27$ would report $192$ and still pass, for a wrong coefficient. The test firing is $81A=324$, so $A=4$.

**2.** Extra arithmetic at $x=1$: $y(1)=4$, which sits below $50$. The threshold test is about $x=8$ specifically. Between $1$ and $8$ cubic metres output crosses $50$, and at $8$ it has reached $64$.

**3.** Letter E's cap bind at $x=64$ is a different comparison. $64>50$ is a clear clearance on a small feed, still uncapped.

The recovered output at a feed of $8$ is $64$ tonnes, above $50$, so the statement is True.`,

    `**E.** → False

The claim is that the licensed ceiling binds before a feed of $50$.

The overview already inverted the cap at $x=64$, which sits past $50$. A feed of $50$ is still below the cap. The ceiling does not bind before a feed of $50$.

**1.** Extra arithmetic at $x=50$: $y(50)=4\\cdot 50^{\\frac{4}{3}}\\approx 4\\cdot 184.2\\approx 737$, which sits below $1024$. Directly, $50<64$, so the bind at $64$ has not yet arrived. At $x=64$, $y=1024$ on the nose.

**2.** A rushed solver who used $x=27$, the test firing, and saw $324<1024$ but then guessed the bind "soon" at $x=40$ has no inversion. Another who used $x=16$ from $4x=1024$ skipped the exponent.

**3.** Letter C named the bind at $x=64$ as a function-class fact. This letter compares that $64$ with $50$. Sixty-four is not before fifty.

The recovered bind is at feed $x=64$, past $50$, so the statement is False.`,
  ],

  "math-8-35": [
    `**A.** → True

Calibration is $f(x)=A x^{\\frac{2}{3}}$ with $f(8)=36$, and reporting is $g(y)=y^{\\frac{3}{2}}/27$. This letter asks whether $g\\circ f$ returns the original reading.

The overview already recovered $A=9$ and composed $g(f(x))=x$. The extra arithmetic is that composition:

$$g(f(x))=\\frac{1}{27}(9x^{\\frac{2}{3}})^{\\frac{3}{2}}=\\frac{1}{27}\\cdot 9^{\\frac{3}{2}}\\cdot x=\\frac{1}{27}\\cdot 27\\cdot x=x$$

because $9^{\\frac{3}{2}}=(3^{2})^{\\frac{3}{2}}=3^{3}=27$. The product of the exponents is $1$, and the coefficients cancel.

**1.** Extra check at the recorded pair: $f(8)=36$ and $g(36)=36^{\\frac{3}{2}}/27=216/27=8$, returning the raw reading $8$. That round trip is the identity at a concrete pair.

**2.** A rushed solver who multiplied exponents by adding $\\frac{2}{3}+\\frac{3}{2}$ would report $g(f(x))\\propto x^{\\frac{13}{6}}$ and miss the identity. Exponents multiply under composition. Another who forgot the $1/27$ would report $27x$ and miss the cancellation.

**3.** Letter B asks whether this identity grows more slowly than the reading. Letter C is the other order $f\\circ g$. This letter is $g\\circ f=\\mathrm{id}$.

**4.** The opposite verdict would need coefficients that do not cancel, or exponents whose product is not $1$. The stem's $A=9$ and $1/27$ are matched to $\\frac{2}{3}$ and $\\frac{3}{2}$.

Reporting after calibration returns the original reading, so the statement is True.`,

    `**B.** → False

The claim is that the composition of the two stages grows more slowly than the raw reading.

The overview already recorded that $g\\circ f$ is the identity, exponent $1$. An identity grows exactly as fast as the raw reading, not more slowly. A leftover exponent of $1$ is lockstep.

**1.** Extra arithmetic at two readings: $g(f(8))=8$ and $g(f(64))=64$, a factor $8$ on both the input and the output. If the composition grew more slowly, $g(f(64))$ would sit below $64$. It does not.

**2.** A rushed solver who saw each stage's exponent below $1$ or above $1$ and multiplied $\\frac{2}{3}\\cdot\\frac{3}{2}$ as if it were $\\frac{2}{3}$ has forgotten the product is $1$. Another who used $g(f(x))=x^{\\frac{2}{3}}$ dropped the reporting stage.

**3.** Letter A established the identity. This letter reads that identity as a growth-rate claim against $x$. Lockstep is not "more slowly."

**4.** The opposite verdict would need a composed exponent $<1$. With composed exponent $1$, the composition keeps pace with the reading.

The recovered composition is the identity, so the statement is False.`,

    `**C.** → False

The claim is that applying the stages in the other order fails to recover the original index.

The overview already composed $f(g(y))=y$. The two maps are inverses of each other, so reverse order also recovers the original index. The extra arithmetic is that other composition:

$$f(g(y))=9\\Bigl(\\frac{y^{\\frac{3}{2}}}{27}\\Bigr)^{\\frac{2}{3}}=9\\cdot\\frac{y}{27^{\\frac{2}{3}}}=9\\cdot\\frac{y}{9}=y$$

because $27^{\\frac{2}{3}}=9$.

**1.** Extra check at the recorded index $36$: $g(36)=8$ and $f(8)=36$, returning the index. The round trip works in reverse too.

**2.** A rushed solver who thought inverses of nonlinear maps fail in one order has imported a non-invertible story. These two powers were built as inverses: exponents $\\frac{2}{3}$ and $\\frac{3}{2}$ are reciprocal, and the coefficients $9$ and $1/27$ cancel both ways.

**3.** Letter A was $g\\circ f$. This letter is $f\\circ g$. Both are the identity. "Fails to recover" would have needed a coefficient mismatch.

**4.** The opposite verdict would need $f(g(y))\\neq y$. With these two stages, reverse order also recovers the index.

The recovered reverse composition is also the identity, so the statement is False.`,

    `**D.** → True

This is a level of calibration at a raw reading of $64$, asked against a threshold of $140$.

The overview already evaluated $f(64)=144$. One hundred and forty-four sits above $140$. Sixty-four to the $\\frac{2}{3}$ is $16$, and $9\\cdot 16=144$.

**1.** A rushed solver who used $f(64)=9\\cdot 64=576$ skipped the fractional power. Another who used $A=4.5$ from $36/8$ would report $72$ and fail the threshold on a wrong coefficient. The recorded pair is $4A=36$, so $A=9$.

**2.** Extra arithmetic at $x=8$: $f(8)=36$, which sits below $140$. The threshold test is about $x=64$ specifically. Between $8$ and $64$ the index crosses $140$, and at $64$ it has reached $144$.

**3.** Letter E asks for an index under $200$ at $x=125$ and fails. This letter's $140$ at $x=64$ is a different comparison. The recovered $144$ is $4$ above $140$, a tight clearance.

The recovered index at a reading of $64$ is $144$, above $140$, so the statement is True.`,

    `**E.** → False

This is a level at a raw reading of $125$, asked against a threshold of $200$.

The overview already evaluated $f(125)=225$. Two hundred and twenty-five does not sit under $200$. One hundred and twenty-five to the $\\frac{2}{3}$ is $25$, and $9\\cdot 25=225$.

**1.** A rushed solver who used $f(125)=9\\cdot 5=45$, taking only a fifth root, would have passed "under $200$" on a wrong power. Another who used $g(125)$ rather than $f(125)$ has the wrong stage.

**2.** Extra arithmetic at $x=64$: $f(64)=144$, which does sit under $200$. The threshold test is about $x=125$ specifically. Between $64$ and $125$ the index crosses $200$, and at $125$ it has reached $225$.

**3.** Letter D's $144>140$ does not license $225<200$. The recovered $225$ sits $25$ above $200$.

The recovered index at a reading of $125$ is $225$, not under $200$, so the statement is False.`,
  ],

  "math-8-36": [
    `**A.** → False

Algorithm S is $S(x)=a x^{\\frac{1}{2}}$ with $S(4)=16$, and algorithm T is proportional to $x^{\\frac{3}{2}}$ with $T(4)=8$. The claim is that the two algorithms score equally at two different positive loads.

The overview already recovered $S(x)=8 x^{\\frac{1}{2}}$ and $T(x)=x^{\\frac{3}{2}}$, with difference $T-S=x^{\\frac{1}{2}}(x-8)$. On $x>0$ they meet only at $x=8$, not at two different positive loads.

**1.** Extra arithmetic at a neighbour on each side: at $x=4$, $S(4)=16$ and $T(4)=8$, so S leads by $8$. At $x=16$, $S(16)=32$ and $T(16)=64$, so T leads by $32$. The sign change is a single crossing at $x=8$, where both equal $8^{\\frac{3}{2}}=16\\sqrt{2}\\approx 22.6$.

**2.** A rushed solver who saw two power functions and expected two meetings has counted degrees loosely. $x^{1/2}(x-8)=0$ has one positive root. Another who set $a=k$ and ignored the benchmark would never find a meeting of these two shapes except at $0$.

**3.** Letter B reads the same factor $x-8$ past $8$ and finds T stays ahead. This letter is the uniqueness of the root.

**4.** Two positive meetings would have needed a cubic gap or a second factor. The recovered difference has a single positive root at $x=8$.

They meet only at load $8$, so the statement is False.`,

    `**B.** → True

The claim is that once algorithm T is ahead, raising the load further cannot put S back in front.

The overview already recorded that past the unique positive meeting $x=8$, the leftover factor $x-8$ stays positive, so $T>S$ at every greater load. Raising the load further cannot put S back in front.

**1.** Extra arithmetic at $x=16$, letter E's load: $T=64$ and $S=32$, T ahead by $32$. At $x=36$, $T=216$ and $S=48$, T ahead by $168$. The lead widens. There is no later catch-up by S.

**2.** A rushed solver who remembered that a larger coefficient can lead on small inputs might wait for S's $a=8$ to kick back in at great load. Coefficients do not kick back in. The larger exponent, T's $\\frac{3}{2}$ against S's $\\frac{1}{2}$, takes over after the unique crossing and stays.

**3.** Letter A found the unique meeting. This letter reads the sign past that meeting. Equal exponents would have been needed for a second crossing.

**4.** The opposite verdict would need a ratio $T/S$ that was not monotone. With leftover power $x/8$, T stays ahead past $x=8$.

The recovered ratio climbs through $1$ only once, so the statement is True.`,

    `**C.** → False

The claim is that the ratio of the two scores is the same at every load.

The overview already recorded $\\frac{T(x)}{S(x)}=\\frac{x}{8}$. That leftover power of $x$ is not constant. The ratio equals $1$ only at the crossing $x=8$, equals $1/2$ at the benchmark $x=4$, and equals $2$ at $x=16$.

**1.** Extra arithmetic at those three loads: $T(4)/S(4)=8/16=1/2$, $T(8)/S(8)=1$, $T(16)/S(16)=64/32=2$. Three different ratios are three too many for a constant.

**2.** A rushed solver who cancelled $x^{1/2}$ and forgot the leftover $x/8$ would report a constant $1$, which is exactly the false claim at the crossing only. Another who compared coefficients $1$ and $8$ and declared a constant $1/8$ has dropped the leftover power of $x$.

**3.** Letter B used this ratio as a sign. This letter asks whether the ratio is constant. A growing ratio is a stronger statement than a positive difference.

**4.** The opposite verdict would need equal exponents. With exponents $\\frac{3}{2}$ and $\\frac{1}{2}$, the ratio cannot be constant.

The recovered ratio $x/8$ is not constant, so the statement is False.`,

    `**D.** → True

The unique positive meeting is $x=8$, and the claim is that the two algorithms first meet at a load above $6$.

Eight sits above $6$. They first meet past load $6$.

**1.** Extra arithmetic at $x=6$: $S(6)=8\\sqrt{6}\\approx 19.6$ and $T(6)=6\\sqrt{6}\\approx 14.7$, so S still leads at $6$. At $x=8$ they meet. The first meeting is at $8$, which is above $6$.

**2.** A rushed solver who used $x=4$, the benchmark, where they do not meet, has mixed a recorded pair with a crossing. Another who solved $8\\sqrt{x}=x^{3/2}$ as $x=8^{2}=64$ missed a factor and would still pass "above $6$" on the wrong load.

**3.** Letter A said the meeting is unique. This letter compares that unique meeting with $6$. Eight is two loads above six, not a rounding of six.

The recovered first meeting is at load $8$, above $6$, so the statement is True.`,

    `**E.** → True

This is a gap at a load of $16$, asked against a threshold of $30$.

The overview already evaluated $T(16)-S(16)=32$. Thirty-two is more than $30$. At load $16$, $T=64$ and $S=32$.

**1.** A rushed solver who used $S(16)=8\\cdot 16=128$ skipped the square root and would have reported T behind. Another who used the ratio $2$ as if it were the difference $2$ would have failed "more than $30$."

**2.** Extra arithmetic at $x=8$: the gap is $0$, which is not more than $30$. The threshold test is about $x=16$ specifically. Between $8$ and $16$ the gap crosses $30$, and at $16$ it has reached $32$.

**3.** Letter D's meeting above $6$ is a different comparison. $32>30$ is a tight clearance, genuine because $T(16)=64$ and $S(16)=32$.

The recovered lead at load $16$ is $32$, more than $30$, so the statement is True.`,
  ],

  "math-8-37": [
    `**A.** → True

Sustained capacity is $C(m)=A m^{\\frac{4}{5}}$ with $C(32)=80$, and the claim is that capacity itself keeps rising as machines are added.

The overview already recovered $A=5$, so $C(m)=5 m^{\\frac{4}{5}}$. The exponent is positive, so sustained capacity keeps rising as machines are added. A positive power on $m>0$ is strictly increasing.

**1.** Extra arithmetic at the recorded fleet and a neighbour: $C(32)=80$ and $C(243)=405$, already higher. At $m=1$, $C(1)=5$, lower. The climb is monotone, even though $\\frac{4}{5}<1$ makes it concave.

**2.** A rushed solver who saw $\\frac{4}{5}<1$ and concluded "less than one means decreasing" has mixed a falling slope of the slope with a falling function. Decrease requires a negative exponent. Another who used the cap of $500$ and thought certified capacity stops rising has mixed $C$ with billed $\\min(C,500)$. This letter is uncapped $C$.

**3.** Letter B claims the ceiling is never reached because $r<1$. Letter C is the log-log line. This letter is only $r>0$.

**4.** The opposite verdict would need $r\\le 0$. The stem's $\\frac{4}{5}>0$ forces capacity up as machines are added.

The recovered capacity $5 m^{\\frac{4}{5}}$ keeps rising, so the statement is True.`,

    `**B.** → False

The claim is that because the exponent is below $1$, the contracted ceiling of $500$ is never reached.

The overview already inverted $5 m^{\\frac{4}{5}}=500$ at $m=100^{\\frac{5}{4}}\\approx 316$. An exponent below one still tends to infinity as $m$ grows. The contracted ceiling is reached at a finite fleet of about $316$ machines.

**1.** Extra arithmetic of that inversion: $m^{\\frac{4}{5}}=100$ and $m=100^{\\frac{5}{4}}=100\\sqrt{10}\\approx 316.2$. At $m=243$, letter D's $C(243)=405<500$. At $m=1024$, $C(1024)=1280>500$. The ceiling sits between those two fleets, near $316$.

**2.** A rushed solver who treated $r<1$ as a bounded function has confused "grows slowly" with "bounded." $5 m^{4/5}\\to\\infty$. Another who used $r<0$ intuition from a wait curve has the wrong sign.

**3.** Letter A said $C$ keeps rising. This letter says that rise eventually hits $500$. Rising without bound is what makes a finite cap bind.

**4.** The opposite verdict would need $C$ bounded below $500$, which a positive power cannot be. The recovered bind is at about $316$ machines.

The recovered ceiling is reached at $m\\approx 316$, so the statement is False.`,

    `**C.** → True

The claim is that on log-log paper the uncapped capacity law is a straight line.

The overview already recorded $\\ln C=\\ln 5+\\frac{4}{5}\\ln m$. A power $A m^{r}$ is a straight line on log-log paper, with slope equal to the exponent. The uncapped capacity law is exactly that shape.

**1.** Extra arithmetic of two log-log points: $\\ln C(32)=\\ln 80$ and $\\ln 32=\\ln(2^{5})=5\\ln 2$, and the slope between $(0,\\ln 5)$ at $m=1$ and this point is $(\\ln 80-\\ln 5)/\\ln 32=\\ln 16/(5\\ln 2)=4/5$, the exponent itself.

**2.** A rushed solver who plotted $C$ against $m$ on linear paper and saw a curve would think the claim false. Log-log is the change of coordinates that straightens a power. Another who included the cap, plotting billed $\\min(C,500)$, would see a kink at $m\\approx 316$ and a later horizontal, which is not a single straight line. This letter is the uncapped law.

**3.** Letter A is increase. Letter B is the cap. This letter is the log-log graph of $C$ itself.

**4.** The opposite verdict would need a sum of two powers, or an intercept in the original units. The stem is a pure monomial.

The recovered uncapped law is linear in $\\ln C$ against $\\ln m$, so the statement is True.`,

    `**D.** → True

This is a level at a fleet of $243$ machines, asked against a threshold of $400$ requests per second.

The overview already evaluated $C(243)=405$. Four hundred and five sits above $400$. Two hundred and forty-three to the $\\frac{4}{5}$ is $81$, and $5\\cdot 81=405$.

**1.** A rushed solver who used $C(243)=5\\cdot 243=1215$ skipped the fractional power. Another who used $A=80/32=2.5$ would report $202.5$ and fail the threshold on a wrong coefficient. The recorded fleet is $16A=80$, so $A=5$.

**2.** Extra arithmetic at $m=32$: $C(32)=80$, which sits below $400$. The threshold test is about $m=243$ specifically. Between $32$ and $243$ machines capacity crosses $400$, and at $243$ it has reached $405$, still under the cap of $500$.

**3.** Letter E compares the bind with $250$ machines. This letter's $405>400$ is a tight clearance, genuine because $A=5$.

The recovered capacity at $243$ machines is $405$, above $400$, so the statement is True.`,

    `**E.** → False

The claim is that the contracted ceiling binds before $250$ machines.

The overview already inverted the bind at $m\\approx 316$, which sits past $250$. The ceiling does not bind before $250$ machines.

**1.** Extra arithmetic at $m=243$: $C(243)=405<500$. At $m=256$, $C(256)=5\\cdot 256^{\\frac{4}{5}}=5\\cdot (2^{8})^{4/5}=5\\cdot 2^{32/5}=5\\cdot 2^{6}\\cdot 2^{2/5}=320\\cdot 2^{0.4}\\approx 422<500$. Both sit below the cap, and both sit near $250$. The bind at $316$ is later.

**2.** A rushed solver who used $m=100$ from $5m=500$ skipped the exponent and would have passed "before $250$" on a wrong inversion. Another who used $m=243$ as if $405$ were already $500$ has mixed a threshold of $400$ with a cap of $500$.

**3.** Letter D's $405>400$ at $m=243$ is compatible with $405<500$. The cap has not bound at $243$, hence not before $250$.

The recovered bind is at about $316$ machines, past $250$, so the statement is False.`,
  ],

  "math-8-38": [
    `**A.** → False

Revenue is $R(L)=A L^{\\frac{1}{2}}$, the wage is $6$ per hour, and net gain is $\\Pi=R-6L$. The recorded extension from $100$ to $400$ hours raised revenue by $1200$, pinning $A=120$. This letter asks whether $\\Pi(L)$ is itself a power function of hours hired.

The overview already recorded $\\Pi(L)=120\\sqrt{L}-6L$. A difference of two distinct powers is not itself a power of hours hired. Distinct exponents $\\frac{1}{2}$ and $1$ cannot be absorbed into one monomial.

**1.** Extra arithmetic in a ratio: $\\Pi(100)=600$ and $\\Pi(400)=0$, so the ratio is $0$, which no power $c L^{r}$ with $c\\neq 0$ can give at a positive $L$. At $L=25$, $\\Pi(25)=120\\cdot 5-150=450$, and $450/600=0.75$, while $(25/100)^{r}=4^{-r}$ would force $r\\approx 0.21$, failing at other pairs.

**2.** A rushed solver who dropped the wage and called $120\\sqrt{L}$ a power has described revenue, not net gain. Another who wrote $\\Pi=L^{1/2}(120-6\\sqrt{L})$ has a power times a linear polynomial in $\\sqrt{L}$, still not a single power.

**3.** Letter C says the wage bill $6L$ is a power. That is true and does not make the difference a power. Letter B compares the maximiser with the root.

**4.** The opposite verdict would need matching exponents on $R$ and on the wage. The stem's $\\frac{1}{2}$ and $1$ do not match.

The recovered net gain is a difference of two powers, so the statement is False.`,

    `**B.** → False

The claim is that the hours that maximise net gain are the same hours at which net gain is zero.

The overview already recorded the maximiser $L=100$ from $\\Pi'(L)=0$, and the root $L=400$ from $\\Pi(L)=0$. Those are different hours. Net gain peaks at $100$ hours, where $\\Pi(100)=600$, and crosses zero at $400$ hours.

**1.** Extra arithmetic of the two conditions: $\\Pi'(L)=60 L^{-\\frac{1}{2}}-6=0$ gives $\\sqrt{L}=10$ and $L=100$. $\\Pi(L)=0$ gives $120\\sqrt{L}=6L$ and $\\sqrt{L}=20$ and $L=400$. Ten is not twenty.

**2.** A rushed solver who treated a peak as a root of $\\Pi$ rather than of $\\Pi'$ has mixed first-order conditions with break-even. Another who used $L=225$ from a different task's advertising net gain has leaked a number.

**3.** Letter D's $\\Pi(900)=-1800$ sits past the root. Letter E says the root is past $300$, which $400$ is. This letter is the mismatch of $100$ and $400$.

**4.** The opposite verdict would need the peak and the root to coincide, which a difference of two powers with a zero intercept on $\\Pi$ at two points ($0+$ and $400$) cannot do at the interior peak.

The recovered maximiser is $L=100$ and the root is $L=400$, different hours, so the statement is False.`,

    `**C.** → True

The claim is that the wage bill is a power function of hours hired.

The overview already recorded that the wage bill is $6L$, a power of hours hired with exponent $1$ and coefficient $6$. A linear wage is still a monomial. There is no leftover constant: zero hours incur zero wage.

**1.** Extra arithmetic at the recorded hours: wage at $L=100$ is $600$, at $L=400$ is $2400$, ratio $4$, equal to $4^{1}$. Checking $L=900$, wage $5400$, ratio to $L=100$ is $9=9^{1}$. A single exponent $1$ fits.

**2.** A rushed solver who thought "linear is not a power" has forgotten that $u^{1}$ is a power. Another who added a salaried floor, $6L+F$, would have left the power-function class; the stem has no such floor on the wage.

**3.** Letter A said net gain is not a power, because it subtracts this wage from a square-root revenue. This letter is the wage piece alone, which is a power.

**4.** The opposite verdict would need an intercept on the wage. The stem's $6L$ has none.

The recovered wage bill $6L$ is a power of hours hired, so the statement is True.`,

    `**D.** → True

This is a level of net gain at $900$ hours, asked against a threshold of $-1000$.

The overview already evaluated $\\Pi(900)=-1800$. Minus eighteen hundred sits below $-1000$. Revenue $120\\cdot 30=3600$ minus wage $5400$ is $-1800$.

**1.** A rushed solver who used $R(900)=3600$ as if it were net gain would sit above $-1000$ on the wrong object. Another who used $\\Pi(400)=0$ has the root, not $L=900$.

**2.** Extra arithmetic at $L=400$: $\\Pi=0$, which is not below $-1000$. The threshold test is about $L=900$ specifically. Past the root, net gain is negative and becoming more so; at $900$ hours it has reached $-1800$.

**3.** Letter E's root past $300$ is a different comparison. $-1800<-1000$ is a clear clearance on the far side of break-even.

The recovered net gain at $900$ hours is $-1800$, below $-1000$, so the statement is True.`,

    `**E.** → True

The unique positive root of $\\Pi(L)=0$ is $L=400$, and the claim is that net gain crosses zero only after more than $300$ hours.

Four hundred sits past $300$. Net gain crosses zero only after more than $300$ hours.

**1.** Extra arithmetic at $L=300$: $\\Pi(300)=120\\sqrt{300}-1800\\approx 120\\cdot 17.32-1800\\approx 278>0$. At $L=400$, $\\Pi=0$. The crossing is at $400$, which is after $300$.

**2.** A rushed solver who used the maximiser $L=100$ as if it were the root would have failed "after more than $300$." Another who used $L=225$ from task $28$ has leaked a break-even.

**3.** Letter B distinguished $100$ from $400$. This letter compares $400$ with $300$. Four hundred is one hundred hours past three hundred, not a rounding.

The recovered root is $L=400$, after more than $300$ hours, so the statement is True.`,
  ],

  "math-8-39": [
    `**A.** → False

Plant 1 costs $C_{1}(q)=\\frac{1}{2}q^{2}$ and plant 2 costs $C_{2}(q)=\\frac{1}{4}q^{2}$, recovered from the logged runs $C_{1}(20)=200$ and $C_{2}(40)=400$. The firm must produce $60$ units. This letter asks whether the cheapest fill is to send every unit to one plant.

The overview already recorded that equalising marginal costs on a $60$-unit order sends $20$ units to plant 1 and $40$ to plant 2, at total cost $600$. Concentrating in either plant costs more than that split: $C_{2}(60)=900$ and $C_{1}(60)=1800$.

**1.** Extra arithmetic of the split: $C_{1}(20)+C_{2}(40)=200+400=600$, which matches the two logged runs reused as a split of $60$. The corners $900$ and $1800$ both sit above $600$. A $30$-$30$ split costs $675$, letter E, still above $600$ and below the corners.

**2.** A rushed solver who saw plant 2 cheaper per quadratic coefficient and dumped all $60$ units there has ignored rising marginal cost. Each extra unit at plant 2 costs more than the last. Another who used linear costs would have been right to concentrate; these plants are quadratic.

**3.** Letter B says the two plants together are not a single power of $60$. Letter D is the concentrate-in-plant-2 bill of $900>800$. This letter is the comparison of the split with the corners.

**4.** The opposite verdict would need linear or concave costs. With two convex quadratics, the cheapest fill is an interior split, not a corner.

The recovered cheapest fill is the $20$-$40$ split at $600$, not a corner, so the statement is False.`,

    `**B.** → False

The claim is that whatever split is chosen, the two plants together still follow a single power of the $60$-unit order.

The overview already recorded $C(q)=\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}$, a quadratic in the split, not a monomial in the order size $60$. Two separate powers do not combine into one power of the order. The total depends on how the $60$ is split, so it cannot be a function of $60$ alone, let alone a power of $60$.

**1.** Extra arithmetic of two splits of the same $60$: the $20$-$40$ split costs $600$, and the $30$-$30$ split costs $675$. One order size, two totals. A power of $60$ would have given one total.

**2.** A rushed solver who added the coefficients $\\frac{1}{2}+\\frac{1}{4}=\\frac{3}{4}$ and declared $C=\\frac{3}{4}\\cdot 60^{2}$ has assumed the split does not matter. That formula gives $2700$, far above either split. Another who factored $q^{2}$ out of both plants has to leave a remainder in $(60-q)^{2}$.

**3.** Letter A used the split-dependence to reject concentration. This letter names that dependence as a function-class claim. A single power of $60$ would have required a fixed split, or identical plants.

**4.** The opposite verdict would need the two plants to be one plant, or a predetermined split independent of cost. The stem lets the firm choose the split.

The recovered total depends on the split, so it is not a single power of $60$, so the statement is False.`,

    `**C.** → True

The claim is that plant 2's cost per unit rises as it produces more.

The overview already recorded plant 2's unit cost $\\frac{C_{2}(q)}{q}=\\frac{1}{4}q$. The leftover exponent is positive, so unit cost rises as that plant produces more. A quadratic power forces a rising average cost.

**1.** Extra arithmetic at the logged run and a neighbour: at $q=40$, unit cost is $400/40=10$, and at $q=20$, $C_{2}(20)=100$ so unit cost is $5$, already lower. At $q=60$, unit cost is $15$. The average is itself $\\frac{1}{4}q$.

**2.** A rushed solver who used $r<1$ intuition has the wrong exponent on $C_{2}$. Another who saw plant 2 cheaper than plant 1 and concluded that unit cost falls has mixed a comparison between plants with a comparison within plant 2 as $q$ grows.

**3.** Letter A's interior split is caused by this rising unit cost: dump too much on plant 2 and its last units become dearer than plant 1's first extra units. This letter names that rise.

**4.** The opposite verdict would need $r\\le 1$ on $C_{2}$. With $r=2$, plant 2's cost per unit rises.

The recovered plant 2 unit cost is $\\frac{1}{4}q$, which rises with output, so the statement is True.`,

    `**D.** → True

The cheaper plant is plant 2. Concentrating all $60$ units there costs $C_{2}(60)=900$, and the claim is that this still costs more than $800$.

Nine hundred sits above $800$. A quarter of $3600$ is $900$.

**1.** A rushed solver who used $C_{1}(60)=1800$ has the dearer plant. Another who used $C_{2}(40)=400$ scaled linearly by $60/40$ would report $600$ and fail the threshold on a linear guess. The quadratic scales by $(60/40)^{2}=2.25$, and $400\\times 2.25=900$.

**2.** Extra arithmetic of the $20$-$40$ split: $600$, which sits under $800$. The claim is concentration, not the split. Concentration in plant 2 is $900>800$; the split is cheaper.

**3.** Letter E's $30$-$30$ split at $675$ also sits under $800$. This letter is the corner $900$. Mixing a split with the corner is how a solver could dip under $800$.

The recovered concentrate-in-plant-2 bill is $900$, above $800$, so the statement is True.`,

    `**E.** → True

Sending $30$ units to each plant costs $C_{1}(30)+C_{2}(30)=450+225=675$, and the claim is that this already costs under $700$.

Six hundred and seventy-five sits under $700$. Half of $900$ plus a quarter of $900$ is $\\frac{3}{4}\\cdot 900=675$.

**1.** A rushed solver who used $C_{1}(30)+C_{2}(30)=\\frac{1}{2}\\cdot 900+\\frac{1}{4}\\cdot 900$ with $30^{2}=900$, yes $675$. Another who used $60$ as if it were $30$, reporting $C_{1}(60)+C_{2}(0)=1800$, has not split equally.

**2.** Extra arithmetic of the cheapest split: $600$, also under $700$. The $30$-$30$ split is not cheapest, but it is still under $700$. At the corners, $900$ and $1800$ sit above $700$. The claim is the equal split specifically.

**3.** Letter D's $900>800$ does not license $675>700$. Six hundred and seventy-five is $25$ under $700$.

The recovered equal-split bill is $675$, under $700$, so the statement is True.`,
  ],

  "math-8-40": [
    `**A.** → True

An analyst fits $y=A x^{r}$ to $(4,24)$ and $(16,192)$. This letter asks whether those first two measurements are consistent with a single power law.

The overview already recovered $r=\\frac{3}{2}$ and $A=3$ from $4^{r}=8$ and $A\\cdot 8=24$. Two points of a power law always determine a unique pair $(A,r)$ with $A>0$, so those measurements are consistent with a single power law. Consistency here means a positive coefficient and a real exponent exist, which they do.

**1.** Extra arithmetic of the fit: $\\frac{192}{24}=8$ and $\\frac{16}{4}=4$, so $4^{r}=8$ and $r=\\frac{3}{2}$. Then $A\\cdot 4^{3/2}=24$ gives $A\\cdot 8=24$ and $A=3$. Both fitted points sit on $y=3x^{\\frac{3}{2}}$: $3\\cdot 8=24$ and $3\\cdot 64=192$.

**2.** A rushed solver who required three points to determine a power has mixed this with a quadratic in $x$. Two unknowns need two facts. Another who saw $r=1.5$ as "not integer, so inconsistent" has confused a model class with integer exponents.

**3.** Letter B asks whether $r=2$ fits equally well, which it does not. Letter C tests the held-out $(9,81)$. This letter is only the first two points.

**4.** Inconsistency would have needed a non-positive $y$, or a zero $x$. With two positive measurements, a unique power fits.

The recovered pair $(A,r)=(3,\\frac{3}{2})$ fits both points, so the statement is True.`,

    `**B.** → False

The claim is that the same two measurements would fit an exponent of $2$ equally well.

The overview already recorded that exponent $2$ would require $4^{2}=16$ as the $y$-ratio, but the logged ratio is $8$. The same two measurements do not fit $r=2$. Uniqueness of $r$ from $4^{r}=8$ rules out $r=2$.

**1.** Extra arithmetic of the $r=2$ miss: $A\\cdot 4^{2}=24$ would give $A=1.5$, and then $y(16)=1.5\\cdot 256=384$, not the recorded $192$. Half the recorded $192$ is not a rounding: $384$ is twice $192$. The $r=2$ line misses the second point by $192$.

**2.** A rushed solver who used $r=\\log_{2} 8=3$ mixed a base-$2$ log of the $y$-ratio with the $x$-ratio $4=2^{2}$, which actually gives $r=3/2$. Another who thought "any two points fit any exponent" has forgotten that $A$ is then forced, and the second point overdetermines $r$.

**3.** Letter A said a unique power fits. This letter says $r=2$ is not that unique power. Letter C's held-out point will sit on $r=3/2$, not on $r=2$.

**4.** The opposite verdict would need $192/24=16$, a $y$-ratio of $16$. The stem's ratio is $8$.

The recovered exponent is $\\frac{3}{2}$, not $2$, so the statement is False.`,

    `**C.** → False

The claim is that the measurement at $x=9$ contradicts the fitted law.

The overview already evaluated $y(9)=3\\cdot 9^{\\frac{3}{2}}=81$, which matches the third measurement exactly. The measurement does not contradict the fit.

**1.** Extra arithmetic: $9^{\\frac{3}{2}}=27$, and $3\\cdot 27=81$. The held-out point sits on $y=3x^{\\frac{3}{2}}$. A contradiction would have been a recorded $80$ or $90$. The recorded $81$ is exact.

**2.** A rushed solver who used $r=2$, $y=1.5 x^{2}$, would have predicted $y(9)=121.5$ against $81$, a real contradiction, on the wrong fit. Letter B already rejected $r=2$. Another who used $A=24/4=6$ linearly would predict $54$ at $x=9$ and also contradict, for a wrong model.

**3.** Letter D predicts at $x=25$. Letter E is a threshold at $x=9$. This letter is whether $81$ matches the fit. It does.

**4.** The opposite verdict would need a held-out $y$ other than $81$. The stem's third measurement is $81$.

The recovered fitted value at $x=9$ is $81$, matching the measurement, so the statement is False.`,

    `**D.** → True

The fitted law predicts at the planned run $x=25$, asked against a threshold of $350$.

The overview already evaluated $y(25)=3\\cdot 25^{\\frac{3}{2}}=375$. Three hundred and seventy-five sits above $350$. Twenty-five to the $\\frac{3}{2}$ is $125$, and $3\\cdot 125=375$.

**1.** A rushed solver who used $r=2$, $y=1.5\\cdot 625=937.5$, would still pass "above $350$" on the wrong fit. Another who used $y(25)=3\\cdot 25=75$ skipped the remaining square root and would have failed the threshold.

**2.** Extra arithmetic at $x=16$: $y=192$, which sits below $350$. The threshold test is about $x=25$ specifically. Between $16$ and $25$ the response crosses $350$, and at $25$ it has reached $375$.

**3.** Letter E's $81>70$ at $x=9$ is a different comparison. $375>350$ is a $25$-point clearance, genuine because $A=3$ rather than $2.8$.

The recovered prediction at $x=25$ is $375$, above $350$, so the statement is True.`,

    `**E.** → True

This is a level of the fitted response at $x=9$, asked against a threshold of $70$.

The overview already evaluated $y(9)=81$. Eighty-one sits above $70$. The third measurement and the fitted level are the same $81$.

**1.** A rushed solver who used $y(9)=3\\cdot 9=27$ skipped the remaining square root and would have failed the threshold. Another who used the recorded $81$ as if it contradicted the fit has mixed letter C with this threshold.

**2.** Extra arithmetic at $x=4$: $y=24$, which sits below $70$. The threshold test is about $x=9$ specifically. Between $4$ and $9$ the response crosses $70$, and at $9$ it has reached $81$.

**3.** Letter C said $81$ matches the fit. This letter says $81>70$. Matching a measurement and clearing a threshold are different claims at the same $x$.

The recovered fitted response at $x=9$ is $81$, above $70$, so the statement is True.`,
  ],
};

const report = applyLetters("31_40.json", L);
for (const r of report) console.log(r.id, r.wc.join("/"));
