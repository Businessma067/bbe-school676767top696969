# Extraction summary

- PDF: `Expected_Value_Variance_SD-2-merged.pdf`
- Total pages: **62**
- Total questions: **41**
- Format: five True/False statements per question
- Difficulty mapping for app:
  - `2/5` → Beginner
  - `3/5` → Intermediate
  - `4/5` and `5/5` → Advanced
- The PDF contains two sections both titled “Part 5”; numbering below preserves the document’s sequence.

## Core instructional formulas

\[
E(X)=\mu=\sum_x xP(X=x)
\]

\[
E(X^2)=\sum_x x^2P(X=x)
\]

\[
\operatorname{Var}(X)=\sigma^2=E(X^2)-[E(X)]^2
\]

\[
\sigma=\operatorname{SD}(X)=\sqrt{\operatorname{Var}(X)}
\]

For \(Y=aX+b\):

\[
E(Y)=aE(X)+b,\qquad
\operatorname{Var}(Y)=a^2\operatorname{Var}(X),\qquad
\operatorname{SD}(Y)=|a|\operatorname{SD}(X)
\]

Thus, adding or subtracting a constant changes the mean but not variance or standard deviation.

For independent \(X,Y\):

\[
E(X\pm Y)=E(X)\pm E(Y)
\]

\[
\operatorname{Var}(X\pm Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)
\]

For \(X\sim U[a,b]\):

\[
\mu=\frac{a+b}{2},\qquad \sigma^2=\frac{(b-a)^2}{12}
\]

For \(X\sim\operatorname{Poisson}(\lambda)\):

\[
\mu=\lambda,\qquad \sigma^2=\lambda,\qquad \sigma=\sqrt{\lambda}
\]

Variance contribution of outcome \(x\):

\[
P(X=x)\bigl(x-\mu\bigr)^2
\]

Empirical rule:

\[
P(\mu-\sigma<X<\mu+\sigma)\approx 0.68
\]

\[
P(\mu-2\sigma<X<\mu+2\sigma)\approx 0.95
\]

Mixtures:

\[
E(X)=\sum_gP(g)E(X\mid g)
\]

\[
\operatorname{Var}(X)
=E[\operatorname{Var}(X\mid g)]
+\operatorname{Var}[E(X\mid g)]
\]

Covariance and weighted sums:

\[
\operatorname{Cov}(X,Y)=\rho\,\operatorname{SD}(X)\operatorname{SD}(Y)
\]

\[
\operatorname{Var}(aX+bY)
=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)
+2ab\operatorname{Cov}(X,Y)
\]

Chebyshev’s inequality:

\[
P(|X-\mu|\ge k\sigma)\le\frac1{k^2}
\]

\[
P(|X-\mu|<k\sigma)\ge1-\frac1{k^2}
\]

Random sum \(S=X_1+\cdots+X_N\), with \(N\) independent of i.i.d. \(X_i\):

\[
E(S)=E(N)E(X)
\]

\[
\operatorname{Var}(S)
=E(N)\operatorname{Var}(X)
+\operatorname{Var}(N)[E(X)]^2
\]

---

# Set 1 — \(E(X)\), variance and standard deviation

## Question 1 — Discrete Probability Table
Difficulty: **3/5 (Intermediate)**

A discrete random variable \(X\) has:

\[
\begin{array}{c|ccccc}
x&0&1&2&3&4\\
\hline
P(X=x)&0.10&0.25&0.30&0.20&0.15
\end{array}
\]

Evaluate each statement.

A. \(E(X)\) is greater than \(2\).  
B. \(\operatorname{Var}(X)\) is greater than \(1.4\).  
C. \(\sigma\) is greater than \(1.2\).  
D. \(\sigma\) is less than \(1.25\).  
E. \(E(X^2)\) is greater than \(5.5\).

Worked solution:

\[
E(X)=0(0.10)+1(0.25)+2(0.30)+3(0.20)+4(0.15)=2.05
\]

\[
E(X^2)=0+0.25+1.20+1.80+2.40=5.65
\]

\[
\operatorname{Var}(X)=5.65-2.05^2=1.4475,\qquad
\sigma=\sqrt{1.4475}\approx1.2031
\]

Answers: **A True, B True, C True, D True, E True.**

## Question 2 — Dice Combinatorics
Difficulty: **4/5 (Advanced)**

Two fair six-sided dice are rolled, and \(X\) is the larger value shown; equal dice give that common value.

A. \(E(X)>4.4\).  
B. \(\operatorname{Var}(X)>2\).  
C. \(\sigma<1.5\).  
D. \(E(X^2)>22\).  
E. \(\sigma>1.4\).

\[
P(X=k)=\frac{2k-1}{36}
\]

\[
E(X)=\frac{1(1)+2(3)+3(5)+4(7)+5(9)+6(11)}{36}
=\frac{161}{36}\approx4.4722
\]

\[
E(X^2)=\frac{1(1)+4(3)+9(5)+16(7)+25(9)+36(11)}{36}
=\frac{791}{36}\approx21.9722
\]

\[
\operatorname{Var}(X)\approx1.9715,\qquad \sigma\approx1.4041
\]

