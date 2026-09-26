# MATH 6 MATH 7.MOCK.LINE ak=[True, True, True, False, True]
## context
A parabola is given by

$$
g(x)=2x^{2}-12x+10
$$

Lines through its vertex form the family

$$
f_{m}(x)=m(x-3)-8
$$

Decide whether each statement is true or false.
## statement A
The product of the two roots of $g(x)=0$ is strictly larger than $4$.
## explanation A (len=297)
**A.** → True

Solve $g(x)=0$:

$$
2x^{2}-12x+10=0\qquad\Rightarrow\qquad x^{2}-6x+5=0
$$

$$
(x-1)(x-5)=0
$$

The roots are $x=1$ and $x=5$. Their product is

$$
1\cdot 5=5>4
$$

(Alternatively, by Vieta on $x^{2}-6x+5=0$ the product of roots is the constant term $5$.)

So the statement is True.
## statement B
Completing the square shows that the minimum value of $g$ is strictly less than $-7$.
## explanation B (len=287)
**B.** → True

Complete the square:

$$
g(x)=2\bigl(x^{2}-6x\bigr)+10=2\bigl((x-3)^{2}-9\bigr)+10
$$

$$
=2(x-3)^{2}-18+10=2(x-3)^{2}-8
$$

The square term is always $\ge 0$, so the minimum value is $-8$, attained at $x=3$. Compare with the claim:

$$
-8<-7
$$

So the statement is True.
## statement C
When $m=4$, the second intersection (other than the vertex) lies strictly between $x=4$ and $x=6$.
## explanation C (len=398)
**C.** → True

Form the difference:

$$
g(x)-f_{m}(x)=2x^{2}-12x+10-\bigl(m(x-3)-8\bigr)
$$

$$
=2(x-3)^{2}-8-m(x-3)+8=2(x-3)^{2}-m(x-3)
$$

$$
=(x-3)\bigl(2(x-3)-m\bigr)
$$

The intersection $x$-coordinates are therefore $x=3$ (the vertex) and

$$
x=3+\dfrac{m}{2}
$$

For $m=4$,

$$
x=3+2=5
$$

and $4<5<6$, so the second intersection lies strictly between $4$ and $6$.

So the statement is True.
## statement D
There is more than one real slope $m$ for which $y=f_{m}$ meets $y=g$ at exactly one point.
## explanation D (len=413)
**D.** → False

From the factorisation in C, the intersection abscissae are $x=3$ and $x=3+m/2$. These coincide precisely when

$$
\dfrac{m}{2}=0\qquad\Rightarrow\qquad m=0
$$

For every other real slope $m\ne 0$ the two roots are distinct, so the graphs meet at two points. Therefore there is exactly one real slope giving a single common point — namely $m=0$ — and not more than one.

So the statement is False.
## statement E
When $m=-8$, the distance between the two intersection $x$-coordinates exceeds $3.5$.
## explanation E (len=310)
**E.** → True

From C, when $m=-8$ the two intersection $x$-coordinates are the vertex $x=3$ and

$$
x=3+\dfrac{m}{2}=3+\dfrac{-8}{2}=3-4=-1
$$

The distance between them is the absolute difference

$$
\bigl|3-(-1)\bigr|=\bigl|3+1\bigr|=4
$$

Compare with the threshold:

$$
4>3.5
$$

So the statement is True.

---

# MATH 0 MATH 1.MOCK.INDEP ak=[False, False, True, True, False]
## context
Six interns — Ava, Ben, Cara, Drew, Eve, and Finn — are considered for a weekend on-call roster.

Ava is rostered if and only if Ben is rostered.

If Ben is rostered, then Cara is rostered.

Exactly one of Cara or Drew is rostered (never both, never neither).

If Drew is rostered, then Eve is not rostered.

At least one of Eve or Finn is rostered.

Finn is rostered only if Ava is not rostered.

At least three of the six interns are rostered.
## statement A
Ben must appear on every roster that obeys all seven rules.
## explanation A (len=1141)
**A.** → False

The claim says Ben is on every valid roster. To test that, try to build a valid roster with Ben out and see whether the other rules still allow it.

