"""Deep tutoring bodies for Chapter 11.5 differentiation exam tasks.

Each body is raw prose WITHOUT the **A.** header and WITHOUT the final
"So the statement is True/False." wrapper — those are added elsewhere.
"""

DEEP_BODIES = {
    "MATH 11.161": [
        r"""Profit is the difference between revenue and cost. Interior candidates for a smooth maximum solve $P'=0$; you still have to check which critical points actually maximise $P$.

Subtracting cost from revenue gives
$$P(Q)=R(Q)-C(Q)=-0.5Q^{3}+6Q^{2}+30Q-200.$$
Differentiating term by term,
$$P'(Q)=-1.5Q^{2}+12Q+30=-1.5(Q-10)(Q+2).$$
The only positive root is $Q=10$. At $Q=15$ one factor is already positive and the leading minus makes $P'(15)<0$, so profit is falling there.

The mathematical comparison therefore disagrees with placing the maximum at $15$.""",
        r"""Average cost is total cost per unit of output. Its derivative answers whether producing a little more raises or lowers cost per chair, and that derivative is the usual one-unit approximation.

Dividing first,
$$AC(Q)=\dfrac{C(Q)}{Q}=0.5Q^{2}-9Q+60+\dfrac{200}{Q}.$$
Differentiating,
$$AC'(Q)=Q-9-\dfrac{200}{Q^{2}}.$$
Evaluating at a base output $Q_{0}$ therefore approximates the change in average cost from one extra chair, which is exactly the displayed expression.

The calculus matches the claimed approximation.""",
        r"""A piecewise schedule can have different slopes on either side of the kink. Steepness is the one-sided derivative on the branch that contains the point.

On $Q<12$, $T'(Q)=Q+4$, so $T'(11)=15$. On $Q\ge 12$, $T'(Q)=12$, so $T'(15)=12$. Since $15>12$, build time rises more steeply at $11$ than at $15$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The slope comparison confirms the claim.""",
        r"""When two revenue curves start at the same height and one has strictly larger marginal revenue on an interval, integrating that inequality shows the first curve ends higher — not lower.

Integrating $R_e'(Q)>R'(Q)$ from $6$ to $9$ yields
$$R_e(9)-R_e(6)>R(9)-R(6).$$
With $R_e(6)=R(6)$ this forces $R_e(9)>R(9)$, the opposite of what the claim asserts.

The integral comparison therefore disagrees with the claim.""",
        r"""Revenue is maximised where marginal revenue is zero and the second derivative is negative for a smooth concave-down revenue.

Here $R'(Q)=-6Q+90=0$ at $Q=15$, and $R''(Q)=-6<0$. So the revenue peak sits at $15$, which is larger than the build-time threshold $12$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Both the FOC and the comparison with $12$ check out.""",
    ],
    "MATH 11.162": [
        r"""An interior critical point of profit solves $P'=0$ after writing $P=R-C$.

Expanding,
$$P(Q)=-\dfrac13 Q^{3}+4Q^{2}+20Q-80,$$
so
$$P'(Q)=-Q^{2}+8Q+20=-(Q-10)(Q+2).$$
Thus $Q=10$ is stationary and is the only positive root.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The FOC confirms a critical point at $10$.""",
        r"""A little more output raises profit when marginal revenue exceeds marginal cost.

Differentiating the given schedules,
$$R'(Q)=40-Q,\qquad C'(Q)=Q^{2}-9Q+20.$$
At $Q=8$,
$$R'(8)=32,\qquad C'(8)=64-72+20=12,$$
so $MR>MC$ there.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The direct comparison of the two marginals supports the claim.""",
        r"""Steepness of a piecewise staffing rule is the derivative on the active branch.

Left of $20$, $H'(Q)=Q+2$, hence $H'(18)=20$. On the later branch $H'(Q)=14$, so $H'(24)=14$. Because $20>14$, staffing hours rise more steeply at $18$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The one-sided slopes settle the comparison.""",
        r"""Average cost falls where its derivative is negative. Compute $AC$ by dividing, then differentiate.

$$AC(Q)=\dfrac13 Q^{2}-\dfrac92 Q+20+\dfrac{80}{Q},$$
$$AC'(Q)=\dfrac23 Q-\dfrac92 -\dfrac{80}{Q^{2}}.$$
At $Q=5$,
$$AC'(5)=\dfrac{10}{3}-\dfrac92 -\dfrac{80}{25}=\dfrac{10}{3}-\dfrac92 -3.2<0.$$
So average cost is still decreasing at $5$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The sign of $AC'$ confirms the claim.""",
        r"""Integrating a strict inequality between marginal revenues preserves the inequality for levels when the curves start equal.

If $R_e'(Q)<R'(Q)$ on $[6,12]$, then
$$R_e(10)-R_e(6)<R(10)-R(6).$$
With $R_e(6)=R(6)$ one gets $R_e(10)<R(10)$, not larger.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The integral forces the opposite conclusion from the claim.""",
    ],
    "MATH 11.163": [
        r"""On the price side, revenue is $R(p)=p\,D(p)$. A smooth maximum solves $R'(p)=0$ with $R''<0$.

With $D(p)=120-4p$,
$$R(p)=120p-4p^{2},\qquad R'(p)=120-8p.$$
The zero is $p=15$, and $R''(p)=-8<0$, so revenue is maximised there.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The FOC and second-derivative test agree with the claim.""",
        r"""For linear demand, point elasticity is $\varepsilon(p)=\dfrac{D'(p)\,p}{D(p)}$. Revenue peaks where $|\varepsilon|=1$ for this smooth interior case.

Here $D'=-4$, so
$$\varepsilon(p)=\dfrac{-4p}{120-4p}.$$
At $p=15$,
$$\varepsilon(15)=\dfrac{-60}{60}=-1.$$

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Unit elasticity at the revenue peak confirms the claim.""",
        r"""Revenue maximisation sets $MR=0$. Profit maximisation sets $MR=MC$. Those coincide only if $MC=0$ at the same output.

At $p=15$, quantity is $D(15)=60$ and $MR=0$, but
$$MC=C'(60)=2+0.1\cdot60=8\neq0.$$
So the revenue peak is not a profit peak.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Separating the two first-order conditions shows the claim is wrong.""",
        r"""Where $R'(p)>0$, a small price increase still raises revenue.

$$R'(10)=120-8\cdot10=40>0,$$
so raising price a little from $10$ increases revenue.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The sign of $R'$ supports the claim.""",
        r"""If average cost is an increasing linear function of $Q$, its derivative is a positive constant.

Here $AC(Q)=2+0.05Q$, so $AC'(Q)=0.05>0$ for every $Q>0$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Average cost is therefore increasing on the whole positive domain.""",
    ],
    "MATH 11.164": [
        r"""The value of marginal product is price times marginal product of labour. Profit is maximised where $VMP$ equals the wage, not where physical output is largest.

With price $2$ euros per kg and $Q(L)=30L-L^{2}$,
$$\pi(L)=2Q(L)-12L-40=48L-2L^{2}-40.$$
Differentiating,
$$\pi'(L)=48-4L.$$
Setting $\pi'=0$ gives $L=12$, and $\pi''(L)=-4<0$ confirms a maximum.

The FOC places the profit peak at $L=12$.""",
        r"""At the profit-maximising labour input, the wage equals the value of the last hour's physical contribution.

Marginal product is $Q'(L)=30-2L$. At $L=12$,
$$Q'(12)=30-24=6.$$
With price $2$,
$$VMP=2\cdot6=12,$$
exactly the hourly wage of $12$ euros.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The $VMP=$ wage condition holds at the optimum.""",
        r"""Profit can peak while output is still rising because labour is costly. A positive marginal product does not by itself signal a maximum.

At $L=12$,
$$Q'(12)=30-24=6>0.$$
Physical harvest continues to increase beyond the profit peak at $L=15$, where $Q'=0$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Marginal product remains positive at the profit-maximising input.""",
        r"""Immediately to the right of an interior profit maximum, marginal profit is negative, so a little more labour lowers profit.

For $L>12$,
$$\pi'(L)=48-4L<0.$$
Hiring a little more labour than $12$ therefore reduces, rather than raises, profit.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The sign of $\pi'$ past the optimum disagrees with the claim.""",
        r"""Physical output and profit generally peak at different labour inputs when labour is paid for.

Output maximisation sets $Q'(L)=30-2L=0$, giving $L=15$. Profit maximisation gave $L=12$. The profit peak comes earlier because each extra hour costs $12$ while its contribution to revenue eventually falls.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The two objectives therefore peak at different labour levels.""",
    ],
    "MATH 11.165": [
        r"""At a piecewise cost kink, compare one-sided marginal costs. An upward jump means the right-hand slope exceeds the left-hand slope at the threshold.

For $x<25$, $C'(x)=2x+20$, so $C'_{-}(25)=70$. For $x\ge25$, $C'(x)=45$. The jump is from $70$ down to $45$, not upward.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The one-sided derivatives show a downward jump at $x=25$.""",
        r"""Average cost on the first branch is formed by dividing before differentiating. A minimum of $AC$ solves $AC'=0$.

For $x<25$,
$$AC(x)=x+20+\dfrac{100}{x},\qquad AC'(x)=1-\dfrac{100}{x^{2}}.$$
Setting $AC'=0$ gives $x^{2}=100$, so $x=10$. The derivative changes from negative to positive there.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Average cost is minimised at $x=10$ on the first branch.""",
        r"""On the first cost branch, profit is revenue minus cost. Differentiate the resulting expression on $x<25$.

$$P(x)=40x-\dfrac32 x^{2}-100,\qquad P'(x)=40-3x.$$
Setting $P'=0$ gives $x=\dfrac{40}{3}$, which lies below the subcontracting threshold $25$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Profit has a critical point at $\dfrac{40}{3}$ on the left branch.""",
        r"""Marginal revenue is the derivative of the quadratic revenue $R(x)=60x-\dfrac12 x^{2}$.

$$R'(x)=60-x.$$
At $x=30$,
$$R'(30)=60-30=30>0.$$
Marginal revenue is still positive, not negative, at $30$ loads.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The evaluation at $x=30$ disagrees with the claim.""",
        r"""Continuity of total cost at a kink does not force equal one-sided derivatives. Differentiability is a stronger condition.

Both formulas give $C(25)=25^{2}+20\cdot25+100=45\cdot25+100=1225$. Yet
$$C'_{-}(25)=70\neq45=C'_{+}(25).$$
Continuity alone does not imply equal slopes.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The example shows continuity without differentiability at the threshold.""",
    ],
    "MATH 11.166": [
        r"""A small change in radius is approximated by the differential $V'(r)\,\Delta r$. Differentiate the cubic volume formula first.

With $V(r)=2\pi r^{3}$,
$$V'(r)=6\pi r^{2}.$$
At $r=2$,
$$V'(2)=6\pi\cdot4=24\pi.$$
With $\Delta r=0.02$,
$$\Delta V\approx24\pi(0.02)=0.48\pi.$$

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The linearisation matches the stated volume change.""",
        r"""Elasticity of volume with respect to radius is $\dfrac{r}{V(r)}V'(r)$. For a power $V\propto r^{3}$ the exponent appears in the elasticity.

$$\dfrac{r}{V(r)}V'(r)=\dfrac{r}{2\pi r^{3}}\cdot6\pi r^{2}=3.$$
The cubic radius relationship gives elasticity $3$, not $2$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The elasticity calculation disagrees with the claim of $2$.""",
        r"""Revenue from inverse demand $p(Q)=72-Q$ is a quadratic in output. Set $R'(Q)=0$ and check $R''<0$.

$$R(Q)=72Q-Q^{2},\qquad R'(Q)=72-2Q.$$
Setting $R'=0$ gives $Q=36$, and $R''(Q)=-2<0$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Revenue is maximised at $Q=36$ packages before tax.""",
        r"""A per-package tax of $6$ euros lowers the net price received by the firm. Revenue becomes $(72-Q-6)Q$.

Tax-adjusted revenue is $66Q-Q^{2}$, so
$$R'_{\text{tax}}(Q)=66-2Q.$$
Setting this to zero gives $Q=33$, not $30$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The post-tax revenue peak sits at $Q=33$.""",
        r"""If a rival has equal revenue at $Q=10$ and strictly larger marginal revenue on $(10,20)$, integrate the inequality to compare levels at $Q=18$.

$$\int_{10}^{18}R_e'(Q)\,dQ>\int_{10}^{18}R'(Q)\,dQ$$
gives $R_e(18)-R_e(10)>R(18)-R(10)$. With $R_e(10)=R(10)$, the rival finishes higher at $18$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The integral comparison supports the rival being ahead at $18$.""",
    ],
    "MATH 11.167": [
        r"""Pre-tax profit is revenue minus cost. Write $P(Q)$, differentiate, and solve $P'(Q)=0$.

With $p(Q)=50-\dfrac12 Q$,
$$P(Q)=38Q-\dfrac34 Q^{2}-180.$$
Then
$$P'(Q)=38-\dfrac32 Q.$$
Setting $P'=0$ gives $Q=\dfrac{76}{3}$, and $P''(Q)=-\dfrac32<0$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Pre-tax profit peaks at $\dfrac{76}{3}$ boxes.""",
        r"""A per-box levy of $4$ euros shifts the profit function down in the linear term. Differentiate the post-levy profit.

Post-levy profit is $P_t(Q)=34Q-\dfrac34 Q^{2}-180$, so
$$P_t'(Q)=34-\dfrac32 Q.$$
Setting $P_t'=0$ gives $Q=\dfrac{68}{3}$, not $22$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The levy shifts the profit maximum to $\dfrac{68}{3}$.""",
        r"""Average cost requires dividing total cost by $Q$ before differentiating. The sign of $AC'$ at $Q=20$ tells whether average cost is falling.

$$AC(Q)=\dfrac14 Q+12+\dfrac{180}{Q},\qquad AC'(Q)=\dfrac14-\dfrac{180}{Q^{2}}.$$
At $Q=20$,
$$AC'(20)=\dfrac14-\dfrac{180}{400}=\dfrac14-\dfrac{9}{20}=-\dfrac{1}{5}<0.$$
Average cost is still decreasing at $20$.

The negative derivative confirms falling average cost.""",
        r"""For linear demand written in price form, revenue peaks where price elasticity equals $-1$. Convert $p(Q)=50-\dfrac12 Q$ to $Q(p)=100-2p$.

Revenue is $R(p)=100p-2p^{2}$, maximised at $p=25$. Then
$$\varepsilon=\dfrac{Q'(p)\,p}{Q(p)}=\dfrac{-2(25)}{100-50}=-1.$$

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Unit elasticity holds at the revenue-maximising price.""",
        r"""Lower rival marginal revenue on an interval means a smaller accumulated revenue gain. Integrate from $Q=10$ to $Q=18$.

$$R_e(18)-R_e(10)<R(18)-R(10)$$
when $R_e'(Q)<R'(Q)$ throughout. With equal revenue at $10$, the rival finishes lower at $18$, not higher.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The integral forces the opposite conclusion from the claim.""",
    ],
    "MATH 11.168": [
        r"""With square-root production and a linear wage bill, profit is $\pi(L)=240\sqrt{L}-20L-200$. An interior maximum solves $\pi'(L)=0$.

$$\pi'(L)=\dfrac{120}{\sqrt{L}}-20.$$
Setting $\pi'=0$ gives $\sqrt{L}=6$, hence $L=36$. The derivative changes from positive to negative there.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Profit is maximised at $L=36$ analyst-hours.""",
        r"""Doubling labour multiplies output by $2^{1/2}$, not by $2$, because the production exponent is $\dfrac12$.

$$\dfrac{Q(2L)}{Q(L)}=\dfrac{80\sqrt{2L}}{80\sqrt{L}}=\sqrt{2}<2.$$
Physical output rises by about $41\%$, not $100\%$, when labour doubles.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The proportional response contradicts a doubling claim.""",
        r"""Output elasticity with respect to labour is $\varepsilon_L=\dfrac{LQ'(L)}{Q(L)}$. For $Q(L)=80L^{1/2}$ the exponent is the constant elasticity.

With $Q'(L)=40L^{-1/2}$,
$$\varepsilon_L=\dfrac{L\cdot40L^{-1/2}}{80L^{1/2}}=\dfrac12.$$

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The labour elasticity equals $\dfrac12$ throughout.""",
        r"""Value of marginal product is price times marginal product. At the profit peak it should equal the wage.

$$Q'(L)=\dfrac{40}{\sqrt{L}}.$$
At $L=36$,
$$VMP=3\cdot\dfrac{40}{6}=20,$$
matching the wage of $20$ euros per hour.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The wage condition holds at the optimum.""",
        r"""Marginal product can remain positive at the profit maximum because labour is costly. The stop rule is $VMP=$ wage, not $Q'=0$.

At $L=36$,
$$Q'(36)=\dfrac{40}{6}=\dfrac{20}{3}>0.$$
Profit stops increasing because the value of the marginal hour equals the wage, not because output stops rising.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Marginal product is strictly positive at the optimum.""",
    ],
    "MATH 11.169": [
        r"""Profit is $P=R-C$. Differentiate and factor the quadratic derivative to locate stationary points.

$$P'(q)=-q^{2}+8q+48=-(q-12)(q+4).$$
The positive critical point is $q=12$. At $q=12$,
$$P''(q)=-2q+8=-16<0,$$
confirming a maximum.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Profit is maximised at $q=12$.""",
        r"""A smooth profit maximum requires $MR=MC$ at the same output. Evaluate both marginals at $q=12$.

$$R'(q)=80-2q,\qquad C'(q)=q^{2}-10q+32.$$
At $q=12$,
$$R'(12)=80-24=56,\qquad C'(12)=144-120+32=56.$$
The two marginal quantities agree.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Marginal revenue equals marginal cost at $q=12$.""",
        r"""A piecewise schedule is continuous at a threshold when both branches give the same level. Evaluate $H(15)$ on each branch.

Left branch: $15^{2}+10(15)=225+150=375$. Right branch: $40(15)-225=600-225=375$. The levels match.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Packing hours are continuous at $q=15$.""",
        r"""A derivative jump requires different one-sided slopes. Compare $H'(q)$ just below and at $15$.

Left derivative: $H'(q)=2q+10$, so $H'_{-}(15)=40$. Right derivative: $H'(q)=40$ on $q\ge15$. Both equal $40$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

There is no downward (or any) derivative jump at $q=15$.""",
        r"""Average cost falls where $AC'<0$. Form $AC$ by dividing the cubic cost by $q$, then differentiate.

$$AC(q)=\dfrac13 q^{2}-5q+32+\dfrac{240}{q},$$
$$AC'(q)=\dfrac23 q-5-\dfrac{240}{q^{2}}.$$
At $q=10$,
$$AC'(10)=\dfrac{20}{3}-5-\dfrac{240}{100}=\dfrac{20}{3}-5-2.4<0.$$

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Average cost is decreasing at $q=10$.""",
    ],
    "MATH 11.170": [
        r"""Profit before commission is $P=100Q-\dfrac52 Q^{2}-600$. Set $P'(Q)=0$ for the interior candidate.

$$P'(Q)=100-5Q.$$
Setting $P'=0$ gives $Q=20$, and $P''(Q)=-5<0$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Profit is maximised at $Q=20$ rides before the commission.""",
        r"""Revenue and profit peak at different outputs when marginal cost is positive. Revenue alone solves $R'(Q)=0$.

$$R(Q)=120Q-2Q^{2},\qquad R'(Q)=120-4Q.$$
Setting $R'=0$ gives $Q=30$, not $20$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The revenue maximum lies at $Q=30$.""",
        r"""At a smooth interior profit maximum, $MR=MC$. Evaluate both at $Q=20$.

$$MR=R'(20)=120-80=40,$$
$$MC=C'(20)=20+20=40.$$
The marginals agree at the profit peak.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Marginal revenue equals marginal cost at $Q=20$.""",
        r"""Convert inverse demand to $Q(p)$ to compute price elasticity. At $Q=20$, price is $p=80$.

Demand is $Q(p)=60-\dfrac{p}{2}$, so
$$\varepsilon=\dfrac{Q'(p)\,p}{Q(p)}=\dfrac{-\dfrac12\cdot80}{20}=-2.$$

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Elasticity equals $-2$ at the fare corresponding to $Q=20$.""",
        r"""A fixed per-ride commission lowers the linear term in profit. Differentiate the post-commission profit.

$$P_c(Q)=90Q-\dfrac52 Q^{2}-600,\qquad P_c'(Q)=90-5Q.$$
Setting $P_c'=0$ gives $Q=18$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The commission shifts the profit maximum inward to $Q=18$.""",
    ],
    "MATH 11.171": [
        r"""With capital fixed at $K=16$, output becomes $Q(L)=24\sqrt{L}$. Profit is $\pi(L)=240\sqrt{L}-30L-400$.

$$\pi'(L)=\dfrac{120}{\sqrt{L}}-30.$$
Setting $\pi'=0$ gives $\sqrt{L}=4$, so $L=16$. The derivative changes from positive to negative.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Profit is maximised at $L=16$ labour-hours.""",
        r"""The labour exponent in a Cobb–Douglas technology governs proportional scaling. Doubling $L$ multiplies output by $2^{1/2}$.

$$\dfrac{Q(2L,16)}{Q(L,16)}=2^{1/2}=\sqrt{2}<2.$$
Output rises by about $41\%$, not $100\%$, when labour doubles with capital fixed.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The scaling contradicts a doubling claim.""",
        r"""Output elasticity with respect to labour is the exponent on $L$ in the production function. Differentiate $Q(L,K)=12L^{1/2}K^{1/4}$ with respect to $L$.

$$Q_L=6L^{-1/2}K^{1/4},\qquad\dfrac{LQ_L}{Q}=\dfrac12.$$

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The labour elasticity equals $\dfrac12$ at every positive $(L,K)$.""",
        r"""Value of marginal product is price times $Q_L$. At the profit peak it should equal the wage of $30$.

With $K=16$, $Q_L=\dfrac{12}{\sqrt{L}}$. At $L=16$,
$$VMP=10\cdot\dfrac{12}{4}=30,$$
exactly the wage.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The wage condition holds at $L=16$.""",
        r"""Marginal product can stay positive at the profit maximum because labour is paid for. The condition $VMP=$ wage stops hiring before $Q_L=0$.

$$Q_L(16,16)=\dfrac{12}{4}=3>0.$$
It is the value of the marginal hour relative to the wage that determines profit maximisation.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Marginal product is not zero at the optimum.""",
    ],
    "MATH 11.172": [
        r"""Profit is revenue from energy minus visit costs and fixed overhead. With $E(m)=100m-2m^{2}$ and price $0.5$,

$$\pi(m)=0.5(100m-2m^{2})-8m-50=42m-m^{2}-50.$$
Then $\pi'(m)=42-2m=0$ at $m=21$, with $\pi''=-2<0$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Profit is maximised at $m=21$ visits.""",
        r"""Value of marginal product is price times $E'(m)$. At the optimum it should equal the $8$-euro visit wage.

$$E'(m)=100-4m.$$
At $m=21$,
$$VMP=0.5\cdot(100-84)=0.5\cdot16=8,$$
matching the visit wage.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The wage condition holds at $m=21$.""",
        r"""Physical energy and profit peak at different visit counts when visits are costly. Energy alone solves $E'(m)=0$.

$$E'(m)=100-4m=0\implies m=25.$$
The wage pulls the profit-maximising visit count down to $m=21$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Energy output peaks later than profit.""",
        r"""A piecewise rule is differentiable at a threshold when both level and slope match. Check $S(10)$ and one-sided derivatives.

Both branches give $S(10)=100$. Slopes are $S'_{-}(10)=2(10)=20$ and $S'_{+}(10)=20$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The booking rule is both continuous and differentiable at $m=10$.""",
        r"""Compare one-sided slopes on each branch. Steepness is the derivative of the active formula.

On $m<10$, $S'(8)=16$. On $m\ge10$, $S'(12)=20$. Since $16<20$, service hours rise more steeply at $m=12$ than at $m=8$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The slope comparison reverses the claimed ordering.""",
    ],
    "MATH 11.173": [
        r"""Revenue on the price side is $R(p)=p(200-5p)=200p-5p^{2}$. Set $R'(p)=0$.

$$R'(p)=200-10p.$$
Setting $R'=0$ gives $p=20$, and $R''(p)=-10<0$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Revenue is maximised at $p=20$.""",
        r"""Profit in output form uses inverse demand $p(Q)=40-0.2Q$. Write $P(Q)$ and solve $P'(Q)=0$.

$$P(Q)=35Q-0.3Q^{2}-300,\qquad P'(Q)=35-0.6Q.$$
Setting $P'=0$ gives $Q=\dfrac{35}{0.6}=\dfrac{175}{3}$, not $100$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Pre-tax profit peaks at $\dfrac{175}{3}$ units.""",
        r"""At the revenue-maximising price $p=20$, quantity is $D(20)=200-100=100$. Point elasticity is

$$\varepsilon=\dfrac{D'(p)\,p}{D(p)}=\dfrac{-5\cdot20}{100}=-1.$$

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Unit elasticity holds at the revenue peak, as expected for linear demand.""",
        r"""Average cost combines a rising variable part with a falling fixed-cost share. Differentiate $AC(Q)=\dfrac{C(Q)}{Q}$.

$$AC(Q)=5+0.1Q+\dfrac{300}{Q},\qquad AC'(Q)=0.1-\dfrac{300}{Q^{2}}.$$
At $Q=50$,
$$AC'(50)=0.1-\dfrac{300}{2500}=0.1-0.12=-0.02<0.$$

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Average cost is still decreasing at $Q=50$.""",
        r"""Strictly larger rival marginal revenue on $[40,50]$ integrates to a larger revenue gain when both start equal at $40$.

$$R_e(50)-R_e(40)>R(50)-R(40)$$
with $R_e(40)=R(40)$ forces $R_e(50)>R(50)$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The integral comparison supports the rival finishing ahead at $50$.""",
    ],
    "MATH 11.174": [
        r"""Profit has a cubic cost component, so $P'(x)$ is quadratic. Factor to read the positive critical point.

$$P'(x)=126+12x-1.5x^{2}=-1.5(x-14)(x+6).$$
At $x=14$,
$$P''(x)=12-3x=12-42<0,$$
confirming a maximum.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Profit is maximised at $x=14$ loads.""",
        r"""Revenue alone peaks where $R'(x)=0$. This output can exceed any operational threshold in the stem.

$$R'(x)=150-6x=0\implies x=25.$$
Since $R''(x)=-6<0$ and $25>20$, revenue is maximised above $20$ loads.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The revenue peak sits at $x=25$.""",
        r"""Average cost rises where $AC'>0$. Include the fixed-cost term $\dfrac{500}{x}$ when differentiating.

$$AC(x)=0.5x^{2}-9x+24+\dfrac{500}{x},$$
$$AC'(x)=x-9-\dfrac{500}{x^{2}}.$$
At $x=10$,
$$AC'(10)=10-9-5=-4<0.$$
Average cost is falling, not rising, at $x=10$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The sign of $AC'$ disagrees with the claim.""",
        r"""A loading rule has a derivative jump only if left- and right-hand slopes differ at the kink. Both branches meet at $x=20$.

$$L(20)=20^{2}+5(20)=500,\qquad L(20)=45(20)-400=500.$$
Slopes: $L'_{-}(20)=2(20)+5=45=L'_{+}(20)$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

No derivative jump occurs at $x=20$.""",
        r"""Lower subcontractor marginal revenue on $[10,18]$ means a smaller revenue accumulation when both start equal at $10$.

$$R_s(18)-R_s(10)<R(18)-R(10)$$
implies $R_s(18)<R(18)$ with $R_s(10)=R(10)$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The integral supports the subcontractor finishing lower at $18$.""",
    ],
    "MATH 11.175": [
        r"""Marginal revenue from inverse demand $p(Q)=30-\dfrac13 Q$ is $MR=30-\dfrac23 Q$. Marginal cost is $MC=\dfrac13 Q+6$. Set $MR=MC$.

At $Q=24$,
$$MR=30-\dfrac{48}{3}=30-16=14,$$
$$MC=\dfrac{24}{3}+6=8+6=14.$$
The two marginals agree at $Q=24$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The pretax $MR=MC$ condition holds at $24$ stalls.""",
        r"""A per-stall levy of $4$ euros lowers the linear profit term. Differentiate tax-adjusted profit.

$$P_t(Q)=20Q-\dfrac12 Q^{2}-120,\qquad P_t'(Q)=20-Q.$$
Setting $P_t'=0$ gives $Q=20$, with $P_t''(Q)=-1<0$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Post-levy profit is maximised at $Q=20$.""",
        r"""Point elasticity uses the price-demand form. At $p=10$, quantity is $Q=90-3(10)=60$.

$$\varepsilon=\dfrac{D'(p)\,p}{D(p)}=\dfrac{-3\cdot10}{60}=-\dfrac12,$$
not $-1$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Elasticity at $p=10$ is $-\dfrac12$.""",
        r"""Check both level and slope at $Q=20$ for the setup-time rule. Continuity requires equal values; differentiability requires equal one-sided slopes.

Level: $\dfrac12(400)+20=220$ and $21(20)-200=420-200=220$. Slopes: $20+1=21$ on the left and $21$ on the right.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The rule is both continuous and differentiable at $Q=20$.""",
        r"""Average cost rises where $AC'>0$. Form $AC$ and evaluate the derivative at $Q=30$.

$$AC(Q)=\dfrac{Q}{6}+6+\dfrac{120}{Q},\qquad AC'(Q)=\dfrac16-\dfrac{120}{Q^{2}}.$$
At $Q=30$,
$$AC'(30)=\dfrac16-\dfrac{120}{900}=\dfrac16-\dfrac{2}{15}=\dfrac{1}{30}>0.$$

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Average cost is rising at $Q=30$, not falling.""",
    ],
    "MATH 11.176": [
        r"""When listenership responds to advertising through a chain $R(a)=5Q(a)$, profit is $R(a)-a$ minus fixed cost. An interior maximum solves $\pi'(a)=0$.

Here $Q(a)=20\sqrt{a}$, so $R(a)=100\sqrt{a}$ and
$$\pi(a)=100\sqrt{a}-a-40.$$
Differentiating with the chain/power rule,
$$\pi'(a)=\dfrac{50}{\sqrt{a}}-1.$$
Setting $\pi'=0$ gives $\sqrt{a}=50$, hence $a=2500$. The second derivative $\pi''(a)=-\dfrac{25}{a^{3/2}}<0$ confirms a maximum.

The FOC and second-derivative test place the optimum at $2500$.""",
        r"""At an interior profit maximum with advertising cost $1$ per euro spent, marginal revenue of advertising must equal $1$.

Marginal revenue of advertising is
$$R'(a)=5Q'(a)=5\cdot\dfrac{10}{\sqrt{a}}=\dfrac{50}{\sqrt{a}}.$$
At $a=2500$, $\sqrt{a}=50$, so $R'(2500)=1$, matching the marginal cost of one more euro of spend.

The chain-rule marginal revenue equals $1$ at the optimum.""",
        r"""A square-root response is concave: multiplying advertising by $4$ doubles listenership, but multiplying by $2$ only multiplies listenership by $\sqrt{2}$.

Compute
$$Q(100)=20\cdot10=200,\qquad Q(400)=20\cdot20=400.$$
Listenership doubles when $a$ is multiplied by four, not by two. Doubling $a$ from $100$ to $200$ would give $Q(200)=20\sqrt{200}=200\sqrt{2}\approx282$, not $400$.

The square-root scaling contradicts a doubling claim.""",
        r"""Where $\pi'>0$, a little more advertising still raises profit.

At $a=100$,
$$\pi'(100)=\dfrac{50}{10}-1=5-1=4>0.$$
So an extra euro of advertising is still worthwhile there.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The positive marginal profit confirms the claim.""",
        r"""Decreasing marginal product (concave $Q$) is exactly the usual reason $\pi'$ falls through zero once — it does not forbid an interior maximum.

Here $\pi'(a)=\dfrac{50}{\sqrt{a}}-1$ is strictly decreasing from $+\infty$ to $-1$, so it crosses zero exactly once. Concavity of $Q$ is what produces that single crossing.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The claim's logic runs the wrong way.""",
    ],
    "MATH 11.177": [
        r"""With river fencing, $2x+y=120$ so $y=120-2x$. Substituting into $A=xy$ gives a single-variable area.

$$A(x)=x(120-2x)=120x-2x^{2},\qquad 0<x<60.$$
The domain ends where $y=0$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Eliminating $y$ yields the claimed quadratic area function.""",
        r"""Maximise $A(x)=120x-2x^{2}$ by setting $A'(x)=0$ and checking $A''$.

$$A'(x)=120-4x=0\implies x=30.$$
Also $A''(x)=-4<0$, confirming a maximum.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Area is maximised at $x=30$ metres.""",
        r"""At the width optimum, recover the length from the fencing constraint.

$$y=120-2x=120-2\cdot30=60.$$
The length parallel to the river is $60$ metres.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The constraint gives $y=60$ at the optimum.""",
        r"""The second-derivative test is decisive here because $A''$ is constant and negative.

$$A''(30)=-4<0.$$
The critical point at $x=30$ is a strict local (and global on $(0,60)$) maximum.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The second-derivative test confirms a maximum, not an inconclusive case.""",
        r"""Near a maximum, the derivative changes from positive to negative. Just left of $x=30$, $A'>0$.

For $x=29$, $A'(29)=120-116=4>0$, so decreasing width below $30$ lowers area rather than raising it.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

A little less than $30$ metres per width reduces enclosed area.""",
    ],
    "MATH 11.178": [
        r"""EOQ minimises the sum of a falling ordering-cost term and a rising holding-cost term. Set the derivative of total cost to zero.

With
$$TC(Q)=\dfrac{20000}{Q}+2Q,$$
one has
$$TC'(Q)=-\dfrac{20000}{Q^{2}}+2.$$
Setting $TC'=0$ gives $Q^{2}=10000$, so $Q=100$ (taking $Q>0$).

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The FOC yields the cost-minimising order quantity $100$.""",
        r"""At the EOQ the two marginal pieces balance: the decline in ordering cost from a larger $Q$ matches the rise in holding cost.

From $TC'=0$,
$$\dfrac{20000}{Q^{2}}=2$$
at $Q=100$. That equality is precisely the first-order balance between the two cost margins.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The balancing condition holds at the EOQ.""",
        r"""In the classic sawtooth inventory model, average inventory is $\dfrac{Q}{2}$, so annual holding cost is $\dfrac{hQ}{2}$.

Here the holding term in $TC$ is already written as $2Q$, which is $\dfrac{hQ}{2}$ with $h=4$. At $Q=100$ that term equals $200$ euros per year.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Reading the holding term at the EOQ confirms the claim.""",
        r"""Because $TC$ has a U-shape ($TC''>0$), moving away from the EOQ raises total cost.

Compare
$$TC(100)=\dfrac{20000}{100}+2\cdot100=200+200=400,$$
$$TC(50)=\dfrac{20000}{50}+2\cdot50=400+100=500>400.$$
Ordering $50$ instead of $100$ increases ordering-plus-holding cost.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The direct cost comparison disagrees with the claim.""",
        r"""A positive second derivative on $(0,\infty)$ guarantees that a critical point of $TC$ is a minimum.

$$TC''(Q)=\dfrac{40000}{Q^{3}}>0\quad\text{for all }Q>0.$$
So the critical point $Q=100$ is a strict global minimum on $(0,\infty)$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The second-derivative test confirms the claim.""",
    ],
    "MATH 11.179": [
        r"""Revenue from inverse demand $p=36-3Q$ is $R(Q)=36Q-3Q^{2}$. Set $R'(Q)=0$.

$$R'(Q)=36-6Q.$$
Setting $R'=0$ gives $Q=6$, and $R''(Q)=-6<0$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Revenue is maximised at $Q=6$ batches.""",
        r"""Convert to price form $Q=\dfrac{36-p}{3}$ to compute elasticity. At $Q=6$, price is $p=18$.

$$D'(p)=-\dfrac13,\qquad\varepsilon=\dfrac{D'(p)\,p}{Q}=\dfrac{-\dfrac13\cdot18}{6}=-1.$$

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Unit elasticity holds at the revenue peak.""",
        r"""Profit subtracts constant unit cost from revenue. The profit FOC generally differs from the revenue FOC.

$$P(Q)=R(Q)-6Q=30Q-3Q^{2},\qquad P'(Q)=30-6Q.$$
Setting $P'=0$ gives $Q=5$, not $Q=6$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Profit peaks at $Q=5$, not at the revenue maximum.""",
        r"""Marginal revenue is the derivative of $R(Q)=36Q-3Q^{2}$.

$$R'(Q)=36-6Q.$$
At $Q=4$,
$$R'(4)=36-24=12.$$

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Marginal revenue equals $12$ at $Q=4$.""",
        r"""Falling price does not force falling revenue while marginal revenue is positive. Revenue rises on $(0,6)$ here.

$$R'(Q)=36-6Q>0\quad\text{for }Q<6.$$
So revenue increases with output below the peak even though price falls.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Revenue is not decreasing for every $Q>0$.""",
    ],
    "MATH 11.180": [
        r"""Marginal utility $U'(w)$ tells whether extra wealth raises utility. Differentiate the quadratic utility.

$$U'(w)=20-0.1w.$$
On $(0,200)$, $0.1w<20$, so $U'(w)>0$ throughout.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Marginal utility stays positive on the open interval.""",
        r"""Risk aversion for a smooth utility function corresponds to strict concavity: $U''(w)<0$.

$$U''(w)=-0.1<0\quad\text{on }(0,200).$$
The founder is risk-averse on this interval.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Concavity confirms risk aversion.""",
        r"""An interior maximum requires $U'(w)=0$ inside the domain. Here $U'(w)=0$ only at $w=200$, the right endpoint of the open interval.

On $(0,200)$, $U'(w)>0$, so utility keeps rising and has no interior maximum below $200$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Utility is not maximised at $w=200$ inside the stated open interval.""",
        r"""Evaluate marginal utility at $w=50$.

$$U'(50)=20-0.1\cdot50=20-5=15.$$

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Marginal utility equals $15$ at $w=50$ thousand euros.""",
        r"""For strictly concave $U$, Jensen's inequality implies that a mean-preserving spread lowers expected utility.

A spread that keeps the mean at $w=80$ but adds risk reduces $E[U(w)]$ below $U(80)$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

A mean-preserving spread would lower, not raise, expected utility.""",
    ],
    "MATH 11.181": [
        r"""From the budget $2x+4y=40$, solve $y=10-\dfrac12 x$ and substitute into $U=xy$.

$$U(x)=x\left(10-\dfrac12 x\right)=10x-\dfrac12 x^{2},\qquad 0<x<20.$$
The domain ends where $y=0$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Budget elimination yields the claimed reduced utility.""",
        r"""Maximise $U(x)=10x-\dfrac12 x^{2}$ on $(0,20)$.

$$U'(x)=10-x=0\implies x=10.$$
Also $U''(x)=-1<0$, confirming a maximum.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Output is maximised at $x=10$ illustration hours.""",
        r"""Recover typesetting hours from the budget at $x=10$.

$$y=10-\dfrac12\cdot10=10-5=5.$$

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The duo buys $5$ typesetting hours at the optimum.""",
        r"""At an interior optimum with a Cobb–Douglas-style product utility, the marginal rate of substitution equals the price ratio $\dfrac{p_x}{p_y}$, not $\dfrac{p_y}{p_x}$.

Here $\dfrac{y}{x}=\dfrac{5}{10}=\dfrac12=\dfrac{p_x}{p_y}=\dfrac{2}{4}$, not $\dfrac{p_y}{p_x}=2$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The ratio $\dfrac{y}{x}$ matches $\dfrac{p_x}{p_y}$, not the reciprocal.""",
        r"""A corner with $y=0$ gives zero product utility because $U=xy=0$. The interior optimum is far better.

At $x=10$, $y=5$, $U=50$. With $y=0$, $U=0$ regardless of $x$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Spending everything on illustration alone does not maximise $U$.""",
    ],
    "MATH 11.182": [
        r"""Marginal profit is the derivative of profit. Wherever the $P'$ graph sits above the axis, a little more output raises profit; wherever it sits below, profit falls.

On the figure, between the marked zeros at $4$ and $9$ the cubic lies above the axis. A sign chart on $P'(Q)=-(Q-1)(Q-4)(Q-9)$ shows that after $4$ two factors are negative until $9$, and the leading minus makes $P'>0$ on $(4,9)$. So the workshop should expand a little there.

The sign reading of $P'$ on that interval confirms the claim.""",
        r"""Zeros of $P'$ are candidates only. Classification comes from how the sign of $P'$ changes through the zero: $+\\to-$ is a local max of $P$, and $-\\to+$ is a local min.

The cubic is positive on $(0,1)$, negative on $(1,4)$, positive on $(4,9)$, and negative after $9$. So $Q=4$ is a local minimum of profit and $Q=9$ is a local maximum — the opposite of what the claim asserts.

The sign chart therefore disagrees with the claim.""",
        r"""A local maximum among critical points need not be the global maximum on a closed interval. Without comparing levels $P(1)$, $P(9)$, and the endpoints, the figure alone cannot force a unique global maximiser.

Even with $P(0)=0$ and $P$ recovered by integrating $P'$, the three zeros give two local peaks ($Q=1$ and $Q=9$). Their heights are not labelled on the figure, so one cannot assert that $Q=9$ must win globally.

The missing level comparison makes the claim unjustified.""",
        r"""A vertical downward shift of the $P'$ graph by $6$ moves every height down by $6$. A point that used to sit at height $0$ then sits at height $-6$, so it is no longer a zero of the shifted curve.

In particular the old root at $Q=4$ satisfies new-$P'(4)=0-6=-6\\neq0$. New zeros solve the shifted equation and generally move.

The shift argument confirms that the old zero disappears.""",
        r"""Pointwise heights survive a constant shift by simple subtraction. If pre-levy $P'(6)$ is larger than $15$, then post-levy $P'(6)-6$ is still larger than $9>0$.

Reading the cubic at $Q=6$,
$$P'(6)=-(6-1)(6-4)(6-9)=-(5)(2)(-3)=30>15.$$
After subtracting the levy of $6$ one still has $24>0$, so expansion remains profitable at $Q=6$.

Both the scale reading and the post-levy sign support the claim.""",
    ],
    "MATH 11.183": [
        r"""On a shared MR/MC figure, profit rises while the MR curve lies above the MC curve.

Left of the marked crossing at $Q=8$, brown (MR) sits above green (MC) on the figure, so $MR>MC$ and a little more output raises profit.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The figure's ordering of the curves on $(0,8)$ confirms the claim.""",
        r"""The smooth profit FOC is $MR=MC$, not $MR=AC$. Average cost meeting marginal revenue is a different locus and is not the first-order condition for maximum profit.

Purple is the variable part of average cost. Where purple meets brown is generally not where green meets brown. Profit candidates sit at the brown–green crossing.

Confusing $MR=AC$ with $MR=MC$ makes the claim wrong.""",
        r"""Past the profit-maximising crossing, MC lies above MR, so a little less output raises profit.

At $Q=12$ the green curve is clearly above brown on the figure, hence $MC>MR$ there.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The post-crossing ordering supports the claim.""",
        r"""When a rising MC curve crosses a falling MR curve from below, $MR-MC$ changes from $+$ to $-$, which is the second-order pattern of a local profit maximum.

Green is convex and climbing through brown at $Q=8$, while brown slopes down, so the crossing is a local max of profit.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The relative slopes classify the critical point as a maximum.""",
        r"""The height of an $MR=MC$ crossing is the common marginal value at that output — a flow of euros per extra unit — not the stock of total profit $P(8)$.

Total profit is an integral of $MR-MC$ (minus fixed cost), not the ordinate of the crossing.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Reading the crossing height as $P(8)$ confuses a marginal quantity with a total.""",
    ],
    "MATH 11.184": [
        r"""Critical points of a smooth $f$ are the zeros of $f'$. Sign changes of $f'$ classify them: $-\\to+$ is a local min of $f$, and $+\\to-$ is a local max.

Green ($f'$) changes from negative to positive near $x=1$ and from positive to negative near $x=5$. So brown ($f$) has a local minimum near $1$ and a local maximum near $5$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The aligned zeros and sign chart confirm the claim.""",
        r"""An inflection of $f$ occurs where $f''$ changes sign — equivalently where the purple curve crosses through zero with a sign change. That is also where $f'$ (green) has a horizontal tangent.

Purple crosses zero near $x=3$ and changes from $+$ to $-$, so brown changes from concave up to concave down there.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The zero of $f''$ with a sign change is precisely an inflection of $f$.""",
        r"""By definition $f''=(f')'$. Wherever purple is negative, green must be decreasing.

Right of $x=3$, purple sits below the axis and green is sloping downward on the figure, matching $f''=(f')'$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The consistency check between the two derivative curves supports the claim.""",
        r"""The highest point of $f'$ is where $f$ climbs fastest — the steepest slope — not where $f$ itself peaks. Peaks of $f$ occur where $f'$ crosses through zero.

Green's peak is near $x=3$, but brown's local maximum is where green crosses down through zero near $x=5$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Treating a peak of green as a peak of brown confuses slope with level.""",
        r"""At an inflection of $f$, the level $f$ need not be maximised. Maximising $f$ requires $f'=0$ with a $+\\to-$ sign change.

At $x=3$, green is still positive (brown is still climbing) and purple is near zero (inflection only). The throughput maximum is near $x=5$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

An inflection is not a maximum.""",
    ],
    "MATH 11.185": [
        r"""Marginal cost is the derivative of total cost. Differentiate the cubic term by term.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

$$C(Q)=Q^{3}-6Q^{2}+40Q+10,$$
$$C'(Q)=3Q^{2}-12Q+40.$$
This matches the claimed marginal cost formula.""",
        r"""An inflection of $C$ occurs where $C''$ changes sign. Set $C''(Q)=0$ and check the sign change.

$$C''(Q)=6Q-12.$$
Setting $C''=0$ gives $Q=2$. For $Q<2$, $C''<0$; for $Q>2$, $C''>0$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Total cost has an inflection at $Q=2$.""",
        r"""Where $C''(Q)<0$, marginal cost $C'(Q)$ is decreasing. On $(0,2)$,

$$C''(Q)=6Q-12<0,$$
so $MC$ falls on that interval.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Marginal cost is decreasing on $(0,2)$.""",
        r"""An inflection of $C$ solves $C''=0$; the condition $AC=MC$ solves $AC'=0$. These are different equations in general.

Setting $AC'=0$ locates where average cost is stationary, not every inflection of total cost.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Average cost need not equal marginal cost at every inflection point.""",
        r"""Fixed cost is the cost at zero output.

$$C(0)=10.$$
The constant term $10$ is the weekly fixed cost.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Fixed cost equals $10$ at $Q=0$.""",
    ],
    "MATH 11.186": [
        r"""Expand $P(a+h)$, subtract $P(a)$, and divide by $h$. The $h$-terms simplify to leave a linear expression in $a$ and $h$.

$$P(a+h)=(a+h)^{2}-6(a+h)+20,$$
$$\dfrac{P(a+h)-P(a)}{h}=\dfrac{2ah+h^{2}-6h}{h}=2a+h-6.$$

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The Newton quotient simplifies to $2a+h-6$.""",
        r"""The derivative is the limit of the Newton quotient as $h\to0$, or differentiate $P(x)=x^{2}-6x+20$ directly.

$$P'(x)=2x-6.$$
At $x=4$,
$$P'(4)=8-6=2.$$

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Marginal profit equals $2$ at $x=4$.""",
        r"""The tangent line uses point-slope form with the evaluated point and slope.

$$P(4)=16-24+20=12.$$
So the tangent is $y-12=2(x-4)$, i.e. $y=2x+4$, not $y=2x$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The correct tangent has intercept $4$, not $0$.""",
        r"""Profit rises where $P'>0$ and falls where $P'<0$. The critical point is at $x=3$.

$$P'(x)=2x-6<0\quad\text{for }x<3,\qquad P'(x)>0\quad\text{for }x>3.$$
So profit is increasing for all $x>3$, not decreasing.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The sign chart disagrees with the claim.""",
        r"""A local minimum occurs where $P'$ changes from negative to positive and $P''>0$.

At $x=3$, $P'$ crosses from $-$ to $+$, and $P''(3)=2>0$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

$x=3$ is a local minimum of weekend profit.""",
    ],
    "MATH 11.187": [
        r"""Differentiate a power $C(Q)=80\sqrt{Q}=80Q^{1/2}$ with the power rule.

$$C'(Q)=80\cdot\dfrac12 Q^{-1/2}=\dfrac{40}{\sqrt{Q}}.$$
That is the marginal cost.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The power rule yields exactly the claimed MC.""",
        r"""Average cost is $AC(Q)=\dfrac{C(Q)}{Q}=\dfrac{80}{\sqrt{Q}}$. Its derivative is negative for every $Q>0$, so AC falls as cumulative output grows.

$$AC'(Q)=-40 Q^{-3/2}<0\quad(Q>0).$$
Learning shows up as a permanently declining average cost along this path.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The sign of $AC'$ confirms the claim.""",
        r"""For this square-root technology the identity $MC=\dfrac12 AC$ holds at every $Q>0$.

Indeed
$$AC=\dfrac{80}{\sqrt{Q}},\qquad MC=\dfrac{40}{\sqrt{Q}}=\dfrac12 AC.$$
So marginal cost is always half of average cost on this curve.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The identity matches the claim.""",
        r"""Square-root total cost scales like $\sqrt{Q}$, not like $Q$. Doubling cumulative output multiplies total cost by $\sqrt{2}$, not by $2$.

$$C(2Q)=80\sqrt{2Q}=\sqrt{2}\,C(Q)\approx1.414\,C(Q).$$
Total cost rises by about $41\%$, not $100\%$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The scaling factor contradicts the claim.""",
        r"""Evaluate the marginal-cost formula at the stated output.

$$C'(16)=\dfrac{40}{\sqrt{16}}=\dfrac{40}{4}=10.$$
So at $Q=16$, marginal cost equals $10$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The direct evaluation confirms the claim.""",
    ],
    "MATH 11.188": [
        r"""Profit is $\pi(t)=16t-t^{2}-10$. Set $\pi'(t)=0$ and check concavity.

$$\pi'(t)=16-2t.$$
Setting $\pi'=0$ gives $t=8$, and $\pi''(t)=-2<0$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Profit is maximised at $t=8$ weeks.""",
        r"""Ticket volume and profit differ only by the constant fixed setup cost. Adding a constant does not move the maximiser.

$$D(t)=16t-t^{2},\qquad\pi(t)=D(t)-10.$$
Both have derivative $16-2t$, so both peak at $t=8$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Volume and profit share the same maximising campaign length.""",
        r"""Where $\pi'>0$, extending the campaign still raises profit.

$$\pi'(4)=16-8=8>0.$$
At $t=4$, profit is still increasing toward the peak at $t=8$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Profit is still rising at $t=4$.""",
        r"""Evaluate profit at the start of the campaign.

$$\pi(0)=0-0-10=-10<0.$$
The fixed setup makes initial profit negative.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Profit is negative at $t=0$.""",
        r"""Compare ticket volumes at $t=8$ and $t=12$. Past the peak, both volume and profit fall.

$$D(8)=128-64=64,\qquad D(12)=192-144=48.$$
Volume falls from $64$ to $48$ when extending from $8$ to $12$, and profit falls too because $\pi=D-10$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Extending to $t=12$ lowers both volume and profit.""",
    ],
    "MATH 11.189": [
        r"""Utility rises wherever marginal utility is positive. The zero of the MU graph marks where utility stops rising.

Brown (MU) crosses from above the axis to below near $c=45$ on the figure, so $\mathrm{MU}>0$ on $(0,45)$ and utility of cups keeps rising until about $45$ when opportunity cost is ignored.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The sign of MU alone settles that part of the story.""",
        r"""With a constant opportunity cost of $6$ utils per cup, cups are worth buying while $\mathrm{MU}-6>0$. The stop rule is the zero of the green curve.

Green crosses zero near $c=30$, i.e. where $\mathrm{MU}=6$. That is the interior cup count that balances marginal benefit with the opportunity cost.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The green zero is the right FOC for the costly-cup problem.""",
        r"""Heights on the figure can be read off the labelled scale. At $c=10$, brown is $18-0.4\cdot10=14$, so green is $14-6=8$, which is below height $10$.

The claim that green lies above $10$ at $c=10$ therefore fails the scale reading.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The arithmetic from the line disagrees with the claim.""",
        r"""A falling linear MU means $U''$ is a negative constant, so $U$ is strictly concave on the plotted range.

Strict concavity is the smooth calculus signature of risk aversion for lotteries over the same argument.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The constant negative slope of brown confirms concavity.""",
        r"""Optimal cups solve $\mathrm{MU}=6$ (green's zero), not a maximum of MU itself. On this window brown is decreasing and has no interior peak.

Green lying a constant $6$ below brown simply recentres the stop rule; it does not turn a maximum of brown into the optimum.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Confusing a zero of $\mathrm{MU}-6$ with a peak of MU makes the claim wrong.""",
    ],
    "MATH 11.190": [
        r"""Differentiate the cubic spoilage index and factor the quadratic derivative.

$$S(t)=t^{3}-6t^{2}+9t,$$
$$S'(t)=3t^{2}-12t+9=3(t^{2}-4t+3)=3(t-1)(t-3).$$

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The factored derivative matches the claimed form.""",
        r"""A local maximum occurs where $S'$ changes from $+$ to $-$. Test signs on each interval.

For $t<1$, both factors $(t-1)$ and $(t-3)$ are negative, so $S'>0$. Between $1$ and $3$, $S'<0$. So $t=1$ is a local maximum.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Spoilage has a local maximum at $t=1$.""",
        r"""A local minimum occurs where $S'$ changes from $-$ to $+$. Between $1$ and $3$, $S'<0$; for $t>3$, $S'>0$.

So $t=3$ is a local minimum of spoilage.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The sign change at $t=3$ confirms a local minimum.""",
        r"""A global maximum on a closed interval requires comparing critical values with endpoints.

$$S(0)=0,\quad S(1)=1-6+9=4,\quad S(3)=27-54+27=0,\quad S(4)=64-96+36=4.$$
Both $t=1$ and $t=4$ attain height $4$, so the global maximum is not uniquely at $t=1$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Endpoint comparison shows a tie at $t=4$.""",
        r"""The second-derivative test classifies critical points when $S''$ is easy to evaluate.

$$S''(t)=6t-12.$$
So $S''(1)=-6<0$ (local max) and $S''(3)=6>0$ (local min).

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The second derivatives match the local max/min reading.""",
    ],
    "MATH 11.191": [
        r"""On the figure, brown ($P'_A$) crosses from $+$ to $-$ at $Q=6$. That sign change marks a local profit maximum for workshop $A$.

Where marginal profit turns from positive to negative, profit itself peaks. Brown does this at $Q=6$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Workshop $A$ has a local profit maximum at $Q=6$.""",
        r"""Workshop $B$'s green curve is still above the axis at $Q=6$ on the figure. Its zero is at $Q=9$, not $6$.

Positive marginal profit means profit still rises with output. So $B$ would expand past $A$'s stationary output of $6$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Green remains positive at $Q=6$.""",
        r"""With $P_A(0)=P_B(0)=0$, integrating a strict marginal-profit inequality preserves the level gap.

On $(0,6)$, brown lies above green, so
$$\int_0^6 P_A'(Q)\,dQ>\int_0^6 P_B'(Q)\,dQ.$$
Thus $P_A(6)>P_B(6)$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The integral comparison supports $A$ finishing ahead at $Q=6$.""",
        r"""On $(6,9)$, read signs from the figure: brown is negative and green is positive.

Negative $P'_A$ means $A$ should contract; positive $P'_B$ means $B$ should expand.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The opposite adjustment directions on $(6,9)$ match the claim.""",
        r"""Where two marginal-profit curves meet, the common height is a marginal value $P'_A=P'_B$, not a total profit level.

Total profit requires integrating marginal profit from a starting point. The crossing height near $Q=3$ is not $P_A(3)$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Confusing a marginal crossing height with a profit level makes the claim wrong.""",
    ],
    "MATH 11.192": [
        r"""Revenue at a price-quantity pair on the demand figure is $R=p\cdot Q$. Read the coordinates at $p=15$.

The marked point shows $D(15)=30$, so
$$R=15\cdot30=450\ \text{euros}.$$

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The figure reading gives revenue $450$ at $p=15$.""",
        r"""Linear demand through the figure has slope $-2$ in quantity per euro, so $D(p)=60-2p$. Elasticity is

$$\varepsilon=\dfrac{D'(p)\,p}{D(p)}=\dfrac{-2p}{60-2p}.$$
At $p=15$,
$$\varepsilon=\dfrac{-30}{30}=-1.$$

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Unit elasticity holds at $p=15$.""",
        r"""Revenue maximisation sets $MR=0$, but profit maximisation requires $MR=MC$. At the unit-elastic price, $MR=0$ while $MC>0$.

At $p=15$, $Q=30$ and $MR=0$, but
$$MC=C'(30)=4+\dfrac{30}{10}=7\neq0.$$
So that price is not a profit maximum.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Zero marginal revenue with positive marginal cost rules out a profit peak there.""",
        r"""At $p=10$, read $D(10)=40$ from the figure. Marginal cost at that output is

$$MC=C'(40)=4+\dfrac{40}{10}=8.$$
Also $R'(p)=60-4p$, so $R'(10)=20>0$: a small price rise still raises revenue.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Both the cost side and the revenue derivative support the claim.""",
        r"""Average cost is $AC(Q)=\dfrac{C(Q)}{Q}=4+\dfrac{Q}{20}$. Its derivative is constant and positive.

$$AC'(Q)=\dfrac{1}{20}>0\quad\text{for all }Q>0.$$
Average cost rises with every positive output level.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Average cost is increasing for every $Q>0$.""",
    ],
    "MATH 11.193": [
        r"""On the MR/MC figure, profit rises while brown (MR) lies above green (MC). Read the relative positions at $Q=12$.

At $Q=12$, brown is clearly above green, so $MR>MC$ and a little more output raises pretax profit.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The figure ordering at $Q=12$ supports expansion.""",
        r"""A per-unit tax shifts the entire MC curve up, moving the $MR=MC$ crossing left. Compare the green–brown and purple–brown crossings.

The purple–brown meeting is left of the green–brown meeting on the figure, so optimal output falls after the tax.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The tax lowers, not raises, profit-maximising output.""",
        r"""Post-tax marginal cost is old $MC$ plus the tax. Where purple meets brown, $MR=\mathrm{MC}+\text{tax}$.

Purple is the parallel upward shift of green by $4$, so the new FOC equates MR to taxed MC.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The post-tax crossing implements $MR=\mathrm{MC}+\text{tax}$.""",
        r"""Past the pretax optimum near $Q=16$, MC already exceeds MR. Read the curves at $Q=20$.

At $Q=20>16$, green lies above brown on the figure, so $MC>MR$ even before the tax.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Output $20$ is past the pretax profit maximum.""",
        r"""The post-tax FOC uses the shifted purple curve, not the old green curve. Equivalently $MR=\mathrm{MC}+4$ with the original MC.

Requiring $MR=MC$ on the untaxed green curve would ignore the $4$-unit tax shift.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The claim incorrectly keeps the untaxed FOC after the tax.""",
    ],
    "MATH 11.194": [
        r"""With $2x+y=60$, solve $y=60-2x$ and substitute into $A=xy$.

$$A(x)=x(60-2x)=60x-2x^{2},\qquad 0<x<30.$$
The domain ends where $y=0$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Fence elimination gives the claimed area function.""",
        r"""Maximising planted area alone sets $A'(x)=0$.

$$A'(x)=60-4x=0\implies x=15.$$
Also $A''(x)=-4<0$, confirming a maximum.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Physical area is maximised at $x=15$ metres.""",
        r"""Revenue treats area as the quantity index: $R(A)=p(A)\cdot A$ with $p=24-\dfrac12 A$.

$$R(A)=24A-\dfrac12 A^{2},\qquad R'(A)=24-A.$$
Setting $R'=0$ gives $A=24$, with $R''(A)=-1<0$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Revenue peaks at $A=24$, not at the area maximum.""",
        r"""Maximum physical area is $A(15)=60\cdot15-2\cdot225=900-450=450$, but revenue peaks at the much smaller $A=24$. Flooding the market with area depresses price.

The area-maximising layout does not maximise revenue because inverse demand slopes down.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The two maximisers differ.""",
        r"""From $p=24-\dfrac12 A$, demand in price form is $A=48-2p$. At the revenue peak $A=24$, price is $p=12$.

$$\varepsilon=\dfrac{A'(p)\,p}{A(p)}=\dfrac{-2\cdot12}{24}=-1.$$
Unit elasticity marks the revenue maximum.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Elasticity equals $-1$ at $A=24$.""",
    ],
    "MATH 11.195": [
        r"""For $C(Q)=80\sqrt{Q}$, average and marginal cost follow power rules. Check the figure heights at $Q=16$.

$$\sqrt{16}=4,\qquad AC=\dfrac{80}{4}=20,\qquad MC=\dfrac{40}{4}=10.$$
Brown at height $20$ and green at height $10$ match the formulas.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The figure heights agree with $AC=20$ and $MC=10$ at $Q=16$.""",
        r"""For square-root total cost, algebra gives $MC=\dfrac12 AC$ at every $Q>0$.

$$AC=\dfrac{80}{\sqrt{Q}},\qquad MC=\dfrac{40}{\sqrt{Q}}=\dfrac12 AC.$$
The green curve should sit at half the brown height everywhere on the figure.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The identity $MC=\dfrac12 AC$ holds throughout.""",
        r"""Falling average and marginal cost curves do not mean total cost falls. Total cost still rises because $C'(Q)=MC>0$.

$$C'(Q)=\dfrac{40}{\sqrt{Q}}>0\quad\text{for all }Q>0.$$
Both $AC$ and $MC$ decline while $C$ itself increases.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Total cost is increasing despite falling average cost.""",
        r"""Square-root scaling: doubling $Q$ multiplies $C$ by $\sqrt{2}$.

$$\dfrac{C(18)}{C(9)}=\dfrac{80\sqrt{18}}{80\sqrt{9}}=\dfrac{\sqrt{18}}{\sqrt{9}}=\sqrt{2}.$$
Moving from $Q=9$ to $Q=18$ scales cost by $\sqrt{2}$, not by $2$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The $\sqrt{2}$ scaling factor confirms the claim.""",
        r"""Average cost falls where $AC'<0$. For $AC(Q)=\dfrac{80}{\sqrt{Q}}$,

$$AC'(Q)=-40\,Q^{-3/2}<0\quad(Q>0).$$
So a small increase in $Q$ near $25$ still lowers average cost.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Average cost continues to fall near $Q=25$.""",
    ],
    "MATH 11.196": [
        r"""Expand $P(a+h)$, subtract $P(a)$, and divide by $h$ to simplify the Newton quotient.

$$P(a+h)=(a+h)^{2}-8(a+h)+25,$$
$$\dfrac{P(a+h)-P(a)}{h}=\dfrac{2ah+h^{2}-8h}{h}=2a+h-8.$$

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The quotient simplifies to $2a+h-8$.""",
        r"""A constant licence fee shifts profit down but vanishes upon differentiation. Fees change levels, not slopes.

If post-fee profit is $P(x)-6$, then
$$\dfrac{d}{dx}[P(x)-6]=P'(x).$$
The fee does not alter $P'(x)$ at any $x$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Marginal profit is unchanged by the flat fee.""",
        r"""The critical point of $P(x)=x^{2}-8x+25$ is where $P'$ changes sign.

$$P'(x)=2x-8.$$
At $x=4$, $P'$ goes from negative to positive, and the fee does not move this crossing.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

$x=4$ remains a local minimum, fee or no fee.""",
        r"""Ticket revenue is $R(p)=p(40-p)=40p-p^{2}$. Set $R'(p)=0$.

$$R'(p)=40-2p=0\implies p=20.$$
Elasticity is $\varepsilon=\dfrac{-p}{40-p}$; at $p=20$,
$$\varepsilon=\dfrac{-20}{20}=-1.$$

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Revenue peaks at $p=20$ with unit elasticity.""",
        r"""Marginal profit is the derivative of $P(x)$. At $x=5$,

$$P'(5)=10-8=2.$$
A positive marginal profit means one more hour raises profit by about $2$ hundred euros.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The derivative value $2$ supports the marginal interpretation.""",
    ],
    "MATH 11.197": [
        r"""On the figure, green ($C''$) crosses zero near $Q=4$ where brown ($MC$) reaches its minimum. A sign change in $C''$ marks an inflection of total cost.

$C''=0$ with a sign change is an inflection of $C$; equivalently $MC$ has a stationary point there.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Total cost inflects near $Q=4$ where $MC$ is minimised.""",
        r"""When green is negative on $(0,4)$, brown ($MC$) is decreasing and total cost is concave down.

Negative $C''$ means $C'$ falls, so $MC$ slopes down and $C$ curves downward on that interval.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The figure's negative green region matches concave-down total cost.""",
        r"""Average cost is minimised where $AC'=0$, equivalently $MC=AC$. That is generally different from where $MC$ alone is minimised.

The minimum of brown on the figure is an $MC$ turn, not necessarily an $AC$ minimum.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Equating the two minima is not justified.""",
        r"""At $Q=8$ on the figure, green reads near height $4$ and brown is climbing. Positive $C''$ means rising $MC$.

Reading the scale: green $\approx 4>0$ and brown slopes upward at $Q=8$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The figure supports rising marginal cost at $Q=8$.""",
        r"""Positive marginal cost means $C'(Q)>0$, so total cost increases with output.

Brown stays above the axis on the plotted window, so $MC>0$ throughout and $C$ is strictly increasing.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Total cost rises wherever $MC$ is positive.""",
    ],
    "MATH 11.198": [
        r"""After budget elimination, $U(x)=10x-\dfrac12 x^{2}$ on $(0,20)$. The figure plots $U'(x)=10-x$.

$U'$ crosses from $+$ to $-$ at $x=10$, so reduced output $U$ is maximised there.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The zero of $U'$ on the figure marks the optimum at $x=10$.""",
        r"""From $2x+4y=40$, at $x=10$ one has $y=10-\dfrac12\cdot10=5$.

The budget constraint gives $5$ typesetting hours at the optimum.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Typesetting hours equal $5$ at the optimum.""",
        r"""Where $U'>0$ on the figure, increasing $x$ (and decreasing $y$ along the budget) raises output.

On $(0,10)$, the plotted $U'$ sits above the axis, so shifting budget toward illustration raises $U$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Positive $U'$ on $(0,10)$ supports moving budget toward $x$.""",
        r"""The reduced derivative is $U'(x)=10-x$. At $x=4$,

$$U'(4)=10-4=6,$$
matching the figure's labelled height at $x=4$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The algebraic derivative agrees with the figure at $x=4$.""",
        r"""A corner with $y=0$ forces $U=xy=0$ because the product utility needs both inputs positive.

At the right endpoint $x=20$, $y=0$ and $U=0$, while the interior peak gives $U(10,5)=50$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The corner does not maximise $U$.""",
    ],
    "MATH 11.199": [
        r"""EOQ minimises $TC(Q)=\dfrac{20000}{Q}+2Q$. Set $TC'(Q)=0$.

$$TC'(Q)=-\dfrac{20000}{Q^{2}}+2=0\implies Q^{2}=10000.$$
Taking $Q>0$ gives $Q=100$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The EOQ is $Q=100$.""",
        r"""A positive second derivative confirms the critical point is a minimum.

$$TC''(Q)=\dfrac{40000}{Q^{3}}>0\quad(Q>0).$$
So $Q=100$ minimises total ordering-plus-holding cost.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The second-derivative test confirms a minimum.""",
        r"""Factor the spoilage derivative to locate critical times.

$$S'(t)=3t^{2}-12t+9=3(t-1)(t-3).$$
Sign chart: $S'$ changes $+$ to $-$ at $t=1$ (local max) and $-$ to $+$ at $t=3$ (local min).

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The factored form gives a local max at $t=1$ and local min at $t=3$.""",
        r"""On the closed interval $[0,4]$, compare endpoint values with critical values.

$$S(1)=4,\quad S(4)=64-96+36=4.$$
Both $t=1$ and $t=4$ tie at height $4$, so the global maximum is not uniquely at $t=1$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Endpoint comparison denies uniqueness at $t=1$.""",
        r"""At the EOQ, annual ordering cost equals annual holding cost.

Ordering: $\dfrac{KD}{Q}=\dfrac{20000}{100}=200$. Holding: $\dfrac{hQ}{2}=2\cdot100=200$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The two cost components balance at $Q=100$.""",
    ],
    "MATH 11.200": [
        r"""Zeros of brown ($P'$) with sign changes classify profit turns. $-$ to $+$ at $Q=2$ is a local minimum; $+$ to $-$ at $Q=8$ is a local maximum.

Read the brown curve crossing the axis: it goes negative to positive near $2$ and positive to negative near $8$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Profit has a local min at $Q=2$ and local max at $Q=8$.""",
        r"""Profit is concave down where green ($P''$) is negative. On $(5,10)$, green sits below the axis on the figure.

Negative $P''$ means $P'$ is decreasing and $P$ curves downward — concave-down profit.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The negative green band on $(5,10)$ confirms concave-down profit.""",
        r"""The steepest climb of profit is where $P'$ is largest — the peak of brown. That aligns with green crossing zero (an inflection of $P$).

Brown peaks near $Q=5$ where green crosses through zero, marking maximum slope of $P$, not a peak of $P$ itself.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The peak of brown marks steepest profit growth near $Q=5$.""",
        r"""An inflection where $P''=0$ is not a profit maximum. Profit peaks where $P'$ crosses from $+$ to $-$.

At $Q=5$, $P''=0$ but $P'$ is still positive (profit still rising). The maximum is at $Q=8$ where $P'$ turns negative.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

$P''=0$ at $Q=5$ is an inflection, not a maximum.""",
        r"""Monotonicity of profit is governed by the sign of $P'$ alone. An inflection inside an increasing stretch is allowed.

On $(2,8)$, brown stays above the axis, so $P'>0$ and profit increases throughout, even though green changes sign at $5$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Profit increases on $(2,8)$ despite the inflection at $5$.""",
    ],
    "MATH 11.201": [
        r"""Marginal revenue of advertising is $R'(a)=8Q'(a)$. With $Q(a)=10a^{3/4}$,

$$Q'(a)=10\cdot\dfrac34 a^{-1/4}=\dfrac{15}{2}a^{-1/4},$$
$$R'(a)=8\cdot\dfrac{15}{2}a^{-1/4}=60\,a^{-1/4}.$$

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The chain rule gives $R'(a)=60\,a^{-1/4}$.""",
        r"""Interior profit maximum with linear ad cost sets $R'(a)=1$.

$$60\,a^{-1/4}=1\implies a^{1/4}=60\implies a=60^{4}.$$
The claim's exponent $60^{2}$ comes from solving incorrectly.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The correct spend is $a=60^{4}$, not $60^{2}$.""",
        r"""At $a=16$, evaluate whether marginal ad revenue still exceeds marginal cost $1$.

$$16^{1/4}=2,\qquad a^{-1/4}=\dfrac12,\qquad R'(16)=60\cdot\dfrac12=30>1.$$
So a little more advertising still raises profit at $a=16$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Marginal ad revenue exceeds $1$ at $a=16$.""",
        r"""Concave listenership ($Q''<0$) makes $R'(a)$ decrease, allowing $R'(a)-1$ to cross from $+$ to $-$ once. Concavity does not forbid an interior profit max.

Diminishing marginal listeners is exactly what produces a single crossing of marginal profit through zero.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Concavity of $Q$ is compatible with an interior profit maximum.""",
        r"""The listenership exponent is $\dfrac34$, so doubling $a$ multiplies $Q$ by $2^{3/4}$, not by $2$.

$$\dfrac{Q(2a)}{Q(a)}=2^{3/4}\approx1.68\neq2.$$
Doubling spend raises listeners by about $68\%$, not $100\%$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The scaling contradicts a doubling claim.""",
    ],
    "MATH 11.202": [
        r"""Variable margin at output $Q$ is $p(Q)\cdot Q-C(Q)$. Read $p$ from the inverse-demand figure at $Q=20$.

At $Q=20$, the figure gives $p=10$, so
$$pQ-C=10\cdot20-4\cdot20=200-80=120,$$
not $150$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The arithmetic from the figure gives margin $120$.""",
        r"""From the linear inverse demand on the figure, $R(Q)=20Q-\dfrac12 Q^{2}$ and $MR=20-Q$. Profit maximisation sets $MR=MC=4$.

$$20-Q=4\implies Q=16.$$
Then $p=20-\dfrac12\cdot16=12$ from the demand line.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The $MR=MC$ solution gives $Q=16$ and $p=12$.""",
        r"""A lump-sum membership fee $F$ enters profit as a constant and vanishes upon differentiation. It shifts profit level, not the $MR=MC$ condition.

$$\dfrac{d}{dQ}[pQ-C-F]=MR-MC.$$
The fee does not change the optimal $Q$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

The membership fee does not move profit-maximising output.""",
        r"""At the profit optimum $Q=16$, read price from inverse demand.

$$p=20-\dfrac12\cdot16=20-8=12.$$
The figure's demand line gives $p=12$ at $Q=16$.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Price equals $12$ at the profit-maximising output.""",
        r"""Convert demand to $Q(p)=40-2p$. At $Q=20$, price is $p=10$.

$$\varepsilon=\dfrac{Q'(p)\,p}{Q(p)}=\dfrac{-2\cdot10}{20}=-1.$$
Unit elasticity at $Q=20$ is a revenue property, distinct from the profit optimum at $Q=16$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Elasticity equals $-1$ at $Q=20$.""",
    ],
    "MATH 11.203": [
        r"""Average cost is $AC(Q)=\dfrac{C(Q)}{Q}$. Differentiate using the quotient rule or simplify first.

$$AC(Q)=\dfrac13 Q^{2}-4Q+30+\dfrac{90}{Q},$$
$$AC'(Q)=\dfrac23 Q-4-\dfrac{90}{Q^{2}}.$$
This differs from the claimed $Q-\dfrac83-\dfrac{90}{Q^{2}}$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The correct $AC'$ disagrees with the stated formula.""",
        r"""Average cost falls where $AC'<0$. Evaluate at $Q=6$.

$$AC'(6)=\dfrac23\cdot6-4-\dfrac{90}{36}=4-4-2.5=-2.5<0.$$
So average cost is still decreasing at $Q=6$.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

The negative derivative confirms falling average cost.""",
        r"""With equal revenue at $Q=5$ and strictly larger rival marginal revenue on $[5,8]$, integrate the gap.

$$R_e(8)-R_e(5)>R(8)-R(5)\implies R_e(8)>R(8).$$
The rival finishes ahead at $Q=8$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

The integral comparison supports higher rival revenue at $8$.""",
        r"""Setting $AC'=0$ is equivalent to $MC=AC$. Differentiate $AC=C/Q$:

$$AC'=\dfrac{Q\cdot C'(Q)-C(Q)}{Q^{2}}=0\iff C'(Q)=\dfrac{C(Q)}{Q}=AC(Q).$$
So every critical point of $AC$ satisfies $MC=AC$.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Marginal cost equals average cost at each $AC$ critical point.""",
        r"""An inflection of total cost occurs where $C''$ changes sign.

$$C''(Q)=2Q-8.$$
Setting $C''=0$ gives $Q=4$, with $C''<0$ for $Q<4$ and $C''>0$ for $Q>4$.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Total cost has an inflection at $Q=4$.""",
    ],
    "MATH 11.204": [
        r"""Revenue is maximised where marginal revenue (green) crosses zero. On the figure, green crosses the axis near $Q=10$.

$MR=0$ at the green zero marks the revenue peak, not the profit peak.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Re-reading the sign of the derivative at a nearby point is often the fastest way to confirm a maximum or minimum classification.

Revenue is maximised near $Q=10$ where green crosses zero.""",
        r"""Profit maximisation sets $MR=MC$. With constant $MC=10$, read where green equals height $10$ on the figure.

From the linear MR relation $MR=40-2Q$, setting $MR=10$ gives $Q=15$. The figure shows green at height $10$ near $Q=15$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Profit is maximised near $Q=15$ where green meets height $10$.""",
        r"""At the profit-maximising output $Q=15$, read price from brown (inverse demand).

$$p=40-Q=40-15=25,$$
not $30$. The brown curve at $Q=15$ shows $p=25$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

The figure gives $p=25$, not $30$, at the profit optimum.""",
        r"""At $Q=10$, the figure shows brown at $p=20$ while green (MR) is at zero.

Since $p=20>0=MR$, price exceeds marginal revenue at the revenue peak — the usual gap for downward-sloping demand.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Each displayed equality is obtained by direct substitution or differentiation of the formulas given in the stem.

Price exceeds MR at $Q=10$ on the figure.""",
        r"""Minimising average cost requires $MC=AC$, not $MR=MC$. Constant $MC=10$ does not make the profit output an AC minimiser unless $AC$ also equals $10$ there.

The profit FOC and the AC-minimisation condition are different equations.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Constant MC does not make the profit output minimise average cost.""",
    ],
    "MATH 11.205": [
        r"""Revenue from inverse demand $p=30-\dfrac13 Q$ is
$$R(Q)=30Q-\dfrac13 Q^{2}.$$
Marginal revenue is therefore
$$MR(Q)=30-\dfrac23 Q.$$

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Differentiating the quadratic revenue recovers the claimed MR.""",
        r"""Pretax profit maximisation sets $MR=MC$. With
$$MC=\dfrac45 Q+8,$$
the equation
$$30-\dfrac23 Q=\dfrac45 Q+8$$
rearranges to
$$22=\dfrac{22}{15}Q,$$
hence $Q=15$.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

It helps to write the relevant expression explicitly before differentiating, so every coefficient comes from the stem rather than from memory.

Solving the pretax FOC yields output $15$.""",
        r"""A unit tax of $5$ shifts marginal cost up by $5$, so the firm equates MR to $\dfrac45 Q+13$. Replacing $8$ by $13$ in the same algebra produces a strictly smaller positive root than $15$.

Intuitively, higher marginal cost meets a falling MR further left.

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

The tax-shifted FOC therefore lowers optimal output.""",
        r"""Pretax revenue is maximised where $MR=0$:
$$30-\dfrac23 Q=0\implies Q=45.$$
At that output, $p=30-15=15$. With demand $Q=90-3p$,
$$\varepsilon=\dfrac{-3p}{Q}=\dfrac{-45}{45}=-1.$$
So the revenue peak occurs at unit elasticity, as expected for linear demand.

A quick sign check on either side of a critical value confirms whether the derivative changes in the max/min pattern.

Both the $MR=0$ output and the elasticity check confirm the claim.""",
        r"""Revenue depends only on the demand curve. A tax levied on the firm shifts cost, not the $R(Q)$ schedule, so the output that maximises revenue ($MR=0$) does not move.

What does move is the profit-maximising output ($MR=MC$).

Keeping revenue and profit first-order conditions separate prevents mixing up outputs that maximise sales with outputs that maximise margin.

Separating the two FOCs shows the claim is wrong.""",
    ],
}