Answers: **A True, B False, C True, D False, E True.**

## Question 3 — Startup Profit Scenario
Difficulty: **4/5 (Advanced)**

\[
\begin{array}{c|rrrr}
X&-\$5{,}000&\$0&\$10{,}000&\$25{,}000\\
\hline
P&0.20&0.30&0.35&0.15
\end{array}
\]

A. \(E(X)>\$6{,}000\).  
B. \(\sigma>\$9{,}700\).  
C. \(\operatorname{Var}(X)>\$90{,}000{,}000\).  
D. \(\sigma<\$10{,}000\).  
E. \(E(X^2)>\$135{,}000{,}000\).

\[
E(X)=-1000+3500+3750=\$6{,}250
\]

\[
E(X^2)=5{,}000{,}000+35{,}000{,}000+93{,}750{,}000
=133{,}750{,}000
\]

\[
\operatorname{Var}(X)=133{,}750{,}000-6250^2
=94{,}687{,}500
\]

\[
\sigma=\sqrt{94{,}687{,}500}\approx\$9{,}730.75
\]

Answers: **A True, B True, C True, D True, E False.**

## Question 4 — Carnival Spinner with a Processing Fee
Difficulty: **4/5 (Advanced)**

\[
\begin{array}{c|rrrr}
X&\$0&\$5&\$20&\$100\\
\hline
P&0.40&0.35&0.20&0.05
\end{array}
\]

A flat \$2 fee is charged, so \(Y=X-2\).

A. \(E(X)>\$10\).  
B. \(\operatorname{SD}(X)>\$22\).  
C. \(E(Y)>\$8.50\).  
D. \(\operatorname{Var}(Y)>470\).  
E. \(\operatorname{SD}(Y)<\$21\).

\[
E(X)=10.75,\qquad E(X^2)=588.75
\]

\[
\operatorname{Var}(X)=588.75-10.75^2=473.1875
\]

\[
\operatorname{SD}(X)\approx21.7529
\]

\[
E(Y)=8.75,\quad
\operatorname{Var}(Y)=473.1875,\quad
\operatorname{SD}(Y)\approx21.7529
\]

Answers: **A True, B False, C True, D True, E False.**

## Question 5 — Manufacturing Defect Counts
Difficulty: **3/5 (Intermediate)**

\[
\begin{array}{c|ccccc}
x&0&1&2&3&4\\
\hline
P&0.55&0.25&0.12&0.06&0.02
\end{array}
\]

A. \(E(X)>0.8\).  
B. \(\operatorname{Var}(X)>1.05\).  
C. \(\sigma>1.05\).  
D. \(E(X^2)>1.7\).  
E. \(\sigma<1.02\).

\[
E(X)=0.75,\qquad E(X^2)=1.59
\]

\[
\operatorname{Var}(X)=1.59-0.75^2=1.0275,\qquad
\sigma\approx1.0137
\]

Answers: **A False, B False, C False, D False, E True.**

---

# Part 2

## Question 1 — A Vending Machine
Difficulty: **4/5 (Advanced)**

\(X\) is uniformly distributed from \(180\) ml to \(220\) ml.

A. \(\mu=200\) ml.  
B. \(\sigma^2>130\).  
C. \(\sigma>12\) ml.  
D. Widening the range to \(160\)–\(240\) ml makes \(\sigma^2\) four times as large.  
E. \(\sigma>10\%\) of \(\mu\).

\[
\mu=\frac{180+220}{2}=200
\]

\[
\sigma^2=\frac{40^2}{12}\approx133.333,\qquad
\sigma\approx11.547
\]

Doubling the width multiplies variance by \(2^2=4\). Also, \(0.10\mu=20\).

Answers: **A True, B True, C False, D True, E False.**

## Question 2 — A Call Center
Difficulty: **4/5 (Advanced)**

Calls per hour satisfy \(X\sim\operatorname{Poisson}(6)\).

A. \(\mu=6\).  
B. \(\sigma^2=\mu\).  
C. \(\sigma>2.5\).  
D. Doubling the rate to \(12\) doubles \(\sigma\).  
E. Doubling the rate to \(12\) doubles \(\sigma^2\).

\[
\mu=\sigma^2=6,\qquad \sigma=\sqrt6\approx2.449
\]

At \(\lambda=12\), \(\sigma=\sqrt{12}\approx3.464\), only \(\sqrt2\) times the original, while variance doubles.

Answers: **A True, B True, C False, D False, E True.**

## Question 3 — Company Profit
Difficulty: **5/5 (Advanced)**

Revenue \(R\): \(\mu_R=\$50{,}000\), \(\sigma_R^2=4{,}000{,}000\).  
Cost \(C\): \(\mu_C=\$32{,}000\), \(\sigma_C^2=1{,}000{,}000\).  
\(R,C\) are independent and Profit \(=R-C\).

A. Mean Profit \(=\$18{,}000\).  
B. Profit variance equals \(\sigma_R^2-\sigma_C^2\).  
C. Profit SD \(>\$2{,}200\).  
D. Profit SD is less than \(\sigma_R+\sigma_C\).  
E. Profit SD equals \(\sigma_R-\sigma_C\).