Assume $B=0$. Rule (1) is the biconditional $A\Leftrightarrow B$, so Ava is out as well:

$$
B=0\qquad\Rightarrow\qquad A=0
$$

Rule (2) is $B\Rightarrow C$. With Ben already out the hypothesis is false, so the implication is idle: Cara is free so far.

Rule (3) forces exactly one of Cara or Drew. Two cases remain.

**Case Cara in, Drew out** ($C=1$, $D=0$). Rule (4) is idle because Drew is out. Rule (5) needs $E\lor F$. Rule (6) is $F\Rightarrow\neg A$; Ava is already out, so Finn may enter. One legal choice is $E=1$, $F=1$:

$$
\{C,E,F\}
$$

Size $3$, so rule (7) holds. Every rule is satisfied, and Ben is absent.

**Case Drew in, Cara out** ($C=0$, $D=1$). Rule (4) forces $E=0$. Rule (5) then forces $F=1$. With Ava out, rule (6) allows Finn. The roster is at most $\{D,F\}$ (size $2$), which breaks rule (7).

So Ben-out is possible in the first case. The roster $\{C,E,F\}$ is a concrete counter-example to “Ben on every valid roster.”

So the statement is False.
## statement B
It is possible to build a valid roster that includes Drew.
## explanation B (len=745)
**B.** → False

The claim says some valid roster includes Drew. Force $D=1$ and chase the consequences.

Rule (3) is the exclusive-or on Cara and Drew, so Cara is out:

$$
D=1\qquad\Rightarrow\qquad C=0
$$

Rule (4) is $D\Rightarrow\neg E$, so Eve is out:

$$
D=1\qquad\Rightarrow\qquad E=0
$$

Rule (5) needs $E\lor F$. With Eve gone, Finn must enter:

$$
F=1
$$

Rule (6) is $F\Rightarrow\neg A$, so Ava is out, and then rule (1) forces Ben out as well:

$$
F=1\qquad\Rightarrow\qquad A=0\qquad\Rightarrow\qquad B=0
$$

The only people still on the roster are Drew and Finn:

$$
\{D,F\}
$$

Size $2$, which is strictly less than $3$, so rule (7) fails. Every branch with Drew in dies. No valid roster contains Drew.

So the statement is False.
## statement C
If Ava is rostered, then Finn cannot be rostered.
## explanation C (len=674)
**C.** → True

The stem says “Finn is rostered only if Ava is not rostered.” In symbols that is

$$
F\Rightarrow\neg A
$$

The contrapose of $P\Rightarrow Q$ is $\neg Q\Rightarrow\neg P$. Here $P=F$ and $Q=\neg A$, so

$$
\neg(\neg A)\Rightarrow\neg F
$$

$$
A\Rightarrow\neg F
$$

That is exactly the claim: if Ava is rostered, then Finn cannot be rostered.

Check against the two valid rosters from the overview. The Ben-based roster $\{A,B,C,E\}$ has $A=1$ and $F=0$. The other valid roster $\{C,E,F\}$ has $A=0$, so the implication is idle there. No valid row ever has $A=F=1$ together (that row is rejected in the overview table by rule (6)).

So the statement is True.
## statement D
There is exactly one roster of size three that obeys all seven rules.
## explanation D (len=650)
**D.** → True

Rule (7) asks for size at least three; the claim asks whether exactly one valid roster has size exactly three.

From the overview solve there are only two valid rosters:

$$
\{A,B,C,E\}\qquad\text{(size }4\text{)}
$$

$$
\{C,E,F\}\qquad\text{(size }3\text{)}
$$

The Ben-based roster already has four people, so it is not a size-three example. The only size-three survivor is $\{C,E,F\}$.

Any other attempt at size three either breaks the exclusive-or, breaks $F\Rightarrow\neg A$, or falls below size three once Drew is forced in (as in letter B). Therefore there is exactly one valid roster of size three.

So the statement is True.
## statement E
It is possible for all six interns to be rostered at once.
## explanation E (len=502)
**E.** → False

A roster of all six interns would require

$$
A=B=C=D=E=F=1
$$

Rule (3) says exactly one of Cara or Drew is rostered. Putting both $C=1$ and $D=1$ immediately breaks that exclusive-or, before any other rule is checked.

