# Chapter 2 — Elementary algebra

Elementary algebra is the language of almost every later chapter on the BBE mathematics exam. Before you can talk about equations, inequalities, functions, or optimisation, you must be able to expand, factor, cancel, rewrite powers, and handle absolute values without changing what an expression means.

This chapter starts from the basic identities and builds the exact skills the Chapter 2 True/False tasks test. The exam rarely asks you to plug in numbers. It asks you to decide whether a symbolic identity holds for every allowed value, and whether a simplification keeps the original domain.

## Learning objectives

- Expand products and squares using the distributive law and the standard square identities.
- Factor differences of squares, sums and differences of cubes, and common-factor groupings.
- Add, subtract, multiply, and divide rational expressions, keeping every excluded value in mind.
- Apply the laws of exponents for positive, negative, and fractional powers.
- Rewrite roots as fractional powers and simplify nested roots on the allowed domain.
- Use absolute-value definitions, distance meaning, and equations or inequalities with $|\,{\cdot}\,|$.
- Spot the common false “identities” that look familiar but fail for some real numbers.
- Decide True/False exam claims by rewriting both sides and checking domains, not by guessing from a slogan.

---

## 2.1 Expanding, factoring, and identities

### What an identity is

An **identity** is an equality that holds for every value in the stated domain. On the exam, a claim such as

$$
(a+b)^2 = a^2 + 2ab + b^2
$$

is True because both sides match for every real pair $(a,b)$. A claim such as

$$
(a+b)^2 = a^2 + b^2
$$

is False because it already fails when $a=1$ and $b=1$.

The exam loves statements that look almost right. Your job is to expand or factor carefully and see whether the two sides are the same polynomial (or the same expression on the given domain).

### The distributive law

For any real numbers $a$, $b$, and $c$,

$$
a(b+c) = ab + ac.
$$

With two brackets,

$$
(a+b)(c+d) = ac + ad + bc + bd.
$$

A useful special case is the “sum times difference” pattern:

$$
(a+b)(c+d) + (a+b)(e+f) = (a+b)\bigl((c+d)+(e+f)\bigr),
$$

but the cleaner everyday grouping you meet is

$$
uw + uz + vw + vz = (u+v)(w+z).
$$

**Example 1.** Expand $(x+3)(x-5)$.

