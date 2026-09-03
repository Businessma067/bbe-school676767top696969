# BBE-style differentiation and optimization question draft

This draft is based on the uploaded textbook chapters on differentiation, concavity/convexity, single-variable optimization, and finance-linked applications. Each case has one short stem and five independent TRUE/FALSE statements.

## Table of contents
1. Differentiation rules & mechanics
2. Economic interpretation of the derivative
3. Finding and classifying optima
4. Applied optimization (profit/cost/area/elasticity)
5. Interpreting graphs without algebra

## 1. Differentiation rules & mechanics

### Case 1 — Tangent line from the derivative

**Context.** A workshop models daily profit in hundreds of euros by

$$
P(x)=x^{2}-4x+7
$$

where $x$ is the number of dozens of items sold. Evaluate each statement. Mark it TRUE or FALSE.

- **A.** The Newton quotient at $x=a$ simplifies to $2a+h-4$.
- **B.** $P'(3)=2$.
- **C.** The tangent line to the graph at $x=3$ is $y=2x-2$.
- **D.** The function is decreasing for all $x>2$.
- **E.** $x=2$ is a minimum point of $P$.

**Answer key.** A = True, B = True, C = True, D = False, E = True

**Explanations**

- **A.** True

  Start from the difference quotient:

  $$
  \frac{P(a+h)-P(a)}{h}
  =
  \frac{(a+h)^{2}-4(a+h)+7-(a^{2}-4a+7)}{h}
  $$

  Expand and simplify:

  $$
  \frac{2ah+h^{2}-4h}{h}=2a+h-4
  $$

  So the quotient does simplify to $2a+h-4$.

- **B.** True

  From Case A or by direct differentiation:

  $$
  P'(x)=2x-4
  $$

  Hence

  $$
  P'(3)=2\cdot 3-4=2
  $$

- **C.** True

  First find the point on the graph:

  $$
  P(3)=3^{2}-4\cdot 3+7=4
  $$

  The tangent has slope $P'(3)=2$, so

  $$
  y-4=2(x-3)
  $$

  which gives

  $$
  y=2x-2
  $$

- **D.** False

  Since

  $$
  P'(x)=2x-4
  $$

  we have $P'(x)>0$ for every $x>2$. A positive derivative means the function is increasing there, not decreasing.

- **E.** True

  The derivative is zero when

  $$
  2x-4=0 \quad \Rightarrow \quad x=2
  $$

  Also, the parabola opens upward because the coefficient of $x^{2}$ is positive. So $x=2$ is the minimum point.

---

### Case 2 — Product rule, chain-style reasoning, and a local maximum

**Context.** A marketing team models a demand-sensitivity index by

$$
S(x)=x^{2}e^{-x}, x>0
$$

where $x$ is the advertising intensity. Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $S'(x)=xe^{-x}(2-x)$.
- **B.** The only critical point in the domain is $x=2$.
- **C.** $S''(x)=e^{-x}(x^{2}-4x+2)$.
- **D.** $S$ is increasing for all $x>2$.
- **E.** $x=2$ is a local maximum point.

**Answer key.** A = True, B = True, C = True, D = False, E = True

**Explanations**

- **A.** True

  Use the product rule:

  $$
  S'(x)=(2x)e^{-x}+x^{2}(-e^{-x})
  $$

  Factor out the common term:

  $$
  S'(x)=e^{-x}(2x-x^{2})=xe^{-x}(2-x)
  $$

- **B.** True

  Critical points in the domain satisfy $S'(x)=0$. Because $e^{-x}>0$ for all $x$ and $x>0$ in the domain, the only way

  $$
  xe^{-x}(2-x)=0
  $$

  can hold is

  $$
  2-x=0 \quad \Rightarrow \quad x=2
  $$

  The value $x=0$ is not in the domain.

- **C.** True

  Differentiate

  $$
  S'(x)=e^{-x}(2x-x^{2})
  $$

  again:

  $$
  S''(x)=(-e^{-x})(2x-x^{2})+e^{-x}(2-2x)
  $$

  So

  $$
  S''(x)=e^{-x}(x^{2}-4x+2)
  $$

