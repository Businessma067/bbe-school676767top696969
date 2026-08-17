export const PATCHES = [
  {
    sort_order: 64,
    explanation_index: 0,
    text: String.raw`**A.** → False

Average product is output divided by labour, and dividing a power by $L$ subtracts one from its exponent:

$$\frac{Q(L)}{L}=\frac{12L^{3/4}}{L}=12L^{\,3/4-1}=12L^{-1/4}$$

Against the general form $AL^{r}$ that gives coefficient $12$ and exponent $-1/4$, not $3/4$. The exponent $3/4$ belongs to total output, and the sign is decisive: a positive exponent would mean average product grows with labour, while the recovered one is negative. A check at sixteen hours splits the two rules:

$$12\cdot16^{-1/4}=6, \qquad 12\cdot16^{3/4}=96$$

The first is output per hour, the second output for the whole shift. The stated exponent belongs to the wrong one, so the statement is False.`,
  },
  {
    sort_order: 64,
    explanation_index: 1,
    text: String.raw`**B.** → False

Two figures are bundled into one assertion, so both need testing. Total output uses the exponent $3/4$, and the fourth root of sixteen is two:

$$16^{3/4}=\left(\sqrt[4]{16}\right)^{3}=2^{3}=8$$

$$Q(16)=12\cdot 8=96$$

That half is right. Average product divides output by the hours worked:

$$\frac{Q(16)}{16}=\frac{96}{16}=6$$

The general rule agrees, since $12\cdot 16^{-1/4}=12/2=6$. Average product is $6$ units per hour, not the $8$ quoted, and $8$ is the value of $16^{3/4}$ itself, an intermediate step rather than a rate. One part fails, so the statement is False.`,
  },
  {
    sort_order: 64,
    explanation_index: 3,
    text: String.raw`**D.** → True

Average product carries the exponent $-1/4$, and a negative exponent is the condition for decrease on a positive domain:

$$\frac{Q(L)}{L}=12L^{-1/4}=\frac{12}{L^{1/4}}$$

The numerator is fixed while the fourth root below it grows, so the quotient shrinks:

* $L=16$ gives $12/2=6$ units per hour.
* $L=81$ gives $12/3=4$ units per hour.
* $L=256$ gives $12/4=3$ units per hour.

Total output still rises across those shifts, from $96$ to $324$ to $768$ units, because $3/4$ is positive. What falls is each hour's contribution, since $3/4$ is below $1$. Average product declines as labour hours rise, so the statement is True.`,
  },
  {
    sort_order: 71,
    explanation_index: 1,
    text: String.raw`**B.** → True

Power is drag multiplied by speed, so this is a two-stage build. Stage one is the drag law already recovered:

$$F(v)=0.5v^{2}$$

Stage two multiplies by the speed, and multiplying by $v^{1}$ adds one to the exponent:

$$P(v)=v\cdot F(v)=0.5v^{3}$$

Inverting the composed law turns that cube into a cube root:

$$0.5v^{3}=500 \quad \Rightarrow \quad v^{3}=1000 \quad \Rightarrow \quad v=10$$

Running the chain forward gives $F(10)=50$ N and $50\times 10=500$ W, the rider's limit. Capping the drag force instead would solve $0.5v^{2}=500$ and push the ceiling past $31$ m/s. Both the cubic law and the $10$ m/s ceiling hold, so the statement is True.`,
  },
  {
    sort_order: 71,
    explanation_index: 3,
    text: String.raw`**D.** → False

A speed multiplier passes through the composition one stage at a time, each stage contributing its own power:

$$\frac{F(1.25v)}{F(v)}=1.25^{2}=1.5625, \qquad \frac{1.25v}{v}=1.25$$

Multiplying the two stages gives the composed response:

$$\frac{P(1.25v)}{P(v)}=1.5625\times 1.25=1.953125$$

Subtracting one turns that into a rise of $95.3125\%$, not the $75\%$ asserted. Levels agree, since $25\%$ faster than $8$ m/s is $10$ m/s, where absorbed power climbs from $256$ W to $500$ W. Multiplying the exponent $3$ by the $25\%$ move gives the quoted figure, a shortcut good only for very tiny changes. Power rises by about $95.3\%$, so the statement is False.`,
  },
  {
    sort_order: 72,
    explanation_index: 1,
    text: String.raw`**B.** → False

Four metres is twice the calibration depth, so the reading follows a scale chain. Take the depth ratio, push it through the exponent, and apply it to the calibrated level:

$$\frac{4}{2}=2, \qquad 2^{-3}=\frac{1}{8}, \qquad 50\times\frac{1}{8}=6.25$$

Direct substitution agrees, since $400/64=6.25$ millivolts. Two extra metres of cover cost seven eighths of the signal, and the chain continues: another doubling, to eight metres, leaves $0.78125$ millivolts. Halving the $50$ millivolts gives exactly the claimed $25$, the answer for an inverse-proportional law. The locator reads $6.25$ millivolts, so the statement is False.`,
  },
  {
    sort_order: 72,
    explanation_index: 3,
    text: String.raw`**D.** → False

Recovering a depth from a reading is a single substitution into the calibrated law, then one inversion of the cube:

$$\frac{400}{x^{3}}=3.2$$

$$x^{3}=\frac{400}{3.2}=125$$

$$x=\sqrt[3]{125}=5$$

The forward check returns the reading, since $400/125=3.2$ millivolts, and a cube root is the only operation that undoes an exponent of magnitude three. At the claimed ten metres the locator would show $400/1000=0.4$ millivolts, eight times weaker than the figure quoted, because doubling the depth from five metres again removes seven eighths of the signal. The reading corresponds to $5$ metres, so the statement is False.`,
  },
  {
    sort_order: 74,
    explanation_index: 2,
    text: String.raw`**C.** → False

A percentage move must become a multiplier before an exponent can act on it:

$$1+\frac{50}{100}=1.5$$

The multiplier then enters flow through the fourth power, not through the exponent times the percentage:

$$\frac{Q(1.5r)}{Q(r)}=1.5^{4}$$

$$1.5^{4}=\left(1.5^{2}\right)^{2}=2.25^{2}=5.0625$$

Converting back subtracts one before scaling:

$$(5.0625-1)\times 100\%=406.25\%$$

The bench pair confirms it, since flow moves from $48$ to $243$ litres per hour between $2$ and $3$ mm. A rise of $125\%$ is the answer for exponent two, where $1.5^{2}=2.25$. Flow rises by $406.25\%$, so the statement is False.`,
  },
  {
    sort_order: 74,
    explanation_index: 4,
    text: String.raw`**E.** → False

The velocity index divides one power function by another, so its exponent is the difference $4-2$ rather than zero:

$$\frac{Q(r)}{\pi r^{2}}=\frac{3r^{4}}{\pi r^{2}}=\frac{3r^{2}}{\pi}$$

A leftover exponent of $2$ leaves the index climbing with the bore:

* At $r=1$ the index is $3/\pi\approx 0.95$.
* At $r=2$ it is $12/\pi\approx 3.82$.
* At $r=3$ it is $27/\pi\approx 8.59$.

Both quantities grow with the radius, which is what makes a cancellation look plausible, but flow gains two exponents on the cross-section. The index rises ninefold across the tubes, so the statement is False.`,
  },
  {
    sort_order: 75,
    explanation_index: 1,
    text: String.raw`**B.** → True

Six metres is twice the survey distance, so the reading follows a scale chain rather than a fresh calibration. Take the distance ratio, raise it to the exponent, and apply it to the surveyed level:

$$\frac{6}{3}=2, \qquad 2^{-2}=\frac{1}{4}, \qquad 80\times\frac{1}{4}=20$$

Direct substitution agrees, since $720/36=20$. Three extra metres of standoff remove three quarters of the exposure rate, and the chain continues on the same terms: the next doubling, out to twelve metres, removes three quarters of what is left and brings the meter to $5$ microsieverts per hour. The meter reads $20$ microsieverts per hour, so the statement is True.`,
  },
  {
    sort_order: 75,
    explanation_index: 3,
    text: String.raw`**D.** → True

Locating the barrier is one substitution into the calibrated law followed by one inversion of the square:

$$\frac{720}{d^{2}}=5$$

$$d^{2}=\frac{720}{5}=144$$

$$d=\sqrt{144}=12$$

Only the positive root is admissible, since a distance cannot be negative. The answer agrees with the scale factors already in hand, because twelve metres is four times the survey distance and $4^{-2}=1/16$ turns $80$ into exactly $5$ microsieverts per hour. Multiplying the survey distance by the dose ratio $80/5=16$ would put the barrier at $48$ metres, four times too far. The barrier belongs at twelve metres, so the statement is True.`,
  },
  {
    sort_order: 76,
    explanation_index: 1,
    text: String.raw`**B.** → True

A time multiplier reaches the stained area through two stages, each with its own exponent. The radius responds first:

$$\frac{r(2t)}{r(t)}=2^{2/3}\approx 1.5874$$

Forming the disc squares that radius, which doubles the exponent, and the coefficient cancels in the ratio:

$$\frac{S(2t)}{S(t)}=\left(2^{2/3}\right)^{2}=2^{4/3}=2\cdot 2^{1/3}\approx 2.5198$$

The factor holds everywhere on the curve, so the stain grows by the same $2.52$ from hour $1$ to hour $2$ as from hour $12$ to hour $24$. Applying the radius factor $1.587$ to the area would stop after the first stage and forget that area squares the radius. The stained area grows by about $2.52$, so the statement is True.`,
  },
  {
    sort_order: 76,
    explanation_index: 3,
    text: String.raw`**D.** → False

Recovering a time from a radius inverts the two-thirds power, and the exponent that undoes it is the reciprocal $3/2$:

$$15t^{2/3}=240$$

$$t^{2/3}=16$$

$$t=16^{3/2}=\left(\sqrt{16}\right)^{3}=4^{3}=64$$

Substituting hour $64$ forward returns $15\cdot 16=240$ metres, so it checks. At the claimed hour the plume falls well short, since $32^{2/3}\approx 10.079$ puts the radius near $151$ metres. The last stretch of spreading is slow, so the extra thirty-two hours add only about $89$ metres. Inverting by multiplying rather than raising to $3/2$ is what shortens the wait. The radius reaches $240$ metres at hour $64$, so the statement is False.`,
  },
  {
    sort_order: 77,
    explanation_index: 1,
    text: String.raw`**B.** → False

A change of input unit is a substitution, and the factor travels through the exponent with the head:

$$h=\frac{h_{\mathrm{cm}}}{100}$$

Putting that into the curve separates constant from variable:

$$Q=16\left(\frac{h_{\mathrm{cm}}}{100}\right)^{3/2}=\frac{16}{100^{3/2}}\,h_{\mathrm{cm}}^{3/2}$$

The conversion factor carries the same power the head does:

$$100^{3/2}=\left(\sqrt{100}\right)^{3}=1000$$

$$Q=0.016\,h_{\mathrm{cm}}^{3/2}$$

The gauged point settles it, since $h_{\mathrm{cm}}=25$ gives $0.016(125)=2$ cubic metres per second, while the quoted value returns $200$. Dividing by $10$ once produces the claimed $1.6$, treating the exponent as though it were $1/2$. The coefficient is $0.016$, so the statement is False.`,
  },
  {
    sort_order: 77,
    explanation_index: 3,
    text: String.raw`**D.** → False

Two things happen when a length unit changes, and only one is described correctly. A power function pushes the conversion constant through its exponent first:

$$Q=16\left(\frac{h_{\mathrm{cm}}}{100}\right)^{3/2}=16\times 100^{-3/2}\,h_{\mathrm{cm}}^{3/2}$$

Evaluating that factor fixes its size and direction:

$$100^{-3/2}=\frac{1}{1000}, \qquad 16\longrightarrow 0.016$$

The exponent half is right, because no unit change can move an exponent. The coefficient half fails in size and direction: a smaller unit of length makes every numerical head larger, so the coefficient must shrink to compensate. The coefficient is divided by $1000$, so the statement is False.`,
  },
  {
    sort_order: 78,
    explanation_index: 0,
    text: String.raw`**A.** → True

A percentage rise has to become a multiplier before an exponent can be read from it, and the coefficient plays no part because it cancels in the ratio:

$$\frac{F(2x)}{F(x)}=\frac{A(2x)^{r}}{Ax^{r}}=2^{r}=1+\frac{300}{100}=4$$

Matching powers of the same base finishes the solve without logarithms:

$$2^{r}=4=2^{2} \quad \Rightarrow \quad r=2$$

The record is a ratio rather than a level, which is why it settles the exponent while leaving the coefficient for the next record to fix. Reading the $300\%$ as a multiplier of three would give $2^{r}=3$ and a non-integer exponent near $1.585$. The exponent is $r=2$, so the statement is True.`,
  },
  {
    sort_order: 78,
    explanation_index: 2,
    text: String.raw`**C.** → True

Evaluating the calibrated law at a new batch size squares the mass first and applies the coefficient afterwards:

$$10^{2}=100, \qquad F(10)=3(100)=300$$

The scale-factor route from the two-tonne batch reaches the same litre figure, since $10/2=5$:

$$5^{2}=25, \qquad 12\times 25=300$$

A five-fold batch therefore burns twenty-five times the fuel, which is what an exponent above one costs the operator. Scaling the six-tonne figure of $108$ litres by the mass ratio $10/6$ would give about $180$ litres, the answer for a proportional law. The batch uses $300$ litres, so the statement is True.`,
  },
  {
    sort_order: 79,
    explanation_index: 1,
    text: String.raw`**B.** → True

Composition feeds the calibrated inner law into the outer rule one stage at a time. Stage one is the mass flow already recovered:

$$m(t)=2t^{1/2}$$

Stage two raises that expression to the fourth power, multiplying the exponents and lifting the coefficient too:

$$\left(2t^{1/2}\right)^{4}=2^{4}\,t^{(1/2)(4)}=16\,t^{2}$$

Stage three divides by the $16$ sitting in the outer rule, and the two sixteens cancel exactly:

$$P(m(t))=\frac{16\,t^{2}}{16}=t^{2}$$

Running the chain numerically at the calibration setting agrees, since $m(9)=6$ and $P(6)=1296/16=81=9^{2}$, matching the composed square. Stopping once the coefficient is recovered would leave the outer rule unused, the usual way a two-stage chain goes unfinished. The composed map is $t^{2}$, so the statement is True.`,
  },
  {
    sort_order: 79,
    explanation_index: 4,
    text: String.raw`**E.** → False

Inverting a composed law undoes the stages in reverse order, and only the composed exponent matters. Set the target index against the collapsed map:

$$t^{2}=81 \quad \Rightarrow \quad t=81^{1/2}=9$$

Running the chain forward from that setting checks both stages in turn:

$$m(9)=2\sqrt{9}=6, \qquad P(6)=\frac{6^{4}}{16}=\frac{1296}{16}=81$$

The quoted setting of $27$ comes from treating an exponent as a number to divide by, or from reading $81$ as $3^{4}$ and keeping three of those factors; either route confuses powers with factors. Because the composed map is strictly increasing, the solution is unique. The required throttle setting is $9$, so the statement is False.`,
  },
  {
    sort_order: 83,
    explanation_index: 2,
    text: String.raw`**C.** → True

Solving for a price runs the rule backwards, so the target quantity is substituted in and the reciprocal exponent undoes the power:

$$\frac{2000}{p^{2}}=125$$

$$p^{2}=\frac{2000}{125}=16$$

$$p=\sqrt{16}=4$$

Only the positive root is admissible, since price is positive on the stated domain and the root $-4$ has no meaning at a kiosk. Substituting forward returns the target exactly, because $2000/16=125$ packs per week. Applying the exponent $-2$ a second time rather than its reciprocal would run demand forwards again and deliver a quantity where a euro figure is wanted. Demand is strictly decreasing on $p>0$, so no second price reaches the same target. The required price is $4$ euros, so the statement is True.`,
  },
  {
    sort_order: 83,
    explanation_index: 4,
    text: String.raw`**E.** → False

Revenue multiplies price by quantity, and multiplying by $p$ raises the exponent by one, from $-2$ up to $-1$:

$$R(p)=p\cdot 2000p^{-2}=2000\,p^{-1}=\frac{2000}{p}$$

A schedule flat in price would need exponent $0$, and this one is still negative, so revenue falls the whole way:

* $R(4)=500$ euros per week.
* $R(5)=400$ euros per week.
* $R(10)=200$ euros per week.

Revenue halves whenever the price doubles and tends to zero as price grows without bound. It would be flat only if demand itself carried the exponent $-1$, since $p$ times $p^{-1}$ is a constant; the extra magnitude in $-2$ is what costs the kiosk money on every rise. Revenue varies with price, so the statement is False.`,
  },
  {
    sort_order: 86,
    explanation_index: 1,
    text: String.raw`**B.** → False

Three different numbers are in play, and only one answers the question asked. The price factor comes first:

$$\frac{12}{10}=1.2$$

The exact rule raises that factor to the exponent; the shortcut multiplies the exponent by the percentage move:

$$1.2^{-2}=\frac{1}{1.44}\approx 0.6944, \qquad -2\times 20\%=-40\%$$

Turning that multiplier into a percentage cut gives the figure the desk would record:

$$1-0.6944=0.3056\approx 30.6\%$$

Levels confirm it, since $q(10)=40$ tickets against $q(12)=4000/144\approx 27.78$. The quoted $20\%$ is the size of the price rise rather than the demand response, and the shortcut misses in the other direction at $40\%$. The exact fall is about $30.6\%$, so the statement is False.`,
  },
  {
    sort_order: 86,
    explanation_index: 2,
    text: String.raw`**C.** → False

The shortcut and the exact rule answer different questions, and the gap is what this statement turns on. Set them side by side at a price factor of $1.1$:

$$-2\times 10\%=-20\%, \qquad 1.1^{-2}-1=\frac{1}{1.21}-1$$

Evaluating the exact expression leaves the finite response:

$$\frac{1}{1.21}\approx 0.82645 \quad \Rightarrow \quad 1-0.82645\approx 17.36\%$$

The shortcut overstates the decline by more than two and a half points, reading a curved relationship as a straight line. Levels agree, since $q(10)=40$ and $q(11)=4000/121\approx 33.06$, a loss of about $6.94$ tickets on a base of $40$. The exact cut is about $17.4\%$, so the statement is False.`,
  },
  {
    sort_order: 87,
    explanation_index: 1,
    text: String.raw`**B.** → True

The coefficient stands in front of the shape factor as a plain multiplier, so a counterfactual value rescales the whole curve without touching its shape. Write the two rules side by side:

$$T(e)=A\,e^{3/2}, \qquad T_{c}(e)=1.25A\,e^{3/2}$$

Dividing one by the other cancels the shape factor at every setting:

$$\frac{T_{c}(e)}{T(e)}=\frac{1.25A\,e^{3/2}}{A\,e^{3/2}}=1.25$$

Because $e^{3/2}$ never survives that division, the result is an identity rather than a check at one convenient point. Levels bear it out: $T_{c}(4)=80$ against $64$, and $T_{c}(9)=270$ against $216$. A mis-scaled coefficient lifts the curve without tilting it. Every reading rises by exactly $25\%$, so the statement is True.`,
  },
  {
    sort_order: 87,
    explanation_index: 4,
    text: String.raw`**E.** → False

A counterfactual coefficient enters the numerator and the denominator of a scale factor in equal measure, so the quotient cannot register it at all. Build both throughputs under the enlarged coefficient:

$$T_{c}(2e)=1.25A(2e)^{3/2}, \qquad T_{c}(e)=1.25A\,e^{3/2}$$

The factor $1.25$ and the coefficient $A$ both cancel when the ratio is formed:

$$\frac{T_{c}(2e)}{T_{c}(e)}=\frac{(2e)^{3/2}}{e^{3/2}}=2^{3/2}=2\sqrt{2}\approx 2.8284$$

Numbers at the settings already used confirm it:

$$T_{c}(4)=80, \qquad T_{c}(8)\approx 226.27$$

A quarter added to the coefficient changes every level by a quarter and every ratio not at all, the distinction the whole task is built on. The scale factor stays at $2\sqrt{2}$, so the statement is False.`,
  },
];
