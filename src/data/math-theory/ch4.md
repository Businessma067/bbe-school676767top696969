# Chapter 4 — Equations

An equation asks when two expressions take the same value. On the BBE mathematics exam, Chapter 4 is not about plugging numbers into a calculator. It is about deciding which technique fits, which values are allowed, how many solutions exist, and whether a proposed root survives a domain check.

This chapter starts from linear equations and builds through quadratics, rational / radical / absolute-value equations, and exponential / logarithmic equations. The later mixed sets combine those skills in one True/False stem. The guide follows the live Chapter 4 map (4.1–4.5) and ends with several difficult exam-style tasks worked claim by claim.

## Learning objectives

- Clear linear equations, including those with parameters, and classify unique / none / infinitely many solutions.
- Solve quadratics by factoring, formula, or substitution, and read root properties from the discriminant and Vieta.
- Handle rational, radical, and absolute-value equations with the correct domain and extraneous-root checks.
- Rewrite exponential and logarithmic equations using the same base, substitutions $u=a^{x}$, and log rules only when arguments are positive.
- Translate word models (fees, work rates, growth) into equations and separate physical roots from algebraic extras.
- Judge Chapter 4 True/False claims by technique, domain, and solution count, not by arithmetic alone.

---

## 4.1 Linear equations in one unknown

### The standard form

After clearing brackets and combining like terms, a linear equation in one unknown can be written

$$
Ax = B,
$$

where $A$ and $B$ do not contain $x$.

Three cases matter on the exam:

| Condition | Conclusion |
| --- | --- |
| $A\neq 0$ | Unique solution $x=\dfrac{B}{A}$. |
| $A=0$ and $B\neq 0$ | No solution. |
| $A=0$ and $B=0$ | Identity: every allowed $x$ works (infinitely many solutions). |

The trap is to call an equation an identity just because a parameter appears. Both $A=0$ and $B=0$ must hold for the same parameter value.

### Clearing fractions

If every term has a denominator, multiply through by a common denominator (often the product of the distinct denominators). Then expand and collect terms. Keep every excluded parameter or excluded $x$ from the original denominators.

**Example 1.** Solve $\dfrac{x-1}{2}+\dfrac{x}{3}=4$.

Multiply by $6$:

$$
3(x-1)+2x=24
\quad\Longrightarrow\quad
5x-3=24
\quad\Longrightarrow\quad
x=\frac{27}{5}.
$$

### Parameters

When a coefficient depends on a parameter $a$, solve for $x$ in terms of $a$, then study the expression. Typical claims ask:

- for which $a$ the solution is unique;
- the sign of $x$;
- whether the equation can become an identity;
- which $a$ make $x$ an integer.

Always list the excluded values of $a$ first (zeros of denominators, or values that kill the leading coefficient).

**Example 2.** For $a\neq -1$,

$$
\frac{ax-6}{a+1}+2=\frac{3x-a}{a+1}.
$$

Multiply by $a+1$:

$$
ax-6+2(a+1)=3x-a
\quad\Longrightarrow\quad
ax+2a-4=3x-a.
$$

Collect $x$:

$$
(a-3)x=-3a+4
\quad\Longrightarrow\quad
x=\frac{3a-4}{3-a}\qquad(a\neq 3).
$$

If $a=3$, the left coefficient of $x$ vanishes and the right side becomes $-9+4=-5\neq 0$, so there is no solution at $a=3$. The equation is never an identity for any allowed $a$.

### Word models

Fee invoices, mixture, and budget stories usually reduce to one linear equation. Define the unknown clearly, write the balance once, then solve. Reject answers that violate a physical restriction stated in the stem (for example a positive price).

---

## 4.2 Quadratic equations

### Standard form and discriminant

Write

$$
ax^{2}+bx+c=0,\qquad a\neq 0.
$$

The discriminant is

$$
\Delta=b^{2}-4ac.
$$

| $\Delta$ | Real roots |
| --- | --- |
| $\Delta>0$ | Two distinct real roots. |
| $\Delta=0$ | One double real root $x=-\dfrac{b}{2a}$. |
| $\Delta<0$ | No real roots. |

The quadratic formula is