- **D.** False

  For $x>2$, the factor $2-x$ is negative, while $x>0$ and $e^{-x}>0$. Hence

  $$
  S'(x)<0
  $$

  So the function is decreasing, not increasing.

- **E.** True

  The derivative changes sign from positive to negative:

  - if $0<x<2$, then $2-x>0$, so $S'(x)>0$
  - if $x>2$, then $2-x<0$, so $S'(x)<0$

  Therefore $S$ rises up to $x=2$ and falls after it, so $x=2$ is a local maximum.

---

### Case 7 — Derivative of revenue from a nested demand rule

**Context.** A retailer sets a unit price (in euros) by

$$
p(n)=20-3n
$$

where $n>0$ is advertising intensity. Expected demand is

$$
q(n)=\sqrt{2n+1}
$$

units. Revenue is

$$
R(n)=p(n)\,q(n)=(20-3n)\sqrt{2n+1}.
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $R'(n)=\dfrac{17-9n}{\sqrt{2n+1}}$.
- **B.** $R'(1)=\dfrac{8}{\sqrt{3}}$.
- **C.** $R(n)$ is increasing for every $0<n<2$.
- **D.** $R'(n)=0$ at $n=\dfrac{17}{9}$.
- **E.** Differentiating $R(n)=(20-3n)\sqrt{2n+1}$ requires both the product rule and the chain rule.

**Answer key.** A = True, B = True, C = False, D = True, E = True

**Explanations**

- **A.** True

  Start from

  $$
  R(n)=(20-3n)(2n+1)^{1/2}.
  $$

  Product rule:

  $$
  R'(n)=(20-3n)'\,(2n+1)^{1/2}+(20-3n)\,(2n+1)^{1/2}'.
  $$

  Compute derivatives:

  $$
  (20-3n)'=-3
  (2n+1)^{1/2}'=(2n+1)^{-1/2}.
  $$

  So

  $$
  R'(n)=-3\sqrt{2n+1}+(20-3n)(2n+1)^{-1/2}
  =\frac{20-3n-3(2n+1)}{\sqrt{2n+1}}
  =\frac{17-9n}{\sqrt{2n+1}}.
  $$

- **B.** True

  Substitute $n=1$:

  $$
  R'(1)=\frac{17-9}{\sqrt{3}}=\frac{8}{\sqrt{3}}.
  $$

- **C.** False

  From part A, the numerator $17-9n$ changes sign at $n=17/9$.

  Since $17/9<2$, revenue rises only until $n=17/9$, then it falls for $n>17/9$.

- **D.** True

  If $n=17/9$, then $17-9n=0$, so

  $$
  R'(17/9)=0.
  $$

- **E.** True

  The expression is a product of two factors $(20-3n)$ and $\sqrt{2n+1}$, so you need the product rule.

  Also, $\sqrt{2n+1}=(2n+1)^{1/2}$ is a composition, so its derivative uses the chain rule.

---

### Case 8 — Quotient rule as maintenance time per effective unit

**Context.** A factory has $n>0$ machines. Total maintenance time is

$$
H(n)=2n^{2}+8n.
$$

The schedule converts this into maintenance time per effective output unit by dividing by $n+1$:

$$
T(n)=\frac{H(n)}{n+1}=\frac{2n^{2}+8n}{n+1}.
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $T'(n)=\dfrac{2n^{2}+4n+8}{(n+1)^{2}}$.
- **B.** $T'(1)=\dfrac{7}{2}$.
- **C.** $T(n)$ is decreasing for every $n>0$.
- **D.** $T'(n)>0$ for every $n>0$.
- **E.** There is no $n>0$ such that $T'(n)=0$.

**Answer key.** A = True, B = True, C = False, D = True, E = True

**Explanations**

