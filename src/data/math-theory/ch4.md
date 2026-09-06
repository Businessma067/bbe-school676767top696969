# Chapter 4 — Equations

An equation asks when two expressions take the same value. On the BBE mathematics exam, Chapter 4 is less about arithmetic and more about rules: which technique fits, which values are allowed, how many solutions exist, and whether a proposed root survives a domain check.

This guide follows the live Chapter 4 map (4.1–4.5). It spends most of its space on the rules themselves. A short closing block then shows how those rules appear in difficult True/False exam tasks.

## Learning objectives

- Reduce a linear equation to $Ax=B$ and classify unique / none / infinitely many solutions, including parameter cases.
- Use the discriminant and Vieta on quadratics, and recognise degeneration when the leading coefficient vanishes.
- Apply domain rules and extraneous-root checks for rational, radical, and absolute-value equations.
- Use same-base rewriting, the substitution $u=a^{x}>0$, and log conversion with argument restrictions.
- Separate algebraic roots from physical roots in fee, work-rate, and growth stories.
- Judge True/False claims from the solved picture, not from slogans.

---

## 4.1 Linear equations in one unknown

### What “linear” means here

After expanding brackets and combining like terms, a linear equation in one unknown can always be written

$$
Ax=B,
$$

where $A$ and $B$ do not contain $x$. Every allowed move (adding the same quantity to both sides, multiplying both sides by a nonzero constant, clearing a common denominator) is meant to reach this form without changing the solution set, except for values you deliberately exclude because a denominator was zero.

### The three cases of $Ax=B$

| Condition | Meaning | Exam wording |
| --- | --- | --- |
| $A\neq 0$ | Unique solution $x=\dfrac{B}{A}$ | “exactly one solution”, “the unique equilibrium”, … |
| $A=0$ and $B\neq 0$ | Contradiction: $0=B\neq 0$ | “no solution”, “impossible for every $x$” |
| $A=0$ and $B=0$ | Identity: $0=0$ for every allowed $x$ | “true for all $x$”, “an identity”, “infinitely many solutions” |

These three cases are the core linear rule. Almost every parametric True/False claim is asking which of the three boxes you are in.

**Rule.** An equation is an identity only when both $A=0$ and $B=0$ hold at the same time. A parameter appearing in the coefficients is not enough.

### Clearing fractions

If terms have denominators, multiply every term by a common multiple of those denominators (often their product). That step is allowed only away from the zeros of those denominators.

**Rules when clearing fractions**

1. List excluded values first: every denominator $\neq 0$.
2. Multiply the entire equation by the common multiple, not just one side.
3. Expand and collect into $Ax=B$.
4. Solve, then reject any candidate that hits an excluded value (this matters more for rational equations in 4.3, but the habit starts here).

### Parameters

When $A$ or $B$ depends on a parameter $a$, treat $a$ as temporarily fixed and solve for $x$. You obtain either

- a formula $x=x(a)$ on the set where $A(a)\neq 0$, or
- a special case $A(a)=0$, which must be classified with the three-case table above.

**Rules for parameter claims**

1. Write the excluded set for $a$ (denominators, and later any value that makes a model undefined).
2. Form $A(a)$ and $B(a)$ carefully; a sign error here ruins every later claim.
3. On $\{a:A(a)\neq 0\}$, study $x(a)=\dfrac{B(a)}{A(a)}$: sign charts, integer conditions, inequalities such as $x\geq 0$.
4. On $\{a:A(a)=0\}$, decide separately whether $B(a)=0$ (identity) or $B(a)\neq 0$ (no solution).
5. Never merge those two worlds. A claim “for every $a>3$ there is a unique negative $x$” is about the formula branch, not about an identity.

**Integer solutions.** If $x(a)$ simplifies to something like $-3+\dfrac{5}{3-a}$, then for integer $a\neq 3$ the value $x$ is integer exactly when $3-a$ divides $5$. That divisor language is a standard exam move.

### Word models

Fee, budget, and mixture stories are still linear equations. The extra rule is a physical filter: after solving, discard roots that violate an explicit restriction in the stem (positive price, nonnegative quantity, and so on). Algebra may allow a negative root; the story may not.

---

## 4.2 Quadratic equations

### Standard form

A quadratic equation is

$$
ax^{2}+bx+c=0\qquad\text{with }a\neq 0.
$$

