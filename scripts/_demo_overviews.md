## math 0 DEMO MATH 1.H02 ovlen=1642
Translate the eight conference rules into propositional constraints on four attendance bits $A,B,C,D$. Work the forcing chain on the whiteboard in three parts.

**Part 1: Atomic facts and local implications.**

Rule (4) is an unconditional atom:

$$
D=\mathsf{true}
$$

Rule (1) is the implication

$$
A\Rightarrow\neg B
$$

Rule (2) is

$$
\neg B\Rightarrow C
$$

Rule (6) is

$$
\neg A\Rightarrow B
$$

Rule (7) forbids the joint attendance of Boris and Ceci:

$$
\neg(B\land C)
$$

Rule (8) demands that at least one of Ana or Ceci attends:

$$
A\lor C
$$

Rule (5) caps the roster size:

$$
|\{A,B,C,D\}|\le 3
$$

Rule (3) with the Ana-exception: if $C$ holds and $\neg A$ holds, then $\neg D$; but if $A$ holds, Dmitri is unrestricted by (3).

**Part 2: Ana is mandatory.**

Assume for contradiction

$$
\neg A
$$

From (6):

$$
\neg A\Rightarrow B
$$

$$
B
$$

From (7) with $B$ true:

$$
\neg C
$$

Rule (2) has antecedent $\neg B$, which is false, so (2) does not resurrect Ceci. Now check (8):

$$
A\lor C
$$

Both disjuncts are false:

$$
\neg A\land\neg C
$$

$$
\neg(A\lor C)
$$

Contradiction. Therefore

$$
A=\mathsf{true}
$$

in every legal roster.

**Part 3: Unique three-person roster and Boris exclusion.**

With $A$ fixed true, rule (1) forces

$$
\neg B
$$

Rule (2) then forces

$$
C
$$

The Ana-exception in (3) fires, so $C$ does not eject $D$. Rule (4) still needs $D$. The resulting roster is

$$
\{A,C,D\}
$$

exactly three people, allowed by (5). Boris never appears because $A\Rightarrow\neg B$ is always armed. Stripping the exception from (3) yields $C\Rightarrow\neg D$, which with $C$ and (4) is unsatisfiable.
---
## math 1 DEMO MATH 2.H02 ovlen=1423
An unordered pair of nonzero reals is recovered from the four recorded identities. Every letter starts from the same sum/product expansions.

**Part 1: Setup.**

Records (1) and (2) supply

$$
p^{2}+q^{2}=250
$$

$$
pq=75
$$

The elementary expansions are

$$
(p+q)^{2}=p^{2}+2pq+q^{2}
$$

$$
(p-q)^{2}=p^{2}-2pq+q^{2}
$$

The cube-sum and reciprocal-sum formulas are

$$
p^{3}+q^{3}=(p+q)\bigl((p^{2}+q^{2})-pq\bigr)
$$

$$
\frac{1}{p}+\frac{1}{q}=\frac{p+q}{pq}
$$

**Part 2: Solve the squared sum and difference.**

First the cross term:

$$
2\cdot 75=150
$$

Squared sum:

$$
(p+q)^{2}=250+150
$$

$$
250+150=400
$$

$$
(p+q)^{2}=400
$$

$$
|p+q|=\sqrt{400}
$$

$$
\sqrt{400}=20
$$

$$
|p+q|=20
$$

Squared difference:

$$
(p-q)^{2}=250-150
$$

$$
250-150=100
$$

$$
(p-q)^{2}=100
$$

$$
|p-q|=\sqrt{100}
$$

$$
\sqrt{100}=10
$$

$$
|p-q|=10
$$

**Part 3: Cubes, reciprocals, and the unordered pair.**

Inner piece of the cube identity:

$$
250-75=175
$$

With $p+q=20$ (positive branch):

$$
p^{3}+q^{3}=20\cdot 175
$$

$$
20\cdot 100=2000
$$

$$
20\cdot 75=1500
$$

$$
2000+1500=3500
$$

$$
p^{3}+q^{3}=3500
$$

Reciprocal sum:

$$
\frac{20}{75}=\frac{4}{15}
$$

Quadratic $t^{2}-20t+75=0$:

$$
\Delta=400-300=100
$$

$$
t=\frac{20\pm 10}{2}
$$

$$
t=15\quad\text{or}\quad t=5
$$

