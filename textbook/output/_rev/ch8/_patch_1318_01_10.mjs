import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(dir, "01_10.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const updates = {
  "math-8-2": {
    overview: `A river gauge reports two power functions of elapsed time $t$. Load $D(t)=6t^{\\frac{1}{2}}$ kilograms has exponent $\\frac{1}{2}$ and coefficient $6$. Turbidity $R(t)=50t^{-2}$ units has exponent $-2$ and coefficient $50$.

The sign of the exponent decides the domain. A positive even root needs $t\\ge 0$. A negative exponent puts $t$ in a denominator, so $t>0$. A level question evaluates a legal time. A domain question asks whether the formula returns a real at all.`,
    letters: [
      `**A.** → True

Load is an even root, and a square root accepts zero because $0^{2}=0$:

$$D(0)=6\\cdot 0^{\\frac{1}{2}}=0$$

That is a genuine real reading of $0$ kilograms, so the statement is True.`,
      `**B.** → False

A negative exponent is a reciprocal, so turbidity is $\\frac{50}{t^{2}}$. At the reset the denominator is zero, and division by zero is undefined.

There is no reading at $t=0$, so the statement is False.`,
      `**C.** → False

The exponent $\\frac{1}{2}$ is an even root. No real number squares to a negative, so $D(-4)$ is not real.

Clock times before the reset sit outside the load domain, so the statement is False.`,
      `**D.** → True

Turbidity at a legal positive time is a level of $R(t)=50t^{-2}$. At $t=4$:

$$4^{2}=16$$

$$R(4)=\\frac{50}{16}=3.125$$

That is the claimed $3.125$ units, so the statement is True.`,
      `**E.** → True

Load at $t=9$ is a level of $D(t)=6t^{\\frac{1}{2}}$:

$$9^{\\frac{1}{2}}=3$$

$$D(9)=6\\cdot 3=18$$

That is the claimed $18$ kilograms, so the statement is True.`,
    ],
  },
  "math-8-3": {
    overview: `A beacon reports strength $S(x)=80x^{-3}$ millivolts for distance $x>0$ metres, a power with exponent $-3$ and coefficient $80$. A reader logs $T(x)=2x^{\\frac{1}{2}}$ thousand packets for listening time $x>0$ minutes, a power with exponent $\\frac{1}{2}$ and coefficient $2$.

The sign of the exponent governs the ends of the scale. A negative exponent is a reciprocal, so $S$ falls toward $0$ far away and blows up near the mast. A positive exponent keeps $T$ in the numerator, so the count goes to $0$ at the start and has no ceiling in the long run. A level question evaluates a finite $x$.`,
    letters: [
      `**A.** → True

A negative exponent puts distance in a denominator:

$$S(x)=\\frac{80}{x^{3}}$$

As $x\\to\\infty$ that denominator grows without bound while the numerator stays $80$, so the quotient is forced toward $0$. The signal fades at infinity, so the statement is True.`,
      `**B.** → True

Near the mast a small positive $x$ makes $x^{3}$ arbitrarily small, so $\\frac{80}{x^{3}}$ becomes arbitrarily large.

The same reciprocal that sent $S$ to zero far away explodes as $x\\to 0^{+}$, so the statement is True.`,
      `**C.** → False

The $2$ in $T(x)=2x^{\\frac{1}{2}}$ is a coefficient, not a ceiling. A positive exponent keeps climbing without bound as $x\\to\\infty$.

There is no long-run cap at $2$, so the statement is False.`,
      `**D.** → True

Strength at two metres is a level of $S(x)=80x^{-3}$:

$$2^{3}=8$$

$$S(2)=\\frac{80}{8}=10$$

That is the claimed $10$ millivolts, so the statement is True.`,
      `**E.** → True

A positive exponent keeps the packet count in the numerator. The square root of a shrinking positive input shrinks as well, so $T(x)\\to 0$ as $x\\to 0^{+}$.

Signal $S$ explodes at that same end; the count does the opposite, so the statement is True.`,
    ],
  },
  "math-8-4": {
    overview: `A workshop spreads overhead $U(q)=600q^{-1}$ euros per unit and needs $V(q)=3q^{\\frac{2}{3}}$ finishing hours for order size $q>0$. Both are power functions on $q>0$ with positive coefficients.

The sign of the exponent decides the direction. A negative exponent makes $U$ strictly decreasing and always positive. A positive exponent makes $V$ strictly increasing. A level question evaluates a given order size.`,
    letters: [
      `**A.** → True

Overhead is a reciprocal:

$$U(q)=\\frac{600}{q}$$

On $q>0$ the numerator is fixed while the denominator grows, so every larger order strictly lowers the spread. The rule is strictly decreasing, so the statement is True.`,
      `**B.** → False

The numerator $600$ and the order size $q$ are both positive for every $q>0$, so the quotient stays positive.

Falling toward zero is not the same as crossing it. A negative coefficient would have been needed, so the statement is False.`,
      `**C.** → True

The exponent $\\frac{2}{3}$ is positive, so a larger order raises a larger power, and the coefficient $3$ preserves that order.

Strict increase is the sign of the exponent, so the statement is True.`,
      `**D.** → False

Overhead at eight units is a level of $U(q)=600q^{-1}$:

$$U(8)=\\frac{600}{8}=75$$

The claim is $80$, not $75$, so the statement is False.`,
      `**E.** → True

Finishing hours at eight units use the fractional power as a cube root, then a square:

$$8^{\\frac{2}{3}}=4$$

$$V(8)=3\\cdot 4=12$$

That is the claimed $12$ hours, so the statement is True.`,
    ],
  },
  "math-8-5": {
    overview: `A bottling line runs at $Q(s)=A s^{\\frac{1}{2}}$ crates per hour for $s>0$ staff. The exponent $\\frac{1}{2}$ is given, and the audited shift of $25$ staff at $40$ crates per hour fixes the coefficient.

A level question uses that recovered $A$. A scale question uses the ratio identity

$$\\frac{Q(ks)}{Q(s)}=k^{\\frac{1}{2}}$$

in which the coefficient cancels.`,
    letters: [
      `**A.** → True

The audited shift pins the coefficient through $Q(25)=40$:

$$25^{\\frac{1}{2}}=5$$

$$5A=40$$

$$A=8$$

That is the claimed coefficient, so the statement is True.`,
      `**B.** → True

With $A=8$ the output rule is $Q(s)=8s^{\\frac{1}{2}}$. At $100$ staff:

$$100^{\\frac{1}{2}}=10$$

$$Q(100)=8\\cdot 10=80$$

That is the claimed $80$ crates per hour, so the statement is True.`,
      `**C.** → True

Multiplying staffing by $k$ multiplies output by $k^{\\frac{1}{2}}$, because the coefficient cancels:

$$\\frac{Q(ks)}{Q(s)}=\\frac{A(ks)^{\\frac{1}{2}}}{A s^{\\frac{1}{2}}}=k^{\\frac{1}{2}}$$

For a quadrupling, $k=4$:

$$4^{\\frac{1}{2}}=2$$

Output is doubled, so the statement is True.`,
      `**D.** → False

A doubled coefficient appears once above and once below in the ratio, so it cancels. The scale factor stays

$$\\frac{Q(4s)}{Q(s)}=4^{\\frac{1}{2}}=2$$

whether $A$ is $8$ or $16$. Doubling $A$ doubles every level, not this ratio, so the statement is False.`,
      `**E.** → False

At four staff the same recovered rule gives

$$4^{\\frac{1}{2}}=2$$

$$Q(4)=8\\cdot 2=16$$

The claim is $20$, not $16$, so the statement is False.`,
    ],
  },
  "math-8-6": {
    overview: `Two maintenance indices on $n>0$ machines are the power functions $F(n)=2n^{2}$ and $G(n)=n^{3}$. One has exponent $2$ and coefficient $2$; the other has exponent $3$ and coefficient $1$.

A larger coefficient can lead on small inputs. A larger exponent must lead eventually. Subtracting isolates the crossing:

$$G(n)-F(n)=n^{2}(n-2)$$

Dividing instead shows the long-run gap, $\\frac{G(n)}{F(n)}=\\frac{n}{2}$.`,
    letters: [
      `**A.** → False

At two machines both indices are levels of the given rules:

$$F(2)=2\\cdot 2^{2}=8$$

$$G(2)=2^{3}=8$$

They meet at $8$ and $8$, not at $8$ and $6$, so the statement is False.`,
      `**B.** → True

The factored difference is $n^{2}(n-2)$. For $n>0$ the square is positive, so the sign of $G-F$ is the sign of $n-2$.

Whenever $n>2$ that factor is positive and the cubic leads, so the statement is True.`,
      `**C.** → True

On $0<n<2$ the same factor $n-2$ is negative, so $F>G$.

A larger coefficient can only lead on small inputs; past the crossing the larger exponent takes over, so the statement is True.`,
      `**D.** → False

The ratio simplifies to a leftover power of $n$:

$$\\frac{G(n)}{F(n)}=\\frac{n^{3}}{2n^{2}}=\\frac{n}{2}$$

As $n$ grows, $\\frac{n}{2}$ grows without bound rather than settling at $1$, so the statement is False.`,
      `**E.** → False

At three machines:

$$F(3)=2\\cdot 9=18$$

$$G(3)=27$$

The claim wants $18$ and $24$. The cubic is $27$, so the statement is False.`,
    ],
  },
  "math-8-7": {
    overview: `A calibration sheet applies three power functions of a raw reading $x$, each with coefficient $1$: $L(x)=x^{\\frac{1}{2}}$, $M(x)=x^{\\frac{1}{3}}$ and $N(x)=x^{-\\frac{1}{2}}$.

Two features of the exponent decide the domain. An even root needs $x\\ge 0$. An odd root accepts every real $x$. A negative exponent moves the root into a denominator, so $N$ needs $x>0$. A level question evaluates a legal reading.`,
    letters: [
      `**A.** → True

A square root accepts zero because $0^{2}=0$:

$$L(0)=0^{\\frac{1}{2}}=0$$

The even-root gate stays open at a blank reading, so the statement is True.`,
      `**B.** → False

No real $y$ satisfies $y^{2}=-4$, so $L(-4)$ is not real.

Parity of the root, not the size of $4$, decides this letter, so the statement is False.`,
      `**C.** → True

The exponent $\\frac{1}{3}$ is an odd root, so a negative reading is allowed, and $(-2)^{3}=-8$ confirms the inverse:

$$M(-8)=(-8)^{\\frac{1}{3}}=-2$$

That is the claimed value, so the statement is True.`,
      `**D.** → False

A negative exponent puts the root in a denominator, $N(x)=\\frac{1}{\\sqrt{x}}$. At $x=0$ that denominator is zero, so the transform is undefined.

Zero is legal for $L$ and illegal for $N$, so the statement is False.`,
      `**E.** → False

At a legal reading $x=4$:

$$N(4)=4^{-\\frac{1}{2}}=\\frac{1}{2}$$

The claim is $2$, which is $\\sqrt{4}$ with the minus in the exponent dropped, so the statement is False.`,
    ],
  },
  "math-8-8": {
    overview: `A filter bank's pressure drop is the power function $P(x)=12x^{-\\frac{1}{2}}$ kilopascals for $x>0$ cartridges. The coefficient is $12$ and the exponent is $-\\frac{1}{2}$, so the rule is a reciprocal square root on $x>0$.

A negative exponent makes $P$ strictly decreasing and sends it toward $0$ as $x$ grows, without ever reaching $0$. As $x\\to 0^{+}$ the denominator collapses and $P$ has no finite limit. A level question evaluates a given bank size.`,
    letters: [
      `**A.** → True

The drop at four cartridges is a level of $P(x)=12x^{-\\frac{1}{2}}$:

$$4^{\\frac{1}{2}}=2$$

$$P(4)=\\frac{12}{2}=6$$

That is the claimed $6$ kilopascals, so the statement is True.`,
      `**B.** → True

On $x>0$ the numerator stays at $12$ while $\\sqrt{x}$ grows with $x$, so the quotient falls at every larger cartridge count.

A negative exponent is strictly decreasing here, so the statement is True.`,
      `**C.** → True

As $x$ grows the denominator grows without bound while the numerator stays $12$, so $P(x)\\to 0$. Setting $\\frac{12}{\\sqrt{x}}=0$ would require $12=0$, which never happens.

The drop approaches zero without landing on it, so the statement is True.`,
      `**D.** → False

The denominator $\\sqrt{x}$ can be made arbitrarily small as $x\\to 0^{+}$, so $P$ has no finite limit there.

A finite limit at the origin would need a nonnegative exponent, so the statement is False.`,
      `**E.** → True

At nine cartridges:

$$9^{\\frac{1}{2}}=3$$

$$P(9)=\\frac{12}{3}=4$$

That is the claimed $4$ kilopascals, so the statement is True.`,
    ],
  },
  "math-8-9": {
    overview: `Primer for a circular panel is the power function $y(r)=A r^{2}$ litres for radius $r>0$ metres. The exponent is $2$, and the recorded job $y(3)=45$ fixes the coefficient.

A level question uses that recovered $A$. A scale question uses the ratio identity

$$\\frac{y(kr)}{y(r)}=k^{2}$$

in which the coefficient cancels.`,
    letters: [
      `**A.** → False

The recorded job pins $A$ through $y(3)=45$:

$$3^{2}=9$$

$$9A=45$$

$$A=5$$

The claim is $15$, which divides $45$ by the radius instead of by its square, so the statement is False.`,
      `**B.** → True

With $A=5$ the primer rule is $y(r)=5r^{2}$. At radius $6$:

$$6^{2}=36$$

$$y(6)=5\\cdot 36=180$$

That is the claimed $180$ litres, so the statement is True.`,
      `**C.** → True

Multiplying the radius by $k$ multiplies primer by $k^{2}$, because the coefficient cancels:

$$\\frac{y(kr)}{y(r)}=\\frac{A(kr)^{2}}{A r^{2}}=k^{2}$$

A fifty percent increase is $k=1.5$:

$$1.5^{2}=2.25$$

Primer is multiplied by $2.25$, so the statement is True.`,
      `**D.** → True

At a unit radius every power is $1$, so the requirement equals the coefficient:

$$1^{2}=1$$

$$y(1)=5\\cdot 1=5$$

That is the claimed $5$ litres, so the statement is True.`,
      `**E.** → False

Halving the radius is $k=0.5$, and the same scale identity gives

$$0.5^{2}=0.25$$

Primer is multiplied by a quarter, not by a half, so the statement is False.`,
    ],
  },
  "math-8-10": {
    overview: `A braking energy index is the power function $E(v)=0.5v^{2}$ points for approach speed $v>0$ in kilometres per hour. The exponent is $2$ and the coefficient is $0.5$.

A level question evaluates the rule at a given speed. A scale question uses the ratio identity

$$\\frac{E(kv)}{E(v)}=k^{2}$$

in which the coefficient cancels. Sign is read off the formula: a square of a positive speed, times a positive coefficient, stays positive.`,
    letters: [
      `**A.** → True

The index at $v=10$ is a level of $E(v)=0.5v^{2}$:

$$10^{2}=100$$

$$E(10)=0.5\\cdot 100=50$$

That is the claimed $50$, so the statement is True.`,
      `**B.** → True

Raising speed from $10$ to $20$ is the multiplier $k=2$. The coefficient cancels:

$$\\frac{E(kv)}{E(v)}=\\frac{0.5(kv)^{2}}{0.5v^{2}}=k^{2}$$

$$2^{2}=4$$

The index is multiplied by $4$, so the statement is True.`,
      `**C.** → True

At $v=20$:

$$20^{2}=400$$

$$E(20)=0.5\\cdot 400=200$$

That is the claimed $200$, so the statement is True.`,
      `**D.** → True

A square of a nonzero real is positive, and the coefficient $0.5$ is positive, so the product stays positive for every $v>0$.

No evaluation is required. Sign is read off the formula, so the statement is True.`,
      `**E.** → False

A ten percent overspeed is $k=1.1$, and the scale identity gives

$$1.1^{2}=1.21$$

The index rises by twenty-one percent, not ten, so the statement is False.`,
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