The condition $a\neq 0$ is part of the definition. If a stem writes a formula that looks quadratic but allows $a=0$, you must leave the quadratic theory and fall back to the linear three-case rule.

### Discriminant rule

$$
\Delta=b^{2}-4ac.
$$

| $\Delta$ | Real roots | How to think about it |
| --- | --- | --- |
| $\Delta>0$ | Two distinct real roots | The parabola crosses the axis twice. |
| $\Delta=0$ | One real root, multiplicity two | The parabola touches once; still one $x$-value. |
| $\Delta<0$ | No real roots | No real crossing. |

The quadratic formula

$$
x=\frac{-b\pm\sqrt{\Delta}}{2a}
$$

is available only when $\Delta\geq 0$ (for real solutions) and $a\neq 0$.

**Rule.** “Number of real solutions” counts distinct real $x$-values unless the stem explicitly says “counting multiplicity”. A double root is one real solution with multiplicity two.

### Vieta’s rules

When $a\neq 0$ and the roots $x_{1},x_{2}$ are real (counting multiplicity),

$$
x_{1}+x_{2}=-\frac{b}{a},\qquad x_{1}x_{2}=\frac{c}{a}.
$$

**How to use them on True/False claims**

- Same sign of roots: need $x_{1}x_{2}>0$ (and usually also look at the sum to decide both positive or both negative).
- Opposite signs: need $x_{1}x_{2}<0$, that is $\dfrac{c}{a}<0$.
- Sum zero: $x_{2}=-x_{1}$ iff $b=0$.

**Rule.** $\Delta>0$ alone does **not** imply opposite signs. You need the product test as well.

### Degeneration rule when the leading coefficient vanishes

If the stem is $(k-1)x^{2}+\cdots=0$ and $k=1$, the $x^{2}$ term disappears. The equation becomes linear (or a constant equation). Apply the linear cases.

**Rule.** “Leading coefficient zero ⇒ no solution” is False in general. It may become a perfectly solvable linear equation, or an identity, or a contradiction. You must check.

### Factoring and completing the square

Factoring over the reals is possible when $\Delta$ is a perfect square (for rational coefficients) or, more generally, when the roots are real. Completing the square rewrites

$$
ax^{2}+bx+c=a\left(\left(x+\frac{b}{2a}\right)^{2}-\frac{\Delta}{4a^{2}}\right)
$$

and makes the vertex and the sign of $\Delta$ visible. Both methods obey the same discriminant rule; they are not a second theory.

### Substitution rule

An equation in $x^{2}$ or $x+\dfrac{1}{x}$ is often quadratic in a new unknown $u$.

**Rules**

1. Define $u$ explicitly ($u=x^{2}$, $u=2^{x}$, …).
2. Solve the quadratic for $u$.
3. Translate each $u$-root back to $x$, using the range of $u$.
4. Count final $x$-solutions carefully: each $u>0$ in $u=x^{2}$ gives two real $x$; $u=0$ gives one; $u<0$ gives none.

### Applied parabolas

For $P(q)=-(q-r)(q-s)$ with $r<s$:

- roots are $q=r$ and $q=s$;
- the axis is $q=\dfrac{r+s}{2}$;
- because the leading behaviour is $-q^{2}$, one has $P(q)>0$ for $q\in(r,s)$ and $P(q)<0$ outside $[r,s]$.

**Rule.** The axis location is not the same thing as the maximum value. The maximum value is $P$ evaluated at the axis.

---

## 4.3 Rational, radical, and absolute-value equations

### Rational equations: domain first

A rational equation is an equality of rational expressions. The governing rule is:

**Domain first, algebra second, check last.**

1. **Domain.** Every denominator $\neq 0$. Write the excluded set before you touch the LCD.
2. **Clear.** Multiply by the LCD on the domain.
3. **Solve** the polynomial equation you obtain.
4. **Check.** Discard every candidate in the excluded set.

**Rule about cancellation.** If you cancel a factor $(x-c)$, the simplified equation no longer “sees” $x=c$. But if $x=c$ made an original denominator zero, it remains forbidden. You may not plug it back into the simplified formula and call that a value of the original left-hand side.

### Extraneous roots from clearing

Multiplying by an LCD that depends on $x$ can, in principle, introduce extras if you multiply by zero. In practice, with a genuine LCD built from the denominators, the usual damage is the opposite: you must remember the holes you started with. Either way, the check against the domain is mandatory.

### Work-rate and average-speed structure

A two-worker model often looks like