so the unordered pair is $\{5,15\}$. The negative-sum branch $p+q=-20$ would flip the signs of both the cube sum and the reciprocal sum.
---
## math 2 MATH 11.99 ovlen=1746
Three separate cash-flow models share the same 7% discrete rate for the lease and the perpetuity, while the second project compounds continuously.

**Part 1: Setup.**

Annuity-due lease: payment $a=5500$, $n=6$, $r=0.07$, payments at the beginning of each year.

Continuous investment: principal $K=25000$, force $\delta=0.055$, horizon $T=8$.

Growing perpetuity: first end-of-year payment $C=2400$, growth $g=0.02$, discount $r=0.07$.

**Part 2: Power and annuity factors.**

Build $(1.07)^{6}$ by successive multiplication:

$$
1.07^{1}=1.07
$$

$$
1.07^{2}=1.07\cdot 1.07=1.1449
$$

$$
1.07^{3}=1.1449\cdot 1.07=1.225043
$$

$$
1.07^{4}=1.225043\cdot 1.07=1.31079601
$$

$$
1.07^{5}=1.31079601\cdot 1.07=1.4025517307
$$

$$
1.07^{6}=1.4025517307\cdot 1.07=1.500730351849
$$

Ordinary annuity PV factor:

$$
(1.07)^{-6}=\frac{1}{1.500730351849}\approx 0.66634222
$$

$$
1-(1.07)^{-6}\approx 0.33365778
$$

$$
\frac{1-(1.07)^{-6}}{0.07}\approx 4.76653966
$$

Ordinary annuity FV factor:

$$
(1.07)^{6}-1\approx 0.50073035
$$

$$
\frac{(1.07)^{6}-1}{0.07}\approx 7.15329074
$$

**Part 3: Three project values.**

Annuity-due present value (shift one period forward):

$$
PV_{\mathrm{ad}}=5500\cdot 4.76653966\cdot 1.07
$$

$$
5500\cdot 4.76653966\approx 26215.96813
$$

$$
26215.96813\cdot 1.07\approx 28051.09
$$

Annuity-due future value at end of year 6:

$$
FV_{\mathrm{ad}}=5500\cdot 7.15329074\cdot 1.07
$$

$$
5500\cdot 7.15329074\approx 39343.09907
$$

$$
39343.09907\cdot 1.07\approx 42097.12
$$

Continuous compounding:

$$
0.055\cdot 8=0.44
$$

$$
e^{0.44}\approx 1.55270722
$$

$$
FV_{\mathrm{cont}}=25000\cdot 1.55270722\approx 38817.68
$$

Growing perpetuity:

$$
0.07-0.02=0.05
$$

$$
PV_{\mathrm{perp}}=\frac{2400}{0.05}=48000
$$
---
## math 3 DEMO MATH 4.H02 ovlen=1177
Five independent mixed equations. Work each letter from its own domain restrictions; none of the five collapses by a one-line sum/product identity.

**Part 1: Radical equation $\sqrt{3x+7}+\sqrt{x+1}=4$.**

Domain of both radicals:

$$
3x+7\ge 0\implies x\ge -\frac{7}{3}
$$

$$
x+1\ge 0\implies x\ge -1
$$

so overall $x\ge -1$. Isolate and keep the right-hand side nonnegative:

$$
\sqrt{3x+7}=4-\sqrt{x+1}
$$

$$
4-\sqrt{x+1}\ge 0\implies x\le 15
$$

Square once, rearrange, and square again to reach

$$
(5-x)^{2}=16(x+1)
$$

$$
x^{2}-26x+9=0
$$

$$
x=13\pm 4\sqrt{10}
$$

Only the smaller root lies in $[-1,5]$ and survives back-substitution.

**Part 2: Rational identity.**

Clear the common denominator $(x-1)(x+4)$ (poles excluded). After expansion the quadratic terms cancel and the linear condition

$$
x+11=5x-2
$$

$$
4x=13
$$

$$
x=\frac{13}{4}
$$

survives.

**Part 3: Absolute value, logs, and mixed radical.**

Absolute-value cases under $x\ge\tfrac{4}{3}$ produce survivors near $7.85$ and $2.62$; logs on $x>1$ yield the unique survivor $(1+\sqrt{33})/2\approx 3.37$; splitting $\sqrt{x+3}+|x-1|=4$ at $x=1$ produces negative roots and a root larger than $2$.
---
## math 4 DEMO MATH 5.H01 ovlen=1032
Two linear equations in the page counts $m$ (mono) and $c$ (colour). Every letter starts from the same baseline solve, then perturbs one coefficient or one mix.

