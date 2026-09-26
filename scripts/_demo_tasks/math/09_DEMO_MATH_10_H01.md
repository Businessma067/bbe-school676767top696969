# DEMO MATH 10.H01

ak=[True, False, True, False, False]

current_lens=[515, 423, 524, 398, 414]

## title
Entangled exponential–log pair — hard compare

## context
Define the entangled pair
$$
f(t)=4e^{0.3t},\qquad g(t)=16e^{-0.6t}\qquad(t\in\mathbb{R}),
$$
and the log-gap
$$
h(t)=\ln f(t)-\ln g(t)=\ln\!\bigl(f(t)/g(t)\bigr).
$$
Also write $p(t)=f(t)\,g(t)$. Decide whether each claim is true or false.

## statement A
$f(t)=g(t)$ has the unique real solution $t=\dfrac{1}{0.9}\ln 4=\dfrac{\ln 4}{0.9}$.

## current A
**A.** → True

Set the two trajectories equal:

$$
4e^{0.3t}=16e^{-0.6t}
$$

Divide by $4$, then multiply by $e^{0.6t}$:

$$
e^{0.3t}=4e^{-0.6t}\qquad\Rightarrow\qquad e^{0.9t}=4
$$

$$
t=\frac{\ln 4}{0.9}=\frac{1}{0.9}\ln 4
$$

Numerically, $\ln 4=2\ln 2\approx 1.386294$, so $t^{*}\approx 1.540327$. Uniqueness: $t\mapsto e^{0.9t}$ is strictly increasing. Verify via the ratio:

$$
\frac{f(t^{*})}{g(t^{*})}=\frac{1}{4}e^{0.9t^{*}}=\frac{1}{4}\cdot 4=1
$$

so $f(t^{*})=g(t^{*})$ holds.

So the statement is True.

## statement B
$h(t)=\ln 4+0.9t$ for every real $t$, so $h$ is affine with positive slope $0.9$.

## current B
**B.** → False

Form the ratio $f(t)/g(t)$:

$$
\frac{f(t)}{g(t)}=\frac{4e^{0.3t}}{16e^{-0.6t}}
$$

$$
\frac{4}{16}=\frac14
$$

$$
\frac{f(t)}{g(t)}=\frac14 e^{0.9t}
$$

Take the log:

$$
h(t)=\ln\frac14+0.9t
$$

$$
\ln\frac14=-\ln 4
$$

$$
h(t)=-\ln 4+0.9t
$$

The constant term is $-\ln 4$, not $+\ln 4$. The claimed formula $\ln 4+0.9t$ is therefore wrong (though the slope $0.9$ is correct).

So the statement is False.

## statement C
If $t$ increases by $\dfrac{10}{3}$, then $f$ is multiplied by $e$ and $g$ is multiplied by $e^{-2}$.

## current C
**C.** → True

Compute the two exponent shifts separately:

$$
0.3\cdot\frac{10}{3}=1
$$

$$
-0.6\cdot\frac{10}{3}=-2
$$

Apply the exponent law to $f$:

$$
f\Bigl(t+\frac{10}{3}\Bigr)=4e^{0.3t+1}
$$

$$
4e^{0.3t+1}=4e^{0.3t}\cdot e^{1}
$$

$$
4e^{0.3t}\cdot e^{1}=e\cdot f(t)
$$

Apply the exponent law to $g$:

$$
g\Bigl(t+\frac{10}{3}\Bigr)=16e^{-0.6t-2}
$$

$$
16e^{-0.6t-2}=16e^{-0.6t}\cdot e^{-2}
$$

$$
16e^{-0.6t}\cdot e^{-2}=e^{-2}g(t)
$$

So $f$ is multiplied by $e$ and $g$ by $e^{-2}$.

So the statement is True.

## statement D
The product $p(t)=f(t)g(t)$ is minimized over $\mathbb{R}$ at the same $t$ where $f=g$, and that minimum value equals $64$.

## current D
**D.** → False

The product simplifies to a pure exponential:

$$
p(t)=4e^{0.3t}\cdot 16e^{-0.6t}
$$

$$
4\cdot 16=64
$$

$$
p(t)=64e^{-0.3t}
$$

Because the exponent $-0.3t$ is strictly decreasing in $t$, $p$ has no global minimum on $\mathbb{R}$; it decays toward $0$ as $t\to\infty$ instead of attaining a minimum at the crossing point. Both halves of the claim fail.

So the statement is False.

## statement E
Because $f(0)=4<16=g(0)$ and $f$ grows while $g$ decays, one has $f(t)<g(t)$ for every $t>0$.

## current E
**E.** → False

At $t=0$ one does have $f(0)=4<16=g(0)$, and $f$ grows while $g$ decays. But letter A shows they meet at the positive crossing

$$
t^{*}=\frac{\ln 4}{0.9}
$$

$$
t^{*}>0
$$

where $f(t^{*})=g(t^{*})$, and for all $t>t^{*}$ one has $f(t)>g(t)$ because $f$ is increasing and $g$ is decreasing past that point. The claim that $f(t)<g(t)$ for every $t>0$ is therefore false.

So the statement is False.