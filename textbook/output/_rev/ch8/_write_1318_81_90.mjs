import fs from "fs";

const FROZEN = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];

const letters = ["A", "B", "C", "D", "E"];

function apply(rel, patches) {
  const fp = new URL(rel, import.meta.url);
  const data = JSON.parse(fs.readFileSync(fp, "utf8"));
  const orig = JSON.parse(JSON.stringify(data));
  for (const t of data) {
    const p = patches[t.id];
    if (!p) throw new Error("missing patch " + t.id);
    if (p.tacticals.length !== 5) throw new Error("need 5 letters " + t.id);
    t.solution_overview = p.overview;
    t.tactical_explanations = p.tacticals;
  }
  for (let i = 0; i < data.length; i++) {
    for (const k of FROZEN) {
      if (JSON.stringify(data[i][k]) !== JSON.stringify(orig[i][k])) {
        throw new Error("frozen " + orig[i].id + " " + k);
      }
    }
    const keys = orig[i].answer_key;
    for (let j = 0; j < 5; j++) {
      const head = data[i].tactical_explanations[j].split("\n")[0];
      const want = `**${letters[j]}.** → ${keys[j] ? "True" : "False"}`;
      if (head !== want) throw new Error("header " + orig[i].id + " " + head);
      const body = data[i].tactical_explanations[j];
      const close = keys[j] ? "so the statement is True." : "so the statement is False.";
      if (!body.includes(close)) throw new Error("closer " + orig[i].id + " " + letters[j]);
    }
    const blob =
      data[i].solution_overview + "\n" + data[i].tactical_explanations.join("\n");
    for (const ban of [
      "the overview already",
      "Part 1",
      "Part 2",
      "Part 3",
      "\u2014",
      "\u2013",
      "${",
    ]) {
      if (blob.includes(ban)) throw new Error("banned `" + ban + "` in " + orig[i].id);
    }
  }
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + "\n");
  console.log("wrote", rel, data.length);
}

