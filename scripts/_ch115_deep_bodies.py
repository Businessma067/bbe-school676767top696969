"""Deep tutoring bodies for Chapter 11.5 differentiation exam tasks.

Raw prose WITHOUT **A.** headers and WITHOUT the final
'So the statement is True/False.' wrapper.
"""

DEEP_BODIES = {
    "MATH 11.161": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Profit is $P=R-C=-0.5Q^{3}+6Q^{2}+30Q-200$, hence

$$P^{\prime}(Q)=-1.5Q^{2}+12Q+30=-1.5(Q-10)(Q+2).$$
The positive critical point is $Q=10$, and the derivative is already negative at $Q=15$.

The derivation therefore disagrees with the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

Average cost is $AC(Q)=\dfrac{C(Q)}{Q}=0.5Q^{2}-9Q+60+\dfrac{200}{Q}$. Therefore

$$AC^{\prime}(Q)=Q-9-\dfrac{200}{Q^{2}}.$$
The one-unit change is approximated by $AC^{\prime}(Q_{0})$.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

Those steps confirm the claim.""",
        r"""On a piecewise schedule, steepness at a point is the derivative of the active branch. Compare those one-sided slopes directly; continuity of the level does not force equal one-sided derivatives.

On the left branch, $T^{\prime}(Q)=Q+4$, giving $T^{\prime}(11)=15$. On the right branch $T^{\prime}(Q)=12$, so $T^{\prime}(15)=12$ and $15>12$.

The calculation supports the claim.""",
        r"""If two revenue curves start at the same height and one has strictly larger marginal revenue on an interval, integrating that inequality shows the first curve ends strictly higher.

Integrate the strict marginal-revenue inequality from $6$ to $9$:

$$R_e(9)-R_e(6)>R(9)-R(6).$$
The equal starting revenues therefore give $R_e(9)>R(9)$, with the inequality in the opposite direction.

With equal levels at the left endpoint $a$, $\int_a^b\bigl(R_e^{\prime}(Q)-R^{\prime}(Q)\bigr)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e^{\prime}-R^{\prime}$ on $(a,b)$.

The sign reading shows the claim is wrong.""",
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Marginal revenue is $R^{\prime}(Q)=-6Q+90$. It vanishes at $Q=15$, and

$$R^{\prime\prime}(Q)=-6<0,$$
so this is the revenue maximum and $15>12$.

The worked FOC matches the claim.""",
    ],
    "MATH 11.162": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

After subtraction, $P=-\dfrac13Q^{3}+4Q^{2}+20Q-80$, so

$$P^{\prime}(Q)=-Q^{2}+8Q+20=-(Q-10)(Q+2).$$
Thus $Q=10$ is stationary.

The derivation therefore agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The two marginal quantities are

$$R^{\prime}(Q)=40-Q,\qquad C^{\prime}(Q)=Q^{2}-9Q+20.$$
At $8$ they are $32$ and $12$, respectively.

Those steps confirm the claim.""",
        r"""On a piecewise schedule, steepness at a point is the derivative of the active branch. Compare those one-sided slopes directly; continuity of the level does not force equal one-sided derivatives.

The left staffing slope is $H^{\prime}(Q)=Q+2$, hence $H^{\prime}(18)=20$. The later branch has slope $H^{\prime}(24)=14$, so the first slope is larger.

The calculation supports the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

Dividing first gives $AC=\dfrac13Q^{2}-\dfrac92Q+20+\dfrac{80}{Q}$, so

$$AC^{\prime}(Q)=\dfrac23Q-\dfrac92-\dfrac{80}{Q^{2}}.$$
At $Q=5$ this is $\dfrac{10}{3}-\dfrac92-\dfrac{80}{25}<0$.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The sign reading and algebra confirm the claim.""",
        r"""If two revenue curves start at the same height and one has strictly larger marginal revenue on an interval, integrating that inequality shows the first curve ends strictly higher.

A smaller marginal revenue over the interval means a smaller accumulated revenue gain:

$$R_e(10)-R_e(6)<R(10)-R(6).$$
Equal revenue at $6$ consequently implies lower rival revenue at $10$.

With equal levels at the left endpoint $a$, $\int_a^b\bigl(R_e^{\prime}(Q)-R^{\prime}(Q)\bigr)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e^{\prime}-R^{\prime}$ on $(a,b)$.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.163": [
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R(p)=120p-4p^{2}$, so $R^{\prime}(p)=120-8p$. Its zero is $p=15$, and $R^{\prime\prime}(p)=-8<0$.

The derivation therefore agrees with the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Point elasticity is

$$\varepsilon(p)=\dfrac{D^{\prime}(p)p}{D(p)}=\dfrac{-4p}{120-4p}.$$
At $p=15$, this is $-\dfrac{60}{60}=-1$.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

Those steps confirm the claim.""",
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $p=15$, quantity is $60$ and revenue is at its maximum, so $MR=0$. But

$$MC=C^{\prime}(60)=2+0.1(60)=8,$$
which rules out a profit optimum there.

The calculation runs against the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The price-side revenue derivative at $10$ is

$$R^{\prime}(10)=120-80=40>0.$$
A sufficiently small increase therefore raises revenue.

The sign reading and algebra confirm the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Average cost simplifies to $AC(Q)=2+0.05Q$. Thus

$$AC^{\prime}(Q)=0.05>0$$
throughout the positive-output domain.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The worked FOC matches the claim.""",
    ],
    "MATH 11.164": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Profit is $\pi(L)=2Q(L)-12L-40=48L-2L^{2}-40$. Therefore

$$\pi^{\prime}(L)=48-4L=0$$
at $L=12$, with $\pi^{\prime\prime}=-4<0$.

The derivation therefore agrees with the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Marginal product is $Q^{\prime}(L)=30-2L$. At $12$ it is $6$, so

$$VMP=2\cdot6=12,$$
exactly the wage.

Those steps confirm the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The marginal product calculation gives

$$Q^{\prime}(12)=30-24=6>0.$$
Profit can peak while physical output is still increasing because labour is costly.

The calculation supports the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Immediately to the right of $12$, $\pi^{\prime}(L)=48-4L<0$. Extra labour then lowers, rather than raises, profit.

The sign reading shows the claim is wrong.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Physical output has $Q^{\prime}(L)=0$ at $L=15$. That output maximum is later than the profit maximum at $L=12$.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.165": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The left marginal cost is $2x+20$, giving $C^{\prime}_{-}(25)=70$. The right marginal cost is $45$, so the jump is from $70$ down to $45$.

The derivation therefore disagrees with the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

For the first branch,

$$AC(x)=x+20+\dfrac{100}{x},\qquad AC^{\prime}(x)=1-\dfrac{100}{x^{2}}.$$
The positive zero is $x=10$, and the derivative changes from negative to positive there.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

Those steps confirm the claim.""",
        r"""On a piecewise schedule, steepness at a point is the derivative of the active branch. Compare those one-sided slopes directly; continuity of the level does not force equal one-sided derivatives.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

On the first branch, $P=40x-\dfrac32x^{2}-100$. Thus

$$P^{\prime}(x)=40-3x,$$
whose zero is $x=\dfrac{40}{3}$.

The calculation supports the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Marginal revenue is $R^{\prime}(x)=60-x$. At $x=30$ this equals $30$, which is positive.

The sign reading shows the claim is wrong.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Both cost formulas give $1225$ at $x=25$, establishing continuity. Their one-sided slopes are nevertheless

$$C^{\prime}_{-}(25)=70\ne45=C^{\prime}_{+}(25),$$
so continuity alone does not give differentiability.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.166": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Differentiate $V(r)=2\pi r^{3}$:

$$V^{\prime}(r)=6\pi r^{2},\qquad V^{\prime}(2)=24\pi.$$
With $\Delta r=0.02$, the differential estimate is $24\pi(0.02)=0.48\pi$.

The derivation therefore agrees with the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Elasticity is

$$\dfrac{r}{V(r)}V^{\prime}(r)=\dfrac{r}{2\pi r^{3}}(6\pi r^{2})=3.$$
The cubic radius relationship supplies elasticity $3$, not $2$.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

Those steps contradict the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Revenue is $R(Q)=Q(72-Q)=72Q-Q^{2}$. Since

$$R^{\prime}(Q)=72-2Q=0$$
at $Q=36$ and $R^{\prime\prime}=-2<0$, that output maximises revenue.

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The calculation supports the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Tax-adjusted revenue is $(72-Q-6)Q=66Q-Q^{2}$. Its derivative $66-2Q$ vanishes at

