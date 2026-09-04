"""Deep tutoring bodies for Chapter 11.5 differentiation exam tasks.

Each body is raw prose WITHOUT the **A.** header and WITHOUT the final
"So the statement is True/False." wrapper — those are added elsewhere.
"""

DEEP_BODIES = {
    "MATH 11.161": [
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

Profit is $P=R-C=-0.5Q^{3}+6Q^{2}+30Q-200$, hence

$$P^{\prime}(Q)=-1.5Q^{2}+12Q+30=-1.5(Q-10)(Q+2).$$
The positive critical point is $Q=10$, and the derivative is already negative at $Q=15$.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The derivation leads to the opposite conclusion.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

Average cost is $AC(Q)=\dfrac{C(Q)}{Q}=0.5Q^{2}-9Q+60+\dfrac{200}{Q}$. Therefore

$$AC^{\prime}(Q)=Q-9-\dfrac{200}{Q^{2}}.$$
The one-unit change is approximated by $AC^{\prime}(Q_{0})$.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The comparison confirms the claim.""",
        r"""On a piecewise rule, steepness is the derivative on the active branch. At a threshold, compare one-sided levels for continuity and one-sided slopes for differentiability.

On the left branch, $T^{\prime}(Q)=Q+4$, giving $T^{\prime}(11)=15$. On the right branch $T^{\prime}(Q)=12$, so $T^{\prime}(15)=12$ and $15>12$.

Evaluate the derivative only on the branch containing each test point — do not differentiate across the kink as if the rule were a single smooth formula.

The derivation agrees with the claim.""",
        r"""Equal revenues at the left endpoint plus strict inequality between marginal revenues on an interval integrate to a strict inequality between endpoint revenues. Apply the fundamental theorem of calculus to $R'(Q)$ or $R_e'(Q)$.

Integrate the strict marginal-revenue inequality from $6$ to $9$:

$$R_e(9)-R_e(6)>R(9)-R(6).$$
The equal starting revenues therefore give $R_e(9)>R(9)$, with the inequality in the opposite direction.

With $R_e(a)=R(a)$ at the left endpoint $a$, the integral $\int_a^b R_e'(Q)\,dQ-\int_a^b R'(Q)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e'-R'$ on $(a,b)$.

The worked algebra contradicts the claim.""",
        r"""Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs from the profit maximum whenever $MC>0$ at the revenue peak.

Marginal revenue is $R^{\prime}(Q)=-6Q+90$. It vanishes at $Q=15$, and

$$R^{\prime\prime}(Q)=-6<0,$$
so this is the revenue maximum and $15>12$.

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

The worked steps support the claim.""",
    ],
    "MATH 11.162": [
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

After subtraction, $P=-\dfrac13Q^{3}+4Q^{2}+20Q-80$, so

$$P^{\prime}(Q)=-Q^{2}+8Q+20=-(Q-10)(Q+2).$$
Thus $Q=10$ is stationary.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The algebra supports the claim.""",
        r"""Interior profit maximisation sets $MR=MC$. Output should expand while $MR>MC$ and contract while $MR<MC$; the crossing identifies the smooth first-order condition.

The two marginal quantities are

$$R^{\prime}(Q)=40-Q,\qquad C^{\prime}(Q)=Q^{2}-9Q+20.$$
At $8$ they are $32$ and $12$, respectively.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

Collect like terms before differentiating so every coefficient in the derivative can be traced back to the original revenue and cost schedules.

The comparison confirms the claim.""",
        r"""On a piecewise rule, steepness is the derivative on the active branch. At a threshold, compare one-sided levels for continuity and one-sided slopes for differentiability.

The left staffing slope is $H^{\prime}(Q)=Q+2$, hence $H^{\prime}(18)=20$. The later branch has slope $H^{\prime}(24)=14$, so the first slope is larger.

Evaluate the derivative only on the branch containing each test point — do not differentiate across the kink as if the rule were a single smooth formula.

The derivation agrees with the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

Dividing first gives $AC=\dfrac13Q^{2}-\dfrac92Q+20+\dfrac{80}{Q}$, so

$$AC^{\prime}(Q)=\dfrac23Q-\dfrac92-\dfrac{80}{Q^{2}}.$$
At $Q=5$ this is $\dfrac{10}{3}-\dfrac92-\dfrac{80}{25}<0$.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The calculus lines up with the claim.""",
        r"""Equal revenues at the left endpoint plus strict inequality between marginal revenues on an interval integrate to a strict inequality between endpoint revenues. Apply the fundamental theorem of calculus to $R'(Q)$ or $R_e'(Q)$.

A smaller marginal revenue over the interval means a smaller accumulated revenue gain:

$$R_e(10)-R_e(6)<R(10)-R(6).$$
Equal revenue at $6$ consequently implies lower rival revenue at $10$.

With $R_e(a)=R(a)$ at the left endpoint $a$, the integral $\int_a^b R_e'(Q)\,dQ-\int_a^b R'(Q)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e'-R'$ on $(a,b)$.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.163": [
        r"""Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs from the profit maximum whenever $MC>0$ at the revenue peak.

$R(p)=120p-4p^{2}$, so $R^{\prime}(p)=120-8p$. Its zero is $p=15$, and $R^{\prime\prime}(p)=-8<0$.

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

The algebra supports the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

Point elasticity is

$$\varepsilon(p)=\dfrac{D^{\prime}(p)p}{D(p)}=\dfrac{-4p}{120-4p}.$$
At $p=15$, this is $-\dfrac{60}{60}=-1$.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The comparison confirms the claim.""",
        r"""Interior profit maximisation sets $MR=MC$. Output should expand while $MR>MC$ and contract while $MR<MC$; the crossing identifies the smooth first-order condition.

At $p=15$, quantity is $60$ and revenue is at its maximum, so $MR=0$. But

$$MC=C^{\prime}(60)=2+0.1(60)=8,$$
which rules out a profit optimum there.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The sign chart points the other way.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The price-side revenue derivative at $10$ is

$$R^{\prime}(10)=120-80=40>0.$$
A sufficiently small increase therefore raises revenue.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The calculus lines up with the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

Average cost simplifies to $AC(Q)=2+0.05Q$. Thus

$$AC^{\prime}(Q)=0.05>0$$
throughout the positive-output domain.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The worked steps support the claim.""",
    ],
    "MATH 11.164": [
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

Profit is $\pi(L)=2Q(L)-12L-40=48L-2L^{2}-40$. Therefore

$$\pi^{\prime}(L)=48-4L=0$$
at $L=12$, with $\pi^{\prime\prime}=-4<0$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The algebra supports the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

Marginal product is $Q^{\prime}(L)=30-2L$. At $12$ it is $6$, so

$$VMP=2\cdot6=12,$$
exactly the wage.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The comparison confirms the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

The marginal product calculation gives

$$Q^{\prime}(12)=30-24=6>0.$$
Profit can peak while physical output is still increasing because labour is costly.

Collect like terms before differentiating so every coefficient in the derivative can be traced back to the original revenue and cost schedules.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

The derivation agrees with the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

Immediately to the right of $12$, $\pi^{\prime}(L)=48-4L<0$. Extra labour then lowers, rather than raises, profit.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The worked algebra contradicts the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

Physical output has $Q^{\prime}(L)=0$ at $L=15$. That output maximum is later than the profit maximum at $L=12$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.165": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The left marginal cost is $2x+20$, giving $C^{\prime}_{-}(25)=70$. The right marginal cost is $45$, so the jump is from $70$ down to $45$.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The derivation leads to the opposite conclusion.""",
        r"""On a piecewise rule, steepness is the derivative on the active branch. At a threshold, compare one-sided levels for continuity and one-sided slopes for differentiability.

For the first branch,

$$AC(x)=x+20+\dfrac{100}{x},\qquad AC^{\prime}(x)=1-\dfrac{100}{x^{2}}.$$
The positive zero is $x=10$, and the derivative changes from negative to positive there.

Evaluate the derivative only on the branch containing each test point — do not differentiate across the kink as if the rule were a single smooth formula.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The comparison confirms the claim.""",
        r"""On a piecewise rule, steepness is the derivative on the active branch. At a threshold, compare one-sided levels for continuity and one-sided slopes for differentiability.

On the first branch, $P=40x-\dfrac32x^{2}-100$. Thus

$$P^{\prime}(x)=40-3x,$$
whose zero is $x=\dfrac{40}{3}$.

Evaluate the derivative only on the branch containing each test point — do not differentiate across the kink as if the rule were a single smooth formula.

The derivation agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Marginal revenue is $R^{\prime}(x)=60-x$. At $x=30$ this equals $30$, which is positive.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The worked algebra contradicts the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Both cost formulas give $1225$ at $x=25$, establishing continuity. Their one-sided slopes are nevertheless

$$C^{\prime}_{-}(25)=70\ne45=C^{\prime}_{+}(25),$$
so continuity alone does not give differentiability.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

Collect like terms before differentiating so every coefficient in the derivative can be traced back to the original revenue and cost schedules.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.166": [
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

Differentiate $V(r)=2\pi r^{3}$:

$$V^{\prime}(r)=6\pi r^{2},\qquad V^{\prime}(2)=24\pi.$$
With $\Delta r=0.02$, the differential estimate is $24\pi(0.02)=0.48\pi$.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The algebra supports the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

Elasticity is

$$\dfrac{r}{V(r)}V^{\prime}(r)=\dfrac{r}{2\pi r^{3}}(6\pi r^{2})=3.$$
The cubic radius relationship supplies elasticity $3$, not $2$.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculation disagrees with the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

Revenue is $R(Q)=Q(72-Q)=72Q-Q^{2}$. Since

$$R^{\prime}(Q)=72-2Q=0$$
at $Q=36$ and $R^{\prime\prime}=-2<0$, that output maximises revenue.

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The derivation agrees with the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

Tax-adjusted revenue is $(72-Q-6)Q=66Q-Q^{2}$. Its derivative $66-2Q$ vanishes at

$$Q=33,$$
not at $30$.

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

The worked algebra contradicts the claim.""",
        r"""Equal revenues at the left endpoint plus strict inequality between marginal revenues on an interval integrate to a strict inequality between endpoint revenues. Apply the fundamental theorem of calculus to $R'(Q)$ or $R_e'(Q)$.

Integrating the strict derivative inequality from $10$ to $18$ yields

$$R_e(18)-R_e(10)>R(18)-R(10).$$
The equal initial revenues leave the rival strictly higher at $18$.

With $R_e(a)=R(a)$ at the left endpoint $a$, the integral $\int_a^b R_e'(Q)\,dQ-\int_a^b R'(Q)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e'-R'$ on $(a,b)$.

The worked steps support the claim.""",
    ],
    "MATH 11.167": [
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

Pre-tax profit is $P=38Q-\dfrac34Q^{2}-180$, so

$$P^{\prime}(Q)=38-\frac32Q.$$
The zero is $Q=\dfrac{76}{3}$, with negative second derivative $-\dfrac{3}{2}$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The algebra supports the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

The levy changes profit to $P_t=34Q-\dfrac34Q^{2}-180$. Therefore

$$P_t^{\prime}(Q)=34-\frac32Q=0$$
at $Q=\dfrac{68}{3}$, not $22$.

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The calculation disagrees with the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

$AC(Q)=\dfrac14Q+12+\dfrac{180}{Q}$, giving

$$AC^{\prime}(Q)=\frac14-\dfrac{180}{Q^{2}}.$$
At $20$, this is $\dfrac{1}{4}-\dfrac{180}{400}=-\dfrac{1}{5}<0$.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The derivation agrees with the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

Demand in price form is $Q(p)=100-2p$, and revenue is $100p-2p^{2}$. At its maximum $p=25$,

$$\varepsilon=\dfrac{-2(25)}{100-2(25)}=-1.$$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculus lines up with the claim.""",
        r"""Equal revenues at the left endpoint plus strict inequality between marginal revenues on an interval integrate to a strict inequality between endpoint revenues. Apply the fundamental theorem of calculus to $R'(Q)$ or $R_e'(Q)$.

Lower marginal revenue makes the rival's accumulated gain smaller:

$$R_e(18)-R_e(10)<R(18)-R(10).$$
Equal revenue at $10$ therefore implies lower rival revenue at $18$.

With $R_e(a)=R(a)$ at the left endpoint $a$, the integral $\int_a^b R_e'(Q)\,dQ-\int_a^b R'(Q)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e'-R'$ on $(a,b)$.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.168": [
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

Profit is $\pi(L)=240\sqrt L-20L-200$, so

$$\pi^{\prime}(L)=\dfrac{120}{\sqrt L}-20.$$
It is zero at $\sqrt L=6$, hence $L=36$, and the derivative changes from positive to negative.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The algebra supports the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

The output ratio is

$$\dfrac{Q(2L)}{Q(L)}=\dfrac{80\sqrt{2L}}{80\sqrt L}=\sqrt2.$$
This is less than $2$, reflecting diminishing marginal product.

For $Q=kL^{\alpha}$, doubling $L$ multiplies $Q$ by $2^{\alpha}$, not by $2$ unless $\alpha=1$; here the exponent in the production function governs the scaling.

The calculation disagrees with the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

Using $Q(L)=80L^{\dfrac{1}{2}}$,

$$\varepsilon_L=\dfrac{LQ^{\prime}(L)}{Q(L)}=\frac12.$$
The exponent is the constant output elasticity.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The derivation agrees with the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

$Q^{\prime}(L)=\dfrac{40}{\sqrt{L}}$. At $L=36$,

$$VMP=3\left(\dfrac{40}{6}\right)=20,$$
which exactly equals the hourly wage.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The calculus lines up with the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

At $L=36$ the marginal product is

$$Q^{\prime}(36)=\dfrac{40}{6}=\dfrac{20}{3}>0.$$
Profit stops increasing because the value of this product equals the wage, not because output stops rising.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.169": [
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$P=R-C$ has derivative

$$P^{\prime}(q)=-q^{2}+8q+48=-(q-12)(q+4).$$
At $q=12$, $P^{\prime\prime}(q)=-2q+8=-16<0$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The algebra supports the claim.""",
        r"""Interior profit maximisation sets $MR=MC$. Output should expand while $MR>MC$ and contract while $MR<MC$; the crossing identifies the smooth first-order condition.

$R^{\prime}(q)=80-2q$ and $C^{\prime}(q)=q^{2}-10q+32$. At $12$ both calculations give

$$R^{\prime}(12)=56=C^{\prime}(12).$$

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

Collect like terms before differentiating so every coefficient in the derivative can be traced back to the original revenue and cost schedules.

The comparison confirms the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The two level calculations are

$$15^{2}+10(15)=375,\qquad40(15)-225=375.$$
The piecewise schedule meets without a gap.

Collect like terms before differentiating so every coefficient in the derivative can be traced back to the original revenue and cost schedules.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

The derivation agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The left derivative is $2q+10$, so it approaches $40$ at $15$. The right derivative is also $40$, hence

$$H^{\prime}_{-}(15)=H^{\prime}_{+}(15)=40.$$
There is no derivative jump.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The worked algebra contradicts the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

$AC(q)=\dfrac13q^{2}-5q+32+\dfrac{240}{q}$, so

$$AC^{\prime}(q)=\frac23q-5-\dfrac{240}{q^{2}}.$$
At $10$, this equals $\dfrac{20}{3}-5-\dfrac{12}{5}<0$.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The worked steps support the claim.""",
    ],
    "MATH 11.170": [
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

Profit is $P=100Q-\dfrac52Q^{2}-600$, hence

$$P^{\prime}(Q)=100-5Q.$$
Its zero is $20$ and $P^{\prime\prime}=-5<0$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The algebra supports the claim.""",
        r"""Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs from the profit maximum whenever $MC>0$ at the revenue peak.

Revenue is $R=120Q-2Q^{2}$, whose derivative is $120-4Q$. It vanishes at

$$Q=30,$$
not at $20$.

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

The calculation disagrees with the claim.""",
        r"""Interior profit maximisation sets $MR=MC$. Output should expand while $MR>MC$ and contract while $MR<MC$; the crossing identifies the smooth first-order condition.

At $Q=20$,

$$MR=R^{\prime}(20)=120-80=40,\qquad MC=C^{\prime}(20)=20+20=40.$$
The two marginal quantities agree.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The derivation agrees with the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

Demand is $Q(p)=60-\dfrac{p}{2}$. At $Q=20$, price is $80$, so

$$\varepsilon=\dfrac{-1}{2}\dfrac{80}{20}=-2.$$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculus lines up with the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

The commission makes profit $P_c=90Q-\dfrac52Q^{2}-600$. Thus

$$P_c^{\prime}(Q)=90-5Q=0$$
at $Q=18$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The worked steps support the claim.""",
    ],
    "MATH 11.171": [
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

With $K=16$, output is $Q(L)=24\sqrt L$, so

$$\pi(L)=240\sqrt L-30L-400,\qquad \pi^{\prime}(L)=\dfrac{120}{\sqrt L}-30.$$
The derivative is zero at $\sqrt L=4$, or $L=16$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The algebra supports the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

Holding capital fixed,

$$\dfrac{Q(2L,16)}{Q(L,16)}=2^{\dfrac{1}{2}}=\sqrt2.$$
The labour exponent prevents a doubling of output.

For $Q=kL^{\alpha}$, doubling $L$ multiplies $Q$ by $2^{\alpha}$, not by $2$ unless $\alpha=1$; here the exponent in the production function governs the scaling.

The calculation disagrees with the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

Differentiating with respect to labour gives $Q_L=6L^{-\dfrac{1}{2}}K^{\dfrac{1}{4}}$. Thus

$$\dfrac{LQ_L}{Q}=\frac12,$$
the exponent on $L$.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The derivation agrees with the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

At $K=16$, $Q_L=\dfrac{12}{\sqrt{L}}$. At $L=16$,

$$VMP=10\left(\dfrac{12}{4}\right)=30,$$
which is the wage.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The calculus lines up with the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

The marginal product at that input is

$$Q_L(16,16)=\dfrac{12}{4}=3>0.$$
It is the marginal value relative to the wage that determines profit maximisation.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.172": [
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

Profit is $\pi(m)=0.5(100m-2m^{2})-8m-50=42m-m^{2}-50$. Hence

$$\pi^{\prime}(m)=42-2m=0$$
at $m=21$, with $\pi^{\prime\prime}=-2<0$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The algebra supports the claim.""",
        r"""Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, which can occur while $Q'(L)>0$ because labour is costly.

$E^{\prime}(m)=100-4m$, so at $21$ the value of marginal product is

$$0.5E^{\prime}(21)=0.5(16)=8.$$
This equals the visit wage.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

Collect like terms before differentiating so every coefficient in the derivative can be traced back to the original revenue and cost schedules.

The comparison confirms the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Physical energy is maximised when $E^{\prime}(m)=100-4m=0$, giving

$$m=25.$$
The wage makes the profit-maximising visit count lower.

Collect like terms before differentiating so every coefficient in the derivative can be traced back to the original revenue and cost schedules.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

The sign chart points the other way.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The two levels at $10$ are both $100$. Their slopes are

$$S^{\prime}_{-}(10)=2(10)=20,\qquad S^{\prime}_{+}(10)=20,$$
so the rule is differentiable as well as continuous.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The worked algebra contradicts the claim.""",
        r"""EOQ minimises $\dfrac{KD}{Q}+\dfrac{hQ}{2}$. Set $TC'=0$ to balance falling ordering cost against rising holding cost, and verify $TC''>0$ for a minimum.

On the first branch $S^{\prime}(8)=16$; on the second branch $S^{\prime}(12)=20$. Since $16<20$, the claimed ordering is reversed.

Evaluate the derivative only on the branch containing each test point — do not differentiate across the kink as if the rule were a single smooth formula.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.173": [
        r"""Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs from the profit maximum whenever $MC>0$ at the revenue peak.

$R(p)=p(200-5p)=200p-5p^{2}$. Therefore

$$R^{\prime}(p)=200-10p=0$$
at $p=20$, with negative second derivative.

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

The algebra supports the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

In output form, $p(Q)=40-0.2Q$, so

$$P(Q)=35Q-0.3Q^{2}-300,\qquad P^{\prime}(Q)=35-0.6Q.$$
The stationary output is $Q=\dfrac{175}{3}$, not $100$.

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The calculation disagrees with the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

At $p=20$, quantity is $100$. The elasticity is

$$\varepsilon=\dfrac{-5(20)}{200-5(20)}=-1.$$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The derivation agrees with the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

$AC=5+0.1Q+\dfrac{300}{Q}$, so

$$AC^{\prime}(Q)=0.1-\dfrac{300}{Q^{2}}.$$
At $50$ it is $0.1-\dfrac{300}{2500}=-0.02<0$.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The calculus lines up with the claim.""",
        r"""Equal revenues at the left endpoint plus strict inequality between marginal revenues on an interval integrate to a strict inequality between endpoint revenues. Apply the fundamental theorem of calculus to $R'(Q)$ or $R_e'(Q)$.

Over the interval from $40$ to $50$,

$$R_e(50)-R_e(40)>R(50)-R(40).$$
Equal revenue at $40$ then gives strictly higher rival revenue at $50$.

With $R_e(a)=R(a)$ at the left endpoint $a$, the integral $\int_a^b R_e'(Q)\,dQ-\int_a^b R'(Q)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e'-R'$ on $(a,b)$.

The worked steps support the claim.""",
    ],
    "MATH 11.174": [
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

Profit has derivative

$$P^{\prime}(x)=126+12x-1.5x^{2}=-1.5(x-14)(x+6).$$
At $14$, $P^{\prime\prime}=12-3(14)<0$.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The algebra supports the claim.""",
        r"""Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs from the profit maximum whenever $MC>0$ at the revenue peak.

$R^{\prime}(x)=150-6x$ vanishes at

$$x=25,$$
and $R^{\prime\prime}=-6<0$. This is above $20$.

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

The comparison confirms the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

$AC=0.5x^{2}-9x+24+\dfrac{500}{x}$, hence

$$AC^{\prime}(x)=x-9-\dfrac{500}{x^{2}}.$$
At $10$ the value is $10-9-5=-4<0$, so average cost is falling.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The sign chart points the other way.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Both loading levels at $20$ are $500$. Their slopes are also equal:

$$L^{\prime}_{-}(20)=2(20)+5=45=L^{\prime}_{+}(20).$$
No derivative jump occurs.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The worked algebra contradicts the claim.""",
        r"""Equal revenues at the left endpoint plus strict inequality between marginal revenues on an interval integrate to a strict inequality between endpoint revenues. Apply the fundamental theorem of calculus to $R'(Q)$ or $R_e'(Q)$.

Lower marginal revenue accumulates to a lower increase:

$$R_s(18)-R_s(10)<R(18)-R(10).$$
The equal starting revenues imply the subcontractor is lower at $18$.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

Collect like terms before differentiating so every coefficient in the derivative can be traced back to the original revenue and cost schedules.

The worked steps support the claim.""",
    ],
    "MATH 11.175": [
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

$MR=30-\dfrac23Q$ and $MC=\dfrac13Q+6$. At $Q=24$,

$$MR=30-16=14=8+6=MC.$$

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The algebra supports the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

Tax-adjusted profit is

$$P_t(Q)=20Q-\frac12Q^{2}-120.$$
Thus $P_t^{\prime}(Q)=20-Q$, which is zero at $Q=20$ with negative second derivative.

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The comparison confirms the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

At $p=10$, demand is $Q=90-30=60$. Thus

$$\varepsilon=\dfrac{-3(10)}{60}=-\frac12,$$
not $-1$.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The sign chart points the other way.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

At $20$, the first formula approaches $\frac12(400)+20=220$, while the second gives $420-200=220$. The one-sided slopes are

$$20+1=21=21,$$
so both continuity and differentiability hold.

Carry out each differentiation or substitution explicitly on the coefficients given in the stem so the displayed equalities follow line by line.

After finding a critical value, evaluate the derivative at a nearby point to see whether the function is still increasing or already decreasing there.

The calculus lines up with the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

$AC=\dfrac{Q}{6}+6+\dfrac{120}{Q}$, hence

$$AC^{\prime}(Q)=\frac16-\dfrac{120}{Q^{2}}.$$
At $30$ this is $\dfrac{1}{6}-\dfrac{120}{900}=\dfrac{1}{30}>0$, so average cost is rising.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.176": [
        r"""Substitute the budget into $U=xy$ to obtain a single-variable problem. Interior maxima solve $U'=0$; corners with $y=0$ or $x=0$ give zero product utility.

Profit is $\pi(a)=100\sqrt{a}-a-40$. Differentiating,

$$\pi'(a)=\dfrac{50}{\sqrt{a}}-1.$$
Setting $\pi'=0$ gives $\sqrt{a}=50$, so $a=2500$. Also $\pi''<0$ there

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The algebra supports the claim.""",
        r"""Substitute the budget into $U=xy$ to obtain a single-variable problem. Interior maxima solve $U'=0$; corners with $y=0$ or $x=0$ give zero product utility.

Marginal revenue of advertising is $R'(a)=5Q'(a)=\dfrac{50}{\sqrt{a}}$. At $a=2500$ this equals $1$, matching the marginal cost of one more euro spent

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""Substitute the budget into $U=xy$ to obtain a single-variable problem. Interior maxima solve $U'=0$; corners with $y=0$ or $x=0$ give zero product utility.

$Q(100)=200$ and $Q(400)=400$, so listenership doubles when advertising is multiplied by four, not by two. Under a square-root response, doubling $a$ multiplies $Q$ by $\sqrt{2}$ only

For $Q=kL^{\alpha}$, doubling $L$ multiplies $Q$ by $2^{\alpha}$, not by $2$ unless $\alpha=1$; here the exponent in the production function governs the scaling.

The sign chart points the other way.""",
        r"""With $R(a)=kQ(a)$ and linear ad cost, profit maximisation sets $R'(a)=1$. Differentiate $Q(a)$ with the chain rule to obtain marginal revenue of advertising.

At $a=100$, $\pi'(100)=\dfrac{50}{10}-1=4>0$, so a little more advertising still raises profit

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The calculus lines up with the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

A decreasing marginal product does not forbid an interior profit max; it is exactly what makes $\pi'$ cross from $+$ to $-$ once

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

Past an interior maximum, the first derivative is negative, so moving slightly beyond that input lowers the objective even if the level function itself is still rising elsewhere.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.177": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

From $y=120-2x$ one has $A=x(120-2x)=120x-2x^{2}$ on $(0,60)$

The constraint $2x+y=L$ gives $y=L-2x$; substituting into $A=xy$ yields a concave quadratic on $0<x<L/2$, so the unique critical point is the global maximum on that interval.

The algebra supports the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$A'(x)=120-4x=0$ at $x=30$. Also $A''=-4<0$, so this is a maximum

The constraint $2x+y=L$ gives $y=L-2x$; substituting into $A=xy$ yields a concave quadratic on $0<x<L/2$, so the unique critical point is the global maximum on that interval.

The comparison confirms the claim.""",
        r"""Use the linear fencing constraint to eliminate one variable, then maximise the reduced function on the feasible interval. Check $f''<0$ or the sign of $f'$ near the critical point.

$y=120-2\cdot30=60$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$A''(30)=-4<0$, so the second-derivative test confirms a strict local maximum

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The worked algebra contradicts the claim.""",
        r"""Use the linear fencing constraint to eliminate one variable, then maximise the reduced function on the feasible interval. Check $f''<0$ or the sign of $f'$ near the critical point.

Just left of $x=30$, $A'>0$, so decreasing the width a little lowers area rather than raising it

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.178": [
        r"""EOQ minimises $\dfrac{KD}{Q}+\dfrac{hQ}{2}$. Set $TC'=0$ to balance falling ordering cost against rising holding cost, and verify $TC''>0$ for a minimum.

$TC'(Q)=-\dfrac{20000}{Q^{2}}+2=0$ gives $Q^{2}=10000$, so $Q=100$

Multiplying $TC'=0$ by $Q^2$ gives $Q^2=\dfrac{KD}{h/2}$; the positive root is the EOQ. At that $Q$, ordering cost $\dfrac{KD}{Q}$ equals holding cost $\dfrac{hQ}{2}$.

The algebra supports the claim.""",
        r"""EOQ minimises $\dfrac{KD}{Q}+\dfrac{hQ}{2}$. Set $TC'=0$ to balance falling ordering cost against rising holding cost, and verify $TC''>0$ for a minimum.

The two terms in $TC'$ balance when $\dfrac{20000}{Q^{2}}=2$; that is the EOQ first-order condition equating the magnitudes of the two marginal cost pieces

Multiplying $TC'=0$ by $Q^2$ gives $Q^2=\dfrac{KD}{h/2}$; the positive root is the EOQ. At that $Q$, ordering cost $\dfrac{KD}{Q}$ equals holding cost $\dfrac{hQ}{2}$.

The comparison confirms the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Holding cost is $\dfrac{hQ}{2}=2Q$; at $Q=100$ this is $200$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$TC(100)=200+200=400$ while $TC(50)=400+100=500>400$, so halving the order raises total cost

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The worked algebra contradicts the claim.""",
        r"""EOQ minimises $\dfrac{KD}{Q}+\dfrac{hQ}{2}$. Set $TC'=0$ to balance falling ordering cost against rising holding cost, and verify $TC''>0$ for a minimum.

$TC''(Q)=\dfrac{40000}{Q^{3}}>0$ for $Q>0$, confirming a minimum

Multiplying $TC'=0$ by $Q^2$ gives $Q^2=\dfrac{KD}{h/2}$; the positive root is the EOQ. At that $Q$, ordering cost $\dfrac{KD}{Q}$ equals holding cost $\dfrac{hQ}{2}$.

The worked steps support the claim.""",
    ],
    "MATH 11.179": [
        r"""Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs from the profit maximum whenever $MC>0$ at the revenue peak.

$R(Q)=36Q-3Q^{2}$, so $R'=36-6Q=0$ at $Q=6$, and $R''=-6<0$

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

Set the derivative equal to zero, solve for the critical input, and evaluate the second derivative or a sign chart of the first derivative to confirm a maximum rather than a minimum.

The algebra supports the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

Demand is $Q=\dfrac{(36-p)}{3}$, so $D'(p)=-\dfrac{1}{3}$. At $Q=6$ one has $p=18$, and

$$El_{Q}(p)=\dfrac{D'(p)\cdot p}{Q}=\dfrac{(-\dfrac{1}{3})\cdot18}{6}=-1$$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The comparison confirms the claim.""",
        r"""Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs from the profit maximum whenever $MC>0$ at the revenue peak.

Profit $P=R-6Q=30Q-3Q^{2}$ has $P'=30-6Q=0$ at $Q=5$, not at the revenue max $Q=6$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The sign chart points the other way.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$R'(4)=36-24=12$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The calculus lines up with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Falling price does not force falling revenue while $MR>0$; here $R'>0$ on $(0,6)$

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.180": [
        r"""For $U(w)$, $U'>0$ means utility rises with wealth; $U''<0$ means risk aversion. A mean-preserving spread lowers expected utility by Jensen's inequality when $U$ is strictly concave.

$U'(w)=20-0.1w>0$ on $(0,200)$ because $0.1w<20$ there

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""For $U(w)$, $U'>0$ means utility rises with wealth; $U''<0$ means risk aversion. A mean-preserving spread lowers expected utility by Jensen's inequality when $U$ is strictly concave.

$U''(w)=-0.1<0$, so $U$ is strictly concave — the usual calculus signature of risk aversion

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""For $U(w)$, $U'>0$ means utility rises with wealth; $U''<0$ means risk aversion. A mean-preserving spread lowers expected utility by Jensen's inequality when $U$ is strictly concave.

$U'=0$ at $w=200$, which is the right endpoint of the open interval; on $(0,200)$ utility is still strictly increasing, so there is no interior maximum below $200$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The sign chart points the other way.""",
        r"""For $U(w)$, $U'>0$ means utility rises with wealth; $U''<0$ means risk aversion. A mean-preserving spread lowers expected utility by Jensen's inequality when $U$ is strictly concave.

$U'(50)=20-5=15$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The calculus lines up with the claim.""",
        r"""For $U(w)$, $U'>0$ means utility rises with wealth; $U''<0$ means risk aversion. A mean-preserving spread lowers expected utility by Jensen's inequality when $U$ is strictly concave.

For a strictly concave $U$, Jensen's inequality goes the other way: a mean-preserving spread lowers expected utility

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.181": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

From $2x+4y=40$ one has $y=10-\frac12 x$, so $U=x(10-\frac12 x)=10x-\frac12 x^{2}$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""Substitute the budget into $U=xy$ to obtain a single-variable problem. Interior maxima solve $U'=0$; corners with $y=0$ or $x=0$ give zero product utility.

$U'(x)=10-x=0$ at $x=10$, and $U''=-1<0$

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""Substitute the budget into $U=xy$ to obtain a single-variable problem. Interior maxima solve $U'=0$; corners with $y=0$ or $x=0$ give zero product utility.

$y=10-5=5$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

The correct price ratio in the MRS condition is $\dfrac{p_{x}}{p_}{y}$. Here $\dfrac{y}{x}=\frac12=\dfrac{p_{x}}{p_}{y}$, not $\dfrac{p_{y}}{p_}{x}=2$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The worked algebra contradicts the claim.""",
        r"""Substitute the budget into $U=xy$ to obtain a single-variable problem. Interior maxima solve $U'=0$; corners with $y=0$ or $x=0$ give zero product utility.

With $y=0$ one has $U=0$, far below the interior maximum $U=50$

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.182": [
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

Between $4$ and $9$ the cubic sits above the axis (two factors negative after $4$ until $9$), so $P'>0$ and a little more output raises profit

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

Sign chart: $P'>0$ on $(0,1)$, $P'<0$ on $(1,4)$, $P'>0$ on $(4,9)$, $P'<0$ after $9$. So $Q=4$ is a local minimum ($-$ to $+$) and $Q=9$ a local maximum ($+$ to $-$), not the other way around

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The calculation disagrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

A local max at $Q=9$ need not beat the endpoint or the local max at $Q=1$ without comparing levels. The figure alone does not give $P(1)$ versus $P(9)$; claiming $Q=9$ must be the global max is unjustified

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The sign chart points the other way.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

A vertical shift of $-6$ moves the graph down, so the old root at height $0$ becomes height $-6\neq 0$. New zeros solve the shifted equation and generally move

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The calculus lines up with the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

At $Q=6$, $P'(6)=-(6-1)(6-4)(6-9)=-(5)(2)(-3)=30>15$. After subtracting $6$ one still has $24>0$, so expansion remains profitable at $Q=6$

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The worked steps support the claim.""",
    ],
    "MATH 11.183": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Left of $Q=8$, MR sits above MC on the figure, so $MR>MC$ and expanding raises profit

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The algebra supports the claim.""",
        r"""On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost and falls once marginal cost overtakes it. Read which coloured curve is higher at the output named in the claim, and locate crossings where $MR=MC$.

The profit first-order condition is $MR=MC$ (brown meets green), not $MR=AC$. Purple meeting brown is a different, generally wrong, locus

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculation disagrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

At $Q=12$, MC is clearly above MR, so $MR<MC$ and cutting output a little raises profit

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

MC crosses MR from below while MR falls, so $MR-MC$ changes $+$ to $-$ — a local profit max

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The calculus lines up with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Crossing height is the common marginal value $MR=MC$, not the stock of total profit

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.184": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Green changes $-$ to $+$ at $x=1$ (local min of brown) and $+$ to $-$ at $x=5$ (local max of brown)

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

The algebra supports the claim.""",
        r"""When a figure plots $f$, $f'$, and $f''$ together, zeros of $f'$ mark turning points of $f$, while zeros of $f''$ with a sign change mark inflections where concavity switches.

Purple's zero is where $f''=0$; the figure shows purple changing from $+$ to $-$ there, so brown changes from concave up to concave down — an inflection

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

Setting $C''(Q)=0$ locates a candidate inflection; confirm by checking that $C''$ changes sign there, which is equivalent to $MC$ having a local minimum or maximum.

The comparison confirms the claim.""",
        r"""When a figure plots $f$, $f'$, and $f''$ together, zeros of $f'$ mark turning points of $f$, while zeros of $f''$ with a sign change mark inflections where concavity switches.

Negative $f''$ means $f'$ is decreasing: green slopes down wherever purple is below the axis

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

The peak of green is where brown's slope is largest, not where brown peaks. Brown peaks where green crosses through zero near $x=5$

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The worked algebra contradicts the claim.""",
        r"""When a figure plots $f$, $f'$, and $f''$ together, zeros of $f'$ mark turning points of $f$, while zeros of $f''$ with a sign change mark inflections where concavity switches.

At $x=3$, green is still positive (throughput still rising) and purple near zero only marks an inflection of $f$, not a max of $f$. The throughput max is near $x=5$

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.185": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Differentiate term by term: $C'=3Q^{2}-12Q+40$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""An inflection of $C$ occurs where $C''$ changes sign — where $MC$ has a turn. That is different from $AC'=0$, which is equivalent to $MC=AC$.

$C''(Q)=6Q-12=0$ at $Q=2$, and $C''$ changes sign there, so $Q=2$ is an inflection of $C$

Setting $C''(Q)=0$ locates a candidate inflection; confirm by checking that $C''$ changes sign there, which is equivalent to $MC$ having a local minimum or maximum.

The comparison confirms the claim.""",
        r"""An inflection of $C$ occurs where $C''$ changes sign — where $MC$ has a turn. That is different from $AC'=0$, which is equivalent to $MC=AC$.

$C''(Q)<0$ on $(0,2)$, so $C'$ is decreasing there

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""An inflection of $C$ occurs where $C''$ changes sign — where $MC$ has a turn. That is different from $AC'=0$, which is equivalent to $MC=AC$.

Inflection of $C$ is about $C''=0$; it need not solve $AC=MC$. Those meet where $AC'=0$, a different condition

Setting $C''(Q)=0$ locates a candidate inflection; confirm by checking that $C''$ changes sign there, which is equivalent to $MC$ having a local minimum or maximum.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The worked algebra contradicts the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$C(0)=10$ is the fixed cost

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The worked steps support the claim.""",
    ],
    "MATH 11.186": [
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, subtract $P(a)$, divide by $h$, and then let $h\to 0$ to recover $P'(a)$.

Expand $P(a+h)=(a+h)^{2}-6(a+h)+20$ and subtract $P(a)$; dividing by $h$ leaves $2a+h-6$

After simplifying to $2a+h-6$, letting $h\to 0$ gives $P'(a)=2a-6$, matching direct differentiation of $P(x)=x^2-6x+20$.

The algebra supports the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$P'(x)=2x-6$, so $P'(4)=2$

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$P(4)=16-24+20=12$, so the tangent is $y-12=2(x-4)$, i.e. $y=2x+4$, not $y=2x$

The tangent line uses $y-y_0=f'(x_0)(x-x_0)$ after evaluating both the function and the derivative at the base point; omitting $y_0$ gives the wrong intercept.

The sign chart points the other way.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$P'<0$ on $(-\infty,3)$ and $P'>0$ on $(3,\infty)$, so profit is increasing for $x>3$

Past an interior maximum, the first derivative is negative, so moving slightly beyond that input lowers the objective even if the level function itself is still rising elsewhere.

The worked algebra contradicts the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$P'$ changes $-$ to $+$ at $x=3$, and $P''(3)=2>0$, so $x=3$ is a local minimum

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

The worked steps support the claim.""",
    ],
    "MATH 11.187": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Power rule: $C'(Q)=80\cdot\frac12 Q^{-\dfrac{1}{2}}=\dfrac{40}{\sqrt{Q}}$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""For $C(Q)=c\sqrt{Q}$, power-rule differentiation gives $C'(Q)=\dfrac{c}{2\sqrt{Q}}$ and $AC(Q)=\dfrac{c}{\sqrt{Q}}$, so identically $MC=\dfrac12 AC$ while both fall in $Q$.