$$
x=\frac{-b\pm\sqrt{\Delta}}{2a}.
$$

### Vieta

If the roots are $x_{1}$ and $x_{2}$ (counting multiplicity),

$$
x_{1}+x_{2}=-\frac{b}{a},\qquad x_{1}x_{2}=\frac{c}{a}.
$$

Product sign and sum sign are useful True/False shortcuts, but only when $a\neq 0$ and the roots are known to be real. Opposite signs need $x_{1}x_{2}<0$, which requires $c$ and $a$ to have opposite signs.

### Degeneration when $a=0$

If a “quadratic” formula has a parameter in the leading coefficient, check the case $a=0$. The equation may become linear. Claiming “no solution when the leading coefficient vanishes” is often False.

**Example 3.** $(k-1)x^{2}-2(k+1)x+(2k-1)=0$.

- If $k\neq 1$, it is quadratic. A double root needs $\Delta=0$, which happens at certain $k$ (for example $k=0$ and $k=5$ in the hard bank tasks), still with $k\neq 1$.
- If $k=1$, the equation becomes $-4x+1=0$, so $x=\dfrac14$. That is a genuine linear solution, not “no solution”.

### Substitution

Equations such as $x^{4}-5x^{2}+4=0$ are quadratic in $u=x^{2}$. Solve for $u$ first, then recover $x$. Watch how many real $x$ each positive $u$ produces (two), and that $u=0$ produces one, while $u<0$ produces none.

### Applied parabolas

Profit or surplus models of the form $P(q)=-(q-r)(q-s)$ have roots $r$ and $s$. The axis of symmetry is $\dfrac{r+s}{2}$. The product is positive between the roots when the parabola opens downward. Do not confuse the axis location with the maximum value of $P$.

---

## 4.3 Rational, radical, and absolute-value equations

### Rational equations

1. Write the domain: every denominator $\neq 0$.
2. Multiply by the LCD.
3. Solve the resulting polynomial equation.
4. Discard any candidate that hits an excluded value.

Cancelling a factor $(x-c)$ removes a potential root $x=c$ from the simplified equation, but $x=c$ was already forbidden if it made a denominator zero.

**Example 4.** $\dfrac{x^{2}-16}{x-4}=x+4$ is True for every $x\neq 4$, but the claim “the left side equals $8$ at $x=4$” is False because $x=4$ is undefined.

### Work-rate and average-speed stories

If one machine needs $x$ hours and another needs $x+d$ hours, together they often satisfy

$$
\frac{1}{x}+\frac{1}{x+d}=\frac{1}{T}.
$$

Clear the LCD, solve the quadratic, then keep only the physically meaningful root (usually $x>0$). The negative root may be an algebraic solution of the cleared equation but not of the original story.

### Radical equations

1. Domain: every even root needs a nonnegative radicand; the whole expression must be defined.
2. Isolate one radical.
3. Square (or raise to the matching power).
4. Solve, then **check every candidate in the original equation**.

Squaring can introduce extraneous roots. A candidate can fail either because it leaves the domain or because both sides disagree after substitution.

**Example 5.** $2x-5\sqrt{x+3}+3=0$.

Domain: $x\geq -3$. Set $u=\sqrt{x+3}\geq 0$, so $x=u^{2}-3$. Substitute:

$$
2(u^{2}-3)-5u+3=0
\quad\Longrightarrow\quad
2u^{2}-5u-3=0
\quad\Longrightarrow\quad
(2u+1)(u-3)=0.
$$

Roots $u=-\dfrac12$ (reject, since $u\geq 0$) and $u=3$. Then $x=6$. Check in the original equation: it works. So the unique solution is $x=6$.

### Absolute-value equations

For $c>0$,

$$
\lvert A\rvert=c
\quad\Longleftrightarrow\quad
A=c\text{ or }A=-c.
$$

If $c=0$, then $A=0$. If $c<0$, there is no real solution.

For equations such as $\lvert x-a\rvert=\lvert x-b\rvert$, the solutions are the midpoint $x=\dfrac{a+b}{2}$ (geometric meaning: points equidistant from $a$ and $b$).