- **A.** True

  Use the quotient rule with $u=2n^{2}+8n$ and $v=n+1$:

  $$
  u'=4n+8,
  v'=1.
  $$

  Then

  $$
  T'(n)=\frac{u'v-uv'}{v^{2}}
  =\frac{(4n+8)(n+1)-(2n^{2}+8n)}{(n+1)^{2}}.
  $$

  Expand the numerator:

  $$
  (4n+8)(n+1)=4n^{2}+12n+8.
  $$

  So

  $$
  4n^{2}+12n+8-(2n^{2}+8n)=2n^{2}+4n+8.
  $$

  Hence

  $$
  T'(n)=\frac{2n^{2}+4n+8}{(n+1)^{2}}.
  $$

- **B.** True

  Substitute $n=1$:

  $$
  T'(1)=\frac{14}{4}=\frac{7}{2}.
  $$

- **C.** False

  From part A, the numerator $2n^{2}+4n+8$ is positive for all real $n$, and $(n+1)^{2}>0$ for $n>0$.

  So $T'(n)$ is not negative everywhere.

- **D.** True

  For $n>0$ we have $2n^{2}+4n+8>0$ and $(n+1)^{2}>0$, so $T'(n)>0$.

- **E.** True

  Since $T'(n)>0$ for every $n>0$ (part D), it never equals $0$ in that domain.

---

## 3. Finding and classifying optima

### Case 3 — Concavity, inflection points, and classifying stationary points

**Context.** A firm studies the score function

$$
f(x)=\frac{1}{9}x^{3}-\frac{1}{6}x^{2}-\frac{2}{3}x+1
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $f''\left(\frac{1}{2}\right)=0$.
- **B.** The function is concave for all $x<\frac{1}{2}$.
- **C.** $x=\frac{1}{2}$ is a local maximum point.
- **D.** $x=-1$ is a local maximum point.
- **E.** $x=2$ is a local maximum point.

**Answer key.** A = True, B = True, C = False, D = True, E = False

**Explanations**

- **A.** True

  Differentiate:

  $$
  f'(x)=\frac{1}{3}x^{2}-\frac{1}{3}x-\frac{2}{3}
  =\frac{1}{3}(x+1)(x-2)
  $$

  and then

  $$
  f''(x)=\frac{2}{3}x-\frac{1}{3}
  =\frac{2}{3}\left(x-\frac{1}{2}\right)
  $$

  Hence

  $$
  f''\left(\frac{1}{2}\right)=0
  $$

- **B.** True

  A function is concave where $f''(x)<0$. Here

  $$
  f''(x)=\frac{2}{3}\left(x-\frac{1}{2}\right)
  $$

  so for every $x<\frac{1}{2}$ we have $f''(x)<0$. Therefore the function is concave on that side.

- **C.** False

  The condition $f''\left(\frac{1}{2}\right)=0$ is only a necessary clue for an inflection point, not evidence of a local maximum. In fact, $f''$ changes sign from negative to positive at $x=\frac{1}{2}$, so this point is an inflection point.

- **D.** True

  The derivative factorization gives critical points at $x=-1$ and $x=2$. Check the sign of

  $$
  f'(x)=\frac{1}{3}(x+1)(x-2)
  $$

  Around $x=-1$:

  - for $x<-1$, both factors are negative, so $f'(x)>0$
  - for $-1<x<2$, one factor is positive and one negative, so $f'(x)<0$

  The derivative changes from positive to negative, so $x=-1$ is a local maximum.

- **E.** False

  Around $x=2$:

  - for $-1<x<2$, $f'(x)<0$
  - for $x>2$, $f'(x)>0$

  So the derivative changes from negative to positive, which means $x=2$ is a local minimum, not a local maximum.

---

### Case 11 — FOC candidates and second-derivative classification

**Context.** A firm models expected net benefit by

$$
f(x)=-x^{3}+3x^{2}+9x.
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** The critical points in the real line satisfy $f'(x)=0$, which gives $x=-1$ and $x=3$.
- **B.** $f''(x)=-6x+6$, so $f''(-1)>0$.
- **C.** Since $f''(-1)>0$, the point $x=-1$ is a local minimum point.
- **D.** Since $f''(3)<0$, the point $x=3$ is a local minimum point.
- **E.** The point $x=1$ is an inflection point because $f''(1)=0$ and the concavity changes there.

