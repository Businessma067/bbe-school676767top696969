# DEMO MATH 2.H02

ak=[True, True, True, False, True]

current_lens=[416, 602, 494, 640, 433]

## title
Two-number identity archive — harder chain

## context
An algebra archive stores two nonzero real numbers $p$ and $q$ through four records:

(1) $p^{2}+q^{2}=250$

(2) $pq=75$

(3) $p^{3}+q^{3}=3500$

(4) $\dfrac{1}{p}+\dfrac{1}{q}=\dfrac{4}{15}$

The original order was not recorded. Decide whether each statement is true or false.

## statement A
Records (1) and (2) alone already force $(p+q)^{2}=400$, so $|p+q|=20$.

## current A
**A.** → True

Records (1) and (2) alone already determine the squared sum. Expand the binomial:

$$
(p+q)^{2}=p^{2}+2pq+q^{2}=(p^{2}+q^{2})+2pq
$$

Substitute records (1) and (2):

$$
(p+q)^{2}=250+2\cdot 75=250+150=400
$$

Take the nonnegative square root:

$$
|p+q|=\sqrt{400}=20
$$

exactly as claimed. (The signed sum itself may still be $+20$ or $-20$; the absolute value is forced.)

So the statement is True.

## statement B
Records (1) and (2) together with the side condition $p+q>0$ already imply record (3).

## current B
**B.** → True

Start from records (1) and (2) together with the side condition $p+q>0$. Letter A already gives

$$
|p+q|=20
$$

The side condition selects the positive branch:

$$
p+q=20
$$

Apply the standard cube-sum identity:

$$
p^{3}+q^{3}=(p+q)\bigl((p^{2}+q^{2})-pq\bigr)
$$

First the inner difference:

$$
250-75=175
$$

Then multiply by the sum, splitting the product:

$$
p^{3}+q^{3}=20\cdot 175
$$

$$
20\cdot 100=2000
$$

$$
20\cdot 75=1500
$$

$$
2000+1500=3500
$$

$$
p^{3}+q^{3}=3500
$$

which is exactly record (3). So (1), (2) and $p+q>0$ already imply (3).

So the statement is True.

## statement C
Records (1), (2) and (4) together force the unordered pair $\{p,q\}=\{5,15\}$.

## current C
**C.** → True

Record (4) forces the sign of the sum. Multiply both sides of $\frac{1}{p}+\frac{1}{q}=\frac{4}{15}$ by $pq=75$:

$$
p+q=\frac{4}{15}\cdot 75=20
$$

matching letter A's $|p+q|=20$. The two numbers are the roots of

$$
t^{2}-20t+75=0
$$

Discriminant:

$$
20^{2}-4\cdot 75=400-300=100
$$

$$
t=\frac{20\pm\sqrt{100}}{2}=\frac{20\pm 10}{2}
$$

so $t=15$ or $t=5$. The unordered pair is $\{5,15\}$, and the reciprocal sum matches record (4) automatically.

So the statement is True.

## statement D
If record (3) were rewritten as $p^{3}+q^{3}=2800$ while (1) and (2) stayed unchanged, the three records could still hold simultaneously for some nonzero reals $p,q$.

## current D
**D.** → False

Keep records (1) and (2) fixed and ask whether the cube sum can be rewritten as $2800$. From those two records alone,

$$
|p+q|=20
$$

Inner piece:

$$
(p^{2}+q^{2})-pq=250-75
$$

$$
250-75=175
$$

The cube-sum identity forces

$$
p^{3}+q^{3}=(p+q)\bigl((p^{2}+q^{2})-pq\bigr)
$$

Positive branch:

$$
20\cdot 175=3500
$$

Negative branch:

$$
(-20)\cdot 175=-3500
$$

So the only possible values are

$$
\pm 3500
$$

Compare with the rewritten claim:

$$
3500\neq 2800
$$

$$
-3500\neq 2800
$$

Neither value equals $2800$. The rewritten triple therefore cannot hold for any nonzero reals $p,q$.

So the statement is False.

## statement E
From (1) and (2) alone one obtains $(p-q)^{2}=100$, and if in addition (4) holds then automatically $p^{3}+q^{3}=(p+q)\big((p^{2}+q^{2})-pq\)=3500$.

## current E
**E.** → True

From records (1) and (2) expand the squared difference:

$$
(p-q)^{2}=p^{2}-2pq+q^{2}=250-2\cdot 75=250-150=100
$$

$$
|p-q|=\sqrt{100}=10
$$

as claimed. If in addition record (4) holds, then

$$
p+q=\frac{4}{15}\cdot 75=\frac{300}{15}=20
$$

Cube identity with $p^{2}+q^{2}-pq=250-75=175$:

$$
p^{3}+q^{3}=(p+q)(p^{2}-pq+q^{2})=20\cdot 175=3500
$$

which is exactly the displayed identity.

So the statement is True.