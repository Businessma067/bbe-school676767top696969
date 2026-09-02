import { applyFile } from "./_apply_dedupe.mjs";

const patches = {
  "math-8-81": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $P(v)=\\frac{1}{2}v^{3}$. Drag times speed adds one to the exponent, and $3>1$. Each extra metre per second then costs more watts than the metre before it. A proportional law would have carried exponent $1$. The cubic is steeper.",
      "**B.** → False\n\nDoubling speed would double power only if the exponent were $1$. With exponent $3$ the factor is $2^{3}=8$. Drag itself only quadrupled, because its exponent was $2$; multiplying by the doubled speed doubles that factor again, from $4$ to $8$. Power rises eightfold, not twofold.",
      "**C.** → True\n\nThe leftover slope $P'(v)=\\frac{3}{2}v^{2}$ is itself rising. The overview already listed $P'(8)=96$ and $P'(12)=216$. Because $216>96$, the extra metre costs more watts at $12$ m/s than at $8$ m/s. An exponent above one makes later metres dearer.",
      "**D.** → True\n\nThe overview already lists $P(8)=256$, which sits under $300$. Eight cubed is $512$, times $\\frac{1}{2}$. Using drag $32$ N times speed $8$ is the same check. The rider is still under three hundred watts at the slower run.",
      "**E.** → False\n\nThe overview already lists $P(12)=864$, which sits past $800$, not under it. Twelve cubed is $1728$, times $\\frac{1}{2}$ is $864$. The faster run has already broken the eight-hundred-watt line. Mixing this with the $8$ m/s reading is the trap.",
    ],
  },
  "math-8-82": {
    tacticals: [
      "**A.** → False\n\nThe overview already recovered $r=-3$. Inverse proportionality would mean exponent $-1$, which would cut the signal in half when depth doubles. The recorded doubling factor is $2^{-3}=\\frac{1}{8}$. The locator falls faster than an inverse-depth law.",
      "**B.** → False\n\nDoubling depth multiplies the signal by $2^{-3}=\\frac{1}{8}$, not by $\\frac{1}{2}$. The recorded factor is one eighth, four times steeper than a halving. Inverse-linear thinking is the trap. This is the same comparison as A, read as a doubling claim.",
      "**C.** → True\n\nThe overview already inverted to $x=400^{\\frac{1}{3}}S^{-\\frac{1}{3}}$. A nonzero power inverts to another power: isolating depth raises both sides to the reciprocal of $-3$. Depth is a monomial in the reading. Falling signal does not introduce a logarithm.",
      "**D.** → True\n\nThe overview already lists $S(4)=6.25$, which sits under $7$. Four metres is one doubling of the calibration depth of $2$ m, so each doubling multiplies the $50$ mV reading by $\\frac{1}{8}$: $50\\cdot\\frac{1}{8}=6.25$. Inverse-cube decay is already under seven millivolts.",
      "**E.** → False\n\nThe overview already inverted $3.2$ mV to $x=5$ m, which is not more than $8$ m. Five cubed is $125$, and $400/3.2=125$. The claimed burial overshoots the inverted depth. A second doubling from $4$ m would have been $8$ m and a much smaller reading.",
    ],
  },
  "math-8-83": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $D(m)=5m^{\\frac{3}{4}}$. Three quarters sits below one, so each extra gram adds less oxygen demand than the gram before it. The leftover slope $D'(m)=\\frac{15}{4}m^{-\\frac{1}{4}}$ is itself falling. Oxygen demand lags body mass.",
      "**B.** → False\n\nThe overview already composed $\\frac{D}{G}=\\frac{5}{3}m^{\\frac{1}{12}}$. The leftover exponent $\\frac{1}{12}$ is positive, so intensity rises with body mass. It does not fall. Demand outruns gill area, just barely, because $\\frac{3}{4}>\\frac{2}{3}$.",
      "**C.** → False\n\nBecause $\\frac{2}{3}<1$, two small fish out-area one fish of twice the mass. The overview's comparison is $2G(16)>G(32)$: leftover factors $2^{\\frac{2}{3}}>2^{\\frac{1}{3}}$. Merging the two $16$ g fish into one $32$ g fish loses gill area.",
      "**D.** → True\n\nThe overview already lists $D(256)=320$, which sits above $300$. Two hundred and fifty-six is $4^{4}$, so the three-quarters power is $4^{3}=64$, times $5$. A linear guess from $D(16)=40$ would have claimed $640$ and overshot.",
      "**E.** → False\n\nA tank total is a sum of individual demands, never one application of $D$ to the pooled mass. Sixteen fish of $16$ g demand $16\\cdot 40=640$, which sits above $600$. Using $D(256)$ in place of $16D(16)$ is the pooling trap.",
    ],
  },
  "math-8-84": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $k=4>1$ from the doubling factor $16$. Each extra millimetre of bore adds more delivery than the millimetre before it. A proportional law would have carried exponent $1$. Four sits well above one, and doubling already multiplies flow by $16$.",
      "**B.** → False\n\nDoubling the radius would double the flow only if the exponent were $1$. With exponent $4$ the factor is $2^{4}=16$, which is the recorded doubling factor itself. Flow rises sixteenfold, not twofold. Linear thinking is the trap.",
      "**C.** → False\n\nThe mean velocity index is $\\frac{3}{\\pi}r^{2}$. The leftover exponent $2$ is not zero, so the index grows with the radius. It is not the same in every tube. Dividing a fourth power by a square leaves a square, not a constant.",
      "**D.** → True\n\nThe overview already lists $Q(3)=243$, which sits above $200$. Three to the fourth is $81$, times $3$. Widening from the $2$ mm bench at $48$ L/h to $3$ mm already pushes delivery by $195$ litres per hour, past the $200$ cutoff.",
      "**E.** → False\n\nAt radius $1$ mm every power of $1$ is $1$, so $Q(1)=3$, which sits under $10$. The fourth-power law drops that fast when the bore shrinks below the $2$ mm bench. The coefficient itself is the one-millimetre delivery.",
    ],
  },
  "math-8-85": {
    tacticals: [
      "**A.** → False\n\nThe overview already recovered $r=-2$. Doubling distance multiplies dose by $2^{-2}=\\frac{1}{4}$, not by $\\frac{1}{2}$. Inverse square is steeper than inverse proportion. The quadrupling note $4^{-2}=\\frac{1}{16}$ is the same exponent.",
      "**B.** → True\n\nThe slope $H'(d)=-1440d^{-3}$ has size $\\frac{160}{3}$ at $3$ m and $\\frac{20}{3}$ at $6$ m. An extra metre cuts more dose at three metres than at six. Inverse-square decay is front-loaded.",
      "**C.** → True\n\nThe overview already inverted to $d=\\sqrt{720}\\,H^{-\\frac{1}{2}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $-2$. Distance needed for a given dose rate is still a monomial in $H$.",
      "**D.** → True\n\nThe overview already lists $H(6)=20$, which sits under $25$. Six metres is a doubling of the $3$ m survey, so inverse square quarters the $80$ reading to $20$. That is the same identity as A, read as a level.",
      "**E.** → False\n\nThe overview already placed the barrier at $d=12$ m, which is not farther than $15$. From $H(3)=80$ down to $H=5$ is a factor $\\frac{1}{16}$, hence a fourfold distance: $3\\cdot 4=12$. The barrier sits at twelve metres.",
    ],
  },
  "math-8-86": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $S(t)=225\\pi t^{\\frac{4}{3}}$. Radius is a two-thirds power of time, area squares that, and $\\frac{2}{3}\\cdot 2=\\frac{4}{3}$. A monomial in $t$ remains a monomial. Stopping at radius would have left exponent $\\frac{2}{3}$.",
      "**B.** → True\n\nThe composed exponent $\\frac{4}{3}>1$, so the stained area outruns elapsed time. A proportional disc would have carried exponent $1$. Four thirds is steeper. Area can grow faster than time even while radius grows more slowly than time.",
      "**C.** → False\n\nDoubling time multiplies area by $2^{\\frac{4}{3}}\\approx 2.52$, not by $2$. Exponent $1$ would have returned the factor $2$. The factor is about two and a half, not two. Linear thinking understates the disc.",
      "**D.** → True\n\nThe overview already lists $r(8)=60$, which sits above $50$. Eight hours contribute $8^{\\frac{2}{3}}=4$, times $15$. That is also $r(1)+45=15+45$, the first-hour radius plus the logged gap.",
      "**E.** → False\n\nThe overview already inverted $r=240$ to $t=64$ hours, which is not under $50$. Sixteen to the three-halves is $64$. The plume takes sixty-four hours to reach two hundred and forty metres.",
    ],
  },
  "math-8-87": {
    tacticals: [
      "**A.** → True\n\nThe overview already inverted to $h=(Q/16)^{\\frac{2}{3}}$. A nonzero power inverts to another power: the new exponent is the reciprocal of $\\frac{3}{2}$. Head needed for a given discharge is still a monomial in $Q$. A change of units does not change that.",
      "**B.** → True\n\nThe exponent is still $\\frac{3}{2}$ after rewriting in centimetres: $Q=0.016\\,h_{\\mathrm{cm}}^{\\frac{3}{2}}$. A change of units cannot move the exponent below one. Discharge still outruns head. Only the coefficient absorbs the $100^{\\frac{3}{2}}$ rescaling.",
      "**C.** → False\n\nDoubling head multiplies discharge by $2^{\\frac{3}{2}}\\approx 2.83$, not by $2$. The three-halves exponent outruns a proportional clock. Linear thinking is the trap, in metres or in centimetres.",
      "**D.** → True\n\nThe overview already lists $Q(1)=16$, which sits under $20$. At a unit head the power is $1$, so discharge equals the coefficient $A=16$. The gauging at $0.25$ m was only $2$ m$^{3}$/s; one metre still discharges $16$.",
      "**E.** → False\n\nThe overview already lists $Q(4)=128$, which is not under $100$. Four metres is sixteen times the $0.25$ m gauging in head, hence $16^{\\frac{3}{2}}=64$ times the gauging of $2$, which is $128$. That is not under one hundred.",
    ],
  },
  "math-8-88": {
    tacticals: [
      "**A.** → True\n\nThe overview already recovered $r=2$ from a $300\\%$ rise, which is the multiplier $4=2^{2}$. Two sits above one, so each extra tonne adds more litres than the tonne before it. Fuel use grows faster than batch mass.",
      "**B.** → False\n\nDoubling the batch multiplies fuel by $4$, not by $2$. A $300\\%$ rise is a multiplier of $4$, not of $2$. Fuel use is quadrupled. Linear thinking reads \"$300\\%$ more\" as if it were a doubling plus a bit, rather than $2^{r}$.",
      "**C.** → False\n\nFuel per tonne is $3x$, a positive leftover power, so litres per tonne climb in proportion to batch mass. The leftover exponent $r-1=1$ is not negative. The per-tonne figure rises, it does not fall.",
      "**D.** → True\n\nThe overview already lists $F(10)=300$, which sits above $250$. Ten squared is $100$, times $3$. From the $2$ t batch, a fivefold mass is a twenty-fivefold fuel bill: $12\\cdot 25=300$. The batch already uses three hundred litres.",
      "**E.** → False\n\nThe overview already lists $F(6)=108$, which is not under $100$. Six squared is $36$, times $3$. That $108$ is also $12+96$, the $2$ t fuel plus the logged gap. The six-tonne batch does not still use under one hundred litres.",
    ],
  },
  "math-8-89": {
    tacticals: [
      "**A.** → True\n\nThe overview already composed $P\\circ m=t^{2}$. Mass flow is a square root of throttle, the index is a fourth power of mass, and $\\frac{1}{2}\\cdot 4=2$. The composition is a monomial in $t$. Stopping after $m(t)$ would have left exponent $\\frac{1}{2}$.",
      "**B.** → False\n\nThe leftover exponent is $2$, not $1$, so the index grows faster than the throttle, not in proportion to it. Doubling throttle multiplies the index by $4$. Proportionality would have needed the two stages to cancel to exponent $1$.",
      "**C.** → True\n\nMass flow per unit of throttle is $2t^{-\\frac{1}{2}}$, which falls from $\\frac{2}{3}$ at $t=9$ to $\\frac{2}{5}$ at $t=25$. The leftover exponent is negative. Extra throttle still adds tonnes, but fewer per unit of setting.",
      "**D.** → True\n\nThe overview already lists $m(25)=10$, which sits above $8$. Twenty-five contributes a square root of $5$, times $2$. Linear scaling from $m(9)=6$ would have claimed about $16.7$ and overshot; the square root is slower.",
      "**E.** → False\n\nAn index of $81$ is $t^{2}=81$, so $t=9$, not a setting above $20$. The overview already listed that inversion. Nine is the calibration throttle itself: $m(9)=6$ and $P(6)=81$. The claimed \"above $20$\" invents a second root.",
    ],
  },
  "math-8-90": {
    tacticals: [
      "**A.** → False\n\nThe overview already placed the unique meeting at $d=400$. A square-root versus a line cannot meet twice on $d>0$: the ratio $\\frac{Q}{L}=\\frac{1}{20}\\sqrt{d}$ equals $1$ at a single root. They meet only once, and the wait there is $80$ minutes, well past the cap.",
      "**B.** → True\n\nPast $d=400$ the ratio $\\frac{1}{20}\\sqrt{d}$ exceeds $1$ and keeps climbing, so App Q stays slower. Once App L quotes a shorter wait, App Q never catches up. A second crossing would need the leftover square root to change sign.",
      "**C.** → True\n\nApp L's wait per kilometre is $4d^{-\\frac{1}{2}}$, which falls from $0.8$ at $d=25$ to $0.4$ at $d=100$. The leftover exponent is negative. Longer trips still take more minutes in total, but fewer minutes per kilometre on the square-root app.",
      "**D.** → False\n\nApp L's $20$-minute cap binds at $d=25$. Thirty kilometres sits past $25$, so $L(30)>20$. Under the cap, App L cannot serve trips longer than twenty-five kilometres. Mixing L's cap with Q's cap at $d=100$ is the trap.",
      "**E.** → True\n\nAt the meeting $d=400$ both apps quote $80$ minutes, which sits above $70$. Twenty squared is $400$, and $4\\cdot 20=80$ against $\\frac{1}{5}\\cdot 400=80$. Both already quote eighty minutes, more than seventy.",
    ],
  },
};

const r = applyFile(new URL("./81_90.json", import.meta.url), patches);
console.log(r);