**Answer key.** A = True, B = True, C = True, D = False, E = True

**Explanations**

- **A.** True

  Differentiate:

  $$
  f'(x)=-3x^{2}+6x+9=-3(x-3)(x+1).
  $$

  So $f'(x)=0$ exactly when $x=-1$ or $x=3$.

- **B.** True

  Differentiate again:

  $$
  f''(x)=-6x+6.
  $$

  Then

  $$
  f''(-1)=6+6=12>0.
  $$

- **C.** True

  Since $f''(-1)>0$, the second-derivative test says the critical point $x=-1$ is a local minimum.

- **D.** False

  We have

  $$
  f''(3)=-6\cdot 3+6=-12<0,
  $$

  so $x=3$ is a local maximum, not a local minimum.

- **E.** True

  Concavity is determined by the sign of $f''(x)=6(1-x)$.

  We get $f''(1)=0$, and $f''(x)>0$ for $x<1$ while $f''(x)<0$ for $x>1$.

  So the concavity changes at $x=1$, meaning an inflection point.

---

### Case 12 — Stationary point where second-derivative test gives “neither”

**Context.** For $x$ in the interval $[-2,2]$, a function is

$$
g(x)=x^{3}.
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $g'(x)=3x^{2}$.
- **B.** The only solution of $g'(x)=0$ in $[-2,2]$ is $x=0$.
- **C.** $g$ is increasing on $[-2,2]$.
- **D.** $x=0$ is a local maximum point of $g$.
- **E.** $x=0$ is neither a local maximum nor a local minimum point of $g$.

**Answer key.** A = True, B = True, C = True, D = False, E = True

**Explanations**

- **A.** True

  Differentiate $x^{3}$:

  $$
  g'(x)=3x^{2}.
  $$

- **B.** True

  Solve $g'(x)=0$:

  $$
  3x^{2}=0 \Rightarrow x=0.
  $$

- **C.** True

  For every $x$ in $[-2,2]$, we have $x^{2}\ge 0$, so

  $$
  g'(x)=3x^{2}\ge 0,
  $$

  with equality only at $x=0$.

  So the function never decreases, meaning it is increasing on the interval.

- **D.** False

  Since $g$ is increasing on $[-2,2]$, the value at $x=0$ is not higher than values on both sides.

  So it cannot be a local maximum.

- **E.** True

  Around $x=0$, the function increases for $x<0$ moving toward $0$, and it continues to increase for $x>0$.

  Therefore $x=0$ is neither a local maximum nor a local minimum (it is a stationary point with no extremum).

---

## 4. Applied optimization (profit/cost/area/elasticity)

### Case 4 — Maximizing the volume of an open box

**Context.** A square tin plate has side length $18$ cm. Squares of width $x$ cm are cut from each corner and the sides are folded up to form an open box. For $x\in[0,9]$, the volume is

$$
V(x)=x(18-2x)^{2}=4x^{3}-72x^{2}+324x
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** The feasible domain is $0\leq x\leq 9$.
- **B.** $V'(x)=12(x-3)(x-9)$.
- **C.** The maximum volume is achieved at $x=9$.
- **D.** The maximum volume is achieved at $x=3$.
- **E.** The maximum volume exceeds $500\,\mathrm{cm}^{3}$.

**Answer key.** A = True, B = True, C = False, D = True, E = False

**Explanations**

- **A.** True

  The cut size cannot be negative, and each side after folding has length

  $$
  18-2x
  $$

  which must be nonnegative. So

  $$
  x\geq 0, 18-2x\geq 0
  $$

  giving

  $$
  0\leq x\leq 9
  $$

