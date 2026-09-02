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
  "math-8-51": {
    overview: `An audit practice prices engagements by $C(n)=A n^{0.75}$ when $n>0$ accounts are tested. The bill rises by exactly $1900$ as engagement size rises from $16$ to $81$ accounts. A client has a $2700$ cap, and a rival quotes $R(n)=50n$.

The exponent $\\frac{3}{4}$ is given, so the remaining unknown is the coefficient $A$. The recorded rise is a difference of two levels:

$$A\\cdot 81^{\\frac{3}{4}}-A\\cdot 16^{\\frac{3}{4}}=1900$$

A scale question uses the ratio identity

$$\\frac{C(kn)}{C(n)}=k^{\\frac{3}{4}}$$

in which the coefficient cancels.`,
    tacticals: [
      `**A.** → True

A power $C(n)=A n^{r}$ grows more slowly than the account count precisely when $r<1$. Here $r=\\frac{3}{4}$. The scale identity is

$$\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}$$

and $2^{\\frac{3}{4}}<2$, so the bill lags the book, so the statement is True.`,
      `**B.** → False

Doubling accounts would double the bill only if the exponent were $1$. With exponent $\\frac{3}{4}$ the factor is

$$\\frac{C(2n)}{C(n)}=2^{\\frac{3}{4}}\\approx 1.68$$

which is not $2$. Linear thinking is the mismatch, so the statement is False.`,
      `**C.** → True

The recorded rise from $16$ to $81$ accounts isolates $A$. Both sizes are fourth powers, so the shape factors are cubes of the fourth roots:

$$16^{\\frac{3}{4}}=8$$

$$81^{\\frac{3}{4}}=27$$

The logged gap is then

$$A(27-8)=1900$$

$$19A=1900$$

$$A=100$$

At $81$ accounts:

$$C(81)=100\\cdot 27=2700$$

That sits above $2500$, so the statement is True.`,
      `**D.** → False

The recorded rise $A(27-8)=1900$ forces $A=100$, so $C(n)=100 n^{\\frac{3}{4}}$. The leftover slope is

$$C'(n)=75 n^{-\\frac{1}{4}}$$

At sixteen accounts:

$$C'(16)=\\frac{75}{2}$$

At eighty-one accounts:

$$C'(81)=25$$

Because $25<\\frac{75}{2}$, an extra account adds less after eighty-one than after sixteen. The leftover exponent is negative, so later accounts are cheaper to add, so the statement is False.`,
      `**E.** → True

From the same recorded rise, $16^{\\frac{3}{4}}=8$ and $81^{\\frac{3}{4}}=27$, so $19A=1900$ and $A=100$. A bill of $12500$ then inverts as

$$100 n^{\\frac{3}{4}}=12500$$

$$n^{\\frac{3}{4}}=125=5^{3}$$

$$n=5^{4}=625$$

Six hundred and twenty-five sits above $600$, so the statement is True.`,
    ],
  },
  "math-8-52": {
    overview: `Downwind particle concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre for distance $x>0$ metres from the stack. A monitor at $4$ metres reads exactly $43.75$ more than a monitor at $16$ metres.

The exponent $-\\frac{3}{2}$ is given, so only $A$ is unknown. The $43.75$ figure is a difference of two readings:

$$A\\cdot 4^{-\\frac{3}{2}}-A\\cdot 16^{-\\frac{3}{2}}=43.75$$

A scale question uses

$$\\frac{c(kx)}{c(x)}=k^{-\\frac{3}{2}}$$

in which the coefficient cancels.`,
    tacticals: [
      `**A.** → True

Inverse-linear decay would multiply concentration by $\\frac{1}{2}$ on a doubling of distance. Here the exponent is $-\\frac{3}{2}$, so

$$\\frac{c(2x)}{c(x)}=2^{-\\frac{3}{2}}=\\frac{1}{2\\sqrt{2}}\\approx 0.354$$

which is steeper than $\\frac{1}{2}$. Because $-\\frac{3}{2}<-1$, concentration falls faster than inverse-linear decay, so the statement is True.`,
      `**B.** → False

Concentration per metre of distance is $c(x)/x$. With $c(x)=A x^{-\\frac{3}{2}}$ that quotient is

$$\\frac{c(x)}{x}=A x^{-\\frac{5}{2}}$$

The leftover exponent is not $0$, so the intensity still depends on range. It is steeper near the stack than far downwind, so the statement is False.`,
      `**C.** → True

The two monitors give $4^{-\\frac{3}{2}}=\\frac{1}{8}$ and $16^{-\\frac{3}{2}}=\\frac{1}{64}$, so

$$A\\left(\\frac{1}{8}-\\frac{1}{64}\\right)=43.75$$

$$\\frac{7A}{64}=43.75$$

$$A=400$$

At $100$ metres the three-halves power is $10^{3}=1000$:

$$c(100)=\\frac{400}{1000}=0.4$$

That sits below $0.5$, so the statement is True.`,
      `**D.** → True

A nonzero power inverts to another power. Starting from $c=A x^{-\\frac{3}{2}}$,

$$x=\\left(\\frac{A}{c}\\right)^{\\frac{2}{3}}$$

The new exponent is the reciprocal of $-\\frac{3}{2}$. Distance needed for a given concentration is still a monomial in $c$, so the statement is True.`,
      `**E.** → False

The logged gap recovers $A=400$, because $4^{-\\frac{3}{2}}=\\frac{1}{8}$ and $16^{-\\frac{3}{2}}=\\frac{1}{64}$. At $4$ metres:

$$c(4)=400\\cdot\\frac{1}{8}=50$$

Fifty is not under $45$. That $50$ is also $6.25+43.75$, the far reading plus the logged gap, so the statement is False.`,
    ],
  },
  "math-8-53": {
    overview: `Storm surge height is $s(w)=0.5 w^{0.5}$ metres at wind speed $w>0$, and the loss index is $L(s)=32 s^{3}$.

Composing substitutes the inner rule into the outer one. Powers multiply and the inner coefficient is raised to the outer exponent:

$$L(w)=32\\bigl(0.5 w^{0.5}\\bigr)^{3}$$

The composed map is again a power of $w$.`,
    tacticals: [
      `**A.** → True

Surge is a square root of wind and loss cubes that surge, so the composed exponent is

$$\\frac{1}{2}\\cdot 3=\\frac{3}{2}$$

The inner coefficient $0.5$ is cubed as well:

$$32\\cdot 0.5^{3}=4$$

leaving $L(w)=4w^{\\frac{3}{2}}$. A product of powers of the same variable is again a power, so the statement is True.`,
      `**B.** → False

After both stages the leftover exponent is $\\frac{3}{2}$, so a doubling of wind multiplies loss by

$$\\frac{L(2w)}{L(w)}=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$$

which is not $2$. A one-for-one wind scale-up understates the second stage, so the statement is False.`,
      `**C.** → True

At $w=64$ the surge stage is a square root:

$$s(64)=0.5\\cdot 8=4$$

The loss stage then cubes that height:

$$L=32\\cdot 4^{3}=32\\cdot 64=2048$$

Two thousand and forty-eight sits above $2000$, so the statement is True.`,
      `**D.** → True

The composed exponent is $\\frac{3}{2}>1$, so each extra unit of wind adds more loss than the unit before it. The same doubling factor

$$2^{\\frac{3}{2}}=2\\sqrt{2}>2$$

is that acceleration in a scale. A proportional law would have carried exponent $1$, so the statement is True.`,
      `**E.** → False

Composing first gives $L(w)=4w^{\\frac{3}{2}}$. A loss of $1000$ inverts as

$$4w^{\\frac{3}{2}}=1000$$

$$w^{\\frac{3}{2}}=250$$

$$w=250^{\\frac{2}{3}}\\approx 39.7$$

which sits below $50$, not above it. At $w=50$ the three-halves power is already past $250$ after the coefficient $4$, so the statement is False.`,
    ],
  },
  "math-8-54": {
    overview: `Price impact is $I(v)=A v^{0.5}$ basis points for order size $v>0$ as a fraction of average daily volume. Increasing an order from $0.04$ ADV to $0.09$ ADV adds exactly $6$ basis points of impact. The scaled impact charge is $vI(v)$, and a notional fee is $F(v)=30v$.

The exponent $\\frac{1}{2}$ is given, so only $A$ is unknown. The $6$ basis points is a difference of two square roots:

$$A\\sqrt{0.09}-A\\sqrt{0.04}=6$$

The scaled charge multiplies impact by order size and raises the exponent by one.`,
    tacticals: [
      `**A.** → True

Impact is a square-root law. Doubling order size multiplies impact by

$$\\frac{I(2v)}{I(v)}=2^{\\frac{1}{2}}=\\sqrt{2}\\approx 1.41$$

which is not $2$. One half sits below one, so impact grows more slowly than order size, so the statement is True.`,
      `**B.** → False

The scaled charge is the product $vI(v)$. With $I(v)=A\\sqrt{v}$ that product is $A v^{\\frac{3}{2}}$, so a doubling multiplies the charge by

$$2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$$

which exceeds $2$. Impact itself lags, but multiplying by the doubled size pushes the charge past a doubling, so the statement is False.`,
      `**C.** → True

The square roots at the two logged sizes are $\\sqrt{0.09}=0.3$ and $\\sqrt{0.04}=0.2$, so

$$A(0.3-0.2)=6$$

$$A=60$$

At $0.16$ ADV:

$$\\sqrt{0.16}=0.4$$

$$I(0.16)=60\\cdot 0.4=24$$

Twenty-four sits above $20$, so the statement is True.`,
      `**D.** → True

With $A=60$ the scaled charge is $60 v^{\\frac{3}{2}}$ and the fee is $30v$. They meet when

$$60 v^{\\frac{3}{2}}=30v$$

$$60\\sqrt{v}=30$$

$$v=0.25$$

Past that order $\\sqrt{v}$ keeps growing, so $60\\sqrt{v}-30$ stays positive. Once the scaled charge overtakes the fee it stays larger, so the statement is True.`,
      `**E.** → False

The same calibration $A=60$ makes the scaled charge $60 v^{\\frac{3}{2}}$. At $v=0.25$:

$$\\left(\\frac{1}{4}\\right)^{\\frac{3}{2}}=\\frac{1}{8}$$

$$60\\cdot\\frac{1}{8}=7.5$$

Seven and a half sits below $10$. This is also the break-even order, where charge equals the notional fee $7.5$, so the statement is False.`,
    ],
  },
  "math-8-55": {
    overview: `Daily energy use follows $E(m)=A m^{\\frac{2}{3}}$ units for body mass $m>0$ kilograms. A $64$ kg animal uses exactly $70$ more energy units per day than a $27$ kg animal. A herd's total use is the sum of its animals' individual uses.

The exponent $\\frac{2}{3}$ is given, so only $A$ is unknown. Both masses are cubes, and the $70$ units is a difference of two levels:

$$A\\cdot 64^{\\frac{2}{3}}-A\\cdot 27^{\\frac{2}{3}}=70$$

Energy per kilogram subtracts one from the exponent.`,
    tacticals: [
      `**A.** → True

A nonzero power inverts to another power. From $E=A m^{\\frac{2}{3}}$,

$$m=\\left(\\frac{E}{A}\\right)^{\\frac{3}{2}}$$

The new exponent is the reciprocal of $\\frac{2}{3}$. Mass needed for a given daily energy is still a monomial in $E$, so the statement is True.`,
      `**B.** → True

Energy per kilogram is $E(m)/m$. With exponent $\\frac{2}{3}$ the leftover power is

$$\\frac{E(m)}{m}=A m^{-\\frac{1}{3}}$$

The leftover exponent is negative, so intensity falls as mass rises. A heavier animal uses more energy in total, but less per kilogram, so the statement is True.`,
      `**C.** → True

The two masses are cubes, so the two-thirds powers are squares of the cube roots:

$$27^{\\frac{2}{3}}=9$$

$$64^{\\frac{2}{3}}=16$$

The logged gap is then

$$A(16-9)=70$$

$$A=10$$

At $64$ kg:

$$E(64)=10\\cdot 16=160$$

One hundred and sixty sits above $150$, so the statement is True.`,
      `**D.** → False

Two equal animals use $2E(m)$. One animal of twice the mass uses

$$E(2m)=2^{\\frac{2}{3}}E(m)$$

Because $\\frac{2}{3}<1$, the factor $2^{\\frac{2}{3}}$ is about $1.59$, not $2$. Merging the two animals lowers total energy use rather than leaving it unchanged, so the statement is False.`,
      `**E.** → True

The same gap of $70$ recovers $A=10$, because $64^{\\frac{2}{3}}=16$ and $27^{\\frac{2}{3}}=9$. Two hundred and sixteen is $6^{3}$, so the two-thirds power is $36$:

$$E(216)=10\\cdot 36=360$$

Three hundred and sixty sits under $400$, so the statement is True.`,
    ],
  },
  "math-8-56": {
    overview: `Weekly footfall from a residential zone follows $f(d)=A d^{-1.5}$ visitors for driving distance $d>0$ kilometres. A zone $4$ kilometres away supplies $350$ more visitors a week than a zone $16$ kilometres away. A zone counts as core catchment when it supplies at least $100$ visitors a week.

The exponent $-1.5$ is given, so only $A$ is unknown. Both distances are perfect squares, and the recorded $350$ is a difference of two zones:

$$\\frac{A}{4^{1.5}}-\\frac{A}{16^{1.5}}=350$$

Core catchment inverts the same law at the $100$-visitor floor.`,
    tacticals: [
      `**A.** → True

The exponent $-\\frac{3}{2}$ is negative, so for $d_{2}>d_{1}$ the ratio of footfalls is

$$\\left(\\frac{d_{2}}{d_{1}}\\right)^{-\\frac{3}{2}}<1$$

A farther zone always supplies fewer visitors than a nearer one. Sign of the exponent is the ranking, so the statement is True.`,
      `**B.** → False

An inverse-square law would give the fourfold-distance factor $4^{-2}=\\frac{1}{16}$. The recovered exponent $-\\frac{3}{2}$ instead gives

$$4^{-\\frac{3}{2}}=\\frac{1}{8}$$

The two scale factors do not match. Inverse-square is the wrong power, so the statement is False.`,
      `**C.** → True

The shape factors are $4^{1.5}=8$ and $16^{1.5}=64$, so

$$\\frac{A}{8}-\\frac{A}{64}=350$$

$$\\frac{7A}{64}=350$$

$$A=3200$$

At $9$ kilometres, $9^{1.5}=27$:

$$f(9)=\\frac{3200}{27}\\approx 118.5$$

That still clears the hundred-visitor core threshold, so the statement is True.`,
      `**D.** → True

With $A=3200$ the core floor $f(d)=100$ inverts as

$$3200 d^{-1.5}=100$$

$$d^{1.5}=32$$

$$d=32^{\\frac{2}{3}}\\approx 10.08$$

Ten kilometres still sits inside, because $10^{1.5}\\approx 31.62<32$. Eleven kilometres is already out, because $11\\sqrt{11}\\approx 36.48>32$. Core catchment already ends before $11$ kilometres, so the statement is True.`,
      `**E.** → False

The slope of $f(d)=3200 d^{-1.5}$ is

$$f'(d)=-4800 d^{-\\frac{5}{2}}$$

Its size is $150$ at $4$ km and only about $4.69$ at $16$ km. An extra kilometre cuts more visitors near the park than far from it. Distance-decay drops are steepest at the door, so the statement is False.`,
    ],
  },
  "math-8-57": {
    overview: `Daily output from a rooftop array follows $y(a)=A a^{r}$ kilowatt-hours for installed panel area $a>0$ square metres. A $100$ m$^{2}$ array delivers $240$ kWh a day, and a $225$ m$^{2}$ array delivers $360$ kWh. A proposal would expand the second array to $450$ m$^{2}$.

Both $A$ and $r$ are unknown. The ratio of the two arrays cancels $A$ and isolates $r$; either array then pins $A$:

$$\\left(\\frac{225}{100}\\right)^{r}=\\frac{360}{240}$$

$$A\\cdot 100^{r}=240$$

A scale question uses $\\frac{y(ka)}{y(a)}=k^{r}$.`,
    tacticals: [
      `**A.** → True

The two arrays give $2.25^{r}=1.5$. Because $1.5=2.25^{\\frac{1}{2}}$,

$$r=\\frac{1}{2}$$

Doubling area then multiplies output by $\\sqrt{2}\\approx 1.41$, not by $2$. One half sits below one, so output grows more slowly than installed area, so the statement is True.`,
      `**B.** → False

From $r=\\frac{1}{2}$ and $A\\cdot 10=240$, the coefficient is $A=24$, so $y(a)=24\\sqrt{a}$. Expanding $225$ m$^{2}$ to $450$ m$^{2}$ is a doubling, and

$$y(450)=360\\cdot\\sqrt{2}\\approx 509$$

which sits under $520$. A linear doubling would have claimed $720$, so the statement is False.`,
      `**C.** → True

Output per square metre is $y(a)/a$. With $y(a)=24\\sqrt{a}$ that quotient is

$$\\frac{y(a)}{a}=24 a^{-\\frac{1}{2}}$$

The leftover exponent is negative. A larger roof delivers more kilowatt-hours in total, but fewer per square metre, so the statement is True.`,
      `**D.** → True

To double the $240$ kWh output, $24\\sqrt{a}=480$ forces

$$\\sqrt{a}=20$$

$$a=400$$

The $100$ m$^{2}$ array must quadruple, which is more than a doubling. Any $r<1$ doubling of output requires more than a doubling of area, so the statement is True.`,
      `**E.** → True

The same $a=400$ that doubles the logged $240$ kWh delivers

$$y(400)=24\\cdot 20=480$$

which sits above $470$. Twenty squared is $400$. The $470$ cutoff is a near miss on that exact doubling array, so the statement is True.`,
    ],
  },
  "math-8-58": {
    overview: `Unit cost for battery cells follows $c(N)=A N^{b}$ euros for cumulative output $N>0$ in thousands of cells. At $100$ thousand cells the unit cost was $80$, and at $400$ thousand it was $40$. Cumulative spend is unit cost multiplied by volume, $S(N)=N\\,c(N)$.

Two milestones give two equations. Their ratio isolates $b$; either milestone then fixes $A$:

$$4^{b}=\\frac{40}{80}$$

$$A\\cdot 100^{b}=80$$

Spend raises the exponent by one.`,
    tacticals: [
      `**A.** → False

The milestone ratio is $4^{b}=\\frac{1}{2}$. Because $4^{-\\frac{1}{2}}=\\frac{1}{2}$,

$$b=-\\frac{1}{2}$$

Doubling volume then multiplies unit cost by $2^{-\\frac{1}{2}}\\approx 0.707$, not by $\\frac{1}{2}$. Quadrupling would halve the unit cost, but a single doubling does not, so the statement is False.`,
      `**B.** → True

With $b=-\\frac{1}{2}$ the unit cost $A N^{-\\frac{1}{2}}$ falls, while cumulative spend is

$$S(N)=A N^{\\frac{1}{2}}$$

The leftover exponent on spend is positive, so $S$ still rises. Cheaper cells can still mean a larger total cheque as volume grows, so the statement is True.`,
      `**C.** → True

From $b=-\\frac{1}{2}$ and $100^{-\\frac{1}{2}}=\\frac{1}{10}$, the coefficient satisfies $A/10=80$, so $A=800$. At $1600$ thousand cells:

$$\\sqrt{1600}=40$$

$$c(1600)=\\frac{800}{40}=20$$

Twenty sits below $25$. Two further quadruplings from $c(100)=80$ are $40$ then $20$, so the statement is True.`,
      `**D.** → False

Cumulative spend is $S(N)=800\\sqrt{N}$. Quadrupling volume multiplies spend by

$$4^{\\frac{1}{2}}=2$$

exactly a doubling, not more than a doubling. From $S(100)=8000$ the spend at $400$ thousand cells is $16000$, twice, so the statement is False.`,
      `**E.** → True

The same $A=800$ at $25$ thousand cells uses $\\sqrt{25}=5$:

$$c(25)=\\frac{800}{5}=160$$

One hundred and sixty sits above $150$. Early on the learning curve the unit cost is still high, so the statement is True.`,
    ],
  },
  "math-8-59": {
    overview: `Sediment transport follows $S(v)=A v^{3}$ tonnes per day for flow velocity $v>0$, and a gauged run at $v=3$ carried $135$ tonnes per day. Velocity itself depends on discharge through $v(q)=\\frac{q^{0.5}}{2}$. The channel's stability limit is $5000$ tonnes per day.

One gauged run calibrates the transport stage:

$$A\\cdot 3^{3}=135$$

Composing then substitutes $v(q)$ into $S(v)$, which multiplies the exponents and cubes the inner coefficient.`,
    tacticals: [
      `**A.** → True

The gauged run gives $27A=135$, so $A=5$. Composing with $v(q)=\\frac{1}{2}q^{\\frac{1}{2}}$ then yields

$$S(q)=5\\left(\\frac{q^{\\frac{1}{2}}}{2}\\right)^{3}=0.625 q^{\\frac{3}{2}}$$

Doubling discharge multiplies transport by $2^{\\frac{3}{2}}\\approx 2.83$, which exceeds $2$. The leftover exponent sits above one, so the statement is True.`,
      `**B.** → True

Velocity is a square root of discharge and transport cubes velocity, so the composed exponent is

$$\\frac{1}{2}\\cdot 3=\\frac{3}{2}$$

A product of powers of the same variable is again a power. Transport after both stages is a monomial in $q$, so the statement is True.`,
      `**C.** → True

With $A=5$ the composed law is $S(q)=0.625 q^{1.5}$. The $5000$ t/day limit inverts as

$$0.625 q^{1.5}=5000$$

$$q^{1.5}=8000$$

$$q=400$$

Four hundred contributes $20^{3}=8000$ after the three-halves power, and $0.625\\cdot 8000=5000$, which sits above $4500$, so the statement is True.`,
      `**D.** → False

The first-stage law is $S(v)=5v^{3}$. Doubling velocity multiplies transport by

$$2^{3}=8$$

not by $2$. The claim is about $S(v)$, not about the composed $S(q)$. Mixing the two stages is the mismatch, so the statement is False.`,
      `**E.** → False

At discharge $64$,

$$v(64)=\\frac{8}{2}=4$$

$$S=5\\cdot 4^{3}=5\\cdot 64=320$$

Three hundred and twenty already clears $300$. Transport is not still under the line, so the statement is False.`,
    ],
  },
  "math-8-60": {
    overview: `Demand follows $q(p)=A p^{-3}$ units at a price $p>0$, and a price of $2$ clears $500$ units. A proposed indexation would raise the price by $10\\%$ across the board. Revenue is $R=pq$.

The isoelastic form fixes the exponent. The observed pair pins the coefficient:

$$A\\cdot 2^{-3}=500$$

Multiplying by $p$ raises the exponent by one. A price factor $k$ then scales quantity by $k^{-3}$ and revenue by $k^{-2}$.`,
    tacticals: [
      `**A.** → True

Revenue is price times quantity. With $q=A p^{-3}$ that product is

$$R(p)=A p^{-2}$$

A product of two powers of the same variable is again a power. Revenue is a monomial in price, so the statement is True.`,
      `**B.** → True

The leftover exponent on $R(p)=A p^{-2}$ is negative, so $R$ falls as $p$ rises. Highly elastic demand, exponent $-3$, means a price rise cuts quantity by more than enough to shrink $pq$. Raising the price always cuts revenue along this curve, so the statement is True.`,
      `**C.** → True

From $A\\cdot\\frac{1}{8}=500$, the coefficient is $A=4000$, so $R(p)=4000 p^{-2}$. At $p=2.50$:

$$2.5^{2}=\\frac{25}{4}$$

$$R(2.5)=4000\\cdot\\frac{4}{25}=640$$

Six hundred and forty sits below $700$, so the statement is True.`,
      `**D.** → True

A $10\\%$ price rise is the multiplier $k=1.1$. Quantity scales by

$$1.1^{-3}\\approx 0.751$$

a cut of about $24.9\\%$, which is more than $20\\%$. The exponent $-3$ acts on the whole factor, so the statement is True.`,
      `**E.** → False

Elastic demand is why a price rise cuts revenue here, not why it would raise it. With leftover exponent $-2$,

$$1.1^{-2}\\approx 0.826$$

about a $17\\%$ revenue drop. Along this curve a $10\\%$ price rise shrinks the till, so the statement is False.`,
    ],
  },
};

apply("./51_60.json", patches);