$$
(x+3)(x-5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15.
$$

### Squares of sums and differences

$$
(a+b)^2 = a^2 + 2ab + b^2,
$$

$$
(a-b)^2 = a^2 - 2ab + b^2.
$$

The middle term $2ab$ (or $-2ab$) is the one students drop. That is why

$$
(m+n)^2 = m^2 + n^2
$$

is a classic False claim.

Also watch scalar multiples:

$$
(2t)^2 = 4t^2,
$$

not $2t^2$. The square applies to the whole product $2t$.

**Example 2.** Expand $(3x-1)^2$.

$$
(3x-1)^2 = 9x^2 - 6x + 1.
$$

### Difference of squares

$$
a^2 - b^2 = (a-b)(a+b).
$$

This is one of the most useful factoring tools on the exam. It also explains why, for $a\neq b$,

$$
\frac{a^2-b^2}{a-b} = a+b
$$

is True: you cancel the common factor $a-b$, and the remaining domain still excludes $a=b$.

### Cubes

$$
a^3 - b^3 = (a-b)(a^2 + ab + b^2),
$$

$$
a^3 + b^3 = (a+b)(a^2 - ab + b^2).
$$

A related identity with sum and product is

$$
p^3 + q^3 = (p+q)^3 - 3pq(p+q).
$$

If $p+q=s$ and $pq=r$, then

$$
p^3 + q^3 = s^3 - 3rs.
$$

Exam traps often replace $3rs$ by $3r$ or $3s$. Check the formula letter by letter.

### Completing a square and recognising a square

Sometimes an expression is already a square in disguise:

$$
x^4 + 2x^2 y^2 + y^4 = (x^2 + y^2)^2.
$$

Likewise,

$$
w^2 - 8w + 16 = (w-4)^2.
$$

Recognising the square first makes the later absolute-value and root steps much easier.

### Factoring by grouping

If four terms share factors in pairs, group them:

$$
x^3 + 3x^2 - x - 3 = x^2(x+3) - 1(x+3) = (x^2-1)(x+3) = (x-1)(x+1)(x+3).
$$

Always check that the common binomial really is common before you factor it out.

### How to judge a 2.1 True/False claim

1. Write down the claimed equality.
2. Expand the more complicated side, or factor both sides into the same shape.
3. Compare coefficients (or compare after bringing everything to one side).
4. If the claim says “for every real …”, one counter-example is enough to make it False.
5. If it is an identity, show the algebra that proves both sides match.

**Example 3.** Is $(h+k)^2 = h^2 + k^2$ True for every real pair $(h,k)$?

No. Take $h=1$, $k=1$. Left side $4$, right side $2$. The claim is False.

---

## 2.2 Rational expressions and algebraic fractions

### Domain comes first

A **rational expression** is a quotient of polynomials (or, more generally, an algebraic fraction). It is defined only where the denominator is not zero.

Before you simplify anything, list the excluded values. After you cancel, those exclusions still belong to the original expression.

**Example 4.** Consider

$$
R(x) = \frac{x^2-16}{x-4}.
$$

The original domain excludes $x=4$. On that domain,

$$
R(x) = \frac{(x-4)(x+4)}{x-4} = x+4.
$$

So the claim “$R(x)=x+4$ on its domain” is True, while “$R(4)=8$” is False, because $R(4)$ is not defined.

### Adding and subtracting fractions

With nonzero denominators $a$ and $b$,

$$
\frac{1}{a} + \frac{1}{b} = \frac{a+b}{ab}.
$$

More generally,

$$
\frac{p}{q} + \frac{r}{s} = \frac{ps + qr}{qs},
$$

when $q,s\neq 0$.

A frequent False claim is

$$
\frac{1}{m} + \frac{1}{n} = \frac{1}{m+n}.
$$

That would say the sum of reciprocals equals the reciprocal of the sum, which is wrong.

Another trap is using the wrong common denominator:

$$
\frac{8}{c} + \frac{3}{d} = \frac{8d + 3c}{cd},
$$

not $\dfrac{8d+3c}{c+d}$.

### Multiplying and dividing

$$
\frac{A}{B} \cdot \frac{C}{D} = \frac{AC}{BD},
$$

$$
\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C} = \frac{AD}{BC},
$$

provided every denominator is nonzero.

Factor first, then cancel common factors. Do not cancel terms across a plus sign.

### Partial cancellation and leftover factors

After cancelling, check what remains.

**Example 5.** For $t\neq -3$ and $t\neq 2$,

$$
\frac{t^2-4}{t+3} \cdot \frac{t^2-9}{t-2}
= \frac{(t-2)(t+2)}{t+3} \cdot \frac{(t-3)(t+3)}{t-2}
= (t+2)(t-3).
$$

A False sibling claim might keep an extra $(t+3)$ or drop a sign in $(t-3)$.

### Compound (stacked) fractions

A stacked fraction

$$
\frac{\dfrac{A}{B}}{\dfrac{C}{D}}
$$

means $\dfrac{A}{B}\div\dfrac{C}{D}$. Rewrite it as a product before simplifying.

**Example 6.** For $x\neq\pm 2$ and $a,b\neq 0$,

$$
\frac{\dfrac{8a^2 b}{4x^2-16}}{\dfrac{4ab}{2x+4}}
= \frac{8a^2 b}{4(x-2)(x+2)} \cdot \frac{2(x+2)}{4ab}
= \frac{a}{x-2},
$$

after careful cancellation. A claim that the result is $\dfrac{a}{x+2}$ is False.

### Difference of reciprocal squares

For $hk\neq 0$,

$$
\frac{1}{h^2} - \frac{1}{k^2} = \frac{k^2 - h^2}{h^2 k^2}.
$$

### How to judge a 2.2 claim

1. Write the domain exclusions from every denominator.
2. Factor numerators and denominators.
3. Cancel only common factors, never summands.
4. Compare the simplified form with the claimed form.
5. Ask whether the claimed equality still respects the original domain (especially at cancelled roots).

---

## 2.3 Powers, roots, and negative exponents

### Integer exponent laws

For a nonzero base $a$ and integers $m$, $n$,

$$
a^m \cdot a^n = a^{m+n},
$$

$$
\frac{a^m}{a^n} = a^{m-n},
$$

$$
(a^m)^n = a^{mn}.
$$

The most common slip is adding instead of multiplying for a power of a power:

$$
(u^3)^4 = u^{12},
$$