**Part 1: Setup.**

$$
m+c=180
$$

$$
35m+55c=8100
$$

**Part 2: Baseline solve.**

Substitute $m=180-c$ into the revenue equation:

$$
35(180-c)+55c=8100
$$

$$
35\cdot 180=6300
$$

$$
35\cdot 100=3500
$$

$$
35\cdot 80=2800
$$

$$
3500+2800=6300
$$

$$
6300-35c+55c=8100
$$

$$
(-35+55)c=20c
$$

$$
6300+20c=8100
$$

$$
20c=8100-6300
$$

$$
8100-6300=1800
$$

$$
20c=1800
$$

$$
c=\frac{1800}{20}=90
$$

$$
m=180-90=90
$$

Baseline mix: $(m,c)=(90,90)$.

**Part 3: Perturbations used by the letters.**

Colour price $60$:

$$
35(180-c)+60c=8100
$$

$$
6300+25c=8100
$$

$$
25c=1800
$$

$$
c=72<75
$$

Shifted mix $(75,105)$:

$$
35\cdot 75=2625
$$

$$
55\cdot 105=5775
$$

$$
2625+5775=8400
$$

$$
8400-8100=300
$$

All-colour ceiling:

$$
55\cdot 180=9900<10000
$$

Swapped mix $(120,60)$:

$$
35\cdot 120=4200
$$

$$
55\cdot 60=3300
$$

$$
4200+3300=7500\neq 8100
$$
---
## math 5 DEMO MATH 6.H02 ovlen=1355
Five mixed inequalities with deliberately varied claim styles: no-counterexample, existence in an open interval, existence on a closed interval, segment containment, and nonempty intersection.

**Part 1: Absolute-value inequality on $[1,4]$.**

Critical points of $|x^{2}-5x+4|+|2x-3|\le x+6$ on $[1,4]$ are $x=1$, $x=\tfrac{3}{2}$, and $x=4$. On $[1,\tfrac{3}{2}]$:

$$
-(x^{2}-5x+4)+(3-2x)\le x+6
$$

$$
-x^{2}+5x-4+3-2x\le x+6
$$

$$
-x^{2}+3x-1\le x+6
$$

$$
0\le x^{2}-2x+7
$$

Discriminant of $x^{2}-2x+7$:

$$
4-28=-24<0
$$

so the quadratic is always positive. On $[\tfrac{3}{2},4]$:

$$
0\le x^{2}-6x+13
$$

$$
36-52=-16<0
$$

again always positive. No counterexample on $[1,4]$.

**Part 2: Existence checks.**

For $\sqrt{2x+5}+|x-2|\le 4$, domain $x\ge -\tfrac{5}{2}$. Interior test at $x=\tfrac{3}{2}\in(1,2)$:

$$
\sqrt{8}+\tfrac{1}{2}=2\sqrt{2}+\tfrac{1}{2}\approx 3.328\le 4
$$

witnesses existence.

For the rational inequality, cancel $x-2$ away from the poles to obtain $-4/(x+1)\ge 0$, i.e. $x<-1$; the segment $[0,1]$ lies entirely outside that half-line.

**Part 3: Containment and empty intersection.**

On $[0,1]$ the left-hand side of $\dfrac{|x|}{x+3}+\sqrt{x+1}\le 2$ is increasing and its maximum at $x=1$ is still $\le 2$. On $[-4,-2]$ the expression $\dfrac{|2x-5|}{|x+1|}+|x-2|$ stays larger than $4$ (e.g. $10.5$ at $x=-3$).
---
## math 6 DEMO MATH 7.H01 ovlen=1001
A one-parameter quadratic family. Read the axis, discriminant, and vertex from the coefficients; then specialise $k$ only when a letter asks for it.

**Part 1: Setup.**

$$
g_k(x)=x^{2}-(2k+1)x+(k^{2}-4)
$$

Write the standard coefficients:

$$
a=1
$$

$$
B=2k+1
$$

$$
C=k^{2}-4
$$

**Part 2: Axis and discriminant.**

Axis of symmetry:

$$
x=\frac{B}{2a}=\frac{2k+1}{2}
$$

$$
\frac{2k+1}{2}=k+\frac{1}{2}
$$

Discriminant expansion:

