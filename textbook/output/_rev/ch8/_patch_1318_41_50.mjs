import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(dir, "41_50.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const updates = {
  "math-8-41": {
    overview: `A component supplier faces the power $q(p)=A p^{-2}$ units at price $p>0$ euros. The catalogue pair at $4$ euros and $400$ units fixes $A$. Inverting takes the reciprocal exponent, so price as a function of quantity is itself a power. Revenue $R=pq$ can be written as a leftover power of $p$ or of $q$, and those two leftover exponents have opposite signs.`,
    letters: [
      `**A.** → True

The catalogue pair pins $A$ through $q(4)=400$:

$$4^{-2}=\\frac{1}{16}$$

$$\\frac{A}{16}=400$$

$$A=6400$$

Inverting $q=6400p^{-2}$ gives $p=80q^{-\\frac{1}{2}}$. Price that clears a given quantity is a monomial in that quantity, so the statement is True.`,
      `**B.** → True

At $25$ units the inverse is a level:

$$p(25)=\\frac{80}{5}=16$$

That sits under $20$ euros, so the statement is True.`,
      `**C.** → False

Revenue as a function of price is $R(p)=6400p^{-1}$. The leftover exponent is negative, so raising the catalogue price cuts revenue.

Inverse-square demand is elastic enough that a price rise shrinks $pq$, so the statement is False.`,
      `**D.** → True

Revenue as a function of quantity is $R(q)=80q^{\\frac{1}{2}}$. At $100$ units:

$$R(100)=80\\cdot 10=800$$

That sits above $750$ euros, so the statement is True.`,
      `**E.** → False

The leftover exponent on $R(q)$ is $\\frac{1}{2}>0$, so a larger quantity brings in more revenue, not less.

Along this curve the quantity rise outruns the price cut, so the statement is False.`,
    ],
  },
  "math-8-42": {
    overview: `A workshop's output follows the power $Y(L)=A L^{\\frac{1}{2}}$ units for $L>0$ labour hours. The recorded extension from $9$ hours to $36$ hours, a difference of two levels, recovers $A$. Average product is the leftover power $\\frac{Y}{L}$.

Because the exponent sits below one, average product falls, an extra hour adds less later than earlier, and doubling output needs more than a doubling of hours.`,
    letters: [
      `**A.** → True

The recorded extension is $A\\bigl(6-3\\bigr)=60$, so $A=20$ and $Y(L)=20L^{\\frac{1}{2}}$. Average product is then

$$\\frac{Y}{L}=20L^{-\\frac{1}{2}}$$

The leftover exponent is negative, so average product falls as the shift lengthens, and the statement is True.`,
      `**B.** → True

A thirty-six-hour shift is a level of the recovered rule:

$$Y(36)=20\\cdot 6=120$$

That sits above $100$ units, so the statement is True.`,
      `**C.** → False

An extra hour is the slope $Y'(L)=10L^{-\\frac{1}{2}}$. The leftover exponent is negative, so $Y'(36)<Y'(9)$.

An extra hour adds less output after $36$ hours than after $9$, not more, so the statement is False.`,
      `**D.** → True

The nine-hour output is $Y(9)=60$. Doubling that output means $Y(L)=120$, which inverts at $L=36$.

Hours must go from $9$ to $36$, which is more than a doubling, so the statement is True.`,
      `**E.** → False

At twenty-five hours, average product is a level:

$$\\frac{Y(25)}{25}=\\frac{20\\cdot 5}{25}=4$$

That sits below $5$ units per hour, so the statement is False.`,
    ],
  },
  "math-8-43": {
    overview: `A contract manufacturer earns the power $R(q)=A q^{\\frac{1}{2}}$ euros from an output of $q>0$ units. The run of $100$ units at $600$ euros recovers $A$. Profit subtracts a linear charge of $2$ euros per unit and a fixed charge of $400$, so profit is not a power of output even though revenue is.

Setting profit to zero is a quadratic in $\\sqrt{q}$, which can have two positive roots. Between those roots profit is positive; outside it is negative.`,
    letters: [
      `**A.** → True

The recorded run pins $A$ through $R(100)=600$:

$$100^{\\frac{1}{2}}=10$$

$$10A=600$$

$$A=60$$

Profit is $\\Pi(q)=60q^{\\frac{1}{2}}-2q-400$. Setting $\\Pi=0$ and writing $t=\\sqrt{q}$ gives $(t-10)(t-20)=0$, so $q=100$ and $q=400$. Two different positive break-evens, so the statement is True.`,
      `**B.** → True

At twenty-five units:

$$\\Pi(25)=60\\cdot 5-2\\cdot 25-400=-150$$

That sits more than $100$ euros below break-even, so the statement is True.`,
      `**C.** → False

Profit is positive only between the two break-evens $q=100$ and $q=400$. Past $400$ the linear charge dominates the square-root revenue, and profit turns negative again.

Once profit turns positive it does not stay positive at every larger output, so the statement is False.`,
      `**D.** → True

Revenue $R(q)=60q^{\\frac{1}{2}}$ is a power of output. Profit subtracts both a linear term and a constant, so it is not a monomial in $q$.

A leftover intercept or a second exponent kills the power-function shape, so the statement is True.`,
      `**E.** → False

At two hundred and twenty-five units:

$$\\Pi(225)=60\\cdot 15-2\\cdot 225-400=50$$

The claim wants profit exceeding $80$ euros. Fifty sits below that line, so the statement is False.`,
    ],
  },
  "math-8-44": {
    overview: `A city values a flood-defence programme of scale $x>0$ by the benefit power $B(x)=A x^{\\frac{1}{2}}$ and the cost power $C(x)=K x^{\\frac{3}{2}}$, both in millions. Each trial recovers its coefficient. Net benefit is the difference $B-C$.

The cost exponent exceeds the benefit exponent, so the two meet at exactly one positive scale and cost overtakes thereafter. Benefit per million of cost is a leftover power of $x$, not a constant.`,
    letters: [
      `**A.** → True

The benefit trial pins $A$ through $B(16)=72$, so $A=18$. The cost trial pins $K$ through $C(4)=4$, so $K=\\frac{1}{2}$. Setting $B=C$ gives

$$18x^{\\frac{1}{2}}=\\frac{1}{2}x^{\\frac{3}{2}}$$

$$x=36$$

They meet at exactly one positive scale, so the statement is True.`,
      `**B.** → True

At scale $16$ the recovered cost rule is a level:

$$C(16)=\\frac{1}{2}\\cdot 16^{\\frac{3}{2}}=32$$

That sits above $30$ million, so the statement is True.`,
      `**C.** → False

The cost exponent is $\\frac{3}{2}$ and the benefit exponent is $\\frac{1}{2}$. The larger exponent is on cost, so cost does overtake benefit past the unique meeting.

A smaller cost exponent would have been needed for cost never to overtake, so the statement is False.`,
      `**D.** → False

At scale $9$:

$$B(9)=18\\cdot 3=54$$

$$C(9)=\\frac{1}{2}\\cdot 27=13.5$$

Net benefit is $40.5$, which does not exceed $42$ million, so the statement is False.`,
      `**E.** → False

Benefit per million of cost is

$$\\frac{B(x)}{C(x)}=\\frac{36}{x}$$

That leftover power of $x$ is not the same at every scale, so the statement is False.`,
    ],
  },
  "math-8-45": {
    overview: `A furnace's throughput follows the power $T(g)=A g^{r}$ tonnes per hour for gas feed $g>0$. Two runs recover both constants: the ratio cancels $A$ and isolates $r$; either level then pins $A$. The site licence is a level cap of $32$ tonnes per hour.

Because the recovered exponent sits below one, throughput grows more slowly than the feed, and throughput per cubic metre falls. A scale question uses $k^{r}$.`,
    letters: [
      `**A.** → True

The two runs give $\\frac{36}{16}=\\bigl(\\frac{27}{8}\\bigr)^{r}$, so $r=\\frac{2}{3}$. Then $A\\cdot 8^{\\frac{2}{3}}=16$ pins $A=4$.

That exponent sits below one, so throughput grows more slowly than the gas feed, and the statement is True.`,
      `**B.** → True

The licensed ceiling inverts $4g^{\\frac{2}{3}}=32$:

$$g^{\\frac{2}{3}}=8$$

$$g=16\\sqrt{2}$$

Since $16\\sqrt{2}<24$, the ceiling is reached at a feed below $24$ cubic metres per hour, so the statement is True.`,
      `**C.** → False

Doubling the gas feed multiplies throughput by $k^{\\frac{2}{3}}$, because $A$ cancels:

$$\\frac{T(2g)}{T(g)}=2^{\\frac{2}{3}}$$

$$2^{\\frac{2}{3}}\\neq 2$$

Throughput is not doubled, so the statement is False.`,
      `**D.** → False

Throughput per cubic metre of gas is $4g^{-\\frac{1}{3}}$. The leftover exponent is negative, so that average falls as the feed rises, not rises.

An exponent below one forces a falling average product, so the statement is False.`,
      `**E.** → True

A feed of $64$ is a level of the recovered rule:

$$64^{\\frac{2}{3}}=16$$

$$T(64)=4\\cdot 16=64$$

That sits above $60$ tonnes per hour, so the statement is True.`,
    ],
  },
  "math-8-46": {
    overview: `A tapered rainwater basin stores the power $V(d)=A d^{2}$ cubic metres at depth $d>0$ metres. The recorded rise from $3$ metres to $5$ metres, a difference of two levels, recovers $A$.

Because the exponent exceeds one, stored volume grows faster than depth, and doubling volume needs less than a doubling of depth. A positive exponent has no finite cap as depth grows. A scale question uses $k^{2}$.`,
    letters: [
      `**A.** → True

The recorded rise is $A\\bigl(5^{2}-3^{2}\\bigr)=64$, so $16A=64$ and $A=4$. Volume is then $V(d)=4d^{2}$.

The exponent $2$ sits above one, so stored volume grows faster than depth, and the statement is True.`,
      `**B.** → True

At six metres the recovered rule is a level:

$$V(6)=4\\cdot 36=144$$

That sits above $140$ cubic metres, so the statement is True.`,
      `**C.** → False

To double stored volume, the depth multiplier $k$ must satisfy $k^{2}=2$, so $k=\\sqrt{2}<2$.

The water depth must less than double, not more than double, so the statement is False.`,
      `**D.** → False

A positive exponent sends $V(d)\\to\\infty$ as $d$ grows. Tapering is already built into the square law; it does not add a ceiling.

Stored volume has no finite cap, so the statement is False.`,
      `**E.** → False

Filling from $4$ metres to $8$ metres adds

$$V(8)-V(4)=4\\cdot 64-4\\cdot 16=192$$

That is not more than $200$ cubic metres, so the statement is False.`,
    ],
  },
  "math-8-47": {
    overview: `A fleet safety report scores braking energy by the power $E(v)=A v^{2}$, where $v>0$ is speed in kilometres per hour. The recorded rise from $30$ to $50$ kilometres per hour, a difference of two levels, recovers $A$.

Because the exponent exceeds one, equal speed increments raise the index by more at higher speeds, and index per unit of speed rises. A nonzero power inverts to another power, so the speed that produces a given index grows more slowly than the index itself.`,
    letters: [
      `**A.** → True

The recorded rise is $A\\bigl(50^{2}-30^{2}\\bigr)=80$, so $1600A=80$ and $A=\\frac{1}{20}$. The slope is then $E'(v)=\\frac{v}{10}$.

That leftover power is positive, so equal speed increments raise the index by more at higher speeds, and the statement is True.`,
      `**B.** → True

At $40$ kilometres per hour the recovered rule is a level:

$$E(40)=\\frac{1}{20}\\cdot 1600=80$$

That sits above $70$, so the statement is True.`,
      `**C.** → False

Index per kilometre per hour of speed is $\\frac{E(v)}{v}=\\frac{v}{20}$. The leftover exponent is positive, so that average is not the same at every speed.

A square law cannot have a constant average, so the statement is False.`,
      `**D.** → True

A nonzero power inverts to another power. From $E=\\frac{1}{20}v^{2}$:

$$v=\\sqrt{20E}$$

The inverse exponent $\\frac{1}{2}$ sits below one, so speed grows more slowly than the index, and the statement is True.`,
      `**E.** → False

At $80$ kilometres per hour:

$$E(80)=\\frac{1}{20}\\cdot 6400=320$$

The claim wants an index still under $300$. Three hundred and twenty sits above that line, so the statement is False.`,
    ],
  },
  "math-8-48": {
    overview: `Geometrically similar silos have steel skin $S(h)=a h^{2}$ square metres and capacity $V(h)=k h^{3}$ cubic metres for height $h>0$. The two-metre silo recovers both coefficients.

Steel uses exponent $2$ and capacity uses exponent $3$, so steel grows more slowly than capacity. Eliminating $h$ writes steel as a leftover power of capacity. A scale question uses $k^{2}$ for steel and $k^{3}$ for capacity.`,
    letters: [
      `**A.** → True

The two-metre silo pins $a\\cdot 4=12$ and $k\\cdot 8=8$, so $S(h)=3h^{2}$ and $V(h)=h^{3}$. Steel uses exponent $2$ and capacity uses exponent $3$.

The smaller exponent is on steel, so steel use grows more slowly than capacity as height rises, and the statement is True.`,
      `**B.** → True

A four-metre silo is a level of the capacity rule:

$$V(4)=4^{3}=64$$

That sits above $60$ cubic metres, so the statement is True.`,
      `**C.** → True

Eliminating height from the two recovered powers gives

$$S=3V^{\\frac{2}{3}}$$

Steel as a function of capacity is a monomial in $V$, so the statement is True.`,
      `**D.** → False

Two separate two-metre silos use $2\\cdot 12=24$ square metres of steel. One four-metre silo uses

$$S(4)=3\\cdot 16=48$$

Those are not the same steel, so the statement is False.`,
      `**E.** → False

An eight-metre silo uses

$$S(8)=3\\cdot 64=192$$

The claim wants more than $200$ square metres. One hundred and ninety-two sits below that line, so the statement is False.`,
    ],
  },
  "math-8-49": {
    overview: `Customs inspection time follows the power $T(n)=A n^{\\frac{1}{2}}$ hours for a consignment of $n>0$ shipments. The recorded rise from $4$ shipments to $36$ shipments, a difference of two levels, recovers $A$. A staffing plan can supply at most $40$ inspection hours, a level cap on $T$.

Because the exponent sits below one, total time is not proportional to $n$, and quadrupling a consignment doubles inspection time. The cap inverts to a largest legal consignment.`,
    letters: [
      `**A.** → False

The recorded rise is $A\\bigl(6-2\\bigr)=16$, so $A=4$ and $T(n)=4n^{\\frac{1}{2}}$. Proportionality would need exponent $1$.

The exponent is $\\frac{1}{2}$, so total inspection time is not proportional to the number of shipments, and the statement is False.`,
      `**B.** → True

The $40$-hour ceiling inverts $4n^{\\frac{1}{2}}=40$:

$$n=100$$

That consignment sits below $110$ shipments, so the ceiling is already binding below $110$, and the statement is True.`,
      `**C.** → False

Staffing that just meets the ceiling is $n=100$ with $T=40$. An extra shipment still adds $T'(n)=2n^{-\\frac{1}{2}}$, which at $n=100$ is $0.2$ hours, not almost nothing, and it would push the total past $40$.

A modestly larger consignment is not covered, so the statement is False.`,
      `**D.** → True

Quadrupling a consignment multiplies inspection time by $k^{\\frac{1}{2}}$, because $A$ cancels:

$$\\frac{T(4n)}{T(n)}=4^{\\frac{1}{2}}=2$$

Inspection time is multiplied by two, so the statement is True.`,
      `**E.** → False

A forty-nine-shipment consignment is a level:

$$T(49)=4\\cdot 7=28$$

That is not more than $30$ hours, so the statement is False.`,
    ],
  },
  "math-8-50": {
    overview: `Illuminance from a gallery spotlight follows the power $I(d)=A d^{-2}$ lux at distance $d>0$ metres. The recorded cut from $2$ metres to $4$ metres, a difference of two levels, recovers $A$.

A negative exponent of $-2$ means doubling the distance quarters the reading. An extra metre cuts more illuminance at a short distance than at a long one. A nonzero power inverts to another power, so distance as a function of illuminance is itself a power.`,
    letters: [
      `**A.** → True

The recorded cut is $A\\bigl(2^{-2}-4^{-2}\\bigr)=150$, so $\\frac{3A}{16}=150$ and $A=800$. Illuminance is then $I(d)=800d^{-2}$. Doubling distance multiplies illuminance by $k^{-2}$:

$$\\frac{I(2d)}{I(d)}=2^{-2}=\\frac{1}{4}$$

The reading is cut to one quarter, so the statement is True.`,
      `**B.** → True

At five metres the recovered rule is a level:

$$I(5)=\\frac{800}{25}=32$$

That sits under $40$ lux, so the statement is True.`,
      `**C.** → False

An extra metre is the slope $I'(d)=-1600d^{-3}$. The size of that cut is larger at $2$ metres than at $4$, because a more negative leftover exponent makes the drop steeper near the lamp.

An extra metre cuts less illuminance at $4$ metres, not more, so the statement is False.`,
      `**D.** → False

A nonzero power inverts to another power. From $I=800d^{-2}$:

$$d=\\sqrt{800}\\,I^{-\\frac{1}{2}}$$

Distance as a function of illuminance is still a monomial in $I$. Falling illuminance does not introduce a logarithm, so the statement is False.`,
      `**E.** → False

At three metres:

$$I(3)=\\frac{800}{9}$$

That is about $88.9$ lux, which is not still above $90$, so the statement is False.`,
    ],
  },
};

let n = 0;
for (const t of arr) {
  const u = updates[t.id];
  if (!u) continue;
  t.solution_overview = u.overview;
  t.tactical_explanations = u.letters;
  n += 1;
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
console.log("patched", n, fp);