not $u^7$.

Another slip is mishandling a quotient of powers:

$$
\frac{t^4}{t^2} = t^2,
$$

not $t^3$.

### Negative exponents

For $a\neq 0$,

$$
a^{-n} = \frac{1}{a^n}.
$$

Products and quotients still use the same laws:

$$
\frac{u^{-2}}{u^3} = u^{-2-3} = u^{-5} = \frac{1}{u^5}.
$$

A False claim might say this equals $u^{1}$.

### Fractional powers and roots

For $x>0$ (and carefully on broader domains when the root is odd),

$$
x^{1/2} = \sqrt{x}, \qquad x^{m/n} = \sqrt[n]{x^m} = \bigl(\sqrt[n]{x}\bigr)^m
$$

when the expressions are defined.

Useful product and quotient rules on nonnegative $p$, $q$ are

$$
\sqrt{p}\cdot\sqrt{q} = \sqrt{pq},
$$

$$
\frac{\sqrt{p}}{\sqrt{q}} = \sqrt{\frac{p}{q}} \quad (q>0).
$$

The False sibling

$$
\sqrt{p}\cdot\sqrt{q} = \sqrt{p+q}
$$

is very common on the exam.

### Nested roots

$$
\sqrt{\sqrt{u}} = (u^{1/2})^{1/2} = u^{1/4}
$$

for $u\ge 0$. It is not $\dfrac{u^{1/2}}{2}$.

Also,

$$
\sqrt{x^3} = x^{3/2}
$$

for $x>0$.

### Combining fractional exponents

$$
u^{2/3} \cdot u^{1/3} = u^{1}
$$

for $u>0$. Add the exponents only when the bases match.

### How to judge a 2.3 claim

1. Check the stated domain (often $x>0$, or $u\neq 0$).
2. Rewrite roots as fractional powers if that clarifies the algebra.
3. Apply one law at a time: product, quotient, or power of a power.
4. Compare the resulting single power (or root) with the claim.
5. Reject any slogan that mixes addition of bases with multiplication of roots.

**Example 7.** Is $\sqrt{p}\cdot\sqrt{q}=\sqrt{p+q}$ True for all $p,q\ge 0$?

No. Take $p=q=1$. Left side $1$, right side $\sqrt{2}$. False.

---

## 2.4 Absolute value and algebraic rewriting

### Definition

For a real number $x$,

$$
|x| =
\begin{cases}
x, & \text{if } x\ge 0,\\
-x, & \text{if } x<0.
\end{cases}
$$

Immediate consequences:

$$
|x| \ge 0 \quad \text{for every real } x,
$$

$$
|x|=0 \iff x=0,
$$

$$
|-x| = |x|.
$$

The claim “$|x|=-x$ for every real $x$” is False, because it fails for positive $x$.

### Distance on the line

The number $|a-b|$ is the distance between $a$ and $b$ on the real line.

If a point $x$ lies between $1$ and $6$ inclusive, then

$$
|x-1| + |x-6| = 5,
$$

the length of that segment. Outside the segment the sum is larger. So a claim that $|a-1|+|a-7|=6$ for every real $a$ is False.

### Product and scalar rules

$$
|xy| = |x|\,|y|,
$$

$$
|cx| = |c|\,|x|.
$$

False slogans to reject:

$$
|z+h| = |z| + |h|
$$

(this is not an identity; it fails when $z$ and $h$ have opposite signs),

$$
|4n| = |n| + 4.
$$

### Square roots of squares

For every real $w$,

$$
\sqrt{w^2} = |w|.
$$

After completing a square,

$$
\sqrt{(w-4)^2} = |w-4|.
$$

Dropping the absolute value and writing $w-4$ for every real $w$ is wrong.

### Absolute-value equations

The equation $|A|=c$ with $c>0$ splits into two ordinary equations:

$$
A = c \quad \text{or} \quad A = -c.
$$

If $c=0$, then $A=0$. If $c<0$, there is no real solution.

**Example 8.** Solve $|2u-5|=7$.

$$
2u-5 = 7 \quad \text{or} \quad 2u-5 = -7,
$$

so $u=6$ or $u=-1$. A claim that lists only $u=6$ is False.

### Absolute-value inequalities

For $c>0$,

$$
|A| < c \iff -c < A < c,
$$

$$
|A| > c \iff A < -c \text{ or } A > c.
$$