\[
E(R-C)=50{,}000-32{,}000=18{,}000
\]

\[
\operatorname{Var}(R-C)=4{,}000{,}000+1{,}000{,}000=5{,}000{,}000
\]

\[
\operatorname{SD}(R-C)\approx\$2{,}236.07
\]

Since \(\sigma_R=2000\) and \(\sigma_C=1000\), their sum is \(3000\), while their difference is \(1000\).

Answers: **A True, B False, C True, D True, E False.**

## Question 4 — An Investment Portfolio
Difficulty: **5/5 (Advanced)**

Portfolio \(=0.6A+0.4B\), with independent stocks:

\[
\mu_A=8\%,\quad \sigma_A^2=25,\qquad
\mu_B=5\%,\quad \sigma_B^2=16
\]

A. Portfolio mean \(=6.8\%\).  
B. Portfolio variance \(=0.6\sigma_A^2+0.4\sigma_B^2\).  
C. Portfolio SD \(=3.4\%\).  
D. Portfolio SD is below \(0.6\sigma_A+0.4\sigma_B\).  
E. Portfolio variance exceeds \(\sigma_B^2\).

\[
\mu_P=0.6(8)+0.4(5)=6.8\%
\]

\[
\sigma_P^2=0.6^2(25)+0.4^2(16)=11.56
\]

\[
\sigma_P=\sqrt{11.56}=3.4\%
\]

The weighted SD average is \(0.6(5)+0.4(4)=4.6\%\).

Answers: **A True, B False, C True, D True, E False.**

## Question 5 — Standardized Exam Scores
Difficulty: **3/5 (Intermediate)**

Scores are approximately normal with \(\mu=520,\sigma=85\).

A. \(690\) is exactly \(2\sigma\) above \(\mu\).  
B. About \(68\%\) score from \(435\) to \(605\).  
C. \(350\) is more than \(2\sigma\) below \(\mu\).  
D. About \(95\%\) score from \(350\) to \(690\).  
E. \(\sigma^2=7{,}225\).

\[
\mu\pm\sigma=[435,605],\qquad
\mu\pm2\sigma=[350,690]
\]

\[
\frac{690-520}{85}=2,\qquad
\frac{520-350}{85}=2,\qquad
85^2=7225
\]

Answers: **A True, B True, C False, D True, E True.**

## Question 6 — Find the Missing Value
Difficulty: **5/5 (Advanced)**

\(X\) takes \(0,10,k\) with probabilities \(0.5,0.3,0.2\), and \(E(X)=8\).

A. \(k=25\).  
B. \(\sigma^2=91\).  
C. \(\sigma>10\).  
D. If \(\mu=6\), the resulting \(k\) is below \(25\).  
E. \(x=10\) contributes more to variance than \(x=25\).

\[
3+0.2k=8\Rightarrow k=25
\]

\[
E(X^2)=100(0.3)+625(0.2)=155
\]

\[
\sigma^2=155-8^2=91,\qquad \sigma=\sqrt{91}\approx9.539
\]

For \(\mu=6\), \(3+0.2k=6\Rightarrow k=15\).

Variance contributions:

\[
0.3(10-8)^2=1.2,\qquad
0.2(25-8)^2=57.8
\]

Answers: **A True, B True, C False, D True, E False.**

---

# Part 3

## Question 1 — A Fair Six-Sided Die
Difficulty: **2/5 (Beginner)**

A fair six-sided die is rolled once. \(X\) is the number showing on top. Each of the six outcomes is equally likely.

A. \(\mu=3.5\).  
B. \(\sigma^2\approx2.92\).  
C. \(\sigma\approx1.71\).  
D. \(x=6\) contributes more to variance than \(x=1\).  
E. Doubling all faces makes \(\sigma\approx3.42\).

\[
\mu=3.5,\quad E(X^2)=\frac{91}{6}
\]

\[
\sigma^2=\frac{35}{12}\approx2.9167,\quad \sigma\approx1.7078
\]

The \(1\) and \(6\) contributions are equal because each is \(2.5\) from the mean and has probability \(1/6\). Doubling \(X\) doubles SD.

Answers: **A True, B True, C True, D False, E True.**

## Question 2 — Heads in Three Coin Flips
Difficulty: **3/5 (Intermediate)**

\[
P(X=0,1,2,3)=\frac18,\frac38,\frac38,\frac18
\]

A. \(\mu=1.5\).  
B. \(\sigma^2=0.75\).  
C. \(\sigma\approx1.22\).  
D. \(P(X=1)<P(X=0)\).  
E. \(x=0\) contributes less to variance than \(x=1\).

\[
E(X)=1.5,\quad E(X^2)=3,\quad
\sigma^2=0.75,\quad\sigma\approx0.8660
\]

\[
\text{Contribution}(0)=\frac18(1.5)^2=0.28125
\]

\[
\text{Contribution}(1)=\frac38(0.5)^2=0.09375
\]

Answers: **A True, B True, C False, D False, E False.**

## Question 3 — A Charity Raffle
Difficulty: **3/5 (Intermediate)**

