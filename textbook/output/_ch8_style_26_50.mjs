/**
 * MATH 8.26–8.50 — tactical_explanations rewritten to MATH 13.18 body craft.
 * Headers, verdicts, display math and numbers preserved; prose rebuilt.
 */
export const PATCHES = [
  {
    sort_order: 26,
    tactical_explanations: [
      `**A.** → True

A tie between two scoring laws is the load at which $S(x)$ and $T(x)$ take the same value, so both laws must be calibrated from the benchmark at load $4$ before the equation can be posed.

$$a\\sqrt{4} = 16 \\;\\Rightarrow\\; a = 8, \\qquad k(4)^{1.5} = 8 \\;\\Rightarrow\\; 8k = 8 \\;\\Rightarrow\\; k = 1$$

Setting the two calibrated scores equal and cancelling the shared factor $x^{0.5}$, which is legitimate because the load is strictly positive:

$$8x^{0.5} = x^{1.5} \\quad \\Rightarrow \\quad 8 = x^{1} \\quad \\Rightarrow \\quad x = 8$$

$$S(8) = 8\\sqrt{8} \\approx 22.63, \\qquad T(8) = 8^{1.5} \\approx 22.63$$

The crossing lands on the coefficient of algorithm S only because the two exponents differ by exactly $1$, not by any general rule. Both algorithms score about $22.63$ at load $8$, so the statement is True.`,
      `**B.** → False

The number of ties is the number of positive solutions of the equality condition, so the question is about roots rather than about values.

$$8x^{0.5} = x^{1.5} \\quad \\Longleftrightarrow \\quad x^{1.5 - 0.5} = 8 \\quad \\Longleftrightarrow \\quad x = 8$$

The ratio of the two scores settles the matter across the whole domain:

$$\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}$$

One curve starting above and ending above suggests two meetings, but a strictly increasing ratio can pass through $1$ only once. There is exactly one crossing on $x>0$, so the statement is False.`,
      `**C.** → False

Which algorithm leads on a range is decided by the ratio $T/S$, which compares the two laws at every load at once.

$$\\frac{T(x)}{S(x)} = \\frac{x}{8} > 1 \\quad \\Longleftrightarrow \\quad x > 8$$

A heavier load makes the ordering concrete:

$$S(16) = 8(4) = 32, \\qquad T(16) = 16^{1.5} = 64$$

Algorithm S does lead at light loads on the strength of its coefficient $8$ against $1$, but exponent $1.5$ against $0.5$ takes over once the crossing is passed. Algorithm T leads above the crossing, so the statement is False.`,
      `**D.** → False

Load $4$ is the benchmark at which the two coefficients were calibrated, and the benchmark scores are recorded directly in the brief.

$$S(4) = 16, \\qquad T(4) = 8$$

The ratio confirms the gap:

$$\\frac{T(4)}{S(4)} = \\frac{4}{8} = 0.5$$

Calibration load and crossing load are different questions, and here they are different numbers. Algorithm S scores twice algorithm T at load $4$, so the statement is False.`,
      `**E.** → False

A constant score ratio is exactly what two power functions produce when they share an exponent and differ only by a coefficient.

$$\\frac{T(x)}{S(x)} = \\frac{x^{1.5}}{8x^{0.5}} = \\frac{x}{8}$$

Evaluating that ratio at three loads:

$$\\frac{4}{8} = 0.5, \\qquad \\frac{8}{8} = 1, \\qquad \\frac{16}{8} = 2$$

The exponents here differ by $1$, so the ratio is itself a power function rather than a constant. It quadruples across that range, so the statement is False.`,
    ],
  },
  {
    sort_order: 27,
    tactical_explanations: [
      `**A.** → True

A capacity ratio between two fleet sizes cancels the unknown coefficient, leaving only the exponent acting on the fleet multiplier.

$$\\frac{C(64)}{C(32)}=\\left(\\frac{64}{32}\\right)^{0.8}=2^{0.8}\\approx1.741$$

Set that scale factor against the threshold in the claim:

$$1.741<2$$

Reading the exponent $0.8$ as an ordinary multiplier answers a different question, since the finite scale factor is a power rather than a proportion. Capacity rises by a factor below two, so the statement is True.`,
      `**B.** → True

The percentage effect of a doubling is the scale factor minus one, so the same power of two governs it as governed the ratio above.

$$\\frac{C(2m)}{C(m)} = 2^{0.8} = e^{0.8 \\times 0.6931} \\approx e^{0.5545} \\approx 1.7411$$

Checking against the recorded fleet, with $A=80/32^{0.8}=80/16=5$:

$$C(32) = 80, \\qquad C(64) = 5 \\times 64^{0.8} \\approx 5 \\times 27.86 \\approx 139.3, \\qquad \\frac{139.3}{80} \\approx 1.74$$

The shortfall against $100\\%$ compounds rather than cancelling, since two doublings give $2^{1.6}\\approx3.03$ instead of $4$. Capacity rises by about $74\\%$, so the statement is True.`,
      `**C.** → False

The fleet at which a capacity ceiling binds is found by inverting the calibrated law, which means raising both sides to the reciprocal exponent $1.25$.

$$32^{0.8} = 2^{4} = 16 \\;\\Rightarrow\\; A = 5, \\qquad 5m^{0.8} = 500 \\;\\Rightarrow\\; m^{0.8} = 100$$

$$m = 100^{1.25} = 10^{2.5} \\approx 316.2$$

Test the fleet named in the claim:

$$C(250) = 5 \\times 250^{0.8} \\approx 5 \\times 82.4 \\approx 412 < 500$$

Rough proportion suggests a sixfold fleet for a sixfold capacity, while the sub-linear exponent demands a factor of $10^{1.25}\\approx17.8$. The ceiling binds near $316$ machines rather than $250$, so the statement is False.`,
      `**D.** → False

A fleet of $243$ machines is a fifth power, so the exponent $0.8=4/5$ resolves exactly and no rounding enters the level.

$$243^{0.8} = \\left(3^{5}\\right)^{4/5} = 3^{4} = 81$$

Apply the recovered coefficient:

$$C(243) = 5(81) = 405$$

The claimed $486$ is $6 \\times 81$, the figure a coefficient of $6$ would give, whereas the recorded fleet fixes the coefficient at $5$. Capacity is $405$ requests per second, so the statement is False.`,
      `**E.** → False

Capacity per machine is the calibrated law divided by $m$, which lowers the exponent to $0.8-1=-0.2$ and makes the quantity decreasing.

$$\\frac{C(64)/64}{C(32)/32}=2^{-0.2}\\approx0.87055$$

Convert the surviving fraction into a percentage cut:

$$(1-0.87055)\\times100\\%\\approx12.9\\%$$

A negative exponent reverses the direction of the change, and the size of the drop still comes from the full power rather than from the exponent read as a percentage. Capacity per machine falls by about $12.9\\%$, so the statement is False.`,
    ],
  },
  {
    sort_order: 28,
    tactical_explanations: [
      `**A.** → True

Break-even is the staffing level at which revenue and the wage bill coincide, so the condition is an equation between a square-root law and a linear one.

$$120\\sqrt{L} = 6L \\quad \\Rightarrow \\quad 120 = 6\\sqrt{L} \\quad \\Rightarrow \\quad \\sqrt{L} = 20$$

$$L = 400$$

Check both sides:

$$R(400) = 120(20) = 2400, \\qquad 6(400) = 2400$$

Dividing by $\\sqrt{L}$ discards the trivial root at $L=0$, where a workshop with no labour also breaks even, and keeps the meaningful one. The net gain is zero at $400$ hours, so the statement is True.`,
      `**B.** → True

The net gain at a staffing level is revenue there minus the wage bill there, both read straight off the two given laws.

$$R(100) = 120\\sqrt{100} = 120(10) = 1200, \\qquad 6(100) = 600$$

$$1200 - 600 = 600$$

This level is worth holding on to for part D, since it turns out to be the best the workshop can do rather than merely a point inside the profitable range. The net gain is $600$, so the statement is True.`,
      `**C.** → True

Beyond break-even the wage bill grows in proportion to hours while revenue grows only as a square root, so the two laws have to be evaluated separately at the staffing level in question.

$$R(900) = 120\\sqrt{900} = 120(30) = 3600, \\qquad 6(900) = 5400$$

$$3600 - 5400 = -1800$$

The gap widens with every further hour rather than stabilising, because the exponent mismatch never reverses. The net gain at $900$ hours is $-1800$, so the statement is True.`,
      `**D.** → False

Whether the net gain rises across a range is a question about its shape rather than its sign, so it has to be sampled at several staffing levels inside the range.

$$\\Pi(100) = 1200 - 600 = 600$$

$$\\Pi(225) = 120(15) - 1350 = 1800 - 1350 = 450$$

$$\\Pi(324) = 120(18) - 1944 = 2160 - 1944 = 216$$

The net gain does stay positive on the whole range, which is weaker than rising, and it turns over where revenue per hour falls to the wage of $6$. It drops from $600$ to $216$ while still inside the range, so the statement is False.`,
      `**E.** → False

Revenue per hour of labour is revenue divided by $L$, which lowers the exponent from $0.5$ to $-0.5$.

$$\\frac{R(L)}{L} = \\frac{120L^{0.5}}{L} = 120L^{-0.5}$$

Evaluate at three staffing levels:

$$\\frac{R(100)}{100} = 12, \\qquad \\frac{R(400)}{400} = 6, \\qquad \\frac{R(900)}{900} = 4$$

Constancy would require revenue proportional to hours, while this average starts above the wage of $6$, meets it at $400$ hours and drops below it thereafter. Revenue per hour falls from $12$ to $4$, so the statement is False.`,
    ],
  },
  {
    sort_order: 29,
    tactical_explanations: [
      `**A.** → True

Concentrating the order means sending all $60$ units to a single plant, so the cost is that plant's own quadratic law evaluated at the full order.

$$C_2(60) = 0.25(60)^{2} = 0.25(3600) = 900$$

The same corner at the other plant, for comparison:

$$C_1(60) = 0.5(3600) = 1800$$

Plant 2 is cheaper only in the sense of a smaller coefficient, which is not the same as being the wise place to put every unit. Concentrating in plant 2 costs $900$, so the statement is True.`,
      `**B.** → False

Ranking two splits means pricing each one through both quadratic laws and adding the two plant costs.

$$0.5(30)^{2} + 0.25(30)^{2} = 450 + 225 = 675$$

$$0.5(20)^{2} + 0.25(40)^{2} = 200 + 400 = 600$$

Symmetry would be right for identical plants, but plant 1's coefficient is twice plant 2's, so the cheaper plant should carry twice the load. The uneven split is cheaper by $75$, so the statement is False.`,
      `**C.** → False

Both cost laws carry exponent $2$, so the effect of doubling a plant's own output is the scale factor $2^{2}$.

$$\\frac{C_2(2q)}{C_2(q)} = 2^{2} = 4$$

Concrete outputs at plant 2:

$$C_2(20) = 100, \\qquad C_2(40) = 400$$

Proportional costs would send every unit to the plant with the smaller coefficient, whereas convexity is what makes running both worthwhile. Cost quadruples rather than doubling, so the statement is False.`,
      `**D.** → False

The split that sends $20$ units to plant 1 and $40$ to plant 2 is priced plant by plant, each through its own quadratic law.

$$C_1(20) = 0.5(400) = 200, \\qquad C_2(40) = 0.25(1600) = 400$$

$$200 + 400 = 600$$

Ranked against the alternatives already priced:

$$600 < 675 < 900$$

An error of $50$ here would blur that ranking, since it would make the even split at $675$ look almost as good as the best division. The split costs $600$, so the statement is False.`,
      `**E.** → False

Plant 2's cost per unit is its cost law divided by its own output, which lowers the exponent from $2$ to $1$.

$$\\frac{C_2(q)}{q} = \\frac{0.25q^{2}}{q} = 0.25q$$

Evaluate at three output levels:

$$\\frac{C_2(20)}{20} = 5, \\qquad \\frac{C_2(40)}{40} = 10, \\qquad \\frac{C_2(60)}{60} = 15$$

A constant unit cost would require exponent $1$ and would remove the trade-off that makes a split optimal. Unit cost triples across that range, so the statement is False.`,
    ],
  },
  {
    sort_order: 30,
    tactical_explanations: [
      `**A.** → True

Two measurements determine a power law because their ratio cancels the coefficient and leaves an equation in the exponent alone.

$$\\frac{A(16)^{r}}{A(4)^{r}} = \\frac{192}{24} \\quad \\Rightarrow \\quad \\left(\\frac{16}{4}\\right)^{r} = 8$$

Solve the resulting equation:

$$4^{r} = 8 \\quad \\Rightarrow \\quad 2^{2r} = 2^{3} \\quad \\Rightarrow \\quad r = 1.5$$

Both ratios here are whole numbers, $16/4=4$ and $192/24=8$, so the exponent resolves without logarithms. The exponent is exactly $1.5$, so the statement is True.`,
      `**B.** → True

With the exponent fixed, the coefficient follows from either measurement by dividing the response by its shape factor.

$$A(4)^{1.5} = 24 \\quad \\Rightarrow \\quad 8A = 24 \\quad \\Rightarrow \\quad A = 3$$

Confirm with the second measurement:

$$\\frac{192}{16^{1.5}} = \\frac{192}{64} = 3$$

$$y = 3x^{1.5}$$

A wrong exponent would give two different coefficients, so agreement between the measurements is a genuine check rather than a repetition. Both give $A=3$, so the statement is True.`,
      `**C.** → False

The measurement at $x=9$ was held out of the fit, which makes it a test of the model rather than part of its construction.

$$9^{1.5} = \\left(9^{1/2}\\right)^{3} = 3^{3} = 27$$

$$y = 3(27) = 81$$

Compare with the recorded value:

$$81 = 81$$

A two-point fit always passes through its own two points, so agreement at an independent third point is evidence rather than arithmetic. The measurement sits on the curve, so the statement is False.`,
      `**D.** → False

A prediction at $x=25$ uses the fitted law, and $25$ is a perfect square, so the shape factor resolves by taking the square root and then cubing.

$$25^{1.5} = \\left(25^{1/2}\\right)^{3} = 5^{3} = 125$$

Apply the coefficient:

$$y = 3(125) = 375$$

Reading the shape factor as $100$ rather than $125$ is what produces the claimed figure, and the exact route leaves no room for that. The prediction is $375$, so the statement is False.`,
      `**E.** → False

Uniqueness of the fit is settled by the ratio equation, since $4^{r}$ is strictly increasing in $r$ and can equal $8$ only once.

$$\\left(\\frac{16}{4}\\right)^{2} = 16 \\ne 8$$

Force the coefficient from the first point and test the second:

$$A = \\frac{24}{16} = 1.5, \\qquad 1.5(16)^{2} = 384 \\ne 192$$

An exponent of $2$ would demand a response ratio of $16$ where $8$ was observed, so no freedom remains once the ratio is fixed. The rejected exponent misses the second measurement by a factor of two, so the statement is False.`,
    ],
  },
  {
    sort_order: 31,
    tactical_explanations: [
      `**A.** → True

Inverse demand is the same curve with price as the subject, and inverting a power function replaces its exponent by the reciprocal and raises its coefficient to that same reciprocal power.

$$A(5)^{-2} = 100 \\quad \\Rightarrow \\quad \\frac{A}{25} = 100 \\quad \\Rightarrow \\quad A = 2500$$

$$q = \\frac{2500}{p^{2}} \\quad \\Rightarrow \\quad p^{2} = \\frac{2500}{q} \\quad \\Rightarrow \\quad p = \\frac{50}{\\sqrt{q}} = 50q^{-0.5}$$

Check the observed pair:

$$p(100) = \\frac{50}{10} = 5 \\;\\checkmark$$

Carrying the coefficient through unchanged, rather than as $2500^{1/2}$, would give a curve that misses every observed point. The inverse curve is $50q^{-0.5}$, so the statement is True.`,
      `**B.** → True

Revenue expressed through quantity is quantity times inverse demand, so the exponents add rather than being carried over unchanged.

$$p(q)=50q^{-0.5}$$

$$R(q)=qp(q)=q\\left(50q^{-0.5}\\right)=50q^{0.5}$$

Multiplying by $q$ raises the exponent by one, taking $-0.5$ to $0.5$ and turning a falling curve into a rising one. The revenue law is $50q^{0.5}$, so the statement is True.`,
      `**C.** → True

The percentage effect of a doubling comes from the scale factor of the revenue law, whose exponent is one half.

$$\\frac{R(2q)}{R(q)}=2^{0.5}=\\sqrt{2}\\approx1.414$$

$$(1.414-1)\\times100\\%\\approx41.4\\%$$

The exponent is not itself the percentage response, since a finite change is the full power minus one. Revenue rises by about $41.4\\%$, so the statement is True.`,
      `**D.** → False

Revenue at a stated quantity has to be built from the price that clears that quantity, which the inverse curve supplies.

$$p(25)=50(25)^{-0.5}=\\frac{50}{5}=10$$

$$R(25)=25p(25)=25(10)=250$$

Reusing the observed price of $5$ would price a different point on the curve, not this one. Revenue is $250$, so the statement is False.`,
      `**E.** → False

Price elasticity of demand measures the percentage response of quantity to price, so it is read from $q(p)$ and equals that curve's own exponent.

$$q(p) = 2500p^{-2} \\quad \\Rightarrow \\quad \\text{El}_{p}q = -2$$

Contrast with the inverse curve:

$$p(q) = 50q^{-0.5} \\quad \\Rightarrow \\quad \\text{El}_{q}p = -0.5 = \\frac{1}{-2}$$

Test with a one percent price rise:

$$1.01^{-2} \\approx 0.9803 \\quad \\Rightarrow \\quad \\text{about } -2\\%$$

The two numbers are reciprocals because inverting a power function inverts its exponent, and $-0.5$ belongs to the other direction. The elasticity is $-2$, so the statement is False.`,
    ],
  },
  {
    sort_order: 32,
    tactical_explanations: [
      `**A.** → True

The recorded $60$ units is a change in output between two labour levels, so the model has to be evaluated at both and differenced.

$$Y(100)-Y(25)=A\\sqrt{100}-A\\sqrt{25}=60$$

$$A(10-5)=60 \\quad \\Rightarrow \\quad A=12, \\qquad Y(L)=12\\sqrt{L}$$

Substituting only $L=100$ would convert a difference observation into a level observation and return a coefficient of $6$. The recovered technology is $Y(L)=12\\sqrt{L}$, so the statement is True.`,
      `**B.** → True

The comparison is between a square-root output law and a linear benchmark evaluated at the same labour input.

$$Y(64)=12\\sqrt{64}=12(8)=96$$

$$W(64)=0.75(64)=48, \\qquad Y(64)-W(64)=96-48=48$$

Comparing the coefficients $12$ and $0.75$ alone would ignore that one law grows with $\\sqrt{L}$ and the other with $L$. Output exceeds the benchmark by $48$ units at $64$ hours, so the statement is True.`,
      `**C.** → True

Average product is output divided by labour, so its exponent is $0.5-1=-0.5$ and the derived law has to be built before any level is read off.

$$\\operatorname{AP}(L)=\\frac{Y(L)}{L} =\\frac{12L^{0.5}}{L}=12L^{-0.5}$$

$$\\operatorname{AP}(225)=\\frac{12}{\\sqrt{225}} =\\frac{12}{15}=0.8$$

Total output at that labour level is $180$, a different quantity that still has to be divided by the hours. Average product is $0.8$ unit per labour hour, so the statement is True.`,
      `**D.** → True

Running the technology backwards means solving the output law for labour, and a square-root law inverts by squaring.

$$12\\sqrt L=180 \\quad \\Rightarrow \\quad \\sqrt L=15$$

$$L=15^2=225, \\qquad Y(225)=12(15)=180$$

Scaling labour in the same proportion as output would ignore that the inverse exponent is $2$ rather than $1$. The inversion and the direct check both give $225$ labour hours, so the statement is True.`,
      `**E.** → True

Output carries exponent $0.5$ while average product carries $-0.5$, so one labour multiplier acts on the two quantities in opposite directions.

$$\\frac{Y(2.25L)}{Y(L)}=(2.25)^{0.5}=1.5$$

$$\\frac{\\operatorname{AP}(2.25L)}{\\operatorname{AP}(L)} =(2.25)^{-0.5}=\\frac{1}{1.5}=\\frac{2}{3}$$

Rising total output does not carry average product with it, because dividing by labour flips the sign of the exponent. Both multipliers in the claim are exact, so the statement is True.`,
    ],
  },
  {
    sort_order: 33,
    tactical_explanations: [
      `**A.** → True

Profit mixes $\\sqrt{q}$ with $q$ and a constant, so the substitution $s=\\sqrt{q}$ turns the break-even condition into a quadratic.

$$60s - 2s^{2} - 400 = 0 \\quad \\Rightarrow \\quad s^{2} - 30s + 200 = 0$$

$$(s-10)(s-20) = 0 \\quad \\Rightarrow \\quad s = 10 \\text{ or } s = 20$$

Square back to output:

$$q = 100 \\quad \\text{or} \\quad q = 400$$

Check one of them:

$$\\Pi(400) = 60(20) - 800 - 400 = 0 \\;\\checkmark$$

Two roots rather than one is what a fixed charge produces, since output must be large enough to cover it yet small enough that linear variable cost has not overtaken square-root revenue. Both break-even points are as claimed, so the statement is True.`,
      `**B.** → False

Profit at a stated output is revenue minus variable cost minus the fixed charge, each evaluated at that output.

$$R(25) = 60(5) = 300, \\qquad 2(25) = 50, \\qquad \\text{fixed } 400$$

$$\\Pi(25) = 300 - 50 - 400 = -150$$

Small outputs are where the fixed charge weighs most heavily against square-root revenue, which is why profit turns positive only past $100$ units. Profit is negative at $25$ units, so the statement is False.`,
      `**C.** → False

An output of $500$ units lies beyond the upper break-even point, so revenue and cost have to be compared there rather than assumed.

$$R(500) = 60\\sqrt{500} \\approx 60 \\times 22.3607 \\approx 1341.6$$

$$2(500) + 400 = 1400$$

$$\\Pi(500) \\approx 1341.6 - 1400 \\approx -58.4$$

The margin is thin enough to need the arithmetic, since $500$ is only a quarter above the output where profit was exactly zero. Profit is about $-58$, so the statement is False.`,
      `**D.** → False

Whether profit rises on the profitable range is a question about shape, and in the variable $s=\\sqrt{q}$ profit is $-2(s-10)(s-20)$, an inverted parabola.

$$\\Pi(144) = 60(12) - 288 - 400 = 32$$

$$\\Pi(225) = 60(15) - 450 - 400 = 50$$

$$\\Pi(324) = 60(18) - 648 - 400 = 32$$

Positive throughout an interval is weaker than rising throughout it, and the peak at $s=15$, that is $q=225$, sits inside the interval. Profit climbs to $50$ and falls back, so the statement is False.`,
      `**E.** → False

Proportionality would require revenue's exponent to be $1$, whereas that exponent is $0.5$ and only the variable cost is genuinely proportional.

$$\\frac{R(2q)}{R(q)} = 2^{0.5} \\approx 1.414, \\qquad \\frac{2(2q)}{2q} = 2$$

Check with levels:

$$R(100) = 600, \\qquad R(200) \\approx 848.5, \\qquad R(400) = 1200$$

That mismatch is what creates the upper break-even point, since proportional revenue would settle the comparison once and for all by coefficients. Quadrupling output only doubles revenue, so the statement is False.`,
    ],
  },
  {
    sort_order: 34,
    tactical_explanations: [
      `**A.** → True

Benefit and cost are equal where the two curves meet, and since both carry a factor $x^{0.5}$ on a strictly positive domain, that shared power can be cancelled.

$$40x^{0.5} = 0.5x^{1.5} \\quad \\Rightarrow \\quad 40 = 0.5x^{1}$$

$$x = 80$$

Confirm the shared value:

$$B(80) = 40\\sqrt{80} \\approx 357.8, \\qquad C(80) = 0.5(80)^{1.5} \\approx 357.8$$

The exponents differ by exactly $1$, which is why what remains is linear in $x$ rather than another power equation. Both sides are about $357.8$ million at scale $80$, so the statement is True.`,
      `**B.** → True

The ordering of two power functions across a whole range is carried by their ratio, which here is itself a power function.

$$\\frac{C(x)}{B(x)} = \\frac{0.5x^{1.5}}{40x^{0.5}} = \\frac{x}{80}$$

Read off the comparison:

$$\\frac{x}{80} > 1 \\quad \\Longleftrightarrow \\quad x > 80$$

Test a larger programme:

$$B(100) = 400, \\qquad C(100) = 0.5(1000) = 500$$

A single test value could not settle a whole range, while a strictly increasing ratio passes through $1$ once and never returns. Cost exceeds benefit beyond the crossing, so the statement is True.`,
      `**C.** → False

The largest net benefit is a question about the difference $B-C$ rather than about where the two curves meet, so that difference has to be sampled across scales.

$$N(16) = 160 - 32 = 128$$

$$N(27) = 40(5.196) - 0.5(140.3) \\approx 207.8 - 70.1 \\approx 137.7$$

$$N(40) \\approx 252.98 - 126.49 \\approx 126.5$$

Compare with the crossing:

$$N(80) = 0$$

Break-even is where the surplus has been fully eroded, not where it is largest. The net benefit peaks near $x=27$ and is zero at $x=80$, so the statement is False.`,
      `**D.** → False

Doubling acts on each curve through its own exponent, so the two scale factors are $2^{0.5}$ and $2^{1.5}$ rather than a common factor of $2$.

$$\\frac{B(2x)}{B(x)} = 2^{0.5} \\approx 1.4142, \\qquad \\frac{C(2x)}{C(x)} = 2^{1.5} \\approx 2.8284$$

Check between two scales:

$$B(40) \\approx 253.0, \\quad B(80) \\approx 357.8; \\qquad C(40) \\approx 126.5, \\quad C(80) \\approx 357.8$$

Cost grows twice as fast as benefit in proportional terms, which is what guarantees the surplus is exhausted at some finite scale. Neither curve doubles, so the statement is False.`,
      `**E.** → False

At small scales a square root rises steeply from zero while $x^{1.5}$ starts almost flat, so the two curves have to be evaluated rather than ordered by habit.

$$B(16) = 40\\sqrt{16} = 40(4) = 160$$

$$C(16) = 0.5(16)^{1.5} = 0.5(64) = 32$$

Compare through the ratio:

$$\\frac{C(16)}{B(16)} = \\frac{32}{160} = 0.2 = \\frac{16}{80}$$

The ordering that holds beyond the crossing does not extend backwards through it. Benefit is five times cost at that scale, so the statement is False.`,
    ],
  },
  {
    sort_order: 35,
    tactical_explanations: [
      `**A.** → True

Two logged runs fix the exponent through their ratio, which cancels the coefficient and leaves a pure power equation.

$$\\left(\\frac{27}{8}\\right)^{r} = \\frac{45}{20} = 2.25$$

Write both sides as powers of $3/2$:

$$\\left(\\left(\\tfrac{3}{2}\\right)^{3}\\right)^{r} = \\left(\\tfrac{3}{2}\\right)^{2} \\quad \\Rightarrow \\quad 3r = 2 \\quad \\Rightarrow \\quad r = \\frac{2}{3}$$

Check with logarithms:

$$r = \\frac{\\ln 2.25}{\\ln 3.375} = \\frac{0.8109}{1.2164} \\approx 0.6667$$

Matching exponents is exact where the logarithmic route only approximates, and both feed sizes cooperate because $27/8$ is a perfect cube ratio. The exponent is $2/3$, so the statement is True.`,
      `**B.** → True

With the exponent known, the coefficient is a logged throughput divided by its shape factor, and each cube resolves exactly.

$$8^{2/3} = \\left(8^{1/3}\\right)^{2} = 2^{2} = 4, \\qquad 4A = 20 \\;\\Rightarrow\\; A = 5$$

Confirm with the second run:

$$27^{2/3} = 3^{2} = 9, \\qquad \\frac{45}{9} = 5$$

$$T(g) = 5g^{2/3}$$

Two runs returning the same coefficient is a check on the exponent as well, since a wrong exponent would split them. The coefficient is $5$, so the statement is True.`,
      `**C.** → True

A licensed ceiling on throughput is inverted into a gas feed by raising both sides to the reciprocal exponent $3/2$.

$$5g^{2/3} = 80 \\quad \\Rightarrow \\quad g^{2/3} = 16$$

$$g = 16^{3/2} = \\left(16^{1/2}\\right)^{3} = 4^{3} = 64$$

Confirm by substitution:

$$T(64) = 5 \\times 64^{2/3} = 5(16) = 80$$

Estimating the feed by proportion would badly understate it, since throughput rises fourfold while the feed rises eightfold. The ceiling binds at a feed of $64$, so the statement is True.`,
      `**D.** → False

Doubling the feed acts through the exponent $2/3$, so the throughput multiplier is a power of two rather than two itself.

$$\\frac{T(2g)}{T(g)} = 2^{2/3} \\approx 1.5874$$

Find the feed multiple that really doubles throughput:

$$k^{2/3} = 2 \\quad \\Rightarrow \\quad k = 2^{3/2} \\approx 2.83$$

Check with logged values:

$$T(8) = 20, \\qquad T(16) = 5 \\times 16^{2/3} \\approx 5 \\times 6.35 \\approx 31.7$$

An exponent below one always means the input grows faster than the output, here by nearly three times the gas for a doubling. Throughput rises by about $59\\%$, so the statement is False.`,
      `**E.** → False

Throughput per cubic metre is the calibrated law divided by the feed, which lowers the exponent to $2/3-1=-1/3$.

$$\\frac{T(g)}{g} = \\frac{5g^{2/3}}{g} = 5g^{-1/3}$$

Evaluate at the three feeds in play:

$$\\frac{20}{8} = 2.5, \\qquad \\frac{45}{27} \\approx 1.67, \\qquad \\frac{80}{64} = 1.25$$

Total throughput and gas efficiency move in opposite directions once the exponent falls below one, so the licensed maximum is the least efficient operating point. Efficiency halves across that range, so the statement is False.`,
    ],
  },
  {
    sort_order: 36,
    tactical_explanations: [
      `**A.** → True

The tapered geometry fixes the exponent at $2$, so a single survey reading is enough to determine the coefficient.

$$4^{2} = 16, \\qquad 16A = 48 \\quad \\Rightarrow \\quad A = 3$$

$$V(d) = 3d^{2}$$

Check the survey:

$$V(4) = 3(16) = 48 \\;\\checkmark$$

Vertical walls would store volume proportional to depth, while sloping walls widen the surface as the water rises and load that geometry into the coefficient. The coefficient is $3$, so the statement is True.`,
      `**B.** → True

Extrapolating the calibrated law to a deeper fill squares the depth, either directly or through the ratio against the survey.

$$V(10) = 3(10)^{2} = 3(100) = 300$$

Confirm with the scale factor from the survey:

$$\\left(\\frac{10}{4}\\right)^{2} = 6.25, \\qquad 48 \\times 6.25 = 300$$

Depth rises by a factor of $2.5$ while stored volume rises by $6.25$, since it is the ratio that gets squared rather than the difference. The basin holds $300$ cubic metres, so the statement is True.`,
      `**C.** → True

Equal depth intervals need not add equal volumes under a squared law, so each increment has to be computed from the calibrated model.

$$V(9)-V(7)=3(9^2-7^2)=3(32)=96$$

$$\\frac{V(9)-V(7)}{V(7)-V(5)}=\\frac{96}{3(49-25)}=\\frac{96}{72}=\\frac{4}{3}$$

The exponent governs the ratio of increments rather than a constant addition per metre. The later two-metre rise adds exactly four thirds as much volume, so the statement is True.`,
      `**D.** → True

Inverting a squared law means taking a square root, so a target volume converts into a depth once the coefficient is divided out.

$$3d^{2} = 675 \\quad \\Rightarrow \\quad d^{2} = 225 \\quad \\Rightarrow \\quad d = 15$$

Confirm by substitution:

$$V(15) = 3(225) = 675 \\;\\checkmark$$

Square roots compress large differences, so a target more than fourteen times the surveyed volume needs a depth only $3.75$ times as great. The depth is $15$ metres, so the statement is True.`,
      `**E.** → True

Stored volume per metre of depth is the storage law divided by $d$, which lowers the exponent from $2$ to $1$.

$$\\frac{V(d)}{d} = \\frac{3d^{2}}{d} = 3d$$

Evaluate at three depths:

$$\\frac{V(4)}{4} = 12, \\qquad \\frac{V(10)}{10} = 30, \\qquad \\frac{V(15)}{15} = 45$$

Dividing by the input lowers the exponent without turning the quantity around while it stays positive, which is the arithmetic counterpart of the taper. Volume per metre rises steadily, so the statement is True.`,
    ],
  },
  {
    sort_order: 37,
    tactical_explanations: [
      `**A.** → True

The report records a change in the index between two test speeds, so the coefficient multiplies the difference of the two shape factors.

$$40^{2} = 1600, \\qquad 60^{2} = 3600$$

Translate the recorded rise:

$$A(3600 - 1600) = 100 \\quad \\Rightarrow \\quad 2000A = 100 \\quad \\Rightarrow \\quad A = 0.05$$

$$E(v) = 0.05v^{2}$$

Dividing $100$ by either speed squared alone would treat a difference as a level and return a coefficient several times too small. The coefficient is $0.05$, so the statement is True.`,
      `**B.** → True

A level at the upper test speed is the calibrated law evaluated there, with the shape factor already in hand.

$$E(60) = 0.05(3600) = 180$$

Evaluate at the lower speed and difference them:

$$E(40) = 0.05(1600) = 80, \\qquad 180 - 80 = 100 \\;\\checkmark$$

Reproducing the recorded $100$-point rise is the test any candidate coefficient must pass. The index reads $180$ at $60$ km/h, so the statement is True.`,
      `**C.** → True

A percentage change under a square law comes from squaring the speed ratio, here $90/72=1.25$, and subtracting one.

$$\\frac{E(90)}{E(72)}=\\left(\\frac{90}{72}\\right)^2=1.25^2=1.5625$$

$$(1.5625-1)\\times100\\%=56.25\\%$$

The exponent scales the ratio multiplicatively rather than adding a percentage of its own. The index rises by exactly $56.25\\%$, so the statement is True.`,
      `**D.** → True

Motorway speed is another level of the calibrated index, and the same equation read backwards recovers the speed from a reading.

$$E(100) = 0.05(100)^{2} = 0.05(10000) = 500$$

Confirm by inversion:

$$0.05v^{2} = 500 \\;\\Rightarrow\\; v^{2} = 10000 \\;\\Rightarrow\\; v = 100$$

Speed enters squared, so $2.5$ times the lower test speed produces $6.25$ times the braking energy rather than $2.5$ times. The index reaches $500$ at $100$ km/h, so the statement is True.`,
      `**E.** → True

Converting an index reading back into a speed inverts the calibrated square law, dividing by the coefficient and then taking a square root.

$$0.05v^2=320 \\quad \\Rightarrow \\quad v^2=6400$$

$$v=\\sqrt{6400}=80$$

Only the positive root is admissible, since speed is positive throughout this model. The reading of $320$ corresponds to $80$ km/h, so the statement is True.`,
    ],
  },
  {
    sort_order: 38,
    tactical_explanations: [
      `**A.** → True

Steel and capacity are separate laws sharing one variable, so a capacity target has to be inverted into a height before the steel law can be applied.

$$\\frac{h^3}{3}=192 \\quad \\Rightarrow \\quad h=\\sqrt[3]{576}\\approx8.32$$

$$S(h)=3h^2\\approx3(8.32)^2\\approx207.7$$

Going straight from capacity to steel by proportion would skip the change of exponent from $3$ to $2$. The target silo needs about $208$ square metres of steel, so the statement is True.`,
      `**B.** → True

A steel threshold is a condition on the surface law, and the inequality survives the square root because height is positive.

$$3h^2>200 \\quad \\Rightarrow \\quad h^2>\\frac{200}{3}$$

$$h>\\sqrt{\\frac{200}{3}}\\approx8.165$$

A positive exponent preserves the direction of the inequality rather than reversing it. Steel use exceeds $200$ square metres beyond about $8.16$ metres, so the statement is True.`,
      `**C.** → True

A fifty percent height increase is a multiplier of $1.5$ acting through the surface exponent of $2$.

$$\\frac{S(1.5h)}{S(h)}=1.5^2=2.25$$

$$(2.25-1)\\times100\\%=125\\%$$

The percentage rise is the squared multiplier minus one, not the height increase carried over unchanged. Steel use rises by exactly $125\\%$, so the statement is True.`,
      `**D.** → True

Steel per cubic metre of capacity is the ratio of the two calibrated laws, whose exponents differ by exactly one.

$$\\frac{S(h)}{V(h)} = \\frac{3h^{2}}{h^{3}/3} = \\frac{9h^{2}}{h^{3}} = \\frac{9}{h}$$

Evaluate at three heights:

$$\\frac{9}{6} = 1.5, \\qquad \\frac{9}{9} = 1, \\qquad \\frac{9}{12} = 0.75$$

The result depends only on the exponents $2$ and $3$, not on the particular coefficients, which is why large tanks are always cheaper per unit stored. Steel per cubic metre halves between six and twelve metres, so the statement is True.`,
      `**E.** → False

The steel law has exponent $2$, so a height multiplier enters squared.

$$\\frac{S(2h)}{S(h)} = 2^{2} = 4$$

Check with concrete silos:

$$S(6) = 108, \\qquad S(12) = 3(144) = 432, \\qquad \\frac{432}{108} = 4$$

Doubling would require exponent $1$, which no surface law has, and would also break the square-cube comparison of the previous part. Steel quadruples, so the statement is False.`,
    ],
  },
  {
    sort_order: 39,
    tactical_explanations: [
      `**A.** → True

The added $60$ hours is the difference between two inspection times, so both square-root factors enter the calibration.

$$T(225)-T(25)=A(\\sqrt{225}-\\sqrt{25})=60$$

$$A(15-5)=60 \\quad \\Rightarrow \\quad A=6, \\qquad T(n)=6\\sqrt n$$

Attaching the $60$ hours to the larger consignment alone would ignore the time already required at $25$ shipments. The difference calibration gives $T(n)=6\\sqrt{n}$, so the statement is True.`,
      `**B.** → True

An hours ceiling becomes a shipment ceiling by inverting an increasing law, so the boundary is where the available hours are exactly used.

$$6\\sqrt n\\le90 \\quad \\Rightarrow \\quad \\sqrt n\\le15$$

$$n\\le15^2=225, \\qquad T(225)=6(15)=90$$

The intermediate $15$ is $\\sqrt{n}$ rather than $n$, so the squaring step cannot be skipped. The ceiling covers at most $225$ shipments and the boundary is attainable, so the statement is True.`,
      `**C.** → True

For a square-root law a consignment multiplier $k$ acts on total time as $\\sqrt{k}$, and both the coefficient and the starting size cancel.

$$\\frac{T(2.25n)}{T(n)} =\\frac{6(2.25n)^{0.5}}{6n^{0.5}} =(2.25)^{0.5}$$

$$(2.25)^{0.5}=\\sqrt{\\frac94}=\\frac32=1.5$$

Using $2.25$ itself as the time multiplier would impose exponent $1$ in place of the stated $0.5$. The inspection-time multiplier is exactly $1.5$, so the statement is True.`,
      `**D.** → True

Time per shipment is total time divided by the shipment count, which lowers the exponent to $-0.5$.

$$\\frac{T(n)}{n}=\\frac{6n^{0.5}}{n}=6n^{-0.5}$$

$$\\frac{T(144)}{144} =\\frac{6}{\\sqrt{144}} =\\frac{6}{12}=0.5$$

The total of $72$ hours is a different quantity from the average, and the square-root factor has to be retained when dividing. Time per shipment is exactly $0.5$ hour at $144$ shipments, so the statement is True.`,
      `**E.** → False

Proportionality requires exponent $1$ and therefore a constant time per shipment, which is stronger than the two quantities merely rising together.

$$\\frac{T(kn)}{T(n)}=k^{0.5}\\ne k \\quad \\text{for } k\\ne1$$

$$\\frac{T(225)}{225}=\\frac{90}{225}=0.4, \\qquad \\frac{T(25)}{25}=\\frac{30}{25}=1.2$$

Total time and shipment count do move together, but not in a constant ratio. The per-shipment rate is not constant, so the statement is False.`,
    ],
  },
  {
    sort_order: 40,
    tactical_explanations: [
      `**A.** → True

The inverse-square form fixes the exponent at $-2$, so the meter reading at two metres is all that is needed to pin the coefficient.

$$A(2)^{-2} = 300 \\quad \\Rightarrow \\quad \\frac{A}{4} = 300 \\quad \\Rightarrow \\quad A = 1200$$

$$I(d) = \\frac{1200}{d^{2}}$$

Evaluate at four metres:

$$I(4) = \\frac{1200}{16} = 75$$

A negative exponent divides by the shape factor rather than multiplying by it, which is why the reading falls with distance. The illuminance is $75$ lux, so the statement is True.`,
      `**B.** → True

A scale factor depends only on the exponent, so doubling the distance acts through $2^{-2}$ wherever along the gallery it happens.

$$\\frac{I(2d)}{I(d)} = \\frac{A(2d)^{-2}}{Ad^{-2}} = 2^{-2} = \\frac{1}{4}$$

Check two separate doublings:

$$I(2) = 300, \\; I(4) = 75; \\qquad I(5) = 48, \\; I(10) = 12$$

The first pair is one instance of the rule and the second shows it is not tied to the metered distance. Both fall to a quarter, so the statement is True.`,
      `**C.** → True

A reading expressed as a fraction of the two-metre value is a ratio, so the coefficient cancels and only the distance multiplier matters.

$$\\frac{I(d)}{I(2)}=\\left(\\frac{d}{2}\\right)^{-2}=\\frac{1}{9}$$

$$\\left(\\frac{d}{2}\\right)^2=9 \\quad \\Rightarrow \\quad d=6$$

The negative exponent inverts the ratio, so a ninth of the light corresponds to three times the distance rather than a ninth of it. At six metres the reading is exactly one ninth of the two-metre value, so the statement is True.`,
      `**D.** → True

Moving closer is the same rule with a multiplier below one, and a negative exponent inverts before squaring.

$$\\frac{I(d/2)}{I(d)} = \\left(\\frac{1}{2}\\right)^{-2} = 4$$

Check on the metered distance:

$$I(2) = 300, \\qquad I(1) = \\frac{1200}{1} = 1200$$

Reading the multiplier as $1/4$ would apply the rule in the wrong direction, whereas approaching gains exactly what retreating loses. Illuminance quadruples, so the statement is True.`,
      `**E.** → True

The direction of a power law is settled by the sign of its exponent together with the sign of its coefficient.

$$I(d) = 1200\\,d^{-2}, \\qquad A > 0, \\quad r = -2 < 0$$

Trace the readings down the gallery:

$$I(1) = 1200, \\quad I(2) = 300, \\quad I(4) = 75, \\quad I(10) = 12$$

The decline is also decelerating, so most of the light is lost in the first few metres rather than spread evenly along the gallery. Illuminance falls monotonically with distance, so the statement is True.`,
    ],
  },
  {
    sort_order: 41,
    tactical_explanations: [
      `**A.** → True

Since $0.75=3/4$ and both engagement sizes are fourth powers, the shape factors resolve exactly, and the recorded rise is a difference of two bills.

$$C(81)-C(16)=A(27-8)=1900$$

$$19A=1900 \\quad \\Rightarrow \\quad A=100, \\qquad C(n)=100n^{0.75}$$

Setting $A \\cdot 81^{0.75}=1900$ would treat a jump between two bills as a single bill. The recovered schedule is $C(n)=100n^{0.75}$, so the statement is True.`,
      `**B.** → True

A spending cap becomes an account ceiling because the schedule is increasing, and inverting it means raising both sides to the power $4/3$.

$$100n^{3/4}\\le2700 \\quad \\Rightarrow \\quad n^{3/4}\\le27$$

$$n\\le27^{4/3}=(\\sqrt[3]{27})^4=3^4=81$$

Stopping at $27$ would report the value of $n^{3/4}$ rather than the account count itself. The endpoint costs exactly $2700$ and the cap therefore covers at most $81$ accounts, so the statement is True.`,
      `**C.** → True

A tie with a linear rival is an equation between exponents $3/4$ and $1$, and dividing by $50n^{3/4}$ on the positive domain leaves a power of $n^{1/4}$.

$$100n^{3/4}=50n \\quad \\Rightarrow \\quad 2=n^{1/4} \\quad \\Rightarrow \\quad n=16$$

$$\\frac{C(n)}{R(n)} =\\frac{100n^{3/4}}{50n} =2n^{-1/4}<1 \\quad \\text{when } n>16$$

Comparing the coefficients $100$ and $50$ alone would ignore that the rival carries the larger exponent. The firms tie at $16$ accounts and the practice is cheaper beyond, so the statement is True.`,
      `**D.** → True

Inverting the schedule for a target bill uses the reciprocal exponent $4/3$, and the intermediate value is a perfect cube.

$$100n^{3/4}=12500 \\quad \\Rightarrow \\quad n^{3/4}=125=5^3$$

$$n=125^{4/3}=(5^3)^{4/3}=5^4=625$$

Applying $3/4$ again in place of its reciprocal would run the schedule forwards rather than backwards. A direct check gives $100(625^{3/4})=100(125)=12500$, so the statement is True.`,
      `**E.** → False

Doubling the accounts acts through the exponent as $2^{3/4}$, a multiplicative scaling rather than an added percentage.

$$\\frac{C(2n)}{C(n)}=2^{3/4}\\approx1.6818$$

$$\\frac{C(2n)-C(n)}{C(n)} =2^{3/4}-1 \\approx0.6818=68.18\\%$$

Reading the exponent $0.75$ as the percentage response confuses a power with a proportion. Doubling raises the bill by about $68\\%$ rather than exactly $75\\%$, so the statement is False.`,
    ],
  },
  {
    sort_order: 42,
    tactical_explanations: [
      `**A.** → True

The monitors record a gap between two concentrations, so the coefficient multiplies the difference of two shape factors with exponent $-3/2$.

$$c(4)-c(16) =A\\left(4^{-3/2}-16^{-3/2}\\right) =A\\left(\\frac18-\\frac1{64}\\right)$$

$$A\\frac7{64}=43.75=\\frac{175}{4} \\quad \\Rightarrow \\quad A=400$$

Treating $43.75$ as either monitor's own reading would calibrate the law to a level it never recorded. The concentration law is $c(x)=400x^{-1.5}$, so the statement is True.`,
      `**B.** → True

Because the exponent is negative and the coefficient positive, concentration falls with distance, so a boundary distance separates the two sides of the ceiling.

$$400x^{-3/2}=6.25 \\quad \\Rightarrow \\quad x^{3/2}=\\frac{400}{6.25}=64$$

$$x=64^{2/3}=(\\sqrt[3]{64})^2=4^2=16, \\qquad c(x)\\le6.25 \\Longleftrightarrow x\\ge16$$

A decreasing function flips the direction of the inequality when it is carried from concentrations over to distances. Both the threshold and the direction match the claim, so the statement is True.`,
      `**C.** → True

Halving the distance is a multiplier of $1/2$ raised to the exponent $-1.5$, which inverts it and then applies the three-halves power.

$$\\frac{c(x/2)}{c(x)} =\\left(\\frac12\\right)^{-1.5} =2^{1.5}$$

$$2^{1.5}=2^{3/2}=\\sqrt{2^3}=2\\sqrt2\\approx2.828$$

A mere doubling would correspond to exponent $-1$, one half step away from the law in force here. Halving distance multiplies concentration by exactly $2\\sqrt{2}$, so the statement is True.`,
      `**D.** → True

A level at $100$ metres needs the shape factor $100^{1.5}$, which resolves by taking the square root first and then cubing.

$$100^{1.5}=100^{3/2}=(\\sqrt{100})^3=10^3=1000$$

$$c(100)=400(100)^{-1.5} =\\frac{400}{1000}=0.4$$

The exponent $1.5$ is a power rather than a multiple, so it gives $1000$ and not $150$, and the negative sign puts it in the denominator. Concentration is $0.4$ microgram per cubic metre, so the statement is True.`,
      `**E.** → False

The effect of doubling the distance is the surviving fraction $2^{-1.5}$, and the percentage cut is one minus that fraction.

$$\\frac{c(2x)}{c(x)} =2^{-1.5} =\\frac{1}{2\\sqrt2} \\approx0.3536$$

$$1-0.3536=0.6464\\approx64.6\\%$$

An exact halving would require exponent $-1$, and the surviving $35.4\\%$ is not itself the reduction. Doubling distance cuts concentration by about $64.6\\%$, so the statement is False.`,
    ],
  },
  {
    sort_order: 43,
    tactical_explanations: [
      `**A.** → True

Composing two power laws substitutes the inner law into the outer one, which multiplies the exponents and raises the inner coefficient to the outer power.

$$L(w) = 32\\left(0.5w^{0.5}\\right)^{3} = 32 \\times 0.5^{3} \\times w^{0.5 \\times 3}$$

Simplify the constant and the exponent:

$$32 \\times 0.125 = 4, \\qquad 0.5 \\times 3 = 1.5$$

$$L(w) = 4w^{1.5}$$

Cubing only the variable part and carrying $0.5$ through unchanged would leave the loss index eight times too large. The composed law is $4w^{1.5}$, so the statement is True.`,
      `**B.** → True

A doubling of wind speed acts through the composed exponent $1.5$, which is the product of the two stage exponents.

$$\\frac{L(2w)}{L(w)} = 2^{1.5} = 2\\sqrt{2} \\approx 2.8284$$

Verify through the two stages:

$$s \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{3} \\approx 2.828$$

Either stage exponent taken alone would give a different factor, and agreement between the two routes guards against composing incorrectly. Losses multiply by about $2.83$, so the statement is True.`,
      `**C.** → True

A stated loss level is inverted through the composed law, so the reciprocal exponent $2/3$ applies once the coefficient is divided out.

$$4w^{1.5}=1000 \\quad \\Rightarrow \\quad w^{1.5}=250$$

$$w=250^{2/3}\\approx39.69$$

Inverting one stage at a time works too, but only the composed exponent can be reciprocated in a single step. The index reaches $1000$ at a wind speed of about $39.7$, so the statement is True.`,
      `**D.** → True

A level under the composed law keeps the square-root contribution before the cube is applied, which is what the exponent $1.5$ encodes.

$$L(64)=4(64)^{1.5}=4(64)(8)$$

$$L(64)=2048$$

Applying the cube to the wind speed itself, rather than to the surge it produces, would overstate the index badly. The loss index at wind speed $64$ is $2048$, so the statement is True.`,
      `**E.** → True

A fifty percent increase is a multiplier of $1.5$ acting through the composed exponent, which is also $1.5$.

$$\\frac{L(1.5w)}{L(w)}=1.5^{1.5}\\approx1.8371$$

$$(1.8371-1)\\times100\\%\\approx83.7\\%$$

Neither stage exponent in isolation gives this factor, only their product. The loss index rises by about $83.7\\%$, so the statement is True.`,
    ],
  },
  {
    sort_order: 44,
    tactical_explanations: [
      `**A.** → True

The six basis points is a change in impact between two order sizes, so the coefficient multiplies the difference of the two square roots.

$$I(0.09)-I(0.04) =A(\\sqrt{0.09}-\\sqrt{0.04}) =A(0.3-0.2)$$

$$0.1A=6 \\quad \\Rightarrow \\quad A=60, \\qquad I(v)=60\\sqrt v$$

Setting $I(0.09)=6$ would treat the increment as the larger order's total impact. The difference calibration gives $I(v)=60\\sqrt{v}$, so the statement is True.`,
      `**B.** → True

A size multiplier acts on impact through the exponent $0.5$, so the impact ratio is the square root of the size ratio.

$$\\frac{0.09}{0.04}=2.25$$

$$\\frac{I(0.09)}{I(0.04)} =\\left(\\frac{0.09}{0.04}\\right)^{0.5} =\\sqrt{2.25}=1.5$$

Carrying the size ratio $2.25$ across unchanged would describe linear impact rather than square-root impact. The levels are $18$ and $12$ basis points and their ratio is $1.5$, so the statement is True.`,
      `**C.** → True

The scaled impact charge is $vI(v)=60v^{3/2}$, so a break-even with a linear fee is an equation between exponents $3/2$ and $1$.

$$60v^{3/2}=30v \\quad \\Rightarrow \\quad 2\\sqrt v=1 \\quad \\Rightarrow \\quad v=0.25$$

$$\\frac{vI(v)}{F(v)} =\\frac{60v^{3/2}}{30v} =2\\sqrt v<1 \\quad \\text{when }0<v<0.25$$

Comparing $I(v)$ with $F(v)$ directly would compare the wrong pair, since the context defines the charge as $vI(v)$. Break-even is at $0.25$ ADV with the charge lower below it, so the statement is True.`,
      `**D.** → True

Impact and the scaled charge are two different quantities, the second being the first multiplied by order size.

$$I(0.16)=60\\sqrt{0.16}=60(0.4)=24$$

$$vI(v)=0.16(24)=3.84$$

That extra factor of $v$ is what separates a basis-point figure from a charge. Both the $24$ basis points and the $3.84$ charge match the claim, so the statement is True.`,
      `**E.** → False

Proportionality would require the charge to carry exponent $1$, while multiplying impact by $v$ gives exponent $3/2$.

$$vI(v)=v(60v^{1/2})=60v^{3/2}$$

$$\\frac{(2v)I(2v)}{vI(v)} =2^{3/2}=2\\sqrt2\\ne2$$

The explicit factor $v$ is visible, but the $v^{1/2}$ hidden inside impact is what breaks proportionality. The charge grows by about $2.83$ when size doubles, so the statement is False.`,
    ],
  },
  {
    sort_order: 45,
    tactical_explanations: [
      `**A.** → True

The measured $70$ units is the gap between two animals' daily use, and both masses are exact cubes, so the shape factors resolve without rounding.

$$E(64)-E(27) =A(64^{2/3}-27^{2/3}) =A(16-9)$$

$$7A=70 \\quad \\Rightarrow \\quad A=10, \\qquad E(m)=10m^{2/3}$$

Attaching the $70$ to the heavier animal as its total use would calibrate on a level the data never gave. The allometric law is $E(m)=10m^{2/3}$, so the statement is True.`,
      `**B.** → True

Doubling body mass acts through the exponent, so the coefficient and the starting mass cancel and only $2^{2/3}$ survives.

$$\\frac{E(2m)}{E(m)} =\\frac{10(2m)^{2/3}}{10m^{2/3}} =2^{2/3}$$

$$2^{2/3}=(2^2)^{1/3}=\\sqrt[3]{4}\\approx1.587$$

Reading $2/3$ as a $66.7\\%$ increase would replace a power of two with an added proportion. Both exact forms in the claim describe the same multiplier, so the statement is True.`,
      `**C.** → True

A herd total is the sum of individual uses, so the law is applied animal by animal before anything is added.

$$8E(27)=8\\left(10\\cdot27^{2/3}\\right) =8(90)=720$$

$$E(216)=10(216^{1/3})^2 =10(6^2)=360, \\qquad \\frac{720}{360}=2$$

Combining the masses first would treat a nonlinear law as if it were additive. The eight-animal herd uses exactly twice the single animal's energy, so the statement is True.`,
      `**D.** → False

Merging two animals replaces two applications of the law with one application at twice the mass, and the exponent $2/3$ lies below one.

$$E(m)+E(m)=2E(m)$$

$$E(2m)=2^{2/3}E(m)\\approx1.587E(m)<2E(m)$$

Working from total mass alone hides the fact that the model applies to each animal separately. Two $27$ kg animals use $180$ units against about $142.9$ for one $54$ kg animal, so the statement is False.`,
      `**E.** → False

Energy use per kilogram is the allometric law divided by mass, which lowers the exponent to $-1/3$.

$$\\frac{E(m)}{m} =\\frac{10m^{2/3}}{m} =10m^{-1/3}$$

$$\\frac{E(27)}{27}=\\frac{90}{27}=\\frac{10}{3}, \\qquad \\frac{E(64)}{64}=\\frac{160}{64}=2.5$$

Total use does rise with mass, but less than proportionally, which is exactly what makes the average fall. The two per-kilogram values differ, so the statement is False.`,
    ],
  },
  {
    sort_order: 46,
    tactical_explanations: [
      `**A.** → True

The planning file records a gap between two zones rather than either zone's footfall, so the coefficient multiplies the difference of the two shape factors.

$$4^{1.5} = (2^{2})^{3/2} = 2^{3} = 8, \\qquad 16^{1.5} = (4^{2})^{3/2} = 4^{3} = 64$$

Write the recorded gap through the law:

$$f(4) - f(16) = A\\left(\\frac{1}{8} - \\frac{1}{64}\\right) = A \\cdot \\frac{7}{64} = 350$$

$$A = 350 \\cdot \\frac{64}{7} = 3200$$

Dividing $350$ by a single shape factor such as $4^{-1.5}$ would answer a question the file never posed. The footfall law is $f(d)=3200d^{-1.5}$, so the statement is True.`,
      `**B.** → True

The nearer zone's own footfall is the calibrated law evaluated at four kilometres, which the file gives only indirectly.

$$f(4) = \\frac{3200}{4^{1.5}} = \\frac{3200}{8} = 400$$

Check the pair against the recorded gap:

$$f(16) = \\frac{3200}{64} = 50, \\qquad 400 - 50 = 350 \\;\\checkmark$$

The recorded $350$ sits close to this figure only because the distant zone contributes an eighth as much. The nearer zone supplies $400$ visitors a week, so the statement is True.`,
      `**C.** → True

A scale factor depends only on the exponent, so quadrupling the distance acts through $4^{-1.5}$ and the coefficient cancels.

$$\\frac{f(4d)}{f(d)} = \\frac{A(4d)^{-1.5}}{Ad^{-1.5}} = 4^{-1.5} = \\frac{1}{4^{3/2}} = \\frac{1}{8}$$

Verify on the two recorded zones:

$$\\frac{f(16)}{f(4)} = \\frac{50}{400} = \\frac{1}{8} \\;\\checkmark$$

The exponent $1.5$ sits between proportional decay, which would give a quarter, and inverse-square decay, which would give a sixteenth. Footfall falls to an eighth, so the statement is True.`,
      `**D.** → True

The catchment boundary is where footfall meets the threshold, so the law has to be inverted with the reciprocal exponent $2/3$.

$$\\frac{3200}{d^{1.5}} = 100 \\quad \\Rightarrow \\quad d^{1.5} = 32$$

$$d = 32^{2/3} = (2^{5})^{2/3} = 2^{10/3} \\approx 10.08$$

Check the round distance against the threshold:

$$f(10) = \\frac{3200}{10^{1.5}} \\approx \\frac{3200}{31.62} \\approx 101.2 > 100$$

Squaring $32$, or halving it, would apply the exponent instead of its reciprocal. A zone at $10$ kilometres still clears the threshold and the boundary lies just beyond it, so the statement is True.`,
      `**E.** → False

A specific zone is tested against the threshold by evaluating the law there, and nine is a perfect square, so the fractional exponent resolves exactly.

$$9^{1.5} = (3^{2})^{3/2} = 3^{3} = 27$$

Evaluate the law:

$$f(9) = \\frac{3200}{27} \\approx 118.5$$

Nine kilometres looks closer to the quiet zone at sixteen than to the busy one at four, yet distance decay is steepest near the park, so most of the drop has already happened. At about $118$ visitors the zone clears the $100$-visitor threshold, so the statement is False.`,
    ],
  },
  {
    sort_order: 47,
    tactical_explanations: [
      `**A.** → False

Proportionality is the claim that the exponent equals $1$, so it is tested by comparing the area ratio with the output ratio between the two arrays.

$$\\frac{225}{100} = 2.25, \\qquad \\frac{360}{240} = 1.5$$

Test the proportional prediction against the second array:

$$240 \\times 2.25 = 540 \\ne 360$$

Shading, inverter limits and roof orientation all bite as arrays grow, and the exponent that fits this pair is $0.5$. The proportional model overstates the larger array by $180$ kWh, so the statement is False.`,
      `**B.** → True

Two installed arrays determine both constants: their ratio carries the exponent, and either array then carries the coefficient.

$$\\left(\\frac{225}{100}\\right)^{r} = \\frac{360}{240} \\quad \\Rightarrow \\quad 2.25^{r} = 1.5 = 2.25^{1/2}$$

$$r = 0.5$$

Recover the coefficient from each array:

$$\\frac{240}{\\sqrt{100}} = 24, \\qquad \\frac{360}{\\sqrt{225}} = 24, \\qquad y(a) = 24\\sqrt{a}$$

Because $1.5^{2}=2.25$ the exponent falls out without logarithms, and a wrong exponent would leave the two coefficients disagreeing. Both constants are as claimed, so the statement is True.`,
      `**C.** → False

A scale factor has to match the multiplier being asked about, and a doubling is a multiplier of $2$ rather than the $2.25$ separating the installed arrays.

$$\\frac{y(2a)}{y(a)} = 2^{0.5} \\approx 1.4142$$

Contrast with the observed pair:

$$\\left(\\frac{225}{100}\\right)^{0.5} = 1.5 \\quad \\text{(a } 2.25\\times \\text{ expansion, not } 2\\times)$$

Output did rise by half between the two arrays, but across a $2.25$-fold expansion rather than a doubling. A doubling gives about $41\\%$, so the statement is False.`,
      `**D.** → False

The proposal doubles the second array, so the calibrated law is evaluated at $450$ m² and compared with the stated threshold.

$$y(450) = 360 \\times 2^{0.5} \\approx 360 \\times 1.4142 \\approx 509.1$$

Confirm through the calibrated law:

$$y(450) = 24\\sqrt{450} \\approx 24 \\times 21.213 \\approx 509.1$$

$$509.1 < 520$$

The margin is narrow enough that a proportional forecast, which would promise $720$ kWh, is more than $200$ kWh out. The expansion falls short of $520$, so the statement is False.`,
      `**E.** → False

Output per square metre is the calibrated law divided by area, which lowers the exponent to $-0.5$.

$$\\frac{y(a)}{a} = \\frac{24a^{0.5}}{a} = 24a^{-0.5}$$

Evaluate for the three arrays:

$$\\frac{240}{100} = 2.4, \\qquad \\frac{360}{225} = 1.6, \\qquad \\frac{509.1}{450} \\approx 1.13$$

Total output still rises, which is the practical meaning of a sub-linear exponent rather than a contradiction of it. Output per square metre falls throughout, so the statement is False.`,
    ],
  },
  {
    sort_order: 48,
    tactical_explanations: [
      `**A.** → True

Two milestones fix the exponent through their ratio, which cancels the coefficient and leaves a power equation in the volume multiplier.

$$\\left(\\frac{400}{100}\\right)^{b} = \\frac{40}{80} \\quad \\Rightarrow \\quad 4^{b} = 0.5$$

Solve using powers of two:

$$2^{2b} = 2^{-1} \\quad \\Rightarrow \\quad 2b = -1 \\quad \\Rightarrow \\quad b = -0.5$$

Recover the coefficient for later use:

$$A(100)^{-0.5} = 80 \\;\\Rightarrow\\; \\frac{A}{10} = 80 \\;\\Rightarrow\\; A = 800$$

The negative sign is forced by the data, since dropping it would describe cost rising with volume instead of a learning curve. The exponent is $-0.5$, so the statement is True.`,
      `**B.** → True

A scale factor holds at every starting point, so the effect of quadrupling volume is $4^{-0.5}$ wherever it is applied.

$$\\frac{c(4N)}{c(N)} = 4^{-0.5} = \\frac{1}{2}$$

Check two successive quadruplings:

$$c(100) = 80, \\qquad c(400) = 40, \\qquad c(1600) = \\frac{800}{40} = 20$$

The halving observed between the milestones is a general rule rather than a feature of that particular pair. Each quadrupling halves the cost, so the statement is True.`,
      `**C.** → True

A cost target is inverted through the curve, and an exponent of $-0.5$ inverts by squaring the ratio of coefficient to target.

$$800N^{-0.5} = 20 \\quad \\Rightarrow \\quad \\sqrt{N} = \\frac{800}{20} = 40$$

$$N = 1600$$

Check on either side:

$$c(900) = \\frac{800}{30} \\approx 26.7, \\qquad c(2500) = \\frac{800}{50} = 16$$

That squaring is why further targets get expensive, since halving the cost again to $10$ would take $6400$ thousand cells. The threshold is $1600$ thousand cells, so the statement is True.`,
      `**D.** → True

Cumulative spend is unit cost multiplied by volume, and multiplying by $N$ raises the exponent by one.

$$S(N) = N \\cdot 800N^{-0.5} = 800N^{-0.5+1} = 800N^{0.5}$$

Evaluate at the milestones:

$$S(100) = 8000, \\qquad S(400) = 16000, \\qquad S(1600) = 32000$$

Falling unit cost and rising volume pull in opposite directions, so only the derived law settles which wins. Spend grows as $\\sqrt{N}$, so the statement is True.`,
      `**E.** → False

A doubling is a different multiplier from a quadrupling, so it acts through $2^{-0.5}$ rather than $4^{-0.5}$.

$$\\frac{c(2N)}{c(N)} = 2^{-0.5} \\approx 0.7071$$

Check against a milestone:

$$c(100) = 80, \\qquad c(200) = \\frac{800}{\\sqrt{200}} \\approx \\frac{800}{14.142} \\approx 56.6$$

Two doublings make a quadrupling, and $0.7071^{2}=0.5$ recovers the halving rule exactly. The cost falls by about $29\\%$, so the statement is False.`,
    ],
  },
  {
    sort_order: 49,
    tactical_explanations: [
      `**A.** → True

The chain runs from discharge to velocity to transport, so the gauged run calibrates the transport stage before the velocity law is substituted in.

$$A(3)^{3} = 135 \\quad \\Rightarrow \\quad 27A = 135 \\quad \\Rightarrow \\quad A = 5$$

Substitute the velocity law:

$$S(q) = 5\\left(\\frac{q^{0.5}}{2}\\right)^{3} = 5 \\times \\frac{q^{1.5}}{8} = 0.625\\,q^{1.5}$$

Spot-check through both stages at $q=36$:

$$v = \\frac{6}{2} = 3, \\qquad S = 5(27) = 135, \\qquad 0.625(36)^{1.5} = 0.625(216) = 135 \\;\\checkmark$$

Cubing the numerator alone and leaving the divisor $2$ untouched would leave the law eight times too large. The composed law is $0.625q^{1.5}$, so the statement is True.`,
      `**B.** → True

The stability limit is inverted through the composed law, whose reciprocal exponent is $2/3$.

$$0.625q^{1.5} = 5000 \\quad \\Rightarrow \\quad q^{1.5} = 8000$$

$$q = 8000^{2/3} = \\left(8000^{1/3}\\right)^{2} = 20^{2} = 400$$

Confirm through the stages:

$$v(400) = \\frac{20}{2} = 10, \\qquad S = 5(1000) = 5000 \\;\\checkmark$$

Inverting the composed law avoids carrying the intermediate velocity, though both routes agree. The limit is reached at a discharge of $400$, so the statement is True.`,
      `**C.** → True

A discharge multiplier acts through the composed exponent $0.5 \\times 3 = 1.5$, not through either stage alone.

$$\\frac{S(2q)}{S(q)} = 2^{1.5} \\approx 2.8284$$

Verify through the stages:

$$v \\text{ rises by } 2^{0.5} \\approx 1.414, \\qquad 1.414^{3} \\approx 2.83$$

Velocity rises by only $41\\%$ when discharge doubles, and cubing that rise reproduces the composed factor. Transport multiplies by about $2.83$, so the statement is True.`,
      `**D.** → False

Doubling the velocity acts on the transport stage alone, whose exponent is $3$.

$$\\frac{S(2v)}{S(v)} = 2^{3} = 8$$

Check with concrete velocities:

$$S(3) = 135, \\qquad S(6) = 5(216) = 1080, \\qquad \\frac{1080}{135} = 8$$

The two doublings in this task have to be kept apart, since discharge must rise fourfold to double the velocity. Transport multiplies by eight, so the statement is False.`,
      `**E.** → False

Transport per unit of discharge is the composed law divided by $q$, which lowers the exponent from $1.5$ to $0.5$.

$$\\frac{S(q)}{q} = \\frac{0.625q^{1.5}}{q} = 0.625q^{0.5}$$

Evaluate at three discharges:

$$\\frac{S(36)}{36} = 3.75, \\qquad \\frac{S(100)}{100} = 6.25, \\qquad \\frac{S(400)}{400} = 12.5$$

Constancy would require the composed exponent to be $1$, whereas each unit of a larger flow carries more sediment than before. Transport per unit of discharge more than triples, so the statement is False.`,
    ],
  },
  {
    sort_order: 50,
    tactical_explanations: [
      `**A.** → True

A twenty percent price rise is a multiplier of $1.2$ acting through the demand exponent $-3$, so the surviving fraction is a power.

$$\\frac{q(1.2p)}{q(p)}=1.2^{-3}=\\frac{1}{1.728}\\approx0.57870$$

$$(1-0.57870)\\times100\\%\\approx42.1\\%$$

A linear elasticity estimate would multiply $3$ by $20\\%$ and overstate the loss for a change this large. Quantity falls by about $42.1\\%$, so the statement is True.`,
      `**B.** → True

Revenue is price times quantity, and multiplying an isoelastic demand curve by $p$ raises its exponent by one.

$$R(p) = p \\cdot 4000p^{-3} = 4000p^{-3+1} = 4000p^{-2}$$

Check the scale-factor behaviour:

$$\\frac{R(2p)}{R(p)} = 2^{-2} = \\frac{1}{4}$$

The exponent stays negative, which is the formal statement that this trader loses revenue by raising prices. Revenue is a power function with exponent $-2$, so the statement is True.`,
      `**C.** → True

A revenue level needs the coefficient first, which the observed pair supplies, and then the derived revenue law evaluated at the new price.

$$500=A(2)^{-3}=\\frac{A}{8} \\quad \\Rightarrow \\quad A=4000$$

$$R(2.5)=4000(2.5)^{-2}=\\frac{4000}{6.25}=640$$

The negative exponent puts the price in the denominator, so revenue falls as the price rises. Revenue at price $2.50$ is exactly $640$, so the statement is True.`,
      `**D.** → True

The indexation is a multiplier of $1.1$ on price, and its effect on volume is the exact power $1.1^{-3}$.

$$\\frac{q(1.1p)}{q(p)} = 1.1^{-3} = \\frac{1}{1.331} \\approx 0.7513$$

Convert to a percentage cut:

$$1 - 0.7513 \\approx 0.249 = 24.9\\%$$

Check with levels:

$$q(2) = 500, \\qquad q(2.2) = \\frac{4000}{10.648} \\approx 375.7$$

An elasticity estimate of $3 \\times 10\\% = 30\\%$ overstates the loss by five percentage points, since elasticity approximates only small changes. Quantity falls by about $25\\%$, so the statement is True.`,
      `**E.** → True

The same indexation acts on revenue through the revenue exponent $-2$ rather than the demand exponent $-3$.

$$\\frac{R(1.1p)}{R(p)} = 1.1^{-2} = \\frac{1}{1.21} \\approx 0.8264$$

Convert to a percentage cut:

$$1 - 0.8264 \\approx 0.174 = 17.4\\%$$

Check with levels:

$$R(2) = 1000, \\qquad R(2.2) = \\frac{4000}{4.84} \\approx 826.4$$

Volume falls by about $25\\%$ while each unit sells for $10\\%$ more, and $0.7513 \\times 1.1 = 0.8264$ reconciles the two exactly. Revenue falls by about $17\\%$, so the statement is True.`,
    ],
  },
];