$$Q=33,$$
not at $30$.

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The sign reading shows the claim is wrong.""",
        r"""If two revenue curves start at the same height and one has strictly larger marginal revenue on an interval, integrating that inequality shows the first curve ends strictly higher.

Integrating the strict derivative inequality from $10$ to $18$ yields

$$R_e(18)-R_e(10)>R(18)-R(10).$$
The equal initial revenues leave the rival strictly higher at $18$.

With equal levels at the left endpoint $a$, $\int_a^b\bigl(R_e^{\prime}(Q)-R^{\prime}(Q)\bigr)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e^{\prime}-R^{\prime}$ on $(a,b)$.

The worked FOC matches the claim.""",
    ],
    "MATH 11.167": [
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Pre-tax profit is $P=38Q-\dfrac34Q^{2}-180$, so

$$P^{\prime}(Q)=38-\frac32Q.$$
The zero is $Q=\dfrac{76}{3}$, with negative second derivative $-\dfrac{3}{2}$.

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The derivation therefore agrees with the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

The levy changes profit to $P_t=34Q-\dfrac34Q^{2}-180$. Therefore

$$P_t^{\prime}(Q)=34-\frac32Q=0$$
at $Q=\dfrac{68}{3}$, not $22$.

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

Those steps contradict the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

$AC(Q)=\dfrac14Q+12+\dfrac{180}{Q}$, giving

$$AC^{\prime}(Q)=\frac14-\dfrac{180}{Q^{2}}.$$
At $20$, this is $\dfrac{1}{4}-\dfrac{180}{400}=-\dfrac{1}{5}<0$.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The calculation supports the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Demand in price form is $Q(p)=100-2p$, and revenue is $100p-2p^{2}$. At its maximum $p=25$,

$$\varepsilon=\dfrac{-2(25)}{100-2(25)}=-1.$$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The sign reading and algebra confirm the claim.""",
        r"""If two revenue curves start at the same height and one has strictly larger marginal revenue on an interval, integrating that inequality shows the first curve ends strictly higher.

Lower marginal revenue makes the rival's accumulated gain smaller:

$$R_e(18)-R_e(10)<R(18)-R(10).$$
Equal revenue at $10$ therefore implies lower rival revenue at $18$.

With equal levels at the left endpoint $a$, $\int_a^b\bigl(R_e^{\prime}(Q)-R^{\prime}(Q)\bigr)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e^{\prime}-R^{\prime}$ on $(a,b)$.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.168": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Profit is $\pi(L)=240\sqrt L-20L-200$, so

$$\pi^{\prime}(L)=\dfrac{120}{\sqrt L}-20.$$
It is zero at $\sqrt L=6$, hence $L=36$, and the derivative changes from positive to negative.

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The derivation therefore agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The output ratio is

$$\dfrac{Q(2L)}{Q(L)}=\dfrac{80\sqrt{2L}}{80\sqrt L}=\sqrt2.$$
This is less than $2$, reflecting diminishing marginal product.

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

Those steps contradict the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Using $Q(L)=80L^{\dfrac{1}{2}}$,

$$\varepsilon_L=\dfrac{LQ^{\prime}(L)}{Q(L)}=\frac12.$$
The exponent is the constant output elasticity.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculation supports the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$Q^{\prime}(L)=\dfrac{40}{\sqrt} L$. At $L=36$,

$$VMP=3\left(\dfrac{40}{6}\right)=20,$$
which exactly equals the hourly wage.

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The sign reading and algebra confirm the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

At $L=36$ the marginal product is

$$Q^{\prime}(36)=\dfrac{40}{6}=\dfrac{20}{3}>0.$$
Profit stops increasing because the value of this product equals the wage, not because output stops rising.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.169": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$P=R-C$ has derivative

$$P^{\prime}(q)=-q^{2}+8q+48=-(q-12)(q+4).$$
At $q=12$, $P^{\prime\prime}(q)=-2q+8=-16<0$.

The derivation therefore agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R^{\prime}(q)=80-2q$ and $C^{\prime}(q)=q^{2}-10q+32$. At $12$ both calculations give

$$R^{\prime}(12)=56=C^{\prime}(12).$$

Those steps confirm the claim.""",
        r"""On a piecewise schedule, steepness at a point is the derivative of the active branch. Compare those one-sided slopes directly; continuity of the level does not force equal one-sided derivatives.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The two level calculations are

$$15^{2}+10(15)=375,\qquad40(15)-225=375.$$
The piecewise schedule meets without a gap.

The calculation supports the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The left derivative is $2q+10$, so it approaches $40$ at $15$. The right derivative is also $40$, hence

$$H^{\prime}_{-}(15)=H^{\prime}_{+}(15)=40.$$
There is no derivative jump.

The sign reading shows the claim is wrong.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

$AC(q)=\dfrac13q^{2}-5q+32+\dfrac{240}{q}$, so

$$AC^{\prime}(q)=\frac23q-5-\dfrac{240}{q^{2}}.$$
At $10$, this equals $\dfrac{20}{3}-5-\dfrac{12}{5}<0$.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The worked FOC matches the claim.""",
    ],
    "MATH 11.170": [
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Profit is $P=100Q-\dfrac52Q^{2}-600$, hence

$$P^{\prime}(Q)=100-5Q.$$
Its zero is $20$ and $P^{\prime\prime}=-5<0$.

The derivation therefore agrees with the claim.""",
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Revenue is $R=120Q-2Q^{2}$, whose derivative is $120-4Q$. It vanishes at

$$Q=30,$$
not at $20$.

Those steps contradict the claim.""",
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $Q=20$,

$$MR=R^{\prime}(20)=120-80=40,\qquad MC=C^{\prime}(20)=20+20=40.$$
The two marginal quantities agree.

The calculation supports the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Demand is $Q(p)=60-\dfrac{p}{2}$. At $Q=20$, price is $80$, so

$$\varepsilon=\dfrac{-1}{2}\dfrac{80}{20}=-2.$$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The sign reading and algebra confirm the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The commission makes profit $P_c=90Q-\dfrac52Q^{2}-600$. Thus

$$P_c^{\prime}(Q)=90-5Q=0$$
at $Q=18$.

The worked FOC matches the claim.""",
    ],
    "MATH 11.171": [
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

With $K=16$, output is $Q(L)=24\sqrt L$, so

$$\pi(L)=240\sqrt L-30L-400,\qquad \pi^{\prime}(L)=\dfrac{120}{\sqrt L}-30.$$
The derivative is zero at $\sqrt L=4$, or $L=16$.

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The derivation therefore agrees with the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Holding capital fixed,

$$\dfrac{Q(2L,16)}{Q(L,16)}=2^{\dfrac{1}{2}}=\sqrt2.$$
The labour exponent prevents a doubling of output.

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

Those steps contradict the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Differentiating with respect to labour gives $Q_L=6L^{-\dfrac{1}{2}}K^{\dfrac{1}{4}}$. Thus

$$\dfrac{LQ_L}{Q}=\frac12,$$
the exponent on $L$.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculation supports the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $K=16$, $Q_L=\dfrac{12}{\sqrt} L$. At $L=16$,

$$VMP=10\left(\dfrac{12}{4}\right)=30,$$
which is the wage.

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The sign reading and algebra confirm the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The marginal product at that input is

$$Q_L(16,16)=\dfrac{12}{4}=3>0.$$
It is the marginal value relative to the wage that determines profit maximisation.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.172": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Profit is $\pi(m)=0.5(100m-2m^{2})-8m-50=42m-m^{2}-50$. Hence

$$\pi^{\prime}(m)=42-2m=0$$
at $m=21$, with $\pi^{\prime\prime}=-2<0$.

The derivation therefore agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$E^{\prime}(m)=100-4m$, so at $21$ the value of marginal product is

$$0.5E^{\prime}(21)=0.5(16)=8.$$
This equals the visit wage.

Those steps confirm the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Physical energy is maximised when $E^{\prime}(m)=100-4m=0$, giving

$$m=25.$$
The wage makes the profit-maximising visit count lower.

The calculation runs against the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The two levels at $10$ are both $100$. Their slopes are

$$S^{\prime}_{-}(10)=2(10)=20,\qquad S^{\prime}_{+}(10)=20,$$
so the rule is differentiable as well as continuous.

The sign reading shows the claim is wrong.""",
        r"""On a piecewise schedule, steepness at a point is the derivative of the active branch. Compare those one-sided slopes directly; continuity of the level does not force equal one-sided derivatives.

On the first branch $S^{\prime}(8)=16$; on the second branch $S^{\prime}(12)=20$. Since $16<20$, the claimed ordering is reversed.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.173": [
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R(p)=p(200-5p)=200p-5p^{2}$. Therefore

$$R^{\prime}(p)=200-10p=0$$
at $p=20$, with negative second derivative.

The derivation therefore agrees with the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

In output form, $p(Q)=40-0.2Q$, so

$$P(Q)=35Q-0.3Q^{2}-300,\qquad P^{\prime}(Q)=35-0.6Q.$$
The stationary output is $Q=\dfrac{175}{3}$, not $100$.

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

Those steps contradict the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $p=20$, quantity is $100$. The elasticity is

$$\varepsilon=\dfrac{-5(20)}{200-5(20)}=-1.$$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculation supports the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$AC=5+0.1Q+\dfrac{300}{Q}$, so

$$AC^{\prime}(Q)=0.1-\dfrac{300}{Q^{2}}.$$
At $50$ it is $0.1-\dfrac{300}{2500}=-0.02<0$.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The sign reading and algebra confirm the claim.""",
        r"""If two revenue curves start at the same height and one has strictly larger marginal revenue on an interval, integrating that inequality shows the first curve ends strictly higher.

Over the interval from $40$ to $50$,

$$R_e(50)-R_e(40)>R(50)-R(40).$$
Equal revenue at $40$ then gives strictly higher rival revenue at $50$.

With equal levels at the left endpoint $a$, $\int_a^b\bigl(R_e^{\prime}(Q)-R^{\prime}(Q)\bigr)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e^{\prime}-R^{\prime}$ on $(a,b)$.

The worked FOC matches the claim.""",
    ],
    "MATH 11.174": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Profit has derivative

