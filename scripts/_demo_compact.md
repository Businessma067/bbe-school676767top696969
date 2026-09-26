
============================================================
MATH
============================================================

### 0 DEMO MATH 1.H02 ak=[True, True, True, False, False]
CTX:
Four colleagues — Ana, Boris, Ceci, and Dmitri — decide whether to attend a conference.

(1) If Ana attends, then Boris does not attend.

(2) If Boris does not attend, then Ceci attends.

(3) If Ceci attends, then Dmitri does not attend — unless Ana also attends, in which case Dmitri is unrestricted.

(4) Dmitri attends.

(5) At most three of the four attend.

(6) If Ana stays away, then Boris attends.

(7) Ceci and Boris never attend together.

(8) It is not the case that nobody from {Ana, Ceci} attends.

Decide whether each claim is true or false.
A: Dmitri attends in every roster consistent with the rules.
B: Ana must attend in every legal roster.
C: There exists a legal roster in which exactly three people attend.
D: Boris can attend in some legal roster.
E: If the “unless Ana attends” exception were removed from rule (3), the rules would still admit a solution with Dmitri attending.

### 1 DEMO MATH 2.H02 ak=[True, True, True, False, True]
CTX:
An algebra archive stores two nonzero real numbers $p$ and $q$ through four records:

(1) $p^{2}+q^{2}=250$

(2) $pq=75$

(3) $p^{3}+q^{3}=3500$

(4) $\dfrac{1}{p}+\dfrac{1}{q}=\dfrac{4}{15}$

The original order was not recorded. Decide whether each statement is true or false.
A: Records (1) and (2) alone already force $(p+q)^{2}=400$, so $|p+q|=20$.
B: Records (1) and (2) together with the side condition $p+q>0$ already imply record (3).
C: Records (1), (2) and (4) together force the unordered pair $\{p,q\}=\{5,15\}$.
D: If record (3) were rewritten as $p^{3}+q^{3}=2800$ while (1) and (2) stayed unchanged, the three records could still hold simultaneously for some nonzero reals $p,q$.
E: From (1) and (2) alone one obtains $(p-q)^{2}=100$, and if in addition (4) holds then automatically $p^{3}+q^{3}=(p+q)\big((p^{2}+q^{2})-pq\)=3500$.

### 2 MATH 11.99 ak=[True, False, True, False, False]
CTX:
A logistics firm is juggling three separate arrangements. First, a depot lease requires payments of USD 5500 at the BEGINNING of each year as an annuity due for 6 years at 7% interest. Second, the firm separately invests USD 25000 today for 8 years under continuous compounding at a nominal rate of 5.5%. Third, a maintenance reserve is funded as a growing perpetuity that pays USD 2400 at the end of year 1 and then grows at 2% per year forever, discounted at 7%. Decide whether each statement is true or false.
A: The present value of the annuity-due lease payments is approximately USD 28050.
B: The future value of these 6 annuity-due payments, evaluated at the end of year 6, is approximately USD 50000.
C: The USD 25000 investment under continuous compounding at a nominal 5.5% rate accumulates, after 8 years, to approximately USD 38820.
D: The growing-perpetuity reserve requires a present value that is LESS than the present value of the 6-year annuity-due lease payments.
E: Comparing the accumulated continuous-compounding investment after 8 years to the growing-perpetuity present value, the continuous-compounding result is LARGER.

### 3 DEMO MATH 4.H02 ak=[False, True, False, False, True]
CTX:
Decide whether each claim is true or false. Five independent mixed equations. The five claims deliberately use different judgment styles — candidate survival, root count, size comparison, threshold, and sign/location — so do not expect the same wording twice.
A: Squaring twice for $\sqrt{3x+7}+\sqrt{x+1}=4$ produces two real candidates, and both of them survive domain checks and back-substitution.
B: After discarding the poles $x=1$ and $x=-4$, the equation $\dfrac{x+2}{x-1}+\dfrac{2x-3}{x+4}=\dfrac{3x^{2}+5x-2}{(x-1)(x+4)}$ reduces to a linear condition with exactly one surviving real root.
C: Every real solution of $|x^{2}-6x+5|=3x-4$ is strictly larger than $3$.
D: Every domain-legal real solution of $\log_{2}(x-1)+\log_{2}(x+3)=\log_{2}(3x+5)$ is strictly larger than $4$.
E: The equation $\sqrt{x+3}+|x-1|=4$ has at least one negative real solution and at least one real solution greater than $2$.