$$
\frac{1}{x}+\frac{1}{x+d}=\frac{1}{T}
$$

with $x>0$, $x+d>0$, $T>0$. After clearing, you typically get a quadratic. Algebra may give two roots; the story keeps only those that satisfy the positivity (and any other stated) constraints.

**Rule.** A negative root of the cleared equation is not automatically a solution of the original rate problem.

### Radical equations: one-way implication of squaring

Even roots require nonnegative radicands. That is the domain rule.

The algebraic danger is different: if $U=V$, then $U^{2}=V^{2}$, but the converse is False. Squaring can turn a false equality into a true one. So:

1. Write the domain (radicands $\geq 0$, and any other restrictions).
2. Isolate a radical.
3. Square both sides.
4. Solve.
5. **Test every candidate in the original equation** (and against the domain).

**Rule.** A candidate can fail for two different reasons: it leaves the domain, or it stays in the domain but does not satisfy the unsquared equation. Exam claims often confuse those two reasons. Read them carefully.

Substitutions such as $u=\sqrt{f(x)}$ add the rule $u\geq 0$ by definition of the principal square root. Negative $u$-roots of the auxiliary quadratic are discarded even when the corresponding $x$ would have been in the radicand domain.

### Absolute-value equations

The definition

$$
\lvert A\rvert=
\begin{cases}
A,& A\geq 0,\\
-A,& A<0
\end{cases}
$$

implies the solving rule

| Right-hand side | Solutions of $\lvert A\rvert=c$ |
| --- | --- |
| $c>0$ | $A=c$ or $A=-c$ |
| $c=0$ | $A=0$ |
| $c<0$ | no real solution |

**Geometric rule.** $\lvert x-a\rvert$ is distance from $x$ to $a$ on the line. So $\lvert x-a\rvert=\lvert x-b\rvert$ means $x$ is equidistant from $a$ and $b$, hence $x=\dfrac{a+b}{2}$.

**Inequality companions** (often mixed into claims):

$$
\lvert A\rvert<c\ (c>0)\ \Longleftrightarrow\ -c<A<c,
$$

$$
\lvert A\rvert>c\ (c>0)\ \Longleftrightarrow\ A<-c\text{ or }A>c.
$$

**Rule.** Identities such as $\lvert x+y\rvert=\lvert x\rvert+\lvert y\rvert$ are not always true. They fail when $x$ and $y$ have opposite signs.

---

## 4.4 Exponential and logarithmic equations

### Same-base rule for exponentials

If $a>0$ and $a\neq 1$, the map $t\mapsto a^{t}$ is one-to-one on $\mathbb{R}$. Therefore

$$
a^{f(x)}=a^{g(x)}
\quad\Longleftrightarrow\quad
f(x)=g(x).
$$

**Rule.** You must first rewrite both sides with the **same** base. $4^{x}=(2^{x})^{2}=2^{2x}$, $8^{x}=(2^{x})^{3}$, and so on.

### Range rule for $a^{x}$

For $a>0$, $a\neq 1$,

$$
a^{x}>0\qquad\text{for every real }x.
$$

There is no real $x$ with $a^{x}\leq 0$. This single fact drives most exponential True/False traps after a substitution $u=a^{x}$.

### Substitution $u=a^{x}$

Many exam equations become quadratic in $u$:

1. Rewrite every exponential in base $a$.
2. Set $u=a^{x}$. Impose $u>0$.
3. Solve the quadratic in $u$.
4. Keep only positive $u$-roots.
5. Return to $x=\log_{a} u$ (one real $x$ per positive $u$).

**Rule.** A negative or zero root of the $u$-quadratic is not an exponential solution, even if $\Delta>0$ for that quadratic.

If the $u$-quadratic has $\Delta<0$, there is no real $u$ and therefore no real $x$.

### Logarithmic conversion rule

For $b>0$, $b\neq 1$, and $A>0$,

$$
\log_{b} A=c
\quad\Longleftrightarrow\quad
A=b^{c}.
$$

The argument restriction $A>0$ is mandatory. Changing the equation into exponential form does not remove it; you still verify $A>0$ at the end (and often up front).

### Logarithm algebra rules (with domain)

For $x>0$, $y>0$,

$$
\log_{b}(xy)=\log_{b} x+\log_{b} y,
\qquad
\log_{b}\!\left(\frac{x}{y}\right)=\log_{b} x-\log_{b} y,
\qquad
\log_{b}(x^{r})=r\log_{b} x.
$$