**Example 9.** $|u-3|<5$ means $-2 < u < 8$.

### How to judge a 2.4 claim

1. Translate absolute values into distances or into piecewise definitions.
2. For equations, split into the two signed cases when the right-hand side is positive.
3. For inequalities, rewrite as a compound inequality or a union of rays.
4. Test slogans such as $|x+y|=|x|+|y|$ with opposite signs.
5. After $\sqrt{(\text{expression})^2}$, keep the absolute value unless the inside is known nonnegative.

---

## 2.5 Mixed exam sets and BBE-style True/False strategy

Subsection 2.5 mixes the earlier skills in one task. A stem may give sum and product of two unknowns, or two related rational expressions, and then ask five independent claims.

### Working from symmetric data

If you know $a+b=s$ and $ab=r$, you often do not need the separate values at once:

$$
a^2 + b^2 = (a+b)^2 - 2ab = s^2 - 2r,
$$

$$
(a-b)^2 = (a+b)^2 - 4ab = s^2 - 4r,
$$

$$
a^3 + b^3 = s^3 - 3rs,
$$

$$
\frac{1}{a} + \frac{1}{b} = \frac{a+b}{ab} = \frac{s}{r}.
$$

**Example 10.** Suppose $a+b=11$ and $ab=18$.

Then

$$
a^2 + b^2 = 121 - 36 = 85,
$$

$$
(a-b)^2 = 121 - 72 = 49,
$$

$$
\frac{1}{a} + \frac{1}{b} = \frac{11}{18}.
$$

The claim $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{18}{11}$ is False (numerator and denominator swapped). Solving the quadratic $t^2 - 11t + 18=0$ gives $\{a,b\}=\{2,9\}$.

### Keeping domains after simplification

Whenever a task simplifies a rational expression, ask:

- Which values were excluded at the start?
- Did cancellation remove a factor that still forbids substitution?
- Can a later claim evaluate the expression at a cancelled root?

If the simplified formula is $x+4$ but the original expression excluded $x=4$, then substituting $x=4$ is illegal.

### Independent claims

On the BBE algebra tasks, the five statements A–E are separate. One True claim does not make the next one True. Judge each line on its own algebra and its own domain sentence.

### Worked True/False walkthroughs

**Example 11.** Stem: let $x$ and $y$ be real. Claim: $(x+y)^2 = x^2 + y^2$.

Expand the left side:

$$
(x+y)^2 = x^2 + 2xy + y^2.
$$

This equals $x^2+y^2$ only when $2xy=0$. It fails for $x=y=1$. Verdict: **False**.

**Example 12.** Stem: $x\neq 4$. Claim: $\dfrac{x^2-16}{x-4} = x+4$, and also the extra claim $R(4)=8$ for $R(x)=\dfrac{x^2-16}{x-4}$.

Factor and cancel on the stated domain:

$$
\frac{(x-4)(x+4)}{x-4} = x+4 \quad (x\neq 4).
$$

The identity on the domain is **True**. The evaluation at $x=4$ is **False**, because $R(4)$ is undefined.

**Example 13.** Stem: $u\neq 0$. Claim: $(u^3)^4 = u^7$.

Power of a power multiplies exponents:

$$
(u^3)^4 = u^{12}.
$$

So $u^7$ is wrong. Verdict: **False**.

**Example 14.** Stem: every real $w$. Claim: $\sqrt{(w-4)^2} = w-4$.

The identity is

$$
\sqrt{(w-4)^2} = |w-4|.
$$

When $w=1$, left side $3$, right side $-3$. Verdict: **False**.

**Example 15.** Stem: $a+b=11$, $ab=18$. Claim: $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{18}{11}$.

$$
\frac{1}{a}+\frac{1}{b} = \frac{a+b}{ab} = \frac{11}{18}.
$$

The claimed fraction is upside down. Verdict: **False**.

### A reliable exam order

1. Read the domain sentence in the stem (“nonzero”, “positive”, “$x\neq 4$”, and so on).
2. Rewrite each claim into a clear equality or inequality.
3. Expand, factor, or apply the matching power / absolute-value rule.
4. Compare both sides, or test a cheap counter-example if the claim looks like a slogan.
5. Only then mark True or False.

### Frequent False slogans (checklist)

In the tables below, absolute values are written with `\lvert … \rvert` so the `|` character cannot break the table columns.

