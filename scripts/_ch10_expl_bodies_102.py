"""Chapter 10.2 tactical explanation bodies (MATH 10.2.1–10.2.49).

Hand-authored in Chapter 7/9 teacher voice: calm rule sentence,
stepped KaTeX, claim comparison, plain True/False closer.
Length follows the claim — no character floors or ceilings.
A runner merges these into math-ch10-exp-log.json.
"""
from __future__ import annotations

BODIES_102: dict[str, dict] = {
    "MATH 10.2.1": {
        "solution_overview": r"""
The figure is the base-$2$ logarithm $f(x)=\log_{2}x$ on $(0,\infty)$. Every admissible logarithm meets the axis at $(1,0)$, has vertical asymptote $x=0$, and recovers exponents via $\log_{2}(2^{k})=k$. With base $b=2>1$ the graph is strictly increasing, never decreasing.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Every admissible logarithm vanishes at the argument $1$.

$$
\log_{b}1=0
$$

With the concrete base $b=2$ from the figure,

$$
f(1)=\log_{2}1=0
$$

That is exactly the horizontal intercept $(1,0)$ marked on the graph.

So the statement is True.
""",
            r"""
**B.** → False

Monotonicity of $\log_{b}$ is controlled by the size of the base. For every base $b>1$ the map is strictly increasing: if $0<x<y$, then

$$
\log_{b}x<\log_{b}y
$$

Bases in $(0,1)$ reverse the inequality. The blanket claim that every base $b>1$ yields a decreasing logarithm is therefore false.

So the statement is False.
""",
            r"""
**C.** → False

The concrete rule on the figure has base $2>1$, so $f$ is increasing. Compare two sample inputs.

$$
f(1)=\log_{2}1=0,\qquad f(2)=\log_{2}2=1
$$

Since $1<2$ yet $f(1)<f(2)$, the graph rises. A strictly decreasing claim on $(0,\infty)$ fails.

So the statement is False.
""",
            r"""
**D.** → False

A real logarithm needs a strictly positive argument.

$$
u>0
$$

At $u=0$ the expression is undefined, and the graph of $f$ only approaches the asymptote $x=0$ without meeting it. Zero arguments are never admitted.

So the statement is False.
""",
            r"""
**E.** → False

Rewrite the claimed input as a power of the base, then apply $\log_{2}(2^{k})=k$.

$$
\frac12=2^{-1}
$$

$$
f\!\left(\frac12\right)=\log_{2}(2^{-1})=-1
$$

The claim announces the value $1$, but the evaluation returns $-1$.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.2": {
        "solution_overview": r"""
Change of base converts every table row into a single ratio: $\log_{b}a=\ln a/\ln b$. The lettered pairs give $P\mapsto\log_{2}8=3$, $Q\mapsto\log_{3}9=2$, and $R\mapsto\log_{e}(e^{2})=2$. Inverse partners $b^{t}$ and $\log_{b}$ keep complementary domains $\mathbb{R}$ and $(0,\infty)$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Change of base rewrites the claimed logarithm as a ratio of natural logs.

$$
\log_{2}8=\frac{\ln 8}{\ln 2}
$$

Because $8=2^{3}$, the power law collapses the value at once.

$$
\log_{2}(2^{3})=3
$$

The table's ratio for pair $P$ is therefore exactly $3$, matching $\log_{2}8$.

So the statement is True.
""",
            r"""
**B.** → True

Apply the same change-of-base identity to pair $Q$.

$$
\log_{3}9=\frac{\ln 9}{\ln 3}
$$

Rewrite $9$ as a pure power of the base.

$$
9=3^{2}\implies\log_{3}(3^{2})=2
$$

The table ratio equals $2$, so the claim holds.

So the statement is True.
""",
            r"""
**C.** → False

The exponential $b^{t}$ accepts every real input, while $\log_{b}$ accepts only positive inputs. Their natural domains are complementary, not identical.

So the statement is False.
""",
            r"""
**D.** → False

Change of base is an identity on the full admissible set $a>0$ and $b>0$ with $b\neq 1$. Integer status of $a$ or $b$ is irrelevant. For instance the integer pair $(8,2)$ already satisfies

$$
\frac{\ln 8}{\ln 2}=3=\log_{2}8
$$

The identity does not fail on integers; it continues to hold.

So the statement is False.
""",
            r"""
**E.** → False

Pair $P$ was already evaluated as $\log_{2}8=3$. Compare that value with the claimed threshold $2$.

$$
3>2
$$

The ratio is strictly larger than $2$, not strictly less, so the statement is false.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.3": {
        "solution_overview": r"""
Work with a fixed base $>1$ written $\log$, on $a>0$, $b>0$, and real exponents $c$. The surviving laws are the product, quotient, and power identities. Addition inside a logarithm and confusing $\log(a^{2})$ with $(\log a)^{2}$ are not identities.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The product law converts a logarithm of a product into a sum of logarithms, for every positive factor pair.

$$
\log(ab)=\log a+\log b\qquad(a>0,\,b>0)
$$

It follows from $b^{\log a+\log b}=b^{\log a}\,b^{\log b}=ab$. The claim is exactly that identity, so it holds.

So the statement is True.
""",
            r"""
**B.** → True

The quotient law is the product law applied to $a\cdot b^{-1}$.

$$
\log\!\left(\frac{a}{b}\right)=\log a+\log(b^{-1})=\log a-\log b
$$

for every $a>0$ and $b>0$. The displayed statement matches this rule.

So the statement is True.
""",
            r"""
**C.** → False

There is no universal addition-inside law. A concrete counter-example kills it at once. Take $a=b=1$.

$$
\log(1+1)=\log 2
$$

$$
\log 1+\log 1=0+0=0
$$

Since $\log 2\neq 0$, the claimed equality fails for these positive inputs.

So the statement is False.
""",
            r"""
**D.** → True

The power law moves a real exponent outside the logarithm.

$$
\log(a^{c})=c\log a\qquad(a>0,\,c\in\mathbb{R})
$$

It follows from $b^{c\log a}=(b^{\log a})^{c}=a^{c}$. The claim is precisely this identity.

So the statement is True.
""",
            r"""
**E.** → False

Expand both sides with the power law and compare. The left side is linear in $\log a$.

$$
\log(a^{2})=2\log a
$$

The right side is the square of the log value.

$$
(\log a)^{2}
$$

These agree only for special $a$ (solving $2u=u^{2}$), not for every $a>0$. The universal claim fails.

For a concrete mismatch take $a=e$ in natural logs: left side $2$, right side $1$.

$$
2\neq 1
$$

So the statement is False.
""",
        ],
    },
    "MATH 10.2.4": {
        "solution_overview": r"""
With $p<q$, the argument $(x-p)(q-x)$ is a downward parabola that is positive precisely on the open interval $(p,q)$. Endpoints make the argument $0$ and are excluded. On $(p,q)$ both factors are positive, so the product law splits the logarithm.
""",
        "tactical_explanations": [
            r"""
**A.** → True

A real logarithm needs a strictly positive argument, so solve

$$
(x-p)(q-x)>0
$$

The roots are $x=p$ and $x=q$. With $p<q$ the product of the two linear factors is positive exactly between them.

$$
x\in(p,q)
$$

That open interval is the natural domain of $f$.

So the statement is True.
""",
            r"""
**B.** → False

At an endpoint the product collapses to zero.

$$
(p-p)(q-p)=0
$$

So the statement is False.
""",
            r"""
**C.** → True

At the midpoint $x=(p+q)/2$ each factor equals half the gap.

$$
\frac{p+q}{2}-p=\frac{q-p}{2},\qquad q-\frac{p+q}{2}=\frac{q-p}{2}
$$

$$
(x-p)(q-x)=\left(\frac{q-p}{2}\right)^{2}>0
$$

since $q>p$. The claim matches the arithmetic.

So the statement is True.
""",
            r"""
**D.** → True

State the product law on its full domain of positive factors.

$$
\log(uv)=\log u+\log v\qquad(u>0,\,v>0)
$$

This is a standard logarithm identity for any fixed base $>1$, independent of the parameters $p$ and $q$.

So the statement is True.
""",
            r"""
**E.** → True

On the open interval $(p,q)$ both factors $x-p$ and $q-x$ are positive, so the product law applies.

$$
\log\bigl((x-p)(q-x)\bigr)=\log(x-p)+\log(q-x)
$$

The rewrite is legitimate throughout the natural domain.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.5": {
        "solution_overview": r"""
The curve $f(x)=\log_{b}x$ with $b>1$ is pinned by the unit condition $f(3)=1$, which forces $b=3$. Powers then read $f(3^{k})=k$, and $f$ is the inverse of $g(t)=3^{t}$. The normalisation $\log_{b}1=0$ holds for every admissible base.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The defining property $\log_{b}b=1$ says that the unique input returning height $1$ is the base itself. The stem gives

$$
f(3)=\log_{b}3=1
$$

Therefore the base must equal that input.

$$
b=3
$$

The intercept and asymptote already match every $\log_{b}$, so the unit point alone rebuilds $b$.

So the statement is True.
""",
            r"""
**B.** → True

With $b=3$ already recovered, evaluate at $9=3^{2}$ by the power law.

$$
f(9)=\log_{3}(3^{2})=2\log_{3}3=2
$$

The claimed height $2$ matches the evaluation.

So the statement is True.
""",
            r"""
**C.** → True

The power law moves a real exponent across a logarithm of any fixed base.

$$
\log(a^{c})=c\log a\qquad(a>0)
$$

It is one of the three fundamental logarithm identities and holds independently of the rebuilt base $b=3$.

So the statement is True.
""",
            r"""
**D.** → True

By construction, $\log_{3}$ and $t\mapsto 3^{t}$ are inverse bijections between $(0,\infty)$ and $\mathbb{R}$. Check one composition.

$$
\log_{3}(3^{t})=t\qquad(t\in\mathbb{R})
$$

$$
3^{\log_{3}x}=x\qquad(x>0)
$$

So the curve $f=\log_{3}$ is precisely the inverse of $g(t)=3^{t}$.

So the statement is True.
""",
            r"""
**E.** → True

Normalisation at the argument $1$ is part of the definition for every admissible base.

$$
\log_{b}1=0\qquad(b>0,\,b\neq 1)
$$

So the statement is True.
""",
        ],
    },
    "MATH 10.2.6": {
        "solution_overview": r"""
For $h(x)=\log_{2}(\log_{2}x)$ every intermediate argument must be positive: first $x>0$, then $\log_{2}x>0$, which forces $x>1$. The natural domain is therefore $(1,\infty)$. Evaluations at powers of two use $\log_{2}(2^{k})=k$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

For $h(x)=\log_{2}(\log_{2}x)$ every intermediate argument must be positive. The inner log first needs

$$
x>0
$$

The outer log then needs a positive input:

$$
\log_{2}x>0
$$

With base $2>1$ that forces

$$
x>2^{0}=1
$$

Intersecting the conditions leaves the open ray $(1,\infty)$.

So the statement is True.
""",
            r"""
**B.** → False

There is no universal addition-inside law. The counter-example $a=b=1$ already kills it:

$$
\log(1+1)=\log 2\neq 0=\log 1+\log 1
$$

So the statement is False.
""",
            r"""
**C.** → False

A real logarithm needs a strictly positive argument. At argument $0$ the expression is undefined, so zero is never admitted to a log domain.

So the statement is False.
""",
            r"""
**D.** → False

Peel the nesting at $x=4$ from the inside out.

$$
\log_{2}4=2
$$

$$
h(4)=\log_{2}2=1
$$

The claim announces $0$, but the correct value is $1$.

So the statement is False.
""",
            r"""
**E.** → False

At $x=1$ the inner logarithm vanishes.

$$
\log_{2}1=0
$$

The outer logarithm then faces the forbidden argument $0$, so $x=1$ lies outside the domain.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.7": {
        "solution_overview": r"""
The maps $g(t)=2^{t}$ on $\mathbb{R}$ and $f(x)=\log_{2}x$ on $(0,\infty)$ are inverse partners. Compositions recover the identity on each matching domain, but the two domains themselves differ. Base $2>1$ keeps $f$ increasing.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Apply $f$ after $g$ and use the inverse relation for base $2$.

$$
f(g(t))=\log_{2}(2^{t})=t
$$

The identity holds for every real exponent $t$, which is the full domain of $g$.

In particular the identity continues to hold for negative exponents, e.g. $\log_{2}(2^{-5})=-5$.

So the statement is True.
""",
            r"""
**B.** → True

Apply $g$ after $f$ on the positive ray where $f$ is defined.

$$
g(f(x))=2^{\log_{2}x}=x\qquad(x>0)
$$

That is the other half of the inverse-pair package, and it matches the claim.

A sample check at $x=8$ recovers $2^{\log_{2}8}=8$.

So the statement is True.
""",
            r"""
**C.** → False

Record the two natural domains side by side.

$$
\operatorname{dom}(g)=\mathbb{R},\qquad\operatorname{dom}(f)=(0,\infty)
$$

They are complementary, not identical. The claim that $f$ and $g$ share one common domain is false.

So the statement is False.
""",
            r"""
**D.** → False

For every base $b>1$ the logarithm is strictly increasing, not decreasing. Bases in $(0,1)$ reverse monotonicity. The blanket decreasing claim is false.

So the statement is False.
""",
            r"""
**E.** → False

The composition $g(f(-1))$ first requires $f(-1)=\log_{2}(-1)$. Negative arguments lie outside the domain $(0,\infty)$, so $f(-1)$ is undefined and the outer exponential never runs. The claimed identity cannot hold.

Negative inputs are excluded before any composition with $g$ can be formed.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.8": {
        "solution_overview": r"""
With $a<b$, the quotient $(x-a)/(b-x)$ is positive precisely on the open interval $(a,b)$. Endpoints make the argument $0$ or undefined. The midpoint forces the quotient to equal $1$, and on $(a,b)$ the quotient law splits $F$ into a difference of logs.
""",
        "tactical_explanations": [
            r"""
**A.** → True

On the open interval $a<x<b$ both linear factors are positive:

$$
x-a>0,\qquad b-x>0
$$

A quotient of two positive numbers is positive.

$$
\frac{x-a}{b-x}>0
$$

That is exactly the claim.

A quotient of two positive quantities cannot change sign on that open interval.

So the statement is True.
""",
            r"""
**B.** → False

Closed endpoints are fatal for a logarithm. At $x=a$ the numerator vanishes, so the argument is $0$. At $x=b$ the denominator vanishes, so the quotient is undefined. The natural domain is the open interval $(a,b)$, not the closed interval $[a,b]$.

So the statement is False.
""",
            r"""
**C.** → True

Substitute the midpoint $x=(a+b)/2$ into the quotient.

$$
\frac{\frac{a+b}{2}-a}{b-\frac{a+b}{2}}=\frac{(b-a)/2}{(b-a)/2}=1
$$

Then apply normalisation.

$$
F\!\left(\frac{a+b}{2}\right)=\log 1=0
$$

The claimed height $0$ is correct.

So the statement is True.
""",
            r"""
**D.** → True

On $(a,b)$ both $x-a$ and $b-x$ are positive, so the quotient law applies.

$$
\log\!\left(\frac{x-a}{b-x}\right)=\log(x-a)-\log(b-x)
$$

The right-hand side is exactly the displayed difference, and it matches $F(x)$ throughout $(a,b)$.

So the statement is True.
""",
            r"""
**E.** → False

At $x=b$ the denominator of the argument is zero.

$$
b-x=b-b=0
$$

Division by zero is undefined, so $x=b$ cannot lie in the domain of $F$.

Even approaching $x\to b^{-}$ sends the quotient to $+\infty$, but the point $x=b$ itself remains undefined.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.9": {
        "solution_overview": r"""
Critical points of the argument $(2x+1)/(x-3)$ are the numerator root $x=-1/2$ and the pole $x=3$. A sign chart yields positivity on $(-\infty,-1/2)\cup(3,\infty)$. On $(3,\infty)$ both factors are positive, so the quotient law splits $m$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The quotient of two linears changes sign only at the roots $x=-1/2$ and $x=3$. A sign chart shows positivity on the outer rays

$$
(-\infty,-1/2)\cup(3,\infty)
$$

where $(2x+1)/(x-3)>0$. That union is exactly the set announced in the claim.

So the statement is True.
""",
            r"""
**B.** → False

At $x=3$ the denominator vanishes.

$$
x-3=0
$$

The rational argument is undefined, so $x=3$ is excluded from the domain of $m$.

So the statement is False.
""",
            r"""
**C.** → True

Substitute the test point $x=0$ into the argument.

$$
\frac{2\cdot 0+1}{0-3}=-\frac13<0
$$

A negative argument is forbidden for a real logarithm, so $x=0$ is excluded for that reason.

So the statement is True.
""",
            r"""
**D.** → True

Check the argument at $x=-1$.

$$
\frac{2(-1)+1}{-1-3}=\frac{-1}{-4}=\frac12>0
$$

The value is positive and the denominator is nonzero, so $x=-1$ lies in the domain.

The point $x=-1$ lies in $(-\infty,-1/2)$, one of the two positivity components.

So the statement is True.
""",
            r"""
**E.** → True

On the ray $(3,\infty)$ one has both $2x+1>0$ and $x-3>0$. The quotient law therefore applies.

$$
m(x)=\log(2x+1)-\log(x-3)\qquad(x>3)
$$

That is the legitimate split announced in the claim.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.10": {
        "solution_overview": r"""
Demand $Q=AP^{-\beta}$ with $A>0$ and $\beta>0$ becomes linear in logs: $\ln Q=\ln A-\beta\ln P$. Elasticity $E=d\ln Q/d\ln P$ is therefore the constant slope $-\beta$. The usual quotient law and the normalisation $\log_{b}b=1$ remain available as background tools.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Take the natural log of both sides of the demand rule and expand with product and power laws.

$$
\ln Q=\ln\!\bigl(A P^{-\beta}\bigr)=\ln A+\ln(P^{-\beta})
$$

$$
\ln Q=\ln A-\beta\ln P
$$

That is exactly the claimed log-linear form.

The power $P^{-\beta}$ contributes the term $-\beta\ln P$ after the log is taken.

So the statement is True.
""",
            r"""
**B.** → True

Differentiate the log-linear model with respect to $\ln P$.

$$
E=\frac{d\ln Q}{d\ln P}=-\beta
$$

The right-hand side does not depend on $P$, so the elasticity equals $-\beta$ at every price $P>0$.

Constancy of that derivative is exactly constant elasticity along the demand curve.

So the statement is True.
""",
            r"""
**C.** → True

State the quotient law for an arbitrary fixed base.

$$
\log\!\left(\frac{a}{b}\right)=\log a-\log b\qquad(a>0,\,b>0)
$$

It is a standard identity and does not depend on the demand parameters $A$ and $\beta$.

So the statement is True.
""",
            r"""
**D.** → True

Elasticity was recovered as $E=-\beta$, so its absolute value is the parameter itself.

$$
|E|=\beta
$$

The hypothesis $\beta>1$ therefore forces $|E|>1$, which is the definition of elastic demand in this model.

So the statement is True.
""",
            r"""
**E.** → True

By definition the logarithm of its own base equals one.

$$
\log_{b}b=1\qquad(b>0,\,b\neq 1)
$$

So the statement is True.
""",
        ],
    },
    "MATH 10.2.11": {
        "solution_overview": r"""
Change of base links the two curves: $\log_{4}x=\log_{2}x/\log_{2}4=\frac12\log_{2}x$. Both share the asymptote $x=0$ and the intercept $(1,0)$, but their heights differ at $x=16$. Nested logs still need positive intermediate values, and change of base accepts any auxiliary base $k\neq 1$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Every logarithm with base $>1$ satisfies $\log_{b}x\to-\infty$ as $x\to 0^{+}$. Both $f=\log_{2}$ and $g=\log_{4}$ therefore approach the same vertical line.

$$
x=0
$$

That common asymptote is what the claim asserts.

So the statement is True.
""",
            r"""
**B.** → False

A real logarithm needs a strictly positive argument. At argument $0$ the expression is undefined, so zero is never admitted to a log domain.

So the statement is False.
""",
            r"""
**C.** → False

Nested logarithms still require every intermediate argument to be positive. The condition $x>0$ alone is not enough.

So the statement is False.
""",
            r"""
**D.** → False

Evaluate each curve at $x=16=2^{4}=4^{2}$.

$$
f(16)=\log_{2}16=4
$$

$$
g(16)=\log_{4}16=2
$$

Since $4\neq 2$, the heights are not equal.

Change of base also predicts the gap: $g(16)=\frac12 f(16)=\frac12\cdot 4=2$.

So the statement is False.
""",
            r"""
**E.** → False

Change of base works with any auxiliary base $k>0$, $k\neq 1$:

$$
\log_{b}a=\frac{\log_{k}a}{\log_{k}b}
$$

It is not restricted to auxiliary base $10$.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.12": {
        "solution_overview": r"""
The table lists exact binary logarithms $\log_{2}(2^{k})=k$ beside approximate natural logs. Change of base recovers every binary entry as $\ln x/\ln 2$. The usual false friends — addition inside a log, and zero arguments — remain invalid.
""",
        "tactical_explanations": [
            r"""
**A.** → True

By definition $\log_{2}x$ is the unique exponent $k$ satisfying $2^{k}=x$. Each tabulated input is a pure power of two.

$$
1=2^{0},\;2=2^{1},\;4=2^{2},\;8=2^{3},\;16=2^{4}
$$

The tabulated row $\log_{2}x$ is exactly that exponent $k$ in every column.

That is the definition of $\log_{2}$ as the inverse of $t\mapsto 2^{t}$.

So the statement is True.
""",
            r"""
**B.** → True

Change of base with natural logs reads

$$
\log_{2}x=\frac{\ln x}{\ln 2}
$$

At every listed power of two the approximate ratio reconstitutes the exact integer already recorded in the $\log_{2}$ row, confirming the identity on the table.

At $x=16$, for instance, $2.773/0.693\approx 4$, matching $\log_{2}16=4$.

So the statement is True.
""",
            r"""
**C.** → False

Compute the change-of-base ratio at $x=8$.

$$
\frac{\ln 8}{\ln 2}=\log_{2}8=\log_{2}(2^{3})=3
$$

The value equals $3$ exactly, so it is not strictly less than $3$.

Using the table's approximate logs, $2.079/0.693\approx 3.00$, confirming exactness rather than a strict deficit.

So the statement is False.
""",
            r"""
**D.** → False

There is no universal addition-inside law. The counter-example $a=b=1$ already kills it:

$$
\log(1+1)=\log 2\neq 0=\log 1+\log 1
$$

So the statement is False.
""",
            r"""
**E.** → False

A real logarithm needs a strictly positive argument. At argument $0$ the expression is undefined, so zero is never admitted to a log domain.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.13": {
        "solution_overview": r"""
Change of base is the universal identity $\log_{b}a=\ln a/\ln b$ on $a>0$ and $b>0$, $b\neq 1$. Any other auxiliary base (including $10$) works the same way. When $b=e$ one recovers $\ln$. Graphs never cross their vertical asymptotes, and $a$ need not be an integer.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The change-of-base theorem states that for every $a>0$ and every $b>0$ with $b\neq 1$,

$$
\log_{b}a=\frac{\ln a}{\ln b}
$$

The stem already restricts to exactly that set of $(a,b)$, so the identity holds throughout.

So the statement is True.
""",
            r"""
**B.** → True

Replace the natural log by any other fixed auxiliary base, here base $10$.

$$
\log_{b}a=\frac{\log_{10}a}{\log_{10}b}
$$

The two ratios are equal because each equals $\log_{b}a$. The claimed equivalence holds.

So the statement is True.
""",
            r"""
**C.** → True

Substitute the special base $b=e$ into change of base.

$$
\log_{e}a=\frac{\ln a}{\ln e}=\frac{\ln a}{1}=\ln a
$$

So $\log_{b}a$ collapses to the natural logarithm precisely when $b=e$.

The notation $\ln$ is simply another name for $\log_{e}$.

So the statement is True.
""",
            r"""
**D.** → False

The hypothesis of change of base is only $a>0$. Non-integer arguments such as $a=\sqrt{2}$ or $a=e$ are fully allowed.

$$
\log_{2}\!\sqrt{2}=\frac12
$$

is a legitimate instance. Integer status of $a$ is not required.

The only restriction on $a$ is positivity, not integrality.

So the statement is False.
""",
            r"""
**E.** → False

A vertical asymptote is a line the graph approaches but never meets. The graph does not cross that asymptote at any finite point.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.14": {
        "solution_overview": r"""
Bases in the interval $(0,1)$ reverse monotonicity: $f(x)=\log_{b}x$ is strictly decreasing on $(0,\infty)$, while the normalisation rules $f(1)=0$ and $f(b)=1$ survive. As $x\to 0^{+}$ one has $f(x)\to+\infty$. Change of base remains valid, with $\ln b<0$ accounting for the sign flip.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Write $f$ through change of base.

$$
f(x)=\frac{\ln x}{\ln b}
$$

For $0<b<1$ the denominator $\ln b$ is negative, so $f$ inherits the opposite monotonicity of $\ln$. Hence $f$ is strictly decreasing on $(0,\infty)$.

So the statement is True.
""",
            r"""
**B.** → True

Normalisation at the argument $1$ does not depend on whether the base exceeds $1$.

$$
f(1)=\log_{b}1=0
$$

because $b^{0}=1$ for every admissible base. The claim holds.

So the statement is True.
""",
            r"""
**C.** → True

By definition the logarithm of its own base equals one, even when $0<b<1$.

$$
f(b)=\log_{b}b=1
$$

So the statement is True.
""",
            r"""
**D.** → True

For $0<b<1$ the change-of-base form $\ln x/\ln b$ has a negative denominator. As $x\to 0^{+}$ one has $\ln x\to-\infty$, so the ratio tends to $+\infty$.

$$
\lim_{x\to 0^{+}}\log_{b}x=+\infty
$$

That matches the claim.

So the statement is True.
""",
            r"""
**E.** → False

Change of base requires only $b>0$ and $b\neq 1$; the restriction $b>1$ is unnecessary.

$$
\log_{b}x=\frac{\ln x}{\ln b}
$$

remains valid for $0<b<1$. The negative sign of $\ln b$ reverses inequalities; it does not invalidate the identity.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.15": {
        "solution_overview": r"""
The unit condition $f(e)=1$ forces the base to equal $e$, so $f=\ln$. Powers then give $\ln(e^{k})=k$, the inverse is $t\mapsto e^{t}$, and the product law remains available for any positive factor pair. Normalisation $\log_{b}1=0$ holds for every admissible base.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The defining property $\log_{b}b=1$ identifies the base as the unique input returning height $1$. The stem gives

$$
f(e)=\log_{b}e=1
$$

Therefore $b=e$, and $f$ is the natural logarithm.

So the statement is True.
""",
            r"""
**B.** → True

With $f=\ln$ already recovered, apply the power law at $e^{2}$.

$$
f(e^{2})=\ln(e^{2})=2\ln e=2
$$

The claimed height $2$ matches.

Two multiplicative factors of $e$ raise the natural log by $2$, matching the power law.

So the statement is True.
""",
            r"""
**C.** → True

Normalisation at $1$ is universal for admissible bases.

$$
\log_{b}1=0\qquad(b>0,\,b\neq 1)
$$

It does not depend on the particular identification $b=e$.

So the statement is True.
""",
            r"""
**D.** → True

The natural exponential is the inverse of $\ln$. Check both compositions.

$$
\ln(e^{t})=t\qquad(t\in\mathbb{R})
$$

$$
e^{\ln x}=x\qquad(x>0)
$$

Hence the inverse of $f$ is $g(t)=e^{t}$.

So the statement is True.
""",
            r"""
**E.** → True

The product law holds for every fixed base and every positive factor pair.

$$
\log(uv)=\log u+\log v\qquad(u>0,\,v>0)
$$

It is independent of the rebuilt base $b=e$.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.16": {
        "solution_overview": r"""
Triple nesting $H(x)=\log_{2}(\log_{2}(\log_{2}x))$ forces three positivity conditions. Working outward yields $x>0$, then $x>1$, then $x>2$, so the natural domain is $(2,\infty)$. At $x=2^{16}=65536$ one peels to $H=2$. Stock distractors about elasticity and change-of-base remain false.
""",
        "tactical_explanations": [
            r"""
**A.** → False

Impose positivity at each layer. The outermost logarithm needs

$$
\log_{2}(\log_{2}x)>0
$$

With base $2>1$ that means $\log_{2}x>1$, hence

$$
x>2^{1}=2
$$

The natural domain is therefore $(2,\infty)$. The claim announces $(4,\infty)$, which is the wrong threshold.

So the statement is False.
""",
            r"""
**B.** → True

Rewrite the input as a pure power of two and peel inside-out.

$$
65536=2^{16}
$$

$$
\log_{2}65536=16
$$

$$
\log_{2}16=4
$$

$$
\log_{2}4=2
$$

So $H(65536)=2$, matching the claim.

So the statement is True.
""",
            r"""
**C.** → False

For demand $Q=AP^{-\beta}$ the log-log elasticity is the constant slope $-\beta$, not $-A$. The scale $A$ never enters the elasticity.

So the statement is False.
""",
            r"""
**D.** → False

Change of base works with any auxiliary base $k>0$, $k\neq 1$:

$$
\log_{b}a=\frac{\log_{k}a}{\log_{k}b}
$$

It is not restricted to auxiliary base $10$.

So the statement is False.
""",
            r"""
**E.** → False

On the interval $1<x\le 2$ the middle value satisfies $\log_{2}x\le 1$, so

$$
\log_{2}(\log_{2}x)\le 0
$$

The outer logarithm then meets a non-positive argument and fails. Hence $H$ is not defined there.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.17": {
        "solution_overview": r"""
The table lists three claimed identities. Product $(I_1)$ and quotient $(I_2)$ are the standard laws on $u,v>0$. The sum claim $(I_3)$ is not an identity; it already fails at $u=v=1$. Zero arguments remain forbidden.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Claim $(I_1)$ is the product law.

$$
\log(uv)=\log u+\log v\qquad(u>0,\,v>0)
$$

It holds for every positive factor pair and every fixed base $>1$, so $(I_1)$ survives.

So the statement is True.
""",
            r"""
**B.** → True

Claim $(I_2)$ is the quotient law.

$$
\log\!\left(\frac{u}{v}\right)=\log u-\log v\qquad(u>0,\,v>0)
$$

It follows from the product law applied to $u\cdot v^{-1}$, so $(I_2)$ survives as well.

So the statement is True.
""",
            r"""
**C.** → False

Claim $(I_3)$ asserts $\log(u+v)=\log u+\log v$ for all positive $u,v$. Test $u=v=1$.

$$
\log(1+1)=\log 2
$$

$$
\log 1+\log 1=0
$$

Since $\log 2\neq 0$, the identity fails, and $(I_3)$ does not hold universally.

Product and quotient survive in the table; the sum claim does not.

So the statement is False.
""",
            r"""
**D.** → False

A real logarithm needs a strictly positive argument. At argument $0$ the expression is undefined, so zero is never admitted to a log domain.

So the statement is False.
""",
            r"""
**E.** → False

Even the special case $u=v=1$ fails for $(I_3)$.

$$
\log(1+1)=\log 2\neq 0=\log 1+\log 1
$$

So $(I_3)$ does not hold when $u=v=1$.

The failure at this single positive pair already kills any universal reading of $(I_3)$.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.18": {
        "solution_overview": r"""
For $b>1$, the pair $f(t)=b^{t}$ on $\mathbb{R}$ and $g=\log_{b}$ on $(0,\infty)$ are inverse bijections. Both compositions recover the identity on the matching full domain. Bases $b>1$ keep $g$ strictly increasing.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Compose $\log_{b}$ after the exponential on the full real line.

$$
g(f(t))=\log_{b}(b^{t})=t\qquad(t\in\mathbb{R})
$$

The identity holds for every real $t$, including negative values.

Negative sample: $\log_{b}(b^{-4})=-4$ returns the original exponent.

So the statement is True.
""",
            r"""
**B.** → True

Compose the exponential after the logarithm on the positive ray.

$$
f(g(x))=b^{\log_{b}x}=x\qquad(x>0)
$$

That is the companion inverse identity, and it matches the claim.

Sample check: $b^{\log_{b}7}=7$ on the positive ray.

So the statement is True.
""",
            r"""
**C.** → False

The composition $g(f(t))=\log_{b}(b^{t})$ equals $t$ for every real $t$, not merely for $t>0$. For a negative sample,

$$
\log_{b}(b^{-3})=-3
$$

The claim that the identity fails for negative $t$ is therefore itself false.

The full-domain identity $g(f(t))=t$ on $\mathbb{R}$ already includes every negative $t$.

So the statement is False.
""",
            r"""
**D.** → True

The exponential $f:\mathbb{R}\to(0,\infty)$ is bijective, and $g:(0,\infty)\to\mathbb{R}$ is its two-sided inverse. Together they are bijections between $\mathbb{R}$ and $(0,\infty)$ in opposite directions, exactly as claimed.

So the statement is True.
""",
            r"""
**E.** → False

For every base $b>1$ the logarithm is strictly increasing, not decreasing. Bases in $(0,1)$ reverse monotonicity. The blanket decreasing claim is false.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.19": {
        "solution_overview": r"""
For $r(x)=\log\sqrt{(x-c)/(d-x)}$ with $c<d$, the radicand must be nonnegative and the log still needs a positive value, forcing $(x-c)/(d-x)>0$. That holds on $(c,d)$. The midpoint gives $r=0$, and the power law writes $r=\frac12\log((x-c)/(d-x))$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The square root needs a nonnegative radicand, and the outer logarithm needs a strictly positive argument. Combining both requirements forces the radicand to be strictly positive.

$$
\frac{x-c}{d-x}>0
$$

That is precisely the condition stated in the claim.

A zero radicand would make $\log\sqrt{0}=\log 0$ undefined, so strict positivity is required.

So the statement is True.
""",
            r"""
**B.** → True

With $c<d$, the quotient of the two linear factors is positive precisely between the roots.

$$
x\in(c,d)
$$

So the statement is True.
""",
            r"""
**C.** → True

At the midpoint the quotient equals $1$.

$$
\frac{\frac{c+d}{2}-c}{d-\frac{c+d}{2}}=1
$$

Then

$$
r\!\left(\frac{c+d}{2}\right)=\log\sqrt{1}=\log 1=0
$$

The claimed height is correct.

So the statement is True.
""",
            r"""
**D.** → True

Apply the power law with exponent $1/2$ on the domain where the argument is positive.

$$
\log\!\left(u^{1/2}\right)=\frac12\log u
$$

Taking $u=(x-c)/(d-x)$ yields

$$
r(x)=\frac12\log\!\left(\frac{x-c}{d-x}\right)
$$

So the statement is True.
""",
            r"""
**E.** → False

At $x=c$ the radicand vanishes.

$$
\frac{c-c}{d-c}=0
$$

Then $\sqrt{0}=0$ and $\log 0$ is undefined, so $x=c$ does not lie in the domain.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.20": {
        "solution_overview": r"""
Richter-style magnitudes $M=\log_{10}(A/A_{0})$ turn amplitude ratios into differences of magnitudes. Exponentiating a gap $\Delta=M_{X}-M_{Y}$ recovers $A_{X}/A_{Y}=10^{\Delta}$. Common amplitude factors cancel in gaps, and non-positive amplitudes are excluded.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Subtract the two magnitude definitions and apply the quotient law.

$$
\Delta=M_{X}-M_{Y}=\log_{10}\!\left(\frac{A_{X}}{A_{0}}\right)-\log_{10}\!\left(\frac{A_{Y}}{A_{0}}\right)
$$

$$
\Delta=\log_{10}\!\left(\frac{A_{X}}{A_{Y}}\right)
$$

Exponentiate base $10$ to obtain $A_{X}/A_{Y}=10^{\Delta}$.

The reference amplitude $A_{0}$ cancels in the difference of magnitudes.

So the statement is True.
""",
            r"""
**B.** → True

Substitute the concrete gap $\Delta=2$ into the amplitude ratio.

$$
\frac{A_{X}}{A_{Y}}=10^{2}=100
$$

So $A_{X}$ is one hundred times $A_{Y}$, as claimed.

In magnitude language, a gap of $2$ is two factors of ten in amplitude.

So the statement is True.
""",
            r"""
**C.** → True

By definition the logarithm of its own base equals one.

$$
\log_{b}b=1\qquad(b>0,\,b\neq 1)
$$

The identity is independent of the magnitude model.

So the statement is True.
""",
            r"""
**D.** → True

Replace every amplitude by a doubled copy. The new gap is

$$
\log_{10}\!\left(\frac{2A_{X}}{2A_{Y}}\right)=\log_{10}\!\left(\frac{A_{X}}{A_{Y}}\right)=\Delta
$$

A common positive factor cancels, so every magnitude gap is unchanged.

Only the ratio $A_{X}/A_{Y}$ enters $\Delta$, so a common factor is invisible.

So the statement is True.
""",
            r"""
**E.** → True

The magnitude formula feeds the ratio $A/A_{0}$ into a logarithm. That argument must be strictly positive, which forces $A>0$ when $A_{0}>0$ is fixed. When $A\le 0$ the expression for $M$ is undefined.

The reference $A_{0}$ is positive by construction, so the sign restriction falls on $A$.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.21": {
        "solution_overview": r"""
On $(0,8]$ compare $f(x)=\log_{2}x$ with the ray $y=x/4$. The curves cross twice on $(0,\infty)$, including once at $x=16$ beyond the sketched window; past that meeting the ray overtakes the slow logarithm. Stock distractors about elasticity, change-of-base, and shared inverse domains remain false.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Evaluate both rules at $x=1$.

$$
f(1)=\log_{2}1=0
$$

$$
\frac{1}{4}=\frac14
$$

The logarithm sits at height $0$ while the ray sits at $1/4$, exactly as claimed.

So the statement is True.
""",
            r"""
**B.** → False

For demand $Q=AP^{-\beta}$ the log-log elasticity is the constant slope $-\beta$, not $-A$. The scale $A$ never enters the elasticity.

So the statement is False.
""",
            r"""
**C.** → False

Change of base works with any auxiliary base $k>0$, $k\neq 1$:

$$
\log_{b}a=\frac{\log_{k}a}{\log_{k}b}
$$

It is not restricted to auxiliary base $10$.

So the statement is False.
""",
            r"""
**D.** → False

The exponential $b^{t}$ accepts every real input, while $\log_{b}$ accepts only positive inputs. Their natural domains are complementary, not identical.

So the statement is False.
""",
            r"""
**E.** → False

The claim asks for a strict inequality on the whole ray $x>4$. At the later meeting point $x=16$ the two heights agree.

$$
\log_{2}16=4,\qquad\frac{16}{4}=4
$$

For still larger inputs the linear ray grows faster than the logarithm, so $f(x)<x/4$. The universal claim $f(x)>x/4$ for every $x>4$ therefore fails.

Equality at $x=16$ already kills a strict inequality on the whole ray $x>4$.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.22": {
        "solution_overview": r"""
Each sample fits $\ln Q=\alpha-\beta\ln P$. Elasticity is the slope $E=-\beta$, read from the fitted $\beta$ column alone: sample $A$ has $\beta=1.2$, $B$ has $1.5$, and $C$ has $0.8$. Unit elasticity would need $\beta=1$. The scale $\alpha$ (or $A$) never enters $E$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Differentiate the fitted log-log line.

$$
E=\frac{d\ln Q}{d\ln P}=-\beta
$$

Every tabulated $\beta$ is positive ($1.2$, $1.5$, $0.8$), so every implied elasticity $E=-\beta$ is negative.

So the statement is True.
""",
            r"""
**B.** → True

Absolute elasticity is the fitted slope itself.

$$
|E|=\beta
$$

Sample $B$ has $\beta=1.5$ while sample $A$ has $\beta=1.2$, and $1.5>1.2$. Sample $B$ is more elastic in absolute value.

So the statement is True.
""",
            r"""
**C.** → False

Unit-elastic demand means $|E|=1$, hence $\beta=1$. Sample $C$ carries

$$
\beta=0.8\neq 1
$$

so $|E|=0.8\neq 1$. Sample $C$ is not unit-elastic.

So the statement is False.
""",
            r"""
**D.** → False

Elasticity depends only on the slope coefficient.

$$
E=-\beta
$$

So the statement is False.
""",
            r"""
**E.** → False

For demand $Q=AP^{-\beta}$ the log-log elasticity is the constant slope $-\beta$, not $-A$. The scale $A$ never enters the elasticity.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.23": {
        "solution_overview": r"""
Keep $a>0$, $b>0$ with $b\neq 1$, and real $c$. The power and reciprocal laws hold, and doubling a log is the log of a square. Squaring the log value is a false friend, and addition inside a logarithm is not a law.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The power law moves a real exponent across a logarithm.

$$
\log_{b}(a^{c})=c\log_{b}a\qquad(a>0)
$$

It follows from $b^{c\log_{b}a}=(b^{\log_{b}a})^{c}=a^{c}$. The claim is exactly this identity.

The identity holds for every real exponent $c$, including negative and non-integer values.

So the statement is True.
""",
            r"""
**B.** → True

Add the same logarithm to itself and invoke the power law.

$$
\log_{b}a+\log_{b}a=2\log_{b}a=\log_{b}(a^{2})
$$

The two sides agree for every $a>0$, so the claim holds.

So the statement is True.
""",
            r"""
**C.** → False

The left side is twice the log, while the right side is the square of the log.

$$
\log_{b}a+\log_{b}a=2\log_{b}a
$$

$$
(\log_{b}a)^{2}
$$

These agree only for special values of $\log_{b}a$, not universally. The claimed identity fails.

So the statement is False.
""",
            r"""
**D.** → True

Rewrite the reciprocal as a power and apply the power law.

$$
\log_{b}\!\left(\frac{1}{a}\right)=\log_{b}(a^{-1})=-1\cdot\log_{b}a=-\log_{b}a
$$

The identity holds for every $a>0$.

The reciprocal identity is the power law at the exponent $-1$.

So the statement is True.
""",
            r"""
**E.** → False

There is no universal addition-inside law. The counter-example $a=b=1$ already kills it:

$$
\log(1+1)=\log 2\neq 0=\log 1+\log 1
$$

So the statement is False.
""",
        ],
    },
    "MATH 10.2.24": {
        "solution_overview": r"""
Substitute $u=\log_{b}x$ into $(\log_{b}x)^{2}-5\log_{b}x+6=0$ to obtain the quadratic $u^{2}-5u+6=0$. Factoring gives $(u-2)(u-3)=0$, so $x=b^{2}$ and $x=b^{3}$. Both roots are positive, hence admissible; $x=0$ is never in the log domain. Vieta reads the $u$-sum as $5$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Expand the proposed factorisation and match coefficients.

$$
(u-2)(u-3)=u^{2}-5u+6
$$

That is exactly the quadratic obtained after the substitution $u=\log_{b}x$, so the factorisation is correct.

So the statement is True.
""",
            r"""
**B.** → True

The roots $u=2$ and $u=3$ return to $x$ through the exponential inverse.

$$
\log_{b}x=2\implies x=b^{2}
$$

$$
\log_{b}x=3\implies x=b^{3}
$$

Those are the two $x$-roots of the original equation.

So the statement is True.
""",
            r"""
**C.** → False

The logarithm $\log_{b}x$ is defined only for $x>0$. The candidate $x=0$ lies outside that domain, so it cannot be a solution of an equation built from $\log_{b}x$.

So the statement is False.
""",
            r"""
**D.** → True

Both recovered roots are positive powers of a base $b>1$.

$$
b^{2}>0,\qquad b^{3}>0
$$

Each therefore lies in the natural domain $(0,\infty)$ of $\log_{b}$.

Since $b>1$, both powers lie strictly above $0$ and are admissible log inputs.

So the statement is True.
""",
            r"""
**E.** → True

For the monic quadratic $u^{2}-5u+6$, Vieta's sum-of-roots formula reads the middle coefficient.

$$
u_{1}+u_{2}=5
$$

The product of the $u$-roots is the constant term $6$, while their sum is the middle coefficient $5$.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.25": {
        "solution_overview": r"""
A horizontal shift $f(x)=\log_{2}(x-h)$ has vertical asymptote $x=h$. The figure's asymptote at $x=2$ forces $h=2$, and the zero at $x=3$ confirms $3-h=1$. The domain is $(h,\infty)=(2,\infty)$. Unshifted logs still asymptote at $x=0$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The graph of $\log_{2}(x-h)$ is the graph of $\log_{2}$ translated by $h$, so its vertical asymptote is the line

$$
x=h
$$

The figure places that asymptote at $x=2$, which forces $h=2$.

So the statement is True.
""",
            r"""
**B.** → True

A logarithm vanishes only at the argument $1$. The zero at $x=3$ therefore requires

$$
\log_{2}(3-h)=0\implies 3-h=1
$$

Hence $h=2$, consistent with the asymptote reading.

So the statement is True.
""",
            r"""
**C.** → True

The product law holds for every fixed base and every positive factor pair.

$$
\log(uv)=\log u+\log v\qquad(u>0,\,v>0)
$$

It does not depend on the shift parameter $h$.

So the statement is True.
""",
            r"""
**D.** → True

The argument of $f$ must be positive.

$$
x-h>0\implies x>h
$$

With $h=2$ already recovered, the domain is $(2,\infty)$.

So the statement is True.
""",
            r"""
**E.** → True

For an unshifted logarithm of base $b>1$,

$$
\lim_{x\to 0^{+}}\log_{b}x=-\infty
$$

so the vertical asymptote is the line $x=0$. That is the standard asymptote of $\log_{b}$.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.26": {
        "solution_overview": r"""
For $N(x)=\log_{2}(\ln x)$ the outer logarithm needs $\ln x>0$, hence $x>1$. The natural domain is $(1,\infty)$, not $(e,\infty)$. At $x=e$ one obtains $N(e)=0$; at $x=1$ the outer log fails. Inverse domains remain complementary, and bases $>1$ keep logs increasing.
""",
        "tactical_explanations": [
            r"""
**A.** → False

The outer logarithm needs a positive input, so demand

$$
\ln x>0
$$

That forces $x>e^{0}=1$. The natural domain is therefore $(1,\infty)$, not the stricter ray $(e,\infty)$.

So the statement is False.
""",
            r"""
**B.** → True

Substitute $x=e$ into the nesting.

$$
\ln e=1
$$

$$
N(e)=\log_{2}1=0
$$

The claim matches the evaluation.

So the statement is True.
""",
            r"""
**C.** → False

The exponential $b^{t}$ accepts every real input, while $\log_{b}$ accepts only positive inputs. Their natural domains are complementary, not identical.

So the statement is False.
""",
            r"""
**D.** → False

At $x=1$ the inner logarithm vanishes.

$$
\ln 1=0
$$

The outer expression becomes $\log_{2}0$, which is undefined. So $N(1)$ is not defined.

Only $x>1$ keeps $\ln x$ positive enough for the outer base-$2$ logarithm.

So the statement is False.
""",
            r"""
**E.** → False

For every base $b>1$ the logarithm is strictly increasing, not decreasing. Bases in $(0,1)$ reverse monotonicity. The blanket decreasing claim is false.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.27": {
        "solution_overview": r"""
The inverse pair $g(t)=3^{t}$ and $f=\log_{3}$ recovers exponents and undoes logs at convenient powers of three. Domains still differ: $g$ accepts all reals while $f$ needs positive inputs. Elasticity in the demand model remains $-\beta$, not $-A$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Compose $f$ after $g$ at the exponent $-2$.

$$
f(g(-2))=\log_{3}(3^{-2})=-2
$$

The inverse relation returns the original exponent.

The exponential $3^{-2}=1/9$ is positive, so it lies in the domain of $f$.

So the statement is True.
""",
            r"""
**B.** → True

Compose $g$ after $f$ at the positive input $9=3^{2}$.

$$
g(f(9))=3^{\log_{3}9}=9
$$

The exponential undoes the logarithm on $(0,\infty)$.

Since $9>0$, the input is admissible for $f$ before the exponential undoes it.

So the statement is True.
""",
            r"""
**C.** → False

Rewrite $1/3$ as a power of the base and evaluate.

$$
\frac13=3^{-1}
$$

$$
f\!\left(\frac13\right)=\log_{3}(3^{-1})=-1
$$

The claim announces the value $1$, but the evaluation returns $-1$.

The value $1$ would require $\log_{3}3=1$, which sits at input $3$, not at $1/3$.

So the statement is False.
""",
            r"""
**D.** → False

For demand $Q=AP^{-\beta}$ the log-log elasticity is the constant slope $-\beta$, not $-A$. The scale $A$ never enters the elasticity.

So the statement is False.
""",
            r"""
**E.** → False

The logarithm $f=\log_{3}$ requires a positive argument, so $t=-1$ is not an admissible input for $f$. By contrast $g(-1)=3^{-1}$ is perfectly defined. The two maps are not defined the same way at $-1$.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.28": {
        "solution_overview": r"""
For $s(x)=\log(ax-b)$ with $a>0$, the inequality $ax-b>0$ rearranges to $x>b/a$. That threshold is the vertical asymptote; the endpoint itself is excluded because the argument would be $0$. When $b=0$ the domain collapses to $x>0$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

A positive argument is required.

$$
ax-b>0
$$

Divide by the positive coefficient $a$.

$$
x>\frac{b}{a}
$$

That open ray is the natural domain of $s$.

Because $a>0$, dividing does not reverse the inequality direction.

So the statement is True.
""",
            r"""
**B.** → True

If $b=0$, the domain inequality simplifies at once.

$$
ax>0\implies x>0
$$

since $a>0$. The domain becomes the positive ray.

That is the ordinary domain of $\log$ itself after the coefficient $a$ cancels from the inequality.

So the statement is True.
""",
            r"""
**C.** → True

As $x$ approaches the threshold from the right, the argument tends to $0$ from above.

$$
\lim_{x\to(b/a)^{+}}(ax-b)=0^{+}
$$

Hence $s(x)\to-\infty$, and the vertical asymptote is the line $x=b/a$.

So the statement is True.
""",
            r"""
**D.** → False

At $x=b/a$ the argument vanishes.

$$
a\cdot\frac{b}{a}-b=0
$$

The logarithm of $0$ is undefined, so $s(b/a)$ is not the value $0$; it does not exist.

The height $0$ occurs where the argument equals $1$, i.e. at $x=(1+b)/a$, not at the asymptote.

So the statement is False.
""",
            r"""
**E.** → False

A real logarithm needs a strictly positive argument. At argument $0$ the expression is undefined, so zero is never admitted to a log domain.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.29": {
        "solution_overview": r"""
For $w(x)=\log|x^{2}-1|$ the absolute value vanishes at $x=\pm 1$, so those two points are excluded. Elsewhere one drops the absolute value according to the sign of $x^{2}-1$: on $(1,\infty)$ it is $x^{2}-1$, and on $(-1,1)$ it is $1-x^{2}$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The logarithm needs a strictly positive argument, so

$$
|x^{2}-1|>0
$$

That fails precisely when $x^{2}-1=0$, i.e. at $x=\pm 1$. The expression is defined for all other real $x$.

So the statement is True.
""",
            r"""
**B.** → True

Substitute $x=0$.

$$
|0^{2}-1|=1
$$

$$
w(0)=\log 1=0
$$

The claimed evaluation is correct.

So the statement is True.
""",
            r"""
**C.** → False

At $x=1$ the absolute value vanishes.

$$
|1^{2}-1|=0
$$

Then $\log 0$ is undefined, so $x=1$ does not lie in the domain.

The absolute value collapses to $0$ at every root of $x^{2}-1$, including $x=-1$ as well.

So the statement is False.
""",
            r"""
**D.** → True

For $x>1$ one has $x^{2}-1>0$, so the absolute value is redundant.

$$
w(x)=\log(x^{2}-1)\qquad(x>1)
$$

That matches the claim on $(1,\infty)$.

The same simplification holds on $(-\infty,-1)$ where again $x^{2}-1>0$.

So the statement is True.
""",
            r"""
**E.** → True

For $|x|<1$ one has $x^{2}-1<0$, so the absolute value flips the sign.

$$
|x^{2}-1|=1-x^{2}
$$

$$
w(x)=\log(1-x^{2})\qquad(x\in(-1,1))
$$

At $x=0$ this reduced form returns $\log 1=0$, matching the direct evaluation.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.30": {
        "solution_overview": r"""
The definition $\mathrm{pH}=-\log_{10}[H^{+}]$ turns concentration ratios into pH differences, with a sign reversal from the leading minus. A tenfold concentration increase lowers pH by $1$. Inverse evaluation $b^{\log_{b}x}=x$ remains available on $(0,\infty)$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Substitute $C_{1}=10\,C_{2}$ into the definition.

$$
\mathrm{pH}_{1}=-\log_{10}(10 C_{2})=-\bigl(\log_{10}10+\log_{10}C_{2}\bigr)
$$

$$
\mathrm{pH}_{1}=-1-\log_{10}C_{2}=\mathrm{pH}_{2}-1
$$

A tenfold rise in concentration lowers pH by exactly one unit.

So the statement is True.
""",
            r"""
**B.** → True

If $C_{1}=C_{2}$, the two logarithms receive the same argument.

$$
\mathrm{pH}_{1}=-\log_{10}C_{1}=-\log_{10}C_{2}=\mathrm{pH}_{2}
$$

The two pH values agree.

Equal concentrations feed the same number into $-\log_{10}$, so the outputs match.

So the statement is True.
""",
            r"""
**C.** → True

Inverse evaluation on the positive ray is part of the definition of $\log_{b}$.

$$
b^{\log_{b}x}=x\qquad(x>0)
$$

The identity holds for every admissible base.

Sample: $10^{\log_{10}5}=5$ recovers the positive argument.

So the statement is True.
""",
            r"""
**D.** → True

The map $C\mapsto-\log_{10}C$ is strictly decreasing on $(0,\infty)$ because $\log_{10}$ is strictly increasing and the leading minus reverses inequalities. Larger concentration therefore yields smaller pH.

So the statement is True.
""",
            r"""
**E.** → True

Expand the difference of the two pH values.

$$
\mathrm{pH}_{2}-\mathrm{pH}_{1}=-\log_{10}C_{2}-(-\log_{10}C_{1})=\log_{10}C_{1}-\log_{10}C_{2}
$$

$$
\mathrm{pH}_{2}-\mathrm{pH}_{1}=\log_{10}\!\left(\frac{C_{1}}{C_{2}}\right)
$$

That matches the claim.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.31": {
        "solution_overview": r"""
The figure is $f(x)=\log_{5}x$ with the unit point $(5,1)$ marked. Normalisation gives $f(1)=0$, base $5>1$ keeps the graph increasing, and the vertical asymptote $x=0$ is never crossed. Inverse domains remain complementary, and addition inside a log is not a law.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Every admissible logarithm vanishes at the argument $1$.

$$
f(1)=\log_{5}1=0
$$

The marked unit point $(5,1)$ is consistent with the same normalisation package.

So the statement is True.
""",
            r"""
**B.** → False

The exponential $b^{t}$ accepts every real input, while $\log_{b}$ accepts only positive inputs. Their natural domains are complementary, not identical.

So the statement is False.
""",
            r"""
**C.** → False

A vertical asymptote is a line the graph approaches but never meets. The graph does not cross that asymptote at any finite point.

So the statement is False.
""",
            r"""
**D.** → False

Base $5>1$ places $f$ in the increasing regime. Compare two sample heights.

$$
f(1)=0,\qquad f(5)=1
$$

Since $1<5$ yet $f(1)<f(5)$, the graph rises rather than falls.

The marked point $(5,1)$ already sits above the intercept $(1,0)$, confirming the rise.

So the statement is False.
""",
            r"""
**E.** → False

There is no universal addition-inside law. The counter-example $a=b=1$ already kills it:

$$
\log(1+1)=\log 2\neq 0=\log 1+\log 1
$$

So the statement is False.
""",
        ],
    },
    "MATH 10.2.32": {
        "solution_overview": r"""
Change of base with the fixed bridge $\ln 10$ converts every row: $\log_{10}a=\ln a/\ln 10$. The bridge does not depend on $a$. The values $\ln 10$ and $\log_{10}e$ are reciprocals, not equals. Elasticity remains $-\beta$, and inverse domains stay complementary.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Change of base with natural logs reads

$$
\log_{10}a=\frac{\ln a}{\ln 10}
$$

for every $a>0$. Each listed row is an instance of that identity.

Row $Q$ is the normalisation check: $\ln 10/\ln 10=1=\log_{10}10$.

So the statement is True.
""",
            r"""
**B.** → True

The conversion constant $\ln 10$ is a property of the two bases alone. It does not depend on the row argument $a$, so the same bridge factor appears in every row.

So the statement is True.
""",
            r"""
**C.** → False

For demand $Q=AP^{-\beta}$ the log-log elasticity is the constant slope $-\beta$, not $-A$. The scale $A$ never enters the elasticity.

So the statement is False.
""",
            r"""
**D.** → False

Change of base relates the two constants as reciprocals.

$$
\ln 10=\frac{1}{\log_{10}e}
$$

In particular $\ln 10\neq\log_{10}e$, since $\ln 10\approx 2.302$ while $\log_{10}e\approx 0.434$.

Their product is $1$, which already forbids equality unless both equal $\pm 1$.

So the statement is False.
""",
            r"""
**E.** → False

The exponential $b^{t}$ accepts every real input, while $\log_{b}$ accepts only positive inputs. Their natural domains are complementary, not identical.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.33": {
        "solution_overview": r"""
Keep $b>0$, $b\neq 1$, with $x>0$ and real $t$. The inverse pair identities and change of base hold on their natural domains. Confusing $\log_{b}(b^{t})$ with $b^{t}$, or replacing the product law by a product of logs, yields false friends.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Inverse evaluation on the positive ray recovers the original argument.

$$
b^{\log_{b}x}=x\qquad(x>0)
$$

That is half of the inverse-pair package.

Sample: $2^{\log_{2}5}=5$ recovers the positive argument.

So the statement is True.
""",
            r"""
**B.** → True

Inverse evaluation on the real line recovers the original exponent.

$$
\log_{b}(b^{t})=t\qquad(t\in\mathbb{R})
$$

The identity holds for every real $t$.

Sample: $\log_{2}(2^{-3})=-3$ recovers a negative exponent.

So the statement is True.
""",
            r"""
**C.** → False

The left side collapses to the exponent, while the right side is the exponential itself.

$$
\log_{b}(b^{t})=t
$$

$$
b^{t}
$$

These agree only for special $t$ (solving $t=b^{t}$), not universally. The claimed identity fails.

For $t=2$ one would need $2=b^{2}$, which fails for a general base $b$.

So the statement is False.
""",
            r"""
**D.** → True

Change of base with an arbitrary auxiliary base $k>0$, $k\neq 1$, reads

$$
\log_{b}x=\frac{\log_{k}x}{\log_{k}b}
$$

The identity holds for every such $k$, exactly as claimed.

Taking $k=e$ recovers the familiar ratio $\ln x/\ln b$.

So the statement is True.
""",
            r"""
**E.** → False

The correct product law uses a sum, not a product of logarithms.

$$
\log_{b}(xy)=\log_{b}x+\log_{b}y
$$

A concrete counter-example with $b=10$, $x=y=10$ gives left side $2$ and right side $1\cdot 1=1$. The product claim fails.

The product law always adds the logs; multiplying them is a different (false) operation.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.34": {
        "solution_overview": r"""
For $f(x)=\log(ax+b)$ with $a\neq 0$, the inequality $ax+b>0$ rearranges to $x>-b/a$ when $a>0$ and to $x<-b/a$ when $a<0$. In either case the vertical asymptote is $x=-b/a$, and that endpoint is excluded. When $a>0$ the product law splits $\log(ax+b)$ on the whole domain.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Require a positive argument and divide by the positive coefficient $a$.

$$
ax+b>0\implies x>-\frac{b}{a}
$$

That open ray is the natural domain when $a>0$.

Because $a>0$, dividing by $a$ preserves the inequality direction.

So the statement is True.
""",
            r"""
**B.** → True

When $a<0$, dividing the inequality $ax+b>0$ by $a$ reverses the direction.

$$
x<-\frac{b}{a}
$$

That open ray is the natural domain when $a<0$.

A negative leading coefficient flips the ray to the left of the root $-b/a$.

So the statement is True.
""",
            r"""
**C.** → True

In either sign case the argument tends to $0^{+}$ as $x$ approaches $-b/a$ from the admissible side. Hence

$$
f(x)\to-\infty
$$

and the vertical asymptote is the line $x=-b/a$.

From either side that remains admissible, the argument approaches $0$ from above.

So the statement is True.
""",
            r"""
**D.** → False

At $x=-b/a$ the argument vanishes.

$$
a\cdot\!\left(-\frac{b}{a}\right)+b=0
$$

The logarithm of $0$ is undefined, so $f(-b/a)$ is not the value $0$.

The height $0$ occurs where $ax+b=1$, not where $ax+b=0$.

So the statement is False.
""",
            r"""
**E.** → True

Factor the argument when $a>0$.

$$
ax+b=a\left(x+\frac{b}{a}\right)
$$

On the domain one has $x+b/a>0$ and $a>0$, so both factors are positive and the product law applies.

$$
\log(ax+b)=\log a+\log\!\left(x+\frac{b}{a}\right)
$$

So the statement is True.
""",
        ],
    },
    "MATH 10.2.35": {
        "solution_overview": r"""
The data $f(2)=k$ and $f(8)=3k$ are consistent for every base because $8=2^{3}$ and the power law gives $\log_{b}8=3\log_{b}2$. When $k=1$ the unit condition $\log_{b}2=1$ pins $b=2$, after which $f(16)=4$. The power law itself is a background identity.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Rewrite $8$ as a pure power of $2$ and apply the power law for an arbitrary base $b>1$.

$$
8=2^{3}
$$

$$
\log_{b}8=\log_{b}(2^{3})=3\log_{b}2
$$

With $f(2)=k$ this is exactly $f(8)=3k$, so the triple relation is consistent.

So the statement is True.
""",
            r"""
**B.** → True

If $k=1$, then $f(2)=\log_{b}2=1$. The unique base returning height $1$ at the input $2$ is the base itself.

$$
b=2
$$

So $k=1$ pins the base at $2$.

So the statement is True.
""",
            r"""
**C.** → True

With $k=1$ and $b=2$ already recovered, evaluate at $16=2^{4}$.

$$
f(16)=\log_{2}16=\log_{2}(2^{4})=4
$$

The claimed height $4$ matches.

So the statement is True.
""",
            r"""
**D.** → True

The relation $\log_{b}8=3\log_{b}2$ is an instance of the power law and does not depend on the particular base.

$$
\log_{b}(2^{3})=3\log_{b}2\qquad(b>1)
$$

Hence $f(8)=3f(2)$ holds for every base $b>1$.

So the statement is True.
""",
            r"""
**E.** → True

The power law moves a real exponent across a logarithm.

$$
\log(a^{c})=c\log a\qquad(a>0)
$$

It is one of the three fundamental logarithm identities.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.36": {
        "solution_overview": r"""
Peel $L=\log_{3}(\log_{2}(\log_{5}5^{4}))$ inside-out: the innermost value is $4$, then $\log_{2}4=2$, then $L=\log_{3}2$. The nesting is defined, but $\log_{3}2\neq 1$. Graphs never cross vertical asymptotes, bases $>1$ keep logs increasing, and zero arguments are forbidden.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Peel the innermost logarithm first.

$$
\log_{5}(5^{4})=4
$$

The innermost value is exactly $4$.

So the statement is True.
""",
            r"""
**B.** → False

A vertical asymptote is a line the graph approaches but never meets. The graph does not cross that asymptote at any finite point.

So the statement is False.
""",
            r"""
**C.** → False

For every base $b>1$ the logarithm is strictly increasing, not decreasing. Bases in $(0,1)$ reverse monotonicity. The blanket decreasing claim is false.

So the statement is False.
""",
            r"""
**D.** → False

Continue peeling after the innermost value $4$.

$$
\log_{2}4=2
$$

$$
L=\log_{3}2
$$

Since $\log_{3}2\neq 1$, the claim $L=1$ fails.

So the statement is False.
""",
            r"""
**E.** → False

A real logarithm needs a strictly positive argument. At argument $0$ the expression is undefined, so zero is never admitted to a log domain.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.37": {
        "solution_overview": r"""
Demand $Q=AP^{-\beta}$ becomes $\ln Q=\ln A-\beta\ln P$ in log-log coordinates. The slope $E=-\beta$ is constant along the curve; raising $A$ shifts the line vertically without rotating it. Change of base is not restricted to base $10$, and graphs do not cross vertical asymptotes.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Differentiate the log-linear form with respect to $\ln P$.

$$
\ln Q=\ln A-\beta\ln P
$$

$$
E=\frac{d\ln Q}{d\ln P}=-\beta
$$

The right-hand side is independent of $P$, so $E=-\beta$ at every point of the curve.

The slope does not depend on the current price, so every point of the curve carries the same $E$.

So the statement is True.
""",
            r"""
**B.** → True

The same derivative computation shows that the log-log slope equals the constant $-\beta$ everywhere on the curve. Constancy of $d\ln Q/d\ln P$ is exactly the claim.

So the statement is True.
""",
            r"""
**C.** → False

Change of base works with any auxiliary base $k>0$, $k\neq 1$:

$$
\log_{b}a=\frac{\log_{k}a}{\log_{k}b}
$$

It is not restricted to auxiliary base $10$.

So the statement is False.
""",
            r"""
**D.** → False

In log-log coordinates the intercept is $\ln A$. Raising $A$ increases that intercept and shifts the line vertically.

$$
\ln Q=\ln A-\beta\ln P
$$

The slope $-\beta$ is unchanged, so the curve does not rotate.

A vertical shift changes intercept, not slope, in the $(\ln P,\ln Q)$-plane.

So the statement is False.
""",
            r"""
**E.** → False

A vertical asymptote is a line the graph approaches but never meets. The graph does not cross that asymptote at any finite point.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.38": {
        "solution_overview": r"""
Expand $\log(u^{2}vw^{-1})$ with the product, quotient, and power laws to obtain $2\log u+\log v-\log w$. Equivalent writings regroup factors or apply the laws stepwise. The corrupted rearrangement $2\log u+\log(v/w)+\log w$ overshoots by $\log w$. Elasticity remains $-\beta$, not $-A$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Apply the product, power, and reciprocal laws in turn.

$$
\log(u^{2}vw^{-1})=\log(u^{2})+\log v+\log(w^{-1})
$$

$$
\log(u^{2}vw^{-1})=2\log u+\log v-\log w
$$

The claimed expansion matches.

Each law is applied to positive factors $u,v,w$, so every step is legitimate.

So the statement is True.
""",
            r"""
**B.** → True

The intermediate expansion before folding the power and reciprocal is

$$
\log(u^{2})+\log v+\log(w^{-1})
$$

which equals the same value $2\log u+\log v-\log w$. The stepwise form is correct.

So the statement is True.
""",
            r"""
**C.** → True

Reassemble the factors inside a single logarithm.

$$
u^{2}\cdot v\cdot w^{-1}=\frac{u^{2}v}{w}
$$

$$
\log(u^{2}vw^{-1})=\log\!\left(\frac{u^{2}v}{w}\right)
$$

The two writings agree for $u,v,w>0$.

The single-log form is simply the product/quotient laws run in reverse.

So the statement is True.
""",
            r"""
**D.** → False

Expand the corrupted expression with the quotient law.

$$
2\log u+\log\!\left(\frac{v}{w}\right)+\log w=2\log u+\log v-\log w+\log w
$$

$$
=2\log u+\log v
$$

That is larger than the true expansion by $\log w$ whenever $\log w\neq 0$. The claim fails.

So the statement is False.
""",
            r"""
**E.** → False

For demand $Q=AP^{-\beta}$ the log-log elasticity is the constant slope $-\beta$, not $-A$. The scale $A$ never enters the elasticity.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.39": {
        "solution_overview": r"""
For $g(x)=\log((x-p)/(x-q))$ with $p\neq q$, a sign chart of the linear quotient shows positivity off the open interval between $p$ and $q$. Both $x=p$ and $x=q$ are excluded. When $p<q$ the domain is $(-\infty,p)\cup(q,\infty)$. Addition inside a log is not a law.
""",
        "tactical_explanations": [
            r"""
**A.** → True

A quotient of two linear factors is positive when the factors have the same sign, which occurs precisely when $x$ lies strictly outside the open interval with endpoints $p$ and $q$.

$$
\frac{x-p}{x-q}>0\quad\Leftrightarrow\quad x\notin\bigl(\min(p,q),\max(p,q)\bigr)
$$

That is the positivity description in the claim.

So the statement is True.
""",
            r"""
**B.** → True

At $x=q$ the denominator vanishes.

$$
x-q=0
$$

The rational argument is undefined, so $x=q$ is excluded from the domain.

No finite limiting value as $x\to q$ can place the pole into the domain.

So the statement is True.
""",
            r"""
**C.** → True

At $x=p$ the numerator vanishes while the denominator is nonzero (since $p\neq q$).

$$
\frac{p-p}{p-q}=0
$$

The logarithm of $0$ is undefined, so $x=p$ is excluded.

The argument $0$ is forbidden for every real logarithm.

So the statement is True.
""",
            r"""
**D.** → True

When $p<q$, positivity of the quotient holds on the two outer rays.

$$
(-\infty,p)\cup(q,\infty)
$$

That union is the natural domain of $g$.

So the statement is True.
""",
            r"""
**E.** → False

There is no universal addition-inside law. The counter-example $a=b=1$ already kills it:

$$
\log(1+1)=\log 2\neq 0=\log 1+\log 1
$$

So the statement is False.
""",
        ],
    },
    "MATH 10.2.40": {
        "solution_overview": r"""
From $Y=Y_{0}e^{kt}$ with $Y_{0}>0$ and $k\neq 0$, divide and take logs to recover $t=\frac1k\ln(Y/Y_{0})$ for $Y>0$. Positive growth with $Y>Y_{0}$ forces $t>0$, and doubling sets $Y/Y_{0}=2$. The power and quotient laws remain available as background tools.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Divide the growth rule by the positive initial level and take natural logs.

$$
\frac{Y}{Y_{0}}=e^{kt}
$$

$$
\ln\!\left(\frac{Y}{Y_{0}}\right)=kt
$$

Divide by $k\neq 0$ to obtain $t=\frac1k\ln(Y/Y_{0})$ whenever $Y>0$.

Positivity of $Y$ and $Y_{0}$ keeps the log argument $Y/Y_{0}$ admissible.

So the statement is True.
""",
            r"""
**B.** → True

If $k>0$ and $Y>Y_{0}$, the log-ratio is positive.

$$
\ln\!\left(\frac{Y}{Y_{0}}\right)>0
$$

Dividing by the positive rate $k$ keeps the inequality, so $t>0$.

Growth ($k>0$) and a level above baseline ($Y>Y_{0}$) point to a future time $t>0$.

So the statement is True.
""",
            r"""
**C.** → True

Doubling means $Y=2Y_{0}$. Substitute into the recovered time formula.

$$
t=\frac{1}{k}\ln 2=\frac{\ln 2}{k}
$$

when $k>0$. That is the doubling-time formula.

The factor $\ln 2$ is the universal doubling constant in continuous growth.

So the statement is True.
""",
            r"""
**D.** → True

The power law moves a real exponent across a logarithm.

$$
\log(a^{c})=c\log a\qquad(a>0)
$$

It holds independently of the growth model.

So the statement is True.
""",
            r"""
**E.** → True

The quotient law for natural logs reads

$$
\ln\!\left(\frac{Y}{Y_{0}}\right)=\ln Y-\ln Y_{0}\qquad(Y>0,\,Y_{0}>0)
$$

That is exactly the claimed identity.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.41": {
        "solution_overview": r"""
Both $f=\log_{2}$ and $g=\log_{10}$ vanish at $x=1$ and share the asymptote $x=0$. Change of base links them by $\log_{2}x=\ln x/\ln 2$ and $\log_{10}x=\ln x/\ln 10$. In particular $\log_{2}10$ and $\log_{10}2$ are reciprocals, not equals. Bases $>1$ keep both graphs increasing.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Every admissible logarithm vanishes at the argument $1$.

$$
f(1)=\log_{2}1=0,\qquad g(1)=\log_{10}1=0
$$

So the statement is True.
""",
            r"""
**B.** → False

For every base $b>1$ the logarithm is strictly increasing, not decreasing. Bases in $(0,1)$ reverse monotonicity. The blanket decreasing claim is false.

So the statement is False.
""",
            r"""
**C.** → False

There is no universal addition-inside law. The counter-example $a=b=1$ already kills it:

$$
\log(1+1)=\log 2\neq 0=\log 1+\log 1
$$

So the statement is False.
""",
            r"""
**D.** → False

Change of base shows the two values are reciprocals.

$$
\log_{2}10=\frac{\ln 10}{\ln 2},\qquad\log_{10}2=\frac{\ln 2}{\ln 10}
$$

$$
\log_{2}10\cdot\log_{10}2=1
$$

Reciprocals of a number other than $\pm 1$ are unequal, so $f(10)\neq g(2)$.

Numerically $\log_{2}10\approx 3.32$ while $\log_{10}2\approx 0.301$, confirming inequality.

So the statement is False.
""",
            r"""
**E.** → False

Nested logarithms still require every intermediate argument to be positive. The condition $x>0$ alone is not enough.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.42": {
        "solution_overview": r"""
Each row claims $\log_{b}a=n$, which is equivalent to $b^{n}=a$. Rows $P$ and $Q$ satisfy $2^{3}=8$ and $3^{2}=9$. Row $R$ fails because $5^{2}=25\neq 15$, and row $S$ fails because $2^{4}=16\neq 12$. Bases $b>1$ keep logarithms increasing.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Row $P$ claims $\log_{2}8=3$. Check by exponentiating.

$$
2^{3}=8
$$

The identity holds, so row $P$ is consistent.

So the statement is True.
""",
            r"""
**B.** → True

Row $Q$ claims $\log_{3}9=2$. Check by exponentiating.

$$
3^{2}=9
$$

The identity holds, so row $Q$ is consistent.

So the statement is True.
""",
            r"""
**C.** → False

Row $R$ claims $\log_{5}15=2$, which would require $5^{2}=15$. Compute the pure power.

$$
5^{2}=25\neq 15
$$

The announced reason $5^{2}=25$ actually disproves consistency with argument $15$. Row $R$ is not consistent.

The correct value would be $\log_{5}15$, which is not the integer $2$.

So the statement is False.
""",
            r"""
**D.** → False

Row $S$ claims $\log_{2}12=4$, which would require $2^{4}=12$. Compute the pure power.

$$
2^{4}=16\neq 12
$$

Row $S$ is not consistent.

The correct value would be $\log_{2}12$, which is not the integer $4$.

So the statement is False.
""",
            r"""
**E.** → False

For every base $b>1$ the logarithm is strictly increasing, not decreasing. Bases in $(0,1)$ reverse monotonicity. The blanket decreasing claim is false.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.43": {
        "solution_overview": r"""
Substitute $u=\ln x$ into $(\ln x)^{2}-(\ln x)-2=0$ to obtain $u^{2}-u-2=0$. Factoring gives $(u-2)(u+1)=0$, so $u=2$ or $u=-1$, hence $x=e^{2}$ or $x=e^{-1}$. The candidate $x=1$ gives $u=0$, which is not a root. Elasticity remains $-\beta$, not $-A$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Expand the proposed factorisation.

$$
(u-2)(u+1)=u^{2}-u-2
$$

That matches the quadratic obtained after $u=\ln x$, so the factorisation is correct.

The middle term $-u$ matches $-2u+u$ from the expansion of $(u-2)(u+1)$.

So the statement is True.
""",
            r"""
**B.** → True

Set each factor equal to zero.

$$
u-2=0\implies u=2
$$

$$
u+1=0\implies u=-1
$$

Those are the two solutions in the $u$-variable.

No other roots exist for a quadratic that already factors completely over the reals.

So the statement is True.
""",
            r"""
**C.** → True

Return to $x$ through the exponential inverse $x=e^{u}$.

$$
u=2\implies x=e^{2}
$$

$$
u=-1\implies x=e^{-1}
$$

Those are the corresponding positive $x$-roots.

So the statement is True.
""",
            r"""
**D.** → False

For demand $Q=AP^{-\beta}$ the log-log elasticity is the constant slope $-\beta$, not $-A$. The scale $A$ never enters the elasticity.

So the statement is False.
""",
            r"""
**E.** → False

At $x=1$ one has $\ln 1=0$. Substitute $u=0$ into the quadratic.

$$
0^{2}-0-2=-2\neq 0
$$

So $x=1$ is not a root of the original equation.

The quadratic at $u=0$ returns $-2$, not $0$, so $x=1$ is extraneous to the solve.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.44": {
        "solution_overview": r"""
Change of base writes $f_{b}(x)=\ln x/\ln b$. For fixed $x>1$ the numerator is positive, so increasing the base $b>1$ enlarges $\ln b$ and decreases $f_{b}(x)$. Normalisation $f_{b}(b)=1$ and $f_{b}(1)=0$ hold for every admissible base; the latter does not depend on $b$.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Write both logs through change of base with $x>1$ fixed.

$$
f_{b}(x)=\frac{\ln x}{\ln b},\qquad f_{c}(x)=\frac{\ln x}{\ln c}
$$

If $1<b<c$ then $0<\ln b<\ln c$, so the first ratio is strictly larger.

$$
f_{b}(x)>f_{c}(x)
$$

So the statement is True.
""",
            r"""
**B.** → True

By definition the logarithm of its own base equals one.

$$
f_{b}(b)=\log_{b}b=1
$$

for every base $b>1$.

So the statement is True.
""",
            r"""
**C.** → True

Differentiate the change-of-base form with respect to the base, treating $x>1$ as fixed.

$$
\frac{\partial}{\partial b}\log_{b}x=-\frac{\ln x}{(\ln b)^{2}}\cdot\frac{1}{b}
$$

For $x>1$ one has $\ln x>0$, and the remaining factors are positive, so the whole derivative is negative.

So the statement is True.
""",
            r"""
**D.** → False

Normalisation at the argument $1$ is independent of the base.

$$
f_{b}(1)=\log_{b}1=0
$$

for every admissible $b$. The value does not depend on $b$, so the claim fails.

So the statement is False.
""",
            r"""
**E.** → True

Change of base with natural logs rewrites every member of the family.

$$
f_{b}(x)=\log_{b}x=\frac{\ln x}{\ln b}
$$

for $b>1$ and $x>0$.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.45": {
        "solution_overview": r"""
The shifted rule $f(x)=\log_{2}(x-1)$ has vertical asymptote $x=1$, vanishes at $x=2$, and takes the value $1$ at $x=3$. Its natural domain is $(1,\infty)$. The ordinary quotient law remains available as a background identity.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The graph of $\log_{2}(x-1)$ is the graph of $\log_{2}$ translated one unit to the right, so its vertical asymptote is

$$
x=1
$$

The suspected rule matches the given asymptote.

As $x\to 1^{+}$ the argument $x-1\to 0^{+}$, so $f(x)\to-\infty$ along that vertical line.

So the statement is True.
""",
            r"""
**B.** → True

Substitute the claimed zero.

$$
f(2)=\log_{2}(2-1)=\log_{2}1=0
$$

The evaluation matches the given intercept condition.

The argument at $x=2$ is exactly the normalisation point $1$ of $\log_{2}$.

So the statement is True.
""",
            r"""
**C.** → True

Substitute the claimed unit point.

$$
f(3)=\log_{2}(3-1)=\log_{2}2=1
$$

The evaluation matches the given height $1$.

The argument at $x=3$ is exactly the base $2$, so the height must be $1$.

So the statement is True.
""",
            r"""
**D.** → True

The quotient law holds for every fixed base and every positive factor pair.

$$
\log\!\left(\frac{a}{b}\right)=\log a-\log b\qquad(a>0,\,b>0)
$$

It does not depend on the horizontal shift.

So the statement is True.
""",
            r"""
**E.** → True

The argument of $f$ must be strictly positive.

$$
x-1>0\implies x>1
$$

Hence the natural domain is the open ray $(1,\infty)$.

Endpoints are excluded: at $x=1$ the argument vanishes and $f$ is undefined.

So the statement is True.
""",
        ],
    },
    "MATH 10.2.46": {
        "solution_overview": r"""
For $h_{c}(x)=\log_{2}(\log_{2}(x-c))$ the outer logarithm needs $\log_{2}(x-c)>0$, hence $x-c>1$, i.e. $x>c+1$. The threshold $c+2$ is too strict. Zero arguments and unchecked nestings remain forbidden, and the parameter $c$ itself never lies in the domain.
""",
        "tactical_explanations": [
            r"""
**A.** → False

The outer logarithm needs $\log_{2}(x-c)>0$. With base $2>1$ that means

$$
x-c>2^{0}=1
$$

hence $x>c+1$. The threshold $c+2$ is stricter than necessary, so it is not the natural domain.

So the statement is False.
""",
            r"""
**B.** → True

The outer logarithm needs a positive input:

$$
\log_{2}(x-c)>0
$$

With base $2>1$ that rearranges to

$$
x-c>1\qquad\Leftrightarrow\qquad x>c+1
$$

The inner condition $x-c>0$ is weaker, so the natural domain is exactly $x>c+1$.

So the statement is True.
""",
            r"""
**C.** → False

A real logarithm needs a strictly positive argument. At argument $0$ the expression is undefined, so zero is never admitted to a log domain.

So the statement is False.
""",
            r"""
**D.** → False

Nested logarithms still require every intermediate argument to be positive. The condition $x>0$ alone is not enough.

So the statement is False.
""",
            r"""
**E.** → False

At $x=c$ the innermost argument vanishes.

$$
x-c=0
$$

Then $\log_{2}0$ is undefined, so $c$ itself never lies in the domain of $h_{c}$.

Even the weaker inner condition $x>c$ already excludes the parameter value $x=c$.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.47": {
        "solution_overview": r"""
The figure is $f=\log_{3}$ and the table lists claimed values at the pure powers $1$, $3$, and $9$. Those claims are $\log_{3}1=0$, $\log_{3}3=1$, and $\log_{3}9=2$, all correct. Bases $>1$ keep logs increasing, and addition inside a log is not a law.
""",
        "tactical_explanations": [
            r"""
**A.** → True

Evaluate the graph rule at $x=9=3^{2}$.

$$
f(9)=\log_{3}9=\log_{3}(3^{2})=2
$$

The table's entry $2$ at $x=9$ matches the graph.

Two multiplicative factors of $3$ raise the base-$3$ log from $0$ to $2$.

So the statement is True.
""",
            r"""
**B.** → True

Evaluate at the normalisation point $x=1$.

$$
f(1)=\log_{3}1=0
$$

The table's entry $0$ at $x=1$ matches the graph.

So the statement is True.
""",
            r"""
**C.** → False

Evaluate at the unit point $x=3$.

$$
f(3)=\log_{3}3=1
$$

The table lists $1$ at $x=3$, which is correct. The claim that the table's entry is wrong therefore fails.

The unit point $(3,1)$ is part of the definition of $\log_{3}$, so the table is right there.

So the statement is False.
""",
            r"""
**D.** → False

For every base $b>1$ the logarithm is strictly increasing, not decreasing. Bases in $(0,1)$ reverse monotonicity. The blanket decreasing claim is false.

So the statement is False.
""",
            r"""
**E.** → False

There is no universal addition-inside law. The counter-example $a=b=1$ already kills it:

$$
\log(1+1)=\log 2\neq 0=\log 1+\log 1
$$

So the statement is False.
""",
        ],
    },
    "MATH 10.2.48": {
        "solution_overview": r"""
The claimed chain equates a quotient of logs with a log of a quotient. The first step $\log a-\log b=\log(a/b)$ is the quotient law. The second step equating that to $(\log a)/(\log b)$ fails in general; the counter-example $a=e^{2}$, $b=e$ yields $1$ versus $2$. Change of base is a different identity and does not repair the false step.
""",
        "tactical_explanations": [
            r"""
**A.** → True

The quotient law converts a difference of logs into a log of a quotient, for every positive factor pair.

$$
\log a-\log b=\log\!\left(\frac{a}{b}\right)\qquad(a>0,\,b>0)
$$

The first equality in the chain is exactly that identity.

So the statement is True.
""",
            r"""
**B.** → True

The second step of the chain equates a log of a quotient with a quotient of logs.

$$
\log\!\left(\frac{a}{b}\right)\stackrel{?}{=}\frac{\log a}{\log b}
$$

Those are different operations. The equality fails in general for the same fixed base, so the statement's diagnosis is correct.

So the statement is True.
""",
            r"""
**C.** → True

Take $a=e^{2}$ and $b=e$ in natural logs.

$$
\log\!\left(\frac{e^{2}}{e}\right)=\log e=1
$$

$$
\frac{\log(e^{2})}{\log e}=\frac{2}{1}=2
$$

Left side $1$ and right side $2$ disagree, confirming the second step fails.

So the statement is True.
""",
            r"""
**D.** → False

Change of base works with any auxiliary base $k>0$, $k\neq 1$:

$$
\log_{b}a=\frac{\log_{k}a}{\log_{k}b}
$$

It is not restricted to auxiliary base $10$.

So the statement is False.
""",
            r"""
**E.** → False

Change of base is the identity

$$
\log_{b}a=\frac{\ln a}{\ln b}
$$

That rewrites a logarithm in a new auxiliary base; it does not turn the false friend $\log(a/b)=(\log a)/(\log b)$ into a true equality inside the original chain. The proposed repair does not salvage the chain.

So the statement is False.
""",
        ],
    },
    "MATH 10.2.49": {
        "solution_overview": r"""
With $a<b$, both $p(x)=\log(b-x)+\log(x-a)$ and $q(x)=\log((b-x)(x-a))$ require a positive argument structure that forces the open interval $(a,b)$. On that interval the product law makes $p=q$. Nested logs still need positive intermediate values.
""",
        "tactical_explanations": [
            r"""
**A.** → True

For $p$, each factor must be positive separately.

$$
b-x>0,\qquad x-a>0\implies x\in(a,b)
$$

For $q$, the product $(b-x)(x-a)$ is positive on the same open interval when $a<b$. Endpoints make a factor $0$, so both natural domains equal $(a,b)$.

So the statement is True.
""",
            r"""
**B.** → True

On $(a,b)$ both linear factors are positive, so the product law applies.

$$
\log(b-x)+\log(x-a)=\log\bigl((b-x)(x-a)\bigr)
$$

Hence $p(x)=q(x)$ for every $x\in(a,b)$.

So the statement is True.
""",
            r"""
**C.** → True

In general a product can be positive when both factors are negative, so a single logarithm of a product might a priori live on a larger set than a sum of logs. For these two linear factors with $a<b$, a sign chart shows that never happens.

$$
x<a:\quad (b-x)(x-a)<0
$$

$$
a<x<b:\quad (b-x)(x-a)>0
$$

$$
x>b:\quad (b-x)(x-a)<0
$$

The product is positive only on $(a,b)$, so $q$ cannot enlarge the domain beyond that of $p$.

So the statement is True.
""",
            r"""
**D.** → True

The sum $p$ is defined only when each logarithm is defined, so both factors must be positive at once.

$$
b-x>0,\qquad x-a>0
$$

That forces $x\in(a,b)$ and cannot be enlarged.

So the statement is True.
""",
            r"""
**E.** → False

Nested logarithms still require every intermediate argument to be positive. The condition $x>0$ alone is not enough.

So the statement is False.
""",
        ],
    },
}