\(X=\$0,\$10,\$50\) with probabilities \(0.70,0.25,0.05\).

A. \(\mu=\$5\).  
B. \(\sigma^2=125\).  
C. \(\sigma\approx\$11.18\).  
D. \(P(0)>P(10)+P(50)\).  
E. \(\sigma>2\mu\).

\[
E(X)=5,\quad E(X^2)=150
\]

\[
\sigma^2=150-25=125,\quad \sigma\approx11.1803
\]

Also, \(0.70>0.30\) and \(11.18>10\).

Answers: **all True.**

## Question 4 — Quality Inspection
Difficulty: **3/5 (Intermediate)**

In a batch of inspected items, \(X\) is the number of defective items found, where \(X=0\) with probability \(0.60\), \(X=1\) with probability \(0.30\), and \(X=2\) with probability \(0.10\).

A. \(\mu=0.5\).  
B. \(\sigma^2=0.45\).  
C. \(\sigma\approx0.67\).  
D. \(P(X\ge1)=0.30\).  
E. \(\sigma^2=\mu\).

\[
E(X)=0.5,\quad E(X^2)=0.70
\]

\[
\sigma^2=0.45,\quad\sigma\approx0.6708
\]

\[
P(X\ge1)=0.30+0.10=0.40
\]

Answers: **A True, B True, C True, D False, E False.**

## Question 5 — Customer Star Ratings
Difficulty: **3/5 (Intermediate)**

\[
P(1,2,3,4,5)=0.05,0.10,0.20,0.35,0.30
\]

A. \(\mu=3.75\).  
B. \(\sigma^2=1.2875\).  
C. \(\sigma\approx1.13\).  
D. \(P(4)+P(5)<P(1)+P(2)+P(3)\).  
E. \(\sigma^2<1\).

\[
E(X)=3.75,\quad E(X^2)=15.35
\]

\[
\sigma^2=1.2875,\quad\sigma\approx1.1347
\]

High ratings total \(0.65\); lower ratings total \(0.35\).

Answers: **A True, B True, C True, D False, E False.**

## Question 6 — A Lottery Ticket
Difficulty: **3/5 (Intermediate)**

\(X=\$0,\$5,\$1000\) with probabilities \(0.94,0.05,0.01\).

A. \(\mu=\$10\).  
B. \(\sigma^2\approx9{,}896.19\).  
C. \(\sigma\approx\$9.95\).  
D. \(P(1000)>P(5)\).  
E. \(\sigma<\mu\).

\[
E(X)=10.25,\quad E(X^2)=10001.25
\]

\[
\sigma^2=9896.1875,\quad\sigma\approx99.4796
\]

Answers: **A False, B True, C False, D False, E False.**

---

# Part 4

## Question 1 — A Game Show Wheel
Difficulty: **2/5 (Beginner)**

\(X=\$0,\$100,\$500\), probabilities \(0.50,0.35,0.15\).

Statements:  
A. \(E(X)=110\).  
B. \(\operatorname{Var}(X)=28{,}900\).  
C. \(\operatorname{SD}(X)=170\).  
D. \(P(0)<P(100)+P(500)\).  
E. Doubling prizes makes SD \(340\).

\[
E(X)=110,\quad E(X^2)=41000
\]

\[
\operatorname{Var}(X)=41000-110^2=28900,\quad \operatorname{SD}(X)=170
\]

The probabilities in D are both \(0.50\).

Answers: **A True, B True, C True, D False, E True.**

## Question 2 — Coffee Shop Arrivals
Difficulty: **3/5 (Intermediate)**

In a given minute, \(X\) customers arrive at a small coffee shop, where \(P(X=0)=0.40\), \(P(X=1)=0.35\), \(P(X=2)=0.20\), and \(P(X=3)=0.05\).

A. \(E(X)=0.9\).  
B. \(\operatorname{Var}(X)=0.79\).  
C. \(\operatorname{SD}(X)\approx1.25\).  
D. \(P(X\le1)=0.55\).  
E. \(\operatorname{Var}(X)>E(X)\).

\[
E(X)=0.9,\quad E(X^2)=1.6
\]

\[
\operatorname{Var}(X)=0.79,\quad\operatorname{SD}(X)\approx0.8888
\]

\[
P(X\le1)=0.75
\]

Answers: **A True, B True, C False, D False, E False.**

## Question 3 — A Vending Machine
Difficulty: **2/5 (Beginner)**

Prices \(\$1,\$2,\$3\) have probabilities \(0.20,0.50,0.30\).

A. \(E(X)=\$2.10\).  
B. \(\operatorname{Var}(X)=0.49\).  
C. \(\operatorname{SD}(X)=\$0.70\).  
D. \(P(X=2)>P(X=1)\).  
E. Increasing every price by \$1 leaves variance \(0.49\).

\[
E(X)=2.10,\quad E(X^2)=4.90
\]

\[
\operatorname{Var}(X)=0.49,\quad\operatorname{SD}(X)=0.70
\]

Answers: **all True.**

## Question 4 — A Free-Throw Contest
Difficulty: **3/5 (Intermediate)**

