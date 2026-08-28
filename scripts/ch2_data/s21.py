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
                r"""Given $y+\dfrac{1}{y}=5$ ($y\neq 0$), an examiner claims $y^4+\dfrac{1}{y^4}=625$ by raising the given sum to the fourth power and discarding cross terms.""",
                False,
                r"""Write $u_k=y^k+y^{-k}$ with $u_1=5$.

Second power:

$$u_2=u_1^2-2=23$$

Third power:

$$u_3=u_1 u_2-u_1=110$$

Fourth power:

$$u_4=u_1 u_3-u_2=527$$

Raising $u_1$ to the fourth power alone would give $625$, not $u_4$. The true value is $527$, not $625$.""",
            ),
            (
                r"After collecting only the $xy$ term in $(2x-y+3)^2$, a marker records its coefficient as $+4$. The remaining terms are not needed to judge the claim.",
                False,
                
            ),
            (
                r"""Adding and subtracting $4f^2g^2$ inside $f^4+4g^4$ is claimed to produce the difference of squares $(f^2+2g^2)^2-(2fg)^2$, which then factors as $(f^2-2fg+2g^2)(f^2+2fg+2g^2)$ on every real pair $(f,g)$.""",
                True,
                r"""Complete to a difference of squares by inserting $\pm 4f^2g^2$:

Rewrite:

$$f^4+4g^4=(f^2+2g^2)^2-(2fg)^2$$

Factor:

$$=(f^2-2fg+2g^2)(f^2+2fg+2g^2)$$

Both steps are identities in the two letters.""",
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
                r"""Adding and subtracting $4a^2b^2$ inside $a^4+4b^4$ is claimed to produce the difference of squares $(a^2+2b^2)^2-(2ab)^2$, which then factors as $(a^2-2ab+2b^2)(a^2+2ab+2b^2)$ on every real pair $(a,b)$.""",
                True,
                r"""Complete to a difference of squares by inserting $\pm 4a^2b^2$:

Rewrite:

$$a^4+4b^4=(a^2+2b^2)^2-(2ab)^2$$

Factor:

$$=(a^2-2ab+2b^2)(a^2+2ab+2b^2)$$

Both steps are identities in the two letters.""",
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
                r"""A shortened expansion treats $(w+z)^3-(w-z)^3$ as $2z\cdot 3w^2=6w^2z$ on the whole plane, dropping the $z^2$ contribution inside the quadratic factor.""",
                False,
                r"""With $A=w+z$, $B=w-z$ one still has $A-B=2z$, but

Quadratic factor:

$$A^2+AB+B^2=3w^2+z^2$$

Full product:

$$2z(3w^2+z^2)=6w^2z+2z^3$$

The dropped term $2z^3$ is not identically zero.""",
            ),
            (
                r"A student expands $(f+g)^2$, subtracts $f^2+g^2$, and claims the remainder is identically zero.",
                False,
                
            ),
            (
                r"""Given the constraint $a+b+c=0$ together with the concrete values $a=2$, $b=5$ (hence $c=-7$), a marker invokes the vanishing-sum identity and records $a^3+b^3+c^3=3abc=-210$ without expanding the cubes.""",
                True,
                r"""The hypothesis $a+b+c=0$ forces $c=-(2+5)=-7$.

Identity:

$$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$$

With $a+b+c=0$ the factor vanishes, so $a^3+b^3+c^3=3abc$.

Evaluate:

$$3\cdot 2\cdot (5)\cdot (-7)=-210$$

The recorded value matches.""",
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
                r"""An examiner writes $a=10$, $b=-6$, $c=4$ and, citing the slogan "$a+b+c=0\Rightarrow a^3+b^3+c^3=3abc$", concludes $a^3+b^3+c^3=-720$ without checking whether the three values actually sum to zero.""",
                False,
                r"""The vanishing-sum shortcut requires $a+b+c=0$, hence $c=-(10+-6)=-4$, not $c=4$.

Check the sum:

$$10+(-6)+(4)=8\\neq 0$$

Direct cubes:

$$10^3+(-6)^3+(4)^3=848$$

Triple product:

$$3\cdot 10\cdot (-6)\cdot (4)=-720$$

Since $848\neq -720$, the shortcut fails.""",
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
                r"""Completing the square for $q^2-6q+10$ is recorded as $(q-3)^2$ for every real $q$. A follow-up note then treats the rewritten form as having a double real root whenever the leftover constant is ignored.""",
                False,
                r"""Half of the linear coefficient $-6$ is $-3$, and $(-3)^2=9$.

Complete:

$$q^2-6q+10=(q^2-6q+9)+1=(q-3)^2+1$$

The true completed form is $(q-3)^2+1$. The printed $(q-3)^2$ does not match, so the follow-up about roots is moot.""",
            ),
            (
                r"A note concludes that $(u-v)^3=u^3-v^3$ for every real pair, the middle terms being cancelled by habit.",
                False,
                
            ),
            (
                r"""With $z+\dfrac{1}{z}=3$ and $z\neq 0$, a standardisation note first forms $z^2+\dfrac{1}{z^2}=(z+\dfrac{1}{z})^2-2$ and then claims $z^3+\dfrac{1}{z^3}=18$.""",
                True,
                r"""Set $u_k=z^k+z^{-k}$. From the given data $u_1=3$.

Square:

$$u_2=u_1^2-2=3^2-2=7$$

Recurrence:

$$u_3=u_1\cdot u_2-u_1=3\cdot 7-3=18$$

The printed target $18$ matches.""",
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
                r"""An examiner writes $a=10$, $b=-6$, $c=4$ and, citing the slogan "$a+b+c=0\Rightarrow a^3+b^3+c^3=3abc$", concludes $a^3+b^3+c^3=-720$ without checking whether the three values actually sum to zero, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""The vanishing-sum shortcut requires $a+b+c=0$, hence $c=-(10+-6)=-4$, not $c=4$.

Check the sum:

$$10+(-6)+(4)=8\\neq 0$$

Direct cubes:

$$10^3+(-6)^3+(4)^3=848$$

Triple product:

$$3\cdot 10\cdot (-6)\cdot (4)=-720$$

Since $848\neq -720$, the shortcut fails.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""With $t+\dfrac{1}{t}=8$ and $t\neq 0$, a standardisation note first forms $t^2+\dfrac{1}{t^2}=(t+\dfrac{1}{t})^2-2$ and then claims $t^3+\dfrac{1}{t^3}=488$.""",
                True,
                r"""Set $u_k=t^k+t^{-k}$. From the given data $u_1=8$.

Square:

$$u_2=u_1^2-2=8^2-2=62$$

Recurrence:

$$u_3=u_1\cdot u_2-u_1=8\cdot 62-8=488$$

The printed target $488$ matches.""",
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
                r"""The product of sums of squares $(3^2+2^2)(3^2+1^2)$ is rewritten as $(3\cdot 3-2\cdot 1)^2+(3\cdot 1+2\cdot 3)^2$ and evaluated as $130$. Both the identity and the arithmetic are accepted.""",
                True,
                r"""Brahmagupta's identity expresses a product of two sums of squares as a sum of squares:

Identity:

$$(3^2+2^2)(3^2+1^2)=(33-21)^2+(31+23)^2$$

Arithmetic:

$$=(9-2)^2+(3+6)^2=130$$

The product on the left is likewise $130$.""",
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
                r"""Given $k+\dfrac{1}{k}=2$ ($k\neq 0$), an examiner claims $k^4+\dfrac{1}{k^4}=2$ by raising the given sum to the fourth power and discarding cross terms.""",
                True,
                r"""Write $u_k=k^k+k^{-k}$ with $u_1=2$.

Second power:

$$u_2=u_1^2-2=2$$

Third power:

$$u_3=u_1 u_2-u_1=2$$

Fourth power:

$$u_4=u_1 u_3-u_2=2$$

Raising $u_1$ to the fourth power alone would give $16$, not $u_4$. The true value is $2$, matching the claim.""",
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
                r"""A shortened expansion treats $(a+b)^3-(a-b)^3$ as $2b\cdot 3a^2=6a^2b$ on the whole plane, dropping the $b^2$ contribution inside the quadratic factor.""",
                False,
                r"""With $A=a+b$, $B=a-b$ one still has $A-B=2b$, but

Quadratic factor:

$$A^2+AB+B^2=3a^2+b^2$$

Full product:

$$2b(3a^2+b^2)=6a^2b+2b^3$$

The dropped term $2b^3$ is not identically zero.""",
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
                r"""Adding and subtracting $4m^2n^2$ inside $m^4+4n^4$ is claimed to produce the difference of squares $(m^2+2n^2)^2-(2mn)^2$, which then factors as $(m^2-2mn+2n^2)(m^2+2mn+2n^2)$ on every real pair $(m,n)$.""",
                True,
                r"""Complete to a difference of squares by inserting $\pm 4m^2n^2$:

Rewrite:

$$m^4+4n^4=(m^2+2n^2)^2-(2mn)^2$$

Factor:

$$=(m^2-2mn+2n^2)(m^2+2mn+2n^2)$$

Both steps are identities in the two letters.""",
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
                r"""A shortened expansion treats $(h+k)^3-(h-k)^3$ as $2k\cdot 3h^2=6h^2k$ on the whole plane, dropping the $k^2$ contribution inside the quadratic factor.""",
                False,
                r"""With $A=h+k$, $B=h-k$ one still has $A-B=2k$, but

Quadratic factor:

$$A^2+AB+B^2=3h^2+k^2$$

Full product:

$$2k(3h^2+k^2)=6h^2k+2k^3$$

The dropped term $2k^3$ is not identically zero.""",
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
                r"""Adding and subtracting $4t^2u^2$ inside $t^4+4u^4$ is claimed to produce the difference of squares $(t^2+2u^2)^2-(2tu)^2$, which then factors as $(t^2-2tu+2u^2)(t^2+2tu+2u^2)$ on every real pair $(t,u)$.""",
                True,
                r"""Complete to a difference of squares by inserting $\pm 4t^2u^2$:

Rewrite:

$$t^4+4u^4=(t^2+2u^2)^2-(2tu)^2$$

Factor:

$$=(t^2-2tu+2u^2)(t^2+2tu+2u^2)$$

Both steps are identities in the two letters.""",
            ),
            (
                r"Whenever $\lambda+\mu=7$ and $\lambda\mu=10$, completing the evaluation of $(\lambda-\mu)^2$ yields $9$.",
                True,
                
            ),
            (
                r"""Completing the square for $h^2-20h+90$ is recorded as $(h-10)^2-10$ for every real $h$. A follow-up note then treats the rewritten form as having a double real root whenever the leftover constant is ignored.""",
                True,
                r"""Half of the linear coefficient $-20$ is $-10$, and $(-10)^2=100$.

Complete:

$$h^2-20h+90=(h^2-20h+100)-10=(h-10)^2-10$$

The true completed form is $(h-10)^2-10$. The printed form matches.""",
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
                r"""Completing the square for $z^2-8z+7$ is recorded as $(z-4)^2-9$ for every real $z$. A follow-up note then treats the rewritten form as having a double real root whenever the leftover constant is ignored.""",
                True,
                r"""Half of the linear coefficient $-8$ is $-4$, and $(-4)^2=16$.

Complete:

$$z^2-8z+7=(z^2-8z+16)-9=(z-4)^2-9$$

The true completed form is $(z-4)^2-9$. The printed form matches.""",
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
                r"""An examiner writes $a=6$, $b=-2$, $c=5$ and, citing the slogan "$a+b+c=0\Rightarrow a^3+b^3+c^3=3abc$", concludes $a^3+b^3+c^3=-180$ without checking whether the three values actually sum to zero.""",
                False,
                r"""The vanishing-sum shortcut requires $a+b+c=0$, hence $c=-(6+-2)=-4$, not $c=5$.

Check the sum:

$$6+(-2)+(5)=9\\neq 0$$

Direct cubes:

$$6^3+(-2)^3+(5)^3=333$$

Triple product:

$$3\cdot 6\cdot (-2)\cdot (5)=-180$$

Since $333\neq -180$, the shortcut fails.""",
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+y)^4$, a marker records the coefficient $6$.",
                True,
                
            ),
            (
                r"""The product of sums of squares $(3^2+1^2)(2^2+2^2)$ is rewritten as $(3\cdot 2-1\cdot 2)^2+(3\cdot 2+1\cdot 2)^2$ and evaluated as $80$. Both the identity and the arithmetic are accepted.""",
                True,
                r"""Brahmagupta's identity expresses a product of two sums of squares as a sum of squares:

Identity:

$$(3^2+1^2)(2^2+2^2)=(32-12)^2+(32+12)^2$$

Arithmetic:

$$=(6-2)^2+(6+2)^2=80$$

The product on the left is likewise $80$.""",
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
                r"""A notebook multiplies $(2^2+3^2)(1^2+4^2)$ by pairing like letters only, writing $(21+31)^2+(24-34)^2=41$, and treats that as the value of the product.""",
                False,
                r"""The correct cross pairing is not "like letters":

Correct identity:

$$(2^2+3^2)(1^2+4^2)=(21-34)^2+(24+31)^2=221$$

Printed pairing:

$$(21+31)^2+(24-34)^2=41$$

Since $41\neq 221$, the pairing is false.""",
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
                r"""With $n+\dfrac{1}{n}=6$ and $n\neq 0$, a standardisation note first forms $n^2+\dfrac{1}{n^2}=(n+\dfrac{1}{n})^2-2$ and then claims $n^3+\dfrac{1}{n^3}=198$.""",
                True,
                r"""Set $u_k=n^k+n^{-k}$. From the given data $u_1=6$.

Square:

$$u_2=u_1^2-2=6^2-2=34$$

Recurrence:

$$u_3=u_1\cdot u_2-u_1=6\cdot 34-6=198$$

The printed target $198$ matches.""",
            ),
            (
                r"Given $s=x+y+z=4$ and $p=xy+yz+zx=1$, a clerk reports $x^2+y^2+z^2=15$.",
                False,
                
            ),
            (
                r"""A marker treats $j^4+4k^4$ as identically equal to $(j^2+2jk+2k^2)^2$ for every real pair $(j,k)$, citing a shortened Sophie Germain argument.""",
                False,
                r"""Squaring one Sophie Germain factor alone produces

Expand:

$$(j^2+2jk+2k^2)^2=j^4+4j^3k+8j^2k^2+8jk^3+4k^4$$

Cross terms survive; the identity requires the product of both conjugate factors.""",
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
                r"""The product of sums of squares $(1^2+2^2)(3^2+4^2)$ is rewritten as $(1\cdot 3-2\cdot 4)^2+(1\cdot 4+2\cdot 3)^2$ and evaluated as $125$. Both the identity and the arithmetic are accepted.""",
                True,
                r"""Brahmagupta's identity expresses a product of two sums of squares as a sum of squares:

Identity:

$$(1^2+2^2)(3^2+4^2)=(13-24)^2+(14+23)^2$$

Arithmetic:

$$=(3-8)^2+(4+6)^2=125$$

The product on the left is likewise $125$.""",
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
                r"""Adding and subtracting $4a^2b^2$ inside $a^4+4b^4$ is claimed to produce the difference of squares $(a^2+2b^2)^2-(2ab)^2$, which then factors as $(a^2-2ab+2b^2)(a^2+2ab+2b^2)$ on every real pair $(a,b)$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Complete to a difference of squares by inserting $\pm 4a^2b^2$:

Rewrite:

$$a^4+4b^4=(a^2+2b^2)^2-(2ab)^2$$

Factor:

$$=(a^2-2ab+2b^2)(a^2+2ab+2b^2)$$

Both steps are identities in the two letters.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""A shortened expansion treats $(r+s)^3-(r-s)^3$ as $2s\cdot 3r^2=6r^2s$ on the whole plane, dropping the $s^2$ contribution inside the quadratic factor.""",
                False,
                r"""With $A=r+s$, $B=r-s$ one still has $A-B=2s$, but

Quadratic factor:

$$A^2+AB+B^2=3r^2+s^2$$

Full product:

$$2s(3r^2+s^2)=6r^2s+2s^3$$

The dropped term $2s^3$ is not identically zero.""",
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
                r"""Adding and subtracting $4x^2y^2$ inside $x^4+4y^4$ is claimed to produce the difference of squares $(x^2+2y^2)^2-(2xy)^2$, which then factors as $(x^2-2xy+2y^2)(x^2+2xy+2y^2)$ on every real pair $(x,y)$.""",
                True,
                r"""Complete to a difference of squares by inserting $\pm 4x^2y^2$:

Rewrite:

$$x^4+4y^4=(x^2+2y^2)^2-(2xy)^2$$

Factor:

$$=(x^2-2xy+2y^2)(x^2+2xy+2y^2)$$

Both steps are identities in the two letters.""",
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
                r"""An examiner writes $a=8$, $b=-3$, $c=2$ and, citing the slogan "$a+b+c=0\Rightarrow a^3+b^3+c^3=3abc$", concludes $a^3+b^3+c^3=-144$ without checking whether the three values actually sum to zero.""",
                False,
                r"""The vanishing-sum shortcut requires $a+b+c=0$, hence $c=-(8+-3)=-5$, not $c=2$.

Check the sum:

$$8+(-3)+(2)=7\\neq 0$$

Direct cubes:

$$8^3+(-3)^3+(2)^3=493$$

Triple product:

$$3\cdot 8\cdot (-3)\cdot (2)=-144$$

Since $493\neq -144$, the shortcut fails.""",
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
                r"""Completing the square for $p^2-16p+60$ is recorded as $(p-8)^2-4$ for every real $p$. A follow-up note then treats the rewritten form as having a double real root whenever the leftover constant is ignored.""",
                True,
                r"""Half of the linear coefficient $-16$ is $-8$, and $(-8)^2=64$.

Complete:

$$p^2-16p+60=(p^2-16p+64)-4=(p-8)^2-4$$

The true completed form is $(p-8)^2-4$. The printed form matches.""",
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
                r"""Given the constraint $a+b+c=0$ together with the concrete values $a=3$, $b=5$ (hence $c=-8$), a marker invokes the vanishing-sum identity and records $a^3+b^3+c^3=3abc=-360$ without expanding the cubes.""",
                True,
                r"""The hypothesis $a+b+c=0$ forces $c=-(3+5)=-8$.

Identity:

$$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$$

With $a+b+c=0$ the factor vanishes, so $a^3+b^3+c^3=3abc$.

Evaluate:

$$3\cdot 3\cdot (5)\cdot (-8)=-360$$

The recorded value matches.""",
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
                r"""Completing the square for $p^2-16p+60$ is recorded as $(p-8)^2-4$ for every real $p$. A follow-up note then treats the rewritten form as having a double real root whenever the leftover constant is ignored, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Half of the linear coefficient $-16$ is $-8$, and $(-8)^2=64$.

Complete:

$$p^2-16p+60=(p^2-16p+64)-4=(p-8)^2-4$$

The true completed form is $(p-8)^2-4$. The printed form matches.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Expanding $(x^2+2xy+2y^2)(x^2-2xy+2y^2)$ is claimed to recover $x^4+4y^4$ after the $4x^2 y^2$ terms cancel.",
                True,
                
            ),
            (
                r"""With $p+\dfrac{1}{p}=7$ and $p\neq 0$, a standardisation note first forms $p^2+\dfrac{1}{p^2}=(p+\dfrac{1}{p})^2-2$ and then claims $p^3+\dfrac{1}{p^3}=322$.""",
                True,
                r"""Set $u_k=p^k+p^{-k}$. From the given data $u_1=7$.

Square:

$$u_2=u_1^2-2=7^2-2=47$$

Recurrence:

$$u_3=u_1\cdot u_2-u_1=7\cdot 47-7=322$$

The printed target $322$ matches.""",
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
                r"""With $t+\dfrac{1}{t}=8$ and $t\neq 0$, a standardisation note first forms $t^2+\dfrac{1}{t^2}=(t+\dfrac{1}{t})^2-2$ and then claims $t^3+\dfrac{1}{t^3}=488$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Set $u_k=t^k+t^{-k}$. From the given data $u_1=8$.

Square:

$$u_2=u_1^2-2=8^2-2=62$$

Recurrence:

$$u_3=u_1\cdot u_2-u_1=8\cdot 62-8=488$$

The printed target $488$ matches.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""A notebook multiplies $(3^2+3^2)(1^2+2^2)$ by pairing like letters only, writing $(31+31)^2+(32-32)^2=36$, and treats that as the value of the product.""",
                False,
                r"""The correct cross pairing is not "like letters":

Correct identity:

$$(3^2+3^2)(1^2+2^2)=(31-32)^2+(32+31)^2=90$$

Printed pairing:

$$(31+31)^2+(32-32)^2=36$$

Since $36\neq 90$, the pairing is false.""",
            ),
            (
                r"Whenever $x+\dfrac{1}{x}=4$ with $x\neq 0$, the cube sum $x^3+\dfrac{1}{x^3}$ is reported as $52$.",
                True,
                
            ),
            (
                r"""On every real pair $(n,m)$, the difference $(n+m)^3-(n-m)^3$ is rewritten by setting $A=n+m$, $B=n-m$ and expanding $A^3-B^3=(A-B)(A^2+AB+B^2)$ to obtain $2m(3n^2+m^2)$.""",
                True,
                r"""Put $A=n+m$ and $B=n-m$. Then $A-B=2m$ and $A+B=2n$.

Factor:

$$A^3-B^3=(A-B)(A^2+AB+B^2)$$

Expand the quadratic factor:

$$A^2+AB+B^2=(n+m)^2+(n+m)(n-m)+(n-m)^2=3n^2+m^2$$

Product:

$$(A-B)(A^2+AB+B^2)=2m(3n^2+m^2)$$""",
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
                r"""A shortened expansion treats $(a+b)^3-(a-b)^3$ as $2b\cdot 3a^2=6a^2b$ on the whole plane, dropping the $b^2$ contribution inside the quadratic factor, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""With $A=a+b$, $B=a-b$ one still has $A-B=2b$, but

Quadratic factor:

$$A^2+AB+B^2=3a^2+b^2$$

Full product:

$$2b(3a^2+b^2)=6a^2b+2b^3$$

The dropped term $2b^3$ is not identically zero.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Adding and subtracting $4c^2d^2$ inside $c^4+4d^4$ is claimed to produce the difference of squares $(c^2+2d^2)^2-(2cd)^2$, which then factors as $(c^2-2cd+2d^2)(c^2+2cd+2d^2)$ on every real pair $(c,d)$.""",
                True,
                r"""Complete to a difference of squares by inserting $\pm 4c^2d^2$:

Rewrite:

$$c^4+4d^4=(c^2+2d^2)^2-(2cd)^2$$

Factor:

$$=(c^2-2cd+2d^2)(c^2+2cd+2d^2)$$

Both steps are identities in the two letters.""",
            ),
            (
                r"Hunting $x^2 y^3$ in $(x+y)^5$, a marker records the coefficient $5$.",
                False,
                
            ),
            (
                r"""Completing the square for $s^2-4s+8$ is recorded as $(s-2)^2+3$ for every real $s$. A follow-up note then treats the rewritten form as having a double real root whenever the leftover constant is ignored.""",
                False,
                r"""Half of the linear coefficient $-4$ is $-2$, and $(-2)^2=4$.

Complete:

$$s^2-4s+8=(s^2-4s+4)+4=(s-2)^2+4$$

The true completed form is $(s-2)^2+4$. The printed $(s-2)^2+3$ does not match, so the follow-up about roots is moot.""",
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
                r"""A shortened expansion treats $(x+y)^3-(x-y)^3$ as $2y\cdot 3x^2=6x^2y$ on the whole plane, dropping the $y^2$ contribution inside the quadratic factor.""",
                False,
                r"""With $A=x+y$, $B=x-y$ one still has $A-B=2y$, but

Quadratic factor:

$$A^2+AB+B^2=3x^2+y^2$$

Full product:

$$2y(3x^2+y^2)=6x^2y+2y^3$$

The dropped term $2y^3$ is not identically zero.""",
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
                r"""Completing the square for $s^2-4s+8$ is recorded as $(s-2)^2+3$ for every real $s$. A follow-up note then treats the rewritten form as having a double real root whenever the leftover constant is ignored, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Half of the linear coefficient $-4$ is $-2$, and $(-2)^2=4$.

Complete:

$$s^2-4s+8=(s^2-4s+4)+4=(s-2)^2+4$$

The true completed form is $(s-2)^2+4$. The printed $(s-2)^2+3$ does not match, so the follow-up about roots is moot.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Given the constraint $a+b+c=0$ together with the concrete values $a=5$, $b=2$ (hence $c=-7$), a marker invokes the vanishing-sum identity and records $a^3+b^3+c^3=3abc=-210$ without expanding the cubes.""",
                True,
                r"""The hypothesis $a+b+c=0$ forces $c=-(5+2)=-7$.

Identity:

$$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$$

With $a+b+c=0$ the factor vanishes, so $a^3+b^3+c^3=3abc$.

Evaluate:

$$3\cdot 5\cdot (2)\cdot (-7)=-210$$

The recorded value matches.""",
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
                r"""Completing the square for $y^2-6y+14$ is recorded as $(y-3)^2+5$ for every real $y$. A follow-up note then treats the rewritten form as having a double real root whenever the leftover constant is ignored.""",
                True,
                r"""Half of the linear coefficient $-6$ is $-3$, and $(-3)^2=9$.

Complete:

$$y^2-6y+14=(y^2-6y+9)+5=(y-3)^2+5$$

The true completed form is $(y-3)^2+5$. The printed form matches.""",
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
                r"""A notebook multiplies $(2^2+3^2)(1^2+4^2)$ by pairing like letters only, writing $(21+31)^2+(24-34)^2=41$, and treats that as the value of the product, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""The correct cross pairing is not "like letters":

Correct identity:

$$(2^2+3^2)(1^2+4^2)=(21-34)^2+(24+31)^2=221$$

Printed pairing:

$$(21+31)^2+(24-34)^2=41$$

Since $41\neq 221$, the pairing is false.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Given $r+\dfrac{1}{r}=3$ ($r\neq 0$), an examiner claims $r^4+\dfrac{1}{r^4}=81$ by raising the given sum to the fourth power and discarding cross terms.""",
                False,
                r"""Write $u_k=r^k+r^{-k}$ with $u_1=3$.

Second power:

$$u_2=u_1^2-2=7$$

Third power:

$$u_3=u_1 u_2-u_1=18$$

Fourth power:

$$u_4=u_1 u_3-u_2=47$$

Raising $u_1$ to the fourth power alone would give $81$, not $u_4$. The true value is $47$, not $81$.""",
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
                r"""The product of sums of squares $(1^2+5^2)(2^2+3^2)$ is rewritten as $(1\cdot 2-5\cdot 3)^2+(1\cdot 3+5\cdot 2)^2$ and evaluated as $338$. Both the identity and the arithmetic are accepted.""",
                True,
                r"""Brahmagupta's identity expresses a product of two sums of squares as a sum of squares:

Identity:

$$(1^2+5^2)(2^2+3^2)=(12-53)^2+(13+52)^2$$

Arithmetic:

$$=(2-15)^2+(3+10)^2=338$$

The product on the left is likewise $338$.""",
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