if __name__ == "__main__":
    import json
    import re
    from pathlib import Path

    HEADER_RE = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\s*$", re.M)
    CLOSE_RE = re.compile(r"So the statement is (True|False)\.\s*$")
    LETTERS = "ABCDE"

    assert len(BODIES_102) == 49, len(BODIES_102)
    tasks_path = Path("/tmp/ch10_tasks_102.json")
    tasks = json.loads(tasks_path.read_text(encoding="utf-8")) if tasks_path.exists() else []
    by_id = {t["case_id"]: t for t in tasks}
    for cid, body in BODIES_102.items():
        teas = body["tactical_explanations"]
        assert len(teas) == 5, cid
        key = by_id.get(cid, {}).get("answer_key")
        for i, e in enumerate(teas):
            let = LETTERS[i]
            lines_ = e.strip().splitlines()
            m = HEADER_RE.match(lines_[0])
            assert m and m.group(1) == let, (cid, let, lines_[:1])
            cm = CLOSE_RE.search(e.strip())
            assert cm and cm.group(1) == m.group(2), (cid, let)
            if key is not None:
                verd = "True" if key[i] else "False"
                assert m.group(2) == verd, (cid, let, m.group(2), verd)
                assert cm.group(1) == verd, (cid, let)
            assert e.count("$$") % 2 == 0, (cid, let)
    print("BODIES_102 ok", len(BODIES_102))