Even if one tried to keep five people by dropping only Drew, rule (6) still forbids $A=F=1$ together. The overview table’s largest valid size is $4$ (the roster $\{A,B,C,E\}$); the other valid roster has size $3$. Size six never appears.

So the statement is False.

---

# MATH 12 MATH 13.36 ak=[False, True, True, False, True]
## context
Factory A inspects batches of 17 units; each unit is defect-free independently with probability 0.43.

Factory B inspects batches of 29 units; each unit is defect-free independently with probability 0.61.

Factory A's batch passes if at least 87% of its units are defect-free.

Factory B's batch passes if at least 79% of its units are defect-free.
## statement A
Factory A's batch passes with at least 14 defect-free units.
## explanation A (len=480)
**A.** → False

A percentage threshold must be turned into a whole-number count. $87\%$ of $n = 17$ is

$$
87\% \times 17 = 14.79.
$$

“At least 87%” means the success count $X$ must be at least $14.79$. Because $X$ is an integer, that is $X \ge \lceil 14.79 \rceil = 15$.

The statement uses “at least 14”, but the correct integer cutoff is $15$ (ceiling, not truncation of 14.79 to 14 when a fractional unit would still fall short of the percentage).

So the statement is False.
## statement B
The probability that Factory A's batch passes is greater than the probability of exactly 15.
## explanation B (len=249)
**B.** → True

The named event covers every admissible count at least 15, not only the single count 15. Those extra counts have positive probability when $0<p<1$, so the event probability is strictly larger than $P(X=15)$.

So the statement is True.
## statement C
Factory B is more than 150 times as likely as Factory A to have its batch pass.
## explanation C (len=6819)
**C.** → True

Each side has its own $(n,k)$ pair. Side A needs $X_A \ge 15$ out of $n_A = 17$; side B needs $X_B \ge 23$ out of $n_B = 29$. (If the scenario gave a percentage, those $k$ values are the integer ceilings/floors — not the percentage number itself.)

$$
P(X_A \ge 15) = \sum_{x = 15}^{17} \binom{17}{x} p_A^{x} (1-p_A)^{17-x}
$$

$$
P(X_B \ge 23) = \sum_{x = 23}^{29} \binom{29}{x} p_B^{x} (1-p_B)^{29-x}
$$

A single term $P(X = k)$ would only count “exactly $k$” and would miss the rest of the tail, so it understates the chance of meeting the cutoff. We need the full upper tail for each side, then the ratio of those two probabilities — not the ratio of the two success probabilities $p$.

Side A ($n = 17$, $p = 0.43$):

$$
P(X = 15) = \binom{17}{15} (0.43)^{15} (0.57)^{2}
$$

$$
\binom{17}{15} = \dfrac{17!}{15!(17-15)!}
$$

$$
\dfrac{17!}{15!(2)!} = \dfrac{17 \cdot 16}{1 \cdot 2}
$$

$$
17 \cdot 16 = 272
$$

$$
\dfrac{272}{2} = 136
$$

$$
\binom{17}{15} = 136
$$

$$
(0.43)^{15} = 3.17707 \times 10^{-6}
$$

$$
(0.57)^{2}
$$

$$
0.57 \times 0.57 = 0.3249
$$

$$
(0.57)^{2} = 0.3249
$$

$$
136 \times 3.17707 \times 10^{-6} = 0.00043208157
$$

$$
0.00043208157 \times 0.3249 = 0.000140383302
$$

$$
P(X = 15) = 0.000140383302
$$

$$
P(X = 16) = \binom{17}{16} (0.43)^{16} (0.57)^{1}
$$

$$
\binom{17}{16} = \dfrac{17!}{16!(17-16)!}
$$

$$
\binom{17}{16} = 17
$$

$$
(0.43)^{16} = 1.36614 \times 10^{-6}
$$

$$
(0.57)^{1} = 0.57
$$

$$
17 \times 1.36614 \times 10^{-6} = 2.322438 \times 10^{-5}
$$

$$
2.322438 \times 10^{-5} \times 0.57 = 1.32379 \times 10^{-5}
$$