$$
\Delta=(2k+1)^{2}-4(k^{2}-4)
$$

$$
(2k+1)^{2}=4k^{2}+4k+1
$$

$$
4(k^{2}-4)=4k^{2}-16
$$

$$
\Delta=4k^{2}+4k+1-(4k^{2}-16)
$$

$$
\Delta=4k^{2}+4k+1-4k^{2}+16
$$

$$
\Delta=4k+17
$$

**Part 3: Vertex $y$-value and special cases.**

For a monic quadratic the vertex height is $-\Delta/4$:

$$
g_k\Bigl(k+\tfrac12\Bigr)=-\frac{\Delta}{4}=-\frac{4k+17}{4}
$$

At $k=0$:

$$
\Delta=17
$$

$$
-\frac{17}{4}
$$

At $k=2$:

$$
g_2(x)=x^{2}-5x=x(x-5)
$$

roots $0$ and $5$. A double root at $0$ would need both $C=0$ and $B=0$, which force incompatible values of $k$.
---
## math 7 DEMO MATH 8.H01 ovlen=1566
Day and night courier tariffs are affine in distance $d>0$. Night keeps the same kilometre rate and adds a flat surcharge, so the two cost graphs are parallel vertical translates.

**Part 1: Setup — the two tariffs.**

Daytime base fee (euros):

$$
12
$$

Daytime kilometre rate (euros per km):

$$
0.8
$$

Night flat surcharge (euros):

$$
5
$$

Daytime cost:

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

Night cost starts from the day formula and adds the surcharge:

$$
C_{\mathrm{night}}(d)=12+0.8d+5
$$

$$
12+5=17
$$

$$
C_{\mathrm{night}}(d)=17+0.8d
$$

Same slope on both:

$$
\frac{d}{dd}C_{\mathrm{day}}=0.8
$$

$$
\frac{d}{dd}C_{\mathrm{night}}=0.8
$$

Constant vertical gap:

$$
C_{\mathrm{night}}(d)-C_{\mathrm{day}}(d)=5
$$

**Part 2: Shared numerical evaluations.**

Kilometre charge at $d=5$:

$$
0.8\times 5=4
$$

$$
C_{\mathrm{day}}(5)=12+4=16
$$

$$
C_{\mathrm{night}}(5)=17+4=21
$$

Kilometre charge at $d=10$:

$$
0.8\times 10=8
$$

$$
C_{\mathrm{day}}(10)=12+8=20
$$

$$
C_{\mathrm{night}}(10)=17+8=25
$$

Kilometre charge at $d=20$:

$$
0.8\times 20=16
$$

$$
C_{\mathrm{day}}(20)=12+16=28
$$

$$
C_{\mathrm{night}}(20)=17+16=33
$$

Waived-base daytime charge at $d=20$:

$$
0.8\times 20=16
$$

Saving versus original daytime bill:

$$
28-16=12
$$

**Part 3: Break-even and doubling checks.**

Set day equal to night:

$$
12+0.8d=12+0.8d+5
$$

$$
0=5
$$

Contradiction, so no break-even $d^{*}$. Doubling $10\to 20$:

$$
\frac{C_{\mathrm{day}}(20)}{C_{\mathrm{day}}(10)}=\frac{28}{20}=1.4
$$

$$
1.4\neq 2
$$

so the bill does not double with distance.
---
## math 8 DEMO MATH 9.H01 ovlen=1472
A real cubic $r$ sits over the always-positive quadratic denominator $x^{2}+4$. Asymptotics of the quotient $s=r/(x^{2}+4)$ follow from degree comparison; multiple roots of $r$ follow from shared zeros with $r'$.

**Part 1: Setup.**

$$
r(x)=ax^{3}+bx^{2}+cx+d,\qquad a\neq 0
$$

$$
s(x)=\frac{r(x)}{x^{2}+4}
$$

Degree of the numerator:

$$
\deg r=3
$$

Degree of the denominator:

$$
\deg(x^{2}+4)=2
$$

Compare:

$$
3>2
$$

Derivative of the cubic:

$$
r'(x)=3ax^{2}+2bx+c
$$

**Part 2: Asymptotic rewrite of $s$.**

Factor $ax^{3}$ from the numerator and $x^{2}$ from the denominator:

$$
s(x)=\frac{ax^{3}\bigl(1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}\bigr)}{x^{2}\bigl(1+\frac{4}{x^{2}}\bigr)}
$$