Casework on the critical points of the expression inside the bars is the systematic method when several absolute values appear.

---

## 4.4 Exponential and logarithmic equations

### Same-base exponentials

If $a>0$, $a\neq 1$, then

$$
a^{f(x)}=a^{g(x)}
\quad\Longleftrightarrow\quad
f(x)=g(x).
$$

Rewrite powers so the bases match before cancelling.

### Substitution $u=a^{x}$

Many equations become quadratic in $u=a^{x}$. Remember:

$$
u=a^{x}>0
$$

for every real $x$. Discard nonpositive $u$ even if the quadratic likes them.

**Example 6.** $4^{x}-2^{x+2}+5=0$.

Write $4^{x}=(2^{x})^{2}$ and $2^{x+2}=4\cdot 2^{x}$. With $u=2^{x}>0$,

$$
u^{2}-4u+5=0,\qquad \Delta=16-20=-4<0.
$$

No real $u$, hence no real $x$. Changing the constant term can produce one or two positive $u$-roots; each positive $u$ gives exactly one real $x=\log_{2} u$.

### Logarithms

For $b>0$, $b\neq 1$, and argument $A>0$,

$$
\log_{b} A = c
\quad\Longleftrightarrow\quad
A=b^{c}.
$$

Product and quotient rules need every argument positive:

$$
\log_{b}(xy)=\log_{b} x+\log_{b} y
\quad(x>0,\,y>0).
$$

Never apply the product rule when both factors are negative, even if the product is positive.

**Example 7.** $\log_{3}(x^{2}-2x+9)=2$.

The quadratic $x^{2}-2x+9$ has discriminant $4-36<0$, so it is always at least $8>0$. The log is defined for every real $x$. Convert:

$$
x^{2}-2x+9=9
\quad\Longrightarrow\quad
x^{2}-2x=0
\quad\Longrightarrow\quad
x(x-2)=0.
$$

Solutions $x=0$ and $x=2$. Both keep the argument positive, so both survive.

### Growth stories

Models such as $N(t)=N_{0}\cdot 2^{t/T}$ double every $T$ time units. Then $N(T)=2N_{0}$, $N(2T)=4N_{0}$, and so on. Claims that replace doubling by adding $N_{0}$ (for example “after two doubling periods the amount is $3N_{0}$”) are False.

---

## 4.5 Mixed exam sets and True/False strategy

Subsection 4.5 mixes linear fees, quadratic surplus, work-rate, and exponential growth in one bank. The five statements A–E are independent.

### A reliable exam order

1. Read the stem: list unknowns, parameters, and domain exclusions.
2. Rewrite the equation into a standard form (linear, quadratic, exponential in $u$, and so on).
3. Solve completely, including degeneration cases for parameters.
4. Check candidates against the domain and against the original wording (physical constraints).
5. Judge each True/False claim from that solved picture. Do not restart from scratch for every letter if the stem is shared.

### Frequent False slogans

| Slogan | Why it fails |
| --- | --- |
| Squaring always preserves the solution set | It can add extraneous roots. |
| Cancelled factor may be substituted back | That value is still excluded if it zeroed a denominator. |
| Leading coefficient $0$ means no solution | The equation may become a solvable linear equation. |
| Opposite-sign roots whenever $\Delta>0$ | You also need $x_{1}x_{2}<0$. |
| $\log(xy)=\log x+\log y$ with no domain check | Both factors must be positive. |
| $u=a^{x}$ may be negative | Exponential values are always positive. |

---

## 4.6 Difficult exam-style tasks with full solutions

The tasks below match the Chapter 4 bank: one stem, five independent True/False claims, and a full claim-by-claim solution.

### Exam task 1 — Parametric linear equation

An economic model determines the equilibrium adjustment $x\in\mathbb{R}$ as a function of a policy parameter $a\in\mathbb{R}\setminus\{-1\}$ by

$$
\frac{ax-6}{a+1}+2=\frac{3x-a}{a+1}.
$$

Which of the following statements is/are correct?

**A.** For every $a>3$, the unique equilibrium $x$ is strictly negative.

**B.** If $a\in(0,1)$, then the equilibrium $x$ is strictly positive.