| Slogan | Why it fails |
| --- | --- |
| $(a+b)^2 = a^2 + b^2$ | Missing $2ab$. |
| $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{1}{a+b}$ | Wrong common denominator. |
| $(a^m)^n = a^{m+n}$ | Should be $a^{mn}$. |
| $\sqrt{p}+\sqrt{q}=\sqrt{p+q}$ or $\sqrt{p}\sqrt{q}=\sqrt{p+q}$ | Roots do not add that way. |
| $\lvert x+y\rvert=\lvert x\rvert+\lvert y\rvert$ always | Fails for opposite signs. |
| Cancelled hole may be substituted | Domain of the original expression remains. |
| $\sqrt{w^2}=w$ for every real $w$ | Should be $\lvert w\rvert$. |

---

## 2.6 Exam-style tasks with full solutions

The Chapter 2 bank uses five independent True/False claims. Work each claim alone. Below are four short exam-style tasks with every verdict explained.

### Exam task 1 — Expanding and identities

Let $a$ and $b$ be real numbers. Which of the following statements is/are correct?

**A.** $(a+b)^2 = a^2 + 2ab + b^2$ for every real pair $(a,b)$.

**B.** $(a-b)^2 = a^2 - b^2$ for every real pair $(a,b)$.

**C.** $a^2 - b^2 = (a-b)(a+b)$ for every real pair $(a,b)$.

**D.** $(2a)^2 = 2a^2$ for every real $a$.

**E.** $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ for every real pair $(a,b)$.

**Solution.**

- **A True.** This is the square-of-a-sum identity. Expand: $(a+b)^2 = a^2 + 2ab + b^2$.
- **B False.** Expand correctly: $(a-b)^2 = a^2 - 2ab + b^2$. The claim drops $-2ab$ and also confuses the square with a difference of squares. Counter-example: $a=2$, $b=1$ gives left side $1$ and right side $3$.
- **C True.** Difference of squares.
- **D False.** $(2a)^2 = 4a^2$, not $2a^2$. Counter-example: $a=1$ gives $4$ versus $2$.
- **E True.** Difference-of-cubes factorisation.

**Answers:** A True, B False, C True, D False, E True.

### Exam task 2 — Rational expressions and domain

Let $x$ be a real number with $x\neq 4$. Define

$$
R(x) = \frac{x^2 - 16}{x - 4}.
$$

Which of the following statements is/are correct?

**A.** $R(x) = x + 4$ for every $x\neq 4$.

**B.** $R(4) = 8$.

**C.** For $x\neq 0$ and $x\neq -1$, $\dfrac{1}{x} + \dfrac{1}{x+1} = \dfrac{2x+1}{x(x+1)}$.

**D.** For $m,n\neq 0$, $\dfrac{1}{m} + \dfrac{1}{n} = \dfrac{1}{m+n}$.

**E.** For $t\neq 2$, $\dfrac{t^2 - 4}{t - 2} = t + 2$.

**Solution.**

- **A True.** Factor $x^2-16=(x-4)(x+4)$ and cancel $x-4$ on the stated domain.
- **B False.** $x=4$ is excluded from the domain of $R$, so $R(4)$ is undefined. You may not plug the cancelled hole back into the simplified formula.
- **C True.** Common denominator $x(x+1)$ gives $\dfrac{x+1+x}{x(x+1)} = \dfrac{2x+1}{x(x+1)}$.
- **D False.** The correct sum is $\dfrac{m+n}{mn}$. Counter-example: $m=n=1$ gives left side $2$ and right side $\tfrac12$.
- **E True.** Same cancellation pattern as A, now with $t^2-4=(t-2)(t+2)$.

**Answers:** A True, B False, C True, D False, E True.

### Exam task 3 — Powers and roots

Let $u>0$. Which of the following statements is/are correct?

**A.** $(u^3)^4 = u^{12}$.

**B.** $(u^3)^4 = u^{7}$.

**C.** $\sqrt{u}\cdot\sqrt{u} = u$.

**D.** $\sqrt{u}\cdot\sqrt{u} = \sqrt{2u}$.

**E.** $\dfrac{u^{-2}}{u^{3}} = u^{-5}$.

**Solution.**

