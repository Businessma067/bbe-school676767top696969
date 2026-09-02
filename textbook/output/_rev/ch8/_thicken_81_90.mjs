import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function insertBeforeCloser(text, extra) {
  const t = text.trimEnd();
  const idx = t.lastIndexOf("\n");
  return t.slice(0, idx).trimEnd() + "\n\n" + extra.trim() + "\n\n" + t.slice(idx + 1);
}

const extras = {
  "math-8-81": {
    0: `The leftover exponent $3>1$, so absorbed power grows faster than speed. A proportional law would have carried exponent $1$. Drag itself only has exponent $2$; multiplying by speed raises that to $3$. The opposite verdict would have needed leftover exponent $1$ on $P$, hence drag independent of speed. The doubling record $2^{r}=4$ locks $r=2$ on drag and $3$ on power.`,
    1: `With power exponent $3$, doubling speed multiplies absorbed power by $8$, not by $2$. Drag itself only quadrupled, because its exponent was $2$; multiplying by the doubled speed doubles that factor again, from $4$ to $8$.

**1.** Checking the recovered levels: $P(8)=256$ and $P(16)=\\frac{1}{2}\\cdot 4096=2048$, and $2048/256=8$. The eightfold is sitting on a doubled pursuit speed.

**2.** A rushed solver who doubled $P(8)=256$ to $512$ would have called the statement true. That is leftover exponent $1$ on power.

**3.** The opposite verdict would have needed $P\\propto v$. Then $F$ would have been independent of $v$. The doubling record on drag forbids a constant $F$. Power rises eightfold, not twofold.`,
    2: `From $r=2$ and $A(144-64)=40$, one has $A=\\frac{1}{2}$ and $P(v)=\\frac{1}{2}v^{3}$. The leftover slope is $P'(v)=\\frac{3}{2}v^{2}$. At $8$ m/s that is $96$. At $12$ m/s it is $216$. Because $216>96$, the extra metre costs more watts at $12$ m/s than at $8$ m/s.

**1.** A finite one-metre step agrees. $P(9)-P(8)=\\frac{1}{2}(729-512)=108.5$ watts, while $P(13)-P(12)=\\frac{1}{2}(2197-1728)=234.5$ watts. Later metres cost more.

**2.** A rushed solver who saw $P(12)=864>P(8)=256$ and inferred a steeper extra metre at the slow speed, because "there is more room to grow," would have mixed a lower level with a shallower slope.

**3.** The opposite verdict would have needed leftover exponent on $P$ below $1$, so that $P'$ would fall. The recovered cubic climbs. Changing $A$ scales both slopes by the same factor and cannot reverse $216>96$.`,
    3: `Two hundred and fifty-six sits under three hundred. Using drag $F(8)=\\frac{1}{2}\\cdot 64=32$ N times speed $8$ is the same check. A rushed solver who used $P(12)=864$ against $300$ would have named the faster run. Letter D names $8$ m/s. The opposite verdict would have needed $A>300/512\\approx 0.586$. The $40$ N gap locks $A=\\frac{1}{2}$.`,
    4: `Eight hundred and sixty-four sits past eight hundred, not under it. The faster run has already broken the eight-hundred-watt line, and the rider's $500$ W ceiling is long gone. A rushed solver who used $P(8)=256$ against $800$ would have named the slow run. Letter E names $12$ m/s. The opposite verdict would have needed $A\\le 800/1728\\approx 0.463$. The logged gap locks $A=\\frac{1}{2}$.`,
  },
  "math-8-82": {
    0: `The doubling record is $2^{r}=\\frac{1}{8}$, so $r=-3$. Inverse proportionality would mean exponent $-1$, which would cut the signal in half when depth doubles. The recorded factor is $2^{-3}=\\frac{1}{8}$. The locator falls faster than an inverse-depth law. The opposite verdict would have needed $r=-1$. The doubling record is one eighth, not one half.`,
    1: `Doubling depth multiplies the signal by $\\frac{1}{8}$, not by $\\frac{1}{2}$. The recorded factor is one eighth, four times steeper than a halving. Inverse-linear thinking is the mismatch. Checking $S(2)=50$ and $S(4)=6.25$ is that eighth sitting in the calibration. The opposite verdict would have needed $r=-1$. Letter A already refused inverse proportionality; this letter is the same record read as a doubling claim.`,
    2: `A nonzero power inverts to another power. From $S=400 x^{-3}$, isolating depth raises both sides to the reciprocal of $-3$ and leaves $x=400^{\\frac{1}{3}} S^{-\\frac{1}{3}}$. Depth is a monomial in the reading. Falling signal does not introduce a logarithm.

Checking a recovered pair: at $S=50$ the inverse returns $x=2$, the calibration. At $S=3.2$ it returns $x=5$, letter E. The inverse is faithful to both named readings. The opposite verdict would have needed a decaying exponential in depth, which inverts to a logarithm.`,
    3: `Four metres is one doubling of the calibration depth of $2$ m, so $S(4)=50\\cdot\\frac{1}{8}=6.25$, which sits under $7$. Inverse-cube decay is already under seven millivolts. A rushed solver who halved $50$ to $25$ would have sat above $7$ and flipped the verdict. Inverse-linear thinking is too slow. The opposite verdict would have needed $A>7\\cdot 64=448$. The calibration locks $A=400$.`,
    4: `A reading of $3.2$ mV inverts $400 x^{-3}=3.2$ to $x^{3}=125$ and $x=5$. Five metres is not more than $8$ m. A second doubling from $4$ m would have been $8$ m and a reading $S(8)=50/64\\approx 0.78$ mV, much smaller than $3.2$. A rushed solver who doubled $4$ m with the reading would have claimed $8$ m and called the statement true. The opposite verdict would have needed a smaller $A$, so that $3.2$ mV sat at a greater depth. The calibration locks $x=5$ m at $3.2$ mV.`,
  },

  "math-8-83": {
    0: `Three quarters sits below one, so each extra gram adds less oxygen demand than the gram before it. Oxygen demand lags body mass. The overview recovered $A=5$ and $D(m)=5m^{\\frac{3}{4}}$. The opposite verdict would have needed $r\\ge 1$. The $95$ millilitre gap between $16$ g and $81$ g already forces $r=\\frac{3}{4}$.`,
    1: `Demand per square centimetre is $D/G$. With $A=5$ and $B=3$ that intensity is $\\frac{5}{3}m^{\\frac{1}{12}}$. The leftover exponent $\\frac{1}{12}$ is positive, so intensity rises with body mass. It does not fall. Demand outruns gill area because $\\frac{3}{4}>\\frac{2}{3}$.

**1.** At $m=1$, intensity is $5/3$. At $m=4096=2^{12}$, $m^{\\frac{1}{12}}=2$ and intensity is $10/3$. It rose. At the gill record $m=64$, $G(64)=48$ and $D(64)=5\\cdot 64^{\\frac{3}{4}}=5\\cdot (2^{6})^{\\frac{3}{4}}=5\\cdot 2^{\\frac{9}{2}}=80\\sqrt{2}\\approx 113$, so $D/G\\approx 2.35$, already above $5/3\\approx 1.67$.

**2.** A rushed solver who saw both exponents below $1$ and inferred that every intensity falls would have missed the difference $\\frac{3}{4}-\\frac{2}{3}=\\frac{1}{12}>0$.

**3.** The opposite verdict would have needed gill exponent at least demand exponent. The stem is $\\frac{2}{3}<\\frac{3}{4}$.`,
    2: `Because $\\frac{2}{3}<1$, two small fish out-area one fish of twice the mass. With $G(m)=3m^{\\frac{2}{3}}$, $2G(16)=24\\cdot 2^{\\frac{2}{3}}$ and $G(32)=24\\cdot 2^{\\frac{1}{3}}$, and $2^{\\frac{2}{3}}>2^{\\frac{1}{3}}$. Merging the two $16$ g fish into one $32$ g fish loses gill area.

A rushed solver who treated gill as proportional to mass would have claimed a tie at equal total mass. That is exponent $1$. The opposite verdict would have needed $r\\ge 1$ on $G$. The $64$ g record with exponent $\\frac{2}{3}$ already refuses that.`,
    3: `With $A=5$, a $256$ g fish is $4^{4}$, so the three-quarters power is $4^{3}=64$ and $D(256)=320$. Three hundred and twenty sits above three hundred. A rushed solver who scaled $D(16)=40$ by $256/16=16$ linearly would have claimed $640$, still above $300$ but for the wrong shape. The opposite verdict would have needed $A\\le 300/64\\approx 4.69$. The $95$ ml gap locks $A=5$.`,
    4: `A tank total is a sum of individual demands, never one application of $D$ to the pooled mass. Sixteen fish of $16$ g demand $16\\cdot 40=640$, which sits above $600$. Using $D(256)=320$ in place of $16D(16)$ is the pooling mix-up.

**1.** The pooled mass is $256$ g, the same as letter D's single fish. One $256$ g fish demands $320$; sixteen $16$ g fish demand $640$. Because $r<1$, splitting mass raises total demand.

**2.** A rushed solver who used $D(256)$ against $600$ would have called the statement true. The claim is a tank of sixteen small fish, not one large fish.

**3.** The opposite verdict would have needed $16D(16)\\le 600$, hence $D(16)\\le 37.5$. The gap locks $D(16)=40$.`,
  },

  "math-8-84": {
    0: `The doubling factor $16=2^{4}$ forces $k=4$. Four sits well above one, so each extra millimetre of bore adds more delivery than the millimetre before it. A proportional law would have carried exponent $1$. The opposite verdict would have needed an exponent of $1$ or less. The doubling record is sixteenfold, not twofold.`,
    1: `Doubling the radius would double the flow only if the exponent were $1$. With exponent $4$ the factor is $16$, which is the recorded doubling factor itself. Flow rises sixteenfold, not twofold. Checking $Q(2)=48$ and $Q(4)=3\\cdot 256=768$, and $768/48=16$. The opposite verdict would have needed $k=1$. Letter A already used $k=4$ as an outrunning; this letter is the same record read as a doubling claim.`,
    2: `From $k=4$ and $A\\cdot 16=48$, the coefficient is $A=3$. The mean velocity index is then $\\frac{Q}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}$. The leftover exponent $2$ is not zero, so the index grows with the radius. It is not the same in every tube.

**1.** At $r=1$, the index is $3/\\pi$. At $r=2$, it is $12/\\pi$, four times larger. Poiseuille-style fourth-power flow over a square cross-section leaves a square in the mean velocity.

**2.** A rushed solver who divided $Q$ by $r^{2}$ once at the bench, $48/(\\pi\\cdot 4)$, and treated that as a law would have missed the leftover $r^{2}$.

**3.** The opposite verdict would have needed $k=2$, so that $Q/(\\pi r^{2})$ was constant. The doubling record is $16=2^{4}$, not $2^{2}=4$.`,
    3: `With $Q(r)=3r^{4}$, a tube of radius $3$ mm delivers $Q(3)=3\\cdot 81=243$, which sits above $200$. Three to the fourth is $81$. A rushed solver who used $3^{2}=9$ times $3$ would have claimed $27$, under $200$, and flipped the verdict. The opposite verdict would have needed $A\\le 200/81\\approx 2.47$. The bench locks $A=3$.`,
    4: `At radius $1$ mm every power of $1$ is $1$, so $Q(1)=3$, which sits under $10$. The coefficient itself is the one-millimetre delivery. The fourth-power law drops that fast when the bore shrinks below the $2$ mm bench. A rushed solver who halved $Q(2)=48$ twice would have claimed $12$, still above $10$, or used inverse-linear $24$, above $10$. The opposite verdict would have needed $A>10$. The bench locks $A=3$.`,
  },

  "math-8-85": {
    0: `The quadrupling record is $4^{r}=\\frac{1}{16}$, so $r=-2$. Doubling distance multiplies dose by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$. A half would have been inverse-linear; this survey's quadrupling record is inverse-square. Checking $H(3)=80$ and $H(6)=20$ is that quarter. The opposite verdict would have needed $r=-1$.`,
    1: `From $r=-2$ and $A\\cdot 3^{-2}=80$, the coefficient is $A=720$. The leftover slope is $H'(d)=-1440 d^{-3}$. Its size is $\\frac{160}{3}$ at $3$ m and $\\frac{20}{3}$ at $6$ m. An extra metre cuts more dose at three metres than at six. Inverse-square decay is front-loaded.

**1.** A finite step agrees. From $3$ to $4$ m, $H(4)=720/16=45$, a drop of $35$ from $80$. From $6$ to $7$ m, $H(7)=720/49\\approx 14.7$, a drop of about $5.3$ from $20$. The near metre cuts more.

**2.** A rushed solver who saw $H(6)=20$ closer to the $5$ barrier and inferred a steeper extra metre there would have mixed a smaller remaining dose with a steeper cut.

**3.** The opposite verdict would have needed $|H'|$ to grow with $d$. For $r=-2$, $|H'|$ falls. Changing $A$ scales both slopes by the same factor and cannot reverse $\\frac{160}{3}>\\frac{20}{3}$.`,
    2: `A nonzero power inverts to another power. From $H=720 d^{-2}$, isolating distance leaves $d=\\sqrt{720}\\, H^{-\\frac{1}{2}}$. The new exponent is the reciprocal of $-2$. Distance needed for a given dose rate is still a monomial in $H$. Checking $H=80$ returns $d=3$, the survey. Checking $H=5$ returns $d=12$, the barrier. The opposite verdict would have needed a decaying exponential in distance.`,
    3: `Six metres is a doubling of the $3$ m survey. Inverse square quarters the $80$ reading: $H(6)=20$, which sits under $25$. A rushed solver who halved $80$ to $40$ would have sat above $25$ and flipped the verdict. Inverse-linear thinking is too slow. The opposite verdict would have needed $A>25\\cdot 36=900$. The survey locks $A=720$.`,
    4: `From $H(3)=80$ down to $H=5$ is a factor $\\frac{1}{16}$, hence a fourfold distance: $d=3\\cdot 4=12$. Twelve metres is not farther than $15$. The barrier sits at twelve metres.

**1.** A rushed solver who inverted as if $r=-1$ would have claimed $d=80/5\\cdot 3=48$ m, past $15$, and flipped the verdict. Inverse-linear thinking overstates the barrier.

**2.** Checking $H(15)=720/225=3.2$, already under $5$. Fifteen metres is past the barrier, not the barrier.

**3.** The opposite verdict would have needed a smaller $A$, so that the inverted $d$ rose through $15$. The survey locks $d=12$ m at $5$ microsieverts per hour.`,
  },

  "math-8-86": {
    0: `Radius is a two-thirds power of time and area squares that radius, so the composed exponent is $\\frac{2}{3}\\cdot 2=\\frac{4}{3}$. A monomial in $t$ remains a monomial. The overview recovered $S(t)=225\\pi\\, t^{\\frac{4}{3}}$. Stopping at radius would have left exponent $\\frac{2}{3}$. The opposite verdict would have needed a stage that was not a power. Both the radius law and the disc formula are powers.`,
    1: `The composed exponent $\\frac{4}{3}>1$, so the stained area outruns elapsed time. A proportional disc would have carried exponent $1$. Area can grow faster than time even while radius grows more slowly than time. Checking $S(8)/S(1)=(8)^{\\frac{4}{3}}=16$, while time grew by $8$: $16>8$. The opposite verdict would have needed composed exponent at most $1$. Squaring a two-thirds radius pushes the product to $\\frac{4}{3}$.`,
    2: `Doubling time multiplies area by $2^{\\frac{4}{3}}\\approx 2.52$, not by $2$. Exponent $1$ would have returned the factor $2$. Linear thinking understates the disc. Checking from hour $1$ to hour $2$: radius scales by $2^{\\frac{2}{3}}\\approx 1.59$ and area by the square of that, $2^{\\frac{4}{3}}$. The opposite verdict would have needed composed exponent $1$.`,
    3: `The shape factors are $8^{\\frac{2}{3}}=4$ and $1^{\\frac{2}{3}}=1$, so $3A=45$ and $A=15$. At hour $8$: $r(8)=15\\cdot 4=60$, which sits above $50$. That is also $r(1)+45=15+45$, the first-hour radius plus the logged gap. A rushed solver who treated $45$ as $r(8)$ would have compared $45$ to $50$ and flipped the verdict. The $45$ is a growth, not a level. The opposite verdict would have needed $A\\le 50/4=12.5$. The logged growth locks $A=15$.`,
    4: `A radius of $240$ metres inverts $15 t^{\\frac{2}{3}}=240$ to $t^{\\frac{2}{3}}=16$ and $t=64$. Sixty-four hours is not under $50$. The plume takes sixty-four hours to reach two hundred and forty metres.

**1.** A rushed solver who inverted as if $r=1$ would have claimed $t=16$, under $50$, and flipped the verdict. Linear inversion understates the wait when $r<1$.

**2.** Checking $r(50)=15\\cdot 50^{\\frac{2}{3}}\\approx 15\\cdot 13.57=203.6$, still short of $240$. Fifty hours is not a near miss on $240$ m.

**3.** The opposite verdict would have needed a larger $A$, so that the inverted $t$ fell through $50$. The logged growth locks $t=64$ h at $240$ m.`,
  },

  "math-8-87": {
    0: `A nonzero power inverts to another power. From $Q=16 h^{\\frac{3}{2}}$, isolating head leaves $h=(Q/16)^{\\frac{2}{3}}$. Head needed for a given discharge is still a monomial in $Q$. A change of units does not change that: centimetres rescale the coefficient and leave the inverse a power. Checking $Q=2$ returns $h=0.25$, the gauging. The opposite verdict would have needed a law that was not a pure power.`,
    1: `The exponent is still $\\frac{3}{2}$ after rewriting in centimetres. A change of units cannot move the exponent below one. Discharge still outruns head. Only the coefficient absorbs the $100^{\\frac{3}{2}}$ rescaling. Checking $Q(0.50)=16\\cdot 0.50^{\\frac{3}{2}}=16\\cdot 0.125\\sqrt{2}\\approx 2.83$ versus $Q(0.25)=2$: doubling head multiplies discharge by $2\\sqrt{2}\\approx 2.83>2$. The opposite verdict would have needed the weir exponent to have been $1$. Units cannot do that.`,
    2: `Doubling head multiplies discharge by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$. Changing the input unit to centimetres rescales only the coefficient; it does not flatten the exponent to $1$. Discharge would double with head only for a linear weir. The opposite verdict would have needed $r=1$. Letter B already used $r=\\frac{3}{2}$ as an outrunning; this letter is the same exponent read as a doubling claim.`,
    3: `The gauging gives $0.25^{\\frac{3}{2}}=0.125$, so $A=16$ and $Q=16 h^{\\frac{3}{2}}$. At a unit head the power is $1$: $Q(1)=16$, which sits under $20$. A rushed solver who scaled $2$ m³/s by $1/0.25=4$ linearly would have claimed $8$, still under $20$, or by $4^{\\frac{3}{2}}=8$ correctly to $16$. The opposite verdict would have needed $A>20$. The gauging locks $A=16$.`,
    4: `At $4$ metres, $4^{\\frac{3}{2}}=8$ and $Q(4)=16\\cdot 8=128$, which is not under $100$. Four metres is sixteen times the $0.25$ m gauging in head, hence $16^{\\frac{3}{2}}=64$ times the gauging of $2$, which is $128$. A rushed solver who used $16\\times 2=32$, a linear sixteenfold, would have sat under $100$ and flipped the verdict. The opposite verdict would have needed $A\\le 100/8=12.5$. The gauging locks $A=16$.`,
  },

  "math-8-88": {
    0: `A $300\\%$ rise is the multiplier $4=2^{2}$, so $r=2$. Two sits above one, so each extra tonne adds more litres than the tonne before it. Fuel use grows faster than batch mass. A rushed solver who read $300\\%$ as "about three times" a doubling and guessed $r\\approx 1.6$ would have still sat above one, for a slightly wrong exponent. The exact match is $2^{r}=4$. The opposite verdict would have needed an exponent of $1$ or less. The doubling note is a quadrupling of fuel.`,
    1: `Doubling the batch multiplies fuel by $4$, not by $2$. A $300\\%$ rise is a multiplier of $4$, not of $2$. Fuel use is quadrupled. Linear thinking reads "$300\\%$ more" as if it were a doubling plus a bit, rather than $2^{r}$. Checking $F(2)=12$ and $F(4)=48$, a quadrupling of fuel on a doubling of batch. The opposite verdict would have needed $r=1$, a $100\\%$ rise on a doubling. The note is $300\\%$.`,
    2: `With $r=2$ fuel per tonne is $A x$, a positive leftover power, so litres per tonne climb in proportion to batch mass. The leftover exponent $r-1=1$ is not negative. The per-tonne figure rises, it does not fall. Checking $F(2)/2=6$ and $F(6)/6=18$. Intensity tripled with a threefold batch. The opposite verdict would have needed $r<1$. The doubling note locked $r=2$.`,
    3: `From $r=2$ and $A(36-4)=96$, the coefficient is $A=3$, so $F(x)=3x^{2}$. A $10$-tonne batch uses $F(10)=300$, which sits above $250$. From the $2$ t batch, a fivefold mass is a twenty-fivefold fuel bill: $12\\cdot 25=300$. A rushed solver who scaled $12$ by $10/2=5$ linearly would have claimed $60$, under $250$, and flipped the verdict. The opposite verdict would have needed $A\\le 2.5$. The $96$ litre gap locks $A=3$.`,
    4: `A $6$-tonne batch uses $F(6)=108$, which is not under $100$. That $108$ is also $12+96$, the $2$ t fuel plus the logged gap. The six-tonne batch does not still use under one hundred litres. A rushed solver who treated $96$ as $F(6)$ would have compared $96$ to $100$ and called the statement true. The $96$ is a gap, not a level. The opposite verdict would have needed $A\\le 100/36\\approx 2.78$. The gap locks $A=3$.`,
  },

  "math-8-89": {
    0: `Mass flow is a square root of throttle and the index is a fourth power of mass, so the composed exponent is $\\frac{1}{2}\\cdot 4=2$. The composition is a monomial in $t$. The overview recovered $P\\circ m=t^{2}$. Stopping after $m(t)$ would have left exponent $\\frac{1}{2}$. The opposite verdict would have needed a stage that was not a power. Both stages in the stem are monomials.`,
    1: `The leftover exponent is $2$, not $1$, so the index grows faster than the throttle, not in proportion to it. Doubling throttle multiplies the index by $4$. Proportionality would have needed the two stages to cancel to exponent $1$. Checking $P(m(9))=81$ and $P(m(18))=324$, a fourfold index on a doubled throttle. The opposite verdict would have needed composed exponent $1$, for instance a square-root index on a square-root mass flow.`,
    2: `From $3A=6$, the coefficient is $A=2$, so $m(t)=2 t^{\\frac{1}{2}}$. Mass flow per unit of throttle is $2 t^{-\\frac{1}{2}}$, which falls from $\\frac{2}{3}$ at $t=9$ to $\\frac{2}{5}$ at $t=25$. The leftover exponent is negative. A rushed solver who saw $m(25)=10>m(9)=6$ and inferred a rising intensity would have mixed a higher total with a higher per-throttle figure. The opposite verdict would have needed leftover exponent $0$ on $m/t$, hence $m$ linear in $t$.`,
    3: `At throttle $25$, $\\sqrt{25}=5$ and $m(25)=2\\cdot 5=10$, which sits above $8$. Linear scaling from $m(9)=6$ would have claimed about $16.7$ and overshot; the square root is slower. A rushed solver who used $P(m(25))=625$ against $8$ would have mixed the index with mass flow. Letter D names mass flow. The opposite verdict would have needed $A\\le 8/5=1.6$. The calibration locks $A=2$.`,
    4: `Composing first gives $P\\circ m=t^{2}$, because $\\frac{2^{4}}{16}=1$. An index of $81$ is then $t^{2}=81$ and $t=9$, not a setting above $20$. Nine is the calibration throttle itself: $m(9)=6$ and $P(6)=81$.

**1.** A rushed solver who inverted the mass-flow stage only, $2\\sqrt{t}=81$, would have claimed $t\\approx 1640$, well above $20$, and flipped the verdict. The $81$ is an index, not a mass flow.

**2.** Checking $t=20$: $m(20)=2\\sqrt{20}\\approx 8.94$ and $P\\approx 8.94^{4}/16\\approx 400$, already past $81$. Twenty is past the $81$-index throttle, not short of it.

**3.** The opposite verdict would have needed a smaller composed coefficient, so that index $81$ sat at a larger $t$. The calibration collapses $P\\circ m$ to $t^{2}$ and locks $t=9$.`,
  },

  "math-8-90": {
    0: `App L's log gives $5a=20$, so $a=4$. App Q's log gives $k=\\frac{1}{5}$. Setting $4\\sqrt{d}=\\frac{1}{5}d$ yields a unique positive root $d=400$. A square-root versus a line cannot meet twice on $d>0$. They meet only once, and the wait there is $80$ minutes, well past the cap.

**1.** A rushed solver who saw two powers and expected two crossings would have looked for a second root. Dividing by $\\sqrt{d}>0$ leaves a linear equation in $\\sqrt{d}$, one root.

**2.** Checking $d=25$: $L=20$ and $Q=5$, so L is slower. At $d=100$: $L=40$ and $Q=20$, L still slower. At $d=400$ they tie at $80$. At $d=900$: $L=60$ and $Q=180$, Q is slower. One crossing.

**3.** The opposite verdict would have needed a second positive root, which would have required leftover exponent on the ratio $Q/L$ to change sign twice. The ratio is $\\frac{1}{20}\\sqrt{d}$, monotone.`,
    1: `Past $d=400$ the ratio $\\frac{Q}{L}=\\frac{1}{20}\\sqrt{d}$ exceeds $1$ and keeps climbing, so App Q stays slower. Once App L quotes a shorter wait, App Q never catches up. A second crossing would need the leftover square root to change sign. The opposite verdict would have needed Q to have a higher leftover exponent than L, so that Q could recross from above. Q is linear; L is a square root. After the meeting, L stays ahead.`,
    2: `App L's wait per kilometre is $L(d)/d=4 d^{-\\frac{1}{2}}$, which falls from $0.8$ at $d=25$ to $0.4$ at $d=100$. The leftover exponent is negative. Longer trips still take more minutes in total, but fewer minutes per kilometre on the square-root app. A rushed solver who saw $L(100)=40>L(25)=20$ and inferred a rising per-kilometre figure would have mixed a higher total with a higher intensity. The opposite verdict would have needed leftover exponent $0$ on $L/d$, hence $L$ linear in $d$. That is App Q, not App L.`,
    3: `App L's $20$-minute cap binds at $4\\sqrt{d}=20$, so $d=25$. Thirty kilometres sits past $25$, so $L(30)>20$. Under the cap, App L cannot serve trips longer than twenty-five kilometres. Mixing L's cap with Q's cap at $d=100$ is the mix-up. Checking $L(30)=4\\sqrt{30}\\approx 21.9>20$. The opposite verdict would have needed L's cap past $30$ km, hence a smaller $a$. The log locks $a=4$ and the cap at $d=25$.`,
    4: `At the meeting $d=400$ both apps quote $80$ minutes, which sits above $70$. $L(400)=4\\cdot 20=80$ and $Q(400)=400/5=80$. A rushed solver who used L's cap wait of $20$ against $70$ would have named a different distance. Letter E names $400$ km. The opposite verdict would have needed the meeting wait $\\le 70$, hence a smaller pair of coefficients. The two logs lock the meeting at $80$ minutes.`,
  },
};

const fp = path.join(__dirname, "81_90.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  for (const [j, extra] of Object.entries(ex)) {
    t.tactical_explanations[Number(j)] = insertBeforeCloser(
      t.tactical_explanations[Number(j)],
      extra
    );
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  console.log(t.id, t.tactical_explanations.map(words).join(" "), extras[t.id] ? "p" : "-");
}