### 4 DEMO MATH 5.H01 ak=[True, True, True, True, False]
CTX:
A print shop sells only mono pages and colour pages. In one batch it printed a total of $180$ pages and booked revenue EUR 8100. Mono sells at EUR 35 each and colour at EUR 55 each:
$$
m+c=180,\qquad 35m+55c=8100.
$$
The unique baseline solution is the factual starting point. Decide whether each statement is true or false.
A: The unique baseline solution is $(m,c)=(90,90)$.
B: If the colour price had been EUR 60 instead of EUR 55, with the same count $m+c=180$ and the same revenue EUR 8100, then $c$ would have fallen below $75$.
C: If management had printed $15$ fewer mono pages and $15$ more colour pages than the baseline, revenue would have risen by exactly EUR 300.
D: If total pages stayed $180$ but the revenue target rose to EUR 10000 at the same prices, no nonnegative solution $(m,c)$ would exist, because an all-colour batch only reaches EUR 9900.
E: If prices stayed EUR 35 and EUR 55 but the shop printed the swapped mix $(120,60)$ instead of the baseline $(90,90)$, revenue would still be EUR 8100.

### 5 DEMO MATH 6.H02 ak=[True, True, False, True, False]
CTX:
Decide whether each claim is true or false. All five letters are inequalities, but the claims are worded differently on purpose: absence of counterexamples, existence inside an open interval, existence on a closed interval, containment of a segment, and nonempty intersection.
A: No point of the interval $[1,4]$ violates $|x^{2}-5x+4|+|2x-3|\le x+6$.
B: The inequality $\sqrt{2x+5}+|x-2|\le 4$ admits at least one solution in the open interval $(1,2)$.
C: There exists some $x\in[0,1]$ for which $\dfrac{x^{2}-5x+6}{x^{2}-x-2}\ge 1$.
D: The solution set of $\dfrac{|x|}{x+3}+\sqrt{x+1}\le 2$ contains every point of $[0,1]$.
E: The inequality $\dfrac{|2x-5|}{|x+1|}+|x-2|\le 4$ has nonempty intersection with the interval $[-4,-2]$.

### 6 DEMO MATH 7.H01 ak=[False, True, False, False, True]
CTX:
For each real parameter $k$, define
$$
g_k(x)=x^{2}-(2k+1)x+(k^{2}-4).
$$
Decide whether each claim about this family is true or false.
A: For every real $k$, the equation $g_k(x)=0$ has two distinct real roots.
B: The axis of symmetry of $y=g_k(x)$ is $x=k+\tfrac12$ for every $k$.
C: If $k=2$, then the roots are $x=1$ and $x=5$.
D: There exists a real $k$ for which both roots are equal to $0$.
E: The vertex $y$-coordinate equals $-\dfrac{17}{4}$ when $k=0$.

### 7 DEMO MATH 8.H01 ak=[True, True, False, True, False]
CTX:
A courier charges a daytime base fee of EUR 12 plus EUR 0.8 per kilometre. Night runs use the same kilometre rate but add a flat night surcharge of EUR 5. Let $d>0$ be the distance in kilometres. Decide whether each claim is true or false.
A: The daytime bill for distance $d$ is exactly $12+0.8d$ euros.
B: If the same distance were run at night, the night bill would be exactly EUR 5 more than the daytime bill for every $d>0$.
C: There is a distance $d^{*}$ at which a daytime run and a night run would cost the same; solving $12+0.8d=12+0.8d+5$ finds it.
D: If the firm waived the EUR 12 base on daytime runs only (charging pure $0.8d$), then for a $20$ km daytime job the client would save exactly EUR 12 compared with the original daytime tariff.
E: If distance doubled from $10$ km to $20$ km on a daytime run, the bill would also double, because both the base and the kilometre charge scale linearly with $d$.

### 8 DEMO MATH 9.H01 ak=[True, True, True, False, True]
CTX:
Let
$$
r(x)=ax^{3}+bx^{2}+cx+d,\qquad a\neq 0,
$$
be a real cubic, and define
$$
s(x)=\dfrac{r(x)}{x^{2}+4}.
$$
Decide whether each claim is true or false.
A: $\displaystyle\lim_{x\to+\infty}s(x)=+\infty$ whenever $a>0$.
B: $\displaystyle\lim_{x\to-\infty}r(x)=-\infty$ whenever $a>0$.
C: If $r(2)=0$ and $r'(2)=0$, then $(x-2)^{2}$ divides $r(x)$, so $x=2$ is at least a double root.
D: For every choice of $a,b,c,d$ with $a\neq 0$, the horizontal line $y=0$ is a horizontal asymptote of $s$.
E: If $a=3$, $b=-6$, $c=0$, $d=0$, then $r(x)=3x^{2}(x-2)$, so $x=0$ is a double root and $x=2$ is a simple root.

