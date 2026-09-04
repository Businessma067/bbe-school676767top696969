# Chapter 9 core bank — batch 1 answer-key corrections

While rewriting `tactical_explanations` for the tasks listed in
`/tmp/ch9-bad-batch1.json`, several statements could not be justified as keyed:
the live wording and the keyed truth disagreed, and algebra decided against the
key. Statement text, context, figures and tables were left untouched; only the
affected `answer_key` booleans were flipped.

| Task | Letter | Was | Now | Reason |
| --- | --- | --- | --- | --- |
| 9.09 | D | True | False | First differences of $2,1,2,7$ are $-1,1,5$, not constant. |
| 9.10 | B | True | False | Descending form $x^4-3x^2+5$ has leading coefficient $1$, not $5$. |
| 9.10 | E | True | False | There is no $x^3$ term. |
| 9.12 | E | True | False | $(x-2)(x^3+1)=x^4-2x^3+x-2$ is degree $4$, not cubic. |
| 9.13 | C | False | True | Third differences of the table are $6,6$. |
| 9.13 | E | False | True | The $x=0$ column lists $1$. |
| 9.17 | D | True | False | $p(0)=0$ while $q(0)=-1$; a right shift is a different curve. |
| 9.18 | D | False | True | Negative cubic lead: $T(t)\to-\infty$ as $t\to+\infty$. |
| 9.23 | E | True | False | $p(0)=2\neq 0$, so $x=0$ is not a root. |
| 9.25 | C | False | True | Three distinct real roots give three real linear factors. |
| 9.25 | D | False | True | $x^3-3x+c$ changes real-root count with $c$. |
| 9.28 | D | True | False | First differences $1,15,65,\ldots$ are not constant, so no line fits. |
| 9.30 | B | False | True | $p(1)=1-2-8=-9$. |
| 9.30 | C | False | True | A root at $0$ forces constant term $0$. |
| 9.31 | D | True | False | Addition keeps the larger degree $n$, never $n+m$. |
| 9.31 | E | True | False | Unequal highest powers cannot cancel. |
| 9.32 | B | False | True | $p-q$ has leading coefficient $2a\neq 0$. |
| 9.32 | C | False | True | Product of nonzero leads is $-a^2\neq 0$, degree $2n$. |
| 9.32 | E | False | True | $p$ and $-q$ share leading coefficient $a$. |
| 9.35 | E | True | False | $(p+c)'=p'$, independent of $c$. |
| 9.36 | A | True | False | Stationary *points* $(x,p_a(x))$ have $y$-values $a\pm 2$. |
| 9.36 | C | True | False | Three distinct real roots only for $-2<a<2$. |
| 9.36 | E | True | False | Leading coefficient is $1$ for every $a$. |
| 9.37 | B | False | True | $900/90=10$ m/s $=36$ km/h. |
| 9.37 | D | False | True | Differentiating a cubic speed gives a quadratic $a(t)$. |
| 9.37 | E | False | True | Interval speeds $6,8,10,12,14,10$ peak once. |
| 9.38 | C | False | True | Local max at $x=1$ with value $2$. |
| 9.38 | D | False | True | Leading coefficient $-1$ sends $p\to-\infty$ on the right. |
| 9.40 | D | True | False | Leading coefficient is $1$, independent of $k$. |
| 9.42 | E | True | False | $p'\equiv 0$ means $p$ is constant. |
| 9.43 | B | True | False | $x^3$ has one stationary point, not $n-1=2$. |
| 9.43 | D | True | False | A horizontal shift preserves the stationary-point count. |
| 9.48 | C | True | False | $x=-3$ is simple: $p'(-3)=16\neq 0$. |
| 9.49 | D | False | True | $p-\ell=x^4-6x^2+5$ still has top power $x^4$. |
| 9.51 | B | False | True | $575/50=11.5$ m/s. |
| 9.51 | E | False | True | $v$ has a nonzero $t^3$ term. |
