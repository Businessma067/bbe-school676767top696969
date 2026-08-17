export const PATCHES = [
  {
    sort_order: 32,
    explanation_index: 0,
    text: String.raw`**A.** → True

The log records an output increase, not an output level, so both labour figures enter the same equation. Take the shape factors first:

$$\sqrt{25}=5,\qquad \sqrt{100}=10$$

$$Y(100)-Y(25)=A(10-5)$$

$$5A=60\quad\Rightarrow\quad A=12$$

$$Y(L)=12L^{1/2}=12\sqrt L$$

The recovered law reproduces the record, since the endpoint outputs are $Y(25)=60$ and $Y(100)=120$, whose difference is the logged $60$ units. Reading the $60$ as $Y(100)$ instead would discard the lower endpoint and halve the coefficient to $6$. Both the coefficient and the square-root form match the data, so the statement is True.`,
  },
  {
    sort_order: 32,
    explanation_index: 1,
    text: String.raw`**B.** → True

Two laws with different exponents can only be compared at a common labour input, so both are evaluated at $L=64$ before anything is subtracted:

$$Y(64)=12\sqrt{64}=12(8)=96,\qquad W(64)=0.75(64)=48,\qquad Y(64)-W(64)=48$$

The coefficients $12$ and $0.75$ settle nothing on their own, because one multiplies $\sqrt L$ and the other multiplies $L$. That gap in exponents is also why the $48$-unit advantage is temporary: at $L=256$ both laws give $192$ units, and past that point the wage benchmark is the larger of the two. At $64$ hours the square-root technology stands exactly $48$ units above the benchmark, so the statement is True.`,
  },
  {
    sort_order: 32,
    explanation_index: 3,
    text: String.raw`**D.** → True

Reversing a square-root technology means dividing by the coefficient first and squaring second, since the inverse exponent is $2$ rather than $1$:

$$12\sqrt L=180$$

$$\sqrt L=15\quad\Rightarrow\quad L=15^{2}=225$$

$$Y(225)=12\sqrt{225}=12(15)=180$$

Only the positive root is admissible, because labour hours are positive by assumption. A proportional guess is exactly what the exponent rules out: output rises by the factor $180/120=1.5$ above the logged $100$ hours, so labour has to rise by $1.5^{2}=2.25$, giving $225$ hours rather than $150$. The inversion and the forward check agree on $225$ labour hours, so the statement is True.`,
  },
  {
    sort_order: 41,
    explanation_index: 0,
    text: String.raw`**A.** → True

The recorded $1900$ is the change between two bills. The fourth-power inputs make every shape factor exact:

$$16^{3/4}=8,\qquad 81^{3/4}=27$$

$$C(81)-C(16)=A(27-8)=19A$$

$$19A=1900\quad\Rightarrow\quad A=100$$

$$C(n)=100n^{3/4}$$

As a check, the endpoint bills are $2700$ and $800$, and their difference is $1900$. Using the increase as though it were the larger bill would discard the lower bill and recover the wrong scale. The calibrated schedule is exactly the one stated, so the statement is True.`,
  },
  {
    sort_order: 41,
    explanation_index: 1,
    text: String.raw`**B.** → True

Since $100n^{3/4}$ is increasing for $n>0$, the spending cap has one boundary and every smaller engagement stays feasible:

$$100n^{3/4}\le2700
\quad\Longleftrightarrow\quad
n^{3/4}\le27
\quad\Longleftrightarrow\quad
n\le27^{4/3}=81$$

The endpoint check gives $C(81)=100(27)=2700$, while any $n>81$ has a larger three-quarter power and therefore breaks the cap. The intermediate value $27$ is $n^{3/4}$ rather than the account count, so stopping there would leave the inversion half done. The largest covered engagement is $81$ accounts, so the statement is True.`,
  },
  {
    sort_order: 41,
    explanation_index: 2,
    text: String.raw`**C.** → True

A tie between a three-quarter power and a linear schedule is one equation, and dividing by $50n^{3/4}$ on the positive domain leaves a single quarter power:

$$100n^{3/4}=50n\quad\Rightarrow\quad 2=n^{1/4}\quad\Rightarrow\quad n=16$$

The ratio of the two schedules then settles every account count at once:

$$\frac{C(n)}{R(n)}=\frac{100n^{3/4}}{50n}=2n^{-1/4}$$

* At $n=16$ the ratio equals $1$, and both quotes are $800$.
* For $n>16$ the quarter power exceeds $2$, so the ratio falls below $1$.
* For $0<n<16$ the ratio exceeds $1$, so the rival is the cheaper firm.

At $81$ accounts the quotes are $2700$ against $4050$, which shows how fast the gap opens once the crossover is passed. Coefficients alone would have pointed the wrong way, since the rival carries the larger exponent. The firms tie at $16$ accounts and the practice is cheaper beyond it, so the statement is True.`,
  },
  {
    sort_order: 42,
    explanation_index: 0,
    text: String.raw`**A.** → True

The monitors provide a difference of readings. Resolve each inverse three-halves factor before solving for the common coefficient:

$$4^{-3/2}=\frac18,\qquad 16^{-3/2}=\frac1{64}$$

$$c(4)-c(16)=A\left(\frac18-\frac1{64}\right)=\frac{7A}{64}$$

$$\frac{7A}{64}=43.75=\frac{175}{4}
\quad\Rightarrow\quad
A=400$$

The resulting levels are $c(4)=50$ and $c(16)=6.25$, which differ by $43.75$ exactly. Calibrating either monitor directly against the reported gap would misuse the observation. The recovered law is $c(x)=400x^{-3/2}$, so the statement is True.`,
  },
  {
    sort_order: 42,
    explanation_index: 1,
    text: String.raw`**B.** → True

The concentration curve is decreasing, so solve the equality to locate the boundary and then use monotonicity to choose the side:

$$400x^{-3/2}=6.25
\quad\Rightarrow\quad
x^{3/2}=64
\quad\Rightarrow\quad
x=64^{2/3}=16$$

Boundary and direction together:

* $c(16)=6.25$, so the endpoint belongs to the region.
* If $x>16$, the denominator $x^{3/2}$ is larger and $c(x)<6.25$.
* If $0<x<16$, the denominator is smaller and $c(x)>6.25$.

The ceiling is therefore met precisely on the interval $x\ge16$, including its endpoint, so the statement is True.`,
  },
  {
    sort_order: 42,
    explanation_index: 4,
    text: String.raw`**E.** → False

Use the scale factor itself as a counterexample. Doubling any distance leaves

$$\frac{c(2x)}{c(x)}=2^{-3/2}=\frac{1}{2\sqrt2}\approx0.3536$$

Only about $35.36\%$ of the original concentration survives, so the reduction is

$$1-0.3536=0.6464\approx64.64\%$$

For instance, the calibrated readings fall from $c(4)=50$ to $c(8)\approx17.68$, a drop of about $32.32$ rather than $25$. A $50\%$ cut would require the surviving fraction $1/2$, which belongs to exponent $-1$. The actual cut is about $64.6\%$, so the statement is False.`,
  },
  {
    sort_order: 44,
    explanation_index: 0,
    text: String.raw`**A.** → True

The six basis points is the increment between the two orders. Recover the scale in three short steps:

$$\sqrt{0.09}=0.3,\qquad \sqrt{0.04}=0.2$$

$$A(0.3-0.2)=6$$

$$0.1A=6\quad\Rightarrow\quad A=60$$

$$I(v)=60\sqrt v$$

The endpoint impacts are $18$ and $12$ basis points, whose difference is exactly $6$. Assigning the reported increment to the larger order as a level would produce $A=20$ and fail that endpoint check. The calibrated impact law is $60\sqrt v$, so the statement is True.`,
  },
  {
    sort_order: 44,
    explanation_index: 2,
    text: String.raw`**C.** → True

The context defines the charge as $vI(v)$, so the comparison runs between that product and the fee rather than between impact and the fee:

$$vI(v)=60v^{3/2},\qquad F(v)=30v$$

Dividing out the common factor $v>0$ reduces the whole comparison to one square root:

$$\frac{vI(v)}{F(v)}=\frac{60v^{3/2}}{30v}=2\sqrt v$$

* $2\sqrt v=1$ exactly at $v=0.25$, where both sides equal $7.5$.
* $2\sqrt v<1$ for $0<v<0.25$, so the impact charge is the smaller one.
* $2\sqrt v>1$ for $v>0.25$, so the notional fee becomes the cheaper one.

At $v=0.09$ the charge is $1.62$ against a fee of $2.7$, and at $v=0.64$ it is $30.72$ against $19.2$, which is the reversal the ratio predicts. Break-even sits at $0.25$ ADV with the impact charge lower below it, so the statement is True.`,
  },
  {
    sort_order: 44,
    explanation_index: 4,
    text: String.raw`**E.** → False

Multiplying impact by order size changes the exponent:

$$vI(v)=v\left(60v^{1/2}\right)=60v^{3/2}$$

A proportional charge would carry exponent $1$ and would double whenever $v$ doubled. Here a direct counterexample gives

$$\frac{(2v)I(2v)}{vI(v)}=2^{3/2}=2\sqrt2\approx2.828$$

At $v=0.04$ the charge is $0.48$, while at $v=0.08$ it is about $1.358$ rather than $0.96$. The visible factor $v$ does not erase the square root already sitting inside impact. The charge is a three-halves power rather than a proportional law, so the statement is False.`,
  },
  {
    sort_order: 45,
    explanation_index: 0,
    text: String.raw`**A.** → True

The $70$ units records a difference between two animals. Both masses are cubes, so the calibration stays exact:

$$27^{2/3}=9,\qquad 64^{2/3}=16$$

$$E(64)-E(27)=A(16-9)=7A$$

$$7A=70\quad\Rightarrow\quad A=10$$

$$E(m)=10m^{2/3}$$

The reconstructed levels are $160$ and $90$, and their difference returns the observed $70$. Treating $70$ as the heavier animal's total would ignore the lighter animal's positive use. The recovered allometric law is exactly $10m^{2/3}$, so the statement is True.`,
  },
  {
    sort_order: 45,
    explanation_index: 2,
    text: String.raw`**C.** → True

A herd total applies the law to each animal and adds only afterwards, so the eight small animals and the single large one have to be built separately:

$$E(27)=10(27^{2/3})=10(9)=90,\qquad 8E(27)=720$$

$$E(216)=10(216^{2/3})=10(36)=360$$

$$\frac{8E(27)}{E(216)}=\frac{720}{360}=2$$

Both arrangements carry the same total mass, since $8(27)=216$ kilograms, which is what makes this a clean test of the exponent:

* eight bodies invoke the concave law eight times, at $90$ units each;
* one body invokes it once, at the single shape factor $36$;
* the split herd therefore needs twice the energy.

Pooling the mass before applying the law would have predicted equality instead. The herd uses twice the single animal's energy, so the statement is True.`,
  },
  {
    sort_order: 45,
    explanation_index: 3,
    text: String.raw`**D.** → False

Two equal animals and one animal of doubled mass have uses

$$E(m)+E(m)=2E(m),\qquad E(2m)=2^{2/3}E(m)\approx1.587E(m)$$

The two totals cannot agree, because $2^{2/3}<2$. A concrete counterexample at $m=27$ makes the gap visible:

$$2E(27)=180,\qquad E(54)=10(54^{2/3})\approx142.87$$

Combining mass before applying a concave power removes one application of the law and lowers total use by about $37.13$ units in this example. The total therefore changes rather than staying fixed, so the statement is False.`,
  },
  {
    sort_order: 55,
    explanation_index: 0,
    text: String.raw`**A.** → True

The log preserves only the gap between two days, and a gap is enough here because the coefficient is a common factor of every model value while the exponent $1/2$ was given in advance. Put both days into one equation:

$$S(9)-S(4)=A\sqrt 9-A\sqrt 4=A(3-2)$$

The two square roots differ by exactly $1$, so the coefficient is read straight off the record:

$$A=5,\qquad S(t)=5\sqrt t$$

Everything the log withheld can now be reconstructed:

* day $4$ carries $S(4)=10$ MPa;
* day $9$ carries $S(9)=15$ MPa;
* their difference returns the recorded $5$ MPa.

Attaching the $5$ MPa to day $9$ as a level would invent an observation that was never made, and it would give the far smaller coefficient $5/3$, understating every strength on the curve. The difference calibration recovers $S(t)=5\sqrt t$ exactly, so the statement is True.`,
  },
  {
    sort_order: 55,
    explanation_index: 2,
    text: String.raw`**C.** → True

A time multiplier reaches strength through the exponent $1/2$, so the coefficient cancels and the starting day never enters:

$$\frac{S(4t)}{S(t)}=\frac{5\sqrt{4t}}{5\sqrt t}=\sqrt 4=2$$

Because the ratio is free of $t$, the rule holds anywhere on the curve and not only at the logged days:

$$S(4)=10,\quad S(16)=20,\qquad S(9)=15,\quad S(36)=30$$

Each pair quadruples the time and doubles the strength, which is the practical content of a square-root law: to gain another factor of two the lab has to spend four times the curing days it has already spent. The same arithmetic explains why the move from day $4$ to day $9$ gains only half as much, since the ratio $9/4$ falls well short of a quadrupling. Quadrupling curing time doubles strength exactly, so the statement is True.`,
  },
  {
    sort_order: 55,
    explanation_index: 3,
    text: String.raw`**D.** → True

A target strength is inverted by dividing out the coefficient and then squaring, since squaring undoes the exponent $1/2$:

$$5\sqrt t=30\quad\Rightarrow\quad \sqrt t=6\quad\Rightarrow\quad t=36$$

Two independent checks close the loop. Forward substitution gives $5\sqrt{36}=5(6)=30$ MPa, and scaling from the reconstructed day-$9$ level reaches the same calendar day, because strength has to double from $15$ MPa to $30$ MPa while time enters as a square, so the day multiplies by $2^{2}=4$ and $9(4)=36$. Only the positive root is worth reading, as curing time cannot be negative. Linear extrapolation is precisely what the exponent forbids: doubling the strength recorded on day $9$ would suggest day $18$, where the model delivers just $5\sqrt{18}\approx21.21$ MPa. Reaching $30$ MPa takes exactly $36$ days of curing, so the statement is True.`,
  },
  {
    sort_order: 56,
    explanation_index: 1,
    text: String.raw`**B.** → True

The third run is a test point rather than part of the calibration, so the prediction has to come from the trusted law before any comparison is made:

$$y(9)=2(9^{2})=2(81)=162$$

Setting prediction against measurement gives the absolute discrepancy the statement quotes:

$$162-150=12$$

Direction matters as much as size here, since $150$ lies below $162$: the beam deflected less than the model expected, which is an undershoot rather than an overshoot. In relative terms the miss is $12/162=2/27\approx7.4\%$, small enough to look plausible in a log yet large enough to matter for a stiffness check. The trusted pair leaves no room to absorb it either, because $2(3^{2})=18$ and $2(6^{2})=72$ are both exact. The quadratic model predicts $162$ mm and the recorded run falls $12$ mm short of it, so the statement is True.`,
  },
  {
    sort_order: 56,
    explanation_index: 3,
    text: String.raw`**D.** → False

Fitting an exponent to a pair of points uses the ratio of that pair, and the pair named in the statement includes the suspect run:

$$\frac{150}{18}=\frac{25}{3}\approx8.333=3^{k}$$

An exact quadratic across a threefold span increase would need the ratio $3^{2}=9$, so the fitted exponent has to land below $2$:

$$k=\frac{\ln(25/3)}{\ln 3}=\frac{2.1203}{1.0986}\approx1.930$$

The trusted pair still returns exactly $2$, because $72/18=4=2^{2}$, so the two fits disagree only because the $9$ m run sits off the curve. That disagreement is the diagnostic value of the third reading: a genuine power law returns the same exponent from any pair of its own points, whereas here the observed ratio falls two thirds of a unit short of $9$. The exponent fitted with the $9$ m point is about $1.930$ rather than exactly $2$, so the statement is False.`,
  },
  {
    sort_order: 57,
    explanation_index: 0,
    text: String.raw`**A.** → True

The two design records do different jobs. A percentage rule is a statement about a ratio, so it fixes the exponent and cancels the coefficient, while the reference mast is a level and fixes only the coefficient. Take the ratio first, with a height factor of $1.2$ and a mass factor of $1.728$:

$$1.2^{k}=1.728=1.2^{3}\quad\Rightarrow\quad k=3$$

The match is exact rather than numerical, so no rounding enters. The reference mast then supplies the scale, using $10^{3}=1000$:

$$1000A=500\quad\Rightarrow\quad A=0.5$$

$$M(h)=0.5h^{3}$$

Neither record is redundant. Without the reference, the entire family $M(h)=Ah^{3}$ would satisfy the design note equally well; without the note, a single $500$ kg reading could not separate a cubic law from any other exponent through that point. The recovered law is $M(h)=0.5h^{3}$ kilograms, so the statement is True.`,
  },
  {
    sort_order: 57,
    explanation_index: 4,
    text: String.raw`**E.** → False

The percentage rule is built from a quotient of two values of the same law, and a quotient loses the coefficient completely:

$$\frac{M(1.2h)}{M(h)}=\frac{A(1.2h)^{k}}{Ah^{k}}=1.2^{k}$$

Every positive coefficient therefore satisfies the note, so the rule cannot single one out:

$$M_{1}(h)=0.5h^{3},\qquad M_{2}(h)=7h^{3},\qquad \frac{M_{2}(1.2h)}{M_{2}(h)}=1.728$$

The second law would put $7000$ kg of steel in the $10$ m reference mast and would reach $500$ kg already at about $4.1$ m, yet it reproduces the $72.8\%$ rise just as exactly as the first one does. Only a level observation breaks that tie, and the $10$ m mast at $500$ kg is the one on hand. Scale information cannot substitute for level information, so the statement is False.`,
  },
  {
    sort_order: 58,
    explanation_index: 1,
    text: String.raw`**B.** → False

A cap on intensity becomes a question about distance once the law is inverted, so solve for the distance at which the fan just meets the night limit:

$$\frac{2.88}{d^{2}}=0.08\quad\Rightarrow\quad d^{2}=36\quad\Rightarrow\quad d=6$$

Evaluating the law there returns the cap itself rather than a figure above it:

$$I(6)=\frac{2.88}{36}=0.08$$

Six metres is the boundary, and the word above excludes a boundary value. Because the exponent is negative, the reading keeps falling with distance, so the compliant region is everything beyond six metres and the breach region everything inside it: at $5$ metres the reading is $0.1152$ and at $8$ metres it is $0.045$. The claim would hold only at a distance strictly under six metres. The reading at six metres equals the night cap instead of exceeding it, so the statement is False.`,
  },
  {
    sort_order: 58,
    explanation_index: 3,
    text: String.raw`**D.** → False

An absolute drop needs both endpoint levels, because the shortcuts available on a power law govern ratios rather than fixed decrements:

$$I(2)=0.72,\qquad I(3)=\frac{2.88}{9}=0.32,\qquad I(2)-I(3)=0.40$$

That subtraction contradicts the stated figure directly, and the figure also carries a modelling error. Half a watt per square metre lost over one metre would suggest a constant decrement per metre, which an inverse-square law never produces: the next metre out costs only $0.32-0.18=0.14$, and the metre after that costs $0.18-0.1152=0.0648$. Ratios are what stay fixed here, since each such step multiplies the reading by $(d/(d+1))^{2}$. The move from two to three metres costs $0.40$ rather than $0.50$, so the statement is False.`,
  },
  {
    sort_order: 60,
    explanation_index: 1,
    text: String.raw`**B.** → True

At the capped crew size the model can be evaluated directly, taking the square root first because $36=6^{2}$:

$$T(36)=20\sqrt{36}=20(6)=120$$

The logged shift supplies an independent route. Crew rises by the factor $36/16=9/4$, and that factor reaches throughput through the exponent $0.5$:

$$80\sqrt{\frac{9}{4}}=80\left(\frac{3}{2}\right)=120$$

Both routes land on the same figure, which is the useful check when only one shift was ever logged. They also make the diminishing return concrete: twenty extra drivers more than double the crew, yet throughput rises by only half, from $80$ to $120$ pallets per hour. Per driver that is $10/3$ pallets against the $5$ pallets of the logged crew. With $36$ drivers the model predicts $120$ pallets per hour, so the statement is True.`,
  },
  {
    sort_order: 60,
    explanation_index: 4,
    text: String.raw`**E.** → True

Throughput has a positive coefficient and a positive exponent, so it increases with crew size and the largest admissible crew produces the largest admissible output:

$$s_{1}<s_{2}\quad\Rightarrow\quad 20\sqrt{s_{1}}<20\sqrt{s_{2}}$$

The staffing cap therefore transfers straight onto output, and the ceiling is attained at the boundary rather than merely approached:

$$\max_{0<s\le36}20\sqrt s=20\sqrt{36}=120$$

Because the maximum is reached, the phrase at most is the right one: $120$ pallets per hour is permitted and nothing higher is. Inverting the claim confirms the direction, since $150$ pallets per hour would require $s=(150/20)^{2}=56.25$ drivers, and even $121$ pallets per hour would require about $36.6$ drivers. Every output above $120$ lies outside the safety rule, so the statement is True.`,
  },
];