**C.** There exists $a\neq -1$ for which the equation is an identity (true for every real $x$).

**D.** There are exactly three distinct integer values of $a$ that yield an integer equilibrium $x$.

**E.** The equation has a nonnegative solution $x\geq 0$ if and only if $a\in\left[\dfrac{4}{3},3\right)$.

**Complete solution.**

Clear the denominator $a+1$ (allowed since $a\neq -1$):

$$
ax-6+2(a+1)=3x-a
\quad\Longrightarrow\quad
(a-3)x=4-3a.
$$

- If $a\neq 3$, then $x=\dfrac{3a-4}{3-a}$ (equivalently $\dfrac{3a-4}{3-a}$).
- If $a=3$, then $0\cdot x=4-9=-5\neq 0$, so no solution.

The equation is never an identity: that would require $a-3=0$ and $4-3a=0$ together, which forces $a=3$ and $a=\dfrac{4}{3}$ at once.

**A.** → True

For $a>3$, both numerator $3a-4>0$ and denominator $3-a<0$, so $x<0$. The solution is unique because $a\neq 3$ automatically when $a>3$.

**B.** → False

For $a\in(0,1)$, numerator $3a-4<0$ and denominator $3-a>0$, so $x<0$, not strictly positive.

**C.** → False

As above, $A=a-3$ and $B=4-3a$ never vanish together for the same $a$.

**D.** → False

Integer $x$ for integer $a\neq -1,3$ means $3-a$ divides $3a-4$. Checking integers around the critical points shows more (or fewer) than three hits depending on the range; the bank’s detailed divisor count rejects “exactly three”. (A direct check for small integers already produces at least the values $a=0$ with $x=-\dfrac{4}{3}$ non-integer, $a=2$ with $x=2$, $a=4$ with $x=-8$, $a=5$ with $x=-\dfrac{11}{2}$, $a=-2$ with $x=-2$, … — the precise count is not three.)

More cleanly: $x=\dfrac{3a-4}{3-a}=-3+\dfrac{5}{3-a}$. For integer $a\neq 3$, $x$ is integer iff $3-a$ divides $5$, so $3-a\in\{\pm1,\pm5\}$. That yields four values $a=2,4,8,-2$, not three.

**E.** → True

For $a\neq 3$, $x\geq 0$ iff $\dfrac{3a-4}{3-a}\geq 0$. The critical points are $a=\dfrac{4}{3}$ and $a=3$. Sign chart on $\mathbb{R}\setminus\{-1,3\}$ gives nonnegativity precisely on $\left[\dfrac{4}{3},3\right)$. At $a=3$ there is no solution, so $3$ is excluded. At $a=\dfrac{4}{3}$, $x=0$, which is allowed.

**Answers:** A True, B False, C False, D False, E True.

### Exam task 2 — Parameterized quadratic

Consider

$$
(k-1)x^{2}-2(k+1)x+(2k-1)=0.
$$

Which of the following statements is/are correct?

**A.** The equation has a double real root if and only if $k\in\{0,5\}$ with $k\neq 1$ (already true here).

**B.** If $k=1$, the equation has no real solution.

**C.** Whenever the equation is quadratic and $\Delta>0$, the two roots have opposite signs.

**D.** If $k=5$, the unique root is $x=\dfrac{3}{2}$.

**E.** The substitution $x=y^{2}$ into the equation for $k=0$ produces four distinct real $y$.

**Complete solution.**

Discriminant (for $k\neq 1$):

$$
\Delta=4(k+1)^{2}-4(k-1)(2k-1)=4\bigl((k+1)^{2}-(k-1)(2k-1)\bigr).
$$

Expand:

$$
(k+1)^{2}-(k-1)(2k-1)=k^{2}+2k+1-(2k^{2}-k-2k+1)=k^{2}+2k+1-2k^{2}+3k-1=-k^{2}+5k.
$$

So $\Delta=4k(5-k)$. Thus $\Delta=0$ at $k=0$ and $k=5$, both different from $1$.

**A.** → True

Double roots occur exactly at $k=0$ and $k=5$, where the equation remains quadratic.

**B.** → False