- **B.** True

  Differentiate the expanded form:

  $$
  V'(x)=12x^{2}-144x+324
  $$

  Factor:

  $$
  V'(x)=12(x^{2}-12x+27)=12(x-3)(x-9)
  $$

- **C.** False

  At $x=9$ the base side is

  $$
  18-2\cdot 9=0
  $$

  so the box has zero volume:

  $$
  V(9)=0
  $$

  That cannot be the maximum.

- **D.** True

  Check the key points $x=0$, $x=3$, and $x=9$:

  $$
  V(0)=0
  $$

  $$
  V(3)=3\cdot 12^{2}=432
  $$

  $$
  V(9)=0
  $$

  Therefore the largest value on the interval is at $x=3$.

- **E.** False

  From part D, the maximum volume is

  $$
  V(3)=432\,\mathrm{cm}^{3}
  $$

  Since $432<500$, the statement is false.

---

### Case 13 — Profit maximization from price-and-cost stories

**Context.** A firm sells $q$ units where $q\in[0,30]$. The unit price (euros per unit) is

$$
p(q)=100-2q.
$$

Revenue is $R(q)=p(q)\,q$. Total cost is

$$
C(q)=20q+q^{2}.
$$

Profit is $\pi(q)=R(q)-C(q)$. Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $\pi(q)=80q-3q^{2}$ for all $q\in[0,30]$.
- **B.** The first-order condition $\pi'(q)=0$ gives $q=\dfrac{40}{3}$.
- **C.** Because $\pi''(q)<0$, the candidate $q=\dfrac{40}{3}$ is a local maximum.
- **D.** The profit is maximized at the boundary point $q=30$.
- **E.** To maximize profit, you must differentiate $\pi(q)=R(q)-C(q)$, not $R(q)$ alone.

**Answer key.** A = True, B = True, C = True, D = False, E = True

**Explanations**

- **A.** True

  Compute revenue:

  $$
  R(q)=(100-2q)q=100q-2q^{2}.
  $$

  Then

  $$
  \pi(q)=R(q)-C(q)=(100q-2q^{2})-(20q+q^{2})=80q-3q^{2}.
  $$

- **B.** True

  Differentiate:

  $$
  \pi'(q)=80-6q.
  $$

  First-order condition:

  $$
  80-6q=0 \Rightarrow q=\frac{80}{6}=\frac{40}{3}.
  $$

- **C.** True

  Second derivative:

  $$
  \pi''(q)=-6<0,
  $$

  so the point where $\pi'(q)=0$ is a local maximum.

- **D.** False

  Since $\pi''(q)<0$, the function is concave, so its maximum on $[0,30]$ is at the interior critical point $q=40/3$, not at $30$.

  (For a quick check: $\pi(30)=80\cdot 30-3\cdot 30^{2}=-300$.)

- **E.** True

  Profit is defined as $\pi=R-C$. Differentiating $R$ alone would ignore the effect of costs, so it would not correctly locate the profit optimum.

---

### Case 14 — Elasticity and maximizing profit with a power demand curve

**Context.** A ticket seller charges a price $p$ euros, where $p\in[4,50]$.
Demand follows a power rule:

$$
q(p)=60p^{-3/2}.
$$

Revenue is $R(p)=p\,q(p)$. The daily running cost is a fixed $120$ euros, so profit is

$$
\Pi(p)=R(p)-120.
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** The point elasticity of demand equals $\dfrac{3}{2}$ for every $p>0$.
- **B.** Revenue is $R(p)=60p^{-1/2}$.
- **C.** $\Pi'(p)=-30p^{-3/2}$, so $\Pi$ is strictly decreasing for every $p>0$.
- **D.** With $p\in[4,50]$, profit is maximized at $p=4$.
- **E.** Because elasticity is larger than $1$, profit is maximized at a larger price inside $[4,50]$.

**Answer key.** A = True, B = True, C = True, D = True, E = False

**Explanations**

- **A.** True

  For a power demand $q(p)=A p^{b}$, the point elasticity is the constant $-b$.

  Here $b=-\frac{3}{2}$, so

  $$
  \varepsilon=-\left(-\frac{3}{2}\right)=\frac{3}{2}.
  $$