**Rule.** The sum rule requires **each** factor positive. If $x<0$ and $y<0$, then $xy>0$ so $\log_{b}(xy)$ may exist, but $\log_{b} x$ and $\log_{b} y$ do not. Writing $\log_{b}(xy)=\log_{b} x+\log_{b} y$ in that case is False.

### Growth models

For $N(t)=N_{0}\cdot 2^{t/T}$ with $N_{0}>0$ and $T>0$:

- $N$ is always positive;
- increasing $t$ by $T$ multiplies $N$ by $2$;
- increasing $t$ by $2T$ multiplies $N$ by $4$, not by adding $2N_{0}$.

**Rule.** Doubling is multiplication, not addition. After two doubling periods you have $4N_{0}$, never $3N_{0}$.

---

## 4.5 Mixed exam sets and True/False strategy

Subsection 4.5 reuses the rules above inside fee, surplus, work-rate, and growth stories. The five claims A–E are independent.

### Working order

1. **Inventory.** Unknowns, parameters, domain exclusions, physical restrictions.
2. **Classify.** Linear, quadratic, rational, radical, absolute value, exponential, or log.
3. **Apply the matching rules** from 4.1–4.4, including degeneration cases.
4. **Check** candidates against domain and story constraints.
5. **Judge each claim** from that finished picture.

### What True/False claims usually test

| Claim type | Rule you need |
| --- | --- |
| Count of solutions | Discriminant, $Ax=B$ cases, or positive-$u$ filter |
| Sign of a parameterised root | Sign chart of $x(a)$ |
| “Identity for some $a$” | Simultaneous $A(a)=B(a)=0$ |
| “Value at a cancelled hole” | Domain exclusion survives simplification |
| “Opposite-sign roots” | Product $c/a$, not merely $\Delta>0$ |
| Growth arithmetic | Multiply by powers of $2$, do not add |

### Frequent False slogans

| Slogan | Why it fails |
| --- | --- |
| Squaring preserves the solution set | Converse implication is false; extras appear. |
| Cancelled hole may be evaluated | Original denominator still forbids that input. |
| Leading coefficient $0$ ⇒ no solution | May become a solvable linear equation. |
| $\Delta>0$ ⇒ opposite-sign roots | Need also $x_{1}x_{2}<0$. |
| $\log(xy)=\log x+\log y$ with no checks | Each factor must be positive. |
| $a^{x}$ can be negative | The range is $(0,\infty)$. |
| Two doublings add $2N_{0}$ | They multiply by $4$. |

---

## 4.6 A few difficult exam-style tasks

The bank format is one stem and five independent True/False claims. The three tasks below are for practising the rules, not for replacing them. Read the matching section above before you mine these for patterns.

### Exam task 1 — Parametric linear equation

For $a\neq -1$,

$$
\frac{ax-6}{a+1}+2=\frac{3x-a}{a+1}.
$$

**A.** For every $a>3$, the unique solution $x$ is strictly negative.  
**B.** If $a\in(0,1)$, then $x$ is strictly positive.  
**C.** There exists $a\neq -1$ for which the equation is an identity.  
**D.** Exactly three distinct integers $a$ yield an integer solution $x$.  
**E.** One has $x\geq 0$ if and only if $a\in\left[\dfrac{4}{3},3\right)$.

**Solution (rules in action).**

Clear $a+1$: $(a-3)x=4-3a$.

- If $a\neq 3$, then $x=\dfrac{3a-4}{3-a}=-3+\dfrac{5}{3-a}$.
- If $a=3$, then $0=4-9=-5\neq 0$: no solution.
- Identity would need $a-3=0$ and $4-3a=0$ together: impossible.

**A True:** for $a>3$, numerator $3a-4>0$ and denominator $3-a<0$, so $x<0$, and uniqueness holds.  
**B False:** on $(0,1)$ one gets $x<0$.  
**C False:** never both coefficients vanish.  
**D False:** $x$ integer iff $3-a$ divides $5$, so $3-a\in\{\pm1,\pm5\}$, giving four integers $a\in\{2,4,8,-2\}$.  
**E True:** sign chart of $\dfrac{3a-4}{3-a}$ on $\mathbb{R}\setminus\{-1,3\}$ yields $x\geq 0$ precisely on $\left[\tfrac{4}{3},3\right)$.

**Answers:** A True, B False, C False, D False, E True.