$$
P(X = 16) = 1.32379 \times 10^{-5}
$$

$$
P(X = 17) = \binom{17}{17} (0.43)^{17} (0.57)^{0}
$$

$$
\binom{17}{17} = 1
$$

$$
(0.43)^{17} = 5.874403 \times 10^{-7}
$$

$$
(0.57)^{0} = 1
$$

$$
1 \times 5.874403 \times 10^{-7} = 5.874403 \times 10^{-7}
$$

$$
5.874403 \times 10^{-7} \times 1 = 5.874403 \times 10^{-7}
$$

$$
P(X = 17) = 5.874403 \times 10^{-7}
$$

Adding the mutually exclusive pieces:

$$
0.0001 + 1.3238 \times 10^{-5} + 5.8744 \times 10^{-7}
$$

$$
P(X \ge 15)
$$

$$
0.0002
$$

$$
0.02\%
$$

Side B ($n = 29$, $p = 0.61$):

$$
P(X = 23) = \binom{29}{23} (0.61)^{23} (0.39)^{6}
$$

$$
\binom{29}{23} = \dfrac{29!}{23!(29-23)!}
$$

$$
\dfrac{29!}{23!(6)!} = \dfrac{29 \cdot 28 \cdot 27 \cdot 26 \cdot 25 \cdot 24}{1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \cdot 6}
$$

$$
29 \cdot 28 = 812
$$

$$
812 \cdot 27 = 21924
$$

$$
21924 \cdot 26 = 570024
$$

$$
570024 \cdot 25 = 14250600
$$

$$
14250600 \cdot 24 = 342014400
$$

$$
\dfrac{342014400}{720} = 475020
$$

$$
\binom{29}{23} = 475020
$$

$$
(0.61)^{23} = 1.155011 \times 10^{-5}
$$

$$
(0.39)^{6}
$$

$$
0.39 \times 0.39 = 0.1521
$$

$$
0.1521 \times 0.39 = 0.059319
$$

$$
0.059319 \times 0.39 = 0.02313441
$$

$$
0.02313441 \times 0.39 = 0.0090224199
$$

$$
0.0090224199 \times 0.39 = 0.003518743761
$$

$$
(0.39)^{6} = 0.003518743761
$$

$$
475020 \times 1.155011 \times 10^{-5} = 5.486534324775
$$

$$
5.486534324775 \times 0.003518743761 = 0.019305708425
$$

$$
P(X = 23) = 0.019305708425
$$

$$
P(X = 24) = \binom{29}{24} (0.61)^{24} (0.39)^{5}
$$

$$
\binom{29}{24} = \dfrac{29!}{24!(29-24)!}
$$

$$
\dfrac{29!}{24!(5)!} = \dfrac{29 \cdot 28 \cdot 27 \cdot 26 \cdot 25}{1 \cdot 2 \cdot 3 \cdot 4 \cdot 5}
$$

$$
29 \cdot 28 = 812
$$

$$
812 \cdot 27 = 21924
$$

$$
21924 \cdot 26 = 570024
$$

$$
570024 \cdot 25 = 14250600
$$

$$
\dfrac{14250600}{120} = 118755
$$

$$
\binom{29}{24} = 118755
$$

$$
(0.61)^{24} = 7.045568 \times 10^{-6}
$$

$$
(0.39)^{5}
$$

$$
0.39 \times 0.39 = 0.1521
$$

$$
0.1521 \times 0.39 = 0.059319
$$

$$
0.059319 \times 0.39 = 0.02313441
$$

$$
0.02313441 \times 0.39 = 0.0090224199
$$

$$
(0.39)^{5} = 0.0090224199
$$

$$
118755 \times 7.045568 \times 10^{-6} = 0.836696484528
$$

$$
0.836696484528 \times 0.0090224199 = 0.007549027012
$$

$$
P(X = 24) = 0.007549027012
$$

$$
P(X = 25) = \binom{29}{25} (0.61)^{25} (0.39)^{4}
$$

$$
\binom{29}{25} = \dfrac{29!}{25!(29-25)!}
$$