A player takes 3 free throws. \(X\) is the number made, where \(P(X=0)=0.05\), \(P(X=1)=0.25\), \(P(X=2)=0.45\), and \(P(X=3)=0.25\).

A. \(E(X)=1.9\).  
B. \(\operatorname{Var}(X)=0.69\).  
C. \(\operatorname{SD}(X)\approx0.83\).  
D. \(P(X\ge2)=0.50\).  
E. \(\operatorname{Var}(X)>1\).

\[
E(X)=1.9,\quad E(X^2)=4.30
\]

\[
\operatorname{Var}(X)=0.69,\quad\operatorname{SD}(X)\approx0.8307
\]

\[
P(X\ge2)=0.45+0.25=0.70
\]

Answers: **A True, B True, C True, D False, E False.**

## Question 5 — A Delivery App Rating
Difficulty: **3/5 (Intermediate)**

\[
P(1,2,3,4,5)=0.10,0.10,0.20,0.30,0.30
\]

A. \(E(X)=3.6\).  
B. \(\operatorname{Var}(X)=1.64\).  
C. \(\operatorname{SD}(X)\approx1.28\).  
D. \(P(X\le2)=0.30\).  
E. \(\operatorname{Var}(X)>E(X)\).

\[
E(X)=3.6,\quad E(X^2)=14.6
\]

\[
\operatorname{Var}(X)=1.64,\quad\operatorname{SD}(X)\approx1.2806
\]

\[
P(X\le2)=0.20
\]

Answers: **A True, B True, C True, D False, E False.**

## Question 6 — An Insurance Policy
Difficulty: **4/5 (Advanced)**

Claims \(\$0,\$200,\$5000\), probabilities \(0.90,0.08,0.02\).

A. \(E(X)=\$100\).  
B. \(\operatorname{Var}(X)\approx489{,}744\).  
C. \(\operatorname{SD}(X)\approx\$69.98\).  
D. \(P(5000)>P(200)\).  
E. \(\operatorname{SD}(X)<E(X)\).

\[
E(X)=116,\quad E(X^2)=503200
\]

\[
\operatorname{Var}(X)=489744,\quad\operatorname{SD}(X)\approx699.82
\]

Answers: **A False, B True, C False, D False, E False.**

---

# Part 5 — Basic set

## Question 1 — A Charity Raffle
Difficulty: **2/5 (Beginner)**

\(X=\$0,\$50,\$250\), probabilities \(0.60,0.30,0.10\).

A. \(E(X)=\$40\).  
B. \(\operatorname{Var}(X)=5400\).  
C. \(\operatorname{SD}(X)\approx\$73.48\).  
D. \(P(0)<P(50)+P(250)\).  
E. Doubling prizes makes SD \(\$146.97\).

\[
E(X)=40,\quad E(X^2)=7000,\quad
\operatorname{Var}(X)=5400,\quad \operatorname{SD}(X)\approx73.4847
\]

Since \(0.60>0.40\), D is false. Doubling multiplies SD by \(2\).

Answers: **A True, B True, C True, D False, E True.**

## Question 2 — An Ice Cream Shop
Difficulty: **3/5 (Intermediate)**

At an ice cream shop, \(X\) is the number of scoops the next customer orders, where \(P(X=1)=0.20\), \(P(X=2)=0.50\), \(P(X=3)=0.20\), and \(P(X=4)=0.10\).

A. \(E(X)=2.2\).  
B. \(\operatorname{Var}(X)=0.80\).  
C. \(\operatorname{SD}(X)\approx0.87\).  
D. \(P(X\le2)=0.60\).  
E. \(\operatorname{Var}(X)>E(X)\).

\[
E(X)=2.20,\quad E(X^2)=5.60
\]

\[
\operatorname{Var}(X)=0.76,\quad\operatorname{SD}(X)\approx0.8718
\]

\[
P(X\le2)=0.70
\]

Answers: **A True, B False, C True, D False, E False.**

## Question 3 — A Parking Garage
Difficulty: **2/5 (Beginner)**

On the top level of a parking garage, \(X\) is the number of empty spots at a given time, where \(P(X=0)=0.10\), \(P(X=1)=0.30\), \(P(X=2)=0.40\), and \(P(X=3)=0.20\).

A. \(E(X)=1.7\).  
B. \(\operatorname{Var}(X)=0.81\).  
C. \(\operatorname{SD}(X)=0.9\).  
D. \(P(X\ge2)=0.60\).  
E. For \(Y=10X\), \(\operatorname{SD}(Y)=9\).

\[
E(X)=1.70,\quad E(X^2)=3.70
\]

\[
\operatorname{Var}(X)=0.81,\quad\operatorname{SD}(X)=0.90
\]

Answers: **all True.**

## Question 4 — A Trivia Quiz
Difficulty: **3/5 (Intermediate)**

\[
P(0,1,2,3,4)=0.05,0.20,0.35,0.30,0.10
\]

A. \(E(X)=2.2\).  
B. \(\operatorname{Var}(X)=1.06\).  
C. \(\operatorname{SD}(X)\approx1.03\).  
D. \(P(X\ge3)=0.50\).  
E. \(\operatorname{Var}(X)>2\).

