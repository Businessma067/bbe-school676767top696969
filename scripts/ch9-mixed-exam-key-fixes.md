# Chapter 9 mixed exam — answer-key corrections

While rewriting every `tactical_explanations` entry in `src/data/math-ch9-mixed-exam.json`
from scratch, seventeen statements turned out to be unjustifiable as keyed: the statement
text and the keyed truth value disagreed, so no honest explanation could be written for
them. Statement text, context, figures and tables were left untouched; only the affected
`answer_key` booleans were flipped. Each correction is listed with the reason.

| Task | Letter | Was | Now | Reason |
| --- | --- | --- | --- | --- |
| 9.E04 | C | True | False | Composition degrees multiply, and $mn = nm$, so $f(g(x))$ and $g(f(x))$ share the highest power $x^{mn}$ even when $m \neq n$. Only the leading coefficients differ. |
| 9.E04 | D | True | False | Nesting is not commutative for cubics: $f(u) = u^3$, $g(x) = x^3 + 1$ give $(x^3+1)^3$ against $x^9 + 1$. |
| 9.E05 | D | True | False | The derivative equation $3x^2 - k = 0$ is quoted correctly, but its roots $\pm\sqrt{k/3}$ move with $k$, so the stationary abscissas are not parameter-independent. |
| 9.E05 | E | True | False | $g_k(1) = 0$ forces $k = 1$, and $g_1(x) = x(x-1)(x+1)$ does have three distinct real zeros, so such a $k$ exists. |
| 9.E07 | D | False | True | $q(p(2)) = q(3) = 4$ and $p(q(0)) = p(1) = 2$: both quoted values are correct. |
| 9.E09 | B | True | False | $p - q = x^3 - 3x^2 - 4x + 8$ is a cubic with three real roots (near $-1.78$, $1.29$, $3.49$), so the number of meetings is three, not zero. |
| 9.E09 | D | True | False | $q(x) = x^2 - x - 2$ satisfies $q(0) = -2 \neq 0$ and $q(-x) \neq -q(x)$; it is neither odd nor even. |
| 9.E10 | D | True | False | $x^3 - x + 2$ has one real root (about $-1.52$): the shift of $2$ exceeds the local-minimum depth $2/(3\sqrt3) \approx 0.385$. |
| 9.E10 | E | True | False | $v'(t) = 2t - 4$ is positive for $t > 2$, so the acceleration there is positive, not negative. |
| 9.E11 | D | True | False | $p(x) = (x-2)^2(x+1)$ reaches the axis at two abscissas only, and one of them is a tangency, so the figure cannot show three distinct crossings. |
| 9.E12 | B | True | False | Third differences are $36, 60, 84$ — not constant; constancy arrives at the fourth level ($24, 24$), so no cubic fits all six samples. |
| 9.E12 | D | True | False | The constant term is $p(0) = 2$; the sample $p(1) = 0$ records a root instead. |
| 9.E17 | C | True | False | The leading coefficient of $q(p(x)) = 2x^2 + 2x + 1$ is $2$, not $3$ (this letter also contradicted letter B, which is keyed True for the value $2$). |
| 9.E24 | C | True | False | A vertical shift preserves the degree $n$, and a nonzero polynomial of degree $n$ has at most $n$ distinct roots. |
| 9.E24 | D | True | False | Adding a constant preserves evenness: $q(-x) = p(-x) + c = p(x) + c = q(x)$. |
| 9.E28 | E | True | False | $p(x) = x(x-3)^2(x+1)$ has the three distinct zeros $0$, $3$, $-1$; four is the multiplicity total. |
| 9.E29 | D | True | False | Oddness dies under every nonzero shift, since $q(0) = c \neq 0$ — the same fact that letter E of task 9.E24 keys as True. |

After the corrections the bank splits evenly, 75 True and 75 False across the 150
statements.
