# BBE-style differentiation and optimization question draft

This draft is based on the uploaded textbook chapters on differentiation, concavity/convexity, single-variable optimization, and finance-linked applications. Each case has one short stem and five independent TRUE/FALSE statements.

## Case 1 — Tangent line from the derivative

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

## Case 2 — Product rule, chain-style reasoning, and a local maximum

**Context.** A marketing team models a demand-sensitivity index by

$$
S(x)=x^{2}e^{-x}, \qquad x>0
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
  S'(x)<0 \qquad \text{for } x>2
  $$

  So the function is decreasing, not increasing.

- **E.** True

  The derivative changes sign from positive to negative:

  - if $0<x<2$, then $2-x>0$, so $S'(x)>0$
  - if $x>2$, then $2-x<0$, so $S'(x)<0$

  Therefore $S$ rises up to $x=2$ and falls after it, so $x=2$ is a local maximum.

---

## Case 3 — Concavity, inflection points, and classifying stationary points

**Context.** A firm studies the score function

$$
f(x)=\frac{1}{9}x^{3}-\frac{1}{6}x^{2}-\frac{2}{3}x+1
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** $f''\!\left(\frac{1}{2}\right)=0$.
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
  f''\!\left(\frac{1}{2}\right)=0
  $$

- **B.** True

  A function is concave where $f''(x)<0$. Here

  $$
  f''(x)=\frac{2}{3}\left(x-\frac{1}{2}\right)
  $$

  so for every $x<\frac{1}{2}$ we have $f''(x)<0$. Therefore the function is concave on that side.

- **C.** False

  The condition $f''\!\left(\frac{1}{2}\right)=0$ is only a necessary clue for an inflection point, not evidence of a local maximum. In fact, $f''$ changes sign from negative to positive at $x=\frac{1}{2}$, so this point is an inflection point.

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

## Case 4 — Maximizing the volume of an open box

**Context.** A square tin plate has side length $18$ cm. Squares of width $x$ cm are cut from each corner and the sides are folded up to form an open box. For $x\in[0,9]$, the volume is

$$
V(x)=x(18-2x)^{2}=4x^{3}-72x^{2}+324x
$$

Evaluate each statement. Mark it TRUE or FALSE.

- **A.** The feasible domain is $0\leq x\leq 9$.
- **B.** $V'(x)=12(x-3)(x-9)$.
- **C.** The maximum volume is achieved at $x=9$.
- **D.** The maximum volume is achieved at $x=3$.
- **E.** The maximum volume exceeds $500\text{ cm}^{3}$.

**Answer key.** A = True, B = True, C = False, D = True, E = False

**Explanations**

- **A.** True

  The cut size cannot be negative, and each side after folding has length

  $$
  18-2x
  $$

  which must be nonnegative. So

  $$
  x\geq 0, \qquad 18-2x\geq 0
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
  V(3)=432\text{ cm}^{3}
  $$

  Since $432<500$, the statement is false.

---

## Case 5 — Average cost and the equality with marginal cost

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

## Case 6 — Present value and the optimal harvest time

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
  \qquad \text{and} \qquad
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