### 9 DEMO MATH 10.H01 ak=[True, False, True, False, False]
CTX:
Define the entangled pair
$$
f(t)=4e^{0.3t},\qquad g(t)=16e^{-0.6t}\qquad(t\in\mathbb{R}),
$$
and the log-gap
$$
h(t)=\ln f(t)-\ln g(t)=\ln\!\bigl(f(t)/g(t)\bigr).
$$
Also write $p(t)=f(t)\,g(t)$. Decide whether each claim is true or false.
A: $f(t)=g(t)$ has the unique real solution $t=\dfrac{1}{0.9}\ln 4=\dfrac{\ln 4}{0.9}$.
B: $h(t)=\ln 4+0.9t$ for every real $t$, so $h$ is affine with positive slope $0.9$.
C: If $t$ increases by $\dfrac{10}{3}$, then $f$ is multiplied by $e$ and $g$ is multiplied by $e^{-2}$.
D: The product $p(t)=f(t)g(t)$ is minimized over $\mathbb{R}$ at the same $t$ where $f=g$, and that minimum value equals $64$.
E: Because $f(0)=4<16=g(0)$ and $f$ grows while $g$ decays, one has $f(t)<g(t)$ for every $t>0$.

### 10 DEMO MATH 11.H01 ak=[True, False, True, False, False]
CTX:
A firm faces inverse demand $P(q)=90-3q$ for $0\le q\le 30$ (price in euros, quantity in thousands of units). Revenue is $R(q)=q\cdot P(q)$. Marginal revenue means $R'(q)$. Decide whether each claim is true or false.
A: $R'(q)=90-6q$, so in particular $R'(4)=66$.
B: Revenue is maximised at the same quantity where $P(q)=0$, i.e. at the choke quantity $q=30$.
C: If output rises from $q=4$ to $q=5$, the linear approximation using $R'(4)$ overestimates the true revenue increase $R(5)-R(4)$, because $R$ is a concave quadratic.
D: At the quantity that maximises $R$, price equals marginal revenue.
E: Cutting price enough to raise quantity from $q=16$ to $q=17$ must raise revenue, because more units are sold.

### 11 MATH 12.187 ak=[True, True, False, True, True]
CTX:
In a wild deer population, 60% are Subspecies A, 25% are Subspecies B, and 15% are Subspecies C. A certain prion disease is present in 2% of Subspecies A, 6% of Subspecies B, and 15% of Subspecies C. A field test for the disease has a 90% sensitivity (probability of a positive result if the deer truly has the disease) and a 4% false-positive rate (probability of a positive result if the deer does not have the disease), regardless of subspecies. A randomly tested deer receives a POSITIVE result.
A: The probability that a tested deer receives a positive result is greater than 7%.
B: The probability that the deer is Subspecies A AND receives a positive result is greater than 3.4%.
C: The probability that the deer is Subspecies A, given a positive result is greater than 45%.
D: The probability that a tested deer receives a negative result equals 1 minus the probability that a tested deer receives a positive result.
E: The probability that the deer is Subspecies C, given a positive result is greater than the probability that the deer is Subspecies B, given a positive result.

### 12 MATH 13.108 ak=[True, False, True, False, False]
CTX:
Harbor staff run 14 independent foghorn tests. The expected number of clear audible tests is 11.2. Evaluate each statement. Mark it TRUE or FALSE.
A: The next test fails with probability 0.2.
B: The expected number of audible tests in the next 12 tests is 4.8.
C: The variance of the number of audible tests out of 50 tests is 8.
D: The probability of 3 consecutive audible tests is less than 0.3.
E: The probability of at most 4 audible tests in the next 6 tests is more than 0.5.

============================================================
ECONOMICS
============================================================

### 0 CASE 6.5.034 ak=[True, False, True, True, False]
CTX:
Consider the following extract (in € thousands) for a business whose identity is not disclosed.

| Item (€ thousands) | Amount |
| --- | ---: |
| Revenue | 1,019 |
| Cost of sales | 674 |
| Total assets at the beginning of the year | 823 |
| Total assets at the end of the year | 1028 |
| Inventory at the beginning of the year | 169 |
| Inventory at the end of the year | 179 |
| Trade receivables at the beginning of the year | 135 |
| Trade receivables at the end of the year | 107 |