$AC(Q)=\dfrac{80}{\sqrt{Q}}$ has derivative $-40 Q^{-\dfrac{3}{2}}<0$ for $Q>0$

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The comparison confirms the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

$AC=\dfrac{80}{\sqrt{Q}}$ and $MC=\dfrac{40}{\sqrt{Q}}$, so $MC=\frac12 AC$ identically

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The derivation agrees with the claim.""",
        r"""For $C(Q)=c\sqrt{Q}$, power-rule differentiation gives $C'(Q)=\dfrac{c}{2\sqrt{Q}}$ and $AC(Q)=\dfrac{c}{\sqrt{Q}}$, so identically $MC=\dfrac12 AC$ while both fall in $Q$.

$C(2Q)=80\sqrt{2Q}=\sqrt{2}\,C(Q)$, so cost rises by factor $\sqrt{2}$, not $2$

For $Q=kL^{\alpha}$, doubling $L$ multiplies $Q$ by $2^{\alpha}$, not by $2$ unless $\alpha=1$; here the exponent in the production function governs the scaling.

The worked algebra contradicts the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$C'(16)=\dfrac{40}{4}=10$

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The worked steps support the claim.""",
    ],
    "MATH 11.188": [
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$\pi'(t)=16-2t=0$ at $t=8$, and $\pi''=-2<0$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The algebra supports the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$D$ and $\pi$ differ by the constant $10$, so they share the same maximiser $t=8$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The comparison confirms the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$\pi'(4)=16-8=8>0$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$\pi(0)=-10<0$

Fixed setup costs enter as constants and shift the profit level but not its derivative, so the sign of profit at $t=0$ follows from evaluating the formula directly.

Set the derivative equal to zero, solve for the critical input, and evaluate the second derivative or a sign chart of the first derivative to confirm a maximum rather than a minimum.

The calculus lines up with the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$D(12)=16\cdot12-144=48$ and $D(8)=64$, so volume falls from $8$ to $12$, not rises. Profit also falls because one is past the max

Because profit differs from volume only by a constant, their derivatives coincide and any output that maximises one maximises the other.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.189": [
        r"""Brown shows marginal utility; green subtracts the constant opportunity cost of $6$. Cups are worthwhile while green is positive. The optimal count is where green crosses zero, not where brown itself peaks.