$$P^{\prime}(x)=126+12x-1.5x^{2}=-1.5(x-14)(x+6).$$
At $14$, $P^{\prime\prime}=12-3(14)<0$.

The derivation therefore agrees with the claim.""",
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R^{\prime}(x)=150-6x$ vanishes at

$$x=25,$$
and $R^{\prime\prime}=-6<0$. This is above $20$.

Those steps confirm the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

$AC=0.5x^{2}-9x+24+\dfrac{500}{x}$, hence

$$AC^{\prime}(x)=x-9-\dfrac{500}{x^{2}}.$$
At $10$ the value is $10-9-5=-4<0$, so average cost is falling.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The calculation runs against the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Both loading levels at $20$ are $500$. Their slopes are also equal:

$$L^{\prime}_{-}(20)=2(20)+5=45=L^{\prime}_{+}(20).$$
No derivative jump occurs.

The sign reading shows the claim is wrong.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Lower marginal revenue accumulates to a lower increase:

$$R_s(18)-R_s(10)<R(18)-R(10).$$
The equal starting revenues imply the subcontractor is lower at $18$.

The worked FOC matches the claim.""",
    ],
    "MATH 11.175": [
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$MR=30-\dfrac23Q$ and $MC=\dfrac13Q+6$. At $Q=24$,

$$MR=30-16=14=8+6=MC.$$

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The derivation therefore agrees with the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Tax-adjusted profit is

$$P_t(Q)=20Q-\frac12Q^{2}-120.$$
Thus $P_t^{\prime}(Q)=20-Q$, which is zero at $Q=20$ with negative second derivative.

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

Those steps confirm the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $p=10$, demand is $Q=90-30=60$. Thus

$$\varepsilon=\dfrac{-3(10)}{60}=-\frac12,$$
not $-1$.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculation runs against the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

At $20$, the first formula approaches $\frac12(400)+20=220$, while the second gives $420-200=220$. The one-sided slopes are

$$20+1=21=21,$$
so both continuity and differentiability hold.

The sign reading and algebra confirm the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

$AC=\dfrac{Q}{6}+6+\dfrac{120}{Q}$, hence

$$AC^{\prime}(Q)=\frac16-\dfrac{120}{Q^{2}}.$$
At $30$ this is $\dfrac{1}{6}-\dfrac{120}{900}=\dfrac{1}{30}>0$, so average cost is rising.

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.176": [
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

Profit is $\pi(a)=100\sqrt{a}-a-40$. Differentiating,

$$\pi^{\prime}(a)=\dfrac{50}{\sqrt{a}}-1.$$
Setting $\pi^{\prime}=0$ gives $\sqrt{a}=50$, so $a=2500$. Also $\pi^{\prime\prime}<0$ there

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

The derivation therefore agrees with the claim.""",
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

Marginal revenue of advertising is $R^{\prime}(a)=5Q^{\prime}(a)=\dfrac{50}{\sqrt{a}}$. At $a=2500$ this equals $1$, matching the marginal cost of one more euro spent

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

Those steps confirm the claim.""",
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

$Q(100)=200$ and $Q(400)=400$, so listenership doubles when advertising is multiplied by four, not by two. Under a square-root response, doubling $a$ multiplies $Q$ by $\sqrt{2}$ only

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

The calculation runs against the claim.""",
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

At $a=100$, $\pi^{\prime}(100)=\dfrac{50}{10}-1=4>0$, so a little more advertising still raises profit

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

The sign reading and algebra confirm the claim.""",
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

A decreasing marginal product does not forbid an interior profit max; it is exactly what makes $\pi^{\prime}$ cross from $+$ to $-$ once

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.177": [
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

From $y=120-2x$ one has $A=x(120-2x)=120x-2x^{2}$ on $(0,60)$

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

The derivation therefore agrees with the claim.""",
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$A^{\prime}(x)=120-4x=0$ at $x=30$. Also $A^{\prime\prime}=-4<0$, so this is a maximum

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

Those steps confirm the claim.""",
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$y=120-2\cdot30=60$

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

The calculation supports the claim.""",
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$A^{\prime\prime}(30)=-4<0$, so the second-derivative test confirms a strict local maximum

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

The sign reading shows the claim is wrong.""",
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Just left of $x=30$, $A^{\prime}>0$, so decreasing the width a little lowers area rather than raising it

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.178": [
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$TC^{\prime}(Q)=-\dfrac{20000}{Q^{2}}+2=0$ gives $Q^{2}=10000$, so $Q=100$

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

The derivation therefore agrees with the claim.""",
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

The two terms in $TC^{\prime}$ balance when $\dfrac{20000}{Q^{2}}=2$; that is the EOQ first-order condition equating the magnitudes of the two marginal cost pieces

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

Those steps confirm the claim.""",
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Holding cost is $\dfrac{hQ}{2}=2Q$; at $Q=100$ this is $200$

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

The calculation supports the claim.""",
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$TC(100)=200+200=400$ while $TC(50)=400+100=500>400$, so halving the order raises total cost

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

The sign reading shows the claim is wrong.""",
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$TC^{\prime\prime}(Q)=\dfrac{40000}{Q^{3}}>0$ for $Q>0$, confirming a minimum

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

The worked FOC matches the claim.""",
    ],
    "MATH 11.179": [
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R(Q)=36Q-3Q^{2}$, so $R^{\prime}=36-6Q=0$ at $Q=6$, and $R^{\prime\prime}=-6<0$

The derivation therefore agrees with the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Demand is $Q=\dfrac{(36-p)}{3}$, so $D^{\prime}(p)=-\dfrac{1}{3}$. At $Q=6$ one has $p=18$, and

$$El_{Q}(p)=\dfrac{D^{\prime}(p)\cdot p}{Q}=\dfrac{(-\dfrac{1}{3})\cdot18}{6}=-1$$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

Those steps confirm the claim.""",
        r"""Revenue is maximised where marginal revenue vanishes and the second derivative is negative (for a typical smooth hill-shaped $R$). That need not be the profit maximum.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Profit $P=R-6Q=30Q-3Q^{2}$ has $P^{\prime}=30-6Q=0$ at $Q=5$, not at the revenue max $Q=6$

The calculation runs against the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R^{\prime}(4)=36-24=12$

The sign reading and algebra confirm the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Falling price does not force falling revenue while $MR>0$; here $R^{\prime}>0$ on $(0,6)$

The worked FOC does not match the claim.""",
    ],
    "MATH 11.180": [
        r"""Marginal utility is $U^{\prime}$; risk aversion for a smooth $U$ is the statement $U^{\prime\prime}<0$. A mean-preserving spread then lowers expected utility by Jensen's inequality.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$U^{\prime}(w)=20-0.1w>0$ on $(0,200)$ because $0.1w<20$ there

The derivation therefore agrees with the claim.""",
        r"""Marginal utility is $U^{\prime}$; risk aversion for a smooth $U$ is the statement $U^{\prime\prime}<0$. A mean-preserving spread then lowers expected utility by Jensen's inequality.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$U^{\prime\prime}(w)=-0.1<0$, so $U$ is strictly concave — the usual calculus signature of risk aversion

Those steps confirm the claim.""",
        r"""Marginal utility is $U^{\prime}$; risk aversion for a smooth $U$ is the statement $U^{\prime\prime}<0$. A mean-preserving spread then lowers expected utility by Jensen's inequality.

$U^{\prime}=0$ at $w=200$, which is the right endpoint of the open interval; on $(0,200)$ utility is still strictly increasing, so there is no interior maximum below $200$

The calculation runs against the claim.""",
        r"""Marginal utility is $U^{\prime}$; risk aversion for a smooth $U$ is the statement $U^{\prime\prime}<0$. A mean-preserving spread then lowers expected utility by Jensen's inequality.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$U^{\prime}(50)=20-5=15$

The sign reading and algebra confirm the claim.""",
        r"""Marginal utility is $U^{\prime}$; risk aversion for a smooth $U$ is the statement $U^{\prime\prime}<0$. A mean-preserving spread then lowers expected utility by Jensen's inequality.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

For a strictly concave $U$, Jensen's inequality goes the other way: a mean-preserving spread lowers expected utility

The worked FOC does not match the claim.""",
    ],
    "MATH 11.181": [
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

From $2x+4y=40$ one has $y=10-\frac12 x$, so $U=x(10-\frac12 x)=10x-\frac12 x^{2}$

At an interior optimum the MRS equals the price ratio $\dfrac{p_x}{p_y}$, not the reciprocal; corners with a zero factor give $U=0$.

The derivation therefore agrees with the claim.""",
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$U^{\prime}(x)=10-x=0$ at $x=10$, and $U^{\prime\prime}=-1<0$

At an interior optimum the MRS equals the price ratio $\dfrac{p_x}{p_y}$, not the reciprocal; corners with a zero factor give $U=0$.

Those steps confirm the claim.""",
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$y=10-5=5$

The calculation supports the claim.""",
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

The correct price ratio in the MRS condition is $\dfrac{p_{x}}{p_}{y}$. Here $\dfrac{y}{x}=\frac12=\dfrac{p_{x}}{p_}{y}$, not $\dfrac{p_{y}}{p_}{x}=2$

The sign reading shows the claim is wrong.""",
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

With $y=0$ one has $U=0$, far below the interior maximum $U=50$

At an interior optimum the MRS equals the price ratio $\dfrac{p_x}{p_y}$, not the reciprocal; corners with a zero factor give $U=0$.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.182": [
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

Between $4$ and $9$ the cubic sits above the axis (two factors negative after $4$ until $9$), so $P^{\prime}>0$ and a little more output raises profit

The derivation therefore agrees with the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

Sign chart: $P^{\prime}>0$ on $(0,1)$, $P^{\prime}<0$ on $(1,4)$, $P^{\prime}>0$ on $(4,9)$, $P^{\prime}<0$ after $9$. So $Q=4$ is a local minimum ($-$ to $+$) and $Q=9$ a local maximum ($+$ to $-$), not the other way around

Classify the critical point by the sign change of the first derivative: $+\to-$ is a local maximum and $-\to+$ is a local minimum.

Those steps contradict the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

A local max at $Q=9$ need not beat the endpoint or the local max at $Q=1$ without comparing levels. The figure alone does not give $P(1)$ versus $P(9)$; claiming $Q=9$ must be the global max is unjustified

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculation runs against the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

A vertical shift of $-6$ moves the graph down, so the old root at height $0$ becomes height $-6\neq 0$. New zeros solve the shifted equation and generally move

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The sign reading and algebra confirm the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

At $Q=6$, $P^{\prime}(6)=-(6-1)(6-4)(6-9)=-(5)(2)(-3)=30>15$. After subtracting $6$ one still has $24>0$, so expansion remains profitable at $Q=6$

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The worked FOC matches the claim.""",
    ],
    "MATH 11.183": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Left of $Q=8$, MR sits above MC on the figure, so $MR>MC$ and expanding raises profit

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The derivation therefore agrees with the claim.""",
        r"""On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost and falls once marginal cost overtakes it. Read which coloured curve is higher at the named output, and locate crossings where $MR=MC$. Crossing height is a marginal value, not total profit.

The profit first-order condition is $MR=MC$ (brown meets green), not $MR=AC$. Purple meeting brown is a different, generally wrong, locus

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

Those steps contradict the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $Q=12$, MC is clearly above MR, so $MR<MC$ and cutting output a little raises profit

The calculation supports the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

MC crosses MR from below while MR falls, so $MR-MC$ changes $+$ to $-$ — a local profit max

The sign reading and algebra confirm the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Crossing height is the common marginal value $MR=MC$, not the stock of total profit

The worked FOC does not match the claim.""",
    ],
    "MATH 11.184": [
        r"""When a figure plots $f$, $f^{\prime}$, and $f^{\prime\prime}$ together, zeros of $f^{\prime}$ mark turning points of $f$, while zeros of $f^{\prime\prime}$ with a sign change mark inflections. The peak of $f^{\prime}$ is steepest climb of $f$, not a peak of $f$ itself.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Green changes $-$ to $+$ at $x=1$ (local min of brown) and $+$ to $-$ at $x=5$ (local max of brown)

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The derivation therefore agrees with the claim.""",
        r"""When a figure plots $f$, $f^{\prime}$, and $f^{\prime\prime}$ together, zeros of $f^{\prime}$ mark turning points of $f$, while zeros of $f^{\prime\prime}$ with a sign change mark inflections. The peak of $f^{\prime}$ is steepest climb of $f$, not a peak of $f$ itself.

Purple's zero is where $f^{\prime\prime}=0$; the figure shows purple changing from $+$ to $-$ there, so brown changes from concave up to concave down — an inflection

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

Those steps confirm the claim.""",
        r"""When a figure plots $f$, $f^{\prime}$, and $f^{\prime\prime}$ together, zeros of $f^{\prime}$ mark turning points of $f$, while zeros of $f^{\prime\prime}$ with a sign change mark inflections. The peak of $f^{\prime}$ is steepest climb of $f$, not a peak of $f$ itself.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Negative $f^{\prime\prime}$ means $f^{\prime}$ is decreasing: green slopes down wherever purple is below the axis

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculation supports the claim.""",
        r"""When a figure plots $f$, $f^{\prime}$, and $f^{\prime\prime}$ together, zeros of $f^{\prime}$ mark turning points of $f$, while zeros of $f^{\prime\prime}$ with a sign change mark inflections. The peak of $f^{\prime}$ is steepest climb of $f$, not a peak of $f$ itself.

The peak of green is where brown's slope is largest, not where brown peaks. Brown peaks where green crosses through zero near $x=5$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The sign reading shows the claim is wrong.""",
        r"""When a figure plots $f$, $f^{\prime}$, and $f^{\prime\prime}$ together, zeros of $f^{\prime}$ mark turning points of $f$, while zeros of $f^{\prime\prime}$ with a sign change mark inflections. The peak of $f^{\prime}$ is steepest climb of $f$, not a peak of $f$ itself.

At $x=3$, green is still positive (throughput still rising) and purple near zero only marks an inflection of $f$, not a max of $f$. The throughput max is near $x=5$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.185": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Differentiate term by term: $C^{\prime}=3Q^{2}-12Q+40$

The derivation therefore agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$C^{\prime\prime}(Q)=6Q-12=0$ at $Q=2$, and $C^{\prime\prime}$ changes sign there, so $Q=2$ is an inflection of $C$

An inflection of total cost is where $C^{\prime\prime}$ changes sign — equivalently where $MC$ has a turn — and that need not be where $AC=MC$.

Those steps confirm the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$C^{\prime\prime}(Q)<0$ on $(0,2)$, so $C^{\prime}$ is decreasing there

The calculation supports the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Inflection of $C$ is about $C^{\prime\prime}=0$; it need not solve $AC=MC$. Those meet where $AC^{\prime}=0$, a different condition

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The sign reading shows the claim is wrong.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$C(0)=10$ is the fixed cost

The worked FOC matches the claim.""",
    ],
    "MATH 11.186": [
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Expand $P(a+h)=(a+h)^{2}-6(a+h)+20$ and subtract $P(a)$; dividing by $h$ leaves $2a+h-6$

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

The derivation therefore agrees with the claim.""",
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$P^{\prime}(x)=2x-6$, so $P^{\prime}(4)=2$

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

Those steps confirm the claim.""",
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$P(4)=16-24+20=12$, so the tangent is $y-12=2(x-4)$, i.e. $y=2x+4$, not $y=2x$

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

The calculation runs against the claim.""",
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$P^{\prime}<0$ on $(-\infty,3)$ and $P^{\prime}>0$ on $(3,\infty)$, so profit is increasing for $x>3$

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

The sign reading shows the claim is wrong.""",
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$P^{\prime}$ changes $-$ to $+$ at $x=3$, and $P^{\prime\prime}(3)=2>0$, so $x=3$ is a local minimum

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

The worked FOC matches the claim.""",
    ],
    "MATH 11.187": [
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Power rule: $C^{\prime}(Q)=80\cdot\frac12 Q^{-\dfrac{1}{2}}=\dfrac{40}{\sqrt{Q}}$

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The derivation therefore agrees with the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$AC(Q)=\dfrac{80}{\sqrt{Q}}$ has derivative $-40 Q^{-\dfrac{3}{2}}<0$ for $Q>0$

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

Those steps confirm the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$AC=\dfrac{80}{\sqrt{Q}}$ and $MC=\dfrac{40}{\sqrt{Q}}$, so $MC=\frac12 AC$ identically

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The calculation supports the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$C(2Q)=80\sqrt{2Q}=\sqrt{2}\,C(Q)$, so cost rises by factor $\sqrt{2}$, not $2$

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The sign reading shows the claim is wrong.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$C^{\prime}(16)=\dfrac{40}{4}=10$

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The worked FOC matches the claim.""",
    ],
    "MATH 11.188": [
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$\pi^{\prime}(t)=16-2t=0$ at $t=8$, and $\pi^{\prime\prime}=-2<0$

The derivation therefore agrees with the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$D$ and $\pi$ differ by the constant $10$, so they share the same maximiser $t=8$

Those steps confirm the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$\pi^{\prime}(4)=16-8=8>0$

The calculation supports the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$\pi(0)=-10<0$

The sign reading and algebra confirm the claim.""",
        r"""Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign of $P^{\prime\prime}$ then classifies a local max versus a local min.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$D(12)=16\cdot12-144=48$ and $D(8)=64$, so volume falls from $8$ to $12$, not rises. Profit also falls because one is past the max

The worked FOC does not match the claim.""",
    ],
    "MATH 11.189": [
        r"""Brown shows marginal utility; green subtracts a constant opportunity cost. Cups are worthwhile while green is positive. The stop rule is the zero of green ($\mathrm{MU}=$ opportunity cost), not a peak of brown.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Brown crosses zero near $c=45$, so $\mathrm{MU}>0$ on $(0,45)$ and utility rises until then

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The derivation therefore agrees with the claim.""",
        r"""Brown shows marginal utility; green subtracts a constant opportunity cost. Cups are worthwhile while green is positive. The stop rule is the zero of green ($\mathrm{MU}=$ opportunity cost), not a peak of brown.

Green crosses zero near $c=30$; that is where $\mathrm{MU}=6$, the stop rule with constant opportunity cost $6$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

Those steps confirm the claim.""",
        r"""Brown shows marginal utility; green subtracts a constant opportunity cost. Cups are worthwhile while green is positive. The stop rule is the zero of green ($\mathrm{MU}=$ opportunity cost), not a peak of brown.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $c=10$, brown is $18-4=14$, so green is $8$, which is below $10$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculation runs against the claim.""",
        r"""Brown shows marginal utility; green subtracts a constant opportunity cost. Cups are worthwhile while green is positive. The stop rule is the zero of green ($\mathrm{MU}=$ opportunity cost), not a peak of brown.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Constant negative slope of MU means $U^{\prime\prime}<0$: strict concavity

The sign reading and algebra confirm the claim.""",
        r"""Brown shows marginal utility; green subtracts a constant opportunity cost. Cups are worthwhile while green is positive. The stop rule is the zero of green ($\mathrm{MU}=$ opportunity cost), not a peak of brown.

Optimal cups solve $\mathrm{MU}=6$ (green's zero), not a maximum of brown. Brown falls throughout the window and has no interior peak

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.190": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$S^{\prime}=3t^{2}-12t+9=3(t^{2}-4t+3)=3(t-1)(t-3)$

The derivation therefore agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $t=1$, $S^{\prime}$ changes $+$ to $-$ (for $t<1$ both factors negative so $S^{\prime}>0$; between $1$ and $3$, $S^{\prime}<0$)

Classify the critical point by the sign change of the first derivative: $+\to-$ is a local maximum and $-\to+$ is a local minimum.

Those steps confirm the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $t=3$, $S^{\prime}$ changes $-$ to $+$

Classify the critical point by the sign change of the first derivative: $+\to-$ is a local maximum and $-\to+$ is a local minimum.

The calculation supports the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Compare values: $S(0)=0$, $S(1)=1-6+9=4$, $S(3)=27-54+27=0$, $S(4)=64-96+36=4$. So $t=1$ and $t=4$ tie at height $4$; the global max on the closed interval is not uniquely at $t=1$

A local maximum among critical points need not be global on a closed interval; compare levels at endpoints and at every critical point before claiming uniqueness.

The sign reading shows the claim is wrong.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$S^{\prime\prime}=6t-12$, so $S^{\prime\prime}(1)=-6<0$ and $S^{\prime\prime}(3)=6>0$

Classify the critical point by the sign change of the first derivative: $+\to-$ is a local maximum and $-\to+$ is a local minimum.

The worked FOC matches the claim.""",
    ],
    "MATH 11.191": [
        r"""Two marginal-profit curves on one figure are compared by sign and by integration when profit levels start equal. A crossing height is a common $P^{\prime}$ value, not a level of total profit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Brown crosses from $+$ to $-$ at $Q=6$, so $A$ has a local max there

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The derivation therefore agrees with the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

Green is still positive at $Q=6$ (zero only at $9$), so $B$'s profit still rises there

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

Those steps confirm the claim.""",
        r"""Two marginal-profit curves on one figure are compared by sign and by integration when profit levels start equal. A crossing height is a common $P^{\prime}$ value, not a level of total profit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Integrating $P_A^{\prime}>P_B^{\prime}$ from $0$ to $6$ with equal starts yields $P_A(6)>P_B(6)$

The calculation supports the claim.""",
        r"""Two marginal-profit curves on one figure are compared by sign and by integration when profit levels start equal. A crossing height is a common $P^{\prime}$ value, not a level of total profit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

On $(6,9)$ brown is negative and green positive: $A$ contracts, $B$ expands

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The sign reading and algebra confirm the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

Where the marginal curves meet is a common $P^{\prime}$ value, not a level of total profit

The worked FOC does not match the claim.""",
    ],
    "MATH 11.192": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The marked point $(15,30)$ gives $R=15\cdot30=450$

The derivation therefore agrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Linear demand $D=60-2p$ has $\varepsilon=\dfrac{-2p}{60-2p}$; at $p=15$ this is $\dfrac{-30}{30}=-1$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

Those steps confirm the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At unit-elastic revenue max, $MR=0$, but $Q=30$ and $C^{\prime}(30)=4+\dfrac{30}{10}=7\neq0$, so not a profit max

The calculation runs against the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$D(10)=40$ from the figure; $C^{\prime}(Q)=4+\dfrac{Q}{10}$, so $C^{\prime}(40)=8$. Also $R^{\prime}(p)=60-4p$, so $R^{\prime}(10)=20>0$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The sign reading and algebra confirm the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$AC(Q)=4+\dfrac{Q}{20}$ has positive derivative $\dfrac{1}{20}$

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The worked FOC matches the claim.""",
    ],
    "MATH 11.193": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $Q=12$, MR is above MC on the figure

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The derivation therefore agrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The purple–brown crossing is left of the green–brown crossing, so the tax lowers optimal output

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

Those steps contradict the claim.""",
        r"""On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost and falls once marginal cost overtakes it. Read which coloured curve is higher at the named output, and locate crossings where $MR=MC$. Crossing height is a marginal value, not total profit.

Purple is MC plus tax; meeting brown means $MR=\mathrm{MC}+\mathrm{tax}$

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The calculation supports the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $Q=20>16$, MC is above MR pre-tax

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The sign reading and algebra confirm the claim.""",
        r"""On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost and falls once marginal cost overtakes it. Read which coloured curve is higher at the named output, and locate crossings where $MR=MC$. Crossing height is a marginal value, not total profit.

Post-tax FOC uses purple, not the old green. Equivalently $MR=\mathrm{MC}+4$, not $MR=\mathrm{MC}$

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.194": [
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$y=60-2x$, so $A=x(60-2x)=60x-2x^{2}$ on $(0,30)$

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

The derivation therefore agrees with the claim.""",
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$A^{\prime}=60-4x=0$ at $x=15$, and $A^{\prime\prime}<0$

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

Those steps confirm the claim.""",
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R^{\prime}=24-A=0$ at $A=24$, $R^{\prime\prime}<0$

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

The calculation supports the claim.""",
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

Max area is $A(15)=450$, but revenue peaks at $A=24\ll450$. Flooding the market with area destroys price; the two maximisers differ

Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, so the unique critical point is the global maximum there.

The sign reading shows the claim is wrong.""",
        r"""With a linear fencing constraint, eliminate one length, write area or revenue as a function of a single free variable, then maximise with ordinary single-variable calculus on the open interval allowed by the fence budget.

$A=24-\dfrac12 p$ wait demand from $p=24-\frac12 A$ gives $A=48-2p$, $\varepsilon=\dfrac{-2p}{48-2p}$. At $A=24$, $p=12$, so $\varepsilon=\dfrac{-24}{24}=-1$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The worked FOC matches the claim.""",
    ],
    "MATH 11.195": [
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$\sqrt{16}=4$, so $AC=20$ and $MC=10$, matching the marked heights

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The derivation therefore agrees with the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Identically $MC=\dfrac12 AC$ for this square-root technology

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

Those steps confirm the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Falling $AC$ and $MC$ do not make $C$ fall: $C^{\prime}=MC>0$, so total cost still rises

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The calculation runs against the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$\dfrac{C(18)}{C(9)}=\dfrac{\sqrt{18}}{\sqrt{9}}=\sqrt{2}$

Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling average with a falling total.

The sign reading and algebra confirm the claim.""",
        r"""Under square-root learning $C(Q)=c\sqrt{Q}$, both average and marginal cost fall in $Q$, and the identity $MC=\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$, not by $2$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$AC^{\prime}=-\dfrac{40}{Q^{\dfrac{3}{2}}}<0$, so AC is still falling at $Q=25$

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The worked FOC matches the claim.""",
    ],
    "MATH 11.196": [
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Expand and cancel: the difference quotient is $2a+h-8$

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

The derivation therefore agrees with the claim.""",
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

A constant fee vanishes upon differentiation: $P^{\prime}-0=P^{\prime}$

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

Those steps contradict the claim.""",
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$P^{\prime}=2x-8$ changes $-$ to $+$ at $x=4$, and the fee does not alter that

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

The calculation supports the claim.""",
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R^{\prime}=40-2p=0$ at $p=20$; $\varepsilon=\dfrac{-p}{40-p}=-1$ there

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The sign reading and algebra confirm the claim.""",
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\to 0$ to recover $P^{\prime}(a)$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$P^{\prime}(5)=2$, the usual marginal interpretation of the derivative

After simplifying the quotient to a linear expression in $h$, the limit $h\to 0$ matches direct differentiation of the quadratic profit formula.

The worked FOC matches the claim.""",
    ],
    "MATH 11.197": [
        r"""When a figure plots $f$, $f^{\prime}$, and $f^{\prime\prime}$ together, zeros of $f^{\prime}$ mark turning points of $f$, while zeros of $f^{\prime\prime}$ with a sign change mark inflections. The peak of $f^{\prime}$ is steepest climb of $f$, not a peak of $f$ itself.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$C^{\prime\prime}=0$ with sign change is an inflection of $C$; equivalently MC has a stationary point there

An inflection of total cost is where $C^{\prime\prime}$ changes sign — equivalently where $MC$ has a turn — and that need not be where $AC=MC$.

The derivation therefore agrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$C^{\prime\prime}<0$ means $C^{\prime}$ falls and $C$ is concave down

Those steps confirm the claim.""",
        r"""Brown and green on the figure are average and marginal cost. Falling $AC$ or $MC$ does not mean total cost falls: $C^{\prime}=MC>0$ still holds. Compare heights and identities such as $MC=\dfrac12 AC$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$AC$ is minimised where $AC^{\prime}=0$, equivalently $MC=AC$, not where $MC$ alone is minimised

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The calculation runs against the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Green at $Q=8$ reads near $4$, and brown is climbing

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The sign reading and algebra confirm the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Positive MC means $C^{\prime}>0$, so $C$ rises

The worked FOC matches the claim.""",
    ],
    "MATH 11.198": [
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Zero of $U^{\prime}$ from $+$ to $-$ at $x=10$ is the maximum of reduced $U$

At an interior optimum the MRS equals the price ratio $\dfrac{p_x}{p_y}$, not the reciprocal; corners with a zero factor give $U=0$.

The derivation therefore agrees with the claim.""",
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

From $y=10-\dfrac12 x$, at $x=10$ one has $y=5$

Those steps confirm the claim.""",
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Positive $U^{\prime}$ means increasing $x$ (and cutting $y$ along the budget) raises $U$

At an interior optimum the MRS equals the price ratio $\dfrac{p_x}{p_y}$, not the reciprocal; corners with a zero factor give $U=0$.

The calculation supports the claim.""",
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$U^{\prime}=10-x$, so $U^{\prime}(4)=6$, as on the figure

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The sign reading and algebra confirm the claim.""",
        r"""Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced single-variable function. Corner solutions with a zero factor kill product utility.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The corner $y=0$ gives $U=0$, the worst product value, not a max

At an interior optimum the MRS equals the price ratio $\dfrac{p_x}{p_y}$, not the reciprocal; corners with a zero factor give $U=0$.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.199": [
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$TC^{\prime}=-\dfrac{20000}{Q^{2}}+2=0$ gives $Q=100$

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

The derivation therefore agrees with the claim.""",
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$TC^{\prime\prime}=\dfrac{40000}{Q^{3}}>0$

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

Those steps confirm the claim.""",
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Factoring $S^{\prime}$ yields those critical points with the usual sign chart

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

The calculation supports the claim.""",
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$S(1)=S(4)=4$, so the global max on the closed interval is not unique to $t=1$

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

The sign reading shows the claim is wrong.""",
        r"""EOQ balances a falling ordering-cost term against a rising holding-cost term. Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

EOQ equates the two cost pieces: each equals $200$ when $Q=100$

Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\dfrac{KD}{h/2}$; at that EOQ the ordering and holding cost pieces are equal.

The worked FOC matches the claim.""",
    ],
    "MATH 11.200": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Brown's $-$ to $+$ at $2$ and $+$ to $-$ at $8$ give min then max of $P$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The derivation therefore agrees with the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

Negative $P^{\prime\prime}$ is concave-down profit

Those steps confirm the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

Peak of $P^{\prime}$ is max slope of $P$; it lines up with $P^{\prime\prime}=0$

The calculation supports the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

$P^{\prime\prime}=0$ is an inflection of $P$, not a max. The max is where $P^{\prime}=0$ with $+$ to $-$ at $Q=8$

The sign reading shows the claim is wrong.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply.

The sign of $P^{\prime}$ alone governs monotonicity; an inflection inside an increasing stretch is allowed

The worked FOC matches the claim.""",
    ],
    "MATH 11.201": [
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

$Q^{\prime}=10\cdot\dfrac34 a^{-\dfrac{1}{4}}=\dfrac{15}{2}a^{-\dfrac{1}{4}}$, so $R^{\prime}=8Q^{\prime}=60\,a^{-\dfrac{1}{4}}$

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

The derivation therefore agrees with the claim.""",
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

$60 a^{-\dfrac{1}{4}}=1$ gives $a^{\dfrac{1}{4}}=60$, so $a=60^{4}$, not $60^{2}$

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

Those steps contradict the claim.""",
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

$16^{\dfrac{1}{4}}=2$, hence $a^{-\dfrac{1}{4}}=\dfrac12$ and $R^{\prime}=30>1$

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

The calculation supports the claim.""",
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

A concave response still allows $R^{\prime}(a)-1$ to change $+$ to $-$ once

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

The sign reading and algebra confirm the claim.""",
        r"""When revenue is chained through listenership, differentiate with the chain rule: marginal revenue of advertising equals (euros per listener) times (listeners per euro). An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$\dfrac{Q(2a)}{Q(a)}=2^{\dfrac{3}{4}}\neq 2$

Because $Q$ is concave in advertising spend, $\pi^{\prime}$ is strictly decreasing and crosses zero at most once, so the critical point is the unique interior maximum.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.202": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $Q=20$, $p=10$, so $pQ-C=200-80=120$, not $150$

The derivation therefore disagrees with the claim.""",
        r"""Brown and green on the figure are average and marginal cost. Falling $AC$ or $MC$ does not mean total cost falls: $C^{\prime}=MC>0$ still holds. Compare heights and identities such as $MC=\dfrac12 AC$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R=20Q-\dfrac12 Q^{2}$ gives $R^{\prime}=20-Q$; set $MR=MC=4$

Those steps confirm the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

A constant fee in profit does not shift the $MR=MC$ condition

The calculation runs against the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$Q=16$ and $p=20-\dfrac12\cdot16=12$

The sign reading and algebra confirm the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

From $Q=40-2p$, at $p=10$ one has $\varepsilon=\dfrac{-2\cdot10}{20}=-1$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The worked FOC matches the claim.""",
    ],
    "MATH 11.203": [
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Correctly, $AC=\dfrac13 Q^{2}-4Q+30+\dfrac{90}{Q}$, so $AC^{\prime}=\dfrac23 Q-4-\dfrac{90}{Q^{2}}$, not $Q-\dfrac83-\dfrac{90}{Q^{2}}$

The derivation therefore disagrees with the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$AC^{\prime}(6)=\dfrac23\cdot6-4-\dfrac{90}{36}=4-4-2.5=-2.5<0$

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

Those steps confirm the claim.""",
        r"""If two revenue curves start at the same height and one has strictly larger marginal revenue on an interval, integrating that inequality shows the first curve ends strictly higher.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Integrating $R_e^{\prime}>R^{\prime}$ from $5$ to $8$ with $R_e(5)=R(5)$ yields $R_e(8)>R(8)$

With equal levels at the left endpoint $a$, $\int_a^b\bigl(R_e^{\prime}(Q)-R^{\prime}(Q)\bigr)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e^{\prime}-R^{\prime}$ on $(a,b)$.

The calculation supports the claim.""",
        r"""Average cost is total cost divided by output. Form $AC=\dfrac{C}{Q}$ before differentiating; the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$AC^{\prime}=0$ rearranges to $MC=AC$

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The sign reading and algebra confirm the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$C^{\prime\prime}=2Q-8=0$ at $Q=4$, with sign change

An inflection of total cost is where $C^{\prime\prime}$ changes sign — equivalently where $MC$ has a turn — and that need not be where $AC=MC$.

The worked FOC matches the claim.""",
    ],
    "MATH 11.204": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Revenue peaks at $MR=0$, the green zero near $Q=10$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The derivation therefore agrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$MR=MC$ means green at height $10$, i.e. $40-2Q=10$, so $Q=15$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

Those steps confirm the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

At $Q=15$, brown is $p=40-15=25$, not $30$

Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculation runs against the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most of the claim.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

The marked pair at $Q=10$ shows $p=20$ above $MR=0$

The sign reading and algebra confirm the claim.""",
        r"""Brown and green on the figure are average and marginal cost. Falling $AC$ or $MC$ does not mean total cost falls: $C^{\prime}=MC>0$ still holds. Compare heights and identities such as $MC=\dfrac12 AC$.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$MR=MC$ is not the $MC=AC$ condition for minimum average cost

The fixed-cost term $\dfrac{F}{Q}$ in $AC$ produces the $-\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; that is why average cost can fall even when marginal cost is positive.

The worked FOC does not match the claim.""",
    ],
    "MATH 11.205": [
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$R=30Q-\dfrac13 Q^{2}$, so $MR=30-\dfrac23 Q$

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The derivation therefore agrees with the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$MC=\dfrac45 Q+8$. Setting $MR=MC$ gives $30-\dfrac23 Q=\dfrac45 Q+8$, hence $22=\dfrac{22}{15}Q$, so $Q=15$

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

Those steps confirm the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

Post-tax $MC=\dfrac45 Q+13$. The same algebra with $8$ replaced by $13$ yields a smaller positive root than $15$

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The calculation supports the claim.""",
        r"""Point price elasticity is $\varepsilon=\dfrac{D^{\prime}(p)\,p}{D(p)}$. For ordinary downward-sloping demand, revenue peaks where $\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side.

Write the relevant derivative from the stem, solve or sign-chart it, and only then compare with the numerical assertion in the claim.

$MR=0$ at $Q=45$. Then $p=30-15=15$, and with $Q=90-3p$ one has $\varepsilon=\dfrac{-3p}{Q}=\dfrac{-45}{45}=-1$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The sign reading and algebra confirm the claim.""",
        r"""A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged.

Revenue depends only on the demand curve; a tax on the firm does not move the $MR=0$ output. It moves the profit-maximising output

The tax enters through cost only: each unit costs $\mathrm{MC}+t$ to the firm, so the $MR=MC$ solution moves left while $MR=0$ (revenue max) stays put.

The worked FOC does not match the claim.""",
    ],
}

DEEP_OVERVIEWS = {
    'MATH 11.161': 'Quadratic revenue, cubic cost, and a piecewise build-time schedule must be separated carefully. Profit has its positive stationary point at $Q=10$, while revenue peaks at $Q=15$. Average cost is found by dividing cost by output before differentiating. The rival comparison follows by integrating marginal revenue, not by reversing the inequality. Rival comparisons follow by integrating a marginal inequality when levels match at one endpoint. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.162': "The café's profit derivative factors at $Q=10$, whereas the marginal comparison at $Q=8$ requires evaluating both $R^{\\prime}$ and $C^{\\prime}$. Its staffing rule has different local slopes on either side of $20$. Average cost and an integrated marginal-revenue comparison supply the remaining decisions. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    'MATH 11.163': 'Linear demand makes price elasticity especially transparent. Revenue is maximised at unit elasticity, but the positive marginal cost at that price separates revenue maximisation from profit maximisation. The remaining comparisons use the sign of a derivative. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.164': 'The price converts marginal product into value of marginal product. Profit peaks where $VMP$ equals the wage, at a point where output is still rising. Keeping those two objectives separate explains the contrasting labour levels. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.165': 'This threshold preserves the cost level but changes the marginal cost. Average cost must be formed before differentiating, while profit uses the revenue-minus-cost derivative. The task also distinguishes a continuous piecewise function from a differentiable one. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.166': 'The packaging relation is a cubic, so its local change and elasticity both come from its derivative. The sales side has a quadratic revenue curve, and the tax shifts its linear marginal revenue. A marginal-revenue dominance statement must be integrated over the relevant interval. Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone. Rival comparisons follow by integrating a marginal inequality when levels match at one endpoint.',
    'MATH 11.167': 'The levy shifts the profit derivative but does not change the demand curve. Revenue maximisation occurs at unit elasticity for this linear demand. Average cost needs a quotient before differentiation, and rival levels follow from accumulated marginal revenue. Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.168': 'Square-root production produces diminishing but positive marginal product. Profit is maximised where the resulting value of marginal product equals the wage. The output elasticity describes the proportional response, so it also predicts that doubling labour does not double output. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.169': "The factory's cubic cost creates a quadratic profit derivative whose positive maximum condition occurs at $12$. The packing formula is deliberately continuous and differentiable at its threshold. Average cost requires the fixed cost to be divided by output before taking a derivative. Work claim by claim from derivatives, sign charts, and the formulas in the stem.",
    'MATH 11.170': "The platform's revenue peak and profit peak differ because marginal cost is positive. Converting the inverse demand into $Q(p)$ permits the elasticity calculation. The fixed per-ride commission lowers the linear profit term and shifts the profit maximum inward. Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    'MATH 11.171': 'Fixing capital reduces the two-input technology to a square-root labour schedule, but the labour elasticity remains visible in the original production exponent. The wage comparison uses value of marginal product, not the condition that physical marginal product be zero. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.172': 'The solar model makes profit a concave quadratic, while physical energy alone has a different maximum. The booking rule matches both its level and its slope at ten visits, so neither continuity nor differentiability fails at the threshold. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.173': 'The linear demand curve gives unit elasticity at its revenue maximum. Re-expressing demand as inverse demand is useful for profit in output units. Average cost combines a rising variable component with a falling fixed-cost-per-unit component, and marginal dominance determines the rival comparison. Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone. Rival comparisons follow by integrating a marginal inequality when levels match at one endpoint.',
    'MATH 11.174': 'Cubic cost makes profit and revenue peak at different load counts. The average-cost derivative includes the declining fixed-cost share. The loading rule is designed to match both value and slope at twenty, while the subcontractor conclusion follows from integrating the marginal-revenue ordering. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.175': 'Inverse demand supplies marginal revenue, while the levy shifts the profit derivative. Elasticity is evaluated in the price-demand representation. The setup branches agree in both their values and slopes at twenty, and average cost is assessed from its own derivative. Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.176': 'Chain-rule revenue $R=100\\sqrt{a}$ against linear advertising cost peaks at $a=2500$, where $R^{\\prime}=1$. Square-root response is concave, so doubling spend does not double listeners. Positive $\\pi^{\\prime}$ at small $a$ means advertising is still worthwhile there. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.177': 'Reduce to one variable with the fencing constraint, maximise $A=120x-2x^{2}$ at $x=30$, $y=60$. The second derivative is negative, and the sign of $A^{\\prime}$ shows area still rises as one approaches $30$ from the left. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.178': 'EOQ calculus: set $TC^{\\prime}=-\\dfrac{KD}{Q}^{2}+\\dfrac{h}{2}=0$ to get $Q=100$. Holding cost is $\\dfrac{hQ}{2}$. The second derivative is positive, and nearby order sizes cost more. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.179': 'Product-rule revenue from inverse demand peaks at $Q=6$ with unit elasticity. Constant MC shifts the profit max to $Q=5$. Positive MR on $(0,6)$ means revenue still rises there despite a falling price. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.180': 'Positive but decreasing marginal utility ($U^{\\prime}>0$, $U^{\\prime\\prime}<0$) means risk aversion. Utility keeps rising on $(0,200)$. A mean-preserving spread reduces expected utility under concavity. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.181': 'Budget reduction yields $U=10x-\\frac12 x^{2}$, maximised at $x=10$, $y=5$. The MRS matches $\\dfrac{p_x}{p_y}$, not the reciprocal. Corner solutions with $y=0$ kill the product utility. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.182': 'Cubic $P^{\\prime}$ needs a full sign chart: local min at $4$, local max at $9$. Global claims need level comparisons the figure does not supply. A downward levy shift moves zeros and can be checked pointwise by subtracting $6$ from a read height. Several claims are read from curve signs, crossings, and heights on the figure. Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone.',
    'MATH 11.183': 'With a curved MC, still expand while MR exceeds MC and stop at their crossing. Do not confuse that crossing with an $MR=AC$ meeting, and do not read the crossing height as total profit. Several claims are read from curve signs, crossings, and heights on the figure.',
    'MATH 11.184': 'Three-curve consistency: zeros of green mark turns of brown; zero of purple marks an inflection; the peak of green is steepest climb, not a peak of throughput. Several claims are read from curve signs, crossings, and heights on the figure.',
    'MATH 11.185': 'Read $C^{\\prime}$, $C^{\\prime\\prime}$, and fixed cost separately. The inflection $C^{\\prime\\prime}=0$ at $Q=2$ marks where MC stops falling; it is not the $AC=MC$ point. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.186': 'Simplify the Newton quotient to recover $P^{\\prime}=2x-6$. Evaluate the tangent carefully with the point-slope form. The critical point $x=3$ is a minimum; profit rises afterward. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.187': 'Square-root total cost yields falling average cost and $MC=\\frac12 AC$. Scaling $Q$ by $2$ scales $C$ by $\\sqrt{2}$ only. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.188': 'Margin-per-ticket profit tracks volume up to a constant, so both peak at $t=8$. Past the peak both volume and profit decline. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.189': 'Read brown for when utility still rises, and green for when cups beat the opportunity cost. Concavity follows from falling MU. Do not confuse a zero of $\\mathrm{MU}-6$ with a peak of MU. Several claims are read from curve signs, crossings, and heights on the figure.',
    'MATH 11.190': 'Factor $S^{\\prime}$ to locate $t=1$ (local max) and $t=3$ (local min). Endpoint comparison shows $S(4)=S(1)=4$, so the closed-interval global max is not unique to $t=1$. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.191': 'Sign-read each $P^{\\prime}$, then integrate a marginal inequality when starts match. Crossing heights of $P^{\\prime}$ are not profit levels. Several claims are read from curve signs, crossings, and heights on the figure.',
    'MATH 11.192': 'Combine figure coordinates with the cost formula. Unit elasticity maximises revenue, not profit when MC is positive. Average cost rises with $Q$ here. Several claims are read from curve signs, crossings, and heights on the figure. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.193': 'A parallel MC tax shift moves the MR=MC crossing left. Read pre/post crossings separately; do not keep the untaxed FOC. Several claims are read from curve signs, crossings, and heights on the figure. Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone.',
    'MATH 11.194': 'Fence geometry maximises area at $x=15$, but downward-sloping inverse demand maximises revenue at a much smaller $A$. Unit elasticity marks that revenue peak. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.195': 'Square-root learning: read $AC$ and $MC$ off the figure, keep $MC=\\frac12 AC$, and remember falling averages can coexist with rising total cost. Several claims are read from curve signs, crossings, and heights on the figure.',
    'MATH 11.196': 'Constants shift levels not slopes. Newton recovers $P^{\\prime}$, and the separate ticket problem peaks at unit elasticity. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.197': 'Green is the concavity meter for $C$ and the slope of MC. Do not confuse a minimum of MC with a minimum of AC. Several claims are read from curve signs, crossings, and heights on the figure.',
    'MATH 11.198': 'Budget reduction produces a one-variable $U$ whose derivative is plotted. Read the zero for the mix; corners kill $xy$. Several claims are read from curve signs, crossings, and heights on the figure.',
    'MATH 11.199': 'Keep the inventory FOC and the spoilage sign chart separate. Endpoint ties can deny uniqueness of a closed-interval max. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.200': 'Infer turns of $P$ from zeros of $P^{\\prime}$, concavity from $P^{\\prime\\prime}$, and never treat an inflection as a profit maximum. Several claims are read from curve signs, crossings, and heights on the figure.',
    'MATH 11.201': 'Chain-rule MR of advertising equals $1$ at the interior profit max; solve the power carefully. Concavity of $Q$ is compatible with that max. Work claim by claim from derivatives, sign charts, and the formulas in the stem.',
    'MATH 11.202': 'Read $p$ off the figure, keep $MR=MC$ for the variable problem, and remember a lump-sum fee does not move optimal $Q$. Unit elasticity at $Q=20$ is a revenue property, not the profit optimum. Several claims are read from curve signs, crossings, and heights on the figure. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.203': 'Differentiate $AC$ carefully, use the sign of $AC^{\\prime}$ for falling averages, integrate rival MR gaps, and link $AC^{\\prime}=0$ to $MC=AC$. Rival comparisons follow by integrating a marginal inequality when levels match at one endpoint.',
    'MATH 11.204': 'Separate the $MR=0$ revenue peak from the $MR=MC$ profit peak. Read $p$ off brown at the profit $Q$. Constant MC does not make that $Q$ an AC minimiser. Several claims are read from curve signs, crossings, and heights on the figure. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
    'MATH 11.205': 'Separate $MR=0$ (revenue) from $MR=MC$ (profit). A specific tax shifts MC and lowers optimal $Q$ but leaves the revenue peak in place. Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.',
}

if __name__ == "__main__":
    assert len(DEEP_BODIES) == 45
    lengths = [len(b) for v in DEEP_BODIES.values() for b in v]
    print(f"avg={sum(lengths)/len(lengths):.0f} min={min(lengths)} max={max(lengths)}")
    assert min(lengths) >= 300
    assert sum(lengths) / len(lengths) >= 400
    print("ok")