\[
E(X)=2.20,\quad E(X^2)=5.90
\]

\[
\operatorname{Var}(X)=1.06,\quad\operatorname{SD}(X)\approx1.0296
\]

\[
P(X\ge3)=0.40
\]

Answers: **A True, B True, C True, D False, E False.**

## Question 5 — A Podcast Episode Rating
Difficulty: **3/5 (Intermediate)**

\[
P(1,2,3,4,5)=0.05,0.15,0.25,0.35,0.20
\]

A. \(E(X)=3.5\).  
B. \(\operatorname{Var}(X)=1.25\).  
C. \(\operatorname{SD}(X)\approx1.12\).  
D. \(P(X\le2)=0.30\).  
E. \(\operatorname{Var}(X)>E(X)\).

\[
E(X)=3.50,\quad E(X^2)=13.50
\]

\[
\operatorname{Var}(X)=1.25,\quad\operatorname{SD}(X)\approx1.1180
\]

\[
P(X\le2)=0.20
\]

Answers: **A True, B True, C True, D False, E False.**

## Question 6 — An Extended Warranty
Difficulty: **4/5 (Advanced)**

Claims \(\$0,\$150,\$4000\), probabilities \(0.85,0.12,0.03\).

A. \(E(X)=\$150\).  
B. \(\operatorname{Var}(X)\approx463{,}656\).  
C. \(\operatorname{SD}(X)\approx\$68.09\).  
D. \(P(4000)>P(150)\).  
E. \(\operatorname{SD}(X)<E(X)\).

\[
E(X)=138,\quad E(X^2)=482700
\]

\[
\operatorname{Var}(X)=463656,\quad\operatorname{SD}(X)\approx680.92
\]

Answers: **A False, B True, C False, D False, E False.**

---

# Harder set, also titled Part 5

## Question 1 — A Two-Machine Production Line
Difficulty: **4/5 (Advanced)**

Machine A is selected with probability \(0.65\), with mean \(3\) and variance \(4\). Machine B is selected with probability \(0.35\), with mean \(7\) and variance \(9\).

A. \(E(X)=4.4\).  
B. \(\operatorname{Var}(X)=9.39\).  
C. \(\operatorname{SD}(X)>3\).  
D. Total variance exceeds \(0.65\operatorname{Var}(X_A)+0.35\operatorname{Var}(X_B)\).  
E. Within-machine variability exceeds between-machine variability.

\[
E(X)=0.65(3)+0.35(7)=4.4
\]

\[
E[\operatorname{Var}(X\mid M)]=0.65(4)+0.35(9)=5.75
\]

\[
\operatorname{Var}[E(X\mid M)]
=0.65(3-4.4)^2+0.35(7-4.4)^2=3.64
\]

\[
\operatorname{Var}(X)=5.75+3.64=9.39,\quad
\operatorname{SD}(X)\approx3.0643
\]

Answers: **all True.**

## Question 2 — A Hedged Investment Pair
Difficulty: **5/5 (Advanced)**

\[
E(X)=10,\ \operatorname{Var}(X)=16,\quad
E(Y)=6,\ \operatorname{Var}(Y)=9,\quad \rho=-0.5
\]

Portfolio \(=0.5X+0.5Y\).

A. Portfolio expectation equals \(8\%\).  
B. \(\operatorname{Cov}(X,Y)=-6\).  
C. Portfolio variance equals \(3.25\).  
D. Independence would produce a smaller variance than the actual negatively correlated value.  
E. Portfolio SD exceeds \(2\) percentage points.

\[
\operatorname{Cov}(X,Y)=(-0.5)(4)(3)=-6
\]

\[
E(P)=0.5(10)+0.5(6)=8
\]

\[
\operatorname{Var}(P)=0.25(16)+0.25(9)+2(0.5)(0.5)(-6)=3.25
\]

\[
\operatorname{SD}(P)\approx1.8028
\]

With independence, variance would be \(4+2.25=6.25\), which is larger.

Answers: **A True, B True, C True, D False, E False.**

## Question 3 — Chebyshev’s Inequality
Difficulty: **5/5 (Advanced)**

A fill weight has \(\mu=50,\sigma=5\), with unknown distribution shape.

A. \(P(40<X<60)\ge0.75\).  
B. \(P(45<X<55)\ge0.75\).  
C. \(P(X<30\text{ or }X>70)\le0.0625\).  
D. Since the bound for \(P(|X-50|\ge12.5)\) is \(0.16\), the true probability equals \(0.16\).  
E. \(k=3\) gives a tighter upper-tail bound than \(k=2\).

For \(k=2\):

\[
P(|X-50|<10)\ge1-\frac14=0.75
\]

For \(k=1\), the guaranteed lower bound is \(0\), not \(0.75\).

For \(k=4\):

\[
P(|X-50|\ge20)\le\frac1{16}=0.0625
\]

For \(k=2.5\), \(1/k^2=0.16\) is only an upper bound. Also \(1/9<1/4\).

Answers: **A True, B False, C True, D False, E True.**

## Question 4 — The Vending Machine Puzzle
Difficulty: **5/5 (Advanced)**