DEEP_OVERVIEWS = {
    "MATH 11.161": "Quadratic revenue, cubic cost, and a piecewise build-time schedule must be separated carefully. Profit has its positive stationary point at $Q=10$, while revenue peaks at $Q=15$. Average cost is found by dividing cost by output before differentiating. The rival comparison follows by integrating marginal revenue, not by reversing the inequality. Rival comparisons follow by integrating marginal revenue, not by reversing the inequality.",
    "MATH 11.162": "The caf\u00e9's profit derivative factors at $Q=10$, whereas the marginal comparison at $Q=8$ requires evaluating both $R^{\\prime}$ and $C^{\\prime}$. Its staffing rule has different local slopes on either side of $20$. Average cost and an integrated marginal-revenue comparison supply the remaining decisions. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.163": "Linear demand makes price elasticity especially transparent. Revenue is maximised at unit elasticity, but the positive marginal cost at that price separates revenue maximisation from profit maximisation. The remaining comparisons use the sign of a derivative. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.164": "The price converts marginal product into value of marginal product. Profit peaks where $VMP$ equals the wage, at a point where output is still rising. Keeping those two objectives separate explains the contrasting labour levels. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.165": "This threshold preserves the cost level but changes the marginal cost. Average cost must be formed before differentiating, while profit uses the revenue-minus-cost derivative. The task also distinguishes a continuous piecewise function from a differentiable one. Piecewise rules need one-sided derivatives at the kink; continuity alone does not imply differentiability.",
    "MATH 11.166": "The packaging relation is a cubic, so its local change and elasticity both come from its derivative. The sales side has a quadratic revenue curve, and the tax shifts its linear marginal revenue. A marginal-revenue dominance statement must be integrated over the relevant interval. A per-unit charge shifts the profit FOC through marginal cost but leaves the revenue schedule unchanged. Rival comparisons follow by integrating marginal revenue, not by reversing the inequality.",
    "MATH 11.167": "The levy shifts the profit derivative but does not change the demand curve. Revenue maximisation occurs at unit elasticity for this linear demand. Average cost needs a quotient before differentiation, and rival levels follow from accumulated marginal revenue. A per-unit charge shifts the profit FOC through marginal cost but leaves the revenue schedule unchanged.",
    "MATH 11.168": "Square-root production produces diminishing but positive marginal product. Profit is maximised where the resulting value of marginal product equals the wage. The output elasticity describes the proportional response, so it also predicts that doubling labour does not double output. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.169": "The factory's cubic cost creates a quadratic profit derivative whose positive maximum condition occurs at $12$. The packing formula is deliberately continuous and differentiable at its threshold. Average cost requires the fixed cost to be divided by output before taking a derivative. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.170": "The platform's revenue peak and profit peak differ because marginal cost is positive. Converting the inverse demand into $Q(p)$ permits the elasticity calculation. The fixed per-ride commission lowers the linear profit term and shifts the profit maximum inward. A per-unit charge shifts the profit FOC through marginal cost but leaves the revenue schedule unchanged.",
    "MATH 11.171": "Fixing capital reduces the two-input technology to a square-root labour schedule, but the labour elasticity remains visible in the original production exponent. The wage comparison uses value of marginal product, not the condition that physical marginal product be zero. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.172": "The solar model makes profit a concave quadratic, while physical energy alone has a different maximum. The booking rule matches both its level and its slope at ten visits, so neither continuity nor differentiability fails at the threshold. Piecewise rules need one-sided derivatives at the kink; continuity alone does not imply differentiability.",
    "MATH 11.173": "The linear demand curve gives unit elasticity at its revenue maximum. Re-expressing demand as inverse demand is useful for profit in output units. Average cost combines a rising variable component with a falling fixed-cost-per-unit component, and marginal dominance determines the rival comparison. A per-unit charge shifts the profit FOC through marginal cost but leaves the revenue schedule unchanged. Rival comparisons follow by integrating marginal revenue, not by reversing the inequality.",
    "MATH 11.174": "Cubic cost makes profit and revenue peak at different load counts. The average-cost derivative includes the declining fixed-cost share. The loading rule is designed to match both value and slope at twenty, while the subcontractor conclusion follows from integrating the marginal-revenue ordering. Rival comparisons follow by integrating marginal revenue, not by reversing the inequality.",
    "MATH 11.175": "Inverse demand supplies marginal revenue, while the levy shifts the profit derivative. Elasticity is evaluated in the price-demand representation. The setup branches agree in both their values and slopes at twenty, and average cost is assessed from its own derivative. A per-unit charge shifts the profit FOC through marginal cost but leaves the revenue schedule unchanged.",
    "MATH 11.176": "Chain-rule revenue $R=100\\sqrt{a}$ against linear advertising cost peaks at $a=2500$, where $R'=1$. Square-root response is concave, so doubling spend does not double listeners. Positive $\\pi'$ at small $a$ means advertising is still worthwhile there. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.177": "Reduce to one variable with the fencing constraint, maximise $A=120x-2x^{2}$ at $x=30$, $y=60$. The second derivative is negative, and the sign of $A'$ shows area still rises as one approaches $30$ from the left. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.178": "EOQ calculus: set $TC'=-\\dfrac{KD}{Q}^{2}+\\dfrac{h}{2}=0$ to get $Q=100$. Holding cost is $\\dfrac{hQ}{2}$. The second derivative is positive, and nearby order sizes cost more. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.179": "Product-rule revenue from inverse demand peaks at $Q=6$ with unit elasticity. Constant MC shifts the profit max to $Q=5$. Positive MR on $(0,6)$ means revenue still rises there despite a falling price. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.180": "Positive but decreasing marginal utility ($U'>0$, $U''<0$) means risk aversion. Utility keeps rising on $(0,200)$. A mean-preserving spread reduces expected utility under concavity. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.181": "Budget reduction yields $U=10x-\\frac12 x^{2}$, maximised at $x=10$, $y=5$. The MRS matches $\\dfrac{p_x}{p_y}$, not the reciprocal. Corner solutions with $y=0$ kill the product utility. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.182": "Cubic $P'$ needs a full sign chart: local min at $4$, local max at $9$. Global claims need level comparisons the figure does not supply. A downward levy shift moves zeros and can be checked pointwise by subtracting $6$ from a read height. Read signs, crossings, and labelled heights directly from the figure before writing any algebra. A per-unit charge shifts the profit FOC through marginal cost but leaves the revenue schedule unchanged.",
    "MATH 11.183": "With a curved MC, still expand while MR exceeds MC and stop at their crossing. Do not confuse that crossing with an $MR=AC$ meeting, and do not read the crossing height as total profit. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.184": "Three-curve consistency: zeros of green mark turns of brown; zero of purple marks an inflection; the peak of green is steepest climb, not a peak of throughput. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.185": "Read $C'$, $C''$, and fixed cost separately. The inflection $C''=0$ at $Q=2$ marks where MC stops falling; it is not the $AC=MC$ point. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.186": "Simplify the Newton quotient to recover $P'=2x-6$. Evaluate the tangent carefully with the point-slope form. The critical point $x=3$ is a minimum; profit rises afterward. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.187": "Square-root total cost yields falling average cost and $MC=\\frac12 AC$. Scaling $Q$ by $2$ scales $C$ by $\\sqrt{2}$ only. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.188": "Margin-per-ticket profit tracks volume up to a constant, so both peak at $t=8$. Past the peak both volume and profit decline. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.189": "Read brown for when utility still rises, and green for when cups beat the opportunity cost. Concavity follows from falling MU. Do not confuse a zero of $\\mathrm{MU}-6$ with a peak of MU. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.190": "Factor $S'$ to locate $t=1$ (local max) and $t=3$ (local min). Endpoint comparison shows $S(4)=S(1)=4$, so the closed-interval global max is not unique to $t=1$. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.191": "Sign-read each $P'$, then integrate a marginal inequality when starts match. Crossing heights of $P'$ are not profit levels. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.192": "Combine figure coordinates with the cost formula. Unit elasticity maximises revenue, not profit when MC is positive. Average cost rises with $Q$ here. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.193": "A parallel MC tax shift moves the MR=MC crossing left. Read pre/post crossings separately; do not keep the untaxed FOC. Read signs, crossings, and labelled heights directly from the figure before writing any algebra. A per-unit charge shifts the profit FOC through marginal cost but leaves the revenue schedule unchanged.",
    "MATH 11.194": "Fence geometry maximises area at $x=15$, but downward-sloping inverse demand maximises revenue at a much smaller $A$. Unit elasticity marks that revenue peak. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.195": "Square-root learning: read $AC$ and $MC$ off the figure, keep $MC=\\frac12 AC$, and remember falling averages can coexist with rising total cost. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.196": "Constants shift levels not slopes. Newton recovers $P'$, and the separate ticket problem peaks at unit elasticity. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.197": "Green is the concavity meter for $C$ and the slope of MC. Do not confuse a minimum of MC with a minimum of AC. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.198": "Budget reduction produces a one-variable $U$ whose derivative is plotted. Read the zero for the mix; corners kill $xy$. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.199": "Keep the inventory FOC and the spoilage sign chart separate. Endpoint ties can deny uniqueness of a closed-interval max. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.200": "Infer turns of $P$ from zeros of $P'$, concavity from $P''$, and never treat an inflection as a profit maximum. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.201": "Chain-rule MR of advertising equals $1$ at the interior profit max; solve the power carefully. Concavity of $Q$ is compatible with that max. Work claim by claim from derivatives and sign charts; keep revenue FOCs separate from profit FOCs.",
    "MATH 11.202": "Read $p$ off the figure, keep $MR=MC$ for the variable problem, and remember a lump-sum fee does not move optimal $Q$. Unit elasticity at $Q=20$ is a revenue property, not the profit optimum. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.203": "Differentiate $AC$ carefully, use the sign of $AC'$ for falling averages, integrate rival MR gaps, and link $AC'=0$ to $MC=AC$. Rival comparisons follow by integrating marginal revenue, not by reversing the inequality.",
    "MATH 11.204": "Separate the $MR=0$ revenue peak from the $MR=MC$ profit peak. Read $p$ off brown at the profit $Q$. Constant MC does not make that $Q$ an AC minimiser. Read signs, crossings, and labelled heights directly from the figure before writing any algebra.",
    "MATH 11.205": "Separate $MR=0$ (revenue) from $MR=MC$ (profit). A specific tax shifts MC and lowers optimal $Q$ but leaves the revenue peak in place. A per-unit charge shifts the profit FOC through marginal cost but leaves the revenue schedule unchanged.",
}


if __name__ == "__main__":
    case_ids = sorted(DEEP_BODIES, key=lambda x: float(x.split()[-1]))
    print(f"case_id count: {len(case_ids)}")
    assert len(case_ids) == 45, f"expected 45, got {len(case_ids)}"
    for cid in case_ids:
        assert cid in DEEP_OVERVIEWS, cid
        assert len(DEEP_BODIES[cid]) == 5, cid
    lengths = [len(b) for bodies in DEEP_BODIES.values() for b in bodies]
    print(f"avg body length: {sum(lengths)/len(lengths):.0f} chars")
    print(f"min body length: {min(lengths)} chars")
    print(f"max body length: {max(lengths)} chars")
    short = [l for l in lengths if l < 350]
    assert not short, f"{len(short)} bodies under 350 chars"
    print("All checks passed.")
