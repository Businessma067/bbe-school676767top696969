import { applyLetters } from "./_expand_apply.mjs";

const L = {
  "math-8-21": [
    `**A.** → True

Monthly subscriptions follow $q(p)=A p^{-2}$, and the recorded price of $5$ euros selling $400$ subscriptions is what pins $A$. This letter is a slope comparison: whether an extra euro of price cuts more subscriptions at five euros than at twenty.

The overview already recovered $A=10000$ and recorded $|q'(5)|>|q'(20)|$. Demand is then $q(p)=10000 p^{-2}$, with derivative $q'(p)=-20000 p^{-3}$. The size of that cut is $20000 p^{-3}$, which falls as $p$ rises because the leftover exponent is negative. An extra euro cuts more demand at five euros than at twenty.

**1.** Extra arithmetic at the two named prices:

$$|q'(5)|=20000/125=160, \\qquad |q'(20)|=20000/8000=2.5$$

so an extra euro at $5$ euros cuts about $160$ subscriptions, and at $20$ euros only $2.5$. The later euro still reduces sales; it reduces them far less. Inverse-square demand is steep near a low price and flat at a high one.

**2.** A rushed solver who saw $q(20)=25<q(5)=400$ and concluded that later euros are doing more has confused a lower quantity with a steeper cut. Quantity is already low at $20$ euros; there is less left to cut. Another who used exponent $-1$ would have a milder decline of the slope, $q'\\propto p^{-2}$ rather than $p^{-3}$.

**3.** Letters D and E are levels of revenue and of quantity. This letter is the slope of quantity. Negative-exponent demand has falling marginal effect of price, which is the same $r=-2$ story read on the derivative.

**4.** The opposite verdict would need a demand that became steeper as the price rose, for example a delay that exploded toward a reservation price. Inverse-square demand does the reverse. What would flip the comparison is a positive leftover exponent on $|q'|$, which a negative $r$ never supplies.

The recovered cut is larger at five euros than at twenty, so the statement is True.`,

    `**B.** → True

The claim is about the inverse: whether the price needed for a given number of subscriptions is itself a power function of that number.

The overview already recorded $p=100 q^{-\\frac{1}{2}}$. A nonzero power inverts to another power. From $q=10000 p^{-2}$, isolate $p$ by taking the reciprocal square root, or rewrite $p^{2}=10000/q$ and take the positive root. The result is a monomial in $q$, coefficient $100$ and exponent $-\\frac{1}{2}$.

That is a power function of the subscription count. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at a new quantity of $25$ subscriptions, which letter E will also touch from the other side:

$$p=100/\\sqrt{25}=20$$

so $25$ subscriptions clear at $20$ euros. That is still a power of $q$. A solver who added a reservation price, $p=2+100 q^{-\\frac{1}{2}}$, would have left the power-function class; the stem has no such floor.

**2.** A rushed solver who thought a negative exponent could not invert to a power has forgotten that $u^{-r}$ inverts to a power with exponent $-1/r$. Another who wrote $p=\\log q$ mixed this service with an exponential technology.

**3.** Extra check at the recorded pair: $p=100/\\sqrt{400}=5$, which returns the catalogue price. That inversion landing on $5$ euros is how we know the inverse is the right monomial.

**4.** If demand had been $q=A p^{-2}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial. Letters D and E use the forward rule at $p=16$ and $p=20$. This letter names the inverse as a function class.

The recovered clearing price is a power of the subscription count, so the statement is True.`,

    `**C.** → False

Doubling the price is the multiplier $k=2$, and the claim is that demand halves.

The overview already recorded that doubling price multiplies demand by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$. The coefficient $A$ cancels in the ratio

$$\\frac{q(2p)}{q(p)}=2^{-2}=\\frac{1}{4}$$

Demand is quartered, not halved.

**1.** Extra arithmetic on the recorded pair: doubling $5$ euros is $10$ euros, and $q(10)=10000/100=100$ against $q(5)=400$. Half of $400$ would have been $200$, and $100$ is not $200$. Demand drops to a quarter, $400/4=100$.

**2.** A rushed solver who used exponent $-1$ would have halved demand, which is exactly the false claim. Reciprocal-linear demand is $A/p$; this curve is $A/p^{2}$. Another who used $2^{-3}=1/8$ mixed in a cube in the denominator.

**3.** Letter A used the slope. This letter is a scale factor about doubling, independent of $A$. Whether the recorded sales had been $400$ or $40$, doubling the price would still quarter demand. Letter E's $q(20)=25$ is a quadrupling of the $5$ euro price, which multiplies demand by $1/16$ and yields $25$, the same identity with $k=4$ rather than $k=2$.

**4.** The opposite verdict would need exponent $-1$. With exponent $-2$, doubling price quarters demand, and a "halving" claim is a linear trap. Inverse-square demand is steeper than that trap.

The recovered doubling factor is $1/4$, not $1/2$, so the statement is False.`,

    `**D.** → True

Revenue along the curve is $R(p)=pq=10000 p^{-1}$, and this letter is a level at $16$ euros, asked against a threshold of $700$.

The overview already evaluated $R(16)=625$. Six hundred and twenty-five sits under $700$. Sixteen euros into $10000/p$ is $10000/16=625$.

This is a revenue question, not a quantity question. Quantity at $16$ euros is $q(16)=10000/256\\approx 39.1$ subscriptions, and $16\\times 39.1\\approx 625$ is the same $625$, a check rather than a new unknown.

**1.** A rushed solver who used $R=10000 p^{-2}$ forgot to multiply by $p$ and would report about $39$, far under $700$ for the wrong object. Another who used $R=10000\\cdot 16=160000$ dropped the negative exponent.

**2.** Extra arithmetic at $p=20$, letter E's price: $R(20)=500$, also under $700$ and not this letter's $16$ euros. At $p=10$, $R(10)=1000$, which sits above $700$. The threshold test is about $p=16$ specifically. Between $10$ and $16$ euros revenue crosses $700$ going down, and at $16$ it has reached $625$.

**3.** Inverse-square demand is elastic enough that raising price cuts $pq$. That is why $R$ falls in $p$, and why a $16$ euro price already sits under $700$ while a $10$ euro price does not.

The recovered revenue at $16$ euros is $625$, under $700$, so the statement is True.`,

    `**E.** → True

This is a level of demand at twenty euros, asked against a threshold of $30$ subscriptions.

The overview already evaluated $q(20)=25$. Twenty-five is fewer than $30$. Twenty squared is $400$, and $10000/400=25$.

**1.** A rushed solver who used $q(20)=10000/20=500$ skipped the square in the exponent and would have failed "fewer than $30$" on a huge overestimate. Another who used $q(20)=400\\cdot 5/20=100$ scaled the recorded pair linearly.

**2.** Extra arithmetic at $p=10$: $q(10)=100$, which is not fewer than $30$. The threshold test is about $p=20$ specifically. Between $10$ and $20$ euros quantity crosses $30$, and at $20$ it has reached $25$.

**3.** Letter D's revenue of $625$ at $16$ euros is a different object. $25<30$ is a modest clearance on quantity, genuine because $A=10000$ rather than $8000$, which would have given $q(20)=20$ and still passed, or $A=14000$, which would have given $35$ and failed.

The recovered demand at twenty euros is $25$ subscriptions, fewer than $30$, so the statement is True.`,
  ],

  "math-8-22": [
    `**A.** → True

The audit firm bills $C(n)=F+a n^{\\frac{1}{2}}$, and two invoices pin both unknowns. This letter asks whether that bill is a power function of the number of accounts.

The overview already recovered $F=200$ and $a=30$, so $C(n)=200+30\\sqrt{n}$. A power of the account count cannot carry a leftover constant. The fixed engagement charge of $200$ kills that shape.

Subtracting $F+10a=500$ from $F+20a=800$ isolated $a=30$, and then $F=200$. The recovered intercept is not zero.

**1.** Extra arithmetic in a ratio: $C(100)=500$ and $C(400)=800$, so the ratio of bills is $1.6$. If the bill were $c n^{r}$, that ratio would equal $4^{r}$, hence $r=\\log 1.6/\\log 4\\approx 0.34$. Checking $C(900)/C(100)=1100/500=2.2$ against $9^{0.34}\\approx 2.11$ already disagrees. No single power fits.

**2.** A rushed solver who dropped the $200$ and called $30\\sqrt{n}$ a power has described a different engagement. The stem charges the fixed fee on every book. Another who wrote $C(n)=(30\\sqrt{n})^{1}+200 n^{0}$ and declared a sum of powers a power has confused a polynomial with a monomial.

**3.** Letters D and E are levels of this same bill. Those levels exist because $F$ and $a$ were recovered. The function class is settled by $F\\neq 0$, independently of those later figures.

**4.** The opposite verdict would need $F=0$. With a $200$ engagement charge, the bill is not a power of $n$. Zero setup would have been a different firm.

The recovered engagement charge of $200$ kills the power-function shape, so the statement is True.`,

    `**B.** → True

The claim is that cost per account falls as the book of accounts grows.

The overview already recorded that unit cost falls. Cost per account is

$$\\frac{C(n)}{n}=\\frac{200}{n}+30 n^{-\\frac{1}{2}}$$

Both pieces decline as the book grows: the fee is spread, and the leftover exponent on the variable term is negative. A larger book is cheaper per account.

**1.** Extra arithmetic at the two invoices: $C(100)/100=5$ euros per account, and $C(400)/400=2$ euros per account. The fourfold book more than halves the per-account price. At $n=900$, $C(900)/900=1100/900\\approx 1.22$, still falling.

**2.** A rushed solver who saw the total climb from $500$ to $800$ to $1100$ and concluded that accounts get more expensive has mixed the total with the average. A rising total is compatible with a falling average. Another who looked only at $200/n$ and ignored $30/\\sqrt{n}$ still has a falling average, just an incomplete one.

**3.** What would flip this verdict is a positive leftover exponent after dividing by $n$, which would need the original exponent on $n$ to exceed $1$. The stem's $\\frac{1}{2}<1$, so average cost falls.

**4.** Letter C is the falling marginal $C'$. Average and marginal move together on a power below one, plus a spread setup. Both stories agree that a larger book is cheaper per extra account and per average account.

The recovered per-account cost declines as the book grows, so the statement is True.`,

    `**C.** → True

The claim is about the slope: whether an extra account adds more to the bill at one hundred accounts than at four hundred.

The overview already recorded $C'(100)>C'(400)$. The recovered bill $C(n)=200+30\\sqrt{n}$ has derivative

$$C'(n)=15 n^{-\\frac{1}{2}}$$

The leftover exponent is negative, so the slope itself falls as $n$ rises. An extra account adds more at one hundred accounts than at four hundred.

**1.** Extra arithmetic at the two named books:

$$C'(100)=15/10=1.5, \\qquad C'(400)=15/20=0.75$$

so an extra account at $n=100$ adds $1.5$ euros, and at $n=400$ only $0.75$. The later account still costs something; it costs half as much on the margin.

**2.** A rushed solver who saw $C(400)=800>C(100)=500$ and concluded that later accounts are more expensive on the margin has confused height with slope. The bill is still rising, just more slowly. Another who used $r>1$ intuition has the wrong exponent.

**3.** Letter B's falling average is the same $r=\\frac{1}{2}<1$ story. This letter is the falling marginal. The setup of $200$ does not appear in $C'$, which is why a function-class letter and a slope letter can disagree about $F$ and still agree about direction of $C'$.

**4.** The opposite verdict would need $r>1$ on the variable term. With $r=\\frac{1}{2}$, an extra account adds less at four hundred than at one hundred.

The recovered slope is larger at one hundred accounts than at four hundred, so the statement is True.`,

    `**D.** → True

This is a level at $900$ accounts, asked against a threshold of $1000$.

The overview already evaluated $C(900)=1100$. Eleven hundred sits above $1000$. Nine hundred is a perfect square, so the square root is $30$, and $200+30\\cdot 30=1100$.

**1.** A rushed solver who dropped the engagement charge and reported $30\\cdot 30=900$ would sit below $1000$ and fail the threshold for the wrong bill. The setup of $200$ is what pushes $900$ up to $1100$. Another who used $F=0$ from a power-function wish has the same miss.

**2.** Extra arithmetic at $n=400$, the second invoice: $C(400)=800$, which sits below $1000$. The threshold test is about $n=900$ specifically. Between $400$ and $900$ accounts the bill crosses $1000$, and at $900$ it has reached $1100$.

**3.** Letter E asks for a $750$ threshold at $200$ accounts and fails. This letter's $1000$ at $900$ accounts is a different comparison. Mixing those two thresholds is how a solver could flip one of them by accident.

**4.** The opposite verdict would need $C(900)\\le 1000$, which would have required a smaller $a$ or a smaller $F$. The two invoices force $1100$.

The recovered bill at $900$ accounts is $1100$, above $1000$, so the statement is True.`,

    `**E.** → False

This is a level at $200$ accounts, asked against a threshold of $750$.

The overview already evaluated $C(200)\\approx 624$. Six hundred and twenty-four does not sit above $750$. Two hundred is not a perfect square, so the extra arithmetic is the exact radical:

$$C(200)=200+30\\sqrt{200}=200+300\\sqrt{2}$$

Since $\\sqrt{2}<1.5$, this sits below $650$, which is not more than $750$. Directly, $300\\times 1.414\\approx 424$ plus the $200$ setup is about $624$.

**1.** A rushed solver who treated $200$ as a perfect square, $\\sqrt{196}=14$ or $\\sqrt{225}=15$, might report $200+30\\cdot 14=620$ or $200+30\\cdot 15=650$, both still under $750$. Another who interpolated linearly between $C(100)=500$ and $C(400)=800$ at $n=200$ would report $600$, still under $750$, for the wrong reason.

**2.** Extra arithmetic that manufactures $750$: dropping the setup from $C(400)=800$ leaves $600$, then adding a guessed $150$. Or $C(225)=200+30\\cdot 15=650$, still not $750$. Pointing $C(900)=1100$ at $n=200$ is a mix of two books.

**3.** Letter D's $1100>1000$ at $n=900$ does not license $624>750$ at $n=200$. Thresholds are local. The recovered $624$ sits about $126$ below $750$.

The recovered bill at $200$ accounts is about $624$, not more than $750$, so the statement is False.`,
  ],

  "math-8-23": [
    `**A.** → True

The fleet is $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles and intensity is $e(a)=k a^{-\\frac{1}{2}}$, with $e(16)=30$. Total emissions are $E=a\\,e(a)$. This letter asks whether that total is a power of elapsed time.

The overview already recovered $k=120$ and composed $E(t)=240 t^{\\frac{1}{4}}$. That is a monomial in $t$, coefficient $240$ and exponent $\\frac{1}{4}$. Composition of two powers is a power: the inner square root and the outer reciprocal square root multiply to $t^{\\frac{1}{4}}$ after the fleet coefficient $4$ is raised.

**1.** The extra arithmetic this letter owns is the composition, not a re-display of $k=120$ as a fresh unknown:

$$E=a\\cdot 120 a^{-\\frac{1}{2}}=120 a^{\\frac{1}{2}}=120\\cdot 4^{\\frac{1}{2}} t^{\\frac{1}{4}}=240 t^{\\frac{1}{4}}$$

because $a=4t^{\\frac{1}{2}}$ and $4^{\\frac{1}{2}}=2$. The exponent $\\frac{1}{4}$ is $\\frac{1}{2}\\times\\frac{1}{2}$, the product of the two square-root stages.

**2.** A rushed solver who added the exponents $\\frac{1}{2}+(-\\frac{1}{2})=0$ and declared $E$ constant has added under the wrong operation. The product $a\\cdot e(a)$ adds exponents on $a$, giving $a^{\\frac{1}{2}}$, and then $a$ itself is a power of $t$. Another who forgot to substitute $a(t)$ would have left $E$ as a power of the fleet, not of time.

**3.** Extra check at $t=16$: $E(16)=240\\cdot 2=480$, which letter D will use as a level. That $480$ sitting on $240 t^{\\frac{1}{4}}$ is the fingerprint of a power of time.

**4.** If intensity had carried an intercept, $e=k a^{-\\frac{1}{2}}+c$, the product $a e$ would not have been a power of $a$, hence not a power of $t$. The stem is two pure monomials.

The recovered total $E(t)=240 t^{\\frac{1}{4}}$ is a power of elapsed time, so the statement is True.`,

    `**B.** → False

Doubling elapsed time is $k=2$, and the claim is that total fleet emissions double.

The overview already recorded that doubling time multiplies $E$ by $2^{\\frac{1}{4}}\\approx 1.189$, not by $2$. The coefficient $240$ cancels in the ratio

$$\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}\\neq 2$$

Total emissions rise by about nineteen percent, not by one hundred percent.

**1.** Extra arithmetic on a concrete year: after $1$ year $E(1)=240$, and after $2$ years $E(2)=240\\cdot 2^{\\frac{1}{4}}\\approx 285$, not $480$. Twice $240$ would have been $480$, which is $E(16)$, a sixteenfold wait, because $16^{\\frac{1}{4}}=2$. Mixing $k=16$ with $k=2$ is how a doubling claim can look true.

**2.** A rushed solver who used exponent $1$ is telling a proportional story the composed $\\frac{1}{4}$ contradicts. Another who used $2^{\\frac{1}{2}}$ stopped after the fleet stage and forgot the intensity stage.

**3.** Letter A named $E$ as a power of $t$. This letter reads that power as a scale factor. An exponent of $\\frac{1}{4}$ is far below $1$, so doubling time cannot double emissions.

**4.** The opposite verdict would need composed exponent $1$. With $\\frac{1}{4}$, doubling time does not double total fleet emissions.

The recovered doubling factor is $2^{\\frac{1}{4}}$, not $2$, so the statement is False.`,

    `**C.** → False

The claim is that emission intensity rises as the fleet grows.

The overview already recorded that intensity falls as $a$ grows. Intensity is $e(a)=120 a^{-\\frac{1}{2}}$. The exponent is negative, so intensity falls, not rises. A negative leftover power cannot climb.

**1.** Extra arithmetic at the logged fleet and a neighbour: $e(16)=30$, and $e(64)=120/8=15$, already half as large on a fourfold fleet, matching $4^{-\\frac{1}{2}}=\\frac{1}{2}$. At $a=4$, $e(4)=120/2=60$, twice the logged $30$, on a smaller fleet.

**2.** A rushed solver who saw total emissions $E$ rise with time and concluded that intensity must also rise has mixed $E=a e$ with $e$ itself. The fleet grows; intensity falls; the product still rises, slowly, because $a^{\\frac{1}{2}}$ grows. Another who used a positive exponent on $e$ has rewritten the stem.

**3.** Letter A composed a falling intensity with a rising fleet and still got a rising $E(t)$. That is compatible with this letter's falling $e(a)$. Rising intensity would have needed a positive exponent on $a$ in $e$.

**4.** The opposite verdict would need $k a^{r}$ with $r>0$. The stem's $-\\frac{1}{2}$ forces intensity down as the fleet grows.

The recovered intensity $120 a^{-\\frac{1}{2}}$ falls as the fleet grows, so the statement is False.`,

    `**D.** → True

This is a level of composed emissions after $16$ years, asked against a threshold of $400$.

The overview already evaluated $E(16)=480$. Four hundred and eighty exceeds $400$. Sixteen years give $16^{\\frac{1}{4}}=2$, and $240\\cdot 2=480$.

**1.** A rushed solver who used $E=240\\cdot 16=3840$ skipped the fourth root. Another who used $E=240\\cdot\\sqrt{16}=960$ used a square root instead of a fourth root and still passed the threshold, for the wrong power.

**2.** Extra arithmetic at $t=1$: $E(1)=240$, which sits under $400$. The threshold test is about $t=16$ specifically. Between $1$ and $16$ years emissions cross $400$, and at $16$ they have reached $480$. Letter E's $E(1)=240<250$ is a different comparison.

**3.** The opposite verdict would need $E(16)\\le 400$, which would have required a smaller $k$. The intensity reading $e(16)=30$ forces $k=120$ and $E(16)=480$.

The recovered total after $16$ years is $480$, above $400$, so the statement is True.`,

    `**E.** → True

This is a level after $1$ year, asked against a threshold of $250$.

The overview already evaluated $E(1)=240$. Two hundred and forty sits under $250$. One to any power is $1$, so $E(1)=240$, the coefficient itself.

**1.** A rushed solver who used $E(1)=4\\cdot 120=480$, multiplying the two coefficients without the composition exponents, would sit above $250$ and fail the threshold on a wrong product. Another who used $E(1)=0$ as if $t=0$ had leaked in has left the domain $t>0$.

**2.** Extra arithmetic at $t=16$: $E(16)=480$, which sits above $250$. The threshold test is about $t=1$ specifically. The coefficient $240$ is the one-year reading, and $240<250$ is a modest clearance of $10$.

**3.** Letter D's $480>400$ at $t=16$ does not license $240>250$ at $t=1$. Thresholds are local. The recovered $240$ sits $10$ below $250$.

The recovered total after $1$ year is $240$, under $250$, so the statement is True.`,
  ],

  "math-8-24": [
    `**A.** → True

Flow capacity is $Q(d)=A d^{\\frac{5}{2}}$ litres per second, and the bench test $Q(4)=64$ pins $A$. This letter asks whether capacity grows faster than diameter, that is whether $r>1$.

The overview already recovered $A=2$ and recorded that $\\frac{5}{2}>1$. Multiplying diameter by $k$ multiplies capacity by $k^{\\frac{5}{2}}$, a larger factor. Capacity outruns diameter.

**1.** Extra arithmetic on the bench pipe: doubling $4$ cm is $8$ cm, and $Q(8)=2\\cdot 8^{\\frac{5}{2}}=2\\cdot 32\\sqrt{8}=2\\cdot 64\\sqrt{2}=128\\sqrt{2}\\approx 181$ against $Q(4)=64$. Capacity multiplies by about $2.83$, faster than the doubling of diameter. That factor is $2^{\\frac{5}{2}}=4\\sqrt{2}$, letter E's identity at this concrete pair.

**2.** A rushed solver who compared $64$ litres with $4$ cm and saw sixteen litres per centimetre has a level of the average, not a growth-rate statement. Growth rate is $r$ against $1$. Another who used $r=2$ from an area story has the wrong exponent.

**3.** Letter B is the reverse scale question: doubling capacity rather than doubling diameter. Letter E is the forward doubling of diameter. This letter is only $r>1$.

**4.** If the bench ratio had been $Q(8)/Q(4)=1.5$, then $r<1$ and this claim would have been false. The exponent $\\frac{5}{2}$ is given in the stem, and $\\frac{5}{2}>1$ is forced.

The recovered exponent $\\frac{5}{2}$ sits above one, so the statement is True.`,

    `**B.** → False

The claim is a reverse scale question: to double the bench capacity of $64$ litres per second, must the diameter more than double.

The overview already recorded that doubling capacity needs a diameter factor $2^{\\frac{2}{5}}\\approx 1.32$, which is less than $2$. Because the exponent exceeds one, a doubling of output needs less than a doubling of the input. The diameter must less than double, not more.

**1.** Extra arithmetic on the inversion:

$$2 d^{\\frac{5}{2}}=128, \\qquad d^{\\frac{5}{2}}=64, \\qquad d=64^{\\frac{2}{5}}=(2^{6})^{\\frac{2}{5}}=2^{\\frac{12}{5}}\\approx 5.28$$

against the bench $4$ cm. The ratio $5.28/4=1.32<2$. A solver who reported $8$ cm used exponent $1$ on the reverse question.

**2.** A rushed solver who mixed this reverse question with letter E's forward doubling would have required a diameter of $8$ cm to more-than-triple capacity, which is a different job. Forward $k=2$ multiplies $Q$ by $4\\sqrt{2}\\approx 5.66$. Reverse $Q\\times 2$ multiplies $d$ by $2^{2/5}$.

**3.** Extra check: $Q(5.28)\\approx 128$, twice the bench. $Q(8)\\approx 181$, already more than twice, which is why a full doubling of diameter overshoots a doubling of capacity.

**4.** The opposite verdict would need $r<1$, where doubling output would need more than a doubling of diameter. The stem's $\\frac{5}{2}>1$ forces the opposite.

The recovered diameter factor for doubled capacity is $2^{\\frac{2}{5}}<2$, so the statement is False.`,

    `**C.** → True

The claim is about the inverse: whether the diameter needed for a given capacity is itself a power function of that capacity.

The overview already recorded $d=(Q/2)^{\\frac{2}{5}}$. A nonzero power inverts to another power. From $Q=2d^{\\frac{5}{2}}$, isolate $d$ by raising to the reciprocal exponent $\\frac{2}{5}$. The result is a monomial in $Q$, coefficient $2^{-\\frac{2}{5}}$ and exponent $\\frac{2}{5}$.

That is a power function of capacity. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at the bench: $d=(64/2)^{\\frac{2}{5}}=32^{\\frac{2}{5}}=2$, wait, $32^{2/5}=(2^{5})^{2/5}=4$, which returns the bench diameter. That inversion landing on $4$ cm is how we know the inverse is the right monomial.

**2.** A rushed solver who thought a fractional exponent could not invert to a power has forgotten that $u^{r}$ inverts to $u^{1/r}$. Another who wrote $d=\\log Q$ mixed this pipe with an exponential technology.

**3.** Letter D uses this inverse at $Q=250$. Letter B used it at $Q=128$. This letter names the inverse as a function class. The same $d\\propto Q^{2/5}$ is what made doubling capacity cheaper in diameter than a linear guess.

**4.** If capacity had been $Q=2d^{\\frac{5}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial.

The recovered diameter is a power of capacity, so the statement is True.`,

    `**D.** → False

A capacity of $250$ litres per second is an inversion, asked against a threshold of $10$ cm.

The overview already inverted $d\\approx 6.90$ cm, below $10$. The extra arithmetic is that inversion:

$$2d^{\\frac{5}{2}}=250, \\qquad d^{\\frac{5}{2}}=125, \\qquad d=125^{\\frac{2}{5}}=5^{\\frac{6}{5}}$$

Since $5^{\\frac{6}{5}}=5\\cdot 5^{\\frac{1}{5}}$ and $5^{\\frac{1}{5}}<2$, the product sits below $10$. Directly, $5^{1.2}\\approx 6.90$.

**1.** A rushed solver who used $d=250/2=125$ skipped the exponent and would have passed "above $10$" on a huge overestimate. Another who used $d=(250/2)^{\\frac{5}{2}}$ inverted the reciprocal the wrong way.

**2.** Extra arithmetic at $Q=64$, the bench: $d=4$, well below $10$. At $Q=2\\cdot 4^{\\frac{5}{2}}\\cdot 2^{\\frac{5}{2}}$ wait. At $d=10$, $Q(10)=2\\cdot 10^{\\frac{5}{2}}=2\\cdot 100\\sqrt{10}\\approx 632$, far above $250$. So $250$ litres need much less than $10$ cm.

**3.** Letter B's doubled bench needed about $5.28$ cm. This letter's $250$ litres need about $6.90$ cm. Both sit below $10$. The claim's "above $10$" is a linear trap, as if $250/64$ times $4$ cm were about $16$ cm.

The recovered diameter for $250$ L/s is about $6.90$ cm, not above $10$, so the statement is False.`,

    `**E.** → True

Doubling the diameter is $k=2$, and the claim is that capacity is multiplied by more than $5$.

The overview already recorded $2^{\\frac{5}{2}}=4\\sqrt{2}\\approx 5.657$. Since $4\\sqrt{2}>5$, capacity is multiplied by more than $5$. The coefficient $A$ cancels in the ratio

$$\\frac{Q(2d)}{Q(d)}=2^{\\frac{5}{2}}=4\\sqrt{2}$$

**1.** Extra arithmetic on the bench pipe: $Q(8)\\approx 181$ against $Q(4)=64$, and $181/64\\approx 2.83$ wait, that is $2^{3/2}$ if I used the wrong exponent. Check: $2^{5/2}=4\\sqrt{2}\\approx 5.66$, and $64\\times 5.66\\approx 362$, so $Q(8)=2\\cdot 8^{5/2}=2\\cdot (8^{2}\\sqrt{8})=2\\cdot 64\\cdot 2\\sqrt{2}=256\\sqrt{2}\\approx 362$. Yes, $362/64\\approx 5.66>5$.

**2.** A rushed solver who used $2^{2}=4$, an area story, would have reported less than $5$ and failed the claim. Another who used $2^{3}=8$, a volume story, would have passed with a larger factor than the stem's $\\frac{5}{2}$. The pipe combines an area-like $2$ with a half from turbulent flow, giving $\\frac{5}{2}$.

**3.** Letter B was the reverse question. This letter is the forward doubling. More than $5$ is a comparison with $4\\sqrt{2}$, genuine because $\\sqrt{2}>1.25$.

**4.** The opposite verdict would need $2^{r}\\le 5$, hence $r\\le \\log_{2} 5\\approx 2.32$. The stem's $2.5$ sits above that line.

Doubling the diameter multiplies capacity by $4\\sqrt{2}>5$, so the statement is True.`,
  ],

  "math-8-25": [
    `**A.** → True

The hub's radius is $r(t)=A t^{\\frac{1}{2}}$ kilometres, with $r(4)=6$, and the covered area is the disc $S=\\pi r^{2}$. This letter asks whether that area is proportional to elapsed time.

The overview already recovered $A=3$ and composed $S(t)=9\\pi t$. The inner square root and the outer square multiply to exponent $1$, so area is a linear monomial in $t$, coefficient $9\\pi$. That is proportionality.

**1.** The extra arithmetic this letter owns is the composition:

$$S=\\pi r^{2}=\\pi (3 t^{\\frac{1}{2}})^{2}=9\\pi t$$

The $t$ to the first power is forced by $\\frac{1}{2}\\times 2=1$. A leftover outer exponent other than $2$ would have broken proportionality.

**2.** A rushed solver who added $\\frac{1}{2}+2$ would report $S\\propto t^{\\frac{5}{2}}$ and miss lockstep with time. Exponents multiply under composition. Another who forgot $\\pi$ would report $S=9t$ and still have proportionality, just with the wrong coefficient. The claim is the function class.

**3.** Extra check at $t=4$: $S(4)=36\\pi$, nine times $4\\pi$, matching $9\\pi\\cdot 4$. At $t=9$, $S(9)=81\\pi=9\\pi\\cdot 9$. The ratio $S(9)/S(4)=9/4$ equals the time ratio. That lockstep is proportionality.

**4.** If radius had been $A t^{\\frac{1}{3}}$, area would have been proportional to $t^{\\frac{2}{3}}$, not to $t$. The stem's square root is what makes the disc linear in time.

The recovered area $S(t)=9\\pi t$ is proportional to elapsed time, so the statement is True.`,

    `**B.** → True

Doubling elapsed time is $k=2$, and along $S(t)=9\\pi t$ the leftover exponent is $1$, so

$$\\frac{S(2t)}{S(t)}=2$$

The area is doubled. This is a scale reading of letter A's proportionality, not a new coefficient.

**1.** Extra arithmetic at the recorded four hours: doubling that wait is $8$ hours, and $S(8)=72\\pi$ against $S(4)=36\\pi$, a factor $2$. Directly, $9\\pi\\cdot 8=72\\pi$. A linear-in-time disc doubles when time doubles.

**2.** A rushed solver who used $k^{2}$ on time, thinking of the disc in radius, would report a factor $4$ and miss the composition. Radius doubles when time quadruples, not when time doubles. Another who used $k^{\\frac{1}{2}}$ stopped after the radius stage.

**3.** Letter C names the inverse as a power. Letter E is a false level at $t=9$. This letter is only the doubling identity for a proportional $S$.

**4.** The opposite verdict would need composed exponent other than $1$. With $S\\propto t$, doubling time doubles area.

Doubling elapsed time doubles the covered area, so the statement is True.`,

    `**C.** → True

The claim is about the inverse: whether the time needed for a given area is itself a power function of that area.

The overview already recorded $t=S/(9\\pi)$. A nonzero power inverts to another power. From $S=9\\pi t$, isolate $t$ as a monomial in $S$, coefficient $1/(9\\pi)$ and exponent $1$.

That is a power function of area, in fact a proportional one. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at $S=36\\pi$: $t=(36\\pi)/(9\\pi)=4$, which returns the recorded four hours. That inversion landing on $4$ is how we know the inverse is the right monomial.

**2.** A rushed solver who wrote $t=\\log S$ mixed this hub with an exponential technology. Another who added a setup time, $t=1+S/(9\\pi)$, would have left the power-function class; the stem has no such floor.

**3.** Letters A and B used exponent $1$ forward. This letter names the inverse. The same $t\\propto S$ is what made doubling area cost a doubling of hours.

**4.** If area had been $9\\pi t+c$ with a leftover constant, the inverse would not have been a power. The stem's composition is a pure monomial.

The recovered time is a power of the covered area, so the statement is True.`,

    `**D.** → True

This is a level after $4$ hours, asked against a threshold of $30\\pi$ square kilometres.

The overview already evaluated $S(4)=36\\pi$. Thirty-six $\\pi$ sits above $30\\pi$. Four hours into $9\\pi t$ is $36\\pi$.

**1.** A rushed solver who used $S=\\pi r^{2}$ with $r=4$ rather than $r=6$ would report $16\\pi$, under $30\\pi$, mixing hours with kilometres. The recorded radius is $6$ km after $4$ hours, and $\\pi\\cdot 36=36\\pi$.

**2.** Extra arithmetic at $t=3$: $S(3)=27\\pi$, which sits below $30\\pi$. The threshold test is about $t=4$ specifically. Between $3$ and $4$ hours the disc crosses $30\\pi$, and at $4$ it has reached $36\\pi$.

**3.** Letter E asks for $100\\pi$ at $t=9$ and fails. This letter's $30\\pi$ at $t=4$ is a different comparison. The recovered $36\\pi$ is $6\\pi$ above $30\\pi$.

The recovered area after $4$ hours is $36\\pi$, above $30\\pi$, so the statement is True.`,

    `**E.** → False

This is a level after $9$ hours, asked against a figure of $100\\pi$ square kilometres.

The overview already evaluated $S(9)=81\\pi$. Eighty-one $\\pi$ is not $100\\pi$. Nine hours into $9\\pi t$ is $81\\pi$.

The figure $100\\pi$ is $r=10$ in disguise, $\\pi\\cdot 10^{2}$, as if the radius after $9$ hours were $10$ km rather than $9$. The recovered radius is $r(9)=3\\cdot 3=9$ km, so the disc is $81\\pi$, not $100\\pi$.

**1.** A rushed solver who used $S=9\\pi\\cdot 9^{2}$ mixed the coefficient $9\\pi$ with a second square. Another who used $r(9)=A\\cdot 9=27$ skipped the square root and would report an even larger disc.

**2.** Extra arithmetic that manufactures $100\\pi$: a radius of $10$ km, which would take $t=(10/3)^{2}\\approx 11.1$ hours, past $9$. Pointing that later disc at $t=9$ is a mix of two times.

**3.** Letter D's $36\\pi>30\\pi$ does not license $81\\pi=100\\pi$. The recovered $81\\pi$ sits $19\\pi$ below $100\\pi$.

The recovered area after $9$ hours is $81\\pi$, not $100\\pi$, so the statement is False.`,
  ],

  "math-8-26": [
    `**A.** → True

Plan A bills $C_{A}(u)=a u^{\\frac{1}{2}}$ with a cap of $400$, and the filed invoice $C_{A}(36)=240$ pins $a$. Plan B bills $5u$. This letter asks whether at $64$ tickets both plans still sit under the $400$ cap.

The overview already recovered $a=40$ and the uncapped crossing $u=64$ costing $320$. Both bills equal $320$ at sixty-four tickets, and $320<400$. The cap has not yet bound.

**1.** Extra arithmetic of the two bills at $u=64$:

$$C_{A}(64)=40\\cdot 8=320, \\qquad C_{B}(64)=5\\cdot 64=320$$

They meet at $320$, eighty euros under the cap. A solver who used $C_{A}(64)=40\\cdot 64=2560$ skipped the square root and would have blown past $400$ on Plan A alone.

**2.** A rushed solver who inverted the cap first, $40\\sqrt{u}=400$ giving $u=100$, and then assumed $u=64$ was already capped, has mixed two volumes. The cap binds at $100$ tickets, thirty-six past $64$.

**3.** Letter E will ask for $u=144$, past the cap. This letter is $u=64$, still uncapped, with both plans at $320$. Mixing those two volumes is how a solver could cap Plan A four dozen tickets early.

**4.** The opposite verdict would need $320\\ge 400$, which would have required a larger $a$. The invoice $C_{A}(36)=240$ forces $a=40$ and a meeting of $320$.

The recovered bills at $64$ tickets are both $320$, under $400$, so the statement is True.`,

    `**B.** → True

The claim is that below the crossing, Plan B is the cheaper contract.

The overview already recorded that the uncapped bills meet at $u=64$, and that Plan B is cheaper for $u<64$. A square root starts above a line through the origin at small $u$ and is then overtaken. Below the crossing the linear Plan B is the smaller bill.

**1.** Extra arithmetic at the invoice volume $u=36$: $C_{A}(36)=240$ and $C_{B}(36)=180$, so Plan B is cheaper by $60$ euros. At $u=16$, $C_{A}(16)=160$ and $C_{B}(16)=80$, Plan B cheaper by $80$. Both sit below $u=64$.

**2.** A rushed solver who thought "a cap makes A cheaper everywhere" has imported the later bind into the uncapped region. Another who swapped the comparison because $a=40>5$ compared coefficients instead of the bills at small $u$. Coefficients set the crossing; below it the smaller exponent, Plan A's $\\frac{1}{2}$, is the more expensive start.

**3.** Letter A found the meeting still under the cap. This letter reads the sign below that meeting. Plan B cheaper below $64$ is the square-root-versus-line story, not the cap story.

**4.** The opposite verdict would need Plan A's exponent above one, so that A started cheaper. With $\\frac{1}{2}$, A starts more expensive and is overtaken at $64$.

The recovered Plan B bill is smaller below the crossing, so the statement is True.`,

    `**C.** → True

The claim is that Plan A's cap eventually binds as ticket volume grows.

The overview already recorded that the cap binds from $u=100$, when $40\\sqrt{u}=400$. From that volume onward billed Plan A is the constant $400$. A growing ticket count will hit that cap, because a positive power of $u$ tends to infinity.

**1.** Extra arithmetic at the bind: $\\sqrt{u}=10$ and $u=100$. At $u=121$, uncapped $C_{A}$ would be $40\\cdot 11=440$, but billed Plan A is $400$. The cap has bitten. At $u=64$, letter A's $320$ is still free of the cap, so the bind is later, not never.

**2.** A rushed solver who thought an exponent below one could never reach $400$ has confused "grows slowly" with "bounded." $40\\sqrt{u}\\to\\infty$ as $u\\to\\infty$. Another who used Plan B's linear growth and declared A never hits $400$ because B hits it first has mixed two contracts. Plan B has no cap in the stem.

**3.** Letter E is a level past the bind. This letter is the existence of the bind. An exponent of $0$ would have been needed for A never to reach $400$. The stem's $\\frac{1}{2}>0$.

**4.** The opposite verdict would need $a\\sqrt{u}$ bounded below $400$, which a positive power cannot be, or a smaller $a$ whose bind sits past every practical volume. With $a=40$ the bind is at $100$ tickets.

Plan A's cap binds from $u=100$ onward, so the statement is True.`,

    `**D.** → True

The claim is that Plan A's cost per ticket falls as ticket volume rises.

The overview already recorded that unit cost falls on both pieces. Uncapped, Plan A's cost per ticket is $40 u^{-\\frac{1}{2}}$, a negative leftover power, so that average falls. After the cap binds, the constant $400$ is spread over more tickets, so $400/u$ falls as well.

**1.** Extra arithmetic on the uncapped piece: at $u=36$, unit cost is $240/36\\approx 6.67$, and at $u=64$, $320/64=5$, already lower. On the capped piece, at $u=100$ unit cost is $4$, and at $u=144$, $400/144\\approx 2.78$, still falling.

**2.** A rushed solver who saw the billed total climb from $240$ to $400$ and stop, then concluded that unit cost must rise, has mixed the total with the average. A capped total spread over more tickets is cheaper per ticket, not dearer.

**3.** Letter B compared the two plans' totals below the crossing. This letter is Plan A's average, on both pieces. An exponent $r>1$ on the uncapped piece would have raised unit cost before the cap; the stem's $\\frac{1}{2}<1$ forbids that.

**4.** The opposite verdict would need a rising average on some piece. Neither $40/\\sqrt{u}$ nor $400/u$ rises.

The recovered Plan A unit cost falls on both pieces, so the statement is True.`,

    `**E.** → False

This is a billed level at $144$ tickets, asked against a threshold of $450$.

The overview already recorded that at $u=144$ the bill is $400$, the cap, not more than $450$. Uncapped, $40\\cdot 12=480$ would have sat above $450$, but the cap has already bound at $u=100$. Billed Plan A is $400$.

**1.** A rushed solver who forgot the cap and reported $480$ would pass "more than $450$" on the uncapped power. The stem's $400$ lid is the whole content of this letter. Another who used Plan B at $u=144$, $5\\cdot 144=720$, has the wrong contract.

**2.** Extra arithmetic at $u=100$, the bind: billed A is $400$, already not more than $450$. At $u=144$ it is still $400$. The threshold $450$ sits between the uncapped $480$ and the cap $400$, which is why forgetting the cap flips the verdict.

**3.** Letter A's $320<400$ at $u=64$ does not license $480>450$ at $u=144$. Past the bind the billed series is the constant $400$.

The recovered billed Plan A at $144$ tickets is $400$, not more than $450$, so the statement is False.`,
  ],

  "math-8-27": [
    `**A.** → True

Unit cost follows $c(N)=c_{1} N^{-b}$ with doubling factor $0.8$ and $c(1)=1000$. This letter is a slope comparison: whether an extra unit of output cuts modelled unit cost by more after the first unit than after eight units.

The overview already recovered $b\\approx 0.322$ from $2^{-b}=0.8$, and recorded that $|c'|$ falls as $N$ rises. The recovered rule $c(N)=1000 N^{-b}$ has derivative $c'(N)=-b\\,1000\\, N^{-b-1}$. The size of that cut falls as $N$ rises because the leftover exponent $-b-1$ is negative. An extra unit cuts more after the first unit than after eight.

**1.** Extra arithmetic at the two named outputs, using $b=\\log_{2}(1/0.8)\\approx 0.3219$:

$$|c'(1)|=b\\cdot 1000\\approx 322, \\qquad |c'(8)|=b\\cdot 1000\\cdot 8^{-b-1}$$

and $8^{-b-1}=(2^{3})^{-b-1}=2^{-3b-3}=(0.8)^{3}/8=0.512/8=0.064$, so $|c'(8)|\\approx 322\\cdot 0.064\\approx 20.6$. An extra unit after the first cuts about $322$ euros of modelled cost, and after eight units only about $21$.

**2.** A rushed solver who saw $c(8)=512<c(1)=1000$ and concluded that later units are cutting more has confused a lower cost with a steeper cut. Cost is already low at $N=8$; there is less left to cut. Another who used $b=1$, a simple reciprocal, would have a steeper decline of the slope, still in the same direction.

**3.** Letter C says $b<1$, so cost falls more slowly than $1/N$. This letter is the falling steepness of that fall. Negative-exponent cost has falling marginal benefit of extra output.

**4.** The opposite verdict would need a cost that became steeper as output grew. An $80\\%$ learning curve cannot do that. The two slopes $322$ and $21$ are the comparison the claim reversed.

The recovered cut is larger after the first unit than after eight, so the statement is True.`,

    `**B.** → False

Quadrupling cumulative output is $k=4$, and the claim is that unit cost halves.

The overview already recorded that two doublings multiply cost by $0.64$, not by $0.5$. The coefficient $c_{1}$ cancels in the ratio

$$\\frac{c(4N)}{c(N)}=4^{-b}=(2^{-b})^{2}=0.8^{2}=0.64$$

Unit cost is multiplied by $0.64$, not by $\\frac{1}{2}$.

**1.** Extra arithmetic on the first unit: quadrupling $N=1$ is $N=4$, and $c(4)=1000\\cdot 0.64=640$, not $500$. Half of $1000$ would have been $500$. Directly, two $80\\%$ doublings: $1000\\times 0.8\\times 0.8=640$.

**2.** A rushed solver who used one doubling, $k=2$, would have reported $0.8$, still not a half. Another who used $4^{-1}=1/4$ mixed in a simple reciprocal. Halving cost on a quadrupling would have needed $4^{-b}=1/2$, hence $b=1/2$, hence a doubling factor $2^{-1/2}\\approx 0.707$, not $0.8$.

**3.** Letter D's three doublings give $0.8^{3}=0.512$, near a half but not this letter's quadrupling. Mixing three doublings with two is how a "$0.5$" claim can look close. Two doublings are $0.64$.

**4.** The opposite verdict would need a doubling factor $\\sqrt{1/2}\\approx 0.707$. The stem's $0.8$ is milder, so a quadrupling does not halve unit cost.

The recovered quadrupling factor is $0.64$, not $0.5$, so the statement is False.`,

    `**C.** → True

The claim is that unit cost falls more slowly than a simple reciprocal of cumulative output.

The overview already recorded $b\\approx 0.322<1$. A simple reciprocal would be exponent $-1$. Here $2^{-b}=0.8>0.5=2^{-1}$, so each doubling cuts less than a reciprocal would. The doubling factor $0.8$ is what forces $b<1$.

**1.** Extra arithmetic at $N=8$: a reciprocal $1000/8=125$, against the learning-curve $c(8)=512$. Five hundred and twelve is far above $125$, so the modelled cost has fallen more slowly. At $N=16$, reciprocal $62.5$ against $c(16)=409.6$, the same gap in kind.

**2.** A rushed solver who saw any falling cost and called it a reciprocal has ignored the doubling factor. An $80\\%$ curve is not a $50\\%$ curve. Another who used $b=2$ from a square in the denominator has the wrong stem.

**3.** Letter B's $0.64$ versus $0.5$ is this letter at $k=4$. Letter A used $b<1$ as falling steepness. This letter names $b<1$ as a comparison with $1/N$.

**4.** The opposite verdict would need $0.8\\le 0.5$, a doubling factor of a reciprocal or steeper. The stem's $0.8$ sits above $0.5$.

The recovered $b\\approx 0.322$ sits below $1$, so unit cost falls more slowly than $1/N$, so the statement is True.`,

    `**D.** → True

Three successive doublings take $N$ from $1$ to $8$, and the claim is that modelled unit cost is already under $520$.

The overview already evaluated $c(8)=512$. Five hundred and twelve sits under $520$. Three $80\\%$ doublings: $1000\\times 0.8^{3}=1000\\times 0.512=512$.

**1.** A rushed solver who used four doublings, $c(16)=409.6$, would still pass "under $520$" on the wrong output. Another who used $0.8\\times 3=2.4$ additively would be lost. Successive doublings multiply.

**2.** Extra arithmetic at $N=4$, two doublings: $c(4)=640$, which sits above $520$. The threshold test is about three doublings specifically. Between two and three doublings cost crosses $520$, and at eight units it has reached $512$.

**3.** Letter E asks for four doublings against the materials floor of $400$ and fails. This letter's $520$ at $N=8$ is a different comparison. The recovered $512$ is $8$ under $520$, a tight but genuine clearance.

The recovered modelled cost after three doublings is $512$, under $520$, so the statement is True.`,

    `**E.** → False

Four successive doublings take $N$ to $16$, and the claim is that modelled unit cost is already under $400$, the materials floor.

The overview already evaluated $c(16)=409.6$. Four hundred and nine point six still sits above $400$. Four $80\\%$ doublings: $1000\\times 0.8^{4}=1000\\times 0.4096=409.6$.

The materials floor is $400$, and $409.6$ has not reached it. The curve cannot describe costs below $400$, but at $N=16$ it has not yet tried to: the model still sits $9.6$ above the floor.

**1.** A rushed solver who used $0.8^{4}=0.4$ exactly, dropping the $0.0096$, would report $400$ on the nose and call the floor binding. The exact product is $0.4096$. Another who used three doublings, $512$, would sit well above $400$ on the wrong output.

**2.** Extra arithmetic that inverts the floor: $1000 N^{-b}=400$ gives $N^{-b}=0.4$, so $N=0.4^{-1/b}\\approx 0.4^{-3.1}\\approx 18$ or so, past $16$. Four doublings are not yet enough. Five doublings, $N=32$, give $c(32)=327.68$, which would sit under $400$ and be censored by the floor.

**3.** Letter D's $512<520$ does not license $409.6<400$. The floor is $400$, and $409.6$ is still above it.

The recovered modelled cost after four doublings is $409.6$, not under $400$, so the statement is False.`,
  ],

  "math-8-28": [
    `**A.** → False

Revenue follows $R(x)=A x^{\\frac{1}{2}}$ with $R(100)=900$, and the claim is that doubling the spend doubles revenue.

The overview already recovered $A=90$ and recorded that doubling $x$ multiplies $R$ by $\\sqrt{2}$, not by $2$. The coefficient cancels in the ratio

$$\\frac{R(2x)}{R(x)}=2^{\\frac{1}{2}}\\neq 2$$

**1.** Extra arithmetic on the recorded campaign: doubling $100$ is $200$, and $R(200)=90\\sqrt{200}=90\\cdot 10\\sqrt{2}=900\\sqrt{2}\\approx 1273$ against $R(100)=900$. Twice $900$ would have been $1800$, and $1273$ is not $1800$.

**2.** A rushed solver who used exponent $1$ is telling a proportional story the square-root technology contradicts. Another who used the fee $F(x)=6x$, which does double when spend doubles, has mixed revenue with the platform charge.

**3.** Letter B is the falling average $R/x$. Letter C is net gain turning negative. This letter is only the scale factor on $R$. The fee doubling has nothing to do with whether $R$ doubles.

**4.** The opposite verdict would need $r=1$ on revenue. With $r=\\frac{1}{2}$, doubling spend does not double revenue.

The recovered doubling factor is $\\sqrt{2}$, not $2$, so the statement is False.`,

    `**B.** → True

The claim is that revenue per euro of spend falls as the campaign grows.

The overview already recorded that average product $90 x^{-\\frac{1}{2}}$ falls. The leftover exponent is negative, so that average declines as $x$ grows. A square-root technology cannot keep pace with spend.

**1.** Extra arithmetic at the recorded campaign and a neighbour: $R(100)/100=9$ euros of revenue per euro of spend, and $R(225)/225=90\\cdot 15/225=6$, already lower. At $x=400$, $R(400)/400=90\\cdot 20/400=4.5$, half the recorded average.

**2.** A rushed solver who saw $R$ rise from $900$ to $1350$ at $x=225$ and concluded that spend is becoming more productive has mixed the total with the average. Letter A's $\\sqrt{2}$ scale is the same $r<1$ story. Another who used $r>1$ would have a rising average.

**3.** Net gain $N=R-6x$ turns negative once the falling average crosses the fee of $6$, which is letter C. This letter is the falling average itself.

**4.** The opposite verdict would need $r>1$. With $r=\\frac{1}{2}$, revenue per euro falls as the campaign grows.

The recovered average $90 x^{-\\frac{1}{2}}$ falls as spend grows, so the statement is True.`,

    `**C.** → True

Net gain is $N(x)=90\\sqrt{x}-6x$. The claim is that once net gain turns negative, it stays negative at every larger spend.

The overview already recorded the unique positive root $x=225$, and $N<0$ for $x>225$. Past that root the linear fee dominates a square root. A second crossing would need the square root to catch the line again, which a leftover $90/\\sqrt{x}-6$ that keeps falling cannot do.

**1.** Extra arithmetic at the root: $90\\sqrt{225}-6\\cdot 225=90\\cdot 15-1350=0$. At $x=256$, letter E's $N(256)=-96<0$. At $x=400$, $N(400)=90\\cdot 20-2400=-600$, more negative. There is no later catch-up.

**2.** A rushed solver who thought a square root "grows forever" and must recross a line has forgotten that $6x$ grows faster. Exponent $1$ beats exponent $\\frac{1}{2}$ past a unique crossing. Another who used two roots from a quadratic in $\\sqrt{x}$ without discarding $x=0$ has counted the origin, which is not a sign change of $N$ on $x>0$ in the same way: $N(0+)$ opens positive.

**3.** Letter D's $N(100)=300>0$ sits before the root. This letter is the sign past the root. Unique leftover power $\\sqrt{x}$ against $x$ crosses once on $x>0$.

**4.** The opposite verdict would need equal exponents, or a fee that flattened. With $N=90\\sqrt{x}-6x$, once negative, always negative at larger spend.

The recovered net gain stays negative past $x=225$, so the statement is True.`,

    `**D.** → True

This is a level of net gain at a spend of $100$, asked against a threshold of $250$.

The overview already evaluated $N(100)=300$. Three hundred sits above $250$. Revenue $900$ minus fee $600$ is $300$.

**1.** A rushed solver who used $R(100)=900$ as if it were net gain would still pass "above $250$" on the wrong object. Another who used $N=90\\cdot 100-6\\cdot 100=8400$ skipped the square root.

**2.** Extra arithmetic at $x=225$, the break-even: $N(225)=0$, which sits below $250$. The threshold test is about $x=100$ specifically. Between $100$ and $225$ net gain falls through $250$ and then through $0$.

**3.** Letter E's $N(256)=-96$ is a different comparison. $300>250$ is a clear clearance at the recorded campaign.

The recovered net gain at a spend of $100$ is $300$, above $250$, so the statement is True.`,

    `**E.** → False

This is a level of net gain at a spend of $256$, asked against positivity.

The overview already evaluated $N(256)=-96$. Net gain is already negative. Revenue $90\\cdot 16=1440$ minus fee $6\\cdot 256=1536$ is $-96$.

**1.** A rushed solver who used $x=225$ as if $256$ were still before the root would report $N=0$ or small and positive. Two hundred and fifty-six sits $31$ past the break-even $225$. Another who used $R(256)=1440$ as net gain has dropped the fee.

**2.** Extra arithmetic at $x=196$, a nearby perfect square before the root: $N(196)=90\\cdot 14-6\\cdot 196=1260-1176=84>0$. The sign change is between $196$ and $256$, at $225$. The claim is $x=256$ specifically.

**3.** Letter D's $300>250$ at $x=100$ does not license positivity at $x=256$. Past $225$ the linear fee has taken over.

The recovered net gain at a spend of $256$ is $-96$, not positive, so the statement is False.`,
  ],

  "math-8-29": [
    `**A.** → True

Material is $m(L)=A L^{\\frac{1}{2}}$ with $m(100)=40$. This letter asks whether material grows more slowly than labour hours, that is whether the material exponent sits below one.

The overview already recovered $A=4$ and recorded that $\\frac{1}{2}<1$. Multiplying labour by $k$ multiplies material by $k^{\\frac{1}{2}}$, a smaller factor. Material grows more slowly than labour hours.

**1.** Extra arithmetic on the recorded run: doubling $100$ hours is $200$ hours, and $m(200)=4\\sqrt{200}=40\\sqrt{2}\\approx 56.6$ against $m(100)=40$. Material multiplies by about $1.41$, slower than the doubling of hours.

**2.** A rushed solver who compared $40$ tonnes with $100$ hours and saw $0.4$ tonnes per hour has an average, not a growth-rate statement. Growth rate is $r$ against $1$. Another who used the finished-output exponent $\\frac{3}{4}$ from letter B has mixed the two stages.

**3.** Letter B is a scale claim on the composed finished output. Letter C is the falling average of finished output. This letter is only the material stage's $r=\\frac{1}{2}<1$.

**4.** The opposite verdict would need material exponent $\\ge 1$. The stem's $\\frac{1}{2}$ sits below $1$.

The recovered material exponent sits below one, so the statement is True.`,

    `**B.** → False

The conversion is $g(m)=B m^{\\frac{3}{2}}$ with $g(9)=54$, and composing with material gives $g=16 L^{\\frac{3}{4}}$. The claim is that doubling labour hours doubles finished output.

The overview already recorded that doubling $L$ multiplies $g$ by $2^{\\frac{3}{4}}\\approx 1.68$, not by $2$. The composed coefficient cancels in the ratio

$$\\frac{g(2L)}{g(L)}=2^{\\frac{3}{4}}\\neq 2$$

**1.** Extra arithmetic on a concrete staffing: after $81$ hours letter E's $g(81)=432$, and after $162$ hours $g(162)=16\\cdot 162^{\\frac{3}{4}}=16\\cdot (81\\cdot 2)^{\\frac{3}{4}}=432\\cdot 2^{\\frac{3}{4}}\\approx 726$, not $864$. Twice $432$ would have been $864$.

**2.** A rushed solver who used exponent $1$ on the composition, adding $\\frac{1}{2}+\\frac{3}{2}=2$ instead of multiplying $\\frac{1}{2}\\cdot\\frac{3}{2}=\\frac{3}{4}$, would have reported a quadrupling of finished output on a doubling of labour, a different false claim. Exponents multiply under composition.

**3.** Letter A used $\\frac{1}{2}$ on material alone. This letter uses the product $\\frac{3}{4}$ on finished output. Both sit below $1$, so neither stage nor the chain doubles when labour doubles.

**4.** The opposite verdict would need composed exponent $1$. With $\\frac{3}{4}$, doubling labour does not double finished output.

The recovered doubling factor is $2^{\\frac{3}{4}}$, not $2$, so the statement is False.`,

    `**C.** → True

The claim is that finished output per labour hour falls as labour rises.

The overview already recorded that output per hour is $16 L^{-\\frac{1}{4}}$. The leftover exponent is negative, so that average falls as labour rises. A composed exponent below one forces a falling average product.

**1.** Extra arithmetic at the recorded labour and a neighbour: after $100$ hours, material is $40$ tonnes and finished output is $g=2\\cdot 40^{\\frac{3}{2}}=2\\cdot 80\\sqrt{10}\\approx 506$, so average about $5.06$ units per hour. After $81$ hours, $g(81)=432$ and $432/81\\approx 5.33$, already higher than at $100$ hours, as a falling average requires. After $16$ hours, $g(16)=16\\cdot 8=128$ and $128/16=8$, higher still.

**2.** A rushed solver who saw $g$ rise with $L$ and concluded that labour is becoming more productive has mixed the total with the average. Letter B's $2^{3/4}$ scale is the same $r<1$ story.

**3.** Letter D names the inverse as a power. This letter is the falling average. An exponent above one on the composition would have raised the average.

**4.** The opposite verdict would need composed $r>1$. With $r=\\frac{3}{4}$, finished output per hour falls as labour rises.

The recovered average $16 L^{-\\frac{1}{4}}$ falls as labour rises, so the statement is True.`,

    `**D.** → True

The claim is about the inverse: whether the labour needed for a given finished count is itself a power of that count.

The overview already recorded $L=(g/16)^{\\frac{4}{3}}$. A nonzero power inverts to another power. From $g=16 L^{\\frac{3}{4}}$, isolate $L$ by raising to the reciprocal exponent $\\frac{4}{3}$. The result is a monomial in $g$.

That is a power function of the finished count. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at $g=432$: $L=(432/16)^{\\frac{4}{3}}=27^{\\frac{4}{3}}=81$, which returns letter E's eighty-one hours. That inversion landing on $81$ is how we know the inverse is the right monomial.

**2.** A rushed solver who wrote $L=\\log g$ mixed this plant with an exponential technology. Another who added a setup, $L=5+(g/16)^{\\frac{4}{3}}$, would have left the power-function class; the stem has no such floor.

**3.** Letter B used the inverse exponent $\\frac{4}{3}$ as a reverse scale. This letter names the inverse as a function class. The same $L\\propto g^{4/3}$ is what made doubling finished output cost more than a doubling of hours.

**4.** If the composition had carried an intercept, the inverse would not have been a power. The stem is two pure monomials composed.

The recovered labour is a power of the finished count, so the statement is True.`,

    `**E.** → True

This is a level after $81$ labour hours, asked against a threshold of $400$ finished units.

The overview already evaluated $g(81)=432$. Four hundred and thirty-two sits above $400$. Eighty-one to the $\\frac{3}{4}$ is $27$, and $16\\cdot 27=432$.

**1.** A rushed solver who used $g=16\\cdot 81=1296$ skipped the fractional power. Another who used only the material stage, $m(81)=4\\cdot 9=36$ tonnes, would sit below $400$ on the wrong quantity.

**2.** Extra arithmetic at $L=16$: $g(16)=128$, which sits below $400$. The threshold test is about $L=81$ specifically. Between $16$ and $81$ hours finished output crosses $400$, and at $81$ it has reached $432$.

**3.** The opposite verdict would need $g(81)\\le 400$, which would have required a smaller $B$ or a smaller $A$. The two recorded runs force $432$.

The recovered finished output after $81$ hours is $432$ units, above $400$, so the statement is True.`,
  ],

  "math-8-30": [
    `**A.** → True

Demand is $q(p)=A p^{-\\frac{3}{2}}$ with $q(4)=250$, and revenue is $R=pq$. This letter asks whether the price needed for a given revenue is itself a power of that revenue.

The overview already recovered $A=2000$ and $R(p)=2000 p^{-\\frac{1}{2}}$, which inverts to $p=(2000/R)^{2}$. A nonzero power inverts to another power. Price needed for a given revenue is a monomial in that revenue, coefficient $2000^{2}$ and exponent $-2$.

**1.** Extra arithmetic that uses the inverse at $R=400$: $p=(2000/400)^{2}=25$, which returns letter D's price of $25$ euros. That inversion landing on $25$ is how we know the inverse is the right monomial.

**2.** A rushed solver who thought a negative exponent on $R(p)$ could not invert to a power has forgotten that $u^{-r}$ inverts to a power. Another who wrote $p=\\log R$ mixed this publisher with an exponential technology.

**3.** Letters B and C read $R(p)$ as a scale factor and as a direction. This letter names the inverse. The same $p\\propto R^{-2}$ is what made a revenue target a square of a reciprocal.

**4.** If revenue had been $R=2000 p^{-\\frac{1}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem's $R=pq$ on a pure monomial demand is itself a pure monomial.

The recovered price is a power of revenue, so the statement is True.`,

    `**B.** → False

Doubling the price is $k=2$, and the claim is that revenue halves.

The overview already recorded that doubling $p$ multiplies $R$ by $2^{-\\frac{1}{2}}=1/\\sqrt{2}\\approx 0.707$, not by $1/2$. The coefficient cancels in the ratio

$$\\frac{R(2p)}{R(p)}=2^{-\\frac{1}{2}}\\neq\\frac{1}{2}$$

Revenue falls by about thirty percent, not by fifty.

**1.** Extra arithmetic on the recorded price: doubling $4$ euros is $8$ euros, and $R(8)=2000/\\sqrt{8}=2000/(2\\sqrt{2})=500\\sqrt{2}\\approx 707$ against $R(4)=1000$. Half of $1000$ would have been $500$, and $707$ is not $500$.

**2.** A rushed solver who used exponent $-1$ on $R$, as if demand were $A p^{-2}$, would have halved revenue, which is exactly the false claim. Another who used $2^{-\\frac{3}{2}}$ mixed demand's exponent with revenue's.

**3.** Letter C says revenue falls as price rises, which is true and weaker than "halves on a doubling." This letter is the specific factor $1/\\sqrt{2}$.

**4.** The opposite verdict would need revenue exponent $-1$. With $-\\frac{1}{2}$, doubling price does not halve revenue.

The recovered doubling factor is $1/\\sqrt{2}$, not $1/2$, so the statement is False.`,

    `**C.** → True

The claim is that revenue falls as the price rises.

The overview already recorded $R(p)=2000 p^{-\\frac{1}{2}}$. The leftover exponent is negative, so $R$ falls as $p$ rises. Inverse-power demand is elastic enough here that a price rise shrinks $pq$.

**1.** Extra arithmetic at the recorded price and letter D's price: $R(4)=1000$ and $R(25)=400$, already lower. At $p=16$, $R(16)=2000/4=500$, sitting between those two. The fall is monotone.

**2.** A rushed solver who saw quantity fall and concluded that revenue must fall has the right conclusion here for the wrong generality: quantity falling does not force revenue to fall when demand is inelastic. Task $33$ is that other story. Here the revenue exponent $-\\frac{1}{2}<0$ is what forces the fall.

**3.** Letter B's factor $1/\\sqrt{2}$ is this letter at $k=2$. Letter E is the fixed-charge cover, which uses the same falling $R$.

**4.** The opposite verdict would need revenue exponent $\\ge 0$, hence demand exponent $\\ge -1$. The stem's $-\\frac{3}{2}$ sits below $-1$, so $R$ falls in $p$.

The recovered revenue $2000 p^{-\\frac{1}{2}}$ falls as the price rises, so the statement is True.`,

    `**D.** → True

This is a level of revenue at a price of $25$, asked against a threshold of $450$.

The overview already evaluated $R(25)=400$. Four hundred sits under $450$. Twenty-five is a perfect square, so the square root is $5$, and $2000/5=400$.

**1.** A rushed solver who used $q(25)=2000/125=16$ as if it were revenue would sit far under $450$ on the wrong object. Another who used $R=2000\\cdot\\sqrt{25}=10000$ flipped the exponent sign.

**2.** Extra arithmetic at $p=16$: $R(16)=500$, which sits above $450$. The threshold test is about $p=25$ specifically. Between $16$ and $25$ euros revenue crosses $450$ going down, and at $25$ it has reached $400$.

**3.** Letter E's cover up to $p=25$ uses this same $R(25)=400$ against the charge of $400$. This letter compares $400$ with $450$, a different line.

The recovered revenue at $25$ euros is $400$, under $450$, so the statement is True.`,

    `**E.** → False

The fixed charge of $400$ is covered when $R(p)\\ge 400$, and the claim is that this happens only at prices below $16$.

The overview already recorded that covering the charge requires $p\\le 25$, not $p\\le 16$. From $2000 p^{-\\frac{1}{2}}\\ge 400$, one gets $p^{\\frac{1}{2}}\\le 5$ and $p\\le 25$. Coverage therefore runs up to $25$ euros.

**1.** Extra arithmetic at $p=16$: $R(16)=500\\ge 400$, so $16$ euros is covered, but it is not the upper end. At $p=25$, $R(25)=400$ on the nose, still covered. At $p=36$, $R(36)=2000/6\\approx 333<400$, no longer covered. The cut-off is $25$, not $16$.

**2.** A rushed solver who used $R(16)=400$ by mixing letter D's $400$ with $p=16$ would have placed the cut-off at $16$ and made the claim true by a wrong level. $R(16)=500$, not $400$.

**3.** Letter D's $R(25)=400<450$ is compatible with $R(25)=400$ covering a charge of $400$. "Under $450$" and "covers $400$" are different comparisons at the same price.

**4.** The opposite verdict would need $R(16)=400$, hence a smaller $A$. The recorded $q(4)=250$ forces $A=2000$ and a cover up to $p=25$.

The recovered cover runs up to $25$ euros, not only below $16$, so the statement is False.`,
  ],
};

const report = applyLetters("21_30.json", L);
for (const r of report) console.log(r.id, r.wc.join("/"));