Leading ratio:

$$
\frac{ax^{3}}{x^{2}}=ax
$$

$$
s(x)=ax\cdot\frac{1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}}{1+\frac{4}{x^{2}}}
$$

As $|x|\to\infty$ each of $\frac{b}{ax}$, $\frac{c}{ax^{2}}$, $\frac{d}{ax^{3}}$, $\frac{4}{x^{2}}$ tends to $0$, so the fraction tends to $1$ and

$$
s(x)\sim ax
$$

In particular $|s(x)|\to\infty$, so $y=0$ cannot be a horizontal asymptote.

**Part 3: Multiple roots and the concrete example.**

If $r(2)=0$ and $r'(2)=0$, then $(x-2)^{2}$ divides $r(x)$. For $a=3$, $b=-6$, $c=0$, $d=0$:

$$
r(x)=3x^{3}-6x^{2}
$$

$$
3x^{3}-6x^{2}=3x^{2}(x-2)
$$

Check by expanding:

$$
3x^{2}\cdot x=3x^{3}
$$

$$
3x^{2}\cdot(-2)=-6x^{2}
$$

$$
3x^{3}-6x^{2}=3x^{3}-6x^{2}
$$

so $x=0$ is a double root and $x=2$ is a simple root.
---
## math 9 DEMO MATH 10.H01 ovlen=1239
Two exponential trajectories and the log-gap between them. Every letter follows from the closed forms derived below.

**Part 1: Setup.**

$$
f(t)=4e^{0.3t}
$$

$$
g(t)=16e^{-0.6t}
$$

$$
h(t)=\ln\bigl(f(t)/g(t)\bigr)
$$

$$
p(t)=f(t)\,g(t)
$$

**Part 2: Ratio, log-gap, and product — every factor.**

Form the ratio:

$$
\frac{f(t)}{g(t)}=\frac{4e^{0.3t}}{16e^{-0.6t}}
$$

Constant prefactor:

$$
\frac{4}{16}=\frac{1}{4}
$$

$$
\frac{1}{4}=0.25
$$

Exponential exponent:

$$
0.3t-(-0.6t)=0.3t+0.6t
$$

$$
0.3+0.6=0.9
$$

$$
\frac{f(t)}{g(t)}=\frac{1}{4}e^{0.9t}
$$

Log-gap:

$$
h(t)=\ln\Bigl(\frac{1}{4}e^{0.9t}\Bigr)
$$

$$
\ln\Bigl(\frac{1}{4}\Bigr)+\ln(e^{0.9t})
$$

$$
\ln\Bigl(\frac{1}{4}\Bigr)=-\ln 4
$$

$$
\ln 4=\ln(2^{2})=2\ln 2
$$

$$
\ln 2\approx 0.693147
$$

$$
2\times 0.693147=1.386294
$$

$$
\ln 4\approx 1.386294
$$

$$
\ln(e^{0.9t})=0.9t
$$

$$
h(t)=-\ln 4+0.9t
$$

Product:

$$
p(t)=4e^{0.3t}\cdot 16e^{-0.6t}
$$

$$
4\times 16=64
$$

$$
0.3t+(-0.6t)=-0.3t
$$

$$
p(t)=64e^{-0.3t}
$$

**Part 3: Crossing point.**

Set $f=g$:

$$
4e^{0.3t}=16e^{-0.6t}
$$

$$
\frac{4}{16}e^{0.9t}=1
$$

$$
\frac{1}{4}e^{0.9t}=1
$$

$$
e^{0.9t}=4
$$

$$
0.9t=\ln 4
$$

$$
t=\frac{\ln 4}{0.9}
$$

$$
\frac{1.386294}{0.9}\approx 1.540327
$$
---
## math 10 DEMO MATH 11.H01 ovlen=1134
Linear inverse demand produces a concave quadratic revenue path. Marginal revenue is the derivative; the revenue peak is where that derivative vanishes.

**Part 1: Setup.**

$$
P(q)=90-3q,\qquad 0\le q\le 30
$$

$$
R(q)=q\cdot P(q)
$$

$$
R(q)=q(90-3q)
$$

$$
q\cdot 90=90q
$$

$$
q\cdot(-3q)=-3q^{2}
$$

$$
R(q)=90q-3q^{2}
$$

**Part 2: Marginal revenue and the peak.**

Differentiate term by term:

