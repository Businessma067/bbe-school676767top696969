from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Leftovers a clerk records after expanding",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Whenever $p+q=7$ and $pq=10$, expanding $(p+q)^2-2pq$ is reported to leave $p^2+q^2=29$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $p+q=7$.""",
                True,
                
            ),
            (
                r"After collecting only the $xy$ term in $(2x-y+3)^2$, a marker records its coefficient as $+4$. The remaining terms are not needed to judge the claim.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first rewriting the left-hand side by the named elementary identity, then equating the simplified display with the printed target expression, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: On every real pair $(m,n)$, rewriting $(m+n)^3-(m-n)^3$ as $2n(3m^2+n^2)$ is accepted — with the intermediate display still carrying $(m+n)^3-(m-n)^3$.""",
                True,
                
            ),
            (
                r"Given $a+b+c=0$ with $a=4$ and $b=-1$, a note sets $c=3$ and concludes $a^3+b^3+c^3=3abc$ without expanding.",
                False,
                
            ),
            (
                r"Subtracting $(r-s)^2$ from $(r+s)^2$ is claimed to leave $4rs$ on every real pair $(r,s)$.",
                True,
                
            ),
        ],
        overview="Five independent leftovers: an elementary square-sum, a mixed-term coefficient, a cube difference, a vanishing-sum trap, and a polarisation remainder.",
    ),
    task(
        title="Near-miss remainders after a square is subtracted",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"A student expands $(3t-1)^2$, subtracts $9t^2+1$, and claims the difference is identically zero.",
                False,
                
            ),
            (
                r"With the elementary data $u+v=5$ and $uv=6$, expanding $(u+v)^2-2uv$ is said to leave $u^2+v^2=13$.",
                True,
                
            ),
            (
                r"Factoring $w^2-16$ as $(w-4)^2$ is presented as valid on the whole real line.",
                False,
                
            ),
            (
                r"""A candidate first checks a single convenient substitution, finds that both sides agree numerically at that point, and then elevates the agreement to a claimed identity: Completing the square rewrites $x^2-8x+20$ as $(x-4)^2+4$ for every real $x$. The margin note closes without expanding the general case.""",
                True,
                
            ),
            (
                r"An examiner lists $(2h+5)^2=4h^2+10h+25$ as a standard expansion.",
                False,
                
            ),
        ],
        overview="Five separate near-misses: a dropped linear cross term, an elementary square-sum, a squared difference, a completed-square leftover, and a halved middle term.",
    ),
    task(
        title="Doubled products a marker forgets to double",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Hunting the mixed product in $(4k-3)^2$, a marker records the coefficient of $k$ as $-24$.",
                True,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: Because $(d-e)^2\ge 0$ for all reals, the comparison $d^2+e^2\ge 2de$ is accepted on every pair. On that basis, the claim is then entered in the answer key without a second expansion.""",
                True,
                
            ),
            (
                r"A student expands $(f+g)^2$, subtracts $f^2+g^2$, and claims the remainder is identically zero.",
                False,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: Once $s=y+z$ is written, the product $(x-s)(x+s)$ is rewritten as $x^2-(y+z)^2$ identically. Any remaining letters are declared free once that one check has passed.""",
                True,
                
            ),
            (
                r"Matching $n^2+6n+8$ with $(n+3)^2$ is accepted as an identity.",
                False,
                
            ),
        ],
        overview="Five coefficient and comparison checks: a doubled middle, a square-nonnegativity rewrite, a dropped cross term, a grouped difference of squares, and a near-miss perfect square.",
    ),
    task(
        title="Perfect squares that miss the constant by one",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Reading $9y^2-12y+4$ as $(3y-2)^2$ is valid for every real $y$.",
                True,
                
            ),
            (
                r"Treating $x^2+9$ as $(x+3)^2$ is recorded as an identity, the middle term being declared unnecessary.",
                False,
                
            ),
            (
                r"With $p+q=6$ and $pq=8$, a booklet reports $p^2+q^2=28$.",
                False,
                
            ),
            (
                r"Splitting $z^2-25$ as $(z-5)(z+5)$ holds for every real $z$.",
                True,
                
            ),
            (
                r"""The board's model solution records, as if it were an identity, the following holds on the stated domain: A booklet claims $(2x+3)^2-(4x^2+9)$ is identically zero, with the added remark that domain caveats may be left implicit once written once.""",
                False,
                
            ),
        ],
        overview="Five recognition checks: a genuine perfect square, a missing middle, an undoubled elementary product, a difference of squares, and a subtracted-square remainder.",
    ),
    task(
        title="Grouping a linear sum inside a square difference",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Grouping $y+z$ first, expanding $x^2-(y+z)^2$ is reported to leave $x^2-y^2-z^2-2yz$ on every real triple.",
                True,
                
            ),
            (
                r"Whenever $c+d=11$ and $cd=24$, the value of $(c-d)^2$ is reported as $25$.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first expanding the binomial and collecting like terms, then comparing the collected coefficient with the figure written beside the claim, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: After expanding $(2a+b)^2$ and subtracting $4a^2+b^2$, the remainder is identically $4ab$ — with the intermediate display still carrying $4a^2+b^2$.""",
                True,
                
            ),
            (
                r"A note concludes that $(u-v)^3=u^3-v^3$ for every real pair, the middle terms being cancelled by habit.",
                False,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: Matching $x^2+2x+1$ with $(x+1)^2+1$ is recorded as an identity, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                False,
                
            ),
        ],
        overview="Five rewrite checks: a grouped difference of squares, an elementary gap square, a binomial remainder, a cube with dropped mixed terms, and an off-by-one perfect square.",
    ),
    task(
        title="Signs that flip only the cross term",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Comparing $(3q+2)^2$ with $(3q-2)^2$, a marker claims the two expansions are identical. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $(3q+2)^2$.""",
                False,
                
            ),
            (
                r"Factoring $16-t^2$ as $(4-t)(4+t)$ is accepted for every real $t$.",
                True,
                
            ),
            (
                r"Given $r+s=0$, a student sets $r=5$, $s=5$ and concludes $r^2+s^2=0$.",
                False,
                
            ),
            (
                r"Completing the square, $x^2+6x+5$ is rewritten as $(x+3)^2$ with no leftover constant.",
                False,
                
            ),
            (
                r"Collecting the $xy$ term in $(x+2y)^2$, the recorded coefficient $+4$ is accepted.",
                True,
                
            ),
        ],
        overview="Five sign and factoring checks: two opposite binomials, a difference of squares, a vanishing-sum trap, a completed-square leftover, and a doubled middle.",
    ),
    task(
        title="A doubled middle that refuses to be halved",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Collecting the $xy$ term in $(x+3y)^2$, the recorded coefficient $+6$ is accepted. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $xy$.""",
                True,
                
            ),
            (
                r"With $a-b=3$ and $ab=10$, expanding $(a-b)^2+4ab$ is said to leave $(a+b)^2=49$.",
                True,
                
            ),
            (
                r"On the real line, $4x^2+12x+9$ is identified with $(2x+3)^2$.",
                True,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: An examiner lists $(2h+5k)^2=4h^2+10hk+25k^2$ as a standard expansion. Any remaining letters are declared free once that one check has passed.""",
                False,
                
            ),
            (
                r"Matching $n^2+10n+16$ with $(n+5)^2$ is accepted on a checklist.",
                False,
                
            ),
        ],
        overview="Five middle-term checks: a doubled product, a polarisation square, a genuine perfect square, a halved cross term, and a constant that misses $5^2$.",
    ),
    task(
        title="Three-term squares with a dropped factor two",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Expanding $(x+y+z)^2$ and subtracting $x^2+y^2+z^2$, a clerk reports the remainder $xy+yz+zx$.",
                False,
                
            ),
            (
                r"""Under the standing hypothesis that every letter is real (and nonzero wherever a denominator appears), the following assertion is recorded: Provided $h+k=9$ and $hk=14$, the square sum $h^2+k^2$ is reported as $53$. On that basis, the notebook treats the rewritten form as an identity on the whole stated domain.""",
                True,
                
            ),
            (
                r"A student expands $(a+b)^3$, subtracts $a^3+b^3$, and claims the difference is identically zero.",
                False,
                
            ),
            (
                r"Difference of squares writes $9m^2-16n^2=(3m-4n)(3m+4n)$ for every real pair.",
                True,
                
            ),
            (
                r"Inserting $x=2$ into $(x+4)^2-x^2-16$ is said to produce $0$.",
                False,
                
            ),
        ],
        overview="Five independent claims: a dropped factor two on mixed products, an elementary square-sum, a cube remainder, a scaled difference of squares, and a numerical cross-term check.",
    ),
    task(
        title="Cubes whose odd-powered terms survive",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Working from the pair $(\alpha,\beta)$, rewriting $(\alpha+\beta)^3-(\alpha-\beta)^3$ as $6\alpha^2\beta+2\beta^3$ is accepted.",
                True,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: Whenever $p+q=4$ and $pq=3$, the sum of cubes $p^3+q^3$ is reported as $28$. On that basis, a second marker initials the line after comparing only the leading terms.""",
                True,
                
            ),
            (
                r"After collecting only the $xy$ term in $(3x-y)^2$, a marker records its coefficient as $-3$.",
                False,
                
            ),
            (
                r"A script shows $x^4-16=(x^2-4)^2$, confusing a difference of squares with a square of a difference.",
                False,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: Completing the square rewrites $x^2-6x+10$ as $(x-3)^2+1$ for every real $x$, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                True,
                
            ),
        ],
        overview="Five mixed claims: a cube difference, a Newton cube-sum, a halved cross term, a biquadratic near-miss, and a completed-square leftover.",
    ),
    task(
        title="Elementary cubes evaluated from two symmetric values",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Given $t+w=5$ and $tw=4$, a clerk reports $t^3+w^3=125$.",
                False,
                
            ),
            (
                r"From the data $c+d=3$ and $cd=2$, the fourth-power sum $c^4+d^4$ is reported as $17$.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first rewriting the left-hand side by the named elementary identity, then equating the simplified display with the printed target expression, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: Factoring $x^3+8$ as $(x+2)(x^2+2x+4)$ is accepted — with the intermediate display still carrying $(x+2)(x^2+2x+4)$.""",
                False,
                
            ),
            (
                r"Expanding $(x^2+x+1)(x^2-x+1)$ is claimed to recover $x^4+x^2+1$ after the odd powers cancel.",
                True,
                
            ),
            (
                r"The coefficient of $bc$ in $(a-b-c)^2$ is recorded as $-2$.",
                False,
                
            ),
        ],
        overview="Five evaluations: a dropped Newton correction, a fourth-power sum, a sum-of-cubes sign error, a mirror-quadratic product, and a mixed-sign square.",
    ),
    task(
        title="A hidden square inside a biquadratic difference",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Factoring over the reals, a script writes $x^4-16=(x-2)(x+2)(x^2+4)$ and checks the constant term $(-2)(2)(4)=-16$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $x^4-16=(x-2)(x+2)(x^2+4)$.""",
                True,
                
            ),
            (
                r"Whenever $\lambda+\mu=7$ and $\lambda\mu=10$, completing the evaluation of $(\lambda-\mu)^2$ yields $9$.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first rewriting the left-hand side by the named elementary identity, then equating the simplified display with the printed target expression, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: Grouping four terms, $ac+ad+bc+bd$ is rewritten as $(a+b)(c+d)$ identically — with the intermediate display still carrying $(a+b)(c+d)$.""",
                True,
                
            ),
            (
                r"The coefficient of $xyz$ in $(x+y+z)^3$ is recorded as $3$.",
                False,
                
            ),
            (
                r"One textbook prints $x^4+4=(x^2+2)^2$, stopping after the incomplete square.",
                False,
                
            ),
        ],
        overview="Five factoring and coefficient claims: a biquadratic split, an elementary gap, a four-term grouping, a cubed-trinomial count, and an incomplete square.",
    ),
    task(
        title="Reciprocal squares built from a linear sum",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Given $x+\dfrac{1}{x}=3$ with $x\neq 0$, a note reports $x^2+\dfrac{1}{x^2}=7$.",
                True,
                
            ),
            (
                r"Given $y+\dfrac{1}{y}=3$ with $y\neq 0$, a booklet reports $y^3+\dfrac{1}{y^3}=27$.",
                False,
                
            ),
            (
                r"After grouping $b+c$, a clerk treats $x^2-(b+c)^2$ as identical to $x^2-b^2-c^2$.",
                False,
                
            ),
            (
                r"""Relying on the observation that a particular test pair does not immediately refute the line, the marker records the universal claim: On every real $y\neq\pm 1$, factoring $y^4-1$ as $(y-1)(y+1)(y^2+1)$ is accepted. The claim is filed as settled for every admissible value of the letters.""",
                True,
                
            ),
            (
                r"Distributing $(2x-3y)^2$ is said to produce $4x^2-6xy+9y^2$.",
                False,
                
            ),
        ],
        overview="Five independent evaluations: a reciprocal square, a reciprocal cube with a dropped correction, a mixed-sign coefficient, a biquadratic factorisation, and a halved cross term.",
    ),
    task(
        title="Four terms that group into a difference of squares",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Grouping $x^2+2xy+y^2-z^2$ as $(x+y)^2-z^2$ is rewritten further as $(x+y-z)(x+y+z)$.",
                True,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: With $p+q+r=0$ and $p=2$, $q=3$, a note sets $r=-5$ and concludes $p^3+q^3+r^3=3pqr$. On that basis, a second marker initials the line after comparing only the leading terms.""",
                True,
                
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+y)^4$, a marker records the coefficient $6$.",
                True,
                
            ),
            (
                r"""The working is arranged so that an intermediate numerical check looks supportive; from that support the following identity is asserted on the whole domain: Completing the square for $2x^2-8x+10$ is recorded as $2(x-2)^2$ with no leftover. No second independent substitution is attempted.""",
                False,
                
            ),
            (
                r"Hunting $xy$ in $(x-2y+4)^2$, a marker records the coefficient as $-2$.",
                False,
                
            ),
        ],
        overview="Five grouping and coefficient claims: a difference of squares, a vanishing-sum cube check, a fourth-power middle, a leading-two leftover, and a mixed-term coefficient.",
    ),
    task(
        title="Half the sum of three squared gaps",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"A candidate writes $a^2+b^2+c^2-ab-bc-ca=\dfrac{1}{2}\bigl((a-b)^2+(b-c)^2+(c-a)^2\bigr)$ and checks it at $(a,b,c)=(3,1,0)$, both sides equal to $7$.",
                True,
                
            ),
            (
                r"Whenever $m+n=8$ and $mn=15$, expanding $(m+n)^2-4mn$ leaves $(m-n)^2=4$.",
                True,
                
            ),
            (
                r"Factoring $x^3-1$ as $(x-1)(x^2-x+1)$ is accepted.",
                False,
                
            ),
            (
                r"The coefficient of $x^2 y$ in $(x+y)^3$ is recorded as $1$.",
                False,
                
            ),
            (
                r"""According to the examiner's standardisation sheet, the following holds on the stated domain: Evaluating $(1^2+2^2)(2^2+3^2)$ by quoting only $(2-6)^2=16$, a clerk declares the product equal to $16$, and further instructs candidates to treat any matching numerical check as decisive.""",
                False,
                
            ),
        ],
        overview="Five identity checks: a half-sum of squared gaps, an elementary difference square, a cubes-factor sign, a binomial coefficient, and a truncated Brahmagupta product.",
    ),
    task(
        title="A cyclic product of three linear binomials",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Expanding $(x+y)(y+z)(z+x)$ and subtracting $xy(x+y)+yz(y+z)+zx(z+x)$, a note claims the remainder is $2xyz$.",
                True,
                
            ),
            (
                r"Given $a+b=6$ and $ab=5$, the value of $a^3+b^3$ is reported as $126$.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first rewriting the left-hand side by the named elementary identity, then equating the simplified display with the printed target expression, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: Difference of cubes factors $8-t^3$ as $(2-t)(4+2t+t^2)$ identically — with the intermediate display still carrying $(2-t)(4+2t+t^2)$.""",
                True,
                
            ),
            (
                r"Given $s=x+y+z=4$ and $p=xy+yz+zx=1$, a clerk reports $x^2+y^2+z^2=15$.",
                False,
                
            ),
            (
                r"""A standardisation remark distributed with the script states that the following holds on the stated domain: A student expands $(2x-y+3)^2$, subtracts $4x^2+y^2+9$, and claims the difference is identically zero, while explicitly permitting the omission of a full symbolic expansion.""",
                False,
                
            ),
        ],
        overview="Five mixed claims: a cyclic-product remainder, a Newton cube-sum, a difference of cubes, a three-letter square-sum, and a trinomial-square leftover.",
    ),
    task(
        title="Mixed signs inside a three-letter square",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: After grouping $a-(b+c)$, the coefficient of $bc$ in $(a-b-c)^2$ is recorded as $+2$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $a-(b+c)$.""",
                True,
                
            ),
            (
                r"Whenever $f+g=10$ and $fg=21$, a note reports $f^2+g^2=79$.",
                False,
                
            ),
            (
                r"On every real $x$, completing the square gives $x^2-6x+10=(x-3)^2+1$.",
                True,
                
            ),
            (
                r"Someone equates $(x^2-y^2)^2$ with $x^4-y^4$.",
                False,
                
            ),
            (
                r"After expanding $(4p-q)^2$ and subtracting $16p^2+q^2$, a clerk reports remainder $0$.",
                False,
                
            ),
        ],
        overview="Five expansion checks: a mixed-sign coefficient, an undoubled elementary product, a completed square, a biquadratic confusion, and a binomial remainder.",
    ),
    task(
        title="Newton sums built from a pair of elementary data",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Given $p+q=4$ and $pq=1$, a computation of $p^4+q^4$ is reported as $194$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $p+q=4$.""",
                True,
                
            ),
            (
                r"From $r+s=5$ and $rs=3$, a clerk reports $r^2+s^2=22$.",
                False,
                
            ),
            (
                r"Expanding $(2x-y+1)^2$ and reading only the $x$ coefficient, a marker records $+4$.",
                True,
                
            ),
            (
                r"""The working is arranged so that an intermediate numerical check looks supportive; from that support the following identity is asserted on the whole domain: Factoring by grouping, $x^3+x^2-x-1$ is rewritten as $(x+1)^2(x-1)$ identically. No second independent substitution is attempted.""",
                True,
                
            ),
            (
                r"Hunting the monomial $x^3 y$ in $(x+y)^5$, a marker records the coefficient $5$.",
                False,
                
            ),
        ],
        overview="Five power-sum and factoring claims: a fourth-power Newton evaluation, an undoubled square-sum, a linear coefficient, a grouping factorisation, and a degree mismatch.",
    ),
    task(
        title="A square of a difference of two squares",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Expanding $(x^2-y^2)^2$ produces $x^4-2x^2 y^2+y^4$ identically.",
                True,
                
            ),
            (
                r"""With the provisional reading that like terms have already been collected correctly, the following assertion is recorded: Whenever $u+v=9$ and $uv=20$, expanding $(u+v)^2-2uv$ is said to leave $61$. On that basis, the remaining cross-check against a concrete numerical pair is judged unnecessary.""",
                False,
                
            ),
            (
                r"The identity $(m+n)^2-(m-n)^2=4mn$ is used to report that $mn=6$ forces the left-hand side to equal $24$, independently of how the mass is split.",
                True,
                
            ),
            (
                r"The coefficient of $uv$ in $(3u+v-1)^2$ is recorded as $+3$.",
                False,
                
            ),
            (
                r"Rewriting $x^2-10x+21$ as $(x-5)^2$ with no leftover is accepted.",
                False,
                
            ),
        ],
        overview="Five rewrite checks: a squared difference of squares, an undoubled elementary product, a polarisation consequence, a mixed-term coefficient, and a completed-square leftover.",
    ),
    task(
        title="Four letters and the six doubled pairwise products",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Collecting the mixed term $ab$ in $(a+b+c+d)^2$, the coefficient $2$ is recorded.",
                True,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: With $\alpha+\beta=12$ and $\alpha\beta=32$, the value $(\alpha-\beta)^2$ is reported as $16$. On that basis, the claim is then entered in the answer key without a second expansion.""",
                True,
                
            ),
            (
                r"Sophie Germain’s completing step writes $t^4+4=(t^2+2)^2-(2t)^2$ before factoring.",
                True,
                
            ),
            (
                r"Given $y+\dfrac{1}{y}=4$ with $y\neq 0$, a booklet reports $y^2+\dfrac{1}{y^2}=16$.",
                False,
                
            ),
            (
                r"""A standardisation remark distributed with the script states that the following holds on the stated domain: A booklet claims $(2u-3v)^2-(4u^2+9v^2)$ is identically zero, while explicitly permitting the omission of a full symbolic expansion.""",
                False,
                
            ),
        ],
        overview="Five coefficient and rewrite claims: a four-letter mixed product, an elementary gap, a Sophie Germain completing step, a reciprocal square, and a binomial remainder.",
    ),
    task(
        title="Mirror quadratics whose odd powers cancel",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Rewriting $x^4+x^2+1$ as $(x^2+1)^2-x^2$ exhibits a difference of squares in $x^2+1$ and $x$.",
                True,
                
            ),
            (
                r"Given $k+\ell=7$ and $k\ell=12$, a report sets $k^2+\ell^2=37$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first rewriting the left-hand side by the named elementary identity, then equating the simplified display with the printed target expression, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: On every real pair, $(2u-3v)^2-(4u^2+9v^2)$ equals $-12uv$ — with the intermediate display still carrying $-12uv$.""",
                True,
                
            ),
            (
                r"Factoring $y^4-1$ as $(y-1)^4$ is accepted over the reals.",
                False,
                
            ),
            (
                r"Given $a+b=0$ and $ab=-9$, a booklet reports $a^2+b^2=0$.",
                False,
                
            ),
        ],
        overview="Five rewrite checks: a mirror-quadratic identity, an undoubled elementary product, a binomial remainder, a fourth-power near-miss, and a vanishing-sum trap.",
    ),
    task(
        title="Three cubes after a vanishing linear sum",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Given $a+b+c=0$ with $a=2$, $b=3$, a note sets $c=-5$ and concludes $a^3+b^3+c^3=3abc$ without expanding, then checks $-90=-90$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $a+b+c=0$.""",
                True,
                
            ),
            (
                r"Expanding $(x^2+2xy+2y^2)(x^2-2xy+2y^2)$ is claimed to recover $x^4+4y^4$ after the $4x^2 y^2$ terms cancel.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first rewriting the left-hand side by the named elementary identity, then equating the simplified display with the printed target expression, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: Whenever $p+q=6$ and $pq=7$, the Newton evaluation $p^3+q^3=90$ is reported — with the intermediate display still carrying $pq=7$.""",
                True,
                
            ),
            (
                r"Evaluating $(1^2+2^2)(3^2+4^2)$ by quoting only $(1\cdot 3-2\cdot 4)^2=25$, a clerk declares the product equal to $25$.",
                False,
                
            ),
            (
                r"Completing $2x^2-8x+10$ is recorded as $2(x-2)^2$ with no leftover.",
                False,
                
            ),
        ],
        overview="Five independent hard checks: a vanishing-sum cube, Sophie Germain, a Newton cube-sum, a truncated Brahmagupta product, and a leading-two leftover.",
    ),
    task(
        title="Brahmagupta’s product against a cubed trinomial",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Hunting the monomial $xyz$ in $(x+y+z)^3$, a marker records its coefficient as $1$, counting only one permutation.",
                False,
                
            ),
            (
                r"With $u+v=2$ and $uv=-3$, the sum $u^3+v^3$ is reported as $26$.",
                True,
                
            ),
            (
                r"Evaluating $(1^2+2^2)(3^2+4^2)$ by Brahmagupta as $(3-8)^2+(4+6)^2$ is reported to give $125$.",
                True,
                
            ),
            (
                r"""A candidate first checks a single convenient substitution, finds that both sides agree numerically at that point, and then elevates the agreement to a claimed identity: Stopping after an incomplete square, a booklet prints $x^4+4=(x^2+2)^2$. The margin note closes without expanding the general case.""",
                False,
                
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+y)^4$, a marker records the coefficient $4$.",
                False,
                
            ),
        ],
        overview="Five coefficient and product claims: a cubed-trinomial count, a Newton cube-sum, a Brahmagupta evaluation, an incomplete square, and a fourth-power middle.",
    ),
    task(
        title="Brahmagupta’s product of two sums of squares",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Evaluating $(1^2+1^2)(2^2+3^2)$ by Brahmagupta as $(2-3)^2+(3+2)^2$ is reported to give $26$.",
                True,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: Under $a+b+c=0$, the combination $a^3+b^3+c^3-3abc$ is reported to vanish even though $a^2+b^2+c^2-ab-bc-ca$ need not. On that basis, the claim is then entered in the answer key without a second expansion.""",
                True,
                
            ),
            (
                r"Whenever $x+\dfrac{1}{x}=4$ with $x\neq 0$, the cube sum $x^3+\dfrac{1}{x^3}$ is reported as $52$.",
                True,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: Omitting the factor $\dfrac{1}{2}$, a clerk equates $u^2+v^2+w^2-uv-vw-wu$ with $(u-v)^2+(v-w)^2+(w-u)^2$ identically. Any remaining letters are declared free once that one check has passed.""",
                False,
                
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+2y)^4$, a marker records the coefficient $4$.",
                False,
                
            ),
        ],
        overview="Five hard identities: a Brahmagupta product, a vanishing first factor of the three-cube identity, a reciprocal cube, a missing half on squared gaps, and a scaled fourth-power middle.",
    ),
    task(
        title="Completing the square under a leading coefficient two",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Completing the square rewrites $2x^2-8x+10$ as $2(x-2)^2+2$ for every real $x$.",
                True,
                
            ),
            (
                r"Hunting $x^3 y$ in $(x+2y)^4$, a marker records the coefficient $4$.",
                False,
                
            ),
            (
                r"Given $s=p+q+r=6$ and $\sigma=pq+qr+rp=11$, the sum of squares $p^2+q^2+r^2$ is reported as $14$.",
                True,
                
            ),
            (
                r"A candidate claims $x^5-1=(x-1)^5$, treating a difference of fifth powers as a fifth power of a difference.",
                False,
                
            ),
            (
                r"""The board's model solution records, as if it were an identity, the following holds on the stated domain: The coefficient of $xyz$ in $(2x+y+z)^2$ is recorded as $2$, with the added remark that domain caveats may be left implicit once written once.""",
                False,
                
            ),
        ],
        overview="Five hard rewrites: a leading-two completed square, a scaled fourth-power coefficient, a three-letter square-sum, a fifth-power near-miss, and a degree mismatch.",
    ),
    task(
        title="Factoring a biquadratic after a completed square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Adding and subtracting $4x^2 y^2$ turns $x^4+4y^4$ into $(x^2+2y^2)^2-(2xy)^2$.",
                True,
                
            ),
            (
                r"Substituting $a=4$, $b=-2$, $c=-1$ into both sides of $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ produces $31$ on each side.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first expanding the binomial and collecting like terms, then comparing the collected coefficient with the figure written beside the claim, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: Whenever $m-n=2$ and $mn=15$, expanding $(m-n)^2+4mn$ yields $(m+n)^2=64$ — with the intermediate display still carrying $mn=15$.""",
                True,
                
            ),
            (
                r"Hunting $x^2 y^3$ in $(x+y)^5$, a marker records the coefficient $5$.",
                False,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: Collecting $x^2 y$ in $(x+y+z)^3$, a marker records the coefficient $1$, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                False,
                
            ),
        ],
        overview="Five hard checks: Sophie Germain’s completing step, a three-cube numerical test, a polarisation square, a degree mismatch, and a cubed-trinomial count.",
    ),
    task(
        title="A cubic leftover after a cubed binomial is subtracted",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Expanding $(x+2)^3$ and subtracting $x^3+8$, the remainder is identically $6x^2+12x$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $(x+2)^3$.""",
                True,
                
            ),
            (
                r"Given $p+q+r=0$ with $p=4$, $q=-1$, a note sets $r=3$ and concludes $p^3+q^3+r^3=3pqr$.",
                False,
                
            ),
            (
                r"On every real triple, $x^2-(y+z)^2$ equals $(x-y-z)(x+y+z)$.",
                True,
                
            ),
            (
                r"Someone writes $(x+y)(y+z)(z+x)=(x+y+z)(xy+yz+zx)$, dropping the $-xyz$ correction.",
                False,
                
            ),
            (
                r"A marker accepts $(5w-1)^2=(5w+1)^2$ after declaring the middle sign irrelevant.",
                False,
                
            ),
        ],
        overview="Five leftover checks: a cubed-binomial remainder, a vanishing-sum trap, a grouped difference of squares, a cyclic-product correction, and opposite binomials.",
    ),
    task(
        title="Polarisation leftovers after two squares collide",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: The polarisation identity $(m+n)^2-(m-n)^2=4mn$ is used, with $m=5$ and $n=3$, to report the left-hand side equal to $60$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $(m+n)^2-(m-n)^2=4mn$.""",
                True,
                
            ),
            (
                r"Factoring $x^4-y^4$ as $(x-y)(x+y)(x^2+y^2)$ is accepted over the reals.",
                True,
                
            ),
            (
                r"Whenever $x+\dfrac{1}{x}=5$ with $x\neq 0$, the square sum $x^2+\dfrac{1}{x^2}$ is reported as $23$.",
                True,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: Given $y+\dfrac{1}{y}=5$ with $y\neq 0$, a note reports $y^4+\dfrac{1}{y^4}=625$. Any remaining letters are declared free once that one check has passed.""",
                False,
                
            ),
            (
                r"The companion difference $(h+k)^3-(h-k)^3$ is rewritten as $2h(h^2+3k^2)$ as well.",
                False,
                
            ),
        ],
        overview="Five polarisation and power claims: a numerical $4mn$, a biquadratic factorisation, a reciprocal square, a reciprocal fourth power, and a cube-difference sign pattern.",
    ),
    task(
        title="Hunting one mixed product in a shifted trinomial square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"After collecting only the $xy$ term in $(2x-y+3)^2$, a marker records its coefficient as $-4$.",
                True,
                
            ),
            (
                r"""Under the standing hypothesis that every letter is real (and nonzero wherever a denominator appears), the following assertion is recorded: Given $c+d=0$ and $cd=-4$, a booklet reports $c^2+d^2=0$. On that basis, the notebook treats the rewritten form as an identity on the whole stated domain.""",
                False,
                
            ),
            (
                r"The three-cube factorisation is used at $(a,b,c)=(1,1,-2)$ to report $a^3+b^3+c^3-3abc=0$ because $a+b+c=0$.",
                True,
                
            ),
            (
                r"Expanding $(x+y+z)^2$ as $x^2+y^2+z^2+xy+yz+zx$ is accepted, and the coefficient of $xy$ is therefore recorded as $1$.",
                False,
                
            ),
            (
                r"Given $p+q+r=3$ and $pq+qr+rp=2$, a clerk reports $p^2+q^2+r^2=7$.",
                False,
                
            ),
        ],
        overview="Five coefficient and elementary-sum claims: a trinomial mixed term, a vanishing-sum trap, a three-cube specialisation, a dropped factor two, and a three-letter square-sum.",
    ),
    task(
        title="A biquadratic that is already a completed square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Recognising $x^4+2x^2 y^2+y^4$ as $(x^2+y^2)^2$ is valid for every real pair.",
                True,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: With $p+q=1$ and $pq=-6$, the cube sum $p^3+q^3$ is reported as $19$. On that basis, a second marker initials the line after comparing only the leading terms.""",
                True,
                
            ),
            (
                r"Grouping $x^3+3x^2-x-3$ as $x^2(x+3)-(x+3)$ factors as $(x^2-1)(x+3)=(x-1)(x+1)(x+3)$.",
                True,
                
            ),
            (
                r"The coefficient of $x^2 y$ in $(2x+y)^3$ is recorded as $2$.",
                False,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: A booklet prints $x^4+4y^4=(x^2+2xy+2y^2)^2$ for every real pair, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                False,
                
            ),
        ],
        overview="Five hard recognitions: a biquadratic square, a Newton cube-sum, a grouping factorisation, a degree mismatch, and a squared Sophie Germain factor.",
    ),
    task(
        title="Walking around three squared differences",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Evaluating $\dfrac12\bigl((a-b)^2+(b-c)^2+(c-a)^2\bigr)$ at $(a,b,c)=(5,1,0)$ is reported to equal $a^2+b^2+c^2-ab-bc-ca=21$.",
                True,
                
            ),
            (
                r"A booklet prints $x^4+4=(x^2+2x+2)^2$ for every real $x$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first rewriting the left-hand side by the named elementary identity, then equating the simplified display with the printed target expression, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: On every real pair $(h,k)$, rewriting $(h+k)^3+(h-k)^3$ as $2h(h^2+3k^2)$ is accepted — with the intermediate display still carrying $(h+k)^3+(h-k)^3$.""",
                True,
                
            ),
            (
                r"Rewriting the difference $(\rho+\sigma)^3-(\rho-\sigma)^3$ as $2\rho(\rho^2+3\sigma^2)$ is accepted on every real pair.",
                False,
                
            ),
            (
                r"Given $a+b+c=0$ with $a=1$, $b=1$, a slip sets $c=2$ and concludes $a^3+b^3+c^3=3abc$.",
                False,
                
            ),
        ],
        overview="Five closing checks: a half-sum of squared gaps, a squared Sophie Germain factor, a cube-sum identity, a cube-difference trap, and a vanishing-sum slip.",
    ),
]