- **B.** True

  Multiply $p$ by the demand:

  $$
  R(p)=p\,q(p)=p\cdot 60p^{-3/2}=60p^{1-3/2}=60p^{-1/2}.
  $$

- **C.** True

  Since $\Pi(p)=60p^{-1/2}-120$,

  $$
  \Pi'(p)=60\left(-\frac{1}{2}\right)p^{-3/2}=-30p^{-3/2}<0
  $$

  for every $p>0$.

- **D.** True

  Because $\Pi'(p)<0$, profit decreases as price increases.

  So on the allowed interval $[4,50]$ the maximum occurs at the smallest allowed price, $p=4$.

- **E.** False

  Elasticity $3/2>1$ corresponds here to a revenue/profit that falls when $p$ increases.

  Since $\Pi$ is strictly decreasing, the best price is the smallest one, not a larger one.

---

## 2. Economic interpretation of the derivative

### Case 5 — Average cost and the equality with marginal cost

**Context.** A manufacturer has cost function

$$
C(Q)=Q^{2}+16Q+64
$$

for output $Q>0$. The average cost is

$$
A(Q)=\frac{C(Q)}{Q}=Q+16+\frac{64}{Q}
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $A'(Q)=1-\dfrac{64}{Q^{2}}$.
- **B.** The average cost is minimized at $Q=8$.
- **C.** The minimum average cost is $24$.
- **D.** At the output where average cost is minimized, marginal cost equals average cost.
- **E.** For all $Q>8$, average cost is decreasing.

**Answer key.** A = True, B = True, C = False, D = True, E = False

**Explanations**

- **A.** True

  Differentiate term by term:

  $$
  A(Q)=Q+16+64Q^{-1}
  $$

  so

  $$
  A'(Q)=1-64Q^{-2}=1-\frac{64}{Q^{2}}
  $$

- **B.** True

  Set the derivative equal to zero:

  $$
  1-\frac{64}{Q^{2}}=0
  $$

  Hence

  $$
  Q^{2}=64
  $$

  and because $Q>0$,

  $$
  Q=8
  $$

  Also, $A'(Q)<0$ for $0<Q<8$ and $A'(Q)>0$ for $Q>8$, so this is a minimum.

- **C.** False

  Evaluate the average cost at $Q=8$:

  $$
  A(8)=8+16+\frac{64}{8}=8+16+8=32
  $$

  The minimum average cost is $32$, not $24$.

- **D.** True

  Marginal cost is

  $$
  C'(Q)=2Q+16
  $$

  so at $Q=8$,

  $$
  C'(8)=16+16=32
  $$

  From part C,

  $$
  A(8)=32
  $$

  Thus marginal cost equals average cost at the minimizing output.

- **E.** False

  Once $Q>8$, part B showed that

  $$
  A'(Q)>0
  $$

  so average cost is increasing, not decreasing.

---

### Case 9 — Marginal revenue, marginal cost, and marginal profit

**Context.** A firm produces $q$ units (for $q>0$). Total revenue is

$$
R(q)=50q-q^{2},
$$

and total cost is

$$
C(q)=10q+\frac{1}{2}q^{2}.
$$

Profit is $\pi(q)=R(q)-C(q)$. Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $R'(q)=50-2q$.
- **B.** $C'(q)=10+q$.
- **C.** $\pi'(q)=R'(q)-C'(q)=40-3q$.
- **D.** At $q=10$, marginal profit $\pi'(10)$ equals $0$ euros per unit.
- **E.** If $R'(q)>C'(q)$ at some $q$, then profit increases when $q$ increases by a small amount.

**Answer key.** A = True, B = True, C = True, D = False, E = True

**Explanations**

- **A.** True

  Differentiate:

  $$
  R'(q)=(50q-q^{2})'=50-2q.
  $$

- **B.** True

  Differentiate:

  $$
  C'(q)=\left(10q+\frac{1}{2}q^{2}\right)'=10+q.
  $$