$$
\frac{d}{dq}(90q)=90
$$

$$
\frac{d}{dq}(-3q^{2})=-6q
$$

$$
R'(q)=90-6q
$$

Second derivative:

$$
R''(q)=-6
$$

$$
-6<0
$$

so $R$ is strictly concave. Set marginal revenue to zero:

$$
90-6q=0
$$

$$
6q=90
$$

$$
q=\frac{90}{6}
$$

$$
\frac{90}{6}=15
$$

$$
q^{*}=15
$$

**Part 3: Values at key quantities.**

At the peak $q=15$:

$$
3\times 15=45
$$

$$
P(15)=90-45=45
$$

$$
6\times 15=90
$$

$$
R'(15)=90-90=0
$$

$$
15^{2}=225
$$

$$
90\times 15=1350
$$

$$
3\times 225=675
$$

$$
R(15)=1350-675=675
$$

At the choke quantity $q=30$:

$$
3\times 30=90
$$

$$
P(30)=90-90=0
$$

$$
R(30)=30\times 0=0
$$

At $q=4$ and $q=5$ (used in letter C):

$$
R(4)=360-48=312
$$

$$
R(5)=450-75=375
$$

$$
R(5)-R(4)=63
$$

$$
R'(4)=66
$$
---
## math 11 MATH 12.187 ovlen=1676
A randomly tested deer from a three-subspecies population returns a positive field-test result. Every letter reuses the subspecies-conditional positive rates and the law-of-total-probability marginal derived below.

**Part 1: Priors and prevalences.**

$$
P(S_A)=0.60
$$

$$
P(S_B)=0.25
$$

$$
P(S_C)=0.15
$$

$$
P(D\mid S_A)=0.02
$$

$$
P(D\mid S_B)=0.06
$$

$$
P(D\mid S_C)=0.15
$$

Disease-free complements:

$$
1-0.02=0.98
$$

$$
P(D^{c}\mid S_A)=0.98
$$

$$
1-0.06=0.94
$$

$$
P(D^{c}\mid S_B)=0.94
$$

$$
1-0.15=0.85
$$

$$
P(D^{c}\mid S_C)=0.85
$$

Test characteristics:

$$
P(T^{+}\mid D)=0.90
$$

$$
P(T^{+}\mid D^{c})=0.04
$$

**Part 2: Subspecies-conditional positive rates — every product.**

$$
P(T^{+}\mid S_i)=0.90\cdot P(D\mid S_i)+0.04\cdot P(D^{c}\mid S_i)
$$

Subspecies A:

$$
0.90\times 0.02=0.018
$$

$$
0.04\times 0.98=0.0392
$$

$$
0.018+0.0392=0.0572
$$

$$
P(T^{+}\mid S_A)=0.0572
$$

Subspecies B:

$$
0.90\times 0.06=0.054
$$

$$
0.04\times 0.94=0.0376
$$

$$
0.054+0.0376=0.0916
$$

$$
P(T^{+}\mid S_B)=0.0916
$$

Subspecies C:

$$
0.90\times 0.15=0.135
$$

$$
0.04\times 0.85=0.034
$$

$$
0.135+0.034=0.169
$$

$$
P(T^{+}\mid S_C)=0.169
$$

**Part 3: Marginal $P(T^{+})$ and joints.**

$$
0.0572\times 0.60=0.03432
$$

$$
0.0916\times 0.25=0.0229
$$

$$
0.169\times 0.15=0.02535
$$

$$
0.03432+0.0229=0.05722
$$

$$
0.05722+0.02535=0.08257
$$

$$
P(T^{+})=0.08257
$$

$$
P(S_A\cap T^{+})=0.03432
$$

$$
P(S_B\cap T^{+})=0.0229
$$

$$
P(S_C\cap T^{+})=0.02535
$$

$$
P(S_A\mid T^{+})=\frac{0.03432}{0.08257}\approx 0.4156
$$

$$
P(S_B\mid T^{+})=\frac{0.0229}{0.08257}\approx 0.2773
$$

$$
P(S_C\mid T^{+})=\frac{0.02535}{0.08257}\approx 0.3070
$$
---
## math 12 MATH 13.108 ovlen=1043
Harbor staff run independent foghorn tests whose clear-audible outcomes form a binomial count. The stem supplies the mean over a block of $14$ trials; every letter reuses the recovered success probability $p=0.8$.

**Part 1: Setup.**