Brown crosses zero near $c=45$, so $\mathrm{MU}>0$ on $(0,45)$ and utility rises until then

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The algebra supports the claim.""",
        r"""Brown shows marginal utility; green subtracts the constant opportunity cost of $6$. Cups are worthwhile while green is positive. The optimal count is where green crosses zero, not where brown itself peaks.

Green crosses zero near $c=30$; that is where $\mathrm{MU}=6$, the stop rule with constant opportunity cost $6$

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

At $c=10$, brown is $18-4=14$, so green is $8$, which is below $10$

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The sign chart points the other way.""",
        r"""Brown shows marginal utility; green subtracts the constant opportunity cost of $6$. Cups are worthwhile while green is positive. The optimal count is where green crosses zero, not where brown itself peaks.

Constant negative slope of MU means $U''<0$: strict concavity

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The calculus lines up with the claim.""",
        r"""Brown shows marginal utility; green subtracts the constant opportunity cost of $6$. Cups are worthwhile while green is positive. The optimal count is where green crosses zero, not where brown itself peaks.

Optimal cups solve $\mathrm{MU}=6$ (green's zero), not a maximum of brown. Brown falls throughout the window and has no interior peak

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.190": [
        r"""Factor $S'(t)$ to locate critical times, then use a sign chart or $S''$ to classify local maxima and minima. On a closed interval, compare critical values with endpoints.

$S'=3t^{2}-12t+9=3(t^{2}-4t+3)=3(t-1)(t-3)$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""Factor $S'(t)$ to locate critical times, then use a sign chart or $S''$ to classify local maxima and minima. On a closed interval, compare critical values with endpoints.

At $t=1$, $S'$ changes $+$ to $-$ (for $t<1$ both factors negative so $S'>0$; between $1$ and $3$, $S'<0$)

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

The comparison confirms the claim.""",
        r"""Factor $S'(t)$ to locate critical times, then use a sign chart or $S''$ to classify local maxima and minima. On a closed interval, compare critical values with endpoints.

At $t=3$, $S'$ changes $-$ to $+$

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

The derivation agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

Compare values: $S(0)=0$, $S(1)=1-6+9=4$, $S(3)=27-54+27=0$, $S(4)=64-96+36=4$. So $t=1$ and $t=4$ tie at height $4$; the global max on the closed interval is not uniquely at $t=1$

A local maximum need not be global on a closed interval; always evaluate the function at endpoints and at every critical point inside the interval before claiming uniqueness.

The worked algebra contradicts the claim.""",
        r"""Factor $S'(t)$ to locate critical times, then use a sign chart or $S''$ to classify local maxima and minima. On a closed interval, compare critical values with endpoints.

$S''=6t-12$, so $S''(1)=-6<0$ and $S''(3)=6>0$

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

The worked steps support the claim.""",
    ],
    "MATH 11.191": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Brown crosses from $+$ to $-$ at $Q=6$, so $A$ has a local max there

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The algebra supports the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