At $k=1$ the quadratic term drops and one gets $-4x+1=0$, hence $x=\dfrac14$. There is a real solution.

**C.** → False

Opposite signs need $x_{1}x_{2}=\dfrac{2k-1}{k-1}<0$. This is not automatic whenever $\Delta>0$. For example at $k=2$, $\Delta=4\cdot2\cdot3>0$ and product $\dfrac{3}{1}>0$, so the roots have the same sign.

**D.** → True

For $k=5$, the equation is $4x^{2}-12x+9=0$, that is $(2x-3)^{2}=0$, so $x=\dfrac{3}{2}$.

**E.** → False

For $k=0$, the equation is $-x^{2}-2x-1=0$, that is $x^{2}+2x+1=0$, so $(x+1)^{2}=0$ and $x=-1$. Setting $x=y^{2}$ would require $y^{2}=-1$, which gives no real $y$, let alone four distinct real $y$.

**Answers:** A True, B False, C False, D True, E False.

### Exam task 3 — Radical equation and extraneous roots

Solve, in the background,

$$
2x-5\sqrt{x+3}+3=0.
$$

Which of the following statements is/are correct?

**A.** The domain is the open interval $(-3,\infty)$.

**B.** The substitution $u=\sqrt{x+3}$ forces $u\geq 0$ and yields exactly one admissible $u$.

**C.** After substitution, the quadratic for $u$ has root sum $\dfrac{5}{2}$.

**D.** $x=-\dfrac{11}{4}$ fails only because it leaves the domain.

**E.** The original equation has the unique real solution $x=6$.

**Complete solution.**

Domain: $x+3\geq 0$, so $x\geq -3$ (closed ray). Set $u=\sqrt{x+3}\geq 0$, hence $x=u^{2}-3$. Substitute:

$$
2(u^{2}-3)-5u+3=0
\quad\Longrightarrow\quad
2u^{2}-5u-3=0
\quad\Longrightarrow\quad
u=\frac{5\pm\sqrt{25+24}}{4}=\frac{5\pm 7}{4}.
$$

So $u=3$ or $u=-\dfrac12$. Only $u=3$ is allowed. Then $x=6$. The rejected $u=-\dfrac12$ would have given $x=\dfrac{1}{4}-3=-\dfrac{11}{4}$, which lies in the domain $[-3,\infty)$ but fails the original equation because $u$ was required to be nonnegative (equivalently, checking LHS and RHS after restoring the square root fails).

**A.** → False

The domain is $[-3,\infty)$, not the open interval $(-3,\infty)$. The endpoint $x=-3$ is allowed for the square root.

**B.** → True

$u\geq 0$ by definition of the principal square root, and only $u=3$ survives.

**C.** → True

For $2u^{2}-5u-3=0$, Vieta gives root sum $\dfrac{5}{2}$.

**D.** → False

$x=-\dfrac{11}{4}$ is still $\geq -3$, so it lies in the domain. It fails because it corresponds to the negative $u$, which is not a value of $\sqrt{x+3}$.

**E.** → True

The only surviving solution is $x=6$.

**Answers:** A False, B True, C True, D False, E True.

### Exam task 4 — Exponential with no real root, and a log companion

Consider the equation

$$
4^{x}-2^{x+2}+5=0.
$$

Separately, consider $\log_{3}(x^{2}-2x+9)=2$.

Which of the following statements is/are correct?

**A.** The substitution $u=2^{x}$ turns the exponential equation into $u^{2}-4u+5=0$.

**B.** The exponential equation has no real solution.

**C.** For the logarithmic equation, the argument $x^{2}-2x+9$ is positive for every real $x$.

**D.** The logarithmic equation has a strictly negative solution.

**E.** The logarithmic equation has solutions $x=0$ and $x=2$.

**Complete solution.**

**Exponential part.** $4^{x}=(2^{x})^{2}$ and $2^{x+2}=4\cdot 2^{x}$. With $u=2^{x}>0$,

$$
u^{2}-4u+5=0,\qquad \Delta=16-20<0.
$$

No real $u$, hence no real $x$.