const patches = {
  "math-8-81": {
    overview: `Aerodynamic drag on a track cyclist follows $F(v)=A v^{r}$ newtons for speed $v>0$ metres per second. Doubling any speed multiplies drag by four, and raising speed from $8$ to $12$ m/s increased drag by exactly $40$ N. The power needed to overcome that drag is $P=Fv$ watts.

The doubling record is a ratio, so the coefficient cancels and the exponent is isolated first:

$$2^{r}=4$$

The logged increase is a difference of two levels, which then pins $A$. Multiplying by speed raises the exponent by one.`,
    tacticals: [
      `**A.** → True

The doubling record is $2^{r}=4$, so $r=2$. Power is drag times speed:

$$P(v)=A v^{3}$$

The leftover exponent $3>1$, so absorbed power grows faster than speed. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**B.** → False

With power exponent $3$, doubling speed multiplies absorbed power by

$$2^{3}=8$$

not by $2$. Drag itself only quadrupled, because its exponent was $2$; multiplying by the doubled speed doubles that factor again, from $4$ to $8$. Power rises eightfold, not twofold, so the statement is False.`,
      `**C.** → True

From $r=2$ and $A(12^{2}-8^{2})=40$, the difference of squares is $80A=40$, so $A=\\frac{1}{2}$ and $P(v)=\\frac{1}{2}v^{3}$. The leftover slope is

$$P'(v)=\\frac{3}{2}v^{2}$$

At $8$ m/s that is $96$. At $12$ m/s it is $216$. Because $216>96$, the extra metre costs more watts at $12$ m/s than at $8$ m/s, so the statement is True.`,
      `**D.** → True

The doubling record $2^{r}=4$ forces $r=2$, and $A(144-64)=40$ forces $A=\\frac{1}{2}$, so $P(v)=\\frac{1}{2}v^{3}$. At $8$ m/s:

$$P(8)=\\frac{1}{2}\\cdot 512=256$$

Two hundred and fifty-six sits under $300$. Using drag $32$ N times speed $8$ is the same check, so the statement is True.`,
      `**E.** → False

At $12$ m/s the cubic $P(v)=\\frac{1}{2}v^{3}$ gives

$$P(12)=\\frac{1}{2}\\cdot 1728=864$$

which sits past $800$, not under it. The faster run has already broken the eight-hundred-watt line, so the statement is False.`,
    ],
  },
  "math-8-82": {
    overview: `The signal a locator receives from a buried conductor follows $S(x)=A x^{r}$ millivolts for burial depth $x>0$ metres. Doubling any burial depth cuts the received signal to $\\frac{1}{8}$, and a calibration run over a conductor buried at $2$ metres read $50$ millivolts.

The doubling record isolates the exponent because the coefficient cancels:

$$2^{r}=\\frac{1}{8}$$

One observed pair then fixes the coefficient. Because the exponent is negative, that recovery multiplies by a power of the depth.`,
    tacticals: [
      `**A.** → False

The doubling record is $2^{r}=\\frac{1}{8}$, so $r=-3$. Inverse proportionality would mean exponent $-1$, which would cut the signal in half when depth doubles. The recorded factor is $2^{-3}=\\frac{1}{8}$. The locator falls faster than an inverse-depth law, so the statement is False.`,
      `**B.** → False

Doubling depth multiplies the signal by

$$2^{-3}=\\frac{1}{8}$$

not by $\\frac{1}{2}$. The recorded factor is one eighth, four times steeper than a halving. Inverse-linear thinking is the mismatch, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $S=A x^{-3}$,

$$x=A^{\\frac{1}{3}} S^{-\\frac{1}{3}}$$

Isolating depth raises both sides to the reciprocal of $-3$. Depth is a monomial in the reading. Falling signal does not introduce a logarithm, so the statement is True.`,
      `**D.** → True

From $r=-3$ and $A\\cdot 2^{-3}=50$, the coefficient is $A=400$. Four metres is one doubling of the calibration depth of $2$ m, so

$$S(4)=50\\cdot\\frac{1}{8}=6.25$$

which sits under $7$. Inverse-cube decay is already under seven millivolts, so the statement is True.`,
      `**E.** → False

A reading of $3.2$ mV inverts $400 x^{-3}=3.2$:

$$x^{3}=\\frac{400}{3.2}=125$$

$$x=5$$

Five metres is not more than $8$ m. A second doubling from $4$ m would have been $8$ m and a much smaller reading, so the statement is False.`,
    ],
  },
  "math-8-83": {
    overview: `Oxygen demand follows $D(m)=A m^{\\frac{3}{4}}$ millilitres per hour and gill surface area follows $G(m)=B m^{\\frac{2}{3}}$ square centimetres, for body mass $m>0$ grams. An $81$ g fish demands exactly $95$ millilitres per hour more than a $16$ g fish, and a $64$ g fish carries $48$ square centimetres of gill. A tank's total demand is the sum of its fish's individual demands.

Both exponents are supplied, so each law needs exactly one record: a difference for demand and a level for gill area.

$$A\\left(81^{\\frac{3}{4}}-16^{\\frac{3}{4}}\\right)=95$$

$$B\\cdot 64^{\\frac{2}{3}}=48$$

Intensity subtracts the exponents. A tank total is a sum, never $D$ applied to a pooled mass.`,
    tacticals: [
      `**A.** → True

The demand gap uses $81^{\\frac{3}{4}}=27$ and $16^{\\frac{3}{4}}=8$, so $19A=95$ and $A=5$. Demand is then $D(m)=5m^{\\frac{3}{4}}$. Three quarters sits below one, so each extra gram adds less oxygen demand than the gram before it. Oxygen demand lags body mass, so the statement is True.`,
      `**B.** → False

Demand per square centimetre is $D/G$. With $A=5$ and $B=3$ from $64^{\\frac{2}{3}}=16$, that intensity is

$$\\frac{D(m)}{G(m)}=\\frac{5}{3}m^{\\frac{1}{12}}$$

The leftover exponent $\\frac{1}{12}$ is positive, so intensity rises with body mass. It does not fall. Demand outruns gill area because $\\frac{3}{4}>\\frac{2}{3}$, so the statement is False.`,
      `**C.** → False

Because $\\frac{2}{3}<1$, two small fish out-area one fish of twice the mass. With $G(m)=3m^{\\frac{2}{3}}$,

$$2G(16)=2\\cdot 3\\cdot 16^{\\frac{2}{3}}=24\\cdot 2^{\\frac{2}{3}}$$

$$G(32)=3\\cdot 32^{\\frac{2}{3}}=24\\cdot 2^{\\frac{1}{3}}$$

and $2^{\\frac{2}{3}}>2^{\\frac{1}{3}}$. Merging the two $16$ g fish into one $32$ g fish loses gill area, so the statement is False.`,
      `**D.** → True

With $A=5$, a $256$ g fish is $4^{4}$, so the three-quarters power is $4^{3}=64$:

$$D(256)=5\\cdot 64=320$$

Three hundred and twenty sits above $300$, so the statement is True.`,
      `**E.** → False

A tank total is a sum of individual demands, never one application of $D$ to the pooled mass. Sixteen fish of $16$ g demand

$$16\\cdot D(16)=16\\cdot 40=640$$

which sits above $600$. Using $D(256)$ in place of $16D(16)$ is the pooling mix-up, so the statement is False.`,
    ],
  },
  "math-8-84": {
    overview: `Volumetric flow through a micro-irrigation emitter follows $Q(r)=A r^{k}$ litres per hour for internal tube radius $r>0$ millimetres. Doubling any tube radius multiplies flow by $16$, and a bench test on a tube of radius $2$ mm delivered $48$ litres per hour. The mean velocity index is $\\frac{Q}{\\pi r^{2}}$.

The doubling record isolates the exponent:

$$2^{k}=16$$

One bench test then fixes the coefficient. Dividing flow by the cross-section produces a second power whose exponent is $k-2$.`,
    tacticals: [
      `**A.** → True

The doubling factor $16=2^{4}$ forces $k=4$. Four sits well above one, so each extra millimetre of bore adds more delivery than the millimetre before it. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**B.** → False

Doubling the radius would double the flow only if the exponent were $1$. With exponent $4$ the factor is

$$2^{4}=16$$

which is the recorded doubling factor itself. Flow rises sixteenfold, not twofold, so the statement is False.`,
      `**C.** → False

From $k=4$ and $A\\cdot 16=48$, the coefficient is $A=3$. The mean velocity index is then

$$\\frac{Q(r)}{\\pi r^{2}}=\\frac{3}{\\pi}r^{2}$$

The leftover exponent $2$ is not zero, so the index grows with the radius. It is not the same in every tube, so the statement is False.`,
      `**D.** → True

With $Q(r)=3r^{4}$, a tube of radius $3$ mm delivers

$$Q(3)=3\\cdot 81=243$$

which sits above $200$. Three to the fourth is $81$, so the statement is True.`,
      `**E.** → False

At radius $1$ mm every power of $1$ is $1$, so

$$Q(1)=3$$

which sits under $10$. The coefficient itself is the one-millimetre delivery. The fourth-power law drops that fast when the bore shrinks below the $2$ mm bench, so the statement is False.`,
    ],
  },
  "math-8-85": {
    overview: `Dose rate near an industrial radiography source follows $H(d)=A d^{r}$ microsieverts per hour for distance $d>0$ metres. Quadrupling any distance cuts the dose rate to $\\frac{1}{16}$, and a survey meter $3$ metres from the source reads $80$ microsieverts per hour. Site rules put the barrier where the dose rate has fallen to $5$ microsieverts per hour.

The quadrupling record isolates the exponent:

$$4^{r}=\\frac{1}{16}$$

One survey reading then pins the coefficient. The barrier question inverts the same law.`,
    tacticals: [
      `**A.** → False

The quadrupling record is $4^{r}=\\frac{1}{16}$, so $r=-2$. Doubling distance multiplies dose by

$$2^{-2}=\\frac{1}{4}$$

not by $\\frac{1}{2}$. A half would have been inverse-linear; this survey's quadrupling record is inverse-square, so the statement is False.`,
      `**B.** → True

From $r=-2$ and $A\\cdot 3^{-2}=80$, the coefficient is $A=720$. The leftover slope is

$$H'(d)=-1440 d^{-3}$$

Its size is $\\frac{160}{3}$ at $3$ m and $\\frac{20}{3}$ at $6$ m. An extra metre cuts more dose at three metres than at six. Inverse-square decay is front-loaded, so the statement is True.`,
      `**C.** → True

A nonzero power inverts to another power. From $H=A d^{-2}$,

$$d=\\sqrt{A}\\, H^{-\\frac{1}{2}}$$

The new exponent is the reciprocal of $-2$. Distance needed for a given dose rate is still a monomial in $H$, so the statement is True.`,
      `**D.** → True

Six metres is a doubling of the $3$ m survey. Inverse square quarters the $80$ reading:

$$H(6)=\\frac{80}{4}=20$$

which sits under $25$. Inverse square on a doubled range is a quarter, so the statement is True.`,
      `**E.** → False

From $H(3)=80$ down to $H=5$ is a factor $\\frac{1}{16}$, hence a fourfold distance:

$$d=3\\cdot 4=12$$

Twelve metres is not farther than $15$. The barrier sits at twelve metres, so the statement is False.`,
    ],
  },
  "math-8-86": {
    overview: `A tracer dye spreads as a disc whose radius follows $r(t)=A t^{\\frac{2}{3}}$ metres for $t>0$ hours since release. The survey records only that the radius grew by exactly $45$ metres between hour $1$ and hour $8$. The stained area is the disc $S=\\pi r^{2}$.

The survey gives a difference rather than a level, so the coefficient comes from subtracting two shape factors:

$$A\\left(8^{\\frac{2}{3}}-1^{\\frac{2}{3}}\\right)=45$$

Squaring the radius law doubles its exponent and squares the coefficient.`,
    tacticals: [
      `**A.** → True

Radius is a two-thirds power of time and area squares that radius, so the composed exponent is

$$\\frac{2}{3}\\cdot 2=\\frac{4}{3}$$

A monomial in $t$ remains a monomial. Stopping at radius would have left exponent $\\frac{2}{3}$, so the statement is True.`,
      `**B.** → True

The composed exponent $\\frac{4}{3}>1$, so the stained area outruns elapsed time. A proportional disc would have carried exponent $1$. Area can grow faster than time even while radius grows more slowly than time, so the statement is True.`,
      `**C.** → False

Doubling time multiplies area by

$$2^{\\frac{4}{3}}\\approx 2.52$$

not by $2$. Exponent $1$ would have returned the factor $2$. Linear thinking understates the disc, so the statement is False.`,
      `**D.** → True

The shape factors are $8^{\\frac{2}{3}}=4$ and $1^{\\frac{2}{3}}=1$, so $3A=45$ and $A=15$. At hour $8$:

$$r(8)=15\\cdot 4=60$$

which sits above $50$. That is also $r(1)+45=15+45$, the first-hour radius plus the logged gap, so the statement is True.`,
      `**E.** → False

A radius of $240$ metres inverts $15 t^{\\frac{2}{3}}=240$:

$$t^{\\frac{2}{3}}=16$$

$$t=64$$

Sixty-four hours is not under $50$. The plume takes sixty-four hours to reach two hundred and forty metres, so the statement is False.`,
    ],
  },
  "math-8-87": {
    overview: `Discharge over a measuring weir follows $Q(h)=A h^{\\frac{3}{2}}$ cubic metres per second for head $h>0$ metres. A gauging at a head of $0.25$ metres recorded a discharge of $2$ cubic metres per second. A field team wants the same rating curve rewritten with the head in centimetres.

The exponent belongs to the weir, so one gauging fixes the coefficient:

$$A(0.25)^{\\frac{3}{2}}=2$$

A change of input unit replaces the input by a constant multiple of itself. A power function pushes that constant through its exponent, so the exponent never moves and only the coefficient does.`,
    tacticals: [
      `**A.** → True

A nonzero power inverts to another power. From $Q=A h^{\\frac{3}{2}}$,

$$h=\\left(\\frac{Q}{A}\\right)^{\\frac{2}{3}}$$

The new exponent is the reciprocal of $\\frac{3}{2}$. Head needed for a given discharge is still a monomial in $Q$. A change of units does not change that, so the statement is True.`,
      `**B.** → True

The exponent is still $\\frac{3}{2}$ after rewriting in centimetres. A change of units cannot move the exponent below one. Discharge still outruns head. Only the coefficient absorbs the $100^{\\frac{3}{2}}$ rescaling, so the statement is True.`,
      `**C.** → False

Doubling head multiplies discharge by

$$2^{\\frac{3}{2}}\\approx 2.83$$

not by $2$. Changing the input unit to centimetres rescales only the coefficient; it does not flatten the exponent to $1$. Discharge would double with head only for a linear weir, so the statement is False.`,
      `**D.** → True

The gauging gives $0.25^{\\frac{3}{2}}=0.125$, so $A=16$ and $Q=16 h^{\\frac{3}{2}}$. At a unit head the power is $1$:

$$Q(1)=16$$

which sits under $20$. The gauging at $0.25$ m was only $2$ m$^{3}$/s; one metre still discharges $16$, so the statement is True.`,
      `**E.** → False

At $4$ metres, $4^{\\frac{3}{2}}=8$:

$$Q(4)=16\\cdot 8=128$$

which is not under $100$. Four metres is sixteen times the $0.25$ m gauging in head, hence $16^{\\frac{3}{2}}=64$ times the gauging of $2$, which is $128$, so the statement is False.`,
    ],
  },
  "math-8-88": {
    overview: `Fuel use in a grain dryer follows $F(x)=A x^{r}$ litres per batch for batch mass $x>0$ tonnes. Doubling the batch mass raises fuel use by $300\\%$, and moving from a $2$-tonne batch to a $6$-tonne batch adds exactly $96$ litres.

Two unknowns need two records. The first is a ratio, which is blind to the coefficient and therefore isolates the exponent; the second is a difference of levels, which pins the coefficient once the exponent is known. A $300\\%$ rise is a multiplier of $4$:

$$2^{r}=4$$

$$A\\left(6^{r}-2^{r}\\right)=96$$`,
    tacticals: [
      `**A.** → True

A $300\\%$ rise is the multiplier $4=2^{2}$, so $r=2$. Two sits above one, so each extra tonne adds more litres than the tonne before it. Fuel use grows faster than batch mass, so the statement is True.`,
      `**B.** → False

Doubling the batch multiplies fuel by $4$, not by $2$. A $300\\%$ rise is a multiplier of $4$, not of $2$. Fuel use is quadrupled. Linear thinking reads "$300\\%$ more" as if it were a doubling plus a bit, rather than $2^{r}$, so the statement is False.`,
      `**C.** → False

With $r=2$ fuel per tonne is $A x$, a positive leftover power, so litres per tonne climb in proportion to batch mass. The leftover exponent $r-1=1$ is not negative. The per-tonne figure rises, it does not fall, so the statement is False.`,
      `**D.** → True

From $r=2$ and $A(36-4)=96$, the coefficient is $A=3$, so $F(x)=3x^{2}$. A $10$-tonne batch uses

$$F(10)=3\\cdot 100=300$$

which sits above $250$. From the $2$ t batch, a fivefold mass is a twenty-fivefold fuel bill: $12\\cdot 25=300$, so the statement is True.`,
      `**E.** → False

A $6$-tonne batch uses

$$F(6)=3\\cdot 36=108$$

which is not under $100$. That $108$ is also $12+96$, the $2$ t fuel plus the logged gap. The six-tonne batch does not still use under one hundred litres, so the statement is False.`,
    ],
  },
  "math-8-89": {
    overview: `A kiln's flue-gas mass flow follows $m(t)=A t^{\\frac{1}{2}}$ tonnes per hour for throttle setting $t>0$, and the particulate load index is $P(m)=\\frac{m^{4}}{16}$. A calibration at $t=9$ recorded $m=6$.

The square-root shape is supplied, so one recorded pair fixes the coefficient:

$$A\\cdot 9^{\\frac{1}{2}}=6$$

Composition feeds the intermediate output into the second rule, and raising a power to a power multiplies the two exponents.`,
    tacticals: [
      `**A.** → True

Mass flow is a square root of throttle and the index is a fourth power of mass, so the composed exponent is

$$\\frac{1}{2}\\cdot 4=2$$

The composition is a monomial in $t$. Stopping after $m(t)$ would have left exponent $\\frac{1}{2}$, so the statement is True.`,
      `**B.** → False

The leftover exponent is $2$, not $1$, so the index grows faster than the throttle, not in proportion to it. Doubling throttle multiplies the index by $4$. Proportionality would have needed the two stages to cancel to exponent $1$, so the statement is False.`,
      `**C.** → True

From $3A=6$, the coefficient is $A=2$, so $m(t)=2 t^{\\frac{1}{2}}$. Mass flow per unit of throttle is

$$\\frac{m(t)}{t}=2 t^{-\\frac{1}{2}}$$

which falls from $\\frac{2}{3}$ at $t=9$ to $\\frac{2}{5}$ at $t=25$. The leftover exponent is negative, so the statement is True.`,
      `**D.** → True

At throttle $25$, $\\sqrt{25}=5$:

$$m(25)=2\\cdot 5=10$$

which sits above $8$. Linear scaling from $m(9)=6$ would have claimed about $16.7$ and overshot; the square root is slower, so the statement is True.`,
      `**E.** → False

Composing first gives $P\\circ m=t^{2}$, because $\\frac{2^{4}}{16}=1$. An index of $81$ is then

$$t^{2}=81$$

$$t=9$$

not a setting above $20$. Nine is the calibration throttle itself: $m(9)=6$ and $P(6)=81$, so the statement is False.`,
    ],
  },
  "math-8-90": {
    overview: `Two municipal shuttle apps quote wait time for a trip of distance $d>0$ kilometres. App L follows $L(d)=a d^{\\frac{1}{2}}$ minutes and App Q follows $Q(d)=k d$ minutes. A logged $25$ km trip on App L quoted $20$ minutes, and a logged $100$ km trip on App Q quoted $20$ minutes. A service-level agreement caps wait at $20$ minutes.

Each app is a power of distance with a hidden coefficient, so each log pins one coefficient:

$$a\\cdot 25^{\\frac{1}{2}}=20$$

$$k\\cdot 100=20$$

Equal waits set the two recovered laws equal. The cap inverts each law separately.`,
    tacticals: [
      `**A.** → False

App L's log gives $5a=20$, so $a=4$. App Q's log gives $k=\\frac{1}{5}$. Setting $4\\sqrt{d}=\\frac{1}{5}d$ yields a unique positive root

$$d=400$$

A square-root versus a line cannot meet twice on $d>0$. They meet only once, and the wait there is $80$ minutes, well past the cap, so the statement is False.`,
      `**B.** → True

Past $d=400$ the ratio $\\frac{Q}{L}=\\frac{1}{20}\\sqrt{d}$ exceeds $1$ and keeps climbing, so App Q stays slower. Once App L quotes a shorter wait, App Q never catches up. A second crossing would need the leftover square root to change sign, so the statement is True.`,
      `**C.** → True

App L's wait per kilometre is $L(d)/d=4 d^{-\\frac{1}{2}}$, which falls from $0.8$ at $d=25$ to $0.4$ at $d=100$. The leftover exponent is negative. Longer trips still take more minutes in total, but fewer minutes per kilometre on the square-root app, so the statement is True.`,
      `**D.** → False

App L's $20$-minute cap binds at $4\\sqrt{d}=20$, so $d=25$. Thirty kilometres sits past $25$, so $L(30)>20$. Under the cap, App L cannot serve trips longer than twenty-five kilometres. Mixing L's cap with Q's cap at $d=100$ is the mix-up, so the statement is False.`,
      `**E.** → True

At the meeting $d=400$ both apps quote

$$L(400)=4\\cdot 20=80$$

$$Q(400)=\\frac{400}{5}=80$$

Eighty minutes sits above $70$. Both already quote eighty minutes, more than seventy, so the statement is True.`,
    ],
  },
};

apply("./81_90.json", patches);