Green is still positive at $Q=6$ (zero only at $9$), so $B$'s profit still rises there

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Integrating $P_A'>P_B'$ from $0$ to $6$ with equal starts yields $P_A(6)>P_B(6)$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

On $(6,9)$ brown is negative and green positive: $A$ contracts, $B$ expands

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculus lines up with the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

Where the marginal curves meet is a common $P'$ value, not a level of total profit

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.192": [
        r"""Read price and quantity from the demand figure before writing formulas. A marked point $(p,Q)$ fixes revenue as $R=pQ$, and the slope of linear demand supports elasticity.

The marked point $(15,30)$ gives $R=15\cdot30=450$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""Read price and quantity from the demand figure before writing formulas. A marked point $(p,Q)$ fixes revenue as $R=pQ$, and the slope of linear demand supports elasticity.

Linear demand $D=60-2p$ has $\varepsilon=\dfrac{-2p}{60-2p}$; at $p=15$ this is $\dfrac{-30}{30}=-1$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The comparison confirms the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

At unit-elastic revenue max, $MR=0$, but $Q=30$ and $C'(30)=4+\dfrac{30}{10}=7\neq0$, so not a profit max

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The sign chart points the other way.""",
        r"""Read price and quantity from the demand figure before writing formulas. A marked point $(p,Q)$ fixes revenue as $R=pQ$, and the slope of linear demand supports elasticity.

$D(10)=40$ from the figure; $C'(Q)=4+\dfrac{Q}{10}$, so $C'(40)=8$. Also $R'(p)=60-4p$, so $R'(10)=20>0$

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculus lines up with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

$AC(Q)=4+\dfrac{Q}{20}$ has positive derivative $\dfrac{1}{20}$

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The worked steps support the claim.""",
    ],
    "MATH 11.193": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