**Logarithmic part.** Discriminant of $x^{2}-2x+9$ is $4-36=-32<0$, and the leading coefficient is positive, so the quadratic is always at least $9-\dfrac{1}{1}=8>0$. Convert the log equation:

$$
x^{2}-2x+9=3^{2}=9
\quad\Longrightarrow\quad
x^{2}-2x=0
\quad\Longrightarrow\quad
x(x-2)=0.
$$

Roots $0$ and $2$, both admissible. Neither is strictly negative.

**A.** → True

**B.** → True

**C.** → True

**D.** → False

**E.** → True

**Answers:** A True, B True, C True, D False, E True.

### Exam task 5 — Mixed applied set

A firm’s weekly surplus is modelled by $P(q)=-(q-6)(q-12)$ for output $q\geq 0$. A second team solves the work-rate equation $\dfrac{1}{x}+\dfrac{1}{x+12}=\dfrac{1}{8}$ for a positive time $x$. A third model uses $N(t)=250\cdot 2^{t/3}$.

Which of the following statements is/are correct?

**A.** $P(q)=0$ at $q=6$ and $q=12$.

**B.** $P(q)>0$ for every $q\in(6,12)$.

**C.** The work-rate equation has a unique positive solution $x=12$.

**D.** $N(6)=750$.

**E.** $N(t)$ doubles every $3$ time units.

**Complete solution.**

**A.** → True

The factors give roots $6$ and $12$.

**B.** → True

The parabola opens downward (leading behaviour $-q^{2}$), so $P$ is positive between the roots.

**C.** → True

Clear $8x(x+12)$:

$$
8(x+12)+8x=x(x+12)
\quad\Longrightarrow\quad
x^{2}-4x-96=0
\quad\Longrightarrow\quad
(x-12)(x+8)=0.
$$

Roots $x=12$ and $x=-8$. Only $x=12$ is positive and admissible for the rate story.

**D.** → False

$$
N(6)=250\cdot 2^{6/3}=250\cdot 2^{2}=250\cdot 4=1000,
$$

not $750$. The false value $750$ comes from adding one doubling instead of multiplying by $4$ over two doubling periods.

**E.** → True

The exponent is $t/3$, so when $t$ increases by $3$, the factor $2^{t/3}$ multiplies by $2$.

**Answers:** A True, B True, C True, D False, E True.

---

## 4.7 Summary reference

| Task | Method |
| --- | --- |
| Linear $Ax=B$ | Unique / none / identity from $A$ and $B$. |
| Linear with fractions | Multiply by LCD; keep exclusions. |
| Parametric linear | Solve $x(a)$; study sign and special $a$. |
| Quadratic | Use $\Delta$, formula, factoring, Vieta. |
| Leading coefficient $0$ | Reduce to linear; do not invent “no solution”. |
| Rational equation | Domain → LCD → solve → reject excluded roots. |
| Radical equation | Domain → isolate → raise powers → check. |
| Absolute value $\lvert A\rvert=c>0$ | Solve $A=\pm c$. |
| Exponential | Match bases or set $u=a^{x}>0$. |
| Logarithm | Convert $\log_{b} A=c$ to $A=b^{c}$ with $A>0$. |
| Growth $N_{0}2^{t/T}$ | Multiplies by $2$ every $T$ units. |

### Key formulas

$$
Ax=B,
\qquad
x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a},
\qquad
x_{1}+x_{2}=-\frac{b}{a},\quad x_{1}x_{2}=\frac{c}{a},
$$

$$
\lvert A\rvert=c\ (c>0)\ \Longleftrightarrow\ A=\pm c,
\qquad
\log_{b} A=c\ \Longleftrightarrow\ A=b^{c}\ (A>0).
$$

### Working order on an exam statement

1. Domain and excluded parameters.
2. Standard form.
3. Solve, including degeneration cases.
4. Check candidates.
5. Verdict for each claim.

### Self-check

- When is $Ax=B$ an identity rather than a unique solution?
- Why can $k=1$ in a “quadratic” still give a real root?
- Why must radical candidates be checked in the original equation?
- Why is $u=a^{x}$ never negative?
- If $N(t)=250\cdot 2^{t/3}$, what is $N(6)$, and why is $750$ wrong?