\[
P(X=0)=p,\quad P(X=5)=0.4,\quad P(X=10)=0.6-p
\]

Given \(\operatorname{Var}(X)=10\) and \(P(X=0)<P(X=10)\).

A. \(p=0.4\).  
B. A second root \(p\approx0.5236\) is rejected only because it makes \(P(0)>P(10)\).  
C. \(E(X)=8\).  
D. \(\operatorname{SD}(X)<3\).  
E. Reversing the likelihood condition selects \(p\approx0.5236\), but variance would no longer equal \(10\).

\[
E(X)=8-10p,\qquad E(X^2)=70-100p
\]

\[
\operatorname{Var}(X)=6+60p-100p^2
\]

Setting it to \(10\):

\[
25p^2-15p+1=0
\]

\[
p=\frac{15\pm\sqrt{125}}{50}
\approx0.5236\text{ or }0.0764
\]

The likelihood condition selects \(p\approx0.0764\). Then \(E(X)\approx7.236\), and

\[
\operatorname{SD}(X)=\sqrt{10}\approx3.1623
\]

Both roots satisfy the variance equation.

Answers: **A False, B True, C False, D False, E False.**

## Question 5 — A Regional Manager’s Rounds
Difficulty: **5/5 (Advanced)**

\[
P(N=2,3,5)=0.5,0.3,0.2
\]

Each branch contributes independent complaints with \(E(X)=4\), \(\operatorname{Var}(X)=6\). \(S\) is total complaints.

A. \(E(S)=11.6\).  
B. \(\operatorname{Var}(S)=38.04\).  
C. \(\operatorname{SD}(S)>6\).  
D. Fixing \(N\) at \(2.9\) gives variance \(17.4\), below the actual variance.  
E. The \(N\)-variability contribution is smaller than the within-branch contribution.

\[
E(N)=2.9,\quad E(N^2)=9.7,\quad \operatorname{Var}(N)=1.29
\]

\[
E(S)=2.9(4)=11.6
\]

\[
\operatorname{Var}(S)=2.9(6)+1.29(4^2)
=17.4+20.64=38.04
\]

\[
\operatorname{SD}(S)\approx6.1677
\]

Since \(20.64>17.4\), E is false.

Answers: **A True, B True, C True, D True, E False.**

## Question 6 — Assembly Line Processing Time
Difficulty: **4/5 (Advanced)**

Independent stages satisfy:

\[
E(X_1)=2,\operatorname{Var}(X_1)=0.5
\]

\[
E(X_2)=3,\operatorname{Var}(X_2)=0.8
\]

\[
E(X_3)=1.5,\operatorname{Var}(X_3)=0.3
\]

\[
T=2X_1+1.5X_2-X_3+4
\]

A. \(E(T)=11\) minutes.  
B. \(\operatorname{Var}(T)=4.1\).  
C. \(\operatorname{SD}(T)>2\).  
D. Changing the \(X_3\) coefficient from \(-1\) to \(+1\) changes the mean but not variance.  
E. SD exceeds \(20\%\) of the mean.

\[
E(T)=2(2)+1.5(3)-1.5+4=11
\]

\[
\operatorname{Var}(T)=2^2(0.5)+1.5^2(0.8)+(-1)^2(0.3)=4.1
\]

\[
\operatorname{SD}(T)=\sqrt{4.1}\approx2.0248
\]

After the sign change, the mean becomes \(14\), while variance remains \(4.1\). Since \(0.20(11)=2.2>2.0248\), E is false.

Answers: **A True, B True, C True, D True, E False.**

---

# Part 6

## Question 1 — A Charity Raffle (Unknown Probabilities)
Difficulty: **4/5 (Advanced)**

\[
P(X=0)=p,\quad P(X=50)=q,\quad P(X=250)=0.10,\quad E(X)=40
\]

A. \(p=0.55\).  
B. \(\operatorname{Var}(X)=5400\).  
C. \(\operatorname{SD}(X)\approx\$73.48\).  
D. The \$0 outcome is less likely than the \$50 outcome.  
E. Subtracting \$10 from every prize leaves variance \(5400\).

\[
p+q=0.90
\]

\[
50q+250(0.10)=40\Rightarrow q=0.30,\quad p=0.60
\]

\[
E(X^2)=7000,\quad \operatorname{Var}(X)=7000-40^2=5400
\]

\[
\operatorname{SD}(X)\approx73.4847
\]

Answers: **A False, B True, C True, D False, E True.**

## Question 2 — An Ice Cream Shop (Two Independent Customers)
Difficulty: **4/5 (Advanced)**

Single-customer distribution:

\[
P(X=1,2,3,4)=0.20,0.50,0.20,0.10
\]

For independent customers, \(Y=X_1+X_2\).

A. \(E(Y)=4.4\).  
B. \(\operatorname{Var}(Y)=1.52\).  
C. \(\operatorname{SD}(Y)=2\operatorname{SD}(X)\approx1.74\).  
D. Without independence, variance would still equal \(1.52\).  
E. \(\operatorname{SD}(Y)\approx1.23\).

\[
E(X)=2.20,\quad E(X^2)=5.60,\quad\operatorname{Var}(X)=0.76
\]