At $Q=12$, MR is above MC on the figure

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The algebra supports the claim.""",
        r"""On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost and falls once marginal cost overtakes it. Read which coloured curve is higher at the output named in the claim, and locate crossings where $MR=MC$.

The purple–brown crossing is left of the green–brown crossing, so the tax lowers optimal output

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculation disagrees with the claim.""",
        r"""On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost and falls once marginal cost overtakes it. Read which coloured curve is higher at the output named in the claim, and locate crossings where $MR=MC$.

Purple is MC plus tax; meeting brown means $MR=\mathrm{MC}+\mathrm{tax}$

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The derivation agrees with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

At $Q=20>16$, MC is above MR pre-tax

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The calculus lines up with the claim.""",
        r"""On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost and falls once marginal cost overtakes it. Read which coloured curve is higher at the output named in the claim, and locate crossings where $MR=MC$.

Post-tax FOC uses purple, not the old green. Equivalently $MR=\mathrm{MC}+4$, not $MR=\mathrm{MC}$

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.194": [
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$y=60-2x$, so $A=x(60-2x)=60x-2x^{2}$ on $(0,30)$

The constraint $2x+y=L$ gives $y=L-2x$; substituting into $A=xy$ yields a concave quadratic on $0<x<L/2$, so the unique critical point is the global maximum on that interval.

The algebra supports the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$A'=60-4x=0$ at $x=15$, and $A''<0$

The constraint $2x+y=L$ gives $y=L-2x$; substituting into $A=xy$ yields a concave quadratic on $0<x<L/2$, so the unique critical point is the global maximum on that interval.

The comparison confirms the claim.""",
        r"""Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs from the profit maximum whenever $MC>0$ at the revenue peak.

$R'=24-A=0$ at $A=24$, $R''<0$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""Use the linear fencing constraint to eliminate one variable, then maximise the reduced function on the feasible interval. Check $f''<0$ or the sign of $f'$ near the critical point.