Evaluate the following economic assertions:

A: Inventory turnover is below 6.87 times per year.
B: Asset turnover is above 1.48.
C: With inventory turnover of about 3.9 times a year on this extract, a higher figure would generally mean stock is sold and replaced more quickly, tying up less money in inventory.
D: Revenue exceeds €999 thousand.
E: Trade receivables turnover exceeds 10.4 times per year.

### 1 CASE 6.4.010 ak=[True, True, True, True, True]
CTX:
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 464 |
| Machinery | 277 |
| Office equipment | 43 |
| Patents, trademarks and licences | 41 |
| Inventory | 156 |
| Trade receivables | 81 |
| Cash and cash equivalents | 119 |
| Total assets | **1181** |
| **EQUITY** | |
| Share capital | 153 |
| Retained earnings | 325 |
| Total equity | **478** |
| **LIABILITIES** | |
| Long-term bank loan | 401 |
| Bonds payable | 79 |
| Trade payables | 197 |
| Bank overdraft | 26 
A: Financial accounting information such as the balance sheet and the income statement is also of interest to decision makers outside the business, for example tax authorities or banks.
B: Working capital of €133 thousand is positive on this balance sheet.
C: The debt ratio exceeds 56%.
D: Trade receivables make up less than 48.5% of current assets.
E: Cash and cash equivalents make up more than 23.1% of current assets.

### 2 CASE 6.2.039 ak=[True, False, True, True, False]
CTX:
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 307 |
| Machinery | 153 |
| Office equipment | 58 |
| Patents, trademarks and licences | 66 |
| Inventory | 119 |
| Trade receivables | 60 |
| Cash and cash equivalents | 97 |
| Total assets | **860** |
| **EQUITY** | |
| Share capital | 236 |
| Retained earnings | 49 |
| Total equity | **285** |
| **LIABILITIES** | |
| Long-term bank loan | 388 |
| Bonds payable | 55 |
| Trade payables | 74 |
| Bank overdraft | 58 |
| 
A: Under the straight-line method, the depreciable cost is spread evenly over the expected useful life, giving the same depreciation charge each year.
B: After excluding inventory, the remaining current assets still cover current liabilities more than 1.35 times over.
C: The current ratio exceeds 1.28.
D: Working capital of €144 thousand is positive on this balance sheet.
E: Buildings make up more than 47.1% of total assets.

### 3 CASE 6.3.027 ak=[False, True, True, True, False]
CTX:
Consider the following two-year balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Year 1 | Year 2 |
| --- | ---: | ---: |
| **ASSETS** | | |
| Buildings | 489 | 505 |
| Machinery | 142 | 147 |
| Office equipment | 74 | 77 |
| Patents, trademarks and licences | 79 | 79 |
| Inventory | 81 | 85 |
| Trade receivables | 180 | 193 |
| Cash and cash equivalents | 57 | 58 |
| Total assets | **1102** | **1144** |
| **EQUITY** | | |
| Share capital | 158 | 158 |
| Retained earnings | 384 | 374 |
| Total equity | **542** | **532** |
| **LIABILITIES** | | |
A: Total equity grew by more than 21.7% between Year 1 and Year 2.
B: Current assets such as inventory, trade receivables and cash normally have higher liquidity and are not expected to be used longer than a year.
C: Non-current liabilities amount to less than 91.7% of total equity in Year 2.
D: Current liabilities are covered by current assets less than 2.02 times over in Year 2.
E: Total assets grew by more than 12.2% between Year 1 and Year 2.

### 4 CASE 6.1.020 ak=[True, False, False, False, False]
CTX:
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 492 |
| Machinery | 256 |
| Office equipment | 63 |
| Patents, trademarks and licences | 63 |
| Inventory | 136 |
| Trade receivables | 162 |
| Cash and cash equivalents | 34 |
| Total assets | **1206** |
| **EQUITY** | |
| Share capital | 296 |
| Retained earnings | 422 |
| Total equity | **718** |
| **LIABILITIES** | |
| Long-term bank loan | 207 |
| Bonds payable | 83 |
| Trade payables | 150 |
| Bank overdraft | 48 
A: Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year.
B: The current ratio is below 0.93.
C: After excluding inventory, the remaining current assets still cover current liabilities more than 1.24 times over.
D: The equity ratio is below 33.7%.
E: The debt ratio exceeds 47.8%.

