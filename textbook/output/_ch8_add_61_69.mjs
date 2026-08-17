/**
 * Chapter 8 additions 8.61 - 8.69.
 * Power-function economics tasks in the MATH 13.18 explanation format.
 * No subsection field: the bank stays a single ordered list.
 */

export const BATCH = [
  {
    id: "math-8-61",
    case_id: "MATH 8.61",
    title: "Subscriber Demand and Revenue for a Streaming Tier",
    context: String.raw`A streaming service prices one subscription tier at $p$ euros per month and models paid subscribers by $q(p)=Ap^{-3/2}$, measured in thousands. At the current price of $4$ the tier holds $250$ thousand subscribers. Monthly revenue for the tier is $R=pq$, also measured in thousands of euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The coefficient in the demand model is $A=2000$.`,
      String.raw`Doubling the subscription price halves the number of subscribers.`,
      String.raw`At a price of $16$, monthly revenue for the tier is $500$.`,
      String.raw`Revenue is a power function of price with exponent $-1/2$.`,
      String.raw`Raising the price by $21\%$ reduces revenue by about $21\%$.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      String.raw`**A.** → True

The exponent is supplied by the model, so one observed price and quantity pair is enough to pin the coefficient. Substitute the current price into the demand rule:

$$q(4)=A\cdot4^{-3/2}$$

Evaluate the power by taking the square root first and then cubing, since $4^{3/2}=(\sqrt{4})^{3}=8$:

$$4^{-3/2}=\frac{1}{8}$$

The observation therefore reads

$$\frac{A}{8}=250$$

$$A=250\times8=2000$$

The calibrated demand rule is $q(p)=2000p^{-3/2}$, and it reproduces the observation, because $2000/8=250$ thousand subscribers at a price of $4$. The coefficient named in the claim agrees with the recovered value, so the statement is True.`,
      String.raw`**B.** → False

A price doubling is an input multiplier of $k=2$, and in a power model the output multiplier is that factor raised to the exponent:

$$\frac{q(2p)}{q(p)}=2^{-3/2}$$

$$2^{-3/2}=\frac{1}{2\sqrt{2}}\approx0.35355$$

Only about $35.4\%$ of the subscribers remain, which is a loss of roughly $64.6\%$ rather than the $50\%$ asserted. Working in levels gives the same picture. Starting from $q(4)=250$ thousand and moving to a price of $8$:

$$q(8)=\frac{2000}{8^{3/2}}=\frac{2000}{22.6274}\approx88.39$$

Half of $250$ would be $125$ thousand, and the model gives roughly $88$ thousand instead. The loss is steeper than halving because the exponent has magnitude $3/2$ rather than $1$, so the statement is False.`,
      String.raw`**C.** → True

Revenue is price times quantity, so multiply the calibrated demand rule by $p$, which adds one to the exponent:

$$R(p)=p\cdot2000p^{-3/2}=2000p^{-1/2}$$

Evaluate at the quoted price, using $16^{1/2}=4$:

$$R(16)=\frac{2000}{4}=500$$

The two factors computed separately agree with that figure. Subscribers at the same price are

$$q(16)=\frac{2000}{16^{3/2}}=\frac{2000}{64}=31.25$$

and multiplying by the price gives $16\times31.25=500$ thousand euros per month. Both routes land on the same revenue level, so the statement is True.`,
      String.raw`**D.** → True

Revenue inherits its exponent from demand, raised by one, because the extra factor of $p$ is itself a power with exponent $1$:

$$R(p)=p^{1}\cdot2000p^{-3/2}=2000p^{\,1-3/2}=2000p^{-1/2}$$

Comparing with the general form $Ap^{r}$ gives coefficient $2000$ and exponent $-1/2$, which is what the claim states. The scaling behaviour confirms the exponent, since quadrupling the price should multiply revenue by $4^{-1/2}$:

$$\frac{R(4p)}{R(p)}=4^{-1/2}=\frac{1}{2}$$

Levels agree, because $R(4)=1000$ and $R(16)=500$. The exponent is negative, which is the formal way of saying that this tier loses revenue whenever its price rises. so the statement is True.`,
      String.raw`**E.** → False

A rise of $21\%$ is a price multiplier of $1.21$, and it acts on revenue through the revenue exponent $-1/2$, not through the demand exponent:

$$\frac{R(1.21p)}{R(p)}=1.21^{-1/2}$$

Since $1.21=1.1^{2}$, the square root is exact:

$$1.21^{-1/2}=\frac{1}{1.1}\approx0.90909$$

Revenue keeps about $90.9\%$ of its former level, a fall of roughly $9.1\%$ rather than $21\%$. Levels confirm the size of the effect, starting from $R(4)=1000$ and moving to a price of $4.84$:

$$R(4.84)=\frac{2000}{2.2}\approx909.09$$

The loss is about $91$ thousand euros on a base of $1000$ thousand. The claim overstates the damage by a wide margin, so the statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 61,
    solution_overview: String.raw`Demand is $q(p)=Ap^{-3/2}$ with $q(4)=250$ thousand subscribers, and revenue is $R=pq$.

**Part 1: Building the model.**

Let $p$ = price in euros per month, $q$ = subscribers in thousands, $R$ = revenue in thousands of euros. The isoelastic form fixes the exponent, the observed pair fixes the coefficient, and revenue follows by multiplying by $p$, which raises the exponent by one.

**1. Translate: the observed pair.**

$$A\cdot4^{-3/2}=250, \qquad 4^{-3/2}=\frac{1}{8}$$

**2. Translate: a price multiplier.** A rise by a factor $k$ reaches quantity and revenue through different exponents:

$$\frac{q(kp)}{q(p)}=k^{-3/2}, \qquad \frac{R(kp)}{R(p)}=k^{-1/2}$$

**Part 2: The model.**

$$q(p)=2000\,p^{-3/2} \tag{1}$$

$$R(p)=2000\,p^{-1/2} \tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=250\times8=2000$$

**2.** Levels at the current price:

$$q(4)=250, \qquad R(4)=1000$$

**3.** Levels at the quoted price of $16$:

$$q(16)=\frac{2000}{64}=31.25, \qquad R(16)=\frac{2000}{4}=500$$

**4.** Multipliers for the two changes the statements ask about:

$$2^{-3/2}\approx0.35355, \qquad 1.21^{-1/2}=\frac{1}{1.1}\approx0.90909$$

**5.** Doubling the price removes about $64.6\%$ of subscribers, well past a halving, while a rise of $21\%$ costs only about $9.1\%$ of revenue. Both effects point the same way, since the revenue exponent $-1/2$ is negative.

**Answer.** $A=2000$ | $R(p)=2000p^{-1/2}$ | $R(16)=500$`,
  },
  {
    id: "math-8-62",
    case_id: "MATH 8.62",
    title: "Fixed Retainer Plus a Square-Root Monitoring Fee",
    context: String.raw`A compliance-monitoring platform bills a client $C(n)=400+30n^{1/2}$ euros per month, where $n\ge1$ is the number of branches under monitoring. The first term is a fixed retainer and the second term is the variable monitoring charge. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`Monitoring $100$ branches costs $700$ euros per month.`,
      String.raw`At $n=400$ the variable monitoring charge is $600$ euros.`,
      String.raw`Raising the branch count from $100$ to $400$ doubles the variable monitoring charge.`,
      String.raw`At $n=100$ the average monthly cost per branch is $7$ euros.`,
      String.raw`Monitoring $900$ branches costs $1300$ euros per month.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      String.raw`**A.** → True

The bill splits into a piece that never moves and a piece that grows with the square root of the branch count. Evaluate the variable term at the stated size:

$$30\cdot100^{1/2}=30\cdot10=300$$

Add the retainer, which does not depend on $n$:

$$C(100)=400+300=700$$

The square root is what keeps the variable piece modest. Ten branches would carry a monitoring charge of about $30\sqrt{10}\approx94.87$ euros, so a hundredfold jump in branches multiplies that charge by only about ten. The model returns $700$ euros per month at a hundred branches, matching the figure in the claim, so the statement is True.`,
      String.raw`**B.** → True

The variable monitoring charge is the second term on its own, evaluated at the stated branch count. Take the square root first:

$$400^{1/2}=20$$

Then apply the rate:

$$30\cdot400^{1/2}=30\cdot20=600$$

The retainer sits outside this calculation, so the full bill at four hundred branches is

$$C(400)=400+600=1000$$

of which $600$ euros is the variable component and $400$ euros is the fixed retainer. The claim asks only about the variable piece and names exactly that figure, so the statement is True.`,
      String.raw`**C.** → True

Only the variable term responds to the branch count, and it is a power function with exponent $1/2$. The branch count is multiplied by

$$\frac{400}{100}=4$$

so the variable charge is multiplied by that factor raised to the exponent:

$$4^{1/2}=2$$

Checking the two levels directly confirms the doubling:

$$30\cdot100^{1/2}=300, \qquad 30\cdot400^{1/2}=600$$

The rate of $30$ cancels out of the ratio, so the multiplier depends only on the branch factor and the exponent. Quadrupling the branch count doubles the variable charge, so the statement is True.`,
      String.raw`**D.** → True

Average cost per branch is the whole bill divided by the number of branches:

$$\frac{C(n)}{n}=\frac{400}{n}+\frac{30}{n^{1/2}}$$

At the stated size the bill is $C(100)=400+300=700$ euros, so

$$\frac{C(100)}{100}=\frac{700}{100}=7$$

The split form gives the same answer, since $400/100=4$ euros of retainer per branch plus $30/10=3$ euros of monitoring per branch. Both pieces of the average fall as the client adds branches, which is why a larger network pays less per branch. The average at a hundred branches is exactly $7$ euros, so the statement is True.`,
      String.raw`**E.** → True

The same two-part rule applies at the larger size. Evaluate the square root first, since $900=30^{2}$:

$$900^{1/2}=30$$

The variable charge is therefore

$$30\cdot30=900$$

and the full bill adds the fixed retainer:

$$C(900)=400+900=1300$$

The jump from four hundred to nine hundred branches raises the variable charge from $600$ to $900$ euros, a multiplier of $1.5$, which is exactly $(900/400)^{1/2}=(2.25)^{1/2}$. The quoted monthly total of $1300$ euros matches the model, so the statement is True.`,
    ],
    difficulty_level: "1/5",
    sort_order: 62,
    solution_overview: String.raw`The monthly bill is $C(n)=400+30n^{1/2}$ euros for $n$ monitored branches.

**Part 1: Building the model.**

Let $n$ = branches under monitoring, $C$ = monthly bill in euros. The bill is a sum of two parts with very different behaviour: a constant retainer that ignores $n$ entirely, and a power term with coefficient $30$ and exponent $1/2$.

**1. Translate: the fixed part.** The retainer contributes the same $400$ euros at every branch count.

**2. Translate: the variable part.** The monitoring charge scales as a square root, so multiplying the branch count by $k$ multiplies that charge by $k^{1/2}$:

$$\frac{30(kn)^{1/2}}{30n^{1/2}}=k^{1/2}$$

**Part 2: The model.**

$$C(n)=400+30\,n^{1/2} \tag{1}$$

$$\frac{C(n)}{n}=\frac{400}{n}+\frac{30}{n^{1/2}} \tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the sizes the statements use:

$$100^{1/2}=10, \qquad 400^{1/2}=20, \qquad 900^{1/2}=30$$

**2.** Variable charges at those sizes:

$$300, \qquad 600, \qquad 900$$

**3.** Full bills, adding the retainer to each:

$$C(100)=700, \qquad C(400)=1000, \qquad C(900)=1300$$

**4.** Average cost per branch at a hundred branches:

$$\frac{700}{100}=7$$

**5.** Quadrupling the branch count from $100$ to $400$ multiplies the variable charge by $4^{1/2}=2$, so the charge doubles while the retainer stays put. Because both terms of the average shrink as $n$ grows, larger networks always pay less per branch.

**Answer.** $C(100)=700$ | $C(400)=1000$ | $C(900)=1300$ | average per branch at $100$ is $7$`,
  },
  {
    id: "math-8-63",
    case_id: "MATH 8.63",
    title: "Ordering Cost Against Holding Cost at a Spare-Parts Depot",
    context: String.raw`A spare-parts depot reorders one component in batches of $q>0$ units. Annual ordering cost is $O(q)=4800q^{-1}$ euros and annual holding cost is $H(q)=3q$ euros, so the annual total is $T(q)=4800q^{-1}+3q$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The two cost components are equal at $q=40$, where each equals $120$ euros.`,
      String.raw`Annual total cost is minimized at $q=60$.`,
      String.raw`Doubling the batch size from $40$ to $80$ leaves the annual total unchanged.`,
      String.raw`Cutting the batch size from $40$ to $20$ raises the annual total by exactly as much as raising it from $40$ to $80$.`,
      String.raw`Ordering cost exceeds holding cost for every batch size above $40$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      String.raw`**A.** → True

Setting the falling component equal to the rising one turns the comparison into a single equation:

$$\frac{4800}{q}=3q$$

Multiply both sides by $q$, which is legitimate because the depot orders positive batches:

$$4800=3q^{2}$$

$$q^{2}=1600$$

$$q=40$$

The negative root $q=-40$ is outside the domain. Evaluate each component at the crossing point:

$$O(40)=\frac{4800}{40}=120, \qquad H(40)=3\cdot40=120$$

Both components sit at $120$ euros a year, giving an annual total of $240$ euros. The batch size and the common value in the claim both match, so the statement is True.`,
      String.raw`**B.** → False

The falling ordering term and the rising holding term trade off, and the minimum occurs where their rates of change cancel:

$$T'(q)=-4800q^{-2}+3$$

$$-\frac{4800}{q^{2}}+3=0$$

$$q^{2}=1600 \quad \Rightarrow \quad q=40$$

The stationary point is a minimum, since $T''(q)=9600q^{-3}>0$ for positive batches. Comparing the two candidate batch sizes in levels settles it:

$$T(40)=120+120=240$$

$$T(60)=\frac{4800}{60}+3\cdot60=80+180=260$$

A batch of $60$ costs $20$ euros a year more than the optimum, so the named minimizer is wrong so the statement is False.`,
      String.raw`**C.** → False

Doubling the batch halves the ordering term and doubles the holding term, and those two effects do not cancel because the components are not symmetric in size at the new point. Evaluate both parts at the larger batch:

$$O(80)=\frac{4800}{80}=60, \qquad H(80)=3\cdot80=240$$

$$T(80)=60+240=300$$

Compare with the starting point:

$$T(40)=120+120=240$$

The annual total rises by $60$ euros rather than staying flat. Ordering cost drops by $60$ euros while holding cost climbs by $120$ euros, and the larger increase wins. The total is not preserved, so the statement is False.`,
      String.raw`**D.** → True

The total is unchanged when the two components swap roles, because the product of the two batch sizes matters rather than their difference. Replace $q$ by $1600/q$:

$$T\!\left(\frac{1600}{q}\right)=\frac{4800q}{1600}+\frac{3\cdot1600}{q}=3q+\frac{4800}{q}=T(q)$$

Since $20\times80=1600$, the batches $20$ and $80$ are exactly such a pair. Check both in levels:

$$T(20)=\frac{4800}{20}+3\cdot20=240+60=300$$

$$T(80)=\frac{4800}{80}+3\cdot80=60+240=300$$

Each sits $300-240=60$ euros above the optimum of $T(40)=240$. Halving and doubling the batch cost the depot the same amount, so the statement is True.`,
      String.raw`**E.** → False

Above the crossing point the ranking runs the other way, because the ordering term keeps falling while the holding term keeps rising. Compare the components at a larger batch:

$$O(80)=\frac{4800}{80}=60, \qquad H(80)=3\cdot80=240$$

Holding cost is four times ordering cost there. In general, for $q>40$,

$$\frac{O(q)}{H(q)}=\frac{4800}{3q^{2}}=\frac{1600}{q^{2}}<1$$

so ordering cost is the smaller of the two whenever the batch exceeds $40$. The claim describes what happens below the crossing point, where small batches force frequent reordering. Above it the inequality reverses, so the statement is False.`,
    ],
    difficulty_level: "5/5",
    sort_order: 63,
    solution_overview: String.raw`Annual cost splits into $O(q)=4800q^{-1}$ for ordering and $H(q)=3q$ for holding, with total $T(q)=4800q^{-1}+3q$.

**Part 1: Building the model.**

Let $q$ = units per batch, $O$ = annual ordering cost, $H$ = annual holding cost, $T$ = annual total. One term is a power with exponent $-1$ and one is a power with exponent $1$, so the total falls at small batches and rises at large ones.

**1. Translate: equal components.**

$$\frac{4800}{q}=3q$$

**2. Translate: the cheapest batch.**

$$T'(q)=-4800q^{-2}+3=0$$

**Part 2: The model.**

$$T(q)=\frac{4800}{q}+3q \tag{1}$$

$$T\!\left(\frac{1600}{q}\right)=T(q) \tag{2}$$

**Part 3: Solve.**

**1.** Both conditions collapse to the same equation:

$$q^{2}=1600 \quad \Rightarrow \quad q=40$$

**2.** Components and total at the crossing point:

$$O(40)=120, \qquad H(40)=120, \qquad T(40)=240$$

**3.** The second derivative confirms a minimum:

$$T''(q)=\frac{9600}{q^{3}}>0$$

**4.** Totals at the batches the statements name:

$$T(20)=300, \qquad T(60)=260, \qquad T(80)=300$$

**5.** The identity in $(2)$ explains why $20$ and $80$ tie: their product is $1600$, so they exchange the two components. Below $q=40$ ordering dominates, above it holding dominates, and no batch beats the $240$ euro floor. Mid-range batches such as $q=36$ still prefer the balanced schedule, since the two cost components have not yet swapped places.

**Answer.** components equal at $q=40$ | $T(40)=240$ is the minimum | $T(20)=T(80)=300$`,
  },
  {
    id: "math-8-64",
    case_id: "MATH 8.64",
    title: "Average Product on a Bottling Line",
    context: String.raw`Output on a bottling line is modelled by $Q(L)=12L^{3/4}$ units per shift, where $L>0$ is the number of labour hours booked for that shift. Average product is output per labour hour, $Q(L)/L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`Average product is a power function of $L$ with exponent $3/4$.`,
      String.raw`At $L=16$ output is $96$ units and average product is $8$ units per hour.`,
      String.raw`Doubling labour hours doubles average product.`,
      String.raw`Average product falls as labour hours rise.`,
      String.raw`At $L=81$ average product is $6$ units per hour.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      String.raw`**A.** → False

Average product is output divided by labour, and dividing a power by $L$ subtracts one from the exponent:

$$\frac{Q(L)}{L}=\frac{12L^{3/4}}{L}=12L^{\,3/4-1}=12L^{-1/4}$$

Comparing with the general form $AL^{r}$ gives coefficient $12$ and exponent $-1/4$, not $3/4$. The exponent $3/4$ belongs to total output, which is a different quantity. The sign is what matters: a positive exponent would mean average product grows with labour, while the recovered exponent is negative. A numerical check separates the two rules at sixteen hours:

$$12\cdot16^{-1/4}=6, \qquad 12\cdot16^{3/4}=96$$

The first is output per hour and the second is output for the shift. The stated exponent belongs to the wrong one of these, so the statement is False.`,
      String.raw`**B.** → False

The claim bundles two figures, and both need checking. Total output uses the exponent $3/4$, and $16^{3/4}=(\sqrt[4]{16})^{3}=2^{3}=8$:

$$Q(16)=12\cdot8=96$$

That part is right. Average product divides this by the labour hours:

$$\frac{Q(16)}{16}=\frac{96}{16}=6$$

The general rule gives the same value, since $12\cdot16^{-1/4}=12/2=6$. Average product at sixteen hours is $6$ units per hour, not the $8$ units per hour quoted. The figure $8$ is the value of $16^{3/4}$ itself, which is not the average product. One of the two parts fails, so the statement is False.`,
      String.raw`**C.** → False

Average product is the power function $12L^{-1/4}$, so an input multiplier of $2$ produces the output multiplier

$$\frac{12(2L)^{-1/4}}{12L^{-1/4}}=2^{-1/4}\approx0.8409$$

Average product falls to about $84\%$ of its previous value rather than doubling. Levels show the same effect between sixteen and thirty-two hours:

$$12\cdot16^{-1/4}=6, \qquad 12\cdot32^{-1/4}\approx5.05$$

Doubling the shift raises total output by a factor of $2^{3/4}\approx1.68$, which is less than the doubling of hours, so output per hour must decline. The claim reverses the direction of the effect, so the statement is False.`,
      String.raw`**D.** → True

Average product carries a negative exponent, which is exactly the condition for a decreasing power function on a positive domain:

$$\frac{Q(L)}{L}=12L^{-1/4}=\frac{12}{L^{1/4}}$$

As $L$ grows, the fourth root in the denominator grows while the numerator stays fixed, so the quotient shrinks. Two concrete shifts make the fall visible:

$$12\cdot16^{-1/4}=\frac{12}{2}=6, \qquad 12\cdot81^{-1/4}=\frac{12}{3}=4$$

The reason is that total output has exponent $3/4$, which is below $1$, so booking more hours raises output less than proportionally. Average product declines with labour hours, so the statement is True.`,
      String.raw`**E.** → False

Evaluate the average product rule at the stated shift length. The fourth root of $81$ is $3$, since $3^{4}=81$:

$$\frac{Q(81)}{81}=12\cdot81^{-1/4}=\frac{12}{3}=4$$

The long route agrees. Total output uses $81^{3/4}=(\sqrt[4]{81})^{3}=3^{3}=27$:

$$Q(81)=12\cdot27=324, \qquad \frac{324}{81}=4$$

Average product at eighty-one hours is $4$ units per hour, not $6$. The value $6$ belongs to a shift of sixteen hours, and average product has fallen since then because the exponent on labour is below one. The quoted figure is wrong, so the statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 64,
    solution_overview: String.raw`Output is $Q(L)=12L^{3/4}$ units per shift and average product is $Q(L)/L$.

**Part 1: Building the model.**

Let $L$ = labour hours booked, $Q$ = units produced in the shift, and let average product be output per labour hour. Dividing a power function by its own input subtracts one from the exponent, which is the whole content of this task.

**1. Translate: total output.** The exponent $3/4$ is below $1$, so output grows less than proportionally with hours.

**2. Translate: output per hour.**

$$\frac{Q(L)}{L}=\frac{12L^{3/4}}{L^{1}}=12L^{-1/4}$$

**Part 2: The model.**

$$Q(L)=12\,L^{3/4} \tag{1}$$

$$\frac{Q(L)}{L}=12\,L^{-1/4} \tag{2}$$

**Part 3: Solve.**

**1.** Fourth roots at the shift lengths the statements use:

$$16^{1/4}=2, \qquad 81^{1/4}=3$$

**2.** Total output at those shifts:

$$Q(16)=12\cdot8=96, \qquad Q(81)=12\cdot27=324$$

**3.** Average product at the same shifts:

$$\frac{96}{16}=6, \qquad \frac{324}{81}=4$$

**4.** The multiplier from doubling the shift:

$$2^{-1/4}\approx0.8409$$

**5.** Every claim in this task turns on the sign of the exponent in $(2)$. Because $-1/4$ is negative, average product falls as hours rise, and it falls slowly, losing only about $16\%$ when hours double. That slow decline is the signature of an exponent between $0$ and $1$: total product still rises, but each extra hour contributes less than the last.

**Answer.** average product $=12L^{-1/4}$ | $6$ units per hour at $L=16$ | $4$ units per hour at $L=81$`,
  },
  {
    id: "math-8-65",
    case_id: "MATH 8.65",
    title: "Learning Curve With an Irreducible Assembly Floor",
    context: String.raw`A drone-assembly cell models the labour time of the unit built after $n$ cumulative units by $t(n)=8+50n^{-1/2}$ minutes, where $n\ge1$. The constant $8$ is an irreducible handling floor and the second term is the learning component. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`At $n=25$ the modelled unit time is $18$ minutes.`,
      String.raw`As $n$ grows without bound the modelled unit time approaches $8$ minutes without ever reaching it.`,
      String.raw`Raising cumulative output from $25$ to $100$ halves the learning component.`,
      String.raw`Raising cumulative output from $25$ to $100$ halves the modelled unit time.`,
      String.raw`Modelled unit time first falls below $10$ minutes once cumulative output passes $625$ units.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      String.raw`**A.** → True

Only the second term responds to cumulative output, so evaluate it first. The exponent $-1/2$ puts a square root in the denominator, and $25^{1/2}=5$:

$$50\cdot25^{-1/2}=\frac{50}{5}=10$$

Add the handling floor, which is the same at every cumulative count:

$$t(25)=8+10=18$$

The split is worth noticing: at this stage the cell spends $8$ minutes on work that learning cannot remove and $10$ minutes on work that it can. The model returns $18$ minutes for the unit built after twenty-five cumulative units, matching the claim, so the statement is True.`,
      String.raw`**B.** → True

The learning component is a power with negative exponent, so it shrinks toward zero as cumulative output grows:

$$\lim_{n\to\infty}\frac{50}{\sqrt{n}}=0$$

The floor is untouched by this, so the whole model tends to it:

$$\lim_{n\to\infty}t(n)=8+0=8$$

Reaching the floor exactly would require $50/\sqrt{n}=0$, which no finite $n$ satisfies, since the numerator is fixed at $50$ and the denominator is always finite. The values bear this out: $t(100)=13$, $t(2500)=9$, $t(250000)=8.1$, each still above $8$. The line $t=8$ is a horizontal asymptote that the model never touches, so the statement is True.`,
      String.raw`**C.** → True

The learning component alone is a power function with exponent $-1/2$, and the cumulative count is multiplied by

$$\frac{100}{25}=4$$

so that component is multiplied by

$$4^{-1/2}=\frac{1}{2}$$

Checking the two levels directly confirms the halving:

$$50\cdot25^{-1/2}=10, \qquad 50\cdot100^{-1/2}=5$$

The coefficient $50$ cancels out of the ratio, so the multiplier depends only on the output factor and the exponent. Quadrupling cumulative output halves the learning component, so the statement is True.`,
      String.raw`**D.** → False

The multiplier applies only to the learning term. The floor is a constant and is not scaled at all, so the total cannot fall in the same proportion. Compute both totals:

$$t(25)=8+\frac{50}{5}=8+10=18$$

$$t(100)=8+\frac{50}{10}=8+5=13$$

Half of $18$ would be $9$ minutes, and the model gives $13$ minutes instead:

$$\frac{13}{18}\approx0.7222$$

Unit time falls by about $28\%$, not by $50\%$. The learning component does halve, from $10$ minutes to $5$, but the $8$ minute floor dilutes that gain in the total. The claim transfers the scaling rule to a quantity that is not a pure power, so the statement is False.`,
      String.raw`**E.** → True

Impose the target on the model and isolate the learning term:

$$8+\frac{50}{\sqrt{n}}<10$$

$$\frac{50}{\sqrt{n}}<2$$

Both sides are positive, so cross-multiplying preserves the inequality:

$$\sqrt{n}>25$$

$$n>625$$

The boundary case is exact rather than approximate, since $50/\sqrt{625}=50/25=2$ gives $t(625)=10$ minutes precisely. Unit time is therefore still at $10$ minutes at $625$ cumulative units and drops below only afterwards, for example $t(676)=8+50/26\approx9.92$. The threshold and the strict wording both match, so the statement is True.`,
    ],
    difficulty_level: "4/5",
    sort_order: 65,
    solution_overview: String.raw`Unit labour time is $t(n)=8+50n^{-1/2}$ minutes, a constant floor plus a decaying learning term.

**Part 1: Building the model.**

Let $n$ = cumulative units built, $t$ = labour minutes for the next unit. The model is a sum, not a pure power, so scaling rules apply to the learning term alone and never to the total.

**1. Translate: the learning term.** Multiplying cumulative output by $k$ multiplies that term by $k^{-1/2}$:

$$\frac{50(kn)^{-1/2}}{50n^{-1/2}}=k^{-1/2}$$

**2. Translate: a time target.** A ceiling on unit time becomes a lower bound on cumulative output:

$$8+\frac{50}{\sqrt{n}}<c \quad \Longleftrightarrow \quad \sqrt{n}>\frac{50}{c-8}$$

**Part 2: The model.**

$$t(n)=8+50\,n^{-1/2} \tag{1}$$

$$\lim_{n\to\infty}t(n)=8 \tag{2}$$

**Part 3: Solve.**

**1.** Square roots at the counts the statements use:

$$25^{1/2}=5, \qquad 100^{1/2}=10, \qquad 625^{1/2}=25$$

**2.** Learning components at those counts:

$$10, \qquad 5, \qquad 2$$

**3.** Totals, adding the floor to each:

$$t(25)=18, \qquad t(100)=13, \qquad t(625)=10$$

**4.** The target from $(2)$ applied to a ceiling of $10$ minutes:

$$\sqrt{n}>25 \quad \Rightarrow \quad n>625$$

**5.** Quadrupling output halves the learning term but cuts the total only from $18$ to $13$ minutes, roughly $28\%$. The floor of $8$ minutes is approached and never attained, since $50/\sqrt{n}$ stays strictly positive.

**Answer.** $t(25)=18$ | $t(100)=13$ | floor $8$ approached but never reached | below $10$ minutes once $n>625$`,
  },
  {
    id: "math-8-66",
    case_id: "MATH 8.66",
    title: "Break-Even for a Fish Farm With Diminishing Harvest Returns",
    context: String.raw`A fish farm turns feed into harvest revenue $R(x)=90x^{2/3}$ thousand euros in a season, where $x>0$ is tonnes of feed used, while feed and handling cost $C(x)=30x$ thousand euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`Revenue equals cost at $x=27$.`,
      String.raw`At $x=8$ the season runs at a loss.`,
      String.raw`Revenue is proportional to the tonnes of feed used.`,
      String.raw`For every $x>27$ the season's cost exceeds its revenue.`,
      String.raw`Raising feed from $8$ to $16$ tonnes doubles revenue.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      String.raw`**A.** → True

Break-even means the two curves meet, so set them equal:

$$90x^{2/3}=30x$$

Divide both sides by $30x^{2/3}$, which is positive on the stated domain:

$$3=x^{\,1-2/3}=x^{1/3}$$

Cube both sides:

$$x=27$$

Verify by evaluating each side at that feed level, using $27^{2/3}=(\sqrt[3]{27})^{2}=9$:

$$R(27)=90\cdot9=810, \qquad C(27)=30\cdot27=810$$

Both come to $810$ thousand euros, so the season exactly covers its cost at twenty-seven tonnes. The claimed break-even point is correct, so the statement is True.`,
      String.raw`**B.** → False

Compute both sides at the stated feed level. The cube root of $8$ is $2$, so $8^{2/3}=2^{2}=4$:

$$R(8)=90\cdot4=360$$

$$C(8)=30\cdot8=240$$

Profit is the gap between them:

$$P(8)=360-240=120$$

The season clears $120$ thousand euros rather than losing money. Eight tonnes sits well below the break-even level of twenty-seven tonnes, which is precisely the region where revenue runs ahead of cost. The margin per tonne makes the same point, since revenue per tonne is

$$\frac{360}{8}=45$$

against a cost of $30$ per tonne. Profit is positive at this feed level, so the statement is False.`,
      String.raw`**C.** → False

Proportionality would mean revenue is a power function with exponent $1$, so that doubling feed doubles revenue. The model has exponent $2/3$ instead, and the scaling test exposes the difference:

$$\frac{R(kx)}{R(x)}=k^{2/3}$$

$$\frac{R(2x)}{R(x)}=2^{2/3}\approx1.5874$$

A proportional relation would also force a constant revenue per tonne, and it is not constant:

$$\frac{R(8)}{8}=45, \qquad \frac{R(27)}{27}=30$$

Revenue per tonne falls as feed rises, which is the signature of an exponent below $1$. The cost curve is the proportional one here, not revenue, so the statement is False.`,
      String.raw`**D.** → True

Compare the two curves in general rather than at a single point. Revenue at least covers cost when

$$90x^{2/3}\ge30x$$

Dividing by the positive quantity $30x^{2/3}$ gives

$$3\ge x^{1/3} \quad \Longleftrightarrow \quad x\le27$$

So revenue leads only up to twenty-seven tonnes, and beyond that the inequality flips and cost leads. A check past the crossing confirms it, using $64^{2/3}=4^{2}=16$:

$$R(64)=90\cdot16=1440, \qquad C(64)=30\cdot64=1920$$

The season would lose $480$ thousand euros at sixty-four tonnes. Cost outruns revenue for every feed level above the break-even point, so the statement is True.`,
      String.raw`**E.** → False

Revenue is a power function with exponent $2/3$, so doubling the input multiplies revenue by

$$2^{2/3}\approx1.5874$$

not by $2$. The levels confirm the shortfall, using $16^{2/3}=(\sqrt[3]{16})^{2}\approx6.3496$:

$$R(8)=90\cdot4=360$$

$$R(16)=90\cdot6.3496\approx571.5$$

Doubling revenue would require about $720$ thousand euros, and the model delivers roughly $571$ thousand instead. Cost, by contrast, does double, from $240$ to $480$ thousand euros, which is why extra feed eventually stops paying. The stated multiplier is too large, so the statement is False.`,
    ],
    difficulty_level: "2/5",
    sort_order: 66,
    solution_overview: String.raw`Revenue is $R(x)=90x^{2/3}$ and cost is $C(x)=30x$, both in thousand euros for $x$ tonnes of feed.

**Part 1: Building the model.**

Let $x$ = tonnes of feed, $R$ = season revenue, $C$ = season cost, $P=R-C$ = profit. Revenue is a power with exponent $2/3$, so it grows less than proportionally, while cost is a power with exponent $1$. A curve with the smaller exponent must eventually be overtaken.

**1. Translate: break-even.**

$$90x^{2/3}=30x$$

**2. Translate: the comparison.** Dividing by the positive quantity $30x^{2/3}$ reduces the whole comparison to one cube root, weighed against the number $3$:

$$\frac{R(x)}{C(x)}=\frac{3}{x^{1/3}}$$

**Part 2: The model.**

$$P(x)=90x^{2/3}-30x \tag{1}$$

$$R(x)\ge C(x) \quad \Longleftrightarrow \quad x\le27 \tag{2}$$

**Part 3: Solve.**

**1.** The break-even feed level:

$$x^{1/3}=3 \quad \Rightarrow \quad x=27$$

**2.** Levels at the crossing:

$$R(27)=810, \qquad C(27)=810, \qquad P(27)=0$$

**3.** Levels below the crossing:

$$R(8)=360, \qquad C(8)=240, \qquad P(8)=120$$

**4.** Levels above the crossing:

$$R(64)=1440, \qquad C(64)=1920, \qquad P(64)=-480$$

**5.** The scaling test separates the two curves: doubling feed multiplies revenue by $2^{2/3}\approx1.5874$ but multiplies cost by $2$. Profit is positive on $0<x<27$, zero at $27$, and negative afterwards, peaking at $x=8$ where $P=120$.

**Answer.** break-even at $x=27$ | $P(8)=120$ | cost leads for every $x>27$`,
  },
  {
    id: "math-8-67",
    case_id: "MATH 8.67",
    title: "Calibrating a Handling-Cost Law From a Cost Difference",
    context: String.raw`A distribution centre models daily handling cost by $f(x)=Ax^{3/2}$ euros, where $x>0$ is a pallet-volume index. The individual daily figures were lost, and the only surviving record states that the cost at index $16$ exceeds the cost at index $4$ by $336$ euros. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The coefficient is $A=6$.`,
      String.raw`The recovered levels are $f(4)=48$ and $f(16)=384$.`,
      String.raw`At index $9$ the modelled handling cost is $162$ euros.`,
      String.raw`Multiplying the pallet-volume index by $4$ multiplies handling cost by $8$.`,
      String.raw`The difference $f(25)-f(9)$ equals $588$ euros.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      String.raw`**A.** → True

A difference of two model values still determines the coefficient, because $A$ factors out of both terms. Write the record as an equation:

$$f(16)-f(4)=A\cdot16^{3/2}-A\cdot4^{3/2}=336$$

Evaluate each power by taking the square root first and then cubing:

$$16^{3/2}=(\sqrt{16})^{3}=4^{3}=64$$

$$4^{3/2}=(\sqrt{4})^{3}=2^{3}=8$$

Factor and solve:

$$A(64-8)=56A=336$$

$$A=\frac{336}{56}=6$$

The exponent had to be known in advance for this to work, and it is given in the model. The calibrated rule is $f(x)=6x^{3/2}$, and the coefficient matches the claim, so the statement is True.`,
      String.raw`**B.** → True

Recovering the levels needs the coefficient first, and the surviving record supplies it. From $A(16^{3/2}-4^{3/2})=336$ and the powers $16^{3/2}=64$ and $4^{3/2}=8$:

$$56A=336 \quad \Rightarrow \quad A=6$$

Now evaluate the calibrated rule at each index:

$$f(4)=6\cdot8=48$$

$$f(16)=6\cdot64=384$$

The pair must reproduce the record, and it does:

$$384-48=336$$

A second consistency check comes from the ratio, which should be the input factor raised to the exponent:

$$\frac{384}{48}=8=4^{3/2}$$

Both quoted levels agree with the calibration, with the surviving difference, and with the scaling behaviour of the model, so the statement is True.`,
      String.raw`**C.** → True

With the coefficient recovered from the record as $A=336/56=6$, the model is $f(x)=6x^{3/2}$. Evaluate the power at the requested index, taking the square root first:

$$9^{3/2}=(\sqrt{9})^{3}=3^{3}=27$$

Apply the coefficient:

$$f(9)=6\cdot27=162$$

The figure sits between the two recovered levels, above $f(4)=48$ and below $f(16)=384$, which is what an increasing model requires for an index between $4$ and $16$. Handling cost at index $9$ is exactly $162$ euros, so the statement is True.`,
      String.raw`**D.** → True

The multiplier for a power function depends only on the input factor and the exponent, so the coefficient plays no part:

$$\frac{f(4x)}{f(x)}=\frac{A(4x)^{3/2}}{Ax^{3/2}}=4^{3/2}$$

Evaluate that power:

$$4^{3/2}=(\sqrt{4})^{3}=2^{3}=8$$

The recovered levels are a worked instance of the same rule, since the index moves from $4$ to $16$ by a factor of $4$:

$$\frac{f(16)}{f(4)}=\frac{384}{48}=8$$

Cost grows faster than volume here because the exponent exceeds $1$. The stated multiplier is exactly right, so the statement is True.`,
      String.raw`**E.** → True

Both levels come from the calibrated rule $f(x)=6x^{3/2}$. Evaluate the two powers by taking square roots and cubing:

$$25^{3/2}=(\sqrt{25})^{3}=5^{3}=125$$

$$9^{3/2}=(\sqrt{9})^{3}=3^{3}=27$$

Apply the coefficient to each:

$$f(25)=6\cdot125=750, \qquad f(9)=6\cdot27=162$$

Subtract:

$$750-162=588$$

The gap is far wider than the difference between indices $4$ and $9$, which comes to $162-48=114$, because an exponent above $1$ makes each extra unit of volume cost more than the last. The quoted difference matches, so the statement is True.`,
    ],
    difficulty_level: "5/5",
    sort_order: 67,
    solution_overview: String.raw`Handling cost is $f(x)=Ax^{3/2}$ euros, and the only record is $f(16)-f(4)=336$.

**Part 1: Building the model.**

Let $x$ = pallet-volume index, $f$ = daily handling cost in euros. No single level is known, so the coefficient has to come out of a difference. That works because $A$ is a common factor of every model value, and the exponent is given.

**1. Translate: the surviving record.**

$$A\cdot16^{3/2}-A\cdot4^{3/2}=336$$

**2. Translate: factor the coefficient out.**

$$A\left(16^{3/2}-4^{3/2}\right)=336$$

**Part 2: The model.**

$$f(x)=6\,x^{3/2} \tag{1}$$

$$\frac{f(kx)}{f(x)}=k^{3/2} \tag{2}$$

**Part 3: Solve.**

**1.** The two powers in the record:

$$16^{3/2}=64, \qquad 4^{3/2}=8$$

**2.** The calibration:

$$56A=336 \quad \Rightarrow \quad A=6$$

**3.** Recovered levels at the recorded indices:

$$f(4)=48, \qquad f(16)=384, \qquad 384-48=336$$

**4.** Further levels the statements need:

$$f(9)=162, \qquad f(25)=750, \qquad 750-162=588$$

**5.** The scaling identity in $(2)$ gives the same information without any levels: a factor of $4$ on the index multiplies cost by $4^{3/2}=8$, matching $384/48=8$. An exponent above $1$ makes cost rise faster than volume, which is why equal index gaps produce widening cost gaps. Once both constants are known, every later index is a pure evaluation of $f(s)=6s^{3/2}$.

**Answer.** $A=6$ | $f(4)=48$, $f(9)=162$, $f(16)=384$, $f(25)=750$ | factor of $4$ on volume multiplies cost by $8$`,
  },
  {
    id: "math-8-68",
    case_id: "MATH 8.68",
    title: "Inverting a Wastewater Load Model Against a Permit Ceiling",
    context: String.raw`A dye-house discharges a wastewater load of $W(s)=5s^{3/2}$ kilograms per day, where $s>0$ is a production scale index. The site permit caps the daily load at $320$ kilograms, and the plant wants the largest scale index it may run. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`The largest admissible scale index is $s=16$.`,
      String.raw`The load model inverts to $s=(W/5)^{2/3}$.`,
      String.raw`Doubling the permit ceiling to $640$ doubles the admissible scale index.`,
      String.raw`At scale index $9$ the daily load is $135$ kilograms.`,
      String.raw`If the coefficient rose from $5$ to $10$, the admissible scale index under the same ceiling would be halved.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      String.raw`**A.** → True

The ceiling is an equation once the load is pushed to its maximum:

$$5s^{3/2}=320$$

Divide by the coefficient:

$$s^{3/2}=64$$

Undo the exponent by raising both sides to the reciprocal power $2/3$, and evaluate using $64^{1/3}=4$:

$$s=64^{2/3}=\left(\sqrt[3]{64}\right)^{2}=4^{2}=16$$

Check the load at that index, using $16^{3/2}=64$:

$$W(16)=5\cdot64=320$$

The load is exactly at the cap. Since the exponent $3/2$ is positive, $W$ increases with $s$, so every index above $16$ breaches the permit and every index below it complies. The largest admissible index is $16$, so the statement is True.`,
      String.raw`**B.** → True

Inverting means solving the rule for the input. Start from the model and isolate the power:

$$W=5s^{3/2} \quad \Rightarrow \quad s^{3/2}=\frac{W}{5}$$

Raise both sides to the reciprocal exponent $2/3$, which cancels $3/2$ because $(3/2)\cdot(2/3)=1$:

$$s=\left(\frac{W}{5}\right)^{2/3}$$

Test the inverse on the permit figure:

$$\left(\frac{320}{5}\right)^{2/3}=64^{2/3}=16$$

That returns the admissible index found from the ceiling, and running it forward gives $W(16)=320$ again. The stated inverse rule is correct, so the statement is True.`,
      String.raw`**C.** → False

The inverse is itself a power function, with exponent $2/3$ rather than $1$, so a ceiling multiplier of $k$ moves the admissible index by $k^{2/3}$:

$$\frac{(2W/5)^{2/3}}{(W/5)^{2/3}}=2^{2/3}\approx1.5874$$

Computing the new index directly gives the same figure:

$$s=\left(\frac{640}{5}\right)^{2/3}=128^{2/3}\approx25.40$$

Doubling would require $s=32$, and the model allows only about $25.4$. Because load rises faster than scale, permitted room for scale grows more slowly than the permitted load. The claim assumes proportional inversion, so the statement is False.`,
      String.raw`**D.** → True

Evaluate the load rule at the stated index. Take the square root first and then cube, since $9^{3/2}=(\sqrt{9})^{3}=3^{3}=27$:

$$W(9)=5\cdot27=135$$

The figure is consistent with the permit analysis. The cap allows an index of $16$, and $9$ is below that, so the resulting load should be under $320$ kilograms, which $135$ is. The scaling rule confirms the gap, since moving from index $9$ to index $16$ multiplies the load by

$$\left(\frac{16}{9}\right)^{3/2}=\left(\frac{4}{3}\right)^{3}=\frac{64}{27}\approx2.37$$

and $135\times64/27=320$. The stated load is correct, so the statement is True.`,
      String.raw`**E.** → False

A larger coefficient does tighten the admissible index, but not in proportion, because the coefficient enters the inverse under the exponent $2/3$:

$$s=\left(\frac{320}{10}\right)^{2/3}=32^{2/3}$$

Evaluate that power, writing $32=2^{5}$:

$$32^{2/3}=2^{10/3}\approx10.08$$

Compare with the original admissible index of $16$:

$$\frac{10.08}{16}\approx0.63=2^{-2/3}$$

Halving would give $8$, and the model permits about $10.1$. Doubling the coefficient costs the plant only about $37\%$ of its scale, not $50\%$. The claim uses a proportional rule where a fractional power applies, so the statement is False.`,
    ],
    difficulty_level: "3/5",
    sort_order: 68,
    solution_overview: String.raw`Load is $W(s)=5s^{3/2}$ kilograms per day and the permit caps it at $320$.

**Part 1: Building the model.**

Let $s$ = production scale index, $W$ = daily load in kilograms. The exponent $3/2$ is positive, so load increases with scale and a cap on load becomes a cap on scale. Converting one into the other is an inversion, and inverting a power means using the reciprocal exponent.

**1. Translate: the binding permit.**

$$5s^{3/2}=320$$

**2. Translate: the inverse rule.** Raising both sides to the power $2/3$ cancels the exponent, since $(3/2)\cdot(2/3)=1$:

$$s=\left(\frac{W}{5}\right)^{2/3}$$

**Part 2: The model.**

$$W(s)=5\,s^{3/2} \tag{1}$$

$$s(W)=\left(\frac{W}{5}\right)^{2/3} \tag{2}$$

**Part 3: Solve.**

**1.** The binding permit reduces to a clean power:

$$s^{3/2}=64 \quad \Rightarrow \quad s=64^{2/3}=16$$

**2.** Loads at the indices the statements use:

$$W(9)=135, \qquad W(16)=320$$

**3.** A doubled ceiling, using $(2)$:

$$s=128^{2/3}\approx25.40, \qquad \frac{25.40}{16}=2^{2/3}\approx1.5874$$

**4.** A doubled coefficient, again using $(2)$:

$$s=32^{2/3}\approx10.08, \qquad \frac{10.08}{16}=2^{-2/3}\approx0.63$$

**5.** Both counterfactuals move the admissible index by a factor of $2$ raised to $\pm2/3$, never by $2$ or by $1/2$. That is the practical content of inverting an exponent above $1$: scale reacts to permits more slowly than load reacts to scale.

**Answer.** largest index $s=16$ | inverse $s=(W/5)^{2/3}$ | $W(9)=135$ | doubling the cap raises the index by $2^{2/3}\approx1.59$`,
  },
  {
    id: "math-8-69",
    case_id: "MATH 8.69",
    title: "Elasticity Shortcut Against the Exact Change in Parking Demand",
    context: String.raw`A city parking authority models hourly demand by $q(p)=Ap^{-2}$ occupied spaces, where $p$ is the hourly tariff in euros, and it records $4000$ occupied spaces at a tariff of $3$. Demand of this form has constant elasticity $-2$, so the usual shortcut predicts a percentage change in demand equal to $-2$ times the percentage change in tariff. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      String.raw`Raising the tariff by $25\%$ cuts hourly demand by exactly $50\%$.`,
      String.raw`The elasticity shortcut understates the true loss caused by a $25\%$ tariff rise.`,
      String.raw`Raising the tariff by $25\%$ cuts hourly demand by exactly $36\%$.`,
      String.raw`Raising the tariff by $1\%$ cuts hourly demand by exactly $2\%$.`,
      String.raw`Cutting the tariff by $25\%$ raises hourly demand by exactly $50\%$.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      String.raw`**A.** → False

The shortcut suggests $-2\times25\%=-50\%$, but elasticity measures the response to an infinitesimal change, while $25\%$ is a finite move. The exact multiplier is a power:

$$\frac{q(1.25p)}{q(p)}=1.25^{-2}=\frac{1}{1.5625}=0.64$$

Demand keeps $64\%$ of its level, so the true cut is $36\%$. Levels confirm this once the coefficient is recovered from the observation, $A=4000\cdot3^{2}=36000$:

$$q(3)=4000, \qquad q(3.75)=\frac{36000}{14.0625}=2560$$

Half of $4000$ would be $2000$, and the model gives $2560$. The exact loss is smaller than the shortcut predicts, so the statement is False.`,
      String.raw`**B.** → False

Put the two figures side by side. The shortcut applies the elasticity to the whole finite change:

$$-2\times25\%=-50\%$$

The exact calculation uses the power multiplier:

$$1.25^{-2}=0.64 \quad \Rightarrow \quad -36\%$$

A predicted loss of $50\%$ against a true loss of $36\%$ means the shortcut overstates the damage by $14$ percentage points. The direction is systematic for a convex demand curve: the exact multiplier $1.25^{-2}$ lies above the linear approximation, so the shortcut is always too pessimistic for a price rise of this size. The claim reverses that direction, so the statement is False.`,
      String.raw`**C.** → True

A rise of $25\%$ is a tariff multiplier of $1.25$, and in an isoelastic model the demand multiplier is that factor raised to the exponent:

$$\frac{q(1.25p)}{q(p)}=1.25^{-2}=\frac{1}{1.5625}=0.64$$

Convert the surviving fraction into a percentage cut:

$$1-0.64=0.36=36\%$$

Levels give the same result. The observation fixes the coefficient, since $4000=A\cdot3^{-2}$ gives $A=36000$, and the new tariff is $3\times1.25=3.75$:

$$q(3.75)=\frac{36000}{14.0625}=2560, \qquad \frac{2560}{4000}=0.64$$

The figure is exact rather than approximate, because $1.25^{-2}$ is a terminating decimal. Demand falls by exactly $36\%$, so the statement is True.`,
      String.raw`**D.** → False

Even a small change is not matched exactly by the shortcut. Compute the true multiplier for a tariff factor of $1.01$:

$$1.01^{-2}=\frac{1}{1.0201}\approx0.980296$$

The implied cut is

$$1-0.980296=0.019704\approx1.9704\%$$

The shortcut predicts $2\%$, and the exact figure is about $1.9704\%$, a gap of roughly $0.03$ percentage points. The word in the claim is exactly, and the two values differ, so the equality fails. Elasticity is a limit, so the approximation improves as the change shrinks but only becomes exact at a change of zero. so the statement is False.`,
      String.raw`**E.** → False

A cut of $25\%$ is a tariff multiplier of $0.75$, and the demand response is again a power:

$$\frac{q(0.75p)}{q(p)}=0.75^{-2}=\frac{1}{0.5625}\approx1.7778$$

Demand rises by about $77.8\%$, far more than the $50\%$ claimed. Levels agree, with the coefficient $A=36000$ and the new tariff $3\times0.75=2.25$:

$$q(2.25)=\frac{36000}{5.0625}\approx7111.1$$

A rise of $50\%$ would give $6000$ spaces. The asymmetry is worth noting: a $25\%$ rise costs $36\%$ of demand while a $25\%$ cut adds about $78\%$, because the two multipliers $1.25^{-2}$ and $0.75^{-2}$ are not mirror images. so the statement is False.`,
    ],
    difficulty_level: "4/5",
    sort_order: 69,
    solution_overview: String.raw`Demand is $q(p)=Ap^{-2}$ with $q(3)=4000$, and the elasticity shortcut is compared with exact finite changes.

**Part 1: Building the model.**

Let $p$ = hourly tariff in euros, $q$ = occupied spaces. The exponent $-2$ is the constant elasticity. The shortcut multiplies that elasticity by a percentage change in tariff; the exact route raises the tariff multiplier to the exponent. The two agree only in the limit of vanishing changes.

**1. Translate: the observed pair.**

$$A\cdot3^{-2}=4000$$

**2. Translate: the two methods.** For a tariff factor $k$, the shortcut predicts the first expression while the exact route gives the second:

$$-2(k-1), \qquad k^{-2}-1$$

**Part 2: The model.**

$$q(p)=36000\,p^{-2} \tag{1}$$

$$\frac{q(kp)}{q(p)}=k^{-2} \tag{2}$$

**Part 3: Solve.**

**1.** The observation gives the coefficient:

$$A=4000\times9=36000$$

**2.** Exact multipliers from $(2)$ at the three factors the statements use:

$$1.25^{-2}=0.64, \qquad 1.01^{-2}\approx0.980296, \qquad 0.75^{-2}\approx1.7778$$

**3.** The matching exact percentage changes:

$$-36\%, \qquad -1.9704\%, \qquad +77.78\%$$

**4.** Levels at the corresponding tariffs:

$$q(3)=4000, \qquad q(3.75)=2560, \qquad q(2.25)\approx7111.1$$

**5.** The shortcut predicts $-50\%$, $-2\%$ and $+50\%$ for the same three moves. It overstates the loss from a rise and understates the gain from a cut, and its error shrinks as the change shrinks, from $14$ percentage points at $25\%$ down to about $0.03$ at $1\%$.

**Answer.** $A=36000$ | exact cut of $36\%$ for a $25\%$ rise | exact gain of about $77.8\%$ for a $25\%$ cut | shortcut exact only in the limit`,
  },
];