$$
\dfrac{29!}{25!(4)!} = \dfrac{29 \cdot 28 \cdot 27 \cdot 26}{1 \cdot 2 \cdot 3 \cdot 4}
$$

$$
29 \cdot 28 = 812
$$

$$
812 \cdot 27 = 21924
$$

$$
21924 \cdot 26 = 570024
$$

$$
\dfrac{570024}{24} = 23751
$$

$$
\binom{29}{25} = 23751
$$

$$
(0.61)^{25} = 4.297797 \times 10^{-6}
$$

$$
(0.39)^{4}
$$

$$
0.39 \times 0.39 = 0.1521
$$

$$
0.1521 \times 0.39 = 0.059319
$$

$$
0.059319 \times 0.39 = 0.02313441
$$

$$
(0.39)^{4} = 0.02313441
$$

$$
23751 \times 4.297797 \times 10^{-6} = 0.102076971112
$$

$$
0.102076971112 \times 0.02313441 = 0.002361490501
$$

$$
P(X = 25) = 0.002361490501
$$

$$
P(X = 26) = \binom{29}{26} (0.61)^{26} (0.39)^{3}
$$

$$
\binom{29}{26} = \dfrac{29!}{26!(29-26)!}
$$

$$
\dfrac{29!}{26!(3)!} = \dfrac{29 \cdot 28 \cdot 27}{1 \cdot 2 \cdot 3}
$$

$$
29 \cdot 28 = 812
$$

$$
812 \cdot 27 = 21924
$$

$$
\dfrac{21924}{6} = 3654
$$

$$
\binom{29}{26} = 3654
$$

$$
(0.61)^{26} = 2.621656 \times 10^{-6}
$$

$$
(0.39)^{3}
$$

$$
0.39 \times 0.39 = 0.1521
$$

$$
0.1521 \times 0.39 = 0.059319
$$

$$
(0.39)^{3} = 0.059319
$$

$$
3654 \times 2.621656 \times 10^{-6} = 0.009579531135
$$

$$
0.009579531135 \times 0.059319 = 0.000568248207
$$

$$
P(X = 26) = 0.000568248207
$$

$$
P(X = 27) = \binom{29}{27} (0.61)^{27} (0.39)^{2}
$$

$$
\binom{29}{27} = \dfrac{29!}{27!(29-27)!}
$$

$$
\dfrac{29!}{27!(2)!} = \dfrac{29 \cdot 28}{1 \cdot 2}
$$

$$
29 \cdot 28 = 812
$$

$$
\dfrac{812}{2} = 406
$$

$$
\binom{29}{27} = 406
$$

$$
(0.61)^{27} = 1.59921 \times 10^{-6}
$$

$$
(0.39)^{2}
$$

$$
0.39 \times 0.39 = 0.1521
$$

$$
(0.39)^{2} = 0.1521
$$

$$
406 \times 1.59921 \times 10^{-6} = 0.000649279332
$$

$$
0.000649279332 \times 0.1521 = 9.875539 \times 10^{-5}
$$

$$
P(X = 27) = 9.875539 \times 10^{-5}
$$

$$
P(X = 28) = \binom{29}{28} (0.61)^{28} (0.39)^{1}
$$

$$
\binom{29}{28} = \dfrac{29!}{28!(29-28)!}
$$

$$
\binom{29}{28} = 29
$$

$$
(0.61)^{28} = 9.755182 \times 10^{-7}
$$

$$
(0.39)^{1} = 0.39
$$

$$
29 \times 9.755182 \times 10^{-7} = 2.829003 \times 10^{-5}
$$

$$
2.829003 \times 10^{-5} \times 0.39 = 1.103311 \times 10^{-5}
$$

$$
P(X = 28) = 1.103311 \times 10^{-5}
$$

$$
P(X = 29) = \binom{29}{29} (0.61)^{29} (0.39)^{0}
$$

$$
\binom{29}{29} = 1
$$

$$
(0.61)^{29} = 5.950661 \times 10^{-7}
$$

$$
(0.39)^{0} = 1
$$

$$
1 \times 5.950661 \times 10^{-7} = 5.950661 \times 10^{-7}
$$

$$
5.950661 \times 10^{-7} \times 1 = 5.950661 \times 10^{-7}
$$