Max area is $A(15)=450$, but revenue peaks at $A=24\ll450$. Flooding the market with area destroys price; the two maximisers differ

The constraint $2x+y=L$ gives $y=L-2x$; substituting into $A=xy$ yields a concave quadratic on $0<x<L/2$, so the unique critical point is the global maximum on that interval.

The worked algebra contradicts the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

$A=24-\dfrac12 p$ wait demand from $p=24-\frac12 A$ gives $A=48-2p$, $\varepsilon=\dfrac{-2p}{48-2p}$. At $A=24$, $p=12$, so $\varepsilon=\dfrac{-24}{24}=-1$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The constraint $2x+y=L$ gives $y=L-2x$; substituting into $A=xy$ yields a concave quadratic on $0<x<L/2$, so the unique critical point is the global maximum on that interval.

The worked steps support the claim.""",
    ],
    "MATH 11.195": [
        r"""Brown and green on the figure are average and marginal cost. Falling curves do not mean total cost falls: $C'(Q)=MC>0$ still holds. Compare heights and whether $MC=\dfrac12 AC$.

$\sqrt{16}=4$, so $AC=20$ and $MC=10$, matching the marked heights

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""Brown and green on the figure are average and marginal cost. Falling curves do not mean total cost falls: $C'(Q)=MC>0$ still holds. Compare heights and whether $MC=\dfrac12 AC$.

Identically $MC=\dfrac12 AC$ for this square-root technology

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""Brown and green on the figure are average and marginal cost. Falling curves do not mean total cost falls: $C'(Q)=MC>0$ still holds. Compare heights and whether $MC=\dfrac12 AC$.

Falling $AC$ and $MC$ do not make $C$ fall: $C'=MC>0$, so total cost still rises

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The sign chart points the other way.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

$\dfrac{C(18)}{C(9)}=\dfrac{\sqrt{18}}{\sqrt{9}}=\sqrt{2}$

For $Q=kL^{\alpha}$, doubling $L$ multiplies $Q$ by $2^{\alpha}$, not by $2$ unless $\alpha=1$; here the exponent in the production function governs the scaling.

The calculus lines up with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

$AC'=-\dfrac{40}{Q^{\dfrac{3}{2}}}<0$, so AC is still falling at $Q=25$

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The worked steps support the claim.""",
    ],
    "MATH 11.196": [
        r"""The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. Expand $P(a+h)$, subtract $P(a)$, divide by $h$, and then let $h\to 0$ to recover $P'(a)$.

Expand and cancel: the difference quotient is $2a+h-8$

After simplifying to $2a+h-6$, letting $h\to 0$ gives $P'(a)=2a-6$, matching direct differentiation of $P(x)=x^2-6x+20$.

Set the derivative equal to zero, solve for the critical input, and evaluate the second derivative or a sign chart of the first derivative to confirm a maximum rather than a minimum.

The algebra supports the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

A constant fee vanishes upon differentiation: $P'-0=P'$

Adding a constant to profit changes no derivative: $P'(x)$ is identical with or without the fee, so critical points and their classification are unchanged.

The calculation disagrees with the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$P'=2x-8$ changes $-$ to $+$ at $x=4$, and the fee does not alter that

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

The derivation agrees with the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

$R'=40-2p=0$ at $p=20$; $\varepsilon=\dfrac{-p}{40-p}=-1$ there

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculus lines up with the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$P'(5)=2$, the usual marginal interpretation of the derivative

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The worked steps support the claim.""",
    ],
    "MATH 11.197": [
        r"""When a figure plots $f$, $f'$, and $f''$ together, zeros of $f'$ mark turning points of $f$, while zeros of $f''$ with a sign change mark inflections where concavity switches.

$C''=0$ with sign change is an inflection of $C$; equivalently MC has a stationary point there

Setting $C''(Q)=0$ locates a candidate inflection; confirm by checking that $C''$ changes sign there, which is equivalent to $MC$ having a local minimum or maximum.

The algebra supports the claim.""",
        r"""Brown is $MC=C'$ and green is $C''$. Where green is negative, $MC$ falls and total cost is concave down; a zero of green with sign change marks an inflection of total cost.

$C''<0$ means $C'$ falls and $C$ is concave down

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""Brown and green on the figure are average and marginal cost. Falling curves do not mean total cost falls: $C'(Q)=MC>0$ still holds. Compare heights and whether $MC=\dfrac12 AC$.

$AC$ is minimised where $AC'=0$, equivalently $MC=AC$, not where $MC$ alone is minimised

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The sign chart points the other way.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Green at $Q=8$ reads near $4$, and brown is climbing

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculus lines up with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Positive MC means $C'>0$, so $C$ rises

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The worked steps support the claim.""",
    ],
    "MATH 11.198": [
        r"""The plotted $U'(x)$ is the derivative of output after substituting the budget constraint. Positive $U'$ means shifting spending toward $x$ raises $U$; a zero from $+$ to $-$ marks the interior maximum.

Zero of $U'$ from $+$ to $-$ at $x=10$ is the maximum of reduced $U$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

From $y=10-\dfrac12 x$, at $x=10$ one has $y=5$

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The comparison confirms the claim.""",
        r"""The plotted $U'(x)$ is the derivative of output after substituting the budget constraint. Positive $U'$ means shifting spending toward $x$ raises $U$; a zero from $+$ to $-$ marks the interior maximum.

Positive $U'$ means increasing $x$ (and cutting $y$ along the budget) raises $U$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""The plotted $U'(x)$ is the derivative of output after substituting the budget constraint. Positive $U'$ means shifting spending toward $x$ raises $U$; a zero from $+$ to $-$ marks the interior maximum.

$U'=10-x$, so $U'(4)=6$, as on the figure

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The calculus lines up with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

The corner $y=0$ gives $U=0$, the worst product value, not a max

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.199": [
        r"""EOQ minimises $\dfrac{KD}{Q}+\dfrac{hQ}{2}$. Set $TC'=0$ to balance falling ordering cost against rising holding cost, and verify $TC''>0$ for a minimum.

$TC'=-\dfrac{20000}{Q^{2}}+2=0$ gives $Q=100$

Multiplying $TC'=0$ by $Q^2$ gives $Q^2=\dfrac{KD}{h/2}$; the positive root is the EOQ. At that $Q$, ordering cost $\dfrac{KD}{Q}$ equals holding cost $\dfrac{hQ}{2}$.

The algebra supports the claim.""",
        r"""EOQ minimises $\dfrac{KD}{Q}+\dfrac{hQ}{2}$. Set $TC'=0$ to balance falling ordering cost against rising holding cost, and verify $TC''>0$ for a minimum.

$TC''=\dfrac{40000}{Q^{3}}>0$

Multiplying $TC'=0$ by $Q^2$ gives $Q^2=\dfrac{KD}{h/2}$; the positive root is the EOQ. At that $Q$, ordering cost $\dfrac{KD}{Q}$ equals holding cost $\dfrac{hQ}{2}$.

Set the derivative equal to zero, solve for the critical input, and evaluate the second derivative or a sign chart of the first derivative to confirm a maximum rather than a minimum.

The comparison confirms the claim.""",
        r"""Factor $S'(t)$ to locate critical times, then use a sign chart or $S''$ to classify local maxima and minima. On a closed interval, compare critical values with endpoints.

Factoring $S'$ yields those critical points with the usual sign chart

Classify a critical point by how the first derivative changes sign: $+\to-$ gives a local maximum and $-\to+$ a local minimum on the interval where the factorisation holds.

The derivation agrees with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$S(1)=S(4)=4$, so the global max on the closed interval is not unique to $t=1$

A local maximum need not be global on a closed interval; always evaluate the function at endpoints and at every critical point inside the interval before claiming uniqueness.

The worked algebra contradicts the claim.""",
        r"""EOQ minimises $\dfrac{KD}{Q}+\dfrac{hQ}{2}$. Set $TC'=0$ to balance falling ordering cost against rising holding cost, and verify $TC''>0$ for a minimum.

EOQ equates the two cost pieces: each equals $200$ when $Q=100$

Multiplying $TC'=0$ by $Q^2$ gives $Q^2=\dfrac{KD}{h/2}$; the positive root is the EOQ. At that $Q$, ordering cost $\dfrac{KD}{Q}$ equals holding cost $\dfrac{hQ}{2}$.

The worked steps support the claim.""",
    ],
    "MATH 11.200": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Brown's $-$ to $+$ at $2$ and $+$ to $-$ at $8$ give min then max of $P$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The algebra supports the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

Negative $P''$ is concave-down profit

Fixed setup costs enter as constants and shift the profit level but not its derivative, so the sign of profit at $t=0$ follows from evaluating the formula directly.

The comparison confirms the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

Peak of $P'$ is max slope of $P$; it lines up with $P''=0$

Evaluate the derivative only on the branch containing each test point — do not differentiate across the kink as if the rule were a single smooth formula.

The derivation agrees with the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