- **C.** True

  Since $\pi=R-C$,

  $$
  \pi'(q)=R'(q)-C'(q)=(50-2q)-(10+q)=40-3q.
  $$

- **D.** False

  Evaluate at $q=10$:

  $$
  \pi'(10)=40-3\cdot 10=10,
  $$

  not $0$.

- **E.** True

  Profit changes according to

  $$
  \pi'(q)=R'(q)-C'(q).
  $$

  If $R'(q)>C'(q)$, then $\pi'(q)>0$, so increasing $q$ slightly increases profit.

---

### Case 10 — Marginal utility and interpreting the sign

**Context.** A student’s satisfaction after $x$ hours of study is

$$
U(x)=-x^{2}+6x+10
$$

for $x\ge 0$. Evaluate each statement. Mark it TRUE or FALSE.

- **A.** Marginal utility is $U'(x)=-2x+6$.
- **B.** $U'(3)=0$.
- **C.** At $x=4$, increasing $x$ slightly increases satisfaction.
- **D.** If $U'(x)>0$ at some $x$, then increasing $x$ slightly increases satisfaction at that $x$.
- **E.** Average satisfaction $U(x)/x$ is maximized at the same $x$ where marginal utility is $0$.

**Answer key.** A = True, B = True, C = False, D = True, E = False

**Explanations**

- **A.** True

  Differentiate:

  $$
  U'(x)=(-x^{2}+6x+10)'=-2x+6.
  $$

- **B.** True

  Substitute $x=3$:

  $$
  U'(3)=-2\cdot 3+6=0.
  $$

- **C.** False

  Compute the marginal utility at $x=4$:

  $$
  U'(4)=-2\cdot 4+6=-2<0.
  $$

  So a small increase in $x$ would decrease $U$ at $x=4$.

- **D.** True

  The sign of $U'(x)$ tells whether $U$ increases or decreases for small changes in $x$.

  If $U'(x)>0$, then increasing $x$ slightly increases satisfaction at that point.

- **E.** False

  The condition $U'(x)=0$ identifies where the total (not the average) satisfaction stops increasing.

  The average $U(x)/x$ has a different derivative, so its maximum need not occur at the same $x$.

---

## 4. Applied optimization (profit/cost/area/elasticity) (continued)

### Case 6 — Present value and the optimal harvest time

**Context.** A timber owner models the standalone value of a stand by

$$
P(t)=3000(t+4)^{2}
$$

for $t\geq 0$ years from now. With continuous discounting at rate

$$
r=0.09
$$

the present value of harvesting at time $t$ is

$$
V(t)=3000(t+4)^{2}e^{-0.09t}
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** 
  $$
  V'(t)=3000e^{-0.09t}(t+4)\bigl(2-0.09(t+4)\bigr)
  $$
- **B.** The only critical point with $t\geq 0$ is approximately $t=18.22$.
- **C.** At the optimum, the condition $P'(t)=0.09P(t)$ holds.
- **D.** The present value is increasing for every $t\geq 0$.
- **E.** The optimal harvest time is less than $10$ years.

**Answer key.** A = True, B = True, C = True, D = False, E = False

**Explanations**

- **A.** True

  Differentiate with the product rule:

  $$
  V(t)=3000(t+4)^{2}e^{-0.09t}
  $$

  so

  $$
  V'(t)=3000\left[2(t+4)e^{-0.09t}+(t+4)^{2}(-0.09)e^{-0.09t}\right]
  $$

  Factor out the common terms:

  $$
  V'(t)=3000e^{-0.09t}(t+4)\bigl(2-0.09(t+4)\bigr)
  $$

- **B.** True

  Since $3000>0$, $e^{-0.09t}>0$, and $t+4>0$ for all $t\geq 0$, the critical points come from

  $$
  2-0.09(t+4)=0
  $$

  Hence

  $$
  0.09(t+4)=2
  $$

  $$
  t+4=\frac{2}{0.09}=22.222\ldots
  $$

  $$
  t\approx 18.22
  $$

  The factor $t+4=0$ would give $t=-4$, which is outside the feasible range.