- **A True.** Power of a power multiplies exponents: $3\cdot 4=12$.
- **B False.** Adding exponents would give $7$, but that law is for a product $u^3\cdot u^4$, not for $(u^3)^4$.
- **C True.** $\sqrt{u}\cdot\sqrt{u} = u^{1/2}\cdot u^{1/2} = u^{1} = u$ for $u>0$.
- **D False.** $\sqrt{2u}$ is a different expression. For $u=1$, left side $1$ and right side $\sqrt{2}$.
- **E True.** Quotient of powers subtracts exponents: $-2-3=-5$.

**Answers:** A True, B False, C True, D False, E True.

### Exam task 4 — Absolute value and symmetric data

Let $x$ be real, and let $a$, $b$ be nonzero reals with $a+b=11$ and $ab=18$. Which of the following statements is/are correct?

**A.** $\lvert 2x-5\rvert = 7$ if and only if $x=6$ or $x=-1$.

**B.** $\lvert 2x-5\rvert = 7$ if and only if $x=6$.

**C.** $\lvert x+3\rvert = \lvert x\rvert + 3$ for every real $x$.

**D.** $a^2 + b^2 = 85$.

**E.** $\dfrac{1}{a} + \dfrac{1}{b} = \dfrac{18}{11}$.

**Solution.**

- **A True.** Split $\lvert 2x-5\rvert=7$ into $2x-5=7$ or $2x-5=-7$, so $x=6$ or $x=-1$.
- **B False.** It misses the second root $x=-1$.
- **C False.** The identity $\lvert x+3\rvert=\lvert x\rvert+3$ fails when $x$ is negative enough. For $x=-4$, left side $1$ and right side $7$.
- **D True.** $a^2+b^2=(a+b)^2-2ab=121-36=85$.
- **E False.** $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab}=\dfrac{11}{18}$. The claimed fraction is upside down.

**Answers:** A True, B False, C False, D True, E False.

### How to mark a full task quickly

1. Read the domain line once and keep it in mind for every claim.
2. For each claim, rewrite or expand before you decide.
3. If a claim looks like a familiar slogan, test one cheap number.
4. Mark the five verdicts independently. Do not let one True answer “pull” the next claim along.

---

## 2.7 Summary reference

Use `\lvert … \rvert` in table cells (not raw `|`) so markdown does not split the row.

| Task | Method |
| --- | --- |
| Expand a product | Use distributivity; keep every cross term. |
| Expand a square | Use $a^2\pm 2ab + b^2$. |
| Factor $a^2-b^2$ | Write $(a-b)(a+b)$. |
| Factor cubes | Use $a^3\pm b^3$ formulas. |
| Add rational expressions | Common denominator = product of denominators (after factoring). |
| Simplify a quotient | Factor, cancel common factors, keep exclusions. |
| Power of a power | Multiply exponents. |
| Product of powers | Add exponents. |
| Nested square root | Use $u^{1/4}$, not half of $\sqrt{u}$. |
| Absolute value equation $\lvert A\rvert=c>0$ | Solve $A=c$ and $A=-c$. |
| Absolute value inequality $\lvert A\rvert<c$ | Rewrite $-c<A<c$. |
| Symmetric $a+b$, $ab$ data | Use $a^2+b^2$, $a^3+b^3$, and reciprocal-sum identities. |

### Key formulas

$$
(a\pm b)^2 = a^2 \pm 2ab + b^2,
$$

$$
a^2 - b^2 = (a-b)(a+b),
$$

$$
a^3 - b^3 = (a-b)(a^2+ab+b^2),
$$

$$
\frac{1}{a}+\frac{1}{b}=\frac{a+b}{ab},
$$

$$
a^m a^n = a^{m+n},\quad (a^m)^n=a^{mn},\quad a^{-n}=\frac{1}{a^n},
$$

$$
\sqrt{w^2}=\lvert w\rvert,\quad \lvert xy\rvert=\lvert x\rvert\,\lvert y\rvert.
$$

### Working order on an exam statement

1. Domain.
2. Rewrite.
3. Identity check or counter-example.
4. Verdict.

### Self-check

- Can you expand $(2x-3)^2$ without dropping the middle term?
- Why is $\dfrac{x^2-16}{x-4}=x+4$ True on its domain but $R(4)=8$ False?
- What is $(u^3)^4$, and why is $u^7$ wrong?
- Why does $\sqrt{(x-1)^2}$ equal $\lvert x-1\rvert$ rather than $x-1$?
- If $a+b=11$ and $ab=18$, what is $\dfrac{1}{a}+\dfrac{1}{b}$?