$$
P(X = 29) = 5.950661 \times 10^{-7}
$$

Adding the mutually exclusive pieces:

$$
0.0193 + 0.0075 + 0.0024
$$

$$
+ 0.0006 + 9.8755 \times 10^{-5} + 1.1033 \times 10^{-5}
$$

$$
+ 5.9507 \times 10^{-7}
$$

$$
P(X \ge 23)
$$

$$
0.0299
$$

$$
2.99\%
$$

The ratio in the claim’s order (B relative to A):

$$
\frac{P_B(X \ge 23)}{P_A(X \ge 15)}
$$

$$
\frac{2.99\%}{0.02\%}
$$

$$
193.86
$$

Since $193.86 > 150$.

So the statement is True.
## statement D
Factory A's expected number of defect-free units is greater than 8.
## explanation D (len=359)
**D.** → False

The mean of a binomial count is the number of trials times the success probability, because $X$ is the sum of $n$ independent Bernoulli trials each with mean $p$:

$$
E[X] = np
$$

$$
E[A] = 17 \cdot 0.43
$$

$$
17 \times 0.43 = 7.31
$$

The claim compares this mean with $8$. $E[A] = 7.31$ is not greater than $8$.

So the statement is False.
## statement E
Factory B's standard deviation in number of defect-free units is higher than Factory A's.
## explanation E (len=497)
**E.** → True

The standard deviation is the positive square root of the variance. For $X \sim \mathrm{Bin}(n,p)$,

$$
\mathrm{SD}(X) = \sqrt{np(1-p)}
$$

Side A ($n_A = 17$, $p_A = 0.43$):

$$
\mathrm{Var}(A) = 4.1667
$$

$$
\mathrm{SD}(A) = \sqrt{4.1667}
$$

$$
2.041
$$

Side B ($n_B = 29$, $p_B = 0.61$):

$$
\mathrm{Var}(B) = 6.8991
$$

$$
\mathrm{SD}(B) = \sqrt{6.8991}
$$

$$
2.627
$$

Comparing $\mathrm{SD}(A) \approx 2.041$ with $\mathrm{SD}(B) \approx 2.627$.

So the statement is True.

---

# ECON 5 CASE 5.5.28 ak=[False, True, False, True, False]
## context
Analyze how distribution-channel weaknesses may appear through where-customer analysis. Evaluate the following economic assertions:
## statement A
Influencers must always be the same person who completes payment for the product.
## explanation A (len=293)
Influencers shape preferences or specifications without necessarily paying. Parents, technical advisers, and users can steer a choice while someone else settles the invoice. Forcing influencer and payer to be identical invents a rule customer analysis does not use.

So the statement is False.
## statement B
Relative market share adds competitive context that absolute share figures do not provide on their own.
## explanation B (len=309)
Absolute share reports only the firm's own percentage of market sales. Relative share places that figure against the leader, which reveals whether the firm trails, matches, or outpaces the strongest rival. That competitive framing is information absolute share cannot deliver alone.

So the statement is True.
## statement C
A business-to-business market is one where the firm advertises on social media to the general public.
## explanation C (len=424)
A business-to-business market sells to other firms: components to assemblers, adhesives to factories, fleets to logistics operators. Advertising on social media to the general public describes a consumer-facing channel, not the B2B buyer type. Mixing the communication medium with the customer classification invents a false definition. B2B is about who buys, not about which ad platform is used.

So the statement is False.
## statement D
Market potential can exceed market volume when potential customers in the market have not yet been converted to buyers.
## explanation D (len=270)
Market volume counts sales already made by firms active today. Market potential adds room from people or firms who could buy but have not yet. When that unused demand exists, potential sits above volume. The statement names that gap correctly.

So the statement is True.
## statement E
Secondary research requires the firm to conduct personal interviews with every customer in the market.
## explanation E (len=251)
Secondary research reuses existing sources such as published statistics or trade reports. Personal interviews with every customer would be primary fieldwork, and secondary work does not require that exhaustive interviewing.

So the statement is False.

---