### Exam task 2 — Parameterized quadratic and degeneration

$$
(k-1)x^{2}-2(k+1)x+(2k-1)=0.
$$

**A.** A double real root occurs exactly at $k=0$ and $k=5$.  
**B.** If $k=1$, there is no real solution.  
**C.** Whenever the equation is quadratic and $\Delta>0$, the roots have opposite signs.  
**D.** If $k=5$, the unique root is $x=\dfrac{3}{2}$.  
**E.** For $k=0$, the substitution $x=y^{2}$ produces four distinct real $y$.

**Solution.**

For $k\neq 1$, $\Delta=4k(5-k)$, so $\Delta=0$ at $k=0$ and $k=5$.

**A True.**  
**B False:** $k=1$ gives $-4x+1=0$, so $x=\dfrac14$ (linear degeneration rule).  
**C False:** opposite signs need $\dfrac{2k-1}{k-1}<0$; e.g. $k=2$ has $\Delta>0$ but product $3>0$.  
**D True:** $k=5$ gives $(2x-3)^{2}=0$.  
**E False:** $k=0$ forces $x=-1$; then $y^{2}=-1$ has no real $y$.

**Answers:** A True, B False, C False, D True, E False.

### Exam task 3 — Radical check versus domain, and an exponential range rule

Part I: $2x-5\sqrt{x+3}+3=0$.  
Part II: $4^{x}-2^{x+2}+5=0$.

**A.** The domain of Part I is $(-3,\infty)$.  
**B.** With $u=\sqrt{x+3}$, exactly one admissible $u$ appears, giving unique $x=6$.  
**C.** The candidate $x=-\dfrac{11}{4}$ fails only because it leaves the domain.  
**D.** Part II becomes $u^{2}-4u+5=0$ with $u=2^{x}$.  
**E.** Part II has no real solution.

**Solution.**

Part I domain is $x\geq -3$. Then $u\geq 0$ and $2u^{2}-5u-3=0$ give $u=3$ or $u=-\tfrac12$; only $u=3$ survives, so $x=6$. The value $x=-\tfrac{11}{4}$ is still in the domain but comes from illegal $u<0$.

Part II: $u=2^{x}>0$ yields $u^{2}-4u+5=0$ with $\Delta<0$, so no real $u$ and no real $x$.

**A False** (domain is closed). **B True.** **C False** (domain is not the reason). **D True.** **E True.**

**Answers:** A False, B True, C False, D True, E True.

---

## 4.7 Summary reference

| Situation | Governing rule |
| --- | --- |
| $Ax=B$ | Unique / none / identity from $A$ and $B$. |
| Parameter in linear equation | Formula branch if $A\neq 0$; separate case if $A=0$. |
| Quadratic $a\neq 0$ | Read the number of real roots from $\Delta$. |
| Leading coefficient becomes $0$ | Fall back to linear cases; do not invent emptiness. |
| Vieta sign claims | Use product and sum; $\Delta>0$ is not enough for opposite signs. |
| Rational equation | Domain → LCD → solve → reject holes. |
| Radical equation | Domain → isolate → raise powers → check originals. |
| $\lvert A\rvert=c$ | Use the $c>0$/ $c=0$/ $c<0$ table. |
| Exponential in base $a$ | Same-base cancellation, or $u=a^{x}>0$. |
| Logarithm | $\log_{b} A=c\Leftrightarrow A=b^{c}$ with $A>0$. |
| Growth by doubling | Multiply; do not add. |

### Key formulas

$$
Ax=B,
\qquad
\Delta=b^{2}-4ac,
\qquad
x=\frac{-b\pm\sqrt{\Delta}}{2a},
$$

$$
x_{1}+x_{2}=-\frac{b}{a},\quad x_{1}x_{2}=\frac{c}{a},
$$

$$
\lvert A\rvert=c\ (c>0)\ \Longleftrightarrow\ A=\pm c,
\qquad
\log_{b} A=c\ \Longleftrightarrow\ A=b^{c}\ (A>0),
$$

$$
a^{x}>0\quad\text{for all real }x.
$$

### Self-check

- State the three cases of $Ax=B$ without looking.
- Why is “$\Delta>0$ ⇒ opposite-sign roots” False?
- What are the two different reasons a radical candidate can fail?
- Why is a nonpositive root of a $u=a^{x}$ quadratic useless?
- After two doubling periods, is the amount $3N_{0}$ or $4N_{0}$?