$$
X\sim\mathrm{Bin}(n,p)
$$

Stem data:

$$
n=14
$$

$$
E[X]=11.2
$$

Mean and variance identities:

$$
E[X]=np
$$

$$
\mathrm{Var}(X)=np(1-p)
$$

**Part 2: Recover $p$ by division.**

$$
p=\frac{E[X]}{n}=\frac{11.2}{14}
$$

$$
14\times 0.8=11.2
$$

$$
\frac{11.2}{14}=0.8
$$

$$
p=0.8
$$

$$
1-p=1-0.8
$$

$$
1-0.8=0.2
$$

$$
1-p=0.2
$$

**Part 3: Shared downstream values.**

Expected audible count in $12$ trials:

$$
12\times 0.8=9.6
$$

Variance in $50$ trials:

$$
50\times 0.8=40
$$

$$
40\times 0.2=8
$$

Three consecutive successes — build the cube:

$$
0.8\times 0.8=0.64
$$

$$
0.64\times 0.8=0.512
$$

$$
(0.8)^{3}=0.512
$$

Lower tail for $X\sim\mathrm{Bin}(6,0.8)$:

$$
P(X\le 4)=\sum_{x=0}^{4}\binom{6}{x}(0.8)^{x}(0.2)^{6-x}=0.34464
$$

which is less than $0.5$ (full expansion in letter E).
---
## economics 0 CASE 6.5.034 ovlen=808
The extract reports revenue, cost of sales, and opening/closing balances for total assets, inventory and trade receivables (EUR thousands). First build each average stock as (opening + closing) ÷ 2, pulling every extract number onto its own line before you divide. Inventory turnover uses cost of sales over average inventory; asset turnover uses revenue over average total assets; receivables turnover uses revenue over average trade receivables. Then compare each computed ratio with the claim threshold using <, >, \nless or \ngtr as needed.

$$
\text{Inventory turnover} = \frac{\text{cost of sales}}{\text{average inventory}}
$$

$$
\text{Asset turnover} = \frac{\text{revenue}}{\text{average total assets}}
$$

$$
\text{Receivables turnover} = \frac{\text{revenue}}{\text{average trade receivables}}
$$
---
## economics 1 CASE 6.4.010 ovlen=722
Read current assets as inventory + trade receivables + cash and current liabilities as trade payables + bank overdraft, adding each extract line on its own step. Non-current assets are buildings, machinery, office equipment and patents; non-current liabilities are the long-term bank loan and bonds payable. Totals close at assets 1181, equity 478 and liabilities 703. Working capital is CA − CL; the debt ratio is total liabilities ÷ total assets; composition shares are the named current-asset line ÷ CA.

$$
\text{Working capital} = \text{CA} - \text{CL}
$$

$$
\text{Debt ratio} = \frac{\text{total liabilities}}{\text{total assets}}
$$

$$
\text{Composition share} = \frac{\text{named line}}{\text{current assets}}
$$
---
## economics 2 CASE 6.2.039 ovlen=596
Current assets are inventory + trade receivables + cash; current liabilities are trade payables + bank overdraft. Add each line separately before forming ratios. Non-current assets total buildings + machinery + office equipment + patents. After inventory is stripped out, the quick (acid-test) cover is (CA − inventory) ÷ CL. Working capital is CA − CL; composition of buildings uses buildings ÷ total assets.

$$
\text{Current ratio} = \frac{\text{CA}}{\text{CL}}
$$

$$
\text{Quick ratio} = \frac{\text{CA} - \text{inventory}}{\text{CL}}
$$

$$
\text{Working capital} = \text{CA} - \text{CL}
$$
---
## economics 3 CASE 6.3.027 ovlen=585
Year-1 and Year-2 totals close at 1102 and 1144. Pull every Year-2 (or Year-1) line onto its own step before summing. Total equity moves from 542 to 532; Year-2 non-current liabilities are the long-term bank loan plus bonds payable; Year-2 current assets are inventory + receivables + cash and current liabilities are payables + overdraft. Percentage growth always uses (Year 2 − Year 1) ÷ Year 1.

$$
\text{growth} = \frac{Y_2 - Y_1}{Y_1}
$$

$$
\text{NCL share} = \frac{\text{non-current liabilities}}{\text{total equity}}
$$

