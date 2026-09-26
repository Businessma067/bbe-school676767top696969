# DEMO MATH 11.H01

ak=[True, False, True, False, False]

current_lens=[289, 309, 346, 300, 324]

## title
Tangled revenue path — marginal analysis

## context
A firm faces inverse demand $P(q)=90-3q$ for $0\le q\le 30$ (price in euros, quantity in thousands of units). Revenue is $R(q)=q\cdot P(q)$. Marginal revenue means $R'(q)$. Decide whether each claim is true or false.

## statement A
$R'(q)=90-6q$, so in particular $R'(4)=66$.

## current A
**A.** → True

Start from the linear demand and form revenue:

$$
P(q)=90-3q
$$

$$
R(q)=q\cdot P(q)=q(90-3q)=90q-3q^{2}
$$

Differentiate term by term:

$$
R'(q)=90-6q
$$

Evaluate at $q=4$:

$$
6\cdot 4=24,\qquad 90-24=66
$$

so $R'(4)=66$, matching the claim.

So the statement is True.

## statement B
Revenue is maximised at the same quantity where $P(q)=0$, i.e. at the choke quantity $q=30$.

## current B
**B.** → False

Maximise $R$ by setting marginal revenue to zero:

$$
90-6q=0\qquad\Rightarrow\qquad q=15
$$

Choke quantity where price vanishes:

$$
90-3q=0\qquad\Rightarrow\qquad q=30
$$

Compare:

$$
15\neq 30
$$

The revenue maximiser is $q=15$, not the choke quantity $q=30$.

So the statement is False.

## statement C
If output rises from $q=4$ to $q=5$, the linear approximation using $R'(4)$ overestimates the true revenue increase $R(5)-R(4)$, because $R$ is a concave quadratic.

## current C
**C.** → True

Compute the true increment $R(5)-R(4)$:

$$
R(5)=90\cdot 5-3\cdot 25=450-75=375
$$

$$
R(4)=90\cdot 4-3\cdot 16=360-48=312
$$

$$
375-312=63
$$

The linear approximation using $R'(4)=66$ predicts

$$
66\cdot 1=66
$$

Because $R''(q)=-6<0$, the graph is concave and the tangent overestimates:

$$
66>63
$$

So the statement is True.

## statement D
At the quantity that maximises $R$, price equals marginal revenue.

## current D
**D.** → False

From letter B the revenue maximiser is $q=15$. Marginal revenue there is zero:

$$
R'(15)=90-6\cdot 15=90-90=0
$$

while price is still positive:

$$
P(15)=90-3\cdot 15=90-45=45
$$

$$
45\neq 0
$$

Price does not equal marginal revenue at the revenue peak.

So the statement is False.

## statement E
Cutting price enough to raise quantity from $q=16$ to $q=17$ must raise revenue, because more units are sold.

## current E
**E.** → False

Past the revenue peak $q=15$, marginal revenue is already negative. At $q=16$:

$$
R'(16)=90-6\cdot 16=90-96=-6
$$

$$
-6<0
$$

Moving from $q=16$ to $q=17$ therefore lowers revenue even though more units are sold. Selling more does not raise revenue on the declining side of $R$.

So the statement is False.