\[
E(Y)=4.40,\quad \operatorname{Var}(Y)=2(0.76)=1.52
\]

\[
\operatorname{SD}(Y)=\sqrt{1.52}\approx1.2329
\]

Answers: **A True, B True, C False, D False, E True.**

## Question 3 — A Parking Garage (A Nonlinear Bonus)
Difficulty: **4/5 (Advanced)**

\[
P(X=0,1,2,3)=0.10,0.30,0.40,0.20,\qquad Y=X^2
\]

A. \(E(Y)=2.89\).  
B. \(E(Y)=3.70\).  
C. \(\operatorname{Var}(X)=E(Y)-[E(X)]^2\).  
D. \(\operatorname{SD}(X)=0.9\).  
E. If \(Z=2X\), then \(\operatorname{Var}(Z)=1.62\).

\[
E(X)=1.70,\quad E(X^2)=E(Y)=3.70
\]

\[
\operatorname{Var}(X)=3.70-1.70^2=0.81,\quad
\operatorname{SD}(X)=0.90
\]

\[
\operatorname{Var}(2X)=4(0.81)=3.24
\]

Answers: **A False, B True, C True, D True, E False.**

## Question 4 — A Trivia Quiz (Comparing Two Formats)
Difficulty: **5/5 (Advanced)**

Format A:

\[
P_A(0,1,2,3,4)=0.05,0.20,0.35,0.30,0.10
\]

Format B:

\[
P_B(0,1,2,3,4)=0.15,0.20,0.15,0.30,0.20
\]

A. Both formats have the same \(E(X)\).  
B. Format B has larger variance.  
C. In A, \(x=4\) contributes more to variance than \(x=0\).  
D. In B, \(x=4\) contributes more than \(x=0\).  
E. \(\operatorname{SD}(B)>2\operatorname{SD}(A)\).

Format A:

\[
E_A(X)=2.20,\quad E_A(X^2)=5.90
\]

\[
\operatorname{Var}_A(X)=1.06,\quad \operatorname{SD}_A\approx1.0296
\]

Format B:

\[
E_B(X)=2.20,\quad E_B(X^2)=6.70
\]

\[
\operatorname{Var}_B(X)=1.86,\quad \operatorname{SD}_B\approx1.3638
\]

Contributions:

\[
A:\quad 0.10(4-2.2)^2=0.324,\quad
0.05(0-2.2)^2=0.242
\]

\[
B:\quad 0.20(4-2.2)^2=0.648,\quad
0.15(0-2.2)^2=0.726
\]

Answers: **A True, B True, C True, D False, E False.**

## Question 5 — A Streaming Royalty
Difficulty: **4/5 (Advanced)**

Royalty \(X\) is \(5,10,20\) cents with probabilities \(0.50,0.30,0.20\). The artist’s net is \(Y=X-c\), with \(E(Y)=0\).

A. \(c=9.5\) cents.  
B. \(\operatorname{Var}(X)=32.25\).  
C. After subtracting \(c\), \(\operatorname{Var}(Y)=0\).  
D. \(\operatorname{SD}(X)\approx5.68\).  
E. Charging \(c=14.25\) gives negative expected net earnings.

\[
E(X)=5(0.50)+10(0.30)+20(0.20)=9.5
\]

\[
E(X^2)=122.5
\]

\[
\operatorname{Var}(X)=122.5-9.5^2=32.25
\]

\[
\operatorname{SD}(X)\approx5.6789
\]

Break-even requires \(c=E(X)=9.5\). A constant shift leaves variance \(32.25\). At \(c=14.25\),

\[
E(X-c)=9.5-14.25=-4.75
\]

Answers: **A True, B True, C False, D True, E True.**

## Question 6 — An Extended Warranty (Two Independent Policies)
Difficulty: **5/5 (Advanced)**

A single claim is \(\$0,\$150,\$4000\) with probabilities \(0.85,0.12,0.03\). For independent policies,

\[
Y=X_1+X_2
\]

A. \(E(Y)=\$276\).  
B. \(\operatorname{Var}(Y)=927{,}312\).  
C. The probability both policies claim \$4,000 is \(0.0009\).  
D. \(\operatorname{SD}(Y)=2\operatorname{SD}(X)\).  
E. \(\operatorname{SD}(Y)\approx\$962.97\).

For one policy:

\[
E(X)=138,\quad E(X^2)=482700
\]

\[
\operatorname{Var}(X)=482700-138^2=463656
\]

\[
\operatorname{SD}(X)\approx680.92
\]

For two independent policies:

\[
E(Y)=2(138)=276
\]

\[
\operatorname{Var}(Y)=2(463656)=927312
\]

\[
\operatorname{SD}(Y)=\sqrt{927312}\approx962.97
\]

\[
P(X_1=4000,X_2=4000)=0.03^2=0.0009
\]

Answers: **A True, B True, C True, D False, E True.**

Key teaching emphasis from the PDF: compute \(E(X^2)\) before variance; constant shifts never change spread; scaling coefficients are squared in variance; independent sums add variances, not standard deviations; and bounds such as Chebyshev’s inequality are not exact probabilities.