$$
\text{Current ratio} = \frac{\text{CA}}{\text{CL}}
$$
---
## economics 4 CASE 6.1.020 ovlen=654
Current assets are inventory + trade receivables + cash; current liabilities are trade payables + bank overdraft. Add each extract line on its own step. Total assets 1206, total equity 718 and total liabilities 488 close the sheet. The current ratio is CA ÷ CL; the quick ratio strips inventory from CA before dividing by CL; equity and debt ratios use the sheet totals.

$$
\text{Current ratio} = \frac{\text{CA}}{\text{CL}}
$$

$$
\text{Quick ratio} = \frac{\text{CA} - \text{inventory}}{\text{CL}}
$$

$$
\text{Equity ratio} = \frac{\text{equity}}{\text{total assets}}, \quad \text{Debt ratio} = \frac{\text{total liabilities}}{\text{total assets}}
$$
---
## economics 5 CASE 6.5.068 ovlen=545
Current assets are inventory + trade receivables + cash; current liabilities are trade payables + bank overdraft. Add each extract line separately before forming any ratio. Total assets close at 1089. Working capital is CA − CL; the current ratio is CA ÷ CL; the quick ratio strips inventory before dividing by CL; composition shares use the named line ÷ CA.

$$
\text{Current ratio} = \frac{\text{CA}}{\text{CL}}
$$

$$
\text{Quick ratio} = \frac{\text{CA} - \text{inventory}}{\text{CL}}
$$

$$
\text{Working capital} = \text{CA} - \text{CL}
$$
---
## economics 6 CASE 6.5.074 ovlen=605
Current assets are inventory + trade receivables + cash; current liabilities are trade payables + bank overdraft. Add each line on its own step. Total assets are 933; the long-term bank loan of EUR 396 thousand sits with non-current liabilities, not equity. Working capital is CA − CL; the current ratio is CA ÷ CL; the quick ratio strips inventory before dividing by CL; buildings share uses buildings ÷ total assets.

$$
\text{Current ratio} = \frac{\text{CA}}{\text{CL}}
$$

$$
\text{Quick ratio} = \frac{\text{CA} - \text{inventory}}{\text{CL}}
$$

$$
\text{Working capital} = \text{CA} - \text{CL}
$$
---
## economics 7 CASE 6.5.060 ovlen=582
Current assets are inventory + trade receivables + cash; current liabilities are trade payables + bank overdraft. Add each extract line separately. Total assets 963 and total equity 310 close the financing side. The quick ratio is (CA − inventory) ÷ CL; the equity ratio is equity ÷ total assets; working capital is CA − CL; composition shares use buildings ÷ TA and inventory ÷ CA.

$$
\text{Quick ratio} = \frac{\text{CA} - \text{inventory}}{\text{CL}}
$$

$$
\text{Equity ratio} = \frac{\text{equity}}{\text{total assets}}
$$

$$
\text{Working capital} = \text{CA} - \text{CL}
$$
---
## economics 8 CASE 6.5.077 ovlen=734
Current assets are inventory + trade receivables + cash; current liabilities are trade payables + bank overdraft. Add each line separately. Non-current assets total buildings + machinery + office equipment + patents; equity is 584; non-current liabilities are the long-term bank loan plus bonds payable. Working capital is CA − CL; the quick ratio strips inventory before dividing by CL; composition shares use buildings ÷ TA and inventory ÷ CA; the excess of (equity + NCL) over NCA is measured relative to NCA.

$$
\text{Working capital} = \text{CA} - \text{CL}
$$

$$
\text{Quick ratio} = \frac{\text{CA} - \text{inventory}}{\text{CL}}
$$

$$
\text{Excess over NCA} = \frac{(\text{equity} + \text{NCL}) - \text{NCA}}{\text{NCA}}
$$
---
## economics 9 CASE 6.5.029 ovlen=640
Current assets are inventory + trade receivables + cash; current liabilities are trade payables + bank overdraft. Add each extract line on its own step. Total assets 1347, total equity 882 and total liabilities 465 close the sheet. The current ratio is CA ÷ CL; equity and debt ratios use those totals; working capital is CA − CL; buildings share uses buildings ÷ total assets.

$$
\text{Current ratio} = \frac{\text{CA}}{\text{CL}}
$$

$$
\text{Equity ratio} = \frac{\text{equity}}{\text{total assets}}, \quad \text{Debt ratio} = \frac{\text{total liabilities}}{\text{total assets}}
$$

$$
\text{Working capital} = \text{CA} - \text{CL}
$$
---