import fs from "fs";
import { applyLetters, words } from "./_expand_apply.mjs";

const patches = {
  "math-8-51": [
    `**A.** → True

This letter is about how the practice bill grows with the book, not about any named invoice. The stem prices engagements by a three-quarters power of the number of accounts tested. The overview recovered the coefficient $A=100$, but a growth claim never needs that coefficient: it lives in the exponent alone.

An exponent smaller than one means the bill still rises with the book, yet it lags the account count. Doubling the book would double a linear rival quote $R(n)=50n$. The practice bill instead scales by $2^{\\frac{3}{4}}$, which sits below $2$. That is the economies of scale in the title, read as a ranking of exponents rather than as a euro figure.

**1.** A rushed solver who read $0.75$ as "almost linear" would have treated the bill as lockstep with $n$. The gap between a doubling and a factor of about $1.68$ is the whole point of the power.

**2.** The opposite verdict would have needed an exponent at least $1$. A cubic cost, or even a linear one, would outrun or match the book. The recovered exponent is $\\frac{3}{4}$.

The bill grows more slowly than the number of accounts, so the statement is True.`,

    `**B.** → False

Doubling the number of accounts would double the practice bill only if the exponent were $1$. The overview recovered $C(n)=100 n^{\\frac{3}{4}}$, so the scale factor is $2^{\\frac{3}{4}}\\approx 1.68$, not $2$. The bill rises, but not in lockstep with the book.

This is the same scale identity as letter A, now read against an explicit doubling claim rather than against a qualitative lag. The coefficient $100$ cancels in the ratio, so a different audit rate would not have saved the claim.

**1.** Linear thinking is the mismatch named in the rival quote $R(n)=50n$. That rival does double when accounts double. Mixing the rival with the practice is how a true doubling appears.

**2.** What would have to change is the exponent itself. An exponent of $1$ would make $C(2n)=2C(n)$ for every $n>0$. The logged rise from $16$ to $81$ accounts already forbids that: those sizes are not a doubling, and the recovered $\\frac{3}{4}$ is locked in.

The doubling factor is not $2$, so the statement is False.`,

    `**C.** → True

This is a level question at the logged size of $81$ accounts, not a scale question. The overview recovered $C(81)=2700$. The claim asks whether that invoice already sits above $2500$.

Two thousand seven hundred clears two thousand five hundred by $200$ euros. The same $2700$ is also the client's cap in the stem, so at $81$ accounts the bill sits exactly on the cap and therefore above $2500$.

**1.** A rushed solver who stopped at $C(16)=800$ would have compared the small invoice to $2500$ and flipped the verdict. Letter C names the larger engagement.

**2.** The figure $2500$ is not a rounding of $2700$. It is a nearby cutoff. The opposite verdict would have needed a cap or a coefficient that pulled $C(81)$ down through $2500$.

The recovered bill at $81$ accounts is $2700$, so the statement is True.`,

    `**D.** → False

This letter asks about the leftover slope of the bill, not about the bill itself. The overview recovered $C(n)=100 n^{\\frac{3}{4}}$. An extra account after eighty-one versus after sixteen is a comparison of two derivatives, and those derivatives are new arithmetic the shared solve did not need.

**1.** Differentiating the recovered rule gives leftover exponent $-\\frac{1}{4}$:

$$C'(n)=75 n^{-\\frac{1}{4}}$$

**2.** At sixteen accounts the fourth root is $2$, so

$$C'(16)=\\frac{75}{2}$$

**3.** At eighty-one accounts the fourth root is $3$, so

$$C'(81)=25$$

Because $25<\\frac{75}{2}$, an extra account adds less after eighty-one than after sixteen, not more. The leftover exponent is negative, so later accounts are cheaper to add. That is the economies of scale in the title, now read as a slope rather than as a doubling factor.

A rushed solver who remembered that $C(81)=2700$ is larger than $C(16)=800$ would have confused a higher bill with a steeper extra-account cost. The level is higher at eighty-one; the slope is flatter. Mixing those two is how the claim's "adds more" appears. The finite rise of $1900$ euros across $65$ accounts, about $29$ euros per extra account on average, sits between the two instantaneous slopes $37.5$ and $25$, as a falling slope requires. It does not reverse the ranking.

The opposite verdict would have needed an exponent larger than $1$, so that $C'$ would itself rise. The logged rise forced $r=\\frac{3}{4}<1$. Changing the $1900$ gap would change $A$ and scale both slopes by the same factor; it would not flip which one is larger. A linear rival $R(n)=50n$ has constant slope $50$, so an extra account would add the same amount after sixteen as after eighty-one. Mixing that rival slope with the practice is another way to manufacture the claim.

An extra account adds less after eighty-one than after sixteen, so the statement is False.`,

    `**E.** → True

This letter inverts the recovered bill, rather than reading a named size. The overview recovered that a bill of $12500$ already requires $n=625$ accounts. The claim asks whether that size sits above $600$.

Six hundred and twenty-five clears six hundred. The inversion is a fourth power because the exponent is $\\frac{3}{4}$: once $n^{\\frac{3}{4}}=125=5^{3}$, taking both sides to the $\\frac{4}{3}$ sends $n$ to $5^{4}=625$.

**1.** A rushed solver who treated the bill as linear with $A=100$ would have claimed $n=125$, well below $600$, and flipped the verdict. Linear thinking understates the book needed for a large invoice when $r<1$.

**2.** Checking the recovered rule at the cutoff itself: at $600$ accounts, $600^{\\frac{3}{4}}$ is a little under $125$, so $C(600)$ sits a little under $12500$. The target invoice is not yet met at $600$, which is why the claim's "already requires more than $600$" holds.

**3.** The opposite verdict would have needed a smaller target bill, or a larger coefficient, so that the inverted size fell through $600$. At the recovered $A=100$, the $12500$ invoice is locked to $625$ accounts. The rival quote $R(n)=50n$ would hit $12500$ already at $n=250$, which is under $600$. Mixing the rival with the practice is another way to flip the letter. The practice, not the rival, is the curve being inverted.

The recovered size for a bill of $12500$ is $625$ accounts, so the statement is True.`,
  ],

  "math-8-52": [
    `**A.** → True

This letter compares the recovered exponent to inverse-linear decay, not a named monitor reading. Concentration follows $c(x)=A x^{-1.5}$. Inverse-linear decay would have carried exponent $-1$, so a doubling of distance would have halved the reading. The overview recovered exponent $-\\frac{3}{2}$, which sits below $-1$.

The doubling factor is then $2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}\\approx 0.354$, steeper than $\\frac{1}{2}$. Concentration still falls with range; it just falls faster than a simple reciprocal of distance.

**1.** A rushed solver who saw a negative exponent and stopped at "it decays" would have treated every decay as inverse-linear. The extra half in $-\\frac{3}{2}$ is the whole comparison.

**2.** The opposite verdict would have needed an exponent at or above $-1$. Inverse-square, at $-2$, would have been even steeper. The stack model sits between those two, still faster than inverse-linear.

Because $-\\frac{3}{2}<-1$, concentration falls faster than inverse-linear decay, so the statement is True.`,

    `**B.** → False

Concentration per metre of distance is the intensity $c(x)/x$, not the reading $c(x)$ itself. The overview recovered $c(x)=400 x^{-\\frac{3}{2}}$, so the quotient is $400 x^{-\\frac{5}{2}}$. The leftover exponent is not $0$, so the intensity still depends on range.

Near the stack the intensity is steep. Far downwind it flattens. A constant intensity would have needed leftover exponent $0$, which would have required the original exponent to be $-1$. The recovered $-\\frac{3}{2}$ forbids that.

**1.** A rushed solver who divided a level by a distance once, at the $4$ m monitor, would have claimed $50/4=12.5$ and treated that as a law. Repeating the division at $16$ m gives $6.25/16\\approx 0.39$, a different figure.

**2.** The opposite verdict would have needed inverse-linear decay. The logged gap between the two monitors already forced $-\\frac{3}{2}$.

The intensity still depends on range, so the statement is False.`,

    `**C.** → True

This is a level question at $100$ metres, well past the two monitors. The overview recovered $A=400$ and $c(100)=0.4$. The claim asks whether that far reading already sits below $0.5$ microgram per cubic metre.

Four tenths sits below one half. The three-halves power at $100$ is $10^{3}=1000$, and $400/1000=0.4$ is the far-field entry. The two monitors were $50$ and $6.25$; this letter is a third range, not a reread of either of those.

**1.** A rushed solver who scaled the $16$ m reading of $6.25$ by $16/100$ as if the law were inverse-linear would have claimed $1$, which sits above $0.5$ and flips the verdict. Inverse-linear thinking is too slow a decay for this stack.

**2.** The opposite verdict would have needed a smaller coefficient, or a shallower exponent, so that $c(100)$ rose through $0.5$. At the recovered $A=400$, the far reading is locked to $0.4$.

The recovered concentration at $100$ metres is $0.4$, so the statement is True.`,

    `**D.** → True

This letter inverts the concentration law, rather than reading a named range. A nonzero power inverts to another power. The overview recovered $c=400 x^{-\\frac{3}{2}}$, so isolating distance raises both sides to the reciprocal $-\\frac{2}{3}$ and leaves

$$x=\\left(\\frac{400}{c}\\right)^{\\frac{2}{3}}$$

Distance needed for a given concentration is still a monomial in $c$. Falling concentration does not introduce a logarithm. The new exponent is the reciprocal of $-\\frac{3}{2}$, just as any power $c=A x^{r}$ inverts to $x=(c/A)^{1/r}$.

**1.** A rushed solver who treated inversion as "swap the variables and keep the exponent" would have written $x=A c^{-\\frac{3}{2}}$ and lost the reciprocal. The exponent must flip sign and take the reciprocal.

**2.** Checking a recovered pair: at $c=50$ the inverse returns $x=4$, the nearer monitor. At $c=6.25$ it returns $x=16$. The inverse is faithful to the two logged readings, which is what a power inverse must do.

**3.** The opposite verdict would have needed a law that was not a pure power: a decaying exponential, or a sum of two powers, would invert to a logarithm or to a mess. The stem is a single monomial.

The distance that produces a given concentration is itself a power of that concentration, so the statement is True.`,

    `**E.** → False

This is a level question at the nearer monitor. The overview recovered $c(4)=50$. The claim asks whether that reading still sits under $45$ micrograms per cubic metre.

Fifty is not under forty-five. That $50$ is also $6.25+43.75$, the far reading plus the logged gap, so the nearer monitor is pinned once the gap and the far reading are known. The figure $45$ is a nearby cutoff, not a rounding of $50$.

**1.** A rushed solver who treated $43.75$ as the nearer reading itself would have claimed "under $45$" and flipped the verdict. The $43.75$ is a difference of two monitors, not a level.

**2.** The opposite verdict would have needed a smaller gap, or a smaller far reading, so that $c(4)$ fell through $45$. At the recovered pair $50$ and $6.25$, the nearer monitor is locked above $45$.

The recovered concentration at $4$ metres is $50$, so the statement is False.`,
  ],

  "math-8-53": [
    `**A.** → True

This letter is about the shape after both stages, not a named wind speed. Surge is a square root of wind and loss cubes that surge. The overview recovered the composed law $L(w)=4w^{\\frac{3}{2}}$. A product of powers of the same variable is again a power. The composed exponent is $\\frac{1}{2}\\cdot 3=\\frac{3}{2}$, and the inner coefficient $0.5$ is cubed into the $4$.

Stopping at the surge stage would have left a square-root law in $w$. Stopping at the loss stage would have left a cubic in $s$. Neither of those is the composed map from wind to loss. The claim is about that composed map.

**1.** A rushed solver who added the exponents instead of multiplying them would have claimed exponent $3.5$ and still called it a power, which happens to keep the verdict but for the wrong reason. Composition multiplies, it does not add.

**2.** The opposite verdict would have needed a stage that was not a power: a logarithm, or a sum of two powers of surge. Both stages in the stem are monomials.

After both stages the loss index is itself a power of wind speed, so the statement is True.`,

    `**B.** → False

Doubling the wind speed would double the loss index only if the composed exponent were $1$. The overview recovered leftover exponent $\\frac{3}{2}$, so a doubling of wind multiplies loss by $2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$, not by $2$. A one-for-one wind scale-up understates the second stage.

The surge stage alone would have scaled by $\\sqrt{2}\\approx 1.41$. The cubic loss stage then cubes that factor. Mixing the surge scale with the composed scale is how a near-doubling appears.

**1.** Linear thinking on wind is the mismatch. Storm losses accelerate because the cube sits on top of the square root.

**2.** The opposite verdict would have needed the two stages to cancel to exponent $1$, for instance a square-root loss on a square-root surge. The stem cubes the surge.

The doubling factor is not $2$, so the statement is False.`,

    `**C.** → True

This is a level question at the named wind speed $64$. The overview recovered $s(64)=4$ and $L(64)=2048$. The claim asks whether that loss index already sits above $2000$.

Two thousand and forty-eight clears two thousand. Stage by stage: the square root of $64$ is $8$, times $0.5$ is a four-metre surge, and $32\\cdot 4^{3}=2048$. The composed shortcut $4\\cdot 64^{\\frac{3}{2}}=4\\cdot 512=2048$ is the same number.

**1.** A rushed solver who stopped after the surge stage would have compared $4$ metres to $2000$ and missed the letter. The claim is about the loss index, not the surge height.

**2.** The opposite verdict would have needed a smaller inner coefficient, or a missing cube, so that $2048$ fell through $2000$. At the recovered composition the index is locked above $2000$.

The recovered loss index at wind $64$ is $2048$, so the statement is True.`,

    `**D.** → True

This letter reads the composed exponent as an acceleration claim. The overview recovered leftover exponent $\\frac{3}{2}>1$, so each extra unit of wind adds more loss than the unit before it. The same doubling factor $2^{\\frac{3}{2}}=2\\sqrt{2}>2$ is that acceleration in a scale. A proportional law would have carried exponent $1$.

The first stage alone has exponent $\\frac{1}{2}<1$, so surge itself would decelerate. The cube in the second stage is what pushes the product above one. Acceleration of losses is a composed fact, not a surge fact.

**1.** A rushed solver who saw the square-root surge and stopped would have claimed deceleration. The claim is about the loss index after both stages.

**2.** Checking the leftover slope of the composed rule: $L'(w)=6 w^{\\frac{1}{2}}$, which rises with $w$. The slope at wind $16$ is $24$; at wind $64$ it is $48$. Later wind is dearer in loss, which is the same story as $r>1$.

The composed exponent exceeds one, so the statement is True.`,

    `**E.** → False

This letter inverts a loss of $1000$, rather than reading a named wind. The overview recovered that $L=1000$ already occurs at $w\\approx 39.7$, which sits below $50$, not above it. The claim's "already requires a wind speed above $50$" is the wrong side of that inverse.

**1.** Starting from $L(w)=4w^{\\frac{3}{2}}$, a loss of $1000$ forces $w^{\\frac{3}{2}}=250$, then $w=250^{\\frac{2}{3}}\\approx 39.7$. At $w=50$ the three-halves power is already past $250$ after the coefficient $4$, so a wind of $50$ already overshoots a loss of $1000$.

**2.** A rushed solver who inverted as if the exponent were $1$ would have claimed $w=250$, well above $50$, and flipped the verdict. Linear inversion overstates the wind needed when $r>1$.

**3.** Another mix-up is inverting the surge stage only: $0.5\\sqrt{w}=1000$ is nonsense units, and it manufactures a huge wind. The $1000$ is a loss index, not a surge height.

**4.** The opposite verdict would have needed a smaller coefficient, or a shallower composed exponent, so that the inverted wind rose through $50$. At the recovered $L(w)=4w^{\\frac{3}{2}}$, a loss of $1000$ is locked below $50$.

The recovered wind for a loss of $1000$ is about $39.7$, so the statement is False.`,
  ],

  "math-8-54": [
    `**A.** → True

This letter is about impact itself, not the scaled charge. Impact is a square-root law in order size. The overview recovered $I(v)=60\\sqrt{v}$. Doubling order size multiplies impact by $\\sqrt{2}\\approx 1.41$, not by $2$. One half sits below one, so impact grows more slowly than order size.

The coefficient $60$ cancels in any ratio, so a different calibration would not have changed this ranking. A proportional impact would have needed exponent $1$.

**1.** A rushed solver who glanced at the scaled charge $vI(v)$ would have seen leftover exponent $\\frac{3}{2}$ and claimed impact outruns size. That exponent belongs to the charge, not to $I$.

**2.** The opposite verdict would have needed an impact exponent at least $1$. The logged $6$ basis-point gap between $0.04$ and $0.09$ ADV already forced a square root.

Impact grows more slowly than order size, so the statement is True.`,

    `**B.** → False

The scaled charge is the product $vI(v)$, not impact itself. The overview recovered $I(v)=60\\sqrt{v}$, so the product is $60 v^{\\frac{3}{2}}$. A doubling of order size then multiplies the charge by $2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$, which exceeds $2$. Impact itself lags, but multiplying by the doubled size pushes the charge past a doubling.

Letter A was about $I$; this letter is about $vI$. Mixing those two objects is how a true doubling of the charge appears. The coefficient $60$ again cancels in the ratio.

**1.** Checking the recovered charge at two sizes: at $v=0.04$ the charge is $60\\cdot(0.04)^{\\frac{3}{2}}=0.48$. At twice that size, $v=0.08$, the charge is $60\\cdot(0.08)^{\\frac{3}{2}}\\approx 1.36$, and $1.36/0.48=2\\sqrt{2}$, not $2$.

**2.** The opposite verdict would have needed leftover exponent $1$ on the charge, which would have required impact exponent $0$, a constant impact. The stem is a square-root impact.

Doubling order size does not double the scaled impact charge, so the statement is False.`,

    `**C.** → True

This is a level question at $0.16$ ADV. The overview recovered $I(0.16)=24$. The claim asks whether that impact already sits above $20$ basis points.

Twenty-four clears twenty. The square root of $0.16$ is $0.4$, times $60$ is $24$. From the logged $0.09$ ADV impact of $18$, a further move to $0.16$ is a $\\frac{4}{3}$ factor on the square root, $18\\cdot\\frac{4}{3}=24$.

**1.** A rushed solver who doubled the $0.09$ ADV impact as if impact were linear would have claimed $36$ and still sat above $20$, for the wrong reason. Another mix-up is reading $0.16$ as a doubling of $0.04$, which it is in order size, and then doubling the $12$ bp impact at $0.04$ to $24$. That happens to land on the right number because $\\sqrt{4}=2$, but it is a coincidence of this particular pair.

**2.** The opposite verdict would have needed a smaller coefficient, so that $I(0.16)$ fell through $20$. At the recovered $A=60$, the impact is locked at $24$.

The recovered impact at $0.16$ ADV is $24$, so the statement is True.`,

    `**D.** → True

This letter is about the crossing of the scaled charge with the notional fee, and about what happens after that crossing. The overview recovered that the two meet at $v=0.25$, where both equal $7.5$. The claim asks whether, once the scaled charge overtakes the fee, it stays larger at every bigger order.

Past $v=0.25$ the square root $\\sqrt{v}$ keeps growing, so $60\\sqrt{v}-30$ stays positive. There is only one positive root of $60 v^{\\frac{3}{2}}=30v$, because dividing by $v>0$ leaves a monotone square root. Once the charge is ahead, the fee never catches up.

**1.** A rushed solver who saw two powers and expected two crossings would have looked for a second root. On $v>0$ the factor $v$ cancels and leaves a single square-root equation.

**2.** Checking a size past the crossing: at $v=0.36$, the charge is $60\\cdot(0.36)^{\\frac{3}{2}}=12.96$ and the fee is $10.8$, so the charge is still larger. At $v=1$ the charge is $60$ and the fee is $30$.

**3.** The opposite verdict would have needed the fee to have a higher leftover exponent than the charge, so that it could recross. The fee is linear; the charge has exponent $\\frac{3}{2}$. After the meeting, the higher exponent stays ahead.

Once the scaled charge overtakes the notional fee, it stays larger, so the statement is True.`,

    `**E.** → False

This is a level question on the scaled charge at $v=0.25$. The overview recovered that this is the break-even order, where the charge equals the notional fee at $7.5$. The claim asks whether that charge already sits above $10$.

Seven and a half sits below ten. This is also $60\\cdot\\left(\\frac{1}{4}\\right)^{\\frac{3}{2}}=60\\cdot\\frac{1}{8}=7.5$. The figure $10$ is a nearby cutoff, not a rounding of $7.5$.

**1.** A rushed solver who evaluated impact $I(0.25)=30$ instead of the scaled charge would have claimed "above $10$" and flipped the verdict. Thirty basis points is impact, not $vI$. Mixing $I$ with $vI$ is the mix-up.

**2.** Another mix-up is reading the fee $F(0.25)=7.5$ as if the claim were about the fee sitting above $10$. Neither the charge nor the fee clears $10$ at this order.

**3.** The opposite verdict would have needed a larger coefficient, so that $60 v^{\\frac{3}{2}}$ at $v=0.25$ rose through $10$. At the recovered $A=60$, the charge is locked at $7.5$.

The recovered scaled charge at $0.25$ ADV is $7.5$, so the statement is False.`,
  ],

  "math-8-55": [
    `**A.** → True

This letter inverts the energy law, rather than reading a named mass. A nonzero power inverts to another power. The overview recovered $E=10 m^{\\frac{2}{3}}$, so isolating mass raises both sides to the reciprocal $\\frac{3}{2}$ and leaves $m=(E/10)^{\\frac{3}{2}}$. Mass needed for a given daily energy is still a monomial in $E$.

Falling or rising energy does not introduce a logarithm. The new exponent is the reciprocal of $\\frac{2}{3}$, just as any power $E=A m^{r}$ inverts to $m=(E/A)^{1/r}$.

**1.** A rushed solver who swapped the variables and kept exponent $\\frac{2}{3}$ would have written $m=A E^{\\frac{2}{3}}$ and lost the reciprocal. The exponent must take the reciprocal.

**2.** Checking a recovered pair: at $E=160$ the inverse returns $m=64$, the larger logged animal. At $E=90$ it returns $m=27$. The inverse is faithful to the two logged animals.

The body mass that produces a given daily energy is a power function of that energy, so the statement is True.`,

    `**B.** → True

Energy per kilogram is the intensity $E(m)/m$, not the total $E(m)$. The overview recovered $E(m)=10 m^{\\frac{2}{3}}$, so the quotient is $10 m^{-\\frac{1}{3}}$. The leftover exponent is negative, so intensity falls as mass rises. A heavier animal uses more energy in total, but less per kilogram.

That is the allometric point of exponent $\\frac{2}{3}<1$. A constant intensity would have needed leftover exponent $0$, hence original exponent $1$.

**1.** Checking the two logged animals: at $27$ kg the intensity is $90/27\\approx 3.33$ units per kilogram. At $64$ kg it is $160/64=2.5$. Intensity has already fallen.

**2.** A rushed solver who saw a larger total at $64$ kg and inferred a larger intensity would have flipped the verdict. Totals rise; intensities fall.

Energy use per kilogram falls as body mass rises, so the statement is True.`,

    `**C.** → True

This is a level question at $64$ kg. The overview recovered $E(64)=160$. The claim asks whether that animal already uses more than $150$ energy units a day.

One hundred and sixty clears one hundred and fifty. The two-thirds power of $64$ is $16$, times $10$ is $160$. The logged gap of $70$ above $E(27)=90$ is the same $160$.

**1.** A rushed solver who treated $70$ as the $64$ kg level itself would have compared $70$ to $150$ and flipped the verdict. The $70$ is a difference of two animals, not a level.

**2.** The opposite verdict would have needed a smaller coefficient, so that $E(64)$ fell through $150$. At the recovered $A=10$, the $64$ kg animal is locked at $160$.

The recovered energy at $64$ kg is $160$, so the statement is True.`,

    `**D.** → False

This letter compares two equal animals with one animal of twice the mass. Two equal animals use $2E(m)$. One animal of twice the mass uses $E(2m)=2^{\\frac{2}{3}}E(m)$. Because $\\frac{2}{3}<1$, the factor $2^{\\frac{2}{3}}$ is about $1.59$, not $2$. Merging the two animals lowers total energy use rather than leaving it unchanged.

The overview recovered $A=10$, but the coefficient cancels in the comparison, so the ranking is an exponent fact. Herd totals add individual uses, which is why $2E(m)$ is the right left-hand side, not $E(2m)$ written twice.

**1.** Checking a concrete pair: two $27$ kg animals use $2\\cdot 90=180$. One $54$ kg animal uses $10\\cdot 54^{\\frac{2}{3}}\\approx 143$. The merge saves energy. At the logged $64$ kg against two $32$ kg animals the same ranking holds.

**2.** A rushed solver who treated energy as proportional to mass would have claimed $E(2m)=2E(m)$ and called the total unchanged. That is exponent $1$, which the logged gap already forbade.

**3.** The opposite verdict would have needed leftover exponent $1$, a linear energy law. Allometry with $\\frac{2}{3}$ is why combining two animals into one larger animal is cheaper in energy, not equal.

Merging two equal animals lowers total energy use, so the statement is False.`,

    `**E.** → True

This is a level question at $216$ kg. The overview recovered $E(216)=360$. The claim asks whether that animal still uses under $400$ energy units a day.

Three hundred and sixty sits under four hundred. Two hundred and sixteen is $6^{3}$, so the two-thirds power is $36$, times $10$ is $360$. From $E(27)=90$, an eightfold mass is a fourfold energy, $90\\cdot 4=360$, because $8^{\\frac{2}{3}}=4$.

**1.** A rushed solver who scaled $E(64)=160$ by $216/64$ as if energy were linear would have claimed $540$, above $400$, and flipped the verdict. Linear thinking overstates a large animal when $r<1$.

**2.** The opposite verdict would have needed a larger coefficient, so that $E(216)$ rose through $400$. At the recovered $A=10$, the $216$ kg animal is locked at $360$.

The recovered energy at $216$ kg is $360$, so the statement is True.`,
  ],

  "math-8-56": [
    `**A.** → True

This letter is a ranking by distance, not a named zone count. The exponent $-\\frac{3}{2}$ is negative, so for $d_{2}>d_{1}$ the ratio of footfalls is $(d_{2}/d_{1})^{-\\frac{3}{2}}<1$. A farther zone always supplies fewer visitors than a nearer one. Sign of the exponent is the ranking.

The overview recovered $A=3200$, but the coefficient is positive and cancels in any ratio of two zones. A different planning file would not have changed this ranking.

**1.** A rushed solver who saw core catchment ending near $10$ km and thought a far zone could still out-supply a near one by being larger in population would have imported a fact the stem does not give. The model is a pure distance decay.

**2.** The opposite verdict would have needed a positive exponent, a law that grew with drive time. The stem is $d^{-1.5}$.

A farther zone always supplies fewer visitors than a nearer zone, so the statement is True.`,

    `**B.** → False

An inverse-square law would give the fourfold-distance factor $4^{-2}=\\frac{1}{16}$. The recovered exponent $-\\frac{3}{2}$ instead gives $4^{-\\frac{3}{2}}=\\frac{1}{8}$. The two scale factors do not match. Inverse-square is the wrong power.

The overview recovered $f(4)=400$ and $f(16)=50$, and $50/400=\\frac{1}{8}$, not $\\frac{1}{16}$. The planning file's own two zones already refuse inverse-square.

**1.** A rushed solver who saw a negative exponent and a square in the two distances $4$ and $16$ would have guessed inverse-square. The distances being squares is a convenience for the three-halves power, not a hint at exponent $-2$.

**2.** The opposite verdict would have needed the logged gap to force exponent $-2$. It forced $-\\frac{3}{2}$.

Footfall does not follow an inverse-square law of driving distance, so the statement is False.`,

    `**C.** → True

This is a level question at $9$ kilometres against the core floor of $100$ visitors. The overview recovered $f(9)=\\frac{3200}{27}\\approx 118.5$. The claim asks whether that zone still supplies more than $100$ visitors a week.

One hundred and eighteen and a half still clears one hundred. Nine kilometres is a perfect square, so $9^{1.5}=27$, and $3200/27$ is the exact count. The core threshold is $100$; this letter is a named zone, not the boundary itself.

**1.** A rushed solver who interpolated linearly between $f(4)=400$ and $f(16)=50$ would have claimed about $225$ at $9$ km, still above $100$ but for the wrong shape. Another mix-up is using $f(16)=50$ as if $9$ km were already past the far zone.

**2.** The opposite verdict would have needed a smaller coefficient, so that $f(9)$ fell through $100$. At the recovered $A=3200$, nine kilometres is still inside core catchment.

The recovered footfall at $9$ kilometres is about $118.5$, so the statement is True.`,

    `**D.** → True

This letter locates the core-catchment boundary, not a named zone. The overview recovered that $f(d)=100$ already occurs at $d=32^{\\frac{2}{3}}\\approx 10.08$ km. The claim asks whether core catchment already ends before $11$ kilometres.

Ten point zero eight sits before eleven. Ten kilometres still sits inside, because $10^{1.5}\\approx 31.62<32$, so $f(10)\\approx 101.2>100$. Eleven kilometres is already out, because $11\\sqrt{11}\\approx 36.48>32$, so $f(11)\\approx 87.7<100$. Core catchment already ends before $11$ kilometres, just after $10$.

**1.** A rushed solver who inverted as if the exponent were $-1$ would have claimed $d=32$, well past $11$, and flipped the verdict. Inverse-linear thinking overstates the catchment when decay is steeper than $-1$.

**2.** Another mix-up is treating the far logged zone of $16$ km as the boundary, because $f(16)=50$ is already under $100$. That zone is past the boundary; it is not the boundary.

**3.** The opposite verdict would have needed a larger core floor, or a smaller coefficient, so that the inverted distance fell through $11$ from the other side. At the recovered $A=3200$ and floor $100$, the boundary is locked near $10.08$ km.

Core catchment already ends before $11$ kilometres, so the statement is True.`,

    `**E.** → False

This letter compares leftover slopes at two ranges, not two footfall levels. The overview recovered $f(d)=3200 d^{-1.5}$. Differentiating gives $f'(d)=-4800 d^{-\\frac{5}{2}}$. Its size is $150$ at $4$ km and only about $4.69$ at $16$ km. An extra kilometre cuts more visitors near the park than far from it. Distance-decay drops are steepest at the door.

The claim says the extra kilometre cuts more far from the park. That is the wrong ranking of the two slopes.

**1.** A rushed solver who saw $f(4)=400$ much larger than $f(16)=50$ and inferred that far drops must be larger in count would have confused a smaller remaining footfall with a steeper cut. The remaining pool is smaller far away; the slope is also flatter.

**2.** Checking a one-kilometre finite step: from $4$ to $5$ km, $f(5)=3200/5^{1.5}\\approx 286$, a drop of about $114$. From $16$ to $17$ km, $f(17)\\approx 45.6$, a drop of about $4.4$. The finite steps agree with the derivatives.

**3.** The opposite verdict would have needed a positive leftover exponent on the slope size, which would have required the original exponent to sit above $-1$ in a way that made $|f'|$ grow. For $r=-\\frac{3}{2}$, $|f'|$ falls.

An extra kilometre of drive cuts more visitors near the park than far from it, so the statement is False.`,
  ],

  "math-8-57": [
    `**A.** → True

This letter is about the recovered exponent, not a named array. The two arrays forced $2.25^{r}=1.5$, and because $1.5=2.25^{\\frac{1}{2}}$ the overview recovered $r=\\frac{1}{2}$. Doubling area then multiplies output by $\\sqrt{2}\\approx 1.41$, not by $2$. One half sits below one, so output grows more slowly than installed area.

The coefficient $A=24$ cancels in any ratio, so a different pair of arrays with the same area ratio would have told the same ranking.

**1.** A rushed solver who compared $360$ kWh to $240$ kWh against $225$ m² to $100$ m² as a raw euro-per-square-metre story would have seen output rising with area and stopped. Rising is not the claim; rising more slowly than area is the claim.

**2.** The opposite verdict would have needed $r\\ge 1$. The two logged arrays already refuse that: output rose by $50\\%$ while area rose by $125\\%$.

Output grows more slowly than the installed area, so the statement is True.`,

    `**B.** → False

This letter reads the proposal that expands the $225$ m² array to $450$ m². The overview recovered $y(a)=24\\sqrt{a}$ and $y(450)\\approx 509$. The claim asks whether that expansion would push output above $520$ kWh.

Five hundred and nine sits under five hundred and twenty. Expanding $225$ m² to $450$ m² is a doubling, and $360\\cdot\\sqrt{2}\\approx 509$. A linear doubling would have claimed $720$, well above $520$. Square-root thinking is why the proposal misses $520$.

**1.** A rushed solver who doubled $360$ would have claimed $720$ and called the statement true. That is exponent $1$, which letter A already refused.

**2.** Another mix-up is adding $240$ kWh from the small array onto $360$, as if the proposal installed a second $100$ m² roof rather than doubling the $225$ m² roof. That sum is $600$, also above $520$, and it is the wrong experiment.

**3.** The opposite verdict would have needed a larger exponent, or a larger coefficient, so that $y(450)$ rose through $520$. At the recovered square-root law, the proposal is locked near $509$.

The recovered output at $450$ m² is about $509$ kWh, so the statement is False.`,

    `**C.** → True

Output per square metre is the intensity $y(a)/a$, not the total. The overview recovered $y(a)=24\\sqrt{a}$, so the quotient is $24 a^{-\\frac{1}{2}}$. The leftover exponent is negative. A larger roof delivers more kilowatt-hours in total, but fewer per square metre.

Checking the two logged arrays: at $100$ m² the intensity is $2.4$ kWh per square metre. At $225$ m² it is $360/225=1.6$. Intensity has already fallen.

**1.** A rushed solver who saw $360>240$ and inferred a larger intensity would have flipped the verdict. Totals rise; intensities fall.

**2.** The opposite verdict would have needed leftover exponent $0$, a proportional roof. The two arrays already force $r=\\frac{1}{2}$.

Output per square metre falls as the array grows, so the statement is True.`,

    `**D.** → True

This letter inverts a doubling of the logged $240$ kWh output. The overview recovered that doubling $240$ to $480$ already needs $a=400$ m². The $100$ m² array must quadruple, which is more than a doubling. Any $r<1$ doubling of output requires more than a doubling of area.

From $24\\sqrt{a}=480$ one has $\\sqrt{a}=20$ and $a=400$. A doubling of area to $200$ m² would only multiply output by $\\sqrt{2}$, to about $339$ kWh, short of $480$.

**1.** A rushed solver who doubled the area with the output would have claimed $200$ m² and called "more than a doubling" false. That is exponent $1$.

**2.** The opposite verdict would have needed $r\\ge 1$, so that doubling output needed at most a doubling of area. The two logged arrays already force $r=\\frac{1}{2}$.

To double the $240$ kWh output, the $100$ m² array must more than double in area, so the statement is True.`,

    `**E.** → True

This is a level question at $400$ m², the same array that doubles the logged $240$ kWh. The overview recovered $y(400)=480$. The claim asks whether that array already delivers more than $470$ kWh.

Four hundred and eighty sits above four hundred and seventy. Twenty squared is $400$, and $24\\cdot 20=480$. The $470$ cutoff is a near miss on that exact doubling array.

**1.** A rushed solver who used $y(225)=360$ and scaled by $400/225$ linearly would have claimed about $640$, still above $470$ but for the wrong shape. Another mix-up is reading $y(450)\\approx 509$ from letter B as if the claim named $450$ m².

**2.** The opposite verdict would have needed a smaller coefficient, so that $y(400)$ fell through $470$. At the recovered $A=24$, four hundred square metres is locked at $480$.

The recovered output at $400$ m² is $480$ kWh, so the statement is True.`,
  ],

  "math-8-58": [
    `**A.** → False

Doubling cumulative volume would halve the unit cost only if the exponent were $-1$. The overview recovered $b=-\\frac{1}{2}$, so doubling volume multiplies unit cost by $2^{-\\frac{1}{2}}\\approx 0.707$, not by $\\frac{1}{2}$. Quadrupling would halve the unit cost, because $4^{-\\frac{1}{2}}=\\frac{1}{2}$, and that is the logged move from $80$ euros at $100$ thousand cells to $40$ euros at $400$ thousand. A single doubling is not that move.

**1.** A rushed solver who saw cost fall from $80$ to $40$ between the two milestones and called every doubling a halving would have skipped that the milestones are a quadrupling of volume, not a doubling.

**2.** The opposite verdict would have needed $b=-1$. The two milestones force $4^{b}=\\frac{1}{2}$, hence $b=-\\frac{1}{2}$.

Doubling cumulative volume does not halve the unit cost, so the statement is False.`,

    `**B.** → True

Unit cost falls, but cumulative spend is $S(N)=N\\,c(N)$. The overview recovered $c(N)=800 N^{-\\frac{1}{2}}$, so spend is $S(N)=800 N^{\\frac{1}{2}}$. The leftover exponent on spend is positive, so $S$ still rises. Cheaper cells can still mean a larger total cheque as volume grows.

Checking the milestones: $S(100)=8000$ and $S(400)=16000$. Unit cost halved; spend doubled. The two stories run in opposite directions.

**1.** A rushed solver who saw unit cost falling and inferred that the total cheque must fall would have mixed a per-cell figure with a cumulative one. The title tracks both.

**2.** The opposite verdict would have needed leftover exponent on $S$ to be negative, hence $b<-1$. The recovered $b=-\\frac{1}{2}$ is not that steep.

Unit cost falls as volume grows, but cumulative spend still rises, so the statement is True.`,

    `**C.** → True

This is a level question at $1600$ thousand cells. The overview recovered $c(1600)=20$. The claim asks whether that unit cost is already below $25$ euros.

Twenty sits below twenty-five. Two further quadruplings from $c(100)=80$ are $40$ then $20$, because each quadrupling halves unit cost. Sixteen hundred is four times four hundred, so one more halving from the second milestone.

**1.** A rushed solver who applied one doubling from $c(400)=40$ would have claimed about $28$, above $25$, and flipped the verdict. The move from $400$ to $1600$ is a quadrupling, not a doubling.

**2.** The opposite verdict would have needed a shallower learning exponent, so that $c(1600)$ sat above $25$. At the recovered $b=-\\frac{1}{2}$, the unit cost is locked at $20$.

The recovered unit cost at $1600$ thousand cells is $20$ euros, so the statement is True.`,

    `**D.** → False

This letter is about cumulative spend under a quadrupling of volume, not about unit cost. The overview recovered $S(N)=800\\sqrt{N}$. Quadrupling volume multiplies spend by $4^{\\frac{1}{2}}=2$, exactly a doubling, not more than a doubling. From $S(100)=8000$ the spend at $400$ thousand cells is $16000$, twice.

The claim wants more than a doubling. The square-root spend law is exactly a doubling on a quadrupling of volume.

**1.** A rushed solver who multiplied the old spend $8000$ by the old unit-cost factor $2$ in the wrong direction, or who treated spend as $N\\cdot 80$ held fixed at the first unit cost, would have claimed $32000$, a quadrupling of spend, and called "more than a doubling" true. That ignores learning.

**2.** The opposite verdict would have needed leftover exponent on $S$ larger than $\\frac{1}{2}$, so that a factor of $4$ on $N$ produced more than a factor of $2$ on $S$. The recovered $b=-\\frac{1}{2}$ locks $S$ to a square root.

Quadrupling cumulative volume from $100$ to $400$ thousand cells doubles cumulative spend, so the statement is False.`,

    `**E.** → True

This is a level question early on the curve, at $25$ thousand cells. The overview recovered $A=800$ and $c(25)=160$. The claim asks whether that unit cost is still above $150$ euros.

One hundred and sixty sits above one hundred and fifty. Early on the learning curve the unit cost is still high. From $c(100)=80$, the move back to $25$ thousand is a factor of $\\frac{1}{4}$ on volume, hence a doubling of unit cost, $80\\cdot 2=160$.

**1.** A rushed solver who treated $25$ as a quarter of $100$ and halved the unit cost instead of doubling it would have claimed $40$, well below $150$, and flipped the verdict. Inverse-square-root learning raises unit cost when volume shrinks.

**2.** The opposite verdict would have needed a smaller coefficient, so that $c(25)$ fell through $150$. At the recovered $A=800$, twenty-five thousand cells is locked at $160$.

The recovered unit cost at $25$ thousand cells is $160$ euros, so the statement is True.`,
  ],

  "math-8-59": [
    `**A.** → True

This letter is about the composed map from discharge to sediment, not about velocity alone. The overview recovered $S(q)=0.625 q^{\\frac{3}{2}}$. Doubling discharge multiplies transport by $2^{\\frac{3}{2}}\\approx 2.83$, which exceeds $2$. The leftover exponent sits above one, so the statement's "more than doubles" holds.

The first stage alone, $S(v)=5v^{3}$, would have scaled an eightfold on a doubled velocity. Discharge, however, only squares into velocity through $v(q)=\\frac{1}{2}q^{\\frac{1}{2}}$, so the composed leftover is three halves, not three. Mixing the velocity doubling with the discharge doubling is how an eightfold claim appears; this letter asks about discharge.

**1.** A rushed solver who doubled $S$ with $q$ because "more flow, more sediment" would have claimed a factor of $2$ and called "more than doubles" false. That is exponent $1$.

**2.** Checking a concrete pair: at the gauged discharge $q=36$, transport is $135$. At $q=72$, the composed law gives $0.625\\cdot 72^{1.5}\\approx 382$, and $382/135\\approx 2.83$, not $2$.

Doubling the discharge more than doubles sediment transport, so the statement is True.`,

    `**B.** → True

Velocity is a square root of discharge and transport cubes velocity, so the composed exponent is $\\frac{1}{2}\\cdot 3=\\frac{3}{2}$. A product of powers of the same variable is again a power. The overview recovered $S(q)=0.625 q^{1.5}$, a monomial in $q$. Transport after both stages is a power function of discharge.

Stopping at $S(v)=5v^{3}$ would have left a cubic in velocity. Stopping at $v(q)=\\frac{1}{2}q^{\\frac{1}{2}}$ would have left a square root in discharge. Neither of those is the composed map.

**1.** A rushed solver who added the exponents instead of multiplying them would have claimed exponent $3.5$ and still called it a power, which happens to keep the verdict for the wrong algebra. Composition multiplies.

**2.** The opposite verdict would have needed a stage that was not a power. Both stages in the stem are monomials.

After both stages, transport is a power function of discharge, so the statement is True.`,

    `**C.** → True

This letter reads the named discharge $400$ against a $4500$ t/day cutoff, and it also sits on the stability limit. The overview recovered that $q=400$ already produces $S=5000$ tonnes per day, which is the channel's stability limit. Five thousand sits above four thousand five hundred.

Four hundred is the inverted limit: $0.625 q^{1.5}=5000$ forces $q^{1.5}=8000$ and $q=400$. At that discharge, $v(400)=10$ and $S=5\\cdot 10^{3}=5000$. The $4500$ cutoff is a near miss on the limit itself.

**1.** A rushed solver who evaluated $S(v)$ at $v=400$ instead of $S(q)$ at $q=400$ would have claimed $5\\cdot 400^{3}$, an enormous figure, still above $4500$ but from mixing the two stages.

**2.** The opposite verdict would have needed a smaller composed coefficient, so that $S(400)$ fell through $4500$. At the recovered law, four hundred is locked at the $5000$ t/day limit.

The recovered transport at discharge $400$ is $5000$ tonnes per day, so the statement is True.`,

    `**D.** → False

This letter is about the first-stage law $S(v)=5v^{3}$, not about the composed $S(q)$. Doubling velocity multiplies transport by $2^{3}=8$, not by $2$. The claim is a lockstep doubling of sediment with flow velocity. Cubic packing of velocity into transport forbids that.

Mixing the two stages is the mismatch. Letter A doubled discharge and got $2^{\\frac{3}{2}}$. This letter doubles velocity and gets $8$. They are different experiments.

**1.** A rushed solver who carried the composed factor $2.83$ into this letter would have still called "doubles" false, for the wrong stage. The right factor is $8$.

**2.** Checking the gauged run: at $v=3$, transport is $135$. At $v=6$, transport is $5\\cdot 216=1080$, and $1080/135=8$.

**3.** The opposite verdict would have needed first-stage exponent $1$. The stem cubes velocity.

Doubling the flow velocity multiplies sediment transport by $8$, so the statement is False.`,

    `**E.** → False

This is a level question at discharge $64$. The overview recovered $v(64)=4$ and $S=320$. The claim asks whether transport is still under $300$ tonnes per day.

Three hundred and twenty already clears three hundred. Stage by stage: $\\sqrt{64}=8$, times $\\frac{1}{2}$ is velocity $4$, and $5\\cdot 4^{3}=320$. The composed shortcut $0.625\\cdot 64^{1.5}=0.625\\cdot 512=320$ is the same number.

**1.** A rushed solver who stopped after the velocity stage would have compared $4$ m/s to $300$ t/day and missed the letter. The claim is about transport, not velocity.

**2.** Another mix-up is using the gauged $135$ t/day as if discharge $64$ were still near the gauged $q=36$. Sixty-four is already past thirty-six, and transport has risen from $135$ to $320$.

**3.** The opposite verdict would have needed a smaller coefficient, so that $S$ at $q=64$ fell through $300$. At the recovered $A=5$, sixty-four is locked at $320$.

The recovered transport at discharge $64$ is $320$ tonnes per day, so the statement is False.`,
  ],

  "math-8-60": [
    `**A.** → True

Revenue is price times quantity. With $q=A p^{-3}$ that product is $R(p)=A p^{-2}$. A product of two powers of the same variable is again a power. The overview recovered $R(p)=4000 p^{-2}$, a monomial in price. Revenue is a power function of price.

Stopping at demand would have left exponent $-3$. Multiplying by $p$ raises the exponent by one, to $-2$. Both are powers; they are different powers.

**1.** A rushed solver who thought revenue $pq$ could not stay a power because "price and quantity move against each other" would have expected a more complicated shape. Along an isoelastic curve the product remains a power.

**2.** The opposite verdict would have needed demand that was not a power, for instance a linear demand $q=a-bp$. Then $R=pq$ would be a quadratic, not a power.

Revenue is a power function of price, so the statement is True.`,

    `**B.** → True

The leftover exponent on $R(p)=4000 p^{-2}$ is negative, so $R$ falls as $p$ rises. Highly elastic demand, exponent $-3$, means a price rise cuts quantity by more than enough to shrink $pq$. Raising the price always cuts revenue along this curve.

Checking the recovered levels: at $p=2$, revenue is $1000$. At $p=2.50$, revenue is $640$. The till has already shrunk. There is no interior maximum on $p>0$; the slope $R'(p)=-8000 p^{-3}$ stays negative.

**1.** A rushed solver who remembered "raise price, raise revenue" from inelastic demand would have flipped the verdict. Elasticity $-3$ is far into the elastic region, where a price rise cuts the till.

**2.** The opposite verdict would have needed leftover exponent on $R$ to be positive, hence demand exponent greater than $-1$. The stem is $p^{-3}$.

Raising the price always cuts revenue, so the statement is True.`,

    `**C.** → True

This is a level question at $p=2.50$. The overview recovered $R(2.5)=640$. The claim asks whether that revenue is already below $700$.

Six hundred and forty sits below seven hundred. From $R(p)=4000 p^{-2}$ one has $2.5^{2}=\\frac{25}{4}$ and $4000\\cdot\\frac{4}{25}=640$. The current till at $p=2$ is $1000$; this letter is a higher price, not that current till.

**1.** A rushed solver who compared quantity $q(2.5)=4000/15.625=256$ to $700$ would have mixed units. The claim is about revenue, not about units sold.

**2.** Another mix-up is using $R(2)=1000$ against the $700$ cutoff and calling the statement false. Letter C names $2.50$, not $2$.

**3.** The opposite verdict would have needed a larger coefficient, so that $R(2.5)$ rose through $700$. At the recovered $A=4000$, two euros fifty is locked at $640$.

The recovered revenue at a price of $2.50$ is $640$, so the statement is True.`,

    `**D.** → True

A $10\\%$ price rise is the multiplier $k=1.1$. Quantity scales by $1.1^{-3}\\approx 0.751$, a cut of about $24.9\\%$, which is more than $20\\%$. The exponent $-3$ acts on the whole factor, not on a linearized $3\\times 10\\%$.

The elasticity shortcut would have predicted $-3\\times 10\\%=-30\\%$. The exact cut is a little milder, about $25\\%$, but it is still more than $20\\%$. This letter asks about the exact cut against a $20\\%$ line, not about the shortcut.

**1.** Starting from $q(2)=500$, a $10\\%$ rise to $p=2.20$ gives $q(2.2)=4000/2.2^{3}\\approx 376$, a loss of about $124$ units, which is $24.8\\%$ of $500$.

**2.** A rushed solver who used the shortcut's $30\\%$ would still have sat above $20\\%$, for a slightly wrong size. Another mix-up is applying the revenue factor $1.1^{-2}\\approx 0.826$ to quantity and claiming only a $17\\%$ cut, which would flip the letter.

**3.** The opposite verdict would have needed a demand exponent closer to zero, so that $1.1^{r}$ cut quantity by $20\\%$ or less. At $r=-3$, the exact cut is locked near $25\\%$.

A price rise of $10\\%$ cuts quantity by more than $20\\%$, so the statement is True.`,

    `**E.** → False

Elastic demand is why a price rise cuts revenue here, not why it would raise it. The overview recovered leftover exponent $-2$ on revenue, so $1.1^{-2}\\approx 0.826$, about a $17\\%$ revenue drop. Along this curve a $10\\%$ price rise shrinks the till.

The claim reverses the elasticity lesson. Highly elastic demand means quantity falls more than in proportion to the price rise, so $pq$ falls. Inelastic demand is the region where a price rise raises revenue.

**1.** Checking the recovered tills: $R(2)=1000$ becomes $R(2.2)\\approx 826$. The till is down, not up.

**2.** A rushed solver who remembered "elastic means quantity is sensitive" and then guessed "so raise price to harvest that sensitivity" would have flipped the sign of the revenue effect.

**3.** The opposite verdict would have needed leftover exponent on $R$ to be positive. The stem's demand exponent $-3$ forbids that.

Because demand is highly elastic, a price rise cuts revenue, so the statement is False.`,
  ],
};

const report = applyLetters("51_60.json", patches);
for (const row of report) {
  console.log(row.id, row.wc.join(" "));
}
const arr = JSON.parse(fs.readFileSync(new URL("./51_60.json", import.meta.url), "utf8"));
for (const t of arr) {
  for (let j = 0; j < 5; j++) {
    const text = t.tactical_explanations[j];
    if (text.includes("—") || text.includes("–") || text.includes("${")) {
      throw new Error("bad char " + t.id + " " + "ABCDE"[j]);
    }
    const want = `**${"ABCDE"[j]}.** → ${t.answer_key[j] ? "True" : "False"}`;
    if (text.split("\n")[0] !== want) throw new Error("header " + t.id);
    const close = t.answer_key[j] ? "so the statement is True." : "so the statement is False.";
    if (!text.trimEnd().endsWith(close)) throw new Error("closer " + t.id + " " + "ABCDE"[j]);
  }
}
console.log("ok", report.length, "tasks");