### 5 CASE 6.5.068 ak=[False, True, False, True, True]
CTX:
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 307 |
| Machinery | 225 |
| Office equipment | 39 |
| Patents, trademarks and licences | 67 |
| Inventory | 215 |
| Trade receivables | 156 |
| Cash and cash equivalents | 80 |
| Total assets | **1089** |
| **EQUITY** | |
| Share capital | 146 |
| Retained earnings | 301 |
| Total equity | **447** |
| **LIABILITIES** | |
| Long-term bank loan | 286 |
| Bonds payable | 89 |
| Trade payables | 228 |
| Bank overdraft | 39 
A: The current ratio is below 0.78.
B: The current ratio exceeds 1.53.
C: After excluding inventory, the remaining current assets still cover current liabilities more than 1.25 times over.
D: Working capital of €184 thousand is positive on this balance sheet.
E: Trade receivables make up less than 55% of current assets.

### 6 CASE 6.5.074 ak=[True, False, False, False, True]
CTX:
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 305 |
| Machinery | 176 |
| Office equipment | 58 |
| Patents, trademarks and licences | 39 |
| Inventory | 169 |
| Trade receivables | 103 |
| Cash and cash equivalents | 83 |
| Total assets | **933** |
| **EQUITY** | |
| Share capital | 298 |
| Retained earnings | -8 |
| Total equity | **290** |
| **LIABILITIES** | |
| Long-term bank loan | 396 |
| Bonds payable | 70 |
| Trade payables | 143 |
| Bank overdraft | 34 |

A: The current ratio exceeds 1.8.
B: After excluding inventory, the remaining current assets still cover current liabilities more than 1.14 times over.
C: Buildings make up more than 43.4% of total assets.
D: The long-term bank loan of €396 thousand should be classified within equity rather than liabilities.
E: Working capital of €178 thousand is positive on this balance sheet.

### 7 CASE 6.5.060 ak=[False, False, True, False, False]
CTX:
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 474 |
| Machinery | 153 |
| Office equipment | 30 |
| Patents, trademarks and licences | 26 |
| Inventory | 97 |
| Trade receivables | 79 |
| Cash and cash equivalents | 104 |
| Total assets | **963** |
| **EQUITY** | |
| Share capital | 119 |
| Retained earnings | 191 |
| Total equity | **310** |
| **LIABILITIES** | |
| Long-term bank loan | 424 |
| Bonds payable | 51 |
| Trade payables | 114 |
| Bank overdraft | 64 |

A: After excluding inventory, the remaining current assets still cover current liabilities more than 1.22 times over.
B: The equity ratio is below 28.8%.
C: Working capital of €102 thousand is positive on this balance sheet.
D: Buildings make up more than 55.3% of total assets.
E: Inventory make up more than 46% of current assets.

### 8 CASE 6.5.077 ak=[True, True, True, True, True]
CTX:
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 502 |
| Machinery | 124 |
| Office equipment | 43 |
| Patents, trademarks and licences | 29 |
| Inventory | 231 |
| Trade receivables | 180 |
| Cash and cash equivalents | 105 |
| Total assets | **1214** |
| **EQUITY** | |
| Share capital | 110 |
| Retained earnings | 474 |
| Total equity | **584** |
| **LIABILITIES** | |
| Long-term bank loan | 346 |
| Bonds payable | 47 |
| Trade payables | 153 |
| Bank overdraft | 84
A: Working capital of €279 thousand is positive on this balance sheet.
B: After excluding inventory, the remaining current assets still cover current liabilities more than 0.9 times over.
C: Buildings make up more than 38.9% of total assets.
D: Inventory make up more than 42.9% of current assets.
E: The combined total of equity and non-current liabilities exceeds non-current assets by more than 26.8%.

### 9 CASE 6.5.029 ak=[True, False, False, True, False]
CTX:
Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.

| € in thousands | Amount |
| --- | ---: |
| **ASSETS** | |
| Buildings | 485 |
| Machinery | 256 |
| Office equipment | 66 |
| Patents, trademarks and licences | 77 |
| Inventory | 273 |
| Trade receivables | 145 |
| Cash and cash equivalents | 45 |
| Total assets | **1347** |
| **EQUITY** | |
| Share capital | 198 |
| Retained earnings | 684 |
| Total equity | **882** |
| **LIABILITIES** | |
| Long-term bank loan | 288 |
| Bonds payable | 49 |
| Trade payables | 80 |
| Bank overdraft | 48 |
A: The current ratio exceeds 1.55.
B: The equity ratio is below 28.7%.
C: The debt ratio exceeds 76.4%.
D: Working capital of €335 thousand is positive on this balance sheet.
E: Buildings make up more than 50.7% of total assets.