# ECON 0 CASE 2.1.01 ak=[False, True, True, False, False]
## context
Analyze scarcity, economising, and who participates in economic decision-making. Evaluate the following economic assertions:
## statement A
Scarcity disappears once a household earns a steady salary because income removes all limits.
## explanation A (len=315)
A steady salary changes how a household budgets, but it does not erase scarcity. Food, rent, transport, and leisure still compete for the same euros after payday. Income rearranges limits; it does not abolish them. The claim that scarcity disappears once wages arrive is therefore wrong.

So the statement is False.
## statement B
Economising means making careful use of limited resources rather than treating them as if they were unlimited.
## explanation B (len=386)
Economising is careful ranking of limited means against competing uses. Treating time, money, or materials as if they were unlimited is the opposite of that discipline. Households cut discretionary spending when cash is tight; firms delay purchases when stock is low. The statement names that careful use correctly, so it fits the chapter idea of economising.

So the statement is True.
## statement C
Nobody can fully opt out of economic decisions, because even inaction is a choice about scarce time or money.
## explanation C (len=663)
Refusing to choose is still a choice about scarce means. Sitting out a purchase leaves money for later and frees time that could have been spent shopping or working. Even "doing nothing" allocates hours that cannot be reused. Households decide whether to save or spend; workers decide whether to take overtime; students decide whether to study or rest. In each case limited time and money force an allocation, including the allocation called inaction. Nobody steps outside that logic by opting out of markets or businesses. The statement is right that economic decisions follow people into everyday life, not only into registered firms.

So the statement is True.
## statement D
Only registered businesses face scarcity; households with regular income never need to economise on their spending.
## explanation D (len=375)
Households with regular income still face rent, food, energy, and transport bills that compete for one budget. Scarcity is not reserved for registered businesses. A salaried family that skips a holiday to cover heating is economising in the same sense as a shop managing stock. Restricting scarcity to firms alone misreads who faces limited means.

So the statement is False.
## statement E
Exchange requires that at least one party is an entrepreneur; households can never participate directly in exchange.
## explanation E (len=295)
Households buy bread, pay for repairs, and sell used goods without becoming entrepreneurs. Exchange is any agreed swap of goods or services, including ordinary consumer purchases. Requiring an entrepreneur on at least one side invents a rule the chapter does not use.

So the statement is False.

---

# ECON 2 CASE 3.6.46 ak=[False, False, True, True, False]
## context
Consider customers may switch suppliers if quality falls. Evaluate the following economic assertions:
## statement A
Customers cannot influence firms because switching suppliers is impossible in all markets.
## explanation A (len=212)
In most markets buyers can walk to another shop or brand when service fails. Claiming switching is impossible everywhere invents a universal lock-in that ordinary retail does not show.

So the statement is False.
## statement B
Falling quality gives customers power to switch suppliers and reduce firm revenue.
## explanation B (len=515)
Quality slips do not automatically hand every buyer decisive leverage in every setting. Habit, distance, and thin local alternatives can keep people buying even when the loaf is worse for a while, so revenue need not fall on cue. Treating a quality dip as a guaranteed gift of switching power overstates how quickly influence shows up. Where alternatives are weak, buyers may stay despite poorer quality. The blanket causal wording therefore fails as an always-true rule for this letter.

So the statement is False.
## statement C
Customers may switch if quality falls, exercising stakeholder influence on revenue.
## explanation C (len=499)
When quality falls and alternatives exist, customers can leave and take their spending with them. That exit is stakeholder influence working through revenue. A bakery that lets standards slip watches regulars try the shop across the street. Firms feel that pressure as lost sales, which is why customer power appears in stakeholder analysis. The statement correctly links quality decline, switching, and revenue effects without claiming miracles in every market structure.

So the statement is True.
## statement D
Customer boycotts after poor service show stakeholder power over firm revenue.
## explanation D (len=206)
Organised boycotts after poor service cut sales until practice changes at the counter. That episode shows customer stakeholder power over firm revenue in a public, organised form.

So the statement is True.
## statement E
Buyers at a bakery have no power because they purchase small quantities each visit.
## explanation E (len=195)
Small daily purchases still add up across many regulars, and buyers can simply stop coming. Quantity per visit does not erase customer power at a neighbourhood bakery.

So the statement is False.

---
