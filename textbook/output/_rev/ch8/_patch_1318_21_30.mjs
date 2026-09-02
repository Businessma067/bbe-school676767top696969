import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(dir, "21_30.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const updates = {
  "math-8-21": {
    overview: `Monthly subscriptions follow the power $q(p)=A p^{-2}$ at price $p>0$ euros. The five-euro reading fixes $A$. Revenue is the product $R=pq$, which is itself a leftover power of price.

A negative leftover slope means an extra euro cuts more subscribers at a low price than at a high one. A scale question uses $k^{-2}$. A nonzero power inverts to another power, so the price needed for a given number of subscriptions is itself a power of that number.`,
    letters: [
      `**A.** → True

The recorded pair pins $A$ through $q(5)=400$:

$$5^{-2}=\\frac{1}{25}$$

$$\\frac{A}{25}=400$$

$$A=10000$$

Demand is then $q(p)=10000p^{-2}$, so $q'(p)=-20000p^{-3}$. The size of that cut is larger at five euros than at twenty, and the statement is True.`,
      `**B.** → True

A nonzero power inverts to another power. From $q=10000p^{-2}$:

$$p=100q^{-\\frac{1}{2}}$$

Price needed for a given number of subscriptions is a monomial in that number, so the statement is True.`,
      `**C.** → False

Doubling price multiplies demand by $k^{-2}$, because $A$ cancels:

$$\\frac{q(2p)}{q(p)}=2^{-2}=\\frac{1}{4}$$

Demand is quartered, not halved, so the statement is False.`,
      `**D.** → True

Revenue along the curve is $R(p)=pq=10000p^{-1}$. At sixteen euros:

$$R(16)=\\frac{10000}{16}=625$$

That sits under $700$, so the statement is True.`,
      `**E.** → True

At twenty euros the demand rule is a level:

$$q(20)=\\frac{10000}{400}=25$$

That is fewer than $30$ subscriptions, so the statement is True.`,
    ],
  },
  "math-8-22": {
    overview: `An audit firm bills $C(n)=F+a n^{\\frac{1}{2}}$ for a client with $n>0$ accounts. Two invoices recover both unknowns. Subtracting isolates $a$; either invoice then pins $F$.

Because of the leftover constant $F$, the bill is not a power of the number of accounts. The variable term still has a positive exponent below one, so cost per account falls and an extra account adds less later than earlier.`,
    letters: [
      `**A.** → True

The two invoices are $F+10a=500$ and $F+20a=800$. Subtracting isolates $a=30$ and then $F=200$, so

$$C(n)=200+30n^{\\frac{1}{2}}$$

A power of the number of accounts cannot carry a leftover constant. The fixed engagement charge kills that shape, so the statement is True.`,
      `**B.** → True

Cost per account is $\\frac{200}{n}+30n^{-\\frac{1}{2}}$. Both pieces decline as the book grows, because the fee is spread and the leftover exponent on the variable term is negative.

A larger book is cheaper per account, so the statement is True.`,
      `**C.** → True

An extra account is the slope

$$C'(n)=15n^{-\\frac{1}{2}}$$

The leftover exponent is negative, so $C'(100)>C'(400)$. An extra account adds more at one hundred accounts than at four hundred, and the statement is True.`,
      `**D.** → True

At nine hundred accounts the recovered bill is a level:

$$900^{\\frac{1}{2}}=30$$

$$C(900)=200+30\\cdot 30=1100$$

That sits above $1000$, so the statement is True.`,
      `**E.** → False

At two hundred accounts:

$$C(200)=200+30\\sqrt{200}=200+300\\sqrt{2}$$

Since $\\sqrt{2}<1.5$, this sits below $650$, which is not more than $750$. The statement is False.`,
    ],
  },
  "math-8-23": {
    overview: `The fleet after $t>0$ years is the power $a(t)=4t^{\\frac{1}{2}}$ thousand vehicles. Emission intensity is the further power $e(a)=k a^{-\\frac{1}{2}}$, and the reading at $a=16$ fixes $k$. Total fleet emissions are the product $E=a\\,e(a)$, which composes to a leftover power of elapsed time.

A scale question uses that leftover exponent. Intensity itself has a negative exponent in fleet size, so it falls as the fleet grows.`,
    letters: [
      `**A.** → True

The intensity reading $e(16)=30$ pins $k\\cdot 16^{-\\frac{1}{2}}=30$, so $k=120$. Total emissions then compose as

$$E=a\\,e(a)=120 a^{\\frac{1}{2}}=240 t^{\\frac{1}{4}}$$

That is a power of elapsed time, so the statement is True.`,
      `**B.** → False

Doubling elapsed time multiplies $E$ by $k^{\\frac{1}{4}}$, because the coefficient cancels:

$$\\frac{E(2t)}{E(t)}=2^{\\frac{1}{4}}$$

$$2^{\\frac{1}{4}}\\neq 2$$

Total emissions are not doubled, so the statement is False.`,
      `**C.** → False

Intensity is $e(a)=120 a^{-\\frac{1}{2}}$. The exponent is negative, so intensity falls as the fleet grows, not rises.

A negative leftover power cannot climb, so the statement is False.`,
      `**D.** → True

After sixteen years the composed rule is a level:

$$E(16)=240\\cdot 16^{\\frac{1}{4}}=240\\cdot 2=480$$

That exceeds $400$, so the statement is True.`,
      `**E.** → True

After one year:

$$E(1)=240\\cdot 1^{\\frac{1}{4}}=240$$

That sits under $250$, so the statement is True.`,
    ],
  },
  "math-8-24": {
    overview: `Flow capacity follows the power $Q(d)=A d^{\\frac{5}{2}}$ litres per second for internal diameter $d>0$ centimetres. The bench test at $4$ cm and $64$ litres per second fixes $A$.

Because the exponent exceeds one, capacity grows faster than diameter, so a doubling of capacity needs less than a doubling of diameter. A scale question uses $k^{\\frac{5}{2}}$. A nonzero power inverts to another power.`,
    letters: [
      `**A.** → True

The bench test pins $A$ through $Q(4)=64$:

$$4^{\\frac{5}{2}}=32$$

$$32A=64$$

$$A=2$$

The exponent $\\frac{5}{2}$ sits above one, so capacity grows faster than diameter, and the statement is True.`,
      `**B.** → False

To double capacity, the diameter multiplier $k$ must satisfy $k^{\\frac{5}{2}}=2$. Because the exponent exceeds one, $k=2^{\\frac{2}{5}}<2$.

The diameter must less than double, not more than double, so the statement is False.`,
      `**C.** → True

A nonzero power inverts to another power. From $Q=2d^{\\frac{5}{2}}$:

$$d=\\left(\\frac{Q}{2}\\right)^{\\frac{2}{5}}$$

Diameter needed for a given capacity is a monomial in that capacity, so the statement is True.`,
      `**D.** → False

A capacity of $250$ inverts the recovered rule:

$$2d^{\\frac{5}{2}}=250$$

$$d=125^{\\frac{2}{5}}=5^{\\frac{6}{5}}<10$$

The required diameter sits below $10$ cm, so the statement is False.`,
      `**E.** → True

Doubling the diameter multiplies capacity by $k^{\\frac{5}{2}}$, because $A$ cancels:

$$\\frac{Q(2d)}{Q(d)}=2^{\\frac{5}{2}}=4\\sqrt{2}$$

Since $4\\sqrt{2}>5$, capacity is multiplied by more than $5$, and the statement is True.`,
    ],
  },
  "math-8-25": {
    overview: `A delivery hub's service radius follows the power $r(t)=A t^{\\frac{1}{2}}$ kilometres after $t>0$ hours. The four-hour reading fixes $A$. Covered area is the disc $S=\\pi r^{2}$, which composes to a leftover power of elapsed time.

A scale question uses that leftover exponent. A nonzero power inverts to another power, so the time needed for a given area is itself a power of that area.`,
    letters: [
      `**A.** → True

The four-hour reading pins $A$ through $r(4)=6$:

$$4^{\\frac{1}{2}}=2$$

$$2A=6$$

$$A=3$$

Covered area then composes as $S=\\pi r^{2}=9\\pi t$. That is proportional to elapsed time, so the statement is True.`,
      `**B.** → True

Along $S(t)=9\\pi t$, doubling elapsed time is $k=2$ with leftover exponent $1$:

$$\\frac{S(2t)}{S(t)}=2$$

The area is doubled, so the statement is True.`,
      `**C.** → True

A nonzero power inverts to another power. From $S=9\\pi t$:

$$t=\\frac{1}{9\\pi}S$$

Time needed for a given area is a monomial in that area, so the statement is True.`,
      `**D.** → True

After four hours the composed rule is a level:

$$S(4)=9\\pi\\cdot 4=36\\pi$$

That sits above $30\\pi$ square kilometres, so the statement is True.`,
      `**E.** → False

After nine hours:

$$S(9)=9\\pi\\cdot 9=81\\pi$$

The claim wants $100\\pi$. Eighty-one $\\pi$ sits below that figure, so the statement is False.`,
    ],
  },
  "math-8-26": {
    overview: `Plan A bills the power $C_{A}(u)=a u^{\\frac{1}{2}}$ for $u>0$ tickets, never charging more than $400$. The filed invoice at $36$ tickets and $240$ euros recovers $a$. Plan B bills the linear rule $5u$ with no cap.

The two uncapped bills meet where the leftover ratio of $u$ equals one. Plan A's cap binds when the uncapped power hits $400$, after which billed Plan A is a constant, not a power. Cost per ticket on Plan A is a negative leftover power.`,
    letters: [
      `**A.** → True

The filed invoice pins $a$ through $C_{A}(36)=240$:

$$36^{\\frac{1}{2}}=6$$

$$6a=240$$

$$a=40$$

At sixty-four tickets, $C_{A}(64)=40\\cdot 8=320$ and $C_{B}(64)=5\\cdot 64=320$. Both sit under $400$, so the statement is True.`,
      `**B.** → True

The uncapped bills meet when $40u^{\\frac{1}{2}}=5u$, so $u=64$. Below that crossing the linear Plan B is the smaller bill, because a square root starts above a line through the origin and is then overtaken.

Plan B is cheaper below the crossing, so the statement is True.`,
      `**C.** → True

Plan A's cap binds when $40u^{\\frac{1}{2}}=400$, so $u=100$. From that volume onward billed Plan A is the constant $400$.

A growing ticket count will hit that cap, so the statement is True.`,
      `**D.** → True

Plan A's uncapped cost per ticket is $40u^{-\\frac{1}{2}}$. The leftover exponent is negative, so that average falls as ticket volume rises.

Even after the cap binds, the constant $400$ is spread over more tickets, so the statement is True.`,
      `**E.** → False

At one hundred and forty-four tickets the uncapped power would be $40\\cdot 12=480$, but the cap has already bound, so Plan A bills $400$.

That is not more than $450$, so the statement is False.`,
    ],
  },
  "math-8-27": {
    overview: `Unit cost follows the power $c(N)=c_{1} N^{-b}$ for cumulative output $N>0$. Every doubling multiplies unit cost by $0.8$, which isolates $b$, and the first unit cost $1000$ pins $c_{1}$. Materials cost $400$ per unit, a floor the power cannot cross.

A negative leftover slope means an extra unit cuts more after the first unit than after eight. A scale question uses $k^{-b}$. Because $0<b<1$, unit cost falls more slowly than a simple reciprocal.`,
    letters: [
      `**A.** → True

The doubling rule is $2^{-b}=0.8$, so $b=-\\log_{2}(0.8)$ sits between $0$ and $1$, and $c(N)=1000 N^{-b}$. An extra unit is the slope $c'(N)=-b\\,1000\\,N^{-b-1}$.

The size of that cut falls as $N$ rises, so an extra unit cuts more after the first unit than after eight, and the statement is True.`,
      `**B.** → False

Quadrupling cumulative output is $k=4$. The coefficient cancels:

$$\\frac{c(4N)}{c(N)}=4^{-b}=(2^{-b})^{2}=0.64$$

Unit cost is multiplied by $0.64$, not by $\\frac{1}{2}$, so the statement is False.`,
      `**C.** → True

A simple reciprocal would be exponent $-1$. Here $b=-\\log_{2}(0.8)\\approx 0.322$, which sits below $1$, so the modelled unit cost falls more slowly than $\\frac{1}{N}$.

The doubling factor $0.8$ is what forces $b<1$, so the statement is True.`,
      `**D.** → True

Three successive doublings take $N$ from $1$ to $8$:

$$c(8)=1000\\cdot(0.8)^{3}=512$$

That sits under $520$, so the statement is True.`,
      `**E.** → False

Four successive doublings take $N$ to $16$:

$$c(16)=1000\\cdot(0.8)^{4}=409.6$$

The materials floor is $400$, and $409.6$ still sits above it, so the statement is False.`,
    ],
  },
  "math-8-28": {
    overview: `Sales revenue from advertising spend $x>0$ follows the power $R(x)=A x^{\\frac{1}{2}}$. The reading at spend $100$ fixes $A$. The platform fee is the linear power $F(x)=6x$. Net gain is the difference $R(x)-F(x)$, which is not itself a power.

Because the revenue exponent sits below one, revenue per euro of spend falls. Once the linear fee overtakes the square-root revenue, net gain stays negative.`,
    letters: [
      `**A.** → False

The recorded pair pins $A$ through $R(100)=900$:

$$100^{\\frac{1}{2}}=10$$

$$10A=900$$

$$A=90$$

Doubling spend multiplies revenue by $2^{\\frac{1}{2}}$, not by $2$, so the statement is False.`,
      `**B.** → True

Revenue per euro of spend is $90x^{-\\frac{1}{2}}$. The leftover exponent is negative, so that average falls as the campaign grows.

A square-root technology cannot keep pace with spend, so the statement is True.`,
      `**C.** → True

Net gain is $N(x)=90x^{\\frac{1}{2}}-6x$. The unique positive root is $x=225$, and past that root the linear fee dominates a square root.

Once $N$ is negative it stays negative at every larger spend, so the statement is True.`,
      `**D.** → True

At a spend of $100$:

$$N(100)=90\\cdot 10-6\\cdot 100=300$$

That sits above $250$, so the statement is True.`,
      `**E.** → False

At a spend of $256$:

$$N(256)=90\\cdot 16-6\\cdot 256=-96$$

Net gain is already negative, so the statement is False.`,
    ],
  },
  "math-8-29": {
    overview: `Labour $L>0$ hours yields material $m(L)=A L^{\\frac{1}{2}}$ tonnes, and material is converted by $g(m)=B m^{\\frac{3}{2}}$ finished units. Each exponent is given, so each logged level recovers its coefficient. Composing the two stages multiplies the exponents.

Because the composed leftover exponent sits below one, finished output grows more slowly than labour, and finished output per labour hour falls. A nonzero power inverts to another power.`,
    letters: [
      `**A.** → True

The material reading pins $A$ through $m(100)=40$:

$$100^{\\frac{1}{2}}=10$$

$$10A=40$$

$$A=4$$

Material is $4L^{\\frac{1}{2}}$. The exponent $\\frac{1}{2}$ sits below one, so material grows more slowly than labour hours, and the statement is True.`,
      `**B.** → False

The conversion reading pins $B$ through $g(9)=54$, so $B=2$. Composing gives $g=16L^{\\frac{3}{4}}$. Doubling labour multiplies finished output by $k^{\\frac{3}{4}}$:

$$\\frac{g(2L)}{g(L)}=2^{\\frac{3}{4}}$$

$$2^{\\frac{3}{4}}\\neq 2$$

Finished output is not doubled, so the statement is False.`,
      `**C.** → True

Finished output per labour hour is $16L^{-\\frac{1}{4}}$. The leftover exponent is negative, so that average falls as labour rises.

A composed exponent below one forces a falling average product, so the statement is True.`,
      `**D.** → True

A nonzero power inverts to another power. From $g=16L^{\\frac{3}{4}}$:

$$L=\\left(\\frac{g}{16}\\right)^{\\frac{4}{3}}$$

Labour needed for a given finished count is a monomial in that count, so the statement is True.`,
      `**E.** → True

After eighty-one labour hours the composed rule is a level:

$$81^{\\frac{3}{4}}=27$$

$$g(81)=16\\cdot 27=432$$

That sits above $400$ units, so the statement is True.`,
    ],
  },
  "math-8-30": {
    overview: `Demand follows the power $q(p)=A p^{-\\frac{3}{2}}$ copies a month at price $p>0$. The four-euro reading fixes $A$. Revenue is the product $R=pq$, a leftover power of price, and the operation carries a fixed monthly charge of $400$.

Because the leftover exponent on $R$ is negative, revenue falls as the price rises. A nonzero power inverts to another power. The fixed charge is covered wherever $R\\ge 400$.`,
    letters: [
      `**A.** → True

The recorded pair pins $A$ through $q(4)=250$:

$$4^{\\frac{3}{2}}=8$$

$$\\frac{A}{8}=250$$

$$A=2000$$

Revenue is then $R(p)=2000p^{-\\frac{1}{2}}$, which inverts to $p=\\bigl(\\frac{2000}{R}\\bigr)^{2}$. Price needed for a given revenue is a monomial in that revenue, so the statement is True.`,
      `**B.** → False

Doubling the price multiplies revenue by $k^{-\\frac{1}{2}}$, because the coefficient cancels:

$$\\frac{R(2p)}{R(p)}=2^{-\\frac{1}{2}}$$

$$2^{-\\frac{1}{2}}\\neq\\frac{1}{2}$$

Revenue is not halved, so the statement is False.`,
      `**C.** → True

Revenue is $R(p)=2000p^{-\\frac{1}{2}}$. The leftover exponent is negative, so $R$ falls as the price rises.

Inverse-power demand is elastic enough here that a price rise shrinks $pq$, so the statement is True.`,
      `**D.** → True

At a price of $25$:

$$R(25)=\\frac{2000}{5}=400$$

That sits under $450$, so the statement is True.`,
      `**E.** → False

The fixed charge of $400$ is covered when $2000p^{-\\frac{1}{2}}\\ge 400$, so $p\\le 25$. Coverage therefore runs up to $25$ euros, not only below $16$.

The statement is False.`,
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