$P''=0$ is an inflection of $P$, not a max. The max is where $P'=0$ with $+$ to $-$ at $Q=8$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The worked algebra contradicts the claim.""",
        r"""Marginal profit is the derivative of total profit. Above the axis means a little more output raises profit; below means profit falls. A zero with a $+\to-$ sign change marks a local maximum; $-\to+$ marks a local minimum.

The sign of $P'$ alone governs monotonicity; an inflection inside an increasing stretch is allowed

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

The worked steps support the claim.""",
    ],
    "MATH 11.201": [
        r"""With $R(a)=kQ(a)$ and linear ad cost, profit maximisation sets $R'(a)=1$. Differentiate $Q(a)$ with the chain rule to obtain marginal revenue of advertising.

$Q'=10\cdot\dfrac34 a^{-\dfrac{1}{4}}=\dfrac{15}{2}a^{-\dfrac{1}{4}}$, so $R'=8Q'=60\,a^{-\dfrac{1}{4}}$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The algebra supports the claim.""",
        r"""Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of $P'$. A negative $P''$ at the candidate confirms a local maximum.

$60 a^{-\dfrac{1}{4}}=1$ gives $a^{\dfrac{1}{4}}=60$, so $a=60^{4}$, not $60^{2}$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The calculation disagrees with the claim.""",
        r"""With $R(a)=kQ(a)$ and linear ad cost, profit maximisation sets $R'(a)=1$. Differentiate $Q(a)$ with the chain rule to obtain marginal revenue of advertising.

$16^{\dfrac{1}{4}}=2$, hence $a^{-\dfrac{1}{4}}=\dfrac12$ and $R'=30>1$

A sign chart of the first derivative on either side of a zero confirms max versus min when the second derivative is inconvenient to compute.

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

The derivation agrees with the claim.""",
        r"""With $R(a)=kQ(a)$ and linear ad cost, profit maximisation sets $R'(a)=1$. Differentiate $Q(a)$ with the chain rule to obtain marginal revenue of advertising.

A concave response still allows $R'(a)-1$ to change $+$ to $-$ once

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The calculus lines up with the claim.""",
        r"""Translate the claim into the appropriate derivative or first-order condition from the stem, carry out the algebra on the given coefficients, and compare the result with the claim.

$\dfrac{Q(2a)}{Q(a)}=2^{\dfrac{3}{4}}\neq 2$

For $Q=kL^{\alpha}$, doubling $L$ multiplies $Q$ by $2^{\alpha}$, not by $2$ unless $\alpha=1$; here the exponent in the production function governs the scaling.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.202": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

At $Q=20$, $p=10$, so $pQ-C=200-80=120$, not $150$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The derivation leads to the opposite conclusion.""",
        r"""Brown and green on the figure are average and marginal cost. Falling curves do not mean total cost falls: $C'(Q)=MC>0$ still holds. Compare heights and whether $MC=\dfrac12 AC$.

$R=20Q-\dfrac12 Q^{2}$ gives $R'=20-Q$; set $MR=MC=4$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The comparison confirms the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

A constant fee in profit does not shift the $MR=MC$ condition

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The sign chart points the other way.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

$Q=16$ and $p=20-\dfrac12\cdot16=12$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The calculus lines up with the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

From $Q=40-2p$, at $p=10$ one has $\varepsilon=\dfrac{-2\cdot10}{20}=-1$

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The worked steps support the claim.""",
    ],
    "MATH 11.203": [
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

Correctly, $AC=\dfrac13 Q^{2}-4Q+30+\dfrac{90}{Q}$, so $AC'=\dfrac23 Q-4-\dfrac{90}{Q^{2}}$, not $Q-\dfrac83-\dfrac{90}{Q^{2}}$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The derivation leads to the opposite conclusion.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

$AC'(6)=\dfrac23\cdot6-4-\dfrac{90}{36}=4-4-2.5=-2.5<0$

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The comparison confirms the claim.""",
        r"""Equal revenues at the left endpoint plus strict inequality between marginal revenues on an interval integrate to a strict inequality between endpoint revenues. Apply the fundamental theorem of calculus to $R'(Q)$ or $R_e'(Q)$.

Integrating $R_e'>R'$ from $5$ to $8$ with $R_e(5)=R(5)$ yields $R_e(8)>R(8)$

With $R_e(a)=R(a)$ at the left endpoint $a$, the integral $\int_a^b R_e'(Q)\,dQ-\int_a^b R'(Q)\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e'-R'$ on $(a,b)$.

The derivation agrees with the claim.""",
        r"""Form $AC=\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$.

$AC'=0$ rearranges to $MC=AC$

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The calculus lines up with the claim.""",
        r"""An inflection of $C$ occurs where $C''$ changes sign — where $MC$ has a turn. That is different from $AC'=0$, which is equivalent to $MC=AC$.

$C''=2Q-8=0$ at $Q=4$, with sign change

Setting $C''(Q)=0$ locates a candidate inflection; confirm by checking that $C''$ changes sign there, which is equivalent to $MC$ having a local minimum or maximum.

Set the derivative equal to zero, solve for the critical input, and evaluate the second derivative or a sign chart of the first derivative to confirm a maximum rather than a minimum.

The worked steps support the claim.""",
    ],
    "MATH 11.204": [
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

Revenue peaks at $MR=0$, the green zero near $Q=10$

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

Set the derivative equal to zero, solve for the critical input, and evaluate the second derivative or a sign chart of the first derivative to confirm a maximum rather than a minimum.

The algebra supports the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

$MR=MC$ means green at height $10$, i.e. $40-2Q=10$, so $Q=15$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The comparison confirms the claim.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

At $Q=15$, brown is $p=40-15=25$, not $30$

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

Trace the named curve to the stated abscissa on the figure: above the axis means positive, a higher second curve means the upper quantity is larger, and a crossing fixes equality.

The sign chart points the other way.""",
        r"""Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, and which lies above another at the stated output, settles most claims.

The marked pair at $Q=10$ shows $p=20$ above $MR=0$

Evaluate every expression at the numerical value named in the claim before deciding whether the inequality or equality holds.

Write the defining formula from the stem first, then differentiate or substitute as needed so each displayed step is accounted for.

The calculus lines up with the claim.""",
        r"""Brown and green on the figure are average and marginal cost. Falling curves do not mean total cost falls: $C'(Q)=MC>0$ still holds. Compare heights and whether $MC=\dfrac12 AC$.

$MR=MC$ is not the $MC=AC$ condition for minimum average cost

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

Divide total cost by output before differentiating; the term $\dfrac{F}{Q}$ from fixed cost $F$ is what makes $AC'$ involve a negative power of $Q$.

The mathematics runs counter to the claim.""",
    ],
    "MATH 11.205": [
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

$R=30Q-\dfrac13 Q^{2}$, so $MR=30-\dfrac23 Q$

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The algebra supports the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

$MC=\dfrac45 Q+8$. Setting $MR=MC$ gives $30-\dfrac23 Q=\dfrac45 Q+8$, hence $22=\dfrac{22}{15}Q$, so $Q=15$

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible before differentiating; then verify $P''<0$ or a $+\to-$ sign change in $P'$ at the candidate.

The comparison confirms the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

Post-tax $MC=\dfrac45 Q+13$. The same algebra with $8$ replaced by $13$ yields a smaller positive root than $15$

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The derivation agrees with the claim.""",
        r"""Point elasticity is $\varepsilon=\dfrac{D'(p)\,p}{D(p)}$. Linear demand gives $\varepsilon=-1$ at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output.

$MR=0$ at $Q=45$. Then $p=30-15=15$, and with $Q=90-3p$ one has $\varepsilon=\dfrac{-3p}{Q}=\dfrac{-45}{45}=-1$

For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\dfrac{a}{2b}$ and $R''(Q)=-2b<0$ confirms a maximum.

With linear demand $Q=a-bp$, elasticity simplifies to $\varepsilon=\dfrac{-bp}{a-bp}$; setting $\varepsilon=-1$ recovers the revenue-maximising price.

The calculus lines up with the claim.""",
        r"""A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue maximisation is unchanged but profit maximisation equates $MR$ to $\mathrm{MC}+\text{tax}$.

Revenue depends only on the demand curve; a tax on the firm does not move the $MR=0$ output. It moves the profit-maximising output

The tax enters profit through cost: each unit costs $\mathrm{MC}+t$ to the firm, shifting the $MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged.

The mathematics runs counter to the claim.""",
    ],
}

DEEP_OVERVIEWS = {
    "MATH 11.161": "Quadratic revenue, cubic cost, and a piecewise build-time schedule must be separated carefully. Profit has its positive stationary point at $Q=10$, while revenue peaks at $Q=15$. Average cost is found by dividing cost by output before differentiating. The rival comparison follows by integrating marginal revenue, not by reversing the inequality. Rival revenue comparisons follow by integrating marginal revenue over the stated interval. Piecewise rules require one-sided derivatives at thresholds; continuity does not imply differentiability.",
    "MATH 11.162": "The caf\u00e9's profit derivative factors at $Q=10$, whereas the marginal comparison at $Q=8$ requires evaluating both $R^{\\prime}$ and $C^{\\prime}$. Its staffing rule has different local slopes on either side of $20$. Average cost and an integrated marginal-revenue comparison supply the remaining decisions. Piecewise rules require one-sided derivatives at thresholds; continuity does not imply differentiability. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.163": "Linear demand makes price elasticity especially transparent. Revenue is maximised at unit elasticity, but the positive marginal cost at that price separates revenue maximisation from profit maximisation. The remaining comparisons use the sign of a derivative. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.164": "The price converts marginal product into value of marginal product. Profit peaks where $VMP$ equals the wage, at a point where output is still rising. Keeping those two objectives separate explains the contrasting labour levels. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.165": "This threshold preserves the cost level but changes the marginal cost. Average cost must be formed before differentiating, while profit uses the revenue-minus-cost derivative. The task also distinguishes a continuous piecewise function from a differentiable one. Piecewise rules require one-sided derivatives at thresholds; continuity does not imply differentiability. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.166": "The packaging relation is a cubic, so its local change and elasticity both come from its derivative. The sales side has a quadratic revenue curve, and the tax shifts its linear marginal revenue. A marginal-revenue dominance statement must be integrated over the relevant interval. Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule. Rival revenue comparisons follow by integrating marginal revenue over the stated interval.",
    "MATH 11.167": "The levy shifts the profit derivative but does not change the demand curve. Revenue maximisation occurs at unit elasticity for this linear demand. Average cost needs a quotient before differentiation, and rival levels follow from accumulated marginal revenue. Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.168": "Square-root production produces diminishing but positive marginal product. Profit is maximised where the resulting value of marginal product equals the wage. The output elasticity describes the proportional response, so it also predicts that doubling labour does not double output. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.169": "The factory's cubic cost creates a quadratic profit derivative whose positive maximum condition occurs at $12$. The packing formula is deliberately continuous and differentiable at its threshold. Average cost requires the fixed cost to be divided by output before taking a derivative. Piecewise rules require one-sided derivatives at thresholds; continuity does not imply differentiability.",
    "MATH 11.170": "The platform's revenue peak and profit peak differ because marginal cost is positive. Converting the inverse demand into $Q(p)$ permits the elasticity calculation. The fixed per-ride commission lowers the linear profit term and shifts the profit maximum inward. Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.171": "Fixing capital reduces the two-input technology to a square-root labour schedule, but the labour elasticity remains visible in the original production exponent. The wage comparison uses value of marginal product, not the condition that physical marginal product be zero. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.172": "The solar model makes profit a concave quadratic, while physical energy alone has a different maximum. The booking rule matches both its level and its slope at ten visits, so neither continuity nor differentiability fails at the threshold. Piecewise rules require one-sided derivatives at thresholds; continuity does not imply differentiability.",
    "MATH 11.173": "The linear demand curve gives unit elasticity at its revenue maximum. Re-expressing demand as inverse demand is useful for profit in output units. Average cost combines a rising variable component with a falling fixed-cost-per-unit component, and marginal dominance determines the rival comparison. Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule. Rival revenue comparisons follow by integrating marginal revenue over the stated interval.",
    "MATH 11.174": "Cubic cost makes profit and revenue peak at different load counts. The average-cost derivative includes the declining fixed-cost share. The loading rule is designed to match both value and slope at twenty, while the subcontractor conclusion follows from integrating the marginal-revenue ordering. Rival revenue comparisons follow by integrating marginal revenue over the stated interval. Piecewise rules require one-sided derivatives at thresholds; continuity does not imply differentiability.",
    "MATH 11.175": "Inverse demand supplies marginal revenue, while the levy shifts the profit derivative. Elasticity is evaluated in the price-demand representation. The setup branches agree in both their values and slopes at twenty, and average cost is assessed from its own derivative. Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule. Piecewise rules require one-sided derivatives at thresholds; continuity does not imply differentiability.",
    "MATH 11.176": "Chain-rule revenue $R=100\\sqrt{a}$ against linear advertising cost peaks at $a=2500$, where $R'=1$. Square-root response is concave, so doubling spend does not double listeners. Positive $\\pi'$ at small $a$ means advertising is still worthwhile there. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.177": "Reduce to one variable with the fencing constraint, maximise $A=120x-2x^{2}$ at $x=30$, $y=60$. The second derivative is negative, and the sign of $A'$ shows area still rises as one approaches $30$ from the left. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.178": "EOQ calculus: set $TC'=-\\dfrac{KD}{Q}^{2}+\\dfrac{h}{2}=0$ to get $Q=100$. Holding cost is $\\dfrac{hQ}{2}$. The second derivative is positive, and nearby order sizes cost more. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.179": "Product-rule revenue from inverse demand peaks at $Q=6$ with unit elasticity. Constant MC shifts the profit max to $Q=5$. Positive MR on $(0,6)$ means revenue still rises there despite a falling price. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.180": "Positive but decreasing marginal utility ($U'>0$, $U''<0$) means risk aversion. Utility keeps rising on $(0,200)$. A mean-preserving spread reduces expected utility under concavity. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.181": "Budget reduction yields $U=10x-\\frac12 x^{2}$, maximised at $x=10$, $y=5$. The MRS matches $\\dfrac{p_x}{p_y}$, not the reciprocal. Corner solutions with $y=0$ kill the product utility. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.182": "Cubic $P'$ needs a full sign chart: local min at $4$, local max at $9$. Global claims need level comparisons the figure does not supply. A downward levy shift moves zeros and can be checked pointwise by subtracting $6$ from a read height. Several claims are read directly from curve signs, crossings, and heights on the figure. Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule.",
    "MATH 11.183": "With a curved MC, still expand while MR exceeds MC and stop at their crossing. Do not confuse that crossing with an $MR=AC$ meeting, and do not read the crossing height as total profit. Several claims are read directly from curve signs, crossings, and heights on the figure.",
    "MATH 11.184": "Three-curve consistency: zeros of green mark turns of brown; zero of purple marks an inflection; the peak of green is steepest climb, not a peak of throughput. Several claims are read directly from curve signs, crossings, and heights on the figure.",
    "MATH 11.185": "Read $C'$, $C''$, and fixed cost separately. The inflection $C''=0$ at $Q=2$ marks where MC stops falling; it is not the $AC=MC$ point. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.186": "Simplify the Newton quotient to recover $P'=2x-6$. Evaluate the tangent carefully with the point-slope form. The critical point $x=3$ is a minimum; profit rises afterward. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.187": "Square-root total cost yields falling average cost and $MC=\\frac12 AC$. Scaling $Q$ by $2$ scales $C$ by $\\sqrt{2}$ only. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.188": "Margin-per-ticket profit tracks volume up to a constant, so both peak at $t=8$. Past the peak both volume and profit decline. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.189": "Read brown for when utility still rises, and green for when cups beat the opportunity cost. Concavity follows from falling MU. Do not confuse a zero of $\\mathrm{MU}-6$ with a peak of MU. Several claims are read directly from curve signs, crossings, and heights on the figure.",
    "MATH 11.190": "Factor $S'$ to locate $t=1$ (local max) and $t=3$ (local min). Endpoint comparison shows $S(4)=S(1)=4$, so the closed-interval global max is not unique to $t=1$. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.191": "Sign-read each $P'$, then integrate a marginal inequality when starts match. Crossing heights of $P'$ are not profit levels. Several claims are read directly from curve signs, crossings, and heights on the figure.",
    "MATH 11.192": "Combine figure coordinates with the cost formula. Unit elasticity maximises revenue, not profit when MC is positive. Average cost rises with $Q$ here. Several claims are read directly from curve signs, crossings, and heights on the figure. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.193": "A parallel MC tax shift moves the MR=MC crossing left. Read pre/post crossings separately; do not keep the untaxed FOC. Several claims are read directly from curve signs, crossings, and heights on the figure. Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule.",
    "MATH 11.194": "Fence geometry maximises area at $x=15$, but downward-sloping inverse demand maximises revenue at a much smaller $A$. Unit elasticity marks that revenue peak. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.195": "Square-root learning: read $AC$ and $MC$ off the figure, keep $MC=\\frac12 AC$, and remember falling averages can coexist with rising total cost. Several claims are read directly from curve signs, crossings, and heights on the figure.",
    "MATH 11.196": "Constants shift levels not slopes. Newton recovers $P'$, and the separate ticket problem peaks at unit elasticity. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.197": "Green is the concavity meter for $C$ and the slope of MC. Do not confuse a minimum of MC with a minimum of AC. Several claims are read directly from curve signs, crossings, and heights on the figure.",
    "MATH 11.198": "Budget reduction produces a one-variable $U$ whose derivative is plotted. Read the zero for the mix; corners kill $xy$. Several claims are read directly from curve signs, crossings, and heights on the figure.",
    "MATH 11.199": "Keep the inventory FOC and the spoilage sign chart separate. Endpoint ties can deny uniqueness of a closed-interval max. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.200": "Infer turns of $P$ from zeros of $P'$, concavity from $P''$, and never treat an inflection as a profit maximum. Several claims are read directly from curve signs, crossings, and heights on the figure.",
    "MATH 11.201": "Chain-rule MR of advertising equals $1$ at the interior profit max; solve the power carefully. Concavity of $Q$ is compatible with that max. Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem.",
    "MATH 11.202": "Read $p$ off the figure, keep $MR=MC$ for the variable problem, and remember a lump-sum fee does not move optimal $Q$. Unit elasticity at $Q=20$ is a revenue property, not the profit optimum. Several claims are read directly from curve signs, crossings, and heights on the figure. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.203": "Differentiate $AC$ carefully, use the sign of $AC'$ for falling averages, integrate rival MR gaps, and link $AC'=0$ to $MC=AC$. Rival revenue comparisons follow by integrating marginal revenue over the stated interval.",
    "MATH 11.204": "Separate the $MR=0$ revenue peak from the $MR=MC$ profit peak. Read $p$ off brown at the profit $Q$. Constant MC does not make that $Q$ an AC minimiser. Several claims are read directly from curve signs, crossings, and heights on the figure. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
    "MATH 11.205": "Separate $MR=0$ (revenue) from $MR=MC$ (profit). A specific tax shifts MC and lowers optimal $Q$ but leaves the revenue peak in place. Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule. Keep $MR=0$ for revenue separate from $MR=MC$ for profit.",
}

if __name__ == "__main__":
    case_ids = sorted(DEEP_BODIES, key=lambda x: float(x.split()[-1]))
    print(f"case_id count: {len(case_ids)}")
    assert len(case_ids) == 45
    for cid in case_ids:
        assert cid in DEEP_OVERVIEWS
        assert len(DEEP_BODIES[cid]) == 5
    lengths = [len(b) for v in DEEP_BODIES.values() for b in v]
    print(f"avg body length: {sum(lengths)/len(lengths):.0f}")
    print(f"min body length: {min(lengths)}")
    assert min(lengths) >= 400
    assert sum(lengths)/len(lengths) >= 480
    forbidden = (
        'Each displayed equality is obtained',
        'Re-reading the sign of the derivative at a nearby point',
        'Keeping revenue and profit first-order conditions separate',
        'It helps to write the relevant expression explicitly',
        'A quick numerical check at a nearby point',
        'A quick sign check on either side of a critical value',
        'Substitute the numerical values from the stem into each displayed formula',
        'Work claim by claim from derivatives and sign charts',
    )
    for b in (x for v in DEEP_BODIES.values() for x in v):
        for f in forbidden:
            assert f not in b, f'forbidden {f!r}'
    print("All checks passed.")