- **C.** True

  The critical-point condition from part B is

  $$
  2-0.09(t+4)=0
  $$

  Rearranging,

  $$
  2(t+4)=0.09(t+4)^{2}
  $$

  Multiply by $3000$:

  $$
  6000(t+4)=0.09\cdot 3000(t+4)^{2}
  $$

  Since

  $$
  P'(t)=6000(t+4)
  P(t)=3000(t+4)^{2}
  $$

  this becomes

  $$
  P'(t)=0.09P(t)
  $$

- **D.** False

  From the factorization in part A, the sign of $V'(t)$ depends on

  $$
  2-0.09(t+4)
  $$

  This is positive for small $t$, zero at about $18.22$, and negative after that. So $V$ first increases and then decreases. It is not increasing for every $t\geq 0$.

- **E.** False

  The optimal time from part B is

  $$
  t\approx 18.22
  $$

  which is clearly greater than $10$ years.

---

## 5. Interpreting graphs without algebra

### Case 15 — Increasing/decreasing from the sign of $f'$

**Context.** A differentiable function $f$ has a derivative with the following sign:

- $f'(x)>0$ for $x<-1$
- $f'(-1)=0$
- $f'(x)<0$ for $-1<x<2$
- $f'(2)=0$
- $f'(x)>0$ for $x>2$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $f$ has a local maximum at $x=-1$.
- **B.** $f$ has a local minimum at $x=2$.
- **C.** $f$ is increasing on $(3,4)$.
- **D.** $f$ has an absolute maximum on all real $x$ at $x=-1$.
- **E.** $f'(0)<0$.

**Answer key.** A = True, B = True, C = True, D = False, E = True

**Explanations**

- **A.** True

  As $x$ crosses $-1$, the derivative changes from positive (left side) to negative (right side), so $f$ turns from rising to falling.

  That is a local maximum at $x=-1$.

- **B.** True

  At $x=2$, the derivative changes from negative (left side) to positive (right side), so $f$ turns from falling to rising.

  That is a local minimum at $x=2$.

- **C.** True

  The interval $(3,4)$ lies in $x>2$, where $f'(x)>0$, so $f$ is increasing there.

- **D.** False

  Whether $x=-1$ is an absolute maximum depends on the actual values of $f(x)$ for all $x$.

  From the derivative sign alone, you can only conclude local behavior.

- **E.** True

  The point $x=0$ lies in $-1<x<2$, where $f'(x)<0$.

---

### Case 16 — Global maximum from “up then down” behavior on an interval

**Context.** On the interval $[0,4]$, a differentiable function $f$ satisfies:

- $f'(x)>0$ for $0<x<1$
- $f'(1)=0$
- $f'(x)<0$ for $1<x<4$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $f$ is increasing on $(0,1)$.
- **B.** $f$ is decreasing on $(1,4)$.
- **C.** $f$ achieves its global maximum on $[0,4]$ at $x=1$.
- **D.** $f$ has a local minimum at $x=1$.
- **E.** $x=1$ is definitely an inflection point.

**Answer key.** A = True, B = True, C = True, D = False, E = False

**Explanations**

- **A.** True

  On $(0,1)$ we are told $f'(x)>0$, so $f$ increases as $x$ increases.

- **B.** True

  On $(1,4)$ we are told $f'(x)<0$, so $f$ decreases as $x$ increases.

- **C.** True

  Since $f$ increases up to $x=1$ and then decreases after $x=1$, the turning point at $x=1$ is larger than all other values attained inside the interval.

  Therefore it is the global maximum on $[0,4]$.

- **D.** False

  A local minimum would require the derivative to change from negative to positive at $x=1$.

  Here it changes from positive to negative, so $x=1$ is not a local minimum.

- **E.** False

  Inflection points depend on concavity (the behavior of $f''$), which is not provided by the sign pattern of $f'$ alone.
