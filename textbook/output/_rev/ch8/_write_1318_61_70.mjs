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
  "math-8-61": {
    overview: `A production weld's tensile strength follows $S(p)=A p^{k}$ newtons for welding current $p>0$ amperes. Neither constant is on the sheet: a $4$ A setting produced $40$ N and a $9$ A setting produced $135$ N. The line rejects any weld below $400$ N.

Two unknowns need both observations. The ratio cancels $A$ and isolates $k$; the $4$ A level then pins $A$:

$$\\frac{135}{40}=\\left(\\frac{9}{4}\\right)^{k}$$

$$A\\cdot 4^{k}=40$$

The reject line inverts the same power.`,
    tacticals: [
      `**A.** → True

The logged ratio is $\\frac{135}{40}=\\frac{27}{8}$ against a current ratio $\\frac{9}{4}=\\left(\\frac{3}{2}\\right)^{2}$. Matching powers gives

$$\\left(\\frac{3}{2}\\right)^{2k}=\\left(\\frac{3}{2}\\right)^{3}$$

$$k=\\frac{3}{2}$$

Three halves sits above one, so strength outruns current, so the statement is True.`,
      `**B.** → True

From $k=\\frac{3}{2}$ and $A\\cdot 4^{\\frac{3}{2}}=40$, the shape factor $4^{\\frac{3}{2}}=8$ forces $A=5$, so $S(p)=5p^{\\frac{3}{2}}$. At $16$ A:

$$16^{\\frac{3}{2}}=64$$

$$S(16)=5\\cdot 64=320$$

Three hundred and twenty sits above $300$, so the statement is True.`,
      `**C.** → True

A nonzero power inverts to another power. From $S=5p^{\\frac{3}{2}}$,

$$p=\\left(\\frac{S}{5}\\right)^{\\frac{2}{3}}$$

The new exponent is the reciprocal of $\\frac{3}{2}$. Current needed for a given strength is still a monomial in $S$, so the statement is True.`,
      `**D.** → False

The leftover slope of $S(p)=5p^{\\frac{3}{2}}$ is

$$S'(p)=\\frac{15}{2}\\sqrt{p}$$

At $4$ A that is $15$. At $9$ A it is $\\frac{45}{2}$. Because $15<\\frac{45}{2}$, an extra ampere adds less at $4$ A than at $9$ A. An exponent above one makes later amperes more productive, not less, so the statement is False.`,
      `**E.** → False

The $400$ N reject line inverts as $5p^{\\frac{3}{2}}=400$, so

$$p^{\\frac{3}{2}}=80$$

$$p=80^{\\frac{2}{3}}\\approx 18.57$$

which is not below $18$. At $18$ A the weld is still short of $400$ N. The smallest clearing current sits just past eighteen amperes, so the statement is False.`,
    ],
  },
  "math-8-62": {
    overview: `A harbour buoy's holding power follows $H(m)=A m^{\\frac{2}{3}}$ kilonewtons when mass $m>0$ is measured in kilograms. A trial buoy of $8$ kg held exactly $24$ kN. The authority prefers tonnes ($1$ tonne $=1000$ kg) and writes the same law as $H(t)=B t^{\\frac{2}{3}}$. A storm protocol demands at least $150$ kN.

The exponent is given, so one trial fixes $A$:

$$A\\cdot 8^{\\frac{2}{3}}=24$$

A change of unit is the substitution $m=1000t$, and the conversion enters under the exponent as $B=A\\cdot 1000^{\\frac{2}{3}}$.`,
    tacticals: [
      `**A.** → False

From $8^{\\frac{2}{3}}=4$, the trial forces $A=6$, so $H(m)=6m^{\\frac{2}{3}}$. Two $8$ kg buoys hold

$$2H(8)=48$$

One $64$ kg buoy holds $H(64)=6\\cdot 16=96$. Because $\\frac{2}{3}<1$, merging mass raises total hold. Two small buoys fall short of one large one, so the statement is False.`,
      `**B.** → True

With $H(m)=6m^{\\frac{2}{3}}$ a $125$ kg buoy is a fifth-power cube: $125=5^{3}$, so the two-thirds power is $25$:

$$H(125)=6\\cdot 25=150$$

One hundred and fifty sits above $140$. That is also the storm floor itself, so the statement is True.`,
      `**C.** → False

Doubling mass multiplies hold by

$$2^{\\frac{2}{3}}\\approx 1.59$$

not by $2$. Holding power rises, but not in lockstep with mass. Lockstep would have needed exponent $1$, and the trial was fitted with $\\frac{2}{3}$, so the statement is False.`,
      `**D.** → True

A nonzero power inverts to another power. From $H=6m^{\\frac{2}{3}}$,

$$m=\\left(\\frac{H}{6}\\right)^{\\frac{3}{2}}$$

The new exponent is the reciprocal of $\\frac{2}{3}$. Mass needed for a given hold is still a monomial in $H$, so the statement is True.`,
      `**E.** → False

Reaching $150$ kN takes $m=(150/6)^{\\frac{3}{2}}=125$ kg, which is $0.125$ tonnes, not more than $1$ tonne. Mixing kilograms with tonnes without the $1000^{\\frac{2}{3}}$ rescaling is how a one-tonne claim appears, so the statement is False.`,
    ],
  },
  "math-8-63": {
    overview: `A wireless mesh's sustained throughput follows $T(d)=A d^{-2}$ megabits per second for hop distance $d>0$ metres. A bench test at $d=4$ m recorded $T=50$ Mbps. The link is rated reliable only while throughput stays at or above $8$ Mbps.

The exponent $-2$ is given, so one bench reading fixes $A$:

$$\\frac{A}{4^{2}}=50$$

Because the exponent is negative, the reliability floor becomes a maximum distance:

$$\\frac{A}{d^{2}}\\ge 8$$`,
    tacticals: [
      `**A.** → True

A nonzero power inverts to another power. From $T=A d^{-2}$,

$$d=\\sqrt{A}\\, T^{-\\frac{1}{2}}$$

The new exponent is the reciprocal of $-2$. Hop distance needed for a given throughput is still a monomial in $T$, so the statement is True.`,
      `**B.** → True

The bench reading gives $A/16=50$, so $A=800$ and $T(d)=800/d^{2}$. The reliability floor $T=8$ then forces

$$\\frac{800}{d^{2}}=8$$

$$d^{2}=100$$

$$d=10$$

Ten metres sits under $12$, and every longer hop is slower, so the statement is True.`,
      `**C.** → False

Doubling the hop would halve throughput only if the exponent were $-1$. With $-2$ the factor is

$$2^{-2}=\\frac{1}{4}$$

An inverse-square law quarters the reading when distance doubles. Inverse-linear thinking is the mismatch, so the statement is False.`,
      `**D.** → False

At $d=11$, with $A=800$,

$$T(11)=\\frac{800}{121}\\approx 6.61$$

which sits below $8$. The reliable radius is $10$ m; a longer hop can only be slower. Eleven metres already misses the floor, so the statement is False.`,
      `**E.** → False

The slope of $T(d)=800 d^{-2}$ is

$$T'(d)=-1600 d^{-3}$$

Its size is $25$ at $4$ m and $\\frac{25}{8}$ at $8$ m. An extra metre cuts more throughput on the short hop, not on the long one. Inverse-square drops are steepest at the near end, so the statement is False.`,
    ],
  },
  "math-8-64": {
    overview: `Gill surface area follows $G(m)=A m^{\\frac{3}{4}}$ square centimetres for body mass $m>0$ grams. A $256$ g specimen has gill area $512$ cm$^{2}$. Area per gram is the derived intensity $\\frac{G(m)}{m}$.

The exponent is given, so one specimen fixes $A$:

$$A\\cdot 256^{\\frac{3}{4}}=512$$

Dividing the law by mass subtracts one from the exponent.`,
    tacticals: [
      `**A.** → True

The exponent $\\frac{3}{4}$ is smaller than one, so each extra gram of body adds less gill than the gram before it. Gill area grows, but more slowly than body mass. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**B.** → True

The specimen gives $256^{\\frac{3}{4}}=64$, so $64A=512$ and $A=8$. At $16$ g, sixteen is $2^{4}$, so the three-quarters power is $2^{3}=8$:

$$G(16)=8\\cdot 8=64$$

Sixty-four sits above $50$, so the statement is True.`,
      `**C.** → False

Gill area per gram is $G(m)/m$. With $G(m)=8m^{\\frac{3}{4}}$ that intensity is

$$8m^{-\\frac{1}{4}}$$

The leftover exponent is negative, so intensity falls as mass grows. A constant intensity would need leftover exponent $0$, so the statement is False.`,
      `**D.** → False

Doubling mass multiplies gill area by

$$2^{\\frac{3}{4}}\\approx 1.68$$

not by $2$. Area rises, but not in lockstep with mass. The same $r<1$ that made A true makes this doubling false, so the statement is False.`,
      `**E.** → False

A $64$ g fish has $64=2^{6}$, so the three-quarters power is $2^{\\frac{9}{2}}=16\\sqrt{2}$:

$$G(64)=8\\cdot 16\\sqrt{2}=128\\sqrt{2}\\approx 181$$

which sits short of $200$. The three-quarters power has grown, but not as far as the named area, so the statement is False.`,
    ],
  },
  "math-8-65": {
    overview: `Early curing strength follows $S(t)=A\\sqrt{t}$ megapascals for curing time $t>0$ days. The log never states $A$: it only notes that strength rose by exactly $5$ MPa between day $4$ and day $9$.

No single level was logged, so the coefficient comes out of a difference. $A$ is a common factor and the exponent $\\frac{1}{2}$ is given:

$$A\\sqrt{9}-A\\sqrt{4}=5$$

A time multiplier $c$ scales strength by $\\sqrt{c}$.`,
    tacticals: [
      `**A.** → True

For $S(t)=A\\sqrt{t}$ a time factor $c$ cancels the coefficient:

$$\\frac{S(ct)}{S(t)}=\\sqrt{c}$$

Quadrupling means $c=4$, and $\\sqrt{4}=2$. A square-root clock turns a fourfold wait into a twofold reading, so the statement is True.`,
      `**B.** → True

The recorded rise factors as $A(3-2)=5$, so $A=5$ and $S(t)=5\\sqrt{t}$. On day $4$:

$$S(4)=5\\cdot 2=10$$

Ten sits above $8$. Together with $S(9)=15$, the logged gap $15-10=5$ is recovered, so the statement is True.`,
      `**C.** → False

The leftover slope is

$$S'(t)=\\frac{5}{2}t^{-\\frac{1}{2}}$$

After four days that is $\\frac{5}{4}$. After nine days it is $\\frac{5}{6}$. An extra day adds more after four days than after nine, not the other way around. A square root flattens, so the statement is False.`,
      `**D.** → True

Reaching $30$ MPa inverts $5\\sqrt{t}=30$:

$$\\sqrt{t}=6$$

$$t=36$$

Thirty-six days sits under $40$. The square-root clock is slower than a linear guess, so the target arrives before day $40$, so the statement is True.`,
      `**E.** → False

The recorded $5$ MPa is the gap $S(9)-S(4)$, not the day $9$ level. With $A=5$,

$$S(9)=5\\cdot 3=15$$

Day $9$ is $15$ MPa. Treating a difference of two readings as a single level is the mix-up named in the title, so the statement is False.`,
    ],
  },
  "math-8-66": {
    overview: `Tip deflection of a cantilever follows $y(L)=A L^{k}$ millimetres for free span $L>0$ metres. Two spans are trusted: $y(3)=18$ and $y(6)=72$. A third run recorded $y(9)=150$, and the question is whether that third point still sits on the same power law.

Two trusted runs fix both constants. The ratio delivers $k$; either run then delivers $A$:

$$\\frac{72}{18}=2^{k}$$

$$A\\cdot 3^{k}=18$$

The third run is a test of the fitted curve, not an input to it.`,
    tacticals: [
      `**A.** → True

The trusted ratio is $4=2^{k}$, so

$$k=2$$

A width factor $c>1$ then multiplies deflection by $c^{2}$, which exceeds $c$. Deflection outruns span. The integer $2$ is a square law, not a coincidence of the $3$ m and $6$ m runs, so the statement is True.`,
      `**B.** → True

From $k=2$ and $A\\cdot 9=18$, the coefficient is $A=2$, so $y(L)=2L^{2}$. The trusted quadratic at nine metres is

$$y(9)=2\\cdot 81=162$$

which sits above $155$. The questionable third run of $150$ is a different number; this letter asks what the trusted pair predicts, so the statement is True.`,
      `**C.** → False

Doubling span multiplies deflection by

$$2^{2}=4$$

not by $2$. The trusted move from $3$ m to $6$ m already did that: $18$ mm became $72$ mm. A doubled free span is four times the sag, so the statement is False.`,
      `**D.** → True

Predicted $162$ mm minus recorded $150$ mm is a $12$ mm shortfall:

$$162-150=12$$

which is more than $10$. The third run sits below the trusted quadratic. A $10$ mm tolerance would still flag this gap, so the statement is True.`,
      `**E.** → False

The third run would sit on the trusted law only if $\\frac{150}{18}=3^{2}$. Instead

$$\\frac{150}{18}=\\frac{25}{3}\\approx 8.33\\neq 9$$

The third run does not sit on the same power law. Predicted $162$ versus recorded $150$ is a $12$ mm gap, now read as a ratio rather than as millimetres, so the statement is False.`,
    ],
  },
  "math-8-67": {
    overview: `A self-similar mast's steel mass follows $M(h)=A h^{k}$ kilograms for height $h>0$ metres. Lengthening any mast by $20\\%$ raises steel mass by $72.8\\%$, and a $10$ m reference mast uses exactly $500$ kg of steel.

A percentage rule is a ratio and fixes only $k$; the reference mast is a level and fixes only $A$:

$$1.2^{k}=1.728$$

$$A\\cdot 10^{k}=500$$

Scale information cannot substitute for a level.`,
    tacticals: [
      `**A.** → True

The percentage rule is $1.2^{k}=1.728$. Matching powers of $1.2$ gives

$$1.2^{3}=1.728$$

$$k=3$$

Three is larger than one, so mass outruns height. The coefficient cancels in the ratio, so the statement is True.`,
      `**B.** → True

From $k=3$ and $A\\cdot 1000=500$, the coefficient is $A=0.5$. A $12$ m mast is a $20\\%$ stretch of the $10$ m reference, so

$$M(12)=500\\cdot 1.728=864$$

which sits above $800$. The same check is $0.5\\cdot 12^{3}=864$, so the statement is True.`,
      `**C.** → False

In the ratio $\\frac{M(1.2h)}{M(h)}=1.2^{k}$ the coefficient $A$ cancels, so the percentage rule cannot pin $A$. The $10$ m reference is the level that pins $A$. Scale information cannot substitute for a level, so the statement is False.`,
      `**D.** → True

A $10\\%$ stretch is the factor $1.1^{3}$:

$$1.1^{3}=1.331$$

a $33.1\\%$ mass rise, which sits above $30\\%$. Percent changes pass through the exponent, so the statement is True.`,
      `**E.** → False

A $20\\%$ height increase raises mass by $72.8\\%$, not by $20\\%$. That is the design note itself:

$$1.2^{3}=1.728$$

Height and mass do not move in lockstep when the exponent is $3$, so the statement is False.`,
    ],
  },
  "math-8-68": {
    overview: `Acoustic intensity from a cooling fan follows $I(d)=A d^{-2}$ watts per square metre for distance $d>0$ metres from the hub. A meter reading at $2$ metres records $0.72$ W/m$^{2}$. Night operations are capped at $0.08$ W/m$^{2}$.

The exponent $-2$ is given, so one meter reading fixes $A$:

$$\\frac{A}{2^{2}}=0.72$$

Because the exponent is negative, the night cap becomes a minimum standing distance

$$\\frac{A}{d^{2}}\\le 0.08$$`,
    tacticals: [
      `**A.** → True

For an inverse square, a distance factor $k$ scales intensity by $k^{-2}$. Doubling is $k=2$:

$$2^{-2}=\\frac{1}{4}$$

Doubling distance quarters intensity at every starting range. Inverse-linear thinking would have claimed a half, so the statement is True.`,
      `**B.** → True

The meter reading gives $A/4=0.72$, so $A=2.88$ and $I(d)=2.88/d^{2}$. At $4$ m, which is a doubling of the $2$ m survey:

$$I(4)=\\frac{2.88}{16}=0.18$$

which sits under $0.2$. That is a quarter of $0.72$, so the statement is True.`,
      `**C.** → True

The leftover slope is

$$I'(d)=-5.76\\, d^{-3}$$

Its size is $0.72$ at $2$ m and about $0.027$ at $6$ m. An extra metre cuts more intensity near the hub. Inverse-square drops are front-loaded, so the statement is True.`,
      `**D.** → False

At $6$ m,

$$I(6)=\\frac{2.88}{36}=0.08$$

which equals the night cap rather than sitting above it. The claim wants a reading still above $0.08$; equality is not above. The cap is met exactly at six metres, so the statement is False.`,
      `**E.** → False

An inverse square falls from $0.72$ toward $0$ and therefore crosses $0.08$ at a finite distance. From $A=2.88$,

$$\\frac{2.88}{d^{2}}=0.08$$

$$d=6$$

The cap is met at six metres. Walking away from the hub always eventually satisfies the night limit, so the statement is False.`,
    ],
  },
  "math-8-69": {
    overview: `A booster pump's differential head follows $H(q)=A q^{2}$ metres for delivered flow $q>0$ cubic metres per hour. A commissioning run at $q=5$ recorded $H=50$ m. That flow then passes through a nozzle whose jet speed is $v(H)=4\\sqrt{H}$ metres per second, so jet speed as a function of flow is the composition $v(q)=v(H(q))$.

The pump stage is calibrated from the commissioning run:

$$A\\cdot 5^{2}=50$$

Composing the two stages multiplies the exponents: $2\\cdot\\frac{1}{2}=1$.`,
    tacticals: [
      `**A.** → True

Head is a square of flow and jet speed is a square root of head, so the composed exponent is

$$2\\cdot\\frac{1}{2}=1$$

The leftover map is a line through the origin. Jet speed is proportional to flow, so the statement is True.`,
      `**B.** → True

The commissioning run gives $25A=50$, so $A=2$ and $H(q)=2q^{2}$. Jet speed is then

$$v(q)=4\\sqrt{2q^{2}}=4\\sqrt{2}\\, q$$

At $q=5$:

$$v(5)=20\\sqrt{2}$$

and $\\sqrt{2}>1.4$, so $20\\sqrt{2}>28$. Jet speed already sits above twenty-eight metres per second, so the statement is True.`,
      `**C.** → False

Doubling flow multiplies head by

$$2^{2}=4$$

not by $2$. An exact doubling of head would need exponent $1$. The claim is about $H$, not about the composed speed. Head quadruples, so the statement is False.`,
      `**D.** → True

Because speed is proportional to flow after both stages, twice $v(5)=20\\sqrt{2}$ needs twice the flow:

$$q=10$$

which sits under $12$. The target $40\\sqrt{2}$ m/s needs $10$ m$^{3}$/h, so the statement is True.`,
      `**E.** → False

Eliminating $q$ from $H=2q^{2}$ and $v=4\\sqrt{2}\\, q$ gives

$$H=\\frac{v^{2}}{16}$$

a square of jet speed, not a constant multiple of it. Doubling jet speed quadruples the head. Proportionality would have needed leftover exponent $1$ on $v$, so the statement is False.`,
    ],
  },
  "math-8-70": {
    overview: `Forklift throughput follows $T(s)=A s^{0.5}$ pallets per hour for $s>0$ drivers on shift. A logged shift with $16$ drivers moved $80$ pallets per hour. Safety rules cap the shift at $36$ drivers.

The exponent $0.5$ is given, so one logged shift fixes $A$:

$$A\\cdot 16^{0.5}=80$$

The exponent is positive but below $1$, so more drivers always help, yet each extra driver helps less than the one before. A throughput target inverts the same square root.`,
    tacticals: [
      `**A.** → True

To double throughput a staffing factor $k$ must satisfy $k^{\\frac{1}{2}}=2$, so

$$k=4$$

The yard needs four times the crew, not twice. That is more than a doubling. A square-root warehouse will not keep pace with headcount, so the statement is True.`,
      `**B.** → True

The logged shift gives $4A=80$, so $A=20$ and $T(s)=20\\sqrt{s}$. At $36$ drivers:

$$\\sqrt{36}=6$$

$$T(36)=20\\cdot 6=120$$

One hundred and twenty sits above $110$. The safety cap of $36$ drivers is also this level, so the statement is True.`,
      `**C.** → False

Throughput per driver is $T(s)/s$. With $T(s)=20\\sqrt{s}$ that intensity is

$$20 s^{-\\frac{1}{2}}$$

The leftover exponent is negative, so intensity falls as the crew grows. Extra drivers still add pallets, but fewer per driver, so the statement is False.`,
      `**D.** → False

Reaching $150$ pallets inverts $20\\sqrt{s}=150$:

$$\\sqrt{s}=7.5$$

$$s=56.25$$

which sits past the $36$-driver cap. The capped shift delivers only $120$ pallets per hour. Reaching $150$ lies outside the safety cap, so the statement is False.`,
      `**E.** → True

The leftover slope $T'(s)=10 s^{-\\frac{1}{2}}$ stays positive, so throughput rises with crew all the way to the cap. At $s=36$, $T=120$, and no larger legal crew exists. The driver cap is therefore also a cap on pallets moved per hour, so the statement is True.`,
    ],
  },
};

apply("./61_70.json", patches);
