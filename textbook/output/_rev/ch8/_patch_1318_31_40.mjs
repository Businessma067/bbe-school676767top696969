import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(dir, "31_40.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const updates = {
  "math-8-31": {
    overview: `A packing station's output follows the power $N(h)=A h^{\\frac{2}{3}}$ items after $h>0$ hours. The exponent is given, so the recorded extension from $8$ to $27$ hours, a difference of two levels, recovers $A$.

Because the exponent sits below one, an extra hour adds less later than earlier, and items packed per hour fall. A scale question uses $k^{\\frac{2}{3}}$. A nonzero power inverts to another power, so a target count of $250$ items becomes a shift length.`,
    letters: [
      `**A.** → True

The recorded extension is $A\\bigl(27^{\\frac{2}{3}}-8^{\\frac{2}{3}}\\bigr)=90$. Since $27^{\\frac{2}{3}}=9$ and $8^{\\frac{2}{3}}=4$:

$$5A=90$$

$$A=18$$

Output is then $N(h)=18h^{\\frac{2}{3}}$, so $N'(h)=12h^{-\\frac{1}{3}}$. The leftover exponent is negative, so $N'(27)<N'(8)$, and the statement is True.`,
      `**B.** → False

Doubling any shift multiplies items by $k^{\\frac{2}{3}}$, because $A$ cancels:

$$\\frac{N(2h)}{N(h)}=2^{\\frac{2}{3}}$$

$$2^{\\frac{2}{3}}\\neq 2$$

The count is not doubled, so the statement is False.`,
      `**C.** → True

Items packed per hour are $18h^{-\\frac{1}{3}}$. The leftover exponent is negative, so that average falls as the shift lengthens.

Falling average product is the $r<1$ story, so the statement is True.`,
      `**D.** → True

A twenty-seven-hour shift is a level of the recovered rule:

$$N(27)=18\\cdot 9=162$$

That sits above $150$ items, so the statement is True.`,
      `**E.** → False

The $250$-item order inverts $18h^{\\frac{2}{3}}=250$:

$$h=\\left(\\frac{125}{9}\\right)^{\\frac{3}{2}}$$

That length is about $51.8$ hours, which sits past $40$, so the statement is False.`,
    ],
  },
  "math-8-32": {
    overview: `Aerodynamic drag follows the power $F(v)=A v^{r}$ newtons at airspeed $v>0$. Two wind-tunnel runs recover both constants: the ratio cancels $A$ and isolates $r$; either level then pins $A$. Absorbed power is the product $P=F\\cdot v$, a leftover power of airspeed. The mounting is a level constraint at $250$ N.

A scale question uses $k^{r}$. A nonzero power inverts to another power.`,
    letters: [
      `**A.** → True

The two runs give $\\frac{128}{16}=\\bigl(\\frac{16}{4}\\bigr)^{r}$, so $4^{r}=8$ and $r=\\frac{3}{2}$. Then $A\\cdot 4^{\\frac{3}{2}}=16$ pins $A=2$. Absorbed power composes as

$$P(v)=2v^{\\frac{5}{2}}$$

That is a power of airspeed, so the statement is True.`,
      `**B.** → False

Doubling airspeed multiplies drag by $k^{\\frac{3}{2}}$, because $A$ cancels:

$$\\frac{F(2v)}{F(v)}=2^{\\frac{3}{2}}=2\\sqrt{2}$$

Since $2\\sqrt{2}<3$, drag is not more than tripled, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $F=2v^{\\frac{3}{2}}$:

$$v=\\left(\\frac{F}{2}\\right)^{\\frac{2}{3}}$$

Airspeed that produces a given drag is a monomial in that drag, so the statement is True.`,
      `**D.** → False

The mounting rating inverts $2v^{\\frac{3}{2}}=250$:

$$v^{\\frac{3}{2}}=125$$

$$v=25$$

The rating is first reached at $25$ m/s, which is not above $30$, so the statement is False.`,
      `**E.** → True

At $16$ m/s absorbed power is a level:

$$P(16)=2\\cdot 16^{\\frac{5}{2}}=2048$$

That is more than $2$ kW, so the statement is True.`,
    ],
  },
  "math-8-33": {
    overview: `A regional utility faces the power $q(p)=A p^{-\\frac{1}{2}}$ units a month at price $p>0$. The sixteen-euro reading fixes $A$. Revenue is the product $R=pq$, a leftover power of price.

Because the leftover exponent on $R$ is positive, revenue rises as the price rises even though quantity falls. A scale question uses $k^{-\\frac{1}{2}}$. A nonzero power inverts to another power.`,
    letters: [
      `**A.** → True

The recorded pair pins $A$ through $q(16)=300$:

$$16^{\\frac{1}{2}}=4$$

$$\\frac{A}{4}=300$$

$$A=1200$$

Revenue is then $R(p)=1200p^{\\frac{1}{2}}$. The leftover exponent is positive, so revenue rises as the price rises, and the statement is True.`,
      `**B.** → False

Quantity falling when price rises does not force revenue to fall. Here $R(p)=1200p^{\\frac{1}{2}}$ still climbs, because demand is inelastic enough that the price rise outruns the quantity cut.

Revenue and quantity need not move together, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $q=1200p^{-\\frac{1}{2}}$:

$$p=\\left(\\frac{1200}{q}\\right)^{2}$$

Price needed for a given monthly quantity is a monomial in that quantity, so the statement is True.`,
      `**D.** → True

At a price of $25$:

$$q(25)=\\frac{1200}{5}=240$$

That is fewer than $250$ units, so the statement is True.`,
      `**E.** → False

A monthly quantity of $200$ inverts the recovered rule:

$$1200p^{-\\frac{1}{2}}=200$$

$$p=36$$

The required price is $36$, which is not above $40$, so the statement is False.`,
    ],
  },
  "math-8-34": {
    overview: `A kiln's daily output follows the power $y(x)=A x^{\\frac{4}{3}}$ tonnes for a fuel feed of $x>0$ cubic metres. The test firing at a feed of $27$ fixes $A$. The site licence forbids shipping more than $1024$ tonnes a day, so billed output is $\\min(y(x),1024)$ once the ceiling binds.

Because the exponent exceeds one, output grows faster than the feed, and output per cubic metre rises. A scale question uses $k^{\\frac{4}{3}}$. A horizontal cap is not a power of the feed.`,
    letters: [
      `**A.** → False

The test firing pins $A$ through $y(27)=324$:

$$27^{\\frac{4}{3}}=81$$

$$81A=324$$

$$A=4$$

To double output, the feed multiplier $k$ must satisfy $k^{\\frac{4}{3}}=2$. Because the exponent exceeds one, $k=2^{\\frac{3}{4}}<2$. The feed must less than double, so the statement is False.`,
      `**B.** → True

Output per cubic metre of fuel is $4x^{\\frac{1}{3}}$. The leftover exponent is positive, so that average rises as the feed increases.

An exponent above one forces a rising average product, so the statement is True.`,
      `**C.** → True

The licence binds when $4x^{\\frac{4}{3}}=1024$, so $x=64$. From that feed onward shipped output is the constant $1024$.

A horizontal cap is not $A x^{r}$, so daily shipped output is no longer a power of the feed, and the statement is True.`,
      `**D.** → True

A feed of $8$ is a level of the recovered rule:

$$8^{\\frac{4}{3}}=16$$

$$y(8)=4\\cdot 16=64$$

That sits above $50$ tonnes, so the statement is True.`,
      `**E.** → False

The licensed ceiling binds at feed $x=64$, which sits past $50$. A feed of $50$ is still below the cap.

The ceiling does not bind before a feed of $50$, so the statement is False.`,
    ],
  },
  "math-8-35": {
    overview: `A calibration stage converts a raw reading $x>0$ by the power $f(x)=A x^{\\frac{2}{3}}$, and the reading at $x=8$ fixes $A$. A reporting stage converts an index $y>0$ by $g(y)=\\frac{y^{\\frac{3}{2}}}{27}$.

The two exponents are reciprocals, so each composition is the identity: $g\\circ f$ recovers $x$ and $f\\circ g$ recovers $y$. A level question evaluates $f$ at a given reading.`,
    letters: [
      `**A.** → True

The calibration reading pins $A$ through $f(8)=36$:

$$8^{\\frac{2}{3}}=4$$

$$4A=36$$

$$A=9$$

Then $g(f(x))=\\frac{(9x^{\\frac{2}{3}})^{\\frac{3}{2}}}{27}=x$. Reporting after calibration returns the original reading, so the statement is True.`,
      `**B.** → False

The composition $g\\circ f$ is the identity, which has exponent $1$. An identity grows exactly as fast as the raw reading, not more slowly.

A leftover exponent of $1$ is lockstep, so the statement is False.`,
      `**C.** → False

The other order is $f(g(y))=9\\bigl(\\frac{y^{\\frac{3}{2}}}{27}\\bigr)^{\\frac{2}{3}}=y$. Applying the stages in reverse also recovers the original index.

The two maps are inverses of each other, so the statement is False.`,
      `**D.** → True

A raw reading of $64$ is a level of $f(x)=9x^{\\frac{2}{3}}$:

$$64^{\\frac{2}{3}}=16$$

$$f(64)=9\\cdot 16=144$$

That sits above $140$, so the statement is True.`,
      `**E.** → False

A raw reading of $125$:

$$125^{\\frac{2}{3}}=25$$

$$f(125)=9\\cdot 25=225$$

The claim wants an index under $200$. Two hundred and twenty-five sits above that line, so the statement is False.`,
    ],
  },
  "math-8-36": {
    overview: `Algorithm S obeys the power $S(x)=a x^{\\frac{1}{2}}$ against a query load $x>0$, and the benchmark at load $4$ recovers $a$. Algorithm T is proportional to $x^{\\frac{3}{2}}$, and the same benchmark recovers its coefficient.

The ratio $\\frac{T}{S}$ is a leftover power of $x$, so the algorithms meet at most once and the leader past that meeting stays ahead. A level question evaluates both recovered rules at a given load.`,
    letters: [
      `**A.** → False

The S benchmark pins $a$ through $S(4)=16$, so $a=8$. The T benchmark at the same load pins $T(x)=x^{\\frac{3}{2}}$. Their difference factors as

$$T(x)-S(x)=x^{\\frac{1}{2}}(x-8)$$

On $x>0$ they meet only at $x=8$, not at two different positive loads, so the statement is False.`,
      `**B.** → True

Past the unique positive meeting $x=8$, the leftover factor $x-8$ stays positive, so $T>S$ at every greater load.

Raising the load further cannot put S back in front, so the statement is True.`,
      `**C.** → False

The ratio of the recovered scores is

$$\\frac{T(x)}{S(x)}=\\frac{x}{8}$$

That leftover power of $x$ is not constant, so the statement is False.`,
      `**D.** → True

The unique positive meeting is $x=8$, which sits above $6$.

They first meet past load $6$, so the statement is True.`,
      `**E.** → True

At a load of $16$:

$$T(16)=64, \\qquad S(16)=32$$

Algorithm T is ahead by $32$, which is more than $30$, so the statement is True.`,
    ],
  },
  "math-8-37": {
    overview: `Sustained capacity follows the power $C(m)=A m^{\\frac{4}{5}}$ requests per second for $m>0$ machines. The thirty-two-machine reading fixes $A$. The support contract will not certify more than $500$ requests per second, a level constraint on $C$.

Because the exponent is positive, capacity itself keeps rising. An exponent below one still reaches any finite ceiling. On log-log paper a power is a straight line.`,
    letters: [
      `**A.** → True

The recorded fleet pins $A$ through $C(32)=80$:

$$32^{\\frac{4}{5}}=16$$

$$16A=80$$

$$A=5$$

Capacity is then $C(m)=5m^{\\frac{4}{5}}$. The exponent is positive, so sustained capacity keeps rising as machines are added, and the statement is True.`,
      `**B.** → False

An exponent below one still tends to infinity as $m$ grows. The ceiling $C(m)=500$ inverts at

$$5m^{\\frac{4}{5}}=500$$

$$m=100^{\\frac{5}{4}}$$

which is a finite fleet of about $316$ machines. The contracted ceiling is reached, so the statement is False.`,
      `**C.** → True

A power $A m^{r}$ is a straight line on log-log paper, with slope equal to the exponent.

The uncapped capacity law is exactly that shape, so the statement is True.`,
      `**D.** → True

A fleet of $243$ machines is a level of the recovered rule:

$$243^{\\frac{4}{5}}=81$$

$$C(243)=5\\cdot 81=405$$

That sits above $400$ requests per second, so the statement is True.`,
      `**E.** → False

The contracted ceiling binds at about $316$ machines, which sits past $250$.

The ceiling does not bind before $250$ machines, so the statement is False.`,
    ],
  },
  "math-8-38": {
    overview: `A seasonal workshop's revenue follows the power $R(L)=A L^{\\frac{1}{2}}$ from $L>0$ hours of hired labour. The recorded extension from $100$ to $400$ hours, a difference of two levels, recovers $A$. Labour is paid a wage of $6$ per hour, so the wage bill is itself a power of hours. Net gain $R(L)-6L$ is a difference of two distinct powers, hence not a power.

The hours that maximise net gain are not the hours at which net gain is zero.`,
    letters: [
      `**A.** → False

The recorded extension is $A\\bigl(20-10\\bigr)=1200$, so $A=120$ and $R(L)=120L^{\\frac{1}{2}}$. Net gain is then

$$\\Pi(L)=120L^{\\frac{1}{2}}-6L$$

A difference of two distinct powers is not itself a power of hours hired, so the statement is False.`,
      `**B.** → False

Net gain is maximised where $R'(L)=6$, so $L=100$. Net gain is zero where $120L^{\\frac{1}{2}}=6L$, so $L=400$.

Those are different hours, so the statement is False.`,
      `**C.** → True

The wage bill is $6L$, a power of hours hired with exponent $1$ and coefficient $6$.

A linear wage is still a monomial, so the statement is True.`,
      `**D.** → True

At nine hundred hours:

$$\\Pi(900)=120\\cdot 30-6\\cdot 900=-1800$$

That sits below $-1000$, so the statement is True.`,
      `**E.** → True

The unique positive root of $\\Pi(L)=0$ is $L=400$, which sits past $300$ hours.

Net gain crosses zero only after more than $300$ hours, so the statement is True.`,
    ],
  },
  "math-8-39": {
    overview: `A firm must produce $60$ units and can split them between two plants. Plant 1's cost is the power $C_{1}(q)=A q^{2}$, and a run of $20$ units there recovers $A$. Plant 2's cost is $C_{2}(q)=k q^{2}$, and a run of $40$ units there recovers $k$.

Each plant is a quadratic power, so cost per unit rises with its own run. Adding the two plants at a free split is not a single power of the $60$-unit order. The cheapest split equalises marginal costs.`,
    letters: [
      `**A.** → False

The logged runs pin $A=\\frac{1}{2}$ and $k=\\frac{1}{4}$, so $C_{1}(q)=\\frac{1}{2}q^{2}$ and $C_{2}(q)=\\frac{1}{4}q^{2}$. Equalising marginal costs on a $60$-unit order sends $20$ units to plant 1 and $40$ to plant 2, at total cost $600$.

Concentrating in either plant costs more than that split, so the statement is False.`,
      `**B.** → False

Whatever split $(q,60-q)$ is chosen, total cost is $\\frac{1}{2}q^{2}+\\frac{1}{4}(60-q)^{2}$. That is a quadratic in the split, not a monomial in the order size $60$.

Two separate powers do not combine into one power of the order, so the statement is False.`,
      `**C.** → True

Plant 2's cost per unit is $\\frac{C_{2}(q)}{q}=\\frac{1}{4}q$. The leftover exponent is positive, so unit cost rises as that plant produces more.

A quadratic power forces a rising average cost, so the statement is True.`,
      `**D.** → True

The cheaper plant is plant 2. Concentrating all $60$ units there costs

$$C_{2}(60)=\\frac{1}{4}\\cdot 3600=900$$

That sits above $800$, so the statement is True.`,
      `**E.** → True

Sending $30$ units to each plant costs

$$C_{1}(30)+C_{2}(30)=\\frac{1}{2}\\cdot 900+\\frac{1}{4}\\cdot 900=675$$

That sits under $700$, so the statement is True.`,
    ],
  },
  "math-8-40": {
    overview: `A laboratory fits the power $y=A x^{r}$ using the first two measurements $(4,24)$ and $(16,192)$. The ratio of those two points cancels $A$ and isolates $r$; either level then pins $A$.

A later measurement either lies on that fitted law or it does not. A level question evaluates the fitted rule at a planned input.`,
    letters: [
      `**A.** → True

The first two measurements give $\\frac{192}{24}=\\bigl(\\frac{16}{4}\\bigr)^{r}$, so $4^{r}=8$ and $r=\\frac{3}{2}$. Then $A\\cdot 4^{\\frac{3}{2}}=24$ pins $A=3$.

Two points of a power law always determine a unique pair $(A,r)$ with $A>0$, so those measurements are consistent with a single power law, and the statement is True.`,
      `**B.** → False

An exponent of $2$ would require $4^{2}=16$ as the $y$-ratio, but the logged ratio is $8$.

The same two measurements do not fit $r=2$, so the statement is False.`,
      `**C.** → False

The fitted law is $y=3x^{\\frac{3}{2}}$. At $x=9$:

$$y(9)=3\\cdot 9^{\\frac{3}{2}}=81$$

That matches the third measurement exactly, so the measurement does not contradict the fit, and the statement is False.`,
      `**D.** → True

At the planned run $x=25$:

$$y(25)=3\\cdot 25^{\\frac{3}{2}}=375$$

That sits above $350$, so the statement is True.`,
      `**E.** → True

At $x=9$ the fitted response is $81$, which sits above $70$.

The third measurement and the fitted level are the same $81$, so the statement is True.`,